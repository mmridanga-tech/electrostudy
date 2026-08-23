import React, { useState } from 'react';
import { Language } from '../../types';
import { 
  Factory, 
  Sun, 
  BatteryCharging, 
  Building2, 
  Activity, 
  Zap, 
  TrendingUp, 
  Sliders, 
  AlertTriangle, 
  RotateCcw,
  CheckCircle2
} from 'lucide-react';

interface TransformerIndustrialApplicationAnimationProps {
  language?: Language;
}

type ScenarioType = 'substation' | 'industrialPlant' | 'solarPV' | 'bess' | 'distribution';

export const TransformerIndustrialApplicationAnimation: React.FC<TransformerIndustrialApplicationAnimationProps> = ({
  language = 'en'
}) => {
  // Scenario selector
  const [scenario, setScenario] = useState<ScenarioType>('industrialPlant');

  // Adjustable Parameters
  const [ratedKva, setRatedKva] = useState<number>(2000); // kVA
  const [loadKw, setLoadKw] = useState<number>(1500); // kW
  const [powerFactor, setPowerFactor] = useState<number>(0.85);
  const [ambientTemp, setAmbientTemp] = useState<number>(35); // °C

  // Scenario presets
  const applyScenario = (sc: ScenarioType) => {
    setScenario(sc);
    switch (sc) {
      case 'substation':
        setRatedKva(25000); // 25 MVA
        setLoadKw(18500);
        setPowerFactor(0.90);
        break;
      case 'industrialPlant':
        setRatedKva(2000); // 2000 kVA
        setLoadKw(1450);
        setPowerFactor(0.82);
        break;
      case 'solarPV':
        setRatedKva(3125); // 3.125 MVA Solar Inverter Duty
        setLoadKw(2800);
        setPowerFactor(0.98);
        break;
      case 'bess':
        setRatedKva(5000); // 5 MVA Battery Energy Storage
        setLoadKw(4200);
        setPowerFactor(0.95);
        break;
      case 'distribution':
        setRatedKva(500); // 500 kVA Distribution Transformer
        setLoadKw(320);
        setPowerFactor(0.88);
        break;
    }
  };

  // Calculations
  const loadKva = loadKw / Math.max(0.1, powerFactor);
  const loadingFraction = loadKva / Math.max(1, ratedKva);
  const loadingPercent = loadingFraction * 100;

  // Empirical loss model: Core loss ~ 0.35% of rated kVA, FL Cu Loss ~ 1.1% of rated kVA
  const coreLossKw = ratedKva * 0.0035;
  const flCopperLossKw = ratedKva * 0.011;
  const actualCopperLossKw = Math.pow(loadingFraction, 2) * flCopperLossKw;
  const totalLossKw = coreLossKw + actualCopperLossKw;
  const inputPowerKw = loadKw + totalLossKw;
  const efficiency = (loadKw / Math.max(1, inputPowerKw)) * 100;

  // Temperature rise estimate
  const tempRise = 25 * (totalLossKw / Math.max(1, coreLossKw + flCopperLossKw));
  const estimatedWindingTemp = ambientTemp + tempRise;

  // Status diagnostics
  let statusText = 'OPTIMAL';
  let statusColor = 'text-emerald-400 border-emerald-500 bg-emerald-950/40';
  let alertMessage = '';

  if (loadingPercent > 120) {
    statusText = 'SEVERE OVERLOAD';
    statusColor = 'text-rose-400 border-rose-500 bg-rose-950/50';
    alertMessage = 'Transformer is operating beyond thermal capacity. Risk of rapid Kraft insulation degradation and winding tripping.';
  } else if (loadingPercent > 100) {
    statusText = 'OVERLOAD WARNING';
    statusColor = 'text-amber-400 border-amber-500 bg-amber-950/40';
    alertMessage = 'Loading exceeds 100%. Auxiliary forced-air fans (ONAF) required. Continuous operation requires load shedding.';
  } else if (powerFactor < 0.80) {
    statusText = 'POOR POWER FACTOR';
    statusColor = 'text-amber-400 border-amber-500 bg-amber-950/40';
    alertMessage = 'Low load power factor causes high reactive kVA demand and increased I²R heating. Install APFC capacitor banks.';
  } else if (loadingPercent < 25) {
    statusText = 'UNDERLOADED / LOW EFFICIENCY';
    statusColor = 'text-cyan-400 border-cyan-500 bg-cyan-950/40';
    alertMessage = 'Operating at very light load where fixed core loss dominates, yielding lower energy efficiency.';
  }

  // Multi-lingual labels
  const t = {
    en: {
      title: 'Industrial Transformer Systems & Power-Flow Analyzer',
      subtitle: 'Real-time loading, efficiency optimization, loss modeling, and industrial scenario simulation',
      scenariosTitle: 'Select Industrial Application Scenario:',
      scSubstation: 'Grid Substation (220/33 kV)',
      scPlant: 'Industrial Plant (33 kV/415 V)',
      scSolar: 'Solar PV Farm (0.8/33 kV)',
      scBess: 'Battery BESS (0.69/33 kV)',
      scDist: 'City Distribution (11 kV/415 V)',
      paramsTitle: 'Operational Parameters & Load Settings:',
      labelRating: 'Transformer Rating (kVA):',
      labelLoad: 'Active Power Demand (kW):',
      labelPf: 'Load Power Factor (cos φ):',
      labelTemp: 'Ambient Temperature (°C):',
      powerFlowTitle: 'Live Power Flow & Engineering Metrics:',
      metricApparent: 'Apparent Load:',
      metricLoading: 'Transformer Loading:',
      metricCoreLoss: 'Constant Core Loss (Pi):',
      metricCuLoss: 'Variable Copper Loss (Pcu):',
      metricTotalLoss: 'Total Electrical Losses:',
      metricEff: 'Calculated Efficiency (η):',
      metricWTI: 'Estimated Hot-Spot Temp:',
      systemStatus: 'System Status:',
      sldTitle: 'Single-Line Topology Diagram:',
      resetBtn: 'Reset Scenario',
      disclaimer: 'Educational Simulation Model: Values are calculated dynamically based on standard power transformer loss equations.'
    },
    hi: {
      title: 'औद्योगिक ट्रांसफॉर्मर प्रणाली एवं पावर-फ्लो विश्लेषक',
      subtitle: 'लोडिंग, दक्षता अनुकूलन, ऊर्जा हानि एवं औद्योगिक अनुप्रयोगों का वास्तविक समय सिमुलेशन',
      scenariosTitle: 'औद्योगिक अनुप्रयोग परिदृश्य चुनें:',
      scSubstation: 'ग्रिड सबस्टेशन (220/33 kV)',
      scPlant: 'औद्योगिक प्लांट (33 kV/415 V)',
      scSolar: 'सोलर PV फार्म (0.8/33 kV)',
      scBess: 'बैटरी स्टोरेज BESS (0.69/33 kV)',
      scDist: 'शहरी वितरण (11 kV/415 V)',
      paramsTitle: 'परिचालन पैरामीटर एवं लोड सेटिंग्स:',
      labelRating: 'ट्रांसफॉर्मर रेटिंग (kVA):',
      labelLoad: 'सक्रिय लोड मांग (kW):',
      labelPf: 'लोड पावर फैक्टर (cos φ):',
      labelTemp: 'परिवेश तापमान (°C):',
      powerFlowTitle: 'लाइव पावर फ्लो एवं इंजीनियरिंग मेट्रिक्स:',
      metricApparent: 'आभासी लोड (kVA):',
      metricLoading: 'ट्रांसफॉर्मर लोडिंग:',
      metricCoreLoss: 'स्थिर लौह हानि (Pi):',
      metricCuLoss: 'परिवर्तनीय कॉपर हानि (Pcu):',
      metricTotalLoss: 'कुल विद्युत हानियाँ:',
      metricEff: 'गणना की गई दक्षता (η):',
      metricWTI: 'अनुमानित वाइंडिंग तापमान:',
      systemStatus: 'सिस्टम स्थिति:',
      sldTitle: 'सिंगल-लाइन आरेख (SLD):',
      resetBtn: 'रीसेट करें',
      disclaimer: 'शैक्षणिक सिमुलेशन मॉडल: सभी मान मानक ट्रांसफॉर्मर समीकरणों के आधार पर गतिशील रूप से परिकलित हैं।'
    },
    bn: {
      title: 'শিল্প ট্রান্সফর্মার সিস্টেম ও পাওয়ার-ফ্লো অ্যানালাইজার',
      subtitle: 'লাইভ লোডিং, দক্ষতা অপ্টিমাইজেশন, বিদ্যুৎ অপচয় এবং শিল্প প্রয়োগের বাস্তবসম্মত সিমুলেশন',
      scenariosTitle: 'শিল্প ব্যবহারের ধরন নির্বাচন করুন:',
      scSubstation: 'গ্রিড সাবস্টেশন (220/33 kV)',
      scPlant: 'শিল্প কারখানা (33 kV/415 V)',
      scSolar: 'সৌর বিদ্যুৎ কেন্দ্র (0.8/33 kV)',
      scBess: 'ব্যাটারি BESS স্টোরেজ (0.69/33 kV)',
      scDist: 'শহুরে ডিস্ট্রিবিউশন (11 kV/415 V)',
      paramsTitle: 'অপারেটিং প্যারামিটার ও লোড নিয়ন্ত্রণ:',
      labelRating: 'ট্রান্সফর্মার রেটিং (kVA):',
      labelLoad: 'লোড ডিমান্ড (kW):',
      labelPf: 'পাওয়ার ফ্যাক্টর (cos φ):',
      labelTemp: 'পরিবেশের তাপমাত্রা (°C):',
      powerFlowTitle: 'লাইভ পাওয়ার ফ্লো ও প্রকৌশল মেট্রিক্স:',
      metricApparent: 'আপাত লোড (kVA):',
      metricLoading: 'ট্রান্সফর্মার লোডিং:',
      metricCoreLoss: 'স্থির কোর লস (Pi):',
      metricCuLoss: 'পরিবর্তনশীল কপার লস (Pcu):',
      metricTotalLoss: 'মোট বিদ্যুৎ অপচয়:',
      metricEff: 'কার্যদক্ষতা (η):',
      metricWTI: 'ওয়াইন্ডিং তাপমাত্রা:',
      systemStatus: 'সিস্টেম স্ট্যাটাস:',
      sldTitle: 'সিঙ্গেল-লাইন ডায়াগ্রাম (SLD):',
      resetBtn: 'রিসেট করুন',
      disclaimer: 'শিক্ষামূলক সিমুলেশন মডেল: মানসমূহ স্ট্যান্ডার্ড পাওয়ার ট্রান্সফরমার সমীকরণের মাধ্যমে সরাসরি গণনাকৃত।'
    }
  }[language] || {
    title: 'Industrial Transformer Systems Analyzer',
    subtitle: 'Real-time loading, efficiency optimization and loss modeling',
    scenariosTitle: 'Select Scenario:',
    scSubstation: 'Substation',
    scPlant: 'Industrial Plant',
    scSolar: 'Solar PV',
    scBess: 'BESS',
    scDist: 'Distribution',
    paramsTitle: 'Parameters:',
    labelRating: 'Rating (kVA):',
    labelLoad: 'Load (kW):',
    labelPf: 'Power Factor:',
    labelTemp: 'Ambient Temp:',
    powerFlowTitle: 'Power Flow Metrics:',
    metricApparent: 'Load kVA:',
    metricLoading: 'Loading %:',
    metricCoreLoss: 'Core Loss:',
    metricCuLoss: 'Copper Loss:',
    metricTotalLoss: 'Total Loss:',
    metricEff: 'Efficiency:',
    metricWTI: 'Hot-Spot Temp:',
    systemStatus: 'Status:',
    sldTitle: 'Single-Line Diagram:',
    resetBtn: 'Reset',
    disclaimer: 'Educational Simulation'
  };

  return (
    <div className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-6 text-white space-y-6 shadow-2xl font-sans">
      
      {/* Header */}
      <div className="border-b border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider">
            <Factory className="w-4 h-4 text-cyan-400" />
            <span>{t.title}</span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {t.subtitle}
          </p>
        </div>

        {/* Reset button */}
        <button
          onClick={() => applyScenario(scenario)}
          aria-label={t.resetBtn}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-cyan-400 hover:text-cyan-300 font-mono text-xs rounded-lg border border-slate-700 transition-all self-start sm:self-auto focus-visible:ring-2 focus-visible:ring-cyan-400 outline-none"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{t.resetBtn}</span>
        </button>
      </div>

      {/* Scenario Selector */}
      <div className="space-y-2">
        <label className="text-xs font-mono text-slate-400 font-bold block uppercase tracking-wider">
          {t.scenariosTitle}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 font-mono text-xs">
          
          <button
            onClick={() => applyScenario('substation')}
            aria-pressed={scenario === 'substation'}
            aria-label={t.scSubstation}
            className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-cyan-400 outline-none ${
              scenario === 'substation' 
                ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300 shadow-md shadow-cyan-950/50' 
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold">Substation</span>
              <Building2 className="w-4 h-4 text-cyan-400" />
            </div>
            <span className="text-[10px] text-slate-500 mt-1">220/33 kV GSU</span>
          </button>

          <button
            onClick={() => applyScenario('industrialPlant')}
            aria-pressed={scenario === 'industrialPlant'}
            aria-label={t.scPlant}
            className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-cyan-400 outline-none ${
              scenario === 'industrialPlant' 
                ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300 shadow-md shadow-cyan-950/50' 
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold">Factory Plant</span>
              <Factory className="w-4 h-4 text-cyan-400" />
            </div>
            <span className="text-[10px] text-slate-500 mt-1">33 kV/415 V Motor</span>
          </button>

          <button
            onClick={() => applyScenario('solarPV')}
            aria-pressed={scenario === 'solarPV'}
            aria-label={t.scSolar}
            className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-yellow-400 outline-none ${
              scenario === 'solarPV' 
                ? 'bg-yellow-950/80 border-yellow-500 text-yellow-300 shadow-md shadow-yellow-950/50' 
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold">Solar PV</span>
              <Sun className="w-4 h-4 text-yellow-400" />
            </div>
            <span className="text-[10px] text-slate-500 mt-1">0.8/33 kV Inverter</span>
          </button>

          <button
            onClick={() => applyScenario('bess')}
            aria-pressed={scenario === 'bess'}
            aria-label={t.scBess}
            className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-emerald-400 outline-none ${
              scenario === 'bess' 
                ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 shadow-md shadow-emerald-950/50' 
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold">Battery BESS</span>
              <BatteryCharging className="w-4 h-4 text-emerald-400" />
            </div>
            <span className="text-[10px] text-slate-500 mt-1">Bidirectional Flow</span>
          </button>

          <button
            onClick={() => applyScenario('distribution')}
            aria-pressed={scenario === 'distribution'}
            aria-label={t.scDist}
            className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-purple-400 outline-none ${
              scenario === 'distribution' 
                ? 'bg-purple-950/80 border-purple-500 text-purple-300 shadow-md shadow-purple-950/50' 
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold">Distribution</span>
              <Activity className="w-4 h-4 text-purple-400" />
            </div>
            <span className="text-[10px] text-slate-500 mt-1">11 kV/415 V Pole</span>
          </button>

        </div>
      </div>

      {/* Interactive Controls & Parameters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-900/80 p-4 rounded-xl border border-slate-800 font-mono text-xs">
        
        {/* Rating Slider */}
        <div className="space-y-1.5">
          <div className="flex justify-between">
            <span className="text-slate-400">{t.labelRating}</span>
            <span className="text-cyan-400 font-bold">{ratedKva.toLocaleString()} kVA</span>
          </div>
          <input
            type="range"
            min={200}
            max={30000}
            step={100}
            value={ratedKva}
            onChange={(e) => setRatedKva(Number(e.target.value))}
            aria-label={t.labelRating}
            className="w-full accent-cyan-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
          />
        </div>

        {/* Load Demand Slider */}
        <div className="space-y-1.5">
          <div className="flex justify-between">
            <span className="text-slate-400">{t.labelLoad}</span>
            <span className="text-amber-400 font-bold">{loadKw.toLocaleString()} kW</span>
          </div>
          <input
            type="range"
            min={50}
            max={35000}
            step={50}
            value={loadKw}
            onChange={(e) => setLoadKw(Number(e.target.value))}
            aria-label={t.labelLoad}
            className="w-full accent-amber-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
          />
        </div>

        {/* Power Factor Slider */}
        <div className="space-y-1.5">
          <div className="flex justify-between">
            <span className="text-slate-400">{t.labelPf}</span>
            <span className="text-emerald-400 font-bold">{powerFactor.toFixed(2)} lag</span>
          </div>
          <input
            type="range"
            min={0.60}
            max={1.00}
            step={0.01}
            value={powerFactor}
            onChange={(e) => setPowerFactor(Number(e.target.value))}
            aria-label={t.labelPf}
            className="w-full accent-emerald-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
          />
        </div>

        {/* Ambient Temperature Slider */}
        <div className="space-y-1.5">
          <div className="flex justify-between">
            <span className="text-slate-400">{t.labelTemp}</span>
            <span className="text-orange-400 font-bold">{ambientTemp}°C</span>
          </div>
          <input
            type="range"
            min={10}
            max={55}
            step={1}
            value={ambientTemp}
            onChange={(e) => setAmbientTemp(Number(e.target.value))}
            aria-label={t.labelTemp}
            className="w-full accent-orange-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
          />
        </div>

      </div>

      {/* Metrics Dashboard */}
      <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 space-y-4 font-mono">
        <div className="flex justify-between items-center border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">{t.powerFlowTitle}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">{t.systemStatus}</span>
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${statusColor}`}>
              {statusText}
            </span>
          </div>
        </div>

        {/* Dynamic Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase">{t.metricLoading}</span>
            <span className={`text-base font-bold ${loadingPercent > 100 ? 'text-rose-400' : 'text-cyan-400'}`}>
              {loadingPercent.toFixed(1)}%
            </span>
            <span className="text-[10px] text-slate-500 block">({loadKva.toFixed(1)} kVA)</span>
          </div>

          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase">{t.metricEff}</span>
            <span className="text-base font-bold text-emerald-400">
              {efficiency.toFixed(2)}%
            </span>
            <span className="text-[10px] text-slate-500 block">Output / Input</span>
          </div>

          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase">{t.metricTotalLoss}</span>
            <span className="text-base font-bold text-amber-400">
              {totalLossKw.toFixed(1)} kW
            </span>
            <span className="text-[10px] text-slate-500 block">Pi: {coreLossKw.toFixed(1)}k + Pcu: {actualCopperLossKw.toFixed(1)}k</span>
          </div>

          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase">{t.metricWTI}</span>
            <span className={`text-base font-bold ${estimatedWindingTemp > 105 ? 'text-rose-400' : 'text-orange-400'}`}>
              {estimatedWindingTemp.toFixed(1)}°C
            </span>
            <span className="text-[10px] text-slate-500 block">Ambient + Thermal Rise</span>
          </div>

        </div>

        {/* Diagnostic Alert Box */}
        {alertMessage && (
          <div className="p-3 rounded-lg bg-amber-950/40 border border-amber-500/50 flex items-start gap-2.5 text-xs text-amber-200">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p>{alertMessage}</p>
          </div>
        )}

        <div className="text-[10px] text-slate-500 text-center italic">
          {t.disclaimer}
        </div>
      </div>

    </div>
  );
};
