import { Lesson } from '../types';

export const LESSON_CARRIER_PILOT_SCHEMES: Lesson = {
  id: 'lsn-ch17-carrier-pilot-schemes',
  topicId: 'tp-ch17-carrier-pilot-schemes',
  chapterId: 'ch-advanced-power-system-protection',
  order: 7,
  title: {
    en: 'Carrier and Pilot Protection Schemes',
    hi: 'कैरियर एवं पायलट सुरक्षा योजनाएँ',
    bn: 'ক্যারিয়ার ও পাইলট সুরক্ষা স্কিম'
  },
  description: {
    en: 'High-speed teleprotection and unit line protection: Communication-assisted distance schemes (DUTT, PUTT, POTT, Directional Comparison Blocking DCB), current differential line protection (ANSI 87L) over optical fibers with IEEE 1588 PTP / GPS synchronization, and telecommunication media: PLCC (line trap, coupling capacitor, LMU), digital microwave, and OPGW.',
    hi: 'हाई-स्पीड टेलीप्रोटेक्शन एवं यूनिट लाइन सुरक्षा: संचार-सहायता प्राप्त डिस्टेंस स्कीमें (DUTT, PUTT, POTT, DCB), ऑप्टिकल फाइबर पर करंट डिफरेंशियल लाइन सुरक्षा (ANSI 87L) GPS सिंक्रोनाइज़ेशन के साथ, और संचार माध्यम: PLCC (वेव ट्रैप, कपलिंग कैपेसिटर), डिजिटल माइक्रोवेव और OPGW।',
    bn: 'হাই-স্পিড টেলিসুরক্ষা ও ইউনিট লাইন সুরক্ষা: টেলিকমিউনিকেশন সহায়ক ডিসট্যান্স স্কিম (DUTT, PUTT, POTT, DCB), অপটিক্যাল ফাইবার ও জিপিএস/IEEE 1588 সমন্বিত লাইন কারেন্ট ডিফারেনশিয়াল সুরক্ষা (ANSI 87L) এবং ট্রান্সমিশন মাধ্যম: PLCC (লাইন ট্র্যাপ, কাপলিং ক্যাপাসিটর), ডিজিটাল মাইক্রোওয়েভ ও OPGW।'
  },
  estimatedMinutes: 55,
  easyExplanation: {
    en: 'In high-voltage transmission grids, clearing a fault in 0.35 seconds using Zone 2 distance protection is far too slow—such delays cause generator rotors to lose synchronism and crash the entire grid! The ultimate goal is 100% instantaneous clearing along the entire line length. How can we achieve this? By connecting the distance relays at both ends with high-speed communications (fiber optics or power-line carrier)! If relay A sees an in-zone fault in Zone 1, it instantly sends a digital trip signal down the line to relay B, commanding it to trip its breaker immediately without waiting for Zone 2 time delay. Even better, modern lines use Optical Ground Wire (OPGW) fibers to directly stream microsecond-synchronized current waveforms between substations, creating true Line Current Differential (87L) unit protection!',
    hi: 'हाई-वोल्टेज ग्रिड में, ज़ोन 2 डिस्टेंस रिले द्वारा 0.35 सेकंड में फॉल्ट को साफ करना बहुत धीमा होता है—इतनी देरी से जनरेटर ग्रिड से कट सकते हैं और ब्लैकआउट हो सकता है! इसका समाधान क्या है? दोनों सिरों के रिले को ऑप्टिकल फाइबर या पावर लाइन कैरियर (PLCC) द्वारा आपस में जोड़ना! यदि रिले A फॉल्ट को देखता है, तो वह तुरंत लाइन के दूसरे सिरे पर स्थित रिले B को एक सिग्नल भेजता है ताकि वह बिना किसी देरी के तुरंत ट्रिप कर सके। इसके अलावा, आधुनिक ग्रिड OPGW फाइबर के माध्यम से करंट तरंगों का सीधा मिलान करके लाइन डिफरेंशियल (87L) सुरक्षा प्रदान करते हैं!',
    bn: 'উচ্চ ভোল্টেজের জাতীয় গ্রিডে জোন ২ এর মাধ্যমে ০.৩৫ সেকেন্ডে ফল্ট ক্লিয়ার করা অত্যন্ত ঝুঁকিপূর্ণ—এতটুকু দেরিতে জেনারেটরের রোটর সিঙ্ক্রোনিজেশন হারিয়ে পুরো গ্রিড ব্ল্যাকআউট হতে পারে! লক্ষ্য হলো পুরো ১০০% লাইনে তাৎক্ষণিক (২০ মিলিসেকেন্ডে) ট্রিপ নিশ্চিত করা। এর সমাধান হলো লাইনের উভয় প্রান্তের রিলেকে অপটিক্যাল ফাইবার বা PLCC এর মাধ্যমে যুক্ত করা! প্রান্ত A তে ফল্ট শনাক্ত হলে রিলে তৎক্ষণাৎ প্রান্ত B এর রিলেকে ডিজিটাল ট্রিপ সংকেত পাঠায়, ফলে প্রান্ত B কোনো বিলম্ব ছাড়াই ব্রেকার ট্রिप করিয়ে দেয়। সর্বাধুনিক গ্রিডে OPGW ফাইবারের সাহায্যে লাইন কারেন্ট ডিফারেনশিয়াল (87L) প্রয়োগ করে তাৎক্ষণিক ইউনিট সুরক্ষা দেওয়া হয়!'
  },
  detailedExplanation: {
    en: 'Teleprotection and pilot schemes integrate high-speed communications with distance and unit differential relays to achieve simultaneous, instantaneous trip clearing (<25 ms) across 100% of the transmission line:\n\n1. Permissive Under-Reach Transfer Trip (PUTT):\n• Under-reaching Zone 1 (80% reach) detects an internal fault and sends a "Permissive Trip" carrier signal to the remote terminal.\n• The remote terminal trips INSTANTANEOUSLY if and only if it receives the carrier signal AND its own over-reaching Zone 2 element sees the fault.\n• Security advantage: If communication is corrupted by channel noise, false carrier reception cannot trip the line because the local fault detector (Zone 2) must independently confirm the fault.\n\n2. Permissive Over-Reach Transfer Trip (POTT):\n• Both terminals employ forward-looking Over-reaching Zone 2 elements (reaching 120% to 150% across the line).\n• When terminal A sees a forward fault in Zone 2, it transmits a permissive signal to terminal B. If terminal B also sees a forward fault in its Zone 2, it confirms the fault is internal and trips both ends instantly.\n• If a fault is external (behind terminal B), terminal B sees a reverse fault, suppresses carrier transmission, and neither end trips prematurely.\n\n3. Directional Comparison Blocking (DCB):\n• Uses reverse-looking elements to detect external faults behind the terminal and transmit a "BLOCK" carrier signal to the remote end.\n• Operates on a normally quiet carrier channel; widely used on Power Line Carrier Communication (PLCC) channels where fault arcing may attenuate trip signals.\n\n4. Line Current Differential (ANSI 87L):\n• Numerical relays at both line terminals sample instantaneous phase currents at identical time instants.\n• Requires precise time-synchronization via GPS satellite receivers or IEEE 1588 Precision Time Protocol (PTP) to eliminate propagation delay asymmetry over optical fibers (OPGW).\n• Computes true Kirchhoff vector sum: I_diff = |I_local + I_remote|. Provides immune protection against high-resistance faults, mutual coupling from parallel circuits, and power swings without requiring voltage inputs.\n\n5. Power Line Carrier Communication (PLCC) Hardware:\n• Wave Trap (Line Trap): High-inductance parallel resonant LC filter tuned to carrier frequencies (50–500 kHz). Passes 50 Hz power current with negligible reactance but presents massive impedance (>1000 Ω) to carrier signals, confining them to the line.\n• Coupling Capacitor / CVT: High-voltage capacitor providing low-reactance path for high-frequency carrier injection onto phase conductors.\n• Drain Coil: Low-reactance path to safely drain 50 Hz leakage currents to ground while blocking RF carrier signals.\n• Line Matching Unit (LMU): Balances transmission line impedance (~400 Ω) to coaxial cable impedance (50–75 Ω) and provides lightning spark gap surge protection.',
    hi: 'कैरियर एवं पायलट सुरक्षा के प्रमुख तकनीकी सिद्धांत:\n1. PUTT (परमिसिव अंडर-रीच): जब टर्मिनल A का ज़ोन 1 फॉल्ट देखता है, तो वह टर्मिनल B को एक सिग्नल भेजता है। टर्मिनल B का ज़ोन 2 सक्रिय होने पर दोनों सिरे तुरंत ट्रिप कर जाते हैं।\n2. POTT (परमिसिव ओवर-रीच): दोनों सिरे 120% ओवर-रीचिंग ज़ोन का उपयोग करते हैं। जब दोनों सिरे फॉल्ट को आगे देखते हैं, तभी लाइन ट्रिप होती है।\n3. DCB (डायरेक्शनल कम्पेरिज़न ब्लॉकिंग): रिवर्स फॉल्ट देखने पर रिमोट टर्मिनल को "ब्लॉक" सिग्नल भेजा जाता है ताकि वह ट्रिप न करे।\n4. 87L लाइन करंट डिफरेंशियल: दोनों सिरों के करंट का GPS सिंक्रोनाइज़ेशन और OPGW फाइबर के माध्यम से सीधा मिलान किया जाता है।\n5. PLCC उपकरण: वेव ट्रैप (50 Hz को गुजरने देता है, RF कैरियर को रोकता है), कपलिंग कैपेसिटर (कैरियर को लाइन में इंजेक्ट करता है), और लाइन मैचिंग यूनिट (LMU)।',
    bn: 'ক্যারিয়ার ও পাইলট সুরক্ষার মূল বিষয়সমূহ:\n১. PUTT স্কিম: প্রান্ত A এর জোন ১ ফল্ট দেখলে অপর প্রান্তে পারমিশন পাঠায়। অপর প্রান্তের জোন ২ সক্রিয় থাকলে তাৎক্ষণিক ট্রিপ নিশ্চিত হয়।\n২. POTT স্কিম: উভয় প্রান্তের ওভার-রিচিং জোন ২ ফল্টটিকে সামনের দিকে দেখলে তবেই সংকেত আদান-প্রদান করে তাৎক্ষণিক ট্রিপ করে।\n৩. DCB ব্লকিং স্কিম: পেছনে ফল্ট শনাক্ত হলে অপর প্রান্তকে ট্রিপ থেকে বিরত রাখতে "ব্লক" সংকেত পাঠানো হয়।\n৪. 87L লাইন কারেন্ট ডিফারেনশিয়াল: অপটিক্যাল ফাইবার ও জিপিএস সমন্বয়ের মাধ্যমে উভয় প্রান্তের কারেন্ট ভেক্টর সরাসরি যোগ করে কার্শফের সূত্র প্রয়োগ করা হয়।\n৫. PLCC হার্ডওয়্যার: ওয়েভ ট্র্যাপ (৫০ Hz বিদ্যুৎ ছেড়ে দেয়, ক্যারিয়ার সিগন্যাল আটকে রাখে), কাপলিং ক্যাপাসিটর (সিগন্যাল তারে পাঠায়) এবং LMU।'
  },
  formulas: [
    {
      id: 'f-ch17-line-diff-vector',
      symbol: 'I_{diff,87L}',
      expression: 'I_{diff} = \\left| \\vec{I}_{local} + \\vec{I}_{remote} \\cdot e^{j\\omega \\tau_{prop}} \\right|',
      title: {
        en: 'Line Current Differential Operating Current Formula',
        hi: 'लाइन करंट डिफरेंशियल ऑपरेटिंग धारा सूत्र',
        bn: 'লাইন কারেন্ট ডিফারেনশিয়াল অপারেটিং কারেন্ট সূত্র'
      },
      description: {
        en: 'Vector differential current equation incorporating fiber-optic propagation delay compensation.',
        hi: 'फाइबर-ऑप्टिक संचरण देरी क्षतिपूर्ति को शामिल करते हुए वेक्टर डिफरेंशियल धारा समीकरण।',
        bn: 'ফাইবার-অপটিক সিগন্যাল বিলম্বের ক্ষতিপূরণ সমন্বিত ভেক্টর ডিফারেনশিয়াল কারেন্ট সমীকরণ।'
      },
      variables: [
        { symbol: 'I_{diff}', name: { en: 'Line differential operating current (A)', hi: 'डिफरेंशियल ऑपरेटिंग धारा', bn: 'ডিফারেনশিয়াল অপারেটিং কারেন্ট' } },
        { symbol: '\\vec{I}_{local}', name: { en: 'Local terminal synchronized current vector (A)', hi: 'स्थानीय टर्मिनल धारा वेक्टर', bn: 'স্থানীয় প্রান্তের কারেন্ট ভেক্টর' } },
        { symbol: '\\vec{I}_{remote}', name: { en: 'Remote terminal current vector received over communication channel (A)', hi: 'रिमोट टर्मिनल धारा वेक्टर', bn: 'রিমোট প্রান্তের কারেন্ট ভেক্টর' } },
        { symbol: '\\tau_{prop}', name: { en: 'One-way communication channel propagation delay (s)', hi: 'संचार चैनल संचरण देरी (s)', bn: 'যোগাযোগ চ্যানেলের একমুখী সিগন্যাল বিলম্ব (s)' } }
      ]
    },
    {
      id: 'f-ch17-line-trap-tuning',
      symbol: 'f_{trap}',
      expression: 'f_{trap} = \\frac{1}{2\\pi \\sqrt{L_{trap} \\cdot C_{tune}}}',
      title: {
        en: 'PLCC Wave Trap Resonant Frequency Formula',
        hi: 'PLCC वेव ट्रैप अनुनादी आवृत्ति सूत्र',
        bn: 'PLCC ওয়েভ ট্র্যাপ রেজোন্যান্ট ফ্রিকোয়েন্সি সূত্র'
      },
      description: {
        en: 'Determines the tuned center parallel-resonant frequency of the line trap to block high-frequency carrier leakage into the substation busbar.',
        hi: 'सबस्टेशन बसबार में कैरियर रिसाव को रोकने के लिए वेव ट्रैप की समानांतर अनुनादी आवृत्ति निर्धारित करता है।',
        bn: 'সাবস্টেশনের বাসবারে ক্যারিয়ার সিগন্যাল হারিয়ে যাওয়া ঠেকাতে ওয়েভ ট্র্যাপের রেজোন্যান্ট ফ্রিকোয়েন্সি নির্ণয় করে।'
      },
      variables: [
        { symbol: 'f_{trap}', name: { en: 'Tuned carrier center frequency (Hz)', hi: 'ट्यून्ड कैरियर आवृत्ति (Hz)', bn: 'টিউনকৃত ক্যারিয়ার ফ্রিকোয়েন্সি (Hz)' } },
        { symbol: 'L_{trap}', name: { en: 'Line trap main coil inductance (H, typically 0.5 to 2.0 mH)', hi: 'वेव ट्रैप प्रेरकत्व', bn: 'ওয়েভ ট্র্যাপ ইনডাক্ট্যান্স' } },
        { symbol: 'C_{tune}', name: { en: 'Tuning device capacitance (F)', hi: 'ट्यूनिंग धारिता', bn: 'টিউনিং ক্যাপাসিট্যান্স' } }
      ]
    }
  ],
  keyPoints: [
    {
      en: 'Teleprotection schemes allow 100% of the line length to be cleared instantaneously (<25 ms) without waiting for Zone 2 time delays.',
      hi: 'टेलीप्रोटेक्शन योजनाएं ज़ोन 2 समय देरी के बिना पूरी 100% लाइन को तुरंत (<25 ms) ट्रिप करने की अनुमति देती हैं।',
      bn: 'টেলিসুরক্ষা স্কিম জোন ২ সময় বিলম্বের অপেক্ষা না করে সমগ্র ১০০% লাইনের ফল্ট তাৎক্ষণিকভাবে (<২৫ ms) দূর করে।'
    },
    {
      en: 'PUTT requires local Zone 2 confirmation upon receiving a carrier trip signal, preventing spurious tripping on channel noise.',
      hi: 'PUTT को कैरियर ट्रिप सिग्नल प्राप्त करने पर स्थानीय ज़ोन 2 पुष्टि की आवश्यकता होती है, जिससे शोर पर गलत ट्रिपिंग नहीं होती।',
      bn: 'PUTT স্কিমে ক্যারিয়ার সিগন্যাল পেলেও স্থানীয় জোন ২ এর সম্মতি প্রয়োজন হয়, ফলে চ্যানেলের নয়েজে ভুল ট্রিপ ঘটে না।'
    },
    {
      en: 'Line Current Differential (87L) over OPGW fiber provides ultra-reliable unit protection unaffected by power swings or mutual coupling.',
      hi: 'OPGW फाइबर पर लाइन करंट डिफरेंशियल (87L) पावर स्विंग्स से अप्रभावित विश्वसनीय सुरक्षा प्रदान करता है।',
      bn: 'OPGW ফাইবারে 87L লাইন ডিফারেনশিয়াল সুরক্ষা পাওয়ার সুইং বা সমান্তরাল তারের পারস্পরিক প্রভাবমুক্ত নিখুঁত সুরক্ষা দেয়।'
    },
    {
      en: 'Line traps (wave traps) block carrier RF frequencies (50–500 kHz) from leaking into the substation while freely passing 50 Hz power.',
      hi: 'लाइन ट्रैप (वेव ट्रैप) सबस्टेशन में कैरियर आवृत्तियों (50-500 kHz) को जाने से रोकते हैं जबकि 50 Hz बिजली को स्वतंत्र रूप से जाने देते हैं।',
      bn: 'ওয়েভ ট্র্যাপ সাবস্টেশনে ক্যারিয়ার ফ্রিকোয়েন্সি (৫০-৫০০ kHz) প্রবেশ রোধ করে কিন্তু ৫০ Hz বিদ্যুৎকে বাধাহীনভাবে যেতে দেয়।'
    }
  ],
  schematics: [
    {
      id: 'sch-ch17-l07-01',
      title: {
        en: 'PLCC Teleprotection Hardware Chain & Line Current Differential Architecture',
        hi: 'PLCC टेलीप्रोटेक्शन हार्डवेयर श्रृंखला एवं लाइन डिफरेंशियल आर्किटेक्चर',
        bn: 'PLCC টেলিসুরক্ষা হার্ডওয়্যার চেইন ও লাইন ডিফারেনশিয়াল আর্কিটেকচার'
      },
      content: {
        en: 'The schematic displays: (1) The complete PLCC terminal chain comprising the Wave Trap (line trap), Coupling Capacitor Voltage Transformer (CCVT), Drain Coil, Line Matching Unit (LMU), coaxial cable, and Carrier Transmitter/Receiver terminal, and (2) The Optical Ground Wire (OPGW) Line Differential (87L) topology with GPS-synchronized master-slave digital current sampling.',
        hi: 'यह आरेख दिखाता है: (1) वेव ट्रैप, कपलिंग कैपेसिटर, ड्रेन कॉइल, LMU, कोएक्सियल केबल और कैरियर टर्मिनल के साथ पूरी PLCC श्रृंखला, और (2) GPS-सिंक्रोनाइज़्ड OPGW लाइन डिफरेंशियल (87L) आर्किटेक्चर।',
        bn: 'এই স্কিম্যাটিকটি প্রদর্শন করে: (১) ওয়েভ ট্র্যাপ, সিসিভিটি (CCVT), ড্রেন কয়েল, লাইন ম্যাচিং ইউনিট (LMU) ও কোঅক্সিয়াল কেবল সমন্বিত পূর্ণাঙ্গ PLCC হার্ডওয়্যার চেইন এবং (২) জিপিএস সিঙ্ক্রোনাইজড OPGW লাইন ডিফারেনশিয়াল (87L) আর্কিটেকচার।'
      },
      schematicId: 'sch-ch17-carrier-pilot-schemes'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch17-l07-01',
      problem: {
        en: 'A 200 km, 400 kV transmission line has a propagation velocity of v = 200,000 km/s for optical signals inside its OPGW fiber-optic cable. (a) Calculate the one-way channel propagation delay (τ_prop) in milliseconds, (b) If the line operates at 50 Hz (period = 20 ms), calculate the phase angle error introduced if propagation delay is not compensated, and (c) State how numerical relays eliminate this error.',
        hi: 'एक 200 km, 400 kV ट्रांसमिशन लाइन के OPGW केबल में प्रकाश की गति 200,000 km/s है। (a) एक तरफा चैनल संचरण देरी (τ_prop) की गणना करें, (b) यदि 50 Hz पर देरी की भरपाई न की जाए, तो फेज कोण त्रुटि की गणना करें, और (c) बताएं कि रिले इसे कैसे ठीक करते हैं।',
        bn: 'একটি ২০০ কিমি, ৪০০ kV সঞ্চালন লাইনের OPGW ফাইবার অপটিক ক্যাবলে আলোর গতি ২০০,০০০ কিমি/সেকেন্ড। (a) একমুখী সিগন্যাল সঞ্চালন বিলম্ব (τ_prop) মিলিসেকেন্ডে নির্ণয় করুন, (b) ৫০ Hz সিস্টেমে এই বিলম্ব ক্ষতিপূরণ না করলে সৃষ্ট ফেজ অ্যাঙ্গেল ত্রুটি নির্ণয় করুন, এবং (c) নিউমেরিক্যাল রিলে কীভাবে এই ত্রুটি দূর করে তা উল্লেখ করুন।'
      },
      solution: {
        en: 'Given:\n• Line length L = 200 km\n• Optical propagation velocity v = 200,000 km/s\n• System frequency f = 50 Hz\n\nStep 1: Calculate one-way propagation delay (τ_prop):\nτ_prop = L / v = 200 km / 200,000 km/s = 0.0010 s = 1.0 ms\n\nStep 2: Calculate Phase Angle Error (θ_error):\nIn a 50 Hz power system, one full 360° electrical cycle takes T = 1/50 = 20 ms (or 18° per millisecond).\nθ_error = 360° * (τ_prop / T) = 360° * (1.0 ms / 20.0 ms) = 18.0°\n\nStep 3: Engineering consequence and resolution:\nAn 18.0° phase displacement between identical 1000 A load currents produces a false differential current of:\nI_diff = 2 * I * sin(θ_error / 2) = 2 * 1000 * sin(9°) = 312.8 A!\nThis huge false differential current would trip the line on normal full load. Numerical relays eliminate this by measuring the round-trip "ping-pong" communication delay (τ_roundtrip / 2) and digitally phase-shifting the remote sample by -18.0° before computing I_diff.',
        hi: 'चरण 1: संचरण देरी τ_prop = 200 / 200,000 = 0.001 s = 1.0 ms\nचरण 2: 50 Hz पर 1 ms = 18° फेज कोण।\nचरण 3: यदि 18° की भरपाई न की जाए, तो 1000 A लोड पर 312.8 A का झूठा स्पिल करंट बनेगा और रिले ट्रिप हो जाएगा। रिले पिंग-पोंग विधि या GPS से समय सिंक्रोनाइज़ करके इस त्रुटि को शून्य कर देते हैं।',
        bn: 'ধাপ ১: সিগন্যাল সঞ্চালন বিলম্ব τ_prop = ২০০ / ২০০,০০০ = ০.০০১ সেকেন্ড = ১.০ ms\nধাপ ২: ৫০ Hz সিস্টেমে ১.০ ms বিলম্ব = ১৮.০ ডিগ্রি ফেজ কোণ ত্রুটি।\nধাপ ৩: ১৮ ডিগ্রির কারণে ১০০০ A লোডেই ৩১২.৮ A ভুয়া ডিফারেনশিয়াল কারেন্ট তৈরি হয়ে রিলে ভুল ট্রিপ করবে। রিলে পিং-পং পদ্ধতি বা জিপিএস দিয়ে এই ১.০ ms ক্ষতিপূরণ করে ফেজ কোণ মিলিয়ে নেয়।'
      },
      givenValues: { 'L': '200 km', 'v': '200,000 km/s', 'f': '50 Hz' },
      finalAnswer: {
        en: 'τ_prop = 1.0 ms; Phase error = 18.0°; Compensated via ping-pong delay / GPS time-stamping',
        hi: 'τ_prop = 1.0 ms; फेज त्रुटि = 18.0°; पिंग-पोंग देरी या GPS द्वारा क्षतिपूर्ति',
        bn: 'τ_prop = ১.০ ms; ফেজ ত্রুটি = ১৮.০°; পিং-পং বা জিপিএস সিঙ্ক্রোনাইজেশনের মাধ্যমে নির্ভুল সংশোধন'
      }
    },
    {
      id: 'ex-ch17-l07-02',
      problem: {
        en: 'A wave trap for a 220 kV PLCC terminal has a main coil inductance of L = 1.0 mH. Calculate the tuning capacitance (C_tune) required to resonate at a carrier frequency of f_c = 150 kHz to prevent carrier signals from escaping into the substation.',
        hi: 'एक 220 kV PLCC वेव ट्रैप का मुख्य प्रेरकत्व L = 1.0 mH है। 150 kHz कैरियर आवृत्ति पर समानांतर अनुनाद (रेजोनेंस) प्राप्त करने के लिए आवश्यक ट्यूनिंग कैपेसिटेंस (C_tune) की गणना करें।',
        bn: 'একটি ২২০ kV PLCC ওয়েভ ট্র্যাপের প্রধান কয়েল ইনডাক্ট্যান্স L = ১.০ mH। ১৫০ kHz ক্যারিয়ার ফ্রিকোয়েন্সিতে রেজোন্যান্স নিশ্চিত করতে প্রয়োজনীয় টিউনিং ক্যাপাসিট্যান্সের (C_tune) মান নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n• L = 1.0 mH = 1.0 x 10^-3 H\n• f_c = 150 kHz = 150,000 Hz\n\nStep 1: Apply resonant frequency formula:\nf_c = 1 / (2 * π * √(L * C))\nSquaring both sides:\nf_c² = 1 / (4 * π² * L * C)\n\nStep 2: Solve for C_tune:\nC_tune = 1 / (4 * π² * f_c² * L)\nC_tune = 1 / [ 4 * (3.14159)² * (150,000)² * (0.001) ]\nC_tune = 1 / [ 39.4784 * 2.25 x 10^10 * 10^-3 ]\nC_tune = 1 / [ 8.8826 x 10^8 ] = 1.1258 x 10^-9 F = 1.126 nF (or 1126 pF)\n\nConclusion: A tuning capacitor of 1126 pF (1.126 nF) must be connected across the main coil.',
        hi: 'C = 1 / [ 4 * π² * f² * L ]\nC = 1 / [ 4 * (3.1416)² * (150,000)² * 0.001 ] = 1.126 nF (1126 pF)\nनिष्कर्ष: मुख्य कॉइल के साथ 1126 pF का कैपेसिटर लगाना होगा।',
        bn: 'C = ১ / [ ৪ * π² * f² * L ]\nC = ১ / [ ৪ * (৩.১৪১৬)² * (১৫০,০০০)² * ০.০০১ ] = ১.১২৬ nF (১১২৬ pF)\nসিদ্ধান্ত: প্রধান কয়েলের সাথে ১১২৬ pF টিউনিং ক্যাপাসিটর যুক্ত করতে হবে।'
      },
      givenValues: { 'L': '1.0 mH', 'f_carrier': '150 kHz' },
      finalAnswer: {
        en: 'C_tune = 1.126 nF (1126 pF)',
        hi: 'C_tune = 1.126 nF (1126 pF)',
        bn: 'C_tune = ১.১২৬ nF (১১২৬ pF)'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Configuring Permissive Over-Reach Transfer Trip (POTT) over digital teleprotection couplers on 400 kV lines.',
      'Deploying Optical Ground Wire (OPGW) line current differential relays (ANSI 87L) on inter-state grid corridors.',
      'Maintaining and tuning PLCC wave traps and line matching units (LMU) in outdoor extra-high-voltage substations.'
    ],
    hi: [
      '400 kV लाइनों पर डिजिटल टेलीप्रोटेक्शन कप्लर्स पर POTT योजना कॉन्फ़िगर करना।',
      'अंतर्राज्यीय ग्रिड पर OPGW लाइन करंट डिफरेंशियल रिले (ANSI 87L) स्थापित करना।',
      'EHV सबस्टेशनों में PLCC वेव ट्रैप और लाइन मैचिंग यूनिट्स (LMU) का रखरखाव और ट्यूनिंग।'
    ],
    bn: [
      '৪০০ kV লাইনে ডিজিটাল টেলিসুরক্ষা কাপলারের মাধ্যমে POTT স্কিম কার্যকর করা।',
      'আন্তঃগ্রিড করিডোরে OPGW লাইন কারেন্ট ডিফারেনশিয়াল রিলে (ANSI 87L) মোতায়েন।',
      'বহিরঙ্গন ইএইচভি সাবস্টেশনে PLCC ওয়েভ ট্র্যাপ ও LMU এর নিয়মিত টিউনিং ও রক্ষণাবেক্ষণ।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing Direct Under-Reach Transfer Trip (DUTT) with PUTT: DUTT requires no local fault detector confirmation and will trip the remote breaker instantly if communication noise mimics the carrier signal!',
      'Failing to compensate for communication propagation delay in 87L line differential relays, causing false trips during normal load current.',
      'Installing wave traps with damaged internal arresters, causing RF signal attenuation and failure of carrier blocking.'
    ],
    hi: [
      'DUTT को PUTT समझना: DUTT में स्थानीय पुष्टि की आवश्यकता नहीं होती, जिससे चैनल शोर पर लाइन गलती से ट्रिप हो सकती है।',
      '87L लाइन डिफरेंशियल में संचार देरी (Delay) की भरपाई न करना, जिससे सामान्य लोड पर ही ट्रिप हो जाता है।',
      'क्षतिग्रस्त सर्ज अरेस्टर वाले वेव ट्रैप लगाना, जिससे कैरियर सिग्नल कमजोर हो जाता है और सुरक्षा विफल हो जाती है।'
    ],
    bn: [
      'DUTT এবং PUTT গুলিয়ে ফেলা: DUTT স্কিমে অপর প্রান্তের কোনো স্থানীয় অনুমোদনের প্রয়োজন হয় না, ফলে চ্যানেলের নয়েজেই লাইন ভুল ট্রিপ করতে পারে।',
      '87L লাইন ডিফারেনশিয়ালে সিগন্যাল সঞ্চালন বিলম্ব ক্ষতিপূরণ না করা, যার ফলে স্বাভাবিক লোডেই লাইন ট্রিপ করে।',
      'ক্ষতিগ্রস্ত সার্জ অ্যারেস্টার যুক্ত ওয়েভ ট্র্যাপ ব্যবহার করা, যার ফলে ক্যারিয়ার সিগন্যাল হারিয়ে গিয়ে স্কিম ব্যর্থ হয়।'
    ]
  },
  keyTakeaways: {
    en: [
      'Teleprotection schemes enable instantaneous, 100% line coverage by coordinating relays via high-speed communications.',
      'POTT and PUTT require local over-reaching or under-reaching elements to confirm fault presence before tripping.',
      'Line Current Differential (87L) over OPGW fiber offers the highest selectivity and speed, independent of voltage inputs.'
    ],
    hi: [
      'टेलीप्रोटेक्शन योजनाएं हाई-स्पीड संचार के माध्यम से रिले का समन्वय करके तुरंत 100% लाइन कवरेज सक्षम करती हैं।',
      'POTT और PUTT को ट्रिप करने से पहले फॉल्ट की उपस्थिति की पुष्टि करने के लिए स्थानीय तत्वों की आवश्यकता होती है।',
      'OPGW फाइबर पर लाइन करंट डिफरेंशियल (87L) वोल्टेज इनपुट के बिना उच्चतम चयनात्मकता और गति प्रदान करता है।'
    ],
    bn: [
      'টেলিসুরক্ষা স্কিম হাই-স্পিড যোগাযোগের সাহায্যে রিলেগুলোর সমন্বয় করে সমগ্র লাইনে তাৎক্ষণিক ট্রিপ নিশ্চিত করে।',
      'POTT ও PUTT স্কিমে ট্রিপ কার্যকর করার আগে স্থানীয় ফল্ট ডিটেক্টরের স্বাধীন নিশ্চিতকরণ প্রয়োজন হয়।',
      'OPGW ফাইবারে পরিচালিত 87L লাইন ডিফারেনশিয়াল পিটি ভোল্টেজ ছাড়াই সর্বোচ্চ সংবেদনশীলতা ও ক্ষিপ্রতা প্রদান করে।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch17-l07-01',
      question: {
        en: 'What is the decisive engineering advantage of Permissive Under-Reach Transfer Trip (PUTT) over Direct Under-Reach Transfer Trip (DUTT)?',
        hi: 'डायरेक्ट अंडर-रीच (DUTT) की तुलना में परमिसिव अंडर-रीच ट्रांसफर ट्रिप (PUTT) का निर्णायक इंजीनियरिंग लाभ क्या है?',
        bn: 'ডাইরেক্ট আন্ডার-রীচ (DUTT) এর তুলনায় পারমিসিভ আন্ডার-রীচ ট্রান্সফার ট্রিপ (PUTT) স্কিমের প্রধান প্রযুক্তিগত সুবিধা কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'High security against false tripping: the remote breaker trips ONLY if its own local Zone 2 element also detects the fault', hi: 'गलत ट्रिपिंग से उच्च सुरक्षा: रिमोट ब्रेकर केवल तभी ट्रिप करता है जब उसका अपना स्थानीय ज़ोन 2 तत्व भी फॉल्ट पकड़ता है', bn: 'অনাকাঙ্ক্ষিত ট্রিপিং থেকে উচ্চ সুরক্ষা: ক্যারিয়ার পেলেও স্থানীয় জোন ২ ফল্ট শনাক্ত করলেই কেবল ব্রেকার ট্রিপ করে' } },
        { id: 'opt-2', text: { en: 'It eliminates the need for circuit breakers in the substation', hi: 'यह सबस्टेशन में सर्किट ब्रेकर्स की आवश्यकता को समाप्त करता है', bn: 'এটি সাবস্টেশনে সার্কিট ব্রেকারের প্রয়োজনীয়তা দূর করে' } },
        { id: 'opt-3', text: { en: 'It increases the power factor of the transmission grid to 1.0', hi: 'यह ग्रिड के पावर फैक्टर को 1.0 तक बढ़ाता है', bn: 'এটি গ্রিডের পাওয়ার ফ্যাক্টর ১.০ এ উন্নীত করে' } },
        { id: 'opt-4', text: { en: 'It cools the overhead conductors during peak summer loads', hi: 'यह गर्मियों में पारेषण कंडक्टरों को ठंडा करता है', bn: 'এটি গ্রীষ্মকালে তারের তাপমাত্রা কমিয়ে রাখে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'In DUTT, any spurious signal received over the channel triggers a breaker trip. In PUTT, the remote terminal must independently verify that an internal fault exists using its Zone 2 detector before executing a trip.',
        hi: 'DUTT में संचार चैनल में शोर आने पर भी ब्रेकर ट्रिप हो सकता है। PUTT में स्थानीय ज़ोन 2 की पुष्टि आवश्यक होती है, जिससे सुरक्षा बनी रहती है।',
        bn: 'DUTT স্কিমে চ্যানেলের ভুয়া নয়েজেও ব্রেকার খুলে যেতে পারে। PUTT স্কিমে ক্যারিয়ার সংকেতের পাশাপাশি স্থানীয় জোন ২ উপাদান ফল্ট নিশ্চিত করলেই কেবল ট্রিপ ঘটে।'
      }
    },
    {
      id: 'mcq-ch17-l07-02',
      question: {
        en: 'In a Permissive Over-Reach Transfer Trip (POTT) scheme, what condition is required to initiate an instantaneous trip of the transmission line?',
        hi: 'POTT योजना में, पारेषण लाइन के त्वरित ट्रिप को शुरू करने के लिए क्या शर्त आवश्यक है?',
        bn: 'POTT স্কিমে সঞ্চালন লাইনে তাৎক্ষণিক ট্রিপ কার্যকর করার জন্য কোন শর্তটি পূরণ হওয়া আবশ্যক?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Both line terminals must simultaneously detect a forward fault in their respective over-reaching zones (Zone 2) and exchange carrier permission', hi: 'दोनों लाइन टर्मिनलों को अपने संबंधित ज़ोन 2 में आगे की ओर फॉल्ट देखना चाहिए और कैरियर अनुमति का आदान-प्रदान करना चाहिए', bn: 'উভয় প্রান্তের রিলেকে তাদের নিজ নিজ ওভার-রিচিং জোনে (জোন ২) ফরোয়ার্ড ফল্ট দেখতে হবে এবং ক্যারিয়ার পারমিশন বিনিময় করতে হবে' } },
        { id: 'opt-2', text: { en: 'Substation battery voltage must drop to zero', hi: 'सबस्टेशन बैटरी वोल्टेज शून्य होना चाहिए', bn: 'সাবস্টেশনের ব্যাটারি ভোল্টেজ শূন্য হতে হবে' } },
        { id: 'opt-3', text: { en: 'The Buchholz relay float must sink completely', hi: 'बुखोल्ज़ रिले फ्लोट पूरी तरह से डूबना चाहिए', bn: 'বুখহোলজ রিলের ফ্লোট পুরোপুরি নিমজ্জিত হতে হবে' } },
        { id: 'opt-4', text: { en: 'Only terminal A needs to detect a fault; terminal B does not matter', hi: 'केवल टर्मिनल A को फॉल्ट देखना चाहिए; B की आवश्यकता नहीं है', bn: 'কেবল প্রান্ত A ফল্ট দেখলেই যথেষ্ট; প্রান্ত B এর দেখার দরকার নেই' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'In POTT, each terminal has a forward reach of ~120%. If a fault is inside the line, both ends see it in forward direction and exchange carrier permissions, tripping instantly. If external, one end sees it in reverse and withholds permission.',
        hi: 'POTT में दोनों सिरे 120% आगे देखते हैं। यदि फॉल्ट लाइन के अंदर है, तो दोनों सिरे आगे फॉल्ट देखकर तुरंत ट्रिप कर देते हैं।',
        bn: 'POTT স্কিমে উভয় প্রান্ত প্রায় ১২০% সামনের দিকে নজর রাখে। ফল্টটি ভেতরে হলে উভয় প্রান্তই একে ফরোয়ার্ড দেখে এবং ক্যারিয়ার পাঠিয়ে সাথে সাথে ট্রিপ করে।'
      }
    },
    {
      id: 'mcq-ch17-l07-03',
      question: {
        en: 'What is the electrical function of the Line Trap (Wave Trap) in a Power Line Carrier Communication (PLCC) system?',
        hi: 'PLCC प्रणाली में लाइन ट्रैप (वेव ट्रैप) का विद्युत कार्य क्या है?',
        bn: 'PLCC সিস্টেমে লাইন ট্র্যাপ বা ওয়েভ ট্র্যাপের মূল বৈদ্যুতিক কাজ কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'It presents low impedance to 50 Hz power current while presenting high parallel-resonant impedance (>1000 Ω) to carrier RF signals (50–500 kHz)', hi: 'यह 50 Hz बिजली धारा को कम प्रतिबाधा देता है जबकि कैरियर RF संकेतों (50-500 kHz) को उच्च प्रतिबाधा (>1000 Ω) प्रस्तुत करता है', bn: 'এটি ৫০ Hz বিদ্যুৎ কারেন্টকে সামান্য বাধায় যেতে দেয় কিন্তু ক্যারিয়ার রেডিও সিগন্যালকে (৫০-৫০০ kHz) উচ্চ রেজোন্যান্ট বাধায় (>১০০০ Ω) আটকে রাখে' } },
        { id: 'opt-2', text: { en: 'It transforms 400 kV alternating current down to 230 V household voltage', hi: 'यह 400 kV एसी को 230 V घरेलू वोल्टेज में बदलता है', bn: 'এটি ৪০০ kV এসি বিদ্যুৎকে ২৩০ ভোল্টে রূপান্তর করে' } },
        { id: 'opt-3', text: { en: 'It stores surplus electrical energy in a superconducting coil', hi: 'यह अतिरिक्त विद्युत ऊर्जा को कॉइल में संग्रहीत करता है', bn: 'এটি অতিরিক্ত বিদ্যুৎ শক্তি সুপারকন্ডাক্টিং কয়েলে জমা রাখে' } },
        { id: 'opt-4', text: { en: 'It acts as an aerodynamic damper to stop conductor galloping', hi: 'यह कंडक्टर के कंपन को रोकने के लिए स्पंज का काम करता है', bn: 'এটি তারের বাতাসজনিত কম্পন থামানোর ড্যাম্পার হিসেবে কাজ করে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'The wave trap is a parallel resonant inductor-capacitor filter mounted in series with the phase conductor. It prevents high-frequency communication signals from dissipating into the substation busbars.',
        hi: 'वेव ट्रैप एक पैरेलल रेजोनेंट फिल्टर है जो 50 Hz बिजली को जाने देता है लेकिन सबस्टेशन में कैरियर सिग्नल के रिसाव को पूरी तरह रोकता है।',
        bn: 'ওয়েভ ট্র্যাপ হলো একটি প্যারালাল রেজোন্যান্ট ফিল্টার যা ৫০ Hz বিদ্যুৎ প্রবাহে বাধা দেয় না কিন্তু সাবস্টেশনের বাসবারে ক্যারিয়ার সিগন্যাল হারিয়ে যাওয়া রোধ করে।'
      }
    },
    {
      id: 'mcq-ch17-l07-04',
      question: {
        en: 'What is the purpose of the Drain Coil installed in the base of a Coupling Capacitor Voltage Transformer (CCVT)?',
        hi: 'CCVT के आधार में स्थापित ड्रेन कॉइल का उद्देश्य क्या है?',
        bn: 'CCVT এর বেসে স্থাপিত ড্রেন কয়েলের প্রধান কাজ কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'To provide a low-impedance path to safely ground 50 Hz power frequency leakage while presenting high impedance to communication frequencies', hi: 'संचार आवृत्तियों को उच्च प्रतिबाधा प्रस्तुत करते हुए 50 Hz रिसाव धारा को सुरक्षित रूप से ग्राउंड करने के लिए', bn: 'ক্যারিয়ার সিগন্যালকে বাধা দিয়ে ৫০ Hz লিকেজ কারেন্টকে নিরাপদে মাটিতে নিষ্কাশন করার জন্য' } },
        { id: 'opt-2', text: { en: 'To drain transformer cooling oil into underground reservoirs', hi: 'ट्रांसफार्मर के तेल को भूमिगत टैंकों में निकालने के लिए', bn: 'ট্রান্সফরমার তেল মাটিতে ফেলে দেওয়ার জন্য' } },
        { id: 'opt-3', text: { en: 'To generate ultrasound waves that repel birds', hi: 'पक्षियों को भगाने के लिए अल्ट्रासाउंड तरंगें उत्पन्न करने के लिए', bn: 'পাখি তাড়াতে শব্দ তরঙ্গ তৈরি করতে' } },
        { id: 'opt-4', text: { en: 'To step down current for secondary meters', hi: 'मीटर के लिए करंट को कम करने के लिए', bn: 'মিটারের জন্য কারেন্ট স্টেপ-ডাউন করতে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'The drain coil is an inductor connected between the capacitor base and earth. At 50 Hz, its reactance is only a few ohms, safely discharging power current. At 150 kHz, its reactance is thousands of ohms, keeping the RF signal directed into the Line Matching Unit.',
        hi: 'ड्रेन कॉइल 50 Hz बिजली करंट को सुरक्षित रूप से जमीन में बहा देती है, लेकिन उच्च आवृत्ति वाले कैरियर सिग्नल को ग्राउंड होने से रोकती है।',
        bn: 'ড্রেন কয়েল ৫০ Hz বিদ্যুৎ কারেন্টকে নিরাপদে মাটিতে পাঠিয়ে দেয়, কিন্তু রেডিও ক্যারিয়ার সিগন্যালকে মাটিতে নষ্ট না হতে দিয়ে LMU এর দিকে পাঠায়।'
      }
    },
    {
      id: 'mcq-ch17-l07-05',
      question: {
        en: 'Why is Line Current Differential (ANSI 87L) over dedicated optical fiber superior to distance protection for protecting parallel transmission lines?',
        hi: 'समानांतर पारेषण लाइनों की सुरक्षा के लिए समर्पित ऑप्टिकल फाइबर पर लाइन करंट डिफरेंशियल (87L) डिस्टेंस सुरक्षा से बेहतर क्यों है?',
        bn: 'সমান্তরাল সঞ্চালন লাইনের সুরক্ষায় অপটিক্যাল ফাইবার সমন্বিত লাইন ডিফারেনশিয়াল (87L) ডিসট্যান্স সুরক্ষার চেয়ে শ্রেয় কেন?'
      },
      options: [
        { id: 'opt-1', text: { en: 'It is strictly a unit protection scheme completely immune to zero-sequence mutual coupling and voltage transformer transients', hi: 'यह एक यूनिट सुरक्षा योजना है जो जीरो-सीक्वेंस म्यूचुअल कपलिंग और पीटी ट्रांजिएंट से पूरी तरह अप्रभावित है', bn: 'এটি একটি খাঁটি ইউনিট সুরক্ষা যা সমান্তরাল তারের জিরো-সিকোয়েন্স মিউচুয়াল প্রভাব ও পিটি ভোল্টেজ ট্রানজিয়েন্ট থেকে সম্পূর্ণ মুক্ত' } },
        { id: 'opt-2', text: { en: 'It operates without using any current transformers', hi: 'यह बिना किसी करंट ट्रांसफार्मर के काम करता है', bn: 'এটি কোনো সিটি ছাড়াই কাজ করে' } },
        { id: 'opt-3', text: { en: 'It eliminates line transmission losses completely', hi: 'यह लाइन ट्रांसमिशन नुकसान को पूरी तरह समाप्त करता है', bn: 'এটি সঞ্চালন লাইনের সমস্ত লস দূর করে দেয়' } },
        { id: 'opt-4', text: { en: 'It does not require circuit breakers to disconnect faults', hi: 'इसे फॉल्ट को अलग करने के लिए सर्किट ब्रेकर की आवश्यकता नहीं होती', bn: 'ফল্ট ক্লিয়ার করতে ব্রেকারের দরকার হয় না' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Parallel lines suffer strong zero-sequence mutual inductive coupling (Z0m) which distorts apparent impedance and causes distance relays to under-reach or over-reach. Line differential relies solely on current vector sums and is completely unaffected.',
        hi: 'समानांतर लाइनों में म्यूचुअल कपलिंग के कारण डिस्टेंस रिले गलत दूरी माप सकते हैं। लाइन डिफरेंशियल केवल धाराओं की तुलना करता है और इससे अप्रभावित रहता है।',
        bn: 'সমান্তরাল লাইনে মিউচুয়াল কাপলিংয়ের কারণে ডিসট্যান্স রিলে আন্ডার-রীচ বা ওভার-রীচে আক্রান্ত হয়। 87L রিলে কেবল উভয় প্রান্তের কারেন্ট ভেক্টর যোগ করায় সম্পূর্ণ নির্ভুল থাকে।'
      }
    },
    {
      id: 'mcq-ch17-l07-06',
      question: {
        en: 'What happens if the communication propagation delay across an OPGW fiber link changes asymmetrically and is NOT compensated by an 87L line differential relay?',
        hi: 'यदि OPGW फाइबर लिंक में संचरण देरी असममित रूप से बदलती है और 87L रिले द्वारा इसकी भरपाई नहीं की जाती है, तो क्या होगा?',
        bn: 'OPGW ফাইবার লিংকে সিগন্যাল সঞ্চালন বিলম্ব যদি অসমানভাবে পরিবর্তিত হয় এবং 87L রিলে তা ক্ষতিপূরণ না করে, তবে কী ঘটবে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'An artificial phase angle shift appears between local and remote currents, generating a false differential current that trips the line on normal load', hi: 'स्थानीय और रिमोट धाराओं के बीच एक कृत्रिम फेज शिफ्ट आ जाती है, जिससे सामान्य लोड पर भी झूठा डिफरेंशियल करंट लाइन को ट्रिप कर देता है', bn: 'উভয় প্রান্তের কারেন্টের মধ্যে কৃত্রিম ফেজ শিফট তৈরি হয়, ফলে স্বাভাবিক লোডেই ভুয়া ডিফারেনশিয়াল কারেন্ট উৎপন্ন হয়ে লাইন ট্রিপ করে' } },
        { id: 'opt-2', text: { en: 'The fiber optic cable melts due to excess heat', hi: 'अत्यधिक गर्मी के कारण ऑप्टिकल फाइबर केबल पिघल जाती है', bn: 'অতিরিক্ত উত্তাপে ফাইবার অপটিক ক্যাবল গলে যাবে' } },
        { id: 'opt-3', text: { en: 'The transmission line voltage drops from 400 kV to 220 kV', hi: 'पारेषण लाइन वोल्टेज 400 kV से गिरकर 220 kV हो जाता है', bn: 'লাইনের ভোল্টেজ ৪০০ kV থেকে কমে ২২০ kV হবে' } },
        { id: 'opt-4', text: { en: 'The digital signal processor inside the relay shuts down permanently', hi: 'रिले का डिजिटल सिग्नल प्रोसेसर स्थायी रूप से बंद हो जाता है', bn: 'রিলের ডিএসপি প্রসেসর স্থায়ীভাবে অকেজো হয়ে যাবে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Just 1 millisecond of uncompensated propagation delay in a 50 Hz network produces an 18° phase error. For high load currents, this phase difference creates enough spill current to trigger an immediate, false differential trip.',
        hi: '50 Hz पर 1 ms की देरी 18° का फेज अंतर लाती है। इससे बिना किसी फॉल्ट के भारी डिफरेंशियल करंट बनता है और रिले लाइन को ट्रिप कर देता है।',
        bn: '৫০ Hz সিস্টেমে মাত্র ১ মিলিসেকেন্ডের অসামঞ্জস্যতা ১৮ ডিগ্রির ফেজ ত্রুটি তৈরি করে, যার ফলে স্বাভাবিক লোডেই রিলে ফল্ট ভেবে পুরো লাইন ট্রিপ করিয়ে দেবে।'
      }
    },
    {
      id: 'mcq-ch17-l07-07',
      question: {
        en: 'In a Directional Comparison Blocking (DCB) teleprotection scheme, what signal is transmitted over the PLCC channel when a reverse external fault occurs?',
        hi: 'DCB टेलीप्रोटेक्शन योजना में, जब रिवर्स बाहरी फॉल्ट होता है तो PLCC चैनल पर कौन सा सिग्नल भेजा जाता है?',
        bn: 'DCB টেলিসুরক্ষা স্কিমে যখন পেছনের দিকে কোনো বাহ্যিক ফল্ট ঘটে, তখন PLCC চ্যানেলে কোন সিগন্যাল পাঠানো হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'A "BLOCK" signal to prevent the remote terminal over-reaching zone from tripping', hi: 'रिमोट टर्मिनल ओवर-रीचिंग ज़ोन को ट्रिप करने से रोकने के लिए "BLOCK" सिग्नल', bn: 'রিমোট প্রান্তের ওভার-রিচিং জোন যেন ভুল ট্রিপ না করে সেজন্য একটি "BLOCK" সিগন্যাল' } },
        { id: 'opt-2', text: { en: 'A direct trip command to open all breakers instantly', hi: 'सभी ब्रेकर्स को तुरंत खोलने के लिए डायरेक्ट ट्रिप कमांड', bn: 'সব ব্রেকার একযোগে খোলার জন্য ডাইরেক্ট ট্রিপ কমান্ড' } },
        { id: 'opt-3', text: { en: 'A high-definition video feed of the fault location', hi: 'फॉल्ट स्थान का हाई-डेफिनिशन वीडियो', bn: 'ফল্ট এলাকার লাইভ ভিডিও ফিড' } },
        { id: 'opt-4', text: { en: 'No signal is transmitted under any circumstances', hi: 'किसी भी परिस्थिति में कोई सिग्नल नहीं भेजा जाता', bn: 'কোনো অবস্থাতেই কোনো সিগন্যাল পাঠানো হয় না' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'In DCB, if terminal B sees a fault behind it, it transmits a high-speed "BLOCK" carrier signal to terminal A. Terminal A receives the block signal and withholds its over-reaching Zone 2 trip, keeping the healthy line stable.',
        hi: 'DCB में रिवर्स फॉल्ट देखने वाला सिरा तुरंत एक "BLOCK" सिग्नल भेजता है ताकि दूसरा सिरा लाइन को गलती से ट्रिप न कर दे।',
        bn: 'DCB স্কিমে যে প্রান্তটি পেছনে ফল্ট দেখে, সে দ্রুত অপর প্রান্তে "BLOCK" সিগন্যাল পাঠায় যাতে অপর প্রান্তের ওভার-রিচিং জোন সুস্থ লাইনটিকে ট্রিপ না করে।'
      }
    },
    {
      id: 'mcq-ch17-l07-08',
      question: {
        en: 'What protocol is modern standard for nanosecond-level time stamping in digital substation line differential protection?',
        hi: 'डिजिटल सबस्टेशन लाइन डिफरेंशियल सुरक्षा में नैनोसेकंड-स्तरीय समय मुहर लगाने के लिए कौन सा प्रोटोकॉल आधुनिक मानक है?',
        bn: 'ডিজিটাল সাবস্টেশনের লাইন ডিফারেনশিয়াল সুরক্ষায় ন্যানোসেকেন্ড মাত্রার টাইম-স্ট্যাম্পিং নিশ্চিত করতে কোন প্রোটোকল আধুনিক মানদণ্ড?'
      },
      options: [
        { id: 'opt-1', text: { en: 'IEEE 1588 Precision Time Protocol (PTP)', hi: 'IEEE 1588 प्रिसिजन टाइम प्रोटोकॉल (PTP)', bn: 'IEEE 1588 প্রিসিশন টাইম প্রোটোকল (PTP)' } },
        { id: 'opt-2', text: { en: 'HTTP 1.1 Web Transfer Protocol', hi: 'HTTP 1.1 वेब ट्रांसफर प्रोटोकॉल', bn: 'HTTP 1.1 ওয়েব ট্রান্সফার প্রোটোকল' } },
        { id: 'opt-3', text: { en: 'Bluetooth 4.0 Low Energy', hi: 'ब्लूटूथ 4.0 लो एनर्जी', bn: 'ব্লুটুথ ৪.০ লো এনার্জি' } },
        { id: 'opt-4', text: { en: 'Simple Mail Transfer Protocol (SMTP)', hi: 'सिंपल मेल ट्रांसफर प्रोटोकॉल (SMTP)', bn: 'সিম্পল মেল ট্রান্সফার প্রোটোকল (SMTP)' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'IEEE 1588 PTP delivers sub-microsecond synchronization over Ethernet and fiber-optic networks, allowing digital substations and line differential relays to calculate phase angles with extreme accuracy.',
        hi: 'IEEE 1588 PTP सब-माइक्रोसेकंड स्तर का समय सिंक्रोनाइज़ेशन प्रदान करता है, जिससे रिले अत्यंत सटीकता से धाराओं का मिलान करते हैं।',
        bn: 'IEEE 1588 PTP অপটিক্যাল নেটওয়ার্কে সাব-মাইক্রোসেকেন্ড মাত্রার নির্ভুল সিঙ্ক্রোনাইজেশন দেয় যা লাইন ডিফারেনশিয়াল রিলেতে নিখুঁত ফেজ অ্যাঙ্গেল নিশ্চিত করে।'
      }
    }
  ]
};
