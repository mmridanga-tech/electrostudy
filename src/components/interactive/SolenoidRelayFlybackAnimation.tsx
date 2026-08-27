import React, { useState } from 'react';
import { Language } from '../../types';
import { Zap, ShieldCheck, AlertTriangle, Power, ToggleLeft, ToggleRight } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const SolenoidRelayFlybackAnimation: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';

  const [relayEnergized, setRelayEnergized] = useState<boolean>(false);
  const [diodeInstalled, setDiodeInstalled] = useState<boolean>(true);
  const [transistorStatus, setTransistorStatus] = useState<'safe' | 'damaged'>('safe');

  const supplyVoltage = 12; // V
  const coilCurrent = 0.25; // A (250 mA)
  const coilL = 100; // mH

  // Inductive Kick voltage without diode: v = -L di/dt (can exceed 200V-400V)
  const flybackSpikeVoltage = diodeInstalled ? 0.7 : 350; // Volts peak

  const handleToggleEnergize = () => {
    if (relayEnergized && !diodeInstalled) {
      // De-energizing without diode causes high voltage spark and damages switching transistor!
      setTransistorStatus('damaged');
    }
    setRelayEnergized(!relayEnergized);
  };

  const handleResetTransistor = () => {
    setTransistorStatus('safe');
  };

  const t = {
    title: {
      en: 'Electromagnetic Relay, Solenoid Actuator & Flyback Diode Protection',
      hi: 'विद्युतचुंबकीय रिले, सोलेनोइड एवं फ्लाईबैक डायोड सुरक्षा',
      bn: 'তড়িচ্চুম্বকীয় রিলে, সলিনয়েড ও ফ্লাইব্যাক ডায়োড সুরক্ষা'
    },
    relayState: {
      en: 'Relay Coil State:',
      hi: 'रिले कॉइल स्थिति:',
      bn: 'রিলে কয়েল অবস্থা:'
    },
    energized: { en: 'ENERGIZED (Contacts CLOSED)', hi: 'उत्तेजित (संपर्क बंद)', bn: 'বিদ্যুতায়িত (কন্টাক্ট অন)' },
    deenergized: { en: 'DE-ENERGIZED (Contacts OPEN)', hi: 'अनुत्तेजित (संपर्क खुला)', bn: 'সংযোগহীন (কন্টাক্ট অফ)' },
    diodeToggle: {
      en: 'Freewheeling (Flyback) Diode (1N4007):',
      hi: 'फ्रीव्हीलिंग (फ्लाईबैक) डायोड (1N4007):',
      bn: 'ফ্রিহুইলিং (ফ্লাইব্যাক) ডায়োড (1N4007):'
    },
    installed: { en: 'INSTALLED (Active Clamping)', hi: 'स्थापित (सुरक्षित क्लैंपिंग)', bn: 'সংযুক্ত (সুরক্ষিত ক্ল্যাম্পিং)' },
    removed: { en: 'REMOVED (Danger: Inductive Kick)', hi: 'हटाया गया (खतरा: वोल्टेज स्पाइक)', bn: 'বিচ্ছিন্ন (বিপদ: ভোল্টেজ স্পাইক)' },
    spikeLabel: {
      en: 'Peak Turn-Off Spike Voltage:',
      hi: 'टर्न-ऑफ पीक स्पाइक वोल्टेज:',
      bn: 'টার্ন-অফ পিক স্পাইক ভোল্টেজ:'
    },
    transistorState: {
      en: 'Switching Driver MOSFET/BJT:',
      hi: 'ड्राइवर ट्रांजिस्टर स्थिति:',
      bn: 'সুইচিং ড্রাইভার ট্রানজিস্টর:'
    },
    safe: { en: 'HEALTHY (Clamped to 12.7V)', hi: 'सुरक्षित (12.7V पर सुरक्षित)', bn: 'সুরক্ষিত (১২.৭V এ সীমাবদ্ধ)' },
    blown: { en: 'DESTROYED (Avalanche Breakdown by 350V Spike!)', hi: 'नष्ट (350V स्पाइक से क्षतिग्रस्त!)', bn: 'নষ্ট (৩৫০V স্পাইকে পুড়ে গেছে!)' },
    flybackExplanation: {
      en: 'When coil current abruptly cuts off, the collapsing magnetic field creates a massive reverse EMF (e = -L di/dt). The antiparallel diode provides a safe recirculation path for the inductive energy.',
      hi: 'जब कॉइल धारा अचानक रुकती है, तो गिरता हुआ चुंबकीय क्षेत्र भारी रिवर्स EMF (e = -L di/dt) उत्पन्न करता है। एंटी-पैरेलल डायोड इस ऊर्जा को सुरक्षित मार्ग प्रदान करता है।',
      bn: 'কয়েল কারেন্ট হঠাৎ বন্ধ হলে চুম্বক ক্ষেত্র দ্রুত সংকুচিত হয়ে বিশাল বিপরীত EMF (e = -L di/dt) তৈরি করে। অ্যান্টি-প্যারালাল ডায়োড এই শক্তি নিরাপদে প্রবাহিত করে সার্কিট বাঁচায়।'
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 text-white shadow-xl max-w-4xl mx-auto my-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Zap className="w-6 h-6 text-amber-400" />
          <h3 className="font-bold text-lg text-slate-100">{t.title[lang]}</h3>
        </div>
      </div>

      {/* Interactive Circuit Schematic SVG */}
      <div className="relative bg-slate-950 border border-slate-800 rounded-lg p-4 h-64 flex items-center justify-center overflow-hidden mb-4">
        <svg className="w-full h-full" viewBox="0 0 500 220">
          {/* +12V Rail */}
          <line x1="50" y1="30" x2="450" y2="30" stroke="#ef4444" strokeWidth="3" />
          <text x="30" y="34" fill="#ef4444" fontSize="12" fontWeight="bold">
            +12V
          </text>

          {/* GND Rail */}
          <line x1="50" y1="190" x2="450" y2="190" stroke="#64748b" strokeWidth="3" />
          <text x="25" y="194" fill="#94a3b8" fontSize="12" fontWeight="bold">
            GND
          </text>

          {/* Relay Coil Branch */}
          <line x1="160" y1="30" x2="160" y2="60" stroke="#ef4444" strokeWidth="2.5" />
          <line x1="160" y1="140" x2="160" y2="160" stroke="#64748b" strokeWidth="2.5" />

          {/* Relay Solenoid Core & Coil */}
          <rect
            x="135"
            y="60"
            width="50"
            height="80"
            rx="6"
            fill={relayEnergized ? '#1e3a8a' : '#1e293b'}
            stroke={relayEnergized ? '#38bdf8' : '#475569'}
            strokeWidth="2"
          />
          {/* Coil Strands */}
          {Array.from({ length: 5 }).map((_, i) => (
            <ellipse
              key={i}
              cx="160"
              cy={72 + i * 14}
              rx="20"
              ry="5"
              fill="none"
              stroke="#ea580c"
              strokeWidth="3.5"
            />
          ))}

          {/* Freewheeling Diode (in parallel with coil, cathode up) */}
          <g transform="translate(230, 70)">
            <line x1="-70" y1="0" x2="0" y2="0" stroke="#64748b" strokeWidth="2" />
            <line x1="-70" y1="60" x2="0" y2="60" stroke="#64748b" strokeWidth="2" />
            <line x1="0" y1="0" x2="0" y2="15" stroke="#64748b" strokeWidth="2" />
            <line x1="0" y1="45" x2="0" y2="60" stroke="#64748b" strokeWidth="2" />

            {diodeInstalled ? (
              <>
                {/* Diode Symbol pointing UP (Cathode at top +12V) */}
                <polygon points="-12,38 12,38 0,18" fill="#10b981" stroke="#10b981" strokeWidth="1.5" />
                <line x1="-12" y1="18" x2="12" y2="18" stroke="#10b981" strokeWidth="3" />
                <text x="18" y="32" fill="#10b981" fontSize="10" fontWeight="bold">
                  1N4007
                </text>
              </>
            ) : (
              <>
                {/* Removed Diode Warning */}
                <line x1="-8" y1="22" x2="8" y2="38" stroke="#f43f5e" strokeWidth="2.5" />
                <line x1="8" y1="22" x2="-8" y2="38" stroke="#f43f5e" strokeWidth="2.5" />
                <text x="16" y="32" fill="#f43f5e" fontSize="9" fontWeight="bold">
                  NO DIODE!
                </text>
              </>
            )}
          </g>

          {/* Mechanical Armature & Switch Contacts */}
          <g transform="translate(340, 80)">
            <rect x="0" y="0" width="100" height="70" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
            <text x="50" y="16" fill="#94a3b8" fontSize="9" textAnchor="middle" fontWeight="bold">
              RELAY CONTACTS
            </text>
            {/* Stationary terminals */}
            <circle cx="25" cy="45" r="4" fill="#fbbf24" />
            <circle cx="75" cy="45" r="4" fill="#fbbf24" />
            {/* Movable Armature */}
            <line
              x1="25"
              y1="45"
              x2="75"
              y2={relayEnergized ? 45 : 30}
              stroke="#fbbf24"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* Load Lamp */}
            <circle
              cx="115"
              cy="45"
              r="14"
              fill={relayEnergized ? '#fef08a' : '#334155'}
              stroke={relayEnergized ? '#f59e0b' : '#64748b'}
              strokeWidth="2"
              className={relayEnergized ? 'animate-pulse' : ''}
            />
            <text x="115" y="49" textAnchor="middle" fill={relayEnergized ? '#000000' : '#ffffff'} fontSize="9" fontWeight="bold">
              {relayEnergized ? 'ON' : 'OFF'}
            </text>
          </g>

          {/* Switching MOSFET / Transistor */}
          <g transform="translate(160, 160)">
            <circle
              cx="0"
              cy="15"
              r="14"
              fill={transistorStatus === 'safe' ? '#1e293b' : '#7f1d1d'}
              stroke={transistorStatus === 'safe' ? '#38bdf8' : '#ef4444'}
              strokeWidth="2"
            />
            <text
              x="0"
              y="19"
              textAnchor="middle"
              fill={transistorStatus === 'safe' ? '#38bdf8' : '#fca5a5'}
              fontSize="8"
              fontWeight="bold"
            >
              {transistorStatus === 'safe' ? 'NPN' : 'BLOWN!'}
            </text>
          </g>
        </svg>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-slate-800/80 p-3 rounded-lg border border-slate-700 mb-4">
        <div className="p-2 bg-slate-900/60 rounded border border-slate-700/60">
          <span className="text-xs text-slate-400 block">{t.spikeLabel[lang]}</span>
          <span
            className={`text-base font-bold ${
              diodeInstalled ? 'text-emerald-400' : 'text-rose-400 animate-pulse'
            }`}
          >
            {diodeInstalled ? '+12.7 V (Clamped)' : '> +350 V (Destructive Spike)'}
          </span>
        </div>

        <div className="p-2 bg-slate-900/60 rounded border border-slate-700/60">
          <span className="text-xs text-slate-400 block">{t.transistorState[lang]}</span>
          <span
            className={`text-sm font-bold flex items-center gap-1.5 ${
              transistorStatus === 'safe' ? 'text-emerald-400' : 'text-rose-400'
            }`}
          >
            {transistorStatus === 'safe' ? <ShieldCheck className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
            {transistorStatus === 'safe' ? t.safe[lang] : t.blown[lang]}
          </span>
        </div>

        <div className="p-2 bg-slate-900/60 rounded border border-slate-700/60">
          <span className="text-xs text-slate-400 block">Coil Stored Energy:</span>
          <span className="text-base font-bold text-amber-400">
            {(0.5 * (coilL * 1e-3) * Math.pow(coilCurrent, 2) * 1e3).toFixed(2)} mJ
          </span>
        </div>
      </div>

      {/* Explanation note */}
      <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 text-xs text-slate-300 mb-4 leading-relaxed">
        {t.flybackExplanation[lang]}
      </div>

      {/* Interactive Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-800 p-4 rounded-lg border border-slate-700">
        <div className="flex items-center gap-3">
          <button
            onClick={handleToggleEnergize}
            className={`px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-2 transition-all ${
              relayEnergized ? 'bg-amber-500 text-slate-950 shadow-md' : 'bg-slate-700 hover:bg-slate-600 text-white'
            }`}
          >
            <Power className="w-4 h-4" />
            {relayEnergized ? 'De-energize Relay (Turn OFF)' : 'Energize Relay (Turn ON)'}
          </button>

          {transistorStatus === 'damaged' && (
            <button
              onClick={handleResetTransistor}
              className="px-3 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs rounded-lg transition-all"
            >
              Replace Transistor
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-300 font-semibold">{t.diodeToggle[lang]}</span>
          <button
            onClick={() => setDiodeInstalled(!diodeInstalled)}
            className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
              diodeInstalled ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
            }`}
          >
            {diodeInstalled ? 'Diode Installed' : 'No Diode (Unprotected)'}
          </button>
        </div>
      </div>
    </div>
  );
};
