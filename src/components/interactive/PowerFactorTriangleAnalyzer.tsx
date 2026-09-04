import React, { useState, useId } from 'react';
import { Language } from '../../types';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const PowerFactorTriangleAnalyzer: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const controlId = useId();

  // State: Real power P (kW), Reactive power Q (kVAR), Voltage V (V), isLagging
  const [powerP, setPowerP] = useState<number>(100); // 10 kW to 500 kW
  const [powerQ, setPowerQ] = useState<number>(75); // 0 kVAR to 500 kVAR
  const [voltage, setVoltage] = useState<number>(400); // 3-phase line voltage, 200V - 1000V
  const [isLagging, setIsLagging] = useState<boolean>(true); // true = lagging (inductive), false = leading (capacitive)

  // Calculations
  const sKva = Math.sqrt(powerP * powerP + powerQ * powerQ);
  const pf = sKva > 0 ? powerP / sKva : 1;
  const phiRad = Math.acos(Math.min(1, Math.max(0, pf)));
  const phiDeg = (phiRad * 180) / Math.PI;
  // Line current for balanced 3-phase: I = (S * 1000) / (sqrt(3) * V)
  const currentA = (sKva * 1000) / (Math.sqrt(3) * voltage);
  // Current at unity PF: I_unity = (P * 1000) / (sqrt(3) * V)
  const currentUnityA = (powerP * 1000) / (Math.sqrt(3) * voltage);
  // Losses multiplier relative to unity PF: (I / I_unity)^2 = 1 / (PF^2)
  const lossRatio = pf > 0 ? 1 / (pf * pf) : 1;
  const excessLossPercent = (lossRatio - 1) * 100;

  // SVG dimensions for Power Triangle
  const svgWidth = 420;
  const svgHeight = 260;
  const originX = 50;
  const originY = isLagging ? 60 : 200; // if lagging, Q points downward or upward; standard convention: P horizontal, Q vertical

  // Scale factors for visual representation
  const maxDimension = Math.max(powerP, powerQ, 1);
  const scale = 260 / Math.max(maxDimension * 1.3, 100);
  const pPx = Math.min(300, Math.max(40, powerP * scale));
  const qPx = Math.min(150, Math.max(20, powerQ * scale));

  const endXP = originX + pPx;
  const endYQ = isLagging ? originY + qPx : originY - qPx;

  // Translations
  const t = {
    title: {
      en: 'Power Factor Triangle & Apparent Power Analyzer',
      hi: 'पावर फैक्टर त्रिभुज एवं आभासी शक्ति विश्लेषक',
      bn: 'পাওয়ার ফ্যাক্টর ত্রিভুজ ও আপাত ক্ষমতা বিশ্লেষক'
    },
    subtitle: {
      en: 'Visualize the vector relationship between P (kW), Q (kVAR), S (kVA), and current inflation caused by poor power factor.',
      hi: 'P (kW), Q (kVAR), S (kVA) के बीच सदिश संबंध और खराब पावर फैक्टर से धारा वृद्धि को देखें।',
      bn: 'P (kW), Q (kVAR), S (kVA) এর ভেক্টর সম্পর্ক ও দুর্বল পাওয়ার ফ্যাক্টরের কারণে কারেন্ট বৃদ্ধি দেখুন।'
    },
    activePower: { en: 'Active Power P (kW)', hi: 'सक्रिय शक्ति P (kW)', bn: 'অ্যাক্টিভ পাওয়ার P (kW)' },
    reactivePower: { en: 'Reactive Power Q (kVAR)', hi: 'प्रतिक्रियाशील शक्ति Q (kVAR)', bn: 'রিঅ্যাক্টিভ পাওয়ার Q (kVAR)' },
    systemVoltage: { en: 'Line Voltage V_L (V)', hi: 'लाइन वोल्टेज V_L (V)', bn: 'লাইন ভোল্টেজ V_L (V)' },
    loadNature: { en: 'Load Impedance Nature', hi: 'लोड प्रतिबाधा की प्रकृति', bn: 'লোড ইম্পিডেন্সের প্রকৃতি' },
    lagging: { en: 'Lagging (Inductive - Motors, Chokes)', hi: 'लैगिंग (प्रेरक - मोटर्स, चोक)', bn: 'ল্যাগিং (আবেশীয় - মোটর, চোক)' },
    leading: { en: 'Leading (Capacitive - Cables, Banks)', hi: 'लीडिंग (धारिता - केबल, कैपेसिटर)', bn: 'লিডিং (ধারকীয় - ক্যাবল, ধারক)' },
    apparentPower: { en: 'Apparent Power S', hi: 'आभासी शक्ति S', bn: 'আপাত ক্ষমতা S' },
    powerFactor: { en: 'Displacement PF (cos φ)', hi: 'विस्थापन PF (cos φ)', bn: 'ডিসপ্লেসমেন্ট PF (cos φ)' },
    phaseAngle: { en: 'Phase Angle φ', hi: 'फेज कोण φ', bn: 'দশা কোণ φ' },
    lineCurrent: { en: 'Line Current (3-Phase)', hi: 'लाइन धारा (3-फेज)', bn: 'লাইন কারেন্ট (৩-ফেজ)' },
    idealCurrent: { en: 'Current at Unity PF (1.0)', hi: 'यूनिटी PF (1.0) पर धारा', bn: 'ইউনিটি PF (১.০) এ কারেন্ট' },
    cableLosses: { en: 'Feeder I²R Loss Overhead', hi: 'केबल I²R हानि अधिशेष', bn: 'ক্যাবলে অতিরিক্ত I²R অপচয়' },
    engineeringImpact: { en: 'Engineering Impact Insight', hi: 'इंजीनियरिंग प्रभाव अंतर्दृष्टि', bn: 'প্রকৌশলগত প্রভাব পর্যবেক্ষণ' }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-2xl space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h3 className="text-xl font-bold text-amber-400">{t.title[lang]}</h3>
        <p className="text-sm text-slate-400 mt-1">{t.subtitle[lang]}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-5 bg-slate-950 p-5 rounded-lg border border-slate-800">
          <div>
            <div className="flex justify-between items-center text-sm font-semibold mb-1">
              <label htmlFor={`${controlId}-p`} className="text-emerald-400">{t.activePower[lang]}:</label>
              <span className="font-mono text-emerald-300 text-base">{powerP.toFixed(0)} kW</span>
            </div>
            <input
              id={`${controlId}-p`}
              type="range"
              min="10"
              max="500"
              step="5"
              value={powerP}
              onChange={(e) => setPowerP(parseFloat(e.target.value))}
              aria-label="Active power in kilowatts"
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>

          <div>
            <div className="flex justify-between items-center text-sm font-semibold mb-1">
              <label htmlFor={`${controlId}-q`} className="text-sky-400">{t.reactivePower[lang]}:</label>
              <span className="font-mono text-sky-300 text-base">{powerQ.toFixed(0)} kVAR</span>
            </div>
            <input
              id={`${controlId}-q`}
              type="range"
              min="0"
              max="500"
              step="5"
              value={powerQ}
              onChange={(e) => setPowerQ(parseFloat(e.target.value))}
              aria-label="Reactive power in kilovars"
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
            />
          </div>

          <div>
            <div className="flex justify-between items-center text-sm font-semibold mb-1">
              <label htmlFor={`${controlId}-v`} className="text-amber-400">{t.systemVoltage[lang]}:</label>
              <span className="font-mono text-amber-300 text-base">{voltage.toFixed(0)} V</span>
            </div>
            <input
              id={`${controlId}-v`}
              type="range"
              min="200"
              max="1000"
              step="20"
              value={voltage}
              onChange={(e) => setVoltage(parseFloat(e.target.value))}
              aria-label="3-phase line-to-line voltage"
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-300 block mb-2">{t.loadNature[lang]}:</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setIsLagging(true)}
                className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all ${
                  isLagging
                    ? 'bg-amber-600/30 border-amber-500 text-amber-300 shadow-md'
                    : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
                aria-pressed={isLagging}
              >
                {t.lagging[lang]}
              </button>
              <button
                type="button"
                onClick={() => setIsLagging(false)}
                className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all ${
                  !isLagging
                    ? 'bg-sky-600/30 border-sky-500 text-sky-300 shadow-md'
                    : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
                aria-pressed={!isLagging}
              >
                {t.leading[lang]}
              </button>
            </div>
          </div>

          {/* Key Metrics Quick Readout */}
          <div className="pt-2 border-t border-slate-800 space-y-2 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">{t.apparentPower[lang]}:</span>
              <span className="font-mono font-bold text-amber-300 text-sm">{sKva.toFixed(1)} kVA</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">{t.powerFactor[lang]}:</span>
              <span className={`font-mono font-bold text-sm ${pf >= 0.95 ? 'text-emerald-400' : pf >= 0.85 ? 'text-amber-400' : 'text-rose-400'}`}>
                {pf.toFixed(3)} {isLagging ? 'Lag' : 'Lead'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">{t.phaseAngle[lang]}:</span>
              <span className="font-mono font-bold text-slate-200">{phiDeg.toFixed(1)}°</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">{t.lineCurrent[lang]}:</span>
              <span className="font-mono font-bold text-cyan-300 text-sm">{currentA.toFixed(1)} A</span>
            </div>
          </div>
        </div>

        {/* Vector Triangle & Analysis Column */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 flex flex-col items-center justify-center">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="w-full max-w-md h-64"
              role="img"
              aria-label="Power Triangle graphical representation"
            >
              {/* Background grid markings */}
              <line x1="30" y1={originY} x2={svgWidth - 20} y2={originY} stroke="#334155" strokeWidth="1" strokeDasharray="4 3" />
              <line x1={originX} y1="20" x2={originX} y2={svgHeight - 20} stroke="#334155" strokeWidth="1" strokeDasharray="4 3" />

              {/* Triangle path fill */}
              <polygon
                points={`${originX},${originY} ${endXP},${originY} ${endXP},${endYQ}`}
                fill={isLagging ? 'rgba(245, 158, 11, 0.08)' : 'rgba(56, 189, 248, 0.08)'}
                stroke="none"
              />

              {/* Horizontal vector P (Active Power) */}
              <line
                x1={originX}
                y1={originY}
                x2={endXP}
                y2={originY}
                stroke="#10b981"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              {/* Vector arrow head for P */}
              <polygon
                points={`${endXP},${originY} ${endXP - 8},${originY - 4} ${endXP - 8},${originY + 4}`}
                fill="#10b981"
              />
              <text x={(originX + endXP) / 2} y={originY - 10} fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">
                P = {powerP.toFixed(0)} kW
              </text>

              {/* Vertical vector Q (Reactive Power) */}
              <line
                x1={endXP}
                y1={originY}
                x2={endXP}
                y2={endYQ}
                stroke="#38bdf8"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              {/* Vector arrow head for Q */}
              <polygon
                points={`${endXP},${endYQ} ${endXP - 4},${isLagging ? endYQ - 8 : endYQ + 8} ${endXP + 4},${isLagging ? endYQ - 8 : endYQ + 8}`}
                fill="#38bdf8"
              />
              <text
                x={endXP + 12}
                y={(originY + endYQ) / 2 + 4}
                fill="#38bdf8"
                fontSize="11"
                fontWeight="bold"
                textAnchor="start"
              >
                Q = {powerQ.toFixed(0)} kVAR {isLagging ? '(Lag)' : '(Lead)'}
              </text>

              {/* Hypotenuse vector S (Apparent Power) */}
              <line
                x1={originX}
                y1={originY}
                x2={endXP}
                y2={endYQ}
                stroke="#f59e0b"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <polygon
                points={`${endXP},${endYQ} ${endXP - 7},${isLagging ? endYQ - 6 : endYQ + 6} ${endXP - 3},${isLagging ? endYQ - 9 : endYQ + 9}`}
                fill="#f59e0b"
              />
              <text
                x={(originX + endXP) / 2 - 14}
                y={(originY + endYQ) / 2 + (isLagging ? 16 : -10)}
                fill="#f59e0b"
                fontSize="11"
                fontWeight="bold"
                textAnchor="end"
              >
                S = {sKva.toFixed(1)} kVA
              </text>

              {/* Phase angle arc */}
              <path
                d={`M ${originX + 28} ${originY} A 28 28 0 0 ${isLagging ? 1 : 0} ${originX + 28 * Math.cos(phiRad)} ${isLagging ? originY + 28 * Math.sin(phiRad) : originY - 28 * Math.sin(phiRad)}`}
                fill="none"
                stroke="#f43f5e"
                strokeWidth="2"
              />
              <text x={originX + 36} y={isLagging ? originY + 16 : originY - 10} fill="#f43f5e" fontSize="10" fontWeight="bold">
                φ={phiDeg.toFixed(1)}°
              </text>

              {/* Origin dot */}
              <circle cx={originX} cy={originY} r="4" fill="#cbd5e1" />
            </svg>

            <div className="text-xs text-slate-400 font-mono text-center mt-1">
              S² = P² + Q²  ⇒  ({sKva.toFixed(1)})² = ({powerP})² + ({powerQ})²
            </div>
          </div>

          {/* Loss and Capacity Impact Dashboard */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="text-xs text-slate-400 mb-1">{t.idealCurrent[lang]}</div>
              <div className="text-base font-bold font-mono text-emerald-400">{currentUnityA.toFixed(1)} A</div>
              <div className="text-[11px] text-slate-500 mt-1">
                At PF = 1.0 (Zero reactive current)
              </div>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="text-xs text-slate-400 mb-1">{t.cableLosses[lang]}</div>
              <div className={`text-base font-bold font-mono ${excessLossPercent > 30 ? 'text-rose-400' : 'text-amber-400'}`}>
                +{excessLossPercent.toFixed(1)}%
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                Proportional to (1/PF)² = {(1 / (pf * pf)).toFixed(2)}×
              </div>
            </div>
          </div>

          <div className="bg-slate-950/80 p-3.5 rounded-lg border border-slate-800 text-xs text-slate-300 leading-relaxed">
            <span className="font-semibold text-amber-400">{t.engineeringImpact[lang]}: </span>
            {lang === 'hi' ? (
              <>
                कम पावर फैक्टर ({pf.toFixed(2)}) के कारण लाइन धारा <strong>{currentA.toFixed(1)} A</strong> तक बढ़ जाती है जबकि केवल सक्रिय शक्ति के लिए आवश्यक धारा <strong>{currentUnityA.toFixed(1)} A</strong> है। यह अतिरिक्त धारा केबल और ट्रांसफार्मर को ओवरलोड करती है और ट्रांसमिशन में <strong>+{excessLossPercent.toFixed(0)}%</strong> अतिरिक्त I²R थर्मल हानि पैदा करती है।
              </>
            ) : lang === 'bn' ? (
              <>
                কম পাওয়ার ফ্যাক্টরের ({pf.toFixed(2)}) কারণে লাইন কারেন্ট <strong>{currentA.toFixed(1)} A</strong> এ বৃদ্ধি পায়, যেখানে প্রকৃত ক্ষমতার জন্য দরকার মাত্র <strong>{currentUnityA.toFixed(1)} A</strong>। এই অতিরিক্ত কারেন্ট ক্যাবল ও ট্রান্সফরমারকে উত্তপ্ত করে এবং লাইনে <strong>+{excessLossPercent.toFixed(0)}%</strong> অতিরিক্ত I²R অপচয় তৈরি করে।
              </>
            ) : (
              <>
                Operating at PF = <strong>{pf.toFixed(3)}</strong> inflates feeder line current to <strong>{currentA.toFixed(1)} A</strong> compared to the minimum <strong>{currentUnityA.toFixed(1)} A</strong> required at unity PF. This circulating reactive current consumes <strong>{(sKva - powerP).toFixed(1)} kVA</strong> of unused substation transformer capacity and increases line heat dissipation by <strong>+{excessLossPercent.toFixed(1)}%</strong>.
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
