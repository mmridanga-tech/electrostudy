import { Lesson } from '../types';

export const LESSON_DISTANCE_PROTECTION: Lesson = {
  id: 'lsn-ch17-distance-protection-lines',
  topicId: 'tp-ch17-distance-protection-lines',
  chapterId: 'ch-advanced-power-system-protection',
  order: 6,
  title: {
    en: 'Distance Protection of Transmission Lines',
    hi: 'पारेषण लाइनों की दूरी (डिस्टेंस) सुरक्षा',
    bn: 'সঞ্চালন লাইনের ডিসট্যান্স সুরক্ষা'
  },
  description: {
    en: 'Comprehensive principles of transmission line distance protection (ANSI 21): apparent impedance measurement on the R-X complex plane, Mho and modern Quadrilateral characteristics, three-zone reach coordination (Zone 1, Zone 2, Zone 3), System Impedance Ratio (SIR) effects, arc resistance fault coverage, and Power Swing Blocking (PSB) vs. Out-of-Step Tripping (OST).',
    hi: 'पारेषण लाइन डिस्टेंस सुरक्षा (ANSI 21) के सिद्धांत: R-X विमान पर स्पष्ट प्रतिबाधा मापन, म्हो (Mho) और क्वाड्रिलेटरल विशेषताएँ, तीन-ज़ोन समन्वय (ज़ोन 1, ज़ोन 2, ज़ोन 3), सिस्टम प्रतिबाधा अनुपात (SIR), आर्क प्रतिरोध, और पावर स्विंग ब्लॉकिंग (PSB) बनाम आउट-ऑफ-स्टेप ट्रिपिंग (OST)।',
    bn: 'ট্রান্সমিশন লাইনের ডিসট্যান্স সুরক্ষার (ANSI 21) বিশদ মূলনীতি: R-X তলে আপাত ইম্পিডেন্স পরিমাপ, মো (Mho) ও কোয়াড্রিলেটারাল বৈশিষ্ট্য, তিন-জোন সমন্বয় (জোন ১, জোন ২, জোন ৩), সিস্টেম ইম্পিডেন্স রেশিও (SIR), আর্ক রেজিস্ট্যান্স সহনশীলতা এবং পাওয়ার সুইং ব্লকিং (PSB) বনাম আউট-অব-স্টেপ ট্রিপিং (OST)।'
  },
  estimatedMinutes: 55,
  easyExplanation: {
    en: 'High-voltage transmission lines stretch for tens or hundreds of kilometers across rugged mountains, forests, and deserts. How can a relay located inside a substation know whether a lightning strike hit the line 5 kilometers away or 85 kilometers away? It measures both the voltage and current at its terminal and applies Ohm’s Law: Z = V / I. Because overhead transmission conductors have a uniform impedance per kilometer (e.g., 0.35 Ω/km), the calculated apparent impedance is directly proportional to the physical distance to the fault! If a fault occurs close to the substation, the voltage collapses and current surges, yielding a tiny impedance. If the fault is far away, the impedance is large. By drawing boundaries on a resistance-reactance (R-X) graph, the distance relay knows instantly whether the fault is inside its line and trips without needing communication lines!',
    hi: 'उच्च-वोल्टेज पारेषण लाइनें सैकड़ों किलोमीटर लंबी होती हैं। सबस्टेशन में लगा रिले कैसे जान सकता है कि बिजली 5 किमी दूर गिरी है या 85 किमी दूर? यह सबस्टेशन पर वोल्टेज और करंट को मापता है और ओम का नियम लागू करता है: Z = V / I। चूंकि लाइन की प्रतिबाधा प्रति किलोमीटर एक समान होती है (उदा. 0.35 Ω/km), मापा गया प्रतिबाधा सीधे फॉल्ट की भौतिक दूरी के समानुपाती होता है! यदि फॉल्ट पास है, तो वोल्टेज गिरता है और करंट बढ़ता है, जिससे बहुत कम प्रतिबाधा मिलती है। R-X ग्राफ पर सीमाएं निर्धारित करके, रिले तुरंत पहचान लेता है कि फॉल्ट उसकी लाइन में है और तुरंत ट्रिप कर देता है!',
    bn: 'উচ্চ ভোল্টেজের সঞ্চালন লাইনগুলো শত শত কিলোমিটার দীর্ঘ হয়। সাবস্টেশনের রিলে কীভাবে বোঝে যে ফল্টটি ৫ কিমি দূরে নাকি ৮৫ কিমি দূরে ঘটেছে? এটি লাইনের ভোল্টেজ ও কারেন্ট মেপে ওহমের সূত্র প্রয়োগ করে: Z = V / I। যেহেতু ওভারহেড তারের প্রতি কিলোমিটারের ইম্পিডেন্স নির্দিষ্ট (যেমন ০.৩৫ Ω/কিমি), তাই পরিমাপকৃত ইম্পিডেন্স সরাসরি ফল্টের দূরত্বের সমানুপাতিক! সাবস্টেশনের কাছে ফল্ট হলে ভোল্টেজ কমে ও কারেন্ট বাড়ে, ফলে ইম্পিডেন্স অনেক কম আসে। R-X গ্রাফে নির্দিষ্ট বাউন্ডারি বা জোন তৈরি করে রিলে কোনো দূরবর্তী তারের সাহায্য ছাড়াই তাৎক্ষণিক ফল্ট শনাক্ত করে ব্রেকার ট্রिप করায়!'
  },
  detailedExplanation: {
    en: 'Distance protection (ANSI 21) is the standard non-unit primary and backup protection for medium and high-voltage transmission grids:\n\n1. Apparent Impedance Principle:\nThe relay computes the loop impedance:\nZ_loop = V_relay / (I_phase + k0 * I_residual)\nwhere k0 = (Z0 - Z1) / (3 * Z1) is the zero-sequence compensation factor required for single-line-to-ground (SLG) faults.\n\n2. Relay Characteristics on the R-X Plane:\n• Mho (Admittance) Characteristic: A circular boundary passing through the origin. Inherently directional; compact and resistant to power swings, but has limited reach along the R-axis to detect high-resistance arc faults.\n• Quadrilateral Characteristic: Polygon bounded by four independent settings: forward reach (X1), resistive reach for phase faults (Rph), resistive reach for ground faults (R_gnd), and directional line angle. Provides vastly superior coverage for high-resistance tower-footing and arc faults on short lines.\n\n3. Standard Three-Zone Stepped Time Reach Settings:\n• Zone 1 (Primary instantaneous): Set to 80% to 85% of the protected line impedance (Z_L). It NEVER covers 100% of the line to prevent "over-reaching" into adjacent substations due to CT/CVT transient errors and line parameter variations. Tripping time: Instantaneous (typically 15 to 25 ms, zero intentional delay).\n• Zone 2 (Primary end-zone & adjacent backup): Set to 100% of protected line + 40% to 50% of the shortest adjacent line (or 120% of Z_L). Clears faults in the remaining 15–20% of the line and provides backup for the remote substation busbar. Tripping time: Delayed by Coordination Time Interval (typically 0.30 to 0.40 s).\n• Zone 3 (Remote line backup): Set to 100% of protected line + 120% of longest adjacent line (or reverse Zone 3 for busbar backup). Tripping time: Long time delay (0.8 to 1.2 s).\n\n4. System Impedance Ratio (SIR):\nSIR = Z_source / Z_line. High SIR (>4, "weak source / short line") means terminal voltage drops to near-zero even for end-of-line faults, posing severe challenges for CVT transient response and directional determination. Low SIR (<0.5, "strong source / long line") provides clean, decisive voltage signals.\n\n5. Power Swing Blocking (PSB) vs. Out-of-Step Tripping (OST):\nDuring electromechanical power swings (generator rotor oscillations following major load rejection or remote fault clearance), the operating point on the R-X diagram slowly enters the distance trip zones. Because the impedance locus moves slowly (taking 50 to 200 ms to cross between concentric inner and outer blinders), the PSB blinder element detects the slow rate of change (dZ/dt) and blocks Zone 1/Zone 2 tripping. If the swing is unstable (loss of synchronism), Out-of-Step Tripping (OST) splits the grid at a pre-selected optimal islanding boundary.',
    hi: 'डिस्टेंस रिले के मुख्य तकनीकी सिद्धांत:\n1. स्पष्ट प्रतिबाधा मापन: Z = V / I। ग्राउंड फॉल्ट के लिए जीरो-सीक्वेंस फैक्टर k0 = (Z0 - Z1) / (3*Z1) लगाया जाता है।\n2. रिले विशेषताएँ: म्हो (Mho) वृत्त दिशात्मक होता है लेकिन आर्क प्रतिरोध के लिए सीमित है। क्वाड्रिलेटरल (Quadrilateral) उच्च प्रतिरोध वाले फॉल्ट को पकड़ने के लिए सबसे अच्छा है।\n3. तीन-ज़ोन समन्वय:\n• ज़ोन 1: लाइन का 80-85%, तात्कालिक (20 ms), ओवर-रीचिंग से बचने के लिए कभी 100% नहीं होता।\n• ज़ोन 2: 100% लाइन + 40-50% अगली लाइन (120% Z_L), समय 0.3 से 0.4 सेकंड।\n• ज़ोन 3: 100% लाइन + 120% सबसे लंबी अगली लाइन, बैकअप समय 0.8 से 1.2 सेकंड।\n4. पावर स्विंग ब्लॉकिंग (PSB): रोटर दोलनों के दौरान प्रतिबाधा धीरे-धीरे (कम dZ/dt) ज़ोन में प्रवेश करती है; रिले इसे फॉल्ट से अलग पहचानकर ट्रिपिंग ब्लॉक करता है।',
    bn: 'ডিসট্যান্স রিলে সুরক্ষার মূল দিকসমূহ:\n১. আপাত ইম্পিডেন্স পরিমাপ: Z = V / I। গ্রাউন্ড ফল্টের জন্য জিরো সিকোয়েন্স ফ্যাক্টর k0 ব্যবহৃত হয়।\n২. মো (Mho) বনাম কোয়াড্রিলেটারাল: মো বৃত্তাকার ও দিকনির্দেশক। কোয়াড্রিলেটারাল বৈশিষ্ট্য উচ্চ রেজিস্ট্যান্সযুক্ত আর্ক ও টাওয়ার-ফুটিং ফল্ট শনাক্তকরণে অত্যন্ত কার্যকর।\n৩. তিন-জোন সমন্বয়:\n• জোন ১: লাইনের ৮০-৮৫%, তাৎক্ষণিক (২০ ms), ওভার-রিচ ঠেকাতে কখনোই ১০০% রাখা হয় না।\n• জোন ২: লাইনের ১০০% + সংলগ্ন সংক্ষিপ্ত লাইনের ৪০-৫০% (বা ১২০% Z_L), সময় ০.৩-০.৪ সেকেন্ড।\n• জোন ৩: দূরবর্তী ব্যাকআপের জন্য পুরো লাইন + দীর্ঘতম সংলগ্ন লাইনের ১২০%, সময় ০.৮-১.২ সেকেন্ড।\n৪. পাওয়ার সুইং ব্লকিং (PSB): গ্রিড জেনারেটর দুললে ইম্পিডেন্স ধীরে ধীরে পরিবর্তিত হয় (dZ/dt কম)। রিলে ব্লাইন্ডার দিয়ে এটি শনাক্ত করে ভুল ট্রিপ আটকে রাখে।'
  },
  formulas: [
    {
      id: 'f-ch17-apparent-z',
      symbol: 'Z_{app}',
      expression: 'Z_{app} = \\frac{V_{ph}}{I_{ph} + k_0 \\cdot I_E}, \\quad k_0 = \\frac{Z_0 - Z_1}{3\\cdot Z_1}',
      title: {
        en: 'Ground Fault Apparent Impedance Formula',
        hi: 'ग्राउंड फॉल्ट स्पष्ट प्रतिबाधा सूत्र',
        bn: 'গ্রাউন্ড ফল্ট আপাত ইম্পিডেন্স সূত্র'
      },
      description: {
        en: 'Calculates the positive-sequence reach impedance to a single-line-to-ground fault using zero-sequence compensation.',
        hi: 'जीरो-सीक्वेंस क्षतिपूर्ति का उपयोग करके सिंगल-लाइन-टू-ग्राउंड फॉल्ट के लिए प्रतिबाधा की गणना करता है।',
        bn: 'জিরো-সিকোয়েন্স ক্ষতিপূরণ প্রয়োগ করে সিঙ্গেল-লাইন-টু-গ্রাউন্ড ফল্টের পজিটিভ সিকোয়েন্স ইম্পিডেন্স নির্ণয় করে।'
      },
      variables: [
        { symbol: 'Z_{app}', name: { en: 'Apparent positive-sequence fault impedance (Ω)', hi: 'स्पष्ट प्रतिबाधा (Ω)', bn: 'আপাত ফল্ট ইম্পিডেন্স (Ω)' } },
        { symbol: 'V_{ph}', name: { en: 'Faulted phase line-to-neutral voltage (V)', hi: 'फेज वोल्टेज (V)', bn: 'ফেজ ভোল্টেজ (V)' } },
        { symbol: 'I_{ph}', name: { en: 'Faulted phase line current (A)', hi: 'फेज करंट (A)', bn: 'ফেজ কারেন্ট (A)' } },
        { symbol: 'k_0', name: { en: 'Zero-sequence compensation residual factor', hi: 'जीरो-सीक्वेंस क्षतिपूर्ति कारक', bn: 'জিরো সিকোয়েন্স ক্ষতিপূরণ ফ্যাক্টর' } },
        { symbol: 'I_E', name: { en: 'Residual neutral ground current = Ia + Ib + Ic (A)', hi: 'अवशिष्ट अर्थ धारा (A)', bn: 'রেসিডুয়াল নিউট্রাল গ্রাউন্ড কারেন্ট (A)' } }
      ]
    },
    {
      id: 'f-ch17-sir',
      symbol: 'SIR',
      expression: 'SIR = \\frac{Z_{source}}{Z_{line}}',
      title: {
        en: 'System Impedance Ratio (SIR) Formula',
        hi: 'सिस्टम प्रतिबाधा अनुपात सूत्र',
        bn: 'সিস্টেম ইম্পিডেন্স রেশিও (SIR) সূত্র'
      },
      description: {
        en: 'Ratio of upstream source Thevenin impedance to line positive-sequence impedance; governs fault voltage depression and distance relay measurement precision.',
        hi: 'लाइन प्रतिबाधा के सापेक्ष स्रोत प्रतिबाधा का अनुपात; फॉल्ट वोल्टेज में गिरावट को नियंत्रित करता है।',
        bn: 'লাইনের ইম্পিডেন্সের সাপেক্ষে আপস্ট্রিম সোর্সের ইম্পিডেন্সের অনুপাত; ফল্ট ভোল্টেজ ড্রপ ও রিলের কার্যক্ষমতা নির্ধারণ করে।'
      },
      variables: [
        { symbol: 'SIR', name: { en: 'System Impedance Ratio (dimensionless)', hi: 'सिस्टम प्रतिबाधा अनुपात', bn: 'সিস্টেম ইম্পিডেন্স রেশিও' } },
        { symbol: 'Z_{source}', name: { en: 'Upstream Thevenin source impedance (Ω)', hi: 'अपस्ट्रीम स्रोत प्रतिबाधा (Ω)', bn: 'আপস্ট্রিম সোর্স ইম্পিডেন্স (Ω)' } },
        { symbol: 'Z_{line}', name: { en: 'Protected transmission line positive impedance (Ω)', hi: 'संरक्षित लाइन प्रतिबाधा (Ω)', bn: 'সুরক্ষিত লাইনের পজিটিভ ইম্পিডেন্স (Ω)' } }
      ]
    }
  ],
  keyPoints: [
    {
      en: 'Distance relays measure V/I; the resulting impedance is directly proportional to the physical distance to the short circuit.',
      hi: 'डिस्टेंस रिले V/I मापते हैं; परिणामी प्रतिबाधा शॉर्ट सर्किट की भौतिक दूरी के सीधे आनुपातिक होती है।',
      bn: 'ডিসট্যান্স রিলে V/I পরিমাপ করে; ফলে প্রাপ্ত ইম্পিডেন্স সরাসরি ফল্টের দূরত্বের সমানুপাতিক হয়।'
    },
    {
      en: 'Zone 1 is set to 80%–85% of line impedance and trips instantaneously (~20 ms) to ensure it never over-reaches into the adjacent busbar.',
      hi: 'ज़ोन 1 को लाइन का 80%-85% सेट किया जाता है और यह तुरंत (~20 ms) ट्रिप करता है ताकि अगली बसबार में ओवर-रीच न हो।',
      bn: 'জোন ১ লাইনের ৮০%-৮৫% এ সেট করা হয় এবং পরবর্তী বাসবারে ওভার-রিচ ঠেকাতে তাৎক্ষণিকভাবে (~২০ ms) ট্রিপ করে।'
    },
    {
      en: 'Zone 2 (120% reach, 0.35 s delay) clears faults in the remaining 15% end-zone of the line and provides busbar backup.',
      hi: 'ज़ोन 2 (120% पहुंच, 0.35 s देरी) लाइन के शेष 15% हिस्से के फॉल्ट को साफ करता है और बसबार बैकअप देता है।',
      bn: 'জোন ২ (১২০% রীচ, ০.৩৫ s বিলম্ব) লাইনের শেষ ১৫% অংশের ফল্ট মুক্ত করে এবং বাসবার ব্যাকআপ দেয়।'
    },
    {
      en: 'Power Swing Blocking (PSB) utilizes impedance rate-of-change (dZ/dt) blinders to prevent tripping during stable generator power swings.',
      hi: 'पावर स्विंग ब्लॉकिंग (PSB) स्थिर जनरेटर दोलनों के दौरान ट्रिपिंग को रोकने के लिए dZ/dt का उपयोग करता है।',
      bn: 'পাওয়ার সুইং ব্লকিং (PSB) ইম্পিডেন্স পরিবর্তনের হার (dZ/dt) পর্যবেক্ষণ করে স্বাভাবিক রোটর দোলনে ভুল ট্রিপ রোধ করে।'
    }
  ],
  schematics: [
    {
      id: 'sch-ch17-l06-01',
      title: {
        en: 'Transmission Line Stepped Distance Zones & R-X Plane Characteristics',
        hi: 'पारेषण लाइन स्टेप्ड दूरी ज़ोन एवं R-X प्लेन विशेषताएँ',
        bn: 'ট্রান্সমিশন লাইনের স্টেপড ডিসট্যান্স জোন ও R-X তলের বৈশিষ্ট্য'
      },
      content: {
        en: 'The schematic details: (1) The physical stepped-distance reach profile across two series transmission lines showing instantaneous Zone 1 (80%), time-delayed Zone 2 (120%, 0.35 s), and remote backup Zone 3 (0.8 s), and (2) The R-X complex impedance diagram comparing the circular Mho characteristic with the modern Quadrilateral polygon and Power Swing Blinder boundaries.',
        hi: 'यह आरेख दिखाता है: (1) दो श्रृंखला पारेषण लाइनों में ज़ोन 1 (80%), ज़ोन 2 (120%, 0.35 s) और ज़ोन 3 (0.8 s) का टाइम-डिस्टेंस प्रोफ़ाइल, और (2) R-X तल पर म्हो, क्वाड्रिलेटरल और पावर स्विंग ब्लाईंडर विशेषताओं की तुलना।',
        bn: 'এই স্কিম্যাটিকটি প্রদর্শন করে: (১) দুটি সিরিজের লাইনে তাৎক্ষণিক জোন ১ (৮০%), বিলম্বিত জোন ২ (১২০%, ০.৩৫ s) ও ব্যাকআপ জোন ৩ (০.৮ s) এর প্রোফাইল এবং (২) R-X তলে মো বৃত্ত, আধুনিক কোয়াড্রিলেটারাল বহুভুজ ও পাওয়ার সুইং ব্লাইন্ডার বাউন্ডারি।'
      },
      schematicId: 'sch-ch17-distance-protection-lines'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch17-l06-01',
      problem: {
        en: 'A 220 kV transmission line AB is 100 km long with positive-sequence impedance of Z_L = 0.08 + j0.40 Ω/km (total Z_L = 40.8 Ω ∠78.7°). Adjacent line BC is 80 km long with identical parameter impedance. Determine the secondary ohmic reach settings for: (a) Zone 1, (b) Zone 2, and (c) Zone 3, assuming CT ratio is 1000/1 A and CVT ratio is 220,000/√3 : 110/√3 V.',
        hi: 'एक 220 kV लाइन AB 100 km लंबी है (Z = 0.08 + j0.40 Ω/km)। अगली लाइन BC 80 km लंबी है। CT अनुपात 1000/1 A और CVT अनुपात 220 kV / 110 V है। (a) ज़ोन 1, (b) ज़ोन 2, और (c) ज़ोन 3 के लिए सेकेंडरी ओमिक सेटिंग्स निर्धारित करें।',
        bn: 'একটি ২২০ kV লাইন AB ১০০ কিমি দীর্ঘ (Z = ০.০৮ + j০.৪০ Ω/কিমি)। সংলগ্ন লাইন BC ৮০ কিমি দীর্ঘ। সিটি অনুপাত ১০০০/১ A এবং সিভিটি অনুপাত ২২০ kV / ১১০ V। নির্ণয় করুন: (a) জোন ১, (b) জোন ২, এবং (c) জোন ৩ এর জন্য সেকেন্ডারি ওহমিক সেটিং।'
      },
      solution: {
        en: 'Given:\n• Line AB Impedance Z_AB = 100 km * (0.08 + j0.40) = 8.0 + j40.0 Ω (Magnitude = 40.79 Ω)\n• Line BC Impedance Z_BC = 80 km * (0.08 + j0.40) = 6.4 + j32.0 Ω (Magnitude = 32.63 Ω)\n• CT Ratio = 1000/1 A (R_I = 1000)\n• CVT Ratio = 220,000 / 110 = 2000 (R_V = 2000)\n• Impedance Scale Factor K_Z = R_I / R_V = 1000 / 2000 = 0.50 (Z_sec = 0.50 * Z_pri)\n\nStep 1: Zone 1 Reach (Set to 80% of Line AB):\nZ1_pri = 0.80 * 40.79 Ω = 32.63 Ω primary\nZ1_sec = 0.50 * 32.63 Ω = 16.32 Ω secondary (Trips Instantaneously, 0 ms delay)\n\nStep 2: Zone 2 Reach (Set to 100% of AB + 50% of BC):\nZ2_pri = Z_AB + 0.50 * Z_BC = 40.79 + 0.50 * (32.63) = 40.79 + 16.32 = 57.11 Ω primary\nZ2_sec = 0.50 * 57.11 Ω = 28.56 Ω secondary (Time delay t2 = 0.35 s)\n\nStep 3: Zone 3 Reach (Set to 100% of AB + 120% of BC):\nZ3_pri = Z_AB + 1.20 * Z_BC = 40.79 + 1.20 * (32.63) = 40.79 + 39.16 = 79.95 Ω primary\nZ3_sec = 0.50 * 79.95 Ω = 39.98 Ω secondary (Time delay t3 = 0.80 s)',
        hi: 'रूपांतरण अनुपात K_Z = 1000 / 2000 = 0.50 (Z_sec = 0.5 * Z_pri)\nचरण 1: ज़ोन 1 (80% AB) = 0.80 * 40.79 = 32.63 Ω pri → Z1_sec = 16.32 Ω (तुरंत)\nचरण 2: ज़ोन 2 (AB + 50% BC) = 40.79 + 16.32 = 57.11 Ω pri → Z2_sec = 28.56 Ω (0.35 s)\nचरण 3: ज़ोन 3 (AB + 120% BC) = 40.79 + 39.16 = 79.95 Ω pri → Z3_sec = 39.98 Ω (0.80 s)',
        bn: 'স্কেল ফ্যাক্টর K_Z = ১০০০ / ২০০০ = ০.৫০ (Z_sec = ০.৫ * Z_pri)\nধাপ ১: জোন ১ (৮০% AB) = ০.৮০ * ৪০.৭৯ = ৩২.৬৩ Ω pri → Z1_sec = ১৬.৩২ Ω (তাৎক্ষণিক)\nধাপ ২: জোন ২ (AB + ৫০% BC) = ৪০.৭৯ + ১৬.৩২ = ৫৭.১১ Ω pri → Z2_sec = ২৮.৫৬ Ω (০.৩৫ s)\nধাপ ৩: জোন ৩ (AB + ১২০% BC) = ৪০.৭৯ + ৩৯.১৬ = ৭৯.৯৫ Ω pri → Z3_sec = ৩৯.৯৮ Ω (০.৮০ s)'
      },
      givenValues: { 'L_AB': '100 km', 'L_BC': '80 km', 'z': '0.408 Ω/km', 'CTR': '1000/1', 'PTR': '2000' },
      finalAnswer: {
        en: 'Z1_sec = 16.32 Ω (Inst), Z2_sec = 28.56 Ω (0.35 s), Z3_sec = 39.98 Ω (0.80 s)',
        hi: 'Z1_sec = 16.32 Ω (तुरंत), Z2_sec = 28.56 Ω (0.35 s), Z3_sec = 39.98 Ω (0.80 s)',
        bn: 'Z1_sec = ১৬.৩২ Ω (তাৎক্ষণিক), Z2_sec = ২৮.৫৬ Ω (০.৩৫ s), Z3_sec = ৩৯.৯৮ Ω (০.৮০ s)'
      }
    },
    {
      id: 'ex-ch17-l06-02',
      problem: {
        en: 'A 400 kV substation has a source Thevenin reactance of X_source = 3.5 Ω. The outgoing 400 kV transmission line has a total series reactance of X_line = 14.0 Ω. Calculate: (a) The System Impedance Ratio (SIR), and (b) State whether this line is classified as an electrically long or short line in protection engineering terms.',
        hi: 'एक 400 kV सबस्टेशन का स्रोत प्रतिघात 3.5 Ω और बाहर जाने वाली लाइन का प्रतिघात 14.0 Ω है। (a) सिस्टम प्रतिबाधा अनुपात (SIR) की गणना करें, और (b) बताएं कि यह लाइन लंबी है या छोटी।',
        bn: 'একটি ৪০০ kV সাবস্টেশনের সোর্স রিঅ্যাক্ট্যান্স ৩.৫ Ω এবং বহির্গামী লাইনের রিঅ্যাক্ট্যান্স ১৪.০ Ω। (a) সিস্টেম ইম্পিডেন্স রেশিও (SIR) নির্ণয় করুন এবং (b) সুরক্ষার পরিভাষায় লাইনটি শর্ট নাকি লং লাইন তা উল্লেখ করুন।'
      },
      solution: {
        en: 'Step 1: Apply SIR definition formula:\nSIR = Z_source / Z_line = X_source / X_line\nSIR = 3.5 Ω / 14.0 Ω = 0.25\n\nStep 2: Classification:\n• SIR < 0.5: Strong Source / Electrically Long Line. Voltage depression at the relay terminal is moderate even for severe faults, yielding highly accurate, stable distance relay decisions.\n• 0.5 ≤ SIR ≤ 4.0: Medium Line.\n• SIR > 4.0: Weak Source / Electrically Short Line (prone to voltage measurement transients and CVT errors).\n\nConclusion: With an SIR of 0.25, the application is classified as an electrically LONG line with a strong source.',
        hi: 'चरण 1: SIR = 3.5 / 14.0 = 0.25\nचरण 2: चूंकि SIR < 0.5 है, यह एक "मजबूत स्रोत / लंबी लाइन" है जहां रिले को बहुत सटीक वोल्टेज संकेत मिलते हैं।',
        bn: 'ধাপ ১: SIR = ৩.৫ / ১৪.০ = ০.২৫\nধাপ ২: যেহেতু SIR < ০.৫, তাই এটি শক্তিশালী সোর্স বিশিষ্ট "ইলেক্ট্রিক্যালি লং লাইন" হিসেবে বিবেচিত হবে যেখানে রিলে অত্যন্ত নির্ভুল ফলাফল দেয়।'
      },
      givenValues: { 'X_source': '3.5 Ω', 'X_line': '14.0 Ω' },
      finalAnswer: {
        en: 'SIR = 0.25; Classified as Electrically Long Line (Strong Source)',
        hi: 'SIR = 0.25; मजबूत स्रोत / लंबी लाइन के रूप में वर्गीकृत',
        bn: 'SIR = ০.২৫; ইলেক্ট্রিক্যালি লং লাইন (স্ট্রং সোর্স) হিসেবে শ্রেণীবদ্ধ'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Primary and backup protection of 220 kV, 400 kV, and 765 kV cross-country transmission lines.',
      'Setting Quadrilateral characteristics on short transmission lines to reliably detect high-resistance forest fires and lightning strikes.',
      'Configuring Power Swing Blocking (PSB) to prevent cascading grid collapse during inter-area oscillation events.'
    ],
    hi: [
      '220 kV, 400 kV और 765 kV क्रॉस-कंट्री ट्रांसमिशन लाइनों की प्राथमिक और बैकअप सुरक्षा।',
      'छोटी पारेषण लाइनों पर उच्च प्रतिरोध वाले वनाग्नि और बिजली के फॉल्ट पकड़ने के लिए क्वाड्रिलेटरल सेटिंग्स।',
      'इंटर-एरिया दोलन के दौरान ग्रिड ब्लैकआउट को रोकने के लिए पावर स्विंग ब्लॉकिंग (PSB) सेट करना।'
    ],
    bn: [
      '২২০ kV, ৪০০ kV ও ৭৬৫ kV আন্তঃজেলা সঞ্চালন লাইনের প্রাইমারি ও ব্যাকআপ সুরক্ষা।',
      'সংক্ষিপ্ত লাইনে উচ্চ রেজিস্ট্যান্সযুক্ত টাওয়ার-আর্থিং বা আগুনের ফল্ট ধরতে কোয়াড্রিলেটারাল বৈশিষ্ট্য প্রয়োগ।',
      'আন্তঃগ্রিড দোলনের সময় ব্যাপক ব্ল্যাকআউট রোধে পাওয়ার সুইং ব্লকিং (PSB) সক্রিয়করণ।'
    ]
  },
  commonMistakes: {
    en: [
      'Setting Zone 1 reach to 100% of the line, which causes instantaneous false trips for faults on the adjacent line (over-reach).',
      'Using a standard Mho circle for short lines with high fault resistance, causing the relay to under-reach and fail to trip.',
      'Omitting the zero-sequence compensation factor k0 for ground distance elements, resulting in severe impedance calculation errors (up to 40%).'
    ],
    hi: [
      'ज़ोन 1 को लाइन का 100% सेट करना, जिससे अगली लाइन के फॉल्ट पर तुरंत गलत ट्रिपिंग (ओवर-रीच) हो जाती है।',
      'उच्च फॉल्ट प्रतिरोध वाली छोटी लाइनों के लिए म्हो वृत्त का उपयोग करना, जिससे रिले फॉल्ट को पहचानने में विफल रहता है।',
      'ग्राउंड डिस्टेंस रिले में जीरो-सीक्वेंस फैक्टर k0 को छोड़ना, जिससे प्रतिबाधा गणना में 40% तक की भारी त्रुटि होती है।'
    ],
    bn: [
      'জোন ১ কে লাইনের ১০০% এ সেট করা, যার ফলে পরবর্তী লাইনের ফল্টেও রিলে ভুলবশত তাৎক্ষণিক ট্রিপ করে (ওভার-রীচ)।',
      'উচ্চ রেজিস্ট্যান্সযুক্ত শর্ট লাইনে মো (Mho) বৃত্তাকার রিলে ব্যবহার করা, ফলে রিলে ফল্ট শনাক্ত করতে পারে না (আন্ডার-রীচ)।',
      'গ্রাউন্ড ফল্টে জিরো-সিকোয়েন্স ফ্যাক্টর k0 বাদ দেওয়া, যার ফলে ইম্পিডেন্স হিসাবে ৪০% পর্যন্ত মারাত্মক ভুল হয়।'
    ]
  },
  keyTakeaways: {
    en: [
      'Distance protection computes loop impedance V/I, which is directly proportional to line distance.',
      'Stepped-reach coordination uses Zone 1 (80–85%, inst), Zone 2 (120%, 0.35 s), and Zone 3 (remote backup, 0.8–1.0 s).',
      'Quadrilateral relays provide superior fault resistance coverage; Power Swing Blocking prevents trips during stable swings.'
    ],
    hi: [
      'डिस्टेंस सुरक्षा लूप प्रतिबाधा V/I की गणना करती है, जो लाइन की दूरी के सीधे आनुपातिक होती है।',
      'स्टेप्ड-रीच समन्वय ज़ोन 1 (80-85%, तुरंत), ज़ोन 2 (120%, 0.35 s), और ज़ोन 3 (बैकअप, 0.8-1.0 s) का उपयोग करता है।',
      'क्वाड्रिलेटरल रिले बेहतर फॉल्ट प्रतिरोध कवरेज प्रदान करते हैं; PSB स्थिर दोलनों के दौरान ट्रिपिंग रोकता है।'
    ],
    bn: [
      'ডিসট্যান্স রিলে V/I হিসাব করে যা লাইনের ভৌগোলিক দূরত্বের সরাসরি সমানুপাতিক।',
      'স্টেপড-রীচ সমন্বয়ে জোন ১ (৮০-৮৫%, তাৎক্ষণিক), জোন ২ (১২০%, ০.৩৫ s) এবং জোন ৩ (০.৮-১.০ s) ব্যবহৃত হয়।',
      'কোয়াড্রিলেটারাল রিলে চমৎকার আর্ক রেজিস্ট্যান্স কভারেজ দেয় এবং PSB স্থিতিশীল গ্রিড দোলনে অপ্রয়োজনীয় ট্রিপ প্রতিরোধ করে।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch17-l06-01',
      question: {
        en: 'Why is Zone 1 of a distance relay intentionally set to cover only 80% to 85% of the protected line rather than 100%?',
        hi: 'डिस्टेंस रिले के ज़ोन 1 को जानबूझकर 100% के बजाय संरक्षित लाइन के केवल 80% से 85% को कवर करने के लिए क्यों सेट किया जाता है?',
        bn: 'ডিসট্যান্স রিলের জোন ১ কে ইচ্ছাকৃতভাবে পুরো ১০০% কভার না করিয়ে কেবল ৮০% থেকে ৮৫% এ সেট করা হয় কেন?'
      },
      options: [
        { id: 'opt-1', text: { en: 'To prevent "over-reaching" and false instantaneous tripping for faults on the adjacent line due to CT/CVT errors', hi: 'CT/CVT त्रुटियों के कारण अगली लाइन पर होने वाले फॉल्ट के लिए तुरंत गलत ट्रिपिंग (ओवर-रीच) को रोकने के लिए', bn: 'সিটি/সিভিটি এরর ও প্যারামিটারের বিচ্যুতির কারণে পরবর্তী লাইনের ফল্টে যেন ভুলবশত তাৎক্ষণিক ট্রিপ (ওভার-রীচ) না ঘটে' } },
        { id: 'opt-2', text: { en: 'To reduce the electricity bill of the substation', hi: 'सबस्टेशन के बिजली बिल को कम करने के लिए', bn: 'সাবস্টেশনের বিদ্যুৎ বিল কমাতে' } },
        { id: 'opt-3', text: { en: 'Because transmission lines lose 15% of their length during winter', hi: 'क्योंकि सर्दियों में पारेषण लाइनें अपनी लंबाई का 15% खो देती हैं', bn: 'শীতকালে তার ১৫% ছোট হয়ে যায় বলে' } },
        { id: 'opt-4', text: { en: 'To allow lightning bolts to ground safely without clearing', hi: 'बिजली को सुरक्षित रूप से बिना क्लियर किए ग्राउंड होने देने के लिए', bn: 'বজ্রপাতকে লাইন থেকে ক্লিয়ার না করে পাস করানোর জন্য' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Instrument transformer transient errors (5%), line parameter inaccuracies (5%), and relay measurement tolerances (3–5%) could cause a 100% reach to sense a fault just beyond the remote bus as internal, violating selectivity.',
        hi: 'CT/CVT की अशुद्धियों और लाइन प्रतिबाधा में बदलाव के कारण, 100% सेटिंग से अगली लाइन के फॉल्ट पर भी गलत ट्रिपिंग हो सकती है। 80-85% सुरक्षा मार्जिन देता है।',
        bn: 'সিটি/সিভিটি এরর ও লাইনের ইম্পিডেন্সের সামান্য পরিবর্তনের কারণে ১০০% সেটিং থাকলে পরবর্তী লাইনের ফল্টেও রিলে ভুলবশত তাৎক্ষণিক ট্রিপ করে ফেলতে পারে।'
      }
    },
    {
      id: 'mcq-ch17-l06-02',
      question: {
        en: 'How does a distance relay detect faults in the remaining 15% to 20% end-zone of the transmission line?',
        hi: 'डिस्टेंस रिले पारेषण लाइन के शेष 15% से 20% एंड-ज़ोन में फॉल्ट का पता कैसे लगाता है?',
        bn: 'সঞ্চালন লাইনের অবশিষ্ট ১৫% থেকে ২০% শেষ প্রান্তের ফল্ট ডিসট্যান্স রিলে কীভাবে শনাক্ত করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Through Zone 2, which is set to 120% line reach with a time delay of 0.30 to 0.40 seconds', hi: 'ज़ोन 2 के माध्यम से, जो 0.30 से 0.40 सेकंड की समय देरी के साथ 120% लाइन पहुंच पर सेट है', bn: 'জোন ২ এর মাধ্যমে, যা ০.৩০ থেকে ০.৪০ সেকেন্ড সময় বিলম্ব সহ ১২০% লাইনে সেট করা থাকে' } },
        { id: 'opt-2', text: { en: 'By sending a lineman to inspect the line visually', hi: 'लाइनमैन को भेजकर लाइन का निरीक्षण करवाकर', bn: 'লাইনম্যান পাঠিয়ে সরাসরি চোখ দিয়ে দেখে' } },
        { id: 'opt-3', text: { en: 'By measuring the temperature of the transformer oil', hi: 'ट्रांसफार्मर के तेल का तापमान मापकर', bn: 'ট্রান্সফরমার তেলের তাপমাত্রা মেপে' } },
        { id: 'opt-4', text: { en: 'The end-zone is permanently ignored and never tripped', hi: 'एंड-ज़ोन को स्थायी रूप से छोड़ दिया जाता है और कभी ट्रिप नहीं किया जाता', bn: 'শেষ প্রান্তের সুরক্ষাকে স্থায়ীভাবে উপেক্ষা করা হয়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Zone 2 over-reaches the remote busbar (typically set to 120% of the line) with an intentional time delay (0.35 s) to allow adjacent line Zone 1 relays to clear close-in faults first.',
        hi: 'ज़ोन 2 लाइन के 120% हिस्से को कवर करता है और 0.35 सेकंड की देरी के बाद शेष 15% हिस्से के फॉल्ट को सुरक्षित रूप से साफ करता है।',
        bn: 'জোন ২ লাইনের শেষ প্রান্ত ছাড়িয়ে ১২০% পর্যন্ত কভার করে এবং ০.৩৫ সেকেন্ড সময় বিলম্বের মাধ্যমে অবশিষ্ট প্রান্তের ফল্ট পরিষ্কার করে।'
      }
    },
    {
      id: 'mcq-ch17-l06-03',
      question: {
        en: 'What advantage does a Quadrilateral characteristic offer over a traditional circular Mho characteristic on the R-X plane?',
        hi: 'R-X तल पर पारंपरिक गोलाकार म्हो (Mho) की तुलना में क्वाड्रिलेटरल विशेषता क्या लाभ प्रदान करती है?',
        bn: 'R-X তলে প্রচলিত বৃত্তাকার মো (Mho) বৈশিষ্ট্যের তুলনায় কোয়াড্রিলেটারাল বহুভুজ কী বাড়তি সুবিধা প্রদান করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Independent resistive reach adjustment, providing vastly superior coverage for high-resistance arc and tower-footing faults', hi: 'स्वतंत्र प्रतिरोधी पहुंच समायोजन, उच्च प्रतिरोध वाले आर्क और टावर-फुटिंग फॉल्ट के लिए बेहतर कवरेज', bn: 'স্বাধীনভাবে রেজিস্ট্যান্স সেটিং পরিবর্তনের সুবিধা, যার ফলে উচ্চ রেজিস্ট্যান্সযুক্ত আর্ক ও টাওয়ার-গ্রাউন্ডিং ফল্ট চমৎকারভাবে ধরা পড়ে' } },
        { id: 'opt-2', text: { en: 'It eliminates the need for voltage inputs from CVTs', hi: 'यह CVT से वोल्टेज इनपुट की आवश्यकता को समाप्त करता है', bn: 'এটি সিভিটি থেকে ভোল্টেজ ইনপুটের প্রয়োজনীয়তা দূর করে' } },
        { id: 'opt-3', text: { en: 'It doubles the transmission line power capacity', hi: 'यह पारेषण लाइन की बिजली क्षमता को दोगुना करता है', bn: 'এটি সঞ্চালন লাইনের ক্ষমতা দ্বিগুণ করে' } },
        { id: 'opt-4', text: { en: 'It prevents birds from landing on the conductors', hi: 'यह पक्षियों को कंडक्टर पर बैठने से रोकता है', bn: 'এটি পাখিদের তারে বসতে বাধা দেয়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'In Mho circles, resistive reach is rigidly constrained by reach reactance. Quadrilateral characteristics allow engineers to independently extend resistive reach along the R-axis, capturing high arc resistances without causing load encroachment.',
        hi: 'म्हो वृत्त में प्रतिरोध सीमित होता है। क्वाड्रिलेटरल में R और X को स्वतंत्र रूप से सेट किया जा सकता है, जिससे उच्च प्रतिरोध वाले फॉल्ट आसानी से पकड़े जाते हैं।',
        bn: 'মো বৃত্তে রেজিস্ট্যান্স বাড়াতে গেলে রিঅ্যাক্ট্যান্সও বাড়ে যা লোড এনক্রোচমেন্ট ঘটায়। কোয়াড্রিলেটারাল বৈশিষ্ট্যে R ও X স্বাধীনভাবে সেট করে উচ্চ আর্ক রেজিস্ট্যান্স কভার করা যায়।'
      }
    },
    {
      id: 'mcq-ch17-l06-04',
      question: {
        en: 'How does a Power Swing Blocking (PSB) element distinguish a stable power swing from a genuine three-phase electrical fault?',
        hi: 'पावर स्विंग ब्लॉकिंग (PSB) तत्व एक वास्तविक थ्री-फेज फॉल्ट से स्थिर पावर स्विंग को कैसे अलग करता है?',
        bn: 'পাওয়ার সুইং ব্লকিং (PSB) কীভাবে একটি প্রকৃত থ্রি-ফেজ ফল্ট থেকে স্থিতিশীল পাওয়ার সুইংকে আলাদা করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'By measuring the rate of change of impedance (dZ/dt); faults cause instantaneous steps, whereas power swings move slowly across blinders', hi: 'प्रतिबाधा के परिवर्तन की दर (dZ/dt) को मापकर; फॉल्ट तुरंत आते हैं, जबकि स्विंग धीरे-धीरे ब्लाईंडर को पार करते हैं', bn: 'ইম্পিডেন্স পরিবর্তনের হার (dZ/dt) পরিমাপ করে; ফল্টে ইম্পিডেন্স তৎক্ষণাৎ লাফ দেয়, কিন্তু পাওয়ার সুইংয়ে ইম্পিডেন্স ধীরে ধীরে ব্লাইন্ডার অতিক্রম করে' } },
        { id: 'opt-2', text: { en: 'By checking the oil level inside the generator bearing', hi: 'जनरेटर बियरिंग के अंदर तेल के स्तर की जांच करके', bn: 'জেনারেটরের বিয়ারিং তেলের মাত্রা পরীক্ষা করে' } },
        { id: 'opt-3', text: { en: 'By measuring the wind speed at the midpoint tower', hi: 'मध्य टावर पर हवा की गति को मापकर', bn: 'মধ্যবর্তী টাওয়ারে বাতাসের গতিবেগ মেপে' } },
        { id: 'opt-4', text: { en: 'By converting three-phase AC to DC temporarily', hi: 'थ्री-फेज एसी को अस्थायी रूप से डीसी में बदलकर', bn: 'থ্রি-ফেজ এসিকে সাময়িকভাবে ডিসিতে রূপান্তর করে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Short-circuit faults cause a step change in impedance (<5 ms). Power swings result from mechanical rotor angle acceleration, causing the impedance locus to slowly drift across outer and inner blinders (taking >50 ms), allowing PSB to block tripping.',
        hi: 'शॉर्ट सर्किट होने पर प्रतिबाधा तुरंत (<5 ms) बदल जाती है, जबकि जनरेटर रोटर के दोलन के कारण प्रतिबाधा धीरे-धीरे (>50 ms) बदलती है। रिले dZ/dt से इसे पहचान लेता है।',
        bn: 'শর্ট সার্কিট হলে ইম্পিডেন্স এক পলকে (<৫ ms) বদলে যায়। কিন্তু মেকানিক্যাল রোটর সুইংয়ে ইম্পিডেন্স ধীরে ধীরে (>৫০ ms) পরিবর্তিত হয়, যা ব্লাইন্ডার টাইমার দিয়ে শনাক্ত করে ট্রিপ আটকে রাখা হয়।'
      }
    },
    {
      id: 'mcq-ch17-l06-05',
      question: {
        en: 'What is the role of the zero-sequence compensation factor (k0) in single-line-to-ground distance protection?',
        hi: 'सिंगल-लाइन-टू-ग्राउंड डिस्टेंस सुरक्षा में जीरो-सीक्वेंस क्षतिपूर्ति कारक (k0) की क्या भूमिका है?',
        bn: 'সিঙ্গেল-লাইন-টু-গ্রাউন্ড ফল্ট নির্ণয়ে জিরো-সিকোয়েন্স ক্ষতিপূরণ ফ্যাক্টরের (k0) ভূমিকা কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'It compensates for the higher impedance of the earth return path, ensuring accurate distance measurement to ground faults', hi: 'यह अर्थ रिटर्न पथ के उच्च प्रतिघात की भरपाई करता है, जिससे ग्राउंड फॉल्ट की सटीक दूरी मापी जाती है', bn: 'এটি মাটির রিটার্ন পাথের অতিরিক্ত ইম্পিডেন্সের ক্ষতিপূরণ করে যাতে গ্রাউন্ড ফল্টের সঠিক দূরত্ব মাপা যায়' } },
        { id: 'opt-2', text: { en: 'It doubles the frequency of the incoming voltage waveform', hi: 'यह इनकमिंग वोल्टेज तरंग की आवृत्ति को दोगुना करता है', bn: 'এটি ইনকামিং ভোল্টেজের ফ্রিকোয়েন্সি দ্বিগুণ করে' } },
        { id: 'opt-3', text: { en: 'It disconnects the lightning arrester from ground', hi: 'यह लाइटनिंग अरेस्टर को ग्राउंड से डिस्कनेक्ट करता है', bn: 'এটি লাইটনিং অ্যারেস্টারকে মাটি থেকে বিচ্ছিন্ন করে' } },
        { id: 'opt-4', text: { en: 'It resets the numerical microprocessor clock at midnight', hi: 'यह आधी रात को रिले घड़ी को रीसेट करता है', bn: 'এটি মধ্যরাতে মাইক্রোপ্রসেসরের ঘড়ি রিসেট করে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'The earth return path has higher impedance (Z0) than the phase conductor (Z1). By injecting k0 · I_residual into the comparator (k0 = (Z0-Z1)/(3·Z1)), the relay measures true positive-sequence reach impedance Z1.',
        hi: 'जमीन का प्रतिबाधा (Z0) लाइन कंडक्टर (Z1) से अधिक होता है। k0 कारक इस अंतर की भरपाई करता है ताकि रिले सही दूरी माप सके।',
        bn: 'মাটির মধ্য দিয়ে কারেন্ট ফেরার রোধ (Z0) তারের চেয়ে আলাদা হয়। k0 = (Z0-Z1)/(3·Z1) ফ্যাক্টর প্রয়োগ করে রিলে প্রকৃত পজিটিভ সিকোয়েন্স দূরত্ব নির্ণয় করে।'
      }
    },
    {
      id: 'mcq-ch17-l06-06',
      question: {
        en: 'A high System Impedance Ratio (SIR > 4.0) indicates which grid condition for a distance relay?',
        hi: 'एक उच्च सिस्टम प्रतिबाधा अनुपात (SIR > 4.0) डिस्टेंस रिले के लिए ग्रिड की किस स्थिति को दर्शाता है?',
        bn: 'উচ্চ সিস্টেম ইম্পিডেন্স রেশিও (SIR > ৪.০) ডিসট্যান্স রিলের ক্ষেত্রে গ্রিডের কোন অবস্থাকে নির্দেশ করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'A weak source or an electrically short transmission line, causing severe terminal voltage depression during faults', hi: 'एक कमजोर स्रोत या छोटी पारेषण लाइन, जिससे फॉल्ट के दौरान टर्मिनल वोल्टेज में भारी गिरावट होती है', bn: 'একটি দুর্বল সোর্স বা ইলেক্ট্রিক্যালি শর্ট ট্রান্সমিশন লাইন, যার ফলে ফল্টের সময় সাবস্টেশনের ভোল্টেজ প্রায় শূন্যে নেমে আসে' } },
        { id: 'opt-2', text: { en: 'An infinitely strong infinite busbar with zero fault level', hi: 'शून्य फॉल्ट स्तर वाला एक अनंत बसबार', bn: 'জিরো ফল্ট লেভেল বিশিষ্ট অসীম বাসবার' } },
        { id: 'opt-3', text: { en: 'A line operated strictly with direct current (HVDC)', hi: 'केवल डीसी पर चलने वाली लाइन', bn: 'এইচভিডিসি দ্বারা পরিচালিত লাইন' } },
        { id: 'opt-4', text: { en: 'Complete absence of overhead conductor sag in summer', hi: 'गर्मियों में कंडक्टर के झुकाव की पूर्ण अनुपस्थिति', bn: 'গ্রীষ্মকালে তারের কোনো প্রকার স্যাগ না থাকা' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'SIR = Z_source / Z_line. When SIR is high, source impedance dominates. Faults anywhere on the short line pull terminal voltage to near-zero, challenging CVT transient response and directional determination.',
        hi: 'उच्च SIR का अर्थ है कमजोर स्रोत या बहुत छोटी लाइन। फॉल्ट होने पर सबस्टेशन पर वोल्टेज लगभग शून्य हो जाता है जिससे रिले के लिए मापना कठिन हो जाता है।',
        bn: 'SIR বেশি হওয়ার অর্থ হলো সোর্স দুর্বল বা লাইনটি খুব ছোট। লাইনে ফল্ট হলে সাবস্টেশনের ভোল্টেজ মারাত্মকভাবে পড়ে যায় এবং রিলে পরিমাপে জটিলতা সৃষ্টি হয়।'
      }
    },
    {
      id: 'mcq-ch17-l06-07',
      question: {
        en: 'What causes the phenomenon of "Load Encroachment" in distance protection?',
        hi: 'डिस्टेंस सुरक्षा में "लोड अतिक्रमण" (Load Encroachment) की घटना का क्या कारण है?',
        bn: 'ডিসট্যান্স সুরক্ষায় "লোড এনক্রোচমেন্ট" ঘটার মূল কারণ কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Heavy real power transfer at near-unity power factor causing load impedance (V²/S) to fall inside the large reach of Zone 3', hi: 'अत्यधिक बिजली प्रवाह के कारण लोड प्रतिबाधा का ज़ोन 3 की बड़ी पहुंच के अंदर आ जाना', bn: 'অতিরিক্ত লোড প্রবাহের কারণে লোড ইম্পিডেন্স (V²/S) কমে গিয়ে জোন ৩ এর বড় বাউন্ডারির ভেতরে ঢুকে যাওয়া' } },
        { id: 'opt-2', text: { en: 'Trees growing into the overhead phase conductors', hi: 'पेड़ों का पारेषण लाइन के कंडक्टरों तक बढ़ जाना', bn: 'গাছের ডালপালা সঞ্চালন লাইনের তার স্পর্শ করা' } },
        { id: 'opt-3', text: { en: 'DC auxiliary voltage dropping below 80 volts', hi: 'डीसी वोल्टेज का 80 वोल्ट से नीचे गिरना', bn: 'সাবস্টেশনের ডিসি অক্সিলিয়ারি ভোল্টেজ ৮০ ভোল্টের নিচে নামা' } },
        { id: 'opt-4', text: { en: 'Corona noise masking carrier frequency signals', hi: 'कोरोना शोर द्वारा सिग्नलों को बाधित करना', bn: 'করোনা নয়েজের কারণে ক্যারিয়ার সিগন্যাল হারিয়ে যাওয়া' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Under emergency load conditions, massive MW transfer lowers apparent impedance Z = V/I. Because load operates near unity power factor (low angle, near R-axis), it can encroach into Zone 3 blinders and cause a false blackout trip.',
        hi: 'अत्यधिक लोड होने पर Z = V/I घट जाता है। चूंकि लोड का पावर फैक्टर उच्च होता है (R-अक्ष के पास), यह ज़ोन 3 में घुसकर बिना फॉल्ट के ट्रिप कर सकता है।',
        bn: 'গ্রিডে অতিরিক্ত লোড চললে Z = V/I অনেক কমে যায় এবং পাওয়ার ফ্যাক্টর ভালো থাকায় তা R-অক্ষের কাছে জোন ৩ সীমানায় ঢুকে ভুল ট্রিপ ঘটাতে পারে।'
      }
    },
    {
      id: 'mcq-ch17-l06-08',
      question: {
        en: 'A 132 kV line has positive-sequence impedance of 20.0 Ω. A solid phase-to-phase fault occurs at 60% of the line length. What apparent impedance is measured by the substation distance relay?',
        hi: 'एक 132 kV लाइन की प्रतिबाधा 20.0 Ω है। लाइन की 60% लंबाई पर फेज-टू-फेज फॉल्ट होता है। रिले द्वारा मापी गई स्पष्ट प्रतिबाधा क्या होगी?',
        bn: 'একটি ১৩২ kV লাইনের পজিটিভ সিকোয়েন্স ইম্পিডেন্স ২০.০ Ω। লাইনের ৬০% দূরত্বে একটি ফেজ-টু-ফেজ ফল্ট ঘটলে সাবস্টেশনের ডিসট্যান্স রিলে কত আপাত ইম্পিডেন্স পরিমাপ করবে?'
      },
      options: [
        { id: 'opt-1', text: { en: '12.0 Ω (operating instantaneously in Zone 1)', hi: '12.0 Ω (ज़ोन 1 में तुरंत संचालित होगा)', bn: '১২.০ Ω (জোন ১ এ তাৎক্ষণিকভাবে ট্রিপ করবে)' } },
        { id: 'opt-2', text: { en: '20.0 Ω (operating with Zone 2 delay)', hi: '20.0 Ω (ज़ोन 2 में विलंबित)', bn: '২০.০ Ω (জোন ২ এ দেরিতে)' } },
        { id: 'opt-3', text: { en: '120.0 Ω (operating with Zone 3 delay)', hi: '120.0 Ω (ज़ोन 3 में)', bn: '১২০.০ Ω (জোন ৩ এ)' } },
        { id: 'opt-4', text: { en: '0.0 Ω (blown PT fuse)', hi: '0.0 Ω (पीटी फ़्यूज़ उड़ गया)', bn: '০.০ Ω (পিটি ফিউজ উড়ে যাওয়া)' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Apparent impedance Z = 0.60 · 20.0 Ω = 12.0 Ω. Since 12.0 Ω < Zone 1 reach (0.80 · 20.0 = 16.0 Ω), the fault falls cleanly within Zone 1 and the relay trips instantaneously in ~20 ms.',
        hi: 'Z = 0.60 * 20.0 = 12.0 Ω। चूंकि 12.0 Ω < ज़ोन 1 पहुंच (16.0 Ω) है, रिले ज़ोन 1 में तुरंत ट्रिप करेगा।',
        bn: 'Z = ০.৬০ * ২০.০ = ১২.০ Ω। যেহেতু ১২.০ Ω < জোন ১ রীচ (১৬.০ Ω), তাই ফল্টটি সরাসরি জোন ১ এ পড়ে এবং রিলে তাৎক্ষণিক (~২০ ms) ট্রিপ করে।'
      }
    }
  ]
};
