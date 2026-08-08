import React, { useState, useEffect } from 'react';
import { Sliders } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface ResistanceAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'Resistance & Microscopic Conductor Model',
    subtitle: 'Observe how lattice atoms resist electron flow, and how conductor length (L) and cross-sectional area (A) dictate resistance.',
    length: 'Conductor Length (L)',
    area: 'Cross-Section Area (A)',
    voltage: 'Applied Voltage (V)',
    calculatedR: 'Calculated Resistance (R)',
    calculatedI: 'Current Flow (I = V/R)',
    atomicObstacles: 'Lattice Atomic Obstacles (Ions)',
    electronCollisions: 'Electron-Lattice Collisions',
    calloutTitle: 'Resistance & Material Factors',
    calloutText: 'Resistance is the opposition offered by a material to free electron flow. Resistance increases with longer conductor length (L) and decreases with larger cross-sectional area (A): R = ρ·L / A.',
    formulaText: 'R = ρ · (L / A)  ⇒  I = V / R',
  },
  hi: {
    title: 'प्रतिरोध एवं सूक्ष्मदर्शी चालक मॉडल',
    subtitle: 'देखें कि कैसे जालक परमाणु इलेक्ट्रॉन प्रवाह का विरोध करते हैं, और चालक की लंबाई (L) व क्षेत्रफल (A) प्रतिरोध निर्धारित करते हैं।',
    length: 'चालक की लंबाई (L)',
    area: 'अनुप्रस्थ काट क्षेत्रफल (A)',
    voltage: 'लागू वोल्टेज (V)',
    calculatedR: 'गणना किया गया प्रतिरोध (R)',
    calculatedI: 'धारा प्रवाह (I = V/R)',
    atomicObstacles: 'जालक परमाणु बाधाएं (आयन)',
    electronCollisions: 'इलेक्ट्रॉन-जालक टकराव',
    calloutTitle: 'प्रतिरोध एवं चालक के कारक',
    calloutText: 'प्रतिरोध किसी पदार्थ द्वारा मुक्त इलेक्ट्रॉनों के प्रवाह में उत्पन्न की जाने वाली बाधा है। चालक की लंबाई (L) बढ़ने पर प्रतिरोध बढ़ता है और क्षेत्रफल (A) बढ़ने पर घटता है: R = ρ·L / A।',
    formulaText: 'R = ρ · (L / A)  ⇒  I = V / R',
  },
  bn: {
    title: 'রোধ ও অণুবীক্ষণিক পরিবাহী মডেল',
    subtitle: 'দেখুন কিভাবে পরিবাহীর পরমাণুগুলো ইলেকট্রন প্রবাহে বাধা দেয়, এবং দৈর্ঘ্য (L) ও ক্ষেত্রফল (A) রোধ নির্ধারণ করে।',
    length: 'পরিবাহীর দৈর্ঘ্য (L)',
    area: 'প্রস্থচ্ছেদের ক্ষেত্রফল (A)',
    voltage: 'প্রযুক্ত ভোল্টেজ (V)',
    calculatedR: 'গণনাকৃত রোধ (R)',
    calculatedI: 'তড়িৎ প্রবাহ (I = V/R)',
    atomicObstacles: 'পারমাণবিক জালি বাধা (আয়ন)',
    electronCollisions: 'ইলেকট্রন-জালি সংঘর্ষ',
    calloutTitle: 'রোধ ও পরিবাহীর উপাদানসমূহ',
    calloutText: 'রোধ হলো মুক্ত ইলেকট্রন প্রবাহের প্রতি পরিবাহীর বাধা। দৈর্ঘ্য (L) বাড়লে রোধ বাড়ে এবং প্রস্থচ্ছেদের ক্ষেত্রফল (A) বাড়লে রোধ কমে: R = ρ·L / A।',
    formulaText: 'R = ρ · (L / A)  ⇒  I = V / R',
  }
};

