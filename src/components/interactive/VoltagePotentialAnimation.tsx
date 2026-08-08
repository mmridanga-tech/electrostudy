import React, { useState, useEffect } from 'react';
import { Sliders, ArrowDown, Activity } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface VoltagePotentialAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'Voltage & Electrical Potential Difference',
    subtitle: 'Visualize voltage as the electrical potential energy difference driving electric charge from high to low potential.',
    potentialA: 'Point A Potential (V_A)',
    potentialB: 'Point B Potential (V_B)',
    potentialDiff: 'Potential Difference (V = V_A - V_B)',
    highPotential: 'High Potential Platform (Point A)',
    lowPotential: 'Low Potential Platform (Point B)',
    chargeMotion: 'Charge Motion Down Potential Slope',
    calloutTitle: 'Electrical Potential Concept',
    calloutText: 'Voltage (or potential difference) is the work required to move a unit charge between two points in an electric field. Just as water flows naturally from high elevation to low elevation, electric charges flow from higher potential to lower potential.',
    formulaText: 'V_{AB} = V_A - V_B  [Volts, V]',
  },
  hi: {
    title: 'वोल्टेज एवं विभवांतर (Potential Difference)',
    subtitle: 'विभवांतर को उच्च विभव से निम्न विभव की ओर विद्युत आवेश को धकेलने वाली ऊर्जा के रूप में देखें।',
    potentialA: 'बिंदु A का विभव (V_A)',
    potentialB: 'बिंदु B का विभव (V_B)',
    potentialDiff: 'विभवांतर (V = V_A - V_B)',
    highPotential: 'उच्च विभव स्तर (बिंदु A)',
    lowPotential: 'निम्न विभव स्तर (बिंदु B)',
    chargeMotion: 'विभव ढलान पर आवेश की गति',
    calloutTitle: 'विद्युत विभव की अवधारणा',
    calloutText: 'वोल्टेज (या विभवांतर) विद्युत क्षेत्र में दो बिंदुओं के बीच इकाई आवेश को ले जाने में किया गया कार्य है। जैसे पानी स्वाभाविक रूप से ऊंचाई से नीचे की ओर बहता है, वैसे ही विद्युत आवेश उच्च विभव से निम्न विभव की ओर प्रवाहित होता है।',
    formulaText: 'V_{AB} = V_A - V_B  [वोल्ट, V]',
  },
  bn: {
    title: 'ভোল্টেজ ও বিভব পার্থক্য (Potential Difference)',
    subtitle: 'ভোল্টেজকে উচ্চ বিভব থেকে নিম্ন বিভবের দিকে তড়িৎ আধান চালনাকারী বিভব শক্তি হিসাবে প্রত্যক্ষ করুন।',
    potentialA: 'বিন্দু A এর বিভব (V_A)',
    potentialB: 'বিন্দু B এর বিভব (V_B)',
    potentialDiff: 'বিভব পার্থক্য (V = V_A - V_B)',
    highPotential: 'উচ্চ বিভব স্তর (বিন্দু A)',
    lowPotential: 'নিম্ন বিভব স্তর (বিন্দু B)',
    chargeMotion: 'বিভবের ঢাল বরাবর আধানের গতি',
    calloutTitle: 'তড়িৎ বিভবের ধারণা',
    calloutText: 'ভোল্টেজ (বা বিভব পার্থক্য) হলো তড়িৎ ক্ষেত্রে দুটি বিন্দুর মধ্যে একক আধান স্থানান্তর করতে কৃত কাজ। যেমন পানি উঁচু স্থান থেকে নিচু স্থানে প্রবাহিত হয়, তেমনি তড়িৎ আধান উচ্চ বিভব থেকে নিম্ন বিভবে প্রবাহিত হয়।',
    formulaText: 'V_{AB} = V_A - V_B  [ভোল্ট, V]',
  }
};

