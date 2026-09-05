import { Lesson } from '../types';

export const LESSON_THREE_PHASE_ADVANCED_ANALYSIS: Lesson = {
  id: 'lsn-ch14-three-phase-advanced-analysis',
  topicId: 'tp-three-phase-advanced-analysis',
  chapterId: 'ch-three-phase',
  order: 1,
  title: {
    en: 'Advanced Three-Phase System Analysis',
    hi: 'उन्नत थ्री-फेज प्रणाली विश्लेषण',
    bn: 'উন্নত থ্রি-ফেজ সিস্টেম বিশ্লেষণ'
  },
  description: {
    en: 'Explore the mathematical foundation of symmetrical three-phase electrical systems. Master the 120° spatial and temporal phasor displacements, positive (ABC) versus negative (ACB) phase sequence rotation, line-to-neutral versus line-to-line vector synthesis in Star and Delta topologies, and instantaneous total power constancy.',
    hi: 'सममितीय थ्री-फेज विद्युत प्रणालियों के गणितीय आधार का अध्ययन करें। 120° स्थानिक और समय फेजर विस्थापन, धनात्मक (ABC) बनाम ऋणात्मक (ACB) फेज अनुक्रम, स्टार और डेल्टा टोपोलॉजी में लाइन एवं फेज वोल्टेज/धारा संबंध और तात्कालिक कुल शक्ति की स्थिरता को समझें।',
    bn: 'প্রতিসম থ্রি-ফেজ বৈদ্যুতিক সিস্টেমের গাণিতিক ভিত্তি অন্বেষণ করুন। ১২০° স্থানিক ও কালিক ফেজর স্থানচ্যুতি, পজিটিভ (ABC) বনাম নেগেটিভ (ACB) ফেজ সিকোয়েন্স ঘূর্ণন, স্টার ও ডেল্টায় লাইন এবং ফেজ ভেক্টর সংশ্লেষণ এবং তাৎক্ষণিক মোট ক্ষমতার স্থিরতা আয়ত্ত করুন।'
  },
  estimatedMinutes: 45,
  easyExplanation: {
    en: 'Imagine three equally spaced pistons in an automotive engine arranged around a crankshaft at 120-degree intervals. When one piston reaches top dead center, the next is already one-third of a turn behind it. In three-phase AC, three alternating voltages follow each other by exactly 120 electrical degrees (one-third of a 360° cycle, or 6.67 milliseconds at 50 Hz). Because the crests are staggered evenly, their instantaneous sum is always zero (Va + Vb + Vc = 0), and the total electrical power delivered to a balanced three-phase motor is completely steady and non-pulsating, eliminating mechanical torque ripple.',
    hi: 'इसे 120 डिग्री के अंतराल पर व्यवस्थित तीन पिस्टन वाले इंजन की तरह समझें। थ्री-फेज एसी में, तीन प्रत्यावर्ती वोल्टेज ठीक 120 इलेक्ट्रिकल डिग्री (50 Hz पर 6.67 मिलीसेकंड) के अंतर पर एक दूसरे का अनुसरण करते हैं। चूंकि तीनों तरंगें समान दूरी पर हैं, उनका तात्कालिक योग सदैव शून्य होता है (Va + Vb + Vc = 0)। इससे मोटर को मिलने वाली कुल विद्युत शक्ति एकदम स्थिर और कंपन-रहित रहती है।',
    bn: 'একটি ইঞ্জিনের তিনটি পিস্টন যেভাবে ১২০ ডিগ্রি ব্যবধানে ক্র্যাঙ্কশ্যাফটের সাথে যুক্ত থাকে, ঠিক সেভাবেই থ্রি-ফেজ এসিতে তিনটি ভোল্টেজ একে অপরের থেকে ১২০ ডিগ্রি (৫০ হার্টজে ৬.৬৭ মিলিসেকেন্ড) পিছিয়ে থাকে। তরঙ্গগুলির শীর্ষবিন্দু সুষমভাবে বিন্যস্ত থাকায় এদের তাৎক্ষণিক যোগফল সর্বদা শূন্য হয় (Va + Vb + Vc = 0)। এর ফলে মোটরে কোনো টর্ক কম্পন ছাড়াই সম্পূর্ণ স্থির ক্ষমতা সরবরাহ হয়।'
  },
  detailedExplanation: {
    en: 'A balanced three-phase AC voltage source comprises three sinusoidal voltages of identical amplitude V_m and angular frequency ω = 2πf, mutually displaced in time-phase by 120 electrical degrees (2π/3 radians):\n\n1. Positive Phase Sequence (ABC or 1-2-3):\n   • v_a(t) = √2 · V_ph · cos(ωt)\n   • v_b(t) = √2 · V_ph · cos(ωt - 120°)\n   • v_c(t) = √2 · V_ph · cos(ωt - 240°) = √2 · V_ph · cos(ωt + 120°)\n   In phasor notation with V_an as reference:\n   V_an = V_ph ∠0°, V_bn = V_ph ∠-120°, V_cn = V_ph ∠+120°.\n\n2. Line-to-Line vs Phase Voltage in Star (Wye) Connections:\n   By Kirchhoff\'s Voltage Law:\n   V_ab = V_an - V_bn = V_ph ∠0° - V_ph ∠-120° = V_ph · [1 - (-0.5 - j√3/2)] = V_ph · (1.5 + j√3/2) = √3 · V_ph ∠+30°.\n   Thus, Line Voltage magnitude is exactly √3 (≈1.73205) times Phase Voltage, and leads the corresponding phase voltage by 30°:\n   V_L = √3 · V_ph, with V_ab leading V_an by 30°, V_bc leading V_bn by 30°, and V_ca leading V_cn by 30°.\n\n3. Delta (Mesh) Connection Relationships:\n   In delta configurations, load elements connect directly across lines, so Line Voltage equals Phase Voltage:\n   V_L = V_ph.\n   Line currents are differences of branch phase currents:\n   I_A = I_ab - I_ca = √3 · I_ph ∠-30°. Hence, Line Current is √3 times Phase Current and lags the phase current by 30° in a balanced system.\n\n4. Constant Instantaneous Power:\n   In a balanced three-phase load with phase power factor cos(ϕ):\n   p(t) = v_a·i_a + v_b·i_b + v_c·i_c = 3 · V_ph · I_ph · cos(ϕ) = √3 · V_L · I_L · cos(ϕ).\n   The time-varying double-frequency terms (2ωt) cancel completely to zero identically for all t! Unlike single-phase systems where power pulsates at 2f, three-phase instantaneous power is invariant with time, producing smooth constant torque in rotating machinery.',
    hi: 'संतुलित थ्री-फेज एसी में तीन ज्यावक्रीय वोल्टेज समान आयाम और 120° कलान्तर के साथ कार्य करते हैं:\n\n1. धनात्मक फेज अनुक्रम (ABC): Van = Vph ∠0°, Vbn = Vph ∠-120°, Vcn = Vph ∠+120°।\n2. स्टार कनेक्शन में: लाइन वोल्टेज Vab = Van - Vbn = √3 · Vph ∠+30°। लाइन वोल्टेज फेज वोल्टेज से √3 गुना बड़ा होता है और 30° आगे (lead) रहता है। लाइन धारा फेज धारा के बराबर होती है (IL = Iph)।\n3. डेल्टा कनेक्शन में: लाइन वोल्टेज फेज वोल्टेज के बराबर होता है (VL = Vph), जबकि लाइन धारा IL = √3 · Iph ∠-30° होती है।\n4. स्थिर तात्कालिक शक्ति: कुल तात्कालिक शक्ति p(t) = √3 · VL · IL · cos(ϕ) समय के साथ नहीं बदलती, जिससे मोटरों को कंपन-मुक्त टॉर्क मिलता है।',
    bn: 'একটি সুষম থ্রি-ফেজ সিস্টেমে তিনটি সাইনোসয়েডাল ভোল্টেজ সমান মান এবং পরস্পরের সাথে ১২০° দশা কোণে থাকে:\n\n১. পজিটিভ ফেজ সিকোয়েন্স (ABC): Van = Vph ∠0°, Vbn = Vph ∠-120°, Vcn = Vph ∠+120°।\n২. স্টার কানেকশনে: লাইন ভোল্টেজ Vab = √3 · Vph ∠+30°। লাইন ভোল্টেজ ফেজ ভোল্টেজের চেয়ে √3 গুণ বড় এবং ৩০° অগ্রগামী হয়। কিন্তু লাইন কারেন্ট ও ফেজ কারেন্ট সমান (IL = Iph)।\n৩. ডেল্টা কানেকশনে: লাইন ভোল্টেজ ও ফেজ ভোল্টেজ সমান (VL = Vph), তবে লাইন কারেন্ট IL = √3 · Iph হয়।\n৪. ধ্রুবক তাৎক্ষণিক ক্ষমতা: মোট তাৎক্ষণিক ক্ষমতা p(t) = √3 · VL · IL · cos(ϕ) সময়ের সাথে পরিবর্তিত হয় না, ফলে মোটর মসৃণভাবে ঘোরে।'
  },
  formulas: [
    {
      id: 'f-star-voltage-relation',
      symbol: 'V_L',
      expression: 'V_L = \\sqrt{3} \\cdot V_{ph} \\angle +30^\\circ',
      title: {
        en: 'Star Connection Line-to-Line Voltage Synthesis',
        hi: 'स्टार कनेक्शन लाइन वोल्टेज संश्लेषण',
        bn: 'স্টার কানেকশন লাইন ভোল্টেজ সংশ্লেষণ'
      },
      description: {
        en: 'Relates line-to-line voltage to line-to-neutral phase voltage in a star-connected symmetrical three-phase network.',
        hi: 'स्टार-कनेक्टेड नेटवर्क में लाइन वोल्टेज और फेज वोल्टेज के संबंध को दर्शाता है।',
        bn: 'স্টার নেটওয়ার্কে লাইন ভোল্টেজ ও ফেজ ভোল্টেজের সম্পর্ক প্রকাশ করে।'
      },
      variables: [
        { symbol: 'V_L', name: { en: 'Line-to-Line Voltage (RMS Volts)', hi: 'लाइन-टू-लाइन वोल्टेज (RMS वोल्ट)', bn: 'লাইন ভোল্টেজ (RMS ভোল্ট)' } },
        { symbol: 'V_{ph}', name: { en: 'Line-to-Neutral Phase Voltage (RMS Volts)', hi: 'फेज वोल्टेज (RMS वोल्ट)', bn: 'ফেজ ভোল্টেজ (RMS ভোল্ট)' } }
      ]
    },
    {
      id: 'f-delta-current-relation',
      symbol: 'I_L',
      expression: 'I_L = \\sqrt{3} \\cdot I_{ph} \\angle -30^\\circ',
      title: {
        en: 'Delta Connection Line Current Relation',
        hi: 'डेल्टा कनेक्शन लाइन धारा संबंध',
        bn: 'ডেল্টা কানেকশন লাইন কারেন্ট সম্পর্ক'
      },
      description: {
        en: 'Relates line conductor current to internal loop delta phase current under balanced loading conditions.',
        hi: 'संतुलित लोड पर डेल्टा लूप की फेज धारा और लाइन धारा का संबंध।',
        bn: 'সুষম লোডে ডেল্টা লুপের ফেজ কারেন্ট ও লাইন কারেন্টের সম্পর্ক।'
      },
      variables: [
        { symbol: 'I_L', name: { en: 'Line Conductor Current (RMS Amperes)', hi: 'लाइन धारा (RMS एम्पीयर)', bn: 'লাইন কারেন্ট (RMS অ্যাম্পিয়ার)' } },
        { symbol: 'I_{ph}', name: { en: 'Delta Branch Phase Current (RMS Amperes)', hi: 'डेल्टा शाखा फेज धारा (RMS एम्पीयर)', bn: 'ডেল্টা ফেজ কারেন্ট (RMS অ্যাম্পিয়ার)' } }
      ]
    },
    {
      id: 'f-three-phase-total-power',
      symbol: 'P_{3\\phi}',
      expression: 'P_{3\\phi} = \\sqrt{3} \\cdot V_L \\cdot I_L \\cdot \\cos(\\phi) = 3 \\cdot V_{ph} \\cdot I_{ph} \\cdot \\cos(\\phi)',
      title: {
        en: 'Total Three-Phase Active Real Power',
        hi: 'कुल थ्री-फेज वास्तविक शक्ति',
        bn: 'মোট থ্রি-ফেজ সক্রিয় ক্ষমতা'
      },
      description: {
        en: 'Standard universal formulation for total active power regardless of whether load is star or delta connected.',
        hi: 'स्टार अथवा डेल्टा दोनों भारों के लिए थ्री-फेज सक्रिय शक्ति का सार्वभौमिक सूत्र।',
        bn: 'স্টার বা ডেল্টা উভয় লোডের জন্য প্রযোজ্য মোট সক্রিয় ক্ষমতার সার্বজনীন সূত্র।'
      },
      variables: [
        { symbol: 'P_{3\\phi}', name: { en: 'Total Three-Phase Power (Watts / kW)', hi: 'कुल थ्री-फेज शक्ति (W / kW)', bn: 'মোট থ্রি-ফেজ ক্ষমতা (W / kW)' } },
        { symbol: '\\cos(\\phi)', name: { en: 'Operating Load Power Factor', hi: 'लोड पावर फैक्टर', bn: 'লোড পাওয়ার ফ্যাক্টর' } }
      ]
    }
  ],
  diagrams: [
    {
      id: 'diag-ch14-phasor-sequence',
      title: {
        en: 'Three-Phase Symmetrical Phasor Diagram & Phase Sequence',
        hi: 'थ्री-फेज सममितीय फेजर आरेख एवं फेज अनुक्रम',
        bn: 'থ্রি-ফেজ প্রতিসম ফেজর ডায়াগ্রাম ও ফেজ সিকোয়েন্স'
      },
      caption: {
        en: 'Vector representation of 120° spatially displaced phase voltages, positive sequence ABC rotation, and line-to-line voltage synthesis (Vab = Van - Vbn).',
        hi: '120° विस्थापित फेज वोल्टेज, धनात्मक ABC अनुक्रम और लाइन वोल्टेज संश्लेषण (Vab = Van - Vbn) का सदिश निरूपण।',
        bn: '১২০° স্থানচ্যুত ফেজ ভোল্টেজ, পজিটিভ ABC সিকোয়েন্স এবং লাইন ভোল্টেজ সংশ্লেষণের ভেক্টর রূপ।'
      },
      svgType: 'sch-ch14-three-phase-phasors'
    }
  ],
  sections: [
    {
      id: 'sec-ch14-phase-sequence-effects',
      title: {
        en: 'Phase Sequence Significance & Reversal Consequences',
        hi: 'फेज अनुक्रम का महत्व एवं उत्क्रमण के परिणाम',
        bn: 'ফেজ সিকোয়েন্সের তাৎপর্য ও দিক পরিবর্তনের প্রভাব'
      },
      content: {
        en: 'Phase sequence defines the chronological time order in which the phase voltages attain their positive peak values. In positive sequence (ABC or R-Y-B), Phase A leads Phase B by 120°, and B leads C by 120°.\n\nReversing any two supply lines (e.g., swapping B and C to form ACB) inverts the direction of the rotating magnetic field (RMF) generated in three-phase induction and synchronous motors, instantly reversing their physical direction of rotation. In industrial facilities, phase reversal can cause catastrophic destruction to screw compressors, hydraulic pumps, overhead cranes, and mechanical elevators. For this reason, IEC 60255 phase reversal and phase-failure monitoring relays are mandated across industrial motor control centers.',
        hi: 'फेज अनुक्रम वह समय क्रम है जिसमें तीनों फेज वोल्टेज अपने अधिकतम मान तक पहुंचते हैं। किसी भी दो सप्लाई तारों (जैसे B और C) को परस्पर बदलने से मोटर के स्टेटर में उत्पन्न घूमने वाला चुंबकीय क्षेत्र (RMF) उल्टी दिशा में घूमने लगता है, जिससे मोटर उल्टी दिशा में चलने लगती है। औद्योगिक कंप्रेसर और लिफ्ट में यह अत्यंत विनाशकारी हो सकता है, इसलिए फेज रिवर्सल रिले लगाना अनिवार्य होता है।',
        bn: 'ফেজ সিকোয়েন্স হলো সেই ক্রমানুসারে যেটিতে ফেজ ভোল্টেজগুলি তাদের পিক মানে পৌঁছায়। যেকোনো দুটি ফেজ লাইন অদলবদল করলে (যেমন B এবং C) মোটরের ঘূর্ণায়মান চৌম্বক ক্ষেত্রের (RMF) দিক বিপরীত হয়ে যায় এবং মোটর উল্টো দিকে ঘুরতে শুরু করে। এটি কম্প্রেসার বা লিফটের জন্য অত্যন্ত বিপজ্জনক, তাই ইন্ডাস্ট্রিতে ফেজ রিভার্সাল প্রোটেকশন রিলে ব্যবহৃত হয়।'
      }
    }
  ],
  workedExamples: [
    {
      id: 'we-ch14-l01-01',
      title: {
        en: 'Star-Connected Load Line and Phase Calculations',
        hi: 'स्टार-कनेक्टेड लोड के लिए लाइन एवं फेज गणना',
        bn: 'স্টার-সংযুক্ত লোডের লাইন ও ফেজ গণনা'
      },
      problem: {
        en: 'A balanced 3-phase star-connected load with impedance Z_ph = 16 + j12 Ω per phase is connected to a 415 V, 50 Hz three-phase supply. Calculate: (a) Phase voltage V_ph, (b) Phase current I_ph, (c) Line current I_L, (d) Operating power factor, and (e) Total active power P.',
        hi: 'प्रति फेज Z_ph = 16 + j12 Ω प्रतिबाधा वाला एक संतुलित स्टार लोड 415 V, 50 Hz थ्री-फेज सप्लाई से जुड़ा है। गणना करें: (a) फेज वोल्टेज, (b) फेज धारा, (c) लाइन धारा, (d) पावर फैक्टर, और (e) कुल सक्रिय शक्ति P।',
        bn: 'প্রতি ফেজে Z_ph = 16 + j12 Ω বিশিষ্ট একটি সুষম স্টার লোড 415 V, 50 Hz সরবরাহে যুক্ত। নির্ণয় করুন: (a) ফেজ ভোল্টেজ, (b) ফেজ কারেন্ট, (c) লাইন কারেন্ট, (d) পাওয়ার ফ্যাক্টর, এবং (e) মোট সক্রিয় ক্ষমতা P।'
      },
      solutionSteps: [
        {
          stepNumber: 1,
          description: {
            en: 'Compute phase voltage from given line voltage: V_ph = V_L / √3 = 415 / 1.73205 = 239.6 V (≈240 V).',
            hi: 'फेज वोल्टेज ज्ञात करें: V_ph = V_L / √3 = 415 / 1.73205 = 239.6 V।',
            bn: 'ফেজ ভোল্টেজ বের করুন: V_ph = V_L / √3 = 415 / 1.73205 = 239.6 V।'
          }
        },
        {
          stepNumber: 2,
          description: {
            en: 'Calculate impedance magnitude: |Z_ph| = √(16² + 12²) = √(256 + 144) = √400 = 20 Ω. Phase angle ϕ = arctan(12/16) = 36.87°.',
            hi: 'प्रतिबाधा का मान निकालें: |Z_ph| = √(16² + 12²) = 20 Ω। फेज कोण ϕ = 36.87°।',
            bn: 'ইম্পিডেন্স মান: |Z_ph| = √(16² + 12²) = 20 Ω। দশা কোণ ϕ = 36.87°।'
          }
        },
        {
          stepNumber: 3,
          description: {
            en: 'Compute Phase and Line Current: For star connection, I_L = I_ph = V_ph / |Z_ph| = 239.6 / 20 = 11.98 A (≈12.0 A).',
            hi: 'फेज एवं लाइन धारा ज्ञात करें: स्टार में I_L = I_ph = 239.6 / 20 = 11.98 A।',
            bn: 'ফেজ ও লাইন কারেন্ট: স্টারে I_L = I_ph = 239.6 / 20 = 11.98 A।'
          }
        },
        {
          stepNumber: 4,
          description: {
            en: 'Power Factor = cos(36.87°) = 16 / 20 = 0.80 lagging (inductive).',
            hi: 'पावर फैक्टर = cos(36.87°) = 0.80 लैगिंग (प्रेरकीय)।',
            bn: 'পাওয়ার ফ্যাক্টর = cos(36.87°) = ০.৮০ ল্যাগিং (ইন্ডাক্টিভ)।'
          }
        },
        {
          stepNumber: 5,
          description: {
            en: 'Total Active Power: P = √3 · V_L · I_L · cos(ϕ) = √3 · 415 · 11.98 · 0.80 = 6,888 W ≈ 6.89 kW. (Alternatively: 3 · I_ph² · R = 3 · (11.98)² · 16 = 6,889 W).',
            hi: 'कुल सक्रिय शक्ति P = √3 · 415 · 11.98 · 0.80 = 6,888 W ≈ 6.89 kW।',
            bn: 'মোট সক্রিয় ক্ষমতা P = √3 · 415 · 11.98 · 0.80 = 6,888 W ≈ 6.89 kW।'
          }
        }
      ]
    },
    {
      id: 'we-ch14-l01-02',
      title: {
        en: 'Delta-Connected Balanced Three-Phase Industrial Load Analysis',
        hi: 'डेल्टा-कनेक्टेड संतुलित 3-फेज लोड विश्लेषण',
        bn: 'ডেল্টা-সংযুক্ত সুষম ৩-ফেজ লোড বিশ্লেষণ'
      },
      problem: {
        en: 'A balanced delta-connected 3-phase load with impedance Z_ph = 30 + j40 Ω per branch is connected to a 400 V, 50 Hz three-phase supply. Calculate: (a) Phase voltage V_ph, (b) Phase current I_ph, (c) Line current I_L, (d) Operating power factor, and (e) Total active and reactive power.',
        hi: 'प्रति शाखा Z_ph = 30 + j40 Ω वाला एक संतुलित डेल्टा लोड 400 V, 50 Hz आपूर्ति से जुड़ा है। गणना करें: (a) फेज वोल्टेज, (b) फेज धारा, (c) लाइन धारा, (d) पावर फैक्टर, और (e) कुल सक्रिय व प्रतिघाती शक्ति।',
        bn: 'প্রতি শাখায় Z_ph = 30 + j40 Ω বিশিষ্ট একটি সুষম ডেল্টা লোড 400 V, 50 Hz সরবরাহে যুক্ত। নির্ণয় করুন: (a) ফেজ ভোল্টেজ, (b) ফেজ কারেন্ট, (c) লাইন কারেন্ট, (d) পাওয়ার ফ্যাক্টর, এবং (e) মোট সক্রিয় ও রিঅ্যাক্টিভ ক্ষমতা।'
      },
      solutionSteps: [
        {
          stepNumber: 1,
          description: {
            en: 'In Delta connection, phase voltage equals line voltage: V_ph = V_L = 400 V.',
            hi: 'डेल्टा कनेक्शन में फेज वोल्टेज लाइन वोल्टेज के बराबर होता है: V_ph = V_L = 400 V।',
            bn: 'ডেল্টা সংযোগে ফেজ ভোল্টেজ লাইন ভোল্টেজের সমান: V_ph = V_L = 400 V।'
          }
        },
        {
          stepNumber: 2,
          description: {
            en: 'Calculate branch impedance magnitude: |Z_ph| = √(30² + 40²) = √(900 + 1600) = 50 Ω. Phase angle ϕ = arctan(40/30) = 53.13°.',
            hi: 'शाखा प्रतिबाधा मान: |Z_ph| = √(30² + 40²) = 50 Ω। फेज कोण ϕ = 53.13°।',
            bn: 'শাখা ইম্পিডেন্স মান: |Z_ph| = √(30² + 40²) = 50 Ω। দশা কোণ ϕ = 53.13°।'
          }
        },
        {
          stepNumber: 3,
          description: {
            en: 'Compute Phase Current: I_ph = V_ph / |Z_ph| = 400 / 50 = 8.0 A.',
            hi: 'फेज धारा की गणना: I_ph = 400 / 50 = 8.0 A।',
            bn: 'ফেজ কারেন্ট গণনা: I_ph = 400 / 50 = 8.0 A।'
          }
        },
        {
          stepNumber: 4,
          description: {
            en: 'Compute Line Current for Delta connection: I_L = √3 · I_ph = 1.73205 · 8.0 = 13.86 A.',
            hi: 'डेल्टा में लाइन धारा: I_L = √3 · 8.0 = 13.86 A।',
            bn: 'ডেল্টায় লাইন কারেন্ট: I_L = √3 · 8.0 = 13.86 A।'
          }
        },
        {
          stepNumber: 5,
          description: {
            en: 'Power Factor = cos(53.13°) = 30 / 50 = 0.60 lagging. Total Active Power P = √3 · V_L · I_L · cos(ϕ) = √3 · 400 · 13.86 · 0.60 = 5,760 W = 5.76 kW (or 3 · I_ph² · R = 3 · 64 · 30 = 5,760 W). Total Reactive Power Q = 3 · I_ph² · X = 3 · 64 · 40 = 7,680 VAR = 7.68 kVAR.',
            hi: 'पावर फैक्टर = cos(53.13°) = 0.60 लैगिंग। कुल सक्रिय शक्ति P = 3 · 8² · 30 = 5,760 W (5.76 kW)। कुल प्रतिघाती शक्ति Q = 3 · 8² · 40 = 7,680 VAR (7.68 kVAR)।',
            bn: 'পাওয়ার ফ্যাক্টর = cos(53.13°) = ০.৬০ ল্যাগিং। মোট সক্রিয় ক্ষমতা P = 3 · 8² · 30 = 5,760 W (5.76 kW)। মোট রিঅ্যাক্টিভ ক্ষমতা Q = 3 · 8² · 40 = 7,680 VAR (7.68 kVAR)।'
          }
        }
      ]
    }
  ],
  importantPoints: {
    en: [
      'In Star (Y) connection, Line Voltage is √3 times Phase Voltage (VL = √3·Vph) and leads it by 30°, while Line Current equals Phase Current (IL = Iph).',
      'In Delta (Δ) connection, Line Voltage equals Phase Voltage (VL = Vph), while Line Current is √3 times Phase Current (IL = √3·Iph) and lags by 30°.',
      'Instantaneous total power in any balanced three-phase system is completely constant at all instants of time: p(t) = 3·Vph·Iph·cos(ϕ).',
      'Swapping any two phase conductors reverses the phase sequence and the direction of rotating magnetic fields in induction machines.'
    ],
    hi: [
      'स्टार कनेक्शन में लाइन वोल्टेज फेज वोल्टेज से √3 गुना होता है (VL = √3·Vph) और 30° आगे रहता है, जबकि लाइन धारा और फेज धारा समान होती हैं (IL = Iph)।',
      'डेल्टा कनेक्शन में लाइन वोल्टेज फेज वोल्टेज के बराबर होता है (VL = Vph), जबकि लाइन धारा फेज धारा से √3 गुना होती है (IL = √3·Iph)।',
      'संतुलित थ्री-फेज में कुल तात्कालिक शक्ति हर क्षण स्थिर रहती है: p(t) = 3·Vph·Iph·cos(ϕ)।',
      'किन्हीं दो फेजों को आपस में बदलने से घूमने वाले चुंबकीय क्षेत्र की दिशा बदल जाती है।'
    ],
    bn: [
      'স্টার কানেকশনে লাইন ভোল্টেজ ফেজ ভোল্টেজের √3 গুণ (VL = √3·Vph) এবং ৩০° অগ্রগামী, কিন্তু লাইন কারেন্ট ও ফেজ কারেন্ট সমান (IL = Iph)।',
      'ডেল্টা কানেকশনে লাইন ভোল্টেজ ও ফেজ ভোল্টেজ সমান (VL = Vph), কিন্তু লাইন কারেন্ট ফেজ কারেন্টের √3 গুণ (IL = √3·Iph)।',
      'সুষম থ্রি-ফেজে মোট তাৎক্ষণিক ক্ষমতা সর্বদা ধ্রুবক থাকে: p(t) = 3·Vph·Iph·cos(ϕ)।',
      'যেকোনো দুটি ফেজ অদলবদল করলে মোটরের ঘূর্ণন দিক উল্টে যায়।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistake: Dividing line voltage by 3 instead of √3 when finding phase voltage in a star system. Correction: Always divide by √3 (≈1.732), e.g., 400V / √3 = 230.9V.',
      'Mistake: Assuming instantaneous three-phase power pulsates like single-phase power. Correction: In balanced 3-phase, the pulsating double-frequency components sum to zero identically.',
      'Mistake: Calculating Delta power using P = 3·VL·IL·cos(ϕ). Correction: With line quantities, the factor is always √3 (P = √3·VL·IL·cos(ϕ)). The factor 3 applies only when using phase quantities (3·Vph·Iph·cos(ϕ)).'
    ],
    hi: [
      'त्रुटि: स्टार में फेज वोल्टेज निकालते समय 3 से भाग देना। सुधार: सदैव √3 (1.732) से भाग दें (जैसे 400V / √3 = 230.9V)।',
      'त्रुटि: थ्री-फेज शक्ति को सिंगल-फेज की तरह स्पंदित मानना। सुधार: संतुलित 3-फेज में तात्कालिक शक्ति पूर्णतः स्थिर रहती है।',
      'त्रुटि: डेल्टा में लाइन मानों के साथ 3 का उपयोग करना। सुधार: लाइन मानों के साथ सदैव √3 का प्रयोग होता है (P = √3·VL·IL·cos(ϕ))।'
    ],
    bn: [
      'ভুল: স্টারে ফেজ ভোল্টেজ নির্ণয়ে √3 এর বদলে 3 দিয়ে ভাগ করা। সংশোধন: সর্বদা √3 (১.৭৩২) দিয়ে ভাগ করতে হয় (৪০০V / √3 = ২৩০.৯V)।',
      'ভুল: থ্রি-ফেজ ক্ষমতাকে স্পন্দিত মনে করা। সংশোধন: সুষম থ্রি-ফেজে তাৎক্ষণিক ক্ষমতা সম্পূর্ণ স্থির থাকে।',
      'ভুল: লাইন মান দিয়ে ডেল্টা পাওয়ার বের করতে গিয়ে ৩ দিয়ে গুণ করা। সংশোধন: লাইন মানের ক্ষেত্রে সর্বদা সূত্র হলো P = √3·VL·IL·cos(ϕ)।'
    ]
  },
  keyTakeaways: {
    en: [
      'Symmetrical three-phase systems deliver 150% more power than single-phase using only 133% conductor material, maximizing transmission efficiency.',
      'The factor √3 originates directly from the vector difference between two equal phasors separated by 120°.',
      'Phase sequence verification is a critical commissioning procedure for motor control centers.'
    ],
    hi: [
      'थ्री-फेज प्रणालियां सिंगल-फेज की तुलना में बहुत कम तार सामग्री से कहीं अधिक विद्युत शक्ति संचारित करती हैं।',
      '√3 का कारक 120° पर स्थित दो समान फेजरों के सदिश अंतर से उत्पन्न होता है।',
      'मोटर कंट्रोल सेंटर चालू करने से पहले फेज अनुक्रम की जांच अत्यंत महत्वपूर्ण है।'
    ],
    bn: [
      'থ্রি-ফেজ ব্যবস্থা কম পরিবাহী তার ব্যবহার করে সিঙ্গেল-ফেজের চেয়ে অনেক বেশি ক্ষমতা সাশ্রয়ীভাবে পরিবহন করে।',
      '√3 সংখ্যাটি ১২০° ব্যবধানে থাকা দুটি ভেক্টরের বিয়োগফল থেকে উৎপন্ন হয়।',
      'মোটর কমিশনিংয়ের সময় ফেজ সিকোয়েন্স পরীক্ষা করা একটি বাধ্যতামূলক সুরক্ষা পদক্ষেপ।'
    ]
  },
  practiceQuestions: [
    {
      id: 'pq-ch14-l01-01',
      question: {
        en: 'Derive mathematically why the line-to-line voltage Vab in a balanced star-connected system leads the line-to-neutral voltage Van by exactly 30 degrees.',
        hi: 'गणितीय रूप से सिद्ध करें कि संतुलित स्टार सिस्टम में लाइन वोल्टेज Vab, फेज वोल्टेज Van से ठीक 30 डिग्री आगे क्यों रहता है।',
        bn: 'গাণিতিকভাবে প্রমাণ করুন যে একটি সুষম স্টার সিস্টেমে লাইন ভোল্টেজ Vab কেন ফেজ ভোল্টেজ Van থেকে ঠিক ৩০ ডিগ্রি অগ্রগামী হয়।'
      },
      hint: {
        en: 'Express Van = Vph ∠0° and Vbn = Vph ∠-120° in rectangular form and compute Vab = Van - Vbn.',
        hi: 'Van = Vph ∠0° और Vbn = Vph ∠-120° को आयताकार रूप में लिखें और Vab = Van - Vbn हल करें।',
        bn: 'Van = Vph ∠0° এবং Vbn = Vph ∠-120° কার্তেসীয় রূপে লিখে Vab = Van - Vbn হিসাব করুন।'
      }
    },
    {
      id: 'pq-ch14-l01-02',
      question: {
        en: 'A delta-connected three-phase induction motor draws a line current of 45 A from a 415 V supply. What is the current flowing through each motor phase winding?',
        hi: '415 V आपूर्ति से जुड़ा एक डेल्टा-कनेक्टेड 3-फेज इंडक्शन मोटर 45 A लाइन धारा लेता है। प्रत्येक वाइंडिंग से प्रवाहित फेज धारा क्या होगी?',
        bn: 'একটি ডেল্টা-সংযুক্ত ৩-ফেজ মোটর ৪১৫ V সাপ্লাই থেকে ৪৫ A লাইন কারেন্ট গ্রহণ করে। প্রতিটি মোটর ওয়াইন্ডিংয়ে প্রবাহিত কারেন্ট কত?'
      },
      hint: {
        en: 'In delta, I_ph = I_L / √3 = 45 / 1.732.',
        hi: 'डेल्टा में, I_ph = I_L / √3 = 45 / 1.732।',
        bn: 'ডেল্টায়, I_ph = I_L / √3 = 45 / 1.732।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch14-l01-01',
      question: {
        en: 'In a symmetrical three-phase 400 V star-connected supply, what is the nominal RMS value of the line-to-neutral phase voltage?',
        hi: 'एक सममितीय 400 V स्टार-कनेक्टेड आपूर्ति में, लाइन-टू-न्यूट्रल फेज वोल्टेज का RMS मान क्या होगा?',
        bn: 'একটি প্রতিসম ৪০০ V স্টার-সংযুক্ত সরবরাহে লাইন-টু-নিউট্রাল ফেজ ভোল্টেজের RMS মান কত?'
      },
      options: [
        { en: '400.0 V', hi: '400.0 V', bn: '৪০০.০ V' },
        { en: '230.9 V', hi: '230.9 V', bn: '২৩০.৯ V' },
        { en: '133.3 V', hi: '133.3 V', bn: '১৩৩.৩ V' },
        { en: '692.8 V', hi: '692.8 V', bn: '৬৯২.৮ V' }
      ],
      correctAnswer: 1,
      explanation: {
        en: 'In a star-connected system, V_ph = V_L / √3 = 400 / 1.73205 ≈ 230.94 V.',
        hi: 'स्टार कनेक्शन में, V_ph = V_L / √3 = 400 / 1.73205 ≈ 230.9 V।',
        bn: 'স্টার সিস্টেমে, V_ph = V_L / √3 = ৪০০ / ১.৭৩২০৫ ≈ ২৩০.৯ V।'
      }
    },
    {
      id: 'mcq-ch14-l01-02',
      question: {
        en: 'What is the electrical phase displacement between the line voltage Vab and the phase voltage Van in a balanced star-connected supply?',
        hi: 'संतुलित स्टार आपूर्ति में लाइन वोल्टेज Vab और फेज वोल्टेज Van के बीच कलान्तर कितना होता है?',
        bn: 'একটি সুষম স্টার সরবরাহে লাইন ভোল্টেজ Vab এবং ফেজ ভোল্টেজ Van এর মধ্যবর্তী দশা কোণ কত?'
      },
      options: [
        { en: 'Vab lags Van by 30°', hi: 'Vab, Van से 30° पीछे रहता है', bn: 'Vab, Van থেকে ৩০° পিছিয়ে থাকে' },
        { en: 'Vab leads Van by 30°', hi: 'Vab, Van से 30° आगे रहता है', bn: 'Vab, Van থেকে ৩০° এগিয়ে থাকে' },
        { en: 'Vab leads Van by 120°', hi: 'Vab, Van से 120° आगे रहता है', bn: 'Vab, Van থেকে ১২০° এগিয়ে থাকে' },
        { en: 'Vab is in phase with Van', hi: 'Vab और Van समान कला में होते हैं', bn: 'Vab এবং Van একই দশায় থাকে' }
      ],
      correctAnswer: 1,
      explanation: {
        en: 'Vector subtraction V_ab = V_an - V_bn produces √3 · V_ph ∠+30°, meaning line voltage leads phase voltage by 30° in a positive sequence system.',
        hi: 'V_ab = V_an - V_bn का हल √3 · V_ph ∠+30° देता है, जिसका अर्थ है कि लाइन वोल्टेज फेज वोल्टेज से 30° आगे रहता है।',
        bn: 'ভেক্টর বিয়োগ V_ab = V_an - V_bn করলে পাওয়া যায় √3 · V_ph ∠+30°, অর্থাৎ লাইন ভোল্টেজ ফেজ ভোল্টেজ থেকে ৩০° এগিয়ে থাকে।'
      }
    },
    {
      id: 'mcq-ch14-l01-03',
      question: {
        en: 'A balanced delta-connected load draws a phase current of 20 A per branch. What is the magnitude of the line conductor current feeding the load?',
        hi: 'एक संतुलित डेल्टा लोड प्रति शाखा 20 A फेज धारा लेता है। लोड को आपूर्ति करने वाली लाइन धारा का मान क्या होगा?',
        bn: 'একটি সুষম ডেল্টা লোড প্রতি শাখায় ২০ A ফেজ কারেন্ট গ্রহণ করে। সরবরাহ লাইনের কারেন্টের মান কত?'
      },
      options: [
        { en: '20.0 A', hi: '20.0 A', bn: '২০.০ A' },
        { en: '11.55 A', hi: '11.55 A', bn: '১১.৫৫ A' },
        { en: '34.64 A', hi: '34.64 A', bn: '৩৪.৬৪ A' },
        { en: '60.0 A', hi: '60.0 A', bn: '৬০.০ A' }
      ],
      correctAnswer: 2,
      explanation: {
        en: 'In delta connections, line current is √3 times phase current: I_L = √3 · I_ph = 1.73205 · 20 A = 34.64 A.',
        hi: 'डेल्टा में लाइन धारा I_L = √3 · I_ph = 1.73205 · 20 A = 34.64 A होती है।',
        bn: 'ডেল্টা কানেকশনে লাইন কারেন্ট I_L = √3 · I_ph = ১.৭৩২০৫ · ২০ A = ৩৪.৬৪ A।'
      }
    },
    {
      id: 'mcq-ch14-l01-04',
      question: {
        en: 'Why is the instantaneous power delivered to a balanced three-phase motor completely constant with respect to time?',
        hi: 'संतुलित थ्री-फेज मोटर को दी जाने वाली तात्कालिक शक्ति समय के साथ पूरी तरह स्थिर क्यों रहती है?',
        bn: 'একটি সুষম থ্রি-ফেজ মোটরে সরবরাহকৃত তাৎক্ষণিক ক্ষমতা সময়ের সাথে সম্পূর্ণ ধ্রুবক থাকে কেন?'
      },
      options: [
        { en: 'Because voltage and current amplitudes are zero at all times', hi: 'क्योंकि वोल्टेज और धारा हर समय शून्य होते हैं', bn: 'কারণ ভোল্টেজ ও কারেন্ট সর্বদা শূন্য থাকে' },
        { en: 'Because the double-frequency (2ωt) oscillating components of the three phases cancel out algebraically to zero', hi: 'क्योंकि तीनों फेजों के 2ωt दोलनशील घटक परस्पर निरस्त होकर शून्य हो जाते हैं', bn: 'কারণ তিনটি ফেজের দ্বিগুণ ফ্রিকোয়েন্সির (2ωt) স্পন্দনশীল উপাদানগুলি যোগ হয়ে শূন্য হয়ে যায়' },
        { en: 'Because inductors absorb all fluctuating energy without releasing it', hi: 'क्योंकि प्रेरक सभी ऊर्जा सोख लेते हैं', bn: 'কারণ ইন্ডাক্টর সমস্ত শক্তি শোষণ করে' },
        { en: 'Because power is measured only in RMS values rather than instantaneous values', hi: 'क्योंकि शक्ति केवल RMS में मापी जाती है', bn: 'কারণ ক্ষমতা শুধুমাত্র RMS মানে মাপা হয়' }
      ],
      correctAnswer: 1,
      explanation: {
        en: 'The trigonometric sum cos(2ωt) + cos(2ωt - 240°) + cos(2ωt - 480°) equals zero for any angle 2ωt. Hence, only the constant term 3·V_ph·I_ph·cos(ϕ) remains.',
        hi: 'तीनों फेजों के दोलनशील घटक cos(2ωt) + cos(2ωt - 240°) + cos(2ωt + 120°) का योग सदैव शून्य होता है, अतः केवल स्थिर मान ही बचता है।',
        bn: 'ত্রিকোণমিতিক যোগফল cos(2ωt) + cos(2ωt - 240°) + cos(2ωt + 120°) এর মান সর্বদা শূন্য হয়, ফলে কেবল ধ্রুবক অংশটি অবশিষ্ট থাকে।'
      }
    },
    {
      id: 'mcq-ch14-l01-05',
      question: {
        en: 'If phases B and C of a three-phase induction motor supply are interchanged, what immediate physical effect occurs?',
        hi: 'यदि 3-फेज इंडक्शन मोटर के फेज B और C तारों को आपस में बदल दिया जाए, तो क्या तात्कालिक भौतिक प्रभाव होगा?',
        bn: 'যদি থ্রি-ফেজ ইন্ডাকশন মোটরের ফেজ B এবং C এর লাইন পরস্পর বদল করা হয়, তবে কী তাৎক্ষণিক প্রভাব পড়বে?'
      },
      options: [
        { en: 'The motor continues running normally in the forward direction', hi: 'मोटर आगे की दिशा में सामान्य रूप से चलती रहेगी', bn: 'মোটরটি আগের মতোই সামনের দিকে স্বাভাবিকভাবে চলবে' },
        { en: 'The motor immediately reverses its physical direction of rotation', hi: 'मोटर तुरंत अपनी घूमने की दिशा उलट देगी', bn: 'মোটরটি অবিলম্বে তার ঘূর্ণন দিক উল্টে ফেলবে' },
        { en: 'The line voltage drops to zero and trips the main breaker', hi: 'लाइन वोल्टेज शून्य हो जाएगा और ब्रेकर ट्रिप कर जाएगा', bn: 'লাইন ভোল্টেজ শূন্য হয়ে যাবে এবং ব্রেকার ট্রিপ করবে' },
        { en: 'The operating frequency doubles from 50 Hz to 100 Hz', hi: 'कार्यकारी आवृत्ति 50 Hz से बढ़कर 100 Hz हो जाएगी', bn: 'অপারেটিং ফ্রিকোয়েন্সি ৫০ Hz থেকে দ্বিগুণ হয়ে ১০০ Hz হবে' }
      ],
      correctAnswer: 1,
      explanation: {
        en: 'Interchanging any two supply lines reverses the phase sequence from ABC to ACB, which reverses the rotational direction of the stator rotating magnetic field (RMF), thereby reversing motor rotation.',
        hi: 'किन्हीं दो तारों को बदलने से फेज अनुक्रम ABC से ACB में बदल जाता है, जिससे स्टेटर के चुंबकीय क्षेत्र की दिशा उलट जाती है और मोटर उल्टी घूमने लगती है।',
        bn: 'যেকোনো দুটি ফেজ তার অদলবদল করলে ফেজ সিকোয়েন্স ABC থেকে ACB তে পরিবর্তিত হয়, যা স্টেটর ম্যাগনেটিক ফিল্ডের ঘূর্ণন দিক উল্টে দেয় এবং মোটর উল্টো ঘোরে।'
      }
    },
    {
      id: 'mcq-ch14-l01-06',
      question: {
        en: 'In a balanced 4-wire star-connected system, what is the magnitude of the neutral conductor current In?',
        hi: 'एक संतुलित 4-तार स्टार-कनेक्टेड प्रणाली में, न्यूट्रल चालक धारा In का मान क्या होता है?',
        bn: 'একটি সুষম ৪-তার বিশিষ্ট স্টার সিস্টেমে নিউট্রাল তারের কারেন্ট In এর মান কত?'
      },
      options: [
        { en: 'In = Ia + Ib + Ic = 3 · IL', hi: 'In = 3 · IL', bn: 'In = 3 · IL' },
        { en: 'In = 0 A (Zero Amperes)', hi: 'In = 0 A (शून्य एम्पीयर)', bn: 'In = ০ A (শূন্য অ্যাম্পিয়ার)' },
        { en: 'In = IL / √3', hi: 'In = IL / √3', bn: 'In = IL / √3' },
        { en: 'In = √3 · IL', hi: 'In = √3 · IL', bn: 'In = √3 · IL' }
      ],
      correctAnswer: 1,
      explanation: {
        en: 'By Kirchhoff\'s Current Law, In = -(Ia + Ib + Ic). In a balanced system, the three symmetrical vectors of equal magnitude separated by 120° sum identically to zero.',
        hi: 'KCL के अनुसार, In = -(Ia + Ib + Ic)। संतुलित प्रणाली में 120° पर स्थित तीन समान फेजरों का योग शून्य होता है, अतः In = 0 A।',
        bn: 'KCL অনুসারে, In = -(Ia + Ib + Ic)। সুষম সিস্টেমে ১২০° ব্যবধানে থাকা তিনটি সমান কারেন্ট ভেক্টরের যোগফল সর্বদা শূন্য হয়, তাই In = ০ A।'
      }
    },
    {
      id: 'mcq-ch14-l01-07',
      question: {
        en: 'A three-phase delta load has branch impedance Z_delta = 30 Ω. What is the equivalent impedance per phase Z_star if the load is reconnected in star to draw the exact same line current from the same supply voltage?',
        hi: 'एक 3-फेज डेल्टा लोड की शाखा प्रतिबाधा Z_delta = 30 Ω है। समान सप्लाई वोल्टेज पर समान लाइन धारा लेने के लिए स्टार में तुल्य प्रतिबाधा Z_star क्या होगी?',
        bn: 'একটি থ্রি-ফেজ ডেল্টা লোডের প্রতি শাখার ইম্পিডেন্স Z_delta = ৩০ Ω। একই সরবরাহ ভোল্টেজ থেকে একই লাইন কারেন্ট পেতে হলে সমতুল্য স্টার ইম্পিডেন্স Z_star কত হতে হবে?'
      },
      options: [
        { en: '90 Ω', hi: '90 Ω', bn: '৯০ Ω' },
        { en: '10 Ω', hi: '10 Ω', bn: '১০ Ω' },
        { en: '51.96 Ω', hi: '51.96 Ω', bn: '৫১.৯৬ Ω' },
        { en: '30 Ω', hi: '30 Ω', bn: '৩০ Ω' }
      ],
      correctAnswer: 1,
      explanation: {
        en: 'The standard impedance transformation for balanced sets is Z_star = Z_delta / 3 = 30 / 3 = 10 Ω. (Or conversely, Z_delta = 3 · Z_star).',
        hi: 'संतुलित लोड के लिए रूपांतरण Z_star = Z_delta / 3 = 30 / 3 = 10 Ω होता है।',
        bn: 'সুষম সেটের ক্ষেত্রে স্ট্যান্ডার্ড রূপান্তর হলো Z_star = Z_delta / 3 = ৩০ / ৩ = ১০ Ω।'
      }
    },
    {
      id: 'mcq-ch14-l01-08',
      question: {
        en: 'What is the total active power drawn by a 415 V, 3-phase motor drawing 25 A line current at an operating power factor of 0.85 lagging?',
        hi: '0.85 लैगिंग पावर फैक्टर पर 415 V, 3-फेज मोटर द्वारा 25 A लाइन धारा लेने पर कुल सक्रिय शक्ति क्या होगी?',
        bn: '৪১৫ V, ৩-ফেজ মোটর ০.৮৫ ল্যাগিং পাওয়ার ফ্যাক্টরে ২৫ A লাইন কারেন্ট গ্রহণ করলে মোট সক্রিয় ক্ষমতা কত?'
      },
      options: [
        { en: '8.82 kW', hi: '8.82 kW', bn: '৮.৮২ kW' },
        { en: '15.28 kW', hi: '15.28 kW', bn: '১৫.২৮ kW' },
        { en: '26.46 kW', hi: '26.46 kW', bn: '২৬.৪৬ kW' },
        { en: '17.97 kW', hi: '17.97 kW', bn: '১৭.৯৭ kW' }
      ],
      correctAnswer: 1,
      explanation: {
        en: 'Total Power P = √3 · V_L · I_L · cos(ϕ) = 1.73205 · 415 · 25 · 0.85 = 15,275 W ≈ 15.28 kW.',
        hi: 'कुल शक्ति P = √3 · V_L · I_L · cos(ϕ) = 1.73205 · 415 · 25 · 0.85 = 15,275 W ≈ 15.28 kW।',
        bn: 'মোট ক্ষমতা P = √3 · V_L · I_L · cos(ϕ) = ১.৭৩২০৫ · ৪১৫ · ২৫ · ০.৮৫ = ১৫,২৭৫ W ≈ ১৫.২৮ kW।'
      }
    }
  ]
};

export const LESSON_THREE_PHASE_PHASOR_FUNDAMENTALS = LESSON_THREE_PHASE_ADVANCED_ANALYSIS;
