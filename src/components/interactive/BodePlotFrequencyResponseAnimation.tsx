import React, { useState, useId } from 'react';
import { Language } from '../../types';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const BodePlotFrequencyResponseAnimation: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const labelId = useId();

  // System type: 'firstOrderPole' | 'firstOrderZeroPole' | 'secondOrderRLC'
  const [systemType, setSystemType] = useState<'firstOrderPole' | 'firstOrderZeroPole' | 'secondOrderRLC'>('secondOrderRLC');

  // DC Gain K (dB)
  const [gainKDb, setGainKDb] = useState<number>(0);

  // Corner Frequency omega_c or natural frequency omega_0 (rad/s, log scale 10^0 to 10^4)
  const [logOmega0, setLogOmega0] = useState<number>(2); // 10^2 = 100 rad/s
  const omega0 = Math.pow(10, logOmega0);

  // Damping ratio zeta for 2nd order (0.1 to 1.5)
  const [zeta, setZeta] = useState<number>(0.3);

  // Zero frequency for lead-lag (rad/s)
  const [logOmegaZ, setLogOmegaZ] = useState<number>(1); // 10^1 = 10 rad/s
  const omegaZ = Math.pow(10, logOmegaZ);

  // Interactive Frequency Cursor (log scale 10^-1 to 10^4)
  const [logWCursor, setLogWCursor] = useState<number>(2);
  const wCursor = Math.pow(10, logWCursor);

  // Evaluate H(jw) at wCursor
  // Magnitude in dB and Phase in degrees
  let magDbCursor = 0;
  let phaseDegCursor = 0;
  let resonancePeakDb = 0;

  if (systemType === 'firstOrderPole') {
    // H(s) = K / (1 + s/w0)
    const ratio = wCursor / omega0;
    const magLinear = Math.pow(10, gainKDb / 20) / Math.sqrt(1 + ratio * ratio);
    magDbCursor = 20 * Math.log10(magLinear);
    phaseDegCursor = -(Math.atan(ratio) * 180) / Math.PI;
  } else if (systemType === 'firstOrderZeroPole') {
    // H(s) = K * (1 + s/wz) / (1 + s/w0)
    const rZ = wCursor / omegaZ;
    const rP = wCursor / omega0;
    const magLinear = Math.pow(10, gainKDb / 20) * (Math.sqrt(1 + rZ * rZ) / Math.sqrt(1 + rP * rP));
    magDbCursor = 20 * Math.log10(magLinear);
    phaseDegCursor = (Math.atan(rZ) - Math.atan(rP)) * (180 / Math.PI);
  } else {
    // 2nd-order RLC / Standard form: H(s) = K / (1 + 2*zeta*(s/w0) + (s/w0)^2)
    const u = wCursor / omega0;
    const denomReal = 1 - u * u;
    const denomImag = 2 * zeta * u;
    const denomMag = Math.sqrt(denomReal * denomReal + denomImag * denomImag);
    const magLinear = Math.pow(10, gainKDb / 20) / (denomMag || 1e-6);
    magDbCursor = 20 * Math.log10(magLinear);
    phaseDegCursor = -(Math.atan2(denomImag, denomReal) * 180) / Math.PI;
    if (zeta < 0.707) {
      const peakLinear = 1 / (2 * zeta * Math.sqrt(1 - zeta * zeta));
      resonancePeakDb = gainKDb + 20 * Math.log10(peakLinear);
    }
  }

  const t = {
    title: {
      en: 'Bode Plots & Frequency Response of AC Circuits',
      hi: 'बोडे प्लॉट एवं एसी परिपथ की आवृत्ति अनुक्रिया',
      bn: 'বোড প্লট ও এসি সার্কিটের কম্পাঙ্ক প্রতিক্রিয়া'
    },
    subtitle: {
      en: 'Visualize asymptotic and exact logarithmic magnitude [dB] and phase [deg] responses for 1st and 2nd-order networks',
      hi: 'प्रथम एवं द्वितीय क्रम के नेटवर्क हेतु अनन्तस्पर्शी एवं वास्तविक लघुगणकीय परिमाण [dB] एवं कला [deg] देखें',
      bn: '১ম ও ২য় ক্রমের নেটওয়ার্কের জন্য অ্যাসিম্পটোটিক ও বাস্তব লগারিদমিক বিস্তার [dB] ও দশা [deg] পর্যবেক্ষণ করুন'
    },
    singlePole: { en: '1st-Order Low-Pass Pole', hi: 'प्रथम-क्रम पोल', bn: '১ম-ক্রম পোল' },
    zeroPole: { en: 'Lead/Lag (Zero + Pole)', hi: 'अग्र/पश्च (शून्य + पोल)', bn: 'লিড/ল্যাগ (জিরো + পোল)' },
    secondOrder: { en: '2nd-Order RLC Resonant', hi: 'द्वितीय-क्रम RLC अनुनादी', bn: '২য়-ক্রম RLC রেজোন্যান্ট' }
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header & Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Interactive Frequency Domain Analysis</span>
          </div>
          <h3 id={labelId} className="text-xl font-bold text-white mt-1">
            {t.title[lang]}
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            {t.subtitle[lang]}
          </p>
        </div>

        {/* System Type Selector */}
        <div className="flex flex-wrap gap-1 bg-slate-950 p-1.5 rounded-lg border border-slate-800">
          {(['secondOrderRLC', 'firstOrderPole', 'firstOrderZeroPole'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setSystemType(mode)}
              className={`px-3 py-1.5 text-xs font-semibold rounded transition ${
                systemType === mode ? 'bg-cyan-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              {mode === 'secondOrderRLC' && t.secondOrder[lang]}
              {mode === 'firstOrderPole' && t.singlePole[lang]}
              {mode === 'firstOrderZeroPole' && t.zeroPole[lang]}
            </button>
          ))}
        </div>
      </div>

      {/* Parameter Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        {/* Natural Frequency omega_0 */}
        <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2">
          <span className="font-semibold text-cyan-300 block">Corner Freq (ω₀ or ω_p)</span>
          <div className="flex justify-between">
            <span>ω₀:</span>
            <span className="font-mono text-cyan-400">{omega0.toFixed(0)} rad/s</span>
          </div>
          <input
            type="range"
            min="0"
            max="4"
            step="0.1"
            value={logOmega0}
            onChange={(e) => setLogOmega0(Number(e.target.value))}
            aria-label="Corner frequency omega0 in rad/s"
            className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
          <div className="text-[10px] text-slate-400">
            f₀ = {(omega0 / (2 * Math.PI)).toFixed(1)} Hz
          </div>
        </div>

        {/* Damping Ratio zeta (or Zero for lead lag) */}
        {systemType === 'secondOrderRLC' ? (
          <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2">
            <span className="font-semibold text-amber-300 block">Damping Ratio (ζ)</span>
            <div className="flex justify-between">
              <span>ζ:</span>
              <span className="font-mono text-amber-400">{zeta.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.05"
              max="1.5"
              step="0.05"
              value={zeta}
              onChange={(e) => setZeta(Number(e.target.value))}
              aria-label="Damping ratio zeta"
              className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
            />
            <div className="text-[10px] text-slate-400">
              {zeta < 0.707 ? `Resonant peak Q = ${(1 / (2 * zeta)).toFixed(2)}` : 'Overdamped / Critically Damped'}
            </div>
          </div>
        ) : systemType === 'firstOrderZeroPole' ? (
          <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2">
            <span className="font-semibold text-emerald-300 block">Zero Frequency (ω_z)</span>
            <div className="flex justify-between">
              <span>ω_z:</span>
              <span className="font-mono text-emerald-400">{omegaZ.toFixed(0)} rad/s</span>
            </div>
            <input
              type="range"
              min="0"
              max="4"
              step="0.1"
              value={logOmegaZ}
              onChange={(e) => setLogOmegaZ(Number(e.target.value))}
              aria-label="Zero frequency in rad/s"
              className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
            />
            <div className="text-[10px] text-slate-400">
              {omegaZ < omega0 ? 'Lead network (+20dB/dec zero first)' : 'Lag network'}
            </div>
          </div>
        ) : (
          <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2 opacity-50">
            <span className="font-semibold text-slate-400 block">Roll-Off Rate</span>
            <div className="font-mono text-emerald-400 text-sm mt-1">-20 dB / decade</div>
            <div className="text-[10px] text-slate-400">-45° phase shift at ω₀</div>
          </div>
        )}

        {/* DC Gain K */}
        <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2">
          <span className="font-semibold text-purple-300 block">DC Gain (K)</span>
          <div className="flex justify-between">
            <span>K:</span>
            <span className="font-mono text-purple-400">{gainKDb} dB ({Math.pow(10, gainKDb / 20).toFixed(2)}x)</span>
          </div>
          <input
            type="range"
            min="-20"
            max="20"
            step="2"
            value={gainKDb}
            onChange={(e) => setGainKDb(Number(e.target.value))}
            aria-label="DC Gain in dB"
            className="w-full accent-purple-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
          <div className="text-[10px] text-slate-400">Vertical baseline shift</div>
        </div>

        {/* Frequency Cursor */}
        <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2">
          <span className="font-semibold text-cyan-300 block">Cursor Frequency (ω)</span>
          <div className="flex justify-between">
            <span>ω:</span>
            <span className="font-mono text-cyan-400">{wCursor.toFixed(1)} rad/s</span>
          </div>
          <input
            type="range"
            min="0" // 1 rad/s
            max="4" // 10,000 rad/s
            step="0.05"
            value={logWCursor}
            onChange={(e) => setLogWCursor(Number(e.target.value))}
            aria-label="Frequency cursor in rad/s"
            className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
          <div className="text-[10px] text-slate-400">
            Slide to probe exact Bode coordinates
          </div>
        </div>
      </div>

      {/* Dual Bode Plots: Magnitude (dB) + Phase (deg) */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-4">
        {/* Magnitude Plot */}
        <div>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="font-semibold text-cyan-300">
              Bode Magnitude Plot |H(jω)| [dB] vs Frequency ω (1 to 10⁴ rad/s)
            </span>
            <span className="font-mono text-cyan-400">
              At ω = {wCursor.toFixed(1)} rad/s : <span className="font-bold text-white">{magDbCursor.toFixed(1)} dB</span>
            </span>
          </div>
          <svg viewBox="0 0 740 160" className="w-full h-auto text-slate-400 select-none">
            {/* Grid & Decades: 10^0, 10^1, 10^2, 10^3, 10^4 */}
            <line x1="60" y1="15" x2="60" y2="135" stroke="#334155" strokeWidth="2" />
            <line x1="60" y1="135" x2="700" y2="135" stroke="#334155" strokeWidth="2" />

            {/* Horizontal dB lines: +20, 0, -20, -40, -60 */}
            {[20, 0, -20, -40, -60].map((db) => {
              // Map: +20dB -> 25, 0dB -> 50, -20dB -> 75, -40dB -> 100, -60dB -> 125
              const y = 50 - db * 1.25;
              return (
                <g key={db}>
                  <line x1="60" y1={y} x2="700" y2={y} stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
                  <text x="50" y={y + 3} textAnchor="end" fill="#64748b" fontSize="9" fontFamily="monospace">{db}dB</text>
                </g>
              );
            })}

            {/* Decades labels */}
            {[0, 1, 2, 3, 4].map((dec) => {
              const x = 60 + (dec / 4) * 640;
              return (
                <g key={dec}>
                  <line x1={x} y1="15" x2={x} y2="135" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />
                  <text x={x} y="148" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="monospace">10^{dec}</text>
                </g>
              );
            })}

            {/* Exact Magnitude Curve */}
            {(() => {
              const pts: string[] = [];
              for (let d = 0; d <= 4; d += 0.04) {
                const w = Math.pow(10, d);
                let mag = 0;
                if (systemType === 'firstOrderPole') {
                  const r = w / omega0;
                  mag = Math.pow(10, gainKDb / 20) / Math.sqrt(1 + r * r);
                } else if (systemType === 'firstOrderZeroPole') {
                  const rZ = w / omegaZ;
                  const rP = w / omega0;
                  mag = Math.pow(10, gainKDb / 20) * (Math.sqrt(1 + rZ * rZ) / Math.sqrt(1 + rP * rP));
                } else {
                  const u = w / omega0;
                  const dr = 1 - u * u;
                  const di = 2 * zeta * u;
                  mag = Math.pow(10, gainKDb / 20) / Math.sqrt(dr * dr + di * di || 1e-6);
                }
                const db = 20 * Math.log10(mag || 1e-5);
                const x = 60 + (d / 4) * 640;
                const y = Math.max(15, Math.min(135, 50 - db * 1.25));
                pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
              }
              return (
                <polyline fill="none" stroke="#38bdf8" strokeWidth="2.5" points={pts.join(' ')} />
              );
            })()}

            {/* Cursor on Magnitude */}
            {(() => {
              const cx = 60 + (logWCursor / 4) * 640;
              const cy = Math.max(15, Math.min(135, 50 - magDbCursor * 1.25));
              return (
                <g>
                  <line x1={cx} y1="15" x2={cx} y2="135" stroke="#c084fc" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx={cx} cy={cy} r="5" fill="#c084fc" stroke="#ffffff" strokeWidth="1.5" />
                </g>
              );
            })()}
          </svg>
        </div>

        {/* Phase Plot */}
        <div>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="font-semibold text-emerald-300">
              Bode Phase Plot ∠H(jω) [deg] vs Frequency ω
            </span>
            <span className="font-mono text-emerald-400">
              At ω = {wCursor.toFixed(1)} rad/s : <span className="font-bold text-white">{phaseDegCursor.toFixed(1)}°</span>
            </span>
          </div>
          <svg viewBox="0 0 740 140" className="w-full h-auto text-slate-400 select-none">
            <line x1="60" y1="15" x2="60" y2="120" stroke="#334155" strokeWidth="2" />
            <line x1="60" y1="120" x2="700" y2="120" stroke="#334155" strokeWidth="2" />

            {/* Horizontal Phase lines: +90, 0, -90, -180 */}
            {[90, 0, -90, -180].map((ph) => {
              // Map: +90 -> 20, 0 -> 50, -90 -> 80, -180 -> 110
              const y = 50 - (ph / 90) * 30;
              return (
                <g key={ph}>
                  <line x1="60" y1={y} x2="700" y2={y} stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
                  <text x="50" y={y + 3} textAnchor="end" fill="#64748b" fontSize="9" fontFamily="monospace">{ph}°</text>
                </g>
              );
            })}

            {/* Decades labels */}
            {[0, 1, 2, 3, 4].map((dec) => {
              const x = 60 + (dec / 4) * 640;
              return (
                <g key={dec}>
                  <line x1={x} y1="15" x2={x} y2="120" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />
                  <text x={x} y="132" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="monospace">10^{dec}</text>
                </g>
              );
            })}

            {/* Exact Phase Curve */}
            {(() => {
              const pts: string[] = [];
              for (let d = 0; d <= 4; d += 0.04) {
                const w = Math.pow(10, d);
                let ph = 0;
                if (systemType === 'firstOrderPole') {
                  const r = w / omega0;
                  ph = -(Math.atan(r) * 180) / Math.PI;
                } else if (systemType === 'firstOrderZeroPole') {
                  const rZ = w / omegaZ;
                  const rP = w / omega0;
                  ph = (Math.atan(rZ) - Math.atan(rP)) * (180 / Math.PI);
                } else {
                  const u = w / omega0;
                  const dr = 1 - u * u;
                  const di = 2 * zeta * u;
                  ph = -(Math.atan2(di, dr) * 180) / Math.PI;
                }
                const x = 60 + (d / 4) * 640;
                const y = Math.max(15, Math.min(120, 50 - (ph / 90) * 30));
                pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
              }
              return (
                <polyline fill="none" stroke="#10b981" strokeWidth="2.5" points={pts.join(' ')} />
              );
            })()}

            {/* Cursor on Phase */}
            {(() => {
              const cx = 60 + (logWCursor / 4) * 640;
              const cy = Math.max(15, Math.min(120, 50 - (phaseDegCursor / 90) * 30));
              return (
                <g>
                  <line x1={cx} y1="15" x2={cx} y2="120" stroke="#c084fc" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx={cx} cy={cy} r="5" fill="#c084fc" stroke="#ffffff" strokeWidth="1.5" />
                </g>
              );
            })()}
          </svg>
        </div>
      </div>

      {/* Engineering Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
        <div className="bg-slate-950 p-3 rounded-lg border border-cyan-500/30 space-y-1">
          <span className="text-cyan-400 font-bold block">Magnitude Coordinates</span>
          <div className="text-slate-300">Frequency: <span className="text-white font-bold">{wCursor.toFixed(1)} rad/s</span></div>
          <div className="text-slate-300">Gain (dB): <span className="text-cyan-300 font-bold">{magDbCursor.toFixed(2)} dB</span></div>
          <div className="text-slate-300">Linear Gain: <span className="text-cyan-300">{Math.pow(10, magDbCursor / 20).toFixed(3)}x</span></div>
        </div>

        <div className="bg-slate-950 p-3 rounded-lg border border-emerald-500/30 space-y-1">
          <span className="text-emerald-400 font-bold block">Phase & Slope Behavior</span>
          <div className="text-slate-300">Phase Angle: <span className="text-emerald-300 font-bold">{phaseDegCursor.toFixed(1)}°</span></div>
          <div className="text-slate-400 text-[11px]">
            High-freq asymptote: {systemType === 'secondOrderRLC' ? '-40 dB/decade' : systemType === 'firstOrderPole' ? '-20 dB/decade' : '0 dB/decade (net)'}
          </div>
        </div>

        <div className="bg-slate-950 p-3 rounded-lg border border-amber-500/30 space-y-1">
          <span className="text-amber-400 font-bold block">Key Frequency Features</span>
          {systemType === 'secondOrderRLC' && zeta < 0.707 ? (
            <div className="text-amber-300">
              Resonant Peak: <span className="font-bold">{resonancePeakDb.toFixed(1)} dB</span> at ω_r = {(omega0 * Math.sqrt(1 - 2 * zeta * zeta)).toFixed(1)} rad/s
            </div>
          ) : (
            <div className="text-slate-300">
              Corner Break: <span className="text-amber-300 font-bold">{omega0.toFixed(0)} rad/s</span> (-3 dB point)
            </div>
          )}
          <div className="text-slate-400 text-[10px]">
            Phase at corner: {systemType === 'secondOrderRLC' ? '-90°' : '-45°'}
          </div>
        </div>
      </div>
    </div>
  );
};
