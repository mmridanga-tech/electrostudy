import React, { useState } from 'react';
import { Language } from '../../types';
import { Sliders, RotateCcw, ShieldCheck, Zap, AlertTriangle, CheckCircle2, Factory, TrendingUp, Info } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const IndustrialProtectionCoordinationCapstone: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';

  const [activeFault, setActiveFault] = useState<'F1_HV' | 'F2_XFR' | 'F3_MV_BUS' | 'F4_MOTOR'>('F3_MV_BUS');
  const [motorStartCondition, setMotorStartCondition] = useState<boolean>(false);

  // System Parameters
  // Utility: 33 kV, 750 MVA Short-Circuit level (I_sc = 13.12 kA)
  // Transformer: 10 MVA, 33/6.6 kV, %Z = 8.0%, Dyn11
  // Full load currents:
  // HV Side (33 kV): I_fl = 10000 / (sqrt(3) * 33) = 175.0 A
  // LV Side (6.6 kV): I_fl = 10000 / (sqrt(3) * 6.6) = 874.8 A
  // Transformer Fault level at 6.6 kV bus:
  // Base Z_tr = 8.0% = 0.08 p.u.
  // Utility Z_s = 10 / 750 = 0.0133 p.u.
  // Total Z_total = 0.0933 p.u.
  // 6.6 kV Short-circuit MVA = 10 / 0.0933 = 107.2 MVA
  // 6.6 kV Fault Current I_f = 107.2 * 1000 / (sqrt(3) * 6.6) = 9.38 kA

  // Fault details
  const faultProfiles = {
    F1_HV: {
      name: { en: 'Fault F1: 33 kV Utility Incomer', hi: 'फॉल्ट F1: 33 kV यूटिलिटी इनकमर', bn: 'ফল্ট F1: ৩৩ kV ইউটিলিটি ইনকামার' },
      location: '33 kV Incomer Cable / Bus',
      voltage: '33 kV',
      faultCurrentKA: 13.12,
      primaryRelay: '33 kV Utility Incomer 50/51 (Instantaneous / IDMT)',
      backupRelay: 'Upstream Grid Substation Overcurrent',
      clearingTime: '40 ms (Instantaneous 50) / 250 ms (Backup)',
      trippedBreakers: ['CB-01 (33 kV Incomer)'],
      impact: 'Plant completely disconnected from grid, emergency diesel generator initiates.'
    },
    F2_XFR: {
      name: { en: 'Fault F2: 10 MVA Transformer Winding Internal', hi: 'फॉल्ट F2: 10 MVA ट्रांसफार्मर आंतरिक वाइंडिंग', bn: 'ফল্ট F2: ১০ MVA ট্রান্সফরমার অভ্যন্তরীণ ওয়াইন্ডিং' },
      location: 'Inside 33/6.6 kV Transformer Tank',
      voltage: '33 / 6.6 kV',
      faultCurrentKA: 11.5,
      primaryRelay: '87T Transformer Biased Differential + 64R (REF)',
      backupRelay: '33 kV Overcurrent (51) + Buchholz Gas Relay',
      clearingTime: '25 ms (87T Differential Instantaneous)',
      trippedBreakers: ['CB-01 (33 kV HV)', 'CB-02 (6.6 kV LV)'],
      impact: 'Unit isolated instantly from both HV and LV sides; Buchholz gas trip locks out 86 lockout relay.'
    },
    F3_MV_BUS: {
      name: { en: 'Fault F3: 6.6 kV Main Medium-Voltage Busbar', hi: 'फॉल्ट F3: 6.6 kV मुख्य एमवी बसबार', bn: 'ফল্ট F3: ৬.৬ kV প্রধান এমভি বাসবার' },
      location: '6.6 kV Switchgear Busbar Chamber',
      voltage: '6.6 kV',
      faultCurrentKA: 9.38,
      primaryRelay: '87B Busbar High-Impedance Differential (or Incomer 51)',
      backupRelay: 'HV Incomer Overcurrent (51) timed at 0.65s',
      clearingTime: '30 ms (87B Bus Differential) or 320 ms (Incomer 51 IDMT)',
      trippedBreakers: ['CB-02 (6.6 kV Incomer)', 'CB-03', 'CB-04', 'CB-05'],
      impact: 'All 6.6 kV loads trip simultaneously; isolated bus saves transformer from thermal damage.'
    },
    F4_MOTOR: {
      name: { en: 'Fault F4: 2.5 MW Motor Terminal / Stator Arc', hi: 'फॉल्ट F4: 2.5 MW मोटर टर्मिनल फॉल्ट', bn: 'ফল্ট F4: ২.৫ MW মোটর টার্মিনাল ফল্ট' },
      location: 'Motor Terminal Box / Stator Winding',
      voltage: '6.6 kV',
      faultCurrentKA: 7.8,
      primaryRelay: 'Motor Protection Relay (50 Instantaneous / 50G Earth Fault / 49 Thermal)',
      backupRelay: '6.6 kV Incomer 51 (Coordinated Margin = 320 ms)',
      clearingTime: '20 ms (Motor Feeder CB-03 Instantaneous)',
      trippedBreakers: ['CB-03 (Motor Feeder)'],
      impact: 'Only the faulted motor is cleared; the 6.6 kV bus, auxiliary transformer, and capacitor bank remain 100% operational!'
    }
  };

  const currentFault = faultProfiles[activeFault];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-2xl my-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <Factory className="w-6 h-6 text-emerald-400" />
            <h3 className="text-xl font-bold text-white tracking-wide">
              {lang === 'en' && 'Industrial Substation Protection Coordination Capstone'}
              {lang === 'hi' && 'औद्योगिक सबस्टेशन सुरक्षा समन्वय कैपस्टोन'}
              {lang === 'bn' && 'ইন্ডাস্ট্রিয়াল সাবস্টেশন প্রোটেকশন কোঅর্ডিনেশন ক্যাপস্টোন'}
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'en' && 'Interactive engineering coordination: 33 kV Utility Incomer → 10 MVA Transformer → 6.6 kV Switchgear → 2.5 MW Motor Feeder.'}
            {lang === 'hi' && '33 kV यूटिलिटी इनकमर → 10 MVA ट्रांसफार्मर → 6.6 kV स्विचगियर → 2.5 MW मोटर फीडर समन्वय।'}
            {lang === 'bn' && '৩৩ kV ইউটিলিটি ইনকামার → ১০ MVA ট্রান্সফরমার → ৬.৬ kV সুইচগিয়ার → ২.৫ MW মোটর ফিডার সমন্বয় বিশ্লেষণ।'}
          </p>
        </div>
        <button
          onClick={() => {
            setActiveFault('F3_MV_BUS');
            setMotorStartCondition(false);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
          <span>{lang === 'en' ? 'Reset Study' : lang === 'hi' ? 'रीसेट' : 'রিসেট'}</span>
        </button>
      </div>

      {/* Fault Injection Selector */}
      <div className="mb-6">
        <label className="text-xs font-semibold text-slate-300 block mb-2">
          {lang === 'en' ? 'Simulate Fault Point in Industrial Substation Single-Line Diagram:' : lang === 'hi' ? 'सिंगल-लाइन डायग्राम में फॉल्ट बिंदु चुनें:' : 'সিঙ্গেল-লাইন ডায়াগ্রামে ফল্ট পয়েন্ট নির্বাচন করুন:'}
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {Object.entries(faultProfiles).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setActiveFault(key as any)}
              className={`p-3 rounded-lg text-left border transition-all ${
                activeFault === key
                  ? 'bg-rose-950/80 border-rose-500 text-white shadow-lg'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-850 hover:text-slate-200'
              }`}
            >
              <div className="text-xs font-bold truncate text-rose-300">{data.name[lang]}</div>
              <div className="text-[10px] text-slate-400 mt-0.5">{data.voltage} ({data.faultCurrentKA} kA)</div>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Substation Single-Line Schematic */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-6 flex flex-col items-center">
        <svg viewBox="0 0 640 230" className="w-full max-w-2xl h-56">
          {/* Utility Grid Incomer */}
          <circle cx="50" cy="40" r="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
          <text x="50" y="44" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">GRID</text>
          <text x="50" y="20" fill="#7dd3fc" fontSize="7.5" textAnchor="middle">33 kV (750 MVA)</text>

          {/* 33 kV Incomer Breaker CB-01 */}
          <line x1="64" y1="40" x2="110" y2="40" stroke="#38bdf8" strokeWidth="2" />
          <rect
            x="110"
            y="30"
            width="22"
            height="20"
            rx="2"
            fill={currentFault.trippedBreakers.includes('CB-01 (33 kV Incomer)') || currentFault.trippedBreakers.includes('CB-01 (33 kV HV)') ? '#b91c1c' : '#1e293b'}
            stroke="#38bdf8"
            strokeWidth="1.5"
          />
          <text x="121" y="43" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">CB-01</text>

          {/* Fault F1 Marker */}
          {activeFault === 'F1_HV' && (
            <g transform="translate(85, 40)">
              <polygon points="0,-10 4,-2 10,-2 5,2 7,10 0,5 -7,10 -5,2 -10,-2 -4,-2" fill="#ef4444" stroke="#fff" />
              <text x="0" y="20" fill="#f87171" fontSize="7" fontWeight="bold" textAnchor="middle">F1 (13.1 kA)</text>
            </g>
          )}

          {/* 10 MVA Transformer 33/6.6 kV */}
          <line x1="132" y1="40" x2="180" y2="40" stroke="#38bdf8" strokeWidth="2" />
          <g transform="translate(205, 40)">
            <circle cx="-10" cy="0" r="15" fill="none" stroke="#f59e0b" strokeWidth="2" />
            <circle cx="10" cy="0" r="15" fill="none" stroke="#34d399" strokeWidth="2" />
            <text x="0" y="24" fill="#fbbf24" fontSize="7.5" fontWeight="bold" textAnchor="middle">
              10 MVA (8% Z)
            </text>
            <text x="0" y="34" fill="#94a3b8" fontSize="6.5" textAnchor="middle">Dyn11 (87T)</text>
          </g>

          {/* Fault F2 Marker */}
          {activeFault === 'F2_XFR' && (
            <g transform="translate(205, 40)">
              <polygon points="0,-12 5,-3 12,-3 6,2 8,11 0,6 -8,11 -6,2 -12,-3 -5,-3" fill="#ef4444" stroke="#fff" />
              <text x="0" y="-16" fill="#f87171" fontSize="7" fontWeight="bold" textAnchor="middle">F2 (87T Trip)</text>
            </g>
          )}

          {/* 6.6 kV Secondary Incomer Breaker CB-02 */}
          <line x1="230" y1="40" x2="270" y2="40" stroke="#34d399" strokeWidth="2" />
          <rect
            x="270"
            y="30"
            width="22"
            height="20"
            rx="2"
            fill={currentFault.trippedBreakers.includes('CB-02 (6.6 kV LV)') || currentFault.trippedBreakers.includes('CB-02 (6.6 kV Incomer)') ? '#b91c1c' : '#1e293b'}
            stroke="#34d399"
            strokeWidth="1.5"
          />
          <text x="281" y="43" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">CB-02</text>

          {/* 6.6 kV Main Medium-Voltage Busbar */}
          <line x1="292" y1="40" x2="330" y2="40" stroke="#34d399" strokeWidth="2" />
          <line x1="330" y1="20" x2="330" y2="200" stroke="#34d399" strokeWidth="6" strokeLinecap="round" />
          <text x="315" y="16" fill="#34d399" fontSize="8.5" fontWeight="bold">6.6 kV Bus (9.38 kA / 25 kA Brk)</text>

          {/* Fault F3 Marker on 6.6 kV Bus */}
          {activeFault === 'F3_MV_BUS' && (
            <g transform="translate(330, 110)">
              <polygon points="0,-12 5,-3 12,-3 6,2 8,11 0,6 -8,11 -6,2 -12,-3 -5,-3" fill="#ef4444" stroke="#fff" />
              <text x="-40" y="4" fill="#f87171" fontSize="7.5" fontWeight="bold">F3 (Bus Fault)</text>
            </g>
          )}

          {/* Feeder 1: 2.5 MW Induction Motor */}
          <line x1="330" y1="60" x2="380" y2="60" stroke="#34d399" strokeWidth="2" />
          <rect
            x="380"
            y="50"
            width="22"
            height="20"
            rx="2"
            fill={currentFault.trippedBreakers.includes('CB-03 (Motor Feeder)') || currentFault.trippedBreakers.includes('CB-03') ? '#b91c1c' : '#1e293b'}
            stroke="#34d399"
            strokeWidth="1.5"
          />
          <text x="391" y="63" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">CB-03</text>
          <line x1="402" y1="60" x2="450" y2="60" stroke="#34d399" strokeWidth="2" />
          <circle cx="475" cy="60" r="16" fill="#0f172a" stroke="#06b6d4" strokeWidth="2" />
          <text x="475" y="64" fill="#06b6d4" fontSize="8" fontWeight="bold" textAnchor="middle">M1</text>
          <text x="515" y="63" fill="#a5f3fc" fontSize="7">2.5 MW (51/49)</text>

          {/* Fault F4 Marker at Motor */}
          {activeFault === 'F4_MOTOR' && (
            <g transform="translate(430, 60)">
              <polygon points="0,-10 4,-2 10,-2 5,2 7,10 0,5 -7,10 -5,2 -10,-2 -4,-2" fill="#ef4444" stroke="#fff" />
              <text x="0" y="18" fill="#f87171" fontSize="7" fontWeight="bold" textAnchor="middle">F4 (Motor)</text>
            </g>
          )}

          {/* Feeder 2: 1.5 MVA Auxiliary Transformer 6.6/0.415 kV */}
          <line x1="330" y1="120" x2="380" y2="120" stroke="#34d399" strokeWidth="2" />
          <rect
            x="380"
            y="110"
            width="22"
            height="20"
            rx="2"
            fill={currentFault.trippedBreakers.includes('CB-04') ? '#b91c1c' : '#1e293b'}
            stroke="#34d399"
            strokeWidth="1.5"
          />
          <text x="391" y="123" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">CB-04</text>
          <line x1="402" y1="120" x2="445" y2="120" stroke="#34d399" strokeWidth="2" />
          <g transform="translate(465, 120)">
            <circle cx="-6" cy="0" r="10" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
            <circle cx="6" cy="0" r="10" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
          </g>
          <text x="515" y="123" fill="#fde68a" fontSize="7">1.5 MVA (Aux 415V)</text>

          {/* Feeder 3: 1.2 MVAr Capacitor Bank */}
          <line x1="330" y1="175" x2="380" y2="175" stroke="#34d399" strokeWidth="2" />
          <rect
            x="380"
            y="165"
            width="22"
            height="20"
            rx="2"
            fill={currentFault.trippedBreakers.includes('CB-05') ? '#b91c1c' : '#1e293b'}
            stroke="#34d399"
            strokeWidth="1.5"
          />
          <text x="391" y="178" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">CB-05</text>
          <line x1="402" y1="175" x2="450" y2="175" stroke="#34d399" strokeWidth="2" />
          <g transform="translate(465, 175)">
            <line x1="-6" y1="-8" x2="-6" y2="8" stroke="#38bdf8" strokeWidth="2" />
            <line x1="6" y1="-8" x2="6" y2="8" stroke="#38bdf8" strokeWidth="2" />
          </g>
          <text x="515" y="178" fill="#7dd3fc" fontSize="7">1.2 MVAr (Cap Bank)</text>
        </svg>
      </div>

      {/* Dynamic Fault Diagnostic Card */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">Fault Location &amp; Magnitude</span>
          <div className="text-lg font-bold font-mono text-rose-400">{currentFault.faultCurrentKA} kA rms</div>
          <span className="text-[10px] text-slate-500">{currentFault.location}</span>
        </div>

        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">Primary Relay Operating</span>
          <div className="text-sm font-bold text-cyan-300">{currentFault.primaryRelay}</div>
          <span className="text-[10px] text-slate-500 font-mono">Speed: {currentFault.clearingTime}</span>
        </div>

        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">Tripped Breakers</span>
          <div className="text-sm font-bold text-rose-400">{currentFault.trippedBreakers.join(', ')}</div>
          <span className="text-[10px] text-slate-500">Isolates fault point selectively</span>
        </div>

        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">System Health Impact</span>
          <div className="text-xs font-semibold text-amber-300">{currentFault.impact}</div>
        </div>
      </div>

      {/* Coordination Table: CTs, Pickups, and TMS Settings */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-6">
        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
          Industrial Substation Protection Coordination Matrix (IEC Standard Inverse IDMT)
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 text-[11px]">
                <th className="pb-2">Zone / Feeder</th>
                <th className="pb-2">Breaker</th>
                <th className="pb-2">CT Ratio</th>
                <th className="pb-2">Primary Pickup</th>
                <th className="pb-2">TMS</th>
                <th className="pb-2">Trip Time (at 9.38 kA)</th>
                <th className="pb-2">Grading Margin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-900 text-slate-300 text-xs">
              <tr className="hover:bg-slate-900/50">
                <td className="py-2.5 text-cyan-400 font-bold">2.5 MW Motor Feeder</td>
                <td>CB-03</td>
                <td>300/5 A</td>
                <td>360 A (120%)</td>
                <td>0.10</td>
                <td>0.020 s (Inst 50)</td>
                <td className="text-emerald-400">Baseline</td>
              </tr>
              <tr className="hover:bg-slate-900/50">
                <td className="py-2.5 text-emerald-400 font-bold">6.6 kV MV Incomer</td>
                <td>CB-02</td>
                <td>1200/5 A</td>
                <td>1200 A (100%)</td>
                <td>0.22</td>
                <td>0.340 s</td>
                <td className="text-emerald-400">+320 ms (Safe)</td>
              </tr>
              <tr className="hover:bg-slate-900/50">
                <td className="py-2.5 text-amber-400 font-bold">33 kV HV Incomer</td>
                <td>CB-01</td>
                <td>250/5 A</td>
                <td>250 A (100%)</td>
                <td>0.38</td>
                <td>0.680 s</td>
                <td className="text-emerald-400">+340 ms (Safe)</td>
              </tr>
              <tr className="hover:bg-slate-900/50">
                <td className="py-2.5 text-indigo-400 font-bold">10 MVA Transformer</td>
                <td>CB-01 + CB-02</td>
                <td>Class PS</td>
                <td>87T Biased Diff</td>
                <td>N/A</td>
                <td>0.025 s (Differential)</td>
                <td className="text-emerald-400">Unit Protection</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Engineering Takeaway */}
      <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800 flex items-start gap-2.5 text-xs text-slate-300">
        <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-emerald-300">
            {lang === 'en' ? 'Final Capstone Engineering Recommendation: ' : lang === 'hi' ? 'अंतिम कैपस्टोन इंजीनियरिंग सिफारिश: ' : 'চূড়ান্ত ক্যাপস্টোন ইঞ্জিনিয়ারিং সুপারিশ: '}
          </span>
          {lang === 'en' && 'All 6.6 kV switchgear circuit breakers must possess a minimum rated breaking capacity of 25 kA (well above the maximum prospective bus fault level of 9.38 kA) with a rated making capacity of 2.55 × 25 = 63.75 kA peak. The 320 ms grading margin between motor feeder (CB-03) and main incomer (CB-02) guarantees that any downstream motor stall or terminal arc will trip only CB-03, keeping the remaining 7.5 MW of critical plant production entirely uninterrupted.'}
          {lang === 'hi' && 'सभी 6.6 kV स्विचगियर ब्रेकर्स में 25 kA की न्यूनतम ब्रेकिंग क्षमता होनी चाहिए। मोटर फीडर और मुख्य इनकमर के बीच 320ms का सुरक्षित मार्जिन सुनिश्चित करता है कि मोटर फॉल्ट पर केवल मोटर फीडर ही ट्रिप हो, बाकी पूरा प्लांट निर्बाध चलता रहे।'}
          {lang === 'bn' && 'সকল ৬.৬ kV সুইচগিয়ার ব্রেকারের ব্রেকিং ক্যাপাসিটি ন্যূনতম ২৫ kA হতে হবে (প্রত্যাশিত ৯.৩৮ kA ফল্ট লেভেলের চেয়ে বেশি)। মোটর ফিডার ও ইনকামারের মধ্যে ৩২০ms গ্রেডিং মার্জিন নিশ্চিত করে যে কোনো মোটর ফল্টে কেবল মোটর ফিডার ট্রিপ হবে এবং পুরো কারখানার উৎপাদন চালু থাকবে।'}
        </div>
      </div>
    </div>
  );
};
