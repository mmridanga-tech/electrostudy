import React, { useState } from 'react';
import { Language } from '../../types';
import { InteractiveSimulationCard } from './InteractiveSimulationCard';
import { Play, Pause, RotateCw, Activity, Cpu, Sliders } from 'lucide-react';

interface InductionMotorAnimationProps {
  currentLanguage: Language;
}

export const InductionMotorAnimation: React.FC<InductionMotorAnimationProps> = ({ currentLanguage }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [loadTorque, setLoadTorque] = useState(50); // % load
  const [poles, setPoles] = useState(4); // 2, 4, 6
  const [frequency, setFrequency] = useState(50); // Hz

  // Calculate parameters
  const syncSpeed = (120 * frequency) / poles; // RPM
  const fullLoadSlip = 0.04;
  const slip = Math.min(0.15, (loadTorque / 100) * fullLoadSlip * (loadTorque > 80 ? 1.5 : 1));
  const rotorSpeed = Math.round(syncSpeed * (1 - slip));
  const rotorFrequency = (slip * frequency).toFixed(2);
  const efficiency = Math.max(70, Math.round(92 - (slip * 150) - (loadTorque < 20 ? 15 : 0)));

  const handleReset = () => {
    setIsPlaying(true);
    setLoadTorque(50);
    setPoles(4);
    setFrequency(50);
  };

  return (
    <InteractiveSimulationCard
      title={{
        en: '3-Phase Induction Motor RMF & Torque-Slip Live Simulator',
        hi: '3-फेज इंडक्शन मोटर RMF एवं टॉर्क-स्लिप सिमुलेटर',
        bn: '৩-ফেজ ইন্ডাকশন মোটর RMF ও টর্ক-স্লিপ লাইভ সিমুলেটর'
      }}
      description={{
        en: 'Observe the Rotating Magnetic Field (RMF) at synchronous speed Ns and the lagging mechanical rotor speed Nr as load torque changes.',
        hi: 'लोड टॉर्क बदलने पर तुल्यकालिक गति Ns पर घूमने वाले चुंबकीय क्षेत्र एवं रोटर गति Nr का लाइव अवलोकन करें।',
        bn: 'লোড পরিবর্তন করে সিনক্রোনাস স্পিড Ns ও রোটর স্পিড Nr এর লাইভ ঘূর্ণন ও স্লিপ পরিবর্তন পর্যবেক্ষণ করুন।'
      }}
      currentLanguage={currentLanguage}
      badge="Machines Lab Sim"
      onReset={handleReset}
    >
      <div className="space-y-6">
        {/* Visual Animated Canvas */}
        <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden">
          
          {/* Stator Outer Ring */}
          <div className="absolute w-56 h-56 sm:w-60 sm:h-60 rounded-full border-4 border-dashed border-cyan-500/40 animate-spin" style={{ animationDuration: isPlaying ? `${60 / syncSpeed * 10}s` : '0s' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 px-2 py-0.5 rounded bg-cyan-500 text-[10px] font-bold text-white shadow-xs">RMF (Ns={syncSpeed})</div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 px-2 py-0.5 rounded bg-blue-500 text-[10px] font-bold text-white shadow-xs">S Pole</div>
          </div>

          {/* Stator Core Frame */}
          <div className="absolute w-44 h-44 sm:w-48 sm:h-48 rounded-full border-8 border-slate-700 bg-slate-800/80 flex items-center justify-center">
            
            {/* Squirrel Cage Rotor */}
            <div 
              className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-amber-500/80 bg-gradient-to-br from-amber-900/40 to-slate-900 flex items-center justify-center transition-all"
              style={{
                transform: isPlaying ? undefined : 'none',
                animation: isPlaying ? `spin ${60 / rotorSpeed * 10}s linear infinite` : 'none'
              }}
            >
              {/* Rotor Bars */}
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(deg => (
                <div 
                  key={deg} 
                  className="absolute w-1 h-full bg-amber-400/60 rounded"
                  style={{ transform: `rotate(${deg}deg)` }}
                />
              ))}

              {/* Shaft */}
              <div className="w-10 h-10 rounded-full bg-slate-950 border-2 border-amber-400 flex items-center justify-center z-10 shadow-lg">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              </div>
            </div>
          </div>

          {/* Live Speed Overlay */}
          <div className="absolute bottom-3 left-3 bg-slate-950/90 border border-slate-800 rounded-xl px-3 py-2 text-[11px] font-mono text-slate-300 space-y-0.5 shadow-md">
            <div className="text-cyan-400 font-bold">Synchronous: {syncSpeed} RPM</div>
            <div className="text-amber-400 font-bold">Rotor Speed: {rotorSpeed} RPM</div>
            <div className="text-emerald-400">Slip s: {(slip * 100).toFixed(1)}% ({rotorFrequency} Hz)</div>
          </div>

          {/* Play/Pause Toggle */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-3 right-3 p-2 rounded-xl bg-slate-800/90 border border-slate-700 text-white hover:bg-slate-700 transition-all"
            title={isPlaying ? 'Pause Animation' : 'Play Animation'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>

        {/* Interactive Sliders */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
          
          {/* Load Torque Slider */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
              <span>Mechanical Load:</span>
              <span className="font-mono text-cyan-600 dark:text-cyan-400">{loadTorque}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="120"
              value={loadTorque}
              onChange={(e) => setLoadTorque(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-mono">
              <span>0% (No Load)</span>
              <span>100% (Full Load)</span>
            </div>
          </div>

          {/* Number of Poles */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
              <span>Stator Poles (P):</span>
              <span className="font-mono text-blue-600 dark:text-blue-400">{poles} Poles</span>
            </div>
            <div className="flex gap-2">
              {[2, 4, 6].map(p => (
                <button
                  key={p}
                  onClick={() => setPoles(p)}
                  className={`flex-1 py-1 text-xs font-bold rounded-lg border transition-all ${
                    poles === p 
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm' 
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {p}P ({p === 2 ? '3000' : p === 4 ? '1500' : '1000'} RPM)
                </button>
              ))}
            </div>
          </div>

          {/* Supply Frequency (Hz) */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
              <span>Frequency (VFD):</span>
              <span className="font-mono text-emerald-600 dark:text-emerald-400">{frequency} Hz</span>
            </div>
            <input
              type="range"
              min="20"
              max="60"
              step="5"
              value={frequency}
              onChange={(e) => setFrequency(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-mono">
              <span>20 Hz (Low Speed)</span>
              <span>50/60 Hz (Grid)</span>
            </div>
          </div>
        </div>

        {/* Calculated Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800 text-center">
            <div className="text-[10px] uppercase font-bold text-cyan-600 dark:text-cyan-400">Sync Speed ($N_s$)</div>
            <div className="text-base font-extrabold font-mono text-cyan-950 dark:text-cyan-100">{syncSpeed} RPM</div>
          </div>
          <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-center">
            <div className="text-[10px] uppercase font-bold text-amber-600 dark:text-amber-400">Rotor Speed ($N_r$)</div>
            <div className="text-base font-extrabold font-mono text-amber-950 dark:text-amber-100">{rotorSpeed} RPM</div>
          </div>
          <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-center">
            <div className="text-[10px] uppercase font-bold text-purple-600 dark:text-purple-400">Rotor Freq ($f_r$)</div>
            <div className="text-base font-extrabold font-mono text-purple-950 dark:text-purple-100">{rotorFrequency} Hz</div>
          </div>
          <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center">
            <div className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400">Est. Efficiency</div>
            <div className="text-base font-extrabold font-mono text-emerald-950 dark:text-emerald-100">{efficiency}%</div>
          </div>
        </div>

      </div>
    </InteractiveSimulationCard>
  );
};
