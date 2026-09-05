import React, { useState, useId } from 'react';
import { Language } from '../../types';
import { Factory, ShieldAlert, CheckCircle2, Cpu, Zap, Activity, Sliders } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const IndustrialSubstationPowerStudio: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const controlId = useId();

  // Substation Transformer Rating
  const [txCapacityKva] = useState<number>(1500); // 1500 kVA (1.5 MVA)

  // Industrial Loads
  const [motorKw, setMotorKw] = useState<number>(600); // 600 kW Induction motors @ 0.82 PF
  const [vfdKw, setVfdKw] = useState<number>(300);     // 300 kW Nonlinear VFD Drives
  const [lightingKw, setLightingKw] = useState<number>(120); // 120 kW single-phase lighting
  const [phaseUnbalance, setPhaseUnbalance] = useState<number>(25); // % unbalance in single-phase loads

  // Mitigation Equipment
  const [pfcKvar, setPfcKvar] = useState<number>(300); // APFC Capacitor bank (0 to 600 kVAR)
  const [hasApf, setHasApf] = useState<boolean>(true); // Active Power Filter (APF)
  const [groundingMode, setGroundingMode] = useState<'solid' | 'ner'>('solid'); // Solid vs Neutral Earthing Resistor

  // Base Powers
  // Motors: P = motorKw, Q = P * tan(acos(0.82)) = P * 0.698
  const qMotor = motorKw * 0.698;

  // VFDs: P = vfdKw, Q = P * tan(acos(0.90)) = P * 0.484
  const qVfd = vfdKw * 0.484;

  // Lighting: P = lightingKw, Q = P * tan(acos(0.95)) = P * 0.329
  const qLighting = lightingKw * 0.329;

  // Total uncompensated powers
  const rawP = motorKw + vfdKw + lightingKw;
  const rawQ = qMotor + qVfd + qLighting;

  // Compensated Q
  const netQ = Math.max(0, rawQ - pfcKvar);
  const netS = Math.sqrt(rawP * rawP + netQ * netQ);

  // Transformer Loading %
  const txLoadPct = (netS / txCapacityKva) * 100;

  // Power Factors
  const dpf = netS > 0 ? rawP / netS : 1.0;

  // Harmonics:
  // VFDs inject 5th & 7th harmonics. Without APF, THD_I is ~28%. With APF, reduced to <4%
  const baseThd = (vfdKw / (rawP || 1)) * 42;
  const thdI = hasApf ? Math.min(3.8, baseThd * 0.12) : baseThd;

  // True Power Factor: TPF = DPF / sqrt(1 + THD^2)
  const truePf = dpf / Math.sqrt(1 + (thdI / 100) * (thdI / 100));

  // Neutral Current from unbalance & triplens
  const unbalanceAmp = ((lightingKw * 1000) / (415 * Math.sqrt(3))) * (phaseUnbalance / 100);
  const triplenAmp = hasApf ? 12 : ((lightingKw + vfdKw * 0.3) * 1000 / 415) * 0.28;
  const neutralCurrent = Math.sqrt(unbalanceAmp * unbalanceAmp + triplenAmp * triplenAmp);

  // Voltage Unbalance Factor (approximate based on single-phase load asymmetry)
  const vuf = (phaseUnbalance * (lightingKw / (rawP || 1))) * 0.15;

  const t = {
    en: {
      title: 'Industrial Substation Three-Phase Power & Quality Studio',
      subtitle: 'Comprehensive Engineering Capstone: Transformer Loading, Symmetrical Balances, APFC & Harmonic Filtering',
      plantLoads: 'Factory Feeder Loading',
      motors: 'Induction Motor Fleet (kW, 0.82 PF)',
      vfds: 'VFD Nonlinear Drives (kW)',
      lighting: '1-Phase Facility Loads (kW)',
      unbalancePct: 'Single-Phase Load Asymmetry (%)',
      mitigation: 'Substation Compensation Systems',
      pfcBank: 'APFC Capacitor Bank (kVAR)',
      apfToggle: 'Active Harmonic Filter (APF)',
      grounding: 'Substation Grounding Scheme',
      solidGround: 'Solidly Grounded Neutral',
      nerGround: 'Neutral Grounding Resistor (NER)',
      substationMva: 'Substation Transformer Loading',
      powerQuality: 'Integrated Power Quality Metrics',
      truePfLabel: 'True System Power Factor (TPF)',
      dpfLabel: 'Displacement PF (cos φ₁)',
      thdLabel: 'Current Distortion (THD_I)',
      vufLabel: 'Voltage Unbalance (VUF)',
      neutralLabel: 'Neutral Conductor Current',
      overloadAlert: 'TRANSFORMER OVERLOAD HAZARD! Demand exceeds 100% rated capacity. Trip imminent.',
      vufAlert: 'HIGH VOLTAGE UNBALANCE! Exceeds 2% limit. High rotor overheating risk in induction motors.',
      optimalNotice: 'Substation operating within optimal efficiency and power quality boundaries.'
    },
    hi: {
      title: 'औद्योगिक सबस्टेशन थ्री-फेज शक्ति एवं गुणवत्ता स्टूडियो',
      subtitle: 'इंजीनियरिंग कैपस्टोन: ट्रांसफार्मर लोडिंग, सममितीय संतुलन, APFC एवं हार्मोनिक फिल्टरिंग',
      plantLoads: 'फ़ैक्टरी फीडर लोड',
      motors: 'इंडक्शन मोटर बेड़ा (kW, 0.82 PF)',
      vfds: 'VFD नॉन-लीनियर ड्राइव (kW)',
      lighting: '1-फेज प्लांट लोड (kW)',
      unbalancePct: 'सिंगल-फेज लोड विषमता (%)',
      mitigation: 'सबस्टेशन क्षतिपूर्ति प्रणालियाँ',
      pfcBank: 'APFC संधारित्र बैंक (kVAR)',
      apfToggle: 'सक्रिय हार्मोनिक फ़िल्टर (APF)',
      grounding: 'सबस्टेशन अर्थिंग योजना',
      solidGround: 'सॉलिड ग्राउंडेड न्यूट्रल',
      nerGround: 'न्यूट्रल अर्थिंग रेसिस्टर (NER)',
      substationMva: 'सबस्टेशन ट्रांसफार्मर लोडिंग',
      powerQuality: 'एकीकृत पावर क्वालिटी मेट्रिक्स',
      truePfLabel: 'वास्तविक पावर फैक्टर (TPF)',
      dpfLabel: 'डिस्प्लेसमेंट PF (cos φ₁)',
      thdLabel: 'करंट हार्मोनिक (THD_I)',
      vufLabel: 'वोल्टेज असंतुलन (VUF)',
      neutralLabel: 'न्यूट्रल कंडक्टर करंट',
      overloadAlert: 'ट्रांसफार्मर ओवरलोड खतरा! लोड 100% क्षमता से अधिक है। ट्रिपिंग का खतरा।',
      vufAlert: 'उच्च वोल्टेज असंतुलन! 2% सीमा से अधिक। मोटरों में गंभीर हीटिंग का जोखिम।',
      optimalNotice: 'सबस्टेशन इष्टतम दक्षता एवं पावर क्वालिटी मानकों के भीतर कार्य कर रहा है।'
    },
    bn: {
      title: 'শিল্প সাবস্টেশন থ্রি-ফেজ পাওয়ার ও কোয়ালিটি স্টুডিও',
      subtitle: 'ইঞ্জিনিয়ারিং ক্যাপস্টোন: ট্রান্সফরমার লোডিং, ব্যালেন্সিং, APFC ও হারমোনিক ফিল্টারিং',
      plantLoads: 'কারখানা ফিডার লোডসমূহ',
      motors: 'ইন্ডাকশন মোটর বহর (kW, 0.82 PF)',
      vfds: 'VFD নন-লিনিয়ার ড্রাইভ (kW)',
      lighting: '১-ফেজ প্ল্যান্ট লোড (kW)',
      unbalancePct: 'সিঙ্গেল-ফেজ লোড অসমতা (%)',
      mitigation: 'সাবস্টেশন কমপেনসেশন সিস্টেম',
      pfcBank: 'APFC ক্যাপাসিটর ব্যাংক (kVAR)',
      apfToggle: 'অ্যাক্টিভ হারমোনিক ফিল্টার (APF)',
      grounding: 'সাবস্টেশন গ্রাউন্ডিং স্কিম',
      solidGround: 'সলিড গ্রাউন্ডেড নিউট্রাল',
      nerGround: 'নিউট্রাল গ্রাউন্ডিং রেজিস্টর (NER)',
      substationMva: 'সাবস্টেশন ট্রান্সফরমার লোডিং',
      powerQuality: 'সমন্বিত পাওয়ার কোয়ালিটি মেট্রিক্স',
      truePfLabel: 'প্রকৃত পাওয়ার ফ্যাক্টর (TPF)',
      dpfLabel: 'ডিসপ্লেসমেন্ট PF (cos φ₁)',
      thdLabel: 'কারেন্ট হারমোনিক (THD_I)',
      vufLabel: 'ভোল্টেজ ভারসাম্যহীনতা (VUF)',
      neutralLabel: 'নিউট্রাল পরিবাহী কারেন্ট',
      overloadAlert: 'ট্রান্সফরমার ওভারলোড বিপদ! লোড ১০০% ধারণক্ষমতা ছাড়িয়ে গেছে।',
      vufAlert: 'উচ্চ ভোল্টেজ ভারসাম্যহীনতা! ২% সীমা অতিক্রম করেছে। মোটরে অতিরিক্ত তাপের ঝুঁকি।',
      optimalNotice: 'সাবস্টেশন সম্পূর্ণ নিরাপদ ও সর্বোচ্চ দক্ষতায় পরিচালিত হচ্ছে।'
    }
  }[lang];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-slate-100 max-w-5xl mx-auto shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-5">
        <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-lg border border-indigo-500/20">
          <Factory className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white tracking-wide">{t.title}</h3>
          <p className="text-xs text-slate-400">{t.subtitle}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Plant Feeders & Mitigations Column */}
        <div className="lg:col-span-6 space-y-4 bg-slate-950/60 p-4 rounded-lg border border-slate-800/80">
          <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">{t.plantLoads}</div>

          {/* Motors */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">{t.motors}</span>
              <span className="font-mono text-cyan-400 font-bold">{motorKw} kW</span>
            </div>
            <input
              id={`${controlId}-motor`}
              type="range"
              min="100"
              max="1000"
              step="50"
              value={motorKw}
              onChange={(e) => setMotorKw(Number(e.target.value))}
              className="w-full accent-cyan-500 bg-slate-800 h-1.5 rounded cursor-pointer"
            />
          </div>

          {/* VFDs */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">{t.vfds}</span>
              <span className="font-mono text-purple-400 font-bold">{vfdKw} kW</span>
            </div>
            <input
              id={`${controlId}-vfd`}
              type="range"
              min="50"
              max="600"
              step="25"
              value={vfdKw}
              onChange={(e) => setVfdKw(Number(e.target.value))}
              className="w-full accent-purple-500 bg-slate-800 h-1.5 rounded cursor-pointer"
            />
          </div>

          {/* Single phase lighting & unbalance */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">{t.lighting}</span>
                <span className="font-mono text-amber-400 font-bold">{lightingKw} kW</span>
              </div>
              <input
                id={`${controlId}-light`}
                type="range"
                min="20"
                max="250"
                step="10"
                value={lightingKw}
                onChange={(e) => setLightingKw(Number(e.target.value))}
                className="w-full accent-amber-500 bg-slate-800 h-1 rounded cursor-pointer"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">{t.unbalancePct}</span>
                <span className="font-mono text-rose-400 font-bold">{phaseUnbalance}%</span>
              </div>
              <input
                id={`${controlId}-unbal`}
                type="range"
                min="0"
                max="60"
                step="5"
                value={phaseUnbalance}
                onChange={(e) => setPhaseUnbalance(Number(e.target.value))}
                className="w-full accent-rose-500 bg-slate-800 h-1 rounded cursor-pointer"
              />
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800 space-y-3">
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">{t.mitigation}</div>

            {/* PFC Bank */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300">{t.pfcBank}</span>
                <span className="font-mono text-emerald-400 font-bold">{pfcKvar} kVAR</span>
              </div>
              <input
                id={`${controlId}-pfc`}
                type="range"
                min="0"
                max="700"
                step="50"
                value={pfcKvar}
                onChange={(e) => setPfcKvar(Number(e.target.value))}
                className="w-full accent-emerald-500 bg-slate-800 h-1.5 rounded cursor-pointer"
              />
            </div>

            {/* APF Filter and Grounding Switches */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                type="button"
                onClick={() => setHasApf(!hasApf)}
                className={`p-2 rounded text-xs font-medium border text-center transition-colors ${
                  hasApf
                    ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                APF Filter: {hasApf ? 'ONLINE (ACTIVE)' : 'BYPASSED (OFF)'}
              </button>

              <button
                type="button"
                onClick={() => setGroundingMode(groundingMode === 'solid' ? 'ner' : 'solid')}
                className={`p-2 rounded text-xs font-medium border text-center transition-colors ${
                  groundingMode === 'solid'
                    ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300'
                    : 'bg-indigo-500/20 border-indigo-500/50 text-indigo-300'
                }`}
              >
                {groundingMode === 'solid' ? t.solidGround : t.nerGround}
              </button>
            </div>
          </div>
        </div>

        {/* Substation KPIs & Analysis */}
        <div className="lg:col-span-6 space-y-4">
          {/* Transformer Loading Bar */}
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{t.substationMva}</span>
              <span className={`font-mono text-sm font-bold ${txLoadPct > 100 ? 'text-rose-400' : 'text-emerald-400'}`}>
                {txLoadPct.toFixed(1)}% ({netS.toFixed(0)} / {txCapacityKva} kVA)
              </span>
            </div>
            <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  txLoadPct > 100 ? 'bg-rose-500' : txLoadPct > 85 ? 'bg-amber-500' : 'bg-emerald-500'
                }`}
                style={{ width: `${Math.min(100, txLoadPct)}%` }}
              />
            </div>
            <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-2">
              <span>Active: {rawP} kW</span>
              <span>Net Reactive: {netQ.toFixed(0)} kVAR</span>
            </div>
          </div>

          {/* Integrated Power Quality Dashboard */}
          <div className="grid grid-cols-2 gap-2.5">
            {/* TPF */}
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-400 block mb-0.5">{t.truePfLabel}</span>
              <div className={`text-xl font-bold font-mono ${truePf < 0.90 ? 'text-amber-400' : 'text-emerald-400'}`}>
                {truePf.toFixed(3)}
              </div>
              <span className="text-[10px] text-slate-500 font-mono">DPF: {dpf.toFixed(3)}</span>
            </div>

            {/* THD_I */}
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-400 block mb-0.5">{t.thdLabel}</span>
              <div className={`text-xl font-bold font-mono ${thdI > 10 ? 'text-rose-400' : 'text-emerald-400'}`}>
                {thdI.toFixed(1)}%
              </div>
              <span className="text-[10px] text-slate-500 font-mono">IEEE 519 limit: &lt;5%</span>
            </div>

            {/* VUF */}
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-400 block mb-0.5">{t.vufLabel}</span>
              <div className={`text-xl font-bold font-mono ${vuf > 2.0 ? 'text-rose-400' : 'text-emerald-400'}`}>
                {vuf.toFixed(2)}%
              </div>
              <span className="text-[10px] text-slate-500 font-mono">NEMA MG-1 limit: 2%</span>
            </div>

            {/* Neutral Current */}
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-400 block mb-0.5">{t.neutralLabel}</span>
              <div className="text-xl font-bold font-mono text-cyan-400">
                {neutralCurrent.toFixed(1)} <span className="text-xs font-normal text-slate-500">A</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono">Unbal + Triplen</span>
            </div>
          </div>

          {/* Alarm / Health Banners */}
          {txLoadPct > 100 ? (
            <div className="p-3 bg-rose-950/60 border border-rose-600 rounded-lg text-rose-200 text-xs flex items-start gap-2.5">
              <ShieldAlert className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
              <div>
                <span className="font-bold block text-rose-100">Substation Alarm: Overload Trip Warning!</span>
                {t.overloadAlert}
              </div>
            </div>
          ) : vuf > 2.0 ? (
            <div className="p-3 bg-amber-950/50 border border-amber-800/80 rounded-lg text-amber-200 text-xs flex items-start gap-2.5">
              <Activity className="w-5 h-5 shrink-0 text-amber-400 mt-0.5" />
              <div>
                <span className="font-bold block text-amber-100">Motor Degradation Warning</span>
                {t.vufAlert}
              </div>
            </div>
          ) : (
            <div className="p-3 bg-emerald-950/40 border border-emerald-700/60 rounded-lg text-emerald-200 text-xs flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
              <span>{t.optimalNotice}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
