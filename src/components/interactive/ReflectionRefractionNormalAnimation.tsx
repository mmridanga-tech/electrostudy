import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Activity, ArrowRight, Layers, Sliders } from 'lucide-react';
import { Language } from '../../types';

interface ReflectionRefractionNormalAnimationProps {
  currentLanguage: Language;
}

export const ReflectionRefractionNormalAnimation: React.FC<ReflectionRefractionNormalAnimationProps> = ({ currentLanguage }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [epsR1, setEpsR1] = useState<number>(1.0); // Medium 1 relative permittivity
  const [epsR2, setEpsR2] = useState<number>(4.0); // Medium 2 relative permittivity
  const [incidentAmp, setIncidentAmp] = useState<number>(10.0); // V/m
  const [frequencyMhz, setFrequencyMhz] = useState<number>(150); // MHz
  const [animTime, setAnimTime] = useState<number>(0);

  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (time: number) => {
      if (lastTimeRef.current !== null) {
        const dt = (time - lastTimeRef.current) / 1000;
        if (isPlaying) {
          setAnimTime((prev) => prev + dt * (frequencyMhz * 1e-2));
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
  }, [isPlaying, frequencyMhz]);

  // Calculations
  const eta0 = 376.73; // Ohm
  const eta1 = eta0 / Math.sqrt(epsR1);
  const eta2 = eta0 / Math.sqrt(epsR2);

  // Reflection and transmission coefficients
  const gamma = (eta2 - eta1) / (eta2 + eta1);
  const tau = (2 * eta2) / (eta2 + eta1);

  const reflectedAmp = incidentAmp * gamma;
  const transmittedAmp = incidentAmp * tau;

  // SWR & Power
  const absGamma = Math.abs(gamma);
  const swr = absGamma >= 0.999 ? '∞ (Pure Standing Wave)' : ((1 + absGamma) / (1 - absGamma)).toFixed(2);
  const powerReflectance = (absGamma * absGamma);
  const powerTransmittance = 1 - powerReflectance;
  const returnLossDb = absGamma > 1e-4 ? (-20 * Math.log10(absGamma)).toFixed(1) : '> 60 dB';

  const allLabels = {
    en: {
      title: 'Normal Incidence Reflection & Transmission Simulator',
      subtitle: 'Wave impedance mismatch, reflection coefficient Γ, standing wave ratio (SWR), and boundary conditions at z = 0',
      med1Label: 'Medium 1 Permittivity (ε_r1):',
      med2Label: 'Medium 2 Permittivity (ε_r2):',
      ampLabel: 'Incident Amplitude (E_i0):',
      freqLabel: 'Frequency:',
      matched: 'Matched (ε_r2 = ε_r1)',
      dielectric: 'Air to Glass (1 ⟶ 4)',
      denseToLight: 'Glass to Air (4 ⟶ 1)',
      conductor: 'Conductor Limit (ε_r2 ≫ 1)',
      swrLabel: 'Standing Wave Ratio (SWR):',
      gammaLabel: 'Reflection Coeff (Γ):',
      tauLabel: 'Transmission Coeff (τ):',
      reflPower: 'Reflected Power (R = |Γ|²):',
      transPower: 'Transmitted Power (T):',
      eta1Label: 'Medium 1 Impedance (η1):',
      eta2Label: 'Medium 2 Impedance (η2):',
      reset: 'Reset',
      play: 'Play',
      pause: 'Pause'
    },
    hi: {
      title: 'अभिलंब आपतन परावर्तन एवं पारगमन सिम्युलेटर',
      subtitle: 'तरंग प्रतिबाधा बेमेल, परावर्तन गुणांक Γ, अप्रगामी तरंग अनुपात (SWR) एवं z = 0 पर सीमा स्थितियां',
      med1Label: 'माध्यम 1 परावैद्युतांक (ε_r1):',
      med2Label: 'माध्यम 2 परावैद्युतांक (ε_r2):',
      ampLabel: 'आपतित आयाम (E_i0):',
      freqLabel: 'आवृत्ति:',
      matched: 'सुमेलित (ε_r2 = ε_r1)',
      dielectric: 'वायु से कांच (1 ⟶ 4)',
      denseToLight: 'कांच से वायु (4 ⟶ 1)',
      conductor: 'चालक सीमा (ε_r2 ≫ 1)',
      swrLabel: 'अप्रगामी तरंग अनुपात (SWR):',
      gammaLabel: 'परावर्तन गुणांक (Γ):',
      tauLabel: 'पारगमन गुणांक (τ):',
      reflPower: 'परावर्तित शक्ति (|Γ|²):',
      transPower: 'पारगमित शक्ति (T):',
      eta1Label: 'माध्यम 1 प्रतिबाधा (η1):',
      eta2Label: 'माध्यम 2 प्रतिबाधा (η2):',
      reset: 'रीसेट',
      play: 'प्ले',
      pause: 'रोकें'
    },
    bn: {
      title: 'লম্ব আপতন প্রতিফলন ও প্রতিসরণ সিমুলেটর',
      subtitle: 'তরঙ্গ প্রতিবাধার অমিল, প্রতিফলন গুণক Γ, স্থির তরঙ্গ অনুপাত (SWR) এবং z = 0 সীমানা শর্ত',
      med1Label: 'মাধ্যম ১ প্রবেশ্যতা (ε_r1):',
      med2Label: 'মাধ্যম ২ প্রবেশ্যতা (ε_r2):',
      ampLabel: 'আপতিত বিস্তার (E_i0):',
      freqLabel: 'কম্পাঙ্ক:',
      matched: 'ম্যাচড (ε_r2 = ε_r1)',
      dielectric: 'বায়ু থেকে কাচ (১ ⟶ ৪)',
      denseToLight: 'কাচ থেকে বায়ু (৪ ⟶ ১)',
      conductor: 'পরিবাহী সীমা (ε_r2 ≫ ১)',
      swrLabel: 'স্থির তরঙ্গ অনুপাত (SWR):',
      gammaLabel: 'প্রতিফলন গুণক (Γ):',
      tauLabel: 'সঞ্চালন গুণক (τ):',
      reflPower: 'প্রতিফলিত ক্ষমতা (|Γ|²):',
      transPower: 'সঞ্চালিত ক্ষমতা (T):',
      eta1Label: 'মাধ্যম ১ প্রতিবাধা (η1):',
      eta2Label: 'মাধ্যম ২ প্রতিবাধা (η2):',
      reset: 'রিসেট',
      play: 'চালান',
      pause: 'থামান'
    }
  };
  const labels = allLabels[currentLanguage] || allLabels.en;

  // Generate wave path in medium 1 (x from 40 to 320, boundary at x=320)
  // Medium 1: E1(z, t) = E_i * cos(wt - k1*z) + E_r * cos(wt + k1*z)
  const med1Points: string[] = [];
  const med1EnvelopeMax: string[] = [];
  const med1EnvelopeMin: string[] = [];
  const boundaryX = 320;
  const k1 = 0.035 * Math.sqrt(epsR1);
  const k2 = 0.035 * Math.sqrt(epsR2);

  for (let x = 40; x <= boundaryX; x += 3) {
    const distFromBoundary = boundaryX - x;
    const zPhase = -distFromBoundary * k1;
    const eInc = incidentAmp * Math.cos(animTime - zPhase);
    const eRef = reflectedAmp * Math.cos(animTime + zPhase);
    const eTotal = eInc + eRef;
    const screenY = 150 - eTotal * 4;
    med1Points.push(`${x},${screenY.toFixed(1)}`);

    // SWR standing wave envelope
    const ampEnvelope = Math.sqrt(
      incidentAmp * incidentAmp +
      reflectedAmp * reflectedAmp +
      2 * incidentAmp * reflectedAmp * Math.cos(2 * zPhase)
    );
    med1EnvelopeMax.push(`${x},${(150 - ampEnvelope * 4).toFixed(1)}`);
    med1EnvelopeMin.push(`${x},${(150 + ampEnvelope * 4).toFixed(1)}`);
  }

  // Medium 2: E2(z, t) = E_t * cos(wt - k2*z)
  const med2Points: string[] = [];
  for (let x = boundaryX; x <= 610; x += 3) {
    const distIntoMed2 = x - boundaryX;
    const zPhase = distIntoMed2 * k2;
    const eTrans = transmittedAmp * Math.cos(animTime - zPhase);
    const screenY = 150 - eTrans * 4;
    med2Points.push(`${x},${screenY.toFixed(1)}`);
  }

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-5 text-white shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-sky-400" />
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
              setEpsR1(1.0);
              setEpsR2(4.0);
              setIncidentAmp(10.0);
              setFrequencyMhz(150);
              setAnimTime(0);
            }}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            {labels.reset}
          </button>
        </div>
      </div>

      {/* Preset Scenarios */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="text-xs font-semibold text-slate-400">Scenarios:</span>
        <button
          onClick={() => { setEpsR1(1.0); setEpsR2(1.0); }}
          className="px-2.5 py-1 text-xs rounded bg-slate-800 hover:bg-slate-700 text-emerald-300 font-mono border border-slate-700"
        >
          {labels.matched}
        </button>
        <button
          onClick={() => { setEpsR1(1.0); setEpsR2(4.0); }}
          className="px-2.5 py-1 text-xs rounded bg-sky-950/60 hover:bg-sky-900/80 text-sky-300 font-mono border border-sky-600/40"
        >
          {labels.dielectric}
        </button>
        <button
          onClick={() => { setEpsR1(4.0); setEpsR2(1.0); }}
          className="px-2.5 py-1 text-xs rounded bg-amber-950/60 hover:bg-amber-900/80 text-amber-300 font-mono border border-amber-600/40"
        >
          {labels.denseToLight}
        </button>
        <button
          onClick={() => { setEpsR1(1.0); setEpsR2(50.0); }}
          className="px-2.5 py-1 text-xs rounded bg-red-950/60 hover:bg-red-900/80 text-red-300 font-mono border border-red-600/40"
        >
          {labels.conductor}
        </button>
      </div>

      {/* Interactive Wave Canvas */}
      <div className="w-full bg-slate-950 rounded-xl border border-slate-800 overflow-hidden mb-5">
        <svg viewBox="0 0 650 300" className="w-full h-auto">
          {/* Background Shading for Medium 1 & Medium 2 */}
          <rect x="30" y="20" width="290" height="260" fill="#020617" />
          <rect x="320" y="20" width="300" height="260" fill={epsR2 > 15 ? '#1e1b4b' : '#041c2c'} fillOpacity="0.6" />

          {/* Interface Boundary Line at x = 320 */}
          <line x1="320" y1="20" x2="320" y2="280" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="5 3" />
          <text x="320" y="16" textAnchor="middle" fill="#facc15" fontSize="11" fontWeight="bold">
            Planar Boundary (z = 0)
          </text>

          {/* Medium Labels */}
          <text x="175" y="42" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">
            Medium 1 (ε_r1 = {epsR1.toFixed(1)}, η1 = {eta1.toFixed(0)} Ω)
          </text>
          <text x="470" y="42" textAnchor="middle" fill="#a78bfa" fontSize="11" fontWeight="bold">
            Medium 2 (ε_r2 = {epsR2.toFixed(1)}, η2 = {eta2.toFixed(0)} Ω)
          </text>

          {/* Center Zero Baseline */}
          <line x1="40" y1="150" x2="610" y2="150" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />

          {/* Standing wave envelope in Medium 1 */}
          <path d={`M ${med1EnvelopeMax.join(' L ')}`} fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.6" />
          <path d={`M ${med1EnvelopeMin.join(' L ')}`} fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.6" />

          {/* Wave in Medium 1 (Incident + Reflected) */}
          <path d={`M ${med1Points.join(' L ')}`} fill="none" stroke="#38bdf8" strokeWidth="2.5" />

          {/* Wave in Medium 2 (Transmitted) */}
          <path d={`M ${med2Points.join(' L ')}`} fill="none" stroke="#a78bfa" strokeWidth="2.5" />

          {/* Boundary marker dot (shows continuity of tangential E: E1(0) = E2(0)) */}
          {med1Points.length > 0 && (
            <circle
              cx="320"
              cy={parseFloat(med1Points[med1Points.length - 1].split(',')[1])}
              r="4.5"
              fill="#f59e0b"
              stroke="#ffffff"
              strokeWidth="1.5"
            />
          )}

          {/* Vector Direction Arrows */}
          <g transform="translate(60, 245)">
            <line x1="0" y1="0" x2="60" y2="0" stroke="#38bdf8" strokeWidth="2" />
            <polygon points="65,0 58,-4 58,4" fill="#38bdf8" />
            <text x="75" y="4" fill="#38bdf8" fontSize="9" fontWeight="bold">Incident E_i0</text>
          </g>

          <g transform="translate(260, 245)">
            <line x1="0" y1="0" x2="-60" y2="0" stroke="#f59e0b" strokeWidth="2" />
            <polygon points="-65,0 -58,-4 -58,4" fill="#f59e0b" />
            <text x="-135" y="4" fill="#facc15" fontSize="9" fontWeight="bold">Reflected E_r0 (Γ = {gamma.toFixed(2)})</text>
          </g>

          <g transform="translate(420, 245)">
            <line x1="0" y1="0" x2="60" y2="0" stroke="#a78bfa" strokeWidth="2" />
            <polygon points="65,0 58,-4 58,4" fill="#a78bfa" />
            <text x="75" y="4" fill="#a78bfa" fontSize="9" fontWeight="bold">Transmitted E_t0 (τ = {tau.toFixed(2)})</text>
          </g>
        </svg>
      </div>

      {/* Sliders & Computed Parameters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Controls */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3.5">
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-300">{labels.med1Label}</span>
              <span className="text-sky-400 font-mono">{epsR1.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="1.0"
              max="9.0"
              step="0.5"
              value={epsR1}
              onChange={(e) => setEpsR1(parseFloat(e.target.value))}
              className="w-full accent-sky-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-300">{labels.med2Label}</span>
              <span className="text-purple-400 font-mono">{epsR2.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="1.0"
              max="25.0"
              step="0.5"
              value={epsR2}
              onChange={(e) => setEpsR2(parseFloat(e.target.value))}
              className="w-full accent-purple-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-300">{labels.ampLabel}</span>
              <span className="text-amber-400 font-mono">{incidentAmp.toFixed(1)} V/m</span>
            </div>
            <input
              type="range"
              min="2.0"
              max="20.0"
              step="1.0"
              value={incidentAmp}
              onChange={(e) => setIncidentAmp(parseFloat(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
          </div>
        </div>

        {/* Real-Time Metrics & Energy Balance */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-2.5 text-xs font-mono mb-3">
            <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
              <span className="text-slate-400">{labels.gammaLabel}</span>
              <p className="text-amber-300 font-bold text-sm">{gamma >= 0 ? `+${gamma.toFixed(3)}` : gamma.toFixed(3)}</p>
            </div>
            <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
              <span className="text-slate-400">{labels.tauLabel}</span>
              <p className="text-purple-300 font-bold text-sm">+{tau.toFixed(3)}</p>
            </div>
            <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
              <span className="text-slate-400">{labels.swrLabel}</span>
              <p className="text-sky-300 font-bold text-sm">{swr}</p>
            </div>
            <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
              <span className="text-slate-400">Return Loss:</span>
              <p className="text-emerald-300 font-bold text-sm">{returnLossDb} dB</p>
            </div>
          </div>

          {/* Energy Conservation Bar */}
          <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800 text-xs">
            <div className="flex justify-between items-center mb-1.5 text-slate-300">
              <span>Energy Balance (R + T = 100%):</span>
              <span className="font-mono text-cyan-300 font-bold">100.0%</span>
            </div>
            <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden flex">
              <div
                style={{ width: `${(powerReflectance * 100).toFixed(1)}%` }}
                className="bg-amber-500 h-full"
                title={`Reflected: ${(powerReflectance * 100).toFixed(1)}%`}
              />
              <div
                style={{ width: `${(powerTransmittance * 100).toFixed(1)}%` }}
                className="bg-purple-500 h-full"
                title={`Transmitted: ${(powerTransmittance * 100).toFixed(1)}%`}
              />
            </div>
            <div className="flex justify-between text-[10px] mt-1 text-slate-400 font-mono">
              <span className="text-amber-400">Reflected: {(powerReflectance * 100).toFixed(1)}%</span>
              <span className="text-purple-400">Transmitted: {(powerTransmittance * 100).toFixed(1)}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
