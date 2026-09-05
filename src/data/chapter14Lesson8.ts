import { Lesson } from '../types';

export const LESSON_THREE_PHASE_POWER_QUALITY: Lesson = {
  id: 'lsn-ch14-three-phase-power-quality',
  topicId: 'tp-power-quality-three-phase',
  chapterId: 'ch-three-phase',
  order: 8,
  title: {
    en: 'Three-Phase Power Quality Measurement & Diagnostics',
    hi: 'थ्री-फेज पावर क्वालिटी मापन एवं डायग्नोस्टिक्स',
    bn: 'থ্রি-ফেজ পাওয়ার কোয়ালিটি পরিমাপ ও ডায়াগনস্টিকস'
  },
  description: {
    en: 'Master comprehensive three-phase power quality measurement and diagnostic workflows in modern electrical facilities. Analyze voltage and current unbalance, Total Harmonic Distortion (THD_V & THD_I), crest factor, displacement vs. true power factor (DPF vs. TPF), sags, swells, interruptions, voltage flicker, phase sequence anomalies, triplen neutral current accumulation, and systematic troubleshooting using Class-A Power Quality Analyzers (IEC 61000-4-30 / IEEE 519 / IEEE 1159).',
    hi: 'आधुनिक विद्युत प्रणालियों में थ्री-फेज पावर क्वालिटी मापन और व्यापक डायग्नोस्टिक वर्कफ़्लो में महारत हासिल करें। वोल्टेज और करंट असंतुलन, THD, क्रेस्ट फैक्टर, विस्थापन बनाम वास्तविक पावर फैक्टर (DPF बनाम TPF), वोल्टेज सैग, स्वेल, रुकावट (Interruption), फ्लिकर, फेज अनुक्रम दोष, न्यूट्रल करंट एवं क्लास-ए पावर क्वालिटी एनालाइजर (IEC 61000-4-30 / IEEE 519) के साथ व्यवस्थित समस्या निवारण का अध्ययन करें।',
    bn: 'আধুনিক বৈদ্যুতিক ব্যবস্থায় থ্রি-ফেজ পাওয়ার কোয়ালিটি পরিমাপ ও ডায়াগনস্টিক কার্যপ্রণালীতে দক্ষতা অর্জন করুন। ভোল্টেজ ও কারেন্ট ভারসাম্যহীনতা, THD, ক্রেস্ট ফ্যাক্টর, ডিসপ্লেসমেন্ট বনাম ট্রু পাওয়ার ফ্যাক্টর (DPF বনাম TPF), ভোল্টেজ স্যাগ, সোয়েল, ইন্টারাপশন, ফ্লিকার, ফেজ সিকোয়েন্স ত্রুটি, নিউট্রাল কারেন্ট বৃদ্ধি এবং ক্লাস-এ পাওয়ার কোয়ালিটি অ্যানালাইজারের (IEC 61000-4-30 / IEEE 519) মাধ্যমে নিয়মতান্ত্রিক সমস্যা সমাধান আয়ত্ত করুন।'
  },
  estimatedMinutes: 50,
  easyExplanation: {
    en: 'Imagine your three-phase power grid as the blood circulation system of a giant industrial plant. "Clean power" is like pure, smooth blood flowing at standard pressure and frequency (50/60 Hz sine wave). But modern facilities are packed with non-linear electronics—variable frequency drives (VFDs), server power supplies, and arc welders—that contaminate the power supply with electrical "clots" and turbulence! Voltage sags cause automated assembly lines to trip unexpectedly, harmonic currents overheat transformers and turn neutral wires red-hot, and voltage unbalance burns out 3-phase electric motors. By connecting a digital Power Quality Analyzer (PQA), engineers capture high-speed waveform snapshots, measure true vs displacement power factor, track harmonic spectrums, and pinpoint root causes before equipment fails!',
    hi: 'अपने 3-फेज ग्रिड को एक औद्योगिक संयंत्र के रक्त परिसंचरण की तरह समझें। "स्वच्छ शक्ति" का अर्थ है स्थिर आवृत्ति (50/60 Hz) और शुद्ध साइन वेव। परंतु आधुनिक इलेक्ट्रॉनिक्स (जैसे VFD, कंप्यूटर और इनवर्टर) बिजली में विकृति और हार्मोनिक्स पैदा करते हैं। वोल्टेज सैग से मशीनें अचानक बंद हो जाती हैं, हार्मोनिक्स से न्यूट्रल तार अत्यधिक गर्म हो जाते हैं और वोल्टेज असंतुलन से मोटरें जल जाती हैं। एक डिजिटल पावर क्वालिटी एनालाइज़र (PQA) जोड़कर इंजीनियर तरंगों की जांच करते हैं, ट्रू और डिस्प्लेसमेंट पावर फैक्टर मापते हैं और उपकरण खराब होने से पहले समस्या की जड़ पहचानते हैं!',
    bn: 'আপনার ৩-ফেজ গ্রিডকে একটি বিশাল শিল্প কারখানার রক্ত সংবহন ব্যবস্থার মতো কল্পনা করুন। "বিশুদ্ধ বিদ্যুৎ" হলো স্থির কম্পাঙ্ক (৫০/৬০ Hz) ও মসৃণ সাইন ওয়েভ। কিন্তু আধুনিক ড্রাইভ (VFD), কম্পিউটার ও ওয়েল্ডিং মেশিন গ্রিডে বিকৃতি ও হারমোনিক্স তৈরি করে। ভোল্টেজ স্যাগের কারণে অটোমেটেড লাইন বন্ধ হয়ে যায়, হারমোনিক্সে নিউট্রাল তার পুড়ে যাওয়ার উপক্রম হয় এবং ভোল্টেজ ভারসাম্যহীনতায় মোটর নষ্ট হয়। একটি ডিজিটাল পাওয়ার কোয়ালিটি অ্যানালাইজার (PQA) সংযোগ করে ইঞ্জিনিয়াররা ওয়েভফর্ম স্ন্যাপশট নেন, ট্রু ও ডিসপ্লেসমেন্ট পাওয়ার ফ্যাক্টর মাপেন এবং ত্রুটির মূল কারণ নির্ণয় করেন!'
  },
  detailedExplanation: {
    en: 'Three-phase power quality encompasses continuous steady-state wave parameters and transient grid disturbances governed by IEEE 1159, IEEE 519-2022, and IEC 61000-4-30 (Class A instrumentation):\n\n1. Voltage & Current Quality Fundamentals:\n   • Voltage Quality: The utility\'s ability to deliver a balanced, transient-free sinusoidal voltage at nominal RMS magnitude and constant fundamental frequency.\n   • Current Quality: The facility\'s duty to draw a sinusoidal, balanced current waveform without injecting excessive harmonic distortions or reactive VARs.\n   • Sags, Swells & Interruptions: A voltage sag (dip) is a sudden reduction between 10% and 90% nominal voltage lasting from 0.5 cycles to 1 minute, typically triggered by remote short-circuit faults or massive motor startings. Swells (110% to 180%) occur on unfaulted phases during ground faults. Complete interruptions occur below 10% nominal.\n   • Flicker (Pst / Plt): Rapid cyclic voltage fluctuations caused by fluctuating electric arc furnaces or cyclic compressor motors, inducing perceptible human visual lamp flicker.\n\n2. Waveform Distortion & True Power Factor:\n   • Crest Factor (CF): Ratio of peak instantaneous amplitude to RMS value: CF = V_peak / V_rms (ideal sinusoid = √2 ≈ 1.414). Peaked currents from capacitor charging rectifiers reach CF > 3.0.\n   • Total Harmonic Distortion (THD):\n     THD_V = [√(Σ_{h=2}^∞ Vh²)] / V1 × 100% (IEEE 519 limit ≤ 5.0% for LV/MV busbars).\n     THD_I = [√(Σ_{h=2}^∞ Ih²)] / I1 × 100%.\n   • Displacement Power Factor (DPF) vs True Power Factor (TPF):\n     DPF = cos(ϕ1) (phase angle between fundamental voltage and fundamental current).\n     True PF = Total Real Power (P) / Total Apparent Power (S) = [DPF] / √[1 + (THD_I / 100)²].\n     In harmonic-heavy facilities, standard PF meters reading only fundamental DPF read falsely optimistic (e.g., 0.96 DPF vs 0.78 True PF)!\n\n3. Sequence Mapping & Triplen Neutral Current Stacking:\n   • Harmonic orders follow modular rotational sequence: Positive (h = 1, 4, 7, 10; forward-turning), Negative (h = 2, 5, 8, 11; backward-braking causing severe rotor heating), and Zero / Triplen (h = 3, 9, 15; in-phase).\n   • In 4-wire systems feeding single-phase non-linear loads, zero-sequence triplen currents add arithmetically in the neutral: In(3) ≈ 3 · Iph(3). The neutral RMS current often reaches 130% to 173% of the phase current, requiring double-sized (200%) neutral conductors or harmonic mitigation transformers.\n\n4. Diagnostic Instrumentation & Practical Workflow:\n   • Connecting the PQA: Voltage leads connect across L1, L2, L3, and N; Rogowski coils or current clamps surround each phase and neutral respecting polarity arrows (pointing toward load).\n   • Workflow: (Step 1) Verify Phase Sequence (ABC forward vs ACB reversed); (Step 2) Measure Line and Phase RMS Voltages & Unbalance (VUF < 1.0%); (Step 3) Inspect Waveforms and Crest Factor; (Step 4) Record Harmonic Spectrum and Neutral Current; (Step 5) Correlate DPF vs True PF to detect capacitor resonance risks.',
    hi: 'थ्री-फेज पावर क्वालिटी में सतत तरंग मापदंड एवं ग्रिड डिस्टर्बेंस (IEEE 1159 / IEEE 519 / IEC 61000-4-30):\n\n1. वोल्टेज एवं करंट क्वालिटी:\n   • वोल्टेज सैग (10-90% गिरावट) और स्वेल (110-180% वृद्धि): फॉल्ट या भारी मोटर शुरू होने पर होते हैं।\n   • फ्लिकर (Flicker): तेजी से वोल्टेज में उतार-चढ़ाव।\n2. वेवफॉर्म विरूपण एवं पावर फैक्टर:\n   • क्रेस्ट फैक्टर (CF = V_peak / V_rms, आदर्श = 1.414)।\n   • THD: वोल्टेज THD 5% से कम होना अनिवार्य है।\n   • DPF बनाम True PF: True PF = DPF / √(1 + THD_I²)। हार्मोनिक्स होने पर वास्तविक PF बहुत कम हो जाता है।\n3. ट्रिप्लन हार्मोनिक्स एवं न्यूट्रल करंट:\n   • 3rd, 9th हार्मोनिक्स न्यूट्रल में जुड़कर In ≈ 3·Iph(3) बनाते हैं, जिससे न्यूट्रल तार जलने लगता है।\n4. पावर क्वालिटी एनालाइज़र (PQA) डायग्नोस्टिक वर्कफ़्लो:\n   • फेज अनुक्रम की पुष्टि -> RMS वोल्टेज व असंतुलन जांच -> वेवफॉर्म व क्रेस्ट फैक्टर -> हार्मोनिक स्पेक्ट्रम व न्यूट्रल करंट -> DPF बनाम True PF तुलना।',
    bn: 'থ্রি-ফেজ পাওয়ার কোয়ালিটি ও ডায়াগনস্টিক বিশ্লেষণ (IEEE 1159 / IEEE 519 / IEC 61000-4-30):\n\n১. ভোল্টেজ ও কারেন্ট কোয়ালিটি:\n   • ভোল্টেজ স্যাগ (১০-৯০% হ্রাস) এবং সোয়েল (১১০-১৮০% বৃদ্ধি): মোটর চালু বা ফল্ট চলাকালীন ঘটে।\n   • ফ্লিকার: বাতি দ্রুত কাঁপার অনুভূতি সৃষ্টিকারী ভোল্টেজ ওঠানামা।\n২. ক্রেস্ট ফ্যাক্টর ও ট্রু পাওয়ার ফ্যাক্টর:\n   • ক্রেস্ট ফ্যাক্টর: পিক মান ও RMS মানের অনুপাত (CF = V_peak / V_rms, সাইনে ১.৪১৪)।\n   • THD: ভোল্টেজ THD ৫% এর নিচে রাখতে হয়।\n   • DPF বনাম True PF: True PF = DPF / √(১ + THD_I²)।\n৩. ট্রিপ্লেন হারমোনিক্স ও নিউট্রাল কারেন্ট:\n   • ৩য় ও ৯ম হারমোনিক্স নিউট্রাল তারে যোগ হয়ে In ≈ 3·Iph(3) তৈরি করে যা নিউট্রালকে অতিরিক্ত উত্তপ্ত করে।\n৪. PQA ডায়াগনস্টিক কার্যপ্রণালী:\n   • ফেজ সিকোয়েন্স পরীক্ষা -> ভোল্টেজ ও ভারসাম্যহীনতা নির্ণয় -> ওয়েভফর্ম ও ক্রেস্ট ফ্যাক্টর -> হারমোনিক স্পেকট্রাম ও নিউট্রাল কারেন্ট -> DPF বনাম True PF সমন্বয়।'
  },
  formulas: [
    {
      id: 'f-harmonic-sequence-mapping',
      symbol: '\\theta_{shift}(h)',
      expression: '\\theta_{shift}(h) = -h \\cdot 120^\\circ \\pmod{360^\\circ} = \\begin{cases} -120^\\circ & (h = 3k+1, \\text{ Positive}) \\\\ +120^\\circ & (h = 3k+2, \\text{ Negative}) \\\\ 0^\\circ & (h = 3k, \\text{ Zero / Triplen}) \\end{cases}',
      title: {
        en: 'Sequence Harmonic Order Mapping Formula',
        hi: 'अनुक्रम हार्मोनिक क्रम मैपिंग सूत्र',
        bn: 'সিকোয়েন্স হারমোনিক ক্রম ম্যাপিং সূত্র'
      },
      description: {
        en: 'Maps harmonic frequencies to forward-rotating, backward-rotating, or stationary zero-sequence electromagnetic fields.',
        hi: 'हार्मोनिक आवृत्तियों को आगे घूमने वाले, पीछे घूमने वाले या स्थिर जीरो-सीक्वेंस क्षेत्रों में मैप करता है।',
        bn: 'হারমোনিক ফ্রিকোয়েন্সিগুলিকে সম্মুখমুখী, বিপরীতমুখী বা স্থির জিরো-সিকোয়েন্স ক্ষেত্রে শ্রেণিবদ্ধ করে।'
      },
      variables: [
        { symbol: 'h', name: { en: 'Harmonic order integer (1, 2, 3, ...)', hi: 'हार्मोनिक क्रम पूर्णांक', bn: 'হারমোনিক ক্রম পূর্ণসংখ্যা' } }
      ]
    },
    {
      id: 'f-triplen-neutral-summation',
      symbol: 'I_{n(3)}',
      expression: 'I_{n(3)} = I_{a(3)} + I_{b(3)} + I_{c(3)} = 3 \\cdot I_{ph(3)}',
      title: {
        en: 'Triplen Harmonic Neutral Current Stacking',
        hi: 'ट्रिप्लन हार्मोनिक न्यूट्रल धारा संचय',
        bn: 'ট্রিপ্লেন হারমোনিক নিউট্রাল কারেন্ট স্ট্যাকিং'
      },
      description: {
        en: 'Calculates the scalar summation of zero-sequence triplen harmonic currents returning in the neutral wire.',
        hi: 'न्यूट्रल तार में वापस आने वाली जीरो-सीक्वेंस ट्रिप्लन हार्मोनिक धाराओं का सीधा योग।',
        bn: 'নিউট্রাল তার দিয়ে ফিরে আসা জিরো-সিকোয়েন্স ট্রিপ্লেন হারমোনিক কারেন্টের সরাসরি যোগফল হিসাব করে।'
      },
      variables: [
        { symbol: 'I_{ph(3)}', name: { en: 'Per-phase 3rd harmonic current RMS (A)', hi: 'प्रति-फेज 3rd हार्मोनिक धारा (A)', bn: 'প্রতি-ফেজ ৩য় হারমোনিক কারেন্ট (A)' } }
      ]
    }
  ],
  diagrams: [
    {
      id: 'diag-ch14-harmonic-mapping',
      title: {
        en: 'Sequence Harmonic Rotating Vectors & Delta Trap Circulation Topology',
        hi: 'अनुक्रम हार्मोनिक घूर्णन वेक्टर एवं डेल्टा ट्रैप सर्कुलेशन टोपोलॉजी',
        bn: 'সিকোয়েন্স হারমোনিক ঘূর্ণন ভেক্টর ও ডেল্টা ট্র্যাপ সার্কুলেশন টপোলজি'
      },
      caption: {
        en: 'Engineering diagram highlighting 5th harmonic reverse rotation phasor, triplen zero-sequence in-phase alignment, and closed delta circulating currents trapping 3rd harmonics.',
        hi: '5वें हार्मोनिक का उल्टा घूर्णन, 3rd हार्मोनिक का इन-फेज संरेखन और डेल्टा वाइंडिंग में ट्रैप सर्कुलेशन आरेख।',
        bn: '৫ম হারমোনিকের বিপরীত ঘূর্ণন, ৩য় হারমোনিকের সম-দশা অবস্থান এবং ডেল্টা ওয়াইন্ডিংয়ে ট্র্যাপ সার্কুলেশন ডায়াগ্রাম।'
      },
      svgType: 'circuit-ch14-power-quality-analyzer'
    }
  ],
  sections: [
    {
      id: 'sec-ch14-k-factor-transformers',
      title: {
        en: 'Mitigation Engineering: K-Factor Transformers and Zig-Zag Traps',
        hi: 'शमन इंजीनियरिंग: K-फैक्टर ट्रांसफार्मर एवं जिग-जैग ट्रैप',
        bn: 'শমন ইঞ্জিনিয়ারিং: K-ফ্যাক্টর ট্রান্সফরমার ও জিগ-জ্যাগ ট্র্যাপ'
      },
      content: {
        en: 'Standard distribution transformers experience severe eddy-current and stray magnetic losses when subjected to harmonic-rich currents (eddy losses scale with h²!). A standard transformer subjected to 50% non-linear load will overheat and suffer premature thermal dielectric breakdown within months.\n\nTo safely supply harmonic-generating loads, engineers specify K-Factor rated transformers (ANSI/IEEE C57.110):\n• K-4: Feeders with modest non-linear lighting (up to 35% non-linear).\n• K-13: Telecommunications and corporate office buildings (up to 50% non-linear).\n• K-20 / K-30: Data centers, hospital operating theaters, and broadcast studios.\n\nAdditionally, zig-zag grounding transformers are installed at feeder distribution boards to create a ultra-low zero-sequence impedance path that traps triplen harmonics locally, keeping them out of the upstream utility transformers.',
        hi: 'हार्मोनिक्स के कारण ट्रांसफार्मर में भंवर धाराएं (Eddy currents) बहुत बढ़ जाती हैं (नुकसान h² के अनुपात में बढ़ता है!)। इससे ट्रांसफार्मर जलने से बचाने के लिए K-फैक्टर रेटेड ट्रांसफार्मर (जैसे K-13, K-20) लगाए जाते हैं जो डेटा सेंटरों में सुरक्षित रूप से चलते हैं। इसके अतिरिक्त, जिग-जैग ट्रांसफार्मर लगाकर 3rd हार्मोनिक्स को स्थानीय रूप से ट्रैप कर लिया जाता है।',
        bn: 'হারমোনিক্সের কারণে ট্রান্সফরমারের এডি কারেন্ট লস মারাত্মকভাবে বৃদ্ধি পায় (লস h² এর সমানুপাতিক!)। ফলে সাধারণ ট্রান্সফরমার অতিরিক্ত উত্তপ্ত হয়ে নষ্ট হয়ে যায়। এটি প্রতিরোধে K-ফ্যাক্টর রেটেড ট্রান্সফরমার (K-13, K-20) এবং লোকাল ট্রিপ্লেন আটকে দেওয়ার জন্য জিগ-জ্যাগ গ্রাউন্ডিং ট্রান্সফরমার ব্যবহার করা হয়।'
      }
    }
  ],
  workedExamples: [
    {
      id: 'we-ch14-l08-01',
      title: {
        en: 'Neutral Current Calculation with Heavy 3rd Harmonic Distortion',
        hi: 'भारी 3rd हार्मोनिक विरूपण के साथ न्यूट्रल धारा गणना',
        bn: 'তীব্র ৩য় হারমোনিক বিকৃতি সহ নিউট্রাল কারেন্ট গণনা'
      },
      problem: {
        en: 'A 3-phase 4-wire commercial computer center draws a balanced fundamental line current of I1 = 80 A RMS per phase. Due to single-phase switch-mode power supplies, each phase also draws a 3rd harmonic current of I3 = 40 A RMS (50% of fundamental) and a 5th harmonic current of I5 = 16 A RMS (20% of fundamental). Assuming the three phases are balanced in magnitude, calculate: (a) Total RMS phase current I_ph, (b) RMS neutral current In, and (c) Neutral-to-phase current ratio.',
        hi: 'एक 3-फेज 4-तार डेटा सेंटर में प्रत्येक फेज पर 80 A फंडामेंटल, 40 A 3rd हार्मोनिक और 16 A 5th हार्मोनिक धारा है। (a) कुल RMS फेज धारा, (b) RMS न्यूट्रल धारा, और (c) न्यूट्रल/फेज धारा अनुपात ज्ञात करें।',
        bn: 'একটি ৩-ফেজ ৪-তার ডেটা সেন্টারে প্রতিটি ফেজে ৮০ A ফান্ডামেন্টাল, ৪০ A ৩য় হারমোনিক এবং ১৬ A ৫ম হারমোনিক কারেন্ট রয়েছে। (a) মোট RMS ফেজ কারেন্ট, (b) RMS নিউট্রাল কারেন্ট, এবং (c) নিউট্রাল ও ফেজ কারেন্টের অনুপাত নির্ণয় করুন।'
      },
      solutionSteps: [
        {
          stepNumber: 1,
          description: {
            en: 'Calculate total RMS phase current:\nI_ph = √(I1² + I3² + I5²) = √(80² + 40² + 16²) = √(6400 + 1600 + 256) = √8256 = 90.86 A RMS.',
            hi: 'कुल RMS फेज धारा: √(80² + 40² + 16²) = √8256 = 90.86 A।',
            bn: 'মোট RMS ফেজ কারেন্ট: √(৮০² + ৪০² + ১৬²) = √৮২৫৬ = ৯০.৮৬ A।'
          }
        },
        {
          stepNumber: 2,
          description: {
            en: 'Analyze neutral current cancellation:\n• Fundamental (h=1): Positive sequence, balanced 120° displacement ==> In(1) = 0 A.\n• 5th Harmonic (h=5): Negative sequence, balanced 120° displacement ==> In(5) = 0 A.\n• 3rd Harmonic (h=3): Zero sequence, in-phase on all 3 phases ==> In(3) = 3 × I3 = 3 × 40 A = 120.0 A RMS!',
            hi: 'न्यूट्रल धारा विश्लेषण:\n• फंडामेंटल और 5वां हार्मोनिक 120° पर होने के कारण न्यूट्रल में शून्य (0 A) हो जाते हैं।\n• 3rd हार्मोनिक इन-फेज होने के कारण सीधे जुड़ते हैं: In = 3 × 40 = 120 A!',
            bn: 'নিউট্রাল কারেন্ট বিশ্লেষণ:\n• ফান্ডামেন্টাল এবং ৫ম হারমোনিক ১২০° ব্যবধানে থাকায় নিউট্রালে বাতিল হয়ে ০ A হয়।\n• ৩য় হারমোনিক সম-দশায় থাকায় সরাসরি যোগ হয়: In = ৩ × ৪০ = ১২০ A!'
          }
        },
        {
          stepNumber: 3,
          description: {
            en: 'Total RMS Neutral Current In = 120.0 A RMS.\nNotice that the neutral conductor carries 120 A, which is significantly GREATER than the 90.86 A carried by the phase conductors!\nRatio = In / I_ph = 120.0 / 90.86 = 1.32 (132% of phase current). A 100% or 200% rated neutral is essential.',
            hi: 'कुल न्यूट्रल धारा In = 120 A। न्यूट्रल में फेज तार (90.86 A) से भी ज्यादा करंट बह रहा है! अनुपात = 1.32 (132%)।',
            bn: 'মোট নিউট্রাল কারেন্ট In = ১২০ A। নিউট্রাল তারে ফেজ তারের (৯০.৮৬ A) চেয়েও বেশি কারেন্ট প্রবাহিত হচ্ছে! অনুপাত = ১.৩২ (১৩২%)।'
          }
        }
      ]
    },
    {
      id: 'we-ch14-l08-02',
      title: {
        en: 'Total Harmonic Distortion (THDi) & True Power Factor in VFD Drives',
        hi: 'VFD ड्राइव में कुल हार्मोनिक विरूपण (THDi) एवं वास्तविक पावर फैक्टर',
        bn: 'VFD ড্রাইভে মোট হারমোনিক বিকৃতি (THDi) ও প্রকৃত পাওয়ার ফ্যাক্টর'
      },
      problem: {
        en: 'A variable frequency drive (VFD) fed from a 400 V sinusoidal supply draws a fundamental current I_1 = 100 A with displacement power factor DPF = cos(ϕ1) = 0.95 lagging. The drive generates a 5th harmonic current I_5 = 20 A and a 7th harmonic current I_7 = 14 A. Calculate: (a) The total RMS line current I_rms, (b) The current Total Harmonic Distortion (THD_i), (c) The Distortion Power Factor, and (d) The overall True Power Factor.',
        hi: '400 V साइन आपूर्ति से जुड़ा एक VFD ड्राइव 100 A की मूल धारा लेता है जिसका DPF = 0.95 है। ड्राइव में 5वां हार्मोनिक I_5 = 20 A और 7वां हार्मोनिक I_7 = 14 A है। ज्ञात करें: (a) कुल RMS लाइन धारा I_rms, (b) करंट THD_i, (c) डिस्टॉर्शन पावर फैक्टर, और (d) कुल वास्तविक पावर फैक्टर।',
        bn: '৪০০ V সাইন সাপ্লাই থেকে পরিচালিত একটি VFD ড্রাইভের মূল কারেন্ট I_1 = ১০০ A এবং ডিসপ্লেসমেন্ট পাওয়ার ফ্যাক্টর DPF = ০.৯৫। ড্রাইভে ৫ম হারমোনিক I_5 = ২০ A এবং ৭ম হারমোনিক I_7 = ১৪ A রয়েছে। নির্ণয় করুন: (a) মোট RMS লাইন কারেন্ট I_rms, (b) কারেন্ট THD_i, (c) ডিসটরশন পাওয়ার ফ্যাক্টর, এবং (d) সার্বিক প্রকৃত পাওয়ার ফ্যাক্টর।'
      },
      solutionSteps: [
        {
          stepNumber: 1,
          description: {
            en: 'Compute total RMS line current combining all harmonic components:\nI_rms = √(I_1² + I_5² + I_7²) = √(100² + 20² + 14²) = √(10,000 + 400 + 196) = √10,596 = 102.94 A.',
            hi: 'कुल RMS धारा: I_rms = √(100² + 20² + 14²) = √10,596 = 102.94 A।',
            bn: 'মোট RMS কারেন্ট: I_rms = √(১০০² + ২০² + ১৪²) = √১০,৫৯৬ = ১০২.৯৪ A।'
          }
        },
        {
          stepNumber: 2,
          description: {
            en: 'Compute Total Harmonic Distortion of Current (THD_i):\nTHD_i = √(I_5² + I_7²) / I_1 = √(400 + 196) / 100 = √596 / 100 = 24.41 / 100 = 0.2441 = 24.41%.',
            hi: 'करंट THD_i = √(20² + 14²) / 100 = 24.41 / 100 = 24.41%।',
            bn: 'কারেন্ট THD_i = √(২০² + ১৪²) / ১০০ = ২৪.৪১ / ১০০ = ২৪.৪১%।'
          }
        },
        {
          stepNumber: 3,
          description: {
            en: 'Compute Distortion Power Factor (pf_dist):\npf_dist = 1 / √(1 + THD_i²) = 1 / √(1 + 0.2441²) = 1 / √(1 + 0.0596) = 1 / √1.0596 = 1 / 1.0294 = 0.9714.',
            hi: 'डिस्टॉर्शन पावर फैक्टर: pf_dist = 1 / √(1 + 0.2441²) = 0.9714।',
            bn: 'ডিসটরশন পাওয়ার ফ্যাক্টর: pf_dist = ১ / √(১ + ০.২৪৪১²) = ০.৯৭১৪।'
          }
        },
        {
          stepNumber: 4,
          description: {
            en: 'Compute True Power Factor (pf_true):\npf_true = DPF × pf_dist = 0.95 × 0.9714 = 0.9228 lagging.\nEngineering Insight: Standard power factor meters that only measure fundamental voltage-current phase displacement read 0.95, masking the harmonic-induced losses that reduce the true power factor to 0.923.',
            hi: 'वास्तविक पावर फैक्टर: pf_true = 0.95 × 0.9714 = 0.923 लैगिंग। हार्मोनिक के कारण वास्तविक PF घटकर 0.923 रह जाता है।',
            bn: 'প্রকৃত পাওয়ার ফ্যাক্টর: pf_true = ০.৯৫ × ০.৯৭১৪ = ০.৯২৩ ল্যাগিং। হারমোনিকের কারণে আসল PF কমে ০.৯২৩ এ নেমে আসে।'
          }
        }
      ]
    }
  ],
  importantPoints: {
    en: [
      'Harmonics of order h = 3k + 1 (1st, 4th, 7th) are positive sequence and rotate forward.',
      'Harmonics of order h = 3k + 2 (2nd, 5th, 8th) are negative sequence and rotate backward, producing motor braking.',
      'Harmonics of order h = 3k (3rd, 6th, 9th) are zero sequence (triplens) and are in phase on all three phases.',
      'Delta windings trap triplen harmonics by circulating them inside the delta loop, preventing them from entering external lines.'
    ],
    hi: [
      'h = 3k + 1 (1, 4, 7) क्रम के हार्मोनिक्स पॉजिटिव सीक्वेंस होते हैं और आगे घूमते हैं।',
      'h = 3k + 2 (2, 5, 8) क्रम के हार्मोनिक्स नेगेटिव सीक्वेंस होते हैं और पीछे घूमकर मोटर में ब्रेक लगाते हैं।',
      'h = 3k (3, 6, 9) क्रम के हार्मोनिक्स (ट्रिप्लन) जीरो सीक्वेंस होते हैं और तीनों फेजों में एक ही कला में होते हैं।',
      'डेल्टा वाइंडिंग 3rd हार्मोनिक्स को अपने लूप में घुमाकर बाहर की लाइनों में जाने से रोक देती है।'
    ],
    bn: [
      'h = 3k + 1 (১ম, ৪র্থ, ৭ম) ক্রমের হারমোনিক্সগুলি পজিটিভ সিকোয়েন্স এবং সামনের দিকে ঘোরে।',
      'h = 3k + 2 (২য়, ৫ম, ৮ম) ক্রমের হারমোনিক্সগুলি নেগেটিভ সিকোয়েন্স এবং পেছনের দিকে ঘুরে মোটরে ব্রেক দেয়।',
      'h = 3k (৩য়, ৬ষ্ঠ, ৯ম) ক্রমের ট্রিপ্লেন হারমোনিক্সগুলি জিরো সিকোয়েন্স এবং তিনটি ফেজেই সম-দশায় থাকে।',
      'ডেল্টা ওয়াইন্ডিং ৩য় হারমোনিক্সকে লুপের ভেতর আটকে রাখে, ফলে এগুলি বাইরের লাইনে বের হতে পারে না।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistake: Expecting 3rd harmonic currents to cancel out in the neutral wire like fundamental currents. Correction: Triplens have 0° relative phase shift (h × 120° = 360° = 0°); they add arithmetically: In = 3 × I3.',
      'Mistake: Assuming 5th harmonic current creates positive torque in an AC induction motor. Correction: The 5th harmonic is negative sequence and produces a backward rotating magnetic field that counters the rotor.',
      'Mistake: Sizing the neutral conductor at 50% cross-section in non-linear commercial office loads, which leads to neutral burnouts.'
    ],
    hi: [
      'त्रुटि: यह सोचना कि 3rd हार्मोनिक धाराएं फंडामेंटल की तरह न्यूट्रल में शून्य हो जाएंगी। सुधार: ये इन-फेज होती हैं और सीधे जुड़कर 3 गुना हो जाती हैं।',
      'त्रुटि: यह मानना कि 5वां हार्मोनिक मोटर को आगे चलाता है। सुधार: 5वां हार्मोनिक नेगेटिव सीक्वेंस होता है और मोटर को उल्टा रोकने की कोशिश करता है।',
      'त्रुटि: कंप्यूटर लोड वाले भवनों में न्यूट्रल तार को 50% पतला रखना, जिससे न्यूट्रल तार जल जाता है।'
    ],
    bn: [
      'ভুল: ৩য় হারমোনিক কারেন্টও ফান্ডামেন্টালের মতো নিউট্রালে বাতিল হয়ে যাবে ভাবা। সংশোধন: ট্রিপ্লেন হারমোনিক্স সম-দশায় থাকে, তাই সরাসরি ৩ গুণ হয়ে যোগ হয়।',
      'ভুল: ধারণা করা যে ৫ম হারমোনিক মোটরে ঘূর্ণন শক্তি বৃদ্ধি করে। সংশোধন: ৫ম হারমোনিক নেগেটিভ সিকোয়েন্স হওয়ায় মোটরে বিপরীত ব্রেকিং বল সৃষ্টি করে।',
      'ভুল: আইটি বা কম্পিউটার লোডে নিউট্রাল তারকে অর্ধেক মাপে রাখা, যা তারে অগ্নিকাণ্ড ঘটায়।'
    ]
  },
  keyTakeaways: {
    en: [
      'Understanding sequence harmonic mapping is vital for diagnosing motor overheating, transformer derating, and neutral fires.',
      'Delta-wye transformer configurations are widely used in substations specifically to prevent triplen harmonics from polluting transmission grids.',
      'Modern data centers require 200% sized neutrals and K-factor rated isolation transformers to withstand non-linear computer loads.'
    ],
    hi: [
      'मोटर के गर्म होने और न्यूट्रल में आग लगने के कारणों को समझने के लिए हार्मोनिक मैपिंग का ज्ञान आवश्यक है।',
      'ट्रांसमिशन ग्रिड में 3rd हार्मोनिक्स को जाने से रोकने के लिए डेल्टा-स्टार ट्रांसफार्मर लगाए जाते हैं।',
      'डेटा सेंटरों में 200% आकार के न्यूट्रल तार और K-फैक्टर ट्रांसफार्मर अनिवार्य हैं।'
    ],
    bn: [
      'মোটরের অতিরিক্ত গরম হওয়া এবং নিউট্রালে অগ্নিকাণ্ড প্রতিরোধে হারমোনিক সিকোয়েন্স ম্যাপিং অত্যন্ত জরুরি।',
      'ট্রান্সমিশন লাইনে ৩য় হারমোনিক প্রবেশ ঠেকাতে ডেল্টা-স্টার ট্রান্সফরমার বিশ্বব্যাপী ব্যবহৃত হয়।',
      'আধুনিক ডেটা সেন্টারে ২০০% মাপের নিউট্রাল তার এবং K-ফ্যাক্টর আইসোলেশন ট্রান্সফরমার ব্যবহার করা বাধ্যতামূলক।'
    ]
  },
  practiceQuestions: [
    {
      id: 'pq-ch14-l08-01',
      question: {
        en: 'Determine the sequence type (positive, negative, or zero sequence) for the following harmonic orders: 7th, 11th, and 15th.',
        hi: 'निम्नलिखित हार्मोनिक क्रमों के लिए अनुक्रम प्रकार (पॉजिटिव, नेगेटिव या जीरो) निर्धारित करें: 7th, 11th, तथा 15th।',
        bn: 'নিম্নলিখিত হারমোনিক ক্রমগুলির জন্য সিকোয়েন্সের প্রকার (পজিটিভ, নেগেটিভ বা জিরো) নির্ধারণ করুন: ৭ম, ১১তম এবং ১৫তম।'
      },
      hint: {
        en: 'Apply modulo 3: 7 = 3(2)+1 ==> Positive sequence. 11 = 3(3)+2 ==> Negative sequence. 15 = 3(5)+0 ==> Zero sequence (triplen).',
        hi: '7 = 3(2)+1 (पॉजिटिव सीक्वेंस), 11 = 3(3)+2 (नेगेटिव सीक्वेंस), 15 = 3(5) (जीरो सीक्वेंस)।',
        bn: '৭ = ৩(২)+১ (পজিটিভ সিকোয়েন্স), ১১ = ৩(৩)+২ (নেগেটিভ সিকোয়েন্স), ১৫ = ৩(৫) (জিরো সিকোয়েন্স বা ট্রিপ্লেন)।'
      }
    },
    {
      id: 'pq-ch14-l08-02',
      question: {
        en: 'Why does a delta-connected transformer winding circulate triplen harmonic currents without letting them escape into the external transmission line conductors?',
        hi: 'डेल्टा वाइंडिंग 3rd हार्मोनिक्स को अपने अंदर क्यों घुमाती रहती है और बाहर लाइन तारों में क्यों नहीं जाने देती?',
        bn: 'ডেল্টা ওয়াইন্ডিং কেন ৩য় হারমোনিক্সকে নিজের ভেতরেই আবর্তিত করে এবং বাইরের লাইন তারে যেতে বাধা দেয়?'
      },
      hint: {
        en: 'Inside the loop, triplen voltages add in series: Vab3 + Vbc3 + Vca3 = 3·V3, causing loop circulation. At the line terminals, line current is the difference between two equal in-phase branch currents: IA = Iab3 - Ica3 = 0.',
        hi: 'लूप के अंदर वोल्टेज जुड़ते हैं (3·V3), जिससे लूप में धारा बहती है। लेकिन लाइन पर IA = Iab3 - Ica3 = 0 हो जाता है क्योंकि दोनों शाखाओं में धारा समान और एक ही कला में होती है।',
        bn: 'লুপের ভেতরে ভোল্টেজগুলি সরাসরি যোগ হয়ে কারেন্ট তৈরি করে। কিন্তু লাইনে IA = Iab3 - Ica3 = ০ হয় কারণ দুটি শাখা কারেন্ট সম-দশায় ও সমান থাকে।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch14-l08-01',
      question: {
        en: 'Which symmetrical component sequence do 5th and 11th harmonics belong to in a balanced three-phase system?',
        hi: 'संतुलित 3-फेज प्रणाली में 5वें और 11वें हार्मोनिक किस सममितीय अनुक्रम से संबंधित हैं?',
        bn: 'একটি সুষম ৩-ফেজ সিস্টেমে ৫ম এবং ১১তম হারমোনিক কোন প্রতিসম সিকোয়েন্সের অন্তর্ভুক্ত?'
      },
      options: [
        { en: 'Negative sequence (h = 3k + 2), which produces backward-revolving magnetic fields', hi: 'नेगेटिव सीक्वेंस (h = 3k + 2), जो उल्टा घूमने वाला चुंबकीय क्षेत्र बनाता है', bn: 'নেগেটিভ সিকোয়েন্স (h = 3k + 2), যা বিপরীতমুখী ঘূর্ণন ক্ষেত্র তৈরি করে' },
        { en: 'Positive sequence (h = 3k + 1)', hi: 'पॉजिटिव सीक्वेंस (h = 3k + 1)', bn: 'পজিটিভ সিকোয়েন্স (h = 3k + 1)' },
        { en: 'Zero sequence (h = 3k)', hi: 'जीरो सीक्वेंस (h = 3k)', bn: 'জিরো সিকোয়েন্স (h = 3k)' },
        { en: 'Direct current (0 Hz)', hi: 'दिष्ट धारा (0 Hz)', bn: 'ডাইরেক্ট কারেন্ট (০ Hz)' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Harmonics of order h = 3k + 2 (2nd, 5th, 8th, 11th) exhibit a phase progression of A-C-B (+120° shift), making them negative sequence.',
        hi: 'h = 3k + 2 क्रम वाले हार्मोनिक्स (2nd, 5th, 11th) की कला A-C-B होती है, जिससे वे नेगेटिव सीक्वेंस होते हैं।',
        bn: 'h = 3k + 2 ক্রমের হারমোনিক্সগুলি (২য়, ৫ম, ১১তম) A-C-B ক্রমে অবস্থান করায় এগুলি নেগেটিভ সিকোয়েন্স হয়।'
      }
    },
    {
      id: 'mcq-ch14-l08-02',
      question: {
        en: 'What detrimental mechanical and thermal effect does the 5th harmonic current induce in an industrial three-phase induction motor?',
        hi: 'औद्योगिक 3-फेज इंडक्शन मोटर में 5वां हार्मोनिक क्या यांत्रिक और थर्मल दुष्प्रभाव डालता है?',
        bn: 'শিল্প ৩-ফেজ ইন্ডাকশন মোটরে ৫ম হারমোনিক কারেন্ট কী ক্ষতিকারক যান্ত্রিক ও তাপীয় প্রভাব ফেলে?'
      },
      options: [
        { en: 'It produces a reverse-rotating magnetic field at 5 times fundamental frequency, producing counter-torque (braking) and severe rotor resistance heating', hi: 'यह 5 गुना गति से उल्टा घूमने वाला चुंबकीय क्षेत्र बनाता है, जिससे ब्रेकिंग टॉर्क और रोटर में अत्यधिक गर्मी पैदा होती है', bn: 'এটি ফান্ডামেন্টাল ফ্রিকোয়েন্সির ৫ গুণ গতিতে বিপরীত ঘূর্ণন ক্ষেত্র তৈরি করে, ফলে ব্রেকিং টর্ক ও রোটরে তীব্র তাপ সৃষ্টি হয়' },
        { en: 'It doubles the motor shaft rotational speed instantly', hi: 'यह मोटर की गति तुरंत दोगुनी कर देता है', bn: 'এটি মোটরের গতি সাথে সাথে দ্বিগুণ করে' },
        { en: 'It completely eliminates all motor vibration', hi: 'यह मोटर का सारा कंपन समाप्त कर देता है', bn: 'এটি মোটরের সব ধরনের কম্পন দূর করে' },
        { en: 'It converts the induction motor into a DC generator', hi: 'यह मोटर को डीसी जनरेटर में बदल देता है', bn: 'এটি মোটরকে ডিসি জেনারেটরে রূপান্তর করে' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Because the 5th harmonic is negative sequence, its stator field rotates in reverse at 5× speed relative to the fundamental forward field. The slip relative to the rotor is approximately 6, causing high-frequency rotor eddy currents, severe heating, and counter-torque.',
        hi: '5वां हार्मोनिक उल्टा घूमता है, जिससे रोटर के सापेक्ष स्लिप लगभग 6 हो जाती है। इससे भयंकर एड़ी धाराएं और ब्रेकिंग टॉर्क बनता है।',
        bn: '৫ম হারমোনিক বিপরীত দিকে ঘোরার কারণে রোটরের সাপেক্ষে স্লিপ প্রায় ৬ হয়, যা তীব্র এডি কারেন্ট, তাপ ও ব্রেকিং টর্ক সৃষ্টি করে।'
      }
    },
    {
      id: 'mcq-ch14-l08-03',
      question: {
        en: 'Why do triplen harmonics (3rd, 9th, 15th) fail to appear in the line currents entering or leaving a balanced delta-connected transformer winding?',
        hi: 'ट्रिप्लन हार्मोनिक्स (3rd, 9th, 15th) संतुलित डेल्टा ट्रांसफार्मर वाइंडिंग के लाइन तारों में क्यों नहीं दिखाई देते?',
        bn: 'সুষম ডেল্টা ট্রান্সফরমার ওয়াইন্ডিংয়ের লাইন কারেন্টে কেন ট্রিপ্লেন হারমোনিক্স (৩য়, ৯ম, ১৫তম) দেখা যায় না?'
      },
      options: [
        { en: 'Triplen harmonics are zero-sequence (in-phase on all branches); when taking line currents by KCL (IA = Iab - Ica), identical in-phase branch currents cancel each other completely (I3 - I3 = 0)', hi: 'ट्रिप्लन हार्मोनिक्स इन-फेज होते हैं; जब KCL (IA = Iab - Ica) द्वारा लाइन धारा ली जाती है, तो दो समान इन-फेज धाराएं एक-दूसरे को पूरी तरह रद्द कर देती हैं (I3 - I3 = 0)', bn: 'ট্রিপ্লেন হারমোনিক্স সম-দশায় থাকে; ফলে KCL সূত্র (IA = Iab - Ica) প্রয়োগ করলে দুটি সমান সম-দশা কারেন্ট একে অপরকে সম্পূর্ণ বাতিল করে দেয় (I3 - I3 = 0)' },
        { en: 'Because copper conductors block all frequencies above 100 Hz', hi: 'क्योंकि तांबा 100 Hz से ऊपर की आवृत्ति को रोक देता है', bn: 'কারণ তামা ১০০ Hz এর উপরের ফ্রিকোয়েন্সি আটকে দেয়' },
        { en: 'Because delta windings contain large filtering capacitors inside the core', hi: 'क्योंकि डेल्टा वाइंडिंग में कैपेसिटर लगे होते हैं', bn: 'কারণ ডেল্টায় ক্যাপাসিটর ফিল্টার থাকে' },
        { en: 'Because triplen harmonics only exist in direct current', hi: 'क्योंकि ट्रिप्लन केवल डीसी में होते हैं', bn: 'কারণ ট্রিপ্লেন কেবল ডিসিতে বিদ্যমান' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'In a balanced system, Iab(3) and Ica(3) have identical magnitude and angle. Therefore, the line current IA(3) = Iab(3) - Ica(3) = 0. The triplens circulate harmlessly inside the delta without escaping to the lines.',
        hi: 'Iab और Ica की 3rd हार्मोनिक धाराएं मान और कोण में समान होती हैं, इसलिए लाइन करंट IA = Iab - Ica = 0 हो जाता है।',
        bn: 'Iab এবং Ica তে ৩য় হারমোনিক কারেন্ট মান ও দশায় হুবহু সমান থাকে, ফলে লাইন কারেন্ট IA = Iab - Ica = ০ হয়।'
      }
    },
    {
      id: 'mcq-ch14-l08-04',
      question: {
        en: 'In a 4-wire star commercial feeder supplying non-linear single-phase loads, each phase carries 30 A of 3rd harmonic current. What magnitude of 3rd harmonic current flows through the neutral wire?',
        hi: 'एक 4-तार स्टार फीडर में प्रत्येक फेज पर 30 A की 3rd हार्मोनिक धारा है। न्यूट्रल तार में कितनी 3rd हार्मोनिक धारा बहेगी?',
        bn: 'একটি ৪-তার স্টার ফিডারে প্রতিটি ফেজে ৩০ A করে ৩য় হারমোনিক কারেন্ট রয়েছে। নিউট্রাল তারে কত মানের ৩য় হারমোনিক কারেন্ট প্রবাহিত হবে?'
      },
      options: [
        { en: '90 A (3 × 30 A)', hi: '90 A (3 × 30 A)', bn: '৯০ A (৩ × ৩০ A)' },
        { en: '0 A (Cancellation)', hi: '0 A (रद्द हो जाती है)', bn: '০ A (বাতিল হয়ে যায়)' },
        { en: '30 A', hi: '30 A', bn: '৩০ A' },
        { en: '51.96 A (√3 × 30 A)', hi: '51.96 A (√3 × 30 A)', bn: '৫১.৯৬ A (√3 × ৩০ A)' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Because 3rd harmonics are zero-sequence, they have 0° relative phase shift between phases. At the neutral junction, they add arithmetically: In(3) = Ia(3) + Ib(3) + Ic(3) = 30 + 30 + 30 = 90 A.',
        hi: '3rd हार्मोनिक्स के बीच 0° का अंतर होता है, अतः वे न्यूट्रल में सीधे जुड़ जाते हैं: 30 + 30 + 30 = 90 A।',
        bn: '৩য় হারমোনিক্সগুলির মধ্যে কোনো ফেজ পার্থক্য (০°) না থাকায় এরা নিউট্রালে সরাসরি যোগ হয়: ৩০ + ৩০ + ৩০ = ৯০ A।'
      }
    },
    {
      id: 'mcq-ch14-l08-05',
      question: {
        en: 'What is the maximum Total Harmonic Voltage Distortion (THD_V) permitted at the Point of Common Coupling (PCC) for distribution voltages under 1 kV according to IEEE Standard 519-2022?',
        hi: 'IEEE 519-2022 के अनुसार 1 kV से कम वितरण वोल्टेज के लिए कुल वोल्टेज हार्मोनिक विरूपण (THD_V) की अधिकतम अनुमेय सीमा क्या है?',
        bn: 'IEEE 519-2022 অনুসারে ১ kV এর নিচে বিতরণ ভোল্টেজের জন্য মোট ভোল্টেজ হারমোনিক বিকৃতির (THD_V) সর্বোচ্চ অনুমোদিত সীমা কত?'
      },
      options: [
        { en: '5.0% (with individual harmonic limit of 3.0%)', hi: '5.0% (व्यक्तिगत हार्मोनिक सीमा 3.0% के साथ)', bn: '৫.০% (স্বতন্ত্র হারমোনিক সীমা ৩.০% সহ)' },
        { en: '20.0%', hi: '20.0%', bn: '২০.০%' },
        { en: '0.1%', hi: '0.1%', bn: '০.১%' },
        { en: '50.0%', hi: '50.0%', bn: '৫০.০%' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'IEEE 519 mandates that for low-voltage systems (< 1 kV), total harmonic voltage distortion THD_V must not exceed 5.0%, and no single harmonic may exceed 3.0%.',
        hi: 'IEEE 519 के अनुसार लो-वोल्टेज सिस्टम में THD_V 5.0% से अधिक नहीं होना चाहिए और कोई अकेला हार्मोनिक 3.0% से ऊपर नहीं होना चाहिए।',
        bn: 'IEEE 519 মানদণ্ড অনুযায়ী লো-ভোল্টেজ সিস্টেমে THD_V সর্বোচ্চ ৫.০% এবং একক কোনো হারমোনিক ৩.০% এর বেশি হতে পারবে না।'
      }
    },
    {
      id: 'mcq-ch14-l08-06',
      question: {
        en: 'What specific design feature characterizes a "K-Factor" rated distribution transformer used in modern data centers?',
        hi: 'आधुनिक डेटा सेंटरों में प्रयुक्त "K-फैक्टर" रेटेड वितरण ट्रांसफार्मर की क्या विशिष्ट विशेषता होती है?',
        bn: 'আধুনিক ডেটা সেন্টারে ব্যবহৃত "K-ফ্যাক্টর" রেটেড ট্রান্সফরমারের মূল বৈশিষ্ট্য কী?'
      },
      options: [
        { en: 'Double-sized neutral busbars, electrostatic shielding between primary and secondary, and transposed low-loss conductors to withstand high eddy-current losses from harmonics', hi: 'डबल आकार का न्यूट्रल बसबार, प्राइमरी-सेकेंडरी के बीच शील्डिंग और हार्मोनिक्स के भंवर धारा नुकसान को सहने वाले विशेष कंडक्टर', bn: 'দ্বিগুণ আকারের নিউট্রাল বাসবার, প্রাইমারি ও সেকেন্ডারির মাঝে ইলেক্ট্রোস্ট্যাটিক শিল্ডিং এবং হারমোনিক জনিত এডি কারেন্ট লস কমানোর উপযোগী পরিবাহী' },
        { en: 'Aluminum core replaced by plastic core', hi: 'कोर को प्लास्टिक का बनाना', bn: 'কোর প্লাস্টিক দিয়ে তৈরি করা' },
        { en: 'Elimination of the transformer cooling oil', hi: 'ट्रांसफार्मर के तेल को हटा देना', bn: 'ট্রান্সফরমার তেল অপসারণ করা' },
        { en: 'Operating exclusively at 400 Hz frequency', hi: 'केवल 400 Hz आवृत्ति पर चलना', bn: 'কেবল ৪০০ Hz ফ্রিকোয়েন্সিতে চালনা করা' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'K-factor transformers are engineered to withstand the thermal stresses of harmonic eddy-current losses. They incorporate 200% sized neutrals, electrostatic shields, and specialized winding transpositions.',
        hi: 'K-फैक्टर ट्रांसफार्मर में हार्मोनिक्स की गर्मी सहने के लिए 200% आकार का न्यूट्रल और विशेष कम-नुकसान वाली वाइंडिंग बनाई जाती है।',
        bn: 'K-ফ্যাক্টর ট্রান্সফরমার হারমোনিক জনিত তাপীয় চাপ সহ্য করতে পারে। এতে ২০০% সাইজের নিউট্রাল এবং বিশেষ কম-ক্ষতির ওয়াইন্ডিং ব্যবহৃত হয়।'
      }
    },
    {
      id: 'mcq-ch14-l08-07',
      question: {
        en: 'How does a zig-zag grounding transformer mitigate neutral overheating in a facility with high 3rd harmonic content?',
        hi: 'एक जिग-जैग अर्थिंग ट्रांसफार्मर उच्च 3rd हार्मोनिक वाले परिसर में न्यूट्रल के गर्म होने को कैसे रोकता है?',
        bn: 'একটি জিগ-জ্যাগ গ্রাউন্ডিং ট্রান্সফরমার কীভাবে উচ্চ ৩য় হারমোনিকযুক্ত কারখানায় নিউট্রালের অতিরিক্ত গরম হওয়া প্রশমিত করে?'
      },
      options: [
        { en: 'It presents an extremely low impedance path exclusively to zero-sequence triplen currents, trapping and shunting them locally near the loads so they do not travel through upstream feeders', hi: 'यह जीरो-सीक्वेंस ट्रिप्लन धाराओं को बहुत कम प्रतिबाधा का रास्ता देकर उन्हें लोड के पास ही ट्रैप कर लेता है ताकि वे मुख्य फीडर में न जाएं', bn: 'এটি জিরো-সিকোয়েন্স ট্রিপ্লেন কারেন্টকে অত্যন্ত নিম্ন ইম্পিডেন্সের পথ প্রদান করে লোডের কাছেই আটকে ফেলে, ফলে এগুলি মূল ফিডারে যেতে পারে না' },
        { en: 'It converts the 3rd harmonic currents into direct current to charge batteries', hi: 'यह 3rd हार्मोनिक को डीसी में बदलकर बैटरी चार्ज करता है', bn: 'এটি ৩য় হারমোনিককে ডিসিতে রূপান্তর করে ব্যাটারি চার্জ করে' },
        { en: 'It shuts down the factory whenever harmonics exceed 2%', hi: 'यह 2% से अधिक हार्मोनिक होने पर पूरी फैक्ट्री बंद कर देता है', bn: 'হারমোনিক্স ২% ছাড়ালেই এটি কারখানা বন্ধ করে দেয়' },
        { en: 'It physically rotates the phase conductors at 3,000 RPM', hi: 'यह तारों को 3000 RPM पर घुमाता है', bn: 'এটি তারগুলিকে ৩০০০ RPM গতিতে ঘোরায়' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Zig-zag transformers have interconnected windings where zero-sequence fluxes cancel in each core limb, presenting near-zero impedance to triplen harmonics and shunting them away from main feeders.',
        hi: 'जिग-जैग वाइंडिंग में जीरो-सीक्वेंस फ्लक्स रद्द हो जाता है, जिससे यह 3rd हार्मोनिक्स के लिए नगण्य प्रतिबाधा प्रदान करके उन्हें पास में ही ट्रैप कर लेता है।',
        bn: 'জিগ-জ্যাগ ওয়াইন্ডিংয়ে জিরো-সিকোয়েন্স ফ্লাক্স বাতিল হয়ে যায়, ফলে এটি ৩য় হারমোনিক্সের জন্য শূন্য ইম্পিডেন্স তৈরি করে মূল ফিডারকে সুরক্ষিত রাখে।'
      }
    },
    {
      id: 'mcq-ch14-l08-08',
      question: {
        en: 'Which harmonic orders are classified as "Positive Sequence" and produce forward-rotating magnetic fields in three-phase equipment?',
        hi: 'किन हार्मोनिक क्रमों को "पॉजिटिव सीक्वेंस" के रूप में वर्गीकृत किया जाता है जो उपकरणों में आगे घूमने वाला चुंबकीय क्षेत्र बनाते हैं?',
        bn: 'কোন হারমোনিক ক্রমগুলি "পজিটিভ সিকোয়েন্স" হিসেবে শ্রেণিবদ্ধ এবং থ্রি-ফেজ যন্ত্রে সম্মুখমুখী ঘূর্ণন ক্ষেত্র তৈরি করে?'
      },
      options: [
        { en: '1st, 4th, 7th, 10th, 13th (order h = 3k + 1)', hi: '1st, 4th, 7th, 10th, 13th (क्रम h = 3k + 1)', bn: '১ম, ৪র্থ, ৭ম, ১০ম, ১৩তম (ক্রম h = 3k + 1)' },
        { en: '2nd, 5th, 8th, 11th (order h = 3k + 2)', hi: '2nd, 5th, 8th, 11th (क्रम h = 3k + 2)', bn: '২য়, ৫ম, ৮ম, ১১তম (ক্রম h = 3k + 2)' },
        { en: '3rd, 6th, 9th, 12th (order h = 3k)', hi: '3rd, 6th, 9th, 12th (क्रम h = 3k)', bn: '৩য়, ৬ষ্ঠ, ৯ম, ১২তম (ক্রম h = 3k)' },
        { en: 'Even harmonics only (2nd, 4th, 6th)', hi: 'केवल सम हार्मोनिक्स', bn: 'শুধুমাত্র জোড় হারমোনিক' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Harmonics with order h = 3k + 1 have the phase relationship A-B-C, rotating in the forward direction at h times the fundamental angular velocity.',
        hi: 'h = 3k + 1 क्रम के हार्मोनिक्स (1, 4, 7, 10, 13) की दिशा A-B-C होती है और वे आगे की दिशा में घूमते हैं।',
        bn: 'h = 3k + 1 ক্রমের হারমোনিক্সগুলি (১ম, ৪র্থ, ৭ম, ১০ম, ১৩তম) A-B-C ক্রমে সামনের দিকে মূল গতির h গুণ বেগে ঘোরে।'
      }
    }
  ]
};

export const LESSON_HARMONIC_DISTORTIONS_SEQUENCE_MAPPING = LESSON_THREE_PHASE_POWER_QUALITY;
