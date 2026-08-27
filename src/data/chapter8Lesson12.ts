import { Lesson } from '../types';

export const LESSON_INDUCTIVE_KICK_FLYBACK: Lesson = {
  id: 'lsn-ch8-inductive-kick-flyback',
  topicId: 'ch8-inductive-kick-flyback',
  chapterId: 'ch-inductors',
  order: 12,
  title: {
    en: 'Inductive Kick, Flyback Spikes & Freewheeling Diodes',
    hi: 'इंडक्टिव किक, फ्लाईबैक वोल्टेज स्पाइक एवं फ्रीव्हीलिंग डायोड',
    bn: 'ইন্ডাক্টিভ কিক, ফ্লাইব্যাক ভোল্টেজ স্পাইক ও ফ্রিহুইলিং ডায়োড'
  },
  description: {
    en: 'Physics of inductive kickback voltage spikes (v = -L di/dt), contact arcing, destruction of driver MOSFETs/transistors, freewheeling/flyback protection diodes, and RC/MOV snubber circuits.',
    hi: 'इंडक्टिव किकबैक वोल्टेज स्पाइक (v = -L di/dt) का भौतिक सिद्धांत, स्विच संपर्कों में चिंगारी (Arcing), ट्रांजिस्टर/MOSFET का विनाश, फ्रीव्हीलिंग डायोड सुरक्षा एवं स्नबर परिपथ।',
    bn: 'ইন্ডাক্টিভ কিক ভোল্টেজ স্পাইক (v = -L di/dt) এর কারণ, সুইচে আর্কিং, ড্রাইভার মসফেট/ট্রানজিস্টর ধ্বংস হওয়া রোধ, ফ্রিহুইলিং ফ্লাইব্যাক ডায়োড ও স্নাবার সার্কিট।'
  },
  easyExplanation: {
    en: 'If you suddenly cut the wire to a spinning high-pressure water pipe, water hammer will burst the pipe! Similarly, if you abruptly open a switch powering a relay coil or motor, the collapsing magnetic field creates a huge reverse voltage spike—often hundreds or thousands of volts—that can vaporize driver transistors. Adding a simple reverse diode (freewheeling diode) gives this energy a safe path to circulate and decay harmlessly!',
    hi: 'यदि आप अचानक बहते हुए पानी के पाइप को बंद कर दें, तो जल आघात (Water Hammer) पाइप को फोड़ देता है! इसी तरह, जब आप किसी रिले कुंडली या मोटर के स्विच को अचानक खोलते हैं, तो तेजी से ढहता चुंबकीय क्षेत्र सैकड़ों या हजारों वोल्ट का एक विशाल बैक-स्पाइक पैदा करता है जो ट्रांजिस्टर को जला सकता है। एक फ्रीव्हीलिंग डायोड इस ऊर्जा को सुरक्षित रूप से समाप्त होने का रास्ता देता है!',
    bn: 'উচ্চচাপের পানির পাইপ হঠাৎ বন্ধ করলে যেমন পাইপ ফেটে যাওয়ার উপক্রম হয় (Water Hammer), তেমনই কোনো রিলে কয়েল বা মোটরের সুইচ হঠাৎ অফ করলে কোরের চৌম্বক ক্ষেত্র ভেঙে পড়ে শত শত বা হাজার ভোল্টের একটি তীব্র ব্যাক-স্পাইক (Inductive Kick) তৈরি করে। একটি ফ্রিহুইলিং ডায়োড যুক্ত করলে এই অতিরিক্ত শক্তি নিরাপদে ডিসচার্জ হয়ে যায়!'
  },
  detailedExplanation: {
    en: `1. The Origin of Inductive Kickback (Flyback):
When current I_0 flowing through an inductor L is suddenly interrupted in a very short time interval dt (e.g., dt ≈ 1 to 10 microseconds as a transistor turns off):
The induced voltage spike is:
v_spike = -L · (di / dt) = -L · (-I_0 / dt) = +L · (I_0 / dt)

Example:
For a modest 100 mH relay coil carrying 2 A, if switched off in 1 μs:
v_spike = 0.100 H × (2 A / 10⁻⁶ s) = 200,000 Volts!
In reality, air breaks down across the opening switch contacts (visible electrical arc), or the driver MOSFET/transistor exceeds its breakdown voltage (V_DSS) and undergoes permanent silicon destruction.

2. The Freewheeling Diode (Flyback / Catch Diode) Protection:
To protect semiconductor switches and relay driver circuits, a fast-recovery diode (e.g., 1N4007 or Schottky 1N5819) is connected in ANTI-PARALLEL directly across the inductive load:
- During Normal ON State:
  The DC supply reverse-biases the diode (diode is OFF, zero current). Current flows freely through the inductive coil.
- At Turn-OFF (Switch Opens):
  The collapsing magnetic field forces the inductor to act as a temporary generator, reversing its terminal polarity (bottom becomes positive, top becomes negative).
  This forward-biases the freewheeling diode!
  The stored magnetic energy (1/2 L I²) circulates through the closed diode-coil loop and safely dissipates as harmless heat across the coil's internal resistance (R_coil).

3. Trade-off: Relay Release Time:
A standard diode clamps the flyback voltage to ≈ 0.7 V, but this results in a longer decay time constant (τ = L / R_coil), causing slow relay contact release.
- Solution for Fast Drop-out:
  Zener diode in series with flyback diode (clamps voltage to V_z + 0.7 V for fast energy dissipation without exceeding transistor breakdown rating).

4. AC Inductive Snubbers:
For AC inductive loads (contactors, AC solenoids, motors) where a unidirectional DC diode cannot be used:
- RC Snubber: A series resistor and capacitor (e.g., 100 Ω + 0.1 μF) placed across the switch contacts or coil.
- Metal Oxide Varistor (MOV): Clamps transient overvoltages bidirectionally.`,
    hi: `1. इंडक्टिव किकबैक का कारण:
जब धारा I को स्विच द्वारा अति सूक्ष्म समय dt में काटा जाता है:
v_spike = L · (di / dt)
यह वोल्टेज सैकड़ों/हजारों वोल्ट तक पहुँचकर स्विचिंग ट्रांजिस्टर या MOSFET को जला सकती है।

2. फ्रीव्हीलिंग डायोड (Freewheeling Diode) सुरक्षा:
इंडक्टर के समानांतर उल्टी दिशा (Anti-parallel) में एक डायोड लगाया जाता है:
- स्विच ऑन होने पर: डायोड रिवर्स बायस (बंद) रहता है।
- स्विच ऑफ होने पर: इंडक्टर की उल्टी पोलैरिटी डायोड को फॉरवर्ड बायस कर देती है, जिससे ऊर्जा कुंडली के भीतर ही सुरक्षित रूप से समाप्त हो जाती है।

3. एसी लोड के लिए स्नबर (RC Snubber / MOV):
एसी रिले में डायोड के स्थान पर RC स्नबर या वेरिस्टर (MOV) का उपयोग किया जाता है।`,
    bn: `১. ইন্ডাক্টিভ কিকের কারণ:
সুইচ বন্ধ করার সময় অতি ক্ষুদ্র সময় dt তে কারেন্ট বন্ধ হলে:
v_spike = L · (di / dt)
এই আকস্মিক ভোল্টেজ কয়েক হাজার ভোল্ট পর্যন্ত উঠে ড্রাইভার ট্রানজিস্টর বা মসফেটকে পুড়িয়ে ফেলতে পারে।

২. ফ্রিহুইলিং ডায়োড সুরক্ষা:
ইন্ডাক্টরের সাথে অ্যান্টি-প্যারালালে একটি ডায়োড যুক্ত করা হয়:
- সুইচ অন থাকা অবস্থায়: ডায়োড রিভার্স বায়াসে বন্ধ থাকে।
- সুইচ অফ করার মুহূর্তে: ইন্ডাক্টরের উল্টো পোলারিটি ডায়োডকে ফরওয়ার্ড বায়াস করে, ফলে সঞ্চিত শক্তি ডায়োডের মাধ্যমে ঘুরে নিরাপদে অপসারিত হয়।

৩. এসি সার্কিটে স্নাবার (RC Snubber / MOV):
এসি লোডে ডায়োড ব্যবহার করা যায় না বলে RC স্নাবার বা ভ্যারিস্টর (MOV) ব্যবহৃত হয়।`
  },
  formulas: [
    {
      expression: 'v_{spike} = L \\cdot \\frac{\\Delta I}{\\Delta t}',
      description: {
        en: 'Inductive kickback peak voltage magnitude during current interruption',
        hi: 'धारा रुकावट के दौरान इंडक्टिव किकबैक पीक वोल्टेज',
        bn: 'কারেন্ট বিচ্ছিন্নকালে ইন্ডাক্টিভ কিকব্যাক পিক ভোল্টেজ'
      }
    }
  ],
  workedExamples: [
    {
      problem: {
        en: 'A 24 V DC solenoid valve has an inductance of 500 mH and coil resistance 48 Ω. When the driving transistor switches off in 500 nanoseconds without a flyback diode, estimate the theoretical open-circuit voltage spike. How does a 1N4007 flyback diode protect the circuit?',
        hi: '24 V सोलेनोइड वॉल्व (L = 500 mH, R = 48 Ω) का ट्रांजिस्टर बिना डायोड के 500 ns में ऑफ होता है। सैद्धांतिक वोल्टेज स्पाइक क्या होगा? 1N4007 डायोड कैसे सुरक्षा करता है?',
        bn: '২৪ V ডিসি সলিনয়েড ভালভের ইন্ডাক্ট্যান্স ৫০০ mH ও কয়েল রোধ ৪৮ Ω। ডায়োডবিহীন অবস্থায় ড্রাইভিং ট্রানজিস্টর ৫০০ ns এ বন্ধ হলে তাত্ত্বিক ভোল্টেজ স্পাইক কত হবে? একটি 1N4007 ডায়োড কীভাবে নিরাপত্তা দেয়?'
      },
      solution: {
        en: `Step 1: Calculate steady-state current prior to turn-off:
I_0 = V_supply / R = 24 V / 48 Ω = 0.50 Amperes.

Step 2: Calculate unsuppressed inductive kick spike:
Δt = 500 ns = 500 × 10⁻⁹ s = 0.5 × 10⁻⁶ s
v_spike = L · (ΔI / Δt) = 0.500 H × (0.50 A / 0.5 × 10⁻⁶ s) = 500,000 Volts!
This extreme spike will instantly destroy the switching transistor.

Step 3: Protection mechanism of Freewheeling Diode:
With a 1N4007 diode across the coil, the instant the transistor opens, the voltage across the transistor is safely clamped to:
V_collector = V_supply + V_diode_forward = 24 V + 0.7 V = 24.7 Volts.
The transistor is 100% protected!`,
        hi: `चरण 1: स्थायी धारा I_0 = 24 / 48 = 0.5 A
चरण 2: स्पाइक v = 0.500 × (0.5 / 500×10⁻⁹) = 500,000 वोल्ट!
चरण 3: फ्रीव्हीलिंग डायोड लगाने पर वोल्टेज सुरक्षित रूप से 24 V + 0.7 V = 24.7 V पर क्लैंप हो जाती है।`,
        bn: `ধাপ ১: কারেন্ট I_0 = ২৪ / ৪৮ = ০.৫ A
ধাপ ২: স্পাইক v = ০.৫০০ × (০.৫ / ৫০০×১০⁻⁹) = ৫০০,০০০ ভোল্ট!
ধাপ ৩: ফ্রিহুইলিং ডায়োড যুক্ত করলে ট্রানজিস্টরের ভোল্টেজ ২৪ V + ০.৭ V = ২৪.৭ V এ নিরাপদে সীমাবদ্ধ (ক্ল্যাম্প) থাকে।`
      }
    }
  ],
  quiz: [
    {
      question: {
        en: 'How should a flyback/freewheeling protection diode be connected relative to a DC relay coil and its power supply?',
        hi: 'DC रिले कुंडली एवं पावर सप्लाई के सापेक्ष फ्लाईबैक/फ्रीव्हीलिंग सुरक्षा डायोड को कैसे जोड़ा जाना चाहिए?',
        bn: 'একটি ডিসি রিলে কয়েল ও পাওয়ার সাপ্লাইয়ের সাথে ফ্রিহুইলিং প্রোটেকশন ডায়োড কীভাবে সংযুক্ত করতে হয়?'
      },
      options: {
        en: ['In series with the power supply', 'In anti-parallel across the relay coil (Cathode to positive supply, Anode to ground/collector)', 'In parallel with the AC mains input', 'In series with the transistor emitter'],
        hi: ['पावर सप्लाई के श्रेणी में', 'रिले कुंडली के समानांतर विपरीत दिशा में (कैथोड धनात्मक सप्लाई से, एनोड ग्राउंड से)', 'मेन इनपुट के समानांतर', 'ट्रांजिस्टर उत्सर्जक के श्रेणी में'],
        bn: ['পাওয়ার সাপ্লাইয়ের সাথে সিরিজে', 'রিলে কয়েলের সমান্তরালে বিপরীতমুখী করে (ক্যাথোড পজিটিভে, অ্যানোড গ্রাউন্ড/কালেক্টরে)', 'মেইন ইনপুটের সমান্তরালে', 'ট্রানজিস্টরের সাথে সিরিজে']
      },
      correctAnswer: 1,
      explanation: {
        en: 'The diode is connected in anti-parallel (cathode to +VCC, anode to switch) so it is normally reverse-biased, turning ON only when the coil produces a reverse-polarity inductive spike.',
        hi: 'डायोड को एंटी-पैरेलल में जोड़ा जाता है ताकि सामान्य अवस्था में यह बंद रहे और स्विच ऑफ होने पर स्पाइक को ग्राउंड कर सके।',
        bn: 'ডায়োডকে অ্যান্টি-প্যারালালে যুক্ত করা হয় যাতে স্বাভাবিক অবস্থায় এটি বন্ধ থাকে এবং কেবল সুইচ অফকালে আবিষ্ট স্পাইককে ডিসচার্জ করে।'
      }
    }
  ],
  flashcards: [
    {
      term: {
        en: 'Freewheeling Diode',
        hi: 'फ्रीव्हीलिंग डायोड',
        bn: 'ফ্রিহুইলিং ডায়োড'
      },
      definition: {
        en: 'A diode placed across an inductive load to clamp inductive kick voltage spikes and protect driver transistors.',
        hi: 'इंडक्टिव लोड के समानांतर लगाया गया डायोड जो वोल्टेज स्पाइक को रोककर ट्रांजिस्टर की रक्षा करता है।',
        bn: 'ইন্ডাক্টিভ লোডের সমান্তরালে যুক্ত ডায়োড যা ব্যাক-স্পাইক ভোল্টেজ প্রতিহত করে ট্রানজিস্টরকে রক্ষা করে।'
      }
    }
  ]
};
