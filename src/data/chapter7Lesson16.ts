import { Lesson } from '../types';

export const LESSON_POWER_FACTOR_IMPROVEMENT: Lesson = {
  id: 'lsn-ch7-power-factor-improvement',
  topicId: 'ch7-power-factor-improvement',
  chapterId: 'ch-capacitors',
  order: 16,
  title: {
    en: 'Power Factor Improvement & Capacitor Bank kVAR Calculations',
    hi: 'पावर फैक्टर सुधार एवं कैपेसिटर बैंक kVAR गणना',
    bn: 'পাওয়ার ফ্যাক্টর বৃদ্ধি ও ক্যাপাসিটর ব্যাংক kVAR হিসাব'
  },
  description: {
    en: 'Industrial power factor correction, lagging inductive loads, shunt capacitor sizing formula (Qc = P(tan φ1 - tan φ2)), Automatic Power Factor Control (APFC), and electricity bill penalty prevention.',
    hi: 'औद्योगिक पावर फैक्टर सुधार, लैगिंग इंडक्टिव लोड, शंट कैपेसिटर गणना सूत्र, APFC पैनल एवं बिजली बिल जुर्माना रोकथाम।',
    bn: 'শিল্পে পাওয়ার ফ্যাক্টর সংশোধন, ল্যাগিং লোড, শান্ট ক্যাপাসিটর নির্ণয়ের সূত্র (Qc = P(tan φ1 - tan φ2)), APFC প্যানেল ও জরিমানা প্রতিরোধ।'
  },
  easyExplanation: {
    en: 'Industrial machines like electric motors and transformers need magnetic fields to run, which draws lagging "reactive power" (kVAR) from the grid. This lowers the power factor and wastes line capacity. Connecting shunt capacitor banks supplies this reactive magnetizing energy locally right at the factory, raising the power factor close to unity (1.0) and slashing electricity bills.',
    hi: 'औद्योगिक मोटरें और ट्रांसफॉर्मर चुंबकीय क्षेत्र बनाने के लिए ग्रिड से लैगिंग रिएक्टिव पावर (kVAR) खींचते हैं, जिससे पावर फैक्टर गिर जाता है। जब हम समानांतर में शंट कैपेसिटर बैंक लगाते हैं, तो कैपेसिटर लीडिंग रिएक्टिव पावर देकर मोटर की चुंबकन आवश्यकता को स्थानीय स्तर पर ही पूरा कर देते हैं। इससे पावर फैक्टर 0.99 या 1.0 (यूनिटी) तक सुधर जाता है और भारी जुर्माने से बचा जा सकता है।',
    bn: 'কারখানার মোটর ও ট্রান্সফরমার চৌম্বক ক্ষেত্র তৈরির জন্য বিদ্যুৎ গ্রিড থেকে ল্যাগিং রিঅ্যাক্টিভ পাওয়ার (kVAR) টানে, যার ফলে পাওয়ার ফ্যাক্টর কমে যায় এবং সিস্টেমের উপর বাড়তি চাপ পড়ে। লাইনে সমান্তরালে শান্ট ক্যাপাসিটর ব্যাংক বসালে ক্যাপাসিটর স্থানীয়ভাবেই এই রিঅ্যাক্টিভ এনার্জি সরবরাহ করে, ফলে পাওয়ার ফ্যাক্টর প্রায় ১.০ (ইউনিটি) এ পৌঁছে যায় এবং বিদ্যুৎ বিলের অতিরিক্ত জরিমানা বন্ধ হয়।'
  },
  detailedExplanation: {
    en: `1. The Problem of Low Power Factor:
Most industrial AC loads are inductive (induction motors, welders, transformers, ballast chokes).
- Real Power (P, kW): Actual mechanical work and heat performed (P = V · I · cos φ).
- Reactive Power (Q_L, kVAR): Required for magnetic field buildup; current lags voltage by angle φ1.
- Apparent Power (S, kVA): Total power supplied by utility (S = √(P² + Q_L²)).
- Low power factor (cos φ < 0.85) causes:
  * Higher line current (I = P / (V · cos φ)), causing huge I²R line losses and voltage drop.
  * Larger transformer and switchgear kVA capacity requirements.
  * Steep utility penalty surcharges on monthly electric bills.

2. Principle of Power Factor Correction (PFC):
A capacitor draws a CURRENT THAT LEADS voltage by 90° (producing leading reactive power Q_C).
When placed in parallel (shunt) with an inductive load:
- The leading kVAR of the capacitor directly cancels out the lagging kVAR of the inductor.
- Net reactive power drawn from the main grid decreases: Q_new = Q_L - Q_C.
- Total line current is reduced, and the phase angle between voltage and total line current shrinks from φ1 to φ2.

3. Capacitor Sizing Formula (kVAR Requirement):
To improve power factor from initial cos φ1 to target cos φ2 for an active load of P kW:
  Q_c = P · [ \\tan(\\phi_1) - \\tan(\\phi_2) ]   [in kVAR]
Where:
- \\phi_1 = \\arccos(\\text{Initial PF})
- \\phi_2 = \\arccos(\\text{Target PF, usually 0.98 to 1.0})
- P = Real active power in kW.

4. Capacitance Required per Phase:
- Single-phase or Star-connected 3-phase:
  C_{ph} = Q_{c(ph)} / (2 · π · f · V_{ph}²) = (Q_c / 3) / (2 · π · f · V_{ph}²)
- Delta-connected 3-phase bank (industry standard):
  C_Δ = Q_c / (3 · 2 · π · f · V_L²)   [Farads per phase]
*Note: Delta connection requires 1/3 the capacitance of Star connection for the same kVAR rating, saving substantial material cost!*

5. Automatic Power Factor Controller (APFC):
Modern factories employ microprocessor-based APFC relays that monitor line voltage and current via CTs/PTs, calculate instant cos φ, and automatically switch capacitor banks IN or OUT via zero-crossing contactors or thyristor switches as the plant load fluctuates.`,
    hi: `1. कम पावर फैक्टर की समस्या:
औद्योगिक मोटरें इंडक्टिव होने के कारण करंट वोल्टेज से लैग करता है। इससे लाइन करंट बढ़ता है, ट्रांसफॉर्मर गर्म होते हैं और बिजली कंपनियाँ भारी जुर्माना लगाती हैं।

2. शंट कैपेसिटर द्वारा सुधार का सिद्धांत:
कैपेसिटर 90° लीडिंग करंट लेता है। जब इसे मोटर के समानांतर (पैरेलल) में जोड़ा जाता है, तो इसका लीडिंग kVAR मोटर के लैगिंग kVAR को निष्प्रभावी (cancel) कर देता है।

3. आवश्यक कैपेसिटर बैंक kVAR सूत्र:
Qc = P · [tan(φ1) - tan(φ2)]  [kVAR में]
जहाँ:
- φ1 = प्रारंभिक कोण (cos φ1 = पुराना PF)
- φ2 = लक्षित कोण (cos φ2 = नया PF, जैसे 0.99)
- P = वास्तविक लोड किलोवाट (kW) में।

4. डेल्टा बनाम स्टार कनेक्शन:
समान kVAR के लिए डेल्टा कनेक्टेड कैपेसिटर बैंक को स्टार की तुलना में केवल 1/3 धारिता (C) की आवश्यकता होती है, जिससे लागत बहुत कम हो जाती है।`,
    bn: `১. নিম্ন পাওয়ার ফ্যাক্টরের সমস্যা:
মোটর ও ভারী ইন্ডাক্টিভ লোডের কারণে বিদ্যুৎ লাইনে কারেন্ট পিছিয়ে পড়ে (Lagging PF)। এর ফলে লাইনে কারেন্ট প্রবাহ বাড়ে, ভোল্টেজ ড্রপ হয় এবং বিদ্যুৎ বোর্ড অতিরিক্ত জরিমানা আরোপ করে।

২. পাওয়ার ফ্যাক্টর উন্নতিকরণের নীতি:
ক্যাপাসিটর ৯০° অগ্রবর্তী (Leading) কারেন্ট গ্রহণ করে। ফলে প্যারালালে ক্যাপাসিটর যুক্ত করলে এটি মোটরের প্রয়োজনীয় ম্যাগনেটাইজিং কারেন্ট স্থানীয়ভাবে যোগান দেয় এবং গ্রিড থেকে আসা মূল কারেন্টের মান কমিয়ে দেয়।

৩. প্রয়োজনীয় kVAR নির্ণয়ের সূত্র:
Qc = P · [tan(φ1) - tan(φ2)]  [kVAR এককে]
এখানে:
- P = মোট সক্রিয় ক্ষমতা (kW)
- φ1 = পূর্বের ফেজ কোণ (cos φ1 = প্রাথমিক PF)
- φ2 = কাঙ্ক্ষিত ফেজ কোণ (cos φ2 = কাঙ্ক্ষিত PF)`
  },
  formulas: [
    {
      expression: 'Q_c = P \\cdot [\\tan(\\phi_1) - \\tan(\\phi_2)]',
      description: {
        en: 'Required shunt capacitor rating in kVAR to raise power factor from cos φ1 to cos φ2',
        hi: 'पावर फैक्टर को cos φ1 से cos φ2 तक सुधारने हेतु आवश्यक कैपेसिटर kVAR सूत्र',
        bn: 'পাওয়ার ফ্যাক্টর cos φ1 থেকে cos φ2 তে উন্নীত করতে প্রয়োজনীয় ক্যাপাসিটর kVAR সূত্র'
      }
    },
    {
      expression: 'C_\\Delta = \\frac{Q_c \\times 1000}{3 \\times 2 \\pi f \\times V_L^2}',
      description: {
        en: 'Capacitance per phase in Delta-connected 3-phase capacitor bank',
        hi: 'डेल्टा कनेक्टेड 3-फेज कैपेसिटर बैंक में प्रति फेज धारिता (Farad)',
        bn: 'ডেল্টা কানেক্টেড ৩-ফেজ ক্যাপাসিটর ব্যাংকে প্রতি ফেজের ধারকত্ব (Farad)'
      }
    },
    {
      expression: 'I_{new} = I_{old} \\times \\frac{\\cos(\\phi_1)}{\\cos(\\phi_2)}',
      description: {
        en: 'Line current reduction after power factor correction',
        hi: 'पावर फैक्टर सुधार के बाद लाइन करंट में कमी',
        bn: 'পাওয়ার ফ্যাক্টর বৃদ্ধির পর লাইন কারেন্ট হ্রাস পাওয়ার সূত্র'
      }
    }
  ],
  practicalApplications: [
    {
      en: 'Automatic Power Factor Correction (APFC) panel installations in industrial manufacturing plants and commercial buildings',
      hi: 'औद्योगिक संयंत्रों एवं वाणिज्यिक भवनों में APFC पैनल लगाना',
      bn: 'শিল্প কারখানা ও বাণিজ্যিক ভবনে স্বয়ংক্রিয় APFC প্যানেল স্থাপন'
    },
    {
      en: 'Individual power factor correction capacitors connected directly across heavy induction motor terminals',
      hi: 'भारी इंडक्शन मोटरों के टर्मिनलों पर सीधे शंट कैपेसिटर लगाना',
      bn: 'বড় থ্রি-ফেজ মোটরের টার্মিনালে সরাসরি লোকাল শান্ট ক্যাপাসিটর যুক্ত করা'
    },
    {
      en: 'High-voltage grid substation capacitor banks for transmission line voltage stability and loss reduction',
      hi: 'ग्रिड सबस्टेशनों में वोल्टेज स्थिरता एवं लाइन लॉस कम करने हेतु एचवी कैपेसिटर बैंक',
      bn: 'বিদ্যুৎ গ্রিড সাবস্টেশনে ভোল্টেজ স্ট্যাবিলিটি ও সিস্টেম লস কমাতে এইচভি ক্যাপাসিটর ব্যাংক'
    }
  ],
  importantPoints: {
    en: [
      'Capacitors generate leading reactive power (kVAR), which neutralizes lagging inductive kVAR of motors',
      'Improving power factor reduces line current and I²R heat losses without altering actual mechanical work (kW)',
      'Over-compensation (leading power factor beyond 1.0) must be avoided as it causes over-voltage due to the Ferranti-like effect'
    ],
    hi: [
      'कैपेसिटर लीडिंग kVAR पैदा करते हैं जो मोटरों के लैगिंग kVAR को संतुलित करते हैं',
      'पावर फैक्टर सुधारने से वास्तविक उपयोगी कार्य (kW) पर कोई असर डाले बिना लाइन करंट और हीटिंग लॉस कम हो जाते हैं',
      'ओवर-कंपनसेशन (PF 1.0 से आगे लीडिंग होना) से बचना चाहिए क्योंकि इससे वोल्टेज बहुत अधिक बढ़ सकता है'
    ],
    bn: [
      'ক্যাপাসিটর লিডিং রিঅ্যাক্টিভ পাওয়ার তৈরি করে মোটরের ল্যাগিং রিঅ্যাক্টিভ পাওয়ারকে ব্যালান্স করে',
      'পাওয়ার ফ্যাক্টর বৃদ্ধি করলে মোট কাজের (kW) কোনো পরিবর্তন ছাড়াই সরবরাহ লাইনের মোট কারেন্ট ও অপচয় উল্লেখযোগ্যভাবে হ্রাস পায়',
      'কখনোই অতিরিক্ত ক্যাপাসিট্যান্স (Over-correction) লাগানো উচিত নয়, এতে লাইনে ওভার-ভোল্টেজ দেখা দিতে পারে'
    ]
  },
  commonMistakes: {
    en: [
      'Using apparent power (kVA) directly in the tan(φ) formula instead of real active power (kW)',
      'Connecting capacitors in star instead of delta without accounting for the 3x capacitance increase needed in star'
    ],
    hi: [
      'सूत्र में वास्तविक सक्रिय शक्ति (kW) के स्थान पर kVA का उपयोग करना',
      'स्टार कनेक्शन में 3 गुना अधिक कैपेसिटेंस की आवश्यकता को भूल जाना'
    ],
    bn: [
      'সূত্রে আসল সক্রিয় ক্ষমতা (kW) এর জায়গায় ভুল করে মোট kVA ব্যবহার করা',
      'স্টার কানেকশনে ডেল্টার চেয়ে ৩ গুণ বেশি ক্যাপাসিট্যান্স প্রয়োজন হয় তা ভুলে যাওয়া'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch7-16-1',
      question: {
        en: 'A factory consumes 200 kW of load at a lagging power factor of 0.707. What size capacitor bank in kVAR is required to raise the power factor to unity (1.0)?',
        hi: 'एक कारखाना 0.707 लैगिंग पावर फैक्टर पर 200 kW लोड का उपभोग करता है। पावर फैक्टर को यूनिटी (1.0) करने के लिए कितने kVAR के कैपेसिटर बैंक की आवश्यकता होगी?',
        bn: 'একটি কারখানা ০.৭০৭ ল্যাগিং পাওয়ার ফ্যাক্টরে ২০০ kW লোড ব্যবহার করে। পাওয়ার ফ্যাক্টর ১.০ (ইউনিটি) করতে কত kVAR ক্যাপাসিটর ব্যাংক প্রয়োজন?'
      },
      options: [
        { id: 'opt-a', text: { en: '100 kVAR', hi: '100 kVAR', bn: '১০০ kVAR' } },
        { id: 'opt-b', text: { en: '141.4 kVAR', hi: '141.4 kVAR', bn: '১৪১.৪ kVAR' } },
        { id: 'opt-c', text: { en: '200 kVAR', hi: '200 kVAR', bn: '২০০ kVAR' } },
        { id: 'opt-d', text: { en: '282.8 kVAR', hi: '282.8 kVAR', bn: '২৮২.৮ kVAR' } }
      ],
      correctOptionId: 'opt-c',
      explanation: {
        en: 'cos φ1 = 0.707 => φ1 = 45°, so tan(45°) = 1.0. For target PF = 1.0, cos φ2 = 1.0 => φ2 = 0°, so tan(0°) = 0. Qc = P · [tan(φ1) - tan(φ2)] = 200 · [1.0 - 0] = 200 kVAR.',
        hi: 'cos φ1 = 0.707 => φ1 = 45° => tan 45° = 1.0। लक्ष्य PF = 1.0 => tan 0° = 0। Qc = 200 × (1 - 0) = 200 kVAR।',
        bn: 'cos φ1 = ০.৭০৭ => φ1 = ৪৫° => tan(৪৫°) = ১.০। লক্ষ্য PF = ১.০ => tan(০°) = ০। Qc = ২০০ × (১.০ - ০) = ২০০ kVAR।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch7-16-1',
      question: {
        en: 'A 415 V, 50 Hz, 3-phase factory draws 120 kW at 0.65 lagging power factor. Calculate: (a) Initial line current, (b) Required kVAR rating of a capacitor bank to improve power factor to 0.95 lagging, (c) New line current after improvement, (d) Delta-connected capacitance per phase in μF.',
        hi: '415 V, 50 Hz, 3-फेज कारखाने का लोड 120 kW (PF = 0.65 लैगिंग) है। गणना करें: (a) प्रारंभिक धारा, (b) 0.95 PF हेतु आवश्यक kVAR, (c) नई धारा, (d) डेल्टा में प्रति फेज धारिता (μF)।',
        bn: 'একটি ৪১৫ V, ৫০ Hz, ৩-ফেজ কারখানায় ১২০ kW লোডে পাওয়ার ফ্যাক্টর ০.৬৫ ল্যাগিং। নির্ণয় করুন: (a) প্রাথমিক কারেন্ট, (b) PF ০.৯৫ করতে প্রয়োজনীয় kVAR, (c) নতুন কারেন্ট, (d) ডেল্টায় প্রতি ফেজের ক্যাপাসিট্যান্স (μF)।'
      },
      hint: {
        en: 'φ1 = arccos(0.65) = 49.46° (tan = 1.169). φ2 = arccos(0.95) = 18.19° (tan = 0.3287). Initial current I1 = P / (√3 · VL · cos φ1).',
        hi: 'tan(φ1) = 1.169, tan(φ2) = 0.3287। Qc = P · (1.169 - 0.3287)। C_delta = Qc / (3 · 2π · f · VL²)।',
        bn: 'tan(φ1) = ১.১৬৯, tan(φ2) = ০.৩২৮৭। Qc = ১২০ × (১.১৬৯ - ০.৩২৮৭)। C_delta সূত্র প্রয়োগ করুন।'
      },
      answerKey: {
        en: '(a) I1 = 120,000 / (√3 × 415 × 0.65) = 256.8 A. (b) Qc = 120 × [1.1691 - 0.3287] = 120 × 0.8404 = 100.85 kVAR. (c) I2 = 120,000 / (√3 × 415 × 0.95) = 175.7 A (a 31.6% reduction in line current!). (d) C_delta = (100,850) / (3 × 2π × 50 × 415²) = 100,850 / 162,311,944 = 621.3 μF per phase.',
        hi: '(a) I1 = 256.8 A, (b) Qc = 100.85 kVAR, (c) I2 = 175.7 A (करंट 31.6% घट गया), (d) प्रति फेज कैपेसिटेंस = 621.3 μF।',
        bn: '(a) I1 = ২৫৬.৮ A, (b) Qc = ১০০.৮৫ kVAR, (c) I2 = ১৭৫.৭ A (কারেন্ট ৩১.৬% কমে গেল!), (d) প্রতি ফেজ ক্যাপাসিট্যান্স = ৬২১.৩ μF।'
      }
    }
  ]
};
