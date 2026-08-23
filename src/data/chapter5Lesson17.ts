import { Lesson } from '../types';

export const LESSON_POWER_FACTOR: Lesson = {
  id: 'lsn-ch5-power-factor',
  topicId: 'ch5-power-factor',
  chapterId: 'ch-alternating-current',
  order: 17,
  title: {
    en: 'Power Factor & Power Factor Correction',
    hi: 'पावर फैक्टर एवं पावर फैक्टर सुधार',
    bn: 'পাওয়ার ফ্যাক্টর ও পাওয়ার ফ্যাক্টর কারেকশন'
  },
  estimatedMinutes: 50,
  easyExplanation: {
    en: 'Power Factor (PF) is the ratio of Active (useful) Power to Apparent (total) Power supplied to a circuit: PF = cos φ = P / S. Most industrial loads like induction motors are inductive and operate at a lagging power factor, drawing heavy magnetizing reactive current. By connecting shunt capacitor banks in parallel with the load, the leading capacitive current neutralizes the lagging inductive current, raising the power factor close to unity (0.95–0.99), reducing line current, lowering electricity bills, and relieving transformer loading.',
    hi: 'पावर फैक्टर (PF) परिपथ में उपयोगी वास्तविक शक्ति और कुल आभासी शक्ति का अनुपात है: PF = cos φ = P / S। अधिकांश औद्योगिक भार (जैसे इंडक्शन मोटर) इंडक्टिव होते हैं और लैगिंग पावर फैक्टर पर काम करते हैं जिससे भारी धारा प्रवाहित होती है। भार के समानांतर में शंट कैपेसिटर जोड़कर लैगिंग रिएक्टिव धारा को निष्प्रभावी किया जाता है, जिससे पावर फैक्टर सुधरकर 0.95–0.99 तक पहुँच जाता है और लाइन धारा में भारी कमी आती है।',
    bn: 'পাওয়ার ফ্যাক্টর (PF) হলো মোট ব্যবহৃত কার্যকরী ক্ষমতা (Active Power) ও আপাত ক্ষমতার (Apparent Power) অনুপাত: PF = cos φ = P / S। কলকারখানার ইন্ডাকশন মোটরগুলো ল্যাগিং পাওয়ার ফ্যাক্টরে কাজ করায় প্রচুর রিঅ্যাক্টিভ কারেন্ট গ্রহণ করে। লোডের সাথে সমান্তরালে শান্ট ক্যাপাসিটর ব্যাংক যুক্ত করলে লিডিং ক্যাপাসিটিভ কারেন্ট এই ল্যাগিং কারেন্টকে নিরপেক্ষ করে পাওয়ার ফ্যাক্টরকে ১.০-এর কাছাকাছি নিয়ে আসে, ফলে লাইনের কারেন্ট কমে ও বিল সাশ্রয় হয়।'
  },
  detailedExplanation: {
    en: `1. Definition & Fundamental Concept of Power Factor:
Power Factor (PF) is mathematically defined as:
PF = cos φ = P / S = (Active Power in kW) / (Apparent Power in kVA) = R / Z
where φ is the phase angle by which current leads or lags voltage.

2. Types of Power Factor:
- Unity Power Factor (PF = 1.0, φ = 0°): Purely resistive circuit where voltage and current are in phase (P = S, Q = 0).
- Lagging Power Factor (0 < PF < 1.0, φ > 0°): Inductive loads (motors, transformers, ballasts) where current lags voltage. The load absorbs inductive reactive power (+Q).
- Leading Power Factor (0 < PF < 1.0, φ < 0°): Capacitive loads or over-excited synchronous motors where current leads voltage. The load supplies reactive power (-Q).

3. Causes of Low Lagging Power Factor in Industries:
- Induction Motors: The single largest industrial load. They draw lagging magnetizing current to establish the stator-rotor rotating magnetic field (PF drops to 0.2–0.3 at no load, 0.8–0.85 at full load).
- Transformers: Under light loading, the magnetizing reactive current dominates.
- Induction Furnaces & Arc Welding: Highly reactive coils operate at low PF (0.5–0.7).
- Discharge Lamps & Fluorescent Chokes: Require inductive ballast ballasts.

4. Detrimental Consequences of Low Power Factor:
- Higher Line Current: Since I = P / (V · cos φ), lower cos φ requires significantly higher current to transmit the exact same kW of mechanical work.
- Increased I²R Copper Losses: Transmission line, cable, and transformer thermal losses increase with the square of the current, reducing energy efficiency.
- Poor Voltage Regulation: Heavy line current causes severe line impedance voltage drops (I·R and I·X), dropping consumer terminal voltage at the end of the line.
- Reduced Equipment Capacity: Generators, transformers, and cables rated in kVA deliver far fewer useful kW of work. A 1000 kVA transformer at 0.5 PF can only deliver 500 kW, but at 0.95 PF delivers 950 kW.
- Utility Penalties: Electrical supply companies charge penalty surcharges on industrial bills if average PF drops below 0.85–0.90, and offer rebates for PF > 0.95.

5. Power Factor Correction (PFC) Principle:
To raise the power factor from an initial lagging value cos φ1 to an improved target cos φ2 without altering the active power P (kW):
- Initial Reactive Power: Q1 = P · tan φ1
- Target Reactive Power after correction: Q2 = P · tan φ2
- Required Capacitive Reactive Power Rating (Qc):
  Qc = Q1 - Q2 = P · (tan φ1 - tan φ2)  (in kVAR)
- Shunt Capacitance Required per Phase:
  Since Qc = V² / Xc = V² · (2π f C):
  C = Qc / (2π · f · V²)  (Farads)
  where V is the RMS phase voltage across the capacitor in Volts.

6. Methods of Power Factor Improvement:
- Static Shunt Capacitors: Most economical, low-loss (0.5 W/kVAR), flexible modular banks installed at load terminals or substation busbars.
- Automatic Power Factor Controller (APFC): Microprocessor-based panels that switch capacitor steps dynamically using contactors or thyristors based on real-time load changes.
- Synchronous Condensers: Over-excited synchronous motors running at no-load. Provide smooth, continuous stepless leading reactive power adjustment in large utility grids.
- Phase Advancers: Special AC exciters mounted on the rotor shaft of large induction motors to eliminate lagging reactive current directly at the rotor.`,
    hi: `1. पावर फैक्टर की परिभाषा:
पावर फैक्टर सक्रिय शक्ति (kW) और आभासी शक्ति (kVA) का अनुपात है:
PF = cos φ = P / S = R / Z

2. प्रकार:
- यूनिटी पावर फैक्टर (PF = 1.0): शुद्ध प्रतिरोधी परिपथ (V और I समान कला में)।
- लैगिंग पावर फैक्टर: इंडक्टिव भार (मोटर आदि) जहाँ धारा वोल्टेज से पीछे रहती है।
- लीडिंग पावर फैक्टर: कैपेसिटिव भार जहाँ धारा वोल्टेज से आगे रहती है।

3. कम पावर फैक्टर के कारण:
- इंडक्शन मोटरें (नो-लोड पर PF = 0.2-0.3, फुल लोड पर 0.8-0.85)।
- वेल्डिंग ट्रांसफार्मर, आर्क फर्नेस और फ्लोरोसेंट चोक।

4. कम पावर फैक्टर के नुकसान:
- लाइन में भारी धारा: I = P / (V · cos φ), अतः PF कम होने पर तार में करंट बहुत बढ़ जाता है।
- I²R कॉपर लॉस में अत्यधिक वृद्धि।
- ट्रांसमिशन लाइनों में वोल्टेज ड्रॉप (खराब वोल्टेज रेगुलेशन)।
- ट्रांसफार्मर और जनरेटर की वास्तविक क्षमता घट जाना।
- बिजली बोर्ड द्वारा भारी पेनल्टी (जुर्माना)।

5. पावर फैक्टर सुधार का गणितीय सूत्र:
प्रारंभिक कोण φ1 से सुधारे गए कोण φ2 तक:
Qc = P · (tan φ1 - tan φ2) (kVAR)
कैपेसिटेंस C = Qc / (2π · f · V²) (Farad)

6. सुधार की विधियाँ:
- शंट कैपेसिटर बैंक (Shunt Capacitors / APFC पैनल)।
- सिंक्रोनस कंडेंसर (ओवर-एक्साइटेड सिंक्रोनस मोटर)।
- फेज एडवांसर्स।`,
    bn: `১. পাওয়ার ফ্যাক্টরের সংজ্ঞা:
পাওয়ার ফ্যাক্টর হলো অ্যাক্টিভ পাওয়ার (kW) এবং অ্যাপারেন্ট পাওয়ারের (kVA) অনুপাত:
PF = cos φ = P / S = R / Z

২. প্রকারভেদ:
- ইউনিটি PF (PF = ১.০): রেজিস্টিভ লোড (V ও I একই ফেজে থাকে)।
- ল্যাগিং PF: ইন্ডাক্টিভ লোড (ইন্ডাকশন মোটর) যেখানে কারেন্ট ভোল্টেজ থেকে পিছিয়ে থাকে।
- লিডিং PF: ক্যাপাসিটিভ লোড যেখানে কারেন্ট এগিয়ে থাকে।

৩. কম পাওয়ার ফ্যাক্টরের ক্ষতিকর প্রভাব:
- অতিরিক্ত লাইন কারেন্ট: I = P / (V · cos φ) হওয়ায় PF কমলে কারেন্ট নাটকীয়ভাবে বৃদ্ধি পায়।
- I²R তাপ অপচয় এবং লাইনে ভোল্টেজ ড্রপ বৃদ্ধি পায়।
- ট্রান্সফরমারের কার্যকর ক্ষমতা কমে যায়।
- বিদ্যুৎ সরবরাহকারী কোম্পানি জরিমানা আরোপ করে।

৪. ক্যাপাসিটর রেটিং নির্ণয়ের সূত্র:
Qc = P · (tan φ1 - tan φ2) (kVAR)
ক্যাপাসিট্যান্স C = Qc / (২π · f · V²) (Farad)

৫. পাওয়ার ফ্যাক্টর সংশোধনের পদ্ধতি:
- শান্ট ক্যাপাসিটর ব্যাংক ও APFC প্যানেল।
- সিনক্রোনাস কন্ডেনসার।
- ফেজ অ্যাডভান্সার।`
  },
  sections: [
    {
      id: 'sec-pf-derivation-capacitor',
      title: {
        en: 'Mathematical Sizing of Shunt Capacitor Bank',
        hi: 'शंट कैपेसिटर बैंक का गणितीय आकार निर्धारण',
        bn: 'শান্ট ক্যাপাসিটর ব্যাংকের গাণিতিক গণনা'
      },
      content: {
        en: 'A parallel shunt capacitor draws pure leading current Ic = V / Xc = 2πfCV at 90° ahead of voltage. This leading current vectorially subtracts from the reactive component of the inductive load current (IL·sin φ1), reducing total line current to I2 = I1·cos φ1 / cos φ2 without altering useful load power P.',
        hi: 'समानांतर शंट कैपेसिटर 90° लीडिंग धारा Ic = 2πfCV खींचता है। यह धारा लोड की इंडक्टिव रिएक्टिव धारा को घटाकर कुल लाइन धारा को I2 तक कम कर देती है, जबकि उपयोगी शक्ति P अपरिवर्तित रहती है।',
        bn: 'সমান্তরাল শান্ট ক্যাপাসিটর ভোল্টেজ থেকে ৯০° এগিয়ে থাকা বিশুদ্ধ লিডিং কারেন্ট Ic = ২πfCV গ্রহণ করে। এটি লোডের ল্যাগিং রিঅ্যাক্টিভ কারেন্টকে কমিয়ে মোট লাইন কারেন্ট হ্রাস করে।'
      },
      schematicId: 'circuit-power-factor-correction',
      keyEquations: [
        'Q_c = P \\cdot (\\tan\\phi_1 - \\tan\\phi_2)',
        'I_c = \\frac{Q_c}{V}',
        'C = \\frac{Q_c}{2\\pi f V^2}',
        'I_2 = I_1 \\cdot \\frac{\\cos\\phi_1}{\\cos\\phi_2}'
      ]
    },
    {
      id: 'sec-industrial-economics',
      title: {
        en: 'Industrial Economics & Payback of PFC',
        hi: 'औद्योगिक अर्थशास्त्र एवं PFC की लागत वसूली',
        bn: 'শিল্প অর্থনীতি ও PFC বিনিয়োগের সাশ্রয়'
      },
      content: {
        en: 'PFC installation typically achieves complete capital payback within 6 to 18 months through utility penalty avoidance, billing tariff rebates, reduced maximum demand (kVA MD) charges, and freed capacity in internal transformers and switchgear.',
        hi: 'PFC की लागत आमतौर पर बिजली बिल में पेनल्टी की बचत, डिमांड चार्ज में कमी और ट्रांसफार्मर क्षमता मुक्त होने से 6 से 18 महीनों में पूरी तरह वसूल हो जाती है।',
        bn: 'PFC ইনস্টলেশনের সম্পূর্ণ খরচ সাধারণত ৬ থেকে ১৮ মাসের মধ্যে পেনাল্টি সাশ্রয় এবং kVA ডিমান্ড চার্জ হ্রাসের মাধ্যমে উঠে আসে।'
      },
      schematicId: 'circuit-power-factor-correction',
      keyEquations: [
        '\\text{kVA Saved} = \\frac{P}{\\cos\\phi_1} - \\frac{P}{\\cos\\phi_2}',
        '\\text{Loss Reduction (\\%)} = \\left[1 - \\left(\\frac{\\cos\\phi_1}{\\cos\\phi_2}\\right)^2\\right] \\times 100\\%'
      ]
    }
  ],
  formulas: [
    {
      symbol: 'Q_c',
      expression: 'Q_c = P \\cdot (\\tan\\phi_1 - \\tan\\phi_2)',
      description: {
        en: 'Required Capacitive Reactive Power rating of Shunt Capacitor Bank (kVAR)',
        hi: 'शंट कैपेसिटर बैंक की आवश्यक रेटिंग (kVAR में)',
        bn: 'প্রয়োজনীয় শান্ট ক্যাপাসিটর ব্যাংকের রেটিং (kVAR)'
      },
      variables: [
        { symbol: 'P', name: { en: 'Active Load Power (kW)', hi: 'सक्रिय भार शक्ति (kW)', bn: 'অ্যাক্টিভ লোড ক্ষমতা (kW)' } },
        { symbol: 'φ1', name: { en: 'Initial uncorrected phase angle (cos φ1 = original PF)', hi: 'प्रारंभिक कला कोण', bn: 'প্রাথমিক ফেজ কোণ' } },
        { symbol: 'φ2', name: { en: 'Final targeted phase angle (cos φ2 = target PF)', hi: 'अंतिम लक्षित कला कोण', bn: 'চূড়ান্ত লক্ষ্য ফেজ কোণ' } }
      ]
    },
    {
      symbol: 'C',
      expression: 'C = \\frac{Q_c}{2\\pi \\cdot f \\cdot V^2}',
      description: {
        en: 'Required Capacitance in Farads (F) or Microfarads (µF) across phase voltage V',
        hi: 'फेज वोल्टेज V पर आवश्यक धारिता (Microfarad में)',
        bn: 'ফেজ ভোল্টেজ V-এ প্রয়োজনীয় ক্যাপাসিট্যান্স (Microfarad-এ)'
      }
    },
    {
      symbol: 'I_line',
      expression: 'I_{\\text{line}} = \\frac{P}{V \\cdot \\cos\\phi}',
      description: {
        en: 'Single-phase line current as a function of power factor',
        hi: 'पावर फैक्टर के फलन के रूप में सिंगल-फेज लाइन धारा',
        bn: 'পাওয়ার ফ্যাক্টরের ভিত্তিতে সিঙ্গেল ফেজ লাইন কারেন্ট'
      }
    },
    {
      symbol: 'kVA_release',
      expression: '\\Delta S = S_1 - S_2 = P \\cdot \\left(\\frac{1}{\\cos\\phi_1} - \\frac{1}{\\cos\\phi_2}\\right)',
      description: {
        en: 'System apparent capacity (kVA) released for additional load',
        hi: 'अतिरिक्त भार के लिए मुक्त हुई ट्रांसफार्मर क्षमता (kVA)',
        bn: 'অতিরিক্ত লোডের জন্য উন্মুক্ত ট্রান্সফরমার ক্ষমতা (kVA)'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-pfc-circuit',
      title: {
        en: 'Power Factor Correction using Shunt Capacitor',
        hi: 'शंट कैपेसिटर द्वारा पावर फैक्टर सुधार',
        bn: 'শান্ট ক্যাপাসিটর দ্বারা পাওয়ার ফ্যাক্টর কারেকশন'
      },
      caption: {
        en: 'Schematic showing Inductive Load shunted by PFC Capacitor Bank with phasor cancellation of lagging reactive current.',
        hi: 'PFC कैपेसिटर बैंक द्वारा इंडक्टिव लोड की लैगिंग धारा के निष्प्रभावी होने का आरेख।',
        bn: 'শান্ট ক্যাপাসিটর ব্যাংক দ্বারা ল্যাগিং কারেন্ট প্রশমনের সার্কিট চিত্র।'
      },
      svgType: 'circuit-power-factor-correction'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-17-1',
      problem: {
        en: 'A 230 V, 50 Hz single-phase motor consumes 5 kW of power at a lagging power factor of 0.65. Calculate the capacitance of the shunt capacitor required to raise the power factor to 0.95 lagging. Also find the reduction in line current.',
        hi: 'एक 230 V, 50 Hz सिंगल-फेज मोटर 0.65 लैगिंग पावर फैक्टर पर 5 kW शक्ति लेती है। पावर फैक्टर को 0.95 लैगिंग तक सुधारने के लिए आवश्यक शंट कैपेसिटर की धारिता ज्ञात करें। साथ ही लाइन धारा में आई कमी भी ज्ञात करें।',
        bn: 'একটি ২৩০ V, ৫০ Hz সিঙ্গেল ফেজ মোটর ০.৬৫ ল্যাগিং PF-এ ৫ kW শক্তি টানে। পাওয়ার ফ্যাক্টর ০.৯৫ ল্যাগিং-এ উন্নীত করতে প্রয়োজনীয় শান্ট ক্যাপাসিট্যান্স নির্ণয় কর এবং লাইন কারেন্ট হ্রাস হিসাব কর।'
      },
      givenValues: {
        'V': '230 V',
        'f': '50 Hz',
        'P': '5 kW = 5000 W',
        'cos φ1': '0.65 (initial PF)',
        'cos φ2': '0.95 (target PF)'
      },
      solution: {
        en: `Step 1: Determine initial and target phase angles:
φ1 = cos⁻¹(0.65) = 49.46° ⇒ tan φ1 = tan(49.46°) = 1.1691
φ2 = cos⁻¹(0.95) = 18.19° ⇒ tan φ2 = tan(18.19°) = 0.3287

Step 2: Calculate required capacitive reactive power rating (Qc):
Qc = P · (tan φ1 - tan φ2)
Qc = 5000 × (1.1691 - 0.3287) = 5000 × 0.8404 = 4202 VAR = 4.202 kVAR.

Step 3: Calculate required Capacitance C:
Qc = V² / Xc = V² · (2π f C)
C = Qc / (2π · f · V²)
C = 4202 / (2 × π × 50 × 230²) = 4202 / (314.16 × 52900) = 4202 / 16,619,064 = 2.528 × 10⁻⁴ F = 252.8 µF.

Step 4: Calculate line current before and after correction:
Initial Current I1 = P / (V · cos φ1) = 5000 / (230 × 0.65) = 5000 / 149.5 = 33.44 A.
Corrected Current I2 = P / (V · cos φ2) = 5000 / (230 × 0.95) = 5000 / 218.5 = 22.88 A.
Reduction in Line Current = I1 - I2 = 33.44 - 22.88 = 10.56 A (a 31.58% reduction!).`,
        hi: `चरण 1: कोण: φ1 = 49.46° (tan φ1 = 1.1691), φ2 = 18.19° (tan φ2 = 0.3287)।
चरण 2: कैपेसिटर kVAR: Qc = 5000 × (1.1691 - 0.3287) = 4202 VAR = 4.202 kVAR।
चरण 3: धारिता C = 4202 / (2π × 50 × 230²) = 252.8 µF।
चरण 4: प्रारंभिक धारा I1 = 33.44 A; सुधरी धारा I2 = 22.88 A।
धारा में कमी = 33.44 - 22.88 = 10.56 A (31.6% की भारी बचत)।`,
        bn: `ধাপ ১: φ1 = ৪৯.৪৬° (tan φ1 = ১.১৬৯১), φ2 = ১৮.১৯° (tan φ2 = ০.৩২৮৭)।
ধাপ ২: Qc = ৫০০০ × (১.১৬৯১ - ০.৩২৮৭) = ৪২০২ VAR = ৪.২০২ kVAR।
ধাপ ৩: ক্যাপাসিট্যান্স C = ৪২০২ / (২π × ৫০ × ২৩০²) = ২৫২.৮ µF।
ধাপ ৪: প্রাথমিক কারেন্ট I1 = ৩৩.৪৪ A; সংশোধিত কারেন্ট I2 = ২২.৮৮ A।
কারেন্ট হ্রাস = ১০.৫৬ A (৩১.৬% সাশ্রয়)।`
      },
      finalAnswer: {
        en: 'Required Capacitance C = 252.8 µF, Capacitor Rating Qc = 4.202 kVAR, Current Reduction = 10.56 A (31.6%).',
        hi: 'C = 252.8 µF, Qc = 4.202 kVAR, धारा में कमी = 10.56 A (31.6%)।',
        bn: 'C = ২৫২.৮ µF, Qc = ৪.২০২ kVAR, কারেন্ট হ্রাস = ১০.৫৬ A (৩১.৬%)।'
      }
    },
    {
      id: 'ex-17-2',
      problem: {
        en: 'An industrial plant has a total load of 200 kW at 0.707 lagging power factor supplied from a 400 V, 50 Hz substation. Find: (a) The kVA rating of the transformer required originally, (b) The kVAR rating of the capacitor bank required to improve the power factor to unity (1.0), (c) The kVA capacity released in the transformer after PFC.',
        hi: 'एक औद्योगिक संयंत्र में 400 V, 50 Hz सबस्टेशन से 0.707 लैगिंग पावर फैक्टर पर 200 kW का कुल भार है। ज्ञात करें: (a) मूल ट्रांसफार्मर की kVA रेटिंग, (b) पावर फैक्टर को 1.0 (यूनिटी) करने के लिए आवश्यक कैपेसिटर बैंक की kVAR रेटिंग, (c) PFC के बाद ट्रांसफार्मर में मुक्त हुई kVA क्षमता।',
        bn: 'একটি শিল্প কারখানায় ৪০০ V, ৫০ Hz সাপ্লাইয়ে ০.৭০৭ ল্যাগিং PF-এ ২০০ kW লোড চলে। নির্ণয় কর: (a) মূল ট্রান্সফরমারের kVA রেটিং, (b) PF ১.০ (ইউনিটি) করতে প্রয়োজনীয় kVAR রেটিং, (c) PFC-এর পর উন্মুক্ত ট্রান্সফরমার ক্ষমতা।'
      },
      givenValues: {
        'P': '200 kW',
        'cos φ1': '0.707 lagging (φ1 = 45°, tan φ1 = 1.0)',
        'cos φ2': '1.0 unity (φ2 = 0°, tan φ2 = 0)'
      },
      solution: {
        en: `Step 1: Original Transformer Apparent Power Demand (S1):
S1 = P / cos φ1 = 200 / 0.707 = 282.89 kVA.

Step 2: Capacitor Bank kVAR Rating (Qc) for Unity PF:
Since target PF = 1.0, all reactive power Q1 must be cancelled by Qc:
Q1 = P · tan φ1 = 200 × tan(45°) = 200 × 1.0 = 200 kVAR.
Target Q2 = P · tan(0°) = 0 kVAR.
Qc = Q1 - Q2 = 200 - 0 = 200 kVAR.

Step 3: New Apparent Power Demand (S2) at unity PF:
S2 = P / cos φ2 = 200 / 1.0 = 200 kVA.

Step 4: Transformer Capacity Released (ΔS):
ΔS = S1 - S2 = 282.89 - 200.0 = 82.89 kVA.
(The factory can now add 82.89 kW of extra machines to the existing transformer without upgrading!).`,
        hi: `चरण 1: मूल ट्रांसफार्मर मांग S1 = 200 / 0.707 = 282.89 kVA।
चरण 2: आवश्यक कैपेसिटर रेटिंग Qc = 200 × (1.0 - 0) = 200 kVAR।
चरण 3: नया S2 = 200 / 1.0 = 200 kVA।
चरण 4: मुक्त हुई ट्रांसफार्मर क्षमता ΔS = 282.89 - 200 = 82.89 kVA।`,
        bn: `ধাপ ১: মূল ট্রান্সফরমার চাহিদা S1 = ২০০ / ০.৭০৭ = ২৮২.৮৯ kVA।
ধাপ ২: প্রয়োজনীয় ক্যাপাসিটর Qc = ২০০ × (১.০ - ০) = ২০০ kVAR।
ধাপ ৩: সংশোধিত চাহিদা S2 = ২০০ kVA।
ধাপ ৪: উন্মুক্ত ট্রান্সফরমার ক্ষমতা ΔS = ২৮২.৮৯ - ২০০ = ৮২.৮৯ kVA।`
      },
      finalAnswer: {
        en: 'Original S1 = 282.89 kVA, Capacitor Rating Qc = 200 kVAR, Released Capacity = 82.89 kVA.',
        hi: 'S1 = 282.89 kVA, Qc = 200 kVAR, मुक्त क्षमता = 82.89 kVA।',
        bn: 'S1 = ২৮২.৮৯ kVA, Qc = ২০০ kVAR, মুক্ত ক্ষমতা = ৮২.৮৯ kVA।'
      }
    },
    {
      id: 'ex-17-3',
      problem: {
        en: 'A factory takes a steady load of 300 kW at 0.6 lagging power factor from a 415 V supply. It is desired to improve the overall power factor to 0.92 lagging using a 3-phase delta-connected capacitor bank. Calculate: (a) Total kVAR of the bank, (b) Capacitance required per phase in microfarads.',
        hi: 'एक कारखाना 415 V सप्लाई से 0.6 लैगिंग पावर फैक्टर पर 300 kW का भार लेता है। 3-फेज डेल्टा-कनेक्टेड कैपेसिटर बैंक से पावर फैक्टर को 0.92 लैगिंग तक सुधारने के लिए: (a) बैंक का कुल kVAR, (b) प्रति फेज आवश्यक धारिता (µF में) ज्ञात करें।',
        bn: 'একটি কারখানা ৪১৫ V সাপ্লাই থেকে ০.৬ ল্যাগিং PF-এ ৩০০ kW লোড নেয়। ৩-ফেজ ডেল্টা-কানেক্টেড ক্যাপাসিটর ব্যাংক দিয়ে PF ০.৯২ ল্যাগিং-এ উন্নীত করতে: (a) মোট kVAR, (b) প্রতি ফেজে প্রয়োজনীয় ক্যাপাসিট্যান্স (µF) নির্ণয় কর।'
      },
      givenValues: {
        'P': '300 kW',
        'V_line': '415 V',
        'f': '50 Hz',
        'cos φ1': '0.60 lag (tan φ1 = 1.3333)',
        'cos φ2': '0.92 lag (tan φ2 = 0.4260)'
      },
      solution: {
        en: `Step 1: Calculate Total 3-Phase Reactive Power to be compensated (Qc):
tan φ1 = tan(cos⁻¹ 0.60) = 0.80 / 0.60 = 1.3333
tan φ2 = tan(cos⁻¹ 0.92) = √(1 - 0.92²) / 0.92 = 0.3919 / 0.92 = 0.4260
Qc_total = P · (tan φ1 - tan φ2) = 300 × (1.3333 - 0.4260) = 300 × 0.9073 = 272.2 kVAR = 272,200 VAR.

Step 2: Reactive Power per Phase (Qc_phase):
In a balanced 3-phase bank:
Qc_phase = Qc_total / 3 = 272,200 / 3 = 90,733.3 VAR.

Step 3: Capacitance per Phase for Delta Connection:
In Delta connection, the voltage across each phase capacitor is the full Line Voltage (V_phase = V_line = 415 V):
C_delta = Qc_phase / (2π · f · V_line²)
C_delta = 90,733.3 / (2 × π × 50 × 415²) = 90,733.3 / (314.16 × 172,225) = 90,733.3 / 54,106,206 = 1.6769 × 10⁻³ F = 1676.9 µF.`,
        hi: `चरण 1: कुल कैपेसिटर kVAR = 300 × (1.3333 - 0.4260) = 272.2 kVAR।
चरण 2: प्रति फेज kVAR = 272.2 / 3 = 90.733 kVAR।
चरण 3: डेल्टा कनेक्शन में V_phase = 415 V:
C_delta = 90733.3 / (2π × 50 × 415²) = 1676.9 µF प्रति फेज।`,
        bn: `ধাপ ১: মোট Qc = ৩০০ × (১.৩৩৩৩ - ০.৪২৬০) = ২৭২.২ kVAR।
ধাপ ২: প্রতি ফেজে Qc = ২৭২.২ / ৩ = ৯০.৭৩৩ kVAR।
ধাপ ৩: ডেল্টায় V_phase = ৪১৫ V:
C_delta = ৯০৭৩৩.৩ / (২π × ৫০ × ৪১৫²) = ১৬৭৬.৯ µF প্রতি ফেজ।`
      },
      finalAnswer: {
        en: 'Total Bank Rating Qc = 272.2 kVAR, Capacitance per Phase (Delta) C = 1677 µF.',
        hi: 'Qc = 272.2 kVAR, प्रति फेज धारिता C = 1677 µF।',
        bn: 'মোট Qc = ২৭২.২ kVAR, প্রতি ফেজে ক্যাপাসিট্যান্স C = ১৬৭৭ µF।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Automatic Power Factor Correction (APFC) Panels: Widely deployed in manufacturing plants, textile mills, and commercial complexes to switch capacitor banks automatically based on dynamic load fluctuations.',
      'Electric Vehicle (EV) Chargers & Variable Frequency Drives (VFDs): Integrated with active front-end (AFE) rectifiers to achieve unity power factor (PF > 0.99) and mitigate grid harmonics.',
      'Renewable Energy Integration: Solar and wind inverters operate with reactive power control modes (Volt-VAR control) to support substation grid voltage stability.',
      'HVDC Transmission & Substation SVCs: Static VAR Compensators (SVC) and STATCOMs provide ultra-fast dynamic reactive power compensation for interstate bulk power transmission.'
    ],
    hi: [
      'APFC पैनल: कारखानों और वाणिज्यिक भवनों में स्वचालित रूप से कैपेसिटर जोड़ने/हटाने के लिए व्यापक रूप से उपयोग किए जाते हैं।',
      'ईवी चार्जर एवं वीएफडी: सक्रिय रेक्टिफायर के माध्यम से ग्रिड पर 0.99 यूनिटी पावर फैक्टर बनाए रखते हैं।',
      'सौर एवं पवन ऊर्जा संयंत्र: ग्रिड वोल्टेज को स्थिर रखने के लिए इन्वर्टर से रिएक्टिव पावर सपोर्ट प्रदान करते हैं।',
      'सबस्टेशन स्टैटिक वार कम्पेन्सेटर (SVC/STATCOM): लंबी ट्रांसमिशन लाइनों में त्वरित गति से रिएक्टिव पावर संतुलन बनाए रखते हैं।'
    ],
    bn: [
      'APFC প্যানেল: শিল্প কারখানায় লোডের পরিবর্তনের সাথে সাথে স্বয়ংক্রিয়ভাবে ক্যাপাসিটর ব্যাংক অন/অফ করতে ব্যবহৃত হয়।',
      'ইভি চার্জার ও ভিএফডি: গ্রিডের স্থিতিশীলতা রক্ষায় অ্যাক্টিভ ফ্রন্ট-এন্ড ব্যবহার করে প্রায় ১.০ PF বজায় রাখে।',
      'সৌর ও বায়ু বিদ্যুৎ কেন্দ্র: গ্রিড ভোল্টেজ নিয়ন্ত্রণে ইনভার্টারের মাধ্যমে রিঅ্যাক্টিভ পাওয়ার সাপোর্ট প্রদান করে।',
      'সাবস্টেশন SVC ও STATCOM: দীর্ঘ দূরত্বের ট্রান্সমিশন লাইনে দ্রুত রিঅ্যাক্টিভ পাওয়ারের ভারসাম্য রক্ষা করে।'
    ]
  },
  importantPoints: {
    en: [
      'Power Factor cos φ = P / S is the fraction of apparent power transformed into real working output.',
      'Adding shunt capacitors does NOT change the active power P (kW) consumed by the load machines; it purely provides localized reactive power (kVAR).',
      'Delta-connected 3-phase capacitor banks require 3 times smaller capacitance (C_delta = C_star / 3) than star-connected banks for the same kVAR rating because capacitor reactive power scales with V².',
      'Over-correction (leading PF) must be avoided as it causes leading-current voltage rise (Ferranti effect) and harmonic resonance with grid transformers.',
      'Utility billing often uses kVAh rather than kWh tariffs to naturally penalize poor power factor consumers.'
    ],
    hi: [
      'पावर फैक्टर cos φ = P / S उपयोगी शक्ति का अनुपात है।',
      'शंट कैपेसिटर जोड़ने से मोटर द्वारा ली जाने वाली वास्तविक शक्ति (kW) नहीं बदलती, केवल लाइन करंट घटता है।',
      'समान kVAR के लिए डेल्टा में जुड़े कैपेसिटर की धारिता स्टार की तुलना में एक तिहाई (1/3) होती है क्योंकि Q ∝ V²।',
      'अत्यधिक सुधार (ओवर-करेक्शन/लीडिंग PF) से बचना चाहिए क्योंकि इससे वोल्टेज वृद्धि और रेजोनेंस हो सकता है।',
      'बिजली कंपनियाँ अक्सर कम पावर फैक्टर पर जुर्माना लगाने के लिए kVAh आधार पर बिल बनाती हैं।'
    ],
    bn: [
      'পাওয়ার ফ্যাক্টর cos φ = P / S দরকারী শক্তির অনুপাত নির্দেশ করে।',
      'শান্ট ক্যাপাসিটর লোডের কার্যকরী ক্ষমতা (kW) পরিবর্তন করে না, কেবল লাইনের কারেন্ট কমায়।',
      'একই kVAR-এর জন্য ডেল্টা কানেকশনে স্টার কানেকশনের তুলনায় ১/৩ ভাগ ক্যাপাসিট্যান্স প্রয়োজন হয়।',
      'ওভার-কারেকশন (লিডিং PF) এড়ানো উচিত, অন্যথায় অতিরিক্ত ভোল্টেজ বৃদ্ধি পেতে পারে।',
      'বিদ্যুৎ বিতরণ সংস্থাগুলো প্রায়শই kVAh ভিত্তিক ট্যারিফ প্রয়োগ করে।'
    ]
  },
  commonMistakes: {
    en: [
      'Thinking PFC saves active power (kWh) on the motor itself: The motor still takes the exact same kW to turn its mechanical shaft; the savings come from eliminating line I²R heating and avoiding utility tariff penalties.',
      'Connecting capacitors in series for PFC: Power factor correction MUST use parallel (shunt) capacitors. Series capacitors are only used for line reactance compensation in EHV transmission lines.',
      'Confusing Star and Delta capacitor voltage: In Delta, V_cap = V_line; in Star, V_cap = V_line / √3. Neglecting this leads to a 3× calculation error in capacitance.',
      'Ignoring harmonic resonance: Large capacitor banks can resonate with transformer leakage inductance at 5th or 7th harmonics if detuning reactors are omitted.'
    ],
    hi: [
      'यह सोचना कि कैपेसिटर से मोटर की अपनी वाट खपत घट जाती है: मोटर का शाफ्ट वर्क वही रहता है, बचत लाइन में करंट घटने और बिजली बिल पेनल्टी बचने से होती है।',
      'कैपेसिटर को सीरीज में लगाना: PFC के लिए हमेशा समानांतर (शंट) कनेक्शन का उपयोग किया जाता है।',
      'स्टार और डेल्टा में वोल्टेज का भ्रम: डेल्टा में V_cap = V_line और स्टार में V_cap = V_line / √3 होता है।',
      'हार्मोनिक्स की अनदेखी: बिना डिट्यूनिंग रिएक्टर के कैपेसिटर बैंक हार्मोनिक रेजोनेंस पैदा कर सकते हैं।'
    ],
    bn: [
      'মোটরের অভ্যন্তরীণ ওয়াট সাশ্রয় হয় ভাবা: মোটরের প্রয়োজনীয় মেকানিক্যাল শক্তি একই থাকে, কেবল সরবরাহ লাইনের কারেন্ট হ্রাস পায়।',
      'PFC-তে সিরিজে ক্যাপাসিটর লাগানো: পাওয়ার ফ্যাক্টর সংশোধনে সর্বদা সমান্তরাল (শান্ট) সংযোগ ব্যবহার করতে হয়।',
      'স্টার ও ডেল্টায় ভোল্টেজ গুলিয়ে ফেলা: ডেল্টায় V_cap = V_line এবং স্টারে V_cap = V_line / √৩।',
      'হারমোনিক্সের দিকে খেয়াল না রাখা: ফিল্টার ছাড়া ক্যাপাসিটর গ্রিডের সাথে হারমোনিক রেজোন্যান্স সৃষ্টি করতে পারে।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-17-1',
      question: {
        en: 'What is the primary operational cause of low lagging power factor in industrial electrical systems?',
        hi: 'औद्योगिक विद्युत प्रणालियों में कम लैगिंग पावर फैक्टर का प्राथमिक परिचालन कारण क्या है?',
        bn: 'শিল্প বৈদ্যুতিক ব্যবস্থায় কম ল্যাগিং পাওয়ার ফ্যাক্টরের প্রধান কারণ কী?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Incandescent lighting bulbs', hi: 'तापदीप्त प्रकाश बल्ब', bn: 'ইনক্যানডেসেন্ট বাল্ব' } },
        { id: 'opt-b', text: { en: 'Induction motors drawing magnetizing reactive current', hi: 'चुंबकीय प्रतिक्रियाशील धारा खींचने वाली इंडक्शन मोटरें', bn: 'ম্যাগনেটাইজিং কারেন্ট গ্রহণকারী ইন্ডাকশন মোটর' } },
        { id: 'opt-c', text: { en: 'Over-excited synchronous motors', hi: 'ओवर-एक्साइटेड सिंक्रोनस मोटर', bn: 'ওভার-এক্সাইটেড সিনক্রোনাস মোটর' } },
        { id: 'opt-d', text: { en: 'Electric resistance heating elements', hi: 'विद्युत प्रतिरोध हीटिंग तत्व', bn: 'বৈদ্যুতিক রেজিস্টিভ হিটার' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Induction motors require lagging reactive magnetizing current to establish their rotating magnetic field, causing poor lagging power factor especially at partial loads.',
        hi: 'इंडक्शन मोटरों को घूर्णी चुंबकीय क्षेत्र बनाने के लिए लैगिंग मैग्नेटाइजिंग धारा की आवश्यकता होती है, जो पावर फैक्टर को कम करती है।',
        bn: 'ইন্ডাকশন মোটরের ঘূর্ণনশীল চৌম্বক ক্ষেত্র তৈরির জন্য ল্যাগিং রিঅ্যাক্টিভ কারেন্টের প্রয়োজন হয়, যা PF কমিয়ে দেয়।'
      }
    },
    {
      id: 'mcq-17-2',
      question: {
        en: 'What is the correct formula for calculating the required rating Qc of a shunt capacitor bank to improve power factor from φ1 to φ2?',
        hi: 'पावर फैक्टर को φ1 से φ2 तक सुधारने के लिए आवश्यक शंट कैपेसिटर बैंक रेटिंग Qc का सही सूत्र क्या है?',
        bn: 'পাওয়ার ফ্যাক্টর φ1 থেকে φ2-তে উন্নীত করতে শান্ট ক্যাপাসিটর রেটিং Qc-এর সঠিক সূত্র কোনটি?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Qc = P · (cos φ1 - cos φ2)', hi: 'Qc = P · (cos φ1 - cos φ2)', bn: 'Qc = P · (cos φ1 - cos φ2)' } },
        { id: 'opt-b', text: { en: 'Qc = P · (sin φ1 - sin φ2)', hi: 'Qc = P · (sin φ1 - sin φ2)', bn: 'Qc = P · (sin φ1 - sin φ2)' } },
        { id: 'opt-c', text: { en: 'Qc = P · (tan φ1 - tan φ2)', hi: 'Qc = P · (tan φ1 - tan φ2)', bn: 'Qc = P · (tan φ1 - tan φ2)' } },
        { id: 'opt-d', text: { en: 'Qc = S · (tan φ1 - tan φ2)', hi: 'Qc = S · (tan φ1 - tan φ2)', bn: 'Qc = S · (tan φ1 - tan φ2)' } }
      ],
      correctOptionId: 'opt-c',
      explanation: {
        en: 'Since Q1 = P·tan φ1 and Q2 = P·tan φ2, the required reactive power compensation is Qc = P·(tan φ1 - tan φ2).',
        hi: 'Q1 = P·tan φ1 और Q2 = P·tan φ2 होने के कारण Qc = P·(tan φ1 - tan φ2) होता है।',
        bn: 'যেহেতু Q1 = P·tan φ1 এবং Q2 = P·tan φ2, তাই Qc = P·(tan φ1 - tan φ2)।'
      }
    },
    {
      id: 'mcq-17-3',
      question: {
        en: 'For a given constant active power P, if the power factor is halved (e.g. from 1.0 to 0.5), what happens to the transmission line I²R copper loss?',
        hi: 'नियत सक्रिय शक्ति P के लिए, यदि पावर फैक्टर आधा (1.0 से 0.5) हो जाए, तो ट्रांसमिशन लाइन में I²R कॉपर लॉस पर क्या प्रभाव पड़ेगा?',
        bn: 'নির্দিষ্ট অ্যাক্টিভ পাওয়ার P-এর জন্য পাওয়ার ফ্যাক্টর অর্ধেক হয়ে গেলে লাইনের I²R কপার লসের কী পরিবর্তন হবে?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Loss is halved', hi: 'हानि आधी हो जाएगी', bn: 'লস অর্ধেক হবে' } },
        { id: 'opt-b', text: { en: 'Loss remains unchanged', hi: 'हानि अपरिवर्तित रहेगी', bn: 'লস অপরিবর্তিত থাকবে' } },
        { id: 'opt-c', text: { en: 'Loss doubles (2×)', hi: 'हानि दोगुनी (2×) हो जाएगी', bn: 'লস দ্বিগুণ হবে' } },
        { id: 'opt-d', text: { en: 'Loss quadruples (4×)', hi: 'हानि चार गुना (4×) हो जाएगी', bn: 'লস চারগুণ (৪×) হবে' } }
      ],
      correctOptionId: 'opt-d',
      explanation: {
        en: 'Line current I = P / (V · cos φ). If cos φ is halved, current I doubles. Since copper losses are proportional to I², loss = (2I)²·R = 4·I²R (4 times higher!).',
        hi: 'धारा I = P / (V · cos φ)। PF आधा होने पर धारा दोगुनी हो जाएगी और कॉपर लॉस I² के अनुपात में 4 गुना बढ़ जाएगा।',
        bn: 'PF অর্ধেক হলে কারেন্ট দ্বিগুণ হয়, ফলে কপার লস I² অনুপাতে ৪ গুণ বৃদ্ধি পায়।'
      }
    },
    {
      id: 'mcq-17-4',
      question: {
        en: 'Why is Delta connection preferred over Star connection for 3-phase power factor correction capacitor banks?',
        hi: '3-फेज PFC कैपेसिटर बैंकों के लिए स्टार कनेक्शन की तुलना में डेल्टा कनेक्शन को प्राथमिकता क्यों दी जाती है?',
        bn: '৩-ফেজ PFC ক্যাপাসিটর ব্যাংকে স্টারের চেয়ে ডেল্টা সংযোগ বেশি পছন্দ করা হয় কেন?'
      },
      options: [
        { id: 'opt-a', text: { en: 'It requires 3 times smaller capacitance (µF) per phase for the same kVAR rating', hi: 'समान kVAR रेटिंग के लिए प्रति फेज 3 गुना कम धारिता (µF) की आवश्यकता होती है', bn: 'একই kVAR রেটিংয়ের জন্য প্রতি ফেজে ৩ গুণ কম ক্যাপাসিট্যান্স প্রয়োজন হয়' } },
        { id: 'opt-b', text: { en: 'It does not require grounding', hi: 'इसमें अर्थिंग की आवश्यकता नहीं होती', bn: 'এতে গ্রাউন্ডিং প্রয়োজন হয় না' } },
        { id: 'opt-c', text: { en: 'Delta connection generates harmonics', hi: 'डेल्टा कनेक्शन हार्मोनिक्स उत्पन्न करता है', bn: 'ডেল্টা সংযোগ হারমোনিক্স তৈরি করে' } },
        { id: 'opt-d', text: { en: 'Delta connection eliminates reactive power completely', hi: 'डेल्टा कनेक्शन रिएक्टिव पावर को पूरी तरह खत्म कर देता है', bn: 'ডেল্টা সংযোগ রিঅ্যাক্টিভ পাওয়ার পুরোপুরি দূর করে' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'In Delta, capacitors experience full line voltage VL instead of phase voltage VL/√3. Since Qc = V²·ωC, Delta requires C_delta = C_star / 3, saving substantial physical size and capacitor manufacturing cost.',
        hi: 'डेल्टा में कैपेसिटर पर पूरा लाइन वोल्टेज रहता है, जिससे समान kVAR के लिए 3 गुना कम धारिता की आवश्यकता होती है।',
        bn: 'ডেল্টায় ক্যাপাসিটর পূর্ণ লাইন ভোল্টেজ পাওয়ায় ১/৩ ভাগ ক্যাপাসিট্যান্স প্রয়োজন হয়, ফলে খরচ ও আকার কমে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'prac-17-1',
      question: {
        en: 'A single-phase 230 V, 50 Hz load takes 10 kW at 0.707 lagging power factor. Calculate: (a) The kVAR of the capacitor required to raise the power factor to 0.95 lagging, (b) The capacitance in µF, (c) The original and new line current.',
        hi: '230 V, 50 Hz एकल-फेज भार 0.707 लैगिंग पावर फैक्टर पर 10 kW लेता है। गणना करें: (a) PF को 0.95 लैगिंग करने के लिए कैपेसिटर kVAR, (b) धारिता (µF में), (c) मूल एवं नई लाइन धारा।',
        bn: 'একটি সিঙ্গেল ফেজ ২৩০ V, ৫০ Hz লোড ০.৭০৭ ল্যাগিং PF-এ ১০ kW নেয়। নির্ণয় কর: (a) PF ০.৯৫ ল্যাগিং করতে প্রয়োজনীয় kVAR, (b) ক্যাপাসিট্যান্স (µF), (c) প্রাথমিক ও সংশোধিত লাইন কারেন্ট।'
      },
      hint: {
        en: 'tan(cos⁻¹ 0.707) = 1.0, tan(cos⁻¹ 0.95) = 0.3287. Use Qc = P·(tan φ1 - tan φ2) and C = Qc / (2πfV²).',
        hi: 'tan φ1 = 1.0, tan φ2 = 0.3287। Qc = P·(tan φ1 - tan φ2) का प्रयोग करें।',
        bn: 'tan φ1 = ১.০, tan φ2 = ০.৩২৮৭। Qc = P·(tan φ1 - tan φ2) ব্যবহার করুন।'
      },
      answerKey: {
        en: '(a) Qc = 10 × (1.0 - 0.3287) = 10 × 0.6713 = 6.713 kVAR = 6713 VAR.\n(b) C = 6713 / (2 × π × 50 × 230²) = 6713 / 16,619,064 = 4.039 × 10⁻⁴ F = 403.9 µF.\n(c) I_old = 10,000 / (230 × 0.707) = 61.5 A; I_new = 10,000 / (230 × 0.95) = 45.77 A (Reduction of 15.73 A).',
        hi: '(a) Qc = 6.713 kVAR। (b) C = 403.9 µF। (c) मूल धारा = 61.5 A, नई धारा = 45.77 A।',
        bn: '(a) Qc = ৬.৭১৩ kVAR। (b) C = ৪০৩.৯ µF। (c) মূল কারেন্ট = ৬১.৫ A, নতুন কারেন্ট = ৪৫.৭৭ A।'
      }
    },
    {
      id: 'prac-17-2',
      question: {
        en: 'A 415 V, 50 Hz 3-phase induction motor develops 50 kW at an efficiency of 90% and power factor of 0.8 lagging. Calculate the kVAR rating of a delta-connected capacitor bank required to improve the overall power factor to 0.98 lagging.',
        hi: 'एक 415 V, 50 Hz 3-फेज इंडक्शन मोटर 90% दक्षता और 0.8 लैगिंग पावर फैक्टर पर 50 kW आउटपुट देती है। कुल पावर फैक्टर को 0.98 लैगिंग तक सुधारने के लिए आवश्यक डेल्टा कैपेसिटर बैंक की kVAR रेटिंग ज्ञात करें।',
        bn: 'একটি ৪১৫ V, ৫০ Hz ৩-ফেজ ইন্ডাকশন মোটর ৯০% দক্ষতায় ০.৮ ল্যাগিং PF-এ ৫০ kW আউটপুট দেয়। মোট PF ০.৯৮ ল্যাগিং করতে প্রয়োজনীয় ডেল্টা ক্যাপাসিটর ব্যাংকের kVAR নির্ণয় কর।'
      },
      hint: {
        en: 'Input Active Power Pin = Pout / Efficiency = 50 / 0.90 = 55.56 kW. Then calculate Qc = Pin · (tan φ1 - tan φ2).',
        hi: 'इनपुट सक्रिय शक्ति Pin = 50 / 0.90 = 55.56 kW। फिर Qc = Pin · (tan φ1 - tan φ2) निकालें।',
        bn: 'ইনপুট সক্রিয় ক্ষমতা Pin = ৫০ / ০.৯০ = ৫৫.৫৬ kW। এরপর Qc = Pin · (tan φ1 - tan φ2) হিসাব করুন।'
      },
      answerKey: {
        en: '(a) Input active electrical power Pin = 50 / 0.90 = 55.556 kW.\n(b) φ1 = cos⁻¹(0.8) = 36.87° ⇒ tan φ1 = 0.75.\n(c) φ2 = cos⁻¹(0.98) = 11.48° ⇒ tan φ2 = 0.2031.\n(d) Qc = 55.556 × (0.75 - 0.2031) = 55.556 × 0.5469 = 30.38 kVAR.',
        hi: 'Pin = 55.56 kW, tan φ1 = 0.75, tan φ2 = 0.2031, आवश्यक Qc = 30.38 kVAR।',
        bn: 'Pin = ৫৫.৫৬ kW, tan φ1 = ০.৭৫, tan φ2 = ০.২০৩১, প্রয়োজনীয় Qc = ৩০.৩৮ kVAR।'
      }
    }
  ]
};
