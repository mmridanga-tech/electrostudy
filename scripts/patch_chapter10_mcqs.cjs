const fs = require('fs');
const path = require('path');

const NEW_MCQS = {
  1: [
    {
      id: 'mcq-ch10-l01-04',
      question: {
        en: 'A 500-turn coil experiences a magnetic flux change from 0.02 Wb to 0.05 Wb in 0.1 s. What is the magnitude of the average induced EMF?',
        hi: '500 फेरों वाली एक कुंडली में चुंबकीय फ्लक्स 0.1 सेकंड में 0.02 Wb से बदलकर 0.05 Wb हो जाता है। औसत प्रेरित ईएमएफ का परिमाण क्या है?',
        bn: '৫০০ পাকের একটি কয়েলে ০.১ সেকেন্ডে চৌম্বক ফ্লাক্স ০.০২ Wb থেকে পরিবর্তিত হয়ে ০.০৫ Wb হয়। গড় আবিষ্ট ইএমএফ এর মান কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '15 V', hi: '15 V', bn: '১৫ V' } },
        { id: 'opt-2', text: { en: '150 V', hi: '150 V', bn: '১৫০ V' } },
        { id: 'opt-3', text: { en: '1500 V', hi: '1500 V', bn: '১৫০০ V' } },
        { id: 'opt-4', text: { en: '0.15 V', hi: '0.15 V', bn: '০.১৫ V' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'According to Faraday’s second law, e = N · (ΔΦ / Δt) = 500 × (0.05 - 0.02) / 0.1 = 500 × 0.03 / 0.1 = 150 V.',
        hi: 'फैराडे के द्वितीय नियम के अनुसार, e = N · (ΔΦ / Δt) = 500 × (0.05 - 0.02) / 0.1 = 500 × 0.3 = 150 V।',
        bn: 'ফ্যারাডের দ্বিতীয় সূত্রানুযায়ী, e = N · (ΔΦ / Δt) = ৫০০ × (০.০৫ - ০.০২) / ০.১ = ৫০০ × ০.৩ = ১৫০ V।'
      }
    },
    {
      id: 'mcq-ch10-l01-05',
      question: {
        en: 'What is the SI unit of magnetic flux linkage (λ = NΦ)?',
        hi: 'चुंबकीय फ्लक्स लिंकेज (λ = NΦ) का SI मात्रक क्या है?',
        bn: 'চৌম্বক ফ্লাক্স লিংকেজের (λ = NΦ) এসআই একক কোনটি?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Weber-turn (Wb·t) or Volt-second (V·s)', hi: 'वेबर-टर्न (Wb·t) अथवा वोल्ट-सेकंड (V·s)', bn: 'ওয়েবার-টার্ন (Wb·t) বা ভোল্ট-সেকেন্ড (V·s)' } },
        { id: 'opt-2', text: { en: 'Tesla per meter (T/m)', hi: 'टेस्ला प्रति मीटर (T/m)', bn: 'টেসলা প্রতি মিটার (T/m)' } },
        { id: 'opt-3', text: { en: 'Henry per Ampere (H/A)', hi: 'हेनरी प्रति एम्पियर (H/A)', bn: 'হেনরি প্রতি অ্যাম্পিয়ার (H/A)' } },
        { id: 'opt-4', text: { en: 'Volt per second (V/s)', hi: 'वोल्ट प्रति सेकंड (V/s)', bn: 'ভোল্ট প্রতি সেকেন্ড (V/s)' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Magnetic flux linkage λ = NΦ is measured in Weber-turns (Wb·t) or equivalently Volt-seconds (V·s) since 1 Wb = 1 V·s.',
        hi: 'चुंबकीय फ्लक्स लिंकेज λ = NΦ का मात्रक वेबर-टर्न (Wb·t) या वोल्ट-सेकंड (V·s) होता है क्योंकि 1 Wb = 1 V·s।',
        bn: 'চৌম্বক ফ্লাক্স লিংকেজ λ = NΦ এর একক হলো ওয়েবার-টার্ন (Wb·t) বা ভোল্ট-সেকেন্ড (V·s), কারণ ১ Wb = ১ V·s।'
      }
    },
    {
      id: 'mcq-ch10-l01-06',
      question: {
        en: 'Which physical condition will NOT induce an electromotive force (EMF) in a stationary circular wire loop?',
        hi: 'स्थिर वृत्ताकार तार के लूप में कौन सी स्थिति ईएमएफ प्रेरित नहीं करेगी?',
        bn: 'একটি স্থির বৃত্তাকার তারের লুপে কোন পরিস্থিতিতে কোনো ইএমএফ আবিষ্ট হবে না?'
      },
      options: [
        { id: 'opt-1', text: { en: 'An external uniform magnetic field increasing at a constant rate of 2 T/s', hi: 'एक बाहरी समान चुंबकीय क्षेत्र जो 2 T/s की स्थिर दर से बढ़ रहा हो', bn: 'একটি বহিঃস্থ সুষম চৌম্বক ক্ষেত্র যা ২ T/s স্থির হারে বৃদ্ধি পাচ্ছে' } },
        { id: 'opt-2', text: { en: 'An external uniform magnetic field remaining completely constant over time', hi: 'एक बाहरी समान चुंबकीय क्षेत्र जो समय के साथ पूरी तरह स्थिर रहता हो', bn: 'একটি বহিঃস্থ সুষম চৌম্বক ক্ষেত্র যা সময়ের সাথে সম্পূর্ণ অপরিবর্তিত থাকে' } },
        { id: 'opt-3', text: { en: 'An alternating 50 Hz AC magnetic field passing through the loop', hi: 'एक प्रत्यावर्ती 50 Hz एसी चुंबकीय क्षेत्र जो लूप से होकर गुजरता हो', bn: 'একটি পরিবর্তী ৫০ হার্টজ এসি চৌম্বক ক্ষেত্র যা লুপের মধ্য দিয়ে যায়' } },
        { id: 'opt-4', text: { en: 'A permanent bar magnet moving rapidly toward the loop center', hi: 'एक स्थायी छड़ चुंबक जो लूप के केंद्र की ओर तेजी से गति कर रहा हो', bn: 'একটি স্থায়ী দণ্ডচুম্বক যা লুপের কেন্দ্রের দিকে দ্রুত গতিশীল' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Faraday’s law requires a time-varying magnetic flux (dΦ/dt ≠ 0). A constant magnetic field produces dΦ/dt = 0, so no EMF is induced.',
        hi: 'फैराडे के नियम के लिए समय के साथ बदलते चुंबकीय फ्लक्स (dΦ/dt ≠ 0) की आवश्यकता होती है। स्थिर चुंबकीय क्षेत्र में dΦ/dt = 0 होता है, अतः कोई EMF नहीं बनता।',
        bn: 'ফ্যারাডের সূত্রানুযায়ী ইএমএফ সৃষ্টির জন্য সময়ের সাথে ফ্লাক্সের পরিবর্তন (dΦ/dt ≠ ০) প্রয়োজন। স্থির চৌম্বক ক্ষেত্রে dΦ/dt = ০, তাই কোনো ইএমএফ আবিষ্ট হয় না।'
      }
    },
    {
      id: 'mcq-ch10-l01-07',
      question: {
        en: 'If the rate of change of magnetic flux through a closed coil is doubled while the coil circuit resistance is halved, the induced current becomes:',
        hi: 'यदि किसी बंद कुंडली में फ्लक्स परिवर्तन की दर दोगुनी कर दी जाए और कुंडली का प्रतिरोध आधा कर दिया जाए, तो प्रेरित धारा होगी:',
        bn: 'যদি কোনো বদ্ধ কয়েলে ফ্লাক্স পরিবর্তনের হার দ্বিগুণ করা হয় এবং কয়েলের রোধ অর্ধেক করা হয়, তবে আবিষ্ট কারেন্ট হবে:'
      },
      options: [
        { id: 'opt-1', text: { en: 'Unchanged (1×)', hi: 'अपरिवर्तित (1×)', bn: 'অপরিবর্তিত (১×)' } },
        { id: 'opt-2', text: { en: 'Doubled (2×)', hi: 'दोगुनी (2×)', bn: 'দ্বিগুণ (২×)' } },
        { id: 'opt-3', text: { en: 'Quadrupled (4×)', hi: 'चार गुनी (4×)', bn: 'चार গুণ (৪×)' } },
        { id: 'opt-4', text: { en: 'Halved (0.5×)', hi: 'आधी (0.5×)', bn: 'অর্ধেক (০.৫×)' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'Doubling dΦ/dt doubles the induced EMF (e’ = 2e). Since induced current is I = e / R, halving R gives I’ = (2e) / (R/2) = 4(e/R) = 4I.',
        hi: 'dΦ/dt को दोगुना करने से EMF दोगुना हो जाता है (e’ = 2e)। चूंकि I = e/R, अतः R को आधा करने पर धारा I’ = 2e / (R/2) = 4I (चार गुनी) हो जाती है।',
        bn: 'dΦ/dt দ্বিগুণ হলে আবিষ্ট EMF দ্বিগুণ হয় (e’ = 2e)। কারেন্ট I = e/R হওয়ায় রোধ অর্ধেক করলে I’ = 2e / (R/2) = 4I (চার গুণ) হয়।'
      }
    },
    {
      id: 'mcq-ch10-l01-08',
      question: {
        en: 'When alternating sinusoidal magnetic flux Φ(t) = Φ_m sin(ωt) links a coil of N turns, the induced EMF e = -N(dΦ/dt) has a phase relationship such that it:',
        hi: 'जब ज्यावक्रीय फ्लक्स Φ(t) = Φ_m sin(ωt) N फेरों वाली कुंडली से जुड़ता है, तो प्रेरित ईएमएफ e = -N(dΦ/dt) का कला संबंध होता है कि यह:',
        bn: 'যখন সাইনোসয়ডাল ফ্লাক্স Φ(t) = Φ_m sin(ωt) N পাকের কয়েলকে যুক্ত করে, তখন আবিষ্ট ইএমএফ e = -N(dΦ/dt) এর ফেজ সম্পর্ক হলো এটি:'
      },
      options: [
        { id: 'opt-1', text: { en: 'Leads the flux by 90°', hi: 'फ्लक्स से 90° आगे (lead) रहता है', bn: 'ফ্লাক্স থেকে ৯০° এগিয়ে (lead) থাকে' } },
        { id: 'opt-2', text: { en: 'Lags the flux by 90°', hi: 'फ्लक्स से 90° पीछे (lag) रहता है', bn: 'ফ্লাক্স থেকে ৯০° পিছিয়ে (lag) থাকে' } },
        { id: 'opt-3', text: { en: 'Is in identical phase with the flux (0° phase shift)', hi: 'फ्लक्स के साथ समान कला (0°) में रहता है', bn: 'ফ্লাক্সের সাথে সমদশা (০°) থাকে' } },
        { id: 'opt-4', text: { en: 'Is in exact phase opposition (180°) without any quadrature component', hi: 'बिना किसी लंबवत घटक के ठीक 180° विपरीत रहता है', bn: 'কোনো সমকোণী অংশ ছাড়াই সম্পূর্ণ ১৮০° বিপরীতে থাকে' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'e(t) = -N d(Φ_m sin ωt)/dt = -N ω Φ_m cos(ωt) = N ω Φ_m sin(ωt - 90°). Therefore, the induced EMF waveform lags the magnetic flux by 90° in phase.',
        hi: 'e(t) = -N ω Φ_m cos(ωt) = N ω Φ_m sin(ωt - 90°)। अतः प्रेरित EMF ज्यावक्रीय फ्लक्स से कला में 90° पीछे (lag) रहता है।',
        bn: 'e(t) = -N ω Φ_m cos(ωt) = N ω Φ_m sin(ωt - ৯০°)। সুতরাং আবিষ্ট EMF তরঙ্গ চৌম্বক ফ্লাক্সের চেয়ে ৯০° ফেজে পিছিয়ে (lag) থাকে।'
      }
    }
  ],
  2: [
    {
      id: 'mcq-ch10-l02-04',
      question: {
        en: 'A strong neodymium magnet is dropped vertically through an open vertical copper pipe. The magnet accelerates briefly and then falls:',
        hi: 'एक शक्तिशाली नियोडिमियम चुंबक को तांबे के लंबवत खुले पाइप में गिराया जाता है। चुंबक थोड़ा त्वरित होकर फिर गिरता है:',
        bn: 'একটি শক্তিশালী নিওডিমিয়াম চুম্বককে উল্লম্ব তামার নলের মধ্য দিয়ে ফেলা হলে, চুম্বকটি সামান্য ত্বরান্বিত হওয়ার পর:'
      },
      options: [
        { id: 'opt-1', text: { en: 'With standard gravitational acceleration g = 9.8 m/s²', hi: 'सामान्य गुरुत्वीय त्वरण g = 9.8 m/s² के साथ', bn: 'স্বাভাবিক অভিকর্ষজ ত্বরণ g = ৯.৮ m/s² বেগে' } },
        { id: 'opt-2', text: { en: 'At a steady terminal velocity much slower than free fall due to opposing eddy current forces', hi: 'विरोधी भंवर धारा बलों के कारण मुक्त पतन से बहुत धीमी स्थिर टर्मिनल गति से', bn: 'বাধা সৃষ্টিকারী এডি কারেন্টের কারণে মুক্ত পতনের চেয়ে অনেক কম স্থির প্রান্তিক বেগে' } },
        { id: 'opt-3', text: { en: 'With ever-increasing acceleration exceeding 2g', hi: '2g से अधिक लगातार बढ़ते त्वरण के साथ', bn: '২g এর চেয়েও ক্রমাগত দ্রুততর ত্বরণে' } },
        { id: 'opt-4', text: { en: 'It bounces backward out of the top entrance of the pipe', hi: 'यह पाइप के ऊपरी सिरे से वापस उछल जाता है', bn: 'এটি নলের ওপরের মুখ দিয়ে পেছনে ফিরে আসে' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'As the magnet falls, changing magnetic flux induces eddy currents in the copper wall. By Lenz’s law, these currents create an upward opposing magnetic force that balances gravity, establishing a slow constant terminal velocity.',
        hi: 'चुंबक के गिरने से तांबे में भंवर धाराएं उत्पन्न होती हैं। लेंज के नियम से ये धाराएं ऊपर की ओर विरोधी चुंबकीय बल लगाती हैं, जिससे चुंबक धीमी टर्मिनल गति प्राप्त कर लेता है।',
        bn: 'চুম্বক পড়ার সময় তামার দেয়ালে এডি কারেন্ট আবিষ্ট হয়। লেনজের সূত্রানুযায়ী এই কারেন্ট ওপরের দিকে বাধাদায়ী বল প্রয়োগ করে মহাকর্ষ বলকে প্রশমিত করে এবং ধীর প্রান্তিক বেগ দেয়।'
      }
    },
    {
      id: 'mcq-ch10-l02-05',
      question: {
        en: 'If the induced EMF acted in a direction to reinforce rather than oppose the change in magnetic flux, what fundamental law of physics would be violated?',
        hi: 'यदि प्रेरित EMF चुंबकीय फ्लक्स के परिवर्तन का विरोध करने के बजाय उसे और बढ़ाने की दिशा में कार्य करता, तो भौतिकी के किस नियम का उल्लंघन होता?',
        bn: 'যদি আবিষ্ট EMF চৌম্বক ফ্লাক্স পরিবর্তনের বিরোধিতা না করে তা বৃদ্ধি করার দিকে কাজ করত, তবে পদার্থবিজ্ঞানের কোন মৌলিক সূত্র লঙ্ঘিত হতো?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The Law of Conservation of Energy', hi: 'ऊर्जा संरक्षण का नियम', bn: 'শক্তি সংরক্ষণ সূত্র' } },
        { id: 'opt-2', text: { en: 'Newton’s First Law of Inertia', hi: 'न्यूटन का जड़त्व का प्रथम नियम', bn: 'নিউটনের প্রথম গতিসূত্র' } },
        { id: 'opt-3', text: { en: 'Coulomb’s Law of Electrostatics', hi: 'कूलॉम का स्थिरवैद्युत नियम', bn: 'কুলম্বের স্থিরতাড়িতিক সূত্র' } },
        { id: 'opt-4', text: { en: 'Snell’s Law of Refraction', hi: 'स्नेल का अपवर्तन नियम', bn: 'স্নেলের প্রতিসরণ সূত্র' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'If induced current aided flux change, current and magnetic field would grow indefinitely without external work, creating infinite energy from nothing and violating the Law of Conservation of Energy.',
        hi: 'यदि धारा फ्लक्स वृद्धि में सहायता करती, तो बिना किसी बाहरी कार्य के ऊर्जा अनंत रूप से बढ़ती जाती, जो ऊर्जा संरक्षण के नियम का सीधा उल्लंघन होता।',
        bn: 'কারেন্ট যদি ফ্লাক্স বৃদ্ধিতে সহায়তা করত, তবে কোনো বহিঃস্থ কাজ ছাড়াই শক্তি আপনা-আপনি অসীম পর্যন্ত বৃদ্ধি পেত, যা শক্তি সংরক্ষণ সূত্রের ঘোর বিরোধী।'
      }
    },
    {
      id: 'mcq-ch10-l02-06',
      question: {
        en: 'When the South pole of a bar magnet is moved rapidly away from the front face of a stationary coil, the front face of the coil develops:',
        hi: 'जब किसी छड़ चुंबक के दक्षिणी ध्रुव को स्थिर कुंडली के सामने से तेजी से दूर ले जाया जाता है, तो कुंडली के सामने का सिरा विकसित करता है:',
        bn: 'যখন কোনো দণ্ডচুম্বকের দক্ষিণ মেরুকে একটি স্থির কয়েলের সম্মুখভাগ থেকে দ্রুত দূরে সরিয়ে নেওয়া হয়, তখন কয়েলের সম্মুখভাগে উৎপন্ন হয়:'
      },
      options: [
        { id: 'opt-1', text: { en: 'A North magnetic pole that attracts the receding South pole to oppose withdrawal', hi: 'एक उत्तरी चुंबकीय ध्रुव जो दूर जाते दक्षिणी ध्रुव को आकर्षित कर दूर जाने का विरोध करता है', bn: 'একটি উত্তর মেরু যা অপসৃয়মাণ দক্ষিণ মেরুকে আকর্ষণ করে দূরে সরার বিরোধিতা করে' } },
        { id: 'opt-2', text: { en: 'A South magnetic pole that repels the magnet further away', hi: 'एक दक्षिणी चुंबकीय ध्रुव जो चुंबक को और दूर धकेलता है', bn: 'একটি দক্ষিণ মেরু যা চুম্বককে আরও দূরে ঠেলে দেয়' } },
        { id: 'opt-3', text: { en: 'Zero magnetic polarity because the magnet is moving away', hi: 'शून्य चुंबकीय ध्रुवता क्योंकि चुंबक दूर जा रहा है', bn: 'কোনো চৌম্বক মেরু তৈরি হয় না কারণ চুম্বক দূরে যাচ্ছে' } },
        { id: 'opt-4', text: { en: 'An electrostatic positive charge only', hi: 'केवल स्थिरवैद्युत धनात्मक आवेश', bn: 'কেবল স্থিরতাড়িতিক ধনাত্মক আধান' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'By Lenz’s law, the induced current opposes the withdrawal of the magnet. To oppose the South pole moving away, the coil face induces a North pole to exert an attractive force.',
        hi: 'लेंज के नियम से प्रेरित धारा चुंबक के दूर जाने का विरोध करती है। अतः दक्षिणी ध्रुव को दूर जाने से रोकने के लिए कुंडली अपने सामने उत्तरी ध्रुव बनाती है ताकि उसे आकर्षित कर सके।',
        bn: 'লেনজের সূত্রানুযায়ী আবিষ্ট কারেন্ট চুম্বকের দূরে সরে যাওয়ার বিরোধিতা করে। দক্ষিণ মেরুর অপসরণ রোধ করতে কয়েলের মুখে উত্তর মেরুর সৃষ্টি হয় যাতে তা আকর্ষণ বল সৃষ্টি করে।'
      }
    },
    {
      id: 'mcq-ch10-l02-07',
      question: {
        en: 'In Elihu Thomson’s famous jumping ring experiment, why does a light aluminum ring placed over an AC-energized iron-core solenoid shoot violently upward?',
        hi: 'एलिहू थॉमसन के प्रसिद्ध जंपिंग रिंग प्रयोग में, एसी धारा से सक्रिय लोहे के कोर वाले सोलनॉइड पर रखी एल्यूमीनियम की अंगूठी तेजी से ऊपर क्यों उछल जाती है?',
        bn: 'এলিহু থমসনের বিখ্যাত জাম্পিং রিং পরীক্ষায়, এসি বিদ্যুতে সচল লোহার কোরযুক্ত সলেনয়েডের ওপর রাখা অ্যালুমিনিয়াম রিং তীব্র বেগে ওপরে লাফিয়ে ওঠে কেন?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Induced eddy currents in the ring produce a magnetic field that repels the primary alternating flux', hi: 'अंगूठी में प्रेरित भंवर धाराएं ऐसा चुंबकीय क्षेत्र बनाती हैं जो प्राथमिक फ्लक्स का विरोध और प्रतिकर्षण करता है', bn: 'রিংয়ে আবিষ্ট এডি কারেন্ট এমন একটি চৌম্বক ক্ষেত্র তৈরি করে যা প্রাথমিক পরিবর্তী ফ্লাক্সকে বিকর্ষণ করে' } },
        { id: 'opt-2', text: { en: 'The aluminum ring melts instantly and evaporates', hi: 'एल्यूमीनियम की अंगूठी तुरंत पिघलकर वाष्पित हो जाती है', bn: 'অ্যালুমিনিয়াম রিংটি মুহূর্তে গলে বাষ্পীভূত হয়' } },
        { id: 'opt-3', text: { en: 'Thermal air convection pushes the ring upward', hi: 'गर्म हवा का संवहन अंगूठी को ऊपर धकेलता है', bn: 'উত্তপ্ত বায়ুর পরিচলন রিংটিকে ওপরে ঠেলে দেয়' } },
        { id: 'opt-4', text: { en: 'Static electricity charges the ring negatively against the ground', hi: 'स्थिर बिजली अंगूठी को जमीन के सापेक्ष ऋणावेशित कर देती है', bn: 'স্থির বিদ্যুৎ রিংটিকে মাটির সাপেক্ষে ঋণাত্মক আধান দেয়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'The rising AC flux induces large circumferential eddy currents in the ring. By Lenz’s law, the magnetic polarity of the ring opposes the solenoid field, generating a strong repulsive Lorentz force that flings the ring upward.',
        hi: 'बढ़ता हुआ एसी फ्लक्स अंगूठी में तेज भंवर धाराएं बनाता है। लेंज के नियम से अंगूठी का चुंबकीय क्षेत्र सोलनॉइड के क्षेत्र के विपरीत होता है, जिससे लगा प्रतिकर्षण बल अंगूठी को ऊपर उछाल देता है।',
        bn: 'ক্রমবর্ধমান এসি ফ্লাক্স রিংয়ে প্রবল এডি কারেন্ট আবিষ্ট করে। লেনজের সূত্রানুযায়ী রিংটির চৌম্বক দিক সলেনয়েডের বিপরীত হওয়ায় শক্তিশালী বিকর্ষণ বল রিংটিকে ওপরে ছুড়ে দেয়।'
      }
    },
    {
      id: 'mcq-ch10-l02-08',
      question: {
        en: 'A conducting loop of resistance R and width l is pulled with constant velocity v out of a uniform perpendicular magnetic field B. The external mechanical power supplied equals:',
        hi: 'R प्रतिरोध और l चौड़ाई वाले एक चालक लूप को समान चुंबकीय क्षेत्र B से बाहर नियत वेग v से खींचा जाता है। प्रदान की गई बाहरी यांत्रिक शक्ति बराबर होती है:',
        bn: 'R রোধ এবং l প্রস্থের একটি পরিবাহী লুপকে সমান্তরাল সুষম চৌম্বক ক্ষেত্র B থেকে স্থির বেগ v তে বাইরে টানা হচ্ছে। প্রযুক্ত বহিঃস্থ যান্ত্রিক ক্ষমতা কার সমান?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The electrical Joule heating rate I²R = (B² l² v²) / R in the loop', hi: 'लूप में विद्युत जूल तापीय दर I²R = (B² l² v²) / R के', bn: 'লুপের বৈদ্যুতিক জুল তাপীয় অপচয় হার I²R = (B² l² v²) / R এর সমান' } },
        { id: 'opt-2', text: { en: 'Zero, because magnetic forces do no work', hi: 'शून्य, क्योंकि चुंबकीय बल कोई कार्य नहीं करते', bn: 'শূন্য, কারণ চৌম্বক বল কোনো কাজ করে না' } },
        { id: 'opt-3', text: { en: 'Half the electrical dissipation rate', hi: 'विद्युत अपव्यय दर की आधी', bn: 'বৈদ্যুতিক অপচয়ের অর্ধেক' } },
        { id: 'opt-4', text: { en: 'The square of the gravitational potential energy', hi: 'गुरुत्वीय स्थितिज ऊर्जा के वर्ग के', bn: 'অভিকর্ষজ বিভব শক্তির বর্গের সমান' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Conservation of energy dictates that 100% of the mechanical work performed against the retarding Lorentz force (F_mag = B²l²v/R, P_mech = F·v = B²l²v²/R) converts directly into electrical Joule heating (I²R).',
        hi: 'ऊर्जा संरक्षण के अनुसार विरोधी लोरेंत्ज़ बल के विरुद्ध किया गया यांत्रिक कार्य (P = F·v = B²l²v²/R) सीधे लूप में विद्युत जूल ऊष्मा (I²R) में परिवर्तित होता है।',
        bn: 'শক্তি সংরক্ষণ নীতি অনুসারে বাধাদায়ী লরেন্টজ বলের বিরুদ্ধে কৃত যান্ত্রিক কাজ (P = F·v = B²l²v²/R) শতভাগ সরাসরি কয়েলের বৈদ্যুতিক জুল তাপে (I²R) রূপান্তরিত হয়।'
      }
    }
  ],
  3: [
    {
      id: 'mcq-ch10-l03-04',
      question: {
        en: 'Fleming’s Right-Hand Rule is specifically applied to find the direction of induced current in which type of electrical apparatus?',
        hi: 'फ्लेमिंग का दायां हाथ नियम विशेष रूप से किस प्रकार के विद्युत उपकरण में प्रेरित धारा की दिशा ज्ञात करने के लिए लगाया जाता है?',
        bn: 'ফ্লেমিংয়ের ডান হস্ত নিয়ম বিশেষভাবে কোন ধরনের বৈদ্যুতিক যন্ত্রে আবিষ্ট কারেন্টের দিক নির্ণয়ে ব্যবহৃত হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Electrical generators (dynamos and alternators)', hi: 'विद्युत जनरेटर (डायनेमो और अल्टरनेटर)', bn: 'বৈদ্যুতিক জেনারেটর (ডায়নামো ও অল্টারনেটর)' } },
        { id: 'opt-2', text: { en: 'Electric motors providing mechanical drive', hi: 'विद्युत मोटरें जो यांत्रिक गति देती हैं', bn: 'বৈদ্যুতিক মোটর যা যান্ত্রিক ঘূর্ণন তৈরি করে' } },
        { id: 'opt-3', text: { en: 'Electrostatic air filters', hi: 'स्थिरवैद्युत वायु शोधक', bn: 'ইলেক্ট্রোস্ট্যাটিক এয়ার ফিল্টার' } },
        { id: 'opt-4', text: { en: 'Chemical lead-acid storage batteries', hi: 'रासायनिक लेड-एसिड बैटरी', bn: 'রাসায়নিক লেড-অ্যাসিড ব্যাটারি' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Fleming’s Right-Hand Rule is specifically designed for generators (dynamo rule), determining induced current from conductor motion across a magnetic field.',
        hi: 'फ्लेमिंग का दायां हाथ नियम विशेष रूप से जनरेटर (डायनेमो) के लिए बनाया गया है, जो गति और चुंबकीय क्षेत्र से प्रेरित धारा की दिशा बताता है।',
        bn: 'ফ্লেমিংয়ের ডান হস্ত নিয়মটি বিশেষভাবে জেনারেটরের ক্ষেত্রে প্রযোজ্য, যা চৌম্বক ক্ষেত্রে পরিবাহীর গতির ফলে সৃষ্ট আবিষ্ট কারেন্টের দিক নির্দেশ করে।'
      }
    },
    {
      id: 'mcq-ch10-l03-05',
      question: {
        en: 'When setting up Fleming’s Right-Hand Rule, the relative spatial orientation between the thumb, forefinger, and middle finger must be:',
        hi: 'फ्लेमिंग के दाएं हाथ के नियम को लागू करते समय अंगूठे, तर्जनी और मध्यमा के बीच पारस्परिक स्थिति क्या होनी चाहिए?',
        bn: 'ফ্লেমিংয়ের ডান হস্ত নিয়ম প্রয়োগের সময় বৃদ্ধাঙ্গুলি, তর্জনী ও মধ্যমার মধ্যকার পারস্পরিক অবস্থান কেমন হতে হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Mutually perpendicular (at right angles, 90° to each other)', hi: 'परस्पर लंबवत (एक-दूसरे से 90° के समकोण पर)', bn: 'পরস্পর সমকোণে (একে অপরের সাথে ৯০° কোণে)' } },
        { id: 'opt-2', text: { en: 'Parallel in the same plane at 45°', hi: 'एक ही तल में 45° पर समानांतर', bn: 'একই তলে ৪৫° কোণে সমান্তরাল' } },
        { id: 'opt-3', text: { en: 'Folded tightly into a closed fist', hi: 'मुट्ठी के रूप में कसकर बंद', bn: 'মুষ্টিবদ্ধ অবস্থায় ভাঁজ করা' } },
        { id: 'opt-4', text: { en: 'Collinear along a single straight axis', hi: 'एक ही सीधी रेखा के अनुदिश', bn: 'একটি সরলরেখা বরাবর' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'The thumb (motion), forefinger (magnetic field), and middle finger (induced current) must be held mutually orthogonal at 90° angles to represent 3D Cartesian coordinates.',
        hi: 'अंगूठा (गति), तर्जनी (चुंबकीय क्षेत्र) और मध्यमा (प्रेरित धारा) तीनों को परस्पर 90° के समकोण पर रखना अनिवार्य है।',
        bn: 'বৃদ্ধাঙ্গুলি (গতি), তর্জনী (চৌম্বক ক্ষেত্র) এবং মধ্যমা (আবিষ্ট কারেন্ট)-এই তিনটিকে পরস্পরের সাথে সমকোণে (৯০°) ধরে রাখতে হয়।'
      }
    },
    {
      id: 'mcq-ch10-l03-06',
      question: {
        en: 'A horizontal conductor aligned North-South is moved vertically upwards through a uniform horizontal magnetic field pointing from East to West. In what direction does induced current flow?',
        hi: 'उत्तर-दक्षिण दिशा में रखे एक क्षैतिज चालक को पूर्व से पश्चिम की ओर दिष्ट समान चुंबकीय क्षेत्र में लंबवत ऊपर की ओर ले जाया जाता है। प्रेरित धारा किस दिशा में बहेगी?',
        bn: 'উত্তর-দক্ষিণ বরাবর রাখা একটি অনুভূমিক পরিবাহীকে পূর্ব থেকে পশ্চিমে ক্রিয়াশীল সুষম চৌম্বক ক্ষেত্রে খাড়া ওপরের দিকে গতিশীল করা হলো। আবিষ্ট কারেন্ট কোন দিকে প্রবাহিত হবে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'From South to North along the conductor', hi: 'चालक में दक्षिण से उत्तर की ओर', bn: 'পরিবাহীর মধ্য দিয়ে দক্ষিণ থেকে উত্তর দিকে' } },
        { id: 'opt-2', text: { en: 'From North to South along the conductor', hi: 'चालक में उत्तर से दक्षिण की ओर', bn: 'পরিবাহীর মধ্য দিয়ে উত্তর থেকে দক্ষিণ দিকে' } },
        { id: 'opt-3', text: { en: 'Vertically downward into the ground', hi: 'लंबवत नीचे जमीन की ओर', bn: 'খাড়া নিচের দিকে মাটির ভেতরে' } },
        { id: 'opt-4', text: { en: 'Directly toward the East', hi: 'सीधे पूर्व दिशा की ओर', bn: 'সরাসরি পূর্ব দিকে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Using Fleming’s Right-Hand Rule: Thumb points Upwards (motion), Forefinger points West (field). The middle finger naturally points North (induced current flows from South to North).',
        hi: 'फ्लेमिंग के दाएं हाथ के नियम से: अंगूठा ऊपर (गति), तर्जनी पश्चिम (क्षेत्र)। तब मध्यमा उत्तर की ओर इंगित करती है (धारा दक्षिण से उत्तर की ओर बहेगी)।',
        bn: 'ফ্লেমিংয়ের ডান হস্ত নিয়ম অনুসারে: বৃদ্ধাঙ্গুলি ওপরের দিকে (গতি), তর্জনী পশ্চিম দিকে (ক্ষেত্র)। তখন মধ্যমা উত্তর নির্দেশ করে (কারেন্ট দক্ষিণ থেকে উত্তরে প্রবাহিত হবে)।'
      }
    },
    {
      id: 'mcq-ch10-l03-07',
      question: {
        en: 'What is the primary fundamental distinction between Fleming’s Right-Hand Rule and Fleming’s Left-Hand Rule?',
        hi: 'फ्लेमिंग के दाएं हाथ के नियम और बाएं हाथ के नियम के बीच मुख्य मौलिक अंतर क्या है?',
        bn: 'ফ্লেমিংয়ের ডান হস্ত নিয়ম এবং বাম হস্ত নিয়মের মধ্যকার প্রধান মৌলিক পার্থক্য কোনটি?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Right-Hand Rule determines induced current in generators; Left-Hand Rule determines mechanical force in motors', hi: 'दायां हाथ नियम जनरेटर में प्रेरित धारा ज्ञात करता है; बायां हाथ नियम मोटर में यांत्रिक बल ज्ञात करता है', bn: 'ডান হস্ত নিয়ম জেনারেটরে আবিষ্ট কারেন্ট নির্ণয় করে; বাম হস্ত নিয়ম মোটরে যান্ত্রিক বল নির্ণয় করে' } },
        { id: 'opt-2', text: { en: 'Right-Hand Rule applies only to DC; Left-Hand Rule applies only to AC', hi: 'दायां हाथ नियम केवल डीसी पर और बायां हाथ केवल एसी पर लागू होता है', bn: 'ডান হস্ত নিয়ম শুধু ডিসিতে এবং বাম হস্ত শুধু এসিতে প্রযোজ্য' } },
        { id: 'opt-3', text: { en: 'Right-Hand Rule is for electrostatic charges; Left-Hand Rule is for magnetic poles', hi: 'दायां हाथ नियम आवेशों के लिए है और बायां हाथ चुंबकीय ध्रुवों के लिए', bn: 'ডান হস্ত নিয়ম স্থির আধানের জন্য এবং বাম হস্ত চৌম্বক মেরুর জন্য' } },
        { id: 'opt-4', text: { en: 'They are completely identical and can be used interchangeably', hi: 'दोनों बिल्कुल समान हैं और एक-दूसरे के स्थान पर प्रयुक्त हो सकते हैं', bn: 'উভয় নিয়ম সম্পূর্ণ অভিন্ন এবং পারস্পরিকভাবে পরিবর্তনযোগ্য' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Fleming’s Right-Hand Rule governs electrical generation (finding induced current), whereas Fleming’s Left-Hand Rule governs motorized electromagnetic actuation (finding mechanical thrust).',
        hi: 'दायां हाथ नियम जनरेटर प्रभाव (विद्युत उत्पादन) के लिए है, जबकि बायां हाथ नियम मोटर प्रभाव (यांत्रिक बल) के लिए है।',
        bn: 'ফ্লেমিংয়ের ডান হস্ত নিয়ম জেনারেটরের ক্ষেত্রে (কারেন্ট উৎপাদন) এবং বাম হস্ত নিয়ম মোটরের ক্ষেত্রে (যান্ত্রিক বল) প্রযোজ্য।'
      }
    },
    {
      id: 'mcq-ch10-l03-08',
      question: {
        en: 'A straight wire of active length 0.4 m moves at 15 m/s through a uniform magnetic field B = 0.8 T at an angle of 30° to the flux lines. What is the induced EMF?',
        hi: '0.4 m सक्रिय लंबाई का एक सीधा तार 0.8 T के समान चुंबकीय क्षेत्र में फ्लक्स रेखाओं से 30° के कोण पर 15 m/s से गति करता है। प्रेरित EMF क्या है?',
        bn: '০.৪ মিটার কার্যকরী দৈর্ঘ্যের একটি সোজা তার ০.৮ টেসলার সুষম চৌম্বক ক্ষেত্রে ফ্লাক্স রেখার সাথে ৩০° কোণে ১৫ m/s বেগে গতিশীল। আবিষ্ট EMF কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '4.8 V', hi: '4.8 V', bn: '৪.৮ V' } },
        { id: 'opt-2', text: { en: '2.4 V', hi: '2.4 V', bn: '২.৪ V' } },
        { id: 'opt-3', text: { en: '1.2 V', hi: '1.2 V', bn: '১.২ V' } },
        { id: 'opt-4', text: { en: '0.6 V', hi: '0.6 V', bn: '০.৬ V' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'e = B · l · v · sin(θ) = 0.8 T × 0.4 m × 15 m/s × sin(30°) = 4.8 × 0.5 = 2.4 V.',
        hi: 'e = B · l · v · sin(θ) = 0.8 × 0.4 × 15 × sin(30°) = 4.8 × 0.5 = 2.4 V।',
        bn: 'e = B · l · v · sin(θ) = ০.৮ × ০.৪ × ১৫ × sin(৩০°) = ৪.৮ × ০.৫ = ২.৪ V।'
      }
    }
  ],
  4: [
    {
      id: 'mcq-ch10-l04-03',
      question: {
        en: 'An aircraft with a wingspan of 20 m flies horizontally at 250 m/s through Earth’s vertical magnetic field component of 50 µT. What motional EMF is induced across its wingtips?',
        hi: '20 m पंखों के फैलाव वाला एक विमान पृथ्वी के 50 µT के लंबवत चुंबकीय क्षेत्र में 250 m/s से क्षैतिज उड़ान भरता है। इसके पंखों के सिरों पर कितना गतिज EMF प्रेरित होगा?',
        bn: '২০ মিটার উইংস্প্যানের একটি বিমান পৃথিবীর ৫০ µT উল্লম্ব চৌম্বক উপাংশের মধ্য দিয়ে ২৫০ m/s বেগে অনুভূমিকভাবে উড়ছে। এর ডানার দুই প্রান্তে আবিষ্ট EMF কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '0.25 V (250 mV)', hi: '0.25 V (250 mV)', bn: '০.২৫ V (২৫০ mV)' } },
        { id: 'opt-2', text: { en: '2.5 V', hi: '2.5 V', bn: '২.৫ V' } },
        { id: 'opt-3', text: { en: '25 V', hi: '25 V', bn: '২৫ V' } },
        { id: 'opt-4', text: { en: '0.025 V (25 mV)', hi: '0.025 V (25 mV)', bn: '০.০২৫ V (২৫ mV)' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'e = B · l · v = (50 × 10⁻⁶ T) × 20 m × 250 m/s = 0.25 V (or 250 mV).',
        hi: 'e = B · l · v = (50 × 10⁻⁶) × 20 × 250 = 0.25 V (250 mV)।',
        bn: 'e = B · l · v = (৫০ × ১০⁻⁶) × ২০ × ২৫০ = ০.২৫ V (বা ২৫০ mV)।'
      }
    },
    {
      id: 'mcq-ch10-l04-04',
      question: {
        en: 'In the motional EMF expression e = B · l · v · sin(θ), the angle θ is strictly defined between:',
        hi: 'गतिज ईएमएफ सूत्र e = B · l · v · sin(θ) में, कोण θ विशेष रूप से किसके बीच परिभाषित है?',
        bn: 'গতিজ ইএমএফ সূত্র e = B · l · v · sin(θ)-তে, কোণ θ বিশেষভাবে কার কার মধ্যে সংজ্ঞায়িত?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The conductor velocity vector v and the magnetic field vector B', hi: 'चालक के वेग सदिश v और चुंबकीय क्षेत्र सदिश B के बीच', bn: 'পরিবাহীর বেগ ভেক্টর v এবং চৌম্বক ক্ষেত্র ভেক্টর B এর মধ্যে' } },
        { id: 'opt-2', text: { en: 'The conductor length l and the Earth’s gravitational vector', hi: 'चालक की लंबाई l और पृथ्वी के गुरुत्वीय सदिश के बीच', bn: 'পরিবাহীর দৈর্ঘ্য l এবং অভিকর্ষজ ভেক্টরের মধ্যে' } },
        { id: 'opt-3', text: { en: 'The electric potential gradient and atmospheric pressure', hi: 'विद्युत विभव प्रवणता और वायुमंडलीय दबाव के बीच', bn: 'বিভব নতিমাত্রা এবং বায়ুমণ্ডলীয় চাপের মধ্যে' } },
        { id: 'opt-4', text: { en: 'The magnetic flux density and electric permittivity', hi: 'चुंबकीय फ्लक्स घनत्व और विद्युतशीलता के बीच', bn: 'চৌম্বক ফ্লাক্স ঘনত্ব এবং তড়িৎ প্রবেশ্যতার মধ্যে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'The scalar product formulation derived from Lorentz force e = ∫ (v × B) · dl indicates that θ is the angle between velocity vector v and magnetic field vector B.',
        hi: 'लोरेन्त्ज़ बल e = ∫ (v × B) · dl के अनुसार, कोण θ वेग सदिश v और चुंबकीय क्षेत्र सदिश B के बीच का कोण होता है।',
        bn: 'লরেন্টজ বলের সূত্র e = ∫ (v × B) · dl হতে দেখা যায় যে, θ হলো বেগ ভেক্টর v এবং চৌম্বক ক্ষেত্র ভেক্টর B এর মধ্যকার কোণ।'
      }
    },
    {
      id: 'mcq-ch10-l04-05',
      question: {
        en: 'A conducting rod of length L rotates with constant angular velocity ω about one pivot end in a plane perpendicular to uniform magnetic field B. The induced EMF between its ends is:',
        hi: 'L लंबाई की एक चालक छड़ समान चुंबकीय क्षेत्र B के लंबवत तल में अपने एक सिरे के परितः नियत कोणीय वेग ω से घूमती है। इसके सिरों के बीच प्रेरित EMF है:',
        bn: 'L দৈর্ঘ্যের একটি পরিবাহী দণ্ড সুষম চৌম্বক ক্ষেত্র B এর সাথে লম্ব তলে তার এক প্রান্তকে কেন্দ্র করে স্থির কৌণিক বেগ ω তে ঘুরছে। এর দুই প্রান্তের মধ্যে আবিষ্ট EMF কত?'
      },
      options: [
        { id: 'opt-1', text: { en: 'e = ½ · B · ω · L²', hi: 'e = ½ · B · ω · L²', bn: 'e = ½ · B · ω · L²' } },
        { id: 'opt-2', text: { en: 'e = B · ω · L²', hi: 'e = B · ω · L²', bn: 'e = B · ω · L²' } },
        { id: 'opt-3', text: { en: 'e = 2 · B · ω · L', hi: 'e = 2 · B · ω · L', bn: 'e = ২ · B · ω · L' } },
        { id: 'opt-4', text: { en: 'e = ¼ · B · ω² · L', hi: 'e = ¼ · B · ω² · L', bn: 'e = ¼ · B · ω² · L' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Integrating motional EMF along the rod: e = ∫₀ᴸ B(ωr) dr = Bω ∫₀ᴸ r dr = ½ B ω L².',
        hi: 'छड़ के अनुदिश समाकलन करने पर: e = ∫₀ᴸ B(ωr) dr = ½ B ω L²।',
        bn: 'দণ্ড বরাবর সমাকলন করে পাওয়া যায়: e = ∫₀ᴸ B(ωr) dr = ½ B ω L²।'
      }
    },
    {
      id: 'mcq-ch10-l04-06',
      question: {
        en: 'When a straight conductor cuts magnetic flux at an angle of 60°, what percentage of its maximum possible perpendicular EMF (at 90°) is induced?',
        hi: 'जब कोई सीधा चालक फ्लक्स रेखाओं को 60° के कोण पर काटता है, तो लंबवत (90°) की तुलना में अधिकतम संभव EMF का कितना प्रतिशत प्रेरित होता है?',
        bn: 'যখন কোনো সোজা পরিবাহী ফ্লাক্স রেখাকে ৬০° কোণে ছেদ করে, তখন লম্বভাবে (৯০°) ছেদের তুলনায় সর্বোচ্চ সম্ভাব্য EMF এর শতকরা কত ভাগ আবিষ্ট হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: '86.6% (√3/2)', hi: '86.6% (√3/2)', bn: '৮৬.৬% (√৩/২)' } },
        { id: 'opt-2', text: { en: '50.0% (1/2)', hi: '50.0% (1/2)', bn: '৫০.০% (১/২)' } },
        { id: 'opt-3', text: { en: '70.7% (1/√2)', hi: '70.7% (1/√2)', bn: '৭০.৭% (১/√২)' } },
        { id: 'opt-4', text: { en: '100%', hi: '100%', bn: '১০০%' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Induced EMF is proportional to sin(θ). For θ = 60°, sin(60°) = √3/2 ≈ 0.8660, or 86.6% of maximum perpendicular EMF.',
        hi: 'प्रेरित EMF sin(θ) के समानुपाती होता है। sin(60°) = √3/2 ≈ 0.866 (86.6%)।',
        bn: 'আবিষ্ট EMF sin(θ) এর সমানুপাতিক। sin(৬০°) = √৩/২ ≈ ০.৮৬৬ (বা ৮৬.৬%)।'
      }
    },
    {
      id: 'mcq-ch10-l04-07',
      question: {
        en: 'A closed conducting loop of width w and total electrical resistance R enters a perpendicular field B at velocity v. What retarding magnetic force opposes its motion?',
        hi: 'w चौड़ाई और कुल प्रतिरोध R वाला एक बंद चालक लूप v वेग से लंबवत चुंबकीय क्षेत्र B में प्रवेश करता है। इसकी गति का विरोध करने वाला मंदक बल क्या है?',
        bn: 'w প্রস্থ এবং মোট রোধ R বিশিষ্ট একটি বদ্ধ পরিবাহী লুপ v বেগে লম্ব চৌম্বক ক্ষেত্র B তে প্রবেশ করছে। এর গতির বিরোধিতাকারী বাধাদায়ী বল কত?'
      },
      options: [
        { id: 'opt-1', text: { en: 'F = (B² · w² · v) / R', hi: 'F = (B² · w² · v) / R', bn: 'F = (B² · w² · v) / R' } },
        { id: 'opt-2', text: { en: 'F = (B · w · v) / R²', hi: 'F = (B · w · v) / R²', bn: 'F = (B · w · v) / R²' } },
        { id: 'opt-3', text: { en: 'F = (B² · w · v²) / R', hi: 'F = (B² · w · v²) / R', bn: 'F = (B² · w · v²) / R' } },
        { id: 'opt-4', text: { en: 'F = Zero', hi: 'F = शून्य', bn: 'F = শূন্য' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Induced EMF is e = B·w·v. Current is I = e / R = B·w·v / R. Retarding Lorentz force is F = I · w · B = (B² · w² · v) / R.',
        hi: 'प्रेरित EMF e = B·w·v, धारा I = B·w·v / R, अतः विरोधी बल F = I·w·B = (B² · w² · v) / R।',
        bn: 'আবিষ্ট EMF e = B·w·v, কারেন্ট I = B·w·v / R, সুতরাং বাধাদায়ী বল F = I·w·B = (B² · w² · v) / R।'
      }
    },
    {
      id: 'mcq-ch10-l04-08',
      question: {
        en: 'If the linear velocity of a conductor moving perpendicular to a magnetic field is tripled (3×) while the magnetic flux density is halved (0.5×), the induced EMF is multiplied by:',
        hi: 'यदि चुंबकीय क्षेत्र के लंबवत गतिमान चालक के वेग को तीन गुना (3×) कर दिया जाए और चुंबकीय फ्लक्स घनत्व को आधा (0.5×) कर दिया जाए, तो प्रेरित EMF कितना गुना हो जाएगा?',
        bn: 'যদি চৌম্বক ক্ষেত্রের সাথে লম্বভাবে গতিশীল পরিবাহীর রৈখিক বেগ তিন গুণ (৩×) করা হয় এবং চৌম্বক ফ্লাক্স ঘনত্ব অর্ধেক (০.৫×) করা হয়, তবে আবিষ্ট EMF কত গুণ হবে?'
      },
      options: [
        { id: 'opt-1', text: { en: '1.5 times', hi: '1.5 गुना', bn: '১.৫ গুণ' } },
        { id: 'opt-2', text: { en: '6.0 times', hi: '6.0 गुना', bn: '৬.০ গুণ' } },
        { id: 'opt-3', text: { en: '0.75 times', hi: '0.75 गुना', bn: '০.৭৫ গুণ' } },
        { id: 'opt-4', text: { en: '3.0 times', hi: '3.0 गुना', bn: '৩.০ গুণ' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Since e = B · l · v, e’ = (0.5 B) · l · (3 v) = 1.5 (B · l · v) = 1.5 e.',
        hi: 'सूत्र e = B · l · v के अनुसार, नया EMF e’ = (0.5) × (3) = 1.5 गुना हो जाएगा।',
        bn: 'e = B · l · v সূত্রানুযায়ী, নতুন EMF e’ = (০.৫) × (৩) = ১.৫ গুণ হবে।'
      }
    }
  ],
  5: [
    {
      id: 'mcq-ch10-l05-03',
      question: {
        en: 'What occurs if the primary winding of a standard 50 Hz AC power transformer is accidentally connected to a DC source of equal nominal voltage?',
        hi: 'यदि किसी मानक 50 Hz एसी पावर ट्रांसफॉर्मर की प्राथमिक वाइंडिंग को समान रेटेड वोल्टेज के डीसी स्रोत से जोड़ दिया जाए तो क्या होगा?',
        bn: 'যদি একটি স্ট্যান্ডার্ড ৫০ হার্টজ এসি পাওয়ার ট্রান্সফরমারের প্রাইমারি ওয়াইন্ডিংকে একই মানের ডিসি উৎসের সাথে যুক্ত করা হয় তবে কী ঘটবে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Because dΦ/dt = 0, no counter-EMF is induced; enormous current burns the winding rapidly', hi: 'चूंकि dΦ/dt = 0, कोई विरोधी EMF नहीं बनता; अत्यधिक धारा वाइंडिंग को तुरंत जला देगी', bn: 'যেহেতু dΦ/dt = ০, কোনো বিপরীত EMF তৈরি হয় না; তীব্র অতিরিক্ত কারেন্টে ওয়াইন্ডিং পুড়ে যাবে' } },
        { id: 'opt-2', text: { en: 'The transformer steps up the DC voltage to infinite levels safely', hi: 'ट्रांसफॉर्मर डीसी वोल्टेज को सुरक्षित रूप से अनंत तक बढ़ा देगा', bn: 'ট্রান্সফরমারটি ডিসি ভোল্টেজকে নিরাপদে বহুগুণ বৃদ্ধি করবে' } },
        { id: 'opt-3', text: { en: 'The core operates cooler than on AC because frequency is zero', hi: 'कोर एसी की तुलना में ठंडा रहेगा क्योंकि आवृत्ति शून्य है', bn: 'কম্পাঙ্ক শূন্য হওয়ায় কোরটি এসির চেয়ে বেশি ঠান্ডা থাকবে' } },
        { id: 'opt-4', text: { en: 'The transformer functions with exactly 100% efficiency', hi: 'ट्रांसफॉर्मर ठीक 100% दक्षता पर काम करेगा', bn: 'ট্রান্সফরমারটি ঠিক ১০০% কর্মদক্ষতায় চলবে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Transformers require time-varying flux to produce back-EMF that balances applied voltage. On DC, steady flux gives zero induced back-EMF; current is limited solely by tiny winding resistance (I = V/R), causing catastrophic thermal burnout.',
        hi: 'ट्रांसफॉर्मर को बैक-EMF बनाने के लिए बदलते फ्लक्स की जरूरत होती है। डीसी में dΦ/dt = 0 होने से कोई बैक-EMF नहीं बनता और भारी धारा वाइंडिंग को जला देती है।',
        bn: 'ট্রান্সফরমারে বিপরীত EMF সৃষ্টির জন্য সময়ের সাথে পরিবর্তনশীল ফ্লাক্স আবশ্যক। ডিসিতে dΦ/dt = ০ হওয়ায় কোনো বিপরীত EMF থাকে না, কেবল স্বল্প তারের রোধের কারণে অতিউচ্চ কারেন্টে কয়েল পুড়ে যায়।'
      }
    },
    {
      id: 'mcq-ch10-l05-04',
      question: {
        en: 'What is the fundamental operational difference between statically induced EMF and dynamically induced EMF?',
        hi: 'स्थैतिक प्रेरित EMF और गतिक प्रेरित EMF के बीच मौलिक कार्यात्मक अंतर क्या है?',
        bn: 'স্থিতীয় আবিষ্ট EMF এবং গতিজ আবিষ্ট EMF এর মধ্যকার মৌলিক কার্যকরী পার্থক্য কোনটি?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Statically induced EMF has stationary conductors in time-varying flux; dynamically induced EMF has moving conductors in stationary flux', hi: 'स्थैतिक EMF में चालक स्थिर और फ्लक्स परिवर्तनशील होता है; गतिक EMF में चालक गतिमान और फ्लक्स स्थिर होता है', bn: 'স্থিতীয় EMF-এ পরিবাহী স্থির ও ফ্লাক্স পরিবর্তনশীল; গতিজ EMF-এ পরিবাহী গতিশীল ও ফ্লাক্স স্থির' } },
        { id: 'opt-2', text: { en: 'Statically induced EMF violates conservation of energy', hi: 'स्थैतिक EMF ऊर्जा संरक्षण का उल्लंघन करता है', bn: 'স্থিতীয় EMF শক্তি সংরক্ষণ নীতি ভঙ্গ করে' } },
        { id: 'opt-3', text: { en: 'Dynamically induced EMF exists only in vacuum tubes', hi: 'गतिक EMF केवल वैक्यूम ट्यूब में होता है', bn: 'গতিজ EMF কেবল ভ্যাকুয়াম টিউবে থাকে' } },
        { id: 'opt-4', text: { en: 'Statically induced EMF produces only direct current (DC)', hi: 'स्थैतिक EMF केवल दिष्ट धारा (DC) बनाता है', bn: 'স্থিতীয় EMF কেবল ডিসি তৈরি করে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'In static induction (transformers), conductors are stationary while magnetic flux varies in time. In dynamic induction (generators), conductors physically move across stationary spatial magnetic flux lines.',
        hi: 'स्थैतिक प्रेरण में चालक स्थिर रहता है और चुंबकीय फ्लक्स समय के साथ बदलता है। गतिक प्रेरण में चालक भौतिक रूप से चुंबकीय क्षेत्र में गति करता है।',
        bn: 'স্থিতীয় আবেশে পরিবাহী স্থির থাকে কিন্তু সময়ের সাথে চৌম্বক ফ্লাক্স পরিবর্তিত হয়। গতিজ আবেশে স্থির চৌম্বক ক্ষেত্রের মধ্য দিয়ে পরিবাহী গতিশীল থাকে।'
      }
    },
    {
      id: 'mcq-ch10-l05-05',
      question: {
        en: 'In a transformer under no-load conditions, the self-induced EMF in the primary winding serves which critical role?',
        hi: 'बिना लोड की स्थिति में ट्रांसफॉर्मर की प्राथमिक वाइंडिंग में स्व-प्रेरित EMF कौन सी महत्वपूर्ण भूमिका निभाता है?',
        bn: 'নো-লোড অবস্থায় ট্রান্সফরমারের প্রাইমারি ওয়াইন্ডিংয়ে স্বকীয় আবিষ্ট EMF কোন গুরুত্বপূর্ণ ভূমিকা পালন করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'It opposes the applied terminal voltage almost completely, restricting no-load current to a tiny magnetizing value', hi: 'यह प्रयुक्त टर्मिनल वोल्टेज का लगभग पूर्ण विरोध करता है, जिससे नो-लोड धारा बहुत कम रहती है', bn: 'এটি প্রযুক্ত টার্মিনাল ভোল্টেজকে প্রায় সম্পূর্ণরূপে বাধা দেয়, ফলে নো-লোড কারেন্ট অতি সামান্য থাকে' } },
        { id: 'opt-2', text: { en: 'It doubles the secondary voltage output', hi: 'यह द्वितीयक वोल्टेज को दोगुना कर देता है', bn: 'এটি সেকেন্ডারি ভোল্টেজ দ্বিগুণ করে' } },
        { id: 'opt-3', text: { en: 'It converts core iron into copper', hi: 'यह कोर के लोहे को तांबे में बदल देता है', bn: 'এটি লোহার কোরকে তামায় রূপান্তর করে' } },
        { id: 'opt-4', text: { en: 'It forces the power factor to zero lead', hi: 'यह पावर फैक्टर को शून्य लीड कर देता है', bn: 'এটি পাওয়ার ফ্যাক্টরকে শূন্য লিডিং করে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'By Lenz’s law, primary self-induced EMF E1 opposes applied voltage V1 almost exactly (E1 ≈ -V1), so only a small no-load magnetizing current flows through the primary.',
        hi: 'लेंज के नियम से प्राथमिक में प्रेरित बैक-EMF प्रयुक्त वोल्टेज का विरोध करता है (E1 ≈ V1), जिससे नो-लोड धारा केवल कोर को चुंबकित करने लायक अल्प मान तक सीमित रहती है।',
        bn: 'লেনজের সূত্রানুযায়ী প্রাইমারির স্বকীয় বিপরীত EMF প্রযুক্ত ভোল্টেজকে প্রায় হুবহু প্রতিরোধ করে (E1 ≈ V1), ফলে কেবল সামান্য ম্যাগনেটাইজিং কারেন্ট প্রবাহিত হয়।'
      }
    },
    {
      id: 'mcq-ch10-l05-06',
      question: {
        en: 'If the excitation frequency of a transformer is raised from 50 Hz to 60 Hz while keeping peak core flux Φ_m unchanged, the induced RMS voltage:',
        hi: 'यदि ट्रांसफॉर्मर के अधिकतम कोर फ्लक्स Φ_m को स्थिर रखते हुए आवृत्ति 50 Hz से बढ़ाकर 60 Hz कर दी जाए, तो प्रेरित RMS वोल्टेज:',
        bn: 'যদি ট্রান্সফরমারের সর্বোচ্চ কোর ফ্লাক্স Φ_m অপরিবর্তিত রেখে কম্পাঙ্ক ৫০ হার্টজ থেকে বাড়িয়ে ৬০ হার্টজ করা হয়, তবে আবিষ্ট RMS ভোল্টেজ:'
      },
      options: [
        { id: 'opt-1', text: { en: 'Increases by 20% (multiplied by 1.2)', hi: '20% बढ़ जाता है (1.2 से गुणा)', bn: '২০% বৃদ্ধি পায় (১.২ গুণ হয়)' } },
        { id: 'opt-2', text: { en: 'Decreases by 20%', hi: '20% घट जाता है', bn: '২০% হ্রাস পায়' } },
        { id: 'opt-3', text: { en: 'Remains strictly unchanged', hi: 'पूरी तरह अपरिवर्तित रहता है', bn: 'সম্পূর্ণ অপরিবর্তিত থাকে' } },
        { id: 'opt-4', text: { en: 'Increases by 44%', hi: '44% बढ़ जाता है', bn: '৪৪% বৃদ্ধি পায়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Since E = 4.44 · f · N · Φ_m, induced EMF is directly proportional to frequency f. Increasing f from 50 to 60 Hz yields 60/50 = 1.2, a 20% increase.',
        hi: 'E = 4.44 · f · N · Φ_m के अनुसार, EMF आवृत्ति के समानुपाती होता है। 60/50 = 1.2 (20% की वृद्धि)।',
        bn: 'E = ৪.৪৪ · f · N · Φ_m সূত্র অনুযায়ী, EMF কম্পাঙ্কের সমানুপাতিক। ৬০/৫০ = ১.২ (অর্থাৎ ২০% বৃদ্ধি পায়)।'
      }
    },
    {
      id: 'mcq-ch10-l05-07',
      question: {
        en: 'Which of the following electrical machines operates exclusively on the principle of statically induced EMF?',
        hi: 'निम्नलिखित में से कौन सी विद्युत मशीन विशेष रूप से स्थैतिक प्रेरित EMF के सिद्धांत पर कार्य करती है?',
        bn: 'নিচের কোন বৈদ্যুতিক যন্ত্রটি সম্পূর্ণরূপে স্থিতীয় আবিষ্ট EMF নীতির ওপর ভিত্তি করে কাজ করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'AC Power Transformer', hi: 'एसी पावर ट्रांसफॉर्मर', bn: 'এসি পাওয়ার ট্রান্সফরমার' } },
        { id: 'opt-2', text: { en: 'DC Shunt Motor', hi: 'डीसी शंट मोटर', bn: 'ডিসি শান্ট মোটর' } },
        { id: 'opt-3', text: { en: 'Synchronous Alternator', hi: 'तुल्यकालिक अल्टरनेटर', bn: 'সিনক্রোনাস অল্টারনেটর' } },
        { id: 'opt-4', text: { en: 'Faraday Homopolar Disc', hi: 'फैराडे होमोपोलर डिस्क', bn: 'ফ্যারাডে হোমোপোলার ডিস্ক' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'A transformer has no rotating or moving mechanical parts; energy is transferred between stationary windings purely via statically induced EMF produced by alternating core flux.',
        hi: 'ट्रांसफॉर्मर में कोई घूमने वाला भाग नहीं होता; यह स्थिर कुंडलियों में बदलते चुंबकीय फ्लक्स द्वारा केवल स्थैतिक EMF से कार्य करता है।',
        bn: 'ট্রান্সফরমারে কোনো ঘূর্ণনশীল যন্ত্রাংশ থাকে না; স্থির ওয়াইন্ডিংয়ে পরিবর্তী ফ্লাক্সের সাহায্যে কেবল স্থিতীয় আবেশের মাধ্যমে শক্তি সঞ্চালিত হয়।'
      }
    },
    {
      id: 'mcq-ch10-l05-08',
      question: {
        en: 'A 200-turn coil links sinusoidal magnetic flux Φ(t) = 0.01 · sin(314 t) Wb. What is the peak (maximum) induced EMF in the coil?',
        hi: '200 फेरों वाली कुंडली से ज्यावक्रीय फ्लक्स Φ(t) = 0.01 · sin(314 t) Wb जुड़ा है। कुंडली में अधिकतम प्रेरित EMF क्या है?',
        bn: '২০০ পাকের একটি কয়েলের সাথে সাইনোসয়ডাল ফ্লাক্স Φ(t) = ০.০১ · sin(৩১৪ t) Wb যুক্ত আছে। কয়েলে আবিষ্ট সর্বোচ্চ (পিক) EMF কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '628 V', hi: '628 V', bn: '৬২৮ V' } },
        { id: 'opt-2', text: { en: '314 V', hi: '314 V', bn: '৩১৪ V' } },
        { id: 'opt-3', text: { en: '444 V', hi: '444 V', bn: '৪৪৪ V' } },
        { id: 'opt-4', text: { en: '62.8 V', hi: '62.8 V', bn: '৬২.৮ V' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'e(t) = -N dΦ/dt = -200 × [0.01 × 314 × cos(314t)] = -628 cos(314t). The maximum peak value is E_max = 628 V.',
        hi: 'E_max = N · ω · Φ_m = 200 × 314 × 0.01 = 628 V।',
        bn: 'E_max = N · ω · Φ_m = ২০০ × ৩১৪ × ০.০১ = ৬২৮ V।'
      }
    }
  ]
};

console.log('Part 1 definitions loaded.');
