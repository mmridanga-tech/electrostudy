import { Lesson } from '../types';

export const LESSON_WIRELESS_POWER_INDUCTION_HEATING: Lesson = {
  id: 'lsn-ch8-wireless-power-induction-heating',
  topicId: 'ch8-wireless-power-induction-heating',
  chapterId: 'ch-inductors',
  order: 19,
  title: {
    en: 'Wireless Power Transfer (WPT) & Industrial Induction Heating',
    hi: 'वायरलेस पावर ट्रांसफर (WPT) एवं औद्योगिक प्रेरण तापन (Induction Heating)',
    bn: 'ওয়্যারলেস পাওয়ার ট্রান্সফার (WPT) ও ইন্ডাস্ট্রিয়াল ইনডাকশন হিটিং'
  },
  description: {
    en: 'Resonant inductive coupling principles for Qi wireless phone charging and EV charging pads, mutual coupling efficiency vs distance, industrial induction melting furnaces, domestic induction cooktops, and surface hardening skin effect depth control.',
    hi: 'Qi वायरलेस मोबाइल चार्जिंग एवं ईवी चार्जिंग हेतु रेजोनेंट इंडक्टिव कपलिंग, दूरी बनाम दक्षता, औद्योगिक प्रेरण भट्टी (Induction Furnaces), घरेलू इंडक्शन कुकटॉप एवं सतह कठोरीकरण (Surface Hardening)।',
    bn: 'স্মার্টফোন Qi ওয়্যারলেস চার্জিং ও ইভি চার্জিংয়ে রেজোন্যান্ট ইনডাক্টিভ কাপলিং, দূরত্ব বনাম কর্মদক্ষতা, ইন্ডাস্ট্রিয়াল ইনডাকশন ফার্নেস, গৃহস্থালি ইনডাকশন কুকার ও সারফেস হার্ডেনিং।'
  },
  easyExplanation: {
    en: 'Induction allows energy and intense heat to travel invisibly through thin air! In wireless phone chargers, high-frequency magnetic resonance transfers electrical energy between two flat coils with over 80% efficiency. In induction cooktops, that same magnetic field drives massive eddy currents directly inside an iron pan, boiling water in seconds while the glass stovetop remains completely cool to the touch!',
    hi: 'प्रेरण (Induction) ऊर्जा और तीव्र ऊष्मा को हवा के माध्यम से अदृश्य रूप से स्थानांतरित करता है! वायरलेस फोन चार्जर में चुंबकीय अनुनाद दो फ्लैट कुंडलियों के बीच 80% से अधिक दक्षता से बिजली भेजता है। वहीं इंडक्शन कुकटॉप में यही चुंबकीय क्षेत्र सीधे लोहे के बर्तन में भंवर धाराएं उत्पन्न करके सेकंडों में पानी उबाल देता है, जबकि स्टोव का कांच बिल्कुल ठंडा रहता है!',
    bn: 'ইন্ডাকশন প্রযুক্তির মাধ্যমে বাতাস ভেদ করে অদৃশ্যভাবে বিদ্যুৎ ও তীব্র তাপ স্থানান্তর করা যায়! ওয়্যারলেস চার্জারে ম্যাগনেটিক রেজোন্যান্সের সাহায্যে ৮০% এর বেশি দক্ষতায় ব্যাটারি চার্জ হয়। আর ইনডাকশন কুকারে এই চৌম্বক ক্ষেত্র সরাসরি ফ্রাইপ্যানের তলায় তীব্র এডি কারেন্ট ও হিস্টেরেসিস সৃষ্টি করে কয়েক সেকেন্ডে পানি ফুটিয়ে তোলে, অথচ কাচের উপরিভাগ সম্পূর্ণ ঠান্ডা থাকে!'
  },
  detailedExplanation: {
    en: `1. Principles of Wireless Power Transfer (WPT):
Wireless power transfer utilizes near-field magnetic coupling between a transmitting coil (Tx) and a receiving coil (Rx):
- Inductive Coupling (Non-Resonant): High efficiency only across microscopic sub-millimeter air gaps (e.g., electric toothbrushes).
- Magnetic Resonant Coupling (MRPT / Qi Standard):
  Adding tuning capacitors to both Tx and Rx coils creates matched LC resonant tanks tuned to identical resonance frequency (f_0 = 1 / (2π√(LC)) ≈ 85 kHz to 205 kHz for Qi, 85 kHz for SAE J2954 EV charging).
  Resonance magnifies the magnetic coupling factor k, maintaining 80% to 92% power transfer efficiency across several centimeters of air gap!

2. Physics of Induction Heating & Induction Cooktops:
When an alternating current of medium to high frequency (20 kHz to 50 kHz for cooktops, up to 500 kHz for industrial metallurgy) flows through a work coil:
1. High-frequency alternating magnetic flux penetrates the workpiece (ferromagnetic cooking pan or steel billet).
2. Eddy Current Heating (P_e = I²_eddy · R_pan): Massive circular eddy currents circulate near the outer skin of the pan, generating intense Joule heating (P ∝ f² · B²).
3. Hysteresis Heating (P_h = η · B^1.6 · f): Ferromagnetic materials undergo rapid cyclic domain flipping (B-H loop friction), generating secondary heat until reaching Curie temperature (T_c).
4. Safety & Efficiency: Only magnetic cookware heats up; non-magnetic ceramic glass and human hands experience zero direct heating!

3. Industrial Surface Hardening & Metallurgy:
By controlling the AC supply frequency, metallurgical engineers control the penetration skin depth δ = √(ρ / (π·f·μ)):
- High Frequency (200 kHz - 1 MHz, shallow skin depth δ < 0.5 mm): Heats only the outer surface of gears and camshafts for rapid water quenching (hard wear-resistant outer shell with tough, shock-absorbing ductile inner core).
- Low Frequency (50 Hz - 10 kHz, deep skin depth δ > 5 mm): Uniform deep heating for forging and crucible melting furnaces.`,
    hi: `1. वायरलेस पावर ट्रांसफर (WPT):
- रेजोनेंट इंडक्टिव कपलिंग (Qi मानक, 85 - 205 kHz): ट्रांसमीटर (Tx) और रिसीवर (Rx) दोनों को समान आवृत्ति पर ट्यून किया जाता है, जिससे हवा के गैप के बावजूद 85% - 90% दक्षता मिलती है।

2. इंडक्शन कुकिंग एवं हीटिंग का सिद्धांत:
- भंवर धारा तापन (Eddy Current): 20 - 50 kHz पर बर्तन के आधार में विशाल भंवर धाराएं उत्पन्न होकर अत्यधिक ऊष्मा उत्पन्न करती हैं।
- हिस्टैरिसीस तापन: लौहचुंबकीय डोमेन के घर्षण से ऊष्मा।

3. सतह कठोरीकरण (Surface Hardening):
आवृत्ति (Frequency) को नियंत्रित करके त्वचा गहराई (Skin depth) को नियंत्रित किया जाता है, जिससे गियर या शाफ्ट की केवल बाहरी सतह को सख्त बनाया जाता है।`,
    bn: `১. ওয়্যারলেস পাওয়ার ট্রান্সফার (WPT):
- রেজোন্যান্ট কাপলিং (Qi স্ট্যান্ডার্ড, ৮৫ - ২০৫ kHz): ট্রান্সমিটার ও রিসিভার কয়েলকে সম ফ্রিকোয়েন্সিতে রেজোন্যান্সে রেখে সেন্টিমিটার দূরত্বের বাতাস ভেদ করেও ৮৫-৯০% দক্ষতায় বিদ্যুৎ প্রেরণ করা হয়।

২. ইনডাকশন হিটিং ও কুকারের নীতি:
- এডি কারেন্ট হিটিং: ২০ - ৫০ kHz উচ্চ ফ্রিকোয়েন্সিতে পাত্রের তলায় চক্রাকার এডি কারেন্ট সৃষ্টি হয়ে সরাসরি তীব্র তাপ তৈরি করে।
- হিস্টেরেসিস হিটিং: চৌম্বক ডোমেইনের দিক পরিবর্তনের ঘর্ষণজনিত তাপ।

৩. ইন্ডাস্ট্রিয়াল সারফেস হার্ডেনিং:
ফ্রিকোয়েন্সি পরিবর্তনের মাধ্যমে স্কিন ডেপথ (Skin Depth) নিয়ন্ত্রণ করে গিয়ার বা শ্যাফটের বাইরের স্তর শক্ত (Hard) করা হয়।`
  },
  formulas: [
    {
      expression: 'f_0 = \\frac{1}{2\\pi \\sqrt{L_{Tx} \\cdot C_{Tx}}} = \\frac{1}{2\\pi \\sqrt{L_{Rx} \\cdot C_{Rx}}}',
      description: {
        en: 'Matched resonant frequency for resonant wireless power transfer',
        hi: 'रेजोनेंट वायरलेस पावर ट्रांसफर हेतु ट्यून्ड अनुनाद आवृत्ति',
        bn: 'রেজোন্যান্ট ওয়্যারলেস পাওয়ার ট্রান্সফারে টিউনড রেজোন্যান্স ফ্রিকোয়েন্সি'
      }
    }
  ],
  workedExamples: [
    {
      problem: {
        en: 'An induction surface-hardening machine operates at f = 450 kHz on a steel axle (resistivity ρ = 2.0 × 10⁻⁷ Ω·m, relative permeability μr = 300). Calculate the skin penetration depth δ where the heating will be concentrated.',
        hi: 'एक इंडक्शन मशीन 450 kHz पर स्टील एक्सल (ρ = 2.0 × 10⁻⁷ Ω·m, μr = 300) को गर्म करती है। ऊष्मा की त्वचा गहराई (Skin depth δ) ज्ञात करें।',
        bn: 'একটি ইনডাকশন হিটিং মেশিন ৪৫০ kHz ফ্রিকোয়েন্সিতে স্টিল শ্যাফটে (ρ = ২.০ × ১০⁻⁷ Ω·m, μr = ৩০০) কাজ করে। সারফেস হিটিংয়ের স্কিন ডেপথ δ নির্ণয় করো।'
      },
      solution: {
        en: `Given:
f = 450 kHz = 450 × 10³ Hz
ρ = 2.0 × 10⁻⁷ Ω·m
μr = 300
μ = μ0 · μr = (4π × 10⁻⁷) × 300 = 3.7699 × 10⁻⁴ H/m

Apply Skin Depth Equation:
δ = √( ρ / (π · f · μ) )
Denominator = π × (450 × 10³) × (3.7699 × 10⁻⁴) = 3.14159 × 450,000 × 3.7699 × 10⁻⁴ = 533.0
δ = √( (2.0 × 10⁻⁷) / 533.0 ) = √( 3.7523 × 10⁻¹⁰ )
δ = 1.937 × 10⁻⁵ meters = 0.0194 mm (≈ 19.4 micrometers!).
Heat is intensely focused within the ultra-thin surface layer!`,
        hi: `δ = √( ρ / (π · f · μ) )
μ = 4π × 10⁻⁷ × 300 = 3.77 × 10⁻⁴ H/m
δ = √( 2×10⁻⁷ / (π × 450000 × 3.77×10⁻⁴) ) = 0.0194 mm (19.4 माइक्रोन)।`,
        bn: `δ = √( ρ / (π · f · μ) )
μ = ৪π × ১০⁻⁷ × ৩০০ = ৩.৭৭ × ১০⁻⁴ H/m
δ = √( ২×১০⁻⁷ / (π × ৪৫০,০০০ × ৩.৭৭×১০⁻⁴) ) = ০.০১৯৪ mm (১৯.৪ মাইক্রন)।`
      }
    }
  ],
  quiz: [
    {
      question: {
        en: 'Why does an aluminum or pure copper pan fail to heat up properly on a standard domestic induction cooktop?',
        hi: 'एक एल्यूमीनियम या शुद्ध तांबे का बर्तन मानक घरेलू इंडक्शन कुकटॉप पर ठीक से गर्म क्यों नहीं होता है?',
        bn: 'একটি অ্যালুমিনিয়াম বা বিশুদ্ধ তামার পাত্র সাধারণ গৃহস্থালি ইনডাকশন চুলায় কেন সঠিকভাবে উত্তপ্ত হয় না?'
      },
      options: {
        en: ['Because non-ferromagnetic metals (μr ≈ 1) have deep skin depth and very low electrical resistance, preventing sufficient I²R heat development', 'Because copper absorbs all magnetic fields without conducting', 'Because aluminum reflects magnetic waves back to the power grid', 'Because induction cooktops require 100% plastic cookware'],
        hi: ['क्योंकि गैर-चुंबकीय धातुओं (μr ≈ 1) में त्वचा गहराई अधिक और विद्युत प्रतिरोध बहुत कम होता है, जिससे पर्याप्त I²R ऊष्मा नहीं बन पाती', 'क्योंकि तांबा बिना धारा के सारा क्षेत्र सोख लेता है', 'क्योंकि एल्युमीनियम चुंबकीय तरंगों को परावर्तित करता है', 'क्योंकि इसके लिए प्लास्टिक बर्तन चाहिए'],
        bn: ['কারণ নন-ফেরোম্যাগনেটিক ধাতুতে (μr ≈ ১) স্কিন ডেপথ বেশি ও অতি নিম্ন রোধের কারণে পর্যাপ্ত I²R তাপ সৃষ্টি হতে পারে না', 'কারণ তামা চৌম্বক ক্ষেত্র শোষণ করে', 'কারণ অ্যালুমিনিয়াম তরঙ্গ প্রতিফলিত করে', 'কারণ এর জন্য প্লাস্টিক পাত্র দরকার']
      },
      correctAnswer: 0,
      explanation: {
        en: 'Standard cooktops require ferromagnetic cast iron or stainless steel (high μr and moderate resistivity) to concentrate high resistance eddy currents in a thin skin layer.',
        hi: 'इंडक्शन कुकटॉप को उच्च μr और उपयुक्त प्रतिरोध वाले लोहे/स्टील के बर्तन की आवश्यकता होती है ताकि पतली परत में पर्याप्त भंवर धारा ऊष्मा बन सके।',
        bn: 'ইনডাকশন চুলার জন্য ফেরোম্যাগনেটিক লোহা বা স্টেইনলেস স্টিল প্রয়োজন, যার উচ্চ প্রবেশ্যতা ও রোধের কারণে উপরিভাগে তীব্র তাপ তৈরি হয়।'
      }
    }
  ],
  flashcards: [
    {
      term: {
        en: 'Resonant Inductive Coupling',
        hi: 'रेजोनेंट इंडक्टिव कपलिंग',
        bn: 'রেজোন্যান্ট ইনডাক্টিভ কাপলিং'
      },
      definition: {
        en: 'Near-field wireless energy transfer technique using matched LC resonant tanks to achieve high efficiency across air gaps.',
        hi: 'समान LC अनुनाद आवृत्ति का उपयोग करके हवा के माध्यम से उच्च दक्षता से बिजली भेजने की तकनीक।',
        bn: 'সম ফ্রিকোয়েন্সির LC রেজোন্যান্স সার্কিট ব্যবহার করে বাতাস ভেদ করে উচ্চ দক্ষতায় বিদ্যুৎ প্রেরণের পদ্ধতি।'
      }
    }
  ]
};
