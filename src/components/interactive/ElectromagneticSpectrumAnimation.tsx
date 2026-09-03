import React, { useState } from 'react';
import { Compass, RotateCcw, Activity, Radio, Sun, Zap, ShieldAlert, Sparkles } from 'lucide-react';
import { Language } from '../../types';

interface ElectromagneticSpectrumAnimationProps {
  currentLanguage: Language;
}

interface SpectrumBand {
  id: string;
  name: string;
  minLogFreq: number; // log10(Hz)
  maxLogFreq: number;
  color: string;
  apps: string;
  penetration: string;
}

export const ElectromagneticSpectrumAnimation: React.FC<ElectromagneticSpectrumAnimationProps> = ({ currentLanguage }) => {
  // Slider controls log10(Frequency in Hz): 3 (1 kHz) to 21 (10^21 Hz)
  const [logFreq, setLogFreq] = useState<number>(14.5); // ~3e14 Hz (Near-infrared / visible)

  const bands: SpectrumBand[] = [
    { id: 'radio', name: 'Radio Waves', minLogFreq: 3, maxLogFreq: 9, color: '#38bdf8', apps: 'AM/FM Broadcast, Submarine ELF, VHF Aircraft Comm, HF Ionospheric Skip', penetration: 'Passes freely through buildings & dry ground' },
    { id: 'microwave', name: 'Microwaves', minLogFreq: 9, maxLogFreq: 11.5, color: '#2dd4bf', apps: 'Radar, 5G Cellular, Wi-Fi 6, Microwave Ovens, Deep Space Links', penetration: 'Absorbed by water, rain fade, line-of-sight' },
    { id: 'infrared', name: 'Infrared (IR)', minLogFreq: 11.5, maxLogFreq: 14.6, color: '#f59e0b', apps: 'Thermal Imaging, Fiber Optic Comms (1550 nm), Remote Controls, Greenhouse Heating', penetration: 'Absorbed by skin & glass, greenhouse gases' },
    { id: 'visible', name: 'Visible Light', minLogFreq: 14.6, maxLogFreq: 14.9, color: '#22c55e', apps: 'Human Vision, Optical Photonics, Photosynthesis, Displays, LIDAR', penetration: 'Passes through clear atmosphere, water, glass' },
    { id: 'uv', name: 'Ultraviolet (UV)', minLogFreq: 14.9, maxLogFreq: 16.5, color: '#818cf8', apps: 'Germicidal Disinfection (UVC), Lithography, Sun Tanning, Forensic Detection', penetration: 'Absorbed by ozone layer, cornea, thin skin layer' },
    { id: 'xray', name: 'X-Rays', minLogFreq: 16.5, maxLogFreq: 19.5, color: '#c084fc', apps: 'Medical Radiography, Airport Security, CT Scans, Crystallography', penetration: 'Passes through soft tissue, stopped by dense bone/lead' },
    { id: 'gamma', name: 'Gamma Rays', minLogFreq: 19.5, maxLogFreq: 22, color: '#f43f5e', apps: 'Cancer Radiotherapy, PET Scans, Nuclear Astrophysics, Gamma-Ray Bursts', penetration: 'Highly penetrating, requires thick lead/concrete shields' }
  ];

  const currentBand = bands.find((b) => logFreq >= b.minLogFreq && logFreq <= b.maxLogFreq) || bands[0];

  const c = 2.99792458e8; // m/s
  const hPlanck = 6.62607015e-34; // J s
  const qElectron = 1.602176634e-19; // C
  const wienConst = 2.897771955e-3; // m K

  const freqHz = Math.pow(10, logFreq);
  const wavelengthM = c / freqHz;
  const photonEnergyJ = hPlanck * freqHz;
  const photonEnergyEv = photonEnergyJ / qElectron;
  const blackbodyTempK = wienConst / wavelengthM;

  const isIonizing = photonEnergyEv >= 10.0;

  const formatFreq = (f: number) => {
    if (f < 1e3) return `${f.toFixed(1)} Hz`;
    if (f < 1e6) return `${(f / 1e3).toFixed(2)} kHz`;
    if (f < 1e9) return `${(f / 1e6).toFixed(2)} MHz`;
    if (f < 1e12) return `${(f / 1e9).toFixed(2)} GHz`;
    if (f < 1e15) return `${(f / 1e12).toFixed(2)} THz`;
    if (f < 1e18) return `${(f / 1e15).toFixed(2)} PHz`;
    return `${(f / 1e18).toFixed(2)} EHz`;
  };

  const formatWavelength = (lam: number) => {
    if (lam >= 1e3) return `${(lam / 1e3).toFixed(2)} km`;
    if (lam >= 1) return `${lam.toFixed(2)} m`;
    if (lam >= 1e-2) return `${(lam * 100).toFixed(2)} cm`;
    if (lam >= 1e-3) return `${(lam * 1000).toFixed(2)} mm`;
    if (lam >= 1e-6) return `${(lam * 1e6).toFixed(2)} µm`;
    if (lam >= 1e-9) return `${(lam * 1e9).toFixed(2)} nm`;
    if (lam >= 1e-12) return `${(lam * 1e12).toFixed(2)} pm`;
    return `${(lam * 1e15).toFixed(2)} fm`;
  };

  const formatEnergy = (ev: number) => {
    if (ev < 1e-3) return `${(ev * 1e6).toFixed(1)} µeV`;
    if (ev < 1) return `${(ev * 1000).toFixed(2)} meV`;
    if (ev < 1e3) return `${ev.toFixed(2)} eV`;
    if (ev < 1e6) return `${(ev / 1e3).toFixed(2)} keV`;
    return `${(ev / 1e6).toFixed(2)} MeV`;
  };

  const allLabels = {
    en: {
      title: 'Electromagnetic Spectrum & Photon Energetics Explorer',
      subtitle: 'From Radio to Gamma Rays: Frequency f, wavelength λ, photon quantum energy E = hf, and blackbody temperature',
      sliderLabel: 'Spectrum Frequency Pointer (log₁₀ f):',
      freqLabel: 'Frequency (f):',
      waveLabel: 'Wavelength (λ = c / f):',
      energyLabel: 'Photon Energy (E = hf):',
      blackbodyLabel: 'Blackbody Peak Temp (T):',
      appsLabel: 'Key Applications & Systems:',
      penetrationLabel: 'Atmospheric & Matter Penetration:',
      radiationType: 'Radiation Classification:',
      ionizing: 'IONIZING RADIATION (Can strip electrons from atoms / DNA danger)',
      nonIonizing: 'NON-IONIZING RADIATION (Thermal & polarization interactions only)',
      jumpVisible: 'Jump to Visible Light (500 nm)',
      jumpWifi: 'Jump to Wi-Fi / Microwave (2.4 GHz)',
      jumpXray: 'Jump to Medical X-Ray',
      reset: 'Reset'
    },
    hi: {
      title: 'विद्युत चुंबकीय स्पेक्ट्रम एवं फोटॉन ऊर्जा अन्वेषक',
      subtitle: 'रेडियो तरंगों से गामा किरणों तक: आवृत्ति f, तरंगदैर्ध्य λ, फोटॉन क्वाण्टम ऊर्जा E = hf एवं कृष्णिका तापमान',
      sliderLabel: 'स्पेक्ट्रम आवृत्ति सूचक (log₁₀ f):',
      freqLabel: 'आवृत्ति (f):',
      waveLabel: 'तरंगदैर्ध्य (λ):',
      energyLabel: 'फोटॉन ऊर्जा (E = hf):',
      blackbodyLabel: 'कृष्णिका शिखर तापमान (T):',
      appsLabel: 'प्रमुख अनुप्रयोग एवं प्रणालियाँ:',
      penetrationLabel: 'वायुमंडलीय एवं पदार्थ भेदन क्षमता:',
      radiationType: 'विकिरण वर्गीकरण:',
      ionizing: 'आयनकारी विकिरण (इलेक्ट्रॉनों को अलग करने में सक्षम / डीएनए क्षति)',
      nonIonizing: 'गैर-आयनकारी विकिरण (केवल तापीय एवं ध्रुवण अंतःक्रिया)',
      jumpVisible: 'दृश्य प्रकाश पर जाएं (500 nm)',
      jumpWifi: 'वाई-फाई / माइक्रोवेव पर जाएं (2.4 GHz)',
      jumpXray: 'चिकित्सीय एक्स-रे पर जाएं',
      reset: 'रीसेट'
    },
    bn: {
      title: 'তড়িৎচৌম্বকীয় বর্ণালী ও ফোটন শক্তি এক্সপ্লোরার',
      subtitle: 'রেডিও থেকে গামা রশ্মি: কম্পাঙ্ক f, তরঙ্গদৈর্ঘ্য λ, ফোটন কোয়ান্টাম শক্তি E = hf এবং কৃষ্ণবস্তু তাপমাত্রা',
      sliderLabel: 'বর্ণালী কম্পাঙ্ক পয়েন্টার (log₁₀ f):',
      freqLabel: 'কম্পাঙ্ক (f):',
      waveLabel: 'তরঙ্গদৈর্ঘ্য (λ):',
      energyLabel: 'ফোটন শক্তি (E = hf):',
      blackbodyLabel: 'কৃষ্ণবস্তু শীর্ষ তাপমাত্রা (T):',
      appsLabel: 'প্রধান প্রয়োগ ও সিস্টেম:',
      penetrationLabel: 'বায়ুমণ্ডলীয় ও পদার্থ ভেদন ক্ষমতা:',
      radiationType: 'বিকিরণ শ্রেণীবিভাগ:',
      ionizing: 'আয়নাইজিং বিকিরণ (ইলেকট্রন বিচ্ছিন্ন করতে সক্ষম / ডিএনএ ঝুঁকি)',
      nonIonizing: 'নন-আয়নাইজিং বিকিরণ (কেবল তাপীয় ও পোলারাইজেশন মিথস্ক্রিয়া)',
      jumpVisible: 'দৃশ্যমান আলোতে যান (৫০০ nm)',
      jumpWifi: 'ওয়াই-ফাই / মাইক্রোওয়েভে যান (২.৪ GHz)',
      jumpXray: 'মেডিকেল এক্স-রেতে যান',
      reset: 'রিসেট'
    }
  };
  const labels = allLabels[currentLanguage] || allLabels.en;

  // Percentage on slider from minLog (3) to maxLog (21) -> range = 18
  const sliderPercent = ((logFreq - 3) / 18) * 100;

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-5 text-white shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <Sun className="w-6 h-6 text-sky-400" />
            <h3 className="text-lg font-bold text-sky-400">{labels.title}</h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">{labels.subtitle}</p>
        </div>
        <button
          onClick={() => setLogFreq(14.5)}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          {labels.reset}
        </button>
      </div>

      {/* Quick Jump Buttons */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <button
          onClick={() => setLogFreq(9.38)}
          className="px-2.5 py-1 text-xs rounded bg-slate-800 hover:bg-slate-700 text-teal-300 font-mono border border-slate-700"
        >
          {labels.jumpWifi}
        </button>
        <button
          onClick={() => setLogFreq(14.78)}
          className="px-2.5 py-1 text-xs rounded bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-300 font-mono border border-emerald-600/40"
        >
          {labels.jumpVisible}
        </button>
        <button
          onClick={() => setLogFreq(18.0)}
          className="px-2.5 py-1 text-xs rounded bg-purple-950/60 hover:bg-purple-900/80 text-purple-300 font-mono border border-purple-600/40"
        >
          {labels.jumpXray}
        </button>
      </div>

      {/* Spectrum Visual Bar Chart in SVG */}
      <div className="w-full bg-slate-950 rounded-xl border border-slate-800 overflow-hidden mb-5">
        <svg viewBox="0 0 650 200" className="w-full h-auto">
          {/* Main Spectrum Rainbow Ribbon */}
          <defs>
            <linearGradient id="spectrumGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284c7" />    {/* Radio */}
              <stop offset="25%" stopColor="#0d9488" />   {/* Microwave */}
              <stop offset="50%" stopColor="#d97706" />   {/* IR */}
              <stop offset="65%" stopColor="#16a34a" />   {/* Visible Green */}
              <stop offset="75%" stopColor="#6366f1" />   {/* UV */}
              <stop offset="88%" stopColor="#a855f7" />   {/* X-Ray */}
              <stop offset="100%" stopColor="#e11d48" />  {/* Gamma */}
            </linearGradient>
          </defs>

          {/* Band Partition Rectangles */}
          {bands.map((b) => {
            const x1 = 30 + ((b.minLogFreq - 3) / 18) * 590;
            const width = ((b.maxLogFreq - b.minLogFreq) / 18) * 590;
            const isSelected = currentBand.id === b.id;
            return (
              <g key={b.id}>
                <rect
                  x={x1}
                  y="45"
                  width={width}
                  height="45"
                  fill={b.color}
                  fillOpacity={isSelected ? 0.85 : 0.35}
                  stroke={isSelected ? '#ffffff' : '#334155'}
                  strokeWidth={isSelected ? 2 : 1}
                  className="cursor-pointer transition-all"
                  onClick={() => setLogFreq((b.minLogFreq + b.maxLogFreq) / 2)}
                />
                <text
                  x={x1 + width / 2}
                  y="72"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize={width > 45 ? 9.5 : 7.5}
                  fontWeight="bold"
                  className="pointer-events-none"
                >
                  {b.name}
                </text>
              </g>
            );
          })}

          {/* Pointer Marker at selected frequency */}
          {(() => {
            const markerX = 30 + (sliderPercent / 100) * 590;
            return (
              <g>
                <line x1={markerX} y1="35" x2={markerX} y2="100" stroke="#ffffff" strokeWidth="2.5" />
                <polygon points={`${markerX},105 ${markerX - 6},95 ${markerX + 6},95`} fill="#ffffff" />
                <circle cx={markerX} cy="35" r="4" fill="#facc15" stroke="#ffffff" strokeWidth="1.5" />
                <text x={markerX} y="25" textAnchor="middle" fill="#facc15" fontSize="10" fontWeight="bold">
                  {formatFreq(freqHz)}
                </text>
              </g>
            );
          })()}

          {/* Ionizing Radiation Threshold Divider at 10 eV (log10 f = 15.38) */}
          {(() => {
            const ionizeX = 30 + ((15.38 - 3) / 18) * 590;
            return (
              <g>
                <line x1={ionizeX} y1="105" x2={ionizeX} y2="155" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" />
                <text x={ionizeX - 10} y="125" textAnchor="end" fill="#94a3b8" fontSize="8.5">Non-Ionizing</text>
                <text x={ionizeX + 10} y="125" textAnchor="start" fill="#f87171" fontSize="8.5" fontWeight="bold">Ionizing (&gt; 10 eV)</text>
              </g>
            );
          })()}

          {/* Axis labels */}
          <text x="30" y="165" fill="#94a3b8" fontSize="8.5">10³ Hz (1 kHz, λ = 300 km)</text>
          <text x="620" y="165" textAnchor="end" fill="#94a3b8" fontSize="8.5">10²¹ Hz (1 ZHz, λ = 0.3 pm)</text>
        </svg>
      </div>

      {/* Main Slider */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-5">
        <div className="flex justify-between text-xs font-semibold mb-1">
          <span className="text-slate-300">{labels.sliderLabel}</span>
          <span className="text-sky-400 font-mono font-bold">10^{logFreq.toFixed(2)} Hz</span>
        </div>
        <input
          type="range"
          min="3"
          max="21"
          step="0.05"
          value={logFreq}
          onChange={(e) => setLogFreq(parseFloat(e.target.value))}
          className="w-full accent-sky-500 cursor-pointer"
        />
      </div>

      {/* Real-time Parameters & Radiation Classification */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Core Mathematical Quantities */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-3">
            <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
              <span className="text-slate-400">{labels.freqLabel}</span>
              <p className="text-sky-300 font-bold text-sm">{formatFreq(freqHz)}</p>
            </div>
            <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
              <span className="text-slate-400">{labels.waveLabel}</span>
              <p className="text-amber-300 font-bold text-sm">{formatWavelength(wavelengthM)}</p>
            </div>
            <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
              <span className="text-slate-400">{labels.energyLabel}</span>
              <p className="text-purple-300 font-bold text-sm">{formatEnergy(photonEnergyEv)}</p>
            </div>
            <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
              <span className="text-slate-400">{labels.blackbodyLabel}</span>
              <p className="text-emerald-300 font-bold text-sm">{blackbodyTempK < 1e7 ? `${blackbodyTempK.toFixed(0)} K` : '> 10⁷ K'}</p>
            </div>
          </div>

          {/* Ionizing status banner */}
          <div className={`p-2.5 rounded-lg border text-xs flex items-center gap-2 ${
            isIonizing ? 'bg-red-950/60 border-red-800 text-red-300' : 'bg-emerald-950/60 border-emerald-800 text-emerald-300'
          }`}>
            {isIonizing ? <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" /> : <Zap className="w-4 h-4 text-emerald-400 shrink-0" />}
            <span className="font-semibold">{isIonizing ? labels.ionizing : labels.nonIonizing}</span>
          </div>
        </div>

        {/* Real-World Systems & Physical Characteristics */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between text-xs">
          <div className="space-y-2.5">
            <div>
              <span className="text-slate-400 font-semibold block mb-0.5">{labels.appsLabel}</span>
              <p className="text-slate-200 bg-slate-900 p-2 rounded border border-slate-800">{currentBand.apps}</p>
            </div>

            <div>
              <span className="text-slate-400 font-semibold block mb-0.5">{labels.penetrationLabel}</span>
              <p className="text-slate-200 bg-slate-900 p-2 rounded border border-slate-800">{currentBand.penetration}</p>
            </div>
          </div>

          <div className="mt-3 text-[11px] text-slate-400 flex justify-between border-t border-slate-800 pt-2 font-mono">
            <span>c = 2.998 × 10⁸ m/s</span>
            <span>h = 6.626 × 10⁻³⁴ J·s</span>
          </div>
        </div>
      </div>
    </div>
  );
};
