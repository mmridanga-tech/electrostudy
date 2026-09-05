import { Lesson } from '../types';

export const LESSON_POWER_SYSTEM_STABILITY: Lesson = {
  id: 'lsn-ch16-power-system-stability',
  topicId: 'tp-ch16-power-system-stability',
  chapterId: 'ch-advanced-power-system-analysis',
  order: 10,
  title: {
    en: 'Power System Stability & Grid Modernization: Swing Equation, Equal-Area Criterion & FACTS',
    hi: 'पावर सिस्टम स्थिरता एवं ग्रिड आधुनिकीकरण: स्विंग समीकरण, समान-क्षेत्र मानदंड एवं FACTS',
    bn: 'পাওয়ার সিস্টেম স্থায়িত্ব ও গ্রিড আধুনিকীকরণ: সুইং সমীকরণ, ইকুয়াল-এরিয়া মানদণ্ড ও FACTS'
  },
  description: {
    en: 'Rotor dynamics and transient stability: derivation of the swing equation and inertia constant H, non-linear power-angle curve (P_e = P_max sin delta), equal-area criterion for sudden load changes and three-phase faults, critical clearing angle delta_cr and critical clearing time t_cr, and introduction to modern FACTS controllers (STATCOM, SVC, TCSC, UPFC).',
    hi: 'रोटर गतिकी एवं क्षणिक स्थिरता: स्विंग समीकरण एवं जड़त्व स्थिरांक H की व्युत्पत्ति, अरेखीय शक्ति-कोण वक्र (P_e = P_max sin delta), अचानक लोड परिवर्तन और 3-फेज फॉल्ट के लिए समान-क्षेत्र मानदंड (equal-area criterion), महत्वपूर्ण समाशोधन कोण delta_cr एवं समाशोधन समय t_cr, तथा आधुनिक FACTS नियंत्रकों (STATCOM, SVC, TCSC, UPFC) का परिचय।',
    bn: 'রটার গতিবিদ্যা ও ট্রানজিয়েন্ট স্থায়িত্ব: সুইং সমীকরণ ও জড়তা ধ্রুবক H এর প্রতিপাদন, নন-লিনিয়ার পাওয়ার-অ্যাঙ্গেল সমীকরণ, আকস্মিক লোড পরিবর্তন ও ৩-ফেজ ফল্টের জন্য ইকুয়াল-এরিয়া মানদণ্ড, ক্রিটিক্যাল ক্লিয়ারিং কোণ delta_cr ও সময় t_cr, এবং আধুনিক FACTS নিয়ন্ত্রকসমূহের (STATCOM, SVC, TCSC, UPFC) পরিচয়।'
  },
  estimatedMinutes: 48,
  easyExplanation: {
    en: 'In an electrical power grid, all synchronous generators across entire continents must rotate in lockstep at the exact same electrical frequency (50 Hz or 60 Hz). When a severe disturbance strikes—such as a lightning-induced short circuit on a major transmission corridor—electric power cannot flow out into the lines, dropping the electrical braking torque to nearly zero. But the multi-ton steam or hydro turbine continues driving the generator rotor with massive mechanical power! The accelerating power causes the rotor to speed up and pull forward in phase angle relative to the rest of the grid. If high-speed protective relays and circuit breakers clear the fault fast enough, the generator decelerates and returns to a stable equilibrium. If they are too slow, the rotor accelerates beyond the "point of no return" (critical clearing angle), loses synchronism, and tears itself out of step with catastrophic blackout consequences! The Equal-Area Criterion gives engineers a visual geometric way to prove whether a generator will survive a short circuit without having to solve difficult non-linear differential equations!',
    hi: 'पावर ग्रिड में सभी सिंक्रोनस जनरेटर पूरे महाद्वीप में ठीक 50 Hz पर एक साथ घूमते हैं। जब ग्रिड में कोई भीषण शॉर्ट सर्किट होता है, तो विद्युत शक्ति बाहर नहीं जा पाती और ब्रेकिंग टॉर्क शून्य हो जाता है। लेकिन टरबाइन अपनी विशाल शक्ति से रोटर को घुमाता रहता है! इस अतिरिक्त शक्ति से रोटर की गति बढ़ जाती है और उसका कोण आगे भागने लगता है। यदि सर्किट ब्रेकर समय रहते (क्रिटिकल क्लियरिंग टाइम t_cr के भीतर) फॉल्ट को हटा देते हैं, तो जनरेटर स्थिर रहता है। यदि वे थोड़े भी धीमे हों, तो जनरेटर सिंक खो देता है और ब्लैकआउट हो जाता है! समान-क्षेत्र मानदंड (Equal-Area Criterion) रेखाचित्र द्वारा यह जांचने की शक्तिशाली विधि है कि जनरेटर सुरक्षित रहेगा या नहीं!',
    bn: 'পাওয়ার গ্রিডে সকল সিঙ্ক্রোনাস জেনারেটরকে নিখুঁতভাবে একই ফ্রিকোয়েন্সিতে (৫০ Hz) синхронভাবে ঘুরতে হয়। যখন গ্রিডে কোনো বড় ফল্ট ঘটে, তখন বৈদ্যুতিক শক্তি সঞ্চালন প্রায় বন্ধ হয়ে যায়। কিন্তু টারবাইন পুরো শক্তিতে ঘুরতে থাকায় রটার অস্বাভাবিক দ্রুত ঘুরতে শুরু করে এবং ফেজ কোণে এগিয়ে যায়। রিলে ও ব্রেকার দ্রুত ফল্ট দূর (ক্রিটিক্যাল ক্লিয়ারিং টাইম t_cr এর মধ্যে) করলে জেনারেটর আবার স্বাভাবিক গতিতে ফিরে আসে। দেরি হলে জেনারেটর সিনক্রোনিজম হারিয়ে গ্রিড বিপর্যয় বা ব্ল্যাকআউট ঘটায়! ইকুয়াল-এরিয়া মানদণ্ড একটি চাক্ষুষ জ্যামিতিক পদ্ধতির মাধ্যমে জটিল সমীকরণ সমাধান ছাড়াই গ্রিডের এই স্থায়িত্ব প্রমাণ করতে পারে!'
  },
  detailedExplanation: {
    en: 'Power system stability represents the ability of an interconnected electric grid to remain in operating equilibrium under normal conditions and regain an acceptable state of synchronism after being subjected to a severe physical disturbance:\n\n1. Rotor Dynamics and the Swing Equation:\nNewton’s second law for a rotating synchronous machine rotor:\nJ * (d²theta_m / dt²) = T_m - T_e = T_a\nMultiplying by synchronous speed omega_s and converting to electrical angle delta (delta = theta_e - omega_s*t):\nM * (d²delta / dt²) = P_m - P_e = P_a\nwhere M is the angular momentum. Normalizing by machine rated MVA (S_base) defines the normalized inertia constant H (Mega-Joules of kinetic energy stored at synchronous speed per MVA of rating):\n• Stored Kinetic Energy: E_k = (1/2) * J * omega_s² = H * S_base  ==>  M = (2*H / omega_s)\n• The Canonical Swing Equation:\n(2*H / omega_s) * (d²delta / dt²) = P_m - P_e(delta)  [in per unit]\nIn 50 Hz systems (omega_s = 2*pi*50 = 100*pi rad/s ≈ 314.16 rad/s, or 180*f = 9000 electrical deg/s):\n(H / (180*f)) * (d²delta / dt²) = P_m - P_e  [delta in electrical degrees]\n\n2. Power-Angle Equation:\nFor a round-rotor generator connected to an infinite bus through total reactance X_total:\nP_e(delta) = P_max * sin(delta) = (|E\'| * |V_inf| / X_total) * sin(delta)\nAt initial steady state: P_m = P_e(delta_0) = P_max * sin(delta_0)  ==>  delta_0 = arcsin(P_m / P_max).\n\n3. Equal-Area Criterion for Transient Stability:\nIntegrating the swing equation yields: (1/2) * M * (d_delta / dt)² = integral (P_m - P_e) d_delta.\nFor the rotor speed deviation to return to zero (d_delta/dt = 0 at maximum swing delta_max), the net work done on the rotor during the disturbance must be zero:\n• Accelerating Area (A1): Kinetic energy gained during the fault:\nA_1 = integral_{delta_0}^{delta_cr} (P_m - P_fault) d_delta\n• Decelerating Area (A2): Kinetic energy returned to the grid after fault clearing:\nA_2 = integral_{delta_cr}^{delta_max} (P_post - P_m) d_delta\n• Stability Condition: A_2 >= A_1. If A_2 < A_1, the rotor gains irreversible net kinetic energy, accelerates past delta_max = 180° - delta_post, and falls out of synchronism.\n\n4. Critical Clearing Angle (delta_cr) for Bolted 3-Phase Fault (P_fault = 0):\ncos(delta_cr) = (P_m / P_max2) * (delta_max - delta_0) + cos(delta_max)\nwhere delta_max = pi - delta_0 (in radians).\n\n5. Flexible AC Transmission Systems (FACTS):\nModern power electronics controllers dynamically manage power flow and enhance stability margins:\n• Static VAR Compensator (SVC): Thyristor-controlled reactors and capacitors providing fast reactive support at substations.\n• Static Synchronous Compensator (STATCOM): VSC-based shunt device delivering constant full reactive current even under severe bus voltage dips.\n• Thyristor-Controlled Series Capacitor (TCSC): Rapidly alters line impedance X to damp low-frequency inter-area power oscillations (0.1 to 2 Hz).\n• Unified Power Flow Controller (UPFC): Combined series-shunt device providing independent, real-time control of P, Q, and bus voltage magnitude.',
    hi: 'पावर सिस्टम स्थिरता रोटर गतिकी और स्विंग समीकरण द्वारा नियंत्रित होती है:\n\n1. स्विंग समीकरण:\n(2H / omega_s) * (d²delta / dt²) = P_m - P_e = P_a [pu]\nजहाँ H जड़त्व स्थिरांक है, P_m यांत्रिक शक्ति है और P_e = P_max * sin(delta) विद्युत शक्ति है।\n\n2. समान-क्षेत्र मानदंड (Equal-Area Criterion):\nसिस्टम के स्थिर रहने के लिए त्वरण क्षेत्र (A1) मंदन क्षेत्र (A2) के बराबर या उससे कम होना चाहिए (A1 <= A2)।\n\n3. क्रिटिकल क्लियरिंग कोण (delta_cr):\nवह अधिकतम कोण जिस पर फॉल्ट को हटाना अनिवार्य है ताकि जनरेटर सिंक में बना रहे।\n\n4. FACTS उपकरण:\n• SVC और STATCOM: तेजी से वोल्टेज समर्थन और रिएक्टिव पावर प्रदान करते हैं।\n• TCSC: लाइन प्रतिघात को बदलकर शक्ति प्रवाह को बढ़ाता है और दोलनों को रोकता है।\n• UPFC: P, Q और वोल्टेज को एक साथ नियंत्रित करने वाला सबसे उन्नत नियंत्रक है।',
    bn: 'পাওয়ার সিস্টেমের স্থায়িত্ব রটার গতিবিদ্যা এবং সুইং সমীকরণ দ্বারা নির্ধারিত হয়:\n\n১. সুইং সমীকরণ:\n(২H / omega_s) * (d²delta / dt²) = P_m - P_e [pu]\nএখানে H হলো জড়তা ধ্রুবক, P_m যান্ত্রিক শক্তি এবং P_e = P_max * sin(delta) বৈদ্যুতিক শক্তি।\n\n২. ইকুয়াল-এরিয়া মানদণ্ড:\nস্থায়িত্বের শর্ত হলো ত্বরণ এলাকা A1 মন্দন এলাকা A2 এর চেয়ে ছোট বা সমান হতে হবে (A1 <= A2)।\n\n৩. ক্রিটিক্যাল ক্লিয়ারিং কোণ (delta_cr):\nসর্বোচ্চ যে কোণের মধ্যে ফল্ট অপসারণ করলে জেনারেটরের সিনক্রোনিজম বজায় থাকে।\n\n৪. FACTS ডিভাইসসমূহ:\n• SVC ও STATCOM: দ্রুত রিঅ্যাক্টিভ পাওয়ার ও ভোল্টেজ সমর্থন যোগায়।\n• TCSC: লাইনের ইম্পিডেন্স পরিবর্তন করে ট্রানজিয়েন্ট স্থায়িত্ব বাড়ায়।\n• UPFC: রিয়েল ও রিঅ্যাক্টিভ পাওয়ার এবং ভোল্টেজ একযোগে স্বাধীনভাবে নিয়ন্ত্রণ করে।'
  },
  formulas: [
    {
      id: 'f-ch16-swing-equation',
      symbol: 'M \\frac{d^2 \\delta}{dt^2}',
      expression: '\\frac{2H}{\\omega_s} \\frac{d^2\\delta}{dt^2} = P_m - P_e = P_a \\quad \\text{[pu]}',
      title: {
        en: 'The Classical Power System Swing Equation',
        hi: 'शास्त्रीय पावर सिस्टम स्विंग समीकरण',
        bn: 'ক্লাসিক্যাল পাওয়ার সিস্টেম সুইং সমীকরণ'
      },
      description: {
        en: 'Fundamental non-linear differential equation governing the electromechanical angular acceleration of a synchronous rotor under unbalanced accelerating power P_a.',
        hi: 'असंतुलित शक्ति P_a के तहत सिंक्रोनस रोटर के विद्युत-यांत्रिक कोणीय त्वरण को नियंत्रित करने वाला मूलभूत अवकल समीकरण।',
        bn: 'অসম ত্বরণ শক্তির প্রভাবে সিঙ্ক্রোনাস রটারের কৌণিক গতিশীলতা নিয়ন্ত্রণকারী মূল ডিফারেনশিয়াল সমীকরণ।'
      },
      variables: [
        { symbol: 'H', name: { en: 'Inertia constant (Mega-Joules of kinetic energy per MVA rating, s)', hi: 'जड़त्व स्थिरांक H (MJ/MVA या सेकंड)', bn: 'জড়তা ধ্রুবক H (MJ/MVA বা সেকেন্ড)' } },
        { symbol: '\\omega_s', name: { en: 'Synchronous electrical angular frequency (2*pi*f, rad/s)', hi: 'सिंक्रोनस कोणीय आवृत्ति (rad/s)', bn: 'সিঙ্ক্রোনাস কৌণিক কম্পাঙ্ক (rad/s)' } },
        { symbol: '\\delta', name: { en: 'Rotor power angle relative to infinite bus (rad or degrees)', hi: 'रोटर पावर कोण (rad या डिग्री)', bn: 'রটার পাওয়ার কোণ (rad বা ডিগ্রি)' } },
        { symbol: 'P_m, P_e', name: { en: 'Mechanical shaft power input and electrical power output (pu)', hi: 'यांत्रिक इनपुट शक्ति एवं विद्युत आउटपुट शक्ति (pu)', bn: 'যান্ত্রিক ইনপুট ও বৈদ্যুতিক আউটপুট শক্তি (pu)' } }
      ]
    },
    {
      id: 'f-ch16-critical-clearing-angle',
      symbol: '\\delta_{cr}',
      expression: '\\cos(\\delta_{cr}) = \\frac{P_m}{P_{max2}} (\\delta_{max} - \\delta_0) + \\cos(\\delta_{max})',
      title: {
        en: 'Critical Clearing Angle for Bolted 3-Phase Fault (P_fault = 0)',
        hi: 'बोल्टेड 3-फेज फॉल्ट हेतु क्रिटिकल क्लियरिंग कोण सूत्र',
        bn: 'বোল্টেড ৩-ফেজ ফল্টের ক্রিটিক্যাল ক্লিয়ারিং কোণ সূত্র'
      },
      description: {
        en: 'Derived from the Equal-Area Criterion equating accelerating area A1 to decelerating area A2, defining the exact threshold for transient stability.',
        hi: 'समान-क्षेत्र मानदंड A1 = A2 से प्राप्त, जो क्षणिक स्थिरता की अंतिम सीमा निर्धारित करता है।',
        bn: 'ইকুয়াল-এরিয়া মানদণ্ড A1 = A2 থেকে প্রতিপাদিত, যা ট্রানজিয়েন্ট স্থায়িত্ব রক্ষার চরম সীমা নির্দেশ করে।'
      },
      variables: [
        { symbol: '\\delta_{cr}', name: { en: 'Critical clearing angle (rad)', hi: 'क्रिटिकल क्लियरिंग कोण (rad)', bn: 'ক্রিটিক্যাল ক্লিয়ারিং কোণ (rad)' } },
        { symbol: '\\delta_0', name: { en: 'Initial pre-fault rotor angle (rad)', hi: 'प्रारंभिक रोटर कोण (rad)', bn: 'প্রারম্ভিক রটার কোণ (rad)' } },
        { symbol: '\\delta_{max}', name: { en: 'Maximum stable rotor swing angle = pi - delta_0 (rad)', hi: 'अधिकतम स्थिर रोटर स्विंग कोण (rad)', bn: 'সর্বোচ্চ স্থিতিশীল রটার সুইং কোণ (rad)' } },
        { symbol: 'P_{max2}', name: { en: 'Peak of post-fault electrical power curve (pu)', hi: 'फॉल्ट के बाद अधिकतम विद्युत शक्ति (pu)', bn: 'ফল্ট পরবর্তী সর্বোচ্চ বৈদ্যুতিক শক্তি (pu)' } }
      ]
    },
    {
      id: 'f-ch16-power-angle-equation',
      symbol: 'P_e(\\delta)',
      expression: 'P_e = P_{max} \\sin(\\delta) = \\frac{|E\'| |V_{\\infty}|}{X} \\sin(\\delta)',
      title: {
        en: 'Generator-Infinite Bus Electrical Power-Angle Transfer Equation',
        hi: 'जनरेटर-अनंत बस विद्युत शक्ति-कोण स्थानांतरण समीकरण',
        bn: 'জেনারেটর-ইনফাইনাইট বাস পাওয়ার-অ্যাঙ্গেল সমীকরণ'
      },
      description: {
        en: 'Relates active power transmitted across total series reactance X to the internal transient EMF |E\'|, infinite bus voltage |V_inf|, and power angle delta.',
        hi: 'कुल प्रतिघात X, आंतरिक EMF |E\'|, वोल्टेज |V_inf| और रोटर कोण delta के संदर्भ में पारेषित शक्ति।',
        bn: 'মোট সিরিজ রিঅ্যাক্ট্যান্স X, অভ্যন্তরীণ EMF |E\'|, ভোল্টেজ |V_inf| ও রটার কোণ delta এর সাপেক্ষে সঞ্চালিত শক্তি।'
      },
      variables: [
        { symbol: 'P_e', name: { en: 'Transmitted electrical power (pu)', hi: 'पारेषित विद्युत शक्ति (pu)', bn: 'সঞ্চালিত বৈদ্যুতিক শক্তি (pu)' } },
        { symbol: 'P_{max}', name: { en: 'Steady-state stability limit (pu)', hi: 'स्थैतिक स्थिरता सीमा (pu)', bn: 'স্টেডি-স্টেট স্থায়িত্ব সীমা (pu)' } },
        { symbol: 'X', name: { en: 'Total transfer reactance including generator transient reactance and line (pu)', hi: 'कुल स्थानांतरण प्रतिघात (pu)', bn: 'মোট স্থানান্তর রিঅ্যাক্ট্যান্স (pu)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch16-l10-facts-controllers',
      title: {
        en: 'Grid Modernization: Inverter-Based Resources & FACTS Technology',
        hi: 'ग्रिड आधुनिकीकरण: इन्वर्टर-आधारित संसाधन एवं FACTS तकनीक',
        bn: 'গ্রিড আধুনিকীকরণ: ইনভার্টার-ভিত্তিক উৎস ও FACTS প্রযুক্তি'
      },
      content: {
        en: 'As renewable generation (solar PV and wind) replaces conventional thermal power plants, traditional rotating mechanical inertia (H) is steadily decreasing, creating "low-inertia grids" susceptible to rapid frequency excursions (high RoCoF: Rate of Change of Frequency):\n\n1. Grid-Forming (GFM) Inverters & Virtual Synchronous Machines (VSM):\nModern renewable inverters program virtual inertia into their control software, synthesizing instantaneous voltage sources that mimic mechanical rotors during frequency swings.\n\n2. Modern FACTS Controllers:\n• Static Synchronous Compensator (STATCOM):\n  Utilizes IGBT-based Voltage Source Converters (VSCs) connected in shunt. Unlike older SVCs whose reactive output drops quadratically with voltage (Q proportional to V²), a STATCOM acts as a controllable current source, maintaining full rated capacitive current (Q proportional to V) down to 0.2 pu voltage, providing superior voltage ride-through.\n• Thyristor-Controlled Series Capacitor (TCSC):\n  Mounted in series with long transmission lines. By rapidly altering the apparent capacitive reactance X_C via antiparallel thyristors, it prevents subsynchronous resonance (SSR) and dampens low-frequency inter-area power oscillations.\n• Unified Power Flow Controller (UPFC):\n  The pinnacle of FACTS technology: incorporates a shunt VSC and a series VSC linked by a common DC capacitor. It can independently control active power P, reactive power Q, and bus voltage magnitude V in real time without rotating parts.',
        hi: 'नवीकरणीय ऊर्जा (सोलर, विंड) के जुड़ने से ग्रिड की भौतिक जड़ता (inertia H) कम हो रही है, जिससे आवृत्ति बहुत तेजी से गिरती है (RoCoF)। इसके समाधान के लिए ग्रिड-फॉर्मिंग (GFM) इन्वर्टर वर्चुअल इनर्शिया प्रदान करते हैं। इसके साथ ही आधुनिक FACTS उपकरण जैसे STATCOM (वोल्टेज गिरने पर भी पूरा रिएक्टिव करंट देता है), TCSC (लाइनों के दोलनों को रोकता है), और UPFC (P, Q और V का स्वतंत्र नियंत्रण करता है) ग्रिड को अत्यंत मजबूत और स्थिर बनाते हैं।',
        bn: 'সৌর ও বায়ু বিদ্যুৎ গ্রিডে যুক্ত হওয়ায় ঐতিহ্যবাহী ঘূর্ণায়মান জড়তা (H) কমে গিয়ে ফ্রিকোয়েন্সির দ্রুত পতন (RoCoF) ঘটে। এর প্রতিকারে গ্রিড-ফর্মিং ইনভার্টার কৃত্রিম জড়তা সৃষ্টি করে। আধুনিক FACTS প্রযুক্তি যেমন STATCOM (ভোল্টেজ ড্রপেও পূর্ণ রিঅ্যাক্টিভ কারেন্ট দেয়), TCSC (সঞ্চালন লাইনের অসিলেশন প্রশমিত করে) এবং UPFC (P, Q ও V কে স্বাধীনভাবে রিয়েল-টাইমে নিয়ন্ত্রণ করে) গ্রিডের স্থায়িত্ব ও নির্ভরযোগ্যতা বহুগুণ বাড়িয়ে দেয়।'
      },
      schematicId: 'sch-ch16-power-system-stability'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch16-l10-01',
      problem: {
        en: 'A 50 Hz, 4-pole synchronous generator rated 100 MVA, 11 kV has an inertia constant H = 5.0 MJ/MVA (5.0 seconds). Calculate:\n(a) The stored kinetic energy in the rotor at synchronous speed.\n(b) The angular momentum M in per unit and in physical units (MJ-s / elec-deg).\n(c) If the generator delivers an initial steady-state electrical power P_e = 1.0 pu from mechanical input P_m = 1.0 pu, and suddenly the electrical load drops to P_e = 0.6 pu while P_m remains unchanged, calculate the initial rotor acceleration d²delta/dt² in electrical degrees per second squared.',
        hi: 'एक 50 Hz, 100 MVA जनरेटर का जड़त्व स्थिरांक H = 5.0 MJ/MVA (5.0 s) है। गणना कीजिए:\n(a) सिंक्रोनस गति पर रोटर में संग्रहित गतिज ऊर्जा\n(b) जड़त्व आघूर्ण M (pu एवं MJ-s/elec-deg में)\n(c) यदि P_m = 1.0 pu पर अचानक P_e घटकर 0.6 pu रह जाता है, तो प्रारंभिक रोटर त्वरण d²delta/dt² (elec-deg/s²) ज्ञात कीजिए।',
        bn: 'একটি ৫০ Hz, ১০০ MVA জেনারেটরের H = ৫.০ MJ/MVA। নির্ণয় করুন:\n(a) সিঙ্ক্রোনাস গতিতে রটারে সঞ্চিত গতিশক্তি\n(b) কৌণিক ভরবেগ M (pu এবং MJ-s/elec-deg এককে)\n(c) P_m = ১.০ pu থাকা অবস্থায় হঠাৎ P_e কমে ০.৬ pu হলে রটারের ত্বরণ d²delta/dt² (elec-deg/s²) কত হবে?'
      },
      solution: {
        en: 'Given:\n• S_base = 100 MVA\n• Frequency f = 50 Hz\n• H = 5.0 MJ/MVA = 5.0 s\n• P_m = 1.0 pu, P_e = 0.6 pu\n\nStep 1: Calculate Stored Kinetic Energy E_k:\nE_k = H * S_base = 5.0 MJ/MVA * 100 MVA = 500.0 MJ\n\nStep 2: Calculate Angular Momentum M:\n• In electrical degrees format:\nM = H / (180 * f) = 5.0 / (180 * 50) = 5.0 / 9000 = 5.556 * 10^(-4) pu-s² / elec-deg\n• In physical units:\nM_actual = E_k / (180 * f) = 500 / 9000 = 0.05556 MJ-s / elec-deg\n\nStep 3: Calculate Accelerating Power P_a:\nP_a = P_m - P_e = 1.0 - 0.6 = +0.40 pu\n(Accelerating power = 0.40 * 100 MW = 40 MW)\n\nStep 4: Calculate Rotor Angular Acceleration:\nFrom the swing equation:\nM * (d²delta / dt²) = P_a\n(d²delta / dt²) = P_a / M = 0.40 / (5.556 * 10^(-4)) = 0.40 * (9000 / 5.0) = 0.40 * 1800\n(d²delta / dt²) = 720.0 electrical degrees / s²\n(In radians: 720 * (pi / 180) = 4.0 * pi ≈ 12.566 rad/s²).',
        hi: 'चरण 1: गतिज ऊर्जा E_k = 5.0 * 100 = 500 MJ\nचरण 2: M = H / (180 * f) = 5.0 / 9000 = 5.556e-4 pu-s²/deg\nचरण 3: त्वरण शक्ति P_a = 1.0 - 0.6 = 0.40 pu\nचरण 4: त्वरण d²delta/dt² = P_a / M = 0.40 * 1800 = 720 elec-deg/s²।',
        bn: 'ধাপ ১: গতিশক্তি E_k = ৫.০ * ১০০ = ৫০০ MJ\nধাপ ২: M = H / (১৮০ * f) = ৫.০ / ৯০০০ = ৫.৫৫৬e-৪ pu-s²/deg\nধাপ ৩: ত্বরণ শক্তি P_a = ১.০ - ০.৬ = ০.৪০ pu\nধাপ ৪: ত্বরণ d²delta/dt² = P_a / M = ০.৪০ * ১৮০০ = ৭২০ elec-deg/s²।'
      },
      givenValues: { 'H': '5.0 s', 'S_base': '100 MVA', 'f': '50 Hz', 'P_m': '1.0 pu', 'P_e': '0.6 pu' },
      finalAnswer: {
        en: 'E_k = 500 MJ, M = 5.556 x 10^-4 pu-s²/elec-deg, Acceleration = 720 elec-deg/s²',
        hi: 'E_k = 500 MJ, M = 5.556 x 10^-4 pu-s²/elec-deg, त्वरण = 720 elec-deg/s²',
        bn: 'E_k = ৫০০ MJ, M = ৫.৫৫৬ x ১০^-৪ pu-s²/elec-deg, ত্বরণ = ৭২০ elec-deg/s²'
      }
    },
    {
      id: 'ex-ch16-l10-02',
      problem: {
        en: 'A synchronous generator is delivering P_m = 1.0 pu to an infinite bus through a double-circuit transmission line. The pre-fault power-angle equation is P_e = 2.0 sin(delta) pu. A temporary three-phase bolted short circuit occurs at the sending end of one line, causing transmitted power during the fault to be P_fault = 0. After the fault is cleared by isolating the faulted line, the post-fault power-angle equation is P_post = 1.5 sin(delta) pu. Using the Equal-Area Criterion, calculate:\n(a) The initial operating angle delta_0.\n(b) The maximum allowable rotor angle delta_max for stability.\n(c) The critical clearing angle delta_cr in radians and degrees.',
        hi: 'एक जनरेटर P_m = 1.0 pu शक्ति डबल-सर्किट लाइन के माध्यम से भेज रहा है। फॉल्ट से पहले P_e = 2.0 sin(delta) pu है। फॉल्ट के दौरान P_fault = 0 है। दोषपूर्ण लाइन को अलग करने के बाद P_post = 1.5 sin(delta) pu है। समान-क्षेत्र मानदंड से ज्ञात कीजिए:\n(a) प्रारंभिक कोण delta_0\n(b) अधिकतम रोटर कोण delta_max\n(c) रेडियन और डिग्री में क्रिटिकल क्लियरिंग कोण delta_cr।',
        bn: 'একটি জেনারেটর ডাবল-সার্কিট লাইনের মাধ্যমে P_m = ১.০ pu বিদ্যুৎ সরবরাহ করছে। ফল্ট পূর্ববর্তী সমীকরণ P_e = ২.০ sin(delta)। ফল্ট চলাকালীন P_fault = ০। ফল্টযুক্ত লাইন বিচ্ছিন্ন করার পর P_post = ১.৫ sin(delta)। ইকুয়াল-এরিয়া মানদণ্ড ব্যবহার করে নির্ণয় করুন:\n(a) প্রাথমিক কোণ delta_0\n(b) সর্বোচ্চ অনুমোদনযোগ্য কোণ delta_max\n(c) ক্রিটিক্যাল ক্লিয়ারিং কোণ delta_cr (রেডিয়ান ও ডিগ্রিতে)।'
      },
      solution: {
        en: 'Given:\n• Mechanical Input: P_m = 1.0 pu\n• Pre-fault curve: P_max1 = 2.0 pu\n• Fault curve: P_fault = 0 pu\n• Post-fault curve: P_max2 = 1.5 pu\n\nStep 1: Calculate Initial Angle delta_0:\n1.0 = 2.0 * sin(delta_0)  ==>  sin(delta_0) = 0.50\ndelta_0 = arcsin(0.50) = 30° = pi / 6 rad = 0.5236 rad\n\nStep 2: Calculate Maximum Angle delta_max:\nOn the post-fault curve, delta_max occurs where P_m crosses the curve on the negative slope side:\n1.0 = 1.5 * sin(delta_max)  ==>  sin(delta_max) = 1.0 / 1.5 = 2/3 = 0.6667\ndelta_max = pi - arcsin(0.6667) = 180° - 41.81° = 138.19°\nIn radians: delta_max = 138.19 * (pi / 180) = 2.4119 rad\n\nStep 3: Apply Equal-Area Criterion for Critical Clearing Angle:\nWith P_fault = 0, the formula is:\ncos(delta_cr) = (P_m / P_max2) * (delta_max - delta_0) + cos(delta_max)\n• (P_m / P_max2) = 1.0 / 1.5 = 0.6667\n• (delta_max - delta_0) = 2.4119 - 0.5236 = 1.8883 rad\n• cos(delta_max) = cos(138.19°) = -0.7454\n• cos(delta_cr) = 0.6667 * (1.8883) + (-0.7454) = 1.2589 - 0.7454 = +0.5135\n\nStep 4: Compute delta_cr:\ndelta_cr = arccos(0.5135) = 59.10° = 1.0315 rad.',
        hi: 'चरण 1: delta_0 = arcsin(1.0 / 2.0) = 30° (0.5236 rad)\nचरण 2: sin(delta_max) = 1.0 / 1.5 = 0.6667; delta_max = 180° - 41.81° = 138.19° (2.4119 rad)\nचरण 3: cos(delta_cr) = (1.0 / 1.5) * (2.4119 - 0.5236) + cos(138.19°)\ncos(delta_cr) = 0.6667 * 1.8883 - 0.7454 = 1.2589 - 0.7454 = 0.5135\nचरण 4: delta_cr = arccos(0.5135) = 59.10° (1.032 rad)।',
        bn: 'ধাপ ১: delta_0 = arcsin(১.০ / ২.০) = ৩০° (০.৫২৩৬ rad)\nধাপ ২: sin(delta_max) = ১.০ / ১.৫ = ০.৬৬৬৭; delta_max = ১৮০° - ৪১.৮১° = ১৩৮.১৯° (২.৪১১৯ rad)\nধাপ ৩: cos(delta_cr) = (১.০ / ১.৫) * (২.৪১১৯ - ০.৫২৩৬) + cos(১৩৮.১৯°)\ncos(delta_cr) = ০.৬৬৬৭ * ১.৮৮৮৩ - ০.৭৪৫৪ = ০.৫১৩৫\nধাপ ৪: delta_cr = arccos(০.৫১৩৫) = ৫৯.১০° (১.০৩২ rad)।'
      },
      givenValues: { 'P_m': '1.0 pu', 'P_max1': '2.0 pu', 'P_fault': '0 pu', 'P_max2': '1.5 pu' },
      finalAnswer: {
        en: 'delta_0 = 30.0°, delta_max = 138.2°, Critical Clearing Angle delta_cr = 59.10° (1.03 rad)',
        hi: 'delta_0 = 30.0°, delta_max = 138.2°, क्रिटिकल क्लियरिंग कोण delta_cr = 59.10° (1.03 rad)',
        bn: 'delta_0 = ৩০.০°, delta_max = ১৩৮.২°, ক্রিটিক্যাল ক্লিয়ারিং কোণ delta_cr = ৫৯.১০° (১.০৩ rad)'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Determining circuit breaker operating speed requirements (clearing time must be strictly less than critical clearing time t_cr, typically 80 to 120 ms).',
      'Deploying STATCOM and SVC devices at weak grid interconnections to prevent transient voltage instability and post-contingency voltage collapse.',
      'Configuring System Protection Schemes (SPS) or Remedial Action Schemes (RAS) to perform fast generator tripping or dynamic braking resistor switching when large disturbances occur.'
    ],
    hi: [
      'सर्किट ब्रेकर की गति निर्धारित करना (फॉल्ट क्लियरिंग समय क्रिटिकल समय t_cr, लगभग 80-120 ms से कम होना चाहिए)।',
      'वोल्टेज पतन को रोकने के लिए कमजोर ग्रिड नोड्स पर STATCOM और SVC की स्थापना।',
      'बड़े व्यवधानों के समय तेजी से जनरेटर ट्रिपिंग या डायनेमिक ब्रेकिंग लागू करने हेतु स्पेशल प्रोटेक्शन स्कीम (SPS)।'
    ],
    bn: [
      'সার্কিট ব্রেকারের ট্রিপিং গতি নির্ধারণ (ফল্ট ক্লিয়ারিং টাইম অবশ্যই t_cr বা ৮০-১২০ ms এর কম হতে হবে)।',
      'ভোল্টেজ পতন রোধে দুর্বল গ্রিড ইন্টারকানেকশনে STATCOM ও SVC স্থাপন।',
      'বড় ধরনের বিপর্যয়ে দ্রুত জেনারেটর ট্রিপিংয়ের জন্য স্পেশাল প্রোটেকশন স্কিম (SPS) কনফিগারেশন।'
    ]
  },
  importantPoints: {
    en: [
      'The swing equation balances mechanical shaft power P_m against transmitted electrical power P_e; accelerating power P_a drives rotor angle acceleration.',
      'The Equal-Area Criterion requires accelerating area A1 <= decelerating area A2 for the power system to maintain transient stability.',
      'If fault clearing is delayed beyond the critical clearing angle delta_cr, the rotor accelerates past delta_max and loses synchronism.',
      'Modern inverter-based renewables decrease grid mechanical inertia, requiring grid-forming (GFM) synthetic inertia and fast FACTS response.'
    ],
    hi: [
      'स्विंग समीकरण यांत्रिक शक्ति P_m और विद्युत शक्ति P_e को संतुलित करता है; P_a रोटर को त्वरित करता है।',
      'क्षणिक स्थिरता बनाए रखने के लिए समान-क्षेत्र मानदंड में A1 <= A2 होना आवश्यक है।',
      'यदि फॉल्ट को क्रिटिकल क्लियरिंग कोण delta_cr के बाद हटाया जाता है, तो जनरेटर सिंक खो देता है।',
      'नवीकरणीय ऊर्जा ग्रिड की जड़ता (H) को कम करती है, जिसके लिए सिंथेटिक इनर्शिया और FACTS की आवश्यकता होती है।'
    ],
    bn: [
      'সুইং সমীকরণ যান্ত্রিক ইনপুট P_m ও বৈদ্যুতিক আউটপুট P_e এর ভারসাম্য রক্ষা করে; P_a রটার ত্বরণ ঘটায়।',
      'ট্রানজিয়েন্ট স্থায়িত্ব রক্ষার প্রধান শর্ত হলো ত্বরণ এলাকা A1 <= মন্দন এলাকা A2 হতে হবে।',
      'ক্রিটিক্যাল ক্লিয়ারিং কোণ delta_cr এর পরে ফল্ট দূর করা হলে জেনারেটর সিনক্রোনিজম হারিয়ে ফেলে।',
      'ইনভার্টার-ভিত্তিক উৎসসমূহ গ্রিড জড়তা কমিয়ে দেওয়ায় সিন্থেটিক ইনর্শিয়া এবং দ্রুতগতির FACTS প্রযুক্তি অপরিহার্য।'
    ]
  },
  commonMistakes: {
    en: [
      'Entering angles in degrees into the Equal-Area integral formulas (angles must always be converted to radians when integrating power-angle terms).',
      'Confusing the inertia constant H (expressed in seconds or MJ/MVA) with the moment of inertia J (expressed in kg-m²).',
      'Assuming that clearing a fault on a line restores the system to its original pre-fault power capacity (isolating the damaged line permanently increases line reactance and lowers P_max2).'
    ],
    hi: [
      'इंटीग्रल सूत्रों में कोणों को डिग्री में रखना (एकीकरण करते समय कोण हमेशा रेडियन में होने चाहिए)।',
      'जड़त्व स्थिरांक H (सेकंड या MJ/MVA) को जड़त्व आघूर्ण J (kg-m²) समझने की भूल करना।',
      'यह मान लेना कि लाइन हटने के बाद पावर क्षमता पहले जैसी ही रहेगी (एक लाइन हटने से प्रतिघात बढ़ता है और P_max घटता है)।'
    ],
    bn: [
      'ইকুয়াল-এরিয়া সূত্রে ডিগ্রিতে কোণ ব্যবহার করা (ইন্টিগ্রেশনের সময় কোণ সর্বদা রেডিয়ানে রূপান্তর করতে হয়)।',
      'জড়তা ধ্রুবক H (সেকেন্ড বা MJ/MVA) এবং মোমেন্ট অব ইনার্শিয়া J (kg-m²) গুলিয়ে ফেলা।',
      'মনে করা যে ফল্টের পর সিস্টেম আগের অবস্থায় ফিরে যাবে (একটি লাইন বিচ্ছিন্ন করলে লাইনের ইম্পিডেন্স বাড়ে ও P_max কমে যায়)।'
    ]
  },
  keyTakeaways: {
    en: [
      'Transient stability depends on the speed of protective relaying and breaker clearing relative to the critical clearing time.',
      'The Equal-Area Criterion provides direct physical insight into transient stability without numerical time-domain simulations.',
      'FACTS devices and Grid-Forming inverters represent the future of low-inertia, renewable-heavy grid stability.'
    ],
    hi: [
      'क्षणिक स्थिरता क्रिटिकल क्लियरिंग समय की तुलना में रिले और ब्रेकर की गति पर निर्भर करती है।',
      'समान-क्षेत्र मानदंड जटिल सिमुलेशन के बिना रोटर स्थिरता की गहरी अंतर्दृष्टि प्रदान करता है।',
      'FACTS और ग्रिड-फॉर्मिंग इनवर्टर नवीकरणीय ऊर्जा वाले आधुनिक ग्रिड की रीढ़ हैं।'
    ],
    bn: [
      'ট্রানজিয়েন্ট স্থায়িত্ব মূলত রিলে ও ব্রেকারের ফল্ট অপসারণ গতির (t_cr) ওপর নির্ভরশীল।',
      'ইকুয়াল-এরিয়া মানদণ্ড জটিল সিমুলেশন ছাড়াই রটার স্থায়িত্বের সুস্পষ্ট ধারণা দেয়।',
      'FACTS ডিভাইস ও গ্রিড-ফর্মিং ইনভার্টার হলো আধুনিক লো-ইনার্শিয়া গ্রিডের ভবিষ্যৎ।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch16-l10-01',
      question: {
        en: 'In the swing equation (2H / omega_s) * (d²delta / dt²) = P_a, what does the inertia constant H represent physically?',
        hi: 'स्विंग समीकरण (2H / omega_s) * (d²delta / dt²) = P_a में, जड़त्व स्थिरांक H भौतिक रूप से क्या दर्शाता है?',
        bn: 'সুইং সমীকরণ (২H / omega_s) * (d²delta / dt²) = P_a তে জড়তা ধ্রুবক H ভৌতভাবে কী নির্দেশ করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Stored kinetic energy at synchronous speed in Mega-Joules per MVA of generator rating (having units of seconds)', hi: 'सिंक्रोनस गति पर जनरेटर की MVA रेटिंग के प्रति मेगा-जूल में संग्रहित गतिज ऊर्जा (सेकंड की इकाई)', bn: 'সিঙ্ক্রোনাস গতিতে জেনারেটরের প্রতি MVA রেটিংয়ে সঞ্চিত গতিশক্তি মেগাজুলে (একক সেকেন্ড)' } },
        { id: 'opt-2', text: { en: 'The magnetic flux density of the exciter field', hi: 'उत्तेजक क्षेत्र का चुंबकीय फ्लक्स घनत्व', bn: 'এক্সাইটার ফিল্ডের চৌম্বক ফ্লাক্স ঘনত্ব' } },
        { id: 'opt-3', text: { en: 'The electrical resistance of the stator windings', hi: 'स्टेटर वाइंडिंग का विद्युत प्रतिरोध', bn: 'স্টেটর ওয়াইন্ডিংয়ের বৈদ্যুতিক রোধ' } },
        { id: 'opt-4', text: { en: 'The time taken for a circuit breaker to open contacts', hi: 'सर्किट ब्रेकर के संपर्क खुलने में लगा समय', bn: 'সার্কিট ব্রেকার খুলতে প্রয়োজনীয় সময়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'H = E_k / S_base = (0.5 * J * omega_s²) / S_base. Its units are Mega-Joules / Mega-Volt-Amperes = seconds, representing the time the generator could supply rated power purely from its rotor kinetic energy.',
        hi: 'H = E_k / S_base है। इसकी इकाई सेकंड होती है, जो दर्शाती है कि जनरेटर अपनी गतिज ऊर्जा से कितने सेकंड तक रेटेड पावर दे सकता है।',
        bn: 'H = E_k / S_base। এর একক সেকেন্ড, যা নির্দেশ করে জেনারেটর তার রটার গতিশক্তি দিয়ে কত সেকেন্ড পূর্ণ ক্ষমতায় বিদ্যুৎ যোগাতে পারে।'
      }
    },
    {
      id: 'mcq-ch16-l10-02',
      question: {
        en: 'According to the Equal-Area Criterion, what condition must be satisfied for a synchronous generator to maintain transient stability following a severe fault?',
        hi: 'समान-क्षेत्र मानदंड के अनुसार, एक गंभीर फॉल्ट के बाद सिंक्रोनस जनरेटर की क्षणिक स्थिरता बनाए रखने के लिए कौन सी शर्त पूरी होनी चाहिए?',
        bn: 'ইকুয়াল-এরিয়া মানদণ্ড অনুসারে একটি মারাত্মক ফল্টের পর সিঙ্ক্রোনাস জেনারেটরের ট্রানজিয়েন্ট স্থায়িত্ব বজায় রাখতে কোন শর্তটি পূরণ হতে হবে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The maximum possible decelerating area A2 must be greater than or equal to the accelerating area A1 (A2 >= A1)', hi: 'अधिकतम संभव मंदन क्षेत्र A2 त्वरण क्षेत्र A1 के बराबर या उससे बड़ा होना चाहिए (A2 >= A1)', bn: 'সর্বোচ্চ সম্ভাব্য মন্দন এলাকা A2 অবশ্যই ত্বরণ এলাকা A1 এর চেয়ে বড় বা সমান হতে হবে (A2 >= A1)' } },
        { id: 'opt-2', text: { en: 'The accelerating area A1 must be infinitely large', hi: 'त्वरण क्षेत्र A1 अनंत रूप से बड़ा होना चाहिए', bn: 'ত্বরণ এলাকা A1 অসীম হতে হবে' } },
        { id: 'opt-3', text: { en: 'The power angle delta must remain exactly zero at all times', hi: 'पावर कोण delta हर समय ठीक शून्य रहना चाहिए', bn: 'পাওয়ার কোণ delta সর্বদা শূন্য হতে হবে' } },
        { id: 'opt-4', text: { en: 'Decelerating area A2 must be zero', hi: 'मंदन क्षेत्र A2 शून्य होना चाहिए', bn: 'মন্দন এলাকা A2 শূন্য হতে হবে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Rotor speed deviation can only return to zero if all kinetic energy gained during fault acceleration (A1) is absorbed by electrical deceleration (A2). Thus, A2 >= A1 is required.',
        hi: 'रोटर की गति तभी वापस सामान्य हो सकती है जब त्वरण के दौरान प्राप्त गतिज ऊर्जा (A1) पूरी तरह मंदन ऊर्जा (A2) द्वारा अवशोषित हो जाए (A2 >= A1)।',
        bn: 'ফল্ট চলাকালীন অর্জিত গতিশক্তি (A1) যদি ফল্ট পরবর্তী মন্দন এলাকা (A2) দ্বারা সম্পূর্ণরূপে শোষিত হতে পারে (A2 >= A1), তবেই সিস্টেম স্থিতিশীল থাকে।'
      }
    },
    {
      id: 'mcq-ch16-l10-03',
      question: {
        en: 'What happens if protective switchgear clears a fault at a rotor angle delta that is GREATER than the critical clearing angle delta_cr?',
        hi: 'यदि सुरक्षात्मक स्विचगियर फॉल्ट को क्रिटिकल क्लियरिंग कोण delta_cr से बड़े कोण पर हटाता है तो क्या होता है?',
        bn: 'যদি প্রোটেকশন ব্যবস্থা ক্রিটিক্যাল ক্লিয়ারিং কোণ delta_cr এর চেয়ে বেশি কোণে ফল্ট অপসারিত করে তবে কী ঘটবে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The generator loses synchronism and experiences pole-slipping (transient instability)', hi: 'जनरेटर तुल्यकालिता (synchronism) खो देता है और पोल-स्लिपिंग का अनुभव करता है (क्षणिक अस्थिरता)', bn: 'জেনারেটর সিনক্রোনিজম হারিয়ে ফেলে এবং পোল-স্লিপিং ঘটে (ট্রানজিয়েন্ট অস্থিরতা)' } },
        { id: 'opt-2', text: { en: 'The generator frequency immediately drops to exactly zero', hi: 'जनरेटर की आवृत्ति तुरंत शून्य हो जाती है', bn: 'জেনারেটরের ফ্রিকোয়েন্সি তৎক্ষণাৎ শূন্য হয়ে যায়' } },
        { id: 'opt-3', text: { en: 'Transmission line losses decrease to zero', hi: 'पारेषण लाइन की हानियां शून्य हो जाती हैं', bn: 'লাইনের অপচয় শূন্য হয়' } },
        { id: 'opt-4', text: { en: 'The system voltage increases to infinity', hi: 'सिस्टम वोल्टेज बढ़कर अनंत हो जाता है', bn: 'ভোল্টেজ অসীমে পৌঁছায়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'If delta_clear > delta_cr, accelerating area A1 exceeds maximum available decelerating area A2. The rotor accelerates past delta_max, losing synchronism with violent power swings.',
        hi: 'यदि क्लियरिंग कोण delta_cr से बड़ा है, तो A1 > A2 हो जाता है और रोटर सिंक से बाहर निकलकर अस्थिर हो जाता है।',
        bn: 'যদি ক্লিয়ারিং কোণ delta_cr অতিক্রম করে, তবে A1 > A2 হয় এবং রটার সিনক্রোনিজম হারিয়ে সিস্টেমের বিপর্যয় ঘটায়।'
      }
    },
    {
      id: 'mcq-ch16-l10-04',
      question: {
        en: 'Why does a STATCOM provide superior reactive voltage support compared to a traditional Static VAR Compensator (SVC) during severe grid voltage dips?',
        hi: 'गंभीर ग्रिड वोल्टेज गिरावट के दौरान STATCOM एक पारंपरिक SVC की तुलना में बेहतर रिएक्टिव वोल्टेज समर्थन क्यों प्रदान करता है?',
        bn: 'ভোল্টেজ ব্যাপকভাবে হ্রাস পেলে ঐতিহ্যবাহী SVC এর তুলনায় STATCOM কেন বহুগুণ উন্নত ভোল্টেজ সমর্থন যোগায়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'STATCOM behaves as a controllable current source, maintaining full rated capacitive current at low voltages (Q proportional to V rather than V²)', hi: 'STATCOM एक नियंत्रणीय धारा स्रोत के रूप में कार्य करता है, जो कम वोल्टेज पर भी पूरा रेटेड करंट देता है (Q का मान V² के बजाय V के समानुपाती होता है)', bn: 'STATCOM কারেন্ট সোর্স হিসেবে কাজ করায় কম ভোল্টেজেই পূর্ণ রেটেড কারেন্ট দিতে পারে (Q মূলত V এর সমানুপাতিক, V² এর নয়)' } },
        { id: 'opt-2', text: { en: 'STATCOM consumes 100 MW of real power continuously', hi: 'STATCOM लगातार 100 MW वास्तविक शक्ति की खपत करता है', bn: 'STATCOM সর্বদা ১০০ MW শক্তি গ্রহণ করে' } },
        { id: 'opt-3', text: { en: 'SVC cannot be connected to AC lines', hi: 'SVC को AC लाइनों से नहीं जोड़ा जा सकता', bn: 'SVC কে এসি লাইনে যুক্ত করা যায় না' } },
        { id: 'opt-4', text: { en: 'STATCOM has a rotating diesel engine inside', hi: 'STATCOM के अंदर एक घूमता हुआ डीजल इंजन होता है', bn: 'STATCOM এর ভেতরে ডিজেল ইঞ্জিন থাকে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'An SVC is a variable admittance where reactive output collapses quadratically (Q = V²*B). A STATCOM is a voltage-source converter providing constant current (Q = V*I_max), delivering far more MVAR during faults.',
        hi: 'SVC का रिएक्टिव आउटपुट वोल्टेज के वर्ग (V²) से घटता है, जबकि STATCOM कम वोल्टेज पर भी पूरी करंट क्षमता (Q = V*I) बनाए रखता है।',
        bn: 'SVC এর রিঅ্যাক্টিভ ক্ষমতা ভোল্টেজের বর্গের (V²) অনুপাতে কমে যায়, কিন্তু STATCOM কম ভোল্টেজেও স্থির কারেন্ট (Q = V*I) বজায় রাখে।'
      }
    },
    {
      id: 'mcq-ch16-l10-05',
      question: {
        en: 'What is the primary operational objective of installing a Thyristor-Controlled Series Capacitor (TCSC) on a long transmission corridor?',
        hi: 'एक लंबे पारेषण गलियारे पर थाइरिस्टर-नियंत्रित श्रेणी संधारित्र (TCSC) स्थापित करने का प्राथमिक परिचालन उद्देश्य क्या है?',
        bn: 'একটি দীর্ঘ সঞ্চালন করিডোরে থাইরিস্টর-নিয়ন্ত্রিত সিরিজ ক্যাপাসিটর (TCSC) স্থাপনের মূল উদ্দেশ্য কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'To dynamically modulate line series reactance, increase power transfer capacity, and damp subsynchronous resonance (SSR) and power oscillations', hi: 'लाइन के श्रेणी प्रतिघात को गतिशील रूप से नियंत्रित करना, शक्ति स्थानांतरण क्षमता बढ़ाना और सबसिंक्रोनस रेजोनेंस (SSR) तथा दोलनों को शांत करना', bn: 'লাইনের সিরিজ রিঅ্যাক্ট্যান্স নিয়ন্ত্রণ করা, বিদ্যুৎ সঞ্চালন ক্ষমতা বৃদ্ধি এবং সাব-সিঙ্ক্রোনাস রেজোন্যান্স (SSR) ও অসিলেশন প্রশমিত করা' } },
        { id: 'opt-2', text: { en: 'To convert alternating current directly into radio waves', hi: 'प्रत्यावर्ती धारा को सीधे रेडियो तरंगों में बदलना', bn: 'এসি বিদ্যুৎকে রেডিও তরঙ্গে রূপান্তর করা' } },
        { id: 'opt-3', text: { en: 'To replace all transmission line conductors with fiber optics', hi: 'सभी पारेषण तारों को ऑप्टिकल फाइबर से बदलना', bn: 'সঞ্চালন তারকে অপটিক্যাল ফাইবারে রূপান্তর' } },
        { id: 'opt-4', text: { en: 'To eliminate lightning strikes permanently', hi: 'आकाशीय बिजली गिरने को हमेशा के लिए समाप्त करना', bn: 'বজ্রপাত চিরতরে দূর করা' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'TCSC adjusts line series reactance smoothly, raising steady-state and transient power limits (P = V²/X) while mitigating subsynchronous resonance and inter-area power oscillations.',
        hi: 'TCSC लाइन प्रतिघात X को तेजी से बदलकर शक्ति प्रवाह बढ़ाता है और जनरेटर रोटर के खतरनाक सबसिंक्रोनस दोलनों को समाप्त करता है।',
        bn: 'TCSC লাইনের সিরিজ রিঅ্যাক্ট্যান্স X নিয়ন্ত্রণ করে বিদ্যুৎ সঞ্চালন বৃদ্ধি করে এবং সাব-সিঙ্ক্রোনাস রেজোন্যান্স ও পাওয়ার অসিলেশন দূর করে।'
      }
    },
    {
      id: 'mcq-ch16-l10-06',
      question: {
        en: 'Which FACTS controller is considered the most comprehensive and versatile, capable of independently controlling active power, reactive power, and voltage simultaneously?',
        hi: 'कौन सा FACTS नियंत्रक सबसे व्यापक और बहुमुखी माना जाता है, जो एक साथ सक्रिय शक्ति, प्रतिघाती शक्ति और वोल्टेज को स्वतंत्र रूप से नियंत्रित करने में सक्षम है?',
        bn: 'কোন FACTS ডিভাইসটিকে সবচেয়ে শক্তিশালী ও বহুমুখী বিবেচনা করা হয় যা একই সাথে সক্রিয় ও প্রতিক্রিয়াশীল শক্তি এবং ভোল্টেজ স্বাধীনভাবে নিয়ন্ত্রণ করতে পারে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Unified Power Flow Controller (UPFC)', hi: 'यूनिफाइड पावर फ्लो कंट्रोलर (UPFC)', bn: 'ইউনিফাইড পাওয়ার ফ্লো কন্ট্রোলার (UPFC)' } },
        { id: 'opt-2', text: { en: 'Static VAR Compensator (SVC)', hi: 'स्टैटिक VAR कम्पेन्सेटर (SVC)', bn: 'স্ট্যাটিক VAR কমপেনসেটর (SVC)' } },
        { id: 'opt-3', text: { en: 'Line Trap', hi: 'लाइन ट्रैप (Line Trap)', bn: 'লাইন ট্র্যাপ' } },
        { id: 'opt-4', text: { en: 'Surge Arrester', hi: 'सर्ज अरेस्टर', bn: 'সার্জ অ্যারেস্টার' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'The UPFC combines a shunt converter (STATCOM) and a series converter connected via a DC link, enabling simultaneous and independent control of transmission voltage, line impedance, and phase angle.',
        hi: 'UPFC में शंट और सीरीज दोनों कनवर्टर होते हैं, जिससे यह वोल्टेज, लाइन प्रतिबाधा और फेज कोण तीनों को एक साथ नियंत्रित कर सकता है।',
        bn: 'UPFC তে শান্ট ও সিরিজ উভয় কনভার্টার থাকায় এটি ভোল্টেজ, ইম্পিডেন্স এবং ফেজ কোণ একযোগে স্বাধীনভাবে নিয়ন্ত্রণ করতে সক্ষম।'
      }
    },
    {
      id: 'mcq-ch16-l10-07',
      question: {
        en: 'What critical grid operational challenge arises when high penetration of inverter-based renewable generation (solar and wind) replaces conventional synchronous generators?',
        hi: 'जब इन्वर्टर-आधारित नवीकरणीय उत्पादन (सौर और पवन) पारंपरिक सिंक्रोनस जनरेटर की जगह लेता है तो कौन सी महत्वपूर्ण परिचालन चुनौती उत्पन्न होती है?',
        bn: 'ইনভার্টার-ভিত্তিক নবায়নযোগ্য উৎসসমূহ (সৌর ও বায়ু) প্রচলিত সিঙ্ক্রোনাস জেনারেটরের স্থান নিলে গ্রিডে কোন সংকটজনক চ্যালেঞ্জ তৈরি হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Loss of rotational mechanical inertia (H), leading to higher Rate of Change of Frequency (RoCoF) and increased risk of frequency instability', hi: 'घूर्णन यांत्रिक जड़त्व (H) की कमी, जिससे आवृत्ति परिवर्तन की दर (RoCoF) तेज हो जाती है और आवृत्ति अस्थिरता का खतरा बढ़ जाता है', bn: 'ঘূর্ণনশীল যান্ত্রিক জড়তা (H) হ্রাস, যার ফলে ফ্রিকোয়েন্সি পরিবর্তনের হার (RoCoF) বেড়ে যায় এবং গ্রিড অস্থিরতার ঝুঁকি তৈরি হয়' } },
        { id: 'opt-2', text: { en: 'Transmission line conductors shrink in length', hi: 'पारेषण तारों की लंबाई सिकुड़ जाती है', bn: 'সঞ্চালন তারের দৈর্ঘ্য কমে যায়' } },
        { id: 'opt-3', text: { en: 'Transformers stop inducing voltage completely', hi: 'ट्रांसफार्मर वोल्टेज प्रेरित करना पूरी तरह बंद कर देते हैं', bn: 'ট্রান্সফরমার ভোল্টেজ তৈরি বন্ধ করে দেয়' } },
        { id: 'opt-4', text: { en: 'AC frequency permanently shifts to 1000 Hz', hi: 'AC आवृत्ति हमेशा के लिए 1000 Hz में बदल जाती है', bn: 'ফ্রিকোয়েন্সি ১০০০ Hz এ রূপান্তরিত হয়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Conventional turbo-generators provide massive spinning kinetic energy that naturally resists sudden frequency drops. Non-synchronous inverters lack physical inertia, causing steep frequency plunges (high RoCoF) during generator trips.',
        hi: 'पारंपरिक जनरेटर अपनी गतिज ऊर्जा से आवृत्ति को गिरने से रोकते हैं। सोलर और विंड इन्वर्टर में यह भौतिक जड़त्व नहीं होता, जिससे अचानक ट्रिप होने पर फ्रीक्वेंसी बहुत तेजी से गिरती है।',
        bn: 'প্রচলিত জেনারেটরের রটার গতিশক্তি ফ্রিকোয়েন্সির আকস্মিক পতন ঠেকায়। ইনভার্টারে ভৌত জড়তা না থাকায় কোনো জেনারেটর ট্রিপ করলে ফ্রিকোয়েন্সি অত্যন্ত দ্রুত হ্রাস পায়।'
      }
    },
    {
      id: 'mcq-ch16-l10-08',
      question: {
        en: 'A 50 Hz synchronous machine has an inertia constant H = 4.0 MJ/MVA. Under an accelerating power of P_a = 0.5 pu, what is the initial angular acceleration in electrical radians per second squared?',
        hi: 'एक 50 Hz सिंक्रोनस मशीन का H = 4.0 MJ/MVA है। P_a = 0.5 pu के तहत प्रारंभिक कोणीय त्वरण (rad/s²) क्या है?',
        bn: 'একটি ৫০ Hz মেশিনের H = ৪.০ MJ/MVA। P_a = ০.৫ pu ত্বরণ শক্তিতে প্রাথমিক কৌণিক ত্বরণ (rad/s²) কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '19.63 rad/s²', hi: '19.63 rad/s²', bn: '১৯.৬৩ rad/s²' } },
        { id: 'opt-2', text: { en: '314.16 rad/s²', hi: '314.16 rad/s²', bn: '৩১৪.১৬ rad/s²' } },
        { id: 'opt-3', text: { en: '1.25 rad/s²', hi: '1.25 rad/s²', bn: '১.২৫ rad/s²' } },
        { id: 'opt-4', text: { en: '100.0 rad/s²', hi: '100.0 rad/s²', bn: '১০০.০ rad/s²' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'omega_s = 2*pi*50 = 314.159 rad/s. M = 2*H / omega_s = (2 * 4.0) / 314.159 = 8.0 / 314.159 = 0.02546 pu-s²/rad. Acceleration = P_a / M = 0.5 / 0.02546 = 19.635 rad/s².',
        hi: 'M = 2H / omega_s = 8.0 / 314.16 = 0.02546 pu-s²/rad। त्वरण = P_a / M = 0.5 / 0.02546 = 19.63 rad/s²।',
        bn: 'M = ২H / omega_s = ৮.০ / ৩১৪.১৬ = ০.০২৫৪৬ pu-s²/rad। ত্বরণ = P_a / M = ০.৫ / ০.০২৫৪৬ = ১৯.৬৩ rad/s²।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch16-l10-01',
      question: {
        en: 'A 50 Hz generator has H = 3.0 s. If an accelerating power P_a = 0.3 pu is sustained for 0.1 s, what is the rotor speed deviation in rpm if nominal speed is 3000 rpm?',
        hi: 'एक 50 Hz जनरेटर का H = 3.0 s है। यदि P_a = 0.3 pu 0.1 s तक बना रहता है, तो 3000 rpm के लिए रोटर गति विचलन (rpm) क्या होगा?',
        bn: 'একটি ৫০ Hz জেনারেটরের H = ৩.০ s। P_a = ০.৩ pu ০.১ সেকেন্ড স্থায়ী হলে ৩০০০ rpm রেটেড গতিতে রটার গতির বিচ্যুতি কত rpm হবে?'
      },
      hint: {
        en: 'domega/dt = (omega_s / (2*H)) * P_a = (2*pi*50 / 6) * 0.3 = 15.708 rad/s². Delta omega = 15.708 * 0.1 = 1.57 rad/s. Delta N = (1.57 / (2*pi)) * 60 = 15.0 rpm.',
        hi: 'Delta N = 15.0 rpm।',
        bn: 'Delta N = ১৫.০ rpm।'
      }
    }
  ]
};
