import React, { useState, useId } from 'react';
import { Language } from '../../types';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

type CompensationScheme = 'centralized' | 'group' | 'individual' | 'sync-condenser';

export const PFCompensationMethodsExplorer: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const controlId = useId();

  const [scheme, setScheme] = useState<CompensationScheme>('centralized');
  const [plantMotorKw, setPlantMotorKw] = useState<number>(300); // 300 kW total motor load
  const [motorPf, setMotorPf] = useState<number>(0.75); // initial motor PF

  // Calculations
  const theta1 = Math.acos(motorPf);
  const totalQkvar = plantMotorKw * Math.tan(theta1);
  const targetPf = 0.98;
  const theta2 = Math.acos(targetPf);
  const targetQkvar = plantMotorKw * Math.tan(theta2);
  const requiredQc = Math.max(0, totalQkvar - targetQkvar);

  // Distribution loss reduction depends on placement
  // Centralized: Compensates at main bus. Main incoming cable has reduced current, but internal factory cables still carry full reactive current.
  // Group: Compensates at sub-panels. Main incoming + main feeders have reduced current. Motor branch cables still carry reactive current.
  // Individual: Compensates directly at motor terminals. ALL cables (incoming, distribution, and motor branch) carry minimum current.
  // Synchronous condenser: Active control at central bus, provides smooth variable Q, higher maintenance, no harmonic resonance risk.
  let internalCableLossPercent = 100; // relative to uncompensated
  let capitalCostIndex = 100; // base benchmark
  let maintenanceIndex = 'Low';
  let harmonicRisk = 'Moderate';

  if (scheme === 'centralized') {
    internalCableLossPercent = 88; // only saves main intake cable
    capitalCostIndex = 100; // lowest capital cost (high diversity factor)
    maintenanceIndex = 'Low (Single central APFC panel)';
    harmonicRisk = 'Requires detuned reactors if non-linear loads exist';
  } else if (scheme === 'group') {
    internalCableLossPercent = 65; // saves main incoming and distribution feeders
    capitalCostIndex = 145; // multiple smaller panels
    maintenanceIndex = 'Moderate (3-5 local sub-panels)';
    harmonicRisk = 'Moderate (spread across panels)';
  } else if (scheme === 'individual') {
    internalCableLossPercent = 42; // maximum internal loss reduction across all runs
    capitalCostIndex = 230; // dedicated capacitor + contactor per motor
    maintenanceIndex = 'High (many distributed units & fuses)';
    harmonicRisk = 'Low risk of resonance, but risk of self-excitation on motor trip';
  } else {
    // sync-condenser
    internalCableLossPercent = 85;
    capitalCostIndex = 320; // expensive rotating machine
    maintenanceIndex = 'Very High (bearings, brushes, lubrication)';
    harmonicRisk = 'None (absorbs harmonics, adds system inertia)';
  }

  const t = {
    title: {
      en: 'Power Factor Correction Methods & Placement Strategy',
      hi: 'पावर फैक्टर सुधार विधियाँ एवं स्थापना रणनीति',
      bn: 'পাওয়ার ফ্যাক্টর সংশোধনের পদ্ধতি ও স্থাপন কৌশল'
    },
    subtitle: {
      en: 'Analyze the trade-offs between Centralized, Group, Individual (Local), and Synchronous Condenser compensation.',
      hi: 'केंद्रीकृत, समूह, व्यक्तिगत (स्थानीय), और तुल्यकालिक संघनित्र क्षतिपूर्ति के बीच अंतर और लाभों का विश्लेषण करें।',
      bn: 'কেন্দ্রীভূত, গ্রুপ, একক (স্থানীয়) এবং সিনক্রোনাস কনডেনসার ক্ষতিপূরণের মধ্যে সুবিধা ও অসুবিধার তুলনামূলক বিশ্লেষণ।'
    },
    centralized: { en: 'Centralized (Substation Bus)', hi: 'केंद्रीकृत (सबस्टेशन बस)', bn: 'কেন্দ্রীভূত (সাবস্টেশন বাস)' },
    group: { en: 'Group (Distribution Board)', hi: 'समूह (वितरण बोर्ड)', bn: 'গ্রুপ (ডিস্ট্রিবিউশন বোর্ড)' },
    individual: { en: 'Individual (Motor Terminals)', hi: 'व्यक्तिगत (मोटर टर्मिनल)', bn: 'একক (মোটর টার্মিনাল)' },
    syncCondenser: { en: 'Synchronous Condenser', hi: 'सिंक्रोनस कंडेंसर', bn: 'সিনক্রোনাস কনডেনসার' },
    motorLoad: { en: 'Total Plant Motor Load (kW)', hi: 'कुल संयंत्र मोटर लोड (kW)', bn: 'মোট প্ল্যান্ট মোটর লোড (kW)' },
    uncompPf: { en: 'Uncompensated Motor PF', hi: 'असुधारित मोटर PF', bn: 'অসংশোধিত মোটর PF' },
    reqKvar: { en: 'Required Capacitive Compensation', hi: 'आवश्यक कैपेसिटिव क्षतिपूर्ति', bn: 'প্রয়োজনীয় ক্যাপাসিটিভ ক্ষতিপূরণ' },
    cableLoss: { en: 'Internal Cable I²R Losses', hi: 'आंतरिक केबल I²R हानियाँ', bn: 'অভ্যন্তরীণ ক্যাবল I²R অপচয়' },
    capCost: { en: 'Capital Cost Index', hi: 'पूंजीगत लागत सूचकांक', bn: 'মূলধনী ব্যয় সূচক' },
    summaryHeader: { en: 'Operational & Engineering Assessment', hi: 'परिचालन एवं इंजीनियरिंग मूल्यांकन', bn: 'অপারেশনাল ও ইঞ্জিনিয়ারিং মূল্যায়ন' }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-2xl space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h3 className="text-xl font-bold text-amber-400">{t.title[lang]}</h3>
        <p className="text-sm text-slate-400 mt-1">{t.subtitle[lang]}</p>
      </div>

      {/* Scheme Selection Pills */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <button
          type="button"
          onClick={() => setScheme('centralized')}
          className={`px-3 py-2.5 rounded-lg text-xs font-semibold border transition-all text-center ${
            scheme === 'centralized'
              ? 'bg-amber-600/30 border-amber-500 text-amber-300 shadow-md ring-1 ring-amber-500/50'
              : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
          }`}
        >
          {t.centralized[lang]}
        </button>
        <button
          type="button"
          onClick={() => setScheme('group')}
          className={`px-3 py-2.5 rounded-lg text-xs font-semibold border transition-all text-center ${
            scheme === 'group'
              ? 'bg-amber-600/30 border-amber-500 text-amber-300 shadow-md ring-1 ring-amber-500/50'
              : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
          }`}
        >
          {t.group[lang]}
        </button>
        <button
          type="button"
          onClick={() => setScheme('individual')}
          className={`px-3 py-2.5 rounded-lg text-xs font-semibold border transition-all text-center ${
            scheme === 'individual'
              ? 'bg-amber-600/30 border-amber-500 text-amber-300 shadow-md ring-1 ring-amber-500/50'
              : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
          }`}
        >
          {t.individual[lang]}
        </button>
        <button
          type="button"
          onClick={() => setScheme('sync-condenser')}
          className={`px-3 py-2.5 rounded-lg text-xs font-semibold border transition-all text-center ${
            scheme === 'sync-condenser'
              ? 'bg-amber-600/30 border-amber-500 text-amber-300 shadow-md ring-1 ring-amber-500/50'
              : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
          }`}
        >
          {t.syncCondenser[lang]}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls & Metrics */}
        <div className="lg:col-span-5 space-y-4 bg-slate-950 p-5 rounded-lg border border-slate-800">
          <div>
            <div className="flex justify-between items-center text-sm font-semibold mb-1">
              <label htmlFor={`${controlId}-kw`} className="text-emerald-400">{t.motorLoad[lang]}:</label>
              <span className="font-mono text-emerald-300 text-base">{plantMotorKw} kW</span>
            </div>
            <input
              id={`${controlId}-kw`}
              type="range"
              min="50"
              max="1000"
              step="25"
              value={plantMotorKw}
              onChange={(e) => setPlantMotorKw(parseFloat(e.target.value))}
              aria-label="Total plant motor active power"
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>

          <div>
            <div className="flex justify-between items-center text-sm font-semibold mb-1">
              <label htmlFor={`${controlId}-pf`} className="text-sky-400">{t.uncompPf[lang]}:</label>
              <span className="font-mono text-sky-300 text-base">{motorPf.toFixed(2)} Lag</span>
            </div>
            <input
              id={`${controlId}-pf`}
              type="range"
              min="0.50"
              max="0.85"
              step="0.01"
              value={motorPf}
              onChange={(e) => setMotorPf(parseFloat(e.target.value))}
              aria-label="Uncompensated initial power factor"
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
            />
          </div>

          <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-400">{t.reqKvar[lang]}:</span>
              <span className="font-mono font-bold text-amber-400">{requiredQc.toFixed(1)} kVAR</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Target Bus PF:</span>
              <span className="font-mono font-bold text-emerald-400">0.98 Lag</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Total Uncompensated kVAR:</span>
              <span className="font-mono text-slate-300">{totalQkvar.toFixed(1)} kVAR</span>
            </div>
          </div>

          {/* Comparison Cards */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-center">
              <div className="text-[11px] text-slate-400 mb-1">{t.cableLoss[lang]}</div>
              <div className={`text-base font-bold font-mono ${internalCableLossPercent <= 50 ? 'text-emerald-400' : 'text-amber-400'}`}>
                {internalCableLossPercent}%
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                {100 - internalCableLossPercent}% Plant Loss Cut
              </div>
            </div>

            <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-center">
              <div className="text-[11px] text-slate-400 mb-1">{t.capCost[lang]}</div>
              <div className="text-base font-bold font-mono text-cyan-400">{capitalCostIndex}%</div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                {scheme === 'centralized' ? 'Lowest Capex' : scheme === 'individual' ? 'High Capex' : 'Relative to Central'}
              </div>
            </div>
          </div>
        </div>

        {/* Plant Single-Line Topology Diagram */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
            <div className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider text-center">
              Single-Line Distribution Diagram &amp; Reactive Current Trajectory
            </div>

            <svg viewBox="0 0 460 250" className="w-full h-60" role="img" aria-label="Compensation scheme single-line diagram">
              {/* Main Transformer / Utility Source */}
              <rect x="20" y="30" width="70" height="40" rx="4" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
              <text x="55" y="48" fill="#93c5fd" fontSize="9" fontWeight="bold" textAnchor="middle">11kV / 415V</text>
              <text x="55" y="60" fill="#94a3b8" fontSize="8" textAnchor="middle">Substation</text>

              {/* Main 415V Busbar */}
              <line x1="120" y1="15" x2="120" y2="230" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" />
              <text x="115" y="12" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="end">Main 415V Busbar</text>

              {/* Substation to Busbar cable */}
              <line x1="90" y1="50" x2="117" y2="50" stroke="#38bdf8" strokeWidth="3" />

              {/* CENTRALIZED CAPACITOR BANK */}
              {scheme === 'centralized' && (
                <g>
                  <line x1="120" y1="50" x2="175" y2="50" stroke="#10b981" strokeWidth="3" />
                  <rect x="175" y="30" width="85" height="40" rx="4" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
                  <text x="217" y="48" fill="#6ee7b7" fontSize="9" fontWeight="bold" textAnchor="middle">APFC Panel</text>
                  <text x="217" y="60" fill="#a7f3d0" fontSize="8" textAnchor="middle">{requiredQc.toFixed(0)} kVAR Bank</text>
                  <circle cx="217" cy="80" r="4" fill="#10b981" />
                  <text x="225" y="83" fill="#10b981" fontSize="8">Compensates here</text>
                </g>
              )}

              {/* SYNCHRONOUS CONDENSER */}
              {scheme === 'sync-condenser' && (
                <g>
                  <line x1="120" y1="50" x2="175" y2="50" stroke="#a855f7" strokeWidth="3" />
                  <rect x="175" y="30" width="95" height="40" rx="4" fill="#3b0764" stroke="#c084fc" strokeWidth="2" />
                  <text x="222" y="48" fill="#e9d5ff" fontSize="9" fontWeight="bold" textAnchor="middle">Sync Motor</text>
                  <text x="222" y="60" fill="#d8b4fe" fontSize="8" textAnchor="middle">Over-excited Condenser</text>
                </g>
              )}

              {/* Feeder to Sub-Distribution Board 1 */}
              <line x1="120" y1="110" x2="220" y2="110" stroke={scheme === 'centralized' ? '#ef4444' : '#38bdf8'} strokeWidth="2.5" />
              <rect x="220" y="95" width="60" height="30" rx="3" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
              <text x="250" y="113" fill="#cbd5e1" fontSize="8" textAnchor="middle">Sub DB-1</text>

              {/* GROUP COMPENSATION BANK AT SUB-DB */}
              {scheme === 'group' && (
                <g>
                  <line x1="250" y1="125" x2="250" y2="145" stroke="#10b981" strokeWidth="2" />
                  <rect x="220" y="145" width="60" height="24" rx="3" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
                  <text x="250" y="160" fill="#6ee7b7" fontSize="8" fontWeight="bold" textAnchor="middle">Group Cap</text>
                </g>
              )}

              {/* Sub-DB 1 to Motor 1 */}
              <line x1="280" y1="110" x2="350" y2="110" stroke={scheme === 'individual' ? '#38bdf8' : '#ef4444'} strokeWidth="2" />
              <circle cx="370" cy="110" r="16" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
              <text x="370" y="113" fill="#fbbf24" fontSize="9" fontWeight="bold" textAnchor="middle">M1</text>
              <text x="370" y="138" fill="#94a3b8" fontSize="8" textAnchor="middle">100 kW Motor</text>

              {/* INDIVIDUAL CAPACITOR AT MOTOR 1 */}
              {scheme === 'individual' && (
                <g>
                  <line x1="370" y1="94" x2="370" y2="78" stroke="#10b981" strokeWidth="2" />
                  <rect x="345" y="56" width="50" height="22" rx="3" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
                  <text x="370" y="70" fill="#6ee7b7" fontSize="8" fontWeight="bold" textAnchor="middle">Local Cap</text>
                </g>
              )}

              {/* Feeder to Sub-Distribution Board 2 */}
              <line x1="120" y1="190" x2="220" y2="190" stroke={scheme === 'centralized' ? '#ef4444' : '#38bdf8'} strokeWidth="2.5" />
              <rect x="220" y="175" width="60" height="30" rx="3" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
              <text x="250" y="193" fill="#cbd5e1" fontSize="8" textAnchor="middle">Sub DB-2</text>

              {/* Sub-DB 2 to Motor 2 */}
              <line x1="280" y1="190" x2="350" y2="190" stroke={scheme === 'individual' ? '#38bdf8' : '#ef4444'} strokeWidth="2" />
              <circle cx="370" cy="190" r="16" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
              <text x="370" y="193" fill="#fbbf24" fontSize="9" fontWeight="bold" textAnchor="middle">M2</text>
              <text x="370" y="218" fill="#94a3b8" fontSize="8" textAnchor="middle">200 kW Motor</text>

              {/* INDIVIDUAL CAPACITOR AT MOTOR 2 */}
              {scheme === 'individual' && (
                <g>
                  <line x1="370" y1="174" x2="370" y2="158" stroke="#10b981" strokeWidth="2" />
                  <rect x="345" y="136" width="50" height="22" rx="3" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
                  <text x="370" y="150" fill="#6ee7b7" fontSize="8" fontWeight="bold" textAnchor="middle">Local Cap</text>
                </g>
              )}

              {/* Legend */}
              <g transform="translate(10, 195)">
                <line x1="0" y1="0" x2="16" y2="0" stroke="#38bdf8" strokeWidth="2.5" />
                <text x="22" y="3" fill="#94a3b8" fontSize="8">Low Current Cable (High PF)</text>

                <line x1="0" y1="15" x2="16" y2="15" stroke="#ef4444" strokeWidth="2.5" />
                <text x="22" y="18" fill="#94a3b8" fontSize="8">Heavy Reactive Current Cable</text>
              </g>
            </svg>
          </div>

          {/* Assessment Table / Summary */}
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 text-xs space-y-2">
            <h4 className="font-semibold text-amber-400 text-sm">{t.summaryHeader[lang]}</h4>
            <div className="grid grid-cols-2 gap-2 text-slate-300">
              <div>
                <span className="text-slate-500">Maintenance Burden:</span> {maintenanceIndex}
              </div>
              <div>
                <span className="text-slate-500">Harmonic Susceptibility:</span> {harmonicRisk}
              </div>
            </div>
            <div className="pt-2 border-t border-slate-800/80 text-slate-300 leading-relaxed">
              {scheme === 'centralized' && (
                <p>
                  <strong>Centralized Compensation</strong> provides the lowest initial investment by capitalizing on load diversity. The microprocessor APFC controller steps banks smoothly to maintain utility tariff limits at the boundary meter. However, plant distribution feeders still carry full motor reactive currents.
                </p>
              )}
              {scheme === 'group' && (
                <p>
                  <strong>Group Compensation</strong> installs capacitor banks at sub-distribution boards servicing clusters of machines operating concurrently. It strikes an effective balance between installation cost and internal feeder I²R loss reduction.
                </p>
              )}
              {scheme === 'individual' && (
                <p>
                  <strong>Individual (Local) Compensation</strong> connects capacitors directly in parallel with motor terminals, switched by the motor contactor. It eliminates reactive current across all upstream cables and switchgear. Note: Capacitors must be sized below 90% of motor no-load magnetizing kVAR to prevent self-excitation on disconnection.
                </p>
              )}
              {scheme === 'sync-condenser' && (
                <p>
                  <strong>Synchronous Condenser</strong> utilizes an unloaded, over-excited synchronous motor to deliver continuously stepless, variable reactive power. Unlike static capacitors, its reactive output does not collapse when system voltage dips during grid faults, and it introduces essential physical rotational inertia.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
