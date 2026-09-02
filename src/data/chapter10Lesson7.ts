import { Lesson } from '../types';

export const LESSON_MUTUAL_INDUCTION: Lesson = {
  id: 'lsn-ch10-mutual-induction',
  topicId: 'ch10-mutual-induction',
  chapterId: 'ch-em-induction',
  order: 7,
  title: {
    en: 'Mutual Induction & Mutual Inductance',
    hi: 'पारस्परिक प्रेरण एवं अन्योन्य प्रेरकत्व (M)',
    bn: 'পারস্পরিক আবেশ ও পারস্পরিক আবেশাঙ্ক (M)'
  },
  description: {
    en: 'Comprehensive study of mutual induction across magnetically coupled coils. Derivation of mutually induced EMF equations (e₂ = -M di₁/dt), definition of the Henry (H) for mutual inductance, mutual flux linkages (M = N₂Φ₁₂/I₁), dot convention polarity rules, series aiding vs opposing magnetic coupling (L_eq = L₁ + L₂ ± 2M), ideal geometric coupling limit M = √(L₁L₂), and practical transformer applications.',
    hi: 'चुंबकीय रूप से युग्मित कुंडलियों में पारस्परिक प्रेरण का विस्तृत अध्ययन। पारस्परिक प्रेरित ईएमएफ समीकरण (e₂ = -M di₁/dt) का निगमन, अन्योन्य प्रेरकत्व हेतु हेनरी (H) की परिभाषा, फ्लक्स लिंकेज संबंध (M = N₂Φ₁₂/I₁), डॉट परिपाटी नियम, श्रेणी सहायक एवं विरोधी संयोजन (L_eq = L₁ + L₂ ± 2M), आदर्श युग्मन सीमा M = √(L₁L₂) तथा ट्रांसफॉर्मर अनुप्रयोग।',
    bn: 'চৌম্বকীয়ভাবে যুক্ত কয়েলসমূহে পারস্পরিক আবেশের বিশদ পাঠ। পারস্পরিক আবিষ্ট ইএমএফ সমীকরণ (e₂ = -M di₁/dt) প্রতিপাদন, পারস্পরিক আবেশাঙ্কের হেনরি (H) একক সংজ্ঞা, ফ্লাক্স লিংকেজ সমীকরণ (M = N₂Φ₁₂/I₁), ডট কনভেনশন নিয়মাবলী, সিরিজ সহায়ক ও বিরোধী বিন্যাস (L_eq = L₁ + L₂ ± 2M), আদর্শ কাপলিং সীমা M = √(L₁L₂) এবং ট্রান্সফরমার প্রয়োগের গভীর বিশ্লেষণ।'
  },
  estimatedMinutes: 35,
  easyExplanation: {
    en: "Imagine two musical tuning forks placed side by side. When you strike the first fork, it vibrates through the air and makes the second fork start ringing even though you never touched it! Mutual Induction is the electrical twin of this acoustic magic. When you send an alternating electric current through a primary coil, its pulsating magnetic field spreads into space and cuts through a nearby secondary coil. This changing magnetic flux induces a fresh voltage across the secondary terminals without any physical electrical wire connecting them! This is the foundational secret behind every power transformer and wireless phone charger on Earth.",
    hi: 'कल्पना कीजिए कि पास-पास रखे दो ट्यूनिंग फोर्क्स में से जब आप पहले वाले पर चोट मारते हैं, तो उसकी ध्वनि तरंगे हवा से गुजरकर दूसरे फोर्क को भी बिना छुए गुंजाने लगती हैं! विद्युत इंजीनियरिंग में "पारस्परिक प्रेरण" (Mutual Induction) बिल्कुल ऐसा ही चमत्कार है। जब आप प्राथमिक कुंडली (Primary Coil) में बदलती हुई विद्युत धारा भेजते हैं, तो उसका चुंबकीय क्षेत्र पास में रखी द्वितीयक कुंडली (Secondary Coil) को काटता है। बिना किसी तार के सीधे संपर्क के, द्वितीयक कुंडली में वोल्टेज पैदा हो जाता है! इसी सिद्धांत पर दुनिया के सारे ट्रांसफॉर्मर और वायरलेस मोबाइल चार्जर काम करते हैं।',
    bn: 'কল্পনা করুন পাশাপাশি রাখা দুটি টিউনিং ফর্কের কথা। প্রথম ফর্কে আঘাত করলে এর কম্পন বাতাসের মাধ্যমে দ্বিতীয় ফর্কটিকে না ছুঁয়েও কাঁপিয়ে শব্দ তৈরি করে! তড়িৎ প্রকৌশলে "পারস্পরিক আবেশ" (Mutual Induction) ঠিক এমনই এক বৈজ্ঞানিক প্রক্রিয়া। যখন প্রাইমারি কয়েলে সময়ের সাথে পরিবর্তনশীল বিদ্যুৎ প্রবাহিত করা হয়, তখন এর পরিবর্তিত চৌম্বক ক্ষেত্র পাশের সেকেন্ডারি কয়েলকে ছেদ করে। কোনো সরাসরি তারের সংযোগ ছাড়াই সেকেন্ডারি কয়েলে ভোল্টেজ তৈরি হয়! এই মূলনীতির ওপর ভিত্তি করেই পৃথিবীর সমস্ত পাওয়ার ট্রান্সফরমার ও ওয়্যারলেস চার্জার কাজ করে।'
  },
  detailedExplanation: {
    en: `1. Definition & Fundamental Phenomenon of Mutual Induction:
Mutual Induction is the electromagnetic phenomenon whereby a change of electric current in one electrical circuit or coil (the Primary Coil) induces an electromotive force (EMF) in a nearby, physically isolated circuit or coil (the Secondary Coil) via shared time-varying magnetic flux linkages.

2. Physical Mechanism of Mutually Induced EMF:
- When a time-varying current i₁(t) flows through Coil 1 (having N₁ turns), it establishes a magnetic flux: Φ₁(t) ∝ i₁(t).
- A fraction of this flux, denoted as Mutual Flux Φ₁₂(t), crosses the intervening magnetic medium (air, ferrite, or laminated steel core) and links the N₂ turns of Coil 2.
- By Faraday's Law of Electromagnetic Induction, the rate of change of this mutual flux induces an instantaneous EMF in Coil 2:
    e₂(t) = - N₂ · \\frac{d\\Phi_{12}(t)}{dt}
- Similarly, if a time-varying current i₂(t) flows in Coil 2, it establishes flux Φ₂₁(t) linking Coil 1, inducing:
    e₁(t) = - N₁ · \\frac{d\\Phi_{21}(t)}{dt}

3. Definition of Mutual Inductance (M) & The Henry:
Mutual flux linkage in Coil 2 is directly proportional to primary current i₁:
    N₂ · Φ₁₂ = M · i₁
where M is the constant of proportionality termed the Coefficient of Mutual Inductance (or Mutual Inductance).
- Formulation 1 (Flux Linkages per Ampere):
    M = \\frac{N₂ · \\Phi_{12}}{I₁} = \\frac{N₁ · \\Phi_{21}}{I₂}  [Weber-turns / Ampere]
- Formulation 2 (Induced Secondary EMF per Unit Rate of Primary Current Change):
    e₂ = - \\frac{d(N₂ \\Phi_{12})}{dt} = - M · \\frac{di₁}{dt}  ==>  |M| = \\frac{|e₂|}{|di₁/dt|}
- Definition of One Henry (1 H) of Mutual Inductance:
Two magnetically coupled coils possess a mutual inductance of 1 Henry if an electromotive force of 1 Volt is induced in the secondary coil when the current in the primary coil changes at a uniform rate of 1 Ampere per second (1 H = 1 V·s / A = 1 Wb-turn / A = 1 Ω·s).

4. Derivation of Mutual Inductance Between Two Coaxial Solenoids:
Consider two long concentric solenoids of length l and cross-sectional area A:
- Primary solenoid 1 has N₁ turns; secondary solenoid 2 has N₂ turns.
- Magnetic field inside primary: H₁ = (N₁ · I₁) / l.
- Magnetic flux density: B₁ = μ · H₁ = μ · (N₁ · I₁) / l.
- Total flux linking each turn of secondary (assuming negligible leakage): Φ₁₂ = B₁ · A = [μ · N₁ · I₁ · A] / l.
- Substituting Φ₁₂ into M = (N₂ · Φ₁₂) / I₁:
    M = \\frac{N₂ · \\left(\\frac{\\mu · N₁ · I₁ · A}{l}\\right)}{I₁} = \\frac{\\mu · N₁ · N₂ · A}{l} = \\frac{\\mu_0 · \\mu_r · N₁ · N₂ · A}{l}
- In terms of Core Reluctance S = l / (μA):
    M = \\frac{N₁ · N₂}{S}

5. Relation Between Mutual Inductance (M) and Self-Inductances (L₁, L₂):
Recall self-inductance formulas: L₁ = (μ · N₁² · A) / l and L₂ = (μ · N₂² · A) / l.
Multiplying L₁ and L₂:
    L₁ · L₂ = \\left(\\frac{\\mu · N₁² · A}{l}\\right) · \\left(\\frac{\\mu · N₂² · A}{l}\\right) = \\left(\\frac{\\mu · N₁ · N₂ · A}{l}\\right)^2 = M_{ideal}^2
- For perfect, 100% magnetic coupling (zero leakage flux):
    M_{ideal} = \\sqrt{L₁ · L₂}
- For practical real-world coils with magnetic leakage:
    M = k · \\sqrt{L₁ · L₂}  \\quad \\text{where } 0 \\le k \\le 1 \\text{ is the Coefficient of Coupling.}

6. Dot Convention & Coupled Polarity Rules:
The Dot Convention is a systematic engineering notation used to determine the relative polarity of mutually induced voltages in schematic diagrams without having to draw three-dimensional winding orientations:
- Rule 1: A current entering the dotted terminal of one coil produces an open-circuit mutually induced voltage in the second coil that is POSITIVE at the dotted terminal of that second coil.
- Rule 2: If currents enter the dotted terminals of BOTH coils simultaneously, the mutual fluxes reinforce each other (Flux Addition / Series Aiding: L_eq = L₁ + L₂ + 2M).
- Rule 3: If current enters the dotted terminal of one coil and leaves the dotted terminal of the other, the mutual fluxes oppose each other (Flux Subtraction / Series Opposing: L_eq = L₁ + L₂ - 2M).

7. Measurement of Mutual Inductance (M) in the Laboratory:
By connecting two coupled coils in series aiding and measuring total inductance L_aiding = L₁ + L₂ + 2M, and then reversing one coil to measure series opposing L_opposing = L₁ + L₂ - 2M:
    L_{aiding} - L_{opposing} = 4M  ==>  M = \\frac{L_{aiding} - L_{opposing}}{4}`,
    hi: `1. पारस्परिक प्रेरण की परिभाषा एवं भौतिक घटना:
पारस्परिक प्रेरण (Mutual Induction) वह विद्युत चुंबकीय घटना है जिसमें एक परिपथ या प्राथमिक कुंडली (Primary Coil) में धारा परिवर्तन होने पर, पास स्थित दूसरी स्वतंत्र द्वितीयक कुंडली (Secondary Coil) में समय-परिवर्तनशील साझा चुंबकीय फ्लक्स के कारण प्रेरित विद्युत वाहक बल (Induced EMF) उत्पन्न होता है।

2. पारस्परिक प्रेरित ईएमएफ की क्रियाविधि:
- जब प्राथमिक कुंडली (N₁ फेरे) में समय के साथ बदलती धारा i₁(t) प्रवाहित होती है, तो वह चुंबकीय फ्लक्स Φ₁(t) उत्पन्न करती है।
- इस फ्लक्स का एक भाग, जिसे पारस्परिक फ्लक्स Φ₁₂(t) कहते हैं, द्वितीयक कुंडली (N₂ फेरे) से सम्बद्ध होता है।
- फैराडे के नियम अनुसार, द्वितीयक कुंडली में प्रेरित ईएमएफ:
    e₂(t) = - N₂ · \\frac{d\\Phi_{12}(t)}{dt}
- अन्योन्य प्रेरकत्व M के संदर्भ में:
    e₂ = - M · \\frac{di₁}{dt}

3. अन्योन्य प्रेरकत्व (M) एवं 1 हेनरी की परिभाषा:
- परिभाषा 1 (फ्लक्स लिंकेज प्रति एम्पीयर):
    M = \\frac{N₂ · \\Phi_{12}}{I₁} = \\frac{N₁ · \\Phi_{21}}{I₂}  [वेबर-टर्न प्रति एम्पीयर]
- परिभाषा 2 (प्रेरित ईएमएफ प्रति इकाई धारा परिवर्तन दर):
    |M| = \\frac{|e₂|}{|di₁/dt|}
- 1 हेनरी (1 H) की परिभाषा: दो युग्मित कुंडलियों का अन्योन्य प्रेरकत्व 1 हेनरी कहलाता है यदि प्राथमिक कुंडली में धारा 1 एम्पीयर प्रति सेकंड की दर से बदलने पर द्वितीयक कुंडली में 1 वोल्ट का ईएमएफ प्रेरित हो।

4. दो समाक्षीय परिनालिकाओं का अन्योन्य प्रेरकत्व निगमन:
    M = \\frac{\\mu_0 · \\mu_r · N₁ · N₂ · A}{l} = \\frac{N₁ · N₂}{S}

5. M, L₁ एवं L₂ के मध्य संबंध:
- पूर्ण एवं आदर्श युग्मन (शून्य क्षरण) हेतु:
    M_{ideal} = \\sqrt{L₁ · L₂}
- वास्तविक युग्मन हेतु (युग्मन गुणांक k के साथ):
    M = k · \\sqrt{L₁ · L₂}  \\quad (0 \\le k \\le 1)

6. डॉट परिपाटी (Dot Convention) एवं श्रेणी संयोजन:
- श्रेणी सहायक (Series Aiding): L_eq = L₁ + L₂ + 2M
- श्रेणी विरोधी (Series Opposing): L_eq = L₁ + L₂ - 2M
- प्रयोगशाला में M मापन सूत्र: M = (L_aiding - L_opposing) / 4`,
    bn: `১. পারস্পরিক আবেশের সংজ্ঞা ও মূল ধারণা:
পারস্পরিক আবেশ (Mutual Induction) হলো এমন একটি তড়িৎচৌম্বকীয় প্রক্রিয়া যার মাধ্যমে একটি কয়েলে (প্রাইমারি কয়েল) কারেন্টের পরিবর্তন ঘটলে পার্শ্ববর্তী অন্য একটি স্বতন্ত্র কয়েলে (সেকেন্ডারি কয়েল) চৌম্বক ফ্লাক্স লিংকেজ পরিবর্তনের ফলে আবিষ্ট তড়িৎচালক বল (Induced EMF) সৃষ্টি হয়।

২. পারস্পরিক আবিষ্ট ইএমএফ-এর সমীকরণ:
- প্রাইমারি কয়েলে i₁(t) কারেন্ট প্রবাহের ফলে উৎপন্ন পারস্পরিক ফ্লাক্স Φ₁₂(t) সেকেন্ডারি কয়েলকে ছেদ করলে ফ্যারাডের সূত্রানুসারে আবিষ্ট ইএমএফ:
    e₂(t) = - N₂ · \\frac{d\\Phi_{12}(t)}{dt}
- পারস্পরিক আবেশাঙ্ক M দ্বারা সমীকরণ:
    e₂ = - M · \\frac{di₁}{dt}

৩. পারস্পরিক আবেশাঙ্ক (M) এবং ১ হেনরির সংজ্ঞা:
- সমীকরণ: M = (N₂ · Φ₁₂) / I₁
- ১ হেনরির (1 H) সংজ্ঞা: দুটি কয়েলের মধ্যে প্রাইমারি কয়েলে প্রতি সেকেন্ডে ১ অ্যাম্পিয়ার হারে কারেন্ট পরিবর্তিত হলে যদি সেকেন্ডারি কয়েলে ১ ভোল্ট ইএমএফ আবিষ্ট হয়, তবে তাদের পারস্পরিক আবেশাঙ্ককে ১ হেনরি বলে।

৪. সোলেনয়েডের পারস্পরিক আবেশাঙ্ক প্রতিপাদন:
    M = \\frac{\\mu_0 · \\mu_r · N₁ · N₂ · A}{l} = \\frac{N₁ · N₂}{S}

৫. M, L₁ ও L₂ এর সম্পর্ক:
- আদর্শ কাপলিংয়ের জন্য: M = √(L₁ · L₂)
- বাস্তব কাপলিংয়ের জন্য: M = k · √(L₁ · L₂) (যেখানে ০ ≤ k ≤ ১)

৬. ডট কনভেনশন ও সিরিজ সংযোগ:
- সিরিজ সহায়ক (Series Aiding): L_eq = L₁ + L₂ + 2M
- সিরিজ বিরোধী (Series Opposing): L_eq = L₁ + L₂ - 2M
- ল্যাবরেটরিতে M পরিমাপের সূত্র: M = (L_aiding - L_opposing) / 4`
  },
  formulas: [
    {
      id: 'f-ch10-mutually-induced-emf',
      symbol: 'e₂',
      expression: 'e₂ = - M · (di₁ / dt) = - N₂ · (dΦ₁₂ / dt)',
      title: {
        en: 'Mutually Induced Secondary EMF',
        hi: 'द्वितीयक में पारस्परिक प्रेरित ईएमएफ',
        bn: 'সেকেন্ডারিতে পারস্পরিক আবিষ্ট ইএমএফ'
      },
      description: {
        en: 'Induced voltage in secondary coil proportional to the time rate of change of primary current and mutual inductance M.',
        hi: 'द्वितीयक कुंडली में प्रेरित वोल्टेज जो प्राथमिक धारा परिवर्तन की दर एवं अन्योन्य प्रेरकत्व M के समानुपाती होता है।',
        bn: 'সেকেন্ডারি কয়েলে আবিষ্ট ভোল্টেজ যা প্রাইমারি কারেন্টের পরিবর্তনের হার ও পারস্পরিক আবেশাঙ্ক M-এর গুণফলের সমানুপাতিক।'
      },
      variables: [
        { symbol: 'e₂', name: { en: 'Mutually Induced EMF (V)', hi: 'पारस्परिक प्रेरित ईएमएफ (V)', bn: 'পারস্পরিক আবিষ্ট ইএমএফ (V)' } },
        { symbol: 'M', name: { en: 'Mutual Inductance (H)', hi: 'अन्योन्य प्रेरकत्व (H)', bn: 'পারস্পরিক আবেশাঙ্ক (H)' } },
        { symbol: 'di₁/dt', name: { en: 'Rate of primary current change (A/s)', hi: 'प्राथमिक धारा परिवर्तन दर (A/s)', bn: 'প্রাইমারি কারেন্ট পরিবর্তনের হার (A/s)' } }
      ]
    },
    {
      id: 'f-ch10-mutual-inductance-flux-linkage',
      symbol: 'M',
      expression: 'M = (N₂ · Φ₁₂) / I₁ = (N₁ · Φ₂₁) / I₂',
      title: {
        en: 'Mutual Inductance in Terms of Flux Linkage',
        hi: 'फ्लक्स लिंकेज के पदों में अन्योन्य प्रेरकत्व',
        bn: 'ফ্লাক্স লিংকেজের মাধ্যমে পারস্পরিক আবেশাঙ্ক'
      },
      description: {
        en: 'Mutual inductance defined as total magnetic flux linkages in one coil per ampere of current in the coupled coil.',
        hi: 'अन्योन्य प्रेरकत्व जिसे एक कुंडली में कुल फ्लक्स लिंकेज प्रति एम्पीयर धारा के रूप में परिभाषित किया जाता है।',
        bn: 'পারস্পরিক আবেশাঙ্ক যা যুগল কয়েলের প্রতি অ্যাম্পিয়ার কারেন্টে অন্য কয়েলের মোট ফ্লাক্স লিংকেজ নির্দেশ করে।'
      },
      variables: [
        { symbol: 'N₂ Φ₁₂', name: { en: 'Secondary flux linkages (Wb-turns)', hi: 'द्वितीयक फ्लक्स लिंकेज (वेबर-टर्न)', bn: 'সেকেন্ডারি ফ্লাক্স লিংকেজ (ওয়েবার-পাক)' } },
        { symbol: 'I₁', name: { en: 'Primary current (A)', hi: 'प्राथमिक धारा (A)', bn: 'প্রাইমারি কারেন্ট (A)' } }
      ]
    },
    {
      id: 'f-ch10-solenoid-mutual-inductance',
      symbol: 'M',
      expression: 'M = (μ₀ · μ_r · N₁ · N₂ · A) / l = (N₁ · N₂) / S',
      title: {
        en: 'Solenoid Mutual Inductance Formula',
        hi: 'परिनालिका का अन्योन्य प्रेरकत्व सूत्र',
        bn: 'সোলেনয়েডের পারস্পরিক আবেশাঙ্ক সূত্র'
      },
      description: {
        en: 'Mutual inductance governed by core permeability μ, turns N₁ & N₂, cross-sectional area A, magnetic path length l, and reluctance S.',
        hi: 'कोर चुंबकशीलता μ, फेरों N₁ व N₂, अनुप्रस्थ काट क्षेत्रफल A, पथ लंबाई l तथा रिलक्टेंस S द्वारा निर्धारित अन्योन्य प्रेरकत्व।',
        bn: 'কোর ভেদ্যতা μ, পাকসংখ্যা N₁ ও N₂, ক্ষেত্রফল A, দৈর্ঘ্য l এবং রিলাকট্যান্স S দ্বারা নির্ধারিত পারস্পরিক আবেশাঙ্ক।'
      },
      variables: [
        { symbol: 'μ_r', name: { en: 'Relative permeability of core', hi: 'कोर की आपेक्षिक चुंबकशीलता', bn: 'কোরের আপেক্ষিক ভেদ্যতা' } },
        { symbol: 'A', name: { en: 'Core cross-sectional area (m²)', hi: 'कोर का क्षेत्रफल (m²)', bn: 'কোরের ক্ষেত্রফল (m²)' } },
        { symbol: 'l', name: { en: 'Magnetic path length (m)', hi: 'चुंबकीय पथ की लंबाई (m)', bn: 'চৌম্বক পথের দৈর্ঘ্য (m)' } }
      ]
    },
    {
      id: 'f-ch10-ideal-coupling-bound',
      symbol: 'M_max',
      expression: 'M_ideal = √(L₁ · L₂)',
      title: {
        en: 'Ideal Coupling Upper Bound',
        hi: 'आदर्श युग्मन उच्च सीमा',
        bn: 'আদর্শ কাপলিং সর্বোচ্চ সীমা'
      },
      description: {
        en: 'Theoretical maximum mutual inductance achievable under 100% perfect magnetic coupling with zero leakage flux (k = 1.0).',
        hi: 'शून्य चुंबकीय क्षरण एवं 100% आदर्श युग्मन (k = 1.0) पर प्राप्त होने वाला अधिकतम सैद्धांतिक अन्योन्य प्रेरकत्व।',
        bn: 'শূন্য লিকেজ ফ্লাক্স ও ১০০% নিখুঁত কাপলিংয়ে (k = ১.০) অর্জিত সর্বোচ্চ তাত্ত্বিক পারস্পরিক আবেশাঙ্ক।'
      },
      variables: [
        { symbol: 'L₁', name: { en: 'Self-inductance of Coil 1 (H)', hi: 'कुंडली 1 का स्व-प्रेरकत्व (H)', bn: 'কয়েল ১ এর স্ব-আবেশাঙ্ক (H)' } },
        { symbol: 'L₂', name: { en: 'Self-inductance of Coil 2 (H)', hi: 'कुंडली 2 का स्व-प्रेरकत्व (H)', bn: 'কয়েল ২ এর স্ব-আবেশাঙ্ক (H)' } }
      ]
    },
    {
      id: 'f-ch10-coupled-series',
      symbol: 'L_eq',
      expression: 'L_aiding = L₁ + L₂ + 2M,   L_opposing = L₁ + L₂ - 2M',
      title: {
        en: 'Coupled Coils in Series (Aiding & Opposing)',
        hi: 'श्रेणीबद्ध युग्मित कुंडलियां (सहायक एवं विरोधी)',
        bn: 'সিরিজে যুক্ত যুগল কয়েল (সহায়ক ও বিরোধী)'
      },
      description: {
        en: 'Equivalent total inductance when magnetic fluxes aid (+2M) or oppose (-2M) each other.',
        hi: 'कुल तुल्य प्रेरकत्व जब चुंबकीय फ्लक्स एक-दूसरे की सहायता करते हैं (+2M) या विरोध करते हैं (-2M)।',
        bn: 'তুল্য আবেশাঙ্ক যখন চৌম্বক ফ্লাক্স একে অপরকে সাহায্য করে (+2M) অথবা বাধা দেয় (-2M)।'
      },
      variables: [
        { symbol: 'L_aiding', name: { en: 'Series aiding equivalent inductance (H)', hi: 'श्रेणी सहायक तुल्य प्रेरकत्व (H)', bn: 'সিরিজ সহায়ক তুল্য আবেশাঙ্ক (H)' } },
        { symbol: 'L_opposing', name: { en: 'Series opposing equivalent inductance (H)', hi: 'श्रेणी विरोधी तुल्य प्रेरकत्व (H)', bn: 'সিরিজ বিরোধী তুল্য আবেশাঙ্ক (H)' } }
      ]
    }
  ],
  solvedExamples: [
    {
      problem: {
        en: 'Two magnetically coupled coils have a mutual inductance M = 0.45 H. If the current in the primary coil changes uniformly from +6 A to -4 A in a duration of 0.05 seconds, calculate the magnitude of the electromotive force induced in the secondary coil.',
        hi: 'दो चुंबकीय रूप से युग्मित कुंडलियों का अन्योन्य प्रेरकत्व M = 0.45 H है। यदि प्राथमिक कुंडली में धारा 0.05 सेकंड में +6 A से बदलकर -4 A हो जाती है, तो द्वितीयक कुंडली में प्रेरित ईएमएफ के परिमाण की गणना कीजिए।',
        bn: 'দুটি যুগল কয়েলের পারস্পরিক আবেশাঙ্ক M = ০.৪৫ H। যদি প্রাইমারি কয়েলের কারেন্ট ০.০৫ সেকেন্ডে +৬ A থেকে সুষমভাবে পরিবর্তিত হয়ে -৪ A হয়, তবে সেকেন্ডারি কয়েলে আবিষ্ট ইএমএফ-এর মান নির্ণয় কর।'
      },
      givenValues: {
        en: 'Mutual Inductance M = 0.45 H, Initial current i₁_initial = +6 A, Final current i₁_final = -4 A, Time interval dt = 0.05 s',
        hi: 'अन्योन्य प्रेरकत्व M = 0.45 H, प्रारंभिक धारा i₁_initial = +6 A, अंतिम धारा i₁_final = -4 A, समयांतराल dt = 0.05 s',
        bn: 'পারস্পরিক আবেশাঙ্ক M = ০.৪৫ H, প্রাথমিক কারেন্ট i₁_initial = +৬ A, শেষ কারেন্ট i₁_final = -৪ A, সময় dt = ০.০৫ s'
      },
      solution: {
        en: `1. Calculate total change in primary current:
   di₁ = i₁_final - i₁_initial = (-4 A) - (+6 A) = -10 A
2. Calculate rate of change of primary current:
   di₁/dt = (-10 A) / (0.05 s) = -200 A/s
3. Apply Faraday's mutual induction formula:
   e₂ = -M · (di₁/dt) = -(0.45 H) · (-200 A/s) = +90 V`,
        hi: `1. प्राथमिक धारा में कुल परिवर्तन:
   di₁ = (-4 A) - (+6 A) = -10 A
2. प्राथमिक धारा परिवर्तन की दर:
   di₁/dt = (-10 A) / (0.05 s) = -200 A/s
3. पारस्परिक प्रेरण सूत्र लागू करने पर:
   e₂ = -M · (di₁/dt) = -(0.45 H) · (-200 A/s) = +90 V`,
        bn: `১. প্রাইমারি কারেন্টের মোট পরিবর্তন:
   di₁ = (-৪ A) - (+৬ A) = -১০ A
২. প্রাইমারি কারেন্ট পরিবর্তনের হার:
   di₁/dt = (-১০ A) / (০.০৫ s) = -২০০ A/s
৩. পারস্পরিক আবেশ সূত্র প্রয়োগ করে:
   e₂ = -M · (di₁/dt) = -(০.৪৫ H) · (-২০০ A/s) = +৯০ V`
      },
      finalAnswer: {
        en: 'Mutually Induced Secondary EMF e₂ = 90 V',
        hi: 'द्वितीयक में प्रेरित ईएमएफ e₂ = 90 V',
        bn: 'সেকেন্ডারিতে আবিষ্ট ইএমএফ e₂ = ৯০ V'
      }
    },
    {
      problem: {
        en: 'Two coils with self-inductances L₁ = 1.6 H and L₂ = 0.9 H are magnetically coupled. If the coupling coefficient is k = 0.85, determine: (a) The ideal mutual inductance M_ideal, and (b) The actual mutual inductance M.',
        hi: 'दो कुंडलियां जिनके स्व-प्रेरकत्व L₁ = 1.6 H एवं L₂ = 0.9 H हैं, चुंबकीय रूप से युग्मित हैं। यदि युग्मन गुणांक k = 0.85 है, तो ज्ञात कीजिए: (a) आदर्श अन्योन्य प्रेरकत्व M_ideal, तथा (b) वास्तविक अन्योन्य प्रेरकत्व M।',
        bn: 'দুটি কয়েলের স্ব-আবেশাঙ্ক L₁ = ১.৬ H এবং L₂ = ০.৯ H। যদি কাপলিং গুণাঙ্ক k = ০.৮৫ হয়, তবে নির্ণয় কর: (a) আদর্শ পারস্পরিক আবেশাঙ্ক M_ideal, এবং (b) প্রকৃত পারস্পরিক আবেশাঙ্ক M।'
      },
      givenValues: {
        en: 'L₁ = 1.6 H, L₂ = 0.9 H, k = 0.85',
        hi: 'L₁ = 1.6 H, L₂ = 0.9 H, k = 0.85',
        bn: 'L₁ = ১.৬ H, L₂ = ০.৯ H, k = ০.৮৫'
      },
      solution: {
        en: `1. Calculate ideal mutual inductance (100% coupling limit):
   M_ideal = √(L₁ · L₂) = √(1.6 · 0.9) = √(1.44) = 1.20 H
2. Calculate actual mutual inductance:
   M = k · M_ideal = 0.85 · 1.20 H = 1.02 H`,
        hi: `1. आदर्श अन्योन्य प्रेरकत्व की गणना:
   M_ideal = √(L₁ · L₂) = √(1.6 · 0.9) = √(1.44) = 1.20 H
2. वास्तविक अन्योन्य प्रेरकत्व की गणना:
   M = k · M_ideal = 0.85 · 1.20 H = 1.02 H`,
        bn: `১. আদর্শ পারস্পরিক আবেশাঙ্ক নির্ণয়:
   M_ideal = √(L₁ · L₂) = √(১.৬ · ০.৯) = √(১.৪৪) = ১.২০ H
২. প্রকৃত পারস্পরিক আবেশাঙ্ক নির্ণয়:
   M = k · M_ideal = ০.৮৫ · ১.২০ H = ১.০২ H`
      },
      finalAnswer: {
        en: 'M_ideal = 1.20 H, Actual M = 1.02 H',
        hi: 'M_ideal = 1.20 H, वास्तविक M = 1.02 H',
        bn: 'M_ideal = ১.২০ H, প্রকৃত M = ১.০২ H'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Electrical Power & Distribution Transformers: Enables stepping AC voltage up to 400 kV for grid transmission and stepping down to 230 V for consumer safety.',
      'Wireless Inductive Power Transfer (Qi Charging): Transfers power wirelessly to smartphones at high frequency (100–205 kHz) via mutual induction.',
      'Ignition Coils in IC Engines: Steps up 12 V automotive battery DC to 25,000–40,000 V via sudden current interruption to fire spark plugs.'
    ],
    hi: [
      'विद्युत पावर एवं वितरण ट्रांसफॉर्मर: ग्रिड ट्रांसमिशन हेतु 400 kV तक वोल्टेज बढ़ाना एवं उपभोक्ता उपयोग हेतु 230 V तक घटाना।',
      'वायरलेस इंडक्टिव पावर ट्रांसफर (Qi चार्जिंग): उच्च आवृत्ति (100-205 kHz) पर स्मार्टफोन बैटरी तक बिना तार ऊर्जा संचरण।',
      'आईसी इंजन में इग्निशन कॉइल: 12 V बैटरी वोल्टेज को 25,000–40,000 V तक बढ़ाकर स्पार्क प्लग में चिंगारी पैदा करना।'
    ],
    bn: [
      'পাওয়ার ও ডিস্ট্রিবিউশন ট্রান্সফরমার: দূরপাল্লার সঞ্চালনের জন্য ৪০০ kV পর্যন্ত ভোল্টেজ বৃদ্ধি এবং ভোক্তার ব্যবহারের জন্য ২৩০ V এ রূপান্তর।',
      'ওয়্যারলেস ইন্ডাক্টিভ চার্জিং: উচ্চ কম্পাঙ্কে তারবিহীনভাবে স্মার্টফোনে বিদ্যুৎ স্থানান্তর।',
      'আইসি ইঞ্জিনের ইগনিশন কয়েল: ১২ V ব্যাটারি ভোল্টেজকে ২৫,০০০–৪০,০০০ V এ রূপান্তর করে স্পার্ক প্লাগে জ্বালানি প্রজ্বলন।'
    ]
  },
  importantPoints: {
    en: [
      'Mutual induction requires a TIME-VARYING current (di₁/dt ≠ 0). Pure steady DC produces zero mutually induced voltage.',
      'Reciprocity Theorem guarantees that mutual inductance from coil 1 to 2 equals that from coil 2 to 1 (M₁₂ = M₂₁ = M).',
      'The relation M = √(L₁L₂) is valid ONLY for ideal coupling (k = 1.0). In real circuits, M = k√(L₁L₂).',
      'Dot Convention: Entering both dotted terminals produces aiding mutual flux (+2M); opposite entrances produce opposing mutual flux (-2M).'
    ],
    hi: [
      'पारस्परिक प्रेरण हेतु समय-परिवर्तनशील धारा (di₁/dt ≠ 0) अनिवार्य है। शुद्ध स्थिर डीसी में वोल्टेज शून्य होता है।',
      'उत्क्रमणीयता प्रमेय यह सुनिश्चित करता है कि कुंडली 1 से 2 का अन्योन्य प्रेरकत्व, कुंडली 2 से 1 के बराबर होता है (M₁₂ = M₂₁ = M)।',
      'संबंध M = √(L₁L₂) केवल आदर्श युग्मन (k = 1.0) पर मान्य है। वास्तविक परिपथों में M = k√(L₁L₂)।',
      'डॉट परिपाटी: दोनों डॉट सिरों में धारा प्रवेश पर फ्लक्स योग (+2M) होता है; विपरीत प्रवेश पर घटाव (-2M) होता है।'
    ],
    bn: [
      'পারস্পরিক আবেশের জন্য সময়-পরিবর্তনশীল কারেন্ট (di₁/dt ≠ ০) প্রয়োজন। স্থির ডিসিতে আবিষ্ট ভোল্টেজ শূন্য হয়।',
      'রেসিপ্রোসিটি উপপাদ্য অনুযায়ী কয়েল ১ থেকে ২ এর পারস্পরিক আবেশাঙ্ক কয়েল ২ থেকে ১ এর সমান হয় (M₁₂ = M₂₁ = M)।',
      'M = √(L₁L₂) সম্পর্কটি কেবল আদর্শ কাপলিংয়ে (k = ১.০) প্রযোজ্য। বাস্তব ক্ষেত্রে M = k√(L₁L₂)।',
      'ডট কনভেনশন: উভয় ডট টার্মিনালে কারেন্ট প্রবেশ করলে ফ্লাক্স যোগ (+2M) হয়; বিপরীত হলে বিয়োগ (-2M) হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing self-inductance L with mutual inductance M: L opposes a coil’s own current change, while M induces voltage in an adjacent coil.',
      'Assuming ideal coupling M = √(L₁L₂) in air-cored coils: Air cores have massive magnetic leakage (k = 0.1 to 0.5), so M << √(L₁L₂).'
    ],
    hi: [
      'स्व-प्रेरकत्व L एवं अन्योन्य प्रेरकत्व M में भ्रम: L स्वयं की धारा परिवर्तन का विरोध है, जबकि M पास की दूसरी कुंडली में वोल्टेज बनाता है।',
      'वायु-कोर कुंडलियों में M = √(L₁L₂) मान लेना: वायु कोर में भारी चुंबकीय क्षरण होता है (k = 0.1 से 0.5), अतः M का मान बहुत कम होता है।'
    ],
    bn: [
      'স্ব-আবেশাঙ্ক L এবং পারস্পরিক আবেশাঙ্ক M গুলিয়ে ফেলা: L নিজের কয়েলের কারেন্ট পরিবর্তনে বাধা দেয়, আর M পাশের অন্য কয়েলে ভোল্টেজ তৈরি করে।',
      'এয়ার-কোর কয়েলে M = √(L₁L₂) ধরে নেওয়া: এয়ার-কোর কয়েলে প্রচুর লিকেজ থাকে (k = ০.১ থেকে ০.৫), তাই M অনেক কম হয়।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch10-m1',
      question: {
        en: 'What is the SI unit of Mutual Inductance (M)?',
        hi: 'अन्योन्य प्रेरकत्व (M) का SI मात्रक क्या है?',
        bn: 'পারস্পরিক আবেশাঙ্কের (M) এসআই একক কোনটি?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Weber (Wb)', hi: 'वेबर (Wb)', bn: 'ওয়েবার (Wb)' } },
        { id: 'opt-2', text: { en: 'Henry (H)', hi: 'हेनरी (H)', bn: 'হেনরি (H)' } },
        { id: 'opt-3', text: { en: 'Tesla (T)', hi: 'टेस्ला (T)', bn: 'টেসলা (T)' } },
        { id: 'opt-4', text: { en: 'Farad (F)', hi: 'फैराड (F)', bn: 'ফ্যারাড (F)' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Mutual inductance is measured in Henries (H), where 1 H = 1 Volt·second per Ampere.',
        hi: 'अन्योन्य प्रेरकत्व को हेनरी (H) में मापा जाता है, जहां 1 H = 1 वोल्ट·सेकंड प्रति एम्पीयर।',
        bn: 'পারস্পরিক আবেশাঙ্ক হেনরি (H) এককে মাপা হয়, যেখানে ১ H = ১ ভোল্ট·সেকেন্ড প্রতি অ্যাম্পিয়ার।'
      }
    },
    {
      id: 'mcq-ch10-m2',
      question: {
        en: 'For two magnetically coupled coils with self-inductances L₁ and L₂ having a coefficient of coupling k, the mutual inductance M is given by:',
        hi: 'दो चुंबकीय रूप से युग्मित कुंडलियों (स्व-प्रेरकत्व L₁ व L₂, युग्मन गुणांक k) का अन्योन्य प्रेरकत्व M होता है:',
        bn: 'L₁ ও L₂ স্ব-আবেশাঙ্কযুক্ত দুটি যুগল কয়েলের কাপলিং গুণাঙ্ক k হলে পারস্পরিক আবেশাঙ্ক M হবে:'
      },
      options: [
        { id: 'opt-1', text: { en: 'M = k · (L₁ + L₂)', hi: 'M = k · (L₁ + L₂)', bn: 'M = k · (L₁ + L₂)' } },
        { id: 'opt-2', text: { en: 'M = k · √(L₁ · L₂)', hi: 'M = k · √(L₁ · L₂)', bn: 'M = k · √(L₁ · L₂)' } },
        { id: 'opt-3', text: { en: 'M = (L₁ · L₂) / k', hi: 'M = (L₁ · L₂) / k', bn: 'M = (L₁ · L₂) / k' } },
        { id: 'opt-4', text: { en: 'M = k² · √(L₁ / L₂)', hi: 'M = k² · √(L₁ / L₂)', bn: 'M = k² · √(L₁ / L₂)' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Mutual inductance is M = k√(L₁L₂), reaching its theoretical maximum √(L₁L₂) when k = 1.',
        hi: 'अन्योन्य प्रेरकत्व सूत्र M = k√(L₁L₂) होता है, जो k = 1 होने पर अधिकतम मान √(L₁L₂) प्राप्त करता है।',
        bn: 'পারস্পরিক আবেশাঙ্কের সঠিক সূত্র M = k√(L₁L₂), যা k = ১ হলে সর্বোচ্চ মান √(L₁L₂) পায়।'
      }
    },
    {
      id: 'mcq-ch10-m3',
      question: {
        en: 'When two coupled coils are connected in series aiding, the equivalent total inductance is:',
        hi: 'जब दो युग्मित कुंडलियों को श्रेणी सहायक (Series Aiding) क्रम में जोड़ा जाता है, तो तुल्य प्रेरकत्व होता है:',
        bn: 'দুটি যুগল কয়েলকে সিরিজ সহায়ক (Series Aiding) সংযোগে যুক্ত করলে তুল্য আবেশাঙ্ক হবে:'
      },
      options: [
        { id: 'opt-1', text: { en: 'L₁ + L₂ - 2M', hi: 'L₁ + L₂ - 2M', bn: 'L₁ + L₂ - 2M' } },
        { id: 'opt-2', text: { en: 'L₁ + L₂ + 2M', hi: 'L₁ + L₂ + 2M', bn: 'L₁ + L₂ + 2M' } },
        { id: 'opt-3', text: { en: 'L₁ + L₂ + M', hi: 'L₁ + L₂ + M', bn: 'L₁ + L₂ + M' } },
        { id: 'opt-4', text: { en: '√(L₁² + L₂²)', hi: '√(L₁² + L₂²)', bn: '√(L₁² + L₂²)' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'In series aiding configuration, self and mutual fluxes reinforce each other, yielding L_eq = L₁ + L₂ + 2M.',
        hi: 'श्रेणी सहायक संयोजन में स्व एवं अन्योन्य फ्लक्स एक-दूसरे को जोड़ते हैं, अतः L_eq = L₁ + L₂ + 2M।',
        bn: 'সিরিজ সহায়ক সংযোগে স্ব ও পারস্পরিক ফ্লাক্স পরস্পরকে সাহায্য করে, ফলে L_eq = L₁ + L₂ + 2M হয়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch10-m1',
      question: {
        en: 'Two identical solenoids each of self-inductance 2.5 H are coupled with k = 0.8. Calculate the equivalent inductance in (a) Series Aiding, and (b) Series Opposing configurations.',
        hi: 'दो समान परिनालिकाएं (प्रत्येक का स्व-प्रेरकत्व 2.5 H) k = 0.8 के साथ युग्मित हैं। (a) श्रेणी सहायक एवं (b) श्रेणी विरोधी क्रम में तुल्य प्रेरकत्व ज्ञात कीजिए।',
        bn: 'প্রতিটি ২.৫ H স্ব-আবেশাঙ্কযুক্ত দুটি সোলেনয়েড k = ০.৮ কাপলিংয়ে যুক্ত। (a) সিরিজ সহায়ক এবং (b) সিরিজ বিরোধী সংযোগে তুল্য আবেশাঙ্ক নির্ণয় কর।'
      }
    },
    {
      id: 'pq-ch10-m2',
      question: {
        en: 'Explain how the Dot Convention helps electrical engineers analyze coupled circuits without drawing complex 3D coil winding sketches.',
        hi: 'व्याख्या कीजिए कि डॉट परिपाटी किस प्रकार 3D वाइंडिंग चित्र बनाए बिना युग्मित परिपथों का विश्लेषण करने में सहायता करती है।',
        bn: 'জটিল থ্রিডি কয়েল ওয়াইন্ডিং চিত্র না এঁকেই কীভাবে ডট কনভেনশন কাপলড সার্কিট বিশ্লেষণে সহায়তা করে তা ব্যাখ্যা কর।'
      }
    }
  ]
};
