import React, { useState, useId } from 'react';
import { BatteryCharging, Zap, Gauge, Flame, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface SupercapacitorEnergyStorageAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'Supercapacitor Energy Storage & EV Regenerative Braking Lab',
    subtitle: 'Simulate high-capacity Electric Double-Layer Capacitors (EDLCs). Explore electric vehicle (EV) regenerative braking energy recovery, Ragone plot power vs. energy density, cycle life (1,000,000+ cycles), and pulse power delivery.',
    bankCapacitanceLabel: 'Bank Capacitance C (Farads)',
    maxVoltageLabel: 'Max Operating Voltage V_max (V)',
    minVoltageLabel: 'Discharge Cutoff Voltage V_min (V)',
    pulseCurrentLabel: 'Discharge Pulse Current I (Amps)',
    esrLabel: 'Equivalent Series Resistance ESR (mΩ)',
    totalEnergyMetric: 'Recoverable Usable Energy (ΔE)',
    maxPowerMetric: 'Peak Pulse Power (P_max)',
    dischargeTimeMetric: 'Pulse Duration at Current',
    cycleLifeMetric: 'Expected Cycle Life',
    ragoneTitle: 'Ragone Plot: Power Density vs Energy Density',
    evBrakingTitle: 'EV Regenerative Braking Energy Recovery Simulation',
    evBrakingDesc: 'During heavy vehicle braking (e.g. 100 km/h to 0 km/h in 4 seconds), conventional Li-ion batteries cannot absorb massive instantaneous current without thermal runaway. Supercapacitors absorb the full kinetic pulse with 95%+ roundtrip efficiency, preserving battery lifespan.',
    reset: 'Reset Defaults',
    formulaTitle: 'Supercapacitor Energy & Power Formulas',
    formulaText: 'ΔE = ½ · C · (V_max² - V_min²) Joules  |  P_max = V_max² / (4 · ESR) Watts  |  t_discharge = C · (V_max - V_min) / I'
  },
  hi: {
    title: 'सुपरकैपेसिटर ऊर्जा भंडारण एवं ईवी रीजेनेरेटिव ब्रेकिंग लैब',
    subtitle: 'इलेक्ट्रिक डबल-लेयर कैपेसिटर (EDLC) का सजीव अध्ययन करें। इलेक्ट्रिक वाहन (EV) रीजेनेरेटिव ब्रेकिंग, रैगोन प्लॉट (विशिष्ट शक्ति बनाम ऊर्जा), 10 लाख+ लाइफ साइकिल एवं पल्स डिस्चार्ज का विश्लेषण देखें।',
    bankCapacitanceLabel: 'बैंक धारिता C (Farads)',
    maxVoltageLabel: 'अधिकतम वोल्टेज V_max (V)',
    minVoltageLabel: 'कटऑफ वोल्टेज V_min (V)',
    pulseCurrentLabel: 'डिस्चार्ज पल्स धारा I (Amps)',
    esrLabel: 'तुल्य श्रेणी प्रतिरोध ESR (mΩ)',
    totalEnergyMetric: 'पुनर्प्राप्त करने योग्य ऊर्जा (ΔE)',
    maxPowerMetric: 'चरम पल्स पावर (P_max)',
    dischargeTimeMetric: 'पल्स डिस्चार्ज समय (t)',
    cycleLifeMetric: 'अनुमानित जीवन चक्र (Cycle Life)',
    ragoneTitle: 'रैगोन प्लॉट: विशिष्ट शक्ति बनाम विशिष्ट ऊर्जा',
    evBrakingTitle: 'ईवी रीजेनेरेटिव ब्रेकिंग ऊर्जा पुनर्प्राप्ति दृश्य',
    evBrakingDesc: 'तीव्र ब्रेकिंग के समय सामान्य लिथियम-आयन बैटरी इतनी भारी धारा तेजी से अवशोषित नहीं कर पाती। सुपरकैपेसिटर 95%+ दक्षता के साथ विशाल काइनेटिक ऊर्जा को तात्कालिक रूप से अवशोषित कर लेते हैं।',
    reset: 'डिफ़ॉल्ट रीसेट',
    formulaTitle: 'सुपरकैपेसिटर ऊर्जा एवं शक्ति सूत्र',
    formulaText: 'ΔE = ½ · C · (V_max² - V_min²) Joules  |  P_max = V_max² / (4 · ESR) Watts  |  t = C · (V_max - V_min) / I'
  },
  bn: {
    title: 'সুপারক্যাপাসিটর শক্তি সঞ্চয় ও ইভি রিজেনারেটিভ ব্রেকিং ল্যাব',
    subtitle: 'ইলেকট্রিক ডাবল-লেয়ার ক্যাপাসিটর (EDLC) এর উচ্চ ক্ষমতা বিশ্লেষণ করুন। বৈদ্যুতিক গাড়ির রিজেনারেটিভ ব্রেকিং এ দ্রুত শক্তি শোষণ, র‍্যাগন প্লট, ১০ লক্ষ+ লাইফ সাইকেল ও ইনস্ট্যান্ট পালস ডিসচার্জ দেখুন।',
    bankCapacitanceLabel: 'ব্যাংক ক্যাপাসিট্যান্স C (Farads)',
    maxVoltageLabel: 'সর্বোচ্চ ভোল্টেজ V_max (V)',
    minVoltageLabel: 'কাট-অফ ভোল্টেজ V_min (V)',
    pulseCurrentLabel: 'পালস ডিসচার্জ কারেন্ট I (Amps)',
    esrLabel: 'সমতুল্য সিরিজ রোধ ESR (mΩ)',
    totalEnergyMetric: 'ব্যবহারযোগ্য সঞ্চিত শক্তি (ΔE)',
    maxPowerMetric: 'পিক পালস পাওয়ার (P_max)',
    dischargeTimeMetric: 'ডিসচার্জ সময়কাল (t)',
    cycleLifeMetric: 'লাইফ সাইকেল (Cycle Life)',
    ragoneTitle: 'র্যাগন প্লট: পাওয়ার ডেনসিটি বনাম এনার্জি ডেনসিটি',
    evBrakingTitle: 'ইভি রিজেনারেটিভ ব্রেকিং এনার্জি রিকভারি',
    evBrakingDesc: 'তীব্র ব্রেকিংয়ের সময় লিথিয়াম ব্যাটারি দ্রুত হাই কারেন্ট গ্রহণ করতে পারে না। সুপারক্যাপাসিটর ৯৫%+ দক্ষতায় চোখের পলকে গতিশক্তি শোষণ করে ব্যাটারির আয়ুষ্কাল রক্ষা করে।',
    reset: 'ডিফল্ট রিসেট',
    formulaTitle: 'সুপারক্যাপাসিটর গাণিতিক সূত্রাবলী',
    formulaText: 'ΔE = ½ · C · (V_max² - V_min²) Joules  |  P_max = V_max² / (4 · ESR) Watts  |  t = C · (V_max - V_min) / I'
  }
};

