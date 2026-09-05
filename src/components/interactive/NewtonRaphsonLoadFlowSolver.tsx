import React, { useState, useId } from 'react';
import { Language } from '../../types';
import { Play, RotateCcw, FastForward, CheckCircle2, Cpu, Grid, Activity } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

interface NRIterationState {
  k: number;
  v2Mag: number;
  delta2Deg: number;
  deltaP: number;
  deltaQ: number;
  maxMismatch: number;
  j11: number;
  j12: number;
  j21: number;
  j22: number;
}

export const NewtonRaphsonLoadFlowSolver: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const idPrefix = useId();

  // 2-Bus Network:
  // Bus 1: Slack (|V1| = 1.05 p.u., delta1 = 0°)
  // Bus 2: PQ Load (Specified P2 = -1.0 p.u., Q2 = -0.5 p.u.)
  // Line Reactance: X = 0.25 p.u. (lossless Y = -j4.0 p.u. -> B12 = -4.0, G12 = 0)
  const v1 = 1.05;
  const b12 = 4.0; // admittance magnitude 1/0.25

  const [pSpec, setPSpec] = useState<number>(-1.00); // p.u.
  const [qSpec, setQSpec] = useState<number>(-0.50); // p.u.

  // Iteration tracking
  const [iteration, setIteration] = useState<number>(0);
  const [history, setHistory] = useState<NRIterationState[]>([
    {
      k: 0,
      v2Mag: 1.000,
      delta2Deg: 0.0,
      deltaP: -1.000,
      deltaQ: -0.500,
      maxMismatch: 1.000,
      j11: 4.20,
      j12: 0.00,
      j21: 0.00,
      j22: 4.20
    }
  ]);

  const current = history[history.length - 1];
  const isConverged = current.maxMismatch < 0.0001 && iteration > 0;

  // Single step Newton-Raphson update:
  // P2_calc = - |V1||V2| * B12 * sin(delta2)
  // Q2_calc = |V2|^2 * B12 - |V1||V2| * B12 * cos(delta2)
  // Delta P = P_spec - P_calc
  // Delta Q = Q_spec - Q_calc
  // Jacobian elements:
  // H = dP2/d(delta2) = - |V1||V2| * B12 * cos(delta2)
  // N = dP2/d|V2| * |V2| = - |V1||V2| * B12 * sin(delta2)
  // M = dQ2/d(delta2) = |V1||V2| * B12 * sin(delta2)
  // L = dQ2/d|V2| * |V2| = 2*|V2|^2 * B12 - |V1||V2| * B12 * cos(delta2)
  const stepNR = () => {
    if (isConverged || iteration >= 6) return;

    const v2 = current.v2Mag;
    const delta2Rad = (current.delta2Deg * Math.PI) / 180;

    // Power calculations at current state
    const p2Calc = -v1 * v2 * b12 * Math.sin(delta2Rad);
    const q2Calc = Math.pow(v2, 2) * b12 - v1 * v2 * b12 * Math.cos(delta2Rad);

    const dP = pSpec - p2Calc;
    const dQ = qSpec - q2Calc;

    // Jacobian
    const h = -v1 * v2 * b12 * Math.cos(delta2Rad);
    const n = -v1 * v2 * b12 * Math.sin(delta2Rad);
    const m = v1 * v2 * b12 * Math.sin(delta2Rad);
    const l = 2 * Math.pow(v2, 2) * b12 - v1 * v2 * b12 * Math.cos(delta2Rad);

    // Solve [J] [dDelta; dV/V] = [dP; dQ]
    // 2x2 inverse: det = H*L - N*M
    const det = h * l - n * m;
    const dDeltaRad = (l * dP - n * dQ) / det;
    const dVOverV = (-m * dP + h * dQ) / det;
    const dV = dVOverV * v2;

    // Update state variables: delta2_new = delta2 + dDelta, |V2_new| = |V2| + dV
    const newDelta2Rad = delta2Rad + dDeltaRad;
    const newDelta2Deg = (newDelta2Rad * 180) / Math.PI;
    const newV2 = v2 + dV;

    // Next mismatch
    const maxMis = Math.max(Math.abs(dP), Math.abs(dQ));

    const nextState: NRIterationState = {
      k: iteration + 1,
      v2Mag: newV2,
      delta2Deg: newDelta2Deg,
      deltaP: dP,
      deltaQ: dQ,
      maxMismatch: maxMis,
      j11: h,
      j12: n,
      j21: m,
      j22: l
    };

    setIteration(iteration + 1);
    setHistory([...history, nextState]);
  };

  const solveNR = () => {
    let hist = [...history];
    let it = iteration;
    let mis = hist[hist.length - 1].maxMismatch;

    while (mis > 0.0001 && it < 6) {
      const cur = hist[hist.length - 1];
      const v2 = cur.v2Mag;
      const delta2Rad = (cur.delta2Deg * Math.PI) / 180;

      const p2Calc = -v1 * v2 * b12 * Math.sin(delta2Rad);
      const q2Calc = Math.pow(v2, 2) * b12 - v1 * v2 * b12 * Math.cos(delta2Rad);

      const dP = pSpec - p2Calc;
      const dQ = qSpec - q2Calc;

      const h = -v1 * v2 * b12 * Math.cos(delta2Rad);
      const n = -v1 * v2 * b12 * Math.sin(delta2Rad);
      const m = v1 * v2 * b12 * Math.sin(delta2Rad);
      const l = 2 * Math.pow(v2, 2) * b12 - v1 * v2 * b12 * Math.cos(delta2Rad);

      const det = h * l - n * m;
      const dDeltaRad = (l * dP - n * dQ) / det;
      const dVOverV = (-m * dP + h * dQ) / det;
      const dV = dVOverV * v2;

      const newDelta2Rad = delta2Rad + dDeltaRad;
      const newDelta2Deg = (newDelta2Rad * 180) / Math.PI;
      const newV2 = v2 + dV;

      mis = Math.max(Math.abs(dP), Math.abs(dQ));
      it++;

      hist.push({
        k: it,
        v2Mag: newV2,
        delta2Deg: newDelta2Deg,
        deltaP: dP,
        deltaQ: dQ,
        maxMismatch: mis,
        j11: h,
        j12: n,
        j21: m,
        j22: l
      });
    }

    setIteration(it);
    setHistory(hist);
  };

  const resetNR = () => {
    setIteration(0);
    setHistory([
      {
        k: 0,
        v2Mag: 1.000,
        delta2Deg: 0.0,
        deltaP: -1.000,
        deltaQ: -0.500,
        maxMismatch: 1.000,
        j11: 4.20,
        j12: 0.00,
        j21: 0.00,
        j22: 4.20
      }
    ]);
  };

  const t = {
    en: {
      title: 'Newton-Raphson Load-Flow Solver & Jacobian Engine',
      subtitle: 'Experience quadratic convergence and tangent-based multi-variable state corrections in transmission dispatch',
      stepBtn: 'Single NR Iteration (k + 1)',
      solveBtn: 'Solve to Convergence',
      resetBtn: 'Reset (Flat Start)',
      jacobianTitle: 'Jacobian Matrix [J] Elements at Current Step',
      mismatchTitle: 'Power Mismatch Vector [ΔP, ΔQ]',
      quadTitle: 'Quadratic Convergence Property',
      quadDesc: 'Notice how the mismatch drops quadratically (e.g. 1.0 -> 0.12 -> 0.003 -> 0.00001) converging in only 3-4 iterations regardless of system scale!',
      pSpecLabel: 'Bus 2 Specified Active Demand (P_spec, p.u.):',
      qSpecLabel: 'Bus 2 Specified Reactive Demand (Q_spec, p.u.):',
      v2Label: 'Bus 2 Voltage Solution (|V2|):',
      delta2Label: 'Bus 2 Phase Angle (δ2):',
      convergedText: 'QUADRATICALLY CONVERGED'
    },
    hi: {
      title: 'न्यूटन-राफसन लोड-फ्लो सॉल्वर एवं जैकोबियन इंजन',
      subtitle: 'द्विघातीय अभिसरण (Quadratic Convergence) और स्पर्शरेखीय बहु-चर सुधार का अनुभव करें',
      stepBtn: 'एक NR पुनरावृत्ति (k + 1)',
      solveBtn: 'पूर्ण अभिसरण तक हल करें',
      resetBtn: 'रीसेट (फ्लैट स्टार्ट)',
      jacobianTitle: 'वर्तमान चरण पर जैकोबियन मैट्रिक्स [J]',
      mismatchTitle: 'पावर बेमेल वेक्टर [ΔP, ΔQ]',
      quadTitle: 'द्विघातीय अभिसरण (Quadratic Convergence)',
      quadDesc: 'ध्यान दें कि त्रुटि कैसे प्रत्येक चरण में वर्ग के रूप में घटती है और मात्र 3-4 चरणों में अभिसरित हो जाती है!',
      pSpecLabel: 'बस 2 निर्दिष्ट सक्रिय मांग (P_spec, p.u.):',
      qSpecLabel: 'बस 2 निर्दिष्ट प्रतिघाती मांग (Q_spec, p.u.):',
      v2Label: 'बस 2 वोल्टेज हल (|V2|):',
      delta2Label: 'बस 2 फेज कोण (δ2):',
      convergedText: 'द्विघातीय रूप से अभिसरित'
    },
    bn: {
      title: 'নিউটন-র‍্যাফসন লোড-ফ্লো সলভার ও জ্যাকোবিয়ান ইঞ্জিন',
      subtitle: 'কোয়াড্রেটিক কনভারজেন্স এবং স্পর্শক-ভিত্তিক বহু-চলক সমাধান পর্যবেক্ষণ করুন',
      stepBtn: 'এক ধাপ NR ইটারেশন (k + 1)',
      solveBtn: 'সম্পূর্ণ সমাধান করুন',
      resetBtn: 'রিসেট (ফ্ল্যাট স্টার্ট)',
      jacobianTitle: 'বর্তমান ধাপে জ্যাকোবিয়ান ম্যাট্রিক্স [J]',
      mismatchTitle: 'পাওয়ার অমিল ভেক্টর [ΔP, ΔQ]',
      quadTitle: 'কোয়াড্রেটিক কনভারজেন্স বৈশিষ্ট্য',
      quadDesc: 'লক্ষ্য করুন ত্রুটি প্রতিটি ধাপে বর্গীয় হারে হ্রাস পায় এবং গ্রিডের আকার নির্বিশেষে মাত্র ৩-৪ ধাপে সমাধান হয়!',
      pSpecLabel: 'বাস ২ নির্দিষ্ট অ্যাক্টিভ লোড (P_spec, p.u.):',
      qSpecLabel: 'বাস ২ নির্দিষ্ট রিঅ্যাক্টিভ লোড (Q_spec, p.u.):',
      v2Label: 'বাস ২ ভোল্টেজ সমাধান (|V2|):',
      delta2Label: 'বাস ২ ফেজ কোণ (δ2):',
      convergedText: 'কোয়াড্রেটিক্যালি কনভার্জড'
    }
  }[lang];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-white shadow-xl max-w-4xl mx-auto my-6">
      {/* Header */}
      <div className="flex items-start justify-between border-b border-slate-800 pb-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <Cpu className="w-6 h-6 text-sky-400" />
            <h3 className="text-xl font-bold text-sky-400">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-400 mt-1">{t.subtitle}</p>
        </div>
        <span className="px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/30 rounded-full text-xs font-mono font-semibold">
          Newton-Raphson [J]
        </span>
      </div>

      {/* Solver Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-950 p-3 rounded-lg border border-slate-800 mb-5">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={stepNR}
            disabled={isConverged || iteration >= 5}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-sky-600 hover:bg-sky-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-bold rounded-lg transition-all"
          >
            <Play className="w-3.5 h-3.5" /> {t.stepBtn}
          </button>
          <button
            type="button"
            onClick={solveNR}
            disabled={isConverged || iteration >= 5}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-bold rounded-lg transition-all"
          >
            <FastForward className="w-3.5 h-3.5" /> {t.solveBtn}
          </button>
          <button
            type="button"
            onClick={resetNR}
            className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" /> {t.resetBtn}
          </button>
        </div>

        {isConverged && (
          <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 rounded-full text-xs font-bold font-mono">
            <CheckCircle2 className="w-4 h-4" /> {t.convergedText} (k = {iteration})
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Jacobian Matrix & Load Controls */}
        <div className="space-y-4">
          <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800 space-y-3">
            <h4 className="text-xs font-semibold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
              <Grid className="w-3.5 h-3.5" /> {t.jacobianTitle}
            </h4>

            {/* Jacobian 2x2 Matrix Box */}
            <div className="bg-slate-900 border border-slate-800 rounded p-3 text-xs font-mono">
              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="p-2 bg-slate-950 border border-slate-800 rounded">
                  <span className="text-slate-500 text-[10px] block">H (∂P/∂δ):</span>
                  <span className="text-sky-300 font-bold">{current.j11.toFixed(3)}</span>
                </div>
                <div className="p-2 bg-slate-950 border border-slate-800 rounded">
                  <span className="text-slate-500 text-[10px] block">N (∂P/∂V · V):</span>
                  <span className="text-amber-300 font-bold">{current.j12.toFixed(3)}</span>
                </div>
                <div className="p-2 bg-slate-950 border border-slate-800 rounded">
                  <span className="text-slate-500 text-[10px] block">M (∂Q/∂δ):</span>
                  <span className="text-pink-300 font-bold">{current.j21.toFixed(3)}</span>
                </div>
                <div className="p-2 bg-slate-950 border border-slate-800 rounded">
                  <span className="text-slate-500 text-[10px] block">L (∂Q/∂V · V):</span>
                  <span className="text-emerald-300 font-bold">{current.j22.toFixed(3)}</span>
                </div>
              </div>
            </div>

            {/* Power Mismatch */}
            <div className="bg-slate-900/60 p-3 rounded border border-slate-800 text-xs space-y-1">
              <div className="text-slate-400 font-semibold">{t.mismatchTitle}</div>
              <div className="flex justify-between font-mono">
                <span className="text-slate-400">ΔP2 = P_spec - P_calc:</span>
                <span className="text-rose-400 font-bold">{current.deltaP.toFixed(5)} p.u.</span>
              </div>
              <div className="flex justify-between font-mono">
                <span className="text-slate-400">ΔQ2 = Q_spec - Q_calc:</span>
                <span className="text-rose-400 font-bold">{current.deltaQ.toFixed(5)} p.u.</span>
              </div>
            </div>
          </div>

          {/* Load Inputs */}
          <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor={`${idPrefix}-pspec`} className="block text-xs text-slate-400 mb-1">{t.pSpecLabel}</label>
                <input
                  id={`${idPrefix}-pspec`}
                  type="number"
                  step="0.1"
                  value={pSpec}
                  onChange={(e) => {
                    setPSpec(parseFloat(e.target.value) || 0);
                    resetNR();
                  }}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-xs text-white font-mono"
                />
              </div>
              <div>
                <label htmlFor={`${idPrefix}-qspec`} className="block text-xs text-slate-400 mb-1">{t.qSpecLabel}</label>
                <input
                  id={`${idPrefix}-qspec`}
                  type="number"
                  step="0.1"
                  value={qSpec}
                  onChange={(e) => {
                    setQSpec(parseFloat(e.target.value) || 0);
                    resetNR();
                  }}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-xs text-white font-mono"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right: State Results & Iteration Table */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-slate-950 to-slate-900 p-4 rounded-xl border border-sky-500/30 space-y-2 text-xs">
            <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5" /> State Variable Solution (k = {iteration})
            </h4>

            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">{t.v2Label}</span>
              <span className="font-mono text-emerald-300 font-bold text-sm">
                {current.v2Mag.toFixed(5)} p.u.
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">{t.delta2Label}</span>
              <span className="font-mono text-amber-300 font-bold text-sm">
                {current.delta2Deg.toFixed(4)}°
              </span>
            </div>

            <div className="flex justify-between py-1">
              <span className="text-slate-400">Max Absolute Mismatch:</span>
              <span className={`font-mono font-bold text-sm ${current.maxMismatch < 0.0001 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {current.maxMismatch.toFixed(6)} p.u.
              </span>
            </div>
          </div>

          {/* History table */}
          <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800">
            <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
              Newton-Raphson Iteration Log
            </div>
            <div className="overflow-x-auto border border-slate-800 rounded">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-slate-900 text-slate-400">
                  <tr>
                    <th className="p-2 border-b border-slate-800">k</th>
                    <th className="p-2 border-b border-slate-800">|V2|</th>
                    <th className="p-2 border-b border-slate-800">δ2 (deg)</th>
                    <th className="p-2 border-b border-slate-800">Max Error</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {history.map((row) => (
                    <tr key={row.k} className={row.k === iteration ? 'bg-sky-950/30 text-sky-300 font-bold' : ''}>
                      <td className="p-2">{row.k}</td>
                      <td className="p-2">{row.v2Mag.toFixed(4)}</td>
                      <td className="p-2">{row.delta2Deg.toFixed(2)}°</td>
                      <td className="p-2">{row.maxMismatch > 0.9 ? 'Start' : row.maxMismatch.toFixed(5)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-2.5 text-[11px] text-slate-400">
              <strong className="text-sky-300">{t.quadTitle}:</strong> {t.quadDesc}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
