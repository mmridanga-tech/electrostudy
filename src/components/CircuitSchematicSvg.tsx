import React from 'react';

interface CircuitSchematicSvgProps {
  svgType?: string;
  caption?: string;
}

export const CircuitSchematicSvg: React.FC<CircuitSchematicSvgProps> = ({ svgType, caption }) => {
  switch (svgType) {
    case 'circuit-vir-triangle':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 300 200" className="w-64 h-44">
            {/* Pyramid Triangle */}
            <polygon points="150,20 40,170 260,170" fill="#0f172a" stroke="#38bdf8" strokeWidth="3" />
            {/* Horizontal Divider Line */}
            <line x1="95" y1="95" x2="205" y2="95" stroke="#38bdf8" strokeWidth="3" />
            {/* Vertical Divider Line */}
            <line x1="150" y1="95" x2="150" y2="170" stroke="#38bdf8" strokeWidth="3" />
            
            {/* Top Node V */}
            <circle cx="150" cy="60" r="22" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" />
            <text x="150" y="66" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="20" fontFamily="sans-serif">V</text>
            
            {/* Bottom Left Node I */}
            <circle cx="100" cy="132" r="20" fill="#065f46" stroke="#34d399" strokeWidth="2" />
            <text x="100" y="138" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="18" fontFamily="sans-serif">I</text>

            {/* Multiply Sign */}
            <text x="150" y="138" textAnchor="middle" fill="#fbbf24" fontWeight="bold" fontSize="22" fontFamily="sans-serif">×</text>

            {/* Bottom Right Node R */}
            <circle cx="200" cy="132" r="20" fill="#9a3412" stroke="#fb923c" strokeWidth="2" />
            <text x="200" y="138" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="18" fontFamily="sans-serif">R</text>
          </svg>
          <div className="flex justify-center gap-6 mt-2 text-xs font-mono">
            <span className="text-cyan-400 font-bold">V = I × R</span>
            <span className="text-emerald-400 font-bold">I = V / R</span>
            <span className="text-amber-400 font-bold">R = V / I</span>
          </div>
        </div>
      );

    case 'circuit-series':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 380 180" className="w-full max-w-md h-44">
            {/* Outer Loop */}
            <rect x="40" y="30" width="300" height="120" rx="6" fill="none" stroke="#475569" strokeWidth="3" />
            
            {/* DC Voltage Source */}
            <g transform="translate(40, 90)">
              <circle cx="0" cy="0" r="20" fill="#0f172a" stroke="#38bdf8" strokeWidth="3" />
              <text x="0" y="-5" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">+</text>
              <text x="0" y="12" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">-</text>
              <text x="-35" y="4" textAnchor="end" fill="#38bdf8" fontSize="12" fontWeight="bold" fontFamily="sans-serif">V_source</text>
            </g>

            {/* Current Flow Arrows */}
            <path d="M 100 30 L 115 30" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow)" />
            <text x="110" y="20" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold" fontFamily="monospace">I_total</text>

            {/* Resistor 1 */}
            <g transform="translate(140, 30)">
              <rect x="-25" y="-10" width="50" height="20" fill="#1e293b" stroke="#10b981" strokeWidth="2" rx="3" />
              <text x="0" y="4" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">R₁</text>
            </g>

            {/* Resistor 2 */}
            <g transform="translate(240, 30)">
              <rect x="-25" y="-10" width="50" height="20" fill="#1e293b" stroke="#10b981" strokeWidth="2" rx="3" />
              <text x="0" y="4" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">R₂</text>
            </g>

            {/* Resistor 3 */}
            <g transform="translate(340, 90)">
              <rect x="-10" y="-25" width="20" height="50" fill="#1e293b" stroke="#10b981" strokeWidth="2" rx="3" />
              <text x="18" y="4" textAnchor="start" fill="#34d399" fontSize="11" fontWeight="bold">R₃</text>
            </g>

            {/* Voltage Drop Indicators */}
            <text x="140" y="60" textAnchor="middle" fill="#94a3b8" fontSize="10">V₁ = I·R₁</text>
            <text x="240" y="60" textAnchor="middle" fill="#94a3b8" fontSize="10">V₂ = I·R₂</text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-1">Series Circuit: R_total = R₁ + R₂ + R₃ | Current is SAME everywhere</p>
        </div>
      );

    case 'circuit-parallel':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 380 180" className="w-full max-w-md h-44">
            {/* Main Rail */}
            <line x1="40" y1="30" x2="300" y2="30" stroke="#38bdf8" strokeWidth="3" />
            <line x1="40" y1="150" x2="300" y2="150" stroke="#38bdf8" strokeWidth="3" />
            <line x1="40" y1="30" x2="40" y2="150" stroke="#38bdf8" strokeWidth="3" />

            {/* DC Voltage Source */}
            <g transform="translate(40, 90)">
              <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#38bdf8" strokeWidth="3" />
              <text x="0" y="4" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">V</text>
            </g>

            {/* Node 1 - Branch 1 (R1) */}
            <line x1="170" y1="30" x2="170" y2="150" stroke="#475569" strokeWidth="2" />
            <g transform="translate(170, 90)">
              <rect x="-10" y="-25" width="20" height="50" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="16" y="-5" textAnchor="start" fill="#34d399" fontSize="11" fontWeight="bold">R₁</text>
              <text x="16" y="12" textAnchor="start" fill="#f59e0b" fontSize="10" fontWeight="bold">I₁</text>
            </g>

            {/* Node 2 - Branch 2 (R2) */}
            <line x1="300" y1="30" x2="300" y2="150" stroke="#475569" strokeWidth="2" />
            <g transform="translate(300, 90)">
              <rect x="-10" y="-25" width="20" height="50" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="16" y="-5" textAnchor="start" fill="#34d399" fontSize="11" fontWeight="bold">R₂</text>
              <text x="16" y="12" textAnchor="start" fill="#f59e0b" fontSize="10" fontWeight="bold">I₂</text>
            </g>

            {/* Nodes */}
            <circle cx="170" cy="30" r="4" fill="#38bdf8" />
            <circle cx="300" cy="30" r="4" fill="#38bdf8" />
            <circle cx="170" cy="150" r="4" fill="#38bdf8" />
            <circle cx="300" cy="150" r="4" fill="#38bdf8" />

            {/* Total Current Indicator */}
            <text x="100" y="22" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">I_total →</text>
          </svg>
          <p className="text-xs font-mono text-emerald-300 mt-1">Parallel Circuit: V is SAME across all branches | I_total = I₁ + I₂</p>
        </div>
      );

    case 'circuit-series-parallel':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 380 180" className="w-full max-w-md h-44">
            {/* Input Line */}
            <line x1="30" y1="90" x2="80" y2="90" stroke="#38bdf8" strokeWidth="3" />
            
            {/* R1 Series */}
            <g transform="translate(110, 90)">
              <rect x="-25" y="-12" width="50" height="24" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" rx="3" />
              <text x="0" y="4" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">R₁ (Series)</text>
            </g>

            {/* Wire to Parallel Block */}
            <line x1="135" y1="90" x2="190" y2="90" stroke="#38bdf8" strokeWidth="3" />
            <line x1="190" y1="45" x2="190" y2="135" stroke="#38bdf8" strokeWidth="2" />

            {/* Upper Branch R2 */}
            <line x1="190" y1="45" x2="290" y2="45" stroke="#475569" strokeWidth="2" />
            <g transform="translate(240, 45)">
              <rect x="-20" y="-10" width="40" height="20" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="0" y="4" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">R₂</text>
            </g>

            {/* Lower Branch R3 */}
            <line x1="190" y1="135" x2="290" y2="135" stroke="#475569" strokeWidth="2" />
            <g transform="translate(240, 135)">
              <rect x="-20" y="-10" width="40" height="20" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="0" y="4" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">R₃</text>
            </g>

            {/* Rejoin Node */}
            <line x1="290" y1="45" x2="290" y2="135" stroke="#38bdf8" strokeWidth="2" />
            <line x1="290" y1="90" x2="350" y2="90" stroke="#38bdf8" strokeWidth="3" />

            <circle cx="190" cy="90" r="4" fill="#38bdf8" />
            <circle cx="290" cy="90" r="4" fill="#38bdf8" />
          </svg>
          <p className="text-xs font-mono text-amber-300 mt-1">Series-Parallel: R_eq = R₁ + (R₂ || R₃)</p>
        </div>
      );

    case 'circuit-voltage-divider':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 340 180" className="w-full max-w-md h-44">
            {/* Input Voltage V_in */}
            <line x1="40" y1="30" x2="160" y2="30" stroke="#38bdf8" strokeWidth="3" />
            <line x1="40" y1="150" x2="260" y2="150" stroke="#38bdf8" strokeWidth="3" />

            <text x="40" y="20" fill="#38bdf8" fontSize="11" fontWeight="bold" fontFamily="monospace">V_in (+)</text>
            <text x="40" y="168" fill="#94a3b8" fontSize="11" fontWeight="bold" fontFamily="monospace">GND (0V)</text>

            {/* Resistor R1 */}
            <g transform="translate(160, 55)">
              <line x1="0" y1="-25" x2="0" y2="25" stroke="#475569" strokeWidth="2" />
              <rect x="-12" y="-15" width="24" height="30" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" rx="3" />
              <text x="18" y="0" fill="#38bdf8" fontSize="11" fontWeight="bold">R₁</text>
            </g>

            {/* Junction Node */}
            <circle cx="160" cy="90" r="5" fill="#f59e0b" />
            <line x1="160" y1="90" x2="260" y2="90" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />

            {/* Resistor R2 */}
            <g transform="translate(160, 125)">
              <line x1="0" y1="-35" x2="0" y2="25" stroke="#475569" strokeWidth="2" />
              <rect x="-12" y="-15" width="24" height="30" fill="#1e293b" stroke="#10b981" strokeWidth="2" rx="3" />
              <text x="18" y="0" fill="#34d399" fontSize="11" fontWeight="bold">R₂</text>
            </g>

            {/* V_out Output */}
            <text x="265" y="85" fill="#f59e0b" fontSize="12" fontWeight="bold" fontFamily="monospace">V_out</text>
            <text x="265" y="105" fill="#94a3b8" fontSize="10" fontFamily="monospace">= V_in × [R₂ / (R₁+R₂)]</text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-1">Voltage Divider Rule: Output V_out proportional to R₂</p>
        </div>
      );

    case 'circuit-current-divider':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 360 180" className="w-full max-w-md h-44">
            {/* Entering Current Line */}
            <line x1="30" y1="90" x2="120" y2="90" stroke="#f59e0b" strokeWidth="3" />
            <text x="50" y="78" fill="#f59e0b" fontSize="12" fontWeight="bold" fontFamily="monospace">I_T (Total) →</text>
            
            {/* Division Node */}
            <circle cx="120" cy="90" r="5" fill="#f59e0b" />
            <line x1="120" y1="40" x2="120" y2="140" stroke="#f59e0b" strokeWidth="2" />

            {/* Top Branch R1 */}
            <line x1="120" y1="40" x2="260" y2="40" stroke="#475569" strokeWidth="2" />
            <g transform="translate(190, 40)">
              <rect x="-20" y="-10" width="40" height="20" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" rx="3" />
              <text x="0" y="4" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">R₁</text>
            </g>
            <text x="215" y="30" fill="#38bdf8" fontSize="11" fontWeight="bold" fontFamily="monospace">I₁</text>

            {/* Bottom Branch R2 */}
            <line x1="120" y1="140" x2="260" y2="140" stroke="#475569" strokeWidth="2" />
            <g transform="translate(190, 140)">
              <rect x="-20" y="-10" width="40" height="20" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="0" y="4" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">R₂</text>
            </g>
            <text x="215" y="155" fill="#34d399" fontSize="11" fontWeight="bold" fontFamily="monospace">I₂</text>

            {/* Formulas Box */}
            <rect x="250" y="70" width="105" height="42" fill="#0f172a" stroke="#475569" strokeWidth="1" rx="4" />
            <text x="255" y="86" fill="#38bdf8" fontSize="9" fontFamily="monospace">I₁ = I_T × R₂/(R₁+R₂)</text>
            <text x="255" y="102" fill="#34d399" fontSize="9" fontFamily="monospace">I₂ = I_T × R₁/(R₁+R₂)</text>
          </svg>
          <p className="text-xs font-mono text-emerald-300 mt-1">Current Divider Rule: Smaller resistor carries LARGER current</p>
        </div>
      );

    case 'circuit-open':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 360 180" className="w-full max-w-md h-44">
            {/* Wire Circuit */}
            <line x1="40" y1="90" x2="110" y2="90" stroke="#ef4444" strokeWidth="3" />
            <line x1="180" y1="90" x2="320" y2="90" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" />

            {/* Open Switch Contacts */}
            <circle cx="110" cy="90" r="5" fill="#ef4444" />
            <circle cx="180" cy="90" r="5" fill="#ef4444" />
            {/* Open Lever */}
            <line x1="110" y1="90" x2="160" y2="55" stroke="#ef4444" strokeWidth="3" />

            {/* Current Zero Indicator */}
            <g transform="translate(230, 60)">
              <rect x="-30" y="-12" width="60" height="24" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1" rx="4" />
              <text x="0" y="4" textAnchor="middle" fill="#a5b4fc" fontSize="11" fontWeight="bold" fontFamily="monospace">I = 0 A</text>
            </g>

            {/* Open Gap Voltage Indicator */}
            <path d="M 110 110 L 110 135 L 180 135 L 180 110" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="2 2" />
            <text x="145" y="152" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold" fontFamily="monospace">V_gap = V_source (Full Voltage!)</text>

            {/* Load Lamp */}
            <g transform="translate(300, 90)">
              <circle cx="0" cy="0" r="16" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
              <text x="0" y="4" textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="bold">OFF</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-rose-400 mt-1">Open Circuit: Infinite Resistance | Current I = 0 A | Full Voltage across Gap</p>
        </div>
      );

    case 'circuit-short':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 360 180" className="w-full max-w-md h-44">
            {/* Main Power Lines */}
            <line x1="30" y1="40" x2="320" y2="40" stroke="#ef4444" strokeWidth="3" />
            <line x1="30" y1="140" x2="320" y2="140" stroke="#38bdf8" strokeWidth="3" />

            <text x="35" y="30" fill="#ef4444" fontSize="10" fontWeight="bold">PHASE (230V)</text>
            <text x="35" y="158" fill="#38bdf8" fontSize="10" fontWeight="bold">NEUTRAL (0V)</text>

            {/* Short Circuit Fault Path */}
            <line x1="160" y1="40" x2="160" y2="140" stroke="#f59e0b" strokeWidth="4" />
            
            {/* Spark Explosive Graphic */}
            <g transform="translate(160, 90)">
              <polygon points="0,-18 6,-6 18,-6 9,2 13,14 0,7 -13,14 -9,2 -18,-6 -6,-6" fill="#ef4444" stroke="#fbbf24" strokeWidth="2" />
              <text x="25" y="4" fill="#fbbf24" fontSize="11" fontWeight="bold" fontFamily="monospace">SHORT FAULT!</text>
            </g>

            {/* Load (Bypassed) */}
            <g transform="translate(280, 90)">
              <line x1="0" y1="-50" x2="0" y2="-20" stroke="#475569" strokeWidth="2" />
              <line x1="0" y1="20" x2="0" y2="50" stroke="#475569" strokeWidth="2" />
              <rect x="-15" y="-20" width="30" height="40" fill="#1e293b" stroke="#475569" strokeWidth="2" rx="3" />
              <text x="0" y="4" textAnchor="middle" fill="#64748b" fontSize="10">Load (Bypassed)</text>
              <text x="0" y="32" textAnchor="middle" fill="#64748b" fontSize="9">V_load ≈ 0V</text>
            </g>

            {/* Fault Current Surge */}
            <text x="90" y="25" fill="#f59e0b" fontSize="10" fontWeight="bold" fontFamily="monospace">I_fault = HIGH SURGE (1000A+)</text>
          </svg>
          <p className="text-xs font-mono text-amber-400 mt-1">Short Circuit: Zero Resistance Path | Massive Current Surge | MCB Trips</p>
        </div>
      );

    case 'circuit-practical':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 360 180" className="w-full max-w-md h-44">
            {/* Top Section: LED Protection */}
            <rect x="20" y="15" width="320" height="65" fill="#0f172a" stroke="#334155" strokeWidth="1" rx="6" />
            <text x="30" y="32" fill="#38bdf8" fontSize="10" fontWeight="bold">1. LED Current Limiter (R_limit = 500 Ω for 12V DC)</text>
            
            <line x1="30" y1="55" x2="80" y2="55" stroke="#ef4444" strokeWidth="2" />
            {/* R_limit */}
            <g transform="translate(100, 55)">
              <rect x="-18" y="-10" width="36" height="20" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" rx="3" />
              <text x="0" y="4" textAnchor="middle" fill="#38bdf8" fontSize="9">R_limit</text>
            </g>
            <line x1="118" y1="55" x2="160" y2="55" stroke="#ef4444" strokeWidth="2" />
            {/* LED Symbol */}
            <g transform="translate(180, 55)">
              <polygon points="-10,-10 -10,10 10,0" fill="#ef4444" stroke="#f87171" strokeWidth="1" />
              <line x1="10" y1="-10" x2="10" y2="10" stroke="#f87171" strokeWidth="2" />
              <text x="18" y="4" fill="#f87171" fontSize="10" fontWeight="bold">LED (2V, 20mA)</text>
            </g>

            {/* Bottom Section: Battery Bank Configuration */}
            <rect x="20" y="90" width="320" height="75" fill="#0f172a" stroke="#334155" strokeWidth="1" rx="6" />
            <text x="30" y="108" fill="#34d399" fontSize="10" fontWeight="bold">2. Solar Battery Bank (2S2P: 4× 12V 100Ah = 24V 200Ah)</text>
            
            {/* Battery 1 & 2 Series Pair 1 */}
            <g transform="translate(60, 135)">
              <rect x="-22" y="-14" width="44" height="28" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="0" y="3" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="bold">12V 100Ah</text>
            </g>
            <line x1="82" y1="135" x2="108" y2="135" stroke="#34d399" strokeWidth="2" />
            <g transform="translate(130, 135)">
              <rect x="-22" y="-14" width="44" height="28" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="0" y="3" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="bold">12V 100Ah</text>
            </g>

            <text x="180" y="138" fill="#fbbf24" fontSize="11" fontWeight="bold" fontFamily="monospace">|| Parallel</text>

            {/* Battery 3 & 4 Series Pair 2 */}
            <g transform="translate(240, 135)">
              <rect x="-22" y="-14" width="44" height="28" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="0" y="3" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="bold">12V 100Ah</text>
            </g>
            <line x1="262" y1="135" x2="288" y2="135" stroke="#34d399" strokeWidth="2" />
            <g transform="translate(310, 135)">
              <rect x="-22" y="-14" width="44" height="28" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="0" y="3" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="bold">12V 100Ah</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-1">Practical Applications: LED Limiter & 24V 200Ah Solar Battery Storage</p>
        </div>
      );

    default:
      // Canonical Ohm's Law circuit or fallback
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 340 180" className="w-full max-w-md h-44">
            <rect x="40" y="30" width="260" height="120" rx="6" fill="none" stroke="#38bdf8" strokeWidth="3" />
            
            {/* DC Battery */}
            <g transform="translate(40, 90)">
              <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#38bdf8" strokeWidth="3" />
              <text x="0" y="-3" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">+</text>
              <text x="0" y="11" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">-</text>
              <text x="-30" y="4" textAnchor="end" fill="#38bdf8" fontSize="11" fontWeight="bold">V (DC)</text>
            </g>

            {/* Ammeter */}
            <g transform="translate(170, 30)">
              <circle cx="0" cy="0" r="14" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
              <text x="0" y="4" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">A</text>
              <text x="0" y="-20" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">I (Current)</text>
            </g>

            {/* Resistor */}
            <g transform="translate(300, 90)">
              <rect x="-12" y="-25" width="24" height="50" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="18" y="4" fill="#34d399" fontSize="11" fontWeight="bold">R (Load)</text>
            </g>
          </svg>
          {caption && <p className="text-xs font-mono text-slate-300 mt-2 max-w-md text-center">{caption}</p>}
        </div>
      );
  }
};