export const VoltagePotentialAnimation: React.FC<VoltagePotentialAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const [vA, setVA] = useState<number>(24); // 0 to 36 V
  const [vB, setVB] = useState<number>(6);  // 0 to 36 V
  const [ballPos, setBallPos] = useState<number>(0); // 0 to 1 along slope

  const vDiff = vA - vB;

  const handleReset = () => {
    setVA(24);
    setVB(6);
    setBallPos(0);
  };

  const reducedMotion = useReducedMotion();

  // Charge rolling down slope animation
  useEffect(() => {
    if (Math.abs(vDiff) < 0.1 || reducedMotion) return;

    let animId: number;
    let lastTime = performance.now();

    const speed = Math.abs(vDiff) * 0.08; // speed scales with voltage difference!

    const loop = (now: number) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      setBallPos(prev => {
        let next = prev + (vDiff > 0 ? speed * dt : -speed * dt);
        if (next > 1) next = 0;
        if (next < 0) next = 1;
        return next;
      });

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [vDiff]);

  // SVG Coordinates
  // Left platform A (Point A): Y depends on vA (higher vA = lower Y pixel)
  // Right platform B (Point B): Y depends on vB
  const maxV = 36;
  const getYForV = (v: number) => 150 - (v / maxV) * 110;

  const yA = getYForV(vA);
  const yB = getYForV(vB);

  // Ball coordinates along line from (60, yA) to (280, yB)
  const bx = 60 + ballPos * 220;
  const by = yA + ballPos * (yB - yA);

  return (
    <InteractiveSimulationCard
      currentLanguage={currentLanguage}
      title={t.title}
      subtitle={t.subtitle}
      onReset={handleReset}
      calloutTitle={t.calloutTitle}
      calloutText={t.calloutText}
      formulaText={t.formulaText}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Visual Potential Slope Canvas */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
            <span>Potential Gradient Diagram</span>
            <span className={vDiff >= 0 ? 'text-cyan-300 font-bold' : 'text-rose-400 font-bold'}>
              V_{'{AB}'} = {vDiff > 0 ? `+${vDiff}` : vDiff} V
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center relative min-h-[220px]">
            <svg viewBox="0 0 340 200" className="w-full max-w-md h-52 select-none">
              {/* Background Grid */}
              <line x1="20" y1="160" x2="320" y2="160" stroke="#334155" strokeWidth="2" />
              <text x="320" y="175" textAnchor="end" fill="#64748b" fontSize="10" fontFamily="monospace">GND (0V)</text>

              {/* Point A Platform */}
              <line x1="20" y1={yA} x2="80" y2={yA} stroke="#38bdf8" strokeWidth="4" />
              <text x="50" y={yA - 10} textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold" fontFamily="monospace">
                V_A = {vA}V
              </text>

              {/* Point B Platform */}
              <line x1="260" y1={yB} x2="320" y2={yB} stroke="#10b981" strokeWidth="4" />
              <text x="290" y={yB - 10} textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="bold" fontFamily="monospace">
                V_B = {vB}V
              </text>

              {/* Slope Line connecting A and B */}
              <line x1="60" y1={yA} x2="280" y2={yB} stroke="#f59e0b" strokeWidth="3" strokeDasharray="4 4" />

              {/* Rolling Charge Particle (+Q) */}
              <circle cx={bx} cy={by - 10} r="12" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
              <text x={bx} y={by - 6} textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">+Q</text>

              {/* Potential Difference Arrow Indicator */}
              <g transform="translate(170, 90)">
                <line x1="0" y1={-Math.abs(yB - yA) / 2} x2="0" y2={Math.abs(yB - yA) / 2} stroke="#38bdf8" strokeWidth="2" strokeDasharray="2 2" />
                <rect x="-45" y="-12" width="90" height="24" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" rx="4" />
                <text x="0" y="4" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold" fontFamily="monospace">
                  ΔV = {Math.abs(vDiff)} V
                </text>
              </g>

              {/* Motion Direction Arrow */}
              {Math.abs(vDiff) > 0 && (
                <text x="170" y="185" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  {vDiff > 0 ? 'Charge flows A → B (High to Low)' : 'Charge flows B → A (High to Low)'}
                </text>
              )}
            </svg>

            {/* Readout */}
            <div className="grid grid-cols-3 gap-2 w-full mt-2 text-center">
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400 font-mono">Platform A</div>
                <div className="text-sm font-bold text-cyan-300 font-mono">{vA} V</div>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400 font-mono">Platform B</div>
                <div className="text-sm font-bold text-emerald-300 font-mono">{vB} V</div>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400 font-mono">Voltage (V_AB)</div>
                <div className="text-sm font-bold text-amber-300 font-mono">{vDiff} V</div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4 print-hidden">
            {/* V_A Slider */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-bold text-cyan-300">
                <span className="flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>{t.potentialA}</span>
                </span>
                <span className="font-mono text-cyan-300">{vA} V</span>
              </div>
              <input
                type="range"
                min={0}
                max={36}
                step={1}
                value={vA}
                onChange={(e) => setVA(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                aria-label="Point A Potential slider"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>0 V</span>
                <span>18 V</span>
                <span>36 V</span>
              </div>
            </div>

            {/* V_B Slider */}
            <div className="space-y-1.5 border-t border-slate-800/80 pt-3">
              <div className="flex items-center justify-between text-xs font-bold text-emerald-300">
                <span className="flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>{t.potentialB}</span>
                </span>
                <span className="font-mono text-emerald-300">{vB} V</span>
              </div>
              <input
                type="range"
                min={0}
                max={36}
                step={1}
                value={vB}
                onChange={(e) => setVB(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                aria-label="Point B Potential slider"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>0 V</span>
                <span>18 V</span>
                <span>36 V</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
