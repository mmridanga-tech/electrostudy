import React, { useState, useId, useEffect } from 'react';
import { Language } from '../../types';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

interface APFCStep {
  id: number;
  kvar: number;
  isActive: boolean;
}

export const APFCPanelSimulator: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const controlId = useId();

  // Dynamic Plant Load
  const [loadKw, setLoadKw] = useState<number>(180);
  const [rawLoadKvar, setRawLoadKvar] = useState<number>(190);
  const [targetPf, setTargetPf] = useState<number>(0.98);
  const [isManual, setIsManual] = useState<boolean>(false);
  const [ctPositionError, setCtPositionError] = useState<boolean>(false);

  // 6 capacitor steps: Step 1 (25 kVAR), Step 2 (25 kVAR), Step 3 (50 kVAR), Step 4 (50 kVAR), Step 5 (50 kVAR), Step 6 (50 kVAR) = Total 250 kVAR
  const [steps, setSteps] = useState<APFCStep[]>([
    { id: 1, kvar: 25, isActive: true },
    { id: 2, kvar: 25, isActive: true },
    { id: 3, kvar: 50, isActive: true },
    { id: 4, kvar: 50, isActive: false },
    { id: 5, kvar: 50, isActive: false },
    { id: 6, kvar: 50, isActive: false },
  ]);

  // Automated controller logic
  useEffect(() => {
    if (isManual || ctPositionError) return;

    // Target Q at target PF
    const targetTheta = Math.acos(targetPf);
    const targetQ = loadKw * Math.tan(targetTheta);
    const deficitQ = rawLoadKvar - targetQ;

    // Determine how many kVAR we need to connect
    let accumulatedQ = 0;
    const newSteps = steps.map((s) => {
      // If deficit requires this step
      if (accumulatedQ + s.kvar * 0.65 <= deficitQ) {
        accumulatedQ += s.kvar;
        return { ...s, isActive: true };
      }
      return { ...s, isActive: false };
    });

    setSteps(newSteps);
  }, [loadKw, rawLoadKvar, targetPf, isManual, ctPositionError]);

  // Total active compensation
  const totalInjectedKvar = steps.filter((s) => s.isActive).reduce((sum, s) => sum + s.kvar, 0);

  // If CT position error is enabled (CT installed downstream of capacitor bank), the CT cannot sense the capacitor current!
  // Controller thinks PF is still poor and keeps turning on ALL steps until severe overcompensation occurs.
  const effectiveInjectedKvar = ctPositionError ? totalInjectedKvar : totalInjectedKvar;
  const netGridKvar = rawLoadKvar - effectiveInjectedKvar;

  // S and PF
  const netS = Math.sqrt(loadKw * loadKw + netGridKvar * netGridKvar);
  const currentPf = netS > 0 ? Math.min(1, loadKw / netS) : 1;
  const isNetLagging = netGridKvar >= 0;

  const toggleStepManual = (id: number) => {
    if (!isManual) return;
    setSteps((prev) =>
      prev.map((s) => (s.id === id ? { ...s, isActive: !s.isActive } : s))
    );
  };

  const t = {
    title: {
      en: 'Automatic Power Factor Correction (APFC) Panel Simulator',
      hi: 'ऑटोमैटिक पावर फैक्टर करेक्शन (APFC) पैनल सिम्युलेटर',
      bn: 'স্বয়ংক্রিয় পাওয়ার ফ্যাক্টর সংশোধন (APFC) প্যানেল সিমুলেটর'
    },
    subtitle: {
      en: 'Microprocessor APFC relay switching algorithm, C/k sensitivity, contactor cycling, and CT installation integrity.',
      hi: 'माइक्रोप्रोसेसर APFC रिले स्विचिंग एल्गोरिदम, C/k संवेदनशीलता, कॉन्टैक्टर चक्रण एवं CT स्थापना अखंडता।',
      bn: 'মাইক্রোপ্রসেসর APFC রিলে সুইচিং অ্যালগরিদম, C/k সংবেদনশীলতা, কন্টাক্টর সাইক্লিং ও CT সংযোগ নির্ভুলতা।'
    },
    plantKw: { en: 'Factory Active Load (kW)', hi: 'कारखाना सक्रिय लोड (kW)', bn: 'কারখানার অ্যাক্টিভ লোড (kW)' },
    uncompKvar: { en: 'Inductive Load Q (kVAR)', hi: 'प्रेरक लोड Q (kVAR)', bn: 'আবেশীয় লোড Q (kVAR)' },
    targetCosPhi: { en: 'Controller Target cos φ', hi: 'कंट्रोलर लक्षित cos φ', bn: 'কন্ট্রোলার টার্গেট cos φ' },
    mode: { en: 'Controller Mode', hi: 'कंट्रोलर मोड', bn: 'কন্ট্রোলার মোড' },
    auto: { en: 'Automatic (Relay Algorithm)', hi: 'स्वचालित (रिले एल्गोरिदम)', bn: 'স্বয়ংক্রিয় (রিলে অ্যালগরিদম)' },
    manual: { en: 'Manual Override', hi: 'मैनुअल ओवरराइड', bn: 'ম্যানুয়াল নিয়ন্ত্রণ' },
    ctPlacement: { en: 'Current Transformer (CT) Location', hi: 'करंट ट्रांसफार्मर (CT) स्थापना स्थिति', bn: 'কারেন্ট ট্রান্সফরমার (CT) এর অবস্থান' },
    ctCorrect: { en: 'Correct (Incoming Feeder Before Bank)', hi: 'सही (बैंक से पहले मुख्य फीडर पर)', bn: 'সঠিক (ক্যাপাসিটর ব্যাংকের পূর্বে প্রধান ফিডারে)' },
    ctError: { en: 'Faulty (Downstream After Bank - Hunting Hazard)', hi: 'दोषपूर्ण (बैंक के बाद डाउनस्ट्रीम - दोलन/हंटिंग जोखिम)', bn: 'ভুল (ব্যাংকের পরে ডাউনস্ট্রিমে - হান্টিং ঝুঁকি)' },
    stepsTitle: { en: 'Capacitor Bank Stage Status', hi: 'कैपेसिटर बैंक स्टेज स्थिति', bn: 'ক্যাপাসিটর ব্যাংক ধাপের অবস্থা' },
    gridPf: { en: 'Net Grid Operating PF', hi: 'नेट ग्रिड परिचालन PF', bn: 'নেট গ্রিড অপারেটিং PF' },
    injectedQ: { en: 'Total Injected Compensation', hi: 'कुल अंतःक्षेपित क्षतिपूर्ति', bn: 'মোট ইনজেক্টেড ক্ষতিপূরণ' },
    netQ: { en: 'Net Reactive Power to Grid', hi: 'ग्रिड को शुद्ध प्रतिक्रियाशील शक्ति', bn: 'গ্রিডে নেট রিঅ্যাক্টিভ পাওয়ার' },
    relayLog: { en: 'APFC Microprocessor Diagnostic Log', hi: 'APFC माइक्रोप्रोसेसर नैदानिक लॉग', bn: 'APFC মাইক্রোপ্রসেসর ডায়াগনস্টিক লগ' }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-2xl space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h3 className="text-xl font-bold text-amber-400">{t.title[lang]}</h3>
        <p className="text-sm text-slate-400 mt-1">{t.subtitle[lang]}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-4 bg-slate-950 p-5 rounded-lg border border-slate-800">
          <div>
            <div className="flex justify-between items-center text-sm font-semibold mb-1">
              <label htmlFor={`${controlId}-loadkw`} className="text-emerald-400">{t.plantKw[lang]}:</label>
              <span className="font-mono text-emerald-300 text-base">{loadKw} kW</span>
            </div>
            <input
              id={`${controlId}-loadkw`}
              type="range"
              min="50"
              max="300"
              step="10"
              value={loadKw}
              onChange={(e) => setLoadKw(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>

          <div>
            <div className="flex justify-between items-center text-sm font-semibold mb-1">
              <label htmlFor={`${controlId}-uncompkvar`} className="text-rose-400">{t.uncompKvar[lang]}:</label>
              <span className="font-mono text-rose-300 text-base">{rawLoadKvar} kVAR</span>
            </div>
            <input
              id={`${controlId}-uncompkvar`}
              type="range"
              min="30"
              max="280"
              step="10"
              value={rawLoadKvar}
              onChange={(e) => setRawLoadKvar(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
            />
          </div>

          <div>
            <div className="flex justify-between items-center text-sm font-semibold mb-1">
              <label htmlFor={`${controlId}-tgtpf`} className="text-sky-400">{t.targetCosPhi[lang]}:</label>
              <span className="font-mono text-sky-300 text-base">{targetPf.toFixed(2)}</span>
            </div>
            <input
              id={`${controlId}-tgtpf`}
              type="range"
              min="0.92"
              max="0.99"
              step="0.01"
              value={targetPf}
              onChange={(e) => setTargetPf(parseFloat(e.target.value))}
              disabled={isManual}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500 disabled:opacity-50"
            />
          </div>

          {/* Mode Toggles */}
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">{t.mode[lang]}:</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setIsManual(false)}
                className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all ${
                  !isManual
                    ? 'bg-amber-600/30 border-amber-500 text-amber-300 shadow-md'
                    : 'bg-slate-900 border-slate-700 text-slate-400'
                }`}
              >
                {t.auto[lang]}
              </button>
              <button
                type="button"
                onClick={() => setIsManual(true)}
                className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all ${
                  isManual
                    ? 'bg-amber-600/30 border-amber-500 text-amber-300 shadow-md'
                    : 'bg-slate-900 border-slate-700 text-slate-400'
                }`}
              >
                {t.manual[lang]}
              </button>
            </div>
          </div>

          {/* CT Placement Diagnostic Toggle */}
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">{t.ctPlacement[lang]}:</label>
            <div className="space-y-1.5">
              <button
                type="button"
                onClick={() => setCtPositionError(false)}
                className={`w-full text-left px-3 py-2 text-xs rounded-lg border transition-all ${
                  !ctPositionError
                    ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400'
                }`}
              >
                ✓ {t.ctCorrect[lang]}
              </button>
              <button
                type="button"
                onClick={() => {
                  setCtPositionError(true);
                  // Turn on all steps in hunting fault mode
                  setSteps((prev) => prev.map((s) => ({ ...s, isActive: true })));
                }}
                className={`w-full text-left px-3 py-2 text-xs rounded-lg border transition-all ${
                  ctPositionError
                    ? 'bg-rose-950/80 border-rose-500 text-rose-300 animate-pulse'
                    : 'bg-slate-900 border-slate-800 text-slate-400'
                }`}
              >
                ⚠ {t.ctError[lang]}
              </button>
            </div>
          </div>
        </div>

        {/* APFC Panel Front Visualizer */}
        <div className="lg:col-span-7 space-y-4">
          {/* APFC Digital Relay Screen */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 shadow-inner">
            <div className="flex justify-between items-center border-b border-slate-800 pb-2 mb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">APFC RELAY CONTROLLER v4.2</span>
              <span className="flex items-center gap-1.5 text-xs">
                <span className={`w-2 h-2 rounded-full ${ctPositionError ? 'bg-rose-500 animate-ping' : 'bg-emerald-400'}`} />
                <span className={ctPositionError ? 'text-rose-400 font-bold' : 'text-emerald-400'}>
                  {ctPositionError ? 'CT SENSING FAULT' : isManual ? 'MANUAL' : 'AUTO RUN'}
                </span>
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                <div className="text-[11px] text-slate-400">{t.gridPf[lang]}</div>
                <div className={`text-2xl font-mono font-bold mt-0.5 ${currentPf >= 0.95 && isNetLagging ? 'text-emerald-400' : isNetLagging ? 'text-amber-400' : 'text-rose-400'}`}>
                  {currentPf.toFixed(3)}
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  {currentPf === 1 ? 'UNITY' : isNetLagging ? 'LAGGING' : 'LEADING ⚠'}
                </div>
              </div>

              <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                <div className="text-[11px] text-slate-400">{t.injectedQ[lang]}</div>
                <div className="text-2xl font-mono font-bold text-sky-400 mt-0.5">
                  {totalInjectedKvar} <span className="text-xs text-sky-500">kVAR</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  {steps.filter((s) => s.isActive).length} of {steps.length} Stages ON
                </div>
              </div>

              <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                <div className="text-[11px] text-slate-400">{t.netQ[lang]}</div>
                <div className="text-2xl font-mono font-bold text-amber-400 mt-0.5">
                  {Math.abs(netGridKvar).toFixed(0)} <span className="text-xs text-amber-500">kVAR</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  Uncompensated: {rawLoadKvar} kVAR
                </div>
              </div>
            </div>
          </div>

          {/* Capacitor Bank Stage Contactor Array */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div className="text-xs font-semibold text-slate-300 mb-3 flex justify-between items-center">
              <span>{t.stepsTitle[lang]} (Total: 250 kVAR Bank)</span>
              {isManual && <span className="text-amber-400 text-[11px]">Click stages to toggle contactors</span>}
            </div>

            <div className="grid grid-cols-6 gap-2">
              {steps.map((step) => (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => toggleStepManual(step.id)}
                  disabled={!isManual}
                  className={`p-2.5 rounded-lg border flex flex-col items-center justify-between text-center transition-all ${
                    step.isActive
                      ? 'bg-emerald-950/60 border-emerald-500 shadow-md ring-1 ring-emerald-500/40'
                      : 'bg-slate-900 border-slate-800 opacity-60'
                  } ${isManual ? 'cursor-pointer hover:border-slate-600' : 'cursor-default'}`}
                >
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Stage {step.id}</div>
                  <div className="w-3 h-3 rounded-full my-1.5 transition-colors shadow-sm"
                    style={{ backgroundColor: step.isActive ? '#10b981' : '#334155' }}
                  />
                  <div className={`text-xs font-mono font-bold ${step.isActive ? 'text-emerald-300' : 'text-slate-500'}`}>
                    {step.kvar}k
                  </div>
                  <div className={`text-[9px] mt-1 uppercase font-semibold ${step.isActive ? 'text-emerald-400' : 'text-slate-600'}`}>
                    {step.isActive ? 'CLOSED' : 'OPEN'}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Diagnostic Log & Engineering Notes */}
          <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 text-xs text-slate-300 space-y-2">
            <div className="font-semibold text-amber-400 flex items-center gap-1.5">
              <span>⚡ {t.relayLog[lang]}:</span>
            </div>
            {ctPositionError ? (
              <div className="text-rose-300 bg-rose-950/40 p-2.5 rounded border border-rose-800/80 leading-relaxed text-[11px]">
                <strong>CRITICAL CT INSTALLATION DEFECT:</strong> The Current Transformer was installed downstream of the capacitor bank connection point! Because the CT cannot measure the leading current injected by the capacitors, the controller continuously reads the uncompensated motor load ({rawLoadKvar} kVAR). It has locked all 6 stages ON ({totalInjectedKvar} kVAR), driving the factory bus into severe <strong>LEADING POWER FACTOR ({currentPf.toFixed(3)} Lead)</strong>. This causes utility penalties, hazardous line overvoltage, and contactor hunting.
              </div>
            ) : (
              <div className="text-slate-400 leading-relaxed text-[11px]">
                Controller utilizes a calibrated <strong>C/k ratio threshold (C/k = Q_step1 / (√3 · V · CT_ratio))</strong> to prevent contactor hunting. Discharge reconnect delay timer (minimum 60s) ensures residual cell voltage discharges below 50V via discharge resistors before re-energization, preventing catastrophic 2× V_peak anti-phase inrush transients.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