export const SupercapacitorEnergyStorageAnimation: React.FC<SupercapacitorEnergyStorageAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const capId = useId();
  const vMaxId = useId();
  const vMinId = useId();
  const currentId = useId();
  const esrId = useId();

  // State
  const [bankCapF, setBankCapF] = useState<number>(300); // 300 Farads
  const [vMax, setVMax] = useState<number>(48); // 48 V
  const [vMin, setVMin] = useState<number>(24); // 24 V (50% depth of discharge)
  const [pulseAmps, setPulseAmps] = useState<number>(50); // 50 A
  const [esrMilliOhms, setEsrMilliOhms] = useState<number>(3.0); // 3 mΩ

  // Mathematical Calculations
  const esrOhms = esrMilliOhms * 1e-3;
  const deltaE_Joules = 0.5 * bankCapF * (Math.pow(vMax, 2) - Math.pow(vMin, 2));
  const deltaE_Wh = deltaE_Joules / 3600; // Watt-hours
  const peakPowerWatts = Math.pow(vMax, 2) / (4 * esrOhms);
  const peakPowerKW = peakPowerWatts / 1e3;
  const dischargeDurationSec = pulseAmps > 0 ? (bankCapF * (vMax - vMin)) / pulseAmps : 0;

  const handleReset = () => {
    setBankCapF(300);
    setVMax(48);
    setVMin(24);
    setPulseAmps(50);
    setEsrMilliOhms(3.0);
  };

  return (
    <InteractiveSimulationCard
      currentLanguage={currentLanguage}
      title={t.title}
      subtitle={t.subtitle}
      onReset={handleReset}
      resetLabel={t.reset}
      formulaText={t.formulaText}
    >
      {/* Parameter Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 bg-slate-950/70 p-4 rounded-xl border border-slate-800">
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <label htmlFor={capId} className="text-slate-300 font-semibold">{t.bankCapacitanceLabel}</label>
            <span className="font-mono text-cyan-400 font-bold">{bankCapF} F</span>
          </div>
          <input
            id={capId}
            type="range"
            min="10"
            max="1000"
            step="10"
            value={bankCapF}
            onChange={(e) => setBankCapF(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <label htmlFor={vMaxId} className="text-slate-300 font-semibold">{t.maxVoltageLabel}</label>
            <span className="font-mono text-emerald-400 font-bold">{vMax} V</span>
          </div>
          <input
            id={vMaxId}
            type="range"
            min="12"
            max="120"
            step="6"
            value={vMax}
            onChange={(e) => {
              const val = Number(e.target.value);
              setVMax(val);
              if (vMin >= val) setVMin(val / 2);
            }}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <label htmlFor={vMinId} className="text-slate-300 font-semibold">{t.minVoltageLabel}</label>
            <span className="font-mono text-amber-400 font-bold">{vMin} V</span>
          </div>
          <input
            id={vMinId}
            type="range"
            min="0"
            max={Math.max(1, vMax - 6)}
            step="2"
            value={vMin}
            onChange={(e) => setVMin(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <label htmlFor={currentId} className="text-slate-300 font-semibold">{t.pulseCurrentLabel}</label>
            <span className="font-mono text-purple-400 font-bold">{pulseAmps} A</span>
          </div>
          <input
            id={currentId}
            type="range"
            min="5"
            max="200"
            step="5"
            value={pulseAmps}
            onChange={(e) => setPulseAmps(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
          />
        </div>

        <div className="space-y-1.5 col-span-1 sm:col-span-2 lg:col-span-1">
          <div className="flex justify-between text-xs">
            <label htmlFor={esrId} className="text-slate-300 font-semibold">{t.esrLabel}</label>
            <span className="font-mono text-rose-400 font-bold">{esrMilliOhms.toFixed(1)} mΩ</span>
          </div>
          <input
            id={esrId}
            type="range"
            min="0.5"
            max="20.0"
            step="0.5"
            value={esrMilliOhms}
            onChange={(e) => setEsrMilliOhms(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-400"
          />
        </div>
      </div>

      {/* Real-time Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-slate-950 p-3 rounded-xl border border-cyan-900/60 shadow-sm">
          <div className="flex items-center gap-1 text-xs text-slate-400 font-medium mb-1">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.totalEnergyMetric}</span>
          </div>
          <div className="text-base sm:text-lg font-bold font-mono text-cyan-300">
            {deltaE_Wh.toFixed(2)} Wh
          </div>
          <div className="text-[10px] text-slate-400 font-mono">
            {(deltaE_Joules / 1e3).toFixed(1)} kJ usable
          </div>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-rose-900/60 shadow-sm">
          <div className="flex items-center gap-1 text-xs text-slate-400 font-medium mb-1">
            <Flame className="w-3.5 h-3.5 text-rose-400" />
            <span>{t.maxPowerMetric}</span>
          </div>
          <div className="text-base sm:text-lg font-bold font-mono text-rose-300">
            {peakPowerKW.toFixed(1)} kW
          </div>
          <div className="text-[10px] text-slate-400 font-mono">
            Matched load peak
          </div>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-emerald-900/60 shadow-sm">
          <div className="flex items-center gap-1 text-xs text-slate-400 font-medium mb-1">
            <Gauge className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.dischargeTimeMetric}</span>
          </div>
          <div className="text-base sm:text-lg font-bold font-mono text-emerald-300">
            {dischargeDurationSec.toFixed(1)} s
          </div>
          <div className="text-[10px] text-slate-400 font-mono">
            At {pulseAmps} A constant current
          </div>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-purple-900/60 shadow-sm">
          <div className="flex items-center gap-1 text-xs text-slate-400 font-medium mb-1">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
            <span>{t.cycleLifeMetric}</span>
          </div>
          <div className="text-base sm:text-lg font-bold font-mono text-purple-300">
            1,000,000+
          </div>
          <div className="text-[10px] text-slate-400">
            vs 1,500 cycles (Li-ion)
          </div>
        </div>
      </div>

      {/* Visual Ragone Comparison Plot */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            {t.ragoneTitle}
          </h4>
          <div className="text-[11px] font-mono text-slate-400 flex items-center gap-3">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-400"></span>Supercapacitors</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400"></span>Li-Ion Batteries</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400"></span>Lead-Acid</span>
          </div>
        </div>

        <div className="w-full flex justify-center py-2 overflow-x-auto">
          <svg viewBox="0 0 500 200" className="w-full max-w-xl h-auto select-none bg-slate-900/90 rounded-lg border border-slate-800">
            {/* Axes */}
            <line x1="50" y1="20" x2="50" y2="160" stroke="#475569" strokeWidth="1.5" />
            <line x1="50" y1="160" x2="470" y2="160" stroke="#475569" strokeWidth="1.5" />

            <text x="25" y="90" fill="#94a3b8" fontSize="10" transform="rotate(-90 25 90)" textAnchor="middle" fontWeight="bold">
              Specific Power (W/kg) →
            </text>
            <text x="260" y="185" fill="#94a3b8" fontSize="10" textAnchor="middle" fontWeight="bold">
              Specific Energy (Wh/kg) →
            </text>

            {/* Conventional Capacitor Zone */}
            <ellipse cx="90" cy="40" rx="30" ry="18" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="90" y="43" fill="#93c5fd" fontSize="9" textAnchor="middle" fontWeight="bold">Electrostatic</text>
            <text x="90" y="53" fill="#93c5fd" fontSize="8" textAnchor="middle">&gt;100 kW/kg</text>

            {/* Supercapacitors / EDLC Zone (High Power, Medium Energy) */}
            <ellipse cx="180" cy="55" rx="50" ry="25" fill="#06b6d4" fillOpacity="0.25" stroke="#06b6d4" strokeWidth="2" />
            <text x="180" y="52" fill="#22d3ee" fontSize="11" textAnchor="middle" fontWeight="bold">Supercapacitor</text>
            <text x="180" y="66" fill="#67e8f9" fontSize="8" textAnchor="middle">10 kW/kg | 5-15 Wh/kg</text>

            {/* Lead-Acid Batteries Zone */}
            <ellipse cx="300" cy="130" rx="45" ry="20" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="300" y="132" fill="#fbbf24" fontSize="10" textAnchor="middle" fontWeight="bold">Lead-Acid</text>
            <text x="300" y="144" fill="#fde68a" fontSize="8" textAnchor="middle">30-50 Wh/kg</text>

            {/* Li-Ion Batteries Zone (High Energy, Moderate Power) */}
            <ellipse cx="400" cy="115" rx="55" ry="25" fill="#10b981" fillOpacity="0.25" stroke="#10b981" strokeWidth="2" />
            <text x="400" y="112" fill="#34d399" fontSize="11" textAnchor="middle" fontWeight="bold">Li-Ion Battery</text>
            <text x="400" y="126" fill="#a7f3d0" fontSize="8" textAnchor="middle">150-250 Wh/kg</text>
          </svg>
        </div>

        {/* Industrial Context Card */}
        <div className="text-xs text-slate-300 bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-1">
          <div className="font-bold text-cyan-400 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5" />
            {t.evBrakingTitle}
          </div>
          <p className="text-slate-300 leading-relaxed text-[11px]">
            {t.evBrakingDesc}
          </p>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
