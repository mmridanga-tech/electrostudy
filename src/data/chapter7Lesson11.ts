import { Lesson } from '../types';

export const LESSON_TYPES_OF_CAPACITORS: Lesson = {
  id: 'lsn-ch7-types-of-capacitors',
  topicId: 'ch7-types-of-capacitors',
  chapterId: 'ch-capacitors',
  order: 11,
  title: {
    en: 'Types of Capacitors (Electrolytic, Ceramic, Mica, Film, Supercaps)',
    hi: 'कैपेसिटर के प्रकार (इलेक्ट्रोलाइटिक, सेरामिक, माइका, फिल्म, सुपरकैप्स)',
    bn: 'ক্যাপাসিটরের প্রকারভেদ (ইলেক্ট্রোলাইটিক, সিরামিক, মাইকা, ফিল্ম, সুপারক্যাপ)'
  },
  description: {
    en: 'Comprehensive classification, internal construction, polar vs non-polar characteristics, frequency response, dielectric properties, and application domains.',
    hi: 'संधारित्रों का विस्तृत वर्गीकरण, आंतरिक संरचना, ध्रुवीय बनाम गैर-ध्रुवीय, आवृत्ति प्रतिक्रिया एवं अनुप्रयोग।',
    bn: 'ক্যাপাসিটরের পূর্ণাঙ্গ শ্রেণিবিন্যাস, অভ্যন্তরীণ গঠন, পোলার বনাম নন-পোলার, ফ্রিকোয়েন্সি প্রতিক্রিয়া ও ক্ষেত্রভিত্তিক ব্যবহার।'
  },
  easyExplanation: {
    en: 'Different jobs require different tools. Ceramic capacitors are like quick sprinters (great for high frequencies and low capacity), electrolytic capacitors are like heavy cargo trucks (massive capacitance but polarized and slower), and supercapacitors are like miniature batteries that recharge in seconds.',
    hi: 'विभिन्न कार्यों के लिए अलग-अलग कैपेसिटर होते हैं। सेरामिक कैपेसिटर उच्च आवृत्ति और छोटे मान के लिए उत्कृष्ट हैं, इलेक्ट्रोलाइटिक कैपेसिटर भारी धारिता देते हैं परंतु ध्रुवीय होते हैं, और सुपरकैपेसिटर छोटी बैटरी की तरह काम करते हैं।',
    bn: 'বিভিন্ন কাজের জন্য বিভিন্ন ক্যাপাসিটর প্রয়োজন। সিরামিক ক্যাপাসিটর উচ্চ ফ্রিকোয়েন্সিতে দ্রুত কাজ করে (ছোট ক্যাপাসিট্যান্স), ইলেক্ট্রোলাইটিক ক্যাপাসিটর বিশাল ধারণক্ষমতা দেয় (তবে পোলারিটিযুক্ত), আর সুপারক্যাপাসিটর ব্যাটারির মতো কাজ করে সেকেন্ডেই চার্জ হতে পারে।'
  },
  detailedExplanation: {
    en: `1. Broad Classification of Capacitors:
Capacitors are classified primarily by their dielectric material, construction geometry, and polarity:

A. Ceramic Capacitors (MLCC & Disc):
- Dielectric: Ceramic oxide mixtures (e.g., Titanium dioxide Class 1, Barium titanate Class 2).
- Properties: Non-polarized, extremely compact SMD chip packages, low ESR, high frequency performance up to GHz range.
- Typical Values: 1 pF to 100 μF (50V to 3kV).
- Use: RF bypass, microcontroller decoupling, digital noise filtering.

B. Aluminium & Tantalum Electrolytic Capacitors:
- Dielectric: Extremely thin micro-layer of aluminium oxide (Al2O3) or tantalum pentoxide (Ta2O5) formed electrochemically.
- Properties: POLARIZED (Must observe + and - polarity! Reverse voltage destroys oxide layer and causes explosive venting). Very high capacitance density.
- Typical Values: 1 μF to 100,000 μF (6.3V to 450V).
- Use: Power supply reservoir filters, audio coupling, low-frequency smoothing.

C. Film Capacitors (Polyester / Mylar, Polypropylene):
- Dielectric: Metallized plastic films (PP, PET).
- Properties: Non-polarized, self-healing capability, exceptionally low dielectric losses (tan δ < 0.0005), high ripple current handling.
- Typical Values: 1 nF to 47 μF (100V to 2000V).
- Use: AC mains line filtering (Class X & Y capacitors), motor run capacitors, induction heating, audio crossovers.

D. Mica Capacitors:
- Dielectric: Natural silvered mica sheets.
- Properties: Exceptional stability, negligible temperature drift, ultra-low leakage.
- Typical Values: 10 pF to 10 nF.
- Use: Precision laboratory standards, high-power RF transmitters.

E. Supercapacitors (EDLC - Electric Double Layer Capacitors):
- Dielectric: Nanoporous activated carbon electrodes with electrostatic Helmholtz double layer.
- Properties: Astronomical capacitance (1 F to 5,000 Farads at 2.7V to 3.0V), 1,000,000+ charge cycles.
- Use: Electric vehicle regenerative braking, solar energy harvesting, RTC memory backup.`,
    hi: `1. प्रमुख कैपेसिटर प्रकार:
- सेरामिक (Ceramic): गैर-ध्रुवीय (Non-polar), उच्च आवृत्ति, RF एवं डिजिटल परिपथ हेतु।
- इलेक्ट्रोलाइटिक (Electrolytic): ध्रुवीय (Polarized - (+/-) का ध्यान रखें), उच्च धारिता, पावर सप्लाई फिल्टर हेतु।
- फिल्म कैपेसिटर (Mylar/Polypropylene): गैर-ध्रुवीय, उच्च वोल्टेज, मोटर रन एवं AC लाइन फिल्टर।
- माइका (Mica): अत्यंत स्थिर एवं सटीक, लैब मानक एवं RF ट्रांसमीटर।
- सुपरकैपेसिटर (EDLC): फैराड स्तर की विशाल धारिता (1F - 3000F), मेमोरी बैकअप एवं इलेक्ट्रिक वाहन।`,
    bn: `১. ক্যাপাসিটরের প্রধান প্রকারভেদ:
- সিরামিক ক্যাপাসিটর: নন-পোলার, উচ্চ ফ্রিকোয়েন্সি ও ডিজিটাল চিপ ডিকাপলিংয়ে ব্যবহৃত।
- ইলেক্ট্রোলাইটিক ক্যাপাসিটর: পোলারাইজড (+ এবং - চিহ্ন মেনে লাগাতে হয়), বিশাল ক্যাপাসিট্যান্স, পাওয়ার সাপ্লাই ফিল্টারে ব্যবহৃত।
- ফিল্ম ক্যাপাসিটর (পলিয়েস্টার/পলিপ্রোপিলিন): নন-পোলার, উচ্চ ভোল্টেজ ও এসি মেইনস ফিল্টারে নিরাপদ।
- মাইকা ক্যাপাসিটর: অত্যন্ত নিখুঁত ও দীর্ঘস্থায়ী মানসম্পন্ন, আরএফ ট্রান্সমিটারে ব্যবহৃত।
- সুপারক্যাপাসিটর: বিশাল ধারণক্ষমতা (১ থেকে ৫০০০ ফ্যারাড), মেমোরি ব্যাকআপ ও ইভি রিজেনারেটিভ ব্রেকিংয়ে ব্যবহৃত।`
  },
  formulas: [
    {
      expression: 'C_EDLC = (ε · A_eff) / d_helmholtz',
      description: {
        en: 'Supercapacitor electrostatic double layer capacitance with sub-nanometer spacing',
        hi: 'सुपरकैपेसिटर डबल-लेयर धारिता सूत्र',
        bn: 'সাব-ন্যানোমিটার দূরত্বের সুপারক্যাপাসিটর ডাবল লেয়ার ক্যাপাসিট্যান্স'
      }
    }
  ],
  practicalApplications: [
    {
      en: 'Aluminium electrolytic capacitor banks in Variable Frequency Drives (VFDs) and Solar Inverters',
      hi: 'सोलर इन्वर्टर और VFD में इलेक्ट्रोलाइटिक डीसी बस कैपेसिटर',
      bn: 'সোলার ইনভার্টার ও মোটর ভিএফডি (VFD)-তে ডিসি বাস ইলেক্ট্রোলাইটিক ক্যাপাসিটর'
    },
    {
      en: 'Safety-certified Class X2 & Y2 metallized polypropylene film capacitors for AC mains EMI suppression',
      hi: 'एसी मेन लाइन में ईएमआई दमन हेतु क्लास X2 और Y2 फिल्म कैपेसिटर',
      bn: 'এসি মেইনস লাইনের নয়েজ দূর করতে সেফটি সার্টিফাইড ক্লাস X2 ও Y2 ফিল্ম ক্যাপাসিটর'
    }
  ],
  importantPoints: {
    en: [
      'Electrolytic capacitors are POLARIZED; reverse voltage polarity causes chemical breakdown, overheating, and dangerous explosion',
      'Ceramic MLCC capacitors suffer from DC bias voltage coefficient (capacitance can drop by 60%+ near rated voltage)',
      'Film capacitors have a "Self-Healing" property where local dielectric arcs vaporize the thin metal film without shorting the capacitor'
    ],
    hi: [
      'इलेक्ट्रोलाइटिक कैपेसिटर ध्रुवीय (Polarized) होते हैं; उल्टे कनेक्शन से विस्फोट हो सकता है',
      'सेरामिक MLCC पर रेटेड वोल्टेज लगाने पर उसकी वास्तविक धारिता 50-70% तक घट सकती है (DC Bias Effect)',
      'फिल्म कैपेसिटर में "सेल्फ-हीलिंग" गुण होता है जिससे आंतरिक स्पार्क होने पर भी वे शॉर्ट नहीं होते'
    ],
    bn: [
      'ইলেক্ট্রোলাইটিক ক্যাপাসিটর পোলারাইজড (+/-); ভুল পোলারিটিতে সংযোগ দিলে বিস্ফোরিত হতে পারে',
      'সিরামিক MLCC ক্যাপাসিটরে রেটেড ভোল্টেজের কাছে ক্যাপাসিট্যান্স ৫০-৭০% পর্যন্ত কমে যায় (DC Bias Effect)',
      'ফিল্ম ক্যাপাসিটরে "সেলফ-হিলিং" বৈশিষ্ট্য থাকে যার ফলে অভ্যন্তরীণ স্পার্কে শর্ট সার্কিট হয় না'
    ]
  },
  commonMistakes: {
    en: [
      'Connecting an electrolytic capacitor with reverse polarity into an AC circuit (will quickly explode)',
      'Using electrolytic capacitors in high-frequency RF circuits where their high ESR and inductance degrade performance'
    ],
    hi: [
      'इलेक्ट्रोलाइटिक कैपेसिटर को एसी परिपथ में सीधा जोड़ना (यह तुरंत फट जाएगा)',
      'उच्च आवृत्ति वाले आरएफ परिपथ में इलेक्ट्रोलाइटिक कैपेसिटर का उपयोग करना'
    ],
    bn: [
      'এসি সার্কিটে সাধারণ পোলার ইলেক্ট্রোলাইটিক ক্যাপাসিটর লাগানো (এটি বিস্ফোরিত হবে)',
      'উচ্চ ফ্রিকোয়েন্সির আরএফ সার্কিটে ইলেক্ট্রোলাইটিক ক্যাপাসিটর ব্যবহার করা'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch7-11-1',
      question: {
        en: 'Which of the following capacitor types is strictly POLARIZED and must be connected observing polarity?',
        hi: 'निम्नलिखित में से कौन सा संधारित्र प्रकार अनिवार्य रूप से ध्रुवीय (Polarized) होता है?',
        bn: 'নিচের কোন ধরনের ক্যাপাসিটরটি বাধ্যতামূলকভাবে পোলারাইজড (Polarized)?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Ceramic Disc', hi: 'सेरामिक डिस्क', bn: 'সিরামিক ডিস্ক' } },
        { id: 'opt-b', text: { en: 'Aluminium Electrolytic', hi: 'एल्यूमीनियम इलेक्ट्रोलाइटिक', bn: 'অ্যালুমিনিয়াম ইলেক্ট্রোলাইটিক' } },
        { id: 'opt-c', text: { en: 'Polypropylene Film', hi: 'पॉलीप्रोपाइलीन फिल्म', bn: 'পলিপ্রোপিলিন ফিল্ম' } },
        { id: 'opt-d', text: { en: 'Silver Mica', hi: 'सिल्वर माइका', bn: 'সিলভার মাইকা' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Aluminium and tantalum electrolytic capacitors rely on a microscopic polarized oxide layer formed chemically; reverse polarity destroys this layer instantly.',
        hi: 'इलेक्ट्रोलाइटिक कैपेसिटर में रासायनिक रूप से बनी पतली ऑक्साइड परत होती है जो उल्टी पोलरिटी पर नष्ट हो जाती है।',
        bn: 'ইলেক্ট্রোলাইটিক ক্যাপাসিটরে রাসায়নিক অক্সাইড স্তর থাকে যা উল্টো পোলারিটিতে তাৎক্ষণিকভাবে নষ্ট হয়ে যায়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch7-11-1',
      question: {
        en: 'Why are ceramic capacitors preferred over electrolytic capacitors for high-frequency bypass applications in microcontrollers?',
        hi: 'माइक्रोकंट्रोलर में उच्च आवृत्ति बाईपास अनुप्रयोगों के लिए इलेक्ट्रोलाइटिक के बजाय सेरामिक कैपेसिटर को प्राथमिकता क्यों दी जाती है?',
        bn: 'মাইক্রোকন্ট্রোলারের উচ্চ ফ্রিকোয়েন্সি বাইপাস ফিল্টারিংয়ে ইলেক্ট্রোলাইটিকের চেয়ে সিরামিক ক্যাপাসিটর কেন বেশি উপযোগী?'
      },
      hint: {
        en: 'Consider Equivalent Series Resistance (ESR) and parasitic inductance (ESL).',
        hi: 'समकक्ष श्रेणी प्रतिरोध (ESR) और आंतरिक प्रेरकत्व (ESL) पर विचार करें।',
        bn: 'ইকুইভ্যালেন্ট সিরিজ রেজিস্ট্যান্স (ESR) ও পরজীবী ইন্ডাক্ট্যান্স (ESL) বিবেচনা করুন।'
      },
      answerKey: {
        en: 'Ceramic capacitors have ultra-low Equivalent Series Inductance (ESL) and low ESR, enabling them to respond to nanosecond switching transients and effectively shunt high-frequency noise to ground.',
        hi: 'सेरामिक कैपेसिटर में नगण्य ESL और निम्न ESR होता है, जिससे वे नैनोसेकंड डिजिटल शोर को सरलता से ग्राउंड कर देते हैं।',
        bn: 'সিরামিক ক্যাপাসিটরে অতি নগণ্য ESL এবং কম ESR থাকে, যা ন্যানোসেকেন্ডের উচ্চ ফ্রিকোয়েন্সি ডিজিটাল নয়েজ সহজেই বাইপাস করে।'
      }
    }
  ]
};
