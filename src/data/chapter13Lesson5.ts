import { Lesson } from '../types';

export const LESSON_REACTIVE_POWER_FLOW_VOLTAGE_STABILITY: Lesson = {
  id: 'lsn-ch13-reactive-power-flow-voltage',
  topicId: 'tp-reactive-power-flow',
  chapterId: 'ch-power-factor',
  order: 5,
  title: {
    en: 'Reactive Power Flow & Voltage Stability',
    hi: 'प्रतिघाती शक्ति प्रवाह एवं वोल्टेज स्थिरता',
    bn: 'রিঅ্যাক্টিভ পাওয়ার প্রবাহ ও ভোল্টেজ স্থায়িত্ব'
  },
  description: {
    en: 'Explore the fundamental power system relationships governing AC networks: real power P flows across transmission angle δ, while reactive power Q flows down voltage magnitude gradient (V₁ - V₂). Analyze the short-line voltage drop approximation ΔV ≈ (R·P + X·Q)/V, PV nose curves and voltage collapse limits, and light-load Ferranti effect overvoltages requiring shunt reactor compensation.',
    hi: 'एसी पावर सिस्टम के मौलिक संबंधों का अध्ययन: वास्तविक शक्ति P शक्ति कोण δ के अंतर से बहती है, जबकि प्रतिघाती शक्ति Q वोल्टेज परिमाण के अंतर (V₁ - V₂) द्वारा नियंत्रित होती है। वोल्टेज ड्रॉप सन्निकटन ΔV ≈ (R·P + X·Q)/V, PV नोज़ कर्व एवं वोल्टेज कोलैप्स सीमा, और हल्के लोड पर फेरांटी प्रभाव ओवरवोल्टेज का विश्लेषण करें।',
    bn: 'এসি পাওয়ার সিস্টেমের মৌলিক গতিশীলতা অনুসন্ধান: সক্রিয় ক্ষমতা P পাওয়ার কোণ δ এর মাধ্যমে প্রবাহিত হয়, যেখানে প্রতিক্রিয়াশীল ক্ষমতা Q ভোল্টেজের মানের পার্থক্যের (V₁ - V₂) ওপর নির্ভরশীল। ভোল্টেজ ড্রপ সমীকরণ ΔV ≈ (R·P + X·Q)/V, PV নোজ কার্ভ এবং ভোল্টেজ পতন সীমা, এবং হালকা লোডে ফেরান্টি ইফেক্টের কারণে সৃষ্ট ওভারভোল্টেজ ও শান্ট রিঅ্যাক্টরের ভূমিকা পর্যালোচনা।'
  },
  estimatedMinutes: 55,
  easyExplanation: {
    en: 'In an AC electrical grid, Real Power (kW) and Reactive Power (kVAR) behave like two very different fluids traveling through a pipe. Real power flows because of an angle difference—like turning a mechanical driveshaft where the receiving end twists behind the sending end. But Reactive Power flows purely because of a pressure (voltage) difference! High voltage pushes reactive power toward low voltage. If a city or factory consumes too much reactive power without local capacitors, the grid voltage is dragged down. If it drops past a critical "nose point", the entire grid can suffer a sudden, catastrophic blackout called "Voltage Collapse". Managing reactive power is the secret to keeping grid voltage rock-solid!',
    hi: 'एसी ग्रिड में एक्टिव पावर (kW) और रिएक्टिव पावर (kVAR) दो अलग-अलग तरह के द्रवों की तरह व्यवहार करते हैं। एक्टिव पावर कोण (δ) के अंतर से बहती है—जैसे किसी शाफ्ट को घुमाने पर उसका दूसरा सिरा थोड़ा मुड़ता है। परंतु रिएक्टिव पावर केवल वोल्टेज (दबाव) के अंतर से बहती है! उच्च वोल्टेज रिएक्टिव पावर को निम्न वोल्टेज की ओर धकेलता है। यदि कोई शहर स्थानीय कैपेसिटर के बिना बहुत अधिक रिएक्टिव पावर खींचता है, तो ग्रिड वोल्टेज तेजी से गिरता है। एक सीमा (नोज़ पॉइंट) के पार वोल्टेज अचानक शून्य हो जाता है जिसे "वोल्टेज कोलैप्स" कहते हैं।',
    bn: 'এসি পাওয়ার গ্রিডে সক্রিয় শক্তি (kW) এবং প্রতিক্রিয়াশীল শক্তি (kVAR) দুটি ভিন্ন বৈশিষ্ট্যের তরলের মতো আচরণ করে। সক্রিয় শক্তি প্রবাহিত হয় কোণের (δ) পার্থক্যের কারণে। কিন্তু প্রতিক্রিয়াশীল শক্তি প্রবাহিত হয় কেবল ভোল্টেজের (চাপের) পার্থক্যের কারণে! উচ্চ ভোল্টেজ রিঅ্যাক্টিভ পাওয়ারকে নিম্ন ভোল্টেজের দিকে ঠেলে দেয়। কোনো শহর বা কারখানা যদি স্থানীয় ক্যাপাসিটর ছাড়া গ্রিড থেকে অতিরিক্ত রিঅ্যাক্টিভ পাওয়ার টানে, তবে লাইনের ভोल্টেজ মারাত্মকভাবে কমে যায়। একটি নির্দিষ্ট সীমার নিচে নেমে গেলে পুরো গ্রিড ব্ল্যাকআউটের শিকার হয়, যাকে "ভোল্টেজ পতন" (Voltage Collapse) বলা হয়।'
  },
  detailedExplanation: {
    en: 'The operational physics of reactive power in AC transmission and distribution grids is governed by power-flow and stability principles:\n\n1. Real vs Reactive Power Flow Decoupling:\nFor a transmission line of series impedance Z = R + jX connecting bus 1 (voltage V₁∠δ) and bus 2 (voltage V₂∠0°), where reactance dominates resistance (X >> R):\nReal power transmitted: P ≈ (V₁ · V₂ / X) · sin(δ)\nReactive power transmitted: Q ≈ (V₁ / X) · [V₁ - V₂ · cos(δ)]\nConclusion: Real power transmission is strictly controlled by the phase angle difference δ. In contrast, reactive power transmission is governed by the magnitude difference between sending and receiving voltages (V₁ - V₂). Reactive power flows from the bus of higher voltage magnitude to the bus of lower voltage magnitude.\n\n2. Voltage Drop Approximation:\nThe voltage drop ΔV across a transmission line or feeder supplying active load P and reactive load Q is accurately approximated by:\nΔV = V_sending - V_receiving ≈ (R · P + X · Q) / V_nominal\nIn high-voltage transmission lines and substation distribution transformers, the ratio X/R is typically between 5 and 15 (reactance is 5 to 15 times greater than resistance). Consequently, the X·Q term dominates line voltage drop! Consuming uncompensated lagging reactive power directly degrades line voltage, while injecting capacitive reactive power locally (negative Q) elevates and stabilizes receiving-end voltage.\n\n3. PV Nose Curves & Voltage Collapse Mechanism:\nAs real load P increases on an uncompensated transmission corridor, receiving-end voltage V_R decreases gradually at first. However, as voltage drops, inductive motors draw even higher currents to maintain mechanical shaft power, demanding exponentially more reactive power from line series inductances (Q_loss = I²·X). Eventually, the system reaches the maximum transferable power limit—the "critical nose point" of the PV curve (dV_R/dP = ∞). Any further attempt to increase load causes an immediate, uncontrollable plunge into voltage collapse, triggering massive cascading regional blackouts (such as the 2003 Northeast US and 1996 Western US blackouts).\nLocal reactive compensation (shunt capacitors, STATCOMs) pushes the PV nose curve upward and outward, restoring wide voltage stability margins.\n\n4. The Ferranti Effect & Shunt Reactors:\nDuring nighttime light-load or no-load conditions on long overhead lines (> 100 km) and high-voltage underground cables, line charging capacitance dominates. The charging capacitive current I_C flows through line series inductance L, creating a 90° leading voltage drop across L that ADDS in phase with sending voltage:\nV_receiving ≈ V_sending · [1 + (ω² · L · C · l²) / 2] > V_sending\nThis dangerous overvoltage stresses insulation and destroys transformers. Shunt reactors (inductive coils) must be switched ON at receiving substations during light load to absorb excess capacitive VARs and restore nominal voltage.',
    hi: 'एसी ग्रिड में प्रतिघाती शक्ति और स्थिरता के प्रमुख सिद्धांत:\n\n1. शक्ति प्रवाह समीकरण (X >> R के लिए):\nएक्टिव पावर: P ≈ (V₁ · V₂ / X) · sin(δ) — कोण अंतर द्वारा नियंत्रित।\nरिएक्टिव पावर: Q ≈ (V₁ / X) · (V₁ - V₂) — वोल्टेज परिमाण के अंतर द्वारा नियंत्रित।\nरिएक्टिव पावर हमेशा उच्च वोल्टेज से निम्न वोल्टेज की ओर बहती है।\n\n2. वोल्टेज ड्रॉप सूत्र:\nΔV ≈ (R · P + X · Q) / V_nominal। चूंकि ग्रिड में X >> R होता है, अतः लाइन वोल्टेज ड्रॉप मुख्य रूप से रिएक्टिव पावर Q के कारण होता है। स्थानीय कैपेसिटर लगाने से Q कम होता है और वोल्टेज सुधरता है।\n\n3. PV नोज़ कर्व और वोल्टेज कोलैप्स:\nजैसे-जैसे लोड P बढ़ता है, वोल्टेज गिरता जाता है। नोज़ पॉइंट (चरम सीमा) पर पहुंचकर सिस्टम अस्थिर हो जाता है और वोल्टेज अचानक शून्य हो जाता है जिसे "वोल्टेज कोलैप्स" कहते हैं। स्थानीय क्षतिपूर्ति इस सीमा को सुरक्षित दूरी पर रखती है।\n\n4. फेरांटी प्रभाव और शंट रिएक्टर:\nहल्के भार या नो-लोड के समय लंबी ट्रांसमिशन लाइनों में कैपेसिटिव करंट के कारण रिसीविंग वोल्टेज सेंडिंग वोल्टेज से अधिक हो जाता है (V_R > V_S)। इसे फेरांटी प्रभाव कहते हैं। इसे संतुलित करने के लिए सबस्टेशनों पर शंट रिएक्टर लगाए जाते हैं जो अतिरिक्त कैपेसिटेंस को सोखते हैं।',
    bn: 'পাওয়ার সিস্টেমে রিঅ্যাক্টিভ পাওয়ারের মূল নীতিসমূহ:\n\n১. পাওয়ার ফ্লো সমীকরণ (X >> R):\nসক্রিয় ক্ষমতা: P ≈ (V₁ · V₂ / X) · sin(δ) — কোণের পার্থক্যের ওপর নির্ভরশীল।\nপ্রতিক্রিয়াশীল ক্ষমতা: Q ≈ (V₁ / X) · (V₁ - V₂) — ভোল্টেজের মানের পার্থক্যের ওপর নির্ভরশীল।\n\n২. ভোল্টেজ ড্রপ সমীকরণ:\nΔV ≈ (R · P + X · Q) / V_nominal। যেহেতু সঞ্চালন লাইনে X >> R হয়, তাই ভোল্টেজ ড্রপের প্রধান কারণ হলো লাইনে রিঅ্যাক্টিভ পাওয়ার Q এর প্রবাহ। স্থানীয়ভাবে ক্যাপাসিটর যুক্ত করে Q দূর করলে ভোল্টেজ ড্রপ দূর হয়।\n\n৩. PV নোজ কার্ভ ও ভোল্টেজ পতন:\nলোড বাড়ার সাথে সাথে লাইনের ভোল্টেজ কমতে থাকে এবং একপর্যায়ে "নোজ পয়েন্টে" পৌঁছায়। এর বাইরে গেলে সিস্টেম মুহূর্তের মধ্যে অস্থিতিশীল হয়ে ভোল্টেজ সম্পূর্ণ ধ্বংস হয়ে যায় (ভোল্টেজ কোল্যাপ্স)।\n\n৪. ফেরান্টি ইফেক্ট ও শান্ট রিঅ্যাক্টর:\nহালকা লোডে বা লোডবিহীন অবস্থায় দীর্ঘ লাইনের নিজস্ব ক্যাপাসিট্যান্সের কারণে রিসিভিং প্রান্তের ভোল্টেজ সেন্ডিং প্রান্তের চেয়ে বেড়ে যায় (V_R > V_S)। একে ফেরান্টি ইফেক্ট বলে। এই ক্ষতিকর ওভারভোল্টেজ কমাতে সাবস্টেশনে শান্ট রিঅ্যাক্টর (ইন্ডাক্টর) যুক্ত করা হয়।'
  },
  formulas: [
    {
      id: 'f-decoupled-power-flow',
      symbol: 'Q_{12}',
      expression: 'Q_{12} \\approx \\frac{V_1}{X} \\cdot \\left(V_1 - V_2 \\cdot \\cos(\\delta)\\right) \\approx \\frac{V_1}{X} \\cdot (V_1 - V_2)',
      title: {
        en: 'Decoupled Reactive Power Flow Equation',
        hi: 'डिकपल्ड प्रतिघाती शक्ति प्रवाह समीकरण',
        bn: 'ডিকাপল্ড রিঅ্যাক্টিভ পাওয়ার ফ্লো সমীকরণ'
      },
      description: {
        en: 'Shows that reactive power transmission over an inductive reactance X is directly proportional to voltage magnitude differential (V1 - V2).',
        hi: 'दर्शाता है कि प्रेरकीय प्रतिघात X पर प्रतिघाती शक्ति का प्रवाह वोल्टेज परिमाण के अंतर (V1 - V2) के सीधे समानुपाती होता है।',
        bn: 'প্রমাণ করে যে ইন্ডাক্টিভ রিঅ্যাক্ট্যান্স X এর মধ্য দিয়ে রিঅ্যাক্টিভ পাওয়ার প্রবাহ মূলত ভোল্টেজ পার্থক্যের (V1 - V2) সমানুপাতিক।'
      },
      variables: [
        { symbol: 'Q_{12}', name: { en: 'Reactive power sent from bus 1 to bus 2 (VAR)', hi: 'बस 1 से बस 2 तक प्रतिघाती शक्ति (VAR)', bn: 'বাস ১ থেকে বাস ২ এ প্রবাহিত রিঅ্যাক্টিভ পাওয়ার (VAR)' } },
        { symbol: 'V_1, V_2', name: { en: 'Bus 1 and Bus 2 voltage magnitudes (V)', hi: 'बस 1 एवं बस 2 वोल्टेज परिमाण (V)', bn: 'বাস ১ ও বাস ২ এর ভোল্টেজ মান (V)' } },
        { symbol: 'X', name: { en: 'Series transmission reactance (Ω)', hi: 'श्रेणी ट्रांसमिशन प्रतिघात (Ω)', bn: 'সিরিজ সঞ্চালন রিঅ্যাক্ট্যান্স (Ω)' } },
        { symbol: '\\delta', name: { en: 'Transmission power angle (degrees or radians)', hi: 'ट्रांसमिशन शक्ति कोण', bn: 'ট্রান্সমিশন পাওয়ার অ্যাঙ্গেল' } }
      ]
    },
    {
      id: 'f-feeder-voltage-drop',
      symbol: '\\Delta V',
      expression: '\\Delta V \\approx \\frac{R \\cdot P + X \\cdot Q}{V_{\\text{nom}}}',
      title: {
        en: 'Transmission Feeder Voltage Drop Approximation',
        hi: 'ट्रांसमिशन फीडर वोल्टेज ड्रॉप सन्निकटन',
        bn: 'ফিডার ভোল্টেজ ড্রপ সমীকরণ'
      },
      description: {
        en: 'Calculates the line voltage drop across conductor resistance R and series reactance X supplying active load P and reactive load Q.',
        hi: 'सक्रिय भार P और प्रतिघाती भार Q ले जाने वाली लाइन में प्रतिरोध R और प्रतिघात X के आर-पार वोल्टेज ड्रॉप की गणना।',
        bn: 'R রোধ এবং X রিঅ্যাক্ট্যান্স বিশিষ্ট লাইনে P সক্রিয় ও Q রিঅ্যাক্টিভ লোডের কারণে ভোল্টেজ ড্রপ নির্ণয়।'
      },
      variables: [
        { symbol: '\\Delta V', name: { en: 'Feeder voltage drop (V)', hi: 'फीडर वोल्टेज ड्रॉप (V)', bn: 'ফিডার ভোল্টেজ ড্রপ (V)' } },
        { symbol: 'R', name: { en: 'Conductor loop resistance (Ω)', hi: 'चालक लूप प्रतिरोध (Ω)', bn: 'পরিবাহীর রোধ (Ω)' } },
        { symbol: 'X', name: { en: 'Conductor loop series reactance (Ω)', hi: 'चालक लूप श्रेणी प्रतिघात (Ω)', bn: 'পরিবাহীর সিরিজ রিঅ্যাক্ট্যান্স (Ω)' } },
        { symbol: 'P, Q', name: { en: 'Transmitted active power (W) and reactive power (VAR)', hi: 'सक्रिय शक्ति (W) और प्रतिघाती शक्ति (VAR)', bn: 'সক্রিয় ক্ষমতা (W) ও প্রতিক্রিয়াশীল ক্ষমতা (VAR)' } },
        { symbol: 'V_{\\text{nom}}', name: { en: 'Nominal operating phase voltage (V)', hi: 'नाममात्र परिचालन फेज वोल्टेज (V)', bn: 'রেটেড অপারেটিং ফেজ ভোল্টেজ (V)' } }
      ]
    },
    {
      id: 'f-ferranti-voltage-rise',
      symbol: 'V_R',
      expression: 'V_R \\approx V_S \\cdot \\left(1 + \\frac{\\omega^2 \\cdot L \\cdot C \\cdot l^2}{2}\\right)',
      title: {
        en: 'Ferranti Effect Receiving-End Voltage Rise',
        hi: 'फेरांटी प्रभाव रिसीविंग-एंड वोल्टेज वृद्धि',
        bn: 'ফেরান্টি ইফেক্ট রিসিভিং প্রান্তের ভোল্টেজ বৃদ্ধি'
      },
      description: {
        en: 'Quantifies the light-load voltage rise at the receiving end of a transmission line of length l, series inductance L, and shunt capacitance C.',
        hi: 'लंबाई l, प्रेरकत्व L और धारिता C वाली ट्रांसमिशन लाइन में हल्के भार पर रिसीविंग छोर पर वोल्टेज वृद्धि की गणना।',
        bn: 'দৈর্ঘ্য l, ইন্ডাক্ট্যান্স L এবং ক্যাপাসিট্যান্স C বিশিষ্ট লাইনে হালকা লোডে রিসিভিং প্রান্তের ভোল্টেজ বৃদ্ধি নির্ণয়।'
      },
      variables: [
        { symbol: 'V_R', name: { en: 'Receiving end line voltage under no-load (V)', hi: 'नो-लोड पर रिसीविंग छोर वोल्टेज (V)', bn: 'নো-লোড অবস্থায় রিসিভিং ভোল্টেজ (V)' } },
        { symbol: 'V_S', name: { en: 'Sending end line voltage (V)', hi: 'सेंडिंग छोर वोल्टेज (V)', bn: 'সেন্ডিং ভোল্টেজ (V)' } },
        { symbol: 'l', name: { en: 'Line length (km or meters)', hi: 'लाइन की लंबाई', bn: 'লাইনের দৈর্ঘ্য' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch13-l05-pv-curves',
      title: {
        en: 'PV Nose Curves & The Mechanics of Voltage Collapse',
        hi: 'PV नोज़ कर्व एवं वोल्टेज कोलैप्स की यांत्रिकी',
        bn: 'PV নোজ কার্ভ এবং ভোল্টেজ পতনের মূল কারণ'
      },
      content: {
        en: 'Voltage collapse is one of the most catastrophic failure modes in power engineering:\n\n1. The Mechanics of the PV Curve:\nWhen a transmission line feeds a load with constant power factor, plotting receiving bus voltage V_R against active power P yields a parabolic "nose curve".\n- Upper Stable Branch: Normal operating region where dV_R/dP is small and negative (increasing load drops voltage slightly, which is stable).\n- The Critical Nose Point (P_max): The theoretical maximum power transfer capability of the transmission corridor for that power factor. At this point, the tangent dV_R/dP becomes vertical (-∞).\n- Lower Unstable Branch: An operating region characterized by low voltage and very high current where dV_R/dP is positive. Loads cannot stably operate here.\n\n2. Power Factor Dependency:\nThe shape and maximum limit P_max of the PV curve depends drastically on load power factor:\n- For a lagging load (cos ϕ = 0.7 lagging): The nose point occurs at a severely reduced active power level and a high voltage drop.\n- For unity power factor (cos ϕ = 1.0): The nose point shifts outward, allowing significantly more active power transmission.\n- For a leading power factor (cos ϕ = 0.95 leading): Capacitive injection boosts the entire curve upward, substantially expanding both the power transfer limit and the voltage stability margin.\n\n3. Dynamic Collapse Progression:\nDuring a hot summer afternoon, air conditioner induction motors stall when voltage drops below 0.85 per-unit. Stalled induction motors draw 500% locked-rotor current at a disastrously low power factor (~0.2 lagging). This enormous inductive surge causes an instantaneous, unrecoverable collapse of the transmission grid voltage, plunging entire states into darkness in under 60 seconds.',
        hi: 'वोल्टेज कोलैप्स पावर इंजीनियरिंग की सबसे बड़ी विफलताओं में से एक है:\n\n1. PV नोज़ कर्व की संरचना:\nरिसीविंग वोल्टेज V_R और लोड P के बीच का ग्राफ एक परवलयाकार "नोज़ कर्व" बनाता है। इसका ऊपरी हिस्सा स्थिर होता है। कर्व का अंतिम मोड़ (नोज़ पॉइंट) अधिकतम शक्ति सीमा (P_max) को दर्शाता है।\n\n2. पावर फैक्टर का प्रभाव:\n- 0.7 लैगिंग पावर फैक्टर पर नोज़ पॉइंट बहुत पहले आ जाता है और ग्रिड कम लोड पर ही अस्थिर हो जाता है।\n- यूनिटी और लीडिंग पावर फैक्टर पर कर्व बाहर की तरफ खिसक जाता है, जिससे लाइन की बिजली वहन क्षमता बहुत बढ़ जाती है।\n\n3. ब्लैकआउट का कारण:\nगर्मी के दिनों में वोल्टेज गिरने पर एसी मोटरें रुक (स्टॉल हो) जाती हैं। रुकी हुई मोटरें सामान्य से 5 गुना अधिक करंट और भारी रिएक्टिव पावर खींचती हैं, जिससे 60 सेकंड के भीतर पूरा ग्रिड कोलैप्स हो जाता है।',
        bn: 'ভোল্টেজ পতন বিদ্যুৎ ব্যবস্থার অন্যতম মারাত্মক বিপর্যয়:\n\n১. PV নোজ কার্ভের গঠন:\nলোড P এর বিপরীতে ভোল্টেজ V_R এর গ্রাফ একটি প্যারাবোলিক "নোজ কার্ভ" তৈরি করে। এর ওপরের অংশটি স্থিতিশীল। বাঁকের শীর্ষবিন্দু বা "নোজ পয়েন্ট" হলো সর্বোচ্চ বিদ্যুৎ সঞ্চালন সীমা (P_max)।\n\n২. পাওয়ার ফ্যাক্টরের ভূমিকা:\n- ল্যাগিং পাওয়ার ফ্যাক্টরে (যেমন ০.৭ ল্যাগ) নোজ পয়েন্ট অনেক বামে থাকে, ফলে সামান্য লোডেই সিস্টেম অস্থিতিশীল হয়।\n- পাওয়ার ফ্যাক্টর ১.০ বা লিডিং হলে নোজ কার্ভ প্রসারিত হয় এবং লাইন দিয়ে অনেক বেশি বিদ্যুৎ নিরাপদে পাঠানো যায়।\n\n৩. বিপর্যয়ের কারণ:\nভোল্টেজ মারাত্মক কমে গেলে ইন্ডাকশন মোটরগুলো জ্যাম (লকড রোটর) হয়ে যায়। তখন এগুলো রেটেড কারেন্টের ৫০০% কারেন্ট এবং তীব্র ল্যাগিং রিঅ্যাক্টিভ পাওয়ার টেনে নেয়, যার ফলে ১ মিনিটের মধ্যে পুরো গ্রিড ব্ল্যাকআউটে ডুবে যায়।'
      }
    },
    {
      id: 'sec-ch13-l05-ferranti-reactors',
      title: {
        en: 'The Ferranti Effect & Substation Shunt Reactors',
        hi: 'फेरांटी प्रभाव एवं सबस्टेशन शंट रिएक्टर',
        bn: 'ফেরান্টি ইফেক্ট ও সাবস্টেশন শান্ট রিঅ্যাক্টর'
      },
      content: {
        en: 'While lagging loads depress grid voltage, light loads cause the opposite crisis: the Ferranti Effect:\n\n1. Physical Origin of Ferranti Effect:\nLong transmission lines (> 150 km) and high-voltage underground cables possess substantial shunt capacitance C between conductors and ground (typically 1 to 2 μF per 100 km). When the receiving end is open-circuited or lightly loaded (such as during 3:00 AM off-peak hours):\n- Line charging current I_C = jωC · V flows continuously through the series inductance L of the line.\n- The voltage drop across series inductance is:\n  ΔV_L = j · (ωL) · I_C = j · (ωL) · (jωC · V) = -ω² · L · C · V\n- This 180° inversion means the reactive series voltage drop is directly in phase with the sending-end voltage, compounding it!\n- Consequently, receiving-end voltage V_R exceeds sending-end voltage V_S: V_R > V_S.\n\n2. Underground Cable Severity:\nBecause underground high-voltage insulated cables place conductors in intimate proximity to grounded metallic sheaths through high-permittivity dielectrics, their capacitance is 20 to 50 times greater than overhead lines. The Ferranti effect in a 50 km underground cable can produce hazardous overvoltages of 125% to 140% of nominal rating.\n\n3. Shunt Reactor Mitigation:\nTo counteract the Ferranti effect, power utilities install large oil-immersed Shunt Reactors (gapped-core or ironless inductive coils) at receiving substations. When light-load conditions are detected, shunt reactors are switched ON across the bus to absorb the surplus capacitive reactive power, neutralizing line charging currents and depressing receiving-end voltage back to nominal.',
        hi: 'फेरांटी प्रभाव और शंट रिएक्टर:\n\n1. फेरांटी प्रभाव की उत्पत्ति:\nलंबी ट्रांसमिशन लाइनों और भूमिगत केबलों में भारी शंट कैपेसिटेंस होता है। रात में जब लोड बहुत कम या शून्य होता है, तो कैपेसिटिव चार्जिंग करंट लाइन की प्रेरकता (L) से होकर बहता है। इसके कारण रिसीविंग छोर का वोल्टेज सेंडिंग छोर के वोल्टेज से अधिक हो जाता है (V_R > V_S)। इसे फेरांटी प्रभाव कहते हैं।\n\n2. भूमिगत केबलों में खतरा:\nभूमिगत केबलों में कैपेसिटेंस ओवरहेड लाइनों से 20 से 50 गुना अधिक होता है, जिससे वोल्टेज 40% तक बढ़ सकता है और इंसुलेशन फट सकता है।\n\n3. शंट रिएक्टर द्वारा समाधान:\nसबस्टेशनों पर बड़े इंडक्टिव कॉइल (शंट रिएक्टर) लगाए जाते हैं। हल्के लोड पर इन्हें चालू करके अतिरिक्त कैपेसिटेंस को सोख लिया जाता है, जिससे वोल्टेज वापस सामान्य हो जाता है।',
        bn: 'ফেরান্টি ইফেক্ট ও শান্ট রিঅ্যাক্টরের ভূমিকা:\n\n১. ফেরান্টি ইফেক্টের কারণ:\nদীর্ঘ ওভারহেড লাইন ও মাটির নিচের হাই-ভোল্টেজ তারে প্রচুর শান্ট ক্যাপাসিট্যান্স থাকে। গভীর রাতে যখন লোড প্রায় শূন্য থাকে, তখন এই ক্যাপাসিটিভ চার্জিং কারেন্ট লাইনের ইন্ডাক্ট্যান্সের (L) মধ্য দিয়ে প্রবাহিত হয়ে রিসিভিং প্রান্তের ভোল্টেজকে সেন্ডিং প্রান্তের চেয়ে বাড়িয়ে দেয় (V_R > V_S)।\n\n২. আন্ডারগ্রাউন্ড ক্যাবলে তীব্রতা:\nমাটির নিচের ক্যাবলে ক্যাপাসিট্যান্স সাধারণ লাইনের চেয়ে ২০-৫০ গুণ বেশি থাকে। ৫০ কিমি ক্যাবলে ভোল্টেজ স্বাভাবিকের চেয়ে ২৫-৪০% পর্যন্ত বৃদ্ধি পেতে পারে।\n\n৩. শান্ট রিঅ্যাক্টরের কাজ:\nসাবস্টেশনে বিশাল আকারের ইন্ডাক্টর বা "শান্ট রিঅ্যাক্টর" স্থাপন করা হয়। হালকা লোডে এগুলোকে লাইনে যুক্ত করে অতিরিক্ত ক্যাপাসিটিভ রিঅ্যাক্টিভ পাওয়ার শোষণ করা হয়, যার ফলে ভোল্টেজ স্বাভাবিক সীমায় ফিরে আসে।'
      }
    }
  ],
  examples: [
    {
      id: 'ex-ch13-l05-01',
      title: {
        en: 'Distribution Feeder Voltage Drop & Reactive Power Compensation',
        hi: 'वितरण फीडर वोल्टेज ड्रॉप एवं प्रतिघाती शक्ति क्षतिपूर्ति',
        bn: 'ডিস্ট্রিবিউশন ফিডার ভোল্টেজ ড্রপ ও রিঅ্যাক্টিভ পাওয়ার ক্ষতিপূরণ'
      },
      problem: {
        en: 'An 11 kV (line-to-line), 3-phase industrial feeder has a series line resistance of R = 1.2 Ω and a series line reactance of X = 3.6 Ω per phase (X/R = 3.0). It supplies an industrial plant drawing 2.0 MW at 0.707 lagging power factor.\n1. Calculate the receiving-end phase voltage drop ΔV_ph and line-to-line voltage drop ΔV_L without compensation.\n2. Determine the receiving-end line voltage V_R.\n3. Calculate the voltage drop ΔV_L if a 2.0 MVAR capacitor bank is installed at the factory bus, raising the power factor to 1.0 (unity).',
        hi: 'एक 11 kV (लाइन-टू-लाइन), 3-फेज औद्योगिक फीडर का प्रति फेज प्रतिरोध R = 1.2 Ω और प्रतिघात X = 3.6 Ω है। यह 0.707 लैगिंग पावर फैक्टर पर 2.0 MW लोड की आपूर्ति करता है।\n1. बिना कैपेसिटर के फेज वोल्टेज ड्रॉप और लाइन वोल्टेज ड्रॉप की गणना करें।\n2. फैक्ट्री बस पर प्राप्त लाइन वोल्टेज V_R ज्ञात करें।\n3. यदि फैक्ट्री पर 2.0 MVAR का कैपेसिटर बैंक लगाकर पावर फैक्टर को 1.0 (यूनिटी) कर दिया जाए, तो नया लाइन वोल्टेज ड्रॉप क्या होगा?',
        bn: 'একটি ১১ kV, ৩-ফেজ শিল্প ফিডারের প্রতি ফেজ রোধ R = ১.২ Ω এবং সিরিজ রিঅ্যাক্ট্যান্স X = ৩.৬ Ω। এটি ০.৭০৭ ল্যাগিং পাওয়ার ফ্যাক্টরে ২.০ MW লোড পরিচালনা করে।\n১. কোনো ক্যাপাসিটর ছাড়া ফেজ ভোল্টেজ ড্রপ ও লাইন ভোল্টেজ ড্রপ নির্ণয় করুন।\n২. কারখানার প্রান্তে প্রাপ্ত প্রকৃত লাইন ভোল্টেজ V_R নির্ণয় করুন।\n৩. কারখানায় ২.০ MVAR ক্যাপাসিটর বসিয়ে পাওয়ার ফ্যাক্টর ১.০ (ইউনিটি) করলে নতুন লাইন ভোল্টেজ ড্রপ কত হবে?'
      },
      solution: {
        en: 'Step 1: Determine parameters per phase:\nNominal phase voltage: V_ph = 11,000 V / √3 = 6,351 V\nActive power per phase: P_ph = 2.0 MW / 3 = 666.67 kW = 666,667 W\nAt PF = 0.707 lagging: ϕ = 45°, tan(45°) = 1.0\nReactive power per phase: Q_ph = P_ph · tan(45°) = 666,667 VAR\n\nStep 2: Calculate voltage drop without compensation:\nΔV_ph ≈ (R · P_ph + X · Q_ph) / V_ph\nΔV_ph = [(1.2 · 666,667) + (3.6 · 666,667)] / 6,351\nΔV_ph = [800,000 + 2,400,000] / 6,351 = 3,200,000 / 6,351 = 503.9 V per phase\nLine-to-line voltage drop: ΔV_L = √3 · ΔV_ph = √3 · 503.9 V = 872.8 V\n\nStep 3: Calculate receiving-end line voltage:\nV_R_line = 11,000 V - 872.8 V = 10,127.2 V ≈ 10.13 kV (a 7.9% voltage drop!).\n\nStep 4: Calculate voltage drop after installing 2.0 MVAR capacitor bank (Q_net = 0):\nWith Q_net = 0 VAR:\nΔV_ph_compensated = (R · P_ph + X · 0) / V_ph = (1.2 · 666,667) / 6,351 = 800,000 / 6,351 = 126.0 V per phase\nCompensated line voltage drop: ΔV_L = √3 · 126.0 V = 218.2 V\nNew receiving-end line voltage: V_R_new = 11,000 V - 218.2 V = 10,781.8 V ≈ 10.78 kV.\n\nConclusion: Sizing and installing the shunt capacitor eliminated 75% of the line voltage drop (from 873 V down to 218 V), restoring factory voltage from an unacceptable 10.13 kV back to a healthy 10.78 kV.',
        hi: 'चरण 1: प्रति फेज मान:\nV_ph = 11,000 / √3 = 6,351 V\nP_ph = 666,667 W, Q_ph = 666,667 VAR\n\nचरण 2: प्रारंभिक वोल्टेज ड्रॉप:\nΔV_ph = [(1.2 · 666,667) + (3.6 · 666,667)] / 6,351 = 503.9 V\nलाइन वोल्टेज ड्रॉप ΔV_L = √3 · 503.9 = 872.8 V\nरिसीविंग वोल्टेज = 11,000 - 872.8 = 10,127 V (10.13 kV)।\n\nचरण 3: 2.0 MVAR कैपेसिटर लगाने के बाद (Q = 0):\nΔV_ph = (1.2 · 666,667) / 6,351 = 126.0 V\nलाइन वोल्टेज ड्रॉप ΔV_L = √3 · 126.0 = 218.2 V\nनया रिसीविंग वोल्टेज = 11,000 - 218.2 = 10,782 V (10.78 kV)।\n\nनिष्कर्ष: कैपेसिटर लगाने से लाइन वोल्टेज ड्रॉप 75% कम हो गया और वोल्टेज 10.13 kV से सुधरकर 10.78 kV हो गया।',
        bn: 'ধাপ ১: প্রতি ফেজের মান:\nV_ph = ১১,০০০ / √৩ = ৬,৩৫১ V\nP_ph = ৬৬৬,৬৬৭ W, Q_ph = ৬৬৬,৬৬৭ VAR\n\nধাপ ২: ক্ষতিপূরণ ছাড়া ভোল্টেজ ড্রপ:\nΔV_ph = [(১.২ · ৬৬৬,৬৬৭) + (৩.৬ · ৬৬৬,৬৬৭)] / ৬,৩৫১ = ৫০৩.৯ V\nলাইন ভোল্টেজ ড্রপ ΔV_L = √৩ · ৫০৩.৯ = ৮৭২.৮ V\nরিসিভিং ভোল্টেজ = ১১,০০০ - ৮৭২.৮ = ১০,১২৭ V (১০.১৩ kV)।\n\nধাপ ৩: ২.০ MVAR ক্যাপাসিটর যুক্ত করার পর (Q = 0):\nΔV_ph = (১.২ · ৬৬৬,৬৬৭) / ৬,৩৫১ = ১২৬.০ V\nলাইন ভোল্টেজ ড্রপ ΔV_L = √৩ · ১২৬.০ = ২১৮.২ V\nনতুন রিসিভিং ভোল্টেজ = ১১,০০০ - ২১৮.২ = ১০,৭৮২ V (১০.৭৮ kV)।\n\nফলাফল: ক্যাপাসিটর স্থাপনের মাধ্যমে ভোল্টেজ ড্রপ ৭৫% হ্রাস পায় এবং রিসিভিং ভোল্টেজ ১০.১৩ kV থেকে বেড়ে ১০.৭৮ kV তে উন্নীত হয়।'
      }
    },
    {
      id: 'ex-ch13-l05-02',
      title: {
        en: 'Ferranti Effect Voltage Rise on a 400 kV Transmission Corridor',
        hi: '400 kV ट्रांसमिशन कॉरिडोर पर फेरांटी प्रभाव वोल्टेज वृद्धि',
        bn: '৪০০ kV সঞ্চালন লাইনে ফেরান্টি ইফেক্ট ভোল্টেজ বৃদ্ধির হিসাব'
      },
      problem: {
        en: 'A 400 kV (line-to-line), 50 Hz, 300 km long overhead transmission line has a series inductance of L = 1.05 mH/km and a shunt capacitance of C = 0.011 μF/km per phase. If the receiving end substation breaker is opened at night leaving the line on complete no-load:\n1. Calculate the phase propagation constant β in radians per km.\n2. Calculate the theoretical receiving-end line voltage V_R.\n3. Determine the 3-phase MVAR rating of the shunt reactor needed at the receiving end to restore voltage to 400 kV.',
        hi: 'एक 400 kV, 50 Hz, 300 km लंबी ओवरहेड ट्रांसमिशन लाइन का प्रेरकत्व L = 1.05 mH/km और धारिता C = 0.011 μF/km है। यदि रात में रिसीविंग छोर का ब्रेकर खोलकर लाइन को पूरी तरह नो-लोड कर दिया जाए:\n1. फेज प्रोपोगेशन स्थिरांक β की गणना करें।\n2. रिसीविंग छोर पर उत्पन्न होने वाले लाइन वोल्टेज V_R की गणना करें।\n3. वोल्टेज को पुनः 400 kV पर लाने के लिए आवश्यक 3-फेज शंट रिएक्टर की MVAR रेटिंग ज्ञात करें।',
        bn: 'একটি ৪০০ kV, ৫০ Hz, ৩০০ কিমি দীর্ঘ ওভারহেড সঞ্চালন লাইনের প্রতি কিমি ইন্ডাক্ট্যান্স L = ১.০৫ mH/km এবং ক্যাপাসিট্যান্স C = ০.০১১ μF/km। রাতে রিসিভিং প্রান্তের ব্রেকার খুলে লাইনটিকে নো-লোড অবস্থায় রাখলে:\n১. ফেজ প্রোপাগেশন ধ্রুবক β নির্ণয় করুন।\n২. রিসিভিং প্রান্তে সৃষ্ট লাইন ভোল্টেজ V_R নির্ণয় করুন।\n৩. ভোল্টেজ পুনরায় ৪০০ kV তে নামিয়ে আনতে রিসিভিং প্রান্তে কত MVAR শান্ট রিঅ্যাক্টর স্থাপন করতে হবে?'
      },
      solution: {
        en: 'Step 1: Calculate phase constant β:\nω = 2π · 50 = 314.16 rad/s\nL_km = 1.05 × 10⁻³ H/km\nC_km = 0.011 × 10⁻⁶ F/km\nβ = ω · √(L · C) = 314.16 · √(1.05 × 10⁻³ · 0.011 × 10⁻⁶) = 314.16 · √(1.155 × 10⁻¹¹)\nβ = 314.16 · (3.3985 × 10⁻⁶) = 1.0677 × 10⁻³ rad/km\nFor line length l = 300 km:\nβ · l = 1.0677 × 10⁻³ · 300 = 0.3203 radians = 18.35°\n\nStep 2: Calculate receiving-end voltage under no load:\nV_R = V_S / cos(β · l) = 400 kV / cos(18.35°) = 400 kV / 0.9491 = 421.4 kV\nReceiving voltage experiences a dangerous 21.4 kV overvoltage rise (5.35% above nominal).\n\nStep 3: Calculate total 3-phase line charging reactive power generated:\nTotal line capacitance C_total = 0.011 μF/km · 300 km = 3.3 μF per phase = 3.3 × 10⁻⁶ F\nReactance of line charging capacitance X_C = 1 / (ω · C_total) = 1 / (314.16 · 3.3 × 10⁻⁶) = 964.6 Ω\nTotal 3-phase charging reactive power generated by line at 400 kV:\nQ_charge = V_L² / X_C = (400,000)² / 964.6 = 160,000,000,000 / 964.6 = 165.9 MVAR\n\nTo restore flat voltage profile, install a 160 MVAR to 170 MVAR 3-phase Shunt Reactor at the receiving substation.\n\nConclusion: A 165 MVAR shunt reactor absorbs the capacitive charging current, eliminating the 21.4 kV Ferranti overvoltage and safeguarding substation power transformers from dielectric puncture.',
        hi: 'चरण 1: फेज स्थिरांक β की गणना:\nβ = ω · √(L · C) = 1.068 × 10⁻³ rad/km\n300 km के लिए: β · l = 0.3203 rad = 18.35°\n\nचरण 2: नो-लोड रिसीविंग वोल्टेज:\nV_R = 400 kV / cos(18.35°) = 400 / 0.9491 = 421.4 kV (21.4 kV का खतरनाक ओवरवोल्टेज)।\n\nचरण 3: लाइन चार्जिंग MVAR एवं आवश्यक शंट रिएक्टर:\nकुल कैपेसिटेंस = 3.3 μF, X_C = 964.6 Ω\nकुल चार्जिंग Q = (400,000)² / 964.6 = 165.9 MVAR\nआवश्यक शंट रिएक्टर: 165 MVAR।\n\nनिष्कर्ष: 165 MVAR का शंट रिएक्टर लगाने से फेरांटी प्रभाव समाप्त हो जाता है और वोल्टेज सुरक्षित 400 kV पर वापस आ जाता है।',
        bn: 'ধাপ ১: ফেজ ধ্রুবক β নির্ণয়:\nβ = ω · √(L · C) = ১.০৬৮ × ১০⁻³ rad/km\n৩০০ কিমি এর জন্য: β · l = ০.৩২০৩ rad = ১৮.৩৫°\n\nধাপ ২: নো-লোড রিসিভিং ভোল্টেজ:\nV_R = ৪০০ / cos(১৮.৩৫°) = ৪২১.৪ kV (২১.৪ kV বিপজ্জনক ভোল্টেজ বৃদ্ধি)।\n\nধাপ ৩: চার্জিং MVAR ও শান্ট রিঅ্যাক্টর সাইজিং:\nমোট ক্যাপাসিট্যান্স = ৩.৩ μF, X_C = ৯৬৪.৬ Ω\nমোট চার্জিং ক্ষমতা Q = (৪০০,০০০)² / ৯৬৪.৬ = ১৬৫.৯ MVAR\nপ্রয়োজনীয় শান্ট রিঅ্যাক্টর: ১৬৫ MVAR।\n\nফলাফল: রিসিভিং সাবস্টেশনে ১৬৫ MVAR শান্ট রিঅ্যাক্টর স্থাপন করলে অতিরিক্ত ক্যাপাসিটিভ চার্জিং প্রশমিত হয় এবং ভোল্টেজ ৪০০ kV তে স্বাভাবিক অবস্থায় ফিরে আসে।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'National Transmission Grid Operations: Real-time dispatching of substation shunt capacitor banks and shunt reactors to maintain 400 kV and 765 kV transmission bus voltages within strict statutory ±5% bands.',
      'Regional Blackout Prevention: Automatic undervoltage load shedding (UVLS) relays deployed across city distribution substations to arrest impending voltage collapse during loss of major transmission lines.',
      'Offshore Wind Farm Export HV Subsea Cables: Sizing onshore and offshore shunt reactors to compensate hundreds of MVARs of continuous charging capacitive power generated by high-voltage subsea cables.'
    ],
    hi: [
      'राष्ट्रीय ट्रांसमिशन ग्रिड संचालन: 400 kV और 765 kV ग्रिड वोल्टेज को ±5% सीमा के भीतर बनाए रखने के लिए कैपेसिटर और रिएक्टरों का वास्तविक समय पर नियंत्रण।',
      'क्षेत्रीय ब्लैकआउट रोकथाम: ट्रांसमिशन लाइन फेल होने पर ग्रिड को वोल्टेज कोलैप्स से बचाने के लिए स्वचालित अंडर-वोल्टेज लोड शेडिंग रिले लगाना।',
      'अपतटीय पवन ऊर्जा सबसी केबल: समुद्र के नीचे बिछी लंबी हाई-वोल्टेज केबलों में उत्पन्न होने वाली भारी कैपेसिटिव शक्ति को संतुलित करने के लिए बड़े शंट रिएक्टर लगाना।'
    ],
    bn: [
      'জাতীয় গ্রিড পরিচালনা: ৪০০ kV ও ৭৬৫ kV ট্রান্সমিশন গ্রিডের ভোল্টেজ ±৫% সীমার মধ্যে রাখতে সাবস্টেশন ক্যাপাসিটর ও শান্ট রিঅ্যাক্টরের রিয়েল-টাইম নিয়ন্ত্রণ।',
      'ব্ল্যাকআউট প্রতিরোধ ব্যবস্থা: হঠাৎ বড় সঞ্চালন লাইন ট্রিপ করলে ভোল্টেজ পতন ঠেকাতে আন্ডার-ভোল্টেজ লোড শেডিং (UVLS) রিলে স্থাপন।',
      'অফশোর উইন্ড ফার্ম সাবসি ক্যাবল: সমুদ্রের নিচের উচ্চ-ভোল্টেজ ক্যাবল দ্বারা উৎপাদিত শত শত MVAR চার্জিং ক্যাপাসিট্যান্স শোষণ করতে শক্তিশালী শান্ট রিঅ্যাক্টর স্থাপন।'
    ]
  },
  importantPoints: {
    en: [
      'In electrical grids where series reactance exceeds resistance (X >> R), real power flow is dictated by phase angle δ, while reactive power flow is dictated by voltage magnitude differential (V₁ - V₂).',
      'The critical nose point on a transmission PV curve defines the absolute theoretical limit of stable power transfer; operating beyond this point causes catastrophic voltage collapse.',
      'The Ferranti effect causes receiving-end voltage to exceed sending-end voltage on lightly loaded lines; it is mitigated by inductive shunt reactors.'
    ],
    hi: [
      'विद्युत ग्रिड में जहाँ X >> R होता है, एक्टिव पावर फेज कोण δ द्वारा और रिएक्टिव पावर वोल्टेज परिमाण (V₁ - V₂) द्वारा नियंत्रित होती है।',
      'PV नोज़ कर्व का चरम बिंदु स्थिर बिजली आपूर्ति की अंतिम सीमा तय करता है; इसके आगे जाने पर विनाशकारी वोल्टेज कोलैप्स हो जाता है।',
      'हल्के लोड पर फेरांटी प्रभाव के कारण रिसीविंग वोल्टेज सेंडिंग वोल्टेज से अधिक हो जाता है; इसे शंट रिएक्टरों द्वारा ठीक किया जाता है।',
    ],
    bn: [
      'পাওয়ার সিস্টেমে যেখানে X >> R, সেখানে সক্রিয় শক্তি কোণ δ দ্বারা এবং প্রতিক্রিয়াশীল শক্তি ভোল্টেজ পার্থক্য (V₁ - V₂) দ্বারা প্রবাহিত হয়।',
      'PV নোজ কার্ভের শীর্ষবিন্দু সিস্টেমের সর্বোচ্চ স্থিতিশীল ক্ষমতা নির্দেশ করে; এর অতিক্রম করলে তাৎক্ষণিক ভোল্টেজ পতন ঘটে।',
      'হালকা লোডে ফেরান্টি ইফেক্টের কারণে রিসিভিং প্রান্তের ভোল্টেজ সেন্ডিং প্রান্তের চেয়ে বেড়ে যায়; এটি রোধ করতে শান্ট রিঅ্যাক্টর ব্যবহৃত হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistake: Believing that real power flows from high voltage to low voltage. Correction: Real power flows from leading phase angle to lagging phase angle. Reactive power flows from high voltage magnitude to low voltage magnitude.',
      'Mistake: Leaving shunt capacitor banks energized during nighttime factory shutdown. Correction: With zero factory inductive load, the capacitors supercharge the line, creating severe Ferranti-type leading overvoltages that puncture electronic power supplies.'
    ],
    hi: [
      'त्रुटि: यह मानना कि एक्टिव पावर उच्च वोल्टेज से निम्न वोल्टेज की ओर बहती है। सुधार: एक्टिव पावर लीडिंग फेज कोण से लैगिंग फेज कोण की ओर बहती है, जबकि रिएक्टिव पावर उच्च वोल्टेज से निम्न वोल्टेज की ओर बहती है।',
      'त्रुटि: रात में फैक्ट्री बंद होने पर भी कैपेसिटर बैंक को चालू छोड़ देना। सुधार: लोड न होने पर कैपेसिटर लाइन वोल्टेज को खतरनाक स्तर तक बढ़ा देते हैं, जिससे इलेक्ट्रॉनिक उपकरण जल सकते हैं।'
    ],
    bn: [
      'ভুল: ধারণা করা যে সক্রিয় শক্তি উচ্চ ভোল্টেজ থেকে নিম্ন ভোল্টেজের দিকে প্রবাহিত হয়। সংশোধন: সক্রিয় শক্তি লিডিং ফেজ কোণ থেকে ল্যাগিং কোণের দিকে প্রবাহিত হয়। কেবল প্রতিক্রিয়াশীল শক্তি উচ্চ ভোল্টেজ থেকে নিম্ন ভোল্টেজে প্রবাহিত হয়।',
      'ভুল: রাতে কারখানা বন্ধ থাকার সময়ও ক্যাপাসিটর ব্যাংক চালু রাখা। সংশোধন: কোনো ইন্ডাক্টিভ লোড না থাকলে ক্যাপাসিটর লাইনে তীব্র ওভারভোল্টেজ তৈরি করে কারখানার ইলেকট্রনিক্স যন্ত্রপাতি পুড়িয়ে ফেলতে পারে।'
    ]
  },
  keyTakeaways: {
    en: [
      'Line voltage drop in AC grids is primarily governed by reactive power flow: ΔV ≈ (R·P + X·Q) / V.',
      'Local reactive compensation shifts the PV curve outward, expanding the stable power transfer margin.',
      'Shunt capacitors support voltage during heavy lagging load; shunt reactors suppress overvoltage during light load.'
    ],
    hi: [
      'एसी ग्रिड में लाइन वोल्टेज ड्रॉप मुख्य रूप से प्रतिघाती शक्ति प्रवाह पर निर्भर करता है: ΔV ≈ (R·P + X·Q) / V।',
      'स्थानीय कैपेसिटर PV कर्व को बाहर की ओर बढ़ाते हैं, जिससे ग्रिड की लोड सहने की क्षमता बढ़ जाती है।',
      'कैपेसिटर भारी भार पर वोल्टेज बढ़ाते हैं, जबकि शंट रिएक्टर हल्के भार पर अतिरिक्त वोल्टेज को घटाते हैं।'
    ],
    bn: [
      'এসি গ্রিডে ভোল্টেজ ড্রপ মূলত রিঅ্যাক্টিভ পাওয়ার প্রবাহের ওপর নির্ভরশীল: ΔV ≈ (R·P + X·Q) / V।',
      'স্থানীয় রিঅ্যাক্টিভ ক্ষতিপূরণ PV কার্ভকে প্রসারিত করে ব্ল্যাকআউটের ঝুঁকি কমায়।',
      'ক্যাপাসিটর ভারী লোডে ভোল্টেজ বাড়ায়, পক্ষান্তরে শান্ট রিঅ্যাক্টর হালকা লোডে অতিরিক্ত ভোল্টেজ কমায়।'
    ]
  },
  practiceQuestions: [
    {
      id: 'pq-ch13-l05-01',
      question: {
        en: 'Explain why induction motor stalling causes rapid voltage collapse in a transmission corridor feeding an urban metropolitan area.',
        hi: 'व्याख्या करें कि किसी महानगरीय क्षेत्र को आपूर्ति करने वाले ट्रांसमिशन कॉरिडोर में इंडक्शन मोटरों के रुकने (स्टॉल होने) से तेजी से वोल्टेज कोलैप्स क्यों होता है।',
        bn: 'ব্যাখ্যা করুন কেন কোনো মেট্রোপলিটন শহরের লাইনে ইন্ডাকশন মোটরগুলো জ্যাম হয়ে থেমে গেলে দ্রুততম সময়ে ভোল্টেজ পতন ঘটে।'
      },
      hint: {
        en: 'Analyze what happens to motor slip s, current draw, and power factor when an induction motor stalls, and how this affects series line reactive losses (I²·X).',
        hi: 'मोटर रुकने पर स्लिप s, करंट और पावर फैक्टर में क्या बदलाव आता है और लाइन में I²·X हानियों पर क्या प्रभाव पड़ता है, इसका विश्लेषण करें।',
        bn: 'মোটর জ্যাম হলে স্লিপ s, গৃহীত কারেন্ট এবং পাওয়ার ফ্যাক্টরে কী পরিবর্তন ঘটে এবং তা লাইনের I²·X অপচয়ে কী প্রভাব ফেলে তা ব্যাখ্যা করুন।'
      }
    },
    {
      id: 'pq-ch13-l05-02',
      question: {
        en: 'Why is the Ferranti effect vastly more severe in high-voltage underground AC power cables compared to overhead AC transmission lines of identical length and voltage?',
        hi: 'समान लंबाई और वोल्टेज की ओवरहेड ट्रांसमिशन लाइनों की तुलना में हाई-वोल्टेज भूमिगत एसी केबलों में फेरांटी प्रभाव अत्यधिक गंभीर क्यों होता है?',
        bn: 'একই দৈর্ঘ্য ও ভোল্টেজের সাধারণ ওভারহেড লাইনের তুলনায় মাটির নিচের হাই-ভোল্টেজ এসি ক্যাবলে ফেরান্টি ইফেক্ট অনেক বেশি মারাত্মক হয় কেন?'
      },
      hint: {
        en: 'Compare the physical conductor spacing, dielectric constant of the insulating medium (cross-linked polyethylene XLPE vs air), and resulting capacitance per kilometer.',
        hi: 'चालकों के बीच की दूरी, इंसुलेशन सामग्री के परावैद्युतांक (XLPE बनाम वायु) और प्रति किलोमीटर धारिता (C) की तुलना करें।',
        bn: 'পরিবাহীর মধ্যবর্তী দূরত্ব, ইনসুলেশনের ডাই-ইলেকট্রিক ধ্রুবক (XLPE বনাম বাতাস) এবং প্রতি কিলোমিটারের ক্যাপাসিট্যান্স তুলনা করুন।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch13-l05-01',
      question: {
        en: 'In an AC power transmission line where inductive reactance dominates resistance (X >> R), what primarily governs the direction and magnitude of reactive power (Q) flow?',
        hi: 'एक एसी ट्रांसमिशन लाइन में जहाँ प्रेरकीय प्रतिघात प्रतिरोध से बहुत बड़ा है (X >> R), प्रतिघाती शक्ति (Q) प्रवाह की दिशा और परिमाण को मुख्य रूप से क्या नियंत्रित करता है?',
        bn: 'একটি এসি সঞ্চালন লাইনে যেখানে ইন্ডাক্টিভ রিঅ্যাক্ট্যান্স রোধের চেয়ে অনেক বেশি (X >> R), সেখানে রিঅ্যাক্টিভ পাওয়ার (Q) প্রবাহের দিক ও মান মূলত কিসের দ্বারা নিয়ন্ত্রিত হয়?'
      },
      options: [
        { en: 'The voltage magnitude difference between the two terminal buses (V₁ - V₂)', hi: 'दोनों टर्मिनल बसों के बीच वोल्टेज परिमाण का अंतर (V₁ - V₂)', bn: 'উভয় প্রান্তের বাসবারের ভোল্টেজ মানের পার্থক্য (V₁ - V₂)' },
        { en: 'The phase angle difference between the two terminal buses (δ)', hi: 'दोनों टर्मिनल बसों के बीच फेज कोण का अंतर (δ)', bn: 'উভয় প্রান্তের বাসবারের ফেজ কোণের পার্থক্য (δ)' },
        { en: 'The chemical composition of the copper conductor', hi: 'तांबे के चालक की रासायनिक संरचना', bn: 'তামার পরিবাহীর রাসায়নিক গঠন' },
        { en: 'The ambient atmospheric air pressure along the line', hi: 'लाइन के साथ परिवेशी वायुमंडलीय वायु दबाव', bn: 'লাইনের আশেপাশের বায়ুমণ্ডলীয় চাপ' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Real power P flows across transmission angle δ [P ≈ (V₁V₂/X)sin(δ)], whereas reactive power Q flows down the voltage magnitude gradient [Q ≈ (V₁/X)(V₁ - V₂)]. Reactive power flows from the higher voltage bus to the lower voltage bus.',
        hi: 'एक्टिव पावर फेज कोण अंतर δ से बहती है, जबकि रिएक्टिव पावर वोल्टेज परिमाण के अंतर (V₁ - V₂) के कारण उच्च वोल्टेज से निम्न वोल्टेज की ओर बहती है।',
        bn: 'সক্রিয় ক্ষমতা P ফেজ কোণের পার্থক্য δ দ্বারা এবং প্রতিক্রিয়াশীল ক্ষমতা Q ভোল্টেজের মানের পার্থক্যের (V₁ - V₂) মাধ্যমে উচ্চ ভোল্টেজ থেকে নিম্ন ভোল্টেজে প্রবাহিত হয়।'
      }
    },
    {
      id: 'mcq-ch13-l05-02',
      question: {
        en: 'In the short-line voltage drop approximation ΔV ≈ (R·P + X·Q) / V_nom, why does reactive power Q contribute far more to voltage drop than real power P in high-voltage grids?',
        hi: 'शॉर्ट-लाइन वोल्टेज ड्रॉप सन्निकटन ΔV ≈ (R·P + X·Q) / V_nom में, हाई-वोल्टेज ग्रिड में एक्टिव पावर P की तुलना में रिएक्टिव पावर Q वोल्टेज ड्रॉप में बहुत अधिक योगदान क्यों देती है?',
        bn: 'ভোল্টেজ ড্রপ সমীকরণ ΔV ≈ (R·P + X·Q) / V_nom এ, হাই-ভোল্টেজ গ্রিডে সক্রিয় ক্ষমতা P এর চেয়ে প্রতিক্রিয়াশীল ক্ষমতা Q কেন ভোল্টেজ ড্রপে বহুগুণ বেশি ভূমিকা রাখে?'
      },
      options: [
        { en: 'Because transmission line series inductive reactance X is typically 5 to 15 times larger than line resistance R (X >> R)', hi: 'क्योंकि ट्रांसमिशन लाइन का श्रेणी प्रतिघात X लाइन प्रतिरोध R से 5 से 15 गुना बड़ा होता है (X >> R)', bn: 'কারণ সঞ্চালন লাইনের সিরিজ রিঅ্যাক্ট্যান্স X সাধারণত লাইনের রোধ R এর চেয়ে ৫ থেকে ১৫ গুণ বড় হয় (X >> R)' },
        { en: 'Because reactive power carries more electrical energy than real power', hi: 'क्योंकि प्रतिघाती शक्ति वास्तविक शक्ति से अधिक विद्युत ऊर्जा ले जाती है', bn: 'কারণ রিঅ্যাক্টিভ পাওয়ার সক্রিয় শক্তির চেয়ে বেশি শক্তি বহন করে' },
        { en: 'Because utility meters multiply reactive power by a factor of 10', hi: 'क्योंकि बिजली मीटर प्रतिघाती शक्ति को 10 के गुणक से गुणा करते हैं', bn: 'কারণ বিদ্যুৎ মিটার রিঅ্যাক্টিভ পাওয়ারকে ১০ দিয়ে গুণ করে' },
        { en: 'Because frequency increases quadratically with reactive power', hi: 'क्योंकि आवृत्ति प्रतिघाती शक्ति के साथ वर्ग रूप में बढ़ती है', bn: 'কারণ রিঅ্যাক্টিভ পাওয়ার বাড়লে ফ্রিকোয়েন্সি দ্বিঘাত হারে বাড়ে' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'In high-voltage transmission lines and substation transformers, the X/R ratio is between 5 and 15. Thus, the term X·Q is much larger than R·P, making reactive power the predominant driver of voltage drop.',
        hi: 'ट्रांसमिशन लाइनों में X/R अनुपात 5 से 15 होता है। इसलिए X·Q पद R·P से बहुत बड़ा होता है और वोल्टेज ड्रॉप मुख्य रूप से Q पर निर्भर करता है।',
        bn: 'হাই-ভোল্টেজ গ্রিডে X/R অনুপাত ৫ থেকে ১৫ পর্যন্ত হয়। ফলে সমীকরণে X·Q অংশটি R·P এর চেয়ে অনেক বড় হওয়ায় মূলত রিঅ্যাক্টিভ পাওয়ারই ভोल্টেজ ড্রপ ঘটায়।'
      }
    },
    {
      id: 'mcq-ch13-l05-03',
      question: {
        en: 'What occurs at the "critical nose point" (P_max) of a power system transmission PV curve?',
        hi: 'पावर सिस्टम ट्रांसमिशन PV कर्व के "क्रिटिकल नोज़ पॉइंट" (P_max) पर क्या घटित होता है?',
        bn: 'পাওয়ার সিস্টেমের ট্রান্সমিশন PV কার্ভের "নোজ পয়েন্টে" (P_max) কী ঘটে?'
      },
      options: [
        { en: 'The slope dV/dP becomes vertical (-∞), representing the absolute stability limit beyond which voltage collapse occurs', hi: 'ढलान dV/dP लंबवत (-∞) हो जाती है, जो पूर्ण स्थिरता सीमा को दर्शाती है जिसके आगे वोल्टेज कोलैप्स हो जाता है', bn: 'ঢাল dV/dP খাড়া (-∞) হয়ে যায়, যা চরম স্থিতিশীলতার সীমা নির্দেশ করে এবং এর পর মুহূর্তেই ভোল্টেজ পতন ঘটে' },
        { en: 'The transmission line resistance drops to zero ohms', hi: 'ट्रांसमिशन लाइन का प्रतिरोध शून्य ओम तक गिर जाता है', bn: 'সঞ্চালন লাইনের রোধ শূন্য ওহমে নেমে আসে' },
        { en: 'The system frequency doubles from 50 Hz to 100 Hz', hi: 'सिस्टम आवृत्ति 50 Hz से दोगुनी होकर 100 Hz हो जाती है', bn: 'সিস্টেম ফ্রিকোয়েন্সি ৫০ Hz থেকে দ্বিগুণ হয়ে ১০০ Hz হয়' },
        { en: 'The power factor of the load becomes exactly zero leading', hi: 'लोड का पावर फैक्टर ठीक शून्य लीडिंग हो जाता है', bn: 'লোডের পাওয়ার ফ্যাক্টর ঠিক শূন্য লিডিং হয়ে যায়' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'The nose point is the point of maximum power transfer where the voltage derivative dV/dP is infinite. Any small disturbance or load increment causes uncontrollable, cascading voltage collapse.',
        hi: 'नोज़ पॉइंट अधिकतम शक्ति स्थानांतरण बिंदु है जहाँ dV/dP अनंत हो जाता है। इसके पार कोई भी छोटा सा लोड बढ़ने पर पूरा सिस्टम कोलैप्स हो जाता है।',
        bn: 'নোজ পয়েন্ট হলো সর্বোচ্চ শক্তি স্থানান্তরের সীমা যেখানে dV/dP অসীম হয়ে যায়। এই বিন্দুর পর সামান্য লোড বাড়লেই পুরো সিস্টেম ব্ল্যাকআউটে পতিত হয়।'
      }
    },
    {
      id: 'mcq-ch13-l05-04',
      question: {
        en: 'What is the Ferranti effect in electrical power systems?',
        hi: 'विद्युत शक्ति प्रणालियों में फेरांटी प्रभाव क्या है?',
        bn: 'বৈদ্যুতিক পাওয়ার সিস্টেমে ফেরান্টি ইফেক্ট কী?'
      },
      options: [
        { en: 'Receiving-end voltage exceeding sending-end voltage under light-load or no-load conditions due to line charging capacitance', hi: 'लाइन चार्जिंग कैपेसिटेंस के कारण हल्के या शून्य भार पर रिसीविंग वोल्टेज का सेंडिंग वोल्टेज से अधिक हो जाना', bn: 'লাইনের চার্জিং ক্যাপাসিট্যান্সের কারণে হালকা বা নো-লোড অবস্থায় রিসিভিং প্রান্তের ভোল্টেজ সেন্ডিং ভোল্টেজের চেয়ে বেড়ে যাওয়া' },
        { en: 'The melting of aluminum conductors due to solar magnetic storms', hi: 'सौर चुंबकीय तूफानों के कारण एल्यूमीनियम चालकों का पिघलना', bn: 'সৌর ঝড়ের কারণে অ্যালুমিনিয়াম পরিবাহী গলে যাওয়া' },
        { en: 'The humming sound produced by high-voltage substation transformer cores', hi: 'हाई-वोल्टेज सबस्टेशन ट्रांसफार्मर कोर द्वारा उत्पन्न गुनगुनाहट की आवाज', bn: 'সাবস্টেশন ট্রান্সফরমার কোরে সৃষ্ট গুনগুন শব্দ' },
        { en: 'A short circuit occurring between all three phases simultaneously', hi: 'एक साथ तीनों फेजों के बीच होने वाला शॉर्ट सर्किट', bn: 'একই সাথে তিনটি ফেজের মধ্যে শর্ট-সার্কিট সংঘটন' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'On long unloaded or lightly loaded lines, line charging capacitive current flowing through line series inductance produces an in-phase voltage boost, causing receiving-end voltage V_R to exceed sending-end voltage V_S.',
        hi: 'लंबी बिना भार वाली लाइनों में चार्जिंग कैपेसिटिव करंट लाइन प्रेरकता से बहकर वोल्टेज को बढ़ा देता है, जिससे रिसीविंग वोल्टेज सेंडिंग वोल्टेज से अधिक (V_R > V_S) हो जाता है।',
        bn: 'হালকা লোডে লাইনের নিজস্ব চার্জিং ক্যাপাসিটিভ কারেন্ট লাইনের ইন্ডাক্ট্যান্সের মধ্য দিয়ে প্রবাহিত হয়ে ভোল্টেজ বুস্ট করে, ফলে রিসিভিং ভোল্টেজ সেন্ডিং ভোল্টেজের চেয়ে বেশি হয়।'
      }
    },
    {
      id: 'mcq-ch13-l05-05',
      question: {
        en: 'Which substation equipment is switched into service to suppress hazardous overvoltages caused by the Ferranti effect?',
        hi: 'फेरांटी प्रभाव के कारण होने वाले खतरनाक ओवरवोल्टेज को दबाने के लिए किस सबस्टेशन उपकरण को सेवा में चालू किया जाता है?',
        bn: 'ফেরান্টি ইফেক্টের কারণে সৃষ্ট বিপজ্জনক ওভারভোল্টেজ কমাতে কোন সাবস্টেশন যন্ত্রটি লাইনে যুক্ত করা হয়?'
      },
      options: [
        { en: 'Shunt Reactors (inductive coils)', hi: 'शंट रिएक्टर (प्रेरकीय कॉइल)', bn: 'শান্ট রিঅ্যাক্টর (ইন্ডাক্টিভ কয়েল)' },
        { en: 'Shunt Capacitor banks', hi: 'शंट कैपेसिटर बैंक', bn: 'শান্ট ক্যাপাসিটর ব্যাংক' },
        { en: 'Rotary frequency converters', hi: 'रोटरी आवृत्ति परिवर्तक', bn: 'রোটারি ফ্রিকোয়েন্সি কনভার্টার' },
        { en: 'DC smoothing filter capacitors', hi: 'डीसी स्मूथिंग फिल्टर कैपेसिटर', bn: 'ডিসি ফিল্টার ক্যাপাসিটর' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Shunt reactors are inductive coils connected between phase conductors and ground at receiving substations. They absorb the excess capacitive charging kVAR generated by the line, depressing the voltage back to nominal.',
        hi: 'शंट रिएक्टर सबस्टेशन पर लगे बड़े इंडक्टर होते हैं। ये लाइन में उत्पन्न अतिरिक्त कैपेसिटिव चार्जिंग करंट को सोखकर वोल्टेज को सामान्य स्तर पर लाते हैं।',
        bn: 'শান্ট রিঅ্যাক্টর হলো সাবস্টেশনে সংযুক্ত শক্তিশালী ইন্ডাক্টর। এগুলো লাইনে উৎপন্ন অতিরিক্ত ক্যাপাসিটিভ রিঅ্যাক্টিভ পাওয়ার শোষণ করে ভোল্টেজকে স্বাভাবিক মাত্রায় নামিয়ে আনে।'
      }
    },
    {
      id: 'mcq-ch13-l05-06',
      question: {
        en: 'How does installing shunt capacitor compensation at a load bus affect its PV nose curve?',
        hi: 'लोड बस पर शंट कैपेसिटर क्षतिपूर्ति लगाने से उसके PV नोज़ कर्व पर क्या प्रभाव पड़ता है?',
        bn: 'লোড প্রান্তে শান্ট ক্যাপাসিটর ক্ষতিপূরণ যুক্ত করলে PV নোজ কার্ভে কী পরিবর্তন ঘটে?'
      },
      options: [
        { en: 'It shifts the nose curve upward and to the right, expanding the maximum power transfer limit and stability margin', hi: 'यह नोज़ कर्व को ऊपर और दाईं ओर स्थानांतरित करता है, जिससे अधिकतम बिजली सीमा और स्थिरता बढ़ती है', bn: 'এটি নোজ কার্ভকে ওপরের দিকে ও ডানে প্রসারিত করে, ফলে সর্বোচ্চ বিদ্যুৎ সঞ্চালন সীমা ও স্থায়িত্ব বৃদ্ধি পায়' },
        { en: 'It shrinks the nose curve down to a single zero-voltage point', hi: 'यह नोज़ कर्व को घटाकर एक एकल शून्य-वोल्टेज बिंदु बना देता है', bn: 'এটি নোজ কার্ভকে সংকুচিত করে শূন্য ভোল্টেজের বিন্দুতে নামিয়ে আনে' },
        { en: 'It reverses the direction of electrical power flow to negative kilowatts', hi: 'यह विद्युत शक्ति प्रवाह की दिशा को ऋणात्मक किलोवाट में उलट देता है', bn: 'এটি বিদ্যুৎ প্রবাহের দিক উল্টে নেগেটিভ কিলোওয়াট করে ফেলে' },
        { en: 'It has zero effect on the PV curve', hi: 'PV कर्व पर इसका कोई प्रभाव नहीं पड़ता', bn: 'PV কার্ভের ওপর এর কোনো প্রভাব থাকে না' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Capacitive reactive power injection offsets inductive line losses, elevating the bus voltage across all operating points and pushing the maximum transferable power limit (P_max) significantly outward.',
        hi: 'कैपेसिटिव इंजेक्शन लाइन के प्रेरकीय नुकसान की भरपाई करता है, जिससे सभी बिंदुओं पर वोल्टेज बढ़ता है और अधिकतम ट्रांसफर क्षमता (P_max) काफी बढ़ जाती है।',
        bn: 'ক্যাপাসিটর যুক্ত করলে লাইনের ইন্ডাক্টিভ অপচয় দূর হয়, ফলে প্রতিটি অপারেটিং পয়েন্টে ভোল্টেজ বাড়ে এবং সর্বোচ্চ সঞ্চালন সীমা (P_max) বহুগুণ প্রসারিত হয়।'
      }
    },
    {
      id: 'mcq-ch13-l05-07',
      question: {
        en: 'Why do induction motors accelerate system voltage collapse when transmission grid voltage drops below ~0.85 per-unit?',
        hi: 'जब ट्रांसमिशन ग्रिड वोल्टेज ~0.85 प्रति-इकाई से नीचे गिर जाता है, तो इंडक्शन मोटरें सिस्टम वोल्टेज कोलैप्स को तेज क्यों कर देती हैं?',
        bn: 'গ্রিড ভোল্টেজ ~০.৮৫ পার-ইউনিটের নিচে নেমে গেলে ইন্ডাকশন মোটরগুলো সিস্টেমের ভোল্টেজ পতনকে ত্বরান্বিত করে কেন?'
      },
      options: [
        { en: 'Motors stall, drawing locked-rotor currents (5–6x normal) at severely low lagging power factor (~0.2), creating massive line reactive drops', hi: 'मोटरें रुक (स्टॉल हो) जाती हैं और बेहद खराब पावर फैक्टर (~0.2) पर 5-6 गुना करंट खींचती हैं, जिससे भारी वोल्टेज ड्रॉप होता है', bn: 'মোটরগুলো থেমে (স্টল) যায় এবং অত্যন্ত নিম্ন ল্যাগিং PF এ (~০.২) রেটেড কারেন্টের ৫-৬ গুণ কারেন্ট টেনে লাইনে মারাত্মক ভোল্টেজ ড্রপ ঘটায়' },
        { en: 'Motors instantly turn into synchronous generators and backfeed the grid', hi: 'मोटरें तुरंत सिंक्रोनस जनरेटर में बदल जाती हैं और ग्रिड को वापस फीड करती हैं', bn: 'মোটরগুলো মুহূর্তের মধ্যে জেনারেটরে পরিণত হয়ে গ্রিডে ব্যাকফিড করে' },
        { en: 'Motors consume all dielectric oil from nearby distribution transformers', hi: 'मोटरें पास के वितरण ट्रांसफार्मरों से सारा डाइइलेक्ट्रिक तेल खींच लेती हैं', bn: 'মোটরগুলো কাছের ট্রান্সফরমারের সব ইনসুলেশন তেল শুষে নেয়' },
        { en: 'Motor copper windings melt and turn into superconductors', hi: 'मोटर तांबे की वाइंडिंग पिघलकर सुपरकंडक्टर बन जाती हैं', bn: 'মোটরের তামার তার গলে সুপার-কন্ডাক্টরে পরিণত হয়' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'When line voltage collapses, motor electromagnetic torque (T ∝ V²) drops below load torque, causing motors to stall. Stalled motors draw 500–600% locked-rotor current at very poor PF (~0.2 lagging), triggering instantaneous total grid voltage collapse.',
        hi: 'वोल्टेज गिरने पर मोटर टॉर्क (T ∝ V²) लोड टॉर्क से कम हो जाता है और मोटरें स्टॉल हो जाती हैं। वे 500-600% करंट खींचती हैं जिससे तुरंत ग्रिड कोलैप्स हो जाता है।',
        bn: 'ভোল্টেজ কমলে মোটরের টর্ক (T ∝ V²) লোড টর্কের নিচে নেমে যায় এবং মোটর থেমে যায়। থেমে থাকা মোটর ৫০০-৬০০% কারেন্ট ও তীব্র ল্যাগিং kVAR টেনে পুরো গ্রিডকে ব্ল্যাকআউটে ফেলে দেয়।'
      }
    },
    {
      id: 'mcq-ch13-l05-08',
      question: {
        en: 'Why is the Ferranti effect significantly more pronounced in underground power cables than in overhead lines of the same length?',
        hi: 'समान लंबाई की ओवरहेड लाइनों की तुलना में भूमिगत पावर केबलों में फेरांटी प्रभाव काफी अधिक स्पष्ट क्यों होता है?',
        bn: 'একই দৈর্ঘ্যের ওভারহেড লাইনের তুলনায় মাটির নিচের পাওয়ার ক্যাবলে ফেরান্টি ইফেক্ট উল্লেখযোগ্যভাবে বেশি প্রকট হয় কেন?'
      },
      options: [
        { en: 'Underground cables have 20 to 50 times higher shunt capacitance per kilometer due to close conductor spacing and high-permittivity insulation', hi: 'नजदीकी दूरी और उच्च परावैद्युतांक इंसुलेशन के कारण भूमिगत केबलों में प्रति किलोमीटर धारिता 20 से 50 गुना अधिक होती है', bn: 'পরিবাহীর নিকটবর্তী অবস্থান ও উচ্চ ডাই-ইলেকট্রিক ইনসুলেশনের কারণে আন্ডারগ্রাউন্ড ক্যাবলে প্রতি কিমি ক্যাপাসিট্যান্স ২০ থেকে ৫০ গুণ বেশি থাকে' },
        { en: 'Underground cables are shielded from atmospheric lightning strikes', hi: 'भूमिगत केबल वायुमंडलीय आकाशीय बिजली से सुरक्षित रहती हैं', bn: 'মাটির নিচের তারে কোনো বজ্রপাত হয় না' },
        { en: 'Underground cables operate exclusively at direct current (DC)', hi: 'भूमिगत केबल विशेष रूप से दिष्ट धारा (डीसी) पर कार्य करती हैं', bn: 'মাটির নিচের তার শুধুমাত্র ডিসি লাইনে চলে' },
        { en: 'Underground cables have zero electrical resistance', hi: 'भूमिगत केबलों में शून्य विद्युत प्रतिरोध होता है', bn: 'মাটির নিচের তারে কোনো বৈদ্যুতিক রোধ থাকে না' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'In cables, conductors are tightly separated from the grounded shield by solid dielectrics (like XLPE with relative permittivity ε_r ≈ 2.3–3.0), creating 20–50 times more capacitance per km than conductors separated by meters of air in overhead lines.',
        hi: 'भूमिगत केबलों में चालकों के बीच की दूरी बहुत कम होती है और ठोस इंसुलेशन (XLPE) होता है, जिससे कैपेसिटेंस ओवरहेड लाइनों से 20 से 50 गुना अधिक हो जाता है।',
        bn: 'মাটির নিচের তারে পরিবাহীগুলো গ্রাউন্ডেড মেটালিক শিথের খুব কাছাকাছি থাকে এবং XLPE ইনসুলেশন থাকায় এর ক্যাপাসিট্যান্স সাধারণ ওভারহেড লাইনের চেয়ে ২০-৫০ গুণ বেশি হয়।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ch13-reactive-power-flow',
      title: {
        en: 'Reactive Power Flow & Voltage Drop Phasor Schematic',
        hi: 'रिएक्टिव पावर प्रवाह एवं वोल्टेज ड्रॉप फेजर आरेख',
        bn: 'রিঅ্যাক্টিভ পাওয়ার প্রবাহ ও ভোল্টেজ ড্রপ ফেজর ডায়াগ্রাম'
      },
      caption: {
        en: 'Transmission line model demonstrating how lagging reactive power (Q) drives transmission line voltage drop and how shunt VAR injection restores receiving-end voltage.',
        hi: 'ट्रांसमिशन लाइन मॉडल जो दिखाता है कि कैसे लैगिंग रिएक्टिव पावर (Q) लाइन वोल्टेज ड्रॉप उत्पन्न करती है और शंट VAR इंजेक्शन प्राप्त वोल्टेज को पुनर्स्थापित करता है।',
        bn: 'ট্রান্সমিশন লাইন মডেল যা প্রদর্শন করে কীভাবে ল্যাগিং রিঅ্যাক্টিভ পাওয়ার (Q) লাইনে ভোল্টেজ ড্রপ ঘটায় এবং শান্ট VAR ইনজেকশন গ্রাহক প্রান্তের ভোল্টেজ পুনরুদ্ধার করে।'
      },
      svgType: 'circuit-ch13-reactive-power-flow'
    }
  ]
};
