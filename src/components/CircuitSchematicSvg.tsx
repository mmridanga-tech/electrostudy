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