export const ResistanceAnimation: React.FC<ResistanceAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const [lengthVal, setLengthVal] = useState<number>(3); // 1 to 5
  const [areaVal, setAreaVal] = useState<number>(3);   // 1 to 5
  const [voltageVal, setVoltageVal] = useState<number>(12); // 1 to 24 V

  // Resistivity constant rho = 2 relative units
  const rho = 2;
  const resistance = (rho * lengthVal) / areaVal; // 0.4 Ω to 10 Ω
  const current = voltageVal / resistance;

  const [electronOffsets, setElectronOffsets] = useState<number[]>([10, 40, 70, 100, 130, 160]);

  const reducedMotion = useReducedMotion();

  // Motion animation
  useEffect(() => {
    if (reducedMotion) return;
    let animId: number;
    let lastTime = performance.now();

    // Speed proportional to current
    const loop = (now: number) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      const speed = current * 12;

      setElectronOffsets(prev => prev.map(pos => (pos + speed * dt) % 200));

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [current]);

  const handleReset = () => {
    setLengthVal(3);
    setAreaVal(3);
    setVoltageVal(12);
  };

  // SVG parameters
  // Conductor tube width scales with Length L (120px to 240px)
  // Conductor tube height scales with Area A (24px to 60px)
  const tubeW = 100 + lengthVal * 30;
  const tubeH = 20 + areaVal * 10;
  const tubeX = 170 - tubeW / 2;
  const tubeY = 100 - tubeH / 2;

  // Grid of copper ions inside tube
  const ionCountX = Math.round(lengthVal * 3);
  const ionCountY = Math.round(areaVal * 2);

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
        {/* Conductor Tube Canvas */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
            <span>Conductor Lattice View</span>
            <span className="text-emerald-400 font-bold font-mono">R = {resistance.toFixed(2)} Ω</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center relative min-h-[220px]">
            <svg viewBox="0 0 340 200" className="w-full max-w-md h-52 select-none">
              {/* Conductor Copper Tube */}
              <rect x={tubeX} y={tubeY} width={tubeW} height={tubeH} fill="#1e293b" stroke="#f59e0b" strokeWidth="2.5" rx="6" />

              {/* Lattice Copper Ions (+ Cu²⁺) */}
              {Array.from({ length: ionCountX }).map((_, ix) => {
                const ixPos = tubeX + ((ix + 0.5) * tubeW) / ionCountX;
                return Array.from({ length: ionCountY }).map((_, iy) => {
                  const iyPos = tubeY + ((iy + 0.5) * tubeH) / ionCountY;
                  return (
                    <g key={`ion-${ix}-${iy}`} transform={`translate(${ixPos}, ${iyPos})`}>
                      <circle cx="0" cy="0" r="4" fill="#ef4444" opacity="0.9" />
                      <text x="0" y="2.5" textAnchor="middle" fill="#ffffff" fontSize="6" fontWeight="bold">+</text>
                    </g>
                  );
                });
              })}

              {/* Moving Free Electrons */}
              {electronOffsets.map((offset, idx) => {
                const ex = tubeX + (offset % tubeW);
                const ey = tubeY + 8 + ((idx * 17) % (tubeH - 16));
                return (
                  <g key={`el-${idx}`} transform={`translate(${ex}, ${ey})`}>
                    <circle cx="0" cy="0" r="3.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="0.8" />
                    <text x="0" y="2" textAnchor="middle" fill="#000000" fontSize="6" fontWeight="bold">-</text>
                  </g>
                );
              })}

              {/* Conductor Dimension Markers */}
              <text x={170} y={tubeY - 8} textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="monospace">
                Length (L = {lengthVal})
              </text>
              <text x={tubeX - 8} y={100} textAnchor="end" fill="#34d399" fontSize="10" fontWeight="bold" fontFamily="monospace">
                Area (A = {areaVal})
              </text>
            </svg>

            {/* Readouts */}
            <div className="grid grid-cols-3 gap-2 w-full mt-2 text-center text-xs">
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400 font-mono">Voltage (V)</div>
                <div className="text-sm font-bold text-cyan-300 font-mono">{voltageVal} V</div>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400 font-mono">Resistance (R)</div>
                <div className="text-sm font-bold text-emerald-300 font-mono">{resistance.toFixed(2)} Ω</div>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400 font-mono">Current (I)</div>
                <div className="text-sm font-bold text-amber-300 font-mono">{current.toFixed(2)} A</div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4 print-hidden">
            {/* Length Slider */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold text-cyan-300">
                <span>{t.length}</span>
                <span className="font-mono">{lengthVal}</span>
              </div>
              <input
                type="range"
                min={1}
                max={5}
                value={lengthVal}
                onChange={(e) => setLengthVal(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                aria-label="Conductor length slider"
              />
            </div>

            {/* Area Slider */}
            <div className="space-y-1 border-t border-slate-800/80 pt-2">
              <div className="flex justify-between text-xs font-bold text-emerald-300">
                <span>{t.area}</span>
                <span className="font-mono">{areaVal}</span>
              </div>
              <input
                type="range"
                min={1}
                max={5}
                value={areaVal}
                onChange={(e) => setAreaVal(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                aria-label="Conductor area slider"
              />
            </div>

            {/* Voltage Slider */}
            <div className="space-y-1 border-t border-slate-800/80 pt-2">
              <div className="flex justify-between text-xs font-bold text-amber-300">
                <span>{t.voltage}</span>
                <span className="font-mono">{voltageVal} V</span>
              </div>
              <input
                type="range"
                min={1}
                max={24}
                value={voltageVal}
                onChange={(e) => setVoltageVal(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                aria-label="Voltage slider"
              />
            </div>
          </div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
