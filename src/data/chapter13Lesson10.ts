import { Lesson } from '../types';

export const LESSON_PFC_ENGINEERING_CAPSTONE: Lesson = {
  id: 'lsn-ch13-pfc-engineering-capstone',
  topicId: 'tp-pfc-engineering-capstone',
  chapterId: 'ch-power-factor',
  order: 10,
  title: {
    en: 'Complete Industrial PFC Design Capstone',
    hi: 'पूर्ण औद्योगिक PFC डिजाइन कैपस्टोन',
    bn: 'সম্পূর্ণ শিল্প PFC নকশা ক্যাপস্টোন'
  },
  description: {
    en: 'Integrate the entire curriculum of Chapter 13 into a comprehensive, end-to-end industrial engineering capstone design. Perform factory electrical load profiling, calculate target reactive compensation kVAR, architect step granularity, engineer series detuned reactors (7% vs 14%) to eliminate harmonic resonance, select reinforced capacitor voltage ratings (480V/525V), calculate transformer capacity release, and prepare executive capital investment payback models complying with IEEE 519 and IEC 61921.',
    hi: 'अध्याय 13 के संपूर्ण पाठ्यक्रम को एक व्यापक, एंड-टू-एंड औद्योगिक इंजीनियरिंग कैपस्टोन डिजाइन में एकीकृत करें। फैक्ट्री इलेक्ट्रिकल लोड प्रोफाइलिंग करें, लक्षित रिएक्टिव क्षतिपूर्ति kVAR की गणना करें, स्टेप ग्रैन्युलैरिटी डिजाइन करें, हार्मोनिक रेजोनेंस समाप्त करने के लिए 7% बनाम 14% सीरीज डिट्यून्ड रिएक्टर तैयार करें, 480V/525V कैपेसिटर वोल्टेज रेटिंग चुनें, ट्रांसफार्मर हेडरूम की गणना करें और IEEE 519 एवं IEC 61921 का अनुपालन करने वाले वित्तीय पेबैक मॉडल तैयार करें।',
    bn: 'অধ্যায় ১৩-এর সমগ্র পাঠ্যক্রমকে একটি পূর্ণাঙ্গ ও সামগ্রিক শিল্প ইঞ্জিনিয়ারিং ক্যাপস্টোন প্রজেক্টে সমন্বিত করুন। কারখানার বৈদ্যুতিক লোড প্রোফাইলিং, প্রয়োজনীয় রিঅ্যাক্টিভ kVAR নির্ণয়, স্টেপ গ্র্যানুলারিটি বিন্যাস, হারমোনিক রেজোন্যান্স নিরসনে সিরিজ ডিটিউন্ড রিঅ্যাক্টর (৭% বনাম ১৪%) নকশা, উচ্চ রেটিংয়ের ক্যাপাসিটর (৪৮০V/৫২৫V) নির্বাচন, ট্রান্সফরমার মুক্ত ক্ষমতা হিসাব এবং IEEE 519 ও IEC 61921 মানকসম্মত এক্সিকিউটিভ আর্থিক পেব্যাক মডেল তৈরি করুন।'
  },
  estimatedMinutes: 60,
  easyExplanation: {
    en: 'This Capstone Project brings together everything you have learned into a real-world industrial engineering assignment: You are the chief electrical consultant hired to design the complete power factor and harmonic mitigation system for a major manufacturing plant. The factory runs heavy induction motors, pumps, and variable frequency drives (VFDs) that cause a sluggish 0.72 power factor, severe voltage drop, and high harmonic distortion. You will calculate the total kVAR required to hit 0.98 lagging PF, size an intelligent 9-step Automatic Power Factor Correction (APFC) panel, integrate 7% detuned reactors so the capacitors don’t catch fire from harmonic resonance, upgrade the capacitor cans to 480V to handle the reactor voltage boost, recover over 240 kVA of capacity in the substation transformer, and prove to the company CEO that the entire $30,000 project will pay for itself in under 8 months!',
    hi: 'यह कैपस्टोन प्रोजेक्ट आपके द्वारा सीखी गई हर बात को एक वास्तविक औद्योगिक इंजीनियरिंग प्रोजेक्ट में जोड़ता है: आप एक बड़े विनिर्माण कारखाने के लिए पावर फैक्टर और हार्मोनिक शमन प्रणाली डिजाइन करने वाले मुख्य सलाहकार हैं। कारखाना भारी मोटरों, पंपों और VFDs पर चलता है जिससे पावर फैक्टर 0.72 तक गिर जाता है और हार्मोनिक्स बढ़ जाते हैं। आप 0.98 PF तक पहुंचने के लिए आवश्यक कुल kVAR की गणना करेंगे, एक 9-स्टेप APFC पैनल डिजाइन करेंगे, हार्मोनिक रेजोनेंस से कैपेसिटर को जलने से बचाने के लिए 7% डिट्यून्ड रिएक्टर लगाएंगे, रिएक्टर वोल्टेज वृद्धि को संभालने के लिए 480V कैपेसिटर चुनेंगे, सबस्टेशन ट्रांसफार्मर में 240 kVA से अधिक क्षमता मुक्त करेंगे, और कंपनी के CEO को साबित करेंगे कि पूरा $30,000 का प्रोजेक्ट 8 महीने से भी कम समय में अपनी लागत वसूल कर लेगा!',
    bn: 'এই ক্যাপস্টোন প্রজেক্টটি পুরো অধ্যায়ের সমস্ত শিক্ষাকে একটি বাস্তব শিল্প ইঞ্জিনিয়ারিং প্রজেক্টে রূপান্তর করে: আপনি একটি বৃহৎ উৎপাদন কারখানার প্রধান বৈদ্যুতিক পরামর্শক হিসেবে সম্পূর্ণ পাওয়ার ফ্যাক্টর ও হারমোনিক ফিল্টারিং ব্যবস্থা ডিজাইন করবেন। কারখানার বিশাল মোটর, পাম্প ও VFD ড্রাইভের কারণে পাওয়ার ফ্যাক্টর ০.৭২-এ নেমে গেছে এবং উচ্চ হারমোনিক তৈরি হচ্ছে। আপনি ০.৯৮ PF অর্জনে মোট kVAR হিসাব করবেন, ৯টি ধাপে বিভক্ত বুদ্ধিমান APFC প্যানেল ডিজাইন করবেন, রেজোন্যান্স প্রতিরোধে ৭% ডিটিউন্ড রিঅ্যাক্টর যুক্ত করবেন, ভোল্টেজ বৃদ্ধির সাথে সামঞ্জস্য রেখে ৪৮০V ক্যাপাসিটর নির্বাচন করবেন, সাবস্টেশন ট্রান্সফরমারের ২৪০ kVA-এর বেশি ধারণক্ষমতা মুক্ত করবেন এবং কোম্পানির শীর্ষ ব্যবস্থাপনাকে দেখাবেন যে কীভাবে পুরো $৩০,০০০ ডলারের বিনিয়োগ মাত্র ৮ মাসের মধ্যে উঠে আসবে!'
  },
  detailedExplanation: {
    en: 'The Complete Industrial PFC Design Capstone follows a 6-phase professional engineering methodology complying with IEC 61921 and IEEE 519 standards:\n\nPhase 1: Plant Electrical Characterization & Baseline Auditing:\n- Substation transformer: S_tx = 1,000 kVA, 11 kV / 415 V, 3-phase, 50 Hz, %Z = 5.5%.\n- Baseline active operating demand: P = 650 kW.\n- Baseline uncompensated power factor: PF_1 = 0.72 lagging (θ_1 = 43.95°).\n- Baseline apparent demand: S_1 = P / PF_1 = 650 / 0.72 = 902.8 kVA (90.3% transformer loading).\n- Feeder current: I_1 = (902.8 · 1000) / (√3 · 415) = 1,256 A.\n- Harmonic survey: Nonlinear load proportion = 28% of total kVA (due to 6-pulse VFDs); THD_I = 24.5% at main bus.\n\nPhase 2: Reactive Compensation Sizing (kVAR):\n- Target design power factor: PF_2 = 0.98 lagging (θ_2 = 11.48°).\n- Ideal required compensation:\n  Q_c = P · [tan(θ_1) - tan(θ_2)] = 650 · [tan(43.95°) - tan(11.48°)] = 650 · [0.9639 - 0.2031] = 650 · 0.7608 = 494.5 kVAR.\n- Sizing selection: To prevent leading PF during light loads while providing robust headroom, engineer a 450 kVAR bank with a modular 1:2:2:2:2 stepping arrangement (e.g., 1 x 25 kVAR + 1 x 25 kVAR trim steps + 8 x 50 kVAR power stages = 450 kVAR total).\n\nPhase 3: Harmonic Resonance & Detuned Reactor Engineering:\n- Short-circuit capacity of the transformer:\n  S_sc = S_tx / (%Z / 100) = 1,000 kVA / 0.055 = 18,182 kVA = 18.18 MVA.\n- Natural parallel resonant order without reactors:\n  h_res = √(S_sc / Q_c) = √(18,182 / 450) = √40.4 = 6.36.\n  * DANGER: As stages switch (e.g. at 300 kVAR, h_res = √(18,182 / 300) = 7.78; at 350 kVAR, h_res = 7.21), the resonance frequency coincides directly with dominant 5th (250 Hz) and 7th (350 Hz) harmonic currents generated by 6-pulse VFDs! Without reactors, the system will undergo violent parallel resonance, blowing fuses and rupturing capacitors.\n- Reactor Selection: Implement 7% series detuned iron-core reactors (p = 0.07):\n  * Series resonant frequency: f_res = f_line / √p = 50 / √0.07 = 189 Hz (h = 3.78).\n  * Because 189 Hz lies safely below the lowest harmonic (5th = 250 Hz), the LC branch behaves INDUCTIVELY for all harmonics (h ≥ 5), completely preventing resonance while absorbing a portion of the 5th harmonic.\n\nPhase 4: Capacitor Voltage Rise & Component Specification:\n- A series reactor creates a steady-state fundamental voltage boost across the capacitor terminals:\n  V_cap = V_bus / (1 - p) = 415 V / (1 - 0.07) = 415 / 0.93 = 446.2 V.\n- Accounting for continuous 10% utility overvoltage tolerance (415 · 1.10 = 456.5 V), the capacitor terminals will experience:\n  V_cap_max = 456.5 / 0.93 = 490.9 V!\n- Mandatory Engineering Rule: Standard 415V capacitors will fail within months. Design engineer MUST specify reinforced 480V or 525V heavy-duty metallized polypropylene capacitors.\n\nPhase 5: Grid & Substation Capacity Liberation:\n- Corrected apparent demand: S_2 = 650 kW / 0.98 = 663.3 kVA.\n- Transformer loading drops from 90.3% down to 66.3%.\n- Capacity released: ΔS = 902.8 - 663.3 = 239.5 kVA (enables +235 kW of new machinery).\n- Operating current drops from 1,256 A to 923 A (-333 A reduction, -26.5%).\n- Feeder I²R heat losses drop by 46.1%.\n\nPhase 6: Project Financial Ledger & ROI Payback:\n- Installed CapEx: 450 kVAR 7% detuned APFC panel @ $68/kVAR installed = $30,600.\n- Monthly demand savings (at $14/kVA/mo): 239.5 kVA · $14 = $3,353/mo ($40,236/yr).\n- Elimination of 0.72 PF penalty ($1,800/mo) = $21,600/yr.\n- Total net annual savings = $40,236 + $21,600 = $61,836 per year!\n- Simple Payback Period: SPP = $30,600 / $61,836 = 0.495 years = 5.9 MONTHS!\n- 10-year Net Present Value (NPV @ 8% discount rate) = $384,100; IRR = 202%.',
    hi: 'औद्योगिक PFC डिजाइन कैपस्टोन की संपूर्ण कार्यप्रणाली:\n\n1. प्रारंभिक डेटा: 1000 kVA ट्रांसफार्मर (%Z = 5.5%), 650 kW सक्रिय भार, 0.72 लैगिंग PF। प्रारंभिक मांग = 903 kVA (1256 A, 90.3% लोडिंग)।\n\n2. कैपेसिटर साइज़िंग: PF को 0.98 करने हेतु Q_c = 650 · (tan 43.95° - tan 11.48°) = 495 kVAR। 450 kVAR का मॉड्यूलर APFC बैंक चुना गया।\n\n3. हार्मोनिक रेजोनेंस विश्लेषण: बिना रिएक्टर के रेजोनेंट ऑर्डर h_res = √(S_sc / Q_c) = 6.36 निकलता है, जो 5वें और 7वें हार्मोनिक्स के खतरनाक रूप से करीब है। इससे बचने हेतु 7% सीरीज डिट्यून्ड रिएक्टर (189 Hz ट्यूनिंग) लगाना अनिवार्य है ताकि कैपेसिटर बैंक हार्मोनिक्स के लिए इंडक्टिव बन जाए।\n\n4. वोल्टेज रेटिंग: 7% रिएक्टर से कैपेसिटर टर्मिनल वोल्टेज बढ़कर V_cap = 415 / (1 - 0.07) = 446.2V हो जाता है। अतः 480V या 525V रेटेड हैवी-ड्यूटी कैपेसिटर लगाना अनिवार्य है।\n\n5. ट्रांसफार्मर हेडरूम: सुधरी मांग = 663 kVA (923 A, 66.3% लोडिंग)। 240 kVA की क्षमता मुक्त हुई और करंट 333 A (-26.5%) घट गया।\n\n6. वित्तीय विश्लेषण: 450 kVAR डिट्यून्ड APFC की कुल लागत = $30,600। वार्षिक मांग बचत ($40,236) + जुर्माना बचत ($21,600) = $61,836 प्रति वर्ष। पेबैक अवधि = मात्र 5.9 महीने (IRR 202%)!',
    bn: 'শিল্প PFC ডিজাইন ক্যাপস্টোনের সামগ্রিক বিশ্লেষণ:\n\n১. বেসলাইন অডিট: ১০০০ kVA ট্রান্সফরমার (%Z = ৫.৫%), ৬৫০ kW লোড, ০.৭২ ল্যাগিং PF। প্রাথমিক চাহিদা = ৯০৩ kVA (১২৫৬ A, ৯০.৩% লোডিং)।\n\n২. প্রয়োজনীয় kVAR: PF ০.৯৮ এ উন্নীত করতে Q_c = ৬৫০ · (tan ৪৩.৯৫° - tan ১১.৪৮°) = ৪৯৫ kVAR। ৪৫০ kVAR মডুলার APFC প্যানেল নির্ধারিত হলো।\n\n৩. হারমোনিক রেজোন্যান্স ও রিঅ্যাক্টর: শর্ট সার্কিট ক্ষমতা S_sc = ১৮,১৮২ kVA। আন-ডিটিউন্ড অবস্থায় রেজোন্যান্স অর্ডার h_res = ৬.৩৬, যা ৫ম ও ৭ম হারমোনিক কারেন্টের সাথে মারাত্মক রেজোন্যান্স ঘটাবে। এটি রুখতে ৭% সিরিজ ডিটিউন্ড রিঅ্যাক্টর (১৮৯ Hz টিউনিং) স্থাপন করা হলো।\n\n৪. ক্যাপাসিটর ভোল্টেজ বৃদ্ধি: ৭% রিঅ্যাক্টরের কারণে ক্যাপাসিটরে ভোল্টেজ বেড়ে V_cap = ৪১৫ / (১ - ০.০৭) = ৪৪৬.২V হয়। তাই সাধারণ ৪১৫V এর বদলে ৪৮০V বা ৫২৫V রেটিংয়ের ক্যাপাসিটর ব্যবহার বাধ্যতামূলক।\n\n৫. মুক্ত ট্রান্সফরমার ক্ষমতা: সংশোধিত চাহিদা = ৬৬৩ kVA (৯২৩ A, ৬৬.৩% লোডিং)। ট্রান্সফরমারে ২৪০ kVA নতুন লোড চালানোর ক্ষমতা অবমুক্ত হলো এবং লাইন কারেন্ট ৩৩৩ A (-২৬.৫%) কমল।\n\n৬. আর্থিক হিসাব: ৪৫০ kVAR প্যানেলের মোট খরচ = $৩০,৬০০। বার্ষিক মোট সাশ্রয় = $৬১,৮৩৬। সম্পূর্ণ বিনিয়োগ উঠে আসার সময়কাল (Payback) = মাত্র ৫.৯ মাস (IRR ২০২%)!'
  },
  formulas: [
    {
      id: 'f-capstone-qc-calc',
      symbol: 'Q_c',
      expression: 'Q_c = P \\cdot \\left[\\tan\\left(\\arccos(PF_1)\\right) - \\tan\\left(\\arccos(PF_2)\\right)\\right]',
      title: {
        en: 'Total Required Reactive Compensation (kVAR)',
        hi: 'कुल आवश्यक रिएक्टिव क्षतिपूर्ति (kVAR)',
        bn: 'মোট প্রয়োজনীয় রিঅ্যাক্টিভ ক্ষতিপূরণ (kVAR)'
      },
      description: {
        en: 'Calculates the net three-phase capacitive reactive power required to elevate active load P from initial power factor PF1 to target power factor PF2.',
        hi: 'सक्रिय लोड P को प्रारंभिक PF1 से लक्षित PF2 तक बढ़ाने के लिए आवश्यक तीन-फेज कैपेसिटिव रिएक्टिव पावर की गणना करता है।',
        bn: 'সক্রিয় লোড P কে প্রাথমিক PF1 থেকে টার্গেট PF2 তে উন্নীত করতে প্রয়োজনীয় তিন-ফেজ ক্যাপাসিটিভ রিঅ্যাক্টিভ পাওয়ার নির্ণয় করে।'
      },
      variables: [
        { symbol: 'Q_c', name: { en: 'Required capacitive compensation (kVAR)', hi: 'आवश्यक कैपेसिटिव पावर (kVAR)', bn: 'প্রয়োজনীয় ক্যাপাসিটিভ শক্তি (kVAR)' } },
        { symbol: 'P', name: { en: 'Factory operating active load (kW)', hi: 'सक्रिय भार (kW)', bn: 'কারখানার সক্রিয় লোড (kW)' } },
        { symbol: 'PF_1', name: { en: 'Uncompensated power factor', hi: 'प्रारंभिक पावर फैक्टर', bn: 'প্রাথমিক পাওয়ার ফ্যাক্টর' } },
        { symbol: 'PF_2', name: { en: 'Target power factor', hi: 'लक्षित पावर फैक्टर', bn: 'টার্গেট পাওয়ার ফ্যাক্টর' } }
      ]
    },
    {
      id: 'f-capstone-resonant-order',
      symbol: 'h_{\\text{res}}',
      expression: 'h_{\\text{res}} = \\sqrt{\\frac{S_{\\text{sc}}}{Q_c}} = \\sqrt{\\frac{S_{\\text{trafo}}}{(\\%Z / 100) \\times Q_c}}',
      title: {
        en: 'Parallel Resonant Harmonic Order',
        hi: 'समानांतर रेजोनेंट हार्मोनिक ऑर्डर',
        bn: 'প্যারালাল রেজোন্যান্ট হারমোনিক অর্ডার সমীকরণ'
      },
      description: {
        en: 'Determines the natural harmonic frequency order at which the supply transformer leakage inductance forms an anti-resonant tank circuit with the shunt capacitor bank.',
        hi: 'उस प्राकृतिक हार्मोनिक आवृत्ति क्रम को निर्धारित करता है जिस पर ट्रांसफार्मर इंडक्टेंस और कैपेसिटर बैंक समानांतर रेजोनेंस बनाते हैं।',
        bn: 'যে নির্দিষ্ট হারমোনিক অর্ডারে ট্রান্সফরমার লিকেজ ইন্ডাকট্যান্স ও শান্ট ক্যাপাসিটর প্যারালাল রেজোন্যান্স তৈরি করে তা নির্ণয় করে।'
      },
      variables: [
        { symbol: 'h_{\\text{res}}', name: { en: 'Resonant harmonic order (h)', hi: 'रेजोनेंट हार्मोनिक ऑर्डर', bn: 'রেজোন্যান্ট হারমোনিক অর্ডার' } },
        { symbol: 'S_{\\text{sc}}', name: { en: 'Substation short-circuit MVA (or kVA)', hi: 'शॉर्ट-सर्किट क्षमता', bn: 'সাবস্টেশনের শর্ট সার্কিট kVA' } },
        { symbol: 'Q_c', name: { en: 'Connected capacitor bank rating (kVAR)', hi: 'कैपेसिटर बैंक क्षमता (kVAR)', bn: 'যুক্ত ক্যাপাসিটর ব্যাংকের মান (kVAR)' } }
      ]
    },
    {
      id: 'f-capstone-capacitor-voltage-boost',
      symbol: 'V_{\\text{cap}}',
      expression: 'V_{\\text{cap}} = \\frac{V_{\\text{bus}}}{1 - p}',
      title: {
        en: 'Capacitor Voltage Rise in Detuned LC Branch',
        hi: 'डिट्यून्ड LC शाखा में कैपेसिटर वोल्टेज वृद्धि',
        bn: 'ডিটিউন্ড LC শাখায় ক্যাপাসিটরের ভোল্টেজ বৃদ্ধি'
      },
      description: {
        en: 'Calculates the fundamental frequency voltage elevation experienced across capacitor terminals due to the series detuned reactor reactance factor p (e.g., p = 0.07 for a 7% reactor).',
        hi: 'सीरीज डिट्यून्ड रिएक्टर (p = 0.07) के कारण कैपेसिटर टर्मिनलों पर उत्पन्न फंडामेंटल वोल्टेज वृद्धि की गणना करता है।',
        bn: 'সিরিজ ডিটিউন্ড রিঅ্যাক্টরের (p = ০.০৭) উপস্থিতির কারণে ক্যাপাসিটর টার্মিনালে যে ফান্ডামেন্টাল ভোল্টেজ বৃদ্ধি পায় তা হিসাব করে।'
      },
      variables: [
        { symbol: 'V_{\\text{cap}}', name: { en: 'Operating voltage across capacitor cells (V)', hi: 'कैपेसिटर टर्मिनलों पर वोल्टेज (V)', bn: 'ক্যাপাসিটর টার্মিনালের অপারেটিং ভোল্টেজ (V)' } },
        { symbol: 'V_{\\text{bus}}', name: { en: 'Nominal busbar voltage (V)', hi: 'बसबार वोल्टेज (V)', bn: 'বাসবার ভোল্টেজ (V)' } },
        { symbol: 'p', name: { en: 'Detuning reactor factor (0.07 for 7%, 0.14 for 14%)', hi: 'रिएक्टर फैक्टर', bn: 'রিঅ্যাক্টর ডিটিউনিং ফ্যাক্টর' } }
      ]
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch13-l10-01',
      title: {
        en: 'Example 1: Complete Substation PFC & Detuned Filter Engineering',
        hi: 'उदाहरण 1: संपूर्ण सबस्टेशन PFC एवं डिट्यून्ड फिल्टर इंजीनियरिंग',
        bn: 'উদাহরণ ১: সম্পূর্ণ সাবস্টেশন PFC ও ডিটিউন্ড ফিল্টার ইঞ্জিনিয়ারিং'
      },
      problem: {
        en: 'A manufacturing plant is supplied by a 1,500 kVA, 11 kV / 415 V transformer with %Z = 6.0%. The plant operates at P = 950 kW with an initial power factor of PF_1 = 0.74 lagging. The plant runs variable speed drives and arc welding equipment causing 22% THD_I. (a) Calculate the required capacitor bank kVAR to attain PF_2 = 0.98 lagging. (b) Determine the natural resonant harmonic order h_res if an un-detuned bank is installed. (c) Select an appropriate series detuned reactor percentage p and state its tuning frequency. (d) Calculate the minimum rated voltage required for the capacitor cells when accounting for a 10% grid overvoltage.',
        hi: 'एक विनिर्माण संयंत्र 1,500 kVA, 11 kV / 415 V ट्रांसफार्मर (%Z = 6.0%) द्वारा संचालित है। संयंत्र P = 950 kW भार 0.74 लैगिंग पावर फैक्टर पर चलाता है। संयंत्र में वेल्डिंग और VFD लोड हैं जो 22% THD_I उत्पन्न करते हैं। (a) 0.98 PF प्राप्त करने हेतु आवश्यक kVAR की गणना करें। (b) बिना रिएक्टर के प्राकृतिक रेजोनेंट ऑर्डर h_res ज्ञात करें। (c) उपयुक्त डिट्यून्ड रिएक्टर प्रतिशत p और इसकी ट्यूनिंग आवृत्ति चुनें। (d) 10% ग्रिड ओवरवोल्टेज को ध्यान में रखते हुए कैपेसिटर सेल हेतु न्यूनतम वोल्टेज रेटिंग ज्ञात करें।',
        bn: 'একটি কারখানা ১,৫০০ kVA, ১১ kV / ৪১৫ V ট্রান্সফরমার (%Z = ৬.০%) দ্বারা চালিত। কারখানাটির সক্রিয় লোড P = ৯৫০ kW এবং প্রারম্ভিক PF_১ = ০.৭৪ ল্যাগিং। প্ল্যান্টে VFD ও ওয়েল্ডিং লোডের কারণে ২২% THD_I তৈরি হয়। (a) PF_২ = ০.৯৮ ল্যাগিং পেতে প্রয়োজনীয় ক্যাপাসিটর kVAR নির্ণয় করুন। (b) আন-ডিটিউন্ড ব্যাংকের ক্ষেত্রে প্যারালাল রেজোন্যান্ট হারমোনিক অর্ডার h_res বের করুন। (c) উপযুক্ত সিরিজ ডিটিউন্ড রিঅ্যাক্টর শতাংশ p এবং এর টিউনিং ফ্রিকোয়েন্সি নির্বাচন করুন। (d) ১০% গ্রিড ওভারভোল্টেজ বিবেচনা করে ক্যাপাসিটরের ন্যূনতম অনুমোদিত ভোল্টেজ রেটিং হিসাব করুন।'
      },
      solution: {
        en: 'Step 1: Calculate required compensation kVAR:\n  θ₁ = arccos(0.74) = 42.27° ➔ tan(θ₁) = 0.9089\n  θ₂ = arccos(0.98) = 11.48° ➔ tan(θ₂) = 0.2031\n  Q_c = P · [tan(θ₁) - tan(θ₂)] = 950 · [0.9089 - 0.2031] = 950 · 0.7058 = 670.5 kVAR.\n  Round to a modular 650 kVAR or 700 kVAR APFC bank (e.g., 14 steps of 50 kVAR = 700 kVAR).\n\nStep 2: Calculate short-circuit capacity and natural resonance:\n  S_sc = S_tx / (%Z / 100) = 1,500 kVA / 0.06 = 25,000 kVA = 25 MVA.\n  h_res = √(S_sc / Q_c) = √(25,000 / 700) = √35.71 = 5.98 ≈ 6.0.\n  * EXTREME HAZARD: h_res = 5.98 sits right between the 5th (250 Hz) and 7th (350 Hz) harmonics! As stages cycle between 500 kVAR and 700 kVAR, h_res swings directly across the 5th and 7th harmonics, triggering explosive parallel resonance!\n\nStep 3: Detuned Reactor Selection:\n  Specify 7% series detuned reactors (p = 0.07):\n  Tuning frequency: f_res = 50 Hz / √0.07 = 50 / 0.2646 = 189 Hz (h = 3.78).\n  At all harmonic frequencies (250 Hz, 350 Hz, etc.), the combination acts INDUCTIVELY, making resonance mathematically impossible.\n\nStep 4: Capacitor Voltage Rating Specification:\n  Nominal bus voltage with 10% grid overvoltage: V_bus_max = 415 V · 1.10 = 456.5 V.\n  Voltage boost across capacitor: V_cap = V_bus_max / (1 - 0.07) = 456.5 / 0.93 = 490.9 V.\n  Select standard industrial 525V heavy-duty metallized polypropylene capacitors (provides safe insulation margin above 490.9V).',
        hi: 'चरण 1: आवश्यक kVAR: Q_c = 950 · (tan 42.27° - tan 11.48°) = 950 · (0.9089 - 0.2031) = 670.5 kVAR। 700 kVAR APFC बैंक चुनें (14 x 50 kVAR)।\n\nचरण 2: रेजोनेंस जांच: S_sc = 1500 / 0.06 = 25,000 kVA।\nh_res = √(25,000 / 700) = 5.98 (लगभग 6ठा)। यह 5वें और 7वें हार्मोनिक्स के ठीक बीच में है और खतरनाक रेजोनेंस पैदा करेगा!\n\nचरण 3: रिएक्टर चयन: 7% सीरीज डिट्यून्ड रिएक्टर (p = 0.07) चुनें। ट्यूनिंग आवृत्ति = 50 / √0.07 = 189 Hz। यह हार्मोनिक्स के लिए बैंक को इंडक्टिव बनाता है।\n\nचरण 4: वोल्टेज रेटिंग: 10% ओवरवोल्टेज पर V_bus = 456.5V। कैपेसिटर वोल्टेज = 456.5 / (1 - 0.07) = 490.9V। अतः 525V रेटेड हैवी-ड्यूटी कैपेसिटर अनिवार्य हैं।',
        bn: 'ধাপ ১: প্রয়োজনীয় kVAR: Q_c = ৯৫০ · (tan ৪২.২৭° - tan ১১.৪৮°) = ৯৫০ · (০.৯০৮৯ - ০.২০৩১) = ৬৭০.৫ kVAR। মানক ৭০০ kVAR APFC ব্যাংক নির্বাচন করুন (১৪ x ৫০ kVAR)।\n\nধাপ ২: রেজোন্যান্স হিসাব: S_sc = ১,৫০০ / ০.০৬ = ২৫,০০০ kVA।\nh_res = √(২৫,০০০ / ৭০০) = ৫.৯৮। এটি ৫ম ও ৭ম হারমোনিকের অতি নিকটে, ফলে সাধারণ ক্যাপাসিটর বিস্ফোরণ ঘটাবে!\n\nধাপ ৩: ডিটিউন্ড রিঅ্যাক্টর: ৭% সিরিজ ডিটিউন্ড রিঅ্যাক্টর (p = ০.০৭) নির্বাচন করুন। টিউনিং ফ্রিকোয়েন্সি = ১৮৯ Hz। এটি হারমোনিক্সের জন্য ব্যাংককে সম্পূর্ণ ইনডাক্টিভ করে তোলে।\n\nধাপ ৪: ভোল্টেজ রেটিং: ১০% ওভারভোল্টেজে V_bus = ৪৫৬.৫V। ক্যাপাসিটর ভোল্টেজ = ৪৫৬.৫ / (১ - ০.০৭) = ৪৯০.৯V। তাই ৫২৫V রেটিংযুক্ত ক্যাপাসিটর ব্যবহার আবশ্যক।'
      }
    },
    {
      id: 'ex-ch13-l10-02',
      title: {
        en: 'Example 2: Substation Capacity Release, Current Reduction & Financial ROI',
        hi: 'उदाहरण 2: सबस्टेशन क्षमता मुक्ति, करंट में कमी एवं वित्तीय ROI',
        bn: 'উদাহরণ ২: সাবস্টেশন সক্ষমতা অবমুক্তকরণ, কারেন্ট হ্রাস ও আর্থিক ROI'
      },
      problem: {
        en: 'Refer to Example 1 with P = 950 kW, initially at PF_1 = 0.74 corrected to PF_2 = 0.98 on the 1,500 kVA, 415V substation transformer. (a) Calculate the transformer loading before and after compensation, and the liberated active capacity ΔP. (b) Calculate the primary line current reduction in Amperes. (c) The electric utility charges $15/kVA/month demand charge and imposes a $3,200/month PF penalty for running below 0.90 PF. If the installed 700 kVAR 7% detuned APFC system costs $44,000, calculate the annual savings and Simple Payback Period in months.',
        hi: 'उदाहरण 1 का संदर्भ लें जहाँ 1,500 kVA, 415V ट्रांसफार्मर पर P = 950 kW भार PF 0.74 से सुधारकर 0.98 किया गया है। (a) सुधार से पहले और बाद में ट्रांसफार्मर लोडिंग तथा मुक्त सक्रिय क्षमता ΔP ज्ञात करें। (b) लाइन करंट में एम्पीयर में कमी ज्ञात करें। (c) बिजली कंपनी $15/kVA/माह मांग शुल्क और 0.90 से नीचे रहने पर $3,200/माह जुर्माना लगाती है। यदि 700 kVAR 7% डिट्यून्ड APFC की कुल लागत $44,000 है, तो वार्षिक बचत और महीनों में पेबैक अवधि ज्ञात करें।',
        bn: 'উদাহরণ ১-এর রেফারেন্সে ১,৫০০ kVA, ৪১৫V ট্রান্সফরমারে ৯৫০ kW লোডের PF ০.৭৪ থেকে ০.৯৮ এ উন্নীত করা হলো। (a) ক্ষতিপূরণের আগে ও পরে ট্রান্সফরমার লোডিং এবং মুক্ত সক্রিয় ক্ষমতা ΔP নির্ণয় করুন। (b) লাইন কারেন্ট হ্রাস (Amperes) কত হবে? (c) বিদ্যুৎ সংস্থা প্রতি kVA ডিমান্ডে $১৫/মাস চার্জ করে এবং ০.৯০-এর নিচে PF থাকার কারণে প্রতি মাসে $৩,২০০ জরিমানা নেয়। ৭০০ kVAR ৭% ডিটিউন্ড APFC সিস্টেমের মোট খরচ $৪৪,০০০ হলে বার্ষিক মোট সাশ্রয় ও পেব্যাক পিরিয়ড (মাসে) হিসাব করুন।'
      },
      solution: {
        en: 'Step 1: Transformer loading analysis:\n  Initial demand: S₁ = 950 / 0.74 = 1,283.8 kVA (85.6% loading).\n  Corrected demand: S₂ = 950 / 0.98 = 969.4 kVA (64.6% loading).\n  Demand reduction: ΔS = 1,283.8 - 969.4 = 314.4 kVA.\n  Released active power headroom: ΔP = 314.4 · 0.98 = 308.1 kW of new factory machinery can be connected!\n\nStep 2: Current reduction:\n  I₁ = 1,283,800 / (√3 · 415) = 1,283,800 / 718.8 = 1,786.0 A.\n  I₂ = 969,400 / (√3 · 415) = 969,400 / 718.8 = 1,348.6 A.\n  Current reduction = 1,786.0 - 1,348.6 = 437.4 A reduction (-24.5% less line current).\n\nStep 3: Economic savings & Payback Period:\n  Monthly demand savings = 314.4 kVA · $15/kVA = $4,716.00 / month.\n  Monthly penalty eliminated = $3,200.00 / month.\n  Total monthly savings = $4,716.00 + $3,200.00 = $7,916.00 / month.\n  Annual savings = $7,916 · 12 = $94,992 / year.\n\nStep 4: Simple Payback Period:\n  SPP = CapEx / Monthly Savings = $44,000 / $7,916 = 5.56 months!\n  The entire heavy-duty detuned APFC installation pays for itself in just five and a half months!',
        hi: 'चरण 1: ट्रांसफार्मर लोडिंग: S₁ = 950 / 0.74 = 1,283.8 kVA (85.6%); S₂ = 950 / 0.98 = 969.4 kVA (64.6%)। मांग में कमी = 314.4 kVA। मुक्त सक्रिय क्षमता ΔP = 308 kW!\n\nचरण 2: करंट में कमी: I₁ = 1,786.0 A; I₂ = 1,348.6 A। करंट में 437.4 A (-24.5%) की भारी कमी।\n\nचरण 3: आर्थिक बचत: मांग बचत = 314.4 · $15 = $4,716/माह। समाप्त जुर्माना = $3,200/माह। कुल मासिक बचत = $7,916 प्रति माह ($94,992/वर्ष)।\n\nचरण 4: पेबैक अवधि = $44,000 / $7,916 = 5.56 महीने (साढ़े 5 महीने)!',
        bn: 'ধাপ ১: ট্রান্সফরমার লোডিং: S₁ = ১,২৮৩.৮ kVA (৮৫.৬%); S₂ = ৯৬৯.৪ kVA (৬৪.৬%)। ডিমান্ড হ্রাস = ৩১৪.৪ kVA। মুক্ত সক্রিয় ক্ষমতা ΔP = ৩০৮.১ kW!\n\nধাপ ২: কারেন্ট হ্রাস: I₁ = ১,৭৮৬.০ A; I₂ = ১,৩৪৮.৬ A। কারেন্ট হ্রাস = ৪৩৭.৪ A (-২৪.৫%)।\n\nধাপ ৩: আর্থিক সাশ্রয়: ডিমান্ড সাশ্রয় = ৩১৪.৪ · $১৫ = $৪,৭১৬/মাস। পরিহারকৃত জরিমানা = $৩,২০০/মাস। মোট মাসিক সাশ্রয় = $৭,৯১৬ প্রতি মাসে (বছরে $৯৪,৯৯২)।\n\nধাপ ৪: পেব্যাক সময়কাল = $৪৪,০০০ / $৭,৯১৬ = ৫.৫৬ মাস (মাত্র সাড়ে পাঁচ মাসে সম্পূর্ণ বিনিয়োগ উঠে আসে)!'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Turnkey Industrial Electrical Infrastructure Modernization: Combining harmonic power quality logging, 7% detuned capacitor engineering, and automated microprocessor control eliminates utility demand penalties, complies with IEEE 519, and expands factory floor machinery without constructing new substations.',
      'Greenhouse Gas & Carbon Footprint Reduction: Localized PFC mitigates upstream utility transmission I²R losses, eliminating fossil fuel burning at power generation stations and qualifying industrial facilities for ISO 50001 energy certification.'
    ],
    hi: [
      'टर्नकी औद्योगिक विद्युत अवसंरचना आधुनिकीकरण: हार्मोनिक पावर क्वालिटी ऑडिट, 7% डिट्यून्ड कैपेसिटर इंजीनियरिंग और स्वचालित माइक्रोप्रोसेसर नियंत्रण को जोड़कर, प्लांट मैनेजर यूटिलिटी पेनल्टी समाप्त करते हैं, IEEE 519 का अनुपालन करते हैं और बिना नया सबस्टेशन बनाए फैक्ट्री का विस्तार करते हैं।',
      'ग्रीनहाउस गैस एवं कार्बन फुटप्रिंट में कमी: स्थानीय PFC ग्रिड ट्रांसमिशन में होने वाली I²R हानियों को कम करता है, जिससे बिजली उत्पादन केंद्रों पर कोयला व गैस की खपत घटती है और उद्योगों को ISO 50001 ऊर्जा प्रमाणन प्राप्त होता है।'
    ],
    bn: [
      'টার্নকি শিল্প বৈদ্যুতিক অবকাঠামো আধুনিকীকরণ: হারমোনিক নিরীক্ষা, ৭% ডিটিউন্ড ক্যাপাসিটর ইঞ্জিনিয়ারিং ও মাইক্রোপ্রসেসর নিয়ন্ত্রণের সমন্বয়ে শিল্প ব্যবস্থাপকরা ইউটিলিটি জরিমানা দূর করেন, IEEE 519 মানক অর্জন করেন এবং নতুন সাবস্টেশন না বানিয়েই কারখানার উৎপাদন বৃদ্ধি করেন।',
      'গ্রিনহাউস গ্যাস ও কার্বন ফুটপ্রিন্ট হ্রাস: স্থানীয় PFC গ্রিড লাইনে রিঅ্যাক্টিভ কারেন্ট হ্রাস করে বিদ্যুৎ কেন্দ্রগুলোর জ্বালানি অপচয় বাঁচায় এবং শিল্প প্রতিষ্ঠানকে ISO 50001 শক্তি দক্ষতা সনদ অর্জনে সহায়তা করে।'
    ]
  },
  importantPoints: {
    en: [
      'In modern industrial networks containing >15% nonlinear load, NEVER install bare (un-detuned) capacitor banks. Series detuned reactors (7% or 14%) are non-negotiable to prevent harmonic resonance.',
      'Capacitor cell rated voltage MUST be upgraded to 480V or 525V on 415V systems when series reactors are fitted, to safely withstand fundamental inductive voltage rise (V_cap = V_bus / (1 - p)).',
      'Organizing APFC stages in modular steps (e.g. 25 kVAR trim steps + 50 kVAR power stages) prevents overcompensation during light loads and eliminates contactor hunting.'
    ],
    hi: [
      '>15% नॉन-लीनियर लोड वाले आधुनिक उद्योगों में बिना रिएक्टर वाले बेयर कैपेसिटर कभी न लगाएं। रेजोनेंस रोकने के लिए 7% या 14% सीरीज डिट्यून्ड रिएक्टर अनिवार्य हैं।',
      'सीरीज रिएक्टर लगाने पर इंडक्टिव वोल्टेज वृद्धि को सुरक्षित रूप से सहन करने हेतु 415V सिस्टम पर कैपेसिटर वोल्टेज को 480V या 525V तक अपग्रेड करना अनिवार्य है।',
      'APFC को मॉड्यूलर स्टेप्स (जैसे 25 kVAR ट्रिम स्टेप्स + 50 kVAR पावर स्टेप्स) में व्यवस्थित करने से हल्के लोड पर ओवरकंपेंसेशन रुकता है और हंटिंग समाप्त होती है।'
    ],
    bn: [
      '>১৫% নন-লিনিয়ার লোডযুক্ত আধুনিক শিল্পে কখনোই সাধারণ (আন-ডিটিউন্ড) ক্যাপাসিটর ব্যাংক স্থাপন করবেন না। হারমোনিক রেজোন্যান্স রোধে ৭% বা ১৪% ডিটিউন্ড রিঅ্যাক্টর অপরিহার্য।',
      'সিরিজ রিঅ্যাক্টর যুক্ত থাকলে ফান্ডামেন্টাল ভোল্টেজ বৃদ্ধি নিরাপদে সহ্য করতে ৪১৫V সিস্টেমে ক্যাপাসিটর রেটিং অবশ্যই ৪৮০V বা ৫২৫V-এ উন্নীত করতে হবে।',
      'APFC ধাপগুলোকে মডুলার আকারে (যেমন ২৫ kVAR ট্রিম ধাপ + ৫০ kVAR প্রধান ধাপ) সাজালে হালকা লোডে ওভারকম্পেনসেশন রোধ হয় এবং হান্টিং দূর হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Specifying standard 415V rated capacitors when installing a 7% series detuned reactor on a 415V bus. The reactor boosts terminal voltage to ~446V, causing premature dielectric breakdown.',
      'Failing to verify the short-circuit resonant frequency order h_res = √(S_sc / Q_c), leading to unanticipated harmonic current amplification at the 5th or 7th harmonic.'
    ],
    hi: [
      '415V बस पर 7% डिट्यून्ड रिएक्टर के साथ मानक 415V कैपेसिटर लगाना। रिएक्टर वोल्टेज को ~446V तक बढ़ा देता है जिससे कैपेसिटर जल्दी खराब हो जाते हैं।',
      'शॉर्ट-सर्किट रेजोनेंट आवृत्ति h_res की जांच न करना, जिससे 5वें या 7वें हार्मोनिक पर अप्रत्याशित करंट प्रवर्धन और विस्फोट हो सकता है।'
    ],
    bn: [
      '৪১৫V বাসবারে ৭% ডিটিউন্ড রিঅ্যাক্টরের সাথে সাধারণ ৪১৫V ক্যাপাসিটর ব্যবহার করা। রিঅ্যাক্টর ভোল্টেজকে ~৪৪৬V-এ বাড়িয়ে দেয় ফলে ক্যাপাসিটর দ্রুত পুড়ে নষ্ট হয়।',
      'শর্ট সার্কিট রেজোন্যান্ট ফ্রিকোয়েন্সি h_res যাচাই না করা, যার ফলে ৫ম বা ৭ম হারমোনিকে মারাত্মক রেজোন্যান্স ও যন্ত্রপাতির ক্ষতি হয়।'
    ]
  },
  keyTakeaways: {
    en: [
      'A professionally engineered APFC installation achieves power factor of 0.98 lagging, frees 20% to 30% substation capacity, suppresses harmonics, and recovers capital investment within 6 to 12 months.',
      'Power factor engineering successfully bridges rigorous physics (electromagnetic resonance, phase displacement) with corporate profitability and environmental sustainability.'
    ],
    hi: [
      'एक पेशेवर रूप से डिजाइन किया गया APFC सिस्टम 0.98 लैगिंग PF प्राप्त करता है, 20% से 30% सबस्टेशन क्षमता मुक्त करता है, हार्मोनिक्स को रोकता है और 6 से 12 महीनों में लागत वसूल करता है।',
      'पावर फैक्टर इंजीनियरिंग भौतिक विज्ञान (इलेक्ट्रोमैग्नेटिक रेजोनेंस, फेज विस्थापन) को कॉर्पोरेट मुनाफे और पर्यावरणीय स्थिरता के साथ सफलतापूर्वक जोड़ती है।',
    ],
    bn: [
      'সঠিক ইঞ্জিনিয়ারিংয়ে তৈরি APFC সিস্টেম ০.৯৮ ল্যাগিং PF নিশ্চিত করে, ২০% থেকে ৩০% সাবস্টেশন ক্ষমতা মুক্ত করে, হারমোনিক্স নিয়ন্ত্রণ করে এবং মাত্র ৬ থেকে ১২ মাসে বিনিয়োগ তুলে আনে।',
      'পাওয়ার ফ্যাক্টর ইঞ্জিনিয়ারিং বিশুদ্ধ পদার্থবিজ্ঞানকে কর্পোরেট ব্যবসায়িক লাভ ও পরিবেশবান্ধব জ্বালানি দক্ষতার সাথে নিখুঁতভাবে যুক্ত করে।'
    ]
  },
  practiceQuestions: [
    {
      id: 'pq-ch13-l10-01',
      question: {
        en: 'A plant has a 2,000 kVA transformer with %Z = 5.0%. If an un-detuned 600 kVAR capacitor bank is energized, what is the parallel resonant harmonic order h_res? Is it hazardous?',
        hi: 'एक संयंत्र में 2,000 kVA ट्रांसफार्मर (%Z = 5.0%) है। यदि 600 kVAR का बिना रिएक्टर वाला कैपेसिटर बैंक चालू किया जाए, तो रेजोनेंट हार्मोनिक ऑर्डर h_res क्या होगा? क्या यह खतरनाक है?',
        bn: 'একটি কারখানায় ২,০০০ kVA ট্রান্সফরমার (%Z = ৫.০%) আছে। ৬০০ kVAR আন-ডিটিউন্ড ক্যাপাসিটর ব্যাংক চালু করলে প্যারালাল রেজোন্যান্ট হারমোনিক অর্ডার h_res কত হবে? এটি কি বিপজ্জনক?'
      },
      hint: {
        en: 'S_sc = 2,000 / 0.05 = 40,000 kVA. h_res = √(40,000 / 600) = √66.67 = 8.16. While 8.16 is above the 7th harmonic, as stages switch down to 400 kVAR (h_res = 10) and intermediate steps, resonance risks persist. A detuned reactor is strongly recommended for nonlinear loads.',
        hi: 'S_sc = 40,000 kVA; h_res = √(40,000 / 600) = 8.16। हालांकि यह 7वें से ऊपर है, लेकिन स्टेप्स कम होने पर रेजोनेंस का खतरा बना रहता है। डिट्यून्ड रिएक्टर लगाना आवश्यक है।',
        bn: 'S_sc = ৪০,০০০ kVA; h_res = √(৪০,০০০ / ৬০০) = ৮.১৬। এটি ৭ম হারমোনিকের ওপরে হলেও ধাপ কমানোর সময় রেজোন্যান্সের ঝুঁকি তৈরি হয়। ডিটিউন্ড রিঅ্যাক্টর ব্যবহার অপরিহার্য।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch13-l10-01',
      question: {
        en: 'In an industrial facility with 30% nonlinear loads (VFDs, rectifiers), why is a 7% series detuned reactor (tuning frequency 189 Hz) preferred over a standard un-detuned capacitor bank?',
        hi: '30% नॉन-लीनियर लोड (VFD, रेक्टिफायर) वाले उद्योग में, बिना रिएक्टर वाले कैपेसिटर की तुलना में 7% सीरीज डिट्यून्ड रिएक्टर (189 Hz ट्यूनिंग) को प्राथमिकता क्यों दी जाती है?',
        bn: '৩০% নন-লিনিয়ার লোডযুক্ত (VFD, রেকটিফায়ার) শিল্পে সাধারণ ক্যাপাসিটরের চেয়ে ৭% সিরিজ ডিটিউন্ড রিঅ্যাক্টর (১৮৯ Hz টিউনিং) কেন অধিক গ্রহণযোগ্য?'
      },
      options: [
        { en: 'It places the LC resonant frequency at 189 Hz (below the 5th harmonic of 250 Hz), ensuring the branch behaves inductively for all harmonic frequencies and preventing catastrophic resonance', hi: 'यह रेजोनेंट आवृत्ति को 189 Hz (5वें हार्मोनिक 250 Hz से नीचे) रखता है, जिससे बैंक सभी हार्मोनिक्स के लिए इंडक्टिव बन जाता है और रेजोनेंस रुकता है', bn: 'এটি রেজোন্যান্ট ফ্রিকোয়েন্সিকে ১৮৯ Hz-এ (৫ম হারমোনিক ২৫০ Hz এর নিচে) রাখে, যার ফলে ব্রাঞ্চটি সমস্ত হারমোনিক্সে ইনডাক্টিভ থাকে এবং ক্ষতিকর রেজোন্যান্স প্রতিরোধ করে' },
        { en: 'It converts the APFC panel into an FM radio antenna to broadcast factory announcements', hi: 'यह APFC पैनल को FM रेडियो एंटीना में बदल देता है', bn: 'এটি প্যানেলকে এফএম রেডিও অ্যান্টেনায় রূপান্তর করে' },
        { en: 'It completely eliminates the need for a substation transformer', hi: 'यह सबस्टेशन ट्रांसफार्मर की आवश्यकता को पूरी तरह से समाप्त कर देता है', bn: 'এটি সাবস্টেশন ট্রান্সফরমারের প্রয়োজনীয়তা সম্পূর্ণ দূর করে' },
        { en: 'It causes the system voltage to drop to 0 volts during night hours', hi: 'यह रात के समय सिस्टम वोल्टेज को 0 वोल्ट कर देता है', bn: 'এটি রাতের বেলা সিস্টেম ভোল্টেজকে ০ ভোল্ট করে দেয়' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'A 7% reactor (p = 0.07) tunes the LC series branch to f_res = 50 / √0.07 = 189 Hz. For all harmonic frequencies present (5th = 250 Hz, 7th = 350 Hz, 11th = 550 Hz), the branch reactance is inductive (X_L > X_C), making parallel harmonic amplification physically impossible.',
        hi: '7% रिएक्टर LC शाखा को 189 Hz पर ट्यून करता है। 5वें (250 Hz) और 7वें (350 Hz) हार्मोनिक्स के लिए यह शाखा इंडक्टिव बन जाती है, जिससे समानांतर रेजोनेंस भौतिक रूप से असंभव हो जाता है।',
        bn: '৭% রিঅ্যাক্টর LC শাখাকে ১৮৯ Hz-এ টিউন করে। উপস্থিত সমস্ত হারমোনিক্সের (৫ম = ২৫০ Hz, ৭ম = ৩৫০ Hz) জন্য ব্রাঞ্চটি ইনডাক্টিভ আচরণ করে, ফলে প্যারালাল রেজোন্যান্স ঘটা অসম্ভব হয়।'
      }
    },
    {
      id: 'mcq-ch13-l10-02',
      question: {
        en: 'When a 7% series detuned reactor is connected to a 415V bus, why MUST the capacitor cells be rated for 480V or 525V instead of standard 415V?',
        hi: 'जब 415V बस पर 7% सीरीज डिट्यून्ड रिएक्टर जोड़ा जाता है, तो कैपेसिटर सेल को मानक 415V के बजाय 480V या 525V पर क्यों रेट किया जाना चाहिए?',
        bn: '৪১৫V বাসবারে ৭% সিরিজ ডিটিউন্ড রিঅ্যাক্টর যুক্ত করলে ক্যাপাসিটর সেলকে সাধারণ ৪১৫V-এর বদলে কেন ৪৮০V বা ৫২৫V রেট করা বাধ্যতামূলক?'
      },
      options: [
        { en: 'The series reactor causes a fundamental voltage rise across the capacitor terminals: V_cap = V_bus / (1 - p) = 415 / 0.93 = 446.2V, which exceeds standard 415V limits', hi: 'सीरीज रिएक्टर कैपेसिटर टर्मिनलों पर वोल्टेज को V_cap = 415 / (1 - 0.07) = 446.2V तक बढ़ा देता है, जो मानक 415V सीमा से अधिक है', bn: 'সিরিজ রিঅ্যাক্টরের কারণে ক্যাপাসিটর টার্মিনালে ভোল্টেজ বৃদ্ধি পেয়ে V_cap = ৪১৫ / (১ - ০.০৭) = ৪৪৬.২V হয়, যা সাধারণ ৪১৫V সীমার চেয়ে বেশি' },
        { en: 'Because higher voltage capacitors are physically smaller and fit in lunchboxes', hi: 'क्योंकि उच्च वोल्टेज वाले कैपेसिटर छोटे होते हैं', bn: 'কারণ উচ্চ ভোল্টেজের ক্যাপাসিটর আকারে ছোট হয়' },
        { en: 'Because electric utilities refuse to sell electricity to 415V capacitors', hi: 'क्योंकि बिजली कंपनियां 415V कैपेसिटर को बिजली देने से मना करती हैं', bn: 'কারণ বিদ্যুৎ সংস্থা ৪১৫V ক্যাপাসিটরে বিদ্যুৎ দিতে চায় না' },
        { en: 'To increase the speed of the cooling fans inside the cubicle', hi: 'पैनल के पंखों की गति बढ़ाने के लिए', bn: 'প্যানেলের ফ্যানের গতি বৃদ্ধির জন্য' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'The inductive voltage drop across the reactor opposes the capacitive voltage, elevating the capacitor terminal voltage by 1 / (1 - p). For p = 0.07 on a 415V system, V_cap = 446.2V nominal, and reaches 491V during 10% grid overvoltages, necessitating 480V or 525V rated dielectric.',
        hi: 'रिएक्टर के कारण वोल्टेज बढ़कर V_cap = 415 / (1 - 0.07) = 446.2V हो जाता है, और 10% ग्रिड ओवरवोल्टेज पर यह 491V तक पहुंचता है। इसलिए 480V या 525V रेटिंग आवश्यक है।',
        bn: 'রিঅ্যাক্টরের উপস্থিতিতে ক্যাপাসিটরে ভোল্টেজ বৃদ্ধি পেয়ে ৪৪৬.২V হয় এবং ১০% গ্রিড ওভারভোল্টেজে তা ৪৯১V পর্যন্ত পৌঁছায়। তাই ৪৮০V বা ৫২৫V রেটিং অপরিহার্য।'
      }
    },
    {
      id: 'mcq-ch13-l10-03',
      question: {
        en: 'What is the natural parallel resonant harmonic order h_res for a 1,000 kVA transformer with %Z = 5.0% connected to an un-detuned 400 kVAR capacitor bank?',
        hi: '5.0% प्रतिबाधा वाले 1,000 kVA ट्रांसफार्मर और 400 kVAR के अन-डिट्यून्ड कैपेसिटर बैंक के लिए रेजोनेंट हार्मोनिक ऑर्डर h_res क्या है?',
        bn: '%Z = ৫.০% যুক্ত ১,০০০ kVA ট্রান্সফরমার ও ৪০০ kVAR আন-ডিটিউন্ড ক্যাপাসিটর ব্যাংকের প্যারালাল রেজোন্যান্ট হারমোনিক অর্ডার h_res কত?'
      },
      options: [
        { en: 'h_res = 7.07 (dangerously coincident with the 7th harmonic)', hi: 'h_res = 7.07 (7वें हार्मोनिक के खतरनाक रूप से करीब)', bn: 'h_res = ৭.০৭ (৭ম হারমোনিকের মারাত্মক কাছাকাছি)' },
        { en: 'h_res = 1.00 (fundamental frequency)', hi: 'h_res = 1.00 (मूल आवृत्ति)', bn: 'h_res = ১.০০ (মূল ফ্রিকোয়েন্সি)' },
        { en: 'h_res = 50.0 (high radio frequency)', hi: 'h_res = 50.0 (उच्च आवृत्ति)', bn: 'h_res = ৫০.০ (উচ্চ ফ্রিকোয়েন্সি)' },
        { en: 'h_res = 0.00 (DC resonance)', hi: 'h_res = 0.00 (DC रेजोनेंस)', bn: 'h_res = ০.০০ (ডিসি রেজোন্যান্স)' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Short-circuit kVA: S_sc = 1,000 / 0.05 = 20,000 kVA. Resonant order: h_res = √(S_sc / Q_c) = √(20,000 / 400) = √50 = 7.07. This is directly at the 7th harmonic (350 Hz), guaranteeing severe harmonic current amplification and capacitor damage without detuned reactors.',
        hi: 'S_sc = 1000 / 0.05 = 20,000 kVA। h_res = √(20,000 / 400) = √50 = 7.07। यह सीधे 7वें हार्मोनिक पर है और बिना रिएक्टर के भारी नुकसान करेगा।',
        bn: 'S_sc = ১০০০ / ০.০৫ = ২০,০০০ kVA। h_res = √(২০,০০০ / ৪০০) = √৫০ = ৭.০৭। এটি হুবহু ৭ম হারমোনিকের সাথে মিলে যায়, ফলে রিঅ্যাক্টর ছাড়া ক্যাপাসিটর মারাত্মক ক্ষতিগ্রস্ত হবে।'
      }
    },
    {
      id: 'mcq-ch13-l10-04',
      question: {
        en: 'A manufacturing facility with active load P = 800 kW improves power factor from 0.72 to 0.98. By how much is the billed apparent maximum demand (kVA) reduced?',
        hi: '800 kW सक्रिय भार वाला एक विनिर्माण संयंत्र पावर फैक्टर को 0.72 से 0.98 तक सुधारता है। बिल योग्य अधिकतम मांग (kVA) में कितनी कमी आएगी?',
        bn: '৮০০ kW সক্রিয় লোডের একটি শিল্প কারখানা পাওয়ার ফ্যাক্টর ০.৭২ থেকে ০.৯৮ এ উন্নীত করল। সর্বোচ্চ বিলিং চাহিদা (kVA) কতটুকু হ্রাস পাবে?'
      },
      options: [
        { en: '294.8 kVA', hi: '294.8 kVA', bn: '২৯৪.৮ kVA' },
        { en: '50.0 kVA', hi: '50.0 kVA', bn: '৫০.০ kVA' },
        { en: '800.0 kVA', hi: '800.0 kVA', bn: '৮০০.০ kVA' },
        { en: '120.5 kVA', hi: '120.5 kVA', bn: '১২০.৫ kVA' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Initial demand: S₁ = 800 / 0.72 = 1,111.1 kVA. Corrected demand: S₂ = 800 / 0.98 = 816.3 kVA. Demand reduction: ΔS = 1,111.1 - 816.3 = 294.8 kVA.',
        hi: 'प्रारंभिक मांग: S₁ = 800 / 0.72 = 1,111.1 kVA। सुधरी मांग: S₂ = 800 / 0.98 = 816.3 kVA। मांग में कमी: ΔS = 1,111.1 - 816.3 = 294.8 kVA।',
        bn: 'প্রাথমিক চাহিদা: S₁ = ৮০০ / ০.৭২ = ১,১১১.১ kVA। সংশোধিত চাহিদা: S₂ = ৮০০ / ০.৯৮ = ৮১৬.৩ kVA। চাহিদা হ্রাস: ΔS = ১,১১১.১ - ৮১৬.৩ = ২৯৪.৮ kVA।'
      }
    },
    {
      id: 'mcq-ch13-l10-05',
      question: {
        en: 'Why is a modular step sequence (e.g., 25 + 25 + 50 + 50 + 50 kVAR) superior to using a single large 200 kVAR capacitor block in an industrial plant?',
        hi: 'एक औद्योगिक संयंत्र में एकल बड़े 200 kVAR ब्लॉक के बजाय मॉड्यूलर स्टेप अनुक्रम (जैसे 25 + 25 + 50 + 50 + 50 kVAR) बेहतर क्यों है?',
        bn: 'শিল্প কারখানায় একটি মাত্র বড় ২০০ kVAR ব্লকের চেয়ে মডুলার স্টেপ বিন্যাস (যেমন ২৫ + ২৫ + ৫০ + ৫০ + ৫০ kVAR) কেন শ্রেয়?'
      },
      options: [
        { en: 'It enables fine-grained tracking of variable factory load cycles, preventing leading PF overcompensation during partial loads while eliminating contactor hunting', hi: 'यह बदलते लोड चक्रों को सूक्ष्मता से ट्रैक करता है, कम लोड पर ओवरकंपेंसेशन रोकता है और हंटिंग समाप्त करता है', bn: 'এটি কারখানার পরিবর্তনশীল লোড নিখুঁতভাবে ট্র্যাক করতে পারে, হালকা লোডে ওভারকম্পেনসেশন রোধ করে এবং কন্ট্যাক্টর হান্টিং দূর করে' },
        { en: 'Single large capacitor blocks attract more lightning strikes', hi: 'एकल बड़े ब्लॉक बिजली को अधिक आकर्षित करते हैं', bn: 'একক বড় ব্লকে বজ্রপাত বেশি হয়' },
        { en: 'Smaller steps produce higher operating frequencies', hi: 'छोटे स्टेप्स उच्च ऑपरेटिंग आवृत्ति उत्पन्न करते हैं', bn: 'ছোট ধাপগুলো উচ্চ ফ্রিকোয়েন্সি তৈরি করে' },
        { en: 'Modular steps eliminate the need for electrical cables', hi: 'मॉड्यूलर स्टेप्स में केबल की आवश्यकता नहीं होती', bn: 'মডুলার ধাপে তারের প্রয়োজন হয় না' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Industrial loads fluctuate continuously throughout the workday. Small trim steps (25 kVAR) provide precise trimming for light loads, while larger blocks (50 kVAR) handle bulk motor loads, avoiding coarse switching, voltage steps, and overcorrection.',
        hi: 'कारखाने का लोड बदलता रहता है। छोटे 25 kVAR स्टेप हल्के लोड पर सटीक सुधार देते हैं, जबकि 50 kVAR ब्लॉक भारी लोड संभालते हैं, जिससे ओवरकंपेंसेशन नहीं होता।',
        bn: 'কারখানার লোড সারাদিন পরিবর্তিত হয়। ছোট ২৫ kVAR ধাপ হালকা লোডে সূক্ষ্ম টিউনিং দেয় এবং ৫০ kVAR ধাপ বড় লোড সামলায়, ফলে ওভারকম্পেনসেশন হয় না।'
      }
    },
    {
      id: 'mcq-ch13-l10-06',
      question: {
        en: 'An industrial PFC project costing $36,000 saves $3,000 per month in maximum demand charges and $1,500 per month in eliminated low-PF penalties. What is the Simple Payback Period?',
        hi: 'एक औद्योगिक PFC परियोजना जिसकी लागत $36,000 है, मांग शुल्क में $3,000/माह और समाप्त जुर्माने में $1,500/माह बचाती है। पेबैक अवधि क्या है?',
        bn: '$৩৬,০০০ ব্যয়ে বাস্তবায়িত একটি PFC প্রকল্প প্রতি মাসে ডিমান্ড চার্জে $৩,০০০ এবং পরিহারকৃত মাসিক জরিমানায় $১,৫০০ সাশ্রয় করে। প্রকল্পের পেব্যাক পিরিয়ড কত?',
      },
      options: [
        { en: '8.0 months', hi: '8.0 महीने', bn: '৮.০ মাস' },
        { en: '24.0 months', hi: '24.0 महीने', bn: '২৪.০ মাস' },
        { en: '15.0 months', hi: '15.0 महीने', bn: '১৫.০ মাস' },
        { en: '36.0 months', hi: '36.0 महीने', bn: '৩৬.০ মাস' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Total monthly savings = $3,000 + $1,500 = $4,500/month. Simple Payback Period = CapEx / Monthly Savings = $36,000 / $4,500 = 8.0 months.',
        hi: 'कुल मासिक बचत = $3,000 + $1,500 = $4,500 प्रति माह। पेबैक अवधि = $36,000 / $4,500 = 8.0 महीने।',
        bn: 'মোট মাসিক সাশ্রয় = $৩,০০০ + $১,৫০০ = $৪,৫০০ প্রতি মাসে। পেব্যাক সময়কাল = $৩৬,০০০ / $৪,৫০০ = ৮.০ মাস।'
      }
    },
    {
      id: 'mcq-ch13-l10-07',
      question: {
        en: 'According to IEEE 519 and IEC 61921 standards, what is the primary operational metric used to verify that an APFC panel installation does not cause severe harmonic pollution?',
        hi: 'IEEE 519 और IEC 61921 मानकों के अनुसार, यह सत्यापित करने के लिए प्राथमिक परिचालन मीट्रिक क्या है कि APFC पैनल अत्यधिक हार्मोनिक प्रदूषण का कारण नहीं बन रहा है?',
        bn: 'IEEE 519 এবং IEC 61921 মানক অনুসারে, APFC প্যানেল ক্ষতিকর হারমোনিক দূষণ ঘটাচ্ছে না তা নিশ্চিত করার প্রাথমিক নির্দেশক কোনটি?'
      },
      options: [
        { en: 'Total Harmonic Distortion of Voltage (THD_V < 5%) and Current (THD_I or TDD compliant with grid ratio limits at the PCC)', hi: 'वोल्टेज टोटल हार्मोनिक डिस्टॉर्शन (THD_V < 5%) और PCC पर करंट ग्रिड सीमा के अनुसार THD_I/TDD', bn: 'ভোল্টেজের মোট হারমোনিক ডিস্টরশন (THD_V < ৫%) এবং PCC-তে কারেন্ট গ্রিড সীমার মধ্যে THD_I বা TDD' },
        { en: 'Color temperature of the indicator pilot lamps on the panel door', hi: 'पैनल के पायलट लैंप का रंग तापमान', bn: 'প্যানেলের ইন্ডিকেটর বাতির রঙের তাপমাত্রা' },
        { en: 'Sound pitch of the main breaker mechanical closing spring', hi: 'मेन ब्रेकर के बंद होने की ध्वनि का पिच', bn: 'মেইন ব্রেকারের স্প্রিং বন্ধ হওয়ার শব্দের মাত্রা' },
        { en: 'Physical weight of the control cabinet in kilograms', hi: 'कैबिनेट का किलोग्राम में कुल वजन', bn: 'ক্যাবিনেটের মোট কিলোগ্রাম ওজন' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'IEEE 519 establishes strict limits on Total Harmonic Distortion (THD_V ≤ 5% for systems ≤ 69 kV) and Total Demand Distortion (TDD) of current at the Point of Common Coupling (PCC) to prevent grid pollution.',
        hi: 'IEEE 519 ग्रिड को विकृति से बचाने के लिए PCC पर वोल्टेज विकृति (THD_V ≤ 5%) और करंट विकृति (TDD) पर सख्त सीमाएं निर्धारित करता है।',
        bn: 'IEEE 519 গ্রিড দূষণ রোধ করতে পয়েন্ট অব কমন কাপলিংয়ে (PCC) ভোল্টেজ ডিস্টরশন (THD_V ≤ ৫%) এবং কারেন্ট ডিস্টরশনের (TDD) কঠোর সীমা নির্ধারণ করে।'
      }
    },
    {
      id: 'mcq-ch13-l10-08',
      question: {
        en: 'What is the ultimate engineering benefit of completing a comprehensive power factor correction capstone project for an industrial enterprise?',
        hi: 'एक औद्योगिक उद्यम के लिए एक व्यापक पावर फैक्टर सुधार कैपस्टोन परियोजना को पूरा करने का अंतिम इंजीनियरिंग लाभ क्या है?',
        bn: 'একটি শিল্প প্রতিষ্ঠানের জন্য পূর্ণাঙ্গ পাওয়ার ফ্যাক্টর সংশোধন ক্যাপস্টোন প্রকল্প সফলভাবে বাস্তবায়নের চূড়ান্ত প্রকৌশলগত সুবিধা কী?'
      },
      options: [
        { en: 'Optimized electrical efficiency: 0.98 lagging PF, eliminated utility penalties, released transformer capacity, reduced cable heating, harmonic immunity, and rapid financial payback (<12 months)', hi: 'अनुकूलित विद्युत दक्षता: 0.98 PF, जुर्माना समाप्ति, ट्रांसफार्मर क्षमता की मुक्ति, केबल हीटिंग में कमी, हार्मोनिक सुरक्षा और तीव्र पेबैक (<12 महीने)', bn: 'অনুকূলতম বৈদ্যুতিক দক্ষতা: ০.৯৮ ল্যাগিং PF, জরিমানা পরিহার, ট্রান্সফরমার ক্ষমতা বৃদ্ধি, তারের তাপমাত্রা হ্রাস, হারমোনিক মুক্ত পরিবেশ এবং দ্রুততম আর্থিক পেব্যাক (<১২ মাস)' },
        { en: 'Complete exemption from all municipal tax laws forever', hi: 'सभी नगरपालिका करों से हमेशा के लिए छूट', bn: 'পৌরসভার সমস্ত কর থেকে চিরতরে মুক্তি' },
        { en: 'Generates free wireless internet for all factory workers', hi: 'सभी कर्मचारियों के लिए मुफ्त वाई-फाई इंटरनेट उत्पन्न करता है', bn: 'কারখানার সকল কর্মীর জন্য ফ্রি ওয়াই-ফাই তৈরি করে' },
        { en: 'Eliminates the need for lubricants in mechanical gearboxes', hi: 'गियरबॉक्स में लुब्रिकेंट की आवश्यकता को समाप्त करता है', bn: 'মেকানিক্যাল গিয়ারবক্সে তেলের প্রয়োজনীয়তা দূর করে' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Comprehensive PFC integrates physics and financial engineering: achieving high operating power factor, protecting assets against harmonic resonance, liberating existing substation capacity for production growth, and maximizing bottom-line corporate profitability.',
        hi: 'व्यापक PFC विज्ञान और अर्थशास्त्र को जोड़ता है: उच्च PF, हार्मोनिक सुरक्षा, ट्रांसफार्मर क्षमता की मुक्ति और कंपनी के मुनाफे में भारी वृद्धि सुनिश्चित करता है।',
        bn: 'পূর্ণাঙ্গ PFC প্রকৌশল বিজ্ঞান ও বাণিজ্যিক অর্থনীতির মেলবন্ধন ঘটায়: উচ্চ PF অর্জন, হারমোনিক রেজোন্যান্স প্রতিরোধ, উৎপাদন বৃদ্ধির জন্য ট্রান্সফরমার ধারণক্ষমতা অবমুক্তকরণ এবং ব্যবসায়িক মুনাফা সর্বোচ্চকরণ।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ch13-pfc-engineering-capstone',
      title: {
        en: 'Industrial PFC Design Capstone Single-Line Diagram (SLD)',
        hi: 'औद्योगिक PFC डिजाइन कैपस्टोन सिंगल-लाइन आरेख (SLD)',
        bn: 'শিল্প PFC নকশা ক্যাপস্টোন সিঙ্গেল-লাইন ডায়াগ্রাম (SLD)'
      },
      caption: {
        en: 'Comprehensive single-line diagram illustrating 1,000 kVA substation transformer, 450 kVAR 7% detuned APFC system, motor control center linear loads, VFD automation nonlinear loads, and engineering deliverables ledger.',
        hi: '1,000 kVA सबस्टेशन ट्रांसफार्मर, 450 kVAR 7% डिट्यून्ड APFC सिस्टम, मोटर लोड और VFD ऑटोमेशन लोड को दर्शाने वाला संपूर्ण सिंगल-लाइन आरेख।',
        bn: '১,০০০ kVA সাবস্টেশন ট্রান্সফরমার, ৪৫০ kVAR ৭% ডিটিউন্ড APFC সিস্টেম, মোটর কন্ট্রোল সেন্টার লোড এবং VFD নন-লিনিয়ার অটোমেশন লোড প্রদর্শনকারী সম্পূর্ণ সিঙ্গেল-লাইন ডায়াগ্রাম।'
      },
      svgType: 'circuit-ch13-pfc-engineering-capstone'
    }
  ]
};
