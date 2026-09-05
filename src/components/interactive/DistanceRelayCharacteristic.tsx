import React, { useState } from 'react';
import { Language } from '../../types';
import { Sliders, RotateCcw, ShieldCheck, Zap, AlertTriangle, CheckCircle2, TrendingUp, Info } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const DistanceRelayCharacteristic: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';

  const [relayType, setRelayType] = useState<'mho' | 'quadrilateral'>('mho');
  const [faultLocationPct, setFaultLocationPct] = useState<number>(65); // 0% to 150%
  const [faultArcResistance, setFaultArcResistance] = useState<number>(3.5); // Ohms
  const [loadEncroachmentActive, setLoadEncroachmentActive] = useState<boolean>(false);

  // Transmission line parameters
  const lineResistance = 4.0; // Ohms
  const lineReactance = 32.0; // Ohms (total line ZL = 4 + j32 = 32.25 Ohms, angle ~ 82.87 deg)

  // Apparent impedance seen by relay
  // Zapp = (faultLocationPct/100) * (lineResistance + j*lineReactance) + faultArcResistance
  const effectiveFraction = faultLocationPct / 100;
  const zAppR = effectiveFraction * lineResistance + faultArcResistance;
  const zAppX = effectiveFraction * lineReactance;
  const zAppMag = Math.sqrt(zAppR * zAppR + zAppX * zAppX);

  // Reach settings:
  // Zone 1: 80% of Line (Z1 = 0.8 * 32.25 = 25.8 Ohm reach, t = 0 ms)
  // Zone 2: 120% of Line (Z2 = 1.2 * 32.25 = 38.7 Ohm reach, t = 350 ms)
  // Zone 3: 160% of Line (Z3 = 1.6 * 32.25 = 51.6 Ohm reach, t = 800 ms)
  const zLineMag = Math.sqrt(lineResistance * lineResistance + lineReactance * lineReactance);
  const z1Reach = 0.8 * zLineMag;
  const z2Reach = 1.2 * zLineMag;
  const z3Reach = 1.6 * zLineMag;

  // Decision logic
  let activeZone: 'Z1' | 'Z2' | 'Z3' | 'None' = 'None';
  let tripTime = 'No Trip (Out of Reach)';

  if (relayType === 'mho') {
    // Mho circle test: angle of line impedance theta_L
    const thetaLine = Math.atan2(lineReactance, lineResistance);
    // Diameter = Reach, circle centered at (Reach/2 * cos theta, Reach/2 * sin theta)
    const checkMho = (reach: number) => {
      const cx = (reach / 2) * Math.cos(thetaLine);
      const cy = (reach / 2) * Math.sin(thetaLine);
      const distSq = (zAppR - cx) ** 2 + (zAppX - cy) ** 2;
      return distSq <= (reach / 2) ** 2;
    };

    if (checkMho(z1Reach)) {
      activeZone = 'Z1';
      tripTime = '0 ms (Instantaneous Zone 1)';
    } else if (checkMho(z2Reach)) {
      activeZone = 'Z2';
      tripTime = '350 ms (Time-Delayed Zone 2)';
    } else if (checkMho(z3Reach)) {
      activeZone = 'Z3';
      tripTime = '800 ms (Remote Backup Zone 3)';
    }
  } else {
    // Quadrilateral characteristic: independent R and X reach
    // Quad allows higher arc resistance coverage (e.g. up to 15-20 Ohms)
    const quadRReach = 18.0; // Ohms
    const checkQuad = (xReach: number) => {
      return zAppX >= 0 && zAppX <= xReach && zAppR >= -4 && zAppR <= quadRReach;
    };

    if (checkQuad(0.8 * lineReactance)) {
      activeZone = 'Z1';
      tripTime = '0 ms (Instantaneous Zone 1)';
    } else if (checkQuad(1.2 * lineReactance)) {
      activeZone = 'Z2';
      tripTime = '350 ms (Time-Delayed Zone 2)';
    } else if (checkQuad(1.6 * lineReactance)) {
      activeZone = 'Z3';
      tripTime = '800 ms (Remote Backup Zone 3)';
    }
  }

  // Load Encroachment Check
  const isLoadEncroachment = loadEncroachmentActive && zAppMag < 45 && zAppR > 25 && zAppX < 15;

  // Plot coordinates transformation
  // Complex R-X plane: R from -10 to 40, X from -5 to 60
  // SVG viewBox: 0 0 460 260
  const svgW = 460;
  const svgH = 260;
  const originX = 110;
  const originY = 220;
  const scale = 3.6; // pixels per Ohm

  const toSvgX = (r: number) => originX + r * scale;
  const toSvgY = (x: number) => originY - x * scale;

  const appX = toSvgX(zAppR);
  const appY = toSvgY(zAppX);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-2xl my-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-cyan-400" />
            <h3 className="text-xl font-bold text-white tracking-wide">
              {lang === 'en' && 'Transmission Line Distance Protection (21) R-X Plane'}
              {lang === 'hi' && 'पारेषण लाइन दूरी सुरक्षा (21) R-X तल सिमुलेटर'}
              {lang === 'bn' && 'ট্রান্সমিশন লাইন ডিসট্যান্স প্রোটেকশন (২১) R-X তল সিমুলেটর'}
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'en' && 'Simulate Mho and Quadrilateral characteristics across Zone 1, Zone 2, and Zone 3 with fault resistance and load encroachment.'}
            {lang === 'hi' && 'दोष प्रतिरोध और लोड एन्क्रोचमेंट के साथ ज़ोन 1, ज़ोन 2 और ज़ोन 3 में म्हो एवं चतुर्भुज विशेषताओं का सिमुलेशन करें।'}
            {lang === 'bn' && 'ফল্ট রেজিস্ট্যান্স ও লোড এনক্রোচমেন্টসহ জোন ১, জোন ২ ও জোন ৩ এ মো (Mho) এবং কোয়াড্রিলেটারাল বৈশিষ্ট্য সিমুলেট করুন।'}
          </p>
        </div>
        <button
          onClick={() => {
            setRelayType('mho');
            setFaultLocationPct(65);
            setFaultArcResistance(3.5);
            setLoadEncroachmentActive(false);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
          <span>{lang === 'en' ? 'Reset Settings' : lang === 'hi' ? 'रीसेट' : 'রিসেট'}</span>
        </button>
      </div>

      {/* Characteristic Selector */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center gap-3">
          <span className="text-xs font-semibold text-slate-300">
            {lang === 'en' ? 'Relay Characteristic:' : lang === 'hi' ? 'रिले विशेषता प्रकार:' : 'রিলে বৈশিষ্ট্যের ধরন:'}
          </span>
          <div className="flex gap-2 flex-1">
            <button
              onClick={() => setRelayType('mho')}
              className={`flex-1 py-1.5 text-xs font-bold rounded transition-colors ${
                relayType === 'mho' ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              Mho (Self-Polarized)
            </button>
            <button
              onClick={() => setRelayType('quadrilateral')}
              className={`flex-1 py-1.5 text-xs font-bold rounded transition-colors ${
                relayType === 'quadrilateral' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              Quadrilateral (Quad)
            </button>
          </div>
        </div>

        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-300">
            {lang === 'en' ? 'Heavy Power Flow (Load Encroachment):' : lang === 'hi' ? 'भारी पावर फ्लो (लोड एन्क्रोचमेंट):' : 'উচ্চ পাওয়ার ফ্লো (লোড এনক্রোচমেন্ট):'}
          </span>
          <button
            onClick={() => setLoadEncroachmentActive(!loadEncroachmentActive)}
            className={`px-3 py-1.5 text-xs font-bold rounded transition-colors ${
              loadEncroachmentActive ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            {loadEncroachmentActive ? 'Active (Blinders ON)' : 'Inactive'}
          </button>
        </div>
      </div>

      {/* Sliders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        {/* Fault Location Slider */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-slate-300">
              {lang === 'en' ? 'Fault Location on Transmission Line' : lang === 'hi' ? 'लाइन पर फॉल्ट स्थिति' : 'লাইনে ফল্টের অবস্থান'}
            </span>
            <span className="text-xs font-mono font-bold text-cyan-400">{faultLocationPct}% of Line Length</span>
          </div>
          <input
            type="range"
            min="5"
            max="145"
            step="1"
            value={faultLocationPct}
            onChange={(e) => setFaultLocationPct(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>0% (Terminal)</span>
            <span>80% (Z1 Limit)</span>
            <span>120% (Z2 Limit)</span>
            <span>150% (Remote Bus)</span>
          </div>
        </div>

        {/* Fault Arc Resistance Slider */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-slate-300">
              {lang === 'en' ? 'Fault Arc & Tower Footing Resistance (Rf)' : lang === 'hi' ? 'फॉल्ट आर्क एवं टॉवर प्रतिरोध (Rf)' : 'ফল্ট আর্ক ও টাওয়ার রোধ (Rf)'}
            </span>
            <span className="text-xs font-mono font-bold text-amber-400">{faultArcResistance.toFixed(1)} Ω</span>
          </div>
          <input
            type="range"
            min="0"
            max="16"
            step="0.5"
            value={faultArcResistance}
            onChange={(e) => setFaultArcResistance(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>0 Ω (Bolted)</span>
            <span>6 Ω (Typical Arc)</span>
            <span>16 Ω (High Tower Footing)</span>
          </div>
        </div>
      </div>

      {/* Complex R-X Impedance Plane Visualization */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-bold text-slate-200">
            {lang === 'en' ? 'Complex Impedance (R-X) Operating Plane' : lang === 'hi' ? 'जटिल प्रतिबाधा (R-X) तल' : 'কমপ্লেক্স ইম্পিডেন্স (R-X) অপারেটিং তল'}
          </span>
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="text-emerald-400 font-bold">Zone 1 (80%)</span>
            <span className="text-cyan-400 font-bold">Zone 2 (120%)</span>
            <span className="text-amber-400 font-bold">Zone 3 (160%)</span>
          </div>
        </div>

        <svg viewBox="0 0 460 260" className="w-full h-64 bg-slate-900 rounded-lg">
          {/* Axes */}
          <line x1="20" y1={originY} x2="440" y2={originY} stroke="#475569" strokeWidth="1.5" />
          <line x1={originX} y1="10" x2={originX} y2="250" stroke="#475569" strokeWidth="1.5" />
          <text x="430" y={originY - 6} fill="#94a3b8" fontSize="9" fontWeight="bold">R (Ω)</text>
          <text x={originX + 8} y="20" fill="#94a3b8" fontSize="9" fontWeight="bold">+jX (Ω)</text>

          {/* Grid Ticks */}
          {[10, 20, 30, 40].map((val) => (
            <g key={val}>
              <line x1={toSvgX(val)} y1={originY - 3} x2={toSvgX(val)} y2={originY + 3} stroke="#334155" />
              <text x={toSvgX(val)} y={originY + 12} fill="#64748b" fontSize="7" textAnchor="middle">{val}</text>
            </g>
          ))}
          {[10, 20, 30, 40, 50].map((val) => (
            <g key={val}>
              <line x1={originX - 3} y1={toSvgY(val)} x2={originX + 3} y2={toSvgY(val)} stroke="#334155" />
              <text x={originX - 10} y={toSvgY(val) + 3} fill="#64748b" fontSize="7" textAnchor="end">{val}</text>
            </g>
          ))}

          {/* Protected Transmission Line Vector */}
          <line
            x1={originX}
            y1={originY}
            x2={toSvgX(lineResistance)}
            y2={toSvgY(lineReactance)}
            stroke="#f59e0b"
            strokeWidth="3"
            strokeDasharray="4,2"
          />
          <text
            x={toSvgX(lineResistance) + 6}
            y={toSvgY(lineReactance)}
            fill="#fbbf24"
            fontSize="8"
            fontWeight="bold"
          >
            100% Line (ZL = 4 + j32 Ω)
          </text>

          {/* Characteristics: Mho or Quad */}
          {relayType === 'mho' ? (
            <>
              {/* Zone 3 Mho Circle */}
              <circle
                cx={toSvgX((z3Reach / 2) * (lineResistance / zLineMag))}
                cy={toSvgY((z3Reach / 2) * (lineReactance / zLineMag))}
                r={(z3Reach / 2) * scale}
                fill="#f59e0b"
                fillOpacity="0.08"
                stroke="#f59e0b"
                strokeWidth="1.5"
                strokeDasharray="4,4"
              />
              {/* Zone 2 Mho Circle */}
              <circle
                cx={toSvgX((z2Reach / 2) * (lineResistance / zLineMag))}
                cy={toSvgY((z2Reach / 2) * (lineReactance / zLineMag))}
                r={(z2Reach / 2) * scale}
                fill="#06b6d4"
                fillOpacity="0.10"
                stroke="#06b6d4"
                strokeWidth="1.5"
                strokeDasharray="3,3"
              />
              {/* Zone 1 Mho Circle */}
              <circle
                cx={toSvgX((z1Reach / 2) * (lineResistance / zLineMag))}
                cy={toSvgY((z1Reach / 2) * (lineReactance / zLineMag))}
                r={(z1Reach / 2) * scale}
                fill="#10b981"
                fillOpacity="0.15"
                stroke="#10b981"
                strokeWidth="2"
              />
            </>
          ) : (
            <>
              {/* Zone 3 Quad */}
              <polygon
                points={`${toSvgX(-4)},${toSvgY(0)} ${toSvgX(24)},${toSvgY(0)} ${toSvgX(24)},${toSvgY(1.6 * lineReactance)} ${toSvgX(-4)},${toSvgY(1.6 * lineReactance)}`}
                fill="#f59e0b"
                fillOpacity="0.08"
                stroke="#f59e0b"
                strokeWidth="1.5"
                strokeDasharray="4,4"
              />
              {/* Zone 2 Quad */}
              <polygon
                points={`${toSvgX(-3)},${toSvgY(0)} ${toSvgX(20)},${toSvgY(0)} ${toSvgX(20)},${toSvgY(1.2 * lineReactance)} ${toSvgX(-3)},${toSvgY(1.2 * lineReactance)}`}
                fill="#06b6d4"
                fillOpacity="0.10"
                stroke="#06b6d4"
                strokeWidth="1.5"
                strokeDasharray="3,3"
              />
              {/* Zone 1 Quad */}
              <polygon
                points={`${toSvgX(-2)},${toSvgY(0)} ${toSvgX(16)},${toSvgY(0)} ${toSvgX(16)},${toSvgY(0.8 * lineReactance)} ${toSvgX(-2)},${toSvgY(0.8 * lineReactance)}`}
                fill="#10b981"
                fillOpacity="0.15"
                stroke="#10b981"
                strokeWidth="2"
              />
            </>
          )}

          {/* Load Encroachment Region */}
          {loadEncroachmentActive && (
            <g>
              <polygon
                points={`${toSvgX(25)},${toSvgY(0)} ${toSvgX(45)},${toSvgY(0)} ${toSvgX(45)},${toSvgY(16)} ${toSvgX(25)},${toSvgY(16)}`}
                fill="#ec4899"
                fillOpacity="0.2"
                stroke="#ec4899"
                strokeWidth="1"
                strokeDasharray="2,2"
              />
              <text x={toSvgX(30)} y={toSvgY(8)} fill="#f472b6" fontSize="7" fontWeight="bold">Load Blinder</text>
            </g>
          )}

          {/* Fault Apparent Impedance Point */}
          <circle
            cx={appX}
            cy={appY}
            r="6"
            fill={activeZone !== 'None' ? '#ef4444' : '#64748b'}
            stroke="#ffffff"
            strokeWidth="2"
            className="animate-pulse"
          />
          <text
            x={appX + 8}
            y={appY + 3}
            fill={activeZone !== 'None' ? '#f87171' : '#94a3b8'}
            fontSize="8.5"
            fontWeight="bold"
          >
            Zapp ({zAppR.toFixed(1)} + j{zAppX.toFixed(1)} Ω)
          </text>
        </svg>
      </div>

      {/* Decision Results Board */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Apparent Impedance */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">
            {lang === 'en' ? 'Measured Zapp' : lang === 'hi' ? 'मापी गई प्रतिबाधा Zapp' : 'পরিমাপকৃত ইম্পিডেন্স Zapp'}
          </span>
          <div className="text-xl font-bold font-mono text-cyan-400">
            {zAppMag.toFixed(1)} Ω
          </div>
          <span className="text-[10px] text-slate-500 font-mono">
            R={zAppR.toFixed(1)}Ω, X={zAppX.toFixed(1)}Ω
          </span>
        </div>

        {/* Active Zone Detection */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">
            {lang === 'en' ? 'Detected Zone' : lang === 'hi' ? 'पहचाना गया क्षेत्र' : 'সনাক্তকৃত জোন'}
          </span>
          <div className={`text-xl font-bold font-mono ${
            activeZone === 'Z1' ? 'text-emerald-400' : activeZone === 'Z2' ? 'text-cyan-400' : activeZone === 'Z3' ? 'text-amber-400' : 'text-slate-500'
          }`}>
            {activeZone === 'None' ? 'OUT OF REACH' : `ZONE ${activeZone.slice(1)}`}
          </div>
          <span className="text-[10px] text-slate-500 font-mono">
            {activeZone === 'Z1' ? 'Primary Instantaneous' : activeZone === 'Z2' ? 'End-zone Time Delay' : activeZone === 'Z3' ? 'Remote Bus Backup' : 'No Pickup'}
          </span>
        </div>

        {/* Operating Clearing Time */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">
            {lang === 'en' ? 'Trip Decision & Speed' : lang === 'hi' ? 'ट्रिप निर्णय एवं गति' : 'ট্রিপ সিদ্ধান্ত ও গতি'}
          </span>
          <div className="text-base font-bold text-white">
            {tripTime}
          </div>
          <span className="text-[10px] text-slate-500 font-mono">
            Breaker opening in 3 cycles
          </span>
        </div>

        {/* Underreach / Arc Resistance Vulnerability */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">
            {lang === 'en' ? 'Arc Resistance Effect' : lang === 'hi' ? 'आर्क प्रतिरोध प्रभाव' : 'আর্ক রোধের প্রভাব'}
          </span>
          <div className="text-xs font-bold text-slate-300 mt-1">
            {relayType === 'mho' && faultArcResistance > 6 && faultLocationPct < 80 && activeZone !== 'Z1' ? (
              <span className="text-rose-400 font-bold">MHO UNDERREACH (Pushed out of Z1 by Rf!)</span>
            ) : relayType === 'quadrilateral' && faultArcResistance > 6 && activeZone === 'Z1' ? (
              <span className="text-emerald-400 font-bold">QUAD SECURED (Tolerates high Rf!)</span>
            ) : (
              <span className="text-slate-400">Normal Reach Coverage</span>
            )}
          </div>
          <span className="text-[10px] text-slate-500 mt-1 block">
            {relayType === 'mho' ? 'Mho circle is constricted on R axis' : 'Quadrilateral has wide R coverage'}
          </span>
        </div>
      </div>

      {/* Engineering Rule */}
      <div className="mt-4 p-3 bg-slate-950/80 rounded-lg border border-slate-800 flex items-start gap-2.5 text-xs text-slate-300">
        <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-cyan-300">
            {lang === 'en' ? 'Why Zone 1 Reach is Capped at 80% (Never 100%): ' : lang === 'hi' ? 'ज़ोन 1 रीच को 80% पर क्यों सीमित किया जाता है: ' : 'জোন ১ রিচ কেন ৮০% এ সীমাবদ্ধ রাখা হয়: '}
          </span>
          {lang === 'en' && 'Zone 1 reach is strictly set to 80%-85% of line impedance to avoid "overreaching" into the adjacent busbar or line due to CT/CVT transient errors (±5%), line parameter variations (±5%), and DC offset transients. Setting Zone 1 to 100% would cause loss of selectivity. Zone 2 (120%) covers the remaining 20% with a 300-400 ms grading time delay.'}
          {lang === 'hi' && 'सीटी/सीवीटी त्रुटियों और लाइन पैरामीटर भिन्नता के कारण आसन्न बसबार में गलत ट्रिपिंग (ओवररीच) को रोकने के लिए ज़ोन 1 को 80%-85% पर सेट किया जाता है। शेष 20% लाइन को ज़ोन 2 (120%) द्वारा 350ms देरी से सुरक्षित किया जाता है।'}
          {lang === 'bn' && 'সিটি/সিভিটি ত্রুটি এবং লাইন প্যারামিটারের তারতম্যের কারণে পাশের বাসবারে ভুল তাৎক্ষণিক ট্রিপ (ওভাররিচ) ঠেকাতে জোন ১ কঠোরভাবে ৮০%-৮৫% এ সীমাবদ্ধ রাখা হয়। বাকি ২০% লাইন জোন ২ (১২০%) দ্বারা ৩৫০ মিলিসেকেন্ড বিলম্বে কভার করা হয়।'}
        </div>
      </div>
    </div>
  );
};
