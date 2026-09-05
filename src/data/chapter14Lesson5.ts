import { Lesson } from '../types';

export const LESSON_THREE_PHASE_POWER_MEASUREMENT: Lesson = {
  id: 'lsn-ch14-three-phase-power-measurement',
  topicId: 'tp-three-phase-power-measurement',
  chapterId: 'ch-three-phase',
  order: 5,
  title: {
    en: 'Three-Phase Power Measurement — Wattmeter Methods',
    hi: 'थ्री-फेज शक्ति मापन — वाटमीटर विधियां',
    bn: 'থ্রি-ফেজ পাওয়ার পরিমাপ — ওয়াটমিটার পদ্ধতি'
  },
  description: {
    en: 'Master the classical Two-Wattmeter Method for three-phase three-wire power measurement governed by André Blondel\'s Theorem (1893). Derive active power (W1 + W2), reactive power √3(W1 - W2), operating power factor angle tan(ϕ) = √3·(W1 - W2)/(W1 + W2), and negative meter deflection phenomena when power factor drops below 0.50 lagging.',
    hi: 'आंद्रे ब्लोंडेल प्रमेय (1893) द्वारा शासित थ्री-फेज तीन-तार शक्ति मापन की क्लासिकल द्वि-वाटमीटर विधि का अध्ययन करें। कुल सक्रिय शक्ति (W1 + W2), प्रतिघाती शक्ति √3(W1 - W2), पावर फैक्टर कोण tan(ϕ) = √3·(W1 - W2)/(W1 + W2) और 0.50 लैगिंग से कम पावर फैक्टर पर मीटर के पीछे की ओर विक्षेपण (नेगेटिव रीडिंग) को समझें।',
    bn: 'আন্দ্রে ব্লন্ডেলের ১৮৯৩ সালের উপপাদ্য দ্বারা পরিচালিত থ্রি-ফেজ তিন-তার পাওয়ার পরিমাপের ক্ল্যাসিকাল দ্বি-ওয়াটমিটার পদ্ধতি আয়ত্ত করুন। মোট সক্রিয় ক্ষমতা (W1 + W2), প্রতিক্রিয়াশীল ক্ষমতা √3(W1 - W2), পাওয়ার ফ্যাক্টর কোণ tan(ϕ) = √3·(W1 - W2)/(W1 + W2) এবং পাওয়ার ফ্যাক্টর ০.৫০ ল্যাগিংয়ের নিচে নামলে নেগেটিভ রিডিংয়ের কারণ বিশদভাবে জানুন।'
  },
  estimatedMinutes: 50,
  easyExplanation: {
    en: 'How can you measure the total power of three separate electrical phases using only two meters? In 1893, French engineer André Blondel proved mathematically that if you have N wires supplying electrical power, you only ever need N - 1 wattmeters to measure the exact total power! In a 3-wire three-phase system (N = 3), you only need 3 - 1 = 2 wattmeters. You connect the current coil of Meter 1 in Line A and Meter 2 in Line B, and you attach the voltage coils of both meters to the common third line, Line C. Adding the two readings together (W1 + W2) always gives the exact total power, whether the load is balanced or unbalanced! Even more brilliantly, subtracting the two readings lets you instantly calculate the plant\'s power factor without needing an oscilloscope!',
    hi: 'केवल दो मीटर से तीन फेजों की कुल शक्ति कैसे मापी जा सकती है? 1893 में आंद्रे ब्लोंडेल ने सिद्ध किया कि यदि किसी प्रणाली में N तार हैं, तो कुल शक्ति मापने के लिए केवल N - 1 वाटमीटर चाहिए। 3-तार प्रणाली में 3 - 1 = 2 वाटमीटर पर्याप्त हैं! मीटर 1 के करंट कॉइल को लाइन A में और मीटर 2 के करंट कॉइल को लाइन B में जोड़ें, और दोनों के वोल्टेज कॉइल को तीसरे तार (लाइन C) से जोड़ दें। दोनों की रीडिंग का योग (W1 + W2) कुल वास्तविक शक्ति देता है, और दोनों के अंतर से पावर फैक्टर ज्ञात हो जाता है!',
    bn: 'মাত্র দুটি মিটার দিয়ে কীভাবে তিনটি ফেজের মোট ক্ষমতা মাপা যায়? ১৮৯৩ সালে ফরাসি প্রকৌশলী আন্দ্রে ব্লন্ডেল প্রমাণ করেন যে N সংখ্যক তারযুক্ত সিস্টেমে মোট ক্ষমতা মাপতে সর্বদা N - 1 টি ওয়াটমিটার যথেষ্ট। ৩-তার সিস্টেমে তাই ৩ - ১ = ২টি ওয়াটমিটার প্রয়োজন। ১ম মিটারের কারেন্ট কয়েল লাইন A তে এবং ২য় মিটারের কারেন্ট কয়েল লাইন B তে লাগিয়ে উভয় মিটারের ভোল্টেজ কয়েল ৩য় তার লাইন C তে যুক্ত করা হয়। দুটি মিটারের যোগফল (W1 + W2) দেয় মোট ক্ষমতা এবং এদের বিয়োগফল থেকে সরাসরি পাওয়ার ফ্যাক্টর বের করা যায়!'
  },
  detailedExplanation: {
    en: 'Blondel\'s Theorem (1893) states: If electrical energy is supplied to a network through N conductors, the total active power is given by the algebraic sum of the readings of N - 1 wattmeters, provided the voltage coil of each meter is connected between its corresponding line and the common Nth line.\n\n1. Connection Architecture for 3-Phase 3-Wire System:\n   • Wattmeter 1 (W1): Current coil (CC) in Line A; Potential coil (PC) between Line A and Line C (voltage Vac).\n   • Wattmeter 2 (W2): Current coil (CC) in Line B; Potential coil (PC) between Line B and Line C (voltage Vbc).\n   • Line C acts as the common voltage reference node.\n\n2. Phasor Derivation Under Balanced Positive-Sequence (ABC) Conditions:\n   Let line-to-neutral voltages be:\n   Van = Vph ∠0°, Vbn = Vph ∠-120°, Vcn = Vph ∠120°.\n   For balanced inductive load with power factor angle ϕ:\n   Ia = IL ∠-ϕ, Ib = IL ∠(-120° - ϕ), Ic = IL ∠(120° - ϕ).\n\n   • Reading of Wattmeter 1:\n     W1 = |Vac| · |Ia| · cos(∠(Vac, Ia))\n     Note that Vac = -Vca = Van - Vcn = √3·Vph ∠-30° = VL ∠-30°.\n     The angle between Vac (at -30°) and Ia (at -ϕ) is (ϕ - 30°) or (30° - ϕ).\n     Therefore: W1 = VL · IL · cos(30° - ϕ).\n\n   • Reading of Wattmeter 2:\n     W2 = |Vbc| · |Ib| · cos(∠(Vbc, Ib))\n     Vbc = Vbn - Vcn = √3·Vph ∠-90° = VL ∠-90°.\n     The angle between Vbc (at -90°) and Ib (at -120° - ϕ) is (-90° - (-120° - ϕ)) = (30° + ϕ).\n     Therefore: W2 = VL · IL · cos(30° + ϕ).\n\n3. Power and Power Factor Synthesis:\n   • Total Active Power: W1 + W2 = VL·IL·[cos(30°-ϕ) + cos(30°+ϕ)] = VL·IL·[2·cos(30°)·cos(ϕ)] = √3·VL·IL·cos(ϕ) = P_total.\n   • Total Reactive Power: W1 - W2 = VL·IL·[cos(30°-ϕ) - cos(30°+ϕ)] = VL·IL·[2·sin(30°)·sin(ϕ)] = VL·IL·sin(ϕ).\n     Hence: Q_total = √3 · (W1 - W2).\n   • Power Factor Formulation: tan(ϕ) = Q / P = [√3·(W1 - W2)] / (W1 + W2).\n     Therefore: ϕ = arctan(√3 · (W1 - W2) / (W1 + W2)), and cos(ϕ) = cos(arctan(...)).\n\n4. Meter Deflection Behavior Across Power Factor Spectrum:\n   • Unity Power Factor (cos ϕ = 1, ϕ = 0°): W1 = W2 = (√3/2)·VL·IL. Both meters read identically positive.\n   • Power Factor 0.866 lagging (ϕ = 30°): W1 = VL·IL·cos(0°) = VL·IL; W2 = VL·IL·cos(60°) = 0.5·VL·IL (W1 = 2·W2).\n   • Power Factor 0.50 lagging (ϕ = 60°): W1 = VL·IL·cos(-30°) = 0.866·VL·IL; W2 = VL·IL·cos(90°) = 0! Meter 2 reads EXACTLY ZERO.\n   • Power Factor < 0.50 lagging (ϕ > 60°): (30° + ϕ) > 90°, so cos(30° + ϕ) becomes NEGATIVE! Meter 2 deflects backwards against its mechanical zero-pin! To obtain a reading, either the current coil or potential coil terminals must be reversed, and the reading recorded as a NEGATIVE value: P_total = W1 - |W2|.\n   • Zero Power Factor (cos ϕ = 0, ϕ = 90°): W1 = VL·IL·cos(-60°) = +0.5·VL·IL; W2 = VL·IL·cos(120°) = -0.5·VL·IL. W1 = -W2, so W1 + W2 = 0 (zero active power).',
    hi: 'ब्लोंडेल प्रमेय (1893): N-तार प्रणाली में कुल शक्ति मापने के लिए N - 1 वाटमीटर चाहिए। 3-तार प्रणाली में 2 वाटमीटर प्रयुक्त होते हैं:\n\n1. वाटमीटर 1: W1 = VL · IL · cos(30° - ϕ)\n2. वाटमीटर 2: W2 = VL · IL · cos(30° + ϕ)\n3. कुल सक्रिय शक्ति: P = W1 + W2 = √3 · VL · IL · cos(ϕ)\n4. कुल प्रतिघाती शक्ति: Q = √3 · (W1 - W2)\n5. पावर फैक्टर: tan(ϕ) = √3 · (W1 - W2) / (W1 + W2)\n6. विभिन्न पावर फैक्टर पर मीटर का व्यवहार:\n   • यूनिटी PF (ϕ = 0°): W1 = W2 (दोनों समान)\n   • 0.50 PF (ϕ = 60°): W2 = 0 (मीटर 2 शून्य पढ़ेगा)\n   • 0.50 से कम PF (ϕ > 60°): W2 का मान ऋणात्मक हो जाता है (पॉइंटर उल्टी दिशा में जाता है, कॉइल के तार उल्टे करके रीडिंग घटाते हैं)।\n   • शून्य PF (ϕ = 90°): W1 = -W2, कुल P = 0।',
    bn: 'ব্লন্ডেল উপপাদ্য (১৮৯৩): N-তার সিস্টেমে মোট ক্ষমতা মাপতে N - 1 টি ওয়াটমিটার লাগে। ৩-তার সিস্টেমে ২টি ওয়াটমিটার ব্যবহৃত হয়:\n\n১. ১ম ওয়াটমিটার: W1 = VL · IL · cos(30° - ϕ)\n২. ২য় ওয়াটমিটার: W2 = VL · IL · cos(30° + ϕ)\n৩. মোট সক্রিয় ক্ষমতা: P = W1 + W2 = √3 · VL · IL · cos(ϕ)\n৪. মোট প্রতিক্রিয়াশীল ক্ষমতা: Q = √3 · (W1 - W2)\n৫. পাওয়ার ফ্যাক্টর: tan(ϕ) = √3 · (W1 - W2) / (W1 + W2)\n৬. পাওয়ার ফ্যাক্টরের ভিন্ন ভিন্ন মানে মিটারের আচরণ:\n   • ইউনিটি PF (ϕ = ০°): W1 = W2 (উভয় মিটার সমান)\n   • ০.৫০ PF (ϕ = ৬০°): W2 = ০ (২য় মিটার শূন্য প্রদর্শন করে)\n   • ০.৫০ এর নিচে PF (ϕ > ৬০°): W2 এর মান ঋণাত্মক হয় (পয়েন্টার উল্টো দিকে যায়, টার্মিনাল উল্টে পাঠ নিয়ে বিয়োগ করতে হয়)।\n   • শূন্য PF (ϕ = ৯০°): W1 = -W2, মোট P = ০।'
  },
  formulas: [
    {
      id: 'f-two-wattmeter-power',
      symbol: 'P, Q',
      expression: 'P = W_1 + W_2, \\quad Q = \\sqrt{3}(W_1 - W_2)',
      title: {
        en: 'Active & Reactive Power in Two-Wattmeter Method',
        hi: 'द्वि-वाटमीटर विधि में सक्रिय एवं प्रतिघाती शक्ति',
        bn: 'দ্বি-ওয়াটমিটার পদ্ধতিতে সক্রিয় ও প্রতিক্রিয়াশীল ক্ষমতা'
      },
      description: {
        en: 'Calculates total active real power and reactive power from the readings of two wattmeters.',
        hi: 'दो वाटमीटरों की रीडिंग से कुल सक्रिय और प्रतिघाती शक्ति की गणना करता है।',
        bn: 'দুটি ওয়াটমিটারের পাঠ থেকে মোট সক্রিয় ও প্রতিক্রিয়াশীল ক্ষমতা নির্ণয় করে।'
      },
      variables: [
        { symbol: 'W_1', name: { en: 'Wattmeter 1 reading (Watts or kW)', hi: 'वाटमीटर 1 की रीडिंग (W / kW)', bn: '১ম ওয়াটমিটারের পাঠ (W / kW)' } },
        { symbol: 'W_2', name: { en: 'Wattmeter 2 reading (Watts or kW)', hi: 'वाटमीटर 2 की रीडिंग (W / kW)', bn: '২য় ওয়াটমিটারের পাঠ (W / kW)' } }
      ]
    },
    {
      id: 'f-two-wattmeter-pf-angle',
      symbol: '\\tan(\\phi)',
      expression: '\\tan(\\phi) = \\sqrt{3} \\cdot \\frac{W_1 - W_2}{W_1 + W_2}',
      title: {
        en: 'Power Factor Angle Determination Formula',
        hi: 'पावर फैक्टर कोण निर्धारण सूत्र',
        bn: 'পাওয়ার ফ্যাক্টর কোণ নির্ণয়ের সূত্র'
      },
      description: {
        en: 'Computes operating load phase angle ϕ and power factor cos(ϕ) directly from the ratio of difference to sum of wattmeter readings.',
        hi: 'वाटमीटर रीडिंग के अंतर और योग के अनुपात से सीधे लोड फेज कोण और पावर फैक्टर निकालता है।',
        bn: 'ওয়াটমিটারের পাঠের বিয়োগফল ও যোগফলের অনুপাত থেকে সরাসরি পাওয়ার ফ্যাক্টর কোণ ও cos(ϕ) হিসাব করে।'
      },
      variables: [
        { symbol: '\\phi', name: { en: 'Load phase angle (degrees)', hi: 'लोड फेज कोण (डिग्री)', bn: 'লোড ফেজ কোণ (ডিগ্রি)' } },
        { symbol: '\\cos(\\phi)', name: { en: 'Load power factor', hi: 'लोड पावर फैक्टर', bn: 'লোড পাওয়ার ফ্যাক্টর' } }
      ]
    }
  ],
  diagrams: [
    {
      id: 'diag-ch14-two-wattmeter',
      title: {
        en: 'Two-Wattmeter Circuit Wiring & Blondel Phasor Geometry',
        hi: 'द्वि-वाटमीटर परिपथ वायरिंग एवं ब्लोंडेल फेजर ज्यामिति',
        bn: 'দ্বি-ওয়াটমিটার সার্কিট ওয়্যারিং ও ব্লন্ডেল ফেজর জ্যামিতি'
      },
      caption: {
        en: 'Schematic illustrating current coils in lines A and B with common potential coil tie to line C, accompanied by phasor geometry showing (30° - ϕ) and (30° + ϕ) angles.',
        hi: 'लाइन A और B में करंट कॉइल और लाइन C में पोटेंशियल कॉइल का कनेक्शन आरेख तथा फेजर ज्यामिति।',
        bn: 'লাইন A এবং B তে কারেন্ট কয়েল ও লাইন C তে ভোল্টেজ কয়েল যুক্ত দ্বি-ওয়াটমিটার সার্কিট ও ফেজর চিত্র।'
      },
      svgType: 'sch-ch14-two-wattmeter'
    }
  ],
  sections: [
    {
      id: 'sec-ch14-negative-reading-handling',
      title: {
        en: 'Field Procedure: Handling Negative Wattmeter Deflections (PF < 0.50 Lagging)',
        hi: 'फील्ड प्रक्रिया: ऋणात्मक वाटमीटर विक्षेपण (PF < 0.50) को संभालना',
        bn: 'ফিল্ড পদ্ধতি: ঋণাত্মক ওয়াটমিটার ডিফ্লেকশন (PF < ০.৫০) হ্যান্ডলিং'
      },
      content: {
        en: 'When testing lightly loaded induction motors or reactive welding circuits where power factor drops below 0.50 lagging (ϕ > 60°), the torque on Wattmeter 2 reverses direction, slamming the physical needle against the left mechanical stop pin.\n\nStandard Engineering Protocol for Analog Meters:\n1. De-energize the circuit or open the meter test switch.\n2. Reverse the connections of EITHER the potential coil (terminals M and L, or V+ and V-) OR the current coil (never both!). Reversing both leaves the torque unchanged!\n3. Re-energize the circuit and record the positive numerical deflection.\n4. In all subsequent power and power factor calculations, record this value with an explicit NEGATIVE SIGN: W2 = -X kW.\n5. Total active power is computed as P = W1 + (-|W2|) = W1 - |W2|.\n\nFailure to recognize a negative reading is the single most common cause of massive 200% power calculation errors in industrial commissioning laboratories.',
        hi: 'जब इंडक्शन मोटर बिना लोड के चलती है और पावर फैक्टर 0.50 से कम हो जाता है, तो वाटमीटर 2 की सुई उल्टी दिशा में मुड़ जाती है।\nइंजीनियरिंग नियम:\n1. सप्लाई बंद करें।\n2. केवल पोटेंशियल कॉइल (या केवल करंट कॉइल) के तारों को आपस में बदलें (दोनों को नहीं)।\n3. पुनः चालू करके रीडिंग नोट करें और गणना में इसे ऋणात्मक (-) मान के रूप में लिखें: W2 = -X kW।\n4. कुल शक्ति P = W1 - |W2| होगी।',
        bn: 'যখন কোনো ইন্ডাকশন মোটর নো-লোডে চলে এবং পাওয়ার ফ্যাক্টর ০.৫০ এর নিচে নেমে যায়, তখন ২য় ওয়াটমিটারের কাঁটা বাম দিকে উল্টো ধাক্কা খায়।\nসঠিক পদ্ধতি:\n১. পাওয়ার বন্ধ করুন।\n২. শুধুমাত্র ভোল্টেজ কয়েল (অথবা কেবল কারেন্ট কয়েল) এর টার্মিনাল উল্টে দিন (কখনোই দুটি একসাথে নয়)।\n৩. পুনরায় চালু করে পাঠ নিন এবং সূত্রে এর মান ঋণাত্মক (-) হিসেবে লিখুন: W2 = -X kW।\n৪. মোট ক্ষমতা হবে P = W1 - |W2|।'
      }
    }
  ],
  workedExamples: [
    {
      id: 'we-ch14-l05-01',
      title: {
        en: 'Complete Power and Power Factor Analysis from Two Wattmeter Readings',
        hi: 'दो वाटमीटर रीडिंग से पूर्ण शक्ति एवं पावर फैक्टर विश्लेषण',
        bn: 'দুটি ওয়াটমিটারের পাঠ থেকে সম্পূর্ণ ক্ষমতা ও পাওয়ার ফ্যাক্টর বিশ্লেষণ'
      },
      problem: {
        en: 'Two wattmeters connected to measure power in a 415 V, 3-phase, 3-wire balanced inductive motor circuit give the following readings: W1 = 12.5 kW and W2 = -2.5 kW (after reversing meter 2 voltage terminals). Calculate: (a) Total active power P, (b) Total reactive power Q, (c) Operating load power factor cos(ϕ), and (d) Line current IL.',
        hi: 'एक 415 V संतुलित मोटर परिपथ में दो वाटमीटर रीडिंग W1 = 12.5 kW और W2 = -2.5 kW प्राप्त होती हैं। गणना करें: (a) कुल सक्रिय शक्ति P, (b) कुल प्रतिघाती शक्ति Q, (c) पावर फैक्टर, और (d) लाइन धारा IL।',
        bn: 'একটি ৪১৫ V সুষম মোটর সার্কিটে দুটি ওয়াটমিটারের পাঠ পাওয়া গেল W1 = ১২.৫ kW এবং W2 = -২.৫ kW। নির্ণয় করুন: (a) মোট সক্রিয় ক্ষমতা P, (b) মোট প্রতিক্রিয়াশীল ক্ষমতা Q, (c) পাওয়ার ফ্যাক্টর, এবং (d) লাইন কারেন্ট IL।'
      },
      solutionSteps: [
        {
          stepNumber: 1,
          description: {
            en: 'Total Active Power: P = W1 + W2 = 12.5 kW + (-2.5 kW) = 10.0 kW.',
            hi: 'कुल सक्रिय शक्ति: P = W1 + W2 = 12.5 + (-2.5) = 10.0 kW।',
            bn: 'মোট সক্রিয় ক্ষমতা: P = W1 + W2 = ১২.৫ + (-২.৫) = ১০.০ kW।'
          }
        },
        {
          stepNumber: 2,
          description: {
            en: 'Total Reactive Power: Q = √3 · (W1 - W2) = 1.73205 · [12.5 - (-2.5)] = 1.73205 · 15.0 = 25.98 kVAR.',
            hi: 'कुल प्रतिघाती शक्ति: Q = √3 · [12.5 - (-2.5)] = 1.73205 · 15.0 = 25.98 kVAR।',
            bn: 'মোট প্রতিক্রিয়াশীল ক্ষমতা: Q = √3 · [১২.৫ - (-২.৫)] = ১.৭৩২০৫ · ১৫.০ = ২৫.৯৮ kVAR।'
          }
        },
        {
          stepNumber: 3,
          description: {
            en: 'Compute power factor angle ϕ:\ntan(ϕ) = √3 · (W1 - W2) / (W1 + W2) = Q / P = 25.98 / 10.0 = 2.598.\nϕ = arctan(2.598) = 68.95°.\nPower factor = cos(68.95°) = 0.359 lagging (verified < 0.50, explaining why W2 was negative!).',
            hi: 'पावर फैक्टर कोण: tan(ϕ) = 25.98 / 10.0 = 2.598 ==> ϕ = 68.95°। पावर फैक्टर = cos(68.95°) = 0.359 लैगिंग।',
            bn: 'পাওয়ার ফ্যাক্টর কোণ: tan(ϕ) = ২৫.৯৮ / ১০.০ = ২.৫৯৮ ==> ϕ = ৬৮.৯৫°। পাওয়ার ফ্যাক্টর = cos(৬৮.৯৫°) = ০.৩৫৯ ল্যাগিং।'
          }
        },
        {
          stepNumber: 4,
          description: {
            en: 'Apparent Power S = √(P² + Q²) = √(10.0² + 25.98²) = √(100 + 675) = √775 = 27.84 kVA.\nLine Current IL = S / (√3 · VL) = 27,840 / (1.73205 · 415) = 27,840 / 718.8 = 38.73 A.',
            hi: 'आभासी शक्ति S = √(10² + 25.98²) = 27.84 kVA। लाइन धारा IL = 27,840 / (√3 · 415) = 38.73 A।',
            bn: 'আপাত ক্ষমতা S = √(১০² + ২৫.৯৮²) = ২৭.৮৪ kVA। লাইন কারেন্ট IL = ২৭,৮৪০ / (√3 · ৪১৫) = ৩৮.৭৩ A।'
          }
        }
      ]
    },
    {
      id: 'we-ch14-l05-02',
      title: {
        en: 'Wattmeter Readings Prediction for Induction Motor Load',
        hi: 'इंडक्शन मोटर लोड के लिए वाटमीटर रीडिंग की पूर्व-गणना',
        bn: 'ইন্ডাকশন মোটর লোডের জন্য ওয়াটমিটার রিডিং পূর্বাভাস'
      },
      problem: {
        en: 'A 415 V, 3-phase, 50 Hz induction motor delivers a mechanical shaft output of 30 kW at an efficiency of 90% and an operating power factor of 0.85 lagging. The two-wattmeter method is employed to measure input power. Determine: (a) Total active power input Pin, (b) Phase angle ϕ, and (c) The individual readings of wattmeters W1 and W2.',
        hi: 'एक 415 V, 50 Hz, 3-फेज मोटर 90% दक्षता और 0.85 लैगिंग पावर फैक्टर पर 30 kW यांत्रिक शक्ति देती है। दो-वाटमीटर विधि द्वारा इनपुट शक्ति मापी जाती है। ज्ञात करें: (a) कुल इनपुट शक्ति Pin, (b) फेज कोण ϕ, और (c) वाटमीटर W1 तथा W2 की रीडिंग।',
        bn: 'একটি ৪১৫ V, ৫০ Hz, ৩-ফেজ মোটর ৯০% দক্ষতা এবং ০.৮৫ ল্যাগিং পাওয়ার ফ্যাক্টরে ৩০ kW শ্যাফট আউটপুট প্রদান করে। টু-ওয়াটমিটার পদ্ধতিতে ইনপুট পাওয়ার মাপা হচ্ছে। নির্ণয় করুন: (a) মোট ইনপুট পাওয়ার Pin, (b) ফেজ কোণ ϕ, এবং (c) ওয়াটমিটার W1 ও W2 এর পৃথক মান।'
      },
      solutionSteps: [
        {
          stepNumber: 1,
          description: {
            en: 'Calculate total electrical power input: Pin = Pout / η = 30 kW / 0.90 = 33.333 kW.\nSince P = W1 + W2, we have: W1 + W2 = 33.333 kW.',
            hi: 'कुल विद्युत इनपुट: Pin = 30 / 0.90 = 33.333 kW। अतः W1 + W2 = 33.333 kW।',
            bn: 'মোট বিদ্যুৎ ইনপুট: Pin = ৩০ / ০.৯০ = ৩৩.৩৩৩ kW। অতএব W1 + W2 = ৩৩.৩৩৩ kW।'
          }
        },
        {
          stepNumber: 2,
          description: {
            en: 'Calculate phase angle ϕ from power factor:\ncos(ϕ) = 0.85 ==> ϕ = arccos(0.85) = 31.788°.\ntan(ϕ) = tan(31.788°) = 0.6197.',
            hi: 'फेज कोण ϕ: cos(ϕ) = 0.85 ==> ϕ = 31.788°। tan(ϕ) = 0.6197।',
            bn: 'দশা কোণ ϕ: cos(ϕ) = ০.৮৫ ==> ϕ = ৩১.৭৮৮°। tan(ϕ) = ০.৬১৯৭।'
          }
        },
        {
          stepNumber: 3,
          description: {
            en: 'Use the two-wattmeter formula tan(ϕ) = √3·(W1 - W2) / (W1 + W2):\n0.6197 = √3·(W1 - W2) / 33.333\n(W1 - W2) = (0.6197 · 33.333) / √3 = 20.658 / 1.73205 = 11.927 kW.',
            hi: 'वाटमीटरों का अंतर: (W1 - W2) = (0.6197 · 33.333) / √3 = 11.927 kW।',
            bn: 'ওয়াটমিটার দুটির পার্থক্য: (W1 - W2) = (০.৬১৯৭ · ৩৩.৩৩৩) / √3 = ১১.৯২৭ kW।'
          }
        },
        {
          stepNumber: 4,
          description: {
            en: 'Solve the simultaneous equations:\nW1 = [(W1 + W2) + (W1 - W2)] / 2 = (33.333 + 11.927) / 2 = 45.260 / 2 = 22.63 kW.\nW2 = [(W1 + W2) - (W1 - W2)] / 2 = (33.333 - 11.927) / 2 = 21.406 / 2 = 10.70 kW.\nVerification: W1 + W2 = 22.63 + 10.70 = 33.33 kW. Both readings are positive since pf = 0.85 > 0.50.',
            hi: 'समीकरण हल करने पर: W1 = 22.63 kW, W2 = 10.70 kW। दोनों मान धनात्मक हैं क्योंकि pf = 0.85 > 0.50।',
            bn: 'সমীকরণ সমাধান করে: W1 = ২২.৬৩ kW, W2 = ১০.৭০ kW। উভয় মানই ধনাত্মক কারণ pf = ০.৮৫ > ০.৫০।'
          }
        }
      ]
    }
  ],
  importantPoints: {
    en: [
      'Blondel\'s Theorem establishes that N - 1 wattmeters are required to measure total real power in any N-wire system.',
      'Total 3-phase real power is always the sum of the two meter readings: P = W1 + W2 (valid even for unbalanced loads).',
      'Total 3-phase reactive power is Q = √3 · (W1 - W2) for balanced loads.',
      'When power factor drops below 0.50 lagging, one wattmeter reads negative and must be treated as negative in calculations.'
    ],
    hi: [
      'ब्लोंडेल प्रमेय सिद्ध करता है कि N-तार प्रणाली में कुल शक्ति मापने के लिए N - 1 वाटमीटर आवश्यक हैं।',
      'कुल वास्तविक शक्ति हमेशा दोनों मीटरों का योग होती है: P = W1 + W2 (असंतुलित भार में भी मान्य)।',
      'संतुलित भार के लिए कुल प्रतिघाती शक्ति Q = √3 · (W1 - W2) होती है।',
      'पावर फैक्टर 0.50 से कम होने पर एक वाटमीटर ऋणात्मक मान पढ़ता है जिसे गणना में घटाया जाता है।'
    ],
    bn: [
      'ব্লন্ডেল উপপাদ্য অনুসারে যেকোনো N-তার সিস্টেমে মোট ক্ষমতা মাপতে N - 1 টি ওয়াটমিটার প্রয়োজন।',
      'মোট বাস্তব ক্ষমতা সর্বদা দুটি মিটারের যোগফল: P = W1 + W2 (ভারসাম্যহীন লোডেও সত্য)।',
      'সুষম লোডের ক্ষেত্রে মোট প্রতিক্রিয়াশীল ক্ষমতা Q = √3 · (W1 - W2)।',
      'পাওয়ার ফ্যাক্টর ০.৫০ এর নিচে নামলে একটি ওয়াটমিটার ঋণাত্মক মান প্রদর্শন করে যা হিসেবে বিয়োগ করতে হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistake: Reversing BOTH the current coil and potential coil when a meter deflects backward. Correction: Reversing both rotates the torque by 180° twice (360°), leaving deflection unchanged! Reverse only ONE coil.',
      'Mistake: Ignoring the negative sign and simply adding positive values (e.g., claiming 12.5 + 2.5 = 15 kW instead of 12.5 - 2.5 = 10 kW).',
      'Mistake: Applying the reactive formula Q = √3(W1 - W2) to an unbalanced load. Correction: Q = √3(W1 - W2) is strictly valid ONLY for balanced three-phase systems.'
    ],
    hi: [
      'त्रुटि: सुई उल्टी जाने पर दोनों कॉइल के कनेक्शन बदलना। सुधार: केवल एक कॉइल (करंट या पोटेंशियल) के टर्मिनल बदलें।',
      'त्रुटि: ऋणात्मक मान को अनदेखा कर दोनों को जोड़ना (जैसे 12.5 - 2.5 = 10 kW के स्थान पर 15 kW लिखना)।',
      'त्रुटि: असंतुलित लोड पर Q = √3(W1 - W2) सूत्र लगाना। सुधार: यह सूत्र केवल संतुलित लोड के लिए मान्य है।'
    ],
    bn: [
      'ভুল: মিটার উল্টো ঘুরলে উভয় কয়েলের সংযোগ বদলানো। সংশোধন: যেকোনো একটি কয়েলের সংযোগ পরিবর্তন করতে হবে।',
      'ভুল: ঋণাত্মক চিহ্ন উপেক্ষা করে সরাসরি যোগ করা (যেমন ১২.৫ - ২.৫ = ১০ kW এর বদলে ১৫ kW লেখা)।',
      'ভুল: ভারসাম্যহীন লোডে Q = √3(W1 - W2) সূত্র প্রয়োগ করা। সংশোধন: এই সূত্রটি শুধুমাত্র সুষম লোডের জন্য প্রযোজ্য।'
    ]
  },
  keyTakeaways: {
    en: [
      'The two-wattmeter method is an industry benchmark for three-phase motor and transformer factory acceptance tests.',
      'At 0.50 PF, one wattmeter reads exactly zero; below 0.50 PF, it reads negative.',
      'Both active power (kW) and reactive power (kVAR) can be measured simultaneously without requiring a separate varmeter.'
    ],
    hi: [
      'द्वि-वाटमीटर विधि 3-फेज मोटरों और ट्रांसफार्मरों के परीक्षण का मानक औद्योगिक तरीका है।',
      '0.50 पावर फैक्टर पर एक वाटमीटर शून्य पढ़ता है, और 0.50 से नीचे जाने पर ऋणात्मक पढ़ता है।',
      'बिना किसी अलग वारमीटर के सक्रिय (kW) और प्रतिघाती (kVAR) दोनों शक्तियां एक साथ मापी जा सकती हैं।'
    ],
    bn: [
      'দ্বি-ওয়াটমিটার পদ্ধতি হলো ৩-ফেজ মোটর ও ট্রান্সফরমার পরীক্ষার বিশ্বস্ত শিল্প মানদণ্ড।',
      '০.৫০ পাওয়ার ফ্যাক্টরে একটি ওয়াটমিটার ঠিক শূন্য দেখায় এবং এর নিচে ঋণাত্মক দেখায়।',
      'কোনো আলাদা ভারমিটার ছাড়াই একই সাথে সক্রিয় (kW) ও প্রতিক্রিয়াশীল (kVAR) ক্ষমতা পরিমাপ করা যায়।'
    ]
  },
  practiceQuestions: [
    {
      id: 'pq-ch14-l05-01',
      question: {
        en: 'Prove mathematically that when a balanced three-phase load operates at exactly 0.50 lagging power factor, one of the two wattmeters must read exactly zero.',
        hi: 'गणितीय रूप से सिद्ध करें कि 0.50 लैगिंग पावर फैक्टर पर दो में से एक वाटमीटर की रीडिंग ठीक शून्य होनी चाहिए।',
        bn: 'গাণিতিকভাবে প্রমাণ করুন যে একটি সুষম ৩-ফেজ লোড ঠিক ০.৫০ ল্যাগিং পাওয়ার ফ্যাক্টরে চললে দুটি ওয়াটমিটারের একটির পাঠ নিশ্চিতভাবে শূন্য হবে।'
      },
      hint: {
        en: 'At PF = 0.50, ϕ = 60°. Wattmeter 2 reads W2 = VL·IL·cos(30° + ϕ) = VL·IL·cos(30° + 60°) = VL·IL·cos(90°) = 0.',
        hi: 'PF = 0.50 पर ϕ = 60° होता है। W2 = VL·IL·cos(30° + 60°) = VL·IL·cos(90°) = 0।',
        bn: 'PF = ০.৫০ হলে ϕ = ৬০°। W2 = VL·IL·cos(৩০° + ৬০°) = VL·IL·cos(৯০°) = ০।'
      }
    },
    {
      id: 'pq-ch14-l05-02',
      question: {
        en: 'Can the two-wattmeter method be used to measure power in a 3-phase 4-wire system with an active neutral carrying unbalanced current? Explain using Blondel\'s Theorem.',
        hi: 'क्या सक्रिय न्यूट्रल वाली 3-फेज 4-तार प्रणाली में द्वि-वाटमीटर विधि का उपयोग किया जा सकता है? ब्लोंडेल प्रमेय के आधार पर समझाइए।',
        bn: 'সক্রিয় নিউট্রালযুক্ত ৩-ফেজ ৪-তার সিস্টেমে কি দ্বি-ওয়াটমিটার পদ্ধতি ব্যবহার করা সম্ভব? ব্লন্ডেল উপপাদ্যের সাহায্যে ব্যাখ্যা করুন।'
      },
      hint: {
        en: 'In a 4-wire system, N = 4. Blondel\'s Theorem strictly requires N - 1 = 4 - 1 = 3 wattmeters. Two wattmeters will miss the power carried via the neutral.',
        hi: '4-तार प्रणाली में N = 4 होता है, अतः ब्लोंडेल प्रमेय के अनुसार N - 1 = 3 वाटमीटर अनिवार्य हैं। दो वाटमीटर सही शक्ति नहीं माप सकते।',
        bn: '৪-তার সিস্টেমে N = ৪, তাই ব্লন্ডেল উপপাদ্য মতে N - 1 = ৩টি ওয়াটমিটার প্রয়োজন। দুটি ওয়াটমিটার নিউট্রালের কারেন্ট পরিমাপ করতে ব্যর্থ হবে।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch14-l05-01',
      question: {
        en: 'According to Blondel\'s Theorem, how many single-phase wattmeters are required to measure the total power flowing in an electrical system with N conductors?',
        hi: 'ब्लोंडेल प्रमेय के अनुसार N चालकों वाली विद्युत प्रणाली में कुल शक्ति मापने के लिए कितने एकल-फेज वाटमीटर आवश्यक हैं?',
        bn: 'ব্লন্ডেল উপপাদ্য অনুসারে N সংখ্যক পরিবাহী বিশিষ্ট বৈদ্যুতিক সিস্টেমে মোট ক্ষমতা পরিমাপের জন্য কয়টি ওয়াটমিটার প্রয়োজন?'
      },
      options: [
        { en: 'N + 1 wattmeters', hi: 'N + 1 वाटमीटर', bn: 'N + ১ টি ওয়াটমিটার' },
        { en: 'N wattmeters', hi: 'N वाटमीटर', bn: 'N টি ওয়াটমিটার' },
        { en: 'N - 1 wattmeters', hi: 'N - 1 वाटमीटर', bn: 'N - ১ টি ওয়াটমিটার' },
        { en: 'N / 2 wattmeters', hi: 'N / 2 वाटमीटर', bn: 'N / ২ টি ওয়াটমিটার' }
      ],
      correctAnswer: 2,
      explanation: {
        en: 'Blondel\'s Theorem proves that an N-conductor system requires exactly N - 1 wattmeter elements, with all potential coils referenced to the Nth conductor.',
        hi: 'ब्लोंडेल प्रमेय के अनुसार N चालकों के लिए ठीक N - 1 वाटमीटर की आवश्यकता होती है।',
        bn: 'ব্লন্ডেল উপপাদ্য প্রমাণ করে যে N-তারবিশিষ্ট সিস্টেমে ঠিক N - 1 টি ওয়াটমিটার প্রয়োজন।'
      }
    },
    {
      id: 'mcq-ch14-l05-02',
      question: {
        en: 'In the standard two-wattmeter connection on lines A, B, and C with Line C as common reference, what voltage is applied across the potential coil of Wattmeter 1 (current coil in Line A)?',
        hi: 'लाइन C को कॉमन संदर्भ मानकर लाइन A में लगे वाटमीटर 1 के पोटेंशियल कॉइल पर कौन सा वोल्टेज लगाया जाता है?',
        bn: 'লাইন C কে সাধারণ রেফারেন্স ধরে লাইন A তে যুক্ত ১ম ওয়াটমিটারের ভোল্টেজ কয়েলে কোন ভোল্টেজ প্রযুক্ত হয়?'
      },
      options: [
        { en: 'Van (Phase A to neutral voltage)', hi: 'Van (फेज A से न्यूट्रल वोल्टेज)', bn: 'Van (ফেজ A থেকে নিউট্রাল ভোল্টেজ)' },
        { en: 'Vac (Line A to Line C voltage)', hi: 'Vac (लाइन A से लाइन C वोल्टेज)', bn: 'Vac (লাইন A থেকে লাইন C ভোল্টেজ)' },
        { en: 'Vab (Line A to Line B voltage)', hi: 'Vab (लाइन A से लाइन B वोल्टेज)', bn: 'Vab (লাইন A থেকে লাইন B ভোল্টেজ)' },
        { en: 'Vbc (Line B to Line C voltage)', hi: 'Vbc (लाइन B से लाइन C वोल्टेज)', bn: 'Vbc (লাইন B থেকে লাইন C ভোল্টেজ)' }
      ],
      correctAnswer: 1,
      explanation: {
        en: 'The potential coil connects between the line carrying its current coil (Line A) and the common line (Line C), measuring line voltage Vac.',
        hi: 'पोटेंशियल कॉइल को लाइन A और कॉमन लाइन C के बीच जोड़ा जाता है, जिससे यह Vac मापता है।',
        bn: 'ভোল্টেজ কয়েলটি লাইন A এবং সাধারণ লাইন C এর মধ্যে যুক্ত থাকে, ফলে এটি Vac পরিমাপ করে।'
      }
    },
    {
      id: 'mcq-ch14-l05-03',
      question: {
        en: 'If a balanced three-phase load operates at unity power factor (cos ϕ = 1.0), what is the relationship between the two wattmeter readings W1 and W2?',
        hi: 'यदि एक संतुलित 3-फेज लोड यूनिटी पावर फैक्टर (cos ϕ = 1.0) पर कार्य करता है, तो दोनों वाटमीटर रीडिंग W1 और W2 के बीच क्या संबंध होगा?',
        bn: 'যদি একটি সুষম ৩-ফেজ লোড ইউনিটি পাওয়ার ফ্যাক্টরে (cos ϕ = ১.০) চলে, তবে দুটি ওয়াটমিটারের পাঠ W1 এবং W2 এর সম্পর্ক কী হবে?'
      },
      options: [
        { en: 'W1 = W2 (Both readings are positive and identical)', hi: 'W1 = W2 (दोनों रीडिंग धनात्मक और समान हैं)', bn: 'W1 = W2 (উভয় পাঠ ধনাত্মক ও সমান)' },
        { en: 'W1 = -W2', hi: 'W1 = -W2', bn: 'W1 = -W2' },
        { en: 'W2 = 0', hi: 'W2 = 0', bn: 'W2 = ০' },
        { en: 'W1 = 2 · W2', hi: 'W1 = 2 · W2', bn: 'W1 = ২ · W2' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'At ϕ = 0°, W1 = VL·IL·cos(30° - 0°) = (√3/2)·VL·IL, and W2 = VL·IL·cos(30° + 0°) = (√3/2)·VL·IL. Thus W1 = W2.',
        hi: 'ϕ = 0° पर W1 = W2 = (√3/2)·VL·IL दोनों मान धनात्मक और बिल्कुल बराबर होते हैं।',
        bn: 'ϕ = ০° হলে W1 = W2 = (√3/2)·VL·IL, উভয় পাঠই সমান ও ধনাত্মক হয়।'
      }
    },
    {
      id: 'mcq-ch14-l05-04',
      question: {
        en: 'At what specific operating load power factor does Wattmeter 2 read exactly zero watts in the two-wattmeter method?',
        hi: 'द्वि-वाटमीटर विधि में किस विशिष्ट पावर फैक्टर पर वाटमीटर 2 की रीडिंग ठीक शून्य वाट होती है?',
        bn: 'দ্বি-ওয়াটমিটার পদ্ধতিতে কোন নির্দিষ্ট পাওয়ার ফ্যাক্টরে ২য় ওয়াটমিটারের পাঠ ঠিক শূন্য ওয়াট হয়?'
      },
      options: [
        { en: 'Unity power factor (1.0)', hi: 'यूनिटी पावर फैक्टर (1.0)', bn: 'ইউনিটি পাওয়ার ফ্যাক্টর (১.০)' },
        { en: '0.866 lagging', hi: '0.866 लैगिंग', bn: '০.৮৬৬ ল্যাগিং' },
        { en: '0.50 lagging', hi: '0.50 लैगिंग', bn: '০.৫০ ল্যাগিং' },
        { en: '0.0 lagging (pure inductive)', hi: '0.0 लैगिंग (शुद्ध प्रेरकीय)', bn: '০.০ ল্যাগিং (বিশুদ্ধ ইন্ডাক্টিভ)' }
      ],
      correctAnswer: 2,
      explanation: {
        en: 'When PF = 0.50 lagging, the phase angle ϕ = 60°. Wattmeter 2 reads W2 = VL·IL·cos(30° + 60°) = VL·IL·cos(90°) = 0 W.',
        hi: '0.50 लैगिंग PF पर ϕ = 60° होता है, जिससे W2 = VL·IL·cos(30° + 60°) = cos(90°) = 0 W होता है।',
        bn: '০.৫০ ল্যাগিং PF এ ϕ = ৬০° হয়, ফলে W2 = VL·IL·cos(৩০° + ৬০°) = cos(৯০°) = ০ W হয়।'
      }
    },
    {
      id: 'mcq-ch14-l05-05',
      question: {
        en: 'When measuring power on an induction motor operating at 0.30 lagging power factor, Wattmeter 2 pointer deflects backwards against the zero stop pin. What is the correct field procedure to obtain the true power reading?',
        hi: '0.30 लैगिंग PF पर चलने वाली मोटर में वाटमीटर 2 की सुई उल्टी दिशा में जाने पर सही रीडिंग लेने की फील्ड प्रक्रिया क्या है?',
        bn: '০.৩০ ল্যাগিং PF এ চলা মোটরে ২য় ওয়াটমিটারের কাঁটা উল্টো দিকে ধাক্কা খেলে সঠিক পাঠ নেওয়ার ফিল্ড পদ্ধতি কী?'
      },
      options: [
        { en: 'Reverse the connections of either the potential coil OR current coil, read the positive scale deflection, and record it as a NEGATIVE value in calculations (P = W1 - |W2|)', hi: 'पोटेंशियल या करंट कॉइल में से किसी एक के कनेक्शन उलटें, रीडिंग लें और गणना में इसे ऋणात्मक मान (P = W1 - |W2|) लिखें', bn: 'ভোল্টেজ কয়েল বা কারেন্ট কয়েলের যেকোনো একটির সংযোগ উল্টে ধনাত্মক পাঠ নিন এবং গণনায় ঋণাত্মক মান (P = W1 - |W2|) হিসেবে লিখুন' },
        { en: 'Reverse both coils simultaneously and add the readings directly', hi: 'दोनों कॉइल एक साथ बदलें और रीडिंग जोड़ें', bn: 'উভয় কয়েল একসাথে উল্টে দিন এবং সরাসরি যোগ করুন' },
        { en: 'Discard Wattmeter 2 and double the reading of Wattmeter 1', hi: 'वाटमीटर 2 को हटा दें और वाटमीटर 1 को दोगुना करें', bn: '২য় ওয়াটমিটার বাদ দিয়ে ১ম মিটারের পাঠ দ্বিগুণ করুন' },
        { en: 'Increase line voltage until the pointer reverses forward', hi: 'लाइन वोल्टेज बढ़ाएं जब तक सुई आगे न आ जाए', bn: 'লাইন ভোল্টেজ বাড়ান যতক্ষণ না কাঁটা সোজা হয়' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Reversing one coil inverts the electromagnetic torque, driving the pointer onto the calibrated scale. The reading is strictly negative because power factor is below 0.50.',
        hi: 'एक कॉइल के तार पलटने से टॉर्क की दिशा बदल जाती है और सुई स्केल पर आ जाती है। 0.50 से कम PF होने के कारण यह मान वास्तव में ऋणात्मक होता है।',
        bn: 'যেকোনো একটি কয়েল উল্টে দিলে টর্ক বিপরীত হয়ে কাঁটা স্কেলের ওপর আসে। PF ০.৫০ এর নিচে হওয়ায় এই মানটি নিশ্চিতভাবে ঋণাত্মক হিসেবে গণ্য করতে হয়।'
      }
    },
    {
      id: 'mcq-ch14-l05-06',
      question: {
        en: 'Two wattmeters read W1 = 8.0 kW and W2 = 4.0 kW on a balanced 3-phase load. What is the total reactive power Q consumed by the load?',
        hi: 'एक संतुलित 3-फेज लोड पर दो वाटमीटर W1 = 8.0 kW और W2 = 4.0 kW पढ़ते हैं। लोड द्वारा ली गई कुल प्रतिघाती शक्ति Q क्या होगी?',
        bn: 'একটি সুষম ৩-ফেজ লোডে দুটি ওয়াটমিটার W1 = ৮.০ kW এবং W2 = ৪.০ kW প্রদর্শন করে। লোড কর্তৃক গৃহীত মোট প্রতিক্রিয়াশীল ক্ষমতা Q কত?'
      },
      options: [
        { en: '4.0 kVAR', hi: '4.0 kVAR', bn: '৪.০ kVAR' },
        { en: '6.93 kVAR', hi: '6.93 kVAR', bn: '৬.৯৩ kVAR' },
        { en: '12.0 kVAR', hi: '12.0 kVAR', bn: '১২.০ kVAR' },
        { en: '20.78 kVAR', hi: '20.78 kVAR', bn: '২০.৭৮ kVAR' }
      ],
      correctAnswer: 1,
      explanation: {
        en: 'Q = √3 · (W1 - W2) = 1.73205 · (8.0 - 4.0) = 1.73205 · 4.0 = 6.928 kVAR ≈ 6.93 kVAR.',
        hi: 'Q = √3 · (W1 - W2) = 1.73205 · (8.0 - 4.0) = 6.93 kVAR।',
        bn: 'Q = √3 · (W1 - W2) = ১.৭৩২০৫ · (৮.০ - ৪.০) = ৬.৯৩ kVAR।'
      }
    },
    {
      id: 'mcq-ch14-l05-07',
      question: {
        en: 'In a purely inductive or purely capacitive circuit (power factor = 0.0), how do the two wattmeters behave?',
        hi: 'शुद्ध प्रेरकीय या शुद्ध धारिता परिपथ (पावर फैक्टर = 0.0) में दोनों वाटमीटर कैसा व्यवहार करते हैं?',
        bn: 'একটি বিশুদ্ধ ইন্ডাক্টিভ বা বিশুদ্ধ ক্যাপাসিটিভ সার্কিটে (পাওয়ার ফ্যাক্টর = ০.০) দুটি ওয়াটমিটার কেমন আচরণ করে?'
      },
      options: [
        { en: 'Both meters read 0 W', hi: 'दोनों मीटर 0 W पढ़ते हैं', bn: 'উভয় মিটারই ০ W পাঠ প্রদর্শন করে' },
        { en: 'W1 = -W2 (Equal in magnitude but opposite in sign, yielding P_total = 0)', hi: 'W1 = -W2 (मान में बराबर लेकिन विपरीत चिन्ह, जिससे P_total = 0)', bn: 'W1 = -W2 (মানের দিক থেকে সমান কিন্তু বিপরীত চিহ্নযুক্ত, ফলে P_total = ০)' },
        { en: 'W1 = W2 = Full scale deflection', hi: 'दोनों पूर्ण विक्षेपण देते हैं', bn: 'উভয় মিটারই ফুল স্কেল ডিফ্লেকশন দেয়' },
        { en: 'Both meters burn out immediately', hi: 'दोनों मीटर तुरंत जल जाते हैं', bn: 'উভয় মিটারই তৎক্ষণাৎ পুড়ে যায়' }
      ],
      correctAnswer: 1,
      explanation: {
        en: 'At ϕ = 90°, W1 = VL·IL·cos(-60°) = +0.5·VL·IL, and W2 = VL·IL·cos(120°) = -0.5·VL·IL. The algebraic sum W1 + W2 = 0, verifying zero active power.',
        hi: 'ϕ = 90° पर W1 = +0.5·VL·IL और W2 = -0.5·VL·IL होता है। दोनों का योग W1 + W2 = 0 होता है।',
        bn: 'ϕ = ৯০° হলে W1 = +০.৫·VL·IL এবং W2 = -০.৫·VL·IL হয়। এদের বীজগাণিতিক যোগফল W1 + W2 = ০ হয়।'
      }
    },
    {
      id: 'mcq-ch14-l05-08',
      question: {
        en: 'Why is the two-wattmeter method INSUFFICIENT for measuring power in a four-wire star distribution system with unbalanced neutral current?',
        hi: 'असंतुलित न्यूट्रल धारा वाली 4-तार स्टार वितरण प्रणाली में द्वि-वाटमीटर विधि अपर्याप्त क्यों है?',
        bn: 'ভারসাম্যহীন নিউট্রাল কারেন্টযুক্ত ৪-তার স্টার ডিস্ট্রিবিউশন সিস্টেমে দ্বি-ওয়াটমিটার পদ্ধতি অপ্রতুল কেন?'
      },
      options: [
        { en: 'Blondel\'s Theorem dictates that an N = 4 wire system requires N - 1 = 3 wattmeters; two meters cannot account for power returned via the fourth neutral conductor', hi: 'ब्लोंडेल प्रमेय के अनुसार N = 4 तार प्रणाली के लिए N - 1 = 3 वाटमीटर चाहिए; दो मीटर न्यूट्रल से बहने वाली शक्ति का हिसाब नहीं रख सकते', bn: 'ব্লন্ডেল উপপাদ্য মতে N = ৪ তার সিস্টেমে N - 1 = ৩টি ওয়াটমিটার প্রয়োজন; দুটি মিটার চতুর্থ নিউট্রাল তারের ক্ষমতা হিসাব করতে পারে না' },
        { en: 'Because the neutral wire cancels the magnetic field of the current coils', hi: 'क्योंकि न्यूट्रल तार करंट कॉइल के चुंबकीय क्षेत्र को रद्द कर देता है', bn: 'কারণ নিউট্রাল তার কারেন্ট কয়েলের চৌম্বক ক্ষেত্র বাতিল করে দেয়' },
        { en: 'Because 4-wire systems only operate on direct current', hi: 'क्योंकि 4-तार प्रणालियां केवल डीसी पर काम करती हैं', bn: 'কারণ ৪-তার ব্যবস্থা কেবল ডিসিতে চলে' },
        { en: 'Because two wattmeters cause short circuits between phases and neutral', hi: 'क्योंकि दो वाटमीटर फेज और न्यूट्रल के बीच शॉर्ट सर्किट कर देते हैं', bn: 'কারণ দুটি ওয়াটমিটার ফেজ ও নিউট্রালের মাঝে শর্ট সার্কিট তৈরি করে' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'When a neutral conductor is present and carries current, it represents the 4th wire in the system. Blondel\'s Theorem strictly requires N - 1 = 4 - 1 = 3 wattmeters to capture the complete power flow.',
        hi: 'जब न्यूट्रल में करंट बहता है, तो यह प्रणाली का चौथा तार बन जाता है। ब्लोंडेल प्रमेय के अनुसार 4 तारों के लिए 4 - 1 = 3 वाटमीटर आवश्यक होते हैं।',
        bn: 'যখন নিউট্রাল দিয়ে কারেন্ট প্রবাহিত হয়, তখন এটি ৪টি তারের সিস্টেমে পরিণত হয়। ব্লন্ডেল উপপাদ্য অনুসারে ৪ - ১ = ৩টি ওয়াটমিটার ব্যতীত সঠিক ক্ষমতা মাপা সম্ভব নয়।'
      }
    }
  ]
};

export const LESSON_TWO_WATTMETER_METHOD_POWER_MEASUREMENT = LESSON_THREE_PHASE_POWER_MEASUREMENT;
