import React, { useState, useEffect, useId } from 'react';
import { 
  Gauge, 
  Activity, 
  Layers, 
  RotateCcw, 
  Sparkles, 
  Info, 
  CheckCircle2, 
  Sliders, 
  HelpCircle, 
  Zap,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { Language } from '../../types';

interface MeasurementLabSimulatorProps {
  currentLanguage: Language;
}

export const MeasurementLabSimulator: React.FC<MeasurementLabSimulatorProps> = ({ currentLanguage }) => {
  const [activeTab, setActiveTab] = useState<'meters' | 'two-wattmeter' | 'bridges'>('meters');
  const clipId = useId();

  // Mode 1: Meter Simulation States
  const [meterType, setMeterType] = useState<'pmmc' | 'mi'>('pmmc');
  const [signalType, setSignalType] = useState<'dc' | 'ac'>('dc');
  const [inputSignal, setInputSignal] = useState<number>(5); // 0 to 10 A or V
  const [dampingType, setDampingType] = useState<'critical' | 'underdamped' | 'overdamped'>('critical');
  const [targetRange, setTargetRange] = useState<number>(100); // 0-100V or 0-100A

  // Mode 2: Two-Wattmeter States
  const [vLine, setVLine] = useState<number>(415); // Volts
  const [iLine, setILine] = useState<number>(20); // Amperes
  const [powerFactor, setPowerFactor] = useState<number>(0.8); // 0 to 1.0
  const [isLagging, setIsLagging] = useState<boolean>(true);

  // Mode 3: Bridge States
  const [bridgeType, setBridgeType] = useState<'kelvin' | 'maxwell'>('kelvin');
  const [ratioArm, setRatioArm] = useState<number>(100); // P/Q
  const [standardRes, setStandardRes] = useState<number>(0.05); // S in Ohms
  const [maxwellR2, setMaxwellR2] = useState<number>(1000);
  const [maxwellR3, setMaxwellR3] = useState<number>(500);
  const [maxwellR4, setMaxwellR4] = useState<number>(2000);
  const [maxwellC4, setMaxwellC4] = useState<number>(0.5); // microFarads
  const [isBalanced, setIsBalanced] = useState<boolean>(false);

  // Translations
  const t = {
    en: {
      title: 'Virtual Electrical Instrumentation & Measurement Lab',
      subtitle: 'Simulate PMMC/MI Deflections, Two-Wattmeter 3-Phase Power Vectors, and DC/AC Bridge Balancing in real time.',
      tabMeters: 'Analog Meters (PMMC vs MI)',
      tabWattmeter: 'Two-Wattmeter 3Φ Power',
      tabBridges: 'Bridge Balancer (DC & AC)',
      reset: 'Reset Lab',
      meterTypeLabel: 'Meter Type:',
      signalLabel: 'Input Signal:',
      signalMagnitude: 'Signal Value (DC / Peak AC):',
      dampingLabel: 'Damping Profile:',
      pmmcDesc: 'PMMC measures DC / Average value only. Scale is strictly linear (θ ∝ I).',
      miDesc: 'Moving Iron measures True RMS on AC & DC. Scale is non-linear square-law (θ ∝ I²).',
      readingLabel: 'Observed Meter Reading:',
      scaleLinearity: 'Scale Scale Type:',
      twoWattmeterTitle: 'Two-Wattmeter 3-Phase Power Analyzer',
      vLineLabel: 'Line Voltage (VL):',
      iLineLabel: 'Line Current (IL):',
      pfLabel: 'Load Power Factor (cos φ):',
      laggingLead: 'Type:',
      lagging: 'Lagging (Inductive)',
      leading: 'Leading (Capacitive)',
      w1Reading: 'Wattmeter 1 (W1):',
      w2Reading: 'Wattmeter 2 (W2):',
      totalActiveP: 'Total Active Power (P = W1 + W2):',
      totalReactiveQ: 'Total Reactive Power (Q = √3(W1 - W2)):',
      pfAngle: 'Phase Angle (φ):',
      bridgeTitle: 'Precision Bridge Balancer',
      selectBridge: 'Bridge Circuit:',
      kelvinName: 'Kelvin Double Bridge (Low R < 1Ω)',
      maxwellName: 'Maxwell Inductance Bridge (Medium Q)',
      galvanoDeflection: 'Galvanometer Null Detector Needle:',
      nullBalanced: 'Bridge Perfect Balance Achieved (IG = 0)',
      unbalanced: 'Bridge Unbalanced (Current flowing through detector)',
      autoBalance: 'Auto-Balance Bridge',
      calculatedRx: 'Calculated Unknown Resistance (Rx):',
      calculatedLx: 'Calculated Unknown Inductance (Lx):',
      calculatedQ: 'Coil Quality Factor (Q):'
    },
    hi: {
      title: 'वर्चुअल इलेक्ट्रिकल मापन एवं इंस्ट्रूमेंटेशन लैब',
      subtitle: 'PMMC/MI मीटर विक्षेप, टू-वाटमीटर 3-फेज पावर वेक्टर और डीसी/एसी ब्रिज संतुलन का जीवंत सिमुलेशन।',
      tabMeters: 'एनालॉग मीटर (PMMC vs MI)',
      tabWattmeter: 'टू-वाटमीटर 3Φ पावर',
      tabBridges: 'ब्रिज बैलेंसर (DC एवं AC)',
      reset: 'रीसेट करें',
      meterTypeLabel: 'मीटर का प्रकार:',
      signalLabel: 'इनपुट सिग्नल:',
      signalMagnitude: 'सिग्नल मान (DC / Peak AC):',
      dampingLabel: 'डैम्पिंग स्थिति:',
      pmmcDesc: 'PMMC केवल DC / औसत मान मापता है। इसका पैमाना पूर्णतः रैखिक (θ ∝ I) होता है।',
      miDesc: 'मूविंग आयरन AC और DC पर True RMS मापता है। इसका पैमाना वर्ग नियम (θ ∝ I²) होता है।',
      readingLabel: 'मीटर का प्रेक्षित पाठ्यांक:',
      scaleLinearity: 'पैमाने का प्रकार:',
      twoWattmeterTitle: 'टू-वाटमीटर 3-फेज पावर विश्लेषक',
      vLineLabel: 'लाइन वोल्टेज (VL):',
      iLineLabel: 'लाइन करंट (IL):',
      pfLabel: 'पावर फैक्टर (cos φ):',
      laggingLead: 'प्रकार:',
      lagging: 'लैगिंग (प्रेरकत्व)',
      leading: 'लीडिंग (धारिता)',
      w1Reading: 'वाटमीटर 1 (W1):',
      w2Reading: 'वाटमीटर 2 (W2):',
      totalActiveP: 'कुल एक्टिव पावर (P = W1 + W2):',
      totalReactiveQ: 'कुल रिएक्टिव पावर (Q = √3(W1 - W2)):',
      pfAngle: 'फेज कोण (φ):',
      bridgeTitle: 'सटीक ब्रिज बैलेंसर',
      selectBridge: 'ब्रिज परिपथ:',
      kelvinName: 'केल्विन डबल ब्रिज (निम्न प्रतिरोध < 1Ω)',
      maxwellName: 'मैक्सवेल इंडक्टेंस ब्रिज (मध्यम Q)',
      galvanoDeflection: 'गैल्वेनोमीटर शून्य संकेतक सुई:',
      nullBalanced: 'ब्रिज पूर्ण संतुलित है (IG = 0)',
      unbalanced: 'ब्रिज असंतुलित है (डिटेक्टर से धारा प्रवाहित)',
      autoBalance: 'ऑटो-बैलेंस करें',
      calculatedRx: 'अज्ञात प्रतिरोध (Rx):',
      calculatedLx: 'अज्ञात प्रेरकत्व (Lx):',
      calculatedQ: 'कॉइल का Q-फैक्टर:'
    },
    bn: {
      title: 'ভার্চুয়াল ইলেকট্রিক্যাল মেজারমেন্টস ও ইনস্ট্রুমেন্টেশন ল্যাব',
      subtitle: 'PMMC/MI মিটারের ডিফ্লেকশন, টু-ওয়াটমিটার ৩-ফেজ পাওয়ার ভেক্টর এবং ডিসি/এসি ব্রিজের ব্যালেন্সিং সিমুলেশন।',
      tabMeters: 'অ্যানালগ মিটার (PMMC বনাম MI)',
      tabWattmeter: 'টু-ওয়াটমিটার ৩Φ পাওয়ার',
      tabBridges: 'ব্রিজ ব্যালেন্সার (DC ও AC)',
      reset: 'রিসেট ল্যাব',
      meterTypeLabel: 'মিটারের ধরন:',
      signalLabel: 'ইনপুট সিগন্যাল:',
      signalMagnitude: 'সিগন্যালের মান (DC / Peak AC):',
      dampingLabel: 'ড্যাম্পিং মোড:',
      pmmcDesc: 'PMMC কেবল DC বা গড় মান পরিমাপ করে। এর স্কেল সম্পূর্ণ লিনিয়ার (θ ∝ I)।',
      miDesc: 'মুভিং আয়রন AC ও DC তে True RMS পরিমাপ করে। এর স্কেল স্কয়ার-ল (θ ∝ I²)।',
      readingLabel: 'প্রাপ্ত মিটারের পাঠ:',
      scaleLinearity: 'স্কেলের প্রকৃতি:',
      twoWattmeterTitle: 'টু-ওয়াটমিটার ৩-ফেজ পাওয়ার অ্যানালাইজার',
      vLineLabel: 'লাইন ভোল্টেজ (VL):',
      iLineLabel: 'লাইন কারেন্ট (IL):',
      pfLabel: 'পাওয়ার ফ্যাক্টর (cos φ):',
      laggingLead: 'ধরন:',
      lagging: 'ল্যাগিং (ইন্ডাকটিভ)',
      leading: 'লিডিং (ক্যাপাসিটিভ)',
      w1Reading: 'ওয়াটমিটার ১ (W1):',
      w2Reading: 'ওয়াটমিটার ২ (W2):',
      totalActiveP: 'মোট অ্যাক্টিভ পাওয়ার (P = W1 + W2):',
      totalReactiveQ: 'মোট রিঅ্যাক্টিভ পাওয়ার (Q = √3(W1 - W2)):',
      pfAngle: 'ফেজ কোণ (φ):',
      bridgeTitle: 'প্রিসিশন ব্রিজ ব্যালেন্সার',
      selectBridge: 'ব্রিজ সার্কিট:',
      kelvinName: 'কেলভিন ডাবল ব্রিজ (ক্ষুদ্র রোধ < ১Ω)',
      maxwellName: 'ম্যাক্সওয়েল ইন্ডাকট্যান্স ব্রিজ (মিডিয়াম Q)',
      galvanoDeflection: 'গ্যালভানোমিটার নাল ডিটেক্টর সূচক:',
      nullBalanced: 'ব্রিজ সম্পূর্ণ ব্যালেন্সড হয়েছে (IG = 0)',
      unbalanced: 'ব্রিজ আনব্যালেন্সড (ডিটেক্টরে কারেন্ট প্রবাহিত)',
      autoBalance: 'অটো-ব্যালেন্স করুন',
      calculatedRx: 'নির্ণীত অজানা রোধ (Rx):',
      calculatedLx: 'নির্ণীত অজানা ইন্ডাকট্যান্স (Lx):',
      calculatedQ: 'কয়েলের কোয়ালিটি ফ্যাক্টর (Q):'
    }
  }[currentLanguage] || {
    title: 'Virtual Electrical Instrumentation & Measurement Lab',
    subtitle: 'Simulate PMMC/MI Deflections, Two-Wattmeter 3-Phase Power Vectors, and DC/AC Bridge Balancing in real time.',
    tabMeters: 'Analog Meters (PMMC vs MI)',
    tabWattmeter: 'Two-Wattmeter 3Φ Power',
    tabBridges: 'Bridge Balancer (DC & AC)',
    reset: 'Reset Lab',
    meterTypeLabel: 'Meter Type:',
    signalLabel: 'Input Signal:',
    signalMagnitude: 'Signal Value (DC / Peak AC):',
    dampingLabel: 'Damping Profile:',
    pmmcDesc: 'PMMC measures DC / Average value only. Scale is strictly linear (θ ∝ I).',
    miDesc: 'Moving Iron measures True RMS on AC & DC. Scale is non-linear square-law (θ ∝ I²).',
    readingLabel: 'Observed Meter Reading:',
    scaleLinearity: 'Scale Scale Type:',
    twoWattmeterTitle: 'Two-Wattmeter 3-Phase Power Analyzer',
    vLineLabel: 'Line Voltage (VL):',
    iLineLabel: 'Line Current (IL):',
    pfLabel: 'Load Power Factor (cos φ):',
    laggingLead: 'Type:',
    lagging: 'Lagging (Inductive)',
    leading: 'Leading (Capacitive)',
    w1Reading: 'Wattmeter 1 (W1):',
    w2Reading: 'Wattmeter 2 (W2):',
    totalActiveP: 'Total Active Power (P = W1 + W2):',
    totalReactiveQ: 'Total Reactive Power (Q = √3(W1 - W2)):',
    pfAngle: 'Phase Angle (φ):',
    bridgeTitle: 'Precision Bridge Balancer',
    selectBridge: 'Bridge Circuit:',
    kelvinName: 'Kelvin Double Bridge (Low R < 1Ω)',
    maxwellName: 'Maxwell Inductance Bridge (Medium Q)',
    galvanoDeflection: 'Galvanometer Null Detector Needle:',
    nullBalanced: 'Bridge Perfect Balance Achieved (IG = 0)',
    unbalanced: 'Bridge Unbalanced (Current flowing through detector)',
    autoBalance: 'Auto-Balance Bridge',
    calculatedRx: 'Calculated Unknown Resistance (Rx):',
    calculatedLx: 'Calculated Unknown Inductance (Lx):',
    calculatedQ: 'Coil Quality Factor (Q):'
  };

  // Calculations for Mode 1: Meter readings
  let pointerAngle = 0; // -60 deg to +60 deg
  let displayedReading = 0;
  if (meterType === 'pmmc') {
    if (signalType === 'dc') {
      displayedReading = inputSignal;
      pointerAngle = -60 + (inputSignal / 10) * 120;
    } else {
      // AC on PMMC: Average is 0
      displayedReading = 0;
      pointerAngle = -60; // points to zero with tiny vibration
    }
  } else {
    // MI meter
    if (signalType === 'dc') {
      displayedReading = inputSignal;
      const normalized = Math.pow(inputSignal / 10, 1.8);
      pointerAngle = -60 + normalized * 120;
    } else {
      // AC on MI: Measures RMS = Peak / sqrt(2)
      displayedReading = inputSignal / Math.SQRT2;
      const normalized = Math.pow(displayedReading / 10, 1.8);
      pointerAngle = -60 + normalized * 120;
    }
  }

  // Calculations for Mode 2: Two-Wattmeter
  const phiRad = Math.acos(Math.min(1, Math.max(0, powerFactor)));
  const phiDeg = (phiRad * 180) / Math.PI;
  const sign = isLagging ? 1 : -1;
  const angle1Rad = (30 * Math.PI / 180) - (sign * phiRad);
  const angle2Rad = (30 * Math.PI / 180) + (sign * phiRad);

  const w1Watts = (vLine * iLine * Math.cos(angle1Rad)) / 1000; // in kW
  const w2Watts = (vLine * iLine * Math.cos(angle2Rad)) / 1000; // in kW
  const totalActiveKW = w1Watts + w2Watts;
  const totalReactiveKVAR = Math.sqrt(3) * (w1Watts - w2Watts);

  // Calculations for Mode 3: Bridges
  let bridgeRx = 0;
  let bridgeLx = 0;
  let bridgeQ = 0;
  let galvanoError = 0;

  if (bridgeType === 'kelvin') {
    // Target true Rx is 0.005 Ohm
    const targetRx = 0.005;
    bridgeRx = (ratioArm * standardRes) / 1000; // S in standard
    galvanoError = (bridgeRx - targetRx) * 5000;
  } else {
    // Maxwell bridge
    const targetLx = 0.25; // 250 mH
    bridgeLx = maxwellR2 * maxwellR3 * (maxwellC4 * 1e-6);
    bridgeRx = (maxwellR2 * maxwellR3) / maxwellR4;
    bridgeQ = (2 * Math.PI * 1000 * bridgeLx) / (bridgeRx || 1);
    galvanoError = (bridgeLx - targetLx) * 200;
  }

  const galvanoAngle = Math.max(-45, Math.min(45, galvanoError));
  const isCurrentlyBalanced = Math.abs(galvanoError) < 0.2;

  const handleAutoBalance = () => {
    if (bridgeType === 'kelvin') {
      setRatioArm(100);
      setStandardRes(0.05);
    } else {
      setMaxwellR2(1000);
      setMaxwellR3(500);
      setMaxwellR4(2000);
      setMaxwellC4(0.5);
    }
  };

  const handleReset = () => {
    setInputSignal(5);
    setMeterType('pmmc');
    setSignalType('dc');
    setVLine(415);
    setILine(20);
    setPowerFactor(0.8);
    setIsLagging(true);
    setRatioArm(100);
    setStandardRes(0.05);
    setMaxwellR2(1000);
    setMaxwellR3(500);
    setMaxwellR4(2000);
    setMaxwellC4(0.5);
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 text-white space-y-6 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <Gauge className="w-6 h-6 text-cyan-400 shrink-0 animate-pulse" />
            <h3 className="text-lg sm:text-xl font-extrabold font-display tracking-tight text-white">
              {t.title}
            </h3>
            <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
              Interactive Lab Suite
            </span>
          </div>
          <p className="text-xs text-slate-400 max-w-2xl">
            {t.subtitle}
          </p>
        </div>

        <button
          onClick={handleReset}
          className="px-3 py-1.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-800 text-xs font-bold text-cyan-300 transition-colors flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{t.reset}</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800/80 pb-3">
        <button
          onClick={() => setActiveTab('meters')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
            activeTab === 'meters'
              ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-950'
              : 'bg-slate-800/70 text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Gauge className="w-4 h-4" />
          <span>{t.tabMeters}</span>
        </button>

        <button
          onClick={() => setActiveTab('two-wattmeter')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
            activeTab === 'two-wattmeter'
              ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-950'
              : 'bg-slate-800/70 text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Activity className="w-4 h-4" />
          <span>{t.tabWattmeter}</span>
        </button>

        <button
          onClick={() => setActiveTab('bridges')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
            activeTab === 'bridges'
              ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-950'
              : 'bg-slate-800/70 text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>{t.tabBridges}</span>
        </button>
      </div>

      {/* TAB 1: PMMC vs MI METERS */}
      {activeTab === 'meters' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Controls */}
          <div className="lg:col-span-5 space-y-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-2">{t.meterTypeLabel}</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setMeterType('pmmc')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                    meterType === 'pmmc'
                      ? 'bg-cyan-600 text-white border border-cyan-400'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  PMMC (Moving Coil)
                </button>
                <button
                  onClick={() => setMeterType('mi')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                    meterType === 'mi'
                      ? 'bg-cyan-600 text-white border border-cyan-400'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  MI (Moving Iron)
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 block mb-2">{t.signalLabel}</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSignalType('dc')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                    signalType === 'dc'
                      ? 'bg-emerald-600 text-white border border-emerald-400'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  DC Signal (Direct)
                </button>
                <button
                  onClick={() => setSignalType('ac')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                    signalType === 'ac'
                      ? 'bg-amber-600 text-white border border-amber-400'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  AC 50Hz Sinusoid
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-semibold">{t.signalMagnitude}</span>
                <span className="font-mono font-bold text-cyan-400">{inputSignal.toFixed(1)} {signalType === 'dc' ? 'V / A' : 'V_peak'}</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                step="0.1"
                value={inputSignal}
                onChange={(e) => setInputSignal(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1.5">
              <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
                <Info className="w-4 h-4" />
                <span>{meterType === 'pmmc' ? 'PMMC Mechanism' : 'Moving Iron Mechanism'}</span>
              </div>
              <p className="leading-relaxed">
                {meterType === 'pmmc' ? t.pmmcDesc : t.miDesc}
              </p>
            </div>
          </div>

          {/* Meter Dial Visualizer */}
          <div className="lg:col-span-7 bg-slate-950 p-6 rounded-xl border border-slate-800 flex flex-col items-center justify-center space-y-4">
            <div className="relative w-full max-w-md aspect-[16/10] flex items-center justify-center">
              <svg viewBox="0 0 400 250" className="w-full h-full drop-shadow-2xl">
                <defs>
                  <radialGradient id="meterFaceGrad" cx="50%" cy="80%" r="90%">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </radialGradient>
                  <linearGradient id="needleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#b91c1c" />
                  </linearGradient>
                </defs>

                {/* Meter Housing Frame */}
                <rect x="10" y="10" width="380" height="230" rx="16" fill="url(#meterFaceGrad)" stroke="#334155" strokeWidth="3" />

                {/* Scale Arc Background */}
                <path
                  d="M 60 170 A 140 140 0 0 1 340 170"
                  fill="none"
                  stroke="#475569"
                  strokeWidth="8"
                  strokeLinecap="round"
                />

                {/* Calibration Ticks & Numbers */}
                {meterType === 'pmmc' ? (
                  // Linear Scale: 0 to 10
                  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => {
                    const angle = -60 + (val / 10) * 120;
                    const rad = (angle - 90) * (Math.PI / 180);
                    const x1 = 200 + 140 * Math.cos(rad);
                    const y1 = 190 + 140 * Math.sin(rad);
                    const x2 = 200 + (val % 2 === 0 ? 122 : 128) * Math.cos(rad);
                    const y2 = 190 + (val % 2 === 0 ? 122 : 128) * Math.sin(rad);
                    const tx = 200 + 108 * Math.cos(rad);
                    const ty = 190 + 108 * Math.sin(rad);

                    return (
                      <g key={val}>
                        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#94a3b8" strokeWidth={val % 2 === 0 ? 2.5 : 1.5} />
                        {val % 2 === 0 && (
                          <text x={tx} y={ty} fill="#cbd5e1" fontSize="12" fontWeight="bold" textAnchor="middle" dominantBaseline="central">
                            {val}
                          </text>
                        )}
                      </g>
                    );
                  })
                ) : (
                  // MI Square-Law Scale: Cramped at beginning, spread out at high
                  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => {
                    const normalized = Math.pow(val / 10, 1.8);
                    const angle = -60 + normalized * 120;
                    const rad = (angle - 90) * (Math.PI / 180);
                    const x1 = 200 + 140 * Math.cos(rad);
                    const y1 = 190 + 140 * Math.sin(rad);
                    const x2 = 200 + (val % 2 === 0 ? 122 : 128) * Math.cos(rad);
                    const y2 = 190 + (val % 2 === 0 ? 122 : 128) * Math.sin(rad);
                    const tx = 200 + 108 * Math.cos(rad);
                    const ty = 190 + 108 * Math.sin(rad);

                    return (
                      <g key={val}>
                        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f59e0b" strokeWidth={val % 2 === 0 ? 2.5 : 1.5} />
                        {val % 2 === 0 && (
                          <text x={tx} y={ty} fill="#fcd34d" fontSize="12" fontWeight="bold" textAnchor="middle" dominantBaseline="central">
                            {val}
                          </text>
                        )}
                      </g>
                    );
                  })
                )}

                {/* Meter Badge & Type Labels */}
                <text x="200" y="70" fill="#38bdf8" fontSize="14" fontWeight="800" textAnchor="middle" letterSpacing="1">
                  {meterType === 'pmmc' ? 'PMMC DC VOLTMETER' : 'MOVING IRON AC/DC VOLTMETER'}
                </text>
                <text x="200" y="90" fill="#64748b" fontSize="10" fontWeight="bold" textAnchor="middle">
                  {meterType === 'pmmc' ? 'LINEAR SCALE • CLASS 0.5' : 'TRUE RMS • SQUARE-LAW SCALE'}
                </text>

                {/* Center Pivot Boss */}
                <circle cx="200" cy="190" r="14" fill="#0f172a" stroke="#64748b" strokeWidth="3" />

                {/* Deflecting Needle Pointer */}
                <g style={{ transform: `rotate(${pointerAngle}deg)`, transformOrigin: '200px 190px', transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
                  <line x1="200" y1="190" x2="200" y2="48" stroke="url(#needleGrad)" strokeWidth="3.5" strokeLinecap="round" />
                  <circle cx="200" cy="48" r="3" fill="#ef4444" />
                </g>
                <circle cx="200" cy="190" r="6" fill="#ef4444" />
              </svg>
            </div>

            {/* Live Reading Digital Box */}
            <div className="w-full grid grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-center">
                <span className="text-[11px] text-slate-400 block">{t.readingLabel}</span>
                <span className="text-xl font-mono font-black text-cyan-400">
                  {displayedReading.toFixed(2)} {signalType === 'dc' ? 'V' : 'V_rms'}
                </span>
              </div>
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-center">
                <span className="text-[11px] text-slate-400 block">{t.scaleLinearity}</span>
                <span className={`text-sm font-bold ${meterType === 'pmmc' ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {meterType === 'pmmc' ? 'Linear (θ ∝ I)' : 'Non-Linear (θ ∝ I²)'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: TWO-WATTMETER 3-PHASE METHOD */}
      {activeTab === 'two-wattmeter' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Controls */}
          <div className="lg:col-span-5 space-y-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span>{t.twoWattmeterTitle}</span>
            </h4>

            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-semibold">{t.vLineLabel}</span>
                <span className="font-mono font-bold text-cyan-400">{vLine} V</span>
              </div>
              <input
                type="range"
                min="100"
                max="600"
                step="5"
                value={vLine}
                onChange={(e) => setVLine(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-semibold">{t.iLineLabel}</span>
                <span className="font-mono font-bold text-cyan-400">{iLine} A</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                step="1"
                value={iLine}
                onChange={(e) => setILine(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-semibold">{t.pfLabel}</span>
                <span className="font-mono font-bold text-cyan-400">{powerFactor.toFixed(2)} ({phiDeg.toFixed(1)}°)</span>
              </div>
              <input
                type="range"
                min="0"
                max="1.0"
                step="0.02"
                value={powerFactor}
                onChange={(e) => setPowerFactor(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setIsLagging(true)}
                className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
                  isLagging ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-400'
                }`}
              >
                {t.lagging}
              </button>
              <button
                onClick={() => setIsLagging(false)}
                className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
                  !isLagging ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-400'
                }`}
              >
                {t.leading}
              </button>
            </div>

            {/* Special Conditions Callout */}
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs space-y-1">
              <span className="font-bold text-cyan-400">Power Factor State:</span>
              {powerFactor === 1.0 && (
                <p className="text-emerald-400 font-semibold">Unity PF: W1 = W2 = {w1Watts.toFixed(2)} kW</p>
              )}
              {Math.abs(powerFactor - 0.5) < 0.02 && (
                <p className="text-amber-400 font-semibold">0.5 PF: W2 ≈ 0 kW (One meter reads total power!)</p>
              )}
              {powerFactor < 0.5 && (
                <p className="text-red-400 font-semibold">PF &lt; 0.5: W2 is negative ({w2Watts.toFixed(2)} kW). Reverse pressure coil leads!</p>
              )}
              {powerFactor > 0.5 && powerFactor < 1.0 && (
                <p className="text-slate-300">Normal operating range: Both meters read positive values.</p>
              )}
            </div>
          </div>

          {/* Results & Vector Visualizer */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                <span className="text-xs text-slate-400 block">{t.w1Reading}</span>
                <span className="text-2xl font-mono font-black text-emerald-400">
                  {w1Watts.toFixed(2)} <span className="text-sm font-sans">kW</span>
                </span>
                <span className="text-[10px] text-slate-500 block">VL IL cos(30° - φ)</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                <span className="text-xs text-slate-400 block">{t.w2Reading}</span>
                <span className={`text-2xl font-mono font-black ${w2Watts < 0 ? 'text-rose-400' : 'text-cyan-400'}`}>
                  {w2Watts.toFixed(2)} <span className="text-sm font-sans">kW</span>
                </span>
                <span className="text-[10px] text-slate-500 block">VL IL cos(30° + φ)</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-950 p-4 rounded-xl border border-cyan-900/50 space-y-1">
                <span className="text-xs text-cyan-400 font-bold block">{t.totalActiveP}</span>
                <span className="text-2xl font-mono font-black text-white">
                  {totalActiveKW.toFixed(2)} <span className="text-sm font-sans text-cyan-300">kW</span>
                </span>
                <span className="text-[10px] text-slate-400 block">√3 VL IL cos φ</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                <span className="text-xs text-slate-400 block">{t.totalReactiveQ}</span>
                <span className="text-2xl font-mono font-black text-amber-400">
                  {Math.abs(totalReactiveKVAR).toFixed(2)} <span className="text-sm font-sans">kVAR</span>
                </span>
                <span className="text-[10px] text-slate-500 block">√3 (W1 - W2)</span>
              </div>
            </div>

            {/* Formula verification box */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
              <div className="text-cyan-400 font-bold font-sans">Two-Wattmeter Power Factor Equation:</div>
              <div>tan(φ) = √3 × [(W1 - W2) / (W1 + W2)] = √3 × [({w1Watts.toFixed(2)} - {w2Watts.toFixed(2)}) / {totalActiveKW.toFixed(2)}]</div>
              <div className="text-emerald-400">⟹ cos(φ) = cos({phiDeg.toFixed(1)}°) = {powerFactor.toFixed(2)}</div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: PRECISION BRIDGES BALANCER */}
      {activeTab === 'bridges' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Bridge Controls */}
          <div className="lg:col-span-5 space-y-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-2">{t.selectBridge}</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setBridgeType('kelvin')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                    bridgeType === 'kelvin'
                      ? 'bg-cyan-600 text-white border border-cyan-400'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  Kelvin Double Bridge
                </button>
                <button
                  onClick={() => setBridgeType('maxwell')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                    bridgeType === 'maxwell'
                      ? 'bg-cyan-600 text-white border border-cyan-400'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  Maxwell Bridge (AC)
                </button>
              </div>
            </div>

            {bridgeType === 'kelvin' ? (
              <>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">Ratio Arms (P/Q = p/q):</span>
                    <span className="font-mono font-bold text-cyan-400">{ratioArm}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="10"
                    value={ratioArm}
                    onChange={(e) => setRatioArm(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">Standard Resistor (S):</span>
                    <span className="font-mono font-bold text-cyan-400">{(standardRes * 1000).toFixed(1)} mΩ</span>
                  </div>
                  <input
                    type="range"
                    min="0.01"
                    max="0.2"
                    step="0.005"
                    value={standardRes}
                    onChange={(e) => setStandardRes(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">Variable Resistor (R4):</span>
                    <span className="font-mono font-bold text-cyan-400">{maxwellR4} Ω</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="5000"
                    step="100"
                    value={maxwellR4}
                    onChange={(e) => setMaxwellR4(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">Standard Capacitor (C4):</span>
                    <span className="font-mono font-bold text-cyan-400">{maxwellC4.toFixed(2)} μF</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="2.0"
                    step="0.05"
                    value={maxwellC4}
                    onChange={(e) => setMaxwellC4(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                </div>
              </>
            )}

            <button
              onClick={handleAutoBalance}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.autoBalance}</span>
            </button>
          </div>

          {/* Galvanometer & Results */}
          <div className="lg:col-span-7 bg-slate-950 p-6 rounded-xl border border-slate-800 flex flex-col items-center justify-center space-y-4">
            <div className="relative w-full max-w-sm aspect-[16/10] flex items-center justify-center">
              <svg viewBox="0 0 300 180" className="w-full h-full drop-shadow-xl">
                <rect x="10" y="10" width="280" height="160" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="2" />
                
                {/* Center Zero Scale */}
                <path d="M 60 140 A 100 100 0 0 1 240 140" fill="none" stroke="#475569" strokeWidth="4" />
                
                {[-40, -20, 0, 20, 40].map((val) => {
                  const angle = (val * Math.PI) / 180;
                  const x1 = 150 + 100 * Math.sin(angle);
                  const y1 = 150 - 100 * Math.cos(angle);
                  const x2 = 150 + 85 * Math.sin(angle);
                  const y2 = 150 - 85 * Math.cos(angle);
                  return (
                    <g key={val}>
                      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#94a3b8" strokeWidth="2" />
                      <text x={150 + 72 * Math.sin(angle)} y={150 - 72 * Math.cos(angle)} fill="#cbd5e1" fontSize="10" textAnchor="middle" dominantBaseline="central">
                        {val === 0 ? '0' : Math.abs(val)}
                      </text>
                    </g>
                  );
                })}

                <text x="150" y="45" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">
                  D\'ARSONVAL NULL DETECTOR (IG)
                </text>

                {/* Center Pivot */}
                <circle cx="150" cy="150" r="10" fill="#1e293b" stroke="#64748b" strokeWidth="2" />

                {/* Needle */}
                <g style={{ transform: `rotate(${galvanoAngle}deg)`, transformOrigin: '150px 150px', transition: 'transform 0.3s ease-out' }}>
                  <line x1="150" y1="150" x2="150" y2="52" stroke={isCurrentlyBalanced ? '#10b981' : '#ef4444'} strokeWidth="3" strokeLinecap="round" />
                  <circle cx="150" cy="52" r="3" fill={isCurrentlyBalanced ? '#10b981' : '#ef4444'} />
                </g>
              </svg>
            </div>

            {/* Balance Status Banner */}
            <div className={`w-full p-3 rounded-lg border text-xs font-bold flex items-center justify-center gap-2 ${
              isCurrentlyBalanced
                ? 'bg-emerald-950/60 border-emerald-800 text-emerald-300'
                : 'bg-amber-950/60 border-amber-800 text-amber-300'
            }`}>
              {isCurrentlyBalanced ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{t.nullBalanced}</span>
                </>
              ) : (
                <>
                  <Info className="w-4 h-4 text-amber-400" />
                  <span>{t.unbalanced}</span>
                </>
              )}
            </div>

            {/* Calculated Values */}
            <div className="w-full grid grid-cols-2 gap-3 pt-1">
              {bridgeType === 'kelvin' ? (
                <>
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">{t.calculatedRx}</span>
                    <span className="text-lg font-mono font-black text-cyan-400">
                      {(bridgeRx * 1000).toFixed(2)} mΩ
                    </span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">Bridge Equation:</span>
                    <span className="text-xs font-mono font-bold text-slate-300">
                      Rx = (P/Q) × S
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">{t.calculatedLx}</span>
                    <span className="text-lg font-mono font-black text-cyan-400">
                      {(bridgeLx * 1000).toFixed(1)} mH
                    </span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">{t.calculatedQ}</span>
                    <span className="text-lg font-mono font-black text-emerald-400">
                      {bridgeQ.toFixed(2)}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
