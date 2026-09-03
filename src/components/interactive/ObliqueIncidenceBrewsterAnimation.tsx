import React, { useState } from 'react';
import { Compass, RotateCcw, Activity, ShieldAlert, Sparkles, Layers } from 'lucide-react';
import { Language } from '../../types';

interface ObliqueIncidenceBrewsterAnimationProps {
  currentLanguage: Language;
}

export const ObliqueIncidenceBrewsterAnimation: React.FC<ObliqueIncidenceBrewsterAnimationProps> = ({ currentLanguage }) => {
  const [thetaIDeg, setThetaIDeg] = useState<number>(56.3); // Default at Brewster angle for air-to-glass (n1=1, n2=1.5)
  const [n1, setN1] = useState<number>(1.0); // Medium 1 refractive index
  const [n2, setN2] = useState<number>(1.5); // Medium 2 refractive index
  const [polarization, setPolarization] = useState<'parallel' | 'perpendicular'>('parallel'); // TM vs TE

  // Snell's Law calculations
  const thetaIRad = (thetaIDeg * Math.PI) / 180;
  const sinThetaI = Math.sin(thetaIRad);
  const cosThetaI = Math.cos(thetaIRad);

  // Critical angle (when n1 > n2)
  const hasCriticalAngle = n1 > n2;
  const thetaCRad = hasCriticalAngle ? Math.asin(n2 / n1) : null;
  const thetaCDeg = thetaCRad ? (thetaCRad * 180) / Math.PI : null;
  const isTIR = hasCriticalAngle && thetaIDeg > (thetaCDeg ?? 90);

  // Angle of refraction
  const sinThetaTRaw = (n1 / n2) * sinThetaI;
  const thetaTRad = isTIR ? null : Math.asin(Math.min(1.0, sinThetaTRaw));
  const thetaTDeg = thetaTRad !== null ? (thetaTRad * 180) / Math.PI : null;
  const cosThetaT = thetaTRad !== null ? Math.cos(thetaTRad) : 0;

  // Brewster's angle
  const thetaBRad = Math.atan(n2 / n1);
  const thetaBDeg = (thetaBRad * 180) / Math.PI;
  const isAtBrewster = Math.abs(thetaIDeg - thetaBDeg) < 0.5;

  // Fresnel coefficients
  let gamma = 0;
  let tau = 0;
  if (isTIR) {
    gamma = 1.0;
    tau = 0.0;
  } else if (cosThetaT > 0) {
    if (polarization === 'parallel') {
      // TM: (n2 cos θi - n1 cos θt) / (n2 cos θi + n1 cos θt)
      gamma = (n2 * cosThetaI - n1 * cosThetaT) / (n2 * cosThetaI + n1 * cosThetaT);
      tau = (2 * n1 * cosThetaI) / (n2 * cosThetaI + n1 * cosThetaT);
    } else {
      // TE: (n1 cos θi - n2 cos θt) / (n1 cos θi + n2 cos θt)
      gamma = (n1 * cosThetaI - n2 * cosThetaT) / (n1 * cosThetaI + n2 * cosThetaT);
      tau = (2 * n1 * cosThetaI) / (n1 * cosThetaI + n2 * cosThetaT);
    }
  }

  const reflectanceR = Math.min(1.0, gamma * gamma);
  const transmittanceT = Math.max(0.0, 1.0 - reflectanceR);

  const allLabels = {
    en: {
      title: 'Oblique Incidence, Snell’s Law & Brewster Angle Simulator',
      subtitle: 'Analyze parallel (TM) & perpendicular (TE) polarization, Brewster zero-reflection angle, and Total Internal Reflection (TIR)',
      angleLabel: 'Angle of Incidence (θ_i):',
      n1Label: 'Medium 1 Index (n₁):',
      n2Label: 'Medium 2 Index (n₂):',
      polarizationLabel: 'Polarization Mode:',
      tmPol: 'Parallel (TM / p-pol)',
      tePol: 'Perpendicular (TE / s-pol)',
      brewsterBtn: 'Jump to Brewster Angle (θ_B)',
      tirBtn: 'Jump to TIR Scenario (n₁ > n₂)',
      airToGlass: 'Air ⟶ Glass (1.0 ⟶ 1.5)',
      glassToAir: 'Glass ⟶ Air (1.5 ⟶ 1.0)',
      thetaILabel: 'Incident Angle (θ_i):',
      thetaTLabel: 'Refraction Angle (θ_t):',
      thetaBLabel: 'Brewster Angle (θ_B):',
      thetaCLabel: 'Critical Angle (θ_c):',
      gammaLabel: 'Fresnel Reflection (Γ):',
      reflPower: 'Reflectance (R = |Γ|²):',
      transPower: 'Transmittance (T):',
      tirActive: 'Total Internal Reflection Active!',
      brewsterActive: 'Brewster Zero-Reflection Condition Active (TM: R = 0)!',
      reset: 'Reset Default'
    },
    hi: {
      title: 'तिर्यक आपतन, स्नेल नियम एवं ब्रूस्टर कोण सिम्युलेटर',
      subtitle: 'समानांतर (TM) एवं लंबवत (TE) ध्रुवण, ब्रूस्टर शून्य-परावर्तन कोण तथा पूर्ण आंतरिक परावर्तन (TIR) का विश्लेषण',
      angleLabel: 'आपतन कोण (θ_i):',
      n1Label: 'माध्यम 1 अपवर्तनांक (n₁):',
      n2Label: 'माध्यम 2 अपवर्तनांक (n₂):',
      polarizationLabel: 'ध्रुवण मोड:',
      tmPol: 'समानांतर (TM / p-ध्रुवित)',
      tePol: 'लंबवत (TE / s-ध्रुवित)',
      brewsterBtn: 'ब्रूस्टर कोण पर जाएं (θ_B)',
      tirBtn: 'TIR स्थिति पर जाएं (n₁ > n₂)',
      airToGlass: 'वायु ⟶ कांच (1.0 ⟶ 1.5)',
      glassToAir: 'कांच ⟶ वायु (1.5 ⟶ 1.0)',
      thetaILabel: 'आपतन कोण (θ_i):',
      thetaTLabel: 'अपवर्तन कोण (θ_t):',
      thetaBLabel: 'ब्रूस्टर कोण (θ_B):',
      thetaCLabel: 'क्रांतिक कोण (θ_c):',
      gammaLabel: 'फ्रेस्नेल परावर्तन (Γ):',
      reflPower: 'परावर्तकता (R):',
      transPower: 'पारगमता (T):',
      tirActive: 'पूर्ण आंतरिक परावर्तन सक्रिय!',
      brewsterActive: 'ब्रूस्टर शून्य-परावर्तन स्थिति सक्रिय (TM: R = 0)!',
      reset: 'रीसेट'
    },
    bn: {
      title: 'তির্যক আপতন, স্নেলের সূত্র ও ব্রুস্টার কোণ সিমুলেটর',
      subtitle: 'সমান্তরাল (TM) ও লম্ব (TE) পোলারাইজেশন, ব্রুস্টার শূন্য-প্রতিফলন কোণ এবং পূর্ণ অভ্যন্তরীণ প্রতিফলন (TIR) বিশ্লেষণ',
      angleLabel: 'আপতন কোণ (θ_i):',
      n1Label: 'মাধ্যম ১ প্রতিসরাঙ্ক (n₁):',
      n2Label: 'মাধ্যম ২ প্রতিসরাঙ্ক (n₂):',
      polarizationLabel: 'পোলারাইজেশন মোড:',
      tmPol: 'সমান্তরাল (TM / p-পোলারাইজড)',
      tePol: 'লম্ব (TE / s-পোলারাইজড)',
      brewsterBtn: 'ব্রুস্টার কোণে যান (θ_B)',
      tirBtn: 'TIR পরিস্থিতিতে যান (n₁ > n₂)',
      airToGlass: 'বায়ু ⟶ কাচ (১.০ ⟶ ১.৫)',
      glassToAir: 'কাচ ⟶ বায়ু (১.৫ ⟶ ১.০)',
      thetaILabel: 'আপতন কোণ (θ_i):',
      thetaTLabel: 'প্রতিসরণ কোণ (θ_t):',
      thetaBLabel: 'ব্রুস্টার কোণ (θ_B):',
      thetaCLabel: 'সংকট কোণ (θ_c):',
      gammaLabel: 'ফ্রেসনেল প্রতিফলন (Γ):',
      reflPower: 'প্রতিফলন মাত্রা (R):',
      transPower: 'সঞ্চালন মাত্রা (T):',
      tirActive: 'পূর্ণ অভ্যন্তরীণ প্রতিফলন সক্রিয়!',
      brewsterActive: 'ব্রুস্টার শূন্য-প্রতিফলন শর্ত সক্রিয় (TM: R = 0)!',
      reset: 'রিসেট'
    }
  };
  const labels = allLabels[currentLanguage] || allLabels.en;

  // Visual Geometry Points (Boundary at y = 150, Center Point at x = 320, y = 150)
  const originX = 320;
  const originY = 150;
  const rayLength = 135;

  // Incident ray comes from top-left (theta_i measured from vertical normal)
  const incStartX = originX - rayLength * Math.sin(thetaIRad);
  const incStartY = originY - rayLength * Math.cos(thetaIRad);

  // Reflected ray goes to top-right
  const reflEndX = originX + rayLength * Math.sin(thetaIRad);
  const reflEndY = originY - rayLength * Math.cos(thetaIRad);

  // Transmitted ray goes to bottom-right (theta_t measured from vertical normal)
  let transEndX = originX;
  let transEndY = originY;
  if (!isTIR && thetaTRad !== null) {
    transEndX = originX + rayLength * Math.sin(thetaTRad);
    transEndY = originY + rayLength * Math.cos(thetaTRad);
  }

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-5 text-white shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <Compass className="w-6 h-6 text-sky-400" />
            <h3 className="text-lg font-bold text-sky-400">{labels.title}</h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">{labels.subtitle}</p>
        </div>
        <button
          onClick={() => {
            setN1(1.0);
            setN2(1.5);
            setThetaIDeg(56.3);
            setPolarization('parallel');
          }}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          {labels.reset}
        </button>
      </div>

      {/* Preset Quick Actions */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <button
          onClick={() => { setN1(1.0); setN2(1.5); setThetaIDeg(56.3); setPolarization('parallel'); }}
          className="px-2.5 py-1 text-xs rounded bg-sky-950/60 hover:bg-sky-900/80 text-sky-300 font-mono border border-sky-600/40"
        >
          {labels.airToGlass}
        </button>
        <button
          onClick={() => { setN1(1.5); setN2(1.0); setThetaIDeg(33.7); setPolarization('parallel'); }}
          className="px-2.5 py-1 text-xs rounded bg-amber-950/60 hover:bg-amber-900/80 text-amber-300 font-mono border border-amber-600/40"
        >
          {labels.glassToAir}
        </button>
        <button
          onClick={() => { setThetaIDeg(parseFloat(thetaBDeg.toFixed(1))); setPolarization('parallel'); }}
          className="px-2.5 py-1 text-xs rounded bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-300 font-mono border border-emerald-600/40 flex items-center gap-1"
        >
          <Sparkles className="w-3 h-3" />
          {labels.brewsterBtn} ({thetaBDeg.toFixed(1)}°)
        </button>
        {hasCriticalAngle && thetaCDeg && (
          <button
            onClick={() => { setThetaIDeg(parseFloat((thetaCDeg + 5).toFixed(1))); }}
            className="px-2.5 py-1 text-xs rounded bg-red-950/60 hover:bg-red-900/80 text-red-300 font-mono border border-red-600/40 flex items-center gap-1"
          >
            <ShieldAlert className="w-3 h-3" />
            {labels.tirBtn} (&gt; {thetaCDeg.toFixed(1)}°)
          </button>
        )}
      </div>

      {/* Interactive Ray Optics Canvas */}
      <div className="w-full bg-slate-950 rounded-xl border border-slate-800 overflow-hidden mb-5">
        <svg viewBox="0 0 640 310" className="w-full h-auto">
          {/* Top Half: Medium 1 */}
          <rect x="20" y="20" width="600" height="130" fill="#020617" />
          <text x="35" y="45" fill="#38bdf8" fontSize="11" fontWeight="bold">
            Medium 1 (n₁ = {n1.toFixed(2)})
          </text>

          {/* Bottom Half: Medium 2 */}
          <rect x="20" y="150" width="600" height="140" fill={n2 > n1 ? '#042f2e' : '#1e1b4b'} fillOpacity="0.5" />
          <text x="35" y="175" fill="#a78bfa" fontSize="11" fontWeight="bold">
            Medium 2 (n₂ = {n2.toFixed(2)})
          </text>

          {/* Planar Interface */}
          <line x1="20" y1="150" x2="620" y2="150" stroke="#475569" strokeWidth="2" />
          <text x="560" y="145" fill="#94a3b8" fontSize="9">Interface</text>

          {/* Normal Reference Line */}
          <line x1="320" y1="30" x2="320" y2="280" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" />
          <text x="325" y="40" fill="#64748b" fontSize="9">Normal</text>

          {/* Angle Arcs */}
          {/* theta_i arc */}
          <path
            d={`M 320,110 A 40 40 0 0 0 ${320 - 40 * Math.sin(thetaIRad)},${150 - 40 * Math.cos(thetaIRad)}`}
            fill="none"
            stroke="#f59e0b"
            strokeWidth="1.5"
          />
          <text x={300 - 25 * Math.sin(thetaIRad / 2)} y={130 - 25 * Math.cos(thetaIRad / 2)} fill="#facc15" fontSize="10" fontWeight="bold">
            θ_i = {thetaIDeg.toFixed(1)}°
          </text>

          {/* theta_r arc */}
          <path
            d={`M 320,110 A 40 40 0 0 1 ${320 + 40 * Math.sin(thetaIRad)},${150 - 40 * Math.cos(thetaIRad)}`}
            fill="none"
            stroke="#f59e0b"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />

          {/* theta_t arc */}
          {!isTIR && thetaTRad !== null && thetaTDeg !== null && (
            <path
              d={`M 320,190 A 40 40 0 0 1 ${320 + 40 * Math.sin(thetaTRad)},${150 + 40 * Math.cos(thetaTRad)}`}
              fill="none"
              stroke="#a78bfa"
              strokeWidth="1.5"
            />
          )}
          {!isTIR && thetaTDeg !== null && (
            <text x="335" y="180" fill="#c4b5fd" fontSize="10" fontWeight="bold">
              θ_t = {thetaTDeg.toFixed(1)}°
            </text>
          )}

          {/* Incident Ray */}
          <line x1={incStartX} y1={incStartY} x2={originX} y2={originY} stroke="#38bdf8" strokeWidth="3" />
          <circle cx={incStartX} cy={incStartY} r="3" fill="#38bdf8" />
          {/* Arrow on incident ray */}
          <polygon
            points={`${originX - 45 * Math.sin(thetaIRad)},${originY - 45 * Math.cos(thetaIRad)} ${originX - 52 * Math.sin(thetaIRad) - 5 * Math.cos(thetaIRad)},${originY - 52 * Math.cos(thetaIRad) + 5 * Math.sin(thetaIRad)} ${originX - 52 * Math.sin(thetaIRad) + 5 * Math.cos(thetaIRad)},${originY - 52 * Math.cos(thetaIRad) - 5 * Math.sin(thetaIRad)}`}
            fill="#38bdf8"
          />

          {/* Reflected Ray (thickness scaled with reflectance) */}
          <line
            x1={originX}
            y1={originY}
            x2={reflEndX}
            y2={reflEndY}
            stroke="#f59e0b"
            strokeWidth={Math.max(0.5, reflectanceR * 3.5)}
            strokeOpacity={isAtBrewster && polarization === 'parallel' ? 0.1 : Math.max(0.2, reflectanceR)}
          />
          {/* Arrow on reflected ray */}
          {reflectanceR > 0.05 && (
            <polygon
              points={`${originX + 55 * Math.sin(thetaIRad)},${originY - 55 * Math.cos(thetaIRad)} ${originX + 48 * Math.sin(thetaIRad) - 4 * Math.cos(thetaIRad)},${originY - 48 * Math.cos(thetaIRad) - 4 * Math.sin(thetaIRad)} ${originX + 48 * Math.sin(thetaIRad) + 4 * Math.cos(thetaIRad)},${originY - 48 * Math.cos(thetaIRad) + 4 * Math.sin(thetaIRad)}`}
              fill="#f59e0b"
            />
          )}

          {/* Transmitted Ray (or evanescent wave) */}
          {!isTIR && thetaTRad !== null ? (
            <>
              <line
                x1={originX}
                y1={originY}
                x2={transEndX}
                y2={transEndY}
                stroke="#a78bfa"
                strokeWidth={Math.max(0.5, transmittanceT * 3.5)}
                strokeOpacity={Math.max(0.3, transmittanceT)}
              />
              <polygon
                points={`${originX + 55 * Math.sin(thetaTRad)},${originY + 55 * Math.cos(thetaTRad)} ${originX + 48 * Math.sin(thetaTRad) - 4 * Math.cos(thetaTRad)},${originY + 48 * Math.cos(thetaTRad) + 4 * Math.sin(thetaTRad)} ${originX + 48 * Math.sin(thetaTRad) + 4 * Math.cos(thetaTRad)},${originY + 48 * Math.cos(thetaTRad) - 4 * Math.sin(thetaTRad)}`}
                fill="#a78bfa"
              />
            </>
          ) : (
            /* Evanescent Field in Medium 2 */
            <g>
              <path
                d="M 320,150 Q 380,152 460,153"
                fill="none"
                stroke="#ef4444"
                strokeWidth="2"
                strokeDasharray="3 3"
              />
              <text x="350" y="170" fill="#f87171" fontSize="9" fontWeight="bold">
                Evanescent Wave (Decays exponentially e^(-α z))
              </text>
            </g>
          )}

          {/* Banner inside SVG */}
          {isAtBrewster && polarization === 'parallel' && (
            <g transform="translate(180, 260)">
              <rect x="0" y="0" width="280" height="26" rx="4" fill="#065f46" stroke="#10b981" />
              <text x="140" y="17" textAnchor="middle" fill="#ecfdf5" fontSize="10" fontWeight="bold">
                ⭐ Brewster Angle: 100% Transmitted (Zero Reflection)
              </text>
            </g>
          )}

          {isTIR && (
            <g transform="translate(180, 260)">
              <rect x="0" y="0" width="280" height="26" rx="4" fill="#7f1d1d" stroke="#ef4444" />
              <text x="140" y="17" textAnchor="middle" fill="#fee2e2" fontSize="10" fontWeight="bold">
                ⚠️ Total Internal Reflection: 100% Reflected (R = 1.0)
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* Sliders & Parameters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Controls */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3.5">
          {/* Polarization toggle */}
          <div>
            <span className="text-xs font-semibold text-slate-300 mb-1.5 block">{labels.polarizationLabel}</span>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setPolarization('parallel')}
                className={`py-1.5 text-xs rounded font-semibold transition-colors ${polarization === 'parallel' ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
              >
                {labels.tmPol}
              </button>
              <button
                onClick={() => setPolarization('perpendicular')}
                className={`py-1.5 text-xs rounded font-semibold transition-colors ${polarization === 'perpendicular' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
              >
                {labels.tePol}
              </button>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-300">{labels.angleLabel}</span>
              <span className="text-amber-400 font-mono">{thetaIDeg.toFixed(1)}°</span>
            </div>
            <input
              type="range"
              min="0.0"
              max="88.0"
              step="0.5"
              value={thetaIDeg}
              onChange={(e) => setThetaIDeg(parseFloat(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-slate-300">{labels.n1Label}</span>
                <span className="text-sky-400 font-mono">{n1.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="2.5"
                step="0.05"
                value={n1}
                onChange={(e) => setN1(parseFloat(e.target.value))}
                className="w-full accent-sky-500 cursor-pointer"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-slate-300">{labels.n2Label}</span>
                <span className="text-purple-400 font-mono">{n2.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="2.5"
                step="0.05"
                value={n2}
                onChange={(e) => setN2(parseFloat(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Real-time Math & Metrics */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-3">
            <div className="bg-slate-900 p-2 rounded border border-slate-800">
              <span className="text-slate-400">{labels.thetaBLabel}</span>
              <p className="text-emerald-300 font-bold text-sm">{thetaBDeg.toFixed(1)}°</p>
            </div>
            <div className="bg-slate-900 p-2 rounded border border-slate-800">
              <span className="text-slate-400">{labels.thetaCLabel}</span>
              <p className="text-red-300 font-bold text-sm">{thetaCDeg ? `${thetaCDeg.toFixed(1)}°` : 'None (n1 ≤ n2)'}</p>
            </div>
            <div className="bg-slate-900 p-2 rounded border border-slate-800">
              <span className="text-slate-400">{labels.gammaLabel}</span>
              <p className="text-amber-300 font-bold text-sm">{gamma.toFixed(3)}</p>
            </div>
            <div className="bg-slate-900 p-2 rounded border border-slate-800">
              <span className="text-slate-400">{labels.thetaTLabel}</span>
              <p className="text-purple-300 font-bold text-sm">{thetaTDeg !== null ? `${thetaTDeg.toFixed(1)}°` : 'TIR'}</p>
            </div>
          </div>

          {/* Energy Bar */}
          <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800 text-xs">
            <div className="flex justify-between items-center mb-1 text-slate-300">
              <span>Energy Division:</span>
              <span className="font-mono text-cyan-300 font-bold">R: {(reflectanceR * 100).toFixed(1)}% | T: {(transmittanceT * 100).toFixed(1)}%</span>
            </div>
            <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden flex">
              <div
                style={{ width: `${(reflectanceR * 100).toFixed(1)}%` }}
                className="bg-amber-500 h-full transition-all"
              />
              <div
                style={{ width: `${(transmittanceT * 100).toFixed(1)}%` }}
                className="bg-purple-500 h-full transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
