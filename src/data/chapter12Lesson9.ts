import { Lesson } from '../types';

export const LESSON_THD_DISTORTION_POWER: Lesson = {
  id: 'lsn-ch12-thd-distortion-power',
  topicId: 'tp-phasor-concept',
  chapterId: 'ch-ac-circuits',
  order: 9,
  title: {
    en: 'Total Harmonic Distortion (THD) & Network Impact',
    hi: 'कुल हार्मोनिक विरूपण (THD) एवं नेटवर्क प्रभाव',
    bn: 'মোট হারমোনিক বিকৃতি (THD) ও নেটওয়ার্ক প্রভাব'
  },
  description: {
    en: 'Master the rigorous mathematical formulation of Voltage THD (THD_V) and Current THD (THD_I), Budeanu distortion power (D), True Power Factor vs Displacement Power Factor, ANSI/IEEE C57.110 transformer K-factor rating and derating curves, and industrial harmonic mitigation engineering via detuned reactor banks and Active Harmonic Filters (AHFs).',
    hi: 'वोल्टेज THD (THD_V) और करंट THD (THD_I), बुडियानु विरूपण शक्ति (D), ट्रू पावर फैक्टर बनाम विस्थापन पावर फैक्टर, ANSI/IEEE C57.110 ट्रांसफार्मर K-फैक्टर रेटिंग एवं डीरेटिंग वक्र, तथा डिट्यून्ड रिएक्टर बैंक और एक्टिव हार्मोनिक फिल्टर (AHF) द्वारा औद्योगिक शमन इंजीनियरिंग के गणितीय सूत्रों में महारत हासिल करें।',
    bn: 'ভোল্টেজ টিএইচডি (THD_V), কারেন্ট টিএইচডি (THD_I), বুডিয়ানু ডিস্টরশন পাওয়ার (D), ট্রু পাওয়ার ফ্যাক্টর বনাম ডিসপ্লেসমেন্ট পাওয়ার ফ্যাক্টর, ANSI/IEEE C57.110 ট্রান্সফরমার K-ফ্যাক্টর রেটিং এবং ডিটিউনিং চুল্লী ও অ্যাক্টিভ হারমোনিক ফিল্টারের (AHF) মাধ্যমে হারমোনিক প্রশমন কৌশলের গাণিতিক বিশ্লেষণে দক্ষতা অর্জন করুন।'
  },
  estimatedMinutes: 45,
  easyExplanation: {
    en: 'Total Harmonic Distortion (THD) is the universal engineering metric that measures how dirty or corrupted an electrical wave has become compared to a pure sine wave. While standard power meters only measure the phase lag between fundamental voltage and current (Displacement Power Factor), non-linear loads inject high-frequency harmonic currents that create Distortion Power (D). This introduces a new 3D power triangle: Apparent Power squared equals Active Power squared plus Reactive Power squared plus Distortion Power squared (S² = P² + Q² + D²). Even if your displacement power factor is 1.0, high harmonic distortion drags down your true power factor, causes utility penalties, overheats transformers (measured by K-factor), and can destroy capacitor banks through electrical resonance.',
    hi: 'कुल हार्मोनिक विरूपण (THD) यह मापने का सार्वभौमिक इंजीनियरिंग पैमाना है कि एक विद्युत तरंग शुद्ध ज्यावक्रीय (sine) तरंग की तुलना में कितनी विकृत या अशुद्ध हो गई है। सामान्य मीटर केवल फंडामेंटल वोल्टेज और करंट के बीच कला कोण (विस्थापन पावर फैक्टर) मापते हैं। लेकिन गैर-रैखिक भार विरूपण शक्ति (D) पैदा करते हैं, जिससे एक नया 3D पावर त्रिभुज बनता है: S² = P² + Q² + D²। भले ही आपका विस्थापन पावर फैक्टर 1.0 हो, उच्च THD आपके वास्तविक पावर फैक्टर (True PF) को गिरा देता है, ट्रांसफार्मर को अत्यधिक गर्म करता है (जिसे K-फैक्टर से मापा जाता है), और अनुनाद के कारण संधारित्रों को नष्ट कर सकता है।',
    bn: 'টোটাল হারমোনিক ডিস্টরশন (THD) হলো একটি বিশুদ্ধ সাইন তরঙ্গের তুলনায় বৈদ্যুতিক তরঙ্গ কতটা বিকৃত বা দূষিত হয়েছে তা পরিমাপের আন্তর্জাতিক প্রকৌশল মানদণ্ড। সাধারণ মিটার কেবল ডিসপ্লেসমেন্ট পাওয়ার ফ্যাক্টর মাপে। কিন্তু নন-লিনিয়ার লোডের কারণে একটি অতিরিক্ত ডিস্টরশন পাওয়ার (D) তৈরি হয়, যার ফলে তৈরি হয় ত্রিমাত্রিক পাওয়ার ত্রিভুজ: S² = P² + Q² + D²। ডিসপ্লেসমেন্ট পাওয়ার ফ্যাক্টর ১.০ হলেও উচ্চ THD মোট ট্রু পাওয়ার ফ্যাক্টরকে কমিয়ে দেয়, বিদ্যুৎ বিলে জরিমানা আনে, ট্রান্সফরমারকে অতিরিক্ত গরম করে (যা K-ফ্যাক্টর দ্বারা পরিমাপ করা হয়) এবং রেজোন্যান্সের কারণে ক্যাপাসিটর ব্যাংক ধ্বংস করতে পারে।'
  },
  detailedExplanation: {
    en: '1. Mathematical Definition of Total Harmonic Distortion (THD):\nTHD quantifies the total harmonic content of a distorted signal relative to its fundamental component (IEEE 519 Standard):\n- Voltage Total Harmonic Distortion (THD_V):\n  THD_V = [ √( Σ_{n=2}^∞ V_{n,rms}² ) / V_{1,rms} ] × 100%\n- Current Total Harmonic Distortion (THD_I):\n  THD_I = [ √( Σ_{n=2}^∞ I_{n,rms}² ) / I_{1,rms} ] × 100% = [ I_h,rms / I_{1,rms} ] × 100%\nwhere I_h,rms is the root-sum-square of all harmonic currents excluding the fundamental.\nAlternative definition (IEC / European standard): THD_R = [ √( Σ_{n=2}^∞ I_{n,rms}² ) / I_rms ] × 100% (referred to total RMS).\n\n2. Relation Between Fundamental, Harmonic, and Total RMS Current:\nSince total RMS is I_rms = √( I_{1,rms}² + I_h,rms² ), dividing by I_{1,rms} gives:\nI_rms / I_{1,rms} = √( 1 + THD_I² )\n⟹ I_rms = I_{1,rms} · √( 1 + THD_I² )\nThis fundamental equation proves that as THD_I rises, the total RMS line current increases significantly even if useful work (I_{1,rms}) remains strictly constant!\n\n3. The 3D Non-Sinusoidal Power Triangle and Distortion Power (D):\nUnder non-sinusoidal conditions (Budeanu definition):\n- Active Power (P): P = Σ V_{n,rms} · I_{n,rms} · cos(θ_n - φ_n) [W]\n- Reactive Power (Q): Q = Σ V_{n,rms} · I_{n,rms} · sin(θ_n - φ_n) [var]\n- Apparent Power (S): S = V_rms · I_rms [VA]\nBecause V_rms and I_rms contain orthogonal harmonic components, S² > P² + Q²! The remaining component is the Distortion Power (D):\nS² = P² + Q² + D²   ⟹   D = √( S² - P² - Q² ) [VA or var_d]\nDistortion power does zero useful work; it solely circulates high-frequency energy between inductive and capacitive elements, heating cables and switchgear.\n\n4. True Power Factor vs. Displacement Power Factor:\n- Displacement Power Factor (DPF): Measured by conventional cos(φ_1) at 50/60 Hz:\n  DPF = cos(θ_1 - φ_1) = P_1 / S_1\n- True Power Factor (PF_true): The actual ratio of active real work to total apparent electrical capacity:\n  PF_true = P / S = P / (V_rms · I_rms)\nAssuming voltage distortion is small (V_rms ≈ V_{1,rms}):\n  PF_true = (V_{1,rms} · I_{1,rms} · cos(φ_1)) / (V_{1,rms} · I_rms) = (I_{1,rms} / I_rms) · cos(φ_1)\n  PF_true = [ 1 / √( 1 + THD_I² ) ] · DPF = Distortion Factor · Displacement Power Factor\nCrucial consequence: Even if a facility has unity displacement power factor (DPF = 1.00 via capacitor banks), a Current THD of 100% limits the True Power Factor to at most 1 / √(1 + 1²) = 0.707!\n\n5. Transformer K-Factor Rating (ANSI/IEEE C57.110):\nTransformers feeding non-linear loads suffer elevated eddy-current winding losses that scale with the square of harmonic order (h²). The standard K-Factor weighting is:\nK = [ Σ_{h=1}^{h_max} (I_h / I_1)² · h² ] / [ Σ_{h=1}^{h_max} (I_h / I_1)² ] = [ Σ I_h² · h² ] / [ Σ I_h² ]\nStandard Transformer K-Ratings:\n- K-1: Standard transformer designed strictly for linear loads (motors, resistive heating).\n- K-4: Feeders supplying up to 20% non-linear loads (fluorescent lighting, small UPS).\n- K-13: Designed for commercial buildings, schools, and health care with moderate IT servers.\n- K-20: Data centers, semiconductor cleanrooms, mainframe computing, high-density VFDs.\n\n6. Harmonic Resonance with Power Factor Capacitors:\nWhen power factor correction (PFC) capacitors are installed on a bus with non-linear loads, they form a parallel resonant circuit with the upstream transformer inductance L_tx:\nh_res = f_res / f_1 = √( S_sc / Q_C ) = √( 1 / (Z_tx,pu · (Q_C / S_tx)) )\nIf h_res coincides with the 5th (250 Hz) or 7th (350 Hz) harmonic, parallel resonance produces enormous harmonic voltages, causing catastrophic capacitor rupture, blown fuses, and nuisance breaker tripping.\n\n7. Harmonic Mitigation Strategies:\n- Detuned Passive Filter Banks: Placing a 7% series iron-core reactor (tuning frequency 189 Hz, below 5th harmonic) in series with each PFC capacitor bank forces the branch to appear inductive at all harmonic frequencies, completely eliminating parallel resonance.\n- Multi-Pulse Converters: 12-pulse (star-delta phase-shifted transformer, 30° shift) cancels 5th and 7th harmonics; 18-pulse cancels up to 17th harmonic.\n- Active Harmonic Filters (AHF): Solid-state IGBT inverters that sample the load current, compute harmonic components in real-time, and inject equal-magnitude 180° out-of-phase currents into the bus, reducing line THD_I below 3% dynamically.',
    hi: '1. THD की गणितीय परिभाषा: वोल्टेज THD_V = [ √(Σ V_n²) / V_1 ] × 100%, और करंट THD_I = [ √(Σ I_n²) / I_1 ] × 100%।\n2. कुल आरएमएस करंट: I_rms = I_1 · √(1 + THD_I²)। THD बढ़ने से वास्तविक उपयोगी लोड न बढ़ने पर भी केबलों में प्रवाहित कुल धारा बढ़ जाती है।\n3. 3D पावर त्रिभुज: गैर-ज्यावक्रीय स्थितियों में S² = P² + Q² + D², जहाँ D विरूपण शक्ति (Distortion Power) है।\n4. ट्रू पावर फैक्टर: PF_true = DPF / √(1 + THD_I²)। यदि THD_I = 100% हो तो DPF = 1.0 होने पर भी True PF गिरकर केवल 0.707 रह जाता है।\n5. ट्रांसफार्मर K-फैक्टर: K = [ Σ I_h² · h² ] / [ Σ I_h² ]। डेटा सेंटर एवं वीएफडी लोड के लिए K-13 या K-20 रेटेड ट्रांसफार्मर का उपयोग किया जाता है।\n6. कैपेसिटर अनुनाद: ट्रांसफार्मर प्रेरकत्व और PFC कैपेसिटर मिलकर h_res = √(S_sc / Q_C) पर समानांतर अनुनाद बनाते हैं जो कैपेसिटर को नष्ट कर सकता है।\n7. शमन तकनीक: 7% डिट्यून्ड रिएक्टर, 12-पल्स रेक्टिफायर, एवं एक्टिव हार्मोनिक फिल्टर (AHF) जो 180° विपरीत कला में धारा इंजेक्ट करते हैं।',
    bn: '১. THD এর গাণিতিক সূত্র: THD_V = [ √(Σ V_n²) / V_1 ] × ১০০% এবং THD_I = [ √(Σ I_n²) / I_1 ] × ১০০%।\n২. মোট আরএমএস কারেন্ট: I_rms = I_1 · √(১ + THD_I²)। কারেন্ট টিএইচডি বৃদ্ধি পেলে লাইনের মোট আরএমএস কারেন্ট উল্লেখযোগ্যভাবে বেড়ে যায়।\n৩. ত্রিমাত্রিক পাওয়ার ত্রিভুজ: S² = P² + Q² + D², যেখানে D হলো ডিস্টরশন পাওয়ার (Distortion Power)।\n৪. ট্রু পাওয়ার ফ্যাক্টর: PF_true = DPF / √(১ + THD_I²)। ফলে উচ্চ টিএইচডি থাকলে ডিসপ্লেসমেন্ট পাওয়ার ফ্যাক্টর ১.০ হলেও ট্রু পাওয়ার ফ্যাক্টর অনেক কমে যায়।\n৫. কে-ফ্যাক্টর (K-Factor): K = [ Σ I_h² · h² ] / [ Σ I_h² ]। ডাটা সেন্টারের মতো সার্ভার লোডের জন্য K-13 বা K-20 ট্রান্সফরমার ব্যবহৃত হয়।\n৬. ক্যাপাসিটর রেজোন্যান্স: h_res = √(S_sc / Q_C) কম্পাঙ্কে প্যারালাল রেজোন্যান্স ঘটলে ওভার-ভোল্টেজে ক্যাপাসিটর ব্যাংক বিস্ফোরিত হতে পারে।\n৭. প্রশমন পদ্ধতি: ৭% ডিটিউনিং রিঅ্যাক্টর, ১২-পালস রেকটিফায়ার এবং অ্যাক্টিভ হারমোনিক ফিল্টার (AHF) ব্যবহার করা।'
  },
  formulas: [
    {
      id: 'f-thd-definition',
      symbol: 'THD_I',
      expression: 'THD_I = \\frac{\\sqrt{\\sum_{n=2}^{\\infty} I_{n,rms}^2}}{I_{1,rms}} \\times 100\\%',
      title: {
        en: 'Total Harmonic Distortion Equation',
        hi: 'कुल हार्मोनिक विरूपण समीकरण',
        bn: 'মোট হারমোনিক বিকৃতি সমীকরণ'
      },
      description: {
        en: 'Defines the ratio of the geometric root-sum-square of all higher harmonic components to the fundamental RMS component.',
        hi: 'फंडामेंटल आरएमएस घटक के अनुपात में सभी उच्च हार्मोनिक घटकों के वर्ग-योग-मूल का अनुपात।',
        bn: 'ফান্ডামেন্টাল আরএমএসের সাপেক্ষে সমস্ত উচ্চতর হারমোনিক উপাংশের বর্গের সমষ্টির বর্গমূলের অনুপাত।'
      },
      variables: [
        { symbol: 'I_{n,rms}', name: { en: 'RMS current of n-th harmonic (A)', hi: 'n-वें हार्मोनिक का RMS मान (A)', bn: 'n-তম হারমোনিকের আরএমএস কারেন্ট (A)' } },
        { symbol: 'I_{1,rms}', name: { en: 'Fundamental RMS current (A)', hi: 'मौलिक RMS धारा (A)', bn: 'ফান্ডামেন্টাল আরএমএস কারেন্ট (A)' } }
      ]
    },
    {
      id: 'f-true-power-factor',
      symbol: 'PF_{true}',
      expression: 'PF_{true} = \\frac{P}{S} = \\frac{DPF}{\\sqrt{1 + THD_I^2}} = \\cos(\\phi_1) \\cdot \\frac{I_{1,rms}}{I_{rms}}',
      title: {
        en: 'True Power Factor with Current Distortion',
        hi: 'करंट विरूपण के साथ ट्रू पावर फैक्टर',
        bn: 'কারেন্ট বিকৃতিসহ ট্রু পাওয়ার ফ্যাক্টর'
      },
      description: {
        en: 'Calculates the real power factor under non-linear loading by degrading displacement power factor with harmonic distortion.',
        hi: 'हार्मोनिक विरूपण द्वारा विस्थापन पावर फैक्टर को घटाकर गैर-रैखिक लोड पर वास्तविक पावर फैक्टर की गणना करता है।',
        bn: 'হারমোনিক ডিস্টরশনের প্রভাবে ডিসপ্লেসমেন্ট পাওয়ার ফ্যাক্টর কীভাবে কমে ট্রু পাওয়ার ফ্যাক্টর হয় তা নির্ণয় করে।'
      },
      variables: [
        { symbol: 'DPF', name: { en: 'Displacement Power Factor (cos φ_1)', hi: 'विस्थापन पावर फैक्टर (cos φ_1)', bn: 'ডিসপ্লেসমেন্ট পাওয়ার ফ্যাক্টর (cos φ_1)' } },
        { symbol: 'THD_I', name: { en: 'Current Total Harmonic Distortion (per-unit)', hi: 'करंट कुल हार्मोनिक विरूपण (प्रति-इकाई)', bn: 'কারেন্ট মোট হারমোনিক বিকৃতি (প্রতি-একক)' } }
      ]
    },
    {
      id: 'f-distortion-power-budeanu',
      symbol: 'D',
      expression: 'D = \\sqrt{S^2 - P^2 - Q^2}',
      title: {
        en: 'Budeanu Distortion Power Formulation',
        hi: 'बुडियानु विरूपण शक्ति समीकरण',
        bn: 'বুডিয়ানু ডিস্টরশন পাওয়ার সমীকরণ'
      },
      description: {
        en: 'Orthogonal distortion power component completing the 3D apparent power relationship in non-sinusoidal networks.',
        hi: 'गैर-ज्यावक्रीय नेटवर्कों में 3D स्पष्ट शक्ति संबंध को पूरा करने वाला विरूपण शक्ति घटक।',
        bn: 'নন-সাইনুসয়েডাল নেটওয়ার্কে ত্রিমাত্রিক অ্যাপারেন্ট পাওয়ার পূর্ণকারী ডিস্টরশন পাওয়ার উপাদান।'
      },
      variables: [
        { symbol: 'S', name: { en: 'Total Apparent Power (VA)', hi: 'कुल स्पष्ट शक्ति (VA)', bn: 'মোট আপাত ক্ষমতা (VA)' } },
        { symbol: 'P', name: { en: 'Active Power (W)', hi: 'सक्रिय शक्ति (W)', bn: 'সক্রিয় ক্ষমতা (W)' } },
        { symbol: 'Q', name: { en: 'Fundamental Reactive Power (var)', hi: 'मौलिक प्रतिक्रियाशील शक्ति (var)', bn: 'মৌলিক প্রতিক্রিয়াশীল ক্ষমতা (var)' } }
      ]
    },
    {
      id: 'f-k-factor-transformer',
      symbol: 'K',
      expression: 'K = \\frac{\\sum_{h=1}^{h_{max}} I_h^2 \\cdot h^2}{\\sum_{h=1}^{h_{max}} I_h^2}',
      title: {
        en: 'Transformer K-Factor Rating (ANSI/IEEE C57.110)',
        hi: 'ट्रांसफार्मर K-फैक्टर रेटिंग (ANSI/IEEE C57.110)',
        bn: 'ট্রান্সফরমার K-ফ্যাক্টর রেটিং (ANSI/IEEE C57.110)'
      },
      description: {
        en: 'Quantifies harmonic-induced eddy-current heating in transformer windings to guide correct transformer specification.',
        hi: 'ट्रांसफार्मर वाइंडिंग में भंवर-धारा हीटिंग को मापकर सही ट्रांसफार्मर विनिर्देश निर्धारित करता है।',
        bn: 'ট্রান্সফরমার ওয়াইন্ডিংয়ে হারমোনিক জনিত এডি কারেন্ট তাপ পরিমাপ করে সঠিক ট্রান্সফরমার নির্বাচন করতে সহায়তা করে।'
      },
      variables: [
        { symbol: 'I_h', name: { en: 'RMS current of harmonic order h (A)', hi: 'हार्मोनिक क्रम h की RMS धारा (A)', bn: 'হারমোনিক ক্রম h এর আরএমএস কারেন্ট (A)' } },
        { symbol: 'h', name: { en: 'Harmonic order (1, 3, 5, 7, ...)', hi: 'हार्मोनिक क्रम (1, 3, 5, 7, ...)', bn: 'হারমোনিক ক্রম (১, ৩, ৫, ৭, ...)' } }
      ]
    }
  ],
  workedExamples: [
    {
      id: 'ex-ch12-l09-01',
      problem: {
        en: 'A 415 V (fundamental V_1 = 400 V RMS line-to-neutral), 50 Hz industrial power supply feeds a large three-phase 6-pulse Variable Frequency Drive (VFD). Harmonic analysis of the phase current yields:\n- Fundamental (50 Hz): I_1 = 120.0 A with displacement power factor DPF = cos(φ_1) = 0.88 lagging\n- 5th Harmonic (250 Hz): I_5 = 24.0 A (20.0% of fundamental)\n- 7th Harmonic (350 Hz): I_7 = 16.8 A (14.0% of fundamental)\n- 11th Harmonic (550 Hz): I_11 = 10.8 A (9.0% of fundamental)\n- 13th Harmonic (650 Hz): I_13 = 8.4 A (7.0% of fundamental)\nAssuming negligible supply voltage distortion (pure sinusoidal voltage V_rms = 400 V), calculate:\n(a) Total harmonic current RMS (I_h,rms).\n(b) Total true RMS phase current (I_rms).\n(c) Current Total Harmonic Distortion (THD_I).\n(d) Active power P, fundamental apparent power S_1, and total apparent power S.\n(e) Distortion power D (Budeanu).\n(f) True Power Factor (PF_true).\n(g) Transformer K-factor according to ANSI/IEEE C57.110.',
        hi: 'एक 400 V (फेज-से-न्यूट्रल) 50 Hz आपूर्ति एक 6-पल्स वीएफडी को फीड करती है। फेज करंट के घटक हैं: I_1 = 120 A (DPF = 0.88 लैगिंग), I_5 = 24 A, I_7 = 16.8 A, I_11 = 10.8 A, I_13 = 8.4 A। गणना कीजिए:\n(a) कुल हार्मोनिक करंट RMS (I_h)।\n(b) कुल ट्रू RMS करंट (I_rms)।\n(c) करंट THD_I।\n(d) सक्रिय शक्ति P एवं कुल स्पष्ट शक्ति S।\n(e) विरूपण शक्ति D।\n(f) ट्रू पावर फैक्टर PF_true।\n(g) ट्रांसफार्मर K-फैक्टर।',
        bn: 'একটি ৪০০ V (ফেজ-টু-নিউট্রাল) লাইনে ৬-পালস ভিএফডি লোডের কারেন্ট উপাংশ হলো: I_1 = ১২০ A (DPF = ০.৮৮ ল্যাগিং), I_5 = ২৪ A, I_7 = ১৬.৮ A, I_11 = ১০.৮ A, I_13 = ৮.৪ A। নির্ণয় করুন:\n(ক) মোট হারমোনিক কারেন্ট আরএমএস (I_h)।\n(খ) মোট ট্রু আরএমএস কারেন্ট (I_rms)।\n(গ) কারেন্ট টিএইচডি (THD_I)।\n(ঘ) সক্রিয় ক্ষমতা P এবং মোট আপাত ক্ষমতা S।\n(ঙ) ডিস্টরশন পাওয়ার D।\n(চ) ট্রু পাওয়ার ফ্যাক্টর PF_true।\n(ছ) ট্রান্সফরমার K-ফ্যাক্টর।'
      },
      formula: {
        en: 'I_h = \\sqrt{I_5^2 + I_7^2 + I_{11}^2 + I_{13}^2}\nI_rms = \\sqrt{I_1^2 + I_h^2}\nTHD_I = (I_h / I_1) \\times 100\\%\nP = V_1 I_1 \\cos(\\phi_1), \\quad S = V_1 I_rms\nD = \\sqrt{S^2 - P^2 - Q_1^2}\nPF_true = P / S = DPF / \\sqrt{1 + THD_I^2}\nK = [\\sum (I_h^2 \\cdot h^2)] / [\\sum I_h^2]',
        hi: 'I_h = \\sqrt{\\sum I_n^2}, THD_I = (I_h/I_1)×100%, PF_true = P/S, K = \\sum(I_h^2 h^2) / \\sum I_h^2।',
        bn: 'I_h = \\sqrt{\\sum I_n^2}, THD_I = (I_h/I_1)×১০০%, PF_true = P/S, K = \\sum(I_h^2 h^2) / \\sum I_h^2।'
      },
      substitution: {
        en: 'Step 1: Total Harmonic Current RMS (I_h)\nI_h = √(24.0² + 16.8² + 10.8² + 8.4²)\nI_h = √(576.0 + 282.24 + 116.64 + 70.56) = √1045.44 = 32.333 A.\n\nStep 2: Total True RMS Current\nI_rms = √(I_1² + I_h²) = √(120² + 1045.44) = √(14400 + 1045.44) = √15445.44 = 124.28 A.\n\nStep 3: Current THD\nTHD_I = (I_h / I_1) × 100% = (32.333 / 120.0) × 100% = 26.94% (0.2694 pu).\n\nStep 4: Active Power & Apparent Powers\n- Active Power (P): P = V_1 · I_1 · cos(φ_1) = 400 × 120 × 0.88 = 42,240 W = 42.24 kW.\n- Fundamental Reactive Power (Q_1): sin(φ_1) = √(1 - 0.88²) = 0.47497\n  Q_1 = 400 × 120 × 0.47497 = 22,799 var = 22.80 kvar.\n- Fundamental Apparent Power (S_1): S_1 = V_1 · I_1 = 400 × 120 = 48,000 VA = 48.0 kVA.\n- Total Apparent Power (S): S = V_1 · I_rms = 400 × 124.28 = 49,712 VA = 49.712 kVA.\n\nStep 5: Distortion Power (D)\nD = √(S² - S_1²) = √(S² - P² - Q_1²)\nD = √(49712² - 48000²) = √(2,471,282,944 - 2,304,000,000) = √167,282,944 = 12,933.8 var_d (12.93 kvar_d).\n\nStep 6: True Power Factor (PF_true)\nPF_true = P / S = 42,240 / 49,712 = 0.8497 (0.85 lagging).\nVerification using formula: PF_true = DPF / √(1 + THD_I²) = 0.88 / √(1 + 0.2694²) = 0.88 / √(1 + 0.0726) = 0.88 / 1.03566 = 0.8497 (exact match!).\nHarmonics alone lowered the power factor from 0.88 to 0.85.\n\nStep 7: Transformer K-Factor Calculation\nCalculate numerator Σ I_h² · h²:\n- h = 1: 120² × 1² = 14,400 × 1 = 14,400\n- h = 5: 24.0² × 5² = 576 × 25 = 14,400\n- h = 7: 16.8² × 7² = 282.24 × 49 = 13,829.76\n- h = 11: 10.8² × 11² = 116.64 × 121 = 14,113.44\n- h = 13: 8.4² × 13² = 70.56 × 169 = 11,924.64\nTotal Numerator = 14,400 + 14,400 + 13,829.76 + 14,113.44 + 11,924.64 = 68,667.84 A².\nDenominator Σ I_h² = I_rms² = 15,445.44 A².\nK = 68,667.84 / 15,445.44 = 4.446.\nA standard K-1 transformer is severely inadequate (would overheat and fail); a K-9 or standard commercial K-13 rated transformer must be installed.',
        hi: '(a) I_h = 32.33 A।\n(b) I_rms = 124.28 A।\n(c) THD_I = 26.94%।\n(d) P = 42.24 kW, S = 49.71 kVA।\n(e) D = 12.93 kvar_d।\n(f) PF_true = 0.85 लैगिंग।\n(g) K = 68667.84 / 15445.44 = 4.45 (K-13 ट्रांसफार्मर आवश्यक)।',
        bn: '(ক) I_h = ৩২.৩৩ A।\n(খ) I_rms = ১২৪.২৮ A।\n(গ) THD_I = ২৬.৯৪%।\n(ঘ) P = ৪২.২৪ kW, S = ৪৯.৭১ kVA।\n(ঙ) D = ১২.৯৩ kvar_d।\n(চ) PF_true = ০.৮৫ ল্যাগিং।\n(ছ) K = ৪.৪৫ (K-13 ট্রান্সফরমার প্রয়োজন)।'
      },
      calculation: {
        en: 'The calculation illustrates how harmonic distortion degrades power factor even with clean voltage, and produces a K-factor of 4.45 indicating more than a 4-fold increase in eddy current winding heat dissipation.',
        hi: 'यह गणना दर्शाती है कि हार्मोनिक्स के कारण पावर फैक्टर 0.88 से गिरकर 0.85 हो जाता है और K-फैक्टर 4.45 यह दिखाता है कि ट्रांसफार्मर वाइंडिंग में भंवर-धारा हीटिंग 4 गुना से अधिक बढ़ गई है।',
        bn: 'এই গণনা প্রমাণ করে যে হারমোনিকের প্রভাবে পাওয়ার ফ্যাক্টর ০.৮৮ থেকে ০.৮৫-এ নেমে আসে এবং ৪.৪৫ কে-ফ্যাক্টর নির্দেশ করে যে ওয়াইন্ডিংয়ে এডি কারেন্ট জনিত তাপ ৪ গুণের বেশি বৃদ্ধি পেয়েছে।'
      },
      finalAnswer: {
        en: 'I_h = 32.33 A; I_rms = 124.28 A; THD_I = 26.94%; P = 42.24 kW; S = 49.71 kVA; D = 12.93 kvar_d; PF_true = 0.85 lagging; K-factor = 4.45 (requires K-13 transformer)',
        hi: 'I_h = 32.33 A; I_rms = 124.28 A; THD_I = 26.94%; P = 42.24 kW; S = 49.71 kVA; D = 12.93 kvar_d; PF_true = 0.85 लैगिंग; K = 4.45',
        bn: 'I_h = ৩২.৩৩ A; I_rms = ১২৪.২৮ A; THD_I = ২৬.৯৪%; P = ৪২.২৪ kW; S = ৪৯.৭১ kVA; D = ১২.৯৩ kvar_d; PF_true = ০.৮৫ ল্যাগিং; K = ৪.৪৫'
      }
    },
    {
      id: 'ex-ch12-l09-02',
      problem: {
        en: 'An industrial distribution substation has a 2000 kVA, 11 kV / 415 V step-down transformer with 6% leakage reactance (Z_tx,pu = 0.06 pu). To improve the power factor, plant management proposes connecting an un-detuned 400 kvar shunt capacitor bank directly to the 415 V bus.\n(a) Determine the system short-circuit apparent power S_sc at the 415 V secondary bus, assuming infinite bus capacity on the 11 kV primary.\n(b) Calculate the parallel resonant harmonic order h_res and resonant frequency f_res of the transformer-capacitor combination at 50 Hz.\n(c) Analyze the operational hazard if the facility operates 6-pulse thyristor drives producing 5th harmonic (250 Hz) currents.\n(d) Determine the required series detuning reactor percentage (p%) to tune the resonant frequency safely to 189 Hz (below the 5th harmonic), and calculate the series reactor reactance X_L per phase.',
        hi: 'एक 2000 kVA, 11 kV / 415 V ट्रांसफार्मर की प्रतिबाधा 6% (0.06 pu) है। 415 V बस पर 400 kvar का शंट कैपेसिटर बैंक लगाया जाता है।\n(a) 415 V बस पर शॉर्ट-सर्किट MVA (S_sc) ज्ञात कीजिए।\n(b) ट्रांसफार्मर-कैपेसिटर संयोजन का समानांतर अनुनाद क्रम h_res और आवृत्ति f_res ज्ञात कीजिए।\n(c) यदि 6-पल्स ड्राइव 5वीं हार्मोनिक (250 Hz) उत्पन्न करती है तो उत्पन्न खतरे का विश्लेषण कीजिए।\n(d) अनुनाद आवृत्ति को 189 Hz पर सुरक्षित रूप से स्थानांतरित करने के लिए आवश्यक डिट्यूनिंग रिएक्टर प्रतिशत (p%) ज्ञात कीजिए।',
        bn: 'একটি ২০০০ kVA, ১১ kV / ৪১৫ V ট্রান্সফরমারের লিকেজ রিঅ্যাক্ট্যান্স ৬% (০.০৬ pu)। ৪১৫ V বাসে একটি ৪০০ kvar শান্ট ক্যাপাসিটর ব্যাংক সরাসরি যুক্ত করা হলো।\n(ক) ৪১৫ V সেকেন্ডারি বাসের শর্ট-সার্কিট ক্ষমতা S_sc নির্ণয় করুন।\n(খ) প্যারালাল রেজোন্যান্ট হারমোনিক ক্রম h_res এবং রেজোন্যান্স কম্পাঙ্ক f_res নির্ণয় করুন।\n(গ) কারখানায় ৬-পালস ড্রাইভ ৫ম হারমোনিক (২৫০ Hz) কারেন্ট তৈরি করলে কী ধরনের বিপদ ঘটবে বিশ্লেষণ করুন।\n(ঘ) রেজোন্যান্স কম্পাঙ্ক ১৮৯ Hz-এ নামিয়ে আনতে প্রয়োজনীয় ডিটিউনিং রিঅ্যাক্টর শতাংশ (p%) নির্ণয় করুন।'
      },
      formula: {
        en: 'S_sc = S_tx / Z_tx,pu\nh_res = \\sqrt{S_sc / Q_C}\nf_res = h_res \\times f_1\nDetuning factor: p = (f_1 / f_res)^2 \\times 100\\%\nX_L = p \\times X_C',
        hi: 'S_sc = S_tx / Z_tx, h_res = \\sqrt{S_sc / Q_C}, f_res = h_res × f_1, p = (f_1 / f_res)^2 × 100%।',
        bn: 'S_sc = S_tx / Z_tx, h_res = \\sqrt{S_sc / Q_C}, f_res = h_res × f_1, p = (f_1 / f_res)^2 × ১০০%।'
      },
      substitution: {
        en: 'Step 1: Short-Circuit Capacity (S_sc)\nS_sc = S_tx / Z_tx,pu = 2000 kVA / 0.06 = 33,333.33 kVA = 33.333 MVA.\n\nStep 2: Resonant Harmonic Order and Frequency\nh_res = √(S_sc / Q_C) = √(33,333.33 / 400) = √83.333 = 9.129.\nf_res = h_res × 50 Hz = 9.129 × 50 = 456.4 Hz.\n\nStep 3: Hazard Analysis with 5th Harmonic (250 Hz)\nIf the capacitor bank size were slightly altered or if another 400 kvar stage steps in, total Q_C = 800 kvar:\nh_res = √(33,333.33 / 800) = √41.67 = 6.45 ⟹ 322 Hz.\nIf Q_C = 1333 kvar: h_res = √(33333 / 1333) = √25.0 = 5.0 (EXACT 5th HARMONIC RESONANCE!).\nEven near 5.5 to 6.5, the impedance magnification factor Q_mag can be 5 to 10. The 5th harmonic current injected by the VFD enters this parallel LC tank, producing massive voltage distortion (THD_V > 25%), leading to capacitor dielectric puncture, insulation fire, and plant trip.\n\nStep 4: Design of Detuned Reactor (p%)\nTo eliminate resonance with the 5th harmonic (250 Hz), engineers select a series reactor to place the series resonance frequency below 250 Hz, typically at f_tune = 189 Hz (h_tune = 3.78, corresponding to p = 7% detuning):\np = (f_1 / f_tune)² = (50 / 189)² = (0.26455)² = 0.0700 = 7.0%.\n\nCapacitor Reactance at 415 V (three-phase 400 kvar):\nLine-to-line voltage V_LL = 415 V.\nThree-phase Q_C = 400 kvar ⟹ X_C = V_LL² / Q_C = (415)² / (400 × 10³) = 172,225 / 400,000 = 0.4306 Ω (equivalent delta) or per-phase star:\nX_C,Y = (415 / √3)² / (400,000 / 3) = 0.4306 Ω.\nSeries reactor reactance required:\nX_L = p · X_C = 0.07 × 0.4306 Ω = 0.03014 Ω per phase.\nInductance required: L = X_L / (2π · 50) = 0.03014 / 314.16 = 95.9 μH.\nWith a 7% reactor, the branch is inductive for all harmonics n ≥ 5 (at 250 Hz: X_{L,5} = 5 × 0.03014 = 0.1507 Ω, while X_{C,5} = 0.4306 / 5 = 0.0861 Ω; net reactance is positive/inductive: +j0.0646 Ω). It is impossible for this inductive branch to resonate with the inductive transformer, guaranteeing 100% immunity to harmonic resonance!',
        hi: '(a) S_sc = 2000 / 0.06 = 33.33 MVA।\n(b) h_res = √(33333 / 400) = 9.13 ⟹ f_res = 456.4 Hz।\n(c) कैपेसिटर के चरणों के बदलने पर 5वीं हार्मोनिक (250 Hz) के साथ अनुनाद हो सकता है जिससे अत्यधिक वोल्टेज वृद्धि होगी।\n(d) 189 Hz ट्यूनिंग के लिए आवश्यक p = (50/189)² = 7.0%। X_L = 0.07 × 0.4306 = 0.0301 Ω प्रति फेज। 7% रिएक्टर शाखा को सभी हार्मोनिक्स पर प्रेरकीय बना देता है, जिससे अनुनाद असंभव हो जाता है।',
        bn: '(ক) S_sc = ২০০০ / ০.০৬ = ৩৩.৩৩ MVA।\n(খ) h_res = √(৩৩৩৩৩ / ৪০০) = ৯.১৩ ⟹ f_res = ৪৫৬.৪ Hz।\n(গ) ক্যাপাসিটরের মান পরিবর্তনের সাথে ৫ম হারমোনিকের (২৫০ Hz) সাথে প্যারালাল রেজোন্যান্স ঘটে ক্যাপাসিটর পুড়ে যাওয়ার তীব্র ঝুঁকি থাকে।\n(ঘ) ১৮৯ Hz-এ ডিটিউনিং করতে p = (৫০/১৮৯)² = ৭.০% রিঅ্যাক্টর প্রয়োজন। প্রতি ফেজে X_L = ০.০৩০১ Ω। ৭% রিঅ্যাক্টর বসালে সমস্ত হারমোনিক্সে সার্কিট ইন্ডাকটিভ থাকে, ফলে রেজোন্যান্সের ঝুঁকি পুরোপুরি দূর হয়।'
      },
      calculation: {
        en: 'The 7% detuning reactor shifts the resonant frequency to 189 Hz, ensuring the capacitor bank presents an inductive net impedance to all 5th, 7th, 11th, and 13th harmonics, preventing harmonic current amplification.',
        hi: '7% डिट्यूनिंग रिएक्टर अनुनाद आवृत्ति को 189 Hz पर ले जाता है, जिससे बैंक 5वीं और उच्च हार्मोनिक्स के लिए प्रेरकीय बन जाता है और अनुनाद रुक जाता है।',
        bn: '৭% ডিটিউনিং রিঅ্যাক্টর রেজোন্যান্স কম্পাঙ্ককে ১৮৯ Hz-এ নামিয়ে আনে, যা ৫ম ও উচ্চতর হারমোনিক্সে ক্যাপাসিটরকে ইন্ডাকটিভ আচরণ করতে বাধ্য করে এবং রেজোন্যান্স সম্পূর্ণ প্রতিহত করে।'
      },
      finalAnswer: {
        en: 'S_sc = 33.33 MVA; h_res = 9.13 (456.4 Hz); 5th harmonic resonance risk confirmed under multi-stage switching; Required detuning factor p = 7.0% (189 Hz series resonance); X_L = 0.0301 Ω/phase',
        hi: 'S_sc = 33.33 MVA; h_res = 9.13 (456.4 Hz); p = 7.0% (189 Hz); X_L = 0.0301 Ω/फेज',
        bn: 'S_sc = ৩৩.৩৩ MVA; h_res = ৯.১৩ (৪৫৬.৪ Hz); p = ৭.০% (১৮৯ Hz); X_L = ০.০৩০১ Ω/ফেজ'
      }
    }
  ],
  practicalApplications: {
    en: [
      'IEEE 519 Grid Compliance Testing: Electrical auditors connect power quality analyzers at the Point of Common Coupling (PCC) to measure voltage THD (limit ≤ 5% for general industrial systems) and Total Demand Distortion (TDD) to prevent utility penalties.',
      'Active Harmonic Filters (AHF) for VFDs: Industrial automation facilities install IGBT-based active shunt filters that generate dynamic counter-phase harmonic waveforms, neutralizing 5th, 7th, 11th, and 13th harmonics in real time and keeping bus THD_V under 3%.',
      'Detuned Power Factor Correction: Capacitor bank manufacturers integrate 7% (189 Hz) or 5.67% (210 Hz) iron-core reactors in series with PFC capacitor steps to eliminate catastrophic parallel resonance with upstream supply transformers.'
    ],
    hi: [
      'IEEE 519 ग्रिड अनुपालन परीक्षण: बिजली कंपनियां पॉइंट ऑफ कॉमन कपलिंग (PCC) पर वोल्टेज THD (अधिकतम 5%) और करंट विरूपण की जांच करती हैं।',
      'सक्रिय हार्मोनिक फिल्टर (AHF): आईजीबीटी आधारित एक्टिव फिल्टर वीएफडी द्वारा उत्पन्न 5वीं, 7वीं हार्मोनिक्स के 180° विपरीत धारा इंजेक्ट करके THD को 3% से नीचे रखते हैं।',
      'डिट्यून्ड पावर फैक्टर सुधार: कैपेसिटर बैंक में 7% (189 Hz) के श्रेणी रिएक्टर जोड़कर ट्रांसफार्मर के साथ होने वाले खतरनाक अनुनाद को रोका जाता है।'
    ],
    bn: [
      'IEEE 519 গ্রিড কমপ্লায়েন্স পরীক্ষা: পয়েন্ট অব কমন কাপলিংয়ে (PCC) বিদ্যুৎ বিভাগ ভোল্টেজ টিএইচডি (সর্বোচ্চ ৫%) মেপে শিল্পকারখানায় জরিমানা নির্ধারণ করে।',
      'অ্যাক্টিভ হারমোনিক ফিল্টার (AHF): আধুনিক আইজিবিটি ইনভার্টার ড্রাইভের মাধ্যমে বিপরীতমুখী হারমোনিক কারেন্ট পুশ করে লাইনের মোট THD ৩% এর নিচে নামিয়ে আনে।',
      'ডিটিউন্‌ড ক্যাপাসিটর ব্যাংক: ক্যাপাসিটরের সাথে ৭% (১৮৯ Hz) আয়রন কোর রিঅ্যাক্টর যুক্ত করে সাপ্লাই ট্রান্সফরমারের সাথে বিপজ্জনক রেজোন্যান্স প্রতিহত করা হয়।'
    ]
  },
  importantPoints: {
    en: [
      'Voltage THD (THD_V) and Current THD (THD_I) measure harmonic corruption relative to fundamental RMS amplitude: THD = √(Σ_{n=2}^∞ X_n²) / X_1.',
      'True Power Factor combines both displacement and distortion: PF_true = DPF / √(1 + THD_I²). High THD suppresses power factor even when voltage and current fundamentals are in phase.',
      'Under distorted conditions, total apparent power follows a 3D orthogonal geometry: S² = P² + Q² + D², where D is Budeanu distortion power.',
      'Transformers supplying non-linear loads must be specified with appropriate ANSI/IEEE K-factor ratings (e.g., K-13, K-20) to withstand excessive eddy current winding losses.'
    ],
    hi: [
      'वोल्टेज और करंट THD फंडामेंटल RMS के संदर्भ में उच्च हार्मोनिक्स की तीव्रता को मापते हैं: THD = √(Σ X_n²) / X_1।',
      'ट्रू पावर फैक्टर विस्थापन और विरूपण दोनों को जोड़ता है: PF_true = DPF / √(1 + THD_I²)।',
      'विकृत स्थितियों में कुल स्पष्ट शक्ति 3D संबंध का पालन करती है: S² = P² + Q² + D², जहाँ D विरूपण शक्ति है।',
      'गैर-रैखिक लोड चलाने वाले ट्रांसफार्मर के लिए K-फैक्टर (जैसे K-13, K-20) का सही चयन करना आवश्यक होता है।'
    ],
    bn: [
      'ভোল্টেজ ও কারেন্ট টিএইচডি মৌলিক উপাংশের সাপেক্ষে হারমোনিকের অনুপাত প্রকাশ করে: THD = √(Σ X_n²) / X_1।',
      'ট্রু পাওয়ার ফ্যাক্টর ডিসপ্লেসমেন্ট ও ডিস্টরশন উভয়ের গুণফল: PF_true = DPF / √(১ + THD_I²)।',
      'বিকৃত তরঙ্গে মোট অ্যাপারেন্ট পাওয়ার ত্রিমাত্রিক সম্পর্ক মেনে চলে: S² = P² + Q² + D², যেখানে D হলো ডিস্টরশন পাওয়ার।',
      'নন-লিনিয়ার লোডের জন্য ট্রান্সফরমার বাছাই করতে K-ফ্যাক্টর (যেমন K-13 বা K-20) রেটিং অপরিহার্য।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistake: Equating Displacement Power Factor (cos φ_1) with True Power Factor (P / S). Correction: In the presence of harmonics, True Power Factor is always lower than Displacement Power Factor by the factor 1 / √(1 + THD_I²).',
      'Mistake: Connecting standard un-detuned capacitor banks directly into a plant with large VFD loads. Correction: Pure capacitor banks create a parallel resonant tank with the supply transformer at h_res = √(S_sc / Q_C), often blowing fuses; a 7% series detuning reactor is essential.',
      'Mistake: Calculating THD by dividing by total RMS instead of fundamental RMS. Correction: IEEE 519 strictly defines THD relative to the fundamental RMS: THD = I_h / I_1.'
    ],
    hi: [
      'त्रुटि: विस्थापन पावर फैक्टर (cos φ_1) को ही ट्रू पावर फैक्टर मान लेना। सुधार: हार्मोनिक्स की उपस्थिति में True PF हमेशा कम होता है: PF_true = DPF / √(1 + THD_I²)।',
      'त्रुटि: वीएफडी वाले उद्योग में बिना रिएक्टर के सीधे कैपेसिटर बैंक लगाना। सुधार: यह ट्रांसफार्मर के साथ अनुनाद बनाता है; हमेशा 7% डिट्यून्ड रिएक्टर लगाएं।',
      'त्रुटि: कुल आरएमएस से भाग देकर THD निकालना। सुधार: IEEE 519 मानक के अनुसार हमेशा फंडामेंटल आरएमएस (I_1) से ही भाग दिया जाता है।'
    ],
    bn: [
      'ভুল: ডিসপ্লেসমেন্ট পাওয়ার ফ্যাক্টর (cos φ_1) এবং ট্রু পাওয়ার ফ্যাক্টরকে একই মনে করা। সংশোধন: হারমোনিক্স থাকলে PF_true সর্বদা DPF এর চেয়ে কম হয়: PF_true = DPF / √(১ + THD_I²)।',
      'ভুল: ভিএফডি চালিত ফ্যাক্টরিতে সরাসরি সাধারণ ক্যাপাসিটর ব্যাংক সংযোগ করা। সংশোধন: এটি ট্রান্সফরমারের সাথে সমান্তরাল রেজোন্যান্স সৃষ্টি করে; সর্বদা ৭% ডিটিউনিং রিঅ্যাক্টর ব্যবহার করতে হয়।',
      'ভুল: ফান্ডামেন্টালের বদলে মোট আরএমএস দিয়ে ভাগ করে THD বের করা। সংশোধন: IEEE 519 মানদণ্ডে সর্বদা মৌলিক উপাংশ I_1 দিয়ে ভাগ করা হয়।'
    ]
  },
  keyTakeaways: {
    en: [
      'Current THD directly magnifies line RMS current: I_rms = I_1 · √(1 + THD_I²).',
      'Distortion Power D introduces a 3D orthogonal apparent power vector: S² = P² + Q² + D².',
      'True Power Factor is suppressed by Current THD: PF_true = DPF / √(1 + THD_I²).',
      'Transformer K-Factor accounts for eddy-current heating scaling with h², dictating transformer selection.',
      'Detuned series reactors (7% tuning at 189 Hz) prevent catastrophic capacitor bank parallel resonance.'
    ],
    hi: [
      'करंट THD सीधे लाइन करंट RMS को बढ़ाता है: I_rms = I_1 · √(1 + THD_I²)।',
      'विरूपण शक्ति D एक 3D स्पष्ट शक्ति संबंध बनाती है: S² = P² + Q² + D²।',
      'हार्मोनिक्स ट्रू पावर फैक्टर को गिरा देते हैं: PF_true = DPF / √(1 + THD_I²)।',
      'ट्रांसफार्मर K-फैक्टर भंवर-धारा हीटिंग को मापता है जो h² के साथ बढ़ती है।',
      '7% डिट्यून्ड रिएक्टर कैपेसिटर बैंक में होने वाले खतरनाक अनुनाद को रोकते हैं।'
    ],
    bn: [
      'কারেন্ট টিএইচডি লাইনের মোট আরএমএস কারেন্ট বৃদ্ধি করে: I_rms = I_1 · √(১ + THD_I²)।',
      'ডিস্টরশন পাওয়ার D এর কারণে ত্রিমাত্রিক আপাত ক্ষমতা তৈরি হয়: S² = P² + Q² + D²।',
      'টিএইচডির কারণে ট্রু পাওয়ার ফ্যাক্টর মারাত্মকভাবে কমে যায়: PF_true = DPF / √(১ + THD_I²)।',
      'কে-ফ্যাক্টর ট্রান্সফরমারের এডি কারেন্ট লস (h²) পরিমাপের মানদণ্ড।',
      '৭% ডিটিউনিং রিঅ্যাক্টর ক্যাপাসিটর ব্যাংকের ক্ষতিকর প্যারালাল রেজোন্যান্স সম্পূর্ণ বন্ধ করে।'
    ]
  },
  practiceQuestions: [
    {
      id: 'pq-ch12-l09-01',
      question: {
        en: 'A plant has a displacement power factor of DPF = 0.95 lagging. If the Current THD is measured at 40% (0.40 pu), calculate the plant True Power Factor.',
        hi: 'एक कारखाने का विस्थापन पावर फैक्टर DPF = 0.95 लैगिंग है। यदि करंट THD 40% (0.40 pu) है, तो वास्तविक पावर फैक्टर ज्ञात कीजिए।',
        bn: 'একটি কারখানায় ডিসপ্লেসমেন্ট পাওয়ার ফ্যাক্টর DPF = ০.৯৫ ল্যাগিং। কারেন্ট টিএইচডি ৪০% (০.৪০ pu) হলে মোট ট্রু পাওয়ার ফ্যাক্টর কত?'
      },
      hint: {
        en: 'PF_true = DPF / √(1 + THD_I²) = 0.95 / √(1 + 0.40²) = 0.95 / √(1.16) = 0.95 / 1.077 = 0.882 lagging.',
        hi: 'PF_true = 0.95 / √(1 + 0.40²) = 0.882 लैगिंग।',
        bn: 'PF_true = ০.৯৫ / √(১ + ০.৪০²) = ০.৮৮২ ল্যাগিং।'
      }
    },
    {
      id: 'pq-ch12-l09-02',
      question: {
        en: 'Why is a 7% series reactor (tuning frequency 189 Hz) chosen over a 5% reactor (tuning frequency 224 Hz) in a 50 Hz power network with strong 5th harmonic currents?',
        hi: '50 Hz प्रणाली में 5वीं हार्मोनिक (250 Hz) के लिए 5% रिएक्टर (224 Hz) की तुलना में 7% रिएक्टर (189 Hz) क्यों बेहतर माना जाता है?',
        bn: '৫০ Hz সিস্টেমে ৫ম হারমোনিক (২৫০ Hz) এর ক্ষেত্রে ৫% রিঅ্যাক্টরের (২২৪ Hz) বদলে ৭% রিঅ্যাক্টর (১৮৯ Hz) পছন্দ করা হয় কেন?'
      },
      hint: {
        en: 'A 7% reactor tunes the resonance safely at 189 Hz, providing a generous 61 Hz safety margin below the 5th harmonic (250 Hz) even with component manufacturing tolerance (±5% in C and L) and grid frequency fluctuations.',
        hi: '7% रिएक्टर अनुनाद को 189 Hz पर रखता है, जिससे 250 Hz से 61 Hz का सुरक्षित अंतर मिलता है और घटक सहिष्णुता (tolerance) के कारण अनुनाद का कोई खतरा नहीं रहता।',
        bn: '৭% রিঅ্যাক্টর রেজোন্যান্সকে ১৮৯ Hz-এ রাখে, যা ২৫০ Hz থেকে ৬১ Hz নিরাপদ দূরত্বে থাকে এবং যন্ত্রাংশের টলারেন্স সত্ত্বেও রেজোন্যান্স ঘটতে দেয় না।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch12-l09-01',
      question: {
        en: 'According to IEEE Standard 519, what is the mathematical formula for Current Total Harmonic Distortion (THD_I)?',
        hi: 'IEEE मानक 519 के अनुसार, करंट कुल हार्मोनिक विरूपण (THD_I) का गणितीय सूत्र क्या है?',
        bn: 'IEEE স্ট্যান্ডার্ড ৫১৯ অনুসারে কারেন্ট টোটাল হারমোনিক ডিস্টরশন (THD_I) এর সঠিক গাণিতিক সূত্র কোনটি?'
      },
      options: [
        { id: 'opt-1', text: { en: 'THD_I = (I_rms / I_{1,rms}) × 100%', hi: 'THD_I = (I_rms / I_{1,rms}) × 100%', bn: 'THD_I = (I_rms / I_{1,rms}) × ১০০%' } },
        { id: 'opt-2', text: { en: 'THD_I = [ √( Σ_{n=2}^∞ I_{n,rms}² ) / I_{1,rms} ] × 100%', hi: 'THD_I = [ √( Σ_{n=2}^∞ I_{n,rms}² ) / I_{1,rms} ] × 100%', bn: 'THD_I = [ √( Σ_{n=2}^∞ I_{n,rms}² ) / I_{1,rms} ] × ১০০%' } },
        { id: 'opt-3', text: { en: 'THD_I = [ Σ_{n=2}^∞ I_{n,rms} / I_{1,rms} ] × 100%', hi: 'THD_I = [ Σ_{n=2}^∞ I_{n,rms} / I_{1,rms} ] × 100%', bn: 'THD_I = [ Σ_{n=2}^∞ I_{n,rms} / I_{1,rms} ] × ১০০%' } },
        { id: 'opt-4', text: { en: 'THD_I = [ √( Σ_{n=1}^∞ I_{n,rms}² ) / I_rms ] × 100%', hi: 'THD_I = [ √( Σ_{n=1}^∞ I_{n,rms}² ) / I_rms ] × 100%', bn: 'THD_I = [ √( Σ_{n=1}^∞ I_{n,rms}² ) / I_rms ] × ১০০%' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'IEEE 519 defines THD as the root-sum-square of all harmonic components (excluding the fundamental n=1) divided by the fundamental component RMS: THD_I = √(Σ_{n=2}^∞ I_n²) / I_1.',
        hi: 'IEEE 519 के अनुसार THD सभी उच्च हार्मोनिक्स के वर्ग-योग-मूल को फंडामेंटल RMS से भाग देकर निकाला जाता है।',
        bn: 'IEEE ৫১৯ অনুসারে ফান্ডামেন্টাল ব্যতীত সমস্ত উচ্চতর হারমোনিকের বর্গের সমষ্টির বর্গমূলকে ফান্ডামেন্টাল আরএমএস দিয়ে ভাগ করলে THD পাওয়া যায়।'
      }
    },
    {
      id: 'mcq-ch12-l09-02',
      question: {
        en: 'If a facility has a Displacement Power Factor of 1.00 (cos φ_1 = 1.0) and a Current THD of 100% (THD_I = 1.0 pu), what is its True Power Factor (PF_true)?',
        hi: 'यदि किसी उद्योग का विस्थापन पावर फैक्टर 1.00 है और करंट THD 100% (1.0 pu) है, तो उसका वास्तविक पावर फैक्टर (PF_true) क्या होगा?',
        bn: 'কোনো কারখানার ডিসপ্লেসমেন্ট পাওয়ার ফ্যাক্টর ১.০০ এবং কারেন্ট টিএইচডি ১০০% (১.০ pu) হলে ট্রু পাওয়ার ফ্যাক্টর কত হবে?'
      },
      options: [
        { id: 'opt-1', text: { en: '1.000', hi: '1.000', bn: '১.০০০' } },
        { id: 'opt-2', text: { en: '0.707', hi: '0.707', bn: '০.৭০৭' } },
        { id: 'opt-3', text: { en: '0.500', hi: '0.500', bn: '০.৫০০' } },
        { id: 'opt-4', text: { en: '0.866', hi: '0.866', bn: '০.৮৬৬' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'PF_true = DPF / √(1 + THD_I²) = 1.0 / √(1 + 1.0²) = 1.0 / √2 = 0.707. Even with zero phase shift between fundamental voltage and current, 100% THD limits the power factor to 0.707.',
        hi: 'PF_true = 1.0 / √(1 + 1²) = 1 / √2 = 0.707। फंडामेंटल में शून्य फेज शिफ्ट होने पर भी 100% THD पावर फैक्टर को 0.707 तक गिरा देता है।',
        bn: 'PF_true = ১.০ / √(১ + ১.০²) = ১ / √২ = ০.৭০৭। ফান্ডামেন্টালে কোনো দশা পার্থক্য না থাকা সত্ত্বেও ১০০% টিএইচডির কারণে পাওয়ার ফ্যাক্টর কমে ০.৭০৭ হয়।'
      }
    },
    {
      id: 'mcq-ch12-l09-03',
      question: {
        en: 'In Budeanu non-sinusoidal power theory, what does the Distortion Power (D) represent in the relationship S² = P² + Q² + D²?',
        hi: 'बुडियानु गैर-ज्यावक्रीय शक्ति सिद्धांत में संबंध S² = P² + Q² + D² में विरूपण शक्ति (D) क्या दर्शाती है?',
        bn: 'বুডিয়ানু নন-সাইনুসয়েডাল পাওয়ার তত্ত্বে S² = P² + Q² + D² সমীকরণে ডিস্টরশন পাওয়ার (D) কী প্রকাশ করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Useful mechanical shaft work delivered to the load', hi: 'लोड को दी गई उपयोगी यांत्रिक शाफ्ट शक्ति', bn: 'লোডে সরবরাহকৃত দরকারি মেকানিক্যাল ক্ষমতা' } },
        { id: 'opt-2', text: { en: 'An orthogonal non-active power component generated by cross-frequency harmonic interactions that increases system apparent loading without doing useful work', hi: 'क्रॉस-आवृत्ति हार्मोनिक अंतःक्रियाओं द्वारा उत्पन्न एक लांबिक गैर-सक्रिय शक्ति घटक जो उपयोगी कार्य किए बिना सिस्टम लोडिंग बढ़ाता है', bn: 'ভিন্ন কম্পাঙ্কের হারমোনিক ইন্টারঅ্যাকশন দ্বারা তৈরি একটি লম্ব অ-সক্রিয় পাওয়ার উপাদান যা কোনো দরকারী কাজ না করেই সিস্টেমের লোড বৃদ্ধি করে' } },
        { id: 'opt-3', text: { en: 'DC power converted directly into battery chemical storage', hi: 'बैटरी रासायनिक भंडारण में सीधे परिवर्तित डीसी शक्ति', bn: 'ব্যাটারিতে চার্জ হওয়া সরাসরি ডিসি পাওয়ার' } },
        { id: 'opt-4', text: { en: 'The dielectric breakdown energy of cables', hi: 'केबलों की परावैद्युत विखंडन ऊर्जा', bn: 'কেবলের ডাই-ইলেকট্রিক ব্রেকডাউন শক্তি' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Distortion power D is the orthogonal component defined as D = √(S² - P² - Q²). It represents energy circulating between various harmonic frequencies that increases apparent VA demand and conductor heating without producing net mechanical or thermal work.',
        hi: 'विरूपण शक्ति D = √(S² - P² - Q²) विभिन्न हार्मोनिक आवृत्तियों के बीच परिसंचारी ऊर्जा का प्रतिनिधित्व करती है जो उपयोगी कार्य किए बिना स्पष्ट मांग (kVA) को बढ़ाती है।',
        bn: 'ডিস্টরশন পাওয়ার D = √(S² - P² - Q²) বিভিন্ন হারমোনিক কম্পাঙ্কের মধ্যে ঘূর্ণায়মান অতিরিক্ত শক্তি নির্দেশ করে যা দরকারী কাজ না করেই তার ও ট্রান্সফরমারকে অতিরিক্ত বোঝায় ফেলে।'
      }
    },
    {
      id: 'mcq-ch12-l09-04',
      question: {
        en: 'What is the primary factor that causes the ANSI/IEEE C57.110 K-factor rating of a transformer supplying non-linear loads to increase dramatically?',
        hi: 'गैर-रैखिक भार वाले ट्रांसफार्मर की ANSI/IEEE C57.110 K-फैक्टर रेटिंग में अत्यधिक वृद्धि का मुख्य कारण क्या है?',
        bn: 'নন-লিনিয়ার লোড চালনাকারী ট্রান্সফরমারের ANSI/IEEE C57.110 K-ফ্যাক্টর মান মারাত্মকভাবে বৃদ্ধি পাওয়ার মূল কারণ কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Winding eddy-current loss heating scales with the square of the harmonic order (h²)', hi: 'वाइंडिंग भंवर-धारा हानि हीटिंग हार्मोनिक क्रम के वर्ग (h²) के साथ बढ़ती है', bn: 'ওয়াইন্डिंग এডি কারেন্ট জনিত তাপ হারমোনিক ক্রমের বর্গের (h²) সাথে বাড়ে' } },
        { id: 'opt-2', text: { en: 'Transformer core mass decreases at higher frequencies', hi: 'उच्च आवृत्तियों पर कोर का द्रव्यमान कम हो जाता है', bn: 'উচ্চ কম্পাঙ্কে ট্রান্সফরমারের কোর ভর কমে যায়' } },
        { id: 'opt-3', text: { en: 'The transformation turns ratio increases proportionally to frequency', hi: 'रूपांतरण अनुपात आवृत्ति के समानुपाती बढ़ जाता है', bn: 'কম্পাঙ্কের সাথে ট্রান্সফরমারের টার্ন রেশিও বৃদ্ধি পায়' } },
        { id: 'opt-4', text: { en: 'Magnetic hysteresis vanishes completely in non-linear loads', hi: 'गैर-रैखिक भार में चुंबकीय शैथिल्य पूरी तरह समाप्त हो जाता है', bn: 'নন-লিনিয়ার লোডে হিস্টেরেসিস সম্পূর্ণ দূর হয়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'The K-factor formula is K = Σ (I_h² · h²) / Σ I_h². Because winding eddy current losses scale with h², higher-order harmonics (like 11th, 13th, 17th) have weighting factors of 121, 169, and 289, rapidly driving up the K-factor and requiring specialized K-13 or K-20 transformers.',
        hi: 'K-फैक्टर सूत्र K = Σ (I_h² · h²) / Σ I_h² है। भंवर धारा हानियाँ h² के साथ बढ़ने के कारण उच्च हार्मोनिक्स (11th, 13th) का भार क्रमशः 121 और 169 हो जाता है, जिससे K-फैक्टर बहुत बढ़ जाता है।',
        bn: 'K-ফ্যাক্টর সমীকরণ K = Σ (I_h² · h²) / Σ I_h²। ওয়াইন্ডিং এডি কারেন্ট লস h² অনুপাতে বৃদ্ধি পাওয়ায় ১১তম ও ১৩তম হারমোনিকের ভার যথাক্রমে ১২১ ও ১৬৯ গুণ হয়, যা K-ফ্যাক্টর দ্রুত বাড়িয়ে দেয়।'
      }
    },
    {
      id: 'mcq-ch12-l09-05',
      question: {
        en: 'Why does connecting a pure (un-detuned) power factor correction capacitor bank across a bus with 6-pulse VFDs present an extreme operational hazard?',
        hi: '6-पल्स वीएफडी वाले बस पर सीधे शुद्ध कैपेसिटर बैंक जोड़ना एक अत्यधिक खतरनाक परिचालन जोखिम क्यों प्रस्तुत करता है?',
        bn: '৬-পালস ভিএফডি যুক্ত বাসে সরাসরি সাধারণ ক্যাপাসিটর ব্যাংক বসালে চরম বিপদের ঝুঁকি তৈরি হয় কেন?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Capacitors short-circuit all 50 Hz fundamental currents', hi: 'कैपेसिटर सभी 50 Hz मौलिक धाराओं को शॉर्ट-सर्किट कर देते हैं', bn: 'ক্যাপাসিটর ৫০ Hz ফান্ডামেন্টাল কারেন্টকে শর্ট সার্কিট করে' } },
        { id: 'opt-2', text: { en: 'The capacitor bank forms a parallel resonant tank with the supply transformer at h_res = √(S_sc / Q_C), potentially amplifying 5th or 7th harmonic voltages by a factor of 10 or more', hi: 'कैपेसिटर बैंक ट्रांसफार्मर के साथ h_res = √(S_sc / Q_C) पर समानांतर अनुनाद बनाता है, जो 5वीं या 7वीं हार्मोनिक वोल्टेज को 10 गुना तक बढ़ा सकता है', bn: 'ক্যাপাসিটর ব্যাংক ট্রান্সফরমারের সাথে h_res = √(S_sc / Q_C) কম্পাঙ্কে প্যারালাল রেজোন্যান্স সৃষ্টি করে ৫ম বা ৭ম হারমোনিক ভোল্টেজকে ১০ গুণের বেশি বাড়িয়ে দিতে পারে' } },
        { id: 'opt-3', text: { en: 'It reverses the rotational direction of all downstream motors', hi: 'यह सभी मोटरों के घूमने की दिशा को उलट देता है', bn: 'এটি মোটরের ঘূর্ণন দিক উল্টে দেয়' } },
        { id: 'opt-4', text: { en: 'Capacitors absorb active kilowatt power and convert it into heat', hi: 'कैपेसिटर सक्रिय किलोवाट शक्ति अवशोषित कर गर्मी में बदलते हैं', bn: 'ক্যাপাসিটর সক্রিয় কিলোওয়াট শোষণ করে তাপে রূপান্তর করে' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'The upstream transformer leakage inductance and the shunt capacitor bank form a parallel LC resonant circuit. The resonant harmonic order is h_res = √(S_sc / Q_C). If this frequency matches the 5th (250 Hz) or 7th (350 Hz) harmonic from 6-pulse drives, the parallel resonance impedance skyrockets, causing catastrophic overvoltage and capacitor failure.',
        hi: 'ट्रांसफार्मर और कैपेसिटर मिलकर h_res = √(S_sc / Q_C) पर समानांतर अनुनाद बनाते हैं। यदि यह 5वीं या 7वीं हार्मोनिक से मेल खाता है, तो अनुनाद वोल्टेज को भयानक रूप से बढ़ा देता है जिससे कैपेसिटर फट सकते हैं।',
        bn: 'সাপ্লাই ট্রান্সফরমার ও শান্ট ক্যাপাসিটর মিলে h_res = √(S_sc / Q_C) তে একটি প্যারালাল রেজোন্যান্ট সার্কিট তৈরি করে। এটি ৫ম বা ৭ম হারমোনিকের সাথে মিলে গেলে রেজোন্যান্সের ফলে মারাত্মক ওভার-ভোল্টেজ ও ক্যাপাসিটর ব্লাস্ট ঘটে।'
      }
    },
    {
      id: 'mcq-ch12-l09-06',
      question: {
        en: 'What is the purpose of installing a 7% series detuning reactor with power factor correction capacitor banks in a 50 Hz power distribution network?',
        hi: '50 Hz बिजली वितरण नेटवर्क में कैपेसिटर बैंक के साथ 7% श्रेणी डिट्यूनिंग रिएक्टर स्थापित करने का क्या उद्देश्य है?',
        bn: '৫০ Hz বিদ্যুৎ বিতরণ লাইনে ক্যাপাসিটর ব্যাংকের সাথে ৭% ডিটিউনিং রিঅ্যাক্টর যুক্ত করার মূল উদ্দেশ্য কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'To increase the capacitance value by 700%', hi: 'कैपेसिटेंस मान को 700% बढ़ाना', bn: 'ক্যাপাসিট্যান্স মান ৭০০% বৃদ্ধি করা' } },
        { id: 'opt-2', text: { en: 'To tune the series LC branch to 189 Hz (below the 5th harmonic of 250 Hz), ensuring the branch is net inductive for all harmonics ≥ 5th and preventing parallel resonance', hi: 'शाखा को 189 Hz (250 Hz की 5वीं हार्मोनिक से नीचे) पर ट्यून करना, जिससे शाखा 5वीं और उच्च हार्मोनिक्स के लिए प्रेरकीय बन जाए और समानांतर अनुनाद रुक जाए', bn: 'শাখাটিকে ১৮৯ Hz-এ (২৫০ Hz ৫ম হারমোনিকের নিচে) টিউন করা, যা ৫ম ও তদুর্ধ্ব সমস্ত হারমোনিক্সে শাখাটিকে ইন্ডাকটিভ রাখে এবং প্যারালাল রেজোন্যান্স প্রতিহত করে' } },
        { id: 'opt-3', text: { en: 'To boost the grid frequency from 50 Hz to 60 Hz', hi: 'ग्रिड आवृत्ति को 50 Hz से बढ़ाकर 60 Hz करना', bn: 'গ্রিড ফ্রিকোয়েন্সি ৫০ Hz থেকে ৬০ Hz করা' } },
        { id: 'opt-4', text: { en: 'To convert three-phase AC into ripple-free DC', hi: '3-फेज एसी को रिपल-मुक्त डीसी में बदलना', bn: '৩-ফেজ এসিকে রিপল-মুক্ত ডিসিতে রূপান্তর করা' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'A 7% reactor (p = 0.07) sets the series resonance to f_tune = f_1 / √p = 50 / √0.07 = 189 Hz. At all frequencies above 189 Hz (including the 5th harmonic at 250 Hz and 7th at 350 Hz), the LC branch is inductive. An inductive branch cannot resonate with the inductive transformer, guaranteeing 100% immunity from parallel resonance.',
        hi: '7% रिएक्टर (p = 0.07) अनुनाद को f_tune = 50 / √0.07 = 189 Hz पर सेट करता है। 189 Hz से ऊपर की सभी आवृत्तियों (जैसे 5वीं 250 Hz पर) के लिए यह शाखा प्रेरकीय बन जाती है और ट्रांसफार्मर के साथ अनुनाद नहीं हो सकता।',
        bn: '৭% রিঅ্যাক্টর (p = ০.০৭) রেজোন্যান্স কম্পাঙ্ককে f_tune = ৫০ / √০.০৭ = ১৮৯ Hz-এ সেট করে। ১৮৯ Hz-এর উপরের সমস্ত কম্পাঙ্কে শাখাটি ইন্ডাকটিভ আচরণ করায় ট্রান্সফরমারের সাথে কোনো প্যারালাল রেজোন্যান্স ঘটা সম্ভব হয় না।'
      }
    },
    {
      id: 'mcq-ch12-l09-07',
      question: {
        en: 'How does an Active Harmonic Filter (AHF) eliminate harmonic distortion on an industrial electrical bus?',
        hi: 'एक सक्रिय हार्मोनिक फिल्टर (AHF) एक औद्योगिक विद्युत बस पर हार्मोनिक विरूपण को कैसे समाप्त करता है?',
        bn: 'একটি অ্যাক্টিভ হারমোনিক ফিল্টার (AHF) ইন্ডাস্ট্রিয়াল বাসে হারমোনিক ডিস্টরশন কীভাবে দূর করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'By opening circuit breakers whenever harmonic currents are detected', hi: 'हार्मोनिक धाराओं का पता चलने पर सर्किट ब्रेकर को खोलकर', bn: 'হারমোনিক কারেন্ট পেলে সার্কিট ব্রেকার ট্রিপ করিয়ে' } },
        { id: 'opt-2', text: { en: 'By measuring the load harmonic currents and using fast IGBT inverters to inject equal-magnitude currents that are 180° out of phase, canceling them dynamically at the bus', hi: 'लोड हार्मोनिक धाराओं को मापकर और तेज आईजीबीटी इनवर्टर द्वारा 180° विपरीत कला में समान धारा इंजेक्ट करके, जिससे बस पर उनका निरस्तीकरण हो जाता है', bn: 'লোডের হারমোনিক কারেন্ট রিয়েল-টাইমে মেপে দ্রুতগতির আইজিবিটি ইনভার্টারের মাধ্যমে ১৮০° বিপরীত দশায় সমান কারেন্ট ইনজেক্ট করে হারমোনিক বাতিল করার মাধ্যমে' } },
        { id: 'opt-3', text: { en: 'By dissipating all harmonic currents in giant water-cooled resistors', hi: 'सभी हार्मोनिक धाराओं को विशाल जल-शीतित प्रतिरोधों में नष्ट करके', bn: 'বিশাল ওয়াটার-কুল্ড রেজিস্টরের মাধ্যমে তাপ হিসেবে নষ্ট করে' } },
        { id: 'opt-4', text: { en: 'By stepping up the voltage to 400 kV', hi: 'वोल्टेज को 400 kV तक बढ़ाकर', bn: 'ভোল্টেজ ৪০০ kV তে রূপান্তর করে' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'An Active Harmonic Filter (AHF) employs digital signal processors (DSPs) to sample the load current, extract the harmonic spectrum, and control an IGBT-based PWM inverter to inject counter-phase harmonic currents (i_AHF = -i_harmonic). The upstream utility source only provides the pure 50/60 Hz fundamental sine wave.',
        hi: 'एक्टिव हार्मोनिक फिल्टर (AHF) लोड करंट का विश्लेषण करके आईजीबीटी इनवर्टर की मदद से ठीक 180° विपरीत कला वाली धारा इंजेक्ट करता है, जिससे ग्रिड से आने वाली धारा शुद्ध ज्यावक्रीय बनी रहती है।',
        bn: 'অ্যাক্টিভ হারমোনিক ফিল্টার (AHF) ডিজিটাল সিগন্যাল প্রসেসরের সাহায্যে লোড কারেন্ট পর্যবেক্ষণ করে এবং আইজিবিটি ইনভার্টারের মাধ্যমে ঠিক ১৮০° বিপরীত দশার হারমোনিক কারেন্ট পুশ করে, ফলে মেইন লাইনে কারেন্ট সম্পূর্ণ বিশুদ্ধ সাইন ওয়েভ থাকে।'
      }
    },
    {
      id: 'mcq-ch12-l09-08',
      question: {
        en: 'Under IEEE Standard 519-2022 recommendations, what is the maximum permissible Voltage THD (THD_V) limit at the Point of Common Coupling (PCC) for standard general electrical distribution systems operating below 1 kV?',
        hi: 'IEEE मानक 519-2022 के तहत 1 kV से नीचे सामान्य वितरण प्रणालियों के लिए पॉइंट ऑफ कॉमन कपलिंग (PCC) पर अधिकतम स्वीकार्य वोल्टेज THD (THD_V) सीमा क्या है?',
        bn: 'IEEE স্ট্যান্ডার্ড ৫১৯-২০২২ অনুযায়ী ১ kV-এর নিচের সাধারণ ডিস্ট্রিবিউশন সিস্টেমে পয়েন্ট অব কমন কাপলিংয়ে (PCC) সর্বোচ্চ অনুমোদিত ভোল্টেজ টিএইচডি (THD_V) কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '5.0% (with no individual harmonic exceeding 3.0%)', hi: '5.0% (कोई भी एकल हार्मोनिक 3.0% से अधिक नहीं)', bn: '৫.০% (কোনো একক হারমোনিক ৩.০% এর বেশি নয়)' } },
        { id: 'opt-2', text: { en: '20.0%', hi: '20.0%', bn: '২০.০%' } },
        { id: 'opt-3', text: { en: '50.0%', hi: '50.0%', bn: '৫০.০%' } },
        { id: 'opt-4', text: { en: '0.1%', hi: '0.1%', bn: '০.১%' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'IEEE 519 specifies that at the Point of Common Coupling (PCC) for systems rated V ≤ 1.0 kV, the maximum total voltage harmonic distortion must not exceed 5.0%, and each individual harmonic voltage must not exceed 3.0%, protecting neighboring industrial consumers from harmonic cross-talk.',
        hi: 'IEEE 519 के अनुसार 1 kV से नीचे के सामान्य वितरण प्रणालियों में कुल वोल्टेज THD 5.0% से कम और कोई भी एकल हार्मोनिक 3.0% से कम होना अनिवार्य है।',
        bn: 'IEEE ৫১৯ মানদণ্ড অনুযায়ী ১ kV বা তার নিচের সিস্টেমে PCC-তে মোট ভোল্টেজ টিএইচডি সর্বোচ্চ ৫.০% এবং প্রতিটি একক হারমোনিক সর্বোচ্চ ৩.০% অনুমোদিত।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ch12-l09-01',
      title: {
        en: 'THD Distortion Power Triangle & Active Filter Mitigation Architecture',
        hi: 'THD विरूपण शक्ति त्रिभुज एवं सक्रिय फिल्टर शमन वास्तुकला',
        bn: 'টিএইচডি ডিস্টরশন পাওয়ার ত্রিভুজ ও অ্যাক্টিভ ফিল্টার প্রশমন আর্কিটেকচার'
      },
      caption: {
        en: '3D Apparent Power vector geometry (S² = P² + Q² + D²) and one-line schematic of 7% detuned capacitor bank and Active Harmonic Filter (AHF) compensation.',
        hi: '3D स्पष्ट शक्ति सदिश ज्यामिति (S² = P² + Q² + D²) एवं 7% डिट्यून्ड कैपेसिटर बैंक और एक्टिव हार्मोनिक फिल्टर की सिंगल-लाइन आरेख।',
        bn: 'ত্রিমাত্রিক আপাত ক্ষমতা ভেক্টর জ্যামিতি (S² = P² + Q² + D²) এবং ৭% ডিটিউন্‌ড ক্যাপাসিটর ব্যাংক ও অ্যাক্টিভ ফিল্টারের সিঙ্গেল লাইন ডায়াগ্রাম।'
      },
      svgType: 'circuit-ch12-thd-distortion-power'
    }
  ]
};
