import React, { useState, useId } from 'react';
import { Language } from '../../types';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

type LocusMode = 'rl-var-r' | 'rl-var-xl' | 'rc-var-r' | 'rc-var-xc';

export const ACLocusDiagramsExplorer: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const controlId = useId();

  // Mode selection
  const [mode, setMode] = useState<LocusMode>('rl-var-r');

  // Parameters
  const [voltage, setVoltage] = useState<number>(200); // V
  const [fixedVal, setFixedVal] = useState<number>(25); // Ohms (XL, R, or XC)
  const [varVal, setVarVal] = useState<number>(25); // Ohms (variable R or variable X)

  // Calculations based on mode
  let r = 0;
  let xl = 0;
  let xc = 0;
  let isInductive = true;
  let isVarR = true;

  if (mode === 'rl-var-r') {
    isInductive = true;
    isVarR = true;
    xl = fixedVal;
    r = varVal;
  } else if (mode === 'rl-var-xl') {
    isInductive = true;
    isVarR = false;
    r = fixedVal;
    xl = varVal;
  } else if (mode === 'rc-var-r') {
    isInductive = false;
    isVarR = true;
    xc = fixedVal;
    r = varVal;
  } else {
    // rc-var-xc
    isInductive = false;
    isVarR = false;
    r = fixedVal;
    xc = varVal;
  }

  const netX = isInductive ? xl : -xc;
  const zMag = Math.sqrt(r * r + netX * netX) || 1e-4;
  const zAngleRad = Math.atan2(netX, r); // rad

  // Current phasor: I = V / Z = (V / zMag) ∠(-zAngleRad)
  const iMag = voltage / zMag;
  const iAngleRad = -zAngleRad; // current angle relative to V at 0°
  const iAngleDeg = (iAngleRad * 180) / Math.PI;

  const ix = iMag * Math.cos(iAngleRad); // Real / Active current (horizontal)
  const iy = iMag * Math.sin(iAngleRad); // Imag / Reactive current (vertical)

  // Powers
  const p = voltage * ix; // W
  const q = voltage * Math.abs(iy); // VAR
  const s = voltage * iMag; // VA
  const pf = Math.abs(Math.cos(iAngleRad));

  // Circle Geometry
  let circleDiameter = 0;
  let circleCenterX = 0;
  let circleCenterY = 0;
  let circleRadius = 0;
  let maxP = 0;
  let maxPCondition = '';

  if (mode === 'rl-var-r') {
    // Diameter = V / XL along negative imaginary axis
    circleDiameter = xl > 0 ? voltage / xl : 0;
    circleRadius = circleDiameter / 2;
    circleCenterX = circleRadius;
    circleCenterY = -circleRadius;
    // In our coordinate derivation: Ix^2 + (Iy + V/(2XL))^2 = (V/(2XL))^2
    // Center is (0, -circleRadius), diameter from (0,0) to (0, -circleDiameter)
    circleCenterX = 0;
    circleCenterY = -circleRadius;
    maxP = xl > 0 ? (voltage * voltage) / (2 * xl) : 0;
    maxPCondition = `R = X_L = ${xl} Ω (φ = -45°)`;
  } else if (mode === 'rl-var-xl') {
    // Diameter = V / R along positive real axis
    circleDiameter = r > 0 ? voltage / r : 0;
    circleRadius = circleDiameter / 2;
    circleCenterX = circleRadius;
    circleCenterY = 0;
    maxP = (voltage * voltage) / r; // at XL = 0
    maxPCondition = `X_L = 0 Ω (pure resistive)`;
  } else if (mode === 'rc-var-r') {
    // Diameter = V / XC along positive imaginary axis
    circleDiameter = xc > 0 ? voltage / xc : 0;
    circleRadius = circleDiameter / 2;
    circleCenterX = 0;
    circleCenterY = circleRadius;
    maxP = xc > 0 ? (voltage * voltage) / (2 * xc) : 0;
    maxPCondition = `R = X_C = ${xc} Ω (φ = +45°)`;
  } else {
    // rc-var-xc: Diameter = V / R along positive real axis
    circleDiameter = r > 0 ? voltage / r : 0;
    circleRadius = circleDiameter / 2;
    circleCenterX = circleRadius;
    circleCenterY = 0;
    maxP = (voltage * voltage) / r; // at XC = 0
    maxPCondition = `X_C = 0 Ω (pure resistive)`;
  }

  // SVG coordinates:
  // We plot in the Argand plane: Real horizontal (X), Imaginary vertical (Y).
  // Origin (0,0) of the Argand plane is mapped to (originSvgX, originSvgY).
  const svgWidth = 540;
  const svgHeight = 320;
  const originSvgX = 140; // allows negative real if needed, mostly positive real
  const originSvgY = mode.startsWith('rl') ? 90 : 230; // for RL 4th quadrant, put origin higher; for RC 1st quadrant, put origin lower

  const maxDisplayCurrent = Math.max(circleDiameter, iMag, 8) * 1.25;
  const scale = (svgWidth - originSvgX - 40) / maxDisplayCurrent;

  const toSvgX = (realVal: number) => originSvgX + realVal * scale;
  const toSvgY = (imagVal: number) => originSvgY - imagVal * scale; // invert Y for SVG

  // Current phasor endpoint in SVG
  const curSvgX = toSvgX(ix);
  const curSvgY = toSvgY(iy);

  // Semicircle arc SVG path
  let arcPath = '';
  if (mode === 'rl-var-r') {
    // Semicircle in 4th quadrant from (0,0) to (0, -circleDiameter) passing through (circleRadius, -circleRadius)
    // In SVG: start at (toSvgX(0), toSvgY(0)), end at (toSvgX(0), toSvgY(-circleDiameter))
    const startX = toSvgX(0);
    const startY = toSvgY(0);
    const endX = toSvgX(0);
    const endY = toSvgY(-circleDiameter);
    const rSvg = circleRadius * scale;
    arcPath = `M ${startX} ${startY} A ${rSvg} ${rSvg} 0 0 1 ${endX} ${endY}`;
  } else if (mode === 'rl-var-xl') {
    // Semicircle in 4th quadrant from (circleDiameter, 0) to (0, 0)
    const startX = toSvgX(circleDiameter);
    const startY = toSvgY(0);
    const endX = toSvgX(0);
    const endY = toSvgY(0);
    const rSvg = circleRadius * scale;
    arcPath = `M ${startX} ${startY} A ${rSvg} ${rSvg} 0 0 1 ${endX} ${endY}`;
  } else if (mode === 'rc-var-r') {
    // Semicircle in 1st quadrant from (0,0) to (0, +circleDiameter)
    const startX = toSvgX(0);
    const startY = toSvgY(0);
    const endX = toSvgX(0);
    const endY = toSvgY(circleDiameter);
    const rSvg = circleRadius * scale;
    arcPath = `M ${startX} ${startY} A ${rSvg} ${rSvg} 0 0 0 ${endX} ${endY}`;
  } else {
    // rc-var-xc: Semicircle in 1st quadrant from (circleDiameter, 0) to (0, 0)
    const startX = toSvgX(circleDiameter);
    const startY = toSvgY(0);
    const endX = toSvgX(0);
    const endY = toSvgY(0);
    const rSvg = circleRadius * scale;
    arcPath = `M ${startX} ${startY} A ${rSvg} ${rSvg} 0 0 0 ${endX} ${endY}`;
  }

  return (
    <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-5 shadow-2xl text-slate-100 my-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <h3 className="text-lg font-bold text-white tracking-wide">
              {lang === 'hi' ? 'एसी लोकस (बिंदुपथ) आरेख अन्वेषक' : lang === 'bn' ? 'এসি লোকাস ডায়াগ্রাম এক্সপ্লোরার' : 'AC Locus Diagrams Explorer'}
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            {lang === 'hi'
              ? 'जटिल तल (Argand Plane) में श्रेणी RL एवं RC परिपथों के धारा वृत्त आरेख एवं अधिकतम शक्ति स्थितियों का प्रत्यक्ष अध्ययन करें'
              : lang === 'bn'
              ? 'জটিল সমতলে (Argand Plane) শ্রেণি RL ও RC বর্তনীর কারেন্ট সার্কেল ডায়াগ্রাম ও সর্বোচ্চ ক্ষমতার শর্তাবলী বিশ্লেষণ করুন'
              : 'Interactive complex-plane synthesis of circular current loci for series RL & RC circuits under parameter variations'}
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <button
            id={`${controlId}-mode-rl-r`}
            onClick={() => { setMode('rl-var-r'); setFixedVal(25); setVarVal(25); }}
            className={`px-2.5 py-1 text-xs font-semibold rounded-lg border transition-colors ${
              mode === 'rl-var-r'
                ? 'bg-blue-600 text-white border-blue-500 shadow-md'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
          >
            Series RL (Var R)
          </button>
          <button
            id={`${controlId}-mode-rl-xl`}
            onClick={() => { setMode('rl-var-xl'); setFixedVal(25); setVarVal(25); }}
            className={`px-2.5 py-1 text-xs font-semibold rounded-lg border transition-colors ${
              mode === 'rl-var-xl'
                ? 'bg-blue-600 text-white border-blue-500 shadow-md'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
          >
            Series RL (Var X_L)
          </button>
          <button
            id={`${controlId}-mode-rc-r`}
            onClick={() => { setMode('rc-var-r'); setFixedVal(25); setVarVal(25); }}
            className={`px-2.5 py-1 text-xs font-semibold rounded-lg border transition-colors ${
              mode === 'rc-var-r'
                ? 'bg-cyan-600 text-white border-cyan-500 shadow-md'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
          >
            Series RC (Var R)
          </button>
          <button
            id={`${controlId}-mode-rc-xc`}
            onClick={() => { setMode('rc-var-xc'); setFixedVal(25); setVarVal(25); }}
            className={`px-2.5 py-1 text-xs font-semibold rounded-lg border transition-colors ${
              mode === 'rc-var-xc'
                ? 'bg-cyan-600 text-white border-cyan-500 shadow-md'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
          >
            Series RC (Var X_C)
          </button>
        </div>
      </div>

      {/* Main Complex Plane SVG Canvas */}
      <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 relative overflow-hidden mb-6">
        <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-900">
          <span className="font-semibold text-slate-300">
            {lang === 'hi' ? 'जटिल तल (Argand Plane) धारा लोकस' : lang === 'bn' ? 'জটিল সমতলে কারেন্ট লোকাস' : 'Complex Plane Argand Current Locus'}
          </span>
          <span className="text-cyan-400 font-mono text-[11px]">
            Circle Diameter = {circleDiameter.toFixed(2)} A | Center = ({circleCenterX.toFixed(1)}, {circleCenterY.toFixed(1)}) A
          </span>
        </div>

        <div className="w-full overflow-x-auto">
          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto min-w-[500px]" aria-label="AC Locus Diagram Plot">
            {/* Real Axis (Horizontal) */}
            <line x1="30" y1={originSvgY} x2={svgWidth - 30} y2={originSvgY} stroke="#475569" strokeWidth="1.5" />
            <polygon
              points={`${svgWidth - 25},${originSvgY} ${svgWidth - 35},${originSvgY - 4} ${svgWidth - 35},${originSvgY + 4}`}
              fill="#475569"
            />
            <text x={svgWidth - 35} y={originSvgY - 8} fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="end">
              +Re (In-Phase / Active Current I_x)
            </text>

            {/* Imaginary Axis (Vertical) */}
            <line x1={originSvgX} y1={svgHeight - 20} x2={originSvgX} y2="20" stroke="#475569" strokeWidth="1.5" />
            <polygon
              points={`${originSvgX},15 ${originSvgX - 4},25 ${originSvgX + 4},25`}
              fill="#475569"
            />
            <text x={originSvgX + 8} y="25" fill="#94a3b8" fontSize="11" fontWeight="bold">
              +j (Leading)
            </text>
            <text x={originSvgX + 8} y={svgHeight - 25} fill="#94a3b8" fontSize="11" fontWeight="bold">
              -j (Lagging)
            </text>

            {/* Origin Label */}
            <text x={originSvgX - 10} y={originSvgY + 14} fill="#64748b" fontSize="11" textAnchor="end">
              (0, 0)
            </text>

            {/* Circular Semicircle Locus Arc */}
            <path
              d={arcPath}
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeDasharray="5 3"
            />

            {/* Circle Center Marker */}
            <circle
              cx={toSvgX(circleCenterX)}
              cy={toSvgY(circleCenterY)}
              r="3"
              fill="#38bdf8"
            />

            {/* Projection Lines for Active & Reactive Components */}
            <line
              x1={curSvgX}
              y1={originSvgY}
              x2={curSvgX}
              y2={curSvgY}
              stroke="#64748b"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            <line
              x1={originSvgX}
              y1={curSvgY}
              x2={curSvgX}
              y2={curSvgY}
              stroke="#64748b"
              strokeWidth="1"
              strokeDasharray="3 3"
            />

            {/* Current Phasor Vector (Arrow from origin to (ix, iy)) */}
            <line
              x1={originSvgX}
              y1={originSvgY}
              x2={curSvgX}
              y2={curSvgY}
              stroke="#f59e0b"
              strokeWidth="3"
            />
            <circle cx={curSvgX} cy={curSvgY} r="5" fill="#f59e0b" />

            {/* Vector Label */}
            <text
              x={curSvgX + 8}
              y={curSvgY + (iy < 0 ? 12 : -6)}
              fill="#fcd34d"
              fontSize="12"
              fontWeight="bold"
            >
              I = {iMag.toFixed(2)} A ∠{iAngleDeg.toFixed(1)}°
            </text>

            {/* Maximum Power Point Highlight (when var R) */}
            {isVarR && (
              <g>
                <circle
                  cx={toSvgX(circleRadius)}
                  cy={toSvgY(isInductive ? -circleRadius : circleRadius)}
                  r="4"
                  fill="#10b981"
                />
                <text
                  x={toSvgX(circleRadius) + 8}
                  y={toSvgY(isInductive ? -circleRadius : circleRadius) + (isInductive ? -6 : 14)}
                  fill="#6ee7b7"
                  fontSize="10"
                >
                  P_max ({maxP.toFixed(0)} W)
                </text>
              </g>
            )}
          </svg>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <div className="bg-slate-950 p-3 rounded-xl border border-amber-500/30 text-center">
          <span className="text-[10px] text-slate-400 uppercase font-semibold block">
            {lang === 'hi' ? 'धारा परिमाण |I|' : lang === 'bn' ? 'কারেন্ট মান |I|' : 'Current Phasor |I|'}
          </span>
          <span className="text-2xl font-black text-amber-300">{iMag.toFixed(2)}</span>
          <span className="text-xs text-slate-400 ml-1">A</span>
          <span className="text-[10px] text-slate-400 block">Angle: {iAngleDeg.toFixed(1)}°</span>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-cyan-500/30 text-center">
          <span className="text-[10px] text-slate-400 uppercase font-semibold block">
            {lang === 'hi' ? 'सक्रिय घटक I_x (Re)' : lang === 'bn' ? 'সক্রিয় কারেন্ট I_x' : 'Active Current (I_x)'}
          </span>
          <span className="text-2xl font-black text-cyan-300">{ix.toFixed(2)}</span>
          <span className="text-xs text-slate-400 ml-1">A</span>
          <span className="text-[10px] text-slate-400 block">In-phase with V</span>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-emerald-500/30 text-center">
          <span className="text-[10px] text-slate-400 uppercase font-semibold block">
            {lang === 'hi' ? 'सक्रिय शक्ति (P)' : lang === 'bn' ? 'সক্রিয় ক্ষমতা (P)' : 'Active Power (P)'}
          </span>
          <span className="text-2xl font-black text-emerald-300">{p.toFixed(1)}</span>
          <span className="text-xs text-slate-400 ml-1">W</span>
          <span className="text-[10px] text-slate-400 block">PF: {pf.toFixed(3)}</span>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-purple-500/30 text-center">
          <span className="text-[10px] text-slate-400 uppercase font-semibold block">
            {lang === 'hi' ? 'अधिकतम शक्ति P_max' : lang === 'bn' ? 'সর্বোচ্চ ক্ষমতা P_max' : 'Max Power (P_max)'}
          </span>
          <span className="text-2xl font-black text-purple-300">{maxP.toFixed(1)}</span>
          <span className="text-xs text-slate-400 ml-1">W</span>
          <span className="text-[10px] text-slate-400 block">{maxPCondition}</span>
        </div>
      </div>

      {/* Control Sliders */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 border-b border-slate-800 pb-2">
          {lang === 'hi' ? 'परिपथ नियंत्रण (Interactive Tuning)' : lang === 'bn' ? 'সার্কিট নিয়ন্ত্রণ' : 'Circuit Tuning Controls'}
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          {/* Source Voltage */}
          <div className="space-y-1">
            <div className="flex justify-between">
              <label htmlFor={`${controlId}-v`} className="text-slate-300">RMS Voltage (V):</label>
              <span className="font-bold text-cyan-300">{voltage} V</span>
            </div>
            <input
              id={`${controlId}-v`}
              type="range"
              min="50"
              max="400"
              step="10"
              value={voltage}
              onChange={(e) => setVoltage(Number(e.target.value))}
              className="w-full accent-cyan-500"
              aria-label="Source RMS Voltage"
            />
          </div>

          {/* Fixed Parameter */}
          <div className="space-y-1">
            <div className="flex justify-between">
              <label htmlFor={`${controlId}-fixed`} className="text-slate-300">
                Fixed {isVarR ? (isInductive ? 'X_L' : 'X_C') : 'R'}:
              </label>
              <span className="font-bold text-blue-300">{fixedVal} Ω</span>
            </div>
            <input
              id={`${controlId}-fixed`}
              type="range"
              min="5"
              max="80"
              step="1"
              value={fixedVal}
              onChange={(e) => setFixedVal(Number(e.target.value))}
              className="w-full accent-blue-500"
              aria-label="Fixed Parameter"
            />
          </div>

          {/* Variable Parameter */}
          <div className="space-y-1">
            <div className="flex justify-between">
              <label htmlFor={`${controlId}-var`} className="text-slate-300">
                Variable {isVarR ? 'Resistance R' : (isInductive ? 'Reactance X_L' : 'Reactance X_C')}:
              </label>
              <span className="font-bold text-amber-300">{varVal} Ω</span>
            </div>
            <input
              id={`${controlId}-var`}
              type="range"
              min="0"
              max="100"
              step="1"
              value={varVal}
              onChange={(e) => setVarVal(Number(e.target.value))}
              className="w-full accent-amber-500"
              aria-label="Variable Parameter"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
