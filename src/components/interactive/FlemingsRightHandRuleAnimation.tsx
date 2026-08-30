import React, { useState, useId } from 'react';
import { Language } from '../../types';
import { Compass, RotateCw, Play, Pause, Zap, ArrowUpRight, CheckCircle2, AlertTriangle, Eye } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const FlemingsRightHandRuleAnimation: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const controlId = useId();

  // Simulation state
  const [bFieldT, setBFieldT] = useState<number>(0.8); // 0.1 to 2.0 Tesla
  const [conductorLengthM, setConductorLengthM] = useState<number>(0.25); // 0.05 to 0.50 meters
  const [velocityMps, setVelocityMps] = useState<number>(4.0); // 0.5 to 15.0 m/s
  const [angleDeg, setAngleDeg] = useState<number>(90); // 0 to 360 degrees
  const [fieldDirection, setFieldDirection] = useState<'left-to-right' | 'right-to-left'>('left-to-right');
  const [ruleMode, setRuleMode] = useState<'right-hand-generator' | 'left-hand-motor'>('right-hand-generator');

  // Math: e = B * l * v * sin(theta)
  const angleRad = (angleDeg * Math.PI) / 180;
  const sinVal = Math.sin(angleRad);
  const fieldSign = fieldDirection === 'left-to-right' ? 1 : -1;
  const peakEmf = bFieldT * conductorLengthM * velocityMps;
  const instantaneousEmf = peakEmf * sinVal * fieldSign;

  // Conductor load resistance and resulting current
  const loadResistance = 2.0; // Ohms
  const inducedCurrentA = instantaneousEmf / loadResistance;

  // Mechanical Back Force (Lorentz opposing force): F = B * I * l
  const opposingForceN = Math.abs(bFieldT * inducedCurrentA * conductorLengthM);
  const electricalPowerW = Math.abs(instantaneousEmf * inducedCurrentA);

  const t = {
    title: {
      en: "Fleming's Right-Hand Rule & Motional EMF Simulator",
      hi: 'फ्लेमिंग का दायां हाथ नियम एवं गतिक ईएमएफ सिम्युलेटर',
      bn: 'ফ্লেমিংয়ের ডানহস্ত নিয়ম ও গতিশীল ইএমএফ সিমুলেটর'
    },
    subtitle: {
      en: 'Vector Cross Product (v × B), dynamic angle cut, and generator action dynamics',
      hi: 'सदिश गुणन (v × B), चुंबकीय रेखाओं का छेदन कोण एवं जनरेटर क्रिया गतिकी',
      bn: 'ভেক্টর গুণন (v × B), চৌম্বক রেখা ছেদন কোণ ও জেনারেটর ক্রিয়া বিশ্লেষণ'
    },
    generatorMode: {
      en: "Right-Hand Rule (Generator Action / Motional EMF)",
      hi: 'दायां हाथ नियम (जनरेटर क्रिया / प्रेरित ईएमएफ)',
      bn: 'ডানহস্ত নিয়ম (জেনারেটর ক্রিয়া / আবিষ্ট ইএমএফ)'
    },
    motorMode: {
      en: "Left-Hand Rule Comparison (Motor Action / Force)",
      hi: 'बायां हाथ नियम तुलना (मोटर क्रिया / यांत्रिक बल)',
      bn: 'বামহস্ত নিয়ম তুলনা (মোটর ক্রিয়া / যান্ত্রিক বল)'
    },
    thumb: {
      en: 'Thumb (Motion / Velocity v)',
      hi: 'अंगूठा (चालक की गति / वेग v)',
      bn: 'বৃদ্ধাঙ্গুলি (পরিবাহীর গতি / বেগ v)'
    },
    index: {
      en: 'Index Finger (Magnetic Field B)',
      hi: 'तर्जनी (चुंबकीय क्षेत्र B)',
      bn: 'তর্জনী (চৌম্বক ক্ষেত্র B)'
    },
    middle: {
      en: 'Middle Finger (Induced Current I / EMF e)',
      hi: 'मध्यमा (प्रेरित धारा I / ईएमएफ e)',
      bn: 'মধ্যমা (আবিষ্ট প্রবাহ I / ইএমএফ e)'
    },
    angleLabel: {
      en: 'Angle between v and B (θ):',
      hi: 'वेग v एवं क्षेत्र B के बीच कोण (θ):',
      bn: 'বেগ v ও চৌম্বকক্ষেত্র B-এর মধ্যবর্তী কোণ (θ):'
    },
    bFieldLabel: {
      en: 'Flux Density (B):',
      hi: 'फ्लक्स घनत्व (B):',
      bn: 'ফ্লাক্স ঘনত্ব (B):'
    },
    lengthLabel: {
      en: 'Active Conductor Length (l):',
      hi: 'चालक की प्रभावी लंबाई (l):',
      bn: 'কার্যকর পরিবাহীর দৈর্ঘ্য (l):'
    },
    speedLabel: {
      en: 'Cutting Velocity (v):',
      hi: 'छेदन वेग (v):',
      bn: 'ছেদন বেগ (v):'
    },
    fieldDirLabel: {
      en: 'Field Orientation (N → S):',
      hi: 'चुंबकीय क्षेत्र की दिशा:',
      bn: 'চৌম্বক ক্ষেত্রের অভিমুখ:'
    },
    lr: { en: 'Left to Right (N → S)', hi: 'बाएं से दाएं (N → S)', bn: 'বাম থেকে ডানে (N → S)' },
    rl: { en: 'Right to Left (S ← N)', hi: 'दाएं से बाएं (S ← N)', bn: 'ডান থেকে বামে (S ← N)' },
    emfResult: {
      en: 'Induced Motional EMF (e = B l v sinθ):',
      hi: 'प्रेरित गतिक ईएमएफ (e = B l v sinθ):',
      bn: 'আবিষ্ট গতিশীল ইএমএফ (e = B l v sinθ):'
    },
    peakEmfLabel: {
      en: 'Peak Maximum EMF (at 90°):',
      hi: 'अधिकतम शिखर ईएमएफ (90° पर):',
      bn: 'সর্বোচ্চ শিখর ইএমএফ (৯০° কোণে):'
    },
    opposingForceLabel: {
      en: 'Lenz Back-Force on Conductor:',
      hi: 'चालक पर विरोधी लेंज बल:',
      bn: 'পরিবাহীতে বিপরীত লেনজ বল:'
    },
    presetsTitle: {
      en: 'Key Angle Case Studies:',
      hi: 'प्रमुख कोण स्थितियां:',
      bn: 'গুরুত্বপূর্ণ কোণ বিশ্লেষণ:'
    }
  };

  // Angle preset click handler
  const setPresetAngle = (deg: number) => {
    setAngleDeg(deg);
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-700/70 rounded-xl p-4 sm:p-6 shadow-2xl text-slate-100 font-sans my-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg">
              <Compass className="w-5 h-5" />
            </span>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
              {t.title[lang]}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {t.subtitle[lang]}
          </p>
        </div>

        {/* Rule Selector Toggle */}
        <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setRuleMode('right-hand-generator')}
            aria-pressed={ruleMode === 'right-hand-generator'}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              ruleMode === 'right-hand-generator'
                ? 'bg-emerald-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Right-Hand (Generator)
          </button>
          <button
            type="button"
            onClick={() => setRuleMode('left-hand-motor')}
            aria-pressed={ruleMode === 'left-hand-motor'}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              ruleMode === 'left-hand-motor'
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Left-Hand (Motor)
          </button>
        </div>
      </div>

      {/* Main Visual Stage: 3D Vector Representation + Conductor Gap */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-6">
        {/* SVG Graphic (7 Cols) */}
        <div className="lg:col-span-7 bg-slate-950 rounded-xl border border-slate-800 p-3 sm:p-4 flex flex-col items-center justify-center relative overflow-hidden">
          <svg
            viewBox="-160 -120 320 240"
            className="w-full h-56 sm:h-64 select-none"
            role="img"
            aria-label="Fleming Right-Hand Rule 3D vector diagram and conductor moving in magnetic field"
          >
            <defs>
              {/* Arrowhead Markers */}
              <marker id="arrowB" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M 0 0 L 6 3 L 0 6 z" fill="#38bdf8" />
              </marker>
              <marker id="arrowV" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M 0 0 L 6 3 L 0 6 z" fill="#fbbf24" />
              </marker>
              <marker id="arrowI" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M 0 0 L 6 3 L 0 6 z" fill="#34d399" />
              </marker>

              <linearGradient id="poleNGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#b91c1c" />
              </linearGradient>
              <linearGradient id="poleSGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1d4ed8" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
            </defs>

            {/* Permanent Magnet Poles */}
            {/* Left Pole */}
            <rect
              x="-150"
              y="-70"
              width="45"
              height="140"
              rx="4"
              fill={fieldDirection === 'left-to-right' ? 'url(#poleNGrad)' : 'url(#poleSGrad)'}
              stroke="#0f172a"
              strokeWidth="2"
            />
            <text x="-128" y="8" fill="#ffffff" fontWeight="bold" fontSize="22" textAnchor="middle">
              {fieldDirection === 'left-to-right' ? 'N' : 'S'}
            </text>

            {/* Right Pole */}
            <rect
              x="105"
              y="-70"
              width="45"
              height="140"
              rx="4"
              fill={fieldDirection === 'left-to-right' ? 'url(#poleSGrad)' : 'url(#poleNGrad)'}
              stroke="#0f172a"
              strokeWidth="2"
            />
            <text x="127" y="8" fill="#ffffff" fontWeight="bold" fontSize="22" textAnchor="middle">
              {fieldDirection === 'left-to-right' ? 'S' : 'N'}
            </text>

            {/* Magnetic Field Lines B (Cyan) */}
            {[-45, -25, -5, 15, 35, 55].map((yPos, i) => {
              const x1 = fieldDirection === 'left-to-right' ? -100 : 100;
              const x2 = fieldDirection === 'left-to-right' ? 100 : -100;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={yPos}
                  x2={x2}
                  y2={yPos}
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  markerEnd="url(#arrowB)"
                  opacity="0.75"
                />
              );
            })}

            {/* Conductor Center Coordinate Origin */}
            <g transform="translate(0, 5)">
              {/* Conductor Rod (Cross-Section Cylinder) */}
              <circle cx="0" cy="0" r="16" fill="#475569" stroke="#cbd5e1" strokeWidth="2.5" />

              {/* Vector 1: Magnetic Field B (Along X axis) */}
              <line
                x1="0"
                y1="0"
                x2={fieldDirection === 'left-to-right' ? 65 : -65}
                y2="0"
                stroke="#38bdf8"
                strokeWidth="3.5"
                markerEnd="url(#arrowB)"
              />
              <text
                x={fieldDirection === 'left-to-right' ? 75 : -75}
                y="-6"
                fill="#38bdf8"
                fontWeight="bold"
                fontSize="12"
                textAnchor="middle"
              >
                B ({bFieldT}T)
              </text>

              {/* Vector 2: Velocity Vector v (Rotated at angle θ) */}
              {(() => {
                const vx = Math.cos(angleRad) * 70;
                const vy = -Math.sin(angleRad) * 70; // SVG Y is inverted
                return (
                  <g>
                    <line
                      x1="0"
                      y1="0"
                      x2={vx}
                      y2={vy}
                      stroke="#fbbf24"
                      strokeWidth="3.5"
                      markerEnd="url(#arrowV)"
                    />
                    <text
                      x={vx * 1.15}
                      y={vy * 1.15}
                      fill="#fbbf24"
                      fontWeight="bold"
                      fontSize="12"
                      textAnchor="middle"
                    >
                      v ({velocityMps} m/s)
                    </text>

                    {/* Angle Arc Indicator */}
                    <path
                      d={`M 25 0 A 25 25 0 ${angleDeg > 180 ? 1 : 0} 0 ${Math.cos(angleRad) * 25} ${-Math.sin(angleRad) * 25}`}
                      fill="none"
                      stroke="#fbbf24"
                      strokeWidth="1.5"
                      strokeDasharray="2 2"
                    />
                    <text
                      x={Math.cos(angleRad / 2) * 36}
                      y={-Math.sin(angleRad / 2) * 36}
                      fill="#fef08a"
                      fontSize="10"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      {angleDeg}°
                    </text>
                  </g>
                );
              })()}

              {/* Conductor Current Indicator (Middle Finger Direction) */}
              {/* Dot = Coming Out of Screen, Cross = Going Into Screen */}
              {Math.abs(instantaneousEmf) > 0.01 ? (
                instantaneousEmf > 0 ? (
                  // Dot (Out of page)
                  <g>
                    <circle cx="0" cy="0" r="6" fill="#34d399" />
                    <text x="0" y="26" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">
                      ⊙ Out of Page (+I)
                    </text>
                  </g>
                ) : (
                  // Cross (Into page)
                  <g>
                    <line x1="-7" y1="-7" x2="7" y2="7" stroke="#f87171" strokeWidth="3" />
                    <line x1="7" y1="-7" x2="-7" y2="7" stroke="#f87171" strokeWidth="3" />
                    <text x="0" y="26" fill="#f87171" fontSize="11" fontWeight="bold" textAnchor="middle">
                      ⊗ Into Page (-I)
                    </text>
                  </g>
                )
              ) : (
                <text x="0" y="26" fill="#94a3b8" fontSize="10" fontWeight="bold" textAnchor="middle">
                  Zero Induced Current (e = 0)
                </text>
              )}
            </g>
          </svg>

          {/* Hand Rule Legend Pills */}
          <div className="grid grid-cols-3 gap-2 w-full mt-2 text-[11px]">
            <div className="bg-amber-950/40 border border-amber-800/60 rounded-lg p-2 text-center text-amber-300">
              <span className="block font-bold">1. Thumb (अंगूठा)</span>
              <span className="text-[10px] text-amber-200">Motion Vector (v)</span>
            </div>
            <div className="bg-cyan-950/40 border border-cyan-800/60 rounded-lg p-2 text-center text-cyan-300">
              <span className="block font-bold">2. Forefinger (तर्जनी)</span>
              <span className="text-[10px] text-cyan-200">Magnetic Field (B)</span>
            </div>
            <div className="bg-emerald-950/40 border border-emerald-800/60 rounded-lg p-2 text-center text-emerald-300">
              <span className="block font-bold">3. Middle Finger (मध्यमा)</span>
              <span className="text-[10px] text-emerald-200">Induced Current (I)</span>
            </div>
          </div>
        </div>

        {/* Live Calculation & Math Dashboard (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-3 bg-slate-950 rounded-xl border border-slate-800 p-4 text-xs">
          <div>
            <span className="text-slate-400 uppercase tracking-wider font-semibold text-[10px] block mb-2">
              Instantaneous Vector Cross Calculation
            </span>

            {/* Formula box */}
            <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 mb-3 font-mono">
              <div className="text-emerald-400 font-bold text-sm mb-1">
                e = B · l · v · sin(θ)
              </div>
              <div className="text-slate-300 text-[11px] leading-relaxed">
                e = ({bFieldT.toFixed(2)} T) × ({conductorLengthM.toFixed(2)} m) × ({velocityMps.toFixed(1)} m/s) × sin({angleDeg}°)
              </div>
              <div className="text-slate-400 text-[10px] mt-1">
                sin({angleDeg}°) = {sinVal.toFixed(4)}
              </div>
            </div>

            {/* Metric Displays */}
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-300 font-medium">{t.emfResult[lang]}</span>
                <span className={`font-mono text-base font-bold ${Math.abs(instantaneousEmf) > 0.05 ? 'text-emerald-400' : 'text-slate-400'}`}>
                  {instantaneousEmf.toFixed(3)} V
                </span>
              </div>

              <div className="flex justify-between items-center p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-300 font-medium">{t.peakEmfLabel[lang]}</span>
                <span className="font-mono text-sm font-bold text-cyan-400">
                  {peakEmf.toFixed(3)} V
                </span>
              </div>

              <div className="flex justify-between items-center p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-300 font-medium">{t.opposingForceLabel[lang]}</span>
                <span className="font-mono text-sm font-bold text-amber-400">
                  {opposingForceN.toFixed(3)} N
                </span>
              </div>
            </div>
          </div>

          {/* Key Angle Preset Buttons */}
          <div className="mt-3 pt-3 border-t border-slate-800">
            <span className="text-slate-400 font-semibold block mb-2">{t.presetsTitle[lang]}</span>
            <div className="grid grid-cols-4 gap-1.5">
              {[
                { deg: 0, label: '0° (Parallel)' },
                { deg: 90, label: '90° (Max Peak)' },
                { deg: 180, label: '180° (Zero)' },
                { deg: 270, label: '270° (-Peak)' }
              ].map(({ deg, label }) => (
                <button
                  key={deg}
                  type="button"
                  onClick={() => setPresetAngle(deg)}
                  className={`py-1.5 px-1 rounded text-center text-[10px] font-bold transition-all ${
                    angleDeg === deg
                      ? 'bg-cyan-600 text-white shadow'
                      : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Control Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs">
        {/* Angle Slider */}
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-center text-slate-300">
            <label htmlFor={`${controlId}-angle`} className="font-semibold">{t.angleLabel[lang]}</label>
            <span className="font-mono text-amber-400 font-bold">{angleDeg}°</span>
          </div>
          <input
            id={`${controlId}-angle`}
            type="range"
            min="0"
            max="360"
            step="5"
            value={angleDeg}
            onChange={(e) => setAngleDeg(parseInt(e.target.value, 10))}
            className="w-full accent-amber-500 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>0°</span>
            <span>90° (Max)</span>
            <span>180°</span>
            <span>360°</span>
          </div>
        </div>

        {/* Magnetic Field Slider */}
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-center text-slate-300">
            <label htmlFor={`${controlId}-bfield`} className="font-semibold">{t.bFieldLabel[lang]}</label>
            <span className="font-mono text-cyan-400 font-bold">{bFieldT.toFixed(2)} T</span>
          </div>
          <input
            id={`${controlId}-bfield`}
            type="range"
            min="0.1"
            max="2.0"
            step="0.1"
            value={bFieldT}
            onChange={(e) => setBFieldT(parseFloat(e.target.value))}
            className="w-full accent-cyan-500 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>0.1 T</span>
            <span>2.0 T</span>
          </div>
        </div>

        {/* Active Conductor Length Slider */}
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-center text-slate-300">
            <label htmlFor={`${controlId}-length`} className="font-semibold">{t.lengthLabel[lang]}</label>
            <span className="font-mono text-emerald-400 font-bold">{(conductorLengthM * 100).toFixed(0)} cm</span>
          </div>
          <input
            id={`${controlId}-length`}
            type="range"
            min="0.05"
            max="0.50"
            step="0.05"
            value={conductorLengthM}
            onChange={(e) => setConductorLengthM(parseFloat(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>5 cm</span>
            <span>50 cm</span>
          </div>
        </div>

        {/* Speed Slider */}
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-center text-slate-300">
            <label htmlFor={`${controlId}-speed`} className="font-semibold">{t.speedLabel[lang]}</label>
            <span className="font-mono text-violet-400 font-bold">{velocityMps.toFixed(1)} m/s</span>
          </div>
          <input
            id={`${controlId}-speed`}
            type="range"
            min="0.5"
            max="15.0"
            step="0.5"
            value={velocityMps}
            onChange={(e) => setVelocityMps(parseFloat(e.target.value))}
            className="w-full accent-violet-500 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>0.5 m/s</span>
            <span>15.0 m/s</span>
          </div>
        </div>
      </div>
    </div>
  );
};
