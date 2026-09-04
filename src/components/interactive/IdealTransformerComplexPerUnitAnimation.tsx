import React, { useState, useId } from 'react';
import { Language } from '../../types';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const IdealTransformerComplexPerUnitAnimation: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const labelId = useId();

  // Mode: 'complexRatio' | 'perUnitSystem'
  const [activeTab, setActiveTab] = useState<'complexRatio' | 'perUnitSystem'>('complexRatio');

  // Mode 1: Complex Turns Ratio (Phase-Shifting Transformer / Quad Booster)
  const [turnsRatioA, setTurnsRatioA] = useState<number>(2.0); // magnitude |a|
  const [phaseShiftDeg, setPhaseShiftDeg] = useState<number>(15); // angle in degrees (-30 to +30)
  const [primaryV1Mag, setPrimaryV1Mag] = useState<number>(230); // Volts
  const [loadZMag, setLoadZMag] = useState<number>(20); // Ohms
  const [loadZAngDeg, setLoadZAngDeg] = useState<number>(30); // inductive load degrees

  // Calculations for Complex Turns Ratio: a_complex = a * e^(j*theta)
  // V1 = a_complex * V2  ==>  V2 = V1 / a_complex = (V1 / a) * e^(-j*theta)
  const phaseRad = (phaseShiftDeg * Math.PI) / 180;
  const v2Mag = turnsRatioA > 0 ? primaryV1Mag / turnsRatioA : 0;
  const v2AngDeg = -phaseShiftDeg;

  // I2 = V2 / Z_L
  const i2Mag = loadZMag > 0 ? v2Mag / loadZMag : 0;
  const i2AngDeg = v2AngDeg - loadZAngDeg;

  // I1 = (1 / a_complex*) * I2 = (1 / (a * e^(-j*theta))) * I2 = (I2 / a) * e^(j*theta)
  const i1Mag = turnsRatioA > 0 ? i2Mag / turnsRatioA : 0;
  const i1AngDeg = i2AngDeg + phaseShiftDeg;

  // Reflected Load Impedance: Z_in = a_complex * a_complex* * Z_L = |a|^2 * Z_L (magnitude scaled by a^2, angle unchanged!)
  const reflectedZMag = turnsRatioA * turnsRatioA * loadZMag;
  const reflectedZAngDeg = loadZAngDeg;

  // Real and Reactive Power delivered to load
  const loadP_W = v2Mag * i2Mag * Math.cos((loadZAngDeg * Math.PI) / 180);
  const loadQ_VAR = v2Mag * i2Mag * Math.sin((loadZAngDeg * Math.PI) / 180);

  // Mode 2: Per-Unit System & Base Conversion
  const [ratedMva, setRatedMva] = useState<number>(50); // Transformer rating S_base1 (MVA)
  const [ratedKv, setRatedKv] = useState<number>(132); // Rated KV (kV)
  const [ratedZpu, setRatedZpu] = useState<number>(0.10); // 10% impedance = 0.10 p.u.
  const [sysMvaBase, setSysMvaBase] = useState<number>(100); // System base S_base2 (MVA)
  const [sysKvBase, setSysKvBase] = useState<number>(138); // System base V_base2 (kV)

  // Base calculations
  // Z_base_old = (V_old)^2 / S_old = (132)^2 / 50 = 348.48 Ohms
  const zBaseOld = ratedMva > 0 ? (ratedKv * ratedKv) / ratedMva : 0;
  // Actual Ohmic Impedance Z_actual = Z_pu_old * Z_base_old
  const zActualOhm = ratedZpu * zBaseOld;
  // Z_base_new = (V_new)^2 / S_new = (138)^2 / 100 = 190.44 Ohms
  const zBaseNew = sysMvaBase > 0 ? (sysKvBase * sysKvBase) / sysMvaBase : 0;
  // Z_pu_new = Z_actual / Z_base_new = Z_pu_old * (S_new / S_old) * (V_old / V_new)^2
  const zPuNew = zBaseNew > 0 ? zActualOhm / zBaseNew : 0;

  // Translations
  const t = {
    title: {
      en: 'Ideal Transformer Complex Turns Ratio & Per-Unit (p.u.) System Explorer',
      hi: 'आदर्श ट्रांसफार्मर सम्मिश्र फेरा अनुपात एवं प्रति-इकाई (p.u.) प्रणाली अन्वेषक',
      bn: 'আদর্শ ট্রান্সফরমার জটিল টার্নস রেশিও ও পার-ইউনিট (p.u.) সিস্টেম এক্সপ্লোরার'
    },
    subtitle: {
      en: 'Phase-Shifting Transformers (PST) & Power System Base Conversion',
      hi: 'फेज-शिफ्टिंग ट्रांसफार्मर (PST) एवं पावर सिस्टम बेस रूपांतरण',
      bn: 'ফেজ-শিফটিং ট্রান্সফরমার (PST) ও পাওয়ার সিস্টেম বেস রূপান্তর'
    },
    tabComplex: {
      en: 'Complex Turns Ratio (PST)',
      hi: 'सम्मिश्र फेरा अनुपात (PST)',
      bn: 'জটিল টার্নস রেশিও (PST)'
    },
    tabPu: {
      en: 'Per-Unit (p.u.) Base Conversion',
      hi: 'प्रति-इकाई (p.u.) बेस रूपांतरण',
      bn: 'পার-ইউনিট (p.u.) বেস রূপান্তর'
    }
  };

  return (
    <div
      id={`interactive-ideal-tr-${labelId}`}
      className="bg-slate-900 border border-slate-700 rounded-xl p-5 shadow-2xl text-slate-100 my-6"
      role="region"
      aria-labelledby={`title-${labelId}`}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-700 pb-4 mb-5">
        <div>
          <h3 id={`title-${labelId}`} className="text-xl font-bold text-cyan-400">
            {t.title[lang]}
          </h3>
          <p className="text-xs text-slate-400 mt-1">{t.subtitle[lang]}</p>
        </div>
        <div className="flex bg-slate-800 p-1 rounded-lg border border-slate-700" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'complexRatio'}
            onClick={() => setActiveTab('complexRatio')}
            className={`px-3 py-1.5 rounded text-xs font-semibold transition ${
              activeTab === 'complexRatio'
                ? 'bg-cyan-600 text-white shadow'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            {t.tabComplex[lang]}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'perUnitSystem'}
            onClick={() => setActiveTab('perUnitSystem')}
            className={`px-3 py-1.5 rounded text-xs font-semibold transition ${
              activeTab === 'perUnitSystem'
                ? 'bg-cyan-600 text-white shadow'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            {t.tabPu[lang]}
          </button>
        </div>
      </div>

      {activeTab === 'complexRatio' ? (
        /* Complex Turns Ratio Simulator */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls */}
          <div className="lg:col-span-5 bg-slate-800/80 p-4 rounded-lg border border-slate-700 space-y-4 text-xs">
            <h4 className="font-semibold text-cyan-300 border-b border-slate-700 pb-2">
              Phase-Shifting Transformer Parameters
            </h4>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Turns Ratio Magnitude |a| = N1/N2:</span>
                <span className="font-mono text-cyan-400 font-bold">{turnsRatioA.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="4.0"
                step="0.1"
                value={turnsRatioA}
                onChange={(e) => setTurnsRatioA(parseFloat(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
                aria-label="Turns Ratio Magnitude"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Phase Shift Angle θ (deg):</span>
                <span className={`font-mono font-bold ${phaseShiftDeg !== 0 ? 'text-amber-400' : 'text-slate-400'}`}>
                  {phaseShiftDeg > 0 ? `+${phaseShiftDeg}°` : `${phaseShiftDeg}°`}
                </span>
              </div>
              <input
                type="range"
                min="-30"
                max="30"
                step="1"
                value={phaseShiftDeg}
                onChange={(e) => setPhaseShiftDeg(parseInt(e.target.value, 10))}
                className="w-full accent-amber-400 cursor-pointer"
                aria-label="Phase Shift Angle"
              />
              <span className="text-[10px] text-slate-400 block mt-0.5">
                Quadrature booster injects a perpendicular voltage component
              </span>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Primary Voltage V1:</span>
                <span className="font-mono text-cyan-400 font-bold">{primaryV1Mag} V ∠ 0°</span>
              </div>
              <input
                type="range"
                min="100"
                max="400"
                step="10"
                value={primaryV1Mag}
                onChange={(e) => setPrimaryV1Mag(parseInt(e.target.value, 10))}
                className="w-full accent-cyan-400 cursor-pointer"
                aria-label="Primary Voltage Magnitude"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Load Impedance |Z_L|:</span>
                <span className="font-mono text-emerald-400 font-bold">{loadZMag} Ω ∠ {loadZAngDeg}°</span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                step="1"
                value={loadZMag}
                onChange={(e) => setLoadZMag(parseInt(e.target.value, 10))}
                className="w-full accent-emerald-400 cursor-pointer"
                aria-label="Load Impedance Magnitude"
              />
            </div>

            <div className="p-2.5 bg-slate-900/90 rounded border border-slate-700/80 font-mono text-[11px] space-y-1">
              <div className="text-cyan-300 font-semibold">Phasor Relationships:</div>
              <div>a = {turnsRatioA.toFixed(2)} ∠ {phaseShiftDeg}°</div>
              <div className="text-amber-300">V2 = V1/a = {v2Mag.toFixed(1)} V ∠ {v2AngDeg}°</div>
              <div className="text-emerald-300">I2 = V2/ZL = {i2Mag.toFixed(2)} A ∠ {i2AngDeg.toFixed(1)}°</div>
              <div className="text-cyan-300">I1 = I2/a* = {i1Mag.toFixed(2)} A ∠ {i1AngDeg.toFixed(1)}°</div>
            </div>
          </div>

          {/* Visualization Canvas */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            {/* SVG Diagram */}
            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 flex flex-col items-center justify-center">
              <svg viewBox="0 0 460 200" className="w-full max-w-md h-auto" aria-hidden="true">
                <defs>
                  <marker id="arrow-c-cyan" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                    <polygon points="0 0, 6 3, 0 6" fill="#22d3ee" />
                  </marker>
                  <marker id="arrow-c-amber" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                    <polygon points="0 0, 6 3, 0 6" fill="#fbbf24" />
                  </marker>
                </defs>

                {/* Primary Port */}
                <rect x="20" y="40" width="90" height="120" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
                <text x="65" y="70" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">Primary Port</text>
                <text x="65" y="95" textAnchor="middle" fill="#e2e8f0" fontSize="11">V₁ = {primaryV1Mag}V∠0°</text>
                <text x="65" y="115" textAnchor="middle" fill="#94a3b8" fontSize="10">I₁ = {i1Mag.toFixed(2)}A</text>
                <text x="65" y="130" textAnchor="middle" fill="#94a3b8" fontSize="10">∠{i1AngDeg.toFixed(1)}°</text>

                {/* Transformer Core & Coupling */}
                <g transform="translate(140, 60)">
                  {/* Coils */}
                  <path d="M 0,10 Q 15,0 15,20 Q 15,40 0,50 Q 15,60 15,80" fill="none" stroke="#22d3ee" strokeWidth="3" />
                  {/* Core lines */}
                  <line x1="28" y1="5" x2="28" y2="85" stroke="#64748b" strokeWidth="2" strokeDasharray="3 2" />
                  <line x1="34" y1="5" x2="34" y2="85" stroke="#64748b" strokeWidth="2" strokeDasharray="3 2" />
                  {/* Secondary coil */}
                  <path d="M 60,10 Q 45,0 45,20 Q 45,40 60,50 Q 45,60 45,80" fill="none" stroke="#fbbf24" strokeWidth="3" />
                  {/* Label */}
                  <text x="31" y="-8" textAnchor="middle" fill="#a855f7" fontSize="10" fontWeight="bold">
                    1 : a = {turnsRatioA.toFixed(1)}∠{phaseShiftDeg}°
                  </text>
                </g>

                {/* Secondary Port */}
                <rect x="230" y="40" width="90" height="120" rx="6" fill="#0f172a" stroke="#fbbf24" strokeWidth="2" />
                <text x="275" y="70" textAnchor="middle" fill="#fbbf24" fontSize="12" fontWeight="bold">Secondary</text>
                <text x="275" y="95" textAnchor="middle" fill="#e2e8f0" fontSize="11">V₂ = {v2Mag.toFixed(1)}V</text>
                <text x="275" y="110" textAnchor="middle" fill="#e2e8f0" fontSize="11">∠{v2AngDeg}°</text>
                <text x="275" y="130" textAnchor="middle" fill="#94a3b8" fontSize="10">I₂ = {i2Mag.toFixed(2)}A</text>

                {/* Load */}
                <line x1="320" y1="65" x2="360" y2="65" stroke="#94a3b8" strokeWidth="2" />
                <line x1="320" y1="135" x2="360" y2="135" stroke="#94a3b8" strokeWidth="2" />
                <rect x="360" y="50" width="75" height="100" rx="6" fill="#022c22" stroke="#34d399" strokeWidth="2" />
                <text x="397" y="80" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">Load Z_L</text>
                <text x="397" y="100" textAnchor="middle" fill="#e2e8f0" fontSize="10">{loadZMag} Ω</text>
                <text x="397" y="115" textAnchor="middle" fill="#a7f3d0" fontSize="10">∠ {loadZAngDeg}°</text>

                {/* Dot markers */}
                <circle cx="140" cy="70" r="3" fill="#38bdf8" />
                <circle cx="200" cy="70" r="3" fill="#fbbf24" />
              </svg>
            </div>

            {/* Invariance Check & Reflected Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-800 p-2.5 rounded border border-slate-700">
                <div className="text-slate-400 text-[11px]">Reflected Z_in</div>
                <div className="text-cyan-300 font-mono font-bold text-sm">
                  {reflectedZMag.toFixed(1)} Ω ∠{reflectedZAngDeg}°
                </div>
                <div className="text-[10px] text-slate-400">|a|² · Z_L (pure magnitude scale)</div>
              </div>

              <div className="bg-slate-800 p-2.5 rounded border border-slate-700">
                <div className="text-slate-400 text-[11px]">Active Power P</div>
                <div className="text-emerald-400 font-mono font-bold text-sm">
                  {loadP_W.toFixed(1)} W
                </div>
                <div className="text-[10px] text-slate-400">P_in = P_out (Ideal 100%)</div>
              </div>

              <div className="bg-slate-800 p-2.5 rounded border border-slate-700">
                <div className="text-slate-400 text-[11px]">Reactive Power Q</div>
                <div className="text-amber-400 font-mono font-bold text-sm">
                  {loadQ_VAR.toFixed(1)} VAR
                </div>
                <div className="text-[10px] text-slate-400">Q_in = Q_out (No leakage)</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Per-Unit System Simulator */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 bg-slate-800/80 p-4 rounded-lg border border-slate-700 space-y-4 text-xs">
            <h4 className="font-semibold text-cyan-300 border-b border-slate-700 pb-2">
              Nameplate Ratings (Old Base)
            </h4>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-slate-300 block mb-1">Old Base MVA:</label>
                <input
                  type="number"
                  value={ratedMva}
                  onChange={(e) => setRatedMva(Math.max(1, parseFloat(e.target.value) || 1))}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-cyan-400 font-mono"
                  aria-label="Old Base MVA"
                />
              </div>
              <div>
                <label className="text-slate-300 block mb-1">Old Base kV:</label>
                <input
                  type="number"
                  value={ratedKv}
                  onChange={(e) => setRatedKv(Math.max(0.1, parseFloat(e.target.value) || 1))}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-cyan-400 font-mono"
                  aria-label="Old Base kV"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Nameplate Leakage Impedance Z_pu (old):</span>
                <span className="font-mono text-amber-400 font-bold">{ratedZpu.toFixed(3)} p.u. ({(ratedZpu * 100).toFixed(1)}%)</span>
              </div>
              <input
                type="range"
                min="0.02"
                max="0.25"
                step="0.005"
                value={ratedZpu}
                onChange={(e) => setRatedZpu(parseFloat(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
                aria-label="Nameplate Impedance p.u."
              />
            </div>

            <h4 className="font-semibold text-emerald-300 border-b border-slate-700 pb-2 pt-2">
              Target System Grid (New Base)
            </h4>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-slate-300 block mb-1">New System MVA Base:</label>
                <input
                  type="number"
                  value={sysMvaBase}
                  onChange={(e) => setSysMvaBase(Math.max(1, parseFloat(e.target.value) || 1))}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-emerald-400 font-mono"
                  aria-label="New Base MVA"
                />
              </div>
              <div>
                <label className="text-slate-300 block mb-1">New System kV Base:</label>
                <input
                  type="number"
                  value={sysKvBase}
                  onChange={(e) => setSysKvBase(Math.max(0.1, parseFloat(e.target.value) || 1))}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-emerald-400 font-mono"
                  aria-label="New Base kV"
                />
              </div>
            </div>

            <div className="p-3 bg-slate-950 rounded border border-slate-800 text-[11px] font-mono space-y-1 text-slate-300">
              <div className="text-cyan-400 font-bold">Per-Unit Conversion Formula:</div>
              <div>Z_pu(new) = Z_pu(old) · [S_new / S_old] · [V_old / V_new]²</div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div className="bg-slate-950 p-5 rounded-lg border border-slate-800 space-y-4 text-xs font-mono">
              <div className="text-cyan-400 font-bold text-sm border-b border-slate-800 pb-2">
                Step-by-Step Per-Unit Base Conversion
              </div>

              <div className="space-y-2 text-slate-300">
                <div className="flex justify-between border-b border-slate-800/60 pb-1">
                  <span>1. Old Base Impedance Z_base(old):</span>
                  <span className="text-cyan-300 font-bold">{zBaseOld.toFixed(2)} Ω</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/60 pb-1">
                  <span>2. Physical Transformer Impedance Z(Ω):</span>
                  <span className="text-amber-300 font-bold">{zActualOhm.toFixed(2)} Ω</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/60 pb-1">
                  <span>3. New Base Impedance Z_base(new):</span>
                  <span className="text-emerald-300 font-bold">{zBaseNew.toFixed(2)} Ω</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/60 pb-1 text-sm bg-slate-900 p-2 rounded">
                  <span className="text-white font-bold">4. Converted Impedance Z_pu(new):</span>
                  <span className="text-cyan-400 font-bold text-base">{zPuNew.toFixed(4)} p.u. ({(zPuNew * 100).toFixed(2)}%)</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 pt-2 font-sans">
                Notice: When system base MVA is doubled (50 to 100 MVA), the per-unit impedance roughly doubles because the new base current is higher for the same voltage!
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-800 p-3 rounded border border-slate-700">
                <div className="text-slate-400 text-[11px]">Advantage 1: Invariance</div>
                <div className="text-slate-200 mt-1">
                  Primary and secondary per-unit impedances are identical! No turns-ratio scaling needed in p.u.
                </div>
              </div>
              <div className="bg-slate-800 p-3 rounded border border-slate-700">
                <div className="text-slate-400 text-[11px]">Advantage 2: Normalization</div>
                <div className="text-slate-200 mt-1">
                  Operating voltages throughout a complex power grid remain close to 1.0 p.u. regardless of nominal voltage levels.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
