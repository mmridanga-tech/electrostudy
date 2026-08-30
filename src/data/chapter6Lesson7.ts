import { Lesson } from '../types';

export const LESSON_DC_GENERATOR_LOSSES_EFFICIENCY: Lesson = {
  id: 'lsn-ch6-dc-generator-losses-efficiency',
  topicId: 'ch6-dc-generator-losses-efficiency',
  chapterId: 'ch-electrical-machines',
  order: 15,
  title: {
    en: 'DC Generator Losses, Efficiency & Applications',
    hi: 'डीसी जनरेटर की हानियाँ, दक्षता एवं अनुप्रयोग',
    bn: 'ডিসি জেনারেটরের ক্ষয়ক্ষতি, কর্মদক্ষতা ও শিল্প প্রয়োগ'
  },
  description: {
    en: 'Energy flow in DC generators, copper losses (I²R), iron losses (hysteresis and eddy current), mechanical friction and windage, constant vs variable losses, derivation of maximum efficiency condition, and industrial applications.',
    hi: 'डीसी जनरेटर में ऊर्जा प्रवाह, कॉपर हानियाँ (I²R), लौह हानियाँ (हिस्टैरिसीस एवं भंवर धारा), यांत्रिक घर्षण एवं विंडेज हानियाँ, स्थिर बनाम परिवर्तनीय हानियाँ, अधिकतम दक्षता की शर्त का निगमन तथा अनुप्रयोग।',
    bn: 'ডিসি জেনারেটরে শক্তি রূপান্তর প্রবাহ, কপার লস (I²R), কোর লস (হিস্টেরেসিস ও এডি কারেন্ট), মেকানিক্যাল লস, ধ্রুব বনাম পরিবর্তনশীল ক্ষতি, সর্বোচ্চ কর্মদক্ষতার শর্ত প্রতিপাদন এবং শিল্প প্রয়োগ।'
  },
  estimatedMinutes: 34,
  easyExplanation: {
    en: 'A DC generator receives mechanical shaft power from a prime mover (such as a diesel engine or steam turbine) and converts it into terminal electrical power. During this electromechanical conversion, a portion of input power is inevitably lost as heat due to copper resistance (I²R), magnetic core reversals (hysteresis & eddy currents), brush contact friction, and air windage. Efficiency is the percentage of input mechanical power successfully delivered to the electrical load, reaching its maximum when variable copper losses equal constant rotational and core losses.',
    hi: 'डीसी जनरेटर प्राइम मूवर से यांत्रिक शक्ति ग्रहण करता है और इसे टर्मिनल विद्युत शक्ति में परिवर्तित करता है। इस ऊर्जा रूपांतरण प्रक्रिया के दौरान कुछ शक्ति कॉपर प्रतिरोध (I²R), चुंबकीय कोर हानियों (हिस्टैरिसीस एवं भंवर धारा), ब्रश घर्षण तथा हवा के प्रतिरोध के कारण ऊष्मा के रूप में नष्ट हो जाती है। दक्षता इस बात का प्रतिशत माप है कि इनपुट यांत्रिक शक्ति का कितना भाग लोड को विद्युत के रूप में प्राप्त हुआ। अधिकतम दक्षता तब मिलती है जब परिवर्तनीय कॉपर हानि स्थिर हानियों के बराबर हो जाती है।',
    bn: 'ডিসি জেনারেটর প্রাইম মুভার থেকে যান্ত্রিক শক্তি গ্রহণ করে টার্মিনালে বৈদ্যুতিক শক্তিতে রূপান্তর করে। এই রূপান্তরের সময় কপার ওয়াইন্ডিং রোধ (I²R), চৌম্বকীয় কোর লস (হিস্টেরেসিস ও এডি কারেন্ট), ব্রাশের ঘর্ষণ ও বাতাসের বাধার কারণে কিছুটা শক্তি তাপে অপচয় হয়। কর্মদক্ষতা (Efficiency) হলো ইনপুট যান্ত্রিক ক্ষমতার কত শতাংশ বৈদ্যুতিক লোডে পৌঁছাল তার অনুপাত। সর্বোচ্চ দক্ষতা তখনই অর্জিত হয় যখন পরিবর্তনশীল কপার ক্ষতি স্থির ক্ষতির সমান হয়।'
  },
  detailedExplanation: {
    en: `1. Comprehensive Power Flow in a DC Generator:
The energy conversion sequence proceeds across three distinct physical stages:
- Stage 1: Mechanical Shaft Input Power (P_in): Delivered by the prime mover (turbine or engine) to the generator shaft:
  P_in = T_shaft · ω = (2π · N · T_shaft) / 60 [Watts]
- Stage 2: Gross Converted Electromagnetic Power (P_dev): Power converted from mechanical to electrical domain in the rotating armature:
  P_dev = P_in - (P_core + P_mech) = E_g · I_a [Watts]
- Stage 3: Net Terminal Electrical Output Power (P_out): Useful electrical power delivered to the external electrical load:
  P_out = P_dev - (P_cu,a + P_field + P_brush) = V · I_L [Watts]

2. Classification & Physics of Losses in DC Generators:
Losses are grouped into three primary categories based on their operational characteristics:

A. Copper Losses (Electrical I²R Losses - Variable with Load):
- Armature Copper Loss: P_cu,a = I_a² · R_a (Accounts for 30% to 40% of total full-load losses).
- Shunt Field Copper Loss: P_sh = I_sh² · R_sh = V · I_sh (Virtually constant because V and R_sh remain fixed; accounts for 20% to 30% of losses).
- Series Field Copper Loss (in Series/Compound machines): P_se = I_se² · R_se (Variable with load).
- Brush Contact Drop Loss: P_brush = V_brush · I_a (Typically modeled with a standard 1.0 V drop per brush, total V_brush ≈ 2.0 V across carbon brushes).

B. Iron / Core Losses (Magnetic Losses in Armature Core - Constant with Speed):
Because the armature iron core continually rotates through alternating magnetic North and South poles, core flux alternates at frequency f = (P · N) / 120 Hz.
- 1. Hysteresis Loss (P_h): Caused by continuous molecular magnetic domain reversal in the ferromagnetic core:
  P_h = η_s · B_max^1.6 · f · V_core [Watts] (Steinmetz formula, where η_s is Steinmetz hysteresis constant).
- 2. Eddy Current Loss (P_e): Induced circulating eddy currents flowing through the conducting armature iron core:
  P_e = K_e · B_max² · f² · t² · V_core [Watts] (where t is the lamination thickness; minimized by using thin insulated silicon steel laminations of 0.35 mm to 0.5 mm).

C. Mechanical Losses (Rotational Losses - Constant with Speed):
- Friction Loss: Bearing friction and commutator brush sliding friction.
- Windage Loss: Air resistance opposing the spinning armature rotor.

D. Stray Load Losses:
- Induced non-uniform current distribution (skin effect in copper) and core flux distortions due to armature reaction under heavy load. Typically estimated at 1% of full-load output.

3. Constant Losses vs. Variable Losses:
- Constant Losses (P_c): Losses that remain independent of load current I_a:
  P_c = P_core + P_mech + P_sh
- Variable Losses (P_v): Losses that scale quadratically with load current I_a:
  P_v = I_a² · R_a

4. Mathematical Derivation of Condition for Maximum Efficiency:
Generator efficiency is:
η = Output / Input = (V · I_a) / (V · I_a + P_c + I_a² · R_a)   [assuming I_L ≈ I_a for shunt machine]
η = 1 / (1 + P_c / (V · I_a) + (I_a · R_a) / V)

To find maximum efficiency with respect to armature current I_a, differentiate the denominator with respect to I_a and set equal to zero:
d/dI_a [ 1 + P_c / (V · I_a) + (I_a · R_a) / V ] = 0
- P_c / (V · I_a²) + R_a / V = 0
P_c / (V · I_a²) = R_a / V
P_c = I_a² · R_a

CONCLUSION (Golden Rule): Maximum efficiency occurs when Variable Copper Loss equals Total Constant Loss:
I_a² · R_a = P_c
Load current at maximum efficiency:
I_a(max η) = √(P_c / R_a)

5. Industrial Applications of DC Generators:
- Shunt Generator: Battery charging, central station DC excitation for synchronous alternators, general DC lighting.
- Series Generator: DC transmission line booster to compensate for IR line feeder voltage drops.
- Cumulative Compound Generator: Industrial machine shops, heavy DC rolling mills, welding generators (Differential compound), and elevator power supplies.`,
    hi: `1. डीसी जनरेटर में संपूर्ण ऊर्जा प्रवाह:
ऊर्जा रूपांतरण तीन प्रमुख चरणों में होता है:
- चरण 1: शाफ्ट यांत्रिक इनपुट शक्ति (Pin = T · ω): प्राइम मूवर द्वारा जनरेटर शाफ्ट को दी गई शक्ति।
- चरण 2: कुल उत्पन्न विद्युत शक्ति (Pdev = Eg · Ia): आर्मेचर में यांत्रिक से विद्युत में परिवर्तित शक्ति (Pin - कोर एवं यांत्रिक हानियाँ)।
- चरण 3: टर्मिनल विद्युत आउटपुट (Pout = V · IL): लोड को मिलने वाली वास्तविक उपयोगी विद्युत शक्ति।

2. डीसी जनरेटर में हानियों का वर्गीकरण:
- A. कॉपर हानियाँ (I²R): आर्मेचर कॉपर हानि (Ia²Ra), शंट फील्ड हानि (Ish²Rsh), सीरीज फील्ड हानि (Ise²Rse) एवं ब्रश वोल्टेज ड्रॉप हानि (Vbrush · Ia)।
- B. लौह / कोर हानियाँ (Iron Losses):
  * हिस्टैरिसीस हानि (Ph = η_s · B_max^1.6 · f · V): चुंबकीय डोमेन के बार-बार पलटने से उत्पन्न हानि।
  * भंवर धारा हानि (Pe = Ke · B_max² · f² · t² · V): लैमिनेटेड कोर (0.35-0.5 मिमी) का उपयोग करके इसे घटाया जाता है।
- C. यांत्रिक हानियाँ: बेयरिंग व ब्रश घर्षण तथा रोटर वायु प्रतिरोध (विंडेज)।

3. स्थिर बनाम परिवर्तनीय हानियाँ:
- स्थिर हानियाँ (Pc): कोर हानि + यांत्रिक हानि + शंट फील्ड हानि (Pc = Pcore + Pmech + Psh)।
- परिवर्तनीय हानियाँ (Pv): आर्मेचर कॉपर हानि (Pv = Ia² · Ra)।

4. अधिकतम दक्षता की शर्त (Condition for Maximum Efficiency):
दक्षता समीकरण: η = V·Ia / (V·Ia + Pc + Ia²Ra)
अधिकतम दक्षता हेतु अवकलन करने पर:
परिवर्तनीय कॉपर हानि = कुल स्थिर हानि (Ia² · Ra = Pc)
अधिकतम दक्षता पर लोड करंट:
Ia(max η) = √(Pc / Ra)

5. औद्योगिक अनुप्रयोग:
- शंट जनरेटर: बैटरी चार्जिंग, अल्टरनेटर का फील्ड एक्साइटेशन, स्थिर वोल्टेज डीसी पावर सप्लाई।
- सीरीज जनरेटर: डीसी फीडर लाइन बूस्टर (वोल्टेज ड्रॉप की भरपाई हेतु)।
- कम्युलेटिव कंपाउंड जनरेटर: रोलिंग मिल, भारी वर्कशॉप पावर, ओवर-कंपाउंडेड लंबी दूरी डीसी सप्लाई।
- डिफरेंशियल कंपाउंड जनरेटर: आर्क वेल्डिंग जनरेटर।`,
    bn: `১. ডিসি জেনারেটরে শক্তি রূপান্তর প্রবাহ:
- ধাপ ১: শ্যাফট যান্ত্রিক ইনপুট (Pin = T · ω): প্রাইম মুভার থেকে প্রাপ্ত ক্ষমতা।
- ধাপ ২: মোট রূপান্তরিত তড়িচ্চুম্বকীয় শক্তি (Pdev = Eg · Ia = Pin - কোর ও মেকানিক্যাল লস)।
- ধাপ ৩: টার্মিনাল আউটপুট ক্ষমতা (Pout = V · IL = Pdev - কপার ও ব্রাশ লস)।

২. ক্ষয়ক্ষতির (Losses) শ্রেণিবিন্যাস:
- ক. কপার লস (I²R Losses): আর্মেচার কপার ক্ষতি (Ia²Ra), শান্ট ফিল্ড ক্ষতি (Ish²Rsh), সিরিজ ফিল্ড ক্ষতি ও ব্রাশ ড্রপ ক্ষতি।
- খ. কোর / আয়রন লস:
  * হিস্টেরেসিস ক্ষতি (Ph = η_s · B_max^1.6 · f · V)
  * এডি কারেন্ট ক্ষতি (Pe = Ke · B_max² · f² · t² · V): পাতলা ইনসুলেটেড সিলিকন স্টিল ল্যামিনেশন ব্যবহারের মাধ্যমে হ্রাস করা হয়।
- গ. যান্ত্রিক ক্ষতি: বিয়ারিং ঘর্ষণ, ব্রাশের ঘর্ষণ ও বাতাসের বাধা (উইন্ডেজ লস)।

৩. ধ্রুব বনাম পরিবর্তনশীল ক্ষতি:
- ধ্রুব ক্ষতি (Constant Losses, Pc): কোর ক্ষতি + যান্ত্রিক ক্ষতি + শান্ট ফিল্ড ক্ষতি (Pc = Pcore + Pmech + Psh)।
- পরিবর্তনশীল ক্ষতি (Variable Losses, Pv): আর্মেচার কপার ক্ষতি (Pv = Ia² · Ra)।

৪. সর্বোচ্চ কর্মদক্ষতার গাণিতিক শর্ত:
কর্মদক্ষতা η সর্বোচ্চ হবে যখন:
পরিবর্তনশীল কপার ক্ষতি = মোট ধ্রুব ক্ষতি (Ia² · Ra = Pc)
সর্বোচ্চ দক্ষতায় আর্মেচার কারেন্ট:
Ia(max η) = √(Pc / Ra)

৫. ব্যবহারিক প্রয়োগ:
- সান্ট জেনারেটর: ব্যাটারি চার্জিং ও সিনক্রোনাস জেনারেটরের এক্সাইটেশন।
- সিরিজ জেনারেটর: ডিসি ট্রান্সমিশন লাইনে ভোল্টেজ বুস্টার হিসেবে।
- কম্পাউন্ড জেনারেটর: ওয়ার্কশপ, রোলিং মিল ও আর্ক ওয়েল্ডিং (ডিফারেনশিয়াল কম্পাউন্ড)।`
  },
  formulas: [
    {
      id: 'f-gen-efficiency',
      symbol: 'η',
      expression: 'η = (P_out / P_in) × 100% = (V · I_L) / (V · I_L + Total Losses) × 100%',
      formula: 'η = \\frac{V \\cdot I_L}{V \\cdot I_L + P_{core} + P_{mech} + I_a^2 R_a + I_{sh}^2 R_{sh} + V_{brush} I_a} \\times 100\\%',
      title: {
        en: 'Generator Commercial Efficiency',
        hi: 'जनरेटर की व्यावसायिक दक्षता',
        bn: 'জেনারেটরের বাণিজ্যিক কর্মদক্ষতা'
      },
      description: {
        en: 'Ratio of useful terminal electrical power delivered to the load over total mechanical shaft input power supplied by prime mover.',
        hi: 'लोड को प्राप्त टर्मिनल विद्युत आउटपुट शक्ति एवं प्राइम मूवर द्वारा दी गई कुल यांत्रिक इनपुट शक्ति का अनुपात।',
        bn: 'লোডকে প্রদত্ত টার্মিনাল বৈদ্যুতিক আউটপুট এবং প্রাইম মুভার থেকে প্রাপ্ত মোট যান্ত্রিক ইনপুট ক্ষমতার অনুপাত।'
      },
      variables: [
        { symbol: 'V', name: { en: 'Terminal voltage (V)', hi: 'टर्मिनल वोल्टेज (V)', bn: 'টার্মিনাল ভোল্টেজ (V)' } },
        { symbol: 'I_L', name: { en: 'Load current (A)', hi: 'लोड धारा (A)', bn: 'লোড কারেন্ট (A)' } },
        { symbol: 'I_a', name: { en: 'Armature current (A)', hi: 'आर्मेचर धारा (A)', bn: 'আর্মেচার কারেন্ট (A)' } }
      ]
    },
    {
      id: 'f-max-eff-current',
      symbol: 'I_a(max η)',
      expression: 'I_a(max η) = √(P_c / R_a)',
      formula: 'I_{a(\\max \\eta)} = \\sqrt{\\frac{P_c}{R_a}}',
      title: {
        en: 'Armature Current for Maximum Efficiency',
        hi: 'अधिकतम दक्षता हेतु आर्मेचर धारा',
        bn: 'সর্বোচ্চ কর্মদক্ষতায় আর্মেচার কারেন্ট'
      },
      description: {
        en: 'Operating load current at which variable armature copper losses equal total constant core, mechanical, and field losses.',
        hi: 'वह लोड धारा जिस पर परिवर्तनीय आर्मेचर कॉपर हानि स्थिर हानियों (कोर + यांत्रिक + शंट फील्ड) के बराबर हो जाती है।',
        bn: 'যে লোড কারেন্টে পরিবর্তনশীল আর্মেচার কপার ক্ষতি মোট ধ্রুব ক্ষতির (কোর + যান্ত্রিক + শান্ট ফিল্ড) সমান হয়।'
      },
      variables: [
        { symbol: 'P_c', name: { en: 'Total constant losses (W)', hi: 'कुल स्थिर हानियाँ (W)', bn: 'মোট ধ্রুব ক্ষতি (W)' } },
        { symbol: 'R_a', name: { en: 'Armature circuit resistance (Ω)', hi: 'आर्मेचर परिपथ प्रतिरोध (Ω)', bn: 'আর্মেচার সার্কিট রোধ (Ω)' } }
      ]
    },
    {
      id: 'f-armature-copper-loss',
      symbol: 'P_cu,a',
      expression: 'P_cu,a = I_a² · R_a',
      formula: 'P_{cu,a} = I_a^2 R_a',
      title: {
        en: 'Armature Winding Copper Loss',
        hi: 'आर्मेचर वाइंडिंग कॉपर हानि',
        bn: 'আর্মেচার ওয়াইন্ডিং কপার লস'
      },
      description: {
        en: 'Ohmic heating dissipation in armature conductors due to circulating load current.',
        hi: 'लोड धारा प्रवाहित होने पर आर्मेचर चालकों के ओमिक प्रतिरोध के कारण होने वाली ऊष्मा हानि।',
        bn: 'লোড কারেন্ট প্রবাহের কারণে আর্মেচার কন্ডাক্টরে রোধজনিত তাপ অপচয়।'
      }
    },
    {
      id: 'f-eddy-current-loss',
      symbol: 'P_e',
      expression: 'P_e = K_e · B_max² · f² · t² · V_core',
      formula: 'P_e = K_e B_{\\max}^2 f^2 t^2 V_{core}',
      title: {
        en: 'Eddy Current Core Loss',
        hi: 'भंवर धारा कोर हानि',
        bn: 'এডি কারেন্ট কোর লস'
      },
      description: {
        en: 'Loss proportional to the square of lamination thickness (t²), frequency (f²), and peak flux density (B_max²).',
        hi: 'लैमिनेशन मोटाई के वर्ग (t²), आवृत्ति के वर्ग (f²) एवं फ्लक्स घनत्व के वर्ग (B_max²) के समानुपाती हानि।',
        bn: 'ল্যামিনেশন পুরুত্বের বর্গ (t²), ফ্রিকোয়েন্সির বর্গ (f²) এবং পিক ফ্লাক্স ঘনত্বের বর্গ (B_max²) এর সমানুপাতিক ক্ষতি।'
      }
    },
    {
      id: 'f-hysteresis-loss',
      symbol: 'P_h',
      expression: 'P_h = η_s · B_max^1.6 · f · V_core',
      formula: 'P_h = \\eta_s B_{\\max}^{1.6} f V_{core}',
      title: {
        en: 'Steinmetz Hysteresis Loss',
        hi: 'स्टाइनमेट्ज़ हिस्टैरिसीस हानि',
        bn: 'স্টাইনমেটজ হিস্টেরেসিস লস'
      },
      description: {
        en: 'Power dissipated in repeatedly orienting magnetic domains in the rotating ferromagnetic core.',
        hi: 'रोटेटिंग आर्मेचर कोर में चुंबकीय डोमेनों के बार-बार पलटने से होने वाली शक्ति हानि।',
        bn: 'ঘূর্ণায়মান আর্মেচার কোরে চৌম্বকীয় ডোমেনের দিক পরিবর্তনের কারণে ক্ষয়প্রাপ্ত ক্ষমতা।'
      }
    },
    {
      id: 'f-gross-mech-power',
      symbol: 'P_dev',
      expression: 'P_dev = E_g · I_a = P_in - P_rot',
      formula: 'P_{dev} = E_g I_a = P_{in} - (P_{core} + P_{mech})',
      title: {
        en: 'Gross Converted Electromagnetic Power',
        hi: 'कुल रूपांतरित विद्युतचुंबकीय शक्ति',
        bn: 'মোট রূপান্তরিত তড়িচ্চুম্বকীয় ক্ষমতা'
      },
      description: {
        en: 'Total electrical power internally induced in the rotating armature conductors.',
        hi: 'रोटेटिंग आर्मेचर वाइंडिंग में आंतरिक रूप से उत्पन्न कुल विद्युत शक्ति।',
        bn: 'ঘূর্ণায়মান আর্মেচার ওয়াইন্ডিংয়ে অভ্যন্তরীণভাবে উৎপাদিত মোট বৈদ্যুতিক ক্ষমতা।'
      }
    }
  ],
  sections: [
    {
      id: 'sec-power-flow',
      title: {
        en: 'Stage-by-Stage Power Flow & Sankey Conversion',
        hi: 'चरणबद्ध ऊर्जा प्रवाह एवं सांकी रूपांतरण',
        bn: 'ধাপে ধাপে শক্তি প্রবাহ ও রূপান্তর বিশ্লেষণ'
      },
      content: {
        en: 'The electromechanical energy conversion in a DC generator is governed by conservation of energy across three main stages. First, prime-mover mechanical shaft input Pin = T·ω suffers rotational iron and mechanical losses (Pcore + Pmech). The remaining power is converted to electromagnetic power Pdev = Eg·Ia. Finally, electrical copper losses (Ia²Ra, Ish²Rsh, and brush contact drops) subtract from Pdev, leaving usable net electrical power Pout = V·IL at the terminal load.',
        hi: 'डीसी जनरेटर में विद्युत-यांत्रिक ऊर्जा रूपांतरण तीन मुख्य चरणों में होता है। पहले चरण में प्राइम मूवर से प्राप्त यांत्रिक इनपुट Pin में से घूर्णन लौह एवं यांत्रिक हानियाँ (Pcore + Pmech) घटती हैं। शेष शक्ति विद्युतचुंबकीय शक्ति Pdev = Eg·Ia में बदलती है। अंत में कॉपर हानियाँ (Ia²Ra, Ish²Rsh एवं ब्रश ड्रॉप) घटने के बाद टर्मिनल लोड पर उपयोगी आउटपुट Pout = V·IL प्राप्त होता है।',
        bn: 'ডিসি জেনারেটরে শক্তি রূপান্তর তিনটি প্রধান ধাপে সম্পন্ন হয়। প্রথমে প্রাইম মুভার থেকে প্রাপ্ত যান্ত্রিক ইনপুট Pin থেকে কোর ও মেকানিক্যাল লস বাদ গিয়ে রূপান্তরিত হয় Pdev = Eg·Ia-তে। পরিশেষে কপার ও ব্রাশের লস বাদ গিয়ে টার্মিনালে কার্যকর বৈদ্যুতিক ক্ষমতা Pout = V·IL পাওয়া যায়।'
      },
      schematicId: 'dc-generator-losses'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-gen-losses-1',
      problem: {
        en: 'A 220 V DC shunt generator delivers a full-load current of 50 A to an external load. The armature resistance is 0.15 Ω and the shunt field resistance is 110 Ω. Calculate: (a) Shunt field current, (b) Armature current, and (c) Total copper loss in the machine.',
        hi: 'एक 220 V डीसी शंट जनरेटर बाहरी लोड को 50 A की फुल-लोड धारा प्रदान करता है। आर्मेचर प्रतिरोध 0.15 Ω तथा शंट फील्ड प्रतिरोध 110 Ω है। गणना कीजिए: (a) शंट फील्ड धारा, (b) आर्मेचर धारा, तथा (c) मशीन में कुल कॉपर हानि।',
        bn: 'একটি ২২০ V ডিসি শান্ট জেনারেটর ৫০ A ফুল-লোড কারেন্ট সরবরাহ করে। আর্মেচার রোধ ০.১৫ Ω এবং শান্ট ফিল্ড রোধ ১১০ Ω হলে নির্ণয় করুন: (a) শান্ট ফিল্ড কারেন্ট, (b) আর্মেচার কারেন্ট এবং (c) মোট কপার লস।'
      },
      solution: {
        en: `Step 1: Calculate Shunt Field Current (I_sh):
Given: V = 220 V, R_sh = 110 Ω
I_sh = V / R_sh = 220 / 110 = 2.0 A

Step 2: Calculate Armature Current (I_a):
I_a = I_L + I_sh = 50 A + 2.0 A = 52.0 A

Step 3: Calculate Armature Copper Loss (P_cu,a):
P_cu,a = I_a² · R_a = (52.0)² × 0.15 = 2704 × 0.15 = 405.6 W

Step 4: Calculate Shunt Field Copper Loss (P_sh):
P_sh = V · I_sh = 220 × 2.0 = 440.0 W

Step 5: Calculate Total Copper Loss (P_cu,total):
P_cu,total = P_cu,a + P_sh = 405.6 W + 440.0 W = 845.6 W`,
        hi: `चरण 1: शंट फील्ड धारा (I_sh):
I_sh = V / R_sh = 220 / 110 = 2.0 A

चरण 2: आर्मेचर धारा (I_a):
I_a = I_L + I_sh = 50 + 2.0 = 52.0 A

चरण 3: आर्मेचर कॉपर हानि (P_cu,a):
P_cu,a = I_a² · R_a = (52)² × 0.15 = 405.6 W

चरण 4: शंट फील्ड कॉपर हानि (P_sh):
P_sh = V · I_sh = 220 × 2.0 = 440.0 W

चरण 5: कुल कॉपर हानि:
P_cu,total = 405.6 + 440.0 = 845.6 W`,
        bn: `ধাপ ১: শান্ট ফিল্ড কারেন্ট (I_sh):
I_sh = V / R_sh = ২২০ / ১১০ = ২.০ A

ধাপ ২: আর্মেচার কারেন্ট (I_a):
I_a = I_L + I_sh = ৫০ + ২.০ = ৫২.০ A

ধাপ ৩: আর্মেচার কপার লস (P_cu,a):
P_cu,a = I_a² · R_a = (৫২)² × ০.১৫ = ৪০৫.৬ W

ধাপ ৪: শান্ট ফিল্ড কপার লস (P_sh):
P_sh = V · I_sh = ২২০ × ২.০ = ৪৪০.০ W

ধাপ ৫: মোট কপার লস:
P_cu,total = ৪০৫.৬ + ৪৪০.০ = ৮৪৫.৬ W`
      },
      finalAnswer: {
        en: 'I_sh = 2.0 A, I_a = 52.0 A, Total Copper Loss = 845.6 W',
        hi: 'I_sh = 2.0 A, I_a = 52.0 A, कुल कॉपर हानि = 845.6 W',
        bn: 'I_sh = ২.০ A, I_a = ৫২.০ A, মোট কপার লস = ৮৪৫.৬ W'
      }
    },
    {
      id: 'ex-gen-losses-2',
      problem: {
        en: 'A 10 kW, 250 V DC shunt generator has an armature resistance of 0.2 Ω and a shunt field resistance of 125 Ω. If the core and mechanical losses are 600 W, determine the commercial efficiency of the generator at rated full load.',
        hi: 'एक 10 kW, 250 V डीसी शंट जनरेटर का आर्मेचर प्रतिरोध 0.2 Ω एवं शंट फील्ड प्रतिरोध 125 Ω है। यदि कोर एवं यांत्रिक हानियाँ 600 W हों, तो रेटेड फुल लोड पर जनरेटर की व्यावसायिक दक्षता ज्ञात कीजिए।',
        bn: 'একটি ১০ kW, ২৫০ V ডিসি শান্ট জেনারেটরের আর্মেচার রোধ ০.২ Ω এবং শান্ট ফিল্ড রোধ ১২৫ Ω। যদি কোর ও মেকানিক্যাল লস ৬০০ W হয়, তবে রেটেড ফুল লোডে জেনারেটরের বাণিজ্যিক কর্মদক্ষতা নির্ণয় করুন।'
      },
      solution: {
        en: `Step 1: Calculate Rated Load Current (I_L):
P_out = 10 kW = 10,000 W, V = 250 V
I_L = P_out / V = 10,000 / 250 = 40.0 A

Step 2: Calculate Shunt Field Current & Loss:
I_sh = V / R_sh = 250 / 125 = 2.0 A
P_sh = V · I_sh = 250 × 2.0 = 500 W

Step 3: Calculate Armature Current & Copper Loss:
I_a = I_L + I_sh = 40.0 + 2.0 = 42.0 A
P_cu,a = I_a² · R_a = (42.0)² × 0.2 = 1764 × 0.2 = 352.8 W

Step 4: Calculate Total Machine Losses:
P_rot = 600 W (Core + Mechanical)
Total Losses = P_rot + P_sh + P_cu,a = 600 + 500 + 352.8 = 1452.8 W

Step 5: Calculate Mechanical Input Power (P_in):
P_in = P_out + Total Losses = 10,000 + 1452.8 = 11,452.8 W

Step 6: Calculate Full-Load Efficiency (η):
η = (P_out / P_in) × 100% = (10,000 / 11,452.8) × 100% = 87.31%`,
        hi: `चरण 1: फुल लोड करंट: I_L = 10,000 / 250 = 40.0 A
चरण 2: फील्ड करंट एवं हानि: I_sh = 250 / 125 = 2.0 A, P_sh = 500 W
चरण 3: आर्मेचर करंट एवं कॉपर हानि: I_a = 42.0 A, P_cu,a = (42)² × 0.2 = 352.8 W
चरण 4: कुल हानियाँ = 600 + 500 + 352.8 = 1452.8 W
चरण 5: इनपुट शक्ति: P_in = 10,000 + 1452.8 = 11,452.8 W
चरण 6: दक्षता: η = (10,000 / 11,452.8) × 100% = 87.31%`,
        bn: `ধাপ ১: ফুল লোড কারেন্ট: I_L = ১০,০০০ / ২৫০ = ৪০.০ A
ধাপ ২: শান্ট কারেন্ট ও লস: I_sh = ২৫০ / ১২৫ = ২.০ A, P_sh = ৫০০ W
ধাপ ৩: আর্মেচার কারেন্ট ও লস: I_a = ৪২.০ A, P_cu,a = (৪২)² × ০.২ = ৩৫২.৮ W
ধাপ ৪: মোট ক্ষয়ক্ষতি = ৬০০ + ৫০০ + ৩৫২.৮ = ১৪৫২.৮ W
ধাপ ৫: ইনপুট ক্ষমতা = ১০,০০০ + ১৪৫২.৮ = ১১,৪৫২.৮ W
ধাপ ৬: কর্মদক্ষতা: η = (১০,০০০ / ১১,৪৫২.৮) × ১০০% = ৮৭.৩১%`
      },
      finalAnswer: {
        en: 'Commercial Full-Load Efficiency η = 87.31%',
        hi: 'व्यावसायिक फुल-लोड दक्षता η = 87.31%',
        bn: 'বাণিজ্যিক ফুল-লোড কর্মদক্ষতা η = ৮৭.৩১%'
      }
    },
    {
      id: 'ex-gen-losses-3',
      problem: {
        en: 'A 200 V DC shunt generator has constant losses (iron, mechanical, and shunt field) equal to 800 W. Armature resistance is 0.12 Ω. Find: (a) The armature current at which maximum efficiency occurs, and (b) The maximum efficiency when delivering power at 200 V terminal voltage.',
        hi: 'एक 200 V डीसी शंट जनरेटर की स्थिर हानियाँ (लौह, यांत्रिक एवं शंट फील्ड) 800 W हैं। आर्मेचर प्रतिरोध 0.12 Ω है। ज्ञात कीजिए: (a) वह आर्मेचर धारा जिस पर अधिकतम दक्षता प्राप्त होगी, तथा (b) 200 V टर्मिनल वोल्टेज पर अधिकतम दक्षता का मान।',
        bn: 'একটি ২০০ V ডিসি শান্ট জেনারেটরের ধ্রুব ক্ষতি (আয়রন, মেকানিক্যাল ও শান্ট ফিল্ড) ৮০০ W। আর্মেচার রোধ ০.১২ Ω হলে: (a) সর্বোচ্চ দক্ষতায় আর্মেচার কারেন্ট এবং (b) ২০০ V টার্মিনালে সর্বোচ্চ কর্মদক্ষতা নির্ণয় করুন।'
      },
      solution: {
        en: `Step 1: Identify Given Parameters:
V = 200 V, Constant Losses P_c = 800 W, R_a = 0.12 Ω

Step 2: Condition for Maximum Efficiency:
Variable Copper Loss = Constant Loss
I_a² · R_a = P_c
I_a = √(P_c / R_a) = √(800 / 0.12) = √(6666.67) = 81.65 A

Step 3: Calculate Power Output at Max Efficiency (assuming I_L ≈ I_a):
P_out = V · I_a = 200 V × 81.65 A = 16,330 W = 16.33 kW

Step 4: Calculate Total Losses at Max Efficiency:
Total Losses = Constant Losses + Variable Copper Loss
Total Losses = P_c + P_c = 2 · P_c = 2 × 800 W = 1600 W

Step 5: Calculate Maximum Efficiency (η_max):
P_in = P_out + Total Losses = 16,330 + 1600 = 17,930 W
η_max = (P_out / P_in) × 100% = (16,330 / 17,930) × 100% = 91.08%`,
        hi: `चरण 1: अधिकतम दक्षता हेतु आर्मेचर धारा:
I_a = √(P_c / R_a) = √(800 / 0.12) = 81.65 A

चरण 2: आउटपुट शक्ति:
P_out = V · I_a = 200 × 81.65 = 16,330 W

चरण 3: अधिकतम दक्षता पर कुल हानियाँ = 2 × P_c = 2 × 800 = 1600 W

चरण 4: अधिकतम दक्षता:
η_max = (16,330 / (16,330 + 1600)) × 100% = 91.08%`,
        bn: `ধাপ ১: সর্বোচ্চ দক্ষতায় আর্মেচার কারেন্ট:
I_a = √(P_c / R_a) = √(৮০০ / ০.১২) = ৮১.৬৫ A

ধাপ ২: আউটপুট ক্ষমতা:
P_out = V · I_a = ২০০ × ৮১.৬৫ = ১৬,৩৩০ W

ধাপ ৩: সর্বোচ্চ দক্ষতায় মোট লস = ২ × P_c = ২ × ৮০০ = ১৬০০ W

ধাপ ৪: সর্বোচ্চ কর্মদক্ষতা:
η_max = (১৬,৩৩০ / (১৬,৩৩০ + ১৬০০)) × ১০০% = ৯১.০৮%`
      },
      finalAnswer: {
        en: 'I_a(max η) = 81.65 A, Maximum Efficiency η_max = 91.08%',
        hi: 'I_a(max η) = 81.65 A, अधिकतम दक्षता η_max = 91.08%',
        bn: 'I_a(max η) = ৮১.৬৫ A, সর্বোচ্চ কর্মদক্ষতা η_max = ৯১.০৮%'
      }
    },
    {
      id: 'ex-gen-losses-4',
      problem: {
        en: 'A 4-pole DC generator has an armature core volume of 0.025 m³ and operates at 1200 RPM with a maximum flux density of 1.2 T. The Steinmetz coefficient is 1.6 × 10⁻⁴ and lamination thickness is 0.4 mm with eddy loss coefficient K_e = 2.5 × 10⁻⁵. Calculate the total core loss (hysteresis + eddy current).',
        hi: 'एक 4-पोल डीसी जनरेटर के आर्मेचर कोर का आयतन 0.025 m³ है और यह 1.2 T अधिकतम फ्लक्स घनत्व पर 1200 RPM पर चलता है। स्टाइनमेट्ज़ गुणांक 1.6 × 10⁻⁴ तथा लैमिनेशन मोटाई 0.4 मिमी (Ke = 2.5 × 10⁻⁵) है। कुल कोर हानि (हिस्टैरिसीस + भंवर धारा) की गणना कीजिए।',
        bn: 'একটি ৪-পোল ডিসি জেনারেটরের আর্মেচার কোর আয়তন ০.০২৫ m³ এবং এটি ১২০০ RPM গতিতে ১.২ T পিক ফ্লাক্স ঘনত্বে চালিত। স্টাইনমেটজ সহগ ১.৬ × ১০⁻⁴ এবং ল্যামিনেশন পুরুত্ব ০.৪ মিমি (Ke = ২.৫ × ১০⁻⁵) হলে মোট কোর লস নির্ণয় করুন।'
      },
      solution: {
        en: `Step 1: Calculate Magnetic Reversal Frequency (f):
f = (P · N) / 120 = (4 × 1200) / 120 = 40 Hz

Step 2: Calculate Hysteresis Loss (P_h):
P_h = η_s · B_max^1.6 · f · V_core
Given: B_max = 1.2 T, B_max^1.6 = (1.2)^1.6 = 1.3366
P_h = (1.6 × 10⁻⁴) × 1.3366 × 40 × 0.025 × 10⁶ = 213.86 W

Step 3: Calculate Eddy Current Loss (P_e):
P_e = K_e · B_max² · f² · t² · V_core
Given: t = 0.4 mm = 0.4 × 10⁻³ m, t² = 0.16 × 10⁻⁶
B_max² = (1.2)² = 1.44, f² = 40² = 1600
P_e = (2.5 × 10⁻⁵) × 1.44 × 1600 × 0.16 × 10⁻⁶ × 0.025 × 10¹² = 230.4 W

Step 4: Total Core Loss (P_core):
P_core = P_h + P_e = 213.86 W + 230.40 W = 444.26 W`,
        hi: `चरण 1: चुंबकीय आवृत्ति: f = (4 × 1200) / 120 = 40 Hz
चरण 2: हिस्टैरिसीस हानि: P_h = 213.86 W
चरण 3: भंवर धारा हानि: P_e = 230.40 W
चरण 4: कुल कोर हानि = P_h + P_e = 444.26 W`,
        bn: `ধাপ ১: চৌম্বকীয় ফ্রিকোয়েন্সি: f = (৪ × ১২০০) / ১২০ = ৪০ Hz
ধাপ ২: হিস্টেরেসিস লস: P_h = ২১৩.৮৬ W
ধাপ ৩: এডি কারেন্ট লস: P_e = ২৩০.৪০ W
ধাপ ৪: মোট কোর লস = ২১৩.৮৬ + ২৩০.৪০ = ৪৪৪.২৬ W`
      },
      finalAnswer: {
        en: 'Total Iron / Core Loss P_core = 444.26 W (Hysteresis: 213.86 W, Eddy: 230.40 W)',
        hi: 'कुल कोर हानि P_core = 444.26 W (हिस्टैरिसीस: 213.86 W, भंवर धारा: 230.40 W)',
        bn: 'মোট কোর লস P_core = ৪৪৪.২৬ W (হিস্টেরেসিস: ২১৩.৮৬ W, এডি: ২৩০.৪০ W)'
      }
    },
    {
      id: 'ex-gen-losses-5',
      problem: {
        en: 'A prime mover delivers 40 kW shaft mechanical power to a 230 V DC compound generator. The rotational (friction, windage & core) losses are 1.8 kW. The electrical losses in the windings and brushes are 2.2 kW. Calculate: (a) Gross electromagnetic power generated, (b) Terminal electrical power delivered, and (c) Commercial efficiency.',
        hi: 'एक प्राइम मूवर 230 V डीसी कंपाउंड जनरेटर को 40 kW शाफ्ट यांत्रिक शक्ति प्रदान करता है। घूर्णन (घर्षण, विंडेज एवं कोर) हानियाँ 1.8 kW हैं। वाइंडिंग एवं ब्रशों में विद्युत हानियाँ 2.2 kW हैं। गणना कीजिए: (a) उत्पन्न कुल विद्युतचुंबकीय शक्ति, (b) लोड को दी गई टर्मिनल शक्ति, तथा (c) व्यावसायिक दक्षता।',
        bn: 'একটি প্রাইম মুভার ২৩০ V ডিসি কম্পাউন্ড জেনারেটরে ৪০ kW শ্যাফট যান্ত্রিক ক্ষমতা প্রদান করে। ঘূর্ণন লস (ঘর্ষণ, উইন্ডেজ ও কোর) ১.৮ kW এবং ওয়াইন্ডিং ও ব্রাশে মোট বৈদ্যুতিক লস ২.২ kW হলে নির্ণয় করুন: (a) মোট উৎপন্ন তড়িচ্চুম্বকীয় ক্ষমতা, (b) টার্মিনাল আউটপুট ক্ষমতা এবং (c) বাণিজ্যিক কর্মদক্ষতা।'
      },
      solution: {
        en: `Step 1: Given Values:
Mechanical Input P_in = 40.0 kW = 40,000 W
Rotational Losses P_rot = 1.8 kW = 1800 W
Electrical Copper Losses P_elec = 2.2 kW = 2200 W

Step 2: Calculate Gross Converted Electromagnetic Power (P_dev):
P_dev = P_in - P_rot = 40.0 kW - 1.8 kW = 38.2 kW = 38,200 W

Step 3: Calculate Terminal Electrical Output (P_out):
P_out = P_dev - P_elec = 38.2 kW - 2.2 kW = 36.0 kW = 36,000 W

Step 4: Calculate Total Losses:
Total Losses = P_rot + P_elec = 1.8 kW + 2.2 kW = 4.0 kW

Step 5: Calculate Commercial Efficiency (η):
η = (P_out / P_in) × 100% = (36.0 / 40.0) × 100% = 90.0%`,
        hi: `चरण 1: उत्पन्न विद्युतचुंबकीय शक्ति: P_dev = 40.0 - 1.8 = 38.2 kW
चरण 2: टर्मिनल विद्युत आउटपुट: P_out = 38.2 - 2.2 = 36.0 kW
चरण 3: कुल हानियाँ = 1.8 + 2.2 = 4.0 kW
चरण 4: व्यावसायिक दक्षता: η = (36.0 / 40.0) × 100% = 90.0%`,
        bn: `ধাপ ১: মোট উৎপন্ন তড়িচ্চুম্বকীয় ক্ষমতা: P_dev = ৪০.০ - ১.৮ = ৩৮.২ kW
ধাপ ২: টার্মিনাল বৈদ্যুতিক আউটপুট: P_out = ৩৮.২ - ২.২ = ৩৬.০ kW
ধাপ ৩: মোট ক্ষয়ক্ষতি = ১.৮ + ২.২ = ৪.০ kW
ধাপ ৪: বাণিজ্যিক কর্মদক্ষতা: η = (৩৬.০ / ৪০.০) × ১০০% = ৯০.০%`
      },
      finalAnswer: {
        en: 'P_dev = 38.2 kW, P_out = 36.0 kW, Efficiency η = 90.0%',
        hi: 'P_dev = 38.2 kW, P_out = 36.0 kW, दक्षता η = 90.0%',
        bn: 'P_dev = ৩৮.২ kW, P_out = ৩৬.০ kW, কর্মদক্ষতা η = ৯০.০%'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Battery Storage Charging Stations: Constant-voltage DC shunt generators provide high-efficiency bulk power for submarine and telecommunication backup batteries.',
      'DC Transmission Feeder Boosters: Series DC generators boost line voltage in traction systems to offset I²R voltage drops across long overhead lines.',
      'Diesel Locomotive Auxiliary Power: Cumulative compound generators supply reliable DC power for locomotive controls, blowers, and braking pumps.',
      'Arc Welding Power Sources: Differential compound generators provide drooping characteristics, preventing destructive short-circuit currents when the electrode touches workpieces.',
      'High-Power Industrial Electrolysis: Separately excited DC generators deliver ripple-free high current (thousands of Amperes) for aluminum smelting and electroplating.'
    ],
    hi: [
      'बैटरी चार्जिंग स्टेशन: शंट जनरेटर का उपयोग सबमरीन एवं टेलीकॉम बैकअप बैटरी को स्थिर वोल्टेज पर कुशलतापूर्वक चार्ज करने में होता है।',
      'डीसी ट्रांसमिशन लाइन बूस्टर: सीरीज जनरेटर ट्रैक्शन सिस्टम में लंबी ओवरहेड लाइनों के वोल्टेज ड्रॉप की भरपाई हेतु बूस्टर के रूप में कार्य करते हैं।',
      'डीजल लोकोमोटिव सहायक बिजली: कम्युलेटिव कंपाउंड जनरेटर लोकोमोटिव के नियंत्रण, ब्लोअर एवं ब्रेकिंग सिस्टम को स्थिर डीसी सप्लाई देते हैं।',
      'आर्क वेल्डिंग विद्युत स्रोत: डिफरेंशियल कंपाउंड जनरेटर की गिरती हुई विशेषता वेल्डिंग के दौरान अत्यधिक शॉर्ट-सर्किट करंट को रोकती है।',
      'औद्योगिक इलेक्ट्रोप्लेटिंग एवं धातु शोधन: सेपरेटली एक्साइटेड जनरेटर एल्युमीनियम निष्कर्षण एवं इलेक्ट्रोप्लेटिंग हेतु हजारों एम्पीयर की स्थिर धारा प्रदान करते हैं।'
    ],
    bn: [
      'ব্যাটারি চার্জিং স্টেশন: সাবমেরিন এবং টেলিযোগাযোগ ব্যাকআপ ব্যাটারি চার্জ করার জন্য স্থিতিশীল ভোল্টেজে শান্ট জেনারেটর ব্যবহৃত হয়।',
      'ডিসি ট্রান্সমিশন ফিডার বুস্টার: দূরবর্তী লাইনের ভোল্টেজ ড্রপ পূরণ করতে সিরিজ জেনারেটর বুস্টার হিসেবে কাজ করে।',
      'লোকোমোটিভ সহায়ক বিদ্যুৎ: ডিজেল ট্রেনে সহায়ক যন্ত্রপাতি ও ব্রেকিং পাম্প পরিচালনার জন্য কিউমুলেটিভ কম্পাউন্ড জেনারেটর ব্যবহৃত হয়।',
      'আর্ক ওয়েল্ডিং সরঞ্জাম: ইলেক্ট্রোড শর্ট সার্কিটের ক্ষতি এড়াতে ডিফারেনশিয়াল কম্পাউন্ড জেনারেটর ড্রপিং বৈশিষ্ট্য প্রদান করে।',
      'ইলেক্ট্রোপ্লেটিং ও মেটালার্জি: অ্যালুমিনিয়াম পরিশোধন ও ইলেক্ট্রোপ্লেটিং কারখানায় হাজার হাজার অ্যাম্পিয়ার ডিসি কারেন্ট সরবরাহ করতে ব্যবহৃত হয়।'
    ]
  },
  importantPoints: {
    en: [
      'Golden Condition for Maximum Efficiency: Variable copper loss (Ia²Ra) MUST EQUAL total constant losses (Pc = Pcore + Pmech + Psh).',
      'Eddy current loss scales with the square of lamination thickness (t²); laminating the core into 0.35–0.5 mm sheets slashes eddy loss by >95%.',
      'Hysteresis loss is minimized by using high-permeability silicon steel with narrow B-H hysteresis loop area.',
      'Shunt field copper loss (V·Ish) is treated as a constant loss because terminal voltage V is maintained approximately constant.',
      'Brush contact loss is proportional to armature current (Pbrush = Vbrush · Ia) with an empirical ~2.0 V drop across two carbon brushes.'
    ],
    hi: [
      'अधिकतम दक्षता का सुनहरा नियम: परिवर्तनीय कॉपर हानि (Ia²Ra) कुल स्थिर हानियों (Pc = Pcore + Pmech + Psh) के ठीक बराबर होनी चाहिए।',
      'भंवर धारा हानि लैमिनेशन मोटाई के वर्ग (t²) के समानुपाती होती है; कोर को 0.35-0.5 मिमी शीटों में लैमिनेट करके इसे 95% से अधिक घटाया जाता है।',
      'हिस्टैरिसीस हानि को संकीर्ण B-H लूप वाले सिलिकॉन स्टील का उपयोग करके न्यूनतम किया जाता है।',
      'शंट फील्ड हानि (V·Ish) को स्थिर हानि माना जाता है क्योंकि टर्मिनल वोल्टेज लगभग स्थिर रहता है।',
      'ब्रश संपर्क हानि आर्मेचर धारा के सीधे समानुपाती होती है (Pbrush = Vbrush · Ia), जिसमें दोनों कार्बन ब्रशों पर कुल 2.0 V ड्रॉप होता है।'
    ],
    bn: [
      'সর্বোচ্চ কর্মদক্ষতার মূল শর্ত: পরিবর্তনশীল কপার ক্ষতি (Ia²Ra) অবশ্যই মোট ধ্রুব ক্ষতির (Pc) সমান হতে হবে।',
      'এডি কারেন্ট লস ল্যামিনেশন পুরুত্বের বর্গের (t²) সমানুপাতিক; পাতলা ল্যামিনেশন কোর ব্যবহারে এই ক্ষতি ৯৫% পর্যন্ত কমে।',
      'হিস্টেরেসিস লস কমাতে সংকীর্ণ B-H লুপযুক্ত সিলিকন স্টিল ব্যবহার করা হয়।',
      'শান্ট ফিল্ড লসকে ধ্রুব ক্ষতি হিসেবে গণ্য করা হয় কারণ টার্মিনাল ভোল্টেজ প্রায় অপরিবর্তিত থাকে।',
      'ব্রাশ ড্রপ লস আর্মেচার কারেন্টের সমানুপাতিক (Pbrush = Vbrush · Ia), সাধারণত দুটি কার্বন ব্রাশে মোট ২.০ V ড্রপ ধরা হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistaking Shunt Field Loss as Variable: Shunt field loss is constant because field voltage is constant; only armature copper loss Ia²Ra varies with load demand.',
      'Confusing Commercial vs Electrical Efficiency: Electrical efficiency is Pout / Pdev, whereas Commercial (overall) efficiency is Pout / Pin(shaft). Commercial efficiency accounts for all mechanical losses.',
      'Forgetting Field Current in Armature Current: In a shunt generator, Ia = IL + Ish. Never equate armature current directly to load current.',
      'Ignoring Lamination Thickness in Eddy Loss: Assuming core loss is purely hysteresis; eddy current loss grows with the square of frequency (f²) and thickness (t²).'
    ],
    hi: [
      'शंट फील्ड हानि को परिवर्तनीय मानना: शंट फील्ड हानि स्थिर होती है क्योंकि वोल्टेज स्थिर रहता है; केवल आर्मेचर कॉपर हानि (Ia²Ra) लोड के साथ बदलती है।',
      'विद्युत एवं व्यावसायिक दक्षता में भ्रम: विद्युत दक्षता Pout / Pdev होती है, जबकि व्यावसायिक (समग्र) दक्षता Pout / Pin होती है जिसमें यांत्रिक हानियाँ भी शामिल हैं।',
      'आर्मेचर करंट में फील्ड करंट भूलना: शंट जनरेटर में Ia = IL + Ish होता है। आर्मेचर करंट को सीधे लोड करंट के बराबर न मानें।',
      'एडी करंट में लैमिनेशन मोटाई भूलना: भंवर धारा हानि आवृत्ति के वर्ग (f²) और लैमिनेशन मोटाई के वर्ग (t²) के समानुपाती होती है।'
    ],
    bn: [
      'শান্ট ফিল্ড লসকে পরিবর্তনশীল ভাবা: শান্ট ফিল্ড লস ধ্রুবক কারণ ভোল্টেজ অপরিবর্তিত থাকে; কেবল আর্মেচার কপার লস (Ia²Ra) লোডের সাথে পরিবর্তিত হয়।',
      'ইলেকট্রিক্যাল ও কমার্শিয়াল দক্ষতার মধ্যে বিভ্রান্তি: ইলেকট্রিক্যাল দক্ষতা হলো Pout / Pdev, কিন্তু বাণিজ্যিক দক্ষতা হলো Pout / Pin যা মেকানিক্যাল লসকেও অন্তর্ভুক্ত করে।',
      'আর্মেচার কারেন্টে ফিল্ড কারেন্ট যোগ করতে ভুলে যাওয়া: শান্ট জেনারেটরে Ia = IL + Ish হয়, তাই কখনোই Ia ও IL কে সমান ধরবেন না।',
      'এডি কারেন্ট লসে পুরুত্বের প্রভাব ভুলে যাওয়া: এডি কারেন্ট লস ফ্রিকোয়েন্সির বর্গ (f²) এবং ল্যামিনেশন পুরুত্বের বর্গের (t²) সমানুপাতিক।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-gen-losses-1',
      question: {
        en: 'A DC generator achieves its maximum operating efficiency when:',
        hi: 'एक डीसी जनरेटर अपनी अधिकतम परिचालन दक्षता तब प्राप्त करता है जब:',
        bn: 'একটি ডিসি জেনারেটর তার সর্বোচ্চ কর্মদক্ষতা অর্জন করে যখন:'
      },
      options: [
        { id: 'opt-a', text: { en: 'Variable copper loss equals constant losses', hi: 'परिवर्तनीय कॉपर हानि स्थिर हानियों के बराबर हो', bn: 'পরিবর্তনশীল কপার ক্ষতি ধ্রুব ক্ষতির সমান হয়' } },
        { id: 'opt-b', text: { en: 'Armature copper loss is zero', hi: 'आर्मेचर कॉपर हानि शून्य हो', bn: 'আর্মেচার কপার লস শূন্য হয়' } },
        { id: 'opt-c', text: { en: 'Core loss equals mechanical loss', hi: 'कोर हानि यांत्रिक हानि के बराबर हो', bn: 'কোর লস মেকানিক্যাল লসের সমান হয়' } },
        { id: 'opt-d', text: { en: 'Terminal voltage reaches double its rated value', hi: 'टर्मिनल वोल्टेज रेटेड मान से दोगुना हो जाए', bn: 'টার্মিনাল ভোল্টেজ রেটেড মানের দ্বিগুণ হয়' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'By calculus derivation of the efficiency equation, maximum efficiency mathematically occurs when variable copper loss (Ia²Ra) equals total constant loss (Pc = Pcore + Pmech + Psh).',
        hi: 'दक्षता समीकरण के गणितीय अवकलन से सिद्ध होता है कि अधिकतम दक्षता तब होती है जब परिवर्तनीय कॉपर हानि (Ia²Ra) स्थिर हानियों (Pc) के बराबर हो।',
        bn: 'কর্মদক্ষতা সমীকরণের ক্যালকুলাস প্রতিপাদন অনুসারে, সর্বোচ্চ দক্ষতা অর্জিত হয় যখন পরিবর্তনশীল কপার ক্ষতি (Ia²Ra) মোট ধ্রুব ক্ষতির (Pc) সমান হয়।'
      }
    },
    {
      id: 'mcq-gen-losses-2',
      question: {
        en: 'Why is the armature core of a DC generator made of laminated silicon steel sheets rather than solid iron?',
        hi: 'डीसी जनरेटर के आर्मेचर कोर को ठोस लोहे के बजाय लैमिनेटेड सिलिकॉन स्टील शीटों से क्यों बनाया जाता है?',
        bn: 'ডিসি জেনারেটরের আর্মেচার কোর কেন নিরেট লোহার বদলে ল্যামিনেটেড সিলিকন স্টিল শিট দিয়ে তৈরি করা হয়?'
      },
      options: [
        { id: 'opt-a', text: { en: 'To reduce eddy current loss and hysteresis loss', hi: 'भंवर धारा हानि एवं हिस्टैरिसीस हानि को घटाने हेतु', bn: 'এডি কারেন্ট লস এবং হিস্টেরেসিস লস হ্রাস করার জন্য' } },
        { id: 'opt-b', text: { en: 'To increase armature winding resistance', hi: 'आर्मेचर वाइंडिंग प्रतिरोध बढ़ाने हेतु', bn: 'আর্মেচার ওয়াইন্ডিং রোধ বৃদ্ধি করার জন্য' } },
        { id: 'opt-c', text: { en: 'To increase generator operating weight', hi: 'जनरेटर का भार बढ़ाने हेतु', bn: 'জেনারেটরের ওজন বাড়ানোর জন্য' } },
        { id: 'opt-d', text: { en: 'To eliminate the need for carbon brushes', hi: 'कार्बन ब्रश की आवश्यकता समाप्त करने हेतु', bn: 'কার্বন ব্রাশের প্রয়োজনীয়তা দূর করার জন্য' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Laminating the core into thin insulated sheets breaks continuous circulating eddy current paths (Pe ∝ t²), while high-permeability silicon steel reduces hysteresis loop area.',
        hi: 'पतली लैमिनेटेड शीटें भंवर धाराओं के परिपथ को तोड़ती हैं (Pe ∝ t²), तथा सिलिकॉन स्टील हिस्टैरिसीस लूप क्षेत्रफल को घटाकर हानि कम करता है।',
        bn: 'পাতলা ল্যামিনেশন এডি কারেন্ট প্রবাহের পথ ভেঙে দেয় (Pe ∝ t²) এবং সিলিকন স্টিল হিস্টেরেসিস লুপের ক্ষেত্রফল কমিয়ে দেয়।'
      }
    },
    {
      id: 'mcq-gen-losses-3',
      question: {
        en: 'Which type of DC generator is specifically employed in arc welding applications?',
        hi: 'आर्क वेल्डिंग अनुप्रयोगों में विशेष रूप से किस प्रकार के डीसी जनरेटर का उपयोग किया जाता है?',
        bn: 'আর্ক ওয়েল্ডিংয়ের কাজে বিশেষভাবে কোন ধরনের ডিসি জেনারেটর ব্যবহৃত হয়?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Differential compound generator', hi: 'डिफरेंशियल कंपाउंड जनरेटर', bn: 'ডিফারেনশিয়াল কম্পাউন্ড জেনারেটর' } },
        { id: 'opt-b', text: { en: 'Over-compounded generator', hi: 'ओवर-कंपाउंडेड जनरेटर', bn: 'ওভার-কম্পাউন্ডেড জেনারেটর' } },
        { id: 'opt-c', text: { en: 'Pure series generator', hi: 'प्योर सीरीज जनरेटर', bn: 'পিওর সিরিজ জেনারেটর' } },
        { id: 'opt-d', text: { en: 'Flat-compounded generator', hi: 'फ्लैट-कंपाउंडेड जनरेटर', bn: 'ফ্ল্যাট-কম্পাউন্ডেড জেনারেটর' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Differential compound generators possess a steeply drooping terminal voltage characteristic, which automatically limits destructive surge currents during short-circuit electrode striking.',
        hi: 'डिफरेंशियल कंपाउंड जनरेटर में तेजी से गिरती हुई वोल्टेज विशेषता होती है, जो वेल्डिंग रॉड छूने पर खतरनाक शॉर्ट-सर्किट धारा को सीमित रखती है।',
        bn: 'ডিফারেনশিয়াল কম্পাউন্ড জেনারেটরের টার্মিনাল ভোল্টেজ দ্রুত হ্রাস পায় (ড্রপিং ক্যারেক্টারিস্টিক), যা ওয়েল্ডিং রড স্পর্শকালে ক্ষতিকর শর্ট-সার্কিট কারেন্ট সীমাবদ্ধ করে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-gen-losses-1',
      question: {
        en: 'A 240 V DC shunt generator has an armature resistance of 0.25 Ω, shunt field resistance of 120 Ω, and total constant losses (iron + friction + windage) of 900 W. Determine: (a) The full-load efficiency when delivering 40 A to the load, and (b) The load current at which the generator operates at peak maximum efficiency.',
        hi: 'एक 240 V डीसी शंट जनरेटर का आर्मेचर प्रतिरोध 0.25 Ω, शंट फील्ड प्रतिरोध 120 Ω तथा कुल स्थिर हानियाँ (लौह + घर्षण + विंडेज) 900 W हैं। ज्ञात कीजिए: (a) लोड को 40 A धारा देते समय फुल-लोड दक्षता, तथा (b) वह लोड धारा जिस पर जनरेटर अधिकतम दक्षता पर कार्य करेगा।',
        bn: 'একটি ২৪০ V ডিসি শান্ট জেনারেটরের আর্মেচার রোধ ০.২৫ Ω, শান্ট ফিল্ড রোধ ১২০ Ω এবং মোট ধ্রুব ক্ষতি ৯০০ W। নির্ণয় করুন: (a) লোডে ৪০ A সরবরাহের সময় ফুল-লোড দক্ষতা এবং (b) সর্বোচ্চ দক্ষতায় প্রয়োজনীয় লোড কারেন্ট।'
      },
      hint: {
        en: 'Find field current Ish = 240/120 = 2 A, total constant loss Pc = 900 + (240 × 2) = 1380 W. Then compute Ia = 42 A for part (a) and Ia(max) = sqrt(Pc / Ra) for part (b).',
        hi: 'फील्ड करंट Ish = 240/120 = 2 A, कुल स्थिर हानि Pc = 900 + (240 × 2) = 1380 W ज्ञात करें। फिर (a) के लिए Ia = 42 A तथा (b) के लिए Ia = sqrt(Pc / Ra) का उपयोग करें।',
        bn: 'ফিল্ড কারেন্ট Ish = ২৪০/১২০ = ২ A এবং মোট ধ্রুব ক্ষতি Pc = ৯০০ + (২৪০ × ২) = ১৩৮০ W বের করুন। এরপর (a) এর জন্য Ia = ৪২ A এবং (b) এর জন্য Ia = sqrt(Pc / Ra) ব্যবহার করুন।'
      },
      answerKey: {
        en: '(a) Total Constant Losses Pc = 900 + 480 = 1380 W. At IL = 40 A: Ia = 42 A, Armature Cu Loss = (42)² × 0.25 = 441 W. Total Losses = 1380 + 441 = 1821 W. Pout = 240 × 40 = 9600 W. Pin = 9600 + 1821 = 11,421 W. Efficiency η = (9600 / 11421) × 100% = 84.06%. (b) Ia at Max Efficiency = √(1380 / 0.25) = 74.30 A. Load Current IL = Ia - Ish = 74.30 - 2.0 = 72.30 A.',
        hi: '(a) कुल स्थिर हानियाँ Pc = 1380 W। IL = 40 A पर: Ia = 42 A, कॉपर हानि = 441 W। कुल हानियाँ = 1821 W। Pout = 9600 W। दक्षता η = 84.06%। (b) अधिकतम दक्षता पर आर्मेचर करंट Ia = √(1380 / 0.25) = 74.30 A। लोड करंट IL = 74.30 - 2.0 = 72.30 A।',
        bn: '(a) মোট ধ্রুব ক্ষতি Pc = ১৩৮০ W। IL = ৪০ A হলে: Ia = ৪২ A, কপার লস = ৪৪১ W। মোট লস = ১৮২১ W। Pout = ৯৬০০ W। কর্মদক্ষতা η = ৮৪.০৬%। (b) সর্বোচ্চ দক্ষতায় আর্মেচার কারেন্ট Ia = √(১৩৮০ / ০.২৫) = ৭৪.৩০ A। লোড কারেন্ট IL = ৭৪.৩০ - ২.০ = ৭২.৩০ A।'
      }
    },
    {
      id: 'pq-gen-losses-2',
      question: {
        en: 'Explain why the maximum efficiency condition of a DC generator occurs when variable copper losses equal constant losses, and describe how core laminations mitigate eddy-current heating in the rotor.',
        hi: 'स्पष्ट कीजिए कि डीसी जनरेटर की अधिकतम दक्षता की शर्त तब क्यों प्राप्त होती है जब परिवर्तनीय कॉपर हानि स्थिर हानियों के बराबर हो, तथा समझाइए कि कोर लैमिनेशन रोटर में भंवर धारा ऊष्मा को कैसे कम करते हैं।',
        bn: 'ব্যাখ্যা করুন কেন ডিসি জেনারেটরের সর্বোচ্চ কর্মদক্ষতার শর্তে পরিবর্তনশীল কপার ক্ষতি ধ্রুব ক্ষতির সমান হয় এবং কোর ল্যামিনেশন কীভাবে রোটরে এডি কারেন্ট তাপ অপচয় রোধ করে।'
      },
      hint: {
        en: 'Differentiate the efficiency expression with respect to armature current Ia. For eddy currents, explain how insulation coatings on thin laminations restrict loop size, with Pe proportional to thickness squared (t²).',
        hi: 'आर्मेचर धारा Ia के सापेक्ष दक्षता समीकरण का अवकलन करें। भंवर धारा हेतु समझाइए कि लैमिनेशन शीटों पर इंसुलेशन कोटिंग धारा परिपथ को छोटा करती है (Pe ∝ t²)।',
        bn: 'আর্মেচার কারেন্ট Ia এর সাপেক্ষে কর্মদক্ষতা সমীকরণ ডিফারেনশিয়েট করুন। এডি কারেন্টের ক্ষেত্রে ব্যাখ্যা করুন কীভাবে পাতলা ইনসুলেটেড ল্যামিনেশন কারেন্ট লুপকে ছোট করে (Pe ∝ t²)।'
      },
      answerKey: {
        en: '1. Maximum Efficiency: Differentiating η = 1 / (1 + Pc/(V·Ia) + Ia·Ra/V) with respect to Ia yields d/dIa [Pc/(V·Ia) + Ia·Ra/V] = -Pc/(V·Ia²) + Ra/V = 0 => Ia²·Ra = Pc. Thus, peak efficiency occurs when variable I²R copper loss exactly matches constant rotational and field losses. 2. Core Laminations: Alternating magnetic flux induces eddy currents perpendicular to flux lines in the solid core. By slicing the core into thin 0.35–0.5 mm laminations insulated by varnish/oxide, circulating cross-sectional area is partitioned, increasing resistance to eddy currents. Since Pe ∝ t², halving sheet thickness cuts eddy current power loss to 25%.',
        hi: '1. अधिकतम दक्षता: η समीकरण का Ia के सापेक्ष अवकलन करने पर -Pc/(V·Ia²) + Ra/V = 0 प्राप्त होता है, जिससे Ia²·Ra = Pc सिद्ध होता है। 2. कोर लैमिनेशन: ठोस लोहे में प्रेरित भंवर धाराएँ बड़ी होती हैं। कोर को वार्निश-युक्त 0.35-0.5 मिमी पतली शीटों में विभाजित करने से धारा परिपथ टूटता है और प्रतिरोध बढ़ता है। चूँकि Pe ∝ t² होता है, लैमिनेशन मोटाई आधी करने से भंवर धारा हानि एक-चौथाई (25%) रह जाती है।',
        bn: '১. সর্বোচ্চ কর্মদক্ষতা: Ia এর সাপেক্ষে η সমীকরণ ডিফারেনশিয়েট করলে পাওয়া যায় -Pc/(V·Ia²) + Ra/V = ০ => Ia²·Ra = Pc। সুতরাং পরিবর্তনশীল কপার লস ধ্রুব লসের সমান হলে দক্ষতা সর্বোচ্চ হয়। ২. কোর ল্যামিনেশন: নিরেট কোরে বড় এডি কারেন্ট লুপ তৈরি হয়। কোরকে ০.৩৫-০.৫ মিমি পাতলা বার্নিশযুক্ত ল্যামিনেশনে বিভক্ত করলে কারেন্ট লুপের ক্ষেত্রফল সংকুচিত হয় এবং রোধ বৃদ্ধি পায়। যেহেতু Pe ∝ t², তাই ল্যামিনেশনের পুরুত্ব অর্ধেক করলে এডি কারেন্ট লস এক-চতুর্থাংশে (২৫%) নেমে আসে।'
      }
    }
  ]
};
