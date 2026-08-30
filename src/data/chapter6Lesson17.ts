import { Lesson } from '../types';

export const LESSON_TRANSFORMER_TESTS: Lesson = {
  id: 'lsn-ch6-transformer-tests',
  topicId: 'ch6-transformer-tests',
  chapterId: 'ch-electrical-machines',
  order: 5,
  title: {
    en: 'Transformer Testing: OC, SC, Sumpner\'s & Polarity Tests',
    hi: 'ट्रांसफॉर्मर परीक्षण: ओपन सर्किट, शॉर्ट सर्किट, संपटनर एवं पोलैरिटी टेस्ट',
    bn: 'ট্রান্সফর্মার টেস্টিং: ওপেন সার্কিট, শর্ট সার্কিট, স্যাম্পনার ও পোলারিটি টেস্ট'
  },
  description: {
    en: 'Comprehensive laboratory and industrial testing methodology for transformers: Open-Circuit (OC) test for core loss and shunt branch parameters (Rc, Xm), Short-Circuit (SC) test for full-load copper loss and equivalent series impedance (Req, Xeq), predetermination of efficiency and voltage regulation without actual loading, Sumpner’s regenerative back-to-back heat run test for temperature rise, and Polarity testing (additive vs. subtractive) for parallel banking.',
    hi: 'ट्रांसफॉर्मरों की प्रयोगशाला एवं औद्योगिक परीक्षण विधियाँ: ओपन-सर्किट (OC) टेस्ट द्वारा कोर हानि एवं शंट शाखा (Rc, Xm) का निर्धारण, शॉर्ट-सर्किट (SC) टेस्ट द्वारा कॉपर हानि एवं समतुल्य प्रतिबाधा (Req, Xeq) की गणना, बिना वास्तविक लोड लगाए दक्षता व वोल्टेज रेगुलेशन का पूर्वानुमान, संपटनर (Sumpner\'s) बैक-टू-बैक हीट रन टेस्ट, तथा समानांतर संयोजन हेतु एडिटिव व सब्ट्रैक्टिव पोलैरिटी परीक्षण।',
    bn: 'ট্রান্সফর্মারের গবেষণাগার ও শিল্পভিত্তিক পরীক্ষা পদ্ধতি: ওপেন-সার্কিট (OC) টেস্টের মাধ্যমে কোর লস ও সমান্তরাল শাখা (Rc, Xm) নির্ণয়, শর্ট-সার্কিট (SC) টেস্টের মাধ্যমে কপার লস ও তুল্য ইম্পিড্যান্স (Req, Xeq) নির্ণয়, কোনো বাস্তব লোড ছাড়াই দক্ষতা ও ভোল্টেজ রেগুলেশনের পূর্বাভাস, স্যাম্পনার ব্যাক-টু-ব্যাক তাপমাত্রা বৃদ্ধি পরীক্ষা এবং পোলারিটি টেস্ট।'
  },
  diagrams: [
    {
      id: 'diag-trans-oc-sc-testing',
      svgType: 'transformer-tests',
      title: {
        en: 'Transformer Test Setups: Open Circuit (OC) and Short Circuit (SC) Configurations',
        hi: 'ट्रांसफॉर्मर टेस्ट सेटअप: ओपन सर्किट (OC) एवं शॉर्ट सर्किट (SC) परिपथ',
        bn: 'ট্রান্সফর্মার টেস্ট সেটআপ: ওপেন সার্কিট (OC) ও শর্ট সার্কিট (SC) সংযোগ চিত্র'
      },
      caption: {
        en: 'Instrument placement for OC test (instruments on Low-Voltage LV side with High-Voltage HV side open) and SC test (instruments on HV side with LV side short-circuited by a thick copper link).',
        hi: 'OC टेस्ट (LV साइड पर उपकरण, HV साइड ओपन) एवं SC टेस्ट (HV साइड पर उपकरण, LV साइड शॉर्ट-सर्किटेड) हेतु मीटर संयोजन।',
        bn: 'OC টেস্ট (LV প্রান্তে মিটার, HV প্রান্ত ওপেন) এবং SC টেস্ট (HV প্রান্তে মিটার, LV প্রান্ত কপার স্ট্রিপ দিয়ে শর্ট-সার্কিট) সার্কিট বিন্যাস।'
      }
    }
  ],
  estimatedMinutes: 50,
  easyExplanation: {
    en: 'Directly loading large power transformers (e.g. 50 MVA) in a factory to measure efficiency and heating is practically impossible because it wastes tremendous amounts of electric energy and requires massive load banks. Instead, electrical engineers perform two simple indirect tests requiring only 1% to 5% of rated power: (1) Open-Circuit (OC) Test, performed at rated voltage with the secondary open to measure constant core/iron loss and calculate magnetizing parameters (Rc, Xm), and (2) Short-Circuit (SC) Test, performed at a tiny reduced voltage (5% to 8%) with the secondary shorted to circulate rated full-load current, measuring copper loss (I²R) and equivalent winding resistance/reactance (Req, Xeq). Together, these two tests allow complete calculation of efficiency and voltage regulation at any load and power factor. Additionally, Sumpner\'s back-to-back test allows full-load thermal heat runs using two identical transformers with zero net power wastage, while Polarity tests determine the relative terminal polarities necessary before connecting transformers in parallel.',
    hi: 'विशाल पावर ट्रांसफॉर्मरों (जैसे 50 MVA) पर सीधे भारी लोड लगाकर दक्षता मापना अव्यावहारिक है क्योंकि इसमें भारी मात्रा में विद्युत ऊर्जा बर्बाद होगी। इसलिए इंजीनियर दो सरल अप्रत्यक्ष परीक्षण करते हैं जिनमें कुल रेटिंग की केवल 1% से 5% शक्ति लगती है: (1) ओपन-सर्किट (OC) टेस्ट: इसे रेटेड वोल्टेज पर सेकेंडरी को खुला रखकर किया जाता है, जिससे स्थिर कोर हानि तथा मैग्नेटाइजिंग शाखा (Rc, Xm) का मान मिलता है। (2) शॉर्ट-सर्किट (SC) टेस्ट: इसमें सेकेंडरी को शॉर्ट करके बहुत कम वोल्टेज (5-8%) देकर फुल-लोड करंट प्रवाहित की जाती है, जिससे कॉपर हानि तथा वाइंडिंग प्रतिरोध व रिएक्टेंस (Req, Xeq) ज्ञात होते हैं। इन दोनों टेस्टों से किसी भी लोड पर दक्षता और वोल्टेज रेगुलेशन का सटीक पूर्वानुमान लगाया जा सकता है। संपटनर (Sumpner\'s) टेस्ट बिना ऊर्जा बर्बाद किए तापमान वृद्धि की जाँच करता है, और पोलैरिटी टेस्ट यह सुनिश्चित करता है कि समानांतर संचालन में सही सिरे आपस में जुड़े हैं।',
    bn: 'বিশাল পাওয়ার ট্রান্সফর্মারের (যেমন ৫০ MVA) ওপর সরাসরি বাস্তব লোড চাপিয়ে পরীক্ষা করা অসম্ভব ও অপচয়মূলক। তাই প্রকৌশলীরা দুটি পরোক্ষ টেস্ট করেন যেখানে রেটেড ক্ষমতার মাত্র ১% থেকে ৫% বিদ্যুৎ লাগে: (১) ওপেন সার্কিট (OC) টেস্ট: এতে সেকেন্ডারি খোলা রেখে স্বাভাবিক রেটেড ভোল্টেজ প্রয়োগ করে স্থির আয়রন লস ও নো-লোড প্যারামিটার (Rc, Xm) মাপা হয়। (২) শর্ট সার্কিট (SC) টেস্ট: এতে সেকেন্ডারি শর্ট করে খুব কম ভোল্টেজ (৫-৮%) দিয়ে ফুল-লোড কারেন্ট প্রবাহিত করে কপার লস ও সিরিজ ইম্পিড্যান্স (Req, Xeq) মাপা হয়। এই দুটি টেস্টের ডেটা ব্যবহার করে যেকোনো লোড ও পাওয়ার ফ্যাক্টরে কর্মদক্ষতা ও ভোল্টেজ রেগুলেশন পূর্বনির্ধারণ করা যায়। স্যাম্পনার্স টেস্ট দিয়ে তাপমাত্রা বৃদ্ধির পরীক্ষা করা হয় এবং পোলারিটি টেস্ট দিয়ে প্যারালাল অপারেশনের সঠিক সংযোগ নির্ধারণ করা হয়।'
  },
  detailedExplanation: {
    en: `1. Purpose of Standard Transformer Testing:
- Determine efficiency without the cost and heat dissipation of actual full-load testing.
- Predetermine percentage voltage regulation at any prospective load and power factor.
- Extract equivalent circuit parameters (R1, R2, X1, X2, Rc, Xm).
- Verify thermal temperature rise limits and insulation integrity under dielectric stress.

2. Open Circuit (OC) Test (No-Load Test):
A. Connections & Practical Layout:
- Conducted on the Low Voltage (LV) winding because rated LV voltage (e.g. 230 V) is easily available and safe for meters.
- The High Voltage (HV) winding is kept completely open-circuited and securely insulated.
- Instruments: Voltmeter (V0), Ammeter (I0 - low range), and Low Power Factor (LPF) Wattmeter (W0).
B. Physics & Measurement Analysis:
- Since secondary is open (I2 = 0), only no-load current I0 flows (typically 2% to 5% of rated full-load current).
- Primary copper loss at no load is I0²·R1, which is negligibly small (< 0.25% of full-load copper loss).
- Therefore, the wattmeter reading W0 measures purely the constant Core / Iron Loss: W0 ≈ P_core = P_h + P_e.
C. Parameter Extraction Equations:
- No-load Power Factor: cos(Φ0) = W0 / (V0 · I0)
- Working / Core-loss Current Component: I_w = I0 · cos(Φ0)
- Magnetizing Current Component: I_m = I0 · sin(Φ0) = √(I0² - I_w²)
- Core Loss Shunt Resistance (referred to LV): R_c = V0 / I_w = V0² / W0
- Magnetizing Shunt Reactance (referred to LV): X_m = V0 / I_m

3. Short Circuit (SC) Test (Impedance Test):
A. Connections & Practical Layout:
- Conducted on the High Voltage (HV) winding because rated HV current is smaller and standard meters can handle it easily.
- The Low Voltage (LV) winding is solidly short-circuited using a thick copper bar with negligible resistance.
- Instruments: Voltmeter (V_sc - low range), Ammeter (I_sc - rated current range), and Standard Unity/Medium PF Wattmeter (W_sc).
B. Physics & Measurement Analysis:
- The applied voltage V_sc is gradually increased using an autotransformer (variac) until the ammeter reads rated full-load HV current (I_sc = I_FL).
- Required voltage V_sc is very small: typically only 3% to 8% of rated primary voltage.
- Because core flux Φ is proportional to applied voltage (B_m ∝ V_sc), the iron loss under SC test is proportional to V_sc² and is completely negligible (< 0.5% of normal iron loss).
- Therefore, the wattmeter reading W_sc represents purely the Full-Load Copper Loss of both windings: W_sc ≈ P_cu(FL) = I_sc² · R_eq.
C. Parameter Extraction Equations (referred to HV side):
- Equivalent Series Impedance: Z_eq(HV) = V_sc / I_sc
- Equivalent Series Resistance: R_eq(HV) = W_sc / I_sc²
- Equivalent Series Leakage Reactance: X_eq(HV) = √(Z_eq(HV)² - R_eq(HV)²)
- Short Circuit Power Factor: cos(Φ_sc) = R_eq(HV) / Z_eq(HV) = W_sc / (V_sc · I_sc)

4. Sumpner’s Test (Back-to-Back Heat Run Test):
- Requires two identical transformers (T_A and T_B).
- Primaries are connected in parallel to rated supply voltage (provides normal core flux and iron loss in both units).
- Secondaries are connected in series opposition (phase opposition so induced voltages cancel, resulting in zero net secondary circulating voltage at no-load).
- An auxiliary low-voltage injection transformer injects rated current through the series-connected secondaries.
- Result: Both transformers simultaneously experience full core loss and full copper loss continuously for 8 to 24 hours. The temperature rise of oil and windings reaches thermal equilibrium, while drawing only the actual internal loss power from the utility supply!

5. Transformer Polarity Test:
- Determines relative instantaneous polarity of primary and secondary terminals.
- Standard convention: When terminal H1 is positive with respect to H2, terminal X1 is positive with respect to X2.
- Test Procedure: Connect one primary terminal (H1) to one secondary terminal (X1) with a jumper. Apply test AC voltage V1 across H1-H2 and measure voltage V3 across H2-X2:
  * Subtractive Polarity: V3 = V1 - V2 (Standard for power transformers).
  * Additive Polarity: V3 = V1 + V2 (Common in small low-voltage distribution units).
- Crucial for correct parallel connection and three-phase delta/star bank wiring.`,
    hi: `1. ट्रांसफॉर्मर परीक्षण के उद्देश्य:
- बिना वास्तविक लोड लगाए दक्षता व वोल्टेज रेगुलेशन ज्ञात करना।
- समतुल्य परिपथ के पैरामीटर (Req, Xeq, Rc, Xm) निकालना।
- तापमान वृद्धि एवं इंसुलेशन क्षमता की जाँच करना।

2. ओपन सर्किट (OC) टेस्ट:
- LV साइड पर मीटर लगाए जाते हैं तथा HV साइड को खुला (open) रखा जाता है।
- रेटेड वोल्टेज V0 दी जाती है। नो-लोड करंट I0 बहुत कम (2-5%) होती है।
- वाटमीटर W0 केवल स्थिर कोर हानि (Pcore) मापता है: W0 = Pcore।
- सूत्र:
  * cosΦ0 = W0 / (V0 · I0)
  * Iw = I0 · cosΦ0,  Im = √(I0² - Iw²)
  * Rc = V0 / Iw = V0² / W0,  Xm = V0 / Im

3. शॉर्ट सर्किट (SC) टेस्ट:
- HV साइड पर मीटर लगाए जाते हैं तथा LV साइड को मोटे कॉपर लिंक से शॉर्ट किया जाता है।
- ऑटोट्रांसफॉर्मर से 3-8% कम वोल्टेज (Vsc) देकर फुल-लोड करंट (Isc) प्रवाहित की जाती है।
- वाटमीटर Wsc कुल फुल-लोड कॉपर लॉस मापता है: Wsc = Pcu(FL)।
- सूत्र (HV के संदर्भ में):
  * Zeq = Vsc / Isc
  * Req = Wsc / Isc²
  * Xeq = √(Zeq² - Req²)

4. संपटनर (Sumpner's) बैक-टू-बैक टेस्ट:
- दो समरूप (identical) ट्रांसफॉर्मरों की आवश्यकता होती है।
- प्राइमरी को रेटेड सप्लाई के समानांतर तथा सेकेंडरी को सीरीज अपोजिशन में जोड़ा जाता है।
- फुल-लोड तापमान वृद्धि की जाँच बिना ऊर्जा बर्बाद किए की जाती है।

5. पोलैरिटी टेस्ट:
- एडिटिव पोलैरिटी: V3 = V1 + V2
- सब्ट्रैक्टिव पोलैरिटी: V3 = V1 - V2 (पावर ट्रांसफॉर्मर में मानक)।`,
    bn: `১. ট্রান্সফর্মার টেস্টের উদ্দেশ্য:
- বাস্তব লোড ছাড়া কর্মদক্ষতা ও ভোল্টেজ রেগুলেশন নির্ণয়।
- সমতুল্য বর্তনীর প্যারামিটার (Req, Xeq, Rc, Xm) নির্ধারণ।
- তাপমাত্রা বৃদ্ধি ও ইনসুলেশন পরীক্ষা।

২. ওপেন সার্কিট (OC) টেস্ট:
- LV প্রান্তে মিটার যুক্ত থাকে এবং HV প্রান্ত উন্মুক্ত রাখা হয়।
- রেটেড ভোল্টেজ V0 প্রয়োগ করা হয়। নো-লোড কারেন্ট I0 খুব কম (২-৫%) হওয়ায় কপার লস নগণ্য।
- ওয়াটমিটার W0 মূলত স্থির আয়রন লস পরিমাপ করে: W0 = Pcore।
- সমীকরণ:
  * cosΦ0 = W0 / (V0 · I0)
  * Iw = I0 · cosΦ0,  Im = √(I0² - Iw²)
  * Rc = V0 / Iw = V0² / W0,  Xm = V0 / Im

৩. শর্ট সার্কিট (SC) টেস্ট:
- HV প্রান্তে মিটার যুক্ত থাকে এবং LV প্রান্ত পুরু তামার তার দিয়ে শর্ট করা হয়।
- খুব কম ভোল্টেজ (Vsc: ৩-৮%) প্রয়োগ করে ফুল-লোড কারেন্ট Isc প্রবাহিত করা হয়।
- ওয়াটমিটার Wsc ফুল-লোড কপার লস পরিমাপ করে: Wsc = Pcu(FL)।
- সমীকরণ:
  * Zeq = Vsc / Isc
  * Req = Wsc / Isc²
  * Xeq = √(Zeq² - Req²)

৪. স্যাম্পনার্স ব্যাক-টু-ব্যাক টেস্ট:
- দুটি অভিন্ন ট্রান্সফরমারের মাধ্যমে বিদ্যুৎ অপচয় না করে ফুল-লোড তাপমাত্রা বৃদ্ধি নির্ণয় করা হয়।

৫. পোলারিটি টেস্ট:
- সাবট্র্যাক্টিভ পোলারিটি: V3 = V1 - V2 (স্ট্যান্ডার্ড)।
- অ্যাডিটিভ পোলারিটি: V3 = V1 + V2।`
  },
  formulas: [
    {
      id: 'f-trans-oc-params',
      symbol: 'R_c, X_m, cosΦ0',
      expression: 'cosΦ0 = W0 / (V0·I0),  I_w = I0·cosΦ0,  I_m = I0·sinΦ0,  R_c = V0 / I_w,  X_m = V0 / I_m',
      formula: '\\cos\\phi_0 = \\frac{W_0}{V_0 I_0}, \\quad I_w = I_0 \\cos\\phi_0, \\quad I_m = I_0 \\sin\\phi_0, \\quad R_c = \\frac{V_0}{I_w} = \\frac{V_0^2}{W_0}, \\quad X_m = \\frac{V_0}{I_m}',
      title: {
        en: 'Open-Circuit Shunt Magnetizing Parameters (LV Referred)',
        hi: 'ओपन-सर्किट शंट मैग्नेटाइजिंग शाखा पैरामीटर',
        bn: 'ওপেন সার্কিট শান্ট ম্যাগনেটাইজিং শাখা প্যারামিটার'
      },
      description: {
        en: 'Extracts core-loss resistance (Rc) and magnetizing reactance (Xm) from no-load test readings.',
        hi: 'नो-लोड टेस्ट रीडिंग से कोर लॉस प्रतिरोध और मैग्नेटाइजिंग रिएक्टेंस की गणना।',
        bn: 'নো-লোড টেস্ট পাঠ থেকে কোর লস রোধ ও ম্যাগনেটাইজিং রিঅ্যাকট্যান্স নির্ণয়।'
      }
    },
    {
      id: 'f-trans-sc-params',
      symbol: 'Z_eq, R_eq, X_eq',
      expression: 'Z_eq = V_sc / I_sc,  R_eq = W_sc / I_sc²,  X_eq = √(Z_eq² - R_eq²),  P_cu(FL) = W_sc',
      formula: 'Z_{eq} = \\frac{V_{sc}}{I_{sc}}, \\quad R_{eq} = \\frac{W_{sc}}{I_{sc}^2}, \\quad X_{eq} = \\sqrt{Z_{eq}^2 - R_{eq}^2}, \\quad P_{cu(\\text{FL})} = W_{sc}',
      title: {
        en: 'Short-Circuit Series Equivalent Impedance Parameters (HV Referred)',
        hi: 'शॉर्ट-सर्किट सीरीज समतुल्य प्रतिबाधा पैरामीटर',
        bn: 'শর্ট সার্কিট সিরিজ তুল্য ইম্পিড্যান্স প্যারামিটার'
      },
      description: {
        en: 'Extracts total winding resistance (Req), leakage reactance (Xeq), and full-load copper loss from SC test.',
        hi: 'SC टेस्ट से कुल वाइंडिंग प्रतिरोध, लीकेज रिएक्टेंस और फुल-लोड कॉपर लॉस की गणना।',
        bn: 'SC টেস্ট থেকে মোট ওয়াইন্ডিং রোধ, লিকেজ রিঅ্যাকট্যান্স এবং ফুল-লোড কপার লস নির্ণয়।'
      }
    },
    {
      id: 'f-trans-predetermined-eff',
      symbol: 'η(x, cosΦ)',
      expression: 'η = [ (x · S_rated · cosΦ) / (x · S_rated · cosΦ + W_0 + x² · W_sc) ] × 100%',
      formula: '\\eta = \\frac{x \\cdot S_{\\text{rated}} \\cdot \\cos\\phi}{x \\cdot S_{\\text{rated}} \\cdot \\cos\\phi + W_0 + x^2 W_{sc}} \\times 100\\%',
      title: {
        en: 'Predetermined Efficiency from OC and SC Test Readings',
        hi: 'OC एवं SC टेस्ट पाठ से पूर्वानुमानित दक्षता',
        bn: 'OC ও SC টেস্ট থেকে পূর্বনির্ধারিত কর্মদক্ষতা'
      },
      description: {
        en: 'Calculates efficiency at any load fraction x and power factor cosΦ directly from W0 (iron loss) and Wsc (full-load copper loss).',
        hi: 'W0 और Wsc द्वारा किसी भी भार पर ट्रांसफॉर्मर दक्षता की सटीक गणना।',
        bn: 'W0 এবং Wsc ব্যবহার করে যেকোনো লোড ও পাওয়ার ফ্যাক্টরে দক্ষতার নির্ভুল গণনা।'
      }
    },
    {
      id: 'f-trans-polarity-equation',
      symbol: 'V_test',
      expression: 'Additive: V3 = V1 + V2;  Subtractive: V3 = V1 - V2',
      formula: 'V_3 = V_1 + V_2 \\quad (\\text{Additive}), \\qquad V_3 = V_1 - V_2 \\quad (\\text{Subtractive})',
      title: {
        en: 'Transformer Polarity Test Voltage Relation',
        hi: 'ट्रांसफॉर्मर पोलैरिटी टेस्ट वोल्टेज संबंध',
        bn: 'ট্রান্সফর্মার পোলারিটি টেস্ট ভোল্টেজ সম্পর্ক'
      },
      description: {
        en: 'Identifies winding orientation for safe parallel banking and three-phase interconnection.',
        hi: 'समानांतर संयोजन एवं थ्री-फेज कनेक्शन हेतु वाइंडिंग दिशा की पहचान।',
        bn: 'প্যারালাল সংযোগের জন্য ওয়াইন্ডিং দিক ও পোলারিটি শনাক্তকরণ।'
      }
    }
  ],
  solvedExamples: [
    {
      id: 'ex-trans-oc-sc-complete',
      problem: {
        en: 'A 50 kVA, 2400/240 V, 50 Hz single-phase transformer gave the following laboratory test results:\n- OC Test (Instruments on LV side, HV open): V0 = 240 V, I0 = 4.5 A, W0 = 320 W\n- SC Test (Instruments on HV side, LV shorted): Vsc = 80 V, Isc = 20.83 A, Wsc = 750 W\nCalculate: (a) The equivalent circuit parameters referred to both LV and HV sides, (b) Efficiency at full load, 0.8 power factor lagging, (c) Percentage voltage regulation at full load, 0.8 power factor lagging.',
        hi: 'एक 50 kVA, 2400/240 V ट्रांसफॉर्मर के टेस्ट परिणाम निम्न हैं:\n- OC टेस्ट (LV साइड): V0 = 240 V, I0 = 4.5 A, W0 = 320 W\n- SC टेस्ट (HV साइड): Vsc = 80 V, Isc = 20.83 A, Wsc = 750 W\nज्ञात कीजिए: (a) समतुल्य परिपथ पैरामीटर, (b) 0.8 लैगिंग pf पर फुल-लोड दक्षता, (c) 0.8 लैगिंग pf पर वोल्टेज रेगुलेशन।',
        bn: 'একটি ৫০ kVA, ২৪০০/২৪০ V ট্রান্সফর্মারের টেস্ট ফলাফল:\n- OC টেস্ট (LV প্রান্তে): V0 = ২৪০ V, I0 = ৪.৫ A, W0 = ৩২০ W\n- SC টেস্ট (HV প্রান্তে): Vsc = ৮০ V, Isc = ২০.৮৩ A, Wsc = ৭৫০ W\nনির্ণয় করো: (a) সমতুল্য সার্কিট প্যারামিটার, (b) ০.৮ ল্যাগিং pf-এ ফুল-লোড দক্ষতা, (c) ০.৮ ল্যাগিং pf-এ ভোল্টেজ রেগুলেশন।'
      },
      givenValues: {
        'Rating S': '50 kVA = 50,000 VA',
        'V1 / V2': '2400 V / 240 V ==> Turns Ratio a = N1/N2 = 2400/240 = 10, Transformation Ratio K = 1/10 = 0.1',
        'OC Test Data (LV side)': 'V0 = 240 V, I0 = 4.5 A, W0 = 320 W (Iron Loss P_core = 320 W)',
        'SC Test Data (HV side)': 'Vsc = 80 V, Isc = 20.83 A (= Rated HV current: 50,000/2400 = 20.833 A), Wsc = 750 W (P_cu(FL) = 750 W)'
      },
      solution: {
        en: 'Step 1: Extract Shunt Parameters from OC Test (Referred to LV side - subscript 2):\n- No-load power factor: cos(Φ0) = W0 / (V0 · I0) = 320 / (240 × 4.5) = 320 / 1080 = 0.2963\n- sin(Φ0) = √(1 - 0.2963²) = √(1 - 0.08779) = 0.9551\n- Core loss current: I_w = I0 · cos(Φ0) = 4.5 × 0.2963 = 1.333 A\n- Magnetizing current: I_m = I0 · sin(Φ0) = 4.5 × 0.9551 = 4.298 A\n- Shunt Core Resistance (LV): R_c2 = V0 / I_w = 240 / 1.333 = 180.0 Ω (or R_c2 = V0² / W0 = 240² / 320 = 180.0 Ω)\n- Shunt Magnetizing Reactance (LV): X_m2 = V0 / I_m = 240 / 4.298 = 55.84 Ω\n- Referred to HV side (scaled by a² = 10² = 100):\n  * R_c1 = a² · R_c2 = 100 × 180.0 = 18,000 Ω = 18.0 kΩ\n  * X_m1 = a² · X_m2 = 100 × 55.84 = 5,584 Ω = 5.584 kΩ.\n\nStep 2: Extract Series Parameters from SC Test (Referred to HV side - subscript 1):\n- Z_eq1 = Vsc / Isc = 80 / 20.83 = 3.8406 Ω\n- R_eq1 = Wsc / Isc² = 750 / (20.83)² = 750 / 433.89 = 1.7285 Ω\n- X_eq1 = √(Z_eq1² - R_eq1²) = √(3.8406² - 1.7285²) = √(14.750 - 2.988) = √11.762 = 3.4296 Ω\n- Referred to LV side (scaled by K² = 1/100 = 0.01):\n  * R_eq2 = R_eq1 / 100 = 0.01729 Ω\n  * X_eq2 = X_eq1 / 100 = 0.03430 Ω\n  * Z_eq2 = Z_eq1 / 100 = 0.03841 Ω.\n\nStep 3: Predetermine Full-Load Efficiency at 0.8 pf lagging:\n- Active Output: P_out = 50 kVA × 0.8 = 40.0 kW = 40,000 W\n- Total Losses: P_loss = W0 + Wsc = 320 W + 750 W = 1,070 W = 1.070 kW\n- Input: P_in = 40,000 + 1,070 = 41,070 W\n- Efficiency η = (40,000 / 41,070) × 100% = 97.394% ≈ 97.39%.\n\nStep 4: Calculate Full-Load Voltage Regulation at 0.8 pf lagging:\n- Using HV side parameters: I1 = 20.83 A, cosΦ = 0.8, sinΦ = 0.6, V1 = 2400 V\n- Primary Voltage Drop: ΔV1 = I1·R_eq1·cosΦ + I1·X_eq1·sinΦ\n  ΔV1 = (20.83 × 1.7285 × 0.8) + (20.83 × 3.4296 × 0.6) = 28.80 + 42.86 = 71.66 V\n- %VR = (ΔV1 / V1) × 100% = (71.66 / 2400) × 100% = 2.986% ≈ 2.99%.',
        hi: 'Step 1: OC टेस्ट (LV साइड):\n- Rc2 = 240² / 320 = 180.0 Ω,  Rc1 = 18000 Ω\n- Xm2 = 55.84 Ω,  Xm1 = 5584 Ω\n\nStep 2: SC टेस्ट (HV साइड):\n- Zeq1 = 80 / 20.83 = 3.84 Ω\n- Req1 = 750 / (20.83)² = 1.73 Ω,  Req2 = 0.0173 Ω\n- Xeq1 = √(3.84² - 1.73²) = 3.43 Ω,  Xeq2 = 0.0343 Ω\n\nStep 3: फुल लोड दक्षता (0.8 pf):\n- Pout = 40000 W, Ploss = 320 + 750 = 1070 W\n- η = (40000 / 41070) × 100 = 97.39%\n\nStep 4: वोल्टेज रेगुलेशन (0.8 pf):\n- ΔV1 = (20.83 × 1.73 × 0.8) + (20.83 × 3.43 × 0.6) = 71.66 V\n- %VR = (71.66 / 2400) × 100 = 2.99%',
        bn: 'ধাপ ১: OC টেস্ট (LV):\n- Rc2 = ১৮০.০ Ω (Rc1 = ১৮০০০ Ω)\n- Xm2 = ৫৫.৮৪ Ω (Xm1 = ৫৫৮৪ Ω)\n\nধাপ ২: SC টেস্ট (HV):\n- Zeq1 = ৩.৮৪ Ω, Req1 = ১.৭৩ Ω, Xeq1 = ৩.৪৩ Ω\n- LV রেফার্ড: Req2 = ০.০১৭৩ Ω, Xeq2 = ০.০৩৪৩ Ω\n\nধাপ ৩: ফুল লোড দক্ষতা (০.৮ pf):\n- Pout = ৪০০০০ W, Ploss = ৩২০ + ৭৫০ = ১০৭০ W\n- η = (৪০০০০ / ৪১০৭০) × ১০০ = ৯৭.৩৯%\n\nধাপ ৪: ভোল্টেজ রেগুলেশন:\n- ΔV1 = ৭১.৬৬ V ==> %VR = (৭১.৬৬ / ২৪০০) × ১০০ = ২.৯৯%'
      },
      finalAnswer: {
        en: 'Parameters (HV): Rc1=18.0 kΩ, Xm1=5.58 kΩ, Req1=1.73 Ω, Xeq1=3.43 Ω; Efficiency = 97.39%; Voltage Regulation = 2.99%',
        hi: 'HV पैरामीटर: Rc1=18.0 kΩ, Xm1=5.58 kΩ, Req1=1.73 Ω, Xeq1=3.43 Ω; दक्षता = 97.39%; वोल्टेज रेगुलेशन = 2.99%',
        bn: 'HV প্যারামিটার: Rc1=১৮.০ kΩ, Xm1=৫.৫৮ kΩ, Req1=১.৭৩ Ω, Xeq1=৩.৪৩ Ω; দক্ষতা = ৯৭.৩৯%; ভোল্টেজ রেগুলেশন = ২.৯৯%'
      }
    },
    {
      id: 'ex-trans-oc-test-calc',
      problem: {
        en: 'During an open-circuit test on a 10 kVA, 2000/200 V transformer, the following readings were obtained on the 200 V winding: V0 = 200 V, I0 = 1.2 A, W0 = 90 W. Calculate the no-load power factor, core loss current Iw, magnetizing current Im, and shunt branch parameters (Rc and Xm) referred to both the LV and HV windings.',
        hi: '10 kVA, 2000/200 V ट्रांसफॉर्मर के 200 V वाइंडिंग पर OC टेस्ट में निम्न मान मिले: V0 = 200 V, I0 = 1.2 A, W0 = 90 W। नो-लोड पावर फैक्टर, कोर लॉस करंट Iw, मैग्नेटाइजिंग करंट Im, एवं LV व HV दोनों साइड के शंट पैरामीटर ज्ञात कीजिए।',
        bn: 'একটি ১০ kVA, ২০০০/২০০ V ট্রান্সফর্মারের ২০০ V ওয়াইন্ডিংয়ে OC টেস্টে প্রাপ্ত মান: V0 = ২০০ V, I0 = ১.২ A, W0 = ৯০ W। নো-লোড পাওয়ার ফ্যাক্টর, Iw, Im এবং LV ও HV উভয় প্রান্তের শান্ট প্যারামিটার নির্ণয় করো।'
      },
      givenValues: {
        'Rating': '10 kVA, V1 = 2000 V (HV), V2 = 200 V (LV)',
        'Turns Ratio a': 'N1 / N2 = 2000 / 200 = 10 (a² = 100)',
        'Test Readings': 'V0 = 200 V, I0 = 1.2 A, W0 = 90 W'
      },
      solution: {
        en: 'Step 1: Calculate No-load Power Factor:\n- cos(Φ0) = W0 / (V0 · I0) = 90 / (200 × 1.2) = 90 / 240 = 0.375\n- sin(Φ0) = √(1 - 0.375²) = √(1 - 0.1406) = √0.8594 = 0.9270.\n\nStep 2: Calculate Component Currents:\n- Core loss component: I_w = I0 · cos(Φ0) = 1.2 × 0.375 = 0.45 A\n- Magnetizing component: I_m = I0 · sin(Φ0) = 1.2 × 0.9270 = 1.1124 A ≈ 1.112 A.\n\nStep 3: Calculate Parameters referred to LV side (200 V):\n- R_c(LV) = V0 / I_w = 200 / 0.45 = 444.44 Ω (or V0² / W0 = 200² / 90 = 40,000 / 90 = 444.44 Ω)\n- X_m(LV) = V0 / I_m = 200 / 1.1124 = 179.79 Ω ≈ 179.8 Ω.\n\nStep 4: Calculate Parameters referred to HV side (2000 V):\n- R_c(HV) = a² · R_c(LV) = 100 × 444.44 = 44,444 Ω = 44.44 kΩ\n- X_m(HV) = a² · X_m(LV) = 100 × 179.79 = 17,979 Ω = 17.98 kΩ.',
        hi: 'Step 1: cosΦ0 = 90 / (200 × 1.2) = 0.375\nStep 2: Iw = 0.45 A,  Im = 1.112 A\nStep 3: LV साइड: Rc(LV) = 444.44 Ω,  Xm(LV) = 179.8 Ω\nStep 4: HV साइड: Rc(HV) = 44.44 kΩ,  Xm(HV) = 17.98 kΩ',
        bn: 'ধাপ ১: cosΦ0 = ৯০ / ২৪০ = ০.৩৭৫\nধাপ ২: Iw = ০.৪৫ A, Im = ১.১১২ A\nধাপ ৩: LV রেফার্ড: Rc(LV) = ৪৪৪.৪৪ Ω, Xm(LV) = ১৭৯.৮ Ω\nধাপ ৪: HV রেফার্ড: Rc(HV) = ৪৪.৪৪ kΩ, Xm(HV) = ১৭.৯৮ kΩ'
      },
      finalAnswer: {
        en: 'cosΦ0 = 0.375, Iw = 0.45 A, Im = 1.112 A; LV: Rc = 444.4 Ω, Xm = 179.8 Ω; HV: Rc = 44.44 kΩ, Xm = 17.98 kΩ',
        hi: 'cosΦ0 = 0.375, Iw = 0.45 A, Im = 1.112 A; LV: Rc = 444.4 Ω, Xm = 179.8 Ω; HV: Rc = 44.44 kΩ, Xm = 17.98 kΩ',
        bn: 'cosΦ0 = ০.৩৭৫, Iw = ০.৪৫ A, Im = ১.১১২ A; LV: Rc = ৪৪৪.৪ Ω, Xm = ১৭৯.৮ Ω; HV: Rc = ৪৪.৪৪ kΩ, Xm = ১৭.৯৮ kΩ'
      }
    },
    {
      id: 'ex-trans-sc-test-calc',
      problem: {
        en: 'A 20 kVA, 2200/220 V, 50 Hz transformer was subjected to a short-circuit test with instruments connected on the HV side. The instruments recorded: Vsc = 95 V, Isc = 9.09 A (full-load HV current), and Wsc = 380 W. Calculate: (a) Equivalent series impedance, resistance, and leakage reactance referred to HV side, (b) The same parameters referred to LV side, (c) Full-load copper loss.',
        hi: 'एक 20 kVA, 2200/220 V ट्रांसफॉर्मर के HV साइड पर SC टेस्ट के मान हैं: Vsc = 95 V, Isc = 9.09 A, Wsc = 380 W। ज्ञात कीजिए: (a) HV साइड के समतुल्य प्रतिबाधा Zeq1, प्रतिरोध Req1, एवं रिएक्टेंस Xeq1, (b) LV साइड के तुल्य मान, (c) फुल-लोड कॉपर लॉस।',
        bn: 'একটি ২০ kVA, ২২০০/২২০ V ট্রান্সফর্মারের HV প্রান্তে SC টেস্টে প্রাপ্ত মান: Vsc = ৯৫ V, Isc = ৯.০৯ A, Wsc = ৩৮০ W। নির্ণয় করো: (a) HV রেফার্ড Zeq1, Req1 ও Xeq1, (b) LV রেফার্ড মানসমূহ, (c) ফুল-লোড কপার লস।'
      },
      givenValues: {
        'Rating S': '20 kVA, V1 = 2200 V, V2 = 220 V',
        'Turns Ratio a': '2200 / 220 = 10 (a² = 100, K = 0.1)',
        'SC Test Readings': 'Vsc = 95 V, Isc = 9.09 A, Wsc = 380 W'
      },
      solution: {
        en: 'Step 1: Calculate Equivalent Series Parameters on HV side:\n- Z_eq1 = Vsc / Isc = 95 / 9.09 = 10.451 Ω\n- R_eq1 = Wsc / Isc² = 380 / (9.09)² = 380 / 82.628 = 4.599 Ω ≈ 4.60 Ω\n- X_eq1 = √(Z_eq1² - R_eq1²) = √(10.451² - 4.599²) = √(109.223 - 21.151) = √88.072 = 9.385 Ω.\n\nStep 2: Calculate Equivalent Parameters referred to LV side:\n- R_eq2 = R_eq1 / a² = 4.599 / 100 = 0.04599 Ω ≈ 0.0460 Ω\n- X_eq2 = X_eq1 / a² = 9.385 / 100 = 0.09385 Ω ≈ 0.09385 Ω\n- Z_eq2 = Z_eq1 / a² = 10.451 / 100 = 0.10451 Ω.\n\nStep 3: Full-Load Copper Loss:\n- Since the SC test was conducted at rated current Isc = 9.09 A, the wattmeter reading directly gives the full-load copper loss: P_cu(FL) = Wsc = 380 W.',
        hi: 'Step 1: HV साइड पैरामीटर:\n- Zeq1 = 95 / 9.09 = 10.45 Ω\n- Req1 = 380 / (9.09)² = 4.60 Ω\n- Xeq1 = √(10.45² - 4.60²) = 9.38 Ω\n\nStep 2: LV साइड पैरामीटर:\n- Req2 = 4.60 / 100 = 0.0460 Ω,  Xeq2 = 0.0938 Ω,  Zeq2 = 0.1045 Ω\n\nStep 3: फुल-लोड कॉपर लॉस = Wsc = 380 W।',
        bn: 'ধাপ ১: HV রেফার্ড:\n- Zeq1 = ৯৫ / ৯.০৯ = ১০.৪৫ Ω\n- Req1 = ৩৮০ / (৯.০৯)² = ৪.৬০ Ω\n- Xeq1 = √(১০.৪৫² - ৪.৬০²) = ৯.৩৮ Ω\n\nধাপ ২: LV রেফার্ড:\n- Req2 = ৪.৬০ / ১০০ = ০.০৪৬০ Ω, Xeq2 = ০.০৯৩৮ Ω, Zeq2 = ০.১০৪৫ Ω\n\nধাপ ৩: ফুল-লোড কপার লস = ৩৮০ W।'
      },
      finalAnswer: {
        en: 'HV: Zeq1 = 10.45 Ω, Req1 = 4.60 Ω, Xeq1 = 9.38 Ω; LV: Req2 = 0.046 Ω, Xeq2 = 0.0938 Ω; Full-Load Copper Loss = 380 W',
        hi: 'HV: Zeq1 = 10.45 Ω, Req1 = 4.60 Ω, Xeq1 = 9.38 Ω; LV: Req2 = 0.046 Ω, Xeq2 = 0.0938 Ω; फुल-लोड कॉपर लॉस = 380 W',
        bn: 'HV: Zeq1 = ১০.৪৫ Ω, Req1 = ৪.৬০ Ω, Xeq1 = ৯.৩৮ Ω; LV: Req2 = ০.০৪৬ Ω, Xeq2 = ০.০৯৩৮ Ω; ফুল-লোড কপার লস = ৩৮০ W'
      }
    },
    {
      id: 'ex-trans-polarity-calc',
      problem: {
        en: 'In a transformer polarity test, a primary terminal A1 is connected with a jumper to secondary terminal a1. An AC test voltage of 120 V is applied across primary terminals A1-A2. A voltmeter connected between terminals A2 and a2 reads (a) Case 1: 108 V, (b) Case 2: 132 V. The secondary rating is 12 V. Identify the polarity in each case and explain how to correctly label the terminals for parallel operation.',
        hi: 'एक ट्रांसफॉर्मर पोलैरिटी टेस्ट में प्राइमरी टर्मिनल A1 को सेकेंडरी a1 से जोड़ा गया। A1-A2 पर 120 V AC दी गई। A2 और a2 के बीच वोल्टमीटर पाठ है: (a) केस 1: 108 V, (b) केस 2: 132 V। सेकेंडरी वोल्टेज 12 V है। प्रत्येक केस की पोलैरिटी बताइए।',
        bn: 'একটি পোলারিটি টেস্টে প্রাইমারি A1-কে সেকেন্ডারি a1-এর সাথে জাম্পার দিয়ে যুক্ত করা হলো। A1-A2 প্রান্তে ১২০ V AC প্রয়োগ করা হলো। A2 ও a2-এর মাঝে ভোল্টমিটারের পাঠ: (a) কেস ১: ১০৮ V, (b) কেস ২: ১৩২ V। সেকেন্ডারি রেটিং ১২ V হলে উভয় ক্ষেত্রে পোলারিটি নির্ণয় করো।'
      },
      givenValues: {
        'Applied Primary Test Voltage V1': '120 V',
        'Induced Secondary Voltage V2': '12 V',
        'Case 1 Voltmeter Reading V3': '108 V',
        'Case 2 Voltmeter Reading V3': '132 V'
      },
      solution: {
        en: 'Step 1: Analyze Case 1 (V3 = 108 V):\n- Test relation: V3 = 120 V - 12 V = 108 V = V1 - V2.\n- Since the measured voltage is the difference between the two voltages, this indicates Subtractive Polarity.\n- Meaning: Terminal a1 has the same instantaneous polarity as A1. When A1 is positive (+), a1 is also positive (+). Standard labeling: A1 corresponds to a1, and A2 corresponds to a2.\n\nStep 2: Analyze Case 2 (V3 = 132 V):\n- Test relation: V3 = 120 V + 12 V = 132 V = V1 + V2.\n- Since the measured voltage is the sum of the two voltages, this indicates Additive Polarity.\n- Meaning: Terminal a1 is 180° out of phase with A1 (it has the opposite polarity of A1). Therefore, a2 is the terminal that is in phase with A1.\n\nStep 3: Application to Parallel Operation:\n- To connect in parallel with an existing subtractive unit: connect in-phase terminals together to avoid destructive short-circuit circulating currents.',
        hi: 'Step 1: केस 1 (108 V):\n- V3 = 120 - 12 = 108 V = V1 - V2\n- यह सब्ट्रैक्टिव पोलैरिटी (Subtractive Polarity) है। A1 और a1 समान कला (in-phase) में हैं।\n\nStep 2: केस 2 (132 V):\n- V3 = 120 + 12 = 132 V = V1 + V2\n- यह एडिटिव पोलैरिटी (Additive Polarity) है। A1 और a2 समान कला में हैं।',
        bn: 'ধাপ ১: কেস ১ (১০৮ V):\n- V3 = ১২০ - ১২ = ১০৮ V = V1 - V2\n- এটি সাবট্র্যাক্টিভ পোলারিটি (Subtractive Polarity)। A1 ও a1 একই ফেজে রয়েছে।\n\nধাপ ২: কেস ২ (১৩২ V):\n- V3 = ১২০ + ১২ = ১৩২ V = V1 + V2\n- এটি অ্যাডিটিভ পোলারিটি (Additive Polarity)। A1 ও a2 একই ফেজে রয়েছে।'
      },
      finalAnswer: {
        en: 'Case 1 (108 V) = Subtractive Polarity (a1 is in phase with A1); Case 2 (132 V) = Additive Polarity (a2 is in phase with A1)',
        hi: 'केस 1 (108 V) = सब्ट्रैक्टिव पोलैरिटी (A1 व a1 इन-फेज हैं); केस 2 (132 V) = एडिटिव पोलैरिटी (A1 व a2 इन-फेज हैं)',
        bn: 'কেস ১ (১০৮ V) = সাবট্র্যাক্টিভ পোলারিটি (A1 ও a1 সমদশা); কেস ২ (১৩২ V) = অ্যাডিটিভ পোলারিটি (A1 ও a2 সমদশা)'
      }
    },
    {
      id: 'ex-trans-sumpners-power-calc',
      problem: {
        en: 'Two identical 100 kVA, 2000/200 V, 50 Hz transformers are tested using Sumpner\'s back-to-back method. The mains wattmeter connected across the parallel primaries reads 1200 W at rated 2000 V. The auxiliary injection wattmeter connected to the series-opposition secondaries reads 2200 W while circulating rated full-load current (500 A). Calculate: (a) Iron loss of each individual transformer, (b) Full-load copper loss of each individual transformer, (c) The efficiency of each transformer at full load, 0.8 power factor lagging.',
        hi: 'दो समरूप 100 kVA, 2000/200 V ट्रांसफॉर्मरों का संपटनर टेस्ट किया गया। मुख्य वाटमीटर (प्राइमरी) ने रेटेड 2000 V पर 1200 W पाठ दिया। सहायक वाटमीटर (सेकेंडरी) ने फुल-लोड करंट पर 2200 W पाठ दिया। ज्ञात कीजिए: (a) प्रत्येक ट्रांसफॉर्मर की कोर हानि, (b) प्रत्येक की फुल-लोड कॉपर हानि, (c) 0.8 लैगिंग pf पर प्रत्येक की फुल-लोड दक्षता।',
        bn: 'দুটি অভিন্ন ১০০ kVA, ২০০০/২০০ V ট্রান্সফর্মারের স্যাম্পনার টেস্ট করা হলো। প্রধান ওয়াটমিটার (প্রাইমারি) ১২০০ W এবং সহকারী ওয়াটমিটার (সেকেন্ডারি) রেটেড কারেন্টে ২২০০ W পাঠ দেয়। নির্ণয় করো: (a) প্রতিটি ট্রান্সফর্মারের কোর লস, (b) প্রতিটি ট্রান্সফর্মারের ফুল-লোড কপার লস, (c) ০.৮ ল্যাগিং pf-এ ফুল-লোড দক্ষতা।'
      },
      givenValues: {
        'Rating of each Transformer S': '100 kVA',
        'Mains Wattmeter Reading W1': '1200 W (Supplies core losses of BOTH transformers)',
        'Auxiliary Wattmeter Reading W2': '2200 W (Supplies full-load copper losses of BOTH transformers)'
      },
      solution: {
        en: 'Step 1: Calculate Iron Loss of each Transformer:\n- The mains supply provides magnetizing flux to both transformers.\n- Total Iron Loss of 2 transformers = W1 = 1200 W\n- Iron loss of EACH transformer: P_core = W1 / 2 = 1200 / 2 = 600 W = 0.60 kW.\n\nStep 2: Calculate Full-Load Copper Loss of each Transformer:\n- The auxiliary injection supply circulates full-load current through the secondaries (and induced into primaries) of both transformers.\n- Total Copper Loss of 2 transformers = W2 = 2200 W\n- Full-load copper loss of EACH transformer: P_cu(FL) = W2 / 2 = 2200 / 2 = 1100 W = 1.10 kW.\n\nStep 3: Calculate Full-Load Efficiency of each Transformer at 0.8 pf lagging:\n- Active Output Power: P_out = 100 kVA × 0.8 = 80.0 kW = 80,000 W\n- Total Individual Losses: P_loss = P_core + P_cu(FL) = 600 + 1100 = 1700 W = 1.70 kW\n- Input Power: P_in = 80,000 + 1,700 = 81,700 W\n- Efficiency η = (80,000 / 81,700) × 100% = 97.919% ≈ 97.92%.\n\nNote: Notice how both 100 kVA transformers were fully loaded thermally for hours drawing only 1.2 kW + 2.2 kW = 3.4 kW total power from the electrical grid instead of 200 kW!',
        hi: 'Step 1: प्रत्येक की कोर हानि = W1 / 2 = 1200 / 2 = 600 W।\nStep 2: प्रत्येक की फुल-लोड कॉपर हानि = W2 / 2 = 2200 / 2 = 1100 W।\nStep 3: फुल लोड दक्षता (0.8 pf) = [80000 / (80000 + 1700)] × 100 = 97.92%।\n(विशेष: ग्रिड से केवल 3.4 kW पावर लेकर 200 kVA लोड की पूरी थर्मल टेस्टिंग हो गई!)',
        bn: 'ধাপ ১: প্রতিটির কোর লস = W1 / ২ = ১২০০ / ২ = ৬০০ W।\nধাপ ২: প্রতিটির ফুল-লোড কপার লস = W2 / ২ = ২২০০ / ২ = ১১০০ W।\nধাপ ৩: ফুল লোড দক্ষতা (০.৮ pf) = [৮০০০০ / (৮০০০০ + ১৭০০)] × ১০০ = ৯৭.৯২%।'
      },
      finalAnswer: {
        en: 'Individual Iron Loss = 600 W, Individual Full-Load Copper Loss = 1100 W, Full-Load Efficiency (0.8 pf) = 97.92%',
        hi: 'प्रत्येक की कोर हानि = 600 W, फुल-लोड कॉपर हानि = 1100 W, फुल-लोड दक्षता = 97.92%',
        bn: 'প্রতিটির কোর লস = ৬০০ W, ফুল-লোড কপার লস = ১১০০ W, ফুল-লোড দক্ষতা = ৯৭.৯২%'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Factory Acceptance Testing (FAT): Transformer manufacturers perform certified OC and SC tests on every production unit to guarantee nameplate efficiency and impedance to utility purchasers.',
      'Substation Protection & Fault Calculation: The series equivalent impedance Zeq obtained from SC test is used by protection engineers to program distance relay reach and compute maximum short-circuit fault levels (I_fault = V / Zeq).',
      'Heat Run Testing in Testing Labs: Sumpner’s regenerative back-to-back testing allows temperature rise validation of massive transformers over 24-hour cycles without requiring multi-megawatt load banks or wasting costly grid power.',
      'Field Paralleling Verification: Commissioning technicians always perform a voltmeter polarity check before closing breaker switches between newly installed transformers and an existing live substation bus.'
    ],
    hi: [
      'फैक्ट्री स्वीकृति परीक्षण (FAT): ट्रांसफॉर्मर निर्माता दक्षता और नामपट्टिका डेटा प्रमाणित करने हेतु प्रत्येक इकाई का OC एवं SC टेस्ट करते हैं।',
      'सबस्टेशन सुरक्षा एवं फॉल्ट गणना: SC टेस्ट से प्राप्त प्रतिबाधा Zeq का उपयोग सुरक्षा रिले की सेटिंग और शॉर्ट-सर्किट फॉल्ट करंट की गणना में होता है।',
      'प्रयोगशालाओं में हीट रन टेस्ट: संपटनर टेस्ट द्वारा बिना भारी विद्युत खपत के बड़े ट्रांसफॉर्मरों की तापमान वृद्धि की जाँच की जाती है।',
      'फील्ड में समानांतर संयोजन सत्यापन: नए ट्रांसफॉर्मर को सबस्टेशन बस से जोड़ने से पहले पोलैरिटी टेस्ट अनिवार्य रूप से किया जाता है।'
    ],
    bn: [
      'ফ্যাক্টরি অ্যাকসেপ্টেন্স টেস্টিং (FAT): উৎপাদন শেষে প্রতিটি ট্রান্সফরমারের রেটেড দক্ষতা ও ইম্পিড্যান্স নিশ্চিত করতে OC ও SC টেস্ট করা হয়।',
      'সাবস্টেশন সুরক্ষা ও ফল্ট গণনা: SC টেস্ট থেকে প্রাপ্ত তুল্য ইম্পিড্যান্স Zeq ব্যবহার করে শর্ট-সার্কিট ফল্ট লেভেল নির্ধারণ ও রিলে সেট করা হয়।',
      'হিট রান টেস্টিং: স্যাম্পনার টেস্টের মাধ্যমে বিশাল পাওয়ার ট্রান্সফর্মারের তাপমাত্রা বৃদ্ধির সক্ষমতা বিদ্যুৎ অপচয় ছাড়াই পরীক্ষা করা হয়।',
      'প্যারালাল অপারেশনের পূর্বে পোলারিটি যাচাই: নতুন ট্রান্সফরমার গ্রিডে যুক্ত করার আগে ভোল্টমিটার দিয়ে পোলারিটি নিশ্চিত করা বাধ্যতামূলক।'
    ]
  },
  importantPoints: {
    en: [
      'In an OC test, instruments are placed on the Low Voltage (LV) side for safety and meter availability, while the HV side is left open.',
      'In an SC test, instruments are placed on the High Voltage (HV) side to measure smaller, standard current levels while the LV side is solidly shorted.',
      'OC test measures constant Core / Iron loss (W0 ≈ P_core) because no-load copper loss is negligible.',
      'SC test measures full-load Copper loss (Wsc ≈ P_cu(FL)) because core loss at 5% reduced voltage is negligible.',
      'Sumpner’s test requires two identical transformers and enables full-load temperature rise testing with only internal loss power supplied.',
      'Standard power transformers are wound with Subtractive Polarity.'
    ],
    hi: [
      'OC टेस्ट में सुरक्षा एवं मीटर उपलब्धता हेतु उपकरण LV साइड पर लगाए जाते हैं तथा HV साइड को खुला रखा जाता है।',
      'SC टेस्ट में उपकरण HV साइड पर लगाए जाते हैं क्योंकि HV करंट कम होती है और LV को मोटे लिंक से शॉर्ट किया जाता है।',
      'OC टेस्ट स्थिर कोर लॉस (W0 ≈ Pcore) मापता है क्योंकि नो-लोड कॉपर लॉस नगण्य होता है।',
      'SC टेस्ट फुल-लोड कॉपर लॉस (Wsc ≈ Pcu) मापता है क्योंकि 5% कम वोल्टेज पर कोर लॉस नगण्य होता है।',
      'संपटनर टेस्ट में दो समरूप ट्रांसफॉर्मर लगते हैं और यह पूर्ण-भार तापमान वृद्धि परीक्षण करता है।',
      'अधिकांश पावर ट्रांसफॉर्मर सब्ट्रैक्टिव पोलैरिटी के साथ बनाए जाते हैं।'
    ],
    bn: [
      'নিরাপত্তা ও মিটারের সহজলভ্যতার জন্য OC টেস্টে মিটার LV প্রান্তে এবং HV প্রান্ত ওপেন রাখা হয়।',
      'কারেন্টের মান কম রাখতে SC টেস্টে মিটার HV প্রান্তে এবং LV প্রান্ত শর্ট রাখা হয়।',
      'OC টেস্ট মূলত স্থির কোর লস (W0 ≈ Pcore) পরিমাপ করে।',
      'SC টেস্ট মূলত ফুল-লোড কপার লস (Wsc ≈ Pcu) পরিমাপ করে।',
      'স্যাম্পনার টেস্টে দুটি সমরূপ ট্রান্সফরমার লাগে এবং এটি কোনো শক্তি অপচয় ছাড়াই ফুল-লোড তাপমাত্রা বৃদ্ধি নির্ণয় করে।',
      'স্ট্যান্ডার্ড পাওয়ার ট্রান্সফরমার সাবট্র্যাক্টিভ পোলারিটিতে তৈরি হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Placing SC instruments on the LV side: LV rated current is 10x higher, requiring enormous, dangerous ammeter and wattmeter current coils.',
      'Forgetting that OC parameters (Rc, Xm) are referred to the LV side while SC parameters (Req, Xeq) are referred to the HV side unless explicitly converted using turns ratio (a²).',
      'Using a standard High Power Factor (HPF) wattmeter for the OC test: because the no-load power factor is very low (0.15 to 0.3), a Low Power Factor (LPF) wattmeter must be used for accurate deflection.',
      'Assuming Sumpner’s test requires a real full-load resistive/inductive load bank: Sumpner’s test is regenerative and requires zero external load bank.',
      'Connecting transformers in parallel with additive polarity instead of matching in-phase terminals, causing explosive dead short circuits.'
    ],
    hi: [
      'SC टेस्ट में LV साइड पर मीटर लगाना: LV करंट बहुत अधिक होने से मीटर जल सकते हैं।',
      'यह भूल जाना कि OC टेस्ट पैरामीटर LV साइड के होते हैं और SC टेस्ट पैरामीटर HV साइड के होते हैं, जब तक कि उन्हें a² से कन्वर्ट न किया जाए।',
      'OC टेस्ट में सामान्य वाटमीटर लगाना: नो-लोड pf बहुत कम (0.15-0.3) होने के कारण केवल LPF वाटमीटर ही प्रयुक्त होना चाहिए।',
      'यह सोचना कि संपटनर टेस्ट में बाहरी लोड बैंक की आवश्यकता होती है: यह बिना लोड बैंक के पुनर्योजी (regenerative) काम करता है।',
      'पोलैरिटी चेक किए बिना समानांतर जोड़ना, जिससे भारी शॉर्ट सर्किट हो सकता है।'
    ],
    bn: [
      'SC টেস্টে LV প্রান্তে মিটার লাগানো: LV প্রান্তে কারেন্ট খুব বেশি হওয়ায় মিটার ক্ষতিগ্রস্ত হতে পারে।',
      'মনে না রাখা যে OC প্যারামিটার LV-এর এবং SC প্যারামিটার HV-এর, যা a² দিয়ে রূপান্তর করতে হয়।',
      'OC টেস্টে সাধারণ ওয়াটমিটার ব্যবহার করা: নো-লোড পাওয়ার ফ্যাক্টর খুব কম হওয়ায় LPF ওয়াটমিটার ব্যবহার করতে হয়।',
      'মনে করা যে স্যাম্পনার টেস্টে বহিরাগত লোড ব্যাংকের প্রয়োজন হয়: এটি রিজেনারেটিভ পদ্ধতিতে কাজ করে।',
      'পোলারিটি পরীক্ষা না করে প্যারালাল সংযোগ দেওয়া, যা মারাত্মক শর্ট সার্কিট সৃষ্টি করে।'
    ]
  },
  mcqs: [
    {
      id: 'ch6-l17-mcq1',
      question: {
        en: 'Why is a Low Power Factor (LPF) wattmeter specifically selected to measure power in a Transformer Open Circuit (OC) test?',
        hi: 'ट्रांसफॉर्मर ओपन सर्किट (OC) टेस्ट में शक्ति मापने हेतु विशेष रूप से LPF वाटमीटर का चयन क्यों किया जाता है?',
        bn: 'ট্রান্সফর্মার ওপেন সার্কিট (OC) টেস্টে পাওয়ার পরিমাপের জন্য কেন বিশেষভাবে LPF ওয়াটমিটার নির্বাচন করা হয়?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'Because the transformer no-load current is highly lagging and the power factor is very low (0.15 to 0.3)',
            hi: 'चूँकि नो-लोड करंट अत्यधिक लैगिंग होती है और पावर फैक्टर बहुत कम (0.15 से 0.3) होता है',
            bn: 'কারণ ট্রান্সফর্মারের নো-লোড কারেন্ট অত্যন্ত ল্যাগিং এবং পাওয়ার ফ্যাক্টর খুব কম (০.১৫ থেকে ০.৩)'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'Because the core loss is zero at no load',
            hi: 'चूँकि नो-लोड पर कोर लॉस शून्य होता है',
            bn: 'কারণ নো-লোডে কোর লস শূন্য থাকে'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'To prevent high voltage breakdown of the wattmeter',
            hi: 'वाटमीटर को उच्च वोल्टेज ब्रेकडाउन से बचाने के लिए',
            bn: 'ওয়াটমিটারের উচ্চ ভোল্টেজ ব্রেকডাউন রোধ করতে'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'Because the secondary winding is short-circuited',
            hi: 'चूँकि सेकेंडरी वाइंडिंग शॉर्ट होती है',
            bn: 'কারণ সেকেন্ডারি ওয়াইন্ডিং শর্ট সার্কিট থাকে'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'At no load, the transformer acts as a large inductor drawing magnetizing current, resulting in an extremely low power factor (cosΦ0 ≈ 0.15–0.30). A standard HPF wattmeter gives inaccurate, tiny deflections, so an LPF wattmeter is mandatory.',
        hi: 'नो-लोड पर ट्रांसफॉर्मर मुख्य रूप से इंडक्टिव होता है जिससे पावर फैक्टर बहुत कम (0.15-0.3) होता है। सटीक पाठ हेतु LPF वाटमीटर आवश्यक है।',
        bn: 'নো-লোডে ট্রান্সফরমার অত্যন্ত ইন্ডাক্টিভ হওয়ায় পাওয়ার ফ্যাক্টর খুব কম (০.১৫-০.৩০) হয়। নির্ভুল পাঠের জন্য LPF ওয়াটমিটার বাধ্যতামূলক।'
      }
    },
    {
      id: 'ch6-l17-mcq2',
      question: {
        en: 'During a Short Circuit (SC) test on a transformer, why is the iron loss negligibly small?',
        hi: 'ट्रांसफॉर्मर के शॉर्ट सर्किट (SC) टेस्ट के दौरान कोर / लौह हानि नगण्य क्यों होती है?',
        bn: 'ট্রান্সফর্মারের শর্ট সার্কিট (SC) টেস্টের সময় আয়রন লস কেন অত্যন্ত নগণ্য হয়?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'Because the applied voltage is only 3% to 8% of rated voltage, and core flux density Bm is very small (Iron Loss ∝ V²)',
            hi: 'चूँकि आरोपित वोल्टेज रेटेड वोल्टेज का केवल 3% से 8% होता है और फ्लक्स घनत्व Bm बहुत कम होता है (Iron Loss ∝ V²)',
            bn: 'কারণ প্রয়োগকৃত ভোল্টেজ রেটেড ভোল্টেজের মাত্র ৩% থেকে ৮% এবং ফ্লাক্স ডেনসিটি Bm খুব কম থাকে (Iron Loss ∝ V²)'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'Because the secondary current is zero',
            hi: 'चूँकि सेकेंडरी करंट शून्य होती है',
            bn: 'কারণ সেকেন্ডারি কারেন্ট শূন্য থাকে'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'Because the frequency of the test supply is reduced to zero',
            hi: 'चूँकि सप्लाई फ्रीक्वेंसी शून्य कर दी जाती है',
            bn: 'কারণ টেস্ট সাপ্লাই ফ্রিকোয়েন্সি শূন্যে নামিয়ে আনা হয়'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'Because copper loss suppresses the magnetic field',
            hi: 'चूँकि कॉपर लॉस चुंबकीय क्षेत्र को दबा देता है',
            bn: 'কারণ কপার লস ম্যাগনেটিক ফিল্ডকে দমিয়ে রাখে'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'In an SC test, only 3–8% of rated voltage is applied to circulate rated current. Since core flux Φ and flux density Bm are proportional to applied voltage, and iron loss scales roughly with V², the core loss during an SC test is less than 0.5% of its normal value and can be safely neglected.',
        hi: 'SC टेस्ट में केवल 3-8% वोल्टेज दिया जाता है। चूँकि कोर लॉस V² के समानुपाती होता है, अतः यह सामान्य मान का 0.5% से भी कम होता है।',
        bn: 'SC টেস্টে মাত্র ৩-৮% ভোল্টেজ দেওয়া হয়। কোর লস V²-এর সমানুপাতিক হওয়ায় এই অবস্থায় আয়রন লস নগণ্য থাকে।'
      }
    },
    {
      id: 'ch6-l17-mcq3',
      question: {
        en: 'What is the primary technical advantage of Sumpner’s (Back-to-Back) test compared to direct full-load testing?',
        hi: 'प्रत्यक्ष फुल-लोड परीक्षण की तुलना में संपटनर (बैक-टू-बैक) टेस्ट का मुख्य तकनीकी लाभ क्या है?',
        bn: 'সরাসরি ফুল-লোড পরীক্ষার তুলনায় স্যাম্পনার্স (ব্যাক-টু-ব্যাক) টেস্টের প্রধান প্রযুক্তিগত সুবিধা কী?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'It determines full-load thermal temperature rise of two transformers drawing only the internal loss power (P_core + P_cu) from the grid',
            hi: 'यह ग्रिड से केवल आंतरिक हानियों (Pcore + Pcu) के बराबर पावर लेकर दोनों ट्रांसफॉर्मरों का पूर्ण-भार तापमान परीक्षण करता है',
            bn: 'এটি গ্রিড থেকে শুধুমাত্র অভ্যন্তরীণ অপচয়ের (Pcore + Pcu) সমপরিমাণ বিদ্যুৎ নিয়ে ফুল-লোড তাপমাত্রা বৃদ্ধি নির্ণয় করে'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'It eliminates the need for any AC power source',
            hi: 'इसमें किसी AC स्रोत की आवश्यकता नहीं होती',
            bn: 'এতে কোনো AC পাওয়ার সোর্সের প্রয়োজন হয় না'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'It can be performed on single transformer units without a pair',
            hi: 'यह बिना जोड़ी के अकेले ट्रांसफॉर्मर पर किया जा सकता है',
            bn: 'এটি জোড়া ছাড়াই একক ট্রান্সফরমারের ওপর করা যায়'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'It reduces winding resistance to zero',
            hi: 'यह वाइंडिंग प्रतिरोध को शून्य कर देता है',
            bn: 'এটি ওয়াইন্ডিং রোধকে শূন্য করে দেয়'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Sumpner’s test enables long-duration full-load heat runs for large transformers by circulating rated flux and rated current in opposition, consuming only the internal power losses (typically 1–2% of rated MVA) from the electrical source.',
        hi: 'संपटनर टेस्ट द्वारा दोनों ट्रांसफॉर्मरों में रेटेड फ्लक्स और करंट प्रवाहित करते हुए केवल हानियों (1-2% पावर) की खपत पर पूरा थर्मल टेस्ट हो जाता है।',
        bn: 'স্যাম্পনার টেস্টে রেটেড ফ্লাক্স ও রেটেড কারেন্ট প্রবাহিত করে মাত্র ১-২% অপচয় ক্ষমতার বিদ্যুৎ ব্যবহার করে সম্পূর্ণ থার্মাল টেস্ট করা যায়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'ch6-l17-pq1',
      question: {
        en: 'Explain why the Open-Circuit (OC) test is conducted on the Low-Voltage (LV) winding with the High-Voltage (HV) winding open, while the Short-Circuit (SC) test is conducted on the HV winding with the LV winding shorted.',
        hi: 'स्पष्ट कीजिए कि OC टेस्ट LV वाइंडिंग पर (HV ओपन रखकर) तथा SC टेस्ट HV वाइंडिंग पर (LV शॉर्ट रखकर) ही क्यों किया जाता है।',
        bn: 'ব্যাখ্যা করো কেন OC টেস্ট LV ওয়াইন্ডিংয়ে (HV ওপেন রেখে) এবং SC টেস্ট HV ওয়াইন্ডিংয়ে (LV শর্ট রেখে) সম্পন্ন করা হয়।'
      },
      hint: {
        en: 'Consider standard laboratory supply voltages, meter safety, and the magnitude of rated full-load currents on the HV versus LV sides.',
        hi: 'प्रयोगशाला वोल्टेज उपलब्धता, मीटर सुरक्षा तथा HV व LV साइड की रेटेड करंट के परिमाण पर विचार कीजिए।',
        bn: 'গবেষণাগারে সুলভ ভোল্টেজ, মিটারের রেটিং এবং HV ও LV পাশের ফুল-লোড কারেন্টের মানের কথা চিন্তা করো।'
      },
      answerKey: {
        en: '1. OC Test on LV Side:\n- Rated LV voltage (e.g. 230 V or 415 V) is readily available in standard test laboratories, whereas rated HV (e.g. 11 kV or 33 kV) requires hazardous high-voltage supply equipment.\n- No-load current I0 on the LV side is small (2–5% of LV rated current, e.g. 2 to 5 A), which is ideal for standard precision ammeters.\n- Operating at low voltage minimizes electrical insulation breakdown risks during testing.\n\n2. SC Test on HV Side:\n- Under short-circuit conditions, only 3% to 8% of rated voltage is needed (e.g. 50–100 V), which is easily supplied by a standard variac.\n- The rated full-load current on the HV side is small (e.g. 5 to 20 A), easily handled by standard laboratory ammeters and wattmeter current coils.\n- In contrast, the LV side carries 10x to 100x higher rated current (e.g. 200 to 2000 A); conducting SC on the LV side would require extremely heavy, specialized high-current busbars and meters.',
        hi: '1. LV साइड पर OC टेस्ट:\n- LV रेटेड वोल्टेज (जैसे 230 V) लैब में आसानी से उपलब्ध होता है।\n- LV नो-लोड करंट (2-5 A) सामान्य मीटरों के लिए उपयुक्त होती है और वोल्टेज कम होने से सुरक्षा बनी रहती है।\n\n2. HV साइड पर SC टेस्ट:\n- HV साइड पर रेटेड करंट कम (जैसे 5-10 A) होती है, जिसे सामान्य लैब मीटर संभाल सकते हैं।\n- यदि LV पर SC टेस्ट किया जाए तो करंट सैकड़ों या हजारों एम्पीयर होगी, जिसके लिए अत्यधिक भारी व महंगे मीटर लगेंगे।',
        bn: '১. LV প্রান্তে OC টেস্ট:\n- রেটেড LV ভোল্টেজ (যেমন ২৩০ V) সহজে ল্যাবে পাওয়া যায় এবং নিরাপত্তা বজায় থাকে।\n- LV পাশের নো-লোড কারেন্ট সাধারণ মিটারের জন্য নিখুঁত।\n\n২. HV প্রান্তে SC টেস্ট:\n- HV পাশে রেটেড কারেন্ট কম থাকে, যা সাধারণ ল্যাব মিটার দিয়ে সহজে মাপা যায়।\n- LV পাশে কারেন্ট শত শত গুণ বেশি হওয়ায় সেখানে SC টেস্ট করা অত্যন্ত ঝুঁকিপূর্ণ ও জটিল।'
      }
    },
    {
      id: 'ch6-l17-pq2',
      question: {
        en: 'Describe the connection diagram and working principle of Sumpner’s (back-to-back) test. How does it ensure that both transformers are simultaneously subjected to full-load core loss and full-load copper loss without drawing full-load real power?',
        hi: 'संपटनर (बैक-टू-बैक) टेस्ट के कनेक्शन आरेख एवं कार्य सिद्धांत का वर्णन कीजिए। यह कैसे सुनिश्चित करता है कि बिना भारी वास्तविक बिजली खींचे दोनों ट्रांसफॉर्मर एक साथ फुल-लोड कोर और कॉपर लॉस का अनुभव करें?',
        bn: 'স্যাম্পনার্স (ব্যাক-টু-ব্যাক) টেস্টের সংযোগ চিত্র ও কার্যপ্রণালী বর্ণনা করো। এটি কীভাবে কোনো অতিরিক্ত বাস্তব বিদ্যুৎ অপচয় না করে উভয় ট্রান্সফর্মারকে একই সাথে ফুল-লোড কোর লস ও কপার লসে পরিচালিত করে?'
      },
      hint: {
        en: 'Focus on the two independent power sources: the mains supply connected to parallel primaries, and the low-voltage auxiliary booster connected across series-opposition secondaries.',
        hi: 'दो स्वतंत्र स्रोतों पर ध्यान दें: पैरेलल प्राइमरी से जुड़ा मुख्य स्रोत (कोर लॉस) तथा सीरीज अपोजिशन सेकेंडरी से जुड़ा सहायक बूस्टर (कॉपर लॉस)।',
        bn: 'দুটি পৃথক উৎসের কথা ভাবো: প্রাইমারির সমান্তরাল মেইন সাপ্লাই (কোর লস) এবং সেকেন্ডারির বিপরীতমুখী সিরিজে যুক্ত বুস্টার ট্রান্সফরমার (কপার লস)।'
      },
      answerKey: {
        en: '1. Two Identical Transformers (A and B) are connected:\n- Primaries are connected in parallel across the rated AC mains supply (V1). This establishes rated working magnetic flux in both cores, supplying full-load Iron Loss (P_core) to both transformers through mains wattmeter W1 (W1 = 2 · P_core).\n- Secondaries are connected in series-opposition (phase opposition), meaning terminal polarity is arranged such that the induced EMFs cancel each other (E2A - E2B = 0), resulting in zero circulating current at no load.\n\n2. Auxiliary Current Injection:\n- A separate low-voltage regulating transformer (booster) injects an adjustable low AC voltage into the closed secondary loop.\n- This voltage circulates rated full-load current (I2_FL) through the series secondaries, which induces rated full-load current into the primaries.\n- The auxiliary wattmeter W2 measures the total Full-Load Copper Loss of both transformers (W2 = 2 · P_cu(FL)).\n\n3. Result:\n- Both transformers operate simultaneously at full magnetic flux (full core heating) and full winding current (full copper heating).\n- Total electrical power drawn from the utility grid equals only W1 + W2 = 2 · (P_core + P_cu), which is merely 1% to 2% of the combined 200 kVA rating.',
        hi: '1. दो समरूप ट्रांसफॉर्मर A और B:\n- दोनों की प्राइमरी को रेटेड सप्लाई के पैरेलल में जोड़ा जाता है। इससे दोनों को पूरा फ्लक्स मिलता है और मुख्य वाटमीटर W1 = 2 × Pcore मापता है।\n- दोनों की सेकेंडरी को सीरीज अपोजिशन में जोड़ा जाता है जिससे कुल प्रेरित वोल्टेज शून्य रहता है।\n\n2. सहायक इंजेक्शन स्रोत:\n- एक अलग कम वोल्टेज स्रोत द्वारा सेकेंडरी लूप में रेटेड करंट प्रवाहित की जाती है, जिसे सहायक वाटमीटर W2 = 2 × Pcu मापता है।\n\n3. परिणाम:\n- दोनों ट्रांसफॉर्मर पूरे फ्लक्स और करंट पर 24 घंटे गर्म होते हैं, जबकि ग्रिड से केवल कुल हानियों (W1 + W2) के बराबर बिजली खर्च होती है।',
        bn: '১. দুটি অভিন্ন ট্রান্সফরমার A ও B:\n- প্রাইমারি দুটি সমান্তরালে মেইন লাইনে যুক্ত থাকায় রেটেড ফ্লাক্স তৈরি হয় এবং ওয়াটমিটার W1 = ২ × Pcore পাঠ দেয়।\n- সেকেন্ডারি দুটি বিপরীতমুখী সিরিজে যুক্ত থাকায় মোট নো-লোড ভোল্টেজ শূন্য হয়।\n\n২. অক্সিলিয়ারি ইনজেকশন:\n- একটি সহকারী ট্রান্সফরমারের মাধ্যমে সেকেন্ডারিতে রেটেড কারেন্ট প্রবেশ করানো হয়, যার অপচয় W2 = ২ × Pcu।\n\n৩. ফলাফল:\n- গ্রিড থেকে মাত্র ১-২% অপচয় বিদ্যুৎ নিয়ে ঘণ্টার পর ঘণ্টা সম্পূর্ণ লোডের তাপমাত্রা বৃদ্ধির পরীক্ষা করা যায়।'
      }
    }
  ]
};
