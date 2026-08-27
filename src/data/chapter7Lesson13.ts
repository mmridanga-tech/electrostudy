import { Lesson } from '../types';

export const LESSON_CAPACITOR_LOSSES_DIELECTRIC_BREAKDOWN: Lesson = {
  id: 'lsn-ch7-capacitor-losses-dielectric-breakdown',
  topicId: 'ch7-capacitor-losses-dielectric-breakdown',
  chapterId: 'ch-capacitors',
  order: 13,
  title: {
    en: 'Dielectric Breakdown, Losses, ESR & Tan Delta (tan δ)',
    hi: 'परावैद्युत ब्रेकडाउन, हानियां, ESR एवं टैन डेल्टा (tan δ)',
    bn: 'ডাই-ইলেকট্রিক ব্রেকডাউন, অপচয়, ESR ও ট্যান ডেল্টা (tan δ)'
  },
  description: {
    en: 'Equivalent circuit of practical capacitors, Equivalent Series Resistance (ESR), Dissipation Factor (DF / tan δ), dielectric hysteresis losses, and breakdown failure mechanisms.',
    hi: 'वास्तविक संधारित्र का समकक्ष परिपथ, समतुल्य श्रेणी प्रतिरोध (ESR), अपव्यय गुणांक (tan δ), एवं परावैद्युत विफलता तंत्र।',
    bn: 'বাস্তব ক্যাপাসিটরের ইকুইভ্যালেন্ট সার্কিট, ইকুইভ্যালেন্ট সিরিজ রেজিস্ট্যান্স (ESR), ডিসিপেশন ফ্যাক্টর (tan δ) ও ব্রেকডাউন প্রক্রিয়া।'
  },
  easyExplanation: {
    en: 'No capacitor is 100% ideal. Real capacitors have tiny internal wire resistances called ESR and small dielectric leaks called leakage resistance. If you overload a capacitor with too much AC ripple or over-voltage, ESR heats it up from the inside like a tiny electric heater until it fails.',
    hi: 'कोई भी कैपेसिटर 100% आदर्श नहीं होता। वास्तविक कैपेसिटर में आंतरिक तारों का सूक्ष्म प्रतिरोध (ESR) और थोड़ी लीकेज होती है। अत्यधिक एसी रिपल करंट से ESR आंतरिक हीटर की तरह गर्म होकर कैपेसिटर को खराब कर देता है।',
    bn: 'কোনো ক্যাপাসিটরই শতভাগ আদর্শ নয়। বাস্তব ক্যাপাসিটরে সামান্য অভ্যন্তরীণ রোধ (ESR) এবং অতি ক্ষুদ্র লিকেজ থাকে। অতিরিক্ত এসি রিপল কারেন্ট প্রবাহিত হলে এই ESR ভেতরের ক্ষুদ্র হিটারের মতো গরম হয়ে ক্যাপাসিটর নষ্ট করে দেয়।'
  },
  detailedExplanation: {
    en: `1. Practical Capacitor Equivalent Circuit:
A real capacitor is modeled as an ideal capacitance C with three parasitic components:
- ESR (Equivalent Series Resistance): Sum of internal lead resistance, foil contact resistance, and AC dielectric molecular friction loss.
- ESL (Equivalent Series Inductance): Parasitic inductance of the wound foils/leads (causes high-frequency self-resonance).
- R_leakage (Insulation/Parallel Resistance): High-value resistance (megaohms) representing DC leakage current through the dielectric.

2. Equivalent Series Resistance (ESR):
ESR is the total internal AC resistance of the capacitor at a given frequency:
P_loss = (I_rms)² · ESR [Watts]
As electrolytic capacitors age, electrolyte dries out and ESR increases dramatically (e.g., from 0.05 Ω to over 10 Ω), causing motherboard and SMPS power supply failures (bulging/burst caps).

3. Dissipation Factor (DF) & Loss Tangent (tan δ):
In an ideal capacitor, current leads voltage by exactly 90°. In a real capacitor, due to dielectric losses, the current leads by (90° - δ), where δ is the loss angle:
Dissipation Factor (DF) = tan δ = ESR / |X_c| = 2 · π · f · C · ESR
Quality Factor (Q):
Q = 1 / tan δ = |X_c| / ESR
- Lower tan δ (or higher Q) indicates a more perfect, low-loss capacitor.

4. Dielectric Breakdown Failure Modes:
- Thermal Breakdown: High AC voltage and excessive dielectric loss generate heat faster than it can dissipate, melting the insulator.
- Electrical (Avalanche) Breakdown: Electric field exceeds dielectric strength (E > E_breakdown), creating an ionized spark channel between plates.
- Electrochemical Aging: Microscopic pinhole erosion and electrolyte evaporation over time.`,
    hi: `1. वास्तविक संधारित्र का तुल्य परिपथ:
- ESR (समकक्ष श्रेणी प्रतिरोध): आंतरिक तारों एवं डाइइलेक्ट्रिक हानि का संयुक्त प्रतिरोध।
- ESL (समकक्ष श्रेणी प्रेरकत्व): परजीवी प्रेरकत्व।
- R_leakage: DC लीकेज प्रतिरोध।

2. ESR एवं शक्ति हानि:
P_loss = (I_rms)² · ESR
इलेक्ट्रोलाइट सूखने से ESR बढ़ जाता है और SMPS पावर सप्लाई में कैपेसिटर फूलकर फट जाते हैं।

3. अपव्यय गुणांक (Dissipation Factor / tan δ):
tan δ = ESR / X_c = 2 · π · f · C · ESR
Q-फैक्टर: Q = 1 / tan δ.
कम tan δ बेहतर गुणवत्ता दर्शाता है।`,
    bn: `১. বাস্তব ক্যাপাসিটরের ইকুইভ্যালেন্ট সার্কিট:
- ESR (ইকুইভ্যালেন্ট সিরিজ রেজিস্ট্যান্স): সংযোগ তার ও ডাই-ইলেকট্রিক লসের অভ্যন্তরীণ রোধ।
- ESL: পরজীবী ইন্ডাক্ট্যান্স।
- R_leakage: সমান্তরাল ডিসি লিকেজ রোধ।

২. ESR ও তাপজনিত অপচয়:
P_loss = (I_rms)² · ESR
পুরনো ক্যাপাসিটরে ইলেক্ট্রোলাইট শুকিয়ে গেলে ESR বেড়ে যায়, ফলে SMPS ও মাদারবোর্ডের ক্যাপাসিটর ফুলে নষ্ট হয়ে যায়।

৩. ডিসিপেশন ফ্যাক্টর বা ট্যান ডেল্টা (tan δ):
tan δ = ESR / |X_c| = ২ · π · f · C · ESR
কোয়ালিটি ফ্যাক্টর: Q = ১ / tan δ।
tan δ যত কম, ক্যাপাসিটর তত বেশি উচ্চমানের।`
  },
  formulas: [
    {
      expression: 'P_loss = (I_rms)² · ESR',
      description: {
        en: 'Internal power dissipation in a capacitor due to ESR',
        hi: 'ESR के कारण कैपेसिटर में आंतरिक शक्ति हानि',
        bn: 'ESR এর কারণে ক্যাপাসিটরে অভ্যন্তরীণ পাওয়ার অপচয়'
      }
    },
    {
      expression: 'tan δ = ESR / |X_c| = 2 · π · f · C · ESR',
      description: {
        en: 'Dissipation factor / loss tangent formula',
        hi: 'अपव्यय गुणांक (tan δ) सूत्र',
        bn: 'ডিসিপেশন ফ্যাক্টর / ট্যান ডেল্টা সূত্র'
      }
    }
  ],
  practicalApplications: [
    {
      en: 'Using Low-ESR polymer capacitors in Switched-Mode Power Supplies (SMPS) and PC motherboards',
      hi: 'एसएमपीएस और मदरबोर्ड में लो-ईएसआर पॉलीमर कैपेसिटर का उपयोग',
      bn: 'এসএমপিএস ও কম্পিউটার মাদারবোর্ডে লো-ESR পলিমার ক্যাপাসিটর ব্যবহার'
    },
    {
      en: 'Tan Delta (tan δ) testing on 132kV/400kV power transformer bushings and oil to assess insulation aging',
      hi: 'पावर ट्रांसफॉर्मर बुशिंग और ऑयल के इन्सुलेशन स्वास्थ्य जांच हेतु टैन डेल्टा परीक्षण',
      bn: 'উচ্চ ভোল্টেজ পাওয়ার ট্রান্সফরমার বুশিং ও তেলের ইনসুলেশন পরীক্ষা করতে ট্যান ডেল্টা টেস্ট'
    }
  ],
  importantPoints: {
    en: [
      'ESR meter is the primary tool used by service technicians to find failed capacitors in-circuit without desoldering',
      'Operating temperature has an exponential effect on capacitor life: Rule of thumb (Arrhenius law) - Lifespan doubles for every 10°C drop in temperature',
      'A bulged top vent on an aluminium electrolytic capacitor is a clear sign of excessive internal gas pressure from high ESR heating'
    ],
    hi: [
      'सर्किट में खराब कैपेसिटर की पहचान हेतु तकनीशियन ESR मीटर का उपयोग करते हैं',
      'तापमान में प्रत्येक 10°C की कमी से इलेक्ट्रोलाइटिक कैपेसिटर का जीवनकाल दोगुना हो जाता है (10°C नियम)',
      'कैपेसिटर का ऊपरी सिरा फूल जाना (Bulging) अत्यधिक ESR और आंतरिक हीटिंग का स्पष्ट संकेत है'
    ],
    bn: [
      'সার্কিট থেকে না খুলেই নষ্ট ক্যাপাসিটর শনাক্ত করতে সার্ভিস টেকনিশিয়ানরা ESR মিটার ব্যবহার করেন',
      'তাপমাত্রা ১০°C কমালে ইলেক্ট্রোলাইটিক ক্যাপাসিটরের আয়ু দ্বিগুণ বৃদ্ধি পায় (Arrhenius 10°C Rule)',
      'অ্যালুমিনিয়াম ক্যাপাসিটরের মাথা ফুলে যাওয়া উচ্চ ESR এবং ভেতরের গ্যাসীয় চাপের লক্ষণ'
    ]
  },
  commonMistakes: {
    en: [
      'Measuring only capacitance with a standard multimeter; a bad capacitor may show correct microfarads but have disastrously high ESR (10Ω+)!',
      'Replacing a low-ESR capacitor in an SMPS with a standard general-purpose electrolytic (will fail in weeks)'
    ],
    hi: [
      'केवल धारिता नापना; खराब कैपेसिटर सही μF दिखा सकता है परंतु उसका ESR घातक रूप से अधिक (10Ω) हो सकता है',
      'एसएमपीएस में लो-ईएसआर कैपेसिटर की जगह साधारण जनरल पर्पस कैपेसिटर लगा देना'
    ],
    bn: [
      'সাধারণ মাল্টিমিটার দিয়ে কেবল ক্যাপাসিট্যান্স মেপে ভালো মনে করা; অনেক সময় ক্যাপাসিট্যান্স ঠিক থাকলেও ESR ১০ গুণ বেড়ে ক্যাপাসিটর নষ্ট থাকে',
      'এসএমপিএস পাওয়ার সাপ্লাইতে লো-ESR ক্যাপাসিটরের বদলে সাধারণ ক্যাপাসিটর লাগানো'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch7-13-1',
      question: {
        en: 'A 100 μF capacitor has an ESR of 0.2 Ω and carries an RMS ripple current of 3 A in an SMPS. The power dissipated internally as heat is:',
        hi: 'एक 100 μF कैपेसिटर का ESR 0.2 Ω है और इसमें 3 A का RMS रिपल करंट बह रहा है। आंतरिक ऊष्मा हानि होगी:',
        bn: 'একটি ১০০ μF ক্যাপাসিটরের ESR ০.২ Ω এবং এতে ৩ A আরএমএস রিপল কারেন্ট প্রবাহিত হচ্ছে। এতে অভ্যন্তরীণ তাপ অপচয় কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '0.6 W', hi: '0.6 W', bn: '০.৬ W' } },
        { id: 'opt-b', text: { en: '1.8 W', hi: '1.8 W', bn: '১.৮ W' } },
        { id: 'opt-c', text: { en: '0.9 W', hi: '0.9 W', bn: '০.৯ W' } },
        { id: 'opt-d', text: { en: '3.6 W', hi: '3.6 W', bn: '৩.৬ W' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'P = (I_rms)² · ESR = (3 A)² · 0.2 Ω = 9 · 0.2 = 1.8 Watts.',
        hi: 'P = (3)² × 0.2 = 9 × 0.2 = 1.8 वाट।',
        bn: 'P = (৩ A)² × ০.২ Ω = ৯ × ০.২ = ১.৮ ওয়াট।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch7-13-1',
      question: {
        en: 'Calculate the Dissipation Factor (tan δ) and Quality Factor (Q) of a 10 μF capacitor operating at 1 kHz with an ESR of 0.5 Ω.',
        hi: '1 kHz आवृत्ति और 0.5 Ω ESR पर कार्यरत 10 μF कैपेसिटर का अपव्यय गुणांक (tan δ) एवं Q-फैक्टर ज्ञात करें।',
        bn: '১ kHz ফ্রিকোয়েন্সি এবং ০.৫ Ω ESR যুক্ত একটি ১০ μF ক্যাপাসিটরের ডিসিপেশন ফ্যাক্টর (tan δ) ও Q-ফ্যাক্টর নির্ণয় করুন।'
      },
      hint: {
        en: 'Use tan δ = 2 · π · f · C · ESR, then Q = 1 / tan δ.',
        hi: 'tan δ = 2 × π × f × C × ESR एवं Q = 1 / tan δ का उपयोग करें।',
        bn: 'tan δ = ২ × π × f × C × ESR এবং Q = ১ / tan δ সূত্র ব্যবহার করুন।'
      },
      answerKey: {
        en: 'tan δ = 2 × 3.1416 × 1000 × (10 × 10⁻⁶) × 0.5 = 0.0314 (3.14%). Quality Factor Q = 1 / 0.0314 ≈ 31.8.',
        hi: 'tan δ = 0.0314 (3.14%), Q = 31.8.',
        bn: 'tan δ = ০.০৩১৪ (৩.১৪%), কোয়ালিটি ফ্যাক্টর Q = ৩১.৮।'
      }
    }
  ]
};
