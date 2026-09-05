import React, { useState, useId } from 'react';
import { Language } from '../../types';
import { Compass, Zap, Cpu, Sliders, Layers } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const TransmissionLineParameterCalculator: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const idPrefix = useId();

  // Inputs
  const [lineLengthKm, setLineLengthKm] = useState<number>(150);      // km
  const [systemVoltageKv, setSystemVoltageKv] = useState<number>(400); // kV LL
  const [freqHz, setFreqHz] = useState<number>(50);                  // 50 or 60 Hz
  const [conductorRadiusMm, setConductorRadiusMm] = useState<number>(14.5); // mm (e.g., ACSR Moose/Bersimis)
  const [bundleCount, setBundleCount] = useState<number>(2);          // 1, 2, 3, 4
  const [bundleSpacingCm, setBundleSpacingCm] = useState<number>(45); // cm
  const [spacingD12, setSpacingD12] = useState<number>(8.0);          // meters
  const [spacingD23, setSpacingD23] = useState<number>(8.0);          // meters
  const [spacingD31, setSpacingD31] = useState<number>(16.0);         // meters (flat horizontal layout)

  // Calculations
  const rMeters = conductorRadiusMm / 1000;
  const dBundleMeters = bundleSpacingCm / 100;

  // Geometric Mean Distance (GMD)
  const gmd = Math.cbrt(spacingD12 * spacingD23 * spacingD31);

  // Geometric Mean Radius for Inductance (GMR_L)
  const rPrime = 0.7788 * rMeters;
  let gmrL = rPrime;
  let gmrC = rMeters;

  if (bundleCount === 2) {
    gmrL = Math.sqrt(rPrime * dBundleMeters);
    gmrC = Math.sqrt(rMeters * dBundleMeters);
  } else if (bundleCount === 3) {
    gmrL = Math.cbrt(rPrime * Math.pow(dBundleMeters, 2));
    gmrC = Math.cbrt(rMeters * Math.pow(dBundleMeters, 2));
  } else if (bundleCount === 4) {
    gmrL = 1.091 * Math.pow(rPrime * Math.pow(dBundleMeters, 3), 0.25);
    gmrC = 1.091 * Math.pow(rMeters * Math.pow(dBundleMeters, 3), 0.25);
  }

  // Inductance per phase per meter: L = 2e-7 * ln(GMD / GMR_L) (H/m)
  const lPerMeter = 2e-7 * Math.log(gmd / gmrL);
  const lPerKm = lPerMeter * 1000; // H/km
  const lTotal = lPerKm * lineLengthKm; // H

  // Capacitance to neutral per meter: C = 2*pi*eps0 / ln(GMD / GMR_C) (F/m)
  const eps0 = 8.854187817e-12;
  const cPerMeter = (2 * Math.PI * eps0) / Math.log(gmd / gmrC);
  const cPerKm = cPerMeter * 1000; // F/km
  const cTotal = cPerKm * lineLengthKm; // F

  // Reactance and Susceptance
  const omega = 2 * Math.PI * freqHz;
  const xLPerKm = omega * lPerKm; // Ω/km
  const bCPerKm = omega * cPerKm; // S/km

  const xLTotal = xLPerKm * lineLengthKm; // Ω
  const bCTotal = bCPerKm * lineLengthKm; // S

  // Line Charging Current and MVAR
  // V_ph = V_LL / sqrt(3)
  const vPhVolts = (systemVoltageKv * 1000) / Math.sqrt(3);
  const iChargingAmp = omega * cTotal * vPhVolts; // Amperes
  // Q_charging = 3 * V_ph * I_c = omega * C_total * V_LL^2 in MVAR
  const qChargingMvar = (omega * cTotal * Math.pow(systemVoltageKv * 1000, 2)) / 1e6;

  // Resistance estimation (ACSR typical per bundle)
  const rPerKmEstimated = (0.070 / bundleCount); // Ω/km
  const rTotal = rPerKmEstimated * lineLengthKm;

  // Characteristic Impedance (Surge Impedance Z_c = sqrt(L/C))
  const surgeImpedance = Math.sqrt(lPerMeter / cPerMeter);
  // Surge Impedance Loading (SIL = V_LL^2 / Z_c)
  const silMw = Math.pow(systemVoltageKv, 2) / surgeImpedance;

  const t = {
    en: {
      title: 'Transmission-Line Parameter Calculator (R, L & C)',
      subtitle: 'Analyze conductor bundles, GMD, GMR, series reactance, and shunt line-charging capacitive MVAR',
      geometryTitle: 'Phase Geometry & Bundle Configuration',
      lineLenLabel: 'Line Length (km):',
      vLineLabel: 'System Voltage (kV, Line-to-Line):',
      freqLabel: 'Grid Frequency (Hz):',
      condRadiusLabel: 'Sub-Conductor Radius (mm):',
      bundleCountLabel: 'Bundle Conductors per Phase:',
      bundleSpacingLabel: 'Bundle Sub-Spacing (cm):',
      spacingsLabel: 'Phase Spacings: D12, D23, D31 (meters):',
      derivedSpatial: 'Spatial Geometry Results',
      gmdLabel: 'Geometric Mean Distance (GMD):',
      gmrLLabel: 'GMR for Inductance (GMR_L):',
      gmrCLabel: 'GMR for Capacitance (GMR_C):',
      electricalTitle: 'Distributed Electrical Line Parameters',
      inductanceLabel: 'Series Inductance (L):',
      capacitanceLabel: 'Shunt Capacitance (C):',
      reactanceLabel: 'Total Series Reactance (X_L):',
      susceptanceLabel: 'Total Shunt Susceptance (B_C):',
      chargingTitle: 'Capacitive Charging & Surge Impedance Loading (SIL)',
      iChargeLabel: 'Line Charging Current (I_C):',
      qChargeLabel: 'Generated Charging Reactive Power (Q_C):',
      surgeImpLabel: 'Surge Impedance (Z_c):',
      silLabel: 'Natural Surge Impedance Loading (SIL):'
    },
    hi: {
      title: 'पारेषण लाइन पैरामीटर कैलकुलेटर (R, L एवं C)',
      subtitle: 'कंडक्टर बंडल, GMD, GMR, सीरीज प्रतिघात एवं शंट लाइन चार्जिंग कैपेसिटिव MVAR का विश्लेषण करें',
      geometryTitle: 'फेज ज्यामिति एवं बंडल कॉन्फ़िगरेशन',
      lineLenLabel: 'लाइन की लंबाई (किमी):',
      vLineLabel: 'सिस्टम वोल्टेज (kV, लाइन-टू-लाइन):',
      freqLabel: 'ग्रिड आवृत्ति (Hz):',
      condRadiusLabel: 'कंडक्टर त्रिज्या (mm):',
      bundleCountLabel: 'प्रति फेज बंडल कंडक्टरों की संख्या:',
      bundleSpacingLabel: 'बंडल के बीच की दूरी (cm):',
      spacingsLabel: 'फेज दूरियां: D12, D23, D31 (मीटर):',
      derivedSpatial: 'स्थानिक ज्यामिति परिणाम',
      gmdLabel: 'ज्यामितीय माध्य दूरी (GMD):',
      gmrLLabel: 'प्रेरकत्व हेतु GMR (GMR_L):',
      gmrCLabel: 'धारिता हेतु GMR (GMR_C):',
      electricalTitle: 'वितरित विद्युत लाइन पैरामीटर',
      inductanceLabel: 'सीरीज प्रेरकत्व (L):',
      capacitanceLabel: 'शंट धारिता (C):',
      reactanceLabel: 'कुल सीरीज प्रतिघात (X_L):',
      susceptanceLabel: 'कुल शंट ससेप्टेंस (B_C):',
      chargingTitle: 'चार्जिंग करंट एवं सर्ज इम्पीडेंस लोडिंग (SIL)',
      iChargeLabel: 'लाइन चार्जिंग धारा (I_C):',
      qChargeLabel: 'उत्पन्न चार्जिंग प्रतिघाती शक्ति (Q_C):',
      surgeImpLabel: 'सर्ज प्रतिबाधा (Z_c):',
      silLabel: 'सर्ज इम्पीडेंस लोडिंग (SIL):'
    },
    bn: {
      title: 'ট্রান্সমিশন লাইন প্যারামিটার ক্যালকুলেটর (R, L ও C)',
      subtitle: 'কন্ডাক্টর বান্ডিল, GMD, GMR, সিরিজ রিঅ্যাক্ট্যান্স ও শান্ট চার্জিং ক্যাপাসিটিভ MVAR বিশ্লেষণ করুন',
      geometryTitle: 'ফেজ জ্যামিতি ও বান্ডিল কনফিগারেশন',
      lineLenLabel: 'লাইনের দৈর্ঘ্য (কিমি):',
      vLineLabel: 'সিস্টেম ভোল্টেজ (kV, লাইন-টু-লাইন):',
      freqLabel: 'গ্রিড ফ্রিকোয়েন্সি (Hz):',
      condRadiusLabel: 'কন্ডাক্টরের ব্যাসার্ধ (মিমি):',
      bundleCountLabel: 'প্রতি ফেজে বান্ডিল কন্ডাক্টর সংখ্যা:',
      bundleSpacingLabel: 'বান্ডিল কন্ডাক্টরের দূরত্ব (সেমি):',
      spacingsLabel: 'ফেজ দূরত্বসমূহ: D12, D23, D31 (মিটার):',
      derivedSpatial: 'স্থানিক জ্যামিতিক ফলাফল',
      gmdLabel: 'জ্যামিতিক গড় দূরত্ব (GMD):',
      gmrLLabel: 'ইনডাকট্যান্সের জন্য GMR (GMR_L):',
      gmrCLabel: 'ক্যাপাসিট্যান্সের জন্য GMR (GMR_C):',
      electricalTitle: 'ডিস্ট্রিবিউটেড বৈদ্যুতিক লাইন প্যারামিটার',
      inductanceLabel: 'সিরিজ ইনডাকট্যান্স (L):',
      capacitanceLabel: 'শান্ট ক্যাপাসিট্যান্স (C):',
      reactanceLabel: 'মোট সিরিজ রিঅ্যাক্ট্যান্স (X_L):',
      susceptanceLabel: 'মোট শান্ট সাসিপট্যান্স (B_C):',
      chargingTitle: 'ক্যাপাসিটিভ চার্জিং ও সার্জ ইম্পিডেন্স লোডিং (SIL)',
      iChargeLabel: 'লাইন চার্জিং কারেন্ট (I_C):',
      qChargeLabel: 'উত্পাদিত চার্জিং রিঅ্যাক্টিভ পাওয়ার (Q_C):',
      surgeImpLabel: 'সার্জ ইম্পিডেন্স (Z_c):',
      silLabel: 'সার্জ ইম্পিডেন্স লোডিং (SIL):'
    }
  }[lang];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-white shadow-xl max-w-4xl mx-auto my-6">
      {/* Header */}
      <div className="flex items-start justify-between border-b border-slate-800 pb-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <Compass className="w-6 h-6 text-emerald-400" />
            <h3 className="text-xl font-bold text-emerald-400">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-400 mt-1">{t.subtitle}</p>
        </div>
        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-mono font-semibold">
          EHV / UHV Line Physics
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column: Physical Line Geometry */}
        <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800 space-y-4">
          <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5" /> {t.geometryTitle}
          </h4>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor={`${idPrefix}-len`} className="block text-xs text-slate-400 mb-1">{t.lineLenLabel}</label>
              <input
                id={`${idPrefix}-len`}
                type="number"
                min="10"
                max="1000"
                value={lineLengthKm}
                onChange={(e) => setLineLengthKm(Math.max(1, parseFloat(e.target.value) || 1))}
                className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-sm text-white font-mono"
              />
            </div>
            <div>
              <label htmlFor={`${idPrefix}-kv`} className="block text-xs text-slate-400 mb-1">{t.vLineLabel}</label>
              <select
                id={`${idPrefix}-kv`}
                value={systemVoltageKv}
                onChange={(e) => setSystemVoltageKv(parseFloat(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-white font-mono"
              >
                <option value="66">66 kV</option>
                <option value="132">132 kV</option>
                <option value="220">220 kV</option>
                <option value="400">400 kV</option>
                <option value="765">765 kV</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor={`${idPrefix}-rad`} className="block text-xs text-slate-400 mb-1">{t.condRadiusLabel}</label>
              <input
                id={`${idPrefix}-rad`}
                type="number"
                min="5"
                max="30"
                step="0.5"
                value={conductorRadiusMm}
                onChange={(e) => setConductorRadiusMm(Math.max(1, parseFloat(e.target.value) || 1))}
                className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-sm text-white font-mono"
              />
            </div>
            <div>
              <label htmlFor={`${idPrefix}-freq`} className="block text-xs text-slate-400 mb-1">{t.freqLabel}</label>
              <select
                id={`${idPrefix}-freq`}
                value={freqHz}
                onChange={(e) => setFreqHz(parseFloat(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-white font-mono"
              >
                <option value="50">50 Hz (India/Europe)</option>
                <option value="60">60 Hz (USA/Americas)</option>
              </select>
            </div>
          </div>

          {/* Bundle Controls */}
          <div className="pt-2 border-t border-slate-800">
            <label className="block text-xs text-slate-300 mb-2">{t.bundleCountLabel}</label>
            <div className="grid grid-cols-4 gap-2 mb-3">
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setBundleCount(num)}
                  className={`py-1.5 text-xs font-semibold rounded ${
                    bundleCount === num
                      ? 'bg-emerald-600 text-white shadow'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {num} {num === 1 ? 'Single' : `Bundle`}
                </button>
              ))}
            </div>

            {bundleCount > 1 && (
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <label htmlFor={`${idPrefix}-bspacing`}>{t.bundleSpacingLabel}</label>
                  <span className="font-mono text-emerald-400 font-bold">{bundleSpacingCm} cm</span>
                </div>
                <input
                  id={`${idPrefix}-bspacing`}
                  type="range"
                  min="20"
                  max="60"
                  step="5"
                  value={bundleSpacingCm}
                  onChange={(e) => setBundleSpacingCm(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
              </div>
            )}
          </div>

          {/* Spatial Distances */}
          <div className="pt-2 border-t border-slate-800">
            <label className="block text-xs text-slate-400 mb-1">{t.spacingsLabel}</label>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <span className="text-[10px] text-slate-500 font-mono">D12:</span>
                <input
                  type="number"
                  min="2"
                  max="25"
                  step="0.5"
                  value={spacingD12}
                  onChange={(e) => setSpacingD12(Math.max(1, parseFloat(e.target.value) || 1))}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-white font-mono"
                />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-mono">D23:</span>
                <input
                  type="number"
                  min="2"
                  max="25"
                  step="0.5"
                  value={spacingD23}
                  onChange={(e) => setSpacingD23(Math.max(1, parseFloat(e.target.value) || 1))}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-white font-mono"
                />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-mono">D31:</span>
                <input
                  type="number"
                  min="2"
                  max="35"
                  step="0.5"
                  value={spacingD31}
                  onChange={(e) => setSpacingD31(Math.max(1, parseFloat(e.target.value) || 1))}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-white font-mono"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Electrical Line Metrics */}
        <div className="space-y-4">
          {/* Spatial Results Card */}
          <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800 space-y-2 text-xs">
            <div className="text-slate-400 font-semibold uppercase tracking-wider">{t.derivedSpatial}</div>
            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">{t.gmdLabel}</span>
              <span className="font-mono text-emerald-300 font-bold">{gmd.toFixed(2)} m</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">{t.gmrLLabel}</span>
              <span className="font-mono text-sky-300 font-bold">{(gmrL * 100).toFixed(2)} cm</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-400">{t.gmrCLabel}</span>
              <span className="font-mono text-pink-300 font-bold">{(gmrC * 100).toFixed(2)} cm</span>
            </div>
          </div>

          {/* Line Electrical Parameters */}
          <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800 space-y-2 text-xs">
            <div className="text-emerald-400 font-semibold uppercase tracking-wider">{t.electricalTitle}</div>
            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">{t.inductanceLabel}</span>
              <span className="font-mono text-white font-bold">
                {(lPerKm * 1000).toFixed(3)} mH/km ({lTotal.toFixed(3)} H total)
              </span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">{t.capacitanceLabel}</span>
              <span className="font-mono text-white font-bold">
                {(cPerKm * 1e9).toFixed(3)} nF/km ({(cTotal * 1e6).toFixed(2)} µF total)
              </span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">{t.reactanceLabel}</span>
              <span className="font-mono text-amber-300 font-bold">
                {xLPerKm.toFixed(3)} Ω/km ({xLTotal.toFixed(1)} Ω total)
              </span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-400">Estimated Resistance (R):</span>
              <span className="font-mono text-orange-300 font-bold">
                {rPerKmEstimated.toFixed(3)} Ω/km ({rTotal.toFixed(1)} Ω total)
              </span>
            </div>
          </div>

          {/* Charging and SIL Banner */}
          <div className="bg-gradient-to-br from-slate-950 to-slate-900 p-4 rounded-xl border border-emerald-500/30 space-y-2 text-xs">
            <div className="text-sky-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" /> {t.chargingTitle}
            </div>
            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">{t.iChargeLabel}</span>
              <span className="font-mono text-sky-300 font-bold">{iChargingAmp.toFixed(1)} A</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">{t.qChargeLabel}</span>
              <span className="font-mono text-emerald-400 font-bold text-sm">{qChargingMvar.toFixed(1)} MVAR</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">{t.surgeImpLabel}</span>
              <span className="font-mono text-purple-300 font-bold">{surgeImpedance.toFixed(1)} Ω</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-400">{t.silLabel}</span>
              <span className="font-mono text-amber-300 font-bold text-sm">{silMw.toFixed(0)} MW</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
