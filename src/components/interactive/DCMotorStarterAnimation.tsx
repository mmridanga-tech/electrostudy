import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, AlertTriangle, CheckCircle2, Sliders, Info, Zap, ShieldAlert, FastForward } from 'lucide-react';

interface DCMotorStarterAnimationProps {
  language?: 'en' | 'hi' | 'bn';
}

export type StarterType = '3point' | '4point' | '2point';

export const DCMotorStarterAnimation: React.FC<DCMotorStarterAnimationProps> = ({ language = 'en' }) => {
  const [starterType, setStarterType] = useState<StarterType>('3point');
  const [studPosition, setStudPosition] = useState<number>(0); // 0 = OFF, 1 = Stud 1, 2 = Stud 2, 3 = Stud 3, 4 = Stud 4, 5 = RUN
  const [supplyVoltage, setSupplyVoltage] = useState<number>(220); // Volts
  const [armatureResistance, setArmatureResistance] = useState<number>(0.3); // Ohms
  const [fieldRheostatWeakening, setFieldRheostatWeakening] = useState<boolean>(false);
  const [overloadActive, setOverloadActive] = useState<boolean>(false);
  const [powerFailure, setPowerFailure] = useState<boolean>(false);
  const [tripReason, setTripReason] = useState<string | null>(null);
  const [simulatedSpeed, setSimulatedSpeed] = useState<number>(0);

  // Total starter resistor split across 4 segments
  const totalStarterRes = 4.0; // Ohms
  const studResistances = [0, 4.0, 3.0, 2.0, 1.0, 0.0]; // Stud 0 (OFF), 1, 2, 3, 4, 5 (RUN)

  // Simulation physics
  const activeStarterRes = studResistances[studPosition];
  const totalArmatureRes = armatureResistance + activeStarterRes;

  // Calculate speed dynamic target
  let targetSpeed = 0;
  if (studPosition > 0 && !powerFailure && !tripReason) {
    if (studPosition === 1) targetSpeed = 300;
    else if (studPosition === 2) targetSpeed = 600;
    else if (studPosition === 3) targetSpeed = 900;
    else if (studPosition === 4) targetSpeed = 1200;
    else if (studPosition === 5) targetSpeed = fieldRheostatWeakening ? 1650 : 1450;
  }

  // Smooth speed tracking
  useEffect(() => {
    const timer = setInterval(() => {
      setSimulatedSpeed((prev) => {
        if (powerFailure || tripReason || studPosition === 0) {
          return Math.max(0, prev - 80);
        }
        if (prev < targetSpeed) {
          return Math.min(targetSpeed, prev + 50);
        } else if (prev > targetSpeed) {
          return Math.max(targetSpeed, prev - 40);
        }
        return prev;
      });
    }, 50);
    return () => clearInterval(timer);
  }, [targetSpeed, powerFailure, tripReason, studPosition]);

  // Back EMF Eb = Ke * Phi * N
  const effectiveVoltage = powerFailure ? 0 : supplyVoltage;
  const fluxFactor = fieldRheostatWeakening ? 0.75 : 1.0;
  const Ke = 0.138;
  const backEmf = Math.min(effectiveVoltage * 0.96, Ke * fluxFactor * simulatedSpeed);

  // Armature Current
  let armatureCurrent = 0;
  if (studPosition > 0 && !powerFailure && !tripReason) {
    armatureCurrent = Math.max(0, (effectiveVoltage - backEmf) / totalArmatureRes);
  }

  // Direct On Line comparison current (if connected at N=0 with no starter)
  const dolStartingCurrent = supplyVoltage / armatureResistance;

  // Field & NVR holding coil physics
  const baseFieldCurrent = supplyVoltage / 220; // ~1.0 A
  const actualFieldCurrent = fieldRheostatWeakening ? baseFieldCurrent * 0.45 : baseFieldCurrent; // 0.45 A when weakened

  // Evaluate Trip Conditions
  useEffect(() => {
    if (studPosition === 5) {
      // If at RUN position
      if (powerFailure) {
        setTripReason('nvr_power_loss');
        setStudPosition(0);
      } else if (overloadActive) {
        setTripReason('olr_trip');
        setStudPosition(0);
      } else if (fieldRheostatWeakening && starterType === '3point') {
        // 3-point starter has NVC in series with field; field weakening drops current below holding threshold
        setTripReason('3point_field_weakening_trip');
        setStudPosition(0);
      }
    }
  }, [studPosition, powerFailure, overloadActive, fieldRheostatWeakening, starterType]);

  const handleAdvanceStud = () => {
    if (tripReason) {
      setTripReason(null);
    }
    if (studPosition < 5) {
      setStudPosition(studPosition + 1);
    }
  };

  const handleReset = () => {
    setStudPosition(0);
    setSupplyVoltage(220);
    setArmatureResistance(0.3);
    setFieldRheostatWeakening(false);
    setOverloadActive(false);
    setPowerFailure(false);
    setTripReason(null);
    setSimulatedSpeed(0);
  };

  const labels = {
    en: {
      title: 'DC Motor Starter (2-Point, 3-Point & 4-Point) Interactive Laboratory',
      subtitle: 'Simulate manual starter operation, observe Back EMF buildup, inrush current suppression, No-Volt Release (NVR), Overload Release (OLR), and field-weakening trip dynamics.',
      reset: 'Reset Simulation',
      mode2p: '2-Point Starter (Series)',
      mode3p: '3-Point Starter (Shunt)',
      mode4p: '4-Point Starter (Shunt)',
      stepAdvance: 'Advance Handle to Next Stud',
      returnOff: 'Return to OFF',
      controlsTitle: 'Motor & Circuit Controls',
      supplyV: 'Supply Voltage (V)',
      armR: 'Armature Resistance Ra (Ω)',
      studState: 'Starter Handle Position',
      speedDisplay: 'Rotor Speed (RPM)',
      backEmfDisplay: 'Back EMF (Eb)',
      armCurrentDisplay: 'Armature Current (Ia)',
      starterResDisplay: 'Active Starter Resistance',
      dolCompare: 'Direct-On-Line Surge (No Starter)',
      simFaultsTitle: 'Fault & Protective Trip Injections',
      simPowerLoss: 'Simulate Mains Power Outage',
      simOverload: 'Simulate Severe Motor Overload',
      simFieldWeakening: 'Simulate Field Weakening (Speed Control)',
      tripAlertNvr: 'TRIPPED: No-Volt Release (NVR) de-energized! Spiral spring pulled handle to OFF.',
      tripAlertOlr: 'TRIPPED: Overload Release (OLR) lifted armature, shorted NVR coil, snapping handle to OFF.',
      tripAlert3P: 'TRIPPED (3-Point Starter Defect): Field weakening reduced NVC holding current below spring tension! Use a 4-Point starter for field speed control.',
      safeStatus: 'Normal Safe Operation',
      handleOff: 'Position 0: OFF',
      stud1: 'Stud 1 (Full 4.0 Ω)',
      stud2: 'Stud 2 (3.0 Ω)',
      stud3: 'Stud 3 (2.0 Ω)',
      stud4: 'Stud 4 (1.0 Ω)',
      studRun: 'Position 5: RUN (0 Ω - Held by NVR Magnet)',
      explanationNote: 'Notice how starting current is kept under 60 A on Stud 1 compared to the destructive 733 A DOL surge!'
    },
    hi: {
      title: 'डीसी मोटर स्टार्टर (2-पॉइंट, 3-पॉइंट एवं 4-पॉइंट) सिमुलेशन प्रयोगशाला',
      subtitle: 'स्टार्टर संचालन, बैक EMF निर्माण, करंट नियंत्रण, नो-वोल्ट रिलीज (NVR), ओवरलोड रिलीज (OLR) एवं फील्ड दुर्बलीकरण ट्रिप का लाइव अध्ययन।',
      reset: 'डिफ़ॉल्ट रीसेट',
      mode2p: '2-पॉइंट स्टार्टर (सीरीज)',
      mode3p: '3-पॉइंट स्टार्टर (शंट)',
      mode4p: '4-पॉइंट स्टार्टर (शंट)',
      stepAdvance: 'हैंडल को अगले स्टड पर बढ़ाएँ',
      returnOff: 'OFF स्थिति पर लाएँ',
      controlsTitle: 'मोटर एवं परिपथ नियंत्रण',
      supplyV: 'सप्लाई वोल्टेज (V)',
      armR: 'आर्मेचर प्रतिरोध Ra (Ω)',
      studState: 'स्टार्टर हैंडल स्थिति',
      speedDisplay: 'रोटर गति (RPM)',
      backEmfDisplay: 'बैक EMF (Eb)',
      armCurrentDisplay: 'आर्मेचर धारा (Ia)',
      starterResDisplay: 'सक्रिय स्टार्टर प्रतिरोध',
      dolCompare: 'बिना स्टार्टर करंट (DOL)',
      simFaultsTitle: 'दोष एवं सुरक्षात्मक ट्रिप सिमुलेशन',
      simPowerLoss: 'सप्लाई बिजली विफलता (पावर कट)',
      simOverload: 'अत्यधिक ओवरलोड सिमुलेट करें',
      simFieldWeakening: 'फील्ड दुर्बलीकरण (गति नियंत्रण)',
      tripAlertNvr: 'ट्रिप्ड: नो-वोल्ट रिलीज (NVR) चुंबकीय बल समाप्त! स्प्रिंग ने हैंडल को OFF पर खींच लिया।',
      tripAlertOlr: 'ट्रिप्ड: ओवरलोड रिलीज (OLR) ने NVR को शॉर्ट किया, हैंडल तुरंत OFF पर ट्रिप हो गया।',
      tripAlert3P: 'ट्रिप्ड (3-पॉइंट स्टार्टर दोष): फील्ड कमजोर करने से NVR होल्डिंग करंट घट गया! गति नियंत्रण हेतु 4-पॉइंट स्टार्टर आवश्यक है।',
      safeStatus: 'सामान्य सुरक्षित संचालन',
      handleOff: 'स्थिति 0: OFF',
      stud1: 'स्टड 1 (पूर्ण 4.0 Ω)',
      stud2: 'स्टड 2 (3.0 Ω)',
      stud3: 'स्टड 3 (2.0 Ω)',
      stud4: 'स्टड 4 (1.0 Ω)',
      studRun: 'स्थिति 5: RUN (0 Ω - NVR चुंबक द्वारा लॉक)',
      explanationNote: 'ध्यान दें कि स्टड 1 पर शुरुआती करंट सुरक्षित 55 A पर रहता है, जबकि बिना स्टार्टर यह 733 A का भयानक झटका देता!'
    },
    bn: {
      title: 'ডিসি মোটর স্টার্টার (২-পয়েন্ট, ৩-পয়েন্ট ও ৪-পয়েন্ট) ইন্টারঅ্যাক্টিভ ল্যাব',
      subtitle: 'স্টার্টার পরিচালনা, ব্যাক EMF গঠন, কারেন্ট নিয়ন্ত্রণ, নো-ভোল্ট রিলিজ (NVR), ওভারলোড রিলিজ (OLR) এবং ফিল্ড স্পিড ট্রিপ সিমুলেশন।',
      reset: 'রিসেট করুন',
      mode2p: '২-পয়েন্ট স্টার্টার (সিরিজ)',
      mode3p: '৩-পয়েন্ট স্টার্টার (শান্ট)',
      mode4p: '৪-পয়েন্ট স্টার্টার (শান্ট)',
      stepAdvance: 'হ্যান্ডেল পরবর্তী স্টাডে সরান',
      returnOff: 'OFF পজিশনে আনুন',
      controlsTitle: 'মোটর ও সার্কিট কন্ট্রোল',
      supplyV: 'সরবরাহ ভোল্টেজ (V)',
      armR: 'আর্মেচার রোধ Ra (Ω)',
      studState: 'স্টার্টার হ্যান্ডেল অবস্থান',
      speedDisplay: 'রোটর গতি (RPM)',
      backEmfDisplay: 'ব্যাক EMF (Eb)',
      armCurrentDisplay: 'আর্মেচার কারেন্ট (Ia)',
      starterResDisplay: 'সক্রিয় স্টার্টার রোধ',
      dolCompare: 'স্টার্টার ছাড়া ইনরাশ কারেন্ট',
      simFaultsTitle: 'ফল্ট ও প্রোটেকশন ট্রিপ সিমুলেশন',
      simPowerLoss: 'বিদ্যুৎ বিভ্রাট সিমুলেশন',
      simOverload: 'তীব্র ওভারলোড সিমুলেশন',
      simFieldWeakening: 'ফিল্ড দুর্বলকরণ (গতি নিয়ন্ত্রণ)',
      tripAlertNvr: 'ট্রিপড: নো-ভোল্ট রিলিজ (NVR) শক্তিহীন! স্প্রিং হ্যান্ডেলটিকে OFF পজিশনে ফিরিয়ে নিয়েছে।',
      tripAlertOlr: 'ট্রিপড: ওভারলোড রিলিজ (OLR) আর্মেচার আকর্ষণ করে NVR শর্ট করেছে এবং হ্যান্ডেল ট্রিপ হয়েছে।',
      tripAlert3P: 'ট্রিপড (৩-পয়েন্ট ত্রুটি): ফিল্ড দুর্বল করায় NVR হোল্ডিং কারেন্ট কমে হ্যান্ডেল ছিটকে গেছে! ৪-পয়েন্ট স্টার্টার ব্যবহার করুন।',
      safeStatus: 'নিরাপদ স্বাভাবিক পরিচালনা',
      handleOff: 'পজিশন ০: OFF',
      stud1: 'স্টাড ১ (পূর্ণ ৪.০ Ω)',
      stud2: 'স্টাড ২ (৩.০ Ω)',
      stud3: 'স্টাড ৩ (২.০ Ω)',
      stud4: 'স্টাড ৪ (১.০ Ω)',
      studRun: 'পজিশন ৫: RUN (০ Ω - NVR চুম্বক দ্বারা লকড)',
      explanationNote: 'লক্ষ করুন স্টাড ১-এ কারেন্ট নিয়ন্ত্রিত ৫৫ A থাকে, যেখানে স্টার্টার ছাড়া ৭৩৩ A এর মারাত্মক অগ্নিকাণ্ড ঘটতে পারত!'
    }
  };

  const t = labels[language] || labels.en;

  // Handle angle calculation for SVG starter faceplate
  // Stud 0 (OFF): ~130 deg, Stud 1: ~105 deg, Stud 2: ~80 deg, Stud 3: ~55 deg, Stud 4: ~30 deg, Stud 5 (RUN): ~5 deg
  const studAngles = [135, 108, 81, 54, 27, 0];
  const handleAngle = studAngles[studPosition];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-slate-100 shadow-xl max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 bg-amber-500/10 text-amber-400 rounded-lg border border-amber-500/20">
              <Zap className="w-5 h-5" />
            </span>
            <h3 className="text-xl font-bold text-white tracking-wide">{t.title}</h3>
          </div>
          <p className="text-xs md:text-sm text-slate-400 mt-1 max-w-2xl">{t.subtitle}</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 transition"
            aria-label="Reset simulation"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            {t.reset}
          </button>
        </div>
      </div>

      {/* Starter Mode Selector Tabs */}
      <div className="grid grid-cols-3 gap-2 bg-slate-950 p-1.5 rounded-lg border border-slate-800">
        <button
          onClick={() => {
            setStarterType('3point');
            setTripReason(null);
          }}
          className={`py-2 px-3 rounded-md text-xs font-bold transition flex items-center justify-center gap-1.5 ${
            starterType === '3point'
              ? 'bg-cyan-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
          aria-pressed={starterType === '3point'}
        >
          {t.mode3p}
        </button>
        <button
          onClick={() => {
            setStarterType('4point');
            setTripReason(null);
          }}
          className={`py-2 px-3 rounded-md text-xs font-bold transition flex items-center justify-center gap-1.5 ${
            starterType === '4point'
              ? 'bg-cyan-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
          aria-pressed={starterType === '4point'}
        >
          {t.mode4p}
        </button>
        <button
          onClick={() => {
            setStarterType('2point');
            setTripReason(null);
          }}
          className={`py-2 px-3 rounded-md text-xs font-bold transition flex items-center justify-center gap-1.5 ${
            starterType === '2point'
              ? 'bg-cyan-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
          aria-pressed={starterType === '2point'}
        >
          {t.mode2p}
        </button>
      </div>

      {/* Trip Notification Banner */}
      {tripReason && (
        <div className="p-3.5 bg-rose-950/80 border border-rose-600/60 rounded-lg text-rose-200 text-xs md:text-sm font-medium flex items-center gap-2.5 animate-pulse">
          <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0" />
          <span>
            {tripReason === 'nvr_power_loss' && t.tripAlertNvr}
            {tripReason === 'olr_trip' && t.tripAlertOlr}
            {tripReason === '3point_field_weakening_trip' && t.tripAlert3P}
          </span>
        </div>
      )}

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* SVG Starter Faceplate & Motor Visualization (7 cols) */}
        <div className="lg:col-span-7 bg-slate-950 rounded-xl p-4 border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="w-full flex justify-between items-center text-xs font-mono text-slate-400 mb-2">
            <span className="text-cyan-400 font-semibold">
              {starterType === '3point' && '3-Point Starter (L, A, F)'}
              {starterType === '4point' && '4-Point Starter (L, A, F, N)'}
              {starterType === '2point' && '2-Point Starter (L, A)'}
            </span>
            <span className={`px-2 py-0.5 rounded font-bold ${
              studPosition === 0 ? 'bg-slate-800 text-slate-400' :
              studPosition === 5 ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-600/40' :
              'bg-amber-900/60 text-amber-300 border border-amber-600/40'
            }`}>
              {studPosition === 0 && t.handleOff}
              {studPosition === 1 && t.stud1}
              {studPosition === 2 && t.stud2}
              {studPosition === 3 && t.stud3}
              {studPosition === 4 && t.stud4}
              {studPosition === 5 && t.studRun}
            </span>
          </div>

          <svg viewBox="0 0 540 330" className="w-full h-auto max-h-[300px]" aria-label="DC Motor Starter Schematic Diagram">
            <defs>
              <radialGradient id="nvrGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0369a1" stopOpacity="0.1" />
              </radialGradient>
              <linearGradient id="handleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>
            </defs>

            {/* Background Starter Enclosure */}
            <rect x="20" y="15" width="280" height="295" rx="14" fill="#090d16" stroke="#334155" strokeWidth="2.5" />
            <text x="160" y="38" textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
              STARTER FACEPLATE
            </text>

            {/* Brass Arc Contact */}
            <path d="M 60 215 A 110 110 0 0 1 230 130" fill="none" stroke="#d97706" strokeWidth="6" strokeLinecap="round" />
            <text x="110" y="160" fill="#f59e0b" fontSize="8" fontWeight="bold" transform="rotate(-30 110 160)">Brass Arc</text>

            {/* Resistor Segment Blocks across Studs */}
            {/* Stud 1: x=70, y=105; Stud 2: x=110, y=70; Stud 3: x=160, y=55; Stud 4: x=215, y=70; Stud 5: x=255, y=105 */}
            {/* Resistor 1 */}
            <path d="M 70 105 Q 90 85 110 70" fill="none" stroke={studPosition >= 1 && studPosition < 2 ? '#f59e0b' : '#475569'} strokeWidth="3" strokeDasharray="3,2" />
            <text x="85" y="80" fill="#f59e0b" fontSize="7" fontWeight="bold">1.0Ω</text>

            {/* Resistor 2 */}
            <path d="M 110 70 Q 135 60 160 55" fill="none" stroke={studPosition >= 1 && studPosition < 3 ? '#f59e0b' : '#475569'} strokeWidth="3" strokeDasharray="3,2" />
            <text x="135" y="52" fill="#f59e0b" fontSize="7" fontWeight="bold">1.0Ω</text>

            {/* Resistor 3 */}
            <path d="M 160 55 Q 187 60 215 70" fill="none" stroke={studPosition >= 1 && studPosition < 4 ? '#f59e0b' : '#475569'} strokeWidth="3" strokeDasharray="3,2" />
            <text x="187" y="52" fill="#f59e0b" fontSize="7" fontWeight="bold">1.0Ω</text>

            {/* Resistor 4 */}
            <path d="M 215 70 Q 235 85 255 105" fill="none" stroke={studPosition >= 1 && studPosition < 5 ? '#f59e0b' : '#475569'} strokeWidth="3" strokeDasharray="3,2" />
            <text x="235" y="80" fill="#f59e0b" fontSize="7" fontWeight="bold">1.0Ω</text>

            {/* Stud 0 (OFF Position Stud) */}
            <circle cx="45" cy="150" r="7" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
            <text x="35" y="170" fill="#94a3b8" fontSize="9" fontWeight="bold">OFF</text>

            {/* Stud 1 */}
            <circle cx="70" cy="105" r="7" fill={studPosition === 1 ? '#38bdf8' : '#1e293b'} stroke="#38bdf8" strokeWidth="2" />
            <text x="65" y="94" fill="#38bdf8" fontSize="9" fontWeight="bold">1</text>

            {/* Stud 2 */}
            <circle cx="110" cy="70" r="7" fill={studPosition === 2 ? '#38bdf8' : '#1e293b'} stroke="#38bdf8" strokeWidth="2" />
            <text x="106" y="58" fill="#38bdf8" fontSize="9" fontWeight="bold">2</text>

            {/* Stud 3 */}
            <circle cx="160" cy="55" r="7" fill={studPosition === 3 ? '#38bdf8' : '#1e293b'} stroke="#38bdf8" strokeWidth="2" />
            <text x="156" y="44" fill="#38bdf8" fontSize="9" fontWeight="bold">3</text>

            {/* Stud 4 */}
            <circle cx="215" cy="70" r="7" fill={studPosition === 4 ? '#38bdf8' : '#1e293b'} stroke="#38bdf8" strokeWidth="2" />
            <text x="222" y="60" fill="#38bdf8" fontSize="9" fontWeight="bold">4</text>

            {/* Stud 5 (RUN) */}
            <circle cx="255" cy="105" r="8" fill={studPosition === 5 ? '#10b981' : '#1e293b'} stroke="#10b981" strokeWidth="2.5" />
            <text x="268" y="105" fill="#10b981" fontSize="9" fontWeight="bold">RUN (5)</text>

            {/* No-Volt Release (NVR) Electromagnet */}
            <g transform="translate(245, 125)">
              <rect x="0" y="0" width="30" height="40" rx="3" fill="#0f172a" stroke={studPosition === 5 && !powerFailure && !tripReason ? '#38bdf8' : '#475569'} strokeWidth="2" />
              {studPosition === 5 && !powerFailure && !tripReason && (
                <circle cx="15" cy="20" r="16" fill="url(#nvrGlow)" />
              )}
              {/* Coil turns */}
              <line x1="4" y1="10" x2="26" y2="10" stroke="#f59e0b" strokeWidth="2" />
              <line x1="4" y1="18" x2="26" y2="18" stroke="#f59e0b" strokeWidth="2" />
              <line x1="4" y1="26" x2="26" y2="26" stroke="#f59e0b" strokeWidth="2" />
              <line x1="4" y1="34" x2="26" y2="34" stroke="#f59e0b" strokeWidth="2" />
              <text x="15" y="-6" textAnchor="middle" fill="#38bdf8" fontSize="8" fontWeight="bold">NVC Magnet</text>
            </g>

            {/* Overload Release (OLR) Electromagnet & Soft Iron Lever */}
            <g transform="translate(40, 240)">
              <rect x="0" y="0" width="40" height="25" rx="3" fill="#0f172a" stroke={overloadActive ? '#ef4444' : '#475569'} strokeWidth="2" />
              <line x1="6" y1="8" x2="34" y2="8" stroke="#f59e0b" strokeWidth="2" />
              <line x1="6" y1="16" x2="34" y2="16" stroke="#f59e0b" strokeWidth="2" />
              <text x="20" y="-6" textAnchor="middle" fill={overloadActive ? '#ef4444' : '#94a3b8'} fontSize="8" fontWeight="bold">OLR Coil</text>
              {/* Movable plunger lever */}
              <line x1="20" y1="25" x2="20" y2={overloadActive ? "38" : "48"} stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />
              <circle cx="20" cy={overloadActive ? "38" : "48"} r="4" fill="#ef4444" />
            </g>

            {/* Starter Handle Pivot and Arm */}
            {/* Pivot at x=160, y=240 */}
            <g transform="translate(160, 235)">
              {/* Spiral Spring */}
              <circle cx="0" cy="0" r="14" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3,2" />
              <text x="-25" y="16" fill="#64748b" fontSize="7">Spiral Spring</text>

              {/* Rotating Handle Group */}
              <g transform={`rotate(${-handleAngle})`} className="transition-transform duration-300 ease-out">
                {/* Arm shank */}
                <line x1="0" y1="0" x2="0" y2="-155" stroke="url(#handleGrad)" strokeWidth="7" strokeLinecap="round" />
                {/* Soft iron keeper plate on handle */}
                <rect x="-8" y="-120" width="16" height="18" rx="2" fill="#cbd5e1" stroke="#334155" strokeWidth="1" />
                {/* Handle insulated grip */}
                <circle cx="0" cy="-155" r="9" fill="#dc2626" stroke="#ffffff" strokeWidth="2" />
              </g>
              <circle cx="0" cy="0" r="8" fill="#1e293b" stroke="#e2e8f0" strokeWidth="2.5" />
            </g>

            {/* Motor Section (Right side of graphic) */}
            <g transform="translate(330, 20)">
              <rect x="0" y="0" width="190" height="290" rx="12" fill="#090d16" stroke="#1e293b" strokeWidth="2" />
              <text x="95" y="24" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">DC MOTOR</text>

              {/* Armature Rotor Circle */}
              <g transform="translate(95, 110)">
                <circle cx="0" cy="0" r="42" fill="#0f172a" stroke="#38bdf8" strokeWidth="3" />
                {/* Rotating Armature Coils Indicator */}
                <g transform={`rotate(${simulatedSpeed * 1.5})`} className="origin-center">
                  <line x1="-32" y1="0" x2="32" y2="0" stroke="#f59e0b" strokeWidth="3" />
                  <line x1="0" y1="-32" x2="0" y2="32" stroke="#f59e0b" strokeWidth="3" />
                  <line x1="-22" y1="-22" x2="22" y2="22" stroke="#f59e0b" strokeWidth="2" />
                  <line x1="-22" y1="22" x2="22" y2="-22" stroke="#f59e0b" strokeWidth="2" />
                </g>
                {/* Carbon Brushes */}
                <rect x="-47" y="-7" width="8" height="14" fill="#334155" stroke="#94a3b8" strokeWidth="1" />
                <rect x="39" y="-7" width="8" height="14" fill="#334155" stroke="#94a3b8" strokeWidth="1" />
                <circle cx="0" cy="0" r="14" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">A</text>
              </g>
              <text x="95" y="170" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">
                Armature (Ra = {armatureResistance}Ω)
              </text>

              {/* Field Winding Box */}
              <g transform="translate(30, 195)">
                <rect x="0" y="0" width="130" height="34" rx="4" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
                {/* Turns */}
                <path d="M 15 17 Q 25 5 35 17 Q 45 29 55 17 Q 65 5 75 17 Q 85 29 95 17 Q 105 5 115 17" fill="none" stroke="#34d399" strokeWidth="2.5" />
                <text x="65" y="-5" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="bold">
                  {starterType === '2point' ? 'Series Field Winding (Se)' : 'Shunt Field Winding (Sh)'}
                </text>
              </g>

              {/* Real-time Dynamic RPM & Eb Indicator */}
              <g transform="translate(15, 245)">
                <rect x="0" y="0" width="160" height="32" rx="4" fill="#020617" stroke="#334155" strokeWidth="1" />
                <text x="10" y="14" fill="#94a3b8" fontSize="8.5" fontFamily="monospace">Speed:</text>
                <text x="50" y="14" fill="#38bdf8" fontSize="9" fontWeight="bold" fontFamily="monospace">{Math.round(simulatedSpeed)} RPM</text>
                <text x="10" y="26" fill="#94a3b8" fontSize="8.5" fontFamily="monospace">Eb:</text>
                <text x="50" y="26" fill="#34d399" fontSize="9" fontWeight="bold" fontFamily="monospace">{backEmf.toFixed(1)} V</text>
                <text x="100" y="20" fill="#f59e0b" fontSize="8.5" fontWeight="bold" fontFamily="monospace">Ia: {armatureCurrent.toFixed(1)}A</text>
              </g>
            </g>

            {/* Connecting Wire Routing Lines */}
            {/* Terminal L */}
            <path d="M 20 252 L 40 252" stroke="#38bdf8" strokeWidth="2.5" />
            <circle cx="20" cy="252" r="3" fill="#38bdf8" />
            <text x="12" y="255" textAnchor="end" fill="#38bdf8" fontSize="9" fontWeight="bold">L (+)</text>

            {/* Line from OLR to Handle Pivot */}
            <path d="M 80 252 L 140 252 L 160 235" stroke="#f59e0b" strokeWidth="2" fill="none" />

            {/* Terminal A */}
            <path d="M 255 105 L 300 105 L 300 130 L 330 130" stroke="#38bdf8" strokeWidth="2.5" fill="none" />
            <text x="310" y="125" fill="#38bdf8" fontSize="9" fontWeight="bold">A</text>

            {/* Terminal F */}
            {starterType !== '2point' && (
              <path d="M 275 145 L 315 145 L 315 212 L 330 212" stroke="#10b981" strokeWidth="2" fill="none" />
            )}
          </svg>

          {/* Stepped Advancement Control Buttons */}
          <div className="w-full flex items-center justify-between gap-3 mt-3 pt-3 border-t border-slate-800">
            <button
              onClick={() => {
                setStudPosition(0);
                setTripReason(null);
              }}
              disabled={studPosition === 0}
              className="px-3 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-slate-200 text-xs font-bold rounded-lg border border-slate-700 transition"
            >
              {t.returnOff}
            </button>

            <div className="flex items-center gap-1.5 font-mono text-xs text-slate-300">
              <span className="text-slate-400">Position:</span>
              <span className="text-cyan-400 font-bold px-2 py-0.5 bg-slate-800 rounded">
                Stud {studPosition} / 5
              </span>
            </div>

            <button
              onClick={handleAdvanceStud}
              disabled={studPosition >= 5}
              className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-bold rounded-lg shadow-md transition"
            >
              <FastForward className="w-4 h-4" />
              {t.stepAdvance}
            </button>
          </div>
        </div>

        {/* Live Metrics & Comparison Dashboard (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Key Metrics Cards */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <span className="text-[11px] text-slate-400 font-medium block">{t.armCurrentDisplay}</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl font-bold font-mono text-amber-400">{armatureCurrent.toFixed(1)}</span>
                <span className="text-xs text-slate-400">Amperes</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono mt-0.5 block">Safe Limit: &lt; 75 A</span>
            </div>

            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <span className="text-[11px] text-slate-400 font-medium block">{t.backEmfDisplay}</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl font-bold font-mono text-emerald-400">{backEmf.toFixed(1)}</span>
                <span className="text-xs text-slate-400">Volts</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono mt-0.5 block">Supply: {supplyVoltage} V</span>
            </div>

            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <span className="text-[11px] text-slate-400 font-medium block">{t.speedDisplay}</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl font-bold font-mono text-cyan-400">{Math.round(simulatedSpeed)}</span>
                <span className="text-xs text-slate-400">RPM</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono mt-0.5 block">Base: 1450 RPM</span>
            </div>

            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <span className="text-[11px] text-slate-400 font-medium block">{t.starterResDisplay}</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl font-bold font-mono text-indigo-400">{activeStarterRes.toFixed(1)}</span>
                <span className="text-xs text-slate-400">Ω</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono mt-0.5 block">Ra = {armatureResistance} Ω</span>
            </div>
          </div>

          {/* DOL Starting Inrush Hazard Comparison Bar */}
          <div className="p-3.5 bg-rose-950/40 rounded-lg border border-rose-900/60 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-rose-300 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                {t.dolCompare}
              </span>
              <span className="font-mono font-bold text-rose-400">{dolStartingCurrent.toFixed(0)} A !</span>
            </div>
            <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden flex">
              <div
                className="bg-amber-500 h-full transition-all"
                style={{ width: `${Math.min(100, (armatureCurrent / dolStartingCurrent) * 100)}%` }}
                title="Current with Starter"
              />
              <div
                className="bg-rose-600 h-full opacity-60 transition-all"
                style={{ width: `${Math.max(0, 100 - (armatureCurrent / dolStartingCurrent) * 100)}%` }}
                title="Suppressed Inrush Spike"
              />
            </div>
            <p className="text-[11px] text-rose-200/80 leading-relaxed font-sans">{t.explanationNote}</p>
          </div>

          {/* Fault & Protective Trip Testing Controls */}
          <div className="p-3.5 bg-slate-950 rounded-lg border border-slate-800 space-y-2.5">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              {t.simFaultsTitle}
            </span>

            <div className="grid grid-cols-1 gap-2">
              <button
                onClick={() => setPowerFailure(!powerFailure)}
                className={`py-1.5 px-3 text-xs font-semibold rounded border text-left transition flex items-center justify-between ${
                  powerFailure
                    ? 'bg-rose-900/60 border-rose-500 text-rose-200'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <span>{t.simPowerLoss}</span>
                <span className="font-mono text-[10px]">{powerFailure ? 'ACTIVE' : 'OFF'}</span>
              </button>

              <button
                onClick={() => setOverloadActive(!overloadActive)}
                className={`py-1.5 px-3 text-xs font-semibold rounded border text-left transition flex items-center justify-between ${
                  overloadActive
                    ? 'bg-rose-900/60 border-rose-500 text-rose-200'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <span>{t.simOverload}</span>
                <span className="font-mono text-[10px]">{overloadActive ? 'ACTIVE' : 'OFF'}</span>
              </button>

              <button
                onClick={() => setFieldRheostatWeakening(!fieldRheostatWeakening)}
                className={`py-1.5 px-3 text-xs font-semibold rounded border text-left transition flex items-center justify-between ${
                  fieldRheostatWeakening
                    ? 'bg-cyan-900/60 border-cyan-500 text-cyan-200'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <span>{t.simFieldWeakening}</span>
                <span className="font-mono text-[10px]">{fieldRheostatWeakening ? 'WEAKENED' : 'NORMAL'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
