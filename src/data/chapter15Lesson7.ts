import { Lesson } from '../types';

export const LESSON_ELECTRICAL_ISOLATION: Lesson = {
  id: 'lsn-ch15-electrical-isolation',
  topicId: 'tp-electrical-isolation',
  chapterId: 'ch-electrical-safety',
  order: 7,
  title: {
    en: 'Electrical Isolation',
    hi: 'विद्युत पृथक्करण (आइसोलेशन)',
    bn: 'বৈদ্যুতিক আইসোলেশন'
  },
  description: {
    en: 'Rigorous engineering standards for electrical isolation: difference between off-load isolators and load-break switches, the 5 Golden Safety Rules (EN 50110-1 / OSHA 1910.147), Lockout/Tagout (LOTO) protocols, three-point voltage verification (Live-Dead-Live method using proving units), capacitive residual discharge, and portable safety earthing.',
    hi: 'विद्युत पृथक्करण (आइसोलेशन) के कठोर इंजीनियरिंग मानक: ऑफ-लोड आइसोलेटर और लोड-ब्रेक स्विच के बीच अंतर, 5 स्वर्णिम सुरक्षा नियम (EN 50110-1 / OSHA), लॉकआउट/टैगआउट (LOTO) प्रोटोकॉल, तीन-बिंदु वोल्टेज सत्यापन (प्रूविंग यूनिट के साथ लाइव-डेड-लाइव विधि), अवशिष्ट धारिता डिस्चार्ज और पोर्टेबल सुरक्षा अर्थिंग।',
    bn: 'বৈদ্যুতিক আইসোলেশনের কঠোর প্রকৌশল মানদণ্ড: অফ-লোড আইসোলেটর ও লোড-ব্রেক সুইচের পার্থক্য, ৫টি গোল্ডেন সেফটি রুল (EN 50110-1 / OSHA), লকআউট/ট্যাগআউট (LOTO) নিয়মাবলী, থ্রি-পয়েন্ট ভোল্টেজ যাচাইকরণ (প্রুভিং ইউনিট সহযোগে লাইভ-ডেড-লাইভ পদ্ধতি), ধারকীয় অবশিষ্ট চার্জ ক্ষরণ এবং বহনযোগ্য নিরাপত্তা আর্থিং।'
  },
  estimatedMinutes: 40,
  easyExplanation: {
    en: 'Electrical Isolation means physically and visibly disconnecting a piece of machinery or an electrical circuit from ALL sources of electrical energy so that technicians can work on it with 100% safety. Simply turning off a light switch or pressing "STOP" on a machine is NOT isolation—a computer glitch, someone tripping the switch, or a leaky semiconductor could re-energize the wires while someone is touching them! True electrical isolation follows the strict "5 Golden Safety Rules": (1) Open the isolator switch completely. (2) Lock it in the open position with your personal padlock (Lockout/Tagout - LOTO) so no one else can switch it on. (3) Prove that the circuit is 100% dead using a calibrated voltage detector (testing on a known live voltage source before and after: the "Live-Dead-Live" test). (4) Discharge any stored energy and apply portable grounding clamps so if power is accidentally applied, it blows the upstream fuse instantly rather than shocking the worker. (5) Place insulating barriers over any nearby live terminals.',
    hi: 'विद्युत पृथक्करण (आइसोलेशन) का अर्थ है किसी मशीन या सर्किट को बिजली के सभी स्रोतों से भौतिक और दृश्य रूप से इस तरह अलग करना कि तकनीशियन 100% सुरक्षित होकर काम कर सके। केवल दीवार के स्विच को बंद करना या मशीन का "STOP" बटन दबाना आइसोलेशन नहीं है—कोई अन्य व्यक्ति गलती से स्विच चालू कर सकता है या ऑटोमेशन में खराबी से करंट आ सकता है! वास्तविक आइसोलेशन "5 स्वर्णिम सुरक्षा नियमों" का पालन करता है: (1) आइसोलेटर स्विच को पूरी तरह खोलें। (2) उस पर अपना निजी ताला लगाएं और डेंजर टैग लगाएं (LOTO) ताकि कोई उसे ऑन न कर सके। (3) वोल्टेज डिटेक्टर से जांचें कि सर्किट पूरी तरह मृत (डेड) है—इसके लिए "लाइव-डेड-लाइव" (जाँचने से पहले और बाद में मीटर को टेस्ट करना) परीक्षण करें। (4) अवशिष्ट बिजली को डिस्चार्ज करें और सुरक्षा अर्थिंग लगाएं। (5) पास के अन्य तारों को रबर की चादर से ढकें।',
    bn: 'বৈদ্যুতিক আইসোলেশন বলতে বোঝায় কোনো যন্ত্রপাতি বা সার্কিটকে শক্তির সকল উৎস থেকে দৃশ্যমান ও শারীরিকভাবে এমনভাবে বিচ্ছিন্ন করা যাতে কর্মীরা শতভাগ নিরাপদে কাজ করতে পারেন। সাধারণ সুইচ অফ করা বা মেশিনের "STOP" বাটন চাপা কখনোই আইসোলেশন নয়—অন্য কেউ ভুলবশত সুইচ তুলে দিতে পারে বা রিমোট কমান্ডে বিদ্যুৎ চলে আসতে পারে! প্রকৃত আইসোলেশনে "৫টি গোল্ডেন সেফটি রুল" মানতে হয়: (১) আইসোলেটর সম্পূর্ণ খোলা। (২) ব্যক্তিগত তালা ও ডেঞ্জার ট্যাগ লাগিয়ে সুইচটি অফ পজিশনে লক করা (LOTO)। (৩) প্রুভিং ইউনিট সহযোগে "লাইভ-ডেড-লাইভ" পদ্ধতিতে ভোল্টেজ শূন্য কি না তা সুনির্দিষ্টভাবে পরীক্ষা করা। (৪) সঞ্চিত ক্যাপাসিটিভ চার্জ ডিসচার্জ করা এবং গ্রাউন্ডিং রড দিয়ে লাইন সাময়িকভাবে আর্থিং করা। (৫) পাশের কোনো তারে কারেন্ট থাকলে তা ইনসুলেটিং শিট দিয়ে ঢেকে রাখা।'
  },
  detailedExplanation: {
    en: 'Electrical isolation is an absolute prerequisite for safe electrical maintenance according to international standards (EN 50110-1, NFPA 70E, OSHA 1910.147, and IS 5216):\n\n1. Isolator (Disconnector) vs Circuit Breaker:\n• Circuit Breaker: Designed to interrupt heavy fault currents (e.g., 10 kA to 50 kA) under load. However, the contact gap is small and housed inside sealed arc chutes, meaning it does NOT guarantee safe dielectric clearance or a visible break for human work.\n• Isolator (Disconnector): A mechanical switching device that provides, in the open position, an isolating distance satisfying specified dielectric withstand requirements (visible air gap or certified micro-switch interlock). Crucially, an isolator is an OFF-LOAD device: it has no arc chutes and cannot extinguish load currents. Opening an isolator under full load creates a catastrophic phase-to-phase arc flash explosion! The circuit breaker must always be opened FIRST, and the isolator opened SECOND.\n\n2. The 5 Golden Safety Rules (EN 50110-1):\nRule 1: Disconnect completely (Separate all poles and phases from incoming supplies).\nRule 2: Secure against re-connection (Apply personal padlocks and Danger Tags to prevent inadvertent energization).\nRule 3: Verify the absence of operating voltage (Test-before-touch with an approved two-pole voltage detector).\nRule 4: Carry out earthing and short-circuiting (Discharge stored charge and connect phases to earth using rated portable earthing clamps).\nRule 5: Provide protection against adjacent live parts (Erect physical barriers, insulating shrouds, or warning tape around neighboring energized gear).\n\n3. The "Live-Dead-Live" Three-Point Voltage Test:\nA voltage tester can fail internally (e.g., dead battery, broken internal lead, blown fuse). Touching a circuit with a defective meter could falsely show "0.0 V", leading to fatal electrocution! The mandatory protocol:\n• Step 1 (Live): Test the meter against a certified electronic Proving Unit (or known live 230 V socket) to verify that the display and LEDs light up.\n• Step 2 (Dead): Test between all phase conductors, neutral, and earth on the isolated circuit to verify zero volts (L1-L2, L2-L3, L3-L1, L1-N, L2-N, L3-N, L1-PE, L2-PE, L3-PE, N-PE).\n• Step 3 (Live): Immediately re-test the meter against the proving unit to prove that the meter did not fail during the test.',
    hi: 'अंतरराष्ट्रीय मानकों (EN 50110-1, OSHA, IS 5216) के अनुसार विद्युत पृथक्करण के मुख्य सिद्धांत:\n\n1. आइसोलेटर बनाम सर्किट ब्रेकर:\n• सर्किट ब्रेकर: भारी फॉल्ट करंट को लोड पर काटने के लिए बना होता है। लेकिन इसके संपर्क सीलबंद होते हैं और कोई दृश्य अंतर (air gap) नहीं दिखता।\n• आइसोलेटर (Disconnector): एक मैकेनिकल स्विच जो पूरी तरह खुली स्थिति में दृश्यमान सुरक्षित वायु अंतराल (Air Gap) प्रदान करता है। यह एक ऑफ-लोड (Off-Load) उपकरण है। इसे चालू लोड पर कभी नहीं खोलना चाहिए, अन्यथा भयानक आर्क फ्लैश विस्फोट हो जाएगा! हमेशा पहले ब्रेकर बंद करें, फिर आइसोलेटर खोलें।\n\n2. 5 स्वर्णिम सुरक्षा नियम (EN 50110-1):\n1. पूरी तरह डिस्कनेक्ट करें (Disconnect completely)।\n2. दोबारा चालू होने से रोकें (Secure against re-connection - ताला और टैग लगाएं)।\n3. वोल्टेज की अनुपस्थिति सत्यापित करें (Verify absence of voltage)।\n4. अर्थिंग और शॉर्ट-सर्किट करें (Earthing and short-circuiting)।\n5. पास के जीवित भागों से सुरक्षा प्रदान करें (Protection against adjacent live parts)।\n\n3. तीन-बिंदु "लाइव-डेड-लाइव" परीक्षण विधि:\nमल्टीमीटर का तार टूटा होने पर वह गलत "0 V" दिखा सकता है जिससे मौत हो सकती है। अतः:\n• चरण 1 (लाइव): मीटर को पहले प्रूविंग यूनिट (जीवित स्रोत) पर जांचें।\n• चरण 2 (डेड): कार्य स्थल के सभी तारों के बीच शून्य वोल्टेज जांचें।\n• चरण 3 (लाइव): मीटर को दोबारा प्रूविंग यूनिट पर जांचें ताकि पुष्टि हो सके कि मीटर ठीक है।',
    bn: 'আন্তর্জাতিক মানদণ্ড (EN 50110-1, OSHA, IS 5216) অনুসারে নিরাপদ আইসোলেশনের বৈজ্ঞানিক কাঠামো:\n\n১. আইসোলেটর বনাম সার্কিট ব্রেকার:\n• সার্কিট ব্রেকার: লোড চলাকালীন শর্ট সার্কিট বিচ্ছিন্ন করতে পারে, কিন্তু এর কন্টাক্ট আবদ্ধ চেম্বারে থাকায় দৃশ্যমান ফাঁকা স্থান দেখা যায় না।\n• আইসোলেটর: এটি একটি অফ-লোড মেকানিক্যাল সুইচ যা উন্মুক্ত অবস্থায় নিশ্চিত ডাইইলেক্ট্রিক এয়ার গ্যাপ তৈরি করে। এতে কোনো আর্ক নেভানোর চুট থাকে না। লোড চলাকালীন আইসোলেটর খুললে মারাত্মক প্লাজমা বিস্ফোরণ ঘটবে! তাই সর্বদা আগে ব্রেকার অফ করতে হয়, তারপর আইসোলেটর খুলতে হয়।\n\n২. ৫টি গোল্ডেন সেফটি রুল (EN 50110-1):\n১. সম্পূর্ণ সংযোগ বিচ্ছিন্ন করা (Disconnect completely)।\n২. পুনরায় সংযোগ রোধে লক ও ট্যাগ লাগানো (Secure against re-connection - LOTO)।\n৩. ভোল্টেজ অনুপস্থিতি নিশ্চিত করা (Verify absence of voltage)।\n৪. আর্থিং ও শর্ট-সার্কিটিং নিশ্চিত করা (Earthing and short-circuiting)।\n৫. পাশের উন্মুক্ত লাইভ যন্ত্র ঢেকে রাখা (Protection against adjacent live parts)।\n\n৩. "লাইভ-ডেড-লাইভ" থ্রি-পয়েন্ট ভোল্টেজ পরীক্ষা:\nমিটারের ব্যাটারি নষ্ট বা তার কাটা থাকলে এটি বিভ্রান্তিকরভাবে "০.০ V" দেখাতে পারে। তাই পরম নিয়ম:\n• ধাপ ১ (লাইভ): প্রুভিং ইউনিটে মিটার ধরে ডিসপ্লে ঠিক আছে কি না নিশ্চিত করা।\n• ধাপ ২ (ডেড): কর্মস্থলের ফেজ-ফেজ, ফেজ-নিউট্রাল ও ফেজ-আর্থের মধ্যে শূন্য ভোল্টেজ পরীক্ষা করা।\n• ধাপ ৩ (লাইভ): সাথে সাথে পুনরায় প্রুভিং ইউনিটে মিটার পরীক্ষা করে নিশ্চিত করা যে মিটারটি টেস্টের সময় নষ্ট হয়নি।'
  },
  formulas: [
    {
      id: 'f-capacitive-discharge-decay',
      symbol: 'V_c(t)',
      expression: 'V_c(t) = V_0 \cdot e^{-\frac{t}{R \cdot C}}',
      title: {
        en: 'Capacitive Stored Energy Voltage Decay',
        hi: 'संधारित्र संचित ऊर्जा वोल्टेज क्षय',
        bn: 'ক্যাপাসিটরে সঞ্চিত শক্তির ভোল্টেজ ক্ষয় সমীকরণ'
      },
      description: {
        en: 'Calculates the exponential decay of dangerous trapped DC voltage across isolated power cables, power factor correction capacitor banks, or DC bus capacitors through discharge resistors.',
        hi: 'डिस्चार्ज प्रतिरोधकों के माध्यम से अलग किए गए बिजली केबलों, कैपेसिटर बैंकों या डीसी बस कैपेसिटर पर खतरनाक वोल्टेज के क्षय की गणना करता है।',
        bn: 'ডিসচার্জ রেজিস্টরের মাধ্যমে ক্যাবল বা পাওয়ার ফ্যাক্টর ক্যাপাসিটর ব্যাংকে আটকে থাকা বিপজ্জনক ডিসি ভোল্টেজের হ্রাস গণনা করে।'
      },
      variables: [
        { symbol: 'V_c(t)', name: { en: 'Residual capacitor voltage at time t (V)', hi: 'समय t पर अवशिष्ट वोल्टेज (V)', bn: 't সময়ে অবশিষ্ট ভোল্টেজ (V)' } },
        { symbol: 'V_0', name: { en: 'Peak voltage prior to isolation (V)', hi: 'आइसोलेशन से पहले का शिखर वोल्टेज (V)', bn: 'বিচ্ছিন্নকরণের পূর্বে পিক ভোল্টেজ (V)' } },
        { symbol: 'R', name: { en: 'Discharge bleeding resistance (Ω)', hi: 'डिस्चार्ज प्रतिरोध (Ω)', bn: 'ডিসচার্জ রোধের মান (Ω)' } },
        { symbol: 'C', name: { en: 'Total bank capacitance (F or µF)', hi: 'कुल धारिता (F या µF)', bn: 'মোট ক্যাপাসিট্যান্স (F বা µF)' } },
        { symbol: 't', name: { en: 'Elapsed discharge time (s)', hi: 'बीता हुआ डिस्चार्ज समय (s)', bn: 'অতিক্রান্ত সময় (s)' } }
      ]
    },
    {
      id: 'f-loto-safe-clearance-boundary',
      symbol: 'D_{clear}',
      expression: 'D_{\text{clearance}} \ge D_{\text{air}} + \Delta_{\text{ergonomic}}',
      title: {
        en: 'Minimum Safe Working Electrical Distance (OSHA / NFPA 70E)',
        hi: 'न्यूनतम सुरक्षित कार्य दूरी (NFPA 70E)',
        bn: 'ন্যূনতম নিরাপদ বৈদ্যুতিক কাজের দূরত্ব (NFPA 70E)'
      },
      description: {
        en: 'Determines the minimum approach boundary distance from adjacent energized conductors when performing maintenance on an isolated circuit.',
        hi: 'अलग किए गए परिपथ पर काम करते समय पास के अन्य जीवित तारों से न्यूनतम सुरक्षित दूरी तय करता है।',
        bn: 'আইসোলেটেড লাইনে কাজ করার সময় পাশের কোনো জীবন্ত তার থাকলে তার থেকে বাধ্যতামূলক নিরাপদ দূরত্ব নির্ধারণ করে।'
      },
      variables: [
        { symbol: 'D_clearance', name: { en: 'Restricted approach boundary (m)', hi: 'प्रतिबंधित पहुंच सीमा (m)', bn: 'সীমাবদ্ধ কাজের দূরত্ব (m)' } },
        { symbol: 'D_air', name: { en: 'Dielectric breakdown flashover distance in air (m)', hi: 'वायु में परावैद्युत ब्रेकडाउन दूरी (m)', bn: 'বাতাসে ডাইইলেক্ট্রিক ব্রেকডাউন দূরত্ব (m)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch15-l07-loto-mechanics',
      title: {
        en: 'Lockout/Tagout (LOTO) Hardware and Group Lockout Protocols',
        hi: 'लॉकआउट/टैगआउट (LOTO) उपकरण एवं सामूहिक लॉकआउट प्रोटोकॉल',
        bn: 'লকআউট/ট্যাগআউট (LOTO) সরঞ্জাম ও দলগত লকআউটের নিয়মাবলী'
      },
      content: {
        en: 'Lockout/Tagout (OSHA 29 CFR 1910.147) guarantees that machinery cannot be energized while human personnel are inside danger zones:\n\n1. Primary Hardware Components:\n• Safety Padlocks: Non-conductive nylon body with hardened steel shackles. Key-retaining design ensures the key cannot be removed while the padlock is unlocked. Every worker possesses a dedicated, individually keyed padlock (Master keys are strictly prohibited during operational maintenance).\n• Lockout Hasps (Multi-Lock Clasp): When multiple technicians work on the same equipment, a steel hasp is fitted through the switch handle. Up to 6 padlocks can be attached. The switch cannot be closed until the LAST technician finishes work and removes their personal padlock.\n• Cable and Breaker Lockouts: Clamping attachments that physically immobilize miniature circuit breaker toggles and rotary switch handles.\n• Danger Tags: Weather-resistant, tear-proof tags displaying the technician’s name, photograph, department, date, and reason for isolation with standardized bold wording: "DANGER: DO NOT OPERATE - MEN WORKING ON LINE".\n\n2. Stored Energy Hazards (Capacitors, Inductors, Springs):\nIsolation is NOT merely opening electrical contacts. Electrical systems store trapped kinetic and electromagnetic energy: power factor capacitor banks store dangerous charges for minutes; VFD DC bus capacitors retain 600-800 V DC; high-voltage cables have high capacitance. Discharge rods with current-limiting ceramic resistors must be applied to bleed trapped charges to earth before physical touch.',
        hi: 'लॉकआउट/टैगआउट (OSHA 1910.147) यह सुनिश्चित करता है कि जब कर्मचारी मशीन के अंदर हों, तो मशीन किसी भी हाल में चालू न हो सके:\n\n1. मुख्य LOTO उपकरण:\n• सेफ्टी पैडलॉक (ताले): नायलॉन बॉडी वाले विशेष ताले। इनकी चाबी केवल संबंधित तकनीशियन के पास होती है। मास्टर चाबी का उपयोग पूरी तरह प्रतिबंधित है।\n• लॉकआउट हैस्प (Hasp): जब कई कर्मचारी एक साथ काम करते हैं, तो स्विच पर एक हैस्प लगाया जाता है जिसमें 6 अलग-अलग ताले लग सकते हैं। जब तक अंतिम कर्मचारी अपना ताला नहीं हटाता, स्विच चालू नहीं हो सकता।\n• सर्किट ब्रेकर लॉकआउट: MCB के स्विच को बंद स्थिति में कसकर बांधने वाले क्लैंप।\n• डेंजर टैग: कर्मचारी का नाम, फोटो, मोबाइल नंबर और तारीख के साथ स्पष्ट चेतावनी: "खतरा: चालू न करें - लाइन पर काम चल रहा है"।\n\n2. संचित ऊर्जा (Stored Energy) का खतरा:\nकेवल स्विच बंद करना पर्याप्त नहीं है। कैपेसिटर और लंबी केबलों में 600-800 V DC का जानलेवा करंट कई मिनटों तक फंसा रह सकता है। अतः काम शुरू करने से पहले अर्थिंग डिस्चार्ज रॉड से सभी संचित आवेश को जमीन में बहाना (डिस्चार्ज करना) अनिवार्य है।',
        bn: 'লকআউট/ট্যাগআউট (OSHA 1910.147) নিশ্চিত করে যে কর্মীরা বিপদজনক এলাকায় কাজ করার সময় কোনো অবস্থাতেই মেশিন চালু হতে পারবে না:\n\n১. এলওটিও (LOTO) এর প্রধান সরঞ্জাম:\n• সেফটি প্যাডলক (নিরাপত্তা তালা): বিশেষ নাইলন বডির তালা। প্রতিটি কর্মীর নিজস্ব একক চাবি থাকে (মাস্টার চাবি সম্পূর্ণ নিষিদ্ধ)।\n• মাল্টিপল হ্যাস্প (Hasp): একাধিক কর্মী একসাথে কাজ করলে সুইচের হাতলে একটি হ্যাস্প লাগানো হয় যাতে ৬টি পর্যন্ত তালা লাগানো যায়। শেষ কর্মী কাজ শেষ করে তালা না খোলা পর্যন্ত মেশিন চালু করা অসম্ভব।\n• সার্কিট ব্রেকার লকআউট: এমসিবির নবকে অফ অবস্থায় আটকে রাখার জন্য ক্ল্যাম্পিং লক।\n• ডেঞ্জার ট্যাগ: কর্মীর নাম, ছবি ও ফোন নম্বরসহ সুস্পষ্ট সতর্কবার্তা: "বিপদ: লাইন চালু করবেন না - কাজ চলছে"।\n\n২. সঞ্চিত শক্তির (Stored Energy) ঝুঁকি:\nশুধু সুইচ বন্ধ করাই যথেষ্ট নয়। পাওয়ার ফ্যাক্টর ক্যাপাসিটর ও ভিএফডি ড্রাইভের ক্যাপাসিটরে ৬০০-৮০০ ভোল্ট ডিসি বহু সময় জমে থাকে। তাই কাজ শুরুর আগে ডিসচার্জ রড দিয়ে সঞ্চিত চার্জ মাটিতে গ্রাউন্ড করে মুক্ত করতে হয়।'
      },
      schematicId: 'circuit-ch15-isolation-loto-procedure'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch15-l07-01',
      problem: {
        en: 'A three-phase 415 V industrial capacitor bank has a star-connected capacitance of C = 150 µF per phase. Prior to maintenance, the bank is isolated from the mains at the peak of the voltage waveform (V0 = 415 · √2 / √3 ≈ 338.8 V DC trapped per phase). Each phase has an internal discharge resistor of R = 100 kΩ.\n(a) Calculate the circuit time constant τ = R · C.\n(b) Using V(t) = V0 · e^(-t/τ), calculate the residual DC voltage remaining across the capacitor after 30 seconds.\n(c) Determine whether the capacitor has discharged below the international safe touch threshold (≤ 50 V DC per IEC 60831) after 30 seconds.',
        hi: 'एक थ्री-फेज 415 V इंडस्ट्रियल कैपेसिटर बैंक में प्रति फेज C = 150 µF की धारिता है। रखरखाव से पहले, बैंक को पीक वोल्टेज (V0 = 338.8 V DC) पर अलग कर दिया जाता है। प्रत्येक फेज में R = 100 kΩ का आंतरिक डिस्चार्ज प्रतिरोधक है।\n(a) परिपथ समय स्थिरांक τ = R · C की गणना कीजिए।\n(b) V(t) = V0 · e^(-t/τ) का उपयोग करके 30 सेकंड के बाद अवशिष्ट वोल्टेज की गणना कीजिए।\n(c) निर्धारित कीजिए कि क्या 30 सेकंड बाद वोल्टेज सुरक्षित स्पर्श सीमा (≤ 50 V DC) से नीचे आ गया है।',
        bn: 'একটি ৪১৫ V থ্রি-ফেজ ক্যাপাসিটর ব্যাংকে প্রতি ফেজে C = ১৫০ µF ক্যাপাসিট্যান্স রয়েছে। পিক ভোল্টেজে (V0 = ৩৩৮.৮ V) লাইন বিচ্ছিন্ন করার পর প্রতি ফেজের R = ১০০ kΩ ডিসচার্জ রেজিস্টর দিয়ে চার্জ ক্ষরণ হতে থাকে।\n(a) সার্কিট টাইম কনস্ট্যান্ট τ = R · C নির্ণয় করুন।\n(b) ৩০ সেকেন্ড পর ক্যাপাসিটরে অবশিষ্ট ভোল্টেজ কত থাকবে?\n(c) ৩০ সেকেন্ড পর ভোল্টেজ কি নিরাপদ স্পর্শ সীমার (≤ ৫০ V DC) নিচে নেমেছে?'
      },
      solution: {
        en: 'Given:\n• Initial peak voltage (V0) = 338.8 V DC\n• Capacitance (C) = 150 µF = 150 × 10^(-6) F\n• Discharge resistance (R) = 100 kΩ = 100 × 10^3 Ω = 10^5 Ω\n• Discharge time (t) = 30 s\n\nStep 1: Calculate Time Constant (τ)\nτ = R · C = (100,000 Ω) · (0.000150 F) = 15.0 seconds\n\nStep 2: Calculate Residual Voltage V(30 s)\nExponent ratio = t / τ = 30 / 15.0 = 2.0\nDecay factor = e^(-2.0) ≈ 0.135335\nV(30 s) = V0 · e^(-2.0) = 338.8 V · 0.135335 ≈ 45.85 V DC\n\nStep 3: Safety Compliance Evaluation\n• Standard safe touch voltage threshold = 50 V DC\n• Actual residual voltage after 30 s = 45.85 V DC\nBecause 45.85 V < 50 V, the bank satisfies the safety threshold within 30 seconds. However, best engineering practice still mandates applying a grounding discharge hook before touching the terminals!',
        hi: 'चरण 1: समय स्थिरांक (τ)\nτ = R × C = 100,000 × 0.000150 = 15.0 सेकंड\n\nचरण 2: 30 सेकंड बाद वोल्टेज\nt / τ = 30 / 15 = 2.0\ne^(-2.0) = 0.1353\nV(30 s) = 338.8 × 0.1353 = 45.85 V DC\n\nचरण 3: निष्कर्ष\n45.85 V मान 50 V की सुरक्षित सीमा से कम है। अतः 30 सेकंड बाद यह सुरक्षित सीमा में आ जाता है। फिर भी हाथ लगाने से पहले अर्थिंग हुक लगाना अनिवार्य है।',
        bn: 'ধাপ ১: টাইম কনস্ট্যান্ট নির্ণয়\nτ = R × C = ১০০,০০০ × ০.০০০১৫০ = ১৫.০ সেকেন্ড\n\nধাপ ২: ৩০ সেকেন্ড পর অবশিষ্ট ভোল্টেজ\nt / τ = ৩০ / ১৫ = ২.০\ne^(-২) = ০.১৩৫৩\nV(৩০ s) = ৩৩৮.৮ × ০.১৩৫৩ = ৪৫.৮৫ V DC\n\nধাপ ৩: নিরাপত্তা মূল্যায়ন\nযেহেতু ৪৫.৮৫ V < ৫০ V, তাই ৩০ সেকেন্ড পর এটি নিরাপদ স্পর্শ সীমার নিচে নেমে আসে। তথাপি কাজে হাত দেওয়ার আগে ডিসচার্জ রড ছোঁয়ানো আবশ্যক।'
      },
      givenValues: { 'V0': '338.8 V', 'C': '150 µF', 'R': '100 kΩ', 't': '30 s' },
      finalAnswer: {
        en: 'Time constant τ = 15.0 s; Residual voltage V(30 s) ≈ 45.9 V DC. It drops below the 50 V safety limit after 30 seconds.',
        hi: 'समय स्थिरांक τ = 15.0 s; अवशिष्ट वोल्टेज ≈ 45.9 V DC। यह 30 सेकंड बाद 50 V सुरक्षा सीमा से नीचे आ जाता है।',
        bn: 'টাইম কনস্ট্যান্ট τ = ১৫.০ সেকেন্ড; অবশিষ্ট ভোল্টেজ ≈ ৪৫.৯ V DC। ৩০ সেকেন্ড পর এটি ৫০ V নিরাপদ সীমার নিচে নামে।'
      }
    },
    {
      id: 'ex-ch15-l07-02',
      problem: {
        en: 'A maintenance team of 4 electrical technicians (lead engineer, winder, fitter, apprentice) is scheduled to overhaul a 400 kW motor control panel. Explain the exact Lockout/Tagout (LOTO) group locking procedure required using a multi-lock hasp, and calculate the minimum number of personal padlocks that must be attached before work can commence.',
        hi: '4 तकनीशियनों की टीम को 400 kW मोटर कंट्रोल पैनल की मरम्मत करनी है। मल्टी-लॉक हैस्प का उपयोग करके आवश्यक LOTO ग्रुप लॉकिंग प्रक्रिया समझाइए, और काम शुरू करने से पहले लगाए जाने वाले व्यक्तिगत पैडलॉक की न्यूनतम संख्या की गणना कीजिए।',
        bn: '৪ জন কর্মীর একটি দল ৪০০ kW মোটর কন্ট্রোল প্যানেল মেরামতের কাজ করবে। মাল্টি-লক হ্যাস্প ব্যবহার করে সঠিক LOTO পদ্ধতি ব্যাখ্যা করুন এবং কাজ শুরুর আগে কমপক্ষে কয়টি ব্যক্তিগত তালা লাগাতে হবে তা নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n• Number of technicians working concurrently = 4\n\nStep 1: Isolation and De-energization\nThe lead engineer confirms the circuit breaker is racked out/opened, and opens the mechanical isolator switch.\n\nStep 2: Multi-Lock Hasp Attachment\nA certified heavy-duty steel lockout hasp is threaded through the operating handle of the isolator switch.\n\nStep 3: Individual Padlock Application (OSHA Rule: One Person, One Lock, One Key)\nEach of the 4 workers MUST personally attach their own uniquely keyed safety padlock onto one of the hasp holes:\n• Padlock 1: Lead Engineer + Danger Tag\n• Padlock 2: Motor Winder + Danger Tag\n• Padlock 3: Mechanical Fitter + Danger Tag\n• Padlock 4: Apprentice + Danger Tag\nTotal Padlocks Required = 4 padlocks minimum.\n\nStep 4: Key Possession & Security\nEach technician keeps their own key in their pocket throughout the shift. Under no circumstances may a worker lend their key or allow someone else to remove their padlock. The isolator switch cannot be closed until ALL 4 padlocks are removed at the end of the shift.',
        hi: 'चरण 1: आइसोलेटर को बंद करना और उस पर स्टील हैस्प (Hasp) लगाना।\n\nचरण 2: ताले लगाना (एक व्यक्ति, एक ताला, एक चाबी नियम):\nप्रत्येक कर्मचारी को हैस्प के छिद्रों में अपना व्यक्तिगत ताला और टैग लगाना होगा:\n1. लीड इंजीनियर का ताला\n2. मोटर वाइंडर का ताला\n3. फिटर का ताला\n4. अप्रेंटिस का ताला\nकुल आवश्यक ताले = 4 ताले।\n\nचरण 3: चाबी प्रबंधन\nसभी 4 कर्मचारी अपनी चाबी अपनी जेब में रखेंगे। जब तक चारों कर्मचारी काम पूरा करके अपना ताला नहीं खोलते, तब तक स्विच चालू नहीं किया जा सकता।',
        bn: 'ধাপ ১: লাইন বন্ধ করে আইসোলেটর সুইচে স্টিল হ্যাস্প (Hasp) স্থাপন।\n\nধাপ ২: তালা লাগানো (এক কর্মী, এক তালা, এক চাবি নিয়ম):\nপ্রত্যেক কর্মীকে হ্যাস্পের পৃথক ছিদ্রে নিজের তালা ও ডেঞ্জার ট্যাগ লাগাতে হবে:\n১. চিফ ইঞ্জিনিয়ারের তালা\n২. ওয়াইন্ডারের তালা\n৩. ফিটারের তালা\n৪. শিক্ষানবিসের তালা\nমোট প্রয়োজনীয় তালা = ৪টি।\n\nধাপ ৩: চাবির নিয়ন্ত্রণ\nপ্রতিটি কর্মী তার চাবি নিজের পকেটে রাখবেন। চারজন কর্মীই কাজ শেষ করে তালা না খোলা পর্যন্ত মেশিন কোনোভাবেই চালু করা যাবে না।'
      },
      givenValues: { 'Technicians': '4' },
      finalAnswer: {
        en: 'A minimum of 4 distinct personal safety padlocks and danger tags must be attached to the multi-lock hasp (one per worker).',
        hi: 'मल्टी-लॉक हैस्प पर न्यूनतम 4 अलग-अलग व्यक्तिगत सुरक्षा ताले और डेंजर टैग लगाए जाने चाहिए (प्रति कर्मचारी एक)।',
        bn: 'মাল্টি-লক হ্যাস্পে কমপক্ষে ৪টি পৃথক ব্যক্তিগত সেফটি তালা ও ডেঞ্জার ট্যাগ লাগাতে হবে (কর্মী প্রতি একটি)।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Substation maintenance isolation: opening busbar disconnectors after tripping circuit breakers to provide certified visual air clearance.',
      'Industrial plant shutdown LOTO management using lockout stations, lock boxes, and master permit-to-work (PTW) documentation.',
      'Three-point voltage verification testing of high-power distribution switchboards prior to internal busbar re-torquing.',
      'Applying portable earthing leads (grounding clusters) to overhead transmission lines to protect line-workers from induced voltages and inadvertent re-energization.'
    ],
    hi: [
      'सबस्टेशन रखरखाव: सर्किट ब्रेकर ट्रिप करने के बाद दृश्यमान वायु अंतराल बनाने के लिए बसबार आइसोलेटर खोलना।',
      'कारखानों में प्लांट शटडाउन के दौरान परमिट-टू-वर्क (PTW) और LOTO लॉक बॉक्स का सख्त पालन।',
      'बसबार पर काम करने से पहले तीन-बिंदु (लाइव-डेड-लाइव) वोल्टेज परीक्षण करना।',
      'ट्रांसमिशन लाइनों पर काम करते समय प्रेरित वोल्टेज से बचने के लिए पोर्टेबल अर्थिंग क्लैंप लगाना।'
    ],
    bn: [
      'সাবস্টেশনে মেইনটেন্যান্সের পূর্বে ব্রেকার অফ করে দৃশ্যমান নিরাপদ ফাঁক তৈরির জন্য আইসোলেটর খোলা।',
      'শিল্প কারখানায় পারমিট-টু-ওয়ার্ক (PTW) ও এলওটিও লক বক্সের মাধ্যমে সামগ্রিক নিরাপত্তা নিশ্চিতকরণ।',
      'প্যানেলে কাজ শুরুর আগে থ্রি-পয়েন্ট লাইভ-ডেড-লাইভ ভোল্টেজ পরীক্ষার কঠোর প্রয়োগ।',
      'ওভারহেড সঞ্চালন লাইনে কাজ করার সময় আবেশিত ভোল্টেজ প্রতিরোধে পোর্টেবল আর্থিং ক্লাস্টার সংযুক্তকরণ।'
    ]
  },
  importantPoints: {
    en: [
      'An isolator is strictly an OFF-LOAD device; opening an isolator under load produces an explosive arc flash.',
      'The 5 Golden Safety Rules: Disconnect, Lock against reconnection, Verify dead state, Earth & short-circuit, Shield adjacent live parts.',
      'Always use the "Live-Dead-Live" 3-point test with an approved proving unit to ensure your voltage tester has not failed internally.',
      'In LOTO, every individual worker must apply their own padlock; "one person, one lock, one key" is non-negotiable.',
      'Beware of trapped capacitive charges in power factor correction banks, DC busbars, and long cables; always discharge to ground before touching.'
    ],
    hi: [
      'आइसोलेटर पूरी तरह ऑफ-लोड उपकरण है; लोड पर आइसोलेटर खोलने से भयानक आर्क फ्लैश धमाका होता है।',
      '5 स्वर्णिम सुरक्षा नियम: बिजली काटना, ताला लगाना, शून्य वोल्टेज जाँचना, अर्थिंग करना, और पास के तारों को ढकना।',
      'वोल्टेज टेस्टर की जांच के लिए हमेशा "लाइव-डेड-लाइव" तीन-बिंदु परीक्षण विधि अपनाएं।',
      'LOTO में "एक व्यक्ति, एक ताला, एक चाबी" का नियम अनिवार्य है।',
      'कैपेसिटर और लंबी केबलों में फंसे अवशिष्ट चार्ज से सावधान रहें; छूने से पहले उन्हें हमेशा अर्थ करके डिस्चार्ज करें।'
    ],
    bn: [
      'আইসোলেটর একটি অফ-লোড ডিভাইস; লোড চলাকালে আইসোলেটর খুললে বিধ্বংসী আর্ক ফ্ল্যাশ বিস্ফোরণ ঘটে।',
      '৫টি গোল্ডেন সেফটি রুল: লাইন বিচ্ছিন্নকরণ, লকআউট, ভোল্টেজ শূন্যতা যাচাই, আর্থিং ও শর্ট-সার্কিট, এবং পাশের অংশ ঢেকে রাখা।',
      'ভোল্টেজ টেস্টার নষ্ট কি না নিশ্চিত হতে সর্বদা প্রুভিং ইউনিট সহযোগে "লাইভ-ডেড-লাইভ" থ্রি-পয়েন্ট পরীক্ষা করুন।',
      'এলওটিওতে "এক কর্মী, একটি তালা, একটি চাবি" নীতি অলঙ্ঘনীয়।',
      'ক্যাপাসিটর ও দীর্ঘ ক্যাবলের সঞ্চিত চার্জ স্পর্শ করার আগেই ডিসচার্জ রড দিয়ে গ্রাউন্ড করা বাধ্যতামূলক।'
    ]
  },
  commonMistakes: {
    en: [
      'Opening an isolator switch before tripping the associated circuit breaker, causing an instantaneous arc flash explosion.',
      'Trusting an untested digital multimeter that displays 0.0 V due to a blown internal fuse or dead battery.',
      'Allowing one supervisor to place a single padlock for an entire team of workers; if the supervisor unlocks early, remaining workers can be electrocuted.',
      'Assuming that switching off an upstream wall switch discharges power factor correction capacitors.'
    ],
    hi: [
      'सर्किट ब्रेकर बंद किए बिना आइसोलेटर खोल देना, जिससे भारी आर्क फ्लैश धमाका हो जाता है।',
      'बिना जांचे गए मल्टीमीटर पर भरोसा करना जो बैटरी खत्म होने के कारण गलत 0 V दिखा रहा हो।',
      'पूरी टीम के लिए केवल सुपरवाइजर का एक ताला लगाना; यदि सुपरवाइजर ने जल्दी ताला खोल दिया तो काम कर रहे कर्मचारी की जान जा सकती है।',
      'यह मान लेना कि मुख्य स्विच बंद करने से कैपेसिटर अपने आप तुरंत डिस्चार्ज हो गए हैं।'
    ],
    bn: [
      'ব্রেকার ট্রিপ না করে সরাসরি আইসোলেটর খোলা, যা ভয়াবহ আর্ক ফ্ল্যাশ বিস্ফোরণ ডেকে আনে।',
      'ত্রুটিপূর্ণ মিটারের ওপর নির্ভর করা যা ব্যাটারি নষ্ট থাকার কারণে বিভ্রান্তিকরভাবে ০ ভোল্ট প্রদর্শন করছে।',
      'পুরো দলের জন্য কেবল সুপারের একটি তালা লাগানো; সুপার আগে তালা খুলে দিলে বাকি কর্মীরা বিদ্যুৎস্পৃষ্ট হতে পারেন।',
      'মনে করা যে মেইন সুইচ অফ করলেই ক্যাপাসিটর বা ক্যাবলের চার্জ সাথে সাথে শেষ হয়ে গেছে।'
    ]
  },
  keyTakeaways: {
    en: [
      'Electrical isolation physically separates apparatus from all energy sources with certified visual clearance.',
      'The 5 Golden Safety Rules govern safe work on de-energized electrical installations worldwide.',
      'LOTO with multi-lock hasps guarantees that power cannot be restored until every single worker is safe.',
      'The Live-Dead-Live procedure using proving units is mandatory to verify an absolute zero-energy state.'
    ],
    hi: [
      'विद्युत पृथक्करण उपकरणों को सभी ऊर्जा स्रोतों से दृश्यमान और प्रमाणित वायु अंतराल के साथ अलग करता है।',
      '5 स्वर्णिम सुरक्षा नियम दुनिया भर में बिजली बंद करके सुरक्षित काम करने का आधार हैं।',
      'LOTO प्रणाली यह गारंटी देती है कि जब तक प्रत्येक कर्मचारी सुरक्षित न हो, तब तक बिजली चालू नहीं हो सकती।',
      'शून्य-ऊर्जा स्थिति सत्यापित करने के लिए प्रूविंग यूनिट के साथ लाइव-डेड-लाइव प्रक्रिया अनिवार्य है।'
    ],
    bn: [
      'বৈদ্যুতিক আইসোলেশন সমস্ত শক্তির উৎস থেকে যন্ত্রপাতির নিশ্চিত ও দৃশ্যমান বিচ্ছিন্নতা তৈরি করে।',
      '৫টি গোল্ডেন সেফটি রুল বিশ্বজুড়ে বিদ্যুৎবিহীন নিরাপদ রক্ষণাবেক্ষণের মূল ভিত্তি।',
      'এলওটিও ও মাল্টি-লক হ্যাস্প নিশ্চিত করে যে শেষ কর্মী নিরাপদ না হওয়া পর্যন্ত লাইন কিছুতেই চালু হবে না।',
      'প্রুভিং ইউনিট সহযোগে লাইভ-ডেড-লাইভ পদ্ধতি শূন্য-শক্তি অবস্থা যাচাইয়ের একমাত্র নির্ভরযোগ্য উপায়।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch15-l07-01',
      question: {
        en: 'What is the primary operational distinction between an electrical Isolator (Disconnector) and a Circuit Breaker?',
        hi: 'विद्युत आइसोलेटर (डिसकनेक्टर) और सर्किट ब्रेकर के बीच प्राथमिक परिचालन अंतर क्या है?',
        bn: 'একটি বৈদ্যুতিক আইসোলেটর এবং সার্কিট ব্রেকারের মধ্যে প্রধান কার্যকরী পার্থক্য কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'A circuit breaker can safely interrupt heavy fault currents on-load, whereas an isolator is an OFF-LOAD device providing a certified visual air gap and must never be opened under load', hi: 'सर्किट ब्रेकर लोड के तहत भारी फॉल्ट करंट को सुरक्षित रूप से काट सकता है, जबकि आइसोलेटर एक ऑफ-लोड उपकरण है जो दृश्य वायु अंतराल प्रदान करता है और इसे कभी भी लोड पर नहीं खोला जाना चाहिए', bn: 'সার্কিট ব্রেকার লোড চলাকালীন শর্ট সার্কিট বিচ্ছিন্ন করতে পারে, কিন্তু আইসোলেটর একটি অফ-লোড ডিভাইস যা দৃশ্যমান ফাঁক তৈরি করে এবং লোড চলাকালে কখনোই খোলা যায় না' } },
        { id: 'opt-2', text: { en: 'An isolator is only made of plastic, while a breaker is made of wood', hi: 'आइसोलेटर केवल प्लास्टिक का बना होता है, जबकि ब्रेकर लकड़ी का', bn: 'আইসোলেটর শুধু প্লাস্টিকের তৈরি, আর ব্রেকার কাঠের' } },
        { id: 'opt-3', text: { en: 'There is no difference; the terms are 100% interchangeable', hi: 'कोई अंतर नहीं है; दोनों शब्द पूरी तरह समान हैं', bn: 'উভয়ের মাঝে কোনো পার্থক্য নেই' } },
        { id: 'opt-4', text: { en: 'An isolator generates AC current from sunlight', hi: 'आइसोलेटर धूप से AC बिजली बनाता है', bn: 'আইসোলেটর সূর্যের আলো থেকে বিদ্যুৎ তৈরি করে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Circuit breakers have arc chutes to interrupt loaded and short-circuit currents. Isolators have no arc extinguishing medium and serve to provide a visible dielectric clearance only after the breaker is opened.',
        hi: 'सर्किट ब्रेकर लोड और फॉल्ट करंट को काटता है। आइसोलेटर में आर्क बुझाने की व्यवस्था नहीं होती और इसे केवल ब्रेकर बंद होने के बाद ऑफ-लोड खोला जाता है।',
        bn: 'সার্কিট ব্রেকার লোড ও ফল্ট কারেন্ট নিভিয়ে বিচ্ছিন্ন করতে পারে। আইসোলেটরে কোনো আর্ক নির্বাপক চুট না থাকায় এটি কেবল অফ-লোড অবস্থায় দৃশ্যমান বিচ্ছিন্নতা দেয়।'
      }
    },
    {
      id: 'mcq-ch15-l07-02',
      question: {
        en: 'What sequence of operations must be strictly followed when isolating an electrical feeder containing both a Circuit Breaker and an Isolator?',
        hi: 'सर्किट ब्रेकर और आइसोलेटर दोनों वाले विद्युत फीडर को अलग करते समय किस क्रम का सख्ती से पालन किया जाना चाहिए?',
        bn: 'সার্কিট ব্রেকার এবং আইসোলেটর উভয় সমন্বিত একটি ফিডার লাইন আইসোলেট করার সময় কোন ক্রমটি কঠোরভাবে অনুসরণ করতে হবে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Open the isolator first while under full load, then open the circuit breaker', hi: 'पूर्ण लोड पर पहले आइसोलेटर खोलें, फिर सर्किट ब्रेकर खोलें', bn: 'ফুল লোড চলাকালে প্রথমে আইসোলেটর খুলুন, তারপর সার্কিট ব্রেকার খুলুন' } },
        { id: 'opt-2', text: { en: 'Open the Circuit Breaker FIRST (to break the current), then open the Isolator SECOND (to establish a visible air gap)', hi: 'पहले सर्किट ब्रेकर खोलें (करंट काटने के लिए), फिर दूसरे स्थान पर आइसोलेटर खोलें (दृश्यमान वायु अंतराल बनाने के लिए)', bn: 'প্রথমে সার্কিট ব্রেকার অফ করুন (বিদ্যুৎ প্রবাহ বন্ধ করতে), তারপর দ্বিতীয় ধাপে আইসোলেটর খুলুন (দৃশ্যমান এয়ার গ্যাপ নিশ্চিত করতে)' } },
        { id: 'opt-3', text: { en: 'Open both simultaneously with a metal pipe', hi: 'लोहे के पाइप से दोनों को एक साथ खोलें', bn: 'লোহার পাইপ দিয়ে দুটি একসাথে খুলুন' } },
        { id: 'opt-4', text: { en: 'Leave both closed and splash water on the terminals', hi: 'दोनों को बंद रहने दें और टर्मिनलों पर पानी डालें', bn: 'উভয়টি অন রেখে টার্মিনালে জল ঢালুন' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'The circuit breaker must always interrupt the load current first so that the isolator is opened at zero current (off-load), preventing dangerous arc flash explosions.',
        hi: 'हमेशा पहले सर्किट ब्रेकर से करंट बंद करें, फिर शून्य करंट पर सुरक्षित रूप से आइसोलेटर खोलें ताकि आर्क फ्लैश विस्फोट न हो।',
        bn: 'সর্বদা প্রথমে ব্রেকার দিয়ে কারেন্ট বন্ধ করতে হবে যাতে শূন্য কারেন্টে আইসোলেটর নিরাপদে খোলা যায় এবং আর্ক বিস্ফোরণ না ঘটে।'
      }
    },
    {
      id: 'mcq-ch15-l07-03',
      question: {
        en: 'In the international "5 Golden Safety Rules" (EN 50110-1), which step comes immediately after disconnecting completely (Rule 1)?',
        hi: 'अंतरराष्ट्रीय "5 स्वर्णिम सुरक्षा नियमों" (EN 50110-1) में पूरी तरह डिस्कनेक्ट करने (नियम 1) के तुरंत बाद कौन सा कदम आता है?',
        bn: 'আন্তর্জাতিক "৫টি গোল্ডেন সেফটি রুল" (EN 50110-1) এ সম্পূর্ণ লাইন বিচ্ছিন্ন করার (নিয়ম ১) ঠিক পরেই কোন পদক্ষেপটি আসে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Rule 2: Secure against re-connection (Apply Lockout/Tagout - LOTO)', hi: 'नियम 2: दोबारा चालू होने से रोकें (लॉकआउट/टैगआउट - LOTO लगाएं)', bn: 'নিয়ম ২: পুনরায় সংযোগ রোধ করা (লকআউট/ট্যাগআউট - LOTO প্রয়োগ)' } },
        { id: 'opt-2', text: { en: 'Turn the power back on to see what happens', hi: 'यह देखने के लिए कि क्या होता है, बिजली वापस चालू करें', bn: 'কী ঘটে দেখার জন্য বিদ্যুৎ পুনরায় চালু করা' } },
        { id: 'opt-3', text: { en: 'Paint the switchboard red', hi: 'स्विचबोर्ड को लाल रंग से रंगें', bn: 'সুইচবোর্ড লাল রঙ করা' } },
        { id: 'opt-4', text: { en: 'Start touching bare conductors immediately', hi: 'तुरंत नंगे तारों को छूना शुरू करें', bn: 'তৎক্ষণাৎ খালি হাতে তার স্পর্শ করা' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Rule 2 mandates securing the isolation point against inadvertent re-energization using padlocks, lockout hasps, and warning tags.',
        hi: 'नियम 2 यह अनिवार्य करता है कि डिस्कनेक्ट करने के तुरंत बाद ताला और टैग लगाकर स्विच को लॉक किया जाए ताकि कोई अनजाने में उसे चालू न कर दे।',
        bn: 'নিয়ম ২ অনুসারে লাইন বিচ্ছিন্ন করার সাথে সাথে তালা ও ট্যাগ লাগিয়ে সুইচ লক করতে হবে যাতে কেউ ভুলবশত তা চালু করতে না পারে।'
      }
    },
    {
      id: 'mcq-ch15-l07-04',
      question: {
        en: 'What is the mandatory "Live-Dead-Live" (three-point) voltage testing protocol before touching an isolated circuit?',
        hi: 'अलग किए गए परिपथ को छूने से पहले अनिवार्य "लाइव-डेड-लाइव" (तीन-बिंदु) वोल्टेज परीक्षण प्रोटोकॉल क्या है?',
        bn: 'আইসোলেটেড সার্কিট স্পর্শ করার পূর্বে বাধ্যতামূলক "লাইভ-ডেড-লাইভ" থ্রি-পয়েন্ট ভোল্টেজ টেস্টিং প্রোটোকল কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Licking fingers and tapping the wires', hi: 'उंगलियों को गीला करके तारों को छूना', bn: 'আঙুল ভিজিয়ে তারে ছোঁয়ানো' } },
        { id: 'opt-2', text: { en: 'Testing the meter on a known live source/proving unit, then verifying zero volts on the isolated circuit, then immediately re-testing on the proving unit to verify the meter is still functional', hi: 'मीटर को ज्ञात जीवित स्रोत पर जांचना, फिर अलग किए गए परिपथ पर शून्य वोल्टेज जांचना, फिर तुरंत जीवित स्रोत पर पुनः जांचना कि मीटर अभी भी ठीक काम कर रहा है', bn: 'প্রথমে জানা লাইভ উৎসে মিটার পরীক্ষা, তারপর বিচ্ছিন্ন লাইনে শূন্য ভোল্টেজ যাচাই, এবং সাথে সাথে পুনরায় লাইভ উৎসে পরীক্ষা করে মিটারের সুস্থতা নিশ্চিতকরণ' } },
        { id: 'opt-3', text: { en: 'Looking at the wire from 10 meters away', hi: '10 मीटर दूर से तार को देखना', bn: '১০ মিটার দূর থেকে তারের দিকে তাকিয়ে থাকা' } },
        { id: 'opt-4', text: { en: 'Checking the local weather forecast', hi: 'स्थानीय मौसम की भविष्यवाणी देखना', bn: 'আবহাওয়ার খবর পরীক্ষা করা' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'The Live-Dead-Live test ensures that the meter did not fail, suffer a dead battery, or blow an internal fuse before or during the dead test, eliminating false-zero readings.',
        hi: 'यह परीक्षण सुनिश्चित करता है कि शून्य वोल्टेज दिखाने वाला मीटर वास्तव में सही काम कर रहा है और उसकी बैटरी या अंदरूनी तार खराब नहीं हैं।',
        bn: 'লাইভ-ডেড-লাইভ পরীক্ষা নিশ্চিত করে যে মিটারটি নষ্ট না হয়ে প্রকৃতপক্ষেই কাজ করছে এবং ফল্স-জিরো রিডিং দেখাচ্ছে না।'
      }
    },
    {
      id: 'mcq-ch15-l07-05',
      question: {
        en: 'In Lockout/Tagout (LOTO) protocols, what is the golden rule regarding padlocks and keys for individual workers?',
        hi: 'लॉकआउट/टैगआउट (LOTO) प्रोटोकॉल में व्यक्तिगत कर्मचारियों के लिए तालों और चाबियों के संबंध में स्वर्णिम नियम क्या है?',
        bn: 'লকআউট/ট্যাগআউটে (LOTO) কর্মীদের জন্য তালা ও চাবি ব্যবহারের ক্ষেত্রে পরম নীতি কোনটি?'
      },
      options: [
        { id: 'opt-1', text: { en: 'All locks must share the same master key left hanging on the wall', hi: 'सभी तालों की एक ही मास्टर चाबी होनी चाहिए जो दीवार पर लटकी रहे', bn: 'সব তালার একই মাস্টার চাবি থাকবে যা দেয়ালে ঝুলানো থাকবে' } },
        { id: 'opt-2', text: { en: 'One Person, One Lock, One Key: every technician applies their own individually keyed padlock and retains their key', hi: 'एक व्यक्ति, एक ताला, एक चाबी: प्रत्येक कर्मचारी अपना व्यक्तिगत ताला लगाता है और अपनी चाबी अपने पास रखता है', bn: 'এক কর্মী, এক তালা, এক চাবি: প্রত্যেক কর্মী তার নিজস্ব তালা লাগাবে এবং চাবি নিজের পকেটে রাখবে' } },
        { id: 'opt-3', text: { en: 'Locks are only allowed on weekends', hi: 'ताले केवल सप्ताहांत पर लगाए जा सकते हैं', bn: 'তালা কেবল ছুটির দিনে লাগানো যাবে' } },
        { id: 'opt-4', text: { en: 'Keys should be thrown into the nearest river', hi: 'चाबियों को पास की नदी में फेंक देना चाहिए', bn: 'চাবি নদীতে ফেলে দিতে হবে' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'OSHA 1910.147 mandates that each authorized employee has exclusive control of their personal lockout device. Master keys and sharing keys are strictly prohibited during servicing.',
        hi: 'प्रत्येक कर्मचारी का अपनी सुरक्षा पर पूर्ण नियंत्रण होना चाहिए। "एक व्यक्ति, एक ताला, एक चाबी" नियम दूसरों द्वारा गलती से लाइन चालू करने से रोकता है।',
        bn: 'OSHA 1910.147 অনুসারে প্রতিটি কর্মীর তার নিজস্ব তালার ওপর একক নিয়ন্ত্রণ থাকতে হবে। চাবি ভাগাভাগি বা মাস্টার চাবি ব্যবহার সম্পূর্ণ নিষিদ্ধ।'
      }
    },
    {
      id: 'mcq-ch15-l07-06',
      question: {
        en: 'When a group of multiple workers services the same isolated machine, what hardware device enables all workers to attach their individual padlocks to a single isolator handle?',
        hi: 'जब कई कर्मचारियों का समूह एक ही मशीन पर काम करता है, तो कौन सा उपकरण सभी को एक ही हैंडल पर अपने अलग-अलग ताले लगाने में सक्षम बनाता है?',
        bn: 'যখন একাধিক কর্মী একই মেশিনে কাজ করেন, তখন কোন সরঞ্জামের মাধ্যমে একটিমাত্র আইসোলেটর সুইচে সবাই পৃথক তালা লাগাতে পারেন?'
      },
      options: [
        { id: 'opt-1', text: { en: 'A multi-lock lockout hasp (clasp)', hi: 'एक मल्टी-लॉक लॉकआउट हैस्प (Hasp)', bn: 'একটি মাল্টি-লক লকআউট হ্যাস্প (Hasp)' } },
        { id: 'opt-2', text: { en: 'A roll of adhesive sticky tape', hi: 'चिपकने वाला टेप का रोल', bn: 'স্কচটেপের রোল' } },
        { id: 'opt-3', text: { en: 'A piece of chewing gum', hi: 'च्यूइंग गम का टुकड़ा', bn: 'চুইংগামের টুকরো' } },
        { id: 'opt-4', text: { en: 'A magnetic refrigerator sticker', hi: 'फ्रिज का चुंबकीय स्टिकर', bn: 'ফ্রিজের চুম্বক' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'A lockout hasp accommodates up to 6 padlocks. The hasp jaws cannot be opened and the switch cannot be thrown until the final worker removes their personal padlock.',
        hi: 'मल्टी-लॉक हैस्प में कई ताले लग सकते हैं। जब तक अंतिम कर्मचारी अपना ताला नहीं हटाता, तब तक हैस्प नहीं खुल सकता और स्विच ऑन नहीं हो सकता।',
        bn: 'মাল্টি-লক হ্যাস্পে ৬টি পর্যন্ত তালা লাগানো যায়। শেষ কর্মী তালা না খোলা পর্যন্ত হ্যাস্পের মুখ খোলে না এবং সুইচ অন করা যায় না।'
      }
    },
    {
      id: 'mcq-ch15-l07-07',
      question: {
        en: 'Why is it mandatory to apply portable grounding/earthing leads (Rule 4) to conductors after verifying zero voltage on an isolated circuit?',
        hi: 'अलग किए गए परिपथ पर शून्य वोल्टेज सत्यापित करने के बाद भी तारों पर पोर्टेबल अर्थिंग (नियम 4) लगाना अनिवार्य क्यों है?',
        bn: 'আইসোলেটেড লাইনে শূন্য ভোল্টেজ পরীক্ষার পরও পোর্টেবল আর্থিং লিড (নিয়ম ৪) লাগানো বাধ্যতামূলক কেন?'
      },
      options: [
        { id: 'opt-1', text: { en: 'To discharge residual capacitive charge and ensure that if the circuit is inadvertently re-energized, fault current is driven safely to ground, tripping upstream protection instantly', hi: 'अवशिष्ट कैपेसिटिव चार्ज को डिस्चार्ज करने के लिए और यह सुनिश्चित करने के लिए कि यदि कोई गलती से लाइन चालू कर दे, तो करंट सीधे जमीन में जाकर ब्रेकर को तुरंत ट्रिप कर दे', bn: 'ক্যাপাসিটরের অবশিষ্ট চার্জ ক্ষরণ করতে এবং ভুলবশত কেউ লাইন চালু করলে বিদ্যুৎ যাতে কর্মীদের ক্ষতি না করে সরাসরি মাটিতে গিয়ে আপস্ট্রিম ব্রেকার ট্রিপ করায়' } },
        { id: 'opt-2', text: { en: 'To make the wires look shiny', hi: 'तारों को चमकदार दिखाने के लिए', bn: 'তার চকচকে দেখাতে' } },
        { id: 'opt-3', text: { en: 'To increase the AC frequency to 500 Hz', hi: 'AC फ्रीक्वेंसी को 500 Hz तक बढ़ाना', bn: 'কম্পাঙ্ক ৫০০ হার্টজ করতে' } },
        { id: 'opt-4', text: { en: 'Because copper wires like to touch the dirt', hi: 'क्योंकि तांबे के तार मिट्टी को छूना पसंद करते हैं', bn: 'কারণ তামার তার মাটি পছন্দ করে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Safety earthing bleeds electrostatic and induced voltages from adjacent lines, and provides a dead short to ground that instantly trips upstream breakers if someone mistakenly switches on power.',
        hi: 'सुरक्षा अर्थिंग संचित आवेश को समाप्त करती है और यदि कोई गलती से स्विच ऑन कर दे, तो फॉल्ट करंट बनाकर अपस्ट्रीम ब्रेकर को तुरंत ट्रिप करा देती है।',
        bn: 'নিরাপত্তা আর্থিং অবশিষ্ট চার্জ দূর করে এবং অসাবধানতাবশত লাইন অন করা হলে সাথে সাথে ডেড শর্ট সার্কিট তৈরি করে মেইন ব্রেকার ট্রিপ করায়।'
      }
    },
    {
      id: 'mcq-ch15-l07-08',
      question: {
        en: 'What dangerous physical phenomenon can cause fatal shock on high-voltage power factor correction capacitors even MINUTES after the main isolator has been switched off?',
        hi: 'मुख्य आइसोलेटर बंद होने के कई मिनट बाद भी हाई-वोल्टेज कैपेसिटर पर कौन सी खतरनाक घटना जानलेवा झटका दे सकती है?',
        bn: 'মেইন আইসোলেটর বন্ধ করার কয়েক মিনিট পরেও হাই-ভোল্টেজ পাওয়ার ফ্যাক্টর ক্যাপাসিটরে কোন বিপজ্জনক ঘটনা প্রাণঘাতী শক দিতে পারে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Trapped residual electrostatic charge stored across the dielectric plates (V = Q / C)', hi: 'डाइइलेक्ट्रिक प्लेटों पर संचित अवशिष्ट इलेक्ट्रोस्टैटिक चार्ज (V = Q / C)', bn: 'ডাইইলেক্ট্রিক পাতে আটকে থাকা অবশিষ্ট স্থির তড়িৎ চার্জ (V = Q / C)' } },
        { id: 'opt-2', text: { en: 'Nuclear fusion inside the casing', hi: 'कवर के अंदर परमाणु संलयन', bn: 'কভারের ভেতরে পারমাণবিক ফিউশন' } },
        { id: 'opt-3', text: { en: 'Sub-zero freezing of nitrogen gas', hi: 'नाइट्रोजन गैस का जमना', bn: 'নাইট্রোজেন গ্যাস বরফ হওয়া' } },
        { id: 'opt-4', text: { en: 'Gravitational acceleration of electrons', hi: 'इलेक्ट्रॉनों का गुरुत्वाकर्षण त्वरण', bn: 'ইলেকট্রনের মহাকর্ষীয় ত্বরণ' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Capacitors store electrostatic energy Q = C · V. If discharge bleed resistors fail or require time to decay, high lethal DC voltages remain trapped across the terminals.',
        hi: 'कैपेसिटर में अवशिष्ट इलेक्ट्रोस्टैटिक चार्ज फंसा रहता है। जब तक डिस्चार्ज रेजिस्टर उसे पूरी तरह शून्य न कर दे, वह 500-800 V का जानलेवा झटका दे सकता है।',
        bn: 'ক্যাপাসিটরের পাতে স্থির তড়িৎ চার্জ আটকে থাকে। ডিসচার্জ রেজিস্টরের মাধ্যমে সম্পূর্ণ ক্ষয় না হওয়া পর্যন্ত এটি শত শত ভোল্টের প্রাণঘাতী শক সৃষ্টি করতে পারে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch15-l07-01',
      question: {
        en: 'List the 5 Golden Safety Rules of electrical isolation in correct chronological sequence according to EN 50110-1.',
        hi: 'EN 50110-1 के अनुसार सही कालानुक्रमिक क्रम में विद्युत पृथक्करण के 5 स्वर्णिम सुरक्षा नियमों की सूची बनाइए।',
        bn: 'EN 50110-1 মান অনুসারে সঠিক ক্রমানুসারে বৈদ্যুতিক আইসোলেশনের ৫টি গোল্ডেন সেফটি রুল লিপিবদ্ধ করুন।'
      },
      hint: {
        en: '1. Disconnect completely; 2. Secure against re-connection; 3. Verify absence of operating voltage; 4. Carry out earthing and short-circuiting; 5. Provide protection against adjacent live parts.',
        hi: '1. पूरी तरह डिस्कनेक्ट करें; 2. ताला लगाएं (LOTO); 3. वोल्टेज की अनुपस्थिति जांचें; 4. अर्थिंग और शॉर्ट-सर्किट करें; 5. पास के जीवित भागों को ढकें।',
        bn: '১. সম্পূর্ণ বিচ্ছিন্নকরণ; ২. পুনরায় সংযোগ রোধ (LOTO); ৩. শূন্য ভোল্টেজ যাচাই; ৪. আর্থিং ও শর্ট-সার্কিট; ৫. পাশের লাইভ অংশ ঢেকে রাখা।'
      }
    },
    {
      id: 'pq-ch15-l07-02',
      question: {
        en: 'Why is a non-contact AC voltage detector pen (NCVD) insufficient by itself to certify a zero-energy state for high-voltage isolation?',
        hi: 'हाई-वोल्टेज आइसोलेशन के लिए शून्य-ऊर्जा स्थिति प्रमाणित करने के लिए एक गैर-संपर्क वोल्टेज डिटेक्टर पेन (NCVD) अकेले अपर्याप्त क्यों है?',
        bn: 'হাই-ভোল্টেজ আইসোলেশনে শূন্য-শক্তি অবস্থা নিশ্চিত করতে নন-কন্টাক্ট ভোল্টেজ ডিটেক্টর পেন কেন এককভাবে অপর্যাপ্ত?'
      },
      hint: {
        en: 'NCVDs detect electrostatic electric fields only; they cannot detect DC trapped charges, can be shielded by metal conduit or cable armoring, and cannot be calibrated as an approved two-pole meter.',
        hi: 'NCVD केवल AC फील्ड पकड़ता है, DC संचित चार्ज नहीं; यह धातु के कंड्यूट में काम नहीं करता और इसे दो-पोल मीटर की तरह अंशांकित नहीं किया जा सकता।',
        bn: 'নন-কন্টাক্ট ডিটেক্টর কেবল এসি ফিল্ড বোঝে, ডিসি চার্জ ধরে না এবং মেটাল পাইপ বা আর্মারিং ভেদ করতে পারে না; তাই টু-পোল টেস্টার আবশ্যক।'
      }
    }
  ]
};
