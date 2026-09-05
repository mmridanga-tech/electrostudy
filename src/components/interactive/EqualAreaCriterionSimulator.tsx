import React, { useState, useId } from 'react';
import { Language } from '../../types';
import { ShieldCheck, AlertOctagon, Activity, Sliders, Zap, CheckCircle2, RotateCcw } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const EqualAreaCriterionSimulator: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const idPrefix = useId();

  // Inputs
  const [pm, setPm] = useState<number>(0.80);          // Mechanical shaft power (p.u.)
  const [pmax1, setPmax1] = useState<number>(1.80);    // Pre-fault Pmax (p.u.)
  const [pmax2, setPmax2] = useState<number>(0.30);    // During-fault Pmax (p.u.)
  const [pmax3, setPmax3] = useState<number>(1.35);    // Post-fault Pmax (p.u.)
  const [hConst, setHConst] = useState<number>(4.0);   // Inertia constant H (MJ/MVA = seconds)
  const [clearingAngleDeg, setClearingAngleDeg] = useState<number>(55); // User-selected clearing angle (deg)

  const f0 = 50; // Hz
  const omega0 = 2 * Math.PI * f0; // 314.159 rad/s

  // Initial power angle delta_0: Pm = Pmax1 * sin(delta_0)
  const delta0Rad = Math.asin(Math.min(0.99, Math.max(0.01, pm / pmax1)));
  const delta0Deg = (delta0Rad * 180) / Math.PI;

  // Maximum allowable post-fault swing angle delta_max: Pm = Pmax3 * sin(pi - delta_max)
  const deltaMaxRad = Math.PI - Math.asin(Math.min(0.99, Math.max(0.01, pm / pmax3)));
  const deltaMaxDeg = (deltaMaxRad * 180) / Math.PI;

  // Critical Clearing Angle delta_cr calculation:
  // cos(delta_cr) = [ Pm*(delta_max - delta_0) - Pmax2*cos(delta_0) + Pmax3*cos(delta_max) ] / (Pmax3 - Pmax2)
  const numerator = pm * (deltaMaxRad - delta0Rad) - pmax2 * Math.cos(delta0Rad) + pmax3 * Math.cos(deltaMaxRad);
  const denominator = pmax3 - pmax2;
  const cosDeltaCr = numerator / (denominator || 0.01);
  const isCrSolvable = cosDeltaCr >= -1 && cosDeltaCr <= 1;
  const deltaCrRad = isCrSolvable ? Math.acos(cosDeltaCr) : Math.PI / 2;
  const deltaCrDeg = (deltaCrRad * 180) / Math.PI;

  // Critical Clearing Time t_cr (assuming during fault Pm is constant and Pe = Pmax2*sin(delta)):
  // Approx classical formula for solid fault (Pmax2=0): t_cr = sqrt( (4 * H * (deltaCr - delta0)) / (omega0 * Pm) )
  const tCrSec = Math.sqrt(Math.max(0, (4 * hConst * (deltaCrRad - delta0Rad)) / (omega0 * pm)));

  // Selected Clearing Angle state
  const deltaCRad = (clearingAngleDeg * Math.PI) / 180;
  const isStable = clearingAngleDeg <= deltaCrDeg;

  // Accelerating Area A1:
  // Integral from delta0 to deltaC of (Pm - Pmax2*sin(delta)) d_delta
  // = Pm*(deltaC - delta0) + Pmax2*(cos(deltaC) - cos(delta0))
  const areaA1 = Math.max(0, pm * (deltaCRad - delta0Rad) + pmax2 * (Math.cos(deltaCRad) - Math.cos(delta0Rad)));

  // Maximum Decelerating Area A2_max:
  // Integral from deltaC to deltaMax of (Pmax3*sin(delta) - Pm) d_delta
  // = -Pmax3*(cos(deltaMax) - cos(deltaC)) - Pm*(deltaMax - deltaC)
  const areaA2Max = Math.max(0, -pmax3 * (Math.cos(deltaMaxRad) - Math.cos(deltaCRad)) - pm * (deltaMaxRad - deltaCRad));

  const t = {
    en: {
      title: 'Equal-Area Criterion & Transient Stability Simulator',
      subtitle: 'Analyze critical clearing angle (δ_cr) and swing dynamics following severe transmission grid short-circuits',
      controlsTitle: 'Turbine-Generator & Fault Parameters',
      pmLabel: 'Shaft Mechanical Power (P_m, p.u.):',
      pmax1Label: 'Pre-Fault Peak Capacity (P_max1):',
      pmax2Label: 'During-Fault Peak Capacity (P_max2):',
      pmax3Label: 'Post-Fault Peak Capacity (P_max3):',
      hLabel: 'Machine Inertia Constant (H, seconds):',
      clearingSlider: 'Circuit-Breaker Clearing Angle (δ_c):',
      stabilityVerdict: 'Transient Rotor Angle Stability Verdict:',
      stableText: 'SYSTEM IS TRANSIENTLY STABLE (A2 >= A1)',
      unstableText: 'ROTOR RUNAWAY & SYSTEM POLE-SLIP UNSTABLE (A1 > A2_max)',
      deltaCrLabel: 'Critical Clearing Angle (δ_cr):',
      tCrLabel: 'Critical Clearing Time (t_cr):',
      delta0Label: 'Initial Steady-State Angle (δ_0):',
      deltaMaxLabel: 'Maximum Return Swing Angle (δ_max):',
      a1Label: 'Accelerating Kinetic Energy Area (A1):',
      a2Label: 'Available Decelerating Energy Area (A2_max):',
      autoClearBtn: 'Set Clearing Angle to δ_cr'
    },
    hi: {
      title: 'समान-क्षेत्र मानदंड एवं क्षणिक स्थिरता सिम्युलेटर',
      subtitle: 'ट्रांसमिशन शॉर्ट-सर्किट के बाद क्रिटिकल क्लियरिंग कोण (δ_cr) और स्विंग डायनेमिक्स का विश्लेषण करें',
      controlsTitle: 'टर्बाइन-जनरेटर एवं फॉल्ट पैरामीटर',
      pmLabel: 'शाफ्ट यांत्रिक शक्ति (P_m, p.u.):',
      pmax1Label: 'प्री-फॉल्ट अधिकतम क्षमता (P_max1):',
      pmax2Label: 'फॉल्ट के दौरान क्षमता (P_max2):',
      pmax3Label: 'फॉल्ट के बाद क्षमता (P_max3):',
      hLabel: 'मशीन जड़त्व स्थिरांक (H, सेकंड):',
      clearingSlider: 'सर्किट-ब्रेकर क्लियरिंग कोण (δ_c):',
      stabilityVerdict: 'क्षणिक रोटर कोण स्थिरता निर्णय:',
      stableText: 'प्रणाली क्षणिक रूप से स्थिर है (A2 >= A1)',
      unstableText: 'रोटर आउट-ऑफ-स्टेप अस्थिर है (A1 > A2_max)',
      deltaCrLabel: 'क्रिटिकल क्लियरिंग कोण (δ_cr):',
      tCrLabel: 'क्रिटिकल क्लियरिंग समय (t_cr):',
      delta0Label: 'प्रारंभिक स्थिर-अवस्था कोण (δ_0):',
      deltaMaxLabel: 'अधिकतम रिटर्न स्विंग कोण (δ_max):',
      a1Label: 'त्वरक गतिज ऊर्जा क्षेत्र (A1):',
      a2Label: 'उपलब्ध मंदक ऊर्जा क्षेत्र (A2_max):',
      autoClearBtn: 'क्लियरिंग कोण को δ_cr पर सेट करें'
    },
    bn: {
      title: 'ইকুয়াল-এরিয়া ক্রাইটেরিয়ন ও ক্ষণস্থায়ী স্থায়িত্ব সিমুলেটর',
      subtitle: 'গ্রিড শর্ট-সার্কিটের পর ক্রিটিক্যাল ক্লিয়ারিং কোণ (δ_cr) এবং রোটর সুইং ডায়নামিক্স বিশ্লেষণ করুন',
      controlsTitle: 'টারবাইন-জেনারেটর ও ফল্ট প্যারামিটার',
      pmLabel: 'শাফট মেকানিক্যাল পাওয়ার (P_m, p.u.):',
      pmax1Label: 'প্রি-ফল্ট পিক ক্ষমতা (P_max1):',
      pmax2Label: 'ফল্ট চলাকালীন ক্ষমতা (P_max2):',
      pmax3Label: 'ফল্ট পরবর্তী ক্ষমতা (P_max3):',
      hLabel: 'মেশিন জড়তা ধ্রুবক (H, সেকেন্ড):',
      clearingSlider: 'ব্রেকার ক্লিয়ারিং কোণ (δ_c):',
      stabilityVerdict: 'রোটর অ্যাঙ্গেল স্থায়িত্ব ফলাফল:',
      stableText: 'সিস্টেম ক্ষণস্থায়ীভাবে স্থিতিশীল (A2 >= A1)',
      unstableText: 'রোটর আউট-অব-স্টেপ ও অস্থিতিশীল (A1 > A2_max)',
      deltaCrLabel: 'ক্রিটিক্যাল ক্লিয়ারিং কোণ (δ_cr):',
      tCrLabel: 'ক্রিটিক্যাল ক্লিয়ারিং সময় (t_cr):',
      delta0Label: 'প্রাথমিক স্থির কোণ (δ_0):',
      deltaMaxLabel: 'সর্বোচ্চ রিটার্ন সুইং কোণ (δ_max):',
      a1Label: 'ত্বরণ গতিশক্তি ক্ষেত্রফল (A1):',
      a2Label: 'উপলব্ধ মন্দন শক্তি ক্ষেত্রফল (A2_max):',
      autoClearBtn: 'ক্লিয়ারিং কোণ δ_cr এ সেট করুন'
    }
  }[lang];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-white shadow-xl max-w-4xl mx-auto my-6">
      {/* Header */}
      <div className="flex items-start justify-between border-b border-slate-800 pb-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-amber-400" />
            <h3 className="text-xl font-bold text-amber-400">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-400 mt-1">{t.subtitle}</p>
        </div>
        <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-full text-xs font-mono font-semibold">
          Swing Eq: M·d²δ/dt² = Pm - Pe
        </span>
      </div>

      {/* Stability Verdict Banner */}
      <div
        className={`p-3.5 rounded-xl border mb-5 flex items-center justify-between transition-all ${
          isStable
            ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300'
            : 'bg-rose-950/40 border-rose-500/50 text-rose-300'
        }`}
      >
        <div className="flex items-center gap-2.5">
          {isStable ? (
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
          ) : (
            <AlertOctagon className="w-6 h-6 text-rose-500 shrink-0" />
          )}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {t.stabilityVerdict}
            </div>
            <div className="text-sm font-extrabold mt-0.5">
              {isStable ? t.stableText : t.unstableText}
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setClearingAngleDeg(Math.round(deltaCrDeg))}
          className="text-xs px-3 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-slate-200 transition-all"
        >
          {t.autoClearBtn}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Interactive Controls */}
        <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800 space-y-4">
          <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5" /> {t.controlsTitle}
          </h4>

          {/* Clearing Angle Slider */}
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <label htmlFor={`${idPrefix}-clearing`} className="font-bold text-amber-300">
                {t.clearingSlider}
              </label>
              <span className={`font-mono font-extrabold ${isStable ? 'text-emerald-400' : 'text-rose-400'}`}>
                δ_c = {clearingAngleDeg}° (Limit: {deltaCrDeg.toFixed(1)}°)
              </span>
            </div>
            <input
              id={`${idPrefix}-clearing`}
              type="range"
              min={Math.round(delta0Deg)}
              max={Math.min(140, Math.round(deltaMaxDeg))}
              step="1"
              value={clearingAngleDeg}
              onChange={(e) => setClearingAngleDeg(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
          </div>

          {/* Mechanical Power Pm */}
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <label htmlFor={`${idPrefix}-pm`}>{t.pmLabel}</label>
              <span className="font-mono text-sky-400 font-bold">{pm.toFixed(2)} p.u.</span>
            </div>
            <input
              id={`${idPrefix}-pm`}
              type="range"
              min="0.40"
              max="1.10"
              step="0.05"
              value={pm}
              onChange={(e) => setPm(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-400"
            />
          </div>

          {/* Pmax values */}
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label htmlFor={`${idPrefix}-pmax1`} className="block text-[11px] text-slate-400 mb-1">Pre-Fault (Pmax1)</label>
              <input
                id={`${idPrefix}-pmax1`}
                type="number"
                step="0.1"
                value={pmax1}
                onChange={(e) => setPmax1(Math.max(pm + 0.1, parseFloat(e.target.value) || 1))}
                className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-white font-mono"
              />
            </div>
            <div>
              <label htmlFor={`${idPrefix}-pmax2`} className="block text-[11px] text-slate-400 mb-1">During-Fault (Pmax2)</label>
              <input
                id={`${idPrefix}-pmax2`}
                type="number"
                step="0.05"
                value={pmax2}
                onChange={(e) => setPmax2(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-white font-mono"
              />
            </div>
            <div>
              <label htmlFor={`${idPrefix}-pmax3`} className="block text-[11px] text-slate-400 mb-1">Post-Fault (Pmax3)</label>
              <input
                id={`${idPrefix}-pmax3`}
                type="number"
                step="0.05"
                value={pmax3}
                onChange={(e) => setPmax3(Math.max(pm + 0.05, parseFloat(e.target.value) || 1))}
                className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-white font-mono"
              />
            </div>
          </div>

          {/* Inertia Constant H */}
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <label htmlFor={`${idPrefix}-hconst`}>{t.hLabel}</label>
              <span className="font-mono text-purple-400 font-bold">{hConst.toFixed(1)} s</span>
            </div>
            <input
              id={`${idPrefix}-hconst`}
              type="range"
              min="2.0"
              max="8.0"
              step="0.5"
              value={hConst}
              onChange={(e) => setHConst(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-400"
            />
          </div>
        </div>

        {/* Right: Visual P-delta Curves & Dynamic Results */}
        <div className="space-y-4">
          {/* Power Angle Curves Graphic */}
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
            <div className="text-xs font-semibold text-slate-400 mb-1 flex justify-between">
              <span>Equal-Area Power-Angle Diagram (P vs δ)</span>
              <span className="font-mono text-amber-400 text-[11px]">δ_0={delta0Deg.toFixed(0)}°, δ_c={clearingAngleDeg}°, δ_max={deltaMaxDeg.toFixed(0)}°</span>
            </div>
            <svg viewBox="0 0 340 120" className="w-full h-28">
              {/* Axes */}
              <line x1="25" y1="105" x2="330" y2="105" stroke="#475569" strokeWidth="1" />
              <line x1="25" y1="10" x2="25" y2="105" stroke="#475569" strokeWidth="1" />
              <text x="325" y="115" fill="#64748b" fontSize="6.5">δ</text>
              <text x="15" y="15" fill="#64748b" fontSize="6.5">P</text>

              {/* Pm Horizontal Line: y mapped where 2.0 p.u. = y:15, 0 = y:105 */}
              {/* y = 105 - (P / 2.0) * 90 */}
              {(() => {
                const ym = 105 - (pm / 2.0) * 90;
                return (
                  <>
                    <line x1="25" y1={ym} x2="330" y2={ym} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3,3" />
                    <text x="30" y={ym - 3} fill="#f59e0b" fontSize="6.5" fontWeight="bold">Pm = {pm.toFixed(2)}</text>
                  </>
                );
              })()}

              {/* Pre-fault curve Pmax1 (blue) */}
              <path
                d="M 25 105 Q 165 24 305 105"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="1.5"
              />
              {/* Post-fault curve Pmax3 (emerald) */}
              <path
                d="M 25 105 Q 165 44 305 105"
                fill="none"
                stroke="#10b981"
                strokeWidth="1.5"
              />
              {/* During-fault curve Pmax2 (red) */}
              <path
                d="M 25 105 Q 165 91 305 105"
                fill="none"
                stroke="#f43f5e"
                strokeWidth="1.5"
              />

              {/* Angle markers */}
              {(() => {
                // x mapped from 0 to 180 deg -> x from 25 to 305 (1.55 px per deg)
                const x0 = 25 + delta0Deg * 1.55;
                const xc = 25 + clearingAngleDeg * 1.55;
                const xmax = 25 + deltaMaxDeg * 1.55;
                const xcr = 25 + deltaCrDeg * 1.55;

                return (
                  <>
                    {/* Clearing angle vertical line */}
                    <line x1={xc} y1="15" x2={xc} y2="105" stroke={isStable ? '#10b981' : '#f43f5e'} strokeWidth="1.5" strokeDasharray="2,2" />
                    <circle cx={xc} cy="105" r="3" fill={isStable ? '#10b981' : '#f43f5e'} />
                    <text x={xc} y="115" fill={isStable ? '#10b981' : '#f43f5e'} fontSize="6.5" textAnchor="middle" fontWeight="bold">δc</text>

                    {/* Critical angle marker */}
                    <circle cx={xcr} cy="105" r="2.5" fill="#f59e0b" />
                    <text x={xcr} y="100" fill="#f59e0b" fontSize="6" textAnchor="middle">δcr</text>
                  </>
                );
              })()}
            </svg>
          </div>

          {/* Results Summary Card */}
          <div className="bg-gradient-to-br from-slate-950 to-slate-900 p-4 rounded-xl border border-amber-500/30 space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">{t.deltaCrLabel}</span>
              <span className="font-mono text-amber-300 font-extrabold text-sm">
                {deltaCrDeg.toFixed(2)}° ({(deltaCrRad).toFixed(3)} rad)
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">{t.tCrLabel}</span>
              <span className="font-mono text-sky-400 font-bold text-sm">
                {tCrSec.toFixed(3)} s ({Math.round(tCrSec * 1000)} ms)
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">{t.a1Label}</span>
              <span className="font-mono text-rose-400 font-bold">{areaA1.toFixed(3)} rad·pu</span>
            </div>

            <div className="flex justify-between py-1">
              <span className="text-slate-400">{t.a2Label}</span>
              <span className="font-mono text-emerald-400 font-bold">{areaA2Max.toFixed(3)} rad·pu</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
