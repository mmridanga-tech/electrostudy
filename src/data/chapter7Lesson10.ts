import { Lesson } from '../types';

export const LESSON_RC_DISCHARGING_TRANSIENT: Lesson = {
  id: 'lsn-ch7-rc-discharging-transient',
  topicId: 'ch7-rc-discharging-transient',
  chapterId: 'ch-capacitors',
  order: 10,
  title: {
    en: 'RC Circuit Discharging Transient & Energy Dissipation',
    hi: 'RC परिपथ डिस्चार्जिंग क्षणिक एवं ऊर्जा क्षय',
    bn: 'RC সার্কিট ডিসচার্জিং ট্রানজিয়েন্ট ও শক্তির ক্ষয়'
  },
  description: {
    en: 'Differential equation analysis of RC discharging, exponential decay curves for voltage v(t) = V0·e^(-t/τ) and current i(t) = -(V0/R)·e^(-t/τ), and bleeder resistor sizing.',
    hi: 'RC डिस्चार्जिंग का अवकल विश्लेषण, घातांकीय क्षय वक्र v(t) = V0·e^(-t/τ) एवं ब्लीडर प्रतिरोधक गणना।',
    bn: 'RC ডিসচার্জিং ডিফারেনশিয়াল সমীকরণ, সূচকীয় ক্ষয় বক্ররেখা v(t) = V0·e^(-t/τ) এবং ব্লিডার রেজিস্টর নির্ণয়।'
  },
  easyExplanation: {
    en: 'When you unplug a charged capacitor and connect it across a resistor, it discharges like a pressurized tank venting through an exhaust nozzle. The stored electrons flow back in the opposite direction through the resistor, turning the stored electrostatic energy into harmless heat.',
    hi: 'जब आप एक चार्ज कैपेसिटर को प्रतिरोधक से जोड़ते हैं, तो यह संचित आवेश को विपरीत दिशा में प्रवाहित कर डिस्चार्ज करता है। संचित स्थिरवैद्युत ऊर्जा प्रतिरोधक में ऊष्मा के रूप में परिवर्तित हो जाती है।',
    bn: 'চার্জ করা ক্যাপাসিটরকে একটি রোধের সাথে যুক্ত করলে তা সংকুচিত বাতাসের ট্যাঙ্কের মতো নির্গত হয়। সঞ্চিত ইলেকট্রনগুলো রোধের মধ্য দিয়ে বিপরীত দিকে প্রবাহিত হয়ে স্থিরবৈদ্যুতিক শক্তিকে তাপে রূপান্তরিত করে নিঃশেষ হয়।'
  },
  detailedExplanation: {
    en: `1. RC Discharging Circuit Formulation:
Consider a capacitor initially charged to a steady voltage V0. At t = 0, it is disconnected from the battery and connected across a discharge resistor R.
Applying KVL around the closed loop:
v_R(t) + v_C(t) = 0
R · i(t) + v_C(t) = 0
Since i(t) = C · (dv_C / dt):
R · C · (dv_C / dt) + v_C(t) = 0

2. Derivation of Transient Decay Equations:
Separating variables and integrating from initial voltage V0 at t = 0 to v_C at time t:
∫[V0 to v_C] (dv_C / v_C) = -∫[0 to t] (dt / RC)
ln(v_C / V0) = -t / (RC)

Capacitor Discharging Voltage:
v_C(t) = V0 · e^(-t / τ) [Volts]

Discharge Current:
i(t) = -(V0 / R) · e^(-t / τ) [Amperes]
(The negative sign signifies that discharge current flows OUT of the positive plate in the reverse direction of charging current).

Resistor Voltage:
v_R(t) = -v_C(t) = -V0 · e^(-t / τ) [Volts]

3. Discharging Milestones:
- At t = 1τ: v_C drops to 36.8% (1/e) of V0 (63.2% discharged)
- At t = 2τ: v_C drops to 13.5% of V0
- At t = 3τ: v_C drops to 5.0% of V0
- At t = 4τ: v_C drops to 1.8% of V0
- At t = 5τ: v_C drops to 0.7% of V0 (Considered fully discharged!)

4. Bleeder Resistors for Electrical Safety:
Power supply filter capacitors can store lethal voltage charges for days after power-off. A high-value safety bleeder resistor (typically 100 kΩ to 1 MΩ) is permanently wired across the capacitor terminals to guarantee that the voltage discharges safely below 50V within 60 seconds (OSHA / IEC 60950 standard).`,
    hi: `1. RC डिस्चार्जिंग परिपथ:
KVL समीकरण: R · C · (dv_C / dt) + v_C(t) = 0

2. डिस्चार्जिंग समीकरण:
- संधारित्र वोल्टेज: v_C(t) = V0 · e^(-t / τ)
- डिस्चार्ज धारा: i(t) = -(V0 / R) · e^(-t / τ) (ऋणात्मक चिन्ह विपरीत दिशा दर्शाता है)

3. समय मील के पत्थर:
- 1τ = 36.8% वोल्टेज शेष (63.2% डिस्चार्ज)
- 2τ = 13.5% शेष
- 3τ = 5.0% शेष
- 5τ = 0.7% शेष (पूर्ण डिस्चार्ज माना जाता है)।

4. ब्लीडर प्रतिरोधक (Bleeder Resistor):
हाई-वोल्टेज कैपेसिटर को स्विच ऑफ करने के बाद सुरक्षित रूप से डिस्चार्ज करने हेतु समानांतर में जोड़ा जाने वाला सुरक्षा प्रतिरोधक।`,
    bn: `১. RC ডিসচার্জিং সার্কিট:
KVL সমীকরণ: R · C · (dv_C / dt) + v_C(t) = 0

২. ডিসচার্জিং সমীকরণসমূহ:
- ক্যাপাসিটর ভোল্টেজ: v_C(t) = V0 · e^(-t / τ)
- ডিসচার্জ কারেন্ট: i(t) = -(V0 / R) · e^(-t / τ) (ঋণাত্মক চিহ্ন বিপরীত প্রবাহ নির্দেশ করে)

৩. সময়ের সাথে ক্ষয়:
- 1τ সময়ে: অবশিষ্ট ভোল্টেজ ৩৬.৮% (৬৩.২% ডিসচার্জ)
- 3τ সময়ে: অবশিষ্ট ভোল্টেজ ৫.০%
- 5τ সময়ে: অবশিষ্ট ভোল্টেজ ০.৭% (কার্যত সম্পূর্ণ ডিসচার্জ)।

৪. ব্লিডার রেজিস্টর (Bleeder Resistor):
পাওয়ার সাপ্লাই বন্ধ করার পর ক্যাপাসিটরে জমা প্রাণঘাতী ভোল্টেজকে ৬০ সেকেন্ডের মধ্যে নিরাপদ মানে নামিয়ে আনতে সমান্তরালে যুক্ত উচ্চ রোধের সুরক্ষা রেজিস্টর।`
  },
  formulas: [
    {
      expression: 'v_C(t) = V0 · e^(-t / τ)',
      description: {
        en: 'Exponential voltage decay of discharging capacitor',
        hi: 'डिस्चार्ज होते संधारित्र का घातांकीय वोल्टेज क्षय',
        bn: 'ডিসচার্জরত ক্যাপাসিটরের সূচকীয় ভোল্টেজ ক্ষয়'
      }
    },
    {
      expression: 'i_discharge(t) = -(V0 / R) · e^(-t / τ)',
      description: {
        en: 'Discharge current flowing in reverse direction',
        hi: 'विपरीत दिशा में प्रवाहित डिस्चार्ज धारा',
        bn: 'বিপরীত দিকে প্রবাহিত ডিসচার্জ কারেন্ট'
      }
    }
  ],
  practicalApplications: [
    {
      en: 'Safety bleeder discharge circuits in high-voltage industrial power supplies and microwave oven magnetrons',
      hi: 'माइक्रोवेव ओवन और औद्योगिक पावर सप्लाई में सुरक्षा ब्लीडर परिपथ',
      bn: 'মাইক্রোওয়েভ ওভেন ও ইন্ডাস্ট্রিয়াল পাওয়ার সাপ্লাইতে সেফটি ব্লিডার সার্কিট'
    },
    {
      en: 'Electronic pulse shaping and camera flash lamp trigger circuits',
      hi: 'कैमरा फ्लैश डिस्चार्ज और पल्स शेपिंग परिपथ',
      bn: 'ক্যামেরা ফ্ল্যাশ ল্যাম্প ট্রিগার ও পালস শেপিং সার্কিট'
    }
  ],
  importantPoints: {
    en: [
      'In exactly 1 time constant (1τ), the voltage drops by 63.2%, leaving 36.8% remaining',
      'The initial discharge current is -V0 / R and immediately starts decaying exponentially',
      'Total energy dissipated in the discharge resistor is exactly equal to the initial stored energy: E_loss = ½ C V0²'
    ],
    hi: [
      '1 टाइम कांस्टेंट (1τ) में वोल्टेज 63.2% घट जाता है और 36.8% शेष बचता है',
      'प्रारंभिक डिस्चार्ज करंट -V0 / R होता है और तुरंत घटने लगता है',
      'डिस्चार्ज प्रतिरोधक में ऊष्मा के रूप में नष्ट कुल ऊर्जा संधारित्र की संचित ऊर्जा (½ C V0²) के बराबर होती है'
    ],
    bn: [
      'ঠিক ১টি টাইম কনস্ট্যান্টে (1τ) ভোল্টেজ ৬৩.২% হ্রাস পায় এবং ৩৬.৮% অবশিষ্ট থাকে',
      'প্রারম্ভিক ডিসচার্জ কারেন্ট -V0 / R এবং সাথে সাথেই কমতে শুরু করে',
      'ডিসচার্জ রেজিস্টরে অপচয় হওয়া মোট তাপশক্তি ঠিক ক্যাপাসিটরের সঞ্চিত শক্তির সমান: E = ½ C V0²'
    ]
  },
  commonMistakes: {
    en: [
      'Assuming that discharging takes longer or shorter than charging; for the same R and C, charge and discharge time constants are IDENTICAL (τ = RC)',
      'Forgetting that discharge current flows in the opposite direction to charging current'
    ],
    hi: [
      'यह सोचना कि चार्जिंग और डिस्चार्जिंग का समय अलग होता है; समान R और C के लिए दोनों का समय स्थिरांक बिल्कुल समान (τ = RC) होता है',
      'यह भूल जाना कि डिस्चार्ज धारा की दिशा चार्ज धारा के विपरीत होती है'
    ],
    bn: [
      'মনে করা চার্জিং ও ডিসচার্জিংয়ের সময় আলাদা; একই R ও C এর জন্য চার্জিং ও ডিসচার্জিং টাইম কনস্ট্যান্ট হুবহু সমান (τ = RC)',
      'ভুলে যাওয়া যে ডিসচার্জ কারেন্টের দিক চার্জিং কারেন্টের ঠিক বিপরীত'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch7-10-1',
      question: {
        en: 'A 50 μF capacitor charged to 200 V is discharged through a 20 kΩ resistor. After 1 second (which equals 1τ), the voltage across the capacitor is approximately:',
        hi: '200 V तक चार्ज 50 μF कैपेसिटर को 20 kΩ प्रतिरोधक के माध्यम से डिस्चार्ज किया जाता है। 1 सेकंड (1τ) बाद कैपेसिटर वोल्टेज लगभग होगा:',
        bn: '২০০ V এ চার্জ করা ৫০ μF ক্যাপাসিটর ২০ kΩ রোধের মাধ্যমে ডিসচার্জ করা হচ্ছে। ১ সেকেন্ড (১τ) পর ক্যাপাসিটরের ভোল্টেজ প্রায় কত হবে?'
      },
      options: [
        { id: 'opt-a', text: { en: '126.4 V', hi: '126.4 V', bn: '১২৬.৪ V' } },
        { id: 'opt-b', text: { en: '73.6 V', hi: '73.6 V', bn: '৭৩.৬ V' } },
        { id: 'opt-c', text: { en: '100.0 V', hi: '100.0 V', bn: '১০০.০ V' } },
        { id: 'opt-d', text: { en: '0 V', hi: '0 V', bn: '০ V' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'τ = R · C = 20,000 Ω · 50 × 10⁻⁶ F = 1.0 s. At t = 1τ, v_C = V0 · e⁻¹ = 200 V · 0.3679 ≈ 73.6 V.',
        hi: 'τ = 1.0 सेकंड। t = 1τ पर v_C = 200 × 0.3679 = 73.6 V।',
        bn: 'τ = ১.০ সেকেন্ড। t = ১τ সময়ে v_C = ২০০ V × ০.৩৬৭৯ ≈ ৭৩.৬ V।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch7-10-1',
      question: {
        en: 'A high-voltage power supply capacitor of 470 μF is charged to 400 V DC. Design a bleeder resistor so that the capacitor voltage safely discharges down to 40 V (10% of V0) within 30 seconds after switch off.',
        hi: '400 V DC पर चार्ज 470 μF कैपेसिटर को स्विच ऑफ करने के 30 सेकंड के भीतर 40 V (10%) तक सुरक्षित रूप से डिस्चार्ज करने हेतु ब्लीडर प्रतिरोधक का मान ज्ञात करें।',
        bn: '৪০০ V ডিসিতে চার্জ করা ৪৭০ μF ক্যাপাসিটর সুইচ বন্ধ করার ৩০ সেকেন্ডের মধ্যে ৪০ V (১০%) এ নামিয়ে আনার জন্য প্রয়োজনীয় ব্লিডার রেজিস্টরের মান কত?'
      },
      hint: {
        en: 'Use v(t) = V0 · e^(-t/RC) => 40 / 400 = 0.10 = e^(-30/RC) => ln(10) = 2.3026 = 30 / (R · 470×10⁻⁶).',
        hi: 'ln(10) = 2.3026 = 30 / (R × 470×10⁻⁶) सूत्र से R का मान निकालें।',
        bn: 'ln(১০) = ২.৩০২৬ = ৩০ / (R × ৪৭০×10⁻⁶) সমীকরণ থেকে R নির্ণয় করুন।'
      },
      answerKey: {
        en: 'R = 30 / (2.3026 × 470 × 10⁻⁶) ≈ 27,720 Ω ≈ 27.7 kΩ (standard 27 kΩ power resistor rated at least 10W).',
        hi: 'R = 27.7 kΩ (मानक 27 kΩ / 10W प्रतिरोधक)।',
        bn: 'R = ২৭.৭ kΩ (স্ট্যান্ডার্ড ২৭ kΩ, ন্যূনতম ১০W পাওয়ার রেটিং)।'
      }
    }
  ]
};
