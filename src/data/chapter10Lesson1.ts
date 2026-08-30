import { Lesson } from '../types';

export const LESSON_FARADAYS_LAWS_DISCOVERY: Lesson = {
  id: 'lsn-ch10-faradays-laws-discovery',
  topicId: 'ch10-faradays-laws-discovery',
  chapterId: 'ch-em-induction',
  order: 1,
  title: {
    en: 'Faraday’s Experiments & Laws of Electromagnetic Induction',
    hi: 'फैराडे के प्रयोग एवं विद्युत चुंबकीय प्रेरण के नियम',
    bn: 'ফ্যারাডের পরীক্ষা ও তড়িৎচুম্বকীয় আবেশের সূত্রসমূহ'
  },
  description: {
    en: "Explore Michael Faraday's historic 1831 discovery, magnetic flux linkages, the First and Second Laws of Induction, mathematical formulation e = -N dΦ/dt, and the physical significance of the negative sign.",
    hi: 'माइकल फैराडे की ऐतिहासिक 1831 की खोज, चुंबकीय फ्लक्स लिंकेज, प्रेरण के प्रथम एवं द्वितीय नियम, गणितीय सूत्र e = -N dΦ/dt तथा ऋणात्मक चिह्न के भौतिक महत्व का गहन अध्ययन।',
    bn: 'মাইকেল ফ্যারাডের ঐতিহাসিক ১৮৩১ সালের আবিষ্কার, চৌম্বক ফ্লাক্স লিংকেজ, আবেশের প্রথম ও দ্বিতীয় সূত্র, গাণিতিক রূপ e = -N dΦ/dt এবং ঋণাত্মক চিহ্নের ভৌত তাৎপর্যের বিশদ পাঠ।'
  },
  estimatedMinutes: 30,
  easyExplanation: {
    en: "Imagine electricity and magnetism as two dance partners. In 1820, Oersted showed electricity creates magnetism. In 1831, Michael Faraday discovered the reverse: whenever a magnetic field changes near a wire coil, it pushes electrons and generates an electromotive force (EMF)! If the magnet or coil stays still, nothing happens; it is the change in magnetic flux that creates electricity.",
    hi: 'कल्पना कीजिए कि विद्युत और चुंबकत्व आपस में जुड़े हुए हैं। 1820 में ओर्स्टेड ने दिखाया कि विद्युत धारा से चुंबकत्व बनता है। 1831 में माइकल फैराडे ने इसका उल्टा खोजा: जब भी किसी कुंडली के पास चुंबकीय क्षेत्र बदलता है, तो उसमें इलेक्ट्रॉनों पर दबाव बनता है और एक प्रेरित विद्युत वाहक बल (EMF) उत्पन्न होता है! यदि चुंबक स्थिर रहे तो कोई वोल्टेज नहीं बनता; केवल फ्लक्स में बदलाव ही बिजली पैदा करता है।',
    bn: 'বিদ্যুৎ ও চুম্বকত্ব পরস্পরের পরিপূরক। ১৮২০ সালে ওয়েরস্টেড দেখান যে বিদ্যুৎপ্রবাহ চুম্বকত্ব সৃষ্টি করে। ১৮৩১ সালে মাইকেল ফ্যারাডে এর বিপরীত ঘটনা আবিষ্কার করেন: যখনই কোনো পরিবাহী কয়েলের মধ্যে চৌম্বক ক্ষেত্রের পরিবর্তন ঘটে, তখনই কয়েলে ইলেকট্রন সঞ্চালিত হয়ে একটি আবিষ্ট তড়িৎচালক বল (EMF) সৃষ্টি হয়! চুম্বক স্থির থাকলে কোনো ভোল্টেজ উৎপন্ন হয় না; চৌম্বক ফ্লাক্সের পরিবর্তনই বিদ্যুৎ উৎপাদনের মূল কারণ।'
  },
  detailedExplanation: {
    en: `1. Historical Discovery & Faraday's Experiments (1831):
Michael Faraday conducted a series of pioneering experiments at the Royal Institution, London:
- Experiment 1 (Moving Magnet into Stationary Coil): When the North pole of a permanent bar magnet was pushed rapidly into a hollow copper solenoid connected to a sensitive center-zero galvanometer, the galvanometer needle deflected momentarily in one direction.
- Experiment 2 (Stationary Magnet Inside Coil): When the magnet was held completely stationary inside the coil (regardless of field strength), the galvanometer returned to zero, proving static magnetic fields induce zero EMF.
- Experiment 3 (Withdrawing Magnet from Coil): When the magnet was pulled out of the coil, the needle deflected in the exact opposite direction.
- Experiment 4 (Varying Motion Speed): Moving the magnet faster caused a significantly larger needle deflection.
- Experiment 5 (Mutual Induction with Two Coils): Switching on or off the DC current in a primary coil induced a transient voltage spike in an adjacent secondary coil wound on the same soft iron ring.

2. Fundamental Concepts:
- Magnetic Flux (Φ): The total number of magnetic lines of force passing through a surface. Φ = ∬ B · dA = B · A · cos(θ) [Webers, Wb].
- Flux Linkage (λ or ψ): When a magnetic flux Φ links through a coil of N turns, the total flux linkage is defined as:
  λ = N · Φ [Weber-turns, Wb-t].
- Rate of Change of Flux (dΦ/dt): The time derivative representing how quickly the magnetic flux through the loop changes in time [Wb/s or Volts].

3. Faraday's First Law of Electromagnetic Induction:
"Whenever the magnetic flux linking a closed or open conducting circuit changes with time, an electromotive force (EMF) is induced in the circuit. If the circuit is closed, an induced current flows through it as long as the flux change continues."

4. Faraday's Second Law of Electromagnetic Induction (Quantitative):
"The magnitude of the electromotive force (EMF) induced in a circuit is directly proportional to the time rate of change of magnetic flux linkages through the circuit."

Mathematically:
  e ∝ d(NΦ) / dt
In the SI unit system, the constant of proportionality is unity (1), giving:
  e = - N · (dΦ / dt)

5. Physical Significance of the Negative Sign:
The negative sign represents Lenz's Law (Heinrich Lenz, 1834), which is rooted directly in the Principle of Conservation of Energy. It signifies that the polarity of the induced EMF opposes the very change in magnetic flux that produces it.

6. Average vs Instantaneous Induced EMF:
- Instantaneous Induced EMF: e(t) = - N · (dΦ / dt)
- Average Induced EMF over a finite time interval Δt: e_avg = - N · (ΔΦ / Δt) = - N · [(Φ₂ - Φ₁) / (t₂ - t₁)]

7. Open-Circuit vs Closed-Circuit Induction:
- Open Circuit: Induced EMF exists across the open terminals (measurable as an open-circuit potential difference), but no current flows (I = 0).
- Closed Circuit: If a load resistance R is connected across the coil terminals, an induced current i = e / R flows through the circuit, transferring electrical power to the load.`,

    hi: `1. ऐतिहासिक पृष्ठभूमि एवं फैराडे के प्रयोग (1831):
माइकल फैराडे ने लंदन के रॉयल इंस्टीट्यूशन में कई ऐतिहासिक प्रयोग किए:
- प्रयोग 1: जब एक छड़ चुंबक के उत्तरी ध्रुव को गैल्वेनोमीटर से जुड़ी परिनालिका में तेजी से डाला गया, तो सुई में एक दिशा में विक्षेप हुआ।
- प्रयोग 2: जब चुंबक कुंडली के अंदर स्थिर रहा, तो विक्षेप शून्य हो गया। इससे सिद्ध हुआ कि स्थिर चुंबकीय क्षेत्र में ईएमएफ उत्पन्न नहीं होता।
- प्रयोग 3: जब चुंबक को बाहर निकाला गया, तो विक्षेप विपरीत दिशा में हुआ।
- प्रयोग 4: चुंबक की गति तेज करने पर विक्षेप (प्रेरित वोल्टेज) का मान बढ़ गया।

2. मूल अवधारणाएं:
- चुंबकीय फ्लक्स (Φ): किसी सतह से गुजरने वाली कुल चुंबकीय बल रेखाएं। मात्रक: वेबर (Wb)।
- फ्लक्स लिंकेज (λ): N फेरों वाली कुंडली के लिए कुल फ्लक्स लिंकेज λ = N · Φ (वेबर-टर्न)।
- फ्लक्स परिवर्तन की दर (dΦ/dt): समय के साथ फ्लक्स बदलने की गति (Wb/s = Volt)।

3. फैराडे का प्रथम नियम (गुणात्मक):
"जब भी किसी चालक परिपथ से संबद्ध चुंबकीय फ्लक्स में समय के साथ परिवर्तन होता है, तो परिपथ में एक प्रेरित विद्युत वाहक बल (EMF) उत्पन्न होता है। यदि परिपथ बंद है, तो उसमें प्रेरित धारा तब तक बहती है जब तक फ्लक्स बदलता रहता है।"

4. फैराडे का द्वितीय नियम (मात्रात्मक):
"कुंडली में प्रेरित ईएमएफ का परिमाण चुंबकीय फ्लक्स लिंकेज के परिवर्तन की समय दर के समानुपाती होता है।"
गणितीय रूप: e = - N · (dΦ / dt)

5. ऋणात्मक चिह्न का महत्व:
ऋणात्मक चिह्न लेंज के नियम (ऊर्जा संरक्षण सिद्धांत) को दर्शाता है। इसका अर्थ है कि प्रेरित ईएमएफ की ध्रुवता सदैव उस फ्लक्स परिवर्तन का विरोध करती है जिसके कारण वह उत्पन्न हुआ है।

6. औसत बनाम तात्कालिक ईएमएफ:
- तात्कालिक ईएमएफ: e = - N (dΦ/dt)
- औसत ईएमएफ: e_avg = - N (ΔΦ / Δt) = - N [(Φ₂ - Φ₁) / Δt]`,

    bn: `১. ঐতিহাসিক আবিষ্কার ও ফ্যারাডের পরীক্ষা (১৮৩১):
মাইকেল ফ্যারাডে লন্ডনের রয়্যাল ইনস্টিটিউশনে যুগান্তকারী পরীক্ষাগুলো পরিচালনা করেন:
- পরীক্ষা ১: একটি দণ্ড চুম্বকের উত্তর মেরুকে দ্রুত তারকুণ্ডলীতে প্রবেশ করালে গ্যালভানোমিটারের কাঁটা একদিকে বিক্ষিপ্ত হয়।
- পরীক্ষা ২: চুম্বকটি কয়েলের ভেতর স্থির থাকলে কোনো বিক্ষেপ হয় না (e = ০)।
- পরীক্ষা ৩: চুম্বকটি কয়েল থেকে বের করে আনলে কাঁটা বিপরীত দিকে বিক্ষিপ্ত হয়।
- পরীক্ষা ৪: গতিবেগ বৃদ্ধি করলে আবিষ্ট ভোল্টেজ আনুপাতিক হারে বৃদ্ধি পায়।

২. মৌলিক ধারণাসমূহ:
- চৌম্বক ফ্লাক্স (Φ): তলের মধ্য দিয়ে অতিক্রান্ত মোট চৌম্বক বলরেখা (ওয়েবার, Wb)।
- ফ্লাক্স লিংকেজ (λ): N পাকের কুণ্ডলীর ক্ষেত্রে মোট সংযুক্ত ফ্লাক্স λ = N · Φ (ওয়েবার-পাক)।
- ফ্লাক্স পরিবর্তনের হার (dΦ/dt): সময়ের সাপেক্ষে ফ্লাক্সের পরিবর্তনের গতিবেগ (ভোল্ট)।

৩. ফ্যারাডের প্রথম সূত্র (গুণগত সূত্র):
"যখনই কোনো বদ্ধ বা মুক্ত পরিবাহী কয়েলের সাথে জড়িত চৌম্বক ফ্লাক্সের পরিবর্তন ঘটে, তখনই কয়েলে একটি তড়িৎচালক বল (EMF) আবিষ্ট হয়। কয়েলটি বদ্ধ থাকলে এতে আবিষ্ট তড়িৎপ্রবাহ চলে যতক্ষণ ফ্লাক্সের পরিবর্তন বজায় থাকে।"

৪. ফ্যারাডের দ্বিতীয় সূত্র (পরিমাণগত সূত্র):
"কোনো কুণ্ডলীতে আবিষ্ট তড়িৎচালক বলের মান কুণ্ডলীর চৌম্বক ফ্লাক্স লিংকেজের পরিবর্তনের হারের সমানুপাতিক।"
গাণিতিক রূপ: e = - N · (dΦ / dt)

৫. ঋণাত্মক চিহ্নের ভৌত তাৎপর্য:
ঋণাত্মক চিহ্নটি লেনজের সূত্র এবং শক্তি সংরক্ষণ নীতির প্রতিফলন। এর অর্থ হলো আবিষ্ট ইএমএফ সর্বদা এমন অভিমুখে ক্রিয়া করে যা ফ্লাক্স পরিবর্তনের মূল কারণকে বাধা দেয়।`
  },
  formulas: [
    {
      id: 'f-faraday-flux-linkage',
      symbol: 'λ',
      expression: 'λ = N · Φ',
      title: {
        en: 'Magnetic Flux Linkage',
        hi: 'चुंबकीय फ्लक्स लिंकेज',
        bn: 'চৌম্বক ফ্লাক্স লিংকেজ'
      },
      description: {
        en: 'Total magnetic flux linked with a coil of N turns',
        hi: 'N फेरों वाली कुंडली से संबद्ध कुल चुंबकीय फ्लक्स लिंकेज',
        bn: 'N পাকসংখ্যা বিশিষ্ট কয়েলের সাথে মোট সংযুক্ত চৌম্বক ফ্লাক্স'
      },
      variables: [
        { symbol: 'λ', name: { en: 'Flux linkage (Wb-turns)', hi: 'फ्लक्स लिंकेज (वेबर-टर्न)', bn: 'ফ্লাক্স লিংকেজ (ওয়েবার-পাক)' } },
        { symbol: 'N', name: { en: 'Number of turns in coil', hi: 'कुंडली के फेरों की संख्या', bn: 'কয়েলের পাকসংখ্যা' } },
        { symbol: 'Φ', name: { en: 'Magnetic flux per turn (Wb)', hi: 'प्रति फेरा चुंबकीय फ्लक्स (वेबर)', bn: 'প্রতি পাকে চৌম্বক ফ্লাক্স (ওয়েবার)' } }
      ]
    },
    {
      id: 'f-faraday-second-law-instantaneous',
      symbol: 'e(t)',
      expression: 'e = - N · (dΦ / dt)',
      title: {
        en: "Faraday's Law (Instantaneous EMF)",
        hi: 'फैराडे का नियम (तात्कालिक ईएमएफ)',
        bn: 'ফ্যারাডের সূত্র (তাৎক্ষণিক ইএমএফ)'
      },
      description: {
        en: 'Instantaneous electromotive force induced by time-varying magnetic flux',
        hi: 'समय के साथ बदलते चुंबकीय फ्लक्स द्वारा प्रेरित तात्कालिक विद्युत वाहक बल',
        bn: 'সময়ের সাথে পরিবর্তনশীল চৌম্বক ফ্লাক্স দ্বারা আবিষ্ট তাৎক্ষণিক ইএমএফ'
      },
      variables: [
        { symbol: 'e', name: { en: 'Induced EMF (Volts, V)', hi: 'प्रेरित ईएमएफ (वोल्ट, V)', bn: 'আবিষ্ট ইএমএফ (ভোল্ট, V)' } },
        { symbol: 'N', name: { en: 'Number of coil turns', hi: 'कुंडली के फेरे', bn: 'কয়েলের পাকসংখ্যা' } },
        { symbol: 'dΦ/dt', name: { en: 'Time rate of flux change (Wb/s)', hi: 'फ्लक्स परिवर्तन की समय दर (Wb/s)', bn: 'ফ্লাক্স পরিবর্তনের সময় হার (Wb/s)' } }
      ]
    },
    {
      id: 'f-faraday-second-law-average',
      symbol: 'e_avg',
      expression: 'e_avg = - N · ((Φ₂ - Φ₁) / Δt)',
      title: {
        en: 'Average Induced EMF',
        hi: 'औसत प्रेरित ईएमएफ',
        bn: 'গড় আবিষ্ট ইএমএফ'
      },
      description: {
        en: 'Average EMF induced across a finite time duration Δt',
        hi: 'निश्चित समय अंतराल Δt में प्रेरित औसत विद्युत वाहक बल',
        bn: 'নির্দিষ্ট সময় ব্যবধান Δt-এ আবিষ্ট গড় ইএমএফ'
      },
      variables: [
        { symbol: 'e_avg', name: { en: 'Average Induced EMF (V)', hi: 'औसत प्रेरित ईएमएफ (V)', bn: 'গড় আবিষ্ট ইএমএফ (V)' } },
        { symbol: 'ΔΦ', name: { en: 'Change in magnetic flux (Wb)', hi: 'चुंबकीय फ्लक्स में परिवर्तन (Wb)', bn: 'চৌম্বক ফ্লাক্সের পরিবর্তন (Wb)' } },
        { symbol: 'Δt', name: { en: 'Time elapsed (seconds)', hi: 'लगा समय (सेकंड)', bn: 'অতিবাহিত সময় (সেকেন্ড)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-faraday-apparatus-derivation',
      title: {
        en: 'Step-by-Step Mathematical Derivation of Induced EMF',
        hi: 'प्रेरित ईएमएफ की चरणबद्ध गणितीय व्युत्पत्ति',
        bn: 'আবিষ্ট ইএমএফ-এর ধাপে ধাপে গাণিতিক প্রতিপাদন'
      },
      content: {
        en: `Consider a closed conducting loop enclosing a surface S in a time-varying magnetic field B(t).
1. The total magnetic flux passing through the loop surface is given by the surface integral:
   Φ(t) = ∬_S B(t) · dA

2. If the coil consists of N closely wound turns, the total flux linkage is:
   λ(t) = N · Φ(t) = N ∬_S B(t) · dA

3. According to Faraday's quantitative observation, the induced electromotive force around the perimeter line path C of the loop is:
   e = ∮_C E · dl = - dλ/dt = - N · (dΦ/dt)

4. Using Maxwell-Faraday's differential relation (Stokes' Theorem):
   ∮_C E · dl = ∬_S (∇ × E) · dA = - ∬_S (∂B/∂t) · dA
   Therefore, the point form is:
   ∇ × E = - ∂B/∂t

This proves that a time-varying magnetic field intrinsically generates a non-conservative, circulating electric field E that drives current through the conductor.`,
        hi: `समय के साथ बदलते चुंबकीय क्षेत्र B(t) में रखे N फेरों वाले लूप पर विचार करें:
1. सतह S से गुजरने वाला कुल फ्लक्स:
   Φ(t) = ∬_S B(t) · dA
2. कुल फ्लक्स लिंकेज:
   λ(t) = N · Φ(t)
3. फैराडे के नियम के अनुसार प्रेरित ईएमएफ:
   e = - dλ/dt = - N · (dΦ/dt)
4. मैक्सवेल-फैराडे अवकल समीकरण (स्टोक्स प्रमेय द्वारा):
   ∇ × E = - ∂B/∂t
यह सिद्ध करता है कि समय के साथ बदलता चुंबकीय क्षेत्र एक चक्रीय विद्युत क्षेत्र (E) उत्पन्न करता है जो चालकों में धारा प्रवाहित करता है।`,
        bn: `একটি পরিবর্তনশীল চৌম্বক ক্ষেত্র B(t)-এ অবস্থিত N পাকের কুণ্ডলীর জন্য:
১. মোট চৌম্বক ফ্লাক্স:
   Φ(t) = ∬_S B(t) · dA
২. মোট ফ্লাক্স লিংকেজ:
   λ(t) = N · Φ(t)
৩. আবিষ্ট তড়িৎচালক বল (EMF):
   e = - dλ/dt = - N · (dΦ/dt)
৪. ম্যাক্সওয়েল-ফ্যারাডের ব্যবকলনীয় সমীকরণ:
   ∇ × E = - ∂B/∂t
এটি প্রমাণ করে যে সময়ের সাথে পরিবর্তনশীল চৌম্বক ক্ষেত্র একটি ঘূর্ণনশীল বৈদ্যুতিক ক্ষেত্র E সৃষ্টি করে যা পরিবাহীতে তড়িৎপ্রবাহ সঞ্চালন করে।`
      },
      schematicId: 'circuit-ch10-faraday-induction-apparatus',
      keyEquations: [
        'Φ(t) = ∬ B · dA',
        'e = - N · (dΦ / dt)',
        '∇ × E = - ∂B / ∂t'
      ]
    }
  ],
  solvedExamples: [
    {
      id: 'ex-faraday-1',
      problem: {
        en: 'A coil having 500 turns is linked with an initial magnetic flux of 0.8 mWb. If the flux is uniformly reduced to 0.2 mWb in 0.05 seconds, calculate the average induced electromotive force (EMF) across the coil terminals.',
        hi: '500 फेरों वाली एक कुंडली से 0.8 mWb का प्रारंभिक चुंबकीय फ्लक्स संबद्ध है। यदि फ्लक्स 0.05 सेकंड में एकसमान रूप से घटकर 0.2 mWb हो जाता है, तो कुंडली के सिरों पर प्रेरित औसत विद्युत वाहक बल (EMF) की गणना कीजिए।',
        bn: '৫০০ পাকের একটি কয়েলের সাথে প্রাথমিক চৌম্বক ফ্লাক্স ০.৮ mWb সংযুক্ত ছিল। যদি ০.০৫ সেকেন্ডে ফ্লাক্স সুষমভাবে কমে ০.২ mWb হয়, তবে কয়েলের প্রান্তে আবিষ্ট গড় তড়িৎচালক বল (EMF) নির্ণয় করুন।'
      },
      givenValues: {
        'N (Coil Turns)': '500 turns',
        'Initial Flux (Φ₁)': '0.8 mWb = 0.8 × 10⁻³ Wb',
        'Final Flux (Φ₂)': '0.2 mWb = 0.2 × 10⁻³ Wb',
        'Time Interval (Δt)': '0.05 seconds'
      },
      solution: {
        en: `Step 1: Calculate change in magnetic flux (ΔΦ):
  ΔΦ = Φ₂ - Φ₁ = (0.2 × 10⁻³ Wb) - (0.8 × 10⁻³ Wb) = -0.6 × 10⁻³ Wb = -0.6 mWb.

Step 2: Apply Faraday's Law for average induced EMF:
  e_avg = - N · (ΔΦ / Δt)
  e_avg = - (500) × [(-0.6 × 10⁻³ Wb) / (0.05 s)]
  e_avg = - (500) × (-0.012 V) = +6.0 Volts.`,
        hi: `चरण 1: चुंबकीय फ्लक्स में परिवर्तन (ΔΦ) ज्ञात कीजिए:
  ΔΦ = Φ₂ - Φ₁ = (0.2 - 0.8) × 10⁻³ Wb = -0.6 × 10⁻³ Wb।

चरण 2: फैराडे का औसत ईएमएफ सूत्र लागू कीजिए:
  e_avg = - N · (ΔΦ / Δt)
  e_avg = - (500) × [(-0.6 × 10⁻³) / 0.05] = +6.0 वोल्ट।`,
        bn: `ধাপ ১: চৌম্বক ফ্লাক্সের পরিবর্তন (ΔΦ) নির্ণয়:
  ΔΦ = Φ₂ - Φ₁ = (০.২ - ০.৮) × ১০⁻³ Wb = -০.৬ × ১০⁻³ Wb।

ধাপ ২: ফ্যারাডের সূত্র প্রয়োগ:
  e_avg = - N · (ΔΦ / Δt)
  e_avg = - (৫০০) × [(-০.৬ × ১০⁻³) / ০.০৫] = +৬.০ ভোল্ট।`
      },
      finalAnswer: {
        en: 'The average induced EMF across the coil is +6.0 V.',
        hi: 'कुंडली में प्रेरित औसत ईएमएफ +6.0 V है।',
        bn: 'কয়েলে আবিষ্ট গড় ইএমএফ হলো +৬.০ V।'
      }
    },
    {
      id: 'ex-faraday-2',
      problem: {
        en: 'The magnetic flux passing through a 200-turn coil varies with time according to the equation: Φ(t) = (4 t³ - 5 t² + 2 t + 1) mWb. Determine the instantaneous induced EMF in the coil at time t = 2.0 seconds.',
        hi: '200 फेरों वाली कुंडली से गुजरने वाला चुंबकीय फ्लक्स समीकरण Φ(t) = (4 t³ - 5 t² + 2 t + 1) mWb के अनुसार बदलता है। समय t = 2.0 सेकंड पर कुंडली में तात्कालिक प्रेरित ईएमएफ ज्ञात कीजिए।',
        bn: '২০০ পাকের একটি কয়েলের মধ্য দিয়ে চৌম্বক ফ্লাক্সের সময় পরিবর্তন সমীকরণ: Φ(t) = (4 t³ - 5 t² + 2 t + 1) mWb। t = ২.০ সেকেন্ড সময়ে কয়েলে আবিষ্ট তাৎক্ষণিক ইএমএফ নির্ণয় করুন।'
      },
      givenValues: {
        'N (Coil Turns)': '200 turns',
        'Flux equation Φ(t)': '(4t³ - 5t² + 2t + 1) × 10⁻³ Wb',
        'Time (t)': '2.0 seconds'
      },
      solution: {
        en: `Step 1: Differentiate the flux equation with respect to time t:
  dΦ/dt = d/dt [ (4 t³ - 5 t² + 2 t + 1) × 10⁻³ ]
  dΦ/dt = (12 t² - 10 t + 2) × 10⁻³ Wb/s.

Step 2: Evaluate dΦ/dt at t = 2.0 seconds:
  dΦ/dt |_(t=2) = [ 12(2)² - 10(2) + 2 ] × 10⁻³
  dΦ/dt |_(t=2) = [ 12(4) - 20 + 2 ] × 10⁻³ = [ 48 - 20 + 2 ] × 10⁻³ = 30 × 10⁻³ Wb/s = 0.030 Wb/s.

Step 3: Apply Faraday's Law:
  e(t) = - N · (dΦ/dt)
  e(2) = - (200) × (0.030 V) = -6.0 Volts.`,
        hi: `चरण 1: फ्लक्स समीकरण का समय t के सापेक्ष अवकलन कीजिए:
  dΦ/dt = (12 t² - 10 t + 2) × 10⁻³ Wb/s।

चरण 2: t = 2.0 s पर मान रखिए:
  dΦ/dt = (12(4) - 20 + 2) × 10⁻³ = 30 × 10⁻³ = 0.030 Wb/s।

चरण 3: फैराडे सूत्र लागू कीजिए:
  e = - N · (dΦ/dt) = - (200) × (0.030) = -6.0 वोल्ट।`,
        bn: `ধাপ ১: সময়ের সাপেক্ষে ফ্লাক্সের ব্যবকলন নির্ণয়:
  dΦ/dt = (১২ t² - ১০ t + ২) × ১০⁻³ Wb/s।

ধাপ ২: t = ২.০ সেকেন্ডে dΦ/dt এর মান:
  dΦ/dt = [ ১২(৪) - ২০ + ২ ] × ১০⁻³ = ৩০ × ১০⁻³ = ০.০৩০ Wb/s।

ধাপ ৩: ফ্যারাডের সূত্র প্রয়োগ:
  e = - N · (dΦ/dt) = - (২০০) × (০.০৩০) = -৬.০ ভোল্ট।`
      },
      finalAnswer: {
        en: 'The instantaneous induced EMF at t = 2.0 s is -6.0 V (magnitude 6.0 V).',
        hi: 't = 2.0 s पर तात्कालिक प्रेरित ईएमएफ -6.0 V है।',
        bn: 't = ২.০ সেকেন্ডে আবিষ্ট তাৎক্ষণিক ইএমএফ হলো -৬.০ V।'
      }
    }
  ],
  workedExamples: [
    {
      id: 'wex-faraday-1',
      problem: {
        en: 'A coil having 500 turns is linked with an initial magnetic flux of 0.8 mWb. If the flux is uniformly reduced to 0.2 mWb in 0.05 seconds, calculate the average induced electromotive force (EMF) across the coil terminals.',
        hi: '500 फेरों वाली एक कुंडली से 0.8 mWb का प्रारंभिक चुंबकीय फ्लक्स संबद्ध है। यदि फ्लक्स 0.05 सेकंड में घटकर 0.2 mWb हो जाता है, तो प्रेरित औसत ईएमएफ ज्ञात कीजिए।',
        bn: '৫০০ পাকের কয়েলে ফ্লাক্স ০.৮ mWb থেকে ০.২ mWb এ নেমে আসে ০.০৫ সেকেন্ডে। আবিষ্ট গড় ইএমএফ কত?'
      },
      givenValues: {
        'N': '500 turns',
        'Φ₁': '0.8 mWb',
        'Φ₂': '0.2 mWb',
        'Δt': '0.05 s'
      },
      solution: {
        en: 'ΔΦ = 0.2 - 0.8 = -0.6 mWb. e_avg = -N(ΔΦ/Δt) = -500 × (-0.6e-3 / 0.05) = +6.0 V.',
        hi: 'ΔΦ = -0.6 mWb। e_avg = -500 × (-0.6e-3 / 0.05) = +6.0 V।',
        bn: 'ΔΦ = -০.৬ mWb। e_avg = -৫০০ × (-০.৬e-৩ / ০.০৫) = +৬.০ V।'
      },
      finalAnswer: {
        en: 'Induced EMF = 6.0 V',
        hi: 'प्रेरित ईएमएफ = 6.0 V',
        bn: 'আবিষ্ট ইএমএফ = ৬.০ V'
      }
    }
  ],
  practicalApplications: {
    en: [
      'AC & DC Generators: Rotating armature coils cut stationary magnetic flux lines to produce commercial grid electric power.',
      'Electrical Transformers: Alternating primary current creates a continuous time-varying flux (dΦ/dt) that induces AC voltage in the secondary winding without any moving parts.',
      'Induction Cooktops: High-frequency alternating magnetic fields induce circulating eddy currents in the iron base of cookware to produce rapid, flameless heat.',
      'Dynamic Microphones: Acoustic sound pressure vibrates a delicate diaphragm attached to a small coil inside a magnetic field, inducing an electrical audio signal.',
      'Electric Guitar Pickups: Vibrating ferromagnetic steel guitar strings alter the magnetic flux passing through copper pickup coils, generating pristine musical audio signals.'
    ],
    hi: [
      'एसी एवं डीसी जनरेटर: घूमती हुई कुंडलियां चुंबकीय फ्लक्स रेखाओं को काटकर ग्रिड के लिए विद्युत ऊर्जा बनाती हैं।',
      'विद्युत ट्रांसफार्मर: प्राथमिक कुंडली की प्रत्यावर्ती धारा समय के साथ बदलने वाला फ्लक्स पैदा करती है, जो द्वितीयक कुंडली में बिना किसी गतिमान पुर्जे के वोल्टेज प्रेरित करता है।',
      'इंडक्शन कुकटॉप: उच्च-आवृत्ति वाला बदलता चुंबकीय क्षेत्र बर्तन के तल में भंवर धाराएं प्रेरित करके त्वरित ऊष्मा उत्पन्न करता है।',
      'डायनामिक माइक्रोफोन: ध्वनि तरंगे चुंबकीय क्षेत्र में रखी कुंडली को कंपित करती हैं, जिससे ध्वनि सिग्नल विद्युत वोल्टेज में बदल जाता है।',
      'इलेक्ट्रिक गिटार पिकअप: कंपित स्टील के तार पिकअप कॉइल के फ्लक्स को बदलते हैं, जिससे मधुर ऑडियो वोल्टेज उत्पन्न होता है।'
    ],
    bn: [
      'এসি ও ডিসি জেনারেটর: ঘূর্ণায়মান আর্মেচার কুণ্ডলী চৌম্বক বলরেখা ছেদন করে বিদ্যুৎকেন্দ্রে বিদ্যুৎ উৎপাদন করে।',
      'ইলেকট্রিক্যাল ট্রান্সফরমার: প্রাইমারি কয়েলের পরিবর্তিত ফ্লাক্স সেকেন্ডারি কয়েলে কোনো ঘূর্ণন ছাড়াই ভোল্টেজ আবিষ্ট করে।',
      'ইন্ডাকশন কুকার: উচ্চ কম্পাঙ্কের পরিবর্তিত চৌম্বক ক্ষেত্র রান্নার পাত্রের তলায় এডি কারেন্ট সৃষ্টি করে দ্রুত তাপ তৈরি করে।',
      'ডায়নামিক মাইক্রোফোন: শব্দ তরঙ্গ কয়েলকে চৌম্বক ক্ষেত্রে কাঁপিয়ে অডিও বৈদ্যুতিক সংকেত তৈরি করে।',
      'ইলেকট্রিক গিটার পিকআপ: কম্পনশীল তারের চৌম্বক ফ্লাক্স পরিবর্তনের মাধ্যমে নির্ভুল মিউজিক্যাল অডিও সংকেত সৃষ্টি হয়।'
    ]
  },
  importantPoints: {
    en: [
      'Relative motion or time-variation is essential: A stationary coil in a constant, unvarying magnetic field generates ZERO induced EMF regardless of the field magnitude.',
      'Induced EMF exists in open circuits: A voltage is generated across the coil ends even when no current flows (open-circuit condition). Current requires a closed path.',
      'Magnitude depends on turns N and dΦ/dt: Doubling the number of coil turns or doubling the speed of flux change exactly doubles the induced EMF.',
      'The negative sign represents energy conservation: Heinrich Lenz formulated that the induced current always creates an opposing magnetic field to prevent spontaneous energy creation.'
    ],
    hi: [
      'सापेक्ष गति या समय के साथ परिवर्तन अनिवार्य है: स्थिर चुंबकीय क्षेत्र में रखी स्थिर कुंडली में ईएमएफ सदैव शून्य होता है।',
      'खुले परिपथ में भी ईएमएफ बनता है: परिपथ खुला होने पर भी सिरों पर वोल्टेज मौजूद रहता है, किंतु धारा बहने के लिए बंद मार्ग चाहिए।',
      'फेरों की संख्या (N) एवं dΦ/dt के समानुपाती: फेरे दोगुने करने या फ्लक्स बदलने की गति दोगुनी करने पर वोल्टेज ठीक दोगुना हो जाता है।',
      'ऋणात्मक चिह्न ऊर्जा संरक्षण का प्रतीक है: लेंज के नियमानुसार प्रेरित धारा सदैव फ्लक्स परिवर्तन का विरोध करती है।'
    ],
    bn: [
      'আপেক্ষিক গতি বা সময়ের সাপেক্ষে পরিবর্তন অপরিহার্য: স্থির চুম্বক ক্ষেত্রে স্থির কয়েলে কোনো ইএমএফ আবিষ্ট হয় না।',
      'উন্মুক্ত বর্তনীতেও ইএমএফ থাকে: বর্তনী খোলা থাকলেও দুই প্রান্তে বিভব পার্থক্য সৃষ্টি হয়, তবে কারেন্ট চলার জন্য বদ্ধ পথ প্রয়োজন।',
      'পাকসংখ্যা N এবং dΦ/dt-এর সমানুপাতিক: পাকসংখ্যা দ্বিগুণ করলে বা ফ্লাক্স পরিবর্তনের বেগ দ্বিগুণ করলে আবিষ্ট ভোল্টেজ দ্বিগুণ হয়।',
      'ঋণাত্মক চিহ্ন শক্তি সংরক্ষণের প্রতীক: আবিষ্ট প্রবাহ সর্বদা ফ্লাক্স পরিবর্তনের মূল কারণকে বাধা প্রদান করে।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing magnetic flux (Φ) with rate of flux change (dΦ/dt): A huge static flux (e.g. 1000 Tesla) produces 0 V if it does not change, while a tiny flux changing rapidly produces high voltage.',
      'Forgetting the negative sign in calculations: Omitting the minus sign leads to incorrect polarities in transient network analysis and circuit modeling.',
      'Assuming current flows in open circuits: Induced EMF always appears, but current only circulates when a complete closed circuit path exists.',
      'Ignoring coil turns N: Forgetting that each series turn adds an equal induced EMF in series, scaling total voltage by N.'
    ],
    hi: [
      'चुंबकीय फ्लक्स (Φ) और फ्लक्स परिवर्तन की दर (dΦ/dt) में भ्रम: बहुत बड़ा स्थिर फ्लक्स 0 V देता है, जबकि तेजी से बदलता छोटा फ्लक्स भी उच्च वोल्टेज बनाता है।',
      'गणना में ऋणात्मक चिह्न भूल जाना: माइनस चिह्न छोड़ने से परिपथ में ध्रुवता गलत हो जाती है।',
      'खुले परिपथ में धारा बहने का भ्रम: ईएमएफ बनता है, परंतु धारा केवल बंद परिपथ में ही बह सकती है।',
      'कुंडली के फेरों (N) को नजरअंदाज करना: प्रत्येक फेरा श्रेणीक्रम में वोल्टेज जोड़ता है, अतः कुल वोल्टेज N गुना होता है।'
    ],
    bn: [
      'চৌম্বক ফ্লাক্স (Φ) এবং ফ্লাক্স পরিবর্তনের হার (dΦ/dt)-কে গুলিয়ে ফেলা: বিশাল স্থির ফ্লাক্সে কোনো ভোল্টেজ সৃষ্টি হয় না, কিন্তু দ্রুত পরিবর্তিত ক্ষুদ্র ফ্লাক্সেও উচ্চ ভোল্টেজ পাওয়া যায়।',
      'হিসেবে ঋণাত্মক চিহ্ন বাদ দেওয়া: ঋণাত্মক চিহ্ন বাদ দিলে সার্কিটের পোলারিটি ভুল নির্ধারিত হয়।',
      'মুক্ত বর্তনীতে কারেন্ট প্রবাহের বিভ্রান্তি: ভোল্টেজ সর্বত্র সৃষ্টি হয় কিন্তু কারেন্ট শুধু বদ্ধ পথেই প্রবাহিত হতে পারে।',
      'কয়েলের পাকসংখ্যা N উপেক্ষা করা: প্রতিটি পাক শ্রেণীতে যুক্ত হয়ে মোট ভোল্টেজ N গুণ বৃদ্ধি করে।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch10-l1-1',
      question: {
        en: 'According to Faraday’s Second Law of Electromagnetic Induction, the magnitude of induced EMF in a coil is directly proportional to:',
        hi: 'फैराडे के विद्युत चुंबकीय प्रेरण के द्वितीय नियम के अनुसार, कुंडली में प्रेरित ईएमएफ का परिमाण किसके सीधे समानुपाती होता है?',
        bn: 'ফ্যারাডের দ্বিতীয় সূত্রানুসারে কয়েলে আবিষ্ট তড়িৎচালক বলের মান সরাসরি কার সমানুপাতিক?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The resistance of the coil', hi: 'कुंडली के प्रतिरोध के', bn: 'কয়েলের রোধের' } },
        { id: 'opt-2', text: { en: 'The time rate of change of magnetic flux linkages', hi: 'चुंबकीय फ्लक्स लिंकेज के परिवर्तन की समय दर के', bn: 'চৌম্বক ফ্লাক্স লিংকেজের পরিবর্তনের সময় হারের' } },
        { id: 'opt-3', text: { en: 'The static magnetic flux density', hi: 'स्थिर चुंबकीय फ्लक्स घनत्व के', bn: 'স্থির চৌম্বক ফ্লাক্স ঘনত্বের' } },
        { id: 'opt-4', text: { en: 'The total mass of the magnet', hi: 'चुंबक के कुल द्रव्यमान के', bn: 'চুম্বকের মোট ভরের' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Faraday’s Second Law states that e = - N(dΦ/dt), meaning induced EMF is directly proportional to the time rate of change of flux linkages.',
        hi: 'फैराडे का द्वितीय नियम कहता है कि e = - N(dΦ/dt), अर्थात प्रेरित ईएमएफ फ्लक्स लिंकेज की परिवर्तन दर के समानुपाती होता है।',
        bn: 'ফ্যারাডের দ্বিতীয় সূত্রানুযায়ী e = - N(dΦ/dt), অর্থাৎ আবিষ্ট ইএমএফ ফ্লাক্স লিংকেজের পরিবর্তনের হারের সমানুপাতিক।'
      }
    },
    {
      id: 'mcq-ch10-l1-2',
      question: {
        en: 'What happens when a strong bar magnet is held completely stationary inside a multi-turn solenoid?',
        hi: 'जब एक शक्तिशाली छड़ चुंबक को बहु-फेरों वाली परिनालिका के अंदर पूरी तरह स्थिर रखा जाता है, तो क्या होता है?',
        bn: 'একটি শক্তিশালী দণ্ড চুম্বককে তারকুণ্ডলীর ভেতর সম্পূর্ণ স্থির রাখলে কী ঘটবে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'A huge continuous DC voltage is induced', hi: 'एक विशाल निरंतर डीसी वोल्टेज प्रेरित होता है', bn: 'একটি বিশাল অবিচ্ছিন্ন ডিসি ভোল্টেজ আবিষ্ট হবে' } },
        { id: 'opt-2', text: { en: 'An alternating AC current flows', hi: 'एक प्रत्यावर्ती एसी धारा बहती है', bn: 'একটি দিকপরিবর্তী এসি প্রবাহ চলবে' } },
        { id: 'opt-3', text: { en: 'Zero EMF is induced (e = 0)', hi: 'शून्य ईएमएफ प्रेरित होता है (e = 0)', bn: 'কোনো ইএমএফ আবিষ্ট হয় না (e = ০)' } },
        { id: 'opt-4', text: { en: 'The coil heats up rapidly', hi: 'कुंडली तेजी से गर्म हो जाती है', bn: 'কয়েলটি দ্রুত উত্তপ্ত হয়ে ওঠে' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'Since the magnet is stationary, dΦ/dt = 0. Therefore, induced EMF is exactly zero.',
        hi: 'क्योंकि चुंबक स्थिर है, अतः dΦ/dt = 0 है। इसलिए प्रेरित ईएमएफ बिल्कुल शून्य होता है।',
        bn: 'চুম্বক স্থির থাকায় ফ্লাক্সের পরিবর্তনের হার dΦ/dt = ০, তাই আবিষ্ট ইএমএফ শূন্য।'
      }
    },
    {
      id: 'mcq-ch10-l1-3',
      question: {
        en: 'What fundamental physical principle is represented by the negative sign in Faraday’s law: e = -N dΦ/dt?',
        hi: 'फैराडे के सूत्र e = -N dΦ/dt में ऋणात्मक चिह्न किस मूलभूत भौतिक सिद्धांत को दर्शाता है?',
        bn: 'ফ্যারাডের সমীকরণ e = -N dΦ/dt-এ ঋণাত্মক চিহ্নটি কোন মৌলিক ভৌত নীতি নির্দেশ করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Conservation of Electrical Charge', hi: 'विद्युत आवेश का संरक्षण', bn: 'বৈদ্যুতিক আধানের সংরক্ষণ' } },
        { id: 'opt-2', text: { en: 'Conservation of Energy (Lenz’s Law)', hi: 'ऊर्जा का संरक्षण (लेंज का नियम)', bn: 'শক্তির সংরক্ষণ (লেনজের সূত্র)' } },
        { id: 'opt-3', text: { en: 'Newton’s First Law of Motion', hi: 'न्यूटन का गति का प्रथम नियम', bn: 'নিউটনের গতির প্রথম সূত্র' } },
        { id: 'opt-4', text: { en: 'Coulomb’s Inverse Square Law', hi: 'कूलम्ब का व्युत्क्रम वर्ग नियम', bn: 'কুলম্বের বিপরীত বর্গীয় সূত্র' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'The negative sign represents Lenz’s Law, which is a direct manifestation of the Principle of Conservation of Energy.',
        hi: 'ऋणात्मक चिह्न लेंज के नियम को दर्शाता है, जो ऊर्जा संरक्षण सिद्धांत का प्रत्यक्ष प्रकटीकरण है।',
        bn: 'ঋণাত্মক চিহ্নটি লেনজের সূত্র নির্দেশ করে, যা শক্তি সংরক্ষণ নীতির সরাসরি বহিঃপ্রকাশ।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch10-l1-1',
      question: {
        en: 'A coil of 800 turns is linked with a flux of 1.2 mWb. If this flux is reversed in 0.04 seconds, determine the average induced EMF.',
        hi: '800 फेरों वाली कुंडली 1.2 mWb के फ्लक्स से जुड़ी है। यदि यह फ्लक्स 0.04 सेकंड में उलट दिया जाए, तो औसत प्रेरित ईएमएफ ज्ञात कीजिए।',
        bn: '৮০০ পাকের একটি কয়েল ১.২ mWb ফ্লাক্সের সাথে যুক্ত। ফ্লাক্সটি ০.০৪ সেকেন্ডে উল্টে দেওয়া হলে গড় আবিষ্ট ইএমএফ নির্ণয় করুন।'
      },
      hint: {
        en: 'Reversing the flux means Φ₁ = +1.2 mWb and Φ₂ = -1.2 mWb. Thus ΔΦ = Φ₂ - Φ₁ = -2.4 mWb.',
        hi: 'फ्लक्स उलटने का अर्थ है Φ₁ = +1.2 mWb और Φ₂ = -1.2 mWb। अतः ΔΦ = -2.4 mWb।',
        bn: 'ফ্লাক্স উল্টে যাওয়ার অর্থ Φ₁ = +১.২ mWb এবং Φ₂ = -১.২ mWb। অর্থাৎ ΔΦ = -২.৪ mWb।'
      },
      answerKey: {
        en: 'e_avg = -800 × [(-2.4 × 10⁻³) / 0.04] = +48.0 Volts.',
        hi: 'e_avg = -800 × [(-2.4 × 10⁻³) / 0.04] = +48.0 वोल्ट।',
        bn: 'e_avg = -৮০০ × [(-২.৪ × ১০⁻³) / ০.০৪] = +৪৮.০ ভোল্ট।'
      }
    },
    {
      id: 'pq-ch10-l1-2',
      question: {
        en: 'Explain why an open-circuited coil develops an induced voltage when exposed to a varying magnetic field, but dissipates zero heat energy.',
        hi: 'स्पष्ट कीजिए कि समय के साथ बदलते चुंबकीय क्षेत्र में रखी खुली कुंडली में वोल्टेज तो उत्पन्न होता है, परंतु ऊष्मा ऊर्जा शून्य क्यों नष्ट होती है।',
        bn: 'ব্যাখ্যা করুন কেন উন্মুক্ত কয়েলে পরিবর্তিত চৌম্বক ক্ষেত্রে ভোল্টেজ সৃষ্টি হওয়া সত্ত্বেও কোনো তাপ শক্তি অপচয় হয় না।'
      },
      hint: {
        en: 'Recall Ohm’s Law and Joule heating (P = I²R). In an open circuit, loop current I = 0.',
        hi: 'ओम का नियम और जूल तापन (P = I²R) याद करें। खुले परिपथ में धारा I = 0 होती है।',
        bn: 'ওহমের সূত্র ও জুল তাপীয় সমীকরণ (P = I²R) মনে করুন। মুক্ত বর্তনীতে কারেন্ট I = ০।'
      },
      answerKey: {
        en: 'The changing flux shifts electrons establishing an electrostatic gradient and terminal EMF (e ≠ 0). However, because the circuit is open (infinite resistance), current I = 0, so Joule dissipation P = I²R = 0 W.',
        hi: 'बदलते फ्लक्स से इलेक्ट्रॉनों पर बल लगता है जिससे सिरों पर ईएमएफ (e ≠ 0) बन जाता है। चूंकि परिपथ खुला है, अतः धारा I = 0 है, इसलिए जूल ऊष्मा P = I²R = 0 W होती है।',
        bn: 'পরিবর্তিত ফ্লাক্স ইলেকট্রনকে প্রান্তে জড়ো করে বিভব পার্থক্য বা ইএমএফ তৈরি করে। কিন্তু উন্মুক্ত বর্তনীতে কারেন্ট I = ০ হওয়ায় কোনো তাপীয় অপচয় হয় না (P = I²R = ০ W)।'
      }
    }
  ]
};
