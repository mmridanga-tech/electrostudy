import { Lesson } from '../types';

export const LESSON_MOTOR_CAPACITORS_VOLTAGE_MULTIPLIERS: Lesson = {
  id: 'lsn-ch7-motor-capacitors-voltage-multipliers',
  topicId: 'ch7-motor-capacitors-voltage-multipliers',
  chapterId: 'ch-capacitors',
  order: 18,
  title: {
    en: 'Motor Start/Run Capacitors & Voltage Multipliers',
    hi: 'मोटर स्टार्ट/रन कैपेसिटर एवं वोल्टेज मल्टीप्लायर',
    bn: 'মোটর স্টার্ট/রান ক্যাপাসিটর ও ভোল্টেজ মাল্টিপ্লায়ার'
  },
  description: {
    en: 'Single-phase induction motor phase-splitting (auxiliary winding phase shift for rotating magnetic field), start vs run capacitor comparisons, and Cockcroft-Walton voltage doubler/multiplier circuits.',
    hi: 'सिंगल-फेज इंडक्शन मोटर में फेज-स्प्लिटिंग (घूर्णन चुंबकीय क्षेत्र हेतु फेज़ विस्थापन), स्टार्ट बनाम रन कैपेसिटर एवं वोल्टेज मल्टीप्लायर परिपथ।',
    bn: 'সিঙ্গেল ফেজ মোটরে ফেজ-স্প্লিটিং (ঘূর্ণনশীল চৌম্বক ক্ষেত্র তৈরিতে ফেজ শিফট), স্টার্ট বনাম রান ক্যাপাসিটরের পার্থক্য এবং ভোল্টেজ মাল্টিপ্লায়ার সার্কিট।'
  },
  easyExplanation: {
    en: 'Single-phase AC electricity cannot produce a rotating magnetic field by itself, so single-phase motors (like ceiling fans, washing machines, and water pumps) cannot start on their own without help. A motor capacitor creates an artificial second phase by shifting the current by almost 90 degrees in an auxiliary start winding, giving the rotor a strong push to start spinning! Capacitors and diodes can also be cascaded into "Voltage Multipliers" to generate thousands of DC volts from low AC.',
    hi: 'सिंगल-फेज एसी सप्लाई अकेले घूमने वाला चुंबकीय क्षेत्र नहीं बना सकती, इसलिए सीलिंग फैन, कूलर और पानी के पंप अपने आप स्टार्ट नहीं हो सकते। मोटर कैपेसिटर सहायक वाइंडिंग में करंट को लगभग 90° आगे खिसकाकर एक कृत्रिम दूसरा फेज़ बना देता है, जिससे मोटर को घूमने का शुरुआती धक्का (स्टार्टिंग टॉर्क) मिलता है। इसके अलावा, कैपेसिटर और डायोड मिलकर उच्च वोल्टेज उत्पन्न करने वाले "वोल्टेज मल्टीप्लायर" का निर्माण करते हैं।',
    bn: 'সিঙ্গেল ফেজ এসি সাপ্লাই নিজে থেকে ঘূর্ণনশীল চৌম্বক ক্ষেত্র তৈরি করতে পারে না, তাই সিলিং ফ্যান, পাম্প বা ওয়াশিং মেশিনের মোটর নিজে নিজে স্টার্ট হতে পারে না। মোটরের ক্যাপাসিটর সহকারী ওয়াইন্ডিংয়ে কারেন্টকে প্রায় ৯০° ফেজ শিফট করিয়ে একটি কৃত্রিম ঘূর্ণন ক্ষেত্র তৈরি করে মোটরকে ঘোরানোর প্রাথমিক ধাক্কা দেয়। একই সাথে ডায়োড ও ক্যাপাসিটর দিয়ে ভোল্টেজ দ্বিগুণ বা বহুগুণ করার ভোল্টেজ মাল্টিপ্লায়ার তৈরি করা যায়।'
  },
  detailedExplanation: {
    en: `1. The Single-Phase Motor Starting Problem (Double Revolving Field Theory):
According to Ferraris' and double-revolving field theory, a pulsating single-phase stator field resolves into two equal and opposite rotating magnetic fields (forward and backward). At standstill (speed N = 0), both torque components are identical, yielding ZERO net starting torque.

2. Phase-Splitting with Motor Capacitors:
To produce net unidirectional starting torque, single-phase motors are wound with two stator windings spaced 90 electrical degrees apart:
- Main Winding (Run winding): High inductance, low resistance.
- Auxiliary Winding (Start winding): Connected in series with a Capacitor (C).
- Operation: The series capacitor introduces a leading phase shift in the auxiliary winding current (I_aux) relative to the main winding current (I_main), approaching a 90° temporal phase displacement. This creates an elliptical or circular rotating magnetic field (RMF) that spins the rotor.

3. Start Capacitors vs. Run Capacitors:
- Start Capacitors:
  * Value: High capacitance (typically 80 μF to 400 μF).
  * Duty Cycle: Short-duty / intermittent only (energized for only 1 to 3 seconds during acceleration).
  * Construction: Non-polarized AC electrolytic capacitor in a phenolic plastic case with a bleed resistor.
  * Disconnection: Disconnected at ~75% synchronous speed by a centrifugal switch or solid-state potential relay.
  * Purpose: Delivers massive starting torque (200% to 350% of full load) for compressors and loaded conveyor motors.

- Run Capacitors:
  * Value: Moderate capacitance (typically 1.5 μF to 60 μF).
  * Duty Cycle: Continuous duty (100% rated runtime).
  * Construction: Metallized polypropylene film (MPP) filled with non-toxic oil or resin in an aluminum can.
  * Purpose: Improves running efficiency, reduces operating noise, improves running power factor to >0.95. Used in ceiling fans, air conditioners, and blowers.

4. Voltage Multipliers (Cockcroft-Walton Cascade):
A voltage multiplier is a specialized diode-capacitor circuit that converts AC input into a high DC voltage that is a multiple (2x, 3x, 4x, ... Nx) of the AC peak voltage (V_peak):
- Half-Wave Voltage Doubler:
  * Positive half-cycle: Diode D1 conducts, charging capacitor C1 to V_m.
  * Negative half-cycle: Diode D2 conducts, charging capacitor C2 to (V_in + V_C1) = 2 · V_m.
  * Output taken across C2 provides V_dc = 2 · V_peak.
- Cockcroft-Walton Voltage Ladder:
  * Cascading N stages yields an output DC voltage of V_out = 2 · N · V_peak.
  * Used for high-voltage, low-current applications (X-ray tubes, particle accelerators, CRT monitors, insect zappers).`,
    hi: `1. सिंगल-फेज मोटर में कैपेसिटर की आवश्यकता:
सिंगल-फेज मोटर में सेल्फ-स्टार्टिंग टॉर्क शून्य होता है। सहायक (ऑक्सिलियरी) वाइंडिंग के सीरीज में कैपेसिटर लगाने से दोनों वाइंडिंग के बीच 90° का फेज़ अंतर उत्पन्न होता है, जिससे मोटर घूमने लगती है।

2. स्टार्ट कैपेसिटर बनाम रन कैपेसिटर:
- स्टार्ट कैपेसिटर (Start Capacitor): उच्च धारिता (80 - 400 μF), केवल मोटर शुरू करते समय 1-3 सेकंड के लिए काम करता है और सेंट्रीफ्यूगल स्विच द्वारा कट जाता है।
- रन कैपेसिटर (Run Capacitor): मध्यम धारिता (1.5 - 60 μF), लगातार जुड़ा रहता है (जैसे सीलिंग फैन में 2.5 μF), मोटर की दक्षता और पावर फैक्टर सुधारता है।

3. वोल्टेज मल्टीप्लायर (Voltage Multiplier):
डायोड और कैपेसिटर की सीढ़ीनुमा व्यवस्था जो कम एसी वोल्टेज को कई गुना उच्च डीसी वोल्टेज (2x, 4x, 8x) में बदल देती है (जैसे एक्स-रे मशीन, मॉस्किटो रैकेट)।`,
    bn: `১. সিঙ্গেল ফেজ মোটরে ক্যাপাসিটরের গুরুত্ব:
সিঙ্গেল ফেজ মোটরের নিজস্ব কোনো স্টার্টিং টর্ক থাকে না। মোটরের অক্সিলিয়ারি ওয়াইন্ডিংয়ে ক্যাপাসিটর যুক্ত করে দুটি ওয়াইন্ডিংয়ের কারেন্টের মাঝে ৯০° ফেজ ডিফারেন্স তৈরি করা হয়, যার ফলে ঘূর্ণনশীল চৌম্বক ক্ষেত্র তৈরি হয়ে মোটর ঘুরতে শুরু করে।

২. স্টার্ট বনাম রান ক্যাপাসিটর:
- স্টার্ট ক্যাপাসিটর: বেশি মানের ধারকত্ব (৮০ - ৪০০ μF), শুধুমাত্র মোটর চালু করার সময় ১-৩ সেকেন্ডের জন্য চালু থাকে এবং সেন্ট্রিফিউগাল সুইচে বিচ্ছিন্ন হয়।
- রান ক্যাপাসিটর: কম বা মাঝারি মান (১.৫ - ৬০ μF), মোটরের সাথে সারাক্ষণ যুক্ত থাকে (যেমন সিলিং ফ্যানে ২.৫ μF ক্যাপাসিটর), যা মোটরকে মসৃণ ও কম শক্তিতে চালাতে সাহায্য করে।

৩. ভোল্টেজ মাল্টিপ্লায়ার:
ক্যাপাসিটর ও ডায়োড সাজিয়ে এসি ইনপুট ভোল্টেজের পিক মানকে দ্বিগুণ (Doubler) বা বহুগুণ (Cockcroft-Walton Multiplier) ডিসি ভোল্টেজে রূপান্তর করা হয় (যেমন মশার ব্যাট বা এক্স-রে মেশিন)।`
  },
  formulas: [
    {
      expression: 'V_{out(Doubler)} = 2 \\cdot V_{peak} = 2 \\cdot \\sqrt{2} \\cdot V_{rms}',
      description: {
        en: 'No-load output DC voltage of a half-wave voltage doubler',
        hi: 'हाफ-वेव वोल्टेज डब्लर का नो-लोड डीसी आउटपुट वोल्टेज',
        bn: 'হাফ-ওয়েভ ভোল্টেজ ডাবলারে নো-লোড আউটপুট ডিসি ভোল্টেজ'
      }
    },
    {
      expression: 'V_{out(N-stage)} = 2 \\cdot N \\cdot V_{peak}',
      description: {
        en: 'Output DC voltage of an N-stage Cockcroft-Walton multiplier ladder',
        hi: 'N-स्टेज कॉकक्रॉफ्ट-वाल्टन वोल्टेज मल्टीप्लायर का आउटपुट वोल्टेज',
        bn: 'N-ধাপের ককরফ্ট-ওয়ালটন মাল্টিপ্লায়ার ল্যাডার আউটপুট ভোল্টেজ'
      }
    },
    {
      expression: 'T_{start} \\propto I_{main} \\cdot I_{aux} \\cdot \\sin(\\alpha)',
      description: {
        en: 'Starting torque of single-phase induction motor with phase angle displacement α',
        hi: 'फेज़ कोण α के साथ सिंगल-फेज इंडक्शन मोटर का स्टार्टिंग टॉर्क सूत्र',
        bn: 'ফেজ কোণ α এর সাপেক্ষে সিঙ্গেল ফেজ মোটরের স্টার্টিং টর্ক সমীকরণ'
      }
    }
  ],
  practicalApplications: [
    {
      en: 'Permanent split capacitor (PSC) ceiling fans, table fans, exhaust fans, and desert coolers (typically 2.25 μF to 3.15 μF 440V MPP)',
      hi: 'सीलिंग फैन, टेबल फैन एवं कूलर में प्रयुक्त 2.5 μF रन कैपेसिटर',
      bn: 'সিলিং ফ্যান, টেবিল ফ্যান ও কুলারে ব্যবহৃত স্থায়ী ২.৫ μF রান ক্যাপাসিটর'
    },
    {
      en: 'Capacitor-start capacitor-run (CSCR) heavy duty deep-well submersible water pumps and air compressor motors',
      hi: 'सबमर्सिबल पानी के पंप एवं एयर कंप्रेसर हेतु CSCR मोटर कैपेसिटर',
      bn: 'সাবমার্সিবল পাম্প ও এয়ার কম্প্রেসারে ভারী লোডে স্টার্টের জন্য CSCR মোটর কন্ট্রোল বক্স'
    },
    {
      en: 'High-voltage electric fly swatters, stun guns, CRT power stages, and electrostatic precipitators using voltage multipliers',
      hi: 'इलेक्ट्रिक मॉस्किटो बैट एवं इलेक्ट्रोस्टैटिक एयर फिल्टर में प्रयुक्त वोल्टेज मल्टीप्लायर',
      bn: 'মশা মারার ইলেকট্রিক ব্যাট ও এয়ার পিউরিফায়ারে উচ্চ ভোল্টেজ তৈরিতে ভোল্টেজ মাল্টিপ্লায়ার'
    }
  ],
  importantPoints: {
    en: [
      'Single-phase induction motors have ZERO starting torque without phase-splitting capacitors',
      'Start capacitors are rated for short intermittent duty and will explode if kept connected continuously',
      'Run capacitors must be rated for continuous AC voltage (typically 400V to 450V AC for 230V mains due to LC resonance voltage rise)'
    ],
    hi: [
      'कैपेसिटर के बिना सिंगल-फेज इंडक्शन मोटर का शुरुआती टॉर्क शून्य होता है',
      'स्टार्ट कैपेसिटर केवल कुछ सेकंड के लिए होते हैं; लगातार जुड़े रहने पर वे फट सकते हैं',
      '230V सप्लाई के रन कैपेसिटर को हमेशा 400V-450V AC रेटिंग का होना चाहिए क्योंकि LC अनुनाद से वोल्टेज बढ़ जाता है'
    ],
    bn: [
      'ক্যাপাসিটর ছাড়া সিঙ্গেল ফেজ মোটরে কোনো স্টার্টিং টর্ক তৈরি হয় না',
      'স্টার্ট ক্যাপাসিটর কেবল কয়েক সেকেন্ডের জন্য থাকে; সার্বক্ষণিক অন রাখলে তা অতিরিক্ত তাপে ফেটে যেতে পারে',
      '২৩০ V লাইনে ব্যবহৃত রান ক্যাপাসিটরকে রেজোন্যান্স ভোল্টেজের কারণে অন্তত ৪০০V - ৪৫০V AC রেটিংয়ের হতে হয়'
    ]
  },
  commonMistakes: {
    en: [
      'Replacing a 2.5 μF fan capacitor with a high 100 μF start capacitor, which burns out the auxiliary winding immediately',
      'Assuming that a 230V motor needs a 230V capacitor; resonance across winding raises capacitor voltage to ~350V-400V AC'
    ],
    hi: [
      'पंखे के 2.5 μF कैपेसिटर के स्थान पर 100 μF स्टार्ट कैपेसिटर लगा देना जिससे मोटर वाइंडिंग जल जाती है',
      'यह मानना कि 230V मोटर के लिए 230V कैपेसिटर पर्याप्त है (वोल्टेज 350V+ तक बढ़ जाता है)'
    ],
    bn: [
      'ফ্যানের ২.৫ μF ক্যাপাসিটরের জায়গায় ভুল করে ১০০ μF স্টার্ট ক্যাপাসিটর লাগানো, যা ওয়াইন্ডিং পুড়িয়ে ফেলে',
      'মনে করা ২৩০V মোটরে ২৩০V ক্যাপাসিটরই যথেষ্ট (কয়েলের সাথে রেজোন্যান্সে ক্যাপাসিটরের ভোল্টেজ প্রায় ৪০০V তে পৌঁছায়)'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch7-18-1',
      question: {
        en: 'Why is a run capacitor in a 230 V single-phase ceiling fan rated for 440 V AC instead of 230 V AC?',
        hi: '230 V सिंगल-फेज सीलिंग फैन में रन कैपेसिटर की रेटिंग 230 V के बजाय 440 V AC क्यों होती है?',
        bn: '২৩০ V সিঙ্গেল ফেজ সিলিং ফ্যানে রান ক্যাপাসিটরের ভোল্টেজ রেটিং ২৩০ V এর বদলে ৪৪০ V AC রাখা হয় কেন?'
      },
      options: [
        { id: 'opt-a', text: { en: 'To allow higher current to flow', hi: 'अधिक धारा प्रवाहित करने के लिए', bn: 'বেশি কারেন্ট প্রবাহের জন্য' } },
        { id: 'opt-b', text: { en: 'Because series resonance with the motor auxiliary winding causes the voltage across the capacitor to rise well above supply voltage (~350V-400V)', hi: 'क्योंकि मोटर वाइंडिंग के साथ सीरीज रेजोनेंस से कैपेसिटर के सिरों पर वोल्टेज सप्लाई से कहीं अधिक (~350V-400V) बढ़ जाता है', bn: 'কারণ অক্সিলিয়ারি কয়েলের সাথে রেজোন্যান্সের কারণে ক্যাপাসিটরের ভোল্টেজ মেইন লাইনের চেয়ে বেশি (~৩৫০V-৪০০V) বৃদ্ধি পায়' } },
        { id: 'opt-c', text: { en: 'Because DC voltage is present', hi: 'क्योंकि इसमें डीसी वोल्टेज मौजूद होता है', bn: 'কারণ এতে ডিসি ভোল্টেজ থাকে' } },
        { id: 'opt-d', text: { en: 'To convert single-phase into 3-phase', hi: 'सिंगल-फेज को 3-फेज में बदलने के लिए', bn: 'সিঙ্গেল ফেজকে ৩-ফেজে রূপান্তরের জন্য' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'The auxiliary winding inductance and capacitor form an LC circuit that produces a resonant voltage boost across the capacitor terminals reaching ~350V to 400V under normal running conditions.',
        hi: 'सहायक वाइंडिंग के इंडक्टेंस और कैपेसिटर के बीच एलसी सर्किट बनने से कैपेसिटर पर वोल्टेज 350-400V तक पहुंच जाता है।',
        bn: 'সহকারী ওয়াইন্ডিংয়ের ইন্ডাক্ট্যান্স ও ক্যাপাসিটর মিলে রেজোন্যান্স ভোল্টেজ বৃদ্ধি করে, যা সাধারণ সময়েও ৩৫০V থেকে ৪০০V তে পৌঁছায়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch7-18-1',
      question: {
        en: 'A 4-stage Cockcroft-Walton voltage multiplier ladder is supplied with an AC transformer secondary voltage of 230 V RMS (50 Hz). Calculate: (a) Peak input AC voltage (Vm), (b) Total DC output voltage at the final terminal under no-load conditions.',
        hi: 'एक 4-स्टेज कॉकक्रॉफ्ट-वाल्टन वोल्टेज मल्टीप्लायर को 230 V RMS (50 Hz) सप्लाई दी गई है। ज्ञात करें: (a) पीक इनपुट वोल्टेज Vm, (b) नो-लोड स्थिति में कुल आउटपुट डीसी वोल्टेज।',
        bn: 'একটি ৪-ধাপের ককরফ্ট-ওয়ালটন ভোল্টেজ মাল্টিপ্লায়ার সার্কিটে ২৩০ V RMS (৫০ Hz) এসি ইনপুট দেওয়া হলো। নির্ণয় করুন: (a) পিক ইনপুট ভোল্টেজ Vm, (b) নো-লোড অবস্থায় চূড়ান্ত মোট আউটপুট ডিসি ভোল্টেজ।'
      },
      hint: {
        en: 'Vm = √2 · 230 V. Output of N-stage multiplier is V_out = 2 · N · Vm (for N = 4 stages).',
        hi: 'Vm = √2 × 230 = 325.27 V। 4-स्टेज आउटपुट = 2 × 4 × Vm = 8 × Vm।',
        bn: 'Vm = √২ × ২৩০ = ৩২৫.২৭ V। ৪-স্টেজের আউটপুট = ৮ × Vm।'
      },
      answerKey: {
        en: '(a) Vm = √2 × 230 V = 325.27 V. (b) For N = 4 stages, V_out = 2 × N × Vm = 2 × 4 × 325.27 V = 8 × 325.27 V = 2,602.16 V DC (approx. 2.6 kV DC).',
        hi: '(a) Vm = 325.27 V, (b) 4-स्टेज कुल आउटपुट = 2,602 V DC (लगभग 2.6 kV DC)।',
        bn: '(a) Vm = ৩২৫.২৭ V, (b) ৪-স্টেজে মোট আউটপুট = ২,৬০২ V DC (প্রায় ২.৬ kV DC)।'
      }
    }
  ]
};
