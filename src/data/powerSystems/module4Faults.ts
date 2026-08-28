import { Chapter } from '../../types';

export const POWER_SYSTEMS_MODULE_4: Chapter = {
  id: 'ps-ch4-faults',
  subjectId: 'power-systems',
  order: 4,
  title: {
    en: 'Module 4: Fault Analysis & Symmetrical Components',
    hi: 'मॉड्यूल 4: फॉल्ट विश्लेषण एवं सममित घटक',
    bn: 'মডিউল ৪: ফল্ট অ্যানালিসিস ও সিমেট্রিক্যাল কম্পোনেন্টস'
  },
  topics: [
    {
      id: 'ps-tp14-per-unit-system',
      chapterId: 'ps-ch4-faults',
      order: 1,
      level: 'Engineering',
      title: {
        en: '14. Per-Unit (p.u.) System & Reactance Diagrams',
        hi: '14. पर-यूनिट (p.u.) प्रणाली एवं रिएक्टेंस आरेख',
        bn: '১৪. পার-ইউনিট (p.u.) পদ্ধতি ও রিঅ্যাকট্যান্স ডায়াগ্রাম'
      },
      description: {
        en: 'Base MVA and Base kV selection across transformers, p.u. impedance conversion formula, and conversion of one-line diagrams to impedance/reactance networks.',
        hi: 'बेस MVA और बेस kV चयन, p.u. इम्पीडेंस रूपांतरण सूत्र एवं सिंगल-लाइन से रिएक्टेंस आरेख निर्माण।',
        bn: 'ট্রান্সফরমারের বিভিন্ন ভোল্টেজ স্তরে বেস MVA ও বেস kV নির্বাচন, p.u. রূপান্তর সূত্র এবং সিঙ্গেল-লাইন থেকে রিঅ্যাকট্যান্স ডায়াগ্রাম।'
      },
      lesson: {
        id: 'lesson-ps-tp14',
        topicId: 'ps-tp14-per-unit-system',
        title: {
          en: 'Per-Unit (p.u.) System Architecture & Impedance Transformation',
          hi: 'पर-यूनिट (p.u.) प्रणाली एवं इम्पीडेंस रूपांतरण',
          bn: 'পার-ইউনিট (p.u.) সিস্টেম ও ইম্পিডেন্স রূপান্তর'
        },
        description: {
          en: 'Normalizing power system parameters to eliminate transformer transformation ratios from network equations.',
          hi: 'ट्रांसफॉर्मर टर्न रेश्यो को हटाकर पावर सिस्टम गणनाओं को सरल बनाने हेतु पर-यूनिट फ्रेमवर्क।',
          bn: 'ট্রান্সফরমার রেশিও দূর করে জটিল নেটওয়ার্ক সমাধান সহজ করার পার-ইউনিট বিশ্লেষণ।'
        },
        detailedExplanation: {
          en: 'The per-unit (p.u.) value of any electrical quantity is defined as the dimensionless ratio of its actual value to an arbitrarily chosen base value:\n$$\\text{Value (p.u.)} = \\frac{\\text{Actual Value (in physical units)}}{\\text{Base Value (in same physical units)}}$$\n\n1. Base Selection Rules:\n- A single three-phase Base Power ($S_{base}$ in MVA or kVA) is chosen common to the entire interconnected grid.\n- Base Voltages ($V_{base}$ in kV line-to-line) change across each transformer according to its nominal transformation turns ratio.\n- Base Current: $I_{base} = \\frac{S_{base\\text{, 3}\\\\phi}}{\\sqrt{3} \\cdot V_{base\\text{, }LL}}$ (kA)\n- Base Impedance: $Z_{base} = \\frac{(V_{base\\text{, }LL})^2}{S_{base\\text{, 3}\\phi}}$ (Ohms)\n\n2. Changing the Base of Per-Unit Impedance:\nWhen an equipment (generator, transformer) with rated impedance $Z_{pu,old}$ on its manufacturer nameplate base ($S_{base,old}, V_{base,old}$) is integrated into a system study base ($S_{base,new}, V_{base,new}$):\n$$Z_{pu,new} = Z_{pu,old} \\times \\left( \\frac{S_{base,new}}{S_{base,old}} \\right) \\times \\left( \\frac{V_{base,old}}{V_{base,new}} \\right)^2$$\n\n3. Advantages of Per-Unit System:\n- Transformer series impedance is identical whether referred to the primary or secondary winding.\n- Machines of comparable size have per-unit parameters falling into narrow numerical bands regardless of absolute ratings.',
          hi: '1. पर-यूनिट मान: वास्तविक मान और बेस मान का अनुपात।\n2. बेस संबंध:\n- $Z_{base} = \\frac{(V_{base})^2}{S_{base}}$ (ओम में)।\n- नया p.u. इम्पीडेंस: $Z_{pu,new} = Z_{pu,old} \\times \\frac{S_{new}}{S_{old}} \\times \\left(\\frac{V_{old}}{V_{new}}\\right)^2$।\n3. लाभ: ट्रांसफॉर्मर का p.u. इम्पीडेंस प्राइमरी और सेकेंडरी दोनों तरफ समान होता है।',
          bn: '১. পার-ইউনিট সংজ্ঞা: প্রকৃত মান এবং বেস মানের অনুপাত।\n২. বেস সূত্রসমূহ:\n- $Z_{base} = \\frac{(V_{base})^2}{S_{base}}$ (ওহম)।\n- নতুন p.u. রূপান্তর সূত্র: $Z_{pu,new} = Z_{pu,old} \\times \\frac{S_{new}}{S_{old}} \\times \\left(\\frac{V_{old}}{V_{new}}\\right)^2$।\n৩. সুবিধা: প্রাইমারি বা সেকেন্ডারি যেকোনো দিক থেকে বিবেচনা করলেও ট্রান্সফরমারের p.u. ইম্পিডেন্স সর্বদা একই থাকে।'
        },
        keyTakeaways: {
          en: [
            'Base Impedance Zbase = (Base kV)² / Base MVA in Ohms.',
            'Per-unit impedance of a transformer is identical on both primary and secondary sides.',
            'Converting all components to a common system MVA base allows direct addition of series/parallel impedances.'
          ],
          hi: [
            'Zbase = (Base kV)² / Base MVA.',
            'ट्रांसफॉर्मर का p.u. इम्पीडेंस दोनों तरफ एक समान होता है।',
            'कॉमन बेस पर लाने के बाद सभी कंपोनेंट्स को सीधे जोड़ा जा सकता है।'
          ],
          bn: [
            'বেস ইম্পিডেন্স Zbase = (Base kV)² / Base MVA ওহমে।',
            'ট্রান্সফরমারের পার-ইউনিট ইম্পিডেন্স প্রাইমারি ও সেকেন্ডারি উভয় দিকেই সমান হয়।',
            'একটি সাধারণ MVA বেসে রূপান্তর করে সিরিজ ও প্যারালাল রিঅ্যাকট্যান্স সরাসরি যোগ করা যায়।'
          ]
        },
        formulas: [
          {
            id: 'f-zpu-change',
            name: { en: 'Per-Unit Impedance Base Change Formula', hi: 'p.u. बेस परिवर्तन सूत्र', bn: 'পার-ইউনিট বেস রূপান্তর সূত্র' },
            formula: 'Z_{\\text{pu, new}} = Z_{\\text{pu, old}} \\times \\left( \\frac{S_{\\text{base, new}}}{S_{\\text{base, old}}} \\right) \\times \\left( \\frac{V_{\\text{base, old}}}{V_{\\text{base, new}}} \\right)^2',
            description: {
              en: 'Standard IEEE formula to convert equipment per-unit impedance to system study base.',
              hi: 'सिस्टम स्टडी बेस में रूपांतरण का मानक सूत्र।',
              bn: 'সিস্টেম স্টাডি বেসে p.u. ইম্পিডেন্স রূপান্তরের আদর্শ সমীকরণ।'
            }
          },
          {
            id: 'f-zbase-ohms',
            name: { en: 'Base Impedance in Ohms', hi: 'बेस इम्पीडेंस सूत्र', bn: 'বেস ইম্পিডেন্স সমীকরণ' },
            formula: 'Z_{\\text{base}} = \\frac{(V_{\\text{base, LL}})^2}{S_{\\text{base, 3}\\phi}} = \\frac{(\\text{kV}_{\\text{base}})^2}{\\text{MVA}_{\\text{base}}} \\; \\Omega',
            description: {
              en: 'Relates base impedance in Ohms to line-to-line kV and three-phase MVA base.',
              hi: 'kV और MVA बेस से ओम में बेस इम्पीडेंस ज्ञात करना।',
              bn: 'লাইন-টু-লাইন kV এবং ৩-ফেজ MVA বেস থেকে বেস ইম্পিডেন্স (ওহম) নির্ণয়।'
            }
          }
        ],
        solvedExamples: [
          {
            id: 'ex-zpu-calc-1',
            problem: {
              en: 'A 3-phase, 50 MVA, 11 kV generator has a reactance of 0.20 p.u. on its own rating base. Find the per-unit reactance of the generator on a new system base of 100 MVA and 13.8 kV.',
              hi: 'एक 3-फेज, 50 MVA, 11 kV जनरेटर का रिएक्टेंस अपनी रेटिंग बेस पर 0.20 p.u. है। 100 MVA और 13.8 kV के नए सिस्टम बेस पर इसका नया p.u. रिएक्टेंस ज्ञात कीजिए।',
              bn: 'একটি ৩-ফেজ, ৫০ MVA, ১১ kV জেনারেটরের নিজস্ব রেটিং বেসে রিঅ্যাকট্যান্স ০.২০ p.u.। নতুন ১০০ MVA এবং ১৩.৮ kV সিস্টেম বেসে জেনারেটরটির পার-ইউনিট রিঅ্যাকট্যান্স নির্ণয় করুন।'
            },
            solution: {
              en: 'Step 1: Formula Zpu_new = Zpu_old × (Sbase_new / Sbase_old) × (Vbase_old / Vbase_new)²\nStep 2: Zpu_old = 0.20, S_old = 50 MVA, S_new = 100 MVA, V_old = 11 kV, V_new = 13.8 kV\nStep 3: Zpu_new = 0.20 × (100 / 50) × (11 / 13.8)²\nStep 4: Zpu_new = 0.20 × 2.0 × (0.7971)² = 0.40 × 0.6354 = 0.2542 p.u.',
              hi: 'चरण 1: Zpu_new = 0.20 × (100 / 50) × (11 / 13.8)²\nचरण 2: Zpu_new = 0.20 × 2 × 0.6354 = 0.254 p.u.',
              bn: 'ধাপ ১: Zpu_new = ০.২০ × (১০০ / ৫০) × (১১ / ১৩.৮)²\nধাপ ২: Zpu_new = ০.২০ × ২ × ০.৬৩৫৪ = ০.২৫৪ p.u.'
            },
            givenValues: { 'Old Rating': '50 MVA, 11 kV', 'Old Reactance': '0.20 p.u.', 'New Base': '100 MVA, 13.8 kV' },
            finalAnswer: {
              en: 'New Reactance = 0.254 p.u. on 100 MVA, 13.8 kV base',
              hi: 'नया रिएक्टेंस = 0.254 p.u.',
              bn: 'নতুন রিঅ্যাকট্যান্স = ০.২৫৪ p.u.'
            }
          }
        ],
        mcqs: [
          {
            id: 'mcq-pu-1',
            question: {
              en: 'If a transmission line has an actual series impedance of 20 Ω and the system base is chosen as 100 MVA and 132 kV, what is the per-unit impedance of the line?',
              hi: 'यदि एक ट्रांसमिशन लाइन का वास्तविक इम्पीडेंस 20 Ω है तथा सिस्टम बेस 100 MVA और 132 kV है, तो लाइन का p.u. इम्पीडेंस क्या होगा?',
              bn: 'একটি সঞ্চালন লাইনের প্রকৃত ইম্পিডেন্স ২০ Ω এবং সিস্টেম বেস ১০০ MVA ও ১৩২ kV হলে লাইনটির p.u. ইম্পিডেন্স কত হবে?'
            },
            options: [
              { id: 'opt-1', text: { en: '0.115 p.u.', hi: '0.115 p.u.', bn: '০.১১৫ p.u.' } },
              { id: 'opt-2', text: { en: '0.229 p.u.', hi: '0.229 p.u.', bn: '০.২২৯ p.u.' } },
              { id: 'opt-3', text: { en: '0.057 p.u.', hi: '0.057 p.u.', bn: '০.০৫৭ p.u.' } },
              { id: 'opt-4', text: { en: '0.500 p.u.', hi: '0.500 p.u.', bn: '০.৫০০ p.u.' } }
            ],
            correctOptionId: 'opt-1',
            explanation: {
              en: 'Base Impedance Zbase = (kV)² / MVA = (132)² / 100 = 174.24 Ω. Therefore Zpu = Zactual / Zbase = 20 / 174.24 = 0.1148 p.u. ≈ 0.115 p.u.',
              hi: 'Zbase = (132)² / 100 = 174.24 Ω। Zpu = 20 / 174.24 = 0.115 p.u.।',
              bn: 'বেস ইম্পিডেন্স Zbase = (১৩২)² / ১০০ = ১৭৪.২৪ ওহম। অতএব Zpu = ২০ / ১৭৪.২৪ = ০.১১৫ p.u.।'
            }
          }
        ]
      }
    },
    {
      id: 'ps-tp15-symmetrical-faults',
      chapterId: 'ps-ch4-faults',
      order: 2,
      level: 'Engineering',
      title: {
        en: '15. Symmetrical 3-Phase Faults & Circuit Breaker Ratings',
        hi: '15. सममित 3-फेज फॉल्ट एवं सर्किट ब्रेकर रेटिंग',
        bn: '১৫. সিমেট্রিক্যাল ৩-ফেজ ফল্ট ও সার্কিট ব্রেকার রেটিং'
      },
      description: {
        en: 'Subtransient (Xd"), Transient (Xd\'), and Steady-state (Xd) reactances, Short Circuit MVA (Fault Level = Base MVA / Zth_pu), and symmetrical breaking current calculation.',
        hi: 'सब-ट्रांजिएंट (Xd"), ट्रांजिएंट (Xd\') एवं स्टेडी-स्टेट रिएक्टेंस, शॉर्ट सर्किट MVA तथा फॉल्ट करंट गणना।',
        bn: 'সাব-ট্রানজিয়েন্ট (Xd"), ট্রানজিয়েন্ট (Xd\') এবং স্টেডি-স্টেট রিঅ্যাকট্যান্স, শর্ট সার্কিট MVA ও ফল্ট কারেন্ট হিসাব।'
      },
      lesson: {
        id: 'lesson-ps-tp15',
        topicId: 'ps-tp15-symmetrical-faults',
        title: {
          en: 'Symmetrical 3-Phase Short-Circuit Analysis & Fault MVA',
          hi: 'सममित 3-फेज शॉर्ट-सर्किट विश्लेषण एवं फॉल्ट MVA',
          bn: 'সিমেট্রিক্যাল ৩-ফেজ শর্ট-সার্কিট বিশ্লেষণ ও ফল্ট MVA'
        },
        description: {
          en: 'Transient behavior of synchronous machines during solid 3-phase faults and selection of switchgear ratings.',
          hi: '3-फेज फॉल्ट के दौरान सिंक्रोनस जनरेटर का व्यवहार एवं स्विचगियर चयन।',
          bn: '৩-ফেজ ফল্টে সিনক্রোনাস জেনারেটরের ট্রানজিয়েন্ট আচরণ এবং সুইচগিয়ার রেটিং নির্ধারণ।'
        },
        detailedExplanation: {
          en: 'A 3-phase symmetrical fault occurs when all three phases are simultaneously short-circuited together. Because the system remains balanced, it can be solved on a per-phase basis using standard Thévenin equivalent impedance.\n\n1. Synchronous Machine Reactances During Fault:\n- Subtransient Reactance ($X_d\'\'$): Governs the first 1 to 3 cycles (0–50 ms) after fault inception. Damper windings counteract flux change, resulting in lowest reactance and maximum initial fault current ($I_f\'\' = E_g / X_d\'\'$). Used to calculate Circuit Breaker Making Current and instantaneous relay settings.\n- Transient Reactance ($X_d\'$): Governs from ~3 cycles to ~30 cycles (50 ms to 1.0 s) after damper currents decay. Controlled by field winding time constants. Used to determine Circuit Breaker Symmetrical Breaking Current rating.\n- Steady-State Reactance ($X_d$): Governs after ~1 to 2 seconds when all transient currents have decayed and armature reaction demagnetizes the field ($I_{f,ss} = E_g / X_d$).\n\n2. Short Circuit MVA & Fault Current:\nFor a Thévenin per-unit impedance $Z_{th,pu}$ viewed from the fault point:\n$$\\text{Short Circuit MVA (Fault Level)} = \\frac{S_{base\\text{, 3}\\phi}}{Z_{th,pu}}$$\n$$\\text{Symmetrical Fault Current } I_f = \\frac{I_{base}}{Z_{th,pu}} = \\frac{\\text{Short Circuit MVA} \\times 1000}{\\sqrt{3} \\cdot V_{base\\text{, }LL}}$$',
          hi: '1. रिएक्टेंस के चरण:\n- सब-ट्रांजिएंट ($X_d\'\'$): पहले 1-3 चक्रों में उच्चतम करंट (मेकिंग करंट रेटिंग हेतु)।\n- ट्रांजिएंट ($X_d\'$): 3-30 चक्रों में (सर्किट ब्रेकर ब्रेकिंग करंट हेतु)।\n- स्टेडी-स्टेट ($X_d$): 1-2 सेकंड बाद।\n2. शॉर्ट सर्किट क्षमता: $\\text{SC MVA} = \\frac{\\text{Base MVA}}{Z_{th,pu}}$।',
          bn: '১. রিঅ্যাকট্যান্সের ধাপসমূহ:\n- সাব-ট্রানজিয়েন্ট ($X_d\'\'$): প্রথম ১-৩ সাইকেলে সর্বোচ্চ কারেন্ট (ব্রেকারের মেকিং কারেন্ট রেটিংয়ের জন্য)।\n- ট্রানজিয়েন্ট ($X_d\'$): ৩-৩০ সাইকেলে (ব্রেকারের ব্রেকিং কারেন্ট রেটিংয়ের জন্য)।\n- স্টেডি-স্টেট ($X_d$): ১-২ সেকেন্ড পর।\n২. শর্ট সার্কিট MVA: $\\text{SC MVA} = \\frac{\\text{Base MVA}}{Z_{th,pu}}$।'
        },
        keyTakeaways: {
          en: [
            'Subtransient reactance Xd" determines the initial peak current and Circuit Breaker Making Rating (2.55 × Symmetrical Breaking Current).',
            'Transient reactance Xd\' determines Circuit Breaker Symmetrical Interrupting/Breaking Capacity.',
            'Short Circuit MVA = Base MVA / Zth_pu.'
          ],
          hi: [
            'सब-ट्रांजिएंट रिएक्टेंस Xd" मेकिंग करंट निर्धारित करता है।',
            'ट्रांजिएंट रिएक्टेंस Xd\' ब्रेकिंग करंट निर्धारित करता है।',
            'शॉर्ट सर्किट MVA = Base MVA / Zth_pu।'
          ],
          bn: [
            'সাব-ট্রানজিয়েন্ট রিঅ্যাকট্যান্স Xd" ব্রেকারের মেকিং কারেন্ট রেটিং নির্ধারণ করে।',
            'ট্রানজিয়েন্ট রিঅ্যাকট্যান্স Xd\' ব্রেকারের ব্রেকিং কারেন্ট রেটিং নির্ধারণ করে।',
            'শর্ট সার্কিট MVA = Base MVA / Zth_pu।'
          ]
        },
        formulas: [
          {
            id: 'f-sc-mva',
            name: { en: 'Short Circuit MVA (Fault Level)', hi: 'शॉर्ट सर्किट MVA सूत्र', bn: 'শর্ট সার্কিট MVA সমীকরণ' },
            formula: '\\text{Fault Level (SC MVA)} = \\frac{S_{\\text{base}}}{Z_{\\text{th, pu}}}',
            description: {
              en: 'Sbase = Chosen 3-phase base MVA, Zth,pu = Total Thévenin per-unit impedance to fault point.',
              hi: 'फॉल्ट पॉइंट पर कुल शॉर्ट सर्किट क्षमता।',
              bn: 'ফল্ট পয়েন্টে মোট শর্ট সার্কিট ক্ষমতা (MVA)।'
            }
          },
          {
            id: 'f-making-current',
            name: { en: 'Circuit Breaker Making Current Rating', hi: 'मेकिंग करंट रेटिंग सूत्र', bn: 'ব্রেকার মেকিং কারেন্ট রেটিং' },
            formula: 'I_{\\text{making (peak)}} = \\sqrt{2} \\times 1.8 \\times I_{\\text{breaking (rms)}} = 2.55 \\times I_{\\text{breaking (rms)}}',
            description: {
              en: 'Accounts for maximum DC offset component during asymmetrical fault inception.',
              hi: 'DC ऑफसेट को सम्मिलित करते हुए पीक मेकिंग करंट।',
              bn: 'DC অফসেট সহ পিক মেকিং কারেন্ট রেটিং (২.৫৫ × ব্রেকিং কারেন্ট)।'
            }
          }
        ],
        solvedExamples: [
          {
            id: 'ex-fault-mva-1',
            problem: {
              en: 'A 3-phase 11 kV, 25 MVA generator with subtransient reactance of 15% is connected through a 25 MVA, 11/66 kV step-up transformer of 10% reactance to a 66 kV transmission line of reactance 12 Ω. A solid 3-phase fault occurs at the receiving end of the transmission line. Calculate: (a) Total fault level in MVA, and (b) Fault current in Amperes at the fault point.',
              hi: 'एक 25 MVA 11 kV जनरेटर (X"=15%) 25 MVA 11/66 kV ट्रांसफॉर्मर (X=10%) और 66 kV लाइन (X=12 Ω) से जुड़ा है। लाइन के अंत में 3-फेज फॉल्ट होने पर: (a) फॉल्ट MVA और (b) फॉल्ट करंट (A) ज्ञात कीजिए।',
              bn: 'একটি ২৫ MVA ১১ kV জেনারেটর (X"=১৫%), ২৫ MVA ১১/৬৬ kV ট্রান্সফরমার (X=১০%) এবং একটি ৬৬ kV সঞ্চালন লাইনের (X=১২ Ω) সাথে যুক্ত। লাইনের শেষ প্রান্তে ৩-ফেজ ফল্ট হলে নির্ণয় করুন: (ক) ফল্ট MVA এবং (খ) ফল্ট কারেন্ট (A)।'
            },
            solution: {
              en: 'Step 1: Choose common Base S = 25 MVA, Vbase = 66 kV on line side.\nStep 2: Generator reactance Xg_pu = 0.15 p.u.\nTransformer reactance Xt_pu = 0.10 p.u.\nStep 3: Line base impedance Zbase = (66)² / 25 = 4356 / 25 = 174.24 Ω\nLine reactance in p.u. Xline_pu = 12 / 174.24 = 0.0689 p.u.\nStep 4: Total Thévenin reactance to fault Zth_pu = Xg + Xt + Xline = 0.15 + 0.10 + 0.0689 = 0.3189 p.u.\nStep 5: Fault Level (SC MVA) = Base MVA / Zth_pu = 25 / 0.3189 = 78.40 MVA\nStep 6: Fault Current If = (SC MVA × 1000) / (√3 × 66 kV) = 78,400 / (1.732 × 66) = 685.8 Amperes',
              hi: 'चरण 1: Base = 25 MVA, 66 kV\nचरण 2: Xg = 0.15, Xt = 0.10, Xline = 12 / 174.24 = 0.0689 p.u.\nचरण 3: कुल Zth = 0.3189 p.u.\nचरण 4: फॉल्ट MVA = 25 / 0.3189 = 78.40 MVA\nचरण 5: फॉल्ट करंट If = 78.40×1000 / (√3 × 66) = 685.8 A',
              bn: 'ধাপ ১: বেস = ২৫ MVA, ৬৬ kV\nধাপ ২: Xg = ০.১৫, Xt = ০.১০, Xline = ১২ / ১৭৪.২৪ = ০.০৬৮৯ p.u.\nধাপ ৩: মোট Zth = ০.৩১৮৯ p.u.\nধাপ ৪: ফল্ট MVA = ২৫ / ০.৩১৮৯ = ৭৮.৪০ MVA\nধাপ ৫: ফল্ট কারেন্ট If = ৭৮.৪০×১০০০ / (√৩ × ৬৬) = ৬৮৫.৮ A'
            },
            givenValues: { 'Generator': '25 MVA, 11 kV, X"=15%', 'Transformer': '25 MVA, 11/66 kV, X=10%', 'Line': '12 Ω at 66 kV' },
            finalAnswer: {
              en: 'Fault Level = 78.40 MVA, Fault Current = 685.8 A',
              hi: 'फॉल्ट लेवल = 78.40 MVA, फॉल्ट करंट = 685.8 A',
              bn: 'ফল্ট লেভেল = ৭৮.৪০ MVA, ফল্ট কারেন্ট = ৬৮৫.৮ A'
            }
          }
        ],
        mcqs: [
          {
            id: 'mcq-sym-1',
            question: {
              en: 'The making capacity of a high-voltage circuit breaker is always rated in terms of:',
              hi: 'हाई-वोल्टेज सर्किट ब्रेकर की मेकिंग क्षमता हमेशा किस रूप में रेट की जाती है?',
              bn: 'একটি হাই-ভোল্টেজ সার্কিট ব্রেকারের মেকিং ক্ষমতা সর্বদা কোন মানে নির্ধারিত হয়?'
            },
            options: [
              { id: 'opt-1', text: { en: 'Peak value of the maximum current wave (2.55 × Symmetrical rms breaking current)', hi: 'अधिकतम करंट तरंग का पीक मान (2.55 × rms ब्रेकिंग करंट)', bn: 'সর্বোচ্চ কারেন্ট তরঙ্গের পিক মান (২.৫৫ × rms ব্রেকিং কারেন্ট)' } },
              { id: 'opt-2', text: { en: 'RMS value of steady state current', hi: 'स्टेडी स्टेट करंट का RMS मान', bn: 'স্টেডি স্টেট কারেন্টের RMS মান' } },
              { id: 'opt-3', text: { en: 'Average current over 1 cycle', hi: '1 चक्र का औसत करंट', bn: '১ সাইকেলের গড় কারেন্ট' } },
              { id: 'opt-4', text: { en: 'Zero sequence current', hi: 'जीरो सीक्वेंस करंट', bn: 'জিরো সিকোয়েন্স কারেন্ট' } }
            ],
            correctOptionId: 'opt-1',
            explanation: {
              en: 'Making capacity accounts for the worst-case DC offset upon breaker closing, defined as 1.8 × √2 × Irms = 2.55 × Irms (peak).',
              hi: 'मेकिंग करंट DC ऑफसेट के कारण पीक मान पर लिया जाता है जो 2.55 × Irms होता है।',
              bn: 'ব্রেকার বন্ধের মুহূর্তে সর্বোচ্চ ডিসি অফসেটের কারণে মেকিং কারেন্ট পিক ভ্যালুতে (২.৫৫ × Irms) নির্ধারিত হয়।'
            }
          }
        ]
      }
    },
    {
      id: 'ps-tp16-symmetrical-components',
      chapterId: 'ps-ch4-faults',
      order: 3,
      level: 'Engineering',
      title: {
        en: '16. Symmetrical Components & Sequence Networks (Z0, Z1, Z2)',
        hi: '16. सममित घटक एवं सीक्वेंस नेटवर्क (Z0, Z1, Z2)',
        bn: '১৬. সিমেট্রিক্যাল কম্পোনেন্টস ও সিকোয়েন্স নেটওয়ার্ক (Z0, Z1, Z2)'
      },
      description: {
        en: 'Fortescue\'s Theorem, Positive (Ia1), Negative (Ia2), and Zero (Ia0) sequence components, phase operator α = 1∠120°, and sequence networks of generators, transformers, and transmission lines.',
        hi: 'फोर्टेस्क्यू प्रमेय, पॉजिटिव, नेगेटिव एवं जीरो सीक्वेंस घटक, ऑपरेटर α = 1∠120° तथा जनरेटर-ट्रांसफॉर्मर सीक्वेंस नेटवर्क।',
        bn: 'ফোরটেস্কুর উপপাদ্য, পজিটিভ, নেগেটিভ ও জিরো সিকোয়েন্স কম্পোনেন্টস, ফেজ অপারেটর α = ১∠১২০° এবং সিকোয়েন্স নেটওয়ার্ক।'
      },
      lesson: {
        id: 'lesson-ps-tp16',
        topicId: 'ps-tp16-symmetrical-components',
        title: {
          en: 'Fortescue Symmetrical Components & Sequence Impedances',
          hi: 'फोर्टेस्क्यू सममित घटक एवं सीक्वेंस इम्पीडेंस',
          bn: 'ফোরটেস্কু সিমেট্রিক্যাল কম্পোনেন্ট ও সিকোয়েন্স ইম্পিডেন্স'
        },
        description: {
          en: 'Transformation of unbalanced three-phase phasors into decoupled balanced sequence networks.',
          hi: 'असंतुलित 3-फेज सिस्टम को तीन संतुलित सीक्वेंस नेटवर्कों में विभाजित करने की तकनीक।',
          bn: 'ভারসাম্যহীন ৩-ফেজ ভেক্টরকে তিনটি ভারসাম্যপূর্ণ সিকোয়েন্স নেটওয়ার্কে রূপান্তরের পদ্ধতি।'
        },
        detailedExplanation: {
          en: 'Fortescue\'s Theorem (1918) proves that any unbalanced set of three-phase phasors ($V_a, V_b, V_c$) can be uniquely decomposed into three symmetrical balanced components:\n1. Positive Sequence ($V_{a1}, V_{b1}, V_{c1}$): Three equal magnitude vectors spaced 120° apart having the SAME phase sequence (a-b-c) as original system.\n2. Negative Sequence ($V_{a2}, V_{b2}, V_{c2}$): Three equal magnitude vectors spaced 120° apart having REVERSE phase sequence (a-c-b).\n3. Zero Sequence ($V_{a0}, V_{b0}, V_{c0}$): Three equal magnitude vectors in identical phase alignment (0° displacement).\n\nTransformation Matrix with operator $\\alpha = 1\\angle 120^\\circ = -0.5 + j0.866$ and $\\alpha^2 = 1\\angle 240^\\circ = -0.5 - j0.866$:\n$$\\begin{bmatrix} V_a \\\\ V_b \\\\ V_c \\end{bmatrix} = \\begin{bmatrix} 1 & 1 & 1 \\\\ 1 & \\alpha^2 & \\alpha \\\\ 1 & \\alpha & \\alpha^2 \\end{bmatrix} \\begin{bmatrix} V_{a0} \\\\ V_{a1} \\\\ V_{a2} \\end{bmatrix}$$\nInverse Transformation:\n$$\\begin{bmatrix} V_{a0} \\\\ V_{a1} \\\\ V_{a2} \\end{bmatrix} = \\frac{1}{3} \\begin{bmatrix} 1 & 1 & 1 \\\\ 1 & \\alpha & \\alpha^2 \\\\ 1 & \\alpha^2 & \\alpha \\end{bmatrix} \\begin{bmatrix} V_a \\\\ V_b \\\\ V_c \\end{bmatrix}$$\n\nSequence Impedance Characteristics:\n- For Static Passive Elements (Transmission lines, cables): Magnetic fields do not depend on phase rotation, so $Z_1 = Z_2$. Zero sequence impedance $Z_0 \\approx 3 \\text{ to } 3.5 \\times Z_1$ due to ground return path resistance.\n- For Rotating Synchronous Generators: $Z_1 \\neq Z_2 \\neq Z_0$. Negative sequence creates a 100 Hz reverse rotating field inducing double-frequency eddy currents in the rotor, making $Z_2 \\ll Z_1$. Zero sequence impedance $Z_0$ depends entirely on neutral earthing impedance ($Z_{0,net} = Z_{g0} + 3 Z_n$).',
          hi: '1. फोर्टेस्क्यू प्रमेय: किसी भी असंतुलित 3-फेज सिस्टम को तीन घटकों में बांटा जा सकता है: पॉजिटिव ($a-b-c$), नेगेटिव ($a-c-b$), और जीरो सीक्वेंस (तीनों समान दिशा में)।\n2. ऑपरेटर: $\\alpha = 1\\angle 120^\\circ$, $\\alpha^2 = 1\\angle 240^\\circ$, $1 + \\alpha + \\alpha^2 = 0$।\n3. ट्रांसमिशन लाइन के लिए $Z_1 = Z_2$ होता है और $Z_0 \\approx 3 Z_1$ होता है।\n4. जनरेटर के लिए $Z_1 \\neq Z_2 \\neq Z_0$ होता है।',
          bn: '১. ফোরটেস্কু উপপাদ্য: যেকোনো ভারসাম্যহীন ৩-ফেজ ভেক্টরকে তিনটি সিমেট্রিক্যাল কম্পোনেন্টে রূপান্তর করা যায়: পজিটিভ ($a-b-c$), নেগেটিভ ($a-c-b$), এবং জিরো সিকোয়েন্স (একই ফেজে)।\n২. ফেজ অপারেটর: $\\alpha = ১\\angle ১২০^\\circ$, $\\alpha^2 = ১\\angle ২৪০^\\circ$, $১ + \\alpha + \\alpha^2 = ০$।\n৩. সঞ্চালন লাইনের ক্ষেত্রে $Z_1 = Z_2$ এবং $Z_0 \\approx ৩ Z_1$ হয়।\n৪. সিনক্রোনাস জেনারেটরে $Z_1 \\neq Z_2 \\neq Z_0$ হয়।'
        },
        keyTakeaways: {
          en: [
            'Zero sequence current can flow ONLY if there is a grounded neutral path (I0 = 0 in ungrounded star or delta systems).',
            'Sum of sequence operators: 1 + α + α² = 0.',
            'For transmission lines Z1 = Z2, but Z0 is roughly 3 times larger due to earth return resistance.'
          ],
          hi: [
            'जीरो सीक्वेंस धारा केवल ग्राउंडेड न्यूट्रल पाथ होने पर ही बह सकती है।',
            '1 + α + α² = 0.',
            'ट्रांसमिशन लाइन के लिए Z1 = Z2, और Z0 लगभग 3 Z1 होता है।'
          ],
          bn: [
            'জিরো সিকোয়েন্স কারেন্ট কেবল তখনই প্রবাহিত হতে পারে যখন গ্রাউন্ডেড নিউট্রাল পথ থাকে।',
            '১ + α + α² = ০।',
            'ট্রান্সমিশন লাইনের জন্য Z1 = Z2, কিন্তু মাটির রোদের কারণে Z0 প্রায় ৩ গুণ বড় হয়।'
          ]
        },
        formulas: [
          {
            id: 'f-seq-components',
            name: { en: 'Symmetrical Sequence Components Formula', hi: 'सममित घटक रूपांतरण सूत्र', bn: 'সিমেট্রিক্যাল কম্পোনেন্ট সূত্র' },
            formula: 'I_{a0} = \\frac{1}{3}(I_a + I_b + I_c), \\quad I_{a1} = \\frac{1}{3}(I_a + \\alpha I_b + \\alpha^2 I_c), \\quad I_{a2} = \\frac{1}{3}(I_a + \\alpha^2 I_b + \\alpha I_c)',
            description: {
              en: 'Ia0 = Zero sequence, Ia1 = Positive sequence, Ia2 = Negative sequence component of Phase A.',
              hi: 'फेज A के जीरो, पॉजिटिव एवं नेगेटिव सीक्वेंस घटक।',
              bn: 'ফেজ A এর জিরো, পজিটিভ এবং নেগেটিভ সিকোয়েন্স কম্পোনেন্টস।'
            }
          }
        ],
        solvedExamples: [
          {
            id: 'ex-seq-calc-1',
            problem: {
              en: 'In a 3-phase unbalanced system, the line currents are: Ia = 100∠0° A, Ib = 100∠240° A, and Ic = 0 A. Determine the symmetrical sequence components of the current for Phase A (Ia0, Ia1, and Ia2).',
              hi: 'एक 3-फेज सिस्टम में धाराएं Ia = 100∠0° A, Ib = 100∠240° A, एवं Ic = 0 A हैं। फेज A के लिए सममित सीक्वेंस घटक (Ia0, Ia1, Ia2) ज्ञात कीजिए।',
              bn: 'একটি ৩-ফেজ ভারসাম্যহীন সিস্টেমে লাইন কারেন্টসমূহ: Ia = ১০০∠০° A, Ib = ১০০∠২৪০° A, এবং Ic = ০ A। ফেজ A এর জন্য সিমেট্রিক্যাল সিকোয়েন্স কম্পোনেন্ট (Ia0, Ia1, Ia2) নির্ণয় করুন।'
            },
            solution: {
              en: 'Step 1: Ia = 100∠0° = 100 + j0, Ib = 100∠240° = -50 - j86.6, Ic = 0\nStep 2: Zero sequence Ia0 = (1/3)(Ia + Ib + Ic) = (1/3)[100 + (-50 - j86.6) + 0] = (1/3)(50 - j86.6) = 16.67 - j28.87 = 33.33∠-60° A\nStep 3: Positive sequence Ia1 = (1/3)(Ia + α Ib + α² Ic)\nNote α Ib = (1∠120°)(100∠240°) = 100∠360° = 100∠0°\nIa1 = (1/3)[100 + 100 + 0] = 200 / 3 = 66.67∠0° A\nStep 4: Negative sequence Ia2 = (1/3)(Ia + α² Ib + α Ic)\nNote α² Ib = (1∠240°)(100∠240°) = 100∠480° = 100∠120° = -50 + j86.6\nIa2 = (1/3)[100 + (-50 + j86.6) + 0] = (1/3)(50 + j86.6) = 16.67 + j28.87 = 33.33∠+60° A',
              hi: 'चरण 1: Ia0 = (1/3)(100 - 50 - j86.6) = 33.33∠-60° A\nचरण 2: Ia1 = (1/3)(100 + 100) = 66.67∠0° A\nचरण 3: Ia2 = (1/3)(100 - 50 + j86.6) = 33.33∠+60° A',
              bn: 'ধাপ ১: Ia0 = (১/৩)(১০০ - ৫০ - j৮৬.৬) = ৩৩.৩৩∠-৬০° A\nধাপ ২: Ia1 = (১/৩)(১০০ + ১০০) = ৬৬.৬৭∠০° A\nধাপ ৩: Ia2 = (১/৩)(১০০ - ৫০ + j৮৬.৬) = ৩৩.৩৩∠+৬০° A'
            },
            givenValues: { 'Ia': '100∠0° A', 'Ib': '100∠240° A', 'Ic': '0 A' },
            finalAnswer: {
              en: 'Ia0 = 33.33∠-60° A, Ia1 = 66.67∠0° A, Ia2 = 33.33∠60° A',
              hi: 'Ia0 = 33.33∠-60° A, Ia1 = 66.67∠0° A, Ia2 = 33.33∠60° A',
              bn: 'Ia0 = ৩৩.৩৩∠-৬০° A, Ia1 = ৬৬.৬৭∠০° A, Ia2 = ৩৩.৩৩∠৬০° A'
            }
          }
        ],
        mcqs: [
          {
            id: 'mcq-seq-1',
            question: {
              en: 'In an ungrounded star-connected or delta-connected system, what is the value of the zero-sequence current (Ia0)?',
              hi: 'अनग्राउंडेड स्टार या डेल्टा सिस्टम में जीरो-सीक्वेंस करंट (Ia0) का मान क्या होता है?',
              bn: 'আনগ্রাউন্ডেড স্টার বা ডেল্টা সংযুক্ত সিস্টেমে জিরো-সিকোয়েন্স কারেন্ট (Ia0) এর মান কত হয়?'
            },
            options: [
              { id: 'opt-1', text: { en: 'Always exactly ZERO (Ia0 = 0)', hi: 'हमेशा शून्य (0)', bn: 'সর্বদা শূন্য (Ia0 = ০)' } },
              { id: 'opt-2', text: { en: 'Equal to positive sequence current', hi: 'पॉजिटिव सीक्वेंस के बराबर', bn: 'পজিটিভ সিকোয়েন্সের সমান' } },
              { id: 'opt-3', text: { en: 'Infinite', hi: 'अनंत', bn: 'অসীম' } },
              { id: 'opt-4', text: { en: '3 times phase current', hi: 'फेज धारा का 3 गुना', bn: 'ফেজ কারেন্টের ৩ গুণ' } }
            ],
            correctOptionId: 'opt-1',
            explanation: {
              en: 'Zero sequence currents are in-phase across all three phases (Ia0 = Ib0 = Ic0). Kirchhoff\'s Current Law requires a neutral-to-ground conductor for them to return; without ground return, Ia0 must be zero.',
              hi: 'जीरो सीक्वेंस धाराओं को लौटने के लिए ग्राउंड पाथ चाहिए। अनग्राउंडेड सिस्टम में ग्राउंड न होने से Ia0 = 0 होता है।',
              bn: 'জিরো সিকোয়েন্স কারেন্টের প্রত্যাবর্তনের জন্য একটি গ্রাউন্ডেড নিউট্রাল পথ প্রয়োজন। গ্রাউন্ড পথ না থাকলে Ia0 সর্বদা শূন্য হয়।'
            }
          }
        ]
      }
    },
    {
      id: 'ps-tp17-unsymmetrical-faults',
      chapterId: 'ps-ch4-faults',
      order: 4,
      level: 'Engineering',
      title: {
        en: '17. Unsymmetrical Faults: SLG, LL & DLG Analysis',
        hi: '17. असममित फॉल्ट: SLG, LL एवं DLG विश्लेषण',
        bn: '১৭. আনসিমেট্রিক্যাল ফল্ট: SLG, LL এবং DLG বিশ্লেষণ'
      },
      description: {
        en: 'Mathematical formulation and sequence network interconnections for Single Line-to-Ground (SLG), Line-to-Line (LL), and Double Line-to-Ground (DLG) faults with fault impedance Zf.',
        hi: 'सिंगल लाइन-टू-ग्राउंड (SLG), लाइन-टू-लाइन (LL) एवं डबल लाइन-टू-ग्राउंड (DLG) फॉल्ट्स में सीक्वेंस नेटवर्क संयोजन।',
        bn: 'সিঙ্গেল লাইন-টু-গ্রাউন্ড (SLG), লাইন-টু-লাইন (LL) এবং ডাবল লাইন-টু-গ্রাউন্ড (DLG) ফল্ট বিশ্লেষণ ও সিকোয়েন্স নেটওয়ার্ক ইন্টারকানেকশন।'
      },
      lesson: {
        id: 'lesson-ps-tp17',
        topicId: 'ps-tp17-unsymmetrical-faults',
        title: {
          en: 'Unsymmetrical Fault Modeling & Sequence Network Interconnections',
          hi: 'असममित फॉल्ट मॉडलिंग एवं सीक्वेंस नेटवर्क संयोजन',
          bn: 'আনসিমেট্রিক্যাল ফল্ট মডেলিং ও সিকোয়েন্স নেটওয়ার্ক সংযোগ'
        },
        description: {
          en: 'Derivations of boundary conditions and sequence network connections for SLG, LL, and DLG faults.',
          hi: 'SLG, LL और DLG फॉल्ट्स के लिए सीमा शर्तें एवं फॉल्ट करंट की सटीक गणना।',
          bn: 'SLG, LL ও DLG ফল্টের বাউন্ডারি কন্ডিশন ও সিকোয়েন্স নেটওয়ার্কের সিরিজ-প্যারালাল সংযোগ।'
        },
        detailedExplanation: {
          en: 'Over 95% of power system faults are unsymmetrical. They are solved by connecting the Thévenin positive ($Z_1$), negative ($Z_2$), and zero ($Z_0$) sequence networks according to fault boundary conditions:\n\n1. Single Line-to-Ground (SLG) Fault (70% of all faults):\nBoundary conditions at Phase A: $I_b = 0, I_c = 0, V_a = I_a Z_f$.\nSequence condition: $I_{a0} = I_{a1} = I_{a2} = \\frac{E_a}{Z_1 + Z_2 + Z_0 + 3Z_f}$.\nSequence Network Connection: Positive, Negative, and Zero sequence networks are connected in SERIES.\nFault Current: $I_f = I_a = 3 I_{a1} = \\frac{3 E_a}{Z_1 + Z_2 + Z_0 + 3Z_f}$.\n\n2. Line-to-Line (LL) Fault (15% of faults):\nBoundary conditions between Phase B and C: $I_a = 0, I_b = -I_c, V_b - V_c = I_b Z_f$.\nSequence condition: $I_{a0} = 0, I_{a1} = -I_{a2} = \\frac{E_a}{Z_1 + Z_2 + Z_f}$.\nSequence Network Connection: Positive and Negative sequence networks are connected in PARALLEL OPPOSITION; Zero sequence network is isolated ($I_{a0} = 0$).\nFault Current: $I_f = I_b = -j\\sqrt{3} I_{a1}$.\n\n3. Double Line-to-Ground (DLG) Fault (10% of faults):\nBoundary conditions: $I_a = 0, V_b = V_c = (I_b + I_c) Z_f$.\nSequence condition: All three sequence networks (Positive, Negative, and Zero + $3Z_f$) are connected in PARALLEL.\nPositive sequence current: $I_{a1} = \\frac{E_a}{Z_1 + \\frac{Z_2 (Z_0 + 3Z_f)}{Z_2 + Z_0 + 3Z_f}}$.',
          hi: '1. SLG फॉल्ट (70%): पॉजिटिव, नेगेटिव एवं जीरो सीक्वेंस नेटवर्क SERIES में जुड़ते हैं।\n$I_f = 3 I_{a1} = \\frac{3 E_a}{Z_1 + Z_2 + Z_0 + 3Z_f}$।\n2. LL फॉल्ट (15%): पॉजिटिव और नेगेटिव नेटवर्क PARALLEL में जुड़ते हैं (जीरो सीक्वेंस शून्य होता है)। $I_f = \\sqrt{3} I_{a1}$।\n3. DLG फॉल्ट (10%): तीनों सीक्वेंस नेटवर्क PARALLEL में जुड़ते हैं।',
          bn: '১. SLG ফল্ট (৭০%): পজিটিভ, নেগেটিভ ও জিরো সিকোয়েন্স নেটওয়ার্ক সিরিজে (SERIES) যুক্ত হয়।\n$I_f = ৩ I_{a1} = \\frac{৩ E_a}{Z_1 + Z_2 + Z_0 + ৩Z_f}$।\n২. LL ফল্ট (১৫%): পজিটিভ ও নেগেটিভ নেটওয়ার্ক সমান্তরালে (PARALLEL) যুক্ত হয় (জিরো সিকোয়েন্স কারেন্ট শূন্য থাকে)। $I_f = \\sqrt{৩} I_{a1}$।\n৩. DLG ফল্ট (১০%): তিনটি সিকোয়েন্স নেটওয়ার্কই সমান্তরালে (PARALLEL) সংযুক্ত হয়।'
        },
        keyTakeaways: {
          en: [
            'SLG Fault: Sequence networks are connected in SERIES; Fault current If = 3 · Ia1.',
            'LL Fault: Positive and Negative networks connected in PARALLEL; Zero sequence current is ZERO.',
            'DLG Fault: Positive, Negative, and Zero networks connected in PARALLEL.',
            'SLG fault current can exceed 3-phase symmetrical fault current if Z0 < Z1 (e.g. solidly grounded generator terminals).'
          ],
          hi: [
            'SLG फॉल्ट: तीनों नेटवर्क SERIES में जुड़ते हैं; If = 3 Ia1।',
            'LL फॉल्ट: पॉजिटिव व नेगेटिव नेटवर्क PARALLEL में जुड़ते हैं; Ia0 = 0।',
            'DLG फॉल्ट: तीनों नेटवर्क PARALLEL में जुड़ते हैं।'
          ],
          bn: [
            'SLG ফল্ট: তিনটি সিকোয়েন্স নেটওয়ার্ক সিরিজে যুক্ত হয়; If = ৩ Ia1।',
            'LL ফল্ট: পজিটিভ ও নেগেটিভ নেটওয়ার্ক সমান্তরালে যুক্ত হয়; জিরো সিকোয়েন্স শূন্য।',
            'DLG ফল্ট: তিনটি নেটওয়ার্কই সমান্তরালে যুক্ত হয়।'
          ]
        },
        formulas: [
          {
            id: 'f-slg-fault',
            name: { en: 'SLG Fault Current Formula', hi: 'SLG फॉल्ट करंट सूत्र', bn: 'SLG ফল্ট কারেন্ট সূত্র' },
            formula: 'I_f = 3 I_{a1} = \\frac{3 E_a}{Z_1 + Z_2 + Z_0 + 3 Z_f}',
            description: {
              en: 'Ea = Pre-fault phase voltage, Z1/Z2/Z0 = Thévenin sequence impedances, Zf = Fault impedance.',
              hi: 'सिंगल लाइन-टू-ग्राउंड फॉल्ट करंट।',
              bn: 'সিঙ্গেল লাইন-টু-গ্রাউন্ড ফল্ট কারেন্ট সমীকরণ।'
            }
          },
          {
            id: 'f-ll-fault',
            name: { en: 'Line-to-Line (LL) Fault Current', hi: 'लाइन-टू-लाइन फॉल्ट करंट', bn: 'লাইন-টু-লাইন ফল্ট কারেন্ট' },
            formula: 'I_f = \\sqrt{3} \\cdot |I_{a1}| = \\frac{\\sqrt{3} \\cdot E_a}{Z_1 + Z_2 + Z_f}',
            description: {
              en: 'Line-to-line fault current magnitude between phases B and C.',
              hi: 'फेज B और C के बीच फॉल्ट करंट परिमाण।',
              bn: 'ফেজ B ও C এর মধ্যবর্তী ফল্ট কারেন্টের মান।'
            }
          }
        ],
        solvedExamples: [
          {
            id: 'ex-slg-calc-1',
            problem: {
              en: 'A 25 MVA, 13.8 kV solidly grounded synchronous generator operates at rated voltage on no-load. Its sequence reactances are: X1 = 0.20 p.u., X2 = 0.15 p.u., and X0 = 0.05 p.u. Calculate: (a) Fault current in p.u. for a solid SLG fault, and (b) Actual fault current in kilo-Amperes (kA).',
              hi: 'एक 25 MVA, 13.8 kV जनरेटर (X1=0.20, X2=0.15, X0=0.05 p.u.) पर सॉलिड SLG फॉल्ट होता है। (a) p.u. में फॉल्ट करंट, और (b) kA में वास्तविक फॉल्ट करंट ज्ञात कीजिए।',
              bn: 'একটি ২৫ MVA, ১৩.৮ kV সলিডলি গ্রাউন্ডেড জেনারেটরে (X1=০.২০, X2=০.১৫, X0=০.০৫ p.u.) একটি সলিড SLG ফল্ট সংঘটিত হলো। নির্ণয় করুন: (ক) p.u. তে ফল্ট কারেন্ট, এবং (খ) kA তে প্রকৃত ফল্ট কারেন্ট।'
            },
            solution: {
              en: 'Step 1: Solid fault Zf = 0, Pre-fault voltage Ea = 1.0∠0° p.u.\nStep 2: Total sequence impedance Z_total = Z1 + Z2 + Z0 = j0.20 + j0.15 + j0.05 = j0.40 p.u.\nStep 3: Symmetrical sequence current Ia1 = Ea / Z_total = 1.0 / j0.40 = -j2.5 p.u.\nStep 4: Fault Current If_pu = 3 × Ia1 = 3 × 2.5 = 7.5 p.u.\nStep 5: Base Current Ibase = (25,000 kVA) / (√3 × 13.8 kV) = 25,000 / 23.902 = 1,045.9 A = 1.046 kA\nStep 6: Actual Fault Current If = 7.5 × 1.046 kA = 7.844 kA',
              hi: 'चरण 1: Z_total = j(0.20 + 0.15 + 0.05) = j0.40 p.u.\nचरण 2: Ia1 = 1.0 / j0.40 = -j2.5 p.u.\nचरण 3: If_pu = 3 × 2.5 = 7.5 p.u.\nचरण 4: Ibase = 25 MVA / (√3 × 13.8 kV) = 1.046 kA\nचरण 5: वास्तविक If = 7.5 × 1.046 kA = 7.84 kA',
              bn: 'ধাপ ১: Z_total = j(০.২০ + ০.১৫ + ০.০৫) = j০.৪০ p.u.\nধাপ ২: Ia1 = ১.০ / j০.৪০ = -j২.৫ p.u.\nধাপ ৩: If_pu = ৩ × ২.৫ = ৭.৫ p.u.\nধাপ ৪: Ibase = ২৫ MVA / (√৩ × ১৩.৮ kV) = ১.০৪৬ kA\nধাপ ৫: প্রকৃত ফল্ট কারেন্ট If = ৭.৫ × ১.০৪৬ kA = ৭.৮৪ kA'
            },
            givenValues: { 'Rating': '25 MVA, 13.8 kV', 'X1': '0.20 p.u.', 'X2': '0.15 p.u.', 'X0': '0.05 p.u.', 'Zf': '0 Ω' },
            finalAnswer: {
              en: 'Fault Current = 7.5 p.u. = 7.84 kA (Note: Symmetrical 3-phase fault would be only 1.0/0.20 = 5.0 p.u.)',
              hi: 'फॉल्ट करंट = 7.5 p.u. = 7.84 kA',
              bn: 'ফল্ট কারেন্ট = ৭.৫ p.u. = ৭.৮৪ kA'
            }
          }
        ],
        mcqs: [
          {
            id: 'mcq-unsym-1',
            question: {
              en: 'To analyze a Single Line-to-Ground (SLG) fault, how must the positive, negative, and zero sequence Thévenin networks be interconnected?',
              hi: 'सिंगल लाइन-टू-ग्राउंड (SLG) फॉल्ट का विश्लेषण करने के लिए पॉजिटिव, नेगेटिव और जीरो सीक्वेंस नेटवर्कों को कैसे जोड़ा जाता है?',
              bn: 'সিঙ্গেল লাইন-টু-গ্রাউন্ড (SLG) ফল্ট বিশ্লেষণের জন্য পজিটিভ, নেগেটিভ ও জিরো সিকোয়েন্স নেটওয়ার্ক কীভাবে সংযুক্ত করতে হয়?'
            },
            options: [
              { id: 'opt-1', text: { en: 'All three sequence networks connected in SERIES', hi: 'तीनों नेटवर्क SERIES (श्रेणी) में जोड़े जाते हैं', bn: 'তিনটি নেটওয়ার্কই সিরিজে (SERIES) সংযুক্ত থাকে' } },
              { id: 'opt-2', text: { en: 'All three sequence networks connected in PARALLEL', hi: 'तीनों नेटवर्क समांतर (PARALLEL) में जोड़े जाते हैं', bn: 'তিনটি নেটওয়ার্কই সমান্তরালে (PARALLEL) সংযুক্ত থাকে' } },
              { id: 'opt-3', text: { en: 'Positive and Negative in parallel, Zero open', hi: 'पॉजिटिव और नेगेटिव समांतर में, जीरो खुला', bn: 'পজিটিভ ও নেগেটিভ সমান্তরালে, জিরো মুক্ত' } },
              { id: 'opt-4', text: { en: 'Positive in series with parallel combination of Negative and Zero', hi: 'पॉजिटिव श्रेणी में, नेगेटिव व जीरो समांतर में', bn: 'পজিটিভ সিরিজে এবং নেগেটিভ ও জিরো সমান্তরালে' } }
            ],
            correctOptionId: 'opt-1',
            explanation: {
              en: 'For an SLG fault on Phase A, the sequence currents are all equal (Ia0 = Ia1 = Ia2 = If/3), which physically corresponds to a series circuit connection.',
              hi: 'SLG फॉल्ट में तीनों सीक्वेंस धाराएं बराबर (Ia0 = Ia1 = Ia2) होती हैं, जो श्रेणी (Series) परिपथ की विशेषता है।',
              bn: 'SLG ফল্টে সকল সিকোয়েন্স কারেন্ট সমান (Ia0 = Ia1 = Ia2) হয়, যা একটি সিরিজ সার্কিটের প্রতিরূপ।'
            }
          }
        ]
      }
    }
  ]
};
