import React, { useState, useMemo } from 'react';
import { Sliders, RefreshCw, Layers, ShieldCheck, Activity, Info, Zap } from 'lucide-react';
import { Language } from '../../types';

interface SkinProximityEffectAnimationProps {
  currentLanguage: Language;
}

export const SkinProximityEffectAnimation: React.FC<SkinProximityEffectAnimationProps> = ({
  currentLanguage
}) => {
  const [frequencyKhz, setFrequencyKhz] = useState<number>(50); // kHz
  const [wireRadiusMm, setWireRadiusMm] = useState<number>(5); // 5 mm radius = 10 mm diameter
  const [conductorMaterial, setConductorMaterial] = useState<'COPPER' | 'ALUMINUM' | 'IRON'>('COPPER');
  const [showProximity, setShowProximity] = useState<boolean>(false);
  const [proximityDirection, setProximityDirection] = useState<'OPPOSING' | 'PARALLEL'>('OPPOSING');

  // Material properties
  // Copper: sigma = 5.8e7 S/m, mu_r = 1
  // Aluminum: sigma = 3.5e7 S/m, mu_r = 1
  // Iron: sigma = 1.0e7 S/m, mu_r = 300
  const materialProps = useMemo(() => {
    switch (conductorMaterial) {
      case 'COPPER':
        return { sigma: 5.8e7, mu_r: 1, name: 'Copper (Cu)' };
      case 'ALUMINUM':
        return { sigma: 3.5e7, mu_r: 1, name: 'Aluminum (Al)' };
      case 'IRON':
        return { sigma: 1.0e7, mu_r: 300, name: 'Iron / Carbon Steel (Fe)' };
      default:
        return { sigma: 5.8e7, mu_r: 1, name: 'Copper (Cu)' };
    }
  }, [conductorMaterial]);

  // Skin depth calculation: delta = sqrt(1 / (pi * f * mu_0 * mu_r * sigma))
  const skinDepthMm = useMemo(() => {
    const fHz = frequencyKhz * 1000;
    if (fHz <= 0) return 999; // DC limit
    const mu0 = 4 * Math.PI * 1e-7;
    const mu = mu0 * materialProps.mu_r;
    const deltaMeters = Math.sqrt(1 / (Math.PI * fHz * mu * materialProps.sigma));
    return deltaMeters * 1000; // mm
  }, [frequencyKhz, materialProps]);

  // AC to DC resistance ratio (approximate formula for solid wire)
  // When r >> delta: R_ac / R_dc approx r / (2 * delta) + 0.25
  const racToRdcRatio = useMemo(() => {
    if (frequencyKhz === 0) return 1.0;
    const r = wireRadiusMm;
    const d = skinDepthMm;
    const x = r / d;
    if (x < 1) {
      return 1 + (x * x * x * x) / 48; // small argument approximation
    } else {
      return Math.max(1, x / 2 + 0.26);
    }
  }, [frequencyKhz, wireRadiusMm, skinDepthMm]);

  const labels = {
    en: {
      title: 'Skin Effect & Proximity Effect Simulator',
      subtitle: 'Analyze high-frequency current crowding, skin depth (δ), and AC resistance increase',
      freqLabel: 'Signal Frequency:',
      radiusLabel: 'Wire Radius (r):',
      materialLabel: 'Conductor Metal:',
      skinDepth: 'Calculated Skin Depth (δ):',
      racRatio: 'AC to DC Resistance Ratio (R_ac / R_dc):',
      dcComparison: 'At DC (0 Hz), current is uniform across cross-section: R_ac = R_dc.',
      acExplanation: 'At high frequency, internal magnetic flux lines induce counter-EMF at the center, forcing AC current to crowd within skin depth δ of the surface.',
      toggleProximity: 'Toggle Proximity Effect (Adjacent Conductor)',
      proximityAiding: 'Parallel Currents (Opposite edges attract current outward)',
      proximityOpposing: 'Opposing Currents (Current crowds toward closest edges)',
      reset: 'Reset'
    },
    hi: {
      title: 'स्किन प्रभाव एवं प्रॉक्सिमिटी प्रभाव सिमुलेटर',
      subtitle: 'उच्च-आवृत्ति धारा संकेन्द्रण, स्किन डेप्थ (δ) एवं एसी प्रतिरोध वृद्धि का विश्लेषण करें',
      freqLabel: 'संकेत आवृत्ति:',
      radiusLabel: 'तार की त्रिज्या (r):',
      materialLabel: 'चालक धातु:',
      skinDepth: 'परिकलित स्किन डेप्थ (δ):',
      racRatio: 'एसी/डीसी प्रतिरोध अनुपात (R_ac / R_dc):',
      dcComparison: 'डीसी (0 Hz) पर धारा पूरे अनुप्रस्थ काट में एकसमान होती है: R_ac = R_dc।',
      acExplanation: 'उच्च आवृत्ति पर आंतरिक फ्लक्स केंद्र में विरोधी ईएमएफ उत्पन्न करता है, जिससे धारा सतह की स्किन गहराई δ में सिमट जाती है।',
      toggleProximity: 'प्रॉक्सिमिटी प्रभाव चालू/बंद (समीपवर्ती चालक)',
      proximityAiding: 'समानांतर धाराएं (धारा विपरीत सिरों की ओर विस्थापित)',
      proximityOpposing: 'विरोधी धाराएं (धारा निकटतम सतहों पर संकेंद्रित)',
      reset: 'रीसेट'
    },
    bn: {
      title: 'স্কিন ইফেক্ট ও প্রক্সিমিটি ইফেক্ট সিমুলেটর',
      subtitle: 'উচ্চ-কম্পাঙ্কে কারেন্ট ঘনত্ব, স্কিন ডেপথ (δ) এবং এসি রোধ বৃদ্ধির বিশ্লেষণ করো',
      freqLabel: 'সিগন্যাল কম্পাঙ্ক:',
      radiusLabel: 'তারের ব্যাসার্ধ (r):',
      materialLabel: 'পরিবাহী ধাতু:',
      skinDepth: 'নির্ণীত স্কিন ডেপথ (δ):',
      racRatio: 'এসি ও ডিসি রোধের অনুপাত (R_ac / R_dc):',
      dcComparison: 'ডিসিতে (0 Hz) কারেন্ট সমগ্র ক্ষেত্রফলে সুষমভাবে প্রবাহিত হয়: R_ac = R_dc।',
      acExplanation: 'উচ্চ কম্পাঙ্কে অভ্যন্তরীণ ফ্লাক্স কেন্দ্রে বিপরীত ইএমএফ তৈরি করে, ফলে কারেন্ট পরিবাহীর পৃষ্ঠের স্কিন ডেপথ δ এর মধ্যে আবদ্ধ হয়ে পড়ে।',
      toggleProximity: 'প্রক্সিমিটি ইফেক্ট টগল (পার্শ্ববর্তী পরিবাহী)',
      proximityAiding: 'সমমুখী কারেন্ট (বাইরের দিকে কারেন্ট ঘনত্ব বৃদ্ধি পায়)',
      proximityOpposing: 'বিপরীতমুখী কারেন্ট (নিকটবর্তী পৃষ্ঠে কারেন্ট ভিড় করে)',
      reset: 'রিসেট'
    }
  }[currentLanguage];

  // Visual radius of the wire in SVG pixels (max 80px)
  const svgRadius = 70;
  // Visual skin depth clamped to svgRadius
  const visualSkinDepth = Math.min(svgRadius, (skinDepthMm / wireRadiusMm) * svgRadius);
  const innerRadius = Math.max(0, svgRadius - visualSkinDepth);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-white shadow-xl max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div>
          <h2 className="text-lg font-bold text-cyan-400 flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-400" />
            {labels.title}
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">{labels.subtitle}</p>
        </div>
        <button
          onClick={() => {
            setFrequencyKhz(50);
            setWireRadiusMm(5);
            setConductorMaterial('COPPER');
            setShowProximity(false);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 rounded-lg border border-slate-700 transition"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          {labels.reset}
        </button>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
        {/* Left: Cross-Section Current-Density Heatmap (7 cols) */}
        <div className="lg:col-span-7 bg-slate-950 rounded-xl p-3 border border-slate-800 relative flex flex-col justify-between">
          <div className="flex justify-between items-center text-[11px] font-bold text-slate-400 mb-1">
            <span>Conductor Cross-Section Current Density (J)</span>
            <span className="font-mono text-cyan-400">
              {frequencyKhz === 0 ? 'DC Uniform' : `f = ${frequencyKhz} kHz`}
            </span>
          </div>

          <svg viewBox="0 0 500 240" className="w-full h-56 select-none">
            <defs>
              {/* Radial gradient for skin effect */}
              <radialGradient id="skinGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset={`${Math.round((innerRadius / svgRadius) * 100)}%`} stopColor="#0369a1" stopOpacity="0.4" />
                <stop offset="85%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#f59e0b" />
              </radialGradient>
              <radialGradient id="dcGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0284c7" />
              </radialGradient>
            </defs>

            {!showProximity ? (
              /* Single Conductor View */
              <g transform="translate(250, 115)">
                {/* Conductor Outer Circle */}
                <circle
                  cx="0"
                  cy="0"
                  r={svgRadius}
                  fill={frequencyKhz === 0 ? 'url(#dcGrad)' : 'url(#skinGrad)'}
                  stroke="#fbbf24"
                  strokeWidth="2.5"
                />

                {/* Dead Zone Core Circle (no current at high frequency) */}
                {frequencyKhz > 0 && innerRadius > 10 && (
                  <g>
                    <circle cx="0" cy="0" r={innerRadius} fill="#020617" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
                    <text x="0" y="4" fill="#64748b" fontSize="9" textAnchor="middle" fontWeight="bold">
                      Zero Current Core
                    </text>
                  </g>
                )}

                {/* Skin Depth Indicator Dimension Line */}
                {frequencyKhz > 0 && (
                  <g>
                    <line x1="0" y1="0" x2={svgRadius} y2="0" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1={innerRadius} y1="0" x2={svgRadius} y2="0" stroke="#f59e0b" strokeWidth="3" />
                    <text x={(innerRadius + svgRadius) / 2} y="-6" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">
                      δ = {skinDepthMm < 1 ? `${(skinDepthMm * 1000).toFixed(0)} μm` : `${skinDepthMm.toFixed(2)} mm`}
                    </text>
                  </g>
                )}

                <text x="0" y={svgRadius + 18} fill="#94a3b8" fontSize="10" textAnchor="middle">
                  Radius r = {wireRadiusMm} mm ({materialProps.name})
                </text>
              </g>
            ) : (
              /* Dual Conductors Showing Proximity Effect */
              <g transform="translate(250, 115)">
                {/* Left Conductor */}
                <circle cx="-90" cy="0" r="55" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
                {/* Right Conductor */}
                <circle cx="90" cy="0" r="55" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />

                {/* Proximity current crowd representation */}
                {proximityDirection === 'OPPOSING' ? (
                  /* Opposing currents crowd on adjacent inside surfaces */
                  <g>
                    <path d="M -90 -55 A 55 55 0 0 1 -40 0 A 55 55 0 0 1 -90 55 Z" fill="#ef4444" opacity="0.8" />
                    <path d="M 90 -55 A 55 55 0 0 0 40 0 A 55 55 0 0 0 90 55 Z" fill="#ef4444" opacity="0.8" />
                    <text x="0" y="-10" fill="#ef4444" fontSize="9.5" fontWeight="bold" textAnchor="middle">
                      Opposing Currents:
                    </text>
                    <text x="0" y="5" fill="#fca5a5" fontSize="8.5" textAnchor="middle">
                      Crowd to facing inner surfaces
                    </text>
                  </g>
                ) : (
                  /* Parallel currents push each other to outer edges */
                  <g>
                    <path d="M -90 -55 A 55 55 0 0 0 -140 0 A 55 55 0 0 0 -90 55 Z" fill="#38bdf8" opacity="0.8" />
                    <path d="M 90 -55 A 55 55 0 0 1 140 0 A 55 55 0 0 1 90 55 Z" fill="#38bdf8" opacity="0.8" />
                    <text x="0" y="-10" fill="#38bdf8" fontSize="9.5" fontWeight="bold" textAnchor="middle">
                      Parallel Currents:
                    </text>
                    <text x="0" y="5" fill="#93c5fd" fontSize="8.5" textAnchor="middle">
                      Pushed to distant outer surfaces
                    </text>
                  </g>
                )}
                <text x="-90" y="70" fill="#94a3b8" fontSize="9" textAnchor="middle">Conductor 1</text>
                <text x="90" y="70" fill="#94a3b8" fontSize="9" textAnchor="middle">Conductor 2</text>
              </g>
            )}
          </svg>

          {/* Banner */}
          <div className="mt-1 p-2 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
            {frequencyKhz === 0 ? labels.dcComparison : labels.acExplanation}
          </div>
        </div>

        {/* Right: Quantitative Gauges & Material Selector (5 cols) */}
        <div className="lg:col-span-5 bg-slate-950 rounded-xl p-3 border border-slate-800 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-bold text-slate-400 block mb-2">
              Engineering Calculations: Skin Depth δ = √(1 / π·f·μ·σ)
            </span>

            {/* Material Selector Buttons */}
            <div className="grid grid-cols-3 gap-1.5 mb-3">
              {(['COPPER', 'ALUMINUM', 'IRON'] as const).map((mat) => (
                <button
                  key={mat}
                  onClick={() => setConductorMaterial(mat)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-semibold border transition ${
                    conductorMaterial === mat
                      ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {mat === 'COPPER' ? 'Copper' : mat === 'ALUMINUM' ? 'Aluminum' : 'Iron (Fe)'}
                </button>
              ))}
            </div>

            {/* Calculated Values */}
            <div className="space-y-2 mb-3">
              <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 flex justify-between items-center">
                <div>
                  <span className="text-[10px] text-slate-400 block">{labels.skinDepth}</span>
                  <span className="text-xl font-mono font-bold text-amber-400">
                    {skinDepthMm < 1 ? `${(skinDepthMm * 1000).toFixed(1)} μm` : `${skinDepthMm.toFixed(3)} mm`}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded">
                  δ ∝ 1 / √f
                </span>
              </div>

              <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 flex justify-between items-center">
                <div>
                  <span className="text-[10px] text-slate-400 block">{labels.racRatio}</span>
                  <span className="text-xl font-mono font-bold text-cyan-400">
                    {racToRdcRatio.toFixed(2)} ×
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded">
                  +{( (racToRdcRatio - 1) * 100 ).toFixed(0)}% Loss
                </span>
              </div>
            </div>

            {/* Proximity Toggle */}
            <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-300">{labels.toggleProximity}</span>
                <input
                  type="checkbox"
                  checked={showProximity}
                  onChange={(e) => setShowProximity(e.target.checked)}
                  className="accent-cyan-500 w-4 h-4 cursor-pointer"
                />
              </div>
              {showProximity && (
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <button
                    onClick={() => setProximityDirection('OPPOSING')}
                    className={`py-1 text-[10px] rounded border ${
                      proximityDirection === 'OPPOSING'
                        ? 'bg-red-950 border-red-500 text-red-300'
                        : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}
                  >
                    Opposing (+ / -)
                  </button>
                  <button
                    onClick={() => setProximityDirection('PARALLEL')}
                    className={`py-1 text-[10px] rounded border ${
                      proximityDirection === 'PARALLEL'
                        ? 'bg-sky-950 border-sky-500 text-sky-300'
                        : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}
                  >
                    Parallel (+ / +)
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="mt-2 text-[10px] text-slate-500 font-mono">
            Practical Solutions: Hollow tubes, Litz wire (fine insulated braided strands), thin copper foils.
          </div>
        </div>
      </div>

      {/* Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-400">{labels.freqLabel}</span>
            <span className="font-mono font-bold text-cyan-400">
              {frequencyKhz === 0 ? '0 Hz (DC)' : `${frequencyKhz} kHz`}
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="500"
            step="5"
            value={frequencyKhz}
            onChange={(e) => setFrequencyKhz(Number(e.target.value))}
            className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1">
            <span>DC (0 Hz)</span>
            <span>50 Hz (Mains)</span>
            <span>100 kHz (Switching)</span>
            <span>500 kHz (RF)</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-400">{labels.radiusLabel}</span>
            <span className="font-mono font-bold text-amber-400">{wireRadiusMm} mm (Ø {wireRadiusMm * 2} mm)</span>
          </div>
          <input
            type="range"
            min="1"
            max="15"
            step="0.5"
            value={wireRadiusMm}
            onChange={(e) => setWireRadiusMm(Number(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1">
            <span>1 mm (Thin)</span>
            <span>5 mm (Busbar)</span>
            <span>15 mm (Heavy Cable)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
