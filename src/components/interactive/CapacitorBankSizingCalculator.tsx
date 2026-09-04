import React, { useState, useId } from 'react';
import { Language } from '../../types';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const CapacitorBankSizingCalculator: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const controlId = useId();

  // Inputs
  const [activePowerKw, setActivePowerKw] = useState<number>(250); // kW
  const [initialPf, setInitialPf] = useState<number>(0.72);
  const [targetPf, setTargetPf] = useState<number>(0.98);
  const [lineVoltage, setLineVoltage] = useState<number>(415); // V
  const [frequency, setFrequency] = useState<number>(50); // Hz
  const [connection, setConnection] = useState<'delta' | 'star'>('delta');
  const [ratedVoltage, setRatedVoltage] = useState<number>(440); // Rated voltage of capacitor cell

  // Calculations
  const phi1 = Math.acos(initialPf);
  const tanPhi1 = Math.tan(phi1);
  const phi2 = Math.acos(targetPf);
  const tanPhi2 = Math.tan(phi2);
  const kMultiplier = Math.max(0, tanPhi1 - tanPhi2);

  // Required actual net compensation at nominal voltage
  const requiredQcNet = activePowerKw * kMultiplier;

  // Voltage derating factor: Q_actual = Q_rated * (V_actual / V_rated)^2
  const deratingFactor = Math.pow(lineVoltage / ratedVoltage, 2);
  // Therefore, nameplate rating needed at ratedVoltage to deliver requiredQcNet at lineVoltage:
  const nameplateRatingNeeded = deratingFactor > 0 ? requiredQcNet / deratingFactor : requiredQcNet;

  // Capacitance per phase in microfarads
  const omega = 2 * Math.PI * frequency;
  let capacitancePerPhaseUf = 0;
  if (connection === 'delta') {
    // C_delta = Q_c_net (VAR) / (3 * omega * V_L^2)
    capacitancePerPhaseUf = (requiredQcNet * 1000) / (3 * omega * lineVoltage * lineVoltage) * 1e6;
  } else {
    // C_star = Q_c_net (VAR) / (omega * V_L^2) = 3 * C_delta
    capacitancePerPhaseUf = (requiredQcNet * 1000) / (omega * lineVoltage * lineVoltage) * 1e6;
  }

  // Currents
  const currentCapacitorA = (requiredQcNet * 1000) / (Math.sqrt(3) * lineVoltage);
  const initialCurrentA = (activePowerKw * 1000) / (Math.sqrt(3) * lineVoltage * initialPf);
  const finalCurrentA = (activePowerKw * 1000) / (Math.sqrt(3) * lineVoltage * targetPf);
  const currentReductionA = Math.max(0, initialCurrentA - finalCurrentA);
  const currentReductionPct = initialCurrentA > 0 ? (currentReductionA / initialCurrentA) * 100 : 0;

  // Recommended standardized step breakdown
  const roundedKvar = Math.ceil(nameplateRatingNeeded / 25) * 25;
  let stepBreakdown = '';
  if (roundedKvar <= 50) {
    stepBreakdown = '2 × 25 kVAR';
  } else if (roundedKvar <= 100) {
    stepBreakdown = '1 × 25 kVAR + 1 × 25 kVAR + 1 × 50 kVAR';
  } else if (roundedKvar <= 200) {
    stepBreakdown = '2 × 25 kVAR + 3 × 50 kVAR';
  } else if (roundedKvar <= 350) {
    stepBreakdown = '2 × 25 kVAR + 2 × 50 kVAR + 2 × 100 kVAR';
  } else {
    const num100 = Math.floor(roundedKvar / 100);
    const rem = roundedKvar % 100;
    stepBreakdown = `${num100} × 100 kVAR + ${rem > 0 ? `1 × ${rem} kVAR` : '0 kVAR'}`;
  }

  const t = {
    title: {
      en: 'Capacitor Bank Sizing & Engineering Calculator',
      hi: 'कैपेसिटर बैंक आकार एवं इंजीनियरिंग कैलकुलेटर',
      bn: 'ক্যাপাসিটর ব্যাংক সাইজিং ও ইঞ্জিনিয়ারিং ক্যালকুলেটর'
    },
    subtitle: {
      en: 'Compute required kVAR, phase capacitance in microfarads, rated voltage derating, and step sequences.',
      hi: 'आवश्यक kVAR, माइक्रोफैरड में फेज धारिता, वोल्टेज अवमूल्यन एवं स्टेप अनुक्रम की गणना करें।',
      bn: 'প্রয়োজনীয় kVAR, মাইক্রোফ্যারাডে ফেজ ধারকত্ব, ভোল্টেজ ডিরেটিং ও স্টেপ বিন্যাস হিসাব করুন।'
    },
    activePower: { en: 'Active Load P (kW)', hi: 'सक्रिय लोड P (kW)', bn: 'অ্যাক্টিভ লোড P (kW)' },
    initialPf: { en: 'Initial PF (cos φ₁)', hi: 'प्रारंभिक PF (cos φ₁)', bn: 'প্রাথমিক PF (cos φ₁)' },
    targetPf: { en: 'Target PF (cos φ₂)', hi: 'लक्षित PF (cos φ₂)', bn: 'লক্ষ্যমাত্রার PF (cos φ₂)' },
    lineVoltage: { en: 'Operating Line Voltage V_L (V)', hi: 'परिचालन लाइन वोल्टेज V_L (V)', bn: 'অপারেটিং লাইন ভোল্টেজ V_L (V)' },
    ratedVoltage: { en: 'Capacitor Rated Voltage (V)', hi: 'कैपेसिटर रेटेड वोल्टेज (V)', bn: 'ক্যাপাসিটরের রেটেড ভোল্টেজ (V)' },
    connection: { en: 'Internal Cell Configuration', hi: 'आंतरिक सेल विन्यास', bn: 'অভ্যন্তরীণ সেল কনফিগারেশন' },
    reqQc: { en: 'Net Required Compensation', hi: 'शुद्ध आवश्यक क्षतिपूर्ति', bn: 'নেট প্রয়োজনীয় ক্ষতিপূরণ' },
    nameplateReq: { en: 'Nameplate Bank Rating (at V_rated)', hi: 'नेमप्लेट बैंक रेटिंग (V_rated पर)', bn: 'নেমপ্লেট ব্যাংক রেটিং (V_rated এ)' },
    capacitancePerPhase: { en: 'Capacitance per Phase', hi: 'प्रति फेज धारिता', bn: 'প্রতি ফেজের ধারকত্ব' },
    capCurrent: { en: 'Capacitor Bank Line Current', hi: 'कैपेसिटर बैंक लाइन धारा', bn: 'ক্যাপাসিটর ব্যাংক লাইন কারেন্ট' },
    currentReduction: { en: 'Feeder Current Relief', hi: 'फीडर धारा में कमी', bn: 'ফিডার কারেন্ট হ্রাস' },
    steps: { en: 'Recommended APFC Step Sizing', hi: 'अनुशंसित APFC स्टेप आकार', bn: 'প্রস্তাবিত APFC স্টেপ সাইজিং' }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-2xl space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h3 className="text-xl font-bold text-amber-400">{t.title[lang]}</h3>
        <p className="text-sm text-slate-400 mt-1">{t.subtitle[lang]}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-4 bg-slate-950 p-5 rounded-lg border border-slate-800">
          <div>
            <div className="flex justify-between items-center text-sm font-semibold mb-1">
              <label htmlFor={`${controlId}-kw`} className="text-emerald-400">{t.activePower[lang]}:</label>
              <span className="font-mono text-emerald-300 text-base">{activePowerKw} kW</span>
            </div>
            <input
              id={`${controlId}-kw`}
              type="range"
              min="10"
              max="1000"
              step="10"
              value={activePowerKw}
              onChange={(e) => setActivePowerKw(parseFloat(e.target.value))}
              aria-label="Active power in kilowatts"
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="flex justify-between items-center text-xs font-semibold mb-1">
                <label htmlFor={`${controlId}-pf1`} className="text-rose-400">{t.initialPf[lang]}:</label>
                <span className="font-mono text-rose-300">{initialPf.toFixed(2)}</span>
              </div>
              <input
                id={`${controlId}-pf1`}
                type="range"
                min="0.50"
                max="0.90"
                step="0.01"
                value={initialPf}
                onChange={(e) => setInitialPf(parseFloat(e.target.value))}
                aria-label="Initial power factor"
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
              />
            </div>

            <div>
              <div className="flex justify-between items-center text-xs font-semibold mb-1">
                <label htmlFor={`${controlId}-pf2`} className="text-sky-400">{t.targetPf[lang]}:</label>
                <span className="font-mono text-sky-300">{targetPf.toFixed(2)}</span>
              </div>
              <input
                id={`${controlId}-pf2`}
                type="range"
                min="0.90"
                max="1.00"
                step="0.01"
                value={targetPf}
                onChange={(e) => setTargetPf(parseFloat(e.target.value))}
                aria-label="Target power factor"
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor={`${controlId}-vline`} className="text-xs font-semibold text-slate-300 block mb-1">
                {t.lineVoltage[lang]}
              </label>
              <select
                id={`${controlId}-vline`}
                value={lineVoltage}
                onChange={(e) => setLineVoltage(parseFloat(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 text-xs rounded-lg p-2 text-slate-200"
              >
                <option value={380}>380 V (50 Hz)</option>
                <option value={400}>400 V (50 Hz)</option>
                <option value={415}>415 V (50 Hz)</option>
                <option value={440}>440 V (50/60 Hz)</option>
                <option value={480}>480 V (60 Hz)</option>
                <option value={690}>690 V (Heavy Ind.)</option>
              </select>
            </div>

            <div>
              <label htmlFor={`${controlId}-vrated`} className="text-xs font-semibold text-slate-300 block mb-1">
                {t.ratedVoltage[lang]}
              </label>
              <select
                id={`${controlId}-vrated`}
                value={ratedVoltage}
                onChange={(e) => setRatedVoltage(parseFloat(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 text-xs rounded-lg p-2 text-slate-200"
              >
                <option value={415}>415 V (Standard)</option>
                <option value={440}>440 V (Heavy Duty)</option>
                <option value={480}>480 V (7% Detuned)</option>
                <option value={525}>525 V (14% Detuned)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">{t.connection[lang]}:</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setConnection('delta')}
                className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all ${
                  connection === 'delta'
                    ? 'bg-emerald-600/30 border-emerald-500 text-emerald-300 shadow-md'
                    : 'bg-slate-900 border-slate-700 text-slate-400'
                }`}
              >
                Delta (Δ) — Standard Industrial
              </button>
              <button
                type="button"
                onClick={() => setConnection('star')}
                className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all ${
                  connection === 'star'
                    ? 'bg-emerald-600/30 border-emerald-500 text-emerald-300 shadow-md'
                    : 'bg-slate-900 border-slate-700 text-slate-400'
                }`}
              >
                Star (Y) — High Voltage
              </button>
            </div>
          </div>
        </div>

        {/* Calculated Results & Visual Representation */}
        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
              <div className="text-xs text-slate-400 mb-1">{t.reqQc[lang]}</div>
              <div className="text-2xl font-bold font-mono text-amber-400">{requiredQcNet.toFixed(1)} kVAR</div>
              <div className="text-[11px] text-slate-500 mt-1">
                k-factor = tan(φ₁) - tan(φ₂) = {kMultiplier.toFixed(3)}
              </div>
            </div>

            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
              <div className="text-xs text-slate-400 mb-1">{t.nameplateReq[lang]}</div>
              <div className="text-2xl font-bold font-mono text-cyan-400">{nameplateRatingNeeded.toFixed(1)} kVAR</div>
              <div className="text-[11px] text-slate-500 mt-1">
                Derating = (V_line / V_rated)² = {(deratingFactor * 100).toFixed(1)}%
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800">
              <div className="text-xs text-slate-400 mb-1">{t.capacitancePerPhase[lang]}</div>
              <div className="text-lg font-bold font-mono text-emerald-400">
                {capacitancePerPhaseUf.toFixed(1)} µF
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                {connection === 'delta' ? 'Δ: 3× lower C than Star' : 'Y: Requires 3× higher C'}
              </div>
            </div>

            <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800">
              <div className="text-xs text-slate-400 mb-1">{t.capCurrent[lang]}</div>
              <div className="text-lg font-bold font-mono text-sky-400">
                {currentCapacitorA.toFixed(1)} A
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                Capacitor branch continuous current
              </div>
            </div>
          </div>

          {/* Current Reduction Impact */}
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
            <div className="text-xs font-semibold text-slate-400 mb-2">{t.currentReduction[lang]}</div>
            <div className="flex items-center justify-between text-sm">
              <div>
                <span className="text-xs text-slate-500 block">Initial Current:</span>
                <span className="font-mono font-bold text-rose-400">{initialCurrentA.toFixed(1)} A</span>
              </div>
              <div className="text-slate-600">➔</div>
              <div>
                <span className="text-xs text-slate-500 block">Compensated Current:</span>
                <span className="font-mono font-bold text-emerald-400">{finalCurrentA.toFixed(1)} A</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500 block">Relief:</span>
                <span className="font-mono font-bold text-amber-400">-{currentReductionPct.toFixed(1)}%</span>
              </div>
            </div>
          </div>

          {/* Step Distribution Recommendation */}
          <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 text-xs space-y-1.5">
            <div className="font-semibold text-slate-300">{t.steps[lang]}:</div>
            <div className="font-mono text-amber-300 font-bold text-sm bg-slate-900 p-2 rounded border border-slate-800">
              {stepBreakdown} (Total Bank: {roundedKvar} kVAR)
            </div>
            <p className="text-[11px] text-slate-400">
              Delta connection is universally preferred in LV systems because capacitors connected line-to-line require only <strong>1/3rd</strong> the microfarad capacitance of star connected banks for the exact same reactive power output (Q = 3 · ω · C · V²).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
