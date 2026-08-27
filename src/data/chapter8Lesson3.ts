import { Lesson } from '../types';

export const LESSON_FARADAYS_LAW_LENZ_LAW: Lesson = {
  id: 'lsn-ch8-faradays-law-lenz-law',
  topicId: 'ch8-faradays-law-lenz-law',
  chapterId: 'ch-inductors',
  order: 3,
  title: {
    en: 'Faraday\'s Laws of Induction & Lenz\'s Law',
    hi: 'फैराडे के विद्युतचुंबकीय प्रेरण के नियम एवं लेन्ज का नियम',
    bn: 'ফ্যারাডের তড়িচ্চুম্বকীয় আবেশের সূত্রাবলী ও লেঞ্জের সূত্র'
  },
  description: {
    en: 'Faraday\'s first and second laws of electromagnetic induction, mathematical derivation of induced EMF (e = -N dΦ/dt), Lenz\'s law of conservation of energy, dynamically vs statically induced EMF.',
    hi: 'फैराडे के विद्युतचुंबकीय प्रेरण के प्रथम एवं द्वितीय नियम, प्रेरित विद्युतवाहक बल (e = -N dΦ/dt) का निगमन, ऊर्जा संरक्षण पर आधारित लेन्ज का नियम, गतिक एवं स्थैतिक प्रेरित EMF।',
    bn: 'ফ্যারাডের তড়িচ্চুম্বকীয় আবেশের ১ম ও ২য় সূত্র, আবিষ্ট EMF (e = -N dΦ/dt) গাণিতিক প্রতিপাদন, শক্তি সংরক্ষণশীলতার লেঞ্জের সূত্র, গতিশীল ও স্থির আবিষ্ট EMF।'
  },
  easyExplanation: {
    en: 'When a magnet moves near a wire coil, or when the current through a coil changes, the changing magnetic flux creates a voltage across the coil. Lenz\'s law explains that this induced voltage will always fight back and push in the opposite direction to resist whatever caused the change!',
    hi: 'जब कोई चुंबक तार की कुंडली के पास गति करता है, या जब कुंडली में धारा बदलती है, तो बदलता चुंबकीय फ्लक्स कुंडली में वोल्टेज पैदा करता है। लेन्ज का नियम बताता है कि यह प्रेरित वोल्टेज हमेशा उस परिवर्तन का विरोध करने की दिशा में कार्य करता है जिसने इसे उत्पन्न किया!',
    bn: 'যখন কোনো চুম্বক একটি তারের কুণ্ডলীর কাছে গতিশীল হয় বা কয়েলের তড়িৎ প্রবাহ পরিবর্তিত হয়, তখন পরিবর্তনশীল চৌম্বক ফ্লাক্স কয়েলে ভোল্টেজ উৎপন্ন করে। লেঞ্জের সূত্র বলে যে এই আবিষ্ট ভোল্টেজ সর্বদা সেই পরিবর্তনের বিরোধিতা করে যার জন্য এটি সৃষ্টি হয়েছে!'
  },
  detailedExplanation: {
    en: `1. Faraday's First Law of Induction:
Whenever the magnetic flux linking with an electrical circuit or conductor changes over time, an Electromotive Force (EMF) is induced in the circuit. If the circuit is closed, an induced current flows.

2. Faraday's Second Law:
The magnitude of the induced EMF is directly proportional to the time rate of change of magnetic flux linkages (λ = N·Φ):
e ∝ d(N · Φ) / dt

3. Lenz's Law & The Negative Sign:
Formulated by Heinrich Lenz in 1834, Lenz's law states:
"The direction of the induced EMF and current is always such that its own magnetic field opposes the original change in magnetic flux that produced it."
Combining Faraday's and Lenz's laws:
e = -N · (dΦ / dt) [Volts]
The negative sign represents Lenz's opposition and guarantees the Conservation of Energy. If the sign were positive, perpetual motion would violate thermodynamics!

4. Statically Induced EMF vs Dynamically Induced EMF:
- Statically Induced EMF: Conductor and coil remain physically stationary; the magnetic field changes with time (AC transformers, inductors). Can be Self-Induced or Mutually Induced.
  e_static = -N · (dΦ / dt)
- Dynamically Induced EMF (Motional EMF): A conductor moves through a stationary magnetic field with velocity v (Generators, alternators).
  e_dynamic = B · L · v · sin(θ) [Volts]
  Direction given by Fleming's Right-Hand Rule (Thumb = Motion, Forefinger = Magnetic Field B, Middle finger = Induced Current I).

5. Magnetic Flux Linkage (λ):
λ = N · Φ [Weber-turns]
Therefore: e = -dλ / dt.`,
    hi: `1. फैराडे का प्रथम नियम:
जब भी किसी विद्युत परिपथ या कुंडली से संबद्ध चुंबकीय फ्लक्स में समय के साथ परिवर्तन होता है, तो परिपथ में एक प्रेरित विद्युतवाहक बल (EMF) उत्पन्न होता है।

2. फैराडे का द्वितीय नियम:
प्रेरित EMF का परिमाण फ्लक्स लिंकेज (N·Φ) में परिवर्तन की दर के सीधे समानुपाती होता है।

3. लेन्ज का नियम (Lenz's Law):
प्रेरित EMF एवं धारा की दिशा सदैव ऐसी होती है कि वह उस मूल कारण (फ्लक्स परिवर्तन) का विरोध करती है जिससे वह उत्पन्न हुई है:
e = -N · (dΦ / dt) [वोल्ट]
ऋणात्मक चिन्ह ऊर्जा संरक्षण नियम को दर्शाता है।

4. स्थैतिक एवं गतिक प्रेरित EMF:
- स्थैतिक प्रेरित EMF: चालक स्थिर रहता है तथा समय के साथ चुंबकीय फ्लक्स बदलता है (ट्रांसफॉर्मर, इंडक्टर)।
- गतिक प्रेरित EMF: स्थिर चुंबकीय क्षेत्र में v वेग से चालक गति करता है (जनरेटर):
  e = B · L · v · sin(θ) [वोल्ट] (फ्लेमिंग का दायां हाथ नियम)।`,
    bn: `১. ফ্যারাডের ১ম সূত্র:
যখনই কোনো কুণ্ডলী বা পরিবাহীর সাথে সংশ্লিষ্ট চৌম্বক ফ্লাক্সের পরিবর্তন ঘটে, তখনই পরিবাহীতে একটি তড়িচ্চালক বল (EMF) আবিষ্ট হয়।

২. ফ্যারাডের ২য় সূত্র:
আবিষ্ট EMF এর মান সংশ্লিষ্ট মোট ফ্লাক্স লিংকেজ (N·Φ) পরিবর্তনের সময়ের হারের সরাসরি সমানুপাতিক।

৩. লেঞ্জের সূত্র (Lenz's Law):
আবিষ্ট EMF বা তড়িৎ প্রবাহের অভিমুখ সর্বদা এমন হয় যেন এটি যে কারণে সৃষ্টি হয়েছে (ফ্লাক্সের পরিবর্তন), সেই কারণকেই বাধা প্রদান করে:
e = -N · (dΦ / dt) [ভোল্ট]
ঋণাত্মক চিহ্নটি শক্তির সংরক্ষণশীলতা নীতি প্রকাশ করে।

৪. স্থির ও গতিশীল আবিষ্ট EMF:
- স্থির আবিষ্ট EMF: তার ও কয়েল স্থির থাকে, কিন্তু সময়ের সাথে ফ্লাক্স পরিবর্তিত হয় (ট্রান্সফরমার, চোক)।
- গতিশীল আবিষ্ট EMF (Motional EMF): স্থির চৌম্বক ক্ষেত্রে v বেগে পরিবাহী গতিশীল হয় (জেনারেটর):
  e = B · L · v · sin(θ) [ভোল্ট] (ফ্লেমিংয়ের ডান হস্ত নিয়ম)।`
  },
  formulas: [
    {
      expression: 'e = -N · (dΦ / dt)',
      description: {
        en: 'Faraday-Lenz law of electromagnetic induction (Induced EMF)',
        hi: 'फैराडे-लेन्ज विद्युतचुंबकीय प्रेरण सूत्र',
        bn: 'ফ্যারাডে-লেঞ্জের তড়িচ্চুম্বকীয় আবেশ সূত্র'
      }
    },
    {
      expression: 'e = B · L · v · sin(θ)',
      description: {
        en: 'Dynamically induced motional EMF in a moving conductor',
        hi: 'गतिमान चालक में गतिक प्रेरित विद्युतवाहक बल',
        bn: 'গতিশীল পরিবাহীতে আবিষ্ট গতিশীল EMF'
      }
    }
  ],
  workedExamples: [
    {
      problem: {
        en: 'A 500-turn coil is linked with a magnetic flux of 8 mWb. If the flux is uniformly reversed to -8 mWb in a time span of 20 milliseconds, calculate the average induced EMF in the coil.',
        hi: '500 फेरों वाली कुंडली 8 mWb के चुंबकीय फ्लक्स से जुड़ी है। यदि फ्लक्स 20 मिलीसेकंड में एकसमान रूप से उलटकर -8 mWb हो जाता है, तो कुंडली में औसत प्रेरित EMF की गणना करें।',
        bn: '৫০০ পাক বিশিষ্ট একটি কয়েলে ৮ mWb চৌম্বক ফ্লাক্স রয়েছে। যদি ২০ মিলি-সেকেন্ডে ফ্লাক্স সুষমভাবে বিপরীতমুখী হয়ে -৮ mWb হয়, তবে কয়েলে গড় আবিষ্ট EMF নির্ণয় করো।'
      },
      solution: {
        en: `Step 1: Calculate total change in flux (dΦ):
Initial flux Φ1 = +8 mWb = +0.008 Wb
Final flux Φ2 = -8 mWb = -0.008 Wb
dΦ = Φ2 - Φ1 = -0.008 - (+0.008) = -0.016 Wb (-16 mWb)

Step 2: Calculate time interval dt:
dt = 20 ms = 0.020 seconds

Step 3: Apply Faraday's Law:
e = -N · (dΦ / dt) = -500 × (-0.016 Wb / 0.020 s)
e = -500 × (-0.8) = +400 Volts.`,
        hi: `चरण 1: फ्लक्स में कुल परिवर्तन dΦ:
dΦ = (-8 mWb) - (+8 mWb) = -16 mWb = -0.016 Wb
dt = 20 ms = 0.02 s

चरण 2: फैराडे नियम लागू करें:
e = -N · (dΦ/dt) = -500 × (-0.016 / 0.02) = +400 Volt.`,
        bn: `ধাপ ১: ফ্লাক্সের মোট পরিবর্তন dΦ:
dΦ = (-৮ mWb) - (+৮ mWb) = -১৬ mWb = -০.০১৬ Wb
dt = ২০ ms = ০.০২ সেকেন্ড

ধাপ ২: ফ্যারাডের সূত্র প্রয়োগ:
e = -N · (dΦ/dt) = -৫০০ × (-০.০১৬ / ০.০২) = +৪০০ ভোল্ট।`
      }
    }
  ],
  quiz: [
    {
      question: {
        en: 'Lenz\'s law is a direct consequence of which fundamental physical law?',
        hi: 'लेन्ज का नियम किस मूलभूत भौतिक नियम का प्रत्यक्ष परिणाम है?',
        bn: 'লেঞ্জের সূত্রটি কোন মৌলিক পদার্থবিজ্ঞান নীতির সরাসরি পরিণতি?'
      },
      options: {
        en: ['Conservation of Electric Charge', 'Conservation of Energy', 'Conservation of Linear Momentum', 'Newton\'s Gravitational Law'],
        hi: ['विद्युत आवेश का संरक्षण', 'ऊर्जा का संरक्षण', 'रेखीय संवेग का संरक्षण', 'न्यूटन का गुरुत्वाकर्षण नियम'],
        bn: ['তড়িৎ আধানের সংরক্ষণশীলতা', 'শক্তির সংরক্ষণশীলতা', 'রৈখিক ভরবেগের সংরক্ষণশীলতা', 'নিউটনের মহাকর্ষ সূত্র']
      },
      correctAnswer: 1,
      explanation: {
        en: 'Lenz\'s law enforces conservation of energy: mechanical work must be done against the opposing magnetic force to generate electrical energy.',
        hi: 'लेन्ज का नियम ऊर्जा संरक्षण सुनिश्चित करता है: विद्युत ऊर्जा उत्पन्न करने के लिए विरोधी चुंबकीय बल के विरुद्ध यांत्रिक कार्य करना पड़ता है।',
        bn: 'লেঞ্জের সূত্র শক্তির সংরক্ষণশীলতা নিশ্চিত করে: বিদ্যুৎ শক্তি উৎপন্ন করতে বিরোধী চৌম্বক বলের বিরুদ্ধে যান্ত্রিক কাজ সম্পন্ন করতে হয়।'
      }
    }
  ],
  flashcards: [
    {
      term: {
        en: 'Faraday-Lenz Law',
        hi: 'फैराडे-लेन्ज नियम',
        bn: 'ফ্যারাডে-লেঞ্জ সূত্র'
      },
      definition: {
        en: 'e = -N (dΦ/dt). Induced voltage equals negative turns times rate of magnetic flux change.',
        hi: 'e = -N (dΦ/dt)। प्रेरित वोल्टेज फ्लक्स परिवर्तन की ऋणात्मक दर के समानुपाती होता है।',
        bn: 'e = -N (dΦ/dt)। আবিষ্ট ভোল্টেজ ফ্লাক্স পরিবর্তনের ঋণাত্মক হারের সমানুপাতিক।'
      }
    }
  ]
};
