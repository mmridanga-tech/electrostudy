import { Lesson } from '../types';

export const LESSON_TRANSFORMER_EQUIVALENT_CIRCUIT: Lesson = {
  id: 'lsn-ch6-transformer-equivalent-circuit',
  topicId: 'ch6-transformer-equivalent-circuit',
  chapterId: 'ch-electrical-machines',
  order: 3,
  title: {
    en: 'Transformer Equivalent Circuit, Phasor Diagrams & Performance',
    hi: 'ट्रांसफॉर्मर तुल्य परिपथ, फेजर आरेख एवं प्रदर्शन (Performance)',
    bn: 'ট্রান্সফর্মারের সমতুল্য বর্তনী, ফেজার ডায়াগ্রাম ও কর্মদক্ষতা'
  },
  description: {
    en: 'Comprehensive analytical modeling of real single-phase transformers: primary and secondary winding resistances and leakage reactances, magnetizing branch parameters (Rc and Xm), no-load current decomposition (Iw and Iμ), impedance transformation and parameter referral to primary and secondary, rigorous phasor diagrams at lagging, unity, and leading power factors, open-circuit (OC) and short-circuit (SC) test determination, per-unit voltage regulation, and condition for maximum efficiency.',
    hi: 'वास्तविक सिंगल-फेज ट्रांसफॉर्मर का संपूर्ण विश्लेषणात्मक मॉडल: वाइंडिंग प्रतिरोध एवं लीकेज प्रतिघात, नो-लोड शाखा (Rc एवं Xm), नो-लोड धारा अपघटन (Iw व Iμ), प्रतिबाधा स्थानांतरण (Primary व Secondary में रेफर करना), लैगिंग, यूनिटी व लीडिंग पावर फैक्टर पर फेजर आरेख, ओपन-सर्किट (OC) व शॉर्ट-सर्किट (SC) परीक्षण, वोल्टेज रेगुलेशन तथा अधिकतम दक्षता की गणितीय स्थिति।',
    bn: 'বাস্তব সিঙ্গেল-ফেজ ট্রান্সফর্মারের সমতুল্য বর্তনী মডেলিং: ওয়াইন্डिंग রোধ ও লিকেজ রিঅ্যাক্ট্যান্স, নো-লোড প্যারালাল শাখা (Rc ও Xm), নো-লোড কারেন্ট বিভাজন (Iw ও Iμ), প্রাইমারি ও সেকেন্ডারিতে প্রতিবন্ধকতা রূপান্তর, ল্যাগিং, ইউনিটি ও লিডিং পাওয়ার ফ্যাক্টরে ফেজার ডায়াগ্রাম, ওপেন-সার্কিট (OC) ও শর্ট-সার্কিট (SC) টেস্ট, ভোল্টেজ রেগুলেশন এবং সর্বোচ্চ কর্মদক্ষতার শর্তাবলি।'
  },
  estimatedMinutes: 50,
  easyExplanation: {
    en: 'A real transformer is not 100% ideal. Real copper wires have resistance (R1, R2) that create voltage drops and heat losses (I²R). Some magnetic flux leaks through the air without passing through both windings, represented as leakage reactances (X1, X2). Even when no load is connected, the transformer draws a tiny no-load current (I0) to magnetize the core (Iμ through Xm) and supply iron/hysteresis losses (Iw through Rc). To analyze the entire circuit easily, we mathematically refer secondary resistances and reactances over to the primary side by multiplying them by the square of the turns ratio (1/K²). By performing two simple bench tests—the Open-Circuit (OC) test (finding core losses Rc, Xm) and the Short-Circuit (SC) test (finding winding resistances R_eq and reactances X_eq)—we can accurately predict voltage drops (voltage regulation) and calculate the operating efficiency for any load.',
    hi: 'एक वास्तविक ट्रांसफॉर्मर 100% आदर्श नहीं होता। तांबे की वाइंडिंग में प्रतिरोध (R1, R2) होता है जिससे वोल्टेज ड्रॉप और कॉपर लॉस होता है। कुछ चुंबकीय फ्लक्स हवा में लीक हो जाता है जिसे लीकेज रिएक्टेंस (X1, X2) कहा जाता है। नो-लोड पर भी कोर को चुंबकित करने और कोर लॉस की भरपाई के लिए एक छोटी नो-लोड धारा (I0) प्रवाहित होती है। पूरे परिपथ का विश्लेषण आसान बनाने के लिए हम सेकेंडरी के प्रतिरोध और रिएक्टेंस को टर्न्स अनुपात के वर्ग (1/K²) से गुणा करके प्राइमरी में रेफर (स्थानांतरित) कर लेते हैं। दो आसान परीक्षणों—ओपन सर्किट (OC) टेस्ट (कोर लॉस और Rc, Xm ज्ञात करने) और शॉर्ट सर्किट (SC) टेस्ट (कॉपर लॉस और Req, Xeq ज्ञात करने)—द्वारा हम किसी भी लोड पर वोल्टेज रेगुलेशन और दक्षता की सटीक गणना कर सकते हैं।',
    bn: 'বাস্তব ট্রান্সফরমার শতভাগ আদর্শ নয়। তামার তারের অভ্যন্তরীণ রোধের (R1, R2) কারণে ভোল্টেজ ড্রপ ও কপার লস হয়। কিছু চৌম্বক ফ্লাক্স বাতাসে অপচয় হয়, যা লিকেজ রিঅ্যাক্ট্যান্স (X1, X2) হিসেবে প্রকাশ পায়। লোড না থাকলেও কোরে চৌম্বক ক্ষেত্র তৈরি এবং কোর লস বহনের জন্য সামান্য নো-লোড কারেন্ট (I0) প্রবাহিত হয়। সমগ্র বর্তনীকে সহজে বিশ্লেষণের জন্য সেকেন্ডারির রোধ ও রিঅ্যাক্ট্যান্সকে টার্ন অনুপাতের বর্গ (1/K²) দিয়ে গুণ করে প্রাইমারিতে রূপান্তর করা হয়। দুটি সহজ ল্যাব টেস্ট—ওপেন-সার্কিট (OC) টেস্ট (কোর লস Rc, Xm নির্ণয়) এবং শর্ট-সার্কিট (SC) টেস্ট (কপার লস Req, Xeq নির্ণয়)—এর মাধ্যমে যেকোনো লোডে ভোল্টেজ রেগুলেশন ও কর্মদক্ষতা সঠিকভাবে নির্ণয় করা যায়।'
  },
  detailedExplanation: {
    en: `1. Physical Non-Idealities of Practical Transformers:
- Winding Resistances (R1, R2): Cause internal I²R thermal dissipation and resistive voltage drops.
- Leakage Flux & Reactances (X1, X2): Magnetic flux lines that fail to link both coils and pass through the surrounding dielectric/air. They produce inductive reactive voltage drops (I1·X1, I2·X2).
- Finite Core Permeability & Core Losses (Rc, Xm): Real iron cores require magnetizing MMF (Iμ through Xm) and experience alternating magnetic hysteresis and eddy currents (Iw through core-loss shunt resistance Rc).

2. No-Load Current Decomposition:
- No-load Current Vector: I0 = Iw + j·Iμ = I0·cos(Φ0) - j·I0·sin(Φ0)
- Working / Core-loss Component: Iw = I0 · cos(Φ0) (in phase with applied voltage V1)
- Magnetizing Component: Iμ = I0 · sin(Φ0) (lags V1 by 90°, in phase with mutual flux Φm)
- Magnitude: |I0| = √(Iw² + Iμ²) (typically 2% to 6% of rated full-load primary current)
- Shunt Parameters: Rc = V1 / Iw,  Xm = V1 / Iμ

3. Impedance Referral & Exact vs Approximate Equivalent Circuits:
- Secondary Parameters Referred to Primary:
  * R2' = R2 / K² = R2 · (N1 / N2)²
  * X2' = X2 / K² = X2 · (N1 / N2)²
  * Z_L' = Z_L / K²
  * V2' = V2 / K = V2 · (N1 / N2)
  * I2' = K · I2 = I2 · (N2 / N1)
- Total Equivalent Resistance & Reactance (Referred to Primary):
  * R01 = R_eq1 = R1 + R2' = R1 + R2 / K²
  * X01 = X_eq1 = X1 + X2' = X1 + X2 / K²
  * Z01 = Z_eq1 = √(R01² + X01²)

4. Voltage Regulation:
- Definition: Percentage change in terminal voltage from no-load to full-load at constant supply voltage:
  %VR = [(V2(no-load) - V2(full-load)) / V2(full-load)] × 100%
- Approximate Formula (Referred to Primary):
  %VR = [ (I1·R01·cos(Φ2) ± I1·X01·sin(Φ2)) / V1 ] × 100%
  * Use (+) for Lagging Power Factor (inductive loads, terminal voltage drops)
  * Use (-) for Leading Power Factor (capacitive loads, Ferranti-like terminal voltage rise possible!)
  * Zero Voltage Regulation Condition (Leading pf): tan(Φ2) = -R01 / X01

5. Maximum Efficiency Condition:
- Efficiency η = (V2·I2·cos(Φ2)) / [V2·I2·cos(Φ2) + Pi + I2²·R02]
- Condition for Maximum Efficiency: Variable Copper Loss equals Constant Iron Loss:
  P_cu = P_i  =>  x² · P_cu(FL) = P_i
- Fractional Load for Maximum Efficiency:
  x_max = √(P_i / P_cu(FL))
- Maximum kVA Rating = Rated kVA × √(P_i / P_cu(FL))`,
    hi: `1. वास्तविक ट्रांसफॉर्मर के घटक:
- वाइंडिंग प्रतिरोध (R1, R2) तथा लीकेज रिएक्टेंस (X1, X2)।
- नो-लोड शंट शाखा: कोर लॉस प्रतिरोध (Rc) तथा मैग्नेटाइजिंग रिएक्टेंस (Xm)।

2. नो-लोड धारा का अपघटन:
- I0 = Iw - j·Iμ
- वर्किंग करंट (कोर लॉस): Iw = I0 · cos(Φ0) (सप्लाई वोल्टेज V1 के समान कला में)।
- मैग्नेटाइजिंग करंट: Iμ = I0 · sin(Φ0) (V1 से 90° पीछे, फ्लक्स के समान कला में)।
- |I0| = √(Iw² + Iμ²), Rc = V1 / Iw, Xm = V1 / Iμ।

3. प्रतिबाधा का स्थानांतरण (Referred to Primary):
- R2' = R2 / K², X2' = X2 / K²
- कुल तुल्य प्रतिरोध: R01 = R1 + R2'
- कुल तुल्य रिएक्टेंस: X01 = X1 + X2'
- कुल प्रतिबाधा: Z01 = √(R01² + X01²)

4. वोल्टेज रेगुलेशन (%VR):
- %VR = [ (I1·R01·cos(Φ2) ± I1·X01·sin(Φ2)) / V1 ] × 100%
- लैगिंग (इंडक्टिव) लोड के लिए (+) और लीडिंग (कैपेसिटिव) लोड के लिए (-)।

5. अधिकतम दक्षता की शर्त:
- चर कॉपर हानि = अचर आयरन हानि (Pcu = Pi)
- अधिकतम दक्षता पर भार अनुपात: x = √(Pi / Pcu(FL))`,
    bn: `১. বাস্তব ট্রান্সফর্মারের প্যারামিটারসমূহ:
- ওয়াইন্ডিং রোধ (R1, R2) এবং লিকেজ রিঅ্যাক্ট্যান্স (X1, X2)।
- নো-লোড প্যারালাল শাখা: কোর লস রেজিস্ট্যান্স (Rc) এবং ম্যাগনেটাইজিং রিঅ্যাক্ট্যান্স (Xm)।

২. নো-লোড কারেন্ট বিশ্লেষণ:
- I0 = Iw - j·Iμ
- ওয়ার্কিং কারেন্ট: Iw = I0 · cos(Φ0) (V1-এর সাথে একই দশায়)।
- ম্যাগনেটাইজিং কারেন্ট: Iμ = I0 · sin(Φ0) (V1 থেকে ৯০° পিছিয়ে, ফ্লাক্সের সমমুখী)।
- |I0| = √(Iw² + Iμ²), Rc = V1 / Iw, Xm = V1 / Iμ।

৩. সেকেন্ডারি প্যারামিটার প্রাইমারিতে রূপান্তর:
- R2' = R2 / K², X2' = X2 / K²
- মোট তুল্য রোধ: R01 = R1 + R2'
- মোট তুল্য রিঅ্যাক্ট্যান্স: X01 = X1 + X2'
- মোট ইম্পিড্যান্স: Z01 = √(R01² + X01²)

৪. ভোল্টেজ রেগুলেশন (%VR):
- %VR = [ (I1·R01·cos(Φ2) ± I1·X01·sin(Φ2)) / V1 ] × ১০০%
- ল্যাগিং লোডে (+) এবং লিডিং লোডে (-)।

৫. সর্বোচ্চ কর্মদক্ষতার শর্ত:
- কপার লস = আয়রন লস (Pcu = Pi)
- সর্বোচ্চ দক্ষতায় লোডিং ফ্যাক্টর: x = √(Pi / Pcu(FL))`
  },
  formulas: [
    {
      id: 'f-no-load-components',
      symbol: 'Iw, Iμ, I0',
      expression: 'Iw = I0·cos(Φ0), Iμ = I0·sin(Φ0), I0 = √(Iw² + Iμ²)',
      formula: 'I_w = I_0 \\cos\\phi_0, \\quad I_\\mu = I_0 \\sin\\phi_0, \\quad I_0 = \\sqrt{I_w^2 + I_\\mu^2}',
      title: {
        en: 'No-Load Current Decomposition & Shunt Components',
        hi: 'नो-लोड धारा अपघटन एवं शंट घटक',
        bn: 'নো-লোড কারেন্ট বিভাজন ও শান্ট উপাদান'
      },
      description: {
        en: 'Decomposition of no-load current into iron-loss working component Iw (in phase with V1) and magnetizing component Iμ (quadrature).',
        hi: 'नो-लोड करंट का कोर लॉस घटक Iw तथा मैग्नेटाइजिंग घटक Iμ में अपघटन।',
        bn: 'নো-লোড কারেন্টের কোর লস উপাদান Iw এবং ম্যাগনেটাইজিং উপাদান Iμ-এ বিভাজন।'
      }
    },
    {
      id: 'f-referred-impedance',
      symbol: 'R01, X01, Z01',
      expression: 'R01 = R1 + R2/K², X01 = X1 + X2/K², Z01 = √(R01² + X01²)',
      formula: 'R_{01} = R_1 + \\frac{R_2}{K^2}, \\quad X_{01} = X_1 + \\frac{X_2}{K^2}, \\quad Z_{01} = \\sqrt{R_{01}^2 + X_{01}^2}',
      title: {
        en: 'Total Equivalent Impedance Referred to Primary',
        hi: 'प्राइमरी में संदर्भित कुल तुल्य प्रतिबाधा',
        bn: 'প্রাইমারিতে রূপান্তরিত মোট তুল্য প্রতিবন্ধকতা'
      },
      description: {
        en: 'Total primary-equivalent winding resistance R01, leakage reactance X01, and series impedance Z01.',
        hi: 'प्राइमरी में स्थानांतरित कुल तुल्य वाइंडिंग प्रतिरोध R01, लीकेज रिएक्टेंस X01 और प्रतिबाधा Z01।',
        bn: 'প্রাইমারিতে রূপান্তরিত মোট তুল্য ওয়াইন্ডিং রোধ R01, লিকেজ রিঅ্যাক্ট্যান্স X01 এবং ইম্পিড্যান্স Z01।'
      }
    },
    {
      id: 'f-voltage-regulation',
      symbol: '%VR',
      expression: '%VR = [ (I1·R01·cos(Φ2) ± I1·X01·sin(Φ2)) / V1 ] × 100%',
      formula: '\\%\\text{VR} = \\frac{I_1 R_{01} \\cos\\phi_2 \\pm I_1 X_{01} \\sin\\phi_2}{V_1} \\times 100\\%',
      title: {
        en: 'Approximate Voltage Regulation Formula',
        hi: 'सन्निकट वोल्टेज रेगुलेशन सूत्र',
        bn: 'ভোল্টেজ রেগুলেশনের আসন্ন সমীকরণ'
      },
      description: {
        en: 'Percentage voltage drop across internal transformer impedance (+ for lagging pf, - for leading pf).',
        hi: 'आंतरिक प्रतिबाधा के कारण वोल्टेज ड्रॉप का प्रतिशत (+ लैगिंग हेतु, - लीडिंग हेतु)।',
        bn: 'অভ্যন্তরীণ ইম্পিড্যান্সের কারণে ভোল্টেজ পরিবর্তনের হার (+ ল্যাগিংয়ে, - লিডিংয়ে)।'
      }
    },
    {
      id: 'f-max-efficiency-condition',
      symbol: 'x_max, η_max',
      expression: 'x_max = √(P_i / P_cu(FL)), P_cu = P_i at η_max',
      formula: 'x_{\\text{max}} = \\sqrt{\\frac{P_i}{P_{cu(\\text{FL})}}}, \\quad \\eta_{\\text{max}} = \\frac{x V_2 I_2 \\cos\\phi}{x V_2 I_2 \\cos\\phi + 2 P_i} \\times 100\\%',
      title: {
        en: 'Condition & Loading for Maximum Efficiency',
        hi: 'अधिकतम दक्षता की स्थिति एवं लोडिंग अनुपात',
        bn: 'সর্বোচ্চ কর্মদক্ষতার শর্ত ও লোডিং অনুপাত'
      },
      description: {
        en: 'Transformer efficiency peaks when variable copper loss equals constant iron core loss.',
        hi: 'ट्रांसफॉर्मर की दक्षता तब अधिकतम होती है जब चर कॉपर हानि अचर आयरन हानि के बराबर हो जाती है।',
        bn: 'কপার লস এবং আয়রন লস সমান হলে ট্রান্সফর্মারের কর্মদক্ষতা সর্বোচ্চ চূড়ায় পৌঁছায়।'
      }
    }
  ],
  solvedExamples: [
    {
      id: 'ex-trans-oc-sc-1',
      problem: {
        en: 'A 20 kVA, 2000/200 V, 50 Hz single-phase transformer gave the following test results:\n- OC Test (LV side open): 2000 V, 1.0 A, 120 W\n- SC Test (LV side shorted): 60 V, 10 A, 300 W\nCalculate: 1) Equivalent circuit parameters referred to primary (Rc, Xm, R01, X01), 2) Efficiency at full load, 0.8 power factor lagging, 3) Full-load voltage regulation at 0.8 power factor lagging.',
        hi: 'एक 20 kVA, 2000/200 V ट्रांसफॉर्मर के टेस्ट परिणाम:\n- OC टेस्ट: 2000 V, 1.0 A, 120 W\n- SC टेस्ट: 60 V, 10 A, 300 W\nगणना कीजिए: 1) प्राइमरी पैरामीटर (Rc, Xm, R01, X01), 2) 0.8 लैगिंग पर फुल लोड दक्षता, 3) 0.8 लैगिंग पर वोल्टेज रेगुलेशन।',
        bn: 'একটি ২০ kVA, ২০০০/২০০ V ট্রান্সফর্মারের ল্যাব পরীক্ষার ফলাফল:\n- OC টেস্ট: ২০০০ V, ১.০ A, ১২০ W\n- SC টেস্ট: ৬০ V, ১০ A, ৩০০ W\nনির্ণয় করো: ১) প্রাইমারি প্যারামিটার (Rc, Xm, R01, X01), ২) ০.৮ ল্যাগিংয়ে ফুল-লোড দক্ষতা, ৩) ০.৮ ল্যাগিংয়ে ভোল্টেজ রেগুলেশন।'
      },
      givenValues: {
        'Rating S': '20 kVA = 20,000 VA',
        'V1': '2000 V, V2 = 200 V, f = 50 Hz',
        'OC Test (HV side)': 'Voc = 2000 V, Ioc = 1.0 A, Poc = 120 W (Iron Loss Pi = 120 W)',
        'SC Test (HV side)': 'Vsc = 60 V, Isc = 10 A (rated I1 = 20000/2000 = 10 A), Psc = 300 W (Pcu(FL) = 300 W)'
      },
      solution: {
        en: '1. No-load Shunt Parameters from OC Test:\n- cos(Φ0) = Poc / (Voc × Ioc) = 120 / (2000 × 1.0) = 0.060\n- Iw = Ioc × cos(Φ0) = 1.0 × 0.060 = 0.060 A\n- Iμ = √(Ioc² - Iw²) = √(1.0² - 0.06²) = √(1 - 0.0036) = 0.9982 A\n- Rc = Voc / Iw = 2000 / 0.060 = 33,333.3 Ω = 33.33 kΩ\n- Xm = Voc / Iμ = 2000 / 0.9982 = 2003.6 Ω ≈ 2.00 kΩ\n\n2. Series Parameters from SC Test (performed at rated current 10 A):\n- R01 = Psc / Isc² = 300 / 10² = 3.00 Ω\n- Z01 = Vsc / Isc = 60 / 10 = 6.00 Ω\n- X01 = √(Z01² - R01²) = √(6.0² - 3.0²) = √(36 - 9) = √27 = 5.196 Ω\n\n3. Full-Load Efficiency at 0.8 pf lagging:\n- Output P_out = S × pf = 20,000 × 0.8 = 16,000 W = 16 kW\n- Total Losses = Pi + Pcu(FL) = 120 + 300 = 420 W = 0.42 kW\n- η = [16,000 / (16,000 + 420)] × 100% = (16,000 / 16,420) × 100% = 97.44%\n\n4. Voltage Regulation at 0.8 pf lagging (sinΦ = 0.6):\n- %VR = [ (I1·R01·cosΦ + I1·X01·sinΦ) / V1 ] × 100%\n- %VR = [ (10 × 3.0 × 0.8 + 10 × 5.196 × 0.6) / 2000 ] × 100%\n- %VR = [ (24.0 + 31.176) / 2000 ] × 100% = (55.176 / 2000) × 100% = 2.759% ≈ 2.76%.',
        hi: '1. शंट घटक: cos(Φ0) = 0.06, Iw = 0.06 A, Iμ = 0.998 A। Rc = 33.33 kΩ, Xm = 2.00 kΩ।\n2. श्रेणी घटक: R01 = 3.00 Ω, Z01 = 6.00 Ω, X01 = 5.20 Ω।\n3. फुल-लोड दक्षता (0.8 pf): η = [16000 / (16000 + 420)] × 100 = 97.44%।\n4. वोल्टेज रेगुलेशन: %VR = [(24 + 31.18) / 2000] × 100 = 2.76%।',
        bn: '১. শান্ট প্যারামিটার: cos(Φ0) = ০.০৬, Iw = ০.০৬ A, Iμ = ০.৯৯৮ A। Rc = ৩৩.৩৩ kΩ, Xm = ২.০০ kΩ।\n২. সিরিজ প্যারামিটার: R01 = ৩.০০ Ω, Z01 = ৬.০০ Ω, X01 = ৫.২০ Ω।\n৩. ফুল-লোড কর্মদক্ষতা: η = [১৬০০০ / ১৬৪২০] × ১০০ = ৯৭.৪৪%।\n৪. ভোল্টেজ রেগুলেশন: %VR = [(২৪ + ৩১.১৮) / ২০০০] × ১০০ = ২.৭৬%।'
      },
      finalAnswer: {
        en: 'Rc = 33.33 kΩ, Xm = 2.00 kΩ, R01 = 3.0 Ω, X01 = 5.20 Ω, Efficiency = 97.44%, %VR = 2.76%',
        hi: 'Rc = 33.33 kΩ, Xm = 2.00 kΩ, R01 = 3.0 Ω, X01 = 5.20 Ω, दक्षता = 97.44%, %VR = 2.76%',
        bn: 'Rc = ৩৩.৩৩ kΩ, Xm = ২.০০ kΩ, R01 = ৩.০ Ω, X01 = ৫.২০ Ω, দক্ষতা = ৯৭.৪৪%, %VR = ২.৭৬%'
      }
    },
    {
      id: 'ex-trans-max-eff-2',
      problem: {
        en: 'A 50 kVA, 1-phase transformer has a constant iron loss of 450 W and a full-load copper loss of 800 W. Calculate: 1) The kVA load at which maximum efficiency occurs, 2) The maximum efficiency of the transformer at unity power factor, 3) The maximum efficiency at 0.8 power factor lagging.',
        hi: 'एक 50 kVA ट्रांसफॉर्मर में कोर हानि 450 W और फुल लोड कॉपर हानि 800 W है। ज्ञात कीजिए: 1) अधिकतम दक्षता पर kVA लोड, 2) यूनिटी pf पर अधिकतम दक्षता, 3) 0.8 लैगिंग pf पर अधिकतम दक्षता।',
        bn: 'একটি ৫০ kVA ট্রান্সফর্মারের কোর লস ৪৫০ W এবং ফুল লোড কপার লস ৮০০ W। নির্ণয় করো: ১) সর্বোচ্চ দক্ষতায় kVA লোড, ২) ইউনিটি pf-এ সর্বোচ্চ দক্ষতা, ৩) ০.৮ ল্যাগিং pf-এ সর্বোচ্চ দক্ষতা।'
      },
      givenValues: {
        'Rating': '50 kVA',
        'Pi (Core Loss)': '450 W = 0.45 kW',
        'Pcu(FL)': '800 W = 0.80 kW'
      },
      solution: {
        en: '1. Fractional loading for maximum efficiency:\n- x_max = √(Pi / Pcu(FL)) = √(450 / 800) = √(0.5625) = 0.75 (75% full load)\n- kVA at maximum efficiency = 50 kVA × 0.75 = 37.50 kVA.\n\n2. At maximum efficiency, Pcu = Pi = 450 W. Total Losses = 2 × 450 W = 900 W = 0.90 kW.\n\n3. Maximum Efficiency at Unity Power Factor (pf = 1.0):\n- Output = 37.5 kVA × 1.0 = 37.5 kW = 37,500 W\n- η_max(1.0) = [37,500 / (37,500 + 900)] × 100% = (37,500 / 38,400) × 100% = 97.656% ≈ 97.66%.\n\n4. Maximum Efficiency at 0.8 pf lagging:\n- Output = 37.5 kVA × 0.8 = 30.0 kW = 30,000 W\n- η_max(0.8) = [30,000 / (30,000 + 900)] × 100% = (30,000 / 30,900) × 100% = 97.087% ≈ 97.09%.',
        hi: '1. x_max = √(450 / 800) = 0.75। अधिकतम दक्षता पर kVA = 37.50 kVA।\n2. कुल हानियाँ = 2 × 450 = 900 W।\n3. यूनिटी pf पर अधिकतम दक्षता = 97.66%।\n4. 0.8 pf पर अधिकतम दक्षता = 97.09%।',
        bn: '১. x_max = √(৪৫০ / ৮০০) = ০.৭৫। সর্বোচ্চ দক্ষতায় kVA = ৩৭.৫০ kVA।\n২. মোট লস = ২ × ৪৫০ = ৯০০ W।\n৩. ইউনিটি pf-এ সর্বোচ্চ দক্ষতা = ৯৭.৬৬%।\n৪. ০.৮ pf-এ সর্বোচ্চ দক্ষতা = ৯৭.০৯%।'
      },
      finalAnswer: {
        en: 'kVA at max efficiency = 37.50 kVA, Max Efficiency (unity pf) = 97.66%, Max Efficiency (0.8 pf) = 97.09%',
        hi: 'अधिकतम दक्षता पर लोड = 37.50 kVA, अधिकतम दक्षता (यूनिटी pf) = 97.66%, अधिकतम दक्षता (0.8 pf) = 97.09%',
        bn: 'সর্বোচ্চ দক্ষতায় লোড = ৩৭.৫০ kVA, সর্বোচ্চ দক্ষতা (ইউনিটি pf) = ৯৭.৬৬%, সর্বোচ্চ দক্ষতা (০.৮ pf) = ৯৭.০৯%'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Substation Transformer Performance Prediction: Utilizing equivalent circuit parameters from factory OC and SC tests to predict line voltage sags before deploying million-dollar grid hardware.',
      'Power Grid Load-Flow Software Modeling: Exact impedances (R01, X01) are fed into electrical grid simulation engines (e.g., ETAP, MATLAB Simulink, PSS/E) to guarantee transient stability.',
      'Industrial Power Factor Compensation: Computing precise leading reactive kVAR injections required to achieve zero voltage regulation at industrial plant incoming terminals.',
      'Thermal Overload & Efficiency Auditing: Determining economic loading points (x_max) to dispatch power through parallel transformer banks at minimum lifetime electricity waste.'
    ],
    hi: [
      'सबस्टेशन ट्रांसफॉर्मर प्रदर्शन पूर्वानुमान: OC और SC परीक्षणों से प्राप्त परिपथ पैरामीटर द्वारा ग्रिड में वोल्टेज ड्रॉप का सटीक पूर्वानुमान।',
      'पावर ग्रिड लोड-फ्लो मॉडलिंग: सॉफ्टवेयर (ETAP, MATLAB) में ट्रांसफॉर्मर प्रतिबाधा (R01, X01) दर्ज कर ग्रिड स्थिरता की जाँच।',
      'औद्योगिक पावर फैक्टर सुधार: शून्य वोल्टेज रेगुलेशन प्राप्त करने हेतु कैपेसिटर बैंक की सटीक गणना।',
      'ऊर्जा ऑडिट एवं दक्षता प्रबंधन: समानांतर ट्रांसफॉर्मर बैंकों में न्यूनतम ऊर्जा हानि पर बिजली वितरण सुनिश्चित करना।'
    ],
    bn: [
      'সাবস্টেশন ট্রান্সফরমার কর্মদক্ষতা বিশ্লেষণ: ল্যাব টেস্ট (OC ও SC) থেকে প্রাপ্ত প্যারামিটার দিয়ে গ্রিডের ভোল্টেজ ড্রপ আগে থেকেই নির্ধারণ করা।',
      'পাওয়ার গ্রিড লোড-ফ্লো মডেলিং: ETAP ও MATLAB সিমুলেশনে সঠিক ইম্পিড্যান্স (R01, X01) ব্যবহার করে গ্রিডের স্থায়িত্ব যাচাই।',
      'শিল্পক্ষেত্রে পাওয়ার ফ্যাক্টর নিয়ন্ত্রণ: ক্যাপাসিটর ব্যাংক ব্যবহারের মাধ্যমে শূন্য ভোল্টেজ রেগুলেশন অর্জন।',
      'শক্তি অডিট ও সর্বাধিক কর্মদক্ষতা নিশ্চিতকরণ: সর্বনিম্ন বিদ্যুতের অপচয়ে বিদ্যুৎ বিতরণের জন্য অর্থনৈতিক লোডিং পয়েন্ট (x_max) নির্ধারণ।'
    ]
  },
  importantPoints: {
    en: [
      'When referring resistance or reactance from secondary to primary, divide by K² (multiply by (N1/N2)²); when referring from primary to secondary, multiply by K².',
      'The Open-Circuit (OC) test is conducted at rated voltage on the LV side to measure constant iron loss (Pi) and find core shunt parameters (Rc, Xm).',
      'The Short-Circuit (SC) test is conducted at rated current on the HV side with LV short-circuited to measure full-load copper loss (Pcu) and find equivalent series parameters (Req, Xeq).',
      'Voltage regulation is positive (voltage drops) for lagging inductive loads, but can become zero or negative (voltage rises) for leading capacitive loads.',
      'Maximum efficiency always occurs at the specific load where variable copper loss equals constant iron loss (Pcu = Pi).'
    ],
    hi: [
      'सेकेंडरी से प्राइमरी में प्रतिरोध या रिएक्टेंस रेफर करते समय K² से भाग दिया जाता है ((N1/N2)² से गुणा); प्राइमरी से सेकेंडरी में K² से गुणा किया जाता है।',
      'ओपन-सर्किट (OC) टेस्ट रेटेड वोल्टेज पर LV साइड में किया जाता है (कोर लॉस Pi तथा Rc, Xm ज्ञात करने हेतु)।',
      'शॉर्ट-सर्किट (SC) टेस्ट रेटेड करंट पर HV साइड में किया जाता है (फुल-लोड कॉपर लॉस Pcu तथा Req, Xeq ज्ञात करने हेतु)।',
      'लैगिंग लोड पर वोल्टेज रेगुलेशन धनात्मक (वोल्टेज गिरता है) होता है, जबकि लीडिंग लोड पर यह शून्य या ऋणात्मक (वोल्टेज बढ़ता है) हो सकता है।',
      'अधिकतम दक्षता की स्थिति: चर कॉपर हानि = अचर आयरन हानि (Pcu = Pi)।'
    ],
    bn: [
      'সেকেন্ডারি থেকে প্রাইমারিতে রোধ বা রিঅ্যাক্ট্যান্স রূপান্তর করতে K² দিয়ে ভাগ (বা (N1/N2)² দিয়ে গুণ) করতে হয়; প্রাইমারি থেকে সেকেন্ডারিতে K² দিয়ে গুণ করতে হয়।',
      'ওপেন-সার্কিট (OC) টেস্ট রেটেড ভোল্টেজে LV পাশে করা হয় (কোর লস Pi এবং Rc, Xm নির্ণয় করতে)।',
      'শর্ট-সার্কিট (SC) টেস্ট রেটেড কারেন্টে HV পাশে করা হয় (ফুল-লোড কপার লস Pcu এবং Req, Xeq নির্ণয় করতে)।',
      'ল্যাগিং লোডে ভোল্টেজ রেগুলেশন পজিটিভ (ভোল্টেজ ড্রপ হয়), কিন্তু লিডিং ক্যাপাসিটিভ লোডে এটি শূন্য বা নেগেটিভ (ভোল্টেজ বৃদ্ধি) হতে পারে।',
      'সর্বোচ্চ কর্মদক্ষতার শর্ত: পরিবর্তনশীল কপার লস = স্থির আয়রন লস (Pcu = Pi)।'
    ]
  },
  commonMistakes: {
    en: [
      'Incorrect impedance referral: forgetting that impedance scales with the SQUARE of the turns ratio (Z1\' = Z2 / K²).',
      'Mixing up test sides: performing the SC test on the LV side with high rated current meters instead of the convenient HV side, or neglecting to keep LV open during the OC test.',
      'Assuming voltage regulation is always positive: capacitive (leading pf) loads can cause the secondary terminal voltage to rise above the no-load voltage (negative regulation).',
      'Confusing full-load efficiency with maximum efficiency: maximum efficiency occurs only when Pcu = Pi, which may happen at a fractional load x < 1.'
    ],
    hi: [
      'प्रतिबाधा स्थानांतरण में भूल: यह भूल जाना कि प्रतिबाधा टर्न्स अनुपात के वर्ग (K²) से बदलती है।',
      'टेस्ट साइड में भ्रम: SC टेस्ट को LV साइड में करना जहाँ अत्यधिक करंट होता है, जबकि इसे HV साइड में करना आसान होता है।',
      'यह मानना कि वोल्टेज रेगुलेशन हमेशा धनात्मक होता है: कैपेसिटिव (लीडिंग) लोड पर वोल्टेज बढ़ सकता है (ऋणात्मक रेगुलेशन)।',
      'फुल-लोड दक्षता और अधिकतम दक्षता में भ्रम: अधिकतम दक्षता केवल तब होती है जब Pcu = Pi हो, जो प्रायः 50-80% लोड पर होता है।'
    ],
    bn: [
      'ইম্পিড্যান্স রূপান্তরে ভুল: মনে না রাখা যে ইম্পিড্যান্স টার্ন অনুপাতের বর্গের (K²) সমানুপাতিক।',
      'ল্যাব টেস্টের পার্শ্ব নির্বাচনে ভুল: SC টেস্ট HV পাশে করা সুবিধাজনক কারণ সেখানে রেটেড কারেন্ট কম থাকে।',
      'মনে করা যে ভোল্টেজ রেগুলেশন সর্বদা পজিটিভ: ক্যাপাসিটিভ (লিডিং) লোডে সেকেন্ডারি ভোল্টেজ বৃদ্ধি পেয়ে নেগেটিভ রেগুলেশন হতে পারে।',
      'পূর্ণ লোড দক্ষতা ও সর্বোচ্চ দক্ষতায় বিভ্রান্তি: সর্বোচ্চ দক্ষতা কেবল তখনই অর্জিত হয় যখন Pcu = Pi হয়, যা সাধারণত আংশিক লোডে ঘটে।'
    ]
  },
  mcqs: [
    {
      id: 'ch6-l15-mcq1',
      question: {
        en: 'If a transformer secondary winding has a resistance of R2 = 0.04 Ω and the voltage transformation ratio is K = N2 / N1 = 0.1 (Step-Down 10:1), what is the secondary resistance referred to the primary side (R2\')?',
        hi: 'यदि ट्रांसफॉर्मर सेकेंडरी का प्रतिरोध R2 = 0.04 Ω और वोल्टेज रूपांतरण अनुपात K = 0.1 (10:1 स्टेप-डाउन) है, तो प्राइमरी में संदर्भित सेकेंडरी प्रतिरोध (R2\') कितना होगा?',
        bn: 'যদি সেকেন্ডারি ওয়াইন্ডিংয়ের রোধ R2 = ০.০৪ Ω এবং রূপান্তর অনুপাত K = ০.১ (১০:১ স্টেপ-ডাউন) হয়, তবে প্রাইমারিতে রূপান্তরিত সেকেন্ডারি রোধ (R2\') কত হবে?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: '4.00 Ω (since R2\' = R2 / K² = 0.04 / 0.01 = 4.00 Ω)',
            hi: '4.00 Ω (चूँकि R2\' = R2 / K² = 0.04 / 0.01 = 4.00 Ω)',
            bn: '৪.০০ Ω (যেহেতু R2\' = R2 / K² = ০.০৪ / ০.০১ = ৪.০০ Ω)'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: '0.004 Ω',
            hi: '0.004 Ω',
            bn: '০.০০৪ Ω'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: '0.40 Ω',
            hi: '0.40 Ω',
            bn: '০.৪০ Ω'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: '0.04 Ω',
            hi: '0.04 Ω',
            bn: '০.০৪ Ω'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Impedance referral from secondary to primary requires dividing by K²: R2\' = R2 / K² = 0.04 / (0.1)² = 0.04 / 0.01 = 4.00 Ω.',
        hi: 'सेकेंडरी से प्राइमरी में बदलने के लिए K² से भाग दिया जाता है: R2\' = 0.04 / (0.1)² = 4.00 Ω।',
        bn: 'সেকেন্ডারি থেকে প্রাইমারিতে রূপান্তরের সূত্র: R2\' = R2 / K² = ০.০৪ / (০.১)² = ৪.০০ Ω।'
      }
    },
    {
      id: 'ch6-l15-mcq2',
      question: {
        en: 'Under which specific load condition can a single-phase transformer exhibit Zero Voltage Regulation or Negative Voltage Regulation (terminal voltage rising under load)?',
        hi: 'किस लोड स्थिति में एक सिंगल-फेज ट्रांसफॉर्मर शून्य या ऋणात्मक वोल्टेज रेगुलेशन (लोड पर वोल्टेज बढ़ना) प्रदर्शित कर सकता है?',
        bn: 'কোন নির্দিষ্ট লোড অবস্থায় সিঙ্গেল-ফেজ ট্রান্সফর্মার শূন্য বা ঋণাত্মক ভোল্টেজ রেগুলেশন (লোডে ভোল্টেজ বৃদ্ধি) প্রদর্শন করতে পারে?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'Leading Power Factor (Capacitive Load) where tan(Φ2) = R01 / X01',
            hi: 'लीडिंग पावर फैक्टर (कैपेसिटिव लोड) जहाँ tan(Φ2) = R01 / X01 हो',
            bn: 'লিডিং পাওয়ার ফ্যাক্টর (ক্যাপাসিটিভ লোড) যেখানে tan(Φ2) = R01 / X01'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'Lagging Power Factor (Inductive Load) at 0.8 pf',
            hi: '0.8 pf पर लैगिंग पावर फैक्टर (इंडक्टिव लोड)',
            bn: '০.৮ pf-এ ল্যাগিং পাওয়ার ফ্যাক্টর (ইন্ডাক্টিভ লোড)'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'Pure Resistive Load with unity power factor',
            hi: 'यूनिटी पावर फैक्टर पर शुद्ध प्रतिरोधी लोड',
            bn: 'ইউনিটি পাওয়ার ফ্যাক্টরে বিশুদ্ধ রেজিস্ট্রিভ লোড'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'Zero voltage regulation is mathematically impossible under any load',
            hi: 'शून्य वोल्टेज रेगुलेशन किसी भी परिस्थिति में संभव नहीं है',
            bn: 'কোনো অবস্থাতেই শূন্য ভোল্টেজ রেগুলেশন সম্ভব নয়'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'For leading power factor, %VR ∝ (I1·R01·cosΦ - I1·X01·sinΦ). When I1·R01·cosΦ = I1·X01·sinΦ, tanΦ = R01/X01, the voltage regulation becomes exactly zero. For higher capacitive leads, regulation is negative (voltage rises).',
        hi: 'लीडिंग पावर फैक्टर पर सूत्र में ऋण चिह्न (-) आता है: (R01·cosΦ - X01·sinΦ)। जब tanΦ = R01/X01 होता है, तब वोल्टेज रेगुलेशन शून्य हो जाता है।',
        bn: 'লিডিং পাওয়ার ফ্যাক্টরে সমীকরণে বিয়োগ চিহ্ন (-) আসে। যখন tanΦ = R01/X01 হয়, তখন ভোল্টেজ রেগুলেশন শূন্য হয়।'
      }
    },
    {
      id: 'ch6-l15-mcq3',
      question: {
        en: 'A 100 kVA transformer has constant iron loss Pi = 1 kW and full-load copper loss Pcu = 4 kW. At what percentage of full load will the transformer operate at its maximum efficiency?',
        hi: 'एक 100 kVA ट्रांसफॉर्मर में कोर हानि Pi = 1 kW और फुल-लोड कॉपर हानि Pcu = 4 kW है। यह ट्रांसफॉर्मर फुल-लोड के कितने प्रतिशत पर अधिकतम दक्षता पर कार्य करेगा?',
        bn: 'একটি ১০০ kVA ট্রান্সফর্মারের কোর লস Pi = ১ kW এবং ফুল-লোড কপার লস Pcu = ৪ kW। ফুল-লোডের কত শতাংশ লোডে ট্রান্সফরমারটি সর্বোচ্চ কর্মদক্ষতায় পরিচালিত হবে?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: '50% of Full Load (since x = √(Pi / Pcu) = √(1 / 4) = 0.5 = 50%)',
            hi: '50% फुल लोड (चूँकि x = √(Pi / Pcu) = √(1 / 4) = 0.5 = 50%)',
            bn: '৫০% ফুল লোড (যেহেতু x = √(Pi / Pcu) = √(১ / ৪) = ০.৫ = ৫০%)'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: '25% of Full Load',
            hi: '25% फुल लोड',
            bn: '২৫% ফুল লোড'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: '100% of Full Load',
            hi: '100% फुल लोड',
            bn: '১০০% ফুল লোড'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: '75% of Full Load',
            hi: '75% फुल लोड',
            bn: '৭৫% ফুল লোড'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Fractional loading for maximum efficiency is x = √(Pi / Pcu(FL)) = √(1 / 4) = 1/2 = 0.50 (50% of full load or 50 kVA).',
        hi: 'अधिकतम दक्षता हेतु लोडिंग अनुपात x = √(Pi / Pcu) = √(1 / 4) = 0.50 (50% लोड)।',
        bn: 'সর্বোচ্চ দক্ষতায় লোডিং অনুপাত x = √(Pi / Pcu) = √(১ / ৪) = ০.৫০ (৫০% লোড)।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'ch6-l15-pq1',
      question: {
        en: 'Explain why the Open-Circuit (OC) test on a transformer is normally conducted on the Low Voltage (LV) side with rated voltage applied, while the Short-Circuit (SC) test is conducted on the High Voltage (HV) side with rated current circulated.',
        hi: 'स्पष्ट कीजिए कि ट्रांसफॉर्मर का ओपन-सर्किट (OC) टेस्ट सामान्यतः LV साइड में रेटेड वोल्टेज लगाकर क्यों किया जाता है, जबकि शॉर्ट-सर्किट (SC) टेस्ट HV साइड में रेटेड करंट प्रवाहित करके क्यों किया जाता है।',
        bn: 'ব্যাখ্যা করো কেন ওপেন-সার্কিট (OC) টেস্ট সাধারণতঃ LV পাশে রেটেড ভোল্টেজ দিয়ে করা হয়, কিন্তু শর্ট-সার্কিট (SC) টেস্ট HV পাশে রেটেড কারেন্ট প্রয়োগ করে সম্পন্ন করা হয়।'
      },
      hint: {
        en: 'Consider safety, instrument measuring ranges, and availability of supply voltages in standard electrical laboratories.',
        hi: 'प्रयोगशाला में उपलब्ध वोल्टेज, मीटर की रेंज तथा विद्युत सुरक्षा पर विचार कीजिए।',
        bn: 'ল্যাবরেটরির নিরাপত্তা, মিটারের পরিমাপ সীমা এবং উপলব্ধ সাপ্লাই ভোল্টেজ বিবেচনা করো।'
      },
      answerKey: {
        en: '1. OC Test on LV Side: The rated LV voltage (e.g., 230 V) is easily available in testing labs and safe to handle. The no-load current is small (2–5%), making it easy to read accurately on standard lab ammeters without requiring dangerous high-voltage sources.\n2. SC Test on HV Side: The rated current on the HV side is much smaller than on the LV side (e.g., 5 A on HV vs 50 A on LV). Standard lab ammeters and rheostats can easily handle 5 A. The required short-circuit test voltage is only 5–10% of rated HV voltage (e.g., 50–100 V), which is safe and easily supplied from a standard variac.',
        hi: '1. LV साइड में OC टेस्ट: 230 V की कम वोल्टेज आसानी से उपलब्ध होती है और सुरक्षित होती है। नो-लोड करंट कम होने से सामान्य अमीटर से नापा जा सकता है।\n2. HV साइड में SC टेस्ट: HV साइड में रेटेड करंट बहुत कम (जैसे 5 A) होता है, जिसे प्रयोगशाला के उपकरण आसानी से संभाल सकते हैं। साथ ही आवश्यक वोल्टेज मात्र 5–10% (सुरक्षित स्तर) होती है।',
        bn: '১. LV পাশে OC টেস্ট: কম ভোল্টেজ (২৩০ V) ল্যাবে সহজলভ্য ও নিরাপদ। নো-লোড কারেন্ট কম হওয়ায় সাধারণ অ্যামিটারে নিখুঁতভাবে মাপা যায়।\n২. HV পাশে SC টেস্ট: HV পাশে রেটেড কারেন্ট অনেক কম থাকে (যেমন ৫০ A এর বদলে ৫ A), যা সাধারণ মিটার দিয়ে সহজে নিয়ন্ত্রণ করা যায়। প্রয়োজনীয় ভোল্টেজ মাত্র ৫–১০% হওয়ায় অত্যন্ত নিরাপদ।'
      }
    },
    {
      id: 'ch6-l15-pq2',
      question: {
        en: 'A 25 kVA, 2200/220 V, 50 Hz single-phase transformer has R1 = 1.75 Ω, X1 = 2.6 Ω on primary and R2 = 0.02 Ω, X2 = 0.03 Ω on secondary. Calculate: 1) Equivalent resistance and reactance referred to primary (R01, X01), 2) Equivalent resistance and reactance referred to secondary (R02, X02), 3) Total copper loss on full load.',
        hi: 'एक 25 kVA, 2200/220 V ट्रांसफॉर्मर में R1 = 1.75 Ω, X1 = 2.6 Ω और R2 = 0.02 Ω, X2 = 0.03 Ω है। ज्ञात कीजिए: 1) प्राइमरी में R01, X01, 2) सेकेंडरी में R02, X02, 3) फुल-लोड कॉपर हानि।',
        bn: 'একটি ২৫ kVA, ২২০০/২২০ V ট্রান্সফর্মারের R1 = ১.৭৫ Ω, X1 = ২.৬ Ω এবং R2 = ০.০২ Ω, X2 = ০.০৩ Ω। নির্ণয় করো: ১) প্রাইমারিতে R01, X01, ২) সেকেন্ডারিতে R02, X02, ৩) ফুল-লোড কপার লস।'
      },
      hint: {
        en: 'Find K = 220 / 2200 = 0.1. R2\' = R2 / K² = 0.02 / 0.01 = 2.0 Ω. I1(FL) = 25000 / 2200 = 11.364 A.',
        hi: 'K = 0.1। R2\' = 0.02 / 0.01 = 2.0 Ω निकालें। फिर R01 = R1 + R2\' और Pcu = I1²·R01 ज्ञात करें।',
        bn: 'K = ০.১। R2\' = ০.০২ / ০.০১ = ২.০ Ω বের করো। এরপর R01 = R1 + R2\' এবং Pcu = I1²·R01 নির্ণয় করো।'
      },
      answerKey: {
        en: '1. Transformation Ratio K = 220 / 2200 = 0.1 (K² = 0.01, 1/K² = 100).\n   Referred to Primary:\n   - R01 = R1 + R2 / K² = 1.75 + (0.02 × 100) = 1.75 + 2.00 = 3.75 Ω.\n   - X01 = X1 + X2 / K² = 2.60 + (0.03 × 100) = 2.60 + 3.00 = 5.60 Ω.\n   - Z01 = √(3.75² + 5.60²) = √(14.0625 + 31.36) = √45.4225 = 6.74 Ω.\n\n2. Referred to Secondary:\n   - R02 = R01 × K² = 3.75 × 0.01 = 0.0375 Ω (or R2 + K²·R1 = 0.02 + 0.0175 = 0.0375 Ω).\n   - X02 = X01 × K² = 5.60 × 0.01 = 0.0560 Ω.\n   - Z02 = 6.74 × 0.01 = 0.0674 Ω.\n\n3. Full-Load Rated Primary Current I1 = 25,000 VA / 2200 V = 11.3636 A.\n   Full-load Copper Loss = I1² × R01 = (11.3636)² × 3.75 Ω = 129.13 × 3.75 = 484.24 W.',
        hi: '1. प्राइमरी में: R01 = 3.75 Ω, X01 = 5.60 Ω, Z01 = 6.74 Ω।\n2. सेकेंडरी में: R02 = 0.0375 Ω, X02 = 0.0560 Ω, Z02 = 0.0674 Ω।\n3. फुल-लोड कॉपर हानि = (11.364)² × 3.75 = 484.24 W।',
        bn: '১. প্রাইমারিতে: R01 = ৩.৭৫ Ω, X01 = ৫.৬০ Ω, Z01 = ৬.৭৪ Ω।\n২. সেকেন্ডারিতে: R02 = ০.০৩৭৫ Ω, X02 = ০.০৫৬০ Ω, Z02 = ০.০৬৭৪ Ω।\n৩. ফুল-লোড কপার লস = (১১.৩৬৪)² × ৩.৭৫ = ৪৮৪.২৪ W।'
      }
    }
  ]
};
