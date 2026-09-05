import { Lesson } from '../types';

export const LESSON_CIRCUIT_BREAKERS_IEC61850: Lesson = {
  id: 'lsn-ch17-circuit-breakers-arc-interruption',
  topicId: 'tp-ch17-circuit-breakers-arc-interruption',
  chapterId: 'ch-advanced-power-system-protection',
  order: 10,
  title: {
    en: 'Circuit Breakers, Arc Interruption & IEC 61850 Substation Automation',
    hi: 'सर्किट ब्रेकर, आर्क व्यवधान एवं IEC 61850 सबस्टेशन स्वचालन',
    bn: 'সার্কিট ব্রেকার, আর্ক ইন্টারাপশন ও IEC 61850 সাবস্টেশন অটোমেশন'
  },
  description: {
    en: 'Advanced switchgear physics and modern digital substation automation: Arc interruption dynamics (Cassie-Mayr models, Slepian dielectric recovery), Transient Recovery Voltage (TRV) and Rate of Rise (RRRV), Vacuum and SF6 circuit breaker technologies, duty cycles (O-0.3s-CO-3min-CO), making vs. breaking capacities, and IEC 61850 architecture (Station/Process Bus, GOOSE messaging <3 ms, Sampled Values 9-2LE from Merging Units).',
    hi: 'उन्नत स्विचगियर भौतिकी एवं आधुनिक डिजिटल सबस्टेशन स्वचालन: आर्क व्यवधान गतिकी (कैसी-मेयर मॉडल, स्लेपियन रिकवरी), ट्रांजिएंट रिकवरी वोल्टेज (TRV एवं RRRV), वैक्यूम और SF6 ब्रेकर तकनीक, ऑपरेटिंग ड्यूटी चक्र, मेकिंग एवं ब्रेकिंग क्षमता, और IEC 61850 वास्तुकला (स्टेशन/प्रोसेस बस, GOOSE मैसेजिंग, सैंपल्ड वैल्यूज)।',
    bn: 'উন্নত সুইচগিয়ার পদার্থবিজ্ঞান ও আধুনিক ডিজিটাল সাবস্টেশন অটোমেশন: আর্ক ইন্টারাপশনের গতিবিদ্যা (ক্যাসি-মেয়ার মডেল, শ্লেপিয়ান রিকভারি), ট্রানজিয়েন্ট রিকভারি ভোল্টেজ (TRV ও RRRV), ভ্যাকুয়াম ও SF6 সার্কিট ব্রেকার প্রযুক্তি, অপারেটিং সাইকেল, মেকিং ও ব্রেকিং সক্ষমতা এবং IEC 61850 আর্কিটেকচার (স্টেশন/প্রসেস বাস, GOOSE মেসেজিং <৩ ms, মার্জিং ইউনিট থেকে স্যাম্পল্ড ভ্যালুজ)।'
  },
  estimatedMinutes: 55,
  easyExplanation: {
    en: 'When a circuit breaker pulls its mechanical contacts apart to interrupt a 40,000 Ampere short circuit, the electricity does not simply stop—the intense electric field rips electrons from the surrounding gas, creating a blazing, blinding electric plasma arc that burns hotter than the surface of the sun (over 15,000°C)! To extinguish this inferno, high-voltage breakers blast high-pressure Sulfur Hexafluoride (SF6) gas or diffuse the arc across spiral copper contacts in an ultra-clean vacuum bottle. The arc must be snuffed out at the exact millisecond current crosses zero. Immediately after current ceases, a violent voltage spike called the Transient Recovery Voltage (TRV) tries to strike the arc back into existence. If the dielectric strength between the opening contacts rises faster than the TRV, the fault is conquered! Today, copper control cables are being replaced by fiber-optic Ethernet networks running the IEC 61850 international standard, where high-speed GOOSE digital telegrams trip circuit breakers in under 3 milliseconds!',
    hi: 'जब एक सर्किट ब्रेकर 40,000 एम्पीयर के शॉर्ट सर्किट को काटने के लिए अपने संपर्कों को अलग करता है, तो करंट तुरंत बंद नहीं होता—वहां 15,000°C से भी अधिक गर्म प्लाज्मा की एक भयंकर आग (आर्क) उत्पन्न होती है! इस ज्वाला को बुझाने के लिए उच्च-वोल्टेज ब्रेकर उच्च-दबाव वाली सल्फर हेक्साफ्लोराइड (SF6) गैस का झोंका मारते हैं या वैक्यूम बोतल का उपयोग करते हैं। जब करंट शून्य को पार करता है, तभी आर्क को बुझाया जाता है। इसके तुरंत बाद ट्रांजिएंट रिकवरी वोल्टेज (TRV) आर्क को फिर से जलाने की कोशिश करता है। यदि संपर्कों के बीच की परावैद्युत शक्ति TRV से तेज गति से बढ़ती है, तो फॉल्ट सफलतापूर्वक कट जाता है! आधुनिक सबस्टेशनों में तांबे के तारों की जगह IEC 61850 फाइबर-ऑप्टिक नेटवर्क ने ले ली है, जहाँ GOOSE मैसेज 3 मिलीसेकंड के भीतर ब्रेकर को ट्रिप करते हैं!',
    bn: 'যখন একটি সার্কিট ব্রেকার ৪০,০০০ অ্যাম্পিয়ারের বিশাল শর্ট সার্কিট কাটতে তার কন্টাক্ট আলাদা করে, তখন বিদ্যুৎ প্রবাহ এক পলকে বন্ধ হয়ে যায় না—সেখানে সূর্যের উপরিভাগের চেয়েও উত্তপ্ত (১৫,০০০°C) ভয়াবহ প্লাজমা আর্ক বা অগ্নিকুণ্ড তৈরি হয়! এই আগুন নেভানোর জন্য উচ্চ-চাপের সালফার হেক্সাফ্লোরাইড (SF6) গ্যাস ব্লাস্ট করা হয় অথবা ভ্যাকুয়াম বোতল ব্যবহার করা হয়। কারেন্ট যখন শূন্য অতিক্রম করে, ঠিক সেই মুহূর্তে আর্কটি নিভিয়ে ফেলা হয়। কিন্তু পরক্ষণেই ট্রানজিয়েন্ট রিকভারি ভোল্টেজ (TRV) নামক প্রচণ্ড ভোল্টেজ স্পাইক পুনরায় আর্ক জ্বালানোর চেষ্টা করে। যদি কন্টাক্টের মধ্যবর্তী ডাই-ইলেকট্রিক শক্তি TRV এর চেয়ে দ্রুত বৃদ্ধি পায়, তবেই ফল্ট চিরতরে দূর হয়! বর্তমানে তামার তারের বদলে IEC 61850 স্ট্যান্ডার্ডের ফাইবার অপটিক নেটওয়ার্কে অতি দ্রুতগতির GOOSE বার্তার মাধ্যমে ৩ মিলিসেকেন্ডের মধ্যে ব্রেকার ট্রিপ করানো হয়!'
  },
  detailedExplanation: {
    en: 'Circuit interruption and modern digital substation standards encompass high-energy arc physics and Ethernet networking:\n\n1. Physics of Arc Interruption:\nWhen breaker contacts separate under fault conditions, high current density and field emission ionize the interrupting medium into an electric arc plasma. Mathematical models describe its behavior:\n• Cassie Arc Model: Assumes constant arc temperature and arc voltage gradient; models the high-current phase dominated by convective heat loss.\n• Mayr Arc Model: Assumes constant arc diameter and conduction loss; models arc behavior near Current Zero (CZ) when power loss is dominated by thermal conduction.\n• Slepian’s Dielectric Recovery: Successful interruption requires that the rate of recovery of dielectric breakdown strength (kV/μs) between the separating contacts exceeds the Rate of Rise of Recovery Voltage (RRRV).\n\n2. Transient Recovery Voltage (TRV) & RRRV:\nImmediately following arc extinction at current zero, the system inductance (L) and stray capacitance (C) oscillate at high frequency (typically 1 to 50 kHz), imposing a high-frequency voltage transient across the breaker contacts:\n• Peak TRV: V_peak = 2 * V_max (can reach 2.5 to 3.0 p.u. under out-of-phase conditions)\n• Natural Frequency: f_n = 1 / (2 * π * √(L * C))\n• Maximum RRRV: RRRV_max = ω * V_max / √(L * C)\nIf dielectric recovery fails, a "re-ignition" (<1/4 cycle) or "restrike" (>1/4 cycle) occurs, causing catastrophic switchgear explosion.\n\n3. Breaker Technologies & Ratings:\n• Vacuum Circuit Breaker (VCB): Dominates medium voltage (3.3 kV to 33 kV). Operates in high vacuum (<10^-6 mbar); metal vapor arc diffuses across axial or transverse magnetic field (AMF/TMF) copper-chromium contacts. Prone to "Current Chopping" before natural current zero, requiring surge arresters for inductive motor switching.\n• SF6 Gas Breakers: Dominates EHV/UHV (66 kV to 765 kV). SF6 gas exhibits exceptional electronegativity (trapping free electrons into heavy negative ions) and 3x the dielectric strength of air. Self-blast and puffer interrupters compress gas during contact travel to quench the arc.\n• Making vs. Breaking Capacity: \n  - Rated Breaking Current (I_sym): Symmetrical RMS fault current interrupted at rated voltage.\n  - Rated Making Current: I_make = 2.55 * I_sym (accounting for maximum theoretical DC offset in 50 Hz grids).\n• Standard Operating Duty: O - 0.3s - CO - 3min - CO (Open, reclose after 0.3 s de-ionizing delay, trip and close-open, with 3-minute thermal motor recharge).\n\n4. IEC 61850 Substation Automation Architecture:\n• Station Bus (IEC 61850-8-1): Interconnects protection IEDs, bay controllers, and station HMI/SCADA over fiber-optic Ethernet rings. Utilizes MMS (Manufacturing Message Specification) for slow client-server telemetry and GOOSE (Generic Object Oriented Substation Events) Layer-2 multicast for ultra-fast tripping and interlocking (<3 ms transfer time).\n• Process Bus (IEC 61850-9-2LE): Eliminates all hardwired copper multi-core cables from the outdoor switchyard! Merging Units (MU) mounted at optical/electronic instrument transformers digitize CT/VT waveforms into standardized "Sampled Values" (SV, 80 samples/cycle for protection, 4 kHz at 50 Hz). Relays compute protection algorithms directly from incoming Ethernet data packets.',
    hi: 'सर्किट ब्रेकर एवं IEC 61850 स्वचालन के तकनीकी सिद्धांत:\n1. आर्क विलोपन भौतिकी: जब संपर्क अलग होते हैं, तो प्लाज्मा आर्क बनता है। कैसी और मेयर मॉडल इसके व्यवहार को समझाते हैं। सफल विलोपन के लिए परावैद्युत पुनर्प्राप्ति दर RRRV से अधिक होनी चाहिए।\n2. TRV और RRRV: करंट शून्य के तुरंत बाद L और C के कारण एक उच्च आवृत्ति स्पाइक (TRV) उत्पन्न होता है। यदि इन्सुलेशन विफल होता है, तो रि-स्ट्राइक हो सकती है।\n3. ब्रेकर रेटिंग: ब्रेकिंग क्षमता (I_sym) और मेकिंग क्षमता (2.55 * I_sym)। मानक ऑपरेटिंग ड्यूटी: O - 0.3s - CO - 3min - CO।\n4. वैक्यूम बनाम SF6: VCB मीडियम वोल्टेज (11-33 kV) में सर्वश्रेष्ठ है; SF6 EHV ट्रांसमिशन (66-765 kV) में उपयोग होता है।\n5. IEC 61850 डिजिटल सबस्टेशन: तांबे के तारों को समाप्त करता है। GOOSE मैसेज 3 मिलीसेकंड के भीतर ट्रिप सिग्नल भेजते हैं और मर्जिंग यूनिट्स (MU) से सैंपल्ड वैल्यूज (SV 9-2LE) सीधे फाइबर पर रिले में आते हैं।',
    bn: 'সার্কিট ব্রেকার ও IEC 61850 অটোমেশনের মূল বিষয়সমূহ:\n১. আর্ক ইন্টারাপশন তত্ত্ব: কন্টাক্ট বিচ্ছিন্ন হলে প্লাজমা আর্ক গঠিত হয়। ক্যাসি ও মেয়ার মডেল এর তাপীয় আচরণ ব্যাখ্যা করে। সফলভাবে আর্ক নিভিয়ে ফেলতে ডাই-ইলেকট্রিক বৃদ্ধির হার RRRV এর চেয়ে বেশি হতে হয়।\n২. TRV ও RRRV: কারেন্ট শূন্য হওয়ার পর L-C অসিলেশনে কন্টাক্টের মাঝে তীব্র ভোল্টেজ স্পাইক (TRV) সৃষ্টি হয় যা পুনরায় আর্ক জ্বালানোর ঝুঁকি তৈরি করে।\n৩. রেটিং ও সাইকেল: মেকিং কারেন্ট = ২.৫৫ * সিমেট্রিক্যাল ব্রেকিং কারেন্ট। স্ট্যান্ডার্ড সাইকেল: O - 0.3s - CO - 3min - CO।\n৪. VCB ও SF6: ১১-৩৩ kV তে ভ্যাকুয়াম ব্রেকার এবং EHV ট্রান্সমিশনে SF6 ব্রেকার শ্রেষ্ঠ।\n৫. IEC 61850 ডিজিটাল সাবস্টেশন: স্টেশন ও প্রসেস বাস আর্কিটেকচার। তামার তারের বদলে অপটিক্যাল ফাইবারে অতি দ্রুতগামী GOOSE মেসেজ (<৩ ms) এবং মার্জিং ইউনিট থেকে স্যাম্পল্ড ভ্যালুজ (SV) পাঠানো হয়।'
  },
  formulas: [
    {
      id: 'f-ch17-cb-making-capacity',
      symbol: 'I_{make}',
      expression: 'I_{make} = 2.55 \\cdot I_{break,sym}',
      title: {
        en: 'Circuit Breaker Peak Making Current Formula',
        hi: 'सर्किट ब्रेकर पीक मेकिंग धारा सूत्र',
        bn: 'সার্কিট ব্রেকার পিক মেকিং কারেন্ট সূত্র'
      },
      description: {
        en: 'Calculates the peak mechanical dynamic electrodynamic force rating required for a circuit breaker closing onto a short circuit in a 50 Hz power system.',
        hi: '50 Hz प्रणाली में शॉर्ट सर्किट पर बंद होने वाले ब्रेकर के लिए आवश्यक पीक इलेक्ट्रोडायनामिक मेकिंग करंट की गणना करता है।',
        bn: '৫০ Hz সিস্টেমে শর্ট সার্কিটে ব্রেকার ক্লোজ করার সময় যান্ত্রিক চাপ বহনের জন্য প্রয়োজনীয় পিক মেকিং কারেন্ট নির্ণয় করে।'
      },
      variables: [
        { symbol: 'I_{make}', name: { en: 'Rated peak making current (kA peak)', hi: 'पीक मेकिंग धारा (kA peak)', bn: 'পিক মেকিং কারেন্ট (kA peak)' } },
        { symbol: 'I_{break,sym}', name: { en: 'Rated symmetrical short-circuit breaking current (kA RMS)', hi: 'सममित ब्रेकिंग धारा (kA RMS)', bn: 'সিমেট্রিক্যাল ব্রেকিং কারেন্ট (kA RMS)' } }
      ]
    },
    {
      id: 'f-ch17-rrrv-max',
      symbol: 'RRRV_{max}',
      expression: 'RRRV_{max} = \\omega \\cdot V_{max} \\cdot \\frac{1}{\\sqrt{L\\cdot C}} = \\frac{\\omega \\cdot V_{max}}{\\sqrt{L\\cdot C}}',
      title: {
        en: 'Maximum Rate of Rise of Recovery Voltage (RRRV)',
        hi: 'रिकवरी वोल्टेज की वृद्धि की अधिकतम दर (RRRV)',
        bn: 'রিকভারি ভোল্টেজ বৃদ্ধির সর্বোচ্চ হার (RRRV)'
      },
      description: {
        en: 'Defines the steepness of the recovery voltage wave attempting to reignite the electric arc across breaker contacts at current zero.',
        hi: 'करंट शून्य पर ब्रेकर संपर्कों के बीच पुनः आर्क जलाने की कोशिश करने वाली रिकवरी वोल्टेज तरंग की ढलान को परिभाषित करता है।',
        bn: 'কারেন্ট শূন্য মুহূর্তে ব্রেকার কন্টাক্টের মধ্যবর্তী আর্ক পুনরায় জ্বালানোর চেষ্টাকারী ভোল্টেজ তরঙ্গের খাড়া ঢাল নির্দেশ করে।'
      },
      variables: [
        { symbol: 'RRRV_{max}', name: { en: 'Maximum rate of rise of recovery voltage (kV/μs)', hi: 'अधिकतम RRRV (kV/μs)', bn: 'সর্বোচ্চ RRRV (kV/μs)' } },
        { symbol: 'V_{max}', name: { en: 'Peak system line-to-neutral voltage (kV)', hi: 'चरम फेज वोल्टेज (kV)', bn: 'পিক ফেজ ভোল্টেজ (kV)' } },
        { symbol: '\\omega', name: { en: 'Power system angular frequency = 2πf (rad/s)', hi: 'कोणीय आवृत्ति (rad/s)', bn: 'কৌণিক কম্পাঙ্ক (rad/s)' } },
        { symbol: 'L', name: { en: 'System lumped inductance up to the fault (H)', hi: 'सिस्टम प्रेरकत्व (H)', bn: 'সিস্টেম ইনডাক্ট্যান্স (H)' } },
        { symbol: 'C', name: { en: 'Stray capacitance across breaker terminal to ground (F)', hi: 'स्ट्रे धारिता (F)', bn: 'স্ট্রে ক্যাপাসিট্যান্স (F)' } }
      ]
    }
  ],
  keyPoints: [
    {
      en: 'Arc interruption in AC circuit breakers occurs exclusively at natural Current Zero (CZ) when thermal energy input ceases.',
      hi: 'एसी सर्किट ब्रेकर्स में आर्क विलोपन विशेष रूप से प्राकृतिक करंट शून्य (CZ) पर होता है जब तापीय ऊर्जा इनपुट बंद हो जाता है।',
      bn: 'এসি সার্কিট ব্রেকারে আর্ক নিভে যাওয়ার প্রক্রিয়া কেবল স্বাভাবিক কারেন্ট শূন্য (CZ) বিন্দুতেই ঘটে যখন তাপীয় শক্তি শূন্য হয়।'
    },
    {
      en: 'Transient Recovery Voltage (TRV) oscillations attempt to restrike the arc; successful clearance requires contact dielectric recovery to outpace RRRV.',
      hi: 'TRV आर्क को फिर से जलाने की कोशिश करता है; सफल इंटरप्शन के लिए संपर्कों के बीच इन्सुलेशन रिकवरी की दर RRRV से अधिक होनी चाहिए।',
      bn: 'TRV আর্ক পুনরুজ্জীবিত করার চেষ্টা করে; সফল ইন্টারাপশনের জন্য কন্টাক্ট ডাই-ইলেকট্রিক বৃদ্ধির গতি RRRV এর চেয়ে বেশি হতে হবে।'
    },
    {
      en: 'Rated making current is 2.55 times the symmetrical breaking current (at 50 Hz) to withstand peak asymmetrical DC offset electrodynamic forces.',
      hi: 'रेटेड मेकिंग करंट सममित ब्रेकिंग करंट का 2.55 गुना (50 Hz पर) होता है ताकि पीक इलेक्ट्रोडायनामिक बलों को सहन किया जा सके।',
      bn: 'পিক মেকিং কারেন্ট সিমেট্রিক্যাল ব্রেকিং কারেন্টের ২.৫৫ গুণ (৫০ Hz এ) নির্ধারণ করা হয় যাতে ডিসি অফসেটের মারাত্মক বল সহ্য করা যায়।'
    },
    {
      en: 'IEC 61850 digital substations utilize GOOSE messages (<3 ms) for ultra-fast tripping and Sampled Values (SV 9-2LE) over optical fiber Process Bus.',
      hi: 'IEC 61850 डिजिटल सबस्टेशन अल्ट्रा-फास्ट ट्रिपिंग के लिए GOOSE संदेशों (<3 ms) और फाइबर पर सैंपल्ड वैल्यूज (SV) का उपयोग करते हैं।',
      bn: 'IEC 61850 ডিজিটাল সাবস্টেশনে ৩ মিলিসেকেন্ডের মধ্যে GOOSE ট্রিপিং এবং প্রসেস বাস ফাইবারে স্যাম্পল্ড ভ্যালুজ (SV 9-2LE) ব্যবহৃত হয়।'
    }
  ],
  schematics: [
    {
      id: 'sch-ch17-l10-01',
      title: {
        en: 'Circuit Breaker TRV Waveform & IEC 61850 Digital Substation Architecture',
        hi: 'सर्किट ब्रेकर TRV तरंग एवं IEC 61850 डिजिटल सबस्टेशन वास्तुकला',
        bn: 'সার্কিট ব্রেকার TRV তরঙ্গরূপ ও IEC 61850 ডিজিটাল সাবস্টেশন আর্কিটেকচার'
      },
      content: {
        en: 'The schematic details: (1) The Transient Recovery Voltage (TRV) oscillatory waveform following arc extinction at Current Zero, contrasting successful dielectric recovery vs. thermal re-ignition and dielectric restrike, (2) SF6 self-blast interrupter nozzle gas dynamics, and (3) The complete IEC 61850 digital substation architecture depicting the Station Bus (IEC 61850-8-1 MMS/GOOSE), Process Bus (IEC 61850-9-2LE Sampled Values), and optical Merging Units (MU).',
        hi: 'यह आरेख दिखाता है: (1) करंट शून्य के बाद TRV तरंग और थर्मल री-इग्निशन बनाम सफल रिकवरी, (2) SF6 गैस इंटरप्टर नोजल, और (3) स्टेशन बस (MMS/GOOSE), प्रोसेस बस (Sampled Values), और मर्जिंग यूनिट्स (MU) के साथ IEC 61850 आर्किटेक्चर।',
        bn: 'এই স্কিম্যাটিকে প্রদর্শিত হয়েছে: (১) কারেন্ট শূন্যের পর TRV অসিলেটরি তরঙ্গ ও ডাই-ইলেকট্রিক রিকভারি বনাম রি-স্ট্রাইক, (২) SF6 গ্যাস ব্লাস্ট নোজল মেকানিজম এবং (৩) স্টেশন বাস (MMS/GOOSE), প্রসেস বাস (SV 9-2LE) ও অপটিক্যাল মার্জিং ইউনিট সমন্বিত IEC 61850 সাবস্টেশন আর্কিটেকচার।'
      },
      schematicId: 'sch-ch17-circuit-breakers-arc-interruption'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch17-l10-01',
      problem: {
        en: 'A 3-phase, 132 kV, 50 Hz circuit breaker has a rated symmetrical breaking capacity of 31.5 kA RMS. Calculate: (a) The rated symmetrical breaking MVA capacity, (b) The rated peak making current (I_make), and (c) The DC component percentage specified by IEC standards for an opening time of 40 ms.',
        hi: 'एक 3-फेज, 132 kV, 50 Hz सर्किट ब्रेकर की सममित ब्रेकिंग क्षमता 31.5 kA RMS है। गणना करें: (a) ब्रेकिंग MVA क्षमता, (b) रेटेड पीक मेकिंग करंट (I_make), और (c) 40 ms के ओपनिंग समय के लिए IEC डीसी घटक।',
        bn: 'একটি ৩-ফেজ, ১৩২ kV, ৫০ Hz সার্কিট ব্রেকারের সিমেট্রিক্যাল ব্রেকিং সক্ষমতা ৩১.৫ kA RMS। নির্ণয় করুন: (a) ব্রেকিং MVA সক্ষমতা, (b) রেটেড পিক মেকিং কারেন্ট (I_make), এবং (c) ৪০ ms খোলার সময়ের জন্য IEC মানদণ্ড অনুযায়ী ডিসি উপাদানের শতকরা হার।'
      },
      solution: {
        en: 'Given:\n• System voltage V_LL = 132 kV\n• Symmetrical breaking current I_break,sym = 31.5 kA RMS\n• System frequency f = 50 Hz\n\nStep 1: Calculate Rated Symmetrical Breaking MVA:\nMVA_break = √3 * V_LL * I_break,sym\nMVA_break = 1.73205 * 132 kV * 31.5 kA = 7201.8 MVA ≈ 7200 MVA\n\nStep 2: Calculate Rated Peak Making Current (I_make):\nFor 50 Hz systems with standard time constant τ = 45 ms, IEC 62271-100 specifies the doubling factor as 2.55:\nI_make = 2.55 * I_break,sym\nI_make = 2.55 * 31.5 kA = 80.325 kA peak\n\nStep 3: DC Component Percentage:\nBy IEC standard curves, for a contact parting time of 40 ms (2 cycles at 50 Hz), the DC offset percentage is approximately 35% to 40% (calculated as e^(-t/τ) = e^(-40/45) = 41.1%).',
        hi: 'चरण 1: ब्रेकिंग MVA = √3 * 132 * 31.5 = 7202 MVA\nचरण 2: पीक मेकिंग करंट = 2.55 * 31.5 = 80.33 kA peak\nचरण 3: डीसी घटक = e^(-40/45) = 41.1%',
        bn: 'ধাপ ১: ব্রেকিং MVA = √৩ * ১৩২ * ৩১.৫ = ৭২০২ MVA\nধাপ ২: পিক মেকিং কারেন্ট = ২.৫৫ * ৩১.৫ = ৮০.৩৩ kA peak\nধাপ ৩: ডিসি উপাদানের হার = e^(-৪০/৪৫) = ৪১.১%'
      },
      givenValues: { 'V': '132 kV', 'I_break': '31.5 kA', 'f': '50 Hz', 'tau': '45 ms' },
      finalAnswer: {
        en: 'Breaking MVA = 7202 MVA; Peak Making Current = 80.33 kA peak; DC Component = 41.1%',
        hi: 'ब्रेकिंग MVA = 7202 MVA; पीक मेकिंग करंट = 80.33 kA; डीसी घटक = 41.1%',
        bn: 'ব্রেকিং MVA = ৭২০২ MVA; পিক মেকিং কারেন্ট = ৮০.৩৩ kA peak; ডিসি উপাদান = ৪১.১%'
      }
    },
    {
      id: 'ex-ch17-l10-02',
      problem: {
        en: 'A 220 kV circuit breaker is interrupting a fault where the net inductance up to the breaker is L = 12.0 mH and the equivalent stray capacitance to ground is C = 0.015 μF. The instantaneous recovery voltage peak at current zero is V_max = 180 kV. Calculate: (a) The natural frequency of oscillation of the Transient Recovery Voltage (f_n), and (b) The maximum Rate of Rise of Recovery Voltage (RRRV_max) in kV/μs.',
        hi: 'एक 220 kV ब्रेकर फॉल्ट काट रहा है जहाँ L = 12.0 mH और C = 0.015 μF है। V_max = 180 kV है। गणना करें: (a) TRV की स्वाभाविक दोलन आवृत्ति (f_n), और (b) रिकवरी वोल्टेज की वृद्धि की अधिकतम दर (RRRV_max) kV/μs में।',
        bn: 'একটি ২২০ kV ব্রেকার ফল্ট বিচ্ছিন্ন করছে যেখানে মোট ইনডাক্ট্যান্স L = ১২.০ mH এবং সমতুল্য স্ট্রে ক্যাপাসিট্যান্স C = ০.০১৫ μF। কারেন্ট শূন্য মুহূর্তে পিক ভোল্টেজ V_max = ১৮০ kV। নির্ণয় করুন: (a) ট্রানজিয়েন্ট রিকভারি ভোল্টেজের স্বাভাবিক কম্পাঙ্ক (f_n), এবং (b) সর্বোচ্চ RRRV এর মান kV/μs এককে।'
      },
      solution: {
        en: 'Given:\n• L = 12.0 mH = 12.0 x 10^-3 H\n• C = 0.015 μF = 15.0 x 10^-9 F\n• V_max = 180 kV\n• Power frequency angular frequency ω = 2 * π * 50 = 314.16 rad/s\n\nStep 1: Calculate Natural Frequency of TRV (f_n):\n√(L * C) = √[ (12.0 x 10^-3) * (15.0 x 10^-9) ] = √[ 1.80 x 10^-10 ] = 1.3416 x 10^-5 s\nf_n = 1 / (2 * π * √(L * C)) = 1 / [ 2 * 3.14159 * 1.3416 x 10^-5 ] = 11,862 Hz ≈ 11.86 kHz\n\nStep 2: Calculate Maximum Rate of Rise of Recovery Voltage (RRRV_max):\nRRRV_max = ω * V_max / √(L * C)\nRRRV_max = [ 314.16 rad/s * 180 kV ] / [ 1.3416 x 10^-5 s ]\nRRRV_max = 56,548.8 / 1.3416 x 10^-5 = 4.215 x 10^9 V/s = 4.215 kV/μs\n\nConclusion: The breaker contacts must establish dielectric strength exceeding 4.215 kV per microsecond to prevent restrike.',
        hi: 'चरण 1: f_n = 1 / (2 * π * √(L * C)) = 11.86 kHz\nचरण 2: RRRV_max = ω * V_max / √(L * C) = 4.215 kV/μs\nनिष्कर्ष: पुनः आग लगने से रोकने के लिए संपर्कों का इन्सुलेशन 4.215 kV/μs से तेज बढ़ना चाहिए।',
        bn: 'ধাপ ১: f_n = ১ / (২ * π * √(L * C)) = ১১.৮৬ kHz\nধাপ ২: RRRV_max = ω * V_max / √(L * C) = ৪.২১৫ kV/μs\nসিদ্ধান্ত: আর্ক পুনরুজ্জীবন রোধ করতে ব্রেকার কন্টাক্টের ইনসুলেশন বৃদ্ধির গতি প্রতি মাইক্রোসেকেন্ডে ৪.২১৫ kV এর বেশি হতে হবে।'
      },
      givenValues: { 'L': '12 mH', 'C': '0.015 μF', 'V_max': '180 kV', 'f': '50 Hz' },
      finalAnswer: {
        en: 'f_n = 11.86 kHz; Maximum RRRV = 4.215 kV/μs',
        hi: 'f_n = 11.86 kHz; अधिकतम RRRV = 4.215 kV/μs',
        bn: 'f_n = ১১.৮৬ kHz; সর্বোচ্চ RRRV = ৪.২১৫ kV/μs'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Specifying and testing 400 kV gas-insulated switchgear (GIS) circuit breakers to IEC 62271-100 standards.',
      'Commissioning IEC 61850 Process Bus networks using optical Merging Units and Sampled Values (SV) for greenfield digital substations.',
      'Configuring GOOSE messaging publish/subscribe matrices for ultra-fast breaker failure initiation and reverse interlocking.'
    ],
    hi: [
      'IEC 62271-100 मानकों के तहत 400 kV GIS सर्किट ब्रेकर्स का परीक्षण और विनिर्देशन।',
      'डिजिटल सबस्टेशनों के लिए ऑप्टिकल मर्जिंग यूनिट्स और सैंपल्ड वैल्यूज का उपयोग करके IEC 61850 प्रोसेस बस नेटवर्क की कमीशनिंग।',
      'फास्ट ब्रेकर विफलता और इंटरलॉकिंग के लिए GOOSE मैसेज पब्लिश/सब्सक्राइब मैट्रिक्स को कॉन्फ़िगर करना।'
    ],
    bn: [
      'IEC 62271-100 মানদণ্ড অনুযায়ী ৪০০ kV গ্যাস-ইনসুলেটেড সুইচগিয়ার (GIS) ব্রেকার স্পেসিফিকেশন ও পরীক্ষণ।',
      'আধুনিক ডিজিটাল সাবস্টেশনে অপটিক্যাল মার্জিং ইউনিট ও স্যাম্পল্ড ভ্যালুজ (SV) ভিত্তিক প্রসেস বাস নেটওয়ার্ক কমিশনিং।',
      'ব্রেকার ফেইলিওর ইনিশিয়েশন ও দ্রুত ইন্টারলকিংয়ের জন্য GOOSE মেসেজ পাবলিশ/সাবস্ক্রাইব ম্যাট্রিক্স কনফিগারেশন।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing Symmetrical Breaking current (RMS) with Peak Making current (which is 2.55 times larger due to DC offset forces).',
      'Assuming GOOSE messages run over TCP/IP: GOOSE packets bypass the network and transport layers, mapping directly to Ethernet Layer-2 (EtherType 0x88B8) to achieve <3 ms latency!',
      'Failing to specify opening resistors or Point-on-Wave (PoW) synchronizing controllers for capacitor bank and reactor switching, leading to catastrophic breaker restrikes.'
    ],
    hi: [
      'सममित ब्रेकिंग करंट (RMS) और पीक मेकिंग करंट (जो डीसी ऑफसेट के कारण 2.55 गुना बड़ा होता है) को एक समान समझना।',
      'यह मानना कि GOOSE मैसेज TCP/IP पर चलते हैं: वे 3 ms से कम समय प्राप्त करने के लिए सीधे ईथरनेट लेयर 2 पर काम करते हैं!',
      'कैपेसिटर बैंक स्विचिंग के लिए सिंक्रोनस स्विचिंग कंट्रोलर को छोड़ना, जिससे खतरनाक रि-स्ट्राइक और विस्फोट हो सकता है।'
    ],
    bn: [
      'সিমেট্রিক্যাল ব্রেকিং কারেন্ট ও পিক মেকিং কারেন্ট গুলিয়ে ফেলা (ডিসি অফসেটের কারণে মেকিং কারেন্ট ২.৫৫ গুণ বেশি)।',
      'ভেবে নেওয়া যে GOOSE মেসেজ TCP/IP এর ওপর চলে: ৩ মিলিসেকেন্ডের ক্ষিপ্রতা পেতে GOOSE সরাসরি ইথারনেট লেয়ার-২ (EtherType 0x88B8) এ কাজ করে!',
      'ক্যাপাসিটর ব্যাংক বা রিঅ্যাক্টর সুইচিংয়ে পয়েন্ট-অন-ওয়েভ (PoW) কন্ট্রোলার বাদ দেওয়া, যার ফলে ভয়াবহ রি-স্ট্রাইক বিস্ফোরণ ঘটতে পারে।'
    ]
  },
  keyTakeaways: {
    en: [
      'Arc extinction in circuit breakers occurs at AC Current Zero, followed by the high-frequency Transient Recovery Voltage (TRV).',
      'The dielectric strength between separating contacts must recover faster than the RRRV to prevent thermal re-ignition or restrike.',
      'IEC 61850 replaces physical copper wires with Station Bus GOOSE messages (<3 ms) and Process Bus Sampled Values (SV 9-2LE).'
    ],
    hi: [
      'सर्किट ब्रेकर्स में आर्क विलोपन एसी करंट शून्य पर होता है, जिसके तुरंत बाद हाई-फ्रीक्वेंसी TRV आता है।',
      'पुनः आग लगने से रोकने के लिए संपर्कों के बीच इन्सुलेशन रिकवरी की दर RRRV से अधिक होनी चाहिए।',
      'IEC 61850 भौतिक तांबे के तारों को स्टेशन बस GOOSE संदेशों (<3 ms) और प्रोसेस बस सैंपल्ड वैल्यूज (SV) से बदलता है।'
    ],
    bn: [
      'সার্কিট ব্রেকারে আর্ক নির্বাপণ প্রাকৃতিক কারেন্ট শূন্য বিন্দুতে সম্পন্ন হয় এবং এর পরেই উচ্চ কম্পাঙ্কের TRV দেখা দেয়।',
      'আর্ক পুনরুজ্জীবন রোধ করতে কন্টাক্টের ডাই-ইলেকট্রিক বৃদ্ধির হার RRRV এর চেয়ে বেশি হতে হয়।',
      'IEC 61850 স্ট্যান্ডার্ড তামা তারের বদলে স্টেশন বাসে অতি দ্রুত GOOSE (<৩ ms) এবং প্রসেস বাসে স্যাম্পল্ড ভ্যালুজ (SV 9-2LE) প্রয়োগ করে।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch17-l10-01',
      question: {
        en: 'At what exact point in the AC cycle does an alternating current circuit breaker extinguish the electric arc?',
        hi: 'एसी सर्किट ब्रेकर एसी चक्र में किस सटीक बिंदु पर विद्युत आर्क को बुझाता है?',
        bn: 'এসি সার্কিট ব্রেকার এসি সাইকেলের কোন সুনির্দিষ্ট বিন্দুতে বৈদ্যুতিক আর্ক নিভিয়ে ফেলে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'At natural Current Zero (CZ), when instantaneous electrical power input to the arc plasma drops to zero', hi: 'प्राकृतिक करंट शून्य (CZ) पर, जब आर्क प्लाज्मा में तात्कालिक विद्युत शक्ति इनपुट शून्य हो जाता है', bn: 'স্বাভাবিক কারেন্ট শূন্য (CZ) বিন্দুতে, যখন আর্ক প্লাজমায় তাৎক্ষণিক বৈদ্যুতিক শক্তি সরবরাহ শূন্যে নেমে আসে' } },
        { id: 'opt-2', text: { en: 'At peak voltage of the AC waveform', hi: 'एसी तरंग के चरम वोल्टेज पर', bn: 'এসি তরঙ্গের পিক ভোল্টেজ বিন্দুতে' } },
        { id: 'opt-3', text: { en: 'At peak current when electromagnetic force is strongest', hi: 'चरम करंट पर जब इलेक्ट्रोमैग्नेटिक बल सबसे मजबूत होता है', bn: 'সর্বোচ্চ পিক কারেন্টে যখন বল সবচেয়ে বেশি থাকে' } },
        { id: 'opt-4', text: { en: 'Only when the substation battery is disconnected', hi: 'केवल जब सबस्टेशन बैटरी डिस्कनेक्ट हो', bn: 'কেবল ব্যাটারি সংযোগ বিচ্ছিন্ন করার সময়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'In AC circuits, current naturally drops to zero twice every cycle (every 10 ms at 50 Hz). At this instant, heat generation ceases, giving the dielectric medium (SF6 or vacuum) a brief opportunity to de-ionize the arc path.',
        hi: 'एसी परिपथ में करंट हर चक्र में दो बार शून्य होता है। इस समय गर्मी बनना बंद हो जाता है और गैस आर्क को बुझा देती है।',
        bn: 'এসি সিস্টেমে প্রতি সাইকেলে দুবার কারেন্ট শূন্য হয় (৫০ Hz এ প্রতি ১০ মিলিসেকেন্ডে)। এই মুহূর্তে তাপ উৎপাদন বন্ধ হওয়ায় মাধ্যমটি আর্ক নিভিয়ে ফেলার সুযোগ পায়।'
      }
    },
    {
      id: 'mcq-ch17-l10-02',
      question: {
        en: 'What is the definition of the Transient Recovery Voltage (TRV)?',
        hi: 'ट्रांजिएंट रिकवरी वोल्टेज (TRV) की परिभाषा क्या है?',
        bn: 'ট্রানজিয়েন্ট রিকভারি ভোল্টেজের (TRV) সংজ্ঞা কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The high-frequency transient voltage that appears across the separating contacts of a circuit breaker immediately following arc extinction at current zero', hi: 'करंट शून्य पर आर्क बुझने के तुरंत बाद सर्किट ब्रेकर के संपर्कों के बीच दिखाई देने वाला उच्च आवृत्ति ट्रांजिएंट वोल्टेज', bn: 'কারেন্ট শূন্য মুহূর্তে আর্ক নিভে যাওয়ার ঠিক পরক্ষণে সার্কিট ব্রেকারের বিচ্ছিন্ন কন্টাক্টদ্বয়ের মাঝে আবির্ভূত উচ্চ কম্পাঙ্কের ক্ষণস্থায়ী ভোল্টেজ' } },
        { id: 'opt-2', text: { en: 'The DC voltage supplied by substation batteries during an outage', hi: 'आउटेज के दौरान सबस्टेशन बैटरी द्वारा आपूर्ति किया जाने वाला डीसी वोल्टेज', bn: 'বিদ্যুৎ বিভ্রাটের সময় সাবস্টেশন ব্যাটারি থেকে প্রাপ্ত ডিসি ভোল্টেজ' } },
        { id: 'opt-3', text: { en: 'The static electricity accumulated on lineworker boots', hi: 'लाइनमैन के जूतों पर जमा होने वाली स्थैतिक बिजली', bn: 'লাইনম্যানের জুতোয় জমা হওয়া স্থির বিদ্যুৎ' } },
        { id: 'opt-4', text: { en: 'The voltage produced by solar panels at noon', hi: 'दोपहर में सौर पैनलों द्वारा उत्पादित वोल्टेज', bn: 'দুপুরে সৌর প্যানেলে উৎপন্ন ভোল্টেজ' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'TRV is the high-frequency oscillatory voltage (governed by network L and C) that appears across the contact gap instantly after current zero, challenging the dielectric recovery of the medium.',
        hi: 'TRV वह तीव्र वोल्टेज तरंग है जो आर्क बुझते ही संपर्कों के पार प्रकट होती है और आर्क को फिर से जलाने का प्रयास करती है।',
        bn: 'TRV হলো L ও C এর কারণে সৃষ্ট উচ্চ কম্পাঙ্কের ভোল্টেজ স্পাইক যা কারেন্ট শূন্য হওয়ার সাথে সাথে কন্টাক্টের মাঝে দেখা দেয় এবং পুনরায় আর্ক তৈরির চেষ্টা করে।'
      }
    },
    {
      id: 'mcq-ch17-l10-03',
      question: {
        en: 'What physical condition leads to a "restrike" during circuit breaker opening?',
        hi: 'सर्किट ब्रेकर खुलने के दौरान किस भौतिक स्थिति के कारण "रि-स्ट्राइक" (Restrike) होता है?',
        bn: 'সার্কিট ব্রেকার খোলার সময় কোন শারীরিক পরিস্থিতির কারণে "রি-স্ট্রাইক" ঘটে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The Rate of Rise of Recovery Voltage (RRRV) exceeds the rate at which the contact gap recovers its dielectric withstand strength more than 1/4 cycle after current zero', hi: 'करंट शून्य के 1/4 चक्र के बाद RRRV संपर्कों के बीच परावैद्युत क्षमता की वृद्धि दर से अधिक हो जाता है', bn: 'কারেন্ট শূন্যের ১/৪ সাইকেল পর কন্টাক্টের ডাই-ইলেকট্রিক বৃদ্ধির হারের চেয়ে RRRV ভোল্টেজ বৃদ্ধির হার বেশি হলে' } },
        { id: 'opt-2', text: { en: 'The operating handle breaks mechanically', hi: 'ऑपरेटिंग हैंडल भौतिक रूप से टूट जाता है', bn: 'অপারেটিং হ্যান্ডেল ভেঙে গেলে' } },
        { id: 'opt-3', text: { en: 'The circuit breaker is operated in total darkness', hi: 'सर्किट ब्रेकर पूरी तरह से अंधेरे में संचालित होता है', bn: 'অন্ধকারে ব্রেকার পরিচালনা করলে' } },
        { id: 'opt-4', text: { en: 'A bird builds a nest on the breaker support tank', hi: 'कोई पक्षी ब्रेकर टैंक पर घोंसला बनाता है', bn: 'পাখি ব্রেকার ট্যাংকে বাসা বাঁধলে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'A restrike is a resumption of conduction across the contact gap occurring more than a quarter-cycle after current zero, caused by the TRV overstressing an insufficiently recovered dielectric medium.',
        hi: 'यदि संपर्कों के बीच इन्सुलेशन रिकवरी RRRV से धीमी होती है, तो वोल्टेज गैप को तोड़कर फिर से आग (Restrike) लगा देता है।',
        bn: 'কন্টাক্টের মধ্যবর্তী ডাই-ইলেকট্রিক শক্তি যদি RRRV এর সাথে পাল্লা দিতে না পারে, তবে ভোল্টেজ গ্যাপ ভেদ করে পুনরায় মারাত্মক আর্কিং (Restrike) সৃষ্টি করে।'
      }
    },
    {
      id: 'mcq-ch17-l10-04',
      question: {
        en: 'Why is the rated peak making capacity of a 50 Hz circuit breaker mathematically defined as 2.55 times its symmetrical breaking capacity?',
        hi: '50 Hz सर्किट ब्रेकर की रेटेड पीक मेकिंग क्षमता को गणितीय रूप से इसकी सममित ब्रेकिंग क्षमता के 2.55 गुना के रूप में क्यों परिभाषित किया गया है?',
        bn: '৫০ Hz সার্কিট ব্রেকারের পিক মেকিং সক্ষমতাকে গাণিতিকভাবে কেন সিমেট্রিক্যাল ব্রেকিং সক্ষমতার ২.৫৫ গুণ হিসেবে সংজ্ঞায়িত করা হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'To account for the theoretical maximum asymmetrical DC offset peak current (doubling effect √2 · 1.8 ≈ 2.55) when closing onto a short circuit', hi: 'शॉर्ट सर्किट पर बंद होने पर सैद्धांतिक अधिकतम असममित डीसी ऑफसेट पीक करंट (डबलिंग प्रभाव √2 * 1.8 ≈ 2.55) को ध्यान में रखने के लिए', bn: 'শর্ট সার্কিটে ক্লোজ করার সময় সম্ভাব্য সর্বোচ্চ অপ্রতিসম ডিসি অফসেট পিক কারেন্ট (ডাবলিং প্রভাব √২ * ১.৮ ≈ ২.৫৫) সফলভাবে সহ্য করার জন্য' } },
        { id: 'opt-2', text: { en: 'Because copper expands by 255% at boiling temperatures', hi: 'क्योंकि तांबा उबलते तापमान पर 255% फैलता है', bn: 'কারণ তামার প্রসারণ ২৫৫% ঘটে' } },
        { id: 'opt-3', text: { en: 'It represents the ratio of SF6 gas weight to air weight', hi: 'यह हवा के वजन से SF6 गैस के वजन का अनुपात है', bn: 'বায়ুর তুলনায় SF6 গ্যাসের ওজনের অনুপাত' } },
        { id: 'opt-4', text: { en: 'To allow two extra spare trips during emergencies', hi: 'आपात स्थिति के दौरान दो अतिरिक्त स्पेयर ट्रिप की अनुमति देने के लिए', bn: 'জরুরি অবস্থায় দুটি অতিরিক্ত ট্রিপ করার সুযোগ দিতে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'When a breaker closes onto a zero-voltage short circuit, DC offset shifts the peak current to nearly double the peak AC value: I_peak = √2 · I_sym · (1 + e^(-t/τ)) ≈ 1.414 · 1.8 · I_sym = 2.55 · I_sym. The breaker contacts must physically withstand the colossal electrodynamic repulsive forces.',
        hi: 'फॉल्ट पर बंद होने पर डीसी ऑफसेट के कारण पीक करंट AC के चरम मान का दोगुना हो सकता है। 2.55 का कारक संपर्कों को इन भारी चुंबकीय बलों से टूटने से बचाता है।',
        bn: 'ফল্ট অবস্থায় ব্রেকার লাগানোর সময় ডিসি অফসেট তরঙ্গের পিক মানকে প্রায় দ্বিগুণ করে তোলে: √২ * ১.৮ ≈ ২.৫৫। এই বিশাল যান্ত্রিক ধাক্কা ঠেকাতেই ২.৫৫ গুণ রেটিং বাধ্যতামূলক।'
      }
    },
    {
      id: 'mcq-ch17-l10-05',
      question: {
        en: 'What is the meaning of the standard circuit breaker operating sequence: O - 0.3s - CO - 3min - CO?',
        hi: 'मानक सर्किट ब्रेकर ऑपरेटिंग अनुक्रम O - 0.3s - CO - 3min - CO का क्या अर्थ है?',
        bn: 'সার্কিট ব্রেকারের স্ট্যান্ডার্ড অপারেটিং সিকোয়েন্স O - 0.3s - CO - 3min - CO এর প্রকৃত অর্থ কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Open on fault, dead time delay of 0.3 s (auto-reclose), Close-Open, wait 3 minutes for mechanism recharge, then one final Close-Open', hi: 'फॉल्ट पर ओपन, 0.3 s की देरी (ऑटो-रीक्लोज़), क्लोज़-ओपन, स्प्रिंग रिचार्ज के लिए 3 मिनट का इंतजार, फिर एक अंतिम क्लोज़-ओपन', bn: 'ফল্টে ওপেন, ০.৩ সেকেন্ড বিরতি (অটো-রিক্লোজ), ক্লোজ-ওপেন, মেকানিজম রিচার্জের জন্য ৩ মিনিট অপেক্ষা, অতঃপর শেষ ক্লোজ-ওপেন' } },
        { id: 'opt-2', text: { en: 'Open in October, Closed in March, Ongoing maintenance in summer', hi: 'अक्टूबर में ओपन, मार्च में क्लोज़, गर्मियों में मेंटेनेंस', bn: 'অক্টোবরে ওপেন, মার্চে ক্লোজ এবং গ্রীষ্মে মেরামত' } },
        { id: 'opt-3', text: { en: 'Operate 3 times per hour on continuous overload', hi: 'लगातार ओवरलोड पर प्रति घंटे 3 बार संचालित करना', bn: 'প্রতি ঘণ্টায় ৩ বার ওভারলোডে পরিচালনা' } },
        { id: 'opt-4', text: { en: 'Only open after 0.3 seconds and cool for 3 minutes', hi: 'केवल 0.3 सेकंड के बाद खोलें और 3 मिनट के लिए ठंडा करें', bn: '০.৩ সেকেন্ড পর খুলে ৩ মিনিট ঠান্ডা করা' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'This is the standard IEC duty cycle for auto-reclosing breakers: Trip (O), reclose after 0.3 s de-ionizing dead-time into a persistent fault and trip instantly (CO), pause 3 minutes for spring-charging motors to recharge and interrupters to cool, then execute one final close-open (CO).',
        hi: 'यह IEC ऑटो-रीक्लोजिंग ड्यूटी चक्र है: ट्रिप (O), 0.3 सेकंड बाद पुनः बंद होना, फॉल्ट रहने पर तुरंत ट्रिप (CO), 3 मिनट कूलिंग/चार्जिंग ब्रेक, फिर अंतिम CO।',
        bn: 'এটি IEC অটো-রিক্লোজিং ডিউটি সাইকেল: ট্রিপ (O), ০.৩ সেকেন্ড পর রিক্লোজ ও তাৎক্ষণিক ট্রিপ (CO), স্প্রিং চার্জের জন্য ৩ মিনিট অপেক্ষা এবং পুনরায় অন্তিম ট্রিপ (CO)।'
      }
    },
    {
      id: 'mcq-ch17-l10-06',
      question: {
        en: 'In an IEC 61850 digital substation, why do GOOSE (Generic Object Oriented Substation Events) messages achieve ultra-low delivery latency (<3 ms)?',
        hi: 'IEC 61850 डिजिटल सबस्टेशन में, GOOSE संदेश अल्ट्रा-लो डिलीवरी लेटेंसी (<3 ms) क्यों प्राप्त करते हैं?',
        bn: 'IEC 61850 ডিজিটাল সাবস্টেশনে GOOSE মেসেজ কীভাবে অতি স্বল্প ল্যাটেন্সি (<৩ ms) নিশ্চিত করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'They bypass the TCP/IP stack entirely, mapping directly to Ethernet Layer-2 (EtherType 0x88B8) with IEEE 802.1Q priority tagging', hi: 'वे TCP/IP स्टैक को पूरी तरह से बायपास करते हैं, सीधे ईथरनेट लेयर-2 पर मैप होते हैं और उच्च प्राथमिकता टैगिंग का उपयोग करते हैं', bn: 'এগুলো TCP/IP স্ট্যাক সম্পূর্ণ বাইপাস করে সরাসরি ইথারনেট লেয়ার-২ (EtherType 0x88B8) এবং অগ্রাধিকার ট্যাগিং ব্যবহার করে' } },
        { id: 'opt-2', text: { en: 'They use satellite internet transponders in geostationary orbit', hi: 'वे उपग्रह इंटरनेट का उपयोग करते हैं', bn: 'স্যাটেলাইট ইন্টারনেটের মাধ্যমে পরিচালিত হয়' } },
        { id: 'opt-3', text: { en: 'They transmit data using morse code vibrations in steel towers', hi: 'वे स्टील टावरों में कंपन द्वारा डेटा भेजते हैं', bn: 'টাওয়ারের কম্পন দিয়ে তথ্য পাঠায়' } },
        { id: 'opt-4', text: { en: 'They compress signals using standard zip files', hi: 'वे मानक ज़िप फ़ाइलों का उपयोग करके सिग्नलों को कंप्रेस करते हैं', bn: 'জিপ ফাইলের সাহায্যে সিগন্যাল সংকুচিত করে' } },
        ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Traditional TCP/IP handshakes introduce unpredictable delays (10–50 ms). GOOSE bypasses OSI layers 3 and 4, injecting raw multicast frames directly into Ethernet MAC chips with VLAN priority, achieving guaranteed delivery within 2 to 3 milliseconds.',
        hi: 'GOOSE मैसेज TCP/IP स्टैक को छोड़ देते हैं और सीधे ईथरनेट हार्डवेयर (लेयर 2) पर चलते हैं, जिससे सिग्नल 3 मिलीसेकंड से भी कम समय में पहुंच जाते हैं।',
        bn: 'GOOSE বার্তাগুলো TCP/IP এর নেটওয়ার্ক ও ট্রান্সপোর্ট লেয়ার বাদ দিয়ে সরাসরি ইথারনেট লেয়ার-২ এ কাজ করায় মাত্র ২ থেকে ৩ মিলিসেকেন্ডের মধ্যে ট্রিপ কার্যকর হয়।'
      }
    },
    {
      id: 'mcq-ch17-l10-07',
      question: {
        en: 'What is the role of a Merging Unit (MU) on the Process Bus of an IEC 61850 digital substation?',
        hi: 'IEC 61850 डिजिटल सबस्टेशन के प्रोसेस बस पर एक मर्जिंग यूनिट (MU) की क्या भूमिका है?',
        bn: 'IEC 61850 ডিজিটাল সাবস্টেশনের প্রসেস বাসে একটি মার্জিং ইউনিটের (MU) কাজ কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'It digitizes analog CT and VT secondary signals in the switchyard and broadcasts them as Sampled Values (SV, IEC 61850-9-2LE) over fiber-optic Ethernet', hi: 'यह स्विचयार्ड में एनालॉग CT और VT सिग्नलों को डिजिटल में बदलता है और उन्हें फाइबर-ऑप्टिक ईथरनेट पर सैंपल्ड वैल्यूज के रूप में प्रसारित करता है', bn: 'এটি সুইচইয়ার্ডে সিটি ও ভিটির অ্যানালগ সিগন্যালকে ডিজিটালাইজ করে ফাইবার অপটিক্সে স্যাম্পল্ড ভ্যালুজ (SV, IEC 61850-9-2LE) আকারে ব্রডকাস্ট করে' } },
        { id: 'opt-2', text: { en: 'It blends diesel fuel with lubricating oil for the emergency generator', hi: 'यह डीजल और तेल को मिलाता है', bn: 'ডিজেল ও তেল মিশ্রিত করে' } },
        { id: 'opt-3', text: { en: 'It merges multiple high-voltage transmission lines into a single wire', hi: 'यह कई पारेषण लाइनों को एक तार में मिलाता है', bn: 'একাধিক ট্রান্সমিশন লাইনকে এক তারে জোড়া দেয়' } },
        { id: 'opt-4', text: { en: 'It counts the number of visitors entering the substation gate', hi: 'यह सबस्टेशन में आने वाले आगंतुकों की गिनती करता है', bn: 'দর্শনার্থীদের সংখ্যা গণনা করে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Merging Units replace hundreds of heavy copper cables. Mounted right beside the outdoor instrument transformers, the MU samples currents and voltages at 80 samples per cycle and streams them over optical fibers to digital protection relays.',
        hi: 'मर्जिंग यूनिट तांबे के सैकड़ों भारी तारों को हटा देती है। यह यार्ड में CT/PT सिग्नल को डिजिटाइज़ करके सीधे फाइबर केबल के माध्यम से रिले को भेजती है।',
        bn: 'মার্জিং ইউনিট শত শত ভারী তামার তারের প্রয়োজনীয়তা দূর করে। এটি ইয়ার্ডেই সিটি ও পিটির সিগন্যাল ডিজিটাল স্যাম্পল্ড ভ্যালুতে রূপান্তর করে সরাসরি রিলেতে পাঠায়।'
      }
    },
    {
      id: 'mcq-ch17-l10-08',
      question: {
        en: 'A 50 Hz circuit breaker has a symmetrical breaking capacity of 40 kA RMS. What is its rated peak making capacity?',
        hi: 'एक 50 Hz सर्किट ब्रेकर की सममित ब्रेकिंग क्षमता 40 kA RMS है। इसकी रेटेड पीक मेकिंग क्षमता क्या है?',
        bn: 'একটি ৫০ Hz সার্কিট ব্রেকারের সিমেট্রিক্যাল ব্রেকিং সক্ষমতা ৪০ kA RMS। এর রেটেড পিক মেকিং সক্ষমতা কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '102 kA peak', hi: '102 kA peak', bn: '১০২ kA peak' } },
        { id: 'opt-2', text: { en: '40 kA peak', hi: '40 kA peak', bn: '৪০ kA peak' } },
        { id: 'opt-3', text: { en: '80 kA peak', hi: '80 kA peak', bn: '৮০ kA peak' } },
        { id: 'opt-4', text: { en: '160 kA peak', hi: '160 kA peak', bn: '১৬০ kA peak' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'I_make = 2.55 · I_break,sym = 2.55 · 40 kA = 102.0 kA peak.',
        hi: 'I_make = 2.55 * 40 kA = 102.0 kA peak।',
        bn: 'I_make = ২.৫৫ * ৪০ kA = ১০২.০ kA peak।'
      }
    }
  ]
};
