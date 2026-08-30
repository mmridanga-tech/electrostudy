import { Lesson } from '../types';

export const LESSON_TRANSFORMER_PARALLEL_OPERATION: Lesson = {
  id: 'lsn-ch6-transformer-parallel-operation',
  topicId: 'ch6-transformer-parallel-operation',
  chapterId: 'ch-electrical-machines',
  order: 6,
  title: {
    en: 'Transformer Parallel Operation & Load Sharing',
    hi: 'ट्रांसफॉर्मरों का समानांतर संचालन एवं लोड शेयरिंग',
    bn: 'ট্রান্সফর্মারের সমান্তরাল সংযোগ ও লোড শেয়ারিং'
  },
  description: {
    en: 'Engineering principles, necessity, and analytical conditions for operating single-phase and three-phase transformers in parallel: mandatory safety criteria (identical polarity, equal voltage ratio, same phase sequence, matching vector groups), desirable criteria for optimal load sharing (per-unit impedances inversely proportional to kVA ratings, identical X/R ratios), no-load circulating currents, complex kVA load sharing derivations, and overload risk prevention.',
    hi: 'सिंगल-फेज एवं थ्री-फेज ट्रांसफॉर्मरों के समानांतर संचालन के तकनीकी सिद्धांत, आवश्यकता एवं शर्तें: अनिवार्य सुरक्षा शर्तें (समान पोलैरिटी, समान वोल्टेज अनुपात, समान फेज अनुक्रम, संगत वेक्टर ग्रुप), आदर्श लोड शेयरिंग शर्तें (p.u. प्रतिबाधा kVA रेटिंग के व्युत्क्रमानुपाती, समान X/R अनुपात), नो-लोड परिसंचारी धाराएँ (Circulating Currents), kVA लोड शेयरिंग का गणितीय विश्लेषण एवं ओवरलोड रोकथाम।',
    bn: 'সিঙ্গেল ও থ্রি-ফেজ ট্রান্সফর্মারের সমান্তরাল সংযোগের প্রযুক্তিগত প্রয়োজনীয়তা ও গাণিতিক শর্তাবলী: অপরিহার্য নিরাপত্তা শর্ত (অভিন্ন পোলারিটি, সমান ভোল্টেজ অনুপাত, একই ফেজ সিকোয়েন্স, অভিন্ন ভেক্টর গ্রুপ), আদর্শ লোড শেয়ারিং শর্ত (পার-ইউনিট ইম্পিড্যান্স kVA রেটিংয়ের ব্যস্তানুপাতিক, সমান X/R অনুপাত), নো-লোড সার্কুলেটিং কারেন্ট এবং জটিল kVA লোড শেয়ারিং সমীকরণ।'
  },
  diagrams: [
    {
      id: 'diag-trans-parallel-banking',
      svgType: 'transformer-parallel-operation',
      title: {
        en: 'Parallel Transformer Bank Architecture & Load Sharing Circuit',
        hi: 'समानांतर ट्रांसफॉर्मर बैंक संरचना एवं लोड शेयरिंग परिपथ',
        bn: 'সমান্তরাল ট্রান্সফর্মার ব্যাংক আর্কিটেকচার ও লোড শেয়ারিং সার্কিট'
      },
      caption: {
        en: 'Two transformers (Transformer A and Transformer B) connected in parallel to common primary and secondary busbars, showing branch currents IA and IB supplying total load current IL.',
        hi: 'कॉमन प्राइमरी और सेकेंडरी बसबार से समानांतर जुड़े दो ट्रांसफॉर्मर (A और B), जो कुल लोड करंट IL को IA और IB के रूप में साझा करते हैं।',
        bn: 'কমন প্রাইমারি ও সেকেন্ডারি বাসবারে সমান্তরালে যুক্ত দুটি ট্রান্সফরমার (A ও B), যেখানে মোট লোড কারেন্ট IL শাখাকারেন্ট IA ও IB দ্বারা পরিবাহিত হয়।'
      }
    }
  ],
  estimatedMinutes: 50,
  easyExplanation: {
    en: 'In city and industrial power systems, electrical power demand constantly grows over time. Instead of replacing an existing functional transformer with an enormous new one, power utilities install a second transformer in parallel across the same input and output busbars. Parallel operation also dramatically improves system reliability: if one transformer requires routine maintenance or suffers a fault, it can be disconnected while the remaining unit continues supplying critical loads without total blackout. For two transformers to run in parallel safely and share load proportionally according to their nameplate ratings, certain electrical rules must be strictly met: (1) Polarities must match perfectly (opposite polarity creates an explosive dead short-circuit across the busbars), (2) Voltage ratios must be identical (a mismatch causes a constant circulating current that overheats the windings even at zero load), (3) Per-unit impedances must be equal (so a 200 kVA unit carries twice the load of a 100 kVA unit without overheating), and (4) X/R ratios must match (so both transformers operate at the exact same load power factor).',
    hi: 'विद्युत ग्रिडों में बिजली की मांग समय के साथ लगातार बढ़ती रहती है। पुराने चालू ट्रांसफॉर्मर को फेंककर बहुत बड़ा नया ट्रांसफॉर्मर लगाने के बजाय, इंजीनियर उसी बसबार पर समानांतर (parallel) में दूसरा ट्रांसफॉर्मर जोड़ देते हैं। समानांतर संचालन से विश्वसनीयता भी बढ़ती है: यदि एक ट्रांसफॉर्मर की मरम्मत करनी हो, तो उसे बंद करने पर भी दूसरा ट्रांसफॉर्मर आपूर्ति चालू रखता है। दो ट्रांसफॉर्मरों को सुरक्षित रूप से समानांतर चलाने के लिए कुछ नियम अत्यंत आवश्यक हैं: (1) पोलैरिटी बिल्कुल समान होनी चाहिए (विपरीत पोलैरिटी से भयानक शॉर्ट सर्किट हो जाएगा), (2) वोल्टेज अनुपात समान होना चाहिए (अंतर होने पर नो-लोड पर भी आंतरिक परिसंचारी धारा बहकर वाइंडिंग को जला सकती है), (3) प्रति-इकाई प्रतिबाधा (per-unit impedance) बराबर होनी चाहिए (ताकि बड़ा ट्रांसफॉर्मर अपनी क्षमता के अनुसार अधिक लोड उठाए), तथा (4) X/R अनुपात समान होना चाहिए ताकि दोनों का पावर फैक्टर एक जैसा रहे।',
    bn: 'বিদ্যুৎ গ্রিডে লোডের চাহিদা ক্রমাগত বৃদ্ধির কারণে পুরোনো ট্রান্সফরমার পরিবর্তনের বদলে একই বাসবারে সমান্তরালে (Parallel) আরেকটি নতুন ট্রান্সফরমার যুক্ত করা হয়। সমান্তরাল অপারেশনে বিদ্যুৎ সরবরাহের নির্ভরযোগ্যতা বহুগুণ বৃদ্ধি পায়: একটি ইউনিটে রক্ষণাবেক্ষণ চললেও অন্যটি নিরবচ্ছিন্ন বিদ্যুৎ সরবরাহ করে। তবে নিরাপদে সমান্তরাল সংযোগ ও ক্ষমতার অনুপাতে লোড ভাগ করে নেওয়ার জন্য কিছু কঠোর নিয়ম মানতে হয়: (১) পোলারিটি হুবহু এক হতে হবে (ভুল হলে মারাত্মক শর্ট সার্কিট বিস্ফোরণ ঘটবে), (২) ভোল্টেজ অনুপাত সমান হতে হবে (অমিল হলে নো-লোডেও ক্ষতিকর সার্কুলেটিং কারেন্ট প্রবাহিত হয়ে তার পুড়ে যাবে), (৩) পার-ইউনিট ইম্পিড্যান্স সমান হতে হবে (যাতে ২০০ kVA ট্রান্সফরমার ১০০ kVA ইউনিটের দ্বিগুণ লোড বহন করে), এবং (৪) X/R অনুপাত এক হতে হবে যাতে উভয় ইউনিট একই পাওয়ার ফ্যাক্টরে কাজ করে।'
  },
  detailedExplanation: {
    en: `1. Engineering Necessity of Parallel Operation:
- Incremental System Expansion: Enables electrical utilities to add sub-capacity units (e.g. adding 20 MVA to an existing 30 MVA substation) as demand grows, avoiding premature heavy capital investment.
- High Reliability & Uninterrupted Power Supply (UPS): If one unit trips or undergoes preventive maintenance, essential healthcare, transport, and industrial loads remain powered by the parallel units.
- Maximum Operating Efficiency: During light night-time load hours, one or more transformers can be switched off to eliminate superfluous core losses, operating the remaining units near peak efficiency (70–90% load).
- Transportation & Physical Sizing Limits: Manufacturing and transporting two 100 MVA transformers is far more feasible on road and rail networks than moving a single 200 MVA behemoth.

2. Conditions for Parallel Operation:
A. Mandatory (Essential) Conditions (Violations cause extreme circulating currents, tripping, or physical explosion):
- Identical Polarity: The relative instantaneous polarities of the secondaries must match. Paralleling with reverse polarity connects two induced EMFs in series aiding across a near-zero winding impedance loop, causing instantaneous destructive short-circuit current (I_sc = 2·E / 2·Z_eq).
- Equal Voltage Ratios (Equal Secondary EMFs: E_A = E_B): Primary and secondary nominal voltage ratings and turns ratios must be equal. Any slight voltage inequality produces a continuous internal circulating current I_c = (E_A - E_B) / (Z_A + Z_B) even when the load switch is completely open.
- Identical Frequency: Both transformers must operate on the same supply frequency (50 Hz or 60 Hz).
- For Three-Phase Transformers:
  * Same Phase Sequence: Phase sequence (R-Y-B) must be identical for both units to prevent dead phase-to-phase short circuits.
  * Same Vector Group / Zero Phase Displacement: Both three-phase units must have identical phase shift between primary and secondary line voltages (e.g. both Dyn11 or both Yd1). Paralleling a Dyn11 (30° lead) with a Dyn1 (30° lag) creates a 60° phase difference across the secondaries, producing catastrophic short-circuit currents.

B. Desirable (Optimum Performance) Conditions (Violations cause unequal load sharing or reduced bank capacity):
- Per-Unit Impedance Inversely Proportional to kVA Ratings (Z_pu,A = Z_pu,B on their own bases):
  Ensures that each transformer automatically shares the total load in exact direct proportion to its individual rated kVA capacity without prematurely overloading the smaller unit.
- Identical Impedance Angle / Equal X/R Ratio (θ_A = θ_B):
  Ensures that both branch currents I_A and I_B are in phase with each other and operate at the same power factor as the combined load. If X_A/R_A ≠ X_B/R_B, one transformer will operate at a worse power factor and the arithmetic sum of branch kVA will exceed the combined load kVA.

3. Mathematical Analysis of Circulating Current (No Load):
When two transformers A and B have unequal secondary no-load induced EMFs (E_A ≠ E_B) but common primary supply:
- Secondary Loop Impedance: Z_loop = Z_A + Z_B
- No-Load Circulating Current: I_c = (E_A - E_B) / (Z_A + Z_B)
- Under load, this circulating current adds vectorially to transformer A (I_A = I_LA + I_c) and subtracts from transformer B (I_B = I_LB - I_c), shifting thermal loading unevenly and causing one transformer to run hotter.

4. Analytical Load Sharing Derivations (Equal Voltage Ratio: E_A = E_B = E):
Let Z_A = equivalent impedance of Transformer A referred to secondary.
Let Z_B = equivalent impedance of Transformer B referred to secondary.
Let Z_L = total external load impedance, and I_L = total load current.
- Terminal Voltage: V2 = E - I_A · Z_A = E - I_B · Z_B
- Therefore: I_A · Z_A = I_B · Z_B  ==>  I_A / I_B = Z_B / Z_A (Current divides inversely as impedance!)
- Total current: I_L = I_A + I_B = I_B · (Z_B / Z_A) + I_B = I_B · (Z_A + Z_B) / Z_A
- Branch Current of Transformer A: I_A = I_L · [ Z_B / (Z_A + Z_B) ]
- Branch Current of Transformer B: I_B = I_L · [ Z_A / (Z_A + Z_B) ]

5. Complex kVA Load Sharing Formulas:
Multiplying both sides by common secondary terminal voltage V2*:
- kVA Shared by Transformer A: S_A = S_total · [ Z_B / (Z_A + Z_B) ]
- kVA Shared by Transformer B: S_B = S_total · [ Z_A / (Z_A + Z_B) ]
- In Per-Unit on Common Base S_base:
  S_A = S_total · [ (S_rated,A / Z_pu,A) / ( (S_rated,A / Z_pu,A) + (S_rated,B / Z_pu,B) ) ]
- Maximum Total Load the Bank Can Safely Carry Without Overloading Any Unit:
  If Z_pu,A < Z_pu,B, Transformer A reaches full load first. When Transformer A is at 100% full load (S_A = S_rated,A):
  S_bank,max = S_rated,A · [ (Z_A + Z_B) / Z_B ]`,
    hi: `1. समानांतर संचालन की आवश्यकता:
- क्षमता विस्तार (Incremental Expansion): मांग बढ़ने पर नए ट्रांसफॉर्मर को समानांतर में जोड़ना।
- उच्च विश्वसनीयता: एक यूनिट मेंटेनेंस में जाने पर भी दूसरी यूनिट लोड संभालती है।
- अधिकतम दक्षता: कम लोड के समय एक यूनिट बंद करके कोर लॉस बचाना।
- परिवहन एवं विनिर्माण सुगमता।

2. समानांतर संचालन की आवश्यक शर्तें:
A. अनिवार्य (Mandatory) शर्तें:
- समान पोलैरिटी (Same Polarity): गलत होने पर सीधा शॉर्ट सर्किट हो जाएगा।
- समान वोल्टेज अनुपात (Equal Voltage Ratio): अंतर होने पर नो-लोड पर भी खतरनाक परिसंचारी धारा (Circulating Current) बहेगी: Ic = (EA - EB)/(ZA + ZB)।
- समान आवृत्ति (50 Hz)।
- थ्री-फेज हेतु: समान फेज अनुक्रम (Phase Sequence) एवं समान वेक्टर ग्रुप (Same Vector Group, शून्य फेज विस्थापन)।

B. वांछनीय (Desirable) शर्तें:
- प्रति-इकाई प्रतिबाधा (p.u. Impedance) kVA रेटिंग के व्युत्क्रमानुपाती होनी चाहिए (Zpu,A = Zpu,B)।
- समान X/R अनुपात (Equal X/R ratio): ताकि दोनों ट्रांसफॉर्मर समान पावर फैक्टर पर काम करें।

3. लोड शेयरिंग (Load Sharing) समीकरण:
- धारा का विभाजन प्रतिबाधा के व्युत्क्रमानुपाती होता है:
  IA = IL · [ ZB / (ZA + ZB) ]
  IB = IL · [ ZA / (ZA + ZB) ]
- kVA शेयरिंग:
  SA = Stotal · [ ZB / (ZA + ZB) ]
  SB = Stotal · [ ZA / (ZA + ZB) ]`,
    bn: `১. সমান্তরাল সংযোগের প্রয়োজনীয়তা:
- লোড বৃদ্ধির সাথে ধাপে ধাপে ক্ষমতা সম্প্রসারণ।
- নিরবচ্ছিন্ন বিদ্যুৎ সরবরাহ ও উচ্চ নির্ভরযোগ্যতা।
- হালকা লোডের সময় একটি ইউনিট বন্ধ রেখে শক্তি অপচয় রোধ।
- পরিবহন ও স্থাপনের সুবিধা।

২. সমান্তরাল সংযোগের শর্তাবলী:
A. বাধ্যতামূলক শর্তসমূহ:
- অভিন্ন পোলারিটি (Same Polarity): বিপরীত হলে ধ্বংসাত্মক শর্ট সার্কিট ঘটবে।
- সমান ভোল্টেজ অনুপাত (EA = EB): অমিল হলে নো-লোডেও সার্কুলেটিং কারেন্ট (Ic = (EA - EB)/(ZA + ZB)) প্রবাহিত হবে।
- একই ফ্রিকোয়েন্সি (৫০ Hz)।
- থ্রি-ফেজ ক্ষেত্রে: একই ফেজ সিকোয়েন্স ও অভিন্ন ভেক্টর গ্রুপ (Dyn11-এর সাথে Dyn11)।

B. বাঞ্ছনীয় শর্তসমূহ:
- পার-ইউনিট ইম্পিড্যান্স সমান হওয়া (Zpu,A = Zpu,B), যাতে লোড তাদের kVA রেটিং অনুপাতে বিভক্ত হয়।
- সমান X/R অনুপাত, যাতে উভয় ট্রান্সফরমার একই পাওয়ার ফ্যাক্টরে লোড শেয়ার করে।

৩. লোড শেয়ারিং সমীকরণ:
- কারেন্ট বণ্টন ইম্পিড্যান্সের ব্যস্তানুপাতিক:
  IA = IL · [ ZB / (ZA + ZB) ]
  IB = IL · [ ZA / (ZA + ZB) ]
- kVA লোড বণ্টন:
  SA = Stotal · [ ZB / (ZA + ZB) ]
  SB = Stotal · [ ZA / (ZA + ZB) ]`
  },
  formulas: [
    {
      id: 'f-trans-circulating-current',
      symbol: 'I_c',
      expression: 'I_c = (E_A - E_B) / (Z_A + Z_B)',
      formula: 'I_c = \\frac{E_A - E_B}{Z_A + Z_B}',
      title: {
        en: 'No-Load Circulating Current Between Unequal Voltage Transformers',
        hi: 'असमान वोल्टेज ट्रांसफॉर्मरों के बीच नो-लोड परिसंचारी धारा',
        bn: 'অসমান ভোল্টেজ ট্রান্সফর্মারদ্বয়ের মাঝে নো-লোড সার্কুলেটিং কারেন্ট'
      },
      description: {
        en: 'Calculates internal circulating current flowing between parallel secondaries when no external load is connected.',
        hi: 'बिना बाहरी लोड के सेकेंडरी वाइंडिंग के बीच बहने वाली आंतरिक परिसंचारी धारा की गणना।',
        bn: 'কোনো বহিরাগত লোড না থাকা সত্ত্বেও সেকেন্ডারি ওয়াইন্ডিংয়ের মাঝে প্রবাহিত অভ্যন্তরীণ কারেন্ট নির্ণয়।'
      }
    },
    {
      id: 'f-trans-load-sharing-current',
      symbol: 'I_A, I_B',
      expression: 'I_A = I_L · [ Z_B / (Z_A + Z_B) ],  I_B = I_L · [ Z_A / (Z_A + Z_B) ]',
      formula: 'I_A = I_L \\cdot \\left[ \\frac{Z_B}{Z_A + Z_B} \\right], \\quad I_B = I_L \\cdot \\left[ \\frac{Z_A}{Z_A + Z_B} \\right]',
      title: {
        en: 'Branch Current Load Sharing in Parallel Transformers',
        hi: 'समानांतर ट्रांसफॉर्मरों में शाखा करंट लोड शेयरिंग सूत्र',
        bn: 'সমান্তরাল ট্রান্সফর্মার শাখায় কারেন্ট বিভাজন সমীকরণ'
      },
      description: {
        en: 'Applies current divider principle: the unit with smaller ohmic impedance carries a larger fraction of total load current.',
        hi: 'कम प्रतिबाधा वाला ट्रांसफॉर्मर कुल लोड करंट का अधिक हिस्सा वहन करता है।',
        bn: 'কম ইম্পিড্যান্সযুক্ত ট্রান্সফরমার মোট লোড কারেন্টের বৃহত্তর অংশ বহন করে।'
      }
    },
    {
      id: 'f-trans-load-sharing-kva',
      symbol: 'S_A, S_B',
      expression: 'S_A = S_total · [ Z_B / (Z_A + Z_B) ],  S_B = S_total · [ Z_A / (Z_A + Z_B) ]',
      formula: 'S_A = S_{\\text{total}} \\cdot \\left[ \\frac{Z_B}{Z_A + Z_B} \\right], \\quad S_B = S_{\\text{total}} \\cdot \\left[ \\frac{Z_A}{Z_A + Z_B} \\right]',
      title: {
        en: 'Complex kVA Load Sharing Formulation',
        hi: 'जटिल kVA लोड शेयरिंग सूत्र',
        bn: 'জটিল kVA লোড শেয়ারিং সূত্র'
      },
      description: {
        en: 'Calculates active and reactive kVA loading shared by each parallel transformer supplying a combined load.',
        hi: 'संयुक्त लोड को पावर देते समय प्रत्येक ट्रांसफॉर्मर द्वारा उठाई जाने वाली kVA क्षमता की गणना।',
        bn: 'সম্মিলিত লোডে প্রতিটি ট্রান্সফরমার দ্বারা পরিবাহিত kVA ক্ষমতার পরিমাণ নির্ধারণ।'
      }
    },
    {
      id: 'f-trans-pu-load-sharing',
      symbol: 'S_A (per-unit)',
      expression: 'S_A = S_total · [ (S_rated,A / Z_pu,A) / ( (S_rated,A / Z_pu,A) + (S_rated,B / Z_pu,B) ) ]',
      formula: 'S_A = S_{\\text{total}} \\cdot \\frac{\\frac{S_{\\text{rated},A}}{Z_{pu,A}}}{\\frac{S_{\\text{rated},A}}{Z_{pu,A}} + \\frac{S_{\\text{rated},B}}{Z_{pu,B}}}',
      title: {
        en: 'Per-Unit kVA Load Sharing with Different Nameplate Ratings',
        hi: 'भिन्न kVA रेटिंग एवं p.u. प्रतिबाधा पर लोड शेयरिंग',
        bn: 'ভিন্ন রেটিং ও পার-ইউনিট ইম্পিড্যান্সে kVA লোড বণ্টন'
      },
      description: {
        en: 'Determines load sharing when transformers have different nominal kVA sizes and different per-unit impedances.',
        hi: 'जब समानांतर ट्रांसफॉर्मरों की kVA रेटिंग और प्रतिबाधा भिन्न हो तब सटीक लोड आवंटन।',
        bn: 'ভিন্ন kVA সাইজ ও পার-ইউনিট ইম্পিড্যান্সযুক্ত ট্রান্সফর্মারের সঠিক লোড বণ্টন।'
      }
    }
  ],
  solvedExamples: [
    {
      id: 'ex-trans-parallel-kva-sharing-1',
      problem: {
        en: 'Two 1-phase transformers A and B are connected in parallel to supply a combined load of 250 kVA at 0.8 power factor lagging. Transformer A is rated at 100 kVA with equivalent impedance Z_A = (0.5 + j1.5) Ω referred to secondary. Transformer B is rated at 200 kVA with equivalent impedance Z_B = (0.3 + j0.9) Ω referred to secondary. Both transformers have equal voltage ratios. Calculate: (a) The kVA and power factor shared by Transformer A, (b) The kVA and power factor shared by Transformer B, (c) Check whether either transformer is overloaded.',
        hi: 'दो ट्रांसफॉर्मर A (100 kVA, ZA = 0.5 + j1.5 Ω) और B (200 kVA, ZB = 0.3 + j0.9 Ω) समानांतर में 250 kVA (0.8 लैगिंग pf) लोड को सप्लाई दे रहे हैं। दोनों का वोल्टेज अनुपात समान है। ज्ञात कीजिए: (a) ट्रांसफॉर्मर A द्वारा वहन की गई kVA, (b) ट्रांसफॉर्मर B द्वारा वहन की गई kVA, (c) क्या कोई ट्रांसफॉर्मर ओवरलोड हुआ है?',
        bn: 'দুটি ১-ফেজ ট্রান্সফরমার A (১০০ kVA, ZA = ০.৫ + j১.৫ Ω) এবং B (২০০ kVA, ZB = ০.৩ + j০.৯ Ω) সমান্তরালে ২৫০ kVA (০.৮ ল্যাগিং pf) লোড বহন করছে। উভয়ের ভোল্টেজ অনুপাত সমান। নির্ণয় করো: (a) ট্রান্সফরমার A-এর kVA, (b) ট্রান্সফরমার B-এর kVA, (c) কোনো ট্রান্সফরমার ওভারলোড হয়েছে কিনা।'
      },
      givenValues: {
        'Total Load S_total': '250 kVA at cosΦ = 0.8 lagging ==> S_total = 250 ∠-36.87° kVA = (200 - j150) kVA',
        'Impedance Z_A': '(0.5 + j1.5) Ω = √(0.25 + 2.25) ∠arctan(3) = √2.5 ∠71.565° = 1.5811 ∠71.565° Ω',
        'Impedance Z_B': '(0.3 + j0.9) Ω = √(0.09 + 0.81) ∠arctan(3) = √0.9 ∠71.565° = 0.9487 ∠71.565° Ω',
        'Total Impedance (Z_A + Z_B)': '(0.5 + 0.3) + j(1.5 + 0.9) = (0.8 + j2.4) Ω = 2.5298 ∠71.565° Ω'
      },
      solution: {
        en: 'Step 1: Check Impedance Angle matching:\n- Angle of Z_A = arctan(1.5 / 0.5) = arctan(3) = 71.565°\n- Angle of Z_B = arctan(0.9 / 0.3) = arctan(3) = 71.565°\n- Notice that both transformers have the exact same X/R ratio (1.5/0.5 = 0.9/0.3 = 3.0).\n- Consequently, the impedance ratio is purely real: Z_B / (Z_A + Z_B) = 0.9487 / 2.5298 = 0.375 (37.5%), and Z_A / (Z_A + Z_B) = 1.5811 / 2.5298 = 0.625 (62.5%).\n\nStep 2: Calculate Load shared by Transformer A (S_A):\n- S_A = S_total · [ Z_B / (Z_A + Z_B) ] = 250 kVA × 0.375 = 93.75 kVA at 0.8 pf lagging.\n- Active Power PA = 93.75 × 0.8 = 75.0 kW; Reactive Power QA = 93.75 × 0.6 = 56.25 kVAR.\n\nStep 3: Calculate Load shared by Transformer B (S_B):\n- S_B = S_total · [ Z_A / (Z_A + Z_B) ] = 250 kVA × 0.625 = 156.25 kVA at 0.8 pf lagging.\n- Active Power PB = 156.25 × 0.8 = 125.0 kW; Reactive Power QB = 156.25 × 0.6 = 93.75 kVAR.\n- Verification: S_A + S_B = 93.75 + 156.25 = 250.0 kVA.\n\nStep 4: Overload Check:\n- Transformer A Loading: 93.75 kVA / 100 kVA = 93.75% of rating (SAFE, not overloaded).\n- Transformer B Loading: 156.25 kVA / 200 kVA = 78.125% of rating (SAFE, not overloaded).',
        hi: 'Step 1: दोनों का X/R अनुपात समान है (3.0)।\nStep 2: ट्रांसफॉर्मर A का लोड SA = 250 × (0.9487 / 2.5298) = 250 × 0.375 = 93.75 kVA (0.8 pf)।\nStep 3: ट्रांसफॉर्मर B का लोड SB = 250 × (1.5811 / 2.5298) = 250 × 0.625 = 156.25 kVA (0.8 pf)।\nStep 4: ओवरलोड जाँच: A = 93.75% लोड (सुरक्षित), B = 78.13% लोड (सुरक्षित)।',
        bn: 'ধাপ ১: উভয় ট্রান্সফর্মারের X/R অনুপাত অভিন্ন (৩.০)।\nধাপ ২: ট্রান্সফরমার A-এর লোড SA = ২৫০ × ০.৩৭৫ = ৯৩.৭৫ kVA (০.৮ pf)।\nধাপ ৩: ট্রান্সফরমার B-এর লোড SB = ২৫০ × ০.৬২৫ = ১৫৬.২৫ kVA (০.৮ pf)।\nধাপ ৪: ওভারলোড পরীক্ষা: A = ৯৩.৭৫% (নিরাপদ), B = ৭৮.১৩% (নিরাপদ)।'
      },
      finalAnswer: {
        en: 'Transformer A = 93.75 kVA at 0.8 pf lagging (93.75% load), Transformer B = 156.25 kVA at 0.8 pf lagging (78.13% load). Neither unit is overloaded.',
        hi: 'ट्रांसफॉर्मर A = 93.75 kVA (0.8 pf, 93.75% लोड), ट्रांसफॉर्मर B = 156.25 kVA (0.8 pf, 78.13% लोड)। कोई भी यूनिट ओवरलोड नहीं है।',
        bn: 'ট্রান্সফরমার A = ৯৩.৭৫ kVA (০.৮ pf, ৯৩.৭৫% লোড), ট্রান্সফরমার B = ১৫৬.২৫ kVA (০.৮ pf, ৭৮.১৩% লোড)। কোনো ইউনিটই ওভারলোড হয়নি।'
      }
    },
    {
      id: 'ex-trans-unequal-xr-complex-sharing',
      problem: {
        en: 'Two 500 kVA, single-phase transformers A and B with identical voltage ratios operate in parallel to supply a total load of 800 kW at 0.8 power factor lagging (1000 kVA). The impedances are: Z_A = (0.01 + j0.05) Ω and Z_B = (0.015 + j0.035) Ω. Calculate: (a) The complex kVA shared by Transformer A and its operating power factor, (b) The complex kVA shared by Transformer B and its operating power factor, (c) The arithmetic sum of the kVA loads.',
        hi: 'दो 500 kVA ट्रांसफॉर्मर A (ZA = 0.01 + j0.05 Ω) एवं B (ZB = 0.015 + j0.035 Ω) समानांतर में 1000 kVA (800 kW, 0.8 pf लैगिंग) लोड को आपूर्ति दे रहे हैं। ज्ञात कीजिए: (a) A का kVA एवं पावर फैक्टर, (b) B का kVA एवं पावर फैक्टर, (c) दोनों की kVA का अंकगणितीय योग।',
        bn: 'দুটি ৫০০ kVA ট্রান্সফরমার A (ZA = ০.০১ + j০.০৫ Ω) ও B (ZB = ০.০১৫ + j০.০৩৫ Ω) সমান্তরালে ১০০০ kVA (৮০০ kW, ০.৮ pf ল্যাগিং) লোড বহন করছে। নির্ণয় করো: (a) A-এর kVA ও পাওয়ার ফ্যাক্টর, (b) B-এর kVA ও পাওয়ার ফ্যাক্টর, (c) উভয়ের kVA-এর পাটিগণিতীয় যোগফল।'
      },
      givenValues: {
        'Total Load S_total': '800 kW + j600 kVAR = 1000 ∠-36.87° kVA',
        'Z_A': '(0.01 + j0.05) Ω = 0.05099 ∠78.69° Ω',
        'Z_B': '(0.015 + j0.035) Ω = 0.03808 ∠66.80° Ω',
        'Z_A + Z_B': '(0.025 + j0.085) Ω = 0.08860 ∠73.61° Ω'
      },
      solution: {
        en: 'Step 1: Calculate Impedance Ratios:\n- Fraction for A: Z_B / (Z_A + Z_B) = (0.03808 ∠66.80°) / (0.08860 ∠73.61°) = 0.4298 ∠-6.81°\n- Fraction for B: Z_A / (Z_A + Z_B) = (0.05099 ∠78.69°) / (0.08860 ∠73.61°) = 0.5755 ∠+5.08°.\n\nStep 2: Calculate Complex kVA for Transformer A:\n- S_A = S_total · [ Z_B / (Z_A + Z_B) ] = (1000 ∠-36.87°) × (0.4298 ∠-6.81°) = 429.8 ∠-43.68° kVA\n- Active Power P_A = 429.8 × cos(-43.68°) = 429.8 × 0.7232 = 310.8 kW\n- Reactive Power Q_A = 429.8 × sin(43.68°) = 429.8 × 0.6906 = 296.8 kVAR\n- Operating Power Factor of A: cos(43.68°) = 0.7232 lagging.\n\nStep 3: Calculate Complex kVA for Transformer B:\n- S_B = S_total · [ Z_A / (Z_A + Z_B) ] = (1000 ∠-36.87°) × (0.5755 ∠+5.08°) = 575.5 ∠-31.79° kVA\n- Active Power P_B = 575.5 × cos(-31.79°) = 575.5 × 0.8499 = 489.2 kW\n- Reactive Power Q_B = 575.5 × sin(31.79°) = 575.5 × 0.5268 = 303.2 kVAR\n- Operating Power Factor of B: cos(31.79°) = 0.8499 lagging.\n\nStep 4: Verification & Comparison:\n- Total Real Power = 310.8 + 489.2 = 800.0 kW (Exact!)\n- Total Reactive Power = 296.8 + 303.2 = 600.0 kVAR (Exact!)\n- Arithmetic Sum of kVA = |S_A| + |S_B| = 429.8 + 575.5 = 1005.3 kVA (Exceeds combined 1000 kVA due to unequal X/R ratios!)\n- Overload Note: Transformer B carries 575.5 kVA on a 500 kVA rating (115.1% overloaded!).',
        hi: 'Step 1: ZA = 0.05099 ∠78.69° Ω, ZB = 0.03808 ∠66.80° Ω, ZA + ZB = 0.0886 ∠73.61° Ω।\nStep 2: SA = 1000∠-36.87° × 0.4298∠-6.81° = 429.8 kVA (cosΦ = 0.7232 लैगिंग)।\nStep 3: SB = 1000∠-36.87° × 0.5755∠+5.08° = 575.5 kVA (cosΦ = 0.8500 लैगिंग)।\nStep 4: B ओवरलोड हो गया है (575.5 kVA > 500 kVA)।',
        bn: 'ধাপ ১: ইম্পিড্যান্স অনুপাত নির্ণয়।\nধাপ ২: SA = ৪২৯.৮ kVA, cosΦ = ০.৭২৩২ ল্যাগিং।\nধাপ ৩: SB = ৫৭৫.৫ kVA, cosΦ = ০.৮৫০০ ল্যাগিং।\nধাপ ৪: পাটিগণিতীয় যোগফল = ১০০৫.৩ kVA। ট্রান্সফরমার B ওভারলোড হয়েছে (৫৭৫.৫ kVA)।'
      },
      finalAnswer: {
        en: 'Transformer A = 429.8 kVA at 0.723 pf lag (310.8 kW); Transformer B = 575.5 kVA at 0.850 pf lag (489.2 kW, 15.1% overload); Sum = 1005.3 kVA',
        hi: 'ट्रांसफॉर्मर A = 429.8 kVA (0.723 pf lag); ट्रांसफॉर्मर B = 575.5 kVA (0.850 pf lag, 15.1% ओवरलोड); योग = 1005.3 kVA',
        bn: 'ট্রান্সফরমার A = ৪২৯.৮ kVA (০.৭২৩ pf lag); ট্রান্সফরমার B = ৫৭৫.৫ kVA (০.৮৫০ pf lag, ১৫.১% ওভারলোড); মোট = ১০০৫.৩ kVA'
      }
    },
    {
      id: 'ex-trans-circulating-current-calc',
      problem: {
        en: 'Two 1000 kVA single-phase transformers A and B are connected in parallel on the primary side. On open circuit, secondary voltage of Transformer A is 405 V and secondary voltage of Transformer B is 400 V. The equivalent impedances referred to secondary are Z_A = (0.002 + j0.015) Ω and Z_B = (0.0025 + j0.020) Ω. Calculate: (a) The circulating current flowing between the two transformers at no load, (b) The power factor of this circulating current, (c) The no-load power loss caused by this circulating current in the windings.',
        hi: 'दो 1000 kVA ट्रांसफॉर्मरों A और B के नो-लोड सेकेंडरी वोल्टेज क्रमशः 405 V और 400 V हैं। सेकेंडरी प्रतिबाधा ZA = 0.002 + j0.015 Ω तथा ZB = 0.0025 + j0.020 Ω है। ज्ञात कीजिए: (a) नो-लोड परिसंचारी धारा (Circulating Current), (b) इसका पावर फैक्टर, (c) इस धारा के कारण वाइंडिंग में अतिरिक्त पावर लॉस।',
        bn: 'দুটি ১০০০ kVA ট্রান্সফর্মারের নো-লোড সেকেন্ডারি ভোল্টেজ যথাক্রমে ৪০৫ V ও ৪০০ V। সেকেন্ডারি ইম্পিড্যান্স ZA = ০.০০২ + j০.০১৫ Ω এবং ZB = ০.০০২৫ + j০.০২০ Ω। নির্ণয় করো: (a) নো-লোড সার্কুলেটিং কারেন্ট, (b) এর পাওয়ার ফ্যাক্টর, (c) এর ফলে সৃষ্ট অভ্যন্তরীণ পাওয়ার লস।'
      },
      givenValues: {
        'Secondary Induced EMFs': 'E_A = 405 V, E_B = 400 V ==> Voltage Difference ΔE = 405 - 400 = 5.0 V',
        'Z_A': '(0.002 + j0.015) Ω',
        'Z_B': '(0.0025 + j0.020) Ω',
        'Total Loop Impedance Z_loop': '(0.002 + 0.0025) + j(0.015 + 0.020) = (0.0045 + j0.035) Ω'
      },
      solution: {
        en: 'Step 1: Calculate Magnitude of Total Loop Impedance:\n- |Z_loop| = √(0.0045² + 0.035²) = √(0.00002025 + 0.001225) = √0.00124525 = 0.035288 Ω\n- Loop Impedance Angle: θ_loop = arctan(0.035 / 0.0045) = arctan(7.7778) = 82.68°.\n\nStep 2: Calculate No-Load Circulating Current (I_c):\n- I_c = ΔE / |Z_loop| = 5.0 V / 0.035288 Ω = 141.69 A ≈ 141.7 A.\n\nStep 3: Power Factor of Circulating Current:\n- cos(θ_loop) = R_loop / |Z_loop| = 0.0045 / 0.035288 = 0.1275 lagging (highly reactive inductive current!).\n\nStep 4: Additional No-Load Ohmic Power Loss (I_c²·R_loop):\n- P_circ = I_c² · (R_A + R_B) = (141.69)² × 0.0045 Ω = 20,076 × 0.0045 = 90.34 W.\n- Notice: Although a 5 V mismatch (1.25% voltage error) produces only 90 W of heat, it creates an enormous 141.7 A circulating reactive current (which is ~6% of rated 2400 A full-load current) continuously circulating and unnecessarily loading the windings.',
        hi: 'Step 1: Z_loop = 0.0045 + j0.035 Ω ==> |Z_loop| = 0.03529 Ω, θ = 82.68°।\nStep 2: Ic = (405 - 400) / 0.03529 = 5.0 / 0.03529 = 141.7 A।\nStep 3: pf = cos(82.68°) = 0.1275 लैगिंग।\nStep 4: आंतरिक कॉपर लॉस = (141.7)² × 0.0045 = 90.34 W।',
        bn: 'ধাপ ১: Z_loop = ০.০০৪৫ + j০.০৩৫ Ω ==> |Z_loop| = ০.০৩৫২৯ Ω, θ = ৮২.৬৮°।\nধাপ ২: Ic = ৫.০ / ০.০৩৫২৯ = ১৪১.৭ A।\nধাপ ৩: pf = cos(৮২.৬৮°) = ০.১২৭৫ ল্যাগিং।\nধাপ ৪: অতিরিক্ত পাওয়ার লস = (১৪১.৭)² × ০.০০৪৫ = ৯০.৩৪ W।'
      },
      finalAnswer: {
        en: 'No-load Circulating Current Ic = 141.7 A, Power Factor = 0.1275 lagging, Continuous No-load Loss = 90.34 W',
        hi: 'नो-लोड परिसंचारी धारा Ic = 141.7 A, पावर फैक्टर = 0.1275 लैगिंग, नो-लोड लॉस = 90.34 W',
        bn: 'নো-লোড সার্কুলেটিং কারেন্ট Ic = ১৪১.৭ A, পাওয়ার ফ্যাক্টর = ০.১২৭৫ ল্যাগিং, অপচয় = ৯০.৩৪ W'
      }
    },
    {
      id: 'ex-trans-max-bank-capacity-calc',
      problem: {
        en: 'Two single-phase transformers A and B with rated capacities of 200 kVA and 300 kVA respectively operate in parallel with equal voltage ratios. The percentage per-unit leakage impedances on their own nameplate bases are Z_pu,A = 4.0% (0.04 p.u.) and Z_pu,B = 5.0% (0.05 p.u.) with identical X/R ratios. Determine: (a) How a total combined load of 450 kVA will be shared between them, (b) The maximum safe total load the parallel bank can deliver without overloading either unit, (c) Which transformer reaches full load first.',
        hi: 'दो ट्रांसफॉर्मर A (200 kVA, 4% प्रतिबाधा) और B (300 kVA, 5% प्रतिबाधा) समानांतर में जुड़े हैं। ज्ञात कीजिए: (a) 450 kVA कुल लोड का विभाजन, (b) बिना किसी यूनिट को ओवरलोड किए बैंक की अधिकतम सुरक्षित क्षमता, (c) कौन सा ट्रांसफॉर्मर पहले फुल लोड होगा?',
        bn: 'দুটি ট্রান্সফরমার A (২০০ kVA, ৪% ইম্পিড্যান্স) এবং B (৩০০ kVA, ৫% ইম্পিড্যান্স) সমান্তরালে যুক্ত। নির্ণয় করো: (a) ৪৫০ kVA লোডের বিভাজন, (b) কোনোটি ওভারলোড না করে ব্যাংকটির সর্বোচ্চ নিরাপদ ক্ষমতা, (c) কোনটি আগে পূর্ণ লোডে পৌঁছাবে?'
      },
      givenValues: {
        'Rating A': 'S_rated,A = 200 kVA, Z_pu,A = 0.04 p.u. (on 200 kVA base)',
        'Rating B': 'S_rated,B = 300 kVA, Z_pu,B = 0.05 p.u. (on 300 kVA base)',
        'Total Bank Load S_total': '450 kVA'
      },
      solution: {
        en: 'Step 1: Compute Per-Unit Capacity Ratios (S_rated / Z_pu):\n- For Transformer A: S_rated,A / Z_pu,A = 200 / 0.04 = 5,000 kVA\n- For Transformer B: S_rated,B / Z_pu,B = 300 / 0.05 = 6,000 kVA\n- Sum of Ratios = 5,000 + 6,000 = 11,000 kVA.\n\nStep 2: Calculate Load shared under 450 kVA Total Demand:\n- S_A = 450 kVA × (5,000 / 11,000) = 450 × (5/11) = 204.55 kVA\n- S_B = 450 kVA × (6,000 / 11,000) = 450 × (6/11) = 245.45 kVA\n- Notice: Transformer A carries 204.55 kVA on a 200 kVA rating (102.28% - Overloaded!), while B carries only 245.45 kVA on a 300 kVA rating (81.82% loaded).\n\nStep 3: Determine which unit reaches full load first:\n- Transformer A has smaller per-unit impedance (4% < 5%), so it draws more than its proportional share and reaches 100% full load first.\n\nStep 4: Calculate Maximum Safe Bank Load without overloading A:\n- Setting S_A = S_rated,A = 200.0 kVA:\n- Maximum Safe Total Load = S_A / (5/11) = 200.0 × (11/5) = 440.0 kVA.\n- At this 440 kVA total load:\n  * S_A = 200.0 kVA (100% full load)\n  * S_B = 440.0 × (6/11) = 240.0 kVA (80.0% load on 300 kVA unit)\n  * Total safe deliverable capacity = 440.0 kVA (less than the theoretical combined 500 kVA rating).',
        hi: 'Step 1: A का अनुपात = 200 / 0.04 = 5000, B का अनुपात = 300 / 0.05 = 6000। कुल = 11000।\nStep 2: 450 kVA लोड पर: SA = 450 × (5/11) = 204.55 kVA (ओवरलोड!), SB = 450 × (6/11) = 245.45 kVA।\nStep 3: ट्रांसफॉर्मर A की प्रतिबाधा कम (4% < 5%) होने से यह पहले फुल-लोड होगा।\nStep 4: अधिकतम सुरक्षित बैंक लोड = 200 × (11/5) = 440.0 kVA।',
        bn: 'ধাপ ১: A-এর অনুপাত = ৫০০০, B-এর অনুপাত = ৬০০০। মোট = ১১০০০।\nধাপ ২: ৪৫০ kVA লোডে: SA = ২০৪.৫৫ kVA (ওভারলোড!), SB = ২৪৫.৪৫ kVA।\nধাপ ৩: ট্রান্সফরমার A-এর ইম্পিড্যান্স কম (৪%) হওয়ায় এটি আগে ফুল লোড হবে।\nধাপ ৪: সর্বোচ্চ নিরাপদ লোড = ২০০ × (১১/৫) = ৪৪০.০ kVA।'
      },
      finalAnswer: {
        en: '(a) S_A = 204.55 kVA (overloaded), S_B = 245.45 kVA; (b) Max safe bank capacity = 440.0 kVA; (c) Transformer A reaches full load first',
        hi: '(a) SA = 204.55 kVA (ओवरलोड), SB = 245.45 kVA; (b) अधिकतम सुरक्षित क्षमता = 440.0 kVA; (c) ट्रांसफॉर्मर A पहले फुल-लोड होगा',
        bn: '(a) SA = ২০৪.৫৫ kVA (ওভারলোড), SB = ২৪৫.৪৫ kVA; (b) সর্বোচ্চ নিরাপদ ক্ষমতা = ৪৪০.০ kVA; (c) ট্রান্সফরমার A আগে ফুল লোড হবে'
      }
    },
    {
      id: 'ex-trans-polarity-parallel-disaster',
      problem: {
        en: 'Two 250 kVA, 2400/240 V transformers A and B are erroneously connected in parallel with reverse polarity on their secondaries while the primaries are energized at 2400 V. Each transformer has an equivalent series impedance referred to secondary of Z_eq = (0.01 + j0.03) Ω. Calculate: (a) The net short-circuit EMF driving current in the secondary loop, (b) The catastrophic circulating short-circuit current, (c) The ratio of this fault current to the rated full-load secondary current (1041.67 A).',
        hi: 'दो 250 kVA, 2400/240 V ट्रांसफॉर्मरों के सेकेंडरी को गलती से विपरीत पोलैरिटी (Reverse Polarity) में समानांतर जोड़ दिया गया। प्रत्येक का सेकेंडरी समतुल्य प्रतिबाधा Zeq = 0.01 + j0.03 Ω है। ज्ञात कीजिए: (a) सेकेंडरी लूप में कुल प्रेरित EMF, (b) विनाशकारी शॉर्ट-सर्किट धारा, (c) यह धारा फुल-लोड करंट (1041.7 A) की कितने गुना है?',
        bn: 'দুটি ২৫০ kVA, ২৪০০/২৪০ V ট্রান্সফর্মারের সেকেন্ডারি ভুলবশত বিপরীত পোলারিটিতে সমান্তরালে যুক্ত করা হলো। প্রতিটির সেকেন্ডারি ইম্পিড্যান্স Zeq = ০.০১ + j০.০৩ Ω। নির্ণয় করো: (a) সেকেন্ডারি লুপের মোট EMF, (b) শর্ট-সার্কিট কারেন্টের মান, (c) এটি রেটেড ফুল-লোড কারেন্টের (১০৪১.৭ A) কত গুণ।'
      },
      givenValues: {
        'Secondary Voltage of Each Transformer E': '240 V',
        'Rated Full-load Secondary Current I_FL': '250,000 / 240 = 1041.67 A',
        'Impedance of Each Unit Z_eq': '(0.01 + j0.03) Ω ==> |Z_eq| = √(0.0001 + 0.0009) = √0.0010 = 0.03162 Ω',
        'Total Loop Impedance Z_loop': '2 × (0.01 + j0.03) = (0.02 + j0.06) Ω ==> |Z_loop| = 0.063245 Ω'
      },
      solution: {
        en: 'Step 1: Calculate Net Driving Voltage in Reverse Polarity:\n- In correct polarity: E_net = E_A - E_B = 240 - 240 = 0 V.\n- In reverse polarity, the secondary induced EMFs act in series aiding:\n  E_net = E_A + E_B = 240 V + 240 V = 480.0 V!\n\nStep 2: Calculate Circulating Short-Circuit Current (I_sc):\n- I_sc = E_net / |Z_loop| = 480.0 V / 0.063245 Ω = 7,589.5 A ≈ 7,590 A!\n\nStep 3: Calculate Fault-to-Rated Current Ratio:\n- Ratio = I_sc / I_FL = 7,589.5 A / 1,041.67 A = 7.286 times rated full-load current (728.6% of nameplate rating!).\n- Practical Engineering Consequence: This immense 7.59 kA current generates tremendous magnetic forces (F ∝ I²) and extreme I²R heating (53x normal heat rate), causing instantaneous tripping of substation circuit breakers or severe winding explosion if unprotected.',
        hi: 'Step 1: विपरीत पोलैरिटी में कुल वोल्टेज E_net = 240 + 240 = 480 V!\nStep 2: विनाशकारी शॉर्ट-सर्किट करंट I_sc = 480 / 0.063245 = 7,590 A!\nStep 3: फुल-लोड करंट का अनुपात = 7590 / 1041.7 = 7.29 गुना!\n(निष्कर्ष: भारी चुंबकीय बल एवं आग लगने से बचाने हेतु सुरक्षा ब्रेकर तुरंत ट्रिप हो जाएगा।)',
        bn: 'ধাপ ১: বিপরীত পোলারিটিতে মোট ভোল্টেজ = ২৪০ + ২৪০ = ৪৮০ V!\nধাপ ২: ধ্বংসাত্মক শর্ট-সার্কিট কারেন্ট = ৪৮০ / ০.০৬৩২৪৫ = ৭৫৯০ A!\nধাপ ৩: ফুল-লোড কারেন্টের অনুপাত = ৭৫৯০ / ১০৪১.৭ = ৭.২৯ গুণ!'
      },
      finalAnswer: {
        en: 'Net Loop EMF = 480 V, Destructive Circulating Current = 7,590 A (7.29 times rated full-load current). Demonstrates why polarity matching is absolutely mandatory.',
        hi: 'कुल लूप EMF = 480 V, विनाशकारी फॉल्ट करंट = 7,590 A (फुल-लोड का 7.29 गुना)। यह दर्शाता है कि पोलैरिटी मिलान क्यों अनिवार्य है।',
        bn: 'মোট লুপ EMF = ৪৮০ V, ধ্বংসাত্মক কারেন্ট = ৭৫৯০ A (ফুল-লোডের ৭.২৯ গুণ)। এটি প্রমাণ করে কেন পোলারিটি মেলানো অপরিহার্য।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Substation Grid Scalability: City distribution substations parallel 2 to 4 power transformers on common 11 kV busbars to meet seasonal summer peak cooling demands without redesigning the substation civil structure.',
      'Industrial Continuous Process Security: Data centers, chemical plants, and semiconductor fabs parallel redundant (N+1) transformers so that if any unit suffers a thermal or electrical fault, automated transfer schemes maintain 100% uptime.',
      'Energy Efficiency Optimization Scheduling: Supervisory Control and Data Acquisition (SCADA) algorithms dynamically switch parallel transformers in or out based on aggregate load, ensuring active units operate near their peak efficiency sweet spot (60–80%).',
      'Renewable Microgrid Coordinated Infeed: Solar and wind farm substations parallel multiple step-up collector transformers to feed large multi-megawatt blocks into the transmission grid.'
    ],
    hi: [
      'सबस्टेशन ग्रिड विस्तार: गर्मियों में पीक लोड संभालने हेतु सबस्टेशनों में 2 से 4 ट्रांसफॉर्मरों को समानांतर बसबार पर चलाया जाता है।',
      'डेटा सेंटर एवं क्रिटिकल उद्योगों में निर्बाध आपूर्ति: (N+1) रिडंडेंट ट्रांसफॉर्मर जोड़कर बिना किसी रुकावट के 24/7 विद्युत आपूर्ति सुनिश्चित की जाती है।',
      'SCADA आधारित ऊर्जा अनुकूलन: लोड कम होने पर SCADA सिस्टम द्वारा एक ट्रांसफॉर्मर बंद करके कोर लॉस कम किया जाता है।',
      'सोलर व विंड फार्म ग्रिड संयोजन: नवीकरणीय ऊर्जा संयंत्रों में कई स्टेप-अप ट्रांसफॉर्मरों को समानांतर जोड़कर ग्रिड में बिजली भेजी जाती है।'
    ],
    bn: [
      'সাবস্টেশন সক্ষমতা বৃদ্ধি: অতিরিক্ত বিদ্যুৎ চাহিদা মেটাতে সাবস্টেশনে একাধিক ট্রান্সফরমার সমান্তরালে যুক্ত করা হয়।',
      'শিল্পকারখানা ও ডেটা সেন্টারে নিরবচ্ছিন্ন বিদ্যুৎ: (N+1) রিডানড্যান্ট ট্রান্সফরমার সমান্তরালে রেখে নিরবচ্ছিন্ন সেবা নিশ্চিত করা হয়।',
      'SCADA শক্তি অপটিমাইজেশন: লোড কম থাকলে অতিরিক্ত ট্রান্সফরমার বন্ধ রেখে বিদ্যুৎ সাশ্রয় করা হয়।',
      'নবায়নযোগ্য বিদ্যুৎ কেন্দ্র: সৌর ও বায়ু বিদ্যুৎ কেন্দ্রে একাধিক ট্রান্সফরমার সমান্তরালে যুক্ত করে গ্রিডে বিদ্যুৎ পাঠানো হয়।'
    ]
  },
  importantPoints: {
    en: [
      'Identical Polarity is mandatory; reverse polarity creates a catastrophic short-circuit with twice the rated secondary voltage driving massive fault currents.',
      'Equal voltage ratios prevent no-load circulating current (Ic = (EA - EB) / (ZA + ZB)) from continuously heating the windings.',
      'For three-phase transformers, identical phase sequence and identical vector group (same phase displacement) are strictly mandatory.',
      'To achieve proportional load sharing according to nameplate kVA, the per-unit impedances must be equal on their respective kVA ratings (Z_pu,A = Z_pu,B).',
      'The transformer with smaller per-unit impedance carries more than its proportional share and will reach full load first.',
      'Identical X/R ratios ensure both transformers operate at the same power factor as the combined external load.'
    ],
    hi: [
      'समान पोलैरिटी अनिवार्य है; विपरीत पोलैरिटी से दोगुने वोल्टेज पर भयानक शॉर्ट-सर्किट होता है।',
      'समान वोल्टेज अनुपात नो-लोड परिसंचारी धारा (Ic) को रोकता है।',
      'थ्री-फेज ट्रांसफॉर्मरों हेतु समान फेज अनुक्रम और समान वेक्टर ग्रुप अनिवार्य है।',
      'kVA क्षमता के अनुपात में लोड शेयरिंग हेतु प्रति-इकाई प्रतिबाधा (p.u. impedance) समान होनी चाहिए।',
      'कम p.u. प्रतिबाधा वाला ट्रांसफॉर्मर अधिक लोड उठाता है और पहले फुल-लोड पर पहुँचता है।',
      'समान X/R अनुपात होने पर दोनों ट्रांसफॉर्मर लोड के समान पावर फैक्टर पर काम करते हैं।'
    ],
    bn: [
      'অভিন্ন পোলারিটি বাধ্যতামূলক; বিপরীত পোলারিটিতে দ্বিগুণ ভোল্টেজে মারাত্মক শর্ট সার্কিট হয়।',
      'সমান ভোল্টেজ অনুপাত নো-লোড সার্কুলেটিং কারেন্ট রোধ করে।',
      'থ্রি-ফেজ ক্ষেত্রে একই ফেজ সিকোয়েন্স ও অভিন্ন ভেক্টর গ্রুপ থাকা অপরিহার্য।',
      'ক্ষমতার অনুপাতে লোড ভাগ করে নিতে পার-ইউনিট ইম্পিড্যান্স সমান হতে হয়।',
      'কম p.u. ইম্পিড্যান্সযুক্ত ট্রান্সফরমার আগে পূর্ণ লোডে পৌঁছে যায়।',
      'সমান X/R অনুপাত নিশ্চিত করে যে উভয় ইউনিট লোডের সমান পাওয়ার ফ্যাক্টরে কাজ করছে।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing actual ohmic impedance (in Ω) with per-unit impedance: a 200 kVA unit must have HALF the ohmic impedance of a 100 kVA unit to have equal per-unit impedance.',
      'Paralleling three-phase transformers with different vector groups (e.g. Dyn11 and Dyn1): even with identical voltage ratios, the 60° phase displacement creates enormous circulating currents.',
      'Assuming that adding the nameplate kVA ratings gives the total bank capacity: if per-unit impedances or X/R ratios differ, the bank capacity is strictly derated because one unit overloads before the other reaches full load.',
      'Neglecting no-load circulating currents when secondary tap settings differ by only 1 tap step.',
      'Connecting transformers with opposite polarity, causing instantaneous breaker tripping and mechanical winding damage.'
    ],
    hi: [
      'ओमिक प्रतिबाधा (Ω) और p.u. प्रतिबाधा में भ्रम: 200 kVA यूनिट का वास्तविक प्रतिरोध 100 kVA यूनिट का आधा होना चाहिए ताकि दोनों का p.u. मान बराबर रहे।',
      'भिन्न वेक्टर ग्रुप (जैसे Dyn11 और Dyn1) को समानांतर जोड़ना, जिससे 60° फेज अंतर के कारण भारी शॉर्ट सर्किट करंट बहता है।',
      'यह मान लेना कि दोनों की रेटिंग जोड़ने पर कुल क्षमता मिल जाएगी: यदि p.u. प्रतिबाधा अलग है, तो एक यूनिट पहले ओवरलोड हो जाएगी जिससे कुल क्षमता घट जाती है।',
      'टैप सेटिंग में अंतर होने से बहने वाली परिसंचारी धारा की उपेक्षा करना।',
      'विपरीत पोलैरिटी में जोड़ना जिससे ब्रेकर तुरंत ट्रिप हो जाता है।'
    ],
    bn: [
      'ওমিক ইম্পিড্যান্স (Ω) এবং পার-ইউনিট ইম্পিড্যান্স গুলিয়ে ফেলা: সমান p.u.-এর জন্য ২০০ kVA ইউনিটের ওমিক মান ১০০ kVA-এর অর্ধেক হতে হয়।',
      'ভিন্ন ভেক্টর গ্রুপের ট্রান্সফরমার (যেমন Dyn11 ও Dyn1) সমান্তরালে যুক্ত করা।',
      'মনে করা যে দুটি ট্রান্সফর্মারের রেটিং যোগ করলেই মোট ব্যাংকের ক্ষমতা পাওয়া যাবে: p.u. অসমান হলে ব্যাংক ক্ষমতা কমে যায়।',
      'ট্যাপ সেটিংয়ের অমিলের কারণে সার্কুলেটিং কারেন্ট উপেক্ষা করা।',
      'বিপরীত পোলারিটিতে সংযোগ দিয়ে মারাত্মক শর্ট সার্কিট ঘটানো।'
    ]
  },
  mcqs: [
    {
      id: 'ch6-l18-mcq1',
      question: {
        en: 'What is the immediate consequence if two single-phase transformers are connected in parallel with reverse (opposite) polarity on their secondaries?',
        hi: 'यदि दो सिंगल-फेज ट्रांसफॉर्मरों की सेकेंडरी को गलती से विपरीत पोलैरिटी में समानांतर जोड़ दिया जाए तो क्या तात्कालिक परिणाम होगा?',
        bn: 'দুটি সিঙ্গেল-ফেজ ট্রান্সফর্মারের সেকেন্ডারি বিপরীত পোলারিটিতে সমান্তরালে যুক্ত করলে তাৎক্ষণিক কী ঘটবে?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'A catastrophic dead short circuit with twice the rated secondary voltage (2·E) driving enormous fault currents',
            hi: 'दोगुने रेटेड वोल्टेज (2·E) के तहत एक अत्यंत विनाशकारी शॉर्ट सर्किट होगा जिससे भारी फॉल्ट करंट बहेगा',
            bn: 'দ্বিগুণ রেটেড ভোল্টেজের (2·E) প্রভাবে একটি মারাত্মক ডেড শর্ট সার্কিট ঘটবে এবং বিশাল ফল্ট কারেন্ট প্রবাহিত হবে'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'The output voltage simply drops to zero with no circulating current',
            hi: 'आउटपुट वोल्टेज बिना किसी करंट के सीधे शून्य हो जाएगा',
            bn: 'কোনো সার্কুলেটিং কারেন্ট ছাড়াই আউটপুট ভোল্টেজ শূন্য হয়ে যাবে'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'The core losses will decrease by 50%',
            hi: 'कोर लॉस 50% कम हो जाएगा',
            bn: 'কোর লস ৫০% কমে যাবে'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'The transformers will operate normally at unity power factor',
            hi: 'ट्रांसफॉर्मर सामान्य रूप से 1.0 पावर फैक्टर पर चलते रहेंगे',
            bn: 'ট্রান্সফরমারদ্বয় স্বাভাবিকভাবে ইউনিটি পাওয়ার ফ্যাক্টরে চলতে থাকবে'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'In reverse polarity, the secondary induced voltages add in series (E_net = 2·E) across the tiny combined winding impedance (2·Z_eq), producing a massive short-circuit current (7x to 15x rated full-load current) that will violently damage windings unless immediately cleared by circuit breakers.',
        hi: 'विपरीत पोलैरिटी में दोनों वोल्टेज जुड़कर 2·E हो जाते हैं, जिससे वाइंडिंग प्रतिबाधा बहुत कम होने के कारण भारी शॉर्ट-सर्किट करंट (7-15 गुना) बहता है।',
        bn: 'বিপরীত পোলারিটিতে ভোল্টেজদ্বয় যোগ হয়ে দ্বিগুণ (2·E) হয়, যা অত্যন্ত কম ওয়াইন্ডিং ইম্পিড্যান্সে বিশাল শর্ট-সার্কিট কারেন্ট প্রবাহিত করে।'
      }
    },
    {
      id: 'ch6-l18-mcq2',
      question: {
        en: 'Two parallel transformers A (100 kVA, Zpu = 3%) and B (200 kVA, Zpu = 5%) supply a combined load. Which transformer will reach its full rated load first as the demand increases?',
        hi: 'दो समानांतर ट्रांसफॉर्मर A (100 kVA, 3% प्रतिबाधा) और B (200 kVA, 5% प्रतिबाधा) जुड़े हैं। लोड बढ़ने पर कौन सा ट्रांसफॉर्मर पहले फुल लोड पर पहुँचेगा?',
        bn: 'দুটি সমান্তরাল ট্রান্সফরমার A (১০০ kVA, Zpu = ৩%) এবং B (২০০ kVA, Zpu = ৫%) সংযুক্ত। লোড বৃদ্ধি পেলে কোনটি আগে পূর্ণ রেটেড লোডে পৌঁছাবে?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'Transformer A, because it has the smaller per-unit impedance (3% < 5%) and draws more than its proportional share',
            hi: 'ट्रांसफॉर्मर A, क्योंकि इसकी प्रति-इकाई प्रतिबाधा कम (3% < 5%) है और यह अपनी क्षमता से अधिक अनुपात में करंट लेता है',
            bn: 'ট্রান্সফরমার A, কারণ এর পার-ইউনিট ইম্পিড্যান্স কম (৩% < ৫%) হওয়ায় এটি ক্ষমতার চেয়ে বেশি অনুপাতে লোড নেয়'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'Transformer B, because it has a larger kVA capacity',
            hi: 'ट्रांसफॉर्मर B, क्योंकि इसकी kVA क्षमता अधिक है',
            bn: 'ট্রান্সফরমার B, কারণ এর kVA ক্ষমতা বেশি'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'Both transformers will reach full load at the exact same instant',
            hi: 'दोनों ट्रांसफॉर्मर बिल्कुल एक ही समय पर फुल लोड होंगे',
            bn: 'উভয় ট্রান্সফরমার একই সাথে পূর্ণ লোডে পৌঁছাবে'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'Neither transformer will carry any load',
            hi: 'कोई भी ट्रांसफॉर्मर लोड नहीं उठाएगा',
            bn: 'কোনো ট্রান্সফরমারই লোড বহন করবে না'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Load sharing is inversely proportional to per-unit impedance. The unit with lower per-unit impedance (Transformer A with 3%) carries a disproportionately heavier percentage load and reaches 100% capacity before Transformer B.',
        hi: 'लोड शेयरिंग p.u. प्रतिबाधा के व्युत्क्रमानुपाती होती है। 3% प्रतिबाधा वाला ट्रांसफॉर्मर A अधिक भार वहन कर पहले 100% पर पहुँच जाएगा।',
        bn: 'লোড শেয়ারিং p.u. ইম্পিড্যান্সের ব্যস্তানুপাতিক। কম ইম্পিড্যান্সের ট্রান্সফরমার A আগে ১০০% লোডে পৌঁছে যাবে।'
      }
    },
    {
      id: 'ch6-l18-mcq3',
      question: {
        en: 'For three-phase transformers operating in parallel, why is it strictly forbidden to parallel a Dyn11 transformer with a Dyn1 transformer?',
        hi: 'थ्री-फेज ट्रांसफॉर्मरों में Dyn11 ट्रांसफॉर्मर को Dyn1 ट्रांसफॉर्मर के साथ समानांतर जोड़ना सख्त वर्जित क्यों है?',
        bn: 'থ্রি-ফেজ ক্ষেত্রে কেন Dyn11 ট্রান্সফর্মারকে Dyn1 ট্রান্সফর্মারের সাথে সমান্তরালে যুক্ত করা সম্পূর্ণ নিষিদ্ধ?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'Because Dyn11 has a +30° phase displacement while Dyn1 has a -30° phase displacement, creating a 60° phase difference across the secondaries resulting in destructive short-circuit currents',
            hi: 'चूँकि Dyn11 में +30° और Dyn1 में -30° फेज विस्थापन होता है, जिससे सेकेंडरी के बीच 60° का कला अंतर होकर भारी शॉर्ट-सर्किट करंट बहेगा',
            bn: 'কারণ Dyn11-এ +৩০° এবং Dyn1-এ -৩০° ফেজ পার্থক্য থাকে, ফলে সেকেন্ডারিদ্বয়ের মাঝে ৬০° ফেজ ব্যবধান সৃষ্টি হয়ে মারাত্মক শর্ট সার্কিট ঘটবে'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'Because their core materials are incompatible',
            hi: 'चूँकि उनके कोर पदार्थ असंगत होते हैं',
            bn: 'কারণ তাদের কোরের উপাদান অসঙ্গতিপূর্ণ'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'Because Dyn11 requires DC excitation while Dyn1 requires AC excitation',
            hi: 'चूँकि Dyn11 में DC और Dyn1 में AC सप्लाई चाहिए',
            bn: 'কারণ Dyn11-এ DC এবং Dyn1-এ AC প্রয়োজন হয়'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'Because Dyn1 has no secondary neutral point',
            hi: 'चूँकि Dyn1 में कोई न्यूट्रल नहीं होता',
            bn: 'কারণ Dyn1-এ কোনো নিউট্রাল থাকে না'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Dyn11 produces secondary line voltages leading the primary by +30°, whereas Dyn1 produces voltages lagging by -30°. When connected to a common busbar, the 60° phase difference produces a large net driving voltage ΔV = 2·V·sin(30°) = V across near-zero winding loop impedance, resulting in destructive fault currents.',
        hi: 'Dyn11 (+30°) और Dyn1 (-30°) के बीच 60° का फेज अंतर होता है। इस अंतर के कारण बसबार पर सीधा शॉर्ट सर्किट वोल्टेज उत्पन्न हो जाता है।',
        bn: 'Dyn11 (+৩০°) এবং Dyn1 (-৩০°)-এর মধ্যে ৬০° ফেজ ব্যবধান থাকায় সেকেন্ডারিতে ফুল ভোল্টেজের সমান বিভব পার্থক্য সৃষ্টি হয়ে বিধ্বংসী শর্ট সার্কিট হয়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'ch6-l18-pq1',
      question: {
        en: 'State and explain all the essential (mandatory) and desirable conditions for operating two single-phase transformers in parallel. What happens if the voltage ratios are unequal?',
        hi: 'दो सिंगल-फेज ट्रांसफॉर्मरों के समानांतर संचालन हेतु सभी अनिवार्य एवं वांछनीय शर्तों का उल्लेख एवं व्याख्या कीजिए। यदि वोल्टेज अनुपात असमान हो तो क्या होगा?',
        bn: 'দুটি সিঙ্গেল-ফেজ ট্রান্সফর্মারের সমান্তরাল সংযোগের অপরিহার্য ও বাঞ্ছনীয় শর্তাবলী উল্লেখ ও ব্যাখ্যা করো। ভোল্টেজ অনুপাত অসমান হলে কী ঘটবে?'
      },
      hint: {
        en: 'Distinguish between safety/destruction conditions (polarity, voltage ratio) and proportional load sharing conditions (equal p.u. impedance and equal X/R ratio).',
        hi: 'सुरक्षा शर्तों (पोलैरिटी, वोल्टेज) एवं लोड शेयरिंग शर्तों (p.u. प्रतिबाधा, X/R अनुपात) में अंतर स्पष्ट कीजिए।',
        bn: 'নিরাপত্তা শর্ত এবং লোড শেয়ারিং শর্তের পার্থক্য তুলে ধরো।'
      },
      answerKey: {
        en: '1. Essential (Mandatory) Conditions:\n- Correct Polarity: Secondaries must have identical instantaneous polarities. Reverse polarity connects induced EMFs in series (2·E) across the loop impedance, causing violent short-circuit explosions.\n- Equal Voltage Ratios (E_A = E_B): If secondary voltages differ, a continuous circulating current I_c = (E_A - E_B) / (Z_A + Z_B) flows through the windings even at no load, causing unnecessary heating and reducing load capacity.\n- Equal Frequency (50 Hz / 60 Hz).\n- For 3-Phase: Same Phase Sequence (R-Y-B) and Same Vector Group (Zero Phase Displacement).\n\n2. Desirable (Optimal Sharing) Conditions:\n- Per-unit impedances inversely proportional to kVA ratings (Z_pu,A = Z_pu,B on their own bases): Guarantees each unit shares load strictly in proportion to its rating.\n- Equal X/R ratios (θ_A = θ_B): Ensures branch currents are in phase and both units operate at the load power factor.\n\n3. Unequal Voltage Ratio Effect:\n- A voltage mismatch of even 2% generates a large reactive circulating current that loads one transformer and unloads the other, causing premature overheating before the bank reaches nominal capacity.',
        hi: '1. अनिवार्य शर्तें:\n- समान पोलैरिटी: गलत होने पर दोगुने वोल्टेज पर भीषण शॉर्ट सर्किट होगा।\n- समान वोल्टेज अनुपात: अंतर होने पर नो-लोड पर भी परिसंचारी धारा बहती है।\n- समान फ्रीक्वेंसी।\n- थ्री-फेज: समान फेज अनुक्रम और समान वेक्टर ग्रुप।\n\n2. वांछनीय शर्तें:\n- प्रति-इकाई प्रतिबाधा kVA रेटिंग के व्युत्क्रमानुपाती (Zpu बराबर)।\n- समान X/R अनुपात।\n\n3. असमान वोल्टेज का प्रभाव: नो-लोड पर भारी परिसंचारी धारा बहकर ट्रांसफॉर्मर को गर्म करती है।',
        bn: '১. অপরিহার্য শর্তাবলী:\n- সঠিক পোলারিটি: ভুল হলে মারাত্মক শর্ট সার্কিট বিস্ফোরণ ঘটে।\n- সমান ভোল্টেজ অনুপাত: অমিল হলে নো-লোডেও সার্কুলেটিং কারেন্ট প্রবাহিত হয়।\n- একই ফ্রিকোয়েন্সি।\n- থ্রি-ফেজে: একই ফেজ সিকোয়েন্স ও অভিন্ন ভেক্টর গ্রুপ।\n\n২. বাঞ্ছনীয় শর্তাবলী:\n- সমান পার-ইউনিট ইম্পিড্যান্স (Zpu,A = Zpu,B)।\n- সমান X/R অনুপাত।\n\n৩. অসমান ভোল্টেজ অনুপাতের ফল: নো-লোডে ক্ষতিকর কারেন্ট প্রবাহিত হয়ে তার অতিরিক্ত উত্তপ্ত করে।'
      }
    },
    {
      id: 'ch6-l18-pq2',
      question: {
        en: 'Two transformers of different kVA ratings (e.g. 100 kVA and 300 kVA) are connected in parallel. Derive the expression for the load shared by each transformer in terms of their per-unit impedances. Why does the unit with the smaller per-unit impedance limit the total output capacity of the parallel bank?',
        hi: 'भिन्न kVA रेटिंग (जैसे 100 kVA और 300 kVA) वाले दो ट्रांसफॉर्मर समानांतर में जुड़े हैं। उनके p.u. प्रतिबाधा के पदों में लोड शेयरिंग का सूत्र निगमित कीजिए। कम p.u. प्रतिबाधा वाला ट्रांसफॉर्मर बैंक की कुल क्षमता को क्यों सीमित कर देता है?',
        bn: 'ভিন্ন kVA রেটিংয়ের (যেমন ১০০ kVA ও ৩০০ kVA) দুটি ট্রান্সফরমার সমান্তরালে যুক্ত। পার-ইউনিট ইম্পিড্যান্সের সাপেক্ষে লোড বণ্টনের সমীকরণটি প্রতিপাদন করো। কেন কম p.u. ইম্পিড্যান্সের ইউনিটটি ব্যাংকের মোট আউটপুট ক্ষমতাকে সীমাবদ্ধ করে দেয়?'
      },
      hint: {
        en: 'Express ohmic impedance in terms of per-unit impedance (Z_Ω = Z_pu · V² / S_rated) and substitute into the standard current/kVA divider equation.',
        hi: 'ओमिक प्रतिबाधा को p.u. प्रतिबाधा में बदलें (Z_Ω = Zpu · V² / Srated) और लोड डिवाइडर सूत्र में रखें।',
        bn: 'ওমিক ইম্পিড্যান্সকে p.u. ইম্পিড্যান্সে রূপান্তর করে কারেন্ট ডিভাইডার সমীকরণে বসাও।'
      },
      answerKey: {
        en: '1. Mathematical Derivation:\n- Ohmic impedance of a transformer on secondary base voltage V2 is Z_Ω = (Z_pu · V2²) / S_rated.\n- Therefore: Z_A = (Z_pu,A · V2²) / S_rated,A  and  Z_B = (Z_pu,B · V2²) / S_rated,B.\n- From the current divider rule, kVA load sharing is: S_A = S_total · [ Z_B / (Z_A + Z_B) ].\n- Substituting the expressions and simplifying:\n  S_A = S_total · [ (S_rated,A / Z_pu,A) / ( (S_rated,A / Z_pu,A) + (S_rated,B / Z_pu,B) ) ].\n\n2. Why the unit with smaller per-unit impedance limits bank capacity:\n- If Z_pu,A < Z_pu,B, Transformer A takes more than its nominal share of the total load (S_A / S_rated,A > S_B / S_rated,B).\n- As total bank demand increases, Transformer A reaches 100% nameplate capacity while Transformer B is still running underloaded (e.g. at only 75% capacity).\n- To prevent Transformer A from exceeding thermal limits and tripping, total bank load must not exceed S_bank,max = S_rated,A · [ 1 + (S_rated,B·Z_pu,A)/(S_rated,A·Z_pu,B) ], meaning the theoretical full bank sum (S_rated,A + S_rated,B) can never be safely achieved.',
        hi: '1. गणितीय निगमन:\n- Z_Ω = (Zpu · V2²) / Srated\n- SA = Stotal · [ (Srated,A / Zpu,A) / ( (Srated,A / Zpu,A) + (Srated,B / Zpu,B) ) ]\n\n2. बैंक क्षमता सीमित होने का कारण:\n- यदि Zpu,A < Zpu,B है, तो ट्रांसफॉर्मर A अपनी क्षमता से अधिक लोड उठाता है।\n- अतः ट्रांसफॉर्मर A सबसे पहले 100% फुल-लोड पर पहुँच जाएगा जबकि B अभी भी कम लोड (जैसे 75%) पर होगा।\n- A को जलने से बचाने हेतु बैंक का कुल लोड कम रखना पड़ता है, जिससे दोनों की संयुक्त क्षमता का पूरा लाभ नहीं मिल पाता।',
        bn: '১. গাণিতিক প্রতিপাদন:\n- Z_Ω = (Zpu · V2²) / Srated\n- SA = Stotal · [ (Srated,A / Zpu,A) / ( (Srated,A / Zpu,A) + (Srated,B / Zpu,B) ) ]\n\n২. ক্ষমতা সীমাবদ্ধ হওয়ার কারণ:\n- যদি Zpu,A < Zpu,B হয়, তবে ট্রান্সফরমার A তুলনামূলক বেশি লোড বহন করে।\n- ফলে ট্রান্সফরমার A আগে ১০০% পূর্ণ লোডে পৌঁছে যায়, যেখানে B তখনও কম লোডে থাকে।\n- A-কে সুরক্ষিত রাখতে পুরো ব্যাংকের লোড সীমিত রাখতে হয়, যার ফলে উভয় রেটিংয়ের সম্পূর্ণ যোগফল ব্যবহার করা সম্ভব হয় না।'
      }
    }
  ]
};
