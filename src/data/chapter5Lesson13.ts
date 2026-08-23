import { Lesson } from '../types';

export const LESSON_AC_SERIES_PARALLEL: Lesson = {
  id: 'lsn-ch5-ac-series-parallel',
  topicId: 'ch5-ac-series-parallel',
  chapterId: 'ch-alternating-current',
  order: 13,
  title: {
    en: 'Series-Parallel AC Networks',
    hi: 'सीरीज-पैरेलल एसी नेटवर्क',
    bn: 'সিরিজ-প্যারালাল এসি নেটওয়ার্ক'
  },
  description: {
    en: 'Master the systematic reduction and phasor analysis of complex series-parallel AC networks using rectangular/polar complex impedances, admittance techniques, branch current division, and AC voltage division rules.',
    hi: 'आयताकार/ध्रुवीय सम्मिश्र प्रतिबाधाओं, प्रवेश्यता विधियों, शाखा धारा विभाजन और एसी वोल्टेज विभाजन नियमों का उपयोग करके जटिल सीरीज-पैरेलल एसी नेटवर्कों के व्यवस्थित न्यूनीकरण एवं फेजर विश्लेषण में महारत हासिल करें।',
    bn: 'আয়তাকার/পোলার জটিল ইম্পিড্যান্স, অ্যাডমিট্যান্স পদ্ধতি, ব্রাঞ্চ কারেন্ট বিভাজন এবং এসি ভোল্টেজ বিভাজন সূত্র ব্যবহার করে জটিল সিরিজ-প্যারালাল এসি নেটওয়ার্কের ধাপে ধাপে সরলীকরণ ও ফেজর বিশ্লেষণে দক্ষতা অর্জন করুন।'
  },
  easyExplanation: {
    en: 'A series-parallel AC circuit combines series elements (which share the exact same current phasor) with parallel branches (which share the exact same voltage phasor). To solve them, we simplify the parallel branches first using either equivalent impedance Z_p = (Z1 · Z2)/(Z1 + Z2) or admittance addition (Y_p = Y1 + Y2), and then add any series impedance (Z_total = Z_series + Z_p) using complex numbers.',
    hi: 'सीरीज-पैरेलल एसी परिपथ में कुछ घटक श्रेणी (सीरीज) में जुड़े होते हैं (जिनमें समान धारा फेजर बहती है) और कुछ समानांतर (पैरेलल) शाखाओं में (जिनके सिरों पर समान वोल्टेज फेजर होता है)। इसे हल करने के लिए, हम पहले समानांतर शाखाओं को तुल्य प्रतिबाधा Z_p = (Z1 · Z2)/(Z1 + Z2) या प्रवेश्यता जोड़ (Y_p = Y1 + Y2) से सरल करते हैं, फिर कुल प्रतिबाधा Z_total = Z_series + Z_p निकालने के लिए सीरीज प्रतिबाधा जोड़ते हैं।',
    bn: 'একটি সিরিজ-প্যারালাল এসি সার্কিটে কিছু উপাদান সিরিজে (যেখানে একই কারেন্ট ফেজর প্রবাহিত হয়) এবং কিছু উপাদান সমান্তরাল শাখায় (যেখানে একই ভোল্টেজ ফেজর থাকে) যুক্ত থাকে। সমাধানের জন্য প্রথমে সমান্তরাল শাখাগুলোকে Z_p = (Z1 · Z2)/(Z1 + Z2) বা অ্যাডমিট্যান্স যোগের (Y_p = Y1 + Y2) মাধ্যমে সমতুল্য করে নেওয়া হয়, এরপর সিরিজ ইম্পিড্যান্সের সাথে যোগ করে মোট ইম্পিড্যান্স Z_total নির্ণয় করা হয়।'
  },
  detailedExplanation: {
    en: '1. Series-Parallel AC Network Architecture:\nIn real-world power systems and signal processing, circuits rarely consist of pure single loops. A series-parallel AC network contains combinations of series elements and parallel branches driven by a common sinusoidal source:\n- Series Section: Components connected end-to-end carrying the identical total current phasor I_total.\n- Parallel Section: Two or more branches connected between the same pair of nodes, experiencing the exact same branch voltage phasor V_p.\n\n2. Complex Impedance in Series:\nWhen impedances Z1, Z2, ... Zn are in series, the total equivalent impedance is the direct algebraic sum in rectangular form:\nZ_eq(series) = Z1 + Z2 + ... + Zn = (R1 + R2 + ...) + j(X1 + X2 + ...)\n- Resistance terms add directly: R_eq = Σ Rk\n- Reactance terms add algebraically: X_eq = Σ Xk (where XL > 0 and XC < 0).\n\n3. Complex Impedance in Parallel:\nFor parallel branches connected across node pair (A, B):\n1 / Z_eq(parallel) = 1 / Z1 + 1 / Z2 + ... + 1 / Zn\nFor two complex branches Z1 and Z2:\nZ_eq(parallel) = (Z1 · Z2) / (Z1 + Z2)\n*Note: Multiply complex numbers in Polar Form and add complex numbers in Rectangular Form.*\n\n4. The Admittance Method for Parallel Branches:\nWhen analyzing multiple parallel branches, converting to Admittance (Y = 1/Z = G + jB) provides the cleanest calculation workflow:\nY_eq(parallel) = Y1 + Y2 + ... + Yn = (G1 + G2 + ...) + j(B1 + B2 + ...)\nOnce Y_eq is found:\nZ_p = 1 / Y_eq = (G_eq / |Y_eq|²) - j(B_eq / |Y_eq|²)\n\n5. AC Voltage Division Rule:\nIn a series combination of impedances Z1, Z2, ... driven by total voltage V_total:\nV_k = V_total · [ Z_k / Z_total ]\nWhere V_total, V_k, Z_k, and Z_total are all phasor and complex quantities.\n\n6. AC Current Division Rule:\nWhen total supply current I_total enters a two-branch parallel network of impedances Z1 and Z2:\n- Current through Branch 1: I1 = I_total · [ Z2 / (Z1 + Z2) ] = I_total · [ Y1 / (Y1 + Y2) ]\n- Current through Branch 2: I2 = I_total · [ Z1 / (Z1 + Z2) ] = I_total · [ Y2 / (Y1 + Y2) ]\n*Critical Note: Because Z1 and Z2 are complex numbers, branch currents I1 and I2 generally differ in both magnitude and phase angle. Their phasor sum equals total current: I_total = I1 + I2 (KCL).*\n\n7. Step-by-Step Systematic Reduction Workflow:\n- Step 1: Identify all independent branches and classify series and parallel groupings.\n- Step 2: Express each component in complex impedance form: ZR = R, ZL = +jωL, ZC = -j/(ωC).\n- Step 3: Compute the equivalent impedance of the deepest parallel sub-networks: Z_p = (Z1 · Z2)/(Z1 + Z2).\n- Step 4: Combine Z_p with remaining series impedances to find overall input impedance: Z_in = Z_series + Z_p.\n- Step 5: Calculate total source current: I_total = V_source / Z_in.\n- Step 6: Determine parallel node voltage: V_p = I_total · Z_p = V_source - (I_total · Z_series).\n- Step 7: Calculate individual branch currents: I_k = V_p / Z_k = V_p · Y_k.\n- Step 8: Calculate branch powers: P_k = |I_k|² · R_k, Q_k = |I_k|² · X_k, S_k = V_p · I_k*.\n\n8. Common Mistakes to Avoid:\n- Adding magnitudes directly instead of complex phasors: |Z_total| ≠ |Z1| + |Z2| and |I_total| ≠ |I1| + |I2|.\n- Inverting individual terms before adding: 1/(R + jX) ≠ 1/R + 1/(jX).\n- Forgetting that current division puts the OPPOSITE branch impedance in the numerator: I1 = I_total · [ Z2 / (Z1 + Z2) ].',
    hi: '1. सीरीज-पैरेलल एसी नेटवर्क की संरचना:\nव्यावहारिक विद्युत इंजीनियरिंग में, परिपथों में सीरीज और पैरेलल दोनों का संयोजन होता है:\n- सीरीज भाग: वे घटक जिनमें से समान कुल धारा I_total प्रवाहित होती है।\n- पैरेलल भाग: दो या अधिक शाखाएं जो समान नोड वोल्टेज V_p से जुड़ी होती हैं।\n\n2. सीरीज में सम्मिश्र प्रतिबाधा:\nZ_series = Z1 + Z2 + ... = (R1 + R2 + ...) + j(X1 + X2 + ...)\n\n3. पैरेलल में सम्मिश्र प्रतिबाधा:\nदो शाखाओं के लिए: Z_p = (Z1 · Z2) / (Z1 + Z2)\n(ध्रुवीय रूप में गुणा करें और आयताकार रूप में जोड़ें)।\n\n4. प्रवेश्यता विधि (Admittance Method):\nY_p = Y1 + Y2 + ... = (G1 + G2) + j(B1 + B2)\nZ_p = 1 / Y_p\n\n5. एसी वोल्टेज विभाजन नियम:\nVk = V_total · [ Zk / Z_total ]\n\n6. एसी धारा विभाजन नियम:\nI1 = I_total · [ Z2 / (Z1 + Z2) ] = I_total · [ Y1 / (Y1 + Y2) ]\nI2 = I_total · [ Z1 / (Z1 + Z2) ] = I_total · [ Y2 / (Y1 + Y2) ]\nकिरचॉफ के धारा नियम के अनुसार: I_total = I1 + I2 (फेजर योग)।\n\n7. चरणबद्ध हल प्रक्रिया:\n- चरण 1: सभी शाखाओं की पहचान करें।\n- चरण 2: प्रत्येक शाखा की प्रतिबाधा Z = R + jX ज्ञात करें।\n- चरण 3: पैरेलल भाग का Z_p निकालें।\n- चरण 4: कुल प्रतिबाधा Z_total = Z_series + Z_p ज्ञात करें।\n- चरण 5: कुल धारा I_total = V / Z_total निकालें।\n- चरण 6: पैरेलल नोड वोल्टेज V_p = I_total · Z_p निकालें।\n- चरण 7: शाखा धाराएं I1 = V_p / Z1 और I2 = V_p / Z2 निकालें।\n- चरण 8: सक्रिय शक्ति P = |I|²R और रिएक्टिव शक्ति Q = |I|²X की गणना करें।',
    bn: '১. সিরিজ-প্যারালাল এসি নেটওয়ার্কের গঠন:\nবাস্তব বিদ্যুৎ ব্যবস্থায় সিরিজ ও সমান্তরাল শাখার যৌথ সন্নিবেশ থাকে:\n- সিরিজ অংশ: যে উপাদানগুলোর মধ্য দিয়ে একই মোট কারেন্ট I_total প্রবাহিত হয়।\n- প্যারালাল অংশ: যে শাখাগুলোর দুই প্রান্তে একই নোড ভোল্টেজ V_p থাকে।\n\n২. সিরিজে জটিল ইম্পিড্যান্স:\nZ_series = Z1 + Z2 + ... = (R1 + R2) + j(X1 + X2)\n\n৩. প্যারালালে জটিল ইম্পিড্যান্স:\nদুটি শাখার জন্য: Z_p = (Z1 · Z2) / (Z1 + Z2)\n\n৪. অ্যাডমিট্যান্স পদ্ধতি:\nY_p = Y1 + Y2 + ... = (G1 + G2) + j(B1 + B2)\nZ_p = 1 / Y_p\n\n৫. এসি ভোল্টেজ বিভাজন সূত্র:\nVk = V_total · [ Zk / Z_total ]\n\n৬. এসি কারেন্ট বিভাজন সূত্র:\nI1 = I_total · [ Z2 / (Z1 + Z2) ] = I_total · [ Y1 / (Y1 + Y2) ]\nI2 = I_total · [ Z1 / (Z1 + Z2) ] = I_total · [ Y2 / (Y1 + Y2) ]\nKCL অনুযায়ী মোট কারেন্ট হলো ফেজর যোগফল: I_total = I1 + I2।\n\n৭. ধাপে ধাপে সমাধান পদ্ধতি:\n- ধাপ ১: সিরিজ ও প্যারালাল শাখাগুলো চিহ্নিত করুন।\n- ধাপ ২: প্রতিটি উপাদানের জটিল ইম্পিড্যান্স লিখুন (Z = R + jX)।\n- ধাপ ৩: প্যারালাল অংশের সমতুল্য ইম্পিড্যান্স Z_p হিসাব করুন।\n- ধাপ ৪: মোট ইম্পিড্যান্স Z_total = Z_series + Z_p বের করুন।\n- ধাপ ৫: মোট সাপ্লাই কারেন্ট I_total = V / Z_total নির্ণয় করুন।\n- ধাপ ৬: প্যারালাল নোড ভোল্টেজ V_p = I_total · Z_p নির্ণয় করুন।\n- ধাপ ৭: প্রতিটি শাখার কারেন্ট I1 = V_p / Z1 এবং I2 = V_p / Z2 নির্ণয় করুন।\n- ধাপ ৮: প্রতিটি শাখার পাওয়ার P = |I|²R হিসাব করুন।'
  },
  formulas: [
    {
      symbol: 'Z_eq(ser)',
      expression: 'Z_{eq} = Z_1 + Z_2 + \\dots + Z_n',
      description: {
        en: 'Series Impedance Addition (Rectangular complex sum)',
        hi: 'सीरीज प्रतिबाधा योग (आयताकार सम्मिश्र योग)',
        bn: 'সিরিজ ইম্পিড্যান্স যোগ (আয়তাকার জটিল যোগফল)'
      }
    },
    {
      symbol: 'Z_eq(par)',
      expression: 'Z_{p} = \\frac{Z_1 \\cdot Z_2}{Z_1 + Z_2}',
      description: {
        en: 'Parallel Equivalent Impedance of Two Branches',
        hi: 'दो शाखाओं की समानांतर तुल्य प्रतिबाधा',
        bn: 'দুটি শাখার সমান্তরাল সমতুল্য ইম্পিড্যান্স'
      }
    },
    {
      symbol: 'Y_eq',
      expression: 'Y_{total} = Y_1 + Y_2 + \\dots + Y_n',
      description: {
        en: 'Parallel Admittance Addition (Siemens)',
        hi: 'समानांतर प्रवेश्यता योग (Siemens)',
        bn: 'সমান্তরাল অ্যাডমিট্যান্স যোগ (Siemens)'
      }
    },
    {
      symbol: 'I_{total}',
      expression: 'I_{total} = \\frac{V_{source}}{Z_{total}} = V_{source} \\cdot Y_{total}',
      description: {
        en: 'Total AC Source Current Phasor',
        hi: 'कुल एसी स्रोत धारा फेजर',
        bn: 'মোট এসি সোর্স কারেন্ট ফেজর'
      }
    },
    {
      symbol: 'V_k',
      expression: 'V_k = V_{total} \\cdot \\frac{Z_k}{Z_{total}}',
      description: {
        en: 'AC Voltage Divider Rule across Series Element k',
        hi: 'सीरीज घटक k के सिरों पर एसी वोल्टेज विभाजन नियम',
        bn: 'সিরিজ উপাদান k এর দুই প্রান্তে এসি ভোল্টেজ বিভাজন সূত্র'
      }
    },
    {
      symbol: 'I_1',
      expression: 'I_1 = I_{total} \\cdot \\frac{Z_2}{Z_1 + Z_2} = I_{total} \\cdot \\frac{Y_1}{Y_1 + Y_2}',
      description: {
        en: 'AC Current Divider Rule for Parallel Branch 1',
        hi: 'समानांतर शाखा 1 के लिए एसी धारा विभाजन नियम',
        bn: 'সমান্তরাল শাখা ১ এর জন্য এসি কারেন্ট বিভাজন সূত্র'
      }
    },
    {
      symbol: 'P_branch',
      expression: 'P_k = |I_k|^2 \\cdot R_k = V_p \\cdot |I_k| \\cdot \\cos \\theta_k',
      description: {
        en: 'Active Real Power Dissipated in Branch k (Watts)',
        hi: 'शाखा k में व्यय वास्तविक सक्रिय शक्ति (Watts)',
        bn: 'শাখা k তে অপচয়কৃত প্রকৃত সক্রিয় ক্ষমতা (Watts)'
      }
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch5-l13-1',
      problem: {
        en: 'Two impedances Z1 = (6 + j8) Ω and Z2 = (4 - j3) Ω are connected in series across an AC voltage source of V = 100 ∠ 0° V (50 Hz). Calculate: (a) Total equivalent impedance Z_total, (b) Total circuit current phasor I, (c) Circuit power factor, (d) Voltage drops V1 and V2 across each impedance.',
        hi: 'दो प्रतिबाधाएं Z1 = (6 + j8) Ω और Z2 = (4 - j3) Ω एक 100 ∠ 0° V (50 Hz) एसी वोल्टेज स्रोत के साथ श्रेणी में जुड़ी हैं। गणना करें: (a) कुल तुल्य प्रतिबाधा Z_total, (b) कुल परिपथ धारा फेजर I, (c) परिपथ पावर फैक्टर, (d) प्रत्येक प्रतिबाधा पर वोल्टेज ड्रॉप V1 और V2।',
        bn: 'দুটি ইম্পিড্যান্স Z1 = (6 + j8) Ω এবং Z2 = (4 - j3) Ω একটি 100 ∠ 0° V (50 Hz) এসি ভোল্টেজ উৎসের সাথে সিরিজে যুক্ত। নির্ণয় করুন: (a) মোট সমতুল্য ইম্পিড্যান্স Z_total, (b) মোট সার্কিট কারেন্ট ফেজর I, (c) সার্কিট পাওয়ার ফ্যাক্টর, (d) প্রতিটি ইম্পিড্যান্সে ভোল্টেজ ড্রপ V1 এবং V2।'
      },
      givenValues: {
        'Z1': '(6 + j8) Ω = 10 ∠ 53.13° Ω',
        'Z2': '(4 - j3) Ω = 5 ∠ -36.87° Ω',
        'Voltage (V)': '100 ∠ 0° V',
        'Frequency (f)': '50 Hz'
      },
      solution: {
        en: 'Step 1: Calculate Total Series Impedance\nZ_total = (6 + j8) + (4 - j3) = (6 + 4) + j(8 - 3) = (10 + j5) Ω\nIn Polar Form:\n|Z_total| = √(10² + 5²) = √(100 + 25) = √125 = 11.180 Ω\nθ_z = tan⁻¹(5 / 10) = tan⁻¹(0.5) = 26.565°\nZ_total = 11.180 ∠ 26.57° Ω (Inductive)\n\nStep 2: Calculate Circuit Current\nI = V / Z_total = (100 ∠ 0°) / (11.180 ∠ 26.57°) = 8.944 ∠ -26.57° A (Lagging)\n\nStep 3: Calculate Power Factor\nPF = cos(26.57°) = 10 / 11.180 = 0.8944 (Lagging)\n\nStep 4: Calculate Voltage Drops\nV1 = I · Z1 = (8.944 ∠ -26.57°) · (10 ∠ 53.13°) = 89.44 ∠ ( -26.57° + 53.13° ) = 89.44 ∠ 26.56° V\nV2 = I · Z2 = (8.944 ∠ -26.57°) · (5 ∠ -36.87°) = 44.72 ∠ ( -26.57° - 36.87° ) = 44.72 ∠ -63.44° V\nCheck: V1 + V2 = (80 + j40) + (20 - j40) = 100 + j0 V = 100 ∠ 0° V (KVL verified).',
        hi: 'चरण 1: कुल सीरीज प्रतिबाधा की गणना\nZ_total = (6 + j8) + (4 - j3) = 10 + j5 Ω = 11.180 ∠ 26.57° Ω\n\nचरण 2: परिपथ धारा की गणना\nI = (100 ∠ 0°) / (11.180 ∠ 26.57°) = 8.944 ∠ -26.57° A (लैगिंग)\n\nचरण 3: पावर फैक्टर\nPF = cos(26.57°) = 0.8944 (लैगिंग)\n\nचरण 4: वोल्टेज ड्रॉप\nV1 = 8.944 ∠ -26.57° × 10 ∠ 53.13° = 89.44 ∠ 26.56° V\nV2 = 8.944 ∠ -26.57° × 5 ∠ -36.87° = 44.72 ∠ -63.44° V\nजाँच: V1 + V2 = 100 ∠ 0° V (KVL सत्यापित)।',
        bn: 'ধাপ ১: মোট সিরিজ ইম্পিড্যান্স নির্ণয়\nZ_total = (6 + j8) + (4 - j3) = 10 + j5 Ω = 11.180 ∠ 26.57° Ω\n\nধাপ ২: সার্কিট কারেন্ট নির্ণয়\nI = (100 ∠ 0°) / (11.180 ∠ 26.57°) = 8.944 ∠ -26.57° A (ল্যাগিং)\n\nধাপ ৩: পাওয়ার ফ্যাক্টর\nPF = cos(26.57°) = 0.8944 (ল্যাগিং)\n\nধাপ ৪: ভোল্টেজ ড্রপ\nV1 = 89.44 ∠ 26.56° V\nV2 = 44.72 ∠ -63.44° V\nযাচাই: V1 + V2 = 100 ∠ 0° V (KVL প্রমাণিত)।'
      },
      finalAnswer: {
        en: 'Z_total = 11.18 ∠ 26.57° Ω, I = 8.944 ∠ -26.57° A, PF = 0.8944 lagging, V1 = 89.44 ∠ 26.56° V, V2 = 44.72 ∠ -63.44° V',
        hi: 'Z_total = 11.18 ∠ 26.57° Ω, I = 8.944 ∠ -26.57° A, PF = 0.8944 लैगिंग, V1 = 89.44 ∠ 26.56° V, V2 = 44.72 ∠ -63.44° V',
        bn: 'Z_total = 11.18 ∠ 26.57° Ω, I = 8.944 ∠ -26.57° A, PF = 0.8944 ল্যাগিং, V1 = 89.44 ∠ 26.56° V, V2 = 44.72 ∠ -63.44° V'
      }
    },
    {
      id: 'ex-ch5-l13-2',
      problem: {
        en: 'Two branches are connected in parallel across a 230 V, 50 Hz AC mains: Branch 1 has Z1 = (8 + j6) Ω (inductive load) and Branch 2 has Z2 = (6 - j8) Ω (capacitive load). Determine: (a) Branch admittances Y1 and Y2, (b) Total equivalent admittance Y_total, (c) Total equivalent impedance Z_eq, (d) Total supply current I_total and power factor.',
        hi: 'दो शाखाएं 230 V, 50 Hz एसी मेन्स के समानांतर जुड़ी हैं: शाखा 1 में Z1 = (8 + j6) Ω और शाखा 2 में Z2 = (6 - j8) Ω है। ज्ञात करें: (a) शाखा प्रवेश्यताएं Y1 और Y2, (b) कुल तुल्य प्रवेश्यता Y_total, (c) कुल तुल्य प्रतिबाधा Z_eq, (d) कुल सप्लाई धारा I_total और पावर फैक्टर।',
        bn: 'একটি 230 V, 50 Hz এসি উৎসের সমান্তরালে দুটি শাখা যুক্ত: শাখা ১ এ Z1 = (8 + j6) Ω এবং শাখা ২ এ Z2 = (6 - j8) Ω। নির্ণয় করুন: (a) শাখা অ্যাডমিট্যান্স Y1 ও Y2, (b) মোট তুল্য অ্যাডমিট্যান্স Y_total, (c) মোট তুল্য ইম্পিড্যান্স Z_eq, (d) মোট সাপ্লাই কারেন্ট I_total ও পাওয়ার ফ্যাক্টর।'
      },
      givenValues: {
        'V': '230 ∠ 0° V',
        'Z1': '(8 + j6) Ω',
        'Z2': '(6 - j8) Ω'
      },
      solution: {
        en: 'Step 1: Calculate Branch Admittances\nY1 = (8 - j6) / 100 = (0.08 - j0.06) S\nY2 = (6 + j8) / 100 = (0.06 + j0.08) S\n\nStep 2: Total Admittance\nY_total = Y1 + Y2 = (0.08 + 0.06) + j(-0.06 + 0.08) = (0.14 + j0.02) S\nIn Polar Form:\n|Y_total| = √(0.14² + 0.02²) = √(0.0196 + 0.0004) = √0.0200 = 0.14142 S\nθ_y = tan⁻¹(0.02 / 0.14) = tan⁻¹(0.14286) = 8.13°\nY_total = 0.14142 ∠ 8.13° S\n\nStep 3: Total Equivalent Impedance\nZ_eq = 1 / Y_total = 1 / (0.14142 ∠ 8.13°) = 7.071 ∠ -8.13° Ω = (7.00 - j1.00) Ω (Slightly Capacitive)\n\nStep 4: Total Supply Current and Power Factor\nI_total = V · Y_total = (230 ∠ 0°) · (0.14142 ∠ 8.13°) = 32.53 ∠ 8.13° A (Leading)\nPower Factor PF = cos(8.13°) = 0.990 (Leading).',
        hi: 'चरण 1: शाखा प्रवेश्यताओं की गणना\nY1 = (8 - j6) / 100 = 0.08 - j0.06 S\nY2 = (6 + j8) / 100 = 0.06 + j0.08 S\n\nचरण 2: कुल प्रवेश्यता\nY_total = (0.08 + 0.06) + j(-0.06 + 0.08) = 0.14 + j0.02 S = 0.1414 ∠ 8.13° S\n\nचरण 3: कुल तुल्य प्रतिबाधा\nZ_eq = 1 / Y_total = 7.071 ∠ -8.13° Ω = (7.0 - j1.0) Ω\n\nचरण 4: कुल धारा और पावर फैक्टर\nI_total = 230 × 0.14142 ∠ 8.13° = 32.53 ∠ 8.13° A (लीडिंग)\nPF = cos(8.13°) = 0.990 (लीडिंग)।',
        bn: 'ধাপ ১: শাখা অ্যাডমিট্যান্স নির্ণয়\nY1 = 0.08 - j0.06 S\nY2 = 0.06 + j0.08 S\n\nধাপ ২: মোট অ্যাডমিট্যান্স\nY_total = 0.14 + j0.02 S = 0.1414 ∠ 8.13° S\n\nধাপ ৩: মোট সমতুল্য ইম্পিড্যান্স\nZ_eq = 1 / Y_total = 7.071 ∠ -8.13° Ω\n\nধাপ ৪: মোট কারেন্ট ও পাওয়ার ফ্যাক্টর\nI_total = 32.53 ∠ 8.13° A (লিডিং)\nPF = cos(8.13°) = 0.990 (লিডিং)।'
      },
      finalAnswer: {
        en: 'Y_total = 0.1414 ∠ 8.13° S, Z_eq = 7.071 ∠ -8.13° Ω, I_total = 32.53 ∠ 8.13° A, PF = 0.990 leading',
        hi: 'Y_total = 0.1414 ∠ 8.13° S, Z_eq = 7.071 ∠ -8.13° Ω, I_total = 32.53 ∠ 8.13° A, PF = 0.990 लीडिंग',
        bn: 'Y_total = 0.1414 ∠ 8.13° S, Z_eq = 7.071 ∠ -8.13° Ω, I_total = 32.53 ∠ 8.13° A, PF = 0.990 লিডিং'
      }
    },
    {
      id: 'ex-ch5-l13-3',
      problem: {
        en: 'A series element Z_s = (2 + j3) Ω is connected in series with a parallel combination of two branches: Branch A has ZA = (10 + j0) Ω (pure resistor) and Branch B has ZB = (0 + j10) Ω (pure inductor). The network is supplied by V = 120 ∠ 0° V (60 Hz). Calculate: (a) Equivalent parallel impedance Z_p, (b) Total network impedance Z_total, (c) Total input current I_total, (d) Parallel node voltage V_p.',
        hi: 'एक सीरीज घटक Z_s = (2 + j3) Ω दो समानांतर शाखाओं के संयोजन के साथ श्रेणी में जुड़ा है: शाखा A में ZA = (10 + j0) Ω (शुद्ध प्रतिरोधक) और शाखा B में ZB = (0 + j10) Ω (शुद्ध प्रेरक) है। परिपथ 120 ∠ 0° V (60 Hz) से संचालित है। गणना करें: (a) तुल्य समानांतर प्रतिबाधा Z_p, (b) कुल परिपथ प्रतिबाधा Z_total, (c) कुल इनपुट धारा I_total, (d) समानांतर नोड वोल्टेज V_p।',
        bn: 'একটি সিরিজ উপাদান Z_s = (2 + j3) Ω দুটি সমান্তরাল শাখার সংযোগের সাথে সিরিজে যুক্ত: শাখা A-তে ZA = (10 + j0) Ω এবং শাখা B-তে ZB = (0 + j10) Ω। সরবরাহ ভোল্টেজ V = 120 ∠ 0° V (60 Hz)। নির্ণয় করুন: (a) সমতুল্য প্যারালাল ইম্পিড্যান্স Z_p, (b) মোট সার্কিট ইম্পিড্যান্স Z_total, (c) মোট ইনপুট কারেন্ট I_total, (d) প্যারালাল নোড ভোল্টেজ V_p।'
      },
      givenValues: {
        'Z_s': '(2 + j3) Ω',
        'ZA': '10 ∠ 0° Ω',
        'ZB': '10 ∠ 90° Ω',
        'V_source': '120 ∠ 0° V'
      },
      solution: {
        en: 'Step 1: Calculate Equivalent Parallel Impedance Z_p\nNumerator: ZA · ZB = (10 ∠ 0°) · (10 ∠ 90°) = 100 ∠ 90° = 0 + j100\nDenominator: ZA + ZB = 10 + j10 = 14.142 ∠ 45°\nZ_p = (100 ∠ 90°) / (14.142 ∠ 45°) = 7.071 ∠ 45° Ω\nConvert Z_p to Rectangular Form:\nZ_p = 7.071 · cos(45°) + j 7.071 · sin(45°) = (5.00 + j5.00) Ω\n\nStep 2: Calculate Total Network Impedance Z_total\nZ_total = Z_s + Z_p = (2 + j3) + (5 + j5) = (7.00 + j8.00) Ω\nIn Polar Form:\n|Z_total| = √(7² + 8²) = √(49 + 64) = √113 = 10.630 Ω\nθ_z = tan⁻¹(8 / 7) = tan⁻¹(1.1428) = 48.81°\nZ_total = 10.630 ∠ 48.81° Ω\n\nStep 3: Calculate Total Current I_total\nI_total = V / Z_total = (120 ∠ 0°) / (10.630 ∠ 48.81°) = 11.289 ∠ -48.81° A\n\nStep 4: Calculate Parallel Node Voltage V_p\nV_p = I_total · Z_p = (11.289 ∠ -48.81°) · (7.071 ∠ 45.00°) = 79.825 ∠ -3.81° V\nCheck Series Voltage Drop: V_s = I_total · Z_s = (11.289 ∠ -48.81°) · (3.6056 ∠ 56.31°) = 40.70 ∠ 7.50° V\nV_s + V_p = (40.35 + j5.31) + (79.65 - j5.31) = 120.00 + j0.00 V (KVL holds exact!).',
        hi: 'चरण 1: समानांतर प्रतिबाधा Z_p की गणना\nZ_p = (10 ∠ 0° × 10 ∠ 90°) / (10 + j10) = 100 ∠ 90° / 14.142 ∠ 45° = 7.071 ∠ 45° Ω = (5 + j5) Ω\n\nचरण 2: कुल प्रतिबाधा Z_total\nZ_total = (2 + j3) + (5 + j5) = (7 + j8) Ω = 10.630 ∠ 48.81° Ω\n\nचरण 3: कुल धारा I_total\nI_total = 120 ∠ 0° / 10.630 ∠ 48.81° = 11.289 ∠ -48.81° A\n\nचरण 4: नोड वोल्टेज V_p\nV_p = 11.289 ∠ -48.81° × 7.071 ∠ 45° = 79.83 ∠ -3.81° V।',
        bn: 'ধাপ ১: সমান্তরাল ইম্পিড্যান্স Z_p নির্ণয়\nZ_p = (10 ∠ 0° × 10 ∠ 90°) / (10 + j10) = 7.071 ∠ 45° Ω = (5 + j5) Ω\n\nধাপ ২: মোট ইম্পিড্যান্স Z_total\nZ_total = (2 + j3) + (5 + j5) = (7 + j8) Ω = 10.630 ∠ 48.81° Ω\n\nধাপ ৩: মোট কারেন্ট I_total\nI_total = 120 ∠ 0° / 10.630 ∠ 48.81° = 11.289 ∠ -48.81° A\n\nধাপ ৪: নোড ভোল্টেজ V_p\nV_p = 11.289 ∠ -48.81° × 7.071 ∠ 45° = 79.83 ∠ -3.81° V।'
      },
      finalAnswer: {
        en: 'Z_p = (5 + j5) Ω = 7.071 ∠ 45° Ω, Z_total = (7 + j8) Ω = 10.63 ∠ 48.81° Ω, I_total = 11.29 ∠ -48.81° A, V_p = 79.83 ∠ -3.81° V',
        hi: 'Z_p = (5 + j5) Ω = 7.071 ∠ 45° Ω, Z_total = (7 + j8) Ω = 10.63 ∠ 48.81° Ω, I_total = 11.29 ∠ -48.81° A, V_p = 79.83 ∠ -3.81° V',
        bn: 'Z_p = (5 + j5) Ω = 7.071 ∠ 45° Ω, Z_total = (7 + j8) Ω = 10.63 ∠ 48.81° Ω, I_total = 11.29 ∠ -48.81° A, V_p = 79.83 ∠ -3.81° V'
      }
    },
    {
      id: 'ex-ch5-l13-4',
      problem: {
        en: 'Continuing from Example 3 (where V_p = 79.825 ∠ -3.81° V, ZA = 10 ∠ 0° Ω, ZB = 10 ∠ 90° Ω, I_total = 11.289 ∠ -48.81° A, and Z_s = (2 + j3) Ω): Calculate: (a) Branch current IA using Ohm\'s law, (b) Branch current IB using Current Division rule, (c) Active power dissipated in series resistor Rs and branch resistor RA, (d) Total active power supplied by the source.',
        hi: 'उदाहरण 3 के आधार पर (जहाँ V_p = 79.825 ∠ -3.81° V, ZA = 10 ∠ 0° Ω, ZB = 10 ∠ 90° Ω, I_total = 11.289 ∠ -48.81° A, तथा Z_s = (2 + j3) Ω है): गणना करें: (a) शाखा धारा IA, (b) शाखा धारा IB (करंट डिवीजन नियम से), (c) सीरीज प्रतिरोधक Rs और शाखा प्रतिरोधक RA में व्यय सक्रिय शक्ति, (d) स्रोत द्वारा आपूर्ति की गई कुल सक्रिय शक्ति।',
        bn: 'উদাহরণ ৩ এর ধারাবাহিকতায় (যেখানে V_p = 79.825 ∠ -3.81° V, ZA = 10 ∠ 0° Ω, ZB = 10 ∠ 90° Ω, I_total = 11.289 ∠ -48.81° A, এবং Z_s = (2 + j3) Ω): নির্ণয় করুন: (a) শাখা কারেন্ট IA, (b) কারেন্ট ডিভিশন সূত্রে শাখা কারেন্ট IB, (c) Rs এবং RA রোধে অপচয়কৃত সক্রিয় ক্ষমতা, (d) সোর্স কর্তৃক সরবরাহিত মোট সক্রিয় ক্ষমতা।'
      },
      givenValues: {
        'V_p': '79.825 ∠ -3.81° V',
        'ZA': '10 ∠ 0° Ω (RA = 10 Ω)',
        'ZB': '10 ∠ 90° Ω (XB = 10 Ω)',
        'I_total': '11.289 ∠ -48.81° A',
        'Z_s': '(2 + j3) Ω (Rs = 2 Ω)'
      },
      solution: {
        en: 'Step 1: Calculate Branch Current IA\nIA = V_p / ZA = (79.825 ∠ -3.81°) / (10 ∠ 0°) = 7.983 ∠ -3.81° A\nIn Rectangular Form: IA = 7.983 · cos(-3.81°) + j 7.983 · sin(-3.81°) = (7.965 - j0.530) A\n\nStep 2: Calculate Branch Current IB (via Current Division Rule)\nIB = I_total · [ ZA / (ZA + ZB) ] = (11.289 ∠ -48.81°) · [ (10 ∠ 0°) / (14.142 ∠ 45°) ]\nIB = (11.289 ∠ -48.81°) · (0.7071 ∠ -45°) = 7.983 ∠ -93.81° A\nIn Rectangular Form: IB = 7.983 · cos(-93.81°) + j 7.983 · sin(-93.81°) = (-0.530 - j7.965) A\nKCL Check: IA + IB = (7.965 - 0.530) + j(-0.530 - 7.965) = 7.435 - j8.495 = 11.289 ∠ -48.81° A = I_total (Exact match!).\n\nStep 3: Calculate Power Dissipations\nPower in Series Resistor Rs (2 Ω):\nP_Rs = |I_total|² · Rs = (11.289)² · 2 = 127.44 · 2 = 254.88 W\nPower in Branch Resistor RA (10 Ω):\nP_RA = |IA|² · RA = (7.9825)² · 10 = 63.72 · 10 = 637.20 W\nNote: Inductor ZB dissipates zero real power (P_ind = 0 W).\n\nStep 4: Total Active Power\nP_total = P_Rs + P_RA = 254.88 + 637.20 = 892.08 W\nSource Total Power Check: P_source = V_source · |I_total| · cos(48.81°) = 120 · 11.289 · 0.6585 = 892.08 W (Exact power balance verified!).',
        hi: 'चरण 1: शाखा धारा IA की गणना\nIA = 79.825 ∠ -3.81° / 10 ∠ 0° = 7.983 ∠ -3.81° A\n\nचरण 2: शाखा धारा IB (करंट डिवीजन से)\nIB = 11.289 ∠ -48.81° × [ 10 ∠ 0° / 14.142 ∠ 45° ] = 7.983 ∠ -93.81° A\nKCL सत्यापन: IA + IB = 11.289 ∠ -48.81° A = I_total।\n\nचरण 3: सक्रिय शक्ति की गणना\nRs में शक्ति: P_Rs = (11.289)² × 2 = 254.88 W\nRA में शक्ति: P_RA = (7.983)² × 10 = 637.20 W\n\nचरण 4: कुल शक्ति\nP_total = 254.88 + 637.20 = 892.08 W (स्रोत शक्ति के बिल्कुल बराबर)।',
        bn: 'ধাপ ১: শাখা কারেন্ট IA নির্ণয়\nIA = 79.825 ∠ -3.81° / 10 ∠ 0° = 7.983 ∠ -3.81° A\n\nধাপ ২: কারেন্ট ডিভিশন সূত্রে শাখা কারেন্ট IB\nIB = 7.983 ∠ -93.81° A\nKCL যাচাই: IA + IB = 11.289 ∠ -48.81° A = I_total।\n\nধাপ ৩: সক্রিয় ক্ষমতা নির্ণয়\nRs এ অপচয়: P_Rs = (11.289)² × 2 = 254.88 W\nRA এ অপচয়: P_RA = (7.983)² × 10 = 637.20 W\n\nধাপ ৪: মোট সক্রিয় ক্ষমতা\nP_total = 254.88 + 637.20 = 892.08 W।'
      },
      finalAnswer: {
        en: 'IA = 7.983 ∠ -3.81° A, IB = 7.983 ∠ -93.81° A, P_Rs = 254.88 W, P_RA = 637.20 W, P_total = 892.08 W',
        hi: 'IA = 7.983 ∠ -3.81° A, IB = 7.983 ∠ -93.81° A, P_Rs = 254.88 W, P_RA = 637.20 W, P_total = 892.08 W',
        bn: 'IA = 7.983 ∠ -3.81° A, IB = 7.983 ∠ -93.81° A, P_Rs = 254.88 W, P_RA = 637.20 W, P_total = 892.08 W'
      }
    }
  ],
  importantPoints: {
    en: [
      'Series elements in AC circuits always share the identical current phasor; parallel branches always share the identical voltage phasor across their connecting nodes.',
      'Impedances add directly in series: Z_series = Z1 + Z2 + ...; Admittances add directly in parallel: Y_parallel = Y1 + Y2 + ...',
      'The AC Current Divider Rule puts the opposite branch impedance in the numerator: I1 = I_total · [ Z2 / (Z1 + Z2) ], evaluated strictly using complex arithmetic.',
      'Phasor summation must be used for Kirchhoff\'s laws in AC networks: Σ V_loop = 0 and Σ I_node = 0.',
      'Active real power P is consumed solely by resistive components (P = Σ |I_k|² · R_k), while reactive power Q oscillates between inductive (+j) and capacitive (-j) reactances.'
    ],
    hi: [
      'एसी परिपथों में सीरीज घटकों में समान धारा फेजर बहता है, जबकि समानांतर शाखाओं के सिरों पर समान वोल्टेज फेजर होता है।',
      'प्रतिबाधाएं सीरीज में सीधे जुड़ती हैं (Z_series = Z1 + Z2), जबकि प्रवेश्यताएं पैरेलल में सीधे जुड़ती हैं (Y_parallel = Y1 + Y2)।',
      'एसी धारा विभाजन नियम में विपरीत शाखा की प्रतिबाधा अंश (numerator) में आती है: I1 = I_total · [ Z2 / (Z1 + Z2) ]।',
      'किरचॉफ के नियमों के लिए हमेशा फेजर योग का उपयोग किया जाना चाहिए (Σ V = 0 एवं Σ I = 0)।',
      'सक्रिय शक्ति (P) केवल प्रतिरोधकों में व्यय होती है (P = |I|²R), जबकि प्रतिक्रियाशील शक्ति (Q) इंडक्टर (+j) और कैपेसिटर (-j) के बीच दोलन करती है।'
    ],
    bn: [
      'এসি সার্কিটে সিরিজ উপাদানগুলোতে একই কারেন্ট ফেজর প্রবাহিত হয় এবং সমান্তরাল শাখাগুলোতে একই নোড ভোল্টেজ ফেজর থাকে।',
      'সিরিজে ইম্পিড্যান্স সরাসরি যোগ হয় (Z_series = Z1 + Z2); প্যারালালে অ্যাডমিট্যান্স সরাসরি যোগ হয় (Y_parallel = Y1 + Y2)।',
      'এসি কারেন্ট ডিভাইডার সূত্রে বিপরীত শাখার ইম্পিড্যান্স লবে থাকে: I1 = I_total · [ Z2 / (Z1 + Z2) ]।',
      'এসি নেটওয়ার্কে কার্শফের সূত্রের প্রয়োগ সর্বদা জটিল ফেজর যোগফলের মাধ্যমে করতে হয়।',
      'সক্রিয় ক্ষমতা (P) শুধুমাত্র রোধীয় উপাদানে ব্যয় হয় (P = |I|²R), আর প্রতিক্রিয়াশীল ক্ষমতা (Q) আবেশক ও ধারকের মাঝে দোলায়িত হয়।'
    ]
  },
  practicalApplications: {
    en: [
      'Mains Power Factor Correction Banks: Connecting parallel capacitor banks across inductive industrial loads to reduce total line current without affecting load voltage.',
      'LC Band-Pass and Notch Filter Networks: Combining series and parallel resonant branches to pass desired communication frequencies while rejecting harmonic interference.',
      'Loudspeaker Crossover Networks: Series-parallel LC filter sections that route high frequencies to tweeters and low frequencies to woofers with minimum phase distortion.',
      'Grid Substation Distribution Feeder Modeling: Analyzing voltage drop and branch loading across series distribution transformers and parallel industrial/residential consumer loads.'
    ],
    hi: [
      'मेन्स पावर फैक्टर सुधार बैंक: लोड वोल्टेज को प्रभावित किए बिना कुल लाइन करंट को कम करने के लिए इंडक्टिव लोड के समानांतर कैपेसिटर बैंक जोड़ना।',
      'एलसी बैंड-पास एवं नॉच फिल्टर नेटवर्क: संचार संकेतों को गुजारने तथा हार्मोनिक विकृति को दबाने के लिए सीरीज-पैरेलल शाखाओं का संयोजन।',
      'लाउडस्पीकर क्रॉसओवर नेटवर्क: हाई और लो ऑडियो आवृत्तियों को सही स्पीकर तक भेजने वाले एलसी फिल्टर नेटवर्क।',
      'पावर ग्रिड सबस्टेशन डिस्ट्रीब्यूशन विश्लेषण: ट्रांसफार्मर प्रतिबाधा और समानांतर उपभोक्ता लोड पर वोल्टेज ड्रॉप और करंट वितरण का अध्ययन।'
    ],
    bn: [
      'মেইনস পাওয়ার ফ্যাক্টর কারেকশন ব্যাংক: লোড ভোল্টেজ অপরিবর্তিত রেখে লাইন কারেন্ট কমাতে সমান্তরাল ক্যাপাসিটর ব্যাংক সংযোগ।',
      'এলসি ফিল্টার নেটওয়ার্ক: যোগাযোগ ব্যবস্থায় কাঙ্ক্ষিত ফ্রিকোয়েন্সি পাস করতে এবং অনাকাঙ্ক্ষিত নয়েজ দূর করতে সিরিজ-প্যারালাল শাখা।',
      'লাউডস্পিকার ক্রসওভার নেটওয়ার্ক: টুইটার ও উফারে সঠিক ফ্রিকোয়েন্সির অডিও সংকেত পৌঁছানোর জন্য এলসি ফিল্টার।',
      'পাওয়ার গ্রিড সাবস্টেশন ডিস্ট্রিবিউশন অ্যানালিসিস: ডিস্ট্রিবিউশন ট্রান্সফরমার ও সমান্তরাল গ্রাহক লোডে ভোল্টেজ ড্রপ এবং কারেন্ট প্রবাহ নিরূপণ।'
    ]
  },
  commonMistakes: {
    en: [
      'Directly adding scalar magnitudes of branch currents (|I_total| = |I1| + |I2|) instead of performing complex vector addition. Branch currents with different phase angles will have |I_total| < |I1| + |I2|.',
      'Blindly inverting individual real and imaginary parts (e.g. thinking 1/(R + jX) = 1/R + 1/jX). One must multiply numerator and denominator by the complex conjugate.',
      'Using the wrong branch impedance in the AC Current Divider formula (putting Z1 in the numerator when solving for I1 instead of Z2).',
      'Forgetting that capacitive reactance XC has a negative imaginary operator (-j) in impedance (Z = R - jXC) but positive susceptance (+j) in admittance (Y = G + jBC).'
    ],
    hi: [
      'शाखा धाराओं के केवल परिमाण जोड़ देना (|I_total| = |I1| + |I2|), जबकि विभिन्न फेज कोणों के कारण फेजर योग करना अनिवार्य है।',
      'सम्मिश्र संख्या का व्युत्क्रम करते समय 1/(R + jX) को सीधे 1/R + 1/jX लिख देना, जो कि गणितीय रूप से गलत है।',
      'करंट डिवाइडर सूत्र में गलती से उसी शाखा की प्रतिबाधा अंश में रख देना (I1 निकालते समय Z1 रखना बजाय Z2 के)।',
      'कैपेसिटिव रिएक्टेंस के चिन्ह को भूल जाना (प्रतिबाधा में -jXC और प्रवेश्यता में +jBC)।'
    ],
    bn: [
      'শাখা কারেন্টের মান স্কেলারের মতো সরাসরি যোগ করা (|I_total| = |I1| + |I2|), যা ফেজ পার্থক্যের কারণে ভুল ফলাফল দেয়।',
      'জটিল সংখ্যার বিপরীত মান নির্ণয়ে ১/(R + jX) কে ১/R + ১/jX ভাবা।',
      'কারেন্ট ডিভাইডার সূত্রে I1 নির্ণয়ের সময় ভুল করে লবে Z1 বসানো (সঠিক হলো Z2)।',
      'ইম্পিড্যান্সে ক্যাপাসিটিভ রিঅ্যাকট্যান্স ঋণাত্মক (-jXC) কিন্তু অ্যাডমিট্যান্সে সাসিপ্ট্যান্স ধনাত্মক (+jBC) হওয়ার নিয়মটি ভুলে যাওয়া।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch5-l13-1',
      question: {
        en: 'Two parallel AC branches carry currents I1 = 6 ∠ 0° A and I2 = 8 ∠ 90° A. The magnitude of the total supply current I_total is:',
        hi: 'दो समानांतर एसी शाखाओं में धाराएं I1 = 6 ∠ 0° A और I2 = 8 ∠ 90° A हैं। कुल आपूर्ति धारा I_total का परिमाण है:',
        bn: 'দুটি সমান্তরাল এসি শাখায় কারেন্ট I1 = 6 ∠ 0° A এবং I2 = 8 ∠ 90° A। মোট সাপ্লাই কারেন্ট I_total এর মান কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '14.0 A', hi: '14.0 A', bn: '১৪.০ A' } },
        { id: 'opt-b', text: { en: '10.0 A', hi: '10.0 A', bn: '১০.০ A' } },
        { id: 'opt-c', text: { en: '2.0 A', hi: '2.0 A', bn: '২.০ A' } },
        { id: 'opt-d', text: { en: '48.0 A', hi: '48.0 A', bn: '৪৮.০ A' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'By KCL, I_total = I1 + I2 = (6 + j0) + (0 + j8) = 6 + j8 A. The magnitude is |I_total| = √(6² + 8²) = √(36 + 64) = √100 = 10.0 A. Note that adding scalar magnitudes directly (6 + 8 = 14 A) is incorrect.',
        hi: 'KCL के अनुसार, I_total = I1 + I2 = 6 + j8 A। परिमाण |I_total| = √(6² + 8²) = 10.0 A है।',
        bn: 'KCL অনুযায়ী, I_total = I1 + I2 = 6 + j8 A। এর মান |I_total| = √(৬² + ৮²) = ১০.০ A।'
      }
    },
    {
      id: 'mcq-ch5-l13-2',
      question: {
        en: 'In an AC current divider network consisting of two parallel branches Z1 and Z2, the phasor current I1 through branch Z1 is given by:',
        hi: 'दो समानांतर शाखाओं Z1 और Z2 वाले एसी धारा विभाजक नेटवर्क में, शाखा Z1 से प्रवाहित फेजर धारा I1 किसके द्वारा दी जाती है?',
        bn: 'Z1 এবং Z2 দুটি সমান্তরাল শাখার একটি এসি কারেন্ট ডিভাইডার নেটওয়ার্কে Z1 শাখার মধ্য দিয়ে কারেন্ট I1 কোন সূত্রের মাধ্যমে নির্ণয় করা হয়?'
      },
      options: [
        { id: 'opt-a', text: { en: 'I1 = I_total · [ Z1 / (Z1 + Z2) ]', hi: 'I1 = I_total · [ Z1 / (Z1 + Z2) ]', bn: 'I1 = I_total · [ Z1 / (Z1 + Z2) ]' } },
        { id: 'opt-b', text: { en: 'I1 = I_total · [ Z2 / (Z1 + Z2) ]', hi: 'I1 = I_total · [ Z2 / (Z1 + Z2) ]', bn: 'I1 = I_total · [ Z2 / (Z1 + Z2) ]' } },
        { id: 'opt-c', text: { en: 'I1 = I_total · [ (Z1 + Z2) / Z2 ]', hi: 'I1 = I_total · [ (Z1 + Z2) / Z2 ]', bn: 'I1 = I_total · [ (Z1 + Z2) / Z2 ]' } },
        { id: 'opt-d', text: { en: 'I1 = I_total · (Z1 · Z2)', hi: 'I1 = I_total · (Z1 · Z2)', bn: 'I1 = I_total · (Z1 · Z2)' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'The AC Current Divider Rule assigns the opposite branch impedance to the numerator: I1 = I_total · [ Z2 / (Z1 + Z2) ] = I_total · [ Y1 / (Y1 + Y2) ].',
        hi: 'एसी करंट डिवाइडर नियम के अनुसार अंश में विपरीत शाखा की प्रतिबाधा रखी जाती है: I1 = I_total · [ Z2 / (Z1 + Z2) ]।',
        bn: 'এসি কারেন্ট ডিভাইডার নিয়মে বিপরীত শাখার ইম্পিড্যান্স লবে বসে: I1 = I_total · [ Z2 / (Z1 + Z2) ]।'
      }
    },
    {
      id: 'mcq-ch5-l13-3',
      question: {
        en: 'A series-parallel circuit contains a series impedance Z_s = (3 + j4) Ω and a parallel equivalent impedance Z_p = (5 - j4) Ω. The total impedance Z_total is:',
        hi: 'एक सीरीज-पैरेलल परिपथ में सीरीज प्रतिबाधा Z_s = (3 + j4) Ω और पैरेलल तुल्य प्रतिबाधा Z_p = (5 - j4) Ω है। कुल प्रतिबाधा Z_total है:',
        bn: 'একটি সিরিজ-প্যারালাল সার্কিটে সিরিজ ইম্পিড্যান্স Z_s = (3 + j4) Ω এবং সমান্তরাল সমতুল্য ইম্পিড্যান্স Z_p = (5 - j4) Ω। মোট ইম্পিড্যান্স Z_total কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '8.0 ∠ 0° Ω (purely resistive)', hi: '8.0 ∠ 0° Ω (शुद्ध प्रतिरोधी)', bn: '৮.০ ∠ ০° Ω (বিশুদ্ধ রোধীয়)' } },
        { id: 'opt-b', text: { en: '8 + j8 Ω', hi: '8 + j8 Ω', bn: '৮ + j৮ Ω' } },
        { id: 'opt-c', text: { en: '2 - j8 Ω', hi: '2 - j8 Ω', bn: '২ - j৮ Ω' } },
        { id: 'opt-d', text: { en: '10.0 ∠ 45° Ω', hi: '10.0 ∠ 45° Ω', bn: '১০.০ ∠ ৪৫° Ω' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Z_total = Z_s + Z_p = (3 + j4) + (5 - j4) = (3 + 5) + j(4 - 4) = 8 + j0 Ω = 8.0 ∠ 0° Ω. The inductive reactance of the series part exactly cancels the capacitive reactance of the parallel part.',
        hi: 'Z_total = (3 + j4) + (5 - j4) = 8 + j0 Ω = 8.0 ∠ 0° Ω। रिएक्टेंस पूर्णतः निरस्त हो जाते हैं और परिपथ शुद्ध प्रतिरोधी बन जाता है।',
        bn: 'Z_total = (3 + j4) + (5 - j4) = 8 + j0 Ω = ৮.০ ∠ ০° Ω। ইন্ডাক্টিভ ও ক্যাপাসিটিভ রিঅ্যাকট্যান্স পরস্পর বাতিল হয়ে সার্কিটটি বিশুদ্ধ রোধীয় হয়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch5-l13-1',
      question: {
        en: 'A parallel circuit consists of Branch 1 with Z1 = (12 + j16) Ω and Branch 2 with Z2 = (20 - j15) Ω connected across a 200 V, 50 Hz supply. Using the Admittance method, calculate: (a) Branch 1 admittance Y1, (b) Branch 2 admittance Y2, (c) Total circuit admittance Y_total, (d) Total supply current I_total and its phase angle relative to voltage.',
        hi: 'एक समानांतर परिपथ में शाखा 1 में Z1 = (12 + j16) Ω और शाखा 2 में Z2 = (20 - j15) Ω एक 200 V, 50 Hz सप्लाई से जुड़े हैं। प्रवेश्यता (Admittance) विधि का उपयोग करके गणना करें: (a) शाखा 1 की प्रवेश्यता Y1, (b) शाखा 2 की प्रवेश्यता Y2, (c) कुल प्रवेश्यता Y_total, (d) कुल आपूर्ति धारा I_total और इसका वोल्टेज के सापेक्ष फेज कोण।',
        bn: 'একটি সমান্তরাল সার্কিটে শাখা ১ এ Z1 = (12 + j16) Ω এবং শাখা ২ এ Z2 = (20 - j15) Ω একটি 200 V, 50 Hz উৎসের সাথে যুক্ত। অ্যাডমিট্যান্স পদ্ধতি ব্যবহার করে নির্ণয় করুন: (a) শাখা ১ এর অ্যাডমিট্যান্স Y1, (b) শাখা ২ এর অ্যাডমিট্যান্স Y2, (c) মোট সার্কিট অ্যাডমিট্যান্স Y_total, (d) মোট কারেন্ট I_total এবং ভোল্টেজের সাপেক্ষে এর ফেজ কোণ।'
      },
      hint: {
        en: '|Z1|² = 12² + 16² = 400. Y1 = (12 - j16)/400 = 0.03 - j0.04 S. |Z2|² = 20² + 15² = 625. Y2 = (20 + j15)/625 = 0.032 + j0.024 S. Y_total = Y1 + Y2.',
        hi: '|Z1|² = 400, Y1 = 0.03 - j0.04 S। |Z2|² = 625, Y2 = 0.032 + j0.024 S। Y_total = Y1 + Y2 ज्ञात करें।',
        bn: '|Z1|² = 400, Y1 = 0.03 - j0.04 S। |Z2|² = 625, Y2 = 0.032 + j0.024 S। Y_total = Y1 + Y2 নির্ণয় করুন।'
      },
      answerKey: {
        en: '(a) Y1 = (12 - j16)/400 = (0.030 - j0.040) S = 0.050 ∠ -53.13° S.\n(b) Y2 = (20 + j15)/625 = (0.032 + j0.024) S = 0.040 ∠ 36.87° S.\n(c) Y_total = (0.030 + 0.032) + j(-0.040 + 0.024) = (0.062 - j0.016) S.\n|Y_total| = √(0.062² + 0.016²) = √(0.003844 + 0.000256) = √0.004100 = 0.06403 S.\nθ_y = tan⁻¹(-0.016 / 0.062) = -14.47°.\nY_total = 0.06403 ∠ -14.47° S.\n(d) Total Supply Current I_total = V · Y_total = 200 · 0.06403 ∠ -14.47° = 12.81 ∠ -14.47° A (Lagging).',
        hi: '(a) Y1 = (0.030 - j0.040) S = 0.050 ∠ -53.13° S।\n(b) Y2 = (0.032 + j0.024) S = 0.040 ∠ 36.87° S।\n(c) Y_total = (0.062 - j0.016) S = 0.06403 ∠ -14.47° S।\n(d) I_total = 12.81 ∠ -14.47° A (लैगिंग)।',
        bn: '(a) Y1 = (0.030 - j0.040) S = 0.050 ∠ -53.13° S।\n(b) Y2 = (0.032 + j0.024) S = 0.040 ∠ 36.87° S।\n(c) Y_total = (0.062 - j0.016) S = 0.06403 ∠ -14.47° S।\n(d) I_total = 12.81 ∠ -14.47° A (ল্যাগিং)।'
      }
    },
    {
      id: 'pq-ch5-l13-2',
      question: {
        en: 'A circuit has a series coil of resistance R_s = 4 Ω and inductive reactance X_Ls = 6 Ω. This coil is connected in series with a parallel branch consisting of a resistor R_p = 10 Ω and a capacitor with reactance X_Cp = 10 Ω. The entire circuit is connected across a 240 V, 50 Hz supply. Find: (a) The equivalent impedance of the parallel combination Z_p, (b) The total circuit impedance Z_total, (c) The total current I_total and overall power factor.',
        hi: 'एक परिपथ में एक सीरीज कॉइल है जिसका प्रतिरोध R_s = 4 Ω और इंडक्टिव रिएक्टेंस X_Ls = 6 Ω है। यह कॉइल एक समानांतर शाखा के साथ श्रेणी में जुड़ी है जिसमें एक प्रतिरोधक R_p = 10 Ω और कैपेसिटर X_Cp = 10 Ω हैं। पूरा परिपथ 240 V, 50 Hz सप्लाई से जुड़ा है। ज्ञात करें: (a) समानांतर भाग की तुल्य प्रतिबाधा Z_p, (b) कुल परिपथ प्रतिबाधा Z_total, (c) कुल धारा I_total और समग्र पावर फैक्टर।',
        bn: 'একটি সার্কিটে একটি সিরিজ কয়েল রয়েছে যার রোধ R_s = 4 Ω এবং ইন্ডাক্টিভ রিঅ্যাকট্যান্স X_Ls = 6 Ω। এই কয়েলটি একটি সমান্তরাল শাখার সাথে সিরিজে যুক্ত যাতে রয়েছে রোধ R_p = 10 Ω এবং ধারক X_Cp = 10 Ω। সম্পূর্ণ সার্কিটটি 240 V, 50 Hz সরবরাহে যুক্ত। নির্ণয় করুন: (a) সমান্তরাল অংশের সমতুল্য ইম্পিড্যান্স Z_p, (b) মোট সার্কিট ইম্পিড্যান্স Z_total, (c) মোট কারেন্ট I_total এবং সামগ্রিক পাওয়ার ফ্যাক্টর।'
      },
      hint: {
        en: 'Z_s = 4 + j6 Ω. For parallel branch: Z_p = (10 · (-j10)) / (10 - j10) = -j100 / (10 - j10) = 5 - j5 Ω. Z_total = Z_s + Z_p = (4 + 5) + j(6 - 5) = 9 + j1 Ω.',
        hi: 'Z_s = 4 + j6 Ω। पैरेलल शाखा: Z_p = (10 × -j10)/(10 - j10) = 5 - j5 Ω। कुल प्रतिबाधा Z_total = (4+5) + j(6-5) = 9 + j1 Ω।',
        bn: 'Z_s = 4 + j6 Ω। প্যারালাল শাখা: Z_p = 5 - j5 Ω। মোট ইম্পিড্যান্স Z_total = 9 + j1 Ω।'
      },
      answerKey: {
        en: '(a) Z_p = (10 ∠ 0°) · (10 ∠ -90°) / (10 - j10) = (100 ∠ -90°) / (14.142 ∠ -45°) = 7.071 ∠ -45° Ω = (5.00 - j5.00) Ω.\n(b) Z_total = Z_s + Z_p = (4 + j6) + (5 - j5) = (9.00 + j1.00) Ω.\n|Z_total| = √(9² + 1²) = √82 = 9.055 Ω, θ_z = tan⁻¹(1/9) = 6.34° (Inductive).\n(c) Total Current I_total = 240 / 9.055 = 26.50 ∠ -6.34° A.\nOverall Power Factor PF = cos(6.34°) = 9 / 9.055 = 0.9939 (Lagging).',
        hi: '(a) Z_p = (5.00 - j5.00) Ω = 7.071 ∠ -45° Ω।\n(b) Z_total = (9.00 + j1.00) Ω = 9.055 ∠ 6.34° Ω।\n(c) I_total = 26.50 ∠ -6.34° A, PF = 0.9939 (लैगिंग)।',
        bn: '(a) Z_p = (5.00 - j5.00) Ω = 7.071 ∠ -45° Ω।\n(b) Z_total = (9.00 + j1.00) Ω = 9.055 ∠ 6.34° Ω।\n(c) I_total = 26.50 ∠ -6.34° A, PF = 0.9939 (ল্যাগিং)।'
      }
    }
  ]
};
