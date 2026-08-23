import { Lesson } from '../types';

export const LESSON_TRANSFORMER_LOSSES_EFFICIENCY: Lesson = {
  id: 'lsn-ch6-transformer-losses-efficiency',
  topicId: 'ch6-transformer-losses-efficiency',
  chapterId: 'ch-electrical-machines',
  order: 16,
  title: {
    en: 'Transformer Losses, Efficiency & Voltage Regulation',
    hi: 'ट्रांसफॉर्मर की हानियाँ, दक्षता एवं वोल्टेज रेगुलेशन',
    bn: 'ট্রান্সফর্মারের অপচয়, কর্মদক্ষতা ও ভোল্টেজ রেগুলেশন'
  },
  description: {
    en: 'Comprehensive analytical and engineering study of real transformer power flow: constant iron losses (hysteresis and eddy current), load-dependent copper losses (I²R), stray-load and dielectric losses, commercial efficiency, conditions and mathematical derivation for peak maximum efficiency, 24-hour all-day energy efficiency for distribution transformers, and voltage regulation across lagging, unity, and leading power factor loads.',
    hi: 'वास्तविक ट्रांसफॉर्मर पावर फ्लो का विस्तृत विश्लेषणात्मक अध्ययन: स्थिर लौह हानियाँ (हिस्टैरिसीस एवं भंवर धारा), लोड-आधारित कॉपर हानियाँ (I²R), स्ट्रे-लोड व डाईइलेक्ट्रिक हानियाँ, दक्षता समीकरण, अधिकतम दक्षता की गणितीय स्थिति, वितरण ट्रांसफॉर्मर हेतु 24-घंटे की ऑल-डे ऊर्जा दक्षता, तथा लैगिंग, यूनिटी व लीडिंग पावर फैक्टर पर वोल्टेज रेगुलेशन।',
    bn: 'বাস্তব ট্রান্সফর্মারের পাওয়ার ফ্লো-এর পূর্ণাঙ্গ গাণিতিক ও প্রযুক্তিগত বিশ্লেষণ: স্থির আয়রন লস (হিস্টেরেসিস ও এডি কারেন্ট লস), লোড-নির্ভর কপার লস (I²R), স্ট্রে ও ডাইইলেকট্রিক লস, কর্মদক্ষতা নির্ণয়, সর্বোচ্চ দক্ষতার গাণিতিক শর্ত, ডিস্ট্রিবিউশন ট্রান্সফর্মারের ২৪ ঘণ্টার অল-ডে এনার্জি দক্ষতা এবং বিভিন্ন পাওয়ার ফ্যাক্টরে ভোল্টেজ রেগুলেশন।'
  },
  diagrams: [
    {
      id: 'diag-trans-loss-power-flow',
      svgType: 'transformer-losses-efficiency',
      title: {
        en: 'Transformer Power Flow, Loss Breakdown & Efficiency Architecture',
        hi: 'ट्रांसफॉर्मर पावर फ्लो, हानि विभाजन एवं दक्षता संरचना',
        bn: 'ট্রান্সফর্মার পাওয়ার ফ্লো, লস বিভাজন ও কর্মদক্ষতা ডায়াগ্রাম'
      },
      caption: {
        en: 'Sankey power flow diagram illustrating input power (P_in), constant core losses (P_core = P_h + P_e), variable winding copper losses (P_cu = I1²R1 + I2²R2), and net deliverable active power (P_out = V2·I2·cosΦ).',
        hi: 'पावर फ्लो आरेख: इनपुट पावर (Pin), स्थिर कोर हानियाँ (Ph + Pe), परिवर्तनीय कॉपर हानियाँ (Pcu) तथा भार को मिलने वाली वास्तविक आउटपुट पावर (Pout)।',
        bn: 'পাওয়ার ফ্লো ডায়াগ্রাম: ইনপুট পাওয়ার (Pin), স্থির কোর লস (Ph + Pe), পরিবর্তনশীল কপার লস (Pcu) এবং লোডে সরবরাহকৃত কার্যকর আউটপুট পাওয়ার (Pout)।'
      }
    }
  ],
  estimatedMinutes: 50,
  easyExplanation: {
    en: 'Because a transformer has no rotating shafts or mechanical bearings, it has zero friction and windage losses, giving it an exceptionally high efficiency of 95% to 99%. The internal losses consist of two main groups: (1) Constant Iron/Core Losses (P_core = P_h + P_e) that occur continuously inside the steel core due to magnetic hysteresis and circulating eddy currents whenever the transformer is plugged in, regardless of whether a load is connected, and (2) Variable Copper Losses (P_cu = I²R) that occur in the copper wire windings and increase with the square of the load current. Maximum efficiency happens when the variable copper loss matches the constant iron loss. Voltage Regulation measures the percentage voltage change at the secondary terminals between no-load and full-load; inductive (lagging) loads cause the voltage to drop, while capacitive (leading) loads can cause the voltage to rise above the no-load value.',
    hi: 'चूँकि ट्रांसफॉर्मर में कोई घूमने वाला भाग (शाफ्ट या बेयरिंग) नहीं होता, इसलिए इसमें कोई घर्षण (friction) या विंडेज हानि नहीं होती, जिससे इसकी दक्षता बहुत अधिक (95% से 99%) होती है। इसमें मुख्य रूप से दो प्रकार की हानियाँ होती हैं: (1) स्थिर लौह/कोर हानि (P_core = Ph + Pe) जो सिलिकॉन स्टील कोर में हिस्टैरिसीस और भंवर धाराओं के कारण सदैव होती है (चाहे लोड जुड़ा हो या न हो), और (2) परिवर्तनीय कॉपर हानि (P_cu = I²R) जो वाइंडिंग में धारा प्रवाहित होने पर होती है और लोड धारा के वर्ग के समानुपाती होती है। जब परिवर्तनीय कॉपर हानि स्थिर कोर हानि के ठीक बराबर हो जाती है, तब ट्रांसफॉर्मर अपनी अधिकतम दक्षता पर काम करता है। वोल्टेज रेगुलेशन यह दर्शाता है कि नो-लोड से फुल-लोड पर जाने पर सेकेंडरी टर्मिनल वोल्टेज में कितना प्रतिशत परिवर्तन होता है।',
    bn: 'যেহেতু ট্রান্সফর্মারে কোনো ঘূর্ণায়মান যন্ত্রাংশ (রোটর বা বিয়ারিং) নেই, তাই এতে কোনো ঘর্ষণ বা উইন্ডেজ অপচয় নেই। ফলে এর কর্মদক্ষতা ৯৫% থেকে ৯৯% পর্যন্ত অত্যন্ত উচ্চ হয়। ট্রান্সফর্মারে মূলত দুই ধরনের অপচয় হয়: (১) স্থির আয়রন বা কোর লস (Ph + Pe), যা ট্রান্সফরমার চালু থাকলেই সর্বদা ঘটে (লোড থাকুক বা না থাকুক), এবং (২) পরিবর্তনশীল কপার লস (I²R), যা ওয়াইন্ডিংয়ে প্রবাহিত কারেন্টের বর্গের সমানুপাতিক। যখন কপার লস স্থির কোর লসের সমান হয়, তখন ট্রান্সফরমারের দক্ষতা সর্বোচ্চ চূড়ায় পৌঁছায়। ভোল্টেজ রেগুলেশন নির্দেশ করে নো-লোড থেকে ফুল-লোডে গেলে সেকেন্ডারি প্রান্তীয় ভোল্টেজ শতকরা কতটুকু পরিবর্তিত হয়।'
  },
  detailedExplanation: {
    en: `1. Transformer Power Flow Architecture:
- Real Input Power: P_in = V1 · I1 · cos(Φ1) (in Watts / kW)
- Output Usable Power: P_out = V2 · I2 · cos(Φ2) (in Watts / kW)
- Power Balance: P_in = P_out + Total Losses (P_loss)

2. Classification of Transformer Losses:
A. Constant / Magnetic Core Losses (P_core or P_i):
Occurs inside the laminated silicon steel core whenever rated primary voltage is applied. Dependent solely on supply frequency (f) and maximum flux density (B_m), virtually independent of load current:
- Hysteresis Loss (Steinmetz formula): P_h = k_h · f · B_m^1.6 · V_core (W)
  * Caused by magnetic domain friction under cyclic 50/60 Hz AC magnetization.
  * Minimized by using high-permeability Cold-Rolled Grain-Oriented (CRGO) silicon steel alloy.
- Eddy Current Loss: P_e = k_e · f² · B_m² · t² · V_core (W)
  * Caused by circular induced currents flowing inside the conductive steel volume.
  * Minimized by laminating the core with thin (0.27–0.35 mm) sheets insulated by varnish.

B. Variable / Electrical Copper Losses (P_cu):
Ohmic Joule heating dissipation in primary and secondary winding resistances:
- Primary Copper Loss: P_cu1 = I1² · R1
- Secondary Copper Loss: P_cu2 = I2² · R2
- Total Copper Loss at any fractional load x (where x = I / I_FL = S / S_rated):
  P_cu(x) = x² · P_cu(FL) = x² · (I1(FL)² · R01) = x² · (I2(FL)² · R02)

C. Minor Parasitic Losses:
- Stray Load Loss: Eddy currents induced in the metallic structural tank, core clamps, and conductors by leakage flux (typically 1–5% of full-load loss).
- Dielectric Loss: Minute energy loss in the solid insulating paper and transformer oil subjected to intense AC electrostatic stress.

3. Commercial Efficiency (η):
- η = (Output Power / Input Power) × 100%
- η = [ (x · S_rated · cosΦ2) / (x · S_rated · cosΦ2 + P_core + x² · P_cu(FL)) ] × 100%

4. Mathematical Derivation for Maximum Efficiency:
Treating terminal voltage V2, core loss P_core, and load power factor cosΦ2 as constant:
- η = (V2 · I2 · cosΦ2) / (V2 · I2 · cosΦ2 + P_core + I2² · R02)
Differentiating η with respect to load current I2 and setting dη/dI2 = 0:
- (V2·cosΦ2 + 2·I2·R02) · (V2·I2·cosΦ2) = (V2·cosΦ2) · (V2·I2·cosΦ2 + P_core + I2²·R02)
- V2²·I2·cos²Φ2 + 2·V2·I2²·R02·cosΦ2 = V2²·I2·cos²Φ2 + V2·P_core·cosΦ2 + V2·I2²·R02·cosΦ2
- I2² · R02 = P_core  ==>  Variable Copper Loss = Constant Core Loss!
- Fractional Load for Peak Efficiency: x_max = √(P_core / P_cu(FL))
- kVA Output at Peak Efficiency: S(η_max) = S_rated × √(P_core / P_cu(FL))

5. All-Day (24-Hour Energy) Efficiency (η_all-day):
Power transformers operating at continuous base load in transmission substations are designed for maximum efficiency at 100% full load.
In contrast, commercial/residential Distribution Transformers remain energized for 24 hours (continuous core loss) while supplying light or zero load for large portions of the day. They are evaluated by 24-hour energy efficiency:
- η_all-day = [ Energy Output in kWh over 24 hrs / Energy Input in kWh over 24 hrs ] × 100%
- Distribution transformers are engineered with low core loss (thinner lamination, higher grade steel) so peak efficiency occurs at 50% to 70% of rated load.

6. Transformer Voltage Regulation (%VR):
Defined as the percentage change in secondary terminal voltage between no-load (V2,NL = E2) and full-load (V2,FL) at constant primary voltage:
- %VR = [ (V2(NL) - V2(FL)) / V2(FL) ] × 100%
- Approximate Formula: %VR = [ (I2·R02·cosΦ2 ± I2·X02·sinΦ2) / V2(FL) ] × 100%
- In Per-Unit Notation: %VR = [ (R_pu · cosΦ2 ± X_pu · sinΦ2) ] × 100%
  * Lagging PF (Inductive load, e.g. motors): Use (+); terminal voltage drops under load (%VR > 0).
  * Unity PF (Pure resistive, e.g. heaters): %VR = (I2·R02 / V2) × 100% (%VR > 0).
  * Leading PF (Capacitive load, e.g. capacitor banks): Use (-); terminal voltage can rise above no-load voltage (%VR can be zero or negative).
- Zero Voltage Regulation Condition (Leading PF): tan(Φ2) = -R02 / X02  ==>  cos(Φ2) = X02 / Z02.
- Maximum Voltage Regulation Condition (Worst Drop, Lagging PF): tan(Φ2) = X02 / R02  ==>  cos(Φ2) = R02 / Z02.`,
    hi: `1. ट्रांसफॉर्मर पावर फ्लो:
- इनपुट पावर: Pin = V1·I1·cosΦ1 (kW में)
- आउटपुट पावर: Pout = V2·I2·cosΦ2 (kW में)
- कुल हानियाँ (Ploss) = Pcore + Pcu

2. ट्रांसफॉर्मर हानियों का वर्गीकरण:
A. स्थिर कोर / लौह हानियाँ (Pcore = Ph + Pe):
- हिस्टैरिसीस हानि (Steinmetz सूत्र): Ph = kh · f · Bm^1.6 · Vcore (W)
  * उच्च गुणवत्ता वाले CRGO सिलिकॉन स्टील कोर के उपयोग द्वारा कम किया जाता है।
- भंवर धारा (Eddy Current) हानि: Pe = ke · f² · Bm² · t² · Vcore (W)
  * कोर को पतली वार्निश-युक्त लैमिनेशन (0.27–0.35 mm) में विभाजित करके कम किया जाता है।
B. परिवर्तनीय कॉपर हानियाँ (Pcu = I²R):
- प्राइमरी कॉपर लॉस = I1²·R1, सेकेंडरी कॉपर लॉस = I2²·R2
- किसी लोड फ्रैक्शन x पर कॉपर लॉस = x² · Pcu(FL)
C. अन्य गौण हानियाँ: स्ट्रे-लोड लॉस एवं डाईइलेक्ट्रिक लॉस।

3. दक्षता एवं अधिकतम दक्षता की शर्त:
- दक्षता η = [ आउटपुट / (आउटपुट + Pcore + x²·Pcu(FL)) ] × 100%
- अधिकतम दक्षता की शर्त: परिवर्तनीय कॉपर हानि = स्थिर कोर हानि (Pcu = Pcore)
- अधिकतम दक्षता पर भार अनुपात: x_max = √(Pcore / Pcu(FL))
- अधिकतम दक्षता पर kVA = Rated kVA × √(Pcore / Pcu(FL))

4. ऑल-डे (24-घंटे ऊर्जा) दक्षता:
- वितरण ट्रांसफॉर्मर 24 घंटे सक्रिय रहते हैं, अतः इनकी दक्षता kWh में निकाली जाती है:
  η_all-day = (24 घंटे में कुल आउटपुट kWh / 24 घंटे में कुल इनपुट kWh) × 100%

5. वोल्टेज रेगुलेशन (%VR):
- %VR = [ (V2(no-load) - V2(full-load)) / V2(full-load) ] × 100%
- सन्निकट सूत्र: %VR = [ (I2·R02·cosΦ2 ± I2·X02·sinΦ2) / V2 ] × 100%
  * लैगिंग PF हेतु (+) प्रयुक्त होता है (वोल्टेज ड्रॉप होता है)।
  * लीडिंग PF हेतु (-) प्रयुक्त होता है (वोल्टेज बढ़ सकता है, शून्य या ऋणात्मक रेगुलेशन संभव)।
  * शून्य वोल्टेज रेगुलेशन की शर्त (लीडिंग PF): tan(Φ2) = -R02 / X02।`,
    bn: `১. ট্রান্সফর্মারে শক্তি প্রবাহ:
- ইনপুট ক্ষমতা: Pin = V1·I1·cosΦ1 (kW)
- আউটপুট ক্ষমতা: Pout = V2·I2·cosΦ2 (kW)
- মোট অপচয়: Ploss = Pcore + Pcu

২. ট্রান্সফর্মার অপচয়ের শ্রেণিবিভাগ:
A. স্থির কোর/আয়রন লস (Pcore = Ph + Pe):
- হিস্টেরেসিস লস: Ph = kh · f · Bm^1.6 · Vcore (W)
  * উচ্চমানের CRGO সিলিকন স্টিল ব্যবহারে হ্রাস পায়।
- এডি কারেন্ট লস: Pe = ke · f² · Bm² · t² · Vcore (W)
  * পাতলা লেমিনেশন (০.২৭-০.৩৫ মিমি) ব্যবহারে হ্রাস পায়।
B. পরিবর্তনশীল কপার লস (Pcu = I²R):
- প্রাইমারি লস = I1²·R1, সেকেন্ডারি লস = I2²·R2
- যেকোনো আংশিক লোড x-এ কপার লস = x² · Pcu(FL)

৩. কর্মদক্ষতা ও সর্বোচ্চ দক্ষতার শর্ত:
- দক্ষতা η = [ Pout / (Pout + Pcore + x²·Pcu(FL)) ] × ১০০%
- সর্বোচ্চ দক্ষতার শর্ত: পরিবর্তনশীল কপার লস = স্থির কোর লস (Pcu = Pcore)
- সর্বোচ্চ দক্ষতায় লোডিং ভগ্নাংশ: x_max = √(Pcore / Pcu(FL))
- সর্বোচ্চ দক্ষতায় kVA = রেটেড kVA × √(Pcore / Pcu(FL))

৪. অল-ডে এনার্জি দক্ষতা (ডিস্ট্রিবিউশন ট্রান্সফরমার):
- η_all-day = (২৪ ঘণ্টায় মোট আউটপুট kWh / ২৪ ঘণ্টায় মোট ইনপুট kWh) × ১০০%

৫. ভোল্টেজ রেগুলেশন (%VR):
- %VR = [ (V2(no-load) - V2(full-load)) / V2(full-load) ] × ১০০%
- আসন্ন সমীকরণ: %VR = [ (I2·R02·cosΦ2 ± I2·X02·sinΦ2) / V2 ] × ১০০%
  * ল্যাগিং লোডে (+) চিহ্ন (ভোল্টেজ হ্রাস পায়)।
  * লিডিং লোডে (-) চিহ্ন (ভোল্টেজ বৃদ্ধি পেতে পারে, শূন্য বা ঋণাত্মক রেগুলেশন)।
  * শূন্য ভোল্টেজ রেগুলেশনের শর্ত (লিডিং PF): tan(Φ2) = -R02 / X02।`
  },
  formulas: [
    {
      id: 'f-trans-loss-efficiency',
      symbol: 'η',
      expression: 'η = [ (x · S · cosΦ) / (x · S · cosΦ + P_core + x² · P_cu(FL)) ] × 100%',
      formula: '\\eta = \\frac{x \\cdot S \\cdot \\cos\\phi}{x \\cdot S \\cdot \\cos\\phi + P_{\\text{core}} + x^2 P_{cu(\\text{FL})}} \\times 100\\%',
      title: {
        en: 'Transformer Commercial Efficiency at Fractional Load x',
        hi: 'आंशिक भार x पर ट्रांसफॉर्मर दक्षता',
        bn: 'ভগ্নাংশ লোড x-এ ট্রান্সফর্মারের কর্মদক্ষতা'
      },
      description: {
        en: 'Calculates active power efficiency considering constant core loss and quadratically scaling copper loss.',
        hi: 'स्थिर कोर हानि और भार धारा के वर्ग अनुसार बदलते कॉपर लॉस को सम्मिलित कर दक्षता की गणना।',
        bn: 'স্থির কোর লস এবং লোড কারেন্টের বর্গের আনুপাতিক কপার লস বিবেচনায় কর্মদক্ষতা পরিমাপ।'
      }
    },
    {
      id: 'f-trans-max-eff-condition',
      symbol: 'x_max, S_max',
      expression: 'x_max = √(P_core / P_cu(FL)),  S_max = S_rated × √(P_core / P_cu(FL))',
      formula: 'x_{\\text{max}} = \\sqrt{\\frac{P_{\\text{core}}}{P_{cu(\\text{FL})}}}, \\quad S(\\eta_{\\text{max}}) = S_{\\text{rated}} \\cdot \\sqrt{\\frac{P_{\\text{core}}}{P_{cu(\\text{FL})}}}',
      title: {
        en: 'Fractional Load and kVA Rating for Maximum Efficiency',
        hi: 'अधिकतम दक्षता हेतु लोडिंग अनुपात एवं kVA रेटिंग',
        bn: 'সর্বোচ্চ কর্মদক্ষতায় লোডিং অনুপাত ও kVA রেটিং'
      },
      description: {
        en: 'Mathematical loading factor where variable winding loss exactly equals constant core loss (Pcu = Pcore).',
        hi: 'वह भार अनुपात जहाँ परिवर्तनीय कॉपर हानि स्थिर कोर हानि के बराबर हो जाती है।',
        bn: 'যে লোডিং অনুপাতে পরিবর্তনশীল কপার লস স্থির কোর লসের সমান হয়।'
      }
    },
    {
      id: 'f-trans-all-day-efficiency',
      symbol: 'η_all-day',
      expression: 'η_all-day = [ Output Energy in kWh (24h) / Input Energy in kWh (24h) ] × 100%',
      formula: '\\eta_{\\text{all-day}} = \\frac{\\sum (P_{\\text{out}} \\times t)}{\\sum (P_{\\text{out}} \\times t) + 24 \\cdot P_{\\text{core}} + \\sum (x^2 P_{cu(\\text{FL})} \\times t)} \\times 100\\%',
      title: {
        en: 'All-Day (24-Hour Energy) Efficiency for Distribution Transformers',
        hi: 'वितरण ट्रांसफॉर्मर हेतु 24-घंटे ऑल-डे ऊर्जा दक्षता',
        bn: 'ডিস্ট্রিবিউশন ট্রান্সফর্মারের ২৪ ঘণ্টার অল-ডে শক্তি দক্ষতা'
      },
      description: {
        en: 'Ratio of total electrical energy delivered over a 24-hour cycle to total energy drawn from the grid.',
        hi: '24 घंटे के चक्र में ग्रिड से ली गई कुल ऊर्जा और लोड को दी गई कुल उपयोगी ऊर्जा का अनुपात।',
        bn: '২৪ ঘণ্টার চক্রে গ্রিড থেকে গৃহীত মোট শক্তি ও লোডে প্রদত্ত শক্তির অনুপাত।'
      }
    },
    {
      id: 'f-trans-voltage-regulation-approx',
      symbol: '%VR',
      expression: '%VR = [ (I2·R02·cosΦ2 ± I2·X02·sinΦ2) / V2 ] × 100% = (R_pu·cosΦ2 ± X_pu·sinΦ2) × 100%',
      formula: '\\%\\text{VR} = \\frac{I_2 R_{02} \\cos\\phi_2 \\pm I_2 X_{02} \\sin\\phi_2}{V_2} \\times 100\\% = \\left( R_{pu} \\cos\\phi_2 \\pm X_{pu} \\sin\\phi_2 \\right) \\times 100\\%',
      title: {
        en: 'Approximate Percentage Voltage Regulation Formula',
        hi: 'सन्निकट प्रतिशत वोल्टेज रेगुलेशन सूत्र',
        bn: 'শতকরা ভোল্টেজ রেগুলেশনের আসন্ন সূত্র'
      },
      description: {
        en: 'Drop in terminal voltage under load (+ for lagging inductive PF, - for leading capacitive PF).',
        hi: 'भार के तहत टर्मिनल वोल्टेज में परिवर्तन (+ लैगिंग हेतु, - लीडिंग हेतु)।',
        bn: 'লোডে প্রান্তীয় ভোল্টেজ পরিবর্তনের হার (+ ল্যাগিং লোডে, - লিডিং লোডে)।'
      }
    }
  ],
  solvedExamples: [
    {
      id: 'ex-trans-eff-1',
      problem: {
        en: 'A 25 kVA, 2200/220 V, 50 Hz single-phase transformer has a core loss of 350 W and a full-load copper loss of 650 W. Calculate: (a) The efficiency at full load with 0.8 power factor lagging, (b) The efficiency at half load (x = 0.5) with unity power factor (cosΦ = 1.0).',
        hi: 'एक 25 kVA, 2200/220 V सिंगल-फेज ट्रांसफॉर्मर की कोर हानि 350 W और फुल-लोड कॉपर हानि 650 W है। गणना कीजिए: (a) 0.8 लैगिंग पावर फैक्टर पर फुल-लोड दक्षता, (b) 1.0 पावर फैक्टर पर आधे लोड (half load) पर दक्षता।',
        bn: 'একটি ২৫ kVA, ২২০০/২২০ V সিঙ্গেল-ফেজ ট্রান্সফর্মারের কোর লস ৩৫০ W এবং ফুল-লোড কপার লস ৬৫০ W। নির্ণয় করো: (a) ০.৮ ল্যাগিং পাওয়ার ফ্যাক্টরে ফুল-লোড দক্ষতা, (b) ১.০ পাওয়ার ফ্যাক্টরে হাফ-লোড (x = ০.৫) দক্ষতা।'
      },
      givenValues: {
        'Rated Apparent Power S': '25 kVA = 25,000 VA',
        'Core Loss P_core': '350 W = 0.35 kW',
        'Full-Load Copper Loss P_cu(FL)': '650 W = 0.65 kW',
        'Case (a) Condition': 'Full load (x = 1.0), cosΦ = 0.8 lagging',
        'Case (b) Condition': 'Half load (x = 0.5), cosΦ = 1.0 (unity)'
      },
      solution: {
        en: 'Step 1: Calculate Case (a) - Full Load, 0.8 pf lagging:\n- Active Output Power: P_out = x · S · cosΦ = 1.0 × 25,000 × 0.8 = 20,000 W = 20.0 kW\n- Total Losses: P_loss = P_core + x² · P_cu(FL) = 350 + (1.0)² × 650 = 350 + 650 = 1,000 W = 1.0 kW\n- Input Power: P_in = P_out + P_loss = 20,000 + 1,000 = 21,000 W = 21.0 kW\n- Efficiency η = (P_out / P_in) × 100% = (20,000 / 21,000) × 100% = 95.238% ≈ 95.24%.\n\nStep 2: Calculate Case (b) - Half Load (x = 0.5), unity pf (cosΦ = 1.0):\n- Active Output Power: P_out = 0.5 × 25,000 × 1.0 = 12,500 W = 12.5 kW\n- Copper Loss at Half Load: P_cu(0.5) = (0.5)² × P_cu(FL) = 0.25 × 650 = 162.5 W\n- Core Loss remains constant: P_core = 350 W\n- Total Losses: P_loss = 350 + 162.5 = 512.5 W = 0.5125 kW\n- Input Power: P_in = 12,500 + 512.5 = 13,012.5 W = 13.0125 kW\n- Efficiency η = (12,500 / 13,012.5) × 100% = 96.061% ≈ 96.06%.',
        hi: 'Step 1: फुल लोड (0.8 pf):\n- Pout = 25000 × 0.8 = 20000 W\n- Ploss = 350 + 650 = 1000 W\n- η = (20000 / 21000) × 100 = 95.24%\n\nStep 2: हाफ लोड (x = 0.5, 1.0 pf):\n- Pout = 0.5 × 25000 × 1.0 = 12500 W\n- Pcu = (0.5)² × 650 = 162.5 W\n- Ploss = 350 + 162.5 = 512.5 W\n- η = (12500 / 13012.5) × 100 = 96.06%',
        bn: 'ধাপ ১: ফুল লোড (০.৮ pf):\n- Pout = ২৫০০০ × ০.৮ = ২০০০০ W\n- Ploss = ৩৫০ + ৬৫০ = ১০০০ W\n- η = (২০০০০ / ২১০০০) × ১০০ = ৯৫.২৪%\n\nধাপ ২: হাফ লোড (x = ০.৫, ১.০ pf):\n- Pout = ০.৫ × ২৫০০০ × ১.০ = ১২৫০০ W\n- Pcu = (০.৫)² × ৬৫০ = ১৬২.৫ W\n- Ploss = ৩৫০ + ১৬২.৫ = ৫১২.৫ W\n- η = (১২৫০০ / ১৩০১২.৫) × ১০০ = ৯৬.০৬%'
      },
      finalAnswer: {
        en: '(a) Full-load Efficiency (0.8 pf) = 95.24%, (b) Half-load Efficiency (unity pf) = 96.06%',
        hi: '(a) फुल-लोड दक्षता (0.8 pf) = 95.24%, (b) हाफ-लोड दक्षता (यूनिटी pf) = 96.06%',
        bn: '(a) ফুল-লোড দক্ষতা (০.৮ pf) = ৯৫.২৪%, (b) হাফ-লোড দক্ষতা (ইউনিটি pf) = ৯৬.০৬%'
      }
    },
    {
      id: 'ex-trans-max-eff-calc',
      problem: {
        en: 'A 100 kVA distribution transformer has a constant iron loss of 600 W and a full-load copper loss of 1500 W. Determine: (a) The kVA loading at which maximum efficiency occurs, (b) The maximum efficiency at unity power factor, (c) The maximum efficiency at 0.85 power factor lagging.',
        hi: 'एक 100 kVA वितरण ट्रांसफॉर्मर की स्थिर कोर हानि 600 W और फुल-लोड कॉपर हानि 1500 W है। ज्ञात कीजिए: (a) अधिकतम दक्षता पर kVA लोड, (b) यूनिटी पावर फैक्टर पर अधिकतम दक्षता, (c) 0.85 लैगिंग पावर फैक्टर पर अधिकतम दक्षता।',
        bn: 'একটি ১০০ kVA ডিস্ট্রিবিউশন ট্রান্সফর্মারের স্থির আয়রন লস ৬০০ W এবং ফুল-লোড কপার লস ১৫০০ W। নির্ণয় করো: (a) সর্বোচ্চ দক্ষতায় kVA লোডিং, (b) ইউনিটি পাওয়ার ফ্যাক্টরে সর্বোচ্চ দক্ষতা, (c) ০.৮৫ ল্যাগিং পাওয়ার ফ্যাক্টরে সর্বোচ্চ দক্ষতা।'
      },
      givenValues: {
        'Transformer Rating S': '100 kVA',
        'Iron Loss P_core': '600 W = 0.60 kW',
        'Full-Load Copper Loss P_cu(FL)': '1500 W = 1.50 kW'
      },
      solution: {
        en: 'Step 1: Fractional loading for maximum efficiency:\n- x_max = √(P_core / P_cu(FL)) = √(600 / 1500) = √(0.40) = 0.63245 (63.25% of full load)\n- kVA at maximum efficiency: S_max = 100 kVA × 0.63245 = 63.245 kVA ≈ 63.25 kVA.\n\nStep 2: Total losses at maximum efficiency:\n- At maximum efficiency, variable copper loss equals constant iron loss: P_cu = P_core = 600 W.\n- Total Losses: P_loss = 2 × P_core = 2 × 600 W = 1200 W = 1.20 kW.\n\nStep 3: Maximum Efficiency at Unity PF (cosΦ = 1.0):\n- Output: P_out = 63.245 kVA × 1.0 = 63.245 kW = 63,245 W\n- η_max(1.0) = [ 63,245 / (63,245 + 1,200) ] × 100% = (63,245 / 64,445) × 100% = 98.138% ≈ 98.14%.\n\nStep 4: Maximum Efficiency at 0.85 PF lagging:\n- Output: P_out = 63.245 kVA × 0.85 = 53.758 kW = 53,758 W\n- η_max(0.85) = [ 53,758 / (53,758 + 1,200) ] × 100% = (53,758 / 54,958) × 100% = 97.816% ≈ 97.82%.',
        hi: 'Step 1: x_max = √(600 / 1500) = 0.6325। अधिकतम दक्षता पर लोड = 63.25 kVA।\nStep 2: कुल हानियाँ = 2 × 600 = 1200 W = 1.2 kW।\nStep 3: यूनिटी pf पर अधिकतम दक्षता = [63245 / (63245 + 1200)] × 100 = 98.14%।\nStep 4: 0.85 pf पर अधिकतम दक्षता = [53758 / (53758 + 1200)] × 100 = 97.82%।',
        bn: 'ধাপ ১: x_max = √(৬০০ / ১৫০০) = ০.৬৩২৫। সর্বোচ্চ দক্ষতায় লোড = ৬৩.২৫ kVA।\nধাপ ২: মোট অপচয় = ২ × ৬০০ = ১২০০ W = ১.২ kW।\nধাপ ৩: ইউনিটি pf-এ সর্বোচ্চ দক্ষতা = [৬৩২৪৫ / (৬৩২৪৫ + ১২০০)] × ১০০ = ৯৮.১৪%।\nধাপ ৪: ০.৮৫ pf-এ সর্বোচ্চ দক্ষতা = [৫৩৭৫৮ / (৫৩৭৫৮ + ১২০০)] × ১০০ = ৯৭.৮২%।'
      },
      finalAnswer: {
        en: 'kVA at max efficiency = 63.25 kVA, Max Efficiency (unity pf) = 98.14%, Max Efficiency (0.85 pf) = 97.82%',
        hi: 'अधिकतम दक्षता पर लोड = 63.25 kVA, अधिकतम दक्षता (यूनिटी pf) = 98.14%, अधिकतम दक्षता (0.85 pf) = 97.82%',
        bn: 'সর্বোচ্চ দক্ষতায় লোড = ৬৩.২৫ kVA, সর্বোচ্চ দক্ষতা (ইউনিটি pf) = ৯৮.১৪%, সর্বোচ্চ দক্ষতা (০.৮৫ pf) = ৯৭.৮২%'
      }
    },
    {
      id: 'ex-trans-vr-lagging',
      problem: {
        en: 'A 10 kVA, 2000/400 V single-phase transformer has equivalent primary-referred resistance R01 = 5.0 Ω and equivalent reactance X01 = 12.0 Ω. Calculate the full-load voltage regulation and secondary terminal voltage at 0.8 power factor lagging.',
        hi: 'एक 10 kVA, 2000/400 V ट्रांसफॉर्मर का प्राइमरी तुल्य प्रतिरोध R01 = 5.0 Ω और रिएक्टेंस X01 = 12.0 Ω है। 0.8 लैगिंग पावर फैक्टर पर फुल-लोड वोल्टेज रेगुलेशन एवं सेकेंडरी टर्मिनल वोल्टेज ज्ञात कीजिए।',
        bn: 'একটি ১০ kVA, ২০০০/৪০০ V ট্রান্সফর্মারের প্রাইমারি তুল্য রোধ R01 = ৫.০ Ω এবং রিঅ্যাক্ট্যান্স X01 = ১২.০ Ω। ০.৮ ল্যাগিং পাওয়ার ফ্যাক্টরে ফুল-লোড ভোল্টেজ রেগুলেশন ও সেকেন্ডারি প্রান্তীয় ভোল্টেজ নির্ণয় করো।'
      },
      givenValues: {
        'Rating S': '10 kVA = 10,000 VA',
        'V1': '2000 V, V2(NL) = 400 V, Transformation Ratio K = 400/2000 = 0.2',
        'R01': '5.0 Ω, X01 = 12.0 Ω',
        'Load Power Factor': 'cosΦ = 0.8 lagging ==> sinΦ = √(1 - 0.8²) = 0.6'
      },
      solution: {
        en: 'Step 1: Calculate Rated Primary Current I1(FL):\n- I1 = S / V1 = 10,000 / 2000 = 5.0 A.\n\nStep 2: Calculate Primary Voltage Drop at 0.8 pf lagging:\n- Voltage Drop ΔV1 = I1 · R01 · cosΦ + I1 · X01 · sinΦ\n- ΔV1 = (5.0 × 5.0 × 0.8) + (5.0 × 12.0 × 0.6) = 20.0 + 36.0 = 56.0 V.\n\nStep 3: Calculate Percentage Voltage Regulation (%VR):\n- %VR = (ΔV1 / V1) × 100% = (56.0 / 2000) × 100% = 2.80%.\n\nStep 4: Calculate Actual Full-Load Secondary Terminal Voltage V2(FL):\n- Referred secondary terminal voltage: V2\' = V1 - ΔV1 = 2000 - 56 = 1944.0 V\n- Actual secondary terminal voltage: V2(FL) = K · V2\' = 0.2 × 1944.0 = 388.80 V.\n- Alternatively: V2(FL) = V2(NL) × (1 - %VR/100) = 400 × (1 - 0.028) = 400 × 0.972 = 388.80 V.',
        hi: 'Step 1: I1 = 10000 / 2000 = 5.0 A।\nStep 2: ΔV1 = (5 × 5 × 0.8) + (5 × 12 × 0.6) = 20 + 36 = 56.0 V।\nStep 3: %VR = (56 / 2000) × 100 = 2.80%।\nStep 4: V2(FL) = 400 × (1 - 0.028) = 388.80 V।',
        bn: 'ধাপ ১: I1 = ১০০০০ / ২০০০ = ৫.০ A।\nধাপ ২: ΔV1 = (৫ × ৫ × ০.৮) + (৫ × ১২ × ০.৬) = ২০ + ৩৬ = ৫৬.০ V।\nধাপ ৩: %VR = (৫৬ / ২০০০) × ১০০ = ২.৮০%।\nধাপ ৪: V2(FL) = ৪০০ × (১ - ০.০২৮) = ৩৮৮.৮০ V।'
      },
      finalAnswer: {
        en: 'Voltage Regulation (%VR) = +2.80%, Secondary Full-Load Voltage V2 = 388.80 V',
        hi: 'वोल्टेज रेगुलेशन (%VR) = +2.80%, सेकेंडरी फुल-लोड वोल्टेज V2 = 388.80 V',
        bn: 'ভোল্টেজ রেগুলেশন (%VR) = +২.৮০%, সেকেন্ডারি ফুল-লোড ভোল্টেজ V2 = ৩৮৮.৮০ V'
      }
    },
    {
      id: 'ex-trans-vr-leading',
      problem: {
        en: 'For the same 10 kVA transformer (R01 = 5.0 Ω, X01 = 12.0 Ω, V1 = 2000 V, V2(NL) = 400 V), calculate: (a) Voltage regulation at 0.8 power factor leading, (b) The specific leading power factor at which voltage regulation becomes exactly zero.',
        hi: 'उसी 10 kVA ट्रांसफॉर्मर हेतु: (a) 0.8 लीडिंग पावर फैक्टर पर वोल्टेज रेगुलेशन ज्ञात कीजिए, (b) वह विशिष्ट लीडिंग पावर फैक्टर ज्ञात कीजिए जिस पर वोल्टेज रेगुलेशन ठीक शून्य हो जाए।',
        bn: 'একই ১০ kVA ট্রান্সফর্মারের জন্য: (a) ০.৮ লিডিং পাওয়ার ফ্যাক্টরে ভোল্টেজ রেগুলেশন নির্ণয় করো, (b) যে নির্দিষ্ট লিডিং পাওয়ার ফ্যাক্টরে ভোল্টেজ রেগুলেশন ঠিক শূন্য হয় তা নির্ণয় করো।'
      },
      givenValues: {
        'V1': '2000 V, I1 = 5.0 A',
        'R01': '5.0 Ω, X01 = 12.0 Ω',
        'Case (a)': 'cosΦ = 0.8 leading ==> sinΦ = 0.6',
        'Case (b)': 'Zero Voltage Regulation condition (%VR = 0)'
      },
      solution: {
        en: 'Step 1: Calculate Case (a) - Voltage Regulation at 0.8 pf leading:\n- For leading power factor, the reactive drop opposes the resistive drop:\n  ΔV1 = I1 · R01 · cosΦ - I1 · X01 · sinΦ\n- ΔV1 = (5.0 × 5.0 × 0.8) - (5.0 × 12.0 × 0.6) = 20.0 - 36.0 = -16.0 V.\n- %VR = (ΔV1 / V1) × 100% = (-16.0 / 2000) × 100% = -0.80% (Negative Regulation!)\n- Secondary terminal voltage: V2(FL) = 400 × (1 - (-0.008)) = 400 × 1.008 = 403.20 V (Voltage rises under capacitive load!).\n\nStep 2: Calculate Case (b) - Zero Voltage Regulation Condition:\n- Setting ΔV1 = 0 ==> I1 · R01 · cosΦ = I1 · X01 · sinΦ\n- tan(Φ) = R01 / X01 = 5.0 / 12.0 = 0.41667\n- Angle Φ = arctan(0.41667) = 22.62°\n- Leading Power Factor for Zero VR: cos(Φ) = cos(22.62°) = 0.9231 leading (or cosΦ = X01 / √(R01² + X01²) = 12 / √(25 + 144) = 12 / 13 = 0.9231 leading).',
        hi: 'Step 1: 0.8 लीडिंग pf पर:\n- ΔV1 = (5 × 5 × 0.8) - (5 × 12 × 0.6) = 20 - 36 = -16.0 V\n- %VR = (-16 / 2000) × 100 = -0.80% (ऋणात्मक रेगुलेशन, वोल्टेज बढ़कर 403.2 V हो जाएगा)\n\nStep 2: शून्य रेगुलेशन हेतु:\n- tanΦ = R01 / X01 = 5 / 12 = 0.4167\n- cosΦ = 12 / 13 = 0.9231 leading।',
        bn: 'ধাপ ১: ০.৮ লিডিং pf-এ:\n- ΔV1 = (৫ × ৫ × ০.৮) - (৫ × ১২ × ০.৬) = ২০ - ৩৬ = -১৬.০ V\n- %VR = (-১৬ / ২০০০) × ১০০ = -০.৮০% (ঋণাত্মক রেগুলেশন, ভোল্টেজ বেড়ে ৪০৩.২ V হবে)\n\nধাপ ২: শূন্য রেগুলেশনের জন্য:\n- tanΦ = R01 / X01 = ৫ / ১২ = ০.৪১৬৭\n- cosΦ = ১২ / ১৩ = ০.৯২৩১ leading।'
      },
      finalAnswer: {
        en: '(a) %VR at 0.8 leading = -0.80% (V2 = 403.20 V), (b) Leading PF for zero VR = 0.9231 leading (92.31%)',
        hi: '(a) 0.8 लीडिंग pf पर %VR = -0.80% (V2 = 403.20 V), (b) शून्य रेगुलेशन हेतु pf = 0.9231 leading',
        bn: '(a) ০.৮ লিডিংয়ে %VR = -০.৮০% (V2 = ৪০৩.২০ V), (b) শূন্য রেগুলেশনে pf = ০.৯২৩১ leading'
      }
    },
    {
      id: 'ex-trans-all-day-eff-calc',
      problem: {
        en: 'A 50 kVA distribution transformer has a constant core loss of 500 W and a full-load copper loss of 1200 W. During a 24-hour daily duty cycle, it operates under the following load schedule:\n- 6 hours at Full Load, 0.8 power factor lagging\n- 8 hours at Half Load (x = 0.5), 0.9 power factor lagging\n- 6 hours at 20% Load (x = 0.2), unity power factor\n- 4 hours at No Load (x = 0)\nCalculate the 24-hour all-day energy efficiency of the transformer.',
        hi: 'एक 50 kVA वितरण ट्रांसफॉर्मर की कोर हानि 500 W और फुल-लोड कॉपर हानि 1200 W है। 24 घंटे के चक्र में इसका लोड:\n- 6 घंटे: फुल लोड (0.8 pf)\n- 8 घंटे: हाफ लोड (0.9 pf)\n- 6 घंटे: 20% लोड (1.0 pf)\n- 4 घंटे: नो लोड\nट्रांसफॉर्मर की 24-घंटे ऑल-डे ऊर्जा दक्षता ज्ञात कीजिए।',
        bn: 'একটি ৫০ kVA ডিস্ট্রিবিউশন ট্রান্সফর্মারের কোর লস ৫০০ W এবং ফুল-লোড কপার লস ১২০০ W। ২৪ ঘণ্টার চক্রে এর লোডিং:\n- ৬ ঘণ্টা: ফুল লোড (০.৮ pf)\n- ৮ ঘণ্টা: হাফ লোড (০.৯ pf)\n- ৬ ঘণ্টা: ২০% লোড (১.০ pf)\n- ৪ ঘণ্টা: নো লোড\nট্রান্সফরমারটির ২৪ ঘণ্টার অল-ডে শক্তি দক্ষতা নির্ণয় করো।'
      },
      givenValues: {
        'Rating S': '50 kVA',
        'P_core': '500 W = 0.50 kW (runs continuously for 24 hours)',
        'P_cu(FL)': '1200 W = 1.20 kW'
      },
      solution: {
        en: 'Step 1: Calculate Energy Output over 24 hours:\n- Period 1 (6 hrs, x = 1.0, pf = 0.8): Energy1 = 1.0 × 50 kVA × 0.8 × 6 h = 240.0 kWh\n- Period 2 (8 hrs, x = 0.5, pf = 0.9): Energy2 = 0.5 × 50 kVA × 0.9 × 8 h = 180.0 kWh\n- Period 3 (6 hrs, x = 0.2, pf = 1.0): Energy3 = 0.2 × 50 kVA × 1.0 × 6 h = 60.0 kWh\n- Period 4 (4 hrs, No Load): Energy4 = 0 kWh\n- Total 24-Hour Energy Output = 240 + 180 + 60 + 0 = 480.0 kWh.\n\nStep 2: Calculate 24-Hour Constant Core Loss Energy:\n- Core Loss Energy = P_core × 24 h = 0.50 kW × 24 h = 12.0 kWh.\n\nStep 3: Calculate 24-Hour Variable Copper Loss Energy:\n- Period 1: (1.0)² × 1.20 kW × 6 h = 1.0 × 1.20 × 6 = 7.20 kWh\n- Period 2: (0.5)² × 1.20 kW × 8 h = 0.25 × 1.20 × 8 = 2.40 kWh\n- Period 3: (0.2)² × 1.20 kW × 6 h = 0.04 × 1.20 × 6 = 0.288 kWh\n- Period 4: (0)² × 1.20 kW × 4 h = 0 kWh\n- Total Copper Loss Energy = 7.20 + 2.40 + 0.288 + 0 = 9.888 kWh.\n\nStep 4: Total Energy Losses and Total Energy Input:\n- Total 24-Hour Energy Losses = 12.0 + 9.888 = 21.888 kWh\n- Total 24-Hour Energy Input = Output + Losses = 480.0 + 21.888 = 501.888 kWh.\n\nStep 5: Calculate All-Day Efficiency:\n- η_all-day = (Output Energy / Input Energy) × 100%\n- η_all-day = (480.0 / 501.888) × 100% = 95.638% ≈ 95.64%.',
        hi: 'Step 1: 24 घंटे का कुल आउटपुट = (1.0×50×0.8×6) + (0.5×50×0.9×8) + (0.2×50×1.0×6) = 240 + 180 + 60 = 480.0 kWh।\nStep 2: 24 घंटे का कोर लॉस = 0.50 kW × 24 h = 12.0 kWh।\nStep 3: 24 घंटे का कॉपर लॉस = (1²×1.2×6) + (0.5²×1.2×8) + (0.2²×1.2×6) = 7.2 + 2.4 + 0.288 = 9.888 kWh।\nStep 4: कुल इनपुट = 480 + 12 + 9.888 = 501.888 kWh।\nStep 5: ऑल-डे दक्षता = (480 / 501.888) × 100 = 95.64%।',
        bn: 'ধাপ ১: ২৪ ঘণ্টার মোট আউটপুট = ২৪০ + ১৮০ + ৬০ = ৪৮০.০ kWh।\nধাপ ২: ২৪ ঘণ্টার কোর লস = ০.৫০ × ২৪ = ১২.০ kWh।\nধাপ ৩: ২৪ ঘণ্টার কপার লস = ৭.২ + ২.৪ + ০.২৮৮ = ৯.৮৮৮ kWh।\nধাপ ৪: মোট ইনপুট = ৪৮০ + ১২ + ৯.৮৮৮ = ৫০১.৮৮৮ kWh।\nধাপ ৫: অল-ডে দক্ষতা = (৪৮০ / ৫০১.৮৮৮) × ১০০ = ৯৫.৬৪%।'
      },
      finalAnswer: {
        en: '24-Hour Energy Output = 480 kWh, Total Daily Losses = 21.888 kWh, All-Day Efficiency = 95.64%',
        hi: '24-घंटे आउटपुट = 480 kWh, कुल दैनिक हानियाँ = 21.888 kWh, ऑल-डे दक्षता = 95.64%',
        bn: '২৪ ঘণ্টার আউটপুট = ৪৮০ kWh, মোট দৈনিক অপচয় = ২১.৮৮৮ kWh, অল-ডে দক্ষতা = ৯৫.৬৪%'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Power Transmission Substation Sizing: Transmission power transformers operate at continuous heavy loads near 100% capacity and are engineered with maximum efficiency targeted at 90% to 100% full load.',
      'City Power Distribution Grid Optimization: Residential distribution transformers stay continuously connected 24/7 with varying loads; utility engineers select low-core-loss CRGO alloys to maximize 24-hour all-day energy efficiency.',
      'Industrial Voltage Drop Compensation: Electrical facility engineers use transformer regulation equations to calculate required tap changer settings or install power factor correction capacitors to counteract inductive line voltage drops.',
      'Renewable Solar & Wind Inverter Interfacing: Step-up transformers feeding solar power to the grid must handle leading or lagging power factors without violating grid code voltage limits.'
    ],
    hi: [
      'पावर ट्रांसमिशन सबस्टेशन डिजाइन: बेस-लोड ट्रांसफॉर्मरों को 90-100% लोड पर अधिकतम दक्षता प्राप्त करने हेतु डिजाइन किया जाता है।',
      'शहर वितरण ग्रिड अनुकूलन: 24 घंटे लगातार चालू रहने वाले वितरण ट्रांसफॉर्मरों में कोर लॉस न्यूनतम रखकर ऑल-डे ऊर्जा दक्षता बढ़ाई जाती है।',
      'औद्योगिक वोल्टेज ड्रॉप सुधार: वोल्टेज रेगुलेशन समीकरणों के आधार पर ऑन-लोड टैप चेंजर (OLTC) और कैपेसिटर बैंक स्थापित किए जाते हैं।',
      'सौर एवं पवन ऊर्जा ग्रिड इंटरफेस: सोलर इनवर्टर से जुड़े ट्रांसफॉर्मरों में वोल्टेज सीमाओं को बनाए रखने हेतु सटीक विनियमन आवश्यक है।'
    ],
    bn: [
      'পাওয়ার ট্রান্সমিশন সাবস্টেশন ডিজাইন: সার্বক্ষণিক লোডে পরিচালিত পাওয়ার ট্রান্সফরমারগুলোকে ৯০-১০০% লোডে সর্বোচ্চ দক্ষতার জন্য ডিজাইন করা হয়।',
      'শহুরে ডিস্ট্রিবিউশন গ্রিড অপটিমাইজেশন: ২৪ ঘণ্টা যুক্ত থাকা ডিস্ট্রিবিউশন ট্রান্সফর্মারের কোর লস কমিয়ে অল-ডে এনার্জি দক্ষতা বৃদ্ধি করা হয়।',
      'শিল্পকারখানায় ভোল্টেজ ড্রপ সমন্বয়: ভোল্টেজ রেগুলেশন গণনার মাধ্যমে ট্যাপ চেঞ্জার বা ক্যাপাসিটর ব্যাংক নির্বাচন করা হয়।',
      'নবায়নযোগ্য সৌর ও বায়ু বিদ্যুৎ সংযোগ: গ্রিড কোড অনুযায়ী ভোল্টেজ নিয়ন্ত্রণে রাখতে সঠিক রেগুলেশন মডেলিং অপরিহার্য।'
    ]
  },
  importantPoints: {
    en: [
      'Core losses (hysteresis and eddy current) depend strictly on applied voltage and frequency, remaining virtually constant from no-load to full-load.',
      'Copper losses vary with the square of the fractional load current: P_cu(x) = x² · P_cu(FL).',
      'Maximum efficiency condition (P_cu = P_core) holds strictly when supply voltage and load power factor are constant.',
      'Voltage regulation is positive for lagging power factors (voltage drops) and can become zero or negative for leading power factors (voltage rises).',
      'All-day efficiency is always lower than commercial full-load efficiency because core loss runs continuously for 24 hours even during light-load periods.'
    ],
    hi: [
      'कोर हानियाँ (हिस्टैरिसीस एवं भंवर धारा) केवल वोल्टेज एवं आवृत्ति पर निर्भर करती हैं और नो-लोड से फुल-लोड तक स्थिर रहती हैं।',
      'कॉपर हानियाँ लोड धारा के वर्ग के समानुपाती होती हैं: Pcu(x) = x² · Pcu(FL)।',
      'अधिकतम दक्षता की स्थिति (Pcu = Pcore) तभी मान्य है जब वोल्टेज और पावर फैक्टर स्थिर हों।',
      'लैगिंग पावर फैक्टर पर वोल्टेज रेगुलेशन धनात्मक (वोल्टेज ड्रॉप) तथा लीडिंग पावर फैक्टर पर शून्य या ऋणात्मक (वोल्टेज वृद्धि) हो सकता है।',
      'ऑल-डे दक्षता सदैव सामान्य फुल-लोड दक्षता से कम होती है क्योंकि कोर लॉस 24 घंटे लगातार होता रहता है।'
    ],
    bn: [
      'কোর লস ভোল্টেজ ও কম্পাঙ্কের ওপর নির্ভরশীল এবং লোড নির্বিশেষে সর্বদা স্থির থাকে।',
      'কপার লস লোড কারেন্টের বর্গের সমানুপাতিক: Pcu(x) = x² · Pcu(FL)।',
      'সর্বোচ্চ দক্ষতার শর্ত (Pcu = Pcore) তখনই প্রযোজ্য যখন ভোল্টেজ ও পাওয়ার ফ্যাক্টর স্থির থাকে।',
      'ল্যাগিং লোডে ভোল্টেজ রেগুলেশন পজিটিভ এবং লিডিং লোডে শূন্য বা নেগেটিভ হতে পারে।',
      'অল-ডে দক্ষতা সর্বদা পূর্ণ-লোড দক্ষতার চেয়ে কম হয় কারণ কোর লস ২৪ ঘণ্টা বিরতিহীনভাবে চলতে থাকে।'
    ]
  },
  commonMistakes: {
    en: [
      'Assuming core loss varies with load: core loss depends on voltage and frequency, not on load current.',
      'Calculating copper loss linearly with load: copper loss scales with the square of current (x²), so at half load it is 25% of full-load copper loss, not 50%.',
      'Forgetting that maximum efficiency occurs at a fractional load x < 1: peak efficiency happens when x = √(P_core / P_cu(FL)), which is rarely at 100% nameplate rating for distribution transformers.',
      'Applying the plus (+) sign in the voltage regulation formula for capacitive leading loads instead of the minus (-) sign.',
      'Confusing kVA with kW in efficiency formulas: output power in Watts requires multiplying apparent power (kVA) by the power factor (cosΦ).'
    ],
    hi: [
      'यह सोचना कि कोर लॉस लोड के साथ बदलता है: कोर लॉस केवल वोल्टेज और फ्रीक्वेंसी पर निर्भर करता है।',
      'कॉपर लॉस की रैखिक गणना: कॉपर लॉस x² के अनुसार बदलता है, अतः आधे लोड पर यह 25% होता है, 50% नहीं।',
      'यह मानना कि अधिकतम दक्षता 100% लोड पर ही होती है: अधिकतम दक्षता प्रायः 50-75% लोड पर होती है।',
      'लीडिंग लोड के वोल्टेज रेगुलेशन सूत्र में (+) चिह्न लगाना जबकि (-) चिह्न प्रयुक्त होना चाहिए।',
      'दक्षता सूत्र में kVA और kW में भ्रम: वास्तविक आउटपुट (Watts) निकालने हेतु kVA को cosΦ से गुणा करना आवश्यक है।'
    ],
    bn: [
      'মনে করা যে কোর লস লোডের সাথে পরিবর্তিত হয়: কোর লস লোড কারেন্টের ওপর নির্ভরশীল নয়।',
      'কপার লসকে রৈখিকভাবে হিসাব করা: হাফ লোডে কপার লস ২৫% হয়, ৫০% নয়।',
      'মনে করা যে সর্বোচ্চ দক্ষতা সর্বদা ১০০% লোডেই হয়: ডিস্ট্রিবিউশন ট্রান্সফর্মারে এটি সাধারণত ৫০-৭০% লোডে ঘটে।',
      'ক্যাপাসিটিভ লিডিং লোডের ভোল্টেজ রেগুলেশন সূত্রে (+) চিহ্ন ব্যবহার করা, যেখানে (-) চিহ্ন হওয়া উচিত।',
      'kVA এবং kW গুলিয়ে ফেলা: কার্যকর পাওয়ার বের করতে kVA-কে পাওয়ার ফ্যাক্টর (cosΦ) দিয়ে গুণ করতে হয়।'
    ]
  },
  mcqs: [
    {
      id: 'ch6-l16-mcq1',
      question: {
        en: 'A 50 kVA transformer has an iron loss of 400 W and a full-load copper loss of 1600 W. At what percentage of full-load will maximum efficiency occur?',
        hi: 'एक 50 kVA ट्रांसफॉर्मर की कोर हानि 400 W और फुल-लोड कॉपर हानि 1600 W है। यह फुल-लोड के कितने प्रतिशत पर अधिकतम दक्षता देगा?',
        bn: 'একটি ৫০ kVA ট্রান্সফর্মারের আয়রন লস ৪০০ W এবং ফুল-লোড কপার লস ১৬০০ W। ফুল-লোডের কত শতাংশ লোডে সর্বোচ্চ দক্ষতা অর্জিত হবে?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: '50% of Full Load (since x = √(400 / 1600) = √(0.25) = 0.50 = 50%)',
            hi: '50% फुल लोड (चूँकि x = √(400 / 1600) = 0.50 = 50%)',
            bn: '৫০% ফুল লোড (যেহেতু x = √(৪০০ / ১৬০০) = ০.৫০ = ৫০%)'
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
            en: '75% of Full Load',
            hi: '75% फुल लोड',
            bn: '৭৫% फुल लोड'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: '100% of Full Load',
            hi: '100% फुल लोड',
            bn: '১০০% फुल লোড'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'The fractional load for maximum efficiency is x = √(P_core / P_cu(FL)) = √(400 / 1600) = √(1/4) = 0.50 = 50% of full load (or 25 kVA).',
        hi: 'अधिकतम दक्षता हेतु लोड अनुपात x = √(Pcore / Pcu) = √(400 / 1600) = 0.50 (50% लोड)।',
        bn: 'সর্বোচ্চ দক্ষতায় লোড অনুপাত x = √(Pcore / Pcu) = √(৪০০ / ১৬০০) = ০.৫০ (৫০% লোড)।'
      }
    },
    {
      id: 'ch6-l16-mcq2',
      question: {
        en: 'Under which type of load can the secondary terminal voltage of a transformer rise above its no-load rated voltage (%VR < 0)?',
        hi: 'किस प्रकार के लोड के तहत ट्रांसफॉर्मर का सेकेंडरी वोल्टेज नो-लोड वोल्टेज से अधिक हो सकता है (%VR < 0)?',
        bn: 'কোন ধরনের লোডে ট্রান্সফর্মারের সেকেন্ডারি ভোল্টেজ নো-লোড ভোল্টেজের চেয়েও বৃদ্ধি পেতে পারে (%VR < 0)?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'Leading Power Factor (Capacitive load)',
            hi: 'लीडिंग पावर फैक्टर (कैपेसिटिव लोड)',
            bn: 'লিডিং পাওয়ার ফ্যাক্টর (ক্যাপাসিটিভ লোড)'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'Lagging Power Factor (Inductive load)',
            hi: 'लैगिंग पावर फैक्टर (इंडक्टिव लोड)',
            bn: 'ল্যাগিং পাওয়ার ফ্যাক্টর (ইন্ডাক্টিভ লোড)'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'Unity Power Factor (Pure resistive load)',
            hi: 'यूनिटी पावर फैक्टर (शुद्ध प्रतिरोधी लोड)',
            bn: 'ইউনিটি পাওয়ার ফ্যাক্টর (বিশুদ্ধ রেজিস্ট্রিভ লোড)'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'Zero power factor lagging',
            hi: 'शून्य पावर फैक्टर लैगिंग',
            bn: 'শূন্য পাওয়ার ফ্যাক্টর ল্যাগিং'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'For leading (capacitive) loads, %VR = (I2·R02·cosΦ - I2·X02·sinΦ)/V2. When the reactive drop exceeds the resistive drop, the regulation is negative, meaning the terminal voltage rises under load.',
        hi: 'कैपेसिटिव (लीडिंग) लोड पर सूत्र में ऋण चिह्न (-) आता है। जब रिएक्टिव ड्रॉप रेजिस्टिव ड्रॉप से अधिक होता है, तो वोल्टेज बढ़ जाता है (ऋणात्मक रेगुलेशन)।',
        bn: 'ক্যাপাসিটিভ লিডিং লোডে সূত্রে বিয়োগ চিহ্ন (-) আসে। রিঅ্যাক্টিভ ড্রপ বেশি হলে ভোল্টেজ বেড়ে নেগেটিভ রেগুলেশন ঘটে।'
      }
    },
    {
      id: 'ch6-l16-mcq3',
      question: {
        en: 'Why are distribution transformers designed with their maximum efficiency occurring at 50% to 70% of full load rather than 100% full load?',
        hi: 'वितरण ट्रांसफॉर्मर 100% फुल-लोड के बजाय 50% से 70% लोड पर अधिकतम दक्षता देने के लिए क्यों डिजाइन किए जाते हैं?',
        bn: 'ডিস্ট্রিবিউশন ট্রান্সফরমারকে ১০০% ফুল লোডের পরিবর্তে কেন ৫০% থেকে ৭০% লোডে সর্বোচ্চ দক্ষতার জন্য ডিজাইন করা হয়?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'Because distribution transformers operate at light loads for most of the 24-hour day, so minimizing core loss maximizes all-day energy efficiency',
            hi: 'चूँकि वितरण ट्रांसफॉर्मर दिन के अधिकांश समय हल्के लोड पर काम करते हैं, अतः कोर लॉस कम रखकर ऑल-डे दक्षता बढ़ाई जाती है',
            bn: 'কারণ ডিস্ট্রিবিউশন ট্রান্সফরমার দিনের অধিকাংশ সময় হালকা লোডে থাকে, তাই কোর লস কম রেখে অল-ডে এনার্জি দক্ষতা বাড়ানো হয়'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'To reduce the physical weight of copper in the windings',
            hi: 'वाइंडिंग में तांबे का वजन कम करने के लिए',
            bn: 'ওয়াইন্ডিংয়ে তামার ওজন কমানোর জন্য'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'To eliminate voltage regulation completely',
            hi: 'वोल्टेज रेगुलेशन को पूर्णतः समाप्त करने के लिए',
            bn: 'ভোল্টেজ রেগুলেশন সম্পূর্ণ দূর করার জন্য'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'Because distribution transformers are disconnected at night',
            hi: 'चूँकि वितरण ट्रांसफॉर्मर रात में बंद कर दिए जाते हैं',
            bn: 'কারণ ডিস্ট্রিবিউশন ট্রান্সফরমার রাতে বন্ধ থাকে'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Distribution transformers remain energized 24/7 but supply fluctuating, low average daily loads. Designing them with low core loss ensures the 24-hour all-day energy efficiency is maximized.',
        hi: 'वितरण ट्रांसफॉर्मर 24 घंटे चालू रहते हैं लेकिन दिनभर कम लोड पर चलते हैं। कोर लॉस कम रखकर ऑल-डे ऊर्जा दक्षता अधिकतम की जाती है।',
        bn: 'ডিস্ট্রিবিউশন ট্রান্সফরমার ২৪ ঘণ্টা সংযুক্ত থাকে কিন্তু কম লোডে চলে। কোর লস কম রেখে ২৪ ঘণ্টার অল-ডে শক্তি দক্ষতা সর্বোচ্চ করা হয়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'ch6-l16-pq1',
      question: {
        en: 'Explain why the maximum efficiency condition (P_cu = P_core) in a transformer depends on the assumption that core loss is constant and copper loss varies with the square of the load current.',
        hi: 'स्पष्ट कीजिए कि ट्रांसफॉर्मर में अधिकतम दक्षता की शर्त (Pcu = Pcore) इस मान्यता पर क्यों आधारित है कि कोर लॉस स्थिर रहता है और कॉपर लॉस लोड धारा के वर्ग के अनुसार बदलता है।',
        bn: 'ব্যাখ্যা করো কেন ট্রান্সফর্মারের সর্বোচ্চ দক্ষতার শর্ত (Pcu = Pcore) এই অনুমানের ওপর নির্ভরশীল যে কোর লস স্থির থাকে এবং কপার লস লোড কারেন্টের বর্গের সাথে পরিবর্তিত হয়।'
      },
      hint: {
        en: 'Consider the derivative of efficiency with respect to load current I2 at constant terminal voltage V2 and load power factor cosΦ.',
        hi: 'स्थिर वोल्टेज V2 और पावर फैक्टर cosΦ पर दक्षता समीकरण का लोड करंट I2 के सापेक्ष अवकलन (derivative) लीजिए।',
        bn: 'স্থির ভোল্টেজ V2 এবং পাওয়ার ফ্যাক্টরে কর্মদক্ষতার সমীকরণকে কারেন্ট I2-এর সাপেক্ষে ডিফারেনশিয়েট করার বিষয়টি ভাবো।'
      },
      answerKey: {
        en: '1. In standard engineering analysis, the applied primary voltage V1 and frequency f are held constant, making the magnetic core loss P_core constant regardless of the secondary load current.\n2. The copper loss is purely resistive Joule heating (I2²·R02) and scales quadratically with current.\n3. By setting the first derivative dη/dI2 = 0, the mathematical solution yields I2²·R02 = P_core, proving that maximum efficiency occurs exactly when variable copper loss equals constant core loss.\n4. If supply voltage or frequency fluctuates, or if non-linear harmonics distort the waveform, P_core ceases to be strictly constant, altering the exact maximum efficiency point.',
        hi: '1. वोल्टेज V1 और फ्रीक्वेंसी f स्थिर होने से कोर लॉस Pcore स्थिर रहता है।\n2. कॉपर लॉस I2²·R02 धारा के वर्ग के समानुपाती होता है।\n3. दक्षता समीकरण का अवकलन dη/dI2 = 0 करने पर I2²·R02 = Pcore प्राप्त होता है।\n4. यदि वोल्टेज या फ्रीक्वेंसी बदलती है, तो कोर लॉस स्थिर नहीं रहेगा और यह शर्त बदल जाएगी।',
        bn: '১. সাপ্লাই ভোল্টেজ ও ফ্রিকোয়েন্সি স্থির থাকায় কোর লস Pcore স্থির থাকে।\n২. কপার লস I2²·R02 কারেন্টের বর্গের সমানুপাতিক।\n৩. দক্ষতার সমীকরণকে dη/dI2 = ০ করলে I2²·R02 = Pcore সমীকরণটি পাওয়া যায়।\n৪. ভোল্টেজ বা ফ্রিকোয়েন্সি পরিবর্তিত হলে কোর লস স্থির থাকে না।'
      }
    },
    {
      id: 'ch6-l16-pq2',
      question: {
        en: 'Differentiate between Commercial Efficiency and All-Day Energy Efficiency of a transformer. Why is all-day efficiency particularly critical for distribution transformers but not for power transformers in generating stations?',
        hi: 'ट्रांसफॉर्मर की व्यावसायिक दक्षता (Commercial Efficiency) एवं ऑल-डे ऊर्जा दक्षता में अंतर स्पष्ट कीजिए। ऑल-डे दक्षता वितरण ट्रांसफॉर्मर के लिए क्यों महत्वपूर्ण है जबकि पावर ट्रांसफॉर्मर के लिए नहीं?',
        bn: 'ট্রান্সফর্মারের বাণিজ্যিক কর্মদক্ষতা এবং অল-ডে এনার্জি দক্ষতার মধ্যে পার্থক্য লেখো। কেন অল-ডে দক্ষতা ডিস্ট্রিবিউশন ট্রান্সফর্মারের জন্য অত্যন্ত গুরুত্বপূর্ণ কিন্তু জেনারেটিং স্টেশনের পাওয়ার ট্রান্সফর্মারের জন্য নয়?'
      },
      hint: {
        en: 'Contrast power in kW vs energy in kWh over a 24-hour cycle and compare transmission base-load operating duty with residential customer load curves.',
        hi: 'kW में शक्ति तथा 24 घंटे में kWh में ऊर्जा की तुलना कीजिए और बेस-लोड तथा आवासीय लोड साइकिल पर विचार कीजिए।',
        bn: 'kW-এ তাৎক্ষণিক ক্ষমতা এবং ২৪ ঘণ্টার kWh-এ মোট শক্তির পার্থক্য বিবেচনা করো।'
      },
      answerKey: {
        en: '1. Commercial Efficiency measures instantaneous active power efficiency (kW out / kW in) at a specific steady-state operating point.\n2. All-Day Energy Efficiency measures total integrated energy efficiency (kWh out / kWh in) over a complete 24-hour diurnal cycle.\n3. Power Transformers in generating stations and major transmission substations are stepped up/down under full base-load control (85–100% continuous rating), so commercial full-load efficiency is the key metric.\n4. Distribution Transformers remain energized on the 24-hour grid but deliver high load only for 4–6 peak hours, spending the remaining 18–20 hours under light or zero load. Because iron loss dissipates continuously for 24 hours regardless of load, minimizing core loss to maximize 24-hour kWh all-day efficiency is the primary economic objective.',
        hi: '1. व्यावसायिक दक्षता किसी विशिष्ट क्षण पर आउटपुट पावर (kW) और इनपुट पावर (kW) का अनुपात है।\n2. ऑल-डे दक्षता 24 घंटे में दी गई कुल ऊर्जा (kWh) और ली गई कुल ऊर्जा (kWh) का अनुपात है।\n3. पावर ट्रांसफॉर्मर बेस-लोड (85-100%) पर लगातार काम करते हैं, अतः उनकी व्यावसायिक दक्षता महत्वपूर्ण है।\n4. वितरण ट्रांसफॉर्मर 24 घंटे चालू रहते हैं लेकिन दिन के अधिकांश समय कम लोड पर चलते हैं। अतः 24 घंटे में ऊर्जा हानि कम करने के लिए ऑल-डे दक्षता सर्वोपरि है।',
        bn: '১. বাণিজ্যিক দক্ষতা নির্দিষ্ট মুহূর্তের কার্যকর ক্ষমতার (kW out / kW in) অনুপাত।\n২. অল-ডে দক্ষতা ২৪ ঘণ্টার মোট বিদ্যুৎ শক্তির (kWh out / kWh in) অনুপাত।\n৩. পাওয়ার ট্রান্সফরমার সার্বক্ষণিক পূর্ণ বা ভারী লোডে (৮৫-১০০%) পরিচালিত হয়, তাই এদের বাণিজ্যিক দক্ষতা মুখ্য।\n৪. ডিস্ট্রিবিউশন ট্রান্সফরমার ২৪ ঘণ্টা চালু থাকলেও মাত্র ৪-৬ ঘণ্টা পিক লোডে চলে। বাকি সময় কম লোডে চললেও কোর লস অবিরাম চলতে থাকে, তাই অল-ডে এনার্জি দক্ষতা সর্বাধিক রাখা অত্যন্ত জরুরি।'
      }
    }
  ]
};
