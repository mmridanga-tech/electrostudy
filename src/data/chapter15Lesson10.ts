import { Lesson } from '../types';

export const LESSON_FIRST_RESPONSE_ACCIDENTS: Lesson = {
  id: 'lsn-ch15-first-response-accidents',
  topicId: 'tp-first-response-accidents',
  chapterId: 'ch-electrical-safety',
  order: 10,
  title: {
    en: 'First Response to Electrical Accidents',
    hi: 'विद्युत दुर्घटनाओं पर प्राथमिक प्रतिक्रिया',
    bn: 'বৈদ্যুতিক দুর্ঘটনায় প্রাথমিক চিকিৎসা ও প্রতিক্রিয়া'
  },
  description: {
    en: 'Emergency medical and electrical engineering protocol for electrical accidents: scene safety and de-energization, victim separation using non-conductive rescue hooks, step potential and touch potential physics, the bunny-hop/shuffle evacuation technique, DRSABCD primary assessment, CPR (30:2 at 100-120 bpm) and Automated External Defibrillator (AED) deployment for ventricular fibrillation, and electrical burn care.',
    hi: 'विद्युत दुर्घटनाओं के लिए आपातकालीन चिकित्सा और इंजीनियरिंग प्रोटोकॉल: दृश्य सुरक्षा और बिजली काटना, इंसुलेटेड रेस्क्यू हुक से पीड़ित को अलग करना, स्टेप पोटेंशियल और टच पोटेंशियल के भौतिक नियम, शफल/बनी-हॉप निकासी तकनीक, DRSABCD प्राथमिक मूल्यांकन, सीपीआर (CPR 30:2, 100-120 प्रति मिनट) एवं स्वचालित बाहरी डिफिब्रिलेटर (AED), और विद्युत जलन का उपचार।',
    bn: 'বৈদ্যুতিক দুর্ঘটনায় জরুরি চিকিৎসা ও প্রকৌশল উদ্ধার নির্দেশিকা: ঘটনাস্থলের নিরাপত্তা ও তড়িৎ সংযোগ বিচ্ছিন্নকরণ, ইনসুলেটেড হুক দিয়ে ভুক্তভোগীকে আলাদা করা, স্টেপ পটেনশিয়াল ও টাচ পটেনশিয়াল নীতি, পা না তুলে জুতো ঘষে চলার (Shuffle) কৌশল, DRSABCD প্রাথমিক পর্যবেক্ষণ, কার্ডিওপালমোনারি রিসাসিটেশন (CPR ৩০:২ অনুপাত) ও অটোমেটেড এক্সটার্নাল ডিফিব্রিলেটর (AED) প্রয়োগ এবং বিদ্যুৎ দগ্ধের প্রাথমিক শুশ্রূষা।'
  },
  estimatedMinutes: 50,
  easyExplanation: {
    en: 'When someone suffers an electric shock, PANIC KILLS. The most common fatal mistake is rushing forward and grabbing the victim with your bare hands—because their body is electrified, you become the second casualty! Always follow the golden 4-step emergency sequence: (1) CUT THE POWER FIRST: run to the main switchboard, circuit breaker, or pull the plug. If the switch is far away, use a certified fiberglass rescue hook or dry, clean wooden stick to forcefully push the victim or conductor away. Never touch them directly! (2) BEWARE OF STEP POTENTIAL NEAR DOWNED WIRES: If a high-voltage wire hits the ground, high electric voltage ripples out in circles through the dirt like waves in a pond. Walking with long strides creates a deadly voltage difference between your feet (Step Potential)! Keep your feet firmly pressed together and hop like a bunny or shuffle your feet without ever lifting them off the ground until you are at least 10 meters (33 feet) away. (3) CALL EMERGENCY SERVICES (911 / 112 / 108). (4) CHECK BREATHING & START CPR: If the victim is unresponsive and not breathing, electrical shock has thrown their heart into ventricular fibrillation. Immediately start chest compressions (push hard and fast in the center of the chest at 100-120 beats/min, 30 compressions followed by 2 rescue breaths) and attach an AED as soon as it arrives!',
    hi: 'जब किसी को बिजली का झटका लगता है, तो घबराहट जानलेवा साबित होती है। सबसे आम घातक गलती यह है कि लोग तुरंत दौड़कर पीड़ित को नंगे हाथों से पकड़ लेते हैं—क्योंकि पीड़ित के शरीर में करंट दौड़ रहा होता है, छूने वाला भी चिपक जाता है और दूसरा शिकार बन जाता है! हमेशा 4-चरणीय आपातकालीन क्रम का पालन करें: (1) सबसे पहले बिजली काटें: मुख्य स्विचबोर्ड, MCB बंद करें या प्लग निकालें। यदि स्विच दूर है, तो फाइबरग्लास रेस्क्यू हुक या सूखी लकड़ी की लाठी से पीड़ित या तार को दूर धकेलें। उन्हें सीधे कभी न छुएं! (2) गिरे हुए तारों के पास स्टेप पोटेंशियल से बचें: यदि हाई-वोल्टेज तार जमीन पर गिर जाए, तो जमीन में गोल छल्लों की तरह वोल्टेज फैलता है। लंबे डग भरने से दोनों पैरों के बीच भारी वोल्टेज अंतर (स्टेप पोटेंशियल) बन जाता है और शरीर से करंट बहने लगता है! दोनों पैरों को आपस में सटाकर रखें और कूदें (बनी-हॉप) या पैरों को जमीन से उठाए बिना घिसटते हुए (Shuffle) कम से कम 10 मीटर दूर जाएं। (3) एम्बुलेंस (108 / 112) को बुलाएं। (4) सांस जांचें और तुरंत सीपीआर (CPR) शुरू करें: यदि व्यक्ति बेहोश है और सांस नहीं ले रहा है, तो इसका मतलब है कि बिजली ने दिल की धड़कन रोक दी है। सीने के बीच में 100-120 प्रति मिनट की गति से तेजी से दबाएं (30 बार दबाना और 2 बार सांस देना) और मिलते ही AED मशीन लगाएं!',
    bn: 'যখন কোনো ব্যক্তি বিদ্যুৎস্পৃষ্ট হন, তখন আতঙ্কই সবচেয়ে বড় ঘাতক। সবচেয়ে মারাত্মক সাধারণ ভুল হলো খালি হাতে দৌড়ে গিয়ে ভুক্তভোগীকে টেনে ধরার চেষ্টা করা—যেহেতু তার দেহে বিদ্যুৎ প্রবাহিত হচ্ছে, স্পর্শকারীও সাথে সাথে আটকে যায় এবং দ্বিতীয় শিকার হয়! সর্বদা ৪-ধাপের জরুরি জীবনরক্ষা নিয়ম অনুসরণ করুন: (১) প্রথমে বিদ্যুৎ সংযোগ বিচ্ছিন্ন করুন: মেইন সুইচ, সার্কিট ব্রেকার অফ করুন বা প্লাগ টেনে খুলুন। সুইচ দূরে থাকলে ইনসুলেটেড ফাইবারগ্লাস রেস্কিউ হুক বা শুকনো কাঠের লাঠি দিয়ে জোরে আঘাত করে তারটি সরিয়ে দিন বা ভুক্তভোগীকে নিরাপদ স্থানে টেনে আনুন। কখনোই সরাসরি স্পর্শ করবেন না! (২) মাটিতে ছেঁড়া তার পড়লে স্টেপ পটেনশিয়াল থেকে বাঁচুন: উচ্চ ভোল্টেজের তার মাটিতে পড়লে পুকুরের ঢেউয়ের মতো বৃত্তাকারে মাটিতে উচ্চ ভোল্টেজ ছড়িয়ে পড়ে। লম্বা পা ফেলে হাঁটলে দুই পায়ের মাঝে মারাত্মক বিভব পার্থক্য (Step Potential) তৈরি হয়ে দেহ দিয়ে বিদ্যুৎ প্রবাহিত হয়! তাই দুই পা একসাথে শক্তভাবে জোড়া লাগিয়ে খরগোশের মতো লাফিয়ে (Bunny-hop) অথবা পা মাটি থেকে না তুলে জুতো ঘষে ঘষে (Shuffle) কমপক্ষে ১০ মিটার দূরে সরে যান। (৩) জরুরি সাহায্য ও অ্যাম্বুলেন্স ডাকুন। (৪) শ্বাস-প্রশ্বাস পরীক্ষা করে অবিলম্বে সিপিআর (CPR) শুরু করুন: ভুক্তভোগী অচেতন ও শ্বাসহীন হলে বুকের মাঝখানে ১০০-১২০ গতিতে শক্তভাবে চাপ দিন (৩০ বার বুক চাপা ও ২ বার কৃত্রিম শ্বাস) এবং পাওয়া মাত্রই এইডি (AED) মেশিন সংযুক্ত করুন!'
  },
  detailedExplanation: {
    en: 'First response to electrical trauma integrates occupational safety standards (OSHA 1910.269, IEEE 80) and emergency resuscitation medicine (AHA / ERC BLS guidelines):\n\n1. Sequence of Life-Saving Actions (DRSABCD Protocol):\n• D - Danger: Ensure scene safety. Do not enter an electrified enclosure or step into water touching energized cables. Assess voltage level (Low Voltage < 1,000 V vs High Voltage > 1,000 V).\n• R - Response: Check responsiveness with "Talk and Touch" (verbal call and gentle shoulder squeeze). If unconscious, activate the emergency team.\n• S - Send for Help: Dial professional emergency services (112, 911, or plant emergency response unit) and request an Automated External Defibrillator (AED).\n• A - Airway: Open the victim’s airway using head-tilt/chin-lift technique (or jaw-thrust if a fall from a ladder caused suspected cervical spine fracture).\n• B - Breathing: Look, listen, and feel for normal breathing for no more than 10 seconds. Agonal gasps are NOT normal breathing.\n• C - CPR: Initiate high-quality cardiopulmonary resuscitation immediately. Deliver 30 chest compressions at a depth of 5 to 6 cm (2 to 2.4 inches) at a rate of 100 to 120 compressions/minute, followed by 2 rescue breaths.\n• D - Defibrillation: Power on the AED, attach self-adhesive electrode pads (sternum and apex), allow the machine to analyze cardiac rhythm, and deliver a shock if Ventricular Fibrillation (VF) or Pulseless Ventricular Tachycardia (VT) is diagnosed.\n\n2. Physics of Ground Potential Gradients (Step and Touch Potential):\nWhen a high-voltage overhead conductor falls onto the earth, fault current I flows into the soil. Hemispherical current dissipation creates a steep potential gradient radiating outward:\n• Potential at distance r: V(r) = (ρ · I) / (2π · r), where ρ is soil resistivity in Ω·m.\n• Step Potential (V_step): The voltage difference between two human feet separated by distance s (typically s = 0.8 m to 1.0 m):\nV_step = V(r) - V(r + s) = [ρ · I / (2π)] · [1/r - 1/(r + s)].\nNear the contact point, V_step can easily exceed 2,000 V to 5,000 V between your feet, driving fatal current up one leg, through the groin, and down the other leg! Evacuation requires hopping with both feet tightly joined (s = 0) or shuffling without lifting feet.\n• Touch Potential (V_touch): The voltage difference between an energized grounded metallic chassis touched by a hand and the soil upon which the feet are standing: V_touch = V_structure - V_earth(feet).\n\n3. Electrical Burn Pathology and Internal Trauma:\n• Unlike superficial flame burns, high-voltage electricity follows deep tissue paths of lowest electrical resistance (neurovascular bundles and bone interfaces). Severe Joule heating (Q = I²Rt) cooks muscle compartments from within, causing rhabdomyolysis and massive myoglobin release which clogs renal tubules, leading to fatal acute kidney injury.\n• Immediate First Aid for Burns: Cool the affected skin with clean, tepid running water for at least 20 minutes. Cover with sterile non-adherent dressings or clean plastic cling film. Do NOT apply ointments, oils, butter, or puncture blisters.',
    hi: 'विद्युत दुर्घटनाओं में प्राथमिक प्रतिक्रिया सुरक्षा मानकों (OSHA) और आपातकालीन चिकित्सा (AHA BLS) पर आधारित है:\n\n1. जीवनरक्षक क्रम (DRSABCD प्रोटोकॉल):\n• D (Danger - खतरा): पहले अपनी सुरक्षा जांचें। बिजली बंद किए बिना कभी आगे न बढ़ें।\n• R (Response - प्रतिक्रिया): कंधे को थपथपाएं और पूछें "क्या आप ठीक हैं?"।\n• S (Send for Help - मदद): एम्बुलेंस (108 / 112) को कॉल करें और AED मंगाएं।\n• A (Airway - वायुमार्ग): सिर को पीछे झुकाकर और ठुड्डी उठाकर सांस की नली खोलें।\n• B (Breathing - सांस): 10 सेकंड तक सांस जांचें। यदि सांस नहीं आ रही है तो:\n• C (CPR): तुरंत सीने के बीच में 30 बार तेज और गहरा (5-6 सेमी) दबाएं (100-120 प्रति मिनट), फिर 2 बार मुंह से सांस दें।\n• D (Defibrillation - डिफिब्रिलेशन): AED मशीन लगाकर निर्देशानुसार शॉक दें।\n\n2. स्टेप पोटेंशियल (Step Potential) और टच पोटेंशियल के नियम:\nजब हाई-वोल्टेज तार जमीन पर गिरता है, तो जमीन में गोल छल्लों की तरह वोल्टेज फैलता है:\n• दूरी r पर वोल्टेज: V(r) = (ρ · I) / (2π · r)।\n• स्टेप पोटेंशियल (V_step): दो पैरों के बीच (दूरी s = 0.8 मीटर) बनने वाला खतरनाक वोल्टेज अंतर। तार के पास यह 5,000 V से अधिक हो सकता है जो पैरों के रास्ते करंट बहाकर मार देता है।\n• बचने का तरीका: दोनों पैरों को आपस में जोड़कर रखें (s = 0) और कूदते हुए (Bunny-hop) या जमीन से पैर उठाए बिना घिसटते हुए (Shuffle) कम से कम 10 मीटर दूर जाएं।\n\n3. विद्युत जलन (Burns) और आंतरिक चोट:\nबिजली शरीर के अंदर से मांसपेशियों और नसों को जला देती है। घाव को तुरंत ठंडे बहते पानी से 20 मिनट तक धोएं और साफ कपड़े या प्लास्टिक रैप से ढकें। कभी भी तेल, घी या टूथपेस्ट न लगाएं।',
    bn: 'বৈদ্যুতিক দুর্ঘটনায় জরুরি উদ্ধার ও জীবনরক্ষার বৈজ্ঞানিক নির্দেশিকা (OSHA ও AHA BLS):\n\n১. জীবনরক্ষার সঠিক ক্রম (DRSABCD প্রোটোকল):\n• D (Danger - বিপদ): পরিবেশের নিরাপত্তা যাচাই। নিজে সুরক্ষিত না হয়ে কখনো এগোবেন না।\n• R (Response - সাড়া): কাঁধে মৃদু চাপ দিয়ে ডাকুন। সাড়া না দিলে জরুরি দল সক্রিয় করুন।\n• S (Send for help - সাহায্য আহ্বান): অবিলম্বে অ্যাম্বুলেন্স ডাকুন এবং এইডি (AED) মেশিন আনতে বলুন।\n• A (Airway - শ্বাসনালী): মাথা পেছনের দিকে হেলিয়ে চিবুক তুলে শ্বাসনালী উন্মুক্ত করুন।\n• B (Breathing - শ্বাস পরীক্ষা): ১০ সেকেন্ড পর্যবেক্ষণ করুন। শ্বাস না থাকলে:\n• C (CPR): অবিলম্বে বুকের মাঝখানে ৫-৬ সেমি গভীরতায় ১০০-১২০ গতিতে ৩০ বার চাপ দিন এবং ২ বার কৃত্রিম শ্বাস দিন (৩০:২ অনুপাত)।\n• D (Defibrillation - এইডি প্রয়োগ): এইডি প্যাড বুকে লাগিয়ে মেশিন বললে বৈদ্যুতিক শক দিন।\n\n২. স্টেপ পটেনশিয়াল ও টাচ পটেনশিয়ালের পদার্থবিজ্ঞান:\nউচ্চ ভোল্টেজের তার মাটিতে পড়লে মাটিতে বৃত্তাকারে ভোল্টেজ ছড়িয়ে পড়ে:\n• দূরত্ব r এ ভোল্টেজ: V(r) = (ρ · I) / (২π · r)।\n• স্টেপ পটেনশিয়াল (V_step): মানবদেহের দুই পায়ের মধ্যকার (দূরত্ব s = ০.৮ মিটার) ভোল্টেজ পার্থক্য। মাটির সংযোগস্থলের কাছে এই পার্থক্য ২,০০০ থেকে ৫,০০০ ভোল্ট পর্যন্ত হতে পারে যা এক পা দিয়ে ঢুকে কুঁচকি হয়ে অন্য পা দিয়ে মাটিতে নেমে অঙ্গ পুড়িয়ে দেয়!\n• বাঁচার কৌশল: দুই পা একসাথে জোড়া লাগিয়ে (s = ০) লাফিয়ে অথবা পা মাটি থেকে না তুলে জুতো ঘষে ঘষে (Shuffle) কমপক্ষে ১০ মিটার দূরে সরে যেতে হয়।\n\n৩. বিদ্যুৎ দগ্ধের চিকিৎসা:\nবিদ্যুৎ শরীরের ভেতরে মাংসপেশি ও রক্তনালী পুড়িয়ে মারাত্মক অভ্যন্তরীণ ক্ষতি করে। পোড়া স্থানে অবিলম্বে পরিষ্কার ঠান্ডা বহমান জল ২০ মিনিট ধরে ঢালুন। পরিষ্কার প্লাস্টিক র‍্যাপ দিয়ে ঢেকে রাখুন। কোনো অবস্থাতেই তেল, মলম বা বরফ ঘষবেন না।'
  },
  formulas: [
    {
      id: 'f-step-potential-gradient',
      symbol: 'V_{\text{step}}',
      expression: 'V_{\text{step}} = \frac{\rho \cdot I}{2 \pi} \left(\frac{1}{r} - \frac{1}{r + s}\right)',
      title: {
        en: 'Ground Fault Radial Step Potential (IEEE 80)',
        hi: 'ग्राउंड फॉल्ट त्रिज्यीय स्टेप पोटेंशियल (IEEE 80)',
        bn: 'গ্রাউন্ড ফল্ট ব্যাসার্ধীয় স্টেপ পটেনশিয়াল সমীকরণ (IEEE 80)'
      },
      description: {
        en: 'Calculates the dangerous electric potential difference between a person’s two feet separated by stride distance s (e.g. 0.8 m) at a radial distance r from a fallen high-voltage conductor discharging fault current I into soil of resistivity ρ.',
        hi: 'जमीन पर गिरे तार से दूरी r पर खड़े व्यक्ति के दोनों पैरों (दूरी s) के बीच उत्पन्न वोल्टेज अंतर की गणना करता है।',
        bn: 'মাটিতে পতিত উচ্চ ভোল্টেজ পরিবাহী থেকে r দূরত্বে অবস্থানরত মানুষের দুই পায়ের (দূরত্ব s) মধ্যকার বিপজ্জনক বিভব পার্থক্য নির্ণয় করে।'
      },
      variables: [
        { symbol: 'V_{step}', name: { en: 'Step potential difference between feet (Volts, V)', hi: 'पैरों के बीच स्टेप पोटेंशियल (V)', bn: 'দুই পায়ের মধ্যকার স্টেপ ভোল্টেজ (V)' } },
        { symbol: 'ρ', name: { en: 'Apparent soil resistivity (Ω·m)', hi: 'मृदा विशिष्ट प्रतिरोध (Ω·m)', bn: 'মাটির আপেক্ষিক রোধ (Ω·m)' } },
        { symbol: 'I', name: { en: 'Ground fault current entering soil (Amperes, A)', hi: 'जमीन में बहने वाला फॉल्ट करंट (A)', bn: 'মাটিতে প্রবাহিত ফল্ট কারেন্ট (A)' } },
        { symbol: 'r', name: { en: 'Radial distance from ground fault point to nearest foot (m)', hi: 'फॉल्ट से निकटतम पैर की दूरी (m)', bn: 'ফল্ট বিন্দু থেকে নিকটবর্তী পায়ের দূরত্ব (m)' } },
        { symbol: 's', name: { en: 'Stride pace distance separating the two feet (m)', hi: 'दोनों पैरों के बीच की दूरी (m)', bn: 'দুই পায়ের মধ্যবর্তী দূরত্বের ব্যবধান (m)' } }
      ]
    },
    {
      id: 'f-cpr-chest-compression-fraction',
      symbol: 'CCF',
      expression: 'CCF = \frac{T_{\text{compression}}}{T_{\text{total\_resuscitation}}} \times 100\% \ge 80\%',
      title: {
        en: 'Chest Compression Fraction (AHA / ERC CPR Metric)',
        hi: 'चेस्ट कम्प्रेशन फ्रैक्शन (CPR दक्षता मीट्रिक)',
        bn: 'বুক চাপার কার্যকর সময় অনুপাত (CPR মেট্রিক)'
      },
      description: {
        en: 'The proportion of total resuscitation time spent actively delivering chest compressions. International resuscitation guidelines mandate maintaining CCF ≥ 80% to sustain coronary and cerebral perfusion pressure during post-shock cardiac arrest.',
        hi: 'पुनर्जीवन के दौरान छाती दबाने में बिताए गए समय का प्रतिशत। यह 80% या उससे अधिक होना चाहिए।',
        bn: 'সিপিআরের মোট সময়ের কত অংশ সক্রিয়ভাবে বুক চাপায় ব্যয় হয়েছে তার শতকরা হার (কমপক্ষে ৮০% বজায় রাখা বাধ্যতামূলক)।'
      },
      variables: [
        { symbol: 'CCF', name: { en: 'Chest compression fraction percentage (%)', hi: 'कम्प्रेशन फ्रैक्शन प्रतिशत (%)', bn: 'বুক চাপার সময় অনুপাত (%)' } },
        { symbol: 'T_{compression}', name: { en: 'Total cumulative time delivering compressions (s)', hi: 'कम्प्रेशन का कुल समय (s)', bn: 'বুক চাপার মোট সময় (s)' } },
        { symbol: 'T_{total_resuscitation}', name: { en: 'Total elapsed time of resuscitation event (s)', hi: 'पुनर्जीवन की कुल अवधि (s)', bn: 'উদ্ধার অভিযানের মোট সময়কাল (s)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch15-l10-emergency-protocol',
      title: {
        en: 'Step-by-Step Electrical Rescue & CPR Protocol',
        hi: 'चरणबद्ध विद्युत बचाव एवं सीपीआर प्रोटोकॉल',
        bn: 'পর্যায়ক্রমিক বৈদ্যুতিক উদ্ধার ও সিপিআর প্রোটোকল'
      },
      content: {
        en: 'First response to an electrical accident demands strict prioritization of actions:\n\n1. Scene Assessment & De-energization:\n• Cut power at the nearest isolator switch, circuit breaker, or emergency stop push button.\n• If high voltage (> 1,000 V) is involved, stay at least 10 meters (33 feet) away until the utility authority officially confirms the line is grounded and de-energized.\n• For low voltage (< 1,000 V), if power cannot be cut, use a certified fiberglass rescue hook (shepherd’s crook), rated dry wooden pole, or heavy dry polypropylene rope to yank the victim clear by their belt or clothes. Never touch the victim directly with bare hands!\n\n2. Escaping Ground Potential Gradients:\n• If you find yourself in the vicinity of a fallen live power conductor, NEVER run or walk with normal strides. Walking creates a distance s between your feet, bridging thousands of volts across your groin.\n• Shuffle with both feet firmly on the ground, sliding the heel of one foot forward against the toe of the other (s = 0), or hop with both feet tightly pressed together. Continue until at least 10 meters away.\n\n3. Resuscitation & AED Protocol:\n• Electric shock commonly paralyzes respiration or causes Ventricular Fibrillation (chaotic heart twitching). Every 1-minute delay in defibrillation decreases survival probability by 7% to 10%.\n• Administer continuous 30:2 CPR at 100 to 120 bpm at 5-6 cm depth. Apply AED pads immediately; do not stop compressions while the AED pads are being placed until the AED prompts "Stand Clear, Analyzing".',
        hi: 'विद्युत दुर्घटना में प्राथमिक प्रतिक्रिया के लिए कार्यों की सख्त प्राथमिकता:\n\n1. दृश्य मूल्यांकन एवं बिजली काटना:\n• नजदीकी आइसोलेटर, MCB या इमरजेंसी स्टॉप बटन से तुरंत बिजली काटें।\n• यदि हाई-वोल्टेज (> 1,000 V) शामिल है, तो कम से कम 10 मीटर दूर रहें जब तक बिजली बोर्ड लाइन बंद होने की पुष्टि न कर दे।\n• लो-वोल्टेज (< 1,000 V) में यदि स्विच बंद न हो सके, तो फाइबरग्लास रेस्क्यू हुक या सूखी लकड़ी की लाठी से पीड़ित को बेल्ट या कपड़ों से खींचें। नंगे हाथों से कभी न छुएं!\n\n2. जमीन के वोल्टेज से सुरक्षित निकासी:\n• गिरे हुए तार के पास कभी भी सामान्य चाल से न दौड़ें। पैर फैलाने से स्टेप पोटेंशियल के कारण करंट शरीर में घुस जाता है।\n• दोनों पैरों को आपस में सटाकर घिसटते हुए (Shuffle) या दोनों पैरों से कूदते हुए (Bunny-hop) कम से कम 10 मीटर दूर जाएं।\n\n3. सीपीआर और AED प्रोटोकॉल:\n• बिजली का झटका दिल की धड़कन रोक देता है। डिफिब्रिलेशन में 1 मिनट की देरी से बचने की संभावना 7-10% घट जाती है।\n• 30 बार छाती दबाएं और 2 बार सांस दें (100-120 प्रति मिनट, 5-6 सेमी गहराई)। AED मशीन आते ही तुरंत लगाएं।',
        bn: 'বৈদ্যুতিক দুর্ঘটনায় জরুরি পদক্ষেপের সুনির্দিষ্ট অগ্রাধিকার:\n\n১. পরিবেশ যাচাই ও সংযোগ বিচ্ছিন্ন:\n• নিকটস্থ আইসোলেটর বা সার্কিট ব্রেকার অফ করে দ্রুত বিদ্যুৎ বিচ্ছিন্ন করুন।\n• উচ্চ ভোল্টেজ (> ১,০০০ V) হলে বিদ্যুৎ সরবরাহ কর্তৃপক্ষ নিশ্চিত না করা পর্যন্ত কমপক্ষে ১০ মিটার দূরত্ব বজায় রাখুন।\n• নিম্ন ভোল্টেজে (< ১,০০০ V) যদি সুইচ অফ করা না যায়, তবে ইনসুলেটেড ফাইবারগ্লাস হুক বা শুকনো কাঠের লাঠি দিয়ে ভুক্তভোগীকে তার কাপড় বা বেল্ট ধরে টেনে নিরাপদ স্থানে আনুন। খালি হাতে ভুলেও স্পর্শ করবেন না!\n\n২. স্টেপ পটেনশিয়াল থেকে নিরাপদ নিষ্ক্রমণ:\n• মাটিতে তার ছিঁড়ে পড়ে থাকলে কখনো দৌড়াবেন না বা লম্বা পা ফেলে হাঁটবেন না। এতে দুই পায়ের মাঝে কয়েক হাজার ভোল্টের পার্থক্য সৃষ্টি হয়।\n• জুতো মাটি থেকে না তুলে ঘষে ঘষে (Shuffle) অথবা দুই পা একসাথে চেপে খরগোশের মতো লাফিয়ে (Bunny-hop) কমপক্ষে ১০ মিটার দূরে সরে যান।\n\n৩. সিপিআর ও এইডি প্রয়োগ:\n• ইলেকট্রিক শক সাধারণত হৃৎপিণ্ডে ভেন্ট্রিকুলার ফিব্রিলেশন ঘটায়। প্রতি মিনিটে ডিফিবিলেশনে বিলম্বের কারণে বাঁচার সম্ভাবনা ৭-১০% হ্রাস পায়।\n• অবিলম্বে ৩০:২ অনুপাতে ১০০-১২০ গতিতে ৫-৬ সেমি গভীরতায় বুক চাপুন। এইডি মেশিন আসা মাত্রই বুক উন্মুক্ত করে প্যাড সংযুক্ত করুন।'
      },
      schematicId: 'circuit-ch15-first-response-cpr-flowchart'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch15-l10-01',
      problem: {
        en: 'A high-voltage transmission line snaps and falls onto damp soil (soil resistivity ρ = 100 Ω·m), injecting a ground fault current of I = 500 Amperes into the ground. A person stands near the fault point such that their nearest foot is at radial distance r = 2.0 meters from the wire touch-point.\n(a) Calculate the step potential V_step experienced if the person takes a normal walking stride of s = 0.8 meters.\n(b) Calculate the step potential if the person instead uses the safety shuffle technique with zero foot separation (s = 0 meters).\n(c) Comment on whether the voltage in part (a) poses a lethal threat.',
        hi: 'एक हाई-वोल्टेज तार नम मिट्टी (प्रतिरोधकता ρ = 100 Ω·m) पर गिरता है, जिससे I = 500 A करंट जमीन में जाता है। एक व्यक्ति तार के संपर्क बिंदु से r = 2.0 मीटर की दूरी पर खड़ा है:\n(a) यदि व्यक्ति s = 0.8 मीटर का सामान्य डग भरता है, तो स्टेप पोटेंशियल V_step की गणना कीजिए।\n(b) यदि व्यक्ति दोनों पैरों को सटाकर (s = 0 मीटर) शफल तकनीक अपनाता है, तो स्टेप पोटेंशियल की गणना कीजिए।\n(c) क्या भाग (a) का वोल्टेज जानलेवा है?',
        bn: 'একটি উচ্চ ভোল্টেজ তার ভেজা মাটিতে (মাটির রোধকত্ব ρ = ১০০ Ω·m) ছিঁড়ে পড়ে I = ৫০০ A ফল্ট কারেন্ট মাটিতে পাঠাচ্ছে। একজন মানুষ তার স্পর্শ বিন্দু থেকে r = ২.০ মিটার দূরে দাঁড়িয়ে আছেন:\n(a) ব্যক্তিটি যদি s = ০.৮ মিটারের সাধারণ পা ফেলে হাঁটেন, তবে স্টেপ পটেনশিয়াল V_step কত হবে?\n(b) ব্যক্তিটি যদি পা জোড়া লাগিয়ে (s = ০ মিটার) শফল পদ্ধতিতে হাঁটেন, তবে স্টেপ পটেনশিয়াল কত হবে?\n(c) (a) অংশের ভোল্টেজ কি প্রাণঘাতী?'
      },
      solution: {
        en: 'Given:\n• Soil resistivity ρ = 100 Ω·m\n• Ground fault current I = 500 A\n• Distance to near foot r = 2.0 m\n• Stride distance s = 0.8 m\n• Formula: V_step = [ρ · I / (2π)] · [1/r - 1/(r + s)]\n\nStep 1: Compute Constant Factor\nFactor = (ρ · I) / (2π) = (100 × 500) / (2 × 3.14159) = 50,000 / 6.28318 ≈ 7,957.75 V·m\n\nStep 2: Calculate Part (a) Normal Stride (s = 0.8 m)\nDistance to far foot = r + s = 2.0 + 0.8 = 2.8 m\nBracket term = (1 / 2.0) - (1 / 2.8) = 0.5000 - 0.3571 = 0.1429 m^(-1)\nV_step = 7,957.75 × 0.1429 ≈ 1,137.2 Volts\n\nStep 3: Calculate Part (b) Safety Shuffle (s = 0 m)\nBracket term = (1 / 2.0) - (1 / 2.0) = 0.0000 m^(-1)\nV_step = 7,957.75 × 0.0000 = 0.0 Volts!\n\nStep 4: Safety Assessment (c)\nIn part (a), a voltage of 1,137 V appears across the legs. With damp shoes and human body leg-to-leg resistance of ~1,000 Ω, the resulting current is I = 1,137 V / 1,000 Ω ≈ 1.14 Amperes (1,140 mA). Because this exceeds the 50 mA fibrillation threshold by over 22 times, it is instantly fatal! The shuffle technique in part (b) completely eliminates this voltage to 0 V.',
        hi: 'चरण 1: स्थिरांक = (100 × 500) / (2 × π) ≈ 7,957.75 V·m\n\nचरण 2: भाग (a) सामान्य डग (s = 0.8 m)\nBracket = (1 / 2.0) - (1 / 2.8) = 0.5 - 0.3571 = 0.1429\nV_step = 7,957.75 × 0.1429 ≈ 1,137.2 V।\n\nचरण 3: भाग (b) शफल तकनीक (s = 0 m)\nV_step = 7,957.75 × 0 = 0.0 V!\n\nचरण 4: निष्कर्ष (c)\n1,137 V का वोल्टेज पैरों के बीच 1.14 A (1140 mA) का जानलेवा करंट बहाएगा। 50 mA से अधिक का करंट तुरंत जान ले सकता है। शफल तकनीक से वोल्टेज 0 V हो जाता है और जान बच जाती है।',
        bn: 'ধাপ ১: সাধারণ গুণক = (১০০ × ৫০০) / (২ × π) ≈ ৭,৯৫৭.৭৫ V·m\n\nধাপ ২: অংশ (a) স্বাভাবিক হাঁটা (s = ০.৮ m)\nব্র্যাকেট = (১ / ২.০) - (১ / ২.৮) = ০.৫ - ০.৩৫৭১ = ০.১৪২৯\nV_step = ৭,৯৫৭.৭৫ × ০.১৪২৯ ≈ ১,১৩৭.২ ভোল্ট।\n\nধাপ ৩: অংশ (b) পা না তুলে চলা (s = ০ m)\nV_step = ৭,৯৫৭.৭৫ × ০ = ০.০ ভোল্ট!\n\nধাপ ৪: মূল্যায়ন (c)\n১,১৩৭ ভোল্টের বিভব পার্থক্যে দেহ দিয়ে ১.১৪ অ্যাম্পিয়ার (১,১৪০ mA) কারেন্ট প্রবাহিত হবে যা ৫০ mA প্রাণঘাতী সীমার ২২ গুণ বেশি এবং তাৎক্ষণিক মৃত্যু ঘটাবে। শফল পদ্ধতি এই বিভব পার্থক্য সম্পূর্ণ শূন্য করে জীবন রক্ষা করে।'
      },
      givenValues: { 'ρ': '100 Ω·m', 'I': '500 A', 'r': '2.0 m', 's': '0.8 m' },
      finalAnswer: {
        en: 'Normal stride V_step ≈ 1,137 V (lethal electrocution); Safety shuffle V_step = 0 V (completely safe).',
        hi: 'सामान्य डग पर V_step ≈ 1,137 V (घातक); शफल तकनीक पर V_step = 0 V (पूर्णतः सुरक्षित)।',
        bn: 'স্বাভাবিক পদক্ষেপে V_step ≈ ১,১৩৭ V (প্রাণঘাতী); পা জোড়া রাখা শফল পদ্ধতিতে V_step = ০ V (সম্পূর্ণ নিরাপদ)।'
      }
    },
    {
      id: 'ex-ch15-l10-02',
      problem: {
        en: 'During a cardiac arrest following an electrical shock, a bystander performs CPR for 4 minutes (240 seconds) until emergency medical personnel arrive with an AED. Over this 240-second resuscitation period, chest compressions were actively delivered for 204 seconds, while 36 seconds were spent opening airway and giving breaths.\n(a) Calculate the Chest Compression Fraction (CCF).\n(b) Compare this value against the American Heart Association (AHA) target standard of CCF ≥ 80% to determine if high-quality CPR was achieved.',
        hi: 'बिजली के झटके के बाद कार्डियक अरेस्ट में, एक व्यक्ति 4 मिनट (240 सेकंड) तक सीपीआर करता है। इस दौरान 204 सेकंड तक छाती दबाई गई और 36 सेकंड सांस देने में लगे:\n(a) चेस्ट कम्प्रेशन फ्रैक्शन (CCF) की गणना कीजिए।\n(b) क्या यह AHA के मानक CCF ≥ 80% को पूरा करता है?',
        bn: 'ইলেকট্রিক শকের পর কার্ডিয়াক অ্যারেস্টে একজন উদ্ধারকারী ৪ মিনিট (২৪০ সেকেন্ড) ধরে সিপিআর প্রদান করেন। এর মধ্যে ২০৪ সেকেন্ড বুক চাপা হয় এবং ৩৬ সেকেন্ড শ্বাস দেওয়ায় ব্যয় হয়:\n(a) চেস্ট কম্প্রেশন ফ্র্যাকশন (CCF) নির্ণয় করুন।\n(b) এটি কি AHA এর মানদণ্ড CCF ≥ ৮০% পূরণ করে?'
      },
      solution: {
        en: 'Step 1: Formula Application\nCCF = (T_compression / T_total_resuscitation) × 100%\n\nStep 2: Calculation\n• T_compression = 204 seconds\n• T_total_resuscitation = 240 seconds\nCCF = (204 / 240) × 100% = 0.85 × 100% = 85.0%\n\nStep 3: Quality Compliance Evaluation\n• Target standard: CCF ≥ 80.0%\n• Achieved CCF: 85.0%\nBecause 85.0% ≥ 80.0%, this resuscitation meets the AHA guideline criteria for high-quality CPR, maximizing arterial blood flow and cerebral perfusion prior to defibrillation shock delivery.',
        hi: 'चरण 1: सूत्र\nCCF = (204 / 240) × 100% = 85.0%\n\nचरण 2: मूल्यांकन\nचूंकि 85.0% मान 80% के मानक से अधिक है, अतः यह उच्च गुणवत्ता वाला सीपीआर है।',
        bn: 'ধাপ ১: সূত্র প্রয়োগ\nCCF = (২০৪ / ২৪০) × ১০০% = ৮৫.০%\n\nধাপ ২: মূল্যায়ন\nযেহেতু ৮৫.০% ≥ ৮০%, তাই এটি উচ্চমানের জীবনরক্ষাকারী সিপিআর হিসেবে গণ্য।'
      },
      givenValues: { 'T_compression': '204 s', 'T_total': '240 s', 'Target': '≥ 80%' },
      finalAnswer: {
        en: 'CCF = 85.0%, successfully meeting and exceeding the AHA high-quality standard (≥ 80%).',
        hi: 'CCF = 85.0%, जो AHA के उच्च गुणवत्ता मानक (≥ 80%) को सफलतापूर्वक पूरा करता है।',
        bn: 'CCF = ৮৫.০%, যা AHA এর উচ্চমানের মানদণ্ড (≥ ৮০%) সফলভাবে পূরণ করেছে।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Substation and plant control room safety stations equipped with wall-mounted fiberglass rescue hooks and automated external defibrillators (AEDs).',
      'Training field utility linemen to safely egress from a bucket truck touching energized 33 kV lines by jumping clear with both feet together without touching the truck and ground simultaneously.',
      'Deployment of the "Bunny Hop / Safety Shuffle" technique during emergency evacuation from downed overhead conductors during monsoons.',
      'Emergency medical management of entrance and exit high-voltage puncture wounds and early administration of intravenous fluids for myoglobinuria.'
    ],
    hi: [
      'सबस्टेशनों और कंट्रोल रूम में दीवार पर फाइबरग्लास रेस्क्यू हुक और AED मशीनें स्थापित करना।',
      'लाइनमैन को 33 kV तार छू रही गाड़ी से दोनों पैरों को जोड़कर कूदकर निकलने की ट्रेनिंग देना।',
      'बारिश के मौसम में गिरे हुए तारों से बचने के लिए "बनी हॉप / शफल" तकनीक का उपयोग।',
      'बिजली के प्रवेश और निकास घावों का प्राथमिक उपचार और गुर्दे की सुरक्षा के लिए अस्पताल पहुंचाना।'
    ],
    bn: [
      'সাবস্টেশন ও কন্ট্রোল রুমে দেয়ালে ঝুলানো ফাইবারগ্লাস রেস্কিউ হুক ও এইডি (AED) মেশিনের সার্বক্ষণিক প্রস্তুতি।',
      'বিদ্যুতায়িত লাইনে আটকে পড়া গাড়ি থেকে একই সাথে গাড়ি ও মাটি স্পর্শ না করে দুই পা জোড়া করে লাফিয়ে বের হওয়ার বিশেষ প্রশিক্ষণ।',
      'ঝড়-বৃষ্টিতে রাস্তায় ছেঁড়া তার পড়লে পা না তুলে ঘষে ঘষে (Shuffle) নিরাপদ দূরত্বে সরে যাওয়া।',
      'বিদ্যুৎ প্রবেশের ও নির্গমনের গভীর পোড়া ক্ষতের প্রাথমিক শুশ্রূষা এবং কিডনি সুরক্ষায় দ্রুত হাসপাতালে প্রেরণ।'
    ]
  },
  importantPoints: {
    en: [
      'NEVER touch a shock victim directly while they remain in contact with an energized circuit.',
      'The safest first step is always to isolate power at the switch or breaker.',
      'If power cannot be cut, use a certified fiberglass rescue hook or dry non-conductive wood to push the victim or wire away.',
      'Near downed high-voltage wires, shuffle your feet without lifting them or hop with feet tightly together to avoid lethal Step Potential.',
      'CPR must be started immediately for an unresponsive, non-breathing victim (30 compressions to 2 breaths at 100-120 bpm).',
      'Every minute of delay in applying an AED reduces survival chances from ventricular fibrillation by 7% to 10%.'
    ],
    hi: [
      'जब तक बिजली चालू है, तब तक पीड़ित को नंगे हाथों से कभी न छुएं।',
      'सबसे सुरक्षित पहला कदम हमेशा मुख्य स्विच या ब्रेकर से बिजली काटना है।',
      'यदि बिजली न कटे, तो फाइबरग्लास रेस्क्यू हुक या सूखी लकड़ी से पीड़ित को अलग करें।',
      'गिरे हुए तारों के पास स्टेप पोटेंशियल से बचने के लिए पैरों को सटाकर शफल करें या दोनों पैरों से कूदें।',
      'बेहोश और सांस न लेने वाले व्यक्ति को तुरंत सीपीआर (30:2, 100-120 प्रति मिनट) देना शुरू करें।',
      'AED मशीन लगाने में 1 मिनट की देरी से बचने की संभावना 7-10% कम हो जाती है।'
    ],
    bn: [
      'বিদ্যুৎ প্রবাহ বন্ধ না হওয়া পর্যন্ত ভুক্তভোগীকে ভুলেও খালি হাতে স্পর্শ করবেন না।',
      'সবচেয়ে নিরাপদ প্রথম পদক্ষেপ হলো মেইন সুইচ বা ব্রেকার বন্ধ করা।',
      'সুইচ বন্ধ করা না গেলে ইনসুলেটেড ফাইবারগ্লাস হুক বা শুকনো কাঠ দিয়ে ভুক্তভোগীকে আলাদা করুন।',
      'ছেঁড়া তারের কাছে স্টেপ পটেনশিয়াল এড়াতে পা না তুলে জুতো ঘষে চলুন বা জোড়া পায়ে লাফান।',
      'অচেতন ও শ্বাসহীন ব্যক্তির ক্ষেত্রে কালবিলম্ব না করে ৩০:২ অনুপাতে সিপিআর শুরু করুন।',
      'এইডি (AED) মেশিন প্রয়োগে প্রতি ১ মিনিট দেরির জন্য বাঁচার সম্ভাবনা ৭-১০% হ্রাস পায়।'
    ]
  },
  commonMistakes: {
    en: [
      'Rushing forward and grabbing the victim with bare hands, causing the rescuer to become an additional electrocution fatality.',
      'Taking long running strides away from a downed power line, creating a huge step potential difference between legs that triggers electrocution.',
      'Applying cold ice, butter, cooking oil, or toothpaste to electrical burns, which traps heat and breeds severe infections.',
      'Stopping chest compressions prematurely because the victim does not immediately wake up.',
      'Assuming a victim who survived a high-voltage shock without visible skin burns is unhurt; deep internal organ and cardiac damage may manifest hours later.'
    ],
    hi: [
      'घबराकर पीड़ित को नंगे हाथों से पकड़ लेना, जिससे बचाने वाला भी करंट की चपेट में आकर मर जाता है।',
      'गिरे हुए तार से दूर भागते समय लंबे डग भरना, जिससे पैरों के बीच भारी वोल्टेज अंतर पैदा होकर जान ले लेता है।',
      'बिजली के घावों पर बर्फ, मक्खन, तेल या टूथपेस्ट लगाना, जिससे संक्रमण फैलता है।',
      'यह सोचकर सीपीआर रोक देना कि मरीज तुरंत होश में नहीं आया।',
      'यह मान लेना कि बाहर से घाव न दिखने पर व्यक्ति सुरक्षित है; आंतरिक अंगों की क्षति बाद में जान ले सकती है।'
    ],
    bn: [
      'ভয় পেয়ে খালি হাতে ভুক্তভোগীকে জড়িয়ে ধরা, যার ফলে উদ্ধারকারী নিজেও বিদ্যুৎস্পৃষ্ট হয়ে মারা যান।',
      'ছেঁড়া তারের কাছ থেকে লম্বা পা ফেলে দৌড়ানো, ফলে দুই পায়ের মাঝে মারাত্মক স্টেপ পটেনশিয়াল তৈরি হয়ে মৃত্যু ঘটা।',
      'পোড়া জায়গায় বরফ, তেল, ঘি বা টুথপেস্ট লাগানো, যা ক্ষতের তাপ আটকে রেখে সংক্রমণ সৃষ্টি করে।',
      'রোগী সাথে সাথে চোখ না খোলায় হতাশ হয়ে অকালে সিপিআর বন্ধ করে দেওয়া।',
      'বাইরে ক্ষতের দাগ না দেখে রোগীকে সুস্থ মনে করা; অভ্যন্তরীণ পেশি ও হৃদপিণ্ডের ক্ষতি কয়েক ঘণ্টা পর প্রাণঘাতী হতে পারে।'
    ]
  },
  keyTakeaways: {
    en: [
      'First priority is scene safety: De-energize first, or separate using non-conductive tools.',
      'Step potential causes fatal current flow between legs; always shuffle or hop with feet together.',
      'Immediate CPR (30:2) and early AED defibrillation are the only effective interventions for shock-induced ventricular fibrillation.',
      'Electrical burns require cooling with running water for 20 minutes and urgent hospitalization.'
    ],
    hi: [
      'पहली प्राथमिकता अपनी सुरक्षा है: पहले बिजली काटें या इंसुलेटेड टूल से अलग करें।',
      'स्टेप पोटेंशियल से बचने के लिए पैरों को आपस में सटाकर शफल करें या दोनों पैरों से कूदें।',
      'बिजली के झटके से रुके दिल के लिए तुरंत सीपीआर (30:2) और जल्द से जल्द AED लगाना अनिवार्य है।',
      'विद्युत जलन को 20 मिनट तक बहते पानी से ठंडा करें और तुरंत अस्पताल ले जाएं।'
    ],
    bn: [
      'সর্বোচ্চ অগ্রাধিকার নিজের নিরাপত্তা: প্রথমে লাইন বন্ধ করুন বা ইনসুলেটেড টুল দিয়ে আলাদা করুন।',
      'স্টেপ পটেনশিয়াল এড়াতে সর্বদা পা না তুলে ঘষে চলুন অথবা জোড়া পায়ে লাফিয়ে চলুন।',
      'শক-জনিত কার্ডিয়াক অ্যারেস্টে তাৎক্ষণিক সিপিআর (৩০:২) এবং দ্রুত এইডি প্রয়োগই জীবনরক্ষার একমাত্র উপায়।',
      'বিদ্যুৎ দগ্ধের স্থান ২০ মিনিট বহমান জলে ঠান্ডা করুন এবং কালবিলম্ব না করে হাসপাতালে পাঠান।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch15-l10-01',
      question: {
        en: 'What is the absolute first action a rescuer MUST take when discovering a victim actively undergoing electrical shock from a contact conductor?',
        hi: 'किसी व्यक्ति को बिजली के तार से चिपका हुआ देखकर बचाने वाले को सबसे पहले क्या कदम उठाना चाहिए?',
        bn: 'কোনো ব্যক্তিকে বিদ্যুতায়িত তারের সাথে সংযুক্ত অবস্থায় বিদ্যুৎস্পৃষ্ট হতে দেখলে উদ্ধারকারীর সর্বপ্রথম অবশ্যকরণীয় পদক্ষেপ কোনটি?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Immediately de-energize the circuit by opening the main circuit breaker/switch, or separate using a non-conductive rescue hook', hi: 'मुख्य ब्रेकर/स्विच खोलकर तुरंत बिजली काटें, या इंसुलेटेड रेस्क्यू हुक से अलग करें', bn: 'মেইন সুইচ বা সার্কিট ব্রেকার অফ করে তৎক্ষণাৎ লাইন বিচ্ছিন্ন করা অথবা ইনসুলেটেড উদ্ধারকারী হুক দিয়ে ছাড়িয়ে নেওয়া' } },
        { id: 'opt-2', text: { en: 'Grab the victim’s bare arms with both hands and pull backwards', hi: 'दोनों हाथों से पीड़ित की बाहें पकड़कर पीछे खींचें', bn: 'খালি হাতে দুই বাহু ধরে জোরে পেছনে টেনে আনা' } },
        { id: 'opt-3', text: { en: 'Throw a bucket of cold water over the victim and electrical panel', hi: 'पीड़ित और पैनल पर पानी की बाल्टी फेंकें', bn: 'ভুক্তভোগী ও প্যানেলের উপর এক বালতি জল ঢালা' } },
        { id: 'opt-4', text: { en: 'Wrap the victim in aluminum foil', hi: 'पीड़ित को एल्युमिनियम फॉयल में लपेटें', bn: 'ভুক্তভোগীকে অ্যালুমিনিয়াম ফয়েলে পেঁচিয়ে রাখা' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Touching the electrified victim with bare hands makes the rescuer a parallel path to ground, causing fatal electrocution. Always de-energize first or use an insulated fiberglass tool.',
        hi: 'नंगे हाथों से छूने पर करंट बचाने वाले के शरीर में भी आ जाएगा। हमेशा पहले बिजली काटें या इंसुलेटेड हुक का उपयोग करें।',
        bn: 'খালি হাতে ধরলে উদ্ধারকারী নিজেও প্যারালাল গ্রাউন্ড পাথ হয়ে মারা যাবেন। সর্বদা আগে বিদ্যুৎ বিচ্ছিন্ন করুন অথবা ইনসুলেটেড হুক ব্যবহার করুন।'
      }
    },
    {
      id: 'mcq-ch15-l10-02',
      question: {
        en: 'Why is it life-threatening to walk with normal long strides away from a downed high-voltage power line lying on the ground?',
        hi: 'जमीन पर गिरे हाई-वोल्टेज तार से दूर भागते समय सामान्य लंबे डग भरना जानलेवा क्यों है?',
        bn: 'মাটিতে পড়ে থাকা উচ্চ ভোল্টেজ তার থেকে স্বাভাবিক লম্বা পা ফেলে হাঁটা বা দৌড়ানো প্রাণঘাতী কেন?'
      },
      options: [
        { id: 'opt-1', text: { en: 'A radial voltage gradient in the soil creates a large "Step Potential" voltage difference between the two separated feet, driving lethal current up one leg and down the other', hi: 'जमीन में वोल्टेज फैलने से दोनों पैरों के बीच भारी "स्टेप पोटेंशियल" वोल्टेज अंतर बन जाता है, जिससे पैरों के रास्ते जानलेवा करंट बहता है', bn: 'মাটিতে বৃত্তাকার ভোল্টেজ ঢাল থাকার কারণে দুই পায়ের মাঝে মারাত্মক "স্টেপ পটেনশিয়াল" বিভব পার্থক্য তৈরি হয়ে পা ও কুঁচকির মধ্য দিয়ে প্রাণঘাতী কারেন্ট প্রবাহিত হয়' } },
        { id: 'opt-2', text: { en: 'Walking makes too much noise that attracts more current', hi: 'चलने की आवाज से करंट आकर्षित होता है', bn: 'হাঁটার শব্দে কারেন্ট আকর্ষিত হয়' } },
        { id: 'opt-3', text: { en: 'The shoes will catch fire from friction with air', hi: 'हवा के घर्षण से जूतों में आग लग जाएगी', bn: 'বাতাসের ঘর্ষণে জুতোয় আগুন ধরে যায়' } },
        { id: 'opt-4', text: { en: 'Step potential only affects people who walk backwards', hi: 'स्टेप पोटेंशियल केवल उल्टे चलने वालों को लगता है', bn: 'স্টেপ পটেনশিয়াল কেবল পেছনের দিকে হাঁটলে ঘটে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Soil resistivity creates concentric voltage drops around the fault. Normal strides (s ≈ 0.8 m) can bridge thousands of volts between your feet. Keeping feet together (s = 0) eliminates this potential difference.',
        hi: 'जमीन में वोल्टेज छल्लों के रूप में गिरता है। पैर फैलाने पर दोनों पैरों के बीच हजारों वोल्ट का अंतर बन जाता है जो तुरंत मार सकता है।',
        bn: 'মাটিতে কারেন্ট প্রবেশের কারণে বৃত্তাকার ভোল্টেজ ঢাল তৈরি হয়। পা ফাঁক করলে দুই পায়ের মাঝে হাজার হাজার ভোল্টের বিভব পার্থক্য তৈরি হয় যা তৎক্ষণাৎ মৃত্যু ঘটায়।'
      }
    },
    {
      id: 'mcq-ch15-l10-03',
      question: {
        en: 'What safe movement technique MUST be utilized when evacuating the danger zone of a downed live power line?',
        hi: 'गिरे हुए बिजली के तार के खतरे के क्षेत्र से बाहर निकलते समय किस सुरक्षित निकासी तकनीक का उपयोग किया जाना चाहिए?',
        bn: 'মাটিতে পড়ে থাকা ছেঁড়া বিদ্যুতের তারের বিপদজনক এলাকা থেকে নিরাপদে সরে যেতে কোন হাঁটার কৌশল ব্যবহার করা আবশ্যক?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Shuffling feet smoothly along the ground without lifting either foot, or hopping with both feet firmly pressed together', hi: 'पैरों को जमीन से उठाए बिना घिसटते हुए चलना (Shuffle), या दोनों पैरों को आपस में सटाकर कूदना (Bunny-hop)', bn: 'পা মাটি থেকে না তুলে জুতো ঘষে ঘষে এগোনো (Shuffle) অথবা দুই পা শক্তভাবে জোড়া লাগিয়ে লাফিয়ে লাফিয়ে যাওয়া (Bunny-hop)' } },
        { id: 'opt-2', text: { en: 'Sprinting as fast as possible with the longest possible strides', hi: 'जितना संभव हो उतने लंबे डग भरकर तेजी से दौड़ना', bn: 'যতটা সম্ভব লম্বা পা ফেলে দ্রুত গতিতে দৌড়ানো' } },
        { id: 'opt-3', text: { en: 'Crawling flat on stomach with hands and legs fully extended', hi: 'हाथ-पैर फैलाकर पेट के बल रेंगना', bn: 'হাত-পা ছড়িয়ে পেটের উপর ভর দিয়ে হামাগুড়ি দেওয়া' } },
        { id: 'opt-4', text: { en: 'Cartwheeling sideways across the field', hi: 'जमीन पर गुलाटी मारते हुए जाना', bn: 'মাটিতে ডিগবাজি খেয়ে যাওয়া' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'By keeping both feet tightly together (stride s = 0) or sliding feet without separation, the voltage difference between contact points remains zero, preventing step-potential electrocution.',
        hi: 'पैरों को सटाकर रखने (s = 0) या घिसटकर चलने से पैरों के बीच का वोल्टेज अंतर शून्य रहता है और करंट नहीं बहता।',
        bn: 'দুই পা জোড়া রাখলে (s = ০) দুই স্পর্শ বিন্দুর মধ্যকার বিভব পার্থক্য শূন্য থাকে, ফলে দেহ দিয়ে কোনো তড়িৎ প্রবাহিত হতে পারে না।'
      }
    },
    {
      id: 'mcq-ch15-l10-04',
      question: {
        en: 'According to international Cardiopulmonary Resuscitation (CPR) guidelines, what is the correct compression-to-breath ratio and compression rate for adult resuscitation?',
        hi: 'अंतरराष्ट्रीय सीपीआर दिशानिर्देशों के अनुसार, वयस्क पुनर्जीवन के लिए सही कम्प्रेशन-टू-ब्रीद अनुपात और कम्प्रेशन दर क्या है?',
        bn: 'আন্তর্জাতিক সিপিআর নির্দেশিকা অনুসারে প্রাপ্তবয়স্কদের ক্ষেত্রে বুক চাপা ও কৃত্রিম শ্বাসের সঠিক অনুপাত এবং গতি কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '30 chest compressions to 2 rescue breaths at a rate of 100 to 120 compressions per minute', hi: '30 बार छाती दबाना और 2 बार सांस देना, 100 से 120 कम्प्रेशन प्रति मिनट की दर से', bn: '৩০ বার বুক চাপা ও ২ বার কৃত্রিম শ্বাস, প্রতি মিনিটে ১০০ থেকে ১২০ বার গতিতে' } },
        { id: 'opt-2', text: { en: '5 compressions to 5 breaths at 60 compressions per minute', hi: '5 कम्प्रेशन और 5 सांस, 60 प्रति मिनट', bn: '৫ বার বুক চাপা ও ৫ বার শ্বাস, ৬০ বার গতিতে' } },
        { id: 'opt-3', text: { en: '100 compressions without any pauses at 250 compressions per minute', hi: 'बिना रुके 250 प्रति मिनट की दर से दबाना', bn: 'কোনো বিরতি ছাড়া মিনিটে ২৫০ গতিতে চাপা' } },
        { id: 'opt-4', text: { en: 'Only mouth-to-mouth breathing without any chest compressions', hi: 'छाती दबाए बिना केवल मुंह से सांस देना', bn: 'বুক না চেপে কেবল মুখে মুখ দিয়ে শ্বাস দেওয়া' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'The standard BLS protocol is 30 chest compressions at 5 to 6 cm depth at 100-120 bpm, followed by 2 breaths, maintaining continuous perfusion until the AED arrives.',
        hi: 'मानक सीपीआर प्रोटोकॉल 30 कम्प्रेशन (5-6 सेमी गहरा, 100-120 प्रति मिनट) और 2 सांस का अनुपात है।',
        bn: 'আন্তর্জাতিক বিএলএস প্রোটোকল হলো ১০০-১২০ গতিতে ৫-৬ সেমি গভীরতায় ৩০ বার বুক চাপা এবং অতঃপর ২ বার কৃত্রিম শ্বাস প্রদান (৩০:২)।'
      }
    },
    {
      id: 'mcq-ch15-l10-05',
      question: {
        en: 'Why is an Automated External Defibrillator (AED) the critical definitive intervention for an electric shock victim in sudden cardiac arrest?',
        hi: 'बिजली के झटके से रुके हुए दिल के लिए स्वचालित बाहरी डिफिब्रिलेटर (AED) सबसे महत्वपूर्ण और निर्णायक उपाय क्यों है?',
        bn: 'বিদ্যুৎস্পৃষ্ট হয়ে হঠাৎ হৃদযন্ত্রের ক্রিয়া বন্ধ হয়ে যাওয়া রোগীর ক্ষেত্রে অটোমেটেড এক্সটার্নাল ডিফিব্রিলেটর (AED) সবচেয়ে গুরুত্বপূর্ণ ও চূড়ান্ত চিকিৎসা কেন?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Electric shock triggers chaotic Ventricular Fibrillation (VF); only an electrical defibrillation shock can reset the cardiac pacemaker cells to restore organized rhythm', hi: 'बिजली का झटका दिल में वेंट्रिकुलर फिब्रिलेशन पैदा करता है; केवल डिफिब्रिलेटर का नियंत्रित शॉक ही दिल की धड़कन को दोबारा व्यवस्थित कर सकता है', bn: 'ইলেকট্রিক শকে হৃদপিণ্ডে ভেন্ট্রিকুলার ফিব্রিলেশন ঘটে; কেবল ডিফিব্রিলেটরের নিয়ন্ত্রিত বৈদ্যুতিক শকই হৃদযন্ত্রের পেসমেকার কোষগুলোকে স্বাভাবিক ছন্দে ফিরিয়ে আনতে পারে' } },
        { id: 'opt-2', text: { en: 'The AED cools the skin burns using cold air', hi: 'AED ठंडी हवा से त्वचा के घावों को ठंडा करता है', bn: 'এইডি ঠান্ডা বাতাস দিয়ে পোড়া চামড়া ঠান্ডা করে' } },
        { id: 'opt-3', text: { en: 'The AED pumps blood mechanically into the arms', hi: 'AED बाहों में रक्त पंप करता है', bn: 'এইডি যান্ত্রিকভাবে রক্ত পাম্প করে' } },
        { id: 'opt-4', text: { en: 'The AED replaces the broken bones', hi: 'AED टूटी हुई हड्डियों को जोड़ता है', bn: 'এইডি ভাঙা হাড় জোড়া লাগায়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Electric current disrupts the heart sinus rhythm, throwing the ventricles into disorganized quivering (Ventricular Fibrillation). The AED delivers a calibrated biphasic shock to depolarize the myocardium simultaneously, allowing the natural pacemaker to take over.',
        hi: 'वेंट्रिकुलर फिब्रिलेशन में दिल केवल फड़फड़ाता है और खून पंप नहीं करता। AED का शॉक दिल की कोशिकाओं को रीसेट करके सामान्य धड़कन बहाल करता है।',
        bn: 'ফিব্রিলেশনে হৃদপিণ্ড বিশৃঙ্খলভাবে কাঁপতে থাকে কিন্তু কোনো রক্ত পাম্প করতে পারে না। এইডি শক হৃদপেশির বিশৃঙ্খলা থামিয়ে প্রাকৃতিক পেসমেকারকে পুনরায় সচল করে।'
      }
    },
    {
      id: 'mcq-ch15-l10-06',
      question: {
        en: 'What is the correct emergency first aid procedure for managing electrical thermal contact burns on a conscious victim?',
        hi: 'होश में मौजूद पीड़ित के शरीर पर विद्युत संपर्क से हुई जलन के लिए सही प्राथमिक चिकित्सा क्या है?',
        bn: 'সচেতন ভুক্তভোগীর দেহে বৈদ্যুতিক তাপীয় পোড়া ক্ষতের ক্ষেত্রে সঠিক প্রাথমিক চিকিৎসা পদ্ধতি কোনটি?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Cool the burn under clean, cool running tap water for at least 20 minutes, cover with sterile non-stick dressing or plastic wrap, and seek emergency hospital care', hi: 'कम से कम 20 मिनट तक साफ, ठंडे बहते पानी से धोएं, साफ पट्टी या प्लास्टिक रैप से ढकें और तुरंत अस्पताल ले जाएं', bn: 'কমপক্ষে ২০ মিনিট ধরে পরিষ্কার ঠান্ডা বহমান জলে ক্ষতস্থান ঠান্ডা করুন, জীবাণুমুক্ত ব্যান্ডেজ বা পরিষ্কার প্লাস্টিক র‍্যাপ দিয়ে ঢেকে দ্রুত হাসপাতালে পাঠান' } },
        { id: 'opt-2', text: { en: 'Rub butter, mustard oil, or toothpaste directly into the open burns', hi: 'घाव पर मक्खन, सरसों का तेल या टूथपेस्ट रगड़ें', bn: 'পোড়া ক্ষতে মাখন, সরিষার তেল বা টুথপেস্ট ঘষে দেওয়া' } },
        { id: 'opt-3', text: { en: 'Pop all blisters with a sewing needle to let the water out', hi: 'सुई से सभी छालों को फोड़ दें ताकि पानी निकल जाए', bn: 'সুই দিয়ে খোঁচা মেরে সব ফোস্কা গলিয়ে দেওয়া' } },
        { id: 'opt-4', text: { en: 'Pack the burn in dry salt', hi: 'घाव में सूखा नमक भरें', bn: 'ক্ষতে শুকনো লবণ ছিটিয়ে দেওয়া' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Running tap water for 20 minutes safely stops tissue heat progression. Oils, butter, and toothpaste trap heat and introduce catastrophic infections. Blisters must never be punctured.',
        hi: 'बहता पानी ऊष्मा को रोकता है। तेल या मक्खन लगाने से गर्मी अंदर फंस जाती है और भयानक इन्फेक्शन हो जाता है। छालों को कभी नहीं फोड़ना चाहिए।',
        bn: '২০ মিনিট বহমান জল ঢাললে অভ্যন্তরীণ তাপের বিস্তার বন্ধ হয়। তেল বা পেস্ট দিলে উত্তাপ আটকে গিয়ে পচন ধরে। ফোস্কা কখনোই ফাটানো উচিত নয়।'
      }
    },
    {
      id: 'mcq-ch15-l10-07',
      question: {
        en: 'Why do victims of high-voltage electrical shock require immediate hospitalization and continuous cardiac telemetry monitoring even if they feel fine and have no visible exterior burns?',
        hi: 'हाई-वोल्टेज झटके के शिकार व्यक्ति को ठीक महसूस होने पर भी तुरंत अस्पताल में भर्ती और हृदय की निगरानी क्यों आवश्यक है?',
        bn: 'উচ্চ ভোল্টেজের শকে আক্রান্ত ব্যক্তি আপাতদৃষ্টিতে সুস্থ বোধ করলেও এবং বাইরে কোনো পোড়া দাগ না থাকলেও তাকে অবিলম্বে হাসপাতালে ভর্তি করে সার্বক্ষণিক ইসিজি মনিটরিংয়ে রাখা আবশ্যক কেন?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Electrical current travels internally along deep neurovascular bundles, risking delayed cardiac dysrhythmias, internal muscle necrosis, compartment syndrome, and renal failure from myoglobinuria', hi: 'करंट शरीर के अंदर नसों और मांसपेशियों से होकर बहता है, जिससे बाद में दिल की धड़कन रुकने, आंतरिक अंग जलने और गुर्दे खराब होने का खतरा रहता है', bn: 'বিদ্যুৎ দেহের ভেতরের রক্তনালী ও স্নায়ু দিয়ে প্রবাহিত হয়, ফলে কয়েক ঘণ্টা পর আকস্মিক হৃৎস্পন্দন বন্ধ হওয়া, অভ্যন্তরীণ মাংসের পচন এবং কিডনি অকেজো হওয়ার মারাত্মক ঝুঁকি থাকে' } },
        { id: 'opt-2', text: { en: 'Because hospitals like to fill empty beds', hi: 'ताकि अस्पताल के बिस्तर भरे रहें', bn: 'হাসপাতালের বিছানা খালি না রাখার জন্য' } },
        { id: 'opt-3', text: { en: 'Electric shock permanently magnetizes human blood iron', hi: 'बिजली का झटका खून के लोहे को स्थायी रूप से चुंबक बना देता है', bn: 'ইলেকট্রিক শক রক্তের লোহাকে স্থায়ী চুম্বকে পরিণত করে' } },
        { id: 'opt-4', text: { en: 'The victim might develop superpowers within 24 hours', hi: 'पीड़ित में 24 घंटे में सुपरपावर आ सकती है', bn: 'ভুক্তভোগী ২৪ ঘণ্টায় অতিমানবীয় ক্ষমতা পেতে পারেন' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'High-voltage shocks cause massive deep tissue destruction hidden beneath intact skin. Burned muscle releases myoglobin which clogs the kidneys, and electrical current disrupts cardiac conductive pathways, risking fatal delayed arrhythmias.',
        hi: 'करंट त्वचा के नीचे आंतरिक मांसपेशियों को भून देता है। नष्ट हुई मांसपेशियों से निकला प्रोटीन गुर्दे बंद कर देता है और दिल की धड़कन कभी भी बिगड़ सकती है।',
        bn: 'ত্বকের নিচে লুকানো পেশিকলা ধ্বংস হয়ে মায়োগ্লোবিন নির্গত হয় যা কিডনির নালী বন্ধ করে দেয় এবং হৃদপিণ্ডের বিদ্যুৎ সঞ্চালন ব্যবস্থা নষ্ট হয়ে পরবর্তী সময়েও মারাত্মক অ্যারিথমিয়া ঘটতে পারে।'
      }
    },
    {
      id: 'mcq-ch15-l10-08',
      question: {
        en: 'When rescuing a victim from contact with a low-voltage (230 V / 415 V) conductor when the circuit breaker cannot be reached, which tool is certified and safe to use?',
        hi: 'जब सर्किट ब्रेकर तक न पहुंचा जा सके, तो 230 V / 415 V तार से चिपके व्यक्ति को छुड़ाने के लिए कौन सा उपकरण सुरक्षित और प्रमाणित है?',
        bn: 'সার্কিট ব্রেকার বন্ধ করা অসম্ভব হলে ২৩০ V বা ৪১৫ V তারে আটকে থাকা ব্যক্তিকে মুক্ত করতে কোন সরঞ্জামটি প্রত্যয়িত ও নিরাপদ?'
      },
      options: [
        { id: 'opt-1', text: { en: 'A certified dielectric fiberglass rescue hook (shepherd’s crook) or clean, dry, non-conductive wooden pole', hi: 'प्रमाणित फाइबरग्लास रेस्क्यू हुक या सूखी, गैर-चालक लकड़ी की लाठी', bn: 'প্রত্যয়িত ডাইইলেক্ট্রিক ফাইবারগ্লাস রেস্কিউ হুক অথবা সম্পূর্ণ শুকনো কাঠের দণ্ড' } },
        { id: 'opt-2', text: { en: 'A wet garden hose', hi: 'गीला पानी का पाइप', bn: 'ভেজা রবারের পাইপ' } },
        { id: 'opt-3', text: { en: 'A steel crowbar or copper pipe', hi: 'लोहे की रॉड या तांबे का पाइप', bn: 'লোহার রড বা তামার পাইপ' } },
        { id: 'opt-4', text: { en: 'A wet towel wrapped around your hands', hi: 'हाथों पर लिपटा हुआ गीला तौलिया', bn: 'হাতে ভেজা তোয়ালে জড়িয়ে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'A high-dielectric fiberglass rescue hook provides rated insulation to yank the victim clear by their waist or armpits without endangering the rescuer. Metal rods, wet hoses, or wet towels conduct electricity immediately.',
        hi: 'फाइबरग्लास रेस्क्यू हुक पूरी तरह इंसुलेटेड होता है और बचाने वाले को बिना खतरे में डाले पीड़ित को खींच लेता है। धातु या गीली चीजें करंट पकड़ लेती हैं।',
        bn: 'ফাইবারগ্লাস রেস্কিউ হুক ডাইইলেক্ট্রিক ইনসুলেশন নিশ্চিত করে ভুক্তভোগীকে নিরাপদে টেনে সরাতে সাহায্য করে। ধাতব রড বা ভেজা কাপড় তৎক্ষণাৎ বিদ্যুৎ পরিবাহী হয়ে ওঠে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch15-l10-01',
      question: {
        en: 'Explain why walking with long strides near a grounded high-voltage cable produces a lethal Step Potential and how the safety shuffle prevents it.',
        hi: 'बताइए कि गिरे हुए हाई-वोल्टेज तार के पास लंबे डग भरकर चलने से जानलेवा स्टेप पोटेंशियल क्यों बनता है और शफल तकनीक इसे कैसे रोकती है।',
        bn: 'ছেঁড়া উচ্চ ভোল্টেজ তারের কাছে লম্বা পা ফেলে হাঁটলে কেন মারাত্মক স্টেপ পটেনশিয়াল তৈরি হয় এবং শফল পদ্ধতি কীভাবে তা প্রতিহত করে ব্যাখ্যা করুন।'
      },
      hint: {
        en: 'Concentric soil voltage dissipation creates a voltage drop between separated feet V_step = V(r) - V(r+s). By keeping feet together (s = 0), voltage difference drops to zero.',
        hi: 'जमीन में दूरी के साथ वोल्टेज गिरता है। पैर फैलाने पर दोनों पैरों के बीच वोल्टेज अंतर बनता है। पैर सटाने पर (s = 0) अंतर शून्य हो जाता है।',
        bn: 'মাটিতে ছড়ানো ভোল্টেজে দুই পায়ের ব্যবধানে বিভব পার্থক্য V_step = V(r) - V(r+s) তৈরি হয়। পা জোড়া রাখলে (s = ০) কোনো বিভব পার্থক্য থাকে না।'
      }
    },
    {
      id: 'pq-ch15-l10-02',
      question: {
        en: 'Outline the CPR chest compression depth, rate, and compression-to-ventilation ratio for an adult victim of electrical cardiac arrest.',
        hi: 'विद्युत कार्डियक अरेस्ट के शिकार वयस्क के लिए सीपीआर छाती दबाने की गहराई, गति और कम्प्रेशन-टू-वेंटिलेशन अनुपात बताइए।',
        bn: 'বৈদ্যুতিক শকে হৃদযন্ত্রের ক্রিয়া বন্ধ হওয়া প্রাপ্তবয়স্ক রোগীর ক্ষেত্রে সিপিআরে বুক চাপার গভীরতা, গতি এবং শ্বাস প্রদানের অনুপাত লিখুন।'
      },
      hint: {
        en: 'Depth: 5 to 6 cm (2 to 2.4 inches); Rate: 100 to 120 compressions/minute; Ratio: 30 compressions to 2 rescue breaths.',
        hi: 'गहराई: 5 से 6 सेमी; गति: 100 से 120 प्रति मिनट; अनुपात: 30 बार दबाना और 2 बार सांस देना।',
        bn: 'গভীরতা: ৫ থেকে ৬ সেমি; গতি: প্রতি মিনিটে ১০০ থেকে ১২০ বার; অনুপাত: ৩০ বার বুক চাপা ও ২ বার কৃত্রিম শ্বাস।'
      }
    }
  ]
};
