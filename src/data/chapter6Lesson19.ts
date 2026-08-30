import { Lesson } from '../types';

export const LESSON_TRANSFORMER_PROTECTION_MAINTENANCE: Lesson = {
  id: 'lsn-ch6-transformer-protection-maintenance',
  topicId: 'ch6-transformer-protection-maintenance',
  chapterId: 'ch-electrical-machines',
  order: 7,
  title: {
    en: 'Transformer Protection, Faults & Maintenance',
    hi: 'ट्रांसफॉर्मर सुरक्षा, फॉल्ट विश्लेषण एवं रखरखाव',
    bn: 'ট্রান্সফর্মার প্রটেকশন, ফল্ট ও রক্ষণাবেক্ষণ'
  },
  description: {
    en: 'Comprehensive engineering principles of transformer fault classification (internal winding, inter-turn, core, and ground faults vs external through-faults and overloads), protection systems (87T biased differential relay, Buchholz gas/surge relay, 50/51 overcurrent, 51N/REF restricted earth fault, OTI/WTI thermal replicas, PRD, and ZnO surge arresters), transformer oil condition monitoring (BDV, DGA, moisture, acidity), preventive maintenance workflows, safety protocols (LOTO, grounding), and systematic diagnostic troubleshooting.',
    hi: 'ट्रांसफॉर्मर फॉल्ट वर्गीकरण के तकनीकी सिद्धांत (आंतरिक वाइंडिंग, इंटर-टर्न, कोर एवं अर्थ फॉल्ट बनाम बाह्य थ्रू-फॉल्ट व ओवरलोड), सुरक्षा प्रणालियाँ (87T बायस्ड डिफरेंशियल रिले, बुखोल्ज़ गैस व ऑयल सर्ज रिले, 50/51 ओवरकरंट, 51N/REF अर्थ फॉल्ट, OTI/WTI थर्मल सेंसर, PRD एवं ZnO लाइटनिंग अरेस्टर), ट्रांसफॉर्मर तेल विश्लेषण (BDV, DGA), निवारक रखरखाव एवं LOTO सुरक्षा नियम।',
    bn: 'ট্রান্সফর্মার ফল্ট শ্রেণিবিন্যাস (অভ্যন্তরীণ ওয়াইন্ডিং, ইন্টার-টার্ন, কোর ও আর্থ ফল্ট বনাম বাহ্যিক থ্রু-ফল্ট ও ওভারলোড), প্রটেকশন সিস্টেম (87T বায়াসড ডিফারেনশিয়াল রিলে, বুকহলজ রিলে, 50/51 ওভারকারেন্ট, 51N/REF আর্থ ফল্ট, OTI/WTI থার্মাল সেন্সর, PRD ও ZnO সার্জ অ্যারেস্টার), তেলের গুণমান পরীক্ষা (BDV, DGA) এবং প্রতিরোধমূলক রক্ষণাবেক্ষণ ও নিরাপত্তা ব্যবস্থা।'
  },
  diagrams: [
    {
      id: 'diag-trans-protection-architecture',
      svgType: 'transformer-protection',
      title: {
        en: 'Transformer Protection Scheme & Differential Zone Boundary',
        hi: 'ट्रांसफॉर्मर सुरक्षा प्रणाली एवं डिफरेंशियल ज़ोन सीमा',
        bn: 'ট্রান্সফর্মার প্রটেকশন স্কিম ও ডিফারেনশিয়াল জোন বাউন্ডারি'
      },
      caption: {
        en: 'Comprehensive transformer protection diagram showing main tank, conservator, Buchholz relay, current transformers (CTs) defining 87T differential protection zone, PRD, OTI/WTI sensors, and surge arresters.',
        hi: 'ट्रांसफॉर्मर सुरक्षा आरेख जिसमें मेन टैंक, कंज़र्वेटर, बुखोल्ज़ रिले, 87T डिफरेंशियल ज़ोन बनाने वाले CTs, PRD, OTI/WTI एवं सर्ज अरेस्टर प्रदर्शित हैं।',
        bn: 'ট্রান্সফরমার প্রটেকশন ডায়াগ্রাম যাতে ট্যাংক, কনজারভেটর, বুকহলজ রিলে, 87T ডিফারেনশিয়াল জোন পরিচালনাকারী CTs, PRD, OTI/WTI ও সার্জ অ্যারেস্টার প্রদর্শিত।'
      }
    }
  ],
  estimatedMinutes: 55,
  easyExplanation: {
    en: 'Power transformers are the most expensive and crucial components in an electrical grid. If a transformer fails catastrophically, replacing it takes months and costs millions of dollars. To prevent damage, engineers install specialized protective systems that act like guards and medical monitors: (1) Internal Faults occur inside the tank (such as short-circuits between winding turns, phase-to-ground flashovers, or hot-spots in the steel core). These are detected instantly by Biased Differential Relays (87T), which compare current entering the transformer with current leaving it. If current leaks inside, 87T trips the circuit breakers in milliseconds. (2) Buchholz Relays are installed in oil-immersed transformers with conservator tanks. Slow incipient faults release small gas bubbles that float upward, triggering an early warning alarm; severe internal short-circuits create violent oil shockwaves that push a mechanical flap to trip the breakers immediately. (3) External Abnormalities (like grid overloads, cooling fan failures, or lightning strikes) are guarded by thermal sensors (WTI/OTI), overcurrent relays (51), and surge arresters (ZnO). Regular maintenance—including dielectric breakdown voltage (BDV) testing of transformer oil, Dissolved Gas Analysis (DGA), and checking silica gel breathers—ensures transformers operate reliably for 30–40 years.',
    hi: 'पावर ट्रांसफॉर्मर विद्युत ग्रिड का सबसे मूल्यवान और महत्वपूर्ण उपकरण होता है। यदि कोई बड़ा ट्रांसफॉर्मर जल जाए, तो उसे बदलने में महीनों और करोड़ों रुपये लग सकते हैं। ट्रांसफॉर्मर को सुरक्षित रखने के लिए कई सुरक्षात्मक उपकरण लगाए जाते हैं: (1) आंतरिक फॉल्ट (Internal Faults) टैंक के अंदर होते हैं (जैसे वाइंडिंग के फेरों के बीच शॉर्ट-सर्किट या कोर का जलना)। इन्हें 87T डिफरेंशियल रिले द्वारा पकड़ा जाता है—यह रिले अंदर जाने वाले और बाहर निकलने वाले करंट की तुलना करता है; अंतर मिलने पर यह 20 मिली-सेकंड में ट्रांसफॉर्मर को ट्रिप कर देता है। (2) बुखोल्ज़ रिले (Buchholz Relay) ऑयल-इमर्स्ड ट्रांसफॉर्मर के पाइप में लगा होता है। छोटी खराबी में निकलने वाली गैस ऊपर उठकर अलार्म बजाती है, जबकि भीषण शॉर्ट-सर्किट में तेल की तेज लहर रिले को धक्का देकर तुरंत बिजली काट देती है। (3) बाहरी समस्याओं (ओवरलोड, कूलिंग फेलियर, बिजली गिरना) के लिए थर्मल रिले (WTI), ओवरकरंट रिले एवं सर्ज अरेस्टर सुरक्षा प्रदान करते हैं। तेल परीक्षण (BDV/DGA) और नियमित रखरखाव से ट्रांसफॉर्मर दशकों तक सुरक्षित कार्य करता है।',
    bn: 'পাওয়ার ট্রান্সফরমার হলো বৈদ্যুতিক গ্রিডের সবচেয়ে মূল্যবান ও সংবেদনশীল অংশ। একটি বড় ট্রান্সফরমার নষ্ট হলে তা বদলাতে বিপুল সময় ও অর্থ ব্যয় হয়। ট্রান্সফরমারকে সুরক্ষিত রাখতে বিশেষ সুরক্ষাব্যবস্থা ব্যবহার করা হয়: (১) অভ্যন্তরীণ ফল্ট (যেমন ওয়াইন্ডিংয়ের তারে শর্ট সার্কিট বা কোরের ত্রুটি) শনাক্ত করে 87T বায়াসড ডিফারেনশিয়াল রিলে—যা ইনপুট ও আউটপুট কারেন্টের তুলনা করে মিল না পেলে কয়েক মিলি-সেকেন্ডে ট্রান্সফরমার বিচ্ছিন্ন করে। (২) বুকহলজ রিলে তেলের পাইপে যুক্ত থাকে; সামান্য ত্রুটিতে উৎপন্ন গ্যাস অ্যালার্ম বাজায়, আর মারাত্মক ফল্টে তেলের তীব্র ধাক্কায় ব্রেকার ট্রিপ করে বিদ্যুৎ বন্ধ করে দেয়। (৩) বাহ্যিক ওভারলোড, ফ্যান নষ্ট হওয়া বা বজ্রপাতের বিরুদ্ধে থার্মাল রিলে (WTI/OTI), ওভারকারেন্ট রিলে ও সার্জ অ্যারেস্টার কাজ করে। তেলের ডাই-ইলেকট্রিক টেস্ট (BDV) ও প্রতিরোধমূলক রক্ষণাবেক্ষণ ট্রান্সফরমারের দীর্ঘায়ু নিশ্চিত করে।'
  },
  detailedExplanation: {
    en: `1. Engineering Need for Transformer Protection:
- High Capital Value & Long Procurement Lead Time: Power transformers (10–500 MVA) require 6–24 months for manufacture and installation; uncontained catastrophic failures cause millions in direct damages and prolonged customer blackouts.
- High Energy Density & Fire Hazard: Hundreds of thousands of liters of mineral insulating oil under high electric fields present severe fire and explosion hazards during internal arcing.
- Thermal Degradation of Solid Insulation: Kraft paper and pressboard insulation irreversibly degrade when temperature exceeds nominal thermal limits (e.g. continuous operation >110°C halves insulation life for every 6°C rise by the Montsinger/Arrhenius rule).

2. Classification of Transformer Faults & Abnormal Conditions:
A. Internal Faults (Located inside the protected tank/winding zone):
- Phase-to-Ground Faults: Breakdown of insulation between high-voltage winding conductor and grounded core/tank.
- Phase-to-Phase Faults: Flashover between adjacent phase coils (rare in 3-phase units due to heavy inter-phase barriers, but highly destructive).
- Inter-Turn (Turn-to-Turn) Faults: Insulation failure between adjacent turns of the same winding. A shorted turn behaves as an autotransformer secondary with extremely high local circulating current (thousands of amps), causing severe localized overheating and oil decomposition without initially drawing massive line current.
- Core Faults: Lamination insulation breakdown, defective core clamping bolts, or burrs causing localized eddy-current loops, thermal hotspots, and gassing.
- Tap Changer (OLTC) Faults: Mechanical transition resistor failure, arcing contact wear, or contact misalignment.

B. External Abnormal Conditions (Outside transformer tank):
- System Overload: Prolonged consumer demand beyond rated MVA capacity causing high I²R copper heating and winding temperature rise.
- Through-Faults (External Short Circuits): Heavy short-circuits on external transmission/distribution lines. The transformer experiences severe electromagnetic forces (mechanical stress proportional to I_sc²) and thermal shock.
- Overvoltages & Surges: Atmospheric lightning impulses and transmission switching surges stressing the turn-to-turn and line-end insulation.
- Underfrequency / Overfluxing (V/f): Voltage rise or frequency drop increasing core flux density (B_m ∝ V/f), saturating the core and driving flux into structural steel tanks.

3. Protection Devices vs Monitoring/Alarm Devices:
- Protective Tripping Devices: Automatically trigger instantaneous or time-delayed circuit breaker opening to de-energize the transformer (87T Differential, 50/51 Overcurrent, 51N/REF Earth Fault, Buchholz Trip Contact, Pressure Relief Device Trip).
- Monitoring / Alarm Devices: Continuously measure physical/chemical parameters and sound early warning SCADA alarms without immediate tripping (Buchholz Gas Alarm, Magnetic Oil Gauge Low Level, WTI/OTI Stage 1 Alarm, Dissolved Gas Online Monitors).

4. Differential Protection (ANSI 87T) — The Core Primary Protection:
- Principle of Operation (Kirchhoff's Current Law applied to a zone): Current entering the protected zone is continuously compared against current leaving the zone.
  Under healthy or through-fault conditions:
  I_diff = |I_1,sec - I_2,sec| ≈ 0
  For an internal fault inside the CT boundary:
  I_diff = |I_1,sec + I_2,sec| >> Pickup Threshold -> Instantaneous Trip (<25 ms).
- Percentage Bias (Restraining) Characteristic: To prevent false tripping during heavy through-faults caused by CT saturation or off-nominal tap changer ratios, a restraining current I_rest = (|I_1,sec| + |I_2,sec|) / 2 is used. The relay operates only when I_diff / I_rest > Slope % (typically 20–40%).
- Harmonic Restraint:
  * 2nd Harmonic Inrush Restraint: Transformer energization draws an initial magnetizing inrush current (up to 8–10× rated current) rich in 2nd harmonics. The relay filters the 2nd harmonic (>15%) to block false tripping during routine switching.
  * 5th Harmonic Overfluxing Restraint: Used to detect core over-excitation.

5. Buchholz Relay (ANSI 96):
- Applicable to all conservator-type oil-immersed transformers (typically >500 kVA).
- Mounted on the inclined pipe (2° to 5° upward slope) connecting the main tank to the conservator.
- Dual Operating Mechanism:
  * Upper Float (Incipient Fault Alarm): Slow insulation degradation or minor sparking generates gases (H₂, CH₄, C₂H₄) that rise and collect in the relay chamber, displacing oil and tilting the upper mercury/reed switch to initiate a SCADA ALARM.
  * Lower Vane (Catastrophic Fault Trip): Severe internal short-circuits produce violent arcing and instantaneous oil vaporization, creating a rapid oil surge wave (>1.0 m/s) towards the conservator that deflects the lower vane to initiate an INSTANTANEOUS TRIP.

6. Thermal & Auxiliary Protection Systems:
- WTI (Winding Temperature Indicator) & OTI (Oil Temperature Indicator): OTI measures top oil temperature via a bulb. WTI simulates hottest-spot winding temperature using a CT secondary heater coil feeding a thermal replica pocket.
  * Stage 1 (85–90°C): Starts forced cooling fans/pumps.
  * Stage 2 (100–105°C): Annunciates warning alarm.
  * Stage 3 (120–130°C): Trips primary/secondary breakers.
- PRD (Pressure Relief Device): Spring-loaded mechanical valve with limit switch that relieves dangerous internal tank pressures (>50–70 kPa) in milliseconds, venting oil and tripping the breaker to prevent tank rupture.
- Surge Arresters (ANSI 28): Zinc Oxide (ZnO) gapless arresters installed directly at HV/LV bushings clamp lightning and switching overvoltages to safe residual levels.

7. Preventive Maintenance & Condition Monitoring Framework:
- Dielectric Breakdown Voltage (BDV) Test (IEC 60156): Measures the voltage required to spark across a 2.5 mm electrode gap submerged in oil (New oil >60 kV; Serviceable oil >30–40 kV).
- Dissolved Gas Analysis (DGA, IEC 60599 / IEEE C57.104): Gas chromatography measuring key diagnostic gases:
  * Hydrogen (H₂): Corona/partial discharge.
  * Methane (CH₄) & Ethane (C₂H₆): Low-to-medium thermal oil overheating (150–300°C).
  * Ethylene (C₂H₄): High thermal oil overheating (>300°C).
  * Acetylene (C₂H₂): High-energy arcing / internal short circuit (Critical danger!).
  * Carbon Monoxide (CO) & Carbon Dioxide (CO₂): Solid cellulose paper degradation.
- Moisture Content: Karl Fischer titration (<15–20 ppm for HV transformers).
- Silica Gel Breather: Dehydrating breather absorbs moisture from air entering the conservator during thermal breathing (Color changes from Cobalt Blue [Dry] to Pink [Moisture Saturated]).

8. Electrical Safety, Isolation & Troubleshooting Workflow:
- Golden Safety Rules: Before any physical inspection or maintenance:
  1. Complete electrical disconnection from all HV/LV sources.
  2. Implement Lockout/Tagout (LOTO) on all circuit breakers and isolators.
  3. Verify absence of voltage with certified HV detectors.
  4. Discharge residual capacitive charge and apply portable safety grounding/earth leads.
- Diagnostic Flow: Alarm/Trip -> Check Annunciation -> Isolate Equipment -> Visual Inspection -> Sample Oil for DGA & BDV -> Insulation Resistance (Megger) & Winding Resistance -> Escalate for specialized testing before re-energizing.`,

    hi: `1. ट्रांसफॉर्मर सुरक्षा की तकनीकी आवश्यकता:
- अत्यधिक लागत एवं उपकरण का महत्व: पावर ट्रांसफॉर्मर (10–500 MVA) ग्रिड के सबसे महंगे घटक हैं। आंतरिक आर्क से ट्रांसफॉर्मर के फटने या जलने से भारी आर्थिक नुकसान और लंबा ब्लैकआउट होता है।
- आग एवं विस्फोट का खतरा: टैंक में भरा हजारों लीटर खनिज इन्सुलेटिंग ऑयल अत्यधिक ज्वलनशील होता है।
- सॉलिड पेपर इंसुलेशन का क्षरण: क्राफ्ट पेपर इंसुलेशन 110°C से अधिक तापमान पर तेजी से नष्ट होता है (मॉन्ट्सिंगर नियम के अनुसार प्रत्येक 6°C तापमान वृद्धि पर इंसुलेशन का जीवनकाल आधा हो जाता है)।

2. ट्रांसफॉर्मर फॉल्ट वर्गीकरण:
A. आंतरिक फॉल्ट (टैंक के अंदर):
- अर्थ फॉल्ट (वाइंडिंग से ग्राउंड कोर का संपर्क)
- फेज-टू-फेज फॉल्ट (दो फेजों के बीच शॉर्ट-सर्किट)
- इंटर-टर्न फॉल्ट (एक ही वाइंडिंग के फेरों के बीच इंसुलेशन टूटना—यह बहुत अधिक स्थानीय धारा उत्पन्न कर तेल को जलाता है)
- कोर फॉल्ट (लैमिनेशन इंसुलेशन टूटने से कोर में अत्यधिक भंवर धारा व हॉटस्पॉट बनना)।
B. बाह्य असामान्यताएँ (टैंक के बाहर):
- निरंतर ओवरलोड
- बाहरी थ्रू-फॉल्ट (डाउनस्ट्रीम लाइन पर शॉर्ट सर्किट, जिससे भारी यांत्रिक व थर्मल झटका लगता है)
- आकाशीय बिजली एवं स्विचिंग सर्ज
- ओवरफ्लक्सिंग (V/f अनुपात बढ़ना, जिससे कोर संतृप्त होकर गर्म होता है)।

3. मुख्य सुरक्षा प्रणालियाँ:
- 87T बायस्ड डिफरेंशियल रिले: प्राइमरी एवं सेकेंडरी धाराओं की लगातार तुलना करता है। आंतरिक फॉल्ट पर दोनों धाराओं का अंतर (Id) बढ़ते ही यह 20 मिली-सेकंड में ट्रिप कर देता है। बाहरी थ्रू-फॉल्ट पर CT सैचुरेशन से बचने के लिए रीस्ट्रेनिंग क्वाइल (प्रतिशत बायस) का प्रयोग होता है। ट्रांसफॉर्मर चार्ज करते समय मैग्नेटाइजिंग इनरश करंट से बचने के लिए 2nd हार्मोनिक ब्लॉकिंग का उपयोग किया जाता है।
- बुखोल्ज़ रिले (96): कंज़र्वेटर टैंक वाले ट्रांसफॉर्मरों के पाइप में लगता है।
  * ऊपरी फ्लोट: हल्की खराबी में निकलने वाली गैस से अलार्म बजाता है।
  * निचला वेन: भीषण शॉर्ट-सर्किट में तेल की तेज लहर (Surge) से तुरंत ट्रिप कराता है।
- WTI/OTI तापमान संकेतक: तेल एवं वाइंडिंग का तापमान मापते हैं (85°C पर पंखा चालू, 105°C पर अलार्म, 120°C पर ट्रिप)।
- प्रेशर रिलीफ डिवाइस (PRD): टैंक में अचानक बने अतिरिक्त दबाव को तुरंत बाहर निकाल कर टैंक को फटने से रोकता है।
- सिलिका जेल ब्रीदर: सांस लेते समय नमी सोखता है (नीला = सूखा, गुलाबी = संतृप्त/खराब)।
- DGA (विलीन गैस विश्लेषण) एवं BDV परीक्षण: तेल की ब्रेकडाउन वोल्टेज (>40 kV) और एसीटिलीन (C₂H₂), हाइड्रोजन (H₂) आदि गैसों का विश्लेषण कर आंतरिक स्थिति की जांच की जाती है।`,

    bn: `১. ট্রান্সফর্মার প্রটেকশনের প্রয়োজনীয়তা:
- মূলধনী মূল্য ও দীর্ঘ সংগ্রহ সময়: পাওয়ার ট্রান্সফরমার অত্যন্ত ব্যয়বহুল এবং তৈরি করতে কয়েক মাস সময় লাগে।
- অগ্নি ও বিস্ফোরণ ঝুঁকি: হাজার হাজার লিটার খনিজ তেল অভ্যন্তরীণ আর্কের ফলে মারাত্মক অগ্নিকাণ্ড ঘটাতে পারে।
- পেপার ইনসুলেশন ক্ষয়: তাপমাত্রা বৃদ্ধির সাথে সাথে পেপারের আয়ু দ্রুত হ্রাস পায়।

২. ফল্ট শ্রেণিবিন্যাস:
A. অভ্যন্তরীণ ফল্ট: ওয়াইন্ডিং টু গ্রাউন্ড ফল্ট, ফেজ-টু-ফেজ ফল্ট, ইন্টার-টার্ন ফল্ট (তারের প্যাঁচের ভেতরের শর্ট সার্কিট), কোর ল্যামিনেশন ফল্ট।
B. বাহ্যিক অস্বাভাবিকতা: সিস্টেম ওভারলোড, বাহ্যিক শর্ট সার্কিট (থ্রু-ফল্ট), বজ্রপাত ও সুইচিং সার্জ, ওভারফ্লাক্সিং (V/f বৃদ্ধি)।

৩. প্রধান প্রটেকশন ডিভাইসসমূহ:
- 87T বায়াসড ডিফারেনশিয়াল রিলে: ইনপুট ও আউটপুট কারেন্টের পার্থক্য (Id) পর্যবেক্ষণ করে অভ্যন্তরীণ ত্রুটিতে তাৎক্ষণিক (<২৫ ms) ট্রিপ করে। বাহ্যিক ফল্টে স্থিতিশীল থাকতে পার্সেন্টেজ বায়াস ব্যবহার করে এবং চার্জিং ইনরাশ কারেন্টে অপ্রয়োজনীয় ট্রিপ ঠেকাতে ২য় হারমোনিক রেস্ট্রেইন্ট ব্যবহার করে।
- বুকহলজ রিলে (96): কনজারভেটর পাইপে যুক্ত থাকে।
  * উপরের ফ্লোট: অল্প গ্যাসে অ্যালার্ম দেয়।
  * নিচের ভেন: তীব্র তেলের ধাক্কায় দ্রুত ট্রিপ করে।
- WTI/OTI থার্মাল প্রটেকশন: ওয়াইন্ডিং ও তেলের তাপমাত্রা পর্যবেক্ষণ করে কুলিং চালু ও অতিরিক্ত তাপে ট্রিপ নিশ্চিত করে।
- PRD (প্রেসার রিলিফ ভালভ): তেলের অতিরিক্ত চাপ দ্রুত বের করে ট্যাংক বিস্ফোরণ রোধ করে।
- তেলের গুণমান পরীক্ষা (BDV ও DGA): ব্রেকডাউন ভোল্টেজ পরীক্ষা (>৪০ kV) ও ডিফারেনশিয়াল গ্যাস অ্যানালাইসিস (অ্যাসিটিলিন, হাইড্রোজেন) দ্বারা ট্রান্সফরমারের অভ্যন্তরীণ স্বাস্থ্য নির্ণয় করা হয়।`
  },
  formulas: [
    {
      id: 'f-diff-current',
      formula: 'I_{diff} = |\\vec{I}_{1,sec} - \\vec{I}_{2,sec}|',
      description: {
        en: 'Differential operating current in 87T relay operating coil (equals vector sum of CT secondary currents).',
        hi: '87T डिफरेंशियल रिले की ऑपरेटिंग क्वाइल में बहने वाली अंतर धारा (CT सेकेंडरी धाराओं का वेक्टर अंतर)।',
        bn: '87T ডিফারেনশিয়াল রিলে অপারেটিং কয়েলে প্রবাহিত ডিফারেনশিয়াল কারেন্ট।'
      }
    },
    {
      id: 'f-restraining-current',
      formula: 'I_{rest} = \\frac{|\\vec{I}_{1,sec}| + |\\vec{I}_{2,sec}|}{2}',
      description: {
        en: 'Restraining (bias) current providing stability during external through-faults.',
        hi: 'रीस्ट्रेनिंग (बायस) करंट जो बाह्य थ्रू-फॉल्ट के दौरान रिले को स्थिर रखता है।',
        bn: 'রেস্ট্রেইনিং (বায়াস) কারেন্ট যা বাহ্যিক থ্রু-ফল্টে রিলেকে অপ্রয়োজনীয় ট্রিপ থেকে রক্ষা করে।'
      }
    },
    {
      id: 'f-percentage-bias-slope',
      formula: 'Slope = \\frac{I_{diff}}{I_{rest}} \\times 100\\%',
      description: {
        en: 'Percentage slope characteristic of biased differential relay (typically 20% to 40%).',
        hi: 'डिफरेंशियल रिले का प्रतिशत स्लोप विशेषता गुणांक (सामान्यतः 20% से 40%)।',
        bn: 'বায়াসড ডিফারেনশিয়াল রিলের শতকরা স্লোপ বৈশিষ্ট্য (সাধারণত ২০% থেকে ৪০%)।'
      }
    },
    {
      id: 'f-oil-bdv-standard',
      formula: 'BDV_{min} \\ge 30 \\text{ kV to } 60 \\text{ kV (2.5 mm gap)}',
      description: {
        en: 'Standard dielectric breakdown voltage threshold for mineral insulating oil testing (IEC 60156).',
        hi: 'खनिज इन्सुलेटिंग तेल का न्यूनतम ब्रेकडाउन वोल्टेज मानक (2.5 मिमी गैप)।',
        bn: 'খনিজ তেলের ন্যূনতম ডাই-ইলেকট্রিক ব্রেকডাউন ভোল্টেজ মান (IEC ৬০১৫৬)।'
      }
    },
    {
      id: 'f-insulation-aging-rate',
      formula: 'V_{aging} = 2^{\\frac{T_{hotspot} - 98}{6}}',
      description: {
        en: 'Montsinger/Arrhenius thermal aging rate of cellulose insulation (aging doubles for every 6°C above 98°C).',
        hi: 'इंसुलेशन पेपर का थर्मल एजिंग दर (98°C से ऊपर प्रत्येक 6°C वृद्धि पर उम्र आधी हो जाती है)।',
        bn: 'ইনসুলেশন পেপারের থার্মাল এজিং হার (৯৮°C এর উপরে প্রতি ৬°C বৃদ্ধিতে আয়ু অর্ধেক হয়)।'
      }
    }
  ],
  solvedExamples: [
    {
      id: 'ex-trans-prot-diff-slope',
      problem: {
        en: 'A 20 MVA, 132/33 kV star-delta transformer is protected by a percentage differential relay with a 30% slope setting. During an external through-fault, the secondary current from CT1 is 8.5 A and from CT2 is 7.9 A due to slight CT saturation. Calculate: (a) Differential current Id, (b) Restraining current Ir, (c) Operating slope percentage, and determine if the relay remains stable.',
        hi: 'एक 20 MVA, 132/33 kV स्टार-डेल्टा ट्रांसफॉर्मर 30% स्लोप वाले डिफरेंशियल रिले द्वारा सुरक्षित है। बाह्य फॉल्ट के समय CT1 का सेकेंडरी करंट 8.5 A तथा CT2 का करंट 7.9 A है। ज्ञात कीजिए: (a) डिफरेंशियल करंट Id, (b) रीस्ट्रेनिंग करंट Ir, (c) ऑपरेटिंग स्लोप %, और बताएं कि क्या रिले स्थिर रहेगा?',
        bn: 'একটি ২০ MVA, ১৩২/৩৩ kV স্টার-ডেল্টা ট্রান্সফরমারে ৩০% স্লোপ বিশিষ্ট ডিফারেনশিয়াল রিলে রয়েছে। বাহ্যিক ফল্টের সময় CT1 সেকেন্ডারি ৮.৫ A এবং CT2 সেকেন্ডারি ৭.৯ A। নির্ণয় করো: (a) Id, (b) Ir, (c) কার্যনির্বাহী স্লোপ % এবং রিলেটি স্থিতিশীল থাকবে কিনা।'
      },
      givenValues: {
        'CT1 secondary current I1': '8.5 A',
        'CT2 secondary current I2': '7.9 A',
        'Relay slope setting': '30% (0.30)'
      },
      solution: {
        en: 'Step 1: Calculate Differential Operating Current:\n- Id = |I1 - I2| = |8.5 A - 7.9 A| = 0.60 A.\n\nStep 2: Calculate Restraining Bias Current:\n- Ir = (|I1| + |I2|) / 2 = (8.5 + 7.9) / 2 = 16.4 / 2 = 8.20 A.\n\nStep 3: Calculate Actual Operating Ratio (Slope):\n- Actual Slope = (Id / Ir) × 100% = (0.60 / 8.20) × 100% = 7.317% ≈ 7.32%.\n\nStep 4: Relay Stability Decision:\n- Since the actual operating slope (7.32%) is significantly below the relay pickup slope threshold (30%), the restraining coil effectively restrains the relay. The relay remains fully stable and will NOT false-trip.',
        hi: 'Step 1: Id = |8.5 - 7.9| = 0.60 A।\nStep 2: Ir = (8.5 + 7.9) / 2 = 8.20 A।\nStep 3: स्लोप = (0.60 / 8.20) × 100% = 7.32%।\nStep 4: चूंकि वास्तविक स्लोप (7.32%) रिले की सेटिंग (30%) से कम है, अतः रिले स्थिर रहेगा और ट्रिप नहीं करेगा।',
        bn: 'ধাপ ১: Id = |৮.৫ - ৭.৯| = ০.৬০ A।\nধাপ ২: Ir = (৮.৫ + ৭.৯) / ২ = ৮.২০ A।\nধাপ ৩: কার্যনির্বাহী স্লোপ = (০.৬০ / ৮.২০) × ১০০% = ৭.৩২%।\nধাপ ৪: যেহেতু স্লোপ (৭.৩২%) নির্ধারিত ৩০% এর কম, তাই রিলে সম্পূর্ণ স্থিতিশীল থাকবে এবং ট্রিপ করবে না।'
      },
      finalAnswer: {
        en: 'Id = 0.60 A, Ir = 8.20 A, Actual Slope = 7.32%. The relay remains stable and does NOT false-trip on through-fault.',
        hi: 'Id = 0.60 A, Ir = 8.20 A, स्लोप = 7.32%। रिले पूरी तरह स्थिर रहेगा और ट्रिप नहीं करेगा।',
        bn: 'Id = ০.৬০ A, Ir = ৮.২০ A, স্লোপ = ৭.৩২%। রিলেটি স্থিতিশীল থাকবে এবং কোনো অনাকাঙ্ক্ষিত ট্রিপ ঘটবে না।'
      }
    },
    {
      id: 'ex-trans-prot-oil-aging',
      problem: {
        en: 'A 50 MVA substation transformer operates at an elevated winding hot-spot temperature of 110°C continuously during peak summer. According to the Montsinger 6°C rule (base temperature 98°C for normal life expectancy of 30 years), calculate: (a) The relative thermal aging rate factor, (b) The effective expected life of the insulation paper if operated continuously at this temperature.',
        hi: 'एक 50 MVA ट्रांसफॉर्मर गर्मियों में 110°C हॉट-स्पॉट तापमान पर लगातार चलता है। मॉन्ट्सिंगर 6°C नियम (98°C पर 30 वर्ष जीवनकाल) के अनुसार ज्ञात कीजिए: (a) थर्मल एजिंग फैक्टर, (b) इस तापमान पर इंसुलेशन पेपर का प्रभावी जीवनकाल।',
        bn: 'একটি ৫০ MVA ট্রান্সফরমার ১১০°C হট-স্পট তাপমাত্রায় একটানা চলছে। মন্টসিঙ্গার ৬°C নিয়ম অনুসারে (৯৮°C এ স্বাভাবিক আয়ু ৩০ বছর) নির্ণয় করো: (a) থার্মাল এজিং গুণক, (b) কার্যকর আয়ু।'
      },
      givenValues: {
        'Hot-spot Temperature T': '110°C',
        'Reference Normal Temperature T_ref': '98°C',
        'Normal Design Life': '30 years'
      },
      solution: {
        en: 'Step 1: Calculate Relative Aging Acceleration Factor (V_aging):\n- Temperature rise above reference: ΔT = 110°C - 98°C = 12°C.\n- By Montsinger rule: V_aging = 2^(ΔT / 6) = 2^(12 / 6) = 2^2 = 4.0.\n- This means solid cellulose paper insulation degrades 4 times faster than normal.\n\nStep 2: Calculate Effective Expected Life:\n- Expected Life = Nominal Life / V_aging = 30 years / 4.0 = 7.5 years.\n- Engineering Conclusion: Sustained 110°C operation reduces the asset life from 30 years to only 7.5 years, emphasizing the vital role of forced cooling fan controls (WTI stage 1).',
        hi: 'Step 1: ΔT = 110°C - 98°C = 12°C।\nएजिंग फैक्टर = 2^(12/6) = 2^2 = 4 गुना तेजी से खराब होगा।\nStep 2: प्रभावी जीवनकाल = 30 / 4 = 7.5 वर्ष।',
        bn: 'ধাপ ১: তাপমাত্রা বৃদ্ধি ΔT = ১১০ - ৯৮ = ১২°C।\nএজিং গুণক = 2^(১২/৬) = ৪ গুণ দ্রুত নষ্ট হবে।\nধাপ ২: কার্যকর আয়ু = ৩০ / ৪ = ৭.৫ বছর।'
      },
      finalAnswer: {
        en: 'Aging Rate Factor = 4.0× normal; Effective Insulation Life = 7.5 years (down from 30 years).',
        hi: 'एजिंग फैक्टर = 4.0 गुना; इंसुलेशन जीवनकाल = 7.5 वर्ष (30 वर्ष से घटकर)।',
        bn: 'এজিং গুণক = ৪.০ গুণ; কার্যকর আয়ু = ৭.৫ বছর (৩০ বছর থেকে হ্রাস পেয়ে)।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Substation Differential Zone Protection (87T): High-speed microprocessor relays protect 132 kV to 765 kV grid interconnect transformers, isolating massive internal short circuits within 20 ms before tank rupture occurs.',
      'Buchholz Incipient Gas Detection: Online gas-in-oil collection in conservator piping warns dispatchers of developing dielectric breakdown days or weeks before catastrophic flashover.',
      'Dissolved Gas Analysis (DGA) Fleet Diagnostics: Periodic chromatography of mineral oil detects trace acetylene, hydrogen, and ethylene to prevent multimillion-dollar asset replacement.',
      'Substation Lockout/Tagout (LOTO) & Grounding Protocols: Mandatory safety procedures protecting electrical personnel during transformer internal inspections and bushing replacements.'
    ],
    hi: [
      'सबस्टेशन डिफरेंशियल ज़ोन सुरक्षा (87T): 132 kV से 765 kV ग्रिड ट्रांसफॉर्मरों को आंतरिक फॉल्ट पर 20 मिली-सेकंड में आइसोलेट कर टैंक को फटने से बचाना।',
      'बुखोल्ज़ रिले गैस पहचान: धीमी गति से विकसित हो रही आंतरिक खराबी का पहले ही पता लगाकर अलार्म बजाना।',
      'विलीन गैस विश्लेषण (DGA): ट्रांसफॉर्मर तेल की रासायनिक जांच द्वारा आंतरिक आर्क एवं हॉटस्पॉट का सटीक पता लगाना।',
      'LOTO एवं ग्राउंडिंग सुरक्षा प्रक्रियाएं: सबस्टेशन रखरखाव के दौरान इंजीनियरों की जान की सुरक्षा सुनिश्चित करना।'
    ],
    bn: [
      'সাবস্টেশন ডিফারেনশিয়াল সুরক্ষা (87T): ১৩২ kV থেকে ৭৬৫ kV গ্রিড ট্রান্সফরমারকে অভ্যন্তরীণ ফল্টে মাত্র ২০ মিলিসেকেন্ডে বিচ্ছিন্ন করা।',
      'বুকহলজ গ্যাস শনাক্তকরণ: ধীরগতির অভ্যন্তরীণ ত্রুটি আগেভাগেই শনাক্ত করে অ্যালার্ম প্রদান।',
      'তেলের ডিজলভড গ্যাস অ্যানালাইসিস (DGA): ক্রোম্যাটোগ্রাফির মাধ্যমে তেলের গ্যাস বিশ্লেষণ করে ভেতরের সমস্যা নির্ণয়।',
      'LOTO ও গ্রাউন্ডিং নিরাপত্তা প্রটোকল: সাবস্টেশন রক্ষণাবেক্ষণের সময় কর্মীদের সর্বোচ্চ বৈদ্যুতিক সুরক্ষা প্রদান।'
    ]
  },
  importantPoints: {
    en: [
      '87T Differential protection provides fast, selective protection ONLY inside its CT zone; it must NOT trip on external through-faults or magnetizing inrush.',
      'Buchholz relays require an oil conservator tank and an upward-sloping connecting pipe (2°–5°) to allow buoyant fault gases to flow into the relay chamber.',
      'The presence of Acetylene (C₂H₂) in DGA oil testing is a critical indicator of severe high-energy arcing inside the transformer.',
      'Always enforce full isolation, Lockout/Tagout (LOTO), voltage verification, and safety grounding before performing any physical maintenance.'
    ],
    hi: [
      '87T डिफरेंशियल रिले केवल अपने CT ज़ोन के अंदर आंतरिक फॉल्ट पर ही ट्रिप करता है; यह बाहरी थ्रू-फॉल्ट या इनरश करंट पर ट्रिप नहीं होना चाहिए।',
      'बुखोल्ज़ रिले के लिए कंज़र्वेटर टैंक और 2° से 5° ढलान वाला पाइप अनिवार्य है ताकि गैस रिले चैंबर में आसानी से पहुंच सके।',
      'तेल के DGA परीक्षण में एसीटिलीन (C₂H₂) गैस का मिलना ट्रांसफॉर्मर के अंदर भीषण इलेक्ट्रिकल आर्क का संकेत है।',
      'भौतिक रखरखाव से पहले हमेशा पूर्ण आइसोलेशन, LOTO, वोल्टेज जांच एवं अर्थिंग सुरक्षा नियमों का पालन करें।'
    ],
    bn: [
      '87T ডিফারেনশিয়াল প্রটেকশন শুধুমাত্র নিজস্ব CT জোনের ভেতরেই কাজ করে; বাহ্যিক থ্রু-ফল্ট বা ইনরাশ কারেন্টে এটি স্থিতিশীল থাকে।',
      'বুকহলজ রিলের জন্য কনজারভেটর ট্যাংক এবং ২° থেকে ৫° ঢালু পাইপ আবশ্যক যাতে গ্যাস সহজে রিলেতে পৌঁছায়।',
      'তেলের DGA টেস্টে অ্যাসিটিলিন (C₂H₂) গ্যাসের উপস্থিতি ট্রান্সফরমারের ভেতরে মারাত্মক ইলেকট্রিক্যাল আর্কের নির্দেশক।',
      'যেকোনো রক্ষণাবেক্ষণের পূর্বে সম্পূর্ণ আইসোলেশন, LOTO, ভোল্টেজ পরীক্ষা ও সেফটি গ্রাউন্ডিং নিশ্চিত করুন।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing 87T differential protection with overcurrent protection: 87T detects internal imbalance regardless of current magnitude, whereas 51 detects excessive total current.',
      'Assuming dry-type transformers have Buchholz relays: Buchholz relays only operate in oil-immersed transformers with conservator tanks.',
      'Re-energizing a transformer immediately after a Buchholz trip or Differential trip without comprehensive electrical tests (DGA, Megger, winding resistance).'
    ],
    hi: [
      'डिफरेंशियल (87T) और ओवरकरंट (51) में भ्रम: 87T केवल आंतरिक असंतुलन देखता है, जबकि 51 कुल करंट की अधिकता देखता है।',
      'यह सोचना कि ड्राई-टाइप ट्रांसफॉर्मर में बुखोल्ज़ रिले होता है: बुखोल्ज़ केवल ऑयल-इमर्स्ड ट्रांसफॉर्मर में ही काम करता है।',
      'बुखोल्ज़ ट्रिप या डिफरेंशियल ट्रिप के तुरंत बाद बिना DGA या इंसुलेशन जांच के ट्रांसफॉर्मर को दोबारा चालू कर देना (अत्यंत खतरनाक)।'
    ],
    bn: [
      '87T ডিফারেনশিয়াল এবং 51 ওভারকারেন্টকে গুলিয়ে ফেলা: 87T ভেতরের ভারসাম্যহীনতা দেখে, আর 51 অতিরিক্ত কারেন্ট দেখে।',
      'ড্রাই টাইপ ট্রান্সফরমারে বুকহলজ রিলে থাকে ভাবা: বুকহলজ শুধুমাত্র অয়েল-ইমার্সড কনজারভেটর ট্রান্সফরমারে থাকে।',
      'বুকহলজ বা ডিফারেনশিয়াল ট্রিপের পর যথাযথ পরীক্ষা (DGA, Megger) না করেই পুনরায় চালু করে দেওয়া মারাত্মক ভুল।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch6-19-1',
      question: {
        en: 'Which protection device operates on the principle of comparing current entering and leaving the protected zone?',
        hi: 'कौन सा सुरक्षा उपकरण संरक्षित ज़ोन में प्रवेश करने वाले और बाहर निकलने वाले करंट की तुलना के सिद्धांत पर कार्य करता है?',
        bn: 'কোন প্রটেকশন ডিভাইসটি ইনপুট ও আউটপুট কারেন্টের তুলনার নীতিতে কাজ করে?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Buchholz relay', hi: 'बुखोल्ज़ रिले', bn: 'বুকহলজ রিলে' } },
        { id: 'opt-b', text: { en: 'Biased Differential relay (87T)', hi: 'बायस्ड डिफरेंशियल रिले (87T)', bn: 'বায়াসড ডিফারেনশিয়াল রিলে (87T)' } },
        { id: 'opt-c', text: { en: 'Pressure relief device (PRD)', hi: 'प्रेशर रिलीफ डिवाइस (PRD)', bn: 'প্রেসার রিলিফ ডিভাইস (PRD)' } },
        { id: 'opt-d', text: { en: 'Zinc oxide surge arrester', hi: 'जिंक ऑक्साइड सर्ज अरेस्टर', bn: 'জিংক অক্সাইড সার্জ অ্যারেস্টার' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'The Biased Differential Relay (87T) applies Kirchhoff’s Current Law across the transformer CT boundaries. Under normal or external fault conditions Id ≈ 0, but during internal faults Id surges and trips the breakers instantaneously.',
        hi: 'बायस्ड डिफरेंशियल रिले (87T) CT सीमाओं के बीच धाराओं की तुलना करता है और आंतरिक फॉल्ट होने पर तुरंत ट्रिप करता है।',
        bn: 'বায়াসড ডিফারেনশিয়াল রিলে (87T) কারেন্টের তুলনা করে অভ্যন্তরীণ ফল্ট শনাক্ত করে দ্রুততম সময়ে ট্রিপ নিশ্চিত করে।'
      }
    },
    {
      id: 'mcq-ch6-19-2',
      question: {
        en: 'What does the detection of Acetylene (C₂H₂) gas during Dissolved Gas Analysis (DGA) of transformer oil signify?',
        hi: 'ट्रांसफॉर्मर तेल के DGA परीक्षण में एसीटिलीन (C₂H₂) गैस का मिलना क्या दर्शाता है?',
        bn: 'ট্রান্সফরমার তেলের DGA পরীক্ষায় অ্যাসিটিলিন (C₂H₂) গ্যাস পাওয়া গেলে কী বোঝায়?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Normal healthy aging of transformer oil', hi: 'तेल का सामान्य पुराना होना', bn: 'তেলের স্বাভাবিক পুরনো হওয়া' } },
        { id: 'opt-b', text: { en: 'Low-temperature paper moisture absorption', hi: 'कागज द्वारा नमी सोखना', bn: 'কাগজে আর্দ্রতা শোষণ' } },
        { id: 'opt-c', text: { en: 'High-energy electrical arcing or severe internal short-circuit', hi: 'उच्च-ऊर्जा इलेक्ट्रिकल आर्क या गंभीर आंतरिक शॉर्ट-सर्किट', bn: 'উচ্চ শক্তির বৈদ্যুতিক আর্ক বা মারাত্মক অভ্যন্তরীণ শর্ট সার্কিট' } },
        { id: 'opt-d', text: { en: 'Overcooling by radiator fans', hi: 'कूलिंग पंखों द्वारा अत्यधिक ठंडा होना', bn: 'কুলিং ফ্যান দ্বারা অতিরিক্ত শীতল হওয়া' } }
      ],
      correctOptionId: 'opt-c',
      explanation: {
        en: 'Acetylene (C₂H₂) forms only at extremely high localized thermal energies (>700–1000°C), making it the definitive chemical hallmark of severe electrical arcing or winding breakdown.',
        hi: 'एसीटिलीन केवल 700°C से अधिक के अत्यधिक तापमान पर ही बनती है, जो केवल भीषण इलेक्ट्रिकल आर्क में ही संभव है।',
        bn: 'অ্যাসিটিলিন কেবল ৭০০°C এর বেশি তাপে উৎপন্ন হয়, যা তীব্র ইলেকট্রিক্যাল আর্কিং বা শর্ট সার্কিটের স্পষ্ট প্রমাণ।'
      }
    },
    {
      id: 'mcq-ch6-19-3',
      question: {
        en: 'Why is 2nd harmonic restraint implemented in transformer differential relays?',
        hi: 'ट्रांसफॉर्मर डिफरेंशियल रिले में 2nd हार्मोनिक रीस्ट्रेन का उपयोग क्यों किया जाता है?',
        bn: 'ট্রান্সফর্মার ডিফারেনশিয়াল রিলেতে ২য় হারমোনিক রেস্ট্রেইন্ট কেন ব্যবহার করা হয়?'
      },
      options: [
        { id: 'opt-a', text: { en: 'To trip faster during ground faults', hi: 'अर्थ फॉल्ट में तेजी से ट्रिप करने के लिए', bn: 'আর্থ ফল্টে দ্রুত ট্রিপ করার জন্য' } },
        { id: 'opt-b', text: { en: 'To prevent false tripping during magnetizing inrush current on energization', hi: 'ट्रांसफॉर्मर चार्ज करते समय इनरश करंट से गलत ट्रिपिंग रोकने के लिए', bn: 'চার্জ করার সময় ম্যাগনেটাইজিং ইনরাশ কারেন্টে অপ্রয়োজনীয় ট্রিপ প্রতিরোধ করতে' } },
        { id: 'opt-c', text: { en: 'To measure oil dielectric breakdown voltage', hi: 'तेल का BDV मापने के लिए', bn: 'তেলের BDV পরিমাপ করতে' } },
        { id: 'opt-d', text: { en: 'To control cooling fan motor speed', hi: 'कूलिंग पंखे की गति नियंत्रित करने के लिए', bn: 'কুলিং ফ্যানের गति नियंत्रण करने के लिए' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'When a transformer is energized, core saturation produces a heavy magnetizing inrush current containing up to 20–30% second harmonic. The 2nd harmonic filter restrains the 87T relay from nuisance tripping.',
        hi: 'ट्रांसफॉर्मर को ऑन करते समय इनरश करंट में बहुत अधिक 2nd हार्मोनिक होता है; रिले इसे पहचान कर गलत ट्रिपिंग को रोकता है।',
        bn: 'ট্রান্সফরমার চালু করার সময় ইনরাশ কারেন্টে প্রচুর ২য় হারমোনিক থাকে; রিলে এটি ফিল্টার করে অনাকাঙ্ক্ষিত ট্রিপ রোধ করে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch6-19-1',
      question: {
        en: 'A 20 MVA, 132/33 kV star-delta transformer is protected by a percentage differential relay with a 30% slope. During an external through-fault, CT primary secondary current is 8.5 A and CT secondary side current is 7.9 A due to slight CT ratio mismatch. Calculate the differential current Id, the restraining current Ir, and determine if the relay will false-trip.',
        hi: 'एक 20 MVA, 132/33 kV ट्रांसफॉर्मर 30% स्लोप वाले डिफरेंशियल रिले द्वारा सुरक्षित है। बाहरी फॉल्ट के दौरान CT1 करंट 8.5 A और CT2 करंट 7.9 A है। Id, Ir एवं स्लोप की गणना करें और बताएं कि क्या रिले गलत ट्रिप करेगा?',
        bn: 'একটি ২০ MVA, ১৩২/৩৩ kV ট্রান্সফরমারে ৩০% স্লোপ বিশিষ্ট ডিফারেনশিয়াল রিলে রয়েছে। বাহ্যিক ফল্টে CT1 সেকেন্ডারি ৮.৫ A এবং CT2 সেকেন্ডারি ৭.৯ A। Id, Ir এবং রিলে ট্রিপ করবে কিনা তা নির্ণয় করুন।'
      },
      hint: {
        en: 'Use Id = |I1 - I2| and Ir = (I1 + I2) / 2. Compare the operating ratio Id/Ir with the relay slope setting (30%).',
        hi: 'Id = |I1 - I2| और Ir = (I1 + I2)/2 का प्रयोग करें। Id/Ir की तुलना 30% से करें।',
        bn: 'Id = |I1 - I2| এবং Ir = (I1 + I2)/2 সমীকরণ ব্যবহার করে Id/Ir অনুপাত ৩০% এর সাথে তুলনা করুন।'
      },
      answerKey: {
        en: `Calculation:
1. Differential Current:
   Id = |I1 - I2| = |8.5 A - 7.9 A| = 0.60 A
2. Restraining Current:
   Ir = (I1 + I2) / 2 = (8.5 + 7.9) / 2 = 16.4 / 2 = 8.20 A
3. Operating Ratio:
   Actual Slope = Id / Ir = 0.60 / 8.20 = 0.0732 = 7.32%
4. Decision:
   Since Actual Slope (7.32%) < Relay Setting Slope (30%), the relay remains stable and will NOT trip on this external through-fault.`,
        hi: `गणना:
1. डिफरेंशियल करंट Id = |8.5 - 7.9| = 0.60 A
2. रीस्ट्रेनिंग करंट Ir = (8.5 + 7.9) / 2 = 8.20 A
3. वास्तविक स्लोप = 0.60 / 8.20 = 7.32%
4. निर्णय: वास्तविक स्लोप (7.32%) रिले सेटिंग (30%) से कम है, अतः रिले सुरक्षित रहेगा और ट्रिप नहीं करेगा।`,
        bn: `গণনা:
১. ডিফারেনশিয়াল কারেন্ট Id = |৮.৫ - ৭.৯| = ০.৬০ A
২. রেস্ট্রেইনিং কারেন্ট Ir = (৮.৫ + ৭.৯) / ২ = ৮.২০ A
৩. কার্যনির্বাহী স্লোপ = ০.৬০ / ৮.২০ = ৭.৩২%
৪. সিদ্ধান্ত: প্রাপ্ত স্লোপ (৭.৩২%) নির্ধারিত ৩০% এর কম হওয়ায় রিলে ট্রিপ করবে না এবং সম্পূর্ণ স্থিতিশীল থাকবে।`
      }
    },
    {
      id: 'pq-ch6-19-2',
      question: {
        en: 'An annual maintenance oil test on a 33 kV substation transformer yielded the following test results: Average BDV = 22 kV (across 2.5 mm spherical electrodes), Moisture content = 42 ppm, and Silica gel color is pale pink. State the engineering diagnosis, the risks of continuing operation, and the required corrective action.',
        hi: '33 kV सबस्टेशन ट्रांसफॉर्मर के तेल की वार्षिक जांच में BDV = 22 kV, नमी = 42 ppm और सिलिका जेल गुलाबी पाई गई। इसका तकनीकी कारण, खतरा एवं समाधान लिखें।',
        bn: 'একটি ৩৩ kV ট্রান্সফরমারের তেলের টেস্টে গড় BDV = ২২ kV, আর্দ্রতা = ৪২ ppm এবং সিলিকা জেল হালকা গোলাপি পাওয়া গেল। এর প্রকৌশলগত ডায়াগনসিস, ঝুঁকি ও প্রয়োজনীয় প্রতিকার ব্যাখ্যা করুন।'
      },
      hint: {
        en: 'Standard BDV for 33 kV equipment must be >40 kV, and moisture should be <20 ppm. Pink silica gel indicates saturation.',
        hi: '33 kV के लिए मानक BDV > 40 kV और नमी < 20 ppm होनी चाहिए। गुलाबी सिलिका जेल नमी से संतृप्त है।',
        bn: '৩৩ kV এর জন্য আদর্শ BDV > ৪০ kV এবং আর্দ্রতা < ২০ ppm হওয়া উচিত। গোলাপি সিলিকা জেল সম্পৃক্ততার প্রমাণ।'
      },
      answerKey: {
        en: `Engineering Evaluation:
1. Diagnosis:
   - The oil is severely moisture-contaminated (Moisture 42 ppm >> standard limit of 20 ppm).
   - Dielectric strength has degraded dangerously (BDV 22 kV << minimum standard of 40 kV).
   - Silica gel breather is completely exhausted (pink color), allowing wet air ingestion during cyclic thermal breathing.
2. Operational Risks:
   - High risk of dielectric flashover between winding turns and tank ground under normal operating voltage or minor switching transients.
   - Accelerated moisture-induced hydrolytic degradation of cellulose Kraft insulation paper.
3. Corrective Engineering Action:
   - Replace or bake/reactivate the silica gel crystals until they restore dark cobalt blue color, and replace the bottom oil seal cup.
   - Perform on-site oil filtration and vacuum dehydration (centrifuging and degassing) to restore BDV >60 kV and reduce moisture <15 ppm.`,
        hi: `तकनीकी मूल्यांकन:
1. डायग्नोसिस: तेल में अत्यधिक नमी (42 ppm) है और BDV (22 kV) खतरनाक स्तर तक गिर गया है। सिलिका जेल पूरी तरह खराब (गुलाबी) हो चुकी है।
2. खतरे: वाइंडिंग में कभी भी आंतरिक स्पार्क या फ्लैशओवर हो सकता है।
3. सुधारात्मक कदम:
   - सिलिका जेल को तुरंत बदलें या गर्म कर नीला करें।
   - तेल को वैक्यूम डिहाइड्रेशन प्लांट द्वारा फिल्टर कर BDV > 60 kV और नमी < 15 ppm तक लाएं।`,
        bn: `প্রকৌশলগত মূল্যায়ন:
১. ডায়াগনসিস: তেলে অতিরিক্ত আর্দ্রতা (৪২ ppm) এবং BDV (২২ kV) বিপজ্জনকভাবে কম। সিলিকা জেল আর্দ্রতায় সম্পৃক্ত (গোলাপি)।
২. ঝুঁকি: যেকোনো মুহূর্তে ওয়াইন্ডিং ফ্ল্যাশওভার ও মারাত্মক শর্ট সার্কিট হতে পারে।
৩. প্রতিকার:
   - সিলিকা জেল পরিবর্তন করে গাঢ় নীল রঙের ড্রাই জেল লাগান।
   - অয়েল ফিল্ট্রেশন ও ভ্যাকুয়াম ডিহাইড্রেশন করে BDV > ৬০ kV এবং আর্দ্রতা < ১৫ ppm এ নামিয়ে আনুন।`
      }
    }
  ]
};
