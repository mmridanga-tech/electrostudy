import { Lesson } from '../types';

export const LESSON_AC_PRACTICAL_APPLICATIONS: Lesson = {
  id: 'lsn-ch5-ac-practical-applications',
  topicId: 'ch5-ac-practical-applications',
  chapterId: 'ch-alternating-current',
  order: 20,
  title: {
    en: 'Practical AC Circuits & Industrial Applications',
    hi: 'व्यावहारिक एसी परिपथ एवं औद्योगिक अनुप्रयोग',
    bn: 'ব্যবহারিক এসি সার্কিট ও শিল্প প্রয়োগ'
  },
  estimatedMinutes: 60,
  easyExplanation: {
    en: 'This capstone lesson integrates all AC circuit theory into real-world industrial engineering practice. In modern manufacturing and commercial facilities, alternating current is received at high voltage (11 kV/33 kV) and stepped down through three-phase transformers to 415 V line-to-line (240 V line-to-neutral). Electrical engineers must size distribution transformers, design Automatic Power Factor Correction (APFC) capacitor banks to eliminate low-power-factor utility penalties, select detuned harmonic filter reactors to mitigate VFD distortions, ensure feeder cable voltage drop remains under 3%, balance single-phase loads across phases, and apply a rigorous 10-step troubleshooting protocol for electrical plant maintenance.',
    hi: 'यह अंतिम अध्याय सभी एसी परिपथ सिद्धांतों को वास्तविक औद्योगिक अनुप्रयोगों में एकीकृत करता है। औद्योगिक संयंत्रों में 11 kV/33 kV ग्रिड आपूर्ति को ट्रांसफार्मर द्वारा 415 V थ्री-फेज में बदला जाता है। विद्युत इंजीनियरों को ट्रांसफार्मर की सही क्षमता तय करनी होती है, बिजली बिल जुर्माने से बचने के लिए APFC कैपेसिटर पैनल डिजाइन करने होते हैं, VFD से उत्पन्न हार्मोनिक्स को रोकने के लिए डिट्यून्ड रिएक्टर लगाने होते हैं, केबलों में वोल्टेज ड्रॉप को 3% के भीतर रखना होता है और संयंत्र के रखरखाव के लिए 10-चरणीय समस्या निवारण प्रोटोकॉल लागू करना होता है।',
    bn: 'এই অন্তিম পাঠে সমস্ত এসি সার্কিট তত্ত্বকে বাস্তব শিল্প প্রকৌশলে প্রয়োগ করা হয়েছে। আধুনিক শিল্প কারখানায় ১১ kV/৩৩ kV বিদ্যুৎকে স্টেপ-ডাউন ট্রান্সফরমারের মাধ্যমে ৪১৫ V থ্রি-ফেজে রূপান্তর করা হয়। প্রকৌশলীদের ট্রান্সফরমারের আকার নির্ধারণ, লো পাওয়ার ফ্যাক্টর জরিমানা এড়াতে APFC ক্যাপাসিটর ব্যাংক ডিজাইন, VFD দ্বারা তৈরি হারমোনিক্স দূরীকরণে ডিটিউনিং ফিল্টার নির্বাচন, ৩% এর নিচে ক্যাবল ভোল্টেজ ড্রপ বজায় রাখা এবং কারখানার সুরক্ষায় ১০-ধাপের ত্রুটি নির্ণয় পদ্ধতি বাস্তবায়ন করতে হয়।'
  },
  detailedExplanation: {
    en: `1. Industrial AC Distribution Architecture:
Electric utilities deliver bulk power at high voltage (11 kV, 33 kV, or 66 kV) to minimize transmission I²R losses.
The facility substation architecture consists of:
- High Tension (HT) Switchgear & Vacuum Circuit Breakers (VCB) with protection relays.
- Step-Down Power Transformer: Typically Delta-Star (Dyn11) configuration. The primary Delta traps third harmonic currents, while the secondary Star provides a stable neutral for 415 V / 240 V 4-wire distribution.
- Low Tension (LT) Main Switchboard: Feeds power to Motor Control Centers (MCC), Lighting Panels, and APFC panels via Air Circuit Breakers (ACB) and Molded Case Circuit Breakers (MCCB).

2. Transformer Substation Sizing & Diversity Factor:
To select the appropriate transformer kVA rating:
- Total Connected Load (kW): Sum of nameplate ratings of all connected equipment.
- Demand Factor: Ratio of maximum demand to total connected load (typically 0.60 to 0.85).
- Diversity Factor: Ratio of sum of individual maximum demands to the coincident maximum demand of the entire facility (typically 1.10 to 1.35).
- Operating Power Factor: Factory uncorrected PF (typically 0.75 to 0.82 lagging).
- Sizing Formula: S_transformer (kVA) = (Maximum Coincident Demand in kW / Operating PF) × Safety & Future Margin (1.20 to 1.25).
Standard IEC transformer ratings: 250, 400, 500, 630, 800, 1000, 1250, 1600, 2000, 2500 kVA.

3. Automatic Power Factor Correction (APFC) Engineering:
Induction motors, transformers, and welding equipment consume large reactive power (kVAR), dropping plant power factor to 0.70 - 0.80 lagging.
- Economic Impact: Utilities enforce heavy surcharge penalties when monthly average PF falls below 0.90 or 0.95, and provide tariff incentives for PF > 0.98.
- APFC Operation: A microprocessor-based controller continuously monitors line voltage and current, computes instantaneous reactive power demand, and switches staged capacitor steps (e.g., 25 kVAR, 50 kVAR) via duty-cycle contactors or solid-state thyristor switches.
- Required kVAR Rating: Q_C = P_load · [tan(arccos PF₁) - tan(arccos PF₂)].

4. Harmonics & Detuned Filter Reactor Selection:
Non-linear loads (Variable Frequency Drives - VFDs, UPS systems, LED drivers, induction furnaces) draw non-sinusoidal currents rich in 5th (250 Hz) and 7th (350 Hz) harmonics.
- Danger of Resonance: Shunt capacitor banks can resonate in parallel with the transformer leakage inductance at harmonic frequencies, causing catastrophic capacitor explosion and transformer overheating.
- Solution - Detuned Reactors: Series reactors (p = 5.67%, 7%, or 14%) are connected in series with each capacitor bank step.
- A 7% detuned reactor shifts the circuit resonance to 189 Hz (below the 5th harmonic of 250 Hz), preventing harmonic amplification and absorbing damaging currents safely.

5. Cable Sizing & Permissible Voltage Drop:
Cables must carry full load current continuously without exceeding insulation temperature limits (e.g., 90°C for XLPE) and satisfy maximum permissible voltage drop limits:
- Standards (IS 732 / IEC 60364): Maximum allowable voltage drop from main switchboard to motor terminals is 3% for normal running and 10% during motor starting.
- Three-Phase Voltage Drop Formula:
  ΔV = √3 · I_L · L · (R_c · cos φ + X_c · sin φ)
  where L is cable length in meters, R_c and X_c are cable resistance and reactance per meter.

6. The 10-Step Industrial Electrical Troubleshooting Protocol:
Step 1: Safety & Lockout/Tagout (LOTO) - Verify de-energization, apply safety padlocks and danger tags.
Step 2: Visual & Olfactory Inspection - Check for burnt insulation smell, discolored busbars, arc flash residue, or melted cable lugs.
Step 3: Three-Phase Voltage Measurement - Measure V_RY, V_YB, V_BR, and neutral-to-earth voltage V_NE (< 2 V standard).
Step 4: Voltage Unbalance Check - Verify that Voltage Unbalance Factor (VUF) is < 1.5% to prevent severe motor rotor overheating.
Step 5: Line & Neutral Current Profiling - Measure I_R, I_Y, I_B and I_N using a True-RMS clamp meter.
Step 6: Power Factor & APFC Step Verification - Verify that capacitors draw rated current (I_cap = Q_step / [√3 · V_L]) on each active step.
Step 7: Thermal Imaging (FLIR Thermography) - Scan busbar joints, breaker contacts, and terminals for high-resistance hot spots (ΔT > 10°C indicates imminent failure).
Step 8: Insulation Resistance (Megger Test) - Test phase-to-phase and phase-to-earth resistance at 1000 V DC (> 1.0 MΩ per kV operating voltage).
Step 9: Harmonic Distortion Analysis - Verify THD-V is < 5% and THD-I is < 8% using a Power Quality Analyzer.
Step 10: Root-Cause Documentation & Preventive Corrective Action - Log findings in the computerized maintenance management system (CMMS).`,
    hi: `1. औद्योगिक एसी वितरण वास्तुकला:
विद्युत ग्रिड से 11 kV या 33 kV पर उच्च वोल्टेज आपूर्ति प्राप्त होती है जिसे स्टेप-डाउन ट्रांसफार्मर (Delta-Star) द्वारा 415 V (3-फेज)/240 V (1-फेज) में बदला जाता है। इसके बाद मुख्य LT पैनल, MCC (मोटर कंट्रोल सेंटर) और APFC पैनलों को बिजली दी जाती है।

2. ट्रांसफार्मर क्षमता निर्धारण (Sizing):
ट्रांसफार्मर kVA क्षमता = (अधिकतम मांग kW / पावर फैक्टर) × सुरक्षा मार्जिन (1.20)।
मानक रेटिंग: 250, 500, 630, 800, 1000, 1600, 2000 kVA।

3. स्वचालित पावर फैक्टर सुधार (APFC):
औद्योगिक मोटरों और ट्रांसफार्मरों के कारण पावर फैक्टर 0.70-0.80 तक गिर जाता है, जिससे बिजली बिल में भारी जुर्माना लगता है।
APFC पैनल माइक्रोप्रोसेसर नियंत्रक द्वारा आवश्यकतानुसार कैपेसिटर स्टेप्स को स्वतः ऑन/ऑफ करके पावर फैक्टर को 0.98-0.99 पर बनाए रखता है।
आवश्यक kVAR = P × (tan φ₁ - tan φ₂)।

4. हार्मोनिक्स एवं डिट्यून्ड रिएक्टर (Harmonics & Detuned Reactors):
VFD और UPS जैसे गैर-रेखीय भार 5वें (250 Hz) और 7वें (350 Hz) हार्मोनिक्स उत्पन्न करते हैं। कैपेसिटर के साथ समानांतर रेजोनेंस को रोकने के लिए कैपेसिटरों के साथ 7% डिट्यून्ड रिएक्टर श्रेणी में जोड़े जाते हैं।

5. केबल चयन एवं वोल्टेज ड्रॉप:
मोटर टर्मिनलों पर वोल्टेज ड्रॉप सामान्य संचालन में 3% और स्टार्टिंग में 10% से अधिक नहीं होना चाहिए।
ΔV = √3 · I_L · L · (R·cos φ + X·sin φ)।

6. 10-चरणीय औद्योगिक समस्या निवारण प्रोटोकॉल:
1. सुरक्षा एवं LOTO (लॉकआउट-टैगआउट)
2. दृश्य निरीक्षण (जलने की गंध, ढीले कनेक्शन)
3. 3-फेज वोल्टेज मापन (V_RY, V_YB, V_BR)
4. वोल्टेज असंतुलन जांच (< 1.5%)
5. 3-फेज एवं न्यूट्रल धारा मापन
6. APFC कैपेसिटर स्टेप करंट जांच
7. थर्मल इमेजिंग (थर्मोग्राफी द्वारा हॉट स्पॉट जांच)
8. मेगर इंसुलेशन प्रतिरोध परीक्षण (> 1 MΩ/kV)
9. हार्मोनिक विकृति जांच (THD-V < 5%)
10. मूल कारण दस्तावेजीकरण एवं निवारक रखरखाव।`,
    bn: `১. শিল্প এসি বিতরণ ব্যবস্থা:
গ্রিড থেকে ১১ kV বা ৩৩ kV বিদ্যুৎ সাবস্টেশনের ডেল্টা-স্টার ট্রান্সফরমারের মাধ্যমে ৪১৫ V (থ্রি-ফেজ) ও ২৪০ V (সিঙ্গেল-ফেজ) এ রূপান্তরিত হয়ে মেইন LT প্যানেল, মোটর কন্ট্রোল সেন্টার (MCC) এবং APFC প্যানেলে সঞ্চালিত হয়।

২. ট্রান্সফরমারের আকার নির্ধারণ:
ট্রান্সফরমার kVA = (সর্বোচ্চ লোড kW / পাওয়ার ফ্যাক্টর) × ১.২০ (ভবিষ্যৎ সম্প্রসারণ)।
স্ট্যান্ডার্ড সাইজ: ২৫০, ৫০০, ৬৩০, ৮০০, ১০০০, ১২৫০, ১৬০০ kVA।

৩. স্বয়ংক্রিয় পাওয়ার ফ্যাক্টর সংশোধন (APFC):
মোটর ও ইনডাক্টিভ লোডের কারণে পাওয়ার ফ্যাক্টর কমে গেলে জরিমানা এড়াতে APFC প্যানেল স্বয়ংক্রিয়ভাবে ক্যাপাসিটর ব্যাংক সংযুক্ত করে পাওয়ার ফ্যাক্টরকে ০.৯৮-এ উন্নীত করে।
প্রয়োজনীয় kVAR = P × (tan φ₁ - tan φ₂)।

৪. হারমোনিক্স ও ডিটিউনিং ফিল্টার:
VFD ও রেকটিফায়ারের কারণে উৎপন্ন ৫ম (২৫০ Hz) ও ৭ম (৩৫০ Hz) হারমোনিক্সের ক্ষতি রোধে ক্যাপাসিটরের সাথে ৭% ডিটিউনিং সিরিজ রিঅ্যাক্টর যুক্ত করা হয়।

৫. কেবলে ভোল্টেজ ড্রপ:
আইনানুসারে মোটর টার্মিনালে সর্বোচ্চ ভোল্টেজ ড্রপ ৩% এর নিচে থাকা বাধ্যতামূলক: ΔV = √৩ · I · L · (R·cos φ + X·sin φ)।

৬. ১০-ধাপের শিল্প ত্রুটি নির্ণয় পদ্ধতি:
১. নিরাপত্তা ও LOTO ২. দৃশ্যমান পরিদর্শন ৩. ৩-ফেজ ভোল্টেজ পরিমাপ ৪. ফেজ ভারসাম্যহীনতা যাচাই ৫. নিউট্রাল ও লাইন কারেন্ট পরিমাপ ৬. ক্যাপাসিটর ব্যাংক অডিট ৭. থার্মাল ইমেজিং ৮. মেগার ইনসুলেশন পরীক্ষা ৯. হারমোনিক THD অ্যানালিসিস ১০. রুট-কজ সমাধান ও লগবুক এন্ট্রি।`
  },
  sections: [
    {
      id: 'sec-industrial-substation-sizing',
      title: {
        en: 'Substation Transformer Sizing & Diversity Factor Engineering',
        hi: 'सबस्टेशन ट्रांसफार्मर क्षमता निर्धारण एवं विविधता कारक इंजीनियरिंग',
        bn: 'সাবস্টেশন ট্রান্সফরমার সাইজিং ও ডাইভার্সিটি ফ্যাক্টর ইঞ্জিনিয়ারিং'
      },
      content: {
        en: 'Industrial electrical design requires calculating the maximum coincident demand by applying equipment duty factors and plant diversity. If a manufacturing plant has a total connected motor load of 450 kW (duty factor 0.75, diversity 1.20) and lighting/HVAC load of 80 kW (diversity 1.05), total simultaneous maximum demand = (450 × 0.75 / 1.20) + (80 / 1.05) = 281.25 + 76.19 = 357.44 kW. Operating at plant PF = 0.80 lagging, apparent power demand = 357.44 / 0.80 = 446.8 kVA. Adding a 25% safety and expansion margin gives 558.5 kVA, dictating the selection of a standard 630 kVA 11kV/415V distribution transformer.',
        hi: 'औद्योगिक डिजाइन में विविधता कारक (Diversity Factor) लागू करके वास्तविक अधिकतम मांग की गणना की जाती है। लोड और पावर फैक्टर के आधार पर सही kVA क्षमता का ट्रांसफार्मर (जैसे 630 kVA) चुना जाता है ताकि भविष्य के विस्तार के लिए 20-25% क्षमता उपलब्ध रहे।',
        bn: 'শিল্প নকশায় ডাইভার্সিটি ফ্যাক্টর প্রয়োগ করে মোট সমকালীন সর্বোচ্চ চাহিদা নির্ধারণ করা হয়। লোড kW এবং পাওয়ার ফ্যাক্টরের ভিত্তিতে হিসাব করে উপযুক্ত kVA রেটিংয়ের ট্রান্সফরমার (যেমন ৬৩০ kVA) নির্বাচন করা হয় যাতে ২০-২৫% অতিরিক্ত মার্জিন থাকে।'
      },
      keyEquations: [
        'S_{\\text{req}} = \\frac{P_{\\text{demand}}}{\\text{PF}} \\times \\text{Growth Margin}',
        'Q_C = P_{\\text{load}} \\cdot [\\tan(\\arccos \\text{PF}_1) - \\tan(\\arccos \\text{PF}_2)]'
      ]
    },
    {
      id: 'sec-apfc-engineering-roi',
      title: {
        en: 'APFC Capacitor Sizing & Electricity Bill ROI Economics',
        hi: 'APFC कैपेसिटर क्षमता निर्धारण एवं बिजली बिल बचत अर्थशास्त्र',
        bn: 'APFC ক্যাপাসিটর সাইজিং ও বিদ্যুৎ বিল সাশ্রয়ের অর্থনৈতিক বিশ্লেষণ'
      },
      content: {
        en: 'A manufacturing unit consuming 500 kW at 0.75 PF lagging pays for 666.7 kVA of billing demand. By installing an APFC capacitor bank of Q_C = 500 × [tan(arccos 0.75) - tan(arccos 0.98)] = 500 × [0.8819 - 0.2031] = 339.4 kVAR (rounded to 350 kVAR staged as 25 + 25 + 50 + 50 + 100 + 100 kVAR), the apparent power demand drops to 500 / 0.98 = 510.2 kVA. This frees up 156.5 kVA of transformer capacity, reduces line current by 23.5% (slashing I²R distribution losses), avoids low PF penalty surcharges, and yields a complete capital payback within 4 to 6 months.',
        hi: '500 kW के संयंत्र में पावर फैक्टर को 0.75 से बढ़ाकर 0.98 करने पर 350 kVAR का APFC पैनल आवश्यक होता है। इससे बिलिंग kVA मांग 666.7 kVA से घटकर 510.2 kVA रह जाती है, केबलों में धारा 23.5% कम हो जाती है और बिजली बिल में भारी बचत होती है।',
        bn: '৫০০ kW প্লান্টে পাওয়ার ফ্যাক্টর ০.৭৫ থেকে ০.৯৮ এ উন্নীত করতে ৩৫০ kVAR এর APFC ব্যাংক প্রয়োজন হয়। এতে বিলিং চাহিদা ৬৬৬.৭ kVA থেকে কমে ৫১০.২ kVA হয়, কারেন্ট ২৩.৫% হ্রাস পায় এবং ৪-৬ মাসের মধ্যে সম্পূর্ণ বিনিয়োগ উঠে আসে।'
      }
    },
    {
      id: 'sec-field-troubleshooting-matrix',
      title: {
        en: 'Field Troubleshooting Guide: Symptoms, Root Causes & Fixes',
        hi: 'फील्ड समस्या निवारण गाइड: लक्षण, मूल कारण एवं समाधान',
        bn: 'ফিল্ড ট্রাবলশুটিং গাইড: লক্ষণ, মূল কারণ ও সমাধান'
      },
      content: {
        en: '1. Symptom: Motor tripping on Overload within 5 minutes of starting.\n   Root Cause: Voltage unbalance > 3% or mechanical binding in pump/gearbox.\n   Fix: Check 3-phase line voltages; equalize single-phase loads across phases.\n2. Symptom: APFC capacitors frequently failing / bulging / blowing fuses.\n   Root Cause: Harmonic resonance caused by VFD non-linear loads.\n   Fix: Retrofit 7% detuned series filter reactors on all capacitor bank steps.\n3. Symptom: High neutral conductor current (I_N > I_Line) in IT office building.\n   Root Cause: Triplen (3rd, 9th, 15th) harmonics from switch-mode power supplies (SMPS) summing constructively in neutral.\n   Fix: Install Active Harmonic Filters (AHF) or double-sized 200% neutral conductors.',
        hi: '1. लक्षण: मोटर शुरू होने के 5 मिनट बाद ओवरलोड पर ट्रिप होना — कारण: वोल्टेज असंतुलन > 3%।\n2. लक्षण: APFC कैपेसिटर बार-बार फटना — कारण: VFD से हार्मोनिक रेजोनेंस; समाधान: 7% डिट्यून्ड रिएक्टर लगाएं।\n3. लक्षण: आईटी भवन में अत्यधिक न्यूट्रल धारा — कारण: कंप्यूटर SMPS से 3rd हार्मोनिक्स का न्यूट्रल में जुड़ना; समाधान: 200% न्यूट्रल केबल या एक्टिव फिल्टर।',
        bn: '১. লক্ষণ: মোটর ঘনঘন ওভারলোডে ট্রিপ হওয়া — কারণ: ভোল্টেজ ভারসাম্যহীনতা > ৩%।\n২. লক্ষণ: APFC ক্যাপাসিটর ব্লাস্ট হওয়া — কারণ: VFD হারমোনিক রেসোন্যান্স; প্রতিকার: ৭% ডিটিউনিং রিঅ্যাক্টর স্থাপন।\n৩. লক্ষণ: অতিরিক্ত নিউট্রাল কারেন্ট — কারণ: কম্পিউটার SMPS এর ৩য় হারমোনিক্স; প্রতিকার: ২০০% নিউট্রাল সাইজিং বা অ্যাক্টিভ ফিল্টার।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ac-industrial-applications',
      title: {
        en: 'Industrial AC Power Substation Architecture',
        hi: 'औद्योगिक एसी पावर सबस्टेशन वास्तुकला',
        bn: 'শিল্প এসি পাওয়ার সাবস্টেশন আর্কিটেকচার'
      },
      caption: {
        en: 'Industrial AC Distribution Substation: 11kV Grid, Step-Down Transformer (Dyn11), Main LT Switchboard, APFC Panel & Motor Control Center',
        hi: 'औद्योगिक एसी वितरण सबस्टेशन: 11kV ग्रिड, स्टेप-डाउन ट्रांसफार्मर (Dyn11), मुख्य LT पैनल, APFC पैनल एवं मोटर कंट्रोल सेंटर',
        bn: 'শিল্প এসি ডিস্ট্রিবিউশন সাবস্টেশন: ১১kV গ্রিড, স্টেপ-ডাউন ট্রান্সফরমার (Dyn11), মেইন LT প্যানেল, APFC প্যানেল ও মোটর কন্ট্রোল সেন্টার'
      },
      svgType: 'circuit-ac-industrial-applications'
    }
  ],
  formulas: [
    {
      symbol: 'S_{transformer}',
      expression: 'S_{req} = \\frac{P_{demand}}{\\text{PF}} \\times \\text{Growth Margin (1.20)}',
      description: {
        en: 'Required transformer capacity in kVA based on maximum active demand and operating power factor',
        hi: 'अधिकतम सक्रिय मांग एवं पावर फैक्टर पर आधारित आवश्यक ट्रांसफार्मर क्षमता (kVA में)',
        bn: 'সর্বোচ্চ সক্রিয় চাহিদা ও পাওয়ার ফ্যাক্টরের ভিত্তিতে প্রয়োজনীয় ট্রান্সফরমার kVA ক্ষমতা'
      }
    },
    {
      symbol: 'Q_C (APFC)',
      expression: 'Q_C = P \\cdot [\\tan(\\arccos \\text{PF}_1) - \\tan(\\arccos \\text{PF}_2)] = P \\cdot [\\tan \\phi_1 - \\tan \\phi_2]',
      description: {
        en: 'Required APFC capacitor bank rating in kVAR to correct power factor from PF₁ to PF₂',
        hi: 'पावर फैक्टर को PF₁ से PF₂ तक सुधारने हेतु आवश्यक APFC कैपेसिटर क्षमता (kVAR में)',
        bn: 'পাওয়ার ফ্যাক্টর PF₁ থেকে PF₂ এ উন্নীত করতে প্রয়োজনীয় APFC ক্যাপাসিটর রেটিং (kVAR এ)'
      }
    },
    {
      symbol: 'VUF (\\%)',
      expression: '\\text{VUF} = \\frac{\\text{Max } |V_{line} - V_{avg}|}{V_{avg}} \\times 100\\%',
      description: {
        en: 'Voltage Unbalance Factor in percent (must be < 1.5% for 3-phase industrial motors)',
        hi: 'वोल्टेज असंतुलन प्रतिशत (औद्योगिक मोटरों के लिए < 1.5% होना अनिवार्य)',
        bn: 'ভোল্টেজ ভারসাম্যহীনতার শতকরা মান (মোটরের জন্য < ১.৫% থাকা আবশ্যক)'
      }
    },
    {
      symbol: '\\Delta V_{3\\phi}',
      expression: '\\Delta V = \\sqrt{3} \\cdot I_L \\cdot L \\cdot (R_c \\cos \\phi + X_c \\sin \\phi)',
      description: {
        en: 'Three-Phase feeder cable voltage drop (must be kept under 3.0% under full load)',
        hi: 'थ्री-फेज फीडर केबल वोल्टेज ड्रॉप (पूर्ण भार पर 3.0% के भीतर होना अनिवार्य)',
        bn: 'থ্রি-ফেজ ফিডার কেবলে ভোল্টেজ ড্রপ (পূর্ণ লোডে ৩.০% এর নিচে রাখা বাধ্যতামূলক)'
      }
    },
    {
      symbol: 'f_{res}',
      expression: 'f_{res} = \\frac{f_1}{\\sqrt{p}} = \\frac{50}{\\sqrt{0.07}} \\approx 189 \\text{ Hz}',
      description: {
        en: 'Tuning frequency of a 7% series detuned filter reactor for 50 Hz systems (safely below 5th harmonic 250 Hz)',
        hi: '50 Hz प्रणाली के लिए 7% डिट्यून्ड रिएक्टर की रेजोनेंस आवृत्ति (5वें हार्मोनिक 250 Hz से सुरक्षित रूप से नीचे)',
        bn: '৫০ Hz সিস্টেমে ৭% ডিটিউনিং রিঅ্যাক্টরের রেসোন্যান্ট কম্পাঙ্ক (৫ম হারমোনিক ২৫০ Hz এর নিরাপদ নিচে)'
      }
    }
  ],
  solvedExamples: [
    {
      id: 'ex-20-1-substation-calc',
      problem: {
        en: 'A manufacturing plant has the following 3-phase 415 V load breakdown:\n1. Induction motor drives: Total connected load 320 kW (demand factor 0.70, diversity factor 1.25, average PF = 0.80 lagging).\n2. Electric heating furnaces: Total connected load 120 kW (demand factor 0.85, diversity factor 1.10, unity PF = 1.0).\n3. Facility lighting & office HVAC: Total connected load 60 kW (demand factor 0.90, diversity factor 1.0, average PF = 0.90 lagging).\nCalculate: (a) Total simultaneous active maximum demand P_max, (b) Total plant reactive demand Q_total, (c) Overall uncorrected plant power factor, (d) Minimum required transformer kVA rating including a 20% future growth margin, and (e) Select the standard IEC transformer size.',
        hi: 'एक विनिर्माण संयंत्र में निम्नलिखित भार हैं:\n1. मोटरें: 320 kW (डिमांड फैक्टर 0.70, विविधता 1.25, PF = 0.80)\n2. हीटिंग भट्टियां: 120 kW (डिमांड फैक्टर 0.85, विविधता 1.10, PF = 1.0)\n3. लाइटिंग व HVAC: 60 kW (डिमांड फैक्टर 0.90, विविधता 1.0, PF = 0.90)\nगणना करें: (a) कुल अधिकतम सक्रिय मांग P_max, (b) कुल प्रतिक्रियाशील मांग Q_total, (c) संयंत्र का समग्र पावर फैक्टर, (d) 20% विस्तार मार्जिन सहित आवश्यक kVA, एवं (e) मानक ट्रांसफार्मर आकार चुनें।',
        bn: 'একটি কারখানায় নিম্নলিখিত লোডসমূহ রয়েছে:\n১. মোটর ড্রাইভ: ৩২০ kW (ডিমান্ড ০.৭০, ডাইভার্সিটি ১.২৫, PF = ০.৮০)\n২. হিটিং ফার্নেস: ১২০ kW (ডিমান্ড ০.৮৫, ডাইভার্সিটি ১.১০, PF = ১.০)\n৩. লাইটিং ও HVAC: ৬০ kW (ডিমান্ড ০.৯০, ডাইভার্সিটি ১.০, PF = ০.৯০)\nনির্ণয় করুন: (a) মোট সর্বোচ্চ সক্রিয় চাহিদা P_max, (b) মোট রিঅ্যাক্টিভ চাহিদা Q_total, (c) প্লান্টের সার্বিক পাওয়ার ফ্যাক্টর, (d) ২০% মার্জিনসহ ট্রান্সফরমার kVA এবং (e) স্ট্যান্ডার্ড ট্রান্সফরমার নির্বাচন করুন।'
      },
      givenValues: {
        'P_motors': '320 kW',
        'P_heating': '120 kW',
        'P_lighting': '60 kW',
        'Growth': '20%'
      },
      solution: {
        en: `Step 1: Calculate Coincident Active Demands (P)
1. Motor Drives Demand:
   P_motor = (320 kW × 0.70) / 1.25 = 224.0 / 1.25 = 179.20 kW.
2. Heating Furnaces Demand:
   P_heat = (120 kW × 0.85) / 1.10 = 102.0 / 1.10 = 92.73 kW.
3. Lighting & HVAC Demand:
   P_light = (60 kW × 0.90) / 1.00 = 54.00 kW.
Total Coincident Active Demand:
P_total = 179.20 + 92.73 + 54.00 = 325.93 kW.

Step 2: Calculate Reactive Power Demands (Q)
1. Motor Drives: cos φ = 0.80 ⇒ tan φ = 0.75 ⇒ Q_motor = 179.20 × 0.75 = 134.40 kVAR.
2. Heating: cos φ = 1.0 ⇒ tan φ = 0 ⇒ Q_heat = 0.0 kVAR.
3. Lighting & HVAC: cos φ = 0.90 ⇒ φ = 25.84° ⇒ tan φ = 0.4843 ⇒ Q_light = 54.00 × 0.4843 = 26.15 kVAR.
Total Reactive Demand:
Q_total = 134.40 + 0 + 26.15 = 160.55 kVAR.

Step 3: Overall Plant Apparent Power & Power Factor
Total Apparent Power S_demand = √(P_total² + Q_total²)
  = √(325.93² + 160.55²) = √(106,230 + 25,776) = √132,006 = 363.33 kVA.
Overall Plant PF = P_total / S_demand = 325.93 / 363.33 = 0.897 lagging.

Step 4: Transformer Capacity Sizing with 20% Growth Margin
S_required = S_demand × 1.20 = 363.33 × 1.20 = 436.0 kVA.

Step 5: Standard Transformer Selection
The nearest standard IEC distribution transformer rating above 436 kVA is 500 kVA (11 kV / 415 V Dyn11).`,
        hi: `चरण 1: सक्रिय मांग: P_motor = 179.2 kW, P_heat = 92.73 kW, P_light = 54.0 kW। कुल P = 325.93 kW।
चरण 2: प्रतिक्रियाशील मांग: Q_motor = 134.4 kVAR, Q_heat = 0, Q_light = 26.15 kVAR। कुल Q = 160.55 kVAR।
चरण 3: आभासी शक्ति S = √(325.93² + 160.55²) = 363.33 kVA। समग्र PF = 0.897 लैगिंग।
चरण 4: 20% मार्जिन सहित kVA = 363.33 × 1.20 = 436.0 kVA।
चरण 5: मानक ट्रांसफार्मर चयन = 500 kVA (11 kV/415 V)।`,
        bn: `ধাপ ১: মোট সক্রিয় চাহিদা P_total = ১৭৯.২০ + ৯২.৭৩ + ৫৪.০০ = ৩২৫.৯৩ kW।
ধাপ ২: মোট রিঅ্যাক্টিভ চাহিদা Q_total = ১৩৪.৪০ + ০ + ২৬.১৫ = ১৬০.৫৫ kVAR।
ধাপ ৩: মোট আপাত চাহিদা S = ৩৬৩.৩৩ kVA, সার্বিক PF = ০.৮৯৭ ল্যাগিং।
ধাপ ৪: ২০% মার্জিনসহ প্রয়োজনীয় ট্রান্সফরমার kVA = ৪৩৬.০ kVA।
ধাপ ৫: নির্বাচিত স্ট্যান্ডার্ড ট্রান্সফরমার = ৫০০ kVA (১১ kV / ৪১৫ V)।`
      }
    },
    {
      id: 'ex-20-2-apfc-calc',
      problem: {
        en: 'An industrial facility operates at a continuous load of P = 450 kW on a 415 V, 50 Hz 3-phase supply with an uncorrected power factor of 0.72 lagging. The utility electricity tariff imposes a severe penalty for PF < 0.90 and offers maximum rebate for PF ≥ 0.98. Calculate: (a) Line current drawn before correction, (b) Required APFC capacitor bank rating in kVAR to achieve a target PF of 0.98 lagging, (c) New line current after correction, and (d) Percentage reduction in feeder line current.',
        hi: 'एक औद्योगिक संयंत्र 415 V, 50 Hz पर 0.72 लैगिंग PF के साथ 450 kW लोड चलाता है। ज्ञात करें: (a) सुधार से पहले लाइन धारा, (b) 0.98 PF प्राप्त करने हेतु आवश्यक APFC कैपेसिटर kVAR, (c) सुधार के बाद नई लाइन धारा, एवं (d) लाइन धारा में प्रतिशत कमी।',
        bn: 'একটি শিল্প প্রতিষ্ঠান ৪১৫ V, ৫০ Hz সরবরাহে ০.৭২ ল্যাগিং PF সহ ৪৫০ kW লোড চালায়। নির্ণয় করুন: (a) সংশোধনের পূর্বে লাইন কারেন্ট, (b) লক্ষ্যমাত্রা ০.৯৮ PF অর্জনে প্রয়োজনীয় APFC ক্যাপাসিটর kVAR, (c) সংশোধনের পরে নতুন লাইন কারেন্ট, এবং (d) লাইন কারেন্টে শতকরা হ্রাস।'
      },
      givenValues: {
        'P': '450 kW',
        'V_L': '415 V',
        'PF_initial': '0.72 lagging',
        'PF_target': '0.98 lagging'
      },
      solution: {
        en: `Step 1: Uncorrected Line Current (at PF₁ = 0.72)
P = √3 · V_L · I_L1 · cos φ₁
I_L1 = P / (√3 · V_L · cos φ₁) = 450,000 / (1.73205 × 415 × 0.72)
     = 450,000 / 517.54 = 869.50 A.
Apparent power S₁ = 450 / 0.72 = 625.0 kVA.

Step 2: Required APFC Capacitor Bank (Q_C)
Initial angle φ₁ = arccos(0.72) = 43.946° ⇒ tan φ₁ = tan(43.946°) = 0.9638
Target angle φ₂ = arccos(0.98) = 11.478° ⇒ tan φ₂ = tan(11.478°) = 0.2031
Required Capacitor kVAR:
Q_C = P · (tan φ₁ - tan φ₂) = 450 × (0.9638 - 0.2031) = 450 × 0.7607 = 342.3 kVAR.
(An APFC panel of 350 kVAR with steps: 25 + 25 + 50 + 50 + 100 + 100 kVAR is selected).

Step 3: Corrected Line Current (at PF₂ = 0.98)
I_L2 = P / (√3 · V_L · cos φ₂) = 450,000 / (1.73205 × 415 × 0.98)
     = 450,000 / 704.42 = 638.82 A.
New Apparent power S₂ = 450 / 0.98 = 459.18 kVA.

Step 4: Percentage Reduction in Feeder Line Current
ΔI = I_L1 - I_L2 = 869.50 - 638.82 = 230.68 A reduction.
% Reduction = (230.68 / 869.50) × 100% = 26.53%!
Conclusion: The APFC bank relieves 230.7 A from the cables and main transformer, cuts line I²R heat losses by 46.0% (since P_loss ∝ I²), and completely eliminates low-PF utility penalties.`,
        hi: `चरण 1: सुधार से पहले धारा I_L1 = 450,000 / (√3 × 415 × 0.72) = 869.50 A। S₁ = 625.0 kVA।
चरण 2: आवश्यक कैपेसिटर Q_C = 450 × (tan 43.95° - tan 11.48°) = 450 × (0.9638 - 0.2031) = 342.3 kVAR (350 kVAR पैनल चुना गया)।
चरण 3: सुधार के बाद नई धारा I_L2 = 450,000 / (√3 × 415 × 0.98) = 638.82 A।
चरण 4: धारा में कमी = 869.50 - 638.82 = 230.68 A (26.53% की भारी बचत)।`,
        bn: `ধাপ ১: পূর্ববর্তী লাইন কারেন্ট I_L1 = ৮৬৯.৫০ A (S₁ = ৬২৫.০ kVA)।
ধাপ ২: প্রয়োজনীয় ক্যাপাসিটর Q_C = ৪৫০ × (০.৯৬৩৮ - ০.২০৩১) = ৩৪২.৩ kVAR (৩৫০ kVAR রেটিং)।
ধাপ ৩: সংশোধিত লাইন কারেন্ট I_L2 = ৬৩৮.৮২ A (S₂ = ৪৫৯.২ kVA)।
ধাপ ৪: কারেন্ট হ্রাস = ২৩০.৬৮ A (২৬.৫৩% সাশ্রয়)।`
      }
    }
  ],
  practicalApplications: {
    en: [
      'Substation Transformers (Dyn11): Step-down 11 kV to 415 V distribution with Delta primary (traps 3rd harmonics) and Star secondary (provides 415 V 3-phase and 240 V 1-phase).',
      'APFC Capacitor Panels: Automatic reactive power compensation using microprocessor controllers and detuned filter reactors to maintain plant PF > 0.98.',
      'Industrial Motor Control Centers (MCC): DOL, Star-Delta, and VFD starting circuits with thermal overload and negative-sequence unbalance protection.',
      'Harmonic Mitigation & Detuned Filters: 7% series reactors tuned to 189 Hz to safely absorb harmonic distortions from variable speed drives and UPS systems.'
    ],
    hi: [
      'सबस्टेशन ट्रांसफार्मर (Dyn11): 11 kV को 415 V में बदलने के लिए डेल्टा-स्टार ट्रांसफार्मर का उपयोग।',
      'APFC कैपेसिटर पैनल: पावर फैक्टर को 0.98 से ऊपर बनाए रखने के लिए स्वचालित नियंत्रक पैनल।',
      'मोटर कंट्रोल सेंटर (MCC): मोटरों की सुरक्षा और स्टार्टिंग के लिए स्टार-डेल्टा और VFD कंट्रोल पैनल।',
      'हार्मोनिक फिल्टर: VFD से होने वाले नुकसान से बचाने के लिए 7% डिट्यून्ड रिएक्टर।'
    ],
    bn: [
      'সাবস্টেশন ট্রান্সফরমার (Dyn11): ১১ kV থেকে ৪১৫ V এ রূপান্তরে ডেল্টা-স্টার ট্রান্সফরমার ব্যবহার।',
      'APFC প্যানেল: বিদ্যুৎ বিল জরিমানা এড়াতে স্বয়ংক্রিয় পাওয়ার ফ্যাক্টর সংশোধন ব্যবস্থা।',
      'মোটর কন্ট্রোল সেন্টার (MCC): শিল্প মোটর পরিচালনায় স্টার-ডেল্টা ও সফট স্টার্টার।',
      'হারমোনিক ফিল্টারিং: VFD ড্রাইভের সুরক্ষা নিশ্চিত করতে ৭% ডিটিউনিং রিঅ্যাক্টর ফিল্টার।'
    ]
  },
  importantPoints: {
    en: [
      'Industrial transformers must be sized based on maximum coincident active demand, power factor, diversity, and 20-25% future growth margin.',
      'APFC capacitor bank sizing: Q_C = P · (tan φ₁ - tan φ₂); upgrading PF from 0.75 to 0.98 reduces feeder line current by over 23%.',
      'A 7% series detuned reactor sets the resonant frequency to 189 Hz (below 5th harmonic 250 Hz), preventing harmonic amplification.',
      'Steady-state feeder cable voltage drop must be kept strictly under 3.0% at continuous full load per IEC 60364.',
      'Voltage Unbalance Factor (VUF) must remain below 1.5% to avoid destructive motor rotor negative-sequence heating (ΔT ∝ VUF²).'
    ],
    hi: [
      'ट्रांसफार्मर क्षमता का निर्धारण वास्तविक अधिकतम मांग, पावर फैक्टर और 20% विस्तार मार्जिन के आधार पर किया जाता है।',
      'APFC कैपेसिटर क्षमता Q_C = P · (tan φ₁ - tan φ₂); PF को 0.75 से 0.98 करने से करंट में 23% से अधिक कमी आती है।',
      '7% डिट्यून्ड रिएक्टर रेजोनेंस को 189 Hz पर सेट करके 5वें हार्मोनिक (250 Hz) के खतरे को पूरी तरह समाप्त करता है।',
      'IEC 60364 के अनुसार केबल में वोल्टेज ड्रॉप 3.0% के भीतर होना अनिवार्य है।',
      'मोटर को जलने से बचाने के लिए वोल्टेज असंतुलन 1.5% से कम होना चाहिए।'
    ],
    bn: [
      'সর্বোচ্চ লোড, পাওয়ার ফ্যাক্টর ও ২০% মার্জিন বিবেচনায় ট্রান্সফরমারের kVA রেটিং নির্ধারণ করা হয়।',
      'APFC ক্যাপাসিটর ব্যাংক Q_C = P · (tan φ₁ - tan φ₂); PF ০.৭৫ থেকে ০.৯৮ এ উন্নীত করলে কারেন্ট ২৩% হ্রাস পায়।',
      '৭% ডিটিউনিং রিঅ্যাক্টর রেজোন্যান্সকে ১৮৯ Hz এ সেট করে ৫ম হারমোনিক্সের বিপদ রোধ করে।',
      'IEC 60364 অনুযায়ী পূর্ণ লোডে কেবলে ভোল্টেজ ড্রপ ৩.০% এর নিচে রাখা বাধ্যতামূলক।',
      'মোটর রক্ষা করতে ভোল্টেজ ভারসাম্যহীনতা ১.৫% এর নিচে থাকা আবশ্যক।'
    ]
  },
  commonMistakes: {
    en: [
      'Sizing transformers by merely summing connected kW without applying diversity factor and operating power factor.',
      'Connecting standard capacitors directly to high-VFD networks without detuned series reactors, causing capacitor blowout due to harmonic resonance.',
      'Allowing voltage unbalance to exceed 2%, leading to severe motor overheating due to negative-sequence rotor currents.',
      'Ignoring cable inductive reactance (X) in long 3-phase feeder runs, resulting in excessive voltage drop.'
    ],
    hi: [
      'बिना डाइवर्सिटी फैक्टर और पावर फैक्टर के केवल जुड़े लोड (kW) को जोड़कर ट्रांसफार्मर चुनना।',
      'बिना डिट्यून्ड रिएक्टर के VFD नेटवर्क पर सीधे कैपेसिटर लगाना, जिससे रेजोनेंस के कारण कैपेसिटर फट जाते हैं।',
      '2% से अधिक वोल्टेज असंतुलन की उपेक्षा करना, जिससे मोटर की वाइंडिंग जल सकती है।',
      'लंबी केबलों में इंडक्टिव रिएक्टेंस (X) को नजरअंदाज करना जिससे अत्यधिक वोल्टेज ड्रॉप होता है।'
    ],
    bn: [
      'ডাইভার্সিটি ও পাওয়ার ফ্যাক্টর বিবেচনা না করে কেবল মোট লোড যোগ করে ট্রান্সফরমার নির্বাচন করা।',
      'ডিটিউনিং রিঅ্যাক্টর ছাড়া VFD লোডে ক্যাপাসিটর যুক্ত করা, ফলে হারমোনিক রেজোন্যান্সে ক্যাপাসিটর নষ্ট হয়।',
      'ভোল্টেজ ভারসাম্যহীনতা ২% এর বেশি রেখে মোটর চালানো, ফলে নেগেটিভ-সিকোয়েন্সে রোটর অতিরিক্ত উত্তপ্ত হয়।',
      'দীর্ঘ কেবলে রিঅ্যাক্ট্যান্স (X) উপেক্ষা করা, যার ফলে মোটরে বিপজ্জনক ভোল্টেজ ড্রপ ঘটে।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-20-1',
      question: {
        en: 'According to standard industrial electrical codes (IEC 60364 / IS 732), what is the maximum permissible steady-state voltage drop from the main distribution board to full-load motor terminals?',
        hi: 'मानक औद्योगिक विद्युत नियमों (IEC 60364) के अनुसार मुख्य वितरण बोर्ड से मोटर टर्मिनलों तक अधिकतम अनुमेय वोल्टेज ड्रॉप कितना होता है?',
        bn: 'আন্তর্জাতিক শিল্প মানদণ্ড (IEC 60364) অনুসারে মেইন ডিস্ট্রিবিউশন বোর্ড থেকে মোটর টার্মিনাল পর্যন্ত সর্বোচ্চ অনুমোদিত ভোল্টেজ ড্রপ কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '1.0%', hi: '1.0%', bn: '১.০%' } },
        { id: 'opt-b', text: { en: '3.0%', hi: '3.0%', bn: '৩.০%' } },
        { id: 'opt-c', text: { en: '7.5%', hi: '7.5%', bn: '৭.৫%' } },
        { id: 'opt-d', text: { en: '12.0%', hi: '12.0%', bn: '১২.০%' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'IEC 60364 mandates that steady-state voltage drop in motor feeder circuits should not exceed 3.0% under continuous full load to maintain rated motor torque and prevent overheating.',
        hi: 'IEC 60364 के अनुसार सामान्य पूर्ण भार पर मोटर फीडर में वोल्टेज ड्रॉप 3.0% से अधिक नहीं होना चाहिए।',
        bn: 'IEC 60364 অনুযায়ী পূর্ণ লোডে মোটরের স্বাভাবিক কার্যক্ষমতা রক্ষায় ভোল্টেজ ড্রপ ৩.০% এর নিচে থাকা বাধ্যতামূলক।'
      }
    },
    {
      id: 'mcq-20-2',
      question: {
        en: 'What is the primary function of connecting a 7% series detuned reactor in an APFC capacitor panel?',
        hi: 'APFC कैपेसिटर पैनल में 7% डिट्यून्ड रिएक्टर को श्रेणी में जोड़ने का मुख्य कार्य क्या है?',
        bn: 'APFC ক্যাপাসিটর প্যানেলে ৭% সিরিজ ডিটিউনিং রিঅ্যাক্টর ব্যবহারের প্রধান উদ্দেশ্য কী?'
      },
      options: [
        { id: 'opt-a', text: { en: 'To increase the fundamental 50 Hz capacitor current', hi: 'मूल 50 Hz कैपेसिटर धारा को बढ़ाना', bn: '৫০ Hz মূল ক্যাপাসিটর কারেন্ট বৃদ্ধি করা' } },
        { id: 'opt-b', text: { en: 'To step up the system operating voltage by 7%', hi: 'सिस्टम वोल्टेज को 7% स्टेप-अप करना', bn: 'সিস্টেম ভোল্টেজ ৭% বৃদ্ধি করা' } },
        { id: 'opt-c', text: { en: 'To tune the branch below the 5th harmonic (to 189 Hz) and prevent destructive harmonic resonance', hi: 'शाखा को 5वें हार्मोनिक से नीचे (189 Hz पर) ट्यून करना तथा विनाशकारी हार्मोनिक रेजोनेंस को रोकना', bn: 'সার্কিটকে ৫ম হারমোনিকের নিচে (১৮৯ Hz এ) টিউন করে ক্ষতিকারক হারমোনিক রেসোন্যান্স প্রতিরোধ করা' } },
        { id: 'opt-d', text: { en: 'To convert alternating current into direct current', hi: 'एसी को डीसी में बदलना', bn: 'এসি-কে ডিসি-তে রূপান্তর করা' } }
      ],
      correctOptionId: 'opt-c',
      explanation: {
        en: 'A 7% reactor sets the series resonant frequency to 189 Hz, ensuring the branch behaves inductively at all dominant harmonic frequencies (250 Hz, 350 Hz), preventing parallel resonance between capacitors and upstream transformers.',
        hi: '7% रिएक्टर रेजोनेंस को 189 Hz पर सेट करता है, जिससे सभी हार्मोनिक आवृत्तियों (250 Hz, 350 Hz) पर सर्किट इंडक्टिव व्यवहार करता है और रेजोनेंस टल जाता है।',
        bn: '৭% রিঅ্যাক্টর টিউনিং কম্পাঙ্ককে ১৮৯ Hz এ নির্ধারণ করে, ফলে হারমোনিক ফ্রিকোয়েন্সিতে সার্কিট ইন্ডাক্টিভ থাকে এবং রেসোন্যান্স তৈরি হতে পারে না।'
      }
    },
    {
      id: 'mcq-20-3',
      question: {
        en: 'Why is voltage unbalance in a three-phase supply particularly destructive to induction motors?',
        hi: 'थ्री-फेज आपूर्ति में वोल्टेज असंतुलन इंडक्शन मोटरों के लिए विशेष रूप से विनाशकारी क्यों होता है?',
        bn: 'থ্রি-ফেজ সরবরাহে ভোল্টেজ ভারসাম্যহীনতা ইনডাকশন মোটরের জন্য অত্যন্ত ক্ষতিকর কেন?'
      },
      options: [
        { id: 'opt-a', text: { en: 'It causes the motor to run at twice its synchronous speed', hi: 'यह मोटर को दोगुनी गति पर चलाता है', bn: 'এটি মোটরের গতি দ্বিগুণ করে দেয়' } },
        { id: 'opt-b', text: { en: 'Negative-sequence voltages produce reverse rotating magnetic fields that cause severe rotor eddy current heating and vibration', hi: 'ऋणात्मक अनुक्रम (Negative-sequence) वोल्टेज विपरीत घूर्णी क्षेत्र बनाता है जिससे रोटर में अत्यधिक एडी धाराएं एवं तापन होता है', bn: 'নেগেটিভ-সিকোয়েন্স ভোল্টেজ বিপরীত ঘূর্ণনশীল ক্ষেত্র তৈরি করে রোটরে প্রচণ্ড এডি কারেন্ট ও তাপ সৃষ্টি করে' } },
        { id: 'opt-c', text: { en: 'It causes line fuses to produce direct current', hi: 'यह फ्यूज में डीसी धारा उत्पन्न करता है', bn: 'এটি লাইনে ডিসি কারেন্ট তৈরি করে' } },
        { id: 'opt-d', text: { en: 'It completely stops the stator current from flowing', hi: 'यह स्टेटर धारा को पूरी तरह रोक देता है', bn: 'এটি কারেন্ট প্রবাহ সম্পূর্ণ বন্ধ করে দেয়' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Unbalanced voltages decompose into negative-sequence components that rotate in the opposite direction at double slip frequency, creating massive rotor eddy current losses and rapid insulation degradation.',
        hi: 'असंतुलित वोल्टेज में नेगेटिव-सीक्वेंस घटक होते हैं जो विपरीत दिशा में घूमकर रोटर में भारी भंवर धाराएं और तीव्र तापन पैदा करते हैं।',
        bn: 'ভারসাম্যহীন ভোল্টেজের নেগেটিভ-সিকোয়েন্স অংশ বিপরীত দিকে ঘুরে মোটরের রোটরে বিপুল পরিমাণ এডি কারেন্ট ও বিপজ্জনক তাপ উৎপন্ন করে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-factory-substation-expansion',
      question: {
        en: 'A commercial textile mill operating on a 415 V, 50 Hz system has a present maximum active demand of 420 kW at 0.76 power factor lagging. The plant management plans a 25% plant expansion (additional 105 kW at 0.80 PF lagging) and simultaneously installs an APFC system to bring the overall post-expansion power factor to 0.98 lagging. Determine: (a) Present apparent power demand S_present, (b) Total active demand P_total and reactive demand Q_total after expansion without APFC, (c) Required APFC capacitor rating in kVAR, and (d) Total apparent power S_final after APFC installation. Can an existing 630 kVA transformer support the expansion?',
        hi: 'एक 415 V टेक्सटाइल मिल की वर्तमान मांग 420 kW (0.76 PF) है। 25% विस्तार (अतिरिक्त 105 kW, 0.80 PF) की योजना है और APFC द्वारा समग्र PF को 0.98 तक सुधारा जाना है। ज्ञात करें: (a) वर्तमान kVA, (b) बिना APFC के नया कुल P और Q, (c) आवश्यक APFC kVAR, एवं (d) APFC के बाद अंतिम kVA। क्या मौजूदा 630 kVA ट्रांसफार्मर इस विस्तार को संभाल सकता है?',
        bn: 'একটি টেক্সটাইল মিলের বর্তমান চাহিদা ৪২০ kW (০.৭৬ PF)। ২৫% সম্প্রসারণ (অতিরিক্ত ১০৫ kW, ০.৮০ PF) এবং APFC দ্বারা ০.৯৮ PF অর্জনের পরিকল্পনা রয়েছে। নির্ণয় করুন: (a) বর্তমান kVA, (b) APFC ছাড়া নতুন মোট P ও Q, (c) প্রয়োজনীয় APFC kVAR, এবং (d) APFC সহ চূড়ান্ত kVA। বিদ্যমান ৬৩০ kVA ট্রান্সফরমার কি এটি লোড নিতে পারবে?'
      },
      hint: {
        en: 'Present S = 420/0.76 = 552.6 kVA. Present Q = 420×tan(40.54°) = 359.3 kVAR. Additional P = 105 kW, Q = 105×tan(36.87°) = 78.75 kVAR. New P_total = 525 kW, Q_total = 438.05 kVAR. Target Q_target = 525×tan(11.48°) = 106.63 kVAR. Q_C = 438.05 - 106.63 = 331.4 kVAR. S_final = 525 / 0.98 = 535.7 kVA (< 630 kVA, Yes!).',
        hi: 'वर्तमान S = 552.6 kVA। नया P = 525 kW, नया Q = 438.05 kVAR। आवश्यक Q_C = 331.4 kVAR। APFC के बाद S_final = 535.7 kVA। चूंकि 535.7 kVA < 630 kVA है, ट्रांसफार्मर सुरक्षित है!',
        bn: 'বর্তমান S = ৫৫২.৬ kVA। নতুন P = ৫২৫ kW, নতুন Q = ৪৩৮.০৫ kVAR। প্রয়োজনীয় Q_C = ৩৩১.৪ kVAR। চূড়ান্ত S = ৫৩৫.৭ kVA (< ৬৩০ kVA, তাই সক্ষম)।'
      },
      answerKey: {
        en: '(a) Present Apparent Power Demand:\nS_present = 420 kW / 0.76 = 552.63 kVA.\n\n(b) Post-Expansion Demands (Without APFC):\nPresent Q = 420 × tan(arccos 0.76) = 420 × 0.8553 = 359.23 kVAR.\nAdditional P = 105 kW.\nAdditional Q = 105 × tan(arccos 0.80) = 105 × 0.7500 = 78.75 kVAR.\nTotal Active Demand P_total = 420 + 105 = 525.0 kW.\nTotal Reactive Demand Q_total = 359.23 + 78.75 = 437.98 kVAR.\nUncorrected Apparent Power = √(525² + 437.98²) = 683.7 kVA (would OVERLOAD the 630 kVA transformer!).\n\n(c) Required APFC Capacitor Bank:\nTarget Q_final = P_total × tan(arccos 0.98) = 525 × 0.2031 = 106.63 kVAR.\nRequired Q_C = Q_total - Q_final = 437.98 - 106.63 = 331.35 kVAR (use 350 kVAR APFC panel).\n\n(d) Final Apparent Power & Transformer Check:\nS_final = P_total / PF_target = 525.0 / 0.98 = 535.71 kVA.\nConclusion: Since 535.71 kVA is well within the 630 kVA transformer rating (utilization = 85.0%), the existing transformer can easily handle the 25% plant expansion without needing an expensive transformer replacement!',
        hi: '(a) वर्तमान kVA = 552.63 kVA।\n(b) विस्तार के बाद कुल P = 525 kW, कुल Q = 437.98 kVAR (बिना APFC के kVA = 683.7 kVA जो ट्रांसफार्मर को ओवरलोड कर देगा)।\n(c) आवश्यक APFC कैपेसिटर Q_C = 437.98 - 106.63 = 331.35 kVAR।\n(d) APFC के बाद अंतिम मांग S_final = 535.71 kVA। चूंकि 535.71 kVA < 630 kVA है (85% लोड), मौजूदा ट्रांसफार्मर पूरी तरह सुरक्षित रूप से काम करेगा।',
        bn: '(a) বর্তমান চাহিদা = ৫৫২.৬৩ kVA।\n(b) নতুন মোট P = ৫২৫ kW, নতুন Q = ৪৩৭.৯৮ kVAR (APFC ছাড়া kVA = ৬৮৩.৭ kVA যা ওভারলোড করত)।\n(c) প্রয়োজনীয় APFC ক্যাপাসিটর Q_C = ৩৩১.৩৫ kVAR।\n(d) APFC সহ চূড়ান্ত চাহিদা S_final = ৫৩৫.৭১ kVA। যেহেতু ৫৩৫.৭১ kVA < ৬৩০ kVA, তাই বিদ্যমান ট্রান্সফরমারটি অনায়াসেই লোড নিতে পারবে।'
      }
    },
    {
      id: 'pq-cable-drop-starting-running',
      question: {
        en: 'A 400 V, 50 Hz, 3-phase, 110 kW (150 HP) compressor motor (efficiency 94%, full-load running PF = 0.88 lagging) is fed through a 180 m copper feeder cable with R_c = 0.160 Ω/km and X_c = 0.072 Ω/km. During Direct-On-Line (DOL) starting, the motor draws 6.5 times full-load running current at a starting power factor of 0.35 lagging. Calculate: (a) Steady-state running line current and percentage voltage drop, and (b) DOL starting line current and percentage voltage drop during motor start. Does starting voltage drop stay within the 10.0% standard limit?',
        hi: 'एक 110 kW (150 HP), 400 V मोटर 180 m लंबी केबल (R = 0.16 Ω/km, X = 0.072 Ω/km) से जुड़ी है। ज्ञात करें: (a) सामान्य रनिंग धारा और वोल्टेज ड्रॉप (%), एवं (b) DOL स्टार्टिंग धारा (6.5 गुना) और स्टार्टिंग वोल्टेज ड्रॉप (%)। क्या स्टार्टिंग ड्रॉप 10.0% सीमा के भीतर है?',
        bn: 'একটি ১১০ kW, ৪০০ V মোটর ১৮০ মিটার ক্যাবলের (R = ০.১৬ Ω/km, X = ০.০৭২ Ω/km) মাধ্যমে পরিচালিত। নির্ণয় করুন: (a) স্বাভাবিক রানিং কারেন্ট ও ভোল্টেজ ড্রপ (%), এবং (b) DOL স্টার্টিং কারেন্ট ও স্টার্টিং ভোল্টেজ ড্রপ (%)। স্টার্টিং ড্রপ কি ১০.০% সীমার মধ্যে রয়েছে?'
      },
      hint: {
        en: 'P_in = 110/0.94 = 117.02 kW. I_run = 117020 / (√3 × 400 × 0.88) = 191.9 A. Cable R = 0.0288 Ω, X = 0.01296 Ω. Running drop ΔV_run = √3 × 191.9 × (0.0288×0.88 + 0.01296×0.475) = 332.38 × 0.0315 = 10.47 V (2.62%). Starting current I_start = 6.5 × 191.9 = 1,247.4 A. Starting drop ΔV_start = √3 × 1247.4 × (0.0288×0.35 + 0.01296×0.9367) = 2160.5 × 0.0222 = 47.96 V (11.99% > 10.0% — Requires Star-Delta or Soft Starter!).',
        hi: 'रनिंग धारा = 191.9 A, रनिंग ड्रॉप = 10.47 V (2.62% < 3%)। DOL स्टार्टिंग धारा = 1,247.4 A, स्टार्टिंग ड्रॉप = 47.96 V (11.99% > 10% सीमा से अधिक, अतः सॉफ्ट स्टार्टर या स्टार-डेल्टा आवश्यक है)।',
        bn: 'রানিং কারেন্ট = ১৯১.৯ A, রানিং ড্রপ = ১০.৪৭ V (২.৬২%)। DOL স্টার্টিং কারেন্ট = ১২৪৭.৪ A, স্টার্টিং ড্রপ = ৪৭.৯৬ V (১১.৯৯% > ১০% এর বেশি, তাই স্টার-ডেল্টা বা সফট স্টার্টার প্রয়োজন)।'
      },
      answerKey: {
        en: '(a) Steady-State Running Calculations:\nElectrical Input P_in = 110 kW / 0.94 = 117.02 kW.\nRunning Line Current I_run = 117,020 / (√3 × 400 × 0.88) = 191.92 A.\nCable Loop (180 m = 0.180 km): R = 0.160 × 0.180 = 0.0288 Ω, X = 0.072 × 0.180 = 0.01296 Ω.\nRunning drop ΔV_run = √3 · I_run · (R · cos φ_run + X · sin φ_run)\n  = 1.73205 × 191.92 × (0.0288 × 0.88 + 0.01296 × 0.4750)\n  = 332.41 × (0.02534 + 0.00616) = 332.41 × 0.03150 = 10.47 V.\nRunning % Voltage Drop = (10.47 / 400) × 100% = 2.62% (< 3.0%, Compliant!).\n\n(b) DOL Starting Calculations:\nStarting Line Current I_start = 6.5 × 191.92 = 1,247.48 A.\nStarting PF cos φ_start = 0.35 ⇒ sin φ_start = √(1 - 0.35²) = 0.9367.\nStarting drop ΔV_start = √3 · I_start · (R · cos φ_start + X · sin φ_start)\n  = 1.73205 × 1,247.48 × (0.0288 × 0.35 + 0.01296 × 0.9367)\n  = 2,160.70 × (0.01008 + 0.01214) = 2,160.70 × 0.02222 = 48.01 V.\nStarting % Voltage Drop = (48.01 / 400) × 100% = 12.00%.\n\nConclusion: The starting voltage drop of 12.00% EXCEEDS the permissible 10.0% limit, causing severe line dip that would trip adjacent sensitive electronic controls. The engineering recommendation is to upgrade from Direct-On-Line starting to a Star-Delta Starter or Electronic Soft Starter (reducing starting current to ~400 A and drop to ~3.8%).',
        hi: '(a) सामान्य रनिंग अवस्था:\nइनपुट P = 117.02 kW, रनिंग धारा I_run = 191.92 A।\nवोल्टेज ड्रॉप ΔV_run = 10.47 V (2.62% < 3.0% मानक के अनुरूप)।\n(b) DOL स्टार्टिंग अवस्था:\nस्टार्टिंग धारा = 1,247.48 A।\nस्टार्टिंग वोल्टेज ड्रॉप ΔV_start = 48.01 V (12.00%)।\nनिष्कर्ष: 12.00% का स्टार्टिंग ड्रॉप 10.0% सीमा से अधिक है, अतः मोटर के लिए स्टार-डेल्टा स्टार्टर या सॉफ्ट स्टार्टर लगाना आवश्यक है।',
        bn: '(a) রানিং অবস্থায়:\nরানিং কারেন্ট I_run = ১৯১.৯২ A, ভোল্টেজ ড্রপ = ১০.৪৭ V (২.৬২% < ৩.০%)।\n(b) DOL স্টার্টিং অবস্থায়:\nস্টার্টিং কারেন্ট = ১২৪৭.৪৮ A, স্টার্টিং ভোল্টেজ ড্রপ = ৪৮.০১ V (১২.০০%)।\nসিদ্ধান্ত: ১২.০০% ড্রপ অনুমোদিত ১০.০% সীমার চেয়ে বেশি। তাই এই মোটরে স্টার-ডেল্টা স্টার্টার বা সফট স্টার্টার ব্যবহার করা বাধ্যতামূলক।'
      }
    }
  ]
};
