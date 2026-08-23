import { Lesson } from '../types';

export const LESSON_TRANSFORMER_TYPES_CONSTRUCTION: Lesson = {
  id: 'lsn-ch6-transformer-types-construction',
  topicId: 'ch6-transformer-types-construction',
  chapterId: 'ch-electrical-machines',
  order: 14,
  title: {
    en: 'Transformer Types, Construction & Cooling Methods',
    hi: 'ट्रांसफॉर्मर के प्रकार, संरचना एवं शीतलन (Cooling) विधियाँ',
    bn: 'ট্রান্সফর্মারের প্রকারভেদ, গঠন ও শীতলীকরণ (Cooling) পদ্ধতি'
  },
  description: {
    en: 'Detailed engineering analysis of transformer structural archetypes (Core-Type, Shell-Type, Berry-Type), concentric and interleaved sandwich winding topologies, why LV is placed adjacent to the core, transformer ancillary fittings (conservator, silica gel breather, Buchholz protective relay, OLTC tap changers, bushings), all-day efficiency vs commercial efficiency, complete cooling classifications (AN, AF, ONAN, ONAF, OFAF, OFWF), autotransformer copper savings, and fully worked industrial numericals.',
    hi: 'ट्रांसफॉर्मर संरचनात्मक प्रकारों (कोर-टाइप, शेल-टाइप, बेरी-टाइप), संकेंद्रित व सैंडविच वाइंडिंग, LV वाइंडिंग को कोर के पास रखने का वैज्ञानिक कारण, ट्रांसफॉर्मर सहायक उपकरण (कंज़र्वेटर, सिलिका जेल ब्रीदर, बुखोल्ज रिले, OLTC, बुशिंग), ऑल-डे दक्षता, शीतलन विधियाँ (AN, AF, ONAN, ONAF, OFAF, OFWF), ऑटो-ट्रांसफॉर्मर कॉपर बचत एवं विस्तृत न्यूमेरिकल।',
    bn: 'ট্রান্সফরমার কাঠামোগত ধরন (কোর-টাইপ, শেল-টাইপ, বেরি-টাইপ), সমকেন্দ্রী ও স্যান্ডউইচ ওয়াইন্ডিং বিন্যাস, LV ওয়াইন্ডিং কোরের পাশে রাখার বৈজ্ঞানিক কারণ, সহায়ক যন্ত্রাংশ (কনজারভেটর, সিলিকা জেল ব্রিদার, বুখোলজ রিলে, OLTC, বুশিং), অল-ডে দক্ষতা, সম্পূর্ণ কুলিং পদ্ধতি (AN, AF, ONAN, ONAF, OFAF, OFWF), অটো-ট্রান্সফরমার কপার সঞ্চয় এবং গাণিতিক সমস্যার বিশদ সমাধান।'
  },
  estimatedMinutes: 45,
  easyExplanation: {
    en: 'Transformers are built in different mechanical styles depending on their operating voltage and power capacity. In a Core-Type transformer, the copper windings surround the two vertical iron limbs. In a Shell-Type transformer, the iron core surrounds and protects the windings like an armored shell. The Low Voltage (LV) winding is always wound directly next to the grounded iron core, while the High Voltage (HV) winding sits on the outside—this drastically cuts down the required insulation thickness and overall cost. Because heavy currents produce internal heat (I²R copper loss and core iron loss), transformers need specialized cooling systems ranging from simple air circulation (Dry-Type) to oil-immersed natural circulation (ONAN), forced air fans (ONAF), or pumped oil with water heat exchangers (OFWF). Ancillary protection units like the Buchholz gas relay detect internal electrical faults before catastrophic fires occur.',
    hi: 'ट्रांसफॉर्मर अपनी क्षमता और वोल्टेज के अनुसार विभिन्न संरचनाओं में बनाए जाते हैं। कोर-टाइप में तांबे की वाइंडिंग लोहे के दोनों लिम्बों को घेरे रहती है, जबकि शेल-टाइप में लोहे की कोर वाइंडिंग को चारों तरफ से कवच की तरह घेरे रखती है। लो वोल्टेज (LV) वाइंडिंग को हमेशा अर्थ की गई कोर के सबसे पास लपेटा जाता है और हाई वोल्टेज (HV) को बाहर—इससे इन्सुलेशन की मोटाई और लागत बहुत कम हो जाती है। आंतरिक हानियों से उत्पन्न गर्मी को दूर करने के लिए विभिन्न कूलिंग विधियाँ अपनाई जाती हैं, जैसे प्राकृतिक हवा (Dry-Type), तेल में डूबा हुआ प्राकृतिक संवहन (ONAN), पंखों द्वारा हवा (ONAF), या पंप द्वारा तेल और पानी (OFWF)। बुखोल्ज रिले आंतरिक दोषों को भांपकर तुरंत सुरक्षा प्रदान करता है।',
    bn: 'ট্রান্সফরমার তাদের ভোল্টেজ ও শক্তির সক্ষমতার ওপর ভিত্তি করে বিভিন্ন কাঠামোতে তৈরি করা হয়। কোর-টাইপ ট্রান্সফরমারে তামার ওয়াইন্ডিং কোরের দুটি উলম্ব বাহুকে ঘিরে থাকে, অন্যদিকে শেল-টাইপ ট্রান্সফরমারে লোহার কোর ওয়াইন্ডিংকে বর্মের মতো ঘিরে রাখে। লো ভোল্টেজ (LV) ওয়াইন্ডিংকে সর্বদা গ্রাউন্ডেড কোরের সাথে সংলগ্ন করে পেঁচানো হয় এবং হাই ভোল্টেজ (HV) বাইরে থাকে—এর ফলে প্রয়োজনীয় ইনসুলেশন স্তর অনেক পাতলা রাখা সম্ভব হয় ও খরচ কমে। অভ্যন্তরীণ তাপ অপসারণের জন্য বিভিন্ন শীতলীকরণ পদ্ধতি ব্যবহৃত হয়, যেমন সাধারণ বাতাস (Dry-Type), তেলে নিমজ্জিত প্রাকৃতিক সঞ্চালন (ONAN), ফ্যান দ্বারা জোরপূর্বক বাতাস (ONAF), কিংবা পাম্পের সাহায্যে তেল ও পানি (OFWF)। বুখোলজ রিলে অভ্যন্তরীণ ত্রুটি শনাক্ত করে মারাত্মক দুর্ঘটনা থেকে রক্ষা করে।'
  },
  detailedExplanation: {
    en: `1. Transformer Constructional Classifications:
- Core-Type Transformer:
  * Structure: Has two vertical limbs (legs) and two horizontal yokes. Windings encircle the iron core limbs.
  * Magnetic Circuit: Single magnetic path where total flux Φ passes through both limbs.
  * Windings: Concentric cylindrical coils.
  * Thermal & Maintenance: Better natural heat dissipation, easier inspection and maintenance. Favored for high-voltage, high-power transmission.
- Shell-Type Transformer:
  * Structure: Core surrounds the copper coils like a protective shell. Has a central limb and two outer limbs.
  * Magnetic Circuit: Dual parallel magnetic paths. The central limb carries the total flux Φ, while each outer limb carries half flux (Φ/2). Central limb width is double the outer limbs.
  * Windings: Sandwich / interleaved coils (coils layered in disc sections).
  * Mechanical Strength: Higher resistance to electromagnetic forces during short-circuits. Favored for low-voltage, heavy-current applications.

2. Why LV Winding is Placed Adjacent to the Iron Core:
1. Insulation Economy: Placing the Low Voltage (LV) winding next to the grounded core requires insulation rated only for LV potential. If HV were placed against the core, heavy, expensive insulation would be required between winding and ground.
2. Mechanical Safety: Reduces dielectric puncture stress on core edges.
3. Tap-Changer Accessibility: Placing HV on the outside makes tapping leads accessible for voltage adjustment (Off-load & On-Load Tap Changers - OLTC).

3. Transformer Cooling Methods:
- Dry Type:
  * Air Natural (AN): Natural convection for small indoor units (< 25 kVA).
  * Air Blast (AF): Forced air fans for medium indoor units (< 5 MVA).
- Oil Immersed:
  * ONAN (Oil Natural Air Natural): Transformer oil circulates by natural thermal siphon convection, cooling via radiator fins with ambient air. (Standard for distribution transformers up to 30 MVA).
  * ONAF (Oil Natural Air Forced): Oil circulates naturally, but external fans blow air over radiator fins.
  * OFAF (Oil Forced Air Forced): Oil is pumped through external heat exchangers with forced air fans.
  * OFWF (Oil Forced Water Forced): Oil pumped through water-cooled heat exchangers (hydroelectric & thermal stations).

4. Key Transformer Fittings & Protection:
- Conservator Tank: Expansion vessel mounted above main tank accommodating oil volume changes with temperature.
- Silica Gel Breather: Traps moisture from inhaled air. Turns from deep blue (dry active) to pink (moisture saturated).
- Buchholz Relay: Gas-actuated safety relay installed in pipe between main tank and conservator. Detects slow gas accumulation (alarm) and violent oil surges (trip).

5. All-Day Efficiency:
- All-Day Efficiency = (Energy Output in kWh over 24 hours) / (Energy Input in kWh over 24 hours)
- Distribution transformers are energized 24 hours a day with variable load, so they are designed for maximum efficiency at 50–70% load by minimizing iron losses.`,
    hi: `1. ट्रांसफॉर्मर संरचना के प्रकार:
- कोर-टाइप (Core-Type):
  * वाइंडिंग कोर के दोनों लिम्बों को घेरे रहती है। एकल चुंबकीय परिपथ।
  * सिलेंड्रिकल कॉन्सेंट्रिक वाइंडिंग। उच्च वोल्टेज ट्रांसमिशन के लिए उपयुक्त।
- शेल-टाइप (Shell-Type):
  * कोर वाइंडिंग को घेरे रहती है। मध्य लिम्ब में कुल फ्लक्स Φ तथा बाहरी लिम्बों में आधा-आधा फ्लक्स (Φ/2) बहता है।
  * सैंडविच वाइंडिंग। भारी धारा और कम वोल्टेज के लिए उपयुक्त।

2. LV वाइंडिंग को कोर के पास क्यों रखा जाता है:
- इंसुलेशन बचत: लो-वोल्टेज वाइंडिंग और अर्थ कोर के बीच कम इंसुलेशन की आवश्यकता होती है।
- HV बाहर होने से टैपिंग और ऑन-लोड टैप चेंजर (OLTC) लगाना सुगम होता है।

3. कूलिंग विधियाँ:
- AN (Air Natural) & AF (Air Forced)
- ONAN (Oil Natural Air Natural): 30 MVA तक के वितरण ट्रांसफॉर्मर में प्रयुक्त।
- ONAF (Oil Natural Air Forced) & OFAF (Oil Forced Air Forced)
- OFWF (Oil Forced Water Forced): हाइड्रो पावर प्लांट में प्रयुक्त।

4. प्रमुख सुरक्षा घटक:
- कंज़र्वेटर टैंक: तेल के तापीय प्रसार को समाहित करता है।
- सिलिका जेल ब्रीदर: नमी सोखता है (सूखा: नीला, संतृप्त: गुलाबी)।
- बुखोल्ज रिले: आंतरिक गैस व तेल के दबाव को भांपकर ट्रिप कराता है।

5. ऑल-डे दक्षता:
- 24 घंटे में कुल आउटपुट kWh / कुल इनपुट kWh। वितरण ट्रांसफॉर्मर में कोर लॉस को न्यूनतम रखकर इसे 50-70% लोड पर अधिकतम बनाया जाता है।`,
    bn: `১. ট্রান্সফরমারের কাঠামোগত প্রকারভেদ:
- কোর-টাইপ (Core-Type):
  * কয়েল বা ওয়াইন্ডিং কোরের বাহুকে ঘিরে থাকে। একক চৌম্বক পথ।
  * উচ্চ ভোল্টেজ সঞ্চালনে উপযোগী।
- শেল-টাইপ (Shell-Type):
  * কোরের দুটি সমান্তরাল পথ ওয়াইন্ডিংকে বর্মের মতো ঘিরে রাখে। মধ্য বাহুতে মোট ফ্লাক্স Φ এবং বাইরের দুই বাহুতে অর্ধেক ফ্লাক্স (Φ/2) থাকে।
  * স্যান্ডউইচ ওয়াইন্ডিং। উচ্চ কারেন্টে উপযোগী।

২. LV ওয়াইন্ডিং কোরের কাছে রাখার কারণ:
- ইনসুলেশনের খরচ কমানো: গ্রাউন্ডেড কোরের সাথে লো ভোল্টেজ ওয়াইন্ডিংয়ের ইনসুলেশন স্তর অনেক পাতলা লাগে।
- HV বাইরে থাকায় ট্যাপ চেঞ্জিং সুবিধা পাওয়া যায়।

৩. শীতলীকরণ (Cooling) পদ্ধতি:
- ONAN: প্রাকৃতিক তেল ও বাতাস সঞ্চালন (স্ট্যান্ডার্ড ডিস্ট্রিবিউশন)।
- ONAF: প্রাকৃতিক তেল ও ফ্যানের মাধ্যমে জোরপূর্বক বাতাস।
- OFAF ও OFWF: পাম্পের সাহায্যে তেল সঞ্চালন এবং পানি দ্বারা শীতলীকরণ।

৪. সহায়ক প্রতিরক্ষামূলক যন্ত্রাংশ:
- কনজারভেটর ট্যাংক: তেলের আয়তন পরিবর্তন গ্রহণ করে।
- সিলিকা জেল ব্রিদার: বাতাস থেকে জলীয় বাষ্প শোষণ করে (শুষ্ক: নীল, আর্দ্র: গোলাপি)।
- বুখোলজ রিলে: অভ্যন্তরীণ ত্রুটিতে গ্যাস নিঃসরণ ও তেলের চাপ শনাক্ত করে অ্যালার্ম ও ট্রিপ প্রদান করে।

৫. অল-ডে কর্মদক্ষতা:
- ২৪ ঘণ্টায় মোট শক্তি আউটপুট (kWh) / মোট শক্তি ইনপুট (kWh)। ডিস্ট্রিবিউশন ট্রান্সফরমারে ৫০–৭০% লোডে সর্বোচ্চ দক্ষতা রাখা হয়।`
  },
  formulas: [
    {
      id: 'f-all-day-eff',
      symbol: 'η_all-day',
      expression: 'η_all-day = (Output kWh over 24h) / (Output kWh + Total Losses kWh over 24h) × 100%',
      formula: '\\eta_{\\text{all-day}} = \\frac{\\sum (P_{\\text{out}} \\times t)}{\\sum (P_{\\text{out}} \\times t) + 24 \\cdot P_i + \\sum (P_{cu} \\times t)} \\times 100\\%',
      title: {
        en: 'All-Day Energy Efficiency (24-Hour Cycle)',
        hi: 'ऑल-डे ऊर्जा दक्षता (24-घंटे चक्र)',
        bn: 'অল-ডে শক্তি কর্মদক্ষতা (২৪-ঘণ্টা চক্র)'
      },
      description: {
        en: 'Ratio of total electrical energy output in kWh to total electrical energy input in kWh over a continuous 24-hour day.',
        hi: '24 घंटे के निरंतर चक्र में कुल आउटपुट kWh और कुल इनपुट kWh का अनुपात।',
        bn: '২৪ ঘণ্টার চক্রে মোট আউটপুট শক্তি (kWh) এবং মোট ইনপুট শক্তির (kWh) অনুপাত।'
      }
    },
    {
      id: 'f-copper-savings-auto',
      symbol: 'W_auto / W_2wdg',
      expression: 'Weight of Cu in Auto = (1 - K) × Weight of Cu in 2-Winding',
      formula: '\\frac{W_{\\text{auto}}}{W_{\\text{2-wdg}}} = 1 - K = 1 - \\frac{V_2}{V_1} \\quad (V_1 > V_2)',
      title: {
        en: 'Autotransformer Copper Weight Savings',
        hi: 'ऑटो-ट्रांसफॉर्मर कॉपर भार बचत',
        bn: 'অটো-ট্রান্সফরমার কপার ওজনের সাশ্রয়'
      },
      description: {
        en: 'Fractional copper weight required in an autotransformer compared to a conventional 2-winding transformer with step-down ratio K.',
        hi: '2-वाइंडिंग ट्रांसफॉर्मर की तुलना में ऑटो-ट्रांसफॉर्मर में आवश्यक तांबे के भार का अनुपात (1 - K)।',
        bn: 'সাধারণ ২-ওয়াইন্ডিং ট্রান্সফর্মারের তুলনায় অটো-ট্রান্সফরমারে কপার ওজনের সাশ্রয় অনুপাত (১ - K)।'
      }
    },
    {
      id: 'f-copper-loss-fraction',
      symbol: 'P_cu(x)',
      expression: 'P_cu(x) = x² · P_cu(full-load)',
      formula: 'P_{cu}(x) = x^2 \\cdot P_{cu(\\text{FL})}',
      title: {
        en: 'Fractional Load Copper Loss',
        hi: 'आंशिक भार पर कॉपर हानि',
        bn: 'আংশিক লোডে কপার লস'
      },
      description: {
        en: 'Copper loss at any fractional loading x (x = I / I_rated) varies as the square of the loading factor.',
        hi: 'लोडिंग अनुपात x के वर्ग के समानुपाती कॉपर हानि।',
        bn: 'লোডিং ফ্যাক্টর x-এর বর্গের সমানুপাতিক কপার লস।'
      }
    }
  ],
  solvedExamples: [
    {
      id: 'ex-trans-all-day-1',
      problem: {
        en: 'A 20 kVA, 50 Hz distribution transformer has a full-load rated copper loss of 300 W and constant core loss of 200 W. During a 24-hour day, it operates as follows:\n- 6 hours on Full Load (20 kW at unity pf)\n- 8 hours on Half Load (10 kW at unity pf)\n- 6 hours on One-Quarter Load (5 kW at unity pf)\n- 4 hours on No Load (0 kW)\nCalculate the All-Day Efficiency of the transformer.',
        hi: 'एक 20 kVA ट्रांसफॉर्मर में फुल-लोड कॉपर हानि 300 W और कोर हानि 200 W है। 24 घंटे में इसका लोड चक्र: 6 घंटे फुल लोड, 8 घंटे हाफ लोड, 6 घंटे 1/4 लोड, 4 घंटे नो लोड। ऑल-डे दक्षता ज्ञात कीजिए।',
        bn: 'একটি ২০ kVA ট্রান্সফর্মারের ফুল-লোড কপার লস ৩০০ W এবং কোর লস ২০০ W। ২৪ ঘণ্টায় লোড চক্র: ৬ ঘণ্টা ফুল লোড, ৮ ঘণ্টা হাফ লোড, ৬ ঘণ্টা ১/৪ লোড এবং ৪ ঘণ্টা নো লোড। অল-ডে কর্মদক্ষতা নির্ণয় করো।'
      },
      givenValues: {
        'Rating S': '20 kVA',
        'Pi (Core Loss)': '200 W = 0.20 kW (constant 24h)',
        'Pcu(FL)': '300 W = 0.30 kW',
        'Loading Schedule': '6h @ 100%, 8h @ 50%, 6h @ 25%, 4h @ 0%'
      },
      solution: {
        en: '1. Total Energy Output in 24 hours:\n- W_out = (20 kW × 6 h) + (10 kW × 8 h) + (5 kW × 6 h) + (0 kW × 4 h)\n- W_out = 120 + 80 + 30 + 0 = 230 kWh.\n\n2. Total Core Loss Energy (Iron loss runs 24h continuously):\n- W_iron = 0.20 kW × 24 h = 4.80 kWh.\n\n3. Total Copper Loss Energy:\n- Full load (x=1.0): 0.30 kW × (1.0)² × 6 h = 1.80 kWh\n- Half load (x=0.5): 0.30 kW × (0.5)² × 8 h = 0.30 × 0.25 × 8 = 0.60 kWh\n- 1/4 load (x=0.25): 0.30 kW × (0.25)² × 6 h = 0.30 × 0.0625 × 6 = 0.1125 kWh\n- No load (x=0): 0 kWh\n- Total W_cu = 1.80 + 0.60 + 0.1125 = 2.5125 kWh.\n\n4. Total Input Energy:\n- W_in = W_out + W_iron + W_cu = 230 + 4.80 + 2.5125 = 237.3125 kWh.\n\n5. All-Day Efficiency:\n- η_all-day = (230 / 237.3125) × 100% = 96.918% ≈ 96.92%.',
        hi: '1. कुल आउटपुट ऊर्जा = 120 + 80 + 30 = 230 kWh।\n2. 24 घंटे में कोर हानि = 0.20 × 24 = 4.80 kWh।\n3. कॉपर हानि = 1.80 + 0.60 + 0.1125 = 2.5125 kWh।\n4. कुल इनपुट = 237.3125 kWh।\n5. ऑल-डे दक्षता = (230 / 237.3125) × 100 = 96.92%।',
        bn: '১. মোট আউটপুট শক্তি = ১২০ + ৮০ + ৩০ = ২৩০ kWh।\n২. ২৪ ঘণ্টায় কোর লস = ০.২০ × ২৪ = ৪.৮০ kWh।\n৩. কপার লস = ১.৮০ + ০.৬০ + ০.১১২৫ = ২.৫১২৫ kWh।\n৪. মোট ইনপুট = ২৩৭.৩১২৫ kWh।\n৫. অল-ডে দক্ষতা = (২৩০ / ২৩৭.৩১২৫) × ১০০ = ৯৬.৯২%।'
      },
      finalAnswer: {
        en: 'Total Output = 230 kWh, Total Losses = 7.3125 kWh, All-Day Efficiency = 96.92%',
        hi: 'कुल आउटपुट = 230 kWh, कुल हानियाँ = 7.3125 kWh, ऑल-डे दक्षता = 96.92%',
        bn: 'মোট আউটপুট = ২৩০ kWh, মোট লস = ৭.৩১২৫ kWh, অল-ডে দক্ষতা = ৯৬.৯২%'
      }
    },
    {
      id: 'ex-trans-copper-saving-2',
      problem: {
        en: 'A 2400/240 V, 10 kVA two-winding transformer is reconnected as a step-down autotransformer with a 2640 V primary and 2400 V secondary. Calculate: 1) The transformation ratio K, 2) The kVA rating as an autotransformer, 3) Percentage saving of copper.',
        hi: 'एक 2400/240 V, 10 kVA 2-वाइंडिंग ट्रांसफॉर्मर को 2640/2400 V ऑटो-ट्रांसफॉर्मर के रूप में जोड़ा गया है। ज्ञात कीजिए: 1) K, 2) ऑटो-ट्रांसफॉर्मर kVA रेटिंग, 3) कॉपर की प्रतिशत बचत।',
        bn: 'একটি ২৪০০/২৪০ V, ১০ kVA ২-ওয়াইন্ডিং ট্রান্সফরমারকে ২৬৪০/২৪০০ V অটো-ট্রান্সফরমারে রূপান্তর করা হলো। নির্ণয় করো: ১) K, ২) অটো-ট্রান্সফরমারের kVA রেটিং, ৩) কপার সাশ্রয়ের শতকরা হার।'
      },
      givenValues: {
        'V1 (Auto Primary)': '2640 V',
        'V2 (Auto Secondary)': '2400 V',
        'Two-Winding Rating': '10 kVA',
        'Common Winding Voltage': '2400 V',
        'Series Winding Voltage': '240 V'
      },
      solution: {
        en: '1. Transformation Ratio K = V2 / V1 = 2400 / 2640 = 0.9091.\n2. Series winding rated current I_series = 10,000 VA / 240 V = 41.67 A.\n   Input current to autotransformer = 41.67 A at 2640 V.\n   Autotransformer kVA Rating = 2640 V × 41.67 A = 110.0 kVA.\n   (An 11× increase in capacity due to direct conductive energy transfer!).\n3. Percentage copper saving = K × 100% = (2400 / 2640) × 100% = 90.91%.',
        hi: '1. K = 2400 / 2640 = 0.9091।\n2. ऑटो-ट्रांसफॉर्मर क्षमता = 2640 × 41.67 = 110.0 kVA (11 गुना वृद्धि!)।\n3. कॉपर की बचत = K × 100 = 90.91%।',
        bn: '১. K = ২৪০০ / ২৬৪০ = ০.৯০৯১।\n২. অটো-ট্রান্সফরমার ক্ষমতা = ২৬৪০ × ৪১.৬৭ = ১১০.০ kVA (১১ গুণ বৃদ্ধি!)।\n৩. কপার সাশ্রয় = K × ১০০ = ৯০.৯১%।'
      },
      finalAnswer: {
        en: 'Transformation ratio K = 0.9091, Autotransformer Rating = 110 kVA, Copper Saving = 90.91%',
        hi: 'रूपांतरण अनुपात K = 0.9091, क्षमता = 110 kVA, कॉपर बचत = 90.91%',
        bn: 'রূপান্তর অনুপাত K = ০.৯০৯১, রেটিং = ১১০ kVA, কপার সাশ্রয় = ৯০.৯১%'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Industrial Distribution Substations: ONAN and ONAF cooling systems ensure reliable 24/7 electrical power across urban and industrial grids without thermal breakdown.',
      'Buchholz Protective Relays: Deployed on oil-filled power transformers above 500 kVA to detect early arc breakdown, insulation burning, and catastrophic tank faults.',
      'Grid Tap Changers (OLTC): Regulating high-voltage distribution lines during peak load hours to maintain constant domestic terminal voltages (230 V ± 5%).',
      'Railway Traction Autotransformers: Providing 25 kV / 2 × 25 kV autotransformer feed systems to reduce catenary voltage drop and minimize trackside substation spacing.'
    ],
    hi: [
      'औद्योगिक वितरण सबस्टेशन: ONAN और ONAF शीतलन प्रणालियाँ 24/7 सुरक्षित विद्युत आपूर्ति सुनिश्चित करती हैं।',
      'बुखोल्ज सुरक्षात्मक रिले: 500 kVA से ऊपर के तेल से भरे ट्रांसफॉर्मर में आंतरिक स्पार्किंग और इंसुलेशन विफलता को समय रहते रोकने के लिए प्रयुक्त।',
      'ऑन-लोड टैप चेंजर (OLTC): पीक लोड समय में लाइन वोल्टेज को नियंत्रित कर स्थिर 230 V आपूर्ति बनाए रखना।',
      'रेलवे ट्रैक्शन ऑटो-ट्रांसफॉर्मर: 25 kV सिस्टम में वोल्टेज ड्रॉप को कम करने के लिए प्रयुक्त।'
    ],
    bn: [
      'শিল্প ডিস্ট্রিবিউশন সাবস্টেশন: ONAN ও ONAF কুলিং সিস্টেম নগর ও শিল্প অঞ্চলে নিরবচ্ছিন্ন বিদ্যুৎ সরবরাহ নিশ্চিত করে।',
      'বুখোলজ সুরক্ষা রিলে: ৫০০ kVA-এর বেশি তেলযুক্ত পাওয়ার ট্রান্সফরমারে প্রাথমিক ত্রুটি ও আর্কিং শনাক্তকরণে ব্যবহৃত।',
      'অন-লোড ট্যাপ চেঞ্জার (OLTC): পিক লোড সময়ে লাইনের ভোল্টেজ নিয়ন্ত্রণ করে গ্রাহক প্রান্তে স্থির ২৩০ V বজায় রাখা।',
      'রেলওয়ে ট্র্যাকশন অটো-ট্রান্সফরমার: ২৫ kV ট্রেন লাইনে ভোল্টেজ ড্রপ কমাতে ব্যবহৃত।'
    ]
  },
  importantPoints: {
    en: [
      'In a Core-Type transformer, windings encircle the core limbs; in a Shell-Type transformer, the iron core encases the windings.',
      'Low Voltage (LV) winding is always positioned closest to the grounded core limb to minimize insulation thickness and cost.',
      'Distribution transformers are designed for peak all-day efficiency at 50–70% load by minimizing constant iron losses (Pi).',
      'The Buchholz relay is installed exclusively on oil-immersed transformers equipped with a conservator tank and is placed in the connecting pipe tilted at 5°–9°.',
      'Dry active silica gel is deep blue; when saturated with moisture, it changes color to pale pink and requires thermal regeneration.'
    ],
    hi: [
      'कोर-टाइप में वाइंडिंग कोर को घेरे रहती है, जबकि शेल-टाइप में लोहे की कोर वाइंडिंग को कवच की तरह घेरे रहती है।',
      'LV वाइंडिंग को हमेशा अर्थ कोर के सबसे पास रखा जाता है ताकि इंसुलेशन लागत न्यूनतम रहे।',
      'वितरण ट्रांसफॉर्मर 50–70% लोड पर अधिकतम ऑल-डे दक्षता देने के लिए डिजाइन किए जाते हैं।',
      'बुखोल्ज रिले केवल कंज़र्वेटर वाले तेल से भरे ट्रांसफॉर्मर में 5°–9° झुके हुए पाइप में लगाई जाती है।',
      'सक्रिय सिलिका जेल नीला होता है; नमी सोखने पर यह गुलाबी हो जाता है।'
    ],
    bn: [
      'কোর-টাইপে ওয়াইন্ডিং কোরকে ঘিরে থাকে এবং শেল-টাইপে কোর ওয়াইন্ডিংকে বর্মের মতো ঘিরে রাখে।',
      'ইনসুলেশন খরচ কমাতে LV ওয়াইন্ডিংকে সর্বদা গ্রাউন্ডেড কোরের সবচেয়ে নিকটে স্থাপন করা হয়।',
      'ডিস্ট্রিবিউশন ট্রান্সফরমার ৫০–৭০% লোডে সর্বোচ্চ অল-ডে দক্ষতা নিশ্চিত করার জন্য নকশা করা হয়।',
      'বুখোলজ রিলে কেবল কনজারভেটরযুক্ত তেল ট্রান্সফরমারের সংযোগকারী পাইপে ৫°–৯° কোণে স্থাপন করা হয়।',
      'শুষ্ক সিলিকা জেল নীল থাকে; আর্দ্রতা শোষণ করলে এটি হালকা গোলাপি রঙ ধারণ করে।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing Commercial Efficiency with All-Day Efficiency: commercial efficiency evaluates power at one instant (η = P_out / P_in), whereas all-day efficiency evaluates total energy consumed over 24 hours (η = kWh_out / kWh_in).',
      'Placing HV winding adjacent to the core: this creates extreme dielectric stress and requires very thick, costly ground insulation.',
      'Thinking a Buchholz relay operates on dry-type transformers: it is a gas/oil-surge relay that functions exclusively inside liquid oil.',
      'Assuming an autotransformer provides galvanic isolation: an autotransformer has a continuous conductive electrical connection between primary and secondary.'
    ],
    hi: [
      'व्यावसायिक दक्षता और ऑल-डे दक्षता में भ्रम: व्यावसायिक दक्षता किसी एक क्षण की पावर का अनुपात है, जबकि ऑल-डे दक्षता 24 घंटे की कुल ऊर्जा (kWh) का अनुपात है।',
      'HV वाइंडिंग को कोर के पास रखना: इससे भारी इंसुलेशन की आवश्यकता होती है और लागत बहुत बढ़ जाती है।',
      'ड्राई-टाइप ट्रांसफॉर्मर में बुखोल्ज रिले लगाना: यह केवल तेल से भरे ट्रांसफॉर्मर में ही काम करती है।',
      'ऑटो-ट्रांसफॉर्मर को आइसोलेशन ट्रांसफॉर्मर समझना: इसमें प्राइमरी और सेकेंडरी के बीच सीधा विद्युत संपर्क होता है।'
    ],
    bn: [
      'বাণিজ্যিক দক্ষতা ও অল-ডে দক্ষতা গুলিয়ে ফেলা: বাণিজ্যিক দক্ষতা কোনো মুহূর্তের ক্ষমতার অনুপাত, আর অল-ডে দক্ষতা হলো ২৪ ঘণ্টার মোট শক্তি (kWh)-এর অনুপাত।',
      'HV ওয়াইন্ডিং কোরের কাছে স্থাপন করা: এতে চরম ডাই-ইলেকট্রিক চাপ তৈরি হয় ও অতিরিক্ত ইনসুলেশন খরচ বাড়ে।',
      'ড্রাই টাইপ ট্রান্সফরমারে বুখোলজ রিলে ব্যবহারের চেষ্টা করা: এটি কেবল তেলযুক্ত ট্রান্সফরমারে কাজ করে।',
      'অটো-ট্রান্সফরমারে গ্যালভানিক আইসোলেশন প্রত্যাশা করা: এতে সরাসরি বৈদ্যুতিক সংযোগ বিদ্যমান।'
    ]
  },
  mcqs: [
    {
      id: 'ch6-l14-mcq1',
      question: {
        en: 'Why is the Low Voltage (LV) winding always placed directly adjacent to the iron core, with the High Voltage (HV) winding placed concentrically on the outside?',
        hi: 'लो वोल्टेज (LV) वाइंडिंग को हमेशा लोहे की कोर के सबसे पास और हाई वोल्टेज (HV) वाइंडिंग को बाहर क्यों रखा जाता है?',
        bn: 'কেন লো ভোল্টেজ (LV) ওয়াইন্ডিং সর্বদা লোহার কোরের সংলগ্ন রাখা হয় এবং হাই ভোল্টেজ (HV) ওয়াইন্ডিং বাইরে রাখা হয়?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'To minimize the required dielectric insulation thickness and cost between the winding and the grounded iron core',
            hi: 'वाइंडिंग और अर्थ की गई कोर के बीच इंसुलेशन की मोटाई और लागत को न्यूनतम करने के लिए',
            bn: 'গ্রাউন্ডেড কোর এবং ওয়াইন্ডিংয়ের মধ্যকার প্রয়োজনীয় ইনসুলেশন স্তর ও খরচ কমাতে'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'To eliminate eddy current losses in the copper conductor',
            hi: 'तांबे के कंडक्टर में भंवर धारा हानियों को पूरी तरह समाप्त करने के लिए',
            bn: 'তামার তারে এডি কারেন্ট সম্পূর্ণ দূর করতে'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'To increase the operating frequency from 50 Hz to 100 Hz',
            hi: 'आवृत्ति को 50 Hz से 100 Hz तक बढ़ाने के लिए',
            bn: 'কম্পাঙ্ক ৫০ Hz থেকে ১০০ Hz বৃদ্ধি করতে'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'To prevent the silica gel breather from absorbing atmospheric moisture',
            hi: 'सिलिका जेल ब्रीदर को नमी सोखने से रोकने के लिए',
            bn: 'সিলিকা জেল ব্রিদারে আর্দ্রতা প্রবেশ ঠেকাতে'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'The core is electrically grounded (0 V). Placing the LV winding closest to the core requires insulation rated only for LV potential, drastically lowering insulation cost and physical volume.',
        hi: 'कोर 0 V पर अर्थ होती है। LV वाइंडिंग को कोर के पास रखने से केवल कम वोल्टेज का इंसुलेशन लगाना पड़ता है, जिससे खर्च बहुत बचता है।',
        bn: 'কোর গ্রাউন্ডেড থাকে। LV ওয়াইন্ডিং কোরের পাশে থাকলে কেবল কম ভোল্টেজের ইনসুলেশন লাগে, ফলে খরচ ও আকার অনেক কমে।'
      }
    },
    {
      id: 'ch6-l14-mcq2',
      question: {
        en: 'What is the operational function of a Buchholz Relay in a power transformer installation?',
        hi: 'पावर ट्रांसफॉर्मर में बुखोल्ज रिले (Buchholz Relay) का क्या कार्य है?',
        bn: 'পাওয়ার ট্রান্সফরমারে বুখোলজ রিলের (Buchholz Relay) কার্যপ্রণালী কী?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'To detect internal incipient gas accumulation and sudden oil surge faults before catastrophic tank failure',
            hi: 'आंतरिक गैस संचय और अचानक तेल के दबाव (सर्ज) को भांपकर खराबी से पूर्व अलार्म या ट्रिप देना',
            bn: 'অভ্যন্তরীণ গ্যাস জমা ও তেলের তীব্র চাপ শনাক্ত করে মারাত্মক দুর্ঘটনা ঘটার পূর্বেই সংকেত ও ট্রিপ প্রদান করা'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'To automatically step up the output AC voltage when grid frequency drops',
            hi: 'ग्रिड आवृत्ति गिरने पर आउटपुट वोल्टेज को स्वचालित रूप से बढ़ाना',
            bn: 'গ্রিডের কম্পাঙ্ক কমলে ভোল্টেজ স্বয়ংক্রিয়ভাবে বৃদ্ধি করা'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'To actively chill the transformer oil using thermoelectric peltier coolers',
            hi: 'पेल्टियर कूलर द्वारा ट्रांसफॉर्मर तेल को ठंडा करना',
            bn: 'পেলটিয়ার কুলার দ্বারা তেল দ্রুত ঠান্ডা করা'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'To filter dust particles out of the high-voltage porcelain bushings',
            hi: 'हाई-वोल्टेज बुशिंग से धूल के कणों को छानना',
            bn: 'বুশিং থেকে ধূলিকণা ফিল্টার করা'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'The Buchholz relay is a gas-actuated protective device located in the pipe between the main oil tank and the conservator. Slow gas collection triggers an alarm, while violent oil surges trigger an immediate circuit breaker trip.',
        hi: 'बुखोल्ज रिले तेल वाले ट्रांसफॉर्मर के टैंक और कंज़र्वेटर के बीच लगी होती है। धीमी गैस पर अलार्म और तेज तेल बहाव पर यह ट्रिप कराती है।',
        bn: 'বুখোলজ রিলে মূল ট্যাংক ও কনজারভেটরের মধ্যবর্তী পাইপে থাকে। ধীর গ্যাসে অ্যালার্ম দেয় এবং তেলের তীব্র তরঙ্গে ট্রিপ করে।'
      }
    },
    {
      id: 'ch6-l14-mcq3',
      question: {
        en: 'What color change indicates that the Silica Gel inside a transformer breather is saturated with moisture and requires replacement or baking?',
        hi: 'ट्रांसफॉर्मर ब्रीदर में सिलिका जेल के नमी से संतृप्त होने पर उसका रंग किस रंग में बदल जाता है?',
        bn: 'ট্রান্সফরমার ব্রিদারে সিলিকা জেল আর্দ্রতায় সম্পৃক্ত হলে তার রঙ কীসে পরিবর্তিত হয়?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'From Deep Cobalt Blue (dry active) to Pale Pink (moisture saturated)',
            hi: 'गहरे नीले (सूखा व सक्रिय) से हल्के गुलाबी (नमी संतृप्त) में',
            bn: 'গাঢ় নীল (শুষ্ক ও সক্রিয়) থেকে হালকা গোলাপি (আর্দ্রতায় সম্পৃক্ত)-তে'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'From Bright Green to Jet Black',
            hi: 'चमकीले हरे से गहरे काले में',
            bn: 'উজ্জ্বল সবুজ থেকে কালো রঙে'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'From Pure White to Golden Yellow',
            hi: 'सफेद से सुनहरे पीले में',
            bn: 'সাদা থেকে সোনালী হলুদে'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'The color never changes under any circumstances',
            hi: 'रंग किसी भी परिस्थिति में नहीं बदलता',
            bn: 'কোনো অবস্থাতেই রঙ পরিবর্তন হয় না'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Dry silica gel impregnated with cobalt chloride is deep blue. Upon absorbing moisture from inhaled air, it hydrates into cobaltous chloride hexahydrate, turning pink.',
        hi: 'सूखा सिलिका जेल गहरा नीला होता है; हवा से नमी सोखने पर यह रासायनिक रूप से गुलाबी हो जाता है।',
        bn: 'শুষ্ক সিলিকা জেল গাঢ় নীল থাকে; বাতাস থেকে আর্দ্রতা শোষণ করলে এটি রাসায়নিক পরিবর্তনের মাধ্যমে গোলাপি হয়ে যায়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'ch6-l14-pq1',
      question: {
        en: 'Compare Core-Type and Shell-Type transformers across the following five engineering criteria: (1) Magnetic flux paths, (2) Winding construction archetype, (3) Heat dissipation capability, (4) Mechanical short-circuit strength, (5) Typical voltage and power application domains.',
        hi: 'कोर-टाइप और शेल-टाइप ट्रांसफॉर्मर की निम्नलिखित 5 मानदंडों पर तुलना कीजिए: (1) चुंबकीय फ्लक्स पथ, (2) वाइंडिंग प्रकार, (3) ऊष्मा अपव्यय क्षमता, (4) शॉर्ट-सर्किट यांत्रिक मजबूती, (5) उपयुक्त वोल्टेज व पावर क्षेत्र।',
        bn: '৫টি প্রকৌশল বৈশিষ্ট্যে কোর-টাইপ ও শেল-টাইপ ট্রান্সফর্মারের তুলনা করো: (১) চৌম্বক পথ, (২) ওয়াইন্ডিং গঠন, (৩) তাপ নিঃসরণ ক্ষমতা, (৪) শর্ট-সার্কিট যান্ত্রিক শক্তি, (৫) প্রয়োগক্ষেত্র।'
      },
      hint: {
        en: 'Recall: Core-type has 1 magnetic loop and concentric coils (high-voltage transmission); Shell-type has 2 magnetic loops with Φ/2 outer limbs and sandwich coils (high current/low voltage).',
        hi: 'याद रखें: कोर-टाइप में 1 फ्लक्स पथ व संकेंद्रित कॉइल (HV ट्रांसमिशन); शेल-टाइप में 2 फ्लक्स पथ व सैंडविच कॉइल (भारी करंट)।',
        bn: 'মনে রাখো: কোর-টাইপে ১টি চৌম্বক পথ ও সমকেন্দ্রী কয়েল (উচ্চ ভোল্টেজ); শেল-টাইপে ২টি পথ ও স্যান্ডউইচ কয়েল (উচ্চ কারেন্ট)।'
      },
      answerKey: {
        en: '1. Flux Paths: Core-Type = 1 continuous series magnetic path; Shell-Type = 2 parallel magnetic paths (central limb carries Φ, outer limbs carry Φ/2).\n2. Winding Archetype: Core-Type uses concentric cylindrical coils; Shell-Type uses interleaved sandwich/disc coils.\n3. Heat Dissipation: Core-Type has better natural convective cooling due to outer exposed windings; Shell-Type has enclosed windings.\n4. Mechanical Strength: Shell-Type provides superior bracing against high short-circuit electrodynamic forces.\n5. Applications: Core-Type is standard for High-Voltage transmission; Shell-Type is favored for low-voltage, heavy-current industrial applications.',
        hi: '1. फ्लक्स पथ: कोर-टाइप = 1 एकल पथ; शेल-टाइप = 2 समानांतर पथ (मध्य लिम्ब Φ, बाहरी लिम्ब Φ/2)।\n2. वाइंडिंग: कोर-टाइप = संकेंद्रित सिलेंड्रिकल; शेल-टाइप = सैंडविच डिस्क।\n3. कूलिंग: कोर-टाइप में बेहतर प्राकृतिक कूलिंग होती है।\n4. मजबूती: शेल-टाइप शॉर्ट-सर्किट में अधिक मजबूत है।\n5. उपयोग: कोर-टाइप HV ट्रांसमिशन में, शेल-टाइप भारी धारा अनुप्रयोगों में प्रयुक्त।',
        bn: '১. ফ্লাক্স পথ: কোর-টাইপে ১টি একক পথ; শেল-টাইপে ২টি সমান্তরাল পথ (মাঝের বাহুতে Φ, বাইরের বাহুতে Φ/২)।\n২. ওয়াইন্ডিং: কোর-টাইপে সমকেন্দ্রী সিলিন্ডার; শেল-টাইপে স্যান্ডউইচ কয়েল।\n৩. তাপ নিঃসরণ: কোর-টাইপে উন্মুক্ত কয়েল থাকায় সহজে ঠান্ডা হয়।\n৪. শক্তি: শেল-টাইপে শর্ট-সার্কিটের যান্ত্রিক প্রতিরোধ ক্ষমতা বেশি।\n৫. প্রয়োগ: কোর-টাইপ উচ্চ ভোল্টেজে এবং শেল-টাইপ উচ্চ কারেন্টে ব্যবহৃত হয়।'
      }
    },
    {
      id: 'ch6-l14-pq2',
      question: {
        en: 'Explain why distribution transformers are designed to achieve maximum efficiency at 50% to 70% of full load, whereas power transformers in generating stations are designed for maximum efficiency at 90% to 100% full load.',
        hi: 'स्पष्ट कीजिए कि वितरण ट्रांसफॉर्मर 50% से 70% लोड पर अधिकतम दक्षता के लिए क्यों डिजाइन किए जाते हैं, जबकि पावर ट्रांसफॉर्मर 90% से 100% लोड पर अधिकतम दक्षता के लिए बनाए जाते हैं।',
        bn: 'ব্যাখ্যা করো কেন ডিস্ট্রিবিউশন ট্রান্সফরমার ৫০% থেকে ৭০% লোডে সর্বোচ্চ দক্ষতার জন্য ডিজাইন করা হয়, কিন্তু পাওয়ার ট্রান্সফরমার ৯০% থেকে ১০০% ফুল লোডে সর্বোচ্চ দক্ষতার জন্য ডিজাইন করা হয়।'
      },
      hint: {
        en: 'Consider their daily duty cycle: distribution transformers run 24h with varying consumer loads, so iron loss dominates; generating power transformers run at steady full load constantly.',
        hi: 'दैनिक लोड चक्र पर विचार करें: वितरण ट्रांसफॉर्मर 24 घंटे बदलते लोड पर चलते हैं (कोर हानि महत्वपूर्ण), जबकि पावर ट्रांसफॉर्मर हमेशा फुल लोड पर चलते हैं।',
        bn: 'দৈনিক লোড চক্র বিবেচনা করো: ডিস্ট্রিবিউশন ট্রান্সফরমার ২৪ ঘণ্টা পরিবর্তনশীল লোডে চলে (কোর লস প্রধান), আর পাওয়ার ট্রান্সফরমার সার্বক্ষণিক পূর্ণ লোডে চলে।'
      },
      answerKey: {
        en: '1. Distribution Transformers: Connected to residential/commercial loads 24 hours a day where load varies widely and average loading is only 40–60%. Core losses occur continuously for 24h regardless of load, so core loss (Pi) is designed very small, achieving maximum all-day efficiency at 50–70% load.\n2. Power Transformers: Installed at power plants and main grid substations; operated near 100% rated capacity continuously during generation. They are switched out when not needed. Hence, they are optimized for peak commercial efficiency at 90–100% full load where Pcu = Pi.',
        hi: '1. वितरण ट्रांसफॉर्मर: 24 घंटे जुड़े रहते हैं लेकिन औसत लोड 50% रहता है। 24 घंटे होने वाले कोर लॉस को कम रखा जाता है ताकि ऑल-डे दक्षता 50-70% लोड पर अधिकतम मिले।\n2. पावर ट्रांसफॉर्मर: पावर स्टेशनों पर हमेशा 100% क्षमता पर चलाए जाते हैं, अतः इनकी दक्षता 90-100% लोड पर अधिकतम (Pcu = Pi) रखी जाती है।',
        bn: '১. ডিস্ট্রিবিউশন ট্রান্সফরমার: ২৪ ঘণ্টা গ্রিডে যুক্ত থাকে কিন্তু গড় লোড থাকে ৫০%। সার্বক্ষণিক কোর লস কমাতে এদের ৫০–৭০% লোডে সর্বোচ্চ অল-ডে দক্ষতার জন্য তৈরি করা হয়।\n২. পাওয়ার ট্রান্সফরমার: পাওয়ার স্টেশনে সর্বদা পূর্ণ লোডে পরিচালিত হয়, তাই ৯০–১০০% লোডে সর্বোচ্চ বাণিজ্যিক দক্ষতার জন্য এদের অপ্টিমাইজ করা হয়।'
      }
    }
  ]
};
