import { Lesson } from '../types';

export const LESSON_NEUTRAL_DISPLACEMENT_VOLTAGE_UNBALANCE: Lesson = {
  id: 'lsn-ch14-neutral-displacement-voltage-unbalance',
  topicId: 'tp-neutral-displacement',
  chapterId: 'ch-three-phase',
  order: 4,
  title: {
    en: 'Neutral Displacement, Voltage Unbalance & Phase Failure',
    hi: 'न्यूट्रल विस्थापन, वोल्टेज असंतुलन एवं फेज विफलता',
    bn: 'নিউট্রাল সরণ, ভোল্টেজ ভারসাম্যহীনতা ও ফেজ ব্যর্থতা'
  },
  description: {
    en: 'Analyze three-wire ungrounded star systems and the catastrophic phenomenon of the floating neutral. Apply Millman\'s Theorem to calculate neutral displacement voltage Vn\'n, phase-to-neutral voltage distortion, overvoltage hazards on lightly loaded phases, and protective grounding strategies.',
    hi: '3-तार अनग्राउंडेड स्टार प्रणालियों और फ्लोटिंग न्यूट्रल की विनाशकारी परिघटना का विश्लेषण करें। न्यूट्रल विस्थापन वोल्टेज Vn\'n, फेज वोल्टेज विरूपण, हल्के लोड वाले फेजों पर ओवरवोल्टेज और सुरक्षात्मक अर्थिंग रणनीतियों की गणना के लिए मिल्मैन प्रमेय लागू करें।',
    bn: '৩-তার আনগ্রাউন্ডেড স্টার সিস্টেম এবং ভাসমান নিউট্রালের মারাত্মক ক্ষতিকারক পরিস্থিতি বিশ্লেষণ করুন। নিউট্রাল ডিসপ্লেসমেন্ট ভোল্টেজ Vn\'n, ফেজ ভোল্টেজ বিকৃতি, হালকা লোডের ফেজে অতিরিক্ত ভোল্টেজের ঝুঁকি এবং সুরক্ষামূলক আর্থিং কৌশল নির্ধারণে মিলম্যানের উপপাদ্য প্রয়োগ করুন।'
  },
  estimatedMinutes: 45,
  easyExplanation: {
    en: 'Think of the three phases as three ropes pulling a floating center ring (the star point) toward three fixed anchor posts arranged in a triangle. If all three ropes pull with equal force (balanced load), the center ring stays pinned right in the middle (0 Volts neutral). But if you cut the center ground anchor (a severed neutral wire) and one phase pulls with massive weight while the other two are lightly held, the center ring gets yanked violently toward the heavy load. As a result, the distance (voltage) from the center ring to the other two posts stretches dramatically toward the 400 V line voltage. Any 230 V television or refrigerator plugged into those lightly loaded phases is instantly destroyed by catastrophic overvoltage!',
    hi: 'इसे तीन रस्सियों द्वारा बीच के छल्ले (न्यूट्रल बिंदु) को तीन खंभों की ओर खींचने जैसा समझें। यदि तीनों रस्सियों पर समान खिंचाव है, तो छल्ला बिल्कुल केंद्र में (0 V) रहेगा। लेकिन यदि न्यूट्रल तार टूट जाए और एक फेज पर बहुत भारी लोड हो जबकि बाकी दो पर हल्का लोड, तो केंद्र बिंदु भारी लोड वाले खंभे की तरफ खिंच जाएगा। इससे अन्य दो फेजों पर वोल्टेज 230 V से उछलकर 350-400 V तक पहुंच जाता है, जिससे वहां जुड़े टीवी, पंखे और फ्रिज तुरंत जल जाते हैं!',
    bn: 'তিনটি ফেজকে তিনটি দড়ি এবং নিউট্রাল বিন্দুকে কেন্দ্রের একটি ভাসমান আংটা হিসেবে কল্পনা করুন। যদি তিনটি দড়িতে সমান টান থাকে (সুষম লোড), আংটাটি ঠিক মাঝখানে স্থির থাকে (০ ভোল্ট)। কিন্তু যদি নিউট্রাল তার ছিঁড়ে যায় এবং একটি ফেজে প্রচণ্ড ভার থাকে আর বাকি দুটিতে কম ভার থাকে, তবে আংটাটি ভারী ফেজের দিকে সরে যায়। ফলে অন্য দুটি ফেজে ভোল্টেজ ২৩০ V থেকে লাফিয়ে ৩৫০-৪০০ V এ পৌঁছে যায় এবং সেখানে যুক্ত টিভি, ফ্রিজ ও অন্যান্য যন্ত্রপাতি তৎক্ষণাৎ পুড়ে ছাই হয়ে যায়!'
  },
  detailedExplanation: {
    en: 'When a three-phase star load operates without a neutral return conductor (a 3-wire star load, or when a 4-wire neutral conductor breaks open), the load star point N\' is no longer constrained to the source neutral potential N. The potential of N\' "floats" to a value dictated by the admittances of the three load phases.\n\n1. Millman\'s Theorem for Neutral Displacement:\n   The neutral displacement voltage Vn\'n (the voltage of the load neutral N\' with respect to the source neutral N) is given by:\n   Vn\'n = (Van · Ya + Vbn · Yb + Vcn · Yc) / (Ya + Yb + Yc)\n   where:\n   • Van, Vbn, Vcn are the supply phase voltages relative to source neutral N\n   • Ya = 1/Za, Yb = 1/Zb, Yc = 1/Zc are the load branch phase admittances (in Siemens, S).\n\n2. Actual Phase Voltages Impressed on Load Branches:\n   Once Vn\'n is determined, the actual voltage experienced by each load branch is found by Kirchhoff\'s Voltage Law:\n   • Van\' = Van - Vn\'n\n   • Vbn\' = Vbn - Vn\'n\n   • Vcn\' = Vcn - Vn\'n\n\n3. Extreme Asymmetry Cases:\n   • Balanced Load (Ya = Yb = Yc = Y): The numerator becomes Y · (Van + Vbn + Vcn) = Y · (0) = 0. Hence Vn\'n = 0, and the neutral stays centered.\n   • Short-Circuit on One Phase (e.g., Za -> 0, Ya -> ∞): The star point N\' collapses directly to Line A terminal (Vn\'n = Van). The voltages across the remaining two phases surge to full line-to-line voltages: Vbn\' = Vbn - Van = Vba, and Vcn\' = Vcn - Van = Vca (a 73% voltage increase from 230V to 400V)!\n   • Open-Circuit on One Phase (Zc -> ∞, Yc = 0): The network reduces to a single-phase series divider across line voltage Vab formed by Za and Zb in series.\n\n4. Field Prevention:\n   • Elimination of single-phase switching/fusing on neutrals\n   • Implementation of Neutral Voltage Displacement (NVD) protection relays (ANSI 59N) using broken-delta open secondary voltage transformers.',
    hi: 'जब 3-तार स्टार लोड बिना न्यूट्रल तार के चलता है, तो लोड का न्यूट्रल बिंदु N\' स्वतंत्र रूप से तैरने (फ्लोट करने) लगता है:\n\n1. मिल्मैन प्रमेय: न्यूट्रल विस्थापन वोल्टेज Vn\'n = (Van·Ya + Vbn·Yb + Vcn·Yc) / (Ya + Yb + Yc)।\n2. लोड फेजों पर वास्तविक वोल्टेज: Van\' = Van - Vn\'n, Vbn\' = Vbn - Vn\'n, Vcn\' = Vcn - Vn\'n।\n3. चरम स्थितियां:\n   • संतुलित लोड में: Vn\'n = 0 V (न्यूट्रल केंद्र में रहता है)।\n   • एक फेज शॉर्ट होने पर: न्यूट्रल उस फेज पर खिसक जाता है और बाकी दो फेजों पर वोल्टेज बढ़कर 400 V लाइन वोल्टेज हो जाता है।\n4. रोकथाम: ANSI 59N न्यूट्रल वोल्टेज विस्थापन रिले का उपयोग।',
    bn: 'যখন ৩-তার স্টার লোড কোনো নিউট্রাল তার ছাড়া চলে, তখন লোডের নিউট্রাল পয়েন্ট N\' উৎসের নিউট্রাল থেকে বিচ্যুত হয়ে যায়:\n\n১. মিলম্যানের উপপাদ্য: নিউট্রাল স্থানচ্যুতি ভোল্টেজ Vn\'n = (Van·Ya + Vbn·Yb + Vcn·Yc) / (Ya + Yb + Yc)।\n২. লোডের প্রকৃত ভোল্টেজ: Van\' = Van - Vn\'n, Vbn\' = Vbn - Vn\'n, Vcn\' = Vcn - Vn\'n।\n৩. চরম অবস্থা: সুষম লোডে Vn\'n = ০। কিন্তু কোনো একটি ফেজ শর্ট হলে বা অতিরিক্ত লোড থাকলে বাকি ফেজগুলিতে ভোল্টেজ ৪১৫ V এ পৌঁছায়।\n৪. সুরক্ষা: ANSI 59N নিউট্রাল ডিসপ্লেসমেন্ট প্রোটেকশন রিলে ব্যবহার করা।'
  },
  formulas: [
    {
      id: 'f-millman-neutral-displacement',
      symbol: 'V_{n\'n}',
      expression: 'V_{n\'n} = \\frac{V_{an} Y_a + V_{bn} Y_b + V_{cn} Y_c}{Y_a + Y_b + Y_c}',
      title: {
        en: 'Millman\'s Neutral Displacement Theorem',
        hi: 'मिल्मैन का न्यूट्रल विस्थापन प्रमेय',
        bn: 'মিলম্যানের নিউট্রাল ডিসপ্লেসমেন্ট উপপাদ্য'
      },
      description: {
        en: 'Calculates the complex phasor voltage between the floating load star point N\' and the source neutral N.',
        hi: 'फ्लोटिंग लोड स्टार बिंदु N\' और स्रोत न्यूट्रल N के बीच सम्मिश्र वोल्टेज की गणना करता है।',
        bn: 'ভাসমান লোড স্টার পয়েন্ট N\' এবং উৎস নিউট্রাল N এর মধ্যবর্তী জটিল ভোল্টেজ নির্ণয় করে।'
      },
      variables: [
        { symbol: 'V_{n\'n}', name: { en: 'Neutral displacement voltage phasor (Volts)', hi: 'न्यूट्रल विस्थापन वोल्टेज फेजर (V)', bn: 'নিউট্রাল ডিসপ্লেসমেন্ট ভোল্টেজ ফেজর (V)' } },
        { symbol: 'Y_a, Y_b, Y_c', name: { en: 'Phase branch admittances 1/Z (Siemens)', hi: 'शाखा प्रवेश्यता 1/Z (सीमेंस)', bn: 'শাখা অ্যাডমিটেন্স 1/Z (সিমেন্স)' } }
      ]
    },
    {
      id: 'f-load-phase-voltages',
      symbol: 'V_{kn\'}',
      expression: 'V_{an\'} = V_{an} - V_{n\'n}, \\quad V_{bn\'} = V_{bn} - V_{n\'n}, \\quad V_{cn\'} = V_{cn} - V_{n\'n}',
      title: {
        en: 'Load Branch Voltages After Neutral Displacement',
        hi: 'न्यूट्रल विस्थापन के बाद लोड शाखा वोल्टेज',
        bn: 'নিউট্রাল স্থানচ্যুতির পর লোড শাখা ভোল্টেজ'
      },
      description: {
        en: 'Computes the actual individual phase voltages experienced by each load branch connected to a floating star point.',
        hi: 'फ्लोटिंग स्टार बिंदु से जुड़ी प्रत्येक लोड शाखा द्वारा अनुभव किए जाने वाले वास्तविक वोल्टेज की गणना करता है।',
        bn: 'ভাসমান স্টার পয়েন্টের প্রতিটি লোড শাখায় প্রযুক্ত প্রকৃত ভোল্টেজ হিসাব করে।'
      },
      variables: [
        { symbol: 'V_{an\'}', name: { en: 'Voltage across Load Phase A (Volts)', hi: 'लोड फेज A पर वोल्टेज (V)', bn: 'লোড ফেজ A এর ভোল্টেজ (V)' } }
      ]
    }
  ],
  diagrams: [
    {
      id: 'diag-ch14-neutral-displacement',
      title: {
        en: 'Phasor Geometry of Neutral Displacement (Vn\'n) in Unbalanced Star',
        hi: 'असंतुलित स्टार में न्यूट्रल विस्थापन (Vn\'n) की फेजर ज्यामिति',
        bn: 'ভারসাম্যহীন স্টারে নিউট্রাল স্থানচ্যুতির (Vn\'n) ফেজর জ্যামিতি'
      },
      caption: {
        en: 'Phasor diagram demonstrating the physical displacement of the load star point N\' away from centroid N toward the heavily loaded phase.',
        hi: 'फेजर आरेख जो दर्शाता है कि लोड स्टार बिंदु N\' केंद्र N से भारी लोड वाले फेज की ओर कैसे खिसक जाता है।',
        bn: 'ফেজর চিত্র যা প্রদর্শন করে কীভাবে লোড স্টার পয়েন্ট N\' কেন্দ্রবিন্দু N থেকে সরে গিয়ে ভারী লোডের দিকে ধাবিত হয়।'
      },
      svgType: 'sch-ch14-neutral-displacement'
    }
  ],
  sections: [
    {
      id: 'sec-ch14-broken-neutral-disaster',
      title: {
        en: 'Field Forensics: The Broken Neutral Phenomenon in Residential & Commercial Feeders',
        hi: 'फील्ड फॉरेंसिक्स: आवासीय और वाणिज्यिक फीडरों में टूटे न्यूट्रल की घटना',
        bn: 'ফিল্ড ফরেনসিক: আবাসিক ও বাণিজ্যিক ফিডারে নিউট্রাল বিচ্ছিন্নতার বিপর্যয়'
      },
      content: {
        en: 'When a distribution transformer neutral conductor snaps or loosens due to corrosion, theft, or physical damage, the 230V residential outlets on the feeder are no longer independently referenced to ground. Instead, the appliances on different phases form a series circuit across the 400V line-to-line supply.\n\nA heavy load (such as a 2000W electric space heater on Phase A with low resistance R = 26.4 Ω) in series with a light load (such as a 40W LED TV on Phase B with high resistance R = 1322 Ω) creates a severe voltage divider:\n\n• Voltage on heavy heater: V = 400 · [26.4 / (26.4 + 1322)] ≈ 7.8 Volts (heater starves and fails to warm)\n• Voltage on sensitive TV: V = 400 · [1322 / (26.4 + 1322)] ≈ 392.2 Volts (TV power supply capacitor violently explodes and catches fire!)\n\nUtility companies deploy four-pole residual current circuit breakers (RCCBs) and open-neutral detector relays to trip feeder breakers within 20 milliseconds of neutral discontinuity.',
        hi: 'जब ट्रांसफार्मर का न्यूट्रल तार टूट जाता है, तो 230 V के उपकरण 400 V लाइन वोल्टेज के बीच सीरीज में जुड़ जाते हैं। कम वाट वाला उपकरण (जैसे टीवी, जिसका प्रतिरोध अधिक है) अधिकांश वोल्टेज (लगभग 390 V) खींच लेता है और तुरंत ब्लास्ट हो जाता है, जबकि भारी हीटर पर केवल 8 V ही मिलता है। इसे रोकने के लिए 4-पोल आरसीसीबी और न्यूट्रल डिटेक्टर रिले लगाए जाते हैं।',
        bn: 'যখন ট্রান্সফরমারের নিউট্রাল তার ছিঁড়ে যায়, তখন ২৩০ V এর যন্ত্রপাতিগুলি ৪০০ V লাইনের মাঝে সিরিজে যুক্ত হয়ে যায়। একটি ভারী হিটার (কম রোধ) এবং একটি টিভি (বেশি রোধ) সিরিজে থাকলে বিভব বিভাজন নিয়মে টিভির ওপর প্রায় ৩৯০ V চলে আসে এবং টিভির পাওয়ার সাপ্লাই বিস্ফোরিত হয়ে আগুন ধরে যায়! এটি প্রতিরোধে ৪-পোল আরসিসিবি ব্যবহার করা হয়।'
      }
    }
  ],
  workedExamples: [
    {
      id: 'we-ch14-l04-01',
      title: {
        en: 'Millman\'s Theorem Calculation of Floating Neutral Shift',
        hi: 'मिल्मैन प्रमेय द्वारा फ्लोटिंग न्यूट्रल विस्थापन की गणना',
        bn: 'মিলম্যানের উপপাদ্য দ্বারা ভাসমান নিউট্রাল স্থানচ্যুতি গণনা'
      },
      problem: {
        en: 'A 3-phase 3-wire 400 V (line-to-line), 50 Hz supply feeds an isolated star-connected pure resistive load:\nRa = 10 Ω, Rb = 20 Ω, Rc = 20 Ω.\nTaking Van as reference (Van = 230.9 ∠0° V, Vbn = 230.9 ∠-120° V, Vcn = 230.9 ∠120° V), compute the neutral displacement voltage Vn\'n and the voltage across Phase A (Van\').',
        hi: 'एक 3-तार 400 V सप्लाई एक पृथक स्टार प्रतिरोधक लोड Ra = 10 Ω, Rb = 20 Ω, Rc = 20 Ω को जोड़ती है। न्यूट्रल विस्थापन Vn\'n और फेज A पर वोल्टेज Van\' ज्ञात करें।',
        bn: 'একটি ৩-তার ৪০০ V সরবরাহ একটি পৃথক স্টার লোড Ra = ১০ Ω, Rb = ২০ Ω, Rc = ২০ Ω এ যুক্ত। নিউট্রাল স্থানচ্যুতি Vn\'n এবং ফেজ A এর ভোল্টেজ Van\' নির্ণয় করুন।'
      },
      solutionSteps: [
        {
          stepNumber: 1,
          description: {
            en: 'Calculate branch admittances:\nYa = 1 / 10 = 0.10 S\nYb = 1 / 20 = 0.05 S\nYc = 1 / 20 = 0.05 S\nTotal Admittance Y_sum = Ya + Yb + Yc = 0.10 + 0.05 + 0.05 = 0.20 S.',
            hi: 'शाखा प्रवेश्यता निकालें: Ya = 0.10 S, Yb = 0.05 S, Yc = 0.05 S। कुल प्रवेश्यता = 0.20 S।',
            bn: 'শাখা অ্যাডমিটেন্স নির্ণয়: Ya = ০.১০ S, Yb = ০.০৫ S, Yc = ০.০৫ S। মোট অ্যাডমিটেন্স = ০.২০ S।'
          }
        },
        {
          stepNumber: 2,
          description: {
            en: 'Compute numerator of Millman formula (Van·Ya + Vbn·Yb + Vcn·Yc):\nVan · Ya = 230.9 ∠0° · 0.10 = 23.09 + j0\nVbn · Yb = 230.9 ∠-120° · 0.05 = 11.545 · (-0.5 - j0.866) = -5.77 - j10.00\nVcn · Yc = 230.9 ∠120° · 0.05 = 11.545 · (-0.5 + j0.866) = -5.77 + j10.00\nSum of numerator = (23.09 - 5.77 - 5.77) + j(0 - 10.00 + 10.00) = 11.55 + j0 V·S.',
            hi: 'मिल्मैन अंश का योग करें: (23.09 - 5.77 - 5.77) + j0 = 11.55 + j0 V·S।',
            bn: 'মিলম্যান লবের যোগফল: (২৩.০৯ - ৫.৭৭ - ৫.৭৭) + j০ = ১১.৫৫ + j০ V·S।'
          }
        },
        {
          stepNumber: 3,
          description: {
            en: 'Calculate neutral displacement voltage Vn\'n:\nVn\'n = (11.55 + j0) / 0.20 = +57.75 ∠0° V.\nThe load star point has physically shifted by 57.75 V toward Phase A!',
            hi: 'न्यूट्रल विस्थापन Vn\'n = 11.55 / 0.20 = +57.75 ∠0° V। स्टार बिंदु 57.75 V फेज A की ओर खिसक गया है।',
            bn: 'নিউট্রাল স্থানচ্যুতি Vn\'n = ১১.৫৫ / ০.২০ = +৫৭.৭৫ ∠০° V। স্টার পয়েন্টটি ফেজ A এর দিকে ৫৭.৭৫ V সরে গেছে।'
          }
        },
        {
          stepNumber: 4,
          description: {
            en: 'Compute actual voltage on Phase A (Van\'):\nVan\' = Van - Vn\'n = (230.94 - 57.75) ∠0° = 173.19 ∠0° V.\nNotice that Phase A voltage drops from 231 V down to 173.2 V because of its heavy load.',
            hi: 'फेज A पर वास्तविक वोल्टेज: Van\' = 230.94 - 57.75 = 173.19 V। अधिक लोड के कारण फेज A वोल्टेज घटकर 173.2 V रह गया।',
            bn: 'ফেজ A এর প্রকৃত ভোল্টেজ: Van\' = ২৩০.৯৪ - ৫৭.৭৫ = ১৭৩.১৯ V। অতিরিক্ত লোডের কারণে ফেজ A এর ভোল্টেজ কমে ১৭৩.২ V হয়েছে।'
          }
        }
      ]
    },
    {
      id: 'we-ch14-l04-02',
      title: {
        en: 'Broken Neutral Overvoltage Assessment in Building Distribution',
        hi: 'भवन वितरण प्रणाली में टूटे न्यूट्रल का ओवरवोल्टेज मूल्यांकन',
        bn: 'ভবন বিদ্যুৎ বিতরণ ব্যবস্থায় ছেঁড়া নিউট্রালের ওভারভোল্টেজ মূল্যায়ন'
      },
      problem: {
        en: 'In a 400 V (line-to-line), 50 Hz, 4-wire distribution system, the main neutral wire breaks open. The star-connected loads on the three phases are pure resistances: Ra = 10 Ω (heavy load), Rb = 100 Ω, and Rc = 100 Ω. Determine: (a) The floating neutral displacement voltage Vn\'n using Millman\'s Theorem, and (b) The line-to-neutral voltages experienced by each phase load.',
        hi: 'एक 400 V, 50 Hz 4-तार वितरण प्रणाली में मुख्य न्यूट्रल तार टूट जाता है। लोड विशुद्ध प्रतिरोधी हैं: Ra = 10 Ω (भारी लोड), Rb = 100 Ω, और Rc = 100 Ω। ज्ञात करें: (a) फ्लोटिंग न्यूट्रल विस्थापन Vn\'n, और (b) प्रत्येक फेज लोड पर वास्तविक वोल्टेज।',
        bn: 'একটি ৪০০ V, ৫০ Hz ৪-তার বিতরণ ব্যবস্থায় প্রধান নিউট্রাল তারটি বিচ্ছিন্ন হয়ে যায়। ফেজগুলির লোড বিশুদ্ধ রোধীয়: Ra = ১০ Ω (ভারী লোড), Rb = ১০০ Ω, এবং Rc = ১০০ Ω। নির্ণয় করুন: (a) মিলম্যান উপপাদ্য ব্যবহার করে ভাসমান নিউট্রাল বিভব Vn\'n, এবং (b) প্রতিটি ফেজ লোডের বাস্তব ভোল্টেজ।'
      },
      solutionSteps: [
        {
          stepNumber: 1,
          description: {
            en: 'Given source phase voltages (Van = 230.94 ∠0° V, Vbn = 230.94 ∠-120° V, Vcn = 230.94 ∠120° V). Compute branch admittances:\nYa = 1 / 10 = 0.10 S\nYb = 1 / 100 = 0.01 S\nYc = 1 / 100 = 0.01 S\nTotal admittance ΣY = Ya + Yb + Yc = 0.10 + 0.01 + 0.01 = 0.12 S.',
            hi: 'स्रोत फेज वोल्टेज 230.94 V हैं। प्रवेश्यता निकालें: Ya = 0.10 S, Yb = 0.01 S, Yc = 0.01 S। कुल ΣY = 0.12 S।',
            bn: 'সোর্স ফেজ ভোল্টেজ ২৩০.৯৪ V। অ্যাডমিটেন্স নির্ণয়: Ya = ০.১০ S, Yb = ০.০১ S, Yc = ০.০১ S। মোট ΣY = ০.১২ S।'
          }
        },
        {
          stepNumber: 2,
          description: {
            en: 'Compute current terms in Millman numerator:\nVan·Ya = (230.94 + j0) · 0.10 = 23.094 + j0 A\nVbn·Yb = 230.94·(-0.5 - j0.8660) · 0.01 = -1.155 - j2.00 A\nVcn·Yc = 230.94·(-0.5 + j0.8660) · 0.01 = -1.155 + j2.00 A\nNumerator sum = (23.094 - 1.155 - 1.155) + j(0 - 2.00 + 2.00) = 20.784 + j0 A.',
            hi: 'मिल्मैन अंश का मान: 23.094 - 1.155 - 1.155 = 20.784 + j0 A।',
            bn: 'মিলম্যান লবের মান: ২৩.০৯৪ - ১.১৫৫ - ১.১৫৫ = ২০.৭৮৪ + j০ A।'
          }
        },
        {
          stepNumber: 3,
          description: {
            en: 'Compute neutral displacement voltage Vn\'n:\nVn\'n = (20.784 + j0) / 0.12 = +173.20 ∠0° V.\nThe floating neutral shifts by a massive 173.2 V towards Phase A!',
            hi: 'न्यूट्रल विस्थापन Vn\'n = 20.784 / 0.12 = +173.20 ∠0° V। न्यूट्रल बिंदु 173.2 V फेज A की ओर खिसक गया है।',
            bn: 'নিউট্রাল স্থানচ্যুতি Vn\'n = ২০.৭৮৪ / ০.১২ = +১৭৩.২০ ∠০° V। নিউট্রাল পয়েন্টটি ১৭৩.২ V ফেজ A এর দিকে সরে গেছে।'
          }
        },
        {
          stepNumber: 4,
          description: {
            en: 'Calculate operating phase voltages across the equipment:\nVan\' = Van - Vn\'n = 230.94 - 173.20 = 57.74 V (Under-voltage brownout on heavy load)\nVbn\' = Vbn - Vn\'n = (-115.47 - j200.0) - (173.20 + j0) = -288.67 - j200.0 V => |Vbn\'| = √(288.67² + 200.0²) = 351.2 V!\nVcn\' = Vcn - Vn\'n = (-115.47 + j200.0) - (173.20 + j0) = -288.67 + j200.0 V => |Vcn\'| = 351.2 V!\nCRITICAL SAFETY OBSERVATION: The 230 V single-phase loads on Phases B and C suffer catastrophic overvoltages of 351.2 V (over 52% over-voltage), destroying power supplies and household electronics instantly without fast-acting neutral protection.',
            hi: 'वास्तविक वोल्टेज: Van\' = 57.7 V (अंडर-वोल्टेज)। Vbn\' = 351.2 V और Vcn\' = 351.2 V! फेजों B और C पर 351.2 V का घातक ओवरवोल्टेज उत्पन्न होता है जो सभी 230 V उपकरणों को तुरंत जला देगा।',
            bn: 'বাস্তব ভোল্টেজ: Van\' = ৫৭.৭ V (আন্ডার-ভোল্টেজ)। Vbn\' = ৩৫১.২ V এবং Vcn\' = ৩৫১.২ V! ফেজ B এবং C-তে ৩৫১.২ V এর মারাত্মক ওভারভোল্টেজ সৃষ্টি হয় যা সমস্ত ২৩০ V সরঞ্জাম তাৎক্ষণিকভাবে পুড়িয়ে ফেলবে।'
          }
        }
      ]
    }
  ],
  importantPoints: {
    en: [
      'In a 3-wire star system without neutral, Millman\'s Theorem provides the exact potential difference between load neutral and source neutral: Vn\'n = Σ(Vk·Yk) / Σ(Yk).',
      'If the load is balanced (Ya = Yb = Yc), the neutral displacement voltage Vn\'n is identically zero.',
      'A broken neutral in a four-wire system causes the floating star point to shift towards the most heavily loaded phase, producing destructive overvoltages on lightly loaded phases.',
      'Neutral Voltage Displacement (NVD) protection relays (ANSI 59N) detect floating neutral faults in power systems.'
    ],
    hi: [
      'न्यूट्रल-रहित 3-तार स्टार में मिल्मैन प्रमेय से लोड न्यूट्रल और स्रोत न्यूट्रल का विभवांतर निकलता है: Vn\'n = Σ(Vk·Yk) / Σ(Yk)।',
      'संतुलित लोड होने पर न्यूट्रल विस्थापन Vn\'n सदैव शून्य होता है।',
      'न्यूट्रल टूटने पर हल्का लोड झेल रहे फेजों पर वोल्टेज बढ़कर लाइन वोल्टेज के करीब पहुंच जाता है, जिससे उपकरण जल जाते हैं।',
      'फ्लोटिंग न्यूट्रल दोष का पता लगाने के लिए ANSI 59N न्यूट्रल वोल्टेज विस्थापन रिले का उपयोग किया जाता है।'
    ],
    bn: [
      'নিউট্রালবিহীন ৩-তার স্টারে মিলম্যান উপপাদ্যের সাহায্যে লোড নিউট্রাল ও সোর্স নিউট্রালের বিভব পার্থক্য নির্ণয় করা যায়: Vn\'n = Σ(Vk·Yk) / Σ(Yk)।',
      'লোড সুষম হলে নিউট্রাল স্থানচ্যুতি Vn\'n সম্পূর্ণ শূন্য হয়।',
      'নিউট্রাল তার ছিঁড়ে গেলে হালকা লোডের ফেজগুলিতে ভোল্টেজ মারাত্মক বেড়ে গিয়ে যন্ত্রপাতি পুড়ে যায়।',
      'ভাসমান নিউট্রাল ত্রুটি শনাক্ত করতে ANSI 59N রিলে ব্যবহৃত হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistake: Using impedances Z instead of admittances Y = 1/Z in Millman\'s formula. Correction: Millman\'s Theorem is a nodal admittance equation; you must invert impedances to admittances before multiplying.',
      'Mistake: Assuming a broken neutral drops voltage on all phases to zero. Correction: Voltages do not drop to zero; they redistribute across line-to-line voltages, dangerously over-volting lightly loaded phases.',
      'Mistake: Neglecting phase angles when summing the terms in Millman\'s numerator. Correction: Voltages are phasors (120° apart) and admittances can be complex.'
    ],
    hi: [
      'त्रुटि: मिल्मैन सूत्र में प्रतिबाधा Z का सीधे उपयोग करना। सुधार: पहले प्रतिबाधा को प्रवेश्यता Y = 1/Z में बदलें।',
      'त्रुटि: यह सोचना कि न्यूट्रल टूटने से सभी फेजों पर वोल्टेज शून्य हो जाएगा। सुधार: वोल्टेज शून्य नहीं होता, बल्कि हल्के लोड वाले फेजों पर खतरनाक रूप से 400 V तक बढ़ जाता है।',
      'त्रुटि: मिल्मैन के अंश को जोड़ते समय कोणों की उपेक्षा करना। सुधार: वोल्टेज फेजर होते हैं, इसलिए सदिश रूप में जोड़ना आवश्यक है।'
    ],
    bn: [
      'ভুল: মিলম্যানের সূত্রে অ্যাডমিটেন্স Y = 1/Z এর বদলে সরাসরি ইম্পিডেন্স Z বসানো। সংশোধন: মিলম্যান নোডাল সূত্রে সর্বদা অ্যাডমিটেন্স ব্যবহার করতে হয়।',
      'ভুল: নিউট্রাল ছিঁড়ে গেলে সব ফেজে ভোল্টেজ শূন্য হয়ে যাবে ভাবা। সংশোধন: ভোল্টেজ শূন্য হয় না, বরং হালকা লোডের ফেজগুলিতে বিপজ্জনকভাবে ৪০০ V পর্যন্ত বেড়ে যায়।',
      'ভুল: মিলম্যান লব যোগ করার সময় ফেজ কোণ অগ্রাহ্য করা। সংশোধন: ভোল্টেজগুলি ভেক্টর হওয়ায় এদের জটিল রাশির নিয়মে যোগ করতে হবে।'
    ]
  },
  keyTakeaways: {
    en: [
      'Millman\'s Theorem is the premier analytical tool for ungrounded three-phase star networks.',
      'A solid, unswitched neutral conductor is essential to safeguard low-voltage single-phase consumer equipment.',
      'Floating neutral events cause more equipment damage in commercial facilities than lightning surges.'
    ],
    hi: [
      'मिल्मैन का प्रमेय अनग्राउंडेड थ्री-फेज स्टार नेटवर्कों के विश्लेषण का सबसे महत्वपूर्ण साधन है।',
      'एक मजबूत, बिना स्विच वाला न्यूट्रल तार सिंगल-फेज उपकरणों की सुरक्षा के लिए अनिवार्य है।',
      'कमर्शियल भवनों में आकाशीय बिजली की तुलना में फ्लोटिंग न्यूट्रल से कहीं अधिक उपकरणों की क्षति होती है।'
    ],
    bn: [
      'আনগ্রাউন্ডেড থ্রি-ফেজ স্টার নেটওয়ার্ক বিশ্লেষণের জন্য মিলম্যান উপপাদ্য একটি অপরিহার্য গাণিতিক হাতিয়ার।',
      'একক-ফেজ সরঞ্জাম রক্ষার জন্য একটি নিরবচ্ছিন্ন সলিড নিউট্রাল তার অত্যন্ত জরুরি।',
      'বাণিজ্যিক ভবনে বজ্রপাতের চেয়েও বেশি ক্ষয়ক্ষতি হয় ভাসমান নিউট্রাল দুর্ঘটনার কারণে।'
    ]
  },
  practiceQuestions: [
    {
      id: 'pq-ch14-l04-01',
      question: {
        en: 'In an ungrounded 3-wire star load, if Phase A impedance is identical to Phase B and Phase C (Za = Zb = Zc = 15 Ω), prove mathematically using Millman\'s Theorem that the neutral displacement voltage Vn\'n must equal zero.',
        hi: 'एक 3-तार स्टार लोड में यदि तीनों प्रतिबाधाएं समान हों (Za = Zb = Zc = 15 Ω), तो मिल्मैन प्रमेय से सिद्ध करें कि न्यूट्रल विस्थापन Vn\'n शून्य होगा।',
        bn: 'একটি ৩-তার স্টার লোডে তিনটি ইম্পিডেন্স সমান হলে (Za = Zb = Zc = ১৫ Ω), মিলম্যান উপপাদ্য প্রয়োগ করে গাণিতিকভাবে প্রমাণ করুন যে নিউট্রাল স্থানচ্যুতি Vn\'n অবশ্যই শূন্য হবে।'
      },
      hint: {
        en: 'Factor out admittance Y from numerator: Y · (Van + Vbn + Vcn) / (3Y). Since Van + Vbn + Vcn = 0 for balanced supply, Vn\'n = 0.',
        hi: 'अंश से Y को बाहर निकालें: Y·(Van + Vbn + Vcn) / (3Y)। चूंकि संतुलित सप्लाई में Van + Vbn + Vcn = 0 होता है, अतः Vn\'n = 0।',
        bn: 'লব থেকে Y কমন নিন: Y·(Van + Vbn + Vcn) / (3Y)। সুষম সরবরাহে ভোল্টেজগুলির যোগফল শূন্য হওয়ায় Vn\'n = ০ হয়।'
      }
    },
    {
      id: 'pq-ch14-l04-02',
      question: {
        en: 'A 230V incandescent lamp (100W, R = 529 Ω) is connected between Phase A and neutral, while a 230V electric kettle (2000W, R = 26.5 Ω) is connected between Phase B and neutral. If the supply neutral disconnects, explain why the 100W lamp burns out immediately.',
        hi: 'एक 100W बल्ब (529 Ω) फेज A और न्यूट्रल के बीच तथा 2000W केतली (26.5 Ω) फेज B और न्यूट्रल के बीच लगी है। न्यूट्रल कट जाने पर 100W का बल्ब तुरंत क्यों जल जाता है?',
        bn: 'একটি ১০০W বাল্ব (৫২৯ Ω) ফেজ A ও নিউট্রালে এবং একটি ২০০০W কেটলি (২৬.৫ Ω) ফেজ B ও নিউট্রালে যুক্ত। নিউট্রাল তার বিচ্ছিন্ন হলে ১০০W বাল্বটি সাথে সাথে কেন পুড়ে যায়?'
      },
      hint: {
        en: 'The two devices are now in series across the 400V line voltage Vab. By voltage division, V_lamp = 400 · [529 / (529 + 26.5)] = 380.9 V!',
        hi: 'दोनों उपकरण 400 V के बीच सीरीज में जुड़ जाते हैं। वोल्टेज विभाजन से बल्ब पर 400 · (529 / 555.5) = 380.9 V आ जाता है!',
        bn: 'যন্ত্র দুটি ৪০০ V লাইনের মাঝে সিরিজে যুক্ত হয়। ভোল্টেজ ডিভাইডার সূত্রে বাল্বের ওপর ৪০০ · [৫২৯ / ৫৫৫.৫] = ৩৮০.৯ V ভোল্টেজ চলে আসে!'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch14-l04-01',
      question: {
        en: 'In Millman\'s Theorem for three-phase neutral displacement, what do the terms Ya, Yb, and Yc represent?',
        hi: 'थ्री-फेज न्यूट्रल विस्थापन के लिए मिल्मैन प्रमेय में पद Ya, Yb, Yc क्या दर्शाते हैं?',
        bn: 'থ্রি-ফেজ নিউট্রাল স্থানচ্যুতির মিলম্যান উপপাদ্যে Ya, Yb, Yc পদগুলি কী নির্দেশ করে?'
      },
      options: [
        { en: 'Phase branch admittances, defined as the reciprocal of branch impedances (Y = 1 / Z)', hi: 'फेज शाखा प्रवेश्यता, जो प्रतिबाधा का व्युत्क्रम होती है (Y = 1 / Z)', bn: 'ফেজ শাখা অ্যাডমিটেন্স, যা ইম্পিডেন্সের বিপরীত রাশি (Y = 1 / Z)' },
        { en: 'Phase branch capacitive reactances only', hi: 'केवल धारिता प्रतिघात', bn: 'শুধুমাত্র ক্যাপাসিটিভ রিঅ্যাক্ট্যান্স' },
        { en: 'Transformer winding turns ratios', hi: 'ट्रांसफार्मर वाइंडिंग टर्न अनुपात', bn: 'ট্রান্সফরমার ওয়াইন্ডিং টার্ন অনুপাত' },
        { en: 'Neutral conductor earth resistances', hi: 'न्यूट्रल चालक अर्थ प्रतिरोध', bn: 'নিউট্রাল তারের আর্থ রেজিস্ট্যান্স' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Millman\'s Theorem is formulated using node-voltage analysis where each branch current is expressed as admittance times branch voltage: I = Y · V, where Y = 1/Z.',
        hi: 'मिल्मैन प्रमेय नोड-वोल्टेज विश्लेषण पर आधारित है जिसमें धारा I = Y · V होती है और Y = 1/Z (प्रवेश्यता) होता है।',
        bn: 'মিলম্যানের উপপাদ্য নোডাল অ্যানালাইসিসের ওপর প্রতিষ্ঠিত যেখানে কারেন্ট I = Y · V এবং Y = 1/Z (অ্যাডমিটেন্স)।'
      }
    },
    {
      id: 'mcq-ch14-l04-02',
      question: {
        en: 'If a balanced three-phase star load has branch admittances Ya = Yb = Yc = 0.1 S, what is the value of the neutral displacement voltage Vn\'n?',
        hi: 'यदि एक संतुलित 3-फेज स्टार लोड की शाखा प्रवेश्यता Ya = Yb = Yc = 0.1 S है, तो न्यूट्रल विस्थापन वोल्टेज Vn\'n का मान क्या होगा?',
        bn: 'যদি একটি সুষম ৩-ফেজ স্টার লোডের প্রতি শাখার অ্যাডমিটেন্স Ya = Yb = Yc = ০.১ S হয়, তবে নিউট্রাল স্থানচ্যুতি ভোল্টেজ Vn\'n কত হবে?'
      },
      options: [
        { en: 'Vn\'n = 230.9 V', hi: 'Vn\'n = 230.9 V', bn: 'Vn\'n = ২৩০.৯ V' },
        { en: 'Vn\'n = 400.0 V', hi: 'Vn\'n = 400.0 V', bn: 'Vn\'n = ৪০০.০ V' },
        { en: 'Vn\'n = 0 V (Zero Volts)', hi: 'Vn\'n = 0 V (शून्य वोल्ट)', bn: 'Vn\'n = ০ V (শূন্য ভোল্ট)' },
        { en: 'Vn\'n = 133.3 V', hi: 'Vn\'n = 133.3 V', bn: 'Vn\'n = ১৩৩.৩ V' }
      ],
      correctAnswer: 2,
      explanation: {
        en: 'Vn\'n = Y · (Van + Vbn + Vcn) / (3Y). Since the supply is balanced, Van + Vbn + Vcn = 0 identically, so Vn\'n = 0 V.',
        hi: 'Vn\'n = Y·(Van + Vbn + Vcn) / (3Y)। चूंकि Van + Vbn + Vcn = 0 होता है, अतः Vn\'n = 0 V।',
        bn: 'Vn\'n = Y·(Van + Vbn + Vcn) / (3Y)। যেহেতু সুষম ভোল্টেজের যোগফল শূন্য, তাই Vn\'n = ০ V হয়।'
      }
    },
    {
      id: 'mcq-ch14-l04-03',
      question: {
        en: 'What happens to the load neutral potential N\' if Phase A of an isolated star load becomes a dead short circuit to Line A (Za -> 0)?',
        hi: 'यदि पृथक स्टार लोड का फेज A लाइन A से सीधे शॉर्ट सर्किट (Za -> 0) हो जाए, तो लोड न्यूट्रल विभव N\' का क्या होगा?',
        bn: 'যদি একটি পৃথক স্টার লোডের ফেজ A লাইন A এর সাথে শর্ট সার্কিট (Za -> 0) হয়ে যায়, তবে লোড নিউট্রাল পয়েন্ট N\' এর কী হবে?'
      },
      options: [
        { en: 'N\' collapses completely to Line A potential, so Van\' becomes 0V while Vbn\' and Vcn\' surge to full line-to-line voltages (400V)', hi: 'N\' पूरी तरह से लाइन A के विभव पर आ जाता है, जिससे Van\' 0V हो जाता है और Vbn\', Vcn\' बढ़कर 400V लाइन वोल्टेज हो जाते हैं', bn: 'N\' সম্পূর্ণভাবে লাইন A এর বিভবে চলে আসে, ফলে Van\' শূন্য হয় এবং Vbn\' ও Vcn\' বেড়ে পূর্ণ লাইন ভোল্টেজ (৪০০V) হয়' },
        { en: 'N\' remains firmly at 0 V', hi: 'N\' मजबूती से 0 V पर रहता है', bn: 'N\' দৃঢ়ভাবে ০ V এ থাকে' },
        { en: 'All three load branch voltages drop to zero', hi: 'तीनों लोड वोल्टेज शून्य हो जाते हैं', bn: 'তিনটি লোড ভোল্টেজই শূন্যে নেমে যায়' },
        { en: 'The supply frequency drops to zero', hi: 'सप्लाई आवृत्ति शून्य हो जाती है', bn: 'সাপ্লাই ফ্রিকোয়েন্সি শূন্য হয়ে যায়' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'When Za = 0, node N\' becomes node A. Therefore, load branch B experiences voltage Vbn\' = Vbn - Van = Vba (full line voltage of 400V), and load branch C experiences Vca.',
        hi: 'Za = 0 होने पर लोड न्यूट्रल N\' सीधे लाइन A बन जाता है। अतः अन्य दो शाखाएं सीधे लाइन-टू-लाइन वोल्टेज (400 V) का अनुभव करती हैं।',
        bn: 'Za = ০ হলে N\' সরাসরি লাইন A তে রূপান্তরিত হয়। ফলে বাকি দুটি শাখা সরাসরি লাইন ভোল্টেজ Vba এবং Vca (৪০০V) এর সম্মুখীন হয়।'
      }
    },
    {
      id: 'mcq-ch14-l04-04',
      question: {
        en: 'During a broken neutral fault on a 400V / 230V commercial distribution circuit, why do low-wattage devices experience destructive overvoltage while high-wattage devices experience severe undervoltage?',
        hi: 'न्यूट्रल टूटने पर कम वाट वाले उपकरणों पर अत्यधिक वोल्टेज और अधिक वाट वाले उपकरणों पर कम वोल्टेज क्यों आता है?',
        bn: 'নিউট্রাল বিচ্ছিন্ন হলে কম ওয়াটের যন্ত্রপাতিতে অতিরিক্ত ভোল্টেজ এবং বেশি ওয়াটের যন্ত্রপাতিতে অতি নিম্ন ভোল্টেজ দেখা যায় কেন?'
      },
      options: [
        { en: 'Low-wattage devices have high resistance (R = V²/P); when placed in series across 400V with low-resistance high-wattage devices, the voltage divider places nearly all 400V across the high resistance', hi: 'कम वाट वाले उपकरणों का प्रतिरोध अधिक होता है (R = V²/P); 400V पर सीरीज में जुड़ने पर वोल्टेज विभाजन से अधिकांश वोल्टेज उच्च प्रतिरोध पर आ जाता है', bn: 'কম ওয়াটের যন্ত্রের রোধ অনেক বেশি (R = V²/P); ফলে ৪০০V লাইনে সিরিজে যুক্ত হলে ভোল্টেজ ডিভাইডার নিয়মে সিংহভাগ ভোল্টেজ বেশি রোধের ওপর এসে পড়ে' },
        { en: 'Because high-wattage devices absorb all reactive power', hi: 'क्योंकि उच्च वाट वाले उपकरण सारी रिएक्टिव शक्ति सोख लेते हैं', bn: 'কারণ বেশি ওয়াটের যন্ত্র সব রিঅ্যাক্টিভ পাওয়ার টেনে নেয়' },
        { en: 'Because low-wattage devices run on direct current', hi: 'क्योंकि कम वाट वाले उपकरण डीसी पर चलते हैं', bn: 'কারণ কম ওয়াটের যন্ত্র ডিসিতে চলে' },
        { en: 'Because the transformer secondary magnetic core saturates on high wattage', hi: 'क्योंकि ट्रांसफार्मर कोर संतृप्त हो जाता है', bn: 'কারণ ট্রান্সফরমার কোর স্যাচুরেটেড হয়ে যায়' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Resistance is inversely proportional to rated power (R = V²/P). In a series circuit across 400V, voltage divides in direct proportion to resistance: V_device = 400 · [R_high / (R_high + R_low)], subjecting the high-resistance device to nearly 400V.',
        hi: 'प्रतिरोध क्षमता के व्युत्क्रमानुपाती होता है (R = V²/P)। सीरीज में जुड़ने पर अधिक प्रतिरोध वाले छोटे उपकरण पर अधिकांश 400 V आ जाता है और वह जल जाता है।',
        bn: 'রোধ ক্ষমতার ব্যস্তানুপাতিক (R = V²/P)। সিরিজে যুক্ত থাকলে ভোল্টেজ ডিভাইডার সূত্রানুসারে উচ্চ রোধের ছোট যন্ত্রটি প্রায় ৪০০ V গ্রহণ করে ধ্বংস হয়ে যায়।'
      }
    },
    {
      id: 'mcq-ch14-l04-05',
      question: {
        en: 'Which protective relay function code (ANSI standard) designates Neutral Voltage Displacement (NVD) protection?',
        hi: 'कौन सा ANSI सुरक्षा रिले कोड न्यूट्रल वोल्टेज विस्थापन (NVD) संरक्षण को दर्शाता है?',
        bn: 'কোন ANSI প্রোটেকশন রিলে কোডটি নিউট্রাল ভোল্টেজ ডিসপ্লেসমেন্ট (NVD) সুরক্ষা নির্দেশ করে?'
      },
      options: [
        { en: 'ANSI 59N', hi: 'ANSI 59N', bn: 'ANSI 59N' },
        { en: 'ANSI 50', hi: 'ANSI 50', bn: 'ANSI 50' },
        { en: 'ANSI 81', hi: 'ANSI 81', bn: 'ANSI 81' },
        { en: 'ANSI 21', hi: 'ANSI 21', bn: 'ANSI 21' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'ANSI 59 is Overvoltage relay; ANSI 59N specifically designates Neutral Overvoltage / Neutral Voltage Displacement (NVD) protection.',
        hi: 'ANSI 59 ओवरवोल्टेज रिले है और 59N विशेष रूप से न्यूट्रल ओवरवोल्टेज / न्यूट्रल वोल्टेज विस्थापन (NVD) रिले को दर्शाता है।',
        bn: 'ANSI 59 হলো ওভারভোল্টেজ রিলে এবং 59N বিশেষভাবে নিউট্রাল ভোল্টেজ ডিসপ্লেসমেন্ট (NVD) সুরক্ষায় ব্যবহৃত হয়।'
      }
    },
    {
      id: 'mcq-ch14-l04-06',
      question: {
        en: 'How is the neutral displacement voltage measured on an ungrounded medium-voltage system using instrument transformers?',
        hi: 'उपकरण ट्रांसफार्मरों का उपयोग करके अनग्राउंडेड मध्यम-वोल्टेज प्रणाली पर न्यूट्रल विस्थापन वोल्टेज कैसे मापा जाता है?',
        bn: 'ইন্সট্রুমেন্ট ট্রান্সফরমার ব্যবহার করে একটি আনগ্রাউন্ডেড মিডিয়াম-ভোল্টেজ সিস্টেমে নিউট্রাল ডিসপ্লেসমেন্ট ভোল্টেজ কীভাবে পরিমাপ করা হয়?'
      },
      options: [
        { en: 'By connecting three single-phase voltage transformer secondaries in an Open-Delta (Broken-Delta) configuration to sum the three phase voltages (Va + Vb + Vc = 3·V0)', hi: 'तीन एकल-फेज VT द्वितीयक को ओपन-डेल्टा (ब्रोकन-डेल्टा) में जोड़कर (Va + Vb + Vc = 3·V0)', bn: 'তিনটি একক-ফেজ VT সেকেন্ডারিকে ওপেন-ডেল্টা (ব্রোকেন-ডেল্টা) সংযোগে যুক্ত করে (Va + Vb + Vc = 3·V0)' },
        { en: 'By placing a DC shunt ammeter in the earth pit', hi: 'अर्थ पिट में डीसी शंट अमीटर लगाकर', bn: 'আর্থ পিটে ডিসি শান্ট অ্যামিটার বসিয়ে' },
        { en: 'By connecting a current transformer on Phase A only', hi: 'केवल फेज A पर करंट ट्रांसफार्मर लगाकर', bn: 'শুধুমাত্র ফেজ A তে কারেন্ট ট্রান্সফরমার লাগিয়ে' },
        { en: 'By measuring the battery backup terminal voltage', hi: 'बैटरी बैकअप टर्मिनल वोल्टेज मापकर', bn: 'ব্যাটারি ব্যাকআপ টার্মিনাল ভোল্টেজ পরিমাপ করে' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'A broken-delta voltage transformer connection sums the secondary voltages vectorially: V_broken_delta = Va + Vb + Vc = 3·V0. Under normal balanced conditions this equals 0 V; under neutral displacement or ground fault it produces a strong signal to trip the ANSI 59N relay.',
        hi: 'ब्रोकन-डेल्टा कनेक्शन तीनों द्वितीयक वोल्टेज का योग करता है: Va + Vb + Vc = 3·V0। सामान्य स्थिति में यह 0V होता है, लेकिन फॉल्ट या न्यूट्रल विस्थापन में यह रिले को ट्रिप सिग्नल देता है।',
        bn: 'ব্রোকেন-ডেল্টা সংযোগে সেকেন্ডারি ভোল্টেজগুলির ভেক্টর যোগফল পাওয়া যায়: Va + Vb + Vc = 3·V0। স্বাভাবিক অবস্থায় এটি ০V থাকে, কিন্তু নিউট্রাল বিচ্যুতি বা ফল্টে রিলে ট্রিপ করায়।'
      }
    },
    {
      id: 'mcq-ch14-l04-07',
      question: {
        en: 'In an isolated star load with Van = 230 ∠0° V, Vbn = 230 ∠-120° V, and Vcn = 230 ∠120° V, if the neutral shifts to Vn\'n = 50 ∠0° V, what is the new voltage Van\' across load branch A?',
        hi: 'यदि न्यूट्रल विस्थापन Vn\'n = 50 ∠0° V हो, तो लोड शाखा A पर नया वोल्टेज Van\' क्या होगा?',
        bn: 'যদি নিউট্রাল স্থানচ্যুতি Vn\'n = ৫০ ∠০° V হয়, তবে লোড শাখা A তে নতুন ভোল্টেজ Van\' কত হবে?'
      },
      options: [
        { en: '280 ∠0° V', hi: '280 ∠0° V', bn: '২৮০ ∠০° V' },
        { en: '180 ∠0° V', hi: '180 ∠0° V', bn: '১৮০ ∠০° V' },
        { en: '230 ∠-30° V', hi: '230 ∠-30° V', bn: '২৩০ ∠-৩০° V' },
        { en: '115 ∠0° V', hi: '115 ∠0° V', bn: '১১৫ ∠০° V' }
      ],
      correctAnswer: 1,
      explanation: {
        en: 'Van\' = Van - Vn\'n = 230 ∠0° - 50 ∠0° = (230 - 50) ∠0° = 180 ∠0° V.',
        hi: 'Van\' = Van - Vn\'n = 230 - 50 = 180 ∠0° V।',
        bn: 'Van\' = Van - Vn\'n = ২৩০ ∠০° - ৫০ ∠০° = (২৩০ - ৫০) ∠০° = ১৮০ ∠০° V।'
      }
    },
    {
      id: 'mcq-ch14-l04-08',
      question: {
        en: 'Why does grounding a distribution transformer neutral conductor eliminate floating neutral overvoltages during unbalanced load operation?',
        hi: 'वितरण ट्रांसफार्मर के न्यूट्रल को अर्थ करने से असंतुलित लोड के दौरान फ्लोटिंग न्यूट्रल ओवरवोल्टेज क्यों समाप्त हो जाता है?',
        bn: 'ডিস্ট্রিবিউশন ট্রান্সফরমারের নিউট্রাল তার আর্থিং করার ফলে ভারসাম্যহীন লোডেও ভাসমান নিউট্রাল ওভারভোল্টেজ দূর হয় কেন?'
      },
      options: [
        { en: 'The low-impedance earth/neutral conductor firmly clamps the star point to ground potential (0 V), fixing phase voltages at nominal 230 V regardless of load unbalance', hi: 'कम प्रतिबाधा वाला अर्थ/न्यूट्रल चालक स्टार बिंदु को 0 V पर मजबूती से स्थिर रखता है, जिससे लोड असंतुलन के बावजूद फेज वोल्टेज 230 V पर नियत रहता है', bn: 'কম ইম্পিডেন্সের আর্থ/নিউট্রাল তার স্টার পয়েন্টকে ০ V বিভবে দৃঢ়ভাবে আবদ্ধ রাখে, ফলে ভারসাম্যহীনতা সত্ত্বেও প্রতিটি ফেজে ২৩০ V স্থির থাকে' },
        { en: 'Because ground wires convert all single-phase loads into three-phase motors', hi: 'क्योंकि अर्थ तार सभी लोड को मोटर में बदल देता है', bn: 'কারণ আর্থ তার সব লোডকে মোটরে রূপান্তর করে' },
        { en: 'Because it doubles the system frequency to 100 Hz', hi: 'क्योंकि यह प्रणाली की आवृत्ति को 100 Hz कर देता है', bn: 'কারণ এটি ফ্রিকোয়েন্সি দ্বিগুণ করে' },
        { en: 'Because it forces line currents to become leading rather than lagging', hi: 'क्योंकि यह लाइन धारा को लीडिंग बना देता है', bn: 'কারণ এটি লাইন কারেন্টকে লিডিং বানিয়ে দেয়' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Solid earthing provides a low-impedance path that clamps the neutral point potential strictly to 0 V, preventing N\' from moving and ensuring that phase voltages remain stable.',
        hi: 'ठोस अर्थिंग न्यूट्रल बिंदु को 0 V पर बांधे रखती है, जिससे स्टार बिंदु विस्थापित नहीं होता और फेज वोल्टेज पूरी तरह स्थिर रहते हैं।',
        bn: 'সলিড আর্থিং নিউট্রাল পয়েন্টকে ০ V এ স্থির রাখে, ফলে স্টার পয়েন্ট স্থানচ্যুত হতে পারে না এবং ফেজ ভোল্টেজ সম্পূর্ণ অপরিবর্তিত থাকে।'
      }
    }
  ]
};

export const LESSON_NEUTRAL_DISPLACEMENT_FLOATING_STAR = LESSON_NEUTRAL_DISPLACEMENT_VOLTAGE_UNBALANCE;
