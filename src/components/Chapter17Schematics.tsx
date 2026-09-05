import React from 'react';

export function renderChapter17Schematic(svgType?: string, caption?: string): React.ReactNode | null {
  switch (svgType) {
    case 'sch-ch17-protection-zones-overlap':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 580 200" className="w-full max-w-xl h-52">
            <text x="290" y="16" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">
              Overlapping Zones of Protection &amp; CT Placement across Circuit Breaker
            </text>

            {/* Generator Zone (Left) */}
            <rect x="20" y="32" width="130" height="135" rx="6" fill="#6366f1" fillOpacity="0.12" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4,4" />
            <text x="85" y="46" fill="#a5b4fc" fontSize="8" fontWeight="bold" textAnchor="middle">Generator Zone (Zone 1)</text>

            {/* Generator G */}
            <circle cx="65" cy="100" r="18" fill="#1e293b" stroke="#818cf8" strokeWidth="2" />
            <text x="65" y="104" fill="#e0e7ff" fontSize="9" fontWeight="bold" textAnchor="middle">GEN</text>

            {/* Breaker CB-1 */}
            <line x1="83" y1="100" x2="115" y2="100" stroke="#94a3b8" strokeWidth="2" />
            <rect x="115" y="90" width="22" height="20" rx="2" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
            <text x="126" y="103" fill="#fbbf24" fontSize="7" fontWeight="bold" textAnchor="middle">CB1</text>

            {/* Overlap region around CB-1 */}
            <rect x="105" y="55" width="45" height="90" rx="3" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="1.5" />
            <text x="127.5" y="70" fill="#34d399" fontSize="6.5" fontWeight="bold" textAnchor="middle">CT Overlap</text>

            {/* CT1 and CT2 */}
            <circle cx="108" cy="100" r="4" fill="#10b981" />
            <circle cx="144" cy="100" r="4" fill="#10b981" />

            {/* Transformer Zone (Center) */}
            <rect x="125" y="32" width="175" height="135" rx="6" fill="#06b6d4" fillOpacity="0.12" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4,4" />
            <text x="212" y="46" fill="#67e8f9" fontSize="8" fontWeight="bold" textAnchor="middle">Transformer Zone (Zone 2)</text>

            {/* Transformer T */}
            <g transform="translate(210, 100)">
              <circle cx="-9" cy="0" r="12" fill="none" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="9" cy="0" r="12" fill="none" stroke="#f59e0b" strokeWidth="2" />
            </g>
            <text x="210" y="125" fill="#fde68a" fontSize="7" textAnchor="middle">Power XFR</text>

            {/* Breaker CB-2 */}
            <line x1="230" y1="100" x2="270" y2="100" stroke="#94a3b8" strokeWidth="2" />
            <rect x="270" y="90" width="22" height="20" rx="2" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
            <text x="281" y="103" fill="#fbbf24" fontSize="7" fontWeight="bold" textAnchor="middle">CB2</text>

            {/* Overlap region around CB-2 */}
            <rect x="260" y="55" width="45" height="90" rx="3" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="1.5" />

            {/* Busbar Zone (Right) */}
            <rect x="280" y="32" width="140" height="135" rx="6" fill="#ec4899" fillOpacity="0.12" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="4,4" />
            <text x="350" y="46" fill="#f472b6" fontSize="8" fontWeight="bold" textAnchor="middle">Busbar Zone (Zone 3)</text>

            {/* Busbar */}
            <line x1="292" y1="100" x2="360" y2="100" stroke="#94a3b8" strokeWidth="2" />
            <line x1="360" y1="60" x2="360" y2="150" stroke="#ec4899" strokeWidth="5" strokeLinecap="round" />
            <text x="375" y="70" fill="#f472b6" fontSize="8" fontWeight="bold">Main Bus</text>

            {/* Breaker CB-3 & Feeder Line */}
            <line x1="360" y1="120" x2="420" y2="120" stroke="#94a3b8" strokeWidth="2" />
            <rect x="420" y="110" width="22" height="20" rx="2" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
            <text x="431" y="123" fill="#fbbf24" fontSize="7" fontWeight="bold" textAnchor="middle">CB3</text>

            {/* Line Zone */}
            <rect x="410" y="32" width="150" height="135" rx="6" fill="#3b82f6" fillOpacity="0.12" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" />
            <text x="485" y="46" fill="#93c5fd" fontSize="8" fontWeight="bold" textAnchor="middle">Transmission Line (Zone 4)</text>
            <line x1="442" y1="120" x2="540" y2="120" stroke="#38bdf8" strokeWidth="2" />
            <text x="490" y="115" fill="#38bdf8" fontSize="7.5" textAnchor="middle">Outgoing Line</text>

            {/* Legend / Caption */}
            <rect x="80" y="174" width="420" height="18" rx="3" fill="#0f172a" stroke="#334155" />
            <text x="290" y="186" fill="#cbd5e1" fontSize="7.5" textAnchor="middle">
              CTs placed on both sides of every breaker ensure overlapping protection boundaries with zero blind spots
            </text>
          </svg>
          {caption && <p className="text-xs font-mono text-slate-300 mt-2 max-w-md text-center">{caption}</p>}
        </div>
      );

    case 'sch-ch17-instrument-transformers-protection':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 580 200" className="w-full max-w-xl h-52">
            <text x="290" y="16" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">
              Protection Current Transformer (Class PS / 5P20) Magnetizing &amp; Burden Circuit
            </text>

            {/* Ideal CT Current Source */}
            <g transform="translate(60, 90)">
              <circle cx="0" cy="0" r="18" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
              <text x="0" y="4" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">Is = Ip/N</text>
              <text x="0" y="-24" fill="#94a3b8" fontSize="7" textAnchor="middle">Ideal Secondary</text>
            </g>

            {/* Primary Conductor */}
            <line x1="20" y1="90" x2="42" y2="90" stroke="#f59e0b" strokeWidth="3" />
            <text x="28" y="80" fill="#fbbf24" fontSize="8" fontWeight="bold">Ip</text>

            {/* Secondary Loop Rails */}
            <line x1="78" y1="90" x2="130" y2="90" stroke="#38bdf8" strokeWidth="2" />
            <line x1="60" y1="108" x2="60" y2="150" stroke="#38bdf8" strokeWidth="2" />
            <line x1="60" y1="150" x2="480" y2="150" stroke="#38bdf8" strokeWidth="2" />

            {/* Magnetizing Branch (Excitation) */}
            <line x1="130" y1="90" x2="170" y2="90" stroke="#38bdf8" strokeWidth="2" />
            <line x1="170" y1="90" x2="170" y2="105" stroke="#38bdf8" strokeWidth="2" />
            {/* Non-linear Magnetizing Inductance Xm */}
            <g transform="translate(170, 115)">
              <circle cx="0" cy="-6" r="5" fill="none" stroke="#a855f7" strokeWidth="1.5" />
              <circle cx="0" cy="2" r="5" fill="none" stroke="#a855f7" strokeWidth="1.5" />
              <circle cx="0" cy="10" r="5" fill="none" stroke="#a855f7" strokeWidth="1.5" />
              <line x1="-12" y1="18" x2="12" y2="-12" stroke="#a855f7" strokeWidth="1.5" />
              <text x="18" y="5" fill="#c084fc" fontSize="7.5" fontWeight="bold">Xm(sat)</text>
              <text x="18" y="15" fill="#94a3b8" fontSize="6.5">Nonlinear</text>
            </g>
            <line x1="170" y1="135" x2="170" y2="150" stroke="#38bdf8" strokeWidth="2" />
            <text x="170" y="82" fill="#c084fc" fontSize="7" fontWeight="bold" textAnchor="middle">Ie (Exciting)</text>

            {/* CT Secondary Winding Resistance Rct */}
            <line x1="170" y1="90" x2="230" y2="90" stroke="#38bdf8" strokeWidth="2" />
            <rect x="230" y="82" width="36" height="16" rx="2" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="248" y="93" fill="#fde68a" fontSize="7.5" fontWeight="bold" textAnchor="middle">Rct</text>
            <text x="248" y="74" fill="#94a3b8" fontSize="6.5" textAnchor="middle">Winding (Ω)</text>

            {/* Pilot Wire Loop Resistance Rloop = 2*RL */}
            <line x1="266" y1="90" x2="330" y2="90" stroke="#38bdf8" strokeWidth="2" />
            <rect x="330" y="82" width="44" height="16" rx="2" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="352" y="93" fill="#bae6fd" fontSize="7.5" fontWeight="bold" textAnchor="middle">2 × R_lead</text>
            <text x="352" y="74" fill="#94a3b8" fontSize="6.5" textAnchor="middle">Cable Run (Ω)</text>

            {/* Relay Burden Rb */}
            <line x1="374" y1="90" x2="440" y2="90" stroke="#38bdf8" strokeWidth="2" />
            <line x1="440" y1="90" x2="440" y2="105" stroke="#38bdf8" strokeWidth="2" />
            <rect x="425" y="105" width="30" height="24" rx="3" fill="#065f46" stroke="#10b981" strokeWidth="1.5" />
            <text x="440" y="120" fill="#a7f3d0" fontSize="7.5" fontWeight="bold" textAnchor="middle">R_relay</text>
            <text x="475" y="120" fill="#34d399" fontSize="7" fontWeight="bold">Burden</text>
            <line x1="440" y1="129" x2="440" y2="150" stroke="#38bdf8" strokeWidth="2" />

            {/* Knee-point Voltage Formula Box */}
            <rect x="80" y="165" width="420" height="24" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
            <text x="290" y="181" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">
              Class PS Knee-Point Requirement:  Vk ≥ 2 · If(max) / N · (Rct + 2 · Rlead + Rrelay)
            </text>
          </svg>
          {caption && <p className="text-xs font-mono text-slate-300 mt-2 max-w-md text-center">{caption}</p>}
        </div>
      );

    case 'sch-ch17-overcurrent-relay-coordination':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 580 200" className="w-full max-w-xl h-52">
            <text x="290" y="16" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">
              Radial Feeder Overcurrent (51) Time-Graded Discrimination
            </text>

            {/* Source Substation */}
            <circle cx="45" cy="80" r="16" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
            <text x="45" y="84" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">GRID</text>
            <line x1="61" y1="80" x2="100" y2="80" stroke="#38bdf8" strokeWidth="2" />

            {/* Bus A */}
            <line x1="100" y1="40" x2="100" y2="120" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" />
            <text x="100" y="32" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">Bus A</text>

            {/* Relay R1 & Breaker CB1 */}
            <line x1="100" y1="80" x2="140" y2="80" stroke="#94a3b8" strokeWidth="2" />
            <rect x="140" y="70" width="22" height="20" rx="2" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
            <text x="151" y="83" fill="#fbbf24" fontSize="7" fontWeight="bold" textAnchor="middle">CB1</text>
            {/* Relay 1 details */}
            <rect x="125" y="105" width="52" height="28" rx="2" fill="#1e293b" stroke="#a855f7" />
            <text x="151" y="117" fill="#c084fc" fontSize="6.5" fontWeight="bold" textAnchor="middle">Relay R1</text>
            <text x="151" y="127" fill="#cbd5e1" fontSize="6" textAnchor="middle">t = 0.95 s</text>

            {/* Feeder section 1 */}
            <line x1="162" y1="80" x2="270" y2="80" stroke="#94a3b8" strokeWidth="2" />

            {/* Bus B */}
            <line x1="270" y1="40" x2="270" y2="120" stroke="#06b6d4" strokeWidth="5" strokeLinecap="round" />
            <text x="270" y="32" fill="#06b6d4" fontSize="8" fontWeight="bold" textAnchor="middle">Bus B</text>

            {/* Relay R2 & Breaker CB2 */}
            <line x1="270" y1="80" x2="310" y2="80" stroke="#94a3b8" strokeWidth="2" />
            <rect x="310" y="70" width="22" height="20" rx="2" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
            <text x="321" y="83" fill="#fbbf24" fontSize="7" fontWeight="bold" textAnchor="middle">CB2</text>
            {/* Relay 2 details */}
            <rect x="295" y="105" width="52" height="28" rx="2" fill="#1e293b" stroke="#a855f7" />
            <text x="321" y="117" fill="#c084fc" fontSize="6.5" fontWeight="bold" textAnchor="middle">Relay R2</text>
            <text x="321" y="127" fill="#cbd5e1" fontSize="6" textAnchor="middle">t = 0.60 s</text>

            {/* Feeder section 2 */}
            <line x1="332" y1="80" x2="440" y2="80" stroke="#94a3b8" strokeWidth="2" />

            {/* Bus C */}
            <line x1="440" y1="40" x2="440" y2="120" stroke="#10b981" strokeWidth="5" strokeLinecap="round" />
            <text x="440" y="32" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Bus C</text>

            {/* Relay R3 & Breaker CB3 */}
            <line x1="440" y1="80" x2="480" y2="80" stroke="#94a3b8" strokeWidth="2" />
            <rect x="480" y="70" width="22" height="20" rx="2" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
            <text x="491" y="83" fill="#fbbf24" fontSize="7" fontWeight="bold" textAnchor="middle">CB3</text>
            {/* Relay 3 details */}
            <rect x="465" y="105" width="52" height="28" rx="2" fill="#1e293b" stroke="#a855f7" />
            <text x="491" y="117" fill="#c084fc" fontSize="6.5" fontWeight="bold" textAnchor="middle">Relay R3</text>
            <text x="491" y="127" fill="#cbd5e1" fontSize="6" textAnchor="middle">t = 0.25 s</text>

            {/* Load / Downstream Fault */}
            <line x1="502" y1="80" x2="540" y2="80" stroke="#94a3b8" strokeWidth="2" />
            <polygon points="540,80 555,73 555,87" fill="#34d399" />
            <text x="565" y="83" fill="#34d399" fontSize="7.5" fontWeight="bold">Load</text>

            {/* Grading Margins Diagram */}
            <line x1="321" y1="150" x2="491" y2="150" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="406" y="145" fill="#fbbf24" fontSize="7" fontWeight="bold" textAnchor="middle">Grading Margin Δt = 0.35 s</text>

            <line x1="151" y1="170" x2="321" y2="170" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="236" y="165" fill="#fbbf24" fontSize="7" fontWeight="bold" textAnchor="middle">Grading Margin Δt = 0.35 s</text>
          </svg>
          {caption && <p className="text-xs font-mono text-slate-300 mt-2 max-w-md text-center">{caption}</p>}
        </div>
      );

    case 'sch-ch17-differential-protection-principles':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 580 200" className="w-full max-w-xl h-52">
            <text x="290" y="16" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">
              Merz-Price Circulating Current Biased Differential Scheme (87)
            </text>

            {/* Protected Apparatus Zone */}
            <rect x="140" y="35" width="300" height="90" rx="4" fill="#0c4a6e" fillOpacity="0.2" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="290" y="48" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">Protected Zone (Generator / Transformer / Motor)</text>

            {/* Main Power Line */}
            <line x1="40" y1="80" x2="540" y2="80" stroke="#e2e8f0" strokeWidth="3" />
            <text x="60" y="70" fill="#fbbf24" fontSize="8" fontWeight="bold">I1 (Inflow)</text>
            <text x="510" y="70" fill="#fbbf24" fontSize="8" fontWeight="bold">I2 (Outflow)</text>

            {/* CT1 Primary & Secondary */}
            <g transform="translate(130, 80)">
              <circle cx="0" cy="0" r="10" fill="none" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="0" cy="20" r="10" fill="none" stroke="#38bdf8" strokeWidth="2" />
              <text x="-15" y="24" fill="#7dd3fc" fontSize="7" fontWeight="bold" textAnchor="end">CT1</text>
            </g>

            {/* CT2 Primary & Secondary */}
            <g transform="translate(450, 80)">
              <circle cx="0" cy="0" r="10" fill="none" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="0" cy="20" r="10" fill="none" stroke="#38bdf8" strokeWidth="2" />
              <text x="15" y="24" fill="#7dd3fc" fontSize="7" fontWeight="bold">CT2</text>
            </g>

            {/* Pilot Wires Upper & Lower */}
            <line x1="130" y1="110" x2="450" y2="110" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="130" y1="170" x2="450" y2="170" stroke="#38bdf8" strokeWidth="1.5" />

            {/* Restraining Coils in Pilot Path */}
            {/* Restraining Coil 1 */}
            <rect x="230" y="103" width="30" height="14" rx="2" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="245" y="113" fill="#fbbf24" fontSize="6.5" fontWeight="bold" textAnchor="middle">RC 1</text>

            {/* Restraining Coil 2 */}
            <rect x="320" y="103" width="30" height="14" rx="2" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="335" y="113" fill="#fbbf24" fontSize="6.5" fontWeight="bold" textAnchor="middle">RC 2</text>

            {/* Operating Coil in Bridge Center */}
            <line x1="290" y1="110" x2="290" y2="130" stroke="#38bdf8" strokeWidth="1.5" />
            <rect x="275" y="130" width="30" height="24" rx="3" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
            <text x="290" y="142" fill="#a7f3d0" fontSize="7" fontWeight="bold" textAnchor="middle">OP COIL</text>
            <text x="290" y="150" fill="#34d399" fontSize="6" textAnchor="middle">(87 Diff)</text>
            <line x1="290" y1="154" x2="290" y2="170" stroke="#38bdf8" strokeWidth="1.5" />

            {/* Internal Fault Spark */}
            <g transform="translate(300, 80)">
              <circle cx="0" cy="0" r="3" fill="#ef4444" />
              <text x="0" y="-12" fill="#f87171" fontSize="7" fontWeight="bold" textAnchor="middle">Fault Arcing</text>
            </g>

            {/* Mathematical Equilibrium Box */}
            <rect x="50" y="178" width="480" height="18" rx="3" fill="#0f172a" stroke="#334155" />
            <text x="290" y="190" fill="#cbd5e1" fontSize="7.5" textAnchor="middle">
              External Fault: I_diff = |I1 - I2| ≈ 0 (Restrained)  |  Internal Fault: I_diff = |I1 + I2| &gt; k · I_restrain → Instantaneous Trip!
            </text>
          </svg>
          {caption && <p className="text-xs font-mono text-slate-300 mt-2 max-w-md text-center">{caption}</p>}
        </div>
      );

    case 'sch-ch17-transformer-protection-inrush':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 580 200" className="w-full max-w-xl h-52">
            <text x="290" y="16" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">
              Power Transformer Protection: 87T Differential, REF, Buchholz &amp; 2nd Harmonic Restraint
            </text>

            {/* Transformer Tank */}
            <rect x="180" y="35" width="220" height="120" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
            <text x="290" y="52" fill="#fbbf24" fontSize="8.5" fontWeight="bold" textAnchor="middle">Power Transformer (Dyn11)</text>

            {/* HV Bushing & CT */}
            <line x1="80" y1="85" x2="180" y2="85" stroke="#38bdf8" strokeWidth="3" />
            <text x="100" y="75" fill="#38bdf8" fontSize="8" fontWeight="bold">33 kV HV</text>
            <circle cx="130" cy="85" r="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="130" y="105" fill="#7dd3fc" fontSize="6.5" textAnchor="middle">HV CT</text>

            {/* LV Bushing & CT */}
            <line x1="400" y1="85" x2="500" y2="85" stroke="#34d399" strokeWidth="3" />
            <text x="460" y="75" fill="#34d399" fontSize="8" fontWeight="bold">6.6 kV LV</text>
            <circle cx="450" cy="85" r="8" fill="#0f172a" stroke="#34d399" strokeWidth="1.5" />
            <text x="450" y="105" fill="#a7f3d0" fontSize="6.5" textAnchor="middle">LV CT</text>

            {/* Neutral CT (for Restricted Earth Fault 64R) */}
            <line x1="290" y1="130" x2="290" y2="155" stroke="#94a3b8" strokeWidth="2" />
            <line x1="275" y1="155" x2="305" y2="155" stroke="#94a3b8" strokeWidth="2" />
            <line x1="280" y1="160" x2="300" y2="160" stroke="#94a3b8" strokeWidth="1.5" />
            <circle cx="290" cy="140" r="6" fill="#0f172a" stroke="#ec4899" strokeWidth="1.5" />
            <text x="325" y="143" fill="#f472b6" fontSize="6.5" fontWeight="bold">REF NCT</text>

            {/* Buchholz Relay on Conservator Pipe */}
            <rect x="270" y="24" width="40" height="15" rx="2" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="290" y="34" fill="#38bdf8" fontSize="6.5" fontWeight="bold" textAnchor="middle">Buchholz</text>

            {/* Multi-Function Numerical Relay Engine */}
            <g transform="translate(190, 80)">
              <rect x="15" y="-10" width="170" height="40" rx="3" fill="#0f172a" stroke="#6366f1" strokeWidth="1.5" />
              <text x="100" y="3" fill="#a5b4fc" fontSize="7" fontWeight="bold" textAnchor="middle">Numerical Relay (87T / 64R / 24)</text>
              <text x="100" y="14" fill="#cbd5e1" fontSize="6" textAnchor="middle">2nd Harmonic Inrush Filter (&gt;15% Block)</text>
              <text x="100" y="23" fill="#cbd5e1" fontSize="6" textAnchor="middle">5th Harmonic Overfluxing (V/f) Detector</text>
            </g>

            {/* Caption */}
            <rect x="70" y="174" width="440" height="18" rx="3" fill="#0f172a" stroke="#334155" />
            <text x="290" y="186" fill="#cbd5e1" fontSize="7.5" textAnchor="middle">
              Full Protection Suite: 87T for phase faults, 64R (REF) for neutral arcs, Buchholz for gas, 2nd harmonic to prevent inrush false trip
            </text>
          </svg>
          {caption && <p className="text-xs font-mono text-slate-300 mt-2 max-w-md text-center">{caption}</p>}
        </div>
      );

    case 'sch-ch17-distance-protection-lines':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 580 200" className="w-full max-w-xl h-52">
            <text x="290" y="16" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">
              Transmission Line 3-Zone Stepped Distance Protection Reach Profiles
            </text>

            {/* Substation A Bus */}
            <line x1="60" y1="50" x2="60" y2="130" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" />
            <text x="60" y="42" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">Substation A</text>

            {/* Protected Line Section 1 (A to B) */}
            <line x1="60" y1="90" x2="320" y2="90" stroke="#34d399" strokeWidth="3" />
            <text x="190" y="82" fill="#a7f3d0" fontSize="8" fontWeight="bold" textAnchor="middle">Protected Line (100% ZL)</text>

            {/* Substation B Bus */}
            <line x1="320" y1="50" x2="320" y2="130" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
            <text x="320" y="42" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle">Substation B</text>

            {/* Adjacent Line Section 2 (B to C) */}
            <line x1="320" y1="90" x2="520" y2="90" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3,3" />
            <line x1="520" y1="50" x2="520" y2="130" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
            <text x="520" y="42" fill="#cbd5e1" fontSize="8" fontWeight="bold" textAnchor="middle">Substation C</text>

            {/* Zone 1 Reach: 80% Line A-B, t = 0 ms */}
            <line x1="60" y1="105" x2="268" y2="105" stroke="#10b981" strokeWidth="2.5" />
            <circle cx="268" cy="105" r="3" fill="#10b981" />
            <text x="164" y="117" fill="#34d399" fontSize="7.5" fontWeight="bold" textAnchor="middle">
              Zone 1: 80% Reach | Instantaneous (t = 0 ms)
            </text>

            {/* Zone 2 Reach: 120% Line A-B, t = 350 ms */}
            <line x1="60" y1="130" x2="372" y2="130" stroke="#06b6d4" strokeWidth="2" strokeDasharray="4,2" />
            <circle cx="372" cy="130" r="3" fill="#06b6d4" />
            <text x="216" y="142" fill="#67e8f9" fontSize="7.5" fontWeight="bold" textAnchor="middle">
              Zone 2: 120% Reach (Covers End Zone + Bus B) | t = 350 ms
            </text>

            {/* Zone 3 Reach: 160% Line A-B, t = 800 ms */}
            <line x1="60" y1="155" x2="440" y2="155" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2,2" />
            <circle cx="440" cy="155" r="3" fill="#f59e0b" />
            <text x="250" y="167" fill="#fde68a" fontSize="7.5" fontWeight="bold" textAnchor="middle">
              Zone 3: Remote Bus / Adjacent Line Backup Reach | t = 800 ms
            </text>

            {/* Caption */}
            <rect x="60" y="178" width="460" height="16" rx="3" fill="#0f172a" stroke="#334155" />
            <text x="290" y="189" fill="#cbd5e1" fontSize="7.5" textAnchor="middle">
              Zone 1 is capped at 80% to avoid overreaching into Bus B due to CT/CVT transient errors (±5%)
            </text>
          </svg>
          {caption && <p className="text-xs font-mono text-slate-300 mt-2 max-w-md text-center">{caption}</p>}
        </div>
      );

    case 'sch-ch17-pilot-communication-line-protection':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 580 200" className="w-full max-w-xl h-52">
            <text x="290" y="16" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">
              Carrier / OPGW Teleprotection Pilot Scheme (POTT &amp; Line Current Differential 87L)
            </text>

            {/* Terminal A */}
            <rect x="30" y="40" width="100" height="110" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="80" y="56" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">Substation A Relay</text>
            <text x="80" y="70" fill="#94a3b8" fontSize="6.5" textAnchor="middle">Forward Z2 Detect</text>
            <text x="80" y="80" fill="#34d399" fontSize="6.5" textAnchor="middle">Tx: Permissive Freq</text>
            <text x="80" y="90" fill="#a7f3d0" fontSize="6.5" textAnchor="middle">Rx: Carrier Permissive</text>
            <rect x="50" y="105" width="60" height="18" rx="2" fill="#1e293b" stroke="#10b981" />
            <text x="80" y="117" fill="#34d399" fontSize="7" fontWeight="bold" textAnchor="middle">CB-A (Trip)</text>

            {/* Terminal B */}
            <rect x="450" y="40" width="100" height="110" rx="4" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="500" y="56" fill="#fbbf24" fontSize="8" fontWeight="bold" textAnchor="middle">Substation B Relay</text>
            <text x="500" y="70" fill="#94a3b8" fontSize="6.5" textAnchor="middle">Forward Z2 Detect</text>
            <text x="500" y="80" fill="#34d399" fontSize="6.5" textAnchor="middle">Tx: Permissive Freq</text>
            <text x="500" y="90" fill="#a7f3d0" fontSize="6.5" textAnchor="middle">Rx: Carrier Permissive</text>
            <rect x="470" y="105" width="60" height="18" rx="2" fill="#1e293b" stroke="#10b981" />
            <text x="500" y="117" fill="#34d399" fontSize="7" fontWeight="bold" textAnchor="middle">CB-B (Trip)</text>

            {/* Transmission Line Conductor */}
            <line x1="130" y1="65" x2="450" y2="65" stroke="#38bdf8" strokeWidth="3" />
            <text x="290" y="58" fill="#bae6fd" fontSize="7.5" fontWeight="bold" textAnchor="middle">
              400 kV Transmission Line (150 km)
            </text>

            {/* OPGW Optical Fiber Ground Wire */}
            <line x1="130" y1="110" x2="450" y2="110" stroke="#a855f7" strokeWidth="2" strokeDasharray="4,4" />
            <text x="290" y="102" fill="#c084fc" fontSize="7.5" fontWeight="bold" textAnchor="middle">
              OPGW High-Speed Optical Channel (Latency: 6 ms)
            </text>

            {/* Fault Location Marker (End Zone) */}
            <polygon points="400,65 407,53 416,53 409,59 412,69 400,62 388,69 391,59 384,53 393,53" fill="#ef4444" stroke="#fff" />
            <text x="400" y="44" fill="#f87171" fontSize="7" fontWeight="bold" textAnchor="middle">End-Zone Fault</text>

            {/* Logic Box */}
            <rect x="60" y="160" width="460" height="28" rx="3" fill="#0f172a" stroke="#334155" />
            <text x="290" y="172" fill="#34d399" fontSize="7.5" fontWeight="bold" textAnchor="middle">
              POTT Co-action: Substation A (Overreaching Z2) + Substation B Permissive Signal = Instantaneous Trip (&lt; 25 ms)
            </text>
            <text x="290" y="183" fill="#94a3b8" fontSize="6.5" textAnchor="middle">
              Eliminates the standard 350 ms Zone 2 delay across the entire line, safeguarding grid transient stability
            </text>
          </svg>
          {caption && <p className="text-xs font-mono text-slate-300 mt-2 max-w-md text-center">{caption}</p>}
        </div>
      );

    case 'sch-ch17-circuit-breakers-arc-interruption':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 580 200" className="w-full max-w-xl h-52">
            <text x="290" y="16" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">
              Circuit Breaker Arc Extinction, Contact Gap &amp; Transient Recovery Voltage (TRV)
            </text>

            {/* Fixed Contact */}
            <rect x="120" y="60" width="40" height="30" rx="3" fill="#334155" stroke="#f59e0b" strokeWidth="2" />
            <text x="140" y="78" fill="#fbbf24" fontSize="7.5" fontWeight="bold" textAnchor="middle">Fixed</text>

            {/* Moving Contact (Separating) */}
            <rect x="230" y="60" width="40" height="30" rx="3" fill="#334155" stroke="#38bdf8" strokeWidth="2" />
            <text x="250" y="78" fill="#7dd3fc" fontSize="7.5" fontWeight="bold" textAnchor="middle">Moving</text>
            <line x1="270" y1="75" x2="300" y2="75" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="285" y="68" fill="#38bdf8" fontSize="6.5">Open</text>

            {/* High-Temperature Arc Column */}
            <path d="M 160 75 Q 195 65 230 75 Q 195 85 160 75" fill="#f59e0b" fillOpacity="0.8" stroke="#ef4444" strokeWidth="2" />
            <text x="195" y="78" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">ARC PLASMA (6000K)</text>

            {/* SF6 / Dielectric Blast Nozzle */}
            <polygon points="175,45 215,45 200,60 190,60" fill="#06b6d4" fillOpacity="0.3" stroke="#06b6d4" strokeWidth="1" />
            <polygon points="175,105 215,105 200,90 190,90" fill="#06b6d4" fillOpacity="0.3" stroke="#06b6d4" strokeWidth="1" />
            <text x="195" y="40" fill="#67e8f9" fontSize="6.5" fontWeight="bold" textAnchor="middle">SF6 Blast Nozzle</text>

            {/* Slepian Dielectric vs TRV Chart Box (Right) */}
            <g transform="translate(340, 45)">
              <rect x="0" y="0" width="210" height="110" rx="4" fill="#0f172a" stroke="#334155" />
              <text x="105" y="14" fill="#cbd5e1" fontSize="7.5" fontWeight="bold" textAnchor="middle">TRV vs Dielectric Recovery</text>
              {/* Axes */}
              <line x1="20" y1="95" x2="195" y2="95" stroke="#475569" strokeWidth="1.5" />
              <line x1="20" y1="20" x2="20" y2="95" stroke="#475569" strokeWidth="1.5" />
              <text x="195" y="104" fill="#64748b" fontSize="6">Time (μs)</text>
              <text x="12" y="24" fill="#64748b" fontSize="6">kV</text>

              {/* Dielectric Recovery Curve (Green) */}
              <path d="M 20 95 Q 60 40 180 30" fill="none" stroke="#10b981" strokeWidth="2" />
              <text x="120" y="36" fill="#34d399" fontSize="6.5" fontWeight="bold">Dielectric Strength</text>

              {/* TRV Curve (Red) */}
              <path d="M 20 95 Q 40 70 70 55 T 120 75 T 170 85" fill="none" stroke="#ef4444" strokeWidth="1.5" />
              <text x="80" y="70" fill="#f87171" fontSize="6.5" fontWeight="bold">TRV (Oscillatory)</text>

              <text x="105" y="90" fill="#10b981" fontSize="6" fontWeight="bold" textAnchor="middle">Success: Dielectric &gt; TRV at Current Zero</text>
            </g>

            {/* Caption */}
            <rect x="40" y="168" width="500" height="22" rx="3" fill="#0f172a" stroke="#334155" />
            <text x="290" y="182" fill="#cbd5e1" fontSize="7.5" textAnchor="middle">
              At current zero, arc is extinguished; breaker must withstand peak TRV (Vm) and Rate of Rise (RRRV) to prevent restrike
            </text>
          </svg>
          {caption && <p className="text-xs font-mono text-slate-300 mt-2 max-w-md text-center">{caption}</p>}
        </div>
      );

    case 'sch-ch17-numerical-relays-digital-substation':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 580 200" className="w-full max-w-xl h-52">
            <text x="290" y="16" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">
              Numerical Relay DSP Architecture &amp; IEC 61850 Digital Substation Communication
            </text>

            {/* CT / PT Input */}
            <rect x="20" y="50" width="70" height="90" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="55" y="66" fill="#38bdf8" fontSize="7.5" fontWeight="bold" textAnchor="middle">Analog Input</text>
            <text x="55" y="80" fill="#cbd5e1" fontSize="6.5" textAnchor="middle">CT / PT</text>
            <text x="55" y="92" fill="#94a3b8" fontSize="6" textAnchor="middle">Galvanic</text>
            <text x="55" y="102" fill="#94a3b8" fontSize="6" textAnchor="middle">Isolation</text>
            <text x="55" y="125" fill="#f59e0b" fontSize="6.5" textAnchor="middle">Burden R</text>

            {/* Anti-Aliasing Filter */}
            <line x1="90" y1="95" x2="120" y2="95" stroke="#38bdf8" strokeWidth="1.5" />
            <rect x="120" y="65" width="75" height="60" rx="3" fill="#1e293b" stroke="#06b6d4" strokeWidth="1.5" />
            <text x="157" y="82" fill="#67e8f9" fontSize="7" fontWeight="bold" textAnchor="middle">Anti-Aliasing</text>
            <text x="157" y="94" fill="#cbd5e1" fontSize="6.5" textAnchor="middle">Low-Pass Filter</text>
            <text x="157" y="112" fill="#94a3b8" fontSize="6" textAnchor="middle">fc = fs / 2</text>

            {/* ADC (Analog to Digital) */}
            <line x1="195" y1="95" x2="225" y2="95" stroke="#38bdf8" strokeWidth="1.5" />
            <rect x="225" y="65" width="75" height="60" rx="3" fill="#1e293b" stroke="#a855f7" strokeWidth="1.5" />
            <text x="262" y="82" fill="#c084fc" fontSize="7" fontWeight="bold" textAnchor="middle">16-Bit ADC</text>
            <text x="262" y="94" fill="#cbd5e1" fontSize="6.5" textAnchor="middle">Sample &amp; Hold</text>
            <text x="262" y="112" fill="#a855f7" fontSize="6" fontWeight="bold" textAnchor="middle">3200 Hz (64 s/c)</text>

            {/* Digital Signal Processor (DSP) */}
            <line x1="300" y1="95" x2="330" y2="95" stroke="#38bdf8" strokeWidth="1.5" />
            <rect x="330" y="55" width="105" height="80" rx="4" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
            <text x="382" y="72" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">DSP Processor</text>
            <text x="382" y="86" fill="#a7f3d0" fontSize="6.5" textAnchor="middle">• Full-Cycle DFT Phasor</text>
            <text x="382" y="98" fill="#a7f3d0" fontSize="6.5" textAnchor="middle">• Harmonic Filtering</text>
            <text x="382" y="110" fill="#a7f3d0" fontSize="6.5" textAnchor="middle">• Protection Logic (PSL)</text>
            <text x="382" y="122" fill="#fbbf24" fontSize="6.5" textAnchor="middle">• Fault Distance Calc</text>

            {/* Output & IEC 61850 Station / Process Bus */}
            <line x1="435" y1="95" x2="465" y2="95" stroke="#38bdf8" strokeWidth="1.5" />
            <rect x="465" y="50" width="95" height="90" rx="4" fill="#0f172a" stroke="#ec4899" strokeWidth="1.5" />
            <text x="512" y="66" fill="#f472b6" fontSize="7.5" fontWeight="bold" textAnchor="middle">IEC 61850 Bus</text>
            <text x="512" y="82" fill="#cbd5e1" fontSize="6.5" textAnchor="middle">GOOSE Trip (&lt;3ms)</text>
            <text x="512" y="96" fill="#cbd5e1" fontSize="6.5" textAnchor="middle">Sampled Values (SV)</text>
            <text x="512" y="110" fill="#cbd5e1" fontSize="6.5" textAnchor="middle">MMS SCADA Comms</text>
            <text x="512" y="128" fill="#34d399" fontSize="6.5" fontWeight="bold" textAnchor="middle">Trip Output Contact</text>

            {/* Caption */}
            <rect x="40" y="168" width="500" height="22" rx="3" fill="#0f172a" stroke="#334155" />
            <text x="290" y="182" fill="#cbd5e1" fontSize="7.5" textAnchor="middle">
              Hardware Pipeline: CT galvanic isolation → Anti-aliasing filter → 16-bit ADC → Full-Cycle DFT → IEC 61850 GOOSE multicast
            </text>
          </svg>
          {caption && <p className="text-xs font-mono text-slate-300 mt-2 max-w-md text-center">{caption}</p>}
        </div>
      );

    case 'sch-ch17-industrial-protection-capstone':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 580 200" className="w-full max-w-xl h-52">
            <text x="290" y="16" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">
              Complete Industrial Substation Single-Line Protection Architecture
            </text>

            {/* Utility Grid */}
            <circle cx="40" cy="85" r="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
            <text x="40" y="88" fill="#38bdf8" fontSize="7" fontWeight="bold" textAnchor="middle">33kV</text>

            {/* CB-01 */}
            <line x1="54" y1="85" x2="90" y2="85" stroke="#38bdf8" strokeWidth="2" />
            <rect x="90" y="75" width="20" height="20" rx="2" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="100" y="88" fill="#fff" fontSize="6.5" fontWeight="bold" textAnchor="middle">CB1</text>
            <text x="100" y="66" fill="#a5b4fc" fontSize="6" textAnchor="middle">50/51</text>

            {/* Transformer 10 MVA */}
            <line x1="110" y1="85" x2="145" y2="85" stroke="#38bdf8" strokeWidth="2" />
            <g transform="translate(165, 85)">
              <circle cx="-8" cy="0" r="12" fill="none" stroke="#f59e0b" strokeWidth="2" />
              <circle cx="8" cy="0" r="12" fill="none" stroke="#34d399" strokeWidth="2" />
            </g>
            <text x="165" y="112" fill="#fbbf24" fontSize="7" fontWeight="bold" textAnchor="middle">10 MVA Dyn11</text>
            <text x="165" y="62" fill="#f472b6" fontSize="6" fontWeight="bold" textAnchor="middle">87T / 64R</text>

            {/* CB-02 Secondary Incomer */}
            <line x1="185" y1="85" x2="220" y2="85" stroke="#34d399" strokeWidth="2" />
            <rect x="220" y="75" width="20" height="20" rx="2" fill="#1e293b" stroke="#34d399" strokeWidth="1.5" />
            <text x="230" y="88" fill="#fff" fontSize="6.5" fontWeight="bold" textAnchor="middle">CB2</text>
            <text x="230" y="66" fill="#6ee7b7" fontSize="6" textAnchor="middle">51 IDMT</text>

            {/* 6.6 kV Switchgear Busbar */}
            <line x1="240" y1="85" x2="275" y2="85" stroke="#34d399" strokeWidth="2" />
            <line x1="275" y1="40" x2="275" y2="155" stroke="#34d399" strokeWidth="5" strokeLinecap="round" />
            <text x="282" y="36" fill="#34d399" fontSize="8" fontWeight="bold">6.6 kV Switchgear Bus</text>

            {/* Feeder 1: Motor */}
            <line x1="275" y1="55" x2="330" y2="55" stroke="#34d399" strokeWidth="2" />
            <rect x="330" y="45" width="20" height="20" rx="2" fill="#1e293b" stroke="#34d399" strokeWidth="1.5" />
            <text x="340" y="58" fill="#fff" fontSize="6.5" fontWeight="bold" textAnchor="middle">CB3</text>
            <line x1="350" y1="55" x2="410" y2="55" stroke="#34d399" strokeWidth="2" />
            <circle cx="430" cy="55" r="14" fill="#0f172a" stroke="#06b6d4" strokeWidth="2" />
            <text x="430" y="59" fill="#06b6d4" fontSize="7.5" fontWeight="bold" textAnchor="middle">M1</text>
            <text x="495" y="58" fill="#a5f3fc" fontSize="6.5">2.5 MW (50/51/49)</text>

            {/* Feeder 2: Auxiliary XFR */}
            <line x1="275" y1="100" x2="330" y2="100" stroke="#34d399" strokeWidth="2" />
            <rect x="330" y="90" width="20" height="20" rx="2" fill="#1e293b" stroke="#34d399" strokeWidth="1.5" />
            <text x="340" y="103" fill="#fff" fontSize="6.5" fontWeight="bold" textAnchor="middle">CB4</text>
            <line x1="350" y1="100" x2="410" y2="100" stroke="#34d399" strokeWidth="2" />
            <g transform="translate(425, 100)">
              <circle cx="-5" cy="0" r="8" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
              <circle cx="5" cy="0" r="8" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
            </g>
            <text x="495" y="103" fill="#fde68a" fontSize="6.5">1.5 MVA (415V Aux)</text>

            {/* Feeder 3: Capacitor Bank */}
            <line x1="275" y1="145" x2="330" y2="145" stroke="#34d399" strokeWidth="2" />
            <rect x="330" y="135" width="20" height="20" rx="2" fill="#1e293b" stroke="#34d399" strokeWidth="1.5" />
            <text x="340" y="148" fill="#fff" fontSize="6.5" fontWeight="bold" textAnchor="middle">CB5</text>
            <line x1="350" y1="145" x2="410" y2="145" stroke="#34d399" strokeWidth="2" />
            <g transform="translate(425, 145)">
              <line x1="-5" y1="-7" x2="-5" y2="7" stroke="#38bdf8" strokeWidth="2" />
              <line x1="5" y1="-7" x2="5" y2="7" stroke="#38bdf8" strokeWidth="2" />
            </g>
            <text x="495" y="148" fill="#7dd3fc" fontSize="6.5">1.2 MVAr (Cap Bank)</text>

            {/* Summary Box */}
            <rect x="40" y="172" width="500" height="20" rx="3" fill="#0f172a" stroke="#334155" />
            <text x="290" y="185" fill="#cbd5e1" fontSize="7" textAnchor="middle">
              Coordinated hierarchy: Motor feeder clears in 20 ms; Incomer backups at 340 ms; Transformer protected by 87T unit scheme
            </text>
          </svg>
          {caption && <p className="text-xs font-mono text-slate-300 mt-2 max-w-md text-center">{caption}</p>}
        </div>
      );

    default:
      return null;
  }
}
