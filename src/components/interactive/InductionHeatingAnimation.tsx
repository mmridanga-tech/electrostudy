import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Play, Pause, RotateCcw, Flame, Zap, Shield, Info, Activity } from 'lucide-react';
import { Language } from '../../types';

interface InductionHeatingAnimationProps {
  currentLanguage: Language;
}

type MaterialType = 'STEEL' | 'STAINLESS' | 'COPPER' | 'ALUMINUM';

export const InductionHeatingAnimation: React.FC<InductionHeatingAnimationProps> = ({
  currentLanguage
}) => {
  const [frequencyKhz, setFrequencyKhz] = useState<number>(50); // 1 kHz to 200 kHz
  const [coilCurrentA, setCoilCurrentA] = useState<number>(450); // 100 A to 1000 A
  const [material, setMaterial] = useState<MaterialType>('STEEL');
  const [diameterMm, setDiameterMm] = useState<number>(50); // 20 mm to 80 mm
  const [isHeating, setIsHeating] = useState<boolean>(false);
  const [temperatureC, setTemperatureC] = useState<number>(25); // ambient 25°C
  const [acPhase, setAcPhase] = useState<number>(0);

  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Material physical properties
  const materialProps = useMemo(() => {
    switch (material) {
      case 'STEEL':
        // Mild/Carbon steel: high permeability below Curie temperature (770°C)
        const isBelowCurie = temperatureC < 770;
        return {
          name: { en: 'Carbon Steel (AISI 1045)', hi: 'कार्बन स्टील (AISI 1045)', bn: 'কার্বন স্টিল (AISI 1045)' },
          resistivity: 1.6e-7, // Ohm*m
          relativeMu: isBelowCurie ? 180 : 1.0,
          specificHeat: 480, // J/(kg*K)
          density: 7850, // kg/m^3
          meltingPoint: 1450, // °C
          curieTemp: 770
        };
      case 'STAINLESS':
        return {
          name: { en: 'Austenitic Stainless (304)', hi: 'ऑस्टेनिटिक स्टेनलेस स्टील (304)', bn: 'অস্টেনিটিক স্টেইনলেস স্টিল (304)' },
          resistivity: 7.2e-7,
          relativeMu: 1.02,
          specificHeat: 500,
          density: 8000,
          meltingPoint: 1420,
          curieTemp: null
        };
      case 'COPPER':
        return {
          name: { en: 'Pure Copper (Electrolytic)', hi: 'शुद्ध तांबा (इलेक्ट्रोलाइटिक)', bn: 'বিশুদ্ধ তামা (ইলেক্ট্রোলাইটিক)' },
          resistivity: 1.7e-8,
          relativeMu: 1.0,
          specificHeat: 385,
          density: 8960,
          meltingPoint: 1085,
          curieTemp: null
        };
      case 'ALUMINUM':
        return {
          name: { en: 'Aluminum Alloy (6061)', hi: 'एल्यूमीनियम मिश्र धातु (6061)', bn: 'অ্যালুমিনিয়াম সংকর (6061)' },
          resistivity: 2.8e-8,
          relativeMu: 1.0,
          specificHeat: 900,
          density: 2700,
          meltingPoint: 660,
          curieTemp: null
        };
    }
  }, [material, temperatureC]);

  // Skin depth calculation: delta = sqrt( rho / (pi * f * mu0 * mu_r) ) in meters
  const mu0 = 4 * Math.PI * 1e-7;
  const frequencyHz = frequencyKhz * 1000;
  const skinDepthM = useMemo(() => {
    const denom = Math.PI * frequencyHz * mu0 * materialProps.relativeMu;
    return Math.sqrt(materialProps.resistivity / denom);
  }, [frequencyHz, materialProps.resistivity, materialProps.relativeMu, mu0]);

  const skinDepthMm = skinDepthM * 1000;

  // Power coupling model:
  // P_induced approx proportional to: I_coil^2 * sqrt(pi * f * mu0 * mu_r * rho) * Surface_Area
  const powerWatts = useMemo(() => {
    if (!isHeating) return 0;
    const radiusM = (diameterMm / 2) / 1000;
    const lengthM = 0.15; // 15 cm coil length
    const surfaceArea = 2 * Math.PI * radiusM * lengthM;
    const surfaceResistance = Math.sqrt(Math.PI * frequencyHz * mu0 * materialProps.relativeMu * materialProps.resistivity);
    // Effective surface magnetic field H ~ N * I / L
    const effectiveH = (8 * coilCurrentA) / lengthM;
    const power = 0.5 * surfaceResistance * Math.pow(effectiveH, 2) * surfaceArea * 0.08; // scale factor for realistic demonstration
    return Math.min(power, 45000); // cap at 45 kW
  }, [isHeating, diameterMm, coilCurrentA, frequencyHz, materialProps.relativeMu, materialProps.resistivity, mu0]);

  // Mass of workpiece section in coil:
  const massKg = useMemo(() => {
    const radiusM = (diameterMm / 2) / 1000;
    const volumeM3 = Math.PI * Math.pow(radiusM, 2) * 0.15;
    return volumeM3 * materialProps.density;
  }, [diameterMm, materialProps.density]);

  // Dynamic temperature rise loop
  useEffect(() => {
    const animate = (time: number) => {
      if (lastTimeRef.current !== null) {
        const dt = (time - lastTimeRef.current) / 1000;

        // AC field sinusoidal wave phase
        setAcPhase((prev) => (prev + dt * 6) % (2 * Math.PI));

        if (isHeating) {
          // Heat rate dT/dt = (P_induced - P_cooling) / (mass * specificHeat)
          // Radiation/convection loss: P_loss = h * A * (T - T_amb) + sigma_sb * eps * A * (T^4 - T_amb^4)
          const deltaT = Math.max(0, temperatureC - 25);
          const coolingPower = 15 * deltaT + 0.00000005 * Math.pow(temperatureC + 273, 4) * 0.05;
          const netPower = Math.max(0, powerWatts - coolingPower);
          const heatCapacity = massKg * materialProps.specificHeat;
          const rateDegPerSec = (netPower / heatCapacity) * 1.5;

          setTemperatureC((prev) => {
            const next = prev + rateDegPerSec * dt;
            return Math.min(next, materialProps.meltingPoint + 100);
          });
        } else {
          // Natural passive cooling
          if (temperatureC > 25.5) {
            const deltaT = temperatureC - 25;
            const coolRate = (deltaT * 0.15) + (Math.pow(deltaT / 100, 2) * 0.2);
            setTemperatureC((prev) => Math.max(25, prev - coolRate * dt));
          }
        }
      }

      lastTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      lastTimeRef.current = null;
    };
  }, [isHeating, powerWatts, massKg, materialProps.specificHeat, materialProps.meltingPoint, temperatureC]);

  // Glow color derived from Planck blackbody radiation scale
  const workpieceGlowColor = useMemo(() => {
    if (temperatureC < 450) return '#475569'; // Slate dark cold
    if (temperatureC < 650) return '#991b1b'; // Dark cherry red
    if (temperatureC < 800) return '#dc2626'; // Bright cherry red
    if (temperatureC < 950) return '#ea580c'; // Vibrant orange
    if (temperatureC < 1150) return '#f59e0b'; // Yellow-orange
    if (temperatureC < 1350) return '#fef08a'; // Bright incandescent yellow
    return '#ffffff'; // White heat / molten
  }, [temperatureC]);

  const workpiecePhase = useMemo(() => {
    if (temperatureC >= materialProps.meltingPoint) {
      return { en: 'Molten Liquid Phase', hi: 'द्रव/पिघली हुई अवस्था (Molten)', bn: 'গলিত তরল অবস্থা (Molten)' };
    }
    if (materialProps.curieTemp && temperatureC >= materialProps.curieTemp) {
      return { en: 'Above Curie Point (Paramagnetic)', hi: 'क्यूरी तापमान से ऊपर (अचुंबकीय)', bn: 'কুরি বিন্দুর ওপরে (প্যারাচৌম্বক)' };
    }
    if (temperatureC > 700) {
      return { en: 'Austenitic / Red-Hot Annealing', hi: 'तप्त लाल कठोरीकरण अवस्था', bn: 'উত্তপ্ত লাল দৃঢ়ীকরণ অবস্থা' };
    }
    return { en: 'Solid Metallic Core', hi: 'ठोस धातु पिंड', bn: 'কঠিন ধাতব পিণ্ড' };
  }, [temperatureC, materialProps]);

  const labels = {
    en: {
      title: 'Industrial Induction Heating & Skin Depth Simulator',
      subtitle: 'Analyze high-frequency magnetic coupling, eddy-current Joule heating, and skin depth (δ)',
      frequency: 'Alternating Field Frequency (f):',
      current: 'Coil Excitation Current (I_coil):',
      material: 'Workpiece Metal Material:',
      diameter: 'Billet Diameter (D):',
      skinDepth: 'Theoretical Skin Depth (δ):',
      inducedPower: 'Induced Heating Power:',
      tempDisplay: 'Core Surface Temperature:',
      curieWarning: 'Curie Transition (770°C): Permeability drops (μ_r → 1), increasing skin depth!',
      meltWarning: 'Phase Transition: Metal has reached melting temperature!',
      start: 'Power On Induction Field',
      stop: 'Power Off Field',
      reset: 'Cool to Ambient (25°C)',
      modelNote: 'Educational Simulation Model: Electromagnetic and thermal values are computed for instructional illustration and do not constitute certified furnace design data.',
      presets: 'Heating Presets:'
    },
    hi: {
      title: 'औद्योगिक प्रेरण तापन एवं स्किन डेप्थ सिमुलेटर',
      subtitle: 'उच्च-आवृत्ति चुंबकीय युग्मन, भंवर-धारा जूल तापन एवं स्किन डेप्थ (δ) का विश्लेषण',
      frequency: 'प्रत्यावर्ती क्षेत्र आवृत्ति (f):',
      current: 'कॉइल उत्तेजना धारा (I_coil):',
      material: 'कार्यवस्तु (वर्कपीस) धातु:',
      diameter: 'बिलेट व्यास (D):',
      skinDepth: 'सैद्धांतिक स्किन डेप्थ (δ):',
      inducedPower: 'प्रेरित तापन शक्ति:',
      tempDisplay: 'सतह का तापमान:',
      curieWarning: 'क्यूरी बिंदु (770°C): चुंबकशीलता घटकर μ_r → 1 हो जाती है, जिससे स्किन डेप्थ बढ़ जाती है!',
      meltWarning: 'अवस्था परिवर्तन: धातु गलनांक पर पहुंच चुकी है!',
      start: 'प्रेरण क्षेत्र चालू करें',
      stop: 'क्षेत्र बंद करें',
      reset: 'सामान्य तापमान (25°C) पर ठंडा करें',
      modelNote: 'शैक्षणिक सिमुलेशन मॉडल: विद्युत-चुंबकीय एवं तापीय मान केवल शैक्षणिक प्रदर्शन हेतु हैं।',
      presets: 'तापन प्रीसेट्स:'
    },
    bn: {
      title: 'শিল্প আবেশ উত্তাপন ও স্কিন ডেপথ সিমুলেটর',
      subtitle: 'উচ্চ-কম্পাঙ্ক চৌম্বক সংযোগ, এডি-কারেন্ট জুল তাপ ও স্কিন ডেপথ (δ) বিশ্লেষণ',
      frequency: 'পরিবর্তনশীল চৌম্বক কম্পাঙ্ক (f):',
      current: 'কয়েল কারেন্ট (I_coil):',
      material: 'ধাতব ওয়ার্কপিস উপাদান:',
      diameter: 'বিলেটের ব্যাস (D):',
      skinDepth: 'তাত্ত্বিক স্কিন ডেপথ (δ):',
      inducedPower: 'আবিষ্ট উত্তাপন ক্ষমতা:',
      tempDisplay: 'পৃষ্ঠের তাপমাত্রা:',
      curieWarning: 'কুরি তাপমাত্রা (৭৭০°C): ভেদ্যতা হ্রাস পেয়ে μ_r → ১ হয়, ফলে স্কিন ডেপথ বাড়ে!',
      meltWarning: 'অবস্থা পরিবর্তন: ধাতু গলনাঙ্কে পৌঁছে গেছে!',
      start: 'ইন্ডাকশন ফিল্ড চালু করুন',
      stop: 'ফিল্ড বন্ধ করুন',
      reset: 'স্বাভাবিক তাপমাত্রায় (২৫°C) আনুন',
      modelNote: 'শিক্ষামূলক সিমুলেশন মডেল: প্রদর্শিত মানসমূহ নীতিগত উপলব্ধির জন্য প্রণীত।',
      presets: 'উত্তাপন প্রিসেট:'
    }
  }[currentLanguage];

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-xl p-4 sm:p-6 border border-slate-700 shadow-xl">
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-slate-700 pb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-amber-400 flex items-center gap-2">
            <Flame className="w-6 h-6 text-orange-500 animate-pulse" />
            {labels.title}
          </h2>
          <p className="text-sm text-slate-400 mt-1">{labels.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsHeating(!isHeating)}
            className={`px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-all shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 ${
              isHeating
                ? 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white focus:ring-emerald-500'
            }`}
            aria-label={isHeating ? labels.stop : labels.start}
          >
            {isHeating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isHeating ? labels.stop : labels.start}
          </button>
          <button
            onClick={() => {
              setIsHeating(false);
              setTemperatureC(25);
            }}
            className="px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-200 transition-colors focus:ring-2 focus:ring-amber-400"
            aria-label={labels.reset}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Preset Quick Buttons */}
      <div className="mb-6 flex flex-wrap items-center gap-2 bg-slate-800/80 p-3 rounded-lg border border-slate-700">
        <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">{labels.presets}</span>
        <button
          onClick={() => {
            setFrequencyKhz(2);
            setCoilCurrentA(800);
            setMaterial('STEEL');
            setDiameterMm(65);
          }}
          className="text-xs px-2.5 py-1 bg-slate-700 hover:bg-slate-600 rounded text-slate-200 border border-slate-600 transition-colors"
        >
          {currentLanguage === 'en' ? 'Deep Melting (2 kHz, Steel)' : currentLanguage === 'hi' ? 'गहन गलन (2 kHz, स्टील)' : 'গভীর গলন (২ kHz, স্টিল)'}
        </button>
        <button
          onClick={() => {
            setFrequencyKhz(20);
            setCoilCurrentA(500);
            setMaterial('STEEL');
            setDiameterMm(45);
          }}
          className="text-xs px-2.5 py-1 bg-slate-700 hover:bg-slate-600 rounded text-slate-200 border border-slate-600 transition-colors"
        >
          {currentLanguage === 'en' ? 'Billet Forging (20 kHz)' : currentLanguage === 'hi' ? 'बिलेट फोर्जिंग (20 kHz)' : 'বিলেট ফোরজিং (২০ kHz)'}
        </button>
        <button
          onClick={() => {
            setFrequencyKhz(150);
            setCoilCurrentA(400);
            setMaterial('STEEL');
            setDiameterMm(35);
          }}
          className="text-xs px-2.5 py-1 bg-slate-700 hover:bg-slate-600 rounded text-slate-200 border border-slate-600 transition-colors"
        >
          {currentLanguage === 'en' ? 'Surface Hardening (150 kHz)' : currentLanguage === 'hi' ? 'सतह कठोरीकरण (150 kHz)' : 'পৃষ্ঠ দৃঢ়ীকরণ (১৫০ kHz)'}
        </button>
      </div>

      {/* Main Simulation Viewport: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        {/* Left: 2D & Radial SVG Visualizer */}
        <div className="lg:col-span-7 bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center justify-center relative min-h-[360px]">
          {/* Status Overlay Badge */}
          <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur border border-slate-700 px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                isHeating ? 'bg-orange-500 animate-ping' : 'bg-slate-500'
              }`}
            />
            <span className="font-mono font-semibold text-slate-300">
              {workpiecePhase[currentLanguage]}
            </span>
          </div>

          <svg viewBox="0 0 460 300" className="w-full max-w-lg h-auto">
            <defs>
              <radialGradient id="heatGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={workpieceGlowColor} stopOpacity={temperatureC > 400 ? '0.95' : '0.4'} />
                <stop offset="70%" stopColor={workpieceGlowColor} stopOpacity={temperatureC > 400 ? '0.7' : '0.2'} />
                <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="coilCopper" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#b45309" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#78350f" />
              </linearGradient>
            </defs>

            {/* Alternating Magnetic Flux Lines (animated with acPhase) */}
            {isHeating && (
              <g stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="6 4" fill="none" opacity={0.35 + 0.3 * Math.abs(Math.sin(acPhase))}>
                <path d="M 60 40 C 60 10, 240 10, 240 40 L 240 260 C 240 290, 60 290, 60 260 Z" />
                <path d="M 40 50 C 40 0, 260 0, 260 50 L 260 250 C 260 300, 40 300, 40 250 Z" />
                <path d="M 80 40 L 80 260" stroke="#0ea5e9" strokeWidth="2" />
                <path d="M 220 40 L 220 260" stroke="#0ea5e9" strokeWidth="2" />
              </g>
            )}

            {/* Longitudinal View of Workpiece Cylinder */}
            <g transform="translate(150, 150)">
              {/* Thermal Glow Halo */}
              {temperatureC > 500 && (
                <circle cx="0" cy="0" r={diameterMm * 0.9} fill="url(#heatGlow)" className="animate-pulse" />
              )}

              {/* Workpiece Cylinder Body */}
              <rect
                x={-diameterMm / 2}
                y="-100"
                width={diameterMm}
                height="200"
                rx="6"
                fill={workpieceGlowColor}
                stroke="#64748b"
                strokeWidth="1.5"
                className="transition-colors duration-300"
              />

              {/* Skin Depth Shading Overlay (shows depth of active current penetration) */}
              <rect
                x={-diameterMm / 2}
                y="-100"
                width={Math.min(diameterMm / 2, Math.max(2, skinDepthMm * 2))}
                height="200"
                fill="#f97316"
                opacity={isHeating ? 0.45 : 0.15}
              />
              <rect
                x={diameterMm / 2 - Math.min(diameterMm / 2, Math.max(2, skinDepthMm * 2))}
                y="-100"
                width={Math.min(diameterMm / 2, Math.max(2, skinDepthMm * 2))}
                height="200"
                fill="#f97316"
                opacity={isHeating ? 0.45 : 0.15}
              />

              {/* Induced Eddy Current Vortex Loops */}
              {isHeating && (
                <g stroke="#fef08a" strokeWidth="1.5" fill="none" opacity="0.8">
                  <ellipse cx="0" cy="-60" rx={diameterMm * 0.42} ry="10" strokeDasharray="4 2" />
                  <ellipse cx="0" cy="-20" rx={diameterMm * 0.42} ry="10" strokeDasharray="4 2" />
                  <ellipse cx="0" cy="20" rx={diameterMm * 0.42} ry="10" strokeDasharray="4 2" />
                  <ellipse cx="0" cy="60" rx={diameterMm * 0.42} ry="10" strokeDasharray="4 2" />
                </g>
              )}

              {/* Workpiece Label */}
              <text x="0" y="5" fill={temperatureC > 750 ? '#0f172a' : '#f8fafc'} fontSize="11" fontWeight="bold" textAnchor="middle">
                {materialProps.name[currentLanguage].split(' ')[0]}
              </text>
            </g>

            {/* Helical Induction Copper Coil Turns (C-section slices) */}
            <g transform="translate(150, 150)">
              {[-80, -40, 0, 40, 80].map((yOffset, i) => (
                <g key={i}>
                  {/* Left Coil Turn */}
                  <rect
                    x={-diameterMm / 2 - 24}
                    y={yOffset - 10}
                    width="14"
                    height="20"
                    rx="5"
                    fill="url(#coilCopper)"
                    stroke="#d97706"
                    strokeWidth="1.5"
                  />
                  {/* Right Coil Turn */}
                  <rect
                    x={diameterMm / 2 + 10}
                    y={yOffset - 10}
                    width="14"
                    height="20"
                    rx="5"
                    fill="url(#coilCopper)"
                    stroke="#d97706"
                    strokeWidth="1.5"
                  />
                </g>
              ))}
            </g>

            {/* Cross-Section Radial Inset (Current Density Profile) */}
            <g transform="translate(365, 150)">
              <rect x="-80" y="-120" width="160" height="240" rx="8" fill="#0b1329" stroke="#1e293b" />
              <text x="0" y="-100" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">
                RADIAL CURRENT J(r)
              </text>
              <text x="0" y="-86" fill="#94a3b8" fontSize="8" textAnchor="middle">
                Cross-Section Profile
              </text>

              {/* Circular Billet Slice */}
              <circle
                cx="0"
                cy="0"
                r="50"
                fill={workpieceGlowColor}
                stroke="#64748b"
                strokeWidth="2"
                className="transition-colors duration-300"
              />

              {/* Active Annular Skin Ring */}
              <circle
                cx="0"
                cy="0"
                r={Math.max(5, 50 - skinDepthMm * (50 / (diameterMm / 2)))}
                fill="#0f172a"
                opacity={0.8}
                stroke="#f97316"
                strokeWidth="2"
                strokeDasharray="3 2"
              />

              <text x="0" y="3" fill="#f8fafc" fontSize="9" fontWeight="bold" textAnchor="middle">
                Cold Core
              </text>

              {/* Skin Depth dimension callout */}
              <line x1="50" y1="0" x2={Math.max(10, 50 - skinDepthMm * (50 / (diameterMm / 2)))} y2="0" stroke="#38bdf8" strokeWidth="2.5" />
              <text x="0" y="70" fill="#f59e0b" fontSize="10.5" fontWeight="bold" textAnchor="middle">
                δ = {skinDepthMm < 1 ? skinDepthMm.toFixed(3) : skinDepthMm.toFixed(2)} mm
              </text>
              <text x="0" y="85" fill="#94a3b8" fontSize="8" textAnchor="middle">
                Penetration Depth
              </text>
              <text x="0" y="100" fill="#34d399" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                {skinDepthMm < 2 ? 'High Surface Heating' : skinDepthMm < 8 ? 'Moderate Penetration' : 'Through-Heating / Melt'}
              </text>
            </g>
          </svg>

          {/* Model Disclaimer Notice */}
          <div className="w-full mt-3 p-2 bg-slate-900 border border-slate-700/60 rounded text-center">
            <p className="text-[11px] text-amber-300/90 font-mono">
              <Info className="w-3.5 h-3.5 inline mr-1 text-amber-400" />
              {labels.modelNote}
            </p>
          </div>
        </div>

        {/* Right: Metrics & Gauge Dashboard */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Temperature & Power Panel */}
          <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {labels.tempDisplay}
              </span>
              <Activity className="w-4 h-4 text-orange-400" />
            </div>
            <div className="my-2 flex items-baseline gap-3">
              <span
                className="text-4xl sm:text-5xl font-extrabold font-mono tracking-tight"
                style={{ color: workpieceGlowColor }}
              >
                {Math.round(temperatureC)}°C
              </span>
              <span className="text-sm text-slate-400">
                ({Math.round((temperatureC * 9) / 5 + 32)}°F)
              </span>
            </div>

            {/* Temperature Progress Bar to Melting Point */}
            <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden border border-slate-700">
              <div
                className="h-full transition-all duration-300 rounded-full"
                style={{
                  width: `${Math.min(100, (temperatureC / materialProps.meltingPoint) * 100)}%`,
                  backgroundColor: workpieceGlowColor
                }}
              />
            </div>
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>25°C (Ambient)</span>
              <span>Melt: {materialProps.meltingPoint}°C</span>
            </div>

            {/* Warnings */}
            {materialProps.curieTemp && temperatureC >= materialProps.curieTemp && (
              <div className="mt-2 p-2 bg-amber-950/80 border border-amber-600 rounded text-xs text-amber-200">
                ⚠️ {labels.curieWarning}
              </div>
            )}
            {temperatureC >= materialProps.meltingPoint && (
              <div className="mt-2 p-2 bg-red-950/90 border border-red-600 rounded text-xs text-red-200 animate-pulse font-bold">
                🔥 {labels.meltWarning}
              </div>
            )}
          </div>

          {/* Real-time Readouts */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
              <span className="text-[11px] text-slate-400 block">{labels.skinDepth}</span>
              <span className="text-lg font-bold font-mono text-cyan-300">
                {skinDepthMm < 1 ? skinDepthMm.toFixed(3) : skinDepthMm.toFixed(2)} mm
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">
                δ = √(ρ / πfμ)
              </span>
            </div>
            <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
              <span className="text-[11px] text-slate-400 block">{labels.inducedPower}</span>
              <span className="text-lg font-bold font-mono text-orange-400">
                {(powerWatts / 1000).toFixed(2)} kW
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">
                P = I²_eddy · R_workpiece
              </span>
            </div>
          </div>

          {/* Interactive Controls */}
          <div className="bg-slate-800/70 p-4 rounded-xl border border-slate-700 space-y-4">
            {/* Frequency Control */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-slate-300">{labels.frequency}</span>
                <span className="font-mono text-amber-400">{frequencyKhz} kHz</span>
              </div>
              <input
                type="range"
                min="1"
                max="200"
                step="1"
                value={frequencyKhz}
                onChange={(e) => setFrequencyKhz(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                aria-label={labels.frequency}
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-0.5">
                <span>1 kHz (Melt)</span>
                <span>50 kHz (Forging)</span>
                <span>200 kHz (Case Hardening)</span>
              </div>
            </div>

            {/* Coil Current Control */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-slate-300">{labels.current}</span>
                <span className="font-mono text-amber-400">{coilCurrentA} A</span>
              </div>
              <input
                type="range"
                min="100"
                max="1000"
                step="25"
                value={coilCurrentA}
                onChange={(e) => setCoilCurrentA(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                aria-label={labels.current}
              />
            </div>

            {/* Workpiece Diameter Control */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-slate-300">{labels.diameter}</span>
                <span className="font-mono text-cyan-300">Ø {diameterMm} mm</span>
              </div>
              <input
                type="range"
                min="20"
                max="80"
                step="5"
                value={diameterMm}
                onChange={(e) => setDiameterMm(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label={labels.diameter}
              />
            </div>

            {/* Material Selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {labels.material}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(['STEEL', 'STAINLESS', 'COPPER', 'ALUMINUM'] as MaterialType[]).map((mat) => (
                  <button
                    key={mat}
                    onClick={() => setMaterial(mat)}
                    className={`text-xs py-1.5 px-2 rounded-lg font-medium border transition-colors ${
                      material === mat
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold'
                        : 'bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {mat === 'STEEL' ? 'Carbon Steel' : mat === 'STAINLESS' ? 'Stainless 304' : mat === 'COPPER' ? 'Pure Copper' : 'Aluminum 6061'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
