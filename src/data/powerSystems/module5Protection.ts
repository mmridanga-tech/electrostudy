import { Chapter } from '../../types';

export const POWER_SYSTEMS_MODULE_5: Chapter = {
  id: 'ps-ch5-protection',
  subjectId: 'power-systems',
  order: 5,
  title: {
    en: 'Module 5: Switchgear, Protection, Stability & Smart Grids',
    hi: 'मॉड्यूल 5: स्विचगियर, रिले सुरक्षा, स्थिरता एवं स्मार्ट ग्रिड',
    bn: 'মডিউল ৫: সুইচগিয়ার, সুরক্ষা রিলে, স্ট্যাবিলিটি ও স্মার্ট গ্রিড'
  },
  topics: [
    {
      id: 'ps-tp18-circuit-breakers',
      chapterId: 'ps-ch5-protection',
      order: 1,
      level: 'Engineering',
      title: {
        en: '18. Circuit Breakers: Arc Quenching, SF6, Vacuum & RRRV',
        hi: '18. सर्किट ब्रेकर: आर्क शमन, SF6, वैक्यूम एवं RRRV',
        bn: '১৮. সার্কিট ব্রেকার: আর্ক নির্বাপণ, SF6, ভ্যাকুয়াম ও RRRV'
      },
      description: {
        en: 'Arc physics, High resistance vs Current zero interruption, Restriking Voltage, Rate of Rise of Restriking Voltage (RRRV), Recovery Voltage, SF6 puffer breakers, and Vacuum interrupters.',
        hi: 'आर्क भौतिकी, करंट जीरो इंटरप्शन, रीस्ट्राइकिंग वोल्टेज, RRRV, रिकवरी वोल्टेज, SF6 पफर एवं वैक्यूम सर्किट ब्रेकर।',
        bn: 'আর্ক ফিজিক্স, কারেন্ট জিরো ইন্টারাপশন, রিস্ট্রাইকিং ভোল্টেজ, RRRV, রিকভারি ভোল্টেজ, SF6 পাফার এবং ভ্যাকুয়াম ব্রেকার।'
      },
      lesson: {
        id: 'lesson-ps-tp18',
        topicId: 'ps-tp18-circuit-breakers',
        title: {
          en: 'Circuit Breaker Arc Quenching Dynamics, RRRV & Interrupter Technologies',
          hi: 'सर्किट ब्रेकर आर्क शमन, RRRV एवं इंटरप्टर तकनीकें',
          bn: 'সার্কিট ব্রেকার আর্ক নির্বাপণ, RRRV ও ইন্টারাপ্টার প্রযুক্তি'
        },
        description: {
          en: 'Arc extinction mechanisms, transient recovery voltages, and modern SF6/vacuum switchgear operation.',
          hi: 'आर्क बुझाने के सिद्धांत, ट्रांजिएंट रिकवरी वोल्टेज एवं SF6 स्विचगियर का अध्ययन।',
          bn: 'আর্ক নির্বাপণ প্রক্রিয়া, ট্রানজিয়েন্ট রিকভারি ভোল্টেজ এবং আধুনিক SF6 ও ভ্যাকুয়াম ব্রেকার।'
        },
        detailedExplanation: {
          en: 'A Circuit Breaker must safely interrupt massive fault currents (up to 50–63 kA) without suffering catastrophic thermal or mechanical destruction.\n\n1. Arc Formation & Extinction Physics:\nWhen contacts part under oil/gas/vacuum, high electrical field emission and thermal ionization sustain an electric arc plasma (temperature > 6000 K). AC arcs are extinguished using the Current Zero Interruption Principle: At natural current zero (every 10 ms at 50 Hz), arc power input falls to zero. The dielectric strength of the contact gap is rapidly built up using blast cooling or electronegative gas quenching to outpace the rising voltage stress.\n\n2. Restriking Voltage & RRRV:\nImmediately following arc extinction at current zero, a high-frequency transient voltage appears across breaker contacts called the Restriking Voltage:\n$$v_r(t) = V_m (1 - \\cos \\omega_n t)$$\nWhere natural oscillating frequency $\\omega_n = \\frac{1}{\\sqrt{L C}}$ (typically 10 kHz to 50 kHz).\n- Maximum Restriking Voltage: $V_{r,max} = 2 V_m$ (twice the peak power frequency voltage!).\n- Rate of Rise of Restriking Voltage (RRRV):\n  $$\\text{RRRV} = \\frac{d v_r}{dt} = \\omega_n V_m \\sin \\omega_n t, \\quad \\text{RRRV}_{max} = \\omega_n V_m = \\frac{V_m}{\\sqrt{L C}}$$\nIf the dielectric recovery rate exceeds RRRV, the arc is permanently extinguished; otherwise, restrike occurs.\n\n3. Modern Breaker Types:\n- SF6 (Sulfur Hexafluoride) Puffer Breakers: SF6 has 2.5 times the dielectric strength of air and 100 times better thermal conductivity. Its high electronegativity captures free electrons ($SF_6 + e^- \\to SF_6^-$), extinguishing arcs in microseconds. Used universally from 33 kV to 765 kV.\n- Vacuum Circuit Breakers (VCB): Operates in high vacuum ($10^{-6}$ torr). Arc vapor condenses instantly onto metallic shield plates at current zero. Dominates medium voltage distribution (3.3 kV to 33 kV).',
          hi: '1. आर्क शमन: AC करंट जीरो (प्रत्येक 10 ms) पर आर्क ऊर्जा शून्य होती है।\n2. रीस्ट्राइकिंग वोल्टेज: $v_r(t) = V_m (1 - \\cos \\omega_n t)$।\n- अधिकतम रीस्ट्राइकिंग वोल्टेज = $2 V_m$।\n- अधिकतम RRRV: $\\text{RRRV}_{max} = \\frac{V_m}{\\sqrt{LC}}$।\n3. SF6 सर्किट ब्रेकर: SF6 गैस हवा से 2.5 गुना मजबूत डाइइलेक्ट्रिक और अत्यधिक इलेक्ट्रोनेगेटिव होती है, जो उच्च वोल्टेज (33-765 kV) के लिए सर्वोत्तम है।\n4. वैक्यूम ब्रेकर (VCB): मध्यम वोल्टेज (11-33 kV) पर प्रयुक्त।',
          bn: '১. আর্ক নির্বাপণ: এসি কারেন্ট জিরো ক্রসিংয়ে (প্রতি ১০ ms এ) আর্ক পাওয়ার শূন্য হয়।\n২. রিস্ট্রাইকিং ভোল্টেজ: $v_r(t) = V_m (১ - \\cos \\omega_n t)$।\n- সর্বোচ্চ রিস্ট্রাইকিং ভোল্টেজ = $২ V_m$।\n- সর্বোচ্চ RRRV: $\\text{RRRV}_{max} = \\frac{V_m}{\\sqrt{LC}}$।\n৩. SF6 সার্কিট ব্রেকার: SF6 অত্যন্ত শক্তিশালী ইলেকট্রোনেগেটিভ গ্যাস যা দ্রুত ফ্রি ইলেকট্রন শোষণ করে আর্ক নিভিয়ে ফেলে (৩৩ kV থেকে ৭৬৫ kV তে ব্যবহৃত)।\n৪. ভ্যাকুয়াম ব্রেকার: মিডিয়াম ভোল্টেজে (১১ kV থেকে ৩৩ kV) সর্বাধিক ব্যবহৃত।'
        },
        keyTakeaways: {
          en: [
            'Maximum value of Restriking Voltage across circuit breaker contacts is 2 · Vm (peak line-to-neutral voltage).',
            'Maximum RRRV = Vm / √(L·C) occurring when ωn·t = π/2.',
            'Resistance switching (connecting shunt resistor R = 0.5·√(L/C)) damps out restriking voltage oscillations completely.',
            'SF6 is an electronegative gas that rapidly recombines with free arc electrons to restore dielectric gap strength.'
          ],
          hi: [
            'अधिकतम रीस्ट्राइकिंग वोल्टेज $2 V_m$ होता है।',
            'अधिकतम RRRV = $V_m / \\sqrt{LC}$।',
            'क्रिटिकल डैम्पिंग हेतु शंट प्रतिरोध $R = 0.5 \\sqrt{L/C}$ लगाया जाता है।',
            'SF6 गैस इलेक्ट्रोनेगेटिव होने के कारण तेजी से इलेक्ट्रॉन सोखती है।'
          ],
          bn: [
            'সার্কিট ব্রেকারের দুই প্রান্তে সর্বোচ্চ রিস্ট্রাইকিং ভোল্টেজ হয় ২ · Vm।',
            'সর্বোচ্চ RRRV = Vm / √(L·C)।',
            'ক্রিটিকাল ড্যাম্পিং এর জন্য শান্ট রেজিস্ট্যান্স R = ০.৫·√(L/C) যুক্ত করা হয়।',
            'SF6 গ্যাস উচ্চ ইলেকট্রোনেগেটিভিটির কারণে দ্রুত মুক্ত ইলেকট্রন শোষণ করে।'
          ]
        },
        formulas: [
          {
            id: 'f-rrrv-max',
            name: { en: 'Maximum RRRV Equation', hi: 'अधिकतम RRRV समीकरण', bn: 'সর্বোচ্চ RRRV সমীকরণ' },
            formula: '\\text{RRRV}_{\\text{max}} = \\frac{V_m}{\\sqrt{L C}} = \\omega_n V_m',
            description: {
              en: 'Vm = Peak phase voltage at current interruption, L = System inductance, C = Bushing and line capacitance.',
              hi: 'अधिकतम रीस्ट्राइकिंग वोल्टेज वृद्धि दर।',
              bn: 'সর্বোচ্চ রেট অফ রাইজ অফ রিস্ট্রাইকিং ভোল্টেজ (RRRV) সমীকরণ।'
            }
          },
          {
            id: 'f-res-switching',
            name: { en: 'Critical Damping Resistance Switching', hi: 'क्रिटिकल डैम्पिंग प्रतिरोध सूत्र', bn: 'রেজিস্ট্যান্স সুইচিং ক্রিটিকাল ড্যাম্পিং সূত্র' },
            formula: 'R = \\frac{1}{2} \\sqrt{\\frac{L}{C}}',
            description: {
              en: 'Value of shunt resistor across circuit breaker contacts to prevent transient restriking oscillations.',
              hi: 'दोलनों को समाप्त करने हेतु आवश्यक शंट प्रतिरोध।',
              bn: 'ট্রানজিয়েন্ট রিস্ট্রাইকিং অসিলেশন দূর করতে ব্রেকার টার্মিনালে সংযুক্ত শান্ট রেজিস্ট্যান্স।'
            }
          }
        ],
        solvedExamples: [
          {
            id: 'ex-rrrv-calc-1',
            problem: {
              en: 'In a 132 kV, 50 Hz circuit breaker test, the system inductance is 5.0 mH and the capacitance to ground is 0.02 μF. Calculate: (a) Natural frequency of oscillation fn, (b) Maximum Restriking Voltage, and (c) Maximum Rate of Rise of Restriking Voltage (RRRVmax) in Volts/microsecond.',
              hi: 'एक 132 kV सर्किट ब्रेकर में L = 5.0 mH और C = 0.02 μF है। (a) प्राकृतिक आवृत्ति fn, (b) अधिकतम रीस्ट्राइकिंग वोल्टेज, और (c) अधिकतम RRRV (V/μs में) ज्ञात कीजिए।',
              bn: 'একটি ১৩২ kV সার্কিট ব্রেকার টেস্টে L = ৫.০ mH এবং C = ০.০২ μF। নির্ণয় করুন: (ক) প্রাকৃতিক কম্পাঙ্ক fn, (খ) সর্বোচ্চ রিস্ট্রাইকিং ভোল্টেজ, এবং (গ) সর্বোচ্চ RRRV (V/μs এ)।'
            },
            solution: {
              en: 'Step 1: Peak line-to-neutral voltage Vm = (132 × 10³ / √3) × √2 = 76,210 × 1.4142 = 107,778 Volts = 107.78 kV\nStep 2: Natural frequency fn = 1 / (2π · √(LC)) = 1 / [2π × √(5.0 × 10⁻³ × 0.02 × 10⁻⁶)]\nfn = 1 / [2π × √(10⁻¹⁰)] = 1 / [2π × 10⁻⁵] = 100,000 / (2π) = 15,915.5 Hz = 15.92 kHz\nStep 3: Maximum Restriking Voltage = 2 × Vm = 2 × 107.78 kV = 215.56 kV\nStep 4: Maximum RRRV = Vm / √(LC) = 107,778 / 10⁻⁵ = 1.0778 × 10¹⁰ V/s = 10,778 V/μs = 10.78 kV/μs',
              hi: 'चरण 1: Vm = (132/√3) × √2 = 107.78 kV\nचरण 2: fn = 1 / (2π × 10⁻⁵) = 15.92 kHz\nचरण 3: अधिकतम रीस्ट्राइकिंग वोल्टेज = 2 × 107.78 = 215.56 kV\nचरण 4: RRRV_max = 107.78 kV / 10 μs = 10.78 kV/μs = 10,778 V/μs',
              bn: 'ধাপ ১: পিক ভোল্টেজ Vm = (১৩২/√৩) × √২ = ১০৭.৭৮ kV\nধাপ ২: ন্যাচারাল ফ্রিকোয়েন্সি fn = ১ / (২π × ১০⁻⁵) = ১৫.৯২ kHz\nধাপ ৩: সর্বোচ্চ রিস্ট্রাইকিং ভোল্টেজ = ২ × ১০৭.৭৮ = ২১৫.৫৬ kV\nধাপ ৪: সর্বোচ্চ RRRV = ১০৭.৭৮ kV / ১০ μs = ১০.৭৮ kV/μs = ১০,৭৭৮ V/μs'
            },
            givenValues: { 'Voltage': '132 kV', 'L': '5.0 mH', 'C': '0.02 μF' },
            finalAnswer: {
              en: 'fn = 15.92 kHz, Max Restriking Voltage = 215.56 kV, RRRVmax = 10.78 kV/μs',
              hi: 'fn = 15.92 kHz, अधिकतम रीस्ट्राइकिंग वोल्टेज = 215.56 kV, RRRVmax = 10.78 kV/μs',
              bn: 'fn = ১৫.৯২ kHz, সর্বোচ্চ রিস্ট্রাইকিং ভোল্টেজ = ২১৫.৫৬ kV, RRRVmax = ১০.৭৮ kV/μs'
            }
          }
        ],
        mcqs: [
          {
            id: 'mcq-cb-1',
            question: {
              en: 'What is the physical function of connecting a resistance in parallel across circuit breaker contacts (Resistance Switching)?',
              hi: 'सर्किट ब्रेकर संपर्कों के समानांतर एक प्रतिरोध (रेजिस्टेंस स्विचिंग) जोड़ने का मुख्य कार्य क्या है?',
              bn: 'সার্কিট ব্রেকার কন্টাক্টের সমান্তরালে রেজিস্ট্যান্স সংযুক্ত করার (রেজিস্ট্যান্স সুইচিং) মূল উদ্দেশ্য কী?'
            },
            options: [
              { id: 'opt-1', text: { en: 'To damp out transient restriking voltage oscillations and reduce RRRV', hi: 'रीस्ट्राइकिंग वोल्टेज दोलनों को समाप्त करना एवं RRRV को कम करना', bn: 'রিস্ট্রাইকিং ভোল্টেজ অসিলেশন ড্যাম্প করা এবং RRRV হ্রাস করা' } },
              { id: 'opt-2', text: { en: 'To increase the steady-state load current', hi: 'स्टेडी स्टेट लोड करंट बढ़ाना', bn: 'লোড কারেন্ট বৃদ্ধি করা' } },
              { id: 'opt-3', text: { en: 'To provide DC bias', hi: 'DC बायस प्रदान करना', bn: 'ডিসি বায়াস প্রদান করা' } },
              { id: 'opt-4', text: { en: 'To heat the contacts in winter', hi: 'सर्दियों में संपर्कों को गर्म रखना', bn: 'কন্টাক্ট গরম রাখা' } }
            ],
            correctOptionId: 'opt-1',
            explanation: {
              en: 'Resistance switching damps the LC resonant circuit of the system, drastically suppressing the peak restriking voltage and reducing the RRRV to prevent arc restrike.',
              hi: 'रेजिस्टेंस स्विचिंग LC ऑसिलेशन को डैम्प करके RRRV और पीक रीस्ट्राइकिंग वोल्टेज को कम करती है।',
              bn: 'রেজিস্ট্যান্স সুইচিং সিস্টেমের LC রেজোন্যান্ট সার্কিটকে ড্যাম্প করে পিক রিস্ট্রাইকিং ভোল্টেজ ও RRRV বহুগুণ হ্রাস করে।'
            }
          }
        ]
      }
    },
    {
      id: 'ps-tp19-protective-relays',
      chapterId: 'ps-ch5-protection',
      order: 2,
      level: 'Engineering',
      title: {
        en: '19. Protective Relaying: Overcurrent, IDMT & PSM/TMS Settings',
        hi: '19. प्रोटेक्टिव रिलेइंग: ओवरकरंट, IDMT एवं PSM/TMS सेटिंग्स',
        bn: '১৯. প্রটেক্টিভ রিলেয়িং: ওভারকারেন্ট, IDMT ও PSM/TMS সেটিংস'
      },
      description: {
        en: 'Induction disc relay, Plug Setting Multiplier (PSM), Time Multiplier Setting (TMS), standard inverse IDMT operating time equation, and time-graded overcurrent coordination.',
        hi: 'इंडक्शन डिस्क रिले, प्लग सेटिंग मल्टीप्लायर (PSM), टाइम मल्टीप्लायर सेटिंग (TMS) एवं IDMT ऑपरेटिंग टाइम समीकरण।',
        bn: 'ইন্ডাকশন ডিস্ক রিলে, প্লাগ সেটিং মাল্টিপ্লায়ার (PSM), টাইম মাল্টিপ্লায়ার সেটিং (TMS) এবং IDMT অপারেটিং টাইম সমীকরণ।'
      },
      lesson: {
        id: 'lesson-ps-tp19',
        topicId: 'ps-tp19-protective-relays',
        title: {
          en: 'IDMT Overcurrent Relaying, PSM Calculation & Discrimination',
          hi: 'IDMT ओवरकरंट रिले, PSM गणना एवं रिले समन्वय',
          bn: 'IDMT ওভারকারেন্ট রিলে, PSM হিসাব ও রিলে সমন্বয়'
        },
        description: {
          en: 'Operating principles of electromechanical and numerical IDMT relays with grading margin calculations.',
          hi: 'IDMT रिले संचालन सिद्धांत, PSM/TMS गणित एवं सुरक्षा समन्वय।',
          bn: 'IDMT রিলের কার্যপ্রণালী, PSM/TMS গণনা এবং টাইম-গ্রেডেড কো-অর্ডিনেশন।'
        },
        detailedExplanation: {
          en: 'Protective relays continuously sense voltage and current signals through instrument transformers (CTs, PTs) and trip circuit breakers during faults.\n\n1. Inverse Definite Minimum Time (IDMT) Characteristic:\nAn IDMT relay trips faster for heavy fault currents and slower for moderate overloads. IEC 60255 Standard Inverse characteristic operating time equation:\n$$t = \\frac{0.14 \\times \\text{TMS}}{(\\text{PSM})^{0.02} - 1} \\text{ seconds}$$\n\n2. Key Relay Setting Parameters:\n- Relay Pick-up Current: $I_{\\text{pickup}} = \\text{CT Secondary Rating} \\times \\text{Plug Setting Fraction}$\n- Plug Setting Multiplier (PSM):\n  $$\\text{PSM} = \\frac{\\text{Fault Current in Relay Coil (Secondary)}}{\\text{Relay Pickup Current}} = \\frac{I_{\\text{fault (primary)}}}{\\text{CT Ratio} \\times I_{\\text{pickup}}}$$\n- Time Multiplier Setting (TMS): Scales the operating time curve linearly (from 0.1 to 1.0) to achieve grading margin (discrimination time $\\Delta t \\approx 0.3 \\text{ to } 0.4 \\text{ s}$) between consecutive upstream and downstream breakers.\n\n3. Induction Disc Operating Torque:\nIn an induction disc relay, two out-of-phase AC fluxes $\\Phi_1$ and $\\Phi_2$ produce eddy currents in an aluminum disc, generating net driving torque: $T_d = k \\Phi_1 \\Phi_2 \\sin \\theta$. The relay closes its trip contacts when $T_d$ exceeds the restraining spring torque.',
          hi: '1. IDMT रिले: भारी फॉल्ट पर तेजी से और हल्के ओवरलोड पर देरी से ट्रिप होती है। IEC मानक समय: $t = \\frac{0.14 \\times \\text{TMS}}{(\\text{PSM})^{0.02} - 1}$।\n2. PSM (प्लग सेटिंग मल्टीप्लायर) = $\\frac{\\text{फॉल्ट करंट (Secondary)}}{\\text{पिकअप करंट}}$।\n3. TMS (टाइम मल्टीप्लायर सेटिंग): दो रिले के बीच 0.3 से 0.4 सेकंड का टाइम मार्जिन बनाए रखने के लिए प्रयुक्त होती है।',
          bn: '১. IDMT রিলে: উচ্চ ফল্ট কারেন্টে দ্রুত এবং মৃদু ওভারলোডে ধীরে ট্রিপ করে। IEC স্ট্যান্ডার্ড সমীকরণ: $t = \\frac{০.১৪ \\times \\text{TMS}}{(\\text{PSM})^{০.০২} - ১}$।\n২. PSM = $\\frac{\\text{ফল্ট কারেন্ট (সেকেন্ডারি)}}{\\text{পিকআপ কারেন্ট}}$।\n৩. TMS: পাশাপাশি দুটি রিলের মধ্যে ০.৩ থেকে ০.৪ সেকেন্ডের বৈষম্যমূলক মার্জিন বজায় রাখতে ব্যবহৃত হয়।'
        },
        keyTakeaways: {
          en: [
            'PSM indicates the severity of fault current relative to the relay current setting.',
            'Standard grading time discrimination margin between two series IDMT relays is 0.3 to 0.4 seconds.',
            'Relay operating time is inversely non-linear with PSM, but directly proportional to TMS.'
          ],
          hi: [
            'PSM रिले सेटिंग की तुलना में फॉल्ट करंट की तीव्रता को दर्शाता है।',
            'दो क्रमिक रिले के बीच टाइम मार्जिन 0.3 से 0.4 सेकंड होता है।',
            'ऑपरेटिंग समय TMS के सीधे समानुपाती होता है।'
          ],
          bn: [
            'PSM রিলের কারেন্ট সেটিংয়ের সাপেক্ষে ফল্ট কারেন্টের তীব্রতা নির্দেশ করে।',
            'পরপর দুটি রিলের মধ্যে ডিসক্রিমিনেশন টাইম মার্জিন সাধারণতঃ ০.৩ থেকে ০.৪ সেকেন্ড।',
            'রিলের অপারেটিং সময় সরাসরি TMS এর সমানুপাতিক।'
          ]
        },
        formulas: [
          {
            id: 'f-psm-calc',
            name: { en: 'Plug Setting Multiplier (PSM)', hi: 'PSM सूत्र', bn: 'PSM সমীকরণ' },
            formula: '\\text{PSM} = \\frac{I_{\\text{fault, primary}}}{\\text{CT Ratio} \\times (\\text{CT}_{\\text{sec}} \\times \\text{Plug Setting})}',
            description: {
              en: 'Ratio of fault current in relay coil to the relay pickup current.',
              hi: 'रिले कॉइल में फॉल्ट करंट और पिकअप करंट का अनुपात।',
              bn: 'রিলে কয়েলে ফল্ট কারেন্ট ও পিকআপ কারেন্টের অনুপাত।'
            }
          },
          {
            id: 'f-idmt-time',
            name: { en: 'IEC Standard Inverse IDMT Relay Time', hi: 'IDMT ऑपरेटिंग टाइम समीकरण', bn: 'IDMT অপারেটিং টাইম সূত্র' },
            formula: 't = \\frac{0.14 \\times \\text{TMS}}{(\\text{PSM})^{0.02} - 1} \\text{ seconds}',
            description: {
              en: 'IEC 60255 standard inverse curve for numerical and electromechanical relays.',
              hi: 'मानक इनवर्स रिले ट्रिप टाइम सूत्र।',
              bn: 'IEC ৬০২৫৫ স্ট্যান্ডার্ড ইনভার্স রিলে ট্রিপ টাইম সূত্র।'
            }
          }
        ],
        solvedExamples: [
          {
            id: 'ex-relay-psm-1',
            problem: {
              en: 'An IDMT overcurrent relay is connected to a CT of ratio 400/5 A. The relay current plug setting is 125% and Time Multiplier Setting is TMS = 0.6. If a fault current of 4000 A occurs on the primary side, calculate: (a) Pick-up current of relay, (b) PSM, and (c) Operating time of the relay using the IEC standard inverse formula.',
              hi: 'एक IDMT रिले 400/5 A CT से जुड़ी है। प्लग सेटिंग 125% और TMS = 0.6 है। 4000 A प्राइमरी फॉल्ट होने पर: (a) पिकअप करंट, (b) PSM, और (c) ऑपरेटिंग टाइम ज्ञात कीजिए।',
              bn: 'একটি IDMT রিলে ৪০০/৫ A CT এর সাথে যুক্ত। প্লাগ সেটিং ১২৫% এবং TMS = ০.৬। প্রাইমারিতে ৪০০০ A ফল্ট কারেন্ট প্রবাহিত হলে নির্ণয় করুন: (ক) পিকআপ কারেন্ট, (খ) PSM, এবং (গ) রিলেটির অপারেটিং সময়।'
            },
            solution: {
              en: 'Step 1: Relay coil rated secondary = 5 A\nPick-up current = 5 A × 1.25 = 6.25 A\nStep 2: Fault current on CT secondary = 4000 A × (5 / 400) = 50 A\nStep 3: PSM = Fault current (sec) / Pickup = 50 A / 6.25 A = 8.0\nStep 4: IEC Operating time t = [0.14 × TMS] / [(PSM)^0.02 - 1]\n(8.0)^0.02 = 1.04245\nDenominator = 1.04245 - 1 = 0.04245\nNumerator = 0.14 × 0.6 = 0.084\nOperating Time t = 0.084 / 0.04245 = 1.978 seconds ≈ 1.98 s',
              hi: 'चरण 1: पिकअप = 5 × 1.25 = 6.25 A\nचरण 2: सेकेंडरी फॉल्ट करंट = 4000 × (5/400) = 50 A\nचरण 3: PSM = 50 / 6.25 = 8.0\nचरण 4: टाइम t = (0.14 × 0.6) / (8^0.02 - 1) = 0.084 / 0.04245 = 1.98 सेकंड',
              bn: 'ধাপ ১: পিকআপ = ৫ × ১.২৫ = ৬.২৫ A\nধাপ ২: সেকেন্ডারি ফল্ট কারেন্ট = ৪০০০ × (৫/৪০০) = ৫০ A\nধাপ ৩: PSM = ৫০ / ৬.২৫ = ৮.০\nধাপ ৪: সময় t = (০.১৪ × ০.৬) / (৮^০.০২ - ১) = ০.০৮৪ / ০.০৪২৪৫ = ১.৯৮ সেকেন্ড'
            },
            givenValues: { 'CT Ratio': '400/5 A', 'Plug Setting': '125%', 'TMS': '0.6', 'Fault Current': '4000 A' },
            finalAnswer: {
              en: 'Pickup = 6.25 A, PSM = 8.0, Relay Operating Time = 1.98 seconds',
              hi: 'पिकअप = 6.25 A, PSM = 8.0, ऑपरेटिंग टाइम = 1.98 सेकंड',
              bn: 'পিকআপ = ৬.২৫ A, PSM = ৮.০, অপারেটিং সময় = ১.৯৮ সেকেন্ড'
            }
          }
        ],
        mcqs: [
          {
            id: 'mcq-relay-1',
            question: {
              en: 'In an overcurrent protection scheme with two IDMT relays in series, what is the typical time discrimination margin (grading time) maintained between adjacent relays?',
              hi: 'सीरीज में दो IDMT रिले के बीच विशिष्ट टाइम डिस्क्रिमिनेशन मार्जिन (ग्रेडिंग समय) कितना रखा जाता है?',
              bn: 'সিরিজে যুক্ত দুটি IDMT রিলের মধ্যে সাধারণতঃ কত সময় বৈষম্যমূলক মার্জিন (টাইম গ্রেডিং) রাখা হয়?'
            },
            options: [
              { id: 'opt-1', text: { en: '0.3 to 0.4 seconds', hi: '0.3 से 0.4 सेकंड', bn: '০.৩ থেকে ০.৪ সেকেন্ড' } },
              { id: 'opt-2', text: { en: '3.0 to 4.0 seconds', hi: '3.0 से 4.0 सेकंड', bn: '৩.০ থেকে ৪.০ সেকেন্ড' } },
              { id: 'opt-3', text: { en: '0.01 seconds', hi: '0.01 सेकंड', bn: '০.০১ সেকেন্ড' } },
              { id: 'opt-4', text: { en: '5.0 milliseconds', hi: '5.0 मिलीसेकंड', bn: '৫.০ মিলিসেকেন্ড' } }
            ],
            correctOptionId: 'opt-1',
            explanation: {
              en: '0.3 to 0.4 seconds allows sufficient time for the downstream breaker tripping time (0.1 s), CT error (0.05 s), relay overshoot (0.05 s), and safety margin (0.1 s).',
              hi: '0.3-0.4 सेकंड का मार्जिन ब्रेकर ऑपरेटिंग समय और CT त्रुटियों को ध्यान में रखकर सेट किया जाता है।',
              bn: '০.৩-০.৪ সেকেন্ড সময় ব্রেকার ওপেনিং টাইম ও CT ত্রুটির জন্য পর্যাপ্ত সুরক্ষা মার্জিন প্রদান করে।'
            }
          }
        ]
      }
    },
    {
      id: 'ps-tp20-differential-distance',
      chapterId: 'ps-ch5-protection',
      order: 3,
      level: 'Engineering',
      title: {
        en: '20. Differential & Distance Protection (Merz-Price, Mho & Zones)',
        hi: '20. डिफरेंशियल एवं डिस्टेंस प्रोटेक्शन (Merz-Price, Mho एवं जोन्स)',
        bn: '২০. ডিফারেন্সিয়াল ও ডিসট্যান্স প্রোটেকশন (Merz-Price, Mho ও ৩-জোন স্কিম)'
      },
      description: {
        en: 'Merz-Price differential scheme for transformers (star-delta CT compensation) and generators, Percentage biased differential relay, Distance protection (Impedance, Reactance, Mho relays) with 3-zone protection reach.',
        hi: 'ट्रांसफॉर्मर एवं जनरेटर हेतु मर्ट्ज़-प्राइस डिफरेंशियल सुरक्षा, CT संयोजन तथा 3-जोन डिस्टेंस रिले (Mho रिले)।',
        bn: 'ট্রান্সফরমার ও অল্টারনেটরের মার্জ-প্রাইস ডিফারেন্সিয়াল স্কিম, স্টার-ডেল্টা CT ক্ষতিপূরণ এবং ৩-জোন ডিসট্যান্স প্রটেকশন।'
      },
      lesson: {
        id: 'lesson-ps-tp20',
        topicId: 'ps-tp20-differential-distance',
        title: {
          en: 'Differential Protection & 3-Zone Distance Relaying',
          hi: 'डिफरेंशियल सुरक्षा एवं 3-जोन डिस्टेंस रिलेइंग',
          bn: 'ডিফারেন্সিয়াল সুরক্ষা ও ৩-জোন ডিসট্যান্স রিলেয়িং'
        },
        description: {
          en: 'Unit protection for power transformers/generators and non-unit stepped distance protection for transmission lines.',
          hi: 'ट्रांसफॉर्मर व जनरेटर हेतु यूनिट प्रोटेक्शन एवं लंबी लाइनों हेतु स्टेप्ड डिस्टेंस रिलेइंग।',
          bn: 'ট্রান্সফরমার/জেনারেটরের ইউনিট প্রটেকশন এবং সঞ্চালন লাইনের স্টেপড ডিসট্যান্স প্রটেকশন।'
        },
        detailedExplanation: {
          en: '1. Merz-Price Percentage Biased Differential Protection:\nBased on Kirchhoff\'s Current Law ($I_{in} - I_{out} = 0$). Current Transformers (CTs) on both sides of the protected equipment feed restraining and operating coils.\n- For Power Transformers: The phase shift introduced by star-delta winding connections ($30^\\circ$) must be cancelled by connecting CT secondaries in the OPPOSITE configuration: Delta-connected transformer winding must have Star-connected CTs; Star-connected transformer winding must have Delta-connected CTs!\n- Operating criteria: Trip occurs when operating current $|I_1 - I_2| > k \\cdot \\frac{|I_1 + I_2|}{2}$ (where $k$ is percentage bias slope, typically 20% to 40% to prevent false tripping during heavy external through-faults with CT saturation).\n\n2. Distance Protection for Transmission Lines:\nDistance relays measure apparent impedance $Z = V/I$ from relay location to fault point.\n- Impedance Relay: Non-directional circle centered at origin in R-X plane. Operates if measured $|Z| < Z_{\\text{setting}}$.\n- Reactance Relay: Operates on reactance only ($X < X_{\\text{setting}}$); immune to fault arc resistance ($R_{\\text{arc}}$); ideal for short lines.\n- Mho (Admittance) Relay: Circular characteristic passing through origin; inherently directional; widely used for long EHV lines.\n\n3. Stepped 3-Zone Distance Protection Reach:\n- Zone 1: Protects 80% to 85% of line length; Instantaneous trip ($t_1 = 0 \\text{ s}$). Cannot protect 100% to avoid overreaching on remote bus faults.\n- Zone 2: Protects 100% of line + 20% of shortest adjacent line; Time delayed ($t_2 \\approx 0.3 \\text{ s}$).\n- Zone 3: Protects 100% of line + 100% of adjacent line + 20% beyond; Backup time delayed ($t_3 \\approx 0.6 \\text{ to } 0.8 \\text{ s}$).',
          hi: '1. डिफरेंशियल सुरक्षा: ट्रांसफॉर्मर में फेज शिफ्ट दूर करने के लिए उल्टे CT कनेक्शन होते हैं (स्टार वाइंडिंग हेतु डेल्टा CT और डेल्टा वाइंडिंग हेतु स्टार CT)।\n2. डिस्टेंस रिले: $Z = V/I$ मापती है।\n- इम्पीडेंस रिले: नॉन-डायरेक्शनल।\n- रिएक्टेंस रिले: आर्क प्रतिरोध से अप्रभावित (शार्ट लाइन हेतु)।\n- Mho रिले: स्वतः दिशात्मक (लॉन्ग लाइन हेतु)।\n3. 3-जोन सुरक्षा: जोन 1 (80-85% त्वरित $t=0$), जोन 2 (100% + 20% बैकअप $t=0.3s$), जोन 3 (दूरगामी बैकअप $t=0.6s$)।',
          bn: '১. ডিফারেন্সিয়াল প্রটেকশন: ট্রান্সফরমারের ৩০° ফেজ শিফট দূর করতে বিপরীত CT সংযোগ ব্যবহৃত হয় (ডেল্টা ওয়াইন্ডিংয়ে স্টার CT এবং স্টার ওয়াইন্ডিংয়ে ডেল্টা CT)।\n২. ডিসট্যান্স রিলে: $Z = V/I$ মেপে ফল্টের দূরত্ব নির্ণয় করে।\n- রিঅ্যাকট্যান্স রিলে: আর্কের রেজিস্ট্যান্স দ্বারা অপ্রভাবিত (শর্ট লাইনের জন্য)।\n- Mho রিলে: ইনহেরেন্টলি ডিরেকশনাল (লং EHV লাইনের জন্য)।\n৩. ৩-জোন ডিসট্যান্স স্কিম: জোন ১ (৮০-৮৫% তাত্ক্ষণিক t=০), জোন ২ (১০০% + ২০% ব্যাকআপ t=০.৩s), জোন ৩ (পরবর্তী লাইনের ব্যাকআপ t=০.৬-০.৮s)।'
        },
        keyTakeaways: {
          en: [
            'For a Star/Delta power transformer, CTs must be connected Delta/Star to compensate for the 30° internal phase shift.',
            'Zone 1 of a distance relay is set to 80-85% of line length with zero time delay.',
            'Mho relay is inherently directional and is the preferred choice for long high-voltage lines.'
          ],
          hi: [
            'स्टार/डेल्टा ट्रांसफॉर्मर के लिए CT कनेक्शन डेल्टा/स्टार होने चाहिए।',
            'डिस्टेंस रिले का जोन 1 लाइन के 80-85% भाग को शून्य समय विलंब में सुरक्षित करता है।',
            'Mho रिले दिशात्मक होती है और लंबी EHV लाइनों के लिए आदर्श है।'
          ],
          bn: [
            'স্টার/ডেল্টা পাওয়ার ট্রান্সফরমারের জন্য CT সংযোগ বিপরীতভাবে ডেল্টা/স্টার হতে হবে।',
            'ডিসট্যান্স রিলের জোন ১ লাইনের ৮০-৮৫% অংশ কোনো টাইম ডিলে ছাড়াই তাৎক্ষণিকভাবে সুরক্ষা দেয়।',
            'Mho রিলে দিকনির্দেশক (Directional) এবং লং EHV লাইনের সুরক্ষায় ব্যবহৃত হয়।'
          ]
        },
        formulas: [
          {
            id: 'f-diff-biased',
            name: { en: 'Biased Differential Relay Trip Condition', hi: 'बायस्ड डिफरेंशियल ट्रिप शर्त', bn: 'বায়াসড ডিফারেন্সিয়াল ট্রিপ সমীকরণ' },
            formula: '|I_1 - I_2| > k \\cdot \\left( \\frac{|I_1 + I_2|}{2} \\right) + I_0',
            description: {
              en: 'I1 - I2 = Operating coil current, (I1 + I2)/2 = Restraining current, k = Percentage bias slope (0.2 to 0.4).',
              hi: 'डिफरेंशियल रिले का ऑपरेटिंग मानदंड।',
              bn: 'বায়াসড ডিফারেন্সিয়াল রিলের অপারেটিং ট্রিপ সমীকরণ।'
            }
          }
        ],
        solvedExamples: [
          {
            id: 'ex-diff-trans-1',
            problem: {
              en: 'A 3-phase, 11 kV / 66 kV, 20 MVA power transformer is connected in Star on the 11 kV LV side and Delta on the 66 kV HV side. CTs on the 11 kV LV side have a ratio of 1000/5 A and are connected in Delta. What must be the CT ratio and connection on the 66 kV HV side for complete differential protection balance?',
              hi: 'एक 20 MVA, 11/66 kV ट्रांसफॉर्मर LV पर स्टार और HV पर डेल्टा में है। 11 kV LV पर CT 1000/5 A डेल्टा में हैं। HV साइड (66 kV) पर CT कनेक्शन और CT अनुपात क्या होना चाहिए?',
              bn: 'একটি ২০ MVA, ১১/৬৬ kV ট্রান্সফরমার LV দিকে স্টার এবং HV দিকে ডেল্টায় সংযুক্ত। ১১ kV LV দিকে ১০০০/৫ A CT ডেল্টায় যুক্ত। ৬৬ kV HV দিকে ডিফারেন্সিয়াল ব্যালেন্সের জন্য CT অনুপাত ও সংযোগ কী হতে হবে?'
            },
            solution: {
              en: 'Step 1: CT Connection Rule: Since 66 kV side is DELTA, the CTs on 66 kV side must be connected in STAR.\nStep 2: LV (11 kV) rated line current I_LV = 20,000 / (√3 × 11) = 1,049.7 A\nLV CT ratio is 1000/5 A. LV CT secondary phase current = 1049.7 × (5/1000) = 5.248 A\nSince LV CTs are Delta-connected, the pilot wire relay current from LV side is I_pilot = √3 × 5.248 = 9.09 A\nStep 3: HV (66 kV) rated line current I_HV = 20,000 / (√3 × 66) = 174.95 A\nSince HV CTs are Star-connected, HV CT secondary line current directly equals pilot wire current = 9.09 A\nStep 4: HV CT Ratio = I_HV / I_pilot = 174.95 / 9.09 A ≈ 175 / 9.09 A = 96.2 / 5 A (or approximately 200/10.4 A in standard ratings).',
              hi: 'चरण 1: HV साइड डेल्टा होने के कारण HV CT को STAR में जोड़ा जाएगा।\nचरण 2: LV पायलट करंट = √3 × (1049.7 × 5/1000) = 9.09 A\nचरण 3: HV करंट = 174.95 A\nचरण 4: HV CT रेश्यो = 174.95 / 9.09 = 96.2 / 5 A (Star connected)',
              bn: 'ধাপ ১: HV সাইড ডেল্টায় থাকায় HV CT স্টার (STAR) এ সংযুক্ত হবে।\nধাপ ২: LV পাইলট ওয়্যার কারেন্ট = √৩ × (১০৪৯.৭ × ৫/১০০০) = ৯.০৯ A\nধাপ ৩: HV রেটেড কারেন্ট = ১৭৪.৯৫ A\nধাপ ৪: HV CT রেশিও = ১৭৪.৯৫ / ৯.০৯ = ৯৬.২ / ৫ A (স্টার কানেক্টেড)'
            },
            givenValues: { 'Transformer': '20 MVA, 11 kV Star / 66 kV Delta', 'LV CT': '1000/5 A Delta' },
            finalAnswer: {
              en: 'HV CT Connection = STAR, HV CT Ratio = 175 : 9.09 A (or 96.2 : 5 A)',
              hi: 'HV CT कनेक्शन = STAR, HV CT रेश्यो = 175 : 9.09 A',
              bn: 'HV CT সংযোগ = STAR, HV CT রেশিও = ১৭৫ : ৯.০৯ A'
            }
          }
        ],
        mcqs: [
          {
            id: 'mcq-zone-1',
            question: {
              en: 'Why is Zone 1 of a transmission line distance relay restricted to cover only 80% to 85% of the line length rather than 100%?',
              hi: 'डिस्टेंस रिले के जोन 1 को 100% के बजाय केवल 80% से 85% लाइन लंबाई तक ही क्यों सीमित रखा जाता है?',
              bn: 'একটি সঞ্চালন লাইনের ডিসট্যান্স রিলের জোন ১ পুরো ১০০% লাইনের পরিবর্তে কেবল ৮০% থেকে ৮৫% পর্যন্ত কেন সীমাবদ্ধ রাখা হয়?'
            },
            options: [
              { id: 'opt-1', text: { en: 'To prevent false instantaneous overreaching tripping due to CT/PT errors and line parameter inaccuracies on adjacent line faults', hi: 'CT/PT त्रुटियों के कारण अगली लाइन के फॉल्ट पर गलत त्वरित ट्रिपिंग (Overreach) रोकने के लिए', bn: 'CT/PT এবং লাইনের ত্রুটির কারণে পরবর্তী লাইনের ফল্টে যেন ভুল তাৎক্ষণিক ট্রিপ (Overreach) না ঘটে' } },
              { id: 'opt-2', text: { en: 'To reduce the physical weight of the relay', hi: 'रिले का वजन कम करने के लिए', bn: 'রিলের ওজন কমাতে' } },
              { id: 'opt-3', text: { en: 'Because electric current drops to zero at 85%', hi: 'क्योंकि करंट 85% पर शून्य हो जाता है', bn: 'কারণ কারেন্ট ৮৫% এ শূন্য হয়ে যায়' } },
              { id: 'opt-4', text: { en: 'To allow cooling time', hi: 'कूलिंग समय देने के लिए', bn: 'কুলিং সময় দিতে' } }
            ],
            correctOptionId: 'opt-1',
            explanation: {
              en: 'Setting Zone 1 to 100% would cause the instantaneous relay to overreach and trip unnecessarily for faults just beyond the remote substation due to CT/PT errors and transient overshoots.',
              hi: '100% सेट करने पर सबस्टेशन के ठीक बाद के फॉल्ट पर भी रिले गलती से तत्काल ट्रिप हो जाएगी। 80-85% सुरक्षा मार्जिन सुनिश्चित करता है।',
              bn: '১০০% সেট করলে মেজারমেন্ট ত্রুটির কারণে দূরবর্তী সাবস্টেশনের বাইরের ফল্টেও রিলটি ভুলবশত তাৎক্ষণিক ট্রিপ করে বসবে।'
            }
          }
        ]
      }
    },
    {
      id: 'ps-tp21-power-system-stability',
      chapterId: 'ps-ch5-protection',
      order: 4,
      level: 'Engineering',
      title: {
        en: '21. Power System Stability, Swing Equation & Equal Area Criterion',
        hi: '21. पावर सिस्टम स्थिरता, स्विंग समीकरण एवं इक्वल एरिया क्राइटेरियन',
        bn: '২১. পাওয়ার সিস্টেম স্ট্যাবিলিটি, সুইং সমীকরণ ও ইকুয়াল এরিয়া ক্রাইটেরিয়ন'
      },
      description: {
        en: 'Steady-state, Transient, and Dynamic stability limits, Rotor dynamics Swing Equation (M d²δ/dt² = Pm - Pe), Power-Angle curve, and Equal Area Criterion for critical clearing angle (δcr).',
        hi: 'स्टेडी-स्टेट एवं ट्रांजिएंट स्थिरता, स्विंग समीकरण, पावर-एंगल वक्र ($P = \\frac{EV}{X}\\sin\\delta$) एवं क्रिटिकल क्लियरिंग एंगल (δcr)।',
        bn: 'স্টেডি-স্টেট ও ট্রানজিয়েন্ট স্ট্যাবিলিটি, সুইং সমীকরণ ($M d^2\\delta/dt^2 = P_m - P_e$), পাওয়ার-অ্যাঙ্গেল কার্ভ এবং ক্রিটিকাল ক্লিয়ারিং অ্যাঙ্গেল (δcr)।'
      },
      lesson: {
        id: 'lesson-ps-tp21',
        topicId: 'ps-tp21-power-system-stability',
        title: {
          en: 'Power System Stability Dynamics & The Equal Area Criterion',
          hi: 'पावर सिस्टम स्थिरता गतिशीलता एवं इक्वल एरिया क्राइटेरियन',
          bn: 'পাওয়ার সিস্টেম স্ট্যাবিলিটি ডাইনামিক্স ও ইকুয়াল এরিয়া ক্রাইটেরিয়ন'
        },
        description: {
          en: 'Mathematical modeling of synchronous machine rotor acceleration, swing curves, and transient stability boundaries.',
          hi: 'सिंक्रोनस जनरेटर रोटर त्वरण, स्विंग समीकरण और फॉल्ट क्लियरिंग समय का विश्लेषण।',
          bn: 'সিনক্রোনাস জেনারেটর রটার ত্বরণ, সুইং সমীকরণ এবং ফল্ট ক্লিয়ারিং সময়ের গাণিতিক রূপ।'
        },
        detailedExplanation: {
          en: 'Power System Stability is the ability of an interconnected grid of synchronous machines to remain in synchronism following severe disturbances (faults, line tripping, sudden load loss).\n\n1. Rotor Dynamics & The Swing Equation:\nAccording to Newton\'s second law for rotating masses:\n$$M \\frac{d^2 \\delta}{dt^2} = P_m - P_e = P_a$$\nWhere $\\delta$ is rotor power angle in electrical radians, $P_m$ is mechanical shaft power input, $P_e$ is electrical power output, $P_a$ is accelerating power, and Angular Momentum $M = \\frac{G H}{\\pi f}$ (MJ-s/elec.rad), with $H$ being the machine Inertia Constant in MJ/MVA.\n\n2. Power-Angle Relationship:\nFor a generator with internal EMF $E$ connected through reactance $X$ to an infinite bus $V$:\n$$P_e = P_{max} \\sin \\delta = \\frac{E V}{X} \\sin \\delta$$\nSteady-State Stability Limit occurs when $\\frac{dP}{d\\delta} = 0$, which corresponds to $\\delta = 90^\\circ$ and $P_{max} = \\frac{E V}{X}$.\n\n3. Equal Area Criterion (Transient Stability):\nDuring a severe short-circuit fault, electrical power $P_e$ suddenly drops to near zero while mechanical input $P_m$ remains constant, causing the rotor to accelerate ($d^2\\delta/dt^2 > 0$) and $\\delta$ to increase from $\\delta_0$ to fault clearing angle $\\delta_{cr}$.\n- Accelerating Energy Area $A_1 = \\int_{\\delta_0}^{\\delta_{cr}} (P_m - P_e^{\\text{during}}) d\\delta$\n- Decelerating Energy Area $A_2 = \\int_{\\delta_{cr}}^{\\delta_{max}} (P_e^{\\text{post}} - P_m) d\\delta$\n- Stability Criterion: The system remains synchronized IF and only IF Accelerating Area $A_1 \\le$ Maximum Available Decelerating Area $A_2$.\n- Critical Clearing Angle ($\\delta_{cr}$) for solid fault ($P_e = 0$ during fault):\n  $$\\cos \\delta_{cr} = \\frac{P_m}{P_{max}} (\\delta_{max} - \\delta_0) + \\cos \\delta_{max}$$',
          hi: '1. स्विंग समीकरण: $M \\frac{d^2\\delta}{dt^2} = P_m - P_e = P_a$। जहाँ $M = \\frac{GH}{\\pi f}$।\n2. पावर-एंगल समीकरण: $P_e = \\frac{EV}{X} \\sin\\delta$ (अधिकतम सीमा $\\delta = 90^\\circ$ पर)।\n3. इक्वल एरिया क्राइटेरियन: ट्रांजिएंट स्थिरता के लिए त्वरण क्षेत्र $A_1$ अवमंदन क्षेत्र $A_2$ के बराबर या उससे कम होना चाहिए ($A_1 \\le A_2$)।\n- क्रिटिकल क्लियरिंग एंगल $\\delta_{cr}$ वह अधिकतम कोण है जिस पर फॉल्ट को समय रहते दूर करना अनिवार्य है।',
          bn: '১. সুইং সমীকরণ: $M \\frac{d^2\\delta}{dt^2} = P_m - P_e = P_a$। এখানে $M = \\frac{GH}{\\pi f}$।\n২. পাওয়ার-অ্যাঙ্গেল সমীকরণ: $P_e = \\frac{EV}{X} \\sin\\delta$ (সর্বোচ্চ ক্ষমতা $\\delta = ৯০^\\circ$ তে)।\n৩. ইকুয়াল এরিয়া ক্রাইটেরিয়ন: ট্রানজিয়েন্ট স্থিতিশীলতার জন্য ত্বরণ ক্ষেত্রফল $A_1$ মন্থন ক্ষেত্রফল $A_2$ এর সমান বা কম হতে হবে ($A_1 \\le A_2$)।\n- ক্রিটিকাল ক্লিয়ারিং অ্যাঙ্গেল $\\delta_{cr}$ হলো সেই সর্বোচ্চ কোণ যার মধ্যে ফল্ট বিচ্ছিন্ন না করলে সিস্টেম সিনক্রোনিজমে থাকবে না।'
        },
        keyTakeaways: {
          en: [
            'Steady-state power limit is Pmax = (E·V) / X occurring at rotor angle δ = 90°.',
            'Inertia constant H is kinetic energy stored in rotor at synchronous speed divided by MVA rating (typically 3 to 6 MJ/MVA).',
            'Equal Area Criterion states system is stable if accelerating area A1 equals decelerating area A2.'
          ],
          hi: [
            'स्टेडी-स्टेट पावर सीमा Pmax = EV/X (δ = 90° पर)।',
            'जड़त्व स्थिरांक H = संचित गतिज ऊर्जा / MVA रेटिंग।',
            'इक्वल एरिया क्राइटेरियन: त्वरण क्षेत्रफल A1 = अवमंदन क्षेत्रफल A2 होने पर सिस्टम स्थिर रहता है।'
          ],
          bn: [
            'স্টেডি-স্টেট পাওয়ার সীমা Pmax = EV/X (δ = ৯০° তে)।',
            'জড়তা ধ্রুবক H = সঞ্চিত গতিশক্তি / MVA রেটিং।',
            'ইকুয়াল এরিয়া ক্রাইটেরিয়ন: ত্বরণ ক্ষেত্রফল A1 = মন্থন ক্ষেত্রফল A2 হলে সিস্টেম স্থিতিশীল থাকে।'
          ]
        },
        formulas: [
          {
            id: 'f-swing-eqn',
            name: { en: 'The Rotor Swing Equation', hi: 'स्विंग समीकरण', bn: 'সুইং সমীকরণ' },
            formula: '\\frac{H}{\\pi f} \\frac{d^2 \\delta}{dt^2} = P_m - P_{\\text{max}} \\sin \\delta',
            description: {
              en: 'H = Inertia constant (MJ/MVA), f = Frequency (Hz), δ = Power angle, Pm = Mechanical input, Pmax·sinδ = Electrical output.',
              hi: 'रोटर त्वरण एवं स्थिरता का मूल समीकरण।',
              bn: 'রটার ত্বরণ ও ট্রানজিয়েন্ট স্ট্যাবিলিটির মূল সুইং সমীকরণ।'
            }
          },
          {
            id: 'f-crit-clearing',
            name: { en: 'Critical Clearing Angle (δcr)', hi: 'क्रिटिकल क्लियरिंग एंगल सूत्र', bn: 'ক্রিটিকাল ক্লিয়ারিং অ্যাঙ্গেল সমীকরণ' },
            formula: '\\cos \\delta_{cr} = \\frac{P_m}{P_{\\text{max}}} (\\delta_{\\text{max}} - \\delta_0) + \\cos \\delta_{\\text{max}}',
            description: {
              en: 'δ0 = Initial operating angle, δmax = π - δ0 (in radians), Pmax = Maximum post-fault power limit.',
              hi: 'फॉल्ट क्लियर करने का अधिकतम सुरक्षित कोण।',
              bn: 'ফল্ট বিচ্ছিন্ন করার সর্বোচ্চ নিরাপদ কোণ সমীকরণ।'
            }
          }
        ],
        solvedExamples: [
          {
            id: 'ex-swing-crit-1',
            problem: {
              en: 'A 50 Hz synchronous generator delivers 1.0 p.u. power to an infinite bus through a transmission network with maximum power capability Pmax = 2.0 p.u. A 3-phase fault occurs which drops electrical power output to Pe = 0. Upon clearing the fault, original network capability is restored (Pmax = 2.0 p.u.). Calculate: (a) Initial rotor angle δ0, (b) Maximum rotor angle δmax, and (c) Critical clearing angle δcr in degrees.',
              hi: 'एक 50 Hz जनरेटर 1.0 p.u. पावर भेजता है (Pmax = 2.0 p.u.)। फॉल्ट के दौरान Pe = 0 हो जाता है। फॉल्ट हटने पर Pmax = 2.0 p.u. पुनः प्राप्त होता है। (a) δ0, (b) δmax, और (c) क्रिटिकल क्लियरिंग एंगल δcr ज्ञात कीजिए।',
              bn: 'একটি ৫০ Hz জেনারেটর ১.০ p.u. বিদ্যুৎ সরবরাহ করছে (Pmax = ২.০ p.u.)। ফল্টের সময় Pe = ০ হয়ে যায় এবং ফল্ট মুক্তির পর পুনরায় Pmax = ২.০ p.u. ফিরে আসে। নির্ণয় করুন: (ক) δ0, (খ) δmax, এবং (গ) ক্রিটিকাল ক্লিয়ারিং অ্যাঙ্গেল δcr।'
            },
            solution: {
              en: 'Step 1: Initial power Pm = 1.0 p.u. = Pmax · sin δ0\n1.0 = 2.0 · sin δ0 ⇒ sin δ0 = 0.50 ⇒ δ0 = 30° = π/6 rad = 0.5236 radians\nStep 2: Maximum angle δmax = π - δ0 = 180° - 30° = 150° = 5π/6 rad = 2.6180 radians\nStep 3: Formula cos δcr = (Pm / Pmax) · (δmax - δ0) + cos δmax\n(Pm / Pmax) = 1.0 / 2.0 = 0.50\n(δmax - δ0) = 2.6180 - 0.5236 = 2.0944 radians\ncos δmax = cos(150°) = -0.8660\ncos δcr = [0.50 × 2.0944] + (-0.8660) = 1.0472 - 0.8660 = 0.1812\nStep 4: δcr = arccos(0.1812) = 79.56°',
              hi: 'चरण 1: sin δ0 = 1/2 ⇒ δ0 = 30° (0.524 rad)\nचरण 2: δmax = 180° - 30° = 150° (2.618 rad)\nचरण 3: cos δcr = 0.5 × (2.618 - 0.524) + cos(150°) = 1.0472 - 0.8660 = 0.1812\nचरण 4: δcr = arccos(0.1812) = 79.56°',
              bn: 'ধাপ ১: sin δ0 = ১/২ ⇒ δ0 = ৩০° (০.৫২৪ rad)\nধাপ ২: δmax = ১৮০° - ৩০° = ১৫০° (২.৬১৮ rad)\nধাপ ৩: cos δcr = ০.৫ × (২.৬১৮ - ০.৫২৪) + cos(১৫০°) = ১.০৪৭২ - ০.৮৬৬০ = ০.১৮১২\nধাপ ৪: δcr = arccos(০.১৮১২) = ৭৯.৫৬°'
            },
            givenValues: { 'Initial Power Pm': '1.0 p.u.', 'Pmax': '2.0 p.u.', 'Fault Power': '0 p.u.' },
            finalAnswer: {
              en: 'δ0 = 30.0°, δmax = 150.0°, Critical Clearing Angle δcr = 79.56°',
              hi: 'δ0 = 30.0°, δmax = 150.0°, क्रिटिकल क्लियरिंग एंगल δcr = 79.56°',
              bn: 'δ0 = ৩০.০°, δmax = ১৫০.০°, ক্রিটিকাল ক্লিয়ারিং অ্যাঙ্গেল δcr = ৭৯.৫৬°'
            }
          }
        ],
        mcqs: [
          {
            id: 'mcq-stab-1',
            question: {
              en: 'What is the theoretical maximum steady-state power transfer capability of a synchronous machine connected to an infinite bus through reactance X?',
              hi: 'रिएक्टेंस X के माध्यम से इनफिनिट बस से जुड़े सिंक्रोनस जनरेटर की सैद्धांतिक अधिकतम स्टेडी-स्टेट पावर क्षमता कितनी होती है?',
              bn: 'রিঅ্যাকট্যান্স X এর মাধ্যমে ইনফিনিট বাসের সাথে যুক্ত একটি সিনক্রোনাস মেশিনের সর্বোচ্চ স্টেডি-স্টেট পাওয়ার ট্রান্সফার ক্ষমতা কত?'
            },
            options: [
              { id: 'opt-1', text: { en: 'Pmax = (E · V) / X at power angle δ = 90°', hi: 'Pmax = (E · V) / X (δ = 90° पर)', bn: 'Pmax = (E · V) / X (পাওয়ার অ্যাঙ্গেল δ = ৯০° তে)' } },
              { id: 'opt-2', text: { en: 'Pmax = (E · V) / X² at δ = 0°', hi: 'Pmax = (E · V) / X²', bn: 'Pmax = (E · V) / X²' } },
              { id: 'opt-3', text: { en: 'Pmax = E² / (2X) at δ = 180°', hi: 'Pmax = E² / (2X)', bn: 'Pmax = E² / (2X)' } },
              { id: 'opt-4', text: { en: 'Pmax = (E + V) / X at δ = 45°', hi: 'Pmax = (E + V) / X', bn: 'Pmax = (E + V) / X' } }
            ],
            correctOptionId: 'opt-1',
            explanation: {
              en: 'From the power-angle relation P = (EV/X)·sinδ, the derivative dP/dδ = (EV/X)·cosδ equals zero at δ = 90°, producing maximum power Pmax = EV/X.',
              hi: 'पावर समीकरण P = (EV/X) sin δ में sin 90° = 1 होने पर अधिकतम मान Pmax = EV/X प्राप्त होता है।',
              bn: 'পাওয়ার সমীকরণ P = (EV/X) sin δ থেকে sin ৯০° = ১ হলে সর্বোচ্চ পাওয়ার Pmax = EV/X পাওয়া যায়।'
            }
          }
        ]
      }
    },
    {
      id: 'ps-tp22-facts-smart-grid',
      chapterId: 'ps-ch5-protection',
      order: 5,
      level: 'Engineering',
      title: {
        en: '22. FACTS Controllers, HVDC Systems, PMU & Smart Grids',
        hi: '22. FACTS नियंत्रक, HVDC प्रणाली, PMU एवं स्मार्ट ग्रिड',
        bn: '২২. FACTS কন্ট্রোলার, HVDC সঞ্চালন, PMU ও স্মার্ট গ্রিড'
      },
      description: {
        en: 'Flexible AC Transmission Systems (STATCOM, SVC, TCSC, UPFC), HVDC configurations (Monopolar, Bipolar, Back-to-Back), SCADA, Phasor Measurement Units (PMU/WAMS), and Smart Grid microgrids.',
        hi: 'FACTS नियंत्रक (STATCOM, SVC, TCSC, UPFC), HVDC ट्रांसमिशन, SCADA, PMU एवं स्मार्ट ग्रिड।',
        bn: 'FACTS কন্ট্রোলার (STATCOM, SVC, TCSC, UPFC), HVDC ট্রান্সমিশন, SCADA, PMU এবং স্মার্ট গ্রিড মাইক্রোগ্রaction।'
      },
      lesson: {
        id: 'lesson-ps-tp22',
        topicId: 'ps-tp22-facts-smart-grid',
        title: {
          en: 'FACTS Devices, HVDC Transmission Links & Smart Grid Automation',
          hi: 'FACTS उपकरण, HVDC ट्रांसमिशन एवं स्मार्ट ग्रिड स्वचालन',
          bn: 'FACTS ডিভাইস, HVDC সঞ্চালন ও স্মার্ট গ্রিড অটোমেশন'
        },
        description: {
          en: 'Power electronics based grid controllers, bulk DC transmission, synchronized phasor telemetry, and self-healing smart networks.',
          hi: 'पावर इलेक्ट्रॉनिक्स आधारित ग्रिड नियंत्रक, लंबी दूरी का HVDC संचरण एवं PMU आधारित WAMS निगरानी।',
          bn: 'পাওয়ার ইলেকট্রনিক্স ভিত্তিক গ্রিড কন্ট্রোলার, দীর্ঘ দূরত্বের HVDC সঞ্চালন এবং PMU ভিত্তিক ওয়াইড-এরিয়া মনিটরিং।'
        },
        detailedExplanation: {
          en: 'Modern power systems utilize high-speed power electronics and digital telemetry to maximize grid transfer capacity and integrate renewable energy.\n\n1. FACTS (Flexible AC Transmission Systems):\n- STATCOM (Static Synchronous Compensator): Voltage-source converter (VSC) connected in shunt; injects/absorbs continuous reactive current dynamically regardless of grid voltage level, stabilizing voltage during rapid faults.\n- SVC (Static VAR Compensator): Uses thyristor-controlled reactors (TCR) and thyristor-switched capacitors (TSC) for reactive power compensation.\n- TCSC (Thyristor Controlled Series Capacitor): Dynamically modulates line reactance to prevent sub-synchronous resonance (SSR) and boost transient stability.\n- UPFC (Unified Power Flow Controller): The most versatile FACTS device, combining shunt and series converters to control active power, reactive power, and bus voltage simultaneously.\n\n2. HVDC (High Voltage Direct Current) Transmission:\nFor distances beyond the "Break-Even Distance" (~600 km for overhead lines, ~50 km for submarine cables), HVDC is more economical and technically superior to HVAC.\n- Advantages: Zero charging current / dielectric loss, no Ferranti effect, asynchronous interconnection between non-synchronized grids (e.g. 50 Hz to 60 Hz), and complete elimination of reactive power line drops.\n- Configurations: Monopolar (single conductor with ground return), Bipolar (two conductors, +kV and -kV with grounded midpoint; can operate at 50% power on one pole during fault), and Back-to-Back (rectifier and inverter in same station for frequency isolation).\n\n3. PMU, WAMS & Smart Grid Technologies:\n- Phasor Measurement Units (PMUs): Sample voltage and current waveforms at 50–60 samples/second, time-stamped with GPS atomic clock synchronism to microsecond precision.\n- Wide Area Monitoring Systems (WAMS): Aggregate PMU synchronized synchrophasors to detect real-time inter-area power oscillations and prevent catastrophic cascading blackouts.',
          hi: '1. FACTS उपकरण: STATCOM (शंट VSC), SVC (थाइरिस्टर आधारित), TCSC (सीरीज रिएक्टेंस नियंत्रण) एवं UPFC (सक्रिय और प्रतिक्रियाशील शक्ति का एक साथ नियंत्रण)।\n2. HVDC ट्रांसमिशन: 600 किमी से अधिक दूरी पर AC से अधिक किफायती। इसमें कोई चार्जिंग करंट या फेरांती प्रभाव नहीं होता और यह दो अलग आवृत्तियों के ग्रिडों को जोड़ सकता है।\n3. PMU एवं WAMS: GPS क्लॉक द्वारा समय-मुद्रित (time-stamped) सिंक्रोफेज़र डेटा लेकर पूरे देश के ग्रिड को ब्लैकआउट से बचाते हैं।',
          bn: '১. FACTS কন্ট্রোলার: STATCOM (ডাইনামিক শান্ট রিঅ্যাক্টিভ কম্পেনসেশন), SVC (থাইরিস্টর নিয়ন্ত্রিত), TCSC (সিরিজ ক্যাপাসিট্যান্স নিয়ন্ত্রণ) এবং UPFC (একসাথে একটিভ ও রিঅ্যাক্টিভ পাওয়ার প্রবাহ নিয়ন্ত্রণ)।\n২. HVDC সঞ্চালন: ৬০০ কিমির বেশি দূরত্বের ক্ষেত্রে এসি সঞ্চালনের চেয়ে সাশ্রয়ী। এতে কোনো চার্জিং কারেন্ট লস বা ফেরান্তি ইফেক্ট থাকে না এবং দুটি ভিন্ন ফ্রিকোয়েন্সির গ্রিডকে সংযুক্ত করতে পারে।\n৩. PMU ও স্মার্ট গ্রিড: GPS দ্বারা সময়-চিহ্নিত (Time-stamped) ডেটা নিয়ে ওয়াইড এরিয়া মনিটরিং সিস্টেম (WAMS) তৈরি করে গ্রিডের ব্ল্যাকআউট প্রতিরোধ করে।'
        },
        keyTakeaways: {
          en: [
            'Break-even distance for HVDC vs HVAC is ~600 km for overhead lines and ~50 km for submarine cables.',
            'UPFC is the most advanced FACTS controller, capable of simultaneously controlling line impedance, voltage, and phase angle.',
            'Phasor Measurement Units (PMUs) utilize GPS atomic clock time-tagging to provide dynamic real-time grid state estimation.'
          ],
          hi: [
            'HVDC का ब्रेक-ईवन दूरी ओवरहेड लाइन के लिए ~600 किमी और सबमरीन केबल के लिए ~50 किमी है।',
            'UPFC वोल्टेज, इम्पीडेंस और फेज एंगल को एक साथ नियंत्रित कर सकता है।',
            'PMU जीपीएस (GPS) टाइम-स्टैम्पिंग का उपयोग करके ग्रिड निगरानी करता है।'
          ],
          bn: [
            'HVDC এবং HVAC এর ব্রেক-ইভেন দূরত্ব ওভারহেড লাইনের জন্য ~৬০০ কিমি এবং সমুদ্রতলের ক্যাবলের জন্য ~৫০ কিমি।',
            'UPFC হলো সবচেয়ে আধুনিক FACTS ডিভাইস যা একইসাথে ভোল্টেজ, ইম্পিডেন্স ও ফেজ অ্যাঙ্গেল নিয়ন্ত্রণ করে।',
            'PMU জিপিএস টাইম-স্ট্যাম্পিং প্রযুক্তি ব্যবহার করে গ্রিডের রিয়েল-টাইম স্থিতিশীলতা নিশ্চিত করে।'
          ]
        },
        formulas: [
          {
            id: 'f-hvdc-power',
            name: { en: 'HVDC Power Flow Equation', hi: 'HVDC शक्ति प्रवाह समीकरण', bn: 'HVDC পাওয়ার ফ্লো সমীকরণ' },
            formula: 'P_{dc} = \\frac{V_{dr} (V_{dr} - V_{di})}{R_{dc}}',
            description: {
              en: 'Vdr = Rectifier DC voltage, Vdi = Inverter DC voltage, Rdc = Total DC line loop resistance.',
              hi: 'HVDC लाइन में संचरित शक्ति सूत्र।',
              bn: 'HVDC লাইনে প্রবাহিত ডিসি বিদ্যুৎ শক্তি সমীকরণ।'
            }
          }
        ],
        solvedExamples: [
          {
            id: 'ex-hvdc-calc-1',
            problem: {
              en: 'A bipolar HVDC transmission link operates at ±500 kV DC. The rectifier delivers DC power to the inverter over an 800 km overhead transmission line having a resistance of 0.015 Ω/km per pole. If the rectifier terminal voltage is maintained at 500 kV and inverter terminal voltage is 480 kV, calculate: (a) Total DC line current, (b) Power received at the inverter in Megawatts (MW), and (c) Transmission line loss in MW.',
              hi: 'एक ±500 kV बाइपोलर HVDC लाइन 800 km लंबी है (प्रति पोल प्रतिरोध 0.015 Ω/km)। रेक्टिफायर वोल्टेज 500 kV और इन्वर्टर वोल्टेज 480 kV होने पर: (a) DC धारा, (b) इन्वर्टर पर प्राप्त पावर (MW), और (c) लाइन लॉस (MW) ज्ञात कीजिए।',
              bn: 'একটি ±৫০০ kV বাইপোলার HVDC সঞ্চালন লাইন ৮০০ কিমি দীর্ঘ (প্রতি পোলে রেজিস্ট্যান্স ০.০১৫ Ω/km)। রেকটিফায়ার ভোল্টেজ ৫০০ kV এবং ইনভার্টার ভোল্টেজ ৪৮০ kV হলে নির্ণয় করুন: (ক) DC কারেন্ট, (খ) ইনভার্টারে প্রাপ্ত পাওয়ার (MW), এবং (গ) লাইনে মোট পাওয়ার লস (MW)।'
            },
            solution: {
              en: 'Step 1: Total resistance per pole R_pole = 0.015 Ω/km × 800 km = 12.0 Ω\nStep 2: Voltage drop per pole ΔV = 500 kV - 480 kV = 20 kV = 20,000 V\nStep 3: Line current per pole Idc = ΔV / R_pole = 20,000 V / 12.0 Ω = 1,666.67 A\nStep 4: Power received at inverter (2 poles for bipolar) P_inverter = 2 × (V_inverter × Idc) = 2 × (480,000 V × 1,666.67 A) = 2 × 800 MW = 1,600 MW\nStep 5: Total transmission line loss (2 poles) P_loss = 2 × (Idc)² × R_pole = 2 × (1666.67)² × 12.0 = 2 × 2,777,788 × 12 = 66.67 MW',
              hi: 'चरण 1: प्रति पोल प्रतिरोध R = 0.015 × 800 = 12 Ω\nचरण 2: DC धारा Idc = (500 - 480) kV / 12 Ω = 20,000 / 12 = 1,666.67 A\nचरण 3: इन्वर्टर पावर = 2 × (480 kV × 1666.67 A) = 1,600 MW\nचरण 4: कुल लाइन लॉस = 2 × (1666.67)² × 12 = 66.67 MW',
              bn: 'ধাপ ১: প্রতি পোলে রেজিস্ট্যান্স R = ০.০১৫ × ৮০০ = ১২ ওহম\nধাপ ২: DC কারেন্ট Idc = (৫০০ - ৪৮০) kV / ১২ Ω = ২০,০০০ / ১২ = ১৬৬৬.৬৭ A\nধাপ ৩: ইনভার্টারে প্রাপ্ত পাওয়ার = ২ × (৪৮০ kV × ১৬৬৬.৬৭ A) = ১৬০০ MW\nধাপ ৪: মোট লাইন লস = ২ × (১৬৬৬.৬৭)² × ১২ = ৬৬.৬৭ MW'
            },
            givenValues: { 'Voltage': '±500 kV (Bipolar)', 'Line Length': '800 km', 'Resistance': '0.015 Ω/km', 'Vrec': '500 kV', 'Vinv': '480 kV' },
            finalAnswer: {
              en: 'DC Current = 1,666.67 A, Power Delivered = 1,600 MW, Total Line Loss = 66.67 MW (Efficiency = 96.0%)',
              hi: 'DC करंट = 1,666.67 A, प्राप्त पावर = 1,600 MW, लाइन लॉस = 66.67 MW',
              bn: 'DC কারেন্ট = ১৬৬৬.৬৭ A, প্রাপ্ত পাওয়ার = ১৬০০ MW, লাইন লস = ৬৬.৬৭ MW'
            }
          }
        ],
        mcqs: [
          {
            id: 'mcq-hvdc-1',
            question: {
              en: 'Why is HVDC transmission technically and economically preferred over HVAC for long-distance bulk power transmission (> 600 km)?',
              hi: 'लंबी दूरी (> 600 किमी) के लिए HVAC की तुलना में HVDC ट्रांसमिशन को तकनीकी और आर्थिक रूप से प्राथमिकता क्यों दी जाती है?',
              bn: 'দীর্ঘ দূরত্বের (> ৬০০ কিমি) ক্ষেত্রে HVAC এর তুলনায় HVDC সঞ্চালনকে অগ্রাধিকার দেওয়ার মূল কারণ কী?'
            },
            options: [
              { id: 'opt-1', text: { en: 'No line charging current/capacitance loss, lower conductor costs, and no stability distance limits', hi: 'कोई चार्जिंग करंट हानि नहीं, कंडक्टर की कम लागत और कोई स्थिरता दूरी सीमा नहीं', bn: 'কোনো চার্জিং কারেন্ট লস নেই, পরিবাহীর খরচ কম এবং দূরত্বের কোনো স্ট্যাবিলিটি সীমা নেই' } },
              { id: 'opt-2', text: { en: 'DC transformers are cheaper', hi: 'DC ट्रांसफॉर्मर सस्ते होते हैं', bn: 'ডিসি ট্রান্সফরমার সস্তা' } },
              { id: 'opt-3', text: { en: 'Because DC generates more corona', hi: 'क्योंकि DC से अधिक कोरोना बनता है', bn: 'কারণ ডিসিতে বেশি করোনা হয়' } },
              { id: 'opt-4', text: { en: 'Requires no circuit breakers', hi: 'सर्किट ब्रेकर की आवश्यकता नहीं होती', bn: 'সার্কিট ব্রেকারের প্রয়োজন নেই' } }
            ],
            correctOptionId: 'opt-1',
            explanation: {
              en: 'HVDC lines do not suffer from continuous capacitive charging currents, reactive power drops, skin effect, or transient stability angle limitations that severely constrain long-distance AC lines.',
              hi: 'HVDC में धारिता चार्जिंग करंट, रिएक्टिव पावर ड्रॉप और स्किन प्रभाव नहीं होता, जिससे यह लंबी दूरी पर अत्यंत दक्ष है।',
              bn: 'HVDC তে ক্যাপাসিটিভ চার্জিং কারেন্ট লস, স্কিন ইফেক্ট বা অ্যাঙ্গেল স্ট্যাবিলিটি সীমাবদ্ধতা না থাকায় এটি দীর্ঘ দূরত্বের জন্য অত্যন্ত কার্যকর।'
            }
          }
        ]
      }
    }
  ]
};
