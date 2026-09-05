import React, { useState, useId } from 'react';
import { Language } from '../../types';
import { Play, RotateCcw, FastForward, CheckCircle2, AlertCircle, Layers, Sliders } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

interface IterationState {
  k: number;
  v2Mag: number;
  v2AngDeg: number;
  v3Mag: number;
  v3AngDeg: number;
  maxError: number;
}

export const GaussSeidelLoadFlowSolver: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const idPrefix = useId();

  // Inputs & Controls
  const [alpha, setAlpha] = useState<number>(1.4);           // Acceleration factor (1.0 to 1.6)
  const [loadP2, setLoadP2] = useState<number>(-0.80);      // p.u.
  const [loadQ2, setLoadQ2] = useState<number>(-0.40);      // p.u.
  const [loadP3, setLoadP3] = useState<number>(-0.50);      // p.u.
  const [loadQ3, setLoadQ3] = useState<number>(-0.20);      // p.u.

  // Bus 1 Slack: V1 = 1.05 ∠ 0°
  const v1Real = 1.05;
  const v1Imag = 0.0;

  // 3-Bus admittance matrix (given line reactances x12 = 0.1, x23 = 0.1, x13 = 0.2)
  // Lossless lines: y12 = -j10, y23 = -j10, y13 = -j5
  // Y11 = -j15, Y12 = +j10, Y13 = +j5
  // Y22 = -j20, Y21 = +j10, Y23 = +j10
  // Y33 = -j15, Y31 = +j5,  Y32 = +j10
  // Since Y_ii are purely imaginary (-j*B_ii), 1/Y_ii = +j/B_ii.

  // Current iteration step state
  const [iteration, setIteration] = useState<number>(0);
  const [history, setHistory] = useState<IterationState[]>([
    { k: 0, v2Mag: 1.000, v2AngDeg: 0.0, v3Mag: 1.000, v3AngDeg: 0.0, maxError: 1.0 }
  ]);

  // Current values
  const current = history[history.length - 1];
  const isConverged = current.maxError < 0.0005 && iteration > 0;

  // Single step calculation function
  const stepIteration = () => {
    if (isConverged || iteration >= 30) return;

    // Previous values
    let v2R = current.v2Mag * Math.cos((current.v2AngDeg * Math.PI) / 180);
    let v2I = current.v2Mag * Math.sin((current.v2AngDeg * Math.PI) / 180);

    let v3R = current.v3Mag * Math.cos((current.v3AngDeg * Math.PI) / 180);
    let v3I = current.v3Mag * Math.sin((current.v3AngDeg * Math.PI) / 180);

    // Calculate Bus 2:
    // (P2 - jQ2) / V2* = (P2 - jQ2) / (v2R - j v2I)
    const v2ConjMagSq = v2R * v2R + v2I * v2I;
    const term2R = (loadP2 * v2R + loadQ2 * v2I) / v2ConjMagSq;
    const term2I = (loadP2 * (-v2I) - loadQ2 * v2R) / v2ConjMagSq;

    // Sum Y_ij * Vj:
    // Y21 * V1 = (+j10) * 1.05 = +j10.5
    // Y23 * V3 = (+j10) * (v3R + j v3I) = -10*v3I + j(10*v3R)
    const sum2R = -10 * v3I;
    const sum2I = 10.5 + 10 * v3R;

    // Diff = Term2 - Sum2
    const diff2R = term2R - sum2R;
    const diff2I = term2I - sum2I;

    // Multiply by 1/Y22 = 1/(-j20) = +j(1/20) = +j0.05
    // (+j0.05) * (diff2R + j diff2I) = -0.05*diff2I + j(0.05*diff2R)
    const v2NewUnaccR = -0.05 * diff2I;
    const v2NewUnaccI = 0.05 * diff2R;

    // Apply acceleration factor: V_acc = V_old + alpha * (V_new - V_old)
    const v2AccR = v2R + alpha * (v2NewUnaccR - v2R);
    const v2AccI = v2I + alpha * (v2NewUnaccI - v2I);

    // Calculate Bus 3 (using updated V2!):
    const v3ConjMagSq = v3R * v3R + v3I * v3I;
    const term3R = (loadP3 * v3R + loadQ3 * v3I) / v3ConjMagSq;
    const term3I = (loadP3 * (-v3I) - loadQ3 * v3R) / v3ConjMagSq;

    // Y31 * V1 = (+j5) * 1.05 = +j5.25
    // Y32 * V2_updated = (+j10) * (v2AccR + j v2AccI) = -10*v2AccI + j(10*v2AccR)
    const sum3R = -10 * v2AccI;
    const sum3I = 5.25 + 10 * v2AccR;

    const diff3R = term3R - sum3R;
    const diff3I = term3I - sum3I;

    // Multiply by 1/Y33 = 1/(-j15) = +j(1/15) = +j0.06667
    const v3NewUnaccR = -(1 / 15) * diff3I;
    const v3NewUnaccI = (1 / 15) * diff3R;

    const v3AccR = v3R + alpha * (v3NewUnaccR - v3R);
    const v3AccI = v3I + alpha * (v3NewUnaccI - v3I);

    // New magnitudes & angles
    const v2MagNew = Math.sqrt(v2AccR * v2AccR + v2AccI * v2AccI);
    const v2AngNew = (Math.atan2(v2AccI, v2AccR) * 180) / Math.PI;

    const v3MagNew = Math.sqrt(v3AccR * v3AccR + v3AccI * v3AccI);
    const v3AngNew = (Math.atan2(v3AccI, v3AccR) * 180) / Math.PI;

    // Error
    const err2 = Math.sqrt(Math.pow(v2AccR - v2R, 2) + Math.pow(v2AccI - v2I, 2));
    const err3 = Math.sqrt(Math.pow(v3AccR - v3R, 2) + Math.pow(v3AccI - v3I, 2));
    const maxErr = Math.max(err2, err3);

    const nextState: IterationState = {
      k: iteration + 1,
      v2Mag: v2MagNew,
      v2AngDeg: v2AngNew,
      v3Mag: v3MagNew,
      v3AngDeg: v3AngNew,
      maxError: maxErr
    };

    setIteration(iteration + 1);
    setHistory([...history, nextState]);
  };

  const runAllIterations = () => {
    let hist = [...history];
    let it = iteration;
    let err = hist[hist.length - 1].maxError;

    while (err > 0.0005 && it < 25) {
      const cur = hist[hist.length - 1];
      let v2R = cur.v2Mag * Math.cos((cur.v2AngDeg * Math.PI) / 180);
      let v2I = cur.v2Mag * Math.sin((cur.v2AngDeg * Math.PI) / 180);
      let v3R = cur.v3Mag * Math.cos((cur.v3AngDeg * Math.PI) / 180);
      let v3I = cur.v3Mag * Math.sin((cur.v3AngDeg * Math.PI) / 180);

      const v2ConjMagSq = v2R * v2R + v2I * v2I;
      const term2R = (loadP2 * v2R + loadQ2 * v2I) / v2ConjMagSq;
      const term2I = (loadP2 * (-v2I) - loadQ2 * v2R) / v2ConjMagSq;
      const sum2R = -10 * v3I;
      const sum2I = 10.5 + 10 * v3R;
      const diff2R = term2R - sum2R;
      const diff2I = term2I - sum2I;
      const v2NewUnaccR = -0.05 * diff2I;
      const v2NewUnaccI = 0.05 * diff2R;
      const v2AccR = v2R + alpha * (v2NewUnaccR - v2R);
      const v2AccI = v2I + alpha * (v2NewUnaccI - v2I);

      const v3ConjMagSq = v3R * v3R + v3I * v3I;
      const term3R = (loadP3 * v3R + loadQ3 * v3I) / v3ConjMagSq;
      const term3I = (loadP3 * (-v3I) - loadQ3 * v3R) / v3ConjMagSq;
      const sum3R = -10 * v2AccI;
      const sum3I = 5.25 + 10 * v2AccR;
      const diff3R = term3R - sum3R;
      const diff3I = term3I - sum3I;
      const v3NewUnaccR = -(1 / 15) * diff3I;
      const v3NewUnaccI = (1 / 15) * diff3R;
      const v3AccR = v3R + alpha * (v3NewUnaccR - v3R);
      const v3AccI = v3I + alpha * (v3NewUnaccI - v3I);

      const v2MagNew = Math.sqrt(v2AccR * v2AccR + v2AccI * v2AccI);
      const v2AngNew = (Math.atan2(v2AccI, v2AccR) * 180) / Math.PI;
      const v3MagNew = Math.sqrt(v3AccR * v3AccR + v3AccI * v3AccI);
      const v3AngNew = (Math.atan2(v3AccI, v3AccR) * 180) / Math.PI;

      const err2 = Math.sqrt(Math.pow(v2AccR - v2R, 2) + Math.pow(v2AccI - v2I, 2));
      const err3 = Math.sqrt(Math.pow(v3AccR - v3R, 2) + Math.pow(v3AccI - v3I, 2));
      err = Math.max(err2, err3);
      it++;

      hist.push({
        k: it,
        v2Mag: v2MagNew,
        v2AngDeg: v2AngNew,
        v3Mag: v3MagNew,
        v3AngDeg: v3AngNew,
        maxError: err
      });
    }

    setIteration(it);
    setHistory(hist);
  };

  const resetSolver = () => {
    setIteration(0);
    setHistory([{ k: 0, v2Mag: 1.000, v2AngDeg: 0.0, v3Mag: 1.000, v3AngDeg: 0.0, maxError: 1.0 }]);
  };

  const t = {
    en: {
      title: 'Gauss-Seidel Load-Flow Iterative Solver Engine',
      subtitle: 'Watch bus voltage estimates converge through successive nodal admittance equations with acceleration factors',
      stepBtn: 'Step (k + 1)',
      convergeBtn: 'Solve to Convergence',
      resetBtn: 'Reset to Flat Start',
      alphaLabel: 'Acceleration Factor (α = 1.0 to 1.6):',
      p2Label: 'Bus 2 Load Active Power (P2, p.u.):',
      q2Label: 'Bus 2 Load Reactive Power (Q2, p.u.):',
      statusTitle: 'Current Iteration State (k = ' + iteration + ')',
      v2Label: 'Bus 2 Voltage (V2):',
      v3Label: 'Bus 3 Voltage (V3):',
      errorLabel: 'Max Voltage Mismatch (|ΔV|):',
      convergedBadge: 'CONVERGED (Tolerance < 0.0005 p.u.)',
      tableTitle: 'Gauss-Seidel Convergence History',
      colK: 'Iteration (k)',
      colV2: 'V2 (p.u. ∠ deg)',
      colV3: 'V3 (p.u. ∠ deg)',
      colErr: 'Mismatch |ΔV|'
    },
    hi: {
      title: 'गॉस-सीडेल लोड-फ्लो पुनरावृत्तीय सॉल्वर इंजन',
      subtitle: 'त्वरण गुणांक (Acceleration Factor) के साथ नोडल एडमिटेंस समीकरणों द्वारा वोल्टेज का अभिसरण देखें',
      stepBtn: 'एक कदम आगे (k + 1)',
      convergeBtn: 'पूर्ण अभिसरण तक हल करें',
      resetBtn: 'रीसेट (फ्लैट स्टार्ट 1.0 p.u.)',
      alphaLabel: 'त्वरण गुणांक (α = 1.0 से 1.6):',
      p2Label: 'बस 2 सक्रिय लोड (P2, p.u.):',
      q2Label: 'बस 2 प्रतिघाती लोड (Q2, p.u.):',
      statusTitle: 'वर्तमान पुनरावृत्ति स्थिति (k = ' + iteration + ')',
      v2Label: 'बस 2 वोल्टेज (V2):',
      v3Label: 'बस 3 वोल्टेज (V3):',
      errorLabel: 'अधिकतम वोल्टेज त्रुटि (|ΔV|):',
      convergedBadge: 'अभिसरित (त्रुटि < 0.0005 p.u.)',
      tableTitle: 'गॉस-सीडेल अभिसरण इतिहास',
      colK: 'पुनरावृत्ति (k)',
      colV2: 'V2 (p.u. ∠ deg)',
      colV3: 'V3 (p.u. ∠ deg)',
      colErr: 'त्रुटि |ΔV|'
    },
    bn: {
      title: 'গস-সাইডেল লোড-ফ্লো ইটারেটিভ সলভার ইঞ্জিন',
      subtitle: 'অ্যাক্সিলারেশন ফ্যাক্টরসহ নোডাল অ্যাডমিট্যান্স সমীকরণের সাহায্যে বাস ভোল্টেজ রূপান্তর পর্যবেক্ষণ করুন',
      stepBtn: 'এক ধাপ অগ্রসর (k + 1)',
      convergeBtn: 'সম্পূর্ণ রূপান্তর পর্যন্ত সমাধান',
      resetBtn: 'ফ্ল্যাট স্টার্টে রিসেট (1.0 p.u.)',
      alphaLabel: 'অ্যাক্সিলারেশন ফ্যাক্টর (α = ১.০ থেকে ১.৬):',
      p2Label: 'বাস ২ অ্যাক্টিভ লোড (P2, p.u.):',
      q2Label: 'বাস ২ রিঅ্যাক্টিভ লোড (Q2, p.u.):',
      statusTitle: 'বর্তমান ইটারেশন অবস্থা (k = ' + iteration + ')',
      v2Label: 'বাস ২ ভোল্টেজ (V2):',
      v3Label: 'বাস ৩ ভোল্টেজ (V3):',
      errorLabel: 'সর্বোচ্চ ভোল্টেজ ত্রুটি (|ΔV|):',
      convergedBadge: 'কনভার্জড (ত্রুটি < ০.০০০৫ p.u.)',
      tableTitle: 'গস-সাইডেল কনভারজেন্স ইতিহাস',
      colK: 'ইটারেশন (k)',
      colV2: 'V2 (p.u. ∠ deg)',
      colV3: 'V3 (p.u. ∠ deg)',
      colErr: 'ত্রুটি |ΔV|'
    }
  }[lang];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-white shadow-xl max-w-4xl mx-auto my-6">
      {/* Header */}
      <div className="flex items-start justify-between border-b border-slate-800 pb-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-emerald-400" />
            <h3 className="text-xl font-bold text-emerald-400">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-400 mt-1">{t.subtitle}</p>
        </div>
        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-mono font-semibold">
          Gauss-Seidel [Y_bus]
        </span>
      </div>

      {/* Solver Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-950 p-3 rounded-lg border border-slate-800 mb-5">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={stepIteration}
            disabled={isConverged || iteration >= 30}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-bold rounded-lg transition-all"
          >
            <Play className="w-3.5 h-3.5" /> {t.stepBtn}
          </button>
          <button
            type="button"
            onClick={runAllIterations}
            disabled={isConverged || iteration >= 30}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-sky-600 hover:bg-sky-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-bold rounded-lg transition-all"
          >
            <FastForward className="w-3.5 h-3.5" /> {t.convergeBtn}
          </button>
          <button
            type="button"
            onClick={resetSolver}
            className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" /> {t.resetBtn}
          </button>
        </div>

        {isConverged && (
          <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 rounded-full text-xs font-bold font-mono">
            <CheckCircle2 className="w-4 h-4" /> {t.convergedBadge}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Configuration & State */}
        <div className="space-y-4">
          <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800 space-y-3">
            <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5" /> Solver Tuning & Network Load
            </h4>

            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <label htmlFor={`${idPrefix}-alpha`}>{t.alphaLabel}</label>
                <span className="font-mono text-emerald-400 font-bold">{alpha.toFixed(2)}</span>
              </div>
              <input
                id={`${idPrefix}-alpha`}
                type="range"
                min="1.0"
                max="1.6"
                step="0.05"
                value={alpha}
                onChange={(e) => {
                  setAlpha(parseFloat(e.target.value));
                  resetSolver();
                }}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div>
                <label htmlFor={`${idPrefix}-p2`} className="block text-xs text-slate-400 mb-1">{t.p2Label}</label>
                <input
                  id={`${idPrefix}-p2`}
                  type="number"
                  step="0.05"
                  value={loadP2}
                  onChange={(e) => {
                    setLoadP2(parseFloat(e.target.value) || 0);
                    resetSolver();
                  }}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-xs text-white font-mono"
                />
              </div>
              <div>
                <label htmlFor={`${idPrefix}-q2`} className="block text-xs text-slate-400 mb-1">{t.q2Label}</label>
                <input
                  id={`${idPrefix}-q2`}
                  type="number"
                  step="0.05"
                  value={loadQ2}
                  onChange={(e) => {
                    setLoadQ2(parseFloat(e.target.value) || 0);
                    resetSolver();
                  }}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-xs text-white font-mono"
                />
              </div>
            </div>
          </div>

          {/* Current State Card */}
          <div className="bg-gradient-to-br from-slate-950 to-slate-900 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              {t.statusTitle}
            </div>

            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">Bus 1 Slack:</span>
              <span className="font-mono text-sky-300 font-bold">1.050 p.u. ∠ 0.00°</span>
            </div>

            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">{t.v2Label}</span>
              <span className="font-mono text-amber-300 font-bold text-sm">
                {current.v2Mag.toFixed(4)} p.u. ∠ {current.v2AngDeg.toFixed(2)}°
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">{t.v3Label}</span>
              <span className="font-mono text-pink-300 font-bold text-sm">
                {current.v3Mag.toFixed(4)} p.u. ∠ {current.v3AngDeg.toFixed(2)}°
              </span>
            </div>

            <div className="flex justify-between py-1">
              <span className="text-slate-400">{t.errorLabel}</span>
              <span className={`font-mono font-bold text-sm ${current.maxError < 0.0005 ? 'text-emerald-400' : 'text-amber-400'}`}>
                {current.maxError.toFixed(5)} p.u.
              </span>
            </div>
          </div>
        </div>

        {/* Right: Iteration History Table */}
        <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800 flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
              {t.tableTitle}
            </h4>
            <div className="overflow-x-auto max-h-64 border border-slate-800 rounded">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-slate-900 text-slate-400 sticky top-0">
                  <tr>
                    <th className="p-2 border-b border-slate-800">{t.colK}</th>
                    <th className="p-2 border-b border-slate-800">{t.colV2}</th>
                    <th className="p-2 border-b border-slate-800">{t.colV3}</th>
                    <th className="p-2 border-b border-slate-800">{t.colErr}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {history.map((row) => (
                    <tr key={row.k} className={row.k === iteration ? 'bg-emerald-950/30 text-emerald-300 font-bold' : ''}>
                      <td className="p-2">{row.k}</td>
                      <td className="p-2">{row.v2Mag.toFixed(3)} ∠ {row.v2AngDeg.toFixed(1)}°</td>
                      <td className="p-2">{row.v3Mag.toFixed(3)} ∠ {row.v3AngDeg.toFixed(1)}°</td>
                      <td className="p-2">{row.maxError > 0.5 ? 'Start' : row.maxError.toFixed(4)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-3 text-[11px] text-slate-400 bg-slate-900/60 p-2.5 rounded border border-slate-800">
            <strong>Engine Note:</strong> Gauss-Seidel exhibits linear convergence characteristics. The number of iterations increases significantly as system size grows, which led to the adoption of Newton-Raphson in modern transmission grid dispatch.
          </div>
        </div>
      </div>
    </div>
  );
};
