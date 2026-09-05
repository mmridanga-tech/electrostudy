import { Lesson } from '../types';

export const LESSON_TRANSFORMER_PROTECTION: Lesson = {
  id: 'lsn-ch17-transformer-protection-inrush',
  topicId: 'tp-ch17-transformer-protection-inrush',
  chapterId: 'ch-advanced-power-system-protection',
  order: 5,
  title: {
    en: 'Transformer Protection and Inrush Phenomena',
    hi: 'ट्रांसफार्मर सुरक्षा एवं इनरश परिघटना',
    bn: 'ট্রান্সফরমার সুরক্ষা ও ইনরাশ পরিঘটনা'
  },
  description: {
    en: 'Specialized protection engineering for large power transformers: magnetizing inrush current waveform physics, second harmonic restraint and cross-blocking (ANSI 87T), overexcitation and fifth harmonic blocking (ANSI 24 V/Hz), vector group phase-shift compensation (Dyn11/Yd1), zero-sequence current filtering, and mechanical gas/pressure protection (Buchholz relay, PRD).',
    hi: 'बड़े पावर ट्रांसफार्मर के लिए विशेष सुरक्षा इंजीनियरिंग: मैग्नेटाइजिंग इनरश करंट तरंग भौतिकी, द्वितीय हार्मोनिक संयम और क्रॉस-ब्लॉकिंग (ANSI 87T), ओवर-एक्साइटेशन और पांचवां हार्मोनिक ब्लॉकिंग (ANSI 24 V/Hz), वेक्टर समूह फेज-शिफ्ट क्षतिपूर्ति (Dyn11), शून्य-अनुक्रम फ़िल्टरिंग, और यांत्रिक सुरक्षा (बुखोल्ज़ रिले, PRD)।',
    bn: 'বৃহৎ পাওয়ার ট্রান্সফরমারের বিশেষ সুরক্ষা ইঞ্জিনিয়ারিং: ম্যাগনেটাইজিং ইনরাশ কারেন্ট তরঙ্গের পদার্থবিজ্ঞান, ২য় হারমোনিক রেস্ট্রেইন্ট ও ক্রস-ব্লকিং (ANSI 87T), ওভার-এক্সাইটেশন ও ৫ম হারমোনিক ব্লকিং (ANSI 24 V/Hz), ভেক্টর গ্রুপ ফেজ শিফট ক্ষতিপূরণ (Dyn11), জিরো-সিকোয়েন্স কারেন্ট ফিল্টারিং এবং মেকানিক্যাল গ্যাস/চাপ সুরক্ষা (বুখহোলজ রিলে, PRD)।'
  },
  estimatedMinutes: 55,
  easyExplanation: {
    en: 'When a large power transformer is switched on to an energized grid with no load connected to its secondary, it draws a massive, violent surge of current from the supply—often 8 to 12 times its normal full-load rating! This is called "magnetizing inrush current". To an ordinary differential relay, this incoming surge looks like a catastrophic internal short circuit because current enters the primary winding but nothing leaves the secondary! If the relay tripped, transformers could never be energized. Fortunately, inrush current has a unique chemical signature: it is heavily distorted and packed with a huge amount of second harmonic current (100 Hz in a 50 Hz grid). Modern transformer relays use digital signal processing to measure this 2nd harmonic: if the 2nd harmonic exceeds 15%, the relay recognizes the surge as harmless inrush and blocks the trip command!',
    hi: 'जब किसी बड़े पावर ट्रांसफार्मर को बिना किसी लोड के पहली बार ग्रिड से जोड़ा जाता है, तो वह सामान्य से 8 से 12 गुना अधिक करंट का एक विशाल झटका खींचता है! इसे "मैग्नेटाइजिंग इनरश करंट" कहते हैं। एक साधारण डिफरेंशियल रिले के लिए, यह करंट एक भयानक आंतरिक शॉर्ट सर्किट जैसा दिखता है क्योंकि करंट प्राइमरी में तो घुसता है लेकिन सेकेंडरी से बाहर नहीं निकलता! यदि रिले ट्रिप कर जाए, तो ट्रांसफार्मर कभी चालू ही नहीं हो पाएगा। सौभाग्य से, इनरश करंट में 2nd हार्मोनिक (100 Hz) की भारी मात्रा होती है। आधुनिक रिले इस 2nd हार्मोनिक को मापते हैं: यदि 2nd हार्मोनिक 15% से अधिक है, तो रिले समझ जाता है कि यह सामान्य इनरश है और ट्रिपिंग को रोक देता है!',
    bn: 'যখন কোনো লোড ছাড়াই একটি বিশাল পাওয়ার ট্রান্সফরমারকে গ্রিডে অন করা হয়, তখন এটি রেটেড কারেন্টের ৮ থেকে ১২ গুণ তীব্র কারেন্টের ধাক্কা টানে! একে "ম্যাগনেটাইজিং ইনরাশ কারেন্ট" বলে। সাধারণ ডিফারেনশিয়াল রিলের দৃষ্টিতে এটি মারাত্মক অভ্যন্তরীণ শর্ট সার্কিট মনে হয়, কারণ প্রাইমারিতে বিপুল কারেন্ট ঢুকলেও সেকেন্ডারিতে কোনো কারেন্ট বের হয় না! সৌভাগ্যবশত, ইনরাশ কারেন্টের একটি বিশেষ বৈশিষ্ট্য রয়েছে: এতে প্রচুর পরিমাণে ২য় হারমোনিক (১০০ Hz) বিদ্যুৎ থাকে। আধুনিক রিলে এই ২য় হারমোনিক শনাক্ত করে (সাধারণত ১৫% এর বেশি হলে) ট্রিপ কমান্ড ব্লক করে দেয়!'
  },
  detailedExplanation: {
    en: 'Transformer protection (ANSI 87T) requires addressing several distinct electrical and physical phenomena:\n\n1. Physics of Magnetizing Inrush:\nWhen energized at voltage zero with residual flux (Phi_rem) in the core, Faraday’s law forces the core flux to reach nearly double the peak steady-state flux (Phi_max):\nPhi_peak = 2 * Phi_max + Phi_rem\nBecause transformers are designed to operate close to the knee-point of the B-H curve (~1.7 Tesla), this doubled flux drives the core into extreme saturation. The core’s relative permeability collapses to that of air (mu_r ≈ 1), drawing unconstrained magnetizing currents up to 8–12 times rated current.\nKey characteristics of inrush:\n• Severe unipolar DC offset and peaked, non-sinusoidal waveforms.\n• Massive Second Harmonic Content (typically 20% to 60% of fundamental during the first few cycles).\n\n2. Second Harmonic Restraint & Cross-Blocking:\nDigital differential relays compute the Discrete Fourier Transform (DFT) of the differential current. The ratio of 2nd harmonic to fundamental current is monitored:\nRatio = I_2nd / I_fundamental\nIf Ratio > Setting (typically 15% to 20%), the differential trip is restrained/blocked. In three-phase transformers, saturation in one phase core leg may induce low harmonics in an adjacent phase. Modern relays utilize "Cross-Blocking", where 2nd harmonic detected in any single phase automatically blocks differential tripping across all three phases for a preset duration (e.g., 100 ms).\n\n3. Overexcitation & Fifth Harmonic Blocking (ANSI 24):\nOverexcitation occurs when the ratio of voltage to frequency (V/Hz) exceeds 1.05 to 1.10 p.u. (e.g., generator load rejection or severe grid overvoltage). Excess flux spills out of the laminated core into structural steel bolts and tank walls, causing extreme thermal damage within seconds. Overexcitation produces odd harmonics dominated by the Fifth Harmonic (5th harmonic, 250 Hz in 50 Hz grids). Relays use 5th harmonic restraint (threshold ~25% to 35%) to prevent false differential tripping while separate Volts/Hertz elements (24) handle controlled tripping.\n\n4. Vector Group & Zero-Sequence Compensation:\nIn Delta-Wye (e.g., Dyn11) transformers, a 30° phase shift exists between primary and secondary line currents. Furthermore, external earth faults on the grounded wye side produce zero-sequence currents that circulate in the delta winding, appearing as false differential current. Numerical relays eliminate this mathematically in software: applying matrix phase rotation and subtracting zero-sequence current (I0 = (Ia + Ib + Ic)/3) from the wye side.\n\n5. Mechanical Tank Protection:\n• Buchholz Relay: Gas-actuated relay located in the pipe between tank and conservator. Detects slow oil decomposition (alarm for minor arcing) and sudden high-velocity oil surge (>1.0 m/s, trips instantly for catastrophic winding flashovers).\n• Pressure Relief Device (PRD): Spring-loaded mechanical diaphragm that vents explosive pressure rises within 2 milliseconds.',
    hi: 'ट्रांसफार्मर सुरक्षा के प्रमुख तकनीकी बिंदु:\n1. इनरश करंट की भौतिकी: वोल्टेज शून्य पर स्विच करने पर कोर फ्लक्स 2*Phi_max + Phi_rem तक पहुंच जाता है, जिससे कोर संतृप्त हो जाता है और 8-12 गुना इनरश करंट बहता है। इसमें भारी मात्रा में 2nd हार्मोनिक होता है।\n2. द्वितीय हार्मोनिक ब्लॉकिंग: यदि I_2nd / I_1 > 15% है, तो रिले ट्रिपिंग को रोकता है। क्रॉस-ब्लॉकिंग किसी भी एक फेज में हार्मोनिक मिलने पर तीनों फेजों को ब्लॉक करती है।\n3. ओवर-एक्साइटेशन (24 V/Hz) और 5th हार्मोनिक: V/f अनुपात बढ़ने पर कोर से फ्लक्स बाहर निकलता है और 5वां हार्मोनिक उत्पन्न होता है।\n4. वेक्टर ग्रुप और फेज़ शिफ्ट: Dyn11 में 30° का फेज़ शिफ्ट होता है और जीरो-सीक्वेंस करंट को सॉफ्टवेयर द्वारा घटाया जाता है।\n5. मैकेनिकल सुरक्षा: बुखोल्ज़ रिले धीमी गैस बनने पर अलार्म और तेल के तेज बहाव (>1 m/s) पर तुरंत ट्रिप देता है।',
    bn: 'ট্রান্সফরমার সুরক্ষার গুরুত্বপূর্ণ বিষয়সমূহ:\n১. ইনরাশ কারেন্টের মেকানিজম: শূন্য ভোল্টেজে ট্রান্সফরমার অন করলে অবশিষ্ট ফ্লাক্সের কারণে পিক ফ্লাক্স দ্বিগুণ ছাড়িয়ে যায়। ফলে কোর স্যাচুরেট হয়ে ৮-১২ গুণ ইনরাশ কারেন্ট টানে যার মধ্যে প্রচুর ২য় হারমোনিক থাকে।\n২. ২য় হারমোনিক ব্লকিং: I_2nd / I_1 অনুপাত ১৫% এর বেশি হলে রিলে ট্রিপ আটকে দেয়। ক্রস-ব্লকিং একটি ফেজে হারমোনিক পেলেই ৩টি ফেজকেই ব্লকিং সুরক্ষা দেয়।\n৩. ওভার-এক্সাইটেশন (V/Hz) ও ৫ম হারমোনিক: ভোল্টেজ বৃদ্ধি বা ফ্রিকোয়েন্সি কমলে ৫ম হারমোনিক তৈরি হয় যা রিলে ফিল্টার করে শনাক্ত করে।\n৪. ভেক্টর গ্রুপ ক্ষতিপূরণ: Dyn11 ট্রান্সফরমারে ৩০ ডিগ্রি ফেজ শিফট থাকে এবং ডেল্টা-স্টারে জিরো সিকোয়েন্স ফিল্টারিং জরুরি।\n৫. মেকানিক্যাল সুরক্ষা: বুখহোলজ রিলে ধীরগতির গ্যাসে অ্যালার্ম দেয় এবং তীব্র তেলের ধাক্কায় তাৎক্ষণিক ট্রিপ করে।'
  },
  formulas: [
    {
      id: 'f-ch17-inrush-flux',
      symbol: '\\Phi_{peak}',
      expression: '\\Phi_{peak} = 2\\cdot \\Phi_{max} + \\Phi_{rem}',
      title: {
        en: 'Peak Inrush Core Flux Formula',
        hi: 'चरम इनरश कोर फ्लक्स सूत्र',
        bn: 'পিক ইনরাশ কোর ফ্লাক্স সূত্র'
      },
      description: {
        en: 'Calculates the theoretical maximum magnetic core flux achieved when energizing a transformer at voltage zero with residual remanence.',
        hi: 'अवशिष्ट चुंबकत्व के साथ वोल्टेज शून्य पर ट्रांसफार्मर चालू करने पर अधिकतम चुंबकीय फ्लक्स की गणना करता है।',
        bn: 'রেসিডুয়াল ফ্লাক্স সহ শূন্য ভোল্টেজে ট্রান্সফরমার চালু করার সময় কোরের সর্বোচ্চ সম্ভাব্য ফ্লাক্স নির্ণয় করে।'
      },
      variables: [
        { symbol: '\\Phi_{peak}', name: { en: 'Peak prospective core flux (Wb)', hi: 'चरम संभावित कोर फ्लक्स (Wb)', bn: 'সর্বোচ্চ সম্ভাব্য কোর ফ্লাক্স (Wb)' } },
        { symbol: '\\Phi_{max}', name: { en: 'Normal steady-state peak operating flux (Wb)', hi: 'सामान्य स्थिर-अवस्था ऑपरेटिंग फ्लक्स (Wb)', bn: 'স্বাভাবিক অপারেটিং ফ্লাক্স (Wb)' } },
        { symbol: '\\Phi_{rem}', name: { en: 'Residual core remanence flux from previous shutdown (Wb)', hi: 'कोर में शेष अवशिष्ट फ्लक्स (Wb)', bn: 'কোরের অবশিষ্ট রেসিডুয়াল ফ্লাক্স (Wb)' } }
      ]
    },
    {
      id: 'f-ch17-second-harmonic-ratio',
      symbol: 'R_{2nd}',
      expression: 'R_{2nd} = \\frac{I_{diff,2nd}}{I_{diff,1st}} \\times 100\\%',
      title: {
        en: 'Second Harmonic Inrush Restraint Ratio',
        hi: 'द्वितीय हार्मोनिक इनरश संयम अनुपात',
        bn: '২য় হারমোনিক ইনরাশ রেস্ট্রেইন্ট অনুপাত'
      },
      description: {
        en: 'Criterion used by numerical relays to discriminate magnetizing inrush from genuine internal electrical short circuits.',
        hi: 'वास्तविक आंतरिक शॉर्ट सर्किट से मैग्नेटाइजिंग इनरश को अलग करने के लिए संख्यात्मक रिले द्वारा उपयोग की जाने वाली कसौटी।',
        bn: 'প্রকৃত অভ্যন্তরীণ ফল্ট থেকে ম্যাগনেটাইজিং ইনরাশ আলাদা করতে নিউমেরিক্যাল রিলেতে ব্যবহৃত অনুপাত।'
      },
      variables: [
        { symbol: 'R_{2nd}', name: { en: 'Second harmonic percentage ratio (%)', hi: 'द्वितीय हार्मोनिक प्रतिशत (%)', bn: '২য় হারমোনিক শতকরা অনুপাত (%)' } },
        { symbol: 'I_{diff,2nd}', name: { en: 'Second harmonic RMS component (100 Hz) in differential current', hi: 'डिफरेंशियल करंट में द्वितीय हार्मोनिक RMS घटक', bn: 'ডিফারেনশিয়াল কারেন্টে ২য় হারমোনিক RMS মান' } },
        { symbol: 'I_{diff,1st}', name: { en: 'Fundamental RMS component (50 Hz) in differential current', hi: 'डिफरेंशियल करंट में 50 Hz मौलिक घटक', bn: 'ডিফারেনশিয়াল কারেন্টে মূল ৫০ Hz উপাদান' } }
      ]
    }
  ],
  keyPoints: [
    {
      en: 'Magnetizing inrush occurs upon transformer energization, reaching 8 to 12 times rated current due to iron core saturation.',
      hi: 'ट्रांसफार्मर चालू करने पर मैग्नेटाइजिंग इनरश होता है, जो लोहे के कोर के संतृप्त होने के कारण रेटेड करंट के 8 से 12 गुना तक पहुंच जाता है।',
      bn: 'আয়রন কোর স্যাচুরেশনের কারণে ট্রান্সফরমার চালুর সময় রেটেড কারেন্টের ৮ থেকে ১২ গুণ ইনরাশ কারেন্ট প্রবাহিত হতে পারে।'
    },
    {
      en: 'Second harmonic restraint (threshold 15% to 20%) prevents false differential tripping during magnetizing inrush.',
      hi: 'द्वितीय हार्मोनिक संयम (थ्रेशोल्ड 15% से 20%) इनरश के दौरान गलत डिफरेंशियल ट्रिपिंग को रोकता है।',
      bn: '২য় হারমোনিক রেস্ট্রেইন্ট (১৫-২০% থ্রেশহোল্ড) ইনরাশ কারেন্টের সময় অযাচিত ডিফারেনশিয়াল ট্রিপিং প্রতিরোধ করে।'
    },
    {
      en: 'Fifth harmonic blocking (threshold ~30%) restrains differential tripping during transformer overexcitation (high V/f).',
      hi: 'पांचवां हार्मोनिक ब्लॉकिंग (थ्रेशोल्ड ~30%) ट्रांसफार्मर ओवर-एक्साइटेशन (उच्च V/f) के दौरान डिफरेंशियल ट्रिपिंग को रोकता है।',
      bn: '৫ম হারমোনিক ব্লকিং ট্রান্সফরমারের ওভার-এক্সাইটেশন (উচ্চ V/f) অবস্থায় ডিফারেনশিয়াল রিলের ভুল ট্রিপ বন্ধ রাখে।'
    },
    {
      en: 'Buchholz relays provide mechanical unit protection against incipient winding faults (gas accumulation) and severe flashovers (oil surge >1 m/s).',
      hi: 'बुखोल्ज़ रिले धीमी गैस बनने पर प्रारंभिक फॉल्ट और तेज तेल बहाव पर गंभीर आंतरिक फॉल्ट के खिलाफ सुरक्षा प्रदान करते हैं।',
      bn: 'বুখহোলজ রিলে ক্ষুদ্র গ্যাস জমার মাধ্যমে প্রাথমিক ত্রুটি এবং তেলের তীব্র স্রোতের (>১ m/s) মাধ্যমে মারাত্মক অভ্যন্তরীণ শর্ট সার্কিট শনাক্ত করে।'
    }
  ],
  schematics: [
    {
      id: 'sch-ch17-l05-01',
      title: {
        en: 'Transformer Inrush Waveform, Harmonic Spectrum & Buchholz Relay Topology',
        hi: 'ट्रांसफार्मर इनरश तरंग, हार्मोनिक स्पेक्ट्रम एवं बुखोल्ज़ रिले संरचना',
        bn: 'ট্রান্সফরমার ইনরাশ তরঙ্গরূপ, হারমোনিক স্পেকট্রাম ও বুখহোলজ রিলে গঠন'
      },
      content: {
        en: 'The schematic illustrates: (1) The highly asymmetrical, unipolar inrush current waveform and its Fourier frequency breakdown displaying the prominent 2nd harmonic (100 Hz) peak, (2) Digital differential relay harmonic restraint logic block diagram, and (3) The mechanical Buchholz relay installed in the oil pipe inclined at 3° to 7° toward the conservator, showing the slow gas alarm float and the surge trip flap.',
        hi: 'यह आरेख दिखाता है: (1) अत्यधिक असममित इनरश करंट तरंग और इसका 2nd हार्मोनिक स्पेक्ट्रम, (2) डिजिटल रिले हार्मोनिक संयम ब्लॉक आरेख, और (3) कंजर्वेटर की ओर 3° से 7° के झुकाव पर पाइप में स्थापित मैकेनिकल बुखोल्ज़ रिले।',
        bn: 'এই স্কিম্যাটিকটি প্রদর্শন করে: (১) অপ্রতিসম ইনরাশ কারেন্ট তরঙ্গ ও ১০০ Hz ২য় হারমোনিক পিক, (২) ডিজিটাল ডিফারেনশিয়াল রিলের হারমোনিক ব্লকিং লজিক এবং (৩) ৩°-৭° কোণে তেল পাইপে স্থাপিত বুখহোলজ রিলের ফ্লোট ও সার্জ ফ্ল্যাপের কার্যপ্রণালী।'
      },
      schematicId: 'sch-ch17-transformer-protection-inrush'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch17-l05-01',
      problem: {
        en: 'A 50 MVA, 132/33 kV Dyn11 transformer is energized from the 132 kV side. The numerical differential relay measures a differential fundamental current of I1 = 8.5 A secondary and a second harmonic current of I2 = 2.2 A secondary. The relay 2nd harmonic restraint setting is configured at 18%. (a) Calculate the percentage 2nd harmonic ratio, (b) Determine if the relay trips or blocks, and (c) If a genuine fault develops where fundamental current surges to 45 A and second harmonic drops to 1.5 A, determine the new relay decision.',
        hi: 'एक 50 MVA, 132/33 kV Dyn11 ट्रांसफार्मर 132 kV साइड से चालू किया गया है। रिले फंडामेंटल करंट I1 = 8.5 A और 2nd हार्मोनिक करंट I2 = 2.2 A मापता है। रिले की 2nd हार्मोनिक सेटिंग 18% है। (a) प्रतिशत 2nd हार्मोनिक की गणना करें, (b) क्या रिले ट्रिप करेगा या ब्लॉक करेगा? (c) वास्तविक फॉल्ट पर यदि I1 = 45 A और I2 = 1.5 A हो जाता है, तो नया निर्णय क्या होगा?',
        bn: 'একটি ৫০ MVA, ১৩২/৩৩ kV Dyn11 ট্রান্সফরমার ১৩২ kV সাইড থেকে অন করা হলো। নিউমেরিক্যাল রিলে ফান্ডামেন্টাল কারেন্ট I1 = ৮.৫ A এবং ২য় হারমোনিক কারেন্ট I2 = ২.২ A পরিমাপ করে। রিলের ২য় হারমোনিক ব্লকিং সেটিং ১৮%। (a) ২য় হারমোনিকের শতকরা অনুপাত নির্ণয় করুন, (b) রিলে ট্রিপ করবে নাকি ব্লক করবে? (c) একটি অভ্যন্তরীণ ফল্টে যদি I1 = ৪৫ A এবং I2 = ১.৫ A হয়, তবে রিলের সিদ্ধান্ত কী হবে?'
      },
      solution: {
        en: 'Given:\n• Energization state: I1 = 8.5 A, I2 = 2.2 A\n• Threshold setting: R_threshold = 18%\n\nStep 1: Calculate 2nd harmonic ratio during energization:\nR_2nd = (I2 / I1) * 100% = (2.2 A / 8.5 A) * 100% = 25.88%\n\nStep 2: Compare with setting:\nSince R_2nd (25.88%) > R_threshold (18%), the relay identifies the condition as magnetizing inrush.\nConclusion: The relay BLOCKS the differential trip command (security preserved).\n\nStep 3: Fault state analysis:\n• I1 = 45.0 A, I2 = 1.5 A\nR_2nd_fault = (1.5 A / 45.0 A) * 100% = 3.33%\nSince R_2nd_fault (3.33%) < R_threshold (18%), harmonic blocking is lifted.\nConclusion: The relay immediately TRIPS the transformer circuit breakers within 20 milliseconds!',
        hi: 'चरण 1: इनरश अनुपात = (2.2 / 8.5) * 100% = 25.88%\nचरण 2: चूंकि 25.88% > 18% है, रिले ट्रिपिंग को ब्लॉक कर देता है (कोई ट्रिप नहीं)।\nचरण 3: फॉल्ट स्थिति: अनुपात = (1.5 / 45.0) * 100% = 3.33% < 18%।\nब्लॉकिंग हट जाती है और रिले तुरंत ट्रांसफार्मर को ट्रिप कर देता है!',
        bn: 'ধাপ ১: ইনরাশ অবস্থায় হারমোনিক অনুপাত = (২.২ / ৮.৫) * ১০০% = ২৫.৮৮%\nধাপ ২: যেহেতু ২৫.৮৮% > ১৮%, তাই রিলে ট্রিপ নির্দেশ ব্লক করে স্থিতিশীল থাকে।\nধাপ ৩: অভ্যন্তরীণ ফল্ট অবস্থায়: অনুপাত = (১.৫ / ৪৫.০) * ১০০% = ৩.৩৩% < ১৮%।\nহারমোনিক ব্লকিং নিষ্ক্রিয় হয়ে যায় এবং রিলে তাৎক্ষণিকভাবে ট্রান্সফরমার ট্রিপ করায়!'
      },
      givenValues: { 'I1_inrush': '8.5 A', 'I2_inrush': '2.2 A', 'Setting': '18%', 'I1_fault': '45 A', 'I2_fault': '1.5 A' },
      finalAnswer: {
        en: 'Energization: R_2nd = 25.88% (BLOCKED); Fault: R_2nd = 3.33% (TRIPS)',
        hi: 'चालू करने पर: 25.88% (ब्लॉक्ड); फॉल्ट पर: 3.33% (तुरंत ट्रिप)',
        bn: 'চালুর সময়: ২৫.৮৮% (ব্লকড); ফল্ট হলে: ৩.৩৩% (তাৎক্ষণিক ট্রিপ)'
      }
    },
    {
      id: 'ex-ch17-l05-02',
      problem: {
        en: 'A 400 kV generator-transformer operating at rated voltage undergoes sudden full-load rejection. The terminal voltage surges to 1.15 p.u. while the turbine overspeeds, dropping system frequency to 48.5 Hz. Calculate the Volts-per-Hertz ratio (V/Hz in p.u.) and determine if the transformer is in danger of core overexcitation (permissible continuous limit is 1.05 p.u.).',
        hi: 'एक 400 kV ट्रांसफार्मर पर अचानक पूर्ण लोड रिजेक्शन होता है। टर्मिनल वोल्टेज 1.15 p.u. तक बढ़ जाता है जबकि आवृत्ति 48.5 Hz (सामान्य 50 Hz) तक गिर जाती है। V/Hz अनुपात की गणना करें और बताएं कि क्या ट्रांसफार्मर ओवर-एक्साइटेशन के खतरे में है (सीमा 1.05 p.u.)।',
        bn: 'একটি ৪০০ kV ট্রান্সফরমার পূর্ণ লোড বর্জনের শিকার হয়। এর ফলে ভোল্টেজ বেড়ে ১.১৫ p.u. হয় এবং ফ্রিকোয়েন্সি কমে ৪৮.৫ Hz এ নামে (বেস ৫০ Hz)। V/Hz অনুপাত নির্ণয় করুন এবং ট্রান্সফরমারটি ওভার-এক্সাইটেশনের ঝুঁকিতে আছে কিনা তা যাচাই করুন (অনুমোদিত সীমা ১.০৫ p.u.)।'
      },
      solution: {
        en: 'Step 1: Calculate per-unit frequency (f_pu):\nBase frequency = 50.0 Hz\nf_pu = 48.5 Hz / 50.0 Hz = 0.970 p.u.\n\nStep 2: Calculate Volts-per-Hertz ratio (V/Hz_pu):\n(V/Hz)_pu = V_pu / f_pu = 1.15 / 0.970 = 1.1856 p.u.\n\nStep 3: Compare with standard core saturation threshold:\nContinuous permissible limit = 1.05 p.u.\nExcess overexcitation = 1.1856 - 1.05 = +0.1356 p.u. (+18.56% over nominal flux density).\n\nConclusion: The core is severely overexcited. The V/Hz (ANSI 24) inverse-time protection must trip the excitation breaker within 45 to 60 seconds to prevent core bolt overheating and insulation charring.',
        hi: 'चरण 1: f_pu = 48.5 / 50.0 = 0.970 p.u.\nचरण 2: (V/f)_pu = 1.15 / 0.970 = 1.1856 p.u.\nचरण 3: चूंकि 1.1856 p.u. > 1.05 p.u. है, ट्रांसफार्मर गंभीर रूप से ओवर-एक्साइटेड है। ANSI 24 रिले को कोर क्षति को रोकने के लिए निश्चित समय के भीतर ट्रिप करना चाहिए।',
        bn: 'ধাপ ১: f_pu = ৪৮.৫ / ৫০.০ = ০.৯৭০ p.u.\nধাপ ২: (V/f)_pu = ১.১৫ / ০.৯৭০ = ১.১৮৫৬ p.u.\nধাপ ৩: যেহেতু ১.১৮৫৬ p.u. অনুমোদিত সীমা ১.০৫ p.u. এর চেয়ে বেশি, তাই কোরটি অতিরিক্ত স্যাচুরেশনের মুখে পড়েছে। ANSI 24 রিলে দিয়ে নির্দিষ্ট সময়ের মধ্যে ব্রেকার ট্রিপ করা জরুরি।'
      },
      givenValues: { 'V_pu': '1.15', 'f': '48.5 Hz', 'f_base': '50 Hz', 'Limit': '1.05 p.u.' },
      finalAnswer: {
        en: '(V/Hz)_pu = 1.186 p.u. (>1.05 limit); Severe Overexcitation, ANSI 24 must trip',
        hi: '(V/Hz)_pu = 1.186 p.u. (>1.05 सीमा); गंभीर ओवर-एक्साइटेशन, ANSI 24 ट्रिप करेगा',
        bn: '(V/Hz)_pu = ১.১৮৬ p.u. (>১.০৫ সীমা); তীব্র ওভার-এক্সাইটেশন, ANSI 24 ট্রিপ প্রয়োজন'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Commissioning 315 MVA and 500 MVA autotransformers on 400 kV and 765 kV national transmission backbones.',
      'Configuring Buchholz alarm and trip contacts to supervisory SCADA and emergency breaker trip coils.',
      'Setting Volts/Hertz (ANSI 24) curves on step-up transformers in thermal and nuclear power generation stations.'
    ],
    hi: [
      '400 kV और 765 kV ट्रांसमिशन लाइनों पर 315 MVA और 500 MVA ऑटो-ट्रांसफार्मर की कमीशनिंग।',
      'SCADA और आपातकालीन ट्रिप कॉइल के साथ बुखोल्ज़ अलार्म और ट्रिप संपर्कों को कॉन्फ़िगर करना।',
      'थर्मल और परमाणु ऊर्जा संयंत्रों में स्टेप-अप ट्रांसफार्मर पर V/Hz (ANSI 24) वक्र सेट करना।'
    ],
    bn: [
      '৪০০ kV ও ৭৬৫ kV জাতীয় গ্রিডে ৩১৫ MVA ও ৫০০ MVA অটো-ট্রান্সফরমার কমিশনিং।',
      'বুখহোলজ রিলের অ্যালার্ম ও ট্রিপ কন্টাক্ট সরাসরি স্কাডা (SCADA) ও মাস্টার ট্রিপ রিলের সাথে যুক্তকরণ।',
      'পারমাণবিক ও তাপবিদ্যুৎ কেন্দ্রে স্টেপ-আপ ট্রান্সফরমারের Volts/Hertz (ANSI 24) সুরক্ষা সেটিং।'
    ]
  },
  commonMistakes: {
    en: [
      'Disabling 2nd harmonic restraint to make the differential relay "faster", which causes the transformer to trip out every time it is energized!',
      'Ignoring vector group phase angle shifts (e.g., Dyn11 30° shift) in relay software, causing immediate tripping on normal balanced load.',
      'Mounting the Buchholz relay in a horizontal pipe without the required 3° to 7° upward inclination toward the conservator, trapping gas pockets away from the float.'
    ],
    hi: [
      'डिफरेंशियल रिले को "तेज" बनाने के लिए 2nd हार्मोनिक ब्लॉकिंग को अक्षम करना, जिससे चालू करते ही ट्रांसफार्मर ट्रिप हो जाता है।',
      'रिले सॉफ्टवेयर में वेक्टर ग्रुप फेज़ शिफ्ट (Dyn11 में 30°) की अनदेखी करना, जिससे सामान्य लोड पर ही ट्रिप हो जाता है।',
      'कंजर्वेटर की ओर 3° से 7° के ऊपर की ओर झुकाव के बिना बुखोल्ज़ रिले को क्षैतिज रूप से स्थापित करना।'
    ],
    bn: [
      'রিলে দ্রুত ট্রিপ করানোর লোভে ২য় হারমোনিক ব্লকিং বন্ধ করে দেওয়া, যার ফলে প্রতিবার অন করলেই ট্রান্সফরমার অযাচিত ট্রিপ করবে।',
      'সফটওয়্যারে ভেক্টর গ্রুপ ফেজ শিফট (যেমন Dyn11 এ ৩০ ডিগ্রি) ক্ষতিপূরণ না করা, যার ফলে স্বাভাবিক লোডেই রিলে ট্রিপ করে।',
      'বুখহোলজ রিলেকে কনজারভেটরের দিকে ৩° থেকে ৭° ঢালু না করে সমান্তরাল পাইপে লাগানো, যার ফলে গ্যাস ফ্লোটে পৌঁছাতে পারে না।'
    ]
  },
  keyTakeaways: {
    en: [
      'Magnetizing inrush is characterized by massive unipolar current with high second harmonic content (100 Hz).',
      'Numerical relays employ second harmonic restraint/cross-blocking to guarantee stability during transformer switching.',
      'Overexcitation (excessive V/Hz) is detected by fifth harmonic analysis and controlled by ANSI 24 Volts-per-Hertz elements.'
    ],
    hi: [
      'मैग्नेटाइजिंग इनरश उच्च द्वितीय हार्मोनिक सामग्री (100 Hz) के साथ एकदिशीय धारा की विशेषता है।',
      'संख्यात्मक रिले ट्रांसफार्मर स्विचिंग के दौरान स्थिरता की गारंटी के लिए द्वितीय हार्मोनिक ब्लॉकिंग का उपयोग करते हैं।',
      'ओवर-एक्साइटेशन (अत्यधिक V/Hz) का पता पांचवें हार्मोनिक द्वारा लगाया जाता है और ANSI 24 रिले द्वारा नियंत्रित किया जाता है।'
    ],
    bn: [
      'ম্যাগনেটাইজিং ইনরাশ কারেন্টে প্রচুর পরিমাণে ১০০ Hz ২য় হারমোনিক উপাদান উপস্থিত থাকে।',
      'নিউমেরিক্যাল রিলে ২য় হারমোনিক ব্লকিং ও ক্রস-ব্লকিংয়ের মাধ্যমে সুইচিংকালে সম্পূর্ণ স্থিতিশীল থাকে।',
      'অতিরিক্ত V/Hz বা ওভার-এক্সাইটেশন ৫ম হারমোনিক বিশ্লেষণের সাহায্যে শনাক্ত হয় এবং ANSI 24 দ্বারা ট্রিপ করানো হয়।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch17-l05-01',
      question: {
        en: 'What unique harmonic component is primarily used by numerical differential relays to restrain false tripping during transformer magnetizing inrush?',
        hi: 'ट्रांसफार्मर मैग्नेटाइजिंग इनरश के दौरान गलत ट्रिपिंग को रोकने के लिए संख्यात्मक डिफरेंशियल रिले द्वारा मुख्य रूप से किस अद्वितीय हार्मोनिक घटक का उपयोग किया जाता है?',
        bn: 'ট্রান্সফরমার ম্যাগনেটাইজিং ইনরাশের সময় অযাচিত ট্রিপিং প্রতিরোধ করতে নিউমেরিক্যাল রিলে প্রধানত কোন হারমোনিক উপাদান ব্যবহার করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Second Harmonic (100 Hz in a 50 Hz system)', hi: 'द्वितीय हार्मोनिक (50 Hz प्रणाली में 100 Hz)', bn: '২য় হারমোনিক (৫০ Hz সিস্টেমে ১০০ Hz)' } },
        { id: 'opt-2', text: { en: 'Third Harmonic (150 Hz)', hi: 'तृतीय हार्मोनिक (150 Hz)', bn: '৩য় হারমোনিক (১৫০ Hz)' } },
        { id: 'opt-3', text: { en: 'Seventh Harmonic (350 Hz)', hi: 'सातवां हार्मोनिक (350 Hz)', bn: '৭ম হারমোনিক (৩৫০ Hz)' } },
        { id: 'opt-4', text: { en: 'Direct current (0 Hz) only', hi: 'केवल डायरेक्ट करंट (0 Hz)', bn: 'কেবল ডিরেক্ট কারেন্ট (০ Hz)' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Magnetizing inrush waveforms are highly asymmetrical and peaked, generating large second harmonic currents (typically 20% to 60% of fundamental). Internal faults contain almost zero 2nd harmonic.',
        hi: 'इनरश तरंग में प्रचुर मात्रा में 2nd हार्मोनिक (100 Hz) होता है, जबकि आंतरिक शॉर्ट सर्किट में 2nd हार्मोनिक लगभग नगण्य होता है।',
        bn: 'ইনরাশ তরঙ্গে প্রচুর পরিমাণে ২য় হারমোনিক (১০০ Hz) থাকে, যা অভ্যন্তরীণ শর্ট সার্কিট ফল্টে প্রায় থাকেই না।'
      }
    },
    {
      id: 'mcq-ch17-l05-02',
      question: {
        en: 'What is the function of "Cross-Blocking" in three-phase transformer differential protection?',
        hi: 'थ्री-फेज ट्रांसफार्मर डिफरेंशियल सुरक्षा में "क्रॉस-ब्लॉकिंग" का क्या कार्य है?',
        bn: 'থ্রি-ফেজ ট্রান্সফরমার ডিফারেনশিয়াল সুরক্ষায় "ক্রস-ব্লকিং" এর কাজ কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'If the second harmonic threshold is exceeded in ANY single phase, differential tripping is blocked across ALL three phases', hi: 'यदि किसी भी एक फेज में 2nd हार्मोनिक थ्रेशोल्ड पार हो जाता है, तो सभी तीनों फेजों में ट्रिपिंग ब्लॉक हो जाती है', bn: 'যেকোনো একটি ফেজে ২য় হারমোনিক নির্ধারিত মাত্রা অতিক্রম করলে ৩টি ফেজেই ডিফারেনশিয়াল ট্রিপিং ব্লক রাখা হয়' } },
        { id: 'opt-2', text: { en: 'To swap phase A and phase C connections during motor starting', hi: 'मोटर स्टार्टिंग के दौरान फेज A और फेज C को बदलना', bn: 'মোটর চালুর সময় ফেজ A ও ফেজ C অদলবদল করা' } },
        { id: 'opt-3', text: { en: 'To trip high-voltage and low-voltage breakers in alternating sequence', hi: 'वैकल्पिक क्रम में उच्च और निम्न वोल्टेज ब्रेकर्स को ट्रिप करना', bn: 'পর্যায়ক্রমে হাই ও লো ভোল্টেজ ব্রেকার ট্রিপ করানো' } },
        { id: 'opt-4', text: { en: 'To block ground fault tripping during thunder storms', hi: 'तूफान के दौरान ग्राउंड फॉल्ट ट्रिपिंग को ब्लॉक करना', bn: 'বজ্রঝড়ের সময় গ্রাউন্ড ফল্ট ট্রিপিং ব্লক করা' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Because transformer core geometry can cause one phase to show less 2nd harmonic than the threshold while adjacent phases are saturated, cross-blocking prevents the low-harmonic phase from spurious tripping.',
        hi: 'कोर ज्यामिति के कारण कभी-कभी एक फेज में कम हार्मोनिक दिखता है। क्रॉस-ब्लॉकिंग यह सुनिश्चित करती है कि कोई भी फेज गलती से ट्रिप न हो।',
        bn: 'কোর জ্যামিতির কারণে কোনো একটি ফেজে ২য় হারমোনিক কম থাকলেও অন্য ফেজের স্যাচুরেশনের তথ্যের ভিত্তিতে ক্রস-ব্লকিং ৩টি ফেজেই ট্রিপ আটকে রাখে।'
      }
    },
    {
      id: 'mcq-ch17-l05-03',
      question: {
        en: 'Overexcitation in a power transformer is primarily caused by which electrical operational condition?',
        hi: 'पावर ट्रांसफार्मर में ओवर-एक्साइटेशन मुख्य रूप से किस विद्युत परिचालन स्थिति के कारण होता है?',
        bn: 'পাওয়ার ট্রান্সফরমারে ওভার-এক্সাইটেশন প্রধানত কোন বৈদ্যুতিক অপারেটিং পরিস্থিতির কারণে ঘটে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'An excessive Volts-per-Hertz (V/Hz) ratio caused by overvoltage or underfrequency', hi: 'ओवरवोल्टेज या कम आवृत्ति के कारण अत्यधिक वोल्ट्स-प्रति-हर्ट्ज़ (V/Hz) अनुपात', bn: 'ওভারভোল্টেজ বা ফ্রিকোয়েন্সি হ্রাসের কারণে অতিরিক্ত ভোল্টস-পার-হার্টজ (V/Hz) অনুপাত' } },
        { id: 'opt-2', text: { en: 'Low ambient temperature in winter', hi: 'सर्दियों में कम परिवेश का तापमान', bn: 'শীতকালে সাবস্টেশনের নিম্ন তাপমাত্রা' } },
        { id: 'opt-3', text: { en: 'High power factor of industrial loads', hi: 'औद्योगिक भार का उच्च पावर फैक्टर', bn: 'শিল্প লোডের উচ্চ পাওয়ার ফ্যাক্টর' } },
        { id: 'opt-4', text: { en: 'Short circuit between secondary phase terminals', hi: 'द्वितीयक फेज टर्मिनलों के बीच शॉर्ट सर्किट', bn: 'সেকেন্ডারি ফেজ টার্মিনালের মধ্যে শর্ট সার্কিট' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Operating flux density is proportional to V/f. When voltage rises or frequency drops (V/f > 1.05 p.u.), the core saturates and flux spills into non-laminated steel parts, creating catastrophic eddy-current overheating.',
        hi: 'कोर फ्लक्स V/f के समानुपाती होता है। वोल्टेज बढ़ने या फ्रीक्वेंसी घटने से ट्रांसफार्मर ओवर-एक्साइट हो जाता है।',
        bn: 'কোর ফ্লাক্স ঘনত্ব সরাসরি V/f এর সমানুপাতিক। অতিরিক্ত ভোল্টেজ বা কম ফ্রিকোয়েন্সিতে কোর উপচে ধাতব বডি মারাত্মক উত্তপ্ত হয়ে ওঠে।'
      }
    },
    {
      id: 'mcq-ch17-l05-04',
      question: {
        en: 'Which harmonic is predominantly produced during transformer overexcitation and is used to restrain or block differential relays?',
        hi: 'ट्रांसफार्मर ओवर-एक्साइटेशन के दौरान मुख्य रूप से कौन सा हार्मोनिक उत्पन्न होता है और इसका उपयोग डिफरेंशियल रिले को रोकने के लिए किया जाता है?',
        bn: 'ট্রান্সফরমার ওভার-এক্সাইটেশনের সময় প্রধানত কোন হারমোনিক তৈরি হয় যা ডিফারেনশিয়াল রিলের ভুল ট্রিপ আটকাতে ব্যবহৃত হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Fifth Harmonic (250 Hz in a 50 Hz grid)', hi: 'पांचवां हार्मोनिक (50 Hz ग्रिड में 250 Hz)', bn: '৫ম হারমোনিক (৫০ Hz গ্রিডে ২৫০ Hz)' } },
        { id: 'opt-2', text: { en: 'Second Harmonic (100 Hz)', hi: 'द्वितीय हार्मोनिक (100 Hz)', bn: '২য় হারমোনিক (১০০ Hz)' } },
        { id: 'opt-3', text: { en: 'Sixteenth Harmonic (800 Hz)', hi: 'सोलहवां हार्मोनिक (800 Hz)', bn: '১৬তম হারমোনিক (৮০০ Hz)' } },
        { id: 'opt-4', text: { en: 'Fundamental only', hi: 'केवल मौलिक', bn: 'কেবল ফান্ডামেন্টাল' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Symmetrical saturation during overexcitation generates strong odd harmonics, dominated by the 5th harmonic. Relays use 5th harmonic blocking (threshold ~30%) to prevent false tripping.',
        hi: 'ओवर-एक्साइटेशन के दौरान विषम हार्मोनिक बनते हैं जिनमें 5वां हार्मोनिक (250 Hz) सबसे प्रमुख होता है।',
        bn: 'ওভার-এক্সাইটেশনের সময় সিমেট্রিক্যাল স্যাচুরেশনে শক্তিশালী বিজোড় হারমোনিক তৈরি হয় যার মধ্যে ৫ম হারমোনিক (২৫০ Hz) প্রধান।'
      }
    },
    {
      id: 'mcq-ch17-l05-05',
      question: {
        en: 'Where is the Buchholz relay physically installed on an oil-immersed power transformer?',
        hi: 'ऑयल-इमर्स्ड पावर ट्रांसफार्मर पर बुखोल्ज़ रिले भौतिक रूप से कहाँ स्थापित किया जाता है?',
        bn: 'তেলপূর্ণ পাওয়ার ট্রান্সফরমারে বুখহোলজ রিলে বাস্তবিকভাবে কোথায় স্থাপন করা হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'In the connecting pipe between the main oil tank and the conservator tank, inclined at 3° to 7°', hi: 'मुख्य तेल टैंक और कंजर्वेटर के बीच जोड़ने वाले पाइप में, 3° से 7° के झुकाव पर', bn: 'মূল তেল ট্যাংক ও কনজারভেটর ট্যাংকের মধ্যবর্তী সংযোগ পাইপে, ৩° থেকে ৭° ঢালু অবস্থায়' } },
        { id: 'opt-2', text: { en: 'Inside the tap changer motor drive box', hi: 'टैप चेंजर मोटर ड्राइव बॉक्स के अंदर', bn: 'ট্যাপ চেঞ্জার মোটর ড্রাইভ বক্সের ভেতরে' } },
        { id: 'opt-3', text: { en: 'Submerged at the very bottom of the transformer cooling radiator', hi: 'कूलिंग रेडिएटर के बिल्कुल नीचे डूबा हुआ', bn: 'কুলিং রেডিয়েটরের তলদেশে তেলের মধ্যে নিমজ্জিত' } },
        { id: 'opt-4', text: { en: 'Directly bolted to the high-voltage bushing terminals', hi: 'हाई-वोल्टेज बुशिंग टर्मिनलों पर सीधे बोल्ट किया गया', bn: 'হাই-ভোল্টেজ বুশিং টার্মিনালে সরাসরি সংযুক্ত' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'The Buchholz relay is mounted in the pipe connecting the main tank to the conservator with an upward slope of 3° to 7° so rising gases and oil surges pass directly through its chambers.',
        hi: 'बुखोल्ज़ रिले मुख्य टैंक और कंजर्वेटर के बीच पाइप में लगाया जाता है ताकि उत्पन्न गैसें और तेल की लहरें सीधे इसके अंदर से गुजरें।',
        bn: 'প্রধান ট্যাংক থেকে কনজারভেটরে গ্যাস ও তেলের প্রবাহ সহজে পৌঁছানোর জন্য ৩°-৭° কোণে নির্মিত সংযোগকারী পাইপে বুখহোলজ রিলে স্থাপন করা হয়।'
      }
    },
    {
      id: 'mcq-ch17-l05-06',
      question: {
        en: 'What two distinct fault conditions are detected by the two elements of a Buchholz relay?',
        hi: 'बुखोल्ज़ रिले के दो तत्वों द्वारा किन दो अलग-अलग फॉल्ट स्थितियों का पता लगाया जाता है?',
        bn: 'বুখহোলজ রিলের দুটি উপাদান কোন দুটি স্বতন্ত্র ত্রুটি শনাক্ত করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Slow gas accumulation triggers an ALARM; sudden high-velocity oil surge (>1.0 m/s) triggers an instantaneous TRIP', hi: 'धीमी गैस अलार्म देती है; तेज तेल का बहाव (>1.0 m/s) तुरंत ट्रिप देता है', bn: 'ধীরগতির গ্যাস সঞ্চয় অ্যালার্ম দেয়; হঠাৎ তীব্র তেলের প্রবাহ (>১.০ m/s) তাৎক্ষণিক ট্রিপ ঘটায়' } },
        { id: 'opt-2', text: { en: 'High oil temperature trips the pump; low ambient air stops the fan', hi: 'उच्च तेल का तापमान पंप ट्रिप करता है; कम हवा पंखे को रोकती है', bn: 'উচ্চ তেল তাপমাত্রা পাম্প চালায়; কম বাতাস ফ্যান বন্ধ করে' } },
        { id: 'opt-3', text: { en: 'Lightning strike closes the breaker; power outage sounds the siren', hi: 'बिजली गिरने से ब्रेकर बंद होता है; बिजली जाने पर सायरन बजता है', bn: 'বজ্রপাতে ব্রেকার বন্ধ হয়; লোডশেডিংয়ে সাইরেন বাজে' } },
        { id: 'opt-4', text: { en: 'Primary frequency drop opens the valve; voltage spike closes it', hi: 'आवृत्ति गिरने पर वाल्व खुलता है; वोल्टेज स्पाइक इसे बंद करता है', bn: 'ফ্রিকোয়েন্সি ড্রপে ভালভ খোলে; ভোল্টেজ স্পাইকে ভালভ বন্ধ হয়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'The upper float detects slow insulation breakdown producing combustible gas (alarm). The lower flap/float responds to violent oil displacement (>1 m/s) caused by catastrophic arcing, initiating an immediate trip.',
        hi: 'ऊपरी फ्लोट धीमी गैस (अलार्म) को पकड़ता है, जबकि निचला फ्लैप भारी आंतरिक स्पार्किंग के कारण तेल के हिंसक बहाव (ट्रिप) पर काम करता है।',
        bn: 'উপরের ফ্লোট মৃদু গ্যাসে অ্যালার্ম বাজায় এবং নিচের ফ্ল্যাপ মারাত্মক শর্ট সার্কিটে তেলের তীব্র গতির সার্জে তাৎক্ষণিক ট্রিপ সংকেত পাঠায়।'
      }
    },
    {
      id: 'mcq-ch17-l05-07',
      question: {
        en: 'Why must zero-sequence currents be eliminated from the differential relay inputs of a Delta-Wye (Dyn11) transformer?',
        hi: 'Delta-Wye (Dyn11) ट्रांसफार्मर के डिफरेंशियल रिले इनपुट से जीरो-सीक्वेंस धाराओं को क्यों समाप्त किया जाना चाहिए?',
        bn: 'Delta-Wye (Dyn11) ট্রান্সফরমারের ডিফারেনশিয়াল রিলে ইনপুট থেকে জিরো-সিকোয়েন্স কারেন্ট দূর করা আবশ্যক কেন?'
      },
      options: [
        { id: 'opt-1', text: { en: 'External earth faults on the wye side cause zero-sequence current to circulate in the delta winding, appearing as false differential current', hi: 'वाई-साइड पर बाहरी अर्थ फॉल्ट से डेल्टा में जीरो-सीक्वेंस करंट घूमता है, जो गलत डिफरेंशियल करंट के रूप में दिखता है', bn: 'স্টার সাইডের বাহ্যিক আর্থ ফল্টে ডেল্টায় জিরো-সিকোয়েন্স কারেন্ট সঞ্চালিত হয়ে মিথ্যা ডিফারেনশিয়াল কারেন্ট তৈরি করে' } },
        { id: 'opt-2', text: { en: 'Zero-sequence currents reverse the polarity of the substation batteries', hi: 'जीरो-सीक्वेंस करंट सबस्टेशन बैटरी की ध्रुवीयता को उलट देता है', bn: 'জিরো-সিকোয়েন্স কারেন্ট সাবস্টেশন ব্যাটারির পোলারিটি উল্টে দেয়' } },
        { id: 'opt-3', text: { en: 'Zero-sequence flux generates radio noise that jams GPS receivers', hi: 'जीरो-सीक्वेंस फ्लक्स रेडियो शोर उत्पन्न करता है', bn: 'জিরো সিকোয়েন্স ফ্লাক্স জিপিএস জ্যাম করে' } },
        { id: 'opt-4', text: { en: 'It cools the transformer core below freezing point', hi: 'यह ट्रांसफार्मर कोर को हिमांक से नीचे ठंडा करता है', bn: 'এটি কোরকে অতিমাত্রায় শীতল করে ফেলে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'An out-of-zone ground fault on the wye side produces zero-sequence current that flows in the neutral CT and phase lines, but circulates inside the closed delta winding without emerging into delta phase CTs. Numerical relays filter out zero sequence (I0) to prevent false tripping.',
        hi: 'बाहरी अर्थ फॉल्ट के दौरान जीरो-सीक्वेंस करंट डेल्टा के अंदर बंद रहता है और बाहर नहीं निकलता, जिससे रिले को गलत अंतर दिखता है। रिले सॉफ्टवेयर इसे फिल्टर करता है।',
        bn: 'স্টার সাইডের বহিঃস্থ আর্থ ফল্টে ডেল্টার অভ্যন্তরে জিরো-সিকোয়েন্স কারেন্ট ঘুরতে থাকে কিন্তু বাইরে বের হয় না, ফলে রিলে একে অভ্যন্তরীণ ফল্ট ভেবে ভুল ট্রিপ করতে পারে।'
      }
    },
    {
      id: 'mcq-ch17-l05-08',
      question: {
        en: 'A transformer differential relay measures 12.0 A of fundamental differential current and 2.4 A of 2nd harmonic current. If the 2nd harmonic restraint threshold is 15%, how will the relay respond?',
        hi: 'एक रिले 12.0 A फंडामेंटल और 2.4 A 2nd हार्मोनिक मापता है। यदि थ्रेशोल्ड 15% है, तो रिले कैसे प्रतिक्रिया देगा?',
        bn: 'একটি রিলে ১২.০ A মূল কারেন্ট এবং ২.৪ A ২য় হারমোনিক কারেন্ট পরিমাপ করে। ২য় হারমোনিক ব্লকিং থ্রেশহোল্ড ১৫% হলে রিলে কীভাবে প্রতিক্রিয়া জানাবে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'It BLOCKS tripping because 2nd harmonic is 20%, which exceeds the 15% threshold', hi: 'यह ट्रिपिंग को ब्लॉक करता है क्योंकि 2nd हार्मोनिक 20% है, जो 15% की सीमा से अधिक है', bn: 'এটি ট্রিপ ব্লক করবে কারণ ২য় হারমোনিক ২০%, যা ১৫% থ্রেশহোল্ডের চেয়ে বেশি' } },
        { id: 'opt-2', text: { en: 'It TRIPS immediately because current exceeds 10 A', hi: 'यह तुरंत ट्रिप करता है क्योंकि करंट 10 A से अधिक है', bn: 'কারেন্ট ১০ A এর বেশি হওয়ায় সাথে সাথে ট্রিপ করবে' } },
        { id: 'opt-3', text: { en: 'It opens the oil drain valve automatically', hi: 'यह स्वचालित रूप से तेल निकासी वाल्व खोलता है', bn: 'তেল নিষ্কাশন ভালভ স্বয়ংক্রিয়ভাবে খুলে দেবে' } },
        { id: 'opt-4', text: { en: 'It disconnects the Buchholz relay trip contacts', hi: 'यह बुखोल्ज़ रिले संपर्कों को डिस्कनेक्ट करता है', bn: 'বুখহোলজ রিলের সংযোগ বিচ্ছিন্ন করবে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Ratio = (2.4 A / 12.0 A) · 100% = 20.0%. Since 20.0% > 15%, the relay determines that the differential current is caused by magnetizing inrush and safely blocks the trip command.',
        hi: 'अनुपात = (2.4 / 12.0) * 100% = 20%। चूंकि 20% > 15% है, रिले इनरश पहचानकर ट्रिपिंग ब्लॉक करता है।',
        bn: 'অনুপাত = (২.৪ / ১২.০) * ১০০% = ২০.০%। যেহেতু ২০% > ১৫%, রিলে একে ইনরাশ হিসেবে শনাক্ত করে ট্রিপ ব্লক করে।'
      }
    }
  ]
};
