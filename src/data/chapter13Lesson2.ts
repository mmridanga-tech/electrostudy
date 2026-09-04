import { Lesson } from '../types';

export const LESSON_PF_CORRECTION_METHODS: Lesson = {
  id: 'lsn-ch13-pf-correction-methods',
  topicId: 'tp-power-factor-correction',
  chapterId: 'ch-power-factor',
  order: 2,
  title: {
    en: 'Practical Power Factor Correction Methods',
    hi: 'व्यावहारिक पावर फैक्टर सुधार विधियाँ',
    bn: 'ব্যবহারিক পাওয়ার ফ্যাক্টর সংশোধন পদ্ধতি'
  },
  description: {
    en: 'Comprehensive engineering comparison of practical reactive power compensation methods: static shunt capacitor banks, synchronous condensers, phase advancers, and modern Active Harmonic Power Filters (STATCOM). Explore the design trade-offs between centralized substation compensation, group compensation at motor control centers (MCC), and individual point-of-load compensation.',
    hi: 'व्यावहारिक प्रतिघाती शक्ति क्षतिपूर्ति विधियों का गहन इंजीनियरिंग तुलनात्मक अध्ययन: स्थिर शंट संधारित्र बैंक, तुल्यकालिक संघनित्र (सिंक्रोनस कंडेनसर), फेज एडवांसर और आधुनिक एक्टिव पावर फिल्टर (STATCOM)। मुख्य सबस्टेशन पर केंद्रीकृत क्षतिपूर्ति, मोटर कंट्रोल सेंटर (MCC) पर समूह क्षतिपूर्ति, और व्यक्तिगत लोड-पॉइंट क्षतिपूर्ति के बीच डिज़ाइन प्राथमिकताओं को समझें।',
    bn: 'ব্যবহারিক প্রতিক্রিয়াশীল ক্ষমতা ক্ষতিপূরণ পদ্ধতিসমূহের বিস্তারিত বিশ্লেষণ: স্ট্যাটিক শান্ট ক্যাপাসিটর ব্যাংক, সিনক্রোনাস কন্ডেনসার, ফেজ অ্যাডভান্সার এবং আধুনিক অ্যাক্টিভ পাওয়ার ফিল্টার (STATCOM)। মূল সাবস্টেশনে সেন্ট্রালাইজড ক্ষতিপূরণ, মোটর কন্ট্রোল সেন্টারে (MCC) গ্রুপ ক্ষতিপূরণ এবং পৃথক লোড-পয়েন্ট ক্ষতিপূরণের প্রযুক্তিগত সুবিধা-অসুবিধা পর্যালোচনা।'
  },
  estimatedMinutes: 45,
  easyExplanation: {
    en: 'Imagine your factory is a thirsty horse that needs two buckets of water from the main river: one bucket to drink (Active Power) and one bucket to splash itself cool (Reactive Power). If the river is 5 miles away, carrying both buckets all the way strains the pipeline. A power factor correction device is like digging a local pond right next to the horse to provide the cooling water on-site. The long pipeline from the river now only has to carry the drinking water! Shunt capacitors, synchronous condensers, and active electronic compensators provide this reactive cooling water locally, relieving the main power grid.',
    hi: 'मान लीजिए आपके कारखाने को मुख्य नदी से पानी की दो बाल्टियों की आवश्यकता है: एक पीने के लिए (एक्टिव पावर) और एक ठंडक के लिए (रिएक्टिव पावर)। यदि नदी 5 मील दूर है, तो दोनों बाल्टियों को दूर से ढोने में पाइपलाइन पर भारी दबाव पड़ता है। पावर फैक्टर सुधार उपकरण उस कारखाने के ठीक बगल में एक स्थानीय तालाब खोदने जैसा है, जिससे ठंडक का पानी वहीं स्थानीय रूप से मिल जाता है। अब मुख्य पाइपलाइन को केवल पीने का पानी लाना पड़ता है। शंट कैपेसिटर, सिंक्रोनस कंडेनसर और इलेक्ट्रॉनिक कंपेंसेटर यह काम स्थानीय स्तर पर करते हैं।',
    bn: 'মনে করুন আপনার কারখানার নদী থেকে দুটি বালতি পানি প্রয়োজন: একটি পান করার জন্য (সক্রিয় ক্ষমতা) এবং অন্যটি শরীর ঠাণ্ডা করার জন্য (প্রতিক্রিয়াশীল ক্ষমতা)। নদী ৫ মাইল দূরে হলে দুটি বালতি বয়ে আনা পাইপলাইনের জন্য ক্লান্তিকর। পাওয়ার ফ্যাক্টর সংশোধন ডিভাইস হলো কারখানার পাশে একটি ছোট পুকুর তৈরি করার মতো, যা স্থানীয়ভাবে ঠাণ্ডা করার পানি সরবরাহ করে। ফলে মূল গ্রিড থেকে দূরবর্তী পাইপলাইনকে কেবল পানীয় পানি বহন করতে হয়। শান্ট ক্যাপাসিটর এবং সিনক্রোনাস কন্ডেনসার এই স্থানীয় সরবরাহকারীর কাজ করে।'
  },
  detailedExplanation: {
    en: 'Reactive power compensation in industrial distribution systems can be accomplished through four primary technological solutions:\n\n1. Static Shunt Capacitor Banks: The most ubiquitous and cost-effective approach. High-voltage or low-voltage metalized polypropylene capacitors are connected in parallel with the inductive load. The capacitor draws leading current I_C = V / (-jX_C) = jωC·V, which is exactly 180° out of phase with the inductive magnetizing current drawn by coils and motors. This cancels out the inductive reactive demand locally.\n\n2. Synchronous Condensers: A synchronous motor running without mechanical shaft load whose DC rotor excitation is over-excited (E_f > V). As shown by its V-curve, an over-excited synchronous machine operates at a leading power factor, functioning as an adjustable, continuously variable reactive power generator. They are robust against short-circuit grid faults and provide physical rotational inertia (grid frequency stability), though they exhibit higher capital and maintenance costs and consume 1.5–3% active power in internal winding and windage losses.\n\n3. Phase Advancers: Special AC exciters mounted on the rotor shaft of large wound-rotor induction motors to inject leading reactive current directly into the rotor circuit at slip frequency, neutralizing the motor stator reactive demand from within.\n\n4. Active Power Factor Correctors & STATCOMs (Static Synchronous Compensators): Modern power electronics employing Insulated Gate Bipolar Transistor (IGBT) voltage-source converters. A STATCOM injects dynamic, sub-cycle counter-currents to cancel both reactive power and harmonic currents simultaneously, eliminating resonance risks.\n\nCompensation Location Architecture:\n- Individual (Point-of-Load): Capacitors connected directly across motor terminals. Maximizes cable loss reduction across the entire internal plant wiring.\n- Group Compensation: Bank installed at distribution boards or Motor Control Centers (MCC) serving a group of simultaneously operating motors.\n- Centralized Compensation: Single large capacitor bank located at the main incoming LV/MV switchgear bus, controlled by an APFC relay. Minimizes initial capital cost but does not relieve internal factory distribution cables.',
    hi: 'औद्योगिक विद्युत वितरण में प्रतिघाती शक्ति क्षतिपूर्ति मुख्यतः चार तकनीकों द्वारा की जाती है:\n\n1. स्टेटिक शंट कैपेसिटर बैंक: सबसे व्यापक और किफायती समाधान। ये भार के समानांतर में जुड़कर 180° विपरीत लीडिंग धारा उत्पन्न करते हैं, जो प्रेरकीय धारा को समाप्त कर देती है।\n2. सिंक्रोनस कंडेनसर: बिना यांत्रिक भार के चलने वाली एक अति-उत्तेजित (Over-excited) सिंक्रोनस मोटर जो लीडिंग पावर फैक्टर पर कार्य करती है और ग्रिड को लगातार समायोज्य रिएक्टिव पावर देती है। यह ग्रिड को इनर्शियल स्थिरता भी प्रदान करती है।\n3. फेज एडवांसर: बड़े स्लिप-रिंग इंडक्शन मोटरों के रोटर सर्किट में लीडिंग करंट इंजेक्ट करने वाला उपकरण।\n4. एक्टिव पावर फिल्टर (STATCOM): आईजीबीटी (IGBT) आधारित इलेक्ट्रॉनिक कनवर्टर जो मिलिसेकंड में रिएक्टिव पावर और हार्मोनिक्स दोनों को ठीक करता है।\n\nस्थान का चुनाव: व्यक्तिगत (मोटर टर्मिनल पर), समूह (MCC पैनल पर), और केंद्रीकृत (मुख्य सबस्टेशन पर)।',
    bn: 'শিল্পে পাওয়ার ফ্যাক্টর সংশোধনের চারটি প্রধান পদ্ধতি রয়েছে:\n\n১. স্ট্যাটিক শান্ট ক্যাপাসিটর ব্যাংক: সবচেয়ে জনপ্রিয় ও সাশ্রয়ী পদ্ধতি। ক্যাপাসিটর লোডের সাথে সমান্তরালে যুক্ত হয়ে লিডিং কারেন্ট সরবরাহ করে এবং মোটরের ইন্ডাক্টিভ কারেন্টকে প্রশমিত করে।\n২. সিনক্রোনাস কন্ডেনসার: কোনো যান্ত্রিক লোড ছাড়া চালিত একটি ওভার-এক্সাইটেড সিনক্রোনাস মোটর, যা সিস্টেমে পরিবর্তনশীল লিডিং রিঅ্যাক্টিভ পাওয়ার এবং ঘূর্ণন জড়তা (ইনার্শিয়া) সরবরাহ করে।\n৩. ফেজ অ্যাডভান্সার: বড় স্লিপ-রিং মোটরের রোটরে স্লিপ কম্পাঙ্কে লিডিং কারেন্ট সরবরাহকারী এক্সাইটার।\n৪. অ্যাক্টিভ পাওয়ার ফিল্টার / STATCOM: দ্রুতগতির আইজিবিটি নিয়ন্ত্রিত ইনভার্টার যা মুহূর্তের মধ্যে রিঅ্যাক্টিভ পাওয়ার ও হারমোনিকস উভয়ই দূর করতে পারে।\n\nস্থাপনের কৌশল: ইন্ডিভিজুয়াল (মোটর প্রান্তে), গ্রুপ (MCC প্যানেলে) এবং সেন্ট্রালাইজড (মূল সাবস্টেশন বাসবারে)।'
  },
  formulas: [
    {
      id: 'f-net-reactive-power',
      symbol: 'Q_{net}',
      expression: 'Q_{net} = Q_L - Q_C',
      title: {
        en: 'Net Reactive Power with Shunt Capacitor Compensation',
        hi: 'शंट कैपेसिटर क्षतिपूर्ति के साथ कुल प्रतिघाती शक्ति',
        bn: 'শান্ট ক্যাপাসিটর ক্ষতিপূরণ সহ নেট প্রতিক্রিয়াশীল ক্ষমতা'
      },
      description: {
        en: 'Calculates net lagging reactive power remaining in the line after subtracting capacitive reactive power supplied locally.',
        hi: 'स्थानीय रूप से आपूर्ति की गई संधारित्र प्रतिघाती शक्ति घटाने के बाद शेष बची कुल लैगिंग प्रतिघाती शक्ति की गणना।',
        bn: 'ক্যাপাসিটর দ্বারা স্থানীয়ভাবে সরবরাহকৃত রিঅ্যাক্টিভ পাওয়ার বাদ দিয়ে লাইনে অবশিষ্ট নেট ল্যাগিং রিঅ্যাক্টিভ পাওয়ার গণনা।'
      },
      variables: [
        { symbol: 'Q_{net}', name: { en: 'Net reactive power from grid (kVAR)', hi: 'ग्रिड से कुल प्रतिघाती शक्ति (kVAR)', bn: 'গ্রিড থেকে নেট প্রতিক্রিয়াশীল ক্ষমতা (kVAR)' } },
        { symbol: 'Q_L', name: { en: 'Load inductive reactive power (kVAR)', hi: 'भार की प्रेरकीय प्रतिघाती शक्ति (kVAR)', bn: 'লোডের ইন্ডাক্টিভ প্রতিক্রিয়াশীল ক্ষমতা (kVAR)' } },
        { symbol: 'Q_C', name: { en: 'Capacitor reactive power supplied (kVAR)', hi: 'कैपेसिटर द्वारा दी गई प्रतिघाती शक्ति (kVAR)', bn: 'ক্যাপাসিটর দ্বারা সরবরাহকৃত রিঅ্যাক্টিভ ক্ষমতা (kVAR)' } }
      ]
    },
    {
      id: 'f-capacitor-lead-current',
      symbol: 'I_C',
      expression: 'I_C = \\frac{V_{ph}}{X_C} = 2\\pi f \\cdot C \\cdot V_{ph}',
      title: {
        en: 'Shunt Capacitor Phase Current',
        hi: 'शंट कैपेसिटर फेज धारा',
        bn: 'শান্ট ক্যাপাসিটর ফেজ কারেন্ট'
      },
      description: {
        en: 'Computes leading current injected per phase by a capacitor bank of capacitance C.',
        hi: 'धारिता C के कैपेसिटर बैंक द्वारा प्रति फेज इंजेक्ट की जाने वाली लीडिंग धारा की गणना करता है।',
        bn: 'C ধারকত্বের ক্যাপাসিটর ব্যাংক দ্বারা প্রতি ফেজে প্রবাহিত লিডিং কারেন্ট নির্ণয় করে।'
      },
      variables: [
        { symbol: 'I_C', name: { en: 'Capacitor phase current (A)', hi: 'कैपेसिटर फेज धारा (A)', bn: 'ক্যাপাসিটর ফেজ কারেন্ট (A)' } },
        { symbol: 'V_{ph}', name: { en: 'Phase voltage across capacitor (V)', hi: 'कैपेसिटर पर फेज वोल्टेज (V)', bn: 'ক্যাপাসিটরের আড়াআড়ি ফেজ ভোল্টেজ (V)' } },
        { symbol: 'f', name: { en: 'Supply system frequency (Hz)', hi: 'आपूर्ति प्रणाली आवृत्ति (Hz)', bn: 'সিস্টেম কম্পাঙ্ক (Hz)' } },
        { symbol: 'C', name: { en: 'Capacitance per phase (Farads, F)', hi: 'प्रति फेज धारिता (F)', bn: 'প্রতি ফেজে ক্যাপাসিট্যান্স (F)' } }
      ]
    },
    {
      id: 'f-cable-loss-reduction',
      symbol: '\\Delta P_{loss}',
      expression: '\\% \\text{ Loss Reduction} = \\left(1 - \\left(\\frac{PF_1}{PF_2}\\right)^2\\right) \\times 100\\%',
      title: {
        en: 'Distribution Line I²R Loss Reduction Percentage',
        hi: 'वितरण लाइन I²R हानि में प्रतिशत कमी',
        bn: 'ডিস্ট্রিবিউশন লাইন I²R অপচয় হ্রাসের শতকরা হার'
      },
      description: {
        en: 'Quantifies energy efficiency gains and thermal loss reductions in upstream conductors following power factor improvement from PF1 to PF2.',
        hi: 'PF1 से PF2 तक पावर फैक्टर सुधार के बाद चालकों में थर्मल हानियों में कमी को मापता है।',
        bn: 'পাওয়ার ফ্যাক্টর PF1 থেকে PF2 তে উন্নীত করার ফলে পরিবাহীতে তাপীয় অপচয় হ্রাসের অনুপাত।'
      },
      variables: [
        { symbol: 'PF_1', name: { en: 'Original lagging power factor', hi: 'प्रारंभिक लैगिंग पावर फैक्टर', bn: 'প্রাথমিক ল্যাগিং পাওয়ার ফ্যাক্টর' } },
        { symbol: 'PF_2', name: { en: 'Improved target power factor', hi: 'सुधरा हुआ लक्षित पावर फैक्टर', bn: 'উন্নত লক্ষ্যমাত্রার পাওয়ার ফ্যাক্টর' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch13-l02-comparison',
      title: {
        en: 'Engineering Comparison of PFC Technologies',
        hi: 'PFC प्रौद्योगिकियों की इंजीनियरिंग तुलना',
        bn: 'PFC প্রযুক্তিসমূহের তুলনামূলক প্রকৌশল পর্যালোচনা'
      },
      content: {
        en: 'Choosing the optimal reactive power compensation technology requires evaluating capital cost, operating losses, maintenance requirements, and transient dynamic response:\n\n1. Static Shunt Capacitors:\n- Capital Cost: Lowest ($/kVAR).\n- Losses: Very low (< 0.5 W/kVAR).\n- Maintenance: Minimal (periodic capacitance testing and visual inspection).\n- Limitations: Discrete step control; vulnerable to harmonic resonance; can cause overvoltage during light-load conditions if not switched off.\n\n2. Synchronous Condensers:\n- Capital Cost: High.\n- Losses: Moderate to High (15–30 W/kVAR, 1.5–3% of rating due to windage and iron losses).\n- Maintenance: High (bearings, cooling systems, brush/slip-ring maintenance).\n- Unique Advantages: True continuous stepless voltage control; absorbs reactive power during light load; withstands severe grid overvoltages and short circuits without tripping; injects essential physical rotational inertia (H constant) into weak green grids dominated by solar/wind.\n\n3. Static Synchronous Compensators (STATCOM):\n- Capital Cost: Medium to High.\n- Losses: Low to Moderate (~10 W/kVAR).\n- Dynamic Response: Sub-cycle response (< 10 ms vs several seconds for capacitor contactors or synchronous condenser field excitation).\n- Unique Advantages: Completely immune to harmonic resonance; provides active harmonic mitigation; operates effectively even during reduced line voltage conditions (unlike capacitors whose output drops as V²).',
        hi: 'पावर फैक्टर सुधार के लिए सही तकनीक का चयन करते समय लागत, परिचालन हानि और गतिशील प्रतिक्रिया का विश्लेषण आवश्यक है:\n\n1. स्टैटिक शंट कैपेसिटर: सबसे कम लागत, नगण्य हानियाँ (< 0.5 W/kVAR), न्यूनतम रखरखाव। परंतु ये केवल स्टेप्स में काम करते हैं और हार्मोनिक्स के प्रति संवेदनशील होते हैं।\n2. सिंक्रोनस कंडेनसर: उच्च लागत और 1.5–3% सक्रिय ऊर्जा हानि। परंतु ये ग्रिड को घूमने वाली इनर्शिया (जड़ता) और शॉर्ट-सर्किट सुरक्षा प्रदान करते हैं।\n3. STATCOM (आईजीबीटी आधारित): 10 मिलीसेकंड से भी तेज प्रतिक्रिया, हार्मोनिक्स का सक्रिय शमन, तथा वोल्टेज गिरने पर भी प्रभावी आउटपुट।',
        bn: 'প্রযুক্তির তুলনামূলক বৈশিষ্ট্য:\n\n১. স্ট্যাটিক শান্ট ক্যাপাসিটর: সর্বনিম্ন খরচ, কম অপচয় (< ০.৫ W/kVAR)। তবে এটি নির্দিষ্ট ধাপে কাজ করে এবং হারমোনিক রেজোন্যান্সের ঝুঁকি থাকে।\n২. সিনক্রোনাস কন্ডেনসার: উচ্চ মূলধন ও রক্ষণাবেক্ষণ খরচ হলেও এটি গ্রিডকে প্রয়োজনীয় ঘূর্ণন জড়তা (ইনর্শিয়া) দেয় এবং সাবস্টেশনের ভোল্টেজ মসৃণভাবে নিয়ন্ত্রণ করে।\n৩. STATCOM: ১০ মিলিসেকেন্ডের মধ্যে কাজ করে, কোনো রেজোন্যান্স ঝুঁকি নেই এবং হারমোনিক কারেন্ট ফিল্টার করতে পারে।'
      }
    },
    {
      id: 'sec-ch13-l02-topologies',
      title: {
        en: 'Compensation Locations: Centralized vs Group vs Individual',
        hi: 'क्षतिपूर्ति स्थान: केंद्रीकृत बनाम समूह बनाम व्यक्तिगत',
        bn: 'ক্ষতিপূরণ স্থাপনের স্থান: সেন্ট্রালাইজড বনাম গ্রুপ বনাম ইন্ডিভিজুয়াল'
      },
      content: {
        en: 'Where should capacitor banks be physically installed within a plant distribution topology?\n\n1. Individual (Point-of-Load) Compensation:\nCapacitors are wired directly across the terminals of large, continuous-duty inductive loads (e.g., 75 kW chiller motor) and switched simultaneously with the motor contactor.\n- Advantage: Full reduction in current across the entire distribution chain—including main breakers, feeder cables, motor branch cables, and substation transformers. Minimizes internal factory I²R losses.\n- Disadvantage: Highest total capacitor capital cost (many small capacitors instead of one large bank); low utilization if motors run intermittently.\n\n2. Group Compensation:\nA single capacitor bank is connected at a local Motor Control Center (MCC) or sub-distribution board supplying a group of co-located motors.\n- Advantage: Better utilization factor; reduces losses in main incoming cables and transformers.\n- Disadvantage: Does not relieve branch circuit cables between the MCC and individual motors.\n\n3. Centralized Compensation:\nA large, multi-stage APFC panel is installed at the main low-voltage incoming busbar (415 V) directly adjacent to the substation transformer secondary.\n- Advantage: Lowest installation cost per kVAR; optimal diversity factor; automatically steps banks in and out to maintain high overall plant PF regardless of which machines are running.\n- Disadvantage: Does not relieve any internal factory cables or sub-panels; all reactive current still circulates through the plant internal distribution network up to the main busbar.',
        hi: 'संयंत्र के भीतर कैपेसिटर बैंक कहाँ लगाए जाने चाहिए?\n\n1. व्यक्तिगत (पॉइंट-ऑफ-लोड) क्षतिपूर्ति: सीधे बड़े मोटरों के टर्मिनलों पर जुड़े होते हैं। यह फैक्ट्री के आंतरिक केबलों में करंट और हीटिंग को पूरी तरह कम करता है, लेकिन लागत अधिक होती है।\n2. समूह क्षतिपूर्ति: मोटर कंट्रोल सेंटर (MCC) पर लगाया जाता है जो एक साथ चलने वाले कई मोटरों को संभालता है।\n3. केंद्रीकृत क्षतिपूर्ति: मुख्य 415 V बसबार पर एक स्वचालित APFC पैनल लगाया जाता है। यह सबसे किफायती है और पावर कंपनी के मीटर पर 0.99 PF बनाए रखता है, परंतु फैक्ट्री के अंदरूनी केबलों का भार कम नहीं करता।',
        bn: 'ক্যাপাসিটর ব্যাংক স্থাপনের অবস্থান নির্বাচন:\n\n১. ইন্ডিভিজুয়াল ক্ষতিপূরণ: সরাসরি বড় মোটরের টার্মিনালে সংযুক্ত। এটি কারখানার অভ্যন্তরীণ তারের I²R অপচয় পুরোপুরি দূর করে, কিন্তু প্রতি মোটরের জন্য আলাদা ক্যাপাসিটর লাগায় খরচ বেশি।\n২. গ্রুপ ক্ষতিপূরণ: মোটরের গ্রুপকে সরবরাহকারী সাব-ডিস্ট্রিবিউশন প্যানেল বা MCC-তে সংযুক্ত।\n৩. সেন্ট্রালাইজড ক্ষতিপূরণ: মূল সাবস্টেশন বাসবারে একটি বৃহৎ স্বয়ংক্রিয় APFC প্যানেল স্থাপন। এটি সবচেয়ে সাশ্রয়ী এবং ইউটিলিটি মিটারের জন্য আদর্শ, তবে কারখানার ভেতরের শাখা তারের বোঝা কমায় না।'
      }
    }
  ],
  examples: [
    {
      id: 'ex-ch13-l02-01',
      title: {
        en: 'Feeder Cable Thermal Loss Reduction Calculation',
        hi: 'फीडर केबल थर्मल हानि में कमी की गणना',
        bn: 'ফিডার ক্যাবলের তাপীয় ক্ষয় হ্রাসের হিসাব'
      },
      problem: {
        en: 'A 415 V, 3-phase factory feeder cable has a resistance of R = 0.04 Ω per phase and supplies an inductive load of 200 kW at an existing power factor of 0.70 lagging. Calculate:\n1. The initial line current and total 3-phase I²R copper losses in the cable.\n2. The new line current and 3-phase cable copper losses after installing point-of-load shunt capacitors improving the power factor to 0.98 lagging.\n3. The annual energy savings in kWh assuming 6,000 operating hours per year.',
        hi: 'एक 415 V, 3-फेज फैक्ट्री फीडर केबल का प्रतिरोध 0.04 Ω प्रति फेज है और यह 0.70 लैगिंग पावर फैक्टर पर 200 kW लोड की आपूर्ति करता है। गणना कीजिए:\n1. प्रारंभिक लाइन धारा और केबल में कुल 3-फेज I²R हानियाँ।\n2. पॉइंट-ऑफ-लोड कैपेसिटर लगाकर पावर फैक्टर को 0.98 करने के बाद नई धारा और हानियाँ।\n3. प्रति वर्ष 6,000 कार्य घंटों के आधार पर वार्षिक ऊर्जा बचत (kWh में)।',
        bn: 'একটি ৪১৫ V, ৩-ফেজ কারখানার ফিডার ক্যাবলের প্রতি ফেজ রোধ R = ০.০৪ Ω এবং এটি ০.৭০ ল্যাগিং পাওয়ার ফ্যাক্টরে ২০০ kW লোড বহন করে। নির্ণয় করুন:\n১. প্রাথমিক লাইন কারেন্ট এবং ক্যাবলে মোট ৩-ফেজ I²R অপচয়।\n২. পয়েন্ট-অফ-লোড ক্যাপাসিটর স্থাপন করে পাওয়ার ফ্যাক্টর ০.৯৮-এ উন্নীত করার পর নতুন কারেন্ট ও ক্যাবল অপচয়।\n৩. বছরে ৬,০০০ ঘণ্টা পরিচালন ধরে বার্ষিক বিদ্যুৎ সাশ্রয় (kWh)।'
      },
      solution: {
        en: 'Step 1: Calculate initial line current and copper loss:\nS₁ = P / PF₁ = 200 kW / 0.70 = 285.7 kVA\nI₁ = S₁ / (√3 · V_L) = 285,714 / (√3 · 415) = 397.5 A\nTotal 3-phase cable loss P_loss1 = 3 · I₁² · R = 3 · (397.5)² · 0.04 = 3 · 158,006 · 0.04 = 18,961 W = 18.96 kW\n\nStep 2: Calculate improved line current and copper loss at PF₂ = 0.98:\nS₂ = P / PF₂ = 200 kW / 0.98 = 204.1 kVA\nI₂ = S₂ / (√3 · V_L) = 204,082 / (√3 · 415) = 283.9 A\nTotal 3-phase cable loss P_loss2 = 3 · I₂² · R = 3 · (283.9)² · 0.04 = 3 · 80,599 · 0.04 = 9,672 W = 9.67 kW\n\nStep 3: Calculate power loss reduction and annual kWh savings:\nPower loss reduction ΔP = P_loss1 - P_loss2 = 18.96 kW - 9.67 kW = 9.29 kW\nPercentage loss reduction = [1 - (0.70 / 0.98)²] · 100% = [1 - 0.5102] · 100% = 48.98% ≈ 49%\nAnnual energy saved = 9.29 kW · 6,000 h = 55,740 kWh\n\nConclusion: Improving the power factor locally cut feeder cable heating by almost half (49%), conserving 55,740 kWh of wasted electricity annually and extending the service lifetime of the distribution cables.',
        hi: 'चरण 1: प्रारंभिक धारा एवं केबल हानि:\nS₁ = 200 / 0.70 = 285.7 kVA\nI₁ = 285,714 / (√3 · 415) = 397.5 A\nप्रारंभिक 3-फेज हानि = 3 · (397.5)² · 0.04 = 18,961 W = 18.96 kW\n\nचरण 2: 0.98 PF पर धारा एवं हानि:\nI₂ = 204,082 / (√3 · 415) = 283.9 A\nनई हानि = 3 · (283.9)² · 0.04 = 9,672 W = 9.67 kW\n\nचरण 3: वार्षिक ऊर्जा बचत:\nहानि में कमी = 18.96 - 9.67 = 9.29 kW (49% कमी)\nवार्षिक बचत = 9.29 kW · 6,000 घंटे = 55,740 kWh\n\nनिष्कर्ष: पावर फैक्टर सुधारने से केबल हीटिंग 49% घट गई और सालाना 55,740 यूनिट बिजली की बचत हुई।',
        bn: 'ধাপ ১: প্রাথমিক কারেন্ট ও তারের অপচয়:\nS₁ = ২০০ / ০.৭০ = ২৮৫.৭ kVA\nI₁ = ২৮৫,৭১৪ / (√৩ · ৪১৫) = ৩৯৭.৫ A\nপ্রাথমিক ক্ষতি = ৩ · (৩৯৭.৫)² · ০.০৪ = ১৮.৯৬ kW\n\nধাপ ২: ০.৯৮ PF এ কারেন্ট ও অপচয়:\nI₂ = ২০৪,০৮২ / (√৩ · ৪১৫) = ২৮৩.৯ A\nনতুন ক্ষতি = ৩ · (২৮৩.৯)² · ০.০৪ = ৯.৬৭ kW\n\nধাপ ৩: সাশ্রয়:\nক্ষতি হ্রাস = ১৮.৯৬ - ৯.৬৭ = ৯.২৯ kW (৪৯% হ্রাস)\nবার্ষিক সাশ্রয় = ৯.২৯ kW · ৬,০০০ ঘণ্টা = ৫৫,৭৪০ kWh\n\nফলাফল: ক্যাপাসিটর ব্যবহারে ক্যাবলের তাপ অপচয় ৪৯% কমে যায় এবং বছরে ৫৫,৭৪০ ইউনিট বিদ্যুৎ সাশ্রয় হয়।'
      }
    },
    {
      id: 'ex-ch13-l02-02',
      title: {
        en: 'Comparison of Synchronous Condenser vs Shunt Capacitor Performance',
        hi: 'सिंक्रोनस कंडेनसर बनाम शंट कैपेसिटर प्रदर्शन की तुलना',
        bn: 'সিনক্রোনাস কন্ডেনসার বনাম শান্ট ক্যাপাসিটরের কর্মক্ষমতা তুলনা'
      },
      problem: {
        en: 'A remote mining substation operating at 11 kV suffers a severe grid voltage sag, dropping line voltage by 15% from 11.0 kV to 9.35 kV. Compare the reactive power output of:\n1. An 8.0 MVAR static shunt capacitor bank.\n2. An 8.0 MVAR synchronous condenser with an automatic voltage regulator (AVR).\nExplain the critical grid stability implication.',
        hi: 'एक दूरस्थ 11 kV खनन सबस्टेशन पर ग्रिड वोल्टेज में 15% की भारी गिरावट आती है, जिससे वोल्टेज 11.0 kV से गिरकर 9.35 kV हो जाता है। निम्नलिखित के आउटपुट की तुलना करें:\n1. 8.0 MVAR का स्टैटिक शंट कैपेसिटर बैंक।\n2. स्वचालित वोल्टेज रेगुलेटर (AVR) से लैस 8.0 MVAR का सिंक्रोनस कंडेनसर।',
        bn: 'একটি প্রত্যন্ত ১১ kV খনি সাবস্টেশনে গ্রিড ভোল্টেজ ১৫% হ্রাস পেয়ে ১১.০ kV থেকে ৯.৩৫ kV তে নেমে আসে। নিম্নলিখিত ডিভাইস দুটির রিঅ্যাক্টিভ পাওয়ার আউটপুট তুলনা করুন:\n১. ৮.০ MVAR স্ট্যাটিক শান্ট ক্যাপাসিটর ব্যাংক।\n২. অটোমেটিক ভোল্টেজ রেগুলেটর (AVR) যুক্ত ৮.০ MVAR সিনক্রোনাস কন্ডেনসার।'
      },
      solution: {
        en: 'Step 1: Calculate shunt capacitor output during voltage sag:\nCapacitor reactive power output is proportional to the square of terminal voltage: Q_C ∝ V²\nV_ratio = 9.35 kV / 11.0 kV = 0.85 (85%)\nQ_C_sag = Q_C_rated · (V_actual / V_rated)² = 8.0 MVAR · (0.85)² = 8.0 · 0.7225 = 5.78 MVAR\nOutput drops by 27.75%!\n\nStep 2: Calculate synchronous condenser output during voltage sag:\nQ_synch = [V · (E_f · cos(δ) - V)] / X_d\nWhen terminal voltage V drops to 9.35 kV, the AVR instantly boosts DC rotor field excitation current, raising internal excitation EMF E_f up to its field forcing limit (e.g., 1.4 per-unit). This increases the difference (E_f - V), allowing the synchronous condenser to boost reactive output to its transient overload rating (e.g., 120–150% of nominal, delivering 9.6 to 12.0 MVAR).\n\nConclusion: Shunt capacitors fail precisely when the grid needs them most—during a voltage sag, their reactive output collapses as V², exacerbating voltage instability. In contrast, a synchronous condenser acts as an active voltage stabilizer by boosting reactive output during grid faults.',
        hi: 'चरण 1: शंट कैपेसिटर आउटपुट:\nकैपेसिटर की प्रतिघाती शक्ति वोल्टेज के वर्ग के समानुपाती होती है: Q_C ∝ V²\nQ_C_sag = 8.0 · (0.85)² = 8.0 · 0.7225 = 5.78 MVAR (आउटपुट में 27.8% की भारी गिरावट)।\n\nचरण 2: सिंक्रोनस कंडेनसर आउटपुट:\nजैसे ही वोल्टेज गिरता है, इसका AVR रोटर फील्ड को बढ़ाकर आंतरिक EMF E_f को बढ़ा देता है। इसके परिणामस्वरूप यह अपने रेटेड मान से भी अधिक (लगभग 9.6 से 12 MVAR) तक बूस्ट आउटपुट दे सकता है।\n\nनिष्कर्ष: वोल्टेज सैग के समय कैपेसिटर का आउटपुट गिर जाता है जो ग्रिड के लिए खतरनाक है, जबकि सिंक्रोनस कंडेनसर अधिक आउटपुट देकर ग्रिड को कोलैप्स होने से बचाता है।',
        bn: 'ধাপ ১: শান্ট ক্যাপাসিটরের আউটপুট:\nক্যাপাসিটরের ক্ষমতা ভোল্টেজের বর্গের সমানুপাতিক: Q_C ∝ V²\nQ_C_sag = ৮.০ · (০.৮৫)² = ৫.৭৮ MVAR (আউটপুট ২৭.৭৫% কমে যায়)।\n\nধাপ ২: সিনক্রোনাস কন্ডেনসারের আউটপুট:\nভোল্টেজ কমার সাথে সাথে এর AVR রোটর এক্সাইটেশন বাড়িয়ে দেয়, ফলে এটি ওভারলোড রেটিংয়ে গিয়ে ৯.৬ থেকে ১২.০ MVAR পর্যন্ত সাপোর্ট দিতে পারে।\n\nফলাফল: ভোল্টেজ ড্রপের সময় ক্যাপাসিটরের আউটপুট V² হারে কমে যাওয়ায় সিস্টেম আরও অস্থিতিশীল হয়, কিন্তু সিনক্রোনাস কন্ডেনসার গ্রিডকে ব্ল্যাকআউট থেকে রক্ষা করে।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Overhead Crane and Lift Motor Compensation: Individual capacitor banks wired to hoisting slip-ring motors to relieve plant distribution networks during repeated peak-torque acceleration cycles.',
      'Renewable Wind Farm Grid Code Compliance: Utilities mandate that offshore and onshore wind farms install centralized STATCOMs or synchronous condensers at point-of-interconnection (POI) substations to support grid voltage during transmission line faults.',
      'Paper Mill / Rolling Mill Motor Control Centers: Group capacitor banks installed at 415 V motor control centers containing dozens of continuous conveyors and rolling drives.'
    ],
    hi: [
      'क्रेन और लिफ्ट मोटर क्षतिपूर्ति: भारी भार उठाने के दौरान होने वाले वोल्टेज ड्रॉप को रोकने के लिए मोटरों पर व्यक्तिगत कैपेसिटर लगाना।',
      'पवन ऊर्जा फार्म ग्रिड अनुपालन: ट्रांसमिशन फॉल्ट के दौरान ग्रिड वोल्टेज को बनाए रखने के लिए बड़े विंड फार्मों पर STATCOM या सिंक्रोनस कंडेनसर लगाना अनिवार्य होता है।',
      'पेपर मिल और रोलिंग मिल MCC: दर्जनों मोटरों को संभालने वाले 415 V मोटर कंट्रोल सेंटरों पर ग्रुप कैपेसिटर बैंक लगाना।'
    ],
    bn: [
      'ওভারহেড ক্রেন ও লিফট মোটর: বারবার ভারী উত্তোলনের সময় লাইন ভোল্টেজ ধরে রাখতে মোটরের প্রান্তে সরাসরি ক্যাপাসিটর সংযোগ।',
      'উইন্ড ফার্ম গ্রিড ইন্টারকানেকশন: গ্রিড কোড বজায় রাখতে ও ভোল্টেজ ফল্ট রাইড-থ্রু (FRT) নিশ্চিত করতে বড় বায়ুবিদ্যুৎ কেন্দ্রে STATCOM বা সিনক্রোনাস কন্ডেনসার স্থাপন।',
      'ইন্ডাস্ট্রিয়াল মোটর কন্ট্রোল সেন্টার: রোলিং মিলের একাধিক মোটরের জন্য MCC প্যানেলে গ্রুপ ক্ষতিপূরণ ব্যবস্থা।'
    ]
  },
  importantPoints: {
    en: [
      'Shunt capacitor reactive power output drops quadratically with voltage: Q = V² / X_C. A 10% drop in voltage reduces capacitor output by 19%.',
      'Synchronous condensers provide physical rotational inertia (H constant), which cannot be provided by static capacitor banks.',
      'Individual motor compensation must NEVER size the capacitor greater than 90% of the motor no-load magnetizing kVAR to prevent destructive self-excitation overvoltages upon switch-off.'
    ],
    hi: [
      'शंट कैपेसिटर का आउटपुट वोल्टेज के वर्ग के साथ गिरता है (Q = V² / X_C)। वोल्टेज में 10% कमी कैपेसिटर क्षमता को 19% घटा देती है।',
      'सिंक्रोनस कंडेनसर ग्रिड को घूर्णन जड़ता (इनर्शिया) प्रदान करते हैं, जो स्टैटिक कैपेसिटर नहीं दे सकते।',
      'मोटर स्विच ऑफ होने पर खतरनाक सेल्फ-एक्साइटेशन से बचने के लिए व्यक्तिगत कैपेसिटर को मोटर के नो-लोड मैग्नेटाइजिंग kVAR के 90% से अधिक कभी न चुनें।'
    ],
    bn: [
      'শান্ট ক্যাপাসিটরের ক্ষমতা ভোল্টেজের বর্গের সাথে পরিবর্তিত হয় (Q = V² / X_C)। ভোল্টেজ ১০% কমলে ক্যাপাসিটরের শক্তি ১৯% কমে যায়।',
      'সিনক্রোনাস কন্ডেনসার গ্রিডে মূল্যবান ঘূর্ণন জড়তা যোগ করে, যা স্ট্যাটিক ক্যাপাসিটর পারে না।',
      'স্ব-উত্তেজনা (Self-excitation) জনিত মারাত্মক ওভারভোল্টেজ এড়াতে মোটরে সরাসরি যুক্ত ক্যাপাসিটরের রেটিং মোটরের নো-লোড kVAR এর ৯০% এর বেশি রাখা নিষিদ্ধ।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistake: Sizing a dedicated motor terminal capacitor equal to full-load motor kVAR. Correction: When the motor is turned off, the rotor keeps spinning on coast-down; an oversized capacitor acts as a generator exciter, causing self-excitation terminal voltages up to 1.5–2x rated voltage that puncture winding insulation. Always cap sizing at 85–90% of no-load kVAR.',
      'Mistake: Believing centralized substation PFC eliminates internal factory cable heating. Correction: Centralized banks only reduce current upstream of the main substation bus. Downstream factory feeder cables still carry full uncompensated lagging motor currents.'
    ],
    hi: [
      'त्रुटि: मोटर टर्मिनल कैपेसिटर को मोटर के फुल-लोड kVAR के बराबर चुनना। सुधार: मोटर बंद होने पर घूमते हुए रोटर के कारण सेल्फ-एक्साइटेशन हो सकता है और वोल्टेज 1.5 से 2 गुना बढ़कर इंसुलेशन जला सकता है। इसे हमेशा नो-लोड kVAR के 90% तक ही सीमित रखें।',
      'त्रुटि: यह सोचना कि मुख्य सबस्टेशन पर APFC लगाने से पूरी फैक्ट्री के केबलों की हीटिंग खत्म हो जाएगी। सुधार: मुख्य बसबार के नीचे के सभी आंतरिक केबलों में मोटर की पूरी लैगिंग धारा वैसे ही बहती रहती है।'
    ],
    bn: [
      'ভুল: মোটরের ফুল-লোড kVAR এর সমান ক্যাপাসিটর নির্বাচন করা। সংশোধন: মোটর বন্ধ করার পর জড়তার কারণে ঘোরার সময় ওভারভোল্টেজ তৈরি হয়ে মোটরের ওয়াইন্ডিং পুড়ে যেতে পারে। সর্বদা নো-লোড kVAR এর ৮৫-৯০% এর মধ্যে সীমাবদ্ধ রাখুন।',
      'ভুল: ধারণা করা যে সাবস্টেশনে সেন্ট্রালাইজড ব্যাংক বসালেই কারখানার অভ্যন্তরীণ সব তারের তাপ অপচয় বন্ধ হয়ে যাবে। সংশোধন: সেন্ট্রালাইজড ব্যাংক শুধু মূল সাবস্টেশনের পেছনের লাইনে কারেন্ট কমায়, কারখানার ভেতরের শাখা তারে কারেন্ট আগের মতোই থাকে।'
    ]
  },
  keyTakeaways: {
    en: [
      'Shunt capacitors provide the most economical static reactive compensation for steady-state loads.',
      'Synchronous condensers and STATCOMs provide fast, continuous, stepless voltage regulation with immunity to harmonic resonance.',
      'Point-of-load compensation minimizes plant-wide I²R losses, whereas centralized compensation minimizes equipment capital expenditure.'
    ],
    hi: [
      'शंट कैपेसिटर स्थिर भारों के लिए सबसे किफायती प्रतिघाती शक्ति समाधान हैं।',
      'सिंक्रोनस कंडेनसर और STATCOM ग्रिड को बिना किसी स्टेप्स के निरंतर वोल्टेज नियंत्रण प्रदान करते हैं।',
      'पॉइंट-ऑफ-लोड क्षतिपूर्ति प्लांट के आंतरिक केबलों में हानियों को सबसे अधिक घटाती है, जबकि केंद्रीकृत क्षतिपूर्ति उपकरणों की प्रारंभिक लागत को कम रखती है।'
    ],
    bn: [
      'শান্ট ক্যাপাসিটর স্থির লোডের জন্য সবচেয়ে সাশ্রয়ী ক্ষতিপূরণ ব্যবস্থা।',
      'সিনক্রোনাস কন্ডেনসার এবং STATCOM নিরবচ্ছিন্ন ও নিখুঁত ভোল্টেজ নিয়ন্ত্রণ সরবরাহ করে।',
      'পয়েন্ট-অফ-লোড ক্ষতিপূরণ কারখানার অভ্যন্তরে তারের ক্ষয় সর্বনিম্ন করে, পক্ষান্তরে সেন্ট্রালাইজড ক্ষতিপূরণ মূলধনী ব্যয় কমায়।'
    ]
  },
  practiceQuestions: [
    {
      id: 'pq-ch13-l02-01',
      question: {
        en: 'Explain the physical phenomenon of induction motor self-excitation when a shunt capacitor bank connected at its terminals is oversized beyond the motor no-load magnetizing kVAR.',
        hi: 'जब किसी इंडक्शन मोटर के टर्मिनलों पर जुड़ा शंट कैपेसिटर बैंक उसके नो-लोड मैग्नेटाइजिंग kVAR से बड़ा होता है, तो मोटर के सेल्फ-एक्साइटेशन (स्व-उत्तेजन) की भौतिक घटना की व्याख्या करें।',
        bn: 'ইন্ডাকশন মোটরের টার্মিনালে সংযুক্ত শান্ট ক্যাপাসিটর ব্যাংক মোটরের নো-লোড kVAR এর চেয়ে বড় হলে স্ব-উত্তেজনা (Self-excitation) প্রক্রিয়ার পদার্থবিজ্ঞান ব্যাখ্যা করুন।'
      },
      hint: {
        en: 'Consider the trapped residual magnetic flux in the rotor core and how the coasting rotor acts as an induction generator connected to a leading capacitive load.',
        hi: 'रोटर कोर में बचे अवशिष्ट चुंबकत्व और मोटर बंद होने के बाद घूमने वाले रोटर द्वारा जनरेटर की भांति व्यवहार करने पर विचार करें।',
        bn: 'রোটরে অবশিষ্ট চৌম্বক ফ্লাক্স এবং মোটর বন্ধ করার পর ক্যাপাসিটরের সাথে সংযুক্ত হয়ে ইন্ডাকশন জেনারেটর হিসেবে কাজ করার বিষয়টি ভাবুন।'
      }
    },
    {
      id: 'pq-ch13-l02-02',
      question: {
        en: 'Why are modern power utilities increasingly installing synchronous condensers instead of static capacitor banks in power grids with high penetrations of solar photovoltaic and wind generation?',
        hi: 'उच्च सौर और पवन ऊर्जा वाले आधुनिक पावर ग्रिड में बिजली कंपनियाँ स्टैटिक कैपेसिटर बैंकों के स्थान पर सिंक्रोनस कंडेनसर क्यों स्थापित कर रही हैं?',
        bn: 'সৌর ও বায়ুবিদ্যুতের আধিক্যযুক্ত আধুনিক পাওয়ার গ্রিডে বিদ্যুৎ পরিচালনাকারী সংস্থাগুলি স্ট্যাটিক ক্যাপাসিটরের পরিবর্তে কেন সিনক্রোনাস কন্ডেনসার স্থাপন করছে?'
      },
      hint: {
        en: 'Analyze system inertia (frequency rate of change df/dt), short-circuit ratio (SCR), and reactive power output behavior during deep grid voltage dips.',
        hi: 'सिस्टम इनर्शिया (जड़ता), शॉर्ट-सर्किट अनुपात (SCR) और ग्रिड वोल्टेज में भारी गिरावट के दौरान प्रतिक्रिया पर विचार करें।',
        bn: 'সিস্টেমের ঘূর্ণন জড়তা (ইনর্শিয়া), শর্ট-সার্কিট রেশিও এবং ফল্টের সময় ভোল্টেজ সাপোর্টের ভূমিকা বিশ্লেষণ করুন।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch13-l02-01',
      question: {
        en: 'What fundamental physical property allows a shunt capacitor bank to correct lagging power factor?',
        hi: 'शंट कैपेसिटर बैंक किस मौलिक भौतिक गुण के कारण लैगिंग पावर फैक्टर को सुधारने में सक्षम होता है?',
        bn: 'কোন মৌলিক বৈশিষ্ট্যের কারণে একটি শান্ট ক্যাপাসিটর ব্যাংক ল্যাগিং পাওয়ার ফ্যাক্টর সংশোধন করতে পারে?'
      },
      options: [
        { en: 'It draws leading current that is 180° out-of-phase with the inductive lagging current, cancelling it', hi: 'यह लीडिंग धारा खींचता है जो प्रेरकीय लैगिंग धारा से 180° विपरीत कला में होती है, जिससे वह निरस्त हो जाती है', bn: 'এটি লিডিং কারেন্ট গ্রহণ করে যা ইন্ডাক্টিভ ল্যাগিং কারেন্টের সাথে ১৮০° বিপরীত দশায় থাকে এবং একে প্রশমিত করে' },
        { en: 'It converts excess reactive power directly into real mechanical torque', hi: 'यह अतिरिक्त प्रतिघाती शक्ति को सीधे वास्तविक यांत्रिक टॉर्क में बदल देता है', bn: 'এটি অতিরিক্ত প্রতিক্রিয়াশীল ক্ষমতাকে সরাসরি যান্ত্রিক শক্তিতে রূপান্তরিত করে' },
        { en: 'It steps down the line frequency to reduce motor inductive reactance', hi: 'यह मोटर के प्रेरकीय प्रतिघात को कम करने के लिए लाइन आवृत्ति को घटा देता है', bn: 'এটি ইন্ডাক্টিভ রিঅ্যাক্ট্যান্স কমাতে লাইন ফ্রিকোয়েন্সি কমিয়ে দেয়' },
        { en: 'It absorbs active harmonic kilowatts from the supply transformer', hi: 'यह आपूर्ति ट्रांसफार्मर से सक्रिय हार्मोनिक किलोवाट को अवशोषित करता है', bn: 'এটি ট্রান্সফরমার থেকে সক্রিয় হারমোনিক কিলোওয়াট শোষণ করে' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'In pure inductors, current lags voltage by 90°. In pure capacitors, current leads voltage by 90°. These two currents are 180° apart (opposite directions). The capacitor supplies the reactive current locally, neutralizing the motor inductive demand.',
        hi: 'प्रेरक में धारा 90° पीछे और संधारित्र में 90° आगे होती है। ये दोनों धाराएं 180° विपरीत होती हैं और परस्पर निरस्त हो जाती हैं।',
        bn: 'ইন্ডাক্টরে কারেন্ট ৯০° পিছিয়ে এবং ক্যাপাসিটরে ৯০° এগিয়ে থাকে। এদের মধ্যবর্তী কোণ ১৮০° হওয়ায় ক্যাপাসিটর স্থানীয়ভাবে রিঅ্যাক্টিভ কারেন্ট সরবরাহ করে ইন্ডাক্টরের চাহিদা পূরণ করে।'
      }
    },
    {
      id: 'mcq-ch13-l02-02',
      question: {
        en: 'What is a synchronous condenser?',
        hi: 'सिंक्रोनस कंडेनसर क्या है?',
        bn: 'সিনক্রোনাস কন্ডেনসার কী?'
      },
      options: [
        { en: 'A high-voltage electrolyte chemical capacitor with synchronous timing clock', hi: 'सिंक्रोनस टाइमिंग घड़ी वाला एक उच्च-वोल्टेज इलेक्ट्रोलाइटिक रासायनिक कैपेसिटर', bn: 'সিনক্রোনাস টাইমিং ঘড়ি যুক্ত একটি হাই-ভোল্টেজ রাসায়নিক ক্যাপাসিটর' },
        { en: 'An over-excited synchronous motor running without mechanical load on its shaft', hi: 'शाफ्ट पर बिना किसी यांत्रिक भार के चलने वाली एक अति-उत्तेजित (Over-excited) सिंक्रोनस मोटर', bn: 'শ্যাফটে কোনো যান্ত্রিক লোড ছাড়া চালিত একটি ওভার-এক্সাইটেড সিনক্রোনাস মোটর' },
        { en: 'A step-up autotransformer equipped with mechanical tap-changers', hi: 'यांत्रिक टैप-चेंजर से सुसज्जित एक स्टेप-अप ऑटो-ट्रांसफार्मर', bn: 'মেকানিক্যাল ট্যাপ-চেঞ্জার যুক্ত একটি স্টেপ-আপ অটো-ট্রান্সফরমার' },
        { en: 'A static thyristor-switched resistor bank used to stabilize wind turbines', hi: 'पवन टर्बाइनों को स्थिर करने के लिए उपयोग किया जाने वाला थाइरिस्टर-नियंत्रित अवरोधक बैंक', bn: 'উইন্ড টারবাইন নিয়ন্ত্রণে ব্যবহৃত থাইরিস্টর নিয়ন্ত্রিত রেজিস্টর ব্যাংক' }
      ],
      correctAnswer: 1,
      explanation: {
        en: 'A synchronous condenser is an unloaded synchronous motor whose DC rotor excitation is over-excited to operate at a leading power factor, generating controllable leading reactive power for the grid.',
        hi: 'सिंक्रोनस कंडेनसर बिना यांत्रिक भार वाली एक सिंक्रोनस मोटर है जिसे अति-उत्तेजित करके लीडिंग पावर फैक्टर पर चलाया जाता है ताकि ग्रिड को प्रतिघाती शक्ति मिल सके।',
        bn: 'সিনক্রোনাস কন্ডেনসার হলো কোনো যান্ত্রিক লোড ছাড়া চালিত একটি ওভার-এক্সাইটেড সিনক্রোনাস মোটর যা গ্রিডে লিডিং রিঅ্যাক্টিভ পাওয়ার সরবরাহ করে।'
      }
    },
    {
      id: 'mcq-ch13-l02-03',
      question: {
        en: 'Which power factor correction location achieves the greatest reduction in factory internal cable heating and I²R losses?',
        hi: 'फैक्ट्री के आंतरिक केबलों में ऊष्मा और I²R हानियों को सबसे अधिक कम करने के लिए कैपेसिटर कहाँ लगाना चाहिए?',
        bn: 'কারখানার অভ্যন্তরীণ তারের উত্তাপ এবং I²R অপচয় সবচেয়ে বেশি কমাতে ক্যাপাসিটর কোথায় স্থাপন করা উচিত?'
      },
      options: [
        { en: 'Centralized compensation at the 33 kV incoming grid substation', hi: '33 kV इनकमिंग ग्रिड सबस्टेशन पर केंद्रीकृत क्षतिपूर्ति', bn: '৩৩ kV ইনকামিং গ্রিড সাবস্টেশনে সেন্ট্রালাইজড ক্ষতিপূরণ' },
        { en: 'Individual point-of-load compensation directly across the terminals of each motor', hi: 'प्रत्येक मोटर के टर्मिनलों पर सीधे व्यक्तिगत (पॉइंट-ऑफ-लोड) क्षतिपूर्ति', bn: 'প্রতিটি মোটরের টার্মিনালে সরাসরি পয়েন্ট-অফ-লোড ক্ষতিপূরণ' },
        { en: 'Centralized compensation at the secondary busbar of the main transformer', hi: 'मुख्य ट्रांसफार्मर के सेकेंडरी बसबार पर केंद्रीकृत क्षतिपूर्ति', bn: 'মূল ট্রান্সফরমারের সেকেন্ডারি বাসবারে সেন্ট্রালাইজড ক্ষতিপূরণ' },
        { en: 'Series capacitor compensation at the generator neutral point', hi: 'जनरेटर न्यूट्रल बिंदु पर श्रेणी कैपेसिटर क्षतिपूर्ति', bn: 'জেনারেটরের নিউট্রাল প্রান্তে সিরিজ ক্যাপাসিটর সংযোগ' }
      ],
      correctAnswer: 1,
      explanation: {
        en: 'Individual compensation supplies reactive current right at the motor terminals. The reactive current never traverses the motor branch cables, MCCs, feeder busways, or substation transformers, minimizing plant-wide I²R losses.',
        hi: 'व्यक्तिगत क्षतिपूर्ति मोटर टर्मिनलों पर ही रिएक्टिव करंट दे देती है, जिससे आंतरिक केबलों, पैनलों और ट्रांसफार्मर में करंट नहीं बहता और हीटिंग न्यूनतम हो जाती है।',
        bn: 'পয়েন্ট-অফ-লোড ক্ষতিপূরণে মোটরের প্রান্তে কারেন্ট পরিশোধিত হয়, ফলে কারখানার ভেতরের শাখা তার বা প্যানেল দিয়ে অতিরিক্ত কারেন্ট প্রবাহিত হয় না এবং তারের অপচয় সবচেয়ে বেশি কমে।'
      }
    },
    {
      id: 'mcq-ch13-l02-04',
      question: {
        en: 'Why must individual motor terminal capacitors be limited to roughly 90% of the motor no-load magnetizing kVAR?',
        hi: 'व्यक्तिगत मोटर टर्मिनल कैपेसिटर को मोटर के नो-लोड मैग्नेटाइजिंग kVAR के लगभग 90% तक सीमित क्यों रखना चाहिए?',
        bn: 'ব্যক্তিগত মোটর টার্মিনাল ক্যাপাসিটরকে মোটরের নো-লোড kVAR এর প্রায় ৯০% এর মধ্যে সীমাবদ্ধ রাখা উচিত কেন?'
      },
      options: [
        { en: 'To avoid motor reversing its rotational direction during sudden starting', hi: 'स्टार्टिंग के दौरान मोटर की घूर्णन दिशा उल्टी होने से रोकने के लिए', bn: 'মোটর চালুর সময় উল্টো দিকে ঘোরা প্রতিরোধ করতে' },
        { en: 'To prevent dangerous self-excitation overvoltages when the motor is switched off', hi: 'मोटर को बंद करने पर खतरनाक सेल्फ-एक्साइटेशन ओवरवोल्टेज से बचाव के लिए', bn: 'মোটর বন্ধ করার সময় বিপজ্জনক স্ব-উত্তেজনা ওভারভোল্টেজ প্রতিরোধ করতে' },
        { en: 'To prevent mechanical shaft resonance with the supply line frequency', hi: 'आपूर्ति आवृत्ति के साथ शाफ्ट के यांत्रिक अनुनाद को रोकने के लिए', bn: 'সাপ্লাই ফ্রিকোয়েন্সির সাথে যান্ত্রিক শ্যাফটের রেজোন্যান্স রোধ করতে' },
        { en: 'To ensure the motor runs at exact synchronous speed without slip', hi: 'यह सुनिश्चित करने के लिए कि मोटर बिना स्लिप के ठीक सिंक्रोनस गति पर चले', bn: 'মোটর যাতে স্লিপ ছাড়া সম্পূর্ণ সিনক্রোনাস গতিতে চলে তা নিশ্চিত করতে' }
      ],
      correctAnswer: 1,
      explanation: {
        en: 'When disconnected from the supply, a spinning motor with excess terminal capacitance acts as a self-excited induction generator driven by its own mechanical inertia, producing hazardous overvoltages up to 150–200% of nominal voltage.',
        hi: 'सप्लाई कटने के बाद घूमती हुई मोटर अतिरिक्त कैपेसिटर से एक सेल्फ-एक्साइटेड जनरेटर बन सकती है, जो 200% तक वोल्टेज पैदा करके इंसुलेशन को नष्ट कर सकती है।',
        bn: 'সাপ্লাই বন্ধ করার পর মোটরের রোটর ঘোরার সময় অতিরিক্ত ক্যাপাসিট্যান্স থাকলে এটি সেলফ-এক্সাইটেড জেনারেটরে পরিণত হয়ে রেটেড মানের ১৫০-২০০% পর্যন্ত বিপজ্জনক ভোল্টেজ তৈরি করতে পারে।'
      }
    },
    {
      id: 'mcq-ch13-l02-05',
      question: {
        en: 'What is the primary advantage of centralized power factor correction using an APFC panel over individual compensation?',
        hi: 'व्यक्तिगत क्षतिपूर्ति की तुलना में APFC पैनल द्वारा केंद्रीकृत पावर फैक्टर सुधार का मुख्य लाभ क्या है?',
        bn: 'ব্যক্তিগত ক্ষতিপূরণের তুলনায় স্বয়ংক্রিয় APFC প্যানেল ব্যবহারের মাধ্যমে সেন্ট্রালাইজড ক্ষতিপূরণের প্রধান সুবিধা কী?'
      },
      options: [
        { en: 'It eliminates internal branch cable losses between sub-panels and motors', hi: 'यह सब-पैनलों और मोटरों के बीच आंतरिक शाखा केबल हानियों को समाप्त करता है', bn: 'এটি সাব-প্যানেল এবং মোটরের মধ্যবর্তী অভ্যন্তরীণ তারের ক্ষয় দূর করে' },
        { en: 'Lowest initial capital cost per kVAR and optimal utilization across diverse intermittent loads', hi: 'प्रति kVAR सबसे कम प्रारंभिक लागत और परिवर्तनशील भारों पर उच्चतम उपयोगिता', bn: 'প্রতি kVAR এ সর্বনিম্ন মূলধনী খরচ এবং পরিবর্তনশীল লোডে সর্বোচ্চ উপযোগিতা' },
        { en: 'It prevents all forms of harmonic resonance without using detuning reactors', hi: 'यह बिना डिट्यूनिंग रिएक्टर के सभी प्रकार के हार्मोनिक अनुनाद को रोकता है', bn: 'এটি কোনো অতিরিক্ত রিঅ্যাক্টর ছাড়াই সব ধরনের রেজোন্যান্স প্রতিরোধ করে' },
        { en: 'It doubles the motor starting torque during direct-on-line starts', hi: 'यह डीओएल स्टार्टिंग के दौरान मोटर स्टार्टिंग टॉर्क को दोगुना कर देता है', bn: 'এটি ডাইরেক্ট-অন-লাইন স্টার্টিংয়ের সময় মোটরের স্টার্টিং টর্ক দ্বিগুণ করে' }
      ],
      correctAnswer: 1,
      explanation: {
        en: 'Centralized compensation takes advantage of the plant diversity factor (not all machines run simultaneously). A single intelligent APFC panel at the main bus requires far fewer total kVAR than installing separate capacitors on every individual machine.',
        hi: 'केंद्रीकृत प्रणाली विविधता गुणांक (Diversity factor) का लाभ उठाती है। मुख्य बसबार पर लगा एक APFC पैनल सभी अलग-अलग मशीनों पर कैपेसिटर लगाने की तुलना में बहुत कम लागत में पूरे प्लांट का पावर फैक्टर सुधार देता है।',
        bn: 'সেন্ট্রালাইজড সিস্টেমে ডাইভারসিটি ফ্যাক্টরের সুবিধা পাওয়া যায়। প্রতিটি মোটরে আলাদা ক্যাপাসিটর না লাগিয়ে মূল প্যানেলে একটি নিয়ন্ত্রক বসালে অনেক কম খরচে কারখানার সার্বিক PF নিয়ন্ত্রণ করা যায়।'
      }
    },
    {
      id: 'mcq-ch13-l02-06',
      question: {
        en: 'How does an Active Power Factor Corrector (STATCOM) differ from a traditional static capacitor bank?',
        hi: 'एक एक्टिव पावर फैक्टर करेक्टर (STATCOM) पारंपरिक स्टैटिक कैपेसिटर बैंक से किस प्रकार भिन्न है?',
        bn: 'একটি অ্যাক্টিভ পাওয়ার ফ্যাক্টর কারেক্টর (STATCOM) গতানুগতিক স্ট্যাটিক ক্যাপাসিটর ব্যাংক থেকে কীভাবে পৃথক?'
      },
      options: [
        { en: 'It utilizes fast solid-state IGBT converters to synthesize continuously variable compensation currents within milliseconds', hi: 'यह मिलीसेकंड में लगातार परिवर्तनीय क्षतिपूर्ति धाराएं उत्पन्न करने के लिए तेज आईजीबीटी कनवर्टर का उपयोग करता है', bn: 'এটি মিলিসেকেন্ডের মধ্যে নিরবচ্ছিন্ন পরিবর্তনশীল কারেন্ট তৈরি করতে দ্রুতগতির আইজিবিটি ইনভার্টার ব্যবহার করে' },
        { en: 'It uses oil-immersed rotary contactors operating at 50 Hz', hi: 'यह 50 Hz पर चलने वाले तेल में डूबे रोटरी संपर्ककर्ताओं का उपयोग करता है', bn: 'এটি ৫০ Hz এ চালিত তেল-নিমজ্জিত ঘূর্ণনশীল কন্টাক্টর ব্যবহার করে' },
        { en: 'It requires a permanent DC generator connected to the plant motor shaft', hi: 'इसके लिए प्लांट मोटर शाफ्ट से जुड़े एक स्थायी डीसी जनरेटर की आवश्यकता होती है', bn: 'এর জন্য কারখানার মোটর শ্যাফটে একটি স্থায়ী ডিসি জেনারেটর যুক্ত করা প্রয়োজন' },
        { en: 'It can only operate on single-phase circuits below 230 V', hi: 'यह केवल 230 V से नीचे के सिंगल-फेज परिपथों पर ही काम कर सकता है', bn: 'এটি কেবল ২৩০ V এর নিচের সিঙ্গেল-ফেজ লাইনে কাজ করতে পারে' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'STATCOMs employ high-frequency IGBT voltage-source converters that inject dynamic leading or lagging reactive currents within 5–10 milliseconds, while also filtering out harmonic currents without any resonance risk.',
        hi: 'STATCOM उच्च गति वाले आईजीबीटी कनवर्टर का उपयोग करते हैं जो 5-10 मिलीसेकंड में गतिशील प्रतिघाती धारा इंजेक्ट करते हैं तथा बिना किसी अनुनाद जोखिम के हार्मोनिक्स को भी छानते हैं।',
        bn: 'STATCOM দ্রুতগতির আইজিবিটি কনভার্টার ব্যবহার করে ৫-১০ মিলিসেকেন্ডের মধ্যে লিডিং বা ল্যাগিং কারেন্ট ইনজেক্ট করতে পারে এবং কোনো রেজোন্যান্স ছাড়াই হারমোনিকস ফিল্টার করে।'
      }
    },
    {
      id: 'mcq-ch13-l02-07',
      question: {
        en: 'If a transmission grid line voltage drops by 20%, what happens to the reactive power delivered by a fixed shunt capacitor bank?',
        hi: 'यदि ट्रांसमिशन ग्रिड लाइन वोल्टेज 20% गिर जाता है, तो स्थिर शंट कैपेसिटर बैंक द्वारा दी जाने वाली प्रतिघाती शक्ति में क्या परिवर्तन होगा?',
        bn: 'যদি সঞ্চালন লাইনের ভোল্টেজ ২০% হ্রাস পায়, তবে একটি ফিক্সড শান্ট ক্যাপাসিটর ব্যাংকের রিঅ্যাক্টিভ পাওয়ারের কী পরিবর্তন ঘটবে?'
      },
      options: [
        { en: 'It drops by exactly 20%', hi: 'यह ठीक 20% घट जाएगी', bn: 'এটি ঠিক ২০% হ্রাস পাবে' },
        { en: 'It drops by 36% because Q ∝ V²', hi: 'यह 36% घट जाएगी क्योंकि Q ∝ V² होता है', bn: 'এটি ৩৬% হ্রাস পাবে কারণ Q ∝ V²' },
        { en: 'It increases by 20% to stabilize the voltage', hi: 'वोल्टेज स्थिर करने के लिए यह 20% बढ़ जाएगी', bn: 'ভোল্টেজ স্থির রাখতে এটি ২০% বৃদ্ধি পাবে' },
        { en: 'It remains completely constant', hi: 'यह पूरी तरह स्थिर रहेगी', bn: 'এটি সম্পূর্ণ অপরিবর্তিত থাকবে' }
      ],
      correctAnswer: 1,
      explanation: {
        en: 'Reactive power generated by a capacitor is proportional to the square of the voltage: Q_C = V² / X_C. If V drops to 0.80 V_nom, Q_C drops to (0.80)² = 0.64 (a 36% reduction), which destabilizes the grid further.',
        hi: 'कैपेसिटर की प्रतिघाती शक्ति वोल्टेज के वर्ग के समानुपाती होती है: Q_C ∝ V²। 20% वोल्टेज गिरने पर (0.80)² = 0.64 यानी आउटपुट में 36% की कमी आ जाती है।',
        bn: 'ক্যাপাসিটরের রিঅ্যাক্টিভ পাওয়ার ভোল্টেজের বর্গের সমানুপাতিক: Q_C ∝ V²। ভোল্টেজ ২০% কমলে আউটপুট (০.৮০)² = ০.৬৪ এ নেমে আসে, অর্থাৎ ৩৬% হ্রাস পায়।'
      }
    },
    {
      id: 'mcq-ch13-l02-08',
      question: {
        en: 'Under which operational condition does a synchronous condenser supply rotational inertia (H constant) to an electrical grid?',
        hi: 'सिंक्रोनस कंडेनसर किस परिचालन स्थिति में विद्युत ग्रिड को घूर्णन जड़ता (इनर्शिया) प्रदान करता है?',
        bn: 'কোন পরিচালন অবস্থায় একটি সিনক্রোনাস কন্ডেনসার বৈদ্যুতিক গ্রিডে ঘূর্ণন জড়তা (ইনর্শিয়া) সরবরাহ করে?'
      },
      options: [
        { en: 'Continuously at all times due to the physical kinetic energy stored in its spinning rotor', hi: 'अपने घूमते हुए रोटर में संचित भौतिक गतिज ऊर्जा के कारण हर समय निरंतर', bn: 'এর ঘূর্ণায়মান রোটরে সঞ্চিত গতিশক্তির কারণে সার্বক্ষণিক নিরবচ্ছিন্নভাবে' },
        { en: 'Only when the supply voltage drops to zero during a 3-phase dead short circuit', hi: 'केवल तभी जब 3-फेज शॉर्ट सर्किट के दौरान वोल्टेज शून्य हो जाए', bn: 'কেবলমাত্র ৩-ফেজ শর্ট-সার্কিটের সময় যখন সাপ্লাই ভোল্টেজ শূন্যে নেমে যায়' },
        { en: 'Only when operating at exactly 1.00 unity power factor', hi: 'केवल तभी जब यह ठीक 1.00 यूनिटी पावर फैक्टर पर चल रहा हो', bn: 'কেবলমাত্র যখন এটি ঠিক ১.০০ ইউনিটি পাওয়ার ফ্যাক্টরে চলে' },
        { en: 'Only during reverse-power regenerative braking mode', hi: 'केवल रिवर्स-पावर रीजेनेरेटिव ब्रेकिंग मोड के दौरान', bn: 'কেবলমাত্র রিজেনারেটিভ ব্রেকিং মোডের সময়' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Because a synchronous condenser is a massive physical spinning rotor synchronized to the AC frequency, its kinetic energy inherently resists abrupt frequency fluctuations (df/dt), providing essential physical inertia to the power grid.',
        hi: 'चूंकि सिंक्रोनस कंडेनसर एक विशाल घूमने वाला रोटर होता है, इसकी गतिज ऊर्जा ग्रिड आवृत्ति में अचानक होने वाले बदलावों का विरोध करती है और ग्रिड को वास्तविक इनर्शिया देती है।',
        bn: 'যেহেতু সিনক্রোনাস কন্ডেনসার একটি বিশাল ঘূর্ণায়মান রোটর নিয়ে গঠিত, এর গতিশক্তি গ্রিডের ফ্রিকোয়েন্সি হঠাৎ ওঠানামা প্রতিরোধ করে সিস্টেমে নিরবচ্ছিন্ন ফিজিক্যাল ইনর্শিয়া সরবরাহ করে।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ch13-pf-correction-methods',
      title: {
        en: 'Practical Power Factor Correction Topologies',
        hi: 'व्यावहारिक पावर फैक्टर सुधार टोपोलॉजी',
        bn: 'ব্যবহারিক পাওয়ার ফ্যাক্টর সংশোধন টপোলজি'
      },
      caption: {
        en: 'Comparison of Individual (point-of-load), Group, and Centralized shunt capacitor compensation architectures.',
        hi: 'व्यक्तिगत (पॉइंट-ऑफ-लोड), समूह, एवं केंद्रीकृत शंट कैपेसिटर कंपेंसेशन आर्किटेक्चर की तुलना।',
        bn: 'ব্যক্তিগত (পয়েন্ট-অব-লোড), গ্রুপ এবং কেন্দ্রীভূত শান্ট ক্যাপাসিটর ক্ষতিপূরণ কাঠামোর তুলনা।'
      },
      svgType: 'circuit-ch13-pf-correction-methods'
    }
  ]
};
