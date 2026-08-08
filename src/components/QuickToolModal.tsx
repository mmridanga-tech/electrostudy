import React, { useState } from 'react';
import { X, Calculator, Zap, Sparkles, RefreshCw, CheckCircle2 } from 'lucide-react';
import { ToolItem, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/content';

interface QuickToolModalProps {
  tool: ToolItem | null;
  onClose: () => void;
  currentLanguage: Language;
}

export const QuickToolModal: React.FC<QuickToolModalProps> = ({
  tool,
  onClose,
  currentLanguage
}) => {
  const t = UI_TRANSLATIONS[currentLanguage];

  // Ohm's law state
  const [ohmsVoltage, setOhmsVoltage] = useState<number>(230);
  const [ohmsResistance, setOhmsResistance] = useState<number>(10);

  // Power calc state
  const [pVoltage, setPVoltage] = useState<number>(230);
  const [pCurrent, setPCurrent] = useState<number>(10);
  const [pPF, setPPF] = useState<number>(0.85);

  // Motor Current state
  const [mPowerKW, setMPowerKW] = useState<number>(7.5); // 7.5 kW motor (~10 HP)
  const [mVoltage, setMVoltage] = useState<number>(415); // 3-phase
  const [mPF, setMPF] = useState<number>(0.85);
  const [mEfficiency, setMEfficiency] = useState<number>(0.88);

  // Cable size state
  const [cCurrent, setCCurrent] = useState<number>(25);
  const [cLength, setCLength] = useState<number>(50); // meters

  if (!tool) return null;

  // Calculators logic
  let resultJSX: React.ReactNode = null;

  if (tool.id === 'ohms-law') {
    const current = ohmsResistance > 0 ? (ohmsVoltage / ohmsResistance).toFixed(2) : '0';
    const power = (ohmsVoltage * parseFloat(current)).toFixed(2);
    resultJSX = (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
              Voltage (V) in Volts
            </label>
            <input
              type="number"
              value={ohmsVoltage}
              onChange={(e) => setOhmsVoltage(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
              Resistance (R) in Ohms (Ω)
            </label>
            <input
              type="number"
              value={ohmsResistance}
              onChange={(e) => setOhmsResistance(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 text-white border border-cyan-500/40 font-mono space-y-2">
          <div className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">{t.calculatedOutput || 'Calculated Output'}</div>
          <div className="flex justify-between items-center text-sm pt-1">
            <span className="text-slate-400">Current (I = V / R):</span>
            <span className="text-cyan-300 font-bold text-base">{current} Amperes (A)</span>
          </div>
          <div className="flex justify-between items-center text-sm border-t border-slate-800 pt-1">
            <span className="text-slate-400">Power (P = V × I):</span>
            <span className="text-emerald-400 font-bold text-base">{power} Watts (W)</span>
          </div>
        </div>
      </div>
    );
  } else if (tool.id === 'power-calc' || tool.id === 'three-phase') {
    const activeKW = ((pVoltage * pCurrent * pPF) / 1000).toFixed(2);
    const apparentKVA = ((pVoltage * pCurrent) / 1000).toFixed(2);
    const reactiveKVAR = Math.sqrt(Math.max(0, Math.pow(Number(apparentKVA), 2) - Math.pow(Number(activeKW), 2))).toFixed(2);

    resultJSX = (
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-300 mb-1">
              Voltage (V)
            </label>
            <input
              type="number"
              value={pVoltage}
              onChange={(e) => setPVoltage(Number(e.target.value))}
              className="w-full px-2.5 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-300 mb-1">
              Current (A)
            </label>
            <input
              type="number"
              value={pCurrent}
              onChange={(e) => setPCurrent(Number(e.target.value))}
              className="w-full px-2.5 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-300 mb-1">
              Power Factor
            </label>
            <input
              type="number"
              step="0.05"
              min="0.1"
              max="1"
              value={pPF}
              onChange={(e) => setPPF(Number(e.target.value))}
              className="w-full px-2.5 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 text-white border border-cyan-500/40 font-mono space-y-2 text-xs">
          <div className="text-[11px] text-cyan-400 font-semibold uppercase tracking-wider">{t.powerComponents || 'Power Components'}</div>
          <div className="flex justify-between items-center py-1">
            <span className="text-slate-400">Real Power (P):</span>
            <span className="text-cyan-300 font-bold text-sm">{activeKW} kW</span>
          </div>
          <div className="flex justify-between items-center border-t border-slate-800 py-1">
            <span className="text-slate-400">Apparent Power (S):</span>
            <span className="text-teal-300 font-bold text-sm">{apparentKVA} kVA</span>
          </div>
          <div className="flex justify-between items-center border-t border-slate-800 py-1">
            <span className="text-slate-400">Reactive Power (Q):</span>
            <span className="text-amber-300 font-bold text-sm">{reactiveKVAR} kVAR</span>
          </div>
        </div>
      </div>
    );
  } else if (tool.id === 'motor-current') {
    // I = P_watts / (√3 × V × PF × Eff)
    const flc = (mPowerKW * 1000) / (Math.sqrt(3) * mVoltage * mPF * mEfficiency);
    resultJSX = (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
              Motor Rating (kW)
            </label>
            <input
              type="number"
              value={mPowerKW}
              onChange={(e) => setMPowerKW(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
              Supply Voltage (3-Phase)
            </label>
            <input
              type="number"
              value={mVoltage}
              onChange={(e) => setMVoltage(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 text-white border border-cyan-500/40 font-mono space-y-2">
          <div className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">Full Load Current (FLC)</div>
          <div className="text-2xl font-bold text-emerald-400 pt-1">
            {flc.toFixed(2)} Amperes
          </div>
          <p className="text-[11px] text-slate-400 font-sans">
            Recommended DOL/Star-Delta starter relay range: {(flc * 0.9).toFixed(1)} A - {(flc * 1.2).toFixed(1)} A
          </p>
        </div>
      </div>
    );
  } else {
    // Default cable size / voltage drop calculator
    const recommendedSqMm = cCurrent <= 10 ? '1.5 sq mm' : cCurrent <= 18 ? '2.5 sq mm' : cCurrent <= 28 ? '4.0 sq mm' : cCurrent <= 36 ? '6.0 sq mm' : '10.0 sq mm';
    const estimatedDropVolts = ((2 * cLength * cCurrent * 0.0175) / (cCurrent <= 10 ? 1.5 : 4.0)).toFixed(2);
    resultJSX = (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
              Load Current (Amps)
            </label>
            <input
              type="number"
              value={cCurrent}
              onChange={(e) => setCCurrent(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
              Cable Distance (Meters)
            </label>
            <input
              type="number"
              value={cLength}
              onChange={(e) => setCLength(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 text-white border border-cyan-500/40 font-mono space-y-2">
          <div className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">{t.recommendedCable || 'Recommended Cable'}</div>
          <div className="text-xl font-bold text-cyan-300">{recommendedSqMm} Copper Cable</div>
          <div className="text-xs text-slate-400 pt-1 border-t border-slate-800">
            Est. Voltage Drop: <span className="text-amber-400 font-bold">{estimatedDropVolts} V</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
      />

      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-cyan-600 text-white flex items-center justify-center shadow-md">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold font-display text-base text-slate-900 dark:text-white">
                {tool.name[currentLanguage] || tool.name.en}
              </h3>
              <span className="text-[11px] text-cyan-600 dark:text-cyan-400 font-mono">
                {tool.formula}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          <p className="text-xs text-slate-600 dark:text-slate-400">
            {tool.description[currentLanguage] || tool.description.en}
          </p>

          {/* Calculator Inputs & Output */}
          {resultJSX}

          {/* Educational Disclaimer */}
          <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-[11px] text-amber-800 dark:text-amber-300 leading-relaxed">
            {t.calcDisclaimer}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            <span>{t.phase1Notice || 'Phase 1 Educational Foundation'}</span>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold transition-all shadow-xs"
          >
            {t.close}
          </button>
        </div>

      </div>
    </div>
  );
};
