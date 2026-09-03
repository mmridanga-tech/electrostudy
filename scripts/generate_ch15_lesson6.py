# -*- coding: utf-8 -*-
lesson6_code = '''import { Lesson } from '../types';

export const LESSON_RCCB_ELCB_CONCEPT: Lesson = {
  id: 'lsn-ch15-rccb-elcb-concept',
  topicId: 'tp-rccb-elcb-concept',
  chapterId: 'ch-electrical-safety',
  order: 6,
  title: {
    en: 'RCCB/ELCB — Basic Concept',
    hi: 'RCCB/ELCB — मूल अवधारणा',
    bn: 'আরসিসিবি/ইএলসিবি (RCCB/ELCB) — মৌলিক ধারণা'
  },
  description: {
    en: 'Principles and operation of Residual Current Circuit Breakers (RCCB) and Earth Leakage Circuit Breakers (ELCB): Core Balance Current Transformer (CBCT) flux cancellation, differential residual trip threshold (IΔn), obsolescence of Voltage-ELCBs vs superiority of Current-RCCBs, human life protection (30 mA) vs fire protection (300 mA), and test push-button mechanics.',
    hi: 'अवशिष्ट धारा सर्किट ब्रेकर (RCCB) और अर्थ लीकेज सर्किट ब्रेकर (ELCB) के सिद्धांत और संचालन: कोर बैलेंस करंट ट्रांसफॉर्मर (CBCT) फ्लक्स निरस्तीकरण, अवशिष्ट ट्रिप सीमा (IΔn), वोल्टेज-ELCB का अप्रचलन बनाम करंट-RCCB की श्रेष्ठता, मानव जीवन सुरक्षा (30 mA) बनाम अग्नि सुरक्षा (300 mA), और परीक्षण बटन की कार्यप्रणाली।',
    bn: 'রেসিডুয়াল কারেন্ট সার্কিট ব্রেকার (RCCB) ও আর্থ লিকেজ সার্কিট ব্রেকারের (ELCB) কার্যপদ্ধতি: কোর ব্যালেন্স কারেন্ট ট্রান্সফরমার (CBCT) ফ্লাক্স সাম্যাবস্থা, ডিফারেনশিয়াল লিকেজ কারেন্ট সীমা (IΔn), ভোল্টেজ-ইএলসিবির অকার্যকারিতা বনাম কারেন্ট-আরসিসিবির কার্যকারিতা, মানব জীবন রক্ষা (৩০ mA) বনাম অগ্নি প্রতিরোধ (৩০০ mA), এবং টেস্ট পুশ-বাটনের অভ্যন্তরীণ কৌশল।'
  },
  estimatedMinutes: 40,
  easyExplanation: {
    en: 'While fuses and MCBs protect wiring against massive overcurrents (like 20 A or 1,000 A), they are completely blind to tiny, lethal currents. If a child touches a live wire, only 50 to 100 milliamps (0.05 to 0.1 A) flows through their body to ground—far too small to trip a 16 A MCB, but more than enough to stop the heart! This is where an RCCB (Residual Current Circuit Breaker) saves lives. Inside the RCCB, both the Live and Neutral wires pass through a magnetic doughnut ring called a Core Balance Current Transformer. According to Kirchhoff’s Current Law, whatever current goes OUT on the Live wire must come BACK on the Neutral wire. If the currents are equal, their magnetic fields cancel to zero. But if even 30 mA leaks away through a person’s body to ground, the balance breaks: the difference creates a magnetic pulse that trips the breaker in less than 30 milliseconds—saving the person from electrocution before their heart can enter ventricular fibrillation!',
    hi: 'फ्यूज और MCB तारों को जलने से बचाते हैं, लेकिन वे छोटे और जानलेवा करंट को नहीं पहचान पाते। यदि कोई व्यक्ति 230 V के नंगे तार को छूता है, तो उसके शरीर से जमीन में केवल 50 से 100 मिलीएम्पीयर (0.05-0.1 A) करंट बहता है। यह 16 A की MCB को ट्रिप करने के लिए बहुत कम है, लेकिन दिल की धड़कन रोकने के लिए पर्याप्त है! यहाँ RCCB जीवन रक्षक बनता है। RCCB के अंदर फेज (Live) और न्यूट्रल दोनों तार एक चुंबकीय छल्ले (CBCT) के बीच से गुजरते हैं। सामान्य स्थिति में, जितना करंट फेज से जाता है, उतना ही न्यूट्रल से वापस आता है और दोनों का चुंबकीय प्रभाव शून्य हो जाता है। लेकिन जैसे ही 30 mA करंट किसी व्यक्ति या लीकेज के जरिए जमीन में बह जाता है, यह संतुलन बिगड़ जाता है। असंतुलित चुंबकीय फ्लक्स 30 मिलीसेकंड के अंदर स्विच को ट्रिप कर देता है—जिससे व्यक्ति की जान बच जाती है!',
    bn: 'ফিউজ ও এমসিবি কেবল অতিরিক্ত কারেন্ট (যেমন ২০ A বা ১,০০০ A) থেকে তার রক্ষা করে, কিন্তু মানুষের প্রাণঘাতী ক্ষুদ্র কারেন্ট শনাক্ত করতে পারে না। কেউ লাইভ তার স্পর্শ করলে শরীরের মধ্য দিয়ে মাত্র ৫০ থেকে ১০০ মিলিঅ্যাম্পিয়ার কারেন্ট মাটিতে যায়—যা ১৬ A এমসিবি ট্রিপ করানোর জন্য অতি নগণ্য হলেও হৃদস্পন্দন স্তব্ধ করতে যথেষ্ট! এখানেই আরসিসিবি (RCCB) জীবনদায়ী হিসেবে কাজ করে। আরসিসিবির ভেতরে ফেজ ও নিউট্রাল উভয় তার একটি গোলাকার চৌম্বক রিংয়ের (CBCT) মধ্য দিয়ে অতিক্রম করে। স্বাভাবিক অবস্থায় ফেজ দিয়ে যে পরিমাণ কারেন্ট প্রবেশ করে, নিউট্রাল দিয়ে ঠিক একই কারেন্ট ফিরে আসে, ফলে মোট চৌম্বক ফ্লাক্স শূন্য থাকে। কিন্তু কোনো মানুষের দেহ বা লিকেজ দিয়ে যদি মাত্র ৩০ মিলিঅ্যাম্পিয়ার কারেন্ট মাটিতে চলে যায়, তবে এই সাম্যাবস্থা ভেঙে যায়। সাথে সাথে উৎপন্ন চৌম্বক পালস মাত্র ৩০ মিলিসেকেন্ডের মধ্যে সুইচ ট্রিপ করিয়ে জীবন বাঁচায়!'
  },
  detailedExplanation: {
    en: 'An RCCB (Residual Current Circuit Breaker, compliant with IEC/EN 61008-1) is a differential current protection device operated on electromagnetic summation:\\n\\n1. Operating Principle via Toroidal Core Balance CT (CBCT):\\nThe phase conductor(s) and neutral conductor pass symmetrically through the aperture of a high-permeability toroidal magnetic core (Mu-metal or amorphous nanocrystalline alloy). Under normal, healthy operating conditions:\\nΣ i(t) = i_L(t) + i_N(t) = 0\\nThe magnetomotive forces produced by load current cancel each other identically: Φ_net = Φ_L + Φ_N = 0. No magnetic flux circulates in the toroidal core.\\n\\n2. Earth Fault Dynamics:\\nIf an insulation breakdown or human contact occurs, a residual earth fault current I_Δn bypasses the neutral return and flows directly to ground:\\ni_L(t) + i_N(t) = i_leakage(t) ≠ 0\\nThis net unbalance produces an alternating magnetic flux dΦ/dt in the core. A secondary search winding wrapped around the toroid picks up an induced electromotive force by Faraday’s law: e = -N · (dΦ / dt). This voltage powers a highly sensitive polarized permanent-magnet relay (demagnetizing release). The release unlatches a spring-loaded mechanical mechanism, forcing the main contacts to break the circuit in less than 30 to 40 milliseconds.\\n\\n3. Obsolescence of Voltage-Operated ELCBs (v-ELCB):\\nEarly systems utilized Voltage-Operated Earth Leakage Circuit Breakers (VO-ELCB), which wired a sensing trip coil in series between the appliance chassis and an auxiliary earth rod. V-ELCBs suffered from fatal vulnerabilities:\\n• If the appliance casing touched parallel metallic earth paths (e.g., metal plumbing pipes, structural steel rebar), fault current bypassed the sensing coil, preventing trip operation.\\n• A severed trip coil wire remained completely undetected while disabling all protection.\\nConsequently, IS 3043 and IEC standards declared Voltage-ELCBs obsolete and superseded them with Current-Operated RCCBs, which measure true residual current differential directly at the conductors independent of external earth path topology.\\n\\n4. Sensitivity Classifications (I_Δn):\\n• 10 mA & 30 mA: High Sensitivity. Mandatory for human life protection against direct and indirect contact in bathrooms, domestic sockets, school labs, and swimming pools.\\n• 100 mA: Medium Sensitivity. Used in installations with natural capacitive leakage (long armored cables, computers with RFI filters).\\n• 300 mA & 500 mA: Fire Protection Sensitivity. An earth leakage current of 300 mA at 230 V dissipates P = V · I = 230 × 0.3 = 69 W of localized Joulean heating—sufficient to ignite dry timber, cardboard, or dust over time.',
    hi: 'RCCB (IEC 61008-1) एक अवशिष्ट धारा सुरक्षा उपकरण है जो विद्युत चुम्बकीय संतुलन पर कार्य करता है:\\n\\n1. टॉरॉयडल सीबीसीटी (CBCT) का सिद्धांत:\\nफेज और न्यूट्रल तार एक उच्च पारगम्यता वाले गोलाकार कोर के अंदर से गुजरते हैं। सामान्य स्थिति में:\\ni_L + i_N = 0\\nदोनों तारों द्वारा उत्पन्न चुंबकीय फ्लक्स एक दूसरे को निरस्त कर देते हैं (Φ_net = 0)। कोर में कोई चुंबकीय क्षेत्र नहीं होता।\\n\\n2. अर्थ लीकेज की स्थिति:\\nजब कोई व्यक्ति तार को छूता है या करंट जमीन में लीक होता है:\\ni_L + i_N = i_leakage ≠ 0\\nयह असंतुलन कोर में चुंबकीय फ्लक्स पैदा करता है। सेकेंडरी वाइंडिंग में फैराडे के नियम से वोल्टेज प्रेरित होता है, जो 30-40 मिलीसेकंड में संवेदनशील रिले को ट्रिप कर देता है।\\n\\n3. वोल्टेज ELCB का अप्रचलन:\\nपुराने वोल्टेज ELCB उपकरण की बॉडी और ग्राउंड रॉड के बीच लगे वोल्टेज कॉइल पर निर्भर थे। यदि उपकरण पानी के पाइप या बिल्डिंग के सरियों को छू लेता, तो करंट कॉइल को बायपास कर देता था और ELCB ट्रिप नहीं होता था। इसलिए अंतरराष्ट्रीय मानकों ने वोल्टेज ELCB को बंद करके आधुनिक करंट RCCB को अनिवार्य कर दिया।\\n\\n4. संवेदनशीलता वर्गीकरण (IΔn):\\n• 30 mA: मानव जीवन सुरक्षा (घरेलू सॉकेट, बाथरूम)।\\n• 100 mA: मध्यम संवेदनशीलता (कंप्यूटर सर्वर, लंबी केबलें)।\\n• 300 mA / 500 mA: अग्नि सुरक्षा (69 W से अधिक ऊष्मा आग लगा सकती है)।',
    bn: 'আরসিসিবি (IEC 61008-1) একটি ডিফারেনশিয়াল কারেন্ট সুরক্ষা ডিভাইস যা টরয়ডাল কোর ব্যালেন্স ট্রান্সফরমারের ওপর ভিত্তি করে চলে:\\n\\n১. সিবিসিটি (CBCT) এর মূল নীতি:\\nউচ্চ পারমিয়েবিলিটি বিশিষ্ট গোলাকার কোরের মধ্য দিয়ে ফেজ ও নিউট্রাল তার দুটি পরিবাহিত হয়। স্বাভাবিক অবস্থায়:\\ni_L + i_N = ০\\nউভয় তারের বিপরীতমুখী চৌম্বক ফ্লাক্স একে অপরকে সম্পূর্ণ বাতিল করে দেয় (Φ_net = ০)।\\n\\n২. আর্থ ফল্টের প্রতিক্রিয়া:\\nইনসুলেশন নষ্ট হলে বা কোনো মানুষ স্পর্শ করলে লিকেজ কারেন্ট মাটির দিকে চলে যায়, ফলে ফেজ ও নিউট্রালের সাম্যাবস্থা নষ্ট হয় (i_L + i_N ≠ ০)। কোরে সৃষ্ট পরিবর্তনশীল ফ্লাক্স সেকেন্ডারি কয়েলে ভোল্টেজ আবিষ্ট করে এবং সংবেদনশীল পোলারাইজড রিলের মাধ্যমে ৩০-৪০ মিলিসেকেন্ডে লাইন বন্ধ করে দেয়।\\n\\n৩. ভোল্টেজ-ইএলসিবির অকার্যকারিতা:\\nপুরনো ভোল্টেজ ইএলসিবিতে মেটাল বডি ও মাটির মাঝে ভোল্টেজ কয়েল যুক্ত থাকত। মেটাল বডি ভবনের পানির পাইপ বা স্টিল রডের সাথে লাগলে কয়েল বাইপাস হয়ে যেত এবং ব্রেকার আর কাজ করত না। ফলে আধুনিক মানদণ্ডে ভোল্টেজ ইএলসিবি নিষিদ্ধ করে সার্বজনীন কারেন্ট আরসিসিবি বাধ্যতামূলক করা হয়েছে।\\n\\n৪. সংবেদনশীলতার মাত্রা (IΔn):\\n• ৩০ mA: মানব জীবন রক্ষা (বাসা-বাড়ি, বাথরুম, সকেট)।\\n• ১০০ mA: মাঝারি সংবেদনশীলতা (সার্ভার রুম ও দীর্ঘ ক্যাবল)।\\n• ৩০০ mA / ৫০০ mA: অগ্নিকাণ্ড রোধ (২৩০ ভোল্টে ৩০০ mA লিকেজ থেকে সৃষ্ট ৬৯ ওয়াট তাপ কাঠ বা ধূলিকণায় আগুন ধরাতে পারে)।'
  },
  formulas: [
    {
      id: 'f-cbct-residual-current',
      symbol: 'I_{\\Delta n}',
      expression: 'I_{\\Delta n} = \\left| \\vec{I}_L + \\vec{I}_N \\right| = I_{\\text{leakage}}',
      title: {
        en: 'Vector Residual Leakage Current',
        hi: 'सदिश अवशिष्ट लीकेज धारा',
        bn: 'ভেক্টর রেসিডুয়াল লিকেজ কারেন্ট'
      },
      description: {
        en: 'Vector sum of currents passing through the CBCT aperture, representing the net leakage current escaping to earth.',
        hi: 'CBCT कोर से गुजरने वाली धाराओं का सदिश योग, जो जमीन में लीक होने वाली कुल धारा को दर्शाता है।',
        bn: 'সিবিসিটি কোরের মধ্য দিয়ে প্রবাহিত কারেন্টের ভেক্টর সমষ্টি, যা মাটিতে নির্গত নেট লিকেজ কারেন্ট প্রকাশ করে।'
      },
      variables: [
        { symbol: 'I_Δn', name: { en: 'Residual operating fault current (mA or A)', hi: 'अवशिष्ट ऑपरेटिंग फॉल्ट धारा (mA)', bn: 'রেসিডুয়াল অপারেটিং ফল্ট কারেন্ট (mA)' } },
        { symbol: 'I_L', name: { en: 'Current entering through phase conductor (A)', hi: 'फेज तार से प्रवेश करने वाली धारा (A)', bn: 'ফেজ পরিবাহী দিয়ে প্রবেশকারী কারেন্ট (A)' } },
        { symbol: 'I_N', name: { en: 'Current returning through neutral conductor (A)', hi: 'न्यूट्रल तार से लौटने वाली धारा (A)', bn: 'নিউট্রাল পরিবাহী দিয়ে প্রত্যাবর্তনকারী কারেন্ট (A)' } }
      ]
    },
    {
      id: 'f-rccb-test-circuit-current',
      symbol: 'I_{test}',
      expression: 'I_{\\text{test}} = \\frac{U_{\\text{supply}}}{R_{\\text{test}}} > I_{\\Delta n}',
      title: {
        en: 'Test Push-Button Operating Current',
        hi: 'परीक्षण बटन संचालन धारा',
        bn: 'টেস্ট বোতাম অপারেটিং কারেন্ট'
      },
      description: {
        en: 'Calculates the artificial leakage current injected across the CBCT when the user presses the periodic test button "T".',
        hi: 'उपयोगकर्ता द्वारा आवधिक परीक्षण बटन "T" दबाने पर CBCT में उत्पन्न कृत्रिम लीकेज धारा की गणना करता है।',
        bn: 'ব্যবহারকারী টেস্ট বাটন "T" চাপলে সিবিসিটিতে কৃত্রিমভাবে তৈরি হওয়া লিকেজ কারেন্টের মান নির্ধারণ করে।'
      },
      variables: [
        { symbol: 'I_test', name: { en: 'Injected test current (mA)', hi: 'प्रवेश कराई गई परीक्षण धारा (mA)', bn: 'প্রয়োগকৃত টেস্ট কারেন্ট (mA)' } },
        { symbol: 'U_supply', name: { en: 'Supply phase-to-neutral voltage (e.g. 230 V)', hi: 'सप्लाई वोल्टेज (230 V)', bn: 'সাপ্লাই ভোল্টেজ (২৩০ V)' } },
        { symbol: 'R_test', name: { en: 'Internal calibrated test resistor (Ω)', hi: 'आंतरिक अंशांकित परीक्षण प्रतिरोधक (Ω)', bn: 'অভ্যন্তরীণ টেস্ট রেজিস্টরের মান (Ω)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch15-l06-rccb-types-applications',
      title: {
        en: 'RCCB Types (AC, A, B, F) and Monthly Testing Protocol',
        hi: 'RCCB के प्रकार (AC, A, B, F) एवं मासिक परीक्षण प्रोटोकॉल',
        bn: 'আরসিসিবির প্রকারভেদ (AC, A, B, F) ও মাসিক পরীক্ষার নিয়মাবলী'
      },
      content: {
        en: 'Modern electronics have changed the nature of earth leakage waveforms, leading to standardized international RCCB classifications (IEC 62423):\\n\\n1. Waveform Types of RCCB:\\n• Type AC: Detects pure sinusoidal alternating residual currents only. Widely used historically, but increasingly prohibited in modern building codes because it can be blinded ("saturated") by DC leakage components.\\n• Type A: Detects pure sinusoidal AC residual currents AND pulsating direct residual currents (e.g., from single-phase rectifiers in washing machines, PCs, and induction cookers).\\n• Type F: Detects Type A currents plus high-frequency residual currents up to 1 kHz produced by single-phase variable speed drive (VFD) inverters and heat pumps.\\n• Type B: Universal high-tech breaker. Detects sinusoidal AC, pulsating DC, high frequency up to 100 kHz, and smooth pure DC residual currents (mandatory for three-phase EV charging stations, PV solar inverters, and battery storage systems).\\n\\n2. Monthly Test Push-Button ("T" Button):\\nEvery RCCB features an external mechanical push-button marked "T". When pressed, it connects a small internal resistor across the Live side before the CBCT to the Neutral side after the CBCT. This creates a calibrated unbalance of ~35-40 mA that bypasses the core, forcing an immediate test trip. Users MUST test the RCCB monthly to ensure the mechanical linkages have not seized from dust or corrosion.\\n\\n3. Critical Safety Warning: RCBO (Residual Current Breaker with Overcurrent):\\nAn RCCB protects ONLY against earth leakage. It has NO thermal bimetal or magnetic solenoid! If you short Live directly to Neutral, an RCCB will NOT trip—it will melt or catch fire! It MUST be placed in series with an MCB, or replaced with an integrated RCBO (which combines both MCB and RCCB functions in a single module).',
        hi: 'आधुनिक इलेक्ट्रॉनिक्स के कारण लीकेज करंट के प्रकार बदल गए हैं, जिससे विभिन्न श्रेणियों के RCCB बनाए गए हैं (IEC 62423):\\n\\n1. RCCB के प्रकार:\\n• टाइप AC: केवल शुद्ध साइन वेव AC लीकेज पहचानता है।\\n• टाइप A: साइन वेव AC और पल्सेटिंग DC दोनों लीकेज को पहचानता है (वाशिंग मशीन, कंप्यूटर, इंडक्शन चूल्हा)।\\n• टाइप F: टाइप A के साथ-साथ इन्वर्टर और हीट पंप से निकलने वाले उच्च आवृत्ति (1 kHz) लीकेज को पकड़ता है।\\n• टाइप B: सार्वभौमिक ब्रेकर। यह AC, DC, सौर ऊर्जा इनवर्टर और इलेक्ट्रिक वाहन (EV) चार्जिंग स्टेशनों के स्मूथ DC लीकेज को भी पकड़ता है।\\n\\n2. मासिक परीक्षण बटन ("T" बटन):\\nRCCB पर "T" बटन दबाने से एक आंतरिक प्रतिरोधक के जरिए 35-40 mA का कृत्रिम असंतुलन बनता है, जिससे ब्रेकर तुरंत ट्रिप होता है। इसका परीक्षण हर महीने करना अनिवार्य है।\\n\\n3. महत्वपूर्ण चेतावनी: RCCB बनाम RCBO:\\nRCCB केवल अर्थ लीकेज से बचाता है। इसमें ओवरलोड या शॉर्ट-सर्किट ट्रिपिंग नहीं होती! फेज और न्यूट्रल के आपस में जुड़ने पर RCCB ट्रिप नहीं होगा। अतः इसे हमेशा MCB के साथ सीरीज में लगाएं, या एकीकृत RCBO का उपयोग करें।',
        bn: 'আধুনিক ইলেকট্রনিক্সের কারণে লিকেজ কারেন্টের তরঙ্গে রূপান্তর এসেছে, ফলে বিভিন্ন ক্যাটাগরির আরসিসিবি প্রবর্তিত হয়েছে (IEC 62423):\\n\\n১. আরসিসিবির প্রকারভেদ:\\n• টাইপ AC: কেবল বিশুদ্ধ সাইনুসয়েডাল এসি লিকেজ শনাক্ত করে।\\n• টাইপ A: সাধারণ এসি এবং পালসেটিং ডিসি উভয় লিকেজ শনাক্ত করে (কম্পিউটার, ওয়াশিং মেশিন, ইনডাকশন ওভেন)।\\n• টাইপ F: টাইপ A এর সাথে ইনভার্টার ও হিট পাম্পের ১ kHz পর্যন্ত উচ্চ কম্পাঙ্কের লিকেজ শনাক্ত করে।\\n• টাইপ B: সর্বাধুনিক ব্রেকার। এটি বিশুদ্ধ ডিসি কারেন্টও ধরতে পারে (ইভি চার্জিং স্টেশন ও সোলার ইনভার্টারের জন্য বাধ্যতামূলক)।\\n\\n২. মাসিক টেস্ট বাটন ("T" বোতাম):\\n"T" চিহ্নিত বাটনটি চাপলে একটি অভ্যন্তরীণ রেজিস্টরের মাধ্যমে ৩৫-৪০ mA কৃত্রিম কারেন্ট অসামঞ্জস্য তৈরি হয় এবং ব্রেকার তৎক্ষণাৎ ট্রিপ করে। মেকানিজম জ্যাম হয়ে যাওয়া রোধে প্রতি মাসে এটি পরীক্ষা করা আবশ্যক।\\n\\n৩. বিশেষ সতর্কবার্তা: RCCB বনাম RCBO:\\nআরসিসিবি শুধুমাত্র মাটির লিকেজ থেকে রক্ষা করে। এতে শর্ট সার্কিট বা ওভারলোড প্রটেকশন থাকে না! ফেজ ও নিউট্রাল শর্ট হলে আরসিসিবি ট্রিপ করবে না বরং পুড়ে যাবে। তাই আরসিসিবির সাথে অবশ্যই এমসিবি সিরিজে থাকতে হবে, অথবা উভয় সুবিধাযুক্ত RCBO ব্যবহার করতে হবে।'
      },
      schematicId: 'circuit-ch15-rccb-core-operation'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch15-l06-01',
      problem: {
        en: 'A 230 V domestic washing machine circuit is protected by a 30 mA RCCB. Due to internal motor winding insulation abrasion, a leakage current of 45 mA begins to flow from the phase winding to the earthed metallic chassis.\\n(a) Evaluate whether the RCCB will trip to isolate the fault.\\n(b) If the internal test push-button circuit on the RCCB is connected across 230 V mains with an internal test resistor of R_test = 5.6 kΩ, calculate the artificial test current I_test and confirm whether it is sufficient to guarantee tripping.',
        hi: 'एक 230 V घरेलू वाशिंग मशीन परिपथ 30 mA RCCB द्वारा सुरक्षित है। मोटर वाइंडिंग के घिसने के कारण फेज वाइंडिंग से अर्थ चेसिस में 45 mA की लीकेज धारा बहने लगती है।\\n(a) मूल्यांकन कीजिए कि क्या RCCB फॉल्ट को अलग करने के लिए ट्रिप हो जाएगा।\\n(b) यदि RCCB पर आंतरिक परीक्षण पुश-बटन सर्किट 230 V पर 5.6 kΩ के आंतरिक परीक्षण प्रतिरोधक (R_test) से जुड़ा है, तो कृत्रिम परीक्षण धारा की गणना कीजिए और पुष्टि कीजिए कि क्या यह ट्रिपिंग सुनिश्चित करने के लिए पर्याप्त है।',
        bn: 'একটি ২৩০ V ওয়াশিং মেশিনের লাইন ৩০ mA আরসিসিবি দ্বারা সুরক্ষিত। মোটরের ইনসুলেশন নষ্ট হয়ে মেটাল বডিতে ৪৫ mA লিকেজ কারেন্ট প্রবাহিত হতে শুরু করে।\\n(a) আরসিসিবি কি লাইন বন্ধ করতে ট্রিপ করবে?\\n(b) আরসিসিবির টেস্ট পুশ-বাটনের সাথে ২৩০ ভোল্ট লাইনে ৫.৬ kΩ রেজিস্টর যুক্ত থাকলে টেস্ট কারেন্টের মান নির্ণয় করুন এবং এটি ব্রেকার ট্রিপ করাতে সক্ষম কি না তা নিশ্চিত করুন।'
      },
      solution: {
        en: 'Given:\\n• RCCB sensitivity (I_Δn) = 30 mA\\n• Fault leakage current (I_leak) = 45 mA\\n• Supply voltage (V) = 230 V\\n• Test resistor (R_test) = 5.6 kΩ = 5,600 Ω\\n\\nStep 1: Evaluate Fault Tripping Condition\\nAccording to IEC 61008-1, an RCCB must not trip below 0.5 · I_Δn (15 mA), but MUST trip between 0.5 · I_Δn and 1.0 · I_Δn (between 15 mA and 30 mA) within 300 ms, and under 40 ms at 5 · I_Δn.\\nSince actual leakage current (45 mA) > certified threshold (30 mA), the RCCB will reliably trip in less than 30 to 40 milliseconds, completely isolating the faulty washing machine before human touch can cause injury.\\n\\nStep 2: Calculate Test Button Current\\nI_test = V / R_test = 230 V / 5,600 Ω ≈ 0.04107 A ≈ 41.1 mA\\n\\nStep 3: Verification\\nSince I_test (41.1 mA) > I_Δn (30 mA), pressing the test button creates an unbalance well above the 30 mA trip threshold, guaranteeing positive mechanical tripping during monthly maintenance inspections.',
        hi: 'चरण 1: फॉल्ट ट्रिपिंग का मूल्यांकन\\nचूंकि वास्तविक लीकेज धारा (45 mA) RCCB की रेटिंग (30 mA) से अधिक है, अतः RCCB 30 से 40 मिलीसेकंड के अंदर तुरंत ट्रिप होकर लाइन को काट देगा।\\n\\nचरण 2: टेस्ट बटन धारा की गणना\\nI_test = V / R_test = 230 / 5600 = 0.04107 A = 41.1 mA\\n\\nचरण 3: पुष्टि\\nचूंकि 41.1 mA > 30 mA, अतः परीक्षण बटन दबाते ही कृत्रिम असंतुलन के कारण RCCB अनिवार्य रूप से ट्रिप होगा।',
        bn: 'ধাপ ১: ট্রিপিং শর্ত মূল্যায়ন\\nপ্রকৃত লিকেজ কারেন্ট ৪৫ mA যা আরসিসিবির ৩০ mA রেটিং অপেক্ষা বেশি। ফলে আরসিসিবি ৩০-৪০ মিলিসেকেন্ডে ট্রিপ করে লাইন সম্পূর্ণ বিচ্ছিন্ন করে দেবে।\\n\\nধাপ ২: টেস্ট বাটন কারেন্ট নির্ণয়\\nI_test = ২৩০ / ৫৬০০ = ০.০৪১০৭ A = ৪১.১ mA\\n\\nধাপ ৩: যাচাইকরণ\\nযেহেতু ৪১.১ mA > ৩০ mA, তাই টেস্ট বোতাম চাপলে উৎপন্ন কৃত্রিম লিকেজে আরসিসিবি তাৎক্ষণিকভাবে ট্রিপ করবে।'
      },
      givenValues: { 'I_Δn': '30 mA', 'I_leak': '45 mA', 'V': '230 V', 'R_test': '5.6 kΩ' },
      finalAnswer: {
        en: 'The RCCB will trip reliably (45 mA > 30 mA); Test button current = 41.1 mA, which safely exceeds the 30 mA trip threshold.',
        hi: 'RCCB निश्चित रूप से ट्रिप होगा (45 mA > 30 mA); परीक्षण धारा = 41.1 mA, जो ट्रिप सीमा से अधिक है।',
        bn: 'আরসিসিবি নির্ভরযোগ্যভাবে ট্রিপ করবে (৪৫ mA > ৩০ mA); টেস্ট কারেন্ট = ৪১.১ mA, যা ৩০ mA সীমা অতিক্রম করে।'
      }
    },
    {
      id: 'ex-ch15-l06-02',
      problem: {
        en: 'A commercial warehouse timber storage area is supplied at 230 V. Damaged wiring embedded in wooden beams develops a continuous resistive earth leakage of 400 mA to a grounded conduit.\\n(a) Calculate the heat power continuously dissipated at the point of leakage.\\n(b) Explain why a standard 32 A MCB fails to detect this hazard, while a 300 mA fire-protection RCCB isolates it instantly.',
        hi: 'एक वाणिज्यिक लकड़ी के गोदाम में 230 V की आपूर्ति है। लकड़ी के बीम में क्षतिग्रस्त तारों से ग्राउंडेड कंड्यूट में 400 mA की निरंतर अर्थ लीकेज धारा बहती है।\\n(a) लीकेज बिंदु पर लगातार निकलने वाली तापीय शक्ति की गणना कीजिए।\\n(b) समझाइए कि एक मानक 32 A MCB इस खतरे को पहचानने में क्यों विफल रहता है, जबकि 300 mA अग्नि-सुरक्षा RCCB इसे तुरंत अलग कर देता है।',
        bn: 'একটি কাঠের গুদামে ২৩০ V লাইনের ক্ষতিগ্রস্ত তার থেকে কনডিউট পাইপে ৪০০ mA নিরবচ্ছিন্ন লিকেজ কারেন্ট মাটিতে যায়।\\n(a) লিকেজ স্থানে উৎপন্ন অবিচ্ছিন্ন তাপীয় ক্ষমতা নির্ণয় করুন।\\n(b) কেন ৩২ A এমসিবি এটি শনাক্ত করতে পারে না, অথচ একটি ৩০০ mA আরসিসিবি সাথে সাথে লাইন কেটে আগুন রোধ করে?'
      },
      solution: {
        en: 'Given:\\n• Supply voltage (V) = 230 V\\n• Continuous leakage current (I_leak) = 400 mA = 0.40 A\\n\\nStep 1: Calculate Continuous Thermal Power Dissipation\\nP = V · I_leak = 230 V · 0.40 A = 92.0 Watts\\n\\nStep 2: Fire Hazard Evaluation\\nA heat power of 92 W confined in dry sawdust or timber within an enclosed wall cavity behaves like a 100 W incandescent heating element. Over several hours, the temperature exceeds the pyrolysis and auto-ignition temperature of dry wood (~250°C to 300°C), igniting a catastrophic structural fire!\\n\\nStep 3: Protective Device Comparison\\n• Standard 32 A MCB: 0.40 A is only 1.25% of its rated current (32 A). The MCB perceives 0.4 A as negligible background load and will NEVER trip!\\n• 300 mA Fire Protection RCCB: Since 400 mA > 300 mA, the RCCB detects the net unbalance in the CBCT within 100 ms, tripping the circuit breaker and completely neutralizing the fire risk.',
        hi: 'चरण 1: तापीय शक्ति की गणना\\nP = V × I = 230 × 0.40 = 92 वाट\\n\\nचरण 2: अग्नि जोखिम विश्लेषण\\nसूखी लकड़ी में 92 W की केंद्रित गर्मी 100 वाट के बल्ब जितनी होती है। कुछ ही घंटों में लकड़ी का तापमान 300°C तक पहुंचकर आग पकड़ लेगा।\\n\\nचरण 3: सुरक्षा तुलना\\n32 A MCB के लिए 0.4 A बहुत छोटा करंट है और वह कभी ट्रिप नहीं होगी। जबकि 300 mA RCCB 400 mA को तुरंत पहचान कर 100 मिलीसेकंड में लाइन काट देगा और गोदाम को जलने से बचा लेगा।',
        bn: 'ধাপ ১: তাপীয় ক্ষমতা নির্ণয়\\nP = V × I = ২৩০ × ০.৪০ = ৯২ ওয়াট\\n\\nধাপ ২: অগ্নিকাণ্ড ঝুঁকি বিশ্লেষণ\\nশুকনো কাঠের ভেতর ৯২ ওয়াটের নিরবচ্ছিন্ন তাপ একটি ১০০ ওয়াট বাল্বের মতো তাপ ছড়ায়, যা কয়েক ঘণ্টার মধ্যে কাঠের প্রজ্জ্বলন তাপমাত্রা ছাড়িয়ে বিধ্বংসী অগ্নিকাণ্ড ঘটাবে।\\n\\nধাপ ৩: সুরক্ষার তুলনা\\n৩২ A এমসিবির কাছে ০.৪ A কারেন্ট নগণ্য হওয়ায় এটি কখনোই ট্রিপ করবে না। পক্ষান্তরে ৩০০ mA আরসিসিবি ৪০০ mA লিকেজকে নিমেষেই ধরে লাইন বিচ্ছিন্ন করে আগুন লাগা প্রতিহত করবে।'
      },
      givenValues: { 'V': '230 V', 'I_leak': '400 mA' },
      finalAnswer: {
        en: 'Thermal power dissipated = 92 W (easily ignites dry timber); MCB ignores 0.4 A, whereas a 300 mA RCCB trips within milliseconds to prevent fire.',
        hi: 'तापीय शक्ति = 92 W (लकड़ी में आग लगाने के लिए पर्याप्त); MCB 0.4 A को अनदेखा कर देता है, जबकि 300 mA RCCB आग लगने से पहले ट्रिप हो जाता है।',
        bn: 'উৎপন্ন তাপ = ৯২ ওয়াট (কাঠ জ্বালানোর জন্য যথেষ্ট); এমসিবি ০.৪ অ্যাম্পিয়ারে নির্বিকার থাকে, কিন্তু ৩০০ mA আরসিসিবি সাথে সাথে ট্রিপ করে আগুন প্রতিরোধ করে।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Residential bathroom and kitchen wet-area personal shock protection using highly sensitive 30 mA RCCBs.',
      'Industrial electrical fire protection across chemical processing plants, textile mills, and wood mills using 300 mA time-delayed selective RCCBs.',
      'Electric Vehicle (EV) fast-charging infrastructure utilizing Type B RCCBs to detect smooth DC fault leakage components coming from high-voltage battery packs.',
      'Hospital critical care patient environment earthing schemes combining isolated power supplies (IPS) with ultra-sensitive insulation monitoring and RCBOs.'
    ],
    hi: [
      'बाथरूम और रसोई जैसे गीले स्थानों पर बिजली के झटके से व्यक्तिगत सुरक्षा हेतु 30 mA RCCB का उपयोग।',
      'कपड़ा मिलों और रासायनिक संयंत्रों में आग लगने से रोकने के लिए 300 mA RCCB का उपयोग।',
      'इलेक्ट्रिक वाहन (EV) चार्जिंग स्टेशनों में बैटरी के DC लीकेज को पकड़ने के लिए टाइप B RCCB का उपयोग।',
      'अस्पतालों के आईसीयू और ऑपरेशन थिएटर में विशेष इंसुलेशन मॉनिटरिंग और RCBO लगाना।'
    ],
    bn: [
      'বাথরুম ও রান্নাঘরের মতো আর্দ্র স্থানে প্রাণঘাতী শক সুরক্ষায় ৩০ mA সংবেদনশীল আরসিসিবি স্থাপন।',
      'টেক্সটাইল মিল ও রাসায়নিক গুদামে অগ্নিকাণ্ড রোধে ৩০০ mA টাইম-ডিলেড আরসিসিবি ব্যবহার।',
      'বৈদ্যুতিক গাড়ি (EV) চার্জিং স্টেশনে ব্যাটারির ডিসি লিকেজ শনাক্তকরণে টাইপ B আরসিসিবি স্থাপন।',
      'হাসপাতালের আইসিইউ এবং অপারেশন থিয়েটারে সংবেদনশীল আইসোলেটেড পাওয়ার ও RCBO প্রয়োগ।'
    ]
  },
  importantPoints: {
    en: [
      'RCCBs operate on Kirchhoff’s Current Law: in a healthy single-phase circuit, IL + IN = 0; any imbalance is leakage to earth.',
      'A 30 mA RCCB disconnects within 40 ms at 5 · IΔn, preventing human ventricular fibrillation upon contact.',
      'Voltage ELCBs are obsolete because parallel metallic earth paths bypass the sensing coil, rendering protection inoperative.',
      'RCCBs protect ONLY against earth leakage faults; they provide ZERO protection against line-to-neutral short circuits or sustained overloads.',
      'The monthly test button ("T") MUST be tested periodically to verify that mechanical catches and contacts move freely.'
    ],
    hi: [
      'RCCB किरचॉफ के करंट नियम पर काम करता है: स्वस्थ परिपथ में IL + IN = 0 होता है; कोई भी अंतर अर्थ लीकेज है।',
      '30 mA RCCB 40 ms के अंदर बिजली काटकर दिल के दौरे (वेंट्रिकुलर फाइब्रिलेशन) से बचाती है।',
      'वोल्टेज ELCB अप्रचलित हैं क्योंकि पाइप या सरिए से करंट बायपास होकर कॉइल को काम नहीं करने देता।',
      'RCCB केवल अर्थ लीकेज से बचाती है; यह फेज और न्यूट्रल के शॉर्ट सर्किट पर कभी ट्रिप नहीं होगी।',
      'मैकेनिकल जाम से बचने के लिए "T" टेस्ट बटन को हर महीने दबाकर चेक करना अनिवार्य है।'
    ],
    bn: [
      'আরসিসিবি কার্শফের কারেন্ট সূত্রের ওপর প্রতিষ্ঠিত: স্বাভাবিক অবস্থায় IL + IN = ০; কোনো ব্যবধান মানেই মাটির লিকেজ।',
      '৩০ mA আরসিসিবি মাত্র ৪০ মিলিসেকেন্ডে লাইন বন্ধ করে ভেন্ট্রিকুলার ফিব্রিলেশন ও মৃত্যু থেকে রক্ষা করে।',
      'ভোল্টেজ ইএলসিবি বাতিল করা হয়েছে কারণ মেটাল পাইপের সমান্তরাল পথ সেন্সিং কয়েলকে বাইপাস করত।',
      'আরসিসিবি শুধুমাত্র মাটির লিকেজ ধরে; ফেজ ও নিউট্রাল সরাসরি শর্ট হলে এটি কখনোই ট্রিপ করবে না।',
      'যান্ত্রিক জ্যাম এড়াতে প্রতি মাসে একবার "T" টেস্ট বাটন চেপে ব্রেকার পরীক্ষা করা আবশ্যক।'
    ]
  },
  commonMistakes: {
    en: [
      'Installing an RCCB without an upstream or downstream MCB, believing the RCCB will protect against short circuits; it will melt during a bolted short circuit.',
      'Connecting the neutral wire of an RCCB-protected circuit to another neutral bar or earthing it on the load side, which causes immediate nuisance tripping.',
      'Selecting an outdated Type AC RCCB for circuits feeding modern inverter air conditioners and computers that produce DC leakage, blinding the breaker.',
      'Ignoring the monthly test button for years until dust and corrosion seize the tripping mechanism, rendering the safety device completely inoperative.'
    ],
    hi: [
      'MCB के बिना केवल RCCB लगा देना और सोचना कि यह शॉर्ट-सर्किट से बचाएगा; शॉर्ट-सर्किट होने पर RCCB जल जाएगा।',
      'RCCB के न्यूट्रल तार को लोड की तरफ किसी अन्य न्यूट्रल या जमीन से जोड़ देना, जिससे वह तुरंत अनावश्यक ट्रिप होने लगेगा।',
      'कंप्यूटर और इन्वर्टर एसी वाले सर्किट पर पुराना टाइप AC RCCB लगाना, जो DC लीकेज होने पर निष्क्रिय हो जाता है।',
      'सालों तक टेस्ट बटन न दबाना, जिससे जंग लगकर ट्रिपिंग तंत्र जाम हो जाता है और सुरक्षा खत्म हो जाती है।'
    ],
    bn: [
      'এমসিবি ছাড়া শুধু আরসিসিবি লাগানো; শর্ট সার্কিট হলে আরসিসিবি ট্রিপ না করে সরাসরি পুড়ে ছাই হবে।',
      'লোড প্রান্তের নিউট্রাল তার অন্য কোনো নিউট্রাল বা মাটির সাথে যুক্ত করা, যার ফলে ব্রেকার অযথা অনবরত ট্রিপ করবে।',
      'কম্পিউটার ও ইনভার্টার এয়ার কন্ডিশনারের লাইনে টাইপ AC লাগানো, যা ডিসি লিকেজের কারণে অকেজো হয়ে পড়ে।',
      'টেস্ট বাটন বছরের পর বছর পরীক্ষা না করা, ফলে মরিচা পড়ে বা ধুলো জমে ট্রিপিং মেকানিজম চিরতরে জ্যাম হয়ে যায়।'
    ]
  },
  keyTakeaways: {
    en: [
      'RCCBs provide vital electrocution protection by monitoring current imbalance across a Core Balance Current Transformer.',
      'A 30 mA threshold is the worldwide benchmark for human life protection, clearing faults in under 30-40 ms.',
      'A 300 mA threshold prevents electrical fires caused by low-current arcing and continuous leakage into combustible materials.',
      'Always install RCCBs in conjunction with MCBs (or use all-in-one RCBOs) to achieve comprehensive shock and overcurrent safety.'
    ],
    hi: [
      'RCCB कोर बैलेंस करंट ट्रांसफॉर्मर द्वारा करंट के असंतुलन को मापकर बिजली के जानलेवा झटके से बचाता है।',
      '30 mA की सीमा मानव जीवन सुरक्षा का वैश्विक मानक है, जो 30-40 मिलीसेकंड में बिजली काट देती है।',
      '300 mA की सीमा दहनशील पदार्थों में आग लगने से रोकती है।',
      'पूर्ण सुरक्षा के लिए हमेशा RCCB को MCB के साथ संयोजन में उपयोग करें (या RCBO लगाएं)।'
    ],
    bn: [
      'আরসিসিবি সিবিসিটি (CBCT) কোরের মাধ্যমে কারেন্টের সামান্যতম অসামঞ্জস্য মেপে মানুষকে শক থেকে বাঁচায়।',
      '৩০ mA সংবেদনশীলতা মানব জীবন সুরক্ষার আন্তর্জাতিক মানদণ্ড, যা ৩০-৪০ মিলিসেকেন্ডে লাইন বন্ধ করে।',
      '৩০০ mA সংবেদনশীলতা নিরবচ্ছিন্ন লিকেজজনিত অগ্নিকাণ্ড রোধ করে।',
      'সম্পূর্ণ সুরক্ষার জন্য সর্বদা আরসিসিবির সাথে এমসিবি (অথবা কম্বাইন্ড RCBO) ব্যবহার নিশ্চিত করুন।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch15-l06-01',
      question: {
        en: 'What foundational electrical circuit law governs the flux cancellation principle inside an RCCB’s Core Balance Current Transformer (CBCT)?',
        hi: 'RCCB के कोर बैलेंस करंट ट्रांसफॉर्मर (CBCT) के अंदर फ्लक्स निरस्तीकरण सिद्धांत किस मूलभूत विद्युत परिपथ नियम पर आधारित है?',
        bn: 'আরসিসিবির কোর ব্যালেন্স কারেন্ট ট্রান্সফরমারের (CBCT) ফ্লাক্স বাতিলকরণ কৌশল কোন মৌলিক বিদ্যুৎ সূত্রের ওপর প্রতিষ্ঠিত?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Kirchhoff’s Current Law (Σ I = 0): the instantaneous current going out via Phase equals current returning via Neutral under healthy conditions', hi: 'किरचॉफ का धारा नियम (Σ I = 0): स्वस्थ स्थिति में फेज से जाने वाली धारा न्यूट्रल से लौटने वाली धारा के बराबर होती है', bn: 'কার্শফের কারেন্ট সূত্র (Σ I = ০): স্বাভাবিক অবস্থায় ফেজ দিয়ে বহির্গামী কারেন্ট নিউট্রাল দিয়ে প্রত্যাবর্তনকারী কারেন্টের সমান' } },
        { id: 'opt-2', text: { en: 'Coulomb’s Law of Electrostatic Attraction', hi: 'कूलॉम का स्थिर वैद्युत आकर्षण नियम', bn: 'কুলম্বের স্থির তড়িৎ আকর্ষণ সূত্র' } },
        { id: 'opt-3', text: { en: 'Einstein’s Mass-Energy Equivalence', hi: 'आइंस्टीन का द्रव्यमान-ऊर्जा समीकरण', bn: 'আইনস্টাইনের ভর-শক্তি সমীকরণ' } },
        { id: 'opt-4', text: { en: 'Snell’s Law of Optical Refraction', hi: 'स्नेल का अपवर्तन नियम', bn: 'স্নেলের প্রতিসরণ সূত্র' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'By Kirchhoff’s Current Law, in a healthy closed circuit without earth faults, I_L + I_N = 0. The equal and opposing currents create magnetic fields that cancel each other out in the CBCT toroid.',
        hi: 'किरचॉफ के धारा नियमानुसार फेज और न्यूट्रल धाराओं का योग शून्य होता है, जिससे कोर में शुद्ध चुंबकीय फ्लक्स शून्य रहता है।',
        bn: 'কার্শফের সূত্র অনুসারে স্বাভাবিক সার্কিটে ফেজ ও নিউট্রালের বিপরীতমুখী কারেন্ট সমান হওয়ায় সিবিসিটি কোরে মোট চৌম্বক ফ্লাক্স শূন্য থাকে।'
      }
    },
    {
      id: 'mcq-ch15-l06-02',
      question: {
        en: 'What is the maximum rated residual operating current (IΔn) recommended internationally for personal electrocution shock protection?',
        hi: 'व्यक्तिगत बिजली के झटके से सुरक्षा के लिए अंतरराष्ट्रीय स्तर पर अनुशंसित अधिकतम रेटेड अवशिष्ट ऑपरेटिंग धारा (IΔn) क्या है?',
        bn: 'মানবদেহে বৈদ্যুতিক শকের হাত থেকে নিশ্চিত জীবন সুরক্ষায় আন্তর্জাতিকভাবে স্বীকৃত সর্বোচ্চ রেটেড লিকেজ কারেন্ট (IΔn) কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '30 mA (0.03 A)', hi: '30 mA (0.03 A)', bn: '৩০ mA (০.০৩ A)' } },
        { id: 'opt-2', text: { en: '300 mA (0.3 A)', hi: '300 mA (0.3 A)', bn: '৩০০ mA (০.৩ A)' } },
        { id: 'opt-3', text: { en: '16 Amperes', hi: '16 एम्पीयर', bn: '১৬ অ্যাম্পিয়ার' } },
        { id: 'opt-4', text: { en: '100 Amperes', hi: '100 एम्पीयर', bn: '১০০ অ্যাম্পিয়ার' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'A 30 mA residual current threshold trips before ventricular fibrillation can occur in humans, establishing it as the global gold standard for personal protection.',
        hi: '30 mA की सीमा दिल के दौरे (वेंट्रिकुलर फाइब्रिलेशन) को रोकने के लिए अंतरराष्ट्रीय मानक है।',
        bn: '৩০ মিলিঅ্যাম্পিয়ার সংবেদনশীলতা মানুষের হৃদযন্ত্র বিকল হওয়া রোধ করে বলে এটি বিশ্বব্যাপী স্বীকৃত জীবন সুরক্ষার মান।'
      }
    },
    {
      id: 'mcq-ch15-l06-03',
      question: {
        en: 'Why were early Voltage-Operated ELCBs (v-ELCB) declared obsolete and replaced by Current-Operated RCCBs?',
        hi: 'शुरुआती वोल्टेज ELCB को अप्रचलित घोषित कर उनके स्थान पर करंट RCCB को क्यों लाया गया?',
        bn: 'কেন প্রাথমিক যুগের ভোল্টেজ-ইএলসিবি বাতিল করে তার বদলে কারেন্ট-আরসিসিবি প্রবর্তন করা হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Because voltage ELCBs were too small to see', hi: 'क्योंकि वोल्टेज ELCB देखने में बहुत छोटी थीं', bn: 'কারণ ভোল্টেজ ইএলসিবি আকারে অতি ক্ষুদ্র ছিল' } },
        { id: 'opt-2', text: { en: 'Parallel metallic paths (e.g. water pipes, building rebar) bypass the sensing coil, preventing the v-ELCB from sensing fault voltage and tripping', hi: 'समानांतर धात्विक पथ (जैसे पानी के पाइप, भवन के सरिए) सेंसिंग कॉइल को बायपास कर देते थे, जिससे ELCB ट्रिप नहीं हो पाता था', bn: 'পানির ধাতব পাইপ বা রডের সমান্তরাল পথ সেন্সিং কয়েলকে বাইপাস করে ফেলত, যার ফলে ফল্ট হলেও ভোল্টেজ ইএলসিবি ট্রিপ করত না' } },
        { id: 'opt-3', text: { en: 'Because voltage ELCBs made too much noise', hi: 'क्योंकि वे बहुत अधिक आवाज करती थीं', bn: 'কারণ সেগুলি অতিরিক্ত শব্দ করত' } },
        { id: 'opt-4', text: { en: 'Because they consumed 1,000 kW of power continuously', hi: 'क्योंकि वे लगातार 1,000 kW बिजली खाती थीं', bn: 'কারণ সেগুলি ১,০০০ কিলোওয়াট বিদ্যুৎ অপচয় করত' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Any unintended parallel earth path (such as metal water piping or concrete reinforcement) diverts fault current around the sensing coil of a Voltage ELCB, dangerously suppressing the trip voltage.',
        hi: 'पानी के पाइप या बिल्डिंग के सरिए जैसे समानांतर रास्ते फॉल्ट करंट को कॉइल के बाहर से निकाल देते थे, जिससे ELCB कभी ट्रिप नहीं होता था।',
        bn: 'ভবনের ধাতব পাইপলাইন বা রড সমান্তরাল পথ তৈরি করায় কারেন্ট সেন্সিং কয়েলের পাশ দিয়ে চলে যেত এবং ইএলসিবি অকেজো হয়ে থাকত।'
      }
    },
    {
      id: 'mcq-ch15-l06-04',
      question: {
        en: 'What happens if a direct short circuit occurs between Live and Neutral on a circuit protected ONLY by an RCCB (with no MCB or fuse present)?',
        hi: 'यदि केवल RCCB (बिना MCB या फ्यूज) द्वारा सुरक्षित परिपथ पर लाइव और न्यूट्रल के बीच सीधा शॉर्ट सर्किट हो जाए, तो क्या होगा?',
        bn: 'শুধুমাত্র একটি আরসিসিবি দ্বারা সুরক্ষিত লাইনে (কোনো এমসিবি বা ফিউজ ছাড়া) সরাসরি ফেজ ও নিউট্রাল শর্ট সার্কিট ঘটলে কী হবে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The RCCB will trip in 1 microsecond', hi: 'RCCB 1 माइक्रोसेकंड में ट्रिप हो जाएगी', bn: 'আরসিসিবি ১ মাইক্রোসেকেন্ডে ট্রিপ করবে' } },
        { id: 'opt-2', text: { en: 'The RCCB will NOT trip because IL and IN remain equal; the extreme short-circuit overcurrent will melt or destroy the RCCB', hi: 'RCCB ट्रिप नहीं होगी क्योंकि IL और IN बराबर रहते हैं; अत्यधिक शॉर्ट-सर्किट धारा RCCB को पिघला या जला देगी', bn: 'আরসিসিবি ট্রিপ করবে না কারণ IL এবং IN উভয়ই সমান থাকে; ফলে প্রচণ্ড শর্ট সার্কিট কারেন্টে আরসিসিবি পুড়ে ধ্বংস হয়ে যাবে' } },
        { id: 'opt-3', text: { en: 'The supply voltage will automatically double', hi: 'सप्लाई वोल्टेज अपने आप दोगुना हो जाएगा', bn: 'সাপ্লাই ভোল্টেজ দ্বিগুণ হবে' } },
        { id: 'opt-4', text: { en: 'The RCCB will start generating electricity', hi: 'RCCB बिजली पैदा करना शुरू कर देगी', bn: 'আরসিসিবি বিদ্যুৎ উৎপাদন শুরু করবে' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'An RCCB senses only the DIFFERENCE between Phase and Neutral. In a Live-to-Neutral short, all current returns via Neutral (IL = IN), so the net flux in the CBCT remains zero. Without an MCB or fuse, the breaker will burn.',
        hi: 'RCCB केवल फेज और न्यूट्रल के अंतर को पकड़ती है। लाइन-टू-न्यूट्रल शॉर्ट में दोनों करंट बराबर होते हैं अतः RCCB ट्रिप नहीं होगी और जल जाएगी।',
        bn: 'আরসিসিবি কেবল ফেজ ও নিউট্রালের পার্থক্য শনাক্ত করে। ফেজ-নিউট্রাল শর্টে উভয় কারেন্ট সমান থাকায় ফ্লাক্স শূন্য থাকে, ফলে আরসিসিবি ট্রিপ না করে পুড়ে যাবে।'
      }
    },
    {
      id: 'mcq-ch15-l06-05',
      question: {
        en: 'What is the purpose of a 300 mA or 500 mA rated RCCB in industrial installations?',
        hi: 'औद्योगिक प्रतिष्ठानों में 300 mA या 500 mA रेटेड RCCB का प्राथमिक उद्देश्य क्या है?',
        bn: 'শিল্প প্রতিষ্ঠানে ৩০০ mA বা ৫০০ mA রেটিংয়ের আরসিসিবি ব্যবহারের মূল উদ্দেশ্য কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Direct human life protection in residential showers', hi: 'आवासीय शावर में प्रत्यक्ष मानव जीवन सुरक्षा', bn: 'আবাসিক বাথরুমে সরাসরি মানুষের শক সুরক্ষা' } },
        { id: 'opt-2', text: { en: 'Electrical fire protection against low-level continuous ground fault arcing into combustible dust and timber', hi: 'ज्वलनशील धूल और लकड़ी में लगातार होने वाले छोटे ग्राउंड फॉल्ट से आग की रोकथाम', bn: 'দাহ্য বস্তু বা ধূলিকণায় নিম্ন মাত্রার লিকেজ কারেন্টজনিত বৈদ্যুতিক অগ্নিকাণ্ড প্রতিরোধ' } },
        { id: 'opt-3', text: { en: 'To boost the speed of induction motors by 50%', hi: 'इंडक्शन मोटरों की गति 50% बढ़ाना', bn: 'মোটরের গতি ৫০% বৃদ্ধি করা' } },
        { id: 'opt-4', text: { en: 'To charge electric vehicles wirelessly', hi: 'इलेक्ट्रिक वाहनों को वायरलेस तरीके से चार्ज करना', bn: 'তারবিহীন উপায়ে গাড়ি চার্জ করা' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: '300 mA residual currents dissipate around 70 W of heat at 230 V, which can ignite dust or wood over time. 300 mA RCCBs prevent fires where normal leakage currents preclude 30 mA breakers.',
        hi: '300 mA का लीकेज 230 V पर 70 W ऊष्मा पैदा करता है जो आग लगा सकती है। 300 mA RCCB आग से सुरक्षा के लिए उपयोग किया जाता है।',
        bn: '২৩০ ভোল্টে ৩০০ mA কারেন্ট থেকে প্রায় ৭০ ওয়াট তাপ উৎপন্ন হয় যা কাঠের গুদামে আগুন ধরাতে পারে। ৩০০ mA আরসিসিবি মূলত আগুন প্রতিরোধে ব্যবহৃত হয়।'
      }
    },
    {
      id: 'mcq-ch15-l06-06',
      question: {
        en: 'How does pressing the "T" (Test) button on the front panel of an RCCB verify the health of the unit?',
        hi: 'RCCB के सामने वाले पैनल पर "T" (टेस्ट) बटन दबाने से यूनिट की कार्यप्रणाली कैसे जांची जाती है?',
        bn: 'আরসিসিবির সামনের "T" (টেস্ট) বোতামটি চাপলে কীভাবে ডিভাইসটির সঠিক কার্যক্ষমতা যাচাই হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'It connects the user’s hand to the 230 V live mains', hi: 'यह उपयोगकर्ता के हाथ को 230 V मेन से जोड़ देता है', bn: 'এটি ব্যবহারকারীর হাতকে ২৩০ V মেইনসের সাথে যুক্ত করে' } },
        { id: 'opt-2', text: { en: 'It connects an internal calibrated resistor across the supply that bypasses the CBCT, simulating an artificial leakage current above IΔn to trip the mechanism', hi: 'यह एक आंतरिक अंशांकित प्रतिरोधक को जोड़ता है जो CBCT को बायपास करता है और ट्रिप कराने के लिए IΔn से अधिक कृत्रिम लीकेज धारा उत्पन्न करता है', bn: 'এটি একটি অভ্যন্তরীণ রেজিস্টর সংযুক্ত করে যা সিবিসিটিকে বাইপাস করে IΔn মানের চেয়ে বেশি কৃত্রিম লিকেজ কারেন্ট তৈরি করে মেকানিজম ট্রিপ করায়' } },
        { id: 'opt-3', text: { en: 'It downloads firmware updates from the internet', hi: 'यह इंटरनेट से फर्मवेयर अपडेट डाउनलोड करता है', bn: 'এটি ইন্টারনেট থেকে সফটওয়্যার আপডেট নামায়' } },
        { id: 'opt-4', text: { en: 'It measures the air pressure in the switchboard', hi: 'यह स्विचबोर्ड में हवा के दबाव को मापता है', bn: 'এটি বাতাসের চাপ পরিমাপ করে' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'The test button connects a series resistor across the line and neutral across opposite sides of the toroid. The resulting unbalance current trips the breaker, proving the mechanical latch and relay work.',
        hi: 'टेस्ट बटन एक आंतरिक प्रतिरोधक जोड़कर कोर में कृत्रिम असंतुलन बनाता है, जिससे ब्रेकर तुरंत ट्रिप होकर अपनी यांत्रिक कार्यप्रणाली साबित करता है।',
        bn: 'টেস্ট বোতাম একটি রেজিস্টরের মাধ্যমে সিবিসিটির দুই পাশে অসামঞ্জস্য কারেন্ট তৈরি করে, যা মেকানিজম ট্রিপ করিয়ে কার্যকারিতা প্রমাণ করে।'
      }
    },
    {
      id: 'mcq-ch15-l06-07',
      question: {
        en: 'Which modern RCCB classification (Type) is mandatory for 3-phase Electric Vehicle (EV) charging stations capable of producing smooth DC residual fault currents?',
        hi: '3-फेज इलेक्ट्रिक वाहन (EV) चार्जिंग स्टेशनों के लिए कौन सा आधुनिक RCCB प्रकार (Type) अनिवार्य है जो स्मूथ DC लीकेज को भी पकड़ सके?',
        bn: 'থ্রি-ফেজ বৈদ্যুতিক গাড়ি (EV) চার্জিং স্টেশনে মসৃণ ডিসি লিকেজ শনাক্ত করতে কোন ধরনের আধুনিক আরসিসিবি ব্যবহার বাধ্যতামূলক?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Type AC', hi: 'टाइप AC', bn: 'টাইপ AC' } },
        { id: 'opt-2', text: { en: 'Type B', hi: 'टाइप B', bn: 'টাইপ B' } },
        { id: 'opt-3', text: { en: 'Type 0', hi: 'टाइप 0', bn: 'টাইপ 0' } },
        { id: 'opt-4', text: { en: 'Type Wood', hi: 'टाइप वुड', bn: 'টাইপ উড' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Type B RCCBs are engineered to detect smooth DC residual currents as well as high-frequency and AC residual currents, preventing DC saturation blinding in EV and solar installations.',
        hi: 'टाइप B RCCB स्मूथ DC लीकेज के साथ-साथ हाई फ्रीक्वेंसी और AC लीकेज को भी पहचानता है, जो EV चार्जिंग के लिए अनिवार्य है।',
        bn: 'টাইপ B আরসিসিবি বিশুদ্ধ মসৃণ ডিসি এবং উচ্চ কম্পাঙ্কের লিকেজ উভয়ই শনাক্ত করতে সক্ষম, যা ইভি চার্জিংয়ে অপরিহার্য।'
      }
    },
    {
      id: 'mcq-ch15-l06-08',
      question: {
        en: 'What is the device that combines both Miniature Circuit Breaker (MCB) and Residual Current Circuit Breaker (RCCB) protection inside a single compact modular unit called?',
        hi: 'एक ही कॉम्पैक्ट मॉड्यूलर यूनिट के अंदर MCB और RCCB दोनों सुरक्षा कार्यों को संयोजित करने वाले उपकरण को क्या कहा जाता है?',
        bn: 'একক মডিউলার কাঠামোর ভেতর একই সাথে এমসিবি (MCB) এবং আরসিসিবি (RCCB) উভয় সুবিধা সমন্বিত ডিভাইসটির নাম কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'RCBO (Residual Current Breaker with Overcurrent)', hi: 'RCBO (ओवरकरंट सुरक्षा युक्त अवशिष्ट धारा ब्रेकर)', bn: 'RCBO (রেসিডুয়াল কারেন্ট ব্রেকার উইথ ওভারকারেন্ট)' } },
        { id: 'opt-2', text: { en: 'LED bulb', hi: 'LED बल्ब', bn: 'এলইডি বাল্ব' } },
        { id: 'opt-3', text: { en: 'Step-up transformer', hi: 'स्टेप-अप ट्रांसफार्मर', bn: 'স্টেপ-আপ ট্রান্সফরমার' } },
        { id: 'opt-4', text: { en: 'Rheostat', hi: 'रिओस्टेट', bn: 'রিওস্ট্যাট' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'An RCBO incorporates bimetallic thermal overload, magnetic short-circuit solenoid, and toroidal differential earth leakage sensing into a single unit.',
        hi: 'RCBO में ओवरलोड, शॉर्ट-सर्किट और अर्थ लीकेज तीनों सुरक्षा तंत्र एक ही यूनिट में होते हैं।',
        bn: 'একটি RCBO-র ভেতরে ওভারলোড, শর্ট সার্কিট এবং আর্থ লিকেজ তিনটি সুরক্ষা ব্যবস্থা একক বডিতে সমন্বিত থাকে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch15-l06-01',
      question: {
        en: 'Explain why tying or sharing the neutral conductor between two independent RCCB-protected circuits causes both RCCBs to nuisance trip immediately when a load is energized.',
        hi: 'स्पष्ट कीजिए कि दो अलग-अलग RCCB-संरक्षित परिपथों के बीच न्यूट्रल तार को आपस में जोड़ने पर कोई भी लोड चालू करते ही दोनों RCCB तुरंत अनावश्यक ट्रिप क्यों हो जाते हैं।',
        bn: 'ব্যাখ্যা করুন কেন দুটি পৃথক আরসিসিবি সুরক্ষিত লাইনের নিউট্রাল তার পরস্পরের সাথে জোড়া লাগালে লোড চালু করামাত্র উভয় আরসিসিবি অনাকাঙ্ক্ষিতভাবে ট্রিপ করে।'
      },
      hint: {
        en: 'Current divides between both shared neutral paths based on impedance ratios, creating an artificial unbalance IL ≠ IN across both CBCT cores.',
        hi: 'धारा दोनों न्यूट्रल तारों में विभाजित हो जाती है, जिससे दोनों कोर में IL ≠ IN का असंतुलन बन जाता है।',
        bn: 'কারেন্ট দুটি সমান্তরাল নিউট্রাল তারে বিভক্ত হয়ে প্রবাহিত হওয়ায় উভয় সিবিসিটিতে IL ≠ IN অসামঞ্জস্য ঘটে এবং ট্রিপ করে।'
      }
    },
    {
      id: 'pq-ch15-l06-02',
      question: {
        en: 'A 230 V circuit has a continuous capacitive leakage current of 12 mA from long cable runs and computer EMC filters. If a technician touches the live conductor and draws 22 mA through their body, evaluate whether a standard 30 mA RCCB will trip.',
        hi: '230 V परिपथ में कंप्यूटर फिल्टर के कारण 12 mA का प्राकृतिक लीकेज है। यदि कोई व्यक्ति लाइव तार छूकर 22 mA अतिरिक्त धारा खींचता है, तो मूल्यांकन करें कि क्या 30 mA RCCB ट्रिप होगी।',
        bn: '২৩০ V লাইনে স্বাভাবিক ক্যাপাসিটিভ লিকেজ ১২ mA। এক কর্মী লাইভ তার স্পর্শ করায় অতিরিক্ত ২২ mA কারেন্ট মাটিতে গেলে ৩০ mA আরসিসিবি কি ট্রिप করবে?'
      },
      hint: {
        en: 'Total vector residual leakage = 12 mA + 22 mA = 34 mA (assuming in-phase resistive worst-case). Since 34 mA > 30 mA, the breaker trips reliably.',
        hi: 'कुल लीकेज = 12 + 22 = 34 mA। चूंकि 34 mA > 30 mA, अतः RCCB निश्चित रूप से ट्रिप होगी।',
        bn: 'মোট লিকেজ কারেন্ট = ১২ + ২২ = ৩৪ mA। যেহেতু ৩৪ mA > ৩০ mA, তাই আরসিসিবি নিশ্চিতভাবে ট্রिप করবে।'
      }
    }
  ]
};
'''

with open('src/data/chapter15Lesson6.ts', 'w', encoding='utf-8') as f:
  f.write(lesson6_code)

print("Created src/data/chapter15Lesson6.ts")
