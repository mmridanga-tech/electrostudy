import { Lesson } from '../types';

export const LESSON_TRANSFORMER_APPLICATIONS: Lesson = {
  id: 'lsn-ch6-transformer-applications',
  topicId: 'ch6-transformer-applications',
  chapterId: 'ch-electrical-machines',
  order: 20,
  title: {
    en: 'Transformer Applications & Industrial Power Systems (Capstone)',
    hi: 'ट्रांसफॉर्मर अनुप्रयोग एवं औद्योगिक विद्युत प्रणालियाँ (अध्याय 6 समापन)',
    bn: 'ট্রান্সফর্মার প্রয়োগ ও শিল্প বিদ্যুৎ ব্যবস্থা (অধ্যায় ৬ সমাপনী)'
  },
  description: {
    en: 'Capstone engineering lesson on power, distribution, and specialized industrial transformers (furnace, rectifier, drive duty, 1:1 isolation, solar PV inverter-duty with electrostatic shielding, and BESS storage interfaces), transformer selection criteria, power-flow loss modeling, industrial case studies, fully solved numerical problems, and a comprehensive master revision of Chapter 6 (DC Machines & Transformers).',
    hi: 'पावर, वितरण एवं विशेष औद्योगिक ट्रांसफॉर्मर (फर्नेस, रेक्टिफायर, 1:1 आइसोलेशन, सोलर इनवर्टर ड्यूटी एवं बैटरी BESS), ट्रांसफॉर्मर चयन मानदंड, पावर-फ्लो गणना, औद्योगिक केस स्टडीज, हल किए गए संख्यात्मक प्रश्न एवं अध्याय 6 (DC मशीनें व ट्रांसफॉर्मर) का संपूर्ण मास्टर रिवीजन।',
    bn: 'পাওয়ার, ডিস্ট্রিবিউশন ও বিশেষ শিল্প ট্রান্সফরমার (ফার্নেস, রেকটিফায়ার, ১:১ আইসোলেশন, সোলার ইনভার্টার ডিউটি ও BESS স্টোরেজ), ট্রান্সফরমার নির্বাচন মানদণ্ড, শিল্প কেস স্টাডি, সম্পূর্ণ সমাধানকৃত গাণিতিক সমস্যা এবং অধ্যায় ৬ (DC মেশিন ও ট্রান্সফরমার) এর পূর্ণাঙ্গ মাস্টার রিভিশন।'
  },
  diagrams: [
    {
      id: 'diag-trans-industrial-applications-sld',
      svgType: 'transformer-industrial-applications',
      title: {
        en: 'Industrial Power Grid Single-Line Diagram with Renewable Integration',
        hi: 'नवीकरणीय ऊर्जा एकीकरण युक्त औद्योगिक पावर ग्रिड सिंगल-लाइन आरेख',
        bn: 'নবায়নযোগ্য শক্তি সংবলিত শিল্প পাওয়ার গ্রিড সিঙ্গেল-লাইন ডায়াগ্রাম'
      },
      caption: {
        en: 'Single-line diagram illustrating end-to-end power flow from generating station (GSU 11/220 kV) through transmission grid (220/33 kV), industrial plant distribution (33 kV/415 V), isolation feeds for sensitive drives, and solar PV inverter-duty interfaces.',
        hi: 'जनरेटिंग स्टेशन (GSU 11/220 kV), ग्रिड सबस्टेशन (220/33 kV), औद्योगिक वितरण (33 kV/415 V), सेंसिटिव लोड्स के लिए आइसोलेशन ट्रांसफॉर्मर एवं सोलर इनवर्टर इंटरफेस का सिंगल-लाइन आरेख।',
        bn: 'উৎপাদন কেন্দ্র (GSU ১১/২২০ kV), গ্রিড সাবস্টেশন (২২০/৩৩ kV), শিল্প বিতরণ (৩৩ kV/৪১৫ V), আইসোলেশন ট্রান্সফরমার ও সোলার ইনভার্টার ইন্টারফেসের সিঙ্গেল-লাইন ডায়াগ্রাম।'
      }
    }
  ],
  estimatedMinutes: 65,
  easyExplanation: {
    en: 'Transformers are the backbone of modern power engineering. Without them, it would be physically impossible to transmit electrical power over long distances or power modern automated factories. In this final capstone lesson, we explore how different types of transformers are selected and used across the entire energy ecosystem: (1) Generator Step-Up (GSU) Transformers take the 11 kV generated at power stations and boost it to 220 kV or 400 kV to minimize I²R transmission losses over long distances. (2) Substation & Distribution Transformers step voltage down to 33 kV, 11 kV, and finally 415 V / 240 V for safe distribution to factories and homes. Distribution units are designed for maximum "All-Day Efficiency" at 50–70% load because they are energized 24/7 with fluctuating consumer demand. (3) Specialized Industrial Transformers include 1:1 Isolation Transformers (which decouple ground loops and block common-mode electrical noise for delicate CNC machines and PLC controllers), Rectifier & Furnace Transformers (handling massive currents and harmonic distortion), and Solar Inverter-Duty Transformers (featuring multiple secondary windings and copper electrostatic shields to filter high-frequency PWM inverter harmonics and withstand DC voltage offsets). Sizing a transformer requires analyzing total kVA demand, expected future expansion, ambient temperature derating, short-circuit impedance (%Z), and cooling methods (ONAN, ONAF, dry-type). Finally, we conclude with a complete master revision of everything learned across Chapter 6 (DC Generators, DC Motors, and Transformers).',
    hi: 'ट्रांसफॉर्मर आधुनिक विद्युत ग्रिड की रीढ़ हैं। इनके बिना लंबी दूरी तक बिजली पहुंचाना या आधुनिक कारखानों को चलाना असंभव है। इस समापन पाठ में हम ट्रांसफॉर्मर के विभिन्न प्रकारों और उनके अनुप्रयोगों को समझते हैं: (1) जनरेटर स्टेप-अप (GSU) ट्रांसफॉर्मर पावर प्लांट में उत्पन्न 11 kV को 220 kV या 400 kV तक बढ़ाते हैं ताकि ट्रांसमिशन में होने वाली I²R ऊर्जा हानि न्यूनतम हो सके। (2) सबस्टेशन एवं वितरण (Distribution) ट्रांसफॉर्मर वोल्टेज को घटाकर 33 kV, 11 kV और अंततः 415 V / 240 V करते हैं। वितरण ट्रांसफॉर्मर को 50–70% लोड पर अधिकतम "ऑल-डे दक्षता" के लिए डिजाइन किया जाता है क्योंकि वे 24 घंटे चलते हैं। (3) विशेष औद्योगिक ट्रांसफॉर्मर जैसे 1:1 आइसोलेशन ट्रांसफॉर्मर (जो संवेदनशील CNC व कंप्यूटर सिस्टम से इलेक्ट्रिकल शोर हटाते हैं), फर्नेस/रेक्टिफायर ट्रांसफॉर्मर (जो अत्यधिक करंट और हार्मोनिक्स सहन करते हैं), तथा सोलर इनवर्टर ड्यूटी ट्रांसफॉर्मर (जिनमें PWM हार्मोनिक्स रोकने के लिए इलेक्ट्रोस्टैटिक शील्ड और मल्टी-वाइंडिंग होती है)। अंत में, हम पूरे अध्याय 6 (DC जनरेटर, DC मोटर एवं ट्रांसफॉर्मर) के सभी नियमों और सूत्रों का संपूर्ण रिवीजन करते हैं।',
    bn: 'ট্রান্সফরমার হলো আধুনিক বিদ্যুৎ ব্যবস্থার প্রাণকেন্দ্র। এর সাহায্য ছাড়া দূর-দূরান্তে বিদ্যুৎ পরিবহন বা আধুনিক কারখানা পরিচালনা অসম্ভব। এই সমাপনী পাঠে আমরা বিভিন্ন প্রকার ট্রান্সফরমারের প্রয়োগ বুঝি: (১) জেনারেটর স্টেপ-আপ (GSU) ট্রান্সফরমার বিদ্যুৎ কেন্দ্রে উৎপন্ন ১১ kV ভোল্টেজকে ২২০ kV বা ৪০০ kV-তে বৃদ্ধি করে দূরপাল্লার লাইনে I²R অপচয় সর্বনিম্ন রাখে। (২) সাবস্টেশন ও ডিস্ট্রিবিউশন ট্রান্সফরমার ভোল্টেজ কমিয়ে ৩৩ kV, ১১ kV এবং শেষে ৪১৫ V / ২৪০ V এ রূপান্তর করে। ডিস্ট্রিবিউশন ট্রান্সফরমার ২৪ ঘণ্টা চালু থাকায় ৫০–৭০% লোডে সর্বোচ্চ "অল-ডে এফিসিয়েন্সি" অর্জন하도록 তৈরি করা হয়। (৩) বিশেষ শিল্প ট্রান্সফরমার যেমন ১:১ আইসোলেশন ট্রান্সফরমার (যা সংবেদনশীল CNC/PLC ডিভাইসে নয়েজ রোধ করে), রেকটিফায়ার ট্রান্সফরমার, এবং সোলার ইনভার্টার ডিউটি ট্রান্সফরমার (যা মাল্টি-ওয়াইন্ডিং ও শিল্ডিং দ্বারা সৌর বিদ্যুৎ গ্রিডে যুক্ত করে)। সবশেষে, আমরা অধ্যায় ৬ এর (DC জেনারেটর, DC মোটর ও ট্রান্সফরমার) সম্পূর্ণ মাস্টার রিভিশন সম্পন্ন করি।'
  },
  detailedExplanation: {
    en: `1. Comprehensive Classification of Industrial Power Transformers:
A. By System Role & Grid Placement:
- Generator Step-Up (GSU / Main Unit Transformer): Installed directly at power generation stations (Thermal, Hydro, Nuclear). Boosts generator output (11–22 kV) to EHV transmission levels (220 kV, 400 kV, 765 kV). Operated at continuous full-load near 100% capacity; designed for maximum efficiency at full rated load.
- Transmission / Grid Substation Transformers: Interconnect bulk transmission networks (e.g. 400/220 kV or 220/33 kV). High MVA ratings (50–500 MVA), equipped with On-Load Tap Changers (OLTC) for grid voltage regulation.
- Distribution Transformers: Step down medium voltage (33 kV or 11 kV) to utilization level (415 V 3-phase / 240 V 1-phase). Pole-mounted or pad-mounted; energized continuously 24 hours/day with varying load cycle (average 50–70% load). Core losses are minimized to maximize "All-Day Energy Efficiency".
- Station Auxiliary Transformers: Step down generation or substation bus voltages to 6.6 kV or 415 V to power critical plant auxiliaries (cooling water pumps, lube oil systems, battery chargers, lighting).

B. Specialized Industrial Duty Transformers:
- 1:1 Galvanic Isolation Transformers: Primary and secondary windings have identical turns ratio (1:1), providing complete electrical separation between supply and load. Functions:
  * Eliminates ground loops and breaks common-mode electrical noise.
  * Protects sensitive microprocessors, PLCs, medical MRI machines, and CNC drives.
  * Allows establishing a clean, noise-free local derived neutral.
  * Features a grounded copper Faraday electrostatic shield between primary and secondary windings.
- Arc Furnace Transformers: Deliver extremely high secondary currents (up to 50,000–100,000 A) at low secondary voltages (100–800 V). Must withstand severe mechanical vibration, frequent operational short-circuits (electrode immersion), and cyclic thermal shock.
- Rectifier / Variable Frequency Drive (VFD) Duty Transformers: Feed multi-pulse thyristor/IGBT rectifier bridges (12-pulse, 18-pulse, 24-pulse). Features phase-shifted secondary windings (e.g. Delta/Star combinations providing 30° or 15° phase displacement) to cancel 5th, 7th, 11th, and 13th harmonic currents in the supply network.
- Solar PV Inverter-Duty Transformers: Specifically engineered to interface solar photovoltaic central inverters to the MV grid:
  * Multi-winding Low-Voltage secondaries (e.g. one primary 33 kV winding with two or four separate 800 V split-secondary windings feeding separate inverter blocks).
  * Electrostatic shielding between windings to divert high-frequency switching transients (caused by fast IGBT switching frequencies 2–10 kHz).
  * Designed to tolerate DC bias current injection without core saturation.
  * Enhanced thermal rating for ambient operating temperatures up to 50°C in desert/solar parks.
- Battery Energy Storage System (BESS) Transformers: Support bidirectional 4-quadrant active and reactive power flow (charging and discharging) with rapid ramp rates.

2. Transformer Sizing, Selection & Engineering Criteria:
- kVA Rating Determination:
  S_req = (P_total / cos φ_avg) × (1 + Future_Growth%) / (Diversity_Factor × Max_Loading%)
- Percentage Impedance (%Z):
  * Low %Z (3–4%): Low voltage drop and high voltage regulation, but results in very high fault short-circuit current (I_sc = I_FL / %Z).
  * High %Z (6–10%): Limits maximum fault current to safe levels for downstream switchgear, but increases internal reactive voltage drop under load.
- Cooling Designation (IEC 60076):
  * ONAN: Oil Natural Air Natural (Self-cooled radiator tubes).
  * ONAF: Oil Natural Air Forced (Cooling fans blowing over radiators).
  * OFAF / ODAF: Oil Forced Air Forced / Oil Directed Air Forced (Pumps circulating oil + fans).
  * AN / AF: Air Natural / Air Forced (Dry-type cast resin units for indoor commercial buildings and hospitals where oil fire risk is forbidden).

3. Comprehensive Master Revision of Chapter 6 (DC Machines & Transformers):

A. DC Machines Fundamentals:
- Fleming’s Right-Hand Rule (Generators): Thumb = Motion, Forefinger = Magnetic Field (N->S), Middle Finger = Induced Current.
- Fleming’s Left-Hand Rule (Motors): Thumb = Force/Motion, Forefinger = Field, Middle Finger = Applied Current.
- DC Generator EMF Equation:
  E_g = (P · Φ · Z · N) / (60 · A)
  Where P = poles, Φ = flux/pole (Wb), Z = total armature conductors, N = speed in RPM, A = parallel paths (A = 2 for Wave winding, A = P for Lap winding).
- DC Motor Back-EMF & Torque Equations:
  E_b = V - I_a · R_a = (P · Φ · Z · N) / (60 · A)
  T_e = (P · Z · Φ · I_a) / (2π · A) = 0.159 · (P · Z / A) · Φ · I_a  (N·m)
  Speed: N ∝ (V - I_a · R_a) / Φ
- DC Motor Starters & Speed Control:
  * Starters (3-Point, 4-Point): Insert external resistance in series with armature at start (since at N=0, E_b=0 and I_start = V/R_a is dangerously high).
  * Armature Resistance Control: Operates below base speed; high I²R loss (poor efficiency).
  * Field Flux Control: Weakening field flux increases speed ABOVE base speed (constant power drive).
  * Ward-Leonard System: Provides smooth, continuous, bidirectional speed control from zero to full speed in both directions.

B. Single-Phase & Three-Phase Transformers:
- Faraday’s Law & Transformer EMF Equation:
  E_1 = 4.44 · f · N_1 · Φ_m
  E_2 = 4.44 · f · N_2 · Φ_m
  Turns Ratio: K = E_2 / E_1 = N_2 / N_1 = I_1 / I_2
- Equivalent Circuit Parameters (Referred to Primary):
  R_01 = R_1 + R_2' = R_1 + R_2 / K²
  X_01 = X_1 + X_2' = X_1 + X_2 / K²
  Z_01 = √(R_01² + X_01²)
- Voltage Regulation:
  %VR = [(I_2 · R_02 · cos φ_2 ± I_2 · X_02 · sin φ_2) / V_2,no-load] × 100%
  (+ for Lagging PF, - for Leading PF). Zero regulation occurs at leading PF where tan φ = -R_02 / X_02.
- Losses & Efficiency:
  Total Losses: P_loss = P_i (Core loss, constant) + x² · P_cu,FL (Copper loss, variable with loading x).
  Efficiency: η = (x · S · cos φ) / (x · S · cos φ + P_i + x² · P_cu,FL) × 100%
  Condition for Maximum Efficiency: x = √(P_i / P_cu,FL)  =>  Variable Copper Loss = Constant Core Loss.
- Testing & Diagnostics:
  * Open-Circuit (OC) Test (LV side excited, HV open): Yields Core loss P_i, R_c, and X_m.
  * Short-Circuit (SC) Test (HV side excited, LV shorted): Yields Full-load copper loss P_cu,FL, R_01, X_01, and %Z.
  * Sumpner’s (Back-to-Back) Test: Tests two identical transformers under full-load thermal conditions with only loss power supplied from the source.
- Parallel Operation Conditions:
  1. Identical voltage ratings & turns ratio (Strict: prevents circulating currents).
  2. Identical frequency & polarity / phase sequence.
  3. Percentage impedances inversely proportional to kVA ratings (Z_A · S_A = Z_B · S_B for ideal load sharing).
  4. Identical X/R ratio (prevents phase difference between secondary load currents).

4. Chapter 6 Master "Must-Remember" Formula Summary:
- DC Gen EMF: E = (P·Φ·Z·N)/(60·A)
- DC Motor Torque: T = 0.159 · (P·Z/A) · Φ · I_a
- DC Motor Speed: N = (60·A / (P·Z·Φ)) · (V - I_a·R_a)
- Transformer EMF: E = 4.44 · f · N · Φ_m
- Max Efficiency Loading: x = √(P_i / P_cu,FL)
- All-Day Efficiency: η_all-day = (Total Energy Output in kWh / Total Energy Input in kWh over 24h) × 100%
- Parallel Load Sharing: S_A = S_total × [Z_B / (Z_A + Z_B)]`,

    hi: `1. औद्योगिक ट्रांसफॉर्मर का वर्गीकरण एवं अनुप्रयोग:
A. ग्रिड में भूमिका:
- जनरेटर स्टेप-अप (GSU): पावर प्लांट पर 11 kV को 220/400 kV तक बढ़ाता है ताकि लंबी दूरी के ट्रांसमिशन में हानि न्यूनतम रहे। यह 100% लोड पर अधिकतम दक्षता के लिए बनता है।
- सबस्टेशन ट्रांसफॉर्मर: ग्रिड वोल्टेज को 33 kV या 11 kV में बदलते हैं।
- वितरण (Distribution) ट्रांसफॉर्मर: 11 kV को 415 V में बदलकर उपभोक्ताओं को देते हैं। 24 घंटे चलने के कारण इन्हें 50–70% लोड पर अधिकतम ऑल-डे दक्षता (All-Day Efficiency) के लिए डिजाइन किया जाता है।
B. विशेष औद्योगिक ट्रांसफॉर्मर:
- 1:1 आइसोलेशन ट्रांसफॉर्मर: प्राइमरी और सेकेंडरी में समान फेरे (1:1) होते हैं। यह बिना वोल्टेज बदले संवेदनशील कंप्यूटरों, PLCs और CNC मशीनों को इलेक्ट्रिकल नॉइज़ और ग्राउंड लूप से अलग कर सुरक्षित रखता है।
- रेक्टिफायर एवं VFD ट्रांसफॉर्मर: 12-पल्स/24-पल्स ड्राइव्स के लिए फेज-शिफ्टेड वाइंडिंग होती है जो ग्रिड में हार्मोनिक्स को रोकती है।
- सोलर इनवर्टर ड्यूटी ट्रांसफॉर्मर: सोलर पार्कों में मल्टी-वाइंडिंग और इलेक्ट्रोस्टैटिक शील्ड के साथ PWM हार्मोनिक्स और DC वोल्टेज को सुरक्षित रूप से ग्रिड में जोड़ते हैं।

2. अध्याय 6 का संपूर्ण मास्टर रिवीजन:
- DC जनरेटर EMF: E = (P·Φ·Z·N) / (60·A)  [Lap वाइंडिंग में A = P, Wave में A = 2]।
- DC मोटर बैक EMF: E_b = V - I_a·R_a; टॉर्क T ∝ Φ·I_a; गति N ∝ (V - I_a·R_a) / Φ।
- DC मोटर स्टार्टर: शुरुआत में E_b = 0 होने से खतरनाक शुरुआती धारा को रोकने के लिए 3-पॉइंट/4-पॉइंट स्टार्टर का प्रयोग होता है।
- ट्रांसफॉर्मर EMF समीकरण: E = 4.44 · f · N · Φ_m।
- अधिकतम दक्षता की शर्त: जब परिवर्तनीय कॉपर हानि = स्थिर लौह हानि (P_cu = P_i)।
- OC टेस्ट (नो-लोड): कोर हानि (P_i) ज्ञात करता है।
- SC टेस्ट (फुल-लोड): फुल-लोड कॉपर हानि (P_cu) और इम्पीडेंस ज्ञात करता है।
- समांतर प्रचालन: दोनों ट्रांसफॉर्मर की वोल्टेज रेटिंग समान होनी चाहिए और उनका इम्पीडेंस kVA रेटिंग के व्युत्क्रमानुपाती होना चाहिए।`,

    bn: `১. শিল্প ট্রান্সফরমারের পূর্ণাঙ্গ প্রয়োগ ও প্রকারভেদ:
A. পাওয়ার গ্রিডে ভূমিকা:
- GSU স্টেপ-আপ ট্রান্সফরমার: বিদ্যুৎ কেন্দ্রে ১১ kV কে ২২০/৪০০ kV তে বাড়িয়ে দূরপাল্লার লাইনে অপচয় কমায়।
- ডিস্ট্রিবিউশন ট্রান্সফরমার: ৩৩/১১ kV কে ৪১৫ V এ রূপান্তর করে। ২৪ ঘণ্টা চালু থাকায় ৫০–৭০% লোডে সর্বোচ্চ "অল-ডে এফিসিয়েন্সি" অর্জন하도록 তৈরি।
B. বিশেষ শিল্প ট্রান্সফরমার:
- ১:১ আইসোলেশন ট্রান্সফরমার: প্রাইমারি ও সেকেন্ডারি ভোল্টেজ সমান রেখে সংবেদনশীল কম্পিউটার ও CNC মেশিনে বৈদ্যুতিক নয়েজ দূর করে।
- সোলার ইনভার্টার ট্রান্সফরমার: মাল্টি-ওয়াইন্ডিং ও শিল্ডিং যুক্ত যা সৌর বিদ্যুৎ গ্রিডে যুক্ত করে।

২. অধ্যায় ৬ এর পূর্ণাঙ্গ মাস্টার রিভিশন:
- DC জেনারেটর EMF: E = (P·Φ·Z·N) / (৬০·A) [Lap এ A = P, Wave এ A = ২]।
- DC মোটর ব্যাক EMF: E_b = V - I_a·R_a; টর্ক T ∝ Φ·I_a; গতি N ∝ (V - I_a·R_a) / Φ।
- DC মোটর স্টার্টার: শুরুর বিশাল কারেন্ট রোধ করতে ৩-পয়েন্ট ও ৪-পয়েন্ট স্টার্টার আবশ্যক।
- ট্রান্সফরমার EMF সমীকরণ: E = ৪.৪৪ · f · N · Φ_m।
- সর্বোচ্চ দক্ষতার শর্ত: পরিবর্তনশীল কপার লস = স্থির কোর লস (P_cu = P_i)।
- OC টেস্ট: কোর লস (P_i) নির্ণয় করে।
- SC টেস্ট: ফুল-লোড কপার লস (P_cu) ও ইম্পিডেন্স নির্ণয় করে।
- সমান্তরাল পরিচালনা: ভোল্টেজ অনুপাত এক হতে হবে এবং ইম্পিডেন্স kVA এর ব্যস্তানুপাতিক হতে হবে।`
  },
  formulas: [
    {
      id: 'f-cap-transformer-sizing',
      formula: 'S_{kVA} = \\frac{P_{total,kW}}{\\cos \\phi} \\times \\frac{1 + \\text{Future\\_Growth}\\%}{\\text{Diversity\\_Factor} \\times \\text{Max\\_Loading}\\%}',
      description: {
        en: 'Comprehensive engineering sizing formula for industrial power transformers.',
        hi: 'औद्योगिक पावर ट्रांसफॉर्मर का आकार (kVA रेटिंग) निर्धारित करने का व्यापक सूत्र।',
        bn: 'শিল্প কারখানার জন্য ট্রান্সফরমার রেটিং (kVA) নির্বাচনের আদর্শ সূত্র।'
      }
    },
    {
      id: 'f-cap-all-day-efficiency',
      formula: '\\eta_{\\text{all-day}} = \\frac{\\sum (P_{\\text{out}} \\times t)}{\\sum (P_{\\text{out}} \\times t) + P_i \\times 24 + \\sum (x^2 P_{cu,FL} \\times t)} \\times 100\\%',
      description: {
        en: 'All-Day (Energy) Efficiency of distribution transformers evaluated over a 24-hour cycle.',
        hi: 'वितरण ट्रांसफॉर्मर की 24 घंटे की ऑल-डे (ऊर्जा) दक्षता का सूत्र।',
        bn: '২৪ ঘণ্টার চক্রে ডিস্ট্রিবিউশন ট্রান্সফরমারের অল-ডে (এনার্জি) দক্ষতার সূত্র।'
      }
    },
    {
      id: 'f-cap-parallel-load-share',
      formula: 'S_A = S_{total} \\times \\frac{Z_B}{Z_A + Z_B}, \\quad S_B = S_{total} \\times \\frac{Z_A}{Z_A + Z_B}',
      description: {
        en: 'Load sharing between two parallel transformers having unequal ohmic impedances.',
        hi: 'समानांतर में जुड़े दो ट्रांसफॉर्मर के बीच लोड का वितरण।',
        bn: 'সমান্তরালে সংযুক্ত দুটি ট্রান্সফরমারের মধ্যে লোড বণ্টনের সমীকরণ।'
      }
    },
    {
      id: 'f-cap-dc-emf-master',
      formula: 'E_g = \\frac{P \\cdot \\Phi \\cdot Z \\cdot N}{60 \\cdot A}, \\quad E_b = V - I_a R_a',
      description: {
        en: 'Master EMF equations for DC Generators and DC Motors.',
        hi: 'DC जनरेटर एवं DC मोटर का मास्टर EMF समीकरण।',
        bn: 'DC জেনারেটর ও DC মোটরের মূল EMF সমীকরণ।'
      }
    },
    {
      id: 'f-cap-trans-max-eff-condition',
      formula: 'x = \\sqrt{\\frac{P_i}{P_{cu,FL}}}, \\quad P_{cu}(x) = P_i',
      description: {
        en: 'Fraction of full-load (x) at which transformer operates at maximum efficiency.',
        hi: 'लोड का वह अनुपात (x) जिस पर ट्रांसफॉर्मर की दक्षता अधिकतम होती है।',
        bn: 'লোডের ভগ্নাংশ (x) যেখানে ট্রান্সফরমারের কার্যদক্ষতা সর্বোচ্চ হয়।'
      }
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch6-20-1',
      problem: {
        en: 'An industrial plant has a total connected active load P = 850 kW at 0.80 lagging power factor. The plant is supplied from an 11 kV grid and steps down to 415 V 3-phase line voltage. Calculate: (a) Total required transformer kVA, (b) Recommended standard commercial transformer rating, (c) Full-load secondary line current, and (d) Full-load primary line current.',
        hi: 'एक औद्योगिक संयंत्र का कुल लोड P = 850 kW (0.80 lag pf) है। ग्रिड 11 kV और सेकेंडरी 415 V (3-phase) है। ज्ञात कीजिए: (a) आवश्यक kVA, (b) मानक ट्रांसफॉर्मर रेटिंग, (c) सेकेंडरी लाइन करंट, (d) प्राइमरी लाइन करंट।',
        bn: 'একটি শিল্প কারখানার লোড P = ৮৫০ kW (০.৮০ lag pf)। গ্রিড ১১ kV ও সেকেন্ডারি ৪১৫ V। নির্ণয় করো: (a) kVA ক্ষমতা, (b) প্রস্তাবিত স্ট্যান্ডার্ড রেটিং, (c) সেকেন্ডারি কারেন্ট, (d) প্রাইমারি কারেন্ট।'
      },
      givenValues: {
        'Active Power P': '850 kW',
        'Power Factor cos φ': '0.80 lagging',
        'Primary Voltage V1': '11,000 V (11 kV)',
        'Secondary Voltage V2': '415 V'
      },
      solution: {
        en: 'Step 1: Calculate Required Apparent Power:\n- S = P / cos φ = 850 kW / 0.80 = 1062.5 kVA.\n\nStep 2: Recommended Commercial Standard Rating:\n- Standard commercial ratings available are 1000 kVA, 1250 kVA, 1600 kVA.\n- Selecting 1250 kVA provides 15% future expansion margin.\n\nStep 3: Calculate Secondary Line Current at 1062.5 kVA:\n- I2 = S / (√3 × V2) = (1062.5 × 10³) / (1.732 × 415) = 1062500 / 718.8 = 1478.16 A.\n\nStep 4: Calculate Primary Line Current at 1062.5 kVA:\n- I1 = S / (√3 × V1) = (1062.5 × 10³) / (1.732 × 11000) = 1062500 / 19052.56 = 55.77 A.',
        hi: 'Step 1: S = 850 / 0.80 = 1062.5 kVA।\nStep 2: मानक ट्रांसफॉर्मर = 1250 kVA।\nStep 3: I2 = 1062500 / (√3 × 415) = 1478.16 A।\nStep 4: I1 = 1062500 / (√3 × 11000) = 55.77 A।',
        bn: 'ধাপ ১: S = ৮৫০ / ০.৮০ = ১০৬২.৫ kVA।\nধাপ ২: স্ট্যান্ডার্ড সাইজ = ১২৫০ kVA।\nধাপ ৩: I2 = ১০৬২৫০০ / (√৩ × ৪১৫) = ১৪৭৮.১৬ A।\nধাপ ৪: I1 = ১০৬২৫০০ / (√৩ × ১১০০০) = ৫৫.৭৭ A।'
      },
      finalAnswer: {
        en: 'Required S = 1062.5 kVA (Select standard 1250 kVA); Secondary Current I2 = 1478.16 A; Primary Current I1 = 55.77 A.',
        hi: 'आवश्यक क्षमता = 1062.5 kVA (मानक 1250 kVA); सेकेंडरी करंट = 1478.16 A; प्राइमरी करंट = 55.77 A।',
        bn: 'প্রয়োজনীয় ক্ষমতা = ১০৬২.৫ kVA (স্ট্যান্ডার্ড ১২৫০ kVA); সেকেন্ডারি কারেন্ট = ১৪৭৮.১৬ A; প্রাইমারি কারেন্ট = ৫৫.৭৭ A।'
      }
    },
    {
      id: 'ex-ch6-20-2',
      problem: {
        en: 'A 500 kVA transformer has iron loss Pi = 1.8 kW and full-load copper loss Pcu,FL = 4.5 kW. Calculate its efficiency when delivering 75% of full load (x = 0.75) at 0.80 power factor lagging.',
        hi: '500 kVA ट्रांसफॉर्मर की कोर हानि 1.8 kW और फुल-लोड कॉपर हानि 4.5 kW है। 75% लोड (0.80 pf lag) पर दक्षता ज्ञात कीजिए।',
        bn: 'একটি ৫০০ kVA ট্রান্সফরমারের কোর লস ১.৮ kW এবং ফুল-লোড কপার লস ৪.৫ kW। ৭৫% লোডে ০.৮০ pf lag এ দক্ষতা নির্ণয় করো।'
      },
      givenValues: {
        'Rated S': '500 kVA',
        'Core Loss Pi': '1.80 kW',
        'Full-Load Copper Loss Pcu,FL': '4.50 kW',
        'Load fraction x': '0.75',
        'Power Factor cos φ': '0.80'
      },
      solution: {
        en: 'Step 1: Calculate Output Active Power:\n- P_out = x × S × cos φ = 0.75 × 500 × 0.80 = 300.0 kW.\n\nStep 2: Calculate Copper Loss at 75% Load:\n- P_cu = x² × P_cu,FL = (0.75)² × 4.50 kW = 0.5625 × 4.50 = 2.53125 kW.\n\nStep 3: Calculate Total Losses:\n- Total Loss = P_i + P_cu = 1.80 + 2.53125 = 4.33125 kW.\n\nStep 4: Calculate Efficiency:\n- η = [P_out / (P_out + Total Loss)] × 100% = [300.0 / (300.0 + 4.33125)] × 100% = (300 / 304.33125) × 100% = 98.577% ≈ 98.58%.',
        hi: 'Step 1: P_out = 0.75 × 500 × 0.80 = 300 kW।\nStep 2: P_cu = (0.75)² × 4.5 = 2.531 kW।\nStep 3: कुल हानि = 1.8 + 2.531 = 4.331 kW।\nStep 4: η = (300 / 304.331) × 100% = 98.58%।',
        bn: 'ধাপ ১: P_out = ০.৭৫ × ৫০০ × ০.৮০ = ৩০০ kW।\nধাপ ২: P_cu = (০.৭৫)² × ৪.৫ = ২.৫৩১ kW।\nধাপ ৩: মোট লস = ১.৮ + ২.৫৩১ = ৪.৩৩১ kW।\nধাপ ৪: η = (৩০০ / ৩০৪.৩৩১) × ১০০% = ৯৮.৫৮%।'
      },
      finalAnswer: {
        en: 'Output Power = 300.0 kW, Total Losses = 4.331 kW, Efficiency η = 98.58%.',
        hi: 'आउटपुट = 300 kW, कुल हानि = 4.331 kW, दक्षता η = 98.58%।',
        bn: 'আউটপুট = ৩০০.০ kW, মোট লস = ৪.৩৩১ kW, দক্ষতা η = ৯৮.৫৮%।'
      }
    },
    {
      id: 'ex-ch6-20-3',
      problem: {
        en: 'A 100 kVA, 2400/240 V 1-phase transformer has secondary equivalent parameters R02 = 0.015 Ω and X02 = 0.040 Ω. Calculate the full-load secondary terminal voltage drop and percentage voltage regulation at 0.80 power factor lagging.',
        hi: '100 kVA, 2400/240 V ट्रांसफॉर्मर के सेकेंडरी पैरामीटर R02 = 0.015 Ω एवं X02 = 0.040 Ω हैं। फुल-लोड 0.80 pf lag पर वोल्टेज रेगुलेशन ज्ञात कीजिए।',
        bn: 'একটি ১০০ kVA, ২৪০০/২৪০ V ট্রান্সফরমারের সেকেন্ডারি প্যারামিটার R02 = ০.০১৫ Ω এবং X02 = ০.০৪০ Ω। ০.৮০ pf lag এ ভোল্টেজ রেগুলেশন নির্ণয় করো।'
      },
      givenValues: {
        'Rating': '100 kVA',
        'V2,no-load': '240 V',
        'R02': '0.015 Ω',
        'X02': '0.040 Ω',
        'cos φ': '0.80 (sin φ = 0.60)'
      },
      solution: {
        en: 'Step 1: Calculate Full-Load Secondary Current:\n- I2 = S / V2 = 100,000 / 240 = 416.67 A.\n\nStep 2: Calculate Voltage Drop:\n- ΔV = I2 × (R02 × cos φ + X02 × sin φ)\n- ΔV = 416.67 × (0.015 × 0.80 + 0.040 × 0.60)\n- ΔV = 416.67 × (0.012 + 0.024) = 416.67 × 0.036 = 15.00 V.\n\nStep 3: Calculate Percentage Voltage Regulation:\n- %VR = (ΔV / V2) × 100% = (15.00 / 240) × 100% = 6.25%.',
        hi: 'Step 1: I2 = 100000 / 240 = 416.67 A।\nStep 2: ΔV = 416.67 × (0.015 × 0.8 + 0.04 × 0.6) = 15.00 V।\nStep 3: %VR = (15.00 / 240) × 100% = 6.25%।',
        bn: 'ধাপ ১: I2 = ১০০০০০ / ২৪০ = ৪১৬.৬৭ A।\nধাপ ২: ΔV = ৪১৬.৬৭ × (০.০১৫ × ০.৮ + ০.০৪ × ০.৬) = ১৫.০০ V।\nধাপ ৩: %VR = (১৫.০০ / ২৪০) × ১০০% = ৬.২৫%।'
      },
      finalAnswer: {
        en: 'Secondary Current I2 = 416.67 A; Voltage Drop = 15.00 V; Percentage Voltage Regulation = 6.25%.',
        hi: 'I2 = 416.67 A; वोल्टेज ड्रॉप = 15.00 V; वोल्टेज रेगुलेशन = 6.25%।',
        bn: 'I2 = ৪১৬.৬৭ A; ভোল্টেজ ড্রপ = ১৫.০০ V; ভোল্টেজ রেগুলেশন = ৬.২৫%।'
      }
    },
    {
      id: 'ex-ch6-20-4',
      problem: {
        en: 'Two single-phase transformers A (500 kVA, ZA = 0.015 + j0.045 Ω) and B (250 kVA, ZB = 0.030 + j0.090 Ω) operate in parallel to supply a combined load of 600 kVA at 0.80 lagging power factor. Calculate: (a) The kVA load shared by transformer A, (b) The kVA load shared by transformer B, and (c) The percentage loading of each unit.',
        hi: 'दो ट्रांसफॉर्मर A (500 kVA, ZA = 0.015 + j0.045 Ω) और B (250 kVA, ZB = 0.030 + j0.090 Ω) समानांतर में 600 kVA लोड चलाते हैं। ज्ञात कीजिए: (a) A का kVA, (b) B का kVA, (c) दोनों का प्रतिशत लोड।',
        bn: 'দুটি ট্রান্সফরমার A (৫০০ kVA, ZA = ০.০১৫ + j০.০৪৫ Ω) এবং B (২৫০ kVA, ZB = ০.০৩০ + j০.০৯০ Ω) সমান্তরালে ৬০০ kVA লোড বহন করে। নির্ণয় করো: (a) A-এর kVA, (b) B-এর kVA, (c) উভয়ের লোডিং শতাংশ।'
      },
      givenValues: {
        'Total Load S_total': '600 kVA',
        'ZA': '(0.015 + j0.045) Ω',
        'ZB': '(0.030 + j0.090) Ω = 2.0 × ZA'
      },
      solution: {
        en: 'Step 1: Check Impedance Ratio:\n- Notice ZB / ZA = (0.030 + j0.090) / (0.015 + j0.045) = 2.0 (pure scalar ratio; identical X/R = 3.0).\n- Therefore: ZA + ZB = 1.5 ZB  =>  ZB / (ZA + ZB) = 2/3, and ZA / (ZA + ZB) = 1/3.\n\nStep 2: Calculate Load shared by Transformer A:\n- S_A = S_total × [ZB / (ZA + ZB)] = 600 kVA × (2/3) = 400.0 kVA.\n- Loading percentage = (400 / 500) × 100% = 80.0% of rated capacity.\n\nStep 3: Calculate Load shared by Transformer B:\n- S_B = S_total × [ZA / (ZA + ZB)] = 600 kVA × (1/3) = 200.0 kVA.\n- Loading percentage = (200 / 250) × 100% = 80.0% of rated capacity.\n- Conclusion: Both transformers are loaded to exactly 80.0% of their rating (ideal proportional sharing!).',
        hi: 'Step 1: ZB = 2 × ZA।\nStep 2: SA = 600 × (2/3) = 400.0 kVA (80% लोड)।\nStep 3: SB = 600 × (1/3) = 200.0 kVA (80% लोड)। दोनों समान 80% लोड साझा करते हैं।',
        bn: 'ধাপ ১: ZB = ২ × ZA।\nধাপ ২: SA = ৬০০ × (২/৩) = ৪০০.০ kVA (৮০% লোড)।\nধাপ ৩: SB = ৬০০ × (১/৩) = ২০০.০ kVA (৮০% লোড)। উভয়েই নিখুঁত ৮০% লোড শেয়ার করে।'
      },
      finalAnswer: {
        en: 'Transformer A Load = 400.0 kVA (80% loading); Transformer B Load = 200.0 kVA (80% loading). Ideal proportional load sharing.',
        hi: 'SA = 400.0 kVA (80% लोड); SB = 200.0 kVA (80% लोड)। आदर्श आनुपातिक विभाजन।',
        bn: 'SA = ৪০০.০ kVA (৮০% লোড); SB = ২০০.০ kVA (৮০% লোড)। নিখুঁত আনুপাতিক বণ্টন।'
      }
    },
    {
      id: 'ex-ch6-20-5',
      problem: {
        en: 'A 2000 kVA industrial transformer has core loss Pi = 4.2 kW and full-load copper loss Pcu,FL = 18.0 kW. The factory load cycle over 24 hours is: Shift 1 (8h): 1800 kVA at 0.85 pf lag; Shift 2 (8h): 1000 kVA at 0.80 pf lag; Shift 3 (8h): 200 kVA at 0.90 pf lag. Calculate the All-Day Efficiency over the 24-hour day.',
        hi: '2000 kVA ट्रांसफॉर्मर (Pi = 4.2 kW, Pcu,FL = 18 kW) का 24 घंटे का लोड: शिफ्ट 1 (8h): 1800 kVA (0.85 pf), शिफ्ट 2 (8h): 1000 kVA (0.80 pf), शिफ्ट 3 (8h): 200 kVA (0.90 pf)। 24 घंटे की ऑल-डे दक्षता ज्ञात कीजिए।',
        bn: 'একটি ২০০০ kVA ট্রান্সফরমারের (Pi = ৪.২ kW, Pcu,FL = ১৮ kW) ২৪ ঘণ্টার লোড: শিফট ১ (৮h): ১৮০০ kVA (০.৮৫ pf), শিফট ২ (৮h): ১০০০ kVA (০.৮০ pf), শিফট ৩ (৮h): ২০০ kVA (০.৯০ pf)। অল-ডে এফিসিয়েন্সি নির্ণয় করো।'
      },
      givenValues: {
        'Rating': '2000 kVA',
        'Core Loss Pi': '4.2 kW',
        'Pcu,FL': '18.0 kW',
        'Shift 1': '1800 kVA, 0.85 pf, 8 hours',
        'Shift 2': '1000 kVA, 0.80 pf, 8 hours',
        'Shift 3': '200 kVA, 0.90 pf, 8 hours'
      },
      solution: {
        en: 'Step 1: Compute Energy Output for Each Shift:\n- Shift 1: E1 = 1800 × 0.85 × 8 = 12,240 kWh.\n- Shift 2: E2 = 1000 × 0.80 × 8 = 6,400 kWh.\n- Shift 3: E3 = 200 × 0.90 × 8 = 1,440 kWh.\n- Total Daily Output = 12240 + 6400 + 1440 = 20,080.0 kWh.\n\nStep 2: Compute Energy Losses:\n- Core Loss (constant 24h): E_core = 4.2 kW × 24 h = 100.80 kWh.\n- Copper Losses:\n  * Shift 1 (x = 1800/2000 = 0.9): (0.9)² × 18.0 × 8 = 0.81 × 18.0 × 8 = 116.64 kWh.\n  * Shift 2 (x = 1000/2000 = 0.5): (0.5)² × 18.0 × 8 = 0.25 × 18.0 × 8 = 36.00 kWh.\n  * Shift 3 (x = 200/2000 = 0.1): (0.1)² × 18.0 × 8 = 0.01 × 18.0 × 8 = 1.44 kWh.\n  * Total Copper Loss = 116.64 + 36.00 + 1.44 = 154.08 kWh.\n- Total Daily Losses = 100.80 + 154.08 = 254.88 kWh.\n\nStep 3: Compute All-Day Efficiency:\n- Total Energy Input = 20080.0 + 254.88 = 20334.88 kWh.\n- η_all-day = (20080.0 / 20334.88) × 100% = 98.7466% ≈ 98.75%.',
        hi: 'Step 1: कुल आउटपुट = 12240 + 6400 + 1440 = 20,080 kWh।\nStep 2: कोर हानि = 4.2 × 24 = 100.80 kWh; कॉपर हानि = 116.64 + 36.00 + 1.44 = 154.08 kWh। कुल हानि = 254.88 kWh।\nStep 3: ऑल-डे दक्षता = (20080 / 20334.88) × 100% = 98.75%।',
        bn: 'ধাপ ১: মোট আউটপুট = ১২২৪০ + ৬৪০০ + ১৪৪০ = ২০,০৮০ kWh।\nধাপ ২: কোর লস = ১০০.৮০ kWh; কপার লস = ১৫৪.০৮ kWh। মোট অপচয় = ২৫৪.৮৮ kWh।\nধাপ ৩: অল-ডে এফিসিয়েন্সি = (২০০৮০ / ২০৩৩৪.৮৮) × ১০০% = ৯৮.৭৫%।'
      },
      finalAnswer: {
        en: 'Total 24h Output = 20,080.0 kWh; Total Losses = 254.88 kWh; All-Day Efficiency = 98.75%.',
        hi: 'दैनिक आउटपुट = 20,080 kWh; कुल हानियाँ = 254.88 kWh; ऑल-डे दक्षता = 98.75%।',
        bn: '২৪ ঘণ্টার আউটপুট = ২০,০৮০.০ kWh; মোট অপচয় = ২৫৪.৮৮ kWh; অল-ডে এফিসিয়েন্সি = ৯৮.৭৫%।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Industrial Plant Power Distribution: Sizing step-down substation transformers (33 kV / 415 V) to feed motor control centers, production lines, and auxiliary lighting with high energy efficiency.',
      '1:1 Isolation Noise Decoupling: Employing Faraday-shielded 1:1 isolation transformers to protect sensitive robotics, PLC controllers, and medical diagnostic equipment from line surges and ground loops.',
      'Utility-Scale Solar PV Inverter Farms: Utilizing multi-winding 33 kV / 800 V split-secondary transformers with electrostatic shields to reliably feed mega-watt solar blocks into the electrical grid.',
      'Battery Energy Storage Systems (BESS): Connecting high-rate bidirectional battery inverters with the transmission network for grid frequency stabilization and peak shaving.'
    ],
    hi: [
      'औद्योगिक पावर वितरण: 33 kV को 415 V में बदलकर प्लांट की मोटरों और उत्पादन लाइनों को उच्च दक्षता से विद्युत आपूर्ति देना।',
      '1:1 आइसोलेशन ट्रांसफॉर्मर: रोबोटिक्स, PLCs एवं चिकित्सा उपकरणों को इलेक्ट्रिकल शोर और ग्राउंड लूप से सुरक्षित रखना।',
      'सोलर PV इनवर्टर ग्रिड संयोजन: मल्टी-वाइंडिंग और इलेक्ट्रोस्टैटिक शील्ड वाले ट्रांसफॉर्मर द्वारा सोलर पावर को ग्रिड में जोड़ना।',
      'बैटरी स्टोरेज (BESS) एकीकरण: ग्रिड की स्थिरता हेतु बैटरी इनवर्टर को 4-क्वाड्रेंट पावर फ्लो के साथ ट्रांसफॉर्मर से जोड़ना।'
    ],
    bn: [
      'শিল্প বিদ্যুৎ বিতরণ: ৩৩ kV কে ৪১৫ V এ রূপান্তর করে মোটর কন্ট্রোল সেন্টার ও উৎপাদন লাইনে নিরবচ্ছিন্ন বিদ্যুৎ সরবরাহ।',
      '১:১ আইসোলেশন ট্রান্সফরমার: সংবেদনশীল রোবোটিক্স, PLC এবং চিকিৎসা সরঞ্জামে বৈদ্যুতিক নয়েজ ও গ্রাউন্ড লুপ রোধ।',
      'সোলার পিভি ফার্ম গ্রিড ইন্টিগ্রেশন: মাল্টি-ওয়াইন্ডিং ও শিল্ডযুক্ত ট্রান্সফরমার দ্বারা সৌর বিদ্যুৎ দক্ষতার সাথে গ্রিডে পাঠানো।',
      'ব্যাটারি স্টোরেজ সিস্টেম (BESS): গ্রিড ফ্রিকোয়েন্সি স্থিতিশীল রাখতে ব্যাটারি ইনভার্টারের সাথে সমন্বয়।'
    ]
  },
  importantPoints: {
    en: [
      'Power transformers are designed for maximum efficiency near 100% full-load, whereas Distribution transformers are optimized for maximum All-Day efficiency at 50%–70% load.',
      '1:1 Isolation transformers provide galvanic isolation, eliminate ground loops, and block common-mode electrical noise for sensitive industrial automation.',
      'Solar inverter-duty transformers require electrostatic shielding to filter high-frequency IGBT PWM switching harmonics and withstand DC voltage bias.',
      'In parallel operation, identical percentage impedance guarantees that each transformer shares the total plant load strictly in proportion to its rated kVA capacity.'
    ],
    hi: [
      'पावर ट्रांसफॉर्मर 100% लोड पर अधिकतम दक्षता के लिए बनते हैं, जबकि वितरण ट्रांसफॉर्मर 50%–70% लोड पर अधिकतम ऑल-डे दक्षता के लिए बनते हैं।',
      '1:1 आइसोलेशन ट्रांसफॉर्मर गैल्वेनिक आइसोलेशन देकर ग्राउंड लूप और इलेक्ट्रिकल शोर को खत्म करते हैं।',
      'सोलर ट्रांसफॉर्मर में PWM हार्मोनिक्स और DC वोल्टेज से सुरक्षा के लिए इलेक्ट्रोस्टैटिक शील्ड अनिवार्य है।',
      'समानांतर प्रचालन में समान प्रतिशत इम्पीडेंस यह सुनिश्चित करता है कि दोनों ट्रांसफॉर्मर अपनी kVA क्षमता के अनुसार लोड साझा करें।',
    ],
    bn: [
      'পাওয়ার ট্রান্সফরমার ১০০% লোডে সর্বোচ্চ দক্ষতার জন্য তৈরি, আর ডিস্ট্রিবিউশন ট্রান্সফরমার ৫০%–৭০% লোডে অল-ডে দক্ষতার জন্য অপ্টিমাইজড।',
      '১:১ আইসোলেশন ট্রান্সফরমার সংবেদনশীল শিল্প সরঞ্জামে গ্রাউন্ড লুপ ও নয়েজ পুরোপুরি দূর করে।',
      'সৌর বিদ্যুৎ ট্রান্সফরমারে ইনভার্টারের উচ্চ কম্পাঙ্কের PWM নয়েজ রোধে ইলেক্ট্রোস্ট্যাটিক শিল্ড প্রয়োজন।',
      'সমান্তরাল পরিচালনায় সমান শতকরা ইম্পিডেন্স নিশ্চিত করে যে প্রতিটি ট্রান্সফরমার তার kVA রেটিং অনুপাতে লোড বহন করবে।'
    ]
  },
  commonMistakes: {
    en: [
      'Connecting parallel transformers with unequal percentage impedances without verifying that the smaller impedance unit will not overload.',
      'Using standard distribution transformers for solar PV inverters without electrostatic shields and harmonic derating, leading to premature insulation failure.',
      'Confusing 3-phase Delta-Star transformer connections: Delta-Star (Dy11 or Dy1) introduces a 30° phase shift between primary and secondary line voltages.'
    ],
    hi: [
      'अलग-अलग प्रतिशत इम्पीडेंस वाले ट्रांसफॉर्मर को समानांतर में जोड़ते समय यह न देखना कि कम इम्पीडेंस वाला ट्रांसफॉर्मर ओवरलोड हो जाएगा।',
      'सोलर प्लांट में साधारण ट्रांसफॉर्मर लगाना, जिससे हार्मोनिक्स के कारण वाइंडिंग जल्दी जल जाती है।',
      'डेल्टा-स्टार (Dy11/Dy1) ट्रांसफॉर्मर में प्राइमरी और सेकेंडरी वोल्टेज के बीच 30° फेज अंतर को अनदेखा करना।'
    ],
    bn: [
      'ভিন্ন শতকরা ইম্পিডেন্সের ট্রান্সফরমার সমান্তরালে যুক্ত করলে কম ইম্পিডেন্সের ইউনিটটি আগে ওভারলোড হয়ে যায়।',
      'সোলার প্লান্টে সাধারণ ডিস্ট্রিবিউশন ট্রান্সফরমার ব্যবহার করা, যা হারমোনিক্সে দ্রুত নষ্ট হয়।',
      'ডেল্টা-স্টার ট্রান্সফরমারে প্রাইমারি ও সেকেন্ডারির মধ্যে ৩০° ফেজ পার্থক্যের বিষয়টি ভুলে যাওয়া।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch6-20-1',
      question: {
        en: 'What is the primary technical function of a 1:1 Isolation Transformer in an automated industrial plant?',
        hi: 'स्वचालित औद्योगिक संयंत्र में 1:1 आइसोलेशन ट्रांसफॉर्मर का मुख्य तकनीकी कार्य क्या है?',
        bn: 'একটি স্বয়ংক্রিয় শিল্প কারখানায় ১:১ আইসোলেশন ট্রান্সফরমারের প্রধান কাজ কী?'
      },
      options: [
        { id: 'opt-a', text: { en: 'To step down 415 V to 240 V for single-phase lighting', hi: '415 V को 240 V में बदलना', bn: '৪১৫ V কে ২৪০ V এ রূপান্তর করা' } },
        { id: 'opt-b', text: { en: 'To provide galvanic isolation, break ground loops, and block common-mode noise for sensitive electronics', hi: 'गैल्वेनिक आइसोलेशन देकर ग्राउंड लूप और इलेक्ट्रिकल शोर को खत्म करना', bn: 'গ্যালভানিক আইসোলেশন প্রদান, গ্রাউন্ড লুপ দূর ও সংবেদনশীল ডিভাইসে নয়েজ ব্লক করা' } },
        { id: 'opt-c', text: { en: 'To increase the operating frequency from 50 Hz to 400 Hz', hi: 'फ्रीक्वेंसी को 50 Hz से 400 Hz बढ़ाना', bn: 'কম্পাঙ্ক ৫০ Hz থেকে ৪০০ Hz বৃদ্ধি করা' } },
        { id: 'opt-d', text: { en: 'To act as a direct-current battery charger', hi: 'DC बैटरी चार्जर के रूप में कार्य करना', bn: 'সরাসরি DC ব্যাটারি চার্জার হিসেবে কাজ করা' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'A 1:1 isolation transformer maintains identical primary and secondary voltages while providing total magnetic decoupling. This eliminates ground loops and prevents electrical transients from disrupting sensitive PLCs and computer systems.',
        hi: '1:1 आइसोलेशन ट्रांसफॉर्मर वोल्टेज बदले बिना पूर्ण चुंबकीय पृथक्करण प्रदान करता है, जिससे ग्राउंड लूप और इलेक्ट्रिकल शोर समाप्त हो जाता है।',
        bn: '১:১ আইসোলেশন ট্রান্সফরমার ভোল্টেজ না বদলে সম্পূর্ণ চৌম্বকীয় আইসোলেশন দেয়, ফলে নয়েজ ও গ্রাউন্ড লুপের হাত থেকে সংবেদনশীল ডিভাইস রক্ষা পায়।'
      }
    },
    {
      id: 'mcq-ch6-20-2',
      question: {
        en: 'Why are distribution transformers designed to achieve maximum efficiency at 50% to 70% of full load rather than at 100% full load?',
        hi: 'वितरण ट्रांसफॉर्मर को 100% लोड के बजाय 50% से 70% लोड पर अधिकतम दक्षता के लिए क्यों डिजाइन किया जाता है?',
        bn: 'ডিস্ট্রিবিউশন ট্রান্সফরমার ১০০% লোডের পরিবর্তে ৫০% থেকে ৭০% লোডে সর্বোচ্চ দক্ষতার জন্য কেন ডিজাইন করা হয়?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Because copper is cheaper than iron core laminations', hi: 'क्योंकि तांबा लोहे से सस्ता होता है', bn: 'কারণ তামা লোহার চেয়ে সস্তা' } },
        { id: 'opt-b', text: { en: 'Because they are energized 24/7 with varying consumer load, spending most time at partial load (maximizing All-Day energy efficiency)', hi: 'क्योंकि वे 24 घंटे विभिन्न लोड पर चलते हैं और अधिकांश समय आंशिक लोड पर रहते हैं (ऑल-डे ऊर्जा दक्षता अधिकतम करने हेतु)', bn: 'কারণ এগুলো ২৪ ঘণ্টা চালু থাকে এবং বেশিরভাগ সময় আংশিক লোডে থাকে (অল-ডে এনার্জি এফিসিয়েন্সি সর্বোচ্চ করতে)' } },
        { id: 'opt-c', text: { en: 'To prevent the Buchholz relay from tilting', hi: 'बुखोल्ज़ रिले को झुकने से रोकने के लिए', bn: 'বুকহলজ রিলে হেলে পড়া ঠেকাতে' } },
        { id: 'opt-d', text: { en: 'To eliminate the need for primary high-voltage bushings', hi: 'HV बुशिंग की आवश्यकता खत्म करने के लिए', bn: 'HV বুশিংয়ের প্রয়োজনীয়তা দূর করতে' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Distribution transformers operate continuously for 24 hours under fluctuating consumer loads (averaging 50–70% capacity). Designing the core loss to be very low ensures maximum All-Day (energy) efficiency over the complete 24-hour cycle.',
        hi: 'वितरण ट्रांसफॉर्मर 24 घंटे चलते हैं और औसत लोड 50–70% रहता है। कोर हानि कम रखकर 24 घंटे की कुल ऊर्जा दक्षता अधिकतम की जाती है।',
        bn: 'ডিস্ট্রিবিউশন ট্রান্সফরমার ২৪ ঘণ্টা চালু থাকে এবং গড় লোড ৫০–৭০% থাকে। কোর লস কম রেখে অল-ডে এনার্জি এফিসিয়েন্সি সর্বোচ্চ নিশ্চিত করা হয়।'
      }
    },
    {
      id: 'mcq-ch6-20-3',
      question: {
        en: 'In parallel operation of two transformers with unequal percentage impedances, which transformer carries a disproportionately higher share of the total load?',
        hi: 'असमान प्रतिशत इम्पीडेंस वाले दो ट्रांसफॉर्मर के समानांतर प्रचालन में कौन सा ट्रांसफॉर्मर अधिक लोड उठाएगा?',
        bn: 'অসমান শতকরা ইম্পিডেন্সযুক্ত দুটি ট্রান্সফরমারের সমান্তরাল পরিচালনায় কোনটি বেশি লোড বহন করবে?'
      },
      options: [
        { id: 'opt-a', text: { en: 'The transformer with the higher percentage impedance', hi: 'अधिक प्रतिशत इम्पीडेंस वाला ट्रांसफॉर्मर', bn: 'বেশি শতকরা ইম্পিডেন্স বিশিষ্ট ট্রান্সফরমার' } },
        { id: 'opt-b', text: { en: 'The transformer with the lower percentage impedance', hi: 'कम प्रतिशत इम्पीडेंस वाला ट्रांसफॉर्मर', bn: 'কম শতকরা इम्पीडेंस वाला ट्रांसफॉर्मर' } },
        { id: 'opt-c', text: { en: 'Both transformers share the load exactly equally regardless of impedance', hi: 'इम्पीडेंस की परवाह किए बिना दोनों बराबर लोड लेंगे', bn: 'ইম্পিডেন্স নির্বিশেষে উভয়েই সমান লোড নেবে' } },
        { id: 'opt-d', text: { en: 'The transformer located physically closer to the control room', hi: 'कंट्रोल रूम के पास वाला ट्रांसफॉर्मर', bn: 'কন্ট্রোল রুমের কাছের ট্রান্সফরমার' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Load shared is inversely proportional to transformer impedance (S_A ∝ 1/Z_A). Therefore, the unit with the smaller percentage impedance takes a larger share of the total load and may overload first.',
        hi: 'लोड का शेयर इम्पीडेंस के व्युत्क्रमानुपाती होता है (S ∝ 1/Z)। अतः कम इम्पीडेंस वाला ट्रांसफॉर्मर अपनी क्षमता से अधिक लोड ले लेता है।',
        bn: 'লোড বণ্টন ইম্পিডেন্সের ব্যস্তানুপাতিক (S ∝ ১/Z)। ফলে কম ইম্পিডেন্স বিশিষ্ট ট্রান্সফরমারটি বেশি লোড বহন করে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch6-20-1',
      question: {
        en: 'An industrial manufacturing facility has a steady running base load of 1200 kVA at 0.85 pf lagging. In addition, the plant contains a 250 kW, 415 V induction motor that starts Direct-on-Line (DOL), drawing 1600 kVA at 0.30 pf lagging during starting. The plant specification dictates that the 415 V bus voltage dip must NOT exceed 10% during motor starting. If the available step-down transformers have %Z = 5.5%, determine if a standard 1600 kVA transformer is adequate or if a 2000 kVA transformer is required.',
        hi: 'एक कारखाने का रनिंग लोड 1200 kVA (0.85 pf) है। इसमें 250 kW की मोटर चालू होने पर 1600 kVA (0.30 pf) स्टार्टिंग करंट लेती है। मोटर चालू होते समय वोल्टेज ड्रॉप 10% से अधिक नहीं होना चाहिए। यदि ट्रांसफॉर्मर का %Z = 5.5% है, तो क्या 1600 kVA का ट्रांसफॉर्मर पर्याप्त होगा या 2000 kVA का लगाना होगा?',
        bn: 'একটি কারখানার রানিং লোড ১২০০ kVA (০.৮৫ pf)। এতে ২৫০ kW মোটর স্টার্টের সময় ১৬০০ kVA (০.৩০ pf) টানে। মোটর স্টার্টের সময় ভোল্টেজ ড্রপ ১০% এর বেশি হওয়া চলবে না। %Z = ৫.৫% হলে ১৬০০ kVA ট্রান্সফরমার যথেষ্ট হবে নাকি ২০০০ kVA প্রয়োজন?'
      },
      hint: {
        en: 'Calculate the approximate transient voltage drop during starting: %VDip ≈ (S_start_total / S_trans_rated) × %Z × sin(φ_start). Compare for both 1600 kVA and 2000 kVA ratings.',
        hi: '%VDip ≈ (S_motor_start / S_trans) × %Z × sin(φ_start) की गणना 1600 kVA और 2000 kVA दोनों के लिए करें।',
        bn: '%VDip ≈ (S_motor_start / S_trans) × %Z × sin(φ_start) সমীকরণটি ১৬০০ kVA ও ২০০০ kVA উভয়ের জন্য যাচাই করুন।'
      },
      answerKey: {
        en: `Engineering Analysis & Sizing:
1. Steady-State Capacity Check:
   - Base steady running load = 1200 kVA.
   - A 1600 kVA transformer operates at (1200/1600) × 100% = 75% loading (acceptable under steady state).
2. Transient Motor Starting Voltage Dip Analysis:
   - Motor starting kVA = 1600 kVA at cos φ_start = 0.30 (sin φ_start = √(1 - 0.30²) = 0.954).
   - For a 1600 kVA Transformer (%Z = 5.5%):
     %VDip = (1600 / 1600) × 5.5% × 0.954 = 1.0 × 5.5% × 0.954 = 5.25% (across transformer).
     Combined base load + motor starting total impedance drop:
     Total apparent inrush with running load ≈ 2450 kVA.
     Estimated total bus dip = (2450 / 1600) × 5.5% × 0.72 ≈ 6.07% < 10% limit.
3. Decision:
   - The 1600 kVA transformer satisfies both steady-state loading (75%) and transient starting voltage dip (<6.1% << 10% allowable limit). Therefore, the 1600 kVA transformer is fully adequate and cost-effective.`,
        hi: `इंजीनियरिंग विश्लेषण:
1. सामान्य लोड = 1200 kVA (1600 kVA का 75%, बिल्कुल सुरक्षित)।
2. मोटर स्टार्टिंग के समय वोल्टेज ड्रॉप:
   - 1600 kVA ट्रांसफॉर्मर पर मोटर स्टार्टिंग से वोल्टेज ड्रॉप लगभग 6.07% आता है।
3. निर्णय:
   - चूंकि 6.07% ड्रॉप निर्धारित 10% की सीमा से बहुत कम है, अतः 1600 kVA का ट्रांसफॉर्मर पूरी तरह पर्याप्त एवं उपयुक्त है। 2000 kVA लगाने की आवश्यकता नहीं है।`,
        bn: `প্রকৌশলগত বিশ্লেষণ:
১. রানিং লোড = ১২০০ kVA (১৬০০ kVA এর ৭৫% লোডিং, সম্পূর্ণ নিরাপদ)।
২. মোটর স্টার্টিং ভোল্টেজ ড্রপ:
   - ১৬০০ kVA ট্রান্সফরমারে মোট ভোল্টেজ ড্রপ প্রায় ৬.০৭%।
৩. সিদ্ধান্ত:
   - ৬.০৭% ড্রপ নির্ধারিত ১০% সীমার নিচে থাকায় ১৬০০ kVA ট্রান্সফরমারটি সম্পূর্ণ উপযুক্ত ও অর্থসাশ্রয়ী। ২০০০ kVA এর প্রয়োজন নেই।`
      }
    },
    {
      id: 'pq-ch6-20-2',
      question: {
        en: 'Summarize the core fundamental differences between DC Generators, DC Motors, and Static Transformers in terms of: (1) Operating physical principle, (2) Energy conversion mechanism, (3) Cause of losses, and (4) Primary method of speed or voltage control.',
        hi: 'DC जनरेटर, DC मोटर और ट्रांसफॉर्मर के बीच निम्नलिखित आधारों पर मुख्य अंतर स्पष्ट करें: (1) कार्य सिद्धांत, (2) ऊर्जा रूपांतरण, (3) हानियों का कारण, (4) गति या वोल्टेज नियंत्रण विधि।',
        bn: 'DC জেনারেটর, DC মোটর এবং ট্রান্সফরমারের মধ্যে (১) মূল কার্যনীতি, (২) শক্তি রূপান্তর, (৩) অপচয়ের কারণ, এবং (৪) গতি বা ভোল্টেজ নিয়ন্ত্রণ পদ্ধতির প্রধান পার্থক্যসমূহ তুলনামূলক ছকে লিখুন।'
      },
      hint: {
        en: 'Review Faraday’s law vs Lorentz force law, rotating mechanical conversion vs static mutual induction, and field control vs tap changers.',
        hi: 'फैराडे का नियम बनाम लोरेंत्ज बल नियम, घूर्णन यांत्रिक ऊर्जा बनाम स्थिर म्यूचुअल इंडक्शन का ध्यान रखें।',
        bn: 'ফ্যারাডের সূত্র বনাম লরেন্টজ বল, যান্ত্রিক রূপান্তর বনাম স্থির মিউচুয়াল ইনডাকশন স্মরণ করুন।'
      },
      answerKey: {
        en: `Comprehensive Machine Synthesis:
1. Operating Physical Principle:
   - DC Generator: Faraday’s Law of Electromagnetic Induction (Dynamically Induced EMF via conductor rotation in magnetic field, Fleming's Right-Hand Rule).
   - DC Motor: Lorentz Force Law (Current-carrying conductor in magnetic field experiences mechanical torque F = B·I·L, Fleming's Left-Hand Rule).
   - Transformer: Faraday’s Law of Mutual Induction (Time-varying alternating flux linking stationary primary and secondary coils in a shared ferromagnetic core).
2. Energy Conversion:
   - DC Generator: Mechanical Shaft Power -> Direct Current Electrical Power.
   - DC Motor: Direct Current Electrical Power -> Mechanical Rotational Shaft Power.
   - Transformer: AC Electrical Power at Voltage V1 -> AC Electrical Power at Voltage V2 (Zero mechanical conversion; strictly static).
3. Sources of Losses:
   - DC Machines (Gen/Motor): Electrical Copper Losses (I_a²Ra, I_sh²R_sh) + Core Losses (Hysteresis & Eddy) + Mechanical Friction & Windage Losses (due to rotor rotation) + Brush contact voltage drop.
   - Transformer: Electrical Copper Losses (I1²R1 + I2²R2) + Magnetic Core Losses (Hysteresis & Eddy). ZERO mechanical friction/windage losses (higher efficiency, typically 97–99%).
4. Control Methodology:
   - DC Generator: Output voltage regulated via field rheostat (varying excitation flux Φ) or prime mover speed.
   - DC Motor: Speed controlled via Armature Resistance Control (below base speed), Field Flux Weakening (above base speed), or Ward-Leonard voltage adjustment.
   - Transformer: Secondary output voltage controlled under load using On-Load Tap Changers (OLTC) altering winding turn ratio N1/N2.`,
        hi: `अध्याय 6 मशीनों का व्यापक तुलनात्मक विश्लेषण:
1. कार्य सिद्धांत:
   - DC जनरेटर: फैराडे का विद्युत चुंबकीय प्रेरण नियम (फ्लेमिंग का दायाँ हाथ नियम)।
   - DC मोटर: लोरेंत्ज बल नियम (फ्लेमिंग का बायाँ हाथ नियम)।
   - ट्रांसफॉर्मर: फैराडे का पारस्परिक प्रेरण (म्यूचुअल इंडक्शन) नियम।
2. ऊर्जा रूपांतरण:
   - DC जनरेटर: यांत्रिक ऊर्जा -> DC विद्युत ऊर्जा।
   - DC मोटर: DC विद्युत ऊर्जा -> यांत्रिक घूर्णन ऊर्जा।
   - ट्रांसफॉर्मर: AC विद्युत ऊर्जा (V1) -> AC विद्युत ऊर्जा (V2) [स्थिर उपकरण, कोई यांत्रिक रूपांतरण नहीं]।
3. हानियाँ:
   - DC मशीनें: कॉपर हानि + कोर हानि + घर्षण एवं वायु घर्षण (Mechanical Friction & Windage) हानि + ब्रश ड्रॉप।
   - ट्रांसफॉर्मर: केवल कॉपर हानि एवं कोर हानि (घर्षण हानि शून्य होने से दक्षता 98%–99% तक होती है)।
4. नियंत्रण विधि:
   - DC जनरेटर: फील्ड रिओस्टेट द्वारा वोल्टेज नियंत्रण।
   - DC मोटर: आर्मेचर नियंत्रण (आधार गति से नीचे) एवं फील्ड फ्लक्स नियंत्रण (आधार गति से ऊपर)।
   - ट्रांसफॉर्मर: ऑन-लोड टैप चेंजर (OLTC) द्वारा फेरों का अनुपात (N1/N2) बदलकर वोल्टेज नियंत्रण।`,
        bn: `অধ্যায় ৬ এর সমন্বিত পর্যালোচনা:
১. মূল কার্যনীতি:
   - DC জেনারেটর: ফ্যারাডের ইলেক্ট্রোম্যাগনেটিক ইনডাকশন (ফ্লেমিংয়ের ডান হাত নিয়ম)।
   - DC মোটর: লরেন্টজ বল নীতি (ফ্লেমিংয়ের বাম হাত নিয়ম)।
   - ট্রান্সফরমার: ফ্যারাডের মিউচুয়াল ইনডাকশন নীতি।
২. শক্তি রূপান্তর:
   - DC জেনারেটর: যান্ত্রিক শক্তি -> DC বিদ্যুৎ শক্তি।
   - DC মোটর: DC বিদ্যুৎ শক্তি -> ঘূর্ণন যান্ত্রিক শক্তি।
   - ট্রান্সফরমার: AC বিদ্যুৎ (V1) -> AC বিদ্যুৎ (V2) [কোনো যান্ত্রিক রূপান্তর নেই, সম্পূর্ণ স্থির যন্ত্র]।
৩. অপচয়:
   - DC মেশিন: কপার লস + কোর লস + মেকানিক্যাল ঘর্ষণ লস + ব্রাশ ড্রপ।
   - ট্রান্সফরমার: শুধুমাত্র কপার লস ও কোর লস (ঘর্ষণ লস শূন্য হওয়ায় কার্যদক্ষতা সর্বোচ্চ ৯৮–৯৯%)।
৪. নিয়ন্ত্রণ ব্যবস্থা:
   - DC জেনারেটর: ফিল্ড রিহোস্ট্যাট দ্বারা ভোল্টেজ নিয়ন্ত্রণ।
   - DC মোটর: আর্মেচার ও ফিল্ড ফ্লাক্স নিয়ন্ত্রণের মাধ্যমে গতি পরিবর্তন।
   - ট্রান্সফরমার: অন-লোড ট্যাপ চেঞ্জার (OLTC) দ্বারা টার্ন অনুপাত পরিবর্তন করে ভোল্টেজ নিয়ন্ত্রণ।`
      }
    }
  ]
};
