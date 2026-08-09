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
