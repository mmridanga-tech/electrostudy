import { Lesson } from '../types';

export const LESSON_SNUBBER_SMOOTHING_DECOUPLING: Lesson = {
  id: 'lsn-ch7-snubber-smoothing-decoupling',
  topicId: 'ch7-snubber-smoothing-decoupling',
  chapterId: 'ch-capacitors',
  order: 17,
  title: {
    en: 'Capacitor Applications: Snubber Circuits, DC Smoothing & Decoupling',
    hi: 'कैपेसिटर अनुप्रयोग: स्नबर परिपथ, डीसी स्मूथिंग एवं डीकपलिंग',
    bn: 'ক্যাপাসিটরের প্রয়োগ: স্নাবার সার্কিট, ডিসি স্মুথিং ও ডিকাপলিং'
  },
  description: {
    en: 'DC power supply reservoir capacitors & ripple factor, RC snubber circuits for inductive kickback protection in relays/thyristors, and high-frequency bypass/decoupling capacitors for ICs.',
    hi: 'डीसी पावर सप्लाई रिजर्वॉयर कैपेसिटर एवं रिपल फैक्टर, रिले/थायरिस्टर हेतु RC स्नबर परिपथ एवं ICs के लिए डीकपलिंग बाईपास कैपेसिटर।',
    bn: 'ডিসি পাওয়ার সাপ্লাই রিপল ফিল্টারিং ও স্মুথিং, রিলে ও ট্রায়াকের জন্য RC স্নাবার সার্কিট এবং ডিজিটাল আইসির ডিকাপলিং ক্যাপাসিটর।'
  },
  easyExplanation: {
    en: 'Capacitors act as local energy buffers and high-speed shock absorbers for electricity: (1) In a DC power adapter, large electrolytic capacitors smooth out pulsating bumps into smooth DC voltage; (2) In switching circuits with inductive coils or relays, RC snubbers absorb high-voltage spark spikes; (3) Right next to computer chips, tiny ceramic decoupling capacitors provide immediate surge currents during fast switching.',
    hi: 'कैपेसिटर बिजली के लिए लोकल एनर्जी बफर और शॉक-एब्जॉर्बर की तरह काम करते हैं: (1) पावर एडाप्टर में बड़े कैपेसिटर रेक्टिफायर के बाद आने वाले झटकों (रिपल) को सपाट और स्थिर डीसी वोल्टेज में बदल देते हैं; (2) रिले और मोटर स्विचिंग में RC स्नबर कॉइल के रिवर्स स्पार्क को सोख लेते हैं; (3) माइक्रोप्रोसेसर के पास लगे छोटे सिरेमिक डीकपलिंग कैपेसिटर चिप्स को वोल्टेज ड्रॉप से बचाते हैं।',
    bn: 'ক্যাপাসিটর সার্কিটের শক-অ্যাবজরবার ও ক্ষুদ্র ব্যাটারির মতো কাজ করে: (১) ডিসি অ্যাডাপ্টারে রেকটিফায়ারের পর ওঠানামা করা ভোল্টেজকে সোজা ও মসৃণ ডিসিতে রূপান্তর করে (স্মুথিং ফিল্টার); (২) রিলে ও মোটর সুইচে ক্ষতিকর হাই-ভোল্টেজ স্পার্ক বা ব্যাক-ইএমএফ শোষণ করে সুইচকে বাঁচায় (স্নাবার সার্কিট); (৩) মাইক্রোপ্রসেসর ও ডিজিটাল আইসির পাশে ইনস্ট্যান্ট কারেন্ট সরবরাহ করে ভোল্টেজ ড্রপ ঠেকায় (ডিকাপলিং ক্যাপাসিটর)।'
  },
  detailedExplanation: {
    en: `1. DC Power Supply Smoothing (Reservoir Filter):
When AC mains is rectified by a full-wave bridge rectifier, the raw output is a pulsating DC (100 Hz ripple for 50 Hz mains).
- A large capacitor C is connected across the load resistor R_L in parallel.
- Charging: During peak diode conduction, the capacitor charges rapidly to the peak voltage V_peak (V_m - 2·V_diode).
- Discharging: Between peaks, the diodes turn off, and the capacitor discharges slowly through load R_L with time constant τ = R_L · C.
- Peak-to-Peak Ripple Voltage (V_r):
  V_r(p-p) = I_{dc} / (2 · f · C) = V_{dc} / (2 · f · R_L · C)   [for full-wave]
- Ripple Factor (γ):
  γ = V_{r(rms)} / V_{dc} = 1 / (4 · √3 · f · R_L · C)

2. RC Snubber Circuits (dv/dt and Surge Suppression):
Inductors (motors, relay coils, transformers) resist current changes (v = -L · di/dt). When a switch or semiconductor (SCR, MOSFET, IGBT) opens suddenly:
- The collapsing magnetic field generates a massive inductive kickback spike (often 10x supply voltage), destroying semiconductors or causing relay contact arcing.
- An RC Snubber (a resistor R_s in series with a non-polarized film capacitor C_s) is connected across the switch or inductive load.
- Operation: The snubber capacitor absorbs the rapid surge energy by limiting the rate of voltage rise (dv/dt), while the series resistor limits the discharge current spike when the switch closes again and dampens resonant ringing.

3. Decoupling and Bypass Capacitors for ICs:
High-speed digital microcontrollers and logic ICs switch millions of transistors simultaneously, causing instantaneous current surges (di/dt) through PCB power traces with parasitic inductance (L_trace).
- This creates voltage dips (ΔV = L · di/dt) known as "ground bounce" or "rail sag".
- Placing a 0.1 μF (100 nF) surface-mount ceramic capacitor directly between each IC power pin (Vcc) and Ground pin (GND) provides ultra-low ESR/ESL local charge storage right at the silicon die, bypassing high-frequency noise directly to ground.`,
    hi: `1. डीसी पावर सप्लाई स्मूथिंग (फ़िल्टर कैपेसिटर):
रेक्टिफायर से निकलने वाले स्पंदित डीसी को सपाट करने हेतु बड़ा इलेक्ट्रोलाइटिक कैपेसिटर लगाया जाता है।
- फुल-वेव रिपल वोल्टेज: Vr(p-p) = Idc / (2 · f · C)
- कैपेसिटर जितना बड़ा होगा, आउटपुट डीसी में रिपल (शोर) उतना ही कम होगा।

2. RC स्नबर परिपथ (Snubber Circuit):
जब रिले या मोटर को अचानक बंद किया जाता है, तो इंडक्टेंस के कारण उच्च वोल्टेज स्पार्क (L · di/dt) उत्पन्न होता है।
- स्विच या थायरिस्टर के समानांतर में लगा RC स्नबर वोल्टेज के बढ़ने की दर (dv/dt) को सीमित करके उपकरणों की रक्षा करता है।

3. डीकपलिंग एवं बाईपास कैपेसिटर:
डिजिटल आईसी और माइक्रोकंट्रोलर के Vcc और GND पिनों के बिल्कुल पास 0.1 μF (100 nF) का सिरेमिक कैपेसिटर लगाया जाता है ताकि हाई-स्पीड स्विचिंग नॉइज़ को ग्राउंड किया जा सके।`,
    bn: `১. ডিসি পাওয়ার সাপ্লাই স্মুথিং ফিল্টার:
ফুল-ওয়েভ রেকটিফায়ারের পর পালসেটিং ডিসিকে খাঁটি ডিসিতে পরিণত করতে প্যারালালে বড় ক্যাপাসিটর ব্যবহার করা হয়।
- ফুল-ওয়েভ রিপল ভোল্টেজ: Vr(p-p) = Idc / (২ · f · C)
- ক্যাপাসিট্যান্স যত বড় হবে, ডিসি আউটপুটের ভোল্টেজ ওঠানামা (রিপল) তত কম হবে।

২. RC স্নাবার সার্কিট:
রিলে বা মোটরের সুইচ অফ করার সময় কয়েলের ব্যাক-ইএমএফ (L · di/dt) এর কারণে প্রচণ্ড ভোল্টেজ স্পাইক তৈরি হয় যা সুইচ নষ্ট করে দিতে পারে। সুইচের প্যারালালে একটি রেজিস্টর ও ক্যাপাসিটর (RC Snubber) যুক্ত করে এই স্পাইক নিরাপদে শোষণ করা হয়।

৩. আইসি ডিকাপলিং বা বাইপাস ক্যাপাসিটর:
ডিজিটাল আইসির Vcc ও GND পিনের গা ঘেঁষে ০.১ μF (১০০ nF) সিরামিক ক্যাপাসিটর বসানো হয় যাতে হাই-ফ্রিকোয়েন্সি নয়েজ ও ভোল্টেজ ওঠানামা রোধ করা যায়।`
  },
  formulas: [
    {
      expression: 'V_{r(p-p)} = \\frac{I_{dc}}{2 \\cdot f \\cdot C}',
      description: {
        en: 'Peak-to-peak ripple voltage for full-wave bridge rectifier filter',
        hi: 'फुल-वेव ब्रिज रेक्टिफायर में पीक-टू-पीक रिपल वोल्टेज',
        bn: 'ফুল-ওয়েভ ব্রিজ রেকটিফায়ারে পিক-টু-পিক রিপল ভোল্টেজ'
      }
    },
    {
      expression: 'C_{filter} = \\frac{I_{dc}}{2 \\cdot f \\cdot V_{r(p-p)}}',
      description: {
        en: 'Required reservoir capacitance calculation for specified allowable ripple',
        hi: 'वांछित रिपल वोल्टेज हेतु आवश्यक फिल्टर कैपेसिटेंस सूत्र',
        bn: 'নির্দিষ্ট রিপল ভোল্টেজের জন্য প্রয়োজনীয় ফিল্টার ক্যাপাসিট্যান্স সূত্র'
      }
    },
    {
      expression: 'v_{kickback} = -L \\cdot \\frac{di}{dt}',
      description: {
        en: 'Inductive back-EMF spike voltage across opening switch contacts',
        hi: 'स्विच खुलने पर इंडक्टर द्वारा उत्पन्न बैक-EMF स्पाइक वोल्टेज',
        bn: 'সুইচ অফ করার মুহূর্তে ইন্ডাক্টরের ব্যাক-EMF স্পাইক ভোল্টেজ'
      }
    }
  ],
  practicalApplications: [
    {
      en: 'DC linear and switch-mode power supplies (SMPS) for televisions, computers, and smartphone chargers',
      hi: 'कंप्यूटर, टीवी एवं मोबाइल चार्जर की SMPS पावर सप्लाई में रिपल फिल्टर',
      bn: 'কম্পিউটার, টিভি ও মোবাইল চার্জারের SMPS পাওয়ার সাপ্লাইয়ে ডিসি স্মুথিং'
    },
    {
      en: 'RC snubber networks installed across solid-state relays (SSRs), triacs, and contactors driving heavy inductive motors',
      hi: 'सॉलिड स्टेट रिले (SSR) एवं कॉन्टैक्टर टर्मिनलों पर स्पार्क रोकने हेतु RC स्नबर',
      bn: 'মোটর নিয়ন্ত্রক রিলে ও ট্রায়াক সুইচের আড়াআড়ি স্পার্ক প্রতিরোধক RC স্নাবার'
    },
    {
      en: '0.1 μF ceramic decoupling capacitors placed adjacent to microprocessors, RAM chips, and FPGA power pins',
      hi: 'माइक्रोप्रोसेसर एवं डिजिटल चिप्स के पावर पिनों पर 0.1 μF डीकपलिंग कैपेसिटर',
      bn: 'মাইক্রোপ্রসেসর ও ডিজিটাল সার্কিট বোর্ডে নয়েজ ফিল্টারিংয়ে ০.১ μF সিরামিক ডিকাপলিং'
    }
  ],
  importantPoints: {
    en: [
      'In full-wave rectifiers, ripple frequency is twice line frequency (100 Hz for 50 Hz input)',
      'A reservoir capacitor charges in very short pulses and draws high peak inrush currents',
      'Decoupling capacitors must be mounted physically as close as possible to the IC pins to minimize trace inductance'
    ],
    hi: [
      'फुल-वेव रेक्टिफायर में रिपल आवृत्ति सप्लाई आवृत्ति की दोगुनी (50 Hz इनपुट पर 100 Hz) होती है',
      'स्मूथिंग कैपेसिटर चालू होने पर बहुत अधिक इनरश करंट खींचता है',
      'डीकपलिंग कैपेसिटर को ट्रैक इंडक्टेंस कम करने के लिए हमेशा आईसी पिन के बिल्कुल करीब लगाना चाहिए'
    ],
    bn: [
      'ফুল-ওয়েভ রেকটিফায়ারে রিপল ফ্রিকোয়েন্সি মূল সাপ্লাই ফ্রিকোয়েন্সির দ্বিগুণ (৫০ Hz এ ১০০ Hz) হয়',
      'রিজার্ভয়ার ক্যাপাসিটর শুরুতে খুব বেশি ইনরাশ কারেন্ট টানে',
      'ডিকাপলিং ক্যাপাসিটরকে অবশ্যই আইসি পিনের যত সম্ভব কাছে মাউন্ট করতে হয়'
    ]
  },
  commonMistakes: {
    en: [
      'Placing decoupling capacitors far away from IC power pins, defeating their purpose due to PCB track inductance',
      'Using an electrolytic capacitor for high-frequency decoupling where ceramic MLCCs are required due to high ESR/ESL'
    ],
    hi: [
      'डीकपलिंग कैपेसिटर को आईसी पिन से दूर लगाना, जिससे पीसीबी ट्रैक का इंडक्टेंस बढ़ जाता है',
      'हाई-फ्रीक्वेंसी डीकपलिंग के लिए सिरेमिक के स्थान पर इलेक्ट्रोलाइटिक कैपेसिटर का उपयोग करना'
    ],
    bn: [
      'ডিকাপলিং ক্যাপাসিটরকে আইসি থেকে দূরে বসানো, ফলে পিসিবি ট্র্যাকের আবেশের কারণে এর কার্যকারিতা নষ্ট হয়',
      'উচ্চ ফ্রিকোয়েন্সি ডিকাপলিংয়ে সিরামিকের বদলে ভুল করে ইলেক্ট্রোলাইটিক ক্যাপাসিটর ব্যবহার করা'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch7-17-1',
      question: {
        en: 'A 50 Hz AC mains supply is connected to a full-wave bridge rectifier. What is the fundamental ripple frequency appearing across the reservoir smoothing capacitor?',
        hi: '50 Hz एसी सप्लाई एक फुल-वेव ब्रिज रेक्टिफायर से जुड़ी है। स्मूथिंग कैपेसिटर पर दिखाई देने वाली रिपल आवृत्ति क्या होगी?',
        bn: '৫০ Hz এসি লাইনের সাথে একটি ফুল-ওয়েভ ব্রিজ রেকটিফায়ার যুক্ত। স্মুথিং ক্যাপাসিটরের দুই প্রান্তে রিপল ফ্রিকোয়েন্সি কত হবে?'
      },
      options: [
        { id: 'opt-a', text: { en: '25 Hz', hi: '25 Hz', bn: '২৫ Hz' } },
        { id: 'opt-b', text: { en: '50 Hz', hi: '50 Hz', bn: '৫০ Hz' } },
        { id: 'opt-c', text: { en: '100 Hz', hi: '100 Hz', bn: '১০০ Hz' } },
        { id: 'opt-d', text: { en: '200 Hz', hi: '200 Hz', bn: '২০০ Hz' } }
      ],
      correctOptionId: 'opt-c',
      explanation: {
        en: 'In a full-wave rectifier, both half-cycles are converted into positive pulses, making the output ripple frequency 2 · f = 2 · 50 = 100 Hz.',
        hi: 'फुल-वेव रेक्टिफायर दोनों अर्ध-चक्रों को आउटपुट में बदलता है, इसलिए रिपल आवृत्ति 2 × 50 = 100 Hz होती है।',
        bn: 'ফুল-ওয়েভ রেকটিফায়ারে দুটি অর্ধ-চক্রই ব্যবহৃত হয়, ফলে রিপল ফ্রিকোয়েন্সি ২ × ৫০ = ১০০ Hz হয়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch7-17-1',
      question: {
        en: 'A 12 V DC linear power supply is built using a 50 Hz full-wave bridge rectifier to power a circuit drawing a steady DC current of 2 A. Determine the minimum capacitance required for the reservoir filter capacitor if the peak-to-peak ripple voltage must not exceed 0.5 V.',
        hi: '50 Hz फुल-वेव ब्रिज रेक्टिफायर पर आधारित 12 V, 2 A डीसी पावर सप्लाई में यदि रिपल वोल्टेज अधिकतम 0.5 Vpp रखना हो, तो आवश्यक न्यूनतम कैपेसिटेंस ज्ञात करें।',
        bn: '৫০ Hz ফুল-ওয়েভ রেকটিফায়ার চালিত ১২ V, ২ A ডিসি পাওয়ার সাপ্লাইয়ে পিক-টু-পিক রিপল ভোল্টেজ অনধিক ০.৫ Vpp রাখতে প্রয়োজনীয় ফিল্টার ক্যাপাসিট্যান্স কত?'
      },
      hint: {
        en: 'Use C = Idc / (2 · f · Vr(p-p)) where f = 50 Hz, Idc = 2 A, Vr = 0.5 V.',
        hi: 'C = Idc / (2 · f · Vr) सूत्र का उपयोग करें।',
        bn: 'C = Idc / (২ · f · Vr) সমীকরণ ব্যবহার করুন।'
      },
      answerKey: {
        en: 'C = 2 A / (2 × 50 Hz × 0.5 V) = 2 / 50 = 0.04 Farads = 40,000 μF (in practice, two 22,000 μF / 25 V electrolytic capacitors in parallel).',
        hi: 'C = 2 / (2 × 50 × 0.5) = 0.04 F = 40,000 μF।',
        bn: 'C = ২ / (২ × ৫০ × ০.৫) = ০.০৪ F = ৪০,০০০ μF (প্যারালালে দুটি ২২,০০০ μF ক্যাপাসিটর ব্যবহার করা যেতে পারে)।'
      }
    }
  ]
};
