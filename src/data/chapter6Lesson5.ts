import { Lesson } from '../types';

export const LESSON_DC_GENERATOR_TYPES: Lesson = {
  id: 'lsn-ch6-dc-generator-types',
  topicId: 'ch6-dc-generator-types',
  chapterId: 'ch-electrical-machines',
  order: 5,
  title: {
    en: 'Types of DC Generators & Excitation Methods',
    hi: 'डीसी जनरेटर के प्रकार एवं उत्तेजन विधियाँ',
    bn: 'ডিসি জেনারেটরের প্রকারভেদ ও এক্সাইটেশন পদ্ধতি'
  },
  description: {
    en: 'Classification of DC generators: separately excited, self-excited shunt, series, cumulative compound, differential compound, long and short shunt topologies, and circuit voltage-current equations.',
    hi: 'डीसी जनरेटर का वर्गीकरण: पृथक उत्तेजित, सेल्फ-एक्साइटेड शंट, सीरीज, संचयी यौगिक, विभेदी यौगिक, लॉन्ग व शॉर्ट शंट टोपोलॉजी एवं परिपथ समीकरण।',
    bn: 'ডিসি জেনারেটরের শ্রেণিবিন্যাস: পৃথক উত্তেজিত, সেলফ-এক্সাইটেড শান্ট, সিরিজ, কিউমুলেটিভ কম্পাউন্ড, ডিফারেনশিয়াল কম্পাউন্ড, লং ও শর্ট শান্ট টপোলজি এবং সার্কিট সমীকরণ।'
  },
  estimatedMinutes: 32,
  easyExplanation: {
    en: 'DC generators are classified based on how their magnetic field coils are energized (excited). In Separately Excited generators, the field winding receives DC power from an external independent battery or source. In Self-Excited generators, the machine uses its own generated armature voltage to power its field coils. Depending on how field coils are wired with the armature, self-excited generators are divided into Shunt (parallel), Series (series), and Compound (both shunt and series coils) types.',
    hi: 'डीसी जनरेटरों का वर्गीकरण उनकी फील्ड वाइंडिंग को करंट (उत्तेजन) देने की विधि पर आधारित होता है। सेपरेटली एक्साइटेड जनरेटर में फील्ड कॉइल को बाहरी बैटरी या स्रोत से करंट दिया जाता है। सेल्फ-एक्साइटेड जनरेटर अपनी फील्ड कॉइल को अपनी ही आर्मेचर बिजली से उत्तेजित करते हैं। आर्मेचर के साथ कनेक्शन के आधार पर ये शंट (समानांतर), सीरीज (श्रेणी) और कंपाउंड (दोनों कॉइल युक्त) जनरेटर कहलाते हैं।',
    bn: 'ফিল্ড কয়েলে কীভাবে কারেন্ট সরবরাহ (এক্সাইটেশন) করা হয় তার ওপর ভিত্তি করে ডিসি জেনারেটর শ্রেণিবদ্ধ করা হয়। সেপারেটলি এক্সাইটেড জেনারেটরে ফিল্ড ওয়াইন্ডিং একটি বহিরাগত ডিসি উৎস থেকে বিদ্যুৎ পায়। সেলফ-এক্সাইটেড জেনারেটরে মেশিনটি তার নিজস্ব উৎপন্ন আর্মেচার ভোল্টেজ দিয়ে ফিল্ড কয়েলকে উত্তেজিত করে। সংযোগের ভিত্তিতে এরা শান্ট (সমান্তরাল), সিরিজ (শ্রেণীবদ্ধ) এবং কম্পাউন্ড (উভয় কয়েলযুক্ত) জেনারেটরে বিভক্ত।'
  },
  detailedExplanation: {
    en: `1. Classification of DC Generators by Excitation:
DC generators are fundamentally divided into two major groups based on the source of field excitation current:
A. Separately Excited DC Generators
B. Self-Excited DC Generators

2. Separately Excited DC Generator:
- Principle: Field coils are powered by an independent external DC source (battery, rectifier, or auxiliary pilot exciter).
- Characteristics: The field current (I_f) is entirely independent of the armature terminal voltage (V) or load current (I_L).
- Governing Equations:
  * Field Circuit: I_f = V_f / R_f
  * Armature Current: I_a = I_L (Load current)
  * Generated EMF: E_g = V + (I_a · R_a) + V_brush
  * Output Power: P_out = V · I_L
  * Developed Armature Power: P_dev = E_g · I_a
- Applications: Ward-Leonard speed control systems, laboratory testing dynamos, and power supplies requiring stable voltage over wide output ranges.

3. Self-Excited DC Generators:
Self-excited machines rely on small residual magnetism trapped in their iron pole shoes to initiate voltage build-up. They are subdivided according to field-armature wiring:

A. DC Shunt Generator:
- Field winding has MANY TURNS of THIN copper wire, giving it a high resistance (R_sh ≈ 50 Ω to 300 Ω).
- Field winding is wired in PARALLEL (shunt) across the armature terminals.
- Governing Equations:
  * Shunt Field Current: I_sh = V / R_sh
  * Total Armature Current: I_a = I_L + I_sh
  * Generated EMF: E_g = V + (I_a · R_a) + V_brush
- Behavior: Terminal voltage drops slightly as load current increases due to internal resistance and armature reaction.
- Applications: Battery charging stations, ordinary constant-voltage commercial power supplies, auxiliary exciters for AC alternators.

B. DC Series Generator:
- Field winding has FEW TURNS of THICK copper wire, giving it a very low resistance (R_se ≈ 0.05 Ω to 0.5 Ω).
- Field winding is wired in SERIES with the armature and load.
- Governing Equations:
  * Current: I_a = I_se = I_L
  * Generated EMF: E_g = V + I_a · (R_a + R_se) + V_brush
  * Terminal Voltage: V = E_g - I_a · (R_a + R_se) - V_brush
- Behavior: Terminal voltage rises as load current increases from no-load to full-load because field flux increases with load current.
- Applications: DC line voltage boosters in traction/distribution feeders to compensate for transmission line IR drops, constant-current series arc lighting.

C. DC Compound Generators (Cumulative vs Differential):
A compound machine possesses BOTH a high-resistance shunt field coil (many turns) and a low-resistance series field coil (few turns) on each pole.

- 1. Cumulative Compound Generator:
  * The MMF of the series field ASSISTS (aids) the shunt field MMF:
    Φ_total = Φ_sh + Φ_se
  * Flat / Level Compounded: Full-load terminal voltage equals no-load terminal voltage (V_FL = V_NL).
  * Over-Compounded: Full-load terminal voltage exceeds no-load voltage (V_FL > V_NL) to compensate for voltage drop across long distribution feeders.
  * Under-Compounded: Full-load terminal voltage is slightly lower than no-load voltage (V_FL < V_NL).
  * Applications: Municipal and industrial DC power grids, shipboard marine electrical installations, railway substations.

- 2. Differential Compound Generator:
  * The MMF of the series field OPPOSES the shunt field MMF:
    Φ_total = Φ_sh - Φ_se
  * As load current increases, total flux drops rapidly, causing a sharp drop in terminal voltage.
  * Applications: Electric arc welding (where near-constant current is essential despite changing arc resistance and short-circuit conditions).

4. Compound Generator Connection Topologies:
A. Long-Shunt Connection:
- The shunt field winding is connected across the SERIES COMBINATION of both the armature and series field.
- Circuit Equations:
  * Shunt Field Current: I_sh = V / R_sh
  * Series Field Current: I_se = I_a = I_L + I_sh
  * Generated EMF: E_g = V + I_a · (R_a + R_se) + V_brush

B. Short-Shunt Connection:
- The shunt field winding is connected directly across the ARMATURE ONLY; the series field is in series with the external load.
- Circuit Equations:
  * Series Field Current: I_se = I_L
  * Voltage across Armature & Shunt Field: V_arm = V + (I_L · R_se)
  * Shunt Field Current: I_sh = V_arm / R_sh = (V + I_L · R_se) / R_sh
  * Armature Current: I_a = I_L + I_sh
  * Generated EMF: E_g = V + (I_L · R_se) + (I_a · R_a) + V_brush = V_arm + (I_a · R_a) + V_brush`,
    hi: `1. उत्तेजन के आधार पर डीसी जनरेटर का वर्गीकरण:
डीसी जनरेटरों को दो मुख्य श्रेणियों में विभाजित किया जाता है:
A. सेपरेटली एक्साइटेड (पृथक उत्तेजित) डीसी जनरेटर
B. सेल्फ-एक्साइटेड (स्व-उत्तेजित) डीसी जनरेटर

2. सेपरेटली एक्साइटेड जनरेटर:
- फील्ड वाइंडिंग को बाहरी DC स्रोत (बैटरी) से उत्तेजित किया जाता है।
- आर्मेचर धारा: I_a = I_L।
- EMF समीकरण: E_g = V + I_a · R_a + V_brush।

3. सेल्फ-एक्साइटेड जनरेटर के प्रकार:
A. शंट जनरेटर (Shunt Generator):
- फील्ड वाइंडिंग आर्मेचर के समानांतर में जुड़ी होती है (पतले तार के अधिक टर्न, उच्च प्रतिरोध R_sh)।
- I_sh = V / R_sh, I_a = I_L + I_sh।
- E_g = V + I_a · R_a + V_brush।
- उपयोग: बैटरी चार्जिंग एवं सामान्य डीसी पावर सप्लाई।

B. सीरीज जनरेटर (Series Generator):
- फील्ड वाइंडिंग आर्मेचर के श्रेणी में जुड़ी होती है (मोटे तार के कम टर्न, निम्न प्रतिरोध R_se)।
- I_a = I_se = I_L।
- E_g = V + I_a · (R_a + R_se) + V_brush।
- उपयोग: वितरण लाइनों में वोल्टेज बूस्टर।

C. कंपाउंड जनरेटर (यौगिक जनरेटर):
इसमें शंट और सीरीज दोनों वाइंडिंग होती हैं।
- 1. संचयी यौगिक (Cumulative): Φ_total = Φ_sh + Φ_se (सीरीज फ्लक्स शंट फ्लक्स का सहयोग करता है)।
- 2. विभेदी यौगिक (Differential): Φ_total = Φ_sh - Φ_se (सीरीज फ्लक्स शंट का विरोध करता है, वेल्डिंग में उपयोगी)।

4. लॉन्ग शंट बनाम शॉर्ट शंट:
- लॉन्ग शंट: शंट फील्ड आर्मेचर और सीरीज फील्ड दोनों के समानांतर में जुड़ती है (I_a = I_se = I_L + I_sh)।
- शॉर्ट शंट: शंट फील्ड केवल आर्मेचर के समानांतर में जुड़ती है (I_se = I_L, V_arm = V + I_L · R_se)।`,
    bn: `১. এক্সাইটেশনের ভিত্তিতে ডিসি জেনারেটরের শ্রেণিবিন্যাস:
A. সেপারেটলি এক্সাইটেড (পৃথক উত্তেজিত) জেনারেটর
B. সেলফ-এক্সাইটেড (স্ব-উত্তেজিত) জেনারেটর

২. সেপারেটলি এক্সাইটেড জেনারেটর:
- ফিল্ড কয়েল বহিরাগত ডিসি উৎস দ্বারা পরিচালিত হয়।
- সমীকরণ: I_a = I_L, E_g = V + I_a · R_a + V_brush।

৩. সেলফ-এক্সাইটেড জেনারেটর:
A. শান্ট জেনারেটর: ফিল্ড কয়েল আর্মেচারের সাথে সমান্তরালে যুক্ত (পাতলা তারের বহু প্যাঁচ, উচ্চ রোধ R_sh)।
- I_sh = V / R_sh, I_a = I_L + I_sh, E_g = V + I_a · R_a + V_brush।
- ব্যবহার: ব্যাটারি চার্জিং ও সাধারণ বিদ্যুৎ সরবরাহ।

B. সিরিজ জেনারেটর: ফিল্ড কয়েল আর্মেচারের সাথে সিরিজে যুক্ত (মোটা তারের কম প্যাঁচ, কম রোধ R_se)।
- I_a = I_se = I_L, E_g = V + I_a · (R_a + R_se) + V_brush।
- ব্যবহার: লাইনে ভোল্টেজ বুস্টার হিসেবে।

C. কম্পাউন্ড জেনারেটর:
- কিউমুলেটিভ: Φ_total = Φ_sh + Φ_se (সহায়ক ফ্লাক্স)।
- ডিফারেনশিয়াল: Φ_total = Φ_sh - Φ_se (বিরোধী ফ্লাক্স, আর্ক ওয়েল্ডিংয়ে ব্যবহৃত)।

৪. লং শান্ট বনাম শর্ট শান্ট:
- লং শান্ট: শান্ট ফিল্ড আর্মেচার ও সিরিজ ফিল্ড উভয়ের সমান্তরালে থাকে।
- শর্ট শান্ট: শান্ট ফিল্ড কেবলমাত্র আর্মেচারের সমান্তরালে থাকে।`
  },
  formulas: [
    {
      id: 'f-shunt-gen-eq',
      symbol: 'I_a',
      expression: 'I_a = I_L + \\frac{V}{R_{sh}}',
      title: {
        en: 'Shunt Generator Armature Current',
        hi: 'शंट जनरेटर आर्मेचर धारा',
        bn: 'শান্ট জেনারেটর আর্মেচার কারেন্ট'
      },
      description: {
        en: 'Total armature current equals load current plus shunt field excitation current.',
        hi: 'कुल आर्मेचर धारा लोड धारा तथा शंट फील्ड धारा के योग के बराबर होती है।',
        bn: 'মোট আর্মেচার কারেন্ট হলো লোড কারেন্ট ও শান্ট ফিল্ড কারেন্টের যোগফল।'
      }
    },
    {
      id: 'f-shunt-gen-emf',
      symbol: 'E_g(shunt)',
      expression: 'E_g = V + I_a \\cdot R_a + V_{brush}',
      title: {
        en: 'Shunt Generator Generated EMF',
        hi: 'शंट जनरेटर उत्पन्न EMF',
        bn: 'শান্ট জেনারেটরের উৎপন্ন EMF'
      },
      description: {
        en: 'Generated internal EMF in a shunt generator balancing terminal voltage, armature drop, and brush drops.',
        hi: 'शंट जनरेटर में आंतरिक EMF जो टर्मिनल वोल्टेज, आर्मेचर ड्रॉप और ब्रश ड्रॉप को संतुलित करता है।',
        bn: 'শান্ট জেনারেটরের অভ্যন্তরীণ EMF যা টার্মিনাল ভোল্টেজ, আর্মেচার ড্রপ ও ব্রাশ ড্রপ পূরণ করে।'
      }
    },
    {
      id: 'f-series-gen-emf',
      symbol: 'E_g(series)',
      expression: 'E_g = V + I_a \\cdot (R_a + R_{se}) + V_{brush}',
      title: {
        en: 'Series Generator Generated EMF',
        hi: 'सीरीज जनरेटर उत्पन्न EMF',
        bn: 'সিরিজ জেনারেটরের উৎপন্ন EMF'
      },
      description: {
        en: 'Generated EMF in a series generator where armature current flows through both armature and series field windings.',
        hi: 'सीरीज जनरेटर में उत्पन्न EMF जहाँ आर्मेचर धारा आर्मेचर एवं सीरीज फील्ड दोनों से होकर बहती है।',
        bn: 'সিরিজ জেনারেটরে উৎপন্ন EMF যেখানে আর্মেচার কারেন্ট আর্মেচার ও সিরিজ ফিল্ড উভয়ের মধ্য দিয়ে প্রবাহিত হয়।'
      }
    },
    {
      id: 'f-long-shunt-emf',
      symbol: 'E_g(long)',
      expression: 'E_g = V + I_a \\cdot (R_a + R_{se}) + V_{brush}, \\quad I_a = I_L + \\frac{V}{R_{sh}}',
      title: {
        en: 'Long-Shunt Compound Generator Equation',
        hi: 'लॉन्ग-शंट कंपाउंड जनरेटर समीकरण',
        bn: 'লং-শান্ট কম্পাউন্ড জেনারেটর সমীকরণ'
      },
      description: {
        en: 'Long-shunt configuration where shunt field is placed across both armature and series coils.',
        hi: 'लॉन्ग-शंट व्यवस्था जिसमें शंट फील्ड आर्मेचर और सीरीज फील्ड दोनों के सिरों पर जुड़ी होती है।',
        bn: 'লং-শান্ট সংযোগ যেখানে শান্ট ফিল্ড আর্মেচার ও সিরিজ কয়েল উভয়ের প্রান্তে যুক্ত থাকে।'
      }
    },
    {
      id: 'f-short-shunt-emf',
      symbol: 'E_g(short)',
      expression: 'E_g = V + I_L \\cdot R_{se} + I_a \\cdot R_a + V_{brush}, \\quad I_a = I_L + \\frac{V + I_L \\cdot R_{se}}{R_{sh}}',
      title: {
        en: 'Short-Shunt Compound Generator Equation',
        hi: 'शॉर्ट-शंट कंपाउंड जनरेटर समीकरण',
        bn: 'শর্ট-শান্ট কম্পাউন্ড জেনারেটর সমীকরণ'
      },
      description: {
        en: 'Short-shunt configuration where shunt field connects directly across armature terminals.',
        hi: 'शॉर्ट-शंट व्यवस्था जिसमें शंट फील्ड सीधे केवल आर्मेचर टर्मिनलों पर जुड़ी होती है।',
        bn: 'শর্ট-শান্ট সংযোগ যেখানে শান্ট ফিল্ড সরাসরি কেবল আর্মেচারের দুই প্রান্তে যুক্ত থাকে।'
      }
    }
  ],
  sections: [
    {
      id: 'sec-separately-excited',
      title: {
        en: '1. Separately Excited DC Generators',
        hi: '1. सेपरेटली एक्साइटेड (पृथक उत्तेजित) डीसी जनरेटर',
        bn: '১. সেপারেটলি এক্সাইটেড (পৃথক উত্তেজিত) ডিসি জেনারেটর'
      },
      content: {
        en: 'In a separately excited generator, the magnetic field is created by field coils connected to an independent external direct-current source (such as a storage battery or external DC power supply). Because the field circuit is electrically isolated from the armature circuit, variations in load current or terminal voltage have zero direct effect on the excitation flux. The field current is easily controlled over a wide range using a field rheostat. These machines are utilized in precision speed control test benches (Ward-Leonard system) and laboratories where stable, wide-range adjustable output voltages are essential.',
        hi: 'सेपरेटली एक्साइटेड जनरेटर में फील्ड वाइंडिंग को एक स्वतंत्र बाहरी डीसी स्रोत (बैटरी या रेक्टिफायर) द्वारा करंट दिया जाता है। चूंकि फील्ड सर्किट आर्मेचर सर्किट से पूरी तरह अलग होता है, लोड करंट या टर्मिनल वोल्टेज में बदलाव से फील्ड फ्लक्स पर कोई सीधा प्रभाव नहीं पड़ता। फील्ड धारा को रियोस्टेट द्वारा आसानी से नियंत्रित किया जा सकता है। यह वॉर्ड-लियोनार्ड स्पीड कंट्रोल और प्रयोगशाला परीक्षणों में अत्यधिक उपयोगी है।',
        bn: 'সেপারেটলি এক্সাইটেড জেনারেটরে ফিল্ড কয়েল একটি স্বাধীন বহিরাগত ডিসি উৎস (ব্যাটারি বা ডিসি সরবরাহ) দ্বারা চালিত হয়। ফিল্ড সার্কিট আর্মেচার থেকে সম্পূর্ণ আলাদা থাকায় লোড কারেন্টের পরিবর্তন ফিল্ড ফ্লাক্সকে প্রভাবিত করে না। ফিল্ড রিওস্ট্যাট দিয়ে ফিল্ড কারেন্ট সহজে নিয়ন্ত্রণ করা যায়। এটি ওয়ার্ড-লিওনার্ড স্পিড কন্ট্রোল এবং গবেষণাগারের পরীক্ষায় ব্যবহৃত হয়।'
      },
      schematicId: 'dc-generator-types',
      keyEquations: ['I_f = \\frac{V_f}{R_f}', 'I_a = I_L', 'E_g = V + I_a \\cdot R_a + V_{brush}']
    },
    {
      id: 'sec-self-excited-shunt-series',
      title: {
        en: '2. Self-Excited Shunt & Series Topologies',
        hi: '2. सेल्फ-एक्साइटेड शंट एवं सीरीज टोपोलॉजी',
        bn: '২. সেলফ-এক্সাইটেড শান্ট ও সিরিজ টপোলজি'
      },
      content: {
        en: 'Self-excited generators produce their own field current from the armature output. In a Shunt Generator, the field winding is connected in parallel with the armature; it has high resistance (hundreds of turns of thin wire) so it diverts only a small fraction (1-3%) of total current from the load. In a Series Generator, the field winding is in series with the armature; it has low resistance (few turns of thick wire) and carries full load current, causing terminal voltage to rise as load increases. Series generators are applied as transmission line voltage boosters to offset feeder line drops.',
        hi: 'सेल्फ-एक्साइटेड जनरेटर आर्मेचर से ही अपनी फील्ड धारा प्राप्त करते हैं। शंट जनरेटर में फील्ड वाइंडिंग आर्मेचर के समानांतर होती है; इसका प्रतिरोध अधिक होता है (पतले तार के कई टर्न), जिससे यह लोड से केवल 1-3% धारा लेती है। सीरीज जनरेटर में फील्ड वाइंडिंग श्रेणी में होती है; इसका प्रतिरोध कम होता है (मोटे तार के कम टर्न) और इसमें से पूरी लोड धारा बहती है। सीरीज जनरेटर फीडर लाइन में वोल्टेज बूस्टर के रूप में कार्य करते हैं।',
        bn: 'সেলফ-এক্সাইটেড জেনারেটর নিজস্ব আর্মেচার থেকে ফিল্ড কারেন্ট সংগ্রহ করে। শান্ট জেনারেটরে ফিল্ড ওয়াইন্ডিং আর্মেচারের সমান্তরালে থাকে এবং এর রোধ অনেক বেশি হওয়ায় এটি খুব কম কারেন্ট (১-৩%) গ্রহণ করে। সিরিজ জেনারেটরে ফিল্ড ওয়াইন্ডিং আর্মেচারের সাথে সিরিজে থাকে এবং এর রোধ খুব কম হওয়ায় এতে সম্পূর্ণ লোড কারেন্ট প্রবাহিত হয়। এটি ফিডার লাইনের ভোল্টেজ ড্রপ পূরণে বুস্টার হিসেবে ব্যবহৃত হয়।'
      },
      keyEquations: ['I_{sh} = \\frac{V}{R_{sh}}', 'I_a = I_L + I_{sh}', 'E_g = V + I_a \\cdot R_a', 'E_{g(se)} = V + I_a(R_a + R_{se})']
    },
    {
      id: 'sec-compound-generators',
      title: {
        en: '3. Cumulative & Differential Compound Generators',
        hi: '3. संचयी एवं विभेदी यौगिक (कंपाउंड) जनरेटर',
        bn: '৩. কিউমুলেটিভ ও ডিফারেনশিয়াল কম্পাউন্ড জেনারেটর'
      },
      content: {
        en: 'Compound generators feature both shunt and series field windings on every pole shoe. In Cumulative Compound machines, the series field MMF aids the shunt field MMF, boosting the flux as load rises. By adjusting the series turns, the generator can be Over-compounded (terminal voltage rises with load to overcome long feeder drops), Flat/Level-compounded (constant voltage from zero to full load), or Under-compounded. In Differential Compound machines, the series field MMF opposes the shunt field; a heavy load causes the flux and voltage to plunge steeply, providing inherent short-circuit protection ideal for electric arc welding.',
        hi: 'कंपाउंड जनरेटर में प्रत्येक पोल पर शंट और सीरीज दोनों फील्ड वाइंडिंग होती हैं। संचयी यौगिक (Cumulative Compound) में सीरीज फील्ड शंट फील्ड की मदद करती है, जिससे लोड बढ़ने पर फ्लक्स बढ़ता है। इसे ओवर-कंपाउंड (लंबी लाइनों के लिए), फ्लैट-कंपाउंड (स्थिर वोल्टेज), या अंडर-कंपाउंड बनाया जा सकता है। विभेदी यौगिक (Differential Compound) में सीरीज फील्ड शंट फील्ड का विरोध करती है, जिससे लोड बढ़ने पर वोल्टेज तेजी से गिरता है; यह इलेक्ट्रिक आर्क वेल्डिंग के लिए उत्तम है।',
        bn: 'কম্পাউন্ড জেনারেটরে প্রতিটি পোলে শান্ট ও সিরিজ উভয় ফিল্ড কয়েল থাকে। কিউমুলেটিভ কম্পাউন্ডে সিরিজ ফিল্ড শান্ট ফিল্ডকে সহায়তা করে, ফলে লোড বাড়লে ফ্লাক্স বৃদ্ধি পায়। একে ওভার-কম্পাউন্ড (দূরবর্তী লোডের জন্য), ফ্ল্যাট-কম্পাউন্ড (ধ্রুব ভোল্টেজ) বা আন্ডার-কম্পাউন্ড করা যায়। ডিফারেনশিয়াল কম্পাউন্ডে সিরিজ ফিল্ড শান্ট ফিল্ডের বিপরীতমুখী হওয়ায় লোড বাড়লে ভোল্টেজ দ্রুত হ্রাস পায়, যা বৈদ্যুতিক আর্ক ওয়েল্ডিংয়ে অপরিহার্য।'
      },
      keyEquations: ['\\Phi_{total(cum)} = \\Phi_{sh} + \\Phi_{se}', '\\Phi_{total(diff)} = \\Phi_{sh} - \\Phi_{se}']
    }
  ],
  diagrams: [
    {
      id: 'diag-dc-generator-types',
      title: {
        en: 'DC Generator Classification & Circuit Schematics',
        hi: 'डीसी जनरेटर वर्गीकरण एवं परिपथ आरेख',
        bn: 'ডিসি জেনারেটর শ্রেণিবিন্যাস ও সার্কিট ডায়াগ্রাম'
      },
      caption: {
        en: 'Separately excited, shunt, series, long-shunt compound, and short-shunt compound DC generator topologies with branch currents.',
        hi: 'सेपरेटली एक्साइटेड, शंट, सीरीज, लॉन्ग-शंट एवं शॉर्ट-शंट कंपाउंड डीसी जनरेटर परिपथ टोपोलॉजी।',
        bn: 'সেপারেটলি এক্সাইটেড, শান্ট, সিরিজ, লং-শান্ট ও শর্ট-শান্ট কম্পাউন্ড ডিসি জেনারেটরের সার্কিট টপোলজি।'
      },
      svgType: 'dc-generator-types'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-dc-gen-types-1',
      problem: {
        en: 'A 25 kW, 250 V DC shunt generator has an armature resistance of 0.05 Ω and a shunt field resistance of 125 Ω. Calculate: (a) Load current at rated output, (b) Shunt field current, (c) Armature current, and (d) Generated EMF at rated load (assume 1 V brush contact drop per brush).',
        hi: 'एक 25 kW, 250 V डीसी शंट जनरेटर का आर्मेचर प्रतिरोध 0.05 Ω और शंट फील्ड प्रतिरोध 125 Ω है। ज्ञात कीजिए: (a) रेटेड लोड धारा, (b) शंट फील्ड धारा, (c) आर्मेचर धारा, एवं (d) उत्पन्न EMF (प्रति ब्रश 1 V ड्रॉप मानें)।',
        bn: 'একটি ২৫ kW, ২৫০ V ডিসি শান্ট জেনারেটরের আর্মেচার রোধ ০.০৫ Ω এবং শান্ট ফিল্ড রোধ ১২৫ Ω। নির্ণয় করো: (a) রেটেড লোড কারেন্ট, (b) শান্ট ফিল্ড কারেন্ট, (c) আর্মেচার কারেন্ট, এবং (d) রেটেড লোডে উৎপন্ন EMF (প্রতি ব্রাশে ১ V ড্রপ ধরে)।'
      },
      givenValues: {
        'Rated Power (P_out)': '25 kW = 25000 W',
        'Terminal Voltage (V)': '250 V',
        'Armature Resistance (R_a)': '0.05 Ω',
        'Shunt Field Resistance (R_sh)': '125 Ω',
        'Brush Contact Drop': '2 × 1 = 2 V'
      },
      solution: {
        en: `1. Calculate Full-Load Output Current (I_L):
I_L = P_out / V = 25000 W / 250 V = 100 A.

2. Calculate Shunt Field Current (I_sh):
I_sh = V / R_sh = 250 V / 125 Ω = 2 A.

3. Calculate Total Armature Current (I_a):
I_a = I_L + I_sh = 100 A + 2 A = 102 A.

4. Calculate Generated EMF (E_g):
E_g = V + (I_a · R_a) + V_brush
E_g = 250 + (102 · 0.05) + 2
E_g = 250 + 5.1 + 2 = 257.1 Volts.

5. Power Developed in Armature:
P_dev = E_g · I_a = 257.1 V × 102 A = 26,224.2 W = 26.22 kW.`,
        hi: `1. लोड धारा (I_L):
I_L = 25000 / 250 = 100 A।

2. शंट फील्ड धारा (I_sh):
I_sh = 250 / 125 = 2 A।

3. आर्मेचर धारा (I_a):
I_a = 100 + 2 = 102 A।

4. उत्पन्न EMF (E_g):
E_g = 250 + (102 × 0.05) + 2 = 257.1 V।`,
        bn: `১. লোড কারেন্ট (I_L):
I_L = ২৫০০০ / ২৫০ = ১০০ A।

২. শান্ট ফিল্ড কারেন্ট (I_sh):
I_sh = ২৫০ / ১২৫ = ২ A।

৩. আর্মেচার কারেন্ট (I_a):
I_a = ১০০ + ২ = ১০২ A।

৪. উৎপন্ন EMF (E_g):
E_g = ২৫০ + (১০২ × ০.০৫) + ২ = ২৫৭.১ V।`
      },
      finalAnswer: {
        en: '(a) I_L = 100 A, (b) I_sh = 2 A, (c) I_a = 102 A, (d) E_g = 257.1 V',
        hi: '(a) I_L = 100 A, (b) I_sh = 2 A, (c) I_a = 102 A, (d) E_g = 257.1 V',
        bn: '(a) I_L = ১০০ A, (b) I_sh = ২ A, (c) I_a = ১০২ A, (d) E_g = ২৫৭.১ V'
      }
    },
    {
      id: 'ex-dc-gen-types-2',
      problem: {
        en: 'A short-shunt compound DC generator delivers a load current of 60 A at 220 V. The resistances of the armature, series field, and shunt field windings are 0.08 Ω, 0.04 Ω, and 110 Ω respectively. Calculate: (a) Voltage across armature and shunt field, (b) Armature current, and (c) Generated EMF (neglect brush drop).',
        hi: 'एक शॉर्ट-शंट कंपाउंड डीसी जनरेटर 220 V पर 60 A की लोड धारा की आपूर्ति करता है। आर्मेचर, सीरीज फील्ड और शंट फील्ड वाइंडिंग के प्रतिरोध क्रमशः 0.08 Ω, 0.04 Ω और 110 Ω हैं। ज्ञात कीजिए: (a) आर्मेचर एवं शंट फील्ड पर वोल्टेज, (b) आर्मेचर धारा, तथा (c) उत्पन्न EMF (ब्रश ड्रॉप नगण्य मानें)।',
        bn: 'একটি শর্ট-শান্ট কম্পাউন্ড ডিসি জেনারেটর ২২০ V এ ৬০ A লোড কারেন্ট সরবরাহ করে। আর্মেচার, সিরিজ ফিল্ড এবং শান্ট ফিল্ড ওয়াইন্ডিংয়ের রোধ যথাক্রমে ০.০৮ Ω, ০.০৪ Ω এবং ১১০ Ω। নির্ণয় করো: (a) আর্মেচার ও শান্ট ফিল্ডের ভোল্টেজ, (b) আর্মেচার কারেন্ট, এবং (c) উৎপন্ন EMF (ব্রাশ ড্রপ অগ্রাহ্য করো)।'
      },
      givenValues: {
        'Load Current (I_L)': '60 A',
        'Terminal Voltage (V)': '220 V',
        'Armature Resistance (R_a)': '0.08 Ω',
        'Series Resistance (R_se)': '0.04 Ω',
        'Shunt Resistance (R_sh)': '110 Ω'
      },
      solution: {
        en: `1. In Short-Shunt, Series Field Current = Load Current:
I_se = I_L = 60 A.

2. Voltage drop across Series Field Winding:
V_se = I_se · R_se = 60 A × 0.04 Ω = 2.4 V.

3. Voltage across Armature & Shunt Field (V_arm):
V_arm = V + V_se = 220 V + 2.4 V = 222.4 V.

4. Shunt Field Current (I_sh):
I_sh = V_arm / R_sh = 222.4 V / 110 Ω = 2.022 A.

5. Total Armature Current (I_a):
I_a = I_L + I_sh = 60 A + 2.022 A = 62.022 A.

6. Generated EMF (E_g):
E_g = V_arm + (I_a · R_a)
E_g = 222.4 + (62.022 · 0.08) = 222.4 + 4.96 = 227.36 Volts.`,
        hi: `1. सीरीज फील्ड धारा = लोड धारा = 60 A।
2. सीरीज फील्ड में वोल्टेज ड्रॉप: V_se = 60 × 0.04 = 2.4 V।
3. आर्मेचर टर्मिनल पर वोल्टेज: V_arm = 220 + 2.4 = 222.4 V।
4. शंट फील्ड धारा: I_sh = 222.4 / 110 = 2.022 A।
5. कुल आर्मेचर धारा: I_a = 60 + 2.022 = 62.022 A।
6. उत्पन्न EMF: E_g = 222.4 + (62.022 × 0.08) = 227.36 V।`,
        bn: `১. সিরিজ ফিল্ড কারেন্ট = ৬০ A।
২. সিরিজ ফিল্ড ভোল্টেজ ড্রপ = ৬০ × ০.০৪ = ২.৪ V।
৩. আর্মেচার প্রান্তের ভোল্টেজ: V_arm = ২২০ + ২.৪ = ২২২.৪ V।
৪. শান্ট ফিল্ড কারেন্ট: I_sh = ২২২.৪ / ১১০ = ২.০২২ A।
৫. আর্মেচার কারেন্ট: I_a = ৬০ + ২.০২২ = ৬২.০২২ A।
৬. উৎপন্ন EMF: E_g = ২২২.৪ + (৬২.০২২ × ০.০৮) = ২২৭.৩৬ V।`
      },
      finalAnswer: {
        en: '(a) V_arm = 222.4 V, (b) I_a = 62.02 A, (c) E_g = 227.36 V',
        hi: '(a) V_arm = 222.4 V, (b) I_a = 62.02 A, (c) E_g = 227.36 V',
        bn: '(a) V_arm = ২২২.৪ V, (b) I_a = ৬২.০২ A, (c) E_g = ২২৭.৩৬ V'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Separately Excited: Used in marine electric propulsion systems, variable-speed rolling mill test dynamos, and high-accuracy laboratory dynamometers.',
      'Shunt Generators: Standard for constant-voltage battery bank charging, commercial building backup lighting, and exciters for large AC turbo-alternators.',
      'Series Generators: Deployed as DC line voltage boosters to inject voltage compensating for feeder IR drop along long railway electrified tracks.',
      'Cumulative Compound (Over-Compounded): Ideal for long-distance DC industrial distribution grids and heavy steel rolling mills to supply constant voltage at remote load centers.',
      'Differential Compound Generators: Universally adopted in manual and robotic electric arc welding power supplies to guarantee safe droop under dead-short arc strikes.'
    ],
    hi: [
      'सेपरेटली एक्साइटेड: रोलिंग मिल टेस्ट बेंच, प्रयोगशाला डायनेमोमीटर एवं सटीक गति नियंत्रण में।',
      'शंट जनरेटर: स्थिर वोल्टेज बैटरी चार्जिंग, व्यावसायिक इमारतों की बैकअप लाइटिंग एवं अल्टरनेटर एक्साइटर में।',
      'सीरीज जनरेटर: लंबी रेलवे ट्रैक्शन लाइनों में वोल्टेज ड्रॉप की भरपाई करने वाले बूस्टर के रूप में।',
      'संचयी यौगिक (ओवर-कंपाउंड): दूरस्थ औद्योगिक प्लांटों में दूरी के बावजूद स्थिर टर्मिनल वोल्टेज देने हेतु।',
      'विभेदी यौगिक (डिफरेंशियल): इलेक्ट्रिक आर्क वेल्डिंग में वेल्डिंग करंट को सुरक्षित सीमा में बनाए रखने हेतु।'
    ],
    bn: [
      'সেপারেটলি এক্সাইটেড: রোলিং মিল টেস্ট বেঞ্চ ও ল্যাবরেটরি ডায়নামোমিটারে নির্ভুল ভোল্টেজ নিয়ন্ত্রণে।',
      'শান্ট জেনারেটর: স্থির ভোল্টেজে ব্যাটারি চার্জিং ও সিনক্রোনাস অল্টারনেটরের এক্সাইটেশনে।',
      'সিরিজ জেনারেটর: রেলওয়ে ট্র্যাকশন লাইনে ভোল্টেজ ড্রপ পুষিয়ে নিতে ডিসি লাইনে বুস্টার হিসেবে।',
      'কিউমুলেটিভ কম্পাউন্ড: দূরবর্তী শিল্প কারখানায় ফিডার লাইনের ড্রপ মিটিয়ে ধ্রুব ভোল্টেজ সরবরাহে।',
      'ডিফারেনশিয়াল কম্পাউন্ড: ইলেকট্রিক আর্ক ওয়েল্ডিং মেশিনে শর্ট-সার্কিট প্রটেকশন ও ড্রপিং বৈশিষ্ট্যের জন্য।'
    ]
  },
  importantPoints: {
    en: [
      'Separately excited generators require an external DC source; their field current is independent of terminal voltage.',
      'Shunt field winding has high resistance (many turns of thin wire); series field winding has very low resistance (few turns of thick wire).',
      'In a Shunt generator: Ia = I_L + I_sh and Eg = V + Ia·Ra.',
      'In a Series generator: Ia = I_se = I_L and Eg = V + Ia·(Ra + Rse).',
      'Cumulative compound generators boost flux with load (Φ = Φ_sh + Φ_se); differential compound generators reduce flux with load (Φ = Φ_sh - Φ_se).',
      'In Long-Shunt, the shunt field spans both armature and series coils; in Short-Shunt, it spans the armature only.'
    ],
    hi: [
      'सेपरेटली एक्साइटेड जनरेटर को बाहरी डीसी स्रोत चाहिए; इसकी फील्ड धारा टर्मिनल वोल्टेज से स्वतंत्र होती है।',
      'शंट फील्ड वाइंडिंग का प्रतिरोध उच्च (पतले तार के कई टर्न) और सीरीज वाइंडिंग का निम्न (मोटे तार के कम टर्न) होता है।',
      'शंट जनरेटर में: Ia = I_L + I_sh तथा Eg = V + Ia·Ra।',
      'सीरीज जनरेटर में: Ia = I_se = I_L तथा Eg = V + Ia·(Ra + Rse)।',
      'संचयी यौगिक में फ्लक्स बढ़ता है (Φ = Φ_sh + Φ_se); विभेदी यौगिक में फ्लक्स घटता है (Φ = Φ_sh - Φ_se)।',
      'लॉन्ग-शंट में शंट फील्ड आर्मेचर और सीरीज दोनों पर जुड़ती है; शॉर्ट-शंट में केवल आर्मेचर पर जुड़ती है।'
    ],
    bn: [
      'সেপারেটলি এক্সাইটেড জেনারেটরের ফিল্ড কারেন্ট বহিরাগত ডিসি উৎস থেকে আসে এবং তা টার্মিনাল ভোল্টেজ নিরপেক্ষ।',
      'শান্ট ফিল্ড কয়েলের রোধ উচ্চ (পাতলা তারের বহু প্যাঁচ) এবং সিরিজ ফিল্ড কয়েলের রোধ খুব কম (মোটা তারের কম প্যাঁচ)।',
      'শান্ট জেনারেটরে: Ia = I_L + I_sh এবং Eg = V + Ia·Ra।',
      'সিরিজ জেনারেটরে: Ia = I_se = I_L এবং Eg = V + Ia·(Ra + Rse)।',
      'কিউমুলেটিভ কম্পাউন্ডে মোট ফ্লাক্স বাড়ে (Φ = Φ_sh + Φ_se); ডিফারেনশিয়াল কম্পাউন্ডে ফ্লাক্স কমে (Φ = Φ_sh - Φ_se)।',
      'লং-শান্টে শান্ট ফিল্ড আর্মেচার ও সিরিজ উভয়ের সমান্তরালে থাকে; শর্ট-শান্টে কেবল আর্মেচারের সমান্তরালে থাকে।'
    ]
  },
  commonMistakes: {
    en: [
      'Assuming shunt field current is in series with load current. (In a generator, Ia = I_L + I_sh; armature must supply BOTH load and field).',
      'Confusing Long-Shunt and Short-Shunt formulas for shunt field current. In short-shunt, I_sh = (V + I_L·Rse)/R_sh, NOT V/R_sh.',
      'Mixing up Cumulative and Differential compounding. Cumulative = aiding fields; Differential = opposing fields.',
      'Forgetting that in a series generator, no-load voltage is near zero because field flux depends entirely on load current.',
      'Interchanging the wire gauges: Shunt coils use THIN wire (high R), Series coils use THICK wire (low R).'
    ],
    hi: [
      'आर्मेचर धारा में शंट धारा को घटाना। जनरेटर में आर्मेचर लोड और शंट दोनों को करंट देता है (Ia = I_L + I_sh)।',
      'शॉर्ट-शंट में I_sh = V / R_sh लिख देना। सही सूत्र I_sh = (V + I_L·Rse) / R_sh है।',
      'संचयी (Cumulative) और विभेदी (Differential) यौगिक में भ्रमित होना।',
      'यह भूल जाना कि सीरीज जनरेटर में नो-लोड पर वोल्टेज लगभग शून्य (केवल अवशिष्ट) होता है।',
      'वाइंडिंग के तारों को उलटना: शंट में पतला तार और सीरीज में मोटा तार प्रयुक्त होता है।'
    ],
    bn: [
      'জেনারেটরে আর্মেচার কারেন্ট বের করতে শান্ট কারেন্ট বিয়োগ করা। সঠিক হলো Ia = I_L + I_sh।',
      'শর্ট-শান্টে ভুল করে I_sh = V / R_sh লেখা। সঠিক হলো I_sh = (V + I_L·Rse) / R_sh।',
      'কিউমুলেটিভ ও ডিফারেনশিয়াল কম্পাউন্ডিংয়ের মধ্যে গুলিয়ে ফেলা।',
      'সিরিজ জেনারেটরে নো-লোড অবস্থায় ভোল্টেজ প্রায় শূন্য থাকে তা ভুলে যাওয়া।',
      'তারের আকার উল্টো ভাবা: শান্টে পাতলা তার এবং সিরিজে মোটা তার ব্যবহৃত হয়।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-dc-gen-types-1',
      question: {
        en: 'Which type of DC generator has its field winding connected in series with the armature and carries full load current?',
        hi: 'किस प्रकार के डीसी जनरेटर की फील्ड वाइंडिंग आर्मेचर के श्रेणी में जुड़ी होती है और पूरी लोड धारा वहन करती है?',
        bn: 'কোন ধরণের ডিসি জেনারেটরের ফিল্ড ওয়াইন্ডিং আর্মেচারের সাথে সিরিজে যুক্ত থাকে এবং সম্পূর্ণ লোড কারেন্ট বহন করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'DC Shunt Generator', hi: 'डीसी शंट जनरेटर', bn: 'ডিসি শান্ট জেনারেটর' } },
        { id: 'opt-2', text: { en: 'DC Series Generator', hi: 'डीसी सीरीज जनरेटर', bn: 'ডিসি সিরিজ জেনারেটর' } },
        { id: 'opt-3', text: { en: 'Separately Excited Generator', hi: 'सेपरेटली एक्साइटेड जनरेटर', bn: 'সেপারেটলি এক্সাইটেড জেনারেটর' } },
        { id: 'opt-4', text: { en: 'Differential Compound Generator', hi: 'डिफरेंशियल कंपाउंड जनरेटर', bn: 'ডিফারেনশিয়াল কম্পাউন্ড জেনারেটর' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'In a DC Series generator, the field coils are wired directly in series with the armature, so I_a = I_se = I_L.',
        hi: 'डीसी सीरीज जनरेटर में फील्ड कॉइल आर्मेचर के श्रेणी में जुड़ी होती है, अतः I_a = I_se = I_L।',
        bn: 'ডিসি সিরিজ জেনারেটরে ফিল্ড কয়েল সরাসরি আর্মেচারের সাথে সিরিজে থাকে, তাই I_a = I_se = I_L।'
      }
    },
    {
      id: 'mcq-dc-gen-types-2',
      question: {
        en: 'For electric arc welding applications, which DC generator is preferred due to its drooping voltage characteristic?',
        hi: 'इलेक्ट्रिक आर्क वेल्डिंग के लिए अपनी ड्रॉपिंग वोल्टेज विशेषता के कारण किस डीसी जनरेटर को प्राथमिकता दी जाती है?',
        bn: 'বৈদ্যুতিক আর্ক ওয়েল্ডিংয়ে ড্রপিং ভোল্টেজ বৈশিষ্ট্যের কারণে কোন ডিসি জেনারেটর ব্যবহৃত হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Over-Compounded Generator', hi: 'ओवर-कंपाउंडेड जनरेटर', bn: 'ওভার-কম্পাউন্ডেড জেনারেটর' } },
        { id: 'opt-2', text: { en: 'Flat-Compounded Generator', hi: 'फ्लैट-कंपाउंडेड जनरेटर', bn: 'ফ্ল্যাট-কম্পাউন্ডেড জেনারেটর' } },
        { id: 'opt-3', text: { en: 'Differential Compound Generator', hi: 'डिफरेंशियल कंपाउंड जनरेटर', bn: 'ডিফারেনশিয়াল কম্পাউন্ড জেনারেটর' } },
        { id: 'opt-4', text: { en: 'DC Series Generator', hi: 'डीसी सीरीज जनरेटर', bn: 'ডিসি সিরিজ জেনারেটর' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'Differential compound generators feature series field flux opposing shunt flux, causing terminal voltage to drop sharply when load current surges, preventing welding equipment burnout.',
        hi: 'विभेदी यौगिक (Differential Compound) जनरेटर में सीरीज फ्लक्स शंट फ्लक्स का विरोध करता है, जिससे करंट बढ़ने पर वोल्टेज तेजी से गिरता है और वेल्डिंग उपकरण सुरक्षित रहता है।',
        bn: 'ডিফারেনশিয়াল কম্পাউন্ড জেনারেটরে সিরিজ ফ্লাক্স শান্ট ফ্লাক্সের বিরোধিতা করায় লোড বাড়লে ভোল্টেজ দ্রুত কমে যায়, যা আর্ক ওয়েল্ডিংয়ে অতি প্রয়োজনীয়।'
      }
    },
    {
      id: 'mcq-dc-gen-types-3',
      question: {
        en: 'In a short-shunt compound DC generator, the shunt field winding is connected:',
        hi: 'एक शॉर्ट-शंट कंपाउंड डीसी जनरेटर में शंट फील्ड वाइंडिंग जुड़ी होती है:',
        bn: 'একটি শর্ট-শান্ট কম্পাউন্ড ডিসি জেনারেটরে শান্ট ফিল্ড ওয়াইন্ডিং যুক্ত থাকে:'
      },
      options: [
        { id: 'opt-1', text: { en: 'Directly across the armature terminals only', hi: 'केवल आर्मेचर टर्मिनलों के समानांतर', bn: 'সরাসরি কেবল আর্মেচার প্রান্তের সমান্তরালে' } },
        { id: 'opt-2', text: { en: 'Across both armature and series field winding', hi: 'आर्मेचर एवं सीरीज फील्ड दोनों के समानांतर', bn: 'আর্মেচার ও সিরিজ ফিল্ড উভয়ের সমান্তরালে' } },
        { id: 'opt-3', text: { en: 'In series with the load', hi: 'लोड के श्रेणी क्रम में', bn: 'লোডের সাথে সিরিজে' } },
        { id: 'opt-4', text: { en: 'To an external battery source', hi: 'बाहरी बैटरी स्रोत से', bn: 'বহিরাগত ব্যাটারি উৎসে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'In a Short-Shunt generator, the shunt field is wired across the armature terminals only, whereas in Long-Shunt it spans both armature and series coils.',
        hi: 'शॉर्ट-शंट जनरेटर में शंट फील्ड केवल आर्मेचर के समानांतर जुड़ी होती है, जबकि लॉन्ग-शंट में यह आर्मेचर और सीरीज फील्ड दोनों के सिरों पर होती है।',
        bn: 'শর্ট-শান্ট জেনারেটরে শান্ট ফিল্ড কেবলমাত্র আর্মেচারের সমান্তরালে থাকে, আর লং-শান্টে আর্মেচার ও সিরিজ উভয়ের সমান্তরালে থাকে।'
      }
    },
    {
      id: 'mcq-dc-gen-types-4',
      question: {
        en: 'Why is the shunt field winding constructed with many turns of thin copper wire?',
        hi: 'शंट फील्ड वाइंडिंग को पतले तार के अधिक टर्न के साथ क्यों बनाया जाता है?',
        bn: 'শান্ট ফিল্ড ওয়াইন্ডিং কেন পাতলা তারের বহু প্যাঁচ দিয়ে তৈরি করা হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'To provide high electrical resistance and minimize field current loss', hi: 'उच्च प्रतिरोध प्रदान करने एवं फील्ड करंट हानि को न्यूनतम रखने हेतु', bn: 'উচ্চ রোধ প্রদান এবং ফিল্ড কারেন্ট অপচয় সর্বনিম্ন রাখতে' } },
        { id: 'opt-2', text: { en: 'To carry the entire heavy load current', hi: 'पूरी भारी लोड धारा वहन करने हेतु', bn: 'সম্পূর্ণ লোড কারেন্ট বহন করার জন্য' } },
        { id: 'opt-3', text: { en: 'To reduce the machine weight to zero', hi: 'मशीन के वजन को शून्य करने हेतु', bn: 'মেশিনের ওজন শূন্য করার জন্য' } },
        { id: 'opt-4', text: { en: 'To prevent residual magnetism build-up', hi: 'अवशिष्ट चुंबकत्व बनने से रोकने हेतु', bn: 'অবশিষ্ট চুম্বকত্ব রোধ করার জন্য' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'High resistance ensures that only 1% to 3% of the total rated current is diverted from the load into the shunt field circuit.',
        hi: 'उच्च प्रतिरोध यह सुनिश्चित करता है कि कुल धारा का केवल 1% से 3% भाग ही फील्ड सर्किट में जाए और अधिकांश धारा लोड को मिले।',
        bn: 'উচ্চ রোধ নিশ্চিত করে যে মোট কারেন্টের মাত্র ১% থেকে ৩% ফিল্ডে যাবে এবং বাকি সিংহভাগ বিদ্যুৎ লোডে সরবরাহ হবে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-dc-gen-types-1',
      question: {
        en: 'A 4-pole long-shunt compound DC generator delivers 100 A at 230 V. Armature resistance is 0.03 Ω, series field resistance is 0.02 Ω, and shunt field resistance is 115 Ω. Calculate: (a) Shunt field current, (b) Armature current, and (c) Total generated EMF (assume 1 V brush contact drop per brush).',
        hi: 'एक 4-पोल लॉन्ग-शंट कंपाउंड डीसी जनरेटर 230 V पर 100 A धारा की आपूर्ति करता है। आर्मेचर प्रतिरोध 0.03 Ω, सीरीज फील्ड प्रतिरोध 0.02 Ω तथा शंट फील्ड प्रतिरोध 115 Ω है। ज्ञात कीजिए: (a) शंट फील्ड धारा, (b) आर्मेचर धारा, तथा (c) कुल उत्पन्न EMF (प्रति ब्रश 1 V ड्रॉप मानें)।',
        bn: 'একটি ৪-পোল লং-শান্ট কম্পাউন্ড ডিসি জেনারেটর ২৩০ V এ ১০০ A কারেন্ট সরবরাহ করে। আর্মেচার রোধ ০.০৩ Ω, সিরিজ ফিল্ড রোধ ০.০২ Ω এবং শান্ট ফিল্ড রোধ ১১৫ Ω। নির্ণয় করো: (a) শান্ট ফিল্ড কারেন্ট, (b) আর্মেচার কারেন্ট, এবং (c) মোট উৎপন্ন EMF (প্রতি ব্রাশে ১ V ড্রপ ধরে)।'
      },
      hint: {
        en: 'In Long-Shunt, I_sh = V / R_sh, I_a = I_L + I_sh, and Eg = V + I_a · (R_a + R_se) + V_brush.',
        hi: 'लॉन्ग-शंट में I_sh = V / R_sh, I_a = I_L + I_sh, तथा Eg = V + I_a · (R_a + R_se) + V_brush का प्रयोग करें।',
        bn: 'লং-শান্টে I_sh = V / R_sh, I_a = I_L + I_sh, এবং Eg = V + I_a · (R_a + R_se) + V_brush ব্যবহার করো।'
      },
      answerKey: {
        en: '1. I_sh = 230 / 115 = 2 A. 2. I_a = 100 + 2 = 102 A. 3. Eg = 230 + 102 × (0.03 + 0.02) + 2 = 230 + 5.1 + 2 = 237.1 V.',
        hi: '1. I_sh = 230 / 115 = 2 A. 2. I_a = 100 + 2 = 102 A. 3. Eg = 230 + 102 × (0.05) + 2 = 237.1 V.',
        bn: '১. I_sh = ২৩০ / ১১৫ = ২ A। ২. I_a = ১০০ + ২ = ১০২ A। ৩. Eg = ২৩০ + ১০২ × (০.০৫) + ২ = ২৩৭.১ V।'
      }
    },
    {
      id: 'pq-dc-gen-types-2',
      question: {
        en: 'Compare the terminal voltage characteristics of Over-compounded, Flat-compounded, and Under-compounded DC generators.',
        hi: 'ओवर-कंपाउंडेड, फ्लैट-कंपाउंडेड एवं अंडर-कंपाउंडेड डीसी जनरेटरों की टर्मिनल वोल्टेज विशेषताओं की तुलना कीजिए।',
        bn: 'ওভার-কম্পাউন্ডেড, ফ্ল্যাট-কম্পাউন্ডেড ও আন্ডার-কম্পাউন্ডেড ডিসি জেনারেটরের টার্মিনাল ভোল্টেজ বৈশিষ্ট্যের তুলনা করো।'
      },
      hint: {
        en: 'Compare Full-Load terminal voltage (V_FL) with No-Load voltage (V_NL) and discuss the role of series field turn adjustments.',
        hi: 'फुल-लोड टर्मिनल वोल्टेज (V_FL) की तुलना नो-लोड वोल्टेज (V_NL) से करें।',
        bn: 'ফুল-লোড টার্মিনাল ভোল্টেজ (V_FL) এর সাথে নো-লোড ভোল্টেজ (V_NL) তুলনা করো।'
      },
      answerKey: {
        en: 'In Over-compounded generators, series turns produce excess flux so full-load voltage exceeds no-load voltage (V_FL > V_NL), compensating for feeder resistance drops over long distances. In Flat-compounded generators, series turns exactly compensate for internal armature resistance drops so V_FL = V_NL. In Under-compounded generators, series turns are insufficient to fully offset internal drops, resulting in V_FL < V_NL.',
        hi: 'ओवर-कंपाउंडेड में सीरीज टर्न अधिक होते हैं जिससे फुल-लोड वोल्टेज नो-लोड से अधिक हो जाता है (V_FL > V_NL), जो लंबी लाइन के ड्रॉप की भरपाई करता है। फ्लैट-कंपाउंडेड में आंतरिक ड्रॉप की सटीक भरपाई होती है जिससे V_FL = V_NL रहता है। अंडर-कंपाउंडेड में भरपाई आंशिक होती है जिससे V_FL < V_NL रहता है।',
        bn: 'ওভার-কম্পাউন্ডেডে সিরিজ প্যাঁচ বেশি থাকায় ফুল-লোড ভোল্টেজ নো-লোড অপেক্ষা বেশি হয় (V_FL > V_NL), যা দূরবর্তী লাইনের ড্রপ দূর করে। ফ্ল্যাট-কম্পাউন্ডেডে সিরিজ ড্রপ নিখুঁতভাবে পূরণ হওয়ায় V_FL = V_NL থাকে। আন্ডার-কম্পাউন্ডেডে সিরিজ প্যাঁচ কম থাকায় V_FL < V_NL হয়।'
      }
    }
  ]
};
