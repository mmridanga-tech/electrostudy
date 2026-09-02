import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Play, Pause, RefreshCw, Sliders, Zap, Shield, Flame, Activity, Info, Disc } from 'lucide-react';
import { Language } from '../../types';

interface ElectromagneticBrakingAnimationProps {
  currentLanguage: Language;
}

export const ElectromagneticBrakingAnimation: React.FC<ElectromagneticBrakingAnimationProps> = ({
  currentLanguage
}) => {
  const [currentSpeedRpm, setCurrentSpeedRpm] = useState<number>(1000);
  const [initialSpeedRpm, setInitialSpeedRpm] = useState<number>(1000);
  const [bFieldTesla, setBFieldTesla] = useState<number>(1.2); // 1.2 T
  const [discMaterial, setDiscMaterial] = useState<'COPPER' | 'ALUMINUM' | 'STAINLESS'>('COPPER');
  const [isBraking, setIsBraking] = useState<boolean>(false);
  const [rotationDeg, setRotationDeg] = useState<number>(0);

  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Material electrical conductivity (sigma)
  const conductivitySigma = useMemo(() => {
    switch (discMaterial) {
      case 'COPPER':
        return 5.8e7; // S/m
      case 'ALUMINUM':
        return 3.5e7; // S/m
      case 'STAINLESS':
        return 1.4e6; // S/m (poor conductor -> weak eddy brake)
      default:
        return 5.8e7;
    }
  }, [discMaterial]);

  // Braking torque constant: T_b = k * sigma * B^2 * omega
  // Normalized decay rate alpha (1/s)
  const decayRate = useMemo(() => {
    const normSigma = conductivitySigma / 5.8e7;
    return 0.25 + 1.8 * normSigma * (bFieldTesla * bFieldTesla);
  }, [conductivitySigma, bFieldTesla]);

  // Current instantaneous angular velocity
  const omega = (2 * Math.PI * currentSpeedRpm) / 60; // rad/s
  // Instantaneous braking torque in N·m (approx scaled)
  const brakingTorque = isBraking ? (decayRate * 0.05 * omega) : 0;
  // Dissipated thermal power in Watts = T * omega
  const thermalPowerW = brakingTorque * omega;

  // Animation & Deceleration Loop
  useEffect(() => {
    const animate = (time: number) => {
      if (lastTimeRef.current !== null) {
        const dt = (time - lastTimeRef.current) / 1000;

        if (isBraking && currentSpeedRpm > 0.5) {
          // Speed decays exponentially: v = v0 * exp(-alpha * t)
          setCurrentSpeedRpm((prev) => Math.max(0, prev * Math.exp(-decayRate * dt)));
        }

        // Rotate disc according to current speed
        setRotationDeg((prev) => (prev + (currentSpeedRpm * 360 * dt) / 60) % 360);
      }

      lastTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      lastTimeRef.current = null;
    };
  }, [isBraking, currentSpeedRpm, decayRate]);

  const handleApplyBrake = () => {
    setIsBraking(true);
  };

  const handleReleaseBrake = () => {
    setIsBraking(false);
  };

  const handleReset = () => {
    setIsBraking(false);
    setCurrentSpeedRpm(initialSpeedRpm);
  };

  const labels = {
    en: {
      title: 'Electromagnetic Eddy-Current Braking & Damping Simulator',
      subtitle: 'Analyze contactless Lenz-law retarding force, velocity-dependent torque (F ∝ v), and kinetic-to-thermal dissipation',
      speedLabel: 'Current Rotor Speed (RPM):',
      initialSpeed: 'Initial Rotor Speed:',
      bFieldLabel: 'Electromagnet Magnetic Field (B):',
      materialLabel: 'Rotor Metal (Conductivity σ):',
      torqueLabel: 'Lenz Braking Torque (T_b ∝ σ·B²·ω):',
      powerLabel: 'Instantaneous Joule Heat Dissipation:',
      applyBrake: 'Engage Eddy Brake',
      releaseBrake: 'Release Brake',
      reset: 'Reset Speed',
      zeroSpeedNotice: 'FUNDAMENTAL LAW: Because induced EMF e ∝ v, braking force vanishes at zero velocity (F → 0 as v → 0). Eddy brakes provide perfectly smooth, wear-free deceleration but CANNOT hold a stopped vehicle stationary (mechanical parking brake required)!',
      dampingNotice: 'Instrument Application: PMMC & Galvanometer pointers use this identical principle (aluminum coil former in permanent magnet) to achieve deadbeat critical damping with zero pointer overshoot.'
    },
    hi: {
      title: 'विद्युत-चुंबकीय भंवर-धारा ब्रेकिंग एवं डैम्पिंग सिमुलेटर',
      subtitle: 'स्पर्शरहित लेंज-नियम प्रतिरोधी बल, वेग-निर्भर टॉर्क (F ∝ v), एवं गतिज ऊर्जा के तापीय क्षय का विश्लेषण करें',
      speedLabel: 'वर्तमान रोटर गति (RPM):',
      initialSpeed: 'प्रारंभिक रोटर गति:',
      bFieldLabel: 'विद्युत-चुंबक का चुंबकीय क्षेत्र (B):',
      materialLabel: 'रोटर धातु (चालकता σ):',
      torqueLabel: 'लेंज ब्रेकिंग टॉर्क (T_b ∝ σ·B²·ω):',
      powerLabel: 'तात्कालिक जूल तापन क्षय:',
      applyBrake: 'एडी ब्रेक लगाएं',
      releaseBrake: 'ब्रेक हटाएं',
      reset: 'गति रीसेट करें',
      zeroSpeedNotice: 'मूल सिद्धांत: चूंकि प्रेरित ईएमएफ e ∝ v होता है, शून्य वेग पर ब्रेकिंग बल शून्य हो जाता है (F → 0 जब v → 0)। एडी ब्रेक घिसाव-मुक्त चिकनी मंदी देते हैं, किन्तु रुके वाहन को स्थिर नहीं रख सकते (यांत्रिक पार्किंग ब्रेक आवश्यक है)!',
      dampingNotice: 'मापक यंत्र उपयोग: गैल्वेनोमीटर एवं PMMC मीटर संकेतक को बिना दोलन के तुरंत स्थिर करने (डेडबीट डैम्पिंग) हेतु इसी सिद्धांत का उपयोग करते हैं।'
    },
    bn: {
      title: 'ইলেক্ট্রোম্যাগনেটিক এডি-কারেন্ট ব্রেকিং ও ড্যাম্পিং সিমুলেটর',
      subtitle: 'স্পর্শহীন লেঞ্জের সূত্র ভিত্তিক প্রতিরোধক বল, বেগ-নির্ভর টর্ক (F ∝ v) এবং গতিশক্তিকে তাপে রূপান্তর বিশ্লেষণ করো',
      speedLabel: 'বর্তমান রোটর গতি (RPM):',
      initialSpeed: 'প্রাথমিক রোটর গতি:',
      bFieldLabel: 'ইলেক্ট্রোম্যাগনেটের চৌম্বক ক্ষেত্র (B):',
      materialLabel: 'রোটর ধাতু (পরিবাহিতা σ):',
      torqueLabel: 'লেঞ্জ ব্রেকিং টর্ক (T_b ∝ σ·B²·ω):',
      powerLabel: 'তাৎক্ষণিক জুল তাপ ক্ষয়:',
      applyBrake: 'এডি ব্রেক প্রয়োগ করুন',
      releaseBrake: 'ব্রেক মুক্ত করুন',
      reset: 'গতি রিসেট',
      zeroSpeedNotice: 'মৌলিক সূত্র: আবিষ্ট ইএমএফ e ∝ v হওয়ায়, বেগ শূন্যে পৌঁছালে ব্রেকিং বল শূন্য হয়ে যায় (F → 0 যখন v → 0)। এডি ব্রেক অত্যন্ত মসৃণ ও ঘর্ষণহীন মন্দন দেয়, কিন্তু স্থির ট্রেন বা যানকে ধরে রাখতে পারে না (মেকানিক্যাল পার্কিং ব্রেক প্রয়োজন)!',
      dampingNotice: 'পরিমাপক যন্ত্রে প্রয়োগ: PMMC এবং গ্যালভানোমিটার কাঁটা যাতে দোল না খেয়ে সাথে সাথে স্থির হয় (ডেডবিট ড্যাম্পিং), তার জন্য এই একই নীতি ব্যবহৃত হয়।'
    }
  }[currentLanguage];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-white shadow-xl max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div>
          <h2 className="text-lg font-bold text-amber-400 flex items-center gap-2">
            <Shield className="w-5 h-5 text-amber-400" />
            {labels.title}
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">{labels.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          {isBraking ? (
            <button
              onClick={handleReleaseBrake}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-xs font-semibold text-white rounded-lg transition"
            >
              <Pause className="w-3.5 h-3.5" />
              {labels.releaseBrake}
            </button>
          ) : (
            <button
              onClick={handleApplyBrake}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 hover:bg-red-500 text-xs font-semibold text-white rounded-lg shadow-lg shadow-red-950 transition"
            >
              <Zap className="w-3.5 h-3.5" />
              {labels.applyBrake}
            </button>
          )}
          <button
            onClick={handleReset}
            className="flex items-center gap-1 px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 rounded-lg border border-slate-700 transition"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            {labels.reset}
          </button>
        </div>
      </div>

      {/* Main Simulation Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
        {/* Left: Disc & Magnetic Brake Caliper (7 cols) */}
        <div className="lg:col-span-7 bg-slate-950 rounded-xl p-3 border border-slate-800 relative">
          <div className="flex justify-between items-center text-[11px] font-bold text-slate-400 mb-1">
            <span>Rotating Metallic Disc passing through Electromagnet Pole Gap</span>
            <span
              className={`font-mono font-bold ${
                isBraking ? 'text-red-400 animate-pulse' : 'text-emerald-400'
              }`}
            >
              {isBraking ? 'BRAKE ACTIVE' : 'FREE SPIN'}
            </span>
          </div>

          <svg viewBox="0 0 500 270" className="w-full h-64 select-none">
            <defs>
              <radialGradient id="brakeCopperGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#b45309" />
                <stop offset="70%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#78350f" />
              </radialGradient>
              <radialGradient id="brakeAlumGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="70%" stopColor="#cbd5e1" />
                <stop offset="100%" stopColor="#64748b" />
              </radialGradient>
              <marker id="brakingForceArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
              </marker>
            </defs>

            {/* Rotating Disc (Center at (200, 135)) */}
            <g transform="translate(200, 135)">
              <circle
                cx="0"
                cy="0"
                r="105"
                fill={discMaterial === 'COPPER' ? 'url(#brakeCopperGrad)' : 'url(#brakeAlumGrad)'}
                stroke="#fbbf24"
                strokeWidth="2"
              />

              {/* Spokes for rotation visualization */}
              <g transform={`rotate(${rotationDeg})`}>
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                  <line
                    key={`spoke-${deg}`}
                    x1="0"
                    y1="0"
                    x2={105 * Math.cos((deg * Math.PI) / 180)}
                    y2={105 * Math.sin((deg * Math.PI) / 180)}
                    stroke="#1e293b"
                    strokeWidth="1"
                    strokeDasharray="4 3"
                    opacity="0.4"
                  />
                ))}
              </g>

              {/* Shaft Hub */}
              <circle cx="0" cy="0" r="16" fill="#0f172a" stroke="#94a3b8" strokeWidth="2" />
              <circle cx="0" cy="0" r="5" fill="#38bdf8" />
            </g>

            {/* Electromagnet Brake Caliper (Positioned at right rim of disc: x=300, y=135) */}
            <g transform="translate(300, 135)">
              {/* C-Core Electromagnet Body */}
              <path
                d="M -15 -60 L 50 -60 L 50 60 L -15 60 L -15 35 L 20 35 L 20 -35 L -15 -35 Z"
                fill="#1e293b"
                stroke="#64748b"
                strokeWidth="2"
              />

              {/* North Pole (Top) */}
              <rect x="-15" y="-40" width="30" height="15" fill="#b91c1c" rx="2" />
              <text x="0" y="-28" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">N</text>

              {/* South Pole (Bottom) */}
              <rect x="-15" y="25" width="30" height="15" fill="#1d4ed8" rx="2" />
              <text x="0" y="37" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">S</text>

              {/* Electromagnet Coil Windings */}
              <rect x="35" y="-30" width="22" height="60" rx="3" fill="#b45309" stroke="#f59e0b" strokeWidth="1" />
              <text x="46" y="5" fill="#fbbf24" fontSize="8" fontWeight="bold" textAnchor="middle" transform="rotate(-90, 46, 5)">
                EXCITATION
              </text>

              {/* In the air gap: Swirling Eddy Currents under the pole gap! */}
              {isBraking && currentSpeedRpm > 5 && (
                <g>
                  {/* Eddy Current Swirl in disc under pole */}
                  <ellipse cx="0" cy="0" rx="22" ry="16" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4 2" className="animate-spin" />
                  <ellipse cx="0" cy="0" rx="12" ry="8" fill="none" stroke="#ef4444" strokeWidth="2" />

                  {/* Opposing Lenz Retarding Force Vector F_b (pointing downward opposing upward disc motion) */}
                  <line x1="-32" y1="-20" x2="-32" y2="30" stroke="#ef4444" strokeWidth="3.5" markerEnd="url(#brakingForceArrow)" />
                  <text x="-38" y="5" fill="#ef4444" fontSize="10" fontWeight="bold" textAnchor="end">
                    F_b (Lenz Force)
                  </text>
                </g>
              )}
            </g>

            {/* Rotation Direction Arrow */}
            <path
              d="M 170 30 A 105 105 0 0 1 230 30"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
            />
            <text x="200" y="22" fill="#38bdf8" fontSize="9.5" fontWeight="bold" textAnchor="middle">
              Disc Velocity v
            </text>

            {/* Velocity Speedometer Gauge Graphic */}
            <g transform="translate(420, 215)">
              <rect x="-65" y="-18" width="130" height="42" rx="6" fill="#020617" stroke="#334155" />
              <text x="0" y="-2" fill="#94a3b8" fontSize="9" textAnchor="middle">ROTOR SPEED</text>
              <text
                x="0"
                y="16"
                fill={currentSpeedRpm < 10 ? '#ef4444' : '#38bdf8'}
                fontSize="13"
                fontWeight="bold"
                fontFamily="monospace"
                textAnchor="middle"
              >
                {currentSpeedRpm.toFixed(0)} RPM
              </text>
            </g>
          </svg>

          {/* Status Banner */}
          <div className="mt-1 p-2 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
            {labels.zeroSpeedNotice}
          </div>
        </div>

        {/* Right: Real-time Quantitative Dynamics & Damping Note (5 cols) */}
        <div className="lg:col-span-5 bg-slate-950 rounded-xl p-3 border border-slate-800 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-bold text-slate-400 block mb-2">
              Electromagnetic Braking Physics: F_b = σ · B² · v · Vol
            </span>

            {/* Material Selector */}
            <div className="grid grid-cols-3 gap-1 mb-3">
              {(['COPPER', 'ALUMINUM', 'STAINLESS'] as const).map((mat) => (
                <button
                  key={mat}
                  onClick={() => setDiscMaterial(mat)}
                  className={`py-1.5 px-1 rounded-lg text-[10px] font-semibold border transition ${
                    discMaterial === mat
                      ? 'bg-amber-950/80 border-amber-500 text-amber-300'
                      : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                >
                  {mat === 'COPPER' ? 'Copper (Best)' : mat === 'ALUMINUM' ? 'Aluminum' : 'Steel (Weak)'}
                </button>
              ))}
            </div>

            {/* Dynamic Metric Readouts */}
            <div className="space-y-2 mb-3">
              <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 flex justify-between items-center">
                <span className="text-[10px] text-slate-400">{labels.speedLabel}</span>
                <span className="text-sm font-mono font-bold text-cyan-400">{currentSpeedRpm.toFixed(0)} RPM</span>
              </div>
              <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 flex justify-between items-center">
                <span className="text-[10px] text-slate-400">{labels.torqueLabel}</span>
                <span className="text-sm font-mono font-bold text-red-400">{brakingTorque.toFixed(2)} N·m</span>
              </div>
              <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 flex justify-between items-center">
                <span className="text-[10px] text-slate-400">{labels.powerLabel}</span>
                <span className="text-sm font-mono font-bold text-amber-400">{thermalPowerW.toFixed(1)} W</span>
              </div>
              <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 flex justify-between items-center">
                <span className="text-[10px] text-slate-400">Decay Rate (α):</span>
                <span className="text-sm font-mono font-bold text-purple-400">{decayRate.toFixed(2)} s⁻¹</span>
              </div>
            </div>
          </div>

          <div className="p-2 bg-sky-950/40 border border-sky-800/60 rounded-lg text-[10px] text-sky-200">
            {labels.dampingNotice}
          </div>
        </div>
      </div>

      {/* Control Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-400">{labels.bFieldLabel}</span>
            <span className="font-mono font-bold text-amber-400">{bFieldTesla.toFixed(2)} T</span>
          </div>
          <input
            type="range"
            min="0.1"
            max="2.0"
            step="0.05"
            value={bFieldTesla}
            onChange={(e) => setBFieldTesla(Number(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1">
            <span>0.2 T (Weak)</span>
            <span>1.2 T (Strong Electromagnet)</span>
            <span>2.0 T (Neodymium)</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-400">{labels.initialSpeed}</span>
            <span className="font-mono font-bold text-sky-400">{initialSpeedRpm} RPM</span>
          </div>
          <input
            type="range"
            min="200"
            max="3000"
            step="100"
            value={initialSpeedRpm}
            onChange={(e) => {
              const val = Number(e.target.value);
              setInitialSpeedRpm(val);
              if (!isBraking) setCurrentSpeedRpm(val);
            }}
            className="w-full accent-sky-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1">
            <span>200 RPM</span>
            <span>1500 RPM (TGV Train Speed)</span>
            <span>3000 RPM</span>
          </div>
        </div>
      </div>
    </div>
  );
};
