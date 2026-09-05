import React from 'react';

export function renderChapter16Schematic(svgType?: string, caption?: string): React.ReactNode | null {
  switch (svgType) {
    case 'sch-ch16-per-unit-system':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 560 210" className="w-full max-w-xl h-52">
            {/* Title */}
            <text x="280" y="16" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">
              Multi-Voltage Power Network Per-Unit (p.u.) Base Normalization
            </text>

            {/* Common System Base Banner */}
            <rect x="180" y="24" width="200" height="18" rx="3" fill="#0f172a" stroke="#0284c7" strokeWidth="1" />
            <text x="280" y="36" fill="#38bdf8" fontSize="8.5" fontWeight="bold" textAnchor="middle">
              System Base: S_base = 100 MVA (Common)
            </text>

            {/* Zone 1: 11 kV */}
            <rect x="15" y="48" width="105" height="125" rx="4" fill="#1e1b4b" fillOpacity="0.4" stroke="#6366f1" strokeWidth="1" strokeDasharray="3,3" />
            <text x="67" y="62" fill="#a5b4fc" fontSize="8" fontWeight="bold" textAnchor="middle">Zone 1: V_b1 = 11 kV</text>
            {/* Generator G1 */}
            <circle cx="67" cy="98" r="18" fill="#1e293b" stroke="#818cf8" strokeWidth="2" />
            <text x="67" y="95" fill="#e0e7ff" fontSize="9" fontWeight="bold" textAnchor="middle">G1</text>
            <text x="67" y="107" fill="#818cf8" fontSize="7" textAnchor="middle">11 kV</text>
            <text x="67" y="132" fill="#cbd5e1" fontSize="7" textAnchor="middle">50 MVA, X"=0.15</text>
            <text x="67" y="145" fill="#34d399" fontSize="7.5" fontWeight="bold" textAnchor="middle">X_G = j0.30 pu</text>
            <line x1="85" y1="98" x2="120" y2="98" stroke="#818cf8" strokeWidth="2" />

            {/* Transformer T1 */}
            <g transform="translate(120, 98)">
              <circle cx="10" cy="0" r="10" fill="none" stroke="#818cf8" strokeWidth="2" />
              <circle cx="20" cy="0" r="10" fill="none" stroke="#38bdf8" strokeWidth="2" />
            </g>
            <text x="135" y="78" fill="#f59e0b" fontSize="7.5" fontWeight="bold" textAnchor="middle">T1: 11/132 kV</text>
            <text x="135" y="125" fill="#cbd5e1" fontSize="6.5" textAnchor="middle">60 MVA, X=0.10</text>
            <text x="135" y="137" fill="#34d399" fontSize="7.5" fontWeight="bold" textAnchor="middle">X_T1 = j0.167 pu</text>

            {/* Zone 2: 132 kV */}
            <rect x="150" y="48" width="260" height="125" rx="4" fill="#0c4a6e" fillOpacity="0.3" stroke="#0284c7" strokeWidth="1" strokeDasharray="3,3" />
            <text x="280" y="62" fill="#7dd3fc" fontSize="8" fontWeight="bold" textAnchor="middle">Zone 2: V_b2 = 132 kV, Z_base = 174.24 Ω</text>
            {/* Bus 1 */}
            <line x1="150" y1="80" x2="150" y2="116" stroke="#38bdf8" strokeWidth="4" />
            <text x="145" y="75" fill="#38bdf8" fontSize="7" fontWeight="bold">Bus 1</text>
            {/* Transmission Line */}
            <line x1="150" y1="98" x2="190" y2="98" stroke="#38bdf8" strokeWidth="2" />
            <rect x="190" y="90" width="80" height="16" rx="2" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="230" y="101" fill="#bae6fd" fontSize="7.5" textAnchor="middle">Z_line = 20 Ω</text>
            <text x="230" y="122" fill="#34d399" fontSize="7.5" fontWeight="bold" textAnchor="middle">X_line = j0.115 pu</text>
            <line x1="270" y1="98" x2="410" y2="98" stroke="#38bdf8" strokeWidth="2" />
            {/* Bus 2 */}
            <line x1="410" y1="80" x2="410" y2="116" stroke="#38bdf8" strokeWidth="4" />
            <text x="415" y="75" fill="#38bdf8" fontSize="7" fontWeight="bold">Bus 2</text>

            {/* Transformer T2 */}
            <g transform="translate(410, 98)">
              <circle cx="10" cy="0" r="10" fill="none" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="20" cy="0" r="10" fill="none" stroke="#f59e0b" strokeWidth="2" />
            </g>
            <text x="425" y="78" fill="#f59e0b" fontSize="7.5" fontWeight="bold" textAnchor="middle">T2: 132/33 kV</text>
            <text x="425" y="125" fill="#cbd5e1" fontSize="6.5" textAnchor="middle">40 MVA, X=0.10</text>
            <text x="425" y="137" fill="#34d399" fontSize="7.5" fontWeight="bold" textAnchor="middle">X_T2 = j0.250 pu</text>

            {/* Zone 3: 33 kV */}
            <rect x="440" y="48" width="105" height="125" rx="4" fill="#78350f" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,3" />
            <text x="492" y="62" fill="#fde68a" fontSize="8" fontWeight="bold" textAnchor="middle">Zone 3: V_b3 = 33 kV</text>
            {/* Bus 3 & Motor M */}
            <line x1="440" y1="98" x2="470" y2="98" stroke="#f59e0b" strokeWidth="2" />
            <circle cx="492" cy="98" r="18" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
            <text x="492" y="95" fill="#fef08a" fontSize="9" fontWeight="bold" textAnchor="middle">M1</text>
            <text x="492" y="107" fill="#f59e0b" fontSize="7" textAnchor="middle">33 kV</text>
            <text x="492" y="132" fill="#cbd5e1" fontSize="7" textAnchor="middle">25 MVA, X"=0.20</text>
            <text x="492" y="145" fill="#34d399" fontSize="7.5" fontWeight="bold" textAnchor="middle">X_M = j0.80 pu</text>

            {/* Per-Unit Conversion Formula Callout */}
            <rect x="50" y="180" width="460" height="22" rx="3" fill="#020617" stroke="#334155" />
            <text x="280" y="194" fill="#a7f3d0" fontSize="8" fontFamily="monospace" textAnchor="middle">
              Z_pu(new) = Z_pu(old) × (V_base,old / V_base,new)² × (S_base,new / S_base,old)
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-semibold">
            {caption || "Per-Unit System Multi-Voltage Network: Normalization across transformer voltage zones to a unified 100 MVA system base."}
          </p>
        </div>
      );

    case 'sch-ch16-single-line-pu-network':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 560 215" className="w-full max-w-xl h-52">
            {/* Title */}
            <text x="280" y="15" fill="#38bdf8" fontSize="10.5" fontWeight="bold" textAnchor="middle">
              Single-Line Diagram (SLD) to Per-Unit Reactance Network Modeling
            </text>

            {/* SLD Section Header */}
            <text x="20" y="32" fill="#94a3b8" fontSize="8" fontWeight="bold">1. PHYSICAL SINGLE-LINE DIAGRAM (SLD)</text>
            
            {/* Generator 1 */}
            <circle cx="45" cy="50" r="13" fill="#0f172a" stroke="#818cf8" strokeWidth="1.5" />
            <text x="45" y="53" fill="#e0e7ff" fontSize="8" fontWeight="bold" textAnchor="middle">G1</text>
            {/* Breaker */}
            <line x1="58" y1="50" x2="72" y2="50" stroke="#818cf8" strokeWidth="1.5" />
            <rect x="72" y="44" width="12" height="12" fill="#1e293b" stroke="#ef4444" strokeWidth="1" />
            <line x1="84" y1="50" x2="105" y2="50" stroke="#818cf8" strokeWidth="1.5" />
            
            {/* Bus 1 */}
            <line x1="105" y1="36" x2="105" y2="64" stroke="#818cf8" strokeWidth="3.5" />
            <text x="105" y="32" fill="#818cf8" fontSize="6.5" textAnchor="middle">Bus 1</text>

            {/* Transformer T1 (Y-Delta) */}
            <line x1="105" y1="50" x2="125" y2="50" stroke="#818cf8" strokeWidth="1.5" />
            <circle cx="132" cy="50" r="8" fill="none" stroke="#818cf8" strokeWidth="1.5" />
            <circle cx="142" cy="50" r="8" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="150" y1="50" x2="175" y2="50" stroke="#38bdf8" strokeWidth="1.5" />

            {/* Bus 2 */}
            <line x1="175" y1="36" x2="175" y2="64" stroke="#38bdf8" strokeWidth="3.5" />
            <text x="175" y="32" fill="#38bdf8" fontSize="6.5" textAnchor="middle">Bus 2</text>

            {/* Transmission Line with Shunts */}
            <line x1="175" y1="50" x2="360" y2="50" stroke="#38bdf8" strokeWidth="2" />
            <text x="268" y="44" fill="#7dd3fc" fontSize="7" textAnchor="middle">High-Voltage Transmission Line</text>

            {/* Bus 3 */}
            <line x1="360" y1="36" x2="360" y2="64" stroke="#38bdf8" strokeWidth="3.5" />
            <text x="360" y="32" fill="#38bdf8" fontSize="6.5" textAnchor="middle">Bus 3</text>

            {/* Transformer T2 */}
            <line x1="360" y1="50" x2="385" y2="50" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx="392" cy="50" r="8" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx="402" cy="50" r="8" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
            <line x1="410" y1="50" x2="435" y2="50" stroke="#f59e0b" strokeWidth="1.5" />

            {/* Bus 4 */}
            <line x1="435" y1="36" x2="435" y2="64" stroke="#f59e0b" strokeWidth="3.5" />
            <text x="435" y="32" fill="#f59e0b" fontSize="6.5" textAnchor="middle">Bus 4</text>

            {/* Motor M1 */}
            <line x1="435" y1="50" x2="480" y2="50" stroke="#f59e0b" strokeWidth="1.5" />
            <circle cx="495" cy="50" r="13" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="495" y="53" fill="#fef08a" fontSize="8" fontWeight="bold" textAnchor="middle">M1</text>

            {/* Divider */}
            <line x1="15" y1="78" x2="545" y2="78" stroke="#334155" strokeWidth="1" strokeDasharray="4,4" />

            {/* Per-Unit Reactance Diagram Header */}
            <text x="20" y="94" fill="#34d399" fontSize="8" fontWeight="bold">2. PER-UNIT (p.u.) REACTANCE DIAGRAM</text>

            {/* Eg generator source */}
            <circle cx="45" cy="140" r="11" fill="#0f172a" stroke="#818cf8" strokeWidth="1.5" />
            <text x="45" y="143" fill="#e0e7ff" fontSize="7" fontWeight="bold" textAnchor="middle">Eg</text>
            <line x1="45" y1="129" x2="45" y2="115" stroke="#818cf8" strokeWidth="1.5" />
            <line x1="45" y1="115" x2="60" y2="115" stroke="#818cf8" strokeWidth="1.5" />

            {/* X"d generator */}
            <rect x="60" y="109" width="30" height="12" rx="2" fill="#1e293b" stroke="#818cf8" strokeWidth="1" />
            <text x="75" y="118" fill="#c7d2fe" fontSize="6.5" textAnchor="middle">jX"d</text>
            <line x1="90" y1="115" x2="105" y2="115" stroke="#818cf8" strokeWidth="1.5" />

            {/* Bus 1 in PU */}
            <line x1="105" y1="102" x2="105" y2="128" stroke="#818cf8" strokeWidth="3" />
            <line x1="105" y1="115" x2="125" y2="115" stroke="#818cf8" strokeWidth="1.5" />

            {/* X_T1 */}
            <rect x="125" y="109" width="35" height="12" rx="2" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
            <text x="142" y="118" fill="#bae6fd" fontSize="6.5" textAnchor="middle">jX_T1</text>
            <line x1="160" y1="115" x2="175" y2="115" stroke="#38bdf8" strokeWidth="1.5" />

            {/* Bus 2 in PU */}
            <line x1="175" y1="102" x2="175" y2="128" stroke="#38bdf8" strokeWidth="3" />
            <line x1="175" y1="115" x2="230" y2="115" stroke="#38bdf8" strokeWidth="1.5" />

            {/* X_line */}
            <rect x="230" y="109" width="70" height="12" rx="2" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
            <text x="265" y="118" fill="#bae6fd" fontSize="6.5" textAnchor="middle">jX_line (Series)</text>
            <line x1="300" y1="115" x2="360" y2="115" stroke="#38bdf8" strokeWidth="1.5" />

            {/* Bus 3 in PU */}
            <line x1="360" y1="102" x2="360" y2="128" stroke="#38bdf8" strokeWidth="3" />
            <line x1="360" y1="115" x2="380" y2="115" stroke="#38bdf8" strokeWidth="1.5" />

            {/* X_T2 */}
            <rect x="380" y="109" width="35" height="12" rx="2" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" />
            <text x="397" y="118" fill="#fde68a" fontSize="6.5" textAnchor="middle">jX_T2</text>
            <line x1="415" y1="115" x2="435" y2="115" stroke="#f59e0b" strokeWidth="1.5" />

            {/* Bus 4 in PU */}
            <line x1="435" y1="102" x2="435" y2="128" stroke="#f59e0b" strokeWidth="3" />
            <line x1="435" y1="115" x2="455" y2="115" stroke="#f59e0b" strokeWidth="1.5" />

            {/* X"m motor */}
            <rect x="455" y="109" width="30" height="12" rx="2" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" />
            <text x="470" y="118" fill="#fde68a" fontSize="6.5" textAnchor="middle">jX"m</text>
            <line x1="485" y1="115" x2="495" y2="115" stroke="#f59e0b" strokeWidth="1.5" />
            <line x1="495" y1="115" x2="495" y2="129" stroke="#f59e0b" strokeWidth="1.5" />
            {/* Em motor source */}
            <circle cx="495" cy="140" r="11" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="495" y="143" fill="#fef08a" fontSize="7" fontWeight="bold" textAnchor="middle">Em</text>

            {/* Reference Ground Bus */}
            <line x1="45" y1="151" x2="45" y2="180" stroke="#64748b" strokeWidth="1.5" />
            <line x1="495" y1="151" x2="495" y2="180" stroke="#64748b" strokeWidth="1.5" />
            <line x1="30" y1="180" x2="520" y2="180" stroke="#475569" strokeWidth="3" />
            <text x="275" y="196" fill="#94a3b8" fontSize="8" fontWeight="bold" textAnchor="middle">
              Reference Neutral / Ground Bus (0.0 p.u.)
            </text>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-semibold">
            {caption || "Single-Line Diagram Transformation: Complete translation from physical multi-zone SLD to unified per-unit reactance ladder."}
          </p>
        </div>
      );

    case 'sch-ch16-transmission-parameters':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 560 215" className="w-full max-w-xl h-52">
            {/* Title */}
            <text x="280" y="16" fill="#38bdf8" fontSize="10.5" fontWeight="bold" textAnchor="middle">
              EHV Transmission Line Conductor Bundling &amp; Geometric Mean Distance (GMD / GMR)
            </text>

            {/* Phase Conductor Quad Bundle Geometry (Left) */}
            <g transform="translate(40, 35)">
              <rect x="0" y="0" width="170" height="155" rx="4" fill="#0f172a" stroke="#6366f1" strokeWidth="1.5" />
              <text x="85" y="18" fill="#a5b4fc" fontSize="8.5" fontWeight="bold" textAnchor="middle">Quad Bundle (4-Conductor)</text>
              
              {/* Bundle Square */}
              <rect x="40" y="38" width="70" height="70" fill="none" stroke="#475569" strokeWidth="1" strokeDasharray="3,3" />
              {/* Conductors */}
              <circle cx="40" cy="38" r="8" fill="#818cf8" stroke="#ffffff" strokeWidth="1" />
              <circle cx="110" cy="38" r="8" fill="#818cf8" stroke="#ffffff" strokeWidth="1" />
              <circle cx="40" cy="108" r="8" fill="#818cf8" stroke="#ffffff" strokeWidth="1" />
              <circle cx="110" cy="108" r="8" fill="#818cf8" stroke="#ffffff" strokeWidth="1" />
              
              {/* Bundle spacing d */}
              <line x1="40" y1="30" x2="110" y2="30" stroke="#f59e0b" strokeWidth="1" />
              <text x="75" y="27" fill="#f59e0b" fontSize="7" textAnchor="middle">d = 45 cm</text>
              <line x1="118" y1="38" x2="118" y2="108" stroke="#f59e0b" strokeWidth="1" />
              <text x="135" y="76" fill="#f59e0b" fontSize="7">d = 45 cm</text>

              {/* GMR Formula */}
              <text x="85" y="132" fill="#34d399" fontSize="7" fontWeight="bold" textAnchor="middle">
                D_sL = 1.091 × (r' × d³)¹/⁴
              </text>
              <text x="85" y="145" fill="#94a3b8" fontSize="6.5" textAnchor="middle">
                (where r' = 0.7788 × r)
              </text>
            </g>

            {/* 3-Phase Tower Geometric Configuration (Right) */}
            <g transform="translate(240, 35)">
              <rect x="0" y="0" width="280" height="155" rx="4" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
              <text x="140" y="18" fill="#7dd3fc" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                3-Phase Horizontal Tower Spacing
              </text>

              {/* Phase A */}
              <circle cx="40" cy="70" r="10" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
              <text x="40" y="73" fill="#ffffff" fontSize="7.5" fontWeight="bold" textAnchor="middle">A</text>

              {/* D_ab */}
              <line x1="50" y1="70" x2="130" y2="70" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="90" y="64" fill="#f59e0b" fontSize="7.5" textAnchor="middle">D_ab = 8 m</text>

              {/* Phase B */}
              <circle cx="140" cy="70" r="10" fill="#eab308" stroke="#ffffff" strokeWidth="1.5" />
              <text x="140" y="73" fill="#ffffff" fontSize="7.5" fontWeight="bold" textAnchor="middle">B</text>

              {/* D_bc */}
              <line x1="150" y1="70" x2="230" y2="70" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="190" y="64" fill="#f59e0b" fontSize="7.5" textAnchor="middle">D_bc = 8 m</text>

              {/* Phase C */}
              <circle cx="240" cy="70" r="10" fill="#3b82f6" stroke="#ffffff" strokeWidth="1.5" />
              <text x="240" y="73" fill="#ffffff" fontSize="7.5" fontWeight="bold" textAnchor="middle">C</text>

              {/* D_ca (curved line underneath) */}
              <path d="M 40 82 Q 140 115 240 82" fill="none" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3,3" />
              <text x="140" y="112" fill="#d8b4fe" fontSize="7.5" textAnchor="middle">D_ca = 16 m</text>

              {/* Equations Box */}
              <rect x="15" y="122" width="250" height="26" rx="2" fill="#020617" stroke="#334155" />
              <text x="140" y="134" fill="#38bdf8" fontSize="7.5" textAnchor="middle" fontFamily="monospace">
                GMD = (8 × 8 × 16)¹/³ = 10.08 m
              </text>
              <text x="140" y="144" fill="#34d399" fontSize="7" textAnchor="middle" fontFamily="monospace">
                L = 2×10⁻⁷ × ln(GMD / D_s) H/m
              </text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-semibold">
            {caption || "Transmission Line Parameters: Bundled conductor GMR expansion and transposed 3-phase tower GMD calculations."}
          </p>
        </div>
      );

    case 'sch-ch16-transmission-models':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 560 215" className="w-full max-w-xl h-52">
            {/* Title */}
            <text x="280" y="15" fill="#38bdf8" fontSize="10.5" fontWeight="bold" textAnchor="middle">
              Transmission Line Models Comparison: Short, Medium Nominal-Π &amp; Long Lines
            </text>

            {/* 1. Short Line Model */}
            <g transform="translate(15, 30)">
              <rect x="0" y="0" width="165" height="160" rx="4" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
              <text x="82" y="16" fill="#6ee7b7" fontSize="8" fontWeight="bold" textAnchor="middle">1. SHORT LINE (&lt; 80 km)</text>
              
              {/* Series Z */}
              <line x1="20" y1="50" x2="45" y2="50" stroke="#34d399" strokeWidth="2" />
              <rect x="45" y="42" width="75" height="16" rx="2" fill="#064e3b" stroke="#34d399" strokeWidth="1.5" />
              <text x="82" y="53" fill="#e6fffa" fontSize="7" fontWeight="bold" textAnchor="middle">Z = R + jωL</text>
              <line x1="120" y1="50" x2="145" y2="50" stroke="#34d399" strokeWidth="2" />
              
              {/* Ground Wire */}
              <line x1="20" y1="90" x2="145" y2="90" stroke="#64748b" strokeWidth="1.5" />
              
              <text x="25" y="72" fill="#38bdf8" fontSize="7">Vs, Is</text>
              <text x="120" y="72" fill="#f59e0b" fontSize="7">Vr, Ir</text>
              <text x="82" y="112" fill="#94a3b8" fontSize="6.5" textAnchor="middle">Shunt Admittance Y ≈ 0</text>
              
              {/* ABCD Box */}
              <rect x="15" y="122" width="135" height="28" rx="2" fill="#020617" stroke="#334155" />
              <text x="82" y="134" fill="#34d399" fontSize="7" fontFamily="monospace" textAnchor="middle">A = 1,  B = Z</text>
              <text x="82" y="145" fill="#34d399" fontSize="7" fontFamily="monospace" textAnchor="middle">C = 0,  D = 1</text>
            </g>

            {/* 2. Medium Line Nominal-Pi Model */}
            <g transform="translate(195, 30)">
              <rect x="0" y="0" width="175" height="160" rx="4" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
              <text x="87" y="16" fill="#7dd3fc" fontSize="8" fontWeight="bold" textAnchor="middle">2. NOMINAL-Π (80–250 km)</text>
              
              {/* Series Z */}
              <line x1="15" y1="50" x2="45" y2="50" stroke="#38bdf8" strokeWidth="2" />
              <rect x="45" y="42" width="85" height="16" rx="2" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="87" y="53" fill="#e0f2fe" fontSize="7" fontWeight="bold" textAnchor="middle">Z = R + jX</text>
              <line x1="130" y1="50" x2="160" y2="50" stroke="#38bdf8" strokeWidth="2" />

              {/* Shunt Y/2 at Sending End */}
              <line x1="30" y1="50" x2="30" y2="65" stroke="#38bdf8" strokeWidth="1.5" />
              <rect x="22" y="65" width="16" height="16" rx="2" fill="#1e293b" stroke="#38bdf8" />
              <text x="30" y="76" fill="#bae6fd" fontSize="5.5" textAnchor="middle">Y/2</text>
              <line x1="30" y1="81" x2="30" y2="95" stroke="#38bdf8" strokeWidth="1.5" />

              {/* Shunt Y/2 at Receiving End */}
              <line x1="145" y1="50" x2="145" y2="65" stroke="#38bdf8" strokeWidth="1.5" />
              <rect x="137" y="65" width="16" height="16" rx="2" fill="#1e293b" stroke="#38bdf8" />
              <text x="145" y="76" fill="#bae6fd" fontSize="5.5" textAnchor="middle">Y/2</text>
              <line x1="145" y1="81" x2="145" y2="95" stroke="#38bdf8" strokeWidth="1.5" />

              {/* Ground Wire */}
              <line x1="15" y1="95" x2="160" y2="95" stroke="#64748b" strokeWidth="1.5" />

              {/* ABCD Box */}
              <rect x="15" y="122" width="145" height="28" rx="2" fill="#020617" stroke="#334155" />
              <text x="87" y="134" fill="#38bdf8" fontSize="6.5" fontFamily="monospace" textAnchor="middle">A = D = 1 + ZY/2</text>
              <text x="87" y="145" fill="#38bdf8" fontSize="6.5" fontFamily="monospace" textAnchor="middle">B = Z,  C = Y(1 + ZY/4)</text>
            </g>

            {/* 3. Long Line Distributed Parameter Model */}
            <g transform="translate(385, 30)">
              <rect x="0" y="0" width="160" height="160" rx="4" fill="#0f172a" stroke="#a855f7" strokeWidth="1.5" />
              <text x="80" y="16" fill="#d8b4fe" fontSize="8" fontWeight="bold" textAnchor="middle">3. LONG LINE (&gt; 250 km)</text>
              
              {/* Distributed transmission line waves */}
              <path d="M 20 55 Q 50 35 80 55 T 140 55" fill="none" stroke="#c084fc" strokeWidth="2" />
              <text x="80" y="75" fill="#e9d5ff" fontSize="7" fontWeight="bold" textAnchor="middle">Distributed γ = α + jβ</text>
              <text x="80" y="88" fill="#a855f7" fontSize="6.5" textAnchor="middle">Z_c = √(z / y)</text>
              <line x1="20" y1="98" x2="140" y2="98" stroke="#64748b" strokeWidth="1.5" />

              {/* Hyperbolic ABCD Box */}
              <rect x="10" y="122" width="140" height="28" rx="2" fill="#020617" stroke="#334155" />
              <text x="80" y="134" fill="#d8b4fe" fontSize="6.5" fontFamily="monospace" textAnchor="middle">A = D = cosh(γl)</text>
              <text x="80" y="145" fill="#d8b4fe" fontSize="6.5" fontFamily="monospace" textAnchor="middle">B = Zc·sinh(γl), C = sinh(γl)/Zc</text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-semibold">
            {caption || "Transmission Line Models: Lumped parameters for Short/Medium lines vs. rigorous Distributed Hyperbolic formulation for Long lines."}
          </p>
        </div>
      );

    case 'sch-ch16-transmission-performance':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 560 215" className="w-full max-w-xl h-52">
            {/* Title */}
            <text x="280" y="16" fill="#38bdf8" fontSize="10.5" fontWeight="bold" textAnchor="middle">
              Ferranti Effect &amp; Reactive Shunt Compensation on Long Transmission Lines
            </text>

            {/* Left Diagram: Physical Line with Shunt Reactor */}
            <g transform="translate(20, 35)">
              <rect x="0" y="0" width="260" height="155" rx="4" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
              <text x="130" y="18" fill="#7dd3fc" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                Light Load / Open-Circuit Condition
              </text>

              {/* Sending End */}
              <line x1="30" y1="40" x2="30" y2="70" stroke="#38bdf8" strokeWidth="3" />
              <text x="30" y="32" fill="#38bdf8" fontSize="7" fontWeight="bold" textAnchor="middle">Vs (1.0 pu)</text>

              {/* Line Reactance */}
              <line x1="30" y1="55" x2="75" y2="55" stroke="#38bdf8" strokeWidth="2" />
              <rect x="75" y="47" width="55" height="16" rx="2" fill="#0c4a6e" stroke="#38bdf8" />
              <text x="102" y="58" fill="#e0f2fe" fontSize="7" textAnchor="middle">jX_line</text>
              <line x1="130" y1="55" x2="220" y2="55" stroke="#38bdf8" strokeWidth="2" />

              {/* Charging Current Arrows */}
              <path d="M 170 55 L 170 85" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="185" y="73" fill="#d8b4fe" fontSize="7">I_c (Charging)</text>

              {/* Receiving End Bus */}
              <line x1="220" y1="40" x2="220" y2="70" stroke="#ef4444" strokeWidth="3" />
              <text x="220" y="32" fill="#f87171" fontSize="7" fontWeight="bold" textAnchor="middle">Vr = 1.15 pu!</text>

              {/* Shunt Reactor */}
              <line x1="220" y1="55" x2="220" y2="90" stroke="#f59e0b" strokeWidth="1.5" />
              <rect x="205" y="90" width="30" height="16" rx="2" fill="#78350f" stroke="#f59e0b" />
              <text x="220" y="101" fill="#fde68a" fontSize="6.5" textAnchor="middle">Reactor</text>
              <line x1="220" y1="106" x2="220" y2="120" stroke="#f59e0b" strokeWidth="1.5" />

              {/* Ground */}
              <line x1="20" y1="120" x2="240" y2="120" stroke="#64748b" strokeWidth="1.5" />

              <text x="130" y="142" fill="#fbbf24" fontSize="7" fontWeight="bold" textAnchor="middle">
                Ferranti: Vr &gt; Vs under no-load / capacitive charging
              </text>
            </g>

            {/* Right Diagram: Phasor Relationship */}
            <g transform="translate(300, 35)">
              <rect x="0" y="0" width="240" height="155" rx="4" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="120" y="18" fill="#fde68a" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                Phasor Proof: V_r = V_s - j·I_c·X_L
              </text>

              {/* Phasor axes */}
              <line x1="30" y1="100" x2="210" y2="100" stroke="#334155" strokeWidth="1" />
              
              {/* Vs Phasor (Cyan) */}
              <line x1="30" y1="100" x2="140" y2="100" stroke="#38bdf8" strokeWidth="3" />
              <text x="85" y="92" fill="#38bdf8" fontSize="8" fontWeight="bold">V_s</text>

              {/* Boost segment j*Ic*X (Red) extending to Vr */}
              <line x1="140" y1="100" x2="200" y2="100" stroke="#ef4444" strokeWidth="3" />
              <text x="170" y="92" fill="#f87171" fontSize="7.5" fontWeight="bold">+ ΔV_c</text>

              {/* Leading Ic (Purple) */}
              <line x1="30" y1="100" x2="30" y2="40" stroke="#a855f7" strokeWidth="2.5" />
              <text x="35" y="55" fill="#d8b4fe" fontSize="8" fontWeight="bold">I_c (Leads by 90°)</text>

              {/* Vr label */}
              <circle cx="200" cy="100" r="4" fill="#f87171" />
              <text x="200" y="115" fill="#f87171" fontSize="8" fontWeight="bold" textAnchor="middle">V_r</text>

              {/* Formula */}
              <rect x="15" y="125" width="210" height="22" rx="2" fill="#020617" stroke="#334155" />
              <text x="120" y="139" fill="#34d399" fontSize="7" fontFamily="monospace" textAnchor="middle">
                V_r ≈ V_s / cos(βl) = V_s × [1 + (βl)² / 2]
              </text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-semibold">
            {caption || "Transmission Line Performance: Ferranti voltage elevation at light load and mitigation via shunt reactor compensation."}
          </p>
        </div>
      );

    case 'sch-ch16-ybus-matrix':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 560 215" className="w-full max-w-xl h-52">
            {/* Title */}
            <text x="280" y="16" fill="#38bdf8" fontSize="10.5" fontWeight="bold" textAnchor="middle">
              3-Bus Network Topology &amp; Bus Admittance Matrix [Y_bus] Formulation
            </text>

            {/* Left: 3-Bus Physical Triangle Topology */}
            <g transform="translate(25, 35)">
              <rect x="0" y="0" width="220" height="155" rx="4" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
              <text x="110" y="16" fill="#7dd3fc" fontSize="8" fontWeight="bold" textAnchor="middle">3-Bus Interconnected Mesh</text>
              
              {/* Bus 1 (Top) */}
              <line x1="90" y1="40" x2="130" y2="40" stroke="#38bdf8" strokeWidth="4" />
              <text x="110" y="34" fill="#38bdf8" fontSize="7.5" fontWeight="bold" textAnchor="middle">Bus 1</text>

              {/* Bus 2 (Bottom Left) */}
              <line x1="30" y1="120" x2="70" y2="120" stroke="#f59e0b" strokeWidth="4" />
              <text x="50" y="132" fill="#f59e0b" fontSize="7.5" fontWeight="bold" textAnchor="middle">Bus 2</text>

              {/* Bus 3 (Bottom Right) */}
              <line x1="150" y1="120" x2="190" y2="120" stroke="#10b981" strokeWidth="4" />
              <text x="170" y="132" fill="#34d399" fontSize="7.5" fontWeight="bold" textAnchor="middle">Bus 3</text>

              {/* Line 1-2 */}
              <line x1="100" y1="42" x2="45" y2="118" stroke="#38bdf8" strokeWidth="2" />
              <rect x="58" y="70" width="30" height="12" rx="2" fill="#1e293b" stroke="#38bdf8" />
              <text x="73" y="79" fill="#bae6fd" fontSize="6.5" textAnchor="middle">y₁₂</text>

              {/* Line 1-3 */}
              <line x1="120" y1="42" x2="175" y2="118" stroke="#38bdf8" strokeWidth="2" />
              <rect x="135" y="70" width="30" height="12" rx="2" fill="#1e293b" stroke="#38bdf8" />
              <text x="150" y="79" fill="#bae6fd" fontSize="6.5" textAnchor="middle">y₁₃</text>

              {/* Line 2-3 */}
              <line x1="70" y1="120" x2="150" y2="120" stroke="#38bdf8" strokeWidth="2" />
              <rect x="95" y="114" width="30" height="12" rx="2" fill="#1e293b" stroke="#38bdf8" />
              <text x="110" y="123" fill="#bae6fd" fontSize="6.5" textAnchor="middle">y₂₃</text>

              {/* Shunt admittances y10, y20, y30 */}
              <text x="110" y="55" fill="#94a3b8" fontSize="6" textAnchor="middle">y₁₀ (Shunt)</text>
              <text x="35" y="105" fill="#94a3b8" fontSize="6">y₂₀</text>
              <text x="180" y="105" fill="#94a3b8" fontSize="6">y₃₀</text>
            </g>

            {/* Right: [Y_bus] 3x3 Matrix Structure */}
            <g transform="translate(265, 35)">
              <rect x="0" y="0" width="270" height="155" rx="4" fill="#0f172a" stroke="#6366f1" strokeWidth="1.5" />
              <text x="135" y="16" fill="#a5b4fc" fontSize="8" fontWeight="bold" textAnchor="middle">
                [I_bus] = [Y_bus] × [V_bus] Direct Inspection
              </text>

              {/* Matrix Bracket Left */}
              <path d="M 25 30 L 15 30 L 15 115 L 25 115" fill="none" stroke="#818cf8" strokeWidth="2" />
              
              {/* Row 1 */}
              <text x="65" y="48" fill="#34d399" fontSize="7.5" fontWeight="bold" textAnchor="middle">y₁₀+y₁₂+y₁₃</text>
              <text x="135" y="48" fill="#f87171" fontSize="7.5" textAnchor="middle">-y₁₂</text>
              <text x="205" y="48" fill="#f87171" fontSize="7.5" textAnchor="middle">-y₁₃</text>

              {/* Row 2 */}
              <text x="65" y="75" fill="#f87171" fontSize="7.5" textAnchor="middle">-y₁₂</text>
              <text x="135" y="75" fill="#34d399" fontSize="7.5" fontWeight="bold" textAnchor="middle">y₂₀+y₁₂+y₂₃</text>
              <text x="205" y="75" fill="#f87171" fontSize="7.5" textAnchor="middle">-y₂₃</text>

              {/* Row 3 */}
              <text x="65" y="102" fill="#f87171" fontSize="7.5" textAnchor="middle">-y₁₃</text>
              <text x="135" y="102" fill="#f87171" fontSize="7.5" textAnchor="middle">-y₂₃</text>
              <text x="205" y="102" fill="#34d399" fontSize="7.5" fontWeight="bold" textAnchor="middle">y₃₀+y₁₃+y₂₃</text>

              {/* Matrix Bracket Right */}
              <path d="M 245 30 L 255 30 L 255 115 L 245 115" fill="none" stroke="#818cf8" strokeWidth="2" />

              {/* Legend Box */}
              <rect x="15" y="125" width="240" height="22" rx="2" fill="#020617" stroke="#334155" />
              <text x="135" y="139" fill="#cbd5e1" fontSize="6.5" textAnchor="middle">
                <tspan fill="#34d399" fontWeight="bold">Diagonal Y_ii = Σ y_ik</tspan> (Self) | <tspan fill="#f87171" fontWeight="bold">Off-Diagonal Y_ij = -y_ij</tspan> (Mutual)
              </text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-semibold">
            {caption || "Bus Admittance Matrix: Algorithmic nodal formulation based on Kirchhoff's Current Law and network branch admittances."}
          </p>
        </div>
      );

    case 'sch-ch16-power-flow-jacobian':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 560 215" className="w-full max-w-xl h-52">
            {/* Title */}
            <text x="280" y="16" fill="#38bdf8" fontSize="10.5" fontWeight="bold" textAnchor="middle">
              Power Flow Formulation: Bus Classification &amp; Newton-Raphson Jacobian
            </text>

            {/* Left: Bus Classification Grid */}
            <g transform="translate(15, 35)">
              <rect x="0" y="0" width="235" height="155" rx="4" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
              <text x="117" y="16" fill="#7dd3fc" fontSize="8" fontWeight="bold" textAnchor="middle">Power System Bus Classifications</text>

              {/* Slack Bus */}
              <rect x="10" y="28" width="215" height="34" rx="2" fill="#1e1b4b" stroke="#6366f1" />
              <text x="18" y="42" fill="#a5b4fc" fontSize="7.5" fontWeight="bold">1. Slack / Swing Bus (Ref):</text>
              <text x="18" y="54" fill="#cbd5e1" fontSize="6.5">Specified: |V| = 1.0, δ = 0° | Calculated: P, Q</text>

              {/* PV Generator Bus */}
              <rect x="10" y="68" width="215" height="34" rx="2" fill="#0c4a6e" stroke="#0284c7" />
              <text x="18" y="82" fill="#7dd3fc" fontSize="7.5" fontWeight="bold">2. PV (Generator / Voltage Control):</text>
              <text x="18" y="94" fill="#cbd5e1" fontSize="6.5">Specified: P_gen, |V| | Calculated: δ, Q_gen</text>

              {/* PQ Load Bus */}
              <rect x="10" y="108" width="215" height="34" rx="2" fill="#064e3b" stroke="#059669" />
              <text x="18" y="122" fill="#6ee7b7" fontSize="7.5" fontWeight="bold">3. PQ (Load Bus):</text>
              <text x="18" y="134" fill="#cbd5e1" fontSize="6.5">Specified: P_load, Q_load | Calculated: |V|, δ</text>
            </g>

            {/* Right: Newton-Raphson Jacobian Matrix Structure */}
            <g transform="translate(265, 35)">
              <rect x="0" y="0" width="280" height="155" rx="4" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="140" y="16" fill="#fde68a" fontSize="8" fontWeight="bold" textAnchor="middle">
                Newton-Raphson Jacobian Submatrices
              </text>

              {/* Matrix Equation Layout */}
              {/* Vector Mismatch [ΔP; ΔQ] */}
              <rect x="15" y="35" width="40" height="35" rx="2" fill="#1e293b" stroke="#38bdf8" />
              <text x="35" y="56" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">ΔP</text>
              <rect x="15" y="75" width="40" height="35" rx="2" fill="#1e293b" stroke="#a855f7" />
              <text x="35" y="96" fill="#d8b4fe" fontSize="9" fontWeight="bold" textAnchor="middle">ΔQ</text>

              <text x="65" y="78" fill="#ffffff" fontSize="12" fontWeight="bold">=</text>

              {/* Jacobian [J11 J12; J21 J22] */}
              <g transform="translate(80, 35)">
                {/* J11: dP/ddelta */}
                <rect x="0" y="0" width="60" height="35" rx="2" fill="#0c4a6e" stroke="#0284c7" />
                <text x="30" y="18" fill="#bae6fd" fontSize="7.5" fontWeight="bold" textAnchor="middle">J11 = ∂P/∂δ</text>
                <text x="30" y="29" fill="#7dd3fc" fontSize="6" textAnchor="middle">(Strong P-δ)</text>

                {/* J12: dP/dV */}
                <rect x="65" y="0" width="60" height="35" rx="2" fill="#1e293b" stroke="#475569" />
                <text x="95" y="18" fill="#cbd5e1" fontSize="7" textAnchor="middle">J12 = ∂P/∂|V|</text>
                <text x="95" y="29" fill="#64748b" fontSize="6" textAnchor="middle">(Weak coupling)</text>

                {/* J21: dQ/ddelta */}
                <rect x="0" y="40" width="60" height="35" rx="2" fill="#1e293b" stroke="#475569" />
                <text x="30" y="58" fill="#cbd5e1" fontSize="7" textAnchor="middle">J21 = ∂Q/∂δ</text>
                <text x="30" y="69" fill="#64748b" fontSize="6" textAnchor="middle">(Weak coupling)</text>

                {/* J22: dQ/dV */}
                <rect x="65" y="40" width="60" height="35" rx="2" fill="#3b0764" stroke="#7e22ce" />
                <text x="95" y="58" fill="#f5d0fe" fontSize="7.5" fontWeight="bold" textAnchor="middle">J22 = ∂Q/∂|V|</text>
                <text x="95" y="69" fill="#e9d5ff" fontSize="6" textAnchor="middle">(Strong Q-V)</text>
              </g>

              {/* State Correction [Δδ; Δ|V|] */}
              <g transform="translate(215, 35)">
                <rect x="0" y="0" width="50" height="35" rx="2" fill="#1e293b" stroke="#38bdf8" />
                <text x="25" y="22" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">Δδ</text>
                <rect x="0" y="40" width="50" height="35" rx="2" fill="#1e293b" stroke="#a855f7" />
                <text x="25" y="62" fill="#d8b4fe" fontSize="8" fontWeight="bold" textAnchor="middle">Δ|V|</text>
              </g>

              {/* Decoupling Callout */}
              <rect x="15" y="122" width="250" height="24" rx="2" fill="#020617" stroke="#334155" />
              <text x="140" y="137" fill="#34d399" fontSize="6.5" textAnchor="middle">
                Fast Decoupled Power Flow (FDLF): Assumes J12 ≈ 0, J21 ≈ 0
              </text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-semibold">
            {caption || "Power Flow Jacobian Matrix: Decoupled P-δ and Q-V sensitivities in Newton-Raphson load flow iterations."}
          </p>
        </div>
      );

    case 'sch-ch16-symmetrical-fault':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 560 215" className="w-full max-w-xl h-52">
            {/* Title */}
            <text x="280" y="16" fill="#38bdf8" fontSize="10.5" fontWeight="bold" textAnchor="middle">
              3-Phase Symmetrical Fault Current Waveform &amp; Machine Reactance Stages
            </text>

            {/* Left: AC Short Circuit Oscillogram Waveform */}
            <g transform="translate(20, 35)">
              <rect x="0" y="0" width="280" height="155" rx="4" fill="#0f172a" stroke="#ef4444" strokeWidth="1.5" />
              <text x="140" y="16" fill="#fca5a5" fontSize="8" fontWeight="bold" textAnchor="middle">
                Transient Short-Circuit Oscillogram
              </text>

              {/* Time Axis */}
              <line x1="20" y1="75" x2="260" y2="75" stroke="#475569" strokeWidth="1" />
              <text x="255" y="70" fill="#94a3b8" fontSize="6.5">Time (t)</text>

              {/* Envelopes (decaying) */}
              <path d="M 30 25 Q 80 40 130 55 T 250 62" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,3" />
              <path d="M 30 125 Q 80 110 130 95 T 250 88" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,3" />

              {/* AC Sinusoidal Waveform decaying in amplitude */}
              {/* Subtransient zone (0 to 80) */}
              <path d="M 30 75 Q 40 25 50 75 T 70 75 T 90 75 T 115 75 T 140 75 T 170 75 T 200 75 T 230 75 T 255 75" 
                    fill="none" stroke="#38bdf8" strokeWidth="1.5" />

              {/* Zone Dividers */}
              <line x1="80" y1="20" x2="80" y2="135" stroke="#334155" strokeWidth="1" strokeDasharray="2,2" />
              <line x1="160" y1="20" x2="160" y2="135" stroke="#334155" strokeWidth="1" strokeDasharray="2,2" />

              <text x="55" y="145" fill="#ef4444" fontSize="6.5" fontWeight="bold" textAnchor="middle">Subtransient X"d</text>
              <text x="120" y="145" fill="#f59e0b" fontSize="6.5" fontWeight="bold" textAnchor="middle">Transient X'd</text>
              <text x="205" y="145" fill="#34d399" fontSize="6.5" fontWeight="bold" textAnchor="middle">Steady-State Xd</text>
            </g>

            {/* Right: Thevenin Equivalent & Sizing Table */}
            <g transform="translate(315, 35)">
              <rect x="0" y="0" width="225" height="155" rx="4" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
              <text x="112" y="16" fill="#7dd3fc" fontSize="8" fontWeight="bold" textAnchor="middle">
                Thevenin Equivalent &amp; Breaker Duty
              </text>

              {/* Circuit */}
              <circle cx="35" cy="55" r="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="35" y="58" fill="#e0f2fe" fontSize="7" fontWeight="bold" textAnchor="middle">V_th</text>
              <line x1="47" y1="55" x2="70" y2="55" stroke="#38bdf8" strokeWidth="1.5" />
              
              <rect x="70" y="47" width="50" height="16" rx="2" fill="#0c4a6e" stroke="#38bdf8" />
              <text x="95" y="58" fill="#bae6fd" fontSize="7" textAnchor="middle">jX"th (pu)</text>
              <line x1="120" y1="55" x2="160" y2="55" stroke="#38bdf8" strokeWidth="1.5" />

              {/* Fault Point */}
              <circle cx="160" cy="55" r="3" fill="#ef4444" />
              <text x="175" y="58" fill="#ef4444" fontSize="8" fontWeight="bold">3-Ph Fault</text>

              {/* Ground */}
              <line x1="160" y1="55" x2="160" y2="85" stroke="#ef4444" strokeWidth="2" strokeDasharray="3,3" />
              <line x1="35" y1="67" x2="35" y2="85" stroke="#64748b" strokeWidth="1.5" />
              <line x1="25" y1="85" x2="175" y2="85" stroke="#64748b" strokeWidth="1.5" />

              {/* Sizing Formulas Box */}
              <rect x="10" y="98" width="205" height="48" rx="2" fill="#020617" stroke="#334155" />
              <text x="112" y="112" fill="#f87171" fontSize="7" fontWeight="bold" textAnchor="middle">
                I_sc" = V_prefault / (√3 × Z_th)
              </text>
              <text x="112" y="126" fill="#38bdf8" fontSize="7" textAnchor="middle">
                Fault MVA = S_base / X"th (p.u.)
              </text>
              <text x="112" y="140" fill="#34d399" fontSize="6.5" textAnchor="middle">
                Breaker Interrupting: 3 to 5 cycle rating
              </text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-semibold">
            {caption || "Symmetrical Fault Analysis: Synchronous machine subtransient, transient, and synchronous reactance intervals governing circuit breaker ratings."}
          </p>
        </div>
      );

    case 'sch-ch16-unsymmetrical-faults':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 560 215" className="w-full max-w-xl h-52">
            {/* Title */}
            <text x="280" y="16" fill="#38bdf8" fontSize="10.5" fontWeight="bold" textAnchor="middle">
              Symmetrical Sequence Network Interconnections for Unsymmetrical Faults
            </text>

            {/* Scheme 1: Single Line-to-Ground (SLG) Fault -> Series Connection */}
            <g transform="translate(15, 35)">
              <rect x="0" y="0" width="165" height="155" rx="4" fill="#0f172a" stroke="#ef4444" strokeWidth="1.5" />
              <text x="82" y="16" fill="#fca5a5" fontSize="8" fontWeight="bold" textAnchor="middle">
                1. Single Line-to-Ground (SLG)
              </text>

              {/* Series Connected Blocks */}
              <rect x="25" y="28" width="115" height="24" rx="2" fill="#0c4a6e" stroke="#0284c7" />
              <text x="82" y="44" fill="#bae6fd" fontSize="7.5" textAnchor="middle">Positive Seq Network (Z₁)</text>
              <line x1="82" y1="52" x2="82" y2="62" stroke="#ef4444" strokeWidth="2" />

              <rect x="25" y="62" width="115" height="24" rx="2" fill="#3b0764" stroke="#7e22ce" />
              <text x="82" y="78" fill="#f5d0fe" fontSize="7.5" textAnchor="middle">Negative Seq Network (Z₂)</text>
              <line x1="82" y1="86" x2="82" y2="96" stroke="#ef4444" strokeWidth="2" />

              <rect x="25" y="96" width="115" height="24" rx="2" fill="#78350f" stroke="#d97706" />
              <text x="82" y="112" fill="#fde68a" fontSize="7.5" textAnchor="middle">Zero Seq (Z₀ + 3Zf)</text>

              {/* Equation */}
              <text x="82" y="134" fill="#34d399" fontSize="7" fontWeight="bold" textAnchor="middle">
                SERIES CONNECTION
              </text>
              <text x="82" y="146" fill="#cbd5e1" fontSize="6.5" textAnchor="middle">
                Ia0 = Ia1 = Ia2 = Ea / (Z₁+Z₂+Z₀+3Zf)
              </text>
            </g>

            {/* Scheme 2: Line-to-Line (L-L) Fault -> Parallel Opposed */}
            <g transform="translate(195, 35)">
              <rect x="0" y="0" width="170" height="155" rx="4" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="85" y="16" fill="#fde68a" fontSize="8" fontWeight="bold" textAnchor="middle">
                2. Line-to-Line (L-L) Fault
              </text>

              {/* Parallel Z1 and Z2 */}
              <rect x="20" y="35" width="130" height="28" rx="2" fill="#0c4a6e" stroke="#0284c7" />
              <text x="85" y="52" fill="#bae6fd" fontSize="7.5" textAnchor="middle">Positive Seq (Z₁)</text>

              <line x1="30" y1="63" x2="30" y2="80" stroke="#f59e0b" strokeWidth="2" />
              <line x1="140" y1="63" x2="140" y2="80" stroke="#f59e0b" strokeWidth="2" />

              <rect x="20" y="80" width="130" height="28" rx="2" fill="#3b0764" stroke="#7e22ce" />
              <text x="85" y="97" fill="#f5d0fe" fontSize="7.5" textAnchor="middle">Negative Seq (Z₂ + Zf)</text>

              <text x="85" y="125" fill="#38bdf8" fontSize="7" fontWeight="bold" textAnchor="middle">
                PARALLEL (Ia1 = -Ia2)
              </text>
              <text x="85" y="140" fill="#cbd5e1" fontSize="6.5" textAnchor="middle">
                Zero Sequence: Ia0 = 0 (Isolated)
              </text>
            </g>

            {/* Scheme 3: Double Line-to-Ground (LLG) -> All 3 Parallel */}
            <g transform="translate(380, 35)">
              <rect x="0" y="0" width="165" height="155" rx="4" fill="#0f172a" stroke="#a855f7" strokeWidth="1.5" />
              <text x="82" y="16" fill="#d8b4fe" fontSize="8" fontWeight="bold" textAnchor="middle">
                3. Double Line-to-Ground (LLG)
              </text>

              {/* Three Parallel Branches */}
              <rect x="15" y="30" width="135" height="22" rx="2" fill="#0c4a6e" stroke="#0284c7" />
              <text x="82" y="44" fill="#bae6fd" fontSize="7" textAnchor="middle">Positive Seq Network (Z₁)</text>

              <rect x="15" y="58" width="135" height="22" rx="2" fill="#3b0764" stroke="#7e22ce" />
              <text x="82" y="72" fill="#f5d0fe" fontSize="7" textAnchor="middle">Negative Seq Network (Z₂)</text>

              <rect x="15" y="86" width="135" height="22" rx="2" fill="#78350f" stroke="#d97706" />
              <text x="82" y="100" fill="#fde68a" fontSize="7" textAnchor="middle">Zero Seq (Z₀ + 3Zf)</text>

              {/* Parallel Busbars on left and right */}
              <line x1="25" y1="41" x2="25" y2="97" stroke="#34d399" strokeWidth="2.5" />
              <line x1="140" y1="41" x2="140" y2="97" stroke="#34d399" strokeWidth="2.5" />

              <text x="82" y="125" fill="#34d399" fontSize="7" fontWeight="bold" textAnchor="middle">
                ALL 3 NETWORKS PARALLEL
              </text>
              <text x="82" y="140" fill="#cbd5e1" fontSize="6.5" textAnchor="middle">
                Va1 = Va2 = Va0 = Ea - Ia1·Z₁
              </text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-semibold">
            {caption || "Unsymmetrical Fault Sequence Topologies: Series connection for SLG, parallel for L-L, and 3-way parallel for LLG."}
          </p>
        </div>
      );

    case 'sch-ch16-power-system-stability':
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 rounded-lg border border-slate-800 text-white w-full">
          <svg viewBox="0 0 560 215" className="w-full max-w-xl h-52">
            {/* Title */}
            <text x="280" y="16" fill="#38bdf8" fontSize="10.5" fontWeight="bold" textAnchor="middle">
              Equal-Area Criterion for Power System Transient Stability &amp; Critical Clearing Angle
            </text>

            {/* Left: Power-Angle Curve & Areas A1 / A2 */}
            <g transform="translate(25, 35)">
              <rect x="0" y="0" width="285" height="155" rx="4" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
              <text x="142" y="16" fill="#6ee7b7" fontSize="8" fontWeight="bold" textAnchor="middle">
                Power-Angle (P-δ) Equal-Area Criterion
              </text>

              {/* Axes */}
              <line x1="30" y1="125" x2="265" y2="125" stroke="#475569" strokeWidth="1.5" />
              <text x="260" y="137" fill="#94a3b8" fontSize="7">δ (deg)</text>
              <line x1="30" y1="125" x2="30" y2="25" stroke="#475569" strokeWidth="1.5" />
              <text x="15" y="32" fill="#94a3b8" fontSize="7">Power</text>

              {/* Pre-fault Curve (High Sine) */}
              <path d="M 30 125 Q 110 25 190 125" fill="none" stroke="#38bdf8" strokeWidth="2" />
              <text x="110" y="32" fill="#38bdf8" fontSize="6.5">Pre-Fault Pmax1</text>

              {/* During-fault Curve (Low Sine) */}
              <path d="M 30 125 Q 110 95 190 125" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3,3" />
              <text x="145" y="105" fill="#f87171" fontSize="6.5">During Fault</text>

              {/* Mechanical Input Line Pm */}
              <line x1="30" y1="70" x2="250" y2="70" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="240" y="65" fill="#f59e0b" fontSize="7" fontWeight="bold">Pm</text>

              {/* Shaded Area A1 (Accelerating) */}
              <polygon points="50,70 95,70 95,108 50,116" fill="#ef4444" fillOpacity="0.4" stroke="#ef4444" strokeWidth="1" />
              <text x="72" y="92" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">A1</text>

              {/* Shaded Area A2 (Decelerating) */}
              <polygon points="95,70 160,70 160,110 135,55 95,70" fill="#10b981" fillOpacity="0.4" stroke="#10b981" strokeWidth="1" />
              <text x="125" y="80" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">A2</text>

              {/* Angles */}
              <line x1="50" y1="70" x2="50" y2="125" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2,2" />
              <text x="50" y="137" fill="#cbd5e1" fontSize="6" textAnchor="middle">δ0</text>

              <line x1="95" y1="70" x2="95" y2="125" stroke="#ef4444" strokeWidth="1.5" />
              <text x="95" y="137" fill="#f87171" fontSize="6.5" fontWeight="bold" textAnchor="middle">δ_cr</text>

              <line x1="160" y1="70" x2="160" y2="125" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2,2" />
              <text x="160" y="137" fill="#cbd5e1" fontSize="6" textAnchor="middle">δ_max</text>
            </g>

            {/* Right: Swing Equation & Stability Controls */}
            <g transform="translate(325, 35)">
              <rect x="0" y="0" width="215" height="155" rx="4" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
              <text x="107" y="16" fill="#7dd3fc" fontSize="8" fontWeight="bold" textAnchor="middle">
                Swing Equation &amp; Grid Dynamics
              </text>

              {/* Swing Equation Box */}
              <rect x="10" y="28" width="195" height="35" rx="2" fill="#020617" stroke="#334155" />
              <text x="107" y="44" fill="#38bdf8" fontSize="8" fontFamily="monospace" textAnchor="middle">
                (2H / ωs) · (d²δ / dt²) = Pm - Pe
              </text>
              <text x="107" y="56" fill="#94a3b8" fontSize="6.5" textAnchor="middle">
                M · (d²δ / dt²) = Pa (Accelerating Power)
              </text>

              {/* Stability Criteria */}
              <rect x="10" y="70" width="195" height="35" rx="2" fill="#064e3b" stroke="#059669" />
              <text x="107" y="84" fill="#6ee7b7" fontSize="7.5" fontWeight="bold" textAnchor="middle">
                Stability Condition: Area A2 ≥ Area A1
              </text>
              <text x="107" y="96" fill="#a7f3d0" fontSize="6.5" textAnchor="middle">
                If A2 &lt; A1: Generator pulls out of synchronism
              </text>

              {/* FACTS Enhancement */}
              <rect x="10" y="112" width="195" height="34" rx="2" fill="#1e1b4b" stroke="#6366f1" />
              <text x="107" y="126" fill="#c7d2fe" fontSize="7" fontWeight="bold" textAnchor="middle">
                FACTS (STATCOM / TCSC) Mitigation:
              </text>
              <text x="107" y="138" fill="#e0e7ff" fontSize="6.5" textAnchor="middle">
                Rapid MVAR boost raises Pmax &amp; expands A2
              </text>
            </g>
          </svg>
          <p className="text-xs font-mono text-cyan-300 mt-2 text-center font-semibold">
            {caption || "Power System Transient Stability: Rotor angle acceleration Area A1 vs. deceleration Area A2 under Equal-Area Criterion."}
          </p>
        </div>
      );

    default:
      return null;
  }
}
