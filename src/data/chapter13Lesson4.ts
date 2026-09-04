import { Lesson } from '../types';

export const LESSON_APFC_PANELS_AUTOMATION: Lesson = {
  id: 'lsn-ch13-apfc-panel-design',
  topicId: 'tp-automatic-pfc',
  chapterId: 'ch-power-factor',
  order: 4,
  title: {
    en: 'Automatic Power Factor Correction (APFC) Panels & Controllers',
    hi: 'स्वचालित पावर फैक्टर सुधार (APFC) पैनल एवं नियंत्रक',
    bn: 'অটোমেটিক পাওয়ার ফ্যাক্টর কারেকশন (APFC) প্যানেল ও কন্ট্রোলার'
  },
  description: {
    en: 'In-depth study of microprocessor-based Automatic Power Factor Correction (APFC) relays and panels. Master the C/k threshold sensitivity ratio to prevent contactor hunting, compare binary (1:2:4:8) and rotational step-switching algorithms, analyze safety reconnection discharge timers, and evaluate Thyristor-Switched Capacitor (TSC) panels for rapid transient-free reactive compensation.',
    hi: 'माइक्रोप्रोसेसर-आधारित स्वचालित पावर फैक्टर सुधार (APFC) रिले और पैनलों का गहन अध्ययन। संपर्ककर्ता हंटिंग (बार-बार ऑन-ऑफ) को रोकने के लिए C/k संवेदनशीलता अनुपात में महारत हासिल करें, बाइनरी (1:2:4:8) और घूर्णी चरण-स्विचिंग एल्गोरिदम की तुलना करें, सुरक्षा रीकनेक्शन डिस्चार्ज टाइमर और क्षणिक-मुक्त प्रतिक्रियाशील क्षतिपूर्ति के लिए थाइरिस्टर-स्विच्ड कैपेसिटर (TSC) पैनल का विश्लेषण करें।',
    bn: 'মাইক্রোপ্রসেসর নিয়ন্ত্রিত অটোমেটিক পাওয়ার ফ্যাক্টর কারেকশন (APFC) রিলে ও প্যানেলের বিশদ পর্যালোচনা। কন্টাক্টরের হান্টিং রোধে C/k থ্রেশহোল্ড অনুপাত, বাইনারি (১:২:৪:৮) ও রোটেশনাল স্টেপ সুইচিং অ্যালগরিদম, নিরাপত্তা ডিসচার্জ টাইমার এবং ট্রানজিয়েন্ট-মুক্ত দ্রুত ক্ষতিপূরণের জন্য থাইরিস্টর-সুইচড ক্যাপাসিটর (TSC) প্যানেলের প্রযুক্তিগত রূপরেখা।'
  },
  estimatedMinutes: 50,
  easyExplanation: {
    en: 'In a living factory, machines turn on and off unpredictably. If you left a large capacitor bank permanently switched on, during lunch break or at night when motors stop, the capacitors would overpower the line, causing dangerous leading overvoltages. An Automatic Power Factor Correction (APFC) panel acts like a smart automated brain. A current transformer (CT) measures current, while voltage probes monitor the bus. The microprocessor compares the phase angle between them. When it senses lagging current, it commands contactors to click capacitor stages on one by one until the target power factor (e.g., 0.98) is reached. When machines turn off, it disconnects steps automatically to prevent overcompensation.',
    hi: 'कारखाने में मशीनें कभी चालू तो कभी बंद होती रहती हैं। यदि आप एक बड़े कैपेसिटर बैंक को हमेशा चालू छोड़ देंगे, तो लंच के समय या रात में जब मशीनें बंद होंगी, तो कैपेसिटर लाइन को ओवर-कंपेंसेट कर देंगे जिससे खतरनाक वोल्टेज बढ़ जाएगा। APFC पैनल एक स्वचालित बुद्धिमान मस्तिष्क की तरह काम करता है। करंट ट्रांसफार्मर (CT) धारा नापता है और वोल्टेज सेंसर बसबार वोल्टेज की निगरानी करते हैं। माइक्रोप्रोसेसर दोनों के बीच फेज अंतर की गणना करता है। जैसे ही लोड बढ़ता है, रिले कैपेसिटर के चरणों को एक-एक करके चालू करता है। लोड घटने पर यह चरणों को बंद कर देता है ताकि वोल्टेज संतुलित रहे।',
    bn: 'চলমান কারখানায় সবসময় একই পরিমাণ মোটর চলে না। আপনি যদি একটি বড় ক্যাপাসিটর ব্যাংক সবসময় অন রাখেন, তবে রাতে বা ছুটির দিনে যখন মোটর বন্ধ থাকবে, তখন লাইনটি ওভার-কম্পেনসেট হয়ে ভোল্টেজ বিপজ্জনকভাবে বেড়ে যাবে। APFC প্যানেল হলো একটি স্মার্ট স্বয়ংক্রিয় মস্তিষ্ক। একটি কারেন্ট ট্রান্সফরমার (CT) কারেন্ট পরিমাপ করে এবং ভোল্টেজ সেন্সর বাসবার ভোল্টেজ পরীক্ষা করে। মাইক্রোপ্রসেসর উভয়ের দশার পার্থক্য হিসাব করে। মোটর চালু হয়ে ল্যাগিং কারেন্ট বাড়লে এটি ধাপে ধাপে ক্যাপাসিটর অন করে কাঙ্ক্ষিত PF (যেমন ০.৯৮) নিশ্চিত করে, আবার মোটর বন্ধ হলে স্বয়ংক্রিয়ভাবে ক্যাপাসিটর অফ করে দেয়।'
  },
  detailedExplanation: {
    en: 'Modern industrial APFC panels automate reactive power compensation through sophisticated microprocessor controllers and switching stages:\n\n1. Measurement & Signal Processing Architecture:\nThe APFC relay samples the line-to-line or phase voltage via potential sensing terminals and line current via an external Current Transformer (CT) installed on the incomer feeder bus (typically Class 0.5 or Class 1.0, 5A secondary). The DSP computes the instantaneous phase angle ϕ between voltage and current waveforms. From this, it extracts active power P, reactive power Q, and displacement power factor cos(ϕ).\n\n2. The C/k Sensitivity Ratio (Hunting Prevention):\nThe single most critical configuration parameter in any APFC controller is the C/k ratio. If the controller were to switch a 50 kVAR stage in response to a minuscule 5 kVAR reactive deficit, the power factor would swing from lagging to leading, prompting the controller to immediately switch it back off. This infinite, destructive oscillation is called "hunting".\nThe C/k value defines the minimum reactive current threshold that must be detected before the controller is permitted to trigger the smallest capacitor step:\nC/k = Q_smallest_step / (√3 · V_L · CT_ratio)\nwhere CT_ratio = I_primary / I_secondary (e.g., 1000/5 = 200). If the measured uncompensated reactive current is less than (0.6 to 0.65) · (C/k), the controller holds state and ignores the deficit.\n\n3. Switching Step Sequences:\n- Linear Progression (1:1:1...): All capacitor steps are identical in size (e.g., 12 steps of 50 kVAR = 600 kVAR). Features rotational wear-leveling (FIFO) where the step that has been energized the longest is disconnected first, equalizing operating hours and thermal degradation across all capacitors and contactors.\n- Binary Progression (1:2:4:8...): Steps increase geometrically (e.g., 10, 20, 40, 80 kVAR). Allows 15 different discrete kVAR combinations with only 4 contactors, delivering high control resolution at lower panel build cost. However, it requires complex switching logic and produces unequal contactor wear.\n\n4. Reconnection Discharge Lockout Timer:\nWhen a capacitor is disconnected, its trapped internal DC voltage takes 60 to 180 seconds to discharge through bleed resistors. If an APFC controller tries to reconnect that same step within 5 seconds while its terminals are at +500 V DC and the incoming AC wave is at -500 V AC, an out-of-phase reclosing transient of 1,000 V occurs. This creates catastrophic inrush currents that shatter capacitor foils and vaporize contactors. Controllers enforce an absolute lockout timer (typically set to 90–180 seconds) per step.\n\n5. Contactor vs Thyristor Switched Capacitors (TSC):\n- Electro-mechanical contactor panels require 2–5 seconds per step decision and have contact lifetimes of ~100,000 operations. They are suited for slowly varying continuous loads.\n- Thyristor Switched Capacitors (TSC): Use anti-parallel thyristors with Zero-Voltage Crossing (ZVS) firing. When the bus AC voltage exactly matches the capacitor residual DC pre-charge voltage (dV/dt = 0), the thyristor fires with zero inrush current. TSC panels respond in 10 to 20 milliseconds (sub-cycle), ideal for spot welders, cranes, and high-speed CNC machinery.',
    hi: 'आधुनिक APFC पैनलों की कार्यप्रणाली:\n\n1. मापन प्रणाली: APFC रिले एक करंट ट्रांसफार्मर (CT) और वोल्टेज सेंसिंग के माध्यम से वोल्टेज और धारा के बीच के फेज कोण ϕ की गणना करता है।\n\n2. C/k संवेदनशीलता अनुपात (हंटिंग रोकथाम):\nहंटिंग (कांटेक्टरों का बार-बार चालू-बंद होना) रोकने के लिए C/k मान आवश्यक है:\nC/k = Q_smallest_step / (√3 · V_L · CT_ratio)\nयदि आवश्यक रिएक्टिव करंट C/k के 65% से कम होता है, तो रिले कोई कदम नहीं उठाता।\n\n3. स्टेप स्विचिंग अनुक्रम:\n- रैखिक (1:1:1...): सभी चरण समान (उदा. 50 kVAR प्रत्येक)। इसमें चक्रीय प्रणाली (FIFO) द्वारा सभी कैपेसिटरों के संचालन घंटों को बराबर रखा जाता है।\n- बाइनरी (1:2:4:8...): विभिन्न संयोजनों द्वारा कम कांटेक्टरों में उच्च परिशुद्धता मिलती है।\n\n4. रीकनेक्शन डिस्चार्ज टाइमर: स्विच ऑफ के बाद कैपेसिटर में चार्ज बना रहता है। विपरीत फेज में दोबारा चालू होने से 1000 V तक का स्पाइक आ सकता है। इसलिए रिले प्रत्येक स्टेप पर 60 से 180 सेकंड का रीकनेक्शन लॉकआउट टाइमर लगाता है।\n\n5. TSC (थाइरिस्टर स्विच्ड कैपेसिटर): शून्य-वोल्टेज क्रॉसिंग पर 10-20 मिलीसेकंड में स्विच होते हैं, जो वेल्डिंग मशीनों और क्रेन के लिए आदर्श हैं।',
    bn: 'APFC প্যানেলের আধুনিক প্রযুক্তি:\n\n১. সিগন্যাল প্রসেসিং: বাসবার ভোল্টেজ ও ইনকামার CT (যেমন ১০০০/৫A) থেকে সংগৃহীত সিগন্যালের মধ্যে ফেজ কোণ ϕ মেপে মাইক্রোপ্রসেসর তাৎক্ষণিক পাওয়ার ফ্যাক্টর নির্ধারণ করে।\n\n২. C/k থ্রেশহোল্ড অনুপাত (হান্টিং প্রতিরোধ):\nকন্টাক্টরের অপ্রয়োজনীয় দ্রুত অন-অফ বন্ধ করতে C/k মান সেট করা হয়:\nC/k = Q_smallest_step / (√৩ · V_L · CT_ratio)\nক্ষতিপূরণের চাহিদা এই থ্রেশহোল্ডের নিচে থাকলে কন্ট্রোলার কোনো পদক্ষেপ নেয় না।\n\n৩. সুইচিং সিকোয়েন্স:\n- লিনিয়ার (১:১:১...): সবগুলো ধাপ সমান। FIFO রোটেশনাল অ্যালগরিদমের মাধ্যমে সবগুলো কন্টাক্টরের কাজের সময় সমান রাখা হয়।\n- বাইনারি (১:২:৪:৮...): কম কন্টাক্টর দিয়ে সূক্ষ্ম নিয়ন্ত্রণ পাওয়া যায়।\n\n৪. রিকানেকশন ডিসচার্জ টাইমার: অফ করার পর জমে থাকা ডিসি ভোল্টেজ পুরোপুরি ডিসচার্জ না হওয়া পর্যন্ত একই ধাপ পুনরায় অন করা ঠেকাতে কন্ট্রোলার ৬০-১৮০ সেকেন্ডের লকআউট টাইমার ব্যবহার করে।\n\n৫. থাইরিস্টর সুইচড ক্যাপাসিটর (TSC): জিরো-ভোল্টেজ ক্রসিং প্রযুক্তির সাহায্যে ১০-২০ মিলিসেকেন্ডে ট্রানজিয়েন্ট ছাড়া ক্যাপাসিটর অন-অফ করে, যা স্পট ওয়েল্ডিং বা ক্রেনের জন্য উপযুক্ত।'
  },
  formulas: [
    {
      id: 'f-ck-ratio',
      symbol: 'C/k',
      expression: 'C/k = \\frac{Q_{\\text{step}} \\times 1000}{\\sqrt{3} \\cdot V_L \\cdot \\left(\\frac{I_1}{I_2}\\right)}',
      title: {
        en: 'APFC Relay C/k Sensitivity Threshold Equation',
        hi: 'APFC रिले C/k संवेदनशीलता थ्रेशहोल्ड समीकरण',
        bn: 'APFC রিলে C/k সংবেদনশীলতা থ্রেশহোল্ড সমীকরণ'
      },
      description: {
        en: 'Determines the minimum secondary reactive current threshold in amperes (A) required to trigger the first capacitor stage, preventing hunting.',
        hi: 'पहले कैपेसिटर चरण को चालू करने के लिए आवश्यक न्यूनतम सेकेंडरी करंट (एम्पीयर में) की गणना, जिससे हंटिंग रुकती है।',
        bn: 'কন্টাক্টরের হান্টিং রোধ করে প্রথম ক্যাপাসিটর ধাপ অন করার জন্য সেকেন্ডারিতে প্রয়োজনীয় সর্বনিম্ন কারেন্ট (A) থ্রেশহোল্ড নির্ণয়।'
      },
      variables: [
        { symbol: 'C/k', name: { en: 'Controller sensitivity threshold current (A on CT secondary)', hi: 'कंट्रोलर संवेदनशीलता करंट (A, CT सेकेंडरी पर)', bn: 'কন্ট্রোলার সংবেদনশীলতা কারেন্ট (A, CT সেকেন্ডারিতে)' } },
        { symbol: 'Q_{\\text{step}}', name: { en: 'Reactive power of the smallest capacitor stage (kVAR)', hi: 'सबसे छोटे कैपेसिटर चरण की शक्ति (kVAR)', bn: 'ক্ষুদ্রতম ক্যাপাসিটর ধাপের ক্ষমতা (kVAR)' } },
        { symbol: 'V_L', name: { en: 'Line-to-line bus voltage (V)', hi: 'लाइन वोल्टेज (V)', bn: 'লাইন ভোল্টেজ (V)' } },
        { symbol: 'I_1 / I_2', name: { en: 'Current Transformer primary to secondary ratio', hi: 'करंट ट्रांसफार्मर प्राइमरी से सेकेंडरी अनुपात', bn: 'কারেন্ট ট্রান্সফরমার প্রাইমারি ও সেকেন্ডারি অনুপাত' } }
      ]
    },
    {
      id: 'f-apfc-reactive-deficit',
      symbol: '\\Delta Q',
      expression: '\\Delta Q = P \\cdot \\left(\\tan(\\phi_{\\text{measured}}) - \\tan(\\phi_{\\text{target}})\\right)',
      title: {
        en: 'Dynamic Reactive Power Deficit',
        hi: 'गतिशील प्रतिघाती शक्ति घाटा',
        bn: 'গতিশীল প্রতিক্রিয়াশীল ক্ষমতার ঘাটতি'
      },
      description: {
        en: 'Computes instantaneous reactive power deficit in kVAR that the APFC controller must compensate by stepping in capacitor banks.',
        hi: 'क्षणिक kVAR घाटे की गणना जिसे पूरा करने के लिए APFC रिले नए कैपेसिटर चरणों को चालू करता है।',
        bn: 'তাৎক্ষণিক kVAR ঘাটতি যা পূরণ করতে APFC কন্ট্রোলার নতুন ক্যাপাসিটর ধাপ অন করে।'
      },
      variables: [
        { symbol: '\\Delta Q', name: { en: 'Reactive power deficit to target (kVAR)', hi: 'लक्षित मान तक प्रतिघाती शक्ति घाटा (kVAR)', bn: 'লক্ষ্যমাত্রা পূরণে প্রয়োজনীয় kVAR ঘাটতি' } },
        { symbol: 'P', name: { en: 'Measured active plant load (kW)', hi: 'मापा गया सक्रिय भार (kW)', bn: 'পরিমাপকৃত সক্রিয় লোড (kW)' } },
        { symbol: '\\phi_{\\text{measured}}', name: { en: 'Current measured load phase angle', hi: 'वर्तमान मापा गया फेज कोण', bn: 'বর্তমান পরিমাপকৃত ফেজ কোণ' } },
        { symbol: '\\phi_{\\text{target}}', name: { en: 'Target programmed setpoint phase angle', hi: 'प्रोग्राम किया गया लक्षित फेज कोण', bn: 'প্রোগ্রামকৃত কাঙ্ক্ষিত ফেজ কোণ' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch13-l04-hunting-ck',
      title: {
        en: 'Physics and Mathematics of the C/k Setting',
        hi: 'C/k सेटिंग की भौतिकी और गणित',
        bn: 'C/k সেটিংয়ের পদার্থবিজ্ঞান ও গাণিতিক বিশ্লেষণ'
      },
      content: {
        en: 'Why is the C/k ratio so critical in automated reactive power control?\n\nImagine an APFC controller without a deadband. A plant has an uncompensated reactive load of 15 kVAR. The smallest capacitor step in the panel is 25 kVAR.\n1. The controller detects 15 kVAR lagging and switches ON the 25 kVAR capacitor step.\n2. The plant reactive power instantly swings to: 15 kVAR lagging - 25 kVAR capacitive = 10 kVAR LEADING.\n3. The controller now detects leading power factor, realizes it has overcompensated, and switches the 25 kVAR capacitor OFF.\n4. The plant immediately reverts back to 15 kVAR lagging.\n5. The cycle repeats indefinitely every few seconds.\nThis catastrophic cycling is called "hunting". Within a few days, contactor contact tips burn out, springs snap, and capacitor dielectric fails from excessive inrush heating.\n\nTo eliminate hunting, the controller calculates the primary current drawn by the smallest capacitor step:\nI_C1 = (Q_step · 1000) / (√3 · V_L)\nReferred to the CT secondary winding:\nI_sec = I_C1 / CT_ratio = (Q_step · 1000) / [√3 · V_L · (I_prim / I_sec)] = C/k\nThe controller applies a switching threshold: It will ONLY connect the capacitor step if the measured reactive current exceeds approximately 65% of C/k, and will only disconnect it if leading reactive current exceeds approximately 35% of C/k. This 30% hysteresis deadband guarantees absolute switching stability.',
        hi: 'APFC में C/k अनुपात क्यों महत्वपूर्ण है?\n\nयदि किसी प्लांट में 15 kVAR की कमी है और सबसे छोटा कैपेसिटर 25 kVAR का है। रिले इसे ऑन करेगा, जिससे सिस्टम 10 kVAR लीडिंग (ओवर-कंपेंसेट) हो जाएगा। फिर रिले इसे तुरंत बंद कर देगा। यह क्रिया बार-बार होती रहेगी जिसे "हंटिंग" कहते हैं। इससे कांटेक्टर कुछ ही दिनों में जल जाते हैं।\n\nहंटिंग रोकने के लिए रिले C/k की गणना करता है:\nC/k = (Q_step · 1000) / [√3 · V_L · CT_ratio]\nकंट्रोलर एक 30% हिस्टैरिसीस डेडबैंड लागू करता है और केवल तभी स्विच करता है जब घाटा C/k के 65% से अधिक हो, जिससे स्थिरता सुनिश्चित होती है।',
        bn: 'APFC তে C/k সেটিং অত্যন্ত জরুরি কেন?\n\nমনে করুন কারখানায় ১৫ kVAR ঘাটতি আছে এবং প্যানেলের ক্ষুদ্রতম ধাপ ২৫ kVAR। রিলে এটি অন করলে সিস্টেম ১০ kVAR লিডিং হয়ে যাবে। তখন রিলে আবার এটি অফ করবে। এই অন-অফের অবিরাম চক্রকে "হান্টিং" বলা হয়, যা কন্টাক্টরকে দ্রুত নষ্ট করে দেয়।\n\nহান্টিং দূর করতে C/k হিসাব করা হয়:\nC/k = (Q_step · ১০০০) / [√৩ · V_L · CT_ratio]\nকন্ট্রোলার একটি হিস্টেরেসিস ডেডব্যান্ড তৈরি করে এবং ঘাটতি C/k এর ৬৫% এর বেশি না হওয়া পর্যন্ত নতুন ধাপ অন করে না, ফলে সিস্টেম স্থিতিশীল থাকে।'
      }
    },
    {
      id: 'sec-ch13-l04-tsc-vs-contactor',
      title: {
        en: 'Electro-mechanical Contactors vs Thyristor Switched Capacitors (TSC)',
        hi: 'इलेक्ट्रो-मैकेनिकल कांटेक्टर बनाम थाइरिस्टर स्विच्ड कैपेसिटर (TSC)',
        bn: 'ইলেক্ট্রো-মেকানিক্যাল কন্টাক্টর বনাম থাইরিস্টর সুইচড ক্যাপাসিটর (TSC)'
      },
      content: {
        en: 'Industrial facilities fall into two distinct load categories, requiring different switching technologies:\n\n1. Standard APFC Panels (Electro-Mechanical Contactors):\n- Switching Medium: Heavy-duty AC-6b contactors with damping resistors.\n- Switching Time: 2 to 5 seconds per step decision; 90 to 180 seconds discharge lockout between reconnections.\n- Operating Lifetime: 100,000 to 200,000 mechanical operations.\n- Cost: Low to medium.\n- Best Suited For: Continuous, slowly modulating industrial loads (spinning mills, paper machines, continuous furnaces, commercial office buildings).\n\n2. Real-Time Dynamic APFC Panels (Thyristor Switched Capacitors - TSC):\n- Switching Medium: Anti-parallel thyristor (SCR) modules.\n- Zero-Voltage Crossing Switching (ZVS): Thyristors are gated ON at the precise microsecond when the supply AC sine wave voltage equals the capacitor residual DC storage voltage. At this exact moment, dV/dt across the switch is zero, producing ZERO inrush current and ZERO switching transients!\n- Switching Time: 10 to 20 milliseconds (within one half to one full AC cycle).\n- Reconnection Lockout: Zero seconds. Can be switched on and off every half-cycle continuously.\n- Operating Lifetime: Millions of operations (solid-state, zero moving parts, zero contact wear).\n- Cost: 2 to 3 times higher than contactor panels.\n- Best Suited For: Rapidly fluctuating, shock-load industrial environments (automobile robotic spot welding, steel rolling mills, harbor container cranes, plastic injection molding).',
        hi: 'कांटेक्टर बनाम थाइरिस्टर (TSC) पैनल:\n\n1. साधारण कांटेक्टर पैनल: AC-6b कांटेक्टर का उपयोग करते हैं। स्विचिंग में 2 से 5 सेकंड लगते हैं और रीकनेक्शन के लिए 90 से 180 सेकंड का डिस्चार्ज समय चाहिए। यह धीमी गति से बदलने वाले लोड (कपड़ा मिल, पेपर मिल) के लिए उपयुक्त है।\n\n2. थाइरिस्टर स्विच्ड कैपेसिटर (TSC): एंटी-पैरेलल थाइरिस्टर द्वारा शून्य-वोल्टेज क्रॉसिंग पर 10 से 20 मिलीसेकंड में बिना किसी इनरश करंट के स्विचिंग होती है। इसका जीवनकाल असीमित होता है और यह ऑटोमोबाइल रोबोटिक वेल्डिंग, क्रेन और रोलिंग मिलों के लिए सर्वोत्तम है।',
        bn: 'কন্টাক্টর বনাম থাইরিস্টর (TSC) প্যানেল:\n\n১. সাধারণ কন্টাক্টর প্যানেল: এতে AC-6b কন্টাক্টর ব্যবহৃত হয়। সিদ্ধান্ত নিতে ২-৫ সেকেন্ড সময় নেয় এবং পুনরায় চালু করতে ৯০-১৮০ সেকেন্ড অপেক্ষা করতে হয়। এটি টেক্সটাইল বা কাগজের কলের মতো ধীরগতির লোডে উপযোগী।\n\n২. থাইরিস্টর সুইচড ক্যাপাসিটর (TSC): জিরো-ভোল্টেজ ক্রসিং প্রযুক্তিতে পরিচালিত সলিড-স্টেট সুইচ। মাত্র ১০-২০ মিলিসেকেন্ডে কোনো ক্ষতিকর স্পার্ক বা ইনরাশ কারেন্ট ছাড়াই অন হয়। এটি অটোমোবাইল স্পট ওয়েল্ডিং, লিফট ও রোলিং মিলের মতো দ্রুত পরিবর্তনশীল লোডে অপরিহার্য।'
      }
    }
  ],
  examples: [
    {
      id: 'ex-ch13-l04-01',
      title: {
        en: 'APFC Relay C/k Threshold Calculation for an Industrial Incomer',
        hi: 'औद्योगिक इनकमर के लिए APFC रिले C/k थ्रेशहोल्ड गणना',
        bn: 'শিল্প ইনকামারের জন্য APFC রিলে C/k থ্রেশহোল্ড হিসাব'
      },
      problem: {
        en: 'A 415 V, 50 Hz industrial sub-distribution switchboard is equipped with an incoming Current Transformer rated at 1200 / 5 A. The APFC panel has a total capacity of 300 kVAR organized into 6 steps of 25 kVAR and 3 steps of 50 kVAR. Calculate:\n1. The exact theoretical C/k sensitivity setting for the controller.\n2. The primary line current and secondary CT current drawn by the smallest 25 kVAR step.\n3. The reactive current threshold above which the controller will command the first step to switch ON assuming a 65% trigger threshold.',
        hi: 'एक 415 V, 50 Hz औद्योगिक स्विचबोर्ड में 1200 / 5 A रेटिंग का इनकमिंग करंट ट्रांसफार्मर (CT) लगा है। APFC पैनल की कुल क्षमता 300 kVAR है जिसमें 25 kVAR के 6 स्टेप और 50 kVAR के 3 स्टेप हैं। गणना करें:\n1. कंट्रोलर के लिए सटीक सैद्धांतिक C/k सेटिंग।\n2. सबसे छोटे 25 kVAR स्टेप द्वारा खींची जाने वाली प्राइमरी लाइन धारा और सेकेंडरी CT धारा।\n3. 65% थ्रेशहोल्ड मानते हुए वह न्यूनतम रिएक्टिव करंट जिस पर रिले पहले स्टेप को ऑन करने का आदेश देगा।',
        bn: 'একটি ৪১৫ V, ৫০ Hz সাব-ডিস্ট্রিবিউশন প্যানেলে ১২০০ / ৫ A কারেন্ট ট্রান্সফরমার (CT) বসানো আছে। APFC প্যানেলে মোট ৩০০ kVAR ক্যাপাসিটর রয়েছে, যার মধ্যে ২৫ kVAR এর ৬টি ধাপ এবং ৫০ kVAR এর ৩টি ধাপ আছে। নির্ণয় করুন:\n১. কন্ট্রোলারের সঠিক তাত্ত্বিক C/k সেটিং।\n২. ক্ষুদ্রতম ২৫ kVAR ধাপের প্রাইমারি লাইন কারেন্ট এবং সেকেন্ডারি CT কারেন্ট।\n৩. ৬৫% থ্রেশহোল্ড ধরে কত সেকেন্ডারি কারেন্টে কন্ট্রোলার প্রথম ধাপটি অন করবে।'
      },
      solution: {
        en: 'Step 1: Calculate CT Ratio:\nCT_ratio = I_prim / I_sec = 1200 / 5 = 240\n\nStep 2: Identify smallest step size and calculate primary capacitor current:\nQ_step = 25 kVAR = 25,000 VAR\nI_C_prim = Q_step / (√3 · V_L) = 25,000 / (√3 · 415) = 25,000 / 718.8 = 34.78 A\n\nStep 3: Calculate theoretical C/k setting (secondary current):\nC/k = I_C_prim / CT_ratio = 34.78 A / 240 = 0.1449 A ≈ 0.145 A\n\nStep 4: Check using direct C/k formula:\nC/k = (25 · 1000) / [√3 · 415 · (1200 / 5)] = 25,000 / [718.8 · 240] = 25,000 / 172,512 = 0.1449 A\nProgram the APFC relay C/k parameter to: 0.14 or 0.15.\n\nStep 5: Calculate 65% trigger threshold:\nI_trigger_sec = 0.65 · (C/k) = 0.65 · 0.145 A = 0.094 A on CT secondary\nReferred to primary line: I_trigger_prim = 0.094 A · 240 = 22.56 A reactive deficit.\n\nConclusion: When the plant reactive current deficit exceeds 22.56 A (secondary current > 0.094 A), the APFC controller safely triggers the first 25 kVAR step without any danger of hunting oscillation.',
        hi: 'चरण 1: CT अनुपात = 1200 / 5 = 240\n\nचरण 2: 25 kVAR की प्राइमरी धारा:\nI_C_prim = 25,000 / (√3 · 415) = 34.78 A\n\nचरण 3: C/k सेटिंग (सेकेंडरी धारा):\nC/k = 34.78 / 240 = 0.145 A (रिले में 0.14 या 0.15 सेट करें)।\n\nचरण 4: 65% ट्रिगर थ्रेशहोल्ड:\nI_trigger = 0.65 · 0.145 = 0.094 A (प्राइमरी पर 22.56 A)।\n\nनिष्कर्ष: जब रिएक्टिव करंट की कमी 22.56 A से अधिक होती है, तब रिले बिना किसी हंटिंग के पहला 25 kVAR स्टेप ऑन करता है।',
        bn: 'ধাপ ১: CT অনুপাত = ১২০০ / ৫ = ২৪০\n\nধাপ ২: ২৫ kVAR ধাপের প্রাইমারি কারেন্ট:\nI_C_prim = ২৫,০০০ / (√৩ · ৪১৫) = ৩৪.৭৮ A\n\nধাপ ৩: C/k সেটিং:\nC/k = ৩৪.৭৮ / ২৪০ = ০.১৪৫ A (রিলেতে ০.১৪৫ সেট করতে হবে)।\n\nধাপ ৪: ৬৫% ট্রিগার থ্রেশহোল্ড:\nসেকেন্ডারিতে ট্রিগার কারেন্ট = ০.৬৫ · ০.১৪৫ = ০.০৯৪ A (প্রাইমারিতে ২২.৫৬ A)।\n\nফলাফল: কারখানায় ২২.৫৬ অ্যাম্পিয়ারের বেশি রিঅ্যাক্টিভ কারেন্টের ঘাটতি দেখা দিলে কন্ট্রোলার কোনো কম্পন ছাড়াই নিরাপদে প্রথম ২৫ kVAR ধাপ চালু করবে।'
      }
    },
    {
      id: 'ex-ch13-l04-02',
      title: {
        en: 'Comparison of Linear vs Binary APFC Panel Step Resolution',
        hi: 'रैखिक बनाम बाइनरी APFC पैनल स्टेप रिज़ॉल्यूशन की तुलना',
        bn: 'লিনিয়ার বনাম বাইনারি APFC প্যানেল স্টেপ রেজোলিউশনের তুলনা'
      },
      problem: {
        en: 'A manufacturing facility requires 150 kVAR of total compensation. An engineer compares two panel designs:\n- Design A: Linear panel with 6 equal steps of 25 kVAR.\n- Design B: Binary panel with 4 steps sized 10, 20, 40, and 80 kVAR.\nCompare the number of switching contactors, the minimum step resolution, and the contactor duty-cycle wear implications.',
        hi: 'एक विनिर्माण इकाई को 150 kVAR कुल क्षतिपूर्ति की आवश्यकता है। एक इंजीनियर दो डिज़ाइनों की तुलना करता है:\n- डिज़ाइन A: 25 kVAR के 6 समान चरणों वाला रैखिक (लीनियर) पैनल।\n- डिज़ाइन B: 10, 20, 40 और 80 kVAR चरणों वाला बाइनरी पैनल।\nकांटेक्टरों की संख्या, नियंत्रण परिशुद्धता और घिसाव की तुलना करें।',
        bn: 'একটি উৎপাদন কারখানায় ১৫০ kVAR ক্ষতিপূরণ প্রয়োজন। একজন প্রকৌশলী দুটি ডিজাইন তুলনা করছেন:\n- ডিজাইন A: ২৫ kVAR এর ৬টি সমান ধাপের লিনিয়ার প্যানেল।\n- ডিজাইন B: ১০, ২০, ৪০ এবং ৮০ kVAR ধাপের বাইনারি প্যানেল।\nকন্টাক্টরের সংখ্যা, সূক্ষ্মতা এবং যন্ত্রাংশের ক্ষয়ক্ষতির তুলনা করুন।'
      },
      solution: {
        en: 'Step 1: Compare number of contactors:\n- Design A requires 6 contactors and 6 branch fuses to achieve 150 kVAR.\n- Design B requires only 4 contactors and 4 branch fuses to achieve 150 kVAR (10 + 20 + 40 + 80 = 150 kVAR).\nDesign B saves 33% on contactors and cabinet wiring space.\n\nStep 2: Compare step resolution:\n- Design A has a minimum step resolution of 25 kVAR. It can only generate discrete steps of 25, 50, 75, 100, 125, and 150 kVAR (6 states).\n- Design B has a minimum step resolution of 10 kVAR. By combining binary stages (e.g., 10, 20, 10+20=30, 40, 40+10=50, etc.), it can produce 15 discrete levels in 10 kVAR increments (10 to 150 kVAR).\nDesign B provides 2.5x finer resolution, maintaining target PF closer to 0.99 under variable loads.\n\nStep 3: Analyze operational wear and maintenance:\n- Design A can use Rotational FIFO sequencing. When stepping down, the oldest energized bank turns off first, distributing operating hours uniformly across all 6 contactors.\n- In Design B, the smallest 10 kVAR and 20 kVAR stages must switch on and off repeatedly during minor load variations, causing rapid contact wear on stages 1 and 2 while stage 4 (80 kVAR) operates rarely.\n\nConclusion: Design B offers lower capital cost and superior power factor resolution, but Design A offers far greater mechanical reliability and uniform component longevity.',
        hi: 'चरण 1: कांटेक्टर संख्या: डिज़ाइन A में 6 कांटेक्टर चाहिए, डिज़ाइन B में केवल 4 कांटेक्टर (10+20+40+80 = 150 kVAR)। डिज़ाइन B 33% कांटेक्टर बचाता है।\n\nचरण 2: रिज़ॉल्यूशन: डिज़ाइन A में न्यूनतम स्टेप 25 kVAR है (6 संयोजन)। डिज़ाइन B में न्यूनतम स्टेप 10 kVAR है और 15 संयोजन संभव हैं (ढाई गुना बेहतर नियंत्रण)।\n\nचरण 3: घिसाव: डिज़ाइन A में FIFO रोटेशन द्वारा सभी 6 कांटेक्टरों पर समान लोड रहता है। डिज़ाइन B में 10 और 20 kVAR के छोटे कांटेक्टर बहुत जल्दी खराब हो जाते हैं।\n\nनिष्कर्ष: डिज़ाइन B सस्ता और अधिक सटीक है, परंतु डिज़ाइन A अधिक टिकाऊ और भरोसेमंद है।',
        bn: 'ধাপ ১: কন্টাক্টরের সংখ্যা: ডিজাইন A-তে ৬টি কন্টাক্টর লাগে, ডিজাইন B-তে মাত্র ৪টি (১০+২০+৪০+৮০ = ১৫০ kVAR)। ডিজাইন B ৩৩% কন্টাক্টর সাশ্রয় করে।\n\nধাপ ২: সূক্ষ্মতা: ডিজাইন A-র রেজোলিউশন ২৫ kVAR (৬টি স্টেট)। ডিজাইন B-র রেজোলিউশন ১০ kVAR এবং এতে ১৫টি কম্বিনেশন তৈরি করা যায় (২.৫ গুণ বেশি নিখুঁত)।\n\nধাপ ৩: যন্ত্রাংশের ক্ষয়: ডিজাইন A-তে FIFO রোটেশনের মাধ্যমে সব কন্টাক্টরের ওপর সমান চাপ থাকে। ডিজাইন B-তে ছোট ১০ ও ২০ kVAR কন্টাক্টর ঘনঘন অন-অফ হওয়ায় দ্রুত নষ্ট হয়ে যায়।\n\nফলাফল: ডিজাইন B সাশ্রয়ী ও বেশি নিখুঁত, কিন্তু ডিজাইন A দীর্ঘস্থায়ী ও নির্ভরযোগ্য।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Commercial High-Rise Buildings: APFC panels automatically stepping capacitor banks as HVAC chillers, elevators, and water pumps cycle throughout the business day.',
      'Automobile Stamping & Robotic Welding Plants: Fast-acting Thyristor-Switched Capacitor (TSC) panels compensating sub-second reactive power surges from spot-welding guns without dipping bus voltage.',
      'Steel Rolling Mills: Integrated APFC panels stepping tuned capacitor banks in coordination with DC thyristor drive load profiles.'
    ],
    hi: [
      'व्यावसायिक गगनचुंबी इमारतें: दिन भर में HVAC चिलर, लिफ्ट और वाटर पंपों के चालू-बंद होने पर कैपेसिटर चरणों को स्वचालित रूप से स्विच करना।',
      'ऑटोमोबाइल रोबोटिक वेल्डिंग प्लांट: स्पॉट-वेल्डिंग गन से होने वाले तेज वोल्टेज ड्रॉप को रोकने के लिए मिलीसेकंड में काम करने वाले थाइरिस्टर स्विच्ड कैपेसिटर (TSC) पैनल।',
      'स्टील रोलिंग मिल: भारी रोलिंग मोटरों के लोड के अनुसार ट्यून्ड कैपेसिटर बैंकों को नियंत्रित करने वाले APFC पैनल।'
    ],
    bn: [
      'বাণিজ্যিক বহুতল ভবন: দিনভর লিফট, পানির পাম্প এবং সেন্ট্রাল এয়ার কন্ডিশনারের পরিবর্তনশীল লোড সামলাতে স্বয়ংক্রিয় APFC প্যানেল।',
      'অটোমোবাইল রোবোটিক ওয়েল্ডিং কারখানা: দ্রুতগতির স্পট-ওয়েল্ডিংয়ের ভোল্টেজ ড্রপ ঠেকাতে মিলিসেকেন্ডে কাজ করা থাইরিস্টর সুইচড ক্যাপাসিটর (TSC) প্যানেল।',
      'ইস্পাত রোলিং মিল: ভারী রোলিং ড্রাইভের লোড পরিবর্তনের সাথে সমন্বয় রেখে টিউনড ক্যাপাসিটর ব্যাংক পরিচালনা।'
    ]
  },
  importantPoints: {
    en: [
      'Incorrect C/k setting is the #1 cause of APFC contactor burnout; if set too low, the controller enters destructive continuous hunting oscillations.',
      'The APFC Current Transformer (CT) MUST be installed on the main incoming supply phase UPSTREAM of both the load and the capacitor panel feed, otherwise the controller cannot see its own correction!',
      'Controllers must enforce a minimum 90–180 second reconnection lockout timer on every step to allow internal bleed resistors to discharge trapped DC voltages.'
    ],
    hi: [
      'गलत C/k सेटिंग APFC कांटेक्टर जलने का सबसे मुख्य कारण है; यदि यह बहुत कम सेट है, तो पैनल विनाशकारी हंटिंग में चला जाता है।',
      'APFC का करंट ट्रांसफार्मर (CT) लोड और कैपेसिटर दोनों के ऊपर मुख्य इनकमिंग लाइन पर लगा होना चाहिए, अन्यथा रिले अपने स्वयं के सुधार को नहीं देख पाएगा!',
      'कैपेसिटर के अंदर फंसे वोल्टेज को डिस्चार्ज करने के लिए कंट्रोलर में प्रत्येक स्टेप पर 90 से 180 सेकंड का रीकनेक्शन लॉकआउट टाइमर होना अनिवार्य है।'
    ],
    bn: [
      'ভুল C/k সেটিং APFC কন্টাক্টর পুড়ে যাওয়ার প্রধান কারণ; এটি খুব কম সেট করা হলে সিস্টেম অনবরত ক্ষতিকর হান্টিং শুরু করে।',
      'APFC প্যানেলের CT অবশ্যই মূল ইনকামিং লাইনে লোড ও ক্যাপাসিটর উভয়ের পূর্বে স্থাপন করতে হবে, নতুবা রিলে নিজের সংশোধন দেখতে পাবে না!',
      'টার্মিনালের ডিসি ভোল্টেজ ডিসচার্জ হতে দেওয়ার জন্য কন্ট্রোলারে প্রতিটি ধাপে কমপক্ষে ৯০-১৮০ সেকেন্ডের রিকানেকশন লকআউট টাইমার থাকা বাধ্যতামূলক।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistake: Installing the APFC CT on a feeder cable downstream of the capacitor bank connection. Correction: If the CT is downstream of the capacitor bank, the capacitor current bypasses the CT. The controller sees uncompensated load current, switches ON all capacitor steps, and overcompensates the main bus to dangerous overvoltages.',
      'Mistake: Setting the reconnection delay timer to 5 seconds to achieve "faster" response with contactors. Correction: Discharged capacitors need 60–180 seconds to bleed down to safe levels. Re-energizing a charged capacitor at 180° phase opposition produces thousands of amps inrush that welds contactors and punctures capacitor dielectric.'
    ],
    hi: [
      'त्रुटि: APFC के CT को कैपेसिटर बैंक कनेक्शन के नीचे स्थापित करना। सुधार: ऐसा करने पर रिले कैपेसिटर के करंट को नहीं देख पाएगा और सभी स्टेप्स को ऑन करके लाइन में अत्यधिक ओवरवोल्टेज पैदा कर देगा।',
      'त्रुटि: तेज प्रतिक्रिया के लालच में रीकनेक्शन टाइमर को केवल 5 सेकंड पर सेट करना। सुधार: कैपेसिटर को डिस्चार्ज होने में 60 से 180 सेकंड लगते हैं। चार्ज कैपेसिटर को तुरंत चालू करने से हजारों एम्पीयर का इनरश बहता है जो कांटेक्टर को जला देता है।'
    ],
    bn: [
      'ভুল: APFC প্যানেলের CT-কে ক্যাপাসিটর সংযোগের পরে (ডাউনস্ট্রিমে) লাগানো। সংশোধন: এতে ক্যাপাসিটর কারেন্ট CT দিয়ে প্রবাহিত না হওয়ায় কন্ট্রোলার ভাববে কোনো সংশোধন হয়নি এবং সব ধাপ অন করে মারাত্মক ওভারভোল্টেজ তৈরি করবে।',
      'ভুল: দ্রুত প্রতিক্রিয়ার আশায় রিকানেকশন টাইমার ৫ সেকেন্ডে নামিয়ে আনা। সংশোধন: ক্যাপাসিটর ডিসচার্জ হতে ৬০-১৮০ সেকেন্ড সময় লাগে। চার্জ অবস্থায় পুনরায় অন করলে বিপরীত ফেজের কারণে হাজার হাজার অ্যাম্পিয়ার কারেন্ট এসে কন্টাক্টর গলিয়ে দেবে।'
    ]
  },
  keyTakeaways: {
    en: [
      'APFC panels automatically adjust capacitive kVAR to match dynamic factory load profiles.',
      'The C/k threshold parameter prevents destructive contactor hunting by creating an essential hysteresis deadband.',
      'Thyristor Switched Capacitors (TSC) provide sub-cycle (10–20 ms) transient-free compensation for highly dynamic shock loads.'
    ],
    hi: [
      'APFC पैनल गतिशील फैक्ट्री लोड के अनुसार कैपेसिटिव kVAR को स्वचालित रूप से समायोजित करते हैं।',
      'C/k थ्रेशहोल्ड एक आवश्यक हिस्टैरिसीस बनाकर कांटेक्टरों की विनाशकारी हंटिंग को रोकता है।',
      'थाइरिस्टर स्विच्ड कैपेसिटर (TSC) अचानक बदलने वाले लोड के लिए 10-20 मिलीसेकंड में बिना झटके के सुधार प्रदान करते हैं।'
    ],
    bn: [
      'APFC প্যানেল গতিশীল কারখানার লোডের সাথে মিল রেখে ক্যাপাসিটিভ kVAR স্বয়ংক্রিয়ভাবে নিয়ন্ত্রণ করে।',
      'C/k থ্রেশহোল্ড সেটিং সিস্টেমে হিস্টেরেসিস তৈরি করে কন্টাক্টরের হান্টিং ও অপচয় রোধ করে।',
      'থাইরিস্টর সুইচড ক্যাপাসিটর (TSC) দ্রুত পরিবর্তনশীল লোডের জন্য মাত্র ১০-২০ মিলিসেকেন্ডে ট্রানজিয়েন্ট-মুক্ত ক্ষতিপূরণ দেয়।'
    ]
  },
  practiceQuestions: [
    {
      id: 'pq-ch13-l04-01',
      question: {
        en: 'A plant has a 415 V bus with a 2000 / 5 A CT and an APFC panel with a smallest step of 50 kVAR. What is the calculated theoretical C/k setting, and what happens if the technician mistakenly inputs C/k = 0.05?',
        hi: 'एक प्लांट में 415 V बस, 2000 / 5 A CT और 50 kVAR के सबसे छोटे स्टेप वाला APFC पैनल है। सैद्धांतिक C/k सेटिंग क्या होगी, और यदि तकनीशियन गलती से C/k = 0.05 सेट कर दे तो क्या होगा?',
        bn: 'একটি ৪১৫ V বাসে ২০০০ / ৫ A CT এবং ৫০ kVAR ক্ষুদ্রতম ধাপের APFC প্যানেল রয়েছে। তাত্ত্বিক C/k সেটিং কত হবে এবং টেকনিশিয়ান ভুল করে C/k = ০.০৫ দিলে কী ঘটবে?'
      },
      hint: {
        en: 'Calculate C/k = (50 · 1000) / [√3 · 415 · (2000/5)]. If set too low (0.05 vs true value), analyze whether the relay will hunt uncontrollably.',
        hi: 'C/k सूत्र से मान निकालें। यदि मान वास्तविक से बहुत कम सेट किया जाए, तो क्या रिले छोटी सी कमी पर भी 50 kVAR ऑन करके हंटिंग शुरू कर देगा?',
        bn: 'C/k সূত্র ব্যবহার করে মান বের করুন। প্রকৃত মানের চেয়ে অনেক কম সেট করলে রিলে কি সামান্য লোডেই অন-অফ করে হান্টিং শুরু করবে?'
      }
    },
    {
      id: 'pq-ch13-l04-02',
      question: {
        en: 'Why is zero-voltage crossing switching essential in Thyristor Switched Capacitor (TSC) panels, and how does it prevent contact welding and transient overvoltages?',
        hi: 'थाइरिस्टर स्विच्ड कैपेसिटर (TSC) पैनलों में शून्य-वोल्टेज क्रॉसिंग स्विचिंग क्यों आवश्यक है, और यह संपर्क वेल्डिंग एवं क्षणिक ओवरवोल्टेज को कैसे रोकती है?',
        bn: 'থাইরিস্টর সুইচড ক্যাপাসিটর (TSC) প্যানেলে জিরো-ভোল্টেজ ক্রসিং সুইচিং কেন অপরিহার্য এবং এটি কীভাবে ক্ষতিকর ইনরাশ কারেন্ট ও ট্রানজিয়েন্ট প্রতিরোধ করে?'
      },
      hint: {
        en: 'Consider the capacitor fundamental equation i = C · (dv/dt). What is the inrush current if the switch closes when the voltage difference across it is zero?',
        hi: 'कैपेसिटर के मौलिक सूत्र i = C · (dv/dt) पर विचार करें। यदि स्विच के दोनों ओर वोल्टेज का अंतर शून्य हो तो करंट क्या होगा?',
        bn: 'ক্যাপাসিটরের মূল সূত্র i = C · (dv/dt) বিবেচনা করুন। সুইচের দুই প্রান্তে ভোল্টেজের ব্যবধান শূন্য হলে ইনরাশ কারেন্ট কত হবে?'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch13-l04-01',
      question: {
        en: 'What is the primary function of the C/k setting in an Automatic Power Factor Correction (APFC) relay?',
        hi: 'स्वचालित पावर फैक्टर सुधार (APFC) रिले में C/k सेटिंग का प्राथमिक कार्य क्या है?',
        bn: 'অটোমেটিক পাওয়ার ফ্যাক্টর কারেকশন (APFC) রিলেতে C/k সেটিংয়ের প্রধান কাজ কী?'
      },
      options: [
        { en: 'To establish a sensitivity threshold and hysteresis deadband that prevents contactor hunting', hi: 'एक संवेदनशीलता सीमा और हिस्टैरिसीस डेडबैंड स्थापित करना जो कांटेक्टर हंटिंग को रोकता है', bn: 'একটি সংবেদনশীলতা থ্রেশহোল্ড এবং ডেডব্যান্ড তৈরি করা যা কন্টাক্টরের হান্টিং রোধ করে' },
        { en: 'To measure the insulation resistance of the capacitor dielectric in megaohms', hi: 'मेगाओम में कैपेसिटर डाइइलेक्ट्रिक के इंसुलेशन प्रतिरोध को मापना', bn: 'মেগাওহমে ক্যাপাসিটরের ডাই-ইলেকট্রিক ইনসুলেশন রোধ পরিমাপ করা' },
        { en: 'To regulate the supply frequency between 49.5 Hz and 50.5 Hz', hi: 'आपूर्ति आवृत्ति को 49.5 Hz और 50.5 Hz के बीच नियंत्रित करना', bn: 'সাপ্লাই ফ্রিকোয়েন্সি ৪৯.৫ Hz থেকে ৫০.৫ Hz এর মধ্যে নিয়ন্ত্রণ করা' },
        { en: 'To calculate utility electricity tariff surcharges automatically', hi: 'बिजली उपयोगिता अधिभार की स्वचालित रूप से गणना करना', bn: 'ইউটিলিটি বিদ্যুৎ বিলের জরিমানা স্বয়ংক্রিয়ভাবে হিসাব করা' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'The C/k setting establishes the minimum reactive current on the CT secondary needed to trigger the smallest capacitor step. It creates a deadband that prevents continuous oscillation (hunting) on and off.',
        hi: 'C/k सेटिंग सबसे छोटे कैपेसिटर चरण को ट्रिगर करने के लिए CT सेकेंडरी पर आवश्यक न्यूनतम करंट तय करती है, जिससे लगातार चालू-बंद होने वाली हंटिंग रुकती है।',
        bn: 'C/k সেটিং ক্ষুদ্রতম ক্যাপাসিটর ধাপ অন করার জন্য CT সেকেন্ডারিতে ন্যূনতম প্রয়োজনীয় কারেন্ট নির্ধারণ করে একটি ডেডব্যান্ড তৈরি করে, যা অনবরত হান্টিং প্রতিরোধ করে।'
      }
    },
    {
      id: 'mcq-ch13-l04-02',
      question: {
        en: 'Where MUST the Current Transformer (CT) for an APFC panel be physically installed in a plant distribution network?',
        hi: 'एक संयंत्र वितरण नेटवर्क में APFC पैनल के लिए करंट ट्रांसफार्मर (CT) भौतिक रूप से कहाँ स्थापित किया जाना चाहिए?',
        bn: 'কারখানার বিদ্যুৎ বিতরণ ব্যবস্থায় APFC প্যানেলের কারেন্ট ট্রান্সফরমার (CT) কোথায় স্থাপন করা বাধ্যতামূলক?'
      },
      options: [
        { en: 'On the main incoming supply bus upstream of both plant load and the capacitor bank feed', hi: 'प्लांट लोड और कैपेसिटर बैंक फीड दोनों के अपस्ट्रीम मुख्य इनकमिंग सप्लाई बस पर', bn: 'কারখানার লোড এবং ক্যাপাসিটর ব্যাংক সংযোগ উভয়ের পূর্বে মূল ইনকামিং বাসে' },
        { en: 'Directly inside the capacitor bank neutral connection point only', hi: 'केवल कैपेसिटर बैंक के न्यूट्रल कनेक्शन बिंदु के ठीक अंदर', bn: 'শুধুমাত্র ক্যাপাসিটর ব্যাংকের নিউট্রাল সংযোগ বিন্দুর ভেতরে' },
        { en: 'On the smallest branch circuit motor cable downstream of all panels', hi: 'सभी पैनलों के नीचे सबसे छोटे मोटर केबल पर', bn: 'সব প্যানেলের পরে ক্ষুদ্রতম মোটর ক্যাবলের ওপর' },
        { en: 'In series with the backup diesel generator battery charger', hi: 'बैकअप डीजल जनरेटर बैटरी चार्जर के साथ श्रेणी में', bn: 'ব্যাকআপ ডিজেল জেনারেটরের ব্যাটারি চার্জারের সাথে সিরিজে' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'The CT must sense total current (Load Current + Capacitor Current). If installed downstream of the capacitor connection, the capacitor current never flows through the CT, rendering the controller blind to its own corrective action.',
        hi: 'CT को कुल करंट (लोड + कैपेसिटर) को मापना चाहिए। यदि यह कैपेसिटर के नीचे लगा होगा, तो रिले अपने ही द्वारा किए गए सुधार को नहीं देख पाएगा।',
        bn: 'CT-কে অবশ্যই মোট কারেন্ট (লোড কারেন্ট + ক্যাপাসিটর কারেন্ট) পরিমাপ করতে হবে। ক্যাপাসিটরের পরে বসালে ক্যাপাসিটরের নিজস্ব কারেন্ট CT দিয়ে যাবে না, ফলে রিলে সংশোধন বুঝতে পারবে না।'
      }
    },
    {
      id: 'mcq-ch13-l04-03',
      question: {
        en: 'Why do APFC controllers enforce an intentional reconnection delay lockout (typically 60 to 180 seconds) on every capacitor step?',
        hi: 'APFC नियंत्रक प्रत्येक कैपेसिटर चरण पर जानबूझकर रीकनेक्शन विलंब लॉकआउट (आमतौर पर 60 से 180 सेकंड) क्यों लागू करते हैं?',
        bn: 'APFC কন্ট্রোলার প্রতিটি ক্যাপাসিটর ধাপে ৬০ থেকে ১৮০ সেকেন্ডের রিকানেকশন লকআউট বিলম্ব কেন বাধ্যতামূলক করে?'
      },
      options: [
        { en: 'To allow internal bleed resistors time to safely discharge trapped residual DC voltage before re-energization', hi: 'पुनः चालू करने से पहले आंतरिक रेसिस्टरों द्वारा अवशिष्ट डीसी वोल्टेज को सुरक्षित रूप से डिस्चार्ज करने का समय देना', bn: 'পুনরায় চালু করার আগে অভ্যন্তরীণ রেজিস্টরের মাধ্যমে অবশিষ্ট ডিসি ভোল্টেজ নিরাপদ মাত্রায় নামার সময় দেওয়া' },
        { en: 'To allow the utility revenue meter to reset its billing demand registers', hi: 'बिजली मीटर को अपने बिलिंग रजिस्टरों को रीसेट करने की अनुमति देना', bn: 'বিদ্যুৎ মিটারকে তার বিলিং রেজিস্টার রিসেট করার সুযোগ দিতে' },
        { en: 'To cool down the copper busbars to ambient outdoor temperature', hi: 'तांबे के बसबारों को परिवेशी तापमान तक ठंडा करना', bn: 'তামার বাসবারগুলোকে পরিবেষ্টিত তাপমাত্রায় ঠাণ্ডা করতে' },
        { en: 'To enable human operators to visually inspect every fuse link', hi: 'ऑपरेटरों को प्रत्येक फ्यूज लिंक का दृश्य निरीक्षण करने में सक्षम बनाना', bn: 'অপারেটর যাতে প্রতিটি ফিউজ খালি চোখে পরীক্ষা করতে পারে' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Reclosing a capacitor onto an AC bus while it still holds trapped DC charge from previous conduction can cause an out-of-phase voltage difference of up to 2 · V_peak (over 1,000 V), triggering massive destructive inrush currents.',
        hi: 'चार्ज किए गए कैपेसिटर को विपरीत फेज में तुरंत फिर से चालू करने पर 1,000 V से अधिक का अंतर बन सकता है, जिससे अत्यधिक इनरश करंट बहकर कांटेक्टर को नष्ट कर देता है।',
        bn: 'চার্জ থাকা অবস্থায় একটি ক্যাপাসিটরকে বিপরীত ফেজের লাইনে পুনরায় যুক্ত করলে ১০০০ ভোল্টের বেশি বিভব পার্থক্য তৈরি হতে পারে, যা বিধ্বংসী ইনরাশ কারেন্ট সৃষ্টি করে।'
      }
    },
    {
      id: 'mcq-ch13-l04-04',
      question: {
        en: 'What is the main advantage of a rotational (FIFO) switching sequence in an APFC panel with equal-sized capacitor steps?',
        hi: 'समान आकार के कैपेसिटर चरणों वाले APFC पैनल में घूर्णी (FIFO) स्विचिंग अनुक्रम का मुख्य लाभ क्या है?',
        bn: 'সমান আকারের ক্যাপাসিটর ধাপযুক্ত APFC প্যানেলে রোটেশনাল (FIFO) সুইচিং সিকোয়েন্সের প্রধান সুবিধা কী?'
      },
      options: [
        { en: 'It equalizes operating hours and thermal stress uniformly across all contactors and capacitors', hi: 'यह सभी कांटेक्टरों और कैपेसिटरों में परिचालन घंटों और थर्मल तनाव को समान रूप से वितरित करता है', bn: 'এটি সব কন্টাক্টর এবং ক্যাপাসিটরের কাজের সময় ও তাপীয় চাপ সমানভাবে বন্টন করে' },
        { en: 'It eliminates the need for Current Transformers and voltage probes', hi: 'यह करंट ट्रांसफार्मर और वोल्टेज सेंसर की आवश्यकता को समाप्त करता है', bn: 'এর ফলে কোনো কারেন্ট ট্রান্সফরমার বা ভোল্টেজ সেন্সরের প্রয়োজন হয় না' },
        { en: 'It converts 3-phase AC power directly into pure direct current', hi: 'यह 3-फेज एसी पावर को सीधे शुद्ध डीसी करंट में बदल देता है', bn: 'এটি ৩-ফেজ এসি পাওয়ারকে সরাসরি ডিসিতে রূপান্তর করে' },
        { en: 'It prevents harmonic currents from entering the utility grid', hi: 'यह हार्मोनिक धाराओं को यूटिलिटी ग्रिड में प्रवेश करने से रोकता है', bn: 'এটি হারমোনিক কারেন্টকে ইউটিলিটি গ্রিডে ঢুকতে বাধা দেয়' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Rotational FIFO (First In, First Out) ensures that the capacitor step that has been energized the longest is the first one disconnected when load drops. This wear-leveling prevents premature burnout of stage 1.',
        hi: 'FIFO प्रणाली यह सुनिश्चित करती है कि जो कैपेसिटर सबसे पहले ऑन हुआ था, लोड घटने पर वही सबसे पहले बंद हो। इससे सभी कांटेक्टरों का घिसाव और उम्र समान रहती है।',
        bn: 'FIFO রোটেশনের মাধ্যমে যে ধাপটি সবচেয়ে আগে অন হয়েছিল, লোড কমলে সেটিকেই আগে অফ করা হয়। ফলে কোনো একটি নির্দিষ্ট কন্টাক্টরের ওপর অতিরিক্ত চাপ পড়ে না এবং সবার আয়ু সমান থাকে।'
      }
    },
    {
      id: 'mcq-ch13-l04-05',
      question: {
        en: 'How do Thyristor-Switched Capacitor (TSC) panels achieve transient-free switching with near-zero inrush current?',
        hi: 'थाइरिस्टर-स्विच्ड कैपेसिटर (TSC) पैनल लगभग शून्य इनरश करंट के साथ क्षणिक-मुक्त स्विचिंग कैसे प्राप्त करते हैं?',
        bn: 'থাইরিস্টর-সুইচড ক্যাপাসিটর (TSC) প্যানেল প্রায় শূন্য ইনরাশ কারেন্টে ট্রানজিয়েন্ট-মুক্ত সুইচিং কীভাবে অর্জন করে?'
      },
      options: [
        { en: 'By triggering the thyristors at the exact instant when supply AC voltage equals capacitor residual DC voltage (Zero Voltage Switching)', hi: 'थाइरिस्टर को ठीक उस क्षण ट्रिगर करके जब आपूर्ति एसी वोल्टेज कैपेसिटर अवशिष्ट डीसी वोल्टेज के बराबर होता है (ZVS)', bn: 'ঠিক যে মুহূর্তে সাপ্লাই এসি ভোল্টেজ ক্যাপাসিটরের অবশিষ্ট ডিসি ভোল্টেজের সমান হয়, সেই মুহূর্তে থাইরিস্টর ফায়ার করে (ZVS)' },
        { en: 'By placing large mechanical water brakes on the capacitor terminals', hi: 'कैपेसिटर टर्मिनलों पर बड़े यांत्रिक वाटर ब्रेक लगाकर', bn: 'ক্যাপাসিটর টার্মিনালে মেকানিক্যাল ওয়াটার ব্রেক ব্যবহার করে' },
        { en: 'By passing all current through a 10 kW continuous series resistor', hi: 'सभी करंट को 10 kW के निरंतर श्रृंखला प्रतिरोधक से गुजारकर', bn: 'সব কারেন্টকে একটি ১০ kW সিরিজ রেজিস্টরের মধ্য দিয়ে প্রবাহিত করে' },
        { en: 'By lowering the grid frequency to 1 Hz during switching', hi: 'स्विचिंग के दौरान ग्रिड आवृत्ति को 1 Hz तक घटाकर', bn: 'সুইচিংয়ের সময় গ্রিড ফ্রিকোয়েন্সি ১ Hz এ নামিয়ে এনে' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Because i = C · (dv/dt), if a thyristor closes when the voltage difference across its terminals is zero (supply voltage equals capacitor pre-charge voltage), dv is zero, resulting in zero switching inrush current.',
        hi: 'चूंकि i = C · (dv/dt) होता है, यदि स्विच तब चालू होता है जब उसके दोनों ओर वोल्टेज का अंतर शून्य हो, तो dv शून्य होने से इनरश करंट भी शून्य हो जाता है।',
        bn: 'যেহেতু i = C · (dv/dt), তাই সুইচের দুই প্রান্তের ভোল্টেজ সমান থাকা অবস্থায় সংযোগ দিলে বিভব পার্থক্য (dv) শূন্য থাকে এবং কোনো ইনরাশ কারেন্ট উৎপন্ন হয় না।'
      }
    },
    {
      id: 'mcq-ch13-l04-06',
      question: {
        en: 'For an incomer with a 1000 / 5 A CT and a 415 V line voltage, what is the C/k value for a 20 kVAR smallest step?',
        hi: '1000 / 5 A CT और 415 V लाइन वोल्टेज वाले इनकमर के लिए 20 kVAR के सबसे छोटे स्टेप का C/k मान क्या होगा?',
        bn: '১০০০ / ৫ A CT এবং ৪১৫ V লাইন ভোল্টেজ বিশিষ্ট একটি ইনকামারের ২০ kVAR ক্ষুদ্রতম ধাপের জন্য C/k মান কত হবে?'
      },
      options: [
        { en: '0.139 A', hi: '0.139 A', bn: '০.১৩৯ A' },
        { en: '1.39 A', hi: '1.39 A', bn: '১.৩৯ A' },
        { en: '0.028 A', hi: '0.028 A', bn: '০.০২৮ A' },
        { en: '2.78 A', hi: '2.78 A', bn: '২.৭৮ A' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'CT ratio = 1000 / 5 = 200. I_C_prim = 20,000 / (√3 · 415) = 27.82 A. C/k = I_C_prim / 200 = 27.82 / 200 = 0.1391 A.',
        hi: 'CT अनुपात = 200। I_C_prim = 20,000 / (√3 · 415) = 27.82 A। C/k = 27.82 / 200 = 0.139 A।',
        bn: 'CT অনুপাত = ১০০০ / ৫ = ২০০। I_C_prim = ২০,০০০ / (√৩ · ৪১৫) = ২৭.৮২ A। C/k = ২৭.৮২ / ২০০ = ০.১৩৯১ A।'
      }
    },
    {
      id: 'mcq-ch13-l04-07',
      question: {
        en: 'Which industrial application demands a Thyristor-Switched Capacitor (TSC) panel instead of an electro-mechanical contactor APFC panel?',
        hi: 'किस औद्योगिक अनुप्रयोग में इलेक्ट्रो-मैकेनिकल कांटेक्टर APFC पैनल के स्थान पर थाइरिस्टर-स्विच्ड कैपेसिटर (TSC) पैनल की आवश्यकता होती है?',
        bn: 'কোন শিল্পক্ষেত্রে সাধারণ মেকানিক্যাল কন্টাক্টর APFC প্যানেলের বদলে থাইরিস্টর-সুইচড ক্যাপাসিটর (TSC) প্যানেল ব্যবহার অপরিহার্য?'
      },
      options: [
        { en: 'High-speed robotic spot-welding lines with rapid sub-second reactive power fluctuations', hi: 'सब-सेकंड में तेजी से बदलने वाले लोड वाली हाई-स्पीड रोबोटिक स्पॉट-वेल्डिंग लाइनें', bn: 'দ্রুত ওঠানামা করা সাব-সেকেন্ড লোডযুক্ত হাই-স্পিড রোবোটিক স্পট-ওয়েল্ডিং লাইন' },
        { en: 'A municipal water pumping station running at continuous full load 24/7', hi: '24/7 निरंतर पूर्ण लोड पर चलने वाला नगर निगम का वाटर पंपिंग स्टेशन', bn: 'সার্বক্ষণিক পূর্ণ লোডে চলা মিউনিসিপ্যাল ওয়াটার পাম্পিং স্টেশন' },
        { en: 'A continuous chemical refinery crude oil distillation column pump', hi: 'एक निरंतर रासायनिक रिफाइनरी क्रूड ऑयल डिस्टिलेशन कॉलम पंप', bn: 'ক্রমাগত চলা রাসায়নিক কারখানার ক্রুড অয়েল পাম্প' },
        { en: 'A commercial office building ventilation exhaust fan array', hi: 'एक वाणिज्यिक कार्यालय भवन का वेंटिलेशन निकास पंखा सरणी', bn: 'বাণিজ্যিক ভবনের স্থির এক্সহস্ট ফ্যান ব্যবস্থা' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Spot welding machines fire for only 100–300 milliseconds. Mechanical contactors (which take 2–5 seconds to switch) are completely useless for sub-second reactive loads. Solid-state TSC panels respond in 10–20 ms.',
        hi: 'स्पॉट वेल्डिंग कुछ ही मिलीसेकंड के लिए होती है। कांटेक्टर 2 से 5 सेकंड लेते हैं, इसलिए वे इसके लिए अनुपयोगी हैं। केवल 10-20 मिलीसेकंड में काम करने वाले TSC पैनल ही इसे संभाल सकते हैं।',
        bn: 'স্পট ওয়েল্ডিং মাত্র ১০০-৩০০ মিলিসেকেন্ডের জন্য চলে। কন্টাক্টর অন হতে ২-৫ সেকেন্ড সময় নেয় বলে এটি ওয়েল্ডিংয়ের ভোল্টেজ ড্রপ ঠেকাতে পারে না। সেখানে ১০-২০ মিলিসেকেন্ডের TSC প্যানেল অপরিহার্য।'
      }
    },
    {
      id: 'mcq-ch13-l04-08',
      question: {
        en: 'What occurs if an APFC controller is programmed with a target power factor setpoint that is slightly leading (e.g., -0.96 leading)?',
        hi: 'यदि एक APFC नियंत्रक को थोड़ा लीडिंग (जैसे -0.96 लीडिंग) लक्षित पावर फैक्टर सेटपॉइंट के साथ प्रोग्राम किया जाए तो क्या होगा?',
        bn: 'যদি একটি APFC কন্ট্রোলারে লক্ষ্যমাত্রা সামান্য লিডিং (যেমন -০.৯৬ লিডিং) প্রোগ্রাম করা হয়, তবে কী ঘটবে?'
      },
      options: [
        { en: 'The panel will overcompensate the bus, causing dangerous system overvoltages and potential Ferranti effect voltage rises', hi: 'पैनल बस को ओवर-कंपेंसेट कर देगा, जिससे खतरनाक ओवरवोल्टेज और फेरांटी प्रभाव उत्पन्न हो सकता है', bn: 'প্যানেলটি বাসবারকে ওভার-কম্পেনসেট করবে, ফলে বিপজ্জনক ওভারভোল্টেজ ও ফেরান্টি ইফেক্ট দেখা দেবে' },
        { en: 'The active power consumption of the plant drops to zero watts', hi: 'संयंत्र की वास्तविक बिजली खपत शून्य वाट तक गिर जाती है', bn: 'কারখানার সক্রিয় বিদ্যুৎ খরচ শূন্য ওয়াটে নেমে আসবে' },
        { en: 'The main transformer will run 50% cooler than at unity power factor', hi: 'मुख्य ट्रांसफार्मर यूनिटी पावर फैक्टर की तुलना में 50% अधिक ठंडा चलेगा', bn: 'মূল ট্রান্সফরমার ইউনিটি পাওয়ার ফ্যাক্টরের চেয়ে ৫০% বেশি ঠাণ্ডা থাকবে' },
        { en: 'The controller automatically switches all capacitor fuses to circuit breakers', hi: 'कंट्रोलर स्वचालित रूप से सभी फ्यूज को सर्किट ब्रेकर में बदल देता है', bn: 'কন্ট্রোলার সব ফিউজকে স্বয়ংক্রিয়ভাবে সার্কিট ব্রেকারে রূপান্তর করবে' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Leading power factor means capacitive current exceeds inductive load demand. Leading currents flowing through system transformer and cable reactances cause terminal voltage to rise (Ferranti effect), threatening electronic equipment insulation.',
        hi: 'लीडिंग पावर फैक्टर का अर्थ है कि लाइन में कैपेसिटेंस अधिक है। सिस्टम प्रेरकता में बहने वाली लीडिंग धारा वोल्टेज को बढ़ा देती है, जो उपकरणों के लिए बेहद खतरनाक है।',
        bn: 'লিডিং পাওয়ার ফ্যাক্টরের অর্থ হলো লাইনে প্রয়োজনের চেয়ে বেশি ক্যাপাসিট্যান্স যুক্ত হয়েছে। ট্রান্সফরমার ও তারের রিঅ্যাক্ট্যান্সের মধ্য দিয়ে লিডিং কারেন্ট প্রবাহিত হলে ফেরান্টি ইফেক্টের কারণে ভোল্টেজ বিপজ্জনকভাবে বেড়ে যায়।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ch13-apfc-panel',
      title: {
        en: 'Multi-Stage APFC Panel Automation Schematic',
        hi: 'मल्टी-स्टेज APFC पैनल ऑटोमेशन आरेख',
        bn: 'মাল্টি-স্টেজ APFC প্যানেল অটোমেশন ডায়াগ্রাম'
      },
      caption: {
        en: 'Microprocessor APFC controller architecture with CT sensing, stage contactors, detuned reactors, and discharge circuitry.',
        hi: 'CT सेंसिंग, स्टेज कॉन्टैक्टर्स, डिट्यून्ड रिएक्टर्स और डिस्चार्ज सर्किटरी के साथ माइक्रोप्रोसेसर APFC कंट्रोलर आर्किटेक्चर।',
        bn: 'CT সেন্সিং, স্টেজ কন্টাক্টর, ডিটিউনড রিঅ্যাক্টর এবং ডিসচার্জ সার্কিট্রি সহ মাইক্রোপ্রসেসর APFC কন্ট্রোলার আর্কিটেকচার।'
      },
      svgType: 'circuit-ch13-apfc-panel'
    }
  ]
};
