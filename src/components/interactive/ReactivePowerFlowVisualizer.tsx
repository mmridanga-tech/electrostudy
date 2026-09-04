import React, { useState, useId } from 'react';
import { Language } from '../../types';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const ReactivePowerFlowVisualizer: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const controlId = useId();

  // Feeder parameters
  const [gridVoltageVs, setGridVoltageVs] = useState<number>(415); // Sending end V
  const [lineLengthKm, setLineLengthKm] = useState<number>(2.5); // Feeder length km
  const [loadPkW, setLoadPkW] = useState<number>(300); // 300 kW load
  const [loadQkvar, setLoadQkvar] = useState<number>(225); // 225 kVAR inductive
  const [capacitorQc, setCapacitorQc] = useState<number>(150); // local capacitor kVAR

  // Feeder impedance: typical 0.15 ohm/km resistance, 0.35 ohm/km reactance
  const rTotal = 0.15 * lineLengthKm;
  const xTotal = 0.35 * lineLengthKm;

  // Net reactive power through the feeder line
  const netQkvar = loadQkvar - capacitorQc;

  // Approximate voltage drop: Delta V = (P * R + netQ * X) / V_s
  // For balanced 3-phase line: deltaV_phase = (P_phase * R + Q_phase * X) / V_phase
  // Delta V_line = sqrt(3) * Delta V_phase = (P_total * R + Q_net_total * X) / V_line
  const deltaV = (loadPkW * 1000 * rTotal + netQkvar * 1000 * xTotal) / (gridVoltageVs * 1000);
  const receivingVoltageVr = gridVoltageVs - deltaV;
  const voltageRegulationPct = ((gridVoltageVs - receivingVoltageVr) / receivingVoltageVr) * 100;

  // Apparent power on the feeder
  const apparentPowerFeederKva = Math.sqrt(loadPkW * loadPkW + netQkvar * netQkvar);
  const uncompensatedKva = Math.sqrt(loadPkW * loadPkW + loadQkvar * loadQkvar);

  // Line current
  const lineCurrentA = (apparentPowerFeederKva * 1000) / (Math.sqrt(3) * gridVoltageVs);
  const uncompCurrentA = (uncompensatedKva * 1000) / (Math.sqrt(3) * gridVoltageVs);

  // 3-phase line I^2 R loss: 3 * I^2 * R
  const lineLossKw = (3 * Math.pow(lineCurrentA, 2) * rTotal) / 1000;
  const uncompLossKw = (3 * Math.pow(uncompCurrentA, 2) * rTotal) / 1000;
  const lossSavedKw = Math.max(0, uncompLossKw - lineLossKw);

  // SVG coordinate calculations for feeder profile
  const svgWidth = 440;
  const svgHeight = 180;
  const vScale = 1.2; // vertical exaggeration
  const baseY = 100;

  // Source at x=40, End at x=400
  const ySource = baseY - (gridVoltageVs - 400) * vScale;
  const yEnd = baseY - (receivingVoltageVr - 400) * vScale;

  const t = {
    title: {
      en: 'Reactive Power Flow & Feeder Voltage Regulation Simulator',
      hi: 'प्रतिक्रियाशील शक्ति प्रवाह एवं फीडर वोल्टेज विनियमन सिम्युलेटर',
      bn: 'রিঅ্যাক্টিভ পাওয়ার প্রবাহ ও ফিডার ভোল্টেজ রেগুলেশন সিমুলেটর'
    },
    subtitle: {
      en: 'Explore how local shunt compensation stops reactive power flow on transmission feeders, cures voltage sag, and recovers line capacity.',
      hi: 'देखें कि कैसे स्थानीय शंट कैपेसिटर फीडर पर प्रतिक्रियाशील शक्ति प्रवाह को रोकते हैं, वोल्टेज ड्रॉप दूर करते हैं और लाइन क्षमता बढ़ाते हैं।',
      bn: 'কীভাবে স্থানীয় শান্ট ক্যাপাসিটর ফিডারে রিঅ্যাক্টিভ পাওয়ার প্রবাহ বন্ধ করে ভোল্টেজ ড্রপ দূর করে ও লাইনের ক্ষমতা বৃদ্ধি করে তা দেখুন।'
    },
    lineLength: { en: 'Feeder Distance (km)', hi: 'फीडर दूरी (km)', bn: 'ফিডারের দৈর্ঘ্য (km)' },
    activeLoad: { en: 'Load Real Power P (kW)', hi: 'लोड वास्तविक शक्ति P (kW)', bn: 'লোড রিয়েল পাওয়ার P (kW)' },
    inductiveQ: { en: 'Load Inductive Q (kVAR)', hi: 'लोड प्रेरक Q (kVAR)', bn: 'লোড আবেশীয় Q (kVAR)' },
    capQc: { en: 'Local Shunt Capacitor Qc (kVAR)', hi: 'स्थानीय शंट कैपेसिटर Qc (kVAR)', bn: 'স্থানীয় শান্ট ক্যাপাসিটর Qc (kVAR)' },
    receivingV: { en: 'Receiving End Voltage V_R', hi: 'प्राप्तिकर्ता छोर वोल्टेज V_R', bn: 'রিসিভিং এন্ড ভোল্টেজ V_R' },
    voltDrop: { en: 'Feeder Voltage Drop ΔV', hi: 'फीडर वोल्टेज ड्रॉप ΔV', bn: 'ফিডার ভোল্টেজ ড্রপ ΔV' },
    feederLoading: { en: 'Feeder Apparent Power S', hi: 'फीडर आभासी शक्ति S', bn: 'ফিডার আপাত ক্ষমতা S' },
    feederLosses: { en: 'Feeder I²R Power Loss', hi: 'फीडर I²R शक्ति हानि', bn: 'ফিডারের I²R অপচয়' }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-2xl space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h3 className="text-xl font-bold text-amber-400">{t.title[lang]}</h3>
        <p className="text-sm text-slate-400 mt-1">{t.subtitle[lang]}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls */}
        <div className="lg:col-span-5 space-y-4 bg-slate-950 p-5 rounded-lg border border-slate-800">
          <div>
            <div className="flex justify-between items-center text-sm font-semibold mb-1">
              <label htmlFor={`${controlId}-qc`} className="text-cyan-400">{t.capQc[lang]}:</label>
              <span className="font-mono text-cyan-300 text-base">{capacitorQc} kVAR</span>
            </div>
            <input
              id={`${controlId}-qc`}
              type="range"
              min="0"
              max="350"
              step="10"
              value={capacitorQc}
              onChange={(e) => setCapacitorQc(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
          </div>

          <div>
            <div className="flex justify-between items-center text-sm font-semibold mb-1">
              <label htmlFor={`${controlId}-len`} className="text-slate-300">{t.lineLength[lang]}:</label>
              <span className="font-mono text-slate-200">{lineLengthKm.toFixed(1)} km</span>
            </div>
            <input
              id={`${controlId}-len`}
              type="range"
              min="0.5"
              max="8.0"
              step="0.5"
              value={lineLengthKm}
              onChange={(e) => setLineLengthKm(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-slate-400"
            />
          </div>

          <div>
            <div className="flex justify-between items-center text-sm font-semibold mb-1">
              <label htmlFor={`${controlId}-pkw`} className="text-emerald-400">{t.activeLoad[lang]}:</label>
              <span className="font-mono text-emerald-300">{loadPkW} kW</span>
            </div>
            <input
              id={`${controlId}-pkw`}
              type="range"
              min="50"
              max="500"
              step="10"
              value={loadPkW}
              onChange={(e) => setLoadPkW(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>

          <div>
            <div className="flex justify-between items-center text-sm font-semibold mb-1">
              <label htmlFor={`${controlId}-qkvar`} className="text-rose-400">{t.inductiveQ[lang]}:</label>
              <span className="font-mono text-rose-300">{loadQkvar} kVAR</span>
            </div>
            <input
              id={`${controlId}-qkvar`}
              type="range"
              min="50"
              max="400"
              step="10"
              value={loadQkvar}
              onChange={(e) => setLoadQkvar(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
            />
          </div>

          {/* Quick Stats Box */}
          <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-xs space-y-1.5 font-mono">
            <div className="flex justify-between">
              <span className="text-slate-400">Line R + jX:</span>
              <span className="text-slate-200">{rTotal.toFixed(2)} + j{xTotal.toFixed(2)} Ω</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Net Feeder Q:</span>
              <span className={netQkvar >= 0 ? 'text-amber-400' : 'text-sky-400 font-bold'}>
                {netQkvar.toFixed(0)} kVAR {netQkvar >= 0 ? '(Lag)' : '(Lead - Overcomp!)'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Line Current:</span>
              <span className="text-cyan-300 font-bold">{lineCurrentA.toFixed(1)} A</span>
            </div>
          </div>
        </div>

        {/* Visual Graph and Engineering Indicators */}
        <div className="lg:col-span-7 space-y-4">
          {/* Feeder Voltage Profile SVG */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex justify-between">
              <span>Feeder Voltage Profile Along Line Distance</span>
              <span className="font-mono text-slate-500">{lineLengthKm} km Feeder</span>
            </div>

            <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-44" role="img" aria-label="Feeder voltage profile plot">
              {/* Baseline grid */}
              <line x1="40" y1="20" x2="40" y2="150" stroke="#334155" strokeWidth="1" />
              <line x1="40" y1="150" x2="400" y2="150" stroke="#334155" strokeWidth="1" />

              {/* 400V reference line */}
              <line x1="40" y1={baseY} x2="400" y2={baseY} stroke="#475569" strokeDasharray="3 3" strokeWidth="1" />
              <text x="32" y={baseY + 3} fill="#64748b" fontSize="8" textAnchor="end">400V</text>

              {/* Voltage gradient curve */}
              <line
                x1="50"
                y1={ySource}
                x2="380"
                y2={yEnd}
                stroke={receivingVoltageVr < 390 ? '#ef4444' : receivingVoltageVr > 425 ? '#38bdf8' : '#10b981'}
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Source Node */}
              <circle cx="50" cy={ySource} r="5" fill="#f59e0b" />
              <text x="50" y={ySource - 10} fill="#f59e0b" fontSize="9" fontWeight="bold" textAnchor="middle">
                Vs = {gridVoltageVs}V
              </text>
              <text x="50" y="165" fill="#94a3b8" fontSize="8" textAnchor="middle">Substation (0 km)</text>

              {/* Receiving Node */}
              <circle cx="380" cy={yEnd} r="5" fill="#38bdf8" />
              <text x="380" y={yEnd - 10} fill={receivingVoltageVr < 390 ? '#ef4444' : '#38bdf8'} fontSize="9" fontWeight="bold" textAnchor="middle">
                Vr = {receivingVoltageVr.toFixed(1)}V
              </text>
              <text x="380" y="165" fill="#94a3b8" fontSize="8" textAnchor="middle">Factory Load ({lineLengthKm} km)</text>

              {/* Voltage Drop indicator */}
              <line x1="390" y1={ySource} x2="390" y2={yEnd} stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="2 2" />
              <text x="400" y={(ySource + yEnd) / 2 + 3} fill="#f43f5e" fontSize="9" fontWeight="bold">
                ΔV = {deltaV.toFixed(1)}V
              </text>
            </svg>
          </div>

          {/* Metric Dashboard */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <div className="text-[11px] text-slate-400 mb-0.5">{t.receivingV[lang]}</div>
              <div className={`text-xl font-mono font-bold ${receivingVoltageVr < 390 ? 'text-rose-400' : 'text-emerald-400'}`}>
                {receivingVoltageVr.toFixed(1)} V
              </div>
              <div className="text-[10px] text-slate-500 mt-1">
                Regulation: {voltageRegulationPct.toFixed(1)}%
              </div>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <div className="text-[11px] text-slate-400 mb-0.5">{t.feederLoading[lang]}</div>
              <div className="text-xl font-mono font-bold text-amber-400">
                {apparentPowerFeederKva.toFixed(1)} kVA
              </div>
              <div className="text-[10px] text-slate-500 mt-1">
                Relieved {(uncompensatedKva - apparentPowerFeederKva).toFixed(1)} kVA
              </div>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <div className="text-[11px] text-slate-400 mb-0.5">{t.feederLosses[lang]}</div>
              <div className="text-xl font-mono font-bold text-cyan-400">
                {lineLossKw.toFixed(2)} kW
              </div>
              <div className="text-[10px] text-emerald-400 mt-1">
                Saved {lossSavedKw.toFixed(2)} kW ({uncompLossKw > 0 ? ((lossSavedKw / uncompLossKw) * 100).toFixed(0) : 0}%)
              </div>
            </div>
          </div>

          {/* Engineering Insight */}
          <div className="bg-slate-950/80 p-3.5 rounded-lg border border-slate-800 text-xs text-slate-300 leading-relaxed">
            {netQkvar < -20 ? (
              <div className="text-amber-300 bg-amber-950/40 p-2 rounded border border-amber-800">
                <strong>OVERCOMPENSATION ALERT:</strong> Shunt capacitance ({capacitorQc} kVAR) exceeds inductive load ({loadQkvar} kVAR). Net reactive power flows backwards toward the grid ({netQkvar.toFixed(0)} kVAR leading), causing voltage rise at the end of the line (Ferranti-like boost to {receivingVoltageVr.toFixed(1)}V). Capacitors should be stepped down during light load periods.
              </div>
            ) : (
              <p>
                Because transmission and distribution line reactance is typically 2× to 4× its resistance (X/R &gt; 2), feeder voltage drop is heavily dominated by reactive power: <strong>ΔV ≈ (P·R + Q·X) / V</strong>. Supplying reactive power locally with shunt capacitors cancels the Q·X term, completely eliminating voltage sagging at distant factory buses without upgrading cable conductors.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
