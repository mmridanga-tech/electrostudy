import { Lesson } from '../types';

export const LESSON_CT_PT_METERING: Lesson = {
  id: 'lsn-ch14-ct-pt-metering',
  topicId: 'tp-ct-pt-industrial-metering',
  chapterId: 'ch-three-phase',
  order: 7,
  title: {
    en: 'CT, PT/VT & Industrial Electrical Metering',
    hi: 'CT, PT/VT एवं औद्योगिक विद्युत मीटरिंग',
    bn: 'CT, PT/VT ও শিল্প বিদ্যুৎ মিটারিং'
  },
  description: {
    en: 'Bridge high-voltage industrial feeders to precision secondary meters using Current Transformers (CTs) and Potential Transformers (PTs/VTs). Calculate overall Meter Multiplying Factors (MF = CTR × PTR), VA burdens, ratio and phase angle errors, and master critical life-safety rules regarding open-circuit CT hazards.',
    hi: 'करंट ट्रांसफार्मर (CT) और पोटेंशियल ट्रांसफार्मर (PT) का उपयोग करके उच्च-वोल्टेज औद्योगिक फीडरों को सेकेंडरी मीटरों से जोड़ें। समग्र मीटर गुणन कारक (MF = CTR × PTR), VA बर्डन, अनुपात और फेज कोण त्रुटियों की गणना करें तथा ओपन-सर्किट CT के प्राणघातक खतरों के सुरक्षा नियमों को समझें।',
    bn: 'কারেন্ট ট্রান্সফরমার (CT) এবং পটেনশিয়াল ট্রান্সফরমার (PT/VT) ব্যবহার করে উচ্চ-ভোল্টেজ শিল্প ফিডারকে সেকেন্ডারি মিটারের সাথে সংযুক্ত করুন। মোট মিটার মাল্টিপ্লাইং ফ্যাক্টর (MF = CTR × PTR), VA বার্ডেন, রেশিও ও ফেজ অ্যাঙ্গেল ত্রুটি এবং ওপেন-সার্কিট CT এর মারাত্মক বিপদের সুরক্ষাবিধি পুঙ্খানুপুঙ্খ জানুন।'
  },
  estimatedMinutes: 50,
  easyExplanation: {
    en: 'You cannot connect a standard handheld meter or 230 V energy meter directly to an 11,000-volt power line carrying 1,000 Amperes — the meter would instantly vaporize in an arc flash! Instead, electrical engineers use two precision stepping transformers: a Current Transformer (CT) that steps down huge currents (like 1,000 A down to a safe 5 A), and a Potential Transformer (PT) that steps down lethal voltages (like 11,000 V down to 110 V). The small secondary meter reads only 110 V and 5 A. To find the real factory power, the billing computer multiplies the meter reading by the overall Multiplying Factor (MF = 200 × 100 = 20,000)!',
    hi: 'आप 11,000 वोल्ट और 1,000 एम्पीयर की मुख्य लाइन पर सीधे मीटर नहीं लगा सकते, वह तुरंत जलकर खाक हो जाएगा! इसके स्थान पर करंट ट्रांसफार्मर (CT) धारा को घटाकर (जैसे 1000 A से 5 A) और पोटेंशियल ट्रांसफार्मर (PT) वोल्टेज को घटाकर (जैसे 11,000 V से 110 V) सुरक्षित स्तर पर लाते हैं। सेकेंडरी मीटर केवल 110 V और 5 A मापता है। वास्तविक बिजली की खपत जानने के लिए मीटर की रीडिंग को गुणन कारक (MF) से गुणा किया जाता है!',
    bn: '১১,০০০ ভোল্ট এবং ১,০০০ অ্যাম্পিয়ারের লাইনে কোনো সাধারণ মিটার সরাসরি লাগানো যায় না, মিটারটি মুহূর্তে বাষ্পীভূত হয়ে যাবে! তাই কারেন্ট ট্রান্সফরমার (CT) কারেন্টকে কমিয়ে (১০০০ A থেকে ৫ A) এবং পটেনশিয়াল ট্রান্সফরমার (PT) ভোল্টেজকে কমিয়ে (১১,০০০ V থেকে ১১০ V) নিরাপদ মানে নিয়ে আসে। সেকেন্ডারি মিটারটি কেবল ১১০ V এবং ৫ A পরিমাপ করে। কারখানার প্রকৃত বিদ্যুৎ হিসাব করতে মিটারের পাঠকে মাল্টিপ্লাইং ফ্যাক্টর (MF) দিয়ে গুণ করা হয়!'
  },
  detailedExplanation: {
    en: 'High-voltage medium/high voltage (MV/HV) industrial power distribution networks require instrument transformers to scale currents and voltages down to standardized secondary levels (typically 5A or 1A for CTs; 110V or 100V line-to-line for PTs):\n\n1. Current Transformer (CT) Fundamentals:\n   • Transformation Ratio CTR = I_primary / I_secondary (e.g., 600/5A = 120, or 2000/1A = 2000).\n   • Connected strictly in SERIES with the primary line conductor.\n   • Operates with its secondary winding near short-circuit conditions through meter current coils and wiring burden.\n\n2. Potential Transformer (PT / VT) Fundamentals:\n   • Voltage Transformation Ratio PTR = V_primary / V_secondary (e.g., 11 kV / 110 V = 100, or 33 kV / 110 V = 300).\n   • Connected strictly in PARALLEL across line-to-line or line-to-ground.\n   • Operates with secondary near open-circuit conditions into high-impedance voltage coils.\n\n3. Overall Meter Multiplying Factor (MF):\n   MF = CTR × PTR = (I_pri / I_sec) × (V_pri / V_sec).\n   • Primary Real Power: P_primary = MF × P_meter_secondary.\n   • Primary Energy (kWh): kWh_primary = MF × kWh_meter_secondary.\n\n4. CT Burden & Accuracy Classes (IEC 61869 / ANSI C57.13):\n   • Burden Zb: Total impedance connected across the CT secondary (internal lead resistance, contact switches, meter current coil). Expressed in VA at rated current: VA = I_sec² × Zb.\n   • If external burden exceeds the CT\'s rated nameplate VA (e.g., 15 VA), the CT magnetic core saturates, introducing severe ratio errors (current reading becomes lower than actual) and phase angle errors.\n\n5. CATASTROPHIC HAZARD: Open-Circuiting a Live CT Secondary:\n   In a normal CT, secondary ampere-turns (N_s·I_s) oppose primary ampere-turns (N_p·I_p), leaving only a tiny magnetizing flux Φ_m in the core.\n   If the secondary is accidentally OPENED while primary current flows (I_s = 0), the opposing flux vanishes instantly! The entire massive primary current becomes magnetizing current, driving the magnetic core into extreme saturation.\n   During zero-crossings, the rate of flux change (dΦ/dt) produces thousands of volts of peak voltage (e = -N_s · dΦ/dt) across the open terminals! This creates deadly electrical shock hazards, explosive dielectric arc-over, insulation destruction, and transformer fires.\n   GOLDEN SAFETY RULE: The secondary of an energized CT MUST ALWAYS be short-circuited before removing or replacing any meter!',
    hi: 'औद्योगिक नेटवर्कों में CT और PT का उपयोग किया जाता है:\n\n1. CT: धारा को 5A या 1A तक घटाता है। CTR = I_pri / I_sec। लाइन के सीरीज में जुड़ता है।\n2. PT: वोल्टेज को 110V तक घटाता है। PTR = V_pri / V_sec। लाइन के समानांतर में जुड़ता है।\n3. मीटर गुणन कारक (MF): MF = CTR × PTR। वास्तविक बिजली = MF × मीटर रीडिंग।\n4. CT बर्डन (VA): सेकेंडरी में जुड़ा कुल भार (VA = I_sec² × Zb)।\n5. सबसे बड़ा खतरा - चालू CT को खुला (ओपन) छोड़ना:\n   यदि सेकेंडरी तार खुल जाए, तो कोर में भयंकर चुंबकीय फ्लक्स बनता है। फ्लक्स परिवर्तन की अत्यधिक दर (dΦ/dt) से टर्मिनलों पर कई हजार वोल्ट का जानलेवा स्पार्क बनता है, जो इंसान की जान ले सकता है और आग लगा सकता है।\n   स्वर्ण नियम: मीटर हटाने से पहले CT सेकेंडरी को हमेशा शॉर्ट-सर्किट करें!',
    bn: 'শিল্প নেটওয়ার্কে CT এবং PT ব্যবহৃত হয়:\n\n১. CT: কারেন্টকে ৫A বা ১A তে কমায়। CTR = I_pri / I_sec। লাইনে সিরিজে যুক্ত হয়।\n২. PT: ভোল্টেজকে ১১০V এ নামায়। PTR = V_pri / V_sec। লাইনে সমান্তরালে যুক্ত হয়।\n৩. মাল্টিপ্লাইং ফ্যাক্টর (MF): MF = CTR × PTR। আসল পাওয়ার = MF × মিটারের রিডিং।\n৪. CT বার্ডেন: সেকেন্ডারিতে সংযুক্ত মোট লোড (VA = I_sec² × Zb)।\n৫. মারাত্মক বিপদ - সচল CT সেকেন্ডারি ওপেন করা:\n   চালু অবস্থায় CT সেকেন্ডারি খুলে গেলে বিপরীত ফ্লাক্স শূন্য হয়ে যায় এবং সম্পূর্ণ প্রাইমারি কারেন্ট কোরকে স্যাচুরেট করে। তীব্র ফ্লাক্স পরিবর্তনের কারণে (dΦ/dt) টার্মিনালে কয়েক হাজার ভোল্টের প্রাণঘাতী শক তৈরি হয় যা মানুষ হত্যা ও অগ্নিকাণ্ড ঘটাতে পারে।\n   সোনালী সুরক্ষা নিয়ম: মিটার খোলার আগে CT সেকেন্ডারি সর্বদা শর্ট-সার্কিট করে নিতে হবে!'
  },
  formulas: [
    {
      id: 'f-overall-meter-multiplying-factor',
      symbol: 'MF',
      expression: 'MF = CTR \\times PTR = \\left( \\frac{I_{primary}}{I_{secondary}} \\right) \\times \\left( \\frac{V_{primary}}{V_{secondary}} \\right)',
      title: {
        en: 'Overall Meter Multiplying Factor (MF)',
        hi: 'समग्र मीटर गुणन कारक (MF)',
        bn: 'মোট মিটার মাল্টিপ্লাইং ফ্যাক্টর (MF)'
      },
      description: {
        en: 'Scalar multiplier applied to secondary meter readings to determine actual primary circuit power and energy.',
        hi: 'सेकेंडरी मीटर की रीडिंग को वास्तविक प्राइमरी सर्किट की शक्ति में बदलने वाला गुणक।',
        bn: 'সেকেন্ডারি মিটারের পাঠ থেকে মূল প্রাইমারি সার্কিটের প্রকৃত ক্ষমতা ও বিদ্যুৎ হিসাব করার গুণক।'
      },
      variables: [
        { symbol: 'CTR', name: { en: 'Current Transformer Ratio', hi: 'करंट ट्रांसफार्मर अनुपात', bn: 'কারেন্ট ট্রান্সফরমার অনুপাত' } },
        { symbol: 'PTR', name: { en: 'Potential Transformer Ratio', hi: 'पोटेंशियल ट्रांसफार्मर अनुपात', bn: 'পটেনশিয়াল ট্রান্সফরমার অনুপাত' } }
      ]
    },
    {
      id: 'f-ct-secondary-burden',
      symbol: 'VA_{burden}',
      expression: 'VA_{burden} = I_{sec}^2 \\cdot Z_b = I_{sec}^2 \\cdot \\sqrt{(R_{leads} + R_{meter})^2 + X_{meter}^2}',
      title: {
        en: 'Current Transformer Secondary Burden',
        hi: 'करंट ट्रांसफार्मर सेकेंडरी बर्डन',
        bn: 'কারেন্ট ট্রান্সফরমার সেকেন্ডারি বার্ডেন'
      },
      description: {
        en: 'Apparent power drawn by external secondary circuit wiring and meter coils from the CT.',
        hi: 'CT सेकेंडरी वायरिंग और मीटर कॉइल द्वारा खींची गई कुल आभासी शक्ति (VA)।',
        bn: 'CT এর সেকেন্ডারি ওয়্যারিং ও মিটার কয়েল দ্বারা গৃহীত আপাত ক্ষমতা (VA)।'
      },
      variables: [
        { symbol: 'Z_b', name: { en: 'Total Secondary Loop Burden Impedance (Ω)', hi: 'कुल सेकेंडरी लूप बर्डन प्रतिबाधा (Ω)', bn: 'মোট সেকেন্ডারি লুপ বার্ডেন ইম্পিডেন্স (Ω)' } }
      ]
    }
  ],
  diagrams: [
    {
      id: 'diag-ch14-ct-pt-metering',
      title: {
        en: '3-Phase High-Voltage Metering Circuit with CTs, PTs, and Shorting Blocks',
        hi: 'CT, PT एवं शॉर्टिंग ब्लॉक युक्त 3-फेज हाई-वोल्टेज मीटरिंग परिपथ',
        bn: 'CT, PT ও শর্টিং ব্লক সম্বলিত ৩-ফেজ হাই-ভোল্টেজ মিটারিং সার্কিট'
      },
      caption: {
        en: 'Complete industrial metering schematic showing three CTs in lines A, B, C with safety shorting terminal blocks, three star-connected PTs, and connection to a 3-element electronic revenue meter.',
        hi: 'सेफ्टी शॉर्टिंग ब्लॉक, स्टार PT और 3-तत्व मीटर के साथ संपूर्ण औद्योगिक मीटरिंग आरेख।',
        bn: 'সেফটি শর্টিং ব্লক, স্টার PT এবং ৩-এলিমেন্ট মিটার সহ সম্পূর্ণ শিল্প মিটারিং ডায়াগ্রাম।'
      },
      svgType: 'sch-ch14-ct-pt-metering'
    }
  ],
  sections: [
    {
      id: 'sec-ch14-ct-polarity-dot-convention',
      title: {
        en: 'CT Polarity & Dot Convention: The Hidden Cause of Meter Reversals',
        hi: 'CT ध्रुवीयता एवं डॉट परिपाटी: मीटर के उल्टे चलने का छिपा हुआ कारण',
        bn: 'CT পোলারিটি ও ডট কনভেনশন: মিটার উল্টো ঘোরার পেছনের কারণ'
      },
      content: {
        en: 'Every instrument transformer possesses marked polarity terminals: P1 (H1) and P2 (H2) on the primary; S1 (X1) and S2 (X2) on the secondary. The international dot convention defines instantaneous direction: when primary current enters terminal P1, secondary current instantaneously exits terminal S1 toward the meter.\n\nIf an electrician accidentally installs one CT physically backwards on the primary busbar (entering P2 instead of P1), or reverses S1 and S2 at the meter test switch, that phase\'s current phasor is shifted by exactly 180°! The wattmeter element computes P = V · (-I) · cos(ϕ) = -P. Instead of adding, that phase subtracts from total revenue, resulting in a 66% under-registration error that can persist unnoticed for years!',
        hi: 'प्रत्येक CT में P1/P2 (प्राइमरी) और S1/S2 (सेकेंडरी) टर्मिनल होते हैं। जब करंट P1 में जाता है, तो उसी क्षण S1 से बाहर निकलता है। यदि कोई तार लगाने वाला CT को उल्टा लगा दे या S1-S2 के तार पलट दे, तो उस फेज का करंट 180° घूम जाता है। इससे मीटर उस फेज की बिजली जोड़ने के बजाय घटाने लगता है, जिससे बिजली कंपनी को भारी नुकसान होता है।',
        bn: 'প্রতিটি CT তে P1/P2 (প্রাইমারি) এবং S1/S2 (সেকেন্ডারি) টার্মিনাল থাকে। প্রাইমারিতে কারেন্ট P1 এ ঢুকলে সেকেন্ডারিতে তৎক্ষণাৎ S1 দিয়ে বের হয়। যদি অসাবধানতাবশত কোনো CT উল্টো লাগানো হয় বা S1-S2 উল্টে যায়, তবে ঐ ফেজের কারেন্ট ১৮০° ঘুরে যায়। ফলে মিটারটি ঐ ফেজের বিদ্যুৎ যোগ করার বদলে উল্টো বিয়োগ করতে থাকে!'
      }
    }
  ],
  workedExamples: [
    {
      id: 'we-ch14-l07-01',
      title: {
        en: 'Factory Revenue Billing Calculation with Instrument Transformers',
        hi: 'उपकरण ट्रांसफार्मर के साथ फैक्ट्री बिलिंग गणना',
        bn: 'ইন্সট্রুমেন্ট ট্রান্সফরমার সহ কারখানার বিদ্যুৎ বিল গণনা'
      },
      problem: {
        en: 'A manufacturing plant is supplied from an 11 kV, 3-phase grid. Metering uses three 400/5A CTs and a 3-phase PT with ratio 11,000V / 110V. The electronic revenue meter connected to the secondary registers 1,450 kWh of energy during a 24-hour test period. Calculate: (a) Current transformation ratio CTR, (b) Potential transformation ratio PTR, (c) Overall multiplying factor MF, and (d) Actual primary energy consumed and average primary power.',
        hi: 'एक फैक्ट्री 11 kV ग्रिड से जुड़ी है। इसमें 400/5A CT और 11,000V/110V PT लगे हैं। सेकेंडरी मीटर 24 घंटे में 1,450 kWh दर्ज करता है। ज्ञात करें: (a) CTR, (b) PTR, (c) MF, और (d) वास्तविक ऊर्जा और औसत शक्ति।',
        bn: 'একটি কারখানা ১১ kV গ্রিড থেকে বিদ্যুৎ গ্রহণ করে। সেখানে ৪০০/৫A CT এবং ১১,০০০V/১১০V PT ব্যবহৃত হয়েছে। সেকেন্ডারি মিটার ২৪ ঘণ্টায় ১,৪৫০ kWh বিদ্যুৎ রেকর্ড করে। নির্ণয় করুন: (a) CTR, (b) PTR, (c) MF, এবং (d) প্রকৃত শক্তি ও গড় ক্ষমতা।'
      },
      solutionSteps: [
        {
          stepNumber: 1,
          description: {
            en: 'Calculate CTR and PTR:\nCTR = 400 / 5 = 80.\nPTR = 11,000 / 110 = 100.',
            hi: 'CTR और PTR निकालें: CTR = 400 / 5 = 80, PTR = 11,000 / 110 = 100।',
            bn: 'CTR ও PTR নির্ণয়: CTR = ৪০০ / ৫ = ৮০, PTR = ১১,০০০ / ১১০ = ১০০।'
          }
        },
        {
          stepNumber: 2,
          description: {
            en: 'Calculate overall Multiplying Factor MF:\nMF = CTR × PTR = 80 × 100 = 8,000.',
            hi: 'मीटर गुणन कारक MF = 80 × 100 = 8,000।',
            bn: 'মোট মাল্টিপ্লাইং ফ্যাক্টর MF = ৮০ × ১০০ = ৮,০০০।'
          }
        },
        {
          stepNumber: 3,
          description: {
            en: 'Compute actual primary energy consumed:\nEnergy_primary = MF × Meter_Reading = 8,000 × 1,450 kWh = 11,600,000 kWh = 11.60 GWh (11,600 MWh).',
            hi: 'वास्तविक प्राथमिक ऊर्जा: 8,000 × 1,450 kWh = 11,600,000 kWh = 11.60 GWh।',
            bn: 'প্রকৃত প্রাথমিক বিদ্যুৎ শক্তি: ৮,০০০ × ১,৪৫০ kWh = ১১,৬০০,০০০ kWh = ১১.৬০ GWh।'
          }
        },
        {
          stepNumber: 4,
          description: {
            en: 'Compute average primary active power over 24 hours:\nP_avg = Energy / time = 11,600,000 kWh / 24 h = 483,333 kW ≈ 483.33 MW.',
            hi: 'औसत प्राथमिक सक्रिय शक्ति: 11,600,000 / 24 = 483,333 kW = 483.33 MW।',
            bn: 'গড় প্রাথমিক সক্রিয় ক্ষমতা: ১১,৬০০,০০০ / ২৪ = ৪৮৩,৩৩৩ kW = ৪৮৩.৩৩ MW।'
          }
        }
      ]
    },
    {
      id: 'we-ch14-l07-02',
      title: {
        en: 'CT Secondary Burden Calculation & Open-Circuit Safety Hazard Analysis',
        hi: 'CT सेकेंडरी बर्डन गणना एवं ओपन-सर्किट सुरक्षा जोखिम विश्लेषण',
        bn: 'CT সেকেন্ডারি বার্ডেন গণনা ও ওপেন-সার্কিট নিরাপত্তা ঝুঁকি বিশ্লেষণ'
      },
      problem: {
        en: 'A 1000/5 A metering CT rated at 15 VA burden is connected to a multifunction power meter (impedance Z_meter = 0.15 Ω) through copper control cables with a total loop lead resistance R_lead = 0.35 Ω. The internal secondary winding resistance is R_ct = 0.10 Ω. (a) Calculate the total operating secondary burden in VA at the 5 A rated secondary current and verify compliance. (b) Explain the physics of why opening an energized CT secondary induces lethal kilovolt spikes and state the mandatory safety procedure before meter servicing.',
        hi: 'एक 1000/5 A, 15 VA रेटेड CT एक पावर मीटर (Z = 0.15 Ω) से 0.35 Ω लूप प्रतिरोध वाले तारों द्वारा जुड़ी है। वाइंडिंग प्रतिरोध R_ct = 0.10 Ω है। (a) 5 A रेटेड धारा पर कुल बर्डन (VA) निकालें। (b) समझाएं कि चालू CT की सेकेंडरी खोलने पर जानलेवा वोल्टेज क्यों उत्पन्न होता है और मीटर बदलने की अनिवार्य सुरक्षा प्रक्रिया क्या है।',
        bn: 'একটি ১০০০/৫ A, ১৫ VA রেটিংযুক্ত CT একটি পাওয়ার মিটারের (Z = ০.১৫ Ω) সাথে ০.৩৫ Ω লুপ রোধের তার দিয়ে যুক্ত। অভ্যন্তরীণ ওয়াইন্ডিং রোধ R_ct = ০.১০ Ω। (a) ৫ A রেটেড কারেন্টে মোট সেকেন্ডারি বার্ডেন (VA) নির্ণয় করুন। (b) সচল CT সেকেন্ডারি বিচ্ছিন্ন করলে কেন মারাত্মক কিলোভোল্ট স্পাইক তৈরি হয় এবং সার্ভিসিংয়ের ক্ষেত্রে বাধ্যতামূলক সুরক্ষা পদক্ষেপ কী তা ব্যাখ্যা করুন।'
      },
      solutionSteps: [
        {
          stepNumber: 1,
          description: {
            en: 'Calculate external circuit burden impedance:\nZ_ext = Z_meter + R_lead = 0.15 + 0.35 = 0.50 Ω.',
            hi: 'बाहरी बर्डन प्रतिबाधा: Z_ext = 0.15 + 0.35 = 0.50 Ω।',
            bn: 'বহিঃস্থ বার্ডেন ইম্পিডেন্স: Z_ext = ০.১৫ + ০.৩৫ = ০.৫০ Ω।'
          }
        },
        {
          stepNumber: 2,
          description: {
            en: 'Calculate operating external VA burden at rated secondary current (I_sec = 5 A):\nVA_ext = I_sec² × Z_ext = (5)² × 0.50 = 25 × 0.50 = 12.5 VA.\nSince 12.5 VA < 15 VA (rated nameplate capability), the CT operates within its high-accuracy linear regime without magnetic saturation.',
            hi: 'रेटेड 5 A धारा पर बर्डन: VA = 5² × 0.50 = 12.5 VA। चूंकि 12.5 VA < 15 VA, अतः CT अपनी शुद्धता बनाए रखेगा।',
            bn: 'রেটেড ৫ A কারেন্টে বার্ডেন: VA = ৫² × ০.৫০ = ১২.৫ VA। যেহেতু ১২.৫ VA < ১৫ VA, তাই CT নির্ভুলভাবে কাজ করবে।'
          }
        },
        {
          stepNumber: 3,
          description: {
            en: 'Physics of Open-Circuit Hazard: Under normal closed conditions, secondary current produces a counter-MMF (N_s·I_s) that almost completely cancels the massive primary MMF (N_p·I_p), leaving only a tiny net magnetizing flux in the core. If the secondary loop is opened while primary current flows, the opposing secondary MMF drops instantly to zero. The entire primary MMF now acts as magnetizing current, driving the steel core into extreme saturation. The flux collapses and reverses with near-infinite steepness (dΦ/dt -> huge), inducing sharp voltage spikes of 1,000 V to 4,000 V across the open terminals.',
            hi: 'ओपन-सर्किट का भौतिक कारण: सामान्य स्थिति में सेकेंडरी MMF प्राथमिक MMF को लगभग पूरी तरह निरस्त कर देता है। सेकेंडरी खुलते ही पूरा प्राथमिक करंट कोर को अत्यधिक संतृप्त (सैचुरेट) कर देता है। फ्लक्स तेजी से बदलने से टर्मिनलों पर 1000 V से 4000 V के घातक वोल्टेज स्पाइक पैदा होते हैं।',
            bn: 'ওপেন-সার্কিটের কারণ: স্বাভাবিক অবস্থায় সেকেন্ডারি MMF প্রাথমিক MMF-কে প্রায় নিষ্ক্রিয় রাখে। সেকেন্ডারি তার খুললেই পুরো প্রাথমিক কারেন্ট কোরকে চরম স্যাচুরেশনে নিয়ে যায়। ফলে dΦ/dt এর মান অতি তীব্র হয়ে টার্মিনালে ১,০০০ V থেকে ৪,০০০ V এর বিপজ্জনক ভোল্টেজ স্পাইক তৈরি করে।'
          }
        },
        {
          stepNumber: 4,
          description: {
            en: 'MANDATORY LIFE-SAFETY PROCEDURE: An energized CT secondary must NEVER be opened or disconnected casually. Technicians must ALWAYS insert dedicated CT test-block shorting pins (or flip the shorting knife switch) to solidly short-circuit the CT secondary terminals BEFORE removing any ammeter, wattmeter, or protection relay wiring.',
            hi: 'अनिवार्य सुरक्षा नियम: चालू CT की सेकेंडरी को कभी भी यूं ही न खोलें। मीटर या रिले हटाने से पहले CT टर्मिनल ब्लॉक पर शॉर्टिंग पिन या स्विच लगाकर सेकेंडरी को हमेशा शॉर्ट-सर्किट करें।',
            bn: 'বাধ্যতামূলক জীবন-সুরক্ষা নিয়ম: সচল CT এর সেকেন্ডারি কখনো খোলা যাবে না। মিটার বা রিলে খোলার পূর্বে CT টার্মিনাল টেস্ট ব্লকে শর্টিং পিন বা সুইচ লাগিয়ে সেকেন্ডারি টার্মিনালকে শক্তভাবে শর্ট-সার্কিট করতে হবে।'
          }
        }
      ]
    }
  ],
  importantPoints: {
    en: [
      'Current transformers step down high currents to standardized 5A or 1A secondary levels.',
      'Potential transformers step down high line voltages to standardized 110V or 100V secondary levels.',
      'Overall Meter Multiplying Factor is MF = CTR × PTR; primary power = MF × secondary power.',
      'NEVER open-circuit a live CT secondary winding: lethal kilovolts will develop across the open terminals!'
    ],
    hi: [
      'CT उच्च धाराओं को घटाकर सुरक्षित 5A या 1A सेकेंडरी धारा में बदलता है।',
      'PT उच्च लाइन वोल्टेज को घटाकर सुरक्षित 110V या 100V सेकेंडरी वोल्टेज में बदलता है।',
      'समग्र मीटर गुणन कारक MF = CTR × PTR होता है; वास्तविक शक्ति = MF × मीटर शक्ति।',
      'चालू CT की सेकेंडरी को कभी खुला (ओपन) न छोड़ें: टर्मिनलों पर जानलेवा हजारों वोल्ट उत्पन्न होते हैं!'
    ],
    bn: [
      'CT উচ্চ কারেন্টকে নিরাপদ ৫A বা ১A সেকেন্ডারি মানে কমিয়ে আনে।',
      'PT উচ্চ লাইন ভোল্টেজকে নিরাপদ ১১০V বা ১০০V সেকেন্ডারি ভোল্টেজে রূপান্তর করে।',
      'মোট মিটার মাল্টিপ্লাইং ফ্যাক্টর MF = CTR × PTR; মূল পাওয়ার = MF × সেকেন্ডারি পাওয়ার।',
      'সচল CT এর সেকেন্ডারি ওয়াইন্ডিং কখনো খোলা রাখবেন না: টার্মিনালে হাজার হাজার প্রাণঘাতী ভোল্ট সৃষ্টি হয়!'
    ]
  },
  commonMistakes: {
    en: [
      'Mistake: Disconnecting an ammeter or energy meter without first sliding the shorting links closed on the CT test switch. Correction: Opening the secondary creates destructive kilovolt arc flashes.',
      'Mistake: Installing a CT with reversed primary polarity (P2 facing source instead of P1). Correction: This creates a 180° phase inversion, causing the meter element to subtract energy instead of adding it.',
      'Mistake: Overloading the CT secondary with excessively long, thin control wiring that exceeds the rated VA burden, resulting in magnetic core saturation and gross ratio errors.'
    ],
    hi: [
      'त्रुटि: CT टेस्ट ब्लॉक पर शॉर्टिंग लिंक लगाए बिना मीटर के तार खोलना। सुधार: सेकेंडरी खुलने पर जानलेवा स्पार्क और आग लग सकती है।',
      'त्रुटि: CT को उल्टा लगाना (P1 की जगह P2 स्रोत की ओर)। सुधार: इससे फेज 180° घूम जाता है और मीटर बिजली घटाने लगता है।',
      'त्रुटि: बहुत पतले और लंबे तार लगाकर CT के VA बर्डन को पार कर जाना। सुधार: अधिक बर्डन से CT कोर संतृप्त हो जाता है और रीडिंग गलत आती है।'
    ],
    bn: [
      'ভুল: CT টেস্ট ব্লকে শর্টিং লিংক বন্ধ না করেই মিটারের তার খুলে ফেলা। সংশোধন: সেকেন্ডারি ওপেন হলে মারাত্মক স্পার্ক ও অগ্নিকাণ্ড ঘটবে।',
      'ভুল: CT উল্টোভাবে স্থাপন করা (P1 এর বদলে P2 সোর্সের দিকে)। সংশোধন: এতে কারেন্ট ১৮০° ঘুরে যায় এবং মিটার বিদ্যুৎ বিল বিয়োগ করতে থাকে।',
      'ভুল: অতিরিক্ত চিকন ও লম্বা তার ব্যবহার করে CT এর অনুমোদিত VA বার্ডেন অতিক্রম করা। সংশোধন: অতিরিক্ত বার্ডেনে কোর স্যাচুরেট হয়ে পাঠ ভুল আসে।'
    ]
  },
  keyTakeaways: {
    en: [
      'Instrument transformers isolate sensitive low-voltage digital meters from lethal transmission and distribution voltages.',
      'The secondary of an energized current transformer must always remain closed through low-impedance meters or shorting bars.',
      'Accuracy classes (e.g., Class 0.2S) guarantee meter precision within ±0.2% error down to 1% of rated current for utility revenue.'
    ],
    hi: [
      'उपकरण ट्रांसफार्मर संवेदनशील कम-वोल्टेज मीटरों को घातक हाई-वोल्टेज लाइनों से पूरी तरह अलग (आइसोलेट) रखते हैं।',
      'चालू CT की सेकेंडरी हमेशा कम-प्रतिबाधा मीटर या शॉर्टिंग बार के माध्यम से बंद रहनी चाहिए।',
      'Class 0.2S सटीकता क्लास सुनिश्चित करती है कि मीटरिंग में 0.2% से कम त्रुटि हो।'
    ],
    bn: [
      'ইন্সট্রুমেন্ট ট্রান্সফরমারগুলি সংবেদনশীল ডিজিটাল মিটারকে বিপজ্জনক উচ্চ-ভোল্টেজ লাইন থেকে সম্পূর্ণ বিচ্ছিন্ন রাখে।',
      'সচল CT এর সেকেন্ডারি সর্বদা লো-ইম্পিডেন্স মিটার বা শর্টিং বারের মাধ্যমে বন্ধ রাখা অপরিহার্য।',
      'Class 0.2S এর মতো যথার্থতা মানদণ্ড নিশ্চিত করে যে রাজস্ব মিটারিংয়ে ত্রুটি ±০.২% এর মধ্যে সীমাবদ্ধ থাকে।'
    ]
  },
  practiceQuestions: [
    {
      id: 'pq-ch14-l07-01',
      question: {
        en: 'A 200/5A CT feeds a secondary burden consisting of a meter coil (0.15 Ω) and interconnecting lead wires (0.25 Ω). Calculate the operating VA burden at rated 5A current and state whether a 10 VA rated CT is adequate.',
        hi: 'एक 200/5A CT 0.15 Ω मीटर कॉइल और 0.25 Ω तार के बर्डन से जुड़ा है। 5A पर VA बर्डन निकालें और बताएं कि क्या 10 VA का CT पर्याप्त है।',
        bn: 'একটি ২০০/৫A CT এর সাথে ০.১৫ Ω মিটার কয়েল এবং ০.২৫ Ω তারের বার্ডেন যুক্ত। ৫A কারেন্টে VA বার্ডেন কত এবং ১০ VA এর CT যথেষ্ট কিনা জানান।'
      },
      hint: {
        en: 'Total R = 0.15 + 0.25 = 0.40 Ω. VA = I² · R = 5² · 0.40 = 25 · 0.40 = 10.0 VA. A 10 VA CT operates right at its limit (adequate, but 15 VA preferred for safety margin).',
        hi: 'कुल R = 0.40 Ω। VA = 5² · 0.40 = 10.0 VA। 10 VA का CT ठीक अपनी सीमा पर है, लेकिन 15 VA बेहतर होगा।',
        bn: 'মোট R = ০.৪০ Ω। VA = ৫² · ০.৪০ = ১০.০ VA। ১০ VA এর CT ঠিক সীমার মধ্যে কাজ করবে, তবে ১৫ VA ব্যবহার করা উত্তম।'
      }
    },
    {
      id: 'pq-ch14-l07-02',
      question: {
        en: 'Explain why a Potential Transformer secondary must NEVER be short-circuited, contrasting this with the Current Transformer rule.',
        hi: 'पोटेंशियल ट्रांसफार्मर (PT) की सेकेंडरी को कभी शॉर्ट-सर्किट क्यों नहीं करना चाहिए? इसकी तुलना CT के नियम से करें।',
        bn: 'পটেনশিয়াল ট্রান্সফরমারের (PT) সেকেন্ডারি কখনো শর্ট-সার্কিট করা যাবে না কেন? CT এর নিয়মের সাথে এর তুলনা করুন।'
      },
      hint: {
        en: 'A PT is a parallel voltage source; shorting it draws massive fault current (I = V/Z), destroying windings. A CT is a series current source; opening it causes infinite voltage rise.',
        hi: 'PT समानांतर वोल्टेज स्रोत है; शॉर्ट करने पर भारी फॉल्ट करंट बहता है और वह जल जाता है। CT सीरीज करंट स्रोत है; ओपन करने पर अनंत वोल्टेज बनता है।',
        bn: 'PT হলো সমান্তরাল ভোল্টেজ সোর্স; শর্ট করলে প্রচণ্ড ফল্ট কারেন্টে এটি পুড়ে যায়। অন্যদিকে CT হলো সিরিজ কারেন্ট সোর্স; ওপেন করলে এতে মারাত্মক অতিরিক্ত ভোল্টেজ তৈরি হয়।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch14-l07-01',
      question: {
        en: 'Why is it strictly forbidden to open-circuit the secondary terminals of an energized Current Transformer (CT)?',
        hi: 'चालू करंट ट्रांसफार्मर (CT) के सेकेंडरी टर्मिनलों को खुला (ओपन) छोड़ना सख्त वर्जित क्यों है?',
        bn: 'সচল কারেন্ট ট্রান্সফরমারের (CT) সেকেন্ডারি টার্মিনাল খোলা রাখা কঠোরভাবে নিষিদ্ধ কেন?'
      },
      options: [
        { en: 'The opposing secondary demagnetizing flux vanishes, driving the core into deep saturation and generating lethal peak voltages of thousands of volts across the terminals', hi: 'विपरीत डिमैग्नेटाइजिंग फ्लक्स खत्म हो जाता है, जिससे कोर संतृप्त हो जाता है और टर्मिनलों पर कई हजार वोल्ट का जानलेवा वोल्टेज बनता है', bn: 'বিপরীত ডিম্যাগনেটাইজিং ফ্লাক্স বিলুপ্ত হওয়ায় কোর চরম স্যাচুরেশনে চলে যায় এবং টার্মিনালে হাজার হাজার ভোল্টের প্রাণঘাতী ভোল্টেজ উৎপন্ন হয়' },
        { en: 'The transformer oil immediately turns into solid ice', hi: 'ट्रांसफार्मर का तेल बर्फ बन जाता है', bn: 'ট্রান্সফরমারের তেল বরফে পরিণত হয়' },
        { en: 'The primary line current drops to exactly zero amperes', hi: 'प्राइमरी करंट शून्य हो जाता है', bn: 'প্রাইমারি কারেন্ট শূন্য হয়ে যায়' },
        { en: 'The grid frequency increases to 500 Hz', hi: 'ग्रिड आवृत्ति 500 Hz हो जाती है', bn: 'গ্রিড ফ্রিকোয়েন্সি ৫০০ Hz এ বৃদ্ধি পায়' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Without secondary current opposing the primary ampere-turns, the entire primary current acts as magnetizing current. The steep flux changes at zero-crossings induce thousands of lethal peak volts, destroying insulation and creating deadly flashover hazards.',
        hi: 'सेकेंडरी करंट न होने पर पूरा प्राइमरी करंट मैग्नेटाइजिंग करंट बन जाता है। फ्लक्स के तेजी से बदलने (dΦ/dt) से टर्मिनलों पर जानलेवा हाई वोल्टेज बनता है।',
        bn: 'সেকেন্ডারি কারেন্ট না থাকায় সম্পূর্ণ প্রাইমারি কারেন্ট ম্যাগনেটাইজিং কারেন্টে রূপ নেয়। তীব্র dΦ/dt এর ফলে সেকেন্ডারিতে কয়েক হাজার ভোল্টের মারাত্মক আর্ক ও শক তৈরি হয়।'
      }
    },
    {
      id: 'mcq-ch14-l07-02',
      question: {
        en: 'What is the overall Multiplying Factor (MF) for a revenue metering installation utilizing 600/5A CTs and 33,000V/110V PTs?',
        hi: '600/5A CT और 33,000V/110V PT वाले मीटरिंग प्रतिष्ठान का समग्र गुणन कारक (MF) क्या है?',
        bn: '৬০০/৫A CT এবং ৩৩,০০০V/১১০V PT বিশিষ্ট একটি মিটারিং ব্যবস্থার মোট মাল্টিপ্লাইং ফ্যাক্টর (MF) কত?'
      },
      options: [
        { en: '36,000', hi: '36,000', bn: '৩৬,০০০' },
        { en: '120', hi: '120', bn: '১২০' },
        { en: '300', hi: '300', bn: '৩০০' },
        { en: '3,600', hi: '3,600', bn: '৩,৬০০' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'CTR = 600 / 5 = 120. PTR = 33,000 / 110 = 300. Overall MF = CTR × PTR = 120 × 300 = 36,000.',
        hi: 'CTR = 600 / 5 = 120, PTR = 33,000 / 110 = 300। कुल MF = 120 × 300 = 36,000।',
        bn: 'CTR = ৬০০ / ৫ = ১২০, PTR = ৩৩,০০০ / ১১০ = ৩০০। মোট MF = ১২০ × ৩০০ = ৩৬,০০০।'
      }
    },
    {
      id: 'mcq-ch14-l07-03',
      question: {
        en: 'What occurs if one Current Transformer is accidentally installed backwards on a three-phase busbar (primary enters P2 instead of P1)?',
        hi: 'यदि 3-फेज बसबार पर एक CT गलती से उल्टा लगा दिया जाए (प्राइमरी P1 के बजाय P2 में प्रवेश करे), तो क्या होगा?',
        bn: 'থ্রি-ফেজ বাসবারে যদি একটি CT ভুলবশত উল্টো লাগানো হয় (প্রাইমারি P1 এর বদলে P2 তে প্রবেশ করে), তবে কী ঘটবে?'
      },
      options: [
        { en: 'That phase current is phase-shifted by 180°, causing its wattmeter element to register negative power and subtract energy from the billing total', hi: 'वह फेज धारा 180° घूम जाती है, जिससे वह तत्व ऋणात्मक शक्ति दर्ज करता है और कुल बिलिंग में से ऊर्जा घट जाती है', bn: 'ঐ ফেজের কারেন্ট ১৮০° ফেজ শিফট হয়, ফলে মিটার এলিমেন্টটি ঋণাত্মক ক্ষমতা রেকর্ড করে এবং মোট বিল থেকে বিদ্যুৎ বিয়োগ করে' },
        { en: 'The transformer immediately catches fire', hi: 'ट्रांसफार्मर में तुरंत आग लग जाती है', bn: 'ট্রান্সফরমার সাথে সাথে জ্বলে ওঠে' },
        { en: 'The utility grid trips on overfrequency', hi: 'ग्रिड ओवरफ्रीक्वेंसी पर ट्रिप हो जाता है', bn: 'গ্রিড অতিরিক্ত ফ্রিকোয়েন্সিতে ট্রিপ করে' },
        { en: 'The voltage on that phase doubles to 800 V', hi: 'उस फेज का वोल्टेज दोगुना होकर 800 V हो जाता है', bn: 'ঐ ফেজের ভোল্টেজ দ্বিগুণ হয়ে ৮০০ V হয়' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Reversing CT polarity inverts the secondary current direction (180° shift). The meter element computes P = V · (-I) · cos(ϕ) = -P, subtracting that phase\'s consumption from total kilowatt-hours.',
        hi: 'CT की दिशा उल्टी होने से सेकेंडरी करंट 180° घूम जाता है। इससे मीटर जोड़ने के बजाय उस फेज की खपत को कुल बिजली में से घटाने लगता है।',
        bn: 'CT এর দিক উল্টে গেলে সেকেন্ডারি কারেন্ট ১৮০° ঘুরে যায়। ফলে মিটারটি ঐ ফেজের বিদ্যুৎ খরচের মান যোগ না করে মোট বিল থেকে বিয়োগ করতে থাকে।'
      }
    },
    {
      id: 'mcq-ch14-l07-04',
      question: {
        en: 'What is the "Burden" of an instrument transformer?',
        hi: 'उपकरण ट्रांसफार्मर का "बर्डन" क्या होता है?',
        bn: 'ইন্সট্রুমেন্ট ট্রান্সফরমারের "বার্ডেন" বলতে কী বোঝায়?'
      },
      options: [
        { en: 'The total impedance or volt-ampere (VA) load connected across the secondary winding terminals, including meters and cabling', hi: 'सेकेंडरी वाइंडिंग टर्मिनलों पर जुड़ा कुल प्रतिबाधा या वोल्ट-एम्पीयर (VA) भार, जिसमें मीटर और तार शामिल हैं', bn: 'সেকেন্ডারি ওয়াইন্ডিং টার্মিনালে সংযুক্ত মোট ইম্পিডেন্স বা ভোল্ট-অ্যাম্পিয়ার (VA) লোড, যার মধ্যে মিটার ও ক্যাবল অন্তর্ভুক্ত' },
        { en: 'The physical weight of the porcelain transformer bushing', hi: 'ट्रांसफार्मर बुशिंग का भौतिक वजन', bn: 'বুশিংয়ের প্রকৃত ওজন' },
        { en: 'The mechanical tension of the overhead transmission line', hi: 'ओवरहेड ट्रांसमिशन लाइन का यांत्रिक तनाव', bn: 'ট্রান্সমিশন লাইনের যান্ত্রিক টান' },
        { en: 'The percentage of harmonic distortion in the system', hi: 'सिस्टम में हार्मोनिक विरूपण का प्रतिशत', bn: 'সিস্টেমে হারমোনিক বিকৃতির শতকরা হার' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Burden is the electrical load imposed on the secondary winding, expressed in ohms of impedance (Zb) or in volt-amperes (VA) at rated secondary current.',
        hi: 'बर्डन सेकेंडरी वाइंडिंग पर लगा विद्युत भार है, जिसे ओम (Zb) या रेटेड करंट पर वोल्ट-एम्पीयर (VA) में व्यक्त किया जाता है।',
        bn: 'বার্ডেন হলো সেকেন্ডারি ওয়াইন্ডিংয়ে সংযুক্ত বৈদ্যুতিক লোড, যা ওহম (Zb) বা ভোল্ট-অ্যাম্পিয়ারে (VA) প্রকাশ করা হয়।'
      }
    },
    {
      id: 'mcq-ch14-l07-05',
      question: {
        en: 'What happens if the secondary burden connected to a Current Transformer exceeds its rated nameplate VA capability?',
        hi: 'यदि CT की सेकेंडरी से जुड़ा बर्डन उसकी रेटेड VA क्षमता से अधिक हो जाए, तो क्या होगा?',
        bn: 'যদি CT এর সেকেন্ডারিতে যুক্ত বার্ডেন তার অনুমোদিত VA ক্ষমতার চেয়ে বেশি হয়, তবে কী ঘটবে?'
      },
      options: [
        { en: 'The core magnetic flux density rises into saturation, causing excessive ratio error (under-reading current) and significant phase angle displacement', hi: 'कोर फ्लक्स संतृप्त हो जाता है, जिससे गंभीर अनुपात त्रुटि (करंट कम पढ़ना) और बड़ा फेज कोण विस्थापन होता है', bn: 'কোর ফ্লাক্স স্যাচুরেশনে পৌঁছায়, যার ফলে মারাত্মক রেশিও ত্রুটি (কম কারেন্ট প্রদর্শন) এবং ফেজ অ্যাঙ্গেল বিচ্যুতি ঘটে' },
        { en: 'The CT secondary voltage drops to exactly 0 V permanently', hi: 'सेकेंडरी वोल्टेज स्थायी रूप से 0 V हो जाता है', bn: 'সেকেন্ডারি ভোল্টেজ চিরতরে ০ V হয়ে যায়' },
        { en: 'The primary current increases by a factor of 10', hi: 'प्राइमरी करंट 10 गुना बढ़ जाता है', bn: 'প্রাইমারি কারেন্ট ১০ গুণ বৃদ্ধি পায়' },
        { en: 'The power factor of the main grid collapses to zero', hi: 'ग्रिड का पावर फैक्टर शून्य हो जाता है', bn: 'গ্রিডের পাওয়ার ফ্যাক্টর শূন্যে নেমে যায়' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Excessive burden requires higher secondary voltage to drive current through the load. This demands higher core flux density, pushing the core into magnetic saturation and degrading metering accuracy.',
        hi: 'अधिक बर्डन के कारण सेकेंडरी में अधिक वोल्टेज की आवश्यकता होती है, जिससे कोर संतृप्त हो जाता है और मीटर करंट को कम मापने लगता है।',
        bn: 'অতিরিক্ত বার্ডেনের কারণে সেকেন্ডারিতে বেশি ভোল্টেজের প্রয়োজন হয়, যা কোরকে স্যাচুরেশনের দিকে ঠেলে দেয় এবং মিটার কম রিডিং প্রদর্শন করে।'
      }
    },
    {
      id: 'mcq-ch14-l07-06',
      question: {
        en: 'How does the operating condition of a Potential Transformer (PT) compare to a Current Transformer (CT)?',
        hi: 'पोटेंशियल ट्रांसफार्मर (PT) की कार्यशील स्थिति की तुलना करंट ट्रांसफार्मर (CT) से कैसे की जाती है?',
        bn: 'পটেনশিয়াল ট্রান্সফরমারের (PT) কাজের ধরন কারেন্ট ট্রান্সফরমারের (CT) সাথে কীভাবে তুলনীয়?'
      },
      options: [
        { en: 'A PT operates near open-circuit into high-impedance voltage coils, whereas a CT operates near short-circuit into low-impedance current coils', hi: 'PT उच्च प्रतिबाधा वाले कॉइल के साथ लगभग ओपन-सर्किट पर काम करता है, जबकि CT कम प्रतिबाधा कॉइल के साथ लगभग शॉर्ट-सर्किट पर काम करता है', bn: 'PT উচ্চ ইম্পিডেন্স কয়েলের কারণে প্রায় ওপেন-সার্কিট অবস্থায় চলে, অন্যদিকে CT কম ইম্পিডেন্স কয়েলের কারণে প্রায় শর্ট-সার্কিট অবস্থায় কাজ করে' },
        { en: 'Both operate identically under short-circuit conditions', hi: 'दोनों शॉर्ट-सर्किट पर काम करते हैं', bn: 'উভয়ই শর্ট-সার্কিট অবস্থায় কাজ করে' },
        { en: 'Both operate identically under open-circuit conditions', hi: 'दोनों ओपन-सर्किट पर काम करते हैं', bn: 'উভয়ই ওপেন-সার্কিট অবস্থায় চলে' },
        { en: 'A PT is placed in series with the line and a CT in parallel', hi: 'PT सीरीज में और CT समानांतर में लगता है', bn: 'PT সিরিজে এবং CT সমান্তরালে যুক্ত থাকে' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'A PT is a parallel device that steps down voltage and operates into high impedance (near open-circuit). A CT is a series device that steps down current and operates into low impedance (near short-circuit).',
        hi: 'PT एक समानांतर उपकरण है जो वोल्टेज घटाता है और खुले परिपथ जैसा काम करता है। CT एक सीरीज उपकरण है जो धारा घटाता है और शॉर्ट परिपथ जैसा काम करता है।',
        bn: 'PT একটি সমান্তরাল ডিভাইস যা ভোল্টেজ কমায় এবং ওপেন-সার্কিটের মতো চলে। CT একটি সিরিজ ডিভাইস যা কারেন্ট কমায় এবং শর্ট-সার্কিটের মতো কাজ করে।'
      }
    },
    {
      id: 'mcq-ch14-l07-07',
      question: {
        en: 'What is the purpose of CT test shorting blocks installed between instrument transformers and digital revenue meters?',
        hi: 'उपकरण ट्रांसफार्मर और डिजिटल राजस्व मीटर के बीच लगे CT टेस्ट शॉर्टिंग ब्लॉक का क्या उद्देश्य है?',
        bn: 'ইন্সট্রুমেন্ট ট্রান্সফরমার এবং ডিজিটাল মিটারের মাঝে CT টেস্ট শর্টিং ব্লক বসানোর উদ্দেশ্য কী?'
      },
      options: [
        { en: 'To safely short-circuit the CT secondary windings before disconnecting the meter for calibration or replacement without interrupting primary service', hi: 'प्राइमरी सेवा बाधित किए बिना मीटर बदलने या जांचने से पहले CT सेकेंडरी को सुरक्षित रूप से शॉर्ट-सर्किट करना', bn: 'প্রাইমারি লাইন চালু রেখেই মিটার পরিবর্তন বা ক্যালিব্রেশনের পূর্বে CT সেকেন্ডারিকে নিরাপদে শর্ট-সার্কিট করে নেওয়া' },
        { en: 'To boost the grid frequency during peak hours', hi: 'पीक घंटों में आवृत्ति बढ़ाना', bn: 'পিক আওয়ারের ফ্রিকোয়েন্সি বৃদ্ধি করা' },
        { en: 'To convert alternating current into high-voltage direct current', hi: 'एसी को डीसी में बदलना', bn: 'এসি কে ডিসিতে রূপান্তর করা' },
        { en: 'To trip the substation breaker during lightning storms', hi: 'तूफान में ब्रेकर ट्रिप करना', bn: 'বজ্রপাতের সময় ব্রেকার ট্রিপ করানো' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Test blocks allow field engineers to insert shorting pins or slide links across the CT secondary, ensuring a closed current loop so the meter can be removed without open-circuiting the CT.',
        hi: 'टेस्ट ब्लॉक इंजीनियरों को CT सेकेंडरी को शॉर्ट करने की सुविधा देते हैं, जिससे मीटर को बिना किसी खतरे के आसानी से हटाया जा सके।',
        bn: 'টেস্ট ব্লক প্রকৌশলীদের CT সেকেন্ডারি শর্ট করার সুযোগ দেয়, ফলে কোনো ঝুঁকি ছাড়াই নিরাপদে মিটার খোলা ও পরীক্ষা করা সম্ভব হয়।'
      }
    },
    {
      id: 'mcq-ch14-l07-08',
      question: {
        en: 'A digital meter on an 11 kV line with 200/5A CTs and 11,000/110V PTs reads 5.0 A secondary current and 110 V secondary voltage at 0.866 lagging power factor. What is the actual primary real power?',
        hi: '200/5A CT और 11,000/110V PT पर एक डिजिटल मीटर 5A, 110V और 0.866 लैगिंग PF पढ़ता है। वास्तविक प्राइमरी शक्ति क्या है?',
        bn: '২০০/৫A CT এবং ১১,০০০/১১০V PT সহ একটি ডিজিটাল মিটারে ৫A কারেন্ট, ১১০V ভোল্টেজ এবং ০.৮৬৬ ল্যাগিং PF দেখাচ্ছে। মূল প্রাইমারি সক্রিয় ক্ষমতা কত?'
      },
      options: [
        { en: '3,300 kW (3.3 MW)', hi: '3,300 kW (3.3 MW)', bn: '৩,৩০০ kW (৩.৩ MW)' },
        { en: '825 W', hi: '825 W', bn: '৮২৫ W' },
        { en: '4,000 kW', hi: '4,000 kW', bn: '৪,০০০ kW' },
        { en: '550 kW', hi: '550 kW', bn: '৫৫০ kW' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'CTR = 200/5 = 40. PTR = 11,000/110 = 100. Overall MF = 40 × 100 = 4,000. Secondary 3-phase power = √3 × 110 × 5 × 0.866 = 825 W. Primary power = 4,000 × 825 W = 3,300,000 W = 3.3 MW (or √3 × 11,000 × 200 × 0.866 = 3.3 MW).',
        hi: 'MF = 40 × 100 = 4,000। सेकेंडरी शक्ति = √3 × 110 × 5 × 0.866 = 825 W। प्राइमरी शक्ति = 4,000 × 825 W = 3,300 kW = 3.3 MW।',
        bn: 'MF = ৪০ × ১০০ = ৪,০০০। সেকেন্ডারি থ্রি-ফেজ ক্ষমতা = √3 × ১১০ × ৫ × ০.৮৬৬ = ৮২৫ W। মূল প্রাইমারি ক্ষমতা = ৪,০০০ × ৮২৫ W = ৩,৩০০ kW = ৩.৩ MW।'
      }
    }
  ]
};

export const LESSON_INSTRUMENT_TRANSFORMERS_CT_PT_METERING = LESSON_CT_PT_METERING;
