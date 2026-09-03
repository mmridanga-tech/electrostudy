import React, { useState } from 'react';
import { Compass, RotateCcw, Activity, Radio, Signal, Wifi, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Language } from '../../types';

interface AntennaFundamentalsLinkBudgetAnimationProps {
  currentLanguage: Language;
}

export const AntennaFundamentalsLinkBudgetAnimation: React.FC<AntennaFundamentalsLinkBudgetAnimationProps> = ({ currentLanguage }) => {
  const [txPowerW, setTxPowerW] = useState<number>(10.0); // Transmit power in Watts
  const [distanceKm, setDistanceKm] = useState<number>(5.0); // Link distance in km
  const [frequencyMhz, setFrequencyMhz] = useState<number>(2400); // 2.4 GHz (2400 MHz)
  const [txGainDbi, setTxGainDbi] = useState<number>(15.0); // Transmitter antenna gain in dBi
  const [rxGainDbi, setRxGainDbi] = useState<number>(15.0); // Receiver antenna gain in dBi
  const [rxSensDbm, setRxSensDbm] = useState<number>(-90.0); // Receiver sensitivity threshold

  // Friis Transmission Equation calculations
  // Pt(dBm) = 10 * log10(Pt(W) * 1000)
  const txPowerDbm = 10 * Math.log10(Math.max(0.001, txPowerW) * 1000);

  // FSPL(dB) = 32.44 + 20 log10(d_km) + 20 log10(f_MHz)
  const fsplDb = 32.44 + 20 * Math.log10(Math.max(0.01, distanceKm)) + 20 * Math.log10(Math.max(1, frequencyMhz));

  // Pr(dBm) = Pt(dBm) + Gt(dBi) + Gr(dBi) - FSPL(dB)
  const rxPowerDbm = txPowerDbm + txGainDbi + rxGainDbi - fsplDb;

  // Link Margin(dB) = Pr(dBm) - RxSens(dBm)
  const linkMarginDb = rxPowerDbm - rxSensDbm;
  const isLinkViable = linkMarginDb >= 0;

  // Equivalent Isotropically Radiated Power (EIRP)
  const eirpDbm = txPowerDbm + txGainDbi;
  const eirpW = Math.pow(10, (eirpDbm - 30) / 10);

  // Free space wavelength
  const c = 2.99792458e8;
  const wavelengthM = c / (frequencyMhz * 1e6);

  const allLabels = {
    en: {
      title: 'Antenna Radiation & Friis Transmission Link Budget Simulator',
      subtitle: 'Analyze Free-Space Path Loss (FSPL), antenna gain directivity, EIRP, and RF link margin for wireless communications',
      txPowerLabel: 'Transmitter Power (P_t):',
      distLabel: 'Link Distance (d):',
      freqLabel: 'Carrier Frequency (f):',
      txGainLabel: 'TX Antenna Gain (G_t):',
      rxGainLabel: 'RX Antenna Gain (G_r):',
      rxSensLabel: 'Receiver Sensitivity (P_sens):',
      fsplLabel: 'Free-Space Path Loss (FSPL):',
      rxPowerLabel: 'Received Power (P_r):',
      marginLabel: 'RF Link Margin (M):',
      eirpLabel: 'EIRP (Effective Power):',
      linkPassed: 'LINK CLOSED (Signal Exceeds Sensitivity Threshold)',
      linkFailed: 'LINK DROPOUT (Received Power Below Sensitivity)',
      presets: 'Preset Scenarios:',
      presetWifi: 'Wi-Fi 2.4 GHz Link (100 m)',
      presetCellular: 'Cell Tower to Phone (2 km)',
      presetSatellite: 'Satellite Earth Station (50 km)',
      reset: 'Reset Default'
    },
    hi: {
      title: 'एंटीना विकिरण एवं फ़्रीस संचरण लिंक बजट सिम्युलेटर',
      subtitle: 'मुक्त-आकाश पथ हानि (FSPL), एंटीना लब्धि दिशात्मकता, EIRP एवं वायरलेस संचार हेतु RF लिंक मार्जिन का विश्लेषण',
      txPowerLabel: 'ट्रांसमीटर शक्ति (P_t):',
      distLabel: 'लिंक दूरी (d):',
      freqLabel: 'वाहक आवृत्ति (f):',
      txGainLabel: 'TX एंटीना लब्धि (G_t):',
      rxGainLabel: 'RX एंटीना लब्धि (G_r):',
      rxSensLabel: 'रिसीवर संवेदनशीलता (P_sens):',
      fsplLabel: 'मुक्त-आकाश पथ हानि (FSPL):',
      rxPowerLabel: 'प्राप्त शक्ति (P_r):',
      marginLabel: 'RF लिंक मार्जिन (M):',
      eirpLabel: 'EIRP (प्रभावी समदैशिक शक्ति):',
      linkPassed: 'लिंक सफल (संकेत संवेदनशीलता सीमा से अधिक)',
      linkFailed: 'लिंक विफल (प्राप्त शक्ति संवेदनशीलता से कम)',
      presets: 'पूर्व निर्धारित स्थितियां:',
      presetWifi: 'वाई-फाई लिंक (100 मीटर)',
      presetCellular: 'सेल टावर से मोबाइल (2 किमी)',
      presetSatellite: 'उपग्रह भू-केंद्र (50 किमी)',
      reset: 'रीसेट'
    },
    bn: {
      title: 'অ্যান্টেনা বিকিরণ ও ফ্রিস সঞ্চালন লিঙ্ক বাজেট সিমুলেটর',
      subtitle: 'মুক্ত-স্থান পথ অপচয় (FSPL), অ্যান্টেনা গেইন নির্দেশকতা, EIRP এবং ওয়্যারলেস যোগাযোগের জন্য RF লিঙ্ক মার্জিন বিশ্লেষণ',
      txPowerLabel: 'ট্রান্সমিটার ক্ষমতা (P_t):',
      distLabel: 'লিঙ্ক দূরত্ব (d):',
      freqLabel: 'ক্যারিয়ার কম্পাঙ্ক (f):',
      txGainLabel: 'TX অ্যান্টেনা গেইন (G_t):',
      rxGainLabel: 'RX অ্যান্টেনা গেইন (G_r):',
      rxSensLabel: 'রিসিভার সংবেদনশীলতা (P_sens):',
      fsplLabel: 'মুক্ত-স্থান পথ অপচয় (FSPL):',
      rxPowerLabel: 'প্রাপ্ত ক্ষমতা (P_r):',
      marginLabel: 'RF লিঙ্ক মার্জিন (M):',
      eirpLabel: 'EIRP (কার্যকরী ক্ষমতা):',
      linkPassed: 'লিঙ্ক কার্যকর (সংকেত সংবেদনশীলতার ঊর্ধ্বে)',
      linkFailed: 'লিঙ্ক ব্যর্থ (প্রাপ্ত ক্ষমতা সংবেদনশীলতার নিচে)',
      presets: 'প্রিসেট পরিস্থিতি:',
      presetWifi: 'ওয়াই-ফাই লিঙ্ক (১০০ মি)',
      presetCellular: 'সেল টাওয়ার থেকে ফোন (২ কিমি)',
      presetSatellite: 'স্যাটেলাইট আর্থ স্টেশন (৫০ কিমি)',
      reset: 'রিসেট'
    }
  };
  const labels = allLabels[currentLanguage] || allLabels.en;

  // Polar Radiation Pattern Points for main lobe display
  const radiationPatternPoints: string[] = [];
  const lobeOriginX = 140;
  const lobeOriginY = 150;
  // Dipole or directional lobe: r(phi) = cos^n(phi)
  const lobePower = Math.max(1, txGainDbi / 3);
  for (let deg = -90; deg <= 90; deg += 3) {
    const rad = (deg * Math.PI) / 180;
    const r = 85 * Math.pow(Math.cos(rad), lobePower);
    const px = lobeOriginX + r * Math.cos(rad);
    const py = lobeOriginY - r * Math.sin(rad);
    radiationPatternPoints.push(`${px.toFixed(1)},${py.toFixed(1)}`);
  }
  const lobePathD = `M ${lobeOriginX},${lobeOriginY} L ${radiationPatternPoints.join(' L ')} Z`;

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-5 text-white shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <Radio className="w-6 h-6 text-sky-400" />
            <h3 className="text-lg font-bold text-sky-400">{labels.title}</h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">{labels.subtitle}</p>
        </div>
        <button
          onClick={() => {
            setTxPowerW(10.0);
            setDistanceKm(5.0);
            setFrequencyMhz(2400);
            setTxGainDbi(15.0);
            setRxGainDbi(15.0);
            setRxSensDbm(-90.0);
          }}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          {labels.reset}
        </button>
      </div>

      {/* Preset Buttons */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="text-xs font-semibold text-slate-400">{labels.presets}</span>
        <button
          onClick={() => { setTxPowerW(0.1); setDistanceKm(0.1); setFrequencyMhz(2400); setTxGainDbi(3); setRxGainDbi(2); setRxSensDbm(-85); }}
          className="px-2.5 py-1 text-xs rounded bg-slate-800 hover:bg-slate-700 text-sky-300 font-mono border border-slate-700"
        >
          {labels.presetWifi}
        </button>
        <button
          onClick={() => { setTxPowerW(40); setDistanceKm(2.0); setFrequencyMhz(1800); setTxGainDbi(16); setRxGainDbi(0); setRxSensDbm(-100); }}
          className="px-2.5 py-1 text-xs rounded bg-slate-800 hover:bg-slate-700 text-emerald-300 font-mono border border-slate-700"
        >
          {labels.presetCellular}
        </button>
        <button
          onClick={() => { setTxPowerW(250); setDistanceKm(50.0); setFrequencyMhz(12000); setTxGainDbi(42); setRxGainDbi(38); setRxSensDbm(-110); }}
          className="px-2.5 py-1 text-xs rounded bg-purple-950/60 hover:bg-purple-900/80 text-purple-300 font-mono border border-purple-600/40"
        >
          {labels.presetSatellite}
        </button>
      </div>

      {/* Link Diagram in SVG */}
      <div className="w-full bg-slate-950 rounded-xl border border-slate-800 overflow-hidden mb-5">
        <svg viewBox="0 0 650 270" className="w-full h-auto">
          {/* Status Banner */}
          <g transform="translate(30, 15)">
            {isLinkViable ? (
              <g>
                <rect x="0" y="0" width="340" height="24" rx="4" fill="#065f46" stroke="#10b981" />
                <text x="170" y="16" textAnchor="middle" fill="#ecfdf5" fontSize="9.5" fontWeight="bold">
                  ✓ {labels.linkPassed}
                </text>
              </g>
            ) : (
              <g>
                <rect x="0" y="0" width="340" height="24" rx="4" fill="#7f1d1d" stroke="#ef4444" />
                <text x="170" y="16" textAnchor="middle" fill="#fee2e2" fontSize="9.5" fontWeight="bold">
                  ✕ {labels.linkFailed}
                </text>
              </g>
            )}
          </g>

          <text x="620" y="32" textAnchor="end" fill="#facc15" fontSize="11" fontWeight="bold">
            P_r = {rxPowerDbm.toFixed(1)} dBm | Sens = {rxSensDbm.toFixed(1)} dBm
          </text>

          {/* Left: Transmitter Mast & Antenna Lobe */}
          <g transform="translate(10, 0)">
            {/* Mast Tower */}
            <line x1="80" y1="210" x2="80" y2="120" stroke="#64748b" strokeWidth="3" />
            <polygon points="65,210 95,210 80,120" fill="none" stroke="#64748b" strokeWidth="1.5" />
            <line x1="70" y1="165" x2="90" y2="165" stroke="#64748b" strokeWidth="1.5" />
            {/* Antenna Dish / Feed */}
            <circle cx="80" cy="120" r="10" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <text x="80" y="235" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">
              TX Antenna (G_t = {txGainDbi} dBi)
            </text>

            {/* Radiation Pattern Beam */}
            <path
              d={lobePathD}
              fill="#0284c7"
              fillOpacity="0.25"
              stroke="#38bdf8"
              strokeWidth="2"
              transform="translate(-60, -30)"
            />
          </g>

          {/* Center: Free Space Propagation Wavefronts */}
          <g transform="translate(0, 0)">
            <path d="M 220,70 A 100 100 0 0 1 220,170" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M 280,50 A 150 150 0 0 1 280,190" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M 340,30 A 200 200 0 0 1 340,210" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M 400,20 A 250 250 0 0 1 400,220" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Distance Arrow & FSPL Tag */}
            <line x1="120" y1="185" x2="520" y2="185" stroke="#475569" strokeWidth="1.5" />
            <polygon points="120,185 128,181 128,189" fill="#475569" />
            <polygon points="520,185 512,181 512,189" fill="#475569" />
            <rect x="250" y="172" width="140" height="24" rx="3" fill="#0f172a" stroke="#334155" />
            <text x="320" y="188" textAnchor="middle" fill="#facc15" fontSize="9.5" fontWeight="bold">
              d = {distanceKm.toFixed(1)} km (FSPL = {fsplDb.toFixed(1)} dB)
            </text>
          </g>

          {/* Right: Receiver Mast & Station */}
          <g transform="translate(460, 0)">
            {/* Mast Tower */}
            <line x1="80" y1="210" x2="80" y2="120" stroke="#64748b" strokeWidth="3" />
            <polygon points="65,210 95,210 80,120" fill="none" stroke="#64748b" strokeWidth="1.5" />
            <line x1="70" y1="165" x2="90" y2="165" stroke="#64748b" strokeWidth="1.5" />
            {/* RX Dish */}
            <circle cx="80" cy="120" r="10" fill={isLinkViable ? '#059669' : '#dc2626'} stroke="#ffffff" strokeWidth="2" />
            <text x="80" y="235" textAnchor="middle" fill="#a78bfa" fontSize="10" fontWeight="bold">
              RX Antenna (G_r = {rxGainDbi} dBi)
            </text>
          </g>
        </svg>
      </div>

      {/* Sliders & Link Budget Arithmetic Table */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Sliders */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-300">{labels.distLabel}</span>
              <span className="text-amber-400 font-mono font-bold">{distanceKm.toFixed(1)} km</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="60.0"
              step="0.5"
              value={distanceKm}
              onChange={(e) => setDistanceKm(parseFloat(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-300">{labels.freqLabel}</span>
              <span className="text-sky-400 font-mono font-bold">{frequencyMhz >= 1000 ? `${(frequencyMhz / 1000).toFixed(2)} GHz` : `${frequencyMhz} MHz`}</span>
            </div>
            <input
              type="range"
              min="100"
              max="15000"
              step="100"
              value={frequencyMhz}
              onChange={(e) => setFrequencyMhz(parseFloat(e.target.value))}
              className="w-full accent-sky-500 cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-slate-300">TX Power:</span>
                <span className="text-emerald-400 font-mono">{txPowerW.toFixed(1)} W</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="100.0"
                step="0.5"
                value={txPowerW}
                onChange={(e) => setTxPowerW(parseFloat(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-slate-300">RX Sens:</span>
                <span className="text-red-400 font-mono">{rxSensDbm} dBm</span>
              </div>
              <input
                type="range"
                min="-115"
                max="-60"
                step="1"
                value={rxSensDbm}
                onChange={(e) => setRxSensDbm(parseFloat(e.target.value))}
                className="w-full accent-red-500 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Link Budget Table & Margin Gauge */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div className="space-y-1.5 text-xs font-mono">
            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">+ Transmit Power (P_t):</span>
              <span className="text-emerald-400 font-bold">+{txPowerDbm.toFixed(1)} dBm ({txPowerW} W)</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">+ TX Antenna Gain (G_t):</span>
              <span className="text-sky-400 font-bold">+{txGainDbi.toFixed(1)} dBi</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">- Path Loss (FSPL):</span>
              <span className="text-amber-400 font-bold">-{fsplDb.toFixed(1)} dB</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">+ RX Antenna Gain (G_r):</span>
              <span className="text-sky-400 font-bold">+{rxGainDbi.toFixed(1)} dBi</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-700 bg-slate-900/80 px-2 rounded">
              <span className="text-slate-200 font-bold">= Received Power (P_r):</span>
              <span className="text-purple-300 font-bold text-sm">{rxPowerDbm.toFixed(1)} dBm</span>
            </div>
          </div>

          <div className="mt-3 bg-slate-900/90 p-3 rounded-lg border border-slate-800 text-xs">
            <div className="flex justify-between items-center mb-1">
              <span className="text-slate-300 font-semibold">{labels.marginLabel}</span>
              <span className={`font-mono font-bold text-sm ${linkMarginDb >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                {linkMarginDb >= 0 ? `+${linkMarginDb.toFixed(1)} dB (Fade Margin OK)` : `${linkMarginDb.toFixed(1)} dB (Outage)`}
              </span>
            </div>
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>EIRP: <span className="text-amber-300 font-mono font-semibold">{eirpDbm.toFixed(1)} dBm ({eirpW.toFixed(1)} W)</span></span>
              <span>Wavelength λ: <span className="text-sky-300 font-mono font-semibold">{(wavelengthM * 100).toFixed(1)} cm</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
