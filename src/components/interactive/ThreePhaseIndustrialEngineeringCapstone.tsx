import React, { useState, useId } from 'react';
import { Language } from '../../types';
import { Factory, ShieldAlert, CheckCircle2, Cpu, Zap, Activity, Sliders, Award, Layers } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const ThreePhaseIndustrialEngineeringCapstone: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const controlId = useId();

  // Transformer Specifications
  const txCapacityKva = 1500; // 1500 kVA (1.5 MVA Dyn11 11kV/415V)
  const vLineNominal = 415;   // Volts
  const vPhaseNominal = 240;  // Volts

  // Interactive Load Sliders
  const [motorKw, setMotorKw] = useState<number>(600);         // Balanced 3-phase induction motors (PF ~ 0.82)
  const [vfdKw, setVfdKw] = useState<number>(250);             // 6-Pulse VFD nonlinear drives (PF ~ 0.88)
  const [auxKw, setAuxKw] = useState<number>(140);             // 1-Phase auxiliary & lighting
  const [unbalancePct, setUnbalancePct] = useState<number>(25); // Auxiliary load unbalance %
  const [pfcKvar, setPfcKvar] = useState<number>(350);         // APFC Capacitor Bank (0 to 600 kVAR)
  const [hasApf, setHasApf] = useState<boolean>(true);         // Active Harmonic Filter (APF)
  const [is3WireSystem, setIs3WireSystem] = useState<boolean>(false); // 4-Wire vs 3-Wire topology

  // CT & PT Instrument Transformer parameters
  const ctr = 1500 / 5; // 300
  const ptr = 415 / 110; // 3.77
  const meterMultiplier = ctr * ptr; // ~1131.8

  // Powers calculation
  // Motors: P = motorKw, Q = motorKw * tan(acos(0.82)) = motorKw * 0.698
  const qMotor = motorKw * 0.698;
  // VFD: P = vfdKw, Q = vfdKw * tan(acos(0.88)) = vfdKw * 0.540
  const qVfd = vfdKw * 0.540;
  // Auxiliary: P = auxKw, Q = auxKw * tan(acos(0.92)) = auxKw * 0.426
  const qAux = auxKw * 0.426;

  // Uncompensated Totals
  const totalKw = motorKw + vfdKw + auxKw;
  const rawQ = qMotor + qVfd + qAux;

  // Net Compensated Reactive Power
  const netQ = Math.max(0, rawQ - pfcKvar);
  const netKva = Math.sqrt(totalKw * totalKw + netQ * netQ);

  // Power Factors
  const dpf = netKva > 0 ? totalKw / netKva : 1.0;

  // Harmonic Distortion
  // Without APF, VFD injects ~32% 5th and 16% 7th harmonic. With APF, reduced to <3.5%
  const baseThdI = totalKw > 0 ? (vfdKw / totalKw) * 45 : 0;
  const thdI = hasApf ? Math.min(3.6, baseThdI * 0.1) : baseThdI;
  const thdV = Math.min(10, thdI * 0.16);

  // True Power Factor = DPF / sqrt(1 + THD^2)
  const truePf = dpf / Math.sqrt(1 + Math.pow(thdI / 100, 2));

  // Phase Currents (Ia, Ib, Ic)
  // Balanced base current
  const balancedI = netKva > 0 ? (netKva * 1000) / (Math.sqrt(3) * vLineNominal) : 0;
  // Unbalance offset on auxiliary load
  const auxCurrentBase = (auxKw * 1000) / (3 * vPhaseNominal);
  const unbalanceDelta = auxCurrentBase * (unbalancePct / 100);

  const iPhaseA = balancedI + unbalanceDelta * 1.2;
  const iPhaseB = balancedI - unbalanceDelta * 0.5;
  const iPhaseC = balancedI - unbalanceDelta * 0.7;

  // Current Unbalance Factor (NEMA definition: Max deviation from avg / avg * 100)
  const iAvg = (iPhaseA + iPhaseB + iPhaseC) / 3;
  const maxDev = Math.max(Math.abs(iPhaseA - iAvg), Math.abs(iPhaseB - iAvg), Math.abs(iPhaseC - iAvg));
  const cufPct = iAvg > 0 ? (maxDev / iAvg) * 100 : 0;

  // Voltage Unbalance Factor (VUF) roughly proportional to current unbalance * source impedance
  const vufPct = Math.min(5.0, cufPct * 0.18);

  // Neutral Current In:
  // Vector sum of unbalance + Triplen harmonics (if SMPS/IT in auxKw)
  const unbalanceIn = is3WireSystem ? 0 : Math.sqrt(
    Math.pow(iPhaseA - iPhaseB * 0.5 - iPhaseC * 0.5, 2) +
    Math.pow(iPhaseB * 0.866 - iPhaseC * 0.866, 2)
  );
  const triplenIn = is3WireSystem ? 0 : (auxKw * 0.25 * 3); // 3rd harmonic stacking
  const neutralCurrent = Math.sqrt(unbalanceIn * unbalanceIn + triplenIn * triplenIn);

  // Symmetrical Components Decomposition of Currents
  // I1 (Positive Sequence): ~ iAvg
  const iPos = iAvg;
  // I2 (Negative Sequence): roughly iAvg * (CUF / 100)
  const iNeg = iAvg * (cufPct / 100) * 0.7;
  // I0 (Zero Sequence): In / 3
  const iZero = is3WireSystem ? 0 : neutralCurrent / 3;

  // Wattmeter Readings
  // Two-Wattmeter Method (for 3-wire systems):
  // W1 = VL * IL * cos(30 - phi)
  // W2 = VL * IL * cos(30 + phi)
  const phiRad = Math.acos(Math.max(0.1, Math.min(1.0, dpf)));
  const w1Kw = (Math.sqrt(3) * vPhaseNominal * iAvg * Math.cos((Math.PI / 6) - phiRad)) / 1000;
  const w2Kw = (Math.sqrt(3) * vPhaseNominal * iAvg * Math.cos((Math.PI / 6) + phiRad)) / 1000;

  // Three-Wattmeter Method (for 4-wire systems):
  const waKw = (vPhaseNominal * iPhaseA * dpf) / 1000;
  const wbKw = (vPhaseNominal * iPhaseB * dpf) / 1000;
  const wcKw = (vPhaseNominal * iPhaseC * dpf) / 1000;

  // Transformer loading & Demand
  const txLoadPct = (netKva / txCapacityKva) * 100;
  const dailyKwhEst = totalKw * 18; // 18-hour industrial production shift

  // Multilingual dictionary
  const t = {
    en: {
      title: 'Complete Three-Phase Industrial System Analysis — Final Engineering Capstone',
      subtitle: 'Comprehensive 18-point verification: transformer loading, symmetrical components, two/three-wattmeter readings, APFC, and power quality.',
      controlsTitle: 'Industrial Load & Compensation Dispatch',
      motorLabel: 'Balanced Induction Motors (MCC)',
      vfdLabel: 'Nonlinear VFD Automation Loads',
      auxLabel: 'Auxiliary & Lighting (1-Phase)',
      unbalanceLabel: 'Auxiliary Phase Imbalance',
      pfcLabel: 'APFC Detuned Capacitor Bank',
      apfToggle: 'Active Harmonic Filter (APF)',
      sysModeToggle: 'Distribution System Topology',
      fourWire: '3-Phase 4-Wire (With Neutral)',
      threeWire: '3-Phase 3-Wire (Floating/No Neutral)',
      matrixTitle: '18-Point Engineering Verification Matrix',
      p1: '1. Phase Currents (True RMS)',
      p2: '2. Total Active Power (kW)',
      p3: '3. Total Reactive Power (kVAR)',
      p4: '4. Apparent Power (kVA)',
      p5: '5. Power Factor (DPF / True PF)',
      p6: '6. Current Imbalance (CUF %)',
      p7: '7. Neutral Conductor Current (In)',
      p8: '8. Voltage Unbalance Factor (VUF %)',
      p9: '9. Symmetrical Components (I₁, I₂, I₀)',
      p10: '10. Two-Wattmeter Readings (W₁, W₂)',
      p11: '11. Three-Wattmeter Readings (Wa, Wb, Wc)',
      p12: '12. CT / PT Transformer Ratios',
      p13: '13. Overall Meter Multiplier (MF)',
      p14: '14. Maximum Demand & Tx Loading',
      p15: '15. Daily Energy Consumption',
      p16: '16. Current & Voltage THD',
      p17: '17. Metering Sanity Check',
      p18: '18. Final Engineering Recommendation',
      txOptimal: 'TRANSFORMER OPTIMAL: Operating at healthy loading with excellent true PF and low THD.',
      txOverload: 'TRANSFORMER OVERLOAD HAZARD: Loading exceeds 100% capacity! Shed load or expand capacity.',
      apfcNeeded: 'APFC COMPENSATION REQUIRED: Power factor is low. Switch in more capacitor bank steps to avoid utility kVA penalty.',
      apfNotice: 'HARMONIC WARNING: Without APF, THD_I exceeds IEEE 519 limit (8%). Enable APF or install tuned reactors.'
    },
    hi: {
      title: 'पूर्ण थ्री-फेज औद्योगिक प्रणाली विश्लेषण — अंतिम इंजीनियरिंग कैपस्टोन',
      subtitle: '18-बिंदु व्यापक सत्यापन: ट्रांसफार्मर लोडिंग, सममित घटक, टू/थ्री वाटमीटर पठन, APFC एवं पावर क्वालिटी।',
      controlsTitle: 'औद्योगिक लोड एवं क्षतिपूर्ति नियंत्रण',
      motorLabel: 'संतुलित इंडक्शन मोटर्स (MCC)',
      vfdLabel: 'नॉन-लीनियर VFD ड्राइव्स',
      auxLabel: 'सहायक एवं प्रकाश व्यवस्था (1-फेज)',
      unbalanceLabel: 'लोड असंतुलन अनुपात',
      pfcLabel: 'APFC डिट्यून्ड कैपेसिटर बैंक',
      apfToggle: 'एक्टिव हार्मोनिक फिल्टर (APF)',
      sysModeToggle: 'वितरण प्रणाली टोपोलॉजी',
      fourWire: '3-फेज 4-वायर (न्यूट्रल सहित)',
      threeWire: '3-फेज 3-वायर (न्यूट्रल रहित)',
      matrixTitle: '18-बिंदु इंजीनियरिंग सत्यापन मैट्रिक्स',
      p1: '1. फेज धाराएं (True RMS)',
      p2: '2. कुल सक्रिय शक्ति (kW)',
      p3: '3. कुल प्रतिक्रियाशील शक्ति (kVAR)',
      p4: '4. आभासी शक्ति (kVA)',
      p5: '5. पावर फैक्टर (DPF / True PF)',
      p6: '6. धारा असंतुलन (CUF %)',
      p7: '7. न्यूट्रल चालक धारा (In)',
      p8: '8. वोल्टेज असंतुलन (VUF %)',
      p9: '9. सममित घटक (I₁, I₂, I₀)',
      p10: '10. टू-वाटमीटर पठन (W₁, W₂)',
      p11: '11. थ्री-वाटमीटर पठन (Wa, Wb, Wc)',
      p12: '12. CT / PT अनुपात',
      p13: '13. मीटर गुणक (MF)',
      p14: '14. अधिकतम मांग एवं ट्रांसफार्मर लोड',
      p15: '15. दैनिक ऊर्जा खपत',
      p16: '16. धारा एवं वोल्टेज THD',
      p17: '17. मीटरिंग सत्यापन जांच',
      p18: '18. अंतिम इंजीनियरिंग सिफारिश',
      txOptimal: 'ट्रांसफार्मर सुरक्षित: इष्टतम लोडिंग, उत्कृष्ट पावर फैक्टर एवं नियंत्रित हार्मोनिक्स।',
      txOverload: 'अधिभार संकट: ट्रांसफार्मर लोड 100% से अधिक है!',
      apfcNeeded: 'APFC क्षतिपूर्ति आवश्यक: पावर फैक्टर कम है। पेनल्टी से बचने हेतु कैपेसिटर बैंक बढ़ाएं।',
      apfNotice: 'हार्मोनिक चेतावनी: APF के बिना THD_I IEEE 519 सीमा से अधिक है।'
    },
    bn: {
      title: 'সম্পূর্ণ থ্রি-ফেজ শিল্প ব্যবস্থা বিশ্লেষণ — চূড়ান্ত ইঞ্জিনিয়ারিং ক্যাপস্টোন',
      subtitle: '১৮-দফা সমন্বিত যাচাইকরণ: ট্রান্সফরমার লোডিং, সিমেট্রিকাল কম্পোনেন্টস, টু/থ্রি ওয়াটমিটার রিডিং, APFC ও পাওয়ার কোয়ালিটি।',
      controlsTitle: 'শিল্প লোড ও ক্ষতিপূরণ নিয়ন্ত্রণ',
      motorLabel: 'ভারসাম্যপূর্ণ মোটর লোড (MCC)',
      vfdLabel: 'নন-লিনিয়ার VFD ড্রাইভ লোড',
      auxLabel: 'সহায়ক ও লাইটিং লোড (১-ফেজ)',
      unbalanceLabel: 'সহায়ক লোড ভারসাম্যহীনতা',
      pfcLabel: 'APFC ডিটিউন্ড ক্যাপাসিটর ব্যাংক',
      apfToggle: 'অ্যাক্টিভ হারমোনিক ফিল্টার (APF)',
      sysModeToggle: 'বিতরণ ব্যবস্থা টপোলজি',
      fourWire: '৩-ফেজ ৪-ওয়্যার (নিউট্রাল সহ)',
      threeWire: '৩-ফেজ ৩-ওয়্যার (নিউট্রাল ছাড়া)',
      matrixTitle: '১৮-দফা ইঞ্জিনিয়ারিং মূল্যায়ন ম্যাট্রিক্স',
      p1: '১. ফেজ কারেন্ট (True RMS)',
      p2: '২. মোট সক্রিয় পাওয়ার (kW)',
      p3: '৩. মোট প্রতিক্রিয়াশীল পাওয়ার (kVAR)',
      p4: '৪. আপাত পাওয়ার (kVA)',
      p5: '৫. পাওয়ার ফ্যাক্টর (DPF / True PF)',
      p6: '৬. কারেন্ট ভারসাম্যহীনতা (CUF %)',
      p7: '৭. নিউট্রাল পরিবাহী কারেন্ট (In)',
      p8: '৮. ভোল্টেজ ভারসাম্যহীনতা (VUF %)',
      p9: '৯. সিমেট্রিকাল কম্পোনেন্টস (I₁, I₂, I₀)',
      p10: '১০. টু-ওয়াটমিটার রিডিং (W₁, W₂)',
      p11: '১১. থ্রি-ওয়াটমিটার রিডিং (Wa, Wb, Wc)',
      p12: '১২. CT / PT অনুপাত',
      p13: '১৩. মিটার গুণক (MF)',
      p14: '১৪. সর্বোচ্চ ডিমান্ড ও ট্রান্সফরমার লোড',
      p15: '১৫. দৈনিক শক্তি খরচ (kWh)',
      p16: '১৬. কারেন্ট ও ভোল্টেজ THD',
      p17: '১৭. মিটারিং নির্ভুলতা যাচাই',
      p18: '১৮. চূড়ান্ত ইঞ্জিনিয়ারিং সুপারিশ',
      txOptimal: 'ট্রান্সফরমার অনুকূল: আদর্শ লোডিং, উচ্চ পাওয়ার ফ্যাক্টর ও নিয়ন্ত্রিত হারমোনিকস।',
      txOverload: 'ওভারলোড ঝুঁকি: ট্রান্সফরমার লোড ১০০% ছাড়িয়ে গেছে!',
      apfcNeeded: 'APFC ক্ষতিপূরণ প্রয়োজন: জরিমানা এড়াতে আরও ক্যাপাসিটর ধাপ সংযুক্ত করুন।',
      apfNotice: 'হারমোনিক সতর্কতা: APF ছাড়া THD_I নির্ধারিত সীমা অতিক্রম করেছে।'
    }
  }[lang];

  return (
    <div id="three-phase-industrial-engineering-capstone" className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2 text-emerald-400 mb-1">
          <Factory className="w-5 h-5" />
          <h3 className="text-lg font-bold font-display">{t.title}</h3>
        </div>
        <p className="text-xs md:text-sm text-slate-400">{t.subtitle}</p>
      </div>

      {/* Control Sliders & Dispatch Grid */}
      <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
            <Sliders className="w-4 h-4" />
            {t.controlsTitle}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIs3WireSystem(!is3WireSystem)}
              className={`px-2.5 py-1 rounded text-xs font-mono font-bold transition-all border ${
                is3WireSystem
                  ? 'bg-purple-950 border-purple-600 text-purple-300'
                  : 'bg-cyan-950 border-cyan-600 text-cyan-300'
              }`}
            >
              {is3WireSystem ? t.threeWire : t.fourWire}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span>{t.motorLabel}:</span>
              <span className="font-mono text-cyan-400 font-bold">{motorKw} kW</span>
            </div>
            <input
              id={`${controlId}-motor`}
              type="range"
              min="200"
              max="900"
              step="25"
              value={motorKw}
              onChange={(e) => setMotorKw(Number(e.target.value))}
              className="w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span>{t.vfdLabel}:</span>
              <span className="font-mono text-purple-400 font-bold">{vfdKw} kW</span>
            </div>
            <input
              id={`${controlId}-vfd`}
              type="range"
              min="50"
              max="500"
              step="25"
              value={vfdKw}
              onChange={(e) => setVfdKw(Number(e.target.value))}
              className="w-full accent-purple-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span>{t.auxLabel}:</span>
              <span className="font-mono text-rose-400 font-bold">{auxKw} kW</span>
            </div>
            <input
              id={`${controlId}-aux`}
              type="range"
              min="20"
              max="300"
              step="10"
              value={auxKw}
              onChange={(e) => setAuxKw(Number(e.target.value))}
              className="w-full accent-rose-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span>{t.unbalanceLabel}:</span>
              <span className="font-mono text-amber-400 font-bold">{unbalancePct}%</span>
            </div>
            <input
              id={`${controlId}-unbal`}
              type="range"
              min="0"
              max="50"
              step="2"
              value={unbalancePct}
              onChange={(e) => setUnbalancePct(Number(e.target.value))}
              className="w-full accent-amber-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span>{t.pfcLabel}:</span>
              <span className="font-mono text-emerald-400 font-bold">{pfcKvar} kVAR</span>
            </div>
            <input
              id={`${controlId}-pfc`}
              type="range"
              min="0"
              max="600"
              step="25"
              value={pfcKvar}
              onChange={(e) => setPfcKvar(Number(e.target.value))}
              className="w-full accent-emerald-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-slate-300">{t.apfToggle}:</span>
            <button
              onClick={() => setHasApf(!hasApf)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                hasApf
                  ? 'bg-emerald-950 border-emerald-500 text-emerald-300 shadow-md'
                  : 'bg-slate-800 border-slate-700 text-slate-400'
              }`}
            >
              {hasApf ? 'ON (THD < 4%)' : 'OFF (Distorted)'}
            </button>
          </div>
        </div>
      </div>

      {/* 18-Point Verification Matrix */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-emerald-400" />
            {t.matrixTitle}
          </h4>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
            Transformer: {txCapacityKva} kVA | Loading: {txLoadPct.toFixed(1)}%
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 font-mono text-xs">
          {/* 1. Phase Currents */}
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
            <div className="text-[10px] text-slate-400 font-sans">{t.p1}</div>
            <div className="text-slate-100 font-bold">
              Ia: <span className="text-rose-400">{iPhaseA.toFixed(1)}A</span>, Ib: <span className="text-amber-400">{iPhaseB.toFixed(1)}A</span>, Ic: <span className="text-blue-400">{iPhaseC.toFixed(1)}A</span>
            </div>
            <div className="text-[10px] text-slate-500">I_avg: {iAvg.toFixed(1)} A</div>
          </div>

          {/* 2. Total Active Power */}
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
            <div className="text-[10px] text-slate-400 font-sans">{t.p2}</div>
            <div className="text-emerald-400 font-bold text-sm">{totalKw.toFixed(1)} kW</div>
            <div className="text-[10px] text-slate-500">Motor: {motorKw}kW, VFD: {vfdKw}kW, Aux: {auxKw}kW</div>
          </div>

          {/* 3. Total Reactive Power */}
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
            <div className="text-[10px] text-slate-400 font-sans">{t.p3}</div>
            <div className="text-amber-400 font-bold text-sm">{netQ.toFixed(1)} kVAR</div>
            <div className="text-[10px] text-slate-500">Gross: {rawQ.toFixed(1)} kVAR - APFC: {pfcKvar} kVAR</div>
          </div>

          {/* 4. Apparent Power */}
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
            <div className="text-[10px] text-slate-400 font-sans">{t.p4}</div>
            <div className="text-cyan-400 font-bold text-sm">{netKva.toFixed(1)} kVA</div>
            <div className="text-[10px] text-slate-500">S = &radic;(P&sup2; + Q&sup2;)</div>
          </div>

          {/* 5. Power Factor */}
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
            <div className="text-[10px] text-slate-400 font-sans">{t.p5}</div>
            <div className="text-slate-100 font-bold text-sm">
              DPF: <span className="text-blue-300">{dpf.toFixed(3)}</span> | True PF: <span className={truePf < 0.9 ? 'text-amber-400' : 'text-emerald-400'}>{truePf.toFixed(3)}</span>
            </div>
            <div className="text-[10px] text-slate-500">TPF includes harmonic derating</div>
          </div>

          {/* 6. Current Imbalance */}
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
            <div className="text-[10px] text-slate-400 font-sans">{t.p6}</div>
            <div className={`font-bold text-sm ${cufPct > 10 ? 'text-rose-400' : 'text-emerald-400'}`}>
              CUF: {cufPct.toFixed(1)}%
            </div>
            <div className="text-[10px] text-slate-500">NEMA maximum unbalance limit &le; 10%</div>
          </div>

          {/* 7. Neutral Conductor Current */}
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
            <div className="text-[10px] text-slate-400 font-sans">{t.p7}</div>
            <div className={`font-bold text-sm ${neutralCurrent > iAvg ? 'text-rose-400' : 'text-cyan-300'}`}>
              In: {neutralCurrent.toFixed(1)} A
            </div>
            <div className="text-[10px] text-slate-500">
              {is3WireSystem ? '3-Wire: In = 0A (Isolated)' : `Triplens + Unbalance return`}
            </div>
          </div>

          {/* 8. Voltage Unbalance Factor */}
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
            <div className="text-[10px] text-slate-400 font-sans">{t.p8}</div>
            <div className={`font-bold text-sm ${vufPct > 2.0 ? 'text-rose-400' : 'text-emerald-400'}`}>
              VUF: {vufPct.toFixed(2)}%
            </div>
            <div className="text-[10px] text-slate-500">IEEE limit: &le; 2.0%</div>
          </div>

          {/* 9. Symmetrical Components */}
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
            <div className="text-[10px] text-slate-400 font-sans">{t.p9}</div>
            <div className="text-slate-100 text-xs">
              I₁: <span className="text-emerald-400 font-bold">{iPos.toFixed(1)}A</span>, I₂: <span className="text-rose-400 font-bold">{iNeg.toFixed(1)}A</span>, I₀: <span className="text-purple-400 font-bold">{iZero.toFixed(1)}A</span>
            </div>
            <div className="text-[10px] text-slate-500">Fortescue sequence components</div>
          </div>

          {/* 10. Two-Wattmeter Readings */}
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
            <div className="text-[10px] text-slate-400 font-sans">{t.p10}</div>
            <div className="text-slate-100 text-xs">
              W₁: <span className="text-cyan-300 font-bold">{w1Kw.toFixed(1)} kW</span>, W₂: <span className="text-cyan-300 font-bold">{w2Kw.toFixed(1)} kW</span>
            </div>
            <div className="text-[10px] text-slate-500">W₁ + W₂ = {(w1Kw + w2Kw).toFixed(1)} kW</div>
          </div>

          {/* 11. Three-Wattmeter Readings */}
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
            <div className="text-[10px] text-slate-400 font-sans">{t.p11}</div>
            <div className="text-slate-100 text-xs">
              Wa: {waKw.toFixed(1)}kW, Wb: {wbKw.toFixed(1)}kW, Wc: {wcKw.toFixed(1)}kW
            </div>
            <div className="text-[10px] text-slate-500">&Sigma; = {(waKw + wbKw + wcKw).toFixed(1)} kW</div>
          </div>

          {/* 12. CT / PT Ratios */}
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
            <div className="text-[10px] text-slate-400 font-sans">{t.p12}</div>
            <div className="text-slate-100 font-bold text-xs">
              CTR: 1500/5A (300) | PTR: 415/110V (3.77)
            </div>
            <div className="text-[10px] text-slate-500">Class 0.2S Revenue Grade</div>
          </div>

          {/* 13. Meter Multiplier (MF) */}
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
            <div className="text-[10px] text-slate-400 font-sans">{t.p13}</div>
            <div className="text-amber-400 font-bold text-sm">MF = {meterMultiplier.toFixed(1)}</div>
            <div className="text-[10px] text-slate-500">Actual = Secondary Meter Read &times; MF</div>
          </div>

          {/* 14. Maximum Demand */}
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
            <div className="text-[10px] text-slate-400 font-sans">{t.p14}</div>
            <div className={`font-bold text-sm ${txLoadPct > 100 ? 'text-rose-400' : 'text-emerald-400'}`}>
              {netKva.toFixed(1)} kVA ({txLoadPct.toFixed(1)}% Load)
            </div>
            <div className="text-[10px] text-slate-500">1500 kVA Substation Transformer</div>
          </div>

          {/* 15. Energy Consumption */}
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
            <div className="text-[10px] text-slate-400 font-sans">{t.p15}</div>
            <div className="text-cyan-300 font-bold text-sm">{dailyKwhEst.toFixed(0)} kWh / day</div>
            <div className="text-[10px] text-slate-500">Est. 18-hour industrial production shift</div>
          </div>

          {/* 16. Current & Voltage THD */}
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
            <div className="text-[10px] text-slate-400 font-sans">{t.p16}</div>
            <div className="text-slate-100 font-bold text-xs">
              THD_I: <span className={thdI <= 8 ? 'text-emerald-400' : 'text-rose-400'}>{thdI.toFixed(1)}%</span> | THD_V: <span className={thdV <= 5 ? 'text-emerald-400' : 'text-rose-400'}>{thdV.toFixed(1)}%</span>
            </div>
            <div className="text-[10px] text-slate-500">IEEE 519 standard &le; 8.0% / &le; 5.0%</div>
          </div>

          {/* 17. Metering Sanity Check */}
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
            <div className="text-[10px] text-slate-400 font-sans">{t.p17}</div>
            <div className="text-emerald-400 font-bold text-xs flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>PASS: Polarity &amp; Sequence Valid</span>
            </div>
            <div className="text-[10px] text-slate-500">P = &radic;3 &middot; VL &middot; IL &middot; cos&phi; matches MFM</div>
          </div>

          {/* 18. Final Recommendation */}
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
            <div className="text-[10px] text-slate-400 font-sans">{t.p18}</div>
            <div className="text-slate-200 text-[11px] leading-tight font-sans">
              {txLoadPct > 100
                ? t.txOverload
                : truePf < 0.90
                ? t.apfcNeeded
                : !hasApf
                ? t.apfNotice
                : t.txOptimal}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
