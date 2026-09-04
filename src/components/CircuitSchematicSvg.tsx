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

    case 'measurement-chain':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 420 120" className="w-full max-w-lg h-36">
            {/* Block 1: Physical Measurand */}
            <g transform="translate(10, 35)">
              <rect width="80" height="50" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <text x="40" y="24" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Measurand</text>
              <text x="40" y="38" textAnchor="middle" fill="#94a3b8" fontSize="8">(Physical Q)</text>
            </g>
            <path d="M 90 60 L 115 60" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Block 2: Sensor / Transducer */}
            <g transform="translate(115, 35)">
              <rect width="85" height="50" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
              <text x="42" y="24" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Sensor /</text>
              <text x="42" y="38" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Transducer</text>
            </g>
            <path d="M 200 60 L 225 60" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Block 3: Signal Conditioning */}
            <g transform="translate(225, 35)">
              <rect width="90" height="50" rx="6" fill="#0f172a" stroke="#a855f7" strokeWidth="2" />
              <text x="45" y="24" textAnchor="middle" fill="#c084fc" fontSize="10" fontWeight="bold">Signal</text>
              <text x="45" y="38" textAnchor="middle" fill="#c084fc" fontSize="10" fontWeight="bold">Processing</text>
            </g>
            <path d="M 315 60 L 340 60" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Block 4: Display / Indicator */}
            <g transform="translate(340, 35)">
              <rect width="70" height="50" rx="6" fill="#0f172a" stroke="#34d399" strokeWidth="2" />
              <text x="35" y="24" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">Display /</text>
              <text x="35" y="38" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">Output</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-1">{caption || "Measurement System Architecture: Sensor -> Signal Conditioning -> Display"}</p>
        </div>
      );

    case 'measurement-target-error':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 520 220" className="w-full max-w-2xl h-60">
            {/* Target 1: High Accuracy + High Precision */}
            <g transform="translate(100, 50)">
              <circle cx="0" cy="0" r="35" fill="#0f172a" stroke="#475569" strokeWidth="2" />
              <circle cx="0" cy="0" r="24" fill="none" stroke="#475569" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="12" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="2.5" fill="#38bdf8" />
              {/* Clustered at bullseye */}
              <circle cx="-1" cy="1" r="2.5" fill="#34d399" />
              <circle cx="2" cy="-1" r="2.5" fill="#34d399" />
              <circle cx="0" cy="-2" r="2.5" fill="#34d399" />
              <circle cx="-2" cy="-1" r="2.5" fill="#34d399" />
              <text x="0" y="48" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="bold">High Acc + High Prec</text>
            </g>

            {/* Target 2: High Accuracy + Low Precision */}
            <g transform="translate(420, 50)">
              <circle cx="0" cy="0" r="35" fill="#0f172a" stroke="#475569" strokeWidth="2" />
              <circle cx="0" cy="0" r="24" fill="none" stroke="#475569" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="12" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="2.5" fill="#38bdf8" />
              {/* Scattered around bullseye (mean is centered) */}
              <circle cx="-14" cy="10" r="2.5" fill="#a855f7" />
              <circle cx="12" cy="-12" r="2.5" fill="#a855f7" />
              <circle cx="10" cy="14" r="2.5" fill="#a855f7" />
              <circle cx="-8" cy="-15" r="2.5" fill="#a855f7" />
              <text x="0" y="48" textAnchor="middle" fill="#c084fc" fontSize="9" fontWeight="bold">High Acc + Low Prec</text>
            </g>

            {/* Target 3: Low Accuracy + High Precision */}
            <g transform="translate(100, 155)">
              <circle cx="0" cy="0" r="35" fill="#0f172a" stroke="#475569" strokeWidth="2" />
              <circle cx="0" cy="0" r="24" fill="none" stroke="#475569" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="12" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="2.5" fill="#38bdf8" />
              {/* Clustered off-center (Systematic Bias) */}
              <circle cx="18" cy="-16" r="2.5" fill="#f59e0b" />
              <circle cx="20" cy="-18" r="2.5" fill="#f59e0b" />
              <circle cx="17" cy="-19" r="2.5" fill="#f59e0b" />
              <circle cx="19" cy="-14" r="2.5" fill="#f59e0b" />
              <text x="0" y="48" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">Low Acc + High Prec (Bias)</text>
            </g>

            {/* Target 4: Low Accuracy + Low Precision */}
            <g transform="translate(420, 155)">
              <circle cx="0" cy="0" r="35" fill="#0f172a" stroke="#475569" strokeWidth="2" />
              <circle cx="0" cy="0" r="24" fill="none" stroke="#475569" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="12" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="2.5" fill="#38bdf8" />
              {/* Scattered off-center */}
              <circle cx="20" cy="18" r="2.5" fill="#ef4444" />
              <circle cx="-22" cy="-10" r="2.5" fill="#ef4444" />
              <circle cx="15" cy="-24" r="2.5" fill="#ef4444" />
              <circle cx="-5" cy="22" r="2.5" fill="#ef4444" />
              <text x="0" y="48" textAnchor="middle" fill="#f87171" fontSize="9" fontWeight="bold">Low Acc + Low Prec</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-1">{caption || "Target Analogy: Four Conceptual Cases of Accuracy vs Precision"}</p>
        </div>
      );

    case 'instrument-pmmc':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 420 180" className="w-full max-w-lg h-44">
            {/* PMMC Permanent Magnet */}
            <path d="M 60 140 L 60 50 C 60 30, 120 30, 140 50 L 140 130 C 120 120, 90 120, 60 140 Z" fill="#dc2626" stroke="#ef4444" strokeWidth="2" />
            <text x="80" y="75" fill="#ffffff" fontWeight="extrabold" fontSize="18">N</text>

            <path d="M 360 140 L 360 50 C 360 30, 300 30, 280 50 L 280 130 C 300 120, 330 120, 360 140 Z" fill="#2563eb" stroke="#3b82f6" strokeWidth="2" />
            <text x="330" y="75" fill="#ffffff" fontWeight="extrabold" fontSize="18">S</text>

            {/* Core & Moving Coil */}
            <circle cx="210" cy="95" r="38" fill="#334155" stroke="#64748b" strokeWidth="2" />
            <rect x="162" y="85" width="96" height="20" rx="3" fill="#f59e0b" fillOpacity="0.5" stroke="#f59e0b" strokeWidth="2" />
            <text x="210" y="98" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">Moving Coil</text>

            {/* Uniform Scale Arc */}
            <path d="M 120 35 A 110 110 0 0 1 300 35" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
            <text x="210" y="22" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Uniform Linear Scale (θ ∝ I)</text>

            {/* Pointer */}
            <line x1="210" y1="95" x2="250" y2="40" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="210" cy="95" r="5" fill="#ef4444" />
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-1">{caption || "PMMC Construction: Permanent Magnet, Moving Coil, Soft-Iron Core & Uniform Scale"}</p>
        </div>
      );

    case 'instrument-mi':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 420 180" className="w-full max-w-lg h-44">
            {/* Field Solenoid Coil */}
            <rect x="110" y="55" width="200" height="80" rx="10" fill="#78350f" stroke="#f59e0b" strokeWidth="2" />
            <rect x="150" y="75" width="120" height="40" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            <text x="210" y="68" textAnchor="middle" fill="#fef3c7" fontSize="10" fontWeight="bold">Fixed Field Coil</text>

            {/* Iron Vanes */}
            <rect x="165" y="82" width="12" height="26" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="1" />
            <text x="171" y="118" textAnchor="middle" fill="#cbd5e1" fontSize="7">Fixed Vane</text>

            <rect x="210" y="82" width="12" height="26" fill="#38bdf8" stroke="#7dd3fc" strokeWidth="1" />
            <text x="216" y="118" textAnchor="middle" fill="#7dd3fc" fontSize="7">Moving Vane</text>

            {/* Non-Uniform Scale Arc */}
            <path d="M 110 35 A 110 110 0 0 1 310 35" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
            <text x="210" y="20" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Non-Uniform Square-Law Scale (θ ∝ I²)</text>

            {/* Pointer */}
            <line x1="210" y1="95" x2="260" y2="40" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="210" cy="95" r="5" fill="#ef4444" />
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-1">{caption || "Moving Iron Construction: Solenoid Field Coil, Fixed & Moving Vanes, Non-Uniform Scale"}</p>
        </div>
      );

    case 'instrument-electrodynamometer':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 420 180" className="w-full max-w-lg h-44">
            {/* Fixed Coils (CC) */}
            <rect x="70" y="65" width="55" height="70" rx="6" fill="#991b1b" stroke="#f87171" strokeWidth="2" />
            <text x="97.5" y="105" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Fixed CC 1</text>

            <rect x="295" y="65" width="55" height="70" rx="6" fill="#991b1b" stroke="#f87171" strokeWidth="2" />
            <text x="322.5" y="105" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Fixed CC 2</text>

            {/* Moving Coil (PC) */}
            <rect x="180" y="80" width="60" height="40" rx="4" fill="#0369a1" fillOpacity="0.7" stroke="#38bdf8" strokeWidth="2" />
            <text x="210" y="103" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">Moving PC</text>

            {/* Scale */}
            <path d="M 110 35 A 110 110 0 0 1 310 35" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
            <text x="210" y="20" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Wattmeter Linear Power Scale (P = V I cosφ)</text>

            {/* Pointer */}
            <line x1="210" y1="100" x2="250" y2="40" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="210" cy="100" r="5" fill="#ef4444" />
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-1">{caption || "Electrodynamometer Wattmeter: Fixed Current Coils & Moving Pressure Coil"}</p>
        </div>
      );

    case 'instrument-classification':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 420 150" className="w-full max-w-lg h-40">
            {/* Root Node */}
            <g transform="translate(210, 20)">
              <rect x="-80" y="-12" width="160" height="24" rx="4" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" />
              <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">Electrical Measuring Instruments</text>
            </g>

            {/* Branching Lines */}
            <path d="M 210 32 L 210 48 M 210 48 L 100 48 M 210 48 L 320 48 M 100 48 L 100 60 M 320 48 L 320 60" stroke="#475569" strokeWidth="2" fill="none" />

            {/* Branch 1: Absolute Instruments */}
            <g transform="translate(100, 72)">
              <rect x="-65" y="-12" width="130" height="24" rx="4" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="0" y="4" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Absolute / Primary</text>
              <text x="0" y="24" textAnchor="middle" fill="#94a3b8" fontSize="8">(Tangent Galvanometer)</text>
            </g>

            {/* Branch 2: Secondary Instruments */}
            <g transform="translate(320, 72)">
              <rect x="-65" y="-12" width="130" height="24" rx="4" fill="#1e293b" stroke="#34d399" strokeWidth="1.5" />
              <text x="0" y="4" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">Secondary Instruments</text>
            </g>

            {/* Secondary Sub-branches */}
            <path d="M 320 84 L 320 98 M 320 98 L 220 98 M 320 98 L 320 98 M 320 98 L 400 98 M 220 98 L 220 108 M 320 98 L 320 108 M 400 98 L 400 108" stroke="#475569" strokeWidth="1.5" fill="none" />

            <g transform="translate(220, 120)">
              <rect x="-35" y="-10" width="70" height="20" rx="3" fill="#0f172a" stroke="#a855f7" strokeWidth="1" />
              <text x="0" y="3" textAnchor="middle" fill="#c084fc" fontSize="8" fontWeight="bold">Indicating</text>
            </g>
            <g transform="translate(320, 120)">
              <rect x="-35" y="-10" width="70" height="20" rx="3" fill="#0f172a" stroke="#a855f7" strokeWidth="1" />
              <text x="0" y="3" textAnchor="middle" fill="#c084fc" fontSize="8" fontWeight="bold">Recording</text>
            </g>
            <g transform="translate(400, 120)">
              <rect x="-35" y="-10" width="70" height="20" rx="3" fill="#0f172a" stroke="#a855f7" strokeWidth="1" />
              <text x="0" y="3" textAnchor="middle" fill="#c084fc" fontSize="8" fontWeight="bold">Integrating</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-1">{caption || "Instrument Hierarchy: Absolute vs Secondary (Indicating, Recording, Integrating)"}</p>
        </div>
      );

    case 'cro-oscilloscope':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 460 160" className="w-full max-w-xl h-44">
            {/* CRT Tube Envelope */}
            <path d="M 20 50 L 160 50 L 380 20 L 380 140 L 160 110 L 20 110 Z" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
            {/* Screen */}
            <rect x="380" y="15" width="20" height="130" rx="4" fill="#065f46" stroke="#34d399" strokeWidth="2" />
            
            {/* Electron Gun */}
            <rect x="30" y="70" width="40" height="20" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="50" y="83" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">Gun/Heater</text>

            {/* Y Deflection Plates */}
            <rect x="180" y="55" width="30" height="8" fill="#a855f7" />
            <rect x="180" y="97" width="30" height="8" fill="#a855f7" />
            <text x="195" y="48" textAnchor="middle" fill="#c084fc" fontSize="8">Y-Plates (Vertical)</text>

            {/* X Deflection Plates */}
            <rect x="250" y="60" width="8" height="40" fill="#38bdf8" />
            <rect x="290" y="60" width="8" height="40" fill="#38bdf8" />
            <text x="274" y="48" textAnchor="middle" fill="#38bdf8" fontSize="8">X-Plates (Timebase)</text>

            {/* Electron Beam */}
            <path d="M 70 80 Q 195 80 274 80 Q 330 60 380 50" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="3 2" />

            {/* Waveform on Screen */}
            <path d="M 382 30 Q 388 50 382 70 Q 388 90 382 110" fill="none" stroke="#4ade80" strokeWidth="3" />
          </svg>
          <p className="text-xs font-mono text-emerald-300 mt-1">{caption || "Cathode Ray Oscilloscope (CRO): Electron Gun, Deflection System & Phosphor Screen"}</p>
        </div>
      );

    case 'transducer-bridge':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 440 130" className="w-full max-w-lg h-36">
            <g transform="translate(20, 35)">
              <rect width="80" height="50" rx="6" fill="#0f172a" stroke="#ef4444" strokeWidth="2" />
              <text x="40" y="22" textAnchor="middle" fill="#f87171" fontSize="10" fontWeight="bold">Measurand</text>
              <text x="40" y="36" textAnchor="middle" fill="#94a3b8" fontSize="8">(Temp/Force)</text>
            </g>
            <path d="M 100 60 L 125 60" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow)" />

            <g transform="translate(125, 35)">
              <rect width="85" height="50" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
              <text x="42" y="22" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Transducer</text>
              <text x="42" y="36" textAnchor="middle" fill="#f59e0b" fontSize="8">(LVDT/Strain)</text>
            </g>
            <path d="M 210 60 L 235 60" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />

            <g transform="translate(235, 35)">
              <rect width="85" height="50" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <text x="42" y="22" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Conditioning</text>
              <text x="42" y="36" textAnchor="middle" fill="#38bdf8" fontSize="8">(Bridge/Amp)</text>
            </g>
            <path d="M 320 60 L 345 60" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />

            <g transform="translate(345, 35)">
              <rect width="75" height="50" rx="6" fill="#0f172a" stroke="#34d399" strokeWidth="2" />
              <text x="37.5" y="22" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">Readout</text>
              <text x="37.5" y="36" textAnchor="middle" fill="#34d399" fontSize="8">(Display/PLC)</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-1">{caption || "Transducer Measurement System Chain"}</p>
        </div>
      );

    case 'wheatstone-bridge':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 320 180" className="w-full max-w-md h-44">
            {/* Diamond Bridge Outline */}
            <polygon points="160,20 260,90 160,160 60,90" fill="none" stroke="#475569" strokeWidth="2" />
            
            {/* Resistor Arms */}
            <text x="100" y="48" fill="#38bdf8" fontSize="11" fontWeight="bold">R₁</text>
            <text x="210" y="48" fill="#38bdf8" fontSize="11" fontWeight="bold">R₂</text>
            <text x="100" y="138" fill="#34d399" fontSize="11" fontWeight="bold">R₃</text>
            <text x="210" y="138" fill="#f59e0b" fontSize="11" fontWeight="bold">R_x (Unknown)</text>

            {/* Galvanometer across center */}
            <line x1="60" y1="90" x2="260" y2="90" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="160" cy="90" r="16" fill="#0f172a" stroke="#a855f7" strokeWidth="2" />
            <text x="160" y="94" textAnchor="middle" fill="#c084fc" fontSize="11" fontWeight="bold">G</text>

            {/* DC Power Supply */}
            <line x1="160" y1="20" x2="160" y2="5" stroke="#ef4444" strokeWidth="2" />
            <line x1="160" y1="160" x2="160" y2="175" stroke="#ef4444" strokeWidth="2" />
          </svg>
          <p className="text-xs font-mono text-amber-300 mt-1">{caption || "Wheatstone Bridge: R_x = R₃ × (R₂ / R₁) at Null Balance (I_g = 0)"}</p>
        </div>
      );

    case 'lc-meter-bridge':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 320 180" className="w-full max-w-md h-44">
            <polygon points="160,20 260,90 160,160 60,90" fill="none" stroke="#38bdf8" strokeWidth="2" />
            <text x="95" y="48" fill="#38bdf8" fontSize="11" fontWeight="bold">Z₁ (L/C)</text>
            <text x="205" y="48" fill="#38bdf8" fontSize="11" fontWeight="bold">Z₂</text>
            <text x="95" y="138" fill="#34d399" fontSize="11" fontWeight="bold">Z₃</text>
            <text x="205" y="138" fill="#f59e0b" fontSize="11" fontWeight="bold">Z_x (Unknown)</text>

            {/* AC Detector */}
            <circle cx="160" cy="90" r="16" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
            <text x="160" y="94" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Det ~</text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-1">{caption || "AC Bridge Network for Inductance and Capacitance Measurement"}</p>
        </div>
      );

    case 'instrument-ct-pt':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 420 160" className="w-full max-w-lg h-44">
            {/* Primary High Voltage Busbar Line */}
            <line x1="30" y1="40" x2="390" y2="40" stroke="#ef4444" strokeWidth="4" />
            <text x="210" y="25" textAnchor="middle" fill="#ef4444" fontSize="11" fontWeight="bold">High Voltage Primary Busbar (11kV / 1000A)</text>

            {/* Current Transformer CT */}
            <g transform="translate(100, 40)">
              <circle cx="0" cy="0" r="16" fill="none" stroke="#f59e0b" strokeWidth="3" />
              <line x1="0" y1="16" x2="0" y2="70" stroke="#f59e0b" strokeWidth="2" />
              <circle cx="0" cy="85" r="14" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
              <text x="0" y="89" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">A</text>
              <text x="22" y="89" fill="#f59e0b" fontSize="9">CT (5A Meter)</text>
            </g>

            {/* Potential Transformer PT */}
            <g transform="translate(300, 40)">
              <rect x="-15" y="10" width="30" height="40" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" rx="3" />
              <line x1="0" y1="50" x2="0" y2="70" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="0" cy="85" r="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <text x="0" y="89" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">V</text>
              <text x="22" y="89" fill="#38bdf8" fontSize="9">PT (110V Meter)</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-1">{caption || "Instrument Transformers: CT reduces heavy current to 5A; PT reduces high voltage to 110V"}</p>
        </div>
      );

    case 'frequency-phase-wave':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 400 150" className="w-full max-w-lg h-40">
            {/* Lissajous ellipse for phase shift */}
            <g transform="translate(100, 75)">
              <ellipse cx="0" cy="0" rx="45" ry="30" fill="none" stroke="#38bdf8" strokeWidth="3" transform="rotate(-30)" />
              <text x="0" y="55" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Lissajous Ellipse (Phase φ)</text>
            </g>

            {/* Two Phase Shifted Waves */}
            <g transform="translate(280, 75)">
              <path d="M -80 0 Q -40 -40 0 0 Q 40 40 80 0" fill="none" stroke="#34d399" strokeWidth="2.5" />
              <path d="M -60 0 Q -20 -40 20 0 Q 60 40 100 0" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4 2" />
              <text x="0" y="55" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">Phase Angle φ Shift</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-emerald-300 mt-1">{caption || "Phase Angle Measurement via Lissajous Patterns and Dual Trace CRO"}</p>
        </div>
      );

    case 'calibration-workflow':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 440 130" className="w-full max-w-lg h-36">
            <g transform="translate(10, 40)">
              <rect width="90" height="45" rx="6" fill="#0f172a" stroke="#34d399" strokeWidth="2" />
              <text x="45" y="22" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">Standard</text>
              <text x="45" y="34" textAnchor="middle" fill="#94a3b8" fontSize="8">(High Accuracy)</text>
            </g>
            <path d="M 100 62 L 125 62" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrow)" />

            <g transform="translate(125, 40)">
              <rect width="90" height="45" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
              <text x="45" y="22" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">IUT Meter</text>
              <text x="45" y="34" textAnchor="middle" fill="#94a3b8" fontSize="8">(Under Test)</text>
            </g>
            <path d="M 215 62 L 240 62" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />

            <g transform="translate(240, 40)">
              <rect width="90" height="45" rx="6" fill="#0f172a" stroke="#ef4444" strokeWidth="2" />
              <text x="45" y="22" textAnchor="middle" fill="#f87171" fontSize="10" fontWeight="bold">Error Calc</text>
              <text x="45" y="34" textAnchor="middle" fill="#f87171" fontSize="8">E = V_iut - V_std</text>
            </g>
            <path d="M 330 62 L 355 62" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow)" />

            <g transform="translate(355, 40)">
              <rect width="75" height="45" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <text x="37.5" y="22" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Certificate</text>
              <text x="37.5" y="34" textAnchor="middle" fill="#38bdf8" fontSize="8">(Issued)</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-1">{caption || "Traceable Calibration Procedure Workflow"}</p>
        </div>
      );

    case 'electrical-safety':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 420 150" className="w-full max-w-lg h-40">
            {/* Safe Box */}
            <g transform="translate(10, 20)">
              <rect width="190" height="110" rx="6" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
              <text x="95" y="22" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">SAFE: Ammeter in SERIES</text>
              <line x1="20" y1="60" x2="170" y2="60" stroke="#34d399" strokeWidth="2" />
              <circle cx="95" cy="60" r="14" fill="#0f172a" stroke="#34d399" strokeWidth="2" />
              <text x="95" y="64" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">A</text>
              <text x="95" y="95" textAnchor="middle" fill="#a7f3d0" fontSize="9">R_internal ≈ 0 Ω</text>
            </g>

            {/* Unsafe Short Box */}
            <g transform="translate(220, 20)">
              <rect width="190" height="110" rx="6" fill="#7f1d1d" stroke="#ef4444" strokeWidth="2" />
              <text x="95" y="22" textAnchor="middle" fill="#f87171" fontSize="11" fontWeight="bold">DANGER: Parallel Ammeter</text>
              <line x1="30" y1="45" x2="160" y2="45" stroke="#f87171" strokeWidth="2" />
              <line x1="30" y1="85" x2="160" y2="85" stroke="#f87171" strokeWidth="2" />
              <line x1="95" y1="45" x2="95" y2="85" stroke="#f87171" strokeWidth="3" />
              <text x="95" y="102" textAnchor="middle" fill="#fca5a5" fontSize="9" fontWeight="bold">SHORT CIRCUIT BLAST!</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-emerald-300 mt-1">{caption || "Electrical Safety: Always connect Ammeters in Series and Voltmeters in Parallel"}</p>
        </div>
      );

    case 'instrument-thermal':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 420 150" className="w-full max-w-lg h-40">
            {/* Heating Wire */}
            <line x1="40" y1="75" x2="260" y2="75" stroke="#ef4444" strokeWidth="3" />
            <text x="150" y="60" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">Hot Wire (I²R Heating)</text>

            {/* Thermocouple Junction */}
            <circle cx="150" cy="75" r="4" fill="#f59e0b" />
            <line x1="150" y1="75" x2="150" y2="115" stroke="#f59e0b" strokeWidth="2" />
            
            {/* Millivoltmeter PMMC Display */}
            <circle cx="150" cy="125" r="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
            <text x="150" y="129" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">mV</text>

            {/* Scale */}
            <text x="320" y="70" fill="#34d399" fontSize="10" fontWeight="bold">True RMS (AC/DC)</text>
            <text x="320" y="88" fill="#94a3b8" fontSize="8">θ ∝ I²_rms</text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-1">{caption || "Thermal Instrument: Hot-Wire & Thermocouple True RMS Measurement"}</p>
        </div>
      );

    case 'instrument-ammeter-voltmeter':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 440 150" className="w-full max-w-lg h-40">
            {/* Ammeter Shunt Extension */}
            <g transform="translate(10, 20)">
              <rect width="195" height="110" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="97.5" y="22" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Ammeter: Low Resistance Shunt (R_sh || R_m)</text>
              <line x1="30" y1="50" x2="165" y2="50" stroke="#38bdf8" strokeWidth="2" />
              <line x1="30" y1="90" x2="165" y2="90" stroke="#38bdf8" strokeWidth="2" />
              <rect x="75" y="82" width="45" height="16" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" rx="2" />
              <text x="97.5" y="94" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">R_sh (Manganin)</text>
              <circle cx="97.5" cy="50" r="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <text x="97.5" y="54" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">A</text>
            </g>

            {/* Voltmeter Multiplier Extension */}
            <g transform="translate(225, 20)">
              <rect width="205" height="110" rx="6" fill="#0f172a" stroke="#34d399" strokeWidth="1.5" />
              <text x="102.5" y="22" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">Voltmeter: Series Multiplier (R_s + R_m)</text>
              <line x1="25" y1="65" x2="60" y2="65" stroke="#34d399" strokeWidth="2" />
              <rect x="60" y="57" width="50" height="16" fill="#1e293b" stroke="#34d399" strokeWidth="1.5" rx="2" />
              <text x="85" y="69" textAnchor="middle" fill="#34d399" fontSize="8" fontWeight="bold">R_multiplier</text>
              <line x1="110" y1="65" x2="140" y2="65" stroke="#34d399" strokeWidth="2" />
              <circle cx="155" cy="65" r="12" fill="#0f172a" stroke="#34d399" strokeWidth="2" />
              <text x="155" y="69" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="bold">V</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-1">{caption || "Range Extension: Ammeter Shunt (Parallel) & Voltmeter Multiplier (Series)"}</p>
        </div>
      );

    case 'instrument-wattmeter':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 420 150" className="w-full max-w-lg h-40">
            {/* Mains Line */}
            <line x1="30" y1="40" x2="390" y2="40" stroke="#ef4444" strokeWidth="3" />
            <line x1="30" y1="120" x2="390" y2="120" stroke="#38bdf8" strokeWidth="3" />

            {/* Current Coil in Series */}
            <g transform="translate(130, 40)">
              <rect x="-25" y="-10" width="50" height="20" fill="#1e293b" stroke="#ef4444" strokeWidth="2" rx="3" />
              <text x="0" y="4" textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="bold">CC (Current)</text>
            </g>

            {/* Pressure Coil in Parallel */}
            <g transform="translate(250, 80)">
              <line x1="0" y1="-40" x2="0" y2="40" stroke="#f59e0b" strokeWidth="2" />
              <rect x="-12" y="-20" width="24" height="40" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" rx="3" />
              <text x="0" y="4" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">PC</text>
            </g>

            {/* Load */}
            <g transform="translate(350, 80)">
              <rect x="-15" y="-25" width="30" height="50" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="0" y="4" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="bold">LOAD</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-1">{caption || "Electrodynamometer Wattmeter: Current Coil (CC in Series) and Potential Coil (PC in Parallel)"}</p>
        </div>
      );

    case 'instrument-energy-meter':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 420 150" className="w-full max-w-lg h-40">
            {/* Pressure Magnet / Shunt Magnet */}
            <rect x="180" y="20" width="60" height="35" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" rx="4" />
            <text x="210" y="42" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">Shunt Coil (V)</text>

            {/* Rotating Aluminum Disc */}
            <ellipse cx="210" cy="75" rx="140" ry="12" fill="#475569" stroke="#cbd5e1" strokeWidth="2" />
            <text x="210" y="78" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">Rotating Aluminum Disc (Eddy Currents)</text>

            {/* Series Current Magnet */}
            <rect x="180" y="95" width="60" height="35" fill="#1e293b" stroke="#ef4444" strokeWidth="2" rx="4" />
            <text x="210" y="117" textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="bold">Series Coil (I)</text>

            {/* Permanent Brake Magnet */}
            <path d="M 320 60 L 350 60 L 350 90 L 320 90 Z" fill="#991b1b" stroke="#f87171" strokeWidth="1.5" />
            <text x="335" y="80" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="bold">Brake Magnet</text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-1">{caption || "Single-Phase Induction Energy Meter: Shunt Magnet, Series Magnet, Aluminum Disc & Brake Magnet"}</p>
        </div>
      );

    case 'instrument-digital-dvm':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 440 120" className="w-full max-w-lg h-36">
            <g transform="translate(10, 35)">
              <rect width="80" height="50" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <text x="40" y="24" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Input</text>
              <text x="40" y="38" textAnchor="middle" fill="#94a3b8" fontSize="8">Attenuator</text>
            </g>
            <path d="M 90 60 L 115 60" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />

            <g transform="translate(115, 35)">
              <rect width="85" height="50" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
              <text x="42" y="24" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Analog-Digital</text>
              <text x="42" y="38" textAnchor="middle" fill="#f59e0b" fontSize="8">Converter (ADC)</text>
            </g>
            <path d="M 200 60 L 225 60" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />

            <g transform="translate(225, 35)">
              <rect width="85" height="50" rx="6" fill="#0f172a" stroke="#a855f7" strokeWidth="2" />
              <text x="42" y="24" textAnchor="middle" fill="#c084fc" fontSize="10" fontWeight="bold">Counter &</text>
              <text x="42" y="38" textAnchor="middle" fill="#c084fc" fontSize="8">Latch Circuit</text>
            </g>
            <path d="M 310 60 L 335 60" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrow)" />

            <g transform="translate(335, 35)">
              <rect width="95" height="50" rx="6" fill="#0f172a" stroke="#34d399" strokeWidth="2" />
              <text x="47.5" y="24" textAnchor="middle" fill="#34d399" fontSize="12" fontWeight="bold" fontFamily="monospace">230.5 V</text>
              <text x="47.5" y="38" textAnchor="middle" fill="#34d399" fontSize="8">7-Seg LED Display</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-1">{caption || "Digital Voltmeter (DVM) Architecture: Attenuator -> ADC -> Latch -> Digital Display"}</p>
        </div>
      );

    case 'transducers-concept':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 440 140" className="w-full max-w-lg h-36">
            {/* Active Transducers */}
            <g transform="translate(20, 20)">
              <rect width="185" height="100" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="92.5" y="22" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Active Transducers (Self-Generating)</text>
              <text x="92.5" y="45" textAnchor="middle" fill="#94a3b8" fontSize="8">No External Power Required</text>
              <text x="92.5" y="65" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="bold">Piezoelectric, Thermocouple, Solar Cell</text>
            </g>

            {/* Passive Transducers */}
            <g transform="translate(235, 20)">
              <rect width="185" height="100" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="92.5" y="22" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Passive Transducers (Externally Powered)</text>
              <text x="92.5" y="45" textAnchor="middle" fill="#94a3b8" fontSize="8">Requires External DC Source</text>
              <text x="92.5" y="65" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">LVDT, Strain Gauge, RTD, Thermistor</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-1">{caption || "Transducer Classification: Active (Self-Generating) vs Passive (Requires Auxiliary Power)"}</p>
        </div>
      );

    case 'troubleshooting-flow':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 440 130" className="w-full max-w-lg h-36">
            <g transform="translate(10, 40)">
              <rect width="75" height="45" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
              <text x="37.5" y="22" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">1. Symptom</text>
              <text x="37.5" y="34" textAnchor="middle" fill="#94a3b8" fontSize="8">(Motor Off)</text>
            </g>
            <path d="M 85 62 L 105 62" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />

            <g transform="translate(105, 40)">
              <rect width="80" height="45" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <text x="40" y="22" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">2. Voltage</text>
              <text x="40" y="34" textAnchor="middle" fill="#38bdf8" fontSize="8">(415V Test)</text>
            </g>
            <path d="M 185 62 L 205 62" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />

            <g transform="translate(205, 40)">
              <rect width="80" height="45" rx="6" fill="#0f172a" stroke="#a855f7" strokeWidth="2" />
              <text x="40" y="22" textAnchor="middle" fill="#c084fc" fontSize="10" fontWeight="bold">3. Fuse/Relay</text>
              <text x="40" y="34" textAnchor="middle" fill="#c084fc" fontSize="8">(Continuity)</text>
            </g>
            <path d="M 285 62 L 305 62" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrow)" />

            <g transform="translate(305, 40)">
              <rect width="125" height="45" rx="6" fill="#0f172a" stroke="#34d399" strokeWidth="2" />
              <text x="62.5" y="22" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">4. Megger & Repair</text>
              <text x="62.5" y="34" textAnchor="middle" fill="#34d399" fontSize="8">(Insulation Test)</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-1">{caption || "Systematic Diagnostic Troubleshooting Methodology Flowchart"}</p>
        </div>
      );

    case 'circuit-dc-network-terminology':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 460 220" className="w-full max-w-lg h-auto">
            {/* Outer Mesh Loop */}
            <rect x="50" y="30" width="360" height="150" rx="6" fill="none" stroke="#38bdf8" strokeWidth="3" />
            {/* Center Branch Line */}
            <line x1="230" y1="30" x2="230" y2="180" stroke="#38bdf8" strokeWidth="3" />

            {/* Nodes */}
            <circle cx="230" cy="30" r="7" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
            <text x="230" y="18" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Essential Node A (3 Branches)</text>

            <circle cx="230" cy="180" r="7" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
            <text x="230" y="198" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Essential Node B (Reference)</text>

            {/* Active Element (DC Source) */}
            <g transform="translate(50, 105)">
              <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
              <text x="0" y="-3" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">+</text>
              <text x="0" y="11" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">-</text>
              <text x="-25" y="4" textAnchor="end" fill="#38bdf8" fontSize="10" fontWeight="bold">V_s (Active)</text>
            </g>

            {/* Passive Linear Element (R1) */}
            <g transform="translate(140, 30)">
              <rect x="-22" y="-12" width="44" height="24" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="0" y="3" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">R₁ (Linear)</text>
            </g>

            {/* Non-Linear / Unilateral Element (Diode in Branch 2) */}
            <g transform="translate(230, 105)">
              <polygon points="0,-12 -12,12 12,12" fill="#1e293b" stroke="#ec4899" strokeWidth="2" transform="rotate(180)" />
              <line x1="-12" y1="12" x2="12" y2="12" stroke="#ec4899" strokeWidth="2.5" />
              <text x="22" y="4" fill="#f472b6" fontSize="10" fontWeight="bold">Diode (Unilateral)</text>
            </g>

            {/* Passive Bilateral Element (R2 in Branch 3) */}
            <g transform="translate(320, 30)">
              <rect x="-22" y="-12" width="44" height="24" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="0" y="3" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">R₂ (Bilateral)</text>
            </g>

            {/* Mesh 1 & Mesh 2 labels */}
            <text x="140" y="110" textAnchor="middle" fill="#a855f7" fontSize="11" fontWeight="bold">Mesh 1 (Loop 1)</text>
            <text x="320" y="110" textAnchor="middle" fill="#a855f7" fontSize="11" fontWeight="bold">Mesh 2 (Loop 2)</text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center">
            {caption || "DC Network Topology: Active/Passive, Linear/Non-linear, Bilateral/Unilateral, Nodes & Meshes"}
          </p>
        </div>
      );

    case 'circuit-kcl-node':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 380 200" className="w-full max-w-md h-auto">
            {/* Central Node */}
            <circle cx="190" cy="100" r="12" fill="#38bdf8" stroke="#ffffff" strokeWidth="3" />
            <text x="190" y="104" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold">N</text>

            {/* Incoming Branch 1 */}
            <line x1="50" y1="40" x2="190" y2="100" stroke="#38bdf8" strokeWidth="3" />
            <polygon points="120,70 110,62 112,74" fill="#38bdf8" />
            <text x="70" y="45" fill="#38bdf8" fontSize="11" fontWeight="bold">I₁ (In)</text>

            {/* Incoming Branch 2 */}
            <line x1="50" y1="160" x2="190" y2="100" stroke="#34d399" strokeWidth="3" />
            <polygon points="120,130 112,126 110,138" fill="#34d399" />
            <text x="70" y="170" fill="#34d399" fontSize="11" fontWeight="bold">I₂ (In)</text>

            {/* Outgoing Branch 3 */}
            <line x1="190" y1="100" x2="330" y2="40" stroke="#f59e0b" strokeWidth="3" />
            <polygon points="260,70 268,62 270,74" fill="#f59e0b" />
            <text x="310" y="45" fill="#f59e0b" fontSize="11" fontWeight="bold">I₃ (Out)</text>

            {/* Outgoing Branch 4 */}
            <line x1="190" y1="100" x2="330" y2="160" stroke="#ec4899" strokeWidth="3" />
            <polygon points="260,130 270,126 268,138" fill="#ec4899" />
            <text x="310" y="170" fill="#ec4899" fontSize="11" fontWeight="bold">I₄ (Out)</text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-1 text-center font-bold">
            {caption || "Kirchhoff's Current Law (KCL): ΣI_in = ΣI_out  ⇒  I₁ + I₂ = I₃ + I₄"}
          </p>
        </div>
      );

    case 'circuit-kvl-loop':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 380 200" className="w-full max-w-md h-auto">
            <rect x="50" y="30" width="280" height="140" rx="8" fill="none" stroke="#38bdf8" strokeWidth="3" />

            {/* Loop CW Arrow */}
            <path d="M 170,100 A 20,20 0 1,1 210,100" fill="none" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrow)" />
            <text x="190" y="104" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Loop CW</text>

            {/* Voltage Source V_S */}
            <g transform="translate(50, 100)">
              <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
              <text x="0" y="-3" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">+</text>
              <text x="0" y="11" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">-</text>
              <text x="-25" y="4" textAnchor="end" fill="#38bdf8" fontSize="10" fontWeight="bold">V_s (+ Rise)</text>
            </g>

            {/* Resistor R1 */}
            <g transform="translate(190, 30)">
              <rect x="-25" y="-12" width="50" height="24" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="0" y="3" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">R₁ (- Drop)</text>
            </g>

            {/* Resistor R2 */}
            <g transform="translate(330, 100)">
              <rect x="-12" y="-25" width="24" height="50" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="18" y="4" fill="#34d399" fontSize="10" fontWeight="bold">R₂ (- Drop)</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-1 text-center font-bold">
            {caption || "Kirchhoff's Voltage Law (KVL): ΣV = 0  ⇒  V_s - V_R1 - V_R2 = 0"}
          </p>
        </div>
      );

    case 'circuit-node-branch-topology':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 460 240" className="w-full max-w-lg h-auto">
            {/* Outer Circuit Rect */}
            <rect x="50" y="30" width="360" height="160" rx="8" fill="none" stroke="#475569" strokeWidth="2.5" />
            
            {/* Middle Branch Line */}
            <line x1="230" y1="30" x2="230" y2="190" stroke="#475569" strokeWidth="2.5" />

            {/* Essential Nodes (3+ elements) */}
            <circle cx="230" cy="30" r="8" fill="#eab308" stroke="#fef08a" strokeWidth="2" />
            <text x="230" y="16" textAnchor="middle" fill="#fef08a" fontSize="11" fontWeight="bold">Essential Node N1</text>

            <circle cx="230" cy="190" r="8" fill="#38bdf8" stroke="#93c5fd" strokeWidth="2" />
            <text x="230" y="212" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">Ref Ground Node N0 (0V)</text>

            {/* Non-essential Nodes (2 elements) */}
            <circle cx="50" cy="110" r="5" fill="#94a3b8" />
            <text x="35" y="114" textAnchor="end" fill="#cbd5e1" fontSize="10">Node A (Simple)</text>

            <circle cx="410" cy="110" r="5" fill="#94a3b8" />
            <text x="425" y="114" textAnchor="start" fill="#cbd5e1" fontSize="10">Node B (Simple)</text>

            {/* Element Branches */}
            <g transform="translate(140, 30)">
              <rect x="-20" y="-10" width="40" height="20" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="0" y="3" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">Branch 1 (R₁)</text>
            </g>

            <g transform="translate(320, 30)">
              <rect x="-20" y="-10" width="40" height="20" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="0" y="3" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">Branch 2 (R₂)</text>
            </g>

            <g transform="translate(230, 110)">
              <rect x="-10" y="-20" width="20" height="40" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="16" y="4" fill="#34d399" fontSize="10" fontWeight="bold">Branch 3 (R₃)</text>
            </g>

            <g transform="translate(50, 110)">
              <circle cx="0" cy="0" r="14" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
              <text x="0" y="4" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Vs1</text>
            </g>

            {/* Loops & Meshes Highlights */}
            <path d="M 120,80 A 18,18 0 1,1 150,80" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" />
            <text x="135" y="84" textAnchor="middle" fill="#fde047" fontSize="10" fontWeight="bold">Mesh 1</text>

            <path d="M 300,80 A 18,18 0 1,1 330,80" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" />
            <text x="315" y="84" textAnchor="middle" fill="#fde047" fontSize="10" fontWeight="bold">Mesh 2</text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Network Topology: Essential Nodes (3+ elements) | Independent Meshes M = B - N + 1"}
          </p>
        </div>
      );

    case 'circuit-nodal-analysis':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 440 220" className="w-full max-w-lg h-auto">
            {/* Ground Line */}
            <line x1="60" y1="180" x2="380" y2="180" stroke="#475569" strokeWidth="3" />
            <line x1="220" y1="180" x2="220" y2="200" stroke="#38bdf8" strokeWidth="3" />
            <line x1="205" y1="200" x2="235" y2="200" stroke="#38bdf8" strokeWidth="3" />
            <text x="220" y="215" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Reference Node (0 V)</text>

            {/* Essential Nodes Va and Vb */}
            <line x1="60" y1="50" x2="380" y2="50" stroke="#64748b" strokeWidth="2.5" />
            <circle cx="150" cy="50" r="7" fill="#eab308" stroke="#fef08a" strokeWidth="2" />
            <text x="150" y="32" textAnchor="middle" fill="#fef08a" fontSize="11" fontWeight="bold">Node Va</text>

            <circle cx="290" cy="50" r="7" fill="#eab308" stroke="#fef08a" strokeWidth="2" />
            <text x="290" y="32" textAnchor="middle" fill="#fef08a" fontSize="11" fontWeight="bold">Node Vb</text>

            {/* Resistor Branches */}
            <g transform="translate(220, 50)">
              <rect x="-20" y="-10" width="40" height="20" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="0" y="3" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">R_shared</text>
            </g>

            <line x1="150" y1="50" x2="150" y2="180" stroke="#64748b" strokeWidth="2.5" />
            <g transform="translate(150, 115)">
              <rect x="-10" y="-20" width="20" height="40" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="15" y="4" fill="#34d399" fontSize="10" fontWeight="bold">R_g1</text>
            </g>

            <line x1="290" y1="50" x2="290" y2="180" stroke="#64748b" strokeWidth="2.5" />
            <g transform="translate(290, 115)">
              <rect x="-10" y="-20" width="20" height="40" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="15" y="4" fill="#34d399" fontSize="10" fontWeight="bold">R_g2</text>
            </g>

            {/* KCL Current Arrows */}
            <path d="M 160,50 L 190,50" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="175" y="42" textAnchor="middle" fill="#38bdf8" fontSize="9">I = (Va - Vb)/R</text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Nodal Analysis Formulation: Apply KCL at non-reference essential nodes Va and Vb"}
          </p>
        </div>
      );

    case 'circuit-mesh-analysis':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 440 220" className="w-full max-w-lg h-auto">
            <rect x="50" y="30" width="340" height="150" rx="6" fill="none" stroke="#475569" strokeWidth="2.5" />
            <line x1="220" y1="30" x2="220" y2="180" stroke="#475569" strokeWidth="2.5" />

            {/* Resistors */}
            <g transform="translate(135, 30)">
              <rect x="-20" y="-10" width="40" height="20" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="0" y="3" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">R₁</text>
            </g>

            <g transform="translate(305, 30)">
              <rect x="-20" y="-10" width="40" height="20" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="0" y="3" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">R₂</text>
            </g>

            <g transform="translate(220, 105)">
              <rect x="-10" y="-20" width="20" height="40" fill="#1e293b" stroke="#eab308" strokeWidth="2" rx="3" />
              <text x="16" y="4" fill="#fef08a" fontSize="10" fontWeight="bold">R_m (Shared)</text>
            </g>

            {/* Mesh 1 CW Loop */}
            <g transform="translate(135, 105)">
              <path d="M -20,0 A 20,20 0 1,1 20,0" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" />
              <polygon points="20,0 15,-5 22,-2" fill="#f59e0b" />
              <text x="0" y="4" textAnchor="middle" fill="#fde047" fontSize="10" fontWeight="bold">Mesh 1 (I₁)</text>
            </g>

            {/* Mesh 2 CW Loop */}
            <g transform="translate(305, 105)">
              <path d="M -20,0 A 20,20 0 1,1 20,0" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" />
              <polygon points="20,0 15,-5 22,-2" fill="#f59e0b" />
              <text x="0" y="4" textAnchor="middle" fill="#fde047" fontSize="10" fontWeight="bold">Mesh 2 (I₂)</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Mesh Analysis Formulation: KVL in Mesh 1 and Mesh 2 with shared drop R_m(I₁ - I₂)"}
          </p>
        </div>
      );

    case 'circuit-network-reduction':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 440 180" className="w-full max-w-lg h-auto">
            <rect x="40" y="30" width="360" height="120" rx="6" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
            
            {/* Source */}
            <g transform="translate(40, 90)">
              <circle cx="0" cy="0" r="16" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <text x="0" y="4" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">Vs</text>
            </g>

            {/* R1 Series */}
            <g transform="translate(130, 30)">
              <rect x="-20" y="-10" width="40" height="20" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="0" y="-15" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">R1 (Series)</text>
            </g>

            {/* Block 1 Parallel */}
            <line x1="220" y1="30" x2="220" y2="150" stroke="#475569" strokeWidth="2" />
            <g transform="translate(220, 60)">
              <rect x="-10" y="-15" width="20" height="30" fill="#1e293b" stroke="#a855f7" strokeWidth="2" rx="3" />
              <text x="16" y="4" fill="#d8b4fe" fontSize="10" fontWeight="bold">R2</text>
            </g>
            <g transform="translate(220, 120)">
              <rect x="-10" y="-15" width="20" height="30" fill="#1e293b" stroke="#a855f7" strokeWidth="2" rx="3" />
              <text x="16" y="4" fill="#d8b4fe" fontSize="10" fontWeight="bold">R3</text>
            </g>

            {/* Block 2 Parallel */}
            <line x1="330" y1="30" x2="330" y2="150" stroke="#475569" strokeWidth="2" />
            <g transform="translate(330, 60)">
              <rect x="-10" y="-15" width="20" height="30" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" rx="3" />
              <text x="16" y="4" fill="#fef08a" fontSize="10" fontWeight="bold">R4</text>
            </g>
            <g transform="translate(330, 120)">
              <rect x="-10" y="-15" width="20" height="30" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" rx="3" />
              <text x="16" y="4" fill="#fef08a" fontSize="10" fontWeight="bold">R5+R6</text>
            </g>

            {/* Reduction Arrow */}
            <path d="M 370,90 L 395,90" stroke="#f43f5e" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="382" y="80" textAnchor="middle" fill="#f43f5e" fontSize="9" fontWeight="bold">Reduce → Req</text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Multi-Stage Network Reduction: Combine parallel blocks from load toward source terminals"}
          </p>
        </div>
      );

    case 'circuit-divider-networks':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 440 180" className="w-full max-w-lg h-auto">
            {/* Voltage Divider Left */}
            <g transform="translate(20, 0)">
              <rect x="20" y="30" width="160" height="120" rx="6" fill="none" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="20" cy="90" r="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <text x="20" y="94" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Vs</text>
              <g transform="translate(100, 30)">
                <rect x="-15" y="-8" width="30" height="16" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="2" />
                <text x="0" y="18" textAnchor="middle" fill="#34d399" fontSize="9">R1</text>
              </g>
              <g transform="translate(180, 90)">
                <rect x="-8" y="-15" width="16" height="30" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="2" />
                <text x="14" y="4" fill="#34d399" fontSize="9">R2 (Vx)</text>
              </g>
              <text x="100" y="165" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">VDR: Vx = Vs · R2/(R1+R2)</text>
            </g>

            {/* Divider Line */}
            <line x1="225" y1="20" x2="225" y2="160" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />

            {/* Current Divider Right */}
            <g transform="translate(230, 0)">
              <rect x="20" y="30" width="160" height="120" rx="6" fill="none" stroke="#f59e0b" strokeWidth="2" />
              <g transform="translate(20, 90)">
                <circle cx="0" cy="0" r="14" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
                <text x="0" y="4" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Is</text>
              </g>
              <line x1="100" y1="30" x2="100" y2="150" stroke="#475569" strokeWidth="2" />
              <line x1="160" y1="30" x2="160" y2="150" stroke="#475569" strokeWidth="2" />
              <g transform="translate(100, 90)">
                <rect x="-8" y="-15" width="16" height="30" fill="#1e293b" stroke="#a855f7" strokeWidth="2" rx="2" />
                <text x="-12" y="4" textAnchor="end" fill="#d8b4fe" fontSize="9">R1 (I1)</text>
              </g>
              <g transform="translate(160, 90)">
                <rect x="-8" y="-15" width="16" height="30" fill="#1e293b" stroke="#a855f7" strokeWidth="2" rx="2" />
                <text x="12" y="4" fill="#d8b4fe" fontSize="9">R2 (I2)</text>
              </g>
              <text x="100" y="165" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">CDR: I1 = Is · R2/(R1+R2)</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Voltage Divider (Series) vs Current Divider (Parallel) Principles"}
          </p>
        </div>
      );

    case 'circuit-star-delta':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 440 180" className="w-full max-w-lg h-auto">
            {/* Delta Triangle Left */}
            <g transform="translate(90, 90)">
              <polygon points="0,-50 50,40 -50,40" fill="none" stroke="#a855f7" strokeWidth="2.5" />
              <circle cx="0" cy="-50" r="4" fill="#a855f7" />
              <text x="0" y="-58" textAnchor="middle" fill="#d8b4fe" fontSize="10" fontWeight="bold">A</text>

              <circle cx="50" cy="40" r="4" fill="#a855f7" />
              <text x="60" y="44" textAnchor="start" fill="#d8b4fe" fontSize="10" fontWeight="bold">B</text>

              <circle cx="-50" cy="40" r="4" fill="#a855f7" />
              <text x="-60" y="44" textAnchor="end" fill="#d8b4fe" fontSize="10" fontWeight="bold">C</text>

              <text x="32" y="-10" fill="#f472b6" fontSize="9" fontWeight="bold">RAB</text>
              <text x="0" y="55" textAnchor="middle" fill="#f472b6" fontSize="9" fontWeight="bold">RBC</text>
              <text x="-32" y="-10" textAnchor="end" fill="#f472b6" fontSize="9" fontWeight="bold">RCA</text>
              <text x="0" y="0" textAnchor="middle" fill="#a855f7" fontSize="12" fontWeight="bold">Delta (Δ)</text>
            </g>

            {/* Transform Symbol Middle */}
            <g transform="translate(220, 90)">
              <path d="M -20,-10 L 20,-10 M 10,-18 L 20,-10 L 10,-2" stroke="#38bdf8" strokeWidth="2.5" />
              <path d="M 20,10 L -20,10 M -10,2 L -20,10 L -10,18" stroke="#38bdf8" strokeWidth="2.5" />
              <text x="0" y="-24" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">Δ ↔ Y</text>
            </g>

            {/* Star Wye Right */}
            <g transform="translate(350, 90)">
              <circle cx="0" cy="0" r="4" fill="#38bdf8" />
              <text x="10" y="4" fill="#93c5fd" fontSize="9">N</text>

              <line x1="0" y1="0" x2="0" y2="-50" stroke="#38bdf8" strokeWidth="2.5" />
              <circle cx="0" cy="-50" r="4" fill="#38bdf8" />
              <text x="0" y="-58" textAnchor="middle" fill="#93c5fd" fontSize="10" fontWeight="bold">A</text>

              <line x1="0" y1="0" x2="45" y2="35" stroke="#38bdf8" strokeWidth="2.5" />
              <circle cx="45" cy="35" r="4" fill="#38bdf8" />
              <text x="55" y="40" textAnchor="start" fill="#93c5fd" fontSize="10" fontWeight="bold">B</text>

              <line x1="0" y1="0" x2="-45" y2="35" stroke="#38bdf8" strokeWidth="2.5" />
              <circle cx="-45" cy="35" r="4" fill="#38bdf8" />
              <text x="-55" y="40" textAnchor="end" fill="#93c5fd" fontSize="10" fontWeight="bold">C</text>

              <text x="8" y="-25" fill="#34d399" fontSize="9" fontWeight="bold">RA</text>
              <text x="22" y="10" fill="#34d399" fontSize="9" fontWeight="bold">RB</text>
              <text x="-22" y="10" textAnchor="end" fill="#34d399" fontSize="9" fontWeight="bold">RC</text>
              <text x="0" y="60" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">Star (Y)</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Terminal Equivalence Transformation between Delta (Δ) Mesh and Star (Y) Wye Configuration"}
          </p>
        </div>
      );

    case 'circuit-network-theorems-map':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 520 220" className="w-full max-w-xl h-auto">
            {/* Center Box: Complex Network */}
            <rect x="180" y="20" width="160" height="40" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
            <text x="260" y="44" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">Complex Linear Network</text>

            {/* Downward Lines */}
            <path d="M 260,60 L 260,85 M 260,85 L 60,85 L 60,110 M 260,85 L 160,85 L 160,110 M 260,85 L 260,110 M 260,85 L 360,85 L 360,110 M 260,85 L 460,85 L 460,110" stroke="#475569" strokeWidth="2" fill="none" />

            {/* Theorem Cards */}
            {/* 1. Thevenin */}
            <g transform="translate(60, 110)">
              <rect x="-45" y="0" width="90" height="85" rx="5" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
              <text x="0" y="18" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">Thevenin</text>
              <line x1="-35" y1="26" x2="35" y2="26" stroke="#334155" strokeWidth="1" />
              <text x="0" y="42" textAnchor="middle" fill="#cbd5e1" fontSize="9">Replaces with</text>
              <text x="0" y="56" textAnchor="middle" fill="#93c5fd" fontSize="9" fontWeight="bold">Vth + Rth series</text>
              <text x="0" y="70" textAnchor="middle" fill="#64748b" fontSize="8">Loads & Power</text>
            </g>

            {/* 2. Norton */}
            <g transform="translate(160, 110)">
              <rect x="-45" y="0" width="90" height="85" rx="5" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
              <text x="0" y="18" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">Norton</text>
              <line x1="-35" y1="26" x2="35" y2="26" stroke="#334155" strokeWidth="1" />
              <text x="0" y="42" textAnchor="middle" fill="#cbd5e1" fontSize="9">Replaces with</text>
              <text x="0" y="56" textAnchor="middle" fill="#fef08a" fontSize="9" fontWeight="bold">IN || RN parallel</text>
              <text x="0" y="70" textAnchor="middle" fill="#64748b" fontSize="8">Parallel Analysis</text>
            </g>

            {/* 3. Superposition */}
            <g transform="translate(260, 110)">
              <rect x="-45" y="0" width="90" height="85" rx="5" fill="#1e293b" stroke="#a855f7" strokeWidth="2" />
              <text x="0" y="18" textAnchor="middle" fill="#a855f7" fontSize="10" fontWeight="bold">Superposition</text>
              <line x1="-35" y1="26" x2="35" y2="26" stroke="#334155" strokeWidth="1" />
              <text x="0" y="42" textAnchor="middle" fill="#cbd5e1" fontSize="9">Analyzes</text>
              <text x="0" y="56" textAnchor="middle" fill="#d8b4fe" fontSize="9" fontWeight="bold">1 source at a time</text>
              <text x="0" y="70" textAnchor="middle" fill="#64748b" fontSize="8">Multi-Source</text>
            </g>

            {/* 4. Max Power Transfer */}
            <g transform="translate(360, 110)">
              <rect x="-45" y="0" width="90" height="85" rx="5" fill="#1e293b" stroke="#34d399" strokeWidth="2" />
              <text x="0" y="18" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">Max Power</text>
              <line x1="-35" y1="26" x2="35" y2="26" stroke="#334155" strokeWidth="1" />
              <text x="0" y="42" textAnchor="middle" fill="#cbd5e1" fontSize="9">Finds RL for</text>
              <text x="0" y="56" textAnchor="middle" fill="#6ee7b7" fontSize="9" fontWeight="bold">Pmax when RL=Rth</text>
              <text x="0" y="70" textAnchor="middle" fill="#64748b" fontSize="8">Matching Load</text>
            </g>

            {/* 5. Reciprocity */}
            <g transform="translate(460, 110)">
              <rect x="-45" y="0" width="90" height="85" rx="5" fill="#1e293b" stroke="#ec4899" strokeWidth="2" />
              <text x="0" y="18" textAnchor="middle" fill="#ec4899" fontSize="10" fontWeight="bold">Reciprocity</text>
              <line x1="-35" y1="26" x2="35" y2="26" stroke="#334155" strokeWidth="1" />
              <text x="0" y="42" textAnchor="middle" fill="#cbd5e1" fontSize="9">Interchanges</text>
              <text x="0" y="56" textAnchor="middle" fill="#f472b6" fontSize="9" fontWeight="bold">Source & Response</text>
              <text x="0" y="70" textAnchor="middle" fill="#64748b" fontSize="8">Symmetric Nets</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Overview Map of Fundamental Network Theorems and Their Engineering Roles"}
          </p>
        </div>
      );

    case 'circuit-thevenin-concept':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 480 160" className="w-full max-w-lg h-auto">
            {/* Step 1: Original */}
            <g transform="translate(20, 20)">
              <rect x="0" y="0" width="90" height="70" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <text x="45" y="30" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Complex</text>
              <text x="45" y="45" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Network</text>
              <line x1="90" y1="20" x2="110" y2="20" stroke="#475569" strokeWidth="2" />
              <line x1="90" y1="50" x2="110" y2="50" stroke="#475569" strokeWidth="2" />
              <rect x="110" y="10" width="16" height="50" fill="#1e293b" stroke="#ec4899" strokeWidth="2" rx="2" />
              <text x="118" y="105" textAnchor="middle" fill="#cbd5e1" fontSize="9">1. Original Network</text>
            </g>

            {/* Arrow 1 */}
            <path d="M 160,55 L 180,55" stroke="#f43f5e" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Step 2: Open Terminal */}
            <g transform="translate(190, 20)">
              <rect x="0" y="0" width="90" height="70" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <text x="45" y="30" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Complex</text>
              <text x="45" y="45" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Network</text>
              <line x1="90" y1="20" x2="120" y2="20" stroke="#38bdf8" strokeWidth="2" />
              <line x1="90" y1="50" x2="120" y2="50" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="120" cy="20" r="3" fill="#f43f5e" />
              <circle cx="120" cy="50" r="3" fill="#f43f5e" />
              <text x="65" y="105" textAnchor="middle" fill="#cbd5e1" fontSize="9">2. Find Voc & Rth</text>
            </g>

            {/* Arrow 2 */}
            <path d="M 325,55 L 345,55" stroke="#f43f5e" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Step 3: Thevenin Equivalent */}
            <g transform="translate(350, 20)">
              <rect x="0" y="0" width="110" height="80" rx="4" fill="none" stroke="#34d399" strokeWidth="2" strokeDasharray="4 3" />
              <circle cx="20" cy="40" r="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <text x="20" y="43" textAnchor="middle" fill="#38bdf8" fontSize="8" fontWeight="bold">Vth</text>
              <rect x="50" y="10" width="30" height="14" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="2" />
              <text x="65" y="21" textAnchor="middle" fill="#34d399" fontSize="8" fontWeight="bold">Rth</text>
              <text x="55" y="105" textAnchor="middle" fill="#cbd5e1" fontSize="9">3. Thevenin Equivalent</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Transformation Sequence: Any linear two-terminal network reduces to Vth in series with Rth"}
          </p>
        </div>
      );

    case 'circuit-norton-concept':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 480 160" className="w-full max-w-lg h-auto">
            {/* Step 1: Original */}
            <g transform="translate(20, 20)">
              <rect x="0" y="0" width="90" height="70" rx="4" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
              <text x="45" y="30" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Complex</text>
              <text x="45" y="45" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Network</text>
              <line x1="90" y1="20" x2="110" y2="20" stroke="#475569" strokeWidth="2" />
              <line x1="90" y1="50" x2="110" y2="50" stroke="#475569" strokeWidth="2" />
              <rect x="110" y="10" width="16" height="50" fill="#1e293b" stroke="#ec4899" strokeWidth="2" rx="2" />
              <text x="118" y="105" textAnchor="middle" fill="#cbd5e1" fontSize="9">1. Original Network</text>
            </g>

            {/* Arrow 1 */}
            <path d="M 160,55 L 180,55" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Step 2: Shorted Terminals */}
            <g transform="translate(190, 20)">
              <rect x="0" y="0" width="90" height="70" rx="4" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
              <text x="45" y="30" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Complex</text>
              <text x="45" y="45" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Network</text>
              <line x1="90" y1="20" x2="120" y2="20" stroke="#f59e0b" strokeWidth="2" />
              <line x1="90" y1="50" x2="120" y2="50" stroke="#f59e0b" strokeWidth="2" />
              <line x1="120" y1="20" x2="120" y2="50" stroke="#ef4444" strokeWidth="2.5" />
              <text x="65" y="105" textAnchor="middle" fill="#cbd5e1" fontSize="9">2. Find Isc & RN</text>
            </g>

            {/* Arrow 2 */}
            <path d="M 325,55 L 345,55" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Step 3: Norton Equivalent */}
            <g transform="translate(350, 20)">
              <rect x="0" y="0" width="110" height="80" rx="4" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 3" />
              <circle cx="25" cy="40" r="12" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
              <text x="25" y="43" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">IN</text>
              <rect x="70" y="25" width="14" height="30" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="2" />
              <text x="77" y="68" textAnchor="middle" fill="#34d399" fontSize="8" fontWeight="bold">RN</text>
              <text x="55" y="105" textAnchor="middle" fill="#cbd5e1" fontSize="9">3. Norton Equivalent</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-amber-300 mt-2 text-center font-bold">
            {caption || "Transformation Sequence: Any linear two-terminal network reduces to IN in parallel with RN"}
          </p>
        </div>
      );

    case 'circuit-superposition-concept':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 520 150" className="w-full max-w-lg h-auto">
            {/* Step 1: Full Circuit (V1 + V2) */}
            <g transform="translate(10, 15)">
              <rect x="0" y="0" width="130" height="90" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <text x="65" y="22" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Full Circuit</text>
              <circle cx="25" cy="55" r="12" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="25" y="58" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">V1</text>
              <rect x="55" y="45" width="20" height="20" fill="#1e293b" stroke="#34d399" strokeWidth="1.5" rx="2" />
              <text x="65" y="58" textAnchor="middle" fill="#34d399" fontSize="8" fontWeight="bold">RL</text>
              <circle cx="105" cy="55" r="12" fill="#1e293b" stroke="#c084fc" strokeWidth="1.5" />
              <text x="105" y="58" textAnchor="middle" fill="#c084fc" fontSize="8" fontWeight="bold">V2</text>
              <text x="65" y="112" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontWeight="bold">I_total = I′_L + I″_L</text>
            </g>

            <text x="160" y="65" textAnchor="middle" fill="#38bdf8" fontSize="18" fontWeight="bold">=</text>

            {/* Step 2: V1 Only (V2 Shorted) */}
            <g transform="translate(180, 15)">
              <rect x="0" y="0" width="130" height="90" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
              <text x="65" y="22" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">V1 Only (V2 Shorted)</text>
              <circle cx="25" cy="55" r="12" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="25" y="58" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">V1</text>
              <rect x="55" y="45" width="20" height="20" fill="#1e293b" stroke="#34d399" strokeWidth="1.5" rx="2" />
              <text x="65" y="58" textAnchor="middle" fill="#34d399" fontSize="8" fontWeight="bold">RL</text>
              <line x1="100" y1="55" x2="110" y2="55" stroke="#ef4444" strokeWidth="2.5" />
              <text x="65" y="112" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontWeight="bold">I′_L (From V1)</text>
            </g>

            <text x="330" y="65" textAnchor="middle" fill="#38bdf8" fontSize="18" fontWeight="bold">+</text>

            {/* Step 3: V2 Only (V1 Shorted) */}
            <g transform="translate(350, 15)">
              <rect x="0" y="0" width="130" height="90" rx="6" fill="#0f172a" stroke="#c084fc" strokeWidth="2" />
              <text x="65" y="22" textAnchor="middle" fill="#c084fc" fontSize="10" fontWeight="bold">V2 Only (V1 Shorted)</text>
              <line x1="20" y1="55" x2="30" y2="55" stroke="#ef4444" strokeWidth="2.5" />
              <rect x="55" y="45" width="20" height="20" fill="#1e293b" stroke="#34d399" strokeWidth="1.5" rx="2" />
              <text x="65" y="58" textAnchor="middle" fill="#34d399" fontSize="8" fontWeight="bold">RL</text>
              <circle cx="105" cy="55" r="12" fill="#1e293b" stroke="#c084fc" strokeWidth="1.5" />
              <text x="105" y="58" textAnchor="middle" fill="#c084fc" fontSize="8" fontWeight="bold">V2</text>
              <text x="65" y="112" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontWeight="bold">I″_L (From V2)</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Superposition Method: Total Response = Algebraic Sum of Individual Source Responses"}
          </p>
        </div>
      );

    case 'circuit-maxpower-concept':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 460 160" className="w-full max-w-lg h-auto">
            {/* Thevenin Source connected to RL */}
            <g transform="translate(20, 20)">
              <rect x="0" y="0" width="200" height="110" rx="6" fill="#0f172a" stroke="#34d399" strokeWidth="2" />
              <text x="100" y="20" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">Thevenin Equivalent + Load</text>

              <circle cx="30" cy="65" r="14" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
              <text x="30" y="68" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">Vth</text>

              <rect x="70" y="35" width="30" height="16" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="2" />
              <text x="85" y="47" textAnchor="middle" fill="#34d399" fontSize="8" fontWeight="bold">Rth</text>

              <rect x="150" y="50" width="16" height="30" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" rx="2" />
              <text x="158" y="93" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">RL</text>

              <line x1="30" y1="51" x2="30" y2="43" stroke="#475569" strokeWidth="2" />
              <line x1="30" y1="43" x2="70" y2="43" stroke="#475569" strokeWidth="2" />
              <line x1="100" y1="43" x2="158" y2="43" stroke="#475569" strokeWidth="2" />
              <line x1="158" y1="43" x2="158" y2="50" stroke="#475569" strokeWidth="2" />
              <line x1="30" y1="79" x2="30" y2="95" stroke="#475569" strokeWidth="2" />
              <line x1="30" y1="95" x2="158" y2="95" stroke="#475569" strokeWidth="2" />
              <line x1="158" y1="95" x2="158" y2="80" stroke="#475569" strokeWidth="2" />
            </g>

            {/* Mathematical Summary Box */}
            <g transform="translate(240, 20)">
              <rect x="0" y="0" width="200" height="110" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="100" y="22" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Max Power Equations</text>
              <line x1="15" y1="30" x2="185" y2="30" stroke="#334155" strokeWidth="1" />
              <text x="15" y="48" textAnchor="start" fill="#fbbf24" fontSize="10" fontWeight="bold">1. Condition: RL = Rth</text>
              <text x="15" y="68" textAnchor="start" fill="#34d399" fontSize="10" fontWeight="bold">2. Pmax = Vth² / (4 · Rth)</text>
              <text x="15" y="88" textAnchor="start" fill="#a855f7" fontSize="10" fontWeight="bold">3. Efficiency η = 50% at Pmax</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-emerald-300 mt-2 text-center font-bold">
            {caption || "Maximum Power Transfer Condition: Load Resistance RL = Internal Thevenin Resistance Rth"}
          </p>
        </div>
      );

    case 'circuit-reciprocity-concept':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 480 150" className="w-full max-w-lg h-auto">
            {/* Case A Box */}
            <g transform="translate(20, 20)">
              <rect x="0" y="0" width="200" height="100" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <text x="100" y="20" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Case A: Source at Port 1</text>

              <circle cx="25" cy="55" r="12" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="25" y="58" textAnchor="middle" fill="#38bdf8" fontSize="8" fontWeight="bold">Vs</text>

              <rect x="65" y="40" width="70" height="30" fill="#1e293b" stroke="#475569" strokeWidth="1.5" rx="3" />
              <text x="100" y="58" textAnchor="middle" fill="#cbd5e1" fontSize="9">Passive Net</text>

              <circle cx="175" cy="55" r="12" fill="#1e293b" stroke="#34d399" strokeWidth="1.5" />
              <text x="175" y="58" textAnchor="middle" fill="#34d399" fontSize="8" fontWeight="bold">A2</text>

              <text x="100" y="90" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">Response: I2A</text>
            </g>

            {/* Arrow Interchange */}
            <g transform="translate(228, 60)">
              <path d="M 0,-10 L 24,-10 L 24,-15 L 32,-5 L 24,5 L 24,0 L 0,0 Z" fill="#ec4899" />
              <path d="M 32,10 L 8,10 L 8,5 L 0,15 L 8,25 L 8,20 L 32,20 Z" fill="#ec4899" />
            </g>

            {/* Case B Box */}
            <g transform="translate(260, 20)">
              <rect x="0" y="0" width="200" height="100" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
              <text x="100" y="20" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Case B: Source at Port 2</text>

              <circle cx="25" cy="55" r="12" fill="#1e293b" stroke="#34d399" strokeWidth="1.5" />
              <text x="25" y="58" textAnchor="middle" fill="#34d399" fontSize="8" fontWeight="bold">A1</text>

              <rect x="65" y="40" width="70" height="30" fill="#1e293b" stroke="#475569" strokeWidth="1.5" rx="3" />
              <text x="100" y="58" textAnchor="middle" fill="#cbd5e1" fontSize="9">Passive Net</text>

              <circle cx="175" cy="55" r="12" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="175" y="58" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">Vs</text>

              <text x="100" y="90" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">Response: I1B</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-pink-300 mt-2 text-center font-bold">
            {caption || "Reciprocity Theorem Principle: I2A / Vs = I1B / Vs in Linear Bilateral Passive Networks"}
          </p>
        </div>
      );

    case 'circuit-ac-fundamentals':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 460 170" className="w-full max-w-lg h-auto">
            {/* Waveform Canvas */}
            <line x1="40" y1="85" x2="420" y2="85" stroke="#475569" strokeWidth="1.5" />
            <line x1="60" y1="20" x2="60" y2="150" stroke="#475569" strokeWidth="1.5" />
            <text x="60" y="16" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="bold">+v(t)</text>
            <text x="425" y="89" fill="#94a3b8" fontSize="9" fontWeight="bold">Time (t) / θ</text>

            {/* Sine Wave 1 Full Cycle */}
            <path
              d="M 60 85 Q 125 15, 190 85 T 320 85"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="3"
            />
            {/* Second partial cycle */}
            <path
              d="M 320 85 Q 355 45, 390 85"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeDasharray="3 3"
            />

            {/* Peak Annotations */}
            <line x1="125" y1="85" x2="125" y2="20" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2" />
            <circle cx="125" cy="20" r="3.5" fill="#f59e0b" />
            <text x="132" y="32" fill="#f59e0b" fontSize="9" fontWeight="bold">Peak (+Vm)</text>

            <line x1="255" y1="85" x2="255" y2="150" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2" />
            <circle cx="255" cy="150" r="3.5" fill="#f59e0b" />
            <text x="262" y="148" fill="#f59e0b" fontSize="9" fontWeight="bold">Peak (-Vm)</text>

            {/* Time Period Dimension */}
            <line x1="60" y1="160" x2="320" y2="160" stroke="#34d399" strokeWidth="1.5" />
            <line x1="60" y1="155" x2="60" y2="165" stroke="#34d399" strokeWidth="1.5" />
            <line x1="320" y1="155" x2="320" y2="165" stroke="#34d399" strokeWidth="1.5" />
            <text x="190" y="157" textAnchor="middle" fill="#34d399" fontSize="9.5" fontWeight="bold">1 Full Cycle (Time Period T = 1/f)</text>

            {/* Half Cycle Labels */}
            <text x="125" y="102" textAnchor="middle" fill="#38bdf8" fontSize="8" fontWeight="bold">+ Half Cycle</text>
            <text x="255" y="75" textAnchor="middle" fill="#38bdf8" fontSize="8" fontWeight="bold">- Half Cycle</text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Sinusoidal AC Waveform Anatomy: Amplitude Vm, Period T, and Frequency f = 1/T"}
          </p>
        </div>
      );

    case 'circuit-sinusoidal-phasor':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 460 170" className="w-full max-w-lg h-auto">
            {/* Rotating Generator Circle */}
            <g transform="translate(100, 85)">
              <circle cx="0" cy="0" r="55" fill="none" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="-65" y1="0" x2="65" y2="0" stroke="#475569" strokeWidth="1" />
              <line x1="0" y1="-65" x2="0" y2="65" stroke="#475569" strokeWidth="1" />
              
              {/* Rotating vector */}
              <line x1="0" y1="0" x2="40" y2="-38" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#arrow)" />
              <circle cx="40" cy="-38" r="3" fill="#38bdf8" />
              <text x="20" y="-22" fill="#38bdf8" fontSize="9" fontWeight="bold">Vm</text>
              <path d="M 20 0 A 20 20 0 0 0 14 -14" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="24" y="-8" fill="#f59e0b" fontSize="8.5" fontWeight="bold">ωt</text>
              
              {/* Projection Line */}
              <line x1="40" y1="-38" x2="110" y2="-38" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2" />
            </g>

            {/* Generated Waveform */}
            <g transform="translate(210, 85)">
              <line x1="0" y1="0" x2="230" y2="0" stroke="#475569" strokeWidth="1" />
              <line x1="0" y1="-65" x2="0" y2="65" stroke="#475569" strokeWidth="1" />
              
              {/* Sine Wave */}
              <path
                d="M 0 0 Q 40 -60, 80 0 T 160 0 T 220 0"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2.5"
              />
              {/* Projected point */}
              <circle cx="28" cy="-38" r="4" fill="#f59e0b" />
              <text x="36" y="-42" fill="#f59e0b" fontSize="9" fontWeight="bold">v(t) = Vm·sin(ωt)</text>
              
              <text x="80" y="16" textAnchor="middle" fill="#94a3b8" fontSize="8">π (180°)</text>
              <text x="160" y="16" textAnchor="middle" fill="#94a3b8" fontSize="8">2π (360°)</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Sinusoidal Generation from Phasor Projection: Instantaneous Value v(t) = Vm · sin(ωt)"}
          </p>
        </div>
      );

    case 'circuit-rms-average':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 460 170" className="w-full max-w-lg h-auto">
            {/* Waveform Axis */}
            <line x1="30" y1="100" x2="260" y2="100" stroke="#475569" strokeWidth="1.5" />
            <line x1="50" y1="15" x2="50" y2="145" stroke="#475569" strokeWidth="1.5" />

            {/* Positive half wave */}
            <path
              d="M 50 100 Q 130 15, 210 100"
              fill="rgba(56, 189, 248, 0.15)"
              stroke="#38bdf8"
              strokeWidth="2.5"
            />

            {/* Peak Line */}
            <line x1="50" y1="25" x2="210" y2="25" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="215" y="29" fill="#f59e0b" fontSize="9" fontWeight="bold">Peak (1.000 Vm)</text>

            {/* RMS Line */}
            <line x1="50" y1="47" x2="210" y2="47" stroke="#34d399" strokeWidth="2" />
            <text x="215" y="51" fill="#34d399" fontSize="9" fontWeight="bold">RMS (0.707 Vm)</text>

            {/* Average Line */}
            <line x1="50" y1="52" x2="210" y2="52" stroke="#c084fc" strokeWidth="1.5" strokeDasharray="2 2" />
            <text x="215" y="67" fill="#c084fc" fontSize="9" fontWeight="bold">Avg (0.637 Vm)</text>

            {/* Summary Box */}
            <g transform="translate(305, 20)">
              <rect x="0" y="0" width="145" height="125" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="72" y="20" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Standard Sine Ratios</text>
              <line x1="10" y1="28" x2="135" y2="28" stroke="#334155" strokeWidth="1" />
              
              <text x="12" y="46" fill="#34d399" fontSize="9" fontWeight="bold">Vrms = Vm / √2 ≈ 0.707 Vm</text>
              <text x="12" y="66" fill="#c084fc" fontSize="9" fontWeight="bold">Vavg = 2Vm / π ≈ 0.637 Vm</text>
              <text x="12" y="86" fill="#fbbf24" fontSize="9" fontWeight="bold">Form Factor Kf = 1.11</text>
              <text x="12" y="106" fill="#f43f5e" fontSize="9" fontWeight="bold">Peak Factor Kp = 1.414</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Sine Wave Values: Peak (Vm), Effective Heating RMS (0.707 Vm), and Half-Cycle Average (0.637 Vm)"}
          </p>
        </div>
      );

    case 'circuit-phase-difference':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 460 170" className="w-full max-w-lg h-auto">
            {/* Phasor Diagram */}
            <g transform="translate(110, 85)">
              <circle cx="0" cy="0" r="60" fill="none" stroke="#1e293b" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="-75" y1="0" x2="75" y2="0" stroke="#334155" strokeWidth="1.5" />
              <line x1="0" y1="75" x2="0" y2="-75" stroke="#334155" strokeWidth="1.5" />
              
              {/* Reference Vector VB at 0 deg */}
              <line x1="0" y1="0" x2="55" y2="0" stroke="#fbbf24" strokeWidth="3" markerEnd="url(#arrow)" />
              <text x="60" y="4" fill="#fbbf24" fontSize="10" fontWeight="bold" fontFamily="monospace">VB (Ref)</text>

              {/* Leading Vector VA at +45 deg */}
              <line x1="0" y1="0" x2="42" y2="-42" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#arrow)" />
              <text x="45" y="-46" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="monospace">VA (Leads by φ)</text>

              {/* Arc for phase angle */}
              <path d="M 25 0 A 25 25 0 0 0 17.6 -17.6" fill="none" stroke="#c084fc" strokeWidth="2" />
              <text x="26" y="-12" fill="#c084fc" fontSize="9" fontWeight="bold" fontFamily="monospace">φ</text>
            </g>

            {/* Waveform Relationship */}
            <g transform="translate(240, 20)">
              <rect x="0" y="0" width="200" height="130" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="100" y="22" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Phase & Time Shifts</text>
              <line x1="15" y1="30" x2="185" y2="30" stroke="#334155" strokeWidth="1" />
              
              <text x="15" y="48" fill="#38bdf8" fontSize="9.5" fontWeight="bold" fontFamily="monospace">VA(t) = VmA · sin(ωt + φ)</text>
              <text x="15" y="68" fill="#fbbf24" fontSize="9.5" fontWeight="bold" fontFamily="monospace">VB(t) = VmB · sin(ωt)</text>
              
              <line x1="15" y1="80" x2="185" y2="80" stroke="#334155" strokeWidth="1" />
              <text x="15" y="98" fill="#34d399" fontSize="9.5" fontWeight="bold" fontFamily="monospace">Δt = (φ / 360°) × T</text>
              <text x="15" y="116" fill="#c084fc" fontSize="9.5" fontWeight="bold" fontFamily="monospace">φ = ω · Δt = 2πf · Δt</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Phasor Rotation & Phase Difference Relationship: VA leads VB by phase angle φ (time advance Δt)"}
          </p>
        </div>
      );

    case 'circuit-complex-plane':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 460 170" className="w-full max-w-lg h-auto">
            {/* Argand Diagram */}
            <g transform="translate(110, 85)">
              <line x1="-80" y1="0" x2="80" y2="0" stroke="#475569" strokeWidth="2" />
              <line x1="0" y1="75" x2="0" y2="-75" stroke="#475569" strokeWidth="2" />
              <text x="82" y="4" fill="#94a3b8" fontSize="9" fontFamily="monospace" fontWeight="bold">+Real (R)</text>
              <text x="0" y="-78" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace" fontWeight="bold">+j (Reactance)</text>

              {/* Vector Z = a + jb */}
              <line x1="0" y1="0" x2="50" y2="0" stroke="#fbbf24" strokeWidth="2" strokeDasharray="2 2" />
              <line x1="50" y1="0" x2="50" y2="-45" stroke="#38bdf8" strokeWidth="2" strokeDasharray="2 2" />
              <line x1="0" y1="0" x2="50" y2="-45" stroke="#34d399" strokeWidth="3" markerEnd="url(#arrow)" />
              <circle cx="50" cy="-45" r="4" fill="#34d399" />

              <text x="25" y="14" fill="#fbbf24" fontSize="9" fontWeight="bold" fontFamily="monospace">a = |Z|cosθ</text>
              <text x="56" y="-22" fill="#38bdf8" fontSize="9" fontWeight="bold" fontFamily="monospace">b = |Z|sinθ</text>
              <text x="48" y="-52" fill="#34d399" fontSize="10" fontWeight="bold" fontFamily="monospace">Z = |Z| ∠ θ</text>
            </g>

            {/* Mathematical Transformations Box */}
            <g transform="translate(240, 20)">
              <rect x="0" y="0" width="200" height="130" rx="6" fill="#0f172a" stroke="#34d399" strokeWidth="1.5" />
              <text x="100" y="22" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">Impedance Algebra</text>
              <line x1="15" y1="30" x2="185" y2="30" stroke="#334155" strokeWidth="1" />
              
              <text x="15" y="48" fill="#38bdf8" fontSize="9.5" fontWeight="bold" fontFamily="monospace">Rect: Z = R + jX</text>
              <text x="15" y="68" fill="#34d399" fontSize="9.5" fontWeight="bold" fontFamily="monospace">Polar: |Z| = √(R² + X²)</text>
              <text x="15" y="88" fill="#c084fc" fontSize="9.5" fontWeight="bold" fontFamily="monospace">Angle: θ = tan⁻¹(X / R)</text>
              
              <line x1="15" y1="98" x2="185" y2="98" stroke="#334155" strokeWidth="1" />
              <text x="15" y="116" fill="#fbbf24" fontSize="9.5" fontWeight="bold" fontFamily="monospace">Conjugate: Z* = R - jX</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-emerald-300 mt-2 text-center font-bold">
            {caption || "Complex Number Representation: Rectangular (R + jX) and Polar (|Z| ∠ θ) in AC Engineering"}
          </p>
        </div>
      );

    case 'circuit-pure-resistance':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 460 170" className="w-full max-w-lg h-auto">
            {/* Circuit Schematic */}
            <g transform="translate(20, 20)">
              <rect x="0" y="0" width="180" height="130" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <text x="90" y="20" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Pure Resistive AC Circuit</text>

              {/* AC Source */}
              <circle cx="35" cy="75" r="16" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
              <path d="M 27 75 Q 31 68 35 75 Q 39 82 43 75" fill="none" stroke="#38bdf8" strokeWidth="1.8" />
              <text x="35" y="105" textAnchor="middle" fill="#38bdf8" fontSize="8" fontWeight="bold" fontFamily="monospace">v(t)=Vm sin ωt</text>

              {/* Resistor */}
              <rect x="130" y="50" width="18" height="50" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" rx="2" />
              <text x="139" y="112" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold" fontFamily="monospace">R (Pure)</text>

              {/* Wiring */}
              <line x1="35" y1="59" x2="35" y2="40" stroke="#475569" strokeWidth="2" />
              <line x1="35" y1="40" x2="139" y2="40" stroke="#475569" strokeWidth="2" />
              <line x1="139" y1="40" x2="139" y2="50" stroke="#475569" strokeWidth="2" />

              <line x1="35" y1="91" x2="35" y2="120" stroke="#475569" strokeWidth="2" />
              <line x1="35" y1="120" x2="139" y2="120" stroke="#475569" strokeWidth="2" />
              <line x1="139" y1="120" x2="139" y2="100" stroke="#475569" strokeWidth="2" />

              {/* Current Arrow */}
              <line x1="75" y1="40" x2="95" y2="40" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="85" y="34" textAnchor="middle" fill="#fbbf24" fontSize="8" fontWeight="bold" fontFamily="monospace">i(t)</text>
            </g>

            {/* Waveform and Phase Characteristics */}
            <g transform="translate(230, 20)">
              <rect x="0" y="0" width="210" height="130" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="105" y="22" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Key Characteristics</text>
              <line x1="15" y1="30" x2="195" y2="30" stroke="#334155" strokeWidth="1" />
              
              <text x="15" y="48" fill="#38bdf8" fontSize="9.5" fontWeight="bold" fontFamily="monospace">1. Phase Angle: φ = 0°</text>
              <text x="15" y="68" fill="#34d399" fontSize="9.5" fontWeight="bold" fontFamily="monospace">2. Power Factor: cos(0°) = 1.0</text>
              <text x="15" y="88" fill="#fbbf24" fontSize="9.5" fontWeight="bold" fontFamily="monospace">3. Current: i(t) = (Vm/R)·sin(ωt)</text>
              <text x="15" y="108" fill="#ec4899" fontSize="9.5" fontWeight="bold" fontFamily="monospace">4. Avg Power: P = Vrms · Irms</text>
              <text x="15" y="124" fill="#c084fc" fontSize="8.5" fontWeight="bold" fontFamily="monospace">5. Instantaneous Power p(t) ≥ 0</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-amber-300 mt-2 text-center font-bold">
            {caption || "Pure Resistive AC Circuit: Current is strictly in-phase with applied voltage (φ = 0°, Unity Power Factor)"}
          </p>
        </div>
      );

    case 'circuit-pure-inductor':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 460 170" className="w-full max-w-lg h-auto">
            {/* Circuit Schematic */}
            <g transform="translate(20, 20)">
              <rect x="0" y="0" width="180" height="130" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <text x="90" y="20" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Pure Inductive AC Circuit</text>

              {/* AC Source */}
              <circle cx="35" cy="75" r="16" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
              <path d="M 27 75 Q 31 68 35 75 Q 39 82 43 75" fill="none" stroke="#38bdf8" strokeWidth="1.8" />
              <text x="35" y="105" textAnchor="middle" fill="#38bdf8" fontSize="8" fontWeight="bold" fontFamily="monospace">v(t)=Vm sin ωt</text>

              {/* Inductor Coil */}
              <path d="M 139 50 C 148 48 148 58 139 58 C 148 56 148 66 139 66 C 148 64 148 74 139 74 C 148 72 148 82 139 82 C 148 80 148 90 139 90" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
              <text x="139" y="112" textAnchor="middle" fill="#34d399" fontSize="8" fontWeight="bold" fontFamily="monospace">L (Ideal Inductor)</text>

              {/* Wiring */}
              <line x1="35" y1="59" x2="35" y2="40" stroke="#475569" strokeWidth="2" />
              <line x1="35" y1="40" x2="139" y2="40" stroke="#475569" strokeWidth="2" />
              <line x1="139" y1="40" x2="139" y2="50" stroke="#475569" strokeWidth="2" />

              <line x1="35" y1="91" x2="35" y2="120" stroke="#475569" strokeWidth="2" />
              <line x1="35" y1="120" x2="139" y2="120" stroke="#475569" strokeWidth="2" />
              <line x1="139" y1="120" x2="139" y2="90" stroke="#475569" strokeWidth="2" />

              {/* Current Arrow */}
              <line x1="75" y1="40" x2="95" y2="40" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="85" y="34" textAnchor="middle" fill="#fbbf24" fontSize="8" fontWeight="bold" fontFamily="monospace">i(t) [Lag 90°]</text>
            </g>

            {/* Inductive Characteristics Box */}
            <g transform="translate(230, 20)">
              <rect x="0" y="0" width="210" height="130" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
              <text x="105" y="22" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">Key Inductive Equations</text>
              <line x1="15" y1="30" x2="195" y2="30" stroke="#334155" strokeWidth="1" />
              
              <text x="15" y="48" fill="#38bdf8" fontSize="9.5" fontWeight="bold" fontFamily="monospace">1. Reactance: XL = 2πfL = ωL</text>
              <text x="15" y="68" fill="#34d399" fontSize="9.5" fontWeight="bold" fontFamily="monospace">2. Impedance: ZL = +jXL = XL∠+90°</text>
              <text x="15" y="88" fill="#fbbf24" fontSize="9.5" fontWeight="bold" fontFamily="monospace">3. Current: i(t) = Im·sin(ωt - 90°)</text>
              <text x="15" y="108" fill="#ec4899" fontSize="9.5" fontWeight="bold" fontFamily="monospace">4. Power Factor: cos(-90°) = 0 Lag</text>
              <text x="15" y="124" fill="#c084fc" fontSize="8.5" fontWeight="bold" fontFamily="monospace">5. Active P = 0 W | Stored W = ½LI²</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-emerald-300 mt-2 text-center font-bold">
            {caption || "Pure Inductive AC Circuit: Current strictly lags applied voltage by 90° (φ = -90°, Zero Power Factor Lagging)"}
          </p>
        </div>
      );

    case 'circuit-pure-capacitor':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 460 170" className="w-full max-w-lg h-auto">
            {/* Circuit Schematic */}
            <g transform="translate(20, 20)">
              <rect x="0" y="0" width="180" height="130" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <text x="90" y="20" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Pure Capacitive AC Circuit</text>

              {/* AC Source */}
              <circle cx="35" cy="75" r="16" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
              <path d="M 27 75 Q 31 68 35 75 Q 39 82 43 75" fill="none" stroke="#38bdf8" strokeWidth="1.8" />
              <text x="35" y="105" textAnchor="middle" fill="#38bdf8" fontSize="8" fontWeight="bold" fontFamily="monospace">v(t)=Vm sin ωt</text>

              {/* Capacitor Parallel Plates */}
              <line x1="125" y1="63" x2="153" y2="63" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
              <line x1="125" y1="77" x2="153" y2="77" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
              <text x="139" y="112" textAnchor="middle" fill="#38bdf8" fontSize="8" fontWeight="bold" fontFamily="monospace">C (Ideal Capacitor)</text>

              {/* Wiring */}
              <line x1="35" y1="59" x2="35" y2="40" stroke="#475569" strokeWidth="2" />
              <line x1="35" y1="40" x2="139" y2="40" stroke="#475569" strokeWidth="2" />
              <line x1="139" y1="40" x2="139" y2="63" stroke="#475569" strokeWidth="2" />

              <line x1="35" y1="91" x2="35" y2="120" stroke="#475569" strokeWidth="2" />
              <line x1="35" y1="120" x2="139" y2="120" stroke="#475569" strokeWidth="2" />
              <line x1="139" y1="120" x2="139" y2="77" stroke="#475569" strokeWidth="2" />

              {/* Current Arrow */}
              <line x1="75" y1="40" x2="95" y2="40" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="85" y="34" textAnchor="middle" fill="#fbbf24" fontSize="8" fontWeight="bold" fontFamily="monospace">i(t) [Lead 90°]</text>
            </g>

            {/* Capacitive Characteristics Box */}
            <g transform="translate(230, 20)">
              <rect x="0" y="0" width="210" height="130" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="105" y="22" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Key Capacitive Equations</text>
              <line x1="15" y1="30" x2="195" y2="30" stroke="#334155" strokeWidth="1" />
              
              <text x="15" y="48" fill="#38bdf8" fontSize="9.5" fontWeight="bold" fontFamily="monospace">1. Reactance: XC = 1/(2πfC) = 1/ωC</text>
              <text x="15" y="68" fill="#34d399" fontSize="9.5" fontWeight="bold" fontFamily="monospace">2. Impedance: ZC = -jXC = XC∠-90°</text>
              <text x="15" y="88" fill="#fbbf24" fontSize="9.5" fontWeight="bold" fontFamily="monospace">3. Current: i(t) = Im·sin(ωt + 90°)</text>
              <text x="15" y="108" fill="#ec4899" fontSize="9.5" fontWeight="bold" fontFamily="monospace">4. Power Factor: cos(+90°) = 0 Lead</text>
              <text x="15" y="124" fill="#c084fc" fontSize="8.5" fontWeight="bold" fontFamily="monospace">5. Active P = 0 W | Stored W = ½CV²</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Pure Capacitive AC Circuit: Current strictly leads applied voltage by 90° (φ = +90°, Zero Power Factor Leading)"}
          </p>
        </div>
      );

    case 'circuit-reactance-comparison':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 460 170" className="w-full max-w-lg h-auto">
            {/* Dual Reactance Curves Graphic */}
            <g transform="translate(30, 20)">
              <rect x="0" y="0" width="180" height="130" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
              <line x1="25" y1="110" x2="165" y2="110" stroke="#475569" strokeWidth="1.5" />
              <line x1="25" y1="15" x2="25" y2="110" stroke="#475569" strokeWidth="1.5" />
              
              <text x="165" y="122" textAnchor="end" fill="#94a3b8" fontSize="8" fontFamily="monospace">f (Hz) →</text>
              <text x="22" y="14" textAnchor="end" fill="#94a3b8" fontSize="8" fontFamily="monospace">X (Ω) ↑</text>

              {/* XL Line (Green) */}
              <line x1="25" y1="110" x2="155" y2="25" stroke="#10b981" strokeWidth="2.5" />
              <text x="135" y="22" fill="#10b981" fontSize="8.5" fontWeight="bold" fontFamily="monospace">XL ∝ f</text>

              {/* XC Curve (Blue) */}
              <path d="M 32 20 Q 55 75 155 105" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
              <text x="130" y="98" fill="#38bdf8" fontSize="8.5" fontWeight="bold" fontFamily="monospace">XC ∝ 1/f</text>

              {/* Crossover Point */}
              <circle cx="85" cy="65" r="4" fill="#c084fc" />
              <text x="92" y="62" fill="#c084fc" fontSize="8" fontWeight="bold" fontFamily="monospace">f₀ (XL = XC)</text>
            </g>

            {/* Comparison Summary Box */}
            <g transform="translate(230, 20)">
              <rect x="0" y="0" width="210" height="130" rx="6" fill="#0f172a" stroke="#c084fc" strokeWidth="1.5" />
              <text x="105" y="22" textAnchor="middle" fill="#c084fc" fontSize="10" fontWeight="bold">Reactance Opposites</text>
              <line x1="15" y1="30" x2="195" y2="30" stroke="#334155" strokeWidth="1" />
              
              <text x="15" y="48" fill="#10b981" fontSize="9.5" fontWeight="bold" fontFamily="monospace">Inductive: ZL = +j 2πfL</text>
              <text x="15" y="68" fill="#38bdf8" fontSize="9.5" fontWeight="bold" fontFamily="monospace">Capacitive: ZC = -j / (2πfC)</text>
              <text x="15" y="88" fill="#fbbf24" fontSize="9.5" fontWeight="bold" fontFamily="monospace">f &lt; f₀: Capacitive Dominant</text>
              <text x="15" y="108" fill="#34d399" fontSize="9.5" fontWeight="bold" fontFamily="monospace">f &gt; f₀: Inductive Dominant</text>
              <text x="15" y="124" fill="#c084fc" fontSize="8.5" fontWeight="bold" fontFamily="monospace">f = f₀: Equal Reactance (Resonance)</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-purple-300 mt-2 text-center font-bold">
            {caption || "Reactance Comparison: Inductive Reactance (XL ∝ f) vs Capacitive Reactance (XC ∝ 1/f) and the Crossover Point f₀"}
          </p>
        </div>
      );

    case 'circuit-ac-power-triangle':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 460 200" className="w-full max-w-lg h-auto">
            {/* Power Triangle Graphic */}
            <g transform="translate(40, 20)">
              <polygon points="20,140 180,140 180,30" fill="rgba(14, 165, 233, 0.15)" stroke="none" />
              {/* Right angle symbol */}
              <path d="M 168 140 L 168 128 L 180 128" fill="none" stroke="#64748b" strokeWidth="1.5" />
              {/* Angle arc phi */}
              <path d="M 50 140 A 30 30 0 0 0 46 118" fill="none" stroke="#fbbf24" strokeWidth="2" />
              <text x="56" y="132" fill="#fbbf24" fontSize="10" fontWeight="bold" fontFamily="monospace">φ</text>

              {/* Horizontal Base: Active Power P */}
              <line x1="20" y1="140" x2="180" y2="140" stroke="#10b981" strokeWidth="3" />
              <text x="100" y="156" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold" fontFamily="monospace">P = V·I·cos φ (W / kW)</text>

              {/* Vertical Side: Reactive Power Q */}
              <line x1="180" y1="140" x2="180" y2="30" stroke="#06b6d4" strokeWidth="3" />
              <text x="188" y="85" textAnchor="start" fill="#38bdf8" fontSize="11" fontWeight="bold" fontFamily="monospace">Q = V·I·sin φ (VAR)</text>

              {/* Hypotenuse: Apparent Power S */}
              <line x1="20" y1="140" x2="180" y2="30" stroke="#f59e0b" strokeWidth="3" strokeDasharray="5,2" />
              <text x="85" y="75" textAnchor="end" fill="#fbbf24" fontSize="11" fontWeight="bold" fontFamily="monospace">S = V·I (VA)</text>
            </g>

            {/* Summary Box */}
            <g transform="translate(260, 20)">
              <rect x="0" y="0" width="180" height="150" rx="6" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1.5" />
              <text x="90" y="20" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">AC Power Relationships</text>
              <line x1="10" y1="28" x2="170" y2="28" stroke="#334155" strokeWidth="1" />
              <text x="12" y="46" fill="#fbbf24" fontSize="9" fontWeight="bold" fontFamily="monospace">S² = P² + Q²</text>
              <text x="12" y="66" fill="#34d399" fontSize="9" fontWeight="bold" fontFamily="monospace">P = S · cos φ</text>
              <text x="12" y="86" fill="#38bdf8" fontSize="9" fontWeight="bold" fontFamily="monospace">Q = S · sin φ</text>
              <text x="12" y="106" fill="#c084fc" fontSize="9" fontWeight="bold" fontFamily="monospace">cos φ = P / S (PF)</text>
              <text x="12" y="126" fill="#f43f5e" fontSize="9" fontWeight="bold" fontFamily="monospace">tan φ = Q / P</text>
              <text x="12" y="142" fill="#94a3b8" fontSize="8" fontFamily="monospace">Complex: S = P + jQ</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "AC Power Triangle: Geometric representation of Active Power (P in Watts), Reactive Power (Q in VAR), Apparent Power (S in VA), and Power Factor (cos φ)"}
          </p>
        </div>
      );

    case 'circuit-power-factor-correction':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 460 200" className="w-full max-w-lg h-auto">
            {/* Shunt Capacitor PFC Diagram */}
            <g transform="translate(30, 20)">
              {/* Uncorrected Large Triangle (Rose) */}
              <polygon points="20,140 180,140 180,20" fill="rgba(244, 63, 94, 0.08)" stroke="none" />
              {/* Corrected Smaller Triangle (Cyan) */}
              <polygon points="20,140 180,140 180,80" fill="rgba(6, 182, 212, 0.18)" stroke="none" />

              {/* Base Line P */}
              <line x1="20" y1="140" x2="180" y2="140" stroke="#10b981" strokeWidth="3" />
              <text x="100" y="156" textAnchor="middle" fill="#34d399" fontSize="10.5" fontWeight="bold" fontFamily="monospace">P = Active Load Power (kW)</text>

              {/* S1 Hypotenuse */}
              <line x1="20" y1="140" x2="180" y2="20" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="4,2" />
              <text x="85" y="65" textAnchor="end" fill="#fb7185" fontSize="9.5" fontWeight="bold" fontFamily="monospace">S₁ (Poor PF)</text>

              {/* S2 Hypotenuse */}
              <line x1="20" y1="140" x2="180" y2="80" stroke="#06b6d4" strokeWidth="3" />
              <text x="105" y="105" textAnchor="end" fill="#38bdf8" fontSize="9.5" fontWeight="bold" fontFamily="monospace">S₂ (Corrected)</text>

              {/* Q2 Vertical Line */}
              <line x1="180" y1="140" x2="180" y2="80" stroke="#06b6d4" strokeWidth="3" />
              <text x="186" y="115" fill="#38bdf8" fontSize="9" fontWeight="bold" fontFamily="monospace">Q₂</text>

              {/* Qc Compensation Vector */}
              <line x1="192" y1="20" x2="192" y2="80" stroke="#10b981" strokeWidth="3" />
              <polygon points="192,85 188,77 196,77" fill="#10b981" />
              <text x="200" y="55" fill="#34d399" fontSize="9.5" fontWeight="bold" fontFamily="monospace">Qc = Q₁ - Q₂</text>
            </g>

            {/* Formulas Box */}
            <g transform="translate(265, 20)">
              <rect x="0" y="0" width="180" height="150" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
              <text x="90" y="20" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">Capacitor Bank Sizing</text>
              <line x1="10" y1="28" x2="170" y2="28" stroke="#334155" strokeWidth="1" />
              <text x="12" y="46" fill="#fbbf24" fontSize="8.5" fontWeight="bold" fontFamily="monospace">Q₁ = P · tan φ₁</text>
              <text x="12" y="66" fill="#38bdf8" fontSize="8.5" fontWeight="bold" fontFamily="monospace">Q₂ = P · tan φ₂</text>
              <text x="12" y="86" fill="#34d399" fontSize="8.5" fontWeight="bold" fontFamily="monospace">Qc = P(tan φ₁ - tan φ₂)</text>
              <text x="12" y="106" fill="#c084fc" fontSize="8.5" fontWeight="bold" fontFamily="monospace">C = Qc / (2π f V²)</text>
              <text x="12" y="126" fill="#f43f5e" fontSize="8.5" fontWeight="bold" fontFamily="monospace">I₂ = (cos φ₁ / cos φ₂) · I₁</text>
              <text x="12" y="142" fill="#94a3b8" fontSize="8" fontFamily="monospace">S₁ &gt; S₂ | I₁ &gt; I₂ | P is constant</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-emerald-300 mt-2 text-center font-bold">
            {caption || "Power Factor Correction: Installing shunt capacitor bank Qc reduces reactive demand from Q₁ to Q₂ and relieves line current from I₁ to I₂"}
          </p>
        </div>
      );

    case 'circuit-three-phase-intro':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 460 200" className="w-full max-w-lg h-auto">
            {/* 3-Phase Rotor Phasor and Star/Delta Comparison */}
            <g transform="translate(30, 20)">
              {/* Phasor Circle */}
              <circle cx="80" cy="75" r="55" fill="#0f172a" stroke="#334155" strokeWidth="1" strokeDasharray="3,3" />
              <circle cx="80" cy="75" r="3" fill="#94a3b8" />

              {/* Phase A (0 deg - Red) */}
              <line x1="80" y1="75" x2="135" y2="75" stroke="#f43f5e" strokeWidth="2.5" />
              <polygon points="138,75 131,71 131,79" fill="#f43f5e" />
              <text x="142" y="78" fill="#f43f5e" fontSize="9.5" fontWeight="bold" fontFamily="monospace">V_A (0°)</text>

              {/* Phase B (-120 deg - Yellow) */}
              <line x1="80" y1="75" x2="52.5" y2="122.6" stroke="#facc15" strokeWidth="2.5" />
              <polygon points="50,126 50,118 57,122" fill="#facc15" />
              <text x="36" y="140" fill="#facc15" fontSize="9.5" fontWeight="bold" fontFamily="monospace">V_B (-120°)</text>

              {/* Phase C (+120 deg - Blue) */}
              <line x1="80" y1="75" x2="52.5" y2="27.4" stroke="#3b82f6" strokeWidth="2.5" />
              <polygon points="50,24 57,28 50,32" fill="#3b82f6" />
              <text x="34" y="20" fill="#3b82f6" fontSize="9.5" fontWeight="bold" fontFamily="monospace">V_C (+120°)</text>
            </g>

            {/* Star vs Delta Summary Box */}
            <g transform="translate(230, 20)">
              <rect x="0" y="0" width="210" height="150" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="105" y="20" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">Star (Y) vs. Delta (Δ) Systems</text>
              <line x1="10" y1="28" x2="200" y2="28" stroke="#334155" strokeWidth="1" />
              
              <text x="12" y="46" fill="#38bdf8" fontSize="9" fontWeight="bold" fontFamily="monospace">Star (Y): V_L = √3 · V_ph | I_L = I_ph</text>
              <text x="12" y="64" fill="#94a3b8" fontSize="8" fontFamily="monospace">  Neutral wire available (4-wire)</text>
              
              <text x="12" y="86" fill="#10b981" fontSize="9" fontWeight="bold" fontFamily="monospace">Delta (Δ): V_L = V_ph | I_L = √3 · I_ph</text>
              <text x="12" y="104" fill="#94a3b8" fontSize="8" fontFamily="monospace">  No neutral wire (3-wire industrial)</text>
              
              <line x1="10" y1="112" x2="200" y2="112" stroke="#1e293b" strokeWidth="1" />
              <text x="12" y="128" fill="#fbbf24" fontSize="9" fontWeight="bold" fontFamily="monospace">Total P = √3 · V_L · I_L · cos φ</text>
              <text x="12" y="142" fill="#c084fc" fontSize="9" fontWeight="bold" fontFamily="monospace">Total S = √3 · V_L · I_L (VA)</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-amber-300 mt-2 text-center font-bold">
            {caption || "Three-Phase AC Generation: Symmetrical 120° spatial and electrical displacement delivering smooth constant power and rotating magnetic fields"}
          </p>
        </div>
      );

    case 'circuit-star-delta-connections':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 220" className="w-full max-w-2xl h-60">
            {/* Left Box: Star (Wye) Configuration */}
            <g transform="translate(10, 10)">
              <rect x="0" y="0" width="250" height="200" rx="8" fill="#0b1120" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="125" y="20" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">Star (Y) Connection [4-Wire]</text>
              <line x1="10" y1="28" x2="240" y2="28" stroke="#1e293b" strokeWidth="1" />
              
              {/* Star branches */}
              <circle cx="125" cy="110" r="5" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
              <text x="135" y="113" fill="#ffffff" fontSize="9" fontWeight="bold">N</text>
              
              {/* Branch R */}
              <line x1="70" y1="50" x2="125" y2="110" stroke="#ef4444" strokeWidth="2.5" />
              <circle cx="70" cy="50" r="5" fill="#ef4444" />
              <text x="55" y="53" fill="#f87171" fontSize="10" fontWeight="bold">R</text>

              {/* Branch Y */}
              <line x1="70" y1="170" x2="125" y2="110" stroke="#eab308" strokeWidth="2.5" />
              <circle cx="70" cy="170" r="5" fill="#eab308" />
              <text x="55" y="173" fill="#facc15" fontSize="10" fontWeight="bold">Y</text>

              {/* Branch B */}
              <line x1="180" y1="110" x2="125" y2="110" stroke="#3b82f6" strokeWidth="2.5" />
              <circle cx="180" cy="110" r="5" fill="#3b82f6" />
              <text x="190" y="113" fill="#60a5fa" fontSize="10" fontWeight="bold">B</text>

              {/* Formulas */}
              <rect x="15" y="145" width="220" height="45" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1" />
              <text x="25" y="162" fill="#38bdf8" fontSize="9" fontWeight="bold" fontFamily="monospace">V_L = √3 · V_ph &nbsp;(V_ph = V_L / 1.732)</text>
              <text x="25" y="178" fill="#a7f3d0" fontSize="9" fontWeight="bold" fontFamily="monospace">I_L = I_ph &nbsp;|&nbsp; Neutral I_N = 0 A</text>
            </g>

            {/* Right Box: Delta (Mesh) Configuration */}
            <g transform="translate(280, 10)">
              <rect x="0" y="0" width="250" height="200" rx="8" fill="#0b1120" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="125" y="20" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold">Delta (Δ) Connection [3-Wire]</text>
              <line x1="10" y1="28" x2="240" y2="28" stroke="#1e293b" strokeWidth="1" />

              {/* Delta triangle */}
              {/* Vertex R (125, 45), Vertex Y (185, 140), Vertex B (65, 140) */}
              <line x1="125" y1="45" x2="185" y2="140" stroke="#f59e0b" strokeWidth="2.5" />
              <line x1="185" y1="140" x2="65" y2="140" stroke="#10b981" strokeWidth="2.5" />
              <line x1="65" y1="140" x2="125" y2="45" stroke="#8b5cf6" strokeWidth="2.5" />

              <circle cx="125" cy="45" r="5" fill="#ef4444" />
              <text x="125" y="38" textAnchor="middle" fill="#f87171" fontSize="10" fontWeight="bold">R</text>

              <circle cx="185" cy="140" r="5" fill="#eab308" />
              <text x="195" y="145" fill="#facc15" fontSize="10" fontWeight="bold">Y</text>

              <circle cx="65" cy="140" r="5" fill="#3b82f6" />
              <text x="45" y="145" fill="#60a5fa" fontSize="10" fontWeight="bold">B</text>

              {/* Formulas */}
              <rect x="15" y="145" width="220" height="45" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1" />
              <text x="25" y="162" fill="#fbbf24" fontSize="9" fontWeight="bold" fontFamily="monospace">V_L = V_ph &nbsp;(100% Line Voltage)</text>
              <text x="25" y="178" fill="#38bdf8" fontSize="9" fontWeight="bold" fontFamily="monospace">I_L = √3 · I_ph &nbsp;(I_ph = I_L / 1.732)</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-amber-300 mt-2 text-center font-bold">
            {caption || "Three-Phase Star (Wye) vs. Delta (Mesh) Topology: Line vs. Phase Quantities & Voltage/Current Transformations"}
          </p>
        </div>
      );

    case 'circuit-ac-industrial-applications':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 220" className="w-full max-w-2xl h-60">
            {/* Grid background */}
            <rect width="540" height="220" fill="#090d16" rx="8" />

            {/* Industrial Plant Feeder Busbar */}
            <line x1="30" y1="30" x2="510" y2="30" stroke="#ef4444" strokeWidth="3" />
            <line x1="30" y1="42" x2="510" y2="42" stroke="#eab308" strokeWidth="3" />
            <line x1="30" y1="54" x2="510" y2="54" stroke="#3b82f6" strokeWidth="3" />
            <line x1="30" y1="66" x2="510" y2="66" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 2" />

            <text x="270" y="20" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold" fontFamily="monospace">
              400 V / 50 Hz Three-Phase 4-Wire Industrial Feeder Bus (R-Y-B-N)
            </text>

            {/* Branch 1: Induction Motor Load */}
            <g transform="translate(40, 80)">
              <rect x="0" y="0" width="130" height="120" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="65" y="18" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">1. Induction Motor</text>
              <line x1="10" y1="26" x2="120" y2="26" stroke="#1e293b" strokeWidth="1" />
              <circle cx="65" cy="55" r="20" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
              <text x="65" y="58" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">M</text>
              <text x="65" y="66" textAnchor="middle" fill="#94a3b8" fontSize="7">3-Phase</text>
              <text x="65" y="92" textAnchor="middle" fill="#fca5a5" fontSize="8" fontFamily="monospace">P = √3·V_L·I_L·cosφ</text>
              <text x="65" y="105" textAnchor="middle" fill="#94a3b8" fontSize="7">Lagging PF (0.75-0.88)</text>
              {/* Dropper lines from bus */}
              <line x1="65" y1="-14" x2="65" y2="0" stroke="#38bdf8" strokeWidth="1.5" />
            </g>

            {/* Branch 2: APFC Capacitor Bank */}
            <g transform="translate(205, 80)">
              <rect x="0" y="0" width="130" height="120" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
              <text x="65" y="18" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="bold">2. APFC Cap Bank</text>
              <line x1="10" y1="26" x2="120" y2="26" stroke="#1e293b" strokeWidth="1" />
              {/* Capacitor symbol */}
              <line x1="45" y1="50" x2="85" y2="50" stroke="#10b981" strokeWidth="2" />
              <line x1="45" y1="56" x2="85" y2="56" stroke="#10b981" strokeWidth="2" />
              <text x="65" y="75" textAnchor="middle" fill="#a7f3d0" fontSize="8" fontWeight="bold">Δ-Bank (kVAR)</text>
              <text x="65" y="92" textAnchor="middle" fill="#34d399" fontSize="8" fontFamily="monospace">Q_c = P(tanφ₁-tanφ₂)</text>
              <text x="65" y="105" textAnchor="middle" fill="#94a3b8" fontSize="7">Raises PF → 0.98</text>
              {/* Dropper lines */}
              <line x1="65" y1="-14" x2="65" y2="0" stroke="#10b981" strokeWidth="1.5" />
            </g>

            {/* Branch 3: Power Quality & Diagnostics */}
            <g transform="translate(370, 80)">
              <rect x="0" y="0" width="130" height="120" rx="6" fill="#0f172a" stroke="#c084fc" strokeWidth="1.5" />
              <text x="65" y="18" textAnchor="middle" fill="#c084fc" fontSize="9" fontWeight="bold">3. Diagnostics / LOTO</text>
              <line x1="10" y1="26" x2="120" y2="26" stroke="#1e293b" strokeWidth="1" />
              <rect x="40" y="38" width="50" height="28" rx="3" fill="#1e293b" stroke="#c084fc" strokeWidth="1.5" />
              <text x="65" y="55" textAnchor="middle" fill="#e9d5ff" fontSize="8" fontWeight="bold">True-RMS</text>
              <text x="65" y="92" textAnchor="middle" fill="#e9d5ff" fontSize="8" fontFamily="monospace">10-Step Workflow</text>
              <text x="65" y="105" textAnchor="middle" fill="#fbbf24" fontSize="7">NFPA 70E / OSHA</text>
              {/* Dropper lines */}
              <line x1="65" y1="-14" x2="65" y2="0" stroke="#c084fc" strokeWidth="1.5" />
            </g>
          </svg>
          <p className="text-xs font-mono text-amber-300 mt-2 text-center font-bold">
            {caption || "Complete Industrial AC Distribution System: Motor Loads, APFC Power Factor Correction, and Diagnostic Monitoring"}
          </p>
        </div>
      );

    case 'machine-energy-conversion':
      return (
        <div id="schematic-machine-energy-conversion" className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 600 200" className="w-full max-w-xl h-48">
            <defs>
              <linearGradient id="elecBoxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#0369a1" />
              </linearGradient>
              <linearGradient id="fieldBoxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#6d28d9" />
              </linearGradient>
              <linearGradient id="mechBoxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#059669" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
              <marker id="arrowHeadSchem" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#38bdf8" />
              </marker>
              <marker id="arrowHeadLoss" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#ef4444" />
              </marker>
            </defs>

            {/* Electrical Stage */}
            <g transform="translate(30, 40)">
              <rect x="0" y="0" width="130" height="90" rx="8" fill="url(#elecBoxGrad)" stroke="#38bdf8" strokeWidth="2" />
              <text x="65" y="32" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Electrical System</text>
              <text x="65" y="52" textAnchor="middle" fill="#bae6fd" fontSize="10">V, I, cos(φ)</text>
              <text x="65" y="74" textAnchor="middle" fill="#e0f2fe" fontSize="9" fontFamily="monospace">P_elec = √3·V·I·cosφ</text>
            </g>

            {/* Coupling Magnetic Field */}
            <g transform="translate(235, 30)">
              <rect x="0" y="0" width="130" height="110" rx="10" fill="url(#fieldBoxGrad)" stroke="#c084fc" strokeWidth="2" />
              <text x="65" y="30" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">Magnetic Field</text>
              <text x="65" y="48" textAnchor="middle" fill="#e9d5ff" fontSize="10">Coupling Medium</text>
              <circle cx="65" cy="72" r="16" fill="#3b0764" stroke="#e879f9" strokeWidth="1.5" />
              <text x="65" y="77" textAnchor="middle" fill="#facc15" fontSize="12" fontWeight="bold">B · Φ</text>
              <text x="65" y="100" textAnchor="middle" fill="#fbcfe8" fontSize="8">Energy Storage</text>
            </g>

            {/* Mechanical Stage */}
            <g transform="translate(440, 40)">
              <rect x="0" y="0" width="130" height="90" rx="8" fill="url(#mechBoxGrad)" stroke="#34d399" strokeWidth="2" />
              <text x="65" y="32" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Mechanical System</text>
              <text x="65" y="52" textAnchor="middle" fill="#a7f3d0" fontSize="10">Torque T, Speed ω</text>
              <text x="65" y="74" textAnchor="middle" fill="#d1fae5" fontSize="9" fontFamily="monospace">P_mech = T · ω</text>
            </g>

            {/* Forward Flow (Motor Action) */}
            <line x1="165" y1="70" x2="227" y2="70" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#arrowHeadSchem)" />
            <line x1="370" y1="70" x2="432" y2="70" stroke="#34d399" strokeWidth="3" markerEnd="url(#arrowHeadSchem)" />
            <text x="300" y="18" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">Motor Action → (Electrical to Mechanical)</text>

            {/* Reverse Flow (Generator Action) */}
            <line x1="432" y1="100" x2="370" y2="100" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrowHeadSchem)" />
            <line x1="227" y1="100" x2="165" y2="100" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrowHeadSchem)" />

            {/* Losses Drop */}
            <line x1="300" y1="145" x2="300" y2="175" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#arrowHeadLoss)" />
            <text x="300" y="190" textAnchor="middle" fill="#f87171" fontSize="9" fontWeight="bold">Internal Losses: Copper (I²R) + Core (Iron) + Mech Friction</text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Electromechanical Energy Conversion: Coupling Magnetic Field, Energy Flow Paths & Loss Partitioning"}
          </p>
        </div>
      );

    case 'magnetic-circuit':
      return (
        <div id="schematic-magnetic-circuit" className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 220" className="w-full max-w-lg h-48">
            <defs>
              <linearGradient id="coreIron" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
            </defs>

            {/* Magnetic Core Rectangle */}
            <rect x="60" y="25" width="220" height="170" rx="10" fill="url(#coreIron)" stroke="#64748b" strokeWidth="3" />
            <rect x="115" y="65" width="110" height="90" rx="6" fill="#020617" stroke="#334155" strokeWidth="2" />

            {/* Air Gap on Right Arm */}
            <rect x="235" y="95" width="50" height="20" fill="#020617" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" />
            <text x="260" y="90" textAnchor="middle" fill="#fcd34d" fontSize="8" fontWeight="bold">Air Gap (l_g)</text>

            {/* Excitation Coil on Left Arm */}
            <g transform="translate(52, 50)">
              {[0, 16, 32, 48, 64, 80].map((y, idx) => (
                <g key={idx}>
                  <rect x="0" y={y} width="14" height="10" rx="2" fill="#b45309" stroke="#f59e0b" strokeWidth="1" />
                  <line x1="7" y1={y + 5} x2="68" y2={y + 10} stroke="#f59e0b" strokeWidth="2" />
                  <rect x="61" y={y} width="14" height="10" rx="2" fill="#b45309" stroke="#f59e0b" strokeWidth="1" />
                </g>
              ))}
              <text x="-4" y="10" fill="#38bdf8" fontSize="9" fontWeight="bold">I</text>
              <text x="-4" y="95" fill="#38bdf8" fontSize="8">N turns</text>
            </g>

            {/* Magnetic Flux Path */}
            <rect x="88" y="45" width="164" height="130" rx="6" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="6 4" />
            <text x="170" y="115" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold" fontFamily="monospace">Φ = F / ℜ_tot</text>

            {/* Electrical Equivalent Circuit on Right */}
            <g transform="translate(340, 30)">
              <rect x="0" y="0" width="180" height="160" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="90" y="22" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">Equivalent Magnetic Circuit</text>

              {/* MMF Source */}
              <circle cx="35" cy="80" r="16" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
              <text x="35" y="76" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">+</text>
              <text x="35" y="88" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">−</text>
              <text x="35" y="108" textAnchor="middle" fill="#bae6fd" fontSize="8">F = N·I</text>

              {/* Core Reluctance Resistor symbol */}
              <rect x="80" y="42" width="60" height="16" fill="#1e293b" stroke="#c084fc" strokeWidth="1.5" />
              <text x="110" y="54" textAnchor="middle" fill="#e9d5ff" fontSize="8" fontWeight="bold">ℜ_core = l_c/μA</text>

              {/* Air Gap Reluctance Resistor symbol */}
              <rect x="80" y="102" width="60" height="16" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="110" y="114" textAnchor="middle" fill="#fef08a" fontSize="8" fontWeight="bold">ℜ_gap = l_g/μ₀A</text>

              {/* Wiring */}
              <polyline points="35,64 35,50 80,50" fill="none" stroke="#64748b" strokeWidth="1.5" />
              <polyline points="140,50 160,50 160,110 140,110" fill="none" stroke="#64748b" strokeWidth="1.5" />
              <polyline points="80,110 35,110 35,96" fill="none" stroke="#64748b" strokeWidth="1.5" />

              <text x="90" y="148" textAnchor="middle" fill="#34d399" fontSize="9" fontFamily="monospace">ℜ_total = ℜ_core + ℜ_gap</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Magnetic Circuit and Electrical Equivalent: MMF Source, Core Reluctance, and Air-Gap Series Reluctance"}
          </p>
        </div>
      );

    case 'dc-machine-construction':
      return (
        <div id="schematic-dc-machine-construction" className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 250" className="w-full max-w-lg h-52">
            {/* Outer Yoke Frame */}
            <circle cx="180" cy="125" r="110" fill="#0f172a" stroke="#475569" strokeWidth="12" />

            {/* Field Poles (North Top, South Bottom) */}
            <path d="M 145 22 L 215 22 L 215 55 Q 180 70 145 55 Z" fill="#334155" stroke="#ef4444" strokeWidth="2" />
            <text x="180" y="44" textAnchor="middle" fill="#ef4444" fontSize="12" fontWeight="bold">N</text>

            <path d="M 145 228 L 215 228 L 215 195 Q 180 180 145 195 Z" fill="#334155" stroke="#3b82f6" strokeWidth="2" />
            <text x="180" y="214" textAnchor="middle" fill="#3b82f6" fontSize="12" fontWeight="bold">S</text>

            {/* Field Windings */}
            <rect x="133" y="26" width="10" height="24" rx="2" fill="#b45309" stroke="#f59e0b" strokeWidth="1" />
            <rect x="217" y="26" width="10" height="24" rx="2" fill="#b45309" stroke="#f59e0b" strokeWidth="1" />
            <rect x="133" y="200" width="10" height="24" rx="2" fill="#b45309" stroke="#f59e0b" strokeWidth="1" />
            <rect x="217" y="200" width="10" height="24" rx="2" fill="#b45309" stroke="#f59e0b" strokeWidth="1" />

            {/* Armature Rotor */}
            <circle cx="180" cy="125" r="54" fill="#1e293b" stroke="#64748b" strokeWidth="2" />

            {/* Armature Conductors */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((ang, i) => {
              const rad = (ang * Math.PI) / 180;
              const x = 180 + 44 * Math.cos(rad);
              const y = 125 + 44 * Math.sin(rad);
              return (
                <circle key={i} cx={x} cy={y} r="4" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />
              );
            })}

            {/* Commutator & Brushes */}
            <circle cx="180" cy="125" r="24" fill="#78350f" stroke="#fbbf24" strokeWidth="2" />
            <rect x="146" y="119" width="10" height="12" fill="#18181b" stroke="#e2e8f0" strokeWidth="1" />
            <rect x="204" y="119" width="10" height="12" fill="#18181b" stroke="#e2e8f0" strokeWidth="1" />
            <circle cx="180" cy="125" r="10" fill="#94a3b8" />

            {/* Callouts on the Right */}
            <g transform="translate(320, 20)">
              <rect x="0" y="0" width="200" height="205" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="100" y="24" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">Key DC Machine Elements</text>
              
              <text x="15" y="52" fill="#e2e8f0" fontSize="10">1. <tspan fill="#38bdf8" fontWeight="bold">Yoke</tspan>: Frame & Flux Return</text>
              <text x="15" y="74" fill="#e2e8f0" fontSize="10">2. <tspan fill="#ef4444" fontWeight="bold">Poles & Shoes</tspan>: Flux Dispersion</text>
              <text x="15" y="96" fill="#e2e8f0" fontSize="10">3. <tspan fill="#f59e0b" fontWeight="bold">Field Coils</tspan>: MMF Excitation</text>
              <text x="15" y="118" fill="#e2e8f0" fontSize="10">4. <tspan fill="#34d399" fontWeight="bold">Armature Core</tspan>: Slotted Rotor</text>
              <text x="15" y="140" fill="#e2e8f0" fontSize="10">5. <tspan fill="#fbbf24" fontWeight="bold">Commutator</tspan>: Mechanical Inverter</text>
              <text x="15" y="162" fill="#e2e8f0" fontSize="10">6. <tspan fill="#e2e8f0" fontWeight="bold">Carbon Brushes</tspan>: Current Collector</text>
              <text x="15" y="184" fill="#e2e8f0" fontSize="10">7. <tspan fill="#94a3b8" fontWeight="bold">Shaft</tspan>: Rotational Power Output</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "DC Machine Cross-Section: Stator Yoke, Salient Field Poles, Armature Core, Commutator Segments and Carbon Brushes"}
          </p>
        </div>
      );

    case 'dc-generator-emf':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 240" className="w-full max-w-xl h-56">
            {/* Magnetic Pole Pair */}
            <path d="M 40 40 L 110 40 L 110 200 L 40 200 Z" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
            <text x="75" y="125" textAnchor="middle" fill="#ffffff" fontSize="22" fontWeight="bold">N</text>

            <path d="M 430 40 L 500 40 L 500 200 L 430 200 Z" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
            <text x="465" y="125" textAnchor="middle" fill="#ffffff" fontSize="22" fontWeight="bold">S</text>

            {/* Flux Lines */}
            <g stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="5,4" opacity="0.7">
              <line x1="110" y1="70" x2="430" y2="70" />
              <line x1="110" y1="100" x2="430" y2="100" />
              <line x1="110" y1="140" x2="430" y2="140" />
              <line x1="110" y1="170" x2="430" y2="170" />
            </g>
            <text x="270" y="32" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">Magnetic Flux Φ (Weber / Pole)</text>

            {/* Rotating Armature Coil Loop */}
            <g transform="translate(270, 120)">
              <rect x="-80" y="-45" width="160" height="90" rx="4" fill="none" stroke="#f59e0b" strokeWidth="3" />
              <circle cx="-80" cy="0" r="5" fill="#f59e0b" />
              <circle cx="80" cy="0" r="5" fill="#f59e0b" />
              
              {/* Velocity Vectors */}
              <line x1="-80" y1="-45" x2="-80" y2="-75" stroke="#10b981" strokeWidth="2.5" />
              <polygon points="-84,-75 -80,-85 -76,-75" fill="#10b981" />
              <text x="-95" y="-60" fill="#10b981" fontSize="11" fontWeight="bold">v</text>

              <line x1="80" y1="45" x2="80" y2="75" stroke="#10b981" strokeWidth="2.5" />
              <polygon points="76,75 80,85 84,75" fill="#10b981" />
              <text x="95" y="65" fill="#10b981" fontSize="11" fontWeight="bold">v</text>

              {/* EMF Formula Center Badge */}
              <rect x="-105" y="-16" width="210" height="32" rx="6" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
              <text x="0" y="5" textAnchor="middle" fill="#fbbf24" fontSize="12" fontWeight="bold" fontFamily="monospace">
                Eg = (P · Φ · Z · N) / (60 · A)
              </text>
            </g>

            {/* Winding Types Sub-badge */}
            <g transform="translate(270, 220)">
              <text x="0" y="0" textAnchor="middle" fill="#94a3b8" fontSize="10">
                Lap: <tspan fill="#38bdf8" fontWeight="bold">A = P</tspan> (High Current) | Wave: <tspan fill="#38bdf8" fontWeight="bold">A = 2</tspan> (High Voltage)
              </text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "DC Generator EMF Generation Principle: Coil Rotating at Speed N cutting Magnetic Flux Φ inducing Eg"}
          </p>
        </div>
      );

    case 'dc-generator-types':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 240" className="w-full max-w-xl h-56">
            {/* Shunt Generator Topology */}
            <g transform="translate(30, 25)">
              <rect x="0" y="0" width="220" height="190" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="110" y="22" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">DC Shunt Generator</text>
              
              {/* Circuit loop */}
              <line x1="40" y1="50" x2="180" y2="50" stroke="#64748b" strokeWidth="2" />
              <line x1="40" y1="155" x2="180" y2="155" stroke="#64748b" strokeWidth="2" />
              
              {/* Armature */}
              <circle cx="110" cy="102" r="18" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
              <text x="110" y="106" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">A</text>
              <line x1="110" y1="50" x2="110" y2="84" stroke="#38bdf8" strokeWidth="2" />
              <line x1="110" y1="120" x2="110" y2="155" stroke="#38bdf8" strokeWidth="2" />
              
              {/* Shunt Field */}
              <path d="M 40 70 C 55 70 55 85 40 85 C 55 85 55 100 40 100 C 55 100 55 115 40 115 C 55 115 55 130 40 130" stroke="#f59e0b" strokeWidth="2" fill="none" />
              <line x1="40" y1="50" x2="40" y2="70" stroke="#64748b" strokeWidth="2" />
              <line x1="40" y1="130" x2="40" y2="155" stroke="#64748b" strokeWidth="2" />
              <text x="25" y="105" textAnchor="end" fill="#f59e0b" fontSize="8" fontWeight="bold">Rsh</text>

              {/* Load */}
              <line x1="180" y1="50" x2="180" y2="80" stroke="#64748b" strokeWidth="2" />
              <rect x="174" y="80" width="12" height="44" fill="#334155" stroke="#10b981" strokeWidth="1.5" />
              <line x1="180" y1="124" x2="180" y2="155" stroke="#64748b" strokeWidth="2" />
              <text x="192" y="105" fill="#10b981" fontSize="8" fontWeight="bold">Load</text>

              <text x="110" y="176" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">Ia = IL + Ish</text>
            </g>

            {/* Compound Generator Topology (Long Shunt) */}
            <g transform="translate(290, 25)">
              <rect x="0" y="0" width="220" height="190" rx="8" fill="#0f172a" stroke="#a855f7" strokeWidth="1.5" />
              <text x="110" y="22" textAnchor="middle" fill="#a855f7" fontSize="11" fontWeight="bold">Compound Generator (Long Shunt)</text>

              <line x1="40" y1="50" x2="180" y2="50" stroke="#64748b" strokeWidth="2" />
              <line x1="40" y1="155" x2="180" y2="155" stroke="#64748b" strokeWidth="2" />

              {/* Armature */}
              <circle cx="85" cy="102" r="16" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
              <text x="85" y="106" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">A</text>
              <line x1="85" y1="50" x2="85" y2="86" stroke="#38bdf8" strokeWidth="2" />
              <line x1="85" y1="118" x2="85" y2="155" stroke="#38bdf8" strokeWidth="2" />

              {/* Series Field in top rail */}
              <path d="M 115 50 C 115 40 127 40 127 50 C 127 40 139 40 139 50 C 139 40 151 40 151 50" stroke="#a855f7" strokeWidth="2" fill="none" />
              <text x="133" y="38" textAnchor="middle" fill="#a855f7" fontSize="8" fontWeight="bold">Rse</text>

              {/* Shunt Field */}
              <path d="M 40 70 C 55 70 55 85 40 85 C 55 85 55 100 40 100 C 55 100 55 115 40 115 C 55 115 55 130 40 130" stroke="#f59e0b" strokeWidth="2" fill="none" />
              <line x1="40" y1="50" x2="40" y2="70" stroke="#64748b" strokeWidth="2" />
              <line x1="40" y1="130" x2="40" y2="155" stroke="#64748b" strokeWidth="2" />
              <text x="25" y="105" textAnchor="end" fill="#f59e0b" fontSize="8" fontWeight="bold">Rsh</text>

              {/* Load */}
              <line x1="180" y1="50" x2="180" y2="80" stroke="#64748b" strokeWidth="2" />
              <rect x="174" y="80" width="12" height="44" fill="#334155" stroke="#10b981" strokeWidth="1.5" />
              <line x1="180" y1="124" x2="180" y2="155" stroke="#64748b" strokeWidth="2" />
              <text x="192" y="105" fill="#10b981" fontSize="8" fontWeight="bold">Load</text>

              <text x="110" y="176" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">Eg = V + Ia(Ra+Rse)</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "DC Generator Circuit Configurations: Shunt and Long-Shunt Compound Topologies"}
          </p>
        </div>
      );

    case 'dc-generator-characteristics':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 240" className="w-full max-w-xl h-56">
            {/* OCC and Build-Up on Left */}
            <g transform="translate(30, 20)">
              <rect x="0" y="0" width="230" height="200" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
              <text x="115" y="20" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">OCC & Critical Resistance (Rc)</text>
              
              {/* Axes */}
              <line x1="30" y1="165" x2="210" y2="165" stroke="#64748b" strokeWidth="1.5" />
              <line x1="30" y1="165" x2="30" y2="35" stroke="#64748b" strokeWidth="1.5" />
              
              {/* OCC curve */}
              <path d="M 30 152 Q 90 70 200 60" fill="none" stroke="#10b981" strokeWidth="2.5" />
              <text x="185" y="52" fill="#10b981" fontSize="8" fontWeight="bold">OCC (E0)</text>

              {/* Air-gap / Critical Resistance line */}
              <line x1="30" y1="152" x2="160" y2="35" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3,3" />
              <text x="165" y="40" fill="#f59e0b" fontSize="8" fontWeight="bold">Rc Tangent</text>

              {/* Field Resistance Line Rf */}
              <line x1="30" y1="165" x2="190" y2="55" stroke="#38bdf8" strokeWidth="2" />
              <text x="195" y="70" fill="#38bdf8" fontSize="8" fontWeight="bold">Rf Line</text>

              {/* Intersection Point P */}
              <circle cx="160" cy="65" r="4" fill="#fbbf24" />
              <text x="165" y="80" fill="#fbbf24" fontSize="9" fontWeight="bold">P (V_NL)</text>

              <text x="115" y="186" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">Condition: Rf &lt; Rc &amp; N &gt; Nc</text>
            </g>

            {/* External Load Curves on Right */}
            <g transform="translate(280, 20)">
              <rect x="0" y="0" width="230" height="200" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="115" y="20" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">External Load Curves (V vs IL)</text>

              {/* Axes */}
              <line x1="30" y1="165" x2="210" y2="165" stroke="#64748b" strokeWidth="1.5" />
              <line x1="30" y1="165" x2="30" y2="35" stroke="#64748b" strokeWidth="1.5" />

              {/* No-load reference */}
              <line x1="30" y1="75" x2="210" y2="75" stroke="#475569" strokeWidth="1" strokeDasharray="2,2" />
              <text x="35" y="70" fill="#94a3b8" fontSize="7">V_NL</text>

              {/* Over-comp */}
              <path d="M 30 75 Q 110 50 190 60" fill="none" stroke="#10b981" strokeWidth="2" />
              <text x="195" y="60" fill="#10b981" fontSize="7" fontWeight="bold">Over-Comp</text>

              {/* Flat-comp */}
              <line x1="30" y1="75" x2="190" y2="75" stroke="#38bdf8" strokeWidth="2" />
              <text x="195" y="77" fill="#38bdf8" fontSize="7" fontWeight="bold">Flat-Comp</text>

              {/* Shunt */}
              <path d="M 30 75 Q 110 90 190 110" fill="none" stroke="#fbbf24" strokeWidth="2" />
              <text x="195" y="112" fill="#fbbf24" fontSize="7" fontWeight="bold">Shunt</text>

              {/* Differential */}
              <path d="M 30 75 Q 80 130 140 160" fill="none" stroke="#f43f5e" strokeWidth="2" />
              <text x="145" y="158" fill="#f43f5e" fontSize="7" fontWeight="bold">Diff (Welding)</text>

              <text x="115" y="186" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">IL (Load Current) →</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "DC Generator Characteristic Curves: Open Circuit Characteristic (OCC) and Terminal Voltage vs Load Current (V vs IL)"}
          </p>
        </div>
      );

    case 'dc-generator-losses':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 230" className="w-full max-w-xl h-52" aria-label="DC Generator Power Flow & Loss Classification">
            {/* Stage 1: Mechanical Shaft Input */}
            <g transform="translate(15, 25)">
              <rect x="0" y="0" width="130" height="65" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
              <text x="65" y="24" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">Shaft Mech Input</text>
              <text x="65" y="44" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="monospace">Pin (BHP)</text>
              <text x="65" y="58" textAnchor="middle" fill="#94a3b8" fontSize="8">Pin = T · ω</text>
            </g>

            {/* Transition 1 */}
            <line x1="145" y1="57" x2="195" y2="57" stroke="#38bdf8" strokeWidth="3" strokeDasharray="4,2" />
            <polygon points="195,52 205,57 195,62" fill="#38bdf8" />

            {/* Rotational Losses Dropdown */}
            <path d="M 170 57 L 170 145" stroke="#f43f5e" strokeWidth="2.5" />
            <polygon points="166,145 170,155 174,145" fill="#f43f5e" />
            <rect x="105" y="155" width="130" height="55" rx="6" fill="#450a0a" stroke="#f43f5e" strokeWidth="1.5" />
            <text x="170" y="172" textAnchor="middle" fill="#fca5a5" fontSize="9.5" fontWeight="bold">Iron &amp; Mech Losses</text>
            <text x="170" y="188" textAnchor="middle" fill="#ffffff" fontSize="9" fontFamily="monospace">P_rot = P_core + P_mech</text>
            <text x="170" y="202" textAnchor="middle" fill="#fca5a5" fontSize="7.5">Hysteresis + Eddy + Friction</text>

            {/* Stage 2: Electromagnetic Converted Power */}
            <g transform="translate(205, 25)">
              <rect x="0" y="0" width="130" height="65" rx="8" fill="#1e293b" stroke="#fbbf24" strokeWidth="2" />
              <text x="65" y="24" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold">Gross Converted</text>
              <text x="65" y="44" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="monospace">Pdev = Eg · Ia</text>
              <text x="65" y="58" textAnchor="middle" fill="#94a3b8" fontSize="8">Electromagnetic Power</text>
            </g>

            {/* Transition 2 */}
            <line x1="335" y1="57" x2="385" y2="57" stroke="#fbbf24" strokeWidth="3" strokeDasharray="4,2" />
            <polygon points="385,52 395,57 385,62" fill="#fbbf24" />

            {/* Copper Losses Dropdown */}
            <path d="M 360 57 L 360 145" stroke="#fb923c" strokeWidth="2.5" />
            <polygon points="356,145 360,155 364,145" fill="#fb923c" />
            <rect x="290" y="155" width="140" height="55" rx="6" fill="#431407" stroke="#fb923c" strokeWidth="1.5" />
            <text x="360" y="172" textAnchor="middle" fill="#fed7aa" fontSize="9.5" fontWeight="bold">Copper &amp; Brush Losses</text>
            <text x="360" y="188" textAnchor="middle" fill="#ffffff" fontSize="9" fontFamily="monospace">Ia²Ra + Ish²Rsh + V_b·Ia</text>
            <text x="360" y="202" textAnchor="middle" fill="#fed7aa" fontSize="7.5">Variable + Field I²R</text>

            {/* Stage 3: Terminal Electrical Output */}
            <g transform="translate(395, 25)">
              <rect x="0" y="0" width="130" height="65" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="2.5" />
              <text x="65" y="24" textAnchor="middle" fill="#6ee7b7" fontSize="11" fontWeight="bold">Terminal Output</text>
              <text x="65" y="44" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="monospace">Pout = V · IL</text>
              <text x="65" y="58" textAnchor="middle" fill="#a7f3d0" fontSize="8">Useful Electrical Power</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "DC Generator Power Flow Diagram: Pin → (Rotational Losses) → Pdev → (Copper Losses) → Pout"}
          </p>
        </div>
      );

    case 'dc-motor-principle':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 230" className="w-full max-w-xl h-52" aria-label="DC Motor Working Principle & Back EMF">
            {/* Left Diagram: Lorentz Force & Fleming's Left Hand Rule */}
            <g transform="translate(20, 20)">
              <rect x="0" y="0" width="240" height="190" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1.5" />
              <text x="120" y="22" textAnchor="middle" fill="#f87171" fontSize="11" fontWeight="bold">Lorentz Force &amp; Rotation</text>
              
              {/* Field Poles */}
              <rect x="15" y="45" width="30" height="110" rx="4" fill="#dc2626" />
              <text x="30" y="105" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="bold">N</text>
              
              <rect x="195" y="45" width="30" height="110" rx="4" fill="#2563eb" />
              <text x="210" y="105" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="bold">S</text>

              {/* Flux lines */}
              <g stroke="#38bdf8" strokeWidth="1" strokeDasharray="3,3" opacity="0.6">
                <line x1="45" y1="70" x2="195" y2="70" />
                <line x1="45" y1="100" x2="195" y2="100" />
                <line x1="45" y1="130" x2="195" y2="130" />
              </g>

              {/* Armature Rotor */}
              <circle cx="120" cy="100" r="45" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
              
              {/* Conductors */}
              {/* Top Conductor (Out of page •) */}
              <circle cx="120" cy="70" r="8" fill="#f59e0b" stroke="#d97706" />
              <circle cx="120" cy="70" r="2.5" fill="#0f172a" />
              {/* Force vector Left */}
              <line x1="120" y1="70" x2="85" y2="70" stroke="#10b981" strokeWidth="2.5" />
              <polygon points="85,67 76,70 85,73" fill="#10b981" />
              <text x="70" y="66" fill="#34d399" fontSize="8" fontWeight="bold">F</text>

              {/* Bottom Conductor (Into page ⊗) */}
              <circle cx="120" cy="130" r="8" fill="#f59e0b" stroke="#d97706" />
              <line x1="116" y1="126" x2="124" y2="134" stroke="#0f172a" strokeWidth="1.5" />
              <line x1="124" y1="126" x2="116" y2="134" stroke="#0f172a" strokeWidth="1.5" />
              {/* Force vector Right */}
              <line x1="120" y1="130" x2="155" y2="130" stroke="#10b981" strokeWidth="2.5" />
              <polygon points="155,127 164,130 155,133" fill="#10b981" />
              <text x="170" y="134" fill="#34d399" fontSize="8" fontWeight="bold">F</text>

              <text x="120" y="174" textAnchor="middle" fill="#94a3b8" fontSize="8.5" fontFamily="monospace">Torque Ta = kt · Φ · Ia</text>
            </g>

            {/* Right Diagram: Back EMF Equivalent Circuit */}
            <g transform="translate(280, 20)">
              <rect x="0" y="0" width="240" height="190" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="120" y="22" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">Armature Back EMF Circuit</text>

              {/* Loop circuit */}
              <line x1="30" y1="55" x2="210" y2="55" stroke="#475569" strokeWidth="2" />
              <line x1="30" y1="145" x2="210" y2="145" stroke="#475569" strokeWidth="2" />
              
              {/* Terminal Supply V */}
              <g transform="translate(30, 100)">
                <circle cx="0" cy="0" r="16" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
                <text x="0" y="-3" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">+</text>
                <text x="0" y="9" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">-</text>
                <text x="-22" y="4" textAnchor="end" fill="#38bdf8" fontSize="10" fontWeight="bold">V</text>
              </g>

              {/* Current Arrow */}
              <line x1="60" y1="55" x2="85" y2="55" stroke="#f59e0b" strokeWidth="2.5" />
              <polygon points="85,52 92,55 85,58" fill="#f59e0b" />
              <text x="75" y="46" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">Ia →</text>

              {/* Resistor Ra */}
              <rect x="110" y="47" width="30" height="16" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" rx="2" />
              <text x="125" y="59" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="bold">Ra</text>

              {/* Back EMF Generator Eb (Opposing V) */}
              <g transform="translate(180, 100)">
                <circle cx="0" cy="0" r="18" fill="#1e293b" stroke="#fbbf24" strokeWidth="2" />
                <text x="0" y="-3" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold">+</text>
                <text x="0" y="9" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold">-</text>
                <text x="25" y="4" textAnchor="start" fill="#fbbf24" fontSize="10" fontWeight="bold">Eb</text>
              </g>
              <line x1="180" y1="55" x2="180" y2="82" stroke="#475569" strokeWidth="2" />
              <line x1="180" y1="118" x2="180" y2="145" stroke="#475569" strokeWidth="2" />

              {/* Equations at bottom */}
              <text x="120" y="165" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="monospace">
                Eb = V - Ia · Ra
              </text>
              <text x="120" y="180" textAnchor="middle" fill="#94a3b8" fontSize="8.5" fontFamily="monospace">
                Ia = (V - Eb) / Ra
              </text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "DC Motor Operation: Lorentz Force Generation & Back EMF Governing Circuit"}
          </p>
        </div>
      );

    case 'dc-motor-types':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 230" className="w-full max-w-xl h-52" aria-label="DC Motor Types & Speed-Torque Characteristics">
            {/* Topologies Block Left */}
            <g transform="translate(15, 20)">
              <rect x="0" y="0" width="250" height="190" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
              <text x="125" y="20" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">DC Motor Topologies</text>

              {/* Shunt mini schematic */}
              <g transform="translate(15, 35)">
                <rect x="0" y="0" width="105" height="65" rx="4" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
                <text x="52" y="14" textAnchor="middle" fill="#38bdf8" fontSize="8.5" fontWeight="bold">Shunt Motor</text>
                <circle cx="75" cy="40" r="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="75" y="44" textAnchor="middle" fill="#fff" fontSize="8">A</text>
                {/* Field parallel */}
                <path d="M 25 25 Q 35 30 25 35 Q 35 40 25 45 Q 35 50 25 55" fill="none" stroke="#34d399" strokeWidth="1.5" />
                <text x="25" y="62" textAnchor="middle" fill="#34d399" fontSize="6.5">Rsh</text>
              </g>

              {/* Series mini schematic */}
              <g transform="translate(130, 35)">
                <rect x="0" y="0" width="105" height="65" rx="4" fill="#1e293b" stroke="#fbbf24" strokeWidth="1" />
                <text x="52" y="14" textAnchor="middle" fill="#fbbf24" fontSize="8.5" fontWeight="bold">Series Motor</text>
                <circle cx="75" cy="40" r="12" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
                <text x="75" y="44" textAnchor="middle" fill="#fff" fontSize="8">A</text>
                {/* Field in series */}
                <path d="M 25 40 Q 30 30 35 40 Q 40 30 45 40 Q 50 30 55 40" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
                <text x="40" y="55" textAnchor="middle" fill="#fbbf24" fontSize="6.5">Rse</text>
              </g>

              {/* Compound schematic */}
              <g transform="translate(15, 110)">
                <rect x="0" y="0" width="220" height="65" rx="4" fill="#1e293b" stroke="#34d399" strokeWidth="1" />
                <text x="110" y="15" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="bold">Cumulative / Differential Compound</text>
                {/* Shunt field */}
                <path d="M 30 25 Q 38 32 30 40 Q 38 48 30 55" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="30" y="62" textAnchor="middle" fill="#38bdf8" fontSize="6.5">Fld(Sh)</text>
                {/* Series field + Armature */}
                <path d="M 90 40 Q 98 32 106 40 Q 114 32 122 40" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
                <text x="106" y="55" textAnchor="middle" fill="#fbbf24" fontSize="6.5">Fld(Se)</text>
                <circle cx="165" cy="40" r="12" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
                <text x="165" y="44" textAnchor="middle" fill="#fff" fontSize="8">A</text>
              </g>
            </g>

            {/* Speed vs Torque Comparative Curves Right */}
            <g transform="translate(280, 20)">
              <rect x="0" y="0" width="245" height="190" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="122" y="20" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">Speed vs Torque (N - T)</text>

              {/* Axes */}
              <line x1="35" y1="160" x2="225" y2="160" stroke="#64748b" strokeWidth="1.5" />
              <line x1="35" y1="160" x2="35" y2="35" stroke="#64748b" strokeWidth="1.5" />

              {/* Shunt Curve */}
              <path d="M 35 60 L 210 80" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
              <text x="215" y="82" fill="#38bdf8" fontSize="7.5" fontWeight="bold">Shunt</text>

              {/* Series Curve */}
              <path d="M 45 40 Q 75 125 210 145" fill="none" stroke="#fbbf24" strokeWidth="2.5" />
              <text x="215" y="147" fill="#fbbf24" fontSize="7.5" fontWeight="bold">Series</text>

              {/* Cumulative Curve */}
              <path d="M 35 60 Q 120 90 210 110" fill="none" stroke="#34d399" strokeWidth="2" />
              <text x="215" y="112" fill="#34d399" fontSize="7.5" fontWeight="bold">Cum. Comp</text>

              {/* Differential Curve */}
              <path d="M 35 60 L 210 50" fill="none" stroke="#fb7185" strokeWidth="1.5" strokeDasharray="3,2" />
              <text x="215" y="52" fill="#fb7185" fontSize="7.5" fontWeight="bold">Diff. Comp</text>

              {/* Axis labels */}
              <text x="15" y="45" fill="#94a3b8" fontSize="8" fontWeight="bold">N ↑</text>
              <text x="122" y="178" textAnchor="middle" fill="#94a3b8" fontSize="8.5" fontFamily="monospace">Torque Ta (N·m) →</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "DC Motor Topologies & Comparative Speed-Torque Characteristic Curves"}
          </p>
        </div>
      );

    case 'circuit-dc-motor-starter-3point':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 220" className="w-full max-w-2xl h-52">
            {/* Starter Box */}
            <rect x="20" y="20" width="240" height="180" rx="8" fill="#090d16" stroke="#38bdf8" strokeWidth="2" />
            <text x="140" y="42" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">3-POINT STARTER</text>

            {/* Brass Arc & Studs */}
            <path d="M 60 140 A 70 70 0 0 1 180 80" fill="none" stroke="#d97706" strokeWidth="4" />
            <circle cx="65" cy="85" r="5" fill="#38bdf8" />
            <circle cx="95" cy="65" r="5" fill="#38bdf8" />
            <circle cx="130" cy="55" r="5" fill="#38bdf8" />
            <circle cx="165" cy="65" r="5" fill="#38bdf8" />
            <circle cx="195" cy="85" r="6" fill="#10b981" />
            <text x="210" y="88" fill="#10b981" fontSize="8" fontWeight="bold">RUN</text>

            {/* Handle */}
            <line x1="120" y1="160" x2="195" y2="85" stroke="#94a3b8" strokeWidth="5" strokeLinecap="round" />
            <circle cx="120" cy="160" r="8" fill="#e2e8f0" />
            <text x="120" y="185" textAnchor="middle" fill="#64748b" fontSize="8">Spiral Spring Pivot</text>

            {/* Electromagnets NVC and OLR */}
            <g transform="translate(190, 100)">
              <rect x="0" y="0" width="26" height="30" rx="3" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="13" y="18" textAnchor="middle" fill="#38bdf8" fontSize="7" fontWeight="bold">NVC</text>
            </g>
            <g transform="translate(45, 140)">
              <rect x="0" y="0" width="30" height="24" rx="3" fill="#1e293b" stroke="#ef4444" strokeWidth="1.5" />
              <text x="15" y="15" textAnchor="middle" fill="#ef4444" fontSize="7" fontWeight="bold">OLR</text>
            </g>

            {/* Terminals L, A, F */}
            <text x="10" y="155" fill="#38bdf8" fontSize="10" fontWeight="bold">L</text>
            <text x="268" y="90" fill="#38bdf8" fontSize="10" fontWeight="bold">A</text>
            <text x="268" y="120" fill="#10b981" fontSize="10" fontWeight="bold">F</text>

            {/* DC Motor on Right */}
            <g transform="translate(320, 20)">
              <rect x="0" y="0" width="200" height="180" rx="8" fill="#090d16" stroke="#475569" strokeWidth="2" />
              <text x="100" y="30" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">DC SHUNT MOTOR</text>
              
              {/* Armature */}
              <circle cx="100" cy="80" r="28" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
              <text x="100" y="85" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">A</text>
              <text x="100" y="120" textAnchor="middle" fill="#94a3b8" fontSize="8.5">Armature (Ra)</text>

              {/* Shunt Field */}
              <g transform="translate(30, 135)">
                <path d="M 20 15 Q 35 5 50 15 Q 65 25 80 15 Q 95 5 110 15 Q 125 25 140 15" fill="none" stroke="#10b981" strokeWidth="2" />
                <text x="80" y="32" textAnchor="middle" fill="#10b981" fontSize="8">Shunt Field (Rsh)</text>
              </g>
            </g>

            {/* Connections */}
            <path d="M 260 85 L 320 80" stroke="#38bdf8" strokeWidth="2" fill="none" />
            <path d="M 260 115 L 290 115 L 290 150 L 320 150" stroke="#10b981" strokeWidth="2" fill="none" />
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "3-Point Starter Schematic for DC Shunt Motor with NVR and OLR Protection"}
          </p>
        </div>
      );

    case 'circuit-dc-motor-speed-control':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 220" className="w-full max-w-2xl h-52">
            {/* Field Control (Left) */}
            <g transform="translate(20, 20)">
              <rect x="0" y="0" width="240" height="180" rx="8" fill="#090d16" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="120" y="24" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">1. Field Control (Flux Weakening)</text>
              <text x="120" y="40" textAnchor="middle" fill="#94a3b8" fontSize="8.5">Speeds ABOVE Base (Constant Power)</text>

              {/* Shunt Field in series with Rheostat */}
              <g transform="translate(30, 60)">
                <path d="M 10 30 Q 20 15 30 30 Q 40 45 50 30 Q 60 15 70 30" fill="none" stroke="#10b981" strokeWidth="2" />
                <text x="40" y="50" textAnchor="middle" fill="#10b981" fontSize="7.5">Field Winding</text>
                
                {/* Field Rheostat */}
                <rect x="100" y="20" width="45" height="20" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" rx="3" />
                <path d="M 90 40 L 155 10" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrow)" />
                <text x="122" y="55" textAnchor="middle" fill="#f59e0b" fontSize="7.5">Field Rheostat (Rf)</text>
              </g>

              <circle cx="190" cy="90" r="22" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <text x="190" y="94" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">A</text>
              <text x="120" y="165" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">↑ Rf → ↓ If → ↓ Φ → ↑ Speed N</text>
            </g>

            {/* Armature Control (Right) */}
            <g transform="translate(280, 20)">
              <rect x="0" y="0" width="240" height="180" rx="8" fill="#090d16" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="120" y="24" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">2. Armature Resistance Control</text>
              <text x="120" y="40" textAnchor="middle" fill="#94a3b8" fontSize="8.5">Speeds BELOW Base (Constant Torque)</text>

              {/* Armature in series with variable Rheostat */}
              <g transform="translate(30, 70)">
                <rect x="10" y="10" width="55" height="20" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" rx="3" />
                <path d="M 5 35 L 75 5" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="37" y="45" textAnchor="middle" fill="#f59e0b" fontSize="7.5">Series Rheostat (R_ext)</text>
                
                <circle cx="130" cy="20" r="22" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
                <text x="130" y="24" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">A</text>
              </g>

              <text x="120" y="165" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">↑ R_ext → ↓ V_armature → ↓ Speed N</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "DC Motor Speed Control Methods: Field Flux Weakening vs Armature Rheostatic Control"}
          </p>
        </div>
      );

    case 'circuit-dc-motor-braking-methods':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 200" className="w-full max-w-2xl h-48">
            {/* 1. Regenerative */}
            <g transform="translate(15, 20)">
              <rect x="0" y="0" width="155" height="160" rx="6" fill="#090d16" stroke="#10b981" strokeWidth="1.5" />
              <text x="77" y="22" textAnchor="middle" fill="#10b981" fontSize="9.5" fontWeight="bold">1. Regenerative</text>
              <circle cx="77" cy="70" r="22" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
              <text x="77" y="74" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">G</text>
              <text x="77" y="105" textAnchor="middle" fill="#34d399" fontSize="8">Eb &gt; V (Overhauling)</text>
              <text x="77" y="125" textAnchor="middle" fill="#94a3b8" fontSize="7.5">Energy fed back to Grid</text>
              <text x="77" y="145" textAnchor="middle" fill="#10b981" fontSize="8" fontWeight="bold">Highest Efficiency</text>
            </g>

            {/* 2. Dynamic */}
            <g transform="translate(190, 20)">
              <rect x="0" y="0" width="155" height="160" rx="6" fill="#090d16" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="77" y="22" textAnchor="middle" fill="#f59e0b" fontSize="9.5" fontWeight="bold">2. Dynamic / Rheostatic</text>
              <circle cx="77" cy="70" r="22" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
              <text x="77" y="74" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">M</text>
              <text x="77" y="105" textAnchor="middle" fill="#f59e0b" fontSize="8">Connected across RB</text>
              <text x="77" y="125" textAnchor="middle" fill="#94a3b8" fontSize="7.5">Dissipated as I²R Heat</text>
              <text x="77" y="145" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">Smooth Deceleration</text>
            </g>

            {/* 3. Plugging */}
            <g transform="translate(365, 20)">
              <rect x="0" y="0" width="160" height="160" rx="6" fill="#090d16" stroke="#ef4444" strokeWidth="1.5" />
              <text x="80" y="22" textAnchor="middle" fill="#ef4444" fontSize="9.5" fontWeight="bold">3. Plugging (Reverse V)</text>
              <circle cx="80" cy="70" r="22" fill="#0f172a" stroke="#ef4444" strokeWidth="2" />
              <text x="80" y="74" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">M</text>
              <text x="80" y="105" textAnchor="middle" fill="#ef4444" fontSize="8">V + Eb Additive Voltage</text>
              <text x="80" y="125" textAnchor="middle" fill="#94a3b8" fontSize="7.5">Maximum Braking Torque</text>
              <text x="80" y="145" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="bold">Requires Anti-Plug Relay</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Industrial DC Motor Braking Classifications: Regenerative, Dynamic, and Plugging"}
          </p>
        </div>
      );

    case 'transformer-basic':
    case 'circuit-transformer-basic':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 220" className="w-full max-w-lg h-56">
            <defs>
              <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="50%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <marker id="fluxArrow" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#38bdf8" />
              </marker>
            </defs>

            {/* Laminated Silicon Steel Core (Outer & Inner Window) */}
            <rect x="140" y="25" width="260" height="170" rx="8" fill="url(#coreGrad)" stroke="#64748b" strokeWidth="2.5" />
            <rect x="200" y="55" width="140" height="110" rx="4" fill="#020617" stroke="#475569" strokeWidth="2" />
            
            {/* Core Label */}
            <text x="270" y="105" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">Laminated CRGO</text>
            <text x="270" y="120" textAnchor="middle" fill="#64748b" fontSize="9">Silicon Steel Core</text>

            {/* Alternating Flux Path (Dashed with arrows) */}
            <path d="M 170 40 L 370 40 A 10 10 0 0 1 380 50 L 380 170 A 10 10 0 0 1 370 180 L 170 180 A 10 10 0 0 1 160 170 L 160 50 A 10 10 0 0 1 170 40 Z" 
                  fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="6 4" />
            <path d="M 260 40 L 280 40" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#fluxArrow)" />
            <path d="M 380 100 L 380 120" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#fluxArrow)" />
            <path d="M 280 180 L 260 180" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#fluxArrow)" />
            <path d="M 160 120 L 160 100" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#fluxArrow)" />
            <text x="270" y="34" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Mutual Flux Φ(t) = Φm sin(ωt)</text>

            {/* Primary Winding (Left Limb) */}
            <g transform="translate(130, 60)">
              {/* Primary Coils */}
              {[0, 18, 36, 54, 72, 90].map((y, i) => (
                <g key={`p-${i}`}>
                  <rect x="0" y={y} width="20" height="12" rx="4" fill="#d97706" stroke="#fbbf24" strokeWidth="1.5" />
                  <ellipse cx="10" cy={y + 6} rx="5" ry="3" fill="#b45309" />
                </g>
              ))}
              {/* Primary Leads */}
              <path d="M 0 0 L -80 0" stroke="#fbbf24" strokeWidth="2" />
              <path d="M 0 102 L -80 102" stroke="#fbbf24" strokeWidth="2" />
              <circle cx="-80" cy="0" r="4" fill="#fbbf24" />
              <circle cx="-80" cy="102" r="4" fill="#fbbf24" />
              <text x="-90" y="5" textAnchor="end" fill="#fbbf24" fontSize="10" fontWeight="bold">V1 (AC Source)</text>
              <text x="-90" y="55" textAnchor="end" fill="#fbbf24" fontSize="10" fontWeight="bold">Primary (N1)</text>
              <text x="-90" y="70" textAnchor="end" fill="#fbbf24" fontSize="9">I1 → Winding</text>
              <text x="-90" y="85" textAnchor="end" fill="#38bdf8" fontSize="9">E1 = 4.44 f N1 Φm</text>
            </g>

            {/* Secondary Winding (Right Limb) */}
            <g transform="translate(390, 60)">
              {/* Secondary Coils */}
              {[0, 15, 30, 45, 60, 75, 90, 105].map((y, i) => (
                <g key={`s-${i}`}>
                  <rect x="0" y={y} width="20" height="10" rx="4" fill="#2563eb" stroke="#60a5fa" strokeWidth="1.5" />
                  <ellipse cx="10" cy={y + 5} rx="5" ry="2.5" fill="#1d4ed8" />
                </g>
              ))}
              {/* Secondary Leads */}
              <path d="M 20 0 L 100 0" stroke="#60a5fa" strokeWidth="2" />
              <path d="M 20 115 L 100 115" stroke="#60a5fa" strokeWidth="2" />
              <circle cx="100" cy="0" r="4" fill="#60a5fa" />
              <circle cx="100" cy="115" r="4" fill="#60a5fa" />
              <text x="110" y="5" fill="#60a5fa" fontSize="10" fontWeight="bold">V2 / Load Terminals</text>
              <text x="110" y="55" fill="#60a5fa" fontSize="10" fontWeight="bold">Secondary (N2)</text>
              <text x="110" y="70" fill="#60a5fa" fontSize="9">I2 → Connected Load</text>
              <text x="110" y="85" fill="#38bdf8" fontSize="9">E2 = 4.44 f N2 Φm</text>
            </g>

            {/* Transformation Ratio Banner */}
            <rect x="180" y="193" width="180" height="22" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
            <text x="270" y="208" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="monospace">
              E2 / E1 = N2 / N1 = a = V2 / V1
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Single-Phase Transformer Working Principle & Alternating Flux Mutual Induction"}
          </p>
        </div>
      );

    case 'transformer-construction':
    case 'circuit-transformer-construction':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 560 230" className="w-full max-w-xl h-60">
            {/* Left: Core Type vs Shell Type */}
            <g transform="translate(10, 10)">
              {/* Core Type */}
              <rect x="0" y="0" width="165" height="195" rx="6" fill="#090d16" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="82" y="20" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">1. Core-Type Design</text>
              
              {/* 2-legged Core */}
              <rect x="25" y="35" width="115" height="110" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
              <rect x="55" y="55" width="55" height="70" fill="#020617" stroke="#475569" strokeWidth="1.5" />
              
              {/* Windings on both limbs */}
              <rect x="18" y="60" width="14" height="60" rx="3" fill="#d97706" stroke="#fbbf24" />
              <rect x="34" y="65" width="14" height="50" rx="3" fill="#2563eb" stroke="#60a5fa" />
              <rect x="117" y="60" width="14" height="60" rx="3" fill="#d97706" stroke="#fbbf24" />
              <rect x="133" y="65" width="14" height="50" rx="3" fill="#2563eb" stroke="#60a5fa" />

              <text x="82" y="160" textAnchor="middle" fill="#94a3b8" fontSize="8">Windings surround core</text>
              <text x="82" y="175" textAnchor="middle" fill="#34d399" fontSize="8" fontWeight="bold">High Voltage Transmission</text>
            </g>

            <g transform="translate(185, 10)">
              {/* Shell Type */}
              <rect x="0" y="0" width="165" height="195" rx="6" fill="#090d16" stroke="#a855f7" strokeWidth="1.5" />
              <text x="82" y="20" textAnchor="middle" fill="#c084fc" fontSize="10" fontWeight="bold">2. Shell-Type Design</text>
              
              {/* 3-legged Core */}
              <rect x="15" y="35" width="135" height="110" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
              <rect x="38" y="55" width="30" height="70" fill="#020617" stroke="#475569" strokeWidth="1.5" />
              <rect x="97" y="55" width="30" height="70" fill="#020617" stroke="#475569" strokeWidth="1.5" />
              
              {/* Central Winding */}
              <rect x="70" y="60" width="12" height="60" rx="2" fill="#d97706" stroke="#fbbf24" />
              <rect x="83" y="60" width="12" height="60" rx="2" fill="#2563eb" stroke="#60a5fa" />

              <text x="82" y="160" textAnchor="middle" fill="#94a3b8" fontSize="8">Core surrounds windings</text>
              <text x="82" y="175" textAnchor="middle" fill="#c084fc" fontSize="8" fontWeight="bold">High Mechanical Strength</text>
            </g>

            {/* Right: Oil Cooling System & Conservator */}
            <g transform="translate(360, 10)">
              <rect x="0" y="0" width="190" height="195" rx="6" fill="#090d16" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="95" y="20" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">3. Oil Cooling (ONAN/ONAF)</text>

              {/* Transformer Main Tank */}
              <rect x="35" y="75" width="90" height="90" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
              <rect x="38" y="78" width="84" height="84" fill="#0369a1" opacity="0.3" />
              
              {/* Core & Winding inside tank */}
              <rect x="60" y="95" width="40" height="50" rx="3" fill="#b45309" stroke="#fbbf24" strokeWidth="1" />
              <text x="80" y="125" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">Active Unit</text>

              {/* Conservator Tank on top */}
              <rect x="45" y="35" width="50" height="20" rx="6" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
              <text x="70" y="48" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="bold">Conservator</text>

              {/* Pipe connecting main tank to conservator with Buchholz relay */}
              <path d="M 60 75 L 60 55" stroke="#94a3b8" strokeWidth="3" />
              <circle cx="60" cy="65" r="4" fill="#ef4444" stroke="#fff" strokeWidth="1" />
              <text x="48" y="68" textAnchor="end" fill="#ef4444" fontSize="7" fontWeight="bold">Buchholz</text>

              {/* Silica Gel Breather */}
              <path d="M 95 45 L 110 45 L 110 65" stroke="#94a3b8" strokeWidth="2" fill="none" />
              <rect x="105" y="65" width="10" height="15" rx="2" fill="#0284c7" stroke="#38bdf8" strokeWidth="1" />
              <text x="120" y="76" fill="#38bdf8" fontSize="7" fontWeight="bold">Breather</text>

              {/* Radiator Cooling Tubes */}
              <path d="M 125 90 C 145 90, 145 150, 125 150" stroke="#f59e0b" strokeWidth="3" fill="none" />
              <path d="M 125 100 C 155 100, 155 140, 125 140" stroke="#f59e0b" strokeWidth="3" fill="none" />
              <text x="150" y="123" textAnchor="middle" fill="#f59e0b" fontSize="7" fontWeight="bold">Radiator</text>

              {/* Cooling Fans for ONAF */}
              <circle cx="165" cy="120" r="10" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
              <text x="165" y="123" textAnchor="middle" fill="#10b981" fontSize="7" fontWeight="bold">Fan</text>

              <text x="95" y="180" textAnchor="middle" fill="#10b981" fontSize="8" fontWeight="bold">Dielectric Oil + Convection</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Transformer Structural Types (Core vs Shell) and Industrial Cooling Subsystems"}
          </p>
        </div>
      );

    case 'transformer-equivalent-circuit':
    case 'circuit-transformer-equivalent-circuit':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 560 220" className="w-full max-w-xl h-56">
            {/* Input Terminals V1 */}
            <circle cx="30" cy="50" r="4" fill="#38bdf8" />
            <circle cx="30" cy="170" r="4" fill="#38bdf8" />
            <text x="25" y="115" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">V1</text>
            
            {/* Primary Main Line */}
            <path d="M 30 50 L 70 50" stroke="#38bdf8" strokeWidth="2" />
            <path d="M 30 170 L 530 170" stroke="#64748b" strokeWidth="2" />

            {/* Primary Resistance R1 */}
            <g transform="translate(70, 50)">
              <rect x="0" y="-10" width="30" height="20" rx="3" fill="#1e293b" stroke="#fbbf24" strokeWidth="1.5" />
              <text x="15" y="-15" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold">R1</text>
              <text x="15" y="5" textAnchor="middle" fill="#fff" fontSize="8">Copper</text>
            </g>

            {/* Primary Leakage Reactance X1 */}
            <g transform="translate(110, 50)">
              <path d="M 0 0 L 10 0 C 15 -12, 25 -12, 30 0 C 35 -12, 45 -12, 50 0 L 60 0" stroke="#38bdf8" strokeWidth="2" fill="none" />
              <text x="30" y="-15" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">jX1</text>
            </g>

            {/* Node before Shunt Branch */}
            <circle cx="190" cy="50" r="3.5" fill="#fff" />
            <circle cx="190" cy="170" r="3.5" fill="#fff" />
            <path d="M 170 50 L 190 50 L 190 70" stroke="#38bdf8" strokeWidth="2" />
            <path d="M 190 150 L 190 170" stroke="#38bdf8" strokeWidth="2" />

            {/* Shunt Core Branch (Rc || jXm) */}
            <g transform="translate(165, 70)">
              {/* Branch split */}
              <path d="M 25 0 L 5 0 L 5 15" stroke="#94a3b8" strokeWidth="1.5" />
              <path d="M 25 0 L 45 0 L 45 15" stroke="#94a3b8" strokeWidth="1.5" />

              {/* Rc (Core Loss) */}
              <rect x="-5" y="15" width="20" height="40" rx="2" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="5" y="38" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">Rc</text>
              <text x="-8" y="38" textAnchor="end" fill="#f59e0b" fontSize="7">Ic</text>

              {/* Xm (Magnetizing) */}
              <path d="M 45 15 C 55 20, 55 30, 45 35 C 55 40, 55 50, 45 55" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
              <text x="58" y="38" fill="#38bdf8" fontSize="8" fontWeight="bold">jXm</text>
              <text x="38" y="38" textAnchor="end" fill="#38bdf8" fontSize="7">Im</text>

              {/* Branch join */}
              <path d="M 5 55 L 5 70 L 25 70" stroke="#94a3b8" strokeWidth="1.5" />
              <path d="M 45 55 L 45 70 L 25 70" stroke="#94a3b8" strokeWidth="1.5" />
              <text x="25" y="85" textAnchor="middle" fill="#c084fc" fontSize="8" fontWeight="bold">No-Load I0</text>
            </g>

            {/* Referred Secondary Line (Primary Referred Model) */}
            <path d="M 190 50 L 280 50" stroke="#38bdf8" strokeWidth="2" />
            <path d="M 235 45 L 245 50 L 235 55 Z" fill="#38bdf8" />
            <text x="240" y="40" textAnchor="middle" fill="#38bdf8" fontSize="8" fontWeight="bold">I2' = I2/a</text>

            {/* Referred Secondary Resistance R2' */}
            <g transform="translate(280, 50)">
              <rect x="0" y="-10" width="35" height="20" rx="3" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
              <text x="17" y="-15" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="bold">R2' = a²R2</text>
              <text x="17" y="5" textAnchor="middle" fill="#fff" fontSize="8">Referred</text>
            </g>

            {/* Referred Secondary Reactance X2' */}
            <g transform="translate(325, 50)">
              <path d="M 0 0 L 10 0 C 15 -12, 25 -12, 30 0 C 35 -12, 45 -12, 50 0 L 60 0" stroke="#10b981" strokeWidth="2" fill="none" />
              <text x="30" y="-15" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="bold">jX2' = ja²X2</text>
            </g>

            {/* Output Load Terminal V2' */}
            <path d="M 385 50 L 460 50" stroke="#38bdf8" strokeWidth="2" />
            <g transform="translate(460, 50)">
              <rect x="0" y="15" width="30" height="90" rx="4" fill="#0f172a" stroke="#a855f7" strokeWidth="2" />
              <text x="15" y="55" textAnchor="middle" fill="#c084fc" fontSize="9" fontWeight="bold">ZL'</text>
              <text x="15" y="70" textAnchor="middle" fill="#94a3b8" fontSize="8">Load</text>
              <path d="M 15 0 L 15 15" stroke="#38bdf8" strokeWidth="2" />
              <path d="M 15 105 L 15 120" stroke="#64748b" strokeWidth="2" />
            </g>

            <circle cx="510" cy="50" r="4" fill="#c084fc" />
            <circle cx="510" cy="170" r="4" fill="#c084fc" />
            <text x="525" y="115" fill="#c084fc" fontSize="11" fontWeight="bold">V2' = aV2</text>

            {/* Equivalent Formulas Summary at Bottom */}
            <rect x="40" y="185" width="480" height="24" rx="4" fill="#090d16" stroke="#334155" />
            <text x="280" y="201" textAnchor="middle" fill="#38bdf8" fontSize="9.5" fontFamily="monospace">
              Req1 = R1 + a²R2  |  Xeq1 = X1 + a²X2  |  |Zeq1| = √(Req1² + Xeq1²)
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Complete Transformer Equivalent Circuit Referred to Primary Side (Exact Model)"}
          </p>
        </div>
      );

    case 'transformer-protection':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-xl border border-slate-800 text-white w-full">
          <svg viewBox="0 0 560 260" className="w-full max-w-2xl h-56">
            <defs>
              <linearGradient id="protOilGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#0369a1" stopOpacity="0.45" />
              </linearGradient>
            </defs>

            {/* Differential Protection Zone Boundary (87T) */}
            <rect x="35" y="15" width="490" height="230" rx="10" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="6 4" />
            <rect x="45" y="6" width="180" height="18" rx="3" fill="#451a03" stroke="#b45309" strokeWidth="1" />
            <text x="135" y="19" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold" fontFamily="monospace">
              DIFFERENTIAL ZONE (87T)
            </text>

            {/* Main Transformer Tank */}
            <rect x="140" y="80" width="280" height="145" rx="8" fill="url(#protOilGrad)" stroke="#38bdf8" strokeWidth="2.5" />
            <text x="280" y="215" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">Main Tank (Mineral Oil Filled)</text>

            {/* Core & Windings inside */}
            <rect x="180" y="115" width="55" height="75" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
            <rect x="187" y="122" width="41" height="61" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="207" y="156" textAnchor="middle" fill="#fcd34d" fontSize="9" fontWeight="bold">HV</text>

            <rect x="325" y="115" width="55" height="75" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
            <rect x="332" y="122" width="41" height="61" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="352" y="156" textAnchor="middle" fill="#7dd3fc" fontSize="9" fontWeight="bold">LV</text>

            <rect x="250" y="120" width="60" height="65" rx="2" fill="#334155" stroke="#94a3b8" strokeWidth="1" />
            <text x="280" y="156" textAnchor="middle" fill="#e2e8f0" fontSize="8.5">Core</text>

            {/* Conservator Tank */}
            <rect x="285" y="26" width="115" height="34" rx="10" fill="#1e293b" stroke="#0ea5e9" strokeWidth="2" />
            <text x="342" y="47" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">Conservator Tank</text>

            {/* Pipe to conservator */}
            <path d="M 270 80 L 270 50 L 285 50" fill="none" stroke="#0ea5e9" strokeWidth="4" />

            {/* Buchholz Relay on Pipe */}
            <rect x="256" y="55" width="28" height="20" rx="3" fill="#7f1d1d" stroke="#ef4444" strokeWidth="1.5" />
            <text x="270" y="68" textAnchor="middle" fill="#fca5a5" fontSize="7.5" fontWeight="bold">BUCH</text>

            {/* Silica Gel Breather */}
            <path d="M 400 43 L 425 43 L 425 68" fill="none" stroke="#64748b" strokeWidth="2" />
            <rect x="415" y="68" width="20" height="28" rx="3" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1.5" />
            <text x="425" y="85" textAnchor="middle" fill="#a5b4fc" fontSize="6.5">Breather</text>

            {/* Pressure Relief Device (PRD) */}
            <rect x="155" y="65" width="24" height="15" rx="2" fill="#831843" stroke="#f43f5e" strokeWidth="1.5" />
            <text x="167" y="76" textAnchor="middle" fill="#fda4af" fontSize="7" fontWeight="bold">PRD</text>

            {/* OTI / WTI Temperature Probes */}
            <circle cx="230" cy="95" r="7" fill="#b45309" stroke="#fbbf24" strokeWidth="1.5" />
            <text x="230" y="98" textAnchor="middle" fill="#fff" fontSize="6" fontWeight="bold">T°</text>

            {/* Primary Bushing & CT (HV Side) */}
            <rect x="195" y="70" width="24" height="15" rx="3" fill="#475569" stroke="#94a3b8" />
            <line x1="207" y1="70" x2="207" y2="40" stroke="#f59e0b" strokeWidth="2.5" />
            <line x1="207" y1="40" x2="60" y2="40" stroke="#f59e0b" strokeWidth="2.5" />
            
            {/* Primary Current Transformer CT1 */}
            <circle cx="95" cy="40" r="11" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
            <text x="95" y="43" textAnchor="middle" fill="#fcd34d" fontSize="7" fontWeight="bold">CT₁</text>

            {/* Primary Surge Arrester */}
            <path d="M 60 40 L 60 65" stroke="#f59e0b" strokeWidth="2" />
            <rect x="52" y="65" width="16" height="22" rx="2" fill="#312e81" stroke="#a78bfa" strokeWidth="1.5" />
            <line x1="60" y1="87" x2="60" y2="95" stroke="#64748b" strokeWidth="1.5" />
            <path d="M 54 95 L 66 95 M 56 98 L 64 98 M 58 101 L 62 101" stroke="#64748b" strokeWidth="1.5" />
            <text x="60" y="112" textAnchor="middle" fill="#c4b5fd" fontSize="7">LA</text>

            {/* Secondary Bushing & CT (LV Side) */}
            <rect x="340" y="70" width="24" height="15" rx="3" fill="#475569" stroke="#94a3b8" />
            <line x1="352" y1="70" x2="352" y2="40" stroke="#38bdf8" strokeWidth="2.5" />
            <line x1="352" y1="40" x2="495" y2="40" stroke="#38bdf8" strokeWidth="2.5" />

            {/* Secondary Current Transformer CT2 */}
            <circle cx="465" cy="40" r="11" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
            <text x="465" y="43" textAnchor="middle" fill="#7dd3fc" fontSize="7" fontWeight="bold">CT₂</text>

            {/* Differential Relay Unit (87T) */}
            <g transform="translate(230, 220)">
              <rect x="0" y="0" width="100" height="28" rx="4" fill="#090d16" stroke="#fbbf24" strokeWidth="1.5" />
              <text x="50" y="13" textAnchor="middle" fill="#fbbf24" fontSize="8" fontWeight="bold">87T DIFFERENTIAL</text>
              <text x="50" y="23" textAnchor="middle" fill="#94a3b8" fontSize="7">Id = |I1_sec - I2_sec|</text>
            </g>

            {/* Wiring from CTs to 87T */}
            <path d="M 95 51 L 95 234 L 230 234" fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3 3" />
            <path d="M 465 51 L 465 234 L 330 234" fill="none" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="3 3" />

            {/* Radiator Cooling Fins */}
            <rect x="120" y="105" width="20" height="85" rx="3" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
            <line x1="120" y1="125" x2="140" y2="125" stroke="#38bdf8" strokeWidth="1" />
            <line x1="120" y1="145" x2="140" y2="145" stroke="#38bdf8" strokeWidth="1" />
            <line x1="120" y1="165" x2="140" y2="165" stroke="#38bdf8" strokeWidth="1" />
            <text x="130" y="202" textAnchor="middle" fill="#64748b" fontSize="7">Fins</text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Comprehensive Transformer Protection Architecture (87T Zone, Buchholz, PRD, OTI/WTI & CTs)"}
          </p>
        </div>
      );

    case 'transformer-industrial-applications':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-xl border border-slate-800 text-white w-full">
          <svg viewBox="0 0 600 260" className="w-full max-w-2xl h-56">
            <defs>
              <linearGradient id="gridGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0369a1" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#059669" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Power Flow Path (Left to Right) */}
            {/* 1. Generation & Step-Up GSU */}
            <g transform="translate(20, 30)">
              <circle cx="30" cy="30" r="22" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <text x="30" y="34" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">GEN</text>
              <text x="30" y="64" textAnchor="middle" fill="#94a3b8" fontSize="8">11 kV</text>

              {/* Step-Up Transformer (GSU) */}
              <line x1="52" y1="30" x2="85" y2="30" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="95" cy="30" r="10" fill="none" stroke="#f59e0b" strokeWidth="2" />
              <circle cx="107" cy="30" r="10" fill="none" stroke="#f59e0b" strokeWidth="2" />
              <text x="101" y="55" textAnchor="middle" fill="#fcd34d" fontSize="7.5" fontWeight="bold">Step-Up GSU</text>
              <text x="101" y="65" textAnchor="middle" fill="#cbd5e1" fontSize="7">11/220 kV</text>
            </g>

            {/* 2. HV Transmission Line */}
            <g transform="translate(145, 30)">
              <line x1="0" y1="30" x2="110" y2="30" stroke="#f59e0b" strokeWidth="2.5" />
              <text x="55" y="20" textAnchor="middle" fill="#fcd34d" fontSize="8" fontWeight="bold">HV Grid: 220 kV</text>
            </g>

            {/* 3. Primary Grid Substation Transformer */}
            <g transform="translate(265, 30)">
              <circle cx="10" cy="30" r="10" fill="none" stroke="#10b981" strokeWidth="2" />
              <circle cx="22" cy="30" r="10" fill="none" stroke="#10b981" strokeWidth="2" />
              <text x="16" y="55" textAnchor="middle" fill="#34d399" fontSize="7.5" fontWeight="bold">Substation Tr.</text>
              <text x="16" y="65" textAnchor="middle" fill="#cbd5e1" fontSize="7">220/33 kV</text>
              <line x1="32" y1="30" x2="85" y2="30" stroke="#10b981" strokeWidth="2.5" />
            </g>

            {/* 4. Medium Voltage Industrial Feeder */}
            <g transform="translate(360, 30)">
              <text x="35" y="20" textAnchor="middle" fill="#34d399" fontSize="8" fontWeight="bold">MV: 33 kV Feeder</text>
              
              {/* Distribution Transformer */}
              <circle cx="85" cy="30" r="9" fill="none" stroke="#a855f7" strokeWidth="2" />
              <circle cx="97" cy="30" r="9" fill="none" stroke="#a855f7" strokeWidth="2" />
              <text x="91" y="55" textAnchor="middle" fill="#c084fc" fontSize="7.5" fontWeight="bold">Dist. Tr.</text>
              <text x="91" y="65" textAnchor="middle" fill="#cbd5e1" fontSize="7">33 kV/415 V</text>
            </g>

            {/* 5. Industrial Plant Low Voltage Busbar (415 V) */}
            <line x1="475" y1="100" x2="575" y2="100" stroke="#38bdf8" strokeWidth="4" />
            <text x="525" y="90" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">415 V / 240 V Plant Bus</text>

            {/* Connections down to loads */}
            <path d="M 470 60 L 470 100" stroke="#a855f7" strokeWidth="2" />
            
            {/* Load 1: Induction Motors / Drives */}
            <g transform="translate(485, 100)">
              <line x1="0" y1="0" x2="0" y2="35" stroke="#38bdf8" strokeWidth="2" />
              <rect x="-15" y="35" width="30" height="24" rx="3" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="0" y="50" textAnchor="middle" fill="#38bdf8" fontSize="7.5" fontWeight="bold">Motors</text>
            </g>

            {/* Load 2: Plant Lighting & Auxiliary */}
            <g transform="translate(530, 100)">
              <line x1="0" y1="0" x2="0" y2="35" stroke="#38bdf8" strokeWidth="2" />
              <rect x="-15" y="35" width="30" height="24" rx="3" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="0" y="50" textAnchor="middle" fill="#fcd34d" fontSize="7.5" fontWeight="bold">Lighting</text>
            </g>

            {/* Load 3: 1:1 Isolation Transformer for Sensitive CNC / PLC */}
            <g transform="translate(565, 100)">
              <line x1="0" y1="0" x2="0" y2="15" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="0" cy="20" r="5" fill="none" stroke="#ec4899" strokeWidth="1.5" />
              <circle cx="0" cy="26" r="5" fill="none" stroke="#ec4899" strokeWidth="1.5" />
              <rect x="-12" y="35" width="24" height="24" rx="3" fill="#1e293b" stroke="#ec4899" strokeWidth="1.5" />
              <text x="0" y="49" textAnchor="middle" fill="#f472b6" fontSize="6.5" fontWeight="bold">PLC/CNC</text>
            </g>

            {/* 6. Renewable Solar PV & Inverter-Duty Transformer Branch */}
            <g transform="translate(60, 150)">
              <rect x="0" y="0" width="90" height="50" rx="4" fill="#0f172a" stroke="#eab308" strokeWidth="1.5" />
              <text x="45" y="18" textAnchor="middle" fill="#fde047" fontSize="8" fontWeight="bold">Solar PV Field</text>
              <text x="45" y="30" textAnchor="middle" fill="#94a3b8" fontSize="7">DC Power</text>
              <rect x="12" y="36" width="66" height="8" rx="1" fill="#eab308" opacity="0.3" />

              {/* Inverter */}
              <line x1="90" y1="25" x2="120" y2="25" stroke="#eab308" strokeWidth="2" />
              <rect x="120" y="10" width="55" height="30" rx="3" fill="#1e293b" stroke="#06b6d4" strokeWidth="1.5" />
              <text x="147" y="24" textAnchor="middle" fill="#22d3ee" fontSize="7.5" fontWeight="bold">Inverter</text>
              <text x="147" y="34" textAnchor="middle" fill="#94a3b8" fontSize="6.5">DC → 800V AC</text>

              {/* Solar Inverter-Duty Step-Up Transformer */}
              <line x1="175" y1="25" x2="200" y2="25" stroke="#06b6d4" strokeWidth="2" />
              <circle cx="208" cy="25" r="8" fill="none" stroke="#22c55e" strokeWidth="1.5" />
              <circle cx="218" cy="25" r="8" fill="none" stroke="#22c55e" strokeWidth="1.5" />
              <text x="213" y="47" textAnchor="middle" fill="#4ade80" fontSize="7" fontWeight="bold">Solar Step-Up</text>
              <text x="213" y="57" textAnchor="middle" fill="#94a3b8" fontSize="6.5">0.8 kV / 33 kV</text>

              {/* Tie line into 33 kV MV feeder */}
              <path d="M 226 25 L 340 25 L 340 -90" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="3 3" />
              <text x="280" y="18" textAnchor="middle" fill="#4ade80" fontSize="7">Green Grid Feed (33 kV)</text>
            </g>

            {/* Summary Tag */}
            <rect x="30" y="225" width="540" height="24" rx="4" fill="#090d16" stroke="#334155" />
            <text x="300" y="241" textAnchor="middle" fill="#38bdf8" fontSize="9" fontFamily="monospace">
              Generation (GSU 11/220kV) → Grid (220/33kV) → Plant (33kV/415V) + Solar Inverter Duty (0.8/33kV)
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Single-Line Diagram of Complete Power Flow from Generation to Industrial Distribution & Solar Interface"}
          </p>
        </div>
      );

    case 'circuit-ch10-faraday-induction-apparatus':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 250" className="w-full max-w-xl h-60">
            <defs>
              <linearGradient id="ch10MagNGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#b91c1c" />
              </linearGradient>
              <linearGradient id="ch10MagSGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
              <marker id="ch10ArrowGlow" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
                <path d="M 0 0 L 6 3 L 0 6 z" fill="#38bdf8" />
              </marker>
              <marker id="ch10VelocityArrow" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
                <path d="M 0 0 L 6 3 L 0 6 z" fill="#f59e0b" />
              </marker>
            </defs>

            {/* Title / Schematic Header */}
            <text x="270" y="24" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
              Faraday's Electromagnetic Induction Discovery Apparatus
            </text>

            {/* Moving Bar Magnet */}
            <g transform="translate(60, 65)">
              {/* South Pole */}
              <rect x="0" y="0" width="50" height="34" rx="3" fill="url(#ch10MagSGrad)" stroke="#1e3a8a" strokeWidth="1.5" />
              <text x="25" y="22" fill="#ffffff" fontWeight="bold" fontSize="16" textAnchor="middle">S</text>
              {/* North Pole */}
              <rect x="50" y="0" width="50" height="34" rx="3" fill="url(#ch10MagNGrad)" stroke="#7f1d1d" strokeWidth="1.5" />
              <text x="75" y="22" fill="#ffffff" fontWeight="bold" fontSize="16" textAnchor="middle">N</text>
              {/* Velocity vector */}
              <line x1="110" y1="17" x2="150" y2="17" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#ch10VelocityArrow)" />
              <text x="130" y="8" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">Motion (v)</text>
            </g>

            {/* Magnetic Flux Lines Linkage */}
            <g opacity="0.8">
              {[-20, 0, 20].map((yOffset, i) => (
                <path
                  key={i}
                  d={`M 160 ${82 + yOffset * 0.4} C 210 ${82 + yOffset * 1.5}, 240 ${82 + yOffset * 1.2}, 290 ${82 + yOffset * 0.8}`}
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                  markerEnd="url(#ch10ArrowGlow)"
                />
              ))}
            </g>

            {/* Solenoid Coil Form & Windings */}
            <g transform="translate(260, 50)">
              {/* Core Cylinder */}
              <rect x="0" y="10" width="140" height="44" rx="5" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
              <text x="70" y="36" fill="#64748b" fontSize="11" fontWeight="bold" textAnchor="middle">Iron Core (N turns)</text>

              {/* Helical Coil Turns */}
              {Array.from({ length: 8 }).map((_, i) => (
                <g key={i}>
                  <path
                    d={`M ${10 + i * 16} 8 C ${18 + i * 16} -6, ${22 + i * 16} 70, ${26 + i * 16} 56`}
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  {/* Current flow arrows on coil */}
                  <polygon points={`${20 + i * 16},26 ${24 + i * 16},22 ${24 + i * 16},30`} fill="#34d399" />
                </g>
              ))}
            </g>

            {/* Circuit Leads connecting to Galvanometer */}
            <path d="M 270 106 L 270 180 L 320 180" fill="none" stroke="#64748b" strokeWidth="2.5" />
            <path d="M 386 106 L 386 195 L 340 195 L 340 180" fill="none" stroke="#64748b" strokeWidth="2.5" />

            {/* Center-Zero Galvanometer */}
            <g transform="translate(330, 180)">
              <circle cx="0" cy="0" r="30" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
              {/* Scale Arc */}
              <path d="M -18 -8 A 20 20 0 0 1 18 -8" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="0" y1="-22" x2="0" y2="-17" stroke="#38bdf8" strokeWidth="2" />
              <text x="0" y="-8" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">0</text>
              <text x="-16" y="-6" fill="#f87171" fontSize="7" textAnchor="middle">-</text>
              <text x="16" y="-6" fill="#34d399" fontSize="7" textAnchor="middle">+</text>
              {/* Needle Deflected */}
              <line x1="0" y1="4" x2="14" y2="-18" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
              <circle cx="0" cy="0" r="3" fill="#ffffff" />
              <text x="0" y="16" fill="#e2e8f0" fontSize="9" fontWeight="bold" textAnchor="middle">Galvanometer (G)</text>
            </g>

            {/* Governing Mathematical Law Annotation */}
            <rect x="50" y="185" width="200" height="42" rx="6" fill="#090d16" stroke="#0284c7" strokeWidth="1.5" />
            <text x="150" y="202" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Faraday's Law of Induction</text>
            <text x="150" y="218" fill="#34d399" fontSize="12" fontWeight="bold" fontFamily="monospace" textAnchor="middle">e = - N · (dΦ / dt)</text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Relative motion between magnetic field lines and coil induces proportional electromotive force (e = -N dΦ/dt)"}
          </p>
        </div>
      );

    case 'circuit-ch10-lenz-law-flux-opposition':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 250" className="w-full max-w-xl h-60">
            <defs>
              <marker id="ch10LenzArrowL" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
                <path d="M 0 0 L 6 3 L 0 6 z" fill="#ef4444" />
              </marker>
              <marker id="ch10LenzArrowR" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
                <path d="M 0 0 L 6 3 L 0 6 z" fill="#38bdf8" />
              </marker>
            </defs>

            {/* Title */}
            <text x="270" y="24" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
              Lenz's Law: Dynamic Opposition to Magnetic Flux Change & Energy Conservation
            </text>

            {/* Case A: North Pole Approaching Coil (Left Panel) */}
            <g transform="translate(30, 45)">
              <rect x="0" y="0" width="225" height="155" rx="8" fill="#090d16" stroke="#334155" strokeWidth="1.5" />
              <text x="112" y="20" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">
                CASE 1: North Pole Entering (ΔΦ &gt; 0)
              </text>

              {/* Magnet N approaching */}
              <rect x="15" y="45" width="35" height="25" rx="2" fill="#ef4444" />
              <text x="32" y="62" fill="#ffffff" fontWeight="bold" fontSize="12" textAnchor="middle">N</text>
              {/* Velocity arrow */}
              <line x1="55" y1="57" x2="80" y2="57" stroke="#fbbf24" strokeWidth="2.5" markerEnd="url(#ch10VelocityArrow)" />
              <text x="67" y="48" fill="#fbbf24" fontSize="9" fontWeight="bold" textAnchor="middle">v →</text>

              {/* Coil Face */}
              <ellipse cx="140" cy="57" rx="14" ry="32" fill="none" stroke="#d97706" strokeWidth="3" />
              {/* Induced North Pole */}
              <circle cx="140" cy="57" r="12" fill="#ef4444" opacity="0.9" />
              <text x="140" y="61" fill="#ffffff" fontWeight="bold" fontSize="11" textAnchor="middle">N</text>

              {/* Opposing Repulsion Vectors */}
              <line x1="95" y1="57" x2="120" y2="57" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 2" />
              <text x="112" y="78" fill="#ef4444" fontSize="9" fontWeight="bold" textAnchor="middle">
                REPULSION (F_lenz ←)
              </text>

              {/* Bottom Outcome Tag */}
              <rect x="10" y="108" width="205" height="36" rx="4" fill="#1e293b" />
              <text x="112" y="122" fill="#38bdf8" fontSize="9" textAnchor="middle">
                Induced current creates N-pole to oppose entry
              </text>
              <text x="112" y="136" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle">
                Work done against repulsion = Electrical energy
              </text>
            </g>

            {/* Case B: North Pole Receding / Leaving (Right Panel) */}
            <g transform="translate(285, 45)">
              <rect x="0" y="0" width="225" height="155" rx="8" fill="#090d16" stroke="#334155" strokeWidth="1.5" />
              <text x="112" y="20" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">
                CASE 2: North Pole Leaving (ΔΦ &lt; 0)
              </text>

              {/* Magnet N receding */}
              <rect x="15" y="45" width="35" height="25" rx="2" fill="#ef4444" />
              <text x="32" y="62" fill="#ffffff" fontWeight="bold" fontSize="12" textAnchor="middle">N</text>
              {/* Velocity arrow to left */}
              <line x1="45" y1="57" x2="10" y2="57" stroke="#fbbf24" strokeWidth="2.5" markerEnd="url(#ch10VelocityArrow)" />
              <text x="25" y="48" fill="#fbbf24" fontSize="9" fontWeight="bold" textAnchor="middle">← v</text>

              {/* Coil Face */}
              <ellipse cx="140" cy="57" rx="14" ry="32" fill="none" stroke="#d97706" strokeWidth="3" />
              {/* Induced South Pole */}
              <circle cx="140" cy="57" r="12" fill="#3b82f6" opacity="0.9" />
              <text x="140" y="61" fill="#ffffff" fontWeight="bold" fontSize="11" textAnchor="middle">S</text>

              {/* Opposing Attraction Vectors */}
              <line x1="60" y1="57" x2="115" y2="57" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 2" />
              <text x="95" y="78" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">
                ATTRACTION (F_lenz →)
              </text>

              {/* Bottom Outcome Tag */}
              <rect x="10" y="108" width="205" height="36" rx="4" fill="#1e293b" />
              <text x="112" y="122" fill="#38bdf8" fontSize="9" textAnchor="middle">
                Induced current creates S-pole to pull magnet back
              </text>
              <text x="112" y="136" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle">
                Work done against attraction = Electrical energy
              </text>
            </g>

            {/* Bottom Energy Conservation Law Banner */}
            <rect x="30" y="212" width="480" height="26" rx="4" fill="#0369a1" opacity="0.2" stroke="#0284c7" />
            <text x="270" y="229" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              Energy Conservation: Mechanical Work Input ≡ Induced Electrical Energy + Joule Losses (I²Rt)
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Lenz's Law mandates that induced current polarity always mechanically resists the change in magnetic flux"}
          </p>
        </div>
      );

    case 'circuit-ch10-fleming-right-hand-rule':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 250" className="w-full max-w-xl h-60">
            <defs>
              <marker id="ch10VecB" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
                <path d="M 0 0 L 6 3 L 0 6 z" fill="#38bdf8" />
              </marker>
              <marker id="ch10VecV" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
                <path d="M 0 0 L 6 3 L 0 6 z" fill="#fbbf24" />
              </marker>
              <marker id="ch10VecI" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
                <path d="M 0 0 L 6 3 L 0 6 z" fill="#34d399" />
              </marker>
            </defs>

            {/* Header */}
            <text x="270" y="24" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
              Fleming's Right-Hand Rule (Generator Action) & Motional EMF (e = B · l · v · sin θ)
            </text>

            {/* Left Box: 3D Orthogonal Vector Triad */}
            <g transform="translate(40, 48)">
              <rect x="0" y="0" width="220" height="150" rx="8" fill="#090d16" stroke="#334155" strokeWidth="1.5" />
              <text x="110" y="20" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">
                Right-Hand Orthogonal Triad
              </text>

              {/* Origin at (90, 95) */}
              <g transform="translate(90, 95)">
                {/* Thumb Vector (Motion v) - Upward */}
                <line x1="0" y1="0" x2="0" y2="-55" stroke="#fbbf24" strokeWidth="4" markerEnd="url(#ch10VecV)" />
                <text x="12" y="-45" fill="#fbbf24" fontSize="11" fontWeight="bold">Thumb: Motion (v)</text>

                {/* Forefinger Vector (Field B) - Rightward */}
                <line x1="0" y1="0" x2="70" y2="0" stroke="#38bdf8" strokeWidth="4" markerEnd="url(#ch10VecB)" />
                <text x="75" y="14" fill="#38bdf8" fontSize="11" fontWeight="bold">Index: Field (B)</text>

                {/* Middle Finger Vector (Current I) - Down-Left perspective */}
                <line x1="0" y1="0" x2="-45" y2="35" stroke="#34d399" strokeWidth="4" markerEnd="url(#ch10VecI)" />
                <text x="-75" y="48" fill="#34d399" fontSize="11" fontWeight="bold">Middle: Current (I)</text>

                {/* Center Node */}
                <circle cx="0" cy="0" r="5" fill="#ffffff" />
              </g>

              <text x="110" y="140" fill="#94a3b8" fontSize="9" textAnchor="middle">
                Mutually perpendicular at 90°
              </text>
            </g>

            {/* Right Box: Physical Conductor Cutting Magnetic Field */}
            <g transform="translate(280, 48)">
              <rect x="0" y="0" width="220" height="150" rx="8" fill="#090d16" stroke="#334155" strokeWidth="1.5" />
              <text x="110" y="20" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">
                Physical Conductor in B-Field
              </text>

              {/* Pole N (Left) and Pole S (Right) */}
              <rect x="15" y="40" width="22" height="60" rx="2" fill="#ef4444" />
              <text x="26" y="74" fill="#ffffff" fontWeight="bold" fontSize="12" textAnchor="middle">N</text>

              <rect x="183" y="40" width="22" height="60" rx="2" fill="#3b82f6" />
              <text x="194" y="74" fill="#ffffff" fontWeight="bold" fontSize="12" textAnchor="middle">S</text>

              {/* Field lines B */}
              {[50, 70, 90].map((yP, i) => (
                <line key={i} x1="42" y1={yP} x2="178" y2={yP} stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#ch10VecB)" />
              ))}

              {/* Conductor Rod with velocity vector upward */}
              <circle cx="110" cy="70" r="10" fill="#475569" stroke="#f59e0b" strokeWidth="2" />
              {/* Dot = current towards viewer */}
              <circle cx="110" cy="70" r="3.5" fill="#34d399" />

              {/* Velocity vector upward */}
              <line x1="110" y1="60" x2="110" y2="35" stroke="#fbbf24" strokeWidth="3" markerEnd="url(#ch10VecV)" />
              <text x="125" y="45" fill="#fbbf24" fontSize="9" fontWeight="bold">v ↑</text>

              {/* Formula & Result label */}
              <text x="110" y="122" fill="#34d399" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
                e = B · l · v · sin(θ)
              </text>
              <text x="110" y="138" fill="#e2e8f0" fontSize="9" textAnchor="middle">
                Peak EMF at θ = 90° (sin 90° = 1)
              </text>
            </g>

            {/* Bottom Rule Comparison Bar */}
            <rect x="40" y="210" width="460" height="26" rx="4" fill="#0f172a" stroke="#475569" />
            <text x="270" y="227" fill="#fbbf24" fontSize="9" fontWeight="bold" textAnchor="middle">
              Right Hand: Generator (Motion + Field → Induced EMF) | Left Hand: Motor (Current + Field → Force)
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Fleming's Right-Hand Rule determines the direction of dynamically induced motional EMF in generators"}
          </p>
        </div>
      );

    case 'circuit-ch10-dynamically-induced-emf':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 240" className="w-full max-w-xl h-auto">
            <defs>
              <marker id="dynVecV" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#38bdf8" />
              </marker>
              <marker id="dynVecF" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#ef4444" />
              </marker>
              <marker id="dynCurI" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#10b981" />
              </marker>
            </defs>

            {/* Background Field Area */}
            <rect x="130" y="30" width="370" height="170" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            <text x="500" y="48" fill="#64748b" fontSize="10" fontWeight="bold" textAnchor="end" fontFamily="monospace">
              Uniform Magnetic Field B ⊗ (Into Page)
            </text>

            {/* Field X Marks */}
            {[170, 230, 290, 350, 410, 470].map((x) =>
              [60, 95, 130, 165].map((y) => (
                <g key={`${x}-${y}`} transform={`translate(${x}, ${y})`}>
                  <line x1="-5" y1="-5" x2="5" y2="5" stroke="#334155" strokeWidth="1.5" />
                  <line x1="-5" y1="5" x2="5" y2="-5" stroke="#334155" strokeWidth="1.5" />
                </g>
              ))
            )}

            {/* Conducting Rails */}
            <line x1="50" y1="60" x2="480" y2="60" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
            <line x1="50" y1="170" x2="480" y2="170" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />

            {/* Left End Load Resistor R */}
            <line x1="50" y1="60" x2="50" y2="90" stroke="#94a3b8" strokeWidth="3" />
            <rect x="36" y="90" width="28" height="50" rx="3" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
            <text x="50" y="119" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">R</text>
            <line x1="50" y1="140" x2="50" y2="170" stroke="#94a3b8" strokeWidth="3" />
            <text x="25" y="119" fill="#94a3b8" fontSize="9" textAnchor="end">Load</text>

            {/* Moving Conducting Rod */}
            <rect x="270" y="45" width="14" height="140" rx="3" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <text x="277" y="119" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle" transform="rotate(-90 277 119)">
              Length l
            </text>

            {/* Positive & Negative Terminals on Moving Rod */}
            <circle cx="277" cy="52" r="5" fill="#10b981" />
            <text x="277" y="55" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">+</text>
            <circle cx="277" cy="178" r="5" fill="#ef4444" />
            <text x="277" y="181" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">-</text>

            {/* Velocity Vector (Rightward) */}
            <line x1="284" y1="115" x2="360" y2="115" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#dynVecV)" />
            <text x="320" y="105" fill="#38bdf8" fontSize="11" fontWeight="bold">Velocity v →</text>

            {/* Opposing Lorentz Force Vector (Leftward) */}
            <line x1="270" y1="135" x2="200" y2="135" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#dynVecF)" />
            <text x="235" y="150" fill="#f87171" fontSize="9" fontWeight="bold">F_opp = B·i·l ←</text>

            {/* Current Flow Indicators */}
            <line x1="160" y1="60" x2="110" y2="60" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#dynCurI)" />
            <text x="135" y="50" fill="#10b981" fontSize="9" fontWeight="bold">i = e / R</text>
            <line x1="110" y1="170" x2="160" y2="170" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#dynCurI)" />

            {/* Bottom Formula Banner */}
            <rect x="40" y="210" width="460" height="24" rx="4" fill="#020617" stroke="#1e293b" />
            <text x="270" y="226" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              Motional EMF: e = B · l · v · sin(θ) | Peak EMF at θ = 90° (sin 90° = 1.0)
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Dynamically induced motional EMF: Physical conductor cuts magnetic flux B at velocity v"}
          </p>
        </div>
      );

    case 'circuit-ch10-statically-induced-emf':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 240" className="w-full max-w-xl h-auto">
            <defs>
              <marker id="fluxArr" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#a855f7" />
              </marker>
            </defs>

            {/* Laminated Iron Core */}
            <rect x="140" y="30" width="260" height="160" rx="8" fill="#1e293b" stroke="#64748b" strokeWidth="4" />
            <rect x="190" y="70" width="160" height="80" rx="4" fill="#020617" stroke="#64748b" strokeWidth="2" />

            {/* Magnetic Core Flux Path (Dashed with arrows) */}
            <rect x="165" y="50" width="210" height="120" rx="6" fill="none" stroke="#c084fc" strokeWidth="2" strokeDasharray="5 3" />
            <line x1="270" y1="50" x2="285" y2="50" stroke="#a855f7" strokeWidth="2.5" markerEnd="url(#fluxArr)" />
            <line x1="375" y1="110" x2="375" y2="125" stroke="#a855f7" strokeWidth="2.5" markerEnd="url(#fluxArr)" />
            <line x1="270" y1="170" x2="255" y2="170" stroke="#a855f7" strokeWidth="2.5" markerEnd="url(#fluxArr)" />
            <line x1="165" y1="110" x2="165" y2="95" stroke="#a855f7" strokeWidth="2.5" markerEnd="url(#fluxArr)" />
            <text x="270" y="44" fill="#c084fc" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              Alternating Flux Φ(t) = Φ_m sin(ωt)
            </text>

            {/* Stationary Primary Coil (Left Limb) */}
            <g transform="translate(140, 60)">
              {[-5, 15, 35, 55, 75, 95].map((yP, i) => (
                <rect key={i} x="-16" y={yP} width="16" height="12" rx="2" fill="#d97706" stroke="#fbbf24" strokeWidth="1" />
              ))}
              <text x="-25" y="55" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="end">
                Primary N₁ Turns
              </text>
            </g>

            {/* AC Supply to Primary */}
            <g transform="translate(45, 110)">
              <circle cx="0" cy="0" r="16" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <path d="M -8 0 Q -4 -8 0 0 T 8 0" fill="none" stroke="#38bdf8" strokeWidth="2" />
              <text x="0" y="28" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">V₁ (AC)</text>
              <line x1="16" y1="-8" x2="124" y2="-8" stroke="#38bdf8" strokeWidth="2" />
              <line x1="16" y1="8" x2="124" y2="8" stroke="#38bdf8" strokeWidth="2" />
            </g>

            {/* Stationary Secondary Coil (Right Limb) */}
            <g transform="translate(400, 60)">
              {[5, 30, 55, 80].map((yP, i) => (
                <rect key={i} x="0" y={yP} width="16" height="14" rx="2" fill="#0284c7" stroke="#38bdf8" strokeWidth="1" />
              ))}
              <text x="25" y="55" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="start">
                Secondary N₂ Turns
              </text>
            </g>

            {/* Secondary Output Load */}
            <g transform="translate(495, 110)">
              <rect x="-10" y="-20" width="20" height="40" rx="3" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
              <text x="0" y="4" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle">Load</text>
              <line x1="-79" y1="-15" x2="-10" y2="-15" stroke="#38bdf8" strokeWidth="2" />
              <line x1="-79" y1="15" x2="-10" y2="15" stroke="#38bdf8" strokeWidth="2" />
              <text x="0" y="32" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle">E₂ (RMS)</text>
            </g>

            {/* Zero Motion Badge */}
            <rect x="210" y="95" width="120" height="26" rx="4" fill="#0f172a" stroke="#10b981" />
            <text x="270" y="112" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle">
              Zero Physical Motion (v=0)
            </text>

            {/* Bottom Formula Banner */}
            <rect x="40" y="205" width="460" height="26" rx="4" fill="#020617" stroke="#1e293b" />
            <text x="270" y="222" fill="#c084fc" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              Statically Induced EMF: e = -N (dΦ/dt) | E_rms = 4.44 · f · N · Φ_m
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Statically induced EMF: Time-varying magnetic flux dΦ/dt induces voltage in stationary windings without motion"}
          </p>
        </div>
      );

    case 'circuit-ch10-self-induction-rl-transient':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 240" className="w-full max-w-xl h-auto">
            <defs>
              <marker id="rlCurI" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#10b981" />
              </marker>
            </defs>

            {/* Left Circuit Box: Schematic */}
            <rect x="30" y="20" width="260" height="175" rx="6" fill="#020617" stroke="#334155" strokeWidth="1.5" />
            <text x="160" y="38" fill="#94a3b8" fontSize="10" fontWeight="bold" textAnchor="middle">
              RL Series Circuit & Inductive Kick
            </text>

            {/* Circuit Loops */}
            <rect x="50" y="55" width="220" height="120" rx="6" fill="none" stroke="#475569" strokeWidth="2.5" />

            {/* DC Battery */}
            <g transform="translate(50, 115)">
              <circle cx="0" cy="0" r="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <text x="0" y="-2" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">+</text>
              <text x="0" y="9" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">-</text>
              <text x="-18" y="3" textAnchor="end" fill="#38bdf8" fontSize="9" fontWeight="bold">V_dc</text>
            </g>

            {/* Switch */}
            <g transform="translate(100, 55)">
              <circle cx="0" cy="0" r="3" fill="#94a3b8" />
              <circle cx="25" cy="0" r="3" fill="#94a3b8" />
              <line x1="0" y1="0" x2="25" y2="0" stroke="#10b981" strokeWidth="2.5" />
              <text x="12" y="-8" fill="#cbd5e1" fontSize="8" fontWeight="bold" textAnchor="middle">SW</text>
            </g>

            {/* Resistor R */}
            <g transform="translate(190, 55)">
              <rect x="-18" y="-8" width="36" height="16" rx="2" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="0" y="4" fill="#fbbf24" fontSize="9" fontWeight="bold" textAnchor="middle">R</text>
            </g>

            {/* Inductor L with Iron Core */}
            <g transform="translate(270, 115)">
              <line x1="12" y1="-25" x2="12" y2="25" stroke="#64748b" strokeWidth="2" />
              <line x1="15" y1="-25" x2="15" y2="25" stroke="#64748b" strokeWidth="2" />
              {[-20, -7, 6, 19].map((yP, i) => (
                <path key={i} d={`M 0 ${yP} C 12 ${yP - 6}, 12 ${yP + 6}, 0 ${yP + 6}`} fill="none" stroke="#38bdf8" strokeWidth="2.5" />
              ))}
              <text x="-8" y="4" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="end">L</text>
            </g>

            {/* Current Arrow */}
            <line x1="130" y1="175" x2="180" y2="175" stroke="#10b981" strokeWidth="2" markerEnd="url(#rlCurI)" />
            <text x="155" y="167" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">i(t)</text>

            {/* Right Box: Transient Curves */}
            <rect x="305" y="20" width="205" height="175" rx="6" fill="#020617" stroke="#334155" strokeWidth="1.5" />
            <text x="407" y="38" fill="#94a3b8" fontSize="10" fontWeight="bold" textAnchor="middle">
              Transient Response Curve
            </text>

            {/* Graph Axes */}
            <line x1="330" y1="165" x2="495" y2="165" stroke="#475569" strokeWidth="1.5" />
            <line x1="330" y1="55" x2="330" y2="165" stroke="#475569" strokeWidth="1.5" />
            <text x="495" y="178" fill="#94a3b8" fontSize="8" textAnchor="end">Time t</text>
            <text x="325" y="60" fill="#94a3b8" fontSize="8" textAnchor="end">i(t)</text>

            {/* Steady state asymptote I₀ = V/R */}
            <line x1="330" y1="80" x2="495" y2="80" stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" />
            <text x="495" y="76" fill="#34d399" fontSize="8" textAnchor="end">I₀ = V/R</text>

            {/* Growth Curve */}
            <path
              d="M 330 165 Q 360 90, 490 82"
              fill="none"
              stroke="#10b981"
              strokeWidth="2.5"
            />

            {/* 1 Tau Marker */}
            <line x1="365" y1="55" x2="365" y2="165" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 2" />
            <text x="365" y="177" fill="#fbbf24" fontSize="8" textAnchor="middle">1τ = L/R</text>
            <circle cx="365" cy="111" r="3.5" fill="#fbbf24" />
            <text x="375" y="114" fill="#fbbf24" fontSize="8" fontWeight="bold">63.2% I₀</text>

            {/* Bottom Formula Banner */}
            <rect x="30" y="205" width="480" height="26" rx="4" fill="#020617" stroke="#1e293b" />
            <text x="270" y="222" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              Self-Induced EMF: e = -L (di/dt) | Energy Stored: W = ½ L I² | Time Constant: τ = L/R
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Self-induction in RL circuits: Exponential current growth i(t)=I₀(1-e^(-t/τ)), 63.2% rise at 1τ, and stored energy W=½LI²"}
          </p>
        </div>
      );

    case 'circuit-ch10-mutual-induction':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 240" className="w-full max-w-lg h-56">
            <defs>
              <marker id="arrow-mi" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
              </marker>
              <marker id="arrow-flux-mi" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#fbbf24" />
              </marker>
            </defs>

            {/* Core Background / Mutual Coupling Area */}
            <rect x="180" y="30" width="180" height="150" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
            <text x="270" y="50" fill="#94a3b8" fontSize="10" fontWeight="bold" textAnchor="middle">Mutual Magnetic Coupling (M)</text>

            {/* Primary Circuit (Left) */}
            <g transform="translate(30, 30)">
              {/* AC Source */}
              <circle cx="40" cy="75" r="18" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
              <path d="M 32 75 Q 36 68 40 75 Q 44 82 48 75" fill="none" stroke="#38bdf8" strokeWidth="2" />
              <text x="40" y="105" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">v₁(t) = V₁ sin(ωt)</text>

              {/* Connecting Wires */}
              <line x1="40" y1="57" x2="40" y2="25" stroke="#38bdf8" strokeWidth="2" />
              <line x1="40" y1="25" x2="130" y2="25" stroke="#38bdf8" strokeWidth="2" />
              <line x1="40" y1="93" x2="40" y2="125" stroke="#38bdf8" strokeWidth="2" />
              <line x1="40" y1="125" x2="130" y2="125" stroke="#38bdf8" strokeWidth="2" />

              {/* Current Arrow */}
              <path d="M 70 25 L 85 25" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow-mi)" />
              <text x="75" y="18" fill="#38bdf8" fontSize="10" fontWeight="bold">i₁(t)</text>

              {/* Primary Coil (N₁ turns) */}
              <rect x="130" y="20" width="24" height="110" rx="4" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
              <text x="142" y="78" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle" transform="rotate(-90 142 78)">Coil 1 (N₁, L₁)</text>
              
              {/* Primary Dot Polarity */}
              <circle cx="124" cy="28" r="4" fill="#f43f5e" />
              <text x="114" y="32" fill="#f43f5e" fontSize="9" fontWeight="bold">●</text>
            </g>

            {/* Mutual Flux Path (Center) */}
            <g transform="translate(180, 75)">
              <path d="M 10 30 Q 90 0 170 30" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeDasharray="6 3" markerEnd="url(#arrow-flux-mi)" />
              <path d="M 170 45 Q 90 75 10 45" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeDasharray="6 3" markerEnd="url(#arrow-flux-mi)" />
              <text x="90" y="30" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">Mutual Flux Φ₂₁</text>
              <text x="90" y="44" fill="#e2e8f0" fontSize="9" textAnchor="middle">λ₂₁ = N₂ · Φ₂₁ = M · i₁</text>
            </g>

            {/* Secondary Circuit (Right) */}
            <g transform="translate(350, 30)">
              {/* Secondary Coil (N₂ turns) */}
              <rect x="30" y="20" width="24" height="110" rx="4" fill="#10b981" stroke="#34d399" strokeWidth="2" />
              <text x="42" y="78" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle" transform="rotate(90 42 78)">Coil 2 (N₂, L₂)</text>

              {/* Secondary Dot Polarity */}
              <circle cx="60" cy="28" r="4" fill="#f43f5e" />
              <text x="68" y="32" fill="#f43f5e" fontSize="9" fontWeight="bold">●</text>

              {/* Connecting Wires */}
              <line x1="54" y1="25" x2="130" y2="25" stroke="#34d399" strokeWidth="2" />
              <line x1="54" y1="125" x2="130" y2="125" stroke="#34d399" strokeWidth="2" />

              {/* Voltmeter / Induced EMF Output */}
              <circle cx="130" cy="75" r="18" fill="#1e293b" stroke="#34d399" strokeWidth="2" />
              <text x="130" y="80" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">e₂</text>
              <line x1="130" y1="25" x2="130" y2="57" stroke="#34d399" strokeWidth="2" />
              <line x1="130" y1="93" x2="130" y2="125" stroke="#34d399" strokeWidth="2" />
              <text x="130" y="105" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">e₂ = -M (di₁/dt)</text>
            </g>

            {/* Bottom Equation Ribbon */}
            <rect x="20" y="195" width="500" height="34" rx="6" fill="#020617" stroke="#1e293b" />
            <text x="270" y="216" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              Mutual Inductance: M = (N₂ · Φ₂₁) / i₁ = μ₀ μ_r N₁ N₂ A / l | Induced EMF: e₂ = -M · (di₁/dt)
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Mutual Induction: AC current in Coil 1 induces alternating flux Φ₂₁ linking Coil 2, producing mutual EMF e₂ = -M (di₁/dt)"}
          </p>
        </div>
      );

    case 'circuit-ch10-coefficient-of-coupling':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 240" className="w-full max-w-lg h-56">
            {/* Magnetic Core Ring */}
            <rect x="50" y="30" width="440" height="150" rx="20" fill="none" stroke="#475569" strokeWidth="18" />
            <rect x="90" y="65" width="360" height="80" rx="10" fill="#020617" stroke="#334155" strokeWidth="2" />

            {/* Mutual Magnetic Flux Path (Inside Core) */}
            <rect x="70" y="47" width="400" height="116" rx="15" fill="none" stroke="#fbbf24" strokeWidth="3" strokeDasharray="8 4" />
            <text x="270" y="44" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">Mutual Core Flux Φ_m (Linked)</text>

            {/* Primary Winding (Left Leg) */}
            <g transform="translate(40, 55)">
              <rect x="0" y="0" width="38" height="100" rx="4" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
              <text x="19" y="55" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" transform="rotate(-90 19 55)">Coil 1 (L₁)</text>
              {/* Primary Leakage Flux Loop */}
              <ellipse cx="-15" cy="50" rx="14" ry="38" fill="none" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 3" />
              <text x="-20" y="53" fill="#f43f5e" fontSize="8" fontWeight="bold" textAnchor="end">Leakage Φ_l1</text>
            </g>

            {/* Secondary Winding (Right Leg) */}
            <g transform="translate(462, 55)">
              <rect x="0" y="0" width="38" height="100" rx="4" fill="#10b981" stroke="#34d399" strokeWidth="2" />
              <text x="19" y="55" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" transform="rotate(90 19 55)">Coil 2 (L₂)</text>
              {/* Secondary Leakage Flux Loop */}
              <ellipse cx="53" cy="50" rx="14" ry="38" fill="none" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 3" />
              <text x="58" y="53" fill="#f43f5e" fontSize="8" fontWeight="bold" textAnchor="start">Leakage Φ_l2</text>
            </g>

            {/* Center Coupling Gauge Box */}
            <g transform="translate(190, 80)">
              <rect x="0" y="0" width="160" height="50" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="80" y="20" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Coupling Coefficient k</text>
              <text x="80" y="38" fill="#34d399" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="monospace">k = M / √(L₁ · L₂)</text>
            </g>

            {/* Bottom Formula Banner */}
            <rect x="20" y="195" width="500" height="34" rx="6" fill="#020617" stroke="#1e293b" />
            <text x="270" y="216" fill="#fbbf24" fontSize="10.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              Total Flux: Φ₁ = Φ_m + Φ_l1 | Ideal: k = 1.0 (Zero Leakage) | Series Aiding/Opposing: L_eq = L₁ + L₂ ± 2M
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Coefficient of Coupling k: Measures fraction of total flux linking both coils (0 ≤ k ≤ 1). Iron core k ≈ 0.98, air core k < 0.3"}
          </p>
        </div>
      );

    case 'circuit-ch10-transformer-emf-equation':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 250" className="w-full max-w-lg h-60">
            <defs>
              <marker id="arrow-flux-trans" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#fbbf24" />
              </marker>
            </defs>

            {/* Laminated Silicon Steel Core */}
            <rect x="110" y="25" width="320" height="160" rx="8" fill="#1e293b" stroke="#64748b" strokeWidth="3" />
            <rect x="170" y="60" width="200" height="90" rx="4" fill="#020617" stroke="#475569" strokeWidth="2" />

            {/* Alternating Core Flux Line */}
            <rect x="140" y="42" width="260" height="126" rx="6" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeDasharray="6 4" />
            <path d="M 270 42 L 285 42" stroke="#fbbf24" strokeWidth="3" markerEnd="url(#arrow-flux-trans)" />
            <text x="270" y="38" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">Φ(t) = Φ_m · sin(ωt)</text>

            {/* Primary Winding (Left) */}
            <g transform="translate(60, 45)">
              <rect x="40" y="5" width="22" height="110" rx="3" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
              <text x="51" y="62" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" transform="rotate(-90 51 62)">Primary N₁</text>
              
              {/* AC Input Terminals */}
              <line x1="0" y1="20" x2="40" y2="20" stroke="#38bdf8" strokeWidth="2" />
              <line x1="0" y1="100" x2="40" y2="100" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="0" cy="20" r="3" fill="#38bdf8" />
              <circle cx="0" cy="100" r="3" fill="#38bdf8" />
              <text x="-5" y="62" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="end">V₁ (Supply)</text>
              <text x="20" y="14" fill="#38bdf8" fontSize="9" fontWeight="bold">I₁</text>
              <text x="51" y="130" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">E₁ = 4.44 f N₁ Φ_m</text>
            </g>

            {/* Secondary Winding (Right) */}
            <g transform="translate(390, 45)">
              <rect x="28" y="5" width="22" height="110" rx="3" fill="#10b981" stroke="#34d399" strokeWidth="2" />
              <text x="39" y="62" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" transform="rotate(90 39 62)">Secondary N₂</text>
              
              {/* Load Terminals */}
              <line x1="50" y1="20" x2="90" y2="20" stroke="#34d399" strokeWidth="2" />
              <line x1="50" y1="100" x2="90" y2="100" stroke="#34d399" strokeWidth="2" />
              <circle cx="90" cy="20" r="3" fill="#34d399" />
              <circle cx="90" cy="100" r="3" fill="#34d399" />
              <rect x="78" y="45" width="24" height="30" rx="2" fill="#0f172a" stroke="#34d399" strokeWidth="1.5" />
              <text x="90" y="64" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle">Z_L</text>
              <text x="95" y="105" fill="#34d399" fontSize="10" fontWeight="bold">V₂ (Load)</text>
              <text x="70" y="14" fill="#34d399" fontSize="9" fontWeight="bold">I₂</text>
              <text x="39" y="130" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle">E₂ = 4.44 f N₂ Φ_m</text>
            </g>

            {/* Center Equality Badge */}
            <g transform="translate(200, 85)">
              <rect x="0" y="0" width="140" height="40" rx="4" fill="#0f172a" stroke="#fbbf24" strokeWidth="1" />
              <text x="70" y="16" fill="#fbbf24" fontSize="9" fontWeight="bold" textAnchor="middle">EMF Per Turn Equality</text>
              <text x="70" y="32" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">E₁/N₁ = E₂/N₂ = 4.44 f Φ_m</text>
            </g>

            {/* Bottom Formula Banner */}
            <rect x="20" y="200" width="500" height="36" rx="6" fill="#020617" stroke="#1e293b" />
            <text x="270" y="217" fill="#38bdf8" fontSize="10.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              Universal EMF: E = 4.44 · f · N · B_m · A_i | Transformation Ratio: K = V₂/V₁ = N₂/N₁ = I₁/I₂
            </text>
            <text x="270" y="230" fill="#94a3b8" fontSize="9" textAnchor="middle">
              Ideal Transformer: Zero Losses (P_in = P_out) | Reflected Load Impedance: Z_in = (N₁/N₂)² · Z_L
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Universal Transformer EMF: E = 4.44 · f · N · Φ_m, Form Factor = 1.11, E₁/N₁ = E₂/N₂ with 100% ideal power transfer"}
          </p>
        </div>
      );

    // ==========================================
    // CHAPTER 10: LESSON 10 - EDDY CURRENTS & LOSS MECHANISMS
    // ==========================================
    case 'circuit-ch10-eddy-current-solid-vs-laminated':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 240" className="w-full max-w-xl h-56">
            {/* Background Header Banner */}
            <rect x="15" y="10" width="510" height="26" rx="4" fill="#0f172a" stroke="#334155" />
            <text x="270" y="27" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">
              COMPARISON: SOLID UNLAMINATED CORE vs LAMINATED ELECTRICAL STEEL SHEET CORE
            </text>

            {/* Left: Solid Core with Giant Eddy Currents */}
            <g transform="translate(30, 45)">
              <rect x="0" y="0" width="220" height="145" rx="6" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
              <text x="110" y="20" fill="#f87171" fontSize="11" fontWeight="bold" textAnchor="middle">SOLID IRON CORE</text>
              
              {/* Giant eddy current loops */}
              <ellipse cx="110" cy="78" rx="80" ry="42" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="6 4" />
              <ellipse cx="110" cy="78" rx="50" ry="26" fill="none" stroke="#f97316" strokeWidth="2" />
              <ellipse cx="110" cy="78" rx="20" ry="10" fill="#dc2626" opacity="0.6" />

              {/* Flux cross symbols */}
              {[45, 110, 175].map((x) =>
                [50, 105].map((y) => (
                  <g key={`sflux-${x}-${y}`} opacity="0.4">
                    <circle cx={x} cy={y} r="5" fill="none" stroke="#38bdf8" />
                    <line x1={x-3} y1={y-3} x2={x+3} y2={y+3} stroke="#38bdf8" />
                    <line x1={x-3} y1={y+3} x2={x+3} y2={y-3} stroke="#38bdf8" />
                  </g>
                ))
              )}

              <rect x="15" y="118" width="190" height="20" rx="3" fill="#7f1d1d" />
              <text x="110" y="132" fill="#fecaca" fontSize="9" fontWeight="bold" textAnchor="middle">
                Massive I²R Heat: P_e ∝ t² (t = Full Block Width)
              </text>
            </g>

            {/* Right: Laminated Core with Micro Eddy Loops */}
            <g transform="translate(290, 45)">
              <rect x="0" y="0" width="220" height="145" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
              <text x="110" y="20" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">LAMINATED STEEL CORE</text>

              {/* 7 Thin laminations with varnish lines */}
              {[15, 45, 75, 105, 135, 165, 195].map((lx, idx) => (
                <g key={`lamin-${idx}`}>
                  <rect x={lx} y="30" width="24" height="82" rx="2" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
                  {/* Micro eddy loop inside each strip */}
                  <ellipse cx={lx + 12} cy="71" rx="8" ry="24" fill="none" stroke="#34d399" strokeWidth="1.2" strokeDasharray="3 2" />
                </g>
              ))}

              <rect x="15" y="118" width="190" height="20" rx="3" fill="#064e3b" />
              <text x="110" y="132" fill="#a7f3d0" fontSize="9" fontWeight="bold" textAnchor="middle">
                Varnish Insulates Sheets: Loss reduced by &gt;99%
              </text>
            </g>

            {/* Bottom Formula Banner */}
            <rect x="15" y="200" width="510" height="32" rx="4" fill="#020617" stroke="#1e293b" />
            <text x="270" y="220" fill="#38bdf8" fontSize="10.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              Eddy Current Loss: P_e = K_e · f² · B_m² · t² · V (Watts) | K_e = π² / (6·ρ)
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Eddy Current Loss Mechanism: Circulating I²R losses scale quadratically with lamination thickness (t²). Thin insulated laminations suppress circulating currents."}
          </p>
        </div>
      );

    // ==========================================
    // CHAPTER 10: LESSON 11 - ELEMENTARY AC GENERATOR
    // ==========================================
    case 'circuit-ch10-ac-generator-slip-rings':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 240" className="w-full max-w-xl h-56">
            {/* Magnetic Poles */}
            <rect x="25" y="30" width="70" height="150" rx="6" fill="#b91c1c" stroke="#f87171" strokeWidth="2" />
            <text x="60" y="115" fill="#ffffff" fontSize="24" fontWeight="bold" textAnchor="middle">N</text>

            <rect x="445" y="30" width="70" height="150" rx="6" fill="#1d4ed8" stroke="#60a5fa" strokeWidth="2" />
            <text x="480" y="115" fill="#ffffff" fontSize="24" fontWeight="bold" textAnchor="middle">S</text>

            {/* B-field arrows */}
            {[55, 90, 125, 155].map((y) => (
              <g key={`bac-${y}`}>
                <line x1="95" y1={y} x2="445" y2={y} stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.4" />
                <path d={`M 260 ${y} L 275 ${y}`} stroke="#38bdf8" strokeWidth="2" />
              </g>
            ))}
            <text x="270" y="45" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">Uniform Magnetic Field B →</text>

            {/* Rotating Armature Loop */}
            <line x1="210" y1="65" x2="330" y2="65" stroke="#fbbf24" strokeWidth="3.5" />
            <line x1="210" y1="65" x2="210" y2="155" stroke="#f87171" strokeWidth="4" />
            <text x="195" y="115" fill="#f87171" fontSize="10" fontWeight="bold">Side A</text>
            <line x1="330" y1="65" x2="330" y2="155" stroke="#38bdf8" strokeWidth="4" />
            <text x="345" y="115" fill="#38bdf8" fontSize="10" fontWeight="bold">Side B</text>

            {/* Rotation Arrow */}
            <path d="M 245 50 A 30 12 0 0 1 295 50" fill="none" stroke="#fbbf24" strokeWidth="2.5" />
            <text x="270" y="40" fill="#fbbf24" fontSize="9" fontWeight="bold" textAnchor="middle">Rotation ω</text>

            {/* Continuous Slip Rings */}
            <ellipse cx="255" cy="180" rx="14" ry="5" fill="#d97706" stroke="#fbbf24" strokeWidth="2" />
            <rect x="235" y="176" width="6" height="8" fill="#475569" stroke="#94a3b8" />
            <ellipse cx="285" cy="192" rx="14" ry="5" fill="#d97706" stroke="#fbbf24" strokeWidth="2" />
            <rect x="301" y="188" width="6" height="8" fill="#475569" stroke="#94a3b8" />

            {/* External AC Terminals */}
            <path d="M 235 180 L 160 180 L 160 215 L 210 215" fill="none" stroke="#f87171" strokeWidth="2" />
            <path d="M 307 192 L 380 192 L 380 215 L 330 215" fill="none" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="210" cy="215" r="4" fill="#f87171" />
            <circle cx="330" cy="215" r="4" fill="#38bdf8" />

            {/* AC Load Badge */}
            <rect x="235" y="204" width="70" height="22" rx="4" fill="#0f172a" stroke="#38bdf8" />
            <text x="270" y="219" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">~ AC LOAD</text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Elementary AC Generator: Rectangular coil rotating in uniform field with continuous slip rings produces pure alternating sinusoidal EMF e(t) = E_m sin(ωt)."}
          </p>
        </div>
      );

    // ==========================================
    // CHAPTER 10: LESSON 12 - ELEMENTARY DC GENERATOR
    // ==========================================
    case 'circuit-ch10-dc-generator-split-commutator':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 240" className="w-full max-w-xl h-56">
            {/* Magnetic Poles */}
            <rect x="25" y="30" width="70" height="150" rx="6" fill="#b91c1c" stroke="#f87171" strokeWidth="2" />
            <text x="60" y="115" fill="#ffffff" fontSize="24" fontWeight="bold" textAnchor="middle">N</text>

            <rect x="445" y="30" width="70" height="150" rx="6" fill="#1d4ed8" stroke="#60a5fa" strokeWidth="2" />
            <text x="480" y="115" fill="#ffffff" fontSize="24" fontWeight="bold" textAnchor="middle">S</text>

            {/* Magnetic Neutral Plane (MNP) dashed vertical */}
            <line x1="270" y1="15" x2="270" y2="225" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
            <text x="270" y="25" fill="#94a3b8" fontSize="8.5" textAnchor="middle">Magnetic Neutral Plane (MNP)</text>

            {/* Rotating Loop */}
            <line x1="220" y1="65" x2="320" y2="65" stroke="#fbbf24" strokeWidth="3.5" />
            <line x1="220" y1="65" x2="220" y2="155" stroke="#f87171" strokeWidth="4" />
            <line x1="320" y1="65" x2="320" y2="155" stroke="#38bdf8" strokeWidth="4" />

            {/* Split-Ring Commutator (Two semi-cylinders with gap) */}
            <g transform="translate(270, 185)">
              <path d="M -18 -8 A 20 8 0 0 1 -2 8 L -2 -8 Z" fill="#ef4444" stroke="#fbbf24" strokeWidth="1.5" />
              <path d="M 2 -8 L 2 8 A 20 8 0 0 1 18 -8 Z" fill="#0284c7" stroke="#fbbf24" strokeWidth="1.5" />
              <line x1="0" y1="-10" x2="0" y2="10" stroke="#ffffff" strokeWidth="2" />

              {/* Fixed Stationary Brushes */}
              <rect x="-28" y="-5" width="8" height="10" fill="#334155" stroke="#94a3b8" />
              <text x="-34" y="3" fill="#ef4444" fontSize="10" fontWeight="bold" textAnchor="end">(+) Brush</text>

              <rect x="20" y="-5" width="8" height="10" fill="#334155" stroke="#94a3b8" />
              <text x="34" y="3" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="start">(-) Brush</text>

              <line x1="-28" y1="0" x2="-60" y2="0" stroke="#ef4444" strokeWidth="2" />
              <line x1="28" y1="0" x2="60" y2="0" stroke="#38bdf8" strokeWidth="2" />
            </g>

            {/* External DC Load */}
            <rect x="225" y="210" width="90" height="22" rx="4" fill="#0f172a" stroke="#fbbf24" />
            <text x="270" y="225" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">
              ⎓ DC LOAD (|e(t)|)
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Elementary DC Generator: Split-ring commutator segments switch contact with stationary brushes as coil passes MNP, providing mechanical rectification to pulsating DC."}
          </p>
        </div>
      );

    // ==========================================
    // CHAPTER 10: LESSON 13 - SKIN & PROXIMITY EFFECTS
    // ==========================================
    case 'circuit-ch10-skin-proximity-current-profile':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 240" className="w-full max-w-xl h-56">
            {/* Header */}
            <rect x="20" y="10" width="500" height="26" rx="4" fill="#0f172a" stroke="#334155" />
            <text x="270" y="27" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">
              CURRENT DENSITY PROFILES: DC UNIFORM vs AC SKIN EFFECT vs PROXIMITY EFFECT
            </text>

            {/* Column 1: DC Uniform Distribution */}
            <g transform="translate(40, 50)">
              <circle cx="60" cy="65" r="45" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" />
              <text x="60" y="62" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">DC (0 Hz)</text>
              <text x="60" y="76" fill="#bae6fd" fontSize="8.5" textAnchor="middle">Uniform J</text>
              <rect x="0" y="125" width="120" height="20" rx="3" fill="#020617" stroke="#1e293b" />
              <text x="60" y="139" fill="#94a3b8" fontSize="9" textAnchor="middle">R_ac = R_dc</text>
            </g>

            {/* Column 2: AC Skin Effect */}
            <g transform="translate(190, 50)">
              {/* Outer shell (skin depth carrying current) */}
              <circle cx="70" cy="65" r="45" fill="#f59e0b" stroke="#fbbf24" strokeWidth="2" />
              {/* Inactive dead core */}
              <circle cx="70" cy="65" r="28" fill="#020617" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="70" y="60" fill="#64748b" fontSize="8.5" textAnchor="middle">Dead Zone</text>
              <text x="70" y="73" fill="#64748b" fontSize="7.5" textAnchor="middle">(J ≈ 0)</text>
              <text x="70" y="26" fill="#facc15" fontSize="9" fontWeight="bold" textAnchor="middle">Skin Depth δ</text>
              <rect x="10" y="125" width="120" height="20" rx="3" fill="#020617" stroke="#1e293b" />
              <text x="70" y="139" fill="#fbbf24" fontSize="9" textAnchor="middle">R_ac &gt; R_dc</text>
            </g>

            {/* Column 3: Proximity Effect (Opposing Currents) */}
            <g transform="translate(350, 50)">
              <circle cx="35" cy="65" r="32" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <circle cx="115" cy="65" r="32" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              {/* Crowded current crescent on adjacent inside faces */}
              <path d="M 35 33 A 32 32 0 0 1 67 65 A 32 32 0 0 1 35 97 Z" fill="#ef4444" />
              <path d="M 115 33 A 32 32 0 0 0 83 65 A 32 32 0 0 0 115 97 Z" fill="#ef4444" />
              <text x="75" y="68" fill="#fca5a5" fontSize="8" fontWeight="bold" textAnchor="middle">Crowded J</text>
              <rect x="15" y="125" width="120" height="20" rx="3" fill="#020617" stroke="#1e293b" />
              <text x="75" y="139" fill="#ef4444" fontSize="9" textAnchor="middle">Proximity Loss</text>
            </g>

            {/* Bottom Formula */}
            <rect x="20" y="200" width="500" height="30" rx="4" fill="#020617" stroke="#1e293b" />
            <text x="270" y="219" fill="#38bdf8" fontSize="10.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              Skin Depth: δ = √(2 / (ω·μ·σ)) = √(ρ / (π·f·μ)) | Mitigation: Litz wire, tubular conductors
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Skin & Proximity Effects: High-frequency internal flux crowds current into surface skin depth δ, increasing effective AC resistance. Proximity to adjacent conductors distorts current profiles."}
          </p>
        </div>
      );

    // ==========================================
    // CHAPTER 10: LESSON 14 - FARADAY HOMOPOLAR DISC
    // ==========================================
    case 'circuit-ch10-faraday-homopolar-disc':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 240" className="w-full max-w-xl h-56">
            {/* Axial B-field cross markers */}
            <g opacity="0.35">
              {[60, 120, 180, 240, 300, 360, 420, 480].map((x) =>
                [35, 75, 115, 155, 195].map((y) => (
                  <g key={`fdisc-${x}-${y}`}>
                    <circle cx={x} cy={y} r="5" fill="none" stroke="#38bdf8" />
                    <line x1={x-3} y1={y-3} x2={x+3} y2={y+3} stroke="#38bdf8" />
                    <line x1={x-3} y1={y+3} x2={x+3} y2={y-3} stroke="#38bdf8" />
                  </g>
                ))
              )}
            </g>

            {/* Copper Disc */}
            <circle cx="210" cy="120" r="85" fill="#b45309" stroke="#fbbf24" strokeWidth="2.5" />
            <circle cx="210" cy="120" r="14" fill="#0f172a" stroke="#94a3b8" strokeWidth="2" />
            <circle cx="210" cy="120" r="5" fill="#38bdf8" />

            {/* Radial Motional Vector */}
            <line x1="210" y1="120" x2="210" y2="45" stroke="#ef4444" strokeWidth="3" />
            <polygon points="206,45 214,45 210,38" fill="#ef4444" />
            <text x="218" y="85" fill="#fee2e2" fontSize="9" fontWeight="bold">Radial EMF: E = v × B</text>

            {/* Rim brush */}
            <rect x="198" y="32" width="24" height="10" fill="#334155" stroke="#cbd5e1" strokeWidth="1" />
            <text x="210" y="25" fill="#fbbf24" fontSize="9" fontWeight="bold" textAnchor="middle">Rim Brush (+)</text>

            {/* Center brush */}
            <text x="180" y="142" fill="#38bdf8" fontSize="9" fontWeight="bold">Axle Brush (-)</text>

            {/* Circuit wiring to Galvanometer */}
            <path d="M 210 32 L 210 15 L 430 15 L 430 85" fill="none" stroke="#fbbf24" strokeWidth="2.5" />
            <path d="M 210 120 L 330 120 L 330 155 L 430 155 L 430 135" fill="none" stroke="#38bdf8" strokeWidth="2.5" />

            {/* DC Galvanometer meter */}
            <g transform="translate(430, 110)">
              <circle cx="0" cy="0" r="28" fill="#020617" stroke="#10b981" strokeWidth="2" />
              <text x="0" y="4" fill="#10b981" fontSize="12" fontWeight="bold" textAnchor="middle">G</text>
              <line x1="0" y1="18" x2="10" y2="-15" stroke="#ef4444" strokeWidth="2" />
              <text x="0" y="42" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle">Steady DC Output</text>
            </g>

            {/* Bottom Formula */}
            <rect x="20" y="200" width="500" height="30" rx="4" fill="#020617" stroke="#1e293b" />
            <text x="270" y="219" fill="#fbbf24" fontSize="10.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              Homopolar EMF: E = ½ · B · ω · R² = B · π · R² · f | Pure Unidirectional Ripple-Free DC
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Faraday Homopolar Disc Generator: Rotation in an axial magnetic field induces radial Lorentz EMF E = ½·B·ω·R², yielding pure commutator-free DC."}
          </p>
        </div>
      );

    // ==========================================
    // CHAPTER 10: LESSON 15 - INDUCTION COILS & RUHMKORFF
    // ==========================================
    case 'circuit-ch10-ruhkorff-induction-coil':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 240" className="w-full max-w-xl h-56">
            {/* Laminated Soft Iron Wire Core */}
            <rect x="90" y="90" width="260" height="24" rx="4" fill="#334155" stroke="#64748b" strokeWidth="2" />
            <text x="220" y="106" fill="#e2e8f0" fontSize="9.5" fontWeight="bold" textAnchor="middle">
              Soft Iron Wire Core
            </text>

            {/* Primary Winding (Thick, Few Turns) */}
            {[115, 145, 175, 205, 235, 265, 295, 325].map((x) => (
              <rect key={`ruhk-pri-${x}`} x={x} y="82" width="12" height="40" rx="2" fill="#b45309" stroke="#fbbf24" strokeWidth="1" />
            ))}
            <text x="220" y="75" fill="#fbbf24" fontSize="9" fontWeight="bold" textAnchor="middle">Primary (N₁ Few Turns)</text>

            {/* Secondary Winding (Thousands of Turns) */}
            <rect x="110" y="45" width="220" height="24" rx="3" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="220" y="61" fill="#c7d2fe" fontSize="9" fontWeight="bold" textAnchor="middle">Secondary (N₂ Many Thousand Turns)</text>

            {/* Trembler Contact Breaker Hammer */}
            <g transform="translate(50, 75)">
              <line x1="20" y1="0" x2="20" y2="55" stroke="#94a3b8" strokeWidth="2.5" />
              <circle cx="34" cy="27" r="7" fill="#475569" />
              <circle cx="20" cy="27" r="3" fill="#facc15" />
              <rect x="-8" y="24" width="24" height="6" fill="#334155" />
              <text x="15" y="-5" fill="#cbd5e1" fontSize="8" fontWeight="bold" textAnchor="middle">Interrupter</text>
            </g>

            {/* Battery & Capacitor */}
            <g transform="translate(70, 185)">
              <circle cx="0" cy="0" r="14" fill="#0f172a" stroke="#fbbf24" strokeWidth="2" />
              <text x="0" y="4" fill="#fbbf24" fontSize="9" fontWeight="bold" textAnchor="middle">BAT</text>
            </g>
            {/* Spark-quenching capacitor */}
            <g transform="translate(30, 135)">
              <rect x="-14" y="0" width="28" height="18" rx="2" fill="#065f46" stroke="#34d399" strokeWidth="1" />
              <text x="0" y="12" fill="#6ee7b7" fontSize="7.5" fontWeight="bold" textAnchor="middle">CAP</text>
            </g>

            {/* Primary Wiring */}
            <path d="M 70 171 L 70 120 L 115 120" fill="none" stroke="#fbbf24" strokeWidth="2" />
            <path d="M 337 120 L 360 160 L 42 160 L 42 102" fill="none" stroke="#fbbf24" strokeWidth="2" />

            {/* Secondary Circuit to Spark Gap */}
            <path d="M 120 45 L 120 25 L 430 25 L 430 75" fill="none" stroke="#a855f7" strokeWidth="2" />
            <path d="M 320 45 L 320 38 L 400 38 L 400 125 L 430 125 L 430 95" fill="none" stroke="#a855f7" strokeWidth="2" />

            {/* Spark Gap Electrodes with Arc */}
            <g transform="translate(460, 85)">
              <line x1="-30" y1="-10" x2="-5" y2="-10" stroke="#cbd5e1" strokeWidth="3" />
              <line x1="-30" y1="10" x2="-5" y2="10" stroke="#cbd5e1" strokeWidth="3" />
              <path d="M -5 -10 Q 5 0 -5 10" stroke="#67e8f9" strokeWidth="2.5" fill="none" />
              <text x="15" y="4" fill="#a855f7" fontSize="10" fontWeight="bold">kV Spark Arc</text>
            </g>

            {/* Bottom Formula */}
            <rect x="20" y="200" width="500" height="30" rx="4" fill="#020617" stroke="#1e293b" />
            <text x="270" y="219" fill="#a855f7" fontSize="10.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              Induction Coil EMF: e₂ = -M · (di₁ / dt) | Capacitor accelerates break, delivering 20 kV+ pulses
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Ruhmkorff Induction Coil: Contact interrupter and parallel capacitor cause near-instantaneous magnetic collapse, stepping up low DC battery voltage to tens of thousands of volts."}
          </p>
        </div>
      );

    // ==========================================
    // CHAPTER 10: LESSON 16 - ELECTROMAGNETIC BRAKING & DAMPING
    // ==========================================
    case 'circuit-ch10-em-braking-damping-retarder':
    case 'circuit-ch10-eddy-current-brake-caliper':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 240" className="w-full max-w-xl h-56">
            {/* Header */}
            <rect x="20" y="10" width="500" height="26" rx="4" fill="#0f172a" stroke="#334155" />
            <text x="270" y="27" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">
              CONTACTLESS EDDY-CURRENT BRAKE: LENZ RETARDING FORCE F_b ∝ σ · B² · v
            </text>

            {/* Rotating Disc */}
            <g transform="translate(190, 120)">
              <circle cx="0" cy="0" r="75" fill="#b45309" stroke="#fbbf24" strokeWidth="2" />
              <circle cx="0" cy="0" r="14" fill="#0f172a" stroke="#94a3b8" strokeWidth="2" />
              <circle cx="0" cy="0" r="4" fill="#38bdf8" />
              {/* Disc Rotation velocity arrow */}
              <path d="M -35 -55 A 75 75 0 0 1 35 -55" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
              <text x="0" y="-62" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">Velocity v →</text>
            </g>

            {/* Electromagnet Brake Caliper */}
            <g transform="translate(260, 120)">
              {/* C-Core */}
              <path d="M -10 -45 L 45 -45 L 45 45 L -10 45 L -10 25 L 20 25 L 20 -25 L -10 -25 Z" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
              {/* Poles */}
              <rect x="-10" y="-30" width="22" height="12" fill="#b91c1c" />
              <text x="1" y="-21" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">N</text>
              <rect x="-10" y="18" width="22" height="12" fill="#1d4ed8" />
              <text x="1" y="27" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">S</text>

              {/* Swirling Eddy Currents under Caliper */}
              <ellipse cx="1" cy="-2" rx="16" ry="11" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" />
              {/* Retarding Force Arrow Opposing Velocity */}
              <line x1="-22" y1="-15" x2="-22" y2="25" stroke="#ef4444" strokeWidth="3" />
              <polygon points="-26,25 -18,25 -22,32" fill="#ef4444" />
              <text x="-26" y="5" fill="#ef4444" fontSize="8.5" fontWeight="bold" textAnchor="end">F_brake</text>
            </g>

            {/* Meter Damping Panel (Galvanometer / PMMC coil former) */}
            <g transform="translate(395, 60)">
              <rect x="0" y="0" width="125" height="120" rx="6" fill="#0f172a" stroke="#334155" />
              <text x="62" y="20" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">METER DAMPING</text>
              <text x="62" y="34" fill="#94a3b8" fontSize="7.5" textAnchor="middle">PMMC / Galvanometer</text>
              {/* Pointer scale */}
              <path d="M 25 75 A 50 50 0 0 1 100 75" fill="none" stroke="#64748b" strokeWidth="1.5" />
              <line x1="62" y1="85" x2="62" y2="52" stroke="#ef4444" strokeWidth="2" />
              <circle cx="62" cy="85" r="4" fill="#ffffff" />
              <text x="62" y="105" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">Deadbeat Damping</text>
            </g>

            {/* Bottom Formula */}
            <rect x="20" y="200" width="500" height="30" rx="4" fill="#020617" stroke="#1e293b" />
            <text x="270" y="219" fill="#ef4444" fontSize="10.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              Braking Torque: T_b ∝ B² · ω | Kinetic Energy → Joule Heat | F → 0 as v → 0 (Zero-lock requires mechanical brake)
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Electromagnetic Eddy-Current Braking: Relative motion through magnetic poles creates counter-torque converting kinetic energy into heat. Braking torque vanishes at rest."}
          </p>
        </div>
      );

    // ==========================================
    // CHAPTER 10: LESSON 17 - INDUCTION HEATING & MELTING
    // ==========================================
    case 'circuit-ch10-induction-heating-coil-workpiece':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 240" className="w-full max-w-xl h-56">
            {/* Header */}
            <rect x="20" y="10" width="500" height="26" rx="4" fill="#0f172a" stroke="#334155" />
            <text x="270" y="27" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">
              INDUCTION HEATING: HIGH-FREQUENCY MAGNETIC COUPLING & SKIN DEPTH (δ = √(ρ / π·f·μ))
            </text>

            {/* Power Source & Tank Capacitor */}
            <g transform="translate(60, 115)">
              <rect x="-40" y="-55" width="80" height="110" rx="6" fill="#0b1329" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="0" y="-35" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">HF INVERTER</text>
              <text x="0" y="-20" fill="#94a3b8" fontSize="8" textAnchor="middle">10 kHz - 400 kHz</text>
              <circle cx="0" cy="5" r="16" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
              <path d="M -8 5 Q -4 -3, 0 5 T 8 5" fill="none" stroke="#38bdf8" strokeWidth="2" />
              <text x="0" y="38" fill="#f59e0b" fontSize="8.5" fontWeight="bold" textAnchor="middle">Resonant Tank</text>
            </g>

            {/* Leads connecting to coil */}
            <line x1="100" y1="90" x2="160" y2="90" stroke="#f59e0b" strokeWidth="3" />
            <line x1="100" y1="140" x2="160" y2="140" stroke="#f59e0b" strokeWidth="3" />

            {/* Helical Work Coil & Heated Billet */}
            <g transform="translate(260, 115)">
              {/* Hot Workpiece Billet */}
              <rect x="-35" y="-60" width="70" height="120" rx="4" fill="#ea580c" stroke="#dc2626" strokeWidth="1.5" />
              {/* Cold core inside */}
              <rect x="-18" y="-60" width="36" height="120" fill="#475569" opacity="0.8" />
              <text x="0" y="-10" fill="#fef08a" fontSize="8.5" fontWeight="bold" textAnchor="middle">SKIN LAYER</text>
              <text x="0" y="5" fill="#ffffff" fontSize="7.5" textAnchor="middle">δ = 1.2 mm</text>
              <text x="0" y="20" fill="#94a3b8" fontSize="7" textAnchor="middle">Cold Core</text>

              {/* Copper Induction Coil Slices */}
              {[-50, -25, 0, 25, 50].map((yOff, idx) => (
                <g key={idx}>
                  <circle cx="-50" cy={yOff} r="8" fill="#b45309" stroke="#fbbf24" strokeWidth="1.5" />
                  <circle cx="-50" cy={yOff} r="4" fill="#0284c7" />
                  <circle cx="50" cy={yOff} r="8" fill="#b45309" stroke="#fbbf24" strokeWidth="1.5" />
                  <circle cx="50" cy={yOff} r="4" fill="#0284c7" />
                </g>
              ))}

              {/* Water cooling notation */}
              <text x="0" y="75" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">
                Water-Cooled Hollow Copper Coil
              </text>
            </g>

            {/* Eddy Current & Flux Profile Inset */}
            <g transform="translate(435, 115)">
              <rect x="-65" y="-55" width="130" height="110" rx="6" fill="#0f172a" stroke="#334155" />
              <text x="0" y="-38" fill="#38bdf8" fontSize="8.5" fontWeight="bold" textAnchor="middle">HEAT GENERATION</text>
              <circle cx="0" cy="5" r="28" fill="#ea580c" stroke="#ef4444" strokeWidth="1.5" />
              <circle cx="0" cy="5" r="14" fill="#1e293b" />
              <ellipse cx="0" cy="5" rx="20" ry="20" fill="none" stroke="#fef08a" strokeWidth="1.5" strokeDasharray="3 2" />
              <text x="0" y="45" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">
                P = I²_eddy · R
              </text>
            </g>

            {/* Bottom Formula */}
            <rect x="20" y="198" width="500" height="30" rx="4" fill="#020617" stroke="#1e293b" />
            <text x="270" y="217" fill="#fbbf24" fontSize="10.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              Skin Depth: δ = √(ρ / π·f·μ) | Thermal Dissipation: P = ∫ J²·ρ dV | Non-contact rapid heating
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Induction Heating System: Alternating coil current produces alternating magnetic flux, inducing concentrated surface eddy currents that heat the workpiece by Joule dissipation."}
          </p>
        </div>
      );

    // ==========================================
    // CHAPTER 10: LESSON 18 - WIRELESS POWER TRANSFER & RFID
    // ==========================================
    case 'circuit-ch10-wireless-power-rfid-inductive':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 240" className="w-full max-w-xl h-56">
            {/* Header */}
            <rect x="20" y="10" width="500" height="26" rx="4" fill="#0f172a" stroke="#334155" />
            <text x="270" y="27" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">
              RESONANT INDUCTIVE WIRELESS POWER & RFID BACKSCATTER COUPLING
            </text>

            {/* Primary Transmitter (Tx) Circuit */}
            <g transform="translate(130, 115)">
              <rect x="-85" y="-55" width="170" height="110" rx="6" fill="#0b1329" stroke="#0284c7" strokeWidth="1.5" />
              <text x="0" y="-38" fill="#38bdf8" fontSize="9.5" fontWeight="bold" textAnchor="middle">
                TRANSMITTER (Tx / Reader)
              </text>
              <text x="0" y="-24" fill="#64748b" fontSize="8" textAnchor="middle">
                H-Bridge Inverter & Series C1
              </text>

              {/* Planar Tx Coil cross-section */}
              <g transform="translate(60, 5)">
                <line x1="0" y1="-30" x2="0" y2="30" stroke="#0284c7" strokeWidth="6" strokeLinecap="round" />
                <line x1="6" y1="-22" x2="6" y2="22" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
                <line x1="12" y1="-14" x2="12" y2="14" stroke="#7dd3fc" strokeWidth="3" strokeLinecap="round" />
              </g>
              <text x="-25" y="15" fill="#38bdf8" fontSize="8" fontWeight="bold">L1, C1 (Resonant)</text>
              <text x="0" y="42" fill="#94a3b8" fontSize="7.5" textAnchor="middle">
                Qi Carrier: 110 - 205 kHz
              </text>
            </g>

            {/* Magnetic Coupling Field Lines */}
            <g transform="translate(270, 115)" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 3" fill="none" opacity="0.75">
              <path d="M -60 -25 C -20 -40, 20 -40, 60 -25" />
              <path d="M -60 0 C -20 0, 20 0, 60 0" stroke="#7dd3fc" strokeWidth="2.5" />
              <path d="M -60 25 C -20 40, 20 40, 60 25" />
              <text x="0" y="-48" fill="#fbbf24" fontSize="9" fontWeight="bold" textAnchor="middle" stroke="none">
                k = M / √(L1·L2)
              </text>
            </g>

            {/* Secondary Receiver (Rx) Circuit */}
            <g transform="translate(410, 115)">
              <rect x="-85" y="-55" width="170" height="110" rx="6" fill="#0b1329" stroke="#059669" strokeWidth="1.5" />
              <text x="0" y="-38" fill="#34d399" fontSize="9.5" fontWeight="bold" textAnchor="middle">
                RECEIVER (Rx / RFID Tag)
              </text>
              <text x="0" y="-24" fill="#64748b" fontSize="8" textAnchor="middle">
                Tuned C2 + Rectifier + Battery / IC
              </text>

              {/* Planar Rx Coil cross-section */}
              <g transform="translate(-60, 5)">
                <line x1="0" y1="-30" x2="0" y2="30" stroke="#059669" strokeWidth="6" strokeLinecap="round" />
                <line x1="-6" y1="-22" x2="-6" y2="22" stroke="#34d399" strokeWidth="4" strokeLinecap="round" />
                <line x1="-12" y1="-14" x2="-12" y2="14" stroke="#6ee7b7" strokeWidth="3" strokeLinecap="round" />
              </g>

              {/* Battery Charging / Tag IC */}
              <rect x="-15" y="-5" width="55" height="24" rx="4" fill="#064e3b" stroke="#10b981" />
              <text x="12" y="10" fill="#6ee7b7" fontSize="8" fontWeight="bold" textAnchor="middle">
                LOAD / IC
              </text>
              <text x="0" y="42" fill="#34d399" fontSize="7.5" textAnchor="middle">
                Load Modulation Backscatter
              </text>
            </g>

            {/* Bottom Formula */}
            <rect x="20" y="198" width="500" height="30" rx="4" fill="#020617" stroke="#1e293b" />
            <text x="270" y="217" fill="#34d399" fontSize="10.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              Induced Voltage: V_rx = -jωM·I_tx | Maximum Power Efficiency at Resonant LC Tuning
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Wireless Power & RFID: Mutual inductive coupling transfers power across an air gap; passive tags communicate back by modulating load impedance to alter reflected primary current."}
          </p>
        </div>
      );

    // ==========================================
    // CHAPTER 10: LESSON 19 - LINEAR INDUCTION MOTORS & MAGLEV
    // ==========================================
    case 'circuit-ch10-linear-induction-maglev':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 240" className="w-full max-w-xl h-56">
            {/* Header */}
            <rect x="20" y="10" width="500" height="26" rx="4" fill="#0f172a" stroke="#334155" />
            <text x="270" y="27" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">
              LINEAR INDUCTION MOTOR (LIM) & MAGLEV: TRAVELING FIELD PROPULSION (v_s = 2·f·τ)
            </text>

            {/* Secondary Bogie Reaction Plate */}
            <g transform="translate(270, 75)">
              {/* Vehicle Car frame */}
              <rect x="-180" y="-25" width="360" height="30" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="0" y="-7" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">
                MAGLEV VEHICLE BOGIE / LINEAR ROTOR SECONDARY (Speed v →)
              </text>
              {/* Reaction Plate: Steel Backing + Aluminum Face */}
              <rect x="-170" y="5" width="340" height="6" fill="#334155" />
              <rect x="-170" y="11" width="340" height="6" fill="#60a5fa" stroke="#3b82f6" />
              <text x="0" y="28" fill="#fbbf24" fontSize="7.5" fontWeight="bold" textAnchor="middle">
                Reaction Plate: High Conductivity Aluminum (Induced Eddy Currents) on Steel Core
              </text>
            </g>

            {/* Air Gap */}
            <g transform="translate(270, 115)">
              <text x="0" y="3" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle">
                Air Gap g ≈ 10 - 15 mm | Slip s = (v_s - v) / v_s
              </text>
            </g>

            {/* Linear Stator Primary Track */}
            <g transform="translate(270, 150)">
              {/* Iron Stator Body */}
              <rect x="-190" y="-12" width="380" height="42" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
              {/* Stator 3-Phase Multi-Poles */}
              {[-150, -90, -30, 30, 90, 150].map((xP, i) => (
                <g key={i} transform={`translate(${xP}, 0)`}>
                  <rect x="-18" y="-12" width="36" height="25" fill={i % 2 === 0 ? '#b91c1c' : '#1d4ed8'} />
                  <text x="0" y="6" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">
                    {i % 2 === 0 ? 'N' : 'S'}
                  </text>
                </g>
              ))}
              <text x="0" y="24" fill="#94a3b8" fontSize="8" textAnchor="middle">
                Stator Track 3-Phase Winding: Pole Pitch τ = 0.35 m
              </text>
            </g>

            {/* Bottom Formula */}
            <rect x="20" y="198" width="500" height="30" rx="4" fill="#020617" stroke="#1e293b" />
            <text x="270" y="217" fill="#38bdf8" fontSize="10.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              Synchronous Wave Velocity: v_s = 2·f·τ | Linear Thrust: F ∝ s·B²·A / R₂ | Non-contact Traction
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Linear Induction Motors: Unrolling a rotary stator into a linear track creates a linear traveling magnetic wave that sweeps conductive reaction plates forward without mechanical adhesion."}
          </p>
        </div>
      );

    // ==========================================
    // CHAPTER 10: LESSON 20 - EM INDUCTION TESTING & SAFETY CAPSTONE
    // ==========================================
    case 'circuit-ch10-em-induction-testing-safety-capstone':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 240" className="w-full max-w-xl h-56">
            {/* Header */}
            <rect x="20" y="10" width="500" height="26" rx="4" fill="#0f172a" stroke="#334155" />
            <text x="270" y="27" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">
              CHAPTER 10 CAPSTONE: COMPREHENSIVE INDUCTION TESTING & SAFE ISOLATION WORKFLOW
            </text>

            {/* Stage 1: Identification & Physical Law */}
            <g transform="translate(80, 105)">
              <rect x="-50" y="-45" width="100" height="90" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="0" y="-28" fill="#38bdf8" fontSize="8.5" fontWeight="bold" textAnchor="middle">1. PHYSICS LAW</text>
              <text x="0" y="-12" fill="#94a3b8" fontSize="7.5" textAnchor="middle">Faraday / Lenz</text>
              <text x="0" y="3" fill="#e2e8f0" fontSize="8" fontWeight="bold" textAnchor="middle">e = -N(dΦ/dt)</text>
              <text x="0" y="18" fill="#e2e8f0" fontSize="8" fontWeight="bold" textAnchor="middle">e = B·l·v sinθ</text>
              <text x="0" y="34" fill="#34d399" fontSize="7.5" textAnchor="middle">Dynamic vs Static</text>
            </g>

            {/* Flow Arrow */}
            <path d="M 135 105 L 155 105" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrow)" />

            {/* Stage 2: Loss & Heating Evaluation */}
            <g transform="translate(210, 105)">
              <rect x="-50" y="-45" width="100" height="90" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="0" y="-28" fill="#f59e0b" fontSize="8.5" fontWeight="bold" textAnchor="middle">2. LOSS & HEAT</text>
              <text x="0" y="-12" fill="#94a3b8" fontSize="7.5" textAnchor="middle">Eddy Currents</text>
              <text x="0" y="3" fill="#ea580c" fontSize="8" fontWeight="bold" textAnchor="middle">P_e ∝ B²·f²·t²</text>
              <text x="0" y="18" fill="#ea580c" fontSize="8" fontWeight="bold" textAnchor="middle">Skin Depth δ</text>
              <text x="0" y="34" fill="#34d399" fontSize="7.5" textAnchor="middle">Lamination Check</text>
            </g>

            {/* Flow Arrow */}
            <path d="M 265 105 L 285 105" stroke="#f59e0b" strokeWidth="2.5" />

            {/* Stage 3: Measurement & Instrumentation */}
            <g transform="translate(340, 105)">
              <rect x="-50" y="-45" width="100" height="90" rx="6" fill="#0f172a" stroke="#a855f7" strokeWidth="1.5" />
              <text x="0" y="-28" fill="#c084fc" fontSize="8.5" fontWeight="bold" textAnchor="middle">3. INSTRUMENT</text>
              <text x="0" y="-12" fill="#94a3b8" fontSize="7.5" textAnchor="middle">CAT IV Test Meter</text>
              <text x="0" y="3" fill="#e2e8f0" fontSize="8" fontWeight="bold" textAnchor="middle">Live-Dead-Live</text>
              <text x="0" y="18" fill="#e2e8f0" fontSize="8" fontWeight="bold" textAnchor="middle">Mutual Coupling</text>
              <text x="0" y="34" fill="#34d399" fontSize="7.5" textAnchor="middle">Ghost Voltage</text>
            </g>

            {/* Flow Arrow */}
            <path d="M 395 105 L 415 105" stroke="#f59e0b" strokeWidth="2.5" />

            {/* Stage 4: Safety & Earthing Protocols */}
            <g transform="translate(470, 105)">
              <rect x="-50" y="-45" width="100" height="90" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
              <text x="0" y="-28" fill="#34d399" fontSize="8.5" fontWeight="bold" textAnchor="middle">4. SAFETY & LOTO</text>
              <text x="0" y="-12" fill="#94a3b8" fontSize="7.5" textAnchor="middle">Protective Earthing</text>
              <text x="0" y="3" fill="#facc15" fontSize="8" fontWeight="bold" textAnchor="middle">Drain Grounds</text>
              <text x="0" y="18" fill="#facc15" fontSize="8" fontWeight="bold" textAnchor="middle">Discharge Stored ½LI²</text>
              <text x="0" y="34" fill="#38bdf8" fontSize="7.5" textAnchor="middle">Site Clearance</text>
            </g>

            {/* Bottom Formula */}
            <rect x="20" y="198" width="500" height="30" rx="4" fill="#020617" stroke="#1e293b" />
            <text x="270" y="217" fill="#fbbf24" fontSize="10.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              Safety Mandate: Never assume a conductor is dead | Neutralize induced EMFs with portable working earths
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Capstone Workflow: Systematically applying physical laws, calculating induced losses, proving dead with rated test tools, and installing working grounds before contact."}
          </p>
        </div>
      );


    /* =========================================================================
       CHAPTER 11 — ELECTROMAGNETIC WAVES & ELECTROMAGNETIC FIELD THEORY
       ========================================================================= */

    case 'circuit-ch11-field-fundamentals':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 260" className="w-full max-w-xl h-64">
            <defs>
              <marker id="ch11EArrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                <path d="M 0 0 L 5 3 L 0 6 z" fill="#38bdf8" />
              </marker>
              <marker id="ch11DArrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                <path d="M 0 0 L 5 3 L 0 6 z" fill="#818cf8" />
              </marker>
              <marker id="ch11BArrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                <path d="M 0 0 L 5 3 L 0 6 z" fill="#10b981" />
              </marker>
              <marker id="ch11HArrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                <path d="M 0 0 L 5 3 L 0 6 z" fill="#f59e0b" />
              </marker>
            </defs>

            {/* Title */}
            <text x="270" y="22" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold">
              Electromagnetic Field Vectors: E, D, B, H & Constitutive Relations
            </text>

            {/* Left Panel: Electric Field (E) & Electric Flux Density (D) */}
            <g transform="translate(30, 40)">
              <rect x="0" y="0" width="225" height="165" rx="6" fill="#0b132b" stroke="#38bdf8" strokeWidth="1.2" />
              <text x="112" y="20" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">
                Electric Field Domain (E, D)
              </text>

              {/* Positive and Negative Source Charges */}
              <circle cx="45" cy="65" r="14" fill="#ef4444" stroke="#fca5a5" strokeWidth="1.5" />
              <text x="45" y="70" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">+</text>
              <text x="45" y="92" fill="#ef4444" fontSize="8.5" fontWeight="bold" textAnchor="middle">+q (Source)</text>

              <circle cx="180" cy="65" r="14" fill="#3b82f6" stroke="#93c5fd" strokeWidth="1.5" />
              <text x="180" y="70" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">-</text>
              <text x="180" y="92" fill="#93c5fd" fontSize="8.5" fontWeight="bold" textAnchor="middle">-q (Sink)</text>

              {/* Electric Field lines E */}
              <path d="M 60 65 L 165 65" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#ch11EArrow)" />
              <path d="M 57 55 Q 112 35 167 55" fill="none" stroke="#38bdf8" strokeWidth="1.6" markerEnd="url(#ch11EArrow)" />
              <path d="M 57 75 Q 112 95 167 75" fill="none" stroke="#38bdf8" strokeWidth="1.6" markerEnd="url(#ch11EArrow)" />
              <text x="112" y="60" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">E (V/m)</text>

              {/* Dielectric Slab Interface with D and P */}
              <rect x="90" y="105" width="45" height="48" fill="#1e293b" stroke="#818cf8" strokeDasharray="3 2" rx="2" />
              <text x="112" y="118" fill="#c7d2fe" fontSize="7.5" textAnchor="middle">Dielectric (ε)</text>
              <path d="M 75 135 L 150 135" stroke="#818cf8" strokeWidth="1.8" markerEnd="url(#ch11DArrow)" />
              <text x="112" y="131" fill="#818cf8" fontSize="8.5" fontWeight="bold" textAnchor="middle">D = εE = ε0E + P</text>
              <text x="112" y="148" fill="#94a3b8" fontSize="7" textAnchor="middle">D in C/m² (Flux Density)</text>
            </g>

            {/* Right Panel: Magnetic Flux Density (B) & Magnetic Field Intensity (H) */}
            <g transform="translate(285, 40)">
              <rect x="0" y="0" width="225" height="165" rx="6" fill="#061f14" stroke="#10b981" strokeWidth="1.2" />
              <text x="112" y="20" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">
                Magnetic Field Domain (B, H)
              </text>

              {/* Conductor Carrying Current I (Out of Page) */}
              <circle cx="112" cy="75" r="16" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
              <circle cx="112" cy="75" r="4" fill="#f59e0b" />
              <text x="112" y="105" fill="#f59e0b" fontSize="8.5" fontWeight="bold" textAnchor="middle">I (Conductor Current)</text>

              {/* Circular B and H loops */}
              <ellipse cx="112" cy="75" rx="55" ry="32" fill="none" stroke="#10b981" strokeWidth="1.8" strokeDasharray="4 2" />
              <path d="M 112 43 L 118 43" stroke="#10b981" strokeWidth="2" markerEnd="url(#ch11BArrow)" />
              <path d="M 112 107 L 106 107" stroke="#10b981" strokeWidth="2" markerEnd="url(#ch11BArrow)" />
              <text x="175" y="65" fill="#34d399" fontSize="9" fontWeight="bold">B (Tesla)</text>

              {/* Magnetic medium relationship */}
              <rect x="25" y="118" width="175" height="36" rx="4" fill="#022c22" stroke="#047857" strokeWidth="1" />
              <text x="112" y="132" fill="#facc15" fontSize="8.5" fontWeight="bold" textAnchor="middle">B = μ H = μ0 (H + M)</text>
              <text x="112" y="146" fill="#6ee7b7" fontSize="7.5" textAnchor="middle">H (A/m) | μ0 = 4π × 10⁻⁷ H/m</text>
            </g>

            {/* Bottom Unified Constitutive Banner */}
            <rect x="30" y="215" width="480" height="32" rx="4" fill="#090d16" stroke="#1e293b" />
            <text x="270" y="235" fill="#f59e0b" fontSize="9.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              Constitutive Relations: D = ε E | B = μ H | J = σ E | Medium Parameters: ε, μ, σ
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Electromagnetic Field Vectors: Distinguishing force fields (E, H) from flux densities (D, B) coupled by constitutive parameters ε, μ, and σ."}
          </p>
        </div>
      );

    case 'circuit-ch11-gauss-law':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 260" className="w-full max-w-xl h-64">
            <defs>
              <marker id="ch11FluxArrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                <path d="M 0 0 L 5 3 L 0 6 z" fill="#38bdf8" />
              </marker>
              <marker id="ch11BFluxArrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                <path d="M 0 0 L 5 3 L 0 6 z" fill="#10b981" />
              </marker>
            </defs>

            {/* Title */}
            <text x="270" y="22" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold">
              Gauss’s Laws: Electric Divergence (Sources) vs. Magnetic Non-Divergence
            </text>

            {/* Left Box: Gauss’s Law for Electrostatics (∇ · D = ρ) */}
            <g transform="translate(30, 38)">
              <rect x="0" y="0" width="225" height="168" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
              <text x="112" y="20" fill="#38bdf8" fontSize="10.5" fontWeight="bold" textAnchor="middle">
                Gauss’s Law (Electrostatics)
              </text>

              {/* Closed Gaussian Surface */}
              <ellipse cx="112" cy="78" rx="65" ry="42" fill="#1e293b" fillOpacity="0.5" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 3" />
              <text x="165" y="50" fill="#38bdf8" fontSize="7.5">Closed Surface S</text>

              {/* Enclosed Free Charge */}
              <circle cx="112" cy="78" r="16" fill="#ef4444" stroke="#fca5a5" strokeWidth="1.5" />
              <text x="112" y="83" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">+Q</text>
              <text x="112" y="103" fill="#fca5a5" fontSize="8" textAnchor="middle">Q_enc = ∭ ρ_v dV</text>

              {/* Outward Outgoing Flux Lines */}
              <path d="M 112 60 L 112 25" stroke="#38bdf8" strokeWidth="1.8" markerEnd="url(#ch11FluxArrow)" />
              <path d="M 112 96 L 112 130" stroke="#38bdf8" strokeWidth="1.8" markerEnd="url(#ch11FluxArrow)" />
              <path d="M 130 78 L 190 78" stroke="#38bdf8" strokeWidth="1.8" markerEnd="url(#ch11FluxArrow)" />
              <path d="M 94 78 L 35 78" stroke="#38bdf8" strokeWidth="1.8" markerEnd="url(#ch11FluxArrow)" />

              {/* Formula Badge */}
              <rect x="15" y="132" width="195" height="28" rx="4" fill="#020617" stroke="#334155" />
              <text x="112" y="146" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                ∯ D · dA = Q_enc  ⇔  ∇ · D = ρ_v
              </text>
              <text x="112" y="156" fill="#94a3b8" fontSize="7" textAnchor="middle">Net flux leaves positive charges</text>
            </g>

            {/* Right Box: Gauss’s Law for Magnetism (∇ · B = 0) */}
            <g transform="translate(285, 38)">
              <rect x="0" y="0" width="225" height="168" rx="6" fill="#061f14" stroke="#10b981" strokeWidth="1.2" />
              <text x="112" y="20" fill="#34d399" fontSize="10.5" fontWeight="bold" textAnchor="middle">
                Gauss’s Law (Magnetostatics)
              </text>

              {/* Magnetic Dipole (N-S) */}
              <rect x="80" y="66" width="32" height="24" fill="#ef4444" stroke="#f87171" rx="2" />
              <text x="96" y="82" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">N</text>
              <rect x="112" y="66" width="32" height="24" fill="#3b82f6" stroke="#60a5fa" rx="2" />
              <text x="128" y="82" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">S</text>

              {/* Continuous Closed B Flux Loop */}
              <path d="M 96 66 C 96 28 128 28 128 66" fill="none" stroke="#10b981" strokeWidth="1.8" markerEnd="url(#ch11BFluxArrow)" />
              <path d="M 128 90 C 128 126 96 126 96 90" fill="none" stroke="#10b981" strokeWidth="1.8" markerEnd="url(#ch11BFluxArrow)" />

              {/* Closed Gaussian Surface Enclosing Both Poles */}
              <ellipse cx="112" cy="78" rx="72" ry="46" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="112" y="46" fill="#f59e0b" fontSize="7.5" textAnchor="middle">Gaussian Surface S (Net Flux = 0)</text>

              {/* Formula Badge */}
              <rect x="15" y="132" width="195" height="28" rx="4" fill="#020617" stroke="#064e3b" />
              <text x="112" y="146" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                ∯ B · dA = 0  ⇔  ∇ · B = 0
              </text>
              <text x="112" y="156" fill="#a7f3d0" fontSize="7" textAnchor="middle">No isolated magnetic monopoles</text>
            </g>

            {/* Divergence Theorem Connection */}
            <rect x="30" y="214" width="480" height="32" rx="4" fill="#020617" stroke="#1e293b" />
            <text x="270" y="234" fill="#f59e0b" fontSize="9.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              Divergence Theorem: ∯ D · dA = ∭ (∇ · D) dV  |  Magnetic Flux Tubes Always Close on Themselves
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Gauss’s Laws: Divergence theorem equates surface flux to enclosed volume sources (free charges for D; strictly zero for B because magnetic monopoles do not exist)."}
          </p>
        </div>
      );

    case 'circuit-ch11-ampere-law':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 260" className="w-full max-w-xl h-64">
            <defs>
              <marker id="ch11AmpArrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                <path d="M 0 0 L 5 3 L 0 6 z" fill="#f59e0b" />
              </marker>
              <marker id="ch11IArrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                <path d="M 0 0 L 5 3 L 0 6 z" fill="#38bdf8" />
              </marker>
            </defs>

            {/* Title */}
            <text x="270" y="22" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold">
              Ampere’s Circuital Law & Magnetic Circulation (Curl of H)
            </text>

            {/* Main Diagram Area */}
            <g transform="translate(40, 38)">
              {/* Conductor Carrying Current I */}
              <rect x="220" y="10" width="20" height="150" fill="#334155" stroke="#f59e0b" strokeWidth="1.5" rx="3" />
              <path d="M 230 150 L 230 15" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#ch11IArrow)" />
              <text x="245" y="30" fill="#f59e0b" fontSize="10" fontWeight="bold">I_enc (Current)</text>
              <text x="245" y="44" fill="#94a3b8" fontSize="7.5">Conductor axis</text>

              {/* Amperian Loop C around conductor */}
              <ellipse cx="230" cy="85" rx="120" ry="42" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="5 3" />
              <text x="360" y="88" fill="#38bdf8" fontSize="8.5" fontWeight="bold">Amperian Loop C (radius r)</text>

              {/* Magnetic Intensity Vector H along Loop Tangent */}
              <path d="M 230 127 L 275 127" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#ch11AmpArrow)" />
              <text x="280" y="130" fill="#facc15" fontSize="9.5" fontWeight="bold">H (Tangent)</text>

              <path d="M 230 43 L 185 43" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#ch11AmpArrow)" />
              <text x="175" y="41" fill="#facc15" fontSize="9.5" fontWeight="bold" textAnchor="end">H (Tangent)</text>

              <path d="M 110 85 L 110 95" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#ch11AmpArrow)" />
              <path d="M 350 85 L 350 75" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#ch11AmpArrow)" />

              {/* Differential line element dl */}
              <path d="M 290 123 L 305 120" stroke="#10b981" strokeWidth="2" />
              <text x="312" y="121" fill="#34d399" fontSize="8" fontWeight="bold">dl</text>

              {/* Stokes’ Theorem Callout Box */}
              <rect x="0" y="25" width="165" height="120" rx="5" fill="#0f172a" stroke="#1e293b" />
              <text x="82" y="42" fill="#38bdf8" fontSize="9.5" fontWeight="bold" textAnchor="middle">Stokes’ Curl Theorem</text>
              <text x="82" y="60" fill="#94a3b8" fontSize="8" textAnchor="middle">∮_C H · dl = ∬_S (∇ × H) · dA</text>
              <text x="82" y="78" fill="#facc15" fontSize="8.5" fontWeight="bold" textAnchor="middle">∇ × H = J</text>
              <text x="82" y="96" fill="#cbd5e1" fontSize="7.5" textAnchor="middle">In cylindrical coordinates:</text>
              <text x="82" y="112" fill="#38bdf8" fontSize="8.5" fontWeight="bold" textAnchor="middle">H_φ (2πr) = I_enc</text>
              <text x="82" y="128" fill="#f59e0b" fontSize="8" textAnchor="middle">⇒ H_φ = I / (2πr)</text>
            </g>

            {/* Bottom Invariant Banner */}
            <rect x="30" y="214" width="480" height="32" rx="4" fill="#020617" stroke="#1e293b" />
            <text x="270" y="234" fill="#f59e0b" fontSize="9.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              Ampere’s Circuital Law: ∮ H · dl = I_enclosed | Stokes’ Theorem: ∇ × H = J (Static limit only)
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Ampere’s Circuital Law: Line integral of magnetic intensity H around any closed contour equals the total net electric current passing through the contour."}
          </p>
        </div>
      );

    case 'circuit-ch11-faraday-law':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 260" className="w-full max-w-xl h-64">
            <defs>
              <marker id="ch11EInducedArrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                <path d="M 0 0 L 5 3 L 0 6 z" fill="#38bdf8" />
              </marker>
              <marker id="ch11BFluxDot" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                <path d="M 0 0 L 5 3 L 0 6 z" fill="#ef4444" />
              </marker>
            </defs>

            {/* Title */}
            <text x="270" y="22" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold">
              Maxwell-Faraday Law: Time-Varying Magnetic Field Inducing Vortex E-Field
            </text>

            {/* Left Area: Time-Varying Magnetic Field dB/dt */}
            <g transform="translate(30, 40)">
              <rect x="0" y="0" width="230" height="165" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
              <text x="115" y="20" fill="#38bdf8" fontSize="10.5" fontWeight="bold" textAnchor="middle">
                Dynamic Magnetic Flux (dB/dt)
              </text>

              {/* Time-varying magnetic flux tube */}
              <circle cx="115" cy="80" r="38" fill="#1e293b" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 2" />
              <text x="115" y="74" fill="#fca5a5" fontSize="11" fontWeight="bold" textAnchor="middle">B(t) ⊙</text>
              <text x="115" y="90" fill="#fca5a5" fontSize="8" textAnchor="middle">Flux increasing (out)</text>

              {/* Circulating Induced Non-Conservative Electric Field */}
              <ellipse cx="115" cy="80" rx="68" ry="46" fill="none" stroke="#38bdf8" strokeWidth="2.2" />
              <path d="M 115 126 L 125 126" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#ch11EInducedArrow)" />
              <path d="M 115 34 L 105 34" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#ch11EInducedArrow)" />
              <text x="115" y="142" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">
                Induced E Vortex (∮ E · dl ≠ 0)
              </text>

              {/* Lenz’s Law Negative Sign Indicator */}
              <rect x="15" y="128" width="200" height="28" rx="3" fill="#020617" stroke="#334155" />
              <text x="115" y="146" fill="#f87171" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                EMF = - dΦ_B / dt  (Lenz Opposition)
              </text>
            </g>

            {/* Right Area: Differential Maxwell-Faraday Law Formulation */}
            <g transform="translate(280, 40)">
              <rect x="0" y="0" width="230" height="165" rx="6" fill="#0b132b" stroke="#818cf8" strokeWidth="1.2" />
              <text x="115" y="20" fill="#818cf8" fontSize="10.5" fontWeight="bold" textAnchor="middle">
                Field Formulation (Maxwell Equation 3)
              </text>

              {/* Mathematical formulation block */}
              <rect x="15" y="32" width="200" height="52" rx="4" fill="#020617" stroke="#4338ca" />
              <text x="115" y="52" fill="#fbbf24" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                ∇ × E = - ∂B / ∂t
              </text>
              <text x="115" y="72" fill="#c7d2fe" fontSize="8" textAnchor="middle">
                Point form: Curl of E equals negative rate of B
              </text>

              {/* Key Concept bullets */}
              <text x="20" y="102" fill="#93c5fd" fontSize="8" fontWeight="bold">• Non-conservative: Work around loop ≠ 0</text>
              <text x="20" y="118" fill="#93c5fd" fontSize="8" fontWeight="bold">• No electric charges needed to create E</text>
              <text x="20" y="134" fill="#93c5fd" fontSize="8" fontWeight="bold">• Forms the foundation of EM wave propagation</text>
              <text x="20" y="150" fill="#34d399" fontSize="8" fontWeight="bold">• Drives transformers, inductors, generators</text>
            </g>

            {/* Bottom Banner */}
            <rect x="30" y="214" width="480" height="32" rx="4" fill="#020617" stroke="#1e293b" />
            <text x="270" y="234" fill="#f59e0b" fontSize="9.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              Maxwell-Faraday Equation: ∮ E · dl = - ∬ (∂B/∂t) · dA ⇔ ∇ × E = - ∂B / ∂t
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Faraday’s Law Field Formulation: A time-varying magnetic flux generates a circulating, vortex electric field whose closed line integral equals the induced EMF."}
          </p>
        </div>
      );

    case 'circuit-ch11-displacement-current':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 260" className="w-full max-w-xl h-64">
            <defs>
              <marker id="ch11DCurrentArrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                <path d="M 0 0 L 5 3 L 0 6 z" fill="#f59e0b" />
              </marker>
              <marker id="ch11DFieldArrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                <path d="M 0 0 L 5 3 L 0 6 z" fill="#38bdf8" />
              </marker>
            </defs>

            {/* Title */}
            <text x="270" y="22" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold">
              Maxwell’s Displacement Current: Resolving the Capacitor Dilemma
            </text>

            {/* Capacitor Plates and Circuit */}
            <g transform="translate(50, 40)">
              {/* AC Input source left */}
              <circle cx="20" cy="80" r="14" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.8" />
              <path d="M 12 80 Q 16 73 20 80 T 28 80" fill="none" stroke="#f59e0b" strokeWidth="2" />
              <text x="20" y="106" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle">AC Source</text>

              {/* Wire with Conduction Current Ic */}
              <path d="M 34 80 L 170 80" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#ch11DCurrentArrow)" />
              <text x="100" y="70" fill="#facc15" fontSize="9.5" fontWeight="bold" textAnchor="middle">
                I_c = dq/dt (Conduction)
              </text>

              {/* Left Capacitor Plate */}
              <rect x="170" y="30" width="12" height="100" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1.5" rx="2" />
              <text x="176" y="22" fill="#93c5fd" fontSize="9" fontWeight="bold" textAnchor="middle">+Q(t)</text>

              {/* Right Capacitor Plate */}
              <rect x="260" y="30" width="12" height="100" fill="#ef4444" stroke="#f87171" strokeWidth="1.5" rx="2" />
              <text x="266" y="22" fill="#fca5a5" fontSize="9" fontWeight="bold" textAnchor="middle">-Q(t)</text>

              {/* Wire out with Conduction Current */}
              <path d="M 272 80 L 400 80" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#ch11DCurrentArrow)" />
              <text x="340" y="70" fill="#facc15" fontSize="9.5" fontWeight="bold" textAnchor="middle">
                I_c (Conduction)
              </text>

              {/* Dielectric Space Between Plates: Time-Varying E and D Field */}
              <rect x="182" y="35" width="78" height="90" fill="#0f172a" fillOpacity="0.8" stroke="#38bdf8" strokeDasharray="3 2" />
              <path d="M 188 55 L 254 55" stroke="#38bdf8" strokeWidth="1.8" markerEnd="url(#ch11DFieldArrow)" />
              <path d="M 188 80 L 254 80" stroke="#38bdf8" strokeWidth="2.2" markerEnd="url(#ch11DFieldArrow)" />
              <path d="M 188 105 L 254 105" stroke="#38bdf8" strokeWidth="1.8" markerEnd="url(#ch11DFieldArrow)" />

              <text x="221" y="72" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">E(t) Field</text>
              <text x="221" y="98" fill="#facc15" fontSize="9" fontWeight="bold" textAnchor="middle">
                I_d = ε A (dE/dt)
              </text>
              <text x="221" y="118" fill="#cbd5e1" fontSize="7" textAnchor="middle">Displacement Current</text>

              {/* Amperian Loop bulging between plates */}
              <path d="M 140 45 C 140 10 221 10 221 35" fill="none" stroke="#a855f7" strokeWidth="1.8" strokeDasharray="4 2" />
              <text x="140" y="18" fill="#c084fc" fontSize="8">Surface S2 bulges across gap</text>
            </g>

            {/* Bottom Equation Continuity Banner */}
            <rect x="30" y="200" width="480" height="44" rx="4" fill="#020617" stroke="#1e293b" />
            <text x="270" y="218" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              I_total = I_conduction + I_displacement = I_c + ∬ (∂D/∂t) · dA = Constant
            </text>
            <text x="270" y="234" fill="#34d399" fontSize="8.5" textAnchor="middle">
              Ampere-Maxwell Law: ∇ × H = J + ∂D/∂t  |  Guarantees conservation of charge: ∇ · J + ∂ρ/∂t = 0
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Displacement Current: Maxwell’s stroke of genius adding ∂D/∂t restored charge continuity and predicted self-propagating electromagnetic waves."}
          </p>
        </div>
      );

    case 'circuit-ch11-maxwell-equations':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 270" className="w-full max-w-xl h-68">
            {/* Title */}
            <text x="270" y="20" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold">
              Maxwell’s Four Unified Field Equations & Boundary Conditions
            </text>

            {/* 4 Quadrants Grid */}
            {/* Box 1: Gauss’s Law for Electricity */}
            <g transform="translate(30, 32)">
              <rect x="0" y="0" width="230" height="78" rx="5" fill="#0b132b" stroke="#38bdf8" strokeWidth="1.2" />
              <text x="12" y="18" fill="#38bdf8" fontSize="9.5" fontWeight="bold">1. Gauss’s Law (Electric)</text>
              <text x="12" y="38" fill="#facc15" fontSize="11" fontWeight="bold" fontFamily="monospace">∇ · D = ρ_v</text>
              <text x="12" y="55" fill="#93c5fd" fontSize="8.5" fontFamily="monospace">∯ D · dA = Q_enclosed</text>
              <text x="12" y="70" fill="#94a3b8" fontSize="7.5">Electric charges are divergence sources of D</text>
            </g>

            {/* Box 2: Gauss’s Law for Magnetism */}
            <g transform="translate(280, 32)">
              <rect x="0" y="0" width="230" height="78" rx="5" fill="#061f14" stroke="#10b981" strokeWidth="1.2" />
              <text x="12" y="18" fill="#34d399" fontSize="9.5" fontWeight="bold">2. Gauss’s Law (Magnetic)</text>
              <text x="12" y="38" fill="#facc15" fontSize="11" fontWeight="bold" fontFamily="monospace">∇ · B = 0</text>
              <text x="12" y="55" fill="#a7f3d0" fontSize="8.5" fontFamily="monospace">∯ B · dA = 0</text>
              <text x="12" y="70" fill="#94a3b8" fontSize="7.5">No magnetic monopoles; B lines form closed loops</text>
            </g>

            {/* Box 3: Maxwell-Faraday Law */}
            <g transform="translate(30, 118)">
              <rect x="0" y="0" width="230" height="78" rx="5" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1.2" />
              <text x="12" y="18" fill="#a5b4fc" fontSize="9.5" fontWeight="bold">3. Maxwell-Faraday Law</text>
              <text x="12" y="38" fill="#facc15" fontSize="11" fontWeight="bold" fontFamily="monospace">∇ × E = - ∂B / ∂t</text>
              <text x="12" y="55" fill="#c7d2fe" fontSize="8.5" fontFamily="monospace">∮ E · dl = - dΦ_B / dt</text>
              <text x="12" y="70" fill="#94a3b8" fontSize="7.5">Time-varying magnetic flux induces curl of E</text>
            </g>

            {/* Box 4: Ampere-Maxwell Law */}
            <g transform="translate(280, 118)">
              <rect x="0" y="0" width="230" height="78" rx="5" fill="#2d1500" stroke="#f59e0b" strokeWidth="1.2" />
              <text x="12" y="18" fill="#fbbf24" fontSize="9.5" fontWeight="bold">4. Ampere-Maxwell Law</text>
              <text x="12" y="38" fill="#facc15" fontSize="11" fontWeight="bold" fontFamily="monospace">∇ × H = J + ∂D / ∂t</text>
              <text x="12" y="55" fill="#fde68a" fontSize="8.5" fontFamily="monospace">∮ H · dl = I_c + ∬ (∂D/∂t) · dA</text>
              <text x="12" y="70" fill="#94a3b8" fontSize="7.5">Conduction + displacement currents induce curl of H</text>
            </g>

            {/* Electromagnetic Boundary Conditions Sub-Strip */}
            <rect x="30" y="204" width="480" height="42" rx="4" fill="#020617" stroke="#334155" />
            <text x="270" y="219" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              Interface Conditions: E_1t = E_2t | H_1t - H_2t = K × n | D_1n - D_2n = ρ_s | B_1n = B_2n
            </text>
            <text x="270" y="235" fill="#cbd5e1" fontSize="8" textAnchor="middle">
              At Perfect Electrical Conductor (PEC): E_tangential = 0, B_normal = 0
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Maxwell’s Four Equations: The unified foundation of classical electromagnetism, optics, and radio communications."}
          </p>
        </div>
      );

    case 'circuit-ch11-wave-propagation-plane-waves':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 270" className="w-full max-w-xl h-68">
            <defs>
              <marker id="ch11ZAxisArrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                <path d="M 0 0 L 5 3 L 0 6 z" fill="#f59e0b" />
              </marker>
              <marker id="ch11XAxisArrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                <path d="M 0 0 L 5 3 L 0 6 z" fill="#38bdf8" />
              </marker>
              <marker id="ch11YAxisArrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                <path d="M 0 0 L 5 3 L 0 6 z" fill="#10b981" />
              </marker>
            </defs>

            {/* Title */}
            <text x="270" y="20" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold">
              Uniform Plane Wave (TEM): Orthogonal E & H Fields and Poynting Vector S
            </text>

            {/* 3D Wave Propagation Diagram */}
            <g transform="translate(50, 45)">
              {/* Axes: Z (Propagation), X (Electric Field), Y (Magnetic Field) */}
              <path d="M 20 100 L 420 100" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#ch11ZAxisArrow)" />
              <text x="430" y="104" fill="#facc15" fontSize="10" fontWeight="bold">+z (Propagation Direction)</text>

              <path d="M 40 100 L 40 10" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#ch11XAxisArrow)" />
              <text x="40" y="5" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">+x (E-Field)</text>

              <path d="M 40 100 L 10 140" stroke="#10b981" strokeWidth="2" markerEnd="url(#ch11YAxisArrow)" />
              <text x="8" y="152" fill="#34d399" fontSize="10" fontWeight="bold">+y (H-Field)</text>

              {/* Electric Field Wave (Vertical sinusoidal oscillation along x in cyan) */}
              {/* Cycle 1 */}
              <path d="M 40 100 Q 80 20 120 100 T 200 100 T 280 100 T 360 100" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
              {/* Vertical E vectors */}
              <path d="M 80 100 L 80 35" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#ch11XAxisArrow)" />
              <path d="M 160 100 L 160 165" stroke="#38bdf8" strokeWidth="1.5" />
              <path d="M 240 100 L 240 35" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#ch11XAxisArrow)" />
              <path d="M 320 100 L 320 165" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="80" y="25" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">E(z,t)</text>

              {/* Magnetic Field Wave (Horizontal/oblique oscillation along y in green) */}
              <path d="M 40 100 Q 70 125 120 100 T 200 100 T 280 100 T 360 100" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="4 2" />
              {/* Horizontal H vectors */}
              <path d="M 80 100 L 100 125" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#ch11YAxisArrow)" />
              <path d="M 240 100 L 260 125" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#ch11YAxisArrow)" />
              <text x="110" y="135" fill="#34d399" fontSize="9" fontWeight="bold">H(z,t)</text>

              {/* Wavelength λ bracket */}
              <path d="M 80 28 L 240 28" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="2 2" />
              <path d="M 80 24 L 80 32" stroke="#cbd5e1" strokeWidth="1.2" />
              <path d="M 240 24 L 240 32" stroke="#cbd5e1" strokeWidth="1.2" />
              <text x="160" y="22" fill="#cbd5e1" fontSize="8.5" fontWeight="bold" textAnchor="middle">Wavelength λ = 2π / β = c / f</text>

              {/* Poynting Vector S indicator */}
              <rect x="290" y="55" width="115" height="30" rx="3" fill="#020617" stroke="#f59e0b" strokeWidth="1.2" />
              <text x="347" y="70" fill="#facc15" fontSize="9" fontWeight="bold" textAnchor="middle">
                S = E × H (W/m²)
              </text>
              <text x="347" y="81" fill="#94a3b8" fontSize="7" textAnchor="middle">Energy Flux Density</text>
            </g>

            {/* Bottom Parameters Strip */}
            <rect x="30" y="210" width="480" height="42" rx="4" fill="#020617" stroke="#1e293b" />
            <text x="270" y="226" fill="#fbbf24" fontSize="9.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              Speed: c = 1 / √(μ0 ε0) ≈ 3 × 10⁸ m/s | Intrinsic Impedance: η0 = √(μ0 / ε0) ≈ 377 Ω (120π Ω)
            </text>
            <text x="270" y="242" fill="#38bdf8" fontSize="8" textAnchor="middle">
              Skin Depth in Conductors: δ = √(2 / (ω μ σ)) | Wave Impedance: E_x / H_y = η
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Uniform Plane Wave: Electric and magnetic fields oscillate perpendicularly to each other and to the direction of propagation (Transverse Electromagnetic, TEM wave)."}
          </p>
        </div>
      );

    case 'circuit-ch11-wave-polarization':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 260" className="w-full max-w-xl h-64">
            <text x="270" y="20" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold">
              Electromagnetic Wave Polarization: Linear, Circular, and Elliptical States
            </text>

            {/* Sub-panel 1: Linear Polarization */}
            <g transform="translate(30, 40)">
              <rect x="0" y="0" width="145" height="150" rx="4" fill="#020617" stroke="#334155" />
              <text x="72" y="20" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">Linear Polarization</text>
              <line x1="72" y1="30" x2="72" y2="135" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="15" y1="85" x2="130" y2="85" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
              {/* Slanted linear vector */}
              <line x1="32" y1="125" x2="112" y2="45" stroke="#38bdf8" strokeWidth="2.5" />
              <polygon points="112,45 102,48 108,54" fill="#38bdf8" />
              <text x="72" y="142" textAnchor="middle" fill="#94a3b8" fontSize="9">δ = 0° or 180° (In Phase)</text>
            </g>

            {/* Sub-panel 2: Circular Polarization */}
            <g transform="translate(195, 40)">
              <rect x="0" y="0" width="145" height="150" rx="4" fill="#020617" stroke="#334155" />
              <text x="72" y="20" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">Circular (RHCP / LHCP)</text>
              <line x1="72" y1="30" x2="72" y2="135" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="15" y1="85" x2="130" y2="85" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
              {/* Circle */}
              <circle cx="72" cy="85" r="40" fill="none" stroke="#34d399" strokeWidth="2" strokeDasharray="3 2" />
              <line x1="72" y1="85" x2="100" y2="57" stroke="#34d399" strokeWidth="2.5" />
              <polygon points="100,57 92,60 97,65" fill="#34d399" />
              <path d="M 105,75 A 35 35 0 0 1 75,120" fill="none" stroke="#facc15" strokeWidth="1.5" />
              <polygon points="75,120 79,114 83,119" fill="#facc15" />
              <text x="72" y="142" textAnchor="middle" fill="#94a3b8" fontSize="9">Ex0 = Ey0, δ = ±90° (AR = 1)</text>
            </g>

            {/* Sub-panel 3: Elliptical Polarization */}
            <g transform="translate(360, 40)">
              <rect x="0" y="0" width="145" height="150" rx="4" fill="#020617" stroke="#334155" />
              <text x="72" y="20" textAnchor="middle" fill="#c084fc" fontSize="11" fontWeight="bold">Elliptical (General)</text>
              <line x1="72" y1="30" x2="72" y2="135" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="15" y1="85" x2="130" y2="85" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
              {/* Rotated Ellipse */}
              <ellipse cx="72" cy="85" rx="45" ry="24" transform="rotate(-30 72 85)" fill="none" stroke="#c084fc" strokeWidth="2" />
              <text x="72" y="142" textAnchor="middle" fill="#94a3b8" fontSize="9">Arbitrary Ex0, Ey0 & δ</text>
            </g>

            {/* Bottom Summary Strip */}
            <rect x="30" y="200" width="475" height="42" rx="4" fill="#020617" stroke="#1e293b" />
            <text x="267" y="216" fill="#fbbf24" fontSize="9.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              Axial Ratio: AR = Major Axis / Minor Axis (1.0 = Circular, ∞ = Linear)
            </text>
            <text x="267" y="232" fill="#38bdf8" fontSize="8" textAnchor="middle">
              E(z,t) = [Ex0 cos(ωt - βz) ax + Ey0 cos(ωt - βz + δ) ay] | Polarizer transmission: Malus’ Law I = I0 cos²θ
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Wave Polarization: Trajectory traced by the tip of the instantaneous Electric Field vector E(t) in the transverse plane."}
          </p>
        </div>
      );

    case 'circuit-ch11-normal-incidence-reflection':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 260" className="w-full max-w-xl h-64">
            <text x="270" y="20" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold">
              Normal Incidence Plane Wave Reflection & Transmission at Dielectric Interface
            </text>

            {/* Boundary Interface at z = 0 */}
            <g transform="translate(40, 35)">
              {/* Region 1: Medium 1 */}
              <rect x="0" y="0" width="220" height="155" fill="#0f172a" fillOpacity="0.5" stroke="#334155" />
              <text x="20" y="25" fill="#38bdf8" fontSize="11" fontWeight="bold">Medium 1 (z &lt; 0)</text>
              <text x="20" y="42" fill="#94a3b8" fontSize="9">ε1, μ1, η1 = √(μ1/ε1)</text>

              {/* Interface Line */}
              <line x1="220" y1="0" x2="220" y2="155" stroke="#f59e0b" strokeWidth="3" />
              <text x="220" y="170" textAnchor="middle" fill="#facc15" fontSize="10" fontWeight="bold">Interface (z = 0)</text>

              {/* Region 2: Medium 2 */}
              <rect x="220" y="0" width="240" height="155" fill="#1e1b4b" fillOpacity="0.5" stroke="#334155" />
              <text x="240" y="25" fill="#a78bfa" fontSize="11" fontWeight="bold">Medium 2 (z &gt; 0)</text>
              <text x="240" y="42" fill="#94a3b8" fontSize="9">ε2, μ2, η2 = √(μ2/ε2)</text>

              {/* Incident Wave Ei, Hi -> */}
              <g transform="translate(30, 65)">
                <line x1="0" y1="0" x2="120" y2="0" stroke="#38bdf8" strokeWidth="2.5" />
                <polygon points="120,0 110,-4 110,4" fill="#38bdf8" />
                <text x="60" y="-8" fill="#38bdf8" fontSize="10" fontWeight="bold">Incident: Ei, Hi →</text>
              </g>

              {/* Reflected Wave Er, Hr <- */}
              <g transform="translate(30, 105)">
                <line x1="120" y1="0" x2="0" y2="0" stroke="#f43f5e" strokeWidth="2.5" />
                <polygon points="0,0 10,-4 10,4" fill="#f43f5e" />
                <text x="60" y="-8" fill="#f43f5e" fontSize="10" fontWeight="bold">← Reflected: Er, Hr</text>
              </g>

              {/* Transmitted Wave Et, Ht -> */}
              <g transform="translate(260, 85)">
                <line x1="0" y1="0" x2="140" y2="0" stroke="#34d399" strokeWidth="2.5" />
                <polygon points="140,0 130,-4 130,4" fill="#34d399" />
                <text x="70" y="-8" fill="#34d399" fontSize="10" fontWeight="bold">Transmitted: Et, Ht →</text>
              </g>
            </g>

            {/* Bottom Analytical Equations */}
            <rect x="30" y="200" width="480" height="46" rx="4" fill="#020617" stroke="#1e293b" />
            <text x="270" y="216" fill="#fbbf24" fontSize="9.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              Reflection: Γ = (η2 - η1) / (η2 + η1) | Transmission: τ = 2η2 / (η2 + η1) = 1 + Γ
            </text>
            <text x="270" y="234" fill="#38bdf8" fontSize="8.5" textAnchor="middle">
              Power Conservation: R + T = |Γ|² + (|τ|² η1/η2) = 1 | Standing Wave Ratio: S = (1 + |Γ|) / (1 - |Γ|)
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Normal Incidence: Continuity of tangential fields yields Fresnel reflection Γ and transmission τ coefficients."}
          </p>
        </div>
      );

    case 'circuit-ch11-oblique-incidence-snell-brewster':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 260" className="w-full max-w-xl h-64">
            <text x="270" y="20" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold">
              Oblique Incidence: Snell's Law, Brewster Angle & Total Internal Reflection (TIR)
            </text>

            <g transform="translate(40, 35)">
              {/* Interface dividing top (Medium 1) and bottom (Medium 2) */}
              <rect x="0" y="0" width="460" height="75" fill="#0f172a" fillOpacity="0.4" />
              <rect x="0" y="75" width="460" height="85" fill="#1e1b4b" fillOpacity="0.4" />
              <line x1="0" y1="75" x2="460" y2="75" stroke="#f59e0b" strokeWidth="2" />

              {/* Normal axis (perpendicular to interface) */}
              <line x1="230" y1="10" x2="230" y2="150" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="235" y="25" fill="#64748b" fontSize="8.5">Normal</text>

              {/* Incident Ray */}
              <line x1="80" y1="20" x2="230" y2="75" stroke="#38bdf8" strokeWidth="2.5" />
              <polygon points="170,53 160,47 163,55" fill="#38bdf8" />
              <text x="135" y="38" fill="#38bdf8" fontSize="10" fontWeight="bold">Incident Ray (θi)</text>

              {/* Reflected Ray */}
              <line x1="230" y1="75" x2="380" y2="20" stroke="#f43f5e" strokeWidth="2.5" />
              <polygon points="315,44 318,52 308,48" fill="#f43f5e" />
              <text x="315" y="38" fill="#f43f5e" fontSize="10" fontWeight="bold">Reflected (θr = θi)</text>

              {/* Refracted/Transmitted Ray */}
              <line x1="230" y1="75" x2="340" y2="150" stroke="#34d399" strokeWidth="2.5" />
              <polygon points="290,116 283,110 282,118" fill="#34d399" />
              <text x="300" y="130" fill="#34d399" fontSize="10" fontWeight="bold">Refracted (θt)</text>

              {/* Labels for Media */}
              <text x="15" y="25" fill="#38bdf8" fontSize="10" fontWeight="bold">Medium 1 (n1 = √εr1)</text>
              <text x="15" y="100" fill="#a78bfa" fontSize="10" fontWeight="bold">Medium 2 (n2 = √εr2)</text>
            </g>

            {/* Bottom Analytical Summary */}
            <rect x="30" y="200" width="480" height="46" rx="4" fill="#020617" stroke="#1e293b" />
            <text x="270" y="216" fill="#fbbf24" fontSize="9.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              Snell’s Law: n1 sin(θi) = n2 sin(θt) | Brewster Angle (Parallel Γ|| = 0): tan(θB) = n2 / n1
            </text>
            <text x="270" y="234" fill="#38bdf8" fontSize="8.5" textAnchor="middle">
              Critical Angle (TIR when n1 &gt; n2): sin(θc) = n2 / n1 | Evanescent wave penetrates into Medium 2
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Oblique Incidence: Wavefront geometry governing refraction, polarizing Brewster angle, and total internal reflection."}
          </p>
        </div>
      );

    case 'circuit-ch11-skin-depth-conductors-shielding':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 260" className="w-full max-w-xl h-64">
            <text x="270" y="20" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold">
              Skin Depth Effect, Exponential Attenuation & Conductor Shielding
            </text>

            <g transform="translate(40, 35)">
              {/* Air / Dielectric (z < 0) */}
              <rect x="0" y="0" width="160" height="155" fill="#0f172a" fillOpacity="0.4" />
              <text x="20" y="25" fill="#38bdf8" fontSize="11" fontWeight="bold">Air / Free Space</text>
              <text x="20" y="42" fill="#94a3b8" fontSize="9">Propagation without loss</text>

              {/* Conductor Block (z >= 0) */}
              <rect x="160" y="0" width="300" height="155" fill="#334155" fillOpacity="0.4" stroke="#475569" />
              <line x1="160" y1="0" x2="160" y2="155" stroke="#f59e0b" strokeWidth="2.5" />
              <text x="175" y="25" fill="#facc15" fontSize="11" fontWeight="bold">Good Conductor (σ &gt;&gt; ωε)</text>

              {/* Exponential Decay Envelope in conductor */}
              <path d="M 160,40 Q 220,110 420,135" fill="none" stroke="#ef4444" strokeWidth="2.5" />
              <path d="M 160,130 Q 220,60 420,35" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" />

              {/* Oscillating Field under decay envelope */}
              <path d="M 60,85 Q 85,30 110,85 T 160,85 Q 185,55 210,85 T 260,85 T 310,85" fill="none" stroke="#38bdf8" strokeWidth="2" />

              {/* 1 Skin Depth Marker */}
              <line x1="220" y1="30" x2="220" y2="140" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="2 2" />
              <text x="220" y="152" textAnchor="middle" fill="#c084fc" fontSize="9" fontWeight="bold">z = δ (36.8%)</text>

              {/* 3 Skin Depths Marker */}
              <line x1="340" y1="30" x2="340" y2="140" stroke="#64748b" strokeWidth="1.5" strokeDasharray="2 2" />
              <text x="340" y="152" textAnchor="middle" fill="#94a3b8" fontSize="9">z = 3δ (5%)</text>
            </g>

            {/* Bottom Analytical Summary */}
            <rect x="30" y="200" width="480" height="46" rx="4" fill="#020617" stroke="#1e293b" />
            <text x="270" y="216" fill="#fbbf24" fontSize="9.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              Skin Depth: δ = √(2 / (ω μ σ)) = 1 / √(π f μ σ) | Field Decay: E(z) = E0 e^(-z/δ) e^(-j z/δ)
            </text>
            <text x="270" y="234" fill="#38bdf8" fontSize="8.5" textAnchor="middle">
              Shielding Effectiveness: SE = R + A + B ≈ 8.686 (t / δ) dB | High frequencies confine current to conductor surface
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Skin Depth: Penetration depth where wave amplitude attenuates to 1/e (36.8%) of its surface value."}
          </p>
        </div>
      );

    case 'circuit-ch11-waveguides-cutoff-dispersion':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 260" className="w-full max-w-xl h-64">
            <text x="270" y="20" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold">
              Rectangular Waveguide: TE10 Dominant Mode, Cutoff Frequencies & Dispersion
            </text>

            <g transform="translate(40, 35)">
              {/* 3D Rectangular Waveguide Perspective */}
              {/* Front Cross-section (width a, height b) */}
              <polygon points="40,130 180,130 180,50 40,50" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
              {/* Perspective depth along z */}
              <polygon points="180,130 380,80 380,15 180,50" fill="#1e293b" fillOpacity="0.7" stroke="#38bdf8" strokeWidth="1.5" />
              <polygon points="40,50 180,50 380,15 240,15" fill="#334155" fillOpacity="0.5" stroke="#38bdf8" strokeWidth="1.5" />

              {/* Dimensions: a (broad wall) and b (narrow wall) */}
              <line x1="40" y1="140" x2="180" y2="140" stroke="#facc15" strokeWidth="1.5" />
              <text x="110" y="152" textAnchor="middle" fill="#facc15" fontSize="10" fontWeight="bold">Broad Wall width (a)</text>

              <line x1="30" y1="50" x2="30" y2="130" stroke="#facc15" strokeWidth="1.5" />
              <text x="18" y="94" textAnchor="middle" fill="#facc15" fontSize="10" fontWeight="bold">b</text>

              {/* TE10 Electric Field half-sine arrows in front cross-section */}
              <line x1="75" y1="120" x2="75" y2="60" stroke="#34d399" strokeWidth="1.5" />
              <line x1="110" y1="125" x2="110" y2="55" stroke="#34d399" strokeWidth="2.5" />
              <polygon points="110,55 106,63 114,63" fill="#34d399" />
              <line x1="145" y1="120" x2="145" y2="60" stroke="#34d399" strokeWidth="1.5" />
              <text x="110" y="42" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="bold">Ey(x) = E0 sin(πx / a)</text>

              {/* Propagation direction z */}
              <line x1="180" y1="90" x2="430" y2="40" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" />
              <polygon points="430,40 420,39 423,47" fill="#f59e0b" />
              <text x="420" y="28" fill="#facc15" fontSize="10" fontWeight="bold">+z (Guide)</text>
            </g>

            {/* Bottom Analytical Summary */}
            <rect x="30" y="200" width="480" height="46" rx="4" fill="#020617" stroke="#1e293b" />
            <text x="270" y="216" fill="#fbbf24" fontSize="9.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              Dominant Cutoff: fc(TE10) = c / (2a) | Guide Wavelength: λg = λ0 / √(1 - (fc/f)²) &gt; λ0
            </text>
            <text x="270" y="234" fill="#38bdf8" fontSize="8.5" textAnchor="middle">
              Phase Velocity vp = c / √(1 - (fc/f)²) &gt; c | Group Velocity vg = c √(1 - (fc/f)²) &lt; c | vp · vg = c²
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Waveguides: Hollow conducting pipes supporting TE and TM modes with frequency cutoff and modal dispersion."}
          </p>
        </div>
      );

    case 'circuit-ch11-em-spectrum-radio-to-gamma':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 260" className="w-full max-w-xl h-64">
            <text x="270" y="20" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold">
              Electromagnetic Spectrum: From Radio Waves to High-Energy Gamma Rays
            </text>

            <g transform="translate(30, 40)">
              {/* Spectrum Bands Ribbon */}
              {/* 1. Radio */}
              <rect x="0" y="20" width="80" height="50" fill="#0284c7" />
              <text x="40" y="48" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="bold">Radio</text>
              <text x="40" y="62" textAnchor="middle" fill="#bae6fd" fontSize="7.5">&gt; 1 m</text>

              {/* 2. Microwave */}
              <rect x="80" y="20" width="75" height="50" fill="#0d9488" />
              <text x="117" y="48" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="bold">Microwave</text>
              <text x="117" y="62" textAnchor="middle" fill="#ccfbf1" fontSize="7.5">1 mm - 1 m</text>

              {/* 3. Infrared */}
              <rect x="155" y="20" width="75" height="50" fill="#d97706" />
              <text x="192" y="48" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="bold">Infrared</text>
              <text x="192" y="62" textAnchor="middle" fill="#fef3c7" fontSize="7.5">700 nm - 1 mm</text>

              {/* 4. Visible */}
              <rect x="230" y="20" width="40" height="50" fill="#16a34a" />
              <text x="250" y="48" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">Vis</text>
              <text x="250" y="62" textAnchor="middle" fill="#dcfce7" fontSize="7">0.5 µm</text>

              {/* 5. UV */}
              <rect x="270" y="20" width="65" height="50" fill="#6366f1" />
              <text x="302" y="48" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="bold">UV</text>
              <text x="302" y="62" textAnchor="middle" fill="#e0e7ff" fontSize="7.5">10 - 400 nm</text>

              {/* 6. X-Ray */}
              <rect x="335" y="20" width="75" height="50" fill="#a855f7" />
              <text x="372" y="48" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="bold">X-Ray</text>
              <text x="372" y="62" textAnchor="middle" fill="#f3e8ff" fontSize="7.5">0.01 - 10 nm</text>

              {/* 7. Gamma */}
              <rect x="410" y="20" width="70" height="50" fill="#e11d48" />
              <text x="445" y="48" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="bold">Gamma</text>
              <text x="445" y="62" textAnchor="middle" fill="#ffe4e6" fontSize="7.5">&lt; 0.01 nm</text>

              {/* Frequency axis arrow */}
              <line x1="0" y1="85" x2="480" y2="85" stroke="#f59e0b" strokeWidth="2" />
              <polygon points="480,85 470,81 470,89" fill="#f59e0b" />
              <text x="240" y="100" textAnchor="middle" fill="#facc15" fontSize="9.5" fontWeight="bold">Increasing Frequency (f) &amp; Photon Energy (E = hf) →</text>

              {/* Ionizing divider */}
              <line x1="300" y1="10" x2="300" y2="135" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" />
              <text x="290" y="125" textAnchor="end" fill="#94a3b8" fontSize="8">Non-Ionizing</text>
              <text x="310" y="125" textAnchor="start" fill="#f87171" fontSize="8" fontWeight="bold">Ionizing Radiation (&gt; 10 eV)</text>
            </g>

            {/* Bottom Analytical Summary */}
            <rect x="30" y="200" width="480" height="46" rx="4" fill="#020617" stroke="#1e293b" />
            <text x="270" y="216" fill="#fbbf24" fontSize="9.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              c = λ · f = 2.998 × 10⁸ m/s | Photon Energy: E = h·f (h = 6.626 × 10⁻³⁴ J·s = 4.136 × 10⁻¹⁵ eV·s)
            </text>
            <text x="270" y="234" fill="#38bdf8" fontSize="8.5" textAnchor="middle">
              Wien's Law: λpeak · T = 2.898 × 10⁻³ m·K | Atmosphere transparent to Radio and Optical windows
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Electromagnetic Spectrum: Continuous range of electromagnetic radiation classified by frequency and wavelength."}
          </p>
        </div>
      );

    case 'circuit-ch11-antenna-fundamentals-link-budget':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 260" className="w-full max-w-xl h-64">
            <text x="270" y="20" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold">
              Antenna Radiation Patterns, Directivity & Friis Free-Space Link Budget
            </text>

            <g transform="translate(30, 35)">
              {/* Transmitter Antenna (Left) */}
              <g transform="translate(40, 70)">
                <circle cx="0" cy="0" r="12" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
                <line x1="0" y1="12" x2="0" y2="55" stroke="#64748b" strokeWidth="3" />
                <polygon points="-15,55 15,55 0,12" fill="none" stroke="#64748b" strokeWidth="1.5" />
                <text x="0" y="-18" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">TX: Pt, Gt</text>

                {/* Directional Radiation Lobe */}
                <path d="M 0,0 Q 80,-40 100,0 Q 80,40 0,0" fill="#0284c7" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="1.8" />
                <text x="65" y="4" fill="#facc15" fontSize="8.5" fontWeight="bold">Main Beam</text>
              </g>

              {/* Free-Space Path Loss Wavefronts (Center) */}
              <g transform="translate(180, 20)">
                <path d="M 10,20 A 80 80 0 0 1 10,100" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
                <path d="M 50,10 A 110 110 0 0 1 50,110" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
                <path d="M 90,0 A 140 140 0 0 1 90,120" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
                {/* Distance arrow */}
                <line x1="-30" y1="130" x2="160" y2="130" stroke="#64748b" strokeWidth="1.5" />
                <text x="65" y="142" textAnchor="middle" fill="#94a3b8" fontSize="9">Link Distance (d)</text>
              </g>

              {/* Receiver Antenna (Right) */}
              <g transform="translate(390, 70)">
                <circle cx="0" cy="0" r="12" fill="#059669" stroke="#34d399" strokeWidth="2" />
                <line x1="0" y1="12" x2="0" y2="55" stroke="#64748b" strokeWidth="3" />
                <polygon points="-15,55 15,55 0,12" fill="none" stroke="#64748b" strokeWidth="1.5" />
                <text x="0" y="-18" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">RX: Pr, Gr</text>
              </g>
            </g>

            {/* Bottom Analytical Summary */}
            <rect x="30" y="200" width="480" height="46" rx="4" fill="#020617" stroke="#1e293b" />
            <text x="270" y="216" fill="#fbbf24" fontSize="9.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              Friis Formula: Pr = Pt · Gt · Gr · (λ / 4π d)² | EIRP = Pt · Gt (W or dBm)
            </text>
            <text x="270" y="234" fill="#38bdf8" fontSize="8.5" textAnchor="middle">
              FSPL(dB) = 32.44 + 20 log10(d_km) + 20 log10(f_MHz) | Link Margin = Pr(dBm) - Psensitivity(dBm) ≥ 0
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Antenna & Link Budget: Effective radiated power, free-space spreading loss, and receiver signal margin."}
          </p>
        </div>
      );

    case 'circuit-ch15-shock-pathway-impedance':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 280" className="w-full max-w-2xl h-64">
            <rect width="540" height="280" rx="8" fill="#020617" stroke="#1e293b" />
            <text x="270" y="24" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">
              Electric Shock Pathway & Human Body Equivalent Circuit (IEC 60479-1)
            </text>

            {/* Mains Supply (Left) */}
            <g transform="translate(40, 45)">
              <rect x="0" y="0" width="75" height="150" rx="6" fill="#0f172a" stroke="#dc2626" strokeWidth="1.5" />
              <text x="37" y="22" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="middle">230 V AC</text>
              <text x="37" y="38" fill="#94a3b8" fontSize="9" textAnchor="middle">Mains Source</text>
              
              {/* Phase Terminal */}
              <circle cx="75" cy="55" r="5" fill="#dc2626" />
              <text x="50" y="59" fill="#ef4444" fontSize="10" fontWeight="bold">L</text>
              
              {/* Neutral Terminal */}
              <circle cx="75" cy="115" r="5" fill="#2563eb" />
              <text x="50" y="119" fill="#60a5fa" fontSize="10" fontWeight="bold">N</text>

              {/* Source Neutral Earth */}
              <line x1="37" y1="150" x2="37" y2="190" stroke="#10b981" strokeWidth="2" />
              <line x1="20" y1="190" x2="54" y2="190" stroke="#10b981" strokeWidth="2" />
              <line x1="26" y1="195" x2="48" y2="195" stroke="#10b981" strokeWidth="1.5" />
              <line x1="32" y1="200" x2="42" y2="200" stroke="#10b981" strokeWidth="1" />
              <text x="37" y="214" fill="#34d399" fontSize="8.5" textAnchor="middle">Substation Earth</text>
            </g>

            {/* Live Wire to Hand */}
            <line x1="115" y1="100" x2="190" y2="100" stroke="#ef4444" strokeWidth="3" />
            <polygon points="175,96 185,100 175,104" fill="#ef4444" />
            <text x="145" y="92" fill="#fca5a5" fontSize="9" textAnchor="middle" fontWeight="bold">Touch (230 V)</text>

            {/* Body Equivalent Impedance Model (Center) */}
            <g transform="translate(190, 45)">
              <rect x="0" y="0" width="220" height="150" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 2" />
              <text x="110" y="18" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">Human Body Impedance Zb</text>

              {/* Entrance Skin: Rskin1 // Cskin1 */}
              <g transform="translate(15, 35)">
                <rect x="0" y="5" width="42" height="24" rx="3" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.2" />
                <text x="21" y="20" fill="#fde68a" fontSize="8" textAnchor="middle">R_skin1</text>
                <text x="21" y="44" fill="#94a3b8" fontSize="7.5" textAnchor="middle">(500-100kΩ)</text>
              </g>

              {/* Arrow */}
              <line x1="65" y1="55" x2="85" y2="55" stroke="#fbbf24" strokeWidth="2" />
              <polygon points="80,51 88,55 80,59" fill="#fbbf24" />

              {/* Internal Body Resistance: Rinternal */}
              <g transform="translate(90, 35)">
                <rect x="0" y="5" width="45" height="24" rx="3" fill="#1e293b" stroke="#ef4444" strokeWidth="1.2" />
                <text x="22" y="20" fill="#fca5a5" fontSize="8" textAnchor="middle">R_internal</text>
                <text x="22" y="44" fill="#ef4444" fontSize="7.5" textAnchor="middle" fontWeight="bold">≈ 500 Ω</text>
              </g>

              {/* Arrow */}
              <line x1="140" y1="55" x2="160" y2="55" stroke="#fbbf24" strokeWidth="2" />
              <polygon points="155,51 163,55 155,59" fill="#fbbf24" />

              {/* Exit Skin: Rskin2 */}
              <g transform="translate(165, 35)">
                <rect x="0" y="5" width="42" height="24" rx="3" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.2" />
                <text x="21" y="20" fill="#fde68a" fontSize="8" textAnchor="middle">R_skin2</text>
                <text x="21" y="44" fill="#94a3b8" fontSize="7.5" textAnchor="middle">(Foot Contact)</text>
              </g>

              {/* Current Vector Flow Arrow */}
              <line x1="15" y1="95" x2="195" y2="95" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="5 3" />
              <polygon points="190,91 200,95 190,99" fill="#ef4444" />
              <text x="105" y="112" fill="#ef4444" fontSize="9.5" fontWeight="bold" textAnchor="middle">
                Shock Current Ib = Vtouch / Zb
              </text>
              <text x="105" y="132" fill="#94a3b8" fontSize="8" textAnchor="middle">
                Heart in thoracic path → Ventricular Fibrillation risk
              </text>
            </g>

            {/* Foot contact to Ground & Soil Return Path */}
            <line x1="400" y1="120" x2="445" y2="120" stroke="#10b981" strokeWidth="2" />
            <line x1="445" y1="120" x2="445" y2="190" stroke="#10b981" strokeWidth="2" />
            
            {/* Person Foot Ground electrode */}
            <line x1="430" y1="190" x2="460" y2="190" stroke="#10b981" strokeWidth="2" />
            <line x1="435" y1="195" x2="455" y2="195" stroke="#10b981" strokeWidth="1.5" />
            <line x1="440" y1="200" x2="450" y2="200" stroke="#10b981" strokeWidth="1" />
            <text x="445" y="214" fill="#34d399" fontSize="8.5" textAnchor="middle">Earth Ground</text>

            {/* Earth Mass Loop */}
            <path d="M 445,220 C 445,260 77,260 77,220" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="260" y="248" fill="#34d399" fontSize="9" textAnchor="middle" fontWeight="bold">
              Earth Return Loop to Source Neutral Closes Shock Circuit
            </text>

            {/* Bottom Warning Pill */}
            <rect x="40" y="258" width="460" height="18" rx="4" fill="#450a0a" stroke="#dc2626" />
            <text x="270" y="271" fill="#fecaca" fontSize="9" fontWeight="bold" textAnchor="middle">
              Ib &gt; 10 mA: Muscular "Can't Let Go" | Ib &gt; 50-100 mA: Ventricular Fibrillation (Fatal in &lt; 1 s)
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Electric Shock Pathway: Hand-to-foot current loop through body impedance Zb into ground return."}
          </p>
        </div>
      );

    case 'circuit-ch15-accident-mechanisms':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 280" className="w-full max-w-2xl h-64">
            <rect width="540" height="280" rx="8" fill="#020617" stroke="#1e293b" />
            <text x="270" y="22" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">
              Primary Causes &amp; Mechanisms of Electrical Accidents
            </text>

            {/* 4 Quadrants */}
            {/* Quadrant 1: Insulation Failure */}
            <g transform="translate(25, 38)">
              <rect width="235" height="102" rx="6" fill="#0f172a" stroke="#dc2626" strokeWidth="1.2" />
              <text x="12" y="20" fill="#ef4444" fontSize="11" fontWeight="bold">1. Insulation Breakdown</text>
              <line x1="20" y1="45" x2="80" y2="45" stroke="#ef4444" strokeWidth="4" />
              {/* Damaged insulation notch */}
              <circle cx="50" cy="45" r="7" fill="#fbbf24" stroke="#dc2626" strokeWidth="1.5" />
              <text x="50" y="48" fill="#000" fontSize="8" fontWeight="bold" textAnchor="middle">⚡</text>
              <text x="95" y="42" fill="#fca5a5" fontSize="8.5">Cracked PVC sleeve</text>
              <text x="95" y="55" fill="#fca5a5" fontSize="8.5">Exposed copper conductor</text>
              <text x="12" y="80" fill="#94a3b8" fontSize="8">
                Aging, UV, vibration, thermal cycles degrade dielectric strength.
              </text>
              <text x="12" y="93" fill="#f87171" fontSize="8" fontWeight="bold">
                Direct contact shock hazard
              </text>
            </g>

            {/* Quadrant 2: Missing / Severed Earthing */}
            <g transform="translate(280, 38)">
              <rect width="235" height="102" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.2" />
              <text x="12" y="20" fill="#fbbf24" fontSize="11" fontWeight="bold">2. Disconnected Earth (PE)</text>
              <rect x="25" y="35" width="45" height="30" rx="3" fill="#1e293b" stroke="#f59e0b" />
              <text x="47" y="52" fill="#fbbf24" fontSize="8" textAnchor="middle">Chassis</text>
              <line x1="70" y1="50" x2="100" y2="50" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 2" />
              <text x="85" y="42" fill="#ef4444" fontSize="12" fontWeight="bold">✕</text>
              <text x="110" y="42" fill="#fde68a" fontSize="8.5">Broken ground wire</text>
              <text x="110" y="55" fill="#fde68a" fontSize="8.5">Floating frame at 230 V</text>
              <text x="12" y="80" fill="#94a3b8" fontSize="8">
                Metal enclosure becomes live without tripping overcurrent breaker.
              </text>
              <text x="12" y="93" fill="#fbbf24" fontSize="8" fontWeight="bold">
                Indirect contact electrocution
              </text>
            </g>

            {/* Quadrant 3: Water & Moisture Ingress */}
            <g transform="translate(25, 150)">
              <rect width="235" height="105" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
              <text x="12" y="20" fill="#38bdf8" fontSize="11" fontWeight="bold">3. Moisture &amp; Water Ingress</text>
              <circle cx="45" cy="50" r="16" fill="#0284c7" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="45" y="54" fill="#38bdf8" fontSize="10" textAnchor="middle">💧</text>
              <text x="75" y="42" fill="#bae6fd" fontSize="8.5">Skin Zb drops from 100kΩ</text>
              <text x="75" y="55" fill="#bae6fd" fontSize="8.5">to &lt; 1,000 Ω when wet</text>
              <text x="12" y="82" fill="#94a3b8" fontSize="8">
                Conductive dissolved salts bridge terminals; creates tracking arc.
              </text>
              <text x="12" y="95" fill="#38bdf8" fontSize="8" fontWeight="bold">
                Lethal shock at standard 230 V
              </text>
            </g>

            {/* Quadrant 4: Overloading & Daisy-Chaining */}
            <g transform="translate(280, 150)">
              <rect width="235" height="105" rx="6" fill="#0f172a" stroke="#ea580c" strokeWidth="1.2" />
              <text x="12" y="20" fill="#f97316" fontSize="11" fontWeight="bold">4. Overloading &amp; Daisy-Chains</text>
              <rect x="25" y="38" width="55" height="22" rx="3" fill="#1e293b" stroke="#ea580c" />
              <text x="52" y="52" fill="#fdba74" fontSize="8" textAnchor="middle">Strip: 28 A</text>
              <text x="90" y="42" fill="#fdba74" fontSize="8.5">Rated: 13 A max</text>
              <text x="90" y="55" fill="#ef4444" fontSize="8.5" fontWeight="bold">Heat P = I² · R</text>
              <text x="12" y="82" fill="#94a3b8" fontSize="8">
                Excessive Joulean dissipation melts sockets, burns PVC insulation.
              </text>
              <text x="12" y="95" fill="#ea580c" fontSize="8" fontWeight="bold">
                Catastrophic electrical fire
              </text>
            </g>

            {/* Bottom summary */}
            <rect x="25" y="260" width="490" height="16" rx="3" fill="#020617" stroke="#334155" />
            <text x="270" y="272" fill="#cbd5e1" fontSize="8.5" textAnchor="middle">
              Prevention: IS 732 / NFPA 70 compliant wiring, 30 mA RCCB, certified PPE, and regular thermography.
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Four Root Causes of Electrical Accidents: Insulation aging, broken earthing, moisture, and overload."}
          </p>
        </div>
      );

    case 'circuit-ch15-earthing-protection-circuit':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 280" className="w-full max-w-2xl h-64">
            <rect width="540" height="280" rx="8" fill="#020617" stroke="#1e293b" />
            <text x="270" y="22" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">
              Earthing Protection Mechanics: Unearthed vs Properly Earthed Chassis Fault
            </text>

            {/* Left Case: UN-EARTHED (Lethal) */}
            <g transform="translate(20, 40)">
              <rect width="240" height="195" rx="6" fill="#0f172a" stroke="#dc2626" strokeWidth="1.5" />
              <text x="120" y="20" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="middle">
                CASE A: UNEARTHED CHASSIS
              </text>

              {/* Mains Line */}
              <text x="15" y="45" fill="#f87171" fontSize="9" fontWeight="bold">Phase (230 V)</text>
              <line x1="85" y1="42" x2="140" y2="42" stroke="#ef4444" strokeWidth="2.5" />
              
              {/* Internal Fault touching metal frame */}
              <line x1="140" y1="42" x2="140" y2="70" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 2" />
              <polygon points="137,65 140,73 143,65" fill="#ef4444" />
              <text x="150" y="62" fill="#ef4444" fontSize="8" fontWeight="bold">Internal Fault</text>

              {/* Metal Casing */}
              <rect x="70" y="70" width="105" height="55" rx="4" fill="#1e293b" stroke="#f87171" strokeWidth="2" />
              <text x="122" y="92" fill="#fca5a5" fontSize="9" textAnchor="middle" fontWeight="bold">Metal Chassis</text>
              <text x="122" y="108" fill="#ef4444" fontSize="10" textAnchor="middle" fontWeight="bold">Vtouch = 230 V!</text>

              {/* Person Touching Frame */}
              <circle cx="195" cy="80" r="8" fill="#fca5a5" stroke="#dc2626" />
              <line x1="195" y1="88" x2="195" y2="120" stroke="#fca5a5" strokeWidth="2" />
              <line x1="175" y1="92" x2="195" y2="92" stroke="#ef4444" strokeWidth="2" />
              <line x1="195" y1="120" x2="195" y2="155" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 2" />
              <text x="195" y="145" fill="#fca5a5" fontSize="7.5" textAnchor="end">Shock Current</text>

              {/* Ground return through person */}
              <line x1="180" y1="155" x2="210" y2="155" stroke="#10b981" strokeWidth="2" />
              <line x1="185" y1="160" x2="205" y2="160" stroke="#10b981" strokeWidth="1.5" />
              <text x="195" y="172" fill="#34d399" fontSize="8" textAnchor="middle">Ground</text>

              {/* Result callout */}
              <rect x="10" y="140" width="130" height="46" rx="4" fill="#450a0a" stroke="#ef4444" />
              <text x="75" y="154" fill="#fecaca" fontSize="8" textAnchor="middle" fontWeight="bold">Current = 230 V / 1000 Ω</text>
              <text x="75" y="167" fill="#f87171" fontSize="9" textAnchor="middle" fontWeight="bold">= 230 mA (FATAL!)</text>
              <text x="75" y="180" fill="#fca5a5" fontSize="7.5" textAnchor="middle">Fuse does NOT blow!</text>
            </g>

            {/* Right Case: PROPERLY EARTHED (Safe) */}
            <g transform="translate(280, 40)">
              <rect width="240" height="195" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
              <text x="120" y="20" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">
                CASE B: EARTHED CHASSIS (IS 3043)
              </text>

              {/* Fuse in Phase Line */}
              <text x="15" y="45" fill="#38bdf8" fontSize="9" fontWeight="bold">Phase</text>
              <rect x="52" y="37" width="22" height="10" rx="2" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
              <line x1="74" y1="42" x2="135" y2="42" stroke="#ef4444" strokeWidth="2.5" />
              <text x="63" y="33" fill="#fbbf24" fontSize="7.5" textAnchor="middle">16A Fuse</text>

              {/* Internal Fault touching metal frame */}
              <line x1="135" y1="42" x2="135" y2="70" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 2" />

              {/* Metal Casing */}
              <rect x="70" y="70" width="105" height="55" rx="4" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
              <text x="122" y="92" fill="#a7f3d0" fontSize="9" textAnchor="middle" fontWeight="bold">Metal Chassis</text>
              <text x="122" y="108" fill="#34d399" fontSize="10" textAnchor="middle" fontWeight="bold">Vtouch &lt; 0.5 V (Safe)</text>

              {/* Heavy Low-Resistance Earth Conductor (PE) */}
              <line x1="90" y1="125" x2="90" y2="155" stroke="#10b981" strokeWidth="4" />
              <line x1="75" y1="155" x2="105" y2="155" stroke="#10b981" strokeWidth="2.5" />
              <line x1="80" y1="160" x2="100" y2="160" stroke="#10b981" strokeWidth="1.8" />
              <text x="90" y="172" fill="#34d399" fontSize="8" textAnchor="middle" fontWeight="bold">RA = 2.0 Ω</text>

              {/* Person Touching Safe Frame */}
              <circle cx="195" cy="80" r="8" fill="#a7f3d0" stroke="#10b981" />
              <line x1="195" y1="88" x2="195" y2="120" stroke="#a7f3d0" strokeWidth="2" />
              <line x1="175" y1="92" x2="195" y2="92" stroke="#94a3b8" strokeWidth="1.5" />
              <text x="195" y="132" fill="#34d399" fontSize="7.5" textAnchor="middle">Safe Touch</text>

              {/* Result callout */}
              <rect x="110" y="140" width="120" height="46" rx="4" fill="#064e3b" stroke="#10b981" />
              <text x="170" y="154" fill="#a7f3d0" fontSize="8" textAnchor="middle" fontWeight="bold">Ifault = 230 / 2.1 = 109 A</text>
              <text x="170" y="167" fill="#34d399" fontSize="9" textAnchor="middle" fontWeight="bold">Fuse Blows in &lt; 40 ms!</text>
              <text x="170" y="180" fill="#a7f3d0" fontSize="7.5" textAnchor="middle">Iperson &lt; 0.5 mA (Harmless)</text>
            </g>

            {/* Bottom Analytical Rule */}
            <rect x="20" y="245" width="500" height="26" rx="4" fill="#020617" stroke="#1e293b" />
            <text x="270" y="258" fill="#fbbf24" fontSize="8.5" textAnchor="middle" fontWeight="bold">
              Earthing provides low-impedance parallel path (RA &lt;&lt; Rperson), forcing massive fault current to trip fuse instantly!
            </text>
            <text x="270" y="268" fill="#94a3b8" fontSize="8" textAnchor="middle">
              Standard: Touch voltage must remain below 50 V AC per IEC 60364-4-41.
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Earthing Protection: Low-resistance ground path diverts current and triggers instantaneous fuse clearance."}
          </p>
        </div>
      );

    case 'circuit-ch15-fuse-construction-characteristics':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 280" className="w-full max-w-2xl h-64">
            <rect width="540" height="280" rx="8" fill="#020617" stroke="#1e293b" />
            <text x="270" y="22" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">
              High Rupturing Capacity (HRC) Fuse Construction &amp; I²t Inverse Tripping
            </text>

            {/* Left: Cutaway Diagram of HRC Cartridge */}
            <g transform="translate(25, 45)">
              <text x="110" y="14" fill="#fbbf24" fontSize="10.5" fontWeight="bold" textAnchor="middle">
                HRC Fuse Internal Construction
              </text>

              {/* Ceramic Cartridge Body */}
              <rect x="25" y="30" width="170" height="75" rx="5" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />
              <rect x="35" y="38" width="150" height="59" fill="#fef08a" fillOpacity="0.4" stroke="#eab308" strokeDasharray="2 2" />
              <text x="110" y="72" fill="#854d0e" fontSize="9" fontWeight="bold" textAnchor="middle">
                Granular Quartz Silica Sand
              </text>
              <text x="110" y="84" fill="#854d0e" fontSize="7.5" textAnchor="middle">
                (Arc Extinguishing &amp; Quenching Medium)
              </text>

              {/* End Caps (Silver/Brass) */}
              <rect x="10" y="25" width="20" height="85" rx="3" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
              <rect x="190" y="25" width="20" height="85" rx="3" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
              
              {/* Fixing Tags */}
              <rect x="0" y="55" width="10" height="25" fill="#94a3b8" stroke="#475569" />
              <circle cx="5" cy="67" r="3" fill="#020617" />
              <rect x="210" y="55" width="10" height="25" fill="#94a3b8" stroke="#475569" />
              <circle cx="215" cy="67" r="3" fill="#020617" />

              {/* Pure Silver Fuse Element with Waisted Notches */}
              <path d="M 30,55 L 70,55 L 75,53 L 80,55 L 105,55 L 110,53 L 115,55 L 140,55 L 145,53 L 150,55 L 190,55" fill="none" stroke="#dc2626" strokeWidth="2.5" />
              <circle cx="75" cy="53" r="3" fill="#fef08a" stroke="#dc2626" />
              <circle cx="110" cy="53" r="3" fill="#fef08a" stroke="#dc2626" />
              <circle cx="145" cy="53" r="3" fill="#fef08a" stroke="#dc2626" />
              <text x="110" y="47" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">
                Calibrated Waisted Melting Notches
              </text>

              {/* Labels below */}
              <text x="110" y="125" fill="#94a3b8" fontSize="8.5" textAnchor="middle">
                Steatite Ceramic Body | High Rupturing Capacity: 80 kA to 120 kA
              </text>
            </g>

            {/* Right: Time-Current Characteristic Curve */}
            <g transform="translate(280, 45)">
              <text x="115" y="14" fill="#38bdf8" fontSize="10.5" fontWeight="bold" textAnchor="middle">
                Inverse Time-Current Characteristic (I²t)
              </text>

              {/* Axes */}
              <line x1="35" y1="120" x2="215" y2="120" stroke="#64748b" strokeWidth="1.5" />
              <line x1="35" y1="25" x2="35" y2="120" stroke="#64748b" strokeWidth="1.5" />
              <text x="125" y="134" fill="#94a3b8" fontSize="8" textAnchor="middle">Current (Multiples of In) →</text>
              <text x="25" y="70" fill="#94a3b8" fontSize="8" textAnchor="middle" transform="rotate(-90 25 70)">Time (s) →</text>

              {/* Inverse Curve */}
              <path d="M 45,30 Q 55,100 205,115" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
              
              {/* Operating Points */}
              <circle cx="55" cy="65" r="4" fill="#ef4444" />
              <text x="65" y="62" fill="#fca5a5" fontSize="7.5">Overload: Long delay</text>

              <circle cx="170" cy="113" r="4" fill="#ef4444" />
              <text x="160" y="105" fill="#ef4444" fontSize="7.5" fontWeight="bold">Short-Circuit: &lt; 5 ms</text>

              {/* Mathematical Box */}
              <rect x="25" y="145" width="200" height="42" rx="4" fill="#0f172a" stroke="#334155" />
              <text x="125" y="160" fill="#fbbf24" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                Pre-Arcing Joule Integral: I²t = Constant
              </text>
              <text x="125" y="176" fill="#38bdf8" fontSize="8" textAnchor="middle">
                Preece Law: I_fusing = k · d^(1.5)
              </text>
            </g>

            {/* Bottom Comparison */}
            <rect x="25" y="244" width="490" height="26" rx="4" fill="#020617" stroke="#1e293b" />
            <text x="270" y="258" fill="#fbbf24" fontSize="8.5" textAnchor="middle" fontWeight="bold">
              Fusing Factor = Minimum Fusing Current / Rated Current (HRC ≈ 1.2 to 1.25; Rewireable ≈ 1.6 to 2.0)
            </text>
            <text x="270" y="267" fill="#94a3b8" fontSize="7.5" textAnchor="middle">
              Rewireable fuses age and oxidize; HRC fuses provide hermetically sealed, non-deteriorating cutoff.
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "HRC Fuse Construction & I²t Characteristic: Silver notched element, silica sand quenching, and inverse time clearance."}
          </p>
        </div>
      );

    case 'circuit-ch15-mcb-construction-tripping':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 280" className="w-full max-w-2xl h-64">
            <rect width="540" height="280" rx="8" fill="#020617" stroke="#1e293b" />
            <text x="270" y="22" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">
              Miniature Circuit Breaker (MCB) Internal Cutaway &amp; Dual Tripping Mechanism
            </text>

            {/* Outer MCB Enclosure */}
            <g transform="translate(30, 38)">
              <rect width="270" height="200" rx="8" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
              
              {/* Top Terminal (Line) */}
              <rect x="20" y="0" width="35" height="18" rx="2" fill="#334155" stroke="#94a3b8" />
              <text x="37" y="13" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">IN</text>

              {/* Bottom Terminal (Load) */}
              <rect x="215" y="182" width="35" height="18" rx="2" fill="#334155" stroke="#94a3b8" />
              <text x="232" y="195" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle">OUT</text>

              {/* Operating Handle */}
              <rect x="20" y="80" width="22" height="40" rx="4" fill="#dc2626" stroke="#ef4444" />
              <text x="31" y="104" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle" transform="rotate(-90 31 104)">ON</text>

              {/* 1. Bimetallic Strip (Thermal Overload Trip) */}
              <g transform="translate(195, 40)">
                <rect x="0" y="0" width="6" height="55" fill="#ef4444" />
                <rect x="6" y="0" width="6" height="55" fill="#3b82f6" />
                <text x="16" y="25" fill="#fbbf24" fontSize="8" fontWeight="bold">Bimetal Strip</text>
                <text x="16" y="36" fill="#94a3b8" fontSize="7">Thermal Overload</text>
                <text x="16" y="47" fill="#94a3b8" fontSize="7">(1.13 - 1.45 In)</text>
              </g>

              {/* 2. Magnetic Trip Solenoid (Instant Short-Circuit) */}
              <g transform="translate(65, 40)">
                <rect x="0" y="0" width="45" height="35" rx="3" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
                {/* Solenoid Coils */}
                <path d="M 5,8 Q 22,0 40,8 M 5,16 Q 22,8 40,16 M 5,24 Q 22,16 40,24" stroke="#f59e0b" strokeWidth="2" fill="none" />
                <rect x="18" y="28" width="8" height="16" fill="#cbd5e1" />
                <text x="22" y="55" fill="#fbbf24" fontSize="7.5" textAnchor="middle" fontWeight="bold">Magnetic Coil</text>
                <text x="22" y="65" fill="#ef4444" fontSize="7" textAnchor="middle">&lt; 10 ms Trip</text>
              </g>

              {/* 3. Arc Chute & De-ion Plates */}
              <g transform="translate(115, 110)">
                <rect x="0" y="0" width="70" height="55" rx="3" fill="#1e293b" stroke="#ef4444" strokeWidth="1.2" />
                <line x1="12" y1="10" x2="58" y2="10" stroke="#cbd5e1" strokeWidth="2" />
                <line x1="12" y1="20" x2="58" y2="20" stroke="#cbd5e1" strokeWidth="2" />
                <line x1="12" y1="30" x2="58" y2="30" stroke="#cbd5e1" strokeWidth="2" />
                <line x1="12" y1="40" x2="58" y2="40" stroke="#cbd5e1" strokeWidth="2" />
                <line x1="12" y1="48" x2="58" y2="48" stroke="#cbd5e1" strokeWidth="2" />
                <text x="35" y="32" fill="#f87171" fontSize="8" fontWeight="bold" textAnchor="middle">
                  Arc Chute Plates
                </text>
                <text x="35" y="64" fill="#94a3b8" fontSize="7" textAnchor="middle">
                  De-ionizes &amp; splits arc
                </text>
              </g>

              {/* Main Contacts */}
              <circle cx="100" cy="95" r="5" fill="#cbd5e1" stroke="#f59e0b" strokeWidth="2" />
              <line x1="100" y1="95" x2="120" y2="85" stroke="#ef4444" strokeWidth="3" />
            </g>

            {/* Right: Characteristic Types & Tripping Table */}
            <g transform="translate(320, 38)">
              <rect width="190" height="200" rx="6" fill="#0f172a" stroke="#334155" />
              <text x="95" y="20" fill="#38bdf8" fontSize="10.5" fontWeight="bold" textAnchor="middle">
                MCB Tripping Curves (EN 60898)
              </text>

              {/* Type B */}
              <rect x="10" y="32" width="170" height="42" rx="3" fill="#1e293b" stroke="#38bdf8" />
              <text x="18" y="47" fill="#38bdf8" fontSize="9" fontWeight="bold">TYPE B (3 - 5 × In)</text>
              <text x="18" y="62" fill="#cbd5e1" fontSize="7.5">Domestic lighting, resistive heaters.</text>

              {/* Type C */}
              <rect x="10" y="80" width="170" height="42" rx="3" fill="#1e293b" stroke="#fbbf24" />
              <text x="18" y="95" fill="#fbbf24" fontSize="9" fontWeight="bold">TYPE C (5 - 10 × In)</text>
              <text x="18" y="110" fill="#cbd5e1" fontSize="7.5">Commercial inductive loads, ACs, pumps.</text>

              {/* Type D */}
              <rect x="10" y="128" width="170" height="42" rx="3" fill="#1e293b" stroke="#ef4444" />
              <text x="18" y="143" fill="#ef4444" fontSize="9" fontWeight="bold">TYPE D (10 - 20 × In)</text>
              <text x="18" y="158" fill="#cbd5e1" fontSize="7.5">High inrush motors, welders, X-ray.</text>

              {/* Key rule */}
              <text x="95" y="188" fill="#a7f3d0" fontSize="8" textAnchor="middle" fontWeight="bold">
                Rated Breaking Capacity: 6 kA to 10 kA
              </text>
            </g>

            {/* Bottom rule */}
            <rect x="30" y="248" width="480" height="22" rx="4" fill="#020617" stroke="#1e293b" />
            <text x="270" y="262" fill="#fbbf24" fontSize="8.5" textAnchor="middle" fontWeight="bold">
              Dual Protection: Bimetal bends slowly for thermal overloads; Solenoid plunger strikes latch in &lt; 10 ms on short circuits.
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "MCB Internal Cutaway: Bimetallic thermal overload strip, magnetic short-circuit coil, and de-ionizing arc chute."}
          </p>
        </div>
      );

    case 'circuit-ch15-rccb-core-operation':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 280" className="w-full max-w-2xl h-64">
            <rect width="540" height="280" rx="8" fill="#020617" stroke="#1e293b" />
            <text x="270" y="22" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">
              Residual Current Circuit Breaker (RCCB): Core Balance Transformer (CBCT) Principle
            </text>

            {/* Main Toroidal Core (Center Left) */}
            <g transform="translate(140, 125)">
              {/* Outer and Inner Circle of Toroid */}
              <circle cx="0" cy="0" r="55" fill="#1e293b" stroke="#0284c7" strokeWidth="8" />
              <circle cx="0" cy="0" r="35" fill="#020617" stroke="#0284c7" strokeWidth="2" />
              <text x="0" y="4" fill="#38bdf8" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                Toroidal Core
              </text>
              <text x="0" y="16" fill="#94a3b8" fontSize="7" textAnchor="middle">(CBCT)</text>

              {/* Flux cancellation note */}
              <text x="0" y="-62" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">
                Φ_L + Φ_N = 0 (Healthy)
              </text>

              {/* Search / Secondary Sensing Winding */}
              <g transform="translate(38, -25)">
                <path d="M 0,0 Q 15,5 0,10 Q 15,15 0,20 Q 15,25 0,30 Q 15,35 0,40 Q 15,45 0,50" fill="none" stroke="#f59e0b" strokeWidth="3" />
                <text x="25" y="28" fill="#fbbf24" fontSize="8" fontWeight="bold">Sensing Coil</text>
              </g>
            </g>

            {/* Phase Conductor Line */}
            <line x1="40" y1="95" x2="310" y2="95" stroke="#ef4444" strokeWidth="3.5" />
            <polygon points="200,91 212,95 200,99" fill="#ef4444" />
            <text x="50" y="88" fill="#fca5a5" fontSize="9" fontWeight="bold">Phase: IL →</text>

            {/* Neutral Conductor Line */}
            <line x1="310" y1="155" x2="40" y2="155" stroke="#3b82f6" strokeWidth="3.5" />
            <polygon points="150,159 138,155 150,151" fill="#3b82f6" />
            <text x="50" y="172" fill="#93c5fd" fontSize="9" fontWeight="bold">← Neutral: IN</text>

            {/* Load (Right) */}
            <g transform="translate(310, 80)">
              <rect width="60" height="90" rx="4" fill="#0f172a" stroke="#64748b" strokeWidth="1.5" />
              <text x="30" y="48" fill="#e2e8f0" fontSize="9.5" fontWeight="bold" textAnchor="middle">Load</text>
            </g>

            {/* Earth Leakage Current Path (Bypassing Neutral) */}
            <path d="M 340,170 L 340,210 L 190,210" fill="none" stroke="#eab308" strokeWidth="2.5" strokeDasharray="4 2" />
            <polygon points="195,206 185,210 195,214" fill="#eab308" />
            <text x="260" y="202" fill="#fde047" fontSize="8.5" fontWeight="bold">
              Earth Leakage Current IΔn (e.g. 30 mA)
            </text>
            {/* Earth Ground Electrode */}
            <line x1="175" y1="210" x2="175" y2="225" stroke="#10b981" strokeWidth="2" />
            <line x1="165" y1="225" x2="185" y2="225" stroke="#10b981" strokeWidth="2" />
            <line x1="170" y1="230" x2="180" y2="230" stroke="#10b981" strokeWidth="1.5" />

            {/* Polarized Trip Relay & Mechanical Latch */}
            <g transform="translate(200, 40)">
              <rect width="80" height="42" rx="4" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="40" y="16" fill="#fbbf24" fontSize="8.5" fontWeight="bold" textAnchor="middle">Trip Relay</text>
              <text x="40" y="30" fill="#ef4444" fontSize="7.5" fontWeight="bold" textAnchor="middle">Trip in &lt; 30 ms</text>
              {/* Connection from sensing coil */}
              <line x1="-20" y1="60" x2="0" y2="30" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
              {/* Trip link to breaker contact */}
              <line x1="40" y1="42" x2="40" y2="55" stroke="#ef4444" strokeWidth="2" />
            </g>

            {/* Test Circuit with Test Push Button & Resistor */}
            <g transform="translate(385, 45)">
              <rect width="135" height="135" rx="5" fill="#0f172a" stroke="#a855f7" strokeWidth="1.2" />
              <text x="67" y="18" fill="#c084fc" fontSize="9" fontWeight="bold" textAnchor="middle">
                Monthly Test Circuit
              </text>
              <circle cx="67" cy="45" r="12" fill="#7e22ce" stroke="#c084fc" strokeWidth="2" />
              <text x="67" y="49" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">"T"</text>
              
              {/* Internal Test Resistor Rtest */}
              <rect x="42" y="70" width="50" height="20" rx="3" fill="#1e293b" stroke="#f59e0b" />
              <text x="67" y="83" fill="#fde047" fontSize="7.5" textAnchor="middle">R_test = 5.6 kΩ</text>
              
              <text x="67" y="108" fill="#94a3b8" fontSize="7.5" textAnchor="middle">Injects ~40 mA across core</text>
              <text x="67" y="122" fill="#34d399" fontSize="7" textAnchor="middle">Verifies mechanism freedom</text>
            </g>

            {/* Bottom Analytical Summary */}
            <rect x="25" y="246" width="490" height="25" rx="4" fill="#020617" stroke="#1e293b" />
            <text x="270" y="259" fill="#fbbf24" fontSize="8.5" textAnchor="middle" fontWeight="bold">
              Operation: If IL - IN ≥ IΔn (30 mA), net core flux induces EMF in sensing coil, energizing relay to break circuit in &lt; 40 ms.
            </text>
            <text x="270" y="268" fill="#fca5a5" fontSize="7.5" textAnchor="middle">
              CRITICAL: RCCB provides ZERO overcurrent protection! Must be paired with an MCB, or replaced with an RCBO.
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "RCCB Core Balance Transformer: Differential current sensing, trip relay tripping, and monthly 'T' test button."}
          </p>
        </div>
      );

    case 'circuit-ch15-isolation-loto-procedure':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 280" className="w-full max-w-2xl h-64">
            <rect width="540" height="280" rx="8" fill="#020617" stroke="#1e293b" />
            <text x="270" y="22" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">
              Electrical Isolation &amp; The 5 Golden Safety Rules (EN 50110-1 / OSHA 1910.147)
            </text>

            {/* 5 Step Process Containers */}
            {/* Step 1: Disconnect */}
            <g transform="translate(15, 38)">
              <rect width="95" height="135" rx="5" fill="#0f172a" stroke="#dc2626" strokeWidth="1.2" />
              <text x="47" y="16" fill="#ef4444" fontSize="9" fontWeight="bold" textAnchor="middle">1. DISCONNECT</text>
              {/* Open Isolator with Air Gap */}
              <circle cx="25" cy="55" r="4" fill="#ef4444" />
              <circle cx="70" cy="55" r="4" fill="#ef4444" />
              <line x1="25" y1="55" x2="60" y2="35" stroke="#ef4444" strokeWidth="2.5" />
              <text x="47" y="75" fill="#fca5a5" fontSize="7.5" textAnchor="middle">Visible Air Gap</text>
              <text x="47" y="90" fill="#94a3b8" fontSize="7" textAnchor="middle">Breaker opened</text>
              <text x="47" y="102" fill="#94a3b8" fontSize="7" textAnchor="middle">Isolator opened</text>
              <text x="47" y="122" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">(Off-Load Only)</text>
            </g>

            {/* Step 2: LOTO */}
            <g transform="translate(120, 38)">
              <rect width="95" height="135" rx="5" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.2" />
              <text x="47" y="16" fill="#fbbf24" fontSize="9" fontWeight="bold" textAnchor="middle">2. LOCKOUT (LOTO)</text>
              {/* Padlock and Tag */}
              <rect x="32" y="32" width="30" height="24" rx="3" fill="#dc2626" stroke="#fca5a5" />
              <path d="M 37,32 L 37,22 A 10 10 0 0 1 57,22 L 57,32" fill="none" stroke="#e2e8f0" strokeWidth="2.5" />
              <rect x="25" y="60" width="45" height="25" rx="2" fill="#fff" stroke="#dc2626" />
              <text x="47" y="72" fill="#dc2626" fontSize="7" fontWeight="bold" textAnchor="middle">DANGER</text>
              <text x="47" y="80" fill="#000" fontSize="6" textAnchor="middle">DO NOT OPERATE</text>
              <text x="47" y="100" fill="#fde68a" fontSize="7" textAnchor="middle">Personal Lock</text>
              <text x="47" y="112" fill="#fde68a" fontSize="7" textAnchor="middle">Multi-Lock Hasp</text>
              <text x="47" y="124" fill="#fbbf24" fontSize="6.5" fontWeight="bold" textAnchor="middle">1 Person = 1 Key</text>
            </g>

            {/* Step 3: Verify Dead */}
            <g transform="translate(225, 38)">
              <rect width="95" height="135" rx="5" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
              <text x="47" y="16" fill="#38bdf8" fontSize="8.5" fontWeight="bold" textAnchor="middle">3. VERIFY DEAD</text>
              {/* Voltage Tester & Proving Unit */}
              <rect x="25" y="30" width="45" height="28" rx="3" fill="#1e293b" stroke="#38bdf8" />
              <text x="47" y="47" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">0.0 V</text>
              <text x="47" y="72" fill="#bae6fd" fontSize="7.5" fontWeight="bold" textAnchor="middle">Live-Dead-Live</text>
              <text x="47" y="85" fill="#94a3b8" fontSize="7" textAnchor="middle">1. Test on Prover</text>
              <text x="47" y="97" fill="#94a3b8" fontSize="7" textAnchor="middle">2. Test on Circuit</text>
              <text x="47" y="109" fill="#94a3b8" fontSize="7" textAnchor="middle">3. Re-test Prover</text>
              <text x="47" y="124" fill="#38bdf8" fontSize="6.5" fontWeight="bold" textAnchor="middle">No False Zeroes!</text>
            </g>

            {/* Step 4: Earth & Short */}
            <g transform="translate(330, 38)">
              <rect width="95" height="135" rx="5" fill="#0f172a" stroke="#10b981" strokeWidth="1.2" />
              <text x="47" y="16" fill="#34d399" fontSize="8.5" fontWeight="bold" textAnchor="middle">4. EARTH &amp; SHORT</text>
              {/* Grounding cluster */}
              <line x1="20" y1="35" x2="75" y2="35" stroke="#ef4444" strokeWidth="2" />
              <line x1="47" y1="35" x2="47" y2="65" stroke="#10b981" strokeWidth="3" />
              <line x1="35" y1="65" x2="60" y2="65" stroke="#10b981" strokeWidth="2" />
              <line x1="40" y1="70" x2="55" y2="70" stroke="#10b981" strokeWidth="1.5" />
              <text x="47" y="85" fill="#a7f3d0" fontSize="7.5" fontWeight="bold" textAnchor="middle">Portable Earth</text>
              <text x="47" y="98" fill="#94a3b8" fontSize="7" textAnchor="middle">Bleeds capacitor</text>
              <text x="47" y="110" fill="#94a3b8" fontSize="7" textAnchor="middle">stored energy</text>
              <text x="47" y="124" fill="#34d399" fontSize="6.5" fontWeight="bold" textAnchor="middle">Trips upstream switch</text>
            </g>

            {/* Step 5: Barrier / Shroud */}
            <g transform="translate(435, 38)">
              <rect width="90" height="135" rx="5" fill="#0f172a" stroke="#a855f7" strokeWidth="1.2" />
              <text x="45" y="16" fill="#c084fc" fontSize="8.5" fontWeight="bold" textAnchor="middle">5. SHROUD LIVE</text>
              {/* Insulating mat / barrier */}
              <rect x="20" y="32" width="50" height="28" rx="3" fill="#ea580c" fillOpacity="0.4" stroke="#f97316" strokeDasharray="3 2" />
              <text x="45" y="49" fill="#fed7aa" fontSize="7" fontWeight="bold" textAnchor="middle">Insulating Mat</text>
              <text x="45" y="75" fill="#d8b4fe" fontSize="7.5" fontWeight="bold" textAnchor="middle">Physical Barrier</text>
              <text x="45" y="90" fill="#94a3b8" fontSize="7" textAnchor="middle">Shields adjacent</text>
              <text x="45" y="102" fill="#94a3b8" fontSize="7" textAnchor="middle">energized gear</text>
              <text x="45" y="124" fill="#c084fc" fontSize="6.5" fontWeight="bold" textAnchor="middle">Approach Boundary</text>
            </g>

            {/* Stored Energy / Capacitive Discharge Box */}
            <g transform="translate(15, 185)">
              <rect width="510" height="50" rx="4" fill="#0f172a" stroke="#334155" />
              <text x="15" y="18" fill="#fbbf24" fontSize="9.5" fontWeight="bold">
                Residual Stored Energy Warning (Capacitor Banks, DC Links &amp; HV Cables):
              </text>
              <text x="15" y="32" fill="#cbd5e1" fontSize="8">
                Turning off isolator does NOT instantly de-energize capacitors! Voltage decays exponentially: Vc(t) = V0 · e^(-t / RC).
              </text>
              <text x="15" y="44" fill="#f87171" fontSize="8" fontWeight="bold">
                Mandatory: Discharge rod with current-limiting resistor MUST be applied to ground before touching terminals!
              </text>
            </g>

            {/* Bottom summary */}
            <rect x="15" y="244" width="510" height="26" rx="4" fill="#020617" stroke="#1e293b" />
            <text x="270" y="258" fill="#fbbf24" fontSize="8.5" textAnchor="middle" fontWeight="bold">
              Permit-to-Work (PTW) &amp; LOTO: No person works alone; each worker holds exclusive custody of their lock and key.
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Electrical Isolation: 5 Golden Safety Rules, Lockout/Tagout (LOTO), and Live-Dead-Live voltage verification."}
          </p>
        </div>
      );

    case 'circuit-ch15-safe-working-practices':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 310" className="w-full max-w-2xl h-auto font-sans">
            {/* Background Canvas */}
            <rect width="540" height="310" rx="8" fill="#030712" stroke="#1e293b" strokeWidth="1.5" />

            {/* Title Header */}
            <rect x="12" y="10" width="516" height="26" rx="4" fill="#0f172a" stroke="#334155" />
            <text x="270" y="27" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">
              SAFE WORKING PRACTICES, NFPA 70E BOUNDARIES &amp; HIERARCHY OF CONTROLS
            </text>

            {/* Section 1: Hierarchy of Controls Pyramid (Left, x=15, w=160) */}
            <g transform="translate(15, 44)">
              <rect width="165" height="220" rx="6" fill="#090d16" stroke="#1e293b" />
              <text x="82" y="16" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">
                HIERARCHY OF CONTROLS
              </text>
              <text x="82" y="28" fill="#64748b" fontSize="7" textAnchor="middle">
                ISO 45001 / ANSI Z590.3
              </text>

              {/* Tier 1: Elimination */}
              <polygon points="12,38 153,38 143,68 22,68" fill="#065f46" stroke="#34d399" strokeWidth="1" />
              <text x="82" y="52" fill="#ecfdf5" fontSize="8" fontWeight="bold" textAnchor="middle">1. ELIMINATION (100%)</text>
              <text x="82" y="62" fill="#a7f3d0" fontSize="6.5" textAnchor="middle">De-energize &amp; Lockout</text>

              {/* Tier 2: Substitution */}
              <polygon points="23,71 142,71 133,101 32,101" fill="#115e59" stroke="#2dd4bf" strokeWidth="1" />
              <text x="82" y="85" fill="#f0fdfa" fontSize="8" fontWeight="bold" textAnchor="middle">2. SUBSTITUTION (85%)</text>
              <text x="82" y="95" fill="#99f6e4" fontSize="6.5" textAnchor="middle">Use 24V SELV vs 230V AC</text>

              {/* Tier 3: Engineering */}
              <polygon points="33,104 132,104 123,134 42,134" fill="#854d0e" stroke="#facc15" strokeWidth="1" />
              <text x="82" y="118" fill="#fefce8" fontSize="8" fontWeight="bold" textAnchor="middle">3. ENGINEERING (70%)</text>
              <text x="82" y="128" fill="#fef08a" fontSize="6.5" textAnchor="middle">IP2X shrouds, Arc relays</text>

              {/* Tier 4: Administrative */}
              <polygon points="43,137 122,137 112,167 53,167" fill="#9a3412" stroke="#fb923c" strokeWidth="1" />
              <text x="82" y="151" fill="#fff7ed" fontSize="7.5" fontWeight="bold" textAnchor="middle">4. ADMIN (45%)</text>
              <text x="82" y="161" fill="#fed7aa" fontSize="6.5" textAnchor="middle">PTW, JHA, One-Hand Rule</text>

              {/* Tier 5: PPE */}
              <polygon points="54,170 111,170 82,204 82,204" fill="#881337" stroke="#f43f5e" strokeWidth="1" />
              <text x="82" y="184" fill="#fff1f2" fontSize="7.5" fontWeight="bold" textAnchor="middle">5. PPE (20%)</text>
              <text x="82" y="196" fill="#fecdd3" fontSize="6" textAnchor="middle">Last Line Shield</text>

              <text x="82" y="214" fill="#94a3b8" fontSize="6.5" textAnchor="middle">▲ Most Effective to Least ▼</text>
            </g>

            {/* Section 2: NFPA 70E Boundaries Diagram (Middle, x=190, w=175) */}
            <g transform="translate(190, 44)">
              <rect width="175" height="220" rx="6" fill="#090d16" stroke="#1e293b" />
              <text x="87" y="16" fill="#f59e0b" fontSize="9" fontWeight="bold" textAnchor="middle">
                NFPA 70E APPROACH ZONES
              </text>
              <text x="87" y="28" fill="#64748b" fontSize="7" textAnchor="middle">
                415V Three-Phase AC System
              </text>

              {/* Concentric rings */}
              {/* Outer ring: Arc Flash Boundary */}
              <circle cx="87" cy="115" r="75" fill="#f43f5e" fillOpacity="0.1" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="4 2" />
              <text x="87" y="48" fill="#fda4af" fontSize="6.5" fontWeight="bold" textAnchor="middle">
                Arc Flash Boundary (4.6m)
              </text>

              {/* Middle ring: Limited Approach Boundary */}
              <circle cx="87" cy="115" r="50" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="87" y="74" fill="#fde68a" fontSize="6.5" fontWeight="bold" textAnchor="middle">
                Limited Approach (1.0m)
              </text>

              {/* Inner ring: Restricted Approach Boundary */}
              <circle cx="87" cy="115" r="28" fill="#ef4444" fillOpacity="0.25" stroke="#ef4444" strokeWidth="1.5" />
              <text x="87" y="96" fill="#fca5a5" fontSize="6" fontWeight="bold" textAnchor="middle">
                Restricted (0.3m)
              </text>

              {/* Exposed Live Busbar at center */}
              <rect x="79" y="107" width="16" height="16" rx="2" fill="#eab308" stroke="#fef08a" strokeWidth="1.5" />
              <text x="87" y="119" fill="#000" fontSize="8" fontWeight="bold" textAnchor="middle">415V</text>

              {/* Footnote notes */}
              <text x="87" y="200" fill="#cbd5e1" fontSize="6.5" textAnchor="middle">
                Restricted: Qualified only with 1kV gloves
              </text>
              <text x="87" y="212" fill="#94a3b8" fontSize="6" textAnchor="middle">
                Limited: Unqualified must be escorted
              </text>
            </g>

            {/* Section 3: IEC 60900 1,000 V Insulated Hand Tool (Right, x=375, w=153) */}
            <g transform="translate(375, 44)">
              <rect width="153" height="220" rx="6" fill="#090d16" stroke="#1e293b" />
              <text x="76" y="16" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle">
                IEC 60900 INSULATED TOOLS
              </text>
              <text x="76" y="28" fill="#64748b" fontSize="7" textAnchor="middle">
                Rated 1,000V AC / 1,500V DC
              </text>

              {/* Tool Anatomy Illustration */}
              {/* Metal shaft */}
              <rect x="72" y="40" width="8" height="65" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="0.8" />
              <text x="76" y="75" fill="#0f172a" fontSize="6" fontWeight="bold" textAnchor="middle" transform="rotate(-90 76 75)">
                STEEL CORE
              </text>

              {/* Inner yellow insulation warning layer */}
              <rect x="68" y="105" width="16" height="60" rx="4" fill="#eab308" stroke="#ca8a04" strokeWidth="1" />
              {/* Outer red dielectric layer */}
              <rect x="65" y="112" width="22" height="75" rx="6" fill="#dc2626" stroke="#b91c1c" strokeWidth="1" />

              {/* Double triangle symbol */}
              <polygon points="76,145 71,155 81,155" fill="none" stroke="#fff" strokeWidth="1" />
              <polygon points="76,152 71,162 81,162" fill="none" stroke="#fff" strokeWidth="1" />
              <text x="76" y="172" fill="#fff" fontSize="6.5" fontWeight="bold" textAnchor="middle">1000 V</text>

              {/* Annotations */}
              <text x="76" y="194" fill="#f87171" fontSize="6.5" fontWeight="bold" textAnchor="middle">
                Dual-Layer Wear Indicator:
              </text>
              <text x="76" y="204" fill="#fef08a" fontSize="6" textAnchor="middle">
                If yellow shows through red,
              </text>
              <text x="76" y="214" fill="#fca5a5" fontSize="6" fontWeight="bold" textAnchor="middle">
                DESTROY &amp; REPLACE TOOL!
              </text>
            </g>

            {/* Bottom summary banner */}
            <rect x="15" y="272" width="513" height="28" rx="4" fill="#020617" stroke="#334155" />
            <text x="270" y="290" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">
              ONE-HAND RULE: Left hand in pocket breaks the thoracic heart circuit | BUDDY SYSTEM: Observer holds rescue crook
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Safe Working Practices: Hierarchy of Controls, NFPA 70E Boundary Zones, and IEC 60900 Tool Insulation."}
          </p>
        </div>
      );

    case 'circuit-ch15-electrical-ppe-matrix':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 310" className="w-full max-w-2xl h-auto font-sans">
            {/* Background Canvas */}
            <rect width="540" height="310" rx="8" fill="#030712" stroke="#1e293b" strokeWidth="1.5" />

            {/* Title Header */}
            <rect x="12" y="10" width="516" height="26" rx="4" fill="#0f172a" stroke="#334155" />
            <text x="270" y="27" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">
              ELECTRICAL PPE STANDARDS: ASTM D120 GLOVE CLASSES &amp; NFPA 70E ARC FLUID MATRIX
            </text>

            {/* Section 1: 3-Layer Glove System (Left, x=15, w=150) */}
            <g transform="translate(15, 44)">
              <rect width="150" height="220" rx="6" fill="#090d16" stroke="#1e293b" />
              <text x="75" y="16" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">
                3-LAYER GLOVE SYSTEM
              </text>
              <text x="75" y="28" fill="#64748b" fontSize="7" textAnchor="middle">
                ASTM D120 &amp; ASTM F696
              </text>

              {/* Outer Leather Protector */}
              <rect x="25" y="42" width="100" height="42" rx="4" fill="#78350f" stroke="#b45309" strokeWidth="1.2" />
              <text x="75" y="58" fill="#fef3c7" fontSize="8" fontWeight="bold" textAnchor="middle">1. LEATHER OUTER</text>
              <text x="75" y="70" fill="#fde68a" fontSize="6.5" textAnchor="middle">Top-Grain Cowhide Protector</text>
              <text x="75" y="80" fill="#fcd34d" fontSize="6" textAnchor="middle">Puncture &amp; Cut Defense</text>

              {/* Clearance Gap indicator */}
              <line x1="20" y1="86" x2="130" y2="86" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 2" />
              <text x="75" y="96" fill="#fbbf24" fontSize="7" fontWeight="bold" textAnchor="middle">
                ▲ Clearance Gap (13-102mm) ▲
              </text>
              <line x1="20" y1="100" x2="130" y2="100" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 2" />

              {/* Middle Dielectric Rubber Glove */}
              <rect x="25" y="104" width="100" height="46" rx="4" fill="#991b1b" stroke="#dc2626" strokeWidth="1.2" />
              <text x="75" y="122" fill="#fee2e2" fontSize="8" fontWeight="bold" textAnchor="middle">2. DIELECTRIC RUBBER</text>
              <text x="75" y="134" fill="#fca5a5" fontSize="6.5" textAnchor="middle">ASTM D120 Voltage Barrier</text>
              <text x="75" y="144" fill="#f87171" fontSize="6" textAnchor="middle">6-Month Lab Proof Re-Test</text>

              {/* Inner Cotton Liner */}
              <rect x="25" y="154" width="100" height="38" rx="4" fill="#334155" stroke="#64748b" strokeWidth="1.2" />
              <text x="75" y="170" fill="#f8fafc" fontSize="8" fontWeight="bold" textAnchor="middle">3. COTTON LINER</text>
              <text x="75" y="182" fill="#cbd5e1" fontSize="6.5" textAnchor="middle">Perspiration Absorption</text>

              <text x="75" y="208" fill="#34d399" fontSize="6.5" fontWeight="bold" textAnchor="middle">
                Daily Air Inflation Test Required!
              </text>
            </g>

            {/* Section 2: ASTM D120 Voltage Glove Classes (Middle, x=173, w=180) */}
            <g transform="translate(173, 44)">
              <rect width="180" height="220" rx="6" fill="#090d16" stroke="#1e293b" />
              <text x="90" y="16" fill="#fbbf24" fontSize="9" fontWeight="bold" textAnchor="middle">
                GLOVE VOLTAGE CLASSES
              </text>
              <text x="90" y="27" fill="#64748b" fontSize="7" textAnchor="middle">
                ASTM D120 / IEC 60903
              </text>

              {/* Table header */}
              <rect x="6" y="34" width="168" height="15" fill="#1e293b" rx="2" />
              <text x="24" y="44" fill="#94a3b8" fontSize="6.5" fontWeight="bold" textAnchor="middle">CLASS</text>
              <text x="60" y="44" fill="#94a3b8" fontSize="6.5" fontWeight="bold" textAnchor="middle">TAG COLOR</text>
              <text x="108" y="44" fill="#94a3b8" fontSize="6.5" fontWeight="bold" textAnchor="middle">MAX AC USE</text>
              <text x="152" y="44" fill="#94a3b8" fontSize="6.5" fontWeight="bold" textAnchor="middle">PROOF</text>

              {/* Class 00 */}
              <rect x="6" y="52" width="168" height="18" fill="#0f172a" rx="2" />
              <text x="24" y="64" fill="#fff" fontSize="7" fontWeight="bold" textAnchor="middle">00</text>
              <rect x="42" y="55" width="36" height="12" rx="2" fill="#fef3c7" />
              <text x="60" y="64" fill="#78350f" fontSize="6.5" fontWeight="bold" textAnchor="middle">Beige</text>
              <text x="108" y="64" fill="#34d399" fontSize="7" fontWeight="bold" textAnchor="middle">500 V</text>
              <text x="152" y="64" fill="#cbd5e1" fontSize="7" textAnchor="middle">2.5 kV</text>

              {/* Class 0 */}
              <rect x="6" y="73" width="168" height="18" fill="#1e1e2e" rx="2" />
              <text x="24" y="85" fill="#fff" fontSize="7" fontWeight="bold" textAnchor="middle">0</text>
              <rect x="42" y="76" width="36" height="12" rx="2" fill="#ef4444" />
              <text x="60" y="85" fill="#fff" fontSize="6.5" fontWeight="bold" textAnchor="middle">Red</text>
              <text x="108" y="85" fill="#34d399" fontSize="7" fontWeight="bold" textAnchor="middle">1,000 V</text>
              <text x="152" y="85" fill="#cbd5e1" fontSize="7" textAnchor="middle">5.0 kV</text>

              {/* Class 1 */}
              <rect x="6" y="94" width="168" height="18" fill="#0f172a" rx="2" />
              <text x="24" y="106" fill="#fff" fontSize="7" fontWeight="bold" textAnchor="middle">1</text>
              <rect x="42" y="97" width="36" height="12" rx="2" fill="#f8fafc" />
              <text x="60" y="106" fill="#0f172a" fontSize="6.5" fontWeight="bold" textAnchor="middle">White</text>
              <text x="108" y="106" fill="#38bdf8" fontSize="7" fontWeight="bold" textAnchor="middle">7,500 V</text>
              <text x="152" y="106" fill="#cbd5e1" fontSize="7" textAnchor="middle">10 kV</text>

              {/* Class 2 */}
              <rect x="6" y="115" width="168" height="18" fill="#1e1e2e" rx="2" />
              <text x="24" y="127" fill="#fff" fontSize="7" fontWeight="bold" textAnchor="middle">2</text>
              <rect x="42" y="118" width="36" height="12" rx="2" fill="#eab308" />
              <text x="60" y="127" fill="#0f172a" fontSize="6.5" fontWeight="bold" textAnchor="middle">Yellow</text>
              <text x="108" y="127" fill="#38bdf8" fontSize="7" fontWeight="bold" textAnchor="middle">17,000 V</text>
              <text x="152" y="127" fill="#cbd5e1" fontSize="7" textAnchor="middle">20 kV</text>

              {/* Class 3 */}
              <rect x="6" y="136" width="168" height="18" fill="#0f172a" rx="2" />
              <text x="24" y="148" fill="#fff" fontSize="7" fontWeight="bold" textAnchor="middle">3</text>
              <rect x="42" y="139" width="36" height="12" rx="2" fill="#10b981" />
              <text x="60" y="148" fill="#fff" fontSize="6.5" fontWeight="bold" textAnchor="middle">Green</text>
              <text x="108" y="148" fill="#a855f7" fontSize="7" fontWeight="bold" textAnchor="middle">26,500 V</text>
              <text x="152" y="148" fill="#cbd5e1" fontSize="7" textAnchor="middle">30 kV</text>

              {/* Class 4 */}
              <rect x="6" y="157" width="168" height="18" fill="#1e1e2e" rx="2" />
              <text x="24" y="169" fill="#fff" fontSize="7" fontWeight="bold" textAnchor="middle">4</text>
              <rect x="42" y="160" width="36" height="12" rx="2" fill="#f97316" />
              <text x="60" y="169" fill="#fff" fontSize="6.5" fontWeight="bold" textAnchor="middle">Orange</text>
              <text x="108" y="169" fill="#a855f7" fontSize="7" fontWeight="bold" textAnchor="middle">36,000 V</text>
              <text x="152" y="169" fill="#cbd5e1" fontSize="7" textAnchor="middle">40 kV</text>

              <rect x="6" y="180" width="168" height="34" rx="3" fill="#020617" stroke="#334155" />
              <text x="90" y="194" fill="#38bdf8" fontSize="6.5" fontWeight="bold" textAnchor="middle">
                11 kV Systems Require Class 2 (Yellow)
              </text>
              <text x="90" y="206" fill="#94a3b8" fontSize="6" textAnchor="middle">
                415 V Systems Require Class 0 (Red)
              </text>
            </g>

            {/* Section 3: NFPA 70E Arc Flash Categories (Right, x=361, w=167) */}
            <g transform="translate(361, 44)">
              <rect width="167" height="220" rx="6" fill="#090d16" stroke="#1e293b" />
              <text x="83" y="16" fill="#f43f5e" fontSize="9" fontWeight="bold" textAnchor="middle">
                ARC FLASH CATEGORIES
              </text>
              <text x="83" y="27" fill="#64748b" fontSize="7" textAnchor="middle">
                NFPA 70E Table 130.7(C)(15)
              </text>

              {/* Cat 1 */}
              <rect x="8" y="34" width="151" height="36" rx="3" fill="#0284c7" fillOpacity="0.15" stroke="#0284c7" strokeWidth="1" />
              <text x="16" y="47" fill="#38bdf8" fontSize="7.5" fontWeight="bold">CAT 1 (Min 4 cal/cm²)</text>
              <text x="16" y="58" fill="#cbd5e1" fontSize="6.5">AR shirt, pants, face shield</text>

              {/* Cat 2 */}
              <rect x="8" y="74" width="151" height="38" rx="3" fill="#059669" fillOpacity="0.15" stroke="#059669" strokeWidth="1" />
              <text x="16" y="87" fill="#34d399" fontSize="7.5" fontWeight="bold">CAT 2 (Min 8 cal/cm²)</text>
              <text x="16" y="98" fill="#cbd5e1" fontSize="6.5">8 cal coverall + balaclava hood</text>

              {/* Cat 3 */}
              <rect x="8" y="116" width="151" height="38" rx="3" fill="#d97706" fillOpacity="0.15" stroke="#d97706" strokeWidth="1" />
              <text x="16" y="129" fill="#fbbf24" fontSize="7.5" fontWeight="bold">CAT 3 (Min 25 cal/cm²)</text>
              <text x="16" y="140" fill="#cbd5e1" fontSize="6.5">25 cal Flash Suit &amp; full hood</text>

              {/* Cat 4 */}
              <rect x="8" y="158" width="151" height="38" rx="3" fill="#e11d48" fillOpacity="0.15" stroke="#e11d48" strokeWidth="1" />
              <text x="16" y="171" fill="#fb7185" fontSize="7.5" fontWeight="bold">CAT 4 (Min 40 cal/cm²)</text>
              <text x="16" y="182" fill="#cbd5e1" fontSize="6.5">Multi-layer 40 cal suit &amp; air hood</text>

              <text x="83" y="210" fill="#f87171" fontSize="6.5" fontWeight="bold" textAnchor="middle">
                &gt; 40 cal/cm²: NO WORK ALLOWED!
              </text>
            </g>

            {/* Bottom auxiliary gear specs */}
            <rect x="15" y="272" width="513" height="28" rx="4" fill="#020617" stroke="#334155" />
            <text x="270" y="285" fill="#e2e8f0" fontSize="7.5" fontWeight="bold" textAnchor="middle">
              CLASS E HARD HAT: Tested to 20,000 V AC | EH FOOTWEAR: ASTM F2413 tested to 18,000 V AC (Leakage &lt; 1mA)
            </text>
            <text x="270" y="295" fill="#f87171" fontSize="6.5" textAnchor="middle">
              NEVER wear meltable synthetics (polyester, nylon) under arc gear—they liquefy and fuse into skin!
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-bold">
            {caption || "Electrical PPE: ASTM D120 Glove Voltage Classes, Leather Protectors, and NFPA 70E Arc Flash Categories."}
          </p>
        </div>
      );

    case 'circuit-ch15-first-response-cpr-flowchart':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 310" className="w-full max-w-2xl h-auto font-sans">
            {/* Background Canvas */}
            <rect width="540" height="310" rx="8" fill="#030712" stroke="#1e293b" strokeWidth="1.5" />

            {/* Title Header */}
            <rect x="12" y="10" width="516" height="26" rx="4" fill="#0f172a" stroke="#334155" />
            <text x="270" y="27" fill="#f43f5e" fontSize="11" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">
              ELECTRICAL ACCIDENT FIRST RESPONSE, STEP POTENTIAL &amp; CPR RESUSCITATION
            </text>

            {/* Step 1: Separation / De-energization (x=15, w=120) */}
            <g transform="translate(15, 44)">
              <rect width="120" height="220" rx="6" fill="#090d16" stroke="#3b82f6" strokeWidth="1.2" />
              <rect x="0" y="0" width="120" height="22" rx="6" fill="#1e3a8a" />
              <text x="60" y="15" fill="#bfdbfe" fontSize="8" fontWeight="bold" textAnchor="middle">
                1. SCENE SAFETY
              </text>

              <circle cx="60" cy="55" r="18" fill="#1e293b" stroke="#f43f5e" strokeWidth="1.5" />
              <text x="60" y="59" fill="#f43f5e" fontSize="12" fontWeight="bold" textAnchor="middle">⚡</text>

              <text x="60" y="88" fill="#fca5a5" fontSize="7.5" fontWeight="bold" textAnchor="middle">
                NEVER TOUCH BARE!
              </text>
              <text x="60" y="99" fill="#cbd5e1" fontSize="6.5" textAnchor="middle">
                Victim is electrified!
              </text>

              <rect x="8" y="112" width="104" height="42" rx="3" fill="#020617" stroke="#334155" />
              <text x="60" y="125" fill="#38bdf8" fontSize="7" fontWeight="bold" textAnchor="middle">PRIMARY ACTION:</text>
              <text x="60" y="137" fill="#ecfdf5" fontSize="6.5" textAnchor="middle">Open Main Breaker</text>
              <text x="60" y="147" fill="#94a3b8" fontSize="6.5" textAnchor="middle">or Pull Emergency Stop</text>

              <rect x="8" y="162" width="104" height="48" rx="3" fill="#020617" stroke="#334155" />
              <text x="60" y="175" fill="#fbbf24" fontSize="7" fontWeight="bold" textAnchor="middle">IF SWITCH BLOCKED:</text>
              <text x="60" y="187" fill="#fed7aa" fontSize="6" textAnchor="middle">Use Fiberglass Rescue</text>
              <text x="60" y="197" fill="#fed7aa" fontSize="6" textAnchor="middle">Crook Hook around belt</text>
            </g>

            {/* Step 2: Step Potential & Evacuation Physics (x=143, w=135) */}
            <g transform="translate(143, 44)">
              <rect width="135" height="220" rx="6" fill="#090d16" stroke="#f59e0b" strokeWidth="1.2" />
              <rect x="0" y="0" width="135" height="22" rx="6" fill="#78350f" />
              <text x="67" y="15" fill="#fef3c7" fontSize="8" fontWeight="bold" textAnchor="middle">
                2. STEP POTENTIAL
              </text>

              {/* Concentric ground ripple circles */}
              <circle cx="67" cy="65" r="32" fill="#f59e0b" fillOpacity="0.1" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 2" />
              <circle cx="67" cy="65" r="20" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="1" />
              <circle cx="67" cy="65" r="8" fill="#ef4444" stroke="#f87171" strokeWidth="1" />
              <text x="67" y="68" fill="#fff" fontSize="6" fontWeight="bold" textAnchor="middle">HV Wire</text>

              <text x="67" y="112" fill="#fde68a" fontSize="7" fontWeight="bold" textAnchor="middle">
                V(r) = (ρ·I) / (2π·r)
              </text>

              <rect x="6" y="122" width="123" height="40" rx="3" fill="#881337" fillOpacity="0.3" stroke="#f43f5e" strokeWidth="1" />
              <text x="67" y="135" fill="#fecdd3" fontSize="6.5" fontWeight="bold" textAnchor="middle">❌ NORMAL WALKING:</text>
              <text x="67" y="146" fill="#fda4af" fontSize="6" textAnchor="middle">Stride gap s = 0.8m</text>
              <text x="67" y="156" fill="#fda4af" fontSize="6" fontWeight="bold" textAnchor="middle">V_step &gt; 1,000 V (LETHAL!)</text>

              <rect x="6" y="168" width="123" height="42" rx="3" fill="#065f46" fillOpacity="0.3" stroke="#34d399" strokeWidth="1" />
              <text x="67" y="181" fill="#a7f3d0" fontSize="6.5" fontWeight="bold" textAnchor="middle">✔ SAFETY SHUFFLE:</text>
              <text x="67" y="192" fill="#6ee7b7" fontSize="6" textAnchor="middle">Slide feet together (s = 0)</text>
              <text x="67" y="202" fill="#ecfdf5" fontSize="6" fontWeight="bold" textAnchor="middle">V_step = 0 V (SAFE!)</text>
            </g>

            {/* Step 3: CPR & Resuscitation (x=286, w=128) */}
            <g transform="translate(286, 44)">
              <rect width="128" height="220" rx="6" fill="#090d16" stroke="#ec4899" strokeWidth="1.2" />
              <rect x="0" y="0" width="128" height="22" rx="6" fill="#831843" />
              <text x="64" y="15" fill="#fce7f3" fontSize="8" fontWeight="bold" textAnchor="middle">
                3. CPR &amp; AED DEFIB
              </text>

              <circle cx="64" cy="55" r="18" fill="#1e293b" stroke="#ec4899" strokeWidth="1.5" />
              <text x="64" y="60" fill="#ec4899" fontSize="13" fontWeight="bold" textAnchor="middle">♥</text>

              <text x="64" y="88" fill="#fbcfe8" fontSize="7.5" fontWeight="bold" textAnchor="middle">
                30 : 2 COMPRESSION
              </text>
              <text x="64" y="99" fill="#cbd5e1" fontSize="6.5" textAnchor="middle">
                Rate: 100-120 bpm
              </text>
              <text x="64" y="109" fill="#cbd5e1" fontSize="6.5" textAnchor="middle">
                Depth: 5 to 6 cm
              </text>

              <rect x="6" y="118" width="116" height="42" rx="3" fill="#020617" stroke="#334155" />
              <text x="64" y="132" fill="#38bdf8" fontSize="7" fontWeight="bold" textAnchor="middle">EARLY AED SHOCK:</text>
              <text x="64" y="144" fill="#cbd5e1" fontSize="6" textAnchor="middle">Electric shock induces VFib;</text>
              <text x="64" y="154" fill="#fbbf24" fontSize="6" fontWeight="bold" textAnchor="middle">-7% to -10% survival / min!</text>

              <rect x="6" y="166" width="116" height="44" rx="3" fill="#020617" stroke="#334155" />
              <text x="64" y="180" fill="#34d399" fontSize="6.5" fontWeight="bold" textAnchor="middle">AED PADS PLACEMENT:</text>
              <text x="64" y="191" fill="#a7f3d0" fontSize="6" textAnchor="middle">1. Upper Right Sternum</text>
              <text x="64" y="201" fill="#a7f3d0" fontSize="6" textAnchor="middle">2. Lower Left Apex (Ribs)</text>
            </g>

            {/* Step 4: Burn Care & Trauma Hospitalization (x=422, w=106) */}
            <g transform="translate(422, 44)">
              <rect width="106" height="220" rx="6" fill="#090d16" stroke="#8b5cf6" strokeWidth="1.2" />
              <rect x="0" y="0" width="106" height="22" rx="6" fill="#4c1d95" />
              <text x="53" y="15" fill="#ede9fe" fontSize="8" fontWeight="bold" textAnchor="middle">
                4. BURN CARE
              </text>

              <rect x="6" y="32" width="94" height="44" rx="3" fill="#020617" stroke="#334155" />
              <text x="53" y="46" fill="#38bdf8" fontSize="7" fontWeight="bold" textAnchor="middle">COOL WATER:</text>
              <text x="53" y="58" fill="#cbd5e1" fontSize="6" textAnchor="middle">Irrigate burns 20 min</text>
              <text x="53" y="68" fill="#f87171" fontSize="5.5" fontWeight="bold" textAnchor="middle">NO ice, oil or butter!</text>

              <rect x="6" y="82" width="94" height="44" rx="3" fill="#020617" stroke="#334155" />
              <text x="53" y="96" fill="#fbbf24" fontSize="6.5" fontWeight="bold" textAnchor="middle">STERILE WRAP:</text>
              <text x="53" y="108" fill="#cbd5e1" fontSize="6" textAnchor="middle">Cover loosely with</text>
              <text x="53" y="118" fill="#cbd5e1" fontSize="6" textAnchor="middle">clean plastic wrap</text>

              <rect x="6" y="132" width="94" height="78" rx="3" fill="#020617" stroke="#334155" />
              <text x="53" y="146" fill="#c084fc" fontSize="6.5" fontWeight="bold" textAnchor="middle">DEEP TRAUMA:</text>
              <text x="53" y="158" fill="#e2e8f0" fontSize="6" textAnchor="middle">• Internal muscle burns</text>
              <text x="53" y="168" fill="#e2e8f0" fontSize="6" textAnchor="middle">• Myoglobinuria / Kidney</text>
              <text x="53" y="178" fill="#e2e8f0" fontSize="6" textAnchor="middle">• Delayed dysrhythmia</text>
              <text x="53" y="196" fill="#f43f5e" fontSize="6.5" fontWeight="bold" textAnchor="middle">HOSPITALIZE ALL!</text>
            </g>

            {/* Bottom protocol summary */}
            <rect x="15" y="272" width="513" height="28" rx="4" fill="#020617" stroke="#334155" />
            <text x="270" y="285" fill="#f43f5e" fontSize="7.5" fontWeight="bold" textAnchor="middle">
              EMERGENCY DRSABCD: Danger → Response → Send Help → Airway → Breathing → CPR (30:2) → Defibrillation
            </text>
            <text x="270" y="296" fill="#94a3b8" fontSize="6.5" textAnchor="middle">
              Keep at least 10 meters (33 ft) distance from grounded high-voltage cables until confirmed de-energized by utility.
            </text>
          </svg>
          <p className="text-xs font-mono text-rose-300 mt-2 text-center font-bold">
            {caption || "First Response to Electrical Accidents: De-energization, Step Potential Evacuation, and CPR/AED Resuscitation."}
          </p>
        </div>
      );

    /* =========================================================================
       CHAPTER 12 — ADVANCED AC NETWORK ANALYSIS & COUPLED CIRCUITS
       ========================================================================= */

    case 'circuit-ch12-ac-thevenin-norton':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 240" className="w-full max-w-xl h-60">
            {/* Thevenin Equivalent on Left */}
            <g transform="translate(10, 20)">
              <rect x="0" y="0" width="245" height="190" rx="6" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="4 2" />
              <text x="122" y="22" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">AC Thevenin Equivalent</text>
              
              {/* AC Source */}
              <circle cx="50" cy="110" r="20" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
              <path d="M 38 110 Q 44 98 50 110 T 62 110" fill="none" stroke="#38bdf8" strokeWidth="2" />
              <text x="50" y="145" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">V_th</text>
              <text x="50" y="80" fill="#94a3b8" fontSize="9" textAnchor="middle">+</text>
              <text x="50" y="138" fill="#94a3b8" fontSize="9" textAnchor="middle">-</text>

              {/* Wire to Z_th */}
              <line x1="50" y1="90" x2="50" y2="60" stroke="#94a3b8" strokeWidth="2" />
              <line x1="50" y1="60" x2="90" y2="60" stroke="#94a3b8" strokeWidth="2" />

              {/* Z_th Box */}
              <rect x="90" y="48" width="70" height="24" rx="3" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
              <text x="125" y="64" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">Z_th = R+jX</text>

              {/* Terminal A */}
              <line x1="160" y1="60" x2="230" y2="60" stroke="#94a3b8" strokeWidth="2" />
              <circle cx="230" cy="60" r="4" fill="#38bdf8" />
              <text x="220" y="52" fill="#38bdf8" fontSize="10" fontWeight="bold">A</text>

              {/* Return Wire Terminal B */}
              <line x1="50" y1="130" x2="50" y2="160" stroke="#94a3b8" strokeWidth="2" />
              <line x1="50" y1="160" x2="230" y2="160" stroke="#94a3b8" strokeWidth="2" />
              <circle cx="230" cy="160" r="4" fill="#38bdf8" />
              <text x="220" y="175" fill="#38bdf8" fontSize="10" fontWeight="bold">B</text>
            </g>

            {/* Norton Equivalent on Right */}
            <g transform="translate(285, 20)">
              <rect x="0" y="0" width="245" height="190" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 2" />
              <text x="122" y="22" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">AC Norton Equivalent</text>

              {/* Current Source */}
              <circle cx="50" cy="110" r="20" fill="#1e293b" stroke="#34d399" strokeWidth="2" />
              <line x1="50" y1="122" x2="50" y2="98" stroke="#34d399" strokeWidth="2" />
              <polygon points="46,104 50,96 54,104" fill="#34d399" />
              <text x="50" y="145" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">I_N = V_th/Z_th</text>

              {/* Parallel Z_th */}
              <line x1="50" y1="90" x2="50" y2="60" stroke="#94a3b8" strokeWidth="2" />
              <line x1="50" y1="60" x2="135" y2="60" stroke="#94a3b8" strokeWidth="2" />
              <line x1="135" y1="60" x2="135" y2="85" stroke="#94a3b8" strokeWidth="2" />
              <rect x="110" y="85" width="50" height="50" rx="3" fill="#1e293b" stroke="#34d399" strokeWidth="2" />
              <text x="135" y="112" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">Z_th</text>
              <line x1="135" y1="135" x2="135" y2="160" stroke="#94a3b8" strokeWidth="2" />
              <line x1="50" y1="130" x2="50" y2="160" stroke="#94a3b8" strokeWidth="2" />
              <line x1="50" y1="160" x2="135" y2="160" stroke="#94a3b8" strokeWidth="2" />

              {/* Terminal A */}
              <line x1="135" y1="60" x2="230" y2="60" stroke="#94a3b8" strokeWidth="2" />
              <circle cx="230" cy="60" r="4" fill="#34d399" />
              <text x="220" y="52" fill="#34d399" fontSize="10" fontWeight="bold">A</text>

              {/* Terminal B */}
              <line x1="135" y1="160" x2="230" y2="160" stroke="#94a3b8" strokeWidth="2" />
              <circle cx="230" cy="160" r="4" fill="#34d399" />
              <text x="220" y="175" fill="#34d399" fontSize="10" fontWeight="bold">B</text>
            </g>

            {/* Source Conversion Arrow */}
            <text x="265" y="115" fill="#f59e0b" fontSize="12" fontWeight="bold" textAnchor="middle">⇄</text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-semibold">
            {caption || "AC Thevenin and Norton Duals: V_th = I_N · Z_th with complex phasor impedance Z_th = R_th + jX_th."}
          </p>
        </div>
      );

    case 'circuit-ch12-ac-superposition-max-power':
    case 'circuit-ch12-ac-superposition-maxpower':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 240" className="w-full max-w-xl h-60">
            {/* Multi-frequency AC circuit */}
            <g transform="translate(20, 20)">
              <rect x="0" y="0" width="230" height="190" rx="6" fill="#0f172a" stroke="#8b5cf6" strokeWidth="1.5" />
              <text x="115" y="22" fill="#a78bfa" fontSize="11" fontWeight="bold" textAnchor="middle">AC Superposition (ω1 ≠ ω2)</text>
              
              <circle cx="45" cy="80" r="16" fill="#1e293b" stroke="#a78bfa" strokeWidth="2" />
              <text x="45" y="84" fill="#a78bfa" fontSize="9" fontWeight="bold" textAnchor="middle">V₁(ω₁)</text>
              
              <circle cx="45" cy="140" r="16" fill="#1e293b" stroke="#ec4899" strokeWidth="2" />
              <text x="45" y="144" fill="#ec4899" fontSize="9" fontWeight="bold" textAnchor="middle">I₂(ω₂)</text>

              <rect x="110" y="65" width="45" height="25" rx="3" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1.5" />
              <text x="132" y="81" fill="#cbd5e1" fontSize="9" textAnchor="middle">Z₁(ω)</text>

              <rect x="110" y="125" width="45" height="25" rx="3" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1.5" />
              <text x="132" y="141" fill="#cbd5e1" fontSize="9" textAnchor="middle">Z₂(ω)</text>

              <text x="115" y="175" fill="#f43f5e" fontSize="9" textAnchor="middle" fontWeight="bold">P_total = P(ω₁) + P(ω₂)</text>
            </g>

            {/* Maximum Power Transfer Conjugate Matching */}
            <g transform="translate(280, 20)">
              <rect x="0" y="0" width="240" height="190" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="120" y="22" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">Complex Conjugate Matching</text>

              {/* Source Z_th */}
              <rect x="30" y="55" width="75" height="35" rx="3" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="67" y="72" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">Z_th</text>
              <text x="67" y="84" fill="#94a3b8" fontSize="8" textAnchor="middle">R_th + jX_th</text>

              {/* Load Z_L */}
              <rect x="135" y="55" width="75" height="35" rx="3" fill="#1e293b" stroke="#34d399" strokeWidth="2" />
              <text x="172" y="72" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle">Z_L = Z_th*</text>
              <text x="172" y="84" fill="#6ee7b7" fontSize="8" textAnchor="middle">R_th - jX_th</text>

              <line x1="105" y1="72" x2="135" y2="72" stroke="#fbbf24" strokeWidth="2" />
              <circle cx="120" cy="72" r="3" fill="#fbbf24" />

              {/* Formula Callout */}
              <rect x="25" y="115" width="190" height="60" rx="4" fill="#020617" stroke="#475569" />
              <text x="120" y="135" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">P_max = |V_th|² / (4 · R_th)</text>
              <text x="120" y="152" fill="#94a3b8" fontSize="8.5" textAnchor="middle">Net Reactance cancels: X_th + X_L = 0</text>
              <text x="120" y="165" fill="#94a3b8" fontSize="8.5" textAnchor="middle">Resonance creates purely real circuit</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-amber-300 mt-2 text-center font-semibold">
            {caption || "AC Superposition & Conjugate Matching: Orthogonal frequencies superpose in time; maximum power demands Z_L = Z_th*."}
          </p>
        </div>
      );

    case 'circuit-ch12-coupled-circuits-dot-convention':
    case 'circuit-ch12-coupled-circuits-dot':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 240" className="w-full max-w-xl h-60">
            {/* Coupled Inductors Schematic */}
            <rect x="30" y="20" width="480" height="200" rx="8" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
            <text x="270" y="42" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">
              Coupled Inductors & Dot Convention Polarity
            </text>

            {/* Coil 1 (Primary) */}
            <g transform="translate(130, 80)">
              {/* Coils */}
              <path d="M 0,0 Q 20,-15 20,15 Q 20,45 0,60" fill="none" stroke="#22d3ee" strokeWidth="3.5" />
              {/* Dot at terminal 1 */}
              <circle cx="0" cy="-5" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
              <text x="-25" y="-3" fill="#ef4444" fontSize="10" fontWeight="bold">• Dot</text>
              <text x="-35" y="35" fill="#22d3ee" fontSize="11" fontWeight="bold">L₁</text>
              {/* Current arrow I1 entering dot */}
              <line x1="-40" y1="0" x2="-5" y2="0" stroke="#22d3ee" strokeWidth="2" />
              <polygon points="-12,-4 -2,0 -12,4" fill="#22d3ee" />
              <text x="-25" y="-12" fill="#22d3ee" fontSize="10" fontWeight="bold">i₁</text>
            </g>

            {/* Mutual Flux Coupling M */}
            <g transform="translate(230, 70)">
              <path d="M 0,20 Q 40,-10 80,20" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 3" />
              <polygon points="76,14 84,21 76,26" fill="#f59e0b" />
              <polygon points="4,26 -4,21 4,14" fill="#f59e0b" />
              <text x="40" y="8" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">Mutual M</text>
              <text x="40" y="26" fill="#94a3b8" fontSize="9" textAnchor="middle">k = M / √(L₁L₂)</text>

              {/* Core bars */}
              <line x1="36" y1="35" x2="36" y2="85" stroke="#64748b" strokeWidth="2" strokeDasharray="3 2" />
              <line x1="44" y1="35" x2="44" y2="85" stroke="#64748b" strokeWidth="2" strokeDasharray="3 2" />
            </g>

            {/* Coil 2 (Secondary) */}
            <g transform="translate(370, 80)">
              <path d="M 40,0 Q 20,-15 20,15 Q 20,45 40,60" fill="none" stroke="#10b981" strokeWidth="3.5" />
              {/* Dot at terminal 2 */}
              <circle cx="40" cy="-5" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
              <text x="50" y="-3" fill="#ef4444" fontSize="10" fontWeight="bold">• Dot</text>
              <text x="55" y="35" fill="#10b981" fontSize="11" fontWeight="bold">L₂</text>
              {/* Current arrow i2 */}
              <line x1="75" y1="0" x2="42" y2="0" stroke="#10b981" strokeWidth="2" />
              <polygon points="50,-4 42,0 50,4" fill="#10b981" />
              <text x="60" y="-12" fill="#10b981" fontSize="10" fontWeight="bold">i₂</text>
            </g>

            {/* Dot Rule Summary */}
            <rect x="50" y="165" width="440" height="42" rx="4" fill="#020617" stroke="#334155" />
            <text x="270" y="182" fill="#38bdf8" fontSize="9.5" fontWeight="bold" textAnchor="middle">
              Dot Rule: If a current ENTERS a dotted terminal, the induced voltage in the coupled coil is POSITIVE at its dotted terminal.
            </text>
            <text x="270" y="197" fill="#fbbf24" fontSize="9" textAnchor="middle">
              V₁ = jωL₁ I₁ + jωM I₂ (both currents entering dots)  |  V₂ = jωM I₁ + jωL₂ I₂
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-semibold">
            {caption || "Dot Convention: Defines relative magnetic polarity and sign of mutually induced voltages in coupled windings."}
          </p>
        </div>
      );

    case 'circuit-ch12-reflected-impedance-t-models':
    case 'circuit-ch12-linear-transformers-reflected':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 240" className="w-full max-w-xl h-60">
            {/* Linear Transformer and Reflected Impedance */}
            <rect x="20" y="20" width="500" height="200" rx="8" fill="#0f172a" stroke="#059669" strokeWidth="1.5" />
            <text x="270" y="42" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">
              Linear Transformer & Reflected Impedance Model
            </text>

            {/* Primary Mesh */}
            <g transform="translate(40, 75)">
              <circle cx="20" cy="35" r="16" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
              <text x="20" y="39" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">Vs</text>
              <rect x="60" y="22" width="40" height="24" rx="2" fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5" />
              <text x="80" y="38" fill="#94a3b8" fontSize="9" textAnchor="middle">R₁</text>
              {/* Primary Inductor */}
              <path d="M 120,20 Q 135,10 135,35 Q 135,55 120,60" fill="none" stroke="#22d3ee" strokeWidth="3" />
              <text x="110" y="75" fill="#22d3ee" fontSize="9" fontWeight="bold">L₁</text>
              <circle cx="120" cy="18" r="3" fill="#ef4444" />
            </g>

            {/* Coupling */}
            <g transform="translate(200, 95)">
              <text x="20" y="-8" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">M</text>
              <line x1="16" y1="5" x2="16" y2="45" stroke="#475569" strokeWidth="2" strokeDasharray="3 2" />
              <line x1="24" y1="5" x2="24" y2="45" stroke="#475569" strokeWidth="2" strokeDasharray="3 2" />
            </g>

            {/* Secondary Mesh */}
            <g transform="translate(240, 75)">
              <circle cx="10" cy="18" r="3" fill="#ef4444" />
              <path d="M 10,20 Q -5,10 -5,35 Q -5,55 10,60" fill="none" stroke="#10b981" strokeWidth="3" />
              <text x="0" y="75" fill="#10b981" fontSize="9" fontWeight="bold">L₂</text>
              <rect x="40" y="22" width="40" height="24" rx="2" fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5" />
              <text x="60" y="38" fill="#94a3b8" fontSize="9" textAnchor="middle">R₂</text>
              <rect x="110" y="15" width="50" height="40" rx="3" fill="#1e293b" stroke="#34d399" strokeWidth="2" />
              <text x="135" y="34" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">Z_L</text>
              <text x="135" y="47" fill="#6ee7b7" fontSize="8" textAnchor="middle">R_L+jX_L</text>
            </g>

            {/* Equivalent Reflected Model Callout */}
            <rect x="40" y="155" width="460" height="50" rx="4" fill="#020617" stroke="#334155" />
            <text x="270" y="172" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">
              Total Input Impedance: Z_in = Z₁₁ + Z_refl = (R₁ + jωL₁) + [ (ωM)² / Z₂₂ ]
            </text>
            <text x="270" y="188" fill="#fbbf24" fontSize="9" textAnchor="middle">
              Reflected Reactance Inversion: Inductive load (X₂₂ {'>'} 0) reflects as CAPACITIVE (-j) into the primary!
            </text>
            <text x="270" y="200" fill="#94a3b8" fontSize="8.5" textAnchor="middle">
              Z_refl = [ (ωM)² / |Z₂₂|² ] · (R₂₂ - jX₂₂)
            </text>
          </svg>
          <p className="text-xs font-mono text-emerald-300 mt-2 text-center font-semibold">
            {caption || "Reflected Impedance in Linear Transformers: Secondary impedance couples back with sign-inverted reactance."}
          </p>
        </div>
      );

    case 'circuit-ch12-ideal-transformers-puz':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 240" className="w-full max-w-xl h-60">
            {/* Ideal Transformer with Complex Ratio & Per-Unit */}
            <rect x="20" y="20" width="500" height="200" rx="8" fill="#0f172a" stroke="#d97706" strokeWidth="1.5" />
            <text x="270" y="42" fill="#fbbf24" fontSize="12" fontWeight="bold" textAnchor="middle">
              Ideal Transformer with Complex Turns Ratio & Per-Unit Normalization
            </text>

            {/* Left: Complex Ratio a = a∠θ */}
            <g transform="translate(40, 65)">
              <rect x="0" y="0" width="210" height="85" rx="5" fill="#1e293b" stroke="#d97706" strokeWidth="1" />
              <text x="105" y="18" fill="#fde68a" fontSize="10" fontWeight="bold" textAnchor="middle">Phase-Shifting Transformer</text>
              <text x="105" y="38" fill="#38bdf8" fontSize="10" textAnchor="middle">V₁ = a · e^(jθ) · V₂</text>
              <text x="105" y="55" fill="#34d399" fontSize="10" textAnchor="middle">I₁ = (1 / a*) · I₂</text>
              <text x="105" y="72" fill="#a78bfa" fontSize="9" textAnchor="middle">Z_in = |a|² · Z_L (pure magnitude)</text>
            </g>

            {/* Right: Per-Unit Single Line Diagram */}
            <g transform="translate(280, 65)">
              <rect x="0" y="0" width="220" height="85" rx="5" fill="#1e293b" stroke="#0284c7" strokeWidth="1" />
              <text x="110" y="18" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">Per-Unit (p.u.) Normalization</text>
              {/* Bus 1 */}
              <line x1="25" y1="35" x2="25" y2="70" stroke="#f43f5e" strokeWidth="3" />
              <text x="25" y="30" fill="#f43f5e" fontSize="9" textAnchor="middle">Bus 1</text>
              {/* Series Z_pu (Ideal transformer disappears!) */}
              <line x1="25" y1="52" x2="65" y2="52" stroke="#94a3b8" strokeWidth="2" />
              <rect x="65" y="42" width="70" height="20" rx="2" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="100" y="56" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">X_tr (p.u.)</text>
              <line x1="135" y1="52" x2="185" y2="52" stroke="#94a3b8" strokeWidth="2" />
              {/* Bus 2 */}
              <line x1="185" y1="35" x2="185" y2="70" stroke="#10b981" strokeWidth="3" />
              <text x="185" y="30" fill="#10b981" fontSize="9" textAnchor="middle">Bus 2</text>
              <text x="110" y="78" fill="#94a3b8" fontSize="8" textAnchor="middle">Turns ratio absorbed into base voltages!</text>
            </g>

            {/* Base Conversion Formula */}
            <rect x="40" y="160" width="460" height="48" rx="4" fill="#020617" stroke="#334155" />
            <text x="270" y="178" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">
              Impedance Base Change: Z_pu(new) = Z_pu(old) · [ S_base(new) / S_base(old) ] · [ V_base(old) / V_base(new) ]²
            </text>
            <text x="270" y="196" fill="#94a3b8" fontSize="8.5" textAnchor="middle">
              Eliminates ideal transformers from complex power flow and short-circuit fault equations.
            </text>
          </svg>
          <p className="text-xs font-mono text-amber-300 mt-2 text-center font-semibold">
            {caption || "Complex Turns Ratio and Per-Unit Modeling: Transforms multi-voltage power networks into unified single-line circuits."}
          </p>
        </div>
      );

    case 'circuit-ch12-passive-filters-design':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 250" className="w-full max-w-xl h-64">
            {/* Passive AC Filter Topologies & Responses */}
            <rect x="15" y="15" width="510" height="225" rx="8" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1.5" />
            <text x="270" y="36" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">
              Passive AC Filter Topologies & Half-Power Cutoff Characteristics
            </text>

            {/* 4 Quadrants for LPF, HPF, BPF, Notch */}
            {/* Top-Left: Low-Pass Filter (Series R, Shunt C) */}
            <g transform="translate(30, 48)">
              <rect x="0" y="0" width="230" height="72" rx="4" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
              <text x="10" y="16" fill="#38bdf8" fontSize="10" fontWeight="bold">1st-Order Low-Pass (LPF)</text>
              <text x="220" y="16" fill="#94a3b8" fontSize="8" textAnchor="end">f_c = 1 / (2πRC)</text>
              {/* Circuit schematic */}
              <line x1="15" y1="42" x2="35" y2="42" stroke="#94a3b8" strokeWidth="1.5" />
              <rect x="35" y="35" width="35" height="14" rx="2" fill="#0284c7" stroke="#38bdf8" strokeWidth="1" />
              <text x="52.5" y="46" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">R</text>
              <line x1="70" y1="42" x2="105" y2="42" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="90" y1="42" x2="90" y2="48" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="82" y1="48" x2="98" y2="48" stroke="#38bdf8" strokeWidth="2" />
              <line x1="82" y1="52" x2="98" y2="52" stroke="#38bdf8" strokeWidth="2" />
              <line x1="90" y1="52" x2="90" y2="62" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="85" y1="62" x2="95" y2="62" stroke="#64748b" strokeWidth="1.5" />
              <text x="102" y="52" fill="#38bdf8" fontSize="8">C</text>
              <circle cx="15" cy="42" r="2" fill="#38bdf8" />
              <text x="8" y="44" fill="#38bdf8" fontSize="7" textAnchor="end">V_in</text>
              <circle cx="105" cy="42" r="2" fill="#38bdf8" />
              <text x="110" y="44" fill="#38bdf8" fontSize="7">V_out</text>
              {/* Response curve mini */}
              <path d="M 140,55 L 175,55 Q 190,55 215,68" fill="none" stroke="#38bdf8" strokeWidth="2" />
              <line x1="135" y1="68" x2="220" y2="68" stroke="#475569" strokeWidth="1" />
              <circle cx="185" cy="58" r="2" fill="#f43f5e" />
              <text x="185" y="52" fill="#f43f5e" fontSize="7" textAnchor="middle">-3 dB</text>
              <text x="215" y="62" fill="#94a3b8" fontSize="6.5" textAnchor="end">-20 dB/dec</text>
            </g>

            {/* Top-Right: High-Pass Filter (Series C, Shunt R) */}
            <g transform="translate(280, 48)">
              <rect x="0" y="0" width="230" height="72" rx="4" fill="#1e293b" stroke="#34d399" strokeWidth="1" />
              <text x="10" y="16" fill="#34d399" fontSize="10" fontWeight="bold">1st-Order High-Pass (HPF)</text>
              <text x="220" y="16" fill="#94a3b8" fontSize="8" textAnchor="end">f_c = 1 / (2πRC)</text>
              {/* Circuit schematic */}
              <line x1="15" y1="42" x2="45" y2="42" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="45" y1="36" x2="45" y2="48" stroke="#34d399" strokeWidth="2" />
              <line x1="49" y1="36" x2="49" y2="48" stroke="#34d399" strokeWidth="2" />
              <text x="47" y="32" fill="#34d399" fontSize="8" textAnchor="middle">C</text>
              <line x1="49" y1="42" x2="105" y2="42" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="80" y1="42" x2="80" y2="48" stroke="#94a3b8" strokeWidth="1.5" />
              <rect x="74" y="48" width="12" height="16" rx="1" fill="#059669" stroke="#34d399" strokeWidth="1" />
              <text x="80" y="59" fill="#ffffff" fontSize="7" textAnchor="middle">R</text>
              <line x1="80" y1="64" x2="80" y2="68" stroke="#94a3b8" strokeWidth="1" />
              <line x1="76" y1="68" x2="84" y2="68" stroke="#64748b" strokeWidth="1.5" />
              <circle cx="15" cy="42" r="2" fill="#34d399" />
              <text x="8" y="44" fill="#34d399" fontSize="7" textAnchor="end">V_in</text>
              <circle cx="105" cy="42" r="2" fill="#34d399" />
              <text x="110" y="44" fill="#34d399" fontSize="7">V_out</text>
              {/* Response curve mini */}
              <path d="M 140,68 Q 165,55 180,55 L 215,55" fill="none" stroke="#34d399" strokeWidth="2" />
              <line x1="135" y1="68" x2="220" y2="68" stroke="#475569" strokeWidth="1" />
              <circle cx="170" cy="58" r="2" fill="#f43f5e" />
              <text x="170" y="52" fill="#f43f5e" fontSize="7" textAnchor="middle">-3 dB</text>
              <text x="145" y="62" fill="#94a3b8" fontSize="6.5">+20 dB/dec</text>
            </g>

            {/* Bottom-Left: 2nd-Order Series RLC Band-Pass Filter */}
            <g transform="translate(30, 126)">
              <rect x="0" y="0" width="230" height="66" rx="4" fill="#1e293b" stroke="#fbbf24" strokeWidth="1" />
              <text x="10" y="15" fill="#fbbf24" fontSize="9.5" fontWeight="bold">2nd-Order Band-Pass (BPF)</text>
              <text x="220" y="15" fill="#94a3b8" fontSize="7.5" textAnchor="end">f₀ = 1/(2π√LC) | Q = f₀/BW</text>
              <text x="10" y="32" fill="#cbd5e1" fontSize="8">Series R-L-C Network, V_out across Resistor R</text>
              <text x="10" y="45" fill="#94a3b8" fontSize="7.5">Resonance: X_L = X_C  ⇒  |H(jω₀)| = 1 (0 dB maximum)</text>
              <text x="10" y="58" fill="#fbbf24" fontSize="7.5">Roll-off: -20 dB/dec skirts (-40 dB/dec 2nd-order pole)</text>
              {/* Mini resonant bell curve */}
              <path d="M 160,60 Q 185,25 210,60" fill="none" stroke="#fbbf24" strokeWidth="2" />
              <line x1="155" y1="60" x2="215" y2="60" stroke="#475569" strokeWidth="1" />
              <circle cx="185" cy="27" r="2" fill="#38bdf8" />
              <text x="185" y="22" fill="#38bdf8" fontSize="7" textAnchor="middle">f₀</text>
            </g>

            {/* Bottom-Right: Band-Stop / Notch Filter */}
            <g transform="translate(280, 126)">
              <rect x="0" y="0" width="230" height="66" rx="4" fill="#1e293b" stroke="#f43f5e" strokeWidth="1" />
              <text x="10" y="15" fill="#f43f5e" fontSize="9.5" fontWeight="bold">Band-Stop / Notch Filter</text>
              <text x="220" y="15" fill="#94a3b8" fontSize="7.5" textAnchor="end">Deep Transmission Null at f₀</text>
              <text x="10" y="32" fill="#cbd5e1" fontSize="8">Output across series LC or shunt LC tank</text>
              <text x="10" y="45" fill="#94a3b8" fontSize="7.5">At ω₀: LC short-circuits signal to ground (V_out ≈ 0)</text>
              <text x="10" y="58" fill="#f43f5e" fontSize="7.5">Application: Eliminates 50 Hz/60 Hz power-line hum</text>
              {/* Mini notch curve */}
              <path d="M 160,30 Q 180,30 185,58 Q 190,30 210,30" fill="none" stroke="#f43f5e" strokeWidth="2" />
              <line x1="155" y1="60" x2="215" y2="60" stroke="#475569" strokeWidth="1" />
              <circle cx="185" cy="58" r="2" fill="#f43f5e" />
              <text x="185" y="24" fill="#f43f5e" fontSize="7" textAnchor="middle">Null</text>
            </g>

            {/* Bottom Summary Bar */}
            <rect x="30" y="198" width="480" height="34" rx="4" fill="#020617" stroke="#334155" />
            <text x="270" y="212" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">
              Half-Power Cutoff: |H(jω_c)| = 1/√2 ≈ 0.7071 (-3.01 dB) | P_out = 0.5 P_in | Phase: -45° (LPF), +45° (HPF)
            </text>
            <text x="270" y="225" fill="#94a3b8" fontSize="8" textAnchor="middle">
              Cascaded 1st-order stages roll off at -20 dB/dec per pole; 2nd-order RLC stages roll off at -40 dB/dec.
            </text>
          </svg>
          <p className="text-xs font-mono text-sky-300 mt-2 text-center font-semibold">
            {caption || "Passive AC Filter Design: 1st-order RC/RL and 2nd-order RLC network topologies with -3 dB cutoff boundaries."}
          </p>
        </div>
      );

    case 'circuit-ch12-bode-plots-frequency-response':
    case 'circuit-ch12-passive-filters-bode':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 250" className="w-full max-w-xl h-64">
            {/* Bode Plots: Magnitude & Phase Frequency Response */}
            <rect x="15" y="15" width="510" height="225" rx="8" fill="#0f172a" stroke="#6366f1" strokeWidth="1.5" />
            <text x="270" y="34" fill="#a5b4fc" fontSize="12" fontWeight="bold" textAnchor="middle">
              Bode Magnitude & Phase Asymptotic Frequency Response
            </text>

            {/* Top Left: Bode Magnitude Plot (Linear dB vs Log ω) */}
            <g transform="translate(30, 46)">
              <rect x="0" y="0" width="235" height="108" rx="4" fill="#020617" stroke="#334155" />
              <text x="10" y="14" fill="#38bdf8" fontSize="9" fontWeight="bold">Magnitude Response |H(jω)| (dB)</text>
              {/* Axes */}
              <line x1="30" y1="22" x2="30" y2="92" stroke="#64748b" strokeWidth="1.5" />
              <line x1="30" y1="62" x2="225" y2="62" stroke="#475569" strokeWidth="1" strokeDasharray="3 2" />
              <line x1="30" y1="92" x2="225" y2="92" stroke="#64748b" strokeWidth="1.5" />
              {/* Y ticks */}
              <text x="25" y="36" fill="#94a3b8" fontSize="7.5" textAnchor="end">+20 dB</text>
              <text x="25" y="65" fill="#38bdf8" fontSize="7.5" fontWeight="bold" textAnchor="end">0 dB</text>
              <text x="25" y="90" fill="#94a3b8" fontSize="7.5" textAnchor="end">-20 dB</text>
              {/* X ticks */}
              <text x="35" y="103" fill="#64748b" fontSize="7">0.1ω_c</text>
              <text x="95" y="103" fill="#fbbf24" fontSize="7.5" fontWeight="bold">ω_c</text>
              <text x="155" y="103" fill="#64748b" fontSize="7">10ω_c</text>
              <text x="215" y="103" fill="#64748b" fontSize="7">100ω_c</text>
              {/* Asymptote (0 dB to ω_c, then -20 dB/dec) */}
              <line x1="30" y1="62" x2="95" y2="62" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 2" />
              <line x1="95" y1="62" x2="200" y2="92" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 2" />
              <text x="160" y="78" fill="#64748b" fontSize="7">-20 dB/dec</text>
              {/* True 1st-order curve */}
              <path d="M 30,62 L 70,62 Q 95,64 125,72 L 200,92" fill="none" stroke="#22d3ee" strokeWidth="2" />
              {/* -3.01 dB corner marker */}
              <circle cx="95" cy="66" r="2.5" fill="#f43f5e" />
              <text x="95" y="57" fill="#f43f5e" fontSize="7" fontWeight="bold" textAnchor="middle">-3 dB</text>
              {/* 2nd-order resonance peak */}
              <path d="M 30,62 L 75,62 Q 90,40 100,45 Q 115,75 160,92" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="2 1" />
              <text x="100" y="36" fill="#fbbf24" fontSize="7" fontWeight="bold" textAnchor="middle">Resonant Peak M_p</text>
            </g>

            {/* Top Right: Bode Phase Plot (Linear Degrees vs Log ω) */}
            <g transform="translate(275, 46)">
              <rect x="0" y="0" width="235" height="108" rx="4" fill="#020617" stroke="#334155" />
              <text x="10" y="14" fill="#a78bfa" fontSize="9" fontWeight="bold">Phase Response ∠H(jω) (Degrees)</text>
              {/* Axes */}
              <line x1="30" y1="22" x2="30" y2="92" stroke="#64748b" strokeWidth="1.5" />
              <line x1="30" y1="92" x2="225" y2="92" stroke="#64748b" strokeWidth="1.5" />
              {/* Y ticks */}
              <text x="25" y="32" fill="#34d399" fontSize="7.5" textAnchor="end">0°</text>
              <line x1="28" y1="30" x2="225" y2="30" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
              <text x="25" y="58" fill="#fbbf24" fontSize="7.5" fontWeight="bold" textAnchor="end">-45°</text>
              <line x1="28" y1="56" x2="225" y2="56" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
              <text x="25" y="86" fill="#f43f5e" fontSize="7.5" textAnchor="end">-90°</text>
              <line x1="28" y1="84" x2="225" y2="84" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
              {/* X ticks */}
              <text x="35" y="103" fill="#64748b" fontSize="7">0.1ω_c</text>
              <text x="95" y="103" fill="#fbbf24" fontSize="7.5" fontWeight="bold">ω_c</text>
              <text x="155" y="103" fill="#64748b" fontSize="7">10ω_c</text>
              {/* Asymptotic phase line: 0° up to 0.1wc, sloping at -45°/dec, -90° past 10wc */}
              <polyline points="30,30 45,30 155,84 220,84" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 2" />
              <text x="120" y="68" fill="#64748b" fontSize="7">-45°/dec</text>
              {/* True smooth phase curve */}
              <path d="M 30,30 Q 55,30 95,56 Q 135,84 220,84" fill="none" stroke="#a78bfa" strokeWidth="2" />
              <circle cx="95" cy="56" r="2.5" fill="#fbbf24" />
              <text x="102" y="52" fill="#fbbf24" fontSize="7" fontWeight="bold">-45° at ω_c</text>
            </g>

            {/* Bottom: Transfer Function & Stability Reference */}
            <rect x="30" y="162" width="480" height="70" rx="4" fill="#020617" stroke="#334155" />
            <text x="45" y="178" fill="#fbbf24" fontSize="9.5" fontWeight="bold">
              Standard Forms:
            </text>
            <text x="145" y="178" fill="#38bdf8" fontSize="9">
              1st-Order: H(s) = K / [1 + s/ω_c]  ⇒  Roll-off: -20 dB/decade (-6 dB/octave)
            </text>
            <text x="145" y="193" fill="#a5b4fc" fontSize="9">
              2nd-Order: H(s) = ω₀² / [s² + 2ζω₀s + ω₀²]  ⇒  Roll-off: -40 dB/decade (-12 dB/octave)
            </text>
            <text x="45" y="210" fill="#34d399" fontSize="9" fontWeight="bold">
              Stability Metrics:
            </text>
            <text x="145" y="210" fill="#cbd5e1" fontSize="8.5">
              Gain Margin GM = -|H(jω_π)|_dB (at ∠H = -180°) | Phase Margin PM = 180° + ∠H(jω_g) (at |H| = 0 dB)
            </text>
            <text x="45" y="225" fill="#94a3b8" fontSize="8">
              Resonant Peak occurs when damping ratio ζ &lt; 0.7071 (Q &gt; 0.7071): M_p = 1 / [2ζ√(1 - ζ²)] ≈ Q
            </text>
          </svg>
          <p className="text-xs font-mono text-indigo-300 mt-2 text-center font-semibold">
            {caption || "Bode Plots & Frequency Response: Magnitude asymptotes, -3 dB corner error, and phase response."}
          </p>
        </div>
      );

    case 'circuit-ch12-two-port-network-parameters':
    case 'circuit-ch12-two-port-parameters-ac':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 240" className="w-full max-w-xl h-60">
            {/* Standard Two-Port Network Block */}
            <rect x="20" y="20" width="500" height="200" rx="8" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1.5" />
            <text x="270" y="42" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">
              Two-Port Network Parameter Representations (Z, Y, ABCD, h)
            </text>

            {/* Two-Port Box in Center */}
            <g transform="translate(190, 65)">
              <rect x="0" y="0" width="160" height="90" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
              <text x="80" y="35" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">Linear Two-Port</text>
              <text x="80" y="52" fill="#94a3b8" fontSize="10" textAnchor="middle">AC Network</text>
              <text x="80" y="72" fill="#fbbf24" fontSize="9" fontWeight="bold" textAnchor="middle">[Z], [Y], [T], [h]</text>
            </g>

            {/* Port 1 (Input) */}
            <g transform="translate(60, 65)">
              {/* Terminals */}
              <circle cx="130" cy="15" r="4" fill="#38bdf8" />
              <circle cx="130" cy="75" r="4" fill="#38bdf8" />
              <line x1="40" y1="15" x2="130" y2="15" stroke="#38bdf8" strokeWidth="2" />
              <line x1="40" y1="75" x2="130" y2="75" stroke="#38bdf8" strokeWidth="2" />
              {/* Current I1 arrow entering */}
              <line x1="60" y1="15" x2="95" y2="15" stroke="#f59e0b" strokeWidth="2.5" />
              <polygon points="90,11 100,15 90,19" fill="#f59e0b" />
              <text x="80" y="8" fill="#fbbf24" fontSize="10" fontWeight="bold">I₁</text>
              {/* Voltage V1 */}
              <text x="25" y="20" fill="#38bdf8" fontSize="11" fontWeight="bold">+</text>
              <text x="25" y="50" fill="#38bdf8" fontSize="11" fontWeight="bold">V₁</text>
              <text x="25" y="80" fill="#38bdf8" fontSize="11" fontWeight="bold">-</text>
              <text x="80" y="105" fill="#94a3b8" fontSize="9" textAnchor="middle">Port 1 (Input)</text>
            </g>

            {/* Port 2 (Output) */}
            <g transform="translate(350, 65)">
              {/* Terminals */}
              <circle cx="0" cy="15" r="4" fill="#10b981" />
              <circle cx="0" cy="75" r="4" fill="#10b981" />
              <line x1="0" y1="15" x2="90" y2="15" stroke="#10b981" strokeWidth="2" />
              <line x1="0" y1="75" x2="90" y2="75" stroke="#10b981" strokeWidth="2" />
              {/* Current I2 arrow entering */}
              <line x1="70" y1="15" x2="35" y2="15" stroke="#f59e0b" strokeWidth="2.5" />
              <polygon points="40,11 30,15 40,19" fill="#f59e0b" />
              <text x="50" y="8" fill="#fbbf24" fontSize="10" fontWeight="bold">I₂</text>
              {/* Voltage V2 */}
              <text x="100" y="20" fill="#10b981" fontSize="11" fontWeight="bold">+</text>
              <text x="100" y="50" fill="#10b981" fontSize="11" fontWeight="bold">V₂</text>
              <text x="100" y="80" fill="#10b981" fontSize="11" fontWeight="bold">-</text>
              <text x="45" y="105" fill="#94a3b8" fontSize="9" textAnchor="middle">Port 2 (Output)</text>
            </g>

            {/* Bottom reciprocity & cascade summary */}
            <rect x="40" y="165" width="460" height="42" rx="4" fill="#020617" stroke="#334155" />
            <text x="270" y="181" fill="#38bdf8" fontSize="9.5" fontWeight="bold" textAnchor="middle">
              Reciprocity: z₁₂ = z₂₁  |  y₁₂ = y₂₁  |  AD - BC = 1 (T)  |  h₁₂ = -h₂₁
            </text>
            <text x="270" y="196" fill="#fbbf24" fontSize="9" textAnchor="middle">
              Symmetry: z₁₁ = z₂₂  |  A = D  |  Cascade Connection: [T_total] = [T_A] · [T_B]
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-semibold">
            {caption || "AC Two-Port Parameters: Formal matrix representations with reciprocity (AD - BC = 1) and symmetry (A = D) conditions."}
          </p>
        </div>
      );

    case 'circuit-ch12-non-sinusoidal-harmonics':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 240" className="w-full max-w-xl h-60">
            <rect x="15" y="15" width="510" height="210" rx="8" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.5" />
            <text x="270" y="36" fill="#22d3ee" fontSize="12" fontWeight="bold" textAnchor="middle">
              Non-Sinusoidal AC Waveform Fourier Decomposition & Harmonic Impedance
            </text>

            {/* Source Decomposition on Left */}
            <g transform="translate(40, 55)">
              <rect x="0" y="0" width="170" height="110" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="85" y="20" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">
                Fourier Series Source v(t)
              </text>
              {/* Stacked Sources */}
              <circle cx="45" cy="50" r="13" fill="#0f172a" stroke="#a855f7" strokeWidth="1.5" />
              <text x="45" y="54" fill="#a855f7" fontSize="9" fontWeight="bold" textAnchor="middle">V_dc</text>
              
              <circle cx="85" cy="50" r="13" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="85" y="54" fill="#60a5fa" fontSize="9" fontWeight="bold" textAnchor="middle">v₁(t)</text>

              <circle cx="125" cy="50" r="13" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="125" y="54" fill="#fbbf24" fontSize="9" fontWeight="bold" textAnchor="middle">v_n(t)</text>

              <text x="85" y="85" fill="#94a3b8" fontSize="8.5" textAnchor="middle">
                v(t) = V_dc + Σ V_n sin(nωt + θ_n)
              </text>
              <text x="85" y="100" fill="#22d3ee" fontSize="8" textAnchor="middle">
                Superposition Principle
              </text>
            </g>

            {/* Connecting Lines */}
            <line x1="210" y1="80" x2="260" y2="80" stroke="#f59e0b" strokeWidth="2.5" />
            <polygon points="250,76 260,80 250,84" fill="#f59e0b" />
            <text x="235" y="72" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">i(t)</text>

            <line x1="210" y1="140" x2="480" y2="140" stroke="#64748b" strokeWidth="2" />
            <line x1="480" y1="80" x2="480" y2="140" stroke="#64748b" strokeWidth="2" />

            {/* Load Branch on Right (Series R-L) */}
            <g transform="translate(260, 68)">
              {/* Resistor R */}
              <rect x="0" y="0" width="60" height="24" rx="3" fill="#1e293b" stroke="#34d399" strokeWidth="1.5" />
              <text x="30" y="15" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">R (Fixed)</text>

              <line x1="60" y1="12" x2="90" y2="12" stroke="#64748b" strokeWidth="2" />

              {/* Inductor L with frequency-dependent reactance */}
              <g transform="translate(90, 0)">
                <rect x="0" y="0" width="90" height="24" rx="3" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="45" y="15" fill="#fbbf24" fontSize="9.5" fontWeight="bold" textAnchor="middle">X_Ln = n · ωL</text>
              </g>

              <line x1="180" y1="12" x2="220" y2="12" stroke="#64748b" strokeWidth="2" />

              <text x="110" y="42" fill="#e2e8f0" fontSize="9" textAnchor="middle">
                Z_n = R + j(nωL) ⟹ Attenuates Higher Harmonics
              </text>
            </g>

            {/* Parseval RMS Formula Box */}
            <rect x="35" y="175" width="470" height="38" rx="4" fill="#020617" stroke="#334155" />
            <text x="270" y="191" fill="#22d3ee" fontSize="10" fontWeight="bold" textAnchor="middle">
              V_rms = √( V_dc² + V₁,rms² + V₃,rms² + V₅,rms² + ... )  |  Form Factor k_f = V_rms / V_avg
            </text>
            <text x="270" y="205" fill="#fbbf24" fontSize="9" textAnchor="middle">
              Cross-frequency active power is zero: P_total = V_dc · I_dc + Σ V_n,rms · I_n,rms · cos(φ_n)
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-semibold">
            {caption || "Non-Sinusoidal AC Harmonics: Fourier series decomposition, frequency-dependent branch impedance Z_n, and Parseval true RMS power."}
          </p>
        </div>
      );

    case 'circuit-ch12-thd-distortion-power':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 240" className="w-full max-w-xl h-60">
            <rect x="15" y="15" width="510" height="210" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="270" y="36" fill="#fbbf24" fontSize="12" fontWeight="bold" textAnchor="middle">
              Total Harmonic Distortion (THD), Neutral Overload & Budeanu Power (S² = P² + Q² + D²)
            </text>

            {/* 3-Phase 4-Wire System with Non-Linear Loads */}
            <g transform="translate(35, 55)">
              {/* Supply Lines */}
              <text x="0" y="18" fill="#ef4444" fontSize="10" fontWeight="bold">Phase A:</text>
              <line x1="55" y1="15" x2="200" y2="15" stroke="#ef4444" strokeWidth="2" />
              <text x="120" y="11" fill="#fca5a5" fontSize="8">I_A (Fundamental + 3rd + 5th)</text>

              <text x="0" y="43" fill="#eab308" fontSize="10" fontWeight="bold">Phase B:</text>
              <line x1="55" y1="40" x2="200" y2="40" stroke="#eab308" strokeWidth="2" />
              <text x="120" y="36" fill="#fef08a" fontSize="8">I_B (Fundamental + 3rd + 5th)</text>

              <text x="0" y="68" fill="#3b82f6" fontSize="10" fontWeight="bold">Phase C:</text>
              <line x1="55" y1="65" x2="200" y2="65" stroke="#3b82f6" strokeWidth="2" />
              <text x="120" y="61" fill="#93c5fd" fontSize="8">I_C (Fundamental + 3rd + 5th)</text>

              {/* Neutral Conductor */}
              <text x="0" y="96" fill="#f43f5e" fontSize="10" fontWeight="bold">Neutral N:</text>
              <line x1="55" y1="92" x2="200" y2="92" stroke="#f43f5e" strokeWidth="3" strokeDasharray="5 2" />
              <text x="120" y="106" fill="#fb7185" fontSize="9" fontWeight="bold">I_N = 3 · I₃ (Triplens in Phase!)</text>
            </g>

            {/* Non-Linear Loads Block on Right */}
            <g transform="translate(250, 55)">
              <rect x="0" y="5" width="240" height="98" rx="6" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="120" y="24" fill="#fbbf24" fontSize="10.5" fontWeight="bold" textAnchor="middle">
                Nonlinear Rectifier / SMPS / VFD
              </text>
              
              {/* Diode Bridge Symbol snippet */}
              <g transform="translate(40, 35)">
                <rect x="0" y="0" width="160" height="42" rx="4" fill="#0f172a" stroke="#64748b" />
                <text x="80" y="18" fill="#38bdf8" fontSize="9" textAnchor="middle">
                  Current THD_i = √(Σ I_n²) / I₁ × 100%
                </text>
                <text x="80" y="33" fill="#ec4899" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                  Distortion Factor: ν = I₁ / I_rms = 1 / √(1 + THD²)
                </text>
              </g>

              <text x="120" y="93" fill="#a855f7" fontSize="8.5" textAnchor="middle">
                True PF = DPF · Distortion Factor = cos(φ₁) · ν
              </text>
            </g>

            {/* Budeanu Orthogonal Power Triangle Box */}
            <rect x="35" y="168" width="470" height="44" rx="4" fill="#020617" stroke="#334155" />
            <text x="270" y="184" fill="#38bdf8" fontSize="9.5" fontWeight="bold" textAnchor="middle">
              Apparent Power: S² = P² + Q² + D²  |  Distortion Power D = V₁ · √(Σ I_n²)  [Units: VAD]
            </text>
            <text x="270" y="200" fill="#f87171" fontSize="9" textAnchor="middle">
              ⚠️ Shunt power-factor capacitors cannot cancel D! Active Harmonic Filters (AHF) or detuned reactors required.
            </text>
          </svg>
          <p className="text-xs font-mono text-amber-300 mt-2 text-center font-semibold">
            {caption || "Total Harmonic Distortion (THD): Triplen harmonic neutral current multiplication (I_N = 3·I_3) and Budeanu distortion power D."}
          </p>
        </div>
      );

    case 'circuit-ch12-ac-locus-diagrams':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 540 240" className="w-full max-w-xl h-60">
            <rect x="15" y="15" width="510" height="210" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
            <text x="270" y="36" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">
              Complex Plane Inversion (w = 1/z) & AC Current Locus Semicircles
            </text>

            {/* Left: Impedance Plane Z = R + jXL */}
            <g transform="translate(30, 50)">
              <rect x="0" y="0" width="220" height="110" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
              <text x="110" y="18" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">
                Impedance Z-Plane (R varies 0 → ∞)
              </text>

              {/* Axes */}
              <line x1="25" y1="85" x2="200" y2="85" stroke="#64748b" strokeWidth="1" />
              <line x1="45" y1="100" x2="45" y2="25" stroke="#64748b" strokeWidth="1" />
              <text x="200" y="95" fill="#94a3b8" fontSize="8">Re(Z)</text>
              <text x="35" y="28" fill="#94a3b8" fontSize="8">+j</text>

              {/* Horizontal line locus at jXL */}
              <line x1="45" y1="50" x2="195" y2="50" stroke="#38bdf8" strokeWidth="2.5" />
              <circle cx="45" cy="50" r="3" fill="#38bdf8" />
              <text x="38" y="53" fill="#38bdf8" fontSize="8" textAnchor="end">jX_L</text>
              <text x="120" y="44" fill="#38bdf8" fontSize="8.5" fontWeight="bold">Z = R + jX_L (Straight Line)</text>
              <text x="110" y="102" fill="#94a3b8" fontSize="8" textAnchor="middle">d = X_L (Distance to Origin)</text>
            </g>

            {/* Conformal Mapping Arrow */}
            <g transform="translate(255, 95)">
              <line x1="0" y1="10" x2="25" y2="10" stroke="#10b981" strokeWidth="2.5" />
              <polygon points="23,6 30,10 23,14" fill="#10b981" />
              <text x="14" y="2" fill="#34d399" fontSize="8.5" fontWeight="bold" textAnchor="middle">Y = 1/Z</text>
              <text x="14" y="24" fill="#94a3b8" fontSize="7.5" textAnchor="middle">I = V·Y</text>
            </g>

            {/* Right: Current Locus Plane (Semicircle in 4th quadrant) */}
            <g transform="translate(290, 50)">
              <rect x="0" y="0" width="220" height="110" rx="6" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" />
              <text x="110" y="18" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">
                Current I-Plane (4th Quadrant Semicircle)
              </text>

              {/* Axes */}
              <line x1="25" y1="35" x2="200" y2="35" stroke="#64748b" strokeWidth="1" />
              <line x1="45" y1="25" x2="45" y2="100" stroke="#64748b" strokeWidth="1" />
              <text x="200" y="30" fill="#94a3b8" fontSize="8">+Re(I)</text>
              <text x="35" y="100" fill="#94a3b8" fontSize="8">-j</text>

              {/* Semicircle Arc from (45, 35) to (45, 95) */}
              <path d="M 45 35 A 30 30 0 0 1 45 95" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
              <circle cx="45" cy="95" r="3" fill="#f59e0b" />
              <text x="38" y="98" fill="#fbbf24" fontSize="8" textAnchor="end">V/X_L</text>

              {/* Phasor Arrow to 45 deg */}
              <line x1="45" y1="35" x2="66" y2="56" stroke="#10b981" strokeWidth="2" />
              <circle cx="66" cy="56" r="3" fill="#10b981" />
              <text x="72" y="60" fill="#34d399" fontSize="8" fontWeight="bold">P_max (R = X_L)</text>
              <text x="110" y="102" fill="#fbbf24" fontSize="8" textAnchor="middle">Diameter D = V / X_L along -j axis</text>
            </g>

            {/* Bottom Summary Box */}
            <rect x="35" y="168" width="470" height="44" rx="4" fill="#020617" stroke="#334155" />
            <text x="270" y="184" fill="#34d399" fontSize="9.5" fontWeight="bold" textAnchor="middle">
              Circle Inversion: Any line in Z-plane transforms into a circle passing through the origin in I-plane
            </text>
            <text x="270" y="200" fill="#fbbf24" fontSize="9" textAnchor="middle">
              Maximum Active Power: P_max = V² / (2X_L) at φ = -45°  |  Foundation for Induction Motor Heyland Circle Diagrams
            </text>
          </svg>
          <p className="text-xs font-mono text-emerald-300 mt-2 text-center font-semibold">
            {caption || "AC Locus Diagrams: Conformal mapping w = 1/z turning linear impedance into circular current loci with maximum active power tangent."}
          </p>
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
