import { Lesson } from '../types';

export const CHAPTER_2_LESSONS_PART2: Record<string, Lesson> = {
  'tp-voltage-division': {
    id: 'lsn-voltage-division',
    topicId: 'tp-voltage-division',
    order: 6,
    title: {
      en: 'Voltage Division & Voltage Divider Rule (VDR)',
      hi: 'वोल्टेज विभाजन नियम (VDR)',
      bn: 'ভোল্টেজ ডিভাইডার রুল (VDR)'
    },
    easyExplanation: {
      en: 'The Voltage Divider Rule allows us to calculate the voltage drop across any individual resistor in a series circuit directly from total input voltage and resistance values, without needing to calculate the circuit current first.',
      hi: 'वोल्टेज विभाजन नियम (VDR) हमें सर्किट धारा की गणना किए बिना केवल कुल इनपुट वोल्टेज और प्रतिरोध मानों से श्रेणी परिपथ में किसी भी प्रतिरोधक के वोल्टेज ड्रॉप की गणना करने की अनुमति देता है।',
      bn: 'ভোল্টেজ ডিভাইডার রুল (VDR) ব্যবহার করে সার্কিটের কারেন্ট না বের করেই সরাসরি ইনপুট ভোল্টেজ ও রেজিস্ট্যান্সের মান থেকে সিরিজের যেকোনো রেজিস্টরের আড়াআড়ি ভোল্টেজ ড্রপ নির্ণয় করা যায়।'
    },
    detailedExplanation: {
      en: 'In a series circuit containing resistors R₁, R₂, R₃... connected across input voltage V_in, the current I = V_in / R_total is identical throughout. The voltage drop across any specific resistor R_x is V_x = I × R_x = V_in × (R_x / R_total). For a two-resistor voltage divider, V_out across R₂ is given by V_out = V_in × [R₂ / (R₁ + R₂)]. Voltage dividers are widely used in electronic circuits for generating reference voltages, potentiometers, and sensor signal conditioning. Note that connecting a low-resistance load across R₂ pulls down the output voltage (loaded voltage divider effect).',
      hi: 'इनपुट वोल्टेज V_in से जुड़े प्रतिरोधकों R₁, R₂... वाले श्रेणी परिपथ में, धारा I = V_in / R_total समान रहती है। किसी विशिष्ट प्रतिरोधक R_x पर वोल्टेज ड्रॉप V_x = V_in × (R_x / R_total) होता है। दो-प्रतिरोधक वोल्टेज डिवायडर के लिए, R₂ पर V_out = V_in × [R₂ / (R₁ + R₂)] होता है। इनका उपयोग इलेक्ट्रॉनिक सर्किट में संदर्भ वोल्टेज बनाने और सेंसर सिग्नल कंडीशनिंग में किया जाता है।',
      bn: 'ইনপুট ভোল্টেজ V_in-এর সাথে সিরিজে যুক্ত রেজিস্টরগুলোর কারেন্ট I = V_in / R_total সর্বত্র সমান। যেকোনো রেজিস্টর R_x-এর ভোল্টেজ ড্রপ V_x = V_in × (R_x / R_total)। দুটি রেজিস্টরের ভোল্টেজ ডিভাইডারে R₂-এর আড়াআড়ি ভোল্টেজ V_out = V_in × [R₂ / (R₁ + R₂)]। রেফারেন্স ভোল্টেজ তৈরি ও সেন্সর সার্কিটে এটি বহুল ব্যবহৃত। কোনো এক্সটার্নাল লোড রেজিস্টর যুক্ত করলে আউটপুট ভোল্টেজ কিছুটা কমে যায় (লোডেড ডিভাইডার ইফেক্ট)।'
    },
    formulas: [
      {
        symbol: 'V_out',
        expression: 'V_out = V_in × [R₂ / (R₁ + R₂)]',
        description: {
          en: 'Voltage Divider Formula across R₂ in a 2-resistor series circuit',
          hi: '2-प्रतिरोधक श्रेणी परिपथ में R₂ पर वोल्टेज डिवायडर सूत्र',
          bn: '২টি রেজিস্টরের সিরিজে R₂-এর আড়াআড়ি ভোল্টেজ ডিভাইডার সূত্র'
        }
      },
      {
        symbol: 'V_x',
        expression: 'V_x = V_in × (R_x / R_total)',
        description: {
          en: 'General Voltage Divider Formula for any resistor R_x',
          hi: 'किसी भी प्रतिरोधक R_x के लिए सामान्य वोल्टेज डिवायडर सूत्र',
          bn: 'যেকোনো রেজিস্টর R_x-এর জন্য সাধারণ ভোল্টেজ ডিভাইডার সূত্র'
        }
      }
    ],
    diagrams: [
      {
        id: 'diag-voltage-divider',
        title: {
          en: 'Two-Resistor Voltage Divider Schematic',
          hi: 'दो-प्रतिरोधक वोल्टेज डिवायडर आरेख',
          bn: 'দুটি রেজিস্টরের ভোল্টেজ ডিভাইডার ডায়াগ্রাম'
        },
        caption: {
          en: 'Input voltage V_in is split into V₁ across R₁ and V_out across R₂ proportional to their resistance ratio.',
          hi: 'इनपुट वोल्टेज V_in उनके प्रतिरोध अनुपात के समानुपाती R₁ पर V₁ और R₂ पर V_out में विभाजित होता है।',
          bn: 'ইনপুট ভোল্টেজ V_in রেজিস্ট্যান্সের অনুপাত অনুযায়ী R₁-এ V₁ এবং R₂-এ V_out হিসেবে ভাগ হয়ে যায়।'
        },
        svgType: 'circuit-voltage-divider'
      }
    ],
    solvedExamples: [
      {
        id: 'ex-vdr-1',
        problem: {
          en: 'A potential divider circuit consists of R₁ = 300 Ω and R₂ = 200 Ω connected across a 10 V DC supply. Calculate output voltage V_out across resistor R₂ using Voltage Divider Rule.',
          hi: 'एक पोटेंशियल डिवायडर सर्किट में 10 V डीसी आपूर्ति पर R₁ = 300 Ω और R₂ = 200 Ω जुड़े हैं। वोल्टेज डिवायडर नियम का उपयोग करके प्रतिरोधक R₂ पर आउटपुट वोल्टेज V_out की गणना करें।',
          bn: 'একটি পটেনশিয়াল ডিভাইডার সার্কিটে ১০ V ডিসি সোর্সের সাথে R₁ = ৩০০ Ω এবং R₂ = ২০০ Ω যুক্ত। ভোল্টেজ ডিভাইডার রুল ব্যবহার করে R₂ রেজিস্টরের আড়াআড়ি আউটপুট ভোল্টেজ V_out নির্ণয় করো।'
        },
        givenValues: {
          'V_in': '10 V',
          'R₁': '300 Ω',
          'R₂': '200 Ω'
        },
        solution: {
          en: 'Given:\n  V_in = 10 V, R₁ = 300 Ω, R₂ = 200 Ω\n\nFormula:\n  V_out = V_in × [R₂ / (R₁ + R₂)]\n\nSubstitution:\n  V_out = 10 V × [200 / (300 + 200)]\n  V_out = 10 V × (200 / 500)\n  V_out = 10 V × 0.4 = 4 Volts.\n\nCheck V₁ across R₁:\n  V₁ = 10 V × (300 / 500) = 6 V\n  V_in = 6 V + 4 V = 10 V (Verified).',
          hi: 'दिया गया है:\n  V_in = 10 V, R₁ = 300 Ω, R₂ = 200 Ω\n\nसूत्र:\n  V_out = V_in × [R₂ / (R₁ + R₂)]\n\nप्रतिस्थापन:\n  V_out = 10 × (200 / 500) = 10 × 0.4 = 4 V।\n  जांच: V₁ = 6 V, V₁ + V_out = 10 V (सत्यापित)।',
          bn: 'দেওয়া আছে:\n  V_in = ১০ V, R₁ = ৩০০ Ω, R₂ = ২০০ Ω\n\nসূত্র:\n  V_out = V_in × [R₂ / (R₁ + R₂)]\n\nমান বসিয়ে পাই:\n  V_out = ১০ × (২০০ / ৫০০) = ১০ × ০.৪ = ৪ V।\n  যাচাই: V₁ = ৬ V, V₁ + V_out = ১০ V (সত্যতা প্রমাণিত)।'
        },
        finalAnswer: {
          en: 'Output Voltage V_out = 4 V',
          hi: 'आउटपुट वोल्टेज V_out = 4 V',
          bn: 'আউটপুট ভোল্টেজ V_out = ৪ V'
        }
      }
    ],
    practicalApplications: {
      en: [
        'Potentiometers used as analog volume and brightness controls in audio/video equipment.',
        'Scaling high DC voltages down to 0-3.3 V levels for microcontroller Analog-to-Digital Converters (ADC).',
        'Light and temperature sensing circuits combining LDRs or Thermistors with fixed resistors.'
      ],
      hi: [
        'ऑडियो/वीडियो उपकरणों में वॉल्यूम और ब्राइटनेस नियंत्रण के रूप में उपयोग किए जाने वाले पोटेंशियोमीटर।',
        'माइक्रोकंट्रोलर एडीसी के लिए उच्च डीसी वोल्टेज को 0-3.3 V स्तर तक छोटा करना।',
        'एलडीआर या थर्मिस्टर के साथ फिक्स्ड प्रतिरोधकों को मिलाकर लाइट और तापमान सेंसर सर्किट।'
      ],
      bn: [
        'অডিও উপাদানে অ্যানালগ ভলিউম ও ব্রাইটনেস অ্যাডজাস্টমেন্ট পটেনশিওমিটার হিসেবে।',
        'মাইক্রোকন্ট্রোলারের এডিসি (ADC) পিনের নিরাপত্তার জন্য উচ্চ ভোল্টেজকে ৩.৩ V মাপে নামিয়ে আনতে।',
        'এলডিআর বা থার্মিস্টরের সাথে ফিক্সড রেজিস্টর যুক্ত করে আলো ও তাপমাত্রা সেন্সিং সার্কিটে।'
      ]
    },
    importantPoints: {
      en: [
        'Voltage drop across a resistor in series is directly proportional to its resistance value.',
        'VDR applies STRICTLY to series circuits or series parts of combination circuits.',
        'Connecting a load impedance R_L in parallel with R₂ forms a loaded divider and reduces V_out.'
      ],
      hi: [
        'श्रेणी में प्रतिरोधक पर वोल्टेज ड्रॉप उसके प्रतिरोध मान के समानुपाती होता है।',
        'VDR केवल श्रेणी परिपथों पर ही लागू होता है।',
        'R₂ के समानांतर लोडिंग प्रतिरोधक R_L जोड़ने से V_out कम हो जाता है।'
      ],
      bn: [
        'সিরিজ সার্কিটে রেজিস্টরের মান যত বেশি হবে তার আড়াআড়ি ভোল্টেজ ড্রপ তত বেশি হবে।',
        'VDR কেবল মাত্র সিরিজ যুক্ত উপাদানের ওপর প্রযোজ্য।',
        'R₂-এর সাথে বাহ্যিক লোড R_L যুক্ত করলে আউটপুট ভোল্টেজ কমে যায়।'
      ]
    },
    commonMistakes: {
      en: [
        'Putting R₁ in the numerator instead of R₂ when calculating V_out across R₂.',
        'Applying the Voltage Divider Rule directly across parallel branches.'
      ],
      hi: [
        'R₂ पर V_out की गणना करते समय R₂ के स्थान पर अंश में R₁ रखना।',
        'समानांतर शाखाओं पर सीधे वोल्टेज विभाजन नियम लागू करना।'
      ],
      bn: [
        'R₂-এর আউটপুট ভোল্টেজ বের করার সময় সূত্রে R₂-এর জায়গায় উপরে R₁ বসিয়ে ফেলা।',
        'প্যারালাল শাখার ওপর ভুল করে ভোল্টেজ ডিভাইডার রুল প্রয়োগ করা।'
      ]
    },
    mcqs: [
      {
        id: 'mcq-vdr-1',
        question: {
          en: 'A voltage divider has R₁ = 100 Ω and R₂ = 100 Ω connected to a 12 V battery. What is the output voltage V_out across R₂?',
          hi: 'एक वोल्टेज डिवायडर में 12 V बैटरी से R₁ = 100 Ω और R₂ = 100 Ω जुड़े हैं। R₂ पर आउटपुट वोल्टेज V_out क्या है?',
          bn: 'একটি ভোল্টেজ ডিভাইডারে ১২ V ব্যাটারির সাথে R₁ = ১০০ Ω এবং R₂ = ১০০ Ω যুক্ত। R₂-এর আড়াআড়ি আউটপুট ভোল্টেজ V_out কত?'
        },
        options: [
          { id: 'a', text: { en: '12 V', hi: '12 V', bn: '১২ V' } },
          { id: 'b', text: { en: '6 V', hi: '6 V', bn: '৬ V' } },
          { id: 'c', text: { en: '3 V', hi: '3 V', bn: '৩ V' } },
          { id: 'd', text: { en: '0 V', hi: '0 V', bn: '০ V' } }
        ],
        correctOptionId: 'b',
        explanation: {
          en: 'When two series resistors are equal (R₁ = R₂), input voltage splits equally: V_out = 12 V / 2 = 6 V.',
          hi: 'जब दो श्रेणी प्रतिरोधक समान होते हैं, तो इनपुट वोल्टेज आधा-आधा बंट जाता है: 12 / 2 = 6 V।',
          bn: 'দুটি সমান রেজিস্টর সিরিজে থাকলে ইনপুট ভোল্টেজ সমান দুই ভাগে ভাগ হয়: ১২ / ২ = ৬ V।'
        }
      },
      {
        id: 'mcq-vdr-2',
        question: {
          en: 'According to the Voltage Divider Rule, the largest voltage drop occurs across the resistor with:',
          hi: 'वोल्टेज विभाजन नियम के अनुसार, सबसे बड़ा वोल्टेज ड्रॉप किस प्रतिरोधक पर होता है?',
          bn: 'ভোল্টেজ ডিভাইডার রুল অনুযায়ী, সবচেয়ে বেশি ভোল্টেজ ড্রপ ঘটবে কোন রেজিস্টরে?'
        },
        options: [
          { id: 'a', text: { en: 'The lowest resistance value', hi: 'सबसे कम प्रतिरोध मान', bn: 'সবচেয়ে কম রেজিস্ট্যান্সের মান বিশিষ্ট' } },
          { id: 'b', text: { en: 'The highest resistance value', hi: 'सबसे अधिक प्रतिरोध मान', bn: 'সবচেয়ে বেশি রেজিস্ট্যান্সের মান বিশিষ্ট' } },
          { id: 'c', text: { en: 'The middle resistance value', hi: 'मध्यम प्रतिरोध मान', bn: 'মাঝারি মানের রেজিস্ট্যান্স বিশিষ্ট' } },
          { id: 'd', text: { en: 'All resistors have equal voltage drop regardless of value', hi: 'मान की परवाह किए बिना सभी प्रतिरोधकों का वोल्टेज समान होता है', bn: 'মান যাই হোক না কেন সব রেজিস্টরের ভোল্টেজ ড্রপ সমান' } }
        ],
        correctOptionId: 'b',
        explanation: {
          en: 'Because V_x = I × R_x and current is constant in series, voltage drop is directly proportional to resistance R_x.',
          hi: 'क्योंकि V_x = I × R_x और धारा स्थिर होती है, वोल्टेज ड्रॉप प्रतिरोध के समानुपाती होता है।',
          bn: 'যেহেতু V_x = I × R_x এবং কারেন্ট ধ্রুবক, তাই রেজিস্ট্যান্সের মান যত বেশি হবে ভোল্টেজ ড্রপ তত বেশি হবে।'
        }
      },
      {
        id: 'mcq-vdr-3',
        question: {
          en: 'A 24 V DC supply feeds three series resistors R₁ = 1 kΩ, R₂ = 2 kΩ, R₃ = 3 kΩ. What is the voltage across R₃?',
          hi: '24 V डीसी आपूर्ति तीन श्रेणी प्रतिरोधकों R₁ = 1 kΩ, R₂ = 2 kΩ, R₃ = 3 kΩ को दी जाती है। R₃ पर वोल्टेज क्या है?',
          bn: '২৪ V ডিসি সাপ্লাই তিনটি সিরিজ রেজিস্টর R₁ = ১ kΩ, R₂ = ২ kΩ, R₃ = ৩ kΩ-কে দেওয়া হলো। R₃-এর আড়াআড়ি ভোল্টেজ কত?'
        },
        options: [
          { id: 'a', text: { en: '4 V', hi: '4 V', bn: '৪ V' } },
          { id: 'b', text: { en: '8 V', hi: '8 V', bn: '৮ V' } },
          { id: 'c', text: { en: '12 V', hi: '12 V', bn: '১২ V' } },
          { id: 'd', text: { en: '16 V', hi: '16 V', bn: '১৬ V' } }
        ],
        correctOptionId: 'c',
        explanation: {
          en: 'R_total = 1 + 2 + 3 = 6 kΩ. V₃ = 24 V × (3 kΩ / 6 kΩ) = 24 × 0.5 = 12 V.',
          hi: 'R_total = 6 kΩ। V₃ = 24 V × (3 / 6) = 12 V।',
          bn: 'R_total = ৬ kΩ। V₃ = ২৪ V × (৩ / ৬) = ১২ V।'
        }
      }
    ],
    practiceQuestions: [
      {
        id: 'pq-vdr-1',
        question: {
          en: 'A microcontroller ADC pin requires 3.3 V max input, but you need to sense a 12 V automotive battery. Design a two-resistor voltage divider (find R₁ and R₂) so V_out = 3.0 V when battery is 12 V, assuming total divider resistance R₁ + R₂ = 12 kΩ.',
          hi: 'एक माइक्रोकंट्रोलर एडीसी पिन को अधिकतम 3.3 V इनपुट चाहिए, लेकिन आपको 12 V ऑटोमोटिव बैटरी को मापना है। 12 kΩ के कुल प्रतिरोध पर V_out = 3.0 V देने वाले R₁ और R₂ का मान ज्ञात करें।',
          bn: 'একটি মাইক্রোকন্ট্রোলারের এডিসি পিনে সর্বোচ্চ ৩.৩ V দেওয়া যায়, কিন্তু তোমাকে ১২ V ব্যাটারির ভোল্টেজ মাপতে হবে। মোট রেজিস্ট্যান্স R₁ + R₂ = ১২ kΩ ধরে V_out = ৩.০ V পেতে R₁ ও R₂-এর মান বের করো।'
        },
        hint: {
          en: 'Use V_out / V_in = R₂ / (R₁ + R₂). So 3 / 12 = R₂ / 12 kΩ.',
          hi: 'V_out / V_in = R₂ / 12 kΩ का उपयोग करें। यानी 3 / 12 = R₂ / 12 kΩ।',
          bn: 'V_out / V_in = R₂ / ১২ kΩ ব্যবহার করো। অর্থাৎ ৩ / ১২ = R₂ / ১২ kΩ।'
        },
        answerKey: {
          en: 'R₂ = (3 / 12) × 12 kΩ = 3 kΩ. R₁ = 12 kΩ - 3 kΩ = 9 kΩ.',
          hi: 'R₂ = 3 kΩ। R₁ = 12 kΩ - 3 kΩ = 9 kΩ।',
          bn: 'R₂ = ৩ kΩ। R₁ = ১২ kΩ - ৩ kΩ = ৯ kΩ।'
        }
      },
      {
        id: 'pq-vdr-2',
        question: {
          en: 'Explain why connecting a heavy load resistor R_L in parallel across R₂ lowers the output voltage of a voltage divider compared to its unloaded value.',
          hi: 'समझाइए कि R₂ के समानांतर एक भारी लोड प्रतिरोधक R_L जोड़ने से अनलोड मान की तुलना में वोल्टेज डिवायडर का आउटपुट वोल्टेज क्यों कम हो जाता है।',
          bn: 'ভোল্টেজ ডিভাইডারের R₂-এর আড়াআড়ি একটি লোড রেজিস্টর R_L যুক্ত করলে কেন আউটপুট ভোল্টেজ আগের চেয়ে কমে যায় ব্যাখ্যা করো।'
        },
        hint: {
          en: 'Parallel combination of R₂ and R_L produces a lower net resistance R_parallel < R₂, which reduces the lower arm resistance ratio.',
          hi: 'R₂ और R_L का समानांतर संयोजन एक कम शुद्ध प्रतिरोध बनाता है, जो नीचे की शाखा के अनुपात को कम कर देता है।',
          bn: 'R₂ এবং R_L-এর প্যারালাল কম্বিনেশনে রেজিস্ট্যান্স কমে যায় (R_parallel < R₂), যা নিচের অংশের ভোল্টেজ শেয়ার কমিয়ে দেয়।'
        },
        answerKey: {
          en: 'Connecting R_L in parallel creates a lower net equivalent resistance R_parallel = (R₂ × R_L)/(R₂ + R_L) < R₂. By VDR, smaller resistance produces smaller voltage drop V_out.',
          hi: 'R_L को समानांतर में जोड़ने से नेट प्रतिरोध घट जाता है (R_parallel < R₂)। कम प्रतिरोध के कारण उस शाखा पर वोल्टेज ड्रॉप घट जाता है।',
          bn: 'প্যারালালে R_L যুক্ত করলে তুল্য রোধ কমে যায় (R_parallel < R₂)। ছোট রেজিস্ট্যান্সের কারণে VDR নিয়ম অনুসারে আউটপুট ভোল্টেজ ড্রপ কমে যায়।'
        }
      }
    ]
  },

  'tp-current-division': {
    id: 'lsn-current-division',
    topicId: 'tp-current-division',
    order: 7,
    title: {
      en: 'Current Division & Current Divider Rule (CDR)',
      hi: 'धारा विभाजन नियम (CDR)',
      bn: 'কারেন্ট ডিভাইডার রুল (CDR)'
    },
    easyExplanation: {
      en: 'The Current Divider Rule tells us how total current splits into parallel branches. Current automatically favors the path of least resistance — more current flows through a smaller resistor and less through a larger resistor.',
      hi: 'धारा विभाजन नियम (CDR) हमें बताता है कि कुल धारा समानांतर शाखाओं में कैसे विभाजित होती है। धारा कम प्रतिरोध वाले मार्ग का पक्ष लेती है - छोटे प्रतिरोधक से अधिक और बड़े प्रतिरोधक से कम धारा बहती है।',
      bn: 'কারেন্ট ডিভাইডার রুল (CDR) নির্দেশ করে কীভাবে মোট কারেন্ট প্যারালাল শাখাগুলোর মাঝে ভাগ হয়। কারেন্ট সবসময় কম রেজিস্ট্যান্সের পথ পছন্দ করে — তাই ছোট রেজিস্টরে বেশি কারেন্ট এবং বড় রেজিস্টরে কম কারেন্ট যায়।'
    },
    detailedExplanation: {
      en: 'In a parallel combination of two resistors R₁ and R₂ driven by total current I_T, the voltage V = I_T × R_parallel is equal across both branches. The current in branch 1 is I₁ = V / R₁ = I_T × [R_parallel / R₁]. Substituting R_parallel = (R₁ × R₂) / (R₁ + R₂) yields the two-branch Current Divider Rule: I₁ = I_T × [R₂ / (R₁ + R₂)] and I₂ = I_T × [R₁ / (R₁ + R₂)]. Notice that the numerator contains the OPPOSITE branch resistance. For N parallel branches using conductance G = 1/R, branch current is I_x = I_T × (G_x / G_total).',
      hi: 'कुल धारा I_T से संचालित दो प्रतिरोधकों R₁ और R₂ के समानांतर संयोजन में, दोनों शाखाओं पर वोल्टेज V = I_T × R_parallel समान होता है। शाखा 1 में धारा I₁ = I_T × [R₂ / (R₁ + R₂)] और शाखा 2 में I₂ = I_T × [R₁ / (R₁ + R₂)] होती है। ध्यान दें कि अंश में विपरीत शाखा का प्रतिरोध होता है। N समानांतर शाखाओं के लिए I_x = I_T × (G_x / G_total) होता है।',
      bn: 'মোট কারেন্ট I_T দুটি প্যারালাল রেজিস্টর R₁ ও R₂-এ প্রবেশ করলে আড়াআড়ি ভোল্টেজ V = I_T × R_parallel সমান থাকে। ১-নং শাখার কারেন্ট I₁ = I_T × [R₂ / (R₁ + R₂)] এবং ২-নং শাখার কারেন্ট I₂ = I_T × [R₁ / (R₁ + R₂)]। লক্ষ্য করো, ২টি শাখার ক্ষেত্রে উপরে বিপরীত শাখার রেজিস্ট্যান্স থাকে। N-সংখ্যক শাখার ক্ষেত্রে কন্ডাকট্যান্স দিয়ে সূত্র: I_x = I_T × (G_x / G_total)।'
    },
    formulas: [
      {
        symbol: 'I₁',
        expression: 'I₁ = I_T × [R₂ / (R₁ + R₂)]',
        description: {
          en: 'Current Divider Formula for branch 1 in a 2-resistor parallel network',
          hi: '2-प्रतिरोधक समानांतर नेटवर्क में शाखा 1 के लिए धारा विभाजन सूत्र',
          bn: '২টি প্যারালাল রেজিস্টরের ক্ষেত্রে শাখা-১ এর কারেন্ট ডিভাইডার সূত্র'
        }
      },
      {
        symbol: 'I₂',
        expression: 'I₂ = I_T × [R₁ / (R₁ + R₂)]',
        description: {
          en: 'Current Divider Formula for branch 2 in a 2-resistor parallel network',
          hi: '2-प्रतिरोधक समानांतर नेटवर्क में शाखा 2 के लिए धारा विभाजन सूत्र',
          bn: '২টি প্যারালাল রেজিস্টরের ক্ষেত্রে শাখা-২ এর কারেন্ট ডিভাইডার সূত্র'
        }
      }
    ],
    diagrams: [
      {
        id: 'diag-current-divider',
        title: {
          en: 'Two-Branch Current Divider Network Schematic',
          hi: 'दो-शाखा धारा डिवायडर आरेख',
          bn: 'দুটি শাখার কারেন্ট ডিভাইডার নেটওয়ার্ক ডায়াগ্রাম'
        },
        caption: {
          en: 'Total entering current I_T divides into branch currents I₁ and I₂ inversely proportional to R₁ and R₂.',
          hi: 'प्रवेश करने वाली कुल धारा I_T प्रतिरोध R₁ और R₂ के व्युत्क्रमानुपाती I₁ और I₂ में विभाजित होती है।',
          bn: 'প্রবেশকারী মোট কারেন্ট I_T রেজিস্ট্যান্স R₁ ও R₂-এর ব্যস্তানুপাতে শাখা কারেন্ট I₁ ও I₂-এ বিভক্ত হয়।'
        },
        svgType: 'circuit-current-divider'
      }
    ],
    solvedExamples: [
      {
        id: 'ex-cdr-1',
        problem: {
          en: 'A total current of 10 A enters a parallel network formed by R₁ = 12 Ω and R₂ = 6 Ω. Calculate branch currents I₁ through R₁ and I₂ through R₂ using Current Divider Rule.',
          hi: '10 A की कुल धारा R₁ = 12 Ω और R₂ = 6 Ω द्वारा निर्मित समानांतर नेटवर्क में प्रवेश करती है। धारा विभाजन नियम से I₁ और I₂ की गणना करें।',
          bn: '১০ A-এর একটি মোট কারেন্ট R₁ = ১২ Ω এবং R₂ = ৬ Ω দ্বারা গঠিত প্যারালাল সার্কিটে প্রবেশ করে। কারেন্ট ডিভাইডার রুল ব্যবহার করে শাখা কারেন্ট I₁ ও I₂ নির্ণয় করো।'
        },
        givenValues: {
          'I_T': '10 A',
          'R₁': '12 Ω',
          'R₂': '6 Ω'
        },
        solution: {
          en: 'Given:\n  I_T = 10 A, R₁ = 12 Ω, R₂ = 6 Ω\n\nBranch 1 Current (I₁):\n  I₁ = I_T × [R₂ / (R₁ + R₂)]\n  I₁ = 10 A × [6 / (12 + 6)] = 10 × (6 / 18) = 10 × (1/3) = 3.33 A\n\nBranch 2 Current (I₂):\n  I₂ = I_T × [R₁ / (R₁ + R₂)]\n  I₂ = 10 A × [12 / (12 + 6)] = 10 × (12 / 18) = 10 × (2/3) = 6.67 A\n\nVerification (KCL):\n  I₁ + I₂ = 3.33 A + 6.67 A = 10 A (Verified).',
          hi: 'दिया गया है:\n  I_T = 10 A, R₁ = 12 Ω, R₂ = 6 Ω\n\nशाखा 1 धारा I₁:\n  I₁ = 10 × [6 / (12 + 6)] = 10 × (1/3) = 3.33 A\n\nशाखा 2 धारा I₂:\n  I₂ = 10 × [12 / (12 + 6)] = 10 × (2/3) = 6.67 A\n\nजांच: 3.33 + 6.67 = 10 A (सत्यापित)।',
          bn: 'দেওয়া আছে:\n  I_T = ১০ A, R₁ = ১২ Ω, R₂ = ৬ Ω\n\nশাখা-১ কারেন্ট I₁:\n  I₁ = ১০ × [৬ / (১২ + ৬)] = ১০ × (১/৩) = ৩.৩৩ A\n\nশাখা-২ কারেন্ট I₂:\n  I₂ = ১০ × [১২ / (১২ + ৬)] = ১০ × (২/৩) = ৬.৬৭ A\n\nযাচাই (KCL):\n  ৩.৩৩ + ৬.৬৭ = ১০ A (সত্যতা প্রমাণিত)।'
        },
        finalAnswer: {
          en: 'Branch Current I₁ = 3.33 A, Branch Current I₂ = 6.67 A',
          hi: 'शाखा धारा I₁ = 3.33 A, शाखा धारा I₂ = 6.67 A',
          bn: 'শাখা কারেন্ট I₁ = ৩.৩৩ A, শাখা কারেন্ট I₂ = ৬.৬৭ A'
        }
      }
    ],
    practicalApplications: {
      en: [
        'Ammeter shunt design: connecting a low-resistance shunt resistor in parallel with a sensitive meter movement to extend measurement range.',
        'Current sharing in multi-phase power supply converters and parallel power MOSFETs.',
        'Current distribution in LED array light panels.'
      ],
      hi: [
        'अमीटर शंट डिज़ाइन: माप सीमा बढ़ाने के लिए सेंसिटिव मीटर मूवमेंट के साथ समानांतर में कम प्रतिरोध शंट लगाना।',
        'मल्टी-फेज पावर सप्लाई कन्वर्टर्स में करंट शेयरिंग।',
        'एलईडी ऐरे लाइट पैनल में करंट वितरण।'
      ],
      bn: [
        'অ্যামিটারের পাল্লা বাড়াতে মিটার কয়েলের সাথে প্যারালালে স্বল্প মানের শন্ট রেজিস্টর যুক্ত করতে।',
        'মাল্টি-ফেজ পাওয়ার সাপ্লাই সার্কিটে পাওয়ার ভাগ করে নিতে।',
        'এলইডি লাইটিং প্যানেলে সমান কারেন্ট ডিস্ট্রিবিউশনের জন্য।'
      ]
    },
    importantPoints: {
      en: [
        'Branch current is inversely proportional to branch resistance.',
        'For two parallel resistors, the numerator in CDR uses the OPPOSITE resistor.',
        'If two parallel branch resistances are equal (R₁ = R₂), entering current splits exactly in half (I₁ = I₂ = I_T / 2).'
      ],
      hi: [
        'शाखा धारा शाखा प्रतिरोध के व्युत्क्रमानुपाती होती है।',
        'दो समानांतर प्रतिरोधकों के लिए CDR के अंश में विपरीत प्रतिरोधक का मान आता है।',
        'यदि दो समानांतर शाखा प्रतिरोध समान हैं, तो धारा आधी-आधी बंट जाती है।'
      ],
      bn: [
        'শাখা কারেন্ট ওই শাখার রেজিস্ট্যান্সের ব্যস্তানুপাতিক।',
        '২টি শাখার ক্ষেত্রে CDR সূত্রের উপরে বিপরীত শাখার রেজিস্ট্যান্স থাকে।',
        'প্যারালাল শাখা দুটির রেজিস্ট্যান্স সমান হলে মোট কারেন্ট সমান দুই ভাগে ভাগ হয়ে যায়।'
      ]
    },
    commonMistakes: {
      en: [
        'Putting R₁ in the numerator when calculating I₁ in a two-resistor parallel circuit.',
        'Applying the Current Divider Rule directly to series connected resistors.'
      ],
      hi: [
        'दो-प्रतिरोधक समानांतर परिपथ में I₁ की गणना करते समय अंश में R₁ रखना।',
        'श्रेणीबद्ध प्रतिरोधकों पर सीधे धारा विभाजन नियम लागू करना।'
      ],
      bn: [
        '২টি রেজিস্টরের প্যারালাল সার্কিটে I₁ বের করার সময় উপরে ভুল করে R₁ বসানো।',
        'সিরিজ যুক্ত রেজিস্টরের ওপর ভুল করে কারেন্ট ডিভাইডার রুল প্রয়োগ করা।'
      ]
    },
    mcqs: [
      {
        id: 'mcq-cdr-1',
        question: {
          en: 'In a parallel circuit with R₁ = 2 Ω and R₂ = 8 Ω, which resistor carries more current?',
          hi: 'R₁ = 2 Ω और R₂ = 8 Ω वाले समानांतर परिपथ में, कौन सा प्रतिरोधक अधिक धारा ले जाता है?',
          bn: 'R₁ = ২ Ω এবং R₂ = ৮ Ω বিশিষ্ট প্যারালাল সার্কিটে কোন রেজিস্টর দিয়ে বেশি কারেন্ট যাবে?'
        },
        options: [
          { id: 'a', text: { en: 'Resistor R₁ (2 Ω)', hi: 'प्रतिरोधक R₁ (2 Ω)', bn: 'রেজিস্টর R₁ (২ Ω)' } },
          { id: 'b', text: { en: 'Resistor R₂ (8 Ω)', hi: 'प्रतिरोधक R₂ (8 Ω)', bn: 'রেজিস্টর R₂ (৮ Ω)' } },
          { id: 'c', text: { en: 'Both carry equal current', hi: 'दोनों समान धारा ले जाते हैं', bn: 'উভয় রেজিস্টর সমান কারেন্ট নেবে' } },
          { id: 'd', text: { en: 'Neither resistor carries any current', hi: 'कोई भी प्रतिरोधक धारा नहीं ले जाता', bn: 'কোনোটি দিয়েই কারেন্ট যাবে না' } }
        ],
        correctOptionId: 'a',
        explanation: {
          en: 'Current favors the path of least resistance. The 2 Ω resistor carries 4 times more current than the 8 Ω resistor.',
          hi: 'धारा कम प्रतिरोध का मार्ग चुनती है। 2 Ω का प्रतिरोधक 8 Ω की तुलना में 4 गुना अधिक धारा ले जाता है।',
          bn: 'কারেন্ট কম রেজিস্ট্যান্সের পথ বেছে নেয়। তাই ২ Ω রেজিস্টরটি ৮ Ω রেজিস্টরের চেয়ে ৪ গুণ বেশি কারেন্ট নেবে।'
        }
      },
      {
        id: 'mcq-cdr-2',
        question: {
          en: 'A current of 6 A enters a parallel combination of two equal 10 Ω resistors. What is the current through each branch?',
          hi: '6 A की धारा दो समान 10 Ω प्रतिरोधकों के समानांतर संयोजन में प्रवेश करती है। प्रत्येक शाखा में धारा क्या है?',
          bn: '৬ A কারেন্ট দুটি সমান ১০ Ω প্যারালাল রেজিস্টরের মিক্সে প্রবেশ করলে প্রতিটি শাখার কারেন্ট কত?'
        },
        options: [
          { id: 'a', text: { en: '6 A', hi: '6 A', bn: '৬ A' } },
          { id: 'b', text: { en: '3 A', hi: '3 A', bn: '৩ A' } },
          { id: 'c', text: { en: '1.5 A', hi: '1.5 A', bn: '১.৫ A' } },
          { id: 'd', text: { en: '12 A', hi: '12 A', bn: '১২ A' } }
        ],
        correctOptionId: 'b',
        explanation: {
          en: 'When parallel branch resistances are equal, entering current splits equally: I_branch = 6 A / 2 = 3 A.',
          hi: 'जब समानांतर प्रतिरोध समान होते हैं, तो धारा समान रूप से विभाजित होती है: 6 / 2 = 3 A।',
          bn: 'প্যারালাল শাখার রোধ সমান হলে কারেন্ট সমান ভাগে ভাগ হয়: ৬ / ২ = ৩ A।'
        }
      },
      {
        id: 'mcq-cdr-3',
        question: {
          en: 'What is the correct formula for current I₂ through R₂ in a 2-resistor parallel circuit?',
          hi: '2-प्रतिरोधक समानांतर परिपथ में R₂ से प्रवाहित धारा I₂ का सही सूत्र क्या है?',
          bn: '২-রেজিস্টরের প্যারালাল সার্কিটে R₂-এর কারেন্ট I₂ নির্ণয়ের সঠিক সূত্র কোনটি?'
        },
        options: [
          { id: 'a', text: { en: 'I₂ = I_T × [R₂ / (R₁ + R₂)]', hi: 'I₂ = I_T × [R₂ / (R₁ + R₂)]', bn: 'I₂ = I_T × [R₂ / (R₁ + R₂)]' } },
          { id: 'b', text: { en: 'I₂ = I_T × [R₁ / (R₁ + R₂)]', hi: 'I₂ = I_T × [R₁ / (R₁ + R₂)]', bn: 'I₂ = I_T × [R₁ / (R₁ + R₂)]' } },
          { id: 'c', text: { en: 'I₂ = I_T × (R₁ + R₂)', hi: 'I₂ = I_T × (R₁ + R₂)', bn: 'I₂ = I_T × (R₁ + R₂)' } },
          { id: 'd', text: { en: 'I₂ = I_T / R₂', hi: 'I₂ = I_T / R₂', bn: 'I₂ = I_T / R₂' } }
        ],
        correctOptionId: 'b',
        explanation: {
          en: 'The Current Divider Rule for branch 2 uses R₁ in the numerator: I₂ = I_T × [R₁ / (R₁ + R₂)].',
          hi: 'शाखा 2 के लिए धारा विभाजन नियम के अंश में R₁ आता है: I₂ = I_T × [R₁ / (R₁ + R₂)]।',
          bn: '২-শাখার কারেন্ট ডিভাইডার সূত্রে উপরে বিপরীত রেজিস্টর R₁ বসে: I₂ = I_T × [R₁ / (R₁ + R₂)]।'
        }
      }
    ],
    practiceQuestions: [
      {
        id: 'pq-cdr-1',
        question: {
          en: 'An ammeter with an internal resistance of 0.9 Ω needs to measure up to 10 A total line current, but its meter movement can safely handle only 1 A. Calculate the value of the parallel shunt resistor R_shunt needed.',
          hi: '0.9 Ω आंतरिक प्रतिरोध वाले एक अमीटर को 10 A कुल लाइन धारा तक मापना है, लेकिन इसका मीटर केवल 1 A सुरक्षित रूप से संभाल सकता है। आवश्यक समानांतर शंट प्रतिरोधक R_shunt का मान ज्ञात करें।',
          bn: '০.৯ Ω অভ্যন্তরীণ রোধের একটি অ্যামিটারকে ১০ A মেইন কারেন্ট পর্যন্ত মাপতে হবে, তবে মিটারের কয়েল সর্বোচ্চ ১ A কারেন্ট সহ্য করতে পারে। প্রয়োজনীয় প্যারালাল শন্ট রেজিস্টর R_shunt-এর মান কত হবে?'
        },
        hint: {
          en: 'Meter takes 1 A, so shunt must bypass remaining 9 A. Since voltage is equal across parallel branches: V_meter = 1 A × 0.9 Ω = 0.9 V. Then R_shunt = 0.9 V / 9 A.',
          hi: 'मीटर 1 A लेता है, शंट को 9 A पास करना होगा। V_meter = 0.9 V। R_shunt = 0.9 V / 9 A।',
          bn: 'মিটার ১ A নিলে শন্টকে বাকি ৯ A বাইপাস করতে হবে। V_meter = ০.৯ V। R_shunt = ০.৯ V / ৯ A।'
        },
        answerKey: {
          en: 'Shunt Current I_shunt = 10 A - 1 A = 9 A. Meter Voltage V = 1 A × 0.9 Ω = 0.9 V. R_shunt = 0.9 V / 9 A = 0.1 Ω.',
          hi: 'I_shunt = 9 A। V = 0.9 V। R_shunt = 0.9 V / 9 A = 0.1 Ω।',
          bn: 'I_shunt = ৯ A। V = ০.৯ V। R_shunt = ০.৯ V / ৯ A = ০.১ Ω।'
        }
      },
      {
        id: 'pq-cdr-2',
        question: {
          en: 'Compare the Voltage Divider Rule (VDR) and Current Divider Rule (CDR) in terms of circuit connections, numerator formulas, and physical parameters divided.',
          hi: 'परिपथ कनेक्शन, अंश सूत्र और विभाजित भौतिक मापदंडों के संदर्भ में वोल्टेज विभाजन नियम (VDR) और धारा विभाजन नियम (CDR) की तुलना करें।',
          bn: 'সার্কিট সংযোগ, সূত্রের উপরের অংশ (Numerator) এবং যে রাশিটি বিভক্ত হয় সেগুলোর বিচারে ভোল্টেজ ডিভাইডার রুল (VDR) ও কারেন্ট ডিভাইডার রুল (CDR)-এর তুলনা করো।'
        },
        hint: {
          en: 'VDR applies to Series circuits (divides Voltage, numerator is SAME resistor). CDR applies to Parallel circuits (divides Current, 2-branch numerator is OPPOSITE resistor).',
          hi: 'VDR श्रेणी परिपथ में लागू होता है (समान प्रतिरोध अंश)। CDR समानांतर परिपथ में लागू होता है (विपरीत प्रतिरोध अंश)।',
          bn: 'VDR সিরিজে প্রযোজ্য (নিজের রেজিস্টর উপরে বসে)। CDR প্যারালালে প্রযোজ्य (২টির ক্ষেত্রে বিপরীত রেজিস্টর উপরে বসে)।'
        },
        answerKey: {
          en: '1. VDR: Applies to Series circuits; divides Voltage; formula for V_x uses R_x in numerator.\n2. CDR: Applies to Parallel circuits; divides Current; formula for I₁ uses opposite resistor R₂ in numerator.',
          hi: '1. VDR: श्रेणी परिपथ; वोल्टेज विभाजन; अंश में R_x।\n2. CDR: समानांतर परिपथ; धारा विभाजन; 2-शाखा अंश में विपरीत प्रतिरोधक।',
          bn: '১. VDR: সিরিজ সার্কিটে ভোল্টেজ বিভক্ত করে; সূত্রে উপরে R_x থাকে।\n২. CDR: প্যারালাল সার্কিটে কারেন্ট বিভক্ত করে; ২টি শাখার ক্ষেত্রে উপরে বিপরীত রেজিস্টর থাকে।'
        }
      }
    ]
  },

  'tp-open-circuit': {
    id: 'lsn-open-circuit',
    topicId: 'tp-open-circuit',
    order: 8,
    title: {
      en: 'Open Circuit Characteristics & Troubleshooting',
      hi: 'खुला परिपथ (ओपन सर्किट) लक्षण एवं ट्रबलशूटिंग',
      bn: 'ওপেন সার্কিটের বৈশিষ্ট্য ও ট্রাবলশুটিং'
    },
    easyExplanation: {
      en: 'An open circuit is an incomplete or broken pathway where electric current cannot flow. Even though current drops to zero, full source voltage is still present across the open break terminals.',
      hi: 'खुला परिपथ (Open Circuit) एक अधूरा या टूटा हुआ मार्ग है जहां विद्युत धारा नहीं बह सकती है। यद्यपि धारा शून्य हो जाती है, फिर भी टूटे हुए सिरों पर पूरा स्रोत वोल्टेज मौजूद रहता है।',
      bn: 'ওপেন সার্কিট হলো একটি অসম্পূর্ণ বা বিচ্ছিন্ন পথ যার মধ্য দিয়ে বিদ্যুৎ প্রবাহিত হতে পারে না। কারেন্ট শূন্য হলেও বিচ্ছিন্ন পয়েন্টের দু প্রান্তে মূল সাপ্লাই ভোল্টেজ বিদ্যমান থাকে।'
    },
    detailedExplanation: {
      en: 'An open circuit represents an infinite or extremely high resistance gap (R_open → ∞ Ω). By Ohm’s Law, circuit current becomes zero (I = V / ∞ = 0 A). Consequently, zero current means zero voltage drop across any connected series load resistors (V_load = I × R_load = 0 V). However, by Kirchhoff’s Voltage Law (KVL), the full supply voltage appears directly across the open terminals (V_gap = V_source). Open circuit conditions are caused intentionally by open switches, circuit breakers, and blown fuses, or unintentionally by broken conductors, burned heater filaments, and loose terminal connections. Digital multimeters set to AC/DC voltage or continuity mode are used to pinpoint open faults.',
      hi: 'खुला परिपथ अनंत प्रतिरोध (R_open → ∞ Ω) का प्रतिनिधित्व करता है। ओम के नियम से, परिपथ धारा शून्य (I = 0 A) हो जाती है। इसके परिणामस्वरूप श्रेणी लोडिंग प्रतिरोधकों पर वोल्टेज ड्रॉप शून्य हो जाता है (V_load = 0 V)। हालांकि, खुला सिरों के पार पूरा स्रोत वोल्टेज दिखाई देता है (V_gap = V_source)। ओपन सर्किट स्विच खोलने, फ्यूज उड़ने या तार टूटने के कारण होता है। डीजीएम या मल्टीमीटर का उपयोग करके ओपन फॉल्ट का पता लगाया जाता है।',
      bn: 'ওপেন সার্কিট অসীম রেজিস্ট্যান্স নির্দেশ করে (R_open → ∞ Ω)। ওহমের সূত্রানুসারে, কারেন্ট শূন্য হয়ে যায় (I = ০ A)। ফলে সিরিজে যুক্ত লোডের আড়াআড়ি ভোল্টেজ ড্রপও শূন্য হয় (V_load = ০ V)। তবে কির্শফের ভোল্টেজ ল অনুযায়ী, পুরো সাপ্লাই ভোল্টেজ বিচ্ছিন্ন পয়েন্টের দু প্রান্তে উপস্থিত থাকে (V_gap = V_source)। সুইচ অফ করলে, ফিউজ পুড়লে বা তার ছিঁড়ে গেলে ওপেন সার্কিট তৈরি হয়। মাল্টিমিটার দিয়ে ভোল্টেজ ও কন্টিনিউটি মেপে এই ফল্ট সনাক্ত করা হয়।'
    },
    formulas: [
      {
        symbol: 'R_open',
        expression: 'R_open = ∞ Ω (Infinite Resistance)',
        description: {
          en: 'Resistance across an open gap or blown switch',
          hi: 'खुले गैप या उड़ चुके स्विच के पार प्रतिरोध',
          bn: 'বিচ্ছিন্ন পয়েন্টের বা ফিউজ পোড়া গ্যাপের রেজিস্ট্যান্স'
        }
      },
      {
        symbol: 'I_open',
        expression: 'I_open = 0 A',
        description: {
          en: 'Zero current flow through an open circuit',
          hi: 'खुले परिपथ से शून्य धारा का प्रवाह',
          bn: 'ওপেন সার্কিটে শূন্য কারেন্ট প্রবাহ'
        }
      },
      {
        symbol: 'V_gap',
        expression: 'V_gap = V_source',
        description: {
          en: 'Full source voltage appears across open break terminals.',
          hi: 'टूटे हुए सिरों के पार पूरा स्रोत वोल्टेज दिखाई देता है।',
          bn: 'বিচ্ছিন্ন টার্মিনালের আড়াআড়ি পুরো সাপ্লাই ভোল্টেজ থাকে।'
        }
      }
    ],
    diagrams: [
      {
        id: 'diag-open-circuit',
        title: {
          en: 'Open Circuit Schematic showing Broken Switch & Zero Current',
          hi: 'खुला परिपथ आरेख (टूटे हुए स्विच और शून्य धारा के साथ)',
          bn: 'ওপেন সার্কিট ডায়াগ্রাম (বিচ্ছিন্ন সুইচ ও শূন্য কারেন্ট সহ)'
        },
        caption: {
          en: 'Current I = 0 A; full voltage V_gap = 230 V appears across open switch terminals.',
          hi: 'धारा I = 0 A; खुले स्विच के सिरों पर पूरा 230 V वोल्टेज दिखाई देता है।',
          bn: 'কারেন্ট I = ০ A; খোলা সুইচের দু প্রান্তে পূর্ণ ২৩০ V ভোল্টেজ উপস্থিত।'
        },
        svgType: 'circuit-open'
      }
    ],
    solvedExamples: [
      {
        id: 'ex-open-1',
        problem: {
          en: 'A 230 V AC mains circuit supplies a 46 Ω heater through a control switch. The switch contacts become burned and open-circuited. Calculate: (a) Circuit current I, (b) Voltage drop across heater element, and (c) Voltage measured across open switch terminals.',
          hi: '230 V एसी मुख्य परिपथ नियंत्रण स्विच के माध्यम से 46 Ω हीटर को आपूर्ति करता है। स्विच के संपर्क जलकर ओपन-सर्किट हो जाते हैं। गणना करें: (a) परिपथ धारा I, (b) हीटर पर वोल्टेज ड्रॉप, और (c) खुले स्विच के सिरों पर मापा गया वोल्टेज।',
          bn: 'একটি ২৩০ V ডিসি লাইন সুইচের মাধ্যমে ৪৬ Ω হিটারকে চালিত করে। সুইচের কন্টাক্ট পুড়ে গিয়ে ওপেন সার্কিট তৈরি হলো। নির্ণয় করো: (a) সার্কিট কারেন্ট I, (b) হিটার এলিমেন্টের ভোল্টেজ ড্রপ, এবং (c) খোলা সুইচের আড়াআড়ি ভোল্টেজ।'
        },
        givenValues: {
          'V_source': '230 V',
          'R_heater': '46 Ω',
          'Switch state': 'Open Circuit'
        },
        solution: {
          en: 'Given:\n  V_source = 230 V, R_heater = 46 Ω, Open gap\n\n(a) Circuit Current I:\n  Due to infinite gap resistance R_gap = ∞, I = V / ∞ = 0 Amperes.\n\n(b) Voltage Drop across Heater Element V_heater:\n  V_heater = I × R_heater = 0 A × 46 Ω = 0 Volts.\n\n(c) Voltage across Open Switch Terminals V_gap:\n  By KVL: V_source - V_gap - V_heater = 0\n  230 V - V_gap - 0 V = 0 => V_gap = 230 Volts.',
          hi: 'दिया गया है:\n  V_source = 230 V, R_heater = 46 Ω, खुला गैप\n\n(a) धारा I = 0 A (अनंत गैप प्रतिरोध के कारण)।\n(b) हीटर पर वोल्टेज = 0 A × 46 Ω = 0 V।\n(c) खुले स्विच के पार वोल्टेज = 230 V।',
          bn: 'দেওয়া আছে:\n  V_source = ২৩০ V, R_heater = ৪৬ Ω, বিচ্ছিন্ন পয়েন্ট\n\n(a) সার্কিট কারেন্ট I = ০ A (অসীম গ্যাপের জন্য)।\n(b) হিটারের ভোল্টেজ ড্রপ = ০ A × ৪৬ Ω = ০ V।\n(c) খোলা সুইচের আড়াআড়ি ভোল্টেজ = ২৩০ V।'
        },
        finalAnswer: {
          en: 'Current I = 0 A, Heater Voltage = 0 V, Open Gap Voltage = 230 V',
          hi: 'धारा I = 0 A, हीटर वोल्टेज = 0 V, खुला गैप वोल्टेज = 230 V',
          bn: 'কারেন্ট I = ০ A, হিটার ভোল্টেজ = ০ V, খোলা গ্যাপ ভোল্টেজ = ২৩০ V'
        }
      }
    ],
    practicalApplications: {
      en: [
        'Electrical safety isolation using ON/OFF switches, Emergency Stop pushbuttons, and Isolators.',
        'Overcurrent and short-circuit protection using fuses that melt open during overloads.',
        'Troubleshooting non-functional appliances using digital multimeter Continuity mode (beeper).'
      ],
      hi: [
        'ऑन/ऑफ स्विच, इमरजेंसी स्टॉप पुशबटन और आइसोलेटर का उपयोग करके सुरक्षा आइसोलेशन।',
        'ओवरलोड के दौरान पिघलने वाले फ्यूज का उपयोग करके ओवरकरंट सुरक्षा।',
        'डिजिटल मल्टीमीटर निरन्तरता (Continuity) मोड का उपयोग करके खराबी खोजना।'
      ],
      bn: [
        'অন/অফ সুইচ, এমার্জেন্সি স্টপ বাটন ও আইসোলেটর দিয়ে নিরাপদে বিদ্যুৎ বিচ্ছিন্নকরণ।',
        'ওভারলোডের সময় ফিউজ তার গলে গিয়ে কারেন্ট অফ করার মাধ্যমে নিরাপত্তা সুরক্ষা।',
        'ডিজিটাল মাল্টিমিটারের কন্টিনিউটি মোড (বিপার) দিয়ে নষ্ট যন্ত্রপাতি ট্রাবলশুট করতে।'
      ]
    },
    importantPoints: {
      en: [
        'CRITICAL SAFETY PRINCIPLE: Open circuit means ZERO current ($I = 0$), but FULL source voltage ($V_{gap} = V_{source}$) is present across the gap!',
        'Never touch open switch terminals assuming there is no electrical hazard simply because the lamp is OFF.',
        'Power consumed during an open circuit condition is strictly zero ($P = 0\text{ W}$).'
      ],
      hi: [
        'महत्वपूर्ण सुरक्षा सिद्धांत: ओपन सर्किट का अर्थ शून्य धारा है, लेकिन गैप में पूर्ण स्रोत वोल्टेज मौजूद है!',
        'केवल इसलिए कि लैंप बंद है, खुले स्विच संपर्कों को यह मानकर न छुएं कि कोई खतरा नहीं है।',
        'ओपन सर्किट स्थिति के दौरान खपत की गई शक्ति शून्य (P = 0 W) होती है।'
      ],
      bn: [
        'গুরুত্বপূর্ণ নিরাপত্তা তথ্য: ওপেন সার্কিট মানে কারেন্ট শূন্য, কিন্তু বিচ্ছিন্ন পয়েন্টে পূর্ণ সাপ্লাই ভোল্টেজ থাকে!',
        'বাতি অফ আছে দেখে খালি হাতে খোলা সুইচের কন্টাক্ট স্পর্শ করা অত্যন্ত বিপজ্জনক।',
        'ওপেন সার্কিটে বিদ্যুৎ খরচ পুরোপুরি শূন্য (P = ০ W)।'
      ]
    },
    commonMistakes: {
      en: [
        'Assuming voltage across open switch terminals is zero (DANGEROUS misconception!).',
        'Confusing an open circuit (zero current, infinite resistance) with a short circuit (high current, zero resistance).'
      ],
      hi: [
        'यह मान लेना कि खुले स्विच के सिरों पर वोल्टेज शून्य है (खतरनाक गलतफहमी!)।',
        'ओपन सर्किट (शून्य धारा) को शॉर्ट सर्किट (उच्च धारा) के साथ भ्रमित करना।'
      ],
      bn: [
        'খোলা সুইচের কন্টাক্টের ভোল্টেজ ০ V ভেবে ভুল করা (মারাত্মক বিপজ্জনক ধারণা!)।',
        'ওপেন সার্কিট (শূন্য কারেন্ট) আর শর্ট সার্কিট (উচ্চ কারেন্ট)-এর মাঝে গুলিয়ে ফেলা।'
      ]
    },
    mcqs: [
      {
        id: 'mcq-open-1',
        question: {
          en: 'In an open DC circuit connected to a 12 V battery, what is the electric current flowing through the circuit?',
          hi: '12 V बैटरी से जुड़े एक खुले डीसी परिपथ में प्रवाहित विद्युत धारा क्या है?',
          bn: '১২ V ব্যাটারির সাথে যুক্ত একটি ওপেন ডিসি সার্কিটে প্রবহমান কারেন্টের মান কত?'
        },
        options: [
          { id: 'a', text: { en: '12 A', hi: '12 A', bn: '১২ A' } },
          { id: 'b', text: { en: '0 A', hi: '0 A', bn: '০ A' } },
          { id: 'c', text: { en: 'Infinite Amperes', hi: 'अनंत एम्पीयर', bn: 'অসীম অ্যাম্পিয়ার' } },
          { id: 'd', text: { en: '1 A', hi: '1 A', bn: '১ A' } }
        ],
        correctOptionId: 'b',
        explanation: {
          en: 'An open circuit has infinite resistance, which reduces electric current to zero (I = 0 A).',
          hi: 'एक खुले परिपथ में अनंत प्रतिरोध होता है, जो धारा को शून्य (I = 0 A) कर देता है।',
          bn: 'ওপেন সার্কিটের রেজিস্ট্যান্স অসীম হওয়ায় কারেন্ট শূন্য হয়ে যায় (I = ০ A)।'
        }
      },
      {
        id: 'mcq-open-2',
        question: {
          en: 'If a voltmeter is connected across the contacts of an OPEN light switch connected to a 230 V AC line, what voltage will it display?',
          hi: 'यदि 230 V एसी लाइन से जुड़े एक खुले लाइट स्विच के संपर्कों के पार वोल्टमीटर जोड़ा जाए, तो यह क्या वोल्टेज दर्शाएगा?',
          bn: '২৩০ V লাইনে যুক্ত একটি খোলা সুইচের দুই কন্টাক্টের মাঝে ভোল্টমিটার সংযোগ করলে কত ভোল্টেজ দেখাবে?'
        },
        options: [
          { id: 'a', text: { en: '0 V', hi: '0 V', bn: '০ V' } },
          { id: 'b', text: { en: '115 V', hi: '115 V', bn: '১১৫ V' } },
          { id: 'c', text: { en: '230 V', hi: '230 V', bn: '২৩০ V' } },
          { id: 'd', text: { en: '400 V', hi: '400 V', bn: '৪০০ V' } }
        ],
        correctOptionId: 'c',
        explanation: {
          en: 'By KVL, the full line supply voltage (230 V) appears across an open break because no voltage is dropped across the load.',
          hi: 'KVL के अनुसार, पूरा लाइन आपूर्ति वोल्टेज (230 V) एक खुले ब्रेक के पार दिखाई देता है।',
          bn: 'KVL অনুযায়ী, লোডে কোনো ভোল্টেজ ড্রপ না হওয়ায় পুরো ২৩০ V মূল ভোল্টেজ বিচ্ছিন্ন পয়েন্টে দেখাবে।'
        }
      },
      {
        id: 'mcq-open-3',
        question: {
          en: 'What is the electrical resistance across an ideal open circuit?',
          hi: 'आदर्श खुले परिपथ में विद्युत प्रतिरोध कितना होता है?',
          bn: 'একটি আদর্শ ওপেন সার্কিটের আড়াআড়ি বৈদ্যুতিক রোধ কত?'
        },
        options: [
          { id: 'a', text: { en: 'Zero Ohms (0 Ω)', hi: 'शून्य ओम (0 Ω)', bn: 'শূন্য ওহম (০ Ω)' } },
          { id: 'b', text: { en: 'Infinite Ohms (∞ Ω)', hi: 'अनंत ओम (∞ Ω)', bn: 'অসীম ওহম (∞ Ω)' } },
          { id: 'c', text: { en: '100 Ohms', hi: '100 ओम', bn: '১০০ ওহম' } },
          { id: 'd', text: { en: '1 Ohm', hi: '1 ओम', bn: '১ ওহম' } }
        ],
        correctOptionId: 'b',
        explanation: {
          en: 'An ideal open circuit provides an infinite opposition to current flow (R = ∞ Ω).',
          hi: 'एक आदर्श खुला परिपथ धारा प्रवाह के लिए अनंत बाधा (R = ∞ Ω) प्रदान करता है।',
          bn: 'একটি আদর্শ ওপেন সার্কিট বিদ্যুৎ প্রবাহে অসীম বাধা তৈরি করে (R = ∞ Ω)।'
        }
      }
    ],
    practiceQuestions: [
      {
        id: 'pq-open-1',
        question: {
          en: 'An electrician tests a non-working room light circuit. With the wall switch ON, a voltmeter connected across the ceiling lamp terminals reads 0 V, but reads 230 V when connected across the switch terminals. Locate the fault.',
          hi: 'एक इलेक्ट्रीशियन कमरे की न चलने वाली लाइट का परीक्षण करता है। स्विच ऑन होने पर, छत के लैंप पर वोल्टमीटर 0 V दिखाता है, लेकिन स्विच के पार 230 V दिखाता है। दोष का पता लगाएं।',
          bn: 'এক জন ইলেকট্রিশিয়ান নট-ওয়ার্কিং ঘরের বাতি ট্রাবলশুট করছেন। ওয়াল সুইচ অন রাখা সত্ত্বে বাতির পয়েন্টে ০ V দেখায়, কিন্তু সুইচের দুই প্রান্তে ২৩০ V দেখায়। ত্রুটি কোথায় সনাক্ত করো।'
        },
        hint: {
          en: 'Full voltage across switch terminals means the switch contact itself is OPEN (defective/burned contacts).',
          hi: 'स्विच टर्मिनलों पर पूर्ण वोल्टेज का अर्थ है कि स्विच संपर्क स्वयं खुला (दोषपूर्ण) है।',
          bn: 'সুইচের টার্মিনালে পুরো ২৩০ V থাকার অর্থ হলো সুইচের ভেতরের কন্টাক্ট নষ্ট বা ওপেন হয়ে আছে।'
        },
        answerKey: {
          en: 'The switch is defective/burned internally. Because full 230 V appears across the switch, the open break is inside the switch itself.',
          hi: 'स्विच आंतरिक रूप से दोषपूर्ण/जला हुआ है। क्योंकि स्विच पर पूरा 230 V दिखाई देता है, ओपन ब्रेक स्विच के अंदर ही है।',
          bn: 'সুইচটি ভেতরে পুড়ে নষ্ট বা ওপেন হয়ে গেছে। সুইচের আড়াআড়ি ২৩০ V দেখানোর অর্থ ফল্টটি সুইচের ভেতরে।'
        }
      },
      {
        id: 'pq-open-2',
        question: {
          en: 'State three common physical causes of unintentional open circuits in industrial control wiring.',
          hi: 'औद्योगिक नियंत्रण वायरिंग में अनजाने में हुए ओपन सर्किट के तीन सामान्य भौतिक कारणों का उल्लेख करें।',
          bn: 'শিল্পকারখানার কন্ট্রোল ওয়্যারিংয়ে অনিচ্ছাকৃত ওপেন সার্কিট ঘটার তিনটি সাধারণ কারণ লেখো।'
        },
        hint: {
          en: 'Think about cable mechanical damage, thermal stress, and loose terminal screw connections.',
          hi: 'केबल यांत्रिक क्षति, तापीय तनाव और ढीले स्क्रू कनेक्शन के बारे में सोचें।',
          bn: 'তার ছিঁড়ে যাওয়া, ফিউজ পুড়ে যাওয়া এবং টার্মিনাল স্ক্রু আলগা হওয়ার কথা চিন্তা করো।'
        },
        answerKey: {
          en: '1. Severed or mechanically snapped conductor wire.\n2. Blown fuse wire due to previous temporary overload.\n3. Loose or corroded screw terminal connections causing high-resistance open contact.',
          hi: '1. टूटा हुआ या यांत्रिक रूप से कटा हुआ तार।\n2. पूर्व ओवरलोड के कारण उड़ा हुआ फ्यूज।\n3. ढीले या जंग लगे स्क्रू टर्मिनल कनेक्शन।',
          bn: '১. তার ছিঁড়ে যাওয়া বা মেকানিক্যাল ক্ষতিগ্রস্ত হওয়া।\n২. সাময়িক ওভারলোডের কারণে ফিউজ তার গলে পুড়ে যাওয়া।\n৩. টার্মিনাল স্ক্রু আলগা বা মরচে পড়ে সংযোগ বিচ্ছিন্ন হওয়া।'
        }
      }
    ]
  },

  'tp-short-circuit': {
    id: 'lsn-short-circuit',
    topicId: 'tp-short-circuit',
    order: 9,
    title: {
      en: 'Short Circuit Dynamics & Fault Protection',
      hi: 'लघु परिपथ (शॉर्ट सर्किट) एवं दोष सुरक्षा',
      bn: 'শর্ট সার্কিট এবং ফল্ট নিরাপত্তা'
    },
    easyExplanation: {
      en: 'A short circuit happens when electric current finds an unintended zero-resistance shortcut bypassing the load. Current surges to dangerous levels instantly, generating severe heat, sparks, and fire risk unless cleared by a fuse or MCB.',
      hi: 'शॉर्ट सर्किट तब होता है जब विद्युत धारा को लोड को दरकिनार करते हुए एक अनपेक्षित शून्य-प्रतिरोध शॉर्टकट मिल जाता है। धारा तुरंत खतरनाक स्तर तक बढ़ जाती है, जिससे तेज गर्मी, चिंगारी और आग का खतरा पैदा होता है।',
      bn: 'শর্ট সার্কিট ঘটে যখন কারেন্ট মূল লোডকে পাশ কাটিয়ে একটি অনিচ্ছাকৃত শূন্য-রেজিস্ট্যান্সের শর্টকাট পথ পায়। এর ফলে নিমেষেই প্রচণ্ড কারেন্ট বাড়ে, যা অতিরিক্ত তাপ, স্পার্ক এবং বৈদ্যুতিক আগুনের ঝুঁকি তৈরি করে।'
    },
    detailedExplanation: {
      en: 'A short circuit is an accidental low-impedance connection between two nodes of different potential (e.g., Live to Neutral or Phase to Earth). In an ideal short circuit, fault resistance drops to near zero (R_short → 0 Ω). By Ohm’s Law (I = V / R), current surges to extremely high values limited only by source internal impedance, transformer impedance, and conductor wire resistance. In practical power distribution systems, short-circuit fault currents can reach thousands of Amperes (e.g., 6,000 A to 10,000 A). Voltage across the shorted load section drops to nearly zero volts (V_shorted ≈ 0 V). Protective devices like fast-acting fuses and Miniature Circuit Breakers (MCBs with magnetic trip coils) must isolate short circuits within 10 to 20 milliseconds to prevent cable insulation fire.',
      hi: 'शॉर्ट सर्किट विभिन्न विभवों के दो नोड्स के बीच एक अनपेक्षित निम्न-प्रतिबाधा कनेक्शन है (जैसे, लाइव से न्यूट्रल या फेज से अर्थ)। आदर्श शॉर्ट सर्किट में, दोष प्रतिरोध लगभग शून्य (R_short → 0 Ω) हो जाता है। ओम के नियम (I = V / R) से, धारा बहुत उच्च मानों तक बढ़ जाती है। व्यावहारिक प्रणालियों में, शॉर्ट-सर्किट धारा हजारों एम्पीयर तक पहुंच सकती है। शॉर्टेड लोड अनुभाग पर वोल्टेज शून्य हो जाता है। फ्यूज और एमसीबी को आग को रोकने के लिए 10-20 मिलीसेकंड में फॉल्ट को अलग करना होगा।',
      bn: 'শর্ট সার্কিট হলো বিভিন্ন বিভবের দুটি তারের মধ্যে (যেমন লাইভ ও নিউট্রাল) সংযোগ ঘটা একটি নিম্ন-ইম্পিডেন্সের ফল্ট। আদর্শ শর্ট সার্কিটে ফল্ট রেজিস্ট্যান্স প্রায় শূন্যে নেমে আসে (R_short → ০ Ω)। ওহমের সূত্রানুসারে (I = V / R), কারেন্ট প্রচণ্ড বেড়ে যায় যা কেবল ক্যাবল ও সোর্স ইম্পিডেন্স দ্বারা সীমাবদ্ধ থাকে। বাসাবাড়ি ও কারখানায় শর্ট-সার্কিট কারেন্ট কয়েক হাজার অ্যাম্পিয়ার (যেমন ৬,০০০ A থেকে ১০,০০০ A) হতে পারে। লোডের আড়াআড়ি ভোল্টেজ শূন্য হয়ে যায়। ক্যাবলের আগুন রোধে ফিউজ বা এমসিবি (MCB)-কে ১০-২০ মিলি-সেকেন্ডের মধ্যে সংযোগ বিচ্ছিন্ন করতে হয়।'
    },
    formulas: [
      {
        symbol: 'R_short',
        expression: 'R_short ≈ 0 Ω (Near Zero Resistance)',
        description: {
          en: 'Resistance of an unintended fault path',
          hi: 'अनपेक्षित फॉल्ट पथ का प्रतिरोध',
          bn: 'অনিচ্ছাকৃত ফল্ট পথের নগণ্য রোধ'
        }
      },
      {
        symbol: 'I_fault',
        expression: 'I_fault = V_source / (R_source + R_cable)',
        description: {
          en: 'Short-circuit fault current limited by source and cable impedance',
          hi: 'स्रोत और केबल प्रतिबाधा द्वारा सीमित शॉर्ट-सर्किट फॉल्ट धारा',
          bn: 'সোর্স ও ক্যাবল ইম্পিডেন্স দ্বারা সীমিত শর্ট-সার্কিট ফল্ট কারেন্ট'
        }
      },
      {
        symbol: 'V_shorted',
        expression: 'V_shorted ≈ 0 V',
        description: {
          en: 'Near zero voltage drop across shorted component terminals.',
          hi: 'शॉर्ट किए गए घटक टर्मिनलों पर लगभग शून्य वोल्टेज ड्रॉप।',
          bn: 'শর্ট হওয়া উপাদানের টার্মিনালে প্রায় শূন্য ভোল্টেজ।'
        }
      }
    ],
    diagrams: [
      {
        id: 'diag-short-circuit',
        title: {
          en: 'Short Circuit Schematic showing Live-to-Neutral Fault & MCB Tripping',
          hi: 'शॉर्ट सर्किट आरेख (लाइव-टू-न्यूट्रल फॉल्ट और एमसीबी ट्रिपिंग के साथ)',
          bn: 'শর্ট সার্কিট ডায়াগ্রাম (লাইভ-টু-নিউট্রাল ফল্ট ও এমসিবি ট্রিপিং সহ)'
        },
        caption: {
          en: 'Direct Live-to-Neutral short bypasses load R; surge current I_fault triggers magnetic trip coil in MCB.',
          hi: 'प्रत्यक्ष लाइव-टू-न्यूट्रल शॉर्ट लोड R को बायपास करता है; सर्ज करंट एमसीबी में मैग्नेटिक ट्रिप कॉइल को ट्रिप करता है।',
          bn: 'সরাসরি লাইভ-টু-নিউট্রাল শর্ট লোড R-কে বাইপাস করে; হাই কারেন্ট এমসিবির ম্যাগনেটিক ট্রিপ কয়েলকে ট্রিপ করায়।'
        },
        svgType: 'circuit-short'
      }
    ],
    solvedExamples: [
      {
        id: 'ex-short-1',
        problem: {
          en: 'A 230 V single-phase domestic outlet experiences a direct short circuit between Phase and Neutral wires through a damaged extension cord having a loop resistance of 0.23 Ω. Calculate: (a) Short-circuit fault current I_fault, and (b) Instantaneous power dissipation at the fault point before protection trips.',
          hi: '230 V सिंगल-फेज घरेलू आउटलेट में 0.23 Ω लूप प्रतिरोध वाले क्षतिग्रस्त एक्सटेंशन कॉर्ड के माध्यम से फेज और न्यूट्रल तारों के बीच सीधा शॉर्ट सर्किट होता है। गणना करें: (a) शॉर्ट-सर्किट फॉल्ट धारा I_fault, और (b) तात्क्षणिक शक्ति क्षय।',
          bn: 'একটি ২৩০ V সিঙ্গেল-ফেজ লাইনে ০.২৩ Ω লুপ রেজিস্ট্যান্সের একটি ক্ষতিগ্রস্ত তারের মাধ্যমে ফেজ ও নিউট্রালের মাঝে সরাসরি শর্ট সার্কিট হলো। নির্ণয় করো: (a) শর্ট-সার্কিট ফল্ট কারেন্ট I_fault, এবং (b) এমসিবি ট্রিপ করার আগের মুহূর্তের তাৎক্ষণিক পাওয়ার।'
        },
        givenValues: {
          'V_mains': '230 V',
          'R_cable_loop': '0.23 Ω'
        },
        solution: {
          en: 'Given:\n  V_mains = 230 V, R_cable_loop = 0.23 Ω\n\n(a) Short-Circuit Fault Current I_fault:\n  I_fault = V_mains / R_cable_loop\n  I_fault = 230 V / 0.23 Ω = 1000 Amperes (1 kA).\n\n(b) Instantaneous Power Dissipation P_fault:\n  P_fault = V_mains × I_fault\n  P_fault = 230 V × 1000 A = 230,000 Watts = 230 kW.\n\nConclusion:\n  This massive 1,000 A current instantaneously triggers the electromagnetic trip mechanism of a 16 A Type-B MCB within 10 milliseconds.',
          hi: 'दिया गया है:\n  V_mains = 230 V, R = 0.23 Ω\n\n(a) फॉल्ट धारा I_fault = 230 V / 0.23 Ω = 1000 A (1 kA)।\n(b) शक्ति क्षय = 230 V × 1000 A = 230 kW।\n\nनिष्कर्ष:\n  यह 1000 A धारा 16 A टाइप-बी एमसीबी को 10 मिलीसेकंड में ट्रिप कर देती है।',
          bn: 'দেওয়া আছে:\n  V_mains = ২৩০ V, R = ০.২৩ Ω\n\n(a) ফল্ট কারেন্ট I_fault = ২৩০ V / ০.২৩ Ω = ১০০০ A (১ kA)।\n(b) পাওয়ার ক্ষয় = ২৩০ V × ১০০০ A = ২৩০ kW।\n\nসিদ্ধান্ত:\n  এই প্রকাণ্ড ১০০০ A কারেন্ট ১৬ A টাইপ-বি এমসিবি-কে ১০ মিলি-সেকেন্ডের মধ্যে ট্রিপ করায়।'
        },
        finalAnswer: {
          en: 'Fault Current I_fault = 1000 A (1 kA), Instantaneous Fault Power = 230 kW',
          hi: 'फॉल्ट धारा I_fault = 1000 A (1 kA), तात्क्षणिक शक्ति = 230 kW',
          bn: 'ফল্ট কারেন্ট I_fault = ১০০০ A (১ kA), তাৎক্ষণিক পাওয়ার = ২৩০ kW'
        }
      }
    ],
    practicalApplications: {
      en: [
        'Installing Miniature Circuit Breakers (MCBs) with high Breaking Capacities (e.g., 6 kA / 10 kA ratings) in main distribution boards.',
        'Selecting fast-blow HRC (High Rupturing Capacity) fuses for semiconductor protection.',
        'Earth Leakage and Residual Current Circuit Breakers (RCCB/GFCI) for human shock protection.'
      ],
      hi: [
        'मुख्य वितरण बोर्डों में उच्च ब्रेकिंग क्षमताओं (उदा. 6 kA / 10 kA) के साथ एमसीबी स्थापित करना।',
        'सेमीकंडक्टर सुरक्षा के लिए फास्ट-ब्लो एचआरसी फ्यूज का चयन करना।',
        'मानव बिजली के झटके से सुरक्षा के लिए आरसीसीबी/जीएफसीआई लगाना।'
      ],
      bn: [
        'মেইন ডিস্ট্রিবিউশন বোর্ডে হাই ব্রেকিং ক্যাপাসিটির (যেমন ৬ kA / ১০ kA) এমসিবি স্থাপন।',
        'সেমিকন্ডাক্টর সুরক্ষায় অতি দ্রুত রেসপন্সকারী এইচআরসি (HRC) ফিউজ ব্যবহার।',
        'শক ও শর্ট সার্কিট সুরক্ষায় আরসিসিবি (RCCB) বা গ্রাউন্ড ফল্ট ইন্টারাপ্টার ব্যবহার।'
      ]
    },
    importantPoints: {
      en: [
        'A short circuit causes MAXIMUM CURRENT flow and NEAR-ZERO VOLTAGE across the shorted section.',
        'Practical short-circuit current is NOT literally infinite; it is limited by transformer impedance and copper wire resistance.',
        'Fuses and MCBs clear short circuits magnetically in less than 20 milliseconds to prevent wire insulation fires.'
      ],
      hi: [
        'शॉर्ट सर्किट के कारण अत्यधिक धारा प्रवाह और शॉर्ट किए गए हिस्से पर लगभग शून्य वोल्टेज होता है।',
        'व्यावहारिक शॉर्ट-सर्किट धारा अनंत नहीं होती है; यह केबल प्रतिरोध द्वारा सीमित होती है।',
        'फ्यूज और एमसीबी केबल आग को रोकने के लिए 20 मिलीसेकंड से कम समय में ट्रिप होते हैं।'
      ],
      bn: [
        'শর্ট সার্কিটের ফলে প্রকাণ্ড উচ্চ কারেন্ট প্রবাহিত হয় এবং শর্ট হওয়া অংশে প্রায় শূন্য ভোল্টেজ থাকে।',
        'বাস্তব শর্ট-সার্কিট কারেন্ট অসীম নয়; এটি তারের ও সোর্সের বাধা দ্বারা সীমিত থাকে।',
        'আগুন লাগা রোধে ফিউজ ও এমসিবি ২০ মিলি-সেকেন্ডের কম সময়ে ফল্ট ডিসকানেক্ট করে।'
      ]
    },
    commonMistakes: {
      en: [
        'Thinking that short-circuit current is literally infinite in real practical networks.',
        'Confusing short circuit (maximum current, zero load voltage) with open circuit (zero current, maximum gap voltage).'
      ],
      hi: [
        'यह सोचना कि वास्तविक नेटवर्क में शॉर्ट-सर्किट धारा वास्तव में अनंत होती है।',
        'शॉर्ट सर्किट (अधिकतम धारा) को ओपन सर्किट (शून्य धारा) के साथ भ्रमित करना।'
      ],
      bn: [
        'বাস্তব সার্কিটে শর্ট-সার্কিট কারেন্ট পুরোপুরি অসীম ভেবে ভুল হিসাব করা।',
        'শর্ট সার্কিট (সর্বোচ্চ কারেন্ট, শূন্য ভোল্টেজ) এবং ওপেন সার্কিট (শূন্য কারেন্ট, পূর্ণ ভোল্টেজ) দুটিকে গুলিয়ে ফেলা।'
      ]
    },
    mcqs: [
      {
        id: 'mcq-short-1',
        question: {
          en: 'In a short-circuited component, what is the ideal voltage across its terminals?',
          hi: 'शॉर्ट-सर्किट घटक में, इसके टर्मिनलों के पार आदर्श वोल्टेज क्या होता है?',
          bn: 'একটি শর্ট-সার্কিট উপাদানের টার্মিনালে আদর্শ ভোল্টেজ কত?'
        },
        options: [
          { id: 'a', text: { en: 'Full supply voltage', hi: 'पूर्ण आपूर्ति वोल्टेज', bn: 'পূর্ণ সাপ্লাই ভোল্টেজ' } },
          { id: 'b', text: { en: 'Zero Volts (0 V)', hi: 'शून्य वोल्ट (0 V)', bn: 'শূন্য ভোল্ট (০ V)' } },
          { id: 'c', text: { en: 'Half supply voltage', hi: 'आधा आपूर्ति वोल्टेज', bn: 'অর্ধেক সাপ্লাই ভোল্টেজ' } },
          { id: 'd', text: { en: 'Double supply voltage', hi: 'दोगुना आपूर्ति वोल्टेज', bn: 'দ্বিগুণ সাপ্লাই ভোল্টেজ' } }
        ],
        correctOptionId: 'b',
        explanation: {
          en: 'Because short-circuit resistance R ≈ 0 Ω, voltage drop across a shorted component V = I × 0 = 0 Volts.',
          hi: 'क्योंकि शॉर्ट-सर्किट प्रतिरोध R ≈ 0 Ω, शॉर्ट किए गए घटक पर वोल्टेज V = I × 0 = 0 V होता है।',
          bn: 'যেহেতু শর্ট-সার্কিট রোধ R ≈ ০ Ω, তাই ভোল্টেজ ড্রপ V = I × ০ = ০ V।'
        }
      },
      {
        id: 'mcq-short-2',
        question: {
          en: 'What limits the maximum short-circuit fault current in a real practical domestic installation?',
          hi: 'वास्तविक घरेलू संस्थापन में अधिकतम शॉर्ट-सर्किट फॉल्ट धारा को क्या सीमित करता है?',
          bn: 'একটি বাস্তব বাসাবাড়ির ওয়্যারিংয়ে সর্বোচ্চ শর্ট-সার্কিট ফল্ট কারেন্টকে কোনটি সীমিত রাখে?'
        },
        options: [
          { id: 'a', text: { en: 'The wattage of house light bulbs', hi: 'घर के बल्बों की वाट क्षमता', bn: 'বাতির ওয়াট ক্ষমতা' } },
          { id: 'b', text: { en: 'Source internal impedance and copper conductor line resistance', hi: 'स्रोत आंतरिक प्रतिबाधा और तांबे के चालक का प्रतिरोध', bn: 'উৎসের অভ্যন্তরীণ বাধা এবং তামার তারের রেজিস্ট্যান্স' } },
          { id: 'c', text: { en: 'The wall switch insulation', hi: 'दीवार स्विच इन्सुलेशन', bn: 'সুইচের ইনসুলেশন' } },
          { id: 'd', text: { en: 'Electricity meter display', hi: 'बिजली मीटर डिस्प्ले', bn: 'বিদ্যুৎ মিটারের ডিসপ্লে' } }
        ],
        correctOptionId: 'b',
        explanation: {
          en: 'Real fault current is finite because it is limited by distribution transformer impedance and cable loop resistance.',
          hi: 'वास्तविक फॉल्ट धारा सीमित होती है क्योंकि यह ट्रांसफार्मर प्रतिबाधा और केबल प्रतिरोध द्वारा सीमित होती है।',
          bn: 'বাস্তব ফল্ট কারেন্ট সীমাবদ্ধ থাকে কারণ এটি ট্রান্সফরমার ইম্পিডেন্স ও ক্যাবলের রেজিস্ট্যান্স দ্বারা বাধা প্রাপ্ত হয়।'
        }
      },
      {
        id: 'mcq-short-3',
        question: {
          en: 'Which protective device automatically trips during a short circuit using electromagnetic coil attraction?',
          hi: 'इलेक्ट्रोमैग्नेटिक कॉइल आकर्षण का उपयोग करके शॉर्ट सर्किट के दौरान कौन सा सुरक्षा उपकरण स्वचालित रूप से ट्रिप होता है?',
          bn: 'ইলেক্ট্রোম্যাগনেটিক কয়েল আকর্ষণের মাধ্যমে শর্ট সার্কিটের সময় কোনটি স্বয়ংক্রিয়ভাবে ট্রিপ করে?'
        },
        options: [
          { id: 'a', text: { en: 'Miniature Circuit Breaker (MCB)', hi: 'मिनीचर सर्किट ब्रेकर (MCB)', bn: 'মিনিয়েচার সার্কিট ব্রেকার (MCB)' } },
          { id: 'b', text: { en: 'Rheostat', hi: 'रियोस्टेट', bn: 'রিওস্ট্যাট' } },
          { id: 'c', text: { en: 'Step-up Transformer', hi: 'स्टेप-अप ट्रांसफार्मर', bn: 'স্টেপ-আপ ট্রান্সফরমার' } },
          { id: 'd', text: { en: 'Capacitor', hi: 'कैपेसिटर', bn: 'ক্যাপাসিটর' } }
        ],
        correctOptionId: 'a',
        explanation: {
          en: 'MCBs feature a magnetic solenoid coil that instantaneously trips the mechanical latch when high short-circuit current flows.',
          hi: 'एमसीबी में एक चुंबकीय सोलेनोइड कॉइल होती है जो उच्च शॉर्ट-सर्किट धारा बहने पर तुरंत ट्रिप होती है।',
          bn: 'MCB-তে একটি চৌম্বক সোলেনয়েড কয়েল থাকে যা শর্ট-সার্কিটের প্রচণ্ড কারেন্টে নিমেষে সার্কিট ট্রিপ করায়।'
        }
      }
    ],
    practiceQuestions: [
      {
        id: 'pq-short-1',
        question: {
          en: 'A 230 V line is protected by a 16 A MCB with a breaking capacity of 6 kA (6000 A). If a short circuit occurs with a fault loop resistance of 0.05 Ω, determine: (a) Fault current I_fault, and (b) Whether the MCB can safely clear this fault.',
          hi: 'एक 230 V लाइन 6 kA (6000 A) ब्रेकिंग क्षमता वाले 16 A MCB द्वारा सुरक्षित है। यदि 0.05 Ω के फॉल्ट लूप प्रतिरोध के साथ शॉर्ट सर्किट होता है, तो ज्ञात करें: (a) फॉल्ट धारा, और (b) क्या MCB सुरक्षित रूप से इसे ट्रिप कर सकता है।',
          bn: '২৩০ V-এর একটি লাইন ৬ kA (৬০০০ A) ব্রেকিং ক্যাপাসিটির ১৬ A MCB দ্বারা সুরক্ষিত। ০.০৫ Ω লুপ রেজিস্ট্যান্সে শর্ট সার্কিট হলে নির্ণয় করো: (a) ফল্ট কারেন্ট, এবং (b) MCB-টি নিরাপদে ফল্ট ট্রিপ করতে পারবে কিনা।'
        },
        hint: {
          en: 'I_fault = V / R. Compare I_fault with MCB breaking capacity rating of 6000 A.',
          hi: 'I_fault = V / R। I_fault की तुलना 6000 A से करें।',
          bn: 'I_fault = V / R। I_fault-এর সাথে ৬০০০ A-এর তুলনা করো।'
        },
        answerKey: {
          en: '(a) I_fault = 230 V / 0.05 Ω = 4,600 A (4.6 kA).\n(b) YES. Since 4.6 kA is LESS than the 6.0 kA breaking capacity rating, the MCB will safely clear the fault without exploding.',
          hi: '(a) I_fault = 4600 A (4.6 kA)।\n(b) हां, क्योंकि 4.6 kA MCB की 6.0 kA क्षमता से कम है, यह सुरक्षित रूप से ट्रिप होगा।',
          bn: '(a) I_fault = ৪৬০০ A (৪.৬ kA)।\n(b) হ্যাঁ। যেহেতু ৪.৬ kA ব্রেকিং ক্ষমতা ৬.০ kA-এর চেয়ে কম, তাই MCB-টি নিরাপদে ফল্ট ট্রিপ করবে।'
        }
      },
      {
        id: 'pq-short-2',
        question: {
          en: 'List four major causes of short circuits in residential and commercial buildings.',
          hi: 'आवासीय और वाणिज्यिक भवनों में शॉर्ट सर्किट के चार प्रमुख कारणों की सूची बनाएं।',
          bn: 'বাসাবাড়ি ও বাণিজ্যিক ভবনে শর্ট সার্কিট ঘটার চারটি প্রধান কারণ লেখো।'
        },
        hint: {
          en: 'Think about insulation aging, moisture/water ingress, rodent cable damage, and loose strands touching opposite conductors.',
          hi: 'इन्सुलेशन पुराना होना, नमी/पानी का प्रवेश, चूहों द्वारा केबल काटना और ढीले तार टच होने के बारे में सोचें।',
          bn: 'ইনসুলেশন পুরানো হওয়া, পানি প্রবেশ, ইঁদুরে তার কাটা এবং আলগা তার স্পর্শ হওয়ার কথা মনে করো।'
        },
        answerKey: {
          en: '1. Aged or overheated wire insulation breakdown.\n2. Rodent bites stripping cable insulation inside conduits.\n3. Water or high humidity entering switch sockets or junction boxes.\n4. Stray wire strands shorting Live and Neutral screw terminals.',
          hi: '1. पुराना या अधिक गर्म होकर इन्सुलेशन खराब होना।\n2. चूहों द्वारा केबल इन्सुलेशन काटना।\n3. स्विच सॉकेट में पानी प्रवेश करना।\n4. ढीले तारों का लाइव और न्यूट्रल टर्मिनलों को छूना।',
          bn: '১. অতিরিক্ত তাপে তারের ইনসুলেশন গলে বা নষ্ট হয়ে যাওয়া।\n২. ইঁদুর তারের ইনসুলেশন কেটে ফে ফেলা।\n৩. সুইচ বোর্ডে পানি বা আর্দ্রতা প্রবেশ করা।\n৪. আলগা তারের কবা কন্ডাক্টর কন্টাক্ট লাইভ ও নিউট্রাল একসাথে স্পর্শ করা।'
        }
      }
    ]
  },

  'tp-practical-apps': {
    id: 'lsn-practical-apps',
    topicId: 'tp-practical-apps',
    order: 10,
    title: {
      en: 'Practical Circuit Design & Troubleshooting Case Studies',
      hi: 'व्यावहारिक परिपथ डिज़ाइन एवं ट्रबलशूटिंग केस स्टडीज़',
      bn: 'ব্যবহারিক সার্কিট ডিজাইন ও ট্রাবলশুটিং কেস স্টাডি'
    },
    easyExplanation: {
      en: 'This practical lesson connects circuit theory to real-world electrical work: calculating house wiring voltage drop, sizing current-limiting resistors for LEDs, configuring series-parallel battery banks, and systematically diagnosing faults using multimeters.',
      hi: 'यह व्यावहारिक पाठ परिपथ सिद्धांत को वास्तविक विद्युत कार्य से जोड़ता है: घर की वायरिंग वोल्टेज ड्रॉप की गणना, एलईडी के लिए धारा-सीमित प्रतिरोधक का आकार, सीरीज-पैरेलल बैटरी बैंक, और मल्टीमीटर का उपयोग करके ट्रबलशूटिंग।',
      bn: 'এই ব্যবহারিক পাঠে থিওরিকে বাস্তব কাজের সাথে মেলানো হয়েছে: ঘরবাড়ির ওয়্যারিংয়ে ভোল্টেজ ড্রপ বের করা, এলইডি রেজিস্ট্যান্স নির্ণয়, সিরিজে-প্যারালালে ব্যাটারি ব্যাংক তৈরি এবং মাল্টিমিটার দিয়ে ফল্ট ট্রাবলশুটিং করা।'
    },
    detailedExplanation: {
      en: 'Professional electrical design relies on strict adherence to standards. In building wiring, maximum allowable cable voltage drop is capped at 3% for power loads and 5% for lighting loads per electrical codes: V_drop = I × R_cable. For LED indicators, a series resistor R_limit = (V_supply - V_LED) / I_LED is mandatory to prevent thermal runaway. In battery energy storage systems, series connection increases voltage (V_total = V₁ + V₂), while parallel connection increases Ampere-hour capacity (Ah_total = Ah₁ + Ah₂). Systematic troubleshooting requires structured voltage measurements across nodes and continuity checks on de-energized circuits.',
      hi: 'पेशेवर विद्युत डिज़ाइन मानकों के पालन पर निर्भर करता है। बिल्डिंग वायरिंग में, अधिकतम केबल वोल्टेज ड्रॉप पावर लोड के लिए 3% और लाइटिंग लोड के लिए 5% तक सीमित है: V_drop = I × R_cable। एलईडी के लिए, R_limit = (V_supply - V_LED) / I_LED अनिवार्य है। बैटरी स्टोरेज में, सीरीज कनेक्शन वोल्टेज बढ़ाता है, जबकि पैरेलल कनेक्शन एम्पीयर-अवर (Ah) क्षमता बढ़ाता है। ट्रबलशूटिंग के लिए व्यवस्थित माप की आवश्यकता होती है।',
      bn: 'পেশাদার বৈদ্যুতিক ডিজাইনে স্ট্যান্ডার্ড মানতে হয়। ভবন ওয়্যারিংয়ে সর্বোচ্চ ক্যাবল ভোল্টেজ ড্রপ পাওয়ার লোডে ৩% এবং লাইটিং লোডে ৫%-এর নিচে রাখতে হয়: V_drop = I × R_cable। এলইডি-র সুরক্ষায় সিরিজ রেজিস্টর R_limit = (V_supply - V_LED) / I_LED আবশ্যক। ব্যাটারি ব্যাংকে সিরিজে যুক্ত করলে ভোল্টেজ বাড়ে (V_total = V₁ + V₂), আর প্যারালালে যুক্ত করলে অ্যাম্পিয়ার-আওয়ার (Ah) ক্যাপাসিটি বাড়ে। মাল্টিমিটার দিয়ে ধাপে ধাপে ফল্ট ট্রাবলশুট করা হয়।'
    },
    formulas: [
      {
        symbol: 'R_limit (LED)',
        expression: 'R_limit = (V_supply - V_LED) / I_LED',
        description: {
          en: 'Current limiting resistor formula for LED protection',
          hi: 'एलईडी सुरक्षा के लिए धारा सीमित करने वाला प्रतिरोधक सूत्र',
          bn: 'এলইডি সুরক্ষায় কারেন্ট লিমিটিং রেজিস্টর সূত্র'
        }
      },
      {
        symbol: 'V_drop',
        expression: 'V_drop = I_load × R_cable_loop',
        description: {
          en: 'Cable voltage drop in feeder lines',
          hi: 'फीडर लाइनों में केबल वोल्टेज ड्रॉप',
          bn: 'ফিডার ক্যাবলে ভোল্টেজ ড্রপ'
        }
      },
      {
        symbol: '% V_drop',
        expression: '% V_drop = (V_drop / V_source) × 100%',
        description: {
          en: 'Percentage voltage drop (must be ≤ 3% for power loads)',
          hi: 'प्रतिशत वोल्टेज ड्रॉप (पावर लोड के लिए ≤ 3% होना चाहिए)',
          bn: 'শতকরা ভোল্টেজ ড্রপ (পাওয়ার লোডে ≤ ৩% হওয়া আবশ্যক)'
        }
      }
    ],
    diagrams: [
      {
        id: 'diag-practical-apps',
        title: {
          en: 'Practical Circuit Applications: LED Limiter & Battery Bank Schematics',
          hi: 'व्यावहारिक परिपथ अनुप्रयोग: एलईडी लिमिटर और बैटरी बैंक',
          bn: 'ব্যবহারিক সার্কিট প্রয়োগ: এলইডি লিমিটার ও ব্যাটারি ব্যাংক চিত্র'
        },
        caption: {
          en: 'Top: LED indicator with series resistor R_limit across 12 V DC. Bottom: 2×2 Series-Parallel 12V 100Ah Battery Bank giving 24V 200Ah.',
          hi: 'ऊपर: 12 V डीसी पर सीरीज प्रतिरोधक R_limit के साथ एलईडी। नीचे: 24V 200Ah देने वाला 2x2 सीरीज-पैरेलल बैटरी बैंक।',
          bn: 'উপরে: ১২ V ডিসিতে সিরিজ রেজিস্টর R_limit সহ এলইডি। নিচে: ২৪V ২০০Ah প্রদানকারী ২x২ সিরিজ-প্যারালাল ব্যাটারি ব্যাংক।'
        },
        svgType: 'circuit-practical'
      }
    ],
    solvedExamples: [
      {
        id: 'ex-practical-1',
        problem: {
          en: 'Case Study 1 (Cable Voltage Drop): A 230 V single-phase induction motor drawing 20 A is installed 50 meters away from the main panel using a cable with a total loop resistance of 0.15 Ω. Calculate: (a) Cable voltage drop V_drop, (b) Voltage received at motor terminals, and (c) Percentage voltage drop (verify if within 3% standard).',
          hi: 'केस स्टडी 1: 230 V सिंगल-फेज मोटर 20 A धारा लेती है और 0.15 Ω लूप प्रतिरोध वाले केबल द्वारा 50 मीटर दूर जुड़ी है। गणना करें: (a) केबल वोल्टेज ड्रॉप, (b) मोटर पर प्राप्त वोल्टेज, और (c) प्रतिशत वोल्टेज ड्रॉप (3% मानक की जांच करें)।',
          bn: 'কেস স্টাডি ১ (ক্যাবল ভোল্টেজ ড্রপ): একটি ২৩০ V সিঙ্গেল-ফেজ মোটর ২০ A কারেন্ট নেয় এবং ০.১৫ Ω লুপ রেজিস্ট্যান্সের তার দিয়ে ৫০ মিটার দূরে কানেক্টেড। নির্ণয় করো: (a) ক্যাবল ভোল্টেজ ড্রপ, (b) মোটরে প্রাপ্ত ভোল্টেজ, এবং (c) শতকরা ভোল্টেজ ড্রপ (৩% সীমার মধ্যে আছে কিনা মিলিয়ে নাও)।'
        },
        givenValues: {
          'V_source': '230 V',
          'I_motor': '20 A',
          'R_loop': '0.15 Ω'
        },
        solution: {
          en: 'Given:\n  V_source = 230 V, I_motor = 20 A, R_loop = 0.15 Ω\n\n(a) Cable Voltage Drop V_drop:\n  V_drop = I_motor × R_loop\n  V_drop = 20 A × 0.15 Ω = 3.0 Volts.\n\n(b) Motor Terminal Voltage V_motor:\n  V_motor = V_source - V_drop\n  V_motor = 230 V - 3.0 V = 227.0 Volts.\n\n(c) Percentage Voltage Drop % V_drop:\n  % V_drop = (V_drop / V_source) × 100%\n  % V_drop = (3.0 V / 230 V) × 100% = 1.30%.\n\nCompliance Verification:\n  Since 1.30% is LESS than the maximum 3.0% threshold, the installation passes Indian Electricity Rules & NEC standards.',
          hi: 'दिया गया है:\n  V_source = 230 V, I = 20 A, R = 0.15 Ω\n\n(a) केबल वोल्टेज ड्रॉप = 20 A × 0.15 Ω = 3.0 V।\n(b) मोटर वोल्टेज = 230 V - 3.0 V = 227.0 V।\n(c) प्रतिशत ड्रॉप = (3.0 / 230) × 100% = 1.30%।\n\nसत्यापन: 1.30% अधिकतम 3% सीमा से कम है (मानक उत्तीर्ण)।',
          bn: 'দেওয়া আছে:\n  V_source = ২৩০ V, I = ২০ A, R = ০.১৫ Ω\n\n(a) ক্যাবল ভোল্টেজ ড্রপ = ২০ A × ০.১৫ Ω = ৩.০ V।\n(b) মোটরের টার্মিনাল ভোল্টেজ = ২৩০ V - ৩.০ V = ২২৭.০ V।\n(c) শতকরা ভোল্টেজ ড্রপ = (৩.০ / ২৩০) × ১০০% = ১.৩০%।\n\nযাচাই:\n  ১.৩০% সর্বোচ্চ ৩.০% সীমার মধ্যে রয়েছে (ডিজাইনটি মানসম্পন্ন ও সফল)।'
        },
        finalAnswer: {
          en: 'V_drop = 3.0 V, Terminal Voltage = 227.0 V, % Drop = 1.30% (ACCEPTABLE - Within 3% limit)',
          hi: 'V_drop = 3.0 V, मोटर वोल्टेज = 227.0 V, % ड्रॉप = 1.30% (स्वीकार्य - 3% सीमा के भीतर)',
          bn: 'V_drop = ৩.০ V, মোটরের ভোল্টেজ = ২২৭.০ V, % ড্রপ = ১.৩০% (গ্রহণযোগ্য - ৩% সীমার মধ্যে)'
        }
      }
    ],
    practicalApplications: {
      en: [
        'Calculating solar PV panel array strings: connecting solar panels in series to step up DC voltage for inverters, and strings in parallel to step up current.',
        'Sizing LED indicator resistors across 12 V automotive or 24 V industrial PLC output terminals.',
        'Sizing neutral wires and cable conductor cross-sectional areas to avoid excessive line heating.'
      ],
      hi: [
        'सौर पीवी पैनल ऐरे स्ट्रिंग्स: इन्वर्टर के लिए डीसी वोल्टेज बढ़ाने के लिए सौर पैनलों को श्रेणी में और धारा बढ़ाने के लिए समानांतर में जोड़ना।',
        '12 V ऑटोमोटिव या 24 V औद्योगिक पीएलसी आउटपुट के लिए एलईडी प्रतिरोधकों का आकार।',
        'केबल हीटिंग से बचने के लिए तटस्थ तारों और केबल का आकार तय करना।'
      ],
      bn: [
        'সোলার পিভি প্যানেল অ্যারে তৈরি: ইনভার্টারের জন্য ডিসি ভোল্টেজ বাড়াতে প্যানেল সিরিজে এবং কারেন্ট বাড়াতে প্যারালালে যুক্ত করতে।',
        '১২ V গাড়ি বা ২৪ V ইন্ডাস্ট্রিয়াল PLC বোর্ডে ইন্ডিকেটর এলইডির রেজিস্ট্যান্স নির্ধারণ করতে।',
        'অতিরিক্ত হিট কমানোর জন্য তারের সাইজ বা প্রচ্ছদের ক্ষেত্রফল নির্বাচন করতে।'
      ]
    },
    importantPoints: {
      en: [
        'ALWAYS measure Voltage in PARALLEL across nodes and Current in SERIES through a broken path with a Digital Multimeter.',
        'Never measure resistance or continuity on an ENERGIZED (live) circuit.',
        'To get 24 V 200 Ah from four 12 V 100 Ah batteries, connect two series pairs in parallel (2s2p configuration).'
      ],
      hi: [
        'हमेशा डिजिटल मल्टीमीटर से नोड्स पर समानांतर में वोल्टेज और टूटे हुए पथ में श्रेणी में धारा मापें।',
        'लाइव (चालू) परिपथ पर कभी भी प्रतिरोध या निरंतरता न मापें।',
        'चार 12 V 100 Ah बैटरियों से 24 V 200 Ah प्राप्त करने के लिए, दो श्रेणी जोड़ों को समानांतर (2s2p) में जोड़ें।'
      ],
      bn: [
        'মাল্টিমিটার দিয়ে সবসময় ভোল্টেজ মাপবে প্যারালালে এবং কারেন্ট মাপবে সার্কিট ওপেন করে সিরিজে।',
        'লাইভ (বিদ্যুৎ চালু) সার্কিটে কখনোই রেজিস্ট্যান্স বা কন্টিনিউটি মাপবে না।',
        'চারটি ১২ V ১০০Ah ব্যাটারি দিয়ে ২৪ V ২০০Ah পেতে দুটি সিরিজের জোড়াকে প্যারালালে সংযোগ করতে হয় (২s২p)।'
      ]
    },
    commonMistakes: {
      en: [
        'Connecting an Ammeter in parallel across power supply terminals (causes an immediate SHORT CIRCUIT and blows the meter fuse!).',
        'Connecting LEDs directly across 12 V DC without a series current-limiting resistor (destroys the LED instantly).'
      ],
      hi: [
        'पावर सप्लाई टर्मिनलों पर समानांतर में अमीटर जोड़ना (तुरंत शॉर्ट सर्किट का कारण बनता है और मीटर फ्यूज उड़ा देता है!)।',
        'बिना सीरीज प्रतिरोधक के 12 V डीसी पर सीधे एलईडी जोड़ना (एलईडी को तुरंत नष्ट कर देता है)।'
      ],
      bn: [
        'সাপ্লাই টার্মিনালে প্যারালালে সরাসরি অ্যামিটার যুক্ত করা (যা তাৎক্ষণিক শর্ট সার্কিট ঘটায় ও মিটারের ফিউজ ভাসায়!)।',
        'সিরিজ রেজিস্টর ছাড়া সরাসরি ১২ V ডিসিতে এলইডি যুক্ত করা (যা নিমেষেই এলইডি জ্বালিয়ে নষ্ট করে)।'
      ]
    },
    mcqs: [
      {
        id: 'mcq-prac-1',
        question: {
          en: 'You need to power a red LED (forward voltage V_LED = 2.0 V, rated current I_LED = 20 mA = 0.02 A) from a 12 V DC power source. What series resistor value R_limit is required?',
          hi: 'आपको 12 V डीसी स्रोत से एक लाल एलईडी (V_LED = 2.0 V, I_LED = 20 mA = 0.02 A) को चलाना है। आवश्यक श्रेणी प्रतिरोधक R_limit का मान क्या है?',
          bn: '১২ V ডিসি সোর্স থেকে একটি লাল এলইডি (V_LED = ২.০ V, rated current I_LED = ২০ mA = ০.০২ A) চালাতে হবে। কত মানের সিরিজ রেজিস্টর R_limit দরকার?'
        },
        options: [
          { id: 'a', text: { en: '600 Ω', hi: '600 Ω', bn: '৬০০ Ω' } },
          { id: 'b', text: { en: '500 Ω', hi: '500 Ω', bn: '৫০০ Ω' } },
          { id: 'c', text: { en: '100 Ω', hi: '100 Ω', bn: '১০০ Ω' } },
          { id: 'd', text: { en: '1000 Ω', hi: '1000 Ω', bn: '১০০০ Ω' } }
        ],
        correctOptionId: 'b',
        explanation: {
          en: 'R_limit = (V_supply - V_LED) / I_LED = (12 V - 2 V) / 0.02 A = 10 V / 0.02 A = 500 Ω.',
          hi: 'R_limit = (12 - 2) / 0.02 = 10 / 0.02 = 500 Ω।',
          bn: 'R_limit = (১২ - ২) / ০.০২ = ১০ / ০.০২ = ৫০০ Ω।'
        }
      },
      {
        id: 'mcq-prac-2',
        question: {
          en: 'How should four 12 V, 100 Ah lead-acid batteries be configured to create a 24 V, 200 Ah battery bank?',
          hi: '24 V, 200 Ah बैटरी बैंक बनाने के लिए चार 12 V, 100 Ah लेड-एसिड बैटरियों को कैसे कॉन्फ़िगर किया जाना चाहिए?',
          bn: 'চারটি ১২ V, ১০০ Ah লেড-এসিড ব্যাটারি দিয়ে একটি ২৪ V, ২০০ Ah ব্যাটারি ব্যাংক তৈরি করতে কীভাবে কানেকশন করতে হবে?'
        },
        options: [
          { id: 'a', text: { en: 'All 4 batteries connected in series', hi: 'सभी 4 बैटरियों को श्रेणी में जोड़ें', bn: '৪টি ব্যাটারিই সিরিজে কানেক্ট করতে হবে' } },
          { id: 'b', text: { en: 'All 4 batteries connected in parallel', hi: 'सभी 4 बैटरियों को समानांतर में जोड़ें', bn: '৪টি ব্যাটারিই প্যারালালে কানেক্ট করতে হবে' } },
          { id: 'c', text: { en: 'Two series pairs connected in parallel (2S2P)', hi: 'समानांतर में जुड़ी दो श्रेणी जोड़ियां (2S2P)', bn: 'সিরিজের দুটি জোড়াকে প্যারালালে কানেক্ট করতে হবে (2S2P)' } },
          { id: 'd', text: { en: 'Three in series and one in parallel', hi: 'तीन श्रेणी में और एक समानांतर में', bn: 'তিনটি সিরিজে এবং একটি প্যারালালে' } }
        ],
        correctOptionId: 'c',
        explanation: {
          en: 'Connecting 2 batteries in series gives 12V+12V = 24V (100Ah). Connecting two such 24V pairs in parallel doubles capacity to 200Ah.',
          hi: 'श्रेणी में 2 बैटरियां 24V (100Ah) देती हैं। ऐसी दो जोड़ियों को समानांतर में जोड़ने से क्षमता 200Ah हो जाती है।',
          bn: '২টি ব্যাটারি সিরিজে ২৪V (১০০Ah) দেয়। এরূপ দুটি ২৪V জোড়াকে প্যারালালে যুক্ত করলে ক্যাপাসিটি বেড়ে ২০০Ah হয়।'
        }
      },
      {
        id: 'mcq-prac-3',
        question: {
          en: 'What happens if a technician mistakenly sets a multimeter to Measure Current (Amperes) and connects probes directly across a 230 V live mains outlet?',
          hi: 'यदि कोई तकनीशियन गलती से मल्टीमीटर को धारा (एम्पीयर) मापने पर सेट करता है और प्रोब को सीधे 230 V लाइव मेन्स से जोड़ता है तो क्या होगा?',
          bn: 'একজন টেকনিশিয়ান ভুলবশত মাল্টিমিটারকে অ্যাম্পিয়ার মোডে রেখে সরাসরি ২৩০ V মেইন লাইনে প্রোব ধরলে কী ঘটবে?'
        },
        options: [
          { id: 'a', text: { en: 'It measures 230 A accurately', hi: 'यह सटीकता से 230 A मापता है', bn: 'এটি সঠিকভাবে ২৩০ A দেখাবে' } },
          { id: 'b', text: { en: 'It creates a direct short circuit, causing a loud arc flash and blowing the meter fuse', hi: 'यह सीधा शॉर्ट सर्किट बनाता है, जिससे अर्क फ्लैश होता है और मीटर फ्यूज उड़ जाता है', bn: 'এটি সরাসরি শর্ট সার্কিট ঘটাবে, যা স্পার্কের সাথে মিটারের ভেতরের ফিউজ ব্লাস্ট করবে' } },
          { id: 'c', text: { en: 'It safely displays zero current', hi: 'यह सुरक्षित रूप से शून्य धारा दर्शाता है', bn: 'এটি নিরাপদে ০ অ্যাম্পিয়ার দেখাবে' } },
          { id: 'd', text: { en: 'The battery of the multimeter charges up', hi: 'मल्टीमीटर की बैटरी चार्ज हो जाती है', bn: 'মাল্টিমিটারের ব্যাটারি চার্জ হবে' } }
        ],
        correctOptionId: 'b',
        explanation: {
          en: 'An ammeter shunt has near-zero internal resistance (~0.01 Ω). Connecting it across 230 V causes an immediate short circuit with thousands of Amperes flowing through the meter.',
          hi: 'अमीटर शंट का आंतरिक प्रतिरोध शून्य के बराबर होता है। इसे 230 V पर जोड़ने से तत्काल शॉर्ट सर्किट होता है और हजारों एम्पीयर धारा बहती है।',
          bn: 'অ্যামিটারের ভেতরের রেজিস্ট্যান্স প্রায় শূন্য (~০.০১ Ω)। এটি ২৩০ V-এ ধরলে তাৎক্ষণিক শর্ট সার্কিট ঘটে মিটারের ফিউজ কেটে যায়।'
        }
      }
    ],
    practiceQuestions: [
      {
        id: 'pq-prac-1',
        question: {
          en: 'A 24 V DC control panel powers three industrial sensor indicator lamps connected in parallel. Each lamp is rated 24 V, 6 W. Calculate: (a) Current drawn by each lamp, (b) Total panel lighting current, and (c) Equivalent resistance of the lighting load.',
          hi: '24 V डीसी नियंत्रण पैनल समानांतर में जुड़े तीन औद्योगिक सेंसर लैंप को शक्ति देता है। प्रत्येक लैंप 24 V, 6 W का है। गणना करें: (a) प्रत्येक लैंप द्वारा ली गई धारा, (b) कुल धारा, और (c) समतुल्य प्रतिरोध।',
          bn: 'একটি ২৪ V ডিসি কন্ট্রোল প্যানেল প্যারালালে যুক্ত ৩টি ইন্ডাস্ট্রিয়াল ল্যাম্পকে পাওয়ার দেয়। প্রতিটি ল্যাম্প ২৪ V, ৬ W রেটিংয়ের। নির্ণয় করো: (a) প্রতিটি ল্যাম্পের কারেন্ট, (b) প্যানেলের মোট লাইটিং কারেন্ট, এবং (c) লাইটিং লোডের তুল্য রোধ।'
        },
        hint: {
          en: 'Power P = V × I, so I = P / V. Then total I_T = 3 × I_lamp. R_eq = V / I_T.',
          hi: 'P = V × I, इसलिए I = P / V। I_T = 3 × I_lamp। R_eq = V / I_T।',
          bn: 'P = V × I, তাই I = P / V। মোট I_T = ৩ × I_lamp। R_eq = V / I_T।'
        },
        answerKey: {
          en: '(a) Lamp Current I = 6 W / 24 V = 0.25 A (250 mA).\n(b) Total Current I_T = 3 × 0.25 A = 0.75 A (750 mA).\n(c) Equivalent Resistance R_eq = 24 V / 0.75 A = 32 Ω.',
          hi: '(a) लैंप धारा = 0.25 A।\n(b) कुल धारा = 0.75 A।\n(c) समतुल्य प्रतिरोध = 32 Ω।',
          bn: '(a) প্রতিটি ল্যাম্পের কারেন্ট = ৬/২৪ = ০.২৫ A।\n(b) মোট কারেন্ট = ৩ × ০.২৫ = ০.৭৫ A।\n(c) তুল্য রোধ R_eq = ২৪ / ০.৭৫ = ৩২ Ω।'
        }
      },
      {
        id: 'pq-prac-2',
        question: {
          en: 'Describe a step-by-step diagnostic procedure to troubleshoot a suspected open circuit in a residential light fixture using a Digital Multimeter (DMM) safely.',
          hi: 'डिजिटल मल्टीमीटर (DMM) का उपयोग करके आवासीय लाइट फ़िक्सचर में संदिग्ध ओपन सर्किट का सुरक्षित रूप से निदान करने के लिए चरण-दर-चरण प्रक्रिया का वर्णन करें।',
          bn: 'ডিজিটাল মাল্টিমিটার (DMM) ব্যবহার করে বাসাবাড়ির কোনো ল্যাম্প লাইনে ওপেন সার্কিট ফল্ট নিরাপদে ট্রাবলশুট করার জন্য ধাপে ধাপে নির্দেশিকা লেখো।'
        },
        hint: {
          en: 'Start with visual inspection, set DMM to AC Volts mode, check voltage at distribution board, switch terminals, and lamp holder.',
          hi: 'दृश्य निरीक्षण से शुरू करें, DMM को AC वोल्ट पर सेट करें, वितरण बोर्ड, स्विच और लैंप होल्डर पर वोल्टेज जांचें।',
          bn: 'ভিজ্যুয়াল পর্যবেক্ষণ দিয়ে শুরু করো, মাল্টিমিটার AC ভোল্টে সেট করো, ডিস্ট্রিবিউশন বোর্ড, সুইচ এবং ল্যাম্প হোল্ডারে ভোল্টেজ চেক করো।'
        },
        answerKey: {
          en: '1. Safety Preparation: Wear insulated gloves and set DMM to 600V AC mode.\n2. Verify MCB: Check voltage at main MCB output (should read 230 V).\n3. Check Switch: With switch ON, measure voltage across switch terminals. If it reads 230 V, the switch contacts are OPEN (defective).\n4. Check Lamp Holder: Measure voltage at lamp holder terminals. If 230 V is present but lamp does not glow, the lamp filament is OPEN.',
          hi: '1. सुरक्षा: DMM को 600V AC पर सेट करें।\n2. MCB आउटपुट पर 230 V मापें।\n3. स्विच ON होने पर स्विच पर वोल्टेज मापें। यदि 230 V दिखे, तो स्विच अंदर से खराब है।\n4. लैंप होल्डर पर मापें। यदि 230 V है लेकिन लैंप नहीं जल रहा, तो फिलामेंट ओपन है।',
          bn: '১. সেফটি: মাল্টিমিটারকে ৬০০V AC মোডে সেট করো।\n২. এমসিবি চেক: এমসিবি আউটপুটে ২৩০ V আছে কিনা মাপো।\n৩. সুইচ টেস্ট: সুইচ অন থাকা অবস্থায় সুইচের দুই কন্টাক্টে ভোল্টেজ মাপো। ২৩০ V দেখালে সুইচটি ভেতরে পুড়ে ওপেন হয়ে গেছে।\n৪. হোল্ডার টেস্ট: হোল্ডারে ২৩০ V পেয়েও বাতি না জ্বললে ফিলামেন্ট ওপেন।'
        }
      }
    ]
  }
};
