import { Lesson } from '../types';

export const LESSON_STATICALLY_INDUCED_EMF: Lesson = {
  id: 'lsn-ch10-statically-induced-emf',
  topicId: 'ch10-statically-induced-emf',
  chapterId: 'ch-em-induction',
  order: 5,
  title: {
    en: 'Statically Induced EMF — Transformer Action & Stationary Coils',
    hi: 'स्थैतिक रूप से प्रेरित ईएमएफ — ट्रांसफॉर्मर क्रिया एवं स्थिर कुंडलियां',
    bn: 'স্থিতিশীলভাবে আবিষ্ট ইএমএফ — ট্রান্সফরমার ক্রিয়া ও স্থির কয়েল'
  },
  description: {
    en: 'Examine statically induced EMF produced in stationary conductors and coils by time-varying magnetic flux. Study Faraday’s law e = -N dΦ/dt, Lenz’s opposition, transformer core coupling, sinusoidal excitation mathematics, derivation of the Transformer EMF Equation (E_rms = 4.44·f·N·Φ_m), self vs mutual classification, and key engineering distinctions from motional EMF.',
    hi: 'समय के साथ बदलते चुंबकीय फ्लक्स द्वारा स्थिर चालकों एवं कुंडलियों में उत्पन्न स्थैतिक प्रेरित ईएमएफ का अध्ययन। फैराडे का नियम e = -N dΦ/dt, लेंज का विरोध, ट्रांसफॉर्मर कोर कपलिंग, ज्यावक्रीय उत्तेजन गणित, ट्रांसफॉर्मर ईएमएफ समीकरण (E_rms = 4.44·f·N·Φ_m) का निगमन, स्व एवं अन्योन्य वर्गीकरण तथा गतिक ईएमएफ से मुख्य अंतर।',
    bn: 'সময়-পরিবর্তনশীল চৌম্বক ফ্লাক্স দ্বারা স্থির পরিবাহী ও কয়েলে উৎপন্ন স্থিতিশীল আবিষ্ট ইএমএফ-এর বিশদ অধ্যয়ন। ফ্যারাডের সূত্র e = -N dΦ/dt, লেনজের বাধা, ট্রান্সফরমার কোর কাপলিং, সাইনোসয়ডাল উত্তেজনা গণিত, ট্রান্সফরমার ইএমএফ সমীকরণ (E_rms = ৪.৪৪·f·N·Φ_m) প্রতিপাদন, স্ব ও পারস্পরিক আবেশ এবং মোশনাল ইএমএফ-এর সাথে সুস্পষ্ট পার্থক্য।'
  },
  estimatedMinutes: 30,
  easyExplanation: {
    en: "Think of an electrical transformer sitting on a utility pole. It has zero moving parts, no spinning shafts, and makes no mechanical noise. Yet, it transfers thousands of volts across isolated coils effortlessly! How? Statically Induced EMF. Instead of moving the wire through a magnet, we keep the wire completely still and change the magnetic field back and forth using alternating current (AC). Because the magnetic flux inside the iron core changes continuously with time, an electromotive force is induced in the secondary coil without a single millimeter of physical movement!",
    hi: 'सड़क किनारे लगे बिजली के ट्रांसफॉर्मर की कल्पना कीजिए। उसमें कोई घूमने वाला पहिया या मोटर नहीं है और न ही कोई पुर्जा हिलता है। फिर भी वह हजारों वोल्ट बिजली को एक कुंडली से दूसरी कुंडली में भेज देता है! यह कैसे होता है? स्थैतिक रूप से प्रेरित ईएमएफ (Statically Induced EMF) द्वारा। यहां तार को चुंबक में हिलाने के बजाय तार को पूरी तरह स्थिर रखा जाता है और प्रत्यावर्ती धारा (AC) द्वारा चुंबकीय क्षेत्र को समय के साथ लगातार बदला जाता है। इस बदलते फ्लक्स से बिना किसी हलचल के वोल्टेज पैदा हो जाता है!',
    bn: 'রাস্তার ধারের বৈদ্যুতিক ট্রান্সফরমারের কথা ভাবুন। এতে কোনো ঘূর্ণনশীল অংশ নেই, কোনো মোটর নেই। তবুও এটি এক কয়েল থেকে অন্য কয়েলে হাজার হাজার ভোল্টেজ স্থানান্তর করে! এটি কীভাবে সম্ভব? স্থিতিশীলভাবে আবিষ্ট ইএমএফ (Statically Induced EMF)-এর মাধ্যমে। তারকে না নাড়িয়ে স্থির রাখা হয় এবং এসি কারেন্টের মাধ্যমে চৌম্বক ক্ষেত্রকে প্রতিনিয়ত পরিবর্তন করা হয়। লোহার কোরের ভেতরে সময়ের সাথে ফ্লাক্স পরিবর্তনের ফলেই সেকেন্ডারি কয়েলে কোনো শারীরিক গতি ছাড়াই ভোল্টেজ আবিষ্ট হয়!'
  },
  detailedExplanation: {
    en: `1. Definition of Statically Induced EMF:
Statically Induced EMF is the electromotive force induced in a stationary conducting loop or coil due to a time-varying magnetic flux linkage (dΦ/dt ≠ 0) without any physical or mechanical movement of the conductor or magnetic core.

2. Fundamental Classification of Induced EMF:
All electromagnetic induction in electrical engineering divides into two distinct physical regimes:
- (A) Dynamically (Motional) Induced EMF: Conductor moves (velocity v > 0) in a stationary magnetic field (dB/dt = 0). Principle of Generators & Alternators.
- (B) Statically Induced EMF: Conductor is stationary (v = 0) and is linked by a time-varying magnetic flux (dΦ/dt ≠ 0). Principle of Transformers, Inductors & Chokes.

3. Sub-Classification of Statically Induced EMF:
Statically induced EMF is subdivided into two fundamental categories:
- 1. Self-Induced EMF: The EMF induced in a coil when the current flowing through THAT SAME coil changes with time. Governed by self-inductance L (e_s = -L di/dt).
- 2. Mutually Induced EMF: The EMF induced in a secondary coil when the current in an adjacent primary coil changes with time, coupling magnetic flux across their mutual core. Governed by mutual inductance M (e_m = -M di₁/dt).

4. Faraday's Law & The Negative Sign:
For a stationary coil of N closely coupled turns linking magnetic flux Φ(t):
    e(t) = - N · \\frac{d\\Phi(t)}{dt}
- The derivative dΦ/dt represents the time rate of change of magnetic flux in Webers per second.
- The negative sign represents Lenz's Law: the induced EMF creates an opposing potential that acts to drive a current whose own magnetic flux opposes the initiating change in primary flux.

5. Sinusoidal Magnetic Flux Excitation & Phase Relationship:
In AC systems operating at frequency f (Hz) and angular frequency ω = 2πf (rad/s), the magnetic flux varies sinusoidally:
    Φ(t) = Φ_m · sin(ωt)
Taking the time derivative:
    dΦ/dt = ω · Φ_m · cos(ωt)
Substituting into Faraday's equation:
    e(t) = - N · (ω · Φ_m · cos(ωt))
Using trigonometric identity -cos(θ) = sin(θ - 90°):
    e(t) = N · ω · Φ_m · sin(ωt - 90°) = E_m · sin(ωt - 90°)
Conclusion: In a pure inductor or transformer coil, the statically induced EMF lags the alternating magnetic flux by exactly 90° (π/2 radians) in phase!

6. Derivation of the Universal Transformer EMF Equation:
- Peak induced voltage: E_m = N · ω · Φ_m = 2 · π · f · N · Φ_m
- Since 2π ≈ 6.28318, E_m = 6.28318 · f · N · Φ_m
- The Root-Mean-Square (RMS) value for a pure sinusoidal waveform is E_rms = E_m / √2:
    E_rms = \\frac{2 · π · f · N · Φ_m}{\\sqrt{2}} = \\sqrt{2} · π · f · N · Φ_m
- Since √2 · π = 1.41421 × 3.14159 = 4.44288 ≈ 4.44:
    E_rms = 4.44 · f · N · Φ_m  (The Fundamental Transformer Equation)

7. Primary vs Secondary Voltage Ratio in Transformers:
In an ideal two-winding transformer with primary turns N₁ and secondary turns N₂ linking common core flux Φ_m:
    E₁ = 4.44 · f · N₁ · Φ_m
    E₂ = 4.44 · f · N₂ · Φ_m
Dividing the two equations gives the ideal voltage transformation ratio:
    \\frac{E₁}{E₂} = \\frac{N₁}{N₂} = a`,

    hi: `1. स्थैतिक रूप से प्रेरित ईएमएफ की परिभाषा:
जब किसी स्थिर चालक अथवा कुंडली में समय के साथ बदलते चुंबकीय फ्लक्स (dΦ/dt ≠ 0) के कारण बिना किसी भौतिक गति के ईएमएफ उत्पन्न होता है, तो उसे "स्थैतिक रूप से प्रेरित ईएमएफ" (Statically Induced EMF) कहते हैं।

2. प्रेरित ईएमएफ का मौलिक वर्गीकरण:
- (A) गतिक (Motional) EMF: चालक गतिमान (v > 0), चुंबकीय क्षेत्र स्थिर (dB/dt = 0)। उदाहरण: जनरेटर।
- (B) स्थैतिक EMF: चालक स्थिर (v = 0), चुंबकीय फ्लक्स समय के साथ परिवर्तनशील (dΦ/dt ≠ 0)। उदाहरण: ट्रांसफॉर्मर।

3. स्थैतिक ईएमएफ के दो प्रकार:
- 1. स्व-प्रेरित ईएमएफ (Self-Induced EMF): उसी कुंडली की अपनी धारा बदलने पर उत्पन्न ईएमएफ (e = -L di/dt)।
- 2. अन्योन्य प्रेरित ईएमएफ (Mutually Induced EMF): प्राथमिक कुंडली की धारा बदलने से द्वितीयक कुंडली में उत्पन्न ईएमएफ (e = -M di₁/dt)।

4. ज्यावक्रीय फ्लक्स एवं कला संबंध:
यदि फ्लक्स Φ(t) = Φ_m sin(ωt) हो, तो:
    e(t) = -N · dΦ/dt = -N · ω · Φ_m · cos(ωt) = E_m sin(ωt - 90°)
अतः प्रेरित ईएमएफ फ्लक्स से कला में 90° पश्चगामी (lagging) होता है।

5. ट्रांसफॉर्मर ईएमएफ समीकरण का निगमन:
- शिखर मान: E_m = 2π f N Φ_m
- आरएमएस मान: E_rms = E_m / √2 = (2π / √2) f N Φ_m = 4.44 · f · N · Φ_m।`,

    bn: `১. স্থিতিশীলভাবে আবিষ্ট ইএমএফ-এর সংজ্ঞা:
কোনো কয়েল বা পরিবাহী সম্পূর্ণ স্থির থাকা অবস্থায় সময়ের সাথে পরিবর্তনশীল চৌম্বক ফ্লাক্সের (dΦ/dt ≠ ০) কারণে যে ইএমএফ আবিষ্ট হয় তাকে "স্থিতিশীলভাবে আবিষ্ট ইএমএফ" (Statically Induced EMF) বলে। এতে পরিবাহী বা কোরের কোনো শারীরিক গতির প্রয়োজন হয় না।

২. দুই প্রকার স্থিতিশীল আবেশ:
- ১. স্ব-আবিষ্ট ইএমএফ (Self-Induced EMF): কয়েলের নিজস্ব কারেন্ট পরিবর্তনের কারণে সেই কয়েলেই আবিষ্ট ইএমএফ (e = -L di/dt)।
- ২. পারস্পরিক আবিষ্ট ইএমএফ (Mutually Induced EMF): প্রাথমিক কয়েলের কারেন্ট পরিবর্তনের কারণে পাশের সেকেন্ডারি কয়েলে আবিষ্ট ইএমএফ (e = -M di₁/dt)।

৩. সাইনোসয়ডাল ফ্লাক্স ও ফেজ পার্থক্য:
- ফ্লাক্স Φ(t) = Φ_m sin(ωt) হলে:
    e(t) = -N dΦ/dt = -N ω Φ_m cos(ωt) = E_m sin(ωt - ৯০°)
- সুতরাং আবিষ্ট ইএমএফ চৌম্বক ফ্লাক্সের তুলনায় ঠিক ৯০° ফেজে পিছিয়ে থাকে।

৪. ট্রান্সফরমার ইএমএফ সমীকরণ প্রতিপাদন:
- পিক মান E_m = ২π f N Φ_m
- আরএমএস মান E_rms = E_m / √২ = ৪.৪৪ · f · N · Φ_m।`
  },
  formulas: [
    {
      id: 'eq-static-faraday',
      expression: 'e(t) = - N · \\frac{d\\Phi}{dt}',
      description: {
        en: 'Faraday’s law for statically induced EMF in a stationary coil of N turns linking time-varying flux Φ(t).',
        hi: 'N फेरों वाली स्थिर कुंडली में समय-परिवर्तनशील फ्लक्स के कारण स्थैतिक प्रेरित ईएमएफ का फैराडे सूत्र।',
        bn: 'N সংখ্যক প্যাঁচ বিশিষ্ট স্থির কয়েলে পরিবর্তনশীল ফ্লাক্স দ্বারা স্থিতিশীল আবিষ্ট ইএমএফ-এর ফ্যারাডে সূত্র।'
      },
      variables: [
        { symbol: 'e(t)', name: { en: 'Instantaneous Induced EMF (Volts, V)', hi: 'तात्कालिक प्रेरित EMF (वोल्ट)', bn: 'তাৎক্ষণিক আবিষ্ট EMF (ভোল্ট)' } },
        { symbol: 'N', name: { en: 'Number of turns in the coil', hi: 'कुंडली के फेरों की संख्या', bn: 'কয়েলের প্যাঁচ সংখ্যা' } },
        { symbol: 'dΦ/dt', name: { en: 'Time rate of change of magnetic flux (Wb/s)', hi: 'फ्लक्स परिवर्तन की समय दर (Wb/s)', bn: 'ফ্লাক্স পরিবর্তনের সময় হার (Wb/s)' } }
      ]
    },
    {
      id: 'eq-transformer-rms-emf',
      expression: 'E_{rms} = 4.44 · f · N · \\Phi_m',
      description: {
        en: 'Universal Transformer RMS Induced EMF equation for sinusoidal magnetic flux excitation.',
        hi: 'ज्यावक्रीय फ्लक्स उत्तेजन के लिए ट्रांसफॉर्मर आरएमएस प्रेरित ईएमएफ का सार्वभौमिक सूत्र।',
        bn: 'সাইনোসয়ডাল ফ্লাক্স উত্তেজনার জন্য সার্বজনীন ট্রান্সফরমার আরএমএস আবিষ্ট ইএমএফ সমীকরণ।'
      },
      variables: [
        { symbol: 'E_{rms}', name: { en: 'Root-Mean-Square Induced Voltage (Volts, V)', hi: 'आरएमएस प्रेरित वोल्टेज (वोल्ट)', bn: 'আরএমএস আবিষ্ট ভোল্টেজ (ভোল্ট)' } },
        { symbol: 'f', name: { en: 'AC Supply Frequency (Hertz, Hz)', hi: 'प्रत्यावर्ती आपूर्ति आवृत्ति (हर्ट्ज़)', bn: 'এসি সরবরাহ ফ্রিকোয়েন্সি (হার্টজ)' } },
        { symbol: 'N', name: { en: 'Number of winding turns', hi: 'वाइंडिंग के फेरे', bn: 'ওয়াইন্ডিং প্যাঁচ সংখ্যা' } },
        { symbol: 'Φ_m', name: { en: 'Maximum core flux amplitude (Webers, Wb)', hi: 'अधिकतम क्रोड फ्लक्स (वेबर)', bn: 'সর্বোচ্চ কোর ফ্লাক্স (ওয়েবার)' } }
      ]
    },
    {
      id: 'eq-turn-ratio',
      expression: '\\frac{E_1}{E_2} = \\frac{N_1}{N_2} = a',
      description: {
        en: 'Voltage transformation ratio for a two-winding transformer.',
        hi: 'दो वाइंडिंग ट्रांसफॉर्मर के लिए वोल्टेज रूपांतरण अनुपात।',
        bn: 'দ্বি-ওয়াইন্ডিং ট্রান্সফরমারের ভোল্টেজ রূপান্তর অনুপাত।'
      },
      variables: [
        { symbol: 'E_1, E_2', name: { en: 'Primary and Secondary RMS EMFs (V)', hi: 'प्राथमिक एवं द्वितीयक आरएमएस ईएमएफ (V)', bn: 'প্রাইমারি ও সেকেন্ডারি আরএমএস ইএমএফ (V)' } },
        { symbol: 'N_1, N_2', name: { en: 'Primary and Secondary coil turns', hi: 'प्राथमिक एवं द्वितीयक कुंडली फेरे', bn: 'প্রাইমারি ও সেকেন্ডারি কয়েল প্যাঁচ' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-static-vs-dynamic-table',
      title: {
        en: 'Engineering Comparison: Static vs Dynamic Induction',
        hi: 'इंजीनियरिंग तुलना: स्थैतिक बनाम गतिक प्रेरण',
        bn: 'প্রকৌশলগত তুলনা: স্থিতিশীল বনাম গতিশীল আবেশ'
      },
      content: {
        en: `Comprehensive Structural Comparison:
1. Physical Condition:
   - Dynamic: Conductor moves across static magnetic field (v > 0, dB/dt = 0).
   - Static: Conductor and magnetic core are stationary (v = 0, dB/dt ≠ 0).
2. Mathematical Formula:
   - Dynamic: e = B · l · v · sin(θ).
   - Static: e = -N · (dΦ / dt).
3. Primary Device:
   - Dynamic: DC Generators, AC Alternators.
   - Static: Transformers, Induction Coils, Filtering Chokes.
4. Phase Angle:
   - Dynamic: In phase with spatial velocity v.
   - Static: 90° lagging behind magnetic flux Φ(t).`,
        hi: `तुलनात्मक विश्लेषण:
1. भौतिक स्थिति:
   - गतिक: चालक चुंबकीय क्षेत्र में गति करता है (v > 0, dB/dt = 0)।
   - स्थैतिक: चालक व कोर पूर्णतः स्थिर रहते हैं (v = 0, dB/dt ≠ 0)।
2. गणितीय सूत्र:
   - गतिक: e = B · l · v · sin(θ)।
   - स्थैतिक: e = -N · (dΦ / dt)।
3. प्रमुख उपकरण:
   - गतिक: डीसी जनरेटर, एसी अल्टरनेटर।
   - स्थैतिक: ट्रांसफॉर्मर, इंडक्शन कॉइल।
4. कला संबंध:
   - स्थैतिक EMF फ्लक्स से 90° पश्चगामी होता है।`,
        bn: `কাঠামোগত তুলনা:
১. শারীরিক অবস্থা:
   - গতিশীল: পরিবাহী চৌম্বক ক্ষেত্রে গতিশীল (v > ০, dB/dt = ০)।
   - স্থিতিশীল: পরিবাহী ও কোর সম্পূর্ণ স্থির (v = ০, dB/dt ≠ ০)।
২. গাণিতিক সূত্র:
   - গতিশীল: e = B · l · v · sin(θ)।
   - স্থিতিশীল: e = -N · (dΦ / dt)।
৩. প্রধান যন্ত্র:
   - গতিশীল: ডিসি জেনারেটর, এসি অল্টারনেটর।
   - স্থিতিশীল: ট্রান্সফরমার, ইন্ডাকশন কয়েল।
৪. ফেজ কোণ:
   - স্থিতিশীল EMF ফ্লাক্সের চেয়ে ৯০° পিছিয়ে থাকে।`
      },
      schematicId: 'circuit-ch10-statically-induced-emf',
      keyEquations: ['e = -N \\frac{d\\Phi}{dt}', 'E_{rms} = 4.44 f N \\Phi_m']
    }
  ],
  diagrams: [
    {
      id: 'diag-statically-induced-emf',
      title: {
        en: 'Statically Induced EMF in Transformer Core & Stationary Windings',
        hi: 'ट्रांसफॉर्मर क्रोड एवं स्थिर वाइंडिंग में स्थैतिक प्रेरित ईएमएफ',
        bn: 'ট্রান্সফরমার কোর ও স্থির ওয়াইন্ডিংয়ে স্থিতিশীল আবিষ্ট ইএমএফ'
      },
      caption: {
        en: 'Stationary primary and secondary coils linked by time-varying magnetic core flux inducing transformer EMF e = -N·dΦ/dt.',
        hi: 'समय-परिवर्तनशील कोर फ्लक्स से जुड़ी स्थिर प्राथमिक एवं द्वितीयक कुंडलियां जिनमें ट्रांसफॉर्मर EMF उत्पन्न होता है।',
        bn: 'সময়-পরিবর্তনশীল কোর ফ্লাক্স দ্বারা সংযুক্ত স্থির প্রাইমারি ও সেকেন্ডারি কয়েলে ট্রান্সফরমার ইএমএফ সৃষ্টি।'
      },
      svgType: 'circuit-ch10-statically-induced-emf'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-stat-1',
      problem: {
        en: 'A 50 Hz single-phase transformer has 400 primary turns and 100 secondary turns. The maximum magnetic flux in the core is 0.045 Wb. Calculate: (a) The RMS voltage induced in the primary winding (E₁). (b) The RMS voltage induced in the secondary winding (E₂). (c) The volts per turn of the transformer.',
        hi: '50 Hz एकल-फेज ट्रांसफॉर्मर में 400 प्राथमिक फेरे और 100 द्वितीयक फेरे हैं। क्रोड में अधिकतम चुंबकीय फ्लक्स 0.045 वेबर है। गणना कीजिए: (a) प्राथमिक वाइंडिंग में प्रेरित आरएमएस वोल्टेज (E₁), (b) द्वितीयक वाइंडिंग में प्रेरित आरएमएस वोल्टेज (E₂), (c) प्रति फेरा वोल्टेज।',
        bn: 'একটি ৫০ হার্টজ সিঙ্গেল-ফেজ ট্রান্সফরমারে ৪০০টি প্রাইমারি প্যাঁচ ও ১০০টি সেকেন্ডারি প্যাঁচ আছে। কোরে সর্বোচ্চ ফ্লাক্স ০.০৪৫ ওয়েবার। নির্ণয় করো: (ক) প্রাইমারি ওয়াইন্ডিংয়ে আবিষ্ট আরএমএস ভোল্টেজ (E₁), (খ) সেকেন্ডারি ওয়াইন্ডিংয়ে আবিষ্ট আরএমএস ভোল্টেজ (E₂), (গ) প্রতি প্যাঁচে ভোল্টেজ।'
      },
      givenValues: {
        'f': '50 Hz',
        'N₁': '400 turns',
        'N₂': '100 turns',
        'Φ_m': '0.045 Wb'
      },
      solution: {
        en: `Step 1: Calculate Primary RMS Induced EMF (E₁)
Formula: E₁ = 4.44 · f · N₁ · Φ_m
E₁ = 4.44 × 50 Hz × 400 × 0.045 Wb
E₁ = 4.44 × 50 × 18 = 3,996.0 Volts (≈ 4.0 kV).

Step 2: Calculate Secondary RMS Induced EMF (E₂)
Formula: E₂ = 4.44 · f · N₂ · Φ_m
E₂ = 4.44 × 50 Hz × 100 × 0.045 Wb
E₂ = 4.44 × 50 × 4.5 = 999.0 Volts (≈ 1.0 kV).

Step 3: Calculate Volts Per Turn (E / N)
Volts/Turn = E₁ / N₁ = 3,996 V / 400 = 9.99 V/turn
(Check with secondary: E₂ / N₂ = 999 V / 100 = 9.99 V/turn).`,
        hi: `चरण 1: प्राथमिक आरएमएस ईएमएफ (E₁) की गणना
सूत्र: E₁ = 4.44 · f · N₁ · Φ_m
E₁ = 4.44 × 50 × 400 × 0.045 = 3996.0 वोल्ट।

चरण 2: द्वितीयक आरएमएस ईएमएफ (E₂) की गणना
सूत्र: E₂ = 4.44 · f · N₂ · Φ_m
E₂ = 4.44 × 50 × 100 × 0.045 = 999.0 वोल्ट।

चरण 3: प्रति फेरा वोल्टेज
Volts/Turn = 3996 / 400 = 9.99 वोल्ट/फेरा।`,
        bn: `ধাপ ১: প্রাইমারি আরএমএস ইএমএফ (E₁) নির্ণয়
সূত্র: E₁ = ৪.৪৪ · f · N₁ · Φ_m
E₁ = ৪.৪৪ × ৫০ × ৪০০ × ০.০৪৫ = ৩৯৯৬.০ ভোল্ট।

ধাপ ২: সেকেন্ডারি আরএমএস ইএমএফ (E₂) নির্ণয়
সূত্র: E₂ = ৪.৪৪ · f · N₂ · Φ_m
E₂ = ৪.৪৪ × ৫০ × ১০০ × ০.০৪৫ = ৯৯৯.০ ভোল্ট।

ধাপ ৩: প্রতি প্যাঁচে ভোল্টেজ
Volts/Turn = ৩৯৯৬ / ৪০০ = ৯.৯৯ ভোল্ট/প্যাঁচ।`
      },
      finalAnswer: {
        en: '(a) Primary EMF E₁ = 3996 V, (b) Secondary EMF E₂ = 999 V, (c) Volts/turn = 9.99 V/turn',
        hi: '(a) प्राथमिक EMF E₁ = 3996 V, (b) द्वितीयक EMF E₂ = 999 V, (c) प्रति फेरा वोल्टेज = 9.99 V/turn',
        bn: '(ক) প্রাইমারি EMF E₁ = ৩৯৯৬ V, (খ) সেকেন্ডারি EMF E₂ = ৯৯৯ V, (গ) প্রতি প্যাঁচে ভোল্টেজ = ৯.৯৯ V/প্যাঁচ'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Substation Power Transformers: Step up grid transmission voltages to 400kV/765kV to minimize I²R losses, and step down to 230V/415V for consumer distribution with >99% efficiency.',
      'Smartphone Fast Chargers: Switched-mode high-frequency isolation transformers operate at 100 kHz, allowing compact ferrite cores to step down rectified mains to 5V/9V/20V USB-PD rails.',
      'Induction Cooktops: High-frequency alternating flux penetrates the ferromagnetic bottom of cookware, statically inducing high-density eddy currents that heat the pot directly with zero flame.',
      'Potential & Current Transformers (PT & CT): Instrument transformers step down high grid voltages and kiloamperes safely for measurement by standard 110V voltmeters and 5A ammeters.',
      'Wireless EV & Qi Phone Charging: Stationary primary coil in charging pad couples alternating magnetic flux through air gap into receiver coil in vehicle chassis.'
    ],
    hi: [
      'सबस्टेशन पावर ट्रांसफॉर्मर: ट्रांसमिशन हानियों को कम करने के लिए वोल्टेज को 400kV तक बढ़ाना और उपभोक्ताओं के लिए 230V तक घटाना।',
      'स्मार्टफोन फास्ट चार्जर: 100 kHz पर काम करने वाले उच्च-आवृत्ति ट्रांसफॉर्मर कॉम्पैक्ट आकार में सुरक्षित डीसी सप्लाई देते हैं।',
      'इंडक्शन कुकटॉप्स (Induction Cooktops): बदलते फ्लक्स से बर्तन के तले में एडी धाराएं उत्पन्न कर बिना आग के खाना पकाना।',
      'मापन ट्रांसफॉर्मर (PT और CT): ग्रिड के भारी वोल्टेज और करंट को सुरक्षित रूप से मापने योग्य स्तरों पर लाना।',
      'वायरलेस चार्जिंग पैड: स्थिर कुंडलियों के बीच चुंबकीय फ्लक्स द्वारा बिना तार के मोबाइल और इलेक्ट्रिक वाहन चार्ज करना।'
    ],
    bn: [
      'সাবস্টেশন পাওয়ার ট্রান্সফরমার: বিদ্যুৎ সঞ্চালনে অপচয় কমাতে ভোল্টেজ ৪০০kV-তে বৃদ্ধি এবং বিতরণে ২৩০V-এ নামিয়ে আনা।',
      'স্মার্টফোন ফাস্ট চার্জার: ১০০ kHz ফ্রিকোয়েন্সিতে চালিত ক্ষুদ্র ট্রান্সফরমার দিয়ে নিরাপদ ৫V/৯V ডিসি সরবরাহ।',
      'ইন্ডাকশন চুলা: পরিবর্তনশীল ফ্লাক্স দ্বারা রান্নার পাত্রের তলায় এডি কারেন্ট তৈরি করে দ্রুত ও নিরাপদ তাপ উৎপাদন।',
      'ইন্সট্রুমেন্ট ট্রান্সফরমার (PT ও CT): গ্রিডের অতি-উচ্চ ভোল্টেজ ও কারেন্ট নিরাপদে পরিমাপের ব্যবস্থা করা।',
      'ওয়্যারলেস চার্জিং প্রযুক্তি: স্থির কয়েলের মাঝে চৌম্বক ফ্লাক্সের সাহায্যে তারবিহীন মোবাইল ও ইভি চার্জিং।'
    ]
  },
  importantPoints: {
    en: [
      'Statically induced EMF does NOT require mechanical motion of conductors or magnets.',
      'It is generated exclusively by time-varying magnetic flux linkages: e = -N (dΦ/dt).',
      'For sinusoidal AC excitation, induced EMF lags magnetic flux by exactly 90° in phase.',
      'The transformer equation E_rms = 4.44 · f · N · Φ_m applies universally to all AC stationary electromagnetic devices.',
      'Volts per turn (E/N) is identical in all windings wound on the same magnetic core.'
    ],
    hi: [
      'स्थैतिक प्रेरित ईएमएफ के लिए चालक या चुंबक की किसी भी प्रकार की यांत्रिक गति आवश्यक नहीं है।',
      'यह केवल समय के साथ बदलते फ्लक्स लिंकेज द्वारा उत्पन्न होता है: e = -N (dΦ/dt)।',
      'ज्यावक्रीय एसी उत्तेजन में प्रेरित ईएमएफ फ्लक्स से कला में ठीक 90° पश्चगामी होता है।',
      'ट्रांसफॉर्मर सूत्र E_rms = 4.44 · f · N · Φ_m सभी एसी स्थिर विद्युत-चुंबकीय उपकरणों पर लागू होता है।',
      'एक ही कोर पर लिपटी सभी वाइंडिंग्स में प्रति फेरा वोल्टेज (E/N) समान रहता है।'
    ],
    bn: [
      'স্থিতিশীল আবিষ্ট ইএমএফ সৃষ্টির জন্য কোনো পরিবাহী বা চুম্বকের শারীরিক গতির প্রয়োজন নেই।',
      'এটি সম্পূর্ণভাবে সময়-পরিবর্তনশীল চৌম্বক ফ্লাক্সের ওপর নির্ভরশীল: e = -N (dΦ/dt)।',
      'সাইন তরঙ্গের ক্ষেত্রে আবিষ্ট ইএমএফ চৌম্বক ফ্লাক্সের চেয়ে ৯০° ফেজে পিছিয়ে থাকে।',
      'ট্রান্সফরমার সমীকরণ E_rms = ৪.৪৪ · f · N · Φ_m সকল এসি স্থির যন্ত্রে প্রযোজ্য।',
      'একই কোরে স্থাপিত সকল ওয়াইন্ডিংয়ে প্রতি প্যাঁচে ভোল্টেজ (E/N) সর্বদা সমান হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Believing a transformer can step up pure DC voltage: Pure DC produces constant flux (dΦ/dt = 0), so statically induced EMF is identically zero and will burn out the winding due to lack of inductive back-EMF.',
      'Confusing the origin of constant 4.44: The factor 4.44 comes from 4 × Form Factor (where Form Factor for sinusoid is 1.11, giving 4 × 1.11 = 4.44) or equivalently √2 · π.',
      'Assuming higher frequency reduces induced EMF: E_rms is directly proportional to frequency f. Higher frequency produces higher induced EMF for the same peak core flux.',
      'Thinking primary and secondary voltages are in phase with core flux: Induced EMF is in quadrature (90° phase shift) with core flux.'
    ],
    hi: [
      'डीसी पर ट्रांसफॉर्मर काम करने की गलतफहमी: शुद्ध डीसी में dΦ/dt = 0 होता है, जिससे कोई EMF उत्पन्न नहीं होता और वाइंडिंग जल सकती है।',
      '4.44 गुणांक में भ्रम: 4.44 वास्तव में 4 × 1.11 (फॉर्म फैक्टर) अथवा √2 · π से आता है।',
      'आवृत्ति बढ़ने से EMF कम होना समझना: EMF आवृत्ति f के सीधे आनुपातिक होता है।',
      'ईएमएफ को फ्लक्स के समान कला में मानना: प्रेरित EMF फ्लक्स से 90° पीछे होता है।'
    ],
    bn: [
      'ডিসি সাপ্লাইয়ে ট্রান্সফরমার চলবে ভাবা: বিশুদ্ধ ডিসিতে dΦ/dt = ০ হওয়ায় কোনো EMF আবিষ্ট হয় না এবং কয়েল পুড়ে যায়।',
      '৪.৪৪ গুণক সম্পর্কে ভুল ধারণা: ৪.৪৪ আসে ৪ × ১.১১ (ফর্ম ফ্যাক্টর) বা √২ · π থেকে।',
      'ফ্রিকোয়েন্সি বৃদ্ধিতে EMF কমে যাওয়া ভাবা: E_rms ফ্রিকোয়েন্সির সাথে সরাসরি সমানুপাতিক।',
      'ইএমএফ ও ফ্লাক্স একই ফেজে আছে মনে করা: আবিষ্ট ইএমএফ ফ্লাক্সের সাথে ৯০° ফেজ কোণে থাকে।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-stat-1',
      question: {
        en: 'Why is statically induced EMF generated in a transformer without any physical motion?',
        hi: 'ट्रांसफॉर्मर में बिना किसी भौतिक गति के स्थैतिक प्रेरित ईएमएफ क्यों उत्पन्न होता है?',
        bn: 'কোনো শারীরিক গতি ছাড়াই ট্রান্সফরমারে স্থিতিশীল আবিষ্ট ইএমএফ কেন সৃষ্টি হয়?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Due to electrostatic friction between winding wires', hi: 'वाइंडिंग तारों के बीच स्थिरवैद्युत घर्षण के कारण', bn: 'ওয়াইন্ডিং তারের মাঝে ঘর্ষণের কারণে' } },
        { id: 'opt-b', text: { en: 'Due to time-varying alternating magnetic flux in the core (dΦ/dt ≠ 0)', hi: 'क्रोड में समय-परिवर्तनशील प्रत्यावर्ती चुंबकीय फ्लक्स (dΦ/dt ≠ 0) के कारण', bn: 'কোরে সময়-পরিবর্তনশীল এসি চৌম্বক ফ্লাক্সের (dΦ/dt ≠ ০) কারণে' } },
        { id: 'opt-c', text: { en: 'Due to chemical reactions inside insulating oil', hi: 'इंसुलेटिंग तेल में रासायनिक अभिक्रियाओं के कारण', bn: 'তেলের রাসায়নিক বিক্রিয়ার কারণে' } },
        { id: 'opt-d', text: { en: 'Due to permanent magnetic charge accumulation', hi: 'स्थायी चुंबकीय आवेश संचयन के कारण', bn: 'স্থায়ী চৌম্বক চার্জ জমার কারণে' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Statically induced EMF is governed by Faraday’s law e = -N (dΦ/dt). Because the AC supply continuously modulates the magnetic flux amplitude with time, flux linkage changes without requiring mechanical motion.',
        hi: 'स्थैतिक ईएमएफ फैराडे के नियम e = -N (dΦ/dt) पर आधारित है। एसी धारा के कारण फ्लक्स लगातार समय के साथ बदलता रहता है।',
        bn: 'স্থিতিশীল ইএমএফ ফ্যারাডের সূত্র e = -N (dΦ/dt) দ্বারা নিয়ন্ত্রিত। এসি কারেন্ট কোরের ফ্লাক্সের মান প্রতিনিয়ত পরিবর্তন করায় কোনো গতির প্রয়োজন হয় না।'
      }
    },
    {
      id: 'mcq-stat-2',
      question: {
        en: 'For a sinusoidal magnetic flux Φ(t) = Φ_m sin(ωt), the phase relationship of the induced EMF e(t) is:',
        hi: 'ज्यावक्रीय चुंबकीय फ्लक्स Φ(t) = Φ_m sin(ωt) के लिए प्रेरित ईएमएफ e(t) का कला संबंध क्या है?',
        bn: 'সাইনোসয়ডাল ফ্লাক্স Φ(t) = Φ_m sin(ωt) এর ক্ষেত্রে আবিষ্ট ইএমএফ e(t) এর ফেজ সম্পর্ক কী?'
      },
      options: [
        { id: 'opt-a', text: { en: 'In phase with flux (0° shift)', hi: 'फ्लक्स के समान कला में (0°)', bn: 'ফ্লাক্সের সাথে একই ফেজে (০°)' } },
        { id: 'opt-b', text: { en: 'Lags the magnetic flux by 90°', hi: 'फ्लक्स से 90° पश्चगामी (lagging)', bn: 'ফ্লাক্সের চেয়ে ৯০° পিছিয়ে থাকে (ল্যাগিং)' } },
        { id: 'opt-c', text: { en: 'Leads the magnetic flux by 90°', hi: 'फ्लक्स से 90° अग्रगामी (leading)', bn: 'ফ্লাক্সের চেয়ে ৯০° এগিয়ে থাকে (লিডিং)' } },
        { id: 'opt-d', text: { en: '180° out of phase at all times', hi: 'सदैव 180° विपरीत कला में', bn: 'সর্বদা ১৮০° বিপরীত ফেজে' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Since e(t) = -N (dΦ/dt) = -N ω Φ_m cos(ωt) = E_m sin(ωt - 90°), the induced EMF lags the magnetic flux by 90° in phase.',
        hi: 'e(t) = -N dΦ/dt = E_m sin(ωt - 90°) होने के कारण प्रेरित EMF फ्लक्स से 90° पश्चगामी (lagging) होता है।',
        bn: 'e(t) = -N dΦ/dt = E_m sin(ωt - ৯০°) সমীকরণ অনুযায়ী আবিষ্ট ইএমএফ ফ্লাক্সের তুলনায় ৯০° ল্যাগিং অবস্থায় থাকে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-stat-1',
      question: {
        en: 'Explain why a transformer designed for 50 Hz operation cannot be directly connected to a DC supply of the same voltage rating.',
        hi: 'स्पष्ट कीजिए कि 50 Hz पर काम करने वाले ट्रांसफॉर्मर को उसी वोल्टेज की डीसी सप्लाई से सीधे क्यों नहीं जोड़ा जा सकता।',
        bn: 'ব্যাখ্যা করো কেন ৫০ হার্টজ ট্রান্সফরমারকে একই মানের ডিসি সাপ্লাইয়ের সাথে সরাসরি যুক্ত করা যায় না।'
      },
      hint: {
        en: 'Consider dΦ/dt for DC and the resistance of the primary winding.',
        hi: 'डीसी के लिए dΦ/dt तथा प्राथमिक वाइंडिंग के प्रतिरोध पर विचार करें।',
        bn: 'ডিসির ক্ষেত্রে dΦ/dt এবং প্রাইমারি ওয়াইন্ডিংয়ের ওহমিক রোধ বিবেচনা করো।'
      },
      answerKey: {
        en: 'In a DC supply, current is steady and unchanging. Therefore, dΦ/dt = 0, and statically induced back-EMF e = -N(dΦ/dt) = 0. Without back-EMF to oppose the applied voltage, primary current is limited only by the extremely small winding resistance (R ≈ 0.1 to 1 Ω). This draws massive fault current (I = V/R), immediately overheating and destroying the transformer insulation.',
        hi: 'डीसी सप्लाई में धारा स्थिर रहती है जिससे dΦ/dt = 0 होता है और कोई विरोधी बैक-EMF उत्पन्न नहीं होता। इससे धारा केवल बहुत कम वाइंडिंग प्रतिरोध द्वारा सीमित होती है (I = V/R), जिससे अत्यधिक धारा बहने से ट्रांसफॉर्मर जल जाता है।',
        bn: 'ডিসি সাপ্লাইয়ে কারেন্ট স্থির থাকে, ফলে dΦ/dt = ০ হয় এবং কোনো আবিষ্ট ব্যাক-EMF তৈরি হয় না। ব্যাক-EMF না থাকায় অত্যন্ত কম ওয়াইন্ডিং রোধের কারণে অস্বাভাবিক উচ্চ কারেন্ট (I = V/R) প্রবাহিত হয়ে ট্রান্সফরমার সঙ্গে সঙ্গে পুড়ে নষ্ট হয়ে যাবে।'
      }
    }
  ]
};
