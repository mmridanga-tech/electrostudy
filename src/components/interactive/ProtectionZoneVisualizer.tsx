import React, { useState } from 'react';
import { Language } from '../../types';
import { ShieldCheck, AlertTriangle, Zap, Sliders, CheckCircle2, RotateCcw, HelpCircle } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const ProtectionZoneVisualizer: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';

  const [faultZone, setFaultZone] = useState<'gen' | 'bus1' | 'overlap1' | 'line' | 'overlap2' | 'bus2'>('line');
  const [breakerFail, setBreakerFail] = useState<boolean>(false);
  const [ctLocationMode, setCtLocationMode] = useState<'overlap' | 'non-overlap'>('overlap');

  const zoneNames = {
    gen: { en: 'Generator Zone', hi: 'जनरेटर क्षेत्र', bn: 'জেনারেটর জোন' },
    bus1: { en: 'Station Bus 1 Zone', hi: 'स्टेशन बस 1 क्षेत्र', bn: 'স্টেশন বাস ১ জোন' },
    overlap1: { en: 'Zone Overlap (Bus 1 / Line CTs)', hi: 'अतिव्यापी क्षेत्र (बस 1 / लाइन CTs)', bn: 'ওভারল্যাপ জোন (বাস ১ / লাইন সিটি)' },
    line: { en: 'Transmission Line Zone', hi: 'पारेषण लाइन क्षेत्र', bn: 'ট্রান্সমিশন লাইন জোন' },
    overlap2: { en: 'Zone Overlap (Line / Bus 2 CTs)', hi: 'अतिव्यापी क्षेत्र (लाइन / बस 2 CTs)', bn: 'ওভারল্যাপ জোন (লাইন / বাস ২ সিটি)' },
    bus2: { en: 'Receiving Substation Bus 2', hi: 'रिसीविंग सबस्टेशन बस 2', bn: 'রিসিভিং সাবস্টেশন বাস ২' }
  };

  // Determine which breakers trip
  const getTrippedBreakers = () => {
    if (ctLocationMode === 'non-overlap' && (faultZone === 'overlap1' || faultZone === 'overlap2')) {
      return {
        primary: [] as string[],
        backup: ['CB-1', 'CB-2', 'CB-3', 'CB-4'],
        clearingTime: '450 ms (Blind Spot - Time-Delayed Backup Trip)',
        status: 'blind_spot'
      };
    }

    switch (faultZone) {
      case 'gen':
        return {
          primary: ['CB-G', 'Field Breaker'],
          backup: breakerFail ? ['CB-1', 'Unit Auxiliary CB'] : [],
          clearingTime: breakerFail ? '250 ms (50BF Breaker Failure)' : '40 ms (Instantaneous Differential 87G)',
          status: breakerFail ? 'breaker_failure' : 'normal'
        };
      case 'bus1':
        return {
          primary: ['CB-G', 'CB-1', 'CB-Coupler'],
          backup: breakerFail ? ['Remote Grid Breakers'] : [],
          clearingTime: breakerFail ? '280 ms (50BF Relay Action)' : '25 ms (Bus Differential 87B High-Speed)',
          status: breakerFail ? 'breaker_failure' : 'normal'
        };
      case 'overlap1':
        return {
          primary: ['CB-1', 'CB-Coupler', 'CB-2'],
          backup: breakerFail ? ['Remote Backup'] : [],
          clearingTime: breakerFail ? '260 ms (50BF Initiated)' : '35 ms (Both Bus 1 & Line Relays Detect)',
          status: 'overlap_cleared'
        };
      case 'line':
        return {
          primary: ['CB-1', 'CB-2'],
          backup: breakerFail ? ['CB-Coupler', 'Remote Substation CBs'] : [],
          clearingTime: breakerFail ? '280 ms (Zone 2 Backup)' : '20 ms (Pilot Differential 87L / Distance Zone 1)',
          status: breakerFail ? 'breaker_failure' : 'normal'
        };
      case 'overlap2':
        return {
          primary: ['CB-2', 'CB-3'],
          backup: breakerFail ? ['Remote Zone 2 Breakers'] : [],
          clearingTime: breakerFail ? '290 ms' : '30 ms (Line & Bus 2 Overlap Clearance)',
          status: 'overlap_cleared'
        };
      case 'bus2':
        return {
          primary: ['CB-2', 'CB-3', 'CB-4'],
          backup: breakerFail ? ['CB-1 (Zone 2 Distance)'] : [],
          clearingTime: breakerFail ? '350 ms (Zone 2 Distance Backup)' : '25 ms (Bus 2 Differential 87B)',
          status: breakerFail ? 'breaker_failure' : 'normal'
        };
    }
  };

  const tripInfo = getTrippedBreakers();

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-2xl my-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            <h3 className="text-xl font-bold text-white tracking-wide">
              {lang === 'en' && 'Protection Zones & CT Overlap Visualizer'}
              {lang === 'hi' && 'सुरक्षा क्षेत्र एवं सीटी ओवरलैप विज़ुअलाइज़र'}
              {lang === 'bn' && 'প্রোটেকশন জোন ও সিটি ওভারল্যাপ ভিজ্যুয়ালাইজার'}
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'en' && 'Simulate primary protection zones, CT boundary placement, blind spots, and breaker failure (50BF) backup clearing.'}
            {lang === 'hi' && 'प्राथमिक सुरक्षा क्षेत्र, सीटी सीमा स्थिति, ब्लाइंड स्पॉट और ब्रेकर विफलता बैकअप सिमुलेट करें।'}
            {lang === 'bn' && 'প্রাইমারি প্রোটেকশন জোন, সিটি বাউন্ডারি, ব্লাইন্ড স্পট ও ব্রেকার ফেইলিউর ব্যাকআপ ক্লিয়ারিং সিমুলেট করুন।'}
          </p>
        </div>
        <button
          onClick={() => {
            setFaultZone('line');
            setBreakerFail(false);
            setCtLocationMode('overlap');
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
          <span>{lang === 'en' ? 'Reset' : lang === 'hi' ? 'रीसेट' : 'রিসেট'}</span>
        </button>
      </div>

      {/* Interactive Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Fault Location Selector */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <label className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block mb-2">
            {lang === 'en' ? 'Fault Location Point' : lang === 'hi' ? 'फॉल्ट बिंदु का चयन' : 'ফল্ট অবস্থান নির্বাচন'}
          </label>
          <select
            value={faultZone}
            onChange={(e) => setFaultZone(e.target.value as any)}
            className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
          >
            <option value="gen">{zoneNames.gen[lang]}</option>
            <option value="bus1">{zoneNames.bus1[lang]}</option>
            <option value="overlap1">{zoneNames.overlap1[lang]}</option>
            <option value="line">{zoneNames.line[lang]}</option>
            <option value="overlap2">{zoneNames.overlap2[lang]}</option>
            <option value="bus2">{zoneNames.bus2[lang]}</option>
          </select>
        </div>

        {/* CT Overlapping Philosophy */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <label className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-2">
            {lang === 'en' ? 'CT Placement Architecture' : lang === 'hi' ? 'सीटी प्लेसमेंट आर्किटेक्चर' : 'সিটি প্লেসমেন্ট আর্কিটেকচার'}
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => setCtLocationMode('overlap')}
              className={`flex-1 py-2 text-xs font-bold rounded transition-colors ${
                ctLocationMode === 'overlap'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {lang === 'en' ? 'Overlapping (No Blind Spot)' : lang === 'hi' ? 'ओवरलैपिंग (नो ब्लाइंड स्पॉट)' : 'ওভারল্যাপিং (ব্লাইন্ড স্পট নেই)'}
            </button>
            <button
              onClick={() => setCtLocationMode('non-overlap')}
              className={`flex-1 py-2 text-xs font-bold rounded transition-colors ${
                ctLocationMode === 'non-overlap'
                  ? 'bg-rose-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {lang === 'en' ? 'Non-Overlapping (Blind Spot)' : lang === 'hi' ? 'नॉन-ओवरलैपिंग (ब्लाइंड स्पॉट)' : 'নন-ওভারল্যাপিং (ব্লাইন্ড স্পট)'}
            </button>
          </div>
        </div>

        {/* Breaker Failure (50BF) Toggle */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <label className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-2">
            {lang === 'en' ? 'Primary Breaker Mechanism' : lang === 'hi' ? 'प्राथमिक ब्रेकर तंत्र' : 'প্রাইমারি ব্রেকার মেকানিজম'}
          </label>
          <button
            onClick={() => setBreakerFail(!breakerFail)}
            className={`w-full py-2 px-3 text-xs font-bold rounded transition-colors flex items-center justify-center gap-2 ${
              breakerFail
                ? 'bg-rose-900/60 border border-rose-600 text-rose-200'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {breakerFail ? (
              <>
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                <span>{lang === 'en' ? 'Breaker Stuck (50BF Initiated)' : lang === 'hi' ? 'ब्रेकर जाम (50BF सक्रिय)' : 'ব্রেকার আটকে গেছে (50BF সক্রিয়)'}</span>
              </>
            ) : (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'en' ? 'Breaker Healthy (Normal Trip)' : lang === 'hi' ? 'ब्रेकर स्वस्थ (सामान्य ट्रिप)' : 'ব্রেকার সুস্থ (স্বাভাবিক ট্রিপ)'}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* SVG Single-Line System Schematic with Dynamic Zones */}
      <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 mb-6 flex flex-col items-center">
        <svg viewBox="0 0 680 220" className="w-full max-w-2xl h-56">
          <defs>
            <linearGradient id="zoneGen" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="zoneBus1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="zoneLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#059669" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="zoneBus2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d97706" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* ZONE BOUNDARY OUTLINES */}
          {/* Zone 1: Generator Zone */}
          <rect x="25" y="25" width="135" height="170" rx="8" fill="url(#zoneGen)" stroke="#818cf8" strokeWidth={faultZone === 'gen' ? '2.5' : '1'} strokeDasharray="4,4" />
          <text x="92" y="42" fill="#a5b4fc" fontSize="9" fontWeight="bold" textAnchor="middle">Zone 1: Generator</text>

          {/* Zone 2: Bus 1 Zone */}
          <rect x={ctLocationMode === 'overlap' ? '120' : '145'} y="25" width="125" height="170" rx="8" fill="url(#zoneBus1)" stroke="#38bdf8" strokeWidth={faultZone === 'bus1' || faultZone === 'overlap1' ? '2.5' : '1'} strokeDasharray="4,4" />
          <text x="182" y="42" fill="#7dd3fc" fontSize="9" fontWeight="bold" textAnchor="middle">Zone 2: Bus 1</text>

          {/* Zone 3: Transmission Line Zone */}
          <rect x={ctLocationMode === 'overlap' ? '205' : '230'} y="25" width="270" height="170" rx="8" fill="url(#zoneLine)" stroke="#34d399" strokeWidth={faultZone === 'line' || faultZone === 'overlap1' || faultZone === 'overlap2' ? '2.5' : '1'} strokeDasharray="4,4" />
          <text x="340" y="42" fill="#6ee7b7" fontSize="9" fontWeight="bold" textAnchor="middle">Zone 3: Transmission Line</text>

          {/* Zone 4: Bus 2 Zone */}
          <rect x={ctLocationMode === 'overlap' ? '440' : '465'} y="25" width="130" height="170" rx="8" fill="url(#zoneBus2)" stroke="#fbbf24" strokeWidth={faultZone === 'bus2' || faultZone === 'overlap2' ? '2.5' : '1'} strokeDasharray="4,4" />
          <text x="505" y="42" fill="#fde68a" fontSize="9" fontWeight="bold" textAnchor="middle">Zone 4: Bus 2</text>

          {/* OVERLAP ANNOTATIONS */}
          {ctLocationMode === 'overlap' && (
            <>
              <rect x="205" y="52" width="40" height="18" rx="3" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
              <text x="225" y="64" fill="#38bdf8" fontSize="7" fontWeight="bold" textAnchor="middle">Overlap 1</text>

              <rect x="440" y="52" width="35" height="18" rx="3" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" />
              <text x="457" y="64" fill="#fde68a" fontSize="7" fontWeight="bold" textAnchor="middle">Overlap 2</text>
            </>
          )}

          {/* HARDWARE ELEMENTS */}
          {/* Generator G */}
          <circle cx="70" cy="110" r="22" fill="#0f172a" stroke="#818cf8" strokeWidth="2" />
          <text x="70" y="114" fill="#e0e7ff" fontSize="12" fontWeight="bold" textAnchor="middle">G</text>

          {/* CT-G1 & CT-G2 */}
          <line x1="92" y1="110" x2="115" y2="110" stroke="#818cf8" strokeWidth="2" />
          <rect x="98" y="103" width="8" height="14" rx="2" fill="#4338ca" stroke="#818cf8" />
          <text x="102" y="98" fill="#c7d2fe" fontSize="6.5" textAnchor="middle">CT-G</text>

          {/* Generator Breaker CB-G */}
          <rect x="115" y="100" width="20" height="20" rx="2" fill={tripInfo.primary.includes('CB-G') ? '#b91c1c' : '#1e293b'} stroke="#818cf8" strokeWidth="1.5" />
          <text x="125" y="114" fill={tripInfo.primary.includes('CB-G') ? '#fecaca' : '#cbd5e1'} fontSize="8" fontWeight="bold" textAnchor="middle">CB-G</text>

          {/* Substation Busbar 1 */}
          <line x1="165" y1="110" x2="190" y2="110" stroke="#38bdf8" strokeWidth="2" />
          <line x1="190" y1="75" x2="190" y2="145" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" />
          <text x="190" y="160" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">Bus 1</text>

          {/* Bus 1 CT */}
          <line x1="190" y1="110" x2="215" y2="110" stroke="#38bdf8" strokeWidth="2" />
          <rect x={ctLocationMode === 'overlap' ? '225' : '200'} y="103" width="8" height="14" rx="2" fill="#0284c7" stroke="#38bdf8" />
          <text x={ctLocationMode === 'overlap' ? '229' : '204'} y="98" fill="#bae6fd" fontSize="6.5" textAnchor="middle">CT-B1</text>

          {/* Line Breaker CB-1 */}
          <rect x="210" y="100" width="22" height="20" rx="2" fill={tripInfo.primary.includes('CB-1') || tripInfo.backup.includes('CB-1') ? '#b91c1c' : '#1e293b'} stroke="#38bdf8" strokeWidth="1.5" />
          <text x="221" y="114" fill={tripInfo.primary.includes('CB-1') ? '#fecaca' : '#cbd5e1'} fontSize="7.5" fontWeight="bold" textAnchor="middle">CB-1</text>

          {/* Line CT (Facing Line) */}
          <line x1="232" y1="110" x2="260" y2="110" stroke="#34d399" strokeWidth="2" />
          <rect x={ctLocationMode === 'overlap' ? '203' : '238'} y="103" width="8" height="14" rx="2" fill="#059669" stroke="#34d399" />
          <text x={ctLocationMode === 'overlap' ? '207' : '242'} y="98" fill="#a7f3d0" fontSize="6.5" textAnchor="middle">CT-L1</text>

          {/* Transmission Line Span */}
          <line x1="260" y1="110" x2="420" y2="110" stroke="#34d399" strokeWidth="3" />
          <text x="340" y="102" fill="#6ee7b7" fontSize="8" fontWeight="bold" textAnchor="middle">400 kV Line (120 km)</text>

          {/* Line CT (Receiving End) */}
          <rect x={ctLocationMode === 'overlap' ? '443' : '415'} y="103" width="8" height="14" rx="2" fill="#059669" stroke="#34d399" />
          <text x={ctLocationMode === 'overlap' ? '447' : '419'} y="98" fill="#a7f3d0" fontSize="6.5" textAnchor="middle">CT-L2</text>

          {/* Receiving Line Breaker CB-2 */}
          <line x1="420" y1="110" x2="445" y2="110" stroke="#34d399" strokeWidth="2" />
          <rect x="445" y="100" width="22" height="20" rx="2" fill={tripInfo.primary.includes('CB-2') || tripInfo.backup.includes('CB-2') ? '#b91c1c' : '#1e293b'} stroke="#f59e0b" strokeWidth="1.5" />
          <text x="456" y="114" fill={tripInfo.primary.includes('CB-2') ? '#fecaca' : '#cbd5e1'} fontSize="7.5" fontWeight="bold" textAnchor="middle">CB-2</text>

          {/* Bus 2 CT */}
          <rect x={ctLocationMode === 'overlap' ? '435' : '470'} y="103" width="8" height="14" rx="2" fill="#d97706" stroke="#f59e0b" />
          <text x={ctLocationMode === 'overlap' ? '439' : '474'} y="98" fill="#fde68a" fontSize="6.5" textAnchor="middle">CT-B2</text>

          {/* Substation Busbar 2 */}
          <line x1="467" y1="110" x2="495" y2="110" stroke="#f59e0b" strokeWidth="2" />
          <line x1="495" y1="75" x2="495" y2="145" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" />
          <text x="495" y="160" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle">Bus 2</text>

          {/* Feeder Breakers CB-3 & CB-4 */}
          <line x1="495" y1="95" x2="530" y2="95" stroke="#f59e0b" strokeWidth="2" />
          <rect x="530" y="87" width="20" height="16" rx="2" fill={tripInfo.primary.includes('CB-3') ? '#b91c1c' : '#1e293b'} stroke="#f59e0b" />
          <text x="540" y="99" fill={tripInfo.primary.includes('CB-3') ? '#fecaca' : '#cbd5e1'} fontSize="7" textAnchor="middle">CB-3</text>
          <line x1="550" y1="95" x2="575" y2="95" stroke="#f59e0b" strokeWidth="2" />

          <line x1="495" y1="125" x2="530" y2="125" stroke="#f59e0b" strokeWidth="2" />
          <rect x="530" y="117" width="20" height="16" rx="2" fill={tripInfo.primary.includes('CB-4') ? '#b91c1c' : '#1e293b'} stroke="#f59e0b" />
          <text x="540" y="129" fill={tripInfo.primary.includes('CB-4') ? '#fecaca' : '#cbd5e1'} fontSize="7" textAnchor="middle">CB-4</text>
          <line x1="550" y1="125" x2="575" y2="125" stroke="#f59e0b" strokeWidth="2" />

          {/* FAULT FLASH MARKER */}
          {faultZone === 'gen' && (
            <g transform="translate(70, 140)">
              <polygon points="0,-12 5,-3 12,-3 6,2 8,11 0,6 -8,11 -6,2 -12,-3 -5,-3" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
              <text x="0" y="20" fill="#f87171" fontSize="8" fontWeight="bold" textAnchor="middle">FAULT (87G)</text>
            </g>
          )}
          {faultZone === 'bus1' && (
            <g transform="translate(190, 110)">
              <polygon points="0,-12 5,-3 12,-3 6,2 8,11 0,6 -8,11 -6,2 -12,-3 -5,-3" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
              <text x="24" y="24" fill="#f87171" fontSize="8" fontWeight="bold" textAnchor="middle">FAULT (87B)</text>
            </g>
          )}
          {faultZone === 'overlap1' && (
            <g transform="translate(220, 135)">
              <polygon points="0,-12 5,-3 12,-3 6,2 8,11 0,6 -8,11 -6,2 -12,-3 -5,-3" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
              <text x="0" y="22" fill="#f87171" fontSize="8" fontWeight="bold" textAnchor="middle">OVERLAP FAULT</text>
            </g>
          )}
          {faultZone === 'line' && (
            <g transform="translate(340, 110)">
              <polygon points="0,-12 5,-3 12,-3 6,2 8,11 0,6 -8,11 -6,2 -12,-3 -5,-3" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
              <text x="0" y="24" fill="#f87171" fontSize="8" fontWeight="bold" textAnchor="middle">LINE FAULT (87L / 21)</text>
            </g>
          )}
          {faultZone === 'overlap2' && (
            <g transform="translate(456, 135)">
              <polygon points="0,-12 5,-3 12,-3 6,2 8,11 0,6 -8,11 -6,2 -12,-3 -5,-3" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
              <text x="0" y="22" fill="#f87171" fontSize="8" fontWeight="bold" textAnchor="middle">OVERLAP FAULT</text>
            </g>
          )}
          {faultZone === 'bus2' && (
            <g transform="translate(495, 110)">
              <polygon points="0,-12 5,-3 12,-3 6,2 8,11 0,6 -8,11 -6,2 -12,-3 -5,-3" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
              <text x="-24" y="24" fill="#f87171" fontSize="8" fontWeight="bold" textAnchor="middle">FAULT (87B-2)</text>
            </g>
          )}
        </svg>
      </div>

      {/* Real-Time Protection Action Summary Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Primary Breakers Tripped */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-slate-400 font-medium">{lang === 'en' ? 'Primary Breakers Tripped' : lang === 'hi' ? 'प्राथमिक ब्रेकर ट्रिप' : 'প্রাইমারি ব্রেকার ট্রিপ'}</span>
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></span>
          </div>
          <div className="text-lg font-bold text-rose-400">
            {tripInfo.primary.length > 0 ? tripInfo.primary.join(', ') : 'None (Blind Spot!)'}
          </div>
          <p className="text-xs text-slate-500 mt-1">
            {lang === 'en' ? 'Direct high-speed isolation within designated zone boundary' : lang === 'hi' ? 'निर्दिष्ट क्षेत्र सीमा के भीतर तीव्र अलगाव' : 'নির্দিষ্ট জোন সীমানায় দ্রুত বিচ্ছিন্নকরণ'}
          </p>
        </div>

        {/* Backup Actions / 50BF Status */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-slate-400 font-medium">{lang === 'en' ? 'Backup / 50BF Action' : lang === 'hi' ? 'बैकअप / 50BF कार्रवाई' : 'ব্যাকআপ / 50BF অ্যাকশন'}</span>
            <AlertTriangle className={`w-3.5 h-3.5 ${breakerFail ? 'text-amber-400' : 'text-slate-600'}`} />
          </div>
          <div className="text-lg font-bold text-amber-400">
            {tripInfo.backup.length > 0 ? tripInfo.backup.join(', ') : (breakerFail ? '50BF Active' : 'Standby (Healthy)')}
          </div>
          <p className="text-xs text-slate-500 mt-1">
            {breakerFail
              ? (lang === 'en' ? '50BF re-trips busbar to isolate stuck breaker' : lang === 'hi' ? '50BF जाम ब्रेकर को अलग करने के लिए बसबार ट्रिप करता है' : '50BF আটকে থাকা ব্রেকার বিচ্ছিন্ন করতে বাসবার ট্রিপ করে')
              : (lang === 'en' ? 'Remote Zone 2 and overcurrent relays on standby' : lang === 'hi' ? 'रिमोट जोन 2 स्टैंडबाय पर' : 'রিমোট জোন ২ স্ট্যান্ডবাই আছে')}
          </p>
        </div>

        {/* Clearing Speed */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-slate-400 font-medium">{lang === 'en' ? 'Fault Clearance Time' : lang === 'hi' ? 'फॉल्ट क्लीयरेंस समय' : 'ফল্ট ক্লিয়ারেন্স সময়'}</span>
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div className="text-base font-bold text-cyan-300">
            {tripInfo.clearingTime}
          </div>
          <p className="text-xs text-slate-500 mt-1">
            {lang === 'en' ? 'Calculated relay detect + breaker opening time' : lang === 'hi' ? 'रिले डिटेक्ट + ब्रेकर ओपनिंग समय' : 'রিলে সনাক্তকরণ + ব্রেকার খোলার মোট সময়'}
          </p>
        </div>
      </div>

      {/* Engineering Insight Note */}
      <div className="mt-4 p-3 bg-slate-950/80 rounded-lg border border-slate-800 flex items-start gap-2.5 text-xs text-slate-300">
        <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-cyan-300">
            {lang === 'en' ? 'Why CT Overlap is Mandatory in Grid Design: ' : lang === 'hi' ? 'ग्रिड डिजाइन में सीटी ओवरलैप क्यों अनिवार्य है: ' : 'গ্রিড ডিজাইনে সিটি ওভারল্যাপ কেন বাধ্যতামূলক: '}
          </span>
          {lang === 'en' && 'If CTs are installed on only one side of the circuit breaker without overlap, any fault occurring directly on the breaker terminal becomes a "Blind Spot". Neither zone differential relay detects it as an internal fault, leaving clearance entirely to slow, destructive backup overcurrent or remote Zone 2 distance relays (300-450 ms). Placing CTs on both sides of every circuit breaker guarantees zero unprotected dead zones.'}
          {lang === 'hi' && 'यदि सीटी बिना ओवरलैप के सर्किट ब्रेकर के केवल एक तरफ स्थापित किए जाते हैं, तो ब्रेकर टर्मिनल पर होने वाला कोई भी फॉल्ट "ब्लाइंड स्पॉट" बन जाता है। कोई भी डिफरेंशियल रिले इसे आंतरिक फॉल्ट नहीं मानता, जिससे फॉल्ट को केवल धीमी बैकअप सुरक्षा (300-450 ms) द्वारा ही क्लीयर किया जा सकता है।'}
          {lang === 'bn' && 'যদি সার্কিট ব্রেকারের একপাশে ওভারল্যাপ ছাড়া সিটি স্থাপন করা হয়, তবে ব্রেকার টার্মিনালে কোনো ফল্ট হলে তা "ব্লাইন্ড স্পট" হয়ে দাঁড়ায়। কোনো ডিফারেন্সিয়াল রিলে একে ইন্টারনাল ফল্ট হিসেবে পায় না, ফলে ধীরগতির ব্যাকআপ রিলের উপর নির্ভর করতে হয়। তাই প্রতিটি ব্রেকারের দুপাশে সিটি বসিয়ে জোন ওভারল্যাপ নিশ্চিত করা হয়।'}
        </div>
      </div>
    </div>
  );
};
