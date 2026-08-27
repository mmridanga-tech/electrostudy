import { Lesson } from '../types';

export const LESSON_INDUCTOR_TESTING_DIAGNOSTICS: Lesson = {
  id: 'lsn-ch8-inductor-testing-diagnostics',
  topicId: 'ch8-inductor-testing-diagnostics',
  chapterId: 'ch-inductors',
  order: 20,
  title: {
    en: 'Inductor Testing, Fault Diagnostics & Practical Troubleshooting',
    hi: 'इंडक्टर परीक्षण, दोष निदान एवं व्यावहारिक समस्या निवारण',
    bn: 'ইন্ডাক্টর টেস্টিং, ত্রুটি নির্ণয় ও প্র্যাকটিক্যাল ট্রাবলশুটিং'
  },
  description: {
    en: 'Comprehensive laboratory testing methods for inductors: DMM resistance check vs LCR meter 4-wire Kelvin bridge, ring tester for shorted turns, detecting core saturation with oscilloscope pulse generators, open-circuit, shorted-turns, and insulation breakdown faults, plus Chapter 8 Capstone summary.',
    hi: 'इंडक्टरों की संपूर्ण प्रयोगशाला परीक्षण विधियाँ: DMM बनाम LCR मीटर (4-वायर केल्विन ब्रिज), रिंग टेस्टर द्वारा शॉर्ट टर्न का पता लगाना, ऑसिलोस्कोप द्वारा संतृप्ति जांच, ओपन एवं शॉर्ट सर्किट दोष, तथा अध्याय 8 का सारांश।',
    bn: 'ইন্ডাক্টর ল্যাব টেস্টিং পদ্ধতি: DMM বনাম LCR মিটার (৪-ওয়্যার কেলভিন ব্রিজ), রিং টেস্টার দ্বারা শর্ট প্যাঁচ শনাক্তকরণ, অসিলোস্কোপ দিয়ে স্যাচুরেশন পরীক্ষা, ওপেন ও শর্ট সার্কিট ত্রুটি এবং অধ্যায় ৮ এর সামগ্রিক সারাংশ।'
  },
  easyExplanation: {
    en: 'Testing an inductor with a simple multimeter can easily fool you! While a multimeter only checks if the copper wire is broken (open circuit), it cannot detect when two microscopic wire turns melt together (shorted turns). Professional technicians use digital LCR meters and "Ring Testers" to pulse the coil and verify its Quality Factor (Q) and inductance accurately.',
    hi: 'केवल साधारण मल्टीमीटर से इंडक्टर को जांचना धोखा दे सकता है! मल्टीमीटर सिर्फ यह बता सकता है कि तार टूटा (Open) है या नहीं, लेकिन वह यह नहीं पकड़ सकता कि दो फेरे आपस में चिपककर शॉर्ट हो गए हैं। इसके लिए पेशेवर LCR मीटर और "रिंग टेस्टर" (Ring Tester) का उपयोग किया जाता है!',
    bn: 'সাধারণ মাল্টিমিটার দিয়ে ইন্ডাক্টর মাপলে বিভ্রান্ত হওয়ার সম্ভাবনা থাকে! মাল্টিমিটার কেবল তার কাটা (Open) কিনা তা বলতে পারে, কিন্তু পাশাপাশি দুটি প্যাঁচ পুড়ে শর্ট হলে তা ধরতে পারে না। দক্ষ টেকনিশিয়ানরা নিখুঁত মান ও কোয়ালিটি ফ্যাক্টর (Q) মাপতে LCR মিটার ও "রিং টেস্টার" ব্যবহার করেন!'
  },
  detailedExplanation: {
    en: `1. Common Failure Modes of Inductors & Coils:
1. Open Circuit (Open Coil): Wire burned out or fractured due to mechanical shock or severe overcurrent. Multiplier reading = ∞ Ω (OL).
2. Shorted Turns (Inter-Turn Short): High operating temperature melts the thin enamel varnish coating on adjacent wire turns. Inductance drops drastically, Q collapses to near zero, and the core overheats rapidly.
3. Core Saturation / Cracked Ferrite Core: Physical cracks in brittle ferrite cores introduce an unintended air gap, slashing inductance by 50% to 90%.
4. Insulation Breakdown to Ground / Frame: Voltage flashover between winding and iron core.

2. Diagnostic Instruments & Test Methods:

A. Digital Multimeter (DMM - Ohms Range):
- Good for basic continuity and checking DC Resistance (DCR).
- Limitation: Cannot measure Henrys (L) and cannot detect a few shorted turns among 1,000 windings (e.g., resistance changes by only 0.05 Ω).

B. Digital LCR Meter (4-Wire Kelvin Probes):
- Measures true AC inductance L_s / L_p, ESR, and Quality Factor Q at user-selectable test frequencies (100 Hz, 1 kHz, 10 kHz, 100 kHz).
- 4-wire Kelvin connection eliminates test-lead resistance errors.

C. The "Ring Tester" (Resonant Decay Test):
- A rapid voltage impulse is injected into the coil in parallel with a known capacitor.
- A healthy inductor "rings" (damped sine wave oscillations) for dozens of cycles (high Q).
- An inductor with even a SINGLE shorted turn acts as a shorted transformer secondary, absorbing all resonant energy and quenching the oscillations in 1 or 2 cycles (instant fault detection!).

D. Oscilloscope Pulse & Saturation Testing:
- Applying a constant DC voltage pulse to the inductor while monitoring current ramp on an oscilloscope (i(t) = (V/L)·t).
- If the current ramp stays linear, the inductor is healthy.
- If the current abruptly curves upward into a vertical spike, the core has entered magnetic saturation (I_sat reached!).

3. Chapter 8 Summary & Fundamental Mastery:
- Electromagnetism connects electric currents to magnetic flux (Biot-Savart & Ampere's Law).
- Faraday's and Lenz's laws govern electromagnetic induction (e = -N dΦ/dt = -L di/dt).
- Inductance stores energy in magnetic fields: W = 1/2 L I².
- Inductors resist AC (X_L = 2π f L) and protect circuits from transient spikes with flyback diodes.`,
    hi: `1. इंडक्टर के मुख्य दोष:
- ओपन कॉइल: तार टूट जाना (DMM पर अनंत प्रतिरोध ∞)।
- शॉर्ट टर्न (Inter-turn Short): इंसुलेशन पिघलने से फेरे आपस में चिपक जाना (L एवं Q मान गिर जाना)।
- फेराइट कोर टूटना: एयर गैप बढ़ने से इंडक्टेंस कम होना।

2. परीक्षण उपकरण:
- LCR मीटर (4-वायर केल्विन): L, ESR एवं Q फैक्टर मापने के लिए।
- रिंग टेस्टर (Ring Tester): शॉर्ट टर्न की तुरंत पहचान (दोलन क्षय द्वारा)।
- ऑसिलोस्कोप: संतृप्ति धारा (I_sat) की जांच।

3. अध्याय 8 का सारांश:
- e = -L (di/dt)
- संचित ऊर्जा: W = 1/2 L I²
- प्रतिघात: X_L = 2π f L।`,
    bn: `১. ইন্ডাক্টরের প্রধান ত্রুটিসমূহ:
- ওপেন সার্কিট: তার পুড়ে বা কেটে যাওয়া (মাল্টিমিটারে ∞ Ω)।
- শর্ট টার্ন: ইনসুলেশন নষ্ট হয়ে প্যাঁচ পরস্পরের সাথে শর্ট হওয়া (L ও Q মান ভয়াবহ হ্রাস)।
- কোর ফেটে যাওয়া: ইন্ডাক্ট্যান্স অনেক কমে যাওয়া।

২. টেস্টিং সরঞ্জাম ও পদ্ধতি:
- LCR মিটার (৪-ওয়্যার কেলভিন): নিখুঁত L, ESR ও Q পরিমাপের জন্য।
- রিং টেস্টার: শর্ট প্যাঁচ শনাক্ত করার সবচেয়ে নির্ভরযোগ্য পদ্ধতি (রেজোন্যান্স ক্ষয় দেখে)।
- অসিলোস্কোপ: স্যাচুরেশন কারেন্ট (I_sat) পর্যবেক্ষণ।

৩. অধ্যায় ৮ এর মূল সারাংশ:
- আবিষ্ট ভোল্টেজ: e = -L (di/dt)
- সঞ্চিত শক্তি: W = 1/2 L I²
- এসি রিঅ্যাকট্যান্স: X_L = 2π f L।`
  },
  formulas: [
    {
      expression: 'e = -L \\cdot \\frac{di}{dt}',
      description: {
        en: 'Inductor terminal voltage / back-EMF relationship',
        hi: 'इंडक्टर बैक-EMF एवं वोल्टेज संबंध',
        bn: 'ইন্ডাক্টরে আবিষ্ট ভোল্টেজ ও ব্যাক-EMF সমীকরণ'
      }
    },
    {
      expression: 'W = \\frac{1}{2} L I^2',
      description: {
        en: 'Magnetic field energy storage',
        hi: 'चुंबकीय क्षेत्र में संचित ऊर्जा',
        bn: 'চৌম্বক ক্ষেত্রে সঞ্চিত শক্তি'
      }
    }
  ],
  workedExamples: [
    {
      problem: {
        en: 'An electronic technician tests a 10 mH power inductor labeled for DCR = 1.2 Ω. A DMM reads 1.18 Ω (looks normal), but an LCR meter at 10 kHz reads L = 0.85 mH and Q = 1.4 (expected Q > 40). What is the diagnosis?',
        hi: 'एक 10 mH इंडक्टर (DCR = 1.2 Ω) का DMM परीक्षण 1.18 Ω दिखाता है, परंतु 10 kHz पर LCR मीटर L = 0.85 mH और Q = 1.4 दिखाता है। दोष क्या है?',
        bn: 'একটি ১০ mH ইন্ডাক্টরের (DCR = ১.২ Ω) মাল্টিমিটারে ১.১৮ Ω দেখাচ্ছে, কিন্তু LCR মিটারে ১০ kHz এ L = ০.৮৫ mH এবং Q = ১.৪ দেখাচ্ছে। ত্রুটিটি কী?'
      },
      solution: {
        en: `Diagnosis: Inter-Turn Short Circuit (Shorted Turns)!
Explanation:
- The DMM only checks DC copper resistance. A short between a few turns reduces resistance by only 0.02 Ω (well within normal component tolerance), masking the fault.
- However, the shorted turns form a closed secondary loop that acts as a short-circuited transformer winding, destroying the coil's effective inductance (collapsed from 10 mH to 0.85 mH) and ruining its Quality Factor (Q dropped to 1.4 due to massive eddy current dissipation).
- Action: Discard and replace the defective inductor.`,
        hi: `निदान: फेरों का आंतरिक शॉर्ट सर्किट (Inter-Turn Short)!
स्पष्टीकरण: DMM में कुछ फेरे शॉर्ट होने पर भी प्रतिरोध लगभग समान दिखता है। लेकिन LCR मीटर में इंडक्टेंस 10 mH से घटकर 0.85 mH रह गया और Q-फैक्टर नष्ट हो गया।
कार्रवाई: इंडक्टर को बदलें।`,
        bn: `রোগ নির্ণয়: ইন্টার-টার্ন শর্ট সার্কিট (Inter-Turn Short)!
ব্যাখ্যা: মাল্টিমিটার দিয়ে ডিসি রোধ ঠিক মনে হলেও ভেতরের কয়েকটি প্যাঁচ পরস্পরের সাথে শর্ট হয়ে ট্রান্সফরমারের মতো কাজ করে ইন্ডাক্ট্যান্স ধ্বংস করেছে (১০ mH থেকে ০.৮৫ mH) এবং Q-ফ্যাক্টর নষ্ট করেছে।
পদক্ষেপ: ইন্ডাক্টরটি বাতিল করে নতুন লাগাতে হবে।`
      }
    }
  ],
  quiz: [
    {
      question: {
        en: 'Why is a Ring Tester or LCR meter far superior to a standard DC Ohmmeter for diagnosing defective flyback transformers and SMPS inductors?',
        hi: 'दोषपूर्ण ट्रांसफॉर्मर और SMPS इंडक्टर की जांच के लिए रिंग टेस्टर या LCR मीटर साधारण मल्टीमीटर से कहीं बेहतर क्यों है?',
        bn: 'নষ্ট এসএমপিএস ইন্ডাক্টর বা ফ্লাইব্যাক ট্রান্সফরমার পরীক্ষার জন্য সাধারণ ওহমমিটারের চেয়ে রিং টেস্টার বা LCR মিটার কেন বহুগুণে শ্রেষ্ঠ?'
      },
      options: {
        en: ['Because a DC ohmmeter cannot detect a single shorted turn that collapses the coil Q-factor and magnetic field', 'Because LCR meters are cheaper than multimeters', 'Because inductors do not have DC resistance', 'Because multimeters cannot measure current'],
        hi: ['क्योंकि DC ओहममीटर केवल एक शॉर्ट फेरे को नहीं पकड़ सकता जो पूरी कुंडली के Q-फैक्टर और चुंबकीय क्षेत्र को समाप्त कर देता है', 'क्योंकि LCR मीटर सस्ते होते हैं', 'क्योंकि इंडक्टर में कोई प्रतिरोध नहीं होता', 'क्योंकि मल्टीमीटर धारा नहीं मापते'],
        bn: ['কারণ ডিসি ওহমমিটার একটিমাত্র শর্ট প্যাঁচ ধরতে পারে না যা কয়েলের সমগ্র Q-ফ্যাক্টর ও চৌম্বক ক্রিয়া ধ্বংস করে দেয়', 'কারণ LCR মিটার দামে সস্তা', 'কারণ ইন্ডাক্টরে কোনো রোধ থাকে না', 'কারণ মাল্টিমিটার কারেন্ট মাপতে পারে না']
      },
      correctAnswer: 0,
      explanation: {
        en: 'A single shorted turn will heavily damp resonant oscillation and ruin AC performance while showing almost zero change on a DC resistance meter.',
        hi: 'केवल एक शॉर्ट फेरा भी दोलन को समाप्त कर देता है जबकि DC प्रतिरोध में कोई खास बदलाव नहीं दिखता।',
        bn: 'একটিমাত্র শর্ট প্যাঁচ এসি পারফরম্যান্স ও রেজোন্যান্স সম্পূর্ণ নষ্ট করে দেয় অথচ ডিসি রোধে কোনো পরিবর্তন ধরা পড়ে না।'
      }
    }
  ],
  flashcards: [
    {
      term: {
        en: 'Ring Testing',
        hi: 'रिंग परीक्षण (Ring Testing)',
        bn: 'রিং টেস্টিং'
      },
      definition: {
        en: 'A fast diagnostic method that pulses an inductor to detect shorted turns by observing the decay of resonant ringing oscillations.',
        hi: 'अनुनाद दोलन क्षय को देखकर शॉर्ट फेरों का पता लगाने की तीव्र परीक्षण विधि।',
        bn: 'রেজোন্যান্স তরঙ্গের ক্ষয় পর্যবেক্ষণ করে ইন্ডাক্টরের শর্ট প্যাঁচ শনাক্ত করার দ্রুত ডায়াগনস্টিক পদ্ধতি।'
      }
    }
  ]
};
