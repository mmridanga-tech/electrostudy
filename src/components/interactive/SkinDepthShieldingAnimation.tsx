import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Shield, Activity, Layers, Radio } from 'lucide-react';
import { Language } from '../../types';

interface SkinDepthShieldingAnimationProps {
  currentLanguage: Language;
}

interface ConductorMaterial {
  name: string;
  sigma: number; // S/m
  muR: number;   // relative permeability
}

export const SkinDepthShieldingAnimation: React.FC<SkinDepthShieldingAnimationProps> = ({ currentLanguage }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [materialKey, setMaterialKey] = useState<string>('copper');
  const [frequencyExponent, setFrequencyExponent] = useState<number>(6); // 10^exponent Hz (10^1 to 10^9)
  const [thicknessMm, setThicknessMm] = useState<number>(0.5); // 0.05 to 5 mm
  const [animTime, setAnimTime] = useState<number>(0);

  const materials: Record<string, ConductorMaterial> = {
    copper: { name: 'Copper (Cu)', sigma: 5.8e7, muR: 1.0 },
    aluminum: { name: 'Aluminum (Al)', sigma: 3.8e7, muR: 1.0 },
    steel: { name: 'Carbon Steel', sigma: 0.7e7, muR: 150.0 },
    mumetal: { name: 'Mu-Metal', sigma: 0.2e7, muR: 20000.0 }
  };

  const currentMat = materials[materialKey] || materials.copper;
  const frequencyHz = Math.pow(10, frequencyExponent);

  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (time: number) => {
      if (lastTimeRef.current !== null) {
        const dt = (time - lastTimeRef.current) / 1000;
        if (isPlaying) {
          setAnimTime((prev) => prev + dt * 4);
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
  }, [isPlaying]);

  // Skin depth calculation: delta = 1 / sqrt(pi * f * mu * sigma)
  const mu0 = 4 * Math.PI * 1e-7;
  const mu = mu0 * currentMat.muR;
  const skinDepthM = 1 / Math.sqrt(Math.PI * frequencyHz * mu * currentMat.sigma);
  const skinDepthMm = skinDepthM * 1000;

  // Shielding absorption loss: A = 8.686 * (d / delta) dB
  const thicknessM = thicknessMm / 1000;
  const absorptionLossDb = 8.686 * (thicknessM / skinDepthM);

  // Surface wave impedance: eta_m = sqrt(omega * mu / sigma)
  const omega = 2 * Math.PI * frequencyHz;
  const etaM = Math.sqrt((omega * mu) / currentMat.sigma);
  const eta0 = 376.73;
  const reflectionLossDb = Math.max(0, 20 * Math.log10(eta0 / (4 * Math.max(1e-6, etaM))));
  const totalShieldingDb = absorptionLossDb + reflectionLossDb;

  const formatFreq = (f: number) => {
    if (f < 1e3) return `${f.toFixed(0)} Hz`;
    if (f < 1e6) return `${(f / 1e3).toFixed(1)} kHz`;
    if (f < 1e9) return `${(f / 1e6).toFixed(1)} MHz`;
    return `${(f / 1e9).toFixed(1)} GHz`;
  };

  const formatSkinDepth = (sdMm: number) => {
    if (sdMm >= 1) return `${sdMm.toFixed(2)} mm`;
    if (sdMm >= 0.001) return `${(sdMm * 1000).toFixed(1)} µm`;
    return `${(sdMm * 1e6).toFixed(1)} nm`;
  };

  const allLabels = {
    en: {
      title: 'Conductor Skin Depth & Electromagnetic Shielding Simulator',
      subtitle: 'Analyze exponential current attenuation J(z) = J₀ e^{-z/δ}, high-frequency skin effect, and Faraday shield attenuation (dB)',
      materialLabel: 'Shield Material:',
      freqLabel: 'Excitation Frequency (f):',
      thickLabel: 'Shield Wall Thickness (d):',
      skinDepthResult: 'Skin Depth (δ):',
      absorptionResult: 'Absorption Loss (A):',
      reflectionResult: 'Reflection Loss (R):',
      totalShieldResult: 'Total Shielding (SE):',
      surfaceCurrent: 'Surface Current J₀ (z = 0)',
      attenuatedCurrent: 'Attenuated Field at Exit (z = d)',
      reset: 'Reset',
      play: 'Play',
      pause: 'Pause'
    },
    hi: {
      title: 'चालक त्वचा गहराई (स्किन डेप्थ) एवं विद्युत चुंबकीय परिरक्षण सिम्युलेटर',
      subtitle: 'चरघातांकी धारा क्षीणन J(z) = J₀ e^{-z/δ}, उच्च आवृत्ति त्वचा प्रभाव तथा फैराडे शील्ड क्षीणन (dB) का विश्लेषण',
      materialLabel: 'शील्ड सामग्री:',
      freqLabel: 'उत्तेजना आवृत्ति (f):',
      thickLabel: 'शील्ड दीवार की मोटाई (d):',
      skinDepthResult: 'त्वचा गहराई (δ):',
      absorptionResult: 'अवशोषण हानि (A):',
      reflectionResult: 'परावर्तन हानि (R):',
      totalShieldResult: 'कुल परिरक्षण प्रभाव (SE):',
      surfaceCurrent: 'सतह धारा घनत्व (z = 0)',
      attenuatedCurrent: 'निकास पर क्षीण क्षेत्र (z = d)',
      reset: 'रीसेट',
      play: 'प्ले',
      pause: 'रोकें'
    },
    bn: {
      title: 'পরিবাহী স্কিন ডেপথ ও তড়িৎচৌম্বকীয় শিল্ডিং সিমুলেটর',
      subtitle: 'সূচকীয় প্রবাহ হ্রাস J(z) = J₀ e^{-z/δ}, উচ্চ কম্পাঙ্ক স্কিন ইফেক্ট এবং ফ্যারাডে শিল্ড অপচয় (dB) বিশ্লেষণ',
      materialLabel: 'শিল্ড উপাদান:',
      freqLabel: 'কম্পাঙ্ক (f):',
      thickLabel: 'শিল্ড বেধ (d):',
      skinDepthResult: 'স্কিন ডেপথ (δ):',
      absorptionResult: 'শোষণ অপচয় (A):',
      reflectionResult: 'প্রতিফলন অপচয় (R):',
      totalShieldResult: 'মোট শিল্ডিং ক্ষমতা (SE):',
      surfaceCurrent: 'পৃষ্ঠতল প্রবাহ (z = 0)',
      attenuatedCurrent: 'বহির্গমনে হ্রাসপ্রাপ্ত ক্ষেত্র (z = d)',
      reset: 'রিসেট',
      play: 'চালান',
      pause: 'থামান'
    }
  };
  const labels = allLabels[currentLanguage] || allLabels.en;

  // Compute visual decay inside conductor (from x = 200 to 520, representing slab of thickness d)
  // Normalize delta relative to visual width
  const visualSlabWidth = 320; // px
  // Map thicknessMm (0.05 to 5 mm) to visualSlabWidth
  // Pixel per mm = visualSlabWidth / thicknessMm
  const pxPerMm = visualSlabWidth / thicknessMm;
  const visualDeltaPx = Math.max(4, Math.min(visualSlabWidth, skinDepthMm * pxPerMm));

  const wavePoints: string[] = [];
  const envelopeMax: string[] = [];
  const envelopeMin: string[] = [];
  for (let px = 0; px <= visualSlabWidth; px += 4) {
    const depthRatio = px / visualDeltaPx;
    const decay = Math.exp(-depthRatio);
    const phase = animTime - depthRatio;
    const jVal = decay * Math.cos(phase);
    const screenX = 200 + px;
    const screenY = 150 - jVal * 85;
    wavePoints.push(`${screenX},${screenY.toFixed(1)}`);
    envelopeMax.push(`${screenX},${(150 - decay * 85).toFixed(1)}`);
    envelopeMin.push(`${screenX},${(150 + decay * 85).toFixed(1)}`);
  }

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-5 text-white shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-sky-400" />
            <h3 className="text-lg font-bold text-sky-400">{labels.title}</h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">{labels.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-xs font-semibold transition-colors"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {isPlaying ? labels.pause : labels.play}
          </button>
          <button
            onClick={() => {
              setMaterialKey('copper');
              setFrequencyExponent(6);
              setThicknessMm(0.5);
              setAnimTime(0);
            }}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            {labels.reset}
          </button>
        </div>
      </div>

      {/* Material Selection Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="text-xs font-semibold text-slate-400">{labels.materialLabel}</span>
        {Object.entries(materials).map(([k, mat]) => (
          <button
            key={k}
            onClick={() => setMaterialKey(k)}
            className={`px-3 py-1 text-xs rounded font-medium transition-colors ${
              materialKey === k ? 'bg-sky-600 text-white shadow' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            {mat.name}
          </button>
        ))}
      </div>

      {/* SVG Conductor Cross-Section & Decay Curve */}
      <div className="w-full bg-slate-950 rounded-xl border border-slate-800 overflow-hidden mb-5">
        <svg viewBox="0 0 650 300" className="w-full h-auto">
          {/* Air / Free space on left */}
          <rect x="20" y="20" width="180" height="260" fill="#020617" />
          <text x="110" y="42" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">
            Incident Free Space
          </text>

          {/* Conductor Metallic Slab */}
          <rect x="200" y="20" width="320" height="260" fill="#0f172a" stroke="#334155" strokeWidth="2" />
          <text x="360" y="42" textAnchor="middle" fill="#facc15" fontSize="11" fontWeight="bold">
            Metallic Shield Slab: {currentMat.name} (d = {thicknessMm.toFixed(2)} mm)
          </text>

          {/* Shielded Cavity on right */}
          <rect x="520" y="20" width="110" height="260" fill="#020617" />
          <text x="575" y="42" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">
            Cavity
          </text>

          {/* Center Zero Line */}
          <line x1="20" y1="150" x2="630" y2="150" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />

          {/* Incident Wave in Air */}
          <path
            d={`M 20,${150 - 85 * Math.cos(animTime + 3)} Q 70,${150 - 85 * Math.cos(animTime + 1.5)} 120,${150 - 85 * Math.cos(animTime)} T 200,${150 - 85 * Math.cos(animTime - 1.5)}`}
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2.5"
          />

          {/* Exponential Decay Envelope (±J0 e^{-z/δ}) */}
          <path d={`M ${envelopeMax.join(' L ')}`} fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
          <path d={`M ${envelopeMin.join(' L ')}`} fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />

          {/* Decaying Wave Inside Metal */}
          <path d={`M ${wavePoints.join(' L ')}`} fill="none" stroke="#f59e0b" strokeWidth="2.5" />

          {/* Skin Depth Bracket at 1 Delta */}
          {visualDeltaPx < 310 && (
            <g>
              <line x1={200 + visualDeltaPx} y1="60" x2={200 + visualDeltaPx} y2="240" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 2" />
              <line x1="200" y1="65" x2={200 + visualDeltaPx} y2="65" stroke="#ef4444" strokeWidth="1.5" />
              <circle cx="200" cy="65" r="2.5" fill="#ef4444" />
              <circle cx={200 + visualDeltaPx} cy="65" r="2.5" fill="#ef4444" />
              <text x={200 + visualDeltaPx / 2} y="58" textAnchor="middle" fill="#f87171" fontSize="9.5" fontWeight="bold">
                1δ = {formatSkinDepth(skinDepthMm)} (36.8% of J₀)
              </text>
            </g>
          )}

          {/* Surface boundary line (z = 0) */}
          <line x1="200" y1="20" x2="200" y2="280" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="200" cy={150 - 85 * Math.cos(animTime - 1.5)} r="4.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.5" />

          {/* Exit boundary line (z = d) */}
          <line x1="520" y1="20" x2="520" y2="280" stroke="#10b981" strokeWidth="2" />

          {/* Attenuation summary text */}
          <g transform="translate(210, 255)">
            <text x="0" y="0" fill="#94a3b8" fontSize="9">
              Skin Ratio: d / δ = <tspan fill="#facc15" fontWeight="bold">{(thicknessMm / Math.max(1e-6, skinDepthMm)).toFixed(1)} skin depths</tspan>
            </text>
          </g>
        </svg>
      </div>

      {/* Sliders & Real-Time Shielding Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Controls */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3.5">
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-300">{labels.freqLabel}</span>
              <span className="text-sky-400 font-mono font-bold">{formatFreq(frequencyHz)}</span>
            </div>
            <input
              type="range"
              min="1"
              max="9"
              step="0.2"
              value={frequencyExponent}
              onChange={(e) => setFrequencyExponent(parseFloat(e.target.value))}
              className="w-full accent-sky-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
              <span>10 Hz (Power)</span>
              <span>1 MHz (RF)</span>
              <span>1 GHz (Microwave)</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-300">{labels.thickLabel}</span>
              <span className="text-amber-400 font-mono font-bold">{thicknessMm.toFixed(2)} mm</span>
            </div>
            <input
              type="range"
              min="0.05"
              max="3.0"
              step="0.05"
              value={thicknessMm}
              onChange={(e) => setThicknessMm(parseFloat(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
          </div>

          <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs text-slate-300">
            <div className="flex justify-between mb-1">
              <span className="text-slate-400">Conductivity (σ):</span>
              <span className="font-mono text-cyan-300">{(currentMat.sigma / 1e7).toFixed(2)} × 10⁷ S/m</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Permeability (μ_r):</span>
              <span className="font-mono text-purple-300">{currentMat.muR}</span>
            </div>
          </div>
        </div>

        {/* Real-Time Shielding Metrics */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-3">
            <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
              <span className="text-slate-400">{labels.skinDepthResult}</span>
              <p className="text-amber-300 font-bold text-sm">{formatSkinDepth(skinDepthMm)}</p>
            </div>
            <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
              <span className="text-slate-400">{labels.absorptionResult}</span>
              <p className="text-sky-300 font-bold text-sm">{absorptionLossDb > 999 ? '> 999 dB' : `${absorptionLossDb.toFixed(1)} dB`}</p>
            </div>
            <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
              <span className="text-slate-400">{labels.reflectionResult}</span>
              <p className="text-purple-300 font-bold text-sm">{reflectionLossDb.toFixed(1)} dB</p>
            </div>
            <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
              <span className="text-slate-400">{labels.totalShieldResult}</span>
              <p className="text-emerald-300 font-bold text-sm">{totalShieldingDb > 999 ? '> 999 dB' : `${totalShieldingDb.toFixed(1)} dB`}</p>
            </div>
          </div>

          <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800 text-xs">
            <div className="flex justify-between items-center mb-1 text-slate-300">
              <span>Shielding Effectiveness Rating:</span>
              <span className={`font-bold font-mono ${totalShieldingDb > 60 ? 'text-emerald-400' : totalShieldingDb > 30 ? 'text-amber-400' : 'text-red-400'}`}>
                {totalShieldingDb > 90 ? 'Military / Tempest Grade (> 90 dB)' : totalShieldingDb > 60 ? 'Commercial Grade (> 60 dB)' : 'Moderate Shielding'}
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              At this frequency, energy entering the shielded room is attenuated by a factor of 10^{Math.min(99, Math.round(totalShieldingDb / 10))}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
