import { Lesson } from '../types';

export const LESSON_EM_INDUCTION_TESTING_SAFETY_CAPSTONE: Lesson = {
  id: 'lsn-ch10-em-induction-testing-safety-capstone',
  topicId: 'ch10-em-induction-testing-safety-capstone',
  chapterId: 'ch-em-induction',
  order: 20,
  title: {
    en: 'EM Induction Testing, Diagnostics & Electrical Safety',
    hi: 'विद्युत-चुंबकीय प्रेरण परीक्षण, नैदानिक विधियां एवं विद्युत सुरक्षा कैपस्टोन',
    bn: 'তড়িৎচৌম্বকীয় আবেশ পরীক্ষণ, ডায়াগনস্টিক পদ্ধতি ও বৈদ্যুতিক নিরাপত্তা ক্যাপস্টোন'
  },
  description: {
    en: 'Comprehensive diagnostic testing of electromagnetic induction apparatus: transformer turns-ratio (TTR), excitation current analysis, winding resistance & Megger insulation, inductive kickback flyback protection, ghost induced voltages on parallel lines, lock-out/tag-out (LOTO), working earthing protocols, and personal safety.',
    hi: 'विद्युत-चुंबकीय प्रेरण उपकरणों का संपूर्ण नैदानिक परीक्षण: ट्रांसफार्मर टर्न-अनुपात (TTR), उत्तेजना धारा विश्लेषण, वाइंडिंग प्रतिरोध एवं मेगर इंसुलेशन, इंडक्टिव किकबैक फ्लाईबैक सुरक्षा, समानांतर लाइनों पर प्रेत प्रेरित वोल्टेज (Ghost Voltage), LOTO एवं सुरक्षात्मक भूसंपर्कन (Earthing) प्रोटोकॉल।',
    bn: 'তড়িৎচৌম্বকীয় আবেশ যন্ত্রপাতির বিশদ ডায়াগনস্টিক টেস্ট: ট্রান্সফরমার টার্নস রেশিও (TTR), এক্সাইটেশন কারেন্ট, মেগার ইনসুলেশন রোধ, ইন্ডাক্টিভ কিকব্যাক সুরক্ষা, সমান্তরাল লাইনে আবিষ্ট ভূতুড়ে ভোল্টেজ, LOTO ও সুরক্ষামূলক আর্থিং প্রটোকল।'
  },
  estimatedMinutes: 40,
  easyExplanation: {
    en: 'Electromagnetic induction is one of humanity’s greatest superpowers—it generates our city power, drives high-speed bullet trains, and melts alloy steels without flame. But when mishandled, changing magnetic fields can bite with deadly ferocity! If you abruptly flip a switch open on an energized electric motor coil or industrial transformer, the collapsing magnetic field violently jacks the voltage from 24 volts up to thousands of sparking volts in a microsecond (Inductive Kickback)—enough to blow sensitive microchips to dust or arc through human flesh! Furthermore, high-voltage lines running next to a shut-down, supposedly "dead" power cable can silently beam hundreds of lethal volts right into it across empty air by mutual induction (Ghost Voltage). In this capstone lesson, you master the professional engineering safety codes: how to use CAT IV instruments, verify "Live-Dead-Live" testing, install temporary working earths to clamp rogue voltages to zero, and safely discharge stored magnetic energy before touching any high-inductance machine!',
    hi: 'विद्युत-चुंबकीय प्रेरण मानव सभ्यता की सबसे बड़ी शक्तियों में से एक है—यह हमारे शहरों को बिजली देता है, बुलेट ट्रेनों को दौड़ाता है और धातुओं को सेकंडों में पिघला देता है। लेकिन यदि इसमें लापरवाही की जाए, तो बदलता चुंबकीय क्षेत्र जानलेवा साबित हो सकता है! जब आप किसी चालू मोटर या बड़े ट्रांसफार्मर का स्विच अचानक बंद करते हैं, तो ढहता हुआ चुंबकीय क्षेत्र एक माइक्रोसेकंड में वोल्टेज को 24 वोल्ट से बढ़ाकर हजारों वोल्ट कर देता है (Inductive Kickback)—जो चिप्स को जला सकता है या इंसान को घातक झटका दे सकता है! इसके अलावा, चालू बिजली लाइन के बगल में बंद पड़ी लाइन में भी हवा के रास्ते सैकड़ों वोल्ट का खतरनाक करंट कूद सकता है (Ghost Voltage)। इस कैपस्टोन अध्याय में आप सीखेंगे: सुरक्षा उपकरण (CAT IV मीटर), "लाइव-डेड-लाइव" परीक्षण, सुरक्षात्मक अर्थिंग (Earthing), और किसी भी मशीन को छूने से पहले उसकी चुंबकीय ऊर्जा को सुरक्षित रूप से खत्म करने के पेशेवर इंजीनियरिंग नियम!',
    bn: 'তড়িৎচৌম্বকীয় আবেশ হলো আধুনিক সভ্যতার অন্যতম শক্তিশালী চালিকাশক্তি—এটি শহরের বিদ্যুৎ উৎপাদন করে, বুলেট ট্রেন চালায় এবং কোনো আগুন ছাড়াই ধাতু গলিয়ে দেয়। কিন্তু অসতর্ক হলে এই পরিবর্তনশীল চৌম্বক ক্ষেত্র মারাত্মক প্রাণঘাতী হতে পারে! একটি চালু ইন্ডাক্টর বা মোটরের সুইচ হঠাৎ বন্ধ করলে তার ভেঙে পড়া চৌম্বক ক্ষেত্র চোখের পলকে ২৪ ভোল্টকে কয়েক হাজার ভোল্টের উচ্চ আর্কে রূপান্তর করে (Inductive Kickback)—যা মুহূর্তের ভেতর সেমিকন্ডাক্টর উড়িয়ে দিতে পারে বা মানুষের শরীরে মারাত্মক শক দিতে পারে! এমনকি বন্ধ থাকা কোনো পাওয়ার লাইনের পাশ দিয়ে যদি অন্য কোনো সক্রিয় হাই-ভোল্টেজ লাইন যায়, তবে পারস্পরিক আবেশের কারণে বন্ধ লাইনেও বাতাসে ভেসে শত শত প্রাণঘাতী ভোল্টেজ আবিষ্ট হতে পারে (Ghost Voltage)। এই ক্যাপস্টোন পাঠে আপনি শিখবেন প্রকৌশলীদের পেশাদার নিরাপত্তা নিয়মাবলী: CAT IV মিটারের ব্যবহার, "লাইভ-ডেড-লাইভ" টেস্টিং, অস্থায়ী নিরাপত্তা আর্থিং এবং কয়েলে সঞ্চিত শক্তি ডিসচার্জ করার পদ্ধতি!'
  },
  detailedExplanation: {
    en: `1. Inductive Kickback & Flyback Transient Suppression:
When an inductive circuit carrying steady-state current I_0 is abruptly opened (switch resistance transitions from zero to infinity in time dt → 0):
- By Faraday's and Lenz's law, the collapsing magnetic field induces a counter-EMF opposing the decrease:
  e_kickback = -L · (di / dt)
- Since dt is on the order of microseconds (10⁻⁶ s) during mechanical contact separation or transistor turn-off, di/dt reaches millions of amperes per second, producing lethal kilovolt spikes (e.g., L = 1 H, I = 2 A, dt = 1 µs yields e = -1 × (-2 / 10⁻⁶) = +2,000,000 V in theory, clamped only by contact air-gap dielectric arc breakdown).
- Mitigation: Parallel anti-parallel Flyback (Freewheeling) Diodes across DC coils, RC Snubber networks (R_s + C_s) across AC coils, or Metal-Oxide Varistors (MOVs) to safely clamp transients below the breakdown rating of switching devices.

2. Ghost Induced Voltages on De-Energized Lines:
Substation technicians frequently encounter hazardous voltages (hundreds of volts AC) on completely de-energized, isolated transmission lines:
- Mechanism 1 (Mutual Inductive Coupling): Live parallel circuits carrying alternating load current I_live induce longitudinal EMFs via mutual inductance:
  V_ind = -j · ω · M · I_live · Length
- Mechanism 2 (Capacitive Coupling): Electrostatic capacitance between parallel conductors divides the high voltage of the live circuit onto the isolated conductor.
- Low-impedance Digital Multimeters (LoZ mode) or analog moving-coil meters bleed off high-impedance capacitive ghost voltages, whereas genuine electromagnetic induced voltages (M·di/dt) maintain high continuous current capacity.
- Safety Rule: Always install rated Temporary Working Earths (protective drain grounds) on BOTH ends of the isolated section to force induced potentials to 0 V before human physical contact.

3. Transformer & Machine Diagnostic Testing:
- Transformer Turns Ratio (TTR) Test: Applies a low AC test voltage (e.g., 100 V AC) to the primary winding and precisely measures secondary open-circuit voltage to verify turns ratio N_1/N_2 within 0.5% tolerance (ANSI/IEEE C57.12.90). Detects shorted turns, tap-changer misalignments, and core damage.
- DC Winding Resistance Test: Uses a 4-wire Kelvin bridge to measure micro-ohm resistances of copper coils. Because high-voltage transformer windings have huge inductances (tens of Henries), applying DC current takes several minutes to saturate the core (L/R time constant). When turning off the test set, the inductive energy 1/2 L I² must be discharged through an internal automated discharge resistor before removing test leads!
- Insulation Resistance (Megger) Test: Applies 500 V, 1,000 V, 2,500 V, or 5,000 V DC between winding and grounded tank to verify dielectric integrity (minimum standard: 1 MΩ per 1,000 V rating plus 1 MΩ baseline).
- Polarization Index (PI): Ratio of 10-minute insulation resistance to 1-minute insulation resistance (PI = R_10min / R_1min). A value PI ≥ 2.0 indicates dry, clean, undamaged insulation; PI < 1.5 warns of moisture ingress or thermal aging.

4. The "Live-Dead-Live" Safe Isolation Protocol:
The premier golden rule of electrical life safety:
- Step 1: Verify the operation of the high-voltage detector or multimeter on a known LIVE source (or dedicated portable Proving Unit).
- Step 2: Test the circuit under maintenance to prove it is DEAD across all phases and to ground.
- Step 3: Immediately re-test the instrument on the LIVE source / proving unit to confirm the meter did not suffer battery failure, blown internal fuse, or open probe lead during the test.

5. Energy Storage & Personal Protective Equipment (PPE):
- Inductors store electromagnetic field energy: W_mag = (1/2) · L · I² (Joules).
- Capacitors store electrostatic field energy: W_elec = (1/2) · C · V² (Joules).
- Technicians must wear NFPA 70E rated Arc Flash PPE (safety face shields, arc-rated fire-resistant clothing, and insulating rubber gloves rated for system line voltage) when working within arc-flash boundaries.`,
    hi: 'विद्युत-चुंबकीय प्रेरण परीक्षण, सुरक्षा एवं नैदानिक विधियों का विस्तृत इंजीनियरिंग विश्लेषण: इंडक्टिव किकबैक e = -L(di/dt), फ्लाईबैक डायोड एवं स्नबर सुरक्षा, समानांतर लाइनों पर प्रेत वोल्टेज (Ghost Voltage), TTR परीक्षण, 4-वायर केल्विन वाइंडिंग प्रतिरोध, मेगर इंसुलेशन एवं पोलराइजेशन इंडेक्स (PI), "लाइव-डेड-लाइव" सुरक्षा प्रोटोकॉल तथा सुरक्षात्मक भूसंपर्कन (Working Earths)।',
    bn: 'তড়িৎচৌম্বকীয় আবেশ পরীক্ষণ, নিরাপত্তা ও ডায়াগনস্টিকের বিশদ প্রকৌশল বিশ্লেষণ: ইন্ডাক্টিভ কিকব্যাক e = -L(di/dt), ফ্লাইব্যাক ডায়োড ও স্নাবার প্রোটেকশন, সমান্তরাল লাইনে ভৌতিক ভোল্টেজ (Ghost Voltage), TTR টেস্ট, কেলভিন ৪-ওয়্যার ওয়াইন্ডিং রোধ, মেগার ইনসুলেশন ও পোলারাইজেশন ইনডেক্স (PI), "লাইভ-ডেড-লাইভ" সুরক্ষা প্রটোকল এবং সুরক্ষামূলক ড্রেন আর্থিং।'
  },
  formulas: [
    {
      id: 'f-ch10-l20-1',
      formula: 'e_kickback = -L · (di / dt)',
      description: {
        en: 'Inductive kickback transient voltage generated when circuit current is abruptly interrupted.',
        hi: 'परिपथ की धारा को अचानक काटने पर उत्पन्न इंडक्टिव किकबैक क्षणिक वोल्टेज।',
        bn: 'সার্কিটের কারেন্ট হঠাৎ বিচ্ছিন্ন করলে উৎপন্ন ইন্ডাক্টিভ কিকব্যাক ক্ষণস্থায়ী ভোল্টেজ।'
      }
    },
    {
      id: 'f-ch10-l20-2',
      formula: 'V_ghost = -j · ω · M · I_parallel · Length',
      description: {
        en: 'Longitudinally induced ghost voltage on an isolated line coupled to a live parallel circuit.',
        hi: 'समानांतर चालू लाइन से अलग की गई निष्क्रिय लाइन पर प्रेरित प्रेत वोल्टेज (Ghost Voltage)।',
        bn: 'পাশ্ববর্তী সক্রিয় লাইনের পারস্পরিক আবেশাঙ্কের কারণে বিচ্ছিন্ন লাইনে আবিষ্ট ভৌতিক ভোল্টেজ।'
      }
    },
    {
      id: 'f-ch10-l20-3',
      formula: 'PI = R_insulation(10 min) / R_insulation(1 min)',
      description: {
        en: 'Polarization Index (PI) for assessing insulation dryness and dielectric aging (healthy PI ≥ 2.0).',
        hi: 'इंसुलेशन की नमी और उम्र जांचने के लिए पोलराइजेशन इंडेक्स (स्वस्थ इंसुलेशन हेतु PI ≥ 2.0)।',
        bn: 'ইনসুলেশনের আর্দ্রতা ও অবক্ষয় পরিমাপের পোলারাইজেশন ইনডেক্স (PI) (সুস্থ কয়েলের জন্য PI ≥ ২.০)।'
      }
    },
    {
      id: 'f-ch10-l20-4',
      formula: 'W_stored = (1/2) · L · I²',
      description: {
        en: 'Electromagnetic energy (Joules) stored in the magnetic field of a high-inductance winding.',
        hi: 'उच्च-प्रेरकत्व वाइंडिंग के चुंबकीय क्षेत्र में संचित ऊर्जा (जूल)।',
        bn: 'উচ্চ-আবেশাঙ্ক বিশিষ্ট ওয়াইন্ডিংয়ের চৌম্বক ক্ষেত্রে সঞ্চিত শক্তি (জুল এককে)।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ch10-l20-1',
      title: {
        en: 'Electromagnetic Induction Testing, Diagnostics & Safe Isolation Protocol Architecture',
        hi: 'विद्युत-चुंबकीय प्रेरण परीक्षण, डायग्नोस्टिक्स एवं सुरक्षित अलगाव प्रोटोकॉल आर्किटेक्चर',
        bn: 'তড়িৎচৌম্বকীয় আবেশ পরীক্ষণ, ডায়াগনস্টিক ও নিরাপদ আইসোলেশন প্রটোকল আর্কিটেকচার'
      },
      caption: {
        en: 'Comprehensive 4-stage engineering diagnostic pipeline: 1. Physical law verification, 2. Loss & heat calculation, 3. CAT IV Live-Dead-Live instrumentation, 4. LOTO & protective working earths.',
        hi: '4-चरणीय डायग्नोस्टिक पाइपलाइन: भौतिक नियम सत्यापन, ऊष्मा गणना, CAT IV परीक्षण मीटर, एवं LOTO तथा सुरक्षात्मक अर्थिंग।',
        bn: '৪-ধাপের প্রকৌশল ডায়াগনস্টিক রূপরেখা: ভৌত সূত্রের প্রয়োগ, তাপ ও ক্ষয় হিসাব, CAT IV টেস্ট মিটার এবং LOTO ও সুরক্ষামূলক আর্থিং।'
      },
      svgType: 'circuit-ch10-em-induction-testing-safety-capstone'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch10-l20-1',
      problem: {
        en: 'An industrial DC solenoid contactor has an inductance of L = 2.5 Henries and carries a steady current of I_0 = 4.0 Amperes. When the control circuit relay switch opens, the current is forced to zero across the opening mechanical air gap in a rapid time of dt = 0.50 milliseconds (5.0 × 10⁻⁴ seconds). Calculate: (a) The stored magnetic energy in the coil before opening, and (b) The theoretical inductive kickback voltage e_kickback generated across the opening contacts if no flyback diode is installed.',
        hi: 'एक औद्योगिक डीसी सोलेनोइड रिले का प्रेरकत्व L = 2.5 H है और इसमें I_0 = 4.0 A की स्थिर धारा बह रही है। स्विच खुलने पर धारा केवल dt = 0.50 मिलीसेकंड (5.0 × 10⁻⁴ s) में शून्य हो जाती है। ज्ञात कीजिए: (a) खुलने से पहले कॉइल में संचित चुंबकीय ऊर्जा, तथा (b) बिना फ्लाईबैक डायोड के स्विच संपर्कों पर उत्पन्न इंडक्टिव किकबैक वोल्टेज।',
        bn: 'একটি শিল্প ডিসি রিলে কয়েলের আবেশাঙ্ক L = ২.৫ হেনরি এবং এতে ৪.০ অ্যাম্পিয়ার কারেন্ট প্রবাহিত হচ্ছে। সুইচ বন্ধ করার সময় কারেন্ট মাত্র dt = ০.৫০ মিলিসেকেন্ডে (৫.০ × ১০⁻⁴ s) শূন্যে নেমে আসে। নির্ণয় করুন: (a) কয়েলে সঞ্চিত চৌম্বক শক্তি, এবং (b) কোনো প্রোটেকশন ডায়োড না থাকলে সুইচের দুই প্রান্তে উৎপন্ন ইন্ডাক্টিভ কিকব্যাক ভোল্টেজ।'
      },
      solution: {
        en: `Part (a): Calculate stored magnetic energy W_stored:
  W_stored = (1/2) · L · I_0²
  W_stored = 0.5 × (2.5 H) × (4.0 A)²
  W_stored = 0.5 × 2.5 × 16 = 20.0 Joules.
(Note: 20 Joules is a substantial amount of energy, equivalent to a 2 kg weight dropped from 1 meter height, capable of destroying microprocessors or causing electrical burns).

Part (b): Calculate induced kickback voltage:
  di = I_final - I_initial = 0 - 4.0 A = -4.0 A
  dt = 5.0 × 10⁻⁴ s
  di / dt = -4.0 A / (5.0 × 10⁻⁴ s) = -8,000 A/s
Now apply Faraday's and Lenz's law for self-induction:
  e_kickback = -L · (di / dt)
  e_kickback = -(2.5 H) × (-8,000 A/s)
  e_kickback = +20,000 Volts (20 kV!).

Conclusion: The collapsing magnetic field violently induces 20,000 Volts across the opening contacts, creating a fiery electric arc across the air gap. Installing a flyback diode safely clamps this voltage to ~0.7 Volts, protecting switches and personnel.`,
        hi: 'भाग (a): संचित ऊर्जा W = 0.5 × L × I² = 0.5 × 2.5 × 16 = 20.0 जूल। भाग (b): di/dt = -4 / (5×10⁻⁴) = -8000 A/s। e = -L(di/dt) = -2.5 × (-8000) = +20,000 V (20 kV)।',
        bn: 'অংশ (a): সঞ্চিত শক্তি W = ০.৫ × ২.৫ × ১৬ = ২০.০ জুল। অংশ (b): di/dt = -৪ / (৫×১০⁻⁴) = -৮০০০ A/s। e = -L(di/dt) = -২.৫ × (-৮০০০) = +২০,০০০ ভোল্ট (২০ kV)।'
      },
      finalAnswer: {
        en: '(a) W = 20.0 Joules, (b) e = 20,000 Volts (20 kV)',
        hi: '(a) W = 20.0 Joules, (b) e = 20,000 Volts (20 kV)',
        bn: '(a) W = ২০.০ জুল, (b) e = ২০,০০০ ভোল্ট (২০ kV)'
      }
    },
    {
      id: 'ex-ch10-l20-2',
      problem: {
        en: 'A 20 MVA, 132 kV / 11 kV substation transformer undergoes an insulation resistance (Megger) diagnostic test between the high-voltage winding and the grounded transformer tank at 2,500 V DC. The measured resistance at 1 minute is R_1min = 450 MΩ, and the measured resistance at 10 minutes is R_10min = 1,125 MΩ. Calculate the Polarization Index (PI) and evaluate whether the transformer insulation condition is healthy or degraded according to IEEE 43 standards.',
        hi: 'एक 20 MVA, 132 kV / 11 kV सबस्टेशन ट्रांसफार्मर पर 2,500 V DC पर मेगर परीक्षण किया जाता है। 1 मिनट पर मापा गया प्रतिरोध R_1min = 450 MΩ है तथा 10 मिनट पर R_10min = 1,125 MΩ है। पोलराइजेशन इंडेक्स (PI) की गणना कीजिए और IEEE 43 मानकों के आधार पर बताएं कि इंसुलेशन स्वस्थ है या खराब।',
        bn: 'একটি ২০ MVA, ১৩২ kV / ১১ kV সাবস্টেশন ট্রান্সফরমারে ২৫০০ V DC তে মেগার পরীক্ষা করা হলো। ১ মিনিটে প্রাপ্ত ইনসুলেশন রোধ R_1min = ৪৫০ MΩ এবং ১০ মিনিটে R_10min = ১১২৫ MΩ। পোলারাইজেশন ইনডেক্স (PI) নির্ণয় করুন এবং IEEE 43 মানদণ্ড অনুসারে ইনসুলেশন সুস্থ কিনা মূল্যায়ন করুন।'
      },
      solution: {
        en: `Step 1: Apply the formula for Polarization Index (PI):
  PI = R_insulation(10 minutes) / R_insulation(1 minute)
  PI = 1,125 MΩ / 450 MΩ
  PI = 2.50.

Step 2: Compare against international IEEE 43 / ANSI diagnostic criteria:
- Dangerous / Degraded: PI < 1.0 (requires immediate investigation)
- Poor / Questionable: 1.0 ≤ PI < 1.5 (moisture contamination or dirt ingress)
- Fair: 1.5 ≤ PI < 2.0
- Good / Healthy: 2.0 ≤ PI ≤ 4.0

Conclusion: Because PI = 2.50 (which is well above the minimum healthy benchmark of 2.0), the transformer insulation exhibits excellent dielectric absorption characteristics. The insulation is clean, dry, thermally intact, and safe for high-voltage energization.`,
        hi: 'चरण 1: PI = R(10 min) / R(1 min) = 1125 / 450 = 2.50। चरण 2: चूंकि PI = 2.50 (जो कि 2.0 से अधिक है), अतः IEEE 43 के अनुसार ट्रांसफार्मर का इंसुलेशन उत्कृष्ट, सूखा और पूरी तरह स्वस्थ है।',
        bn: 'ধাপ ১: PI = R(১০ মিনিট) / R(১ মিনিট) = ১১২৫ / ৪৫০ = ২.৫০। ধাপ ২: যেহেতু PI = ২.৫০ (যা ন্যূনতম স্বাস্থ্যকর মান ২.০ এর চেয়ে বেশি), তাই ট্রান্সফরমারটির ইনসুলেশন অত্যন্ত উন্নত, শুষ্ক এবং নিরাপদে ব্যবহার উপযোগী।'
      },
      finalAnswer: {
        en: 'PI = 2.50 (Healthy & Dry insulation, passes IEEE 43)',
        hi: 'PI = 2.50 (उत्कृष्ट एवं सूखा इंसुलेशन, IEEE 43 उत्तीर्ण)',
        bn: 'PI = ২.৫০ (উন্নত ও শুষ্ক ইনসুলেশন, IEEE 43 উত্তীর্ণ)'
      }
    }
  ],
  practicalApplications: [
    {
      en: 'High-Voltage Switchyard Safe Isolation: Installing temporary working earths with insulated fiberglass hot-sticks to drain ghost induced voltages from parallel lines before maintenance.',
      hi: 'हाई-वोल्टेज स्विचयार्ड सुरक्षित अलगाव: समानांतर लाइनों से प्रेरित वोल्टेज को सुरक्षित करने के लिए हॉट-स्टिक से अस्थायी अर्थिंग लगाना।',
      bn: 'হাই-ভোল্টেজ সুইচইয়ার্ড আইসোলেশন: সমান্তরাল লাইনের আবিষ্ট ভোল্টেজ মাটিতে নিষ্কাশন করার জন্য ফাইবারগ্লাস রড দিয়ে গ্রাউন্ডিং স্থাপন।'
    },
    {
      en: 'Inductive Kickback Protection in Industrial Automation: Connecting flyback diodes across solenoid valve coils and contactors to prevent 10,000 V spikes from destroying PLC output transistors.',
      hi: 'औद्योगिक ऑटोमेशन में इंडक्टिव किकबैक सुरक्षा: पीएलसी और ट्रांजिस्टर को जलने से बचाने के लिए रिले कॉइल के समानांतर फ्लाईबैक डायोड लगाना।',
      bn: 'শিল্প অটোমেশনে কিকব্যাক সুরক্ষা: PLC ও ট্রানজিস্টর ধ্বংস হওয়া থেকে রক্ষা করতে রিলে কয়েলের সাথে সমান্তরালে ফ্লাইব্যাক ডায়োড ব্যবহার।'
    },
    {
      en: 'Substation Transformer Quality Commissioning: Performing Transformer Turns Ratio (TTR) and winding resistance tests to detect damaged coil turns prior to grid interconnection.',
      hi: 'ट्रांसफार्मर कमीशनिंग परीक्षण: ग्रिड से जोड़ने से पहले खराब टर्न का पता लगाने के लिए TTR एवं वाइंडिंग प्रतिरोध परीक्षण करना।',
      bn: 'সাবস্টেশন ট্রান্সফরমার কমিশনিং: গ্রিডে যুক্ত করার পূর্বে ক্ষতিগ্রস্ত কয়েল শনাক্ত করতে TTR ও ওয়াইন্ডিং রোধ টেস্ট সম্পন্ন করা।'
    },
    {
      en: 'Electric Motor Insulation Health Diagnostics: Applying high-voltage Megger DC tests to measure insulation resistance and Polarization Index (PI) before factory startup.',
      hi: 'मोटर इंसुलेशन स्वास्थ्य परीक्षण: कारखाने में मोटर चालू करने से पहले नमी और खराबी जांचने के लिए मेगर परीक्षण करना।',
      bn: 'মোটর ইনসুলেশন ডায়াগনস্টিক: ফ্যাক্টরি চালুর পূর্বে কয়েলের আর্দ্রতা ও অবক্ষয় পরিমাপে উচ্চ-ভোল্টেজ মেগার টেস্ট করা।'
    },
    {
      en: 'Lockout/Tagout (LOTO) & Live-Dead-Live Testing: Verifying complete absence of voltage using approved CAT IV meters before touching industrial busbars.',
      hi: 'LOTO एवं लाइव-डेड-लाइव परीक्षण: बसबार को छूने से पहले CAT IV मीटर द्वारा वोल्टेज की पूर्ण अनुपस्थिति सत्यापित करना।',
      bn: 'LOTO ও লাইভ-ডেড-লাইভ পরীক্ষণ: যেকোনো বাসবার স্পর্শ করার আগে CAT IV মিটার দিয়ে ভোল্টেজ অনুপস্থিতি নিশ্চিত করা।'
    }
  ],
  importantPoints: [
    {
      en: 'Inductive kickback voltage is proportional to the rate of current decay: e = -L(di/dt). Rapid switching of large inductors produces kilovolt breakdown arcs.',
      hi: 'इंडक्टिव किकबैक धारा के घटने की दर के समानुपाती होता है: e = -L(di/dt)। अचानक स्विच खोलने से हजारों वोल्ट का झटका पैदा होता है।',
      bn: 'ইন্ডাক্টিভ কিকব্যাক ভোল্টেজ কারেন্ট হ্রাসের হারের সমানুপাতিক: e = -L(di/dt)। হঠাৎ সুইচ বন্ধ করলে কয়েক হাজার ভোল্টের আর্ক তৈরি হয়।'
    },
    {
      en: 'Never assume a de-energized high-voltage cable is safe: parallel active lines can induce hundreds of continuous volts through mutual inductance M.',
      hi: 'बंद पड़ी बिजली लाइन को कभी भी सुरक्षित न समझें: बगल की चालू लाइनें पारस्परिक प्रेरण से उसमें सैकड़ों वोल्ट प्रेरित कर सकती हैं।',
      bn: 'বন্ধ থাকা হাই-ভোল্টেজ লাইনকে কখনো স্পর্শযোগ্য নিরাপদ ভাববেন না: পাশ্ববর্তী সক্রিয় লাইন থেকে পারস্পরিক আবেশে শত শত ভোল্ট আবিষ্ট হতে পারে।'
    },
    {
      en: 'Always enforce the "Live-Dead-Live" test on a known source or proving unit before and after testing any de-energized circuit.',
      hi: 'किसी भी सर्किट को डेड जांचने से पहले और बाद में मीटर को ज्ञात लाइव स्रोत (Proving Unit) पर हमेशा जांचें।',
      bn: 'যেকোনো সার্কিট পরীক্ষার আগে ও পরে টেস্ট মিটারটি অবশ্যই একটি পরিচিত সচল উৎসে যাচাই (Live-Dead-Live) করুন।'
    },
    {
      en: 'Technicians must use instruments with appropriate CAT IV / CAT III ratings to prevent catastrophic arc flash explosions under grid transient overvoltages.',
      hi: 'ग्रिड पर हाई-वोल्टेज स्पाइक्स के कारण मीटर को फटने से बचाने के लिए केवल CAT IV / CAT III प्रमाणित मीटर का उपयोग करें।',
      bn: 'গ্রিডের ক্ষণস্থায়ী ওভারভোল্টেজে মিটার বিস্ফোরিত হওয়া ঠেকাতে অবশ্যই CAT IV / CAT III রেটিংযুক্ত মিটার ব্যবহার করতে হবে।'
    },
    {
      en: 'High-inductance transformer windings store significant energy (1/2 L I²); always wait for the internal discharge cycle to complete before removing test leads.',
      hi: 'ट्रांसफार्मर की वाइंडिंग में भारी ऊर्जा (1/2 L I²) संचित होती है; लीड हटाने से पहले हमेशा पूरी तरह डिस्चार्ज होने की प्रतीक्षा करें।',
      bn: 'ট্রান্সফরমার কয়েলে প্রচুর শক্তি (1/2 L I²) সঞ্চিত থাকে; টেস্ট লিড খোলার আগে স্বয়ংক্রিয় ডিসচার্জ সম্পন্ন হওয়া নিশ্চিত করুন।'
    },
    {
      en: 'A Polarization Index (PI = R_10min / R_1min) value of 2.0 or higher indicates healthy, clean, dry insulation; a value below 1.5 indicates moisture or aging.',
      hi: '2.0 या अधिक का पोलराइजेशन इंडेक्स (PI) स्वस्थ और सूखे इंसुलेशन का संकेत है; 1.5 से कम मान नमी या खराबी दर्शाता है।',
      bn: 'পোলারাইজেশন ইনডেক্স (PI) ২.০ বা তার বেশি হলে ইনসুলেশন সুস্থ ও শুষ্ক থাকে; ১.৫ এর নিচে নামলে আর্দ্রতার সংকেত দেয়।'
    }
  ],
  commonMistakes: [
    {
      en: 'Disconnecting DC winding resistance test leads immediately after turning off the test set without allowing the stored magnetic energy (1/2 L I²) to discharge safely.',
      hi: 'मेगर या प्रतिरोध परीक्षण के तुरंत बाद बिना डिस्चार्ज किए तारों को हाथ से छू लेना, जिससे जानलेवा किकबैक झटका लगता है।',
      bn: 'কয়েলে সঞ্চিত চৌম্বক শক্তি ডিসচার্জ হওয়ার অপেক্ষা না করে দ্রুত টেস্ট লিড খুলে ফেলা, যা মারাত্মক শকের সৃষ্টি করে।'
    },
    {
      en: 'Using a standard low-impedance multimeter that can explode when measuring high-energy industrial switchgear transients instead of a CAT IV 1,000 V rated meter.',
      hi: 'औद्योगिक स्विचगियर में साधारण घरेलू सस्ते मीटर का उपयोग करना, जो स्पाइक आने पर हाथ में बम की तरह फट सकता है।',
      bn: 'শিল্প সুইচগিয়ারে সাধারণ সস্তা মিটার ব্যবহার করা, যা আকস্মিক ভোল্টেজ স্পাইকে হাতেই বিস্ফোরিত হতে পারে।'
    },
    {
      en: 'Failing to install temporary working earths on both ends of an isolated cable running parallel to active transmission lines, leaving workers vulnerable to lethal induced ghost voltages.',
      hi: 'चालू लाइनों के समानांतर चल रही बंद लाइन के दोनों सिरों पर अर्थिंग न लगाना, जिससे श्रमिकों को प्रेरित वोल्टेज का जानलेवा झटका लग सकता है।',
      bn: 'সমান্তরাল লাইনের পাশে থাকা বন্ধ তারের উভয় প্রান্তে আর্থিং না লাগানো, যা কর্মীদের মারাত্মক আবিষ্ট ভোল্টেজের ঝুঁকিতে ফেলে।'
    },
    {
      en: 'Omitting flyback diodes across DC relays, causing inductive kickback spikes that destroy microcontrollers and weld mechanical switch contacts.',
      hi: 'रिले कॉइल पर फ्लाईबैक डायोड न लगाना, जिससे 24V की जगह 2,000V का झटका बनकर सर्किट बोर्ड जल जाता है।',
      bn: 'ডিসি রিলেতে ফ্লাইব্যাক ডায়োড বাদ দেওয়া, ফলে ইন্ডাক্টিভ কিকব্যাকে মাইক্রোকন্ট্রোলার পুড়ে নষ্ট হয়ে যায়।'
    }
  ],
  keyTakeaways: [
    {
      en: 'Inductive kickback (e = -L di/dt) occurs when current in an inductor is abruptly stopped; protect circuits using flyback diodes, RC snubbers, or varistors.',
      hi: 'धारा अचानक बंद करने पर इंडक्टिव किकबैक (e = -L di/dt) उत्पन्न होता है; फ्लाईबैक डायोड या स्नबर से परिपथ की सुरक्षा करें।',
      bn: 'ইন্ডাক্টরের কারেন্ট হঠাৎ বন্ধ করলে ইন্ডাক্টিভ কিকব্যাক (e = -L di/dt) তৈরি হয়; ডায়োড বা স্নাবার দিয়ে এটি প্রশমিত করতে হয়।'
    },
    {
      en: 'Ghost induced voltages arise from mutual induction (M) and capacitive coupling between adjacent conductors; eliminate them with rated working earths.',
      hi: 'समानांतर लाइनों में पारस्परिक प्रेरण से प्रेत वोल्टेज उत्पन्न होता है; सुरक्षात्मक अर्थिंग लगाकर इसे शून्य करें।',
      bn: 'সমান্তরাল লাইনে পারস্পরিক আবেশে ভৌতিক ভোল্টেজ তৈরি হয়; সুরক্ষামূলক আর্থিং স্থাপন করে তা শূন্য করতে হয়।'
    },
    {
      en: 'The "Live-Dead-Live" test methodology is the non-negotiable standard for verifying electrical safe isolation.',
      hi: '"लाइव-डेड-लाइव" परीक्षण विद्युत सुरक्षित अलगाव को सत्यापित करने का अनिवार्य स्वर्ण मानक है।',
      bn: '"লাইভ-ডেড-লাইভ" পরীক্ষা হলো বৈদ্যুতিক নিরাপদ আইসোলেশন নিশ্চিত করার বাধ্যতামূলক সুবর্ণ নিয়ম।'
    },
    {
      en: 'Diagnostic tests like TTR, winding resistance, and Megger PI evaluate transformer health without destructive disassembly.',
      hi: 'TTR, वाइंडिंग प्रतिरोध एवं मेगर PI परीक्षण बिना उपकरण को खोले ट्रांसफार्मर के स्वास्थ्य की सटीक जांच करते हैं।',
      bn: 'TTR, ওয়াইন্ডিং রোধ ও মেগার PI টেস্ট কোনো ক্ষতি না করেই মেশিনের অভ্যন্তরীণ স্বাস্থ্য নির্ভুলভাবে যাচাই করে।'
    },
    {
      en: 'Always respect stored electromagnetic energy: discharge windings to ground and wear rated Arc Flash PPE before touching high-inductance equipment.',
      hi: 'संग्रहित चुंबकीय ऊर्जा का हमेशा ध्यान रखें: वाइंडिंग को ग्राउंड पर डिस्चार्ज करें और सुरक्षात्मक PPE पहनकर ही कार्य करें।',
      bn: 'সঞ্চিত চৌম্বক শক্তিকে কখনো অবহেলা করবেন না: কয়েল গ্রাউন্ডে ডিসচার্জ করুন এবং আর্ক ফ্ল্যাশ PPE পরিধান করুন।'
    }
  ],
  mcqs: [
    {
      id: "mcq-ch10-l20-1",
      question: {
        en: "What causes the destructive high-voltage inductive kickback spike (e = -L di/dt) when a switch controlling a relay coil or electric motor is suddenly opened?",
        hi: "जब किसी रिले कॉइल या मोटर के स्विच को अचानक खोला जाता है, तो विनाशकारी हाई-वोल्टेज इंडक्टिव किकबैक (e = -L di/dt) किस कारण उत्पन्न होता है?",
        bn: "রিলে কয়েল বা মোটরের সুইচ হঠাৎ বন্ধ করলে মারাত্মক হাই-ভোল্টেজ ইন্ডাক্টিভ কিকব্যাক (e = -L di/dt) কেন তৈরি হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "The rapid collapse of the coil’s magnetic flux forces di/dt to massive negative values, generating high induced counter-EMF by Lenz’s law", hi: "चुंबकीय फ्लक्स का तेजी से ढहना di/dt को अत्यधिक बढ़ा देता है, जिससे लेन्ज के नियम से भारी प्रेरित ईएमएफ बनता है", bn: "কয়েলের চৌম্বক ফ্লাক্সের আকস্মিক বিলুপ্তি di/dt এর মান তীব্র করে তোলে, ফলে লেঞ্জের সূত্রানুযায়ী তীব্র বিপরীত ভোল্টেজ তৈরি হয়" } },
        { id: "opt-2", text: { en: "Atmospheric oxygen chemically detonates inside the wire", hi: "तार के अंदर ऑक्सीजन का रासायनिक विस्फोट", bn: "তারের ভেতর বাতাসের রাসায়নিক বিস্ফোরণ" } },
        { id: "opt-3", text: { en: "The battery multiplies its own chemical voltage by 1,000 times", hi: "बैटरी का वोल्टेज अपने आप 1000 गुना हो जाता है", bn: "ব্যাটারির ভোল্টেজ আপনা-আপনি ১০০০ গুণ বেড়ে যায়" } },
        { id: "opt-4", text: { en: "Electrons convert directly into nuclear gamma rays", hi: "इलेक्ट्रॉन गामा किरणों में बदल जाते हैं", bn: "ইলেকট্রন গামা রশ্মিতে রূপান্তরিত হয়" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "By Lenz’s law, an inductor fights any change in current. When contacts open in microseconds, the collapsing magnetic field violently generates high voltage across the gap to sustain current.",
        hi: "लेन्ज के नियम से प्रेरक धारा में बदलाव का विरोध करता है। जब स्विच माइक्रोसेकंड में खुलता है, तो ढहता चुंबकीय क्षेत्र भारी वोल्टेज बनाता है।",
        bn: "লেঞ্জের সূত্রানুযায়ী ইন্ডাক্টর কারেন্ট পরিবর্তনের বিরোধিতা করে। মাইক্রোসেকেন্ডে সুইচ খুললে ভেঙে পড়া চৌম্বক ক্ষেত্র মারাত্মক ভোল্টেজ তৈরি করে।"
      }
    },
    {
      id: "mcq-ch10-l20-2",
      question: {
        en: "What standard electronic component is placed across a DC relay coil to safely suppress inductive kickback voltages and protect driving transistors?",
        hi: "डीसी रिले कॉइल पर इंडक्टिव किकबैक वोल्टेज को दबाने और ट्रांजिस्टर की सुरक्षा के लिए कौन सा घटक लगाया जाता है?",
        bn: "ডিসি রিলে কয়েলে ইন্ডাক্টিভ কিকব্যাক ভোল্টেজ দমন এবং ট্রানজিস্টর সুরক্ষার জন্য কোন উপাদানটি ব্যবহার করা হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "A Flyback (Freewheeling) Diode connected in reverse-bias during normal operation", hi: "फ्लाईबैक (फ्रीव्हीलिंग) डायोड जो सामान्य संचालन में रिवर्स-बायस में जुड़ा होता है", bn: "একটি ফ্লাইব্যাক (ফ্রিহুইলিং) ডায়োড যা স্বাভাবিক অবস্থায় রিভার্স-বায়াসে যুক্ত থাকে" } },
        { id: "opt-2", text: { en: "A mechanical incandescent lightbulb in series", hi: "श्रेणी में लगा एक सामान्य बल्ब", bn: "সিরিজে লাগানো একটি ফিলামেন্ট বাল্ব" } },
        { id: "opt-3", text: { en: "A direct copper wire short-circuit across the power supply", hi: "पावर सप्लाई पर सीधा तांबे का तार जोड़ना", bn: "পাওয়ার সাপ্লাইয়ের সরাসরি শর্ট-সার্কিট" } },
        { id: "opt-4", text: { en: "A block of insulating rubber", hi: "रबर का टुकड़ा", bn: "একটি রবারের টুকরো" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "The flyback diode provides a safe closed-loop recirculation path for the collapsing inductor current, clamping the transient voltage to just one forward diode drop (~0.7 V).",
        hi: "फ्लाईबैक डायोड ढहती धारा को सुरक्षित लूप प्रदान करता है, जिससे वोल्टेज केवल 0.7 V पर सीमित रहता है।",
        bn: "ফ্লাইব্যাক ডায়োড কয়েলের ভেঙে পড়া কারেন্টকে নিরাপদে প্রবাহিত হওয়ার পথ দেয়, ফলে ভোল্টেজ মাত্র ০.৭ ভোল্টে সীমাবদ্ধ থাকে।"
      }
    },
    {
      id: "mcq-ch10-l20-3",
      question: {
        en: "Why do technicians discover hazardous \"ghost voltages\" (hundreds of volts AC) on an open, de-energized transmission line that runs parallel to an active line for several kilometers?",
        hi: "कई किलोमीटर तक चालू लाइन के समानांतर चल रही बंद बिजली लाइन पर तकनीशियनों को खतरनाक \"प्रेत वोल्टेज\" (Ghost Voltage) क्यों मिलता है?",
        bn: "কয়েক কিলোমিটার সমান্তরালে বিস্তৃত একটি বন্ধ লাইনে প্রকৌশলীরা কেন শত শত ভোল্টের বিপজ্জনক ভৌতিক ভোল্টেজ দেখতে পান?"
      },
      options: [
        { id: "opt-1", text: { en: "Mutual inductive coupling (M · di/dt) and capacitive coupling from the adjacent live line continuously induce voltage across the air space", hi: "समानांतर चालू लाइन से पारस्परिक चुंबकीय प्रेरण (M·di/dt) एवं धारितीय युग्मन हवा के पार निरंतर वोल्टेज प्रेरित करते हैं", bn: "সমান্তরাল সক্রিয় লাইন থেকে পারস্পরিক চৌম্বক আবেশ (M·di/dt) এবং ক্যাপাসিটিভ কাপলিং বাতাস ভেদ করে ভোল্টেজ আবিষ্ট করে" } },
        { id: "opt-2", text: { en: "Radio waves from commercial FM broadcast towers", hi: "रेडियो टावरों से आने वाली एफएम तरंगें", bn: "এফএম রেডিও টাওয়ার থেকে আসা তরঙ্গ" } },
        { id: "opt-3", text: { en: "The copper metal in the wire spontaneously produces its own nuclear electricity", hi: "तांबे की धातु स्वतः परमाणु बिजली पैदा करती है", bn: "তামার তার আপনা-আপনি পরমাণু বিদ্যুৎ তৈরি করে" } },
        { id: "opt-4", text: { en: "Lightning strikes that occurred five years earlier remained frozen in the wire", hi: "पांच साल पहले गिरी बिजली तार में जमी रह गई थी", bn: "পাঁচ বছর আগের বজ্রপাতের বিদ্যুৎ জমে ছিল" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "High AC currents in the live circuit produce alternating magnetic fields that cut the isolated conductor, while capacitance couples voltage across the air gap. Temporary working earths must be applied to drain this voltage.",
        hi: "चालू लाइन का बदलता चुंबकीय क्षेत्र अलग की गई लाइन में ईएमएफ प्रेरित करता है। इसे खत्म करने के लिए दोनों सिरों पर अर्थिंग लगाना अनिवार्य है।",
        bn: "সচল লাইনের পরিবর্তনশীল চৌম্বক ক্ষেত্র বন্ধ তারে ভোল্টেজ আবিষ্ট করে। এই বিপদ এড়াতে উভয় প্রান্তে সুরক্ষামূলক আর্থিং লাগাতে হয়।"
      }
    },
    {
      id: "mcq-ch10-l20-4",
      question: {
        en: "What is the mandatory 3-step sequence of the \"Live-Dead-Live\" testing procedure used to prove safe electrical isolation?",
        hi: "सुरक्षित अलगाव साबित करने के लिए \"लाइव-डेड-लाइव\" परीक्षण प्रक्रिया का अनिवार्य 3-चरणीय क्रम क्या है?",
        bn: "নিরাপদ আইসোলেশন প্রমাণের জন্য \"লাইভ-ডেড-লাইভ\" পরীক্ষার বাধ্যতামূলক ৩টি ধাপের ক্রম কোনটি?"
      },
      options: [
        { id: "opt-1", text: { en: "1. Test meter on known live source/proving unit; 2. Test circuit under maintenance to prove dead; 3. Re-test meter on live source to prove meter did not fail during the test", hi: "1. मीटर को ज्ञात चालू स्रोत पर जांचें; 2. जिस सर्किट पर काम करना है उसे डेड जांचें; 3. मीटर को फिर से चालू स्रोत पर जांचें कि वह खराब तो नहीं हुआ", bn: "১. পরিচিত সচল উৎসে মিটার যাচাই; ২. কাজের সার্কিটে ভোল্টেজ অনুপস্থিতি যাচাই; ৩. পুনরায় সচল উৎসে মিটার যাচাই যাতে মিটার নষ্ট না হওয়া নিশ্চিত হয়" } },
        { id: "opt-2", text: { en: "1. Touch the cable with bare hands; 2. Wait for a shock; 3. Call for help", hi: "1. नंगे हाथों से तार छुएं; 2. झटके का इंतजार करें; 3. मदद के लिए चिल्लाएं", bn: "১. খালি হাতে তার স্পর্শ করা; ২. শকের অপেক্ষা করা; ৩. সাহায্যের জন্য ডাকা" } },
        { id: "opt-3", text: { en: "1. Turn off the building lights; 2. Turn them back on; 3. Go home", hi: "1. लाइट बंद करें; 2. चालू करें; 3. घर जाएं", bn: "১. বাতি বন্ধ করা; ২. চালু করা; ৩. চলে যাওয়া" } },
        { id: "opt-4", text: { en: "1. Guess with your eyes; 2. Cut the cable; 3. Replace the fuse", hi: "1. आंखों से अंदाजा लगाएं; 2. तार काटें; 3. फ्यूज बदलें", bn: "১. চোখ দিয়ে আন্দাজ করা; ২. তার কেটে ফেলা; ৩. ফিউজ বদলানো" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "The Live-Dead-Live test ensures your meter was operational before the test and did not suffer an internal failure (e.g., blown fuse, dead battery, broken lead) while indicating 0 V on the circuit under test.",
        hi: "लाइव-डेड-लाइव परीक्षण यह सुनिश्चित करता है कि मीटर परीक्षण से पहले चालू था और शून्य वोल्टेज दिखाते समय उसकी बैटरी या फ्यूज खराब नहीं हुआ था।",
        bn: "লাইভ-ডেড-লাইভ টেস্ট নিশ্চিত করে যে টেস্টের সময় মিটারের ব্যাটারি বা ইন্টারনাল ফিউজ নষ্ট হয়ে শূন্য ভোল্ট দেখাচ্ছিল না।"
      }
    },
    {
      id: "mcq-ch10-l20-5",
      question: {
        en: "Why is it mandatory to use an electrical measurement instrument with a CAT IV rating when testing outdoor utility service entrance switchgear?",
        hi: "आउटडोर यूटिलिटी सर्विस स्विचगियर का परीक्षण करते समय CAT IV रेटिंग वाले मीटर का उपयोग करना अनिवार्य क्यों है?",
        bn: "আউটডোর সার্ভিস এন্ট্রান্স সুইচগিয়ার পরীক্ষার সময় CAT IV রেটিংযুক্ত মিটার ব্যবহার করা বাধ্যতামূলক কেন?"
      },
      options: [
        { id: "opt-1", text: { en: "CAT IV meters have high dielectric withstand to survive severe lightning and grid switching transient overvoltages without exploding in the technician’s hands", hi: "CAT IV मीटर में ग्रिड पर बिजली गिरने या स्पाइक्स आने पर मीटर को ऑपरेटर के हाथ में फटने से बचाने की क्षमता होती है", bn: "CAT IV মিটারের উচ্চ ডাই-ইলেকট্রিক ক্ষমতা থাকে যাতে গ্রিডের বজ্রপাত বা আকস্মিক স্পাইকে মিটারটি হাতে বিস্ফোরিত না হয়" } },
        { id: "opt-2", text: { en: "CAT IV meters are painted with glowing neon yellow paint", hi: "क्योंकि वे पीले रंग के होते हैं", bn: "কারণ এগুলো হলুদ রঙের হয়" } },
        { id: "opt-3", text: { en: "CAT IV meters can only measure direct current from 9 V batteries", hi: "ये केवल 9 V बैटरी नाप सकते हैं", bn: "এগুলো কেবল ৯ ভোল্ট ব্যাটারি মাপতে পারে" } },
        { id: "opt-4", text: { en: "CAT IV meters are lighter than a feather", hi: "क्योंकि वे बहुत हल्के होते हैं", bn: "কারণ এগুলো পালকের মতো হালকা" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Category IV ratings indicate robust clearances, high-energy fuses, and surge withstand capacity capable of handling high-energy transient spikes on utility service lines without arc flash.",
        hi: "CAT IV मीटर उच्च-ऊर्जा स्पाइक्स को सहन करने के लिए बनाए जाते हैं ताकि खतरनाक आर्क फ्लैश विस्फोट न हो।",
        bn: "CAT IV মিটারগুলো উচ্চ-শক্তির ভোল্টেজ স্পাইক সহ্য করতে পারে, ফলে মারাত্মক আর্ক বিস্ফোরণের হাত থেকে কর্মী রক্ষা পায়।"
      }
    },
    {
      id: "mcq-ch10-l20-6",
      question: {
        en: "In an insulation resistance diagnostic test on a high-voltage power transformer, what does a Polarization Index of PI = R_10min / R_1min = 2.8 indicate?",
        hi: "हाई-वोल्टेज पावर ट्रांसफार्मर के मेगर परीक्षण में यदि पोलराइजेशन इंडेक्स PI = 2.8 आए, तो इसका क्या अर्थ है?",
        bn: "উচ্চ-ভোল্টেজ ট্রান্সফরমারের মেগার টেস্টে পোলারাইজেশন ইনডেক্স PI = ২.৮ আসলে তা কী নির্দেশ করে?"
      },
      options: [
        { id: "opt-1", text: { en: "The dielectric insulation is in excellent, clean, and dry condition (healthy PI ≥ 2.0)", hi: "इंसुलेशन उत्कृष्ट, साफ और सूखी स्थिति में है (स्वस्थ PI ≥ 2.0)", bn: "ডাই-ইলেকট্রিক ইনসুলেশনটি চমৎকার, পরিষ্কার এবং সম্পূর্ণ শুষ্ক অবস্থায় রয়েছে (সুস্থ PI ≥ ২.০)" } },
        { id: "opt-2", text: { en: "The transformer core is completely melted into slag", hi: "ट्रांसफार्मर का कोर पूरी तरह पिघल चुका है", bn: "ট্রান্সফরমার কোর পুরোপুরি গলে গেছে" } },
        { id: "opt-3", text: { en: "The copper winding is completely broken and open-circuited", hi: "तांबे की वाइंडिंग पूरी तरह टूट चुकी है", bn: "তামার তার ছিঁড়ে গেছে" } },
        { id: "opt-4", text: { en: "The oil inside has turned into pure gasoline", hi: "अंदर का तेल पेट्रोल बन चुका है", bn: "ভেতরের তেল পেট্রোলে পরিণত হয়েছে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Healthy insulation shows decreasing capacitive and absorption charging currents over 10 minutes, causing measured resistance to climb steadily. PI ≥ 2.0 signifies dry, intact insulation.",
        hi: "स्वस्थ इंसुलेशन में 10 मिनट के दौरान प्रतिरोध लगातार बढ़ता है। PI ≥ 2.0 का मान सूखे और उत्तम इंसुलेशन का प्रमाण है।",
        bn: "সুস্থ ইনসুলেশনে সময়ের সাথে সাথে রোধ বৃদ্ধি পায়। PI ≥ ২.০ হলে বোঝা যায় ইনসুলেশনে কোনো আর্দ্রতা বা ক্ষয় নেই।"
      }
    },
    {
      id: "mcq-ch10-l20-7",
      question: {
        en: "What critical precaution must be observed when disconnecting test leads after completing a high-current DC winding resistance test on a large 50 MVA transformer?",
        hi: "50 MVA ट्रांसफार्मर पर डीसी वाइंडिंग प्रतिरोध परीक्षण पूरा करने के बाद टेस्ट लीड हटाने से पहले कौन सी महत्वपूर्ण सावधानी बरतनी चाहिए?",
        bn: "একটি ৫০ MVA ট্রান্সফরমারে ডিসি ওয়াইন্ডিং রোধ পরীক্ষা শেষ করার পর টেস্ট লিড খোলার আগে কোন গুরুত্বপূর্ণ সতর্কতা মানতে হবে?"
      },
      options: [
        { id: "opt-1", text: { en: "Wait for the test instrument’s internal discharge circuit to completely discharge the stored magnetic energy (1/2 L·I²) to zero before disconnecting leads", hi: "लीड हटाने से पहले टेस्ट सेट के डिस्चार्ज सर्किट द्वारा संचित चुंबकीय ऊर्जा (1/2 L·I²) को शून्य होने दें", bn: "কয়েলে সঞ্চিত চৌম্বক শক্তি (1/2 L·I²) টেস্ট সেটের মাধ্যমে শূন্যে ডিসচার্জ না হওয়া পর্যন্ত অপেক্ষা করা" } },
        { id: "opt-2", text: { en: "Yank the test leads off as fast as possible while the DC current is still flowing", hi: "करंट बहते समय ही तारों को जितनी जल्दी हो सके झटके से खींच लें", bn: "কারেন্ট চলা অবস্থাতেই দ্রুত হ্যাঁচকা টানে তার খুলে ফেলা" } },
        { id: "opt-3", text: { en: "Pour cold tap water onto the transformer terminals", hi: "टर्मिनलों पर ठंडा पानी डालें", bn: "টার্মিনালে ঠান্ডা পানি ঢালা" } },
        { id: "opt-4", text: { en: "Touch both bare terminals with wet hands to check if they are cold", hi: "गीले हाथों से दोनों टर्मिनलों को छूकर देखें", bn: "ভেজা হাতে টার্মিনাল ছুঁয়ে দেখা" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Large transformer coils have inductances of tens of Henries, storing thousands of Joules of energy. Pulling leads while energized generates lethal inductive kickback arcs.",
        hi: "बड़े ट्रांसफार्मर में भारी ऊर्जा संचित रहती है। चालू हालत में तार हटाने से जानलेवा आर्क विस्फोट हो सकता है।",
        bn: "বড় ট্রান্সফরমারে শত শত জুল চৌম্বক শক্তি সঞ্চিত থাকে। ডিসচার্জের আগে তার খুললে মারাত্মক আর্ক ও শক সৃষ্টি হয়।"
      }
    },
    {
      id: "mcq-ch10-l20-8",
      question: {
        en: "What is the primary function of Lockout/Tagout (LOTO) protocols during electrical maintenance of electromagnetic machinery?",
        hi: "विद्युत-चुंबकीय मशीनों के रखरखाव के दौरान लॉकआउट/टैगआउट (LOTO) प्रोटोकॉल का प्राथमिक कार्य क्या है?",
        bn: "তড়িৎচৌম্বকীয় যন্ত্রপাতির রক্ষণাবেক্ষণের সময় লকআউট/ট্যাগআউট (LOTO) প্রটোকলের প্রধান কাজ কী?"
      },
      options: [
        { id: "opt-1", text: { en: "To physically lock energy isolation switches in the OFF position with a padlock, preventing accidental re-energization while personnel are working on the equipment", hi: "ऊर्जा स्विच को पैडलॉक से बंद (OFF) स्थिति में ताला लगाकर रखना ताकि काम करते समय कोई गलती से मशीन चालू न कर दे", bn: "প্যাডলক দিয়ে আইসোলেশন সুইচ বন্ধ (OFF) অবস্থায় তালাবদ্ধ রাখা যাতে কাজ চলাকালে কেউ ভুলবশত বিদ্যুৎ চালু করতে না পারে" } },
        { id: "opt-2", text: { en: "To calculate the monthly electricity bill", hi: "महीने के बिजली बिल की गणना करना", bn: "বিদ্যুৎ বিল হিসাব করা" } },
        { id: "opt-3", text: { en: "To change the color of the paint on the motor casing", hi: "मोटर का रंग बदलना", bn: "মোটরের রং পরিবর্তন করা" } },
        { id: "opt-4", text: { en: "To keep track of employee lunch hours", hi: "कर्मचारियों के भोजन के समय का रिकॉर्ड रखना", bn: "কর্মীদের দুপুরের খাবারের সময় গণনা করা" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "LOTO ensures switches cannot be closed by unauthorized personnel, protecting technicians from unexpected electrical shock and mechanical actuation.",
        hi: "LOTO यह सुनिश्चित करता है कि जब तक तकनीशियन काम कर रहे हैं तब तक कोई अन्य व्यक्ति मशीन में बिजली चालू न कर सके।",
        bn: "LOTO নিশ্চিত করে যে রক্ষণাবেক্ষণ চলাকালীন অন্য কোনো ব্যক্তি অসাবধানতাবশত লাইনে বিদ্যুৎ সরবরাহ চালু করতে পারবে না।"
      }
    }
  ],
  mcqQuestions: [
    {
      id: "mcq-ch10-l20-1",
      question: {
        en: "What causes the destructive high-voltage inductive kickback spike (e = -L di/dt) when a switch controlling a relay coil or electric motor is suddenly opened?",
        hi: "जब किसी रिले कॉइल या मोटर के स्विच को अचानक खोला जाता है, तो विनाशकारी हाई-वोल्टेज इंडक्टिव किकबैक (e = -L di/dt) किस कारण उत्पन्न होता है?",
        bn: "রিলে কয়েল বা মোটরের সুইচ হঠাৎ বন্ধ করলে মারাত্মক হাই-ভোল্টেজ ইন্ডাক্টিভ কিকব্যাক (e = -L di/dt) কেন তৈরি হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "The rapid collapse of the coil’s magnetic flux forces di/dt to massive negative values, generating high induced counter-EMF by Lenz’s law", hi: "चुंबकीय फ्लक्स का तेजी से ढहना di/dt को अत्यधिक बढ़ा देता है, जिससे लेन्ज के नियम से भारी प्रेरित ईएमएफ बनता है", bn: "কয়েলের চৌম্বক ফ্লাক্সের আকস্মিক বিলুপ্তি di/dt এর মান তীব্র করে তোলে, ফলে লেঞ্জের সূত্রানুযায়ী তীব্র বিপরীত ভোল্টেজ তৈরি হয়" } },
        { id: "opt-2", text: { en: "Atmospheric oxygen chemically detonates inside the wire", hi: "तार के अंदर ऑक्सीजन का रासायनिक विस्फोट", bn: "তারের ভেতর বাতাসের রাসায়নিক বিস্ফোরণ" } },
        { id: "opt-3", text: { en: "The battery multiplies its own chemical voltage by 1,000 times", hi: "बैटरी का वोल्टेज अपने आप 1000 गुना हो जाता है", bn: "ব্যাটারির ভোল্টেজ আপনা-আপনি ১০০০ গুণ বেড়ে যায়" } },
        { id: "opt-4", text: { en: "Electrons convert directly into nuclear gamma rays", hi: "इलेक्ट्रॉन गामा किरणों में बदल जाते हैं", bn: "ইলেকট্রন গামা রশ্মিতে রূপান্তরিত হয়" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "By Lenz’s law, an inductor fights any change in current. When contacts open in microseconds, the collapsing magnetic field violently generates high voltage across the gap to sustain current.",
        hi: "लेन्ज के नियम से प्रेरक धारा में बदलाव का विरोध करता है। जब स्विच माइक्रोसेकंड में खुलता है, तो ढहता चुंबकीय क्षेत्र भारी वोल्टेज बनाता है।",
        bn: "লেঞ্জের সূত্রানুযায়ী ইন্ডাক্টর কারেন্ট পরিবর্তনের বিরোধিতা করে। মাইক্রোসেকেন্ডে সুইচ খুললে ভেঙে পড়া চৌম্বক ক্ষেত্র মারাত্মক ভোল্টেজ তৈরি করে।"
      }
    },
    {
      id: "mcq-ch10-l20-2",
      question: {
        en: "What standard electronic component is placed across a DC relay coil to safely suppress inductive kickback voltages and protect driving transistors?",
        hi: "डीसी रिले कॉइल पर इंडक्टिव किकबैक वोल्टेज को दबाने और ट्रांजिस्टर की सुरक्षा के लिए कौन सा घटक लगाया जाता है?",
        bn: "ডিসি রিলে কয়েলে ইন্ডাক্টিভ কিকব্যাক ভোল্টেজ দমন এবং ট্রানজিস্টর সুরক্ষার জন্য কোন উপাদানটি ব্যবহার করা হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "A Flyback (Freewheeling) Diode connected in reverse-bias during normal operation", hi: "फ्लाईबैक (फ्रीव्हीलिंग) डायोड जो सामान्य संचालन में रिवर्स-बायस में जुड़ा होता है", bn: "একটি ফ্লাইব্যাক (ফ্রিহুইলিং) ডায়োড যা স্বাভাবিক অবস্থায় রিভার্স-বায়াসে যুক্ত থাকে" } },
        { id: "opt-2", text: { en: "A mechanical incandescent lightbulb in series", hi: "श्रेणी में लगा एक सामान्य बल्ब", bn: "সিরিজে লাগানো একটি ফিলামেন্ট বাল্ব" } },
        { id: "opt-3", text: { en: "A direct copper wire short-circuit across the power supply", hi: "पावर सप्लाई पर सीधा तांबे का तार जोड़ना", bn: "পাওয়ার সাপ্লাইয়ের সরাসরি শর্ট-সার্কিট" } },
        { id: "opt-4", text: { en: "A block of insulating rubber", hi: "रबर का टुकड़ा", bn: "একটি রবারের টুকরো" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "The flyback diode provides a safe closed-loop recirculation path for the collapsing inductor current, clamping the transient voltage to just one forward diode drop (~0.7 V).",
        hi: "फ्लाईबैक डायोड ढहती धारा को सुरक्षित लूप प्रदान करता है, जिससे वोल्टेज केवल 0.7 V पर सीमित रहता है।",
        bn: "ফ্লাইব্যাক ডায়োড কয়েলের ভেঙে পড়া কারেন্টকে নিরাপদে প্রবাহিত হওয়ার পথ দেয়, ফলে ভোল্টেজ মাত্র ০.৭ ভোল্টে সীমাবদ্ধ থাকে।"
      }
    },
    {
      id: "mcq-ch10-l20-3",
      question: {
        en: "Why do technicians discover hazardous \"ghost voltages\" (hundreds of volts AC) on an open, de-energized transmission line that runs parallel to an active line for several kilometers?",
        hi: "कई किलोमीटर तक चालू लाइन के समानांतर चल रही बंद बिजली लाइन पर तकनीशियनों को खतरनाक \"प्रेत वोल्टेज\" (Ghost Voltage) क्यों मिलता है?",
        bn: "কয়েক কিলোমিটার সমান্তরালে বিস্তৃত একটি বন্ধ লাইনে প্রকৌশলীরা কেন শত শত ভোল্টের বিপজ্জনক ভৌতিক ভোল্টেজ দেখতে পান?"
      },
      options: [
        { id: "opt-1", text: { en: "Mutual inductive coupling (M · di/dt) and capacitive coupling from the adjacent live line continuously induce voltage across the air space", hi: "समानांतर चालू लाइन से पारस्परिक चुंबकीय प्रेरण (M·di/dt) एवं धारितीय युग्मन हवा के पार निरंतर वोल्टेज प्रेरित करते हैं", bn: "সমান্তরাল সক্রিয় লাইন থেকে পারস্পরিক চৌম্বক আবেশ (M·di/dt) এবং ক্যাপাসিটিভ কাপলিং বাতাস ভেদ করে ভোল্টেজ আবিষ্ট করে" } },
        { id: "opt-2", text: { en: "Radio waves from commercial FM broadcast towers", hi: "रेडियो टावरों से आने वाली एफएम तरंगें", bn: "এফএম রেডিও টাওয়ার থেকে আসা তরঙ্গ" } },
        { id: "opt-3", text: { en: "The copper metal in the wire spontaneously produces its own nuclear electricity", hi: "तांबे की धातु स्वतः परमाणु बिजली पैदा करती है", bn: "তামার তার আপনা-আপনি পরমাণু বিদ্যুৎ তৈরি করে" } },
        { id: "opt-4", text: { en: "Lightning strikes that occurred five years earlier remained frozen in the wire", hi: "पांच साल पहले गिरी बिजली तार में जमी रह गई थी", bn: "পাঁচ বছর আগের বজ্রপাতের বিদ্যুৎ জমে ছিল" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "High AC currents in the live circuit produce alternating magnetic fields that cut the isolated conductor, while capacitance couples voltage across the air gap. Temporary working earths must be applied to drain this voltage.",
        hi: "चालू लाइन का बदलता चुंबकीय क्षेत्र अलग की गई लाइन में ईएमएफ प्रेरित करता है। इसे खत्म करने के लिए दोनों सिरों पर अर्थिंग लगाना अनिवार्य है।",
        bn: "সচল লাইনের পরিবর্তনশীল চৌম্বক ক্ষেত্র বন্ধ তারে ভোল্টেজ আবিষ্ট করে। এই বিপদ এড়াতে উভয় প্রান্তে সুরক্ষামূলক আর্থিং লাগাতে হয়।"
      }
    },
    {
      id: "mcq-ch10-l20-4",
      question: {
        en: "What is the mandatory 3-step sequence of the \"Live-Dead-Live\" testing procedure used to prove safe electrical isolation?",
        hi: "सुरक्षित अलगाव साबित करने के लिए \"लाइव-डेड-लाइव\" परीक्षण प्रक्रिया का अनिवार्य 3-चरणीय क्रम क्या है?",
        bn: "নিরাপদ আইসোলেশন প্রমাণের জন্য \"লাইভ-ডেড-লাইভ\" পরীক্ষার বাধ্যতামূলক ৩টি ধাপের ক্রম কোনটি?"
      },
      options: [
        { id: "opt-1", text: { en: "1. Test meter on known live source/proving unit; 2. Test circuit under maintenance to prove dead; 3. Re-test meter on live source to prove meter did not fail during the test", hi: "1. मीटर को ज्ञात चालू स्रोत पर जांचें; 2. जिस सर्किट पर काम करना है उसे डेड जांचें; 3. मीटर को फिर से चालू स्रोत पर जांचें कि वह खराब तो नहीं हुआ", bn: "১. পরিচিত সচল উৎসে মিটার যাচাই; ২. কাজের সার্কিটে ভোল্টেজ অনুপস্থিতি যাচাই; ৩. পুনরায় সচল উৎসে মিটার যাচাই যাতে মিটার নষ্ট না হওয়া নিশ্চিত হয়" } },
        { id: "opt-2", text: { en: "1. Touch the cable with bare hands; 2. Wait for a shock; 3. Call for help", hi: "1. नंगे हाथों से तार छुएं; 2. झटके का इंतजार करें; 3. मदद के लिए चिल्लाएं", bn: "১. খালি হাতে তার স্পর্শ করা; ২. শকের অপেক্ষা করা; ৩. সাহায্যের জন্য ডাকা" } },
        { id: "opt-3", text: { en: "1. Turn off the building lights; 2. Turn them back on; 3. Go home", hi: "1. लाइट बंद करें; 2. चालू करें; 3. घर जाएं", bn: "১. বাতি বন্ধ করা; ২. চালু করা; ৩. চলে যাওয়া" } },
        { id: "opt-4", text: { en: "1. Guess with your eyes; 2. Cut the cable; 3. Replace the fuse", hi: "1. आंखों से अंदाजा लगाएं; 2. तार काटें; 3. फ्यूज बदलें", bn: "১. চোখ দিয়ে আন্দাজ করা; ২. তার কেটে ফেলা; ৩. ফিউজ বদলানো" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "The Live-Dead-Live test ensures your meter was operational before the test and did not suffer an internal failure (e.g., blown fuse, dead battery, broken lead) while indicating 0 V on the circuit under test.",
        hi: "लाइव-डेड-लाइव परीक्षण यह सुनिश्चित करता है कि मीटर परीक्षण से पहले चालू था और शून्य वोल्टेज दिखाते समय उसकी बैटरी या फ्यूज खराब नहीं हुआ था।",
        bn: "লাইভ-ডেড-লাইভ টেস্ট নিশ্চিত করে যে টেস্টের সময় মিটারের ব্যাটারি বা ইন্টারনাল ফিউজ নষ্ট হয়ে শূন্য ভোল্ট দেখাচ্ছিল না।"
      }
    },
    {
      id: "mcq-ch10-l20-5",
      question: {
        en: "Why is it mandatory to use an electrical measurement instrument with a CAT IV rating when testing outdoor utility service entrance switchgear?",
        hi: "आउटडोर यूटिलिटी सर्विस स्विचगियर का परीक्षण करते समय CAT IV रेटिंग वाले मीटर का उपयोग करना अनिवार्य क्यों है?",
        bn: "আউটডোর সার্ভিস এন্ট্রান্স সুইচগিয়ার পরীক্ষার সময় CAT IV রেটিংযুক্ত মিটার ব্যবহার করা বাধ্যতামূলক কেন?"
      },
      options: [
        { id: "opt-1", text: { en: "CAT IV meters have high dielectric withstand to survive severe lightning and grid switching transient overvoltages without exploding in the technician’s hands", hi: "CAT IV मीटर में ग्रिड पर बिजली गिरने या स्पाइक्स आने पर मीटर को ऑपरेटर के हाथ में फटने से बचाने की क्षमता होती है", bn: "CAT IV মিটারের উচ্চ ডাই-ইলেকট্রিক ক্ষমতা থাকে যাতে গ্রিডের বজ্রপাত বা আকস্মিক স্পাইকে মিটারটি হাতে বিস্ফোরিত না হয়" } },
        { id: "opt-2", text: { en: "CAT IV meters are painted with glowing neon yellow paint", hi: "क्योंकि वे पीले रंग के होते हैं", bn: "কারণ এগুলো হলুদ রঙের হয়" } },
        { id: "opt-3", text: { en: "CAT IV meters can only measure direct current from 9 V batteries", hi: "ये केवल 9 V बैटरी नाप सकते हैं", bn: "এগুলো কেবল ৯ ভোল্ট ব্যাটারি মাপতে পারে" } },
        { id: "opt-4", text: { en: "CAT IV meters are lighter than a feather", hi: "क्योंकि वे बहुत हल्के होते हैं", bn: "কারণ এগুলো পালকের মতো হালকা" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Category IV ratings indicate robust clearances, high-energy fuses, and surge withstand capacity capable of handling high-energy transient spikes on utility service lines without arc flash.",
        hi: "CAT IV मीटर उच्च-ऊर्जा स्पाइक्स को सहन करने के लिए बनाए जाते हैं ताकि खतरनाक आर्क फ्लैश विस्फोट न हो।",
        bn: "CAT IV মিটারগুলো উচ্চ-শক্তির ভোল্টেজ স্পাইক সহ্য করতে পারে, ফলে মারাত্মক আর্ক বিস্ফোরণের হাত থেকে কর্মী রক্ষা পায়।"
      }
    },
    {
      id: "mcq-ch10-l20-6",
      question: {
        en: "In an insulation resistance diagnostic test on a high-voltage power transformer, what does a Polarization Index of PI = R_10min / R_1min = 2.8 indicate?",
        hi: "हाई-वोल्टेज पावर ट्रांसफार्मर के मेगर परीक्षण में यदि पोलराइजेशन इंडेक्स PI = 2.8 आए, तो इसका क्या अर्थ है?",
        bn: "উচ্চ-ভোল্টেজ ট্রান্সফরমারের মেগার টেস্টে পোলারাইজেশন ইনডেক্স PI = ২.৮ আসলে তা কী নির্দেশ করে?"
      },
      options: [
        { id: "opt-1", text: { en: "The dielectric insulation is in excellent, clean, and dry condition (healthy PI ≥ 2.0)", hi: "इंसुलेशन उत्कृष्ट, साफ और सूखी स्थिति में है (स्वस्थ PI ≥ 2.0)", bn: "ডাই-ইলেকট্রিক ইনসুলেশনটি চমৎকার, পরিষ্কার এবং সম্পূর্ণ শুষ্ক অবস্থায় রয়েছে (সুস্থ PI ≥ ২.০)" } },
        { id: "opt-2", text: { en: "The transformer core is completely melted into slag", hi: "ट्रांसफार्मर का कोर पूरी तरह पिघल चुका है", bn: "ট্রান্সফরমার কোর পুরোপুরি গলে গেছে" } },
        { id: "opt-3", text: { en: "The copper winding is completely broken and open-circuited", hi: "तांबे की वाइंडिंग पूरी तरह टूट चुकी है", bn: "তামার তার ছিঁড়ে গেছে" } },
        { id: "opt-4", text: { en: "The oil inside has turned into pure gasoline", hi: "अंदर का तेल पेट्रोल बन चुका है", bn: "ভেতরের তেল পেট্রোলে পরিণত হয়েছে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Healthy insulation shows decreasing capacitive and absorption charging currents over 10 minutes, causing measured resistance to climb steadily. PI ≥ 2.0 signifies dry, intact insulation.",
        hi: "स्वस्थ इंसुलेशन में 10 मिनट के दौरान प्रतिरोध लगातार बढ़ता है। PI ≥ 2.0 का मान सूखे और उत्तम इंसुलेशन का प्रमाण है।",
        bn: "সুস্থ ইনসুলেশনে সময়ের সাথে সাথে রোধ বৃদ্ধি পায়। PI ≥ ২.০ হলে বোঝা যায় ইনসুলেশনে কোনো আর্দ্রতা বা ক্ষয় নেই।"
      }
    },
    {
      id: "mcq-ch10-l20-7",
      question: {
        en: "What critical precaution must be observed when disconnecting test leads after completing a high-current DC winding resistance test on a large 50 MVA transformer?",
        hi: "50 MVA ट्रांसफार्मर पर डीसी वाइंडिंग प्रतिरोध परीक्षण पूरा करने के बाद टेस्ट लीड हटाने से पहले कौन सी महत्वपूर्ण सावधानी बरतनी चाहिए?",
        bn: "একটি ৫০ MVA ট্রান্সফরমারে ডিসি ওয়াইন্ডিং রোধ পরীক্ষা শেষ করার পর টেস্ট লিড খোলার আগে কোন গুরুত্বপূর্ণ সতর্কতা মানতে হবে?"
      },
      options: [
        { id: "opt-1", text: { en: "Wait for the test instrument’s internal discharge circuit to completely discharge the stored magnetic energy (1/2 L·I²) to zero before disconnecting leads", hi: "लीड हटाने से पहले टेस्ट सेट के डिस्चार्ज सर्किट द्वारा संचित चुंबकीय ऊर्जा (1/2 L·I²) को शून्य होने दें", bn: "কয়েলে সঞ্চিত চৌম্বক শক্তি (1/2 L·I²) টেস্ট সেটের মাধ্যমে শূন্যে ডিসচার্জ না হওয়া পর্যন্ত অপেক্ষা করা" } },
        { id: "opt-2", text: { en: "Yank the test leads off as fast as possible while the DC current is still flowing", hi: "करंट बहते समय ही तारों को जितनी जल्दी हो सके झटके से खींच लें", bn: "কারেন্ট চলা অবস্থাতেই দ্রুত হ্যাঁচকা টানে তার খুলে ফেলা" } },
        { id: "opt-3", text: { en: "Pour cold tap water onto the transformer terminals", hi: "टर्मिनलों पर ठंडा पानी डालें", bn: "টার্মিনালে ঠান্ডা পানি ঢালা" } },
        { id: "opt-4", text: { en: "Touch both bare terminals with wet hands to check if they are cold", hi: "गीले हाथों से दोनों टर्मिनलों को छूकर देखें", bn: "ভেজা হাতে টার্মিনাল ছুঁয়ে দেখা" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Large transformer coils have inductances of tens of Henries, storing thousands of Joules of energy. Pulling leads while energized generates lethal inductive kickback arcs.",
        hi: "बड़े ट्रांसफार्मर में भारी ऊर्जा संचित रहती है। चालू हालत में तार हटाने से जानलेवा आर्क विस्फोट हो सकता है।",
        bn: "বড় ট্রান্সফরমারে শত শত জুল চৌম্বক শক্তি সঞ্চিত থাকে। ডিসচার্জের আগে তার খুললে মারাত্মক আর্ক ও শক সৃষ্টি হয়।"
      }
    },
    {
      id: "mcq-ch10-l20-8",
      question: {
        en: "What is the primary function of Lockout/Tagout (LOTO) protocols during electrical maintenance of electromagnetic machinery?",
        hi: "विद्युत-चुंबकीय मशीनों के रखरखाव के दौरान लॉकआउट/टैगआउट (LOTO) प्रोटोकॉल का प्राथमिक कार्य क्या है?",
        bn: "তড়িৎচৌম্বকীয় যন্ত্রপাতির রক্ষণাবেক্ষণের সময় লকআউট/ট্যাগআউট (LOTO) প্রটোকলের প্রধান কাজ কী?"
      },
      options: [
        { id: "opt-1", text: { en: "To physically lock energy isolation switches in the OFF position with a padlock, preventing accidental re-energization while personnel are working on the equipment", hi: "ऊर्जा स्विच को पैडलॉक से बंद (OFF) स्थिति में ताला लगाकर रखना ताकि काम करते समय कोई गलती से मशीन चालू न कर दे", bn: "প্যাডলক দিয়ে আইসোলেশন সুইচ বন্ধ (OFF) অবস্থায় তালাবদ্ধ রাখা যাতে কাজ চলাকালে কেউ ভুলবশত বিদ্যুৎ চালু করতে না পারে" } },
        { id: "opt-2", text: { en: "To calculate the monthly electricity bill", hi: "महीने के बिजली बिल की गणना करना", bn: "বিদ্যুৎ বিল হিসাব করা" } },
        { id: "opt-3", text: { en: "To change the color of the paint on the motor casing", hi: "मोटर का रंग बदलना", bn: "মোটরের রং পরিবর্তন করা" } },
        { id: "opt-4", text: { en: "To keep track of employee lunch hours", hi: "कर्मचारियों के भोजन के समय का रिकॉर्ड रखना", bn: "কর্মীদের দুপুরের খাবারের সময় গণনা করা" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "LOTO ensures switches cannot be closed by unauthorized personnel, protecting technicians from unexpected electrical shock and mechanical actuation.",
        hi: "LOTO यह सुनिश्चित करता है कि जब तक तकनीशियन काम कर रहे हैं तब तक कोई अन्य व्यक्ति मशीन में बिजली चालू न कर सके।",
        bn: "LOTO নিশ্চিত করে যে রক্ষণাবেক্ষণ চলাকালীন অন্য কোনো ব্যক্তি অসাবধানতাবশত লাইনে বিদ্যুৎ সরবরাহ চালু করতে পারবে না।"
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch10-l20-1',
      question: {
        en: 'A 10 Henry smoothing choke inductor carrying 5.0 Amperes is disconnected in dt = 2.0 milliseconds. Calculate: (a) The stored magnetic energy in Joules, and (b) The induced kickback EMF in Volts.',
        hi: '5.0 A धारा ले जा रहे 10 H के चोक इंडक्टर को dt = 2.0 मिलीसेकंड में काट दिया जाता है। ज्ञात कीजिए: (a) संचित चुंबकीय ऊर्जा (जूल में), तथा (b) प्रेरित किकबैक EMF (वोल्ट में)।',
        bn: '১০ হেনরি আবেশাঙ্কের একটি চোখ কয়েলে ৫.০ অ্যাম্পিয়ার কারেন্ট চলছিল। এটি dt = ২.০ মিলিসেকেন্ডে বন্ধ করা হলো। নির্ণয় করুন: (a) সঞ্চিত শক্তি (জুল এককে), এবং (b) আবিষ্ট কিকব্যাক EMF (ভোল্ট এককে)।'
      },
      hint: {
        en: 'W = (1/2) · L · I², and e = -L · (di / dt) where di = 0 - 5 A.',
        hi: 'W = 0.5·L·I² तथा e = -L·(di/dt) का प्रयोग करें।',
        bn: 'W = ০.৫·L·I² এবং e = -L·(di/dt) সমীকরণ ব্যবহার করুন।'
      },
      answerKey: {
        en: '(a) W = 0.5 × 10 H × (5 A)² = 0.5 × 10 × 25 = 125 Joules. (b) di/dt = -5 A / 0.002 s = -2,500 A/s. e = -(10 H) × (-2,500 A/s) = +25,000 Volts (25 kV).',
        hi: '(a) W = 125 जूल। (b) e = 25,000 वोल्ट (25 kV)।',
        bn: '(a) W = ১২৫ জুল। (b) e = ২৫,০০০ ভোল্ট (২৫ kV)।'
      }
    },
    {
      id: 'pq-ch10-l20-2',
      question: {
        en: 'Explain why a standard digital multimeter with high input impedance (10 MΩ) can read 220 V on an isolated power cable, yet that voltage collapses to nearly 0 V when measured with a low-impedance (LoZ) multimeter or when a physical working earth is attached.',
        hi: 'समझाइए कि उच्च इनपुट प्रतिबाधा (10 MΩ) वाला साधारण मल्टीमीटर अलग किए गए केबल पर 220 V क्यों दिखाता है, जबकि लो-इम्पीडेंस (LoZ) मीटर लगाने पर यह वोल्टेज शून्य क्यों हो जाता है?',
        bn: 'উচ্চ ইনপুট প্রতিবন্ধকতার (১০ MΩ) মাল্টিমিটার বিচ্ছিন্ন তারে ২২০ V দেখালেও লো-ইম্পিডেন্স (LoZ) মিটার দিয়ে মাপলে বা আর্থিং লাগালে তা কেন শূন্যে নেমে আসে?'
      },
      hint: {
        en: 'Differentiate between low-current capacitive "ghost voltage" (high source impedance) and genuine load-bearing electromagnetic voltage.',
        hi: 'धारितीय युग्मन से बने कमजोर "घोस्ट वोल्टेज" तथा वास्तविक चुंबकीय प्रेरण वोल्टेज के अंतर पर विचार करें।',
        bn: 'ক্যাপাসিটিভ কাপলিংয়ের দুর্বল "ঘোস্ট ভোল্টেজ" এবং প্রকৃত লোড বহনে সক্ষম ভোল্টেজের পার্থক্য বিবেচনা করুন।'
      },
      answerKey: {
        en: 'Parallel lines act as capacitor plates separated by air (stray capacitance C_stray ≈ hundreds of pF). A high-impedance 10 MΩ meter draws almost zero current, allowing the electrostatic voltage divider to display full coupled voltage (~220 V). However, because this capacitive source has immense internal source impedance (1/ωC ≈ megaohms), connecting a low-impedance meter (LoZ ~ 3 kΩ) or a working earth drains the tiny charge to ground immediately, collapsing the harmless capacitive voltage to 0 V without tripping breakers.',
        hi: 'समानांतर तार हवा में कैपेसिटर की तरह काम करते हैं। साधारण 10 MΩ मीटर लगभग कोई करंट नहीं खींचता, जिससे वह 220 V दिखाता है। लेकिन LoZ मीटर (3 kΩ) या अर्थिंग लगाने से यह सूक्ष्म चार्ज तुरंत जमीन में बह जाता है और वोल्टेज शून्य हो जाता है।',
        bn: 'সমান্তরাল লাইনগুলো বাতাসে ক্যাপাসিটরের মতো কাজ করে। সাধারণ ১০ MΩ মিটার কোনো কারেন্ট টানে না বলে ২২০ V দেখায়। কিন্তু LoZ মিটার বা আর্থিং লাগালে এই দুর্বল চার্জ মাটিতে চলে যায় এবং ভোল্টেজ শূন্যে নেমে আসে।'
      }
    },
    {
      id: 'pq-ch10-l20-3',
      question: {
        en: 'During a periodic Megger insulation test on an induction motor stator, a technician measures R_1min = 120 MΩ and R_10min = 150 MΩ. Calculate the Polarization Index (PI) and interpret the condition of the motor windings.',
        hi: 'एक इंडक्शन मोटर के मेगर परीक्षण में 1 मिनट पर प्रतिरोध 120 MΩ तथा 10 मिनट पर 150 MΩ मिलता है। PI की गणना कीजिए और मोटर की स्थिति बताइए।',
        bn: 'একটি ইন্ডাকশন মোটরের মেগার টেস্টে ১ মিনিটে ১২০ MΩ এবং ১০ মিনিটে ১৫০ MΩ রোধ পাওয়া গেল। PI নির্ণয় করুন এবং মোটরের অবস্থা ব্যাখ্যা করুন।'
      },
      hint: {
        en: 'PI = R_10min / R_1min. Compare against the minimum acceptable threshold of 2.0 (or 1.5).',
        hi: 'PI = R_10min / R_1min हल करें और 2.0 के मानक से तुलना करें।',
        bn: 'PI = R_১০ / R_১ বের করে ২.০ মানদণ্ডের সাথে তুলনা করুন।'
      },
      answerKey: {
        en: 'PI = 150 MΩ / 120 MΩ = 1.25. Interpretation: A PI of 1.25 is well below the minimum healthy threshold of 2.0 (and even below the questionable limit of 1.5). This indicates significant moisture ingress, oil/dirt contamination, or thermal insulation degradation. The motor should be baked in an oven to dry out moisture or re-insulated before energization.',
        hi: 'PI = 150 / 120 = 1.25। व्याख्या: 1.25 का मान न्यूनतम सुरक्षित सीमा 2.0 से काफी कम है। यह दर्शाता है कि मोटर में नमी या गंदगी आ चुकी है। इसे चालू करने से पहले ओवन में सुखाना अनिवार्य है।',
        bn: 'PI = ১৫০ / ১২০ = ১.২৫। ব্যাখ্যা: ১.২৫ মানটি স্বাস্থ্যকর সীমা ২.০ এর চেয়ে অনেক কম। এটি নির্দেশ করে মোটরে আর্দ্রতা বা ময়লা প্রবেশ করেছে। চালুর পূর্বে এটিকে ওভেনে শুকিয়ে নেওয়া আবশ্যক।'
      }
    },
    {
      id: 'pq-ch10-l20-4',
      question: {
        en: 'Describe how a Transformer Turns Ratio (TTR) test is executed, and explain why measuring the turns ratio accurately confirms the physical health of both primary and secondary windings.',
        hi: 'बताएं कि ट्रांसफार्मर टर्न अनुपात (TTR) परीक्षण कैसे किया जाता है और यह वाइंडिंग के स्वास्थ्य की पुष्टि कैसे करता है?',
        bn: 'ট্রান্সফরমার টার্নস রেশিও (TTR) টেস্ট কীভাবে করা হয় এবং এটি কীভাবে উভয় ওয়াইন্ডিংয়ের সুস্থতা নিশ্চিত করে তা বর্ণনা করুন।'
      },
      hint: {
        en: 'A known AC excitation voltage is applied to high voltage; the induced voltage on low voltage is measured simultaneously: V_1 / V_2 = N_1 / N_2.',
        hi: 'एक ज्ञात वोल्टेज प्राथमिक पर लगाया जाता है और द्वितीयक का वोल्टेज नापा जाता है: V_1 / V_2 = N_1 / N_2।',
        bn: 'প্রাইমারিতে জানা ভোল্টেজ প্রয়োগ করে সেকেন্ডারির ভোল্টেজ মাপা হয়: V_1 / V_2 = N_1 / N_2।'
      },
      answerKey: {
        en: 'A TTR test set applies a precisely regulated low AC voltage (typically 8 V to 100 V AC) to the high-voltage winding and simultaneously measures the open-circuit induced voltage on the secondary winding. The measured voltage ratio directly reflects the turns ratio: V_1 / V_2 = N_1 / N_2. If turns are short-circuited due to insulation failure, the ratio deviates from nameplate values (exceeding the standard 0.5% tolerance), pinpointing internal turn-to-turn faults, tap-changer contact errors, or winding deformation without opening the tank.',
        hi: 'TTR टेस्ट में एक नियंत्रित कम वोल्टेज प्राथमिक वाइंडिंग पर लगाया जाता है और द्वितीयक पर प्रेरित वोल्टेज नापा जाता है (V1/V2 = N1/N2)। यदि कोई टर्न आपस में चिपककर शॉर्ट हो गया हो, तो अनुपात नेमप्लेट से भिन्न आता है, जिससे टैंक खोले बिना अंदरूनी खराबी का पता चल जाता है।',
        bn: 'TTR টেস্টে হাই-ভোল্টেজ কয়েলে কম ভোল্টেজের এসি প্রয়োগ করে সেকেন্ডারিতে আবিষ্ট ভোল্টেজ পরিমাপ করা হয় (V1/V2 = N1/N2)। কোনো কয়েল শর্ট থাকলে প্রাপ্ত অনুপাত নেমপ্লেটের চেয়ে ০.৫% এর বেশি বিচ্যুত হয়, ফলে ট্যাংক না খুলেই ভেতরের ত্রুটি শনাক্ত করা যায়।'
      }
    },
    {
      id: 'pq-ch10-l20-5',
      question: {
        en: 'Summarize the top three personal safety rules every electrical technician must follow when working near high-inductance electrical apparatus (transformers, reactors, linear motors).',
        hi: 'उच्च-प्रेरकत्व वाले उपकरणों के पास काम करते समय प्रत्येक तकनीशियन को किन शीर्ष तीन सुरक्षा नियमों का पालन करना चाहिए?',
        bn: 'উচ্চ-আবেশাঙ্ক বিশিষ্ট যন্ত্রপাতির কাছে কাজ করার সময় প্রতি প্রকৌশলীকে যে শীর্ষ ৩টি নিরাপত্তা নিয়ম মানতে হবে তা সংক্ষেপে লিখুন।'
      },
      hint: {
        en: 'Focus on de-energization verification (Live-Dead-Live), earthing/grounding against ghost induced voltages, and discharging stored magnetic energy.',
        hi: 'लाइव-डेड-लाइव परीक्षण, सुरक्षात्मक अर्थिंग, तथा संचित ऊर्जा को डिस्चार्ज करने पर ध्यान दें।',
        bn: 'লাইভ-ডেড-লাইভ পরীক্ষণ, সুরক্ষামূলক ড্রেন আর্থিং এবং সঞ্চিত চৌম্বক শক্তি ডিসচার্জের ওপর জোর দিন।'
      },
      answerKey: {
        en: '1. Never Touch Without Proving Dead: Execute the "Live-Dead-Live" test using a CAT IV rated detector and apply Lockout/Tagout (LOTO) locks to isolation breakers. 2. Install Rated Working Earths: Always clamp portable grounding leads on all conductors to drain ghost induced voltages from adjacent parallel lines. 3. Discharge Stored Magnetic Energy: Allow automated discharge circuits to bleed off stored energy (1/2 L I²) from large inductors before disconnecting leads or touching terminals.',
        hi: '1. लाइव-डेड-लाइव परीक्षण और LOTO ताला लगाए बिना कभी हाथ न लगाएं। 2. समानांतर लाइनों से प्रेरित वोल्टेज को खत्म करने के लिए सुरक्षात्मक अर्थिंग लगाएं। 3. बड़े इंडक्टर्स की संचित ऊर्जा (1/2 L I²) को पूरी तरह डिस्चार्ज होने दें।',
        bn: '১. লাইভ-ডেড-লাইভ টেস্ট ও LOTO নিশ্চিত না করে কখনো স্পর্শ করবেন না। ২. সমান্তরাল লাইনের ভূতুড়ে ভোল্টেজ মাটিতে ফেলতে উভয় প্রান্তে নিরাপত্তা আর্থিং স্থাপন করুন। ৩. কয়েলে সঞ্চিত চৌম্বক শক্তি (1/2 L I²) ডিসচার্জ না হওয়া পর্যন্ত টার্মিনাল স্পর্শ করবেন না।'
      }
    }
  ]
};
