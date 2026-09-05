import { Lesson } from '../types';

export const LESSON_GENERATOR_MOTOR_PROTECTION: Lesson = {
  id: 'lsn-ch17-generator-motor-protection',
  topicId: 'tp-ch17-generator-motor-protection',
  chapterId: 'ch-advanced-power-system-protection',
  order: 8,
  title: {
    en: 'Generator and Large Motor Protection Engineering',
    hi: 'जनरेटर एवं वृहद मोटर सुरक्षा इंजीनियरिंग',
    bn: 'জেনারেটর ও বৃহৎ মোটর সুরক্ষা ইঞ্জিনিয়ারিং'
  },
  description: {
    en: 'Advanced protection engineering for synchronous generators and heavy industrial motors: 100% stator ground fault (59N fundamental + 27TN third-harmonic under-voltage / 20 Hz injection), rotor field ground fault (64F), Loss of Excitation (ANSI 40 offset Mho), negative sequence current heating (ANSI 46 I₂²t = K), reverse power / anti-motoring (ANSI 32), and large motor thermal protection (ANSI 49, 51LR locked rotor, start-per-hour inhibits).',
    hi: 'सिंक्रोनस जनरेटर और भारी मोटरों के लिए उन्नत सुरक्षा: 100% स्टेटर अर्थ फॉल्ट (59N + 27TN तृतीय हार्मोनिक / 20 Hz इंजेक्शन), रोटर फील्ड अर्थ फॉल्ट (64F), उत्तेजना की हानि (Loss of Excitation 40), नेगेटिव-सीक्वेंस हीटिंग (46 I₂²t = K), रिवर्स पावर (32), और मोटर थर्मल सुरक्षा (49, 51LR)।',
    bn: 'সিনক্রোনাস জেনারেটর ও হেভি মোটরের উন্নত সুরক্ষা ইঞ্জিনিয়ারিং: ১০০% স্টেটর আর্থ ফল্ট (59N + 27TN ৩য় হারমোনিক / ২০ Hz ইনজেকশন), রোটর ফিল্ড আর্থ ফল্ট (64F), লস অব এক্সাইটেশন (ANSI 40 অফসেট মো), নেগেটিভ সিকোয়েন্স হিটিং (ANSI 46 I₂²t = K), রিভার্স পাওয়ার / অ্যান্টি-মোটরিং (ANSI 32), এবং মোটর থার্মাল ও লকড-রোটর সুরক্ষা (ANSI 49, 51LR)।'
  },
  estimatedMinutes: 55,
  easyExplanation: {
    en: 'Utility generators and massive industrial motors are the multimillion-dollar heart of power generation and heavy manufacturing. Unlike static transmission lines, rotating electrical machines face combined electromagnetic, thermal, and mechanical stresses. If a generator loses its DC magnetic field, it runs as an unexcited induction generator, drawing immense reactive power from the grid and blistering its rotor with eddy currents. If a steam turbine runs out of steam, the generator motors along, acting as an electric drive that spins the turbine blades in stagnant steam, superheating the turbine exhaust within 30 seconds! Furthermore, unbalanced grid loads inject negative-sequence currents that induce double-frequency (100 Hz) currents directly into the rotor surface, threatening catastrophic mechanical failure. Dedicated numerical relays monitor these specialized phenomena to trip the machine before irreversible destruction occurs!',
    hi: 'विद्युत जनरेटर और विशाल औद्योगिक मोटरें पावर प्लांट की सबसे महंगी और महत्वपूर्ण मशीनें हैं। ट्रांसमिशन लाइनों के विपरीत, घूमने वाली मशीनों में विद्युत, तापीय और यांत्रिक तनाव एक साथ होते हैं। यदि कोई जनरेटर अपना चुंबकीय क्षेत्र (उत्तेजना) खो देता है, तो वह ग्रिड से भारी मात्रा में रिएक्टिव पावर खींचने लगता है और उसका रोटर जलने लगता है। यदि स्टीम टरबाइन में भाप खत्म हो जाए, तो जनरेटर मोटर बनकर टरबाइन को घुमाने लगता है, जिससे टरबाइन के ब्लेड 30 सेकंड के भीतर अत्यधिक गर्म हो जाते हैं! इसके अलावा, असंतुलित लोड रोटर में 100 Hz करंट पैदा करता है। विशेष संख्यात्मक रिले इन सभी खतरों की निगरानी करते हैं और मशीन को नष्ट होने से पहले बचा लेते हैं!',
    bn: 'পাওয়ার প্ল্যান্টের সিনক্রোনাস জেনারেটর ও সুবিশাল মোটরগুলো অত্যন্ত মূল্যবান সম্পদ। স্থির ট্রান্সমিশন লাইনের মতো নয়, ঘূর্ণায়মান যন্ত্রপাতিতে বৈদ্যুতিক, তাপীয় এবং যান্ত্রিক চাপ একসঙ্গে কাজ করে। জেনারেটর তার ডিসি এক্সাইটেশন হারালে এটি গ্রিড থেকে বিপুল রিঅ্যাক্টিভ পাওয়ার টেনে ইন্ডাকশন জেনারেটর হিসেবে চলতে শুরু করে এবং রোটর পুড়িয়ে ফেলে। বাষ্প সরবরাহ বন্ধ হয়ে গেলে জেনারেটর নিজেই মোটর হিসেবে টারবাইনকে ঘোরাতে থাকে, যার ফলে বাতাসের ঘর্ষণে ৩০ সেকেন্ডে টারবাইন ব্লেড মারাত্মক উত্তপ্ত হয়ে গলে যেতে পারে! এছাড়া গ্রিডের ভারসাম্যহীন লোড রোটরে ১০০ Hz এডি কারেন্ট সৃষ্টি করে। এসব ধ্বংসাত্মক পরিস্থিতি ঠেকাতে বিশেষায়িত রিলে মেশিনটিকে তাৎক্ষণিক রক্ষা করে!'
  },
  detailedExplanation: {
    en: 'Generator and motor protection addresses distinct electromagnetic, aerodynamic, and thermodynamic limits:\n\n1. 100% Stator Earth Fault Protection:\nHigh-resistance grounded generators use a neutral distribution transformer loaded with a secondary resistor. A fundamental neutral overvoltage relay (ANSI 59N) measures voltage across the resistor, covering the upper 90% to 95% of the stator winding. However, a fault at the neutral produces zero fundamental voltage! To achieve 100% winding coverage:\n• Third-Harmonic Under-Voltage (ANSI 27TN): Third-harmonic voltage (150 Hz) is naturally generated in the stator neutral and terminal due to non-sinusoidal winding distribution. A neutral fault collapses the neutral 3rd harmonic to zero, triggering 27TN tripping.\n• Sub-harmonic (20 Hz) Voltage Injection: A dedicated low-frequency generator injects a 20 Hz AC voltage into the neutral. The resulting 20 Hz current directly measures the insulation resistance to ground across 100% of the winding, even at standstill!\n\n2. Loss of Field / Loss of Excitation (ANSI 40):\nWhen a generator loses DC field excitation (e.g., field breaker tripped, exciter failure), it drops below synchronous speed and operates as an induction generator. It ceases delivering reactive power (+MVAr) and instead absorbs massive reactive power (-MVAr) from the grid to maintain stator flux. This causes severe rotor surface heating from slip-frequency eddy currents and depresses grid voltage. An Offset Mho Relay on the R-X diagram detects the operating impedance moving into the negative reactance region (-X quadrant):\n• Diameter = Xd (unsaturated direct-axis reactance)\n• Top Offset = -X\'d / 2 (negative transient reactance offset)\n\n3. Negative-Sequence Current Heating (ANSI 46):\nUnbalanced stator currents (due to single-phase faults, open conductors, or unbalanced loads) produce a reverse-rotating magnetic flux at synchronous speed. This backward field cuts the forward-rotating rotor at twice synchronous speed, inducing intense 100 Hz (or 120 Hz) eddy currents in the rotor forging, wedge slots, and retaining rings. The heating energy satisfies the machine thermal withstand equation:\nI2² * t = K (where K typically ranges from 5 to 10 for large cylindrical-rotor generators, and up to 30 for salient-pole hydro generators).\nNumerical relays implement an inverse-time characteristic replicating this I2²t cooling curve.\n\n4. Reverse Power / Anti-Motoring (ANSI 32):\nIf prime mover input power fails (boiler trip, fuel valve closure), the generator draws active power from the grid to drive the turbine at synchronous speed. In steam turbines, absence of cooling steam flow causes windage friction to superheat exhaust hood blades within 30 to 90 seconds. A directional active power relay set to -0.5% to -2.0% of rated power trips the generator breaker with a 10 to 30 second safety delay.\n\n5. Large Induction Motor Protection:\n• Stator Thermal Replica (ANSI 49): Tracks heating based on positive and weighted negative-sequence current: I_eq² = I1² + 3·I2², accounting for rotor heating.\n• Locked-Rotor Protection (ANSI 51LR): Protects against mechanical stall where motor draws 6x rated current with zero cooling airflow.',
    hi: 'जनरेटर एवं मोटर सुरक्षा के प्रमुख तकनीकी बिंदु:\n1. 100% स्टेटर अर्थ फॉल्ट: 59N रिले वाइंडिंग के 90-95% हिस्से की रक्षा करता है लेकिन न्यूट्रल पर काम नहीं करता। 100% कवरेज के लिए 27TN (तृतीय हार्मोनिक अंडर-वोल्टेज) या 20 Hz सब-हार्मोनिक वोल्टेज इंजेक्शन का उपयोग किया जाता है।\n2. उत्तेजना की हानि (Loss of Excitation 40): डीसी फील्ड खोने पर जनरेटर ग्रिड से भारी रिएक्टिव पावर खींचता है। इसे R-X तल पर ऑफसेट म्हो रिले द्वारा पकड़ा जाता है।\n3. नेगेटिव-सीक्वेंस हीटिंग (46 I₂²t = K): असंतुलित लोड रोटर में 100 Hz करंट पैदा करता है जो रोटर वेज को पिघला सकता है। थर्मल सीमा I₂²t = K द्वारा रिले नियंत्रित होता है।\n4. रिवर्स पावर (32): भाप बंद होने पर जनरेटर मोटर बनकर टरबाइन घुमाने लगता है जिससे टरबाइन गर्म हो जाती है। 0.5-2% रिवर्स पावर पर 10-30s में ट्रिपिंग होती है।\n5. बड़ी मोटर सुरक्षा: थर्मल मॉडल 49, लॉक्ड रोटर 51LR और प्रति घंटे अधिकतम स्टार्ट की सीमा।',
    bn: 'জেনারেটর ও বৃহৎ মোটর সুরক্ষার সারসংক্ষেপ:\n১. ১০০% স্টেটর আর্থ ফল্ট: 59N রিলে স্টেটর ওয়াইন্ডিংয়ের ৯০-৯৫% অংশ রক্ষা করে। নিউট্রাল পয়েন্ট সহ বাকি অংশের জন্য ৩য় হারমোনিক (27TN) বা ২০ Hz সাব-হারমোনিক ইনজেকশন স্কিম প্রয়োগ করা হয়।\n২. লস অব এক্সাইটেশন (ANSI 40): ফিল্ড হারালে জেনারেটর গ্রিড থেকে বিপুল মেগাভার (-MVAr) টানে। R-X তলে অফসেট মো (Offset Mho) রিলে দিয়ে এটি তাৎক্ষণিক শনাক্ত হয়।\n৩. নেগেটিভ সিকোয়েন্স হিটিং (ANSI 46 I₂²t = K): লোডের ভারসাম্যহীনতায় রোটরে ১০০ Hz বিদ্যুৎ আবিষ্ট হয়ে রোটর গলিয়ে ফেলতে পারে। এর সুরক্ষায় I₂²t = K বৈশিষ্ট্য ব্যবহৃত হয়।\n৪. রিভার্স পাওয়ার (ANSI 32): টারবাইন স্টিম বন্ধ হলে জেনারেটর মোটর হয়ে টারবাইন চালায় ও ব্লেড অতিরিক্ত উত্তপ্ত করে। ০.৫-২% রিভার্স পাওয়ারে রিলে ট্রিপ নিশ্চিত করে।\n৫. বড় মোটর সুরক্ষা: থার্মাল রেপ্লিকা 49, স্টল বা লকড রোটর 51LR এবং প্রতি ঘণ্টায় সর্বোচ্চ মোটর চালুর সীমাবদ্ধতা।'
  },
  formulas: [
    {
      id: 'f-ch17-negative-sequence-heating',
      symbol: 'I_2^2 t',
      expression: 'I_2^2 \\cdot t = K',
      title: {
        en: 'Rotor Negative-Sequence Thermal Withstand Formula',
        hi: 'रोटर नेगेटिव-सीक्वेंस थर्मल सह्यता सूत्र',
        bn: 'রোটর নেগেটিভ-সিকোয়েন্স তাপীয় সহনশীলতা সূত্র'
      },
      description: {
        en: 'Defines the permissible duration of unbalanced stator currents before rotor surface overheating causes structural failure.',
        hi: 'रोटर की अत्यधिक हीटिंग से पहले असंतुलित स्टेटर धाराओं की स्वीकार्य अवधि निर्धारित करता है।',
        bn: 'রোটর অতিরিক্ত উত্তপ্ত হয়ে বিকল হওয়ার পূর্বে ভারসাম্যহীন স্টেটর কারেন্ট বহনের অনুমোদিত সময়সীমা।'
      },
      variables: [
        { symbol: 'I_2', name: { en: 'Per-unit negative-sequence current (p.u.)', hi: 'नेगेटिव-सीक्वेंस करंट (p.u.)', bn: 'নেগেটিভ-সিকোয়েন্স কারেন্ট (p.u.)' } },
        { symbol: 't', name: { en: 'Permissible fault duration (seconds)', hi: 'स्वीकार्य समय (सेकंड)', bn: 'অনুমোদিত সময়সীমা (সেকেন্ড)' } },
        { symbol: 'K', name: { en: 'Machine rotor design thermal constant (typically 5 to 10 for large turbo-generators)', hi: 'रोटर थर्मल स्थिरांक (K)', bn: 'রোটর তাপীয় ধ্রুবক (K)' } }
      ]
    },
    {
      id: 'f-ch17-motor-thermal-equivalent',
      symbol: 'I_{eq}^2',
      expression: 'I_{eq}^2 = I_1^2 + k_{wt} \\cdot I_2^2',
      title: {
        en: 'Motor Equivalent Thermal Current Formula',
        hi: 'मोटर समकक्ष थर्मल धारा सूत्र',
        bn: 'মোটর সমতুল্য তাপীয় কারেন্ট সূত্র'
      },
      description: {
        en: 'Combines fundamental positive and negative-sequence currents with an empirical weighting factor to model motor rotor heating.',
        hi: 'मोटर रोटर हीटिंग के लिए सकारात्मक और नकारात्मक अनुक्रम धाराओं को भारित कारक के साथ जोड़ता है।',
        bn: 'মোটরের রোটর উত্তাপের সঠিক সিমুলেশনে পজিটিভ ও নেগেটিভ সিকোয়েন্স কারেন্ট সমন্বয়কারী সমীকরণ।'
      },
      variables: [
        { symbol: 'I_{eq}', name: { en: 'Effective thermal heating current (p.u.)', hi: 'प्रभावी थर्मल धारा', bn: 'কার্যকর তাপীয় কারেন্ট' } },
        { symbol: 'I_1', name: { en: 'Positive-sequence stator current (p.u.)', hi: 'पॉजिटिव-सीक्वेंस धारा', bn: 'পজিটিভ সিকোয়েন্স কারেন্ট' } },
        { symbol: 'I_2', name: { en: 'Negative-sequence stator current (p.u.)', hi: 'नेगेटिव-सीक्वेंस धारा', bn: 'নেগেটিভ সিকোয়েন্স কারেন্ট' } },
        { symbol: 'k_{wt}', name: { en: 'Negative-sequence rotor heating weighting factor (typically 3 to 6)', hi: 'भारण कारक', bn: 'উত্তাপ বৃদ্ধিকারী ওজন ফ্যাক্টর' } }
      ]
    }
  ],
  keyPoints: [
    {
      en: '100% stator earth fault protection uses fundamental 59N for upper 90% and 3rd harmonic under-voltage (27TN) or 20 Hz injection for the neutral.',
      hi: '100% स्टेटर अर्थ फॉल्ट सुरक्षा ऊपरी 90% के लिए 59N और न्यूट्रल के लिए 27TN (तृतीय हार्मोनिक) या 20 Hz इंजेक्शन का उपयोग करती है।',
      bn: '১০০% স্টেটর আর্থ ফল্ট সুরক্ষায় ওয়াইন্ডিংয়ের ওপরের ৯০% জন্য 59N এবং নিউট্রালের নিকটবর্তী অংশের জন্য ৩য় হারমোনিক (27TN) বা ২০ Hz ইনজেকশন ব্যবহৃত হয়।'
    },
    {
      en: 'Loss of Excitation (ANSI 40) is detected by an Offset Mho relay on the R-X plane as impedance enters the negative reactance (-X) zone.',
      hi: 'उत्तेजना की हानि (ANSI 40) का पता R-X तल पर ऑफसेट म्हो रिले द्वारा लगाया जाता है क्योंकि प्रतिबाधा -X ज़ोन में प्रवेश करती है।',
      bn: 'লস অব এক্সাইটেশন (ANSI 40) R-X তলে অফসেট মো রিলে দ্বারা শনাক্ত হয় যখন ইম্পিডেন্স ঋণাত্মক রিঅ্যাক্ট্যান্স (-X) অঞ্চলে প্রবেশ করে।'
    },
    {
      en: 'Unbalanced stator currents induce double-frequency (100 Hz) currents in the rotor, limited strictly by the I₂²t = K thermal withstand boundary.',
      hi: 'असंतुलित स्टेटर धाराएं रोटर में 100 Hz धाराएं उत्पन्न करती हैं, जो I₂²t = K थर्मल सीमा द्वारा सख्ती से नियंत्रित होती हैं।',
      bn: 'ভারসাম্যহীন স্টেটর কারেন্ট রোটরে দ্বিগুণ ফ্রিকোয়েন্সির (১০০ Hz) বিদ্যুৎ তৈরি করে যা I₂²t = K তাপীয় সহনশীলতা দ্বারা নিয়ন্ত্রিত হয়।'
    },
    {
      en: 'Reverse power (ANSI 32) protects steam turbines against blade aerodynamic overheating when steam supply trips and the machine motors.',
      hi: 'रिवर्स पावर (ANSI 32) भाप बंद होने पर जनरेटर द्वारा टरबाइन को मोटर की तरह घुमाने से टरबाइन ब्लेडों को जलने से बचाता है।',
      bn: 'রিভার্স পাওয়ার (ANSI 32) টারবাইনে স্টিম প্রবাহ বন্ধ হলে জেনারেটরের মোটর হিসেবে ঘূর্ণন এবং ব্লেডের অতিরিক্ত উত্তাপ প্রতিরোধ করে।'
    }
  ],
  schematics: [
    {
      id: 'sch-ch17-l08-01',
      title: {
        en: 'Generator Stator Earth Fault Scheme & Loss of Excitation R-X Characteristic',
        hi: 'जनरेटर स्टेटर अर्थ फॉल्ट योजना एवं उत्तेजना हानि R-X विशेषता',
        bn: 'জেনারেটর স্টেটর আর্থ ফল্ট স্কিম ও লস অব এক্সাইটেশন R-X ডায়াগ্রাম'
      },
      content: {
        en: 'The schematic details: (1) The 100% stator earth fault protection architecture showing the neutral distribution transformer (59N fundamental overvoltage), third-harmonic neutral comparator (27TN), and sub-harmonic 20 Hz injection unit, (2) The R-X complex plane showing the Offset Mho Loss of Field (ANSI 40) circular boundaries nested in the negative-reactance quadrant, and (3) Motor thermal replica model block diagram.',
        hi: 'यह आरेख दिखाता है: (1) न्यूट्रल वितरण ट्रांसफार्मर (59N), तृतीय हार्मोनिक (27TN) और 20 Hz इंजेक्शन के साथ 100% स्टेटर अर्थ फॉल्ट सुरक्षा, (2) -X चतुर्थांश में ऑफसेट म्हो (ANSI 40) विशेषता, और (3) मोटर थर्मल रेप्लिका ब्लॉक आरेख।',
        bn: 'এই স্কিম্যাটিকে প্রদর্শিত হয়েছে: (১) নিউট্রাল ট্রান্সফরমার (59N), ৩য় হারমোনিক (27TN) ও ২০ Hz ইনজেকশন সমন্বিত ১০০% স্টেটর আর্থ ফল্ট আর্কিটেকচার, (২) ঋণাত্মক রিঅ্যাক্ট্যান্স কোয়াড্র্যান্টে অফসেট মো (ANSI 40) বৃত্তাকার রিলে বৈশিষ্ট্য এবং (৩) মোটর থার্মাল রেপ্লিকা ডায়াগ্রাম।'
      },
      schematicId: 'sch-ch17-generator-motor-protection'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch17-l08-01',
      problem: {
        en: 'A 600 MW, 21 kV turbogenerator has a negative-sequence thermal capability constant of K = 8.0 s. During an asymmetric fault on the 400 kV network, an open conductor results in a continuous negative-sequence current of I2 = 0.35 p.u. entering the generator. (a) Calculate the maximum permissible clearing time (t_trip) before rotor retaining rings suffer irreversible metallurgical damage, and (b) If the relay trips in 35.0 seconds, determine whether the generator is safely protected.',
        hi: 'एक 600 MW, 21 kV टर्बोजनरेटर का नेगेटिव-सीक्वेंस स्थिरांक K = 8.0 s है। ग्रिड में असंतुलन के कारण जनरेटर में I2 = 0.35 p.u. बहता है। (a) रोटर क्षति से पहले अधिकतम स्वीकार्य ट्रिप समय की गणना करें, और (b) यदि रिले 35.0 s में ट्रिप करता है, तो क्या जनरेटर सुरक्षित है?',
        bn: 'একটি ৬০০ MW, ২১ kV টার্বো-জেনারেটরের নেগেটিভ সিকোয়েন্স তাপীয় ধ্রুবক K = ৮.০ s। গ্রিডের ভারসাম্যহীনতার কারণে জেনারেটরে I2 = ০.৩৫ p.u. কারেন্ট প্রবাহিত হয়। (a) রোটরের মারাত্মক ক্ষতি এড়াতে সর্বোচ্চ কত সময়ের মধ্যে ট্রিপ নিশ্চিত করতে হবে? (b) রিলে ৩৫.০ সেকেন্ডে ট্রिप করালে জেনারেটর নিরাপদ থাকবে কিনা তা যাচাই করুন।'
      },
      solution: {
        en: 'Given:\n• Negative-sequence current I2 = 0.35 p.u.\n• Machine thermal constant K = 8.0 s\n\nStep 1: Apply the thermal withstand formula:\nI2² * t = K\nRearranging for permissible time t:\nt_permissible = K / (I2²)\nt_permissible = 8.0 / (0.35)² = 8.0 / 0.1225 = 65.31 seconds\n\nStep 2: Comparison with relay trip time:\n• Actual relay operating time t_relay = 35.0 seconds\n• Since t_relay (35.0 s) < t_permissible (65.31 s), the relay interrupts the machine breakers well within the machine thermal limit, providing an ample safety margin of 30.31 seconds.\n\nConclusion: The generator rotor is safely protected against negative-sequence thermal destruction.',
        hi: 'चरण 1: t = K / (I2)² = 8.0 / (0.35)² = 8.0 / 0.1225 = 65.31 सेकंड\nचरण 2: चूंकि रिले 35.0 सेकंड में ट्रिप करता है और 35.0 s < 65.31 s है, जनरेटर पूरी तरह सुरक्षित रहेगा।',
        bn: 'ধাপ ১: অনুমোদিত সময় t = K / (I2)² = ৮.০ / (০.৩৫)² = ৮.০ / ০.১২২৫ = ৬৫.৩১ সেকেন্ড\nধাপ ২: যেহেতু রিলের ট্রিপ সময় ৩৫.০ সেকেন্ড অনুমোদিত ৬৫.৩১ সেকেন্ডের চেয়ে কম, তাই জেনারেটর নিরাপদে সুরক্ষিত থাকবে।'
      },
      givenValues: { 'K': '8.0 s', 'I2': '0.35 p.u.', 't_actual': '35.0 s' },
      finalAnswer: {
        en: 't_permissible = 65.31 seconds; Machine is safely protected (35.0 s < 65.31 s)',
        hi: 'स्वीकार्य समय = 65.31 सेकंड; मशीन सुरक्षित रूप से संरक्षित है',
        bn: 'অনুমোদিত সময় = ৬৫.৩১ সেকেন্ড; জেনারেটর সম্পূর্ণ নিরাপদ থাকবে'
      }
    },
    {
      id: 'ex-ch17-l08-02',
      problem: {
        en: 'A 2000 kW, 6.6 kV induction motor draws 215 A at full load. During a heavy load start, the motor stalls (locked rotor), drawing 1290 A (6.0 p.u.). The motor manufacturer specifies a locked-rotor safe stall time of 14.0 seconds when starting from ambient hot conditions. Determine the required setting for the ANSI 51LR locked-rotor protection relay.',
        hi: 'एक 2000 kW, 6.6 kV इंडक्शन मोटर फुल लोड पर 215 A खींचती है। स्टार्टिंग में मोटर जाम हो जाती है और 1290 A (6.0 p.u.) खींचती है। गर्म स्थिति में सुरक्षित स्टॉल समय 14.0 सेकंड है। ANSI 51LR रिले के लिए आवश्यक समय सेटिंग निर्धारित करें।',
        bn: 'একটি ২০০০ kW, ৬.৬ kV মোটর পূর্ণ লোডে ২১৫ A টানে। চালুর সময় মেকানিক্যাল জ্যামে মোটরটি আটকে গিয়ে (স্টল) ১২৯০ A (৬.০ p.u.) কারেন্ট টানে। হট কন্ডিশনে মোটরটির নিরাপদ স্টল সহনশীলতা ১৪.০ সেকেন্ড। ANSI 51LR লকড-রোটর রিলের প্রয়োজনীয় সেটিং নির্ধারণ করুন।'
      },
      solution: {
        en: 'Given:\n• Full load current I_FL = 215 A\n• Stall current I_stall = 1290 A = 6.0 p.u.\n• Permissible hot stall time t_stall = 14.0 seconds\n\nStep 1: Engineering setting principles for Locked-Rotor Protection (51LR):\n• Current pickup setting: Typically set halfway between motor full-load and locked-rotor current, or at 2.0 to 2.5 p.u. (e.g., 2.5 * 215 A = 537.5 A).\n• Time delay setting: Must be set slightly longer than the normal motor acceleration starting time (e.g., normal start takes 6.0 to 8.0 s), but strictly less than the permissible locked-rotor withstand time (14.0 s) with a safety margin of at least 1.5 to 2.0 seconds.\n\nStep 2: Calculate selected trip time:\nt_51LR = t_stall - safety margin = 14.0 s - 3.0 s = 11.0 seconds (or 10.0 s)\n\nConclusion: The ANSI 51LR relay should be configured with a pickup of 2.5 p.u. (538 A) and a definite time delay of 10.0 to 11.0 seconds to safely trip before insulation burns.',
        hi: 'पिकअप करंट = 2.5 * 215 A = 538 A।\nट्रिप समय = 14.0 s - 3.0 s (सुरक्षा मार्जिन) = 11.0 सेकंड।\nनिष्कर्ष: 51LR रिले 538 A पर 11.0 सेकंड की देरी के साथ सेट किया जाएगा ताकि सामान्य स्टार्टिंग हो सके लेकिन स्टॉल पर मोटर सुरक्षित ट्रिप हो जाए।',
        bn: 'পিকআপ কারেন্ট = ২.৫ * ২১৫ A = ৫৩৮ A।\nনিরাপদ ট্রিপ সময় = ১৪.০ s - ৩.০ s = ১১.০ সেকেন্ড।\nসিদ্ধান্ত: ANSI 51LR রিলে ৫৩৮ A কারেন্টে ১১.০ সেকেন্ড নির্দিষ্ট সময় বিলম্ব সহ সেট করতে হবে যাতে মোটর নিরাপদে বাঁচে।'
      },
      givenValues: { 'I_FL': '215 A', 'I_stall': '1290 A', 't_stall': '14.0 s' },
      finalAnswer: {
        en: 'Pickup = 538 A (2.5 p.u.), Definite Time Delay = 10.0 to 11.0 seconds',
        hi: 'पिकअप = 538 A, निश्चित समय देरी = 10.0 से 11.0 सेकंड',
        bn: 'পিকআপ = ৫৩৮ A (২.৫ p.u.), নির্দিষ্ট সময় বিলম্ব = ১০.০ থেকে ১১.০ সেকেন্ড'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Configuring 100% stator earth fault protection using 20 Hz injection on 500 MW thermal power plants.',
      'Setting Offset Mho Loss of Field (ANSI 40) elements on hydro-electric generators operating at leading power factors.',
      'Configuring stator thermal replica (49) and locked-rotor stall protection (51LR) on large 11 kV boiler feed pump induction motors.'
    ],
    hi: [
      '500 MW थर्मल पावर प्लांटों में 20 Hz इंजेक्शन का उपयोग करके 100% स्टेटर अर्थ फॉल्ट सुरक्षा।',
      'लीडिंग पावर फैक्टर पर चलने वाले हाइड्रो-इलेक्ट्रिक जनरेटर पर लॉस ऑफ फील्ड (ANSI 40) सेट करना।',
      '11 kV बॉयलर फीड पंप मोटरों पर स्टेटर थर्मल रेप्लिका (49) और लॉक्ड-रोटर सुरक्षा (51LR) सेट करना।'
    ],
    bn: [
      '৫০০ MW তাপবিদ্যুৎ কেন্দ্রের জেনারেটরে ২০ Hz ইনজেকশনের মাধ্যমে ১০০% স্টেটর আর্থ ফল্ট সুরক্ষা।',
      'লিডিং পাওয়ার ফ্যাক্টরে পরিচালিত জলবিদ্যুৎ কেন্দ্রে লস অব ফিল্ড (ANSI 40) অফসেট মো সেটিং।',
      '১১ kV বয়লার ফিড পাম্প মোটরে থার্মাল রেপ্লিকা (49) ও লকড-রোটর স্টল সুরক্ষা (51LR) প্রয়োগ।'
    ]
  },
  commonMistakes: {
    en: [
      'Assuming fundamental 59N covers 100% of the generator stator winding: it has an unprotectable dead-zone in the lowest 5% to 10% near the neutral!',
      'Setting reverse power (ANSI 32) without sufficient time delay (e.g. <2 seconds), causing false tripping on momentary power swings during grid synchronizing.',
      'Failing to weight negative-sequence currents (I2) in motor thermal relays, causing rotor bars to burn out while stator thermocouples report normal temperatures.'
    ],
    hi: [
      'यह मानना कि 59N रिले 100% स्टेटर वाइंडिंग की रक्षा करता है: न्यूट्रल के पास 5% से 10% हिस्से में इसका एक अंधा क्षेत्र (dead-zone) होता है!',
      'बिना पर्याप्त समय देरी के रिवर्स पावर (ANSI 32) सेट करना, जिससे ग्रिड सिंक्रोनाइज़ेशन के दौरान हल्के झटकों पर भी मशीन ट्रिप हो जाती है।',
      'मोटर थर्मल रिले में नेगेटिव-सीक्वेंस करंट (I2) की उपेक्षा करना, जिससे रोटर बार पिघल जाते हैं जबकि स्टेटर का तापमान सामान्य रहता है।'
    ],
    bn: [
      'ভেবে নেওয়া যে 59N রিলে ১০০% স্টেটর ওয়াইন্ডিং রক্ষা করে: নিউট্রালের নিকটবর্তী ৫-১০% অংশে এটি কোনো ভোল্টেজ না পেয়ে অন্ধ থাকে!',
      'পর্যাপ্ত সময় বিলম্ব ছাড়া রিভার্স পাওয়ার (ANSI 32) সেট করা, যার ফলে গ্রিডে সিনক্রোনাইজেশনের মৃদু দোলনেই জেনারেটর ভুল ট্রিপ করে।',
      'মোটর থার্মাল রিলেতে নেগেটিভ সিকোয়েন্স কারেন্টের ওজন ফ্যাক্টর বিবেচনা না করা, ফলে স্টেটর ঠান্ডা দেখালেও ভেতরে রোটর পুড়ে কয়লা হয়ে যায়।'
    ]
  },
  keyTakeaways: {
    en: [
      '100% stator ground fault coverage requires combining 59N with 3rd harmonic under-voltage (27TN) or 20 Hz injection.',
      'Loss of excitation (40) is detected via an Offset Mho circle in the -X quadrant on the R-X plane.',
      'Negative sequence current heats the rotor surface at double grid frequency, bounded strictly by the I₂²t = K limit.'
    ],
    hi: [
      '100% स्टेटर अर्थ फॉल्ट कवरेज के लिए 59N को 3rd हार्मोनिक (27TN) या 20 Hz इंजेक्शन के साथ जोड़ना पड़ता है।',
      'उत्तेजना की हानि (40) R-X तल पर -X चतुर्थांश में एक ऑफसेट म्हो वृत्त के माध्यम से पहचानी जाती है।',
      'नेगेटिव सीक्वेंस करंट रोटर की सतह को दोगुनी आवृत्ति पर गर्म करता है, जो I₂²t = K सीमा द्वारा नियंत्रित होता है।'
    ],
    bn: [
      '১০০% স্টেটর সুরক্ষায় 59N এর সাথে ৩য় হারমোনিক (27TN) বা ২০ Hz ইনজেকশনের যৌথ প্রয়োগ অপরিহার্য।',
      'লস অব এক্সাইটেশন (ANSI 40) R-X তলের -X অঞ্চলে অফসেট মো বৃত্তের সাহায্যে নির্ণীত হয়।',
      'ভারসাম্যহীন নেগেটিভ সিকোয়েন্স কারেন্ট রোটরে দ্বিগুণ ফ্রিকোয়েন্সিতে প্রচণ্ড উত্তাপ সৃষ্টি করে, যা I₂²t = K দ্বারা সীমাবদ্ধ।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch17-l08-01',
      question: {
        en: 'Why is a fundamental neutral overvoltage relay (ANSI 59N) alone unable to protect 100% of a generator stator winding against ground faults?',
        hi: 'केवल एक मौलिक न्यूट्रल ओवरवोल्टेज रिले (ANSI 59N) जनरेटर स्टेटर वाइंडिंग के 100% हिस्से को ग्राउंड फॉल्ट से बचाने में असमर्थ क्यों है?',
        bn: 'কেন কেবল একটি ফান্ডামেন্টাল নিউট্রাল ওভারভোল্টেজ রিলে (ANSI 59N) জেনারেটরের স্টেটর ওয়াইন্ডিংয়ের ১০০% অংশকে আর্থ ফল্ট থেকে রক্ষা করতে পারে না?'
      },
      options: [
        { id: 'opt-1', text: { en: 'A fault at or very near the grounded neutral point produces zero fundamental driving voltage, leaving a 5% to 10% unprotected dead zone', hi: 'न्यूट्रल बिंदु पर फॉल्ट होने पर शून्य मौलिक वोल्टेज बनता है, जिससे 5% से 10% असुरक्षित अंधा क्षेत्र रह जाता है', bn: 'নিউট্রাল পয়েন্টে ফল্ট ঘটলে কোনো ড্রাইভিং ফান্ডামেন্টাল ভোল্টেজ তৈরি হয় না, ফলে ৫% থেকে ১০% অংশে অন্ধ অঞ্চল থাকে' } },
        { id: 'opt-2', text: { en: 'The relay operates only on direct current', hi: 'रिले केवल डायरेक्ट करंट पर काम करता है', bn: 'রিলেটি কেবল ডিসিতে কাজ করে' } },
        { id: 'opt-3', text: { en: 'Because copper conductors do not conduct ground currents', hi: 'क्योंकि तांबे के तार ग्राउंड करंट नहीं ले जाते', bn: 'তামার তার গ্রাউন্ড কারেন্ট পরিবহন করে না' } },
        { id: 'opt-4', text: { en: 'The circuit breaker cannot open for ground faults', hi: 'सर्किट ब्रेकर ग्राउंड फॉल्ट के लिए नहीं खुल सकता', bn: 'ব্রেকার আর্থ ফল্টে খুলতে পারে না' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'The voltage driving the neutral grounding transformer is proportional to distance from neutral: V_neutral = (x / L) · V_phase. When x = 0 (fault at neutral), V_neutral = 0 V. Thus, 59N cannot detect faults in the bottom 5–10% of the winding.',
        hi: 'न्यूट्रल वोल्टेज दूरी (x) के समानुपाती होता है। न्यूट्रल पर x = 0 होने से वोल्टेज शून्य होता है, जिसे 59N नहीं पकड़ सकता।',
        bn: 'নিউট্রাল ভোল্টেজ ফল্টের দূরত্বের সমানুপাতিক। নিউট্রালে x = ০ হলে উৎপন্ন ভোল্টেজ ০ ভোল্ট হয়, তাই 59N তলদেশের ৫-১০% অংশের ফল্ট শনাক্তে অক্ষম।'
      }
    },
    {
      id: 'mcq-ch17-l08-02',
      question: {
        en: 'How does the Third-Harmonic Under-Voltage scheme (ANSI 27TN) achieve protection for the neutral end of the generator stator winding?',
        hi: 'तृतीय-हार्मोनिक अंडर-वोल्टेज योजना (ANSI 27TN) जनरेटर स्टेटर वाइंडिंग के न्यूट्रल सिरे के लिए सुरक्षा कैसे प्राप्त करती है?',
        bn: '৩য় হারমোনিক আন্ডার-ভোল্টেজ স্কিম (ANSI 27TN) কীভাবে জেনারেটর স্টেটর ওয়াইন্ডিংয়ের নিউট্রাল প্রান্তের সুরক্ষা নিশ্চিত করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Inherent 3rd-harmonic voltage naturally exists at the neutral; a ground fault near neutral short-circuits this voltage to zero, triggering 27TN', hi: 'न्यूट्रल पर स्वाभाविक रूप से 3rd-हार्मोनिक वोल्टेज होता है; न्यूट्रल के पास फॉल्ट इसे शून्य कर देता है, जिससे 27TN ट्रिप होता है', bn: 'স্বাভাবিকভাবে নিউট্রালে ৩য় হারমোনিক ভোল্টেজ থাকে; নিউট্রালে আর্থ ফল্ট হলে এই ভোল্টেজ শর্ট হয়ে শূন্যে নেমে যায় এবং 27TN ট্রিপ ঘটায়' } },
        { id: 'opt-2', text: { en: 'It multiplies the grid frequency by 10', hi: 'यह ग्रिड आवृत्ति को 10 से गुणा करता है', bn: 'এটি গ্রিডের ফ্রিকোয়েন্সি ১০ গুণ বাড়ায়' } },
        { id: 'opt-3', text: { en: 'It monitors the level of hydrogen coolant in the rotor casing', hi: 'यह रोटर केसिंग में हाइड्रोजन कूलेंट के स्तर की निगरानी करता है', bn: 'এটি রোটরের হাইড্রোজেন কুল্যান্টের স্তর পর্যবেক্ষণ করে' } },
        { id: 'opt-4', text: { en: 'It triggers the carbon dioxide fire extinguisher', hi: 'यह कार्बन डाइऑक्साइड अग्निशामक को सक्रिय करता है', bn: 'এটি অগ্নিনির্বাপক গ্যাস চালু করে দেয়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Synchronous generators naturally produce 3rd-harmonic voltages (typically 1% to 5% of rated voltage) distributed between terminal and neutral. An earth fault near neutral grounds this voltage, causing the neutral 3rd-harmonic to collapse below the 27TN pickup threshold.',
        hi: 'जनरेटर में 3rd हार्मोनिक वोल्टेज स्वाभाविक रूप से मौजूद रहता है। न्यूट्रल के पास फॉल्ट होने पर यह वोल्टेज शून्य हो जाता है और 27TN रिले ट्रिप कर देता है।',
        bn: 'জেনারেটরের নিউট্রালে স্বাভাবিকভাবেই ৩য় হারমোনিক ভোল্টেজ বজায় থাকে। নিউট্রালে ফল্ট হলে এটি মাটিতে শর্ট হয়ে শূন্যে নেমে যায় এবং 27TN আন্ডার-ভোল্টেজ রিলে তাৎক্ষণিক ট্রিপ করে।'
      }
    },
    {
      id: 'mcq-ch17-l08-03',
      question: {
        en: 'What happens physically when a large turbogenerator experiences a Loss of Excitation (ANSI 40)?',
        hi: 'जब एक बड़े टर्बोजनरेटर में उत्तेजना की हानि (Loss of Excitation 40) होती है तो भौतिक रूप से क्या होता है?',
        bn: 'একটি বৃহৎ টার্বো-জেনারেটরে লস অব এক্সাইটেশন (ANSI 40) ঘটলে বাস্তবিকভাবে কী পরিণতি ঘটে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The machine accelerates slightly above synchronous speed, operating as an induction generator and absorbing massive reactive power (-MVAr) from the grid', hi: 'मशीन सिंक्रोनस गति से थोड़ी तेज चलती है, एक इंडक्शन जनरेटर के रूप में काम करती है और ग्रिड से भारी मात्रा में रिएक्टिव पावर (-MVAr) खींचती है', bn: 'মেশিনটি সিনক্রোনাস গতির চেয়ে সামান্য দ্রুত ঘুরে ইন্ডাকশন জেনারেটর হিসেবে কাজ করে এবং গ্রিড থেকে বিপুল পরিমাণ রিঅ্যাক্টিভ পাওয়ার (-MVAr) শোষণ করে' } },
        { id: 'opt-2', text: { en: 'The generator immediately comes to a complete physical standstill', hi: 'जनरेटर तुरंत भौतिक रूप से पूरी तरह रुक जाता है', bn: 'জেনারেটর সাথে সাথে ঘোরা সম্পূর্ণ বন্ধ করে দেয়' } },
        { id: 'opt-3', text: { en: 'The stator windings generate high-voltage radio waves', hi: 'स्टेटर वाइंडिंग उच्च वोल्टेज रेडियो तरंगें उत्पन्न करती हैं', bn: 'স্টেটর থেকে রেডিও তরঙ্গ উৎপন্ন হতে থাকে' } },
        { id: 'opt-4', text: { en: 'The exciter voltage rises to infinity within 10 milliseconds', hi: 'उत्तेजक वोल्टेज 10 मिलीसेकंड के भीतर अनंत हो जाता है', bn: 'এক্সাইটার ভোল্টেজ অসীমে পৌঁছায়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Without field current, magnetic coupling weakens and rotor slips (s > 0). The machine continues generating active power as an induction generator, but absorbs massive reactive power (up to 100% of MVA rating) to magnetize its core, overheating the rotor surface with slip eddy currents.',
        hi: 'फील्ड न होने पर रोटर स्लिप करने लगता है। मशीन इंडक्शन जनरेटर बनकर ग्रिड से भारी रिएक्टिव पावर सोखती है और रोटर की सतह पर भारी करंट बहने से वह गर्म हो जाता है।',
        bn: 'ফিল্ড কারেন্ট না থাকলে রোটর স্লিপ করতে শুরু করে এবং ইন্ডাকশন জেনারেটর হয়ে গ্রিড থেকে বিপুল রিঅ্যাক্টিভ পাওয়ার টেনে রোটরের উপরিভাগ অতিরিক্ত উত্তপ্ত করে ফেলে।'
      }
    },
    {
      id: 'mcq-ch17-l08-04',
      question: {
        en: 'Where does the operating impedance point move on the R-X complex diagram during a generator Loss of Field event?',
        hi: 'जनरेटर लॉस ऑफ फील्ड घटना के दौरान ऑपरेटिंग प्रतिबाधा बिंदु R-X आरेख पर कहाँ जाता है?',
        bn: 'জেনারেটরে লস অব ফিল্ড ঘটার সময় R-X জটিল তলে অপারেটিং ইম্পিডেন্স বিন্দুটি কোন দিকে সরে যায়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'It crosses from the first quadrant into the fourth quadrant (negative reactance -X region), entering the Offset Mho circular boundary', hi: 'यह पहले चतुर्थांश से चौथे चतुर्थांश (ऋणात्मक प्रतिघात -X क्षेत्र) में प्रवेश करता है, ऑफसेट म्हो वृत्त में जाता है', bn: 'এটি ১ম কোয়াড্র্যান্ট থেকে ৪র্থ কোয়াড্র্যান্টে (ঋণাত্মক রিঅ্যাক্ট্যান্স -X অঞ্চল) প্রবেশ করে অফসেট মো বৃত্তের ভেতরে ঢুকে যায়' } },
        { id: 'opt-2', text: { en: 'It moves to infinite positive resistance (+R)', hi: 'यह अनंत धनात्मक प्रतिरोध (+R) की ओर जाता है', bn: 'এটি অসীম পজিটিভ রেজিস্ট্যান্সে চলে যায়' } },
        { id: 'opt-3', text: { en: 'It stays perfectly fixed at zero ohms', hi: 'यह शून्य ओम पर बिल्कुल स्थिर रहता है', bn: 'এটি শূন্য ওহমে স্থির থাকে' } },
        { id: 'opt-4', text: { en: 'It oscillates symmetrically along the positive X-axis', hi: 'यह धनात्मक X-अक्ष के साथ सममित रूप से दोलन करता है', bn: 'এটি পজিটিভ X-অক্ষে দুলতে থাকে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Because the generator is now absorbing reactive power (acting as a large inductive load), Q becomes negative. Apparent impedance Z = V/I drops into the -X region of the R-X diagram, entering the negative-reactance Offset Mho circle.',
        hi: 'रिएक्टिव पावर सोखने के कारण Q नकारात्मक हो जाता है, जिससे प्रतिबाधा R-X ग्राफ के -X क्षेत्र में चली जाती है जहाँ ऑफसेट म्हो रिले लगा होता है।',
        bn: 'জেনারেটর রিঅ্যাক্টিভ পাওয়ার শোষণ করায় Q ঋণাত্মক হয় এবং আপাত ইম্পিডেন্স R-X তলের -X কোয়াড্র্যান্টে অবস্থিত অফসেট মো বৃত্তের ভেতরে প্রবেশ করে।'
      }
    },
    {
      id: 'mcq-ch17-l08-05',
      question: {
        en: 'Why do unbalanced stator currents (negative-sequence currents, I2) cause dangerous overheating specifically in synchronous generator rotors?',
        hi: 'असंतुलित स्टेटर धाराएं (नेगेटिव-सीक्वेंस, I2) विशेष रूप से सिंक्रोनस जनरेटर रोटर में खतरनाक हीटिंग क्यों पैदा करती हैं?',
        bn: 'কেন ভারসাম্যহীন স্টেটর কারেন্ট (নেগেটিভ সিকোয়েন্স, I2) সিনক্রোনাস জেনারেটরের রোটরে বিপজ্জনক মাত্রাতিরিক্ত উত্তাপের সৃষ্টি করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The negative-sequence magnetic field rotates backwards at synchronous speed, cutting the forward-moving rotor at DOUBLE frequency (100 Hz), inducing massive eddy currents in rotor wedges and retaining rings', hi: 'नेगेटिव-सीक्वेंस फ्लक्स विपरीत दिशा में घूमता है, जिससे रोटर में दोगुनी आवृत्ति (100 Hz) की भारी एड़ी धाराएं प्रेरित होती हैं जो रोटर वेज को गर्म करती हैं', bn: 'নেগেটিভ-সিকোয়েন্স চৌম্বকক্ষেত্র বিপরীত দিকে ঘোরে, ফলে সামনে ঘূর্ণায়মান রোটরকে দ্বিগুণ কম্পাঙ্কে (১০০ Hz) কর্তন করে রোটর ওয়েজ ও রিংয়ে ব্যাপক এডি কারেন্ট উৎপন্ন করে' } },
        { id: 'opt-2', text: { en: 'Negative sequence current destroys the generator exciter diodes by reversing polarity', hi: 'यह डायोड की ध्रुवीयता को उलट देता है', bn: 'এটি এক্সাইটার ডায়োড নষ্ট করে' } },
        { id: 'opt-3', text: { en: 'It cools the rotor below the dew point, causing condensation', hi: 'यह रोटर को बहुत ठंडा कर देता है', bn: 'এটি রোটরে জলীয়বাষ্প জমা করে' } },
        { id: 'opt-4', text: { en: 'It creates lightning strikes inside the hydrogen cooling tank', hi: 'यह हाइड्रोजन टैंक के अंदर बिजली पैदा करता है', bn: 'এটি হাইড্রোজেন ট্যাংকে বজ্রপাত ঘটায়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Positive-sequence stator field rotates synchronously with the rotor (relative speed = 0). Negative-sequence field rotates at -ωs. The relative speed seen by the rotor is ωs - (-ωs) = 2·ωs (100 Hz in a 50 Hz system), driving intense surface eddy currents governed by I2²t = K.',
        hi: 'नेगेटिव सीक्वेंस फ्लक्स विपरीत घूमता है, जिससे रोटर को 2*f (100 Hz) का फ्लक्स दिखता है। इससे रोटर की सतह पर भारी करंट बहता है जो रोटर वेज को पिघला सकता है।',
        bn: 'নেগেটিভ সিকোয়েন্স ফিল্ড উল্টো দিকে ঘোরার ফলে রোটরের সাপেক্ষে এর আপেক্ষিক গতি হয় দ্বিগুণ (১০০ Hz)। এতে রোটরের খাঁজে ও স্লটে ভয়াবহ এডি কারেন্ট সৃষ্টি হয়ে রোটর বিনষ্ট হতে পারে।'
      }
    },
    {
      id: 'mcq-ch17-l08-06',
      question: {
        en: 'What dangerous consequence occurs if reverse power (ANSI 32) protection fails when the main steam stop valves of a turbogenerator close while grid connected?',
        hi: 'यदि टर्बोजनरेटर के मुख्य स्टीम वाल्व बंद होने पर रिवर्स पावर (ANSI 32) सुरक्षा विफल हो जाती है, तो क्या खतरनाक परिणाम होता है?',
        bn: 'টার্বো-জেনারেটরের স্টিম ভালভ বন্ধ হয়ে গেলেও গ্রিড সংযুক্ত অবস্থায় রিভার্স পাওয়ার (ANSI 32) সুরক্ষা ব্যর্থ হলে কী মারাত্মক ক্ষতি হতে পারে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The generator acts as a synchronous motor driving the turbine; without steam cooling, windage friction overheats and deforms turbine exhaust blades within 60 seconds', hi: 'जनरेटर एक मोटर के रूप में टरबाइन को घुमाता है; बिना भाप के, वायु घर्षण टरबाइन के अंतिम ब्लेडों को 60 सेकंड में पिघला देता है', bn: 'জেনারেটর মোটর হয়ে টারবাইন ঘোরাতে থাকে; স্টিম কুলিং না থাকায় বাতাসের ঘর্ষণে ৬০ সেকেন্ডের মধ্যে টারবাইন ব্লেড অতিরিক্ত উত্তপ্ত হয়ে গলে যায়' } },
        { id: 'opt-2', text: { en: 'The generator turns backwards and pumps water into the boiler', hi: 'जनरेटर उल्टा घूमता है और बॉयलर में पानी पंप करता है', bn: 'জেনারেটর উল্টো ঘুরে বয়লারে পানি পাম্প করে' } },
        { id: 'opt-3', text: { en: 'The generator neutral grounding transformer explodes instantly', hi: 'न्यूट्रल ट्रांसफार्मर तुरंत फट जाता है', bn: 'নিউট্রাল ট্রান্সফরমার সাথে সাথে বিস্ফোরিত হয়' } },
        { id: 'opt-4', text: { en: 'The excitation transformer changes into a permanent magnet', hi: 'उत्तेजना ट्रांसफार्मर स्थायी चुंबक में बदल जाता है', bn: 'ট্রান্সফরমার স্থায়ী চুম্বকে পরিণত হয়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Without steam flow to carry away heat, rotating blades churning trapped stagnant steam generate tremendous aerodynamic windage heat. Low-pressure exhaust hood temperatures spike, leading to blade failure. Sensitive directional power relays trip at -0.5% to -1.5% rated power.',
        hi: 'भाप न होने पर टरबाइन ब्लेड हवा के घर्षण से अत्यधिक गर्म हो जाते हैं और 1 मिनट के भीतर विकृत हो सकते हैं। ANSI 32 रिले तुरंत जनरेटर को अलग करता है।',
        bn: 'বাষ্প প্রবাহ না থাকলে টারবাইনের রোটর ব্লেড আবদ্ধ বাতাসে প্রচণ্ড ঘর্ষণে মাত্র ১ মিনিটের মধ্যে মাত্রাতিরিক্ত উত্তপ্ত হয়ে বেঁকে যায় বা ভেঙে যায়। ANSI 32 রিলে মেশিন ট্রিপ করিয়ে এটি বাঁচায়।'
      }
    },
    {
      id: 'mcq-ch17-l08-07',
      question: {
        en: 'In large industrial induction motor protection, what is the engineering purpose of a "Starts-per-Hour" limit element?',
        hi: 'बड़ी औद्योगिक इंडक्शन मोटर सुरक्षा में "स्टार्ट्स-प्रति-घंटा" (Starts-per-Hour) सीमा तत्व का क्या उद्देश्य है?',
        bn: 'বৃহৎ শিল্প কারখানার মোটরের সুরক্ষায় "স্টার্টস-পার-আওয়ার" সীমাবদ্ধতা প্রয়োগের প্রধান উদ্দেশ্য কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'To prevent cumulative thermal destruction of squirrel-cage rotor bars and stator insulation caused by repeated 6x starting inrush currents', hi: 'बार-बार 6 गुना स्टार्टिंग करंट के कारण रोटर बार और स्टेटर इंसुलेशन के संचयी थर्मल विनाश को रोकने के लिए', bn: 'বারবার ৬ গুণ স্টার্টিং কারেন্ট টানার ফলে রোটর বার ও স্টেটর ইনসুলেশনের ক্রমবর্ধমান তাপীয় ধ্বংসযজ্ঞ রোধ করতে' } },
        { id: 'opt-2', text: { en: 'To limit the monthly electricity bill of the factory', hi: 'कारखाने के बिजली बिल को सीमित करने के लिए', bn: 'কারখানার মাসিক বিদ্যুৎ বিল নিয়ন্ত্রণে রাখতে' } },
        { id: 'opt-3', text: { en: 'To synchronize the motor speed with the plant lunch schedule', hi: 'मोटर गति को लंच शेड्यूल के साथ मिलाने के लिए', bn: 'মোটরের গতি দুপুরের খাবারের সময়ের সাথে মেলাতে' } },
        { id: 'opt-4', text: { en: 'To lubricate the bearing oil automatically', hi: 'बियरिंग तेल को स्वचालित रूप से लुब्रिकेट करने के लिए', bn: 'বিয়ারিংয়ে স্বয়ংক্রিয়ভাবে তেল দিতে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Motor starting draws 5 to 7 times rated current, causing rapid resistive heating (I²R is 25–50 times normal). Motors are thermally rated for typically 2 cold starts or 1 hot start per hour to allow accumulated heat to dissipate safely.',
        hi: 'स्टार्टिंग के दौरान मोटर 6 गुना करंट खींचती है। बार-बार शुरू करने से रोटर बार जल सकते हैं। रिले प्रति घंटे स्टार्ट की संख्या (उदा. 2 कोल्ड या 1 हॉट) को सीमित करता है।',
        bn: 'মোটর চালুর সময় ৫-৭ গুণ কারেন্ট প্রবাহিত হওয়ায় উত্তাপ স্বাভাবিকের চেয়ে ২৫-৫০ গুণ বেশি হয়। রোটর ও ইনসুলেশন ঠান্ডা হওয়ার জন্য প্রতি ঘণ্টায় মোটর চালুর সংখ্যা (সাধারণত ১-২ বার) সীমিত রাখা হয়।'
      }
    },
    {
      id: 'mcq-ch17-l08-08',
      question: {
        en: 'If a 100 MW generator has a negative sequence rating of K = 10 s, how long can it withstand an unbalance of I2 = 0.5 p.u. before tripping?',
        hi: 'यदि 100 MW जनरेटर की नेगेटिव सीक्वेंस रेटिंग K = 10 s है, तो ट्रिप होने से पहले यह I2 = 0.5 p.u. के असंतुलन को कितने समय तक सहन कर सकता है?',
        bn: 'যদি একটি ১০০ MW জেনারেটরের নেগেটিভ সিকোয়েন্স রেটিং K = ১০ s হয়, তবে I2 = ০.৫ p.u. ভারসাম্যহীন অবস্থায় ট্রিপ করার পূর্বে এটি কতক্ষণ টিকতে পারবে?'
      },
      options: [
        { id: 'opt-1', text: { en: '40.0 seconds', hi: '40.0 सेकंड', bn: '৪০.০ সেকেন্ড' } },
        { id: 'opt-2', text: { en: '20.0 seconds', hi: '20.0 सेकंड', bn: '২০.০ সেকেন্ড' } },
        { id: 'opt-3', text: { en: '5.0 seconds', hi: '5.0 सेकंड', bn: '৫.০ সেকেন্ড' } },
        { id: 'opt-4', text: { en: '100.0 seconds', hi: '100.0 सेकंड', bn: '১০০.০ সেকেন্ড' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 't = K / (I2)² = 10.0 / (0.5)² = 10.0 / 0.25 = 40.0 seconds.',
        hi: 't = K / (I2)² = 10 / (0.5)² = 10 / 0.25 = 40.0 सेकंड।',
        bn: 't = K / (I2)² = ১০.০ / (০.৫)² = ১০.০ / ০.২৫ = ৪০.০ সেকেন্ড।'
      }
    }
  ]
};
