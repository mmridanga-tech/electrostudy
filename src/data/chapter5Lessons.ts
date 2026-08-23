import { Lesson } from '../types';

export const LESSON_AC_FUNDAMENTALS: Lesson = {
  id: 'lsn-ch5-ac-fundamentals',
  topicId: 'ch5-ac-fundamentals',
  order: 1,
  title: {
    en: 'AC Fundamentals & Waveform Characteristics',
    hi: 'एसी के मूल सिद्धांत एवं वेवफॉर्म विशेषताएँ',
    bn: 'এসি-র মৌলিক ধারণা ও ওয়েভফর্মের বৈশিষ্ট্য'
  },
  easyExplanation: {
    en: 'Alternating Current (AC) is an electric current whose magnitude and direction change periodically with time, reversing its direction at regular intervals, unlike Direct Current (DC) which flows in only one fixed direction.',
    hi: 'प्रत्यावर्ती धारा (AC) वह विद्युत धारा है जिसका परिमाण और दिशा समय के साथ समय-समय पर (आवधिक रूप से) बदलते रहते हैं, और नियमित अंतराल पर अपनी दिशा उलटते हैं, दिष्ट धारा (DC) के विपरीत जो केवल एक स्थिर दिशा में बहती है।',
    bn: 'অল্টারনেটিং কারেন্ট (এসি) হলো এমন একটি তড়িৎ প্রবাহ যার মান ও অভিমুখ সময়ের সাথে সাথে নির্দিষ্ট পর্যায়বৃত্ত নিয়মে পরিবর্তিত হয় এবং নির্দিষ্ট সময় পর পর দিক পরিবর্তন করে; ডিরেক্ট কারেন্ট (ডিসি) এর মতো একমুখী নয়।'
  },
  detailedExplanation: {
    en: '1. What is Alternating Current (AC)?\nAn alternating quantity (voltage or current) is defined as one that acts alternately in positive and negative directions, undergoing a complete set of changes in magnitude and direction that repeats at regular periodic time intervals.\n\n2. Periodic Quantity & Waveform:\nA periodic quantity repeats identical values after a fixed duration called the time period (T). When plotted against time or electrical angle on the X-axis, the resulting curve is known as the periodic waveform.\n\n3. Sinusoidal Waveform:\nThe most fundamental and ubiquitous AC waveform in power engineering is the sine wave, generated when a conductor loop rotates at constant angular velocity ω in a uniform magnetic field (Faraday\'s law of electromagnetic induction).\n\n4. Key Waveform Definitions:\n- Cycle: One complete set of positive and negative variations of an alternating quantity.\n- Time Period (T): The time taken in seconds (s) to complete one full cycle. T = 1 / f.\n- Frequency (f): The number of complete cycles executed per second, measured in Hertz (Hz). f = 1 / T.\n- Angular Frequency (ω): The rate of change of electrical angle in radians per second (rad/s). ω = 2πf = 2π / T.\n- Instantaneous Value (v, i): The value of an alternating quantity at any specific instant of time t.\n- Maximum / Peak Value (Vm, Im): The highest magnitude (positive or negative) attained during a cycle. Also called Amplitude.\n- Peak-to-Peak Value (Vp-p, Ip-p): The total difference between positive peak and negative peak: Vp-p = 2 · Vm.\n- Positive Half-Cycle: The portion where the waveform is above the zero axis (0 to T/2, or 0 to π radians).\n- Negative Half-Cycle: The portion where the waveform is below the zero axis (T/2 to T, or π to 2π radians).\n- Zero Crossings: Points in time where the instantaneous value passes through zero volts or zero amperes.\n\n5. General Sinusoidal Equation:\nv(t) = Vm · sin(ωt + φ) = Vm · sin(2πf · t + φ)\nWhere Vm is peak voltage, ω is angular frequency, t is time in seconds, and φ is the initial phase angle.\n\n6. AC vs DC Comparison:\n- DC flows in a single invariant direction, has zero frequency (f = 0 Hz), and is suitable for batteries and electronics.\n- AC alternates periodically, enables effortless high-voltage step-up/step-down transformation via transformers, minimizing I²R transmission losses over long distances.',
    hi: '1. प्रत्यावर्ती धारा (AC) क्या है?\nप्रत्यावर्ती राशि वह विद्युत राशि है जिसकी दिशा और परिमाण समय के साथ लगातार परिवर्तित होते हैं तथा एक निश्चित समय अंतराल (आवर्तकाल) के बाद दोहराए जाते हैं।\n\n2. आवधिक राशि एवं वेवफॉर्म:\nनिश्चित समय अवधि (T) के बाद अपने मान दोहराने वाली राशि को आवधिक राशि कहते हैं। समय के सापेक्ष इसका आरेख वेवफॉर्म कहलाता है।\n\n3. साइनसॉइडल वेवफॉर्म:\nजब एक कॉइल एकसमान चुंबकीय क्षेत्र में नियत कोणीय वेग ω से घूमती है, तो फैराडे के नियम के अनुसार साइनसॉइडल वोल्टेज उत्पन्न होता है।\n\n4. प्रमुख परिभाषाएँ:\n- चक्र (Cycle): धनात्मक और ऋणात्मक मानों का एक पूर्ण सेट।\n- आवर्तकाल (Time Period, T): एक चक्र पूरा करने में लगा समय (सेकंड में)। T = 1 / f।\n- आवृत्ति (Frequency, f): प्रति सेकंड पूरे किए गए चक्रों की संख्या, मात्रक हर्ट्ज़ (Hz)। f = 1 / T।\n- कोणीय आवृत्ति (Angular Frequency, ω): कोणीय परिवर्तन की दर (rad/s में)। ω = 2πf।\n- तात्कालिक मान (v, i): किसी विशिष्ट क्षण t पर वोल्टेज या धारा का मान।\n- शिखर मान / आयाम (Vm, Im): एक चक्र के दौरान प्राप्त उच्चतम परिमाण।\n- शिखर-से-शिखर मान (Vp-p): धनात्मक शिखर और ऋणात्मक शिखर के बीच का अंतर (Vp-p = 2Vm)।\n- शून्य क्रॉसिंग: वे बिंदु जहाँ वेवफॉर्म शून्य रेखा को पार करता है।\n\n5. सामान्य समीकरण:\nv(t) = Vm · sin(ωt + φ) = Vm · sin(2πf · t + φ)\n\n6. AC बनाम DC:\nDC एक ही दिशा में बहती है (f = 0)। AC दिशा बदलती है और ट्रांसफार्मर की मदद से आसानी से उच्च वोल्टेज पर स्टेप-अप/स्टेप-डाउन की जा सकती है।',
    bn: '১. অল্টারনেটিং কারেন্ট (AC) কী?\nযে তড়িৎ প্রবাহের মান ও দিক সময়ের সাথে সাথে পরিবর্তিত হয় এবং একটি নির্দিষ্ট সময় পর পর পুনরাবৃত্ত হয় তাকে অল্টারনেটিং কারেন্ট বা এসি বলে।\n\n২. পর্যায়ক্রমিক রাশি ও ওয়েভফর্ম:\nনির্দিষ্ট সময়কাল পর পর একই মান প্রদর্শনকারী রাশিকে পর্যায়ক্রমিক রাশি বলে। সময়ের বিপরীতে এর অঙ্কিত লেখচিত্রই ওয়েভফর্ম।\n\n৩. সাইনুসয়েডাল ওয়েভফর্ম:\nচৌম্বক ক্ষেত্রে ধ্রুবক কৌণিক বেগে ঘূর্ণায়মান কয়েলে উৎপন্ন ভোল্টেজ সাইন তরঙ্গাকারে পরিবর্তিত হয়।\n\n৪. গুরুত্বপূর্ণ সংজ্ঞাসমূহ:\n- সাইকেল (Cycle): একটি পূর্ণ পজিটিভ এবং নেগেটিভ অর্ধ-চক্রের সমষ্টি।\n- পর্যায়কাল (Time Period, T): এক পূর্ণ সাইকেল সম্পন্ন হতে যে সময় লাগে (সেকেন্ডে)। T = 1 / f।\n- ফ্রিকোয়েন্সি (Frequency, f): প্রতি সেকেন্ডে সম্পন্ন পূর্ণ সাইকেলের সংখ্যা, একক হার্টজ (Hz)। f = 1 / T।\n- কৌণিক কম্পাঙ্ক (Angular Frequency, ω): কোণ পরিবর্তনের হার, একক rad/s। ω = 2πf।\n- তাৎক্ষণিক মান (v, i): যেকোনো নির্দিষ্ট মুহূর্ত t-তে ভোল্টেজ বা কারেন্টের মান।\n- পিক মান / অ্যাম্প্লিটিউড (Vm, Im): একটি সাইকেলে অর্জিত সর্বোচ্চ মান।\n- পিক-টু-পিক মান (Vp-p): পজিটিভ পিক থেকে নেগেটিভ পিকের দূরত্ব (Vp-p = 2Vm)।\n- জিরো ক্রসিং: যে বিন্দুতে তরঙ্গ শূন্য রেখা অতিক্রম করে।\n\n৫. সাধারণ সমীকরণ:\nv(t) = Vm · sin(ωt + φ) = Vm · sin(2πf · t + φ)\n\n৬. AC বনাম DC তুলনা:\nDC কেবল একদিকে প্রবাহিত হয় (f = 0)। AC দিক পরিবর্তন করে এবং ট্রান্সফরমারের মাধ্যমে দূর-দূরান্তে সহজে বিদ্যুৎ সঞ্চালন করা যায়।'
  },
  formulas: [
    {
      symbol: 'T',
      expression: 'T = 1 / f',
      description: {
        en: 'Time Period of AC waveform (T in seconds, f in Hertz)',
        hi: 'एसी वेवफॉर्म का आवर्तकाल (T सेकंड में, f हर्ट्ज़ में)',
        bn: 'এসি তরঙ্গের পর্যায়কাল (T সেকেন্ডে, f হার্টজে)'
      }
    },
    {
      symbol: 'ω',
      expression: 'ω = 2 · π · f = 2π / T',
      description: {
        en: 'Angular Frequency (ω in radians per second, rad/s)',
        hi: 'कोणीय आवृत्ति (ω रेडियन प्रति सेकंड में)',
        bn: 'কৌণিক কম্পাঙ্ক (ω রেডিয়ান প্রতি সেকেন্ডে)'
      }
    },
    {
      symbol: 'V_p-p',
      expression: 'V_{p-p} = 2 · V_m',
      description: {
        en: 'Peak-to-Peak Voltage (Vm = Maximum Peak Voltage)',
        hi: 'शिखर-से-शिखर वोल्टेज (Vm = अधिकतम शिखर वोल्टेज)',
        bn: 'পিক-টু-পিক ভোল্টেজ (Vm = সর্বোচ্চ পিক ভোল্টেজ)'
      }
    },
    {
      symbol: 'v(t)',
      expression: 'v(t) = V_m · sin(ωt + φ)',
      description: {
        en: 'Instantaneous Voltage Equation for Sinusoidal AC Quantity',
        hi: 'साइनसॉइडल एसी राशि का तात्कालिक वोल्टेज समीकरण',
        bn: 'সাইনুসয়েডাল এসি রাশির তাৎক্ষণিক ভোল্টেজ সমীকরণ'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ac-fundamentals',
      title: {
        en: 'Sinusoidal AC Waveform Anatomy & Periodic Metrics',
        hi: 'साइनसॉइडल एसी वेवफॉर्म की संरचना एवं आवधिक मेट्रिक्स',
        bn: 'সাইনুসয়েডাল এসি ওয়েভফর্মের গঠন ও পর্যায়ক্রমিক পরিমাপ'
      },
      caption: {
        en: 'Visual representation of peak amplitude (Vm), peak-to-peak (2Vm), time period (T), positive half-cycle, negative half-cycle, and zero crossing nodes.',
        hi: 'शिखर आयाम (Vm), शिखर-से-शिखर (2Vm), आवर्तकाल (T), धनात्मक एवं ऋणात्मक अर्ध-चक्र का दृश्य निरूपण।',
        bn: 'পিক অ্যাম্প্লিটিউড (Vm), পিক-টু-পিক (2Vm), পর্যায়কাল (T), পজিটিভ ও নেগেটিভ অর্ধ-চক্রের সচিত্র রূপ।'
      },
      svgType: 'circuit-ac-fundamentals'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch5-freq-to-period',
      problem: {
        en: 'An alternating AC voltage supply operates at a standard power grid frequency of f = 50 Hz. Calculate the exact time period (T) of one complete cycle in seconds and in milliseconds.',
        hi: 'एक प्रत्यावर्ती एसी वोल्टेज आपूर्ति मानक पावर ग्रिड आवृत्ति f = 50 Hz पर संचालित होती है। एक पूर्ण चक्र के आवर्तकाल (T) की सेकंड एवं मिलीसेकंड में गणना करें।',
        bn: 'একটি অল্টারনেটিং এসি ভোল্টেজ সাপ্লাই মানক পাওয়ার গ্রিড ফ্রিকোয়েন্সি f = ৫০ Hz এ চালিত হয়। এক পূর্ণ সাইকেলের পর্যায়কাল (T) সেকেন্ড ও মিলি সেকেন্ডে নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n- Frequency f = 50 Hz\n\nFormula:\nTime Period T = 1 / f\n\nSubstitution:\nT = 1 / 50 s\n\nCalculation:\nT = 0.020 s\nIn milliseconds: T = 0.020 × 1000 = 20.0 ms\n\nAnswer:\nTime period T = 0.020 s = 20.0 ms.',
        hi: 'दिया गया है:\n- आवृत्ति f = 50 Hz\n\nसूत्र:\nआवर्तकाल T = 1 / f\n\nमान रखने पर:\nT = 1 / 50 = 0.020 s\nमिलीसेकंड में: T = 0.020 × 1000 = 20.0 ms\n\nउत्तर:\nआवर्तकाल T = 20.0 ms।',
        bn: 'প্রদত্ত:\n- ফ্রিকোয়েন্সি f = ৫০ Hz\n\nসূত্র:\nপর্যায়কাল T = 1 / f\n\nমান বসিয়ে:\nT = ১ / ৫০ = ০.০২০ s\nমিলি সেকেন্ডে: T = ০.০২০ × ১০০০ = ২০.০ ms\n\nউত্তর:\nপর্যায়কাল T = ২০.০ ms।'
      },
      givenValues: {
        'Frequency (f)': '50 Hz'
      },
      finalAnswer: {
        en: 'Time Period T = 0.020 s (20.0 ms)',
        hi: 'आवर्तकाल T = 0.020 s (20.0 ms)',
        bn: 'পর্যায়কাল T = ০.০২০ s (২০.০ ms)'
      }
    },
    {
      id: 'ex-ch5-freq-to-omega',
      problem: {
        en: 'A commercial aircraft electrical alternator produces AC voltage at a frequency of f = 400 Hz. Calculate its angular frequency (ω) in radians per second (rad/s).',
        hi: 'एक वाणिज्यिक विमान का अल्टरनेटर f = 400 Hz आवृत्ति पर एसी वोल्टेज उत्पन्न करता है। इसकी कोणीय आवृत्ति (ω) रेडियन प्रति सेकंड (rad/s) में ज्ञात करें।',
        bn: 'একটি বাণিজ্যিক বিমানের অল্টারনেটর f = ৪০০ Hz ফ্রিকোয়েন্সিতে এসি ভোল্টেজ তৈরি করে। এর কৌণিক কম্পাঙ্ক (ω) rad/s এককে নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n- Frequency f = 400 Hz\n\nFormula:\nAngular Frequency ω = 2 · π · f\n\nSubstitution:\nω = 2 · π · 400 = 800 · π\n\nCalculation:\nω = 800 × 3.14159265 = 2513.27 rad/s\n\nAnswer:\nAngular frequency ω = 2513.27 rad/s (approx 2513.3 rad/s).',
        hi: 'दिया गया है:\n- आवृत्ति f = 400 Hz\n\nसूत्र:\nकोणीय आवृत्ति ω = 2 · π · f\n\nमान रखने पर:\nω = 2 × π × 400 = 800π\n\nगणना:\nω = 800 × 3.14159 = 2513.27 rad/s\n\nउत्तर:\nकोणीय आवृत्ति ω = 2513.27 rad/s।',
        bn: 'প্রদত্ত:\n- ফ্রিকোয়েন্সি f = ৪০০ Hz\n\nসূত্র:\nকৌণিক কম্পাঙ্ক ω = 2 · π · f\n\nমান বসিয়ে:\nω = ২ × π × ৪০০ = ৮০০π\n\nহিসাব:\nω = ৮০০ × ৩.১৪১৫৯ = ২৫১৩.২৭ rad/s\n\nউত্তর:\nকৌণিক কম্পাঙ্ক ω = ২৫১৩.২৭ rad/s।'
      },
      givenValues: {
        'Frequency (f)': '400 Hz'
      },
      finalAnswer: {
        en: 'Angular Frequency ω = 2513.27 rad/s',
        hi: 'कोणीय आवृत्ति ω = 2513.27 rad/s',
        bn: 'কৌণিক কম্পাঙ্ক ω = ২৫১৩.২৭ rad/s'
      }
    },
    {
      id: 'ex-ch5-peak-to-peak',
      problem: {
        en: 'An oscilloscope measurement shows an AC sinusoidal waveform having a positive peak voltage Vm = +160 V. Determine its total peak-to-peak voltage (Vp-p).',
        hi: 'ऑसिलोस्कोप माप से पता चलता है कि एक एसी साइनसॉइडल वेवफॉर्म का धनात्मक शिखर वोल्टेज Vm = +160 V है। इसका कुल शिखर-से-शिखर वोल्टेज (Vp-p) निर्धारित करें।',
        bn: 'একটি অসিলোস্কোপ পরিমাপে দেখা গেল একটি এসি সাইন তরঙ্গের পজিটিভ পিক ভোল্টেজ Vm = +১৬০ V। এর মোট পিক-টু-পিক ভোল্টেজ (Vp-p) নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n- Maximum / Peak Voltage Vm = 160 V\n\nFormula:\nPeak-to-Peak Voltage Vp-p = 2 · Vm\n\nSubstitution:\nVp-p = 2 · 160 V\n\nCalculation:\nVp-p = 320 V\n\nAnswer:\nPeak-to-Peak Voltage Vp-p = 320 V.',
        hi: 'दिया गया है:\n- शिखर वोल्टेज Vm = 160 V\n\nसूत्र:\nशिखर-से-शिखर वोल्टेज Vp-p = 2 · Vm\n\nमान रखने पर:\nVp-p = 2 × 160 = 320 V\n\nउत्तर:\nशिखर-से-शिखर वोल्टेज Vp-p = 320 V।',
        bn: 'প্রদত্ত:\n- পিক ভোল্টেজ Vm = ১৬০ V\n\nসূত্র:\nপিক-টু-পিক ভোল্টেজ Vp-p = 2 · Vm\n\nমান বসিয়ে:\nVp-p = ২ × ১৬০ = ৩২০ V\n\nউত্তর:\nপিক-টু-পিক ভোল্টেজ Vp-p = ৩২০ V।'
      },
      givenValues: {
        'Peak Voltage (Vm)': '160 V'
      },
      finalAnswer: {
        en: 'Peak-to-Peak Voltage Vp-p = 320 V',
        hi: 'शिखर-से-शिखर वोल्टेज Vp-p = 320 V',
        bn: 'পিক-টু-পিক ভোল্টেজ Vp-p = ৩২০ V'
      }
    }
  ],
  practicalApplications: {
    en: [
      'National Transmission Grids: Synchronous AC generation at 50 Hz (India/UK/Europe) and 60 Hz (North America/Japan).',
      'High-Frequency Avionics: 400 Hz AC supplies in commercial/defense aircraft reducing transformer magnetic core mass.',
      'Variable Frequency Drives (VFD): Inverters converting fixed 50 Hz grid power into 0-120 Hz variable AC for motor speed control.',
      'Audio & Telecommunications: High-frequency alternating carrier waves conveying speech and digital data over RF spectrum.'
    ],
    hi: [
      'राष्ट्रीय ट्रांसमिशन ग्रिड: 50 Hz (भारत/यूके/यूरोप) एवं 60 Hz (उत्तरी अमेरिका) पर समकालिक एसी उत्पादन।',
      'विमानन प्रणाली: विमानों में ट्रांसफार्मर का भार घटाने हेतु 400 Hz एसी आपूर्ति।',
      'वेरिएबल फ्रीक्वेंसी ड्राइव (VFD): मोटर गति नियंत्रण हेतु 0-120 Hz परिवर्तनीय एसी में रूपांतरण।',
      'ऑडियो एवं दूरसंचार: आरएफ स्पेक्ट्रम पर डेटा प्रसारण के लिए उच्च आवृत्ति एसी तरंगें।'
    ],
    bn: [
      'জাতীয় ট্রান্সমিশন গ্রিড: ৫০ Hz (ভারত/ইউরোপ) ও ৬০ Hz (আমেরিকা) ফ্রিকোয়েন্সিতে বৃহৎ এসি বিদ্যুৎ সঞ্চালন।',
      'অ্যাভিয়নিক্স ও বিমান ব্যবস্থা: ট্রান্সফরমারের ওজন কমাতে বিমানে ৪০০ Hz এসি সাপ্লাই ব্যবহার।',
      'ভ্যারিয়েবল ফ্রিকোয়েন্সি ড্রাইভ (VFD): মোটরের গতি নিয়ন্ত্রণে ০-১২০ Hz পরিবর্তনশীল এসি কারেন্ট সরবরাহ।',
      'টেলিকমিউনিকেশন: বেতার তরঙ্গের মাধ্যমে ডেটা ও তথ্য প্রেরণে উচ্চ কম্পাঙ্কের এসি সিগন্যাল।'
    ]
  },
  importantPoints: {
    en: [
      'Frequency and Time Period are exact reciprocals: f = 1 / T and T = 1 / f.',
      'Angular frequency ω represents rotational speed in electrical radians per second (ω = 2πf).',
      'Peak-to-peak voltage of a symmetrical sine wave is exactly twice its single peak amplitude: Vp-p = 2Vm.',
      'A pure symmetrical sine wave crosses zero exactly twice per full cycle (at t = 0, t = T/2, and repeats at t = T).',
      'For Indian power grid (50 Hz), one cycle takes exactly 20 milliseconds (T = 20 ms).'
    ],
    hi: [
      'आवृत्ति और आवर्तकाल एक दूसरे के व्युत्क्रमानुपाती होते हैं: f = 1 / T एवं T = 1 / f।',
      'कोणीय आवृत्ति ω रेडियन प्रति सेकंड में घूर्णन गति को दर्शाती है (ω = 2πf)।',
      'सममित साइन वेव का शिखर-से-शिखर वोल्टेज एकल शिखर का ठीक दोगुना होता है (Vp-p = 2Vm)।',
      'शुद्ध साइन वेव प्रति चक्र दो बार शून्य से गुजरती है (t = 0, t = T/2 पर)।',
      'भारतीय पावर ग्रिड (50 Hz) के लिए एक चक्र का समय ठीक 20 मिलीसेकंड (20 ms) होता है।'
    ],
    bn: [
      'ফ্রিকোয়েন্সি ও পর্যায়কাল পরস্পর বিপরীতানুপাতিক: f = 1 / T এবং T = 1 / f।',
      'কৌণিক কম্পাঙ্ক ω হলো প্রতি সেকেন্ডে অতিক্রান্ত কোণ (ω = 2πf rad/s)।',
      'প্রতিসম সাইন তরঙ্গের পিক-টু-পিক ভোল্টেজ সর্বদা পিক ভোল্টেজের দ্বিগুণ: Vp-p = 2Vm।',
      'প্রতি সাইকেলে সাইন ওয়েভ দুবার শূন্য অতিক্রম করে (t = 0 এবং t = T/2 তে)।',
      '৫০ Hz গ্রিডে এক পূর্ণ সাইকেলের সময় ঠিক ২০ মিলি সেকেন্ড (T = 20 ms)।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing Peak Voltage (Vm) with Peak-to-Peak Voltage (Vp-p): Vp-p is 2 × Vm, not Vm.',
      'Misinterpreting Frequency: Frequency is the number of cycles per second, NOT the time taken for one cycle.',
      'Forgetting unit conversion when calculating: T must be in seconds when using f = 1 / T before converting to ms.',
      'Confusing angular frequency ω (rad/s) with cyclic frequency f (Hz): Always remember the 2π factor (ω = 2πf).'
    ],
    hi: [
      'शिखर मान (Vm) को शिखर-से-शिखर मान (Vp-p) समझने की गलती: Vp-p = 2 × Vm होता है।',
      'आवृत्ति को गलत समझना: आवृत्ति प्रति सेकंड चक्रों की संख्या है, एक चक्र का समय नहीं।',
      'मात्रक रूपांतरण भूलना: f = 1 / T में T को पहले सेकंड में रखना आवश्यक है।',
      'कोणीय आवृत्ति ω (rad/s) और सामान्य आवृत्ति f (Hz) में अंतर भूलना: सदैव याद रखें ω = 2πf।'
    ],
    bn: [
      'পিক মান (Vm) এবং পিক-টু-পিক মান (Vp-p) গুলিয়ে ফেলা: Vp-p হলো 2 × Vm।',
      'ফ্রিকোয়েন্সির ভুল অর্থ: ফ্রিকোয়েন্সি হলো প্রতি সেকেন্ডে সাইকেল সংখ্যা, একক সাইকেলের সময় নয়।',
      'একক রূপান্তরে ভুল: T হিসাবের সময় সর্বদা প্রথমে সেকেন্ডে হিসাব করে তারপর ms এ নিতে হবে।',
      'কৌণিক কম্পাঙ্ক ω (rad/s) এবং ফ্রিকোয়েন্সি f (Hz) এর পার্থক্য না মানা: সর্বদা ω = 2πf মনে রাখুন।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch5-l1-1',
      question: {
        en: 'What is the time period of a standard 50 Hz alternating current supply?',
        hi: 'एक मानक 50 Hz प्रत्यावर्ती धारा आपूर्ति का आवर्तकाल क्या है?',
        bn: 'একটি মানক ৫০ Hz অল্টারনেটিং কারেন্ট সাপ্লাইয়ের পর্যায়কাল কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '10 ms', hi: '10 ms', bn: '১০ ms' } },
        { id: 'opt-b', text: { en: '20 ms', hi: '20 ms', bn: '২০ ms' } },
        { id: 'opt-c', text: { en: '50 ms', hi: '50 ms', bn: '৫০ ms' } },
        { id: 'opt-d', text: { en: '100 ms', hi: '100 ms', bn: '১০০ ms' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'T = 1 / f = 1 / 50 = 0.020 seconds = 20 milliseconds (ms).',
        hi: 'T = 1 / f = 1 / 50 = 0.020 सेकंड = 20 मिलीसेकंड (ms)।',
        bn: 'T = ১ / f = ১ / ৫০ = ০.০২০ সেকেন্ড = ২০ মিলি সেকেন্ড (ms)।'
      }
    },
    {
      id: 'mcq-ch5-l1-2',
      question: {
        en: 'If an AC sinusoidal wave has a peak voltage of 150 V, what is its peak-to-peak voltage?',
        hi: 'यदि एक एसी साइनसॉइडल तरंग का शिखर वोल्टेज 150 V है, तो इसका शिखर-से-शिखर वोल्टेज क्या है?',
        bn: 'একটি এসি সাইন তরঙ্গের পিক ভোল্টেজ ১৫০ V হলে, এর পিক-টু-পিক ভোল্টেজ কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '75 V', hi: '75 V', bn: '৭৫ V' } },
        { id: 'opt-b', text: { en: '150 V', hi: '150 V', bn: '১৫০ V' } },
        { id: 'opt-c', text: { en: '300 V', hi: '300 V', bn: '৩০০ V' } },
        { id: 'opt-d', text: { en: '450 V', hi: '450 V', bn: '৪৫০ V' } }
      ],
      correctOptionId: 'opt-c',
      explanation: {
        en: 'Peak-to-Peak Voltage Vp-p = 2 × Vm = 2 × 150 V = 300 V.',
        hi: 'शिखर-से-शिखर वोल्टेज Vp-p = 2 × Vm = 2 × 150 V = 300 V।',
        bn: 'পিক-টু-পিক ভোল্টেজ Vp-p = ২ × Vm = ২ × ১৫০ V = ৩০০ V।'
      }
    },
    {
      id: 'mcq-ch5-l1-3',
      question: {
        en: 'The angular frequency (ω) of an AC supply is 314.16 rad/s. What is its cyclic frequency?',
        hi: 'एक एसी आपूर्ति की कोणीय आवृत्ति (ω) 314.16 rad/s है। इसकी चक्रीय आवृत्ति क्या है?',
        bn: 'একটি এসি তরঙ্গের কৌণিক কম্পাঙ্ক (ω) ৩১৪.১৬ rad/s হলে, এর সাইক্লিক ফ্রিকোয়েন্সি কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '25 Hz', hi: '25 Hz', bn: '২৫ Hz' } },
        { id: 'opt-b', text: { en: '50 Hz', hi: '50 Hz', bn: '৫০ Hz' } },
        { id: 'opt-c', text: { en: '60 Hz', hi: '60 Hz', bn: '৬০ Hz' } },
        { id: 'opt-d', text: { en: '100 Hz', hi: '100 Hz', bn: '১০০ Hz' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'f = ω / (2π) = 314.16 / (2 × 3.14159) = 50.0 Hz.',
        hi: 'f = ω / (2π) = 314.16 / (2 × 3.1416) = 50.0 Hz।',
        bn: 'f = ω / (2π) = ৩১৪.১৬ / (২ × ৩.১৪১৬) = ৫০.০ Hz।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch5-l1-1',
      question: {
        en: 'An alternating voltage source is described by the equation v(t) = 325 · sin(314.16 · t) Volts. Determine: (a) Maximum peak voltage Vm, (b) Cyclic frequency f, and (c) Time period T.',
        hi: 'एक प्रत्यावर्ती वोल्टेज स्रोत का समीकरण v(t) = 325 · sin(314.16 · t) वोल्ट है। ज्ञात करें: (a) अधिकतम शिखर वोल्टेज Vm, (b) चक्रीय आवृत्ति f, एवं (c) आवर्तकाल T।',
        bn: 'একটি অল্টারনেটিং ভোল্টেজ সোর্সের সমীকরণ v(t) = ৩২৫ · sin(৩১৪.১৬ · t) ভোল্ট। নির্ণয় করুন: (a) সর্বোচ্চ পিক ভোল্টেজ Vm, (b) ফ্রিকোয়েন্সি f, এবং (c) পর্যায়কাল T।'
      },
      hint: {
        en: 'Compare with the standard sinusoidal equation v(t) = Vm · sin(ωt). Note that ω = 2πf and T = 1/f.',
        hi: 'मानक समीकरण v(t) = Vm · sin(ωt) से तुलना करें। ध्यान दें कि ω = 2πf और T = 1/f।',
        bn: 'আদর্শ সমীকরণ v(t) = Vm · sin(ωt) এর সাথে তুলনা করুন। মনে রাখবেন ω = 2πf এবং T = 1/f।'
      },
      answerKey: {
        en: '(a) Peak Voltage Vm = 325 V.\n(b) Angular Frequency ω = 314.16 rad/s ⇒ f = ω / (2π) = 314.16 / 6.2832 = 50 Hz.\n(c) Time Period T = 1 / f = 1 / 50 = 0.02 s = 20 ms.',
        hi: '(a) शिखर वोल्टेज Vm = 325 V।\n(b) आवृत्ति f = 314.16 / (2π) = 50 Hz।\n(c) आवर्तकाल T = 1 / 50 = 20 ms।',
        bn: '(a) পিক ভোল্টেজ Vm = ৩২৫ V।\n(b) ফ্রিকোয়েন্সি f = ৩১৪.১৬ / (২π) = ৫০ Hz।\n(c) পর্যায়কাল T = ১ / ৫০ = ২০ ms।'
      }
    },
    {
      id: 'pq-ch5-l1-2',
      question: {
        en: 'Explain why alternating current (AC) is universally preferred over direct current (DC) for large-scale electrical power generation and long-distance bulk transmission.',
        hi: 'स्पष्ट करें कि बड़े पैमाने पर विद्युत उत्पादन और लंबी दूरी के बल्क ट्रांसमिशन के लिए प्रत्यावर्ती धारा (AC) को दिष्ट धारा (DC) की तुलना में सार्वभौमिक रूप से क्यों प्राथमिकता दी जाती है।',
        bn: 'ব্যাখ্যা করুন কেন বৃহৎ পরিসরে বিদ্যুৎ উৎপাদন এবং দূর-দূরান্তে সঞ্চালনের জন্য ডিসি-র তুলনায় এসি বিদ্যুৎকে সার্বজনীনভাবে অগ্রাধিকার দেওয়া হয়।'
      },
      hint: {
        en: 'Mention the role of static transformers in stepping up voltage to reduce transmission I²R losses, and mechanical advantages of AC alternators without commutators.',
        hi: 'ट्रांसफार्मर द्वारा वोल्टेज बढ़ाने और I²R हानियों को कम करने की भूमिका का उल्लेख करें।',
        bn: 'ট্রান্সফরমারের সাহায্যে ভোল্টেজ বৃদ্ধি করে I²R লস কমানো এবং অল্টারনেটরে কমিউটেটর না থাকার সুবিধার উল্লেখ করুন।'
      },
      answerKey: {
        en: '1. Voltage Transformation: AC voltage can be easily stepped up to very high levels (e.g. 400 kV, 765 kV) using static transformers, drastically reducing current and transmission line heat loss (P_loss = I²R).\n2. Generation Simplicity: AC alternators have stationary armature windings and rotating magnetic fields, avoiding fragile high-current commutators and brushes.\n3. Easy Motor Construction: AC induction motors are rugged, highly reliable, and inexpensive compared to DC motors with brush wear.',
        hi: '1. वोल्टेज रूपांतरण: ट्रांसफार्मर द्वारा AC वोल्टेज को आसानी से उच्च स्तर पर स्टेप-अप किया जा सकता है जिससे लाइन हानियाँ (I²R) न्यूनतम हो जाती हैं।\n2. जनरेटर की सरलता: अल्टरनेटर में आर्मेचर स्थिर रहता है और कम्यूटेटर की आवश्यकता नहीं होती।\n3. प्रेरण मोटर: AC इंडक्शन मोटरें अत्यधिक टिकाऊ और रखरखाव मुक्त होती हैं।',
        bn: '১. ভোল্টেজ রূপান্তর: ট্রান্সফরমারের মাধ্যমে এসি ভোল্টেজ খুব সহজে স্টেপ-আপ করা যায়, যা কারেন্ট কমিয়ে লাইনের I²R অপচয় উল্লেখযোগ্যভাবে হ্রাস করে।\n২. সহজ উৎপাদন: অল্টারনেটরে কমিউটেটর ও ব্রাশের প্রয়োজন হয় না।\n৩. নির্ভরযোগ্য মোটর: এসি ইন্ডাকশন মোটর অত্যন্ত মজবুত ও কম রক্ষণাবেক্ষণযোগ্য।'
      }
    }
  ]
};

export const LESSON_SINUSOIDAL_WAVEFORM: Lesson = {
  id: 'lsn-ch5-sinusoidal-waveform',
  topicId: 'ch5-sinusoidal-waveform',
  order: 2,
  title: {
    en: 'Sinusoidal Waveform & Mathematical Representation',
    hi: 'साइनसॉइडल वेवफॉर्म एवं गणितीय निरूपण',
    bn: 'সাইনুসয়েডাল ওয়েভফর্ম ও গাণিতিক প্রকাশ'
  },
  easyExplanation: {
    en: 'A sinusoidal AC waveform represents voltages and currents mathematically governed by sine or cosine functions of time. The instantaneous value depends harmonically on the instantaneous angular position: v(t) = Vm · sin(ωt + φ).',
    hi: 'एक साइनसॉइडल एसी वेवफॉर्म वोल्टेज और धाराओं का गणितीय निरूपण करता है जो समय के साइन या कोसाइन फलनों द्वारा नियंत्रित होते हैं: v(t) = Vm · sin(ωt + φ)।',
    bn: 'একটি সাইনুসয়েডাল এসি ওয়েভফর্ম সময়ের সাইন বা কোসাইন ফাংশন দ্বারা পরিচালিত ভোল্টেজ এবং কারেন্টকে গাণিতিকভাবে প্রকাশ করে: v(t) = Vm · sin(ωt + φ)।'
  },
  detailedExplanation: {
    en: '1. Mathematical Definition of Sinusoidal Waveform:\nA sinusoidal quantity is a harmonic function of time having the general equation:\nv(t) = Vm · sin(ωt + φ)\ni(t) = Im · sin(ωt + φ)\nWhere:\n- v(t), i(t) = Instantaneous voltage/current at time t (V, A)\n- Vm, Im = Peak amplitude / Maximum value (V, A)\n- ω = Angular frequency in radians per second (ω = 2πf rad/s)\n- t = Elapsed time in seconds (s)\n- φ = Initial phase angle at t = 0 (measured in radians or degrees)\n- θ = Total instantaneous phase angle: θ = ωt + φ\n\n2. Geometric / Angular Interpretation:\nAs time t progresses, the argument (ωt + φ) sweeps from 0 to 2π radians (0° to 360°) for every cycle:\n- At ωt = 0: sin(0) = 0 ⇒ v = 0 V (Zero crossing)\n- At ωt = π/2 (90°): sin(π/2) = +1 ⇒ v = +Vm (Positive Peak)\n- At ωt = π (180°): sin(π) = 0 ⇒ v = 0 V (Zero crossing)\n- At ωt = 3π/2 (270°): sin(3π/2) = -1 ⇒ v = -Vm (Negative Peak)\n- At ωt = 2π (360°): sin(2π) = 0 ⇒ v = 0 V (Completion of 1 cycle)\n\n3. Phase Angle (φ) & Phase Shift:\n- Initial Phase (φ): The angular displacement of the waveform from the reference time origin (t = 0).\n- Zero Phase (φ = 0): Waveform starts at zero and goes positive at t = 0.\n- Positive Phase (Leading, +φ): Waveform starts its positive cycle BEFORE t = 0 (shifted to the left on time axis).\n- Negative Phase (Lagging, -φ): Waveform starts its positive cycle AFTER t = 0 (shifted to the right on time axis).\n\n4. Phasor Concept (Introductory Geometric View):\nA sinusoidal quantity can be visualized as the vertical projection of a radius vector (phasor) of length Vm rotating counterclockwise in a Cartesian coordinate system with constant angular velocity ω.\n\n5. Conversion between Radians and Degrees:\n- Angle in Radians = (Angle in Degrees) × (π / 180°)\n- Angle in Degrees = (Angle in Radians) × (180° / π)\n- When evaluating sin(ωt + φ) on a calculator, ensure mode matches (radians vs degrees).',
    hi: '1. साइनसॉइडल वेवफॉर्म की गणितीय परिभाषा:\nसाइनसॉइडल राशि समय का एक हार्मोनिक फलन है:\nv(t) = Vm · sin(ωt + φ)\ni(t) = Im · sin(ωt + φ)\nजहाँ Vm शिखर वोल्टेज है, ω = 2πf कोणीय आवृत्ति है, और φ प्रारंभिक फेज कोण है।\n\n2. कोणीय व्याख्या:\n- ωt = 0 पर: v = 0 V (शून्य क्रॉसिंग)\n- ωt = 90° (π/2) पर: v = +Vm (धनात्मक शिखर)\n- ωt = 180° (π) पर: v = 0 V (शून्य क्रॉसिंग)\n- ωt = 270° (3π/2) पर: v = -Vm (ऋणात्मक शिखर)\n- ωt = 360° (2π) पर: 1 चक्र पूर्ण होता है।\n\n3. फेज कोण (φ) एवं फेज शिफ्ट:\n- प्रारंभिक फेज (φ): t = 0 पर वेवफॉर्म का कोणीय विस्थापन।\n- लीडिंग (+φ): तरंग t = 0 से पहले शुरू होती है (बाईं ओर शिफ्ट)।\n- लैगिंग (-φ): तरंग t = 0 के बाद शुरू होती है (दाईं ओर शिफ्ट)।\n\n4. फेजर की प्रारंभिक अवधारणा:\nएक साइनसॉइडल राशि को Vm लंबाई के एक वेक्टर के रूप में दर्शाया जा सकता है जो ω गति से वामावर्त घूमता है।\n\n5. रेडियन एवं डिग्री रूपांतरण:\n- रेडियन = डिग्री × (π / 180°)\n- डिग्री = रेडियन × (180° / π)।',
    bn: '১. সাইনুসয়েডাল সমীকরণের গাণিতিক প্রকাশ:\nv(t) = Vm · sin(ωt + φ)\ni(t) = Im · sin(ωt + φ)\nযেখানে Vm হলো পিক ভোল্টেজ, ω = 2πf হলো কৌণিক কম্পাঙ্ক, এবং φ হলো প্রাথমিক ফেজ কোণ।\n\n২. কোণভিত্তিক ব্যাখ্যা:\n- ωt = 0 তে: v = 0 V\n- ωt = 90° (π/2) তে: v = +Vm (পজিটিভ পিক)\n- ωt = 180° (π) তে: v = 0 V\n- ωt = 270° (3π/2) তে: v = -Vm (নেগেটিভ পিক)\n- ωt = 360° (2π) তে: ১ সাইকেল সম্পন্ন হয়।\n\n৩. ফেজ কোণ (φ) এবং ফেজ শিফট:\n- লিডিং (+φ): তরঙ্গটি t = 0 এর পূর্বেই শুরু হয় (বামে সরে যায়)।\n- ল্যাগিং (-φ): তরঙ্গটি t = 0 এর পরে শুরু হয় (ডানে সরে যায়)।\n\n৪. ফেজরের প্রাথমিক ধারণা:\nঘড়ির কাঁটার বিপরীত দিকে ω বেগে ঘূর্ণায়মান Vm দৈর্ঘ্যের ভেক্টরের উল্লম্ব প্রক্ষেপণই সাইন তরঙ্গ তৈরি করে।\n\n৫. ডিগ্রি ও রেডিয়ান রূপান্তর:\n- রেডিয়ান = ডিগ্রি × (π / ১৮০°)\n- ডিগ্রি = রেডিয়ান × (১৮০° / π)।'
  },
  formulas: [
    {
      symbol: 'v(t)',
      expression: 'v(t) = V_m · sin(ωt + φ)',
      description: {
        en: 'Instantaneous Voltage Equation (Vm = Amplitude, ω = 2πf, φ = Phase Angle)',
        hi: 'तात्कालिक वोल्टेज समीकरण (Vm = आयाम, ω = 2πf, φ = फेज कोण)',
        bn: 'তাৎক্ষণিক ভোল্টেজ সমীকরণ (Vm = অ্যাম্প্লিটিউড, ω = 2πf, φ = ফেজ কোণ)'
      }
    },
    {
      symbol: 'θ(t)',
      expression: 'θ(t) = ωt + φ = 2πft + φ',
      description: {
        en: 'Total Instantaneous Phase Angle at time t',
        hi: 'समय t पर कुल तात्कालिक फेज कोण',
        bn: 't মুহূর্তে মোট তাৎক্ষণিক ফেজ কোণ'
      }
    },
    {
      symbol: 'rad-deg',
      expression: 'θ_{rad} = θ_{deg} · (π / 180°)',
      description: {
        en: 'Degree to Radian Angular Conversion Factor',
        hi: 'डिग्री से रेडियन कोणीय रूपांतरण सूत्र',
        bn: 'ডিগ্রি থেকে রেডিয়ানে রূপান্তর সূত্র'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-sinusoidal-phasor-gen',
      title: {
        en: 'Rotating Phasor Generation of Sinusoidal Waveform',
        hi: 'घूर्णन फेजर द्वारा साइनसॉइडल वेवफॉर्म की उत्पत्ति',
        bn: 'ঘূর্ণায়মান ফেজর দ্বারা সাইনুসয়েডাল তরঙ্গের উৎপত্তি'
      },
      caption: {
        en: 'Geometric relationship connecting a rotating vector of magnitude Vm to the time-domain sine wave through vertical projection.',
        hi: 'Vm परिमाण के घूर्णन वेक्टर और टाइम-डोमेन साइन वेव के बीच लंबवत प्रक्षेप संबंध।',
        bn: 'Vm দৈর্ঘ্যের ঘূর্ণায়মান ভেক্টর থেকে উল্লম্ব প্রক্ষেপণের মাধ্যমে সাইন তরঙ্গের সম্পর্ক।'
      },
      svgType: 'circuit-sinusoidal-phasor'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch5-instantaneous-calc',
      problem: {
        en: 'An alternating sinusoidal voltage is given by v(t) = 200 · sin(100π · t) V. Calculate the instantaneous voltage v at time t = 2.5 ms (0.0025 s).',
        hi: 'एक प्रत्यावर्ती साइनसॉइडल वोल्टेज का समीकरण v(t) = 200 · sin(100π · t) V है। समय t = 2.5 ms (0.0025 s) पर तात्कालिक वोल्टेज v की गणना करें।',
        bn: 'একটি অল্টারনেটিং সাইনুসয়েডাল ভোল্টেজের সমীকরণ v(t) = ২০০ · sin(১০০π · t) V। সময় t = ২.৫ ms (০.০০২৫ s) এ তাৎক্ষণিক ভোল্টেজ v নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n- Equation: v(t) = 200 · sin(100π · t) V\n- Peak Voltage Vm = 200 V\n- Angular Frequency ω = 100π rad/s\n- Time t = 0.0025 s (2.5 ms)\n\nStep 1: Calculate Instantaneous Angle θ in radians\nθ = ω · t = (100π) · 0.0025 = 0.25π radians\nIn degrees: θ = 0.25 × 180° = 45°\n\nStep 2: Calculate Instantaneous Voltage v(t)\nv(0.0025) = 200 · sin(45°) = 200 · (1 / √2) = 200 · 0.7071\nv(0.0025) = 141.42 V\n\nAnswer:\nInstantaneous voltage at t = 2.5 ms is +141.42 V.',
        hi: 'दिया गया है:\n- समीकरण: v(t) = 200 · sin(100π · t) V\n- Vm = 200 V, ω = 100π rad/s, t = 0.0025 s\n\nचरण 1: कोण की गणना:\nθ = 100π × 0.0025 = 0.25π rad = 45°\n\nचरण 2: तात्कालिक वोल्टेज:\nv = 200 × sin(45°) = 200 × 0.7071 = 141.42 V\n\nउत्तर:\nt = 2.5 ms पर वोल्टेज = +141.42 V।',
        bn: 'প্রদত্ত:\n- সমীকরণ: v(t) = ২০০ · sin(১০০π · t) V\n- Vm = ২০০ V, ω = ১০০π rad/s, t = ০.০০২৫ s\n\nধাপ ১: কোণ নির্ণয়:\nθ = ১০০π × ০.০০২৫ = ০.২৫π rad = ৪৫°\n\nধাপ ২: তাৎক্ষণিক ভোল্টেজ:\nv = ২০০ × sin(৪৫°) = ২০০ × ০.৭০৭১ = ১৪১.৪২ V\n\nউত্তর:\nt = ২.৫ ms এ তাৎক্ষণিক ভোল্টেজ = +১৪১.৪২ V।'
      },
      givenValues: {
        'Vm': '200 V',
        'ω': '100π rad/s',
        't': '2.5 ms'
      },
      finalAnswer: {
        en: 'Instantaneous Voltage v(2.5 ms) = +141.42 V',
        hi: 'तात्कालिक वोल्टेज v(2.5 ms) = +141.42 V',
        bn: 'তাৎক্ষণিক ভোল্টেজ v(২.৫ ms) = +১৪১.৪২ V'
      }
    },
    {
      id: 'ex-ch5-ang-freq-from-f',
      problem: {
        en: 'An AC synchronous generator produces a sinusoidal voltage waveform at a frequency of f = 60 Hz. Calculate its angular frequency ω in radians per second.',
        hi: 'एक एसी सिंक्रोनस जनरेटर f = 60 Hz की आवृत्ति पर साइनसॉइडल वोल्टेज वेवफॉर्म उत्पन्न करता है। इसकी कोणीय आवृत्ति ω rad/s में ज्ञात करें।',
        bn: 'একটি এসি সিঙ্ক্রোনাস জেনারেটর f = ৬০ Hz ফ্রিকোয়েন্সিতে সাইন ভোল্টেজ তৈরি করে। এর কৌণিক কম্পাঙ্ক ω rad/s এ নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n- Cyclic Frequency f = 60 Hz\n\nFormula:\nAngular Frequency ω = 2 · π · f\n\nSubstitution:\nω = 2 · π · 60 = 120 · π\n\nCalculation:\nω = 120 × 3.14159265 = 376.99 rad/s\n\nAnswer:\nAngular frequency ω = 377.0 rad/s.',
        hi: 'दिया गया है:\n- आवृत्ति f = 60 Hz\n\nसूत्र:\nकोणीय आवृत्ति ω = 2 · π · f\n\nमान रखने पर:\nω = 2 × π × 60 = 120π\n\nगणना:\nω = 120 × 3.14159 = 376.99 rad/s ≈ 377.0 rad/s\n\nउत्तर:\nकोणीय आवृत्ति ω = 377.0 rad/s।',
        bn: 'প্রদত্ত:\n- ফ্রিকোয়েন্সি f = ৬০ Hz\n\nসূত্র:\nকৌণিক কম্পাঙ্ক ω = 2 · π · f\n\nমান বসিয়ে:\nω = ২ × π × ৬০ = ১২০π\n\nহিসাব:\nω = ১২০ × ৩.১৪১৫৯ = ৩৭৬.৯৯ rad/s ≈ ৩৭৭.০ rad/s\n\nউত্তর:\nকৌণিক কম্পাঙ্ক ω = ৩৭৭.০ rad/s।'
      },
      givenValues: {
        'Frequency (f)': '60 Hz'
      },
      finalAnswer: {
        en: 'Angular Frequency ω = 376.99 rad/s (approx 377 rad/s)',
        hi: 'कोणीय आवृत्ति ω = 376.99 rad/s (लगभग 377 rad/s)',
        bn: 'কৌণিক কম্পাঙ্ক ω = ৩৭৬.৯৯ rad/s (প্রায় ৩৭৭ rad/s)'
      }
    },
    {
      id: 'ex-ch5-phase-shifted-eqn',
      problem: {
        en: 'A sinusoidal current wave has a peak value of Im = 10 A, an operating frequency of f = 50 Hz, and leads the reference zero by a phase angle of φ = +30° (π/6 radians). Write its complete time-domain equation and calculate its instantaneous current at t = 0.',
        hi: 'एक साइनसॉइडल धारा तरंग का शिखर मान Im = 10 A, आवृत्ति f = 50 Hz है, और यह संदर्भ से φ = +30° (π/6 रेडियन) के फेज कोण से आगे (लीड) है। इसका पूरा समय-डोमेन समीकरण लिखें और t = 0 पर तात्कालिक धारा ज्ञात करें।',
        bn: 'একটি সাইনুসয়েডাল কারেন্ট তরঙ্গের পিক মান Im = ১০ A, ফ্রিকোয়েন্সি f = ৫০ Hz এবং এটি রেফারেন্স থেকে φ = +৩০° (π/৬ রেডিয়ান) ফেজ কোণে এগিয়ে (লিড) রয়েছে। এর পূর্ণ সমীকরণ লিখুন এবং t = 0 তে তাৎক্ষণিক কারেন্ট নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n- Peak Current Im = 10 A\n- Frequency f = 50 Hz ⇒ ω = 2π(50) = 100π rad/s = 314.16 rad/s\n- Phase angle φ = +30° = +π/6 rad\n\nStep 1: Write General Equation\ni(t) = Im · sin(ωt + φ)\ni(t) = 10 · sin(100π · t + 30°) A = 10 · sin(314.16 · t + π/6) A\n\nStep 2: Calculate Instantaneous Current at t = 0\ni(0) = 10 · sin(0 + 30°) = 10 · sin(30°) = 10 · 0.5 = 5.0 A\n\nAnswer:\nTime-domain equation: i(t) = 10 · sin(314.16t + 30°) A; Current at t = 0 is +5.0 A.',
        hi: 'दिया गया है:\n- Im = 10 A, f = 50 Hz (ω = 314.16 rad/s), φ = +30°\n\nचरण 1: समीकरण:\ni(t) = 10 · sin(314.16 · t + 30°) A\n\nचरण 2: t = 0 पर धारा:\ni(0) = 10 · sin(30°) = 10 × 0.5 = 5.0 A\n\nउत्तर:\nसमीकरण i(t) = 10 · sin(314.16t + 30°) A; t = 0 पर धारा = +5.0 A।',
        bn: 'প্রদত্ত:\n- Im = ১০ A, f = ৫০ Hz (ω = ৩১৪.১৬ rad/s), φ = +৩০°\n\nধাপ ১: সমীকরণ:\ni(t) = ১০ · sin(৩১৪.১৬ · t + ৩০°) A\n\nধাপ ২: t = 0 তে কারেন্ট:\ni(0) = ১০ · sin(৩০°) = ১০ × ০.৫ = ৫.০ A\n\nউত্তর:\nসমীকরণ i(t) = ১০ · sin(৩১৪.১৬t + ৩০°) A; t = 0 তে কারেন্ট = +৫.০ A।'
      },
      givenValues: {
        'Im': '10 A',
        'f': '50 Hz',
        'φ': '+30°'
      },
      finalAnswer: {
        en: 'i(t) = 10 · sin(314.16t + 30°) A | i(0) = +5.0 A',
        hi: 'i(t) = 10 · sin(314.16t + 30°) A | i(0) = +5.0 A',
        bn: 'i(t) = ১০ · sin(৩১৪.১৬t + ৩০°) A | i(0) = +৫.০ A'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Synchronous Alternators: Pure sinusoidal EMF generation due to sinusoidal distribution of stator magnetic flux.',
      'Medical ECG & EEG Monitors: Capturing harmonic biological potential waveforms for clinical diagnostic interpretation.',
      'Power Grid Synchronization: Matching magnitude Vm, frequency f, and phase angle φ before interconnecting grid lines.',
      'Harmonic Distortion Analysis: Quantifying deviations from pure sinusoidal waves in industrial non-linear rectifier loads.'
    ],
    hi: [
      'सिंक्रोनस अल्टरनेटर: स्टेटर चुंबकीय फ्लक्स के साइनसॉइडल वितरण के कारण शुद्ध साइन तरंग ईएमएफ उत्पादन।',
      'मेडिकल ईसीजी एवं ईईजी: नैदानिक विश्लेषण के लिए जैविक विभव तरंगों का मापन।',
      'ग्रिड सिंक्रोनाइज़ेशन: ग्रिड लाइनों को जोड़ने से पहले वोल्टेज परिमाण, आवृत्ति और फेज कोण का मिलान करना।',
      'हार्मोनिक विकृति विश्लेषण: औद्योगिक रेक्टिफायर लोड में शुद्ध साइन वेव से विचलन का विश्लेषण।'
    ],
    bn: [
      'সিঙ্ক্রোনাস অল্টারনেটর: স্টেটর চৌম্বক ফ্লাক্সের সাইনুসয়েডাল বিন্যাসের মাধ্যমে বিশুদ্ধ এসি উৎপাদন।',
      'মেডিকেল ইসিজি ও ইইজি: স্বাস্থ্য পরীক্ষায় বায়োলজিক্যাল পটেনশিয়াল ওয়েভফর্ম ট্র্যাকিং।',
      'গ্রিড সিনক্রোনাইজেশন: পাওয়ার গ্রিড যুক্ত করার পূর্বে ভোল্টেজ Vm, ফ্রিকোয়েন্সি f ও ফেজ φ এর নির্ভুল সমন্বয়।',
      'হারমোনিক অ্যানালিসিস: নন-লিনিয়ার লোডে তরঙ্গের বিকৃতি পরিমাপ ও ফিল্টারিং।'
    ]
  },
  importantPoints: {
    en: [
      'The general sinusoidal voltage equation is v(t) = Vm · sin(ωt + φ).',
      'The argument of the sine function (ωt + φ) represents the instantaneous electrical angle in radians or degrees.',
      'A positive phase angle (+φ) indicates a leading waveform; a negative phase angle (-φ) indicates a lagging waveform.',
      'One complete cycle corresponds to an electrical angle of 2π radians or 360 degrees.',
      'Instantaneous value at any given time t can be positive, negative, or zero.'
    ],
    hi: [
      'सामान्य साइनसॉइडल वोल्टेज समीकरण v(t) = Vm · sin(ωt + φ) होता है।',
      'साइन फलन का कोण (ωt + φ) रेडियन या डिग्री में तात्कालिक विद्युत कोण को दर्शाता है।',
      'धनात्मक फेज (+φ) लीडिंग तरंग को और ऋणात्मक फेज (-φ) लैगिंग तरंग को दर्शाता है।',
      'एक पूर्ण चक्र 2π रेडियन या 360 डिग्री के बराबर होता है।',
      'किसी भी क्षण t पर तात्कालिक मान धनात्मक, ऋणात्मक या शून्य हो सकता है।'
    ],
    bn: [
      'সাধারণ সাইনুসয়েডাল ভোল্টেজ সমীকরণ v(t) = Vm · sin(ωt + φ)।',
      'সাইন ফাংশনের আর্গুমেন্ট (ωt + φ) হলো তাৎক্ষণিক বৈদ্যুতিক কোণ।',
      'পজিটিভ ফেজ (+φ) লিডিং তরঙ্গ এবং নেগেটিভ ফেজ (-φ) ল্যাগিং তরঙ্গ নির্দেশ করে।',
      'এক পূর্ণ সাইকেল সমান ২π রেডিয়ান বা ৩৬০ ডিগ্রি।',
      'যেকোনো মুহূর্ত t-তে তাৎক্ষণিক মান ধনাত্মক, ঋণাত্মক বা শূন্য হতে পারে।'
    ]
  },
  commonMistakes: {
    en: [
      'Mixing degrees and radians in calculations: (ωt) is in radians; if φ is given in degrees, convert φ to radians before adding.',
      'Setting calculator to wrong trigonometric mode: Entering degree values when calculator is in Radian mode (or vice versa).',
      'Misinterpreting Leading vs Lagging on the time axis: A leading waveform (+φ) appears shifted LEFT, not right.',
      'Forgetting that frequency f is in Hz (cycles/sec) while ω is in rad/sec (ω = 2πf).'
    ],
    hi: [
      'गणना में डिग्री और रेडियन को मिलाना: ωt रेडियन में होता है; यदि φ डिग्री में है, तो जोड़ने से पहले समान इकाई में बदलें।',
      'कैलकुलेटर में गलत ट्रिगोनोमेट्रिक मोड: रेडियन मोड में डिग्री मान दर्ज करना।',
      'समय अक्ष पर लीडिंग/लैगिंग को उल्टा समझना: लीडिंग (+φ) वेवफॉर्म बाईं ओर शिफ्ट होती है।',
      'यह भूलना कि f हर्ट्ज़ में और ω रेडियन/सेकंड में होता है (ω = 2πf)।'
    ],
    bn: [
      'ডিগ্রি ও রেডিয়ান মিলিয়ে ভুল করা: ωt সর্বদা রেডিয়ানে থাকে; তাই φ যোগ করার আগে একক সমান করুন।',
      'ক্যালকুলেটরে ভুল মোড রাখা: ডিগ্রি মান দেয়ার সময় ক্যালকুলেটর রেডিয়ান মোডে থাকা।',
      'লিডিং ও ল্যাগিং লেখচিত্র বুঝতে ভুল: লিডিং (+φ) তরঙ্গ টাইম অক্ষে বামে সরে থাকে, ডানে নয়।',
      'ফ্রিকোয়েন্সি f (Hz) এবং কৌণিক বেগ ω (rad/s) এর মধ্যে পার্থক্য ভুলে যাওয়া (ω = 2πf)।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch5-l2-1',
      question: {
        en: 'For the equation v(t) = 100 · sin(314t + π/4) V, what is the initial phase angle in degrees?',
        hi: 'समीकरण v(t) = 100 · sin(314t + π/4) V के लिए प्रारंभिक फेज कोण डिग्री में क्या है?',
        bn: 'v(t) = ১০০ · sin(৩১৪t + π/৪) V সমীকরণের জন্য ডিগ্রিতে প্রাথমিক ফেজ কোণ কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '30°', hi: '30°', bn: '৩০°' } },
        { id: 'opt-b', text: { en: '45°', hi: '45°', bn: '৪৫°' } },
        { id: 'opt-c', text: { en: '60°', hi: '60°', bn: '৬০°' } },
        { id: 'opt-d', text: { en: '90°', hi: '90°', bn: '৯০°' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'φ = π/4 radians = (180° / 4) = 45°.',
        hi: 'φ = π/4 रेडियन = (180° / 4) = 45°।',
        bn: 'φ = π/৪ রেডিয়ান = (১৮০° / ৪) = ৪৫°।'
      }
    },
    {
      id: 'mcq-ch5-l2-2',
      question: {
        en: 'What is the value of a sine wave v(t) = Vm · sin(ωt) when the electrical angle ωt is 90° (π/2 radians)?',
        hi: 'जब विद्युत कोण ωt = 90° (π/2 रेडियन) हो, तो साइन तरंग v(t) = Vm · sin(ωt) का मान क्या होता है?',
        bn: 'যখন বৈদ্যুতিক কোণ ωt = ৯০° (π/২ রেডিয়ান), তখন সাইন তরঙ্গ v(t) = Vm · sin(ωt) এর মান কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '0 V', hi: '0 V', bn: '০ V' } },
        { id: 'opt-b', text: { en: '0.707 Vm', hi: '0.707 Vm', bn: '০.৭০৭ Vm' } },
        { id: 'opt-c', text: { en: '+Vm (Maximum Peak)', hi: '+Vm (अधिकतम शिखर)', bn: '+Vm (সর্বোচ্চ পিক)' } },
        { id: 'opt-d', text: { en: '-Vm', hi: '-Vm', bn: '-Vm' } }
      ],
      correctOptionId: 'opt-c',
      explanation: {
        en: 'sin(90°) = 1, so v = Vm · 1 = +Vm (the positive peak).',
        hi: 'sin(90°) = 1, इसलिए v = Vm · 1 = +Vm (धनात्मक शिखर मान)।',
        bn: 'sin(৯০°) = ১, অতএব v = Vm · ১ = +Vm (পজিটিভ পিক মান)।'
      }
    },
    {
      id: 'mcq-ch5-l2-3',
      question: {
        en: 'A waveform represented by i(t) = Im · sin(ωt - 60°) is said to be:',
        hi: 'i(t) = Im · sin(ωt - 60°) द्वारा निरूपित वेवफॉर्म को कहा जाता है:',
        bn: 'i(t) = Im · sin(ωt - ৬০°) সমীকরণ দ্বারা প্রকাশিত তরঙ্গটি হলো:'
      },
      options: [
        { id: 'opt-a', text: { en: 'Leading the reference by 60°', hi: 'संदर्भ से 60° आगे (लीडिंग)', bn: 'রেফারেন্স থেকে ৬০° এগিয়ে (লিডিং)' } },
        { id: 'opt-b', text: { en: 'Lagging the reference by 60°', hi: 'संदर्भ से 60° पीछे (लैगिंग)', bn: 'রেফারেন্স থেকে ৬০° পিছিয়ে (ল্যাগিং)' } },
        { id: 'opt-c', text: { en: 'In phase with the reference', hi: 'संदर्भ के साथ समान फेज में', bn: 'রেফারেন্সের সাথে ইন-ফেজ' } },
        { id: 'opt-d', text: { en: 'Anti-phase (180° out of phase)', hi: 'विपरीत फेज में', bn: 'বিপরীত ফেজে' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'A negative phase angle (-60°) signifies that the waveform lags the reference zero by 60 degrees.',
        hi: 'ऋणात्मक फेज कोण (-60°) दर्शाता है कि वेवफॉर्म संदर्भ से 60 डिग्री पीछे (लैगिंग) है।',
        bn: 'নেগেটিভ ফেজ কোণ (-৬০°) নির্দেশ করে যে তরঙ্গটি রেফারেন্স থেকে ৬০ ডিগ্রি পিছিয়ে (ল্যাগিং) রয়েছে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch5-l2-1',
      question: {
        en: 'Given an alternating voltage waveform v(t) = 311 · sin(314 · t - π/6) V. Calculate: (a) Maximum peak voltage Vm, (b) Frequency f, (c) Instantaneous voltage at t = 5 ms (0.005 s).',
        hi: 'एक प्रत्यावर्ती वोल्टेज v(t) = 311 · sin(314 · t - π/6) V दिया गया है। ज्ञात करें: (a) अधिकतम शिखर वोल्टेज Vm, (b) आवृत्ति f, (c) t = 5 ms (0.005 s) पर तात्कालिक वोल्टेज।',
        bn: 'একটি অল্টারনেটিং ভোল্টেজ v(t) = ৩১১ · sin(৩১৪ · t - π/৬) V দেওয়া আছে। নির্ণয় করুন: (a) পিক ভোল্টেজ Vm, (b) ফ্রিকোয়েন্সি f, (c) t = ৫ ms (০.০০৫ s) এ তাৎক্ষণিক ভোল্টেজ।'
      },
      hint: {
        en: 'Convert π/6 to degrees (30°). At t = 0.005 s, calculate 314 × 0.005 in radians, convert to degrees (90°), and subtract 30°.',
        hi: 'π/6 को 30° में बदलें। t = 0.005 s पर, 314 × 0.005 rad = 90° प्राप्त करें और 30° घटाएं।',
        bn: 'π/৬ কে ডিগ্রিতে (৩০°) রূপান্তর করুন। t = ০.০০৫ s এ ৩১৪ × ০.০০৫ rad = ৯০° এবং ৩০° বিয়োগ করুন।'
      },
      answerKey: {
        en: '(a) Vm = 311 V.\n(b) ω = 314 rad/s ⇒ f = 314 / (2π) = 50 Hz.\n(c) At t = 0.005 s: ωt = 314 × 0.005 = 1.57 rad = 90°. Total angle = 90° - 30° = 60°. v(0.005) = 311 · sin(60°) = 311 × 0.866 = +269.3 V.',
        hi: '(a) Vm = 311 V।\n(b) f = 50 Hz।\n(c) कुल कोण = 90° - 30° = 60°। v = 311 × sin(60°) = 311 × 0.866 = +269.3 V।',
        bn: '(a) Vm = ৩১১ V।\n(b) f = ৫০ Hz।\n(c) মোট কোণ = ৯০° - ৩০° = ৬০°। v = ৩১১ × sin(৬০°) = ৩১১ × ০.৮৬৬ = +২৬৯.৩ V।'
      }
    },
    {
      id: 'pq-ch5-l2-2',
      question: {
        en: 'Explain how a counterclockwise rotating vector (phasor) in polar coordinates produces a time-domain sinusoidal waveform. Why is the vertical projection used for sine waves?',
        hi: 'स्पष्ट करें कि ध्रुवीय निर्देशांकों में वामावर्त घूमने वाला वेक्टर (फेजर) कैसे टाइम-डोमेन साइन वेव उत्पन्न करता है। साइन वेव के लिए लंबवत प्रक्षेप का उपयोग क्यों किया जाता है?',
        bn: 'ব্যাখ্যা করুন কীভাবে পোলার স্থানাঙ্কে ঘড়ির কাঁটার বিপরীতে ঘূর্ণায়মান ভেক্টর (ফেজর) সাইনুসয়েডাল ওয়েভফর্ম তৈরি করে। সাইন তরঙ্গের জন্য কেন উল্লম্ব প্রক্ষেপণ ব্যবহৃত হয়?'
      },
      hint: {
        en: 'Recall trigonometric definition: in a right triangle with hypotenuse R and angle θ, vertical side = R · sin(θ).',
        hi: 'याद रखें कि समकोण त्रिभुज में लंबवत भुजा = R · sin(θ) होती है।',
        bn: 'মনে রাখবেন সমকোণী ত্রিভুজে উল্লম্ব বাহু = R · sin(θ)।'
      },
      answerKey: {
        en: '1. Phasor Geometry: A phasor of length Vm starting at angle φ rotates counterclockwise with uniform angular speed ω. At any time t, its angular position with respect to the horizontal reference is θ = ωt + φ.\n2. Vertical Projection: From basic trigonometry, the vertical coordinate of the vector tip is y = Vm · sin(θ) = Vm · sin(ωt + φ). Tracking this vertical height as time advances generates the exact sine wave.\n3. Engineering Significance: Phasors simplify AC circuit analysis by transforming differential calculus into straightforward complex number algebra.',
        hi: '1. फेजर ज्यामिति: Vm लंबाई का फेजर ω गति से घूमता है। समय t पर इसका कोण θ = ωt + φ होता है।\n2. लंबवत प्रक्षेप: त्रिकोणमिति से, वेक्टर की लंबवत ऊंचाई y = Vm · sin(ωt + φ) होती है जो सीधे साइन वेव बनाती है।\n3. महत्व: फेजर जटिल अवकलन को सरल बीजगणित में बदल देते हैं।',
        bn: '১. ফেজর জ্যামিতি: Vm দৈর্ঘ্যের ফেজর ω বেগে ঘোরে। t মুহূর্তে এর কোণ θ = ωt + φ।\n২. উল্লম্ব প্রক্ষেপণ: ত্রিকোণমিতি অনুযায়ী ভেক্টরের শীর্ষবিন্দুর উচ্চতা y = Vm · sin(ωt + φ), যা সাইন ওয়েভ উৎপন্ন করে।\n৩. প্রকৌশল গুরুত্ব: ফেজর জটিল ক্যালকুলাসকে সহজ বীজগণিতে রূপান্তরিত করে।'
      }
    }
  ]
};

export const LESSON_RMS_AVERAGE: Lesson = {
  id: 'lsn-ch5-rms-average-values',
  topicId: 'ch5-rms-average-values',
  order: 3,
  title: {
    en: 'RMS, Average, Form Factor & Peak Factor',
    hi: 'RMS, औसत मान, फॉर्म फैक्टर एवं पीक फैक्टर',
    bn: 'RMS, গড় মান, ফর্ম ফ্যাক্টর ও পিক ফ্যাক্টর'
  },
  easyExplanation: {
    en: 'The RMS (Root Mean Square) value of an AC supply is its effective value that produces the exact same Joule heating in a resistor as a steady DC supply of the same numerical value. For a pure sine wave, Vrms = Vm / √2 ≈ 0.7071 · Vm.',
    hi: 'एसी आपूर्ति का RMS (रूट मीन स्क्वायर) मान उसका प्रभावी मान होता है जो किसी प्रतिरोधक में ठीक उतना ही जूल तापन उत्पन्न करता है जितना कि समान मान की स्थिर डीसी आपूर्ति। शुद्ध साइन वेव के लिए, Vrms = Vm / √2 ≈ 0.7071 · Vm।',
    bn: 'এসি সাপ্লাইয়ের আরএমএস (রুট মিন স্কয়ার) মান হলো তার কার্যকর মান যা কোনো রোধে সমমানের ডিসি ভোল্টেজের সমান জুল তাপীয় শক্তি উৎপন্ন করে। বিশুদ্ধ সাইন তরঙ্গের জন্য Vrms = Vm / √2 ≈ 0.7071 · Vm।'
  },
  detailedExplanation: {
    en: '1. Concept & Definition of RMS (Root Mean Square) Value:\nThe RMS (Effective) value of an alternating current is defined as that steady direct current (DC) which, when flowing through a given resistor for a given time, produces the exact same amount of heat energy as produced by the alternating current flowing through the same resistor for the same duration.\n\nMathematical Definition:\nVrms = √[ (1 / T) · ∫₀ᵀ v²(t) dt ]\nFor a pure sinusoidal wave v(t) = Vm · sin(ωt):\nVrms = Vm / √2 = 0.7071 · Vm\nIrms = Im / √2 = 0.7071 · Im\nPeak value in terms of RMS: Vm = √2 · Vrms ≈ 1.4142 · Vrms.\n\n2. Average Value of an AC Waveform:\nThe average value is the arithmetic mean of all instantaneous values over a specified interval.\n- Over a COMPLETE Symmetrical Cycle:\nSince positive half-cycle area exactly equals negative half-cycle area in magnitude with opposite sign, Average over 1 full cycle = 0 V.\n- Over ONE HALF-CYCLE (0 to T/2):\nVavg = (1 / π) · ∫₀π Vm · sin(θ) dθ = (2 · Vm) / π ≈ 0.6366 · Vm\nIavg = (2 · Im) / π ≈ 0.6366 · Im\n\n3. Form Factor (Kf):\nForm factor is the ratio of RMS value to the half-cycle average value:\nForm Factor (Kf) = RMS Value / Half-Cycle Average Value\nFor a pure sinusoidal wave:\nKf = (Vm / √2) / (2Vm / π) = π / (2√2) ≈ 1.1107 (commonly taken as 1.11)\n\n4. Peak Factor / Crest Factor (Kp):\nPeak factor is the ratio of maximum peak value to the RMS value:\nPeak Factor (Kp) = Maximum Peak Value (Vm) / RMS Value (Vrms)\nFor a pure sinusoidal wave:\nKp = Vm / (Vm / √2) = √2 ≈ 1.4142 (commonly taken as 1.414)\n\n5. Practical Significance:\n- All standard AC measuring instruments (voltmeters, ammeters) and equipment specifications indicate RMS values unless explicitly designated as peak.\n- Standard Indian domestic supply: 230 V (RMS) has a peak voltage of Vm = 230 × √2 ≈ 325.27 V.\n- Insulation design of cables and transformers must withstand the PEAK voltage (325.3 V), while thermal ratings depend on the RMS value (230 V).',
    hi: '1. RMS (प्रभावी) मान की अवधारणा:\nप्रत्यावर्ती धारा का RMS मान वह स्थिर दिष्ट धारा (DC) है जो किसी प्रतिरोधक में समान समय में ठीक उतनी ही ऊष्मा उत्पन्न करती है जितनी कि AC धारा।\n\nशुद्ध साइन वेव के लिए:\nVrms = Vm / √2 = 0.7071 · Vm\nIrms = Im / √2 = 0.7071 · Im\nशिखर मान: Vm = √2 · Vrms = 1.4142 · Vrms।\n\n2. औसत मान (Average Value):\n- पूर्ण सममित चक्र पर औसत मान = 0 V (धनात्मक और ऋणात्मक क्षेत्र एक दूसरे को निरस्त करते हैं)।\n- अर्ध-चक्र पर औसत मान: Vavg = 2Vm / π ≈ 0.6366 · Vm।\n\n3. फॉर्म फैक्टर (Form Factor, Kf):\nफॉर्म फैक्टर = RMS मान / अर्ध-चक्र औसत मान\nशुद्ध साइन वेव के लिए: Kf = 1.1107 ≈ 1.11।\n\n4. पीक फैक्टर (Peak / Crest Factor, Kp):\nपीक फैक्टर = शिखर मान / RMS मान\nशुद्ध साइन वेव के लिए: Kp = √2 ≈ 1.414।\n\n5. व्यावहारिक महत्व:\nसभी AC वोल्टमीटर और एमीटर RMS मान मापते हैं। 230V RMS ग्रिड का शिखर मान 325.3 V होता है। केबल इन्सुलेशन को शिखर मान (325.3 V) सहन करना होता है।',
    bn: '১. আরএমএস (RMS / কার্যকর) মানের ধারণা:\nএসি কারেন্টের আরএমএস মান হলো সেই পরিমাণ স্থির ডিসি কারেন্ট যা নির্দিষ্ট রোধে নির্দিষ্ট সময়ে ঠিক একই পরিমাণ তাপ শক্তি উৎপন্ন করে।\n\nবিশুদ্ধ সাইন তরঙ্গের জন্য:\nVrms = Vm / √2 = ০.৭০৭১ · Vm\nIrms = Im / √2 = ০.৭০৭১ · Im\nপিক মান: Vm = √2 · Vrms = ১.৪১৪২ · Vrms।\n\n২. গড় মান (Average Value):\n- ১ পূর্ণ প্রতিসম সাইকেলে গড় মান = 0 V (পজিটিভ ও নেগেটিভ অর্ধ-চক্র পরস্পরকে বাতিল করে)।\n- অর্ধ-সাইকেলে গড় মান: Vavg = 2Vm / π ≈ ০.৬৩৬৬ · Vm।\n\n৩. ফর্ম ফ্যাক্টর (Kf):\nফর্ম ফ্যাক্টর = RMS মান / অর্ধ-সাইকেল গড় মান\nবিশুদ্ধ সাইন তরঙ্গের জন্য: Kf = ১.১১।\n\n৪. পিক ফ্যাক্টর (Kp):\nপিক ফ্যাক্টর = পিক মান / RMS মান\nবিশুদ্ধ সাইন তরঙ্গের জন্য: Kp = √২ ≈ ১.৪১৪।\n\n৫. ব্যবহারিক গুরুত্ব:\nসকল এসি মিটার আরএমএস মান পরিমাপ করে। ২৩০V গ্রিডের পিক ভোল্টেজ ৩২৫.৩ V। কেবল ইনসুলেশন ডিজাইন পিক ভোল্টেজের ওপর ভিত্তি করে হয়।'
  },
  formulas: [
    {
      symbol: 'V_{rms}',
      expression: 'V_{rms} = V_m / \\sqrt{2} \\approx 0.7071 \\cdot V_m',
      description: {
        en: 'RMS (Root Mean Square) Voltage for Sinusoidal Waveform',
        hi: 'साइनसॉइडल वेवफॉर्म के लिए RMS (रूट मीन स्क्वायर) वोल्टेज',
        bn: 'সাইনুসয়েডাল তরঙ্গের জন্য RMS ভোল্টেজ'
      }
    },
    {
      symbol: 'V_{avg}',
      expression: 'V_{avg(half)} = 2 \\cdot V_m / \\pi \\approx 0.6366 \\cdot V_m',
      description: {
        en: 'Half-Cycle Average Voltage for Symmetrical Sine Wave',
        hi: 'सममित साइन वेव का अर्ध-चक्र औसत वोल्टेज',
        bn: 'প্রতিসম সাইন তরঙ্গের অর্ধ-সাইকেল গড় ভোল্টেজ'
      }
    },
    {
      symbol: 'K_f',
      expression: 'K_f = V_{rms} / V_{avg(half)} = \\pi / (2\\sqrt{2}) \\approx 1.11',
      description: {
        en: 'Form Factor of a Pure Sinusoidal Waveform',
        hi: 'शुद्ध साइनसॉइडल वेवफॉर्म का फॉर्म फैक्टर',
        bn: 'বিশুদ্ধ সাইনুসয়েডাল তরঙ্গের ফর্ম ফ্যাক্টর'
      }
    },
    {
      symbol: 'K_p',
      expression: 'K_p = V_m / V_{rms} = \\sqrt{2} \\approx 1.414',
      description: {
        en: 'Peak Factor / Crest Factor of a Pure Sinusoidal Waveform',
        hi: 'शुद्ध साइनसॉइडल वेवफॉर्म का पीक (क्रेस्ट) फैक्टर',
        bn: 'বিশুদ্ধ সাইনুসয়েডাল তরঙ্গের পিক (ক্রেস্ট) ফ্যাক্টর'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-rms-average-comparison',
      title: {
        en: 'Comparative Levels: Peak, RMS & Average Values on Sine Wave',
        hi: 'तुलनात्मक स्तर: साइन वेव पर शिखर, RMS एवं औसत मान',
        bn: 'তুলনামূলক মাত্রা: সাইন তরঙ্গে পিক, RMS এবং গড় মান'
      },
      caption: {
        en: 'Visual comparison showing Peak Vm (1.00), RMS Vrms (0.707 Vm), Half-Cycle Average Vavg (0.637 Vm), and Full-Cycle Symmetrical Average (0 V).',
        hi: 'शिखर मान Vm (1.00), RMS मान Vrms (0.707 Vm), और अर्ध-चक्र औसत Vavg (0.637 Vm) का दृश्य आरेख।',
        bn: 'পিক মান Vm (১.০০), RMS মান Vrms (০.৭০৭ Vm) এবং অর্ধ-সাইকেল গড় মান Vavg (০.৬৩৭ Vm) এর তুলনামূলক চিত্র।'
      },
      svgType: 'circuit-rms-average'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch5-peak-to-rms',
      problem: {
        en: 'A sinusoidal AC voltage has a measured peak value of Vm = 325.27 V. Calculate its effective RMS voltage (Vrms).',
        hi: 'एक साइनसॉइडल एसी वोल्टेज का मापा गया शिखर मान Vm = 325.27 V है। इसके प्रभावी RMS वोल्टेज (Vrms) की गणना करें।',
        bn: 'একটি সাইনুসয়েডাল এসি ভোল্টেজের পিক মান Vm = ৩২৫.২৭ V। এর কার্যকর আরএমএস (RMS) ভোল্টেজ নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n- Peak Voltage Vm = 325.27 V\n\nFormula:\nRMS Voltage Vrms = Vm / √2 = 0.707107 · Vm\n\nSubstitution:\nVrms = 325.27 / √2 = 325.27 / 1.41421356\n\nCalculation:\nVrms = 230.00 V\n\nAnswer:\nRMS Voltage Vrms = 230.0 V (Standard domestic utility supply).',
        hi: 'दिया गया है:\n- शिखर वोल्टेज Vm = 325.27 V\n\nसूत्र:\nRMS वोल्टेज Vrms = Vm / √2\n\nमान रखने पर:\nVrms = 325.27 / 1.4142 = 230.0 V\n\nउत्तर:\nRMS वोल्टेज Vrms = 230.0 V।',
        bn: 'প্রদত্ত:\n- পিক ভোল্টেজ Vm = ৩২৫.২৭ V\n\nসূত্র:\nRMS ভোল্টেজ Vrms = Vm / √2\n\nমান বসিয়ে:\nVrms = ৩২৫.২৭ / ১.৪১৪২ = ২৩০.০ V\n\nউত্তর:\nRMS ভোল্টেজ Vrms = ২৩০.০ V।'
      },
      givenValues: {
        'Peak Voltage (Vm)': '325.27 V'
      },
      finalAnswer: {
        en: 'RMS Voltage Vrms = 230.0 V',
        hi: 'RMS वोल्टेज Vrms = 230.0 V',
        bn: 'RMS ভোল্টেজ Vrms = ২৩০.০ V'
      }
    },
    {
      id: 'ex-ch5-rms-to-peak',
      problem: {
        en: 'An industrial AC transmission line operates at an RMS voltage of Vrms = 11 kV (11,000 V). Determine the peak voltage (Vm) that the line insulator dielectric must withstand.',
        hi: 'एक औद्योगिक एसी ट्रांसमिशन लाइन Vrms = 11 kV (11,000 V) के RMS वोल्टेज पर संचालित होती है। उस शिखर वोल्टेज (Vm) का निर्धारण करें जिसे लाइन इंसुलेटर को सहन करना होगा।',
        bn: 'একটি শিল্প এসি সঞ্চালন লাইন Vrms = ১১ kV (১১,০০০ V) আরএমএস ভোল্টেজে পরিচালিত হয়। লাইন ইনসুলেটরকে যে পিক ভোল্টেজ (Vm) সহ্য করতে হবে তা নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n- RMS Voltage Vrms = 11,000 V (11 kV)\n\nFormula:\nPeak Voltage Vm = √2 · Vrms = 1.41421356 · Vrms\n\nSubstitution:\nVm = 1.41421356 × 11,000 V\n\nCalculation:\nVm = 15,556.35 V = 15.56 kV\n\nAnswer:\nPeak Voltage Vm = 15.56 kV (Insulators must be rated for at least 15.56 kV).',
        hi: 'दिया गया है:\n- RMS वोल्टेज Vrms = 11,000 V\n\nसूत्र:\nशिखर वोल्टेज Vm = √2 · Vrms\n\nमान रखने पर:\nVm = 1.4142 × 11,000 = 15,556.35 V = 15.56 kV\n\nउत्तर:\nशिखर वोल्टेज Vm = 15.56 kV।',
        bn: 'প্রদত্ত:\n- RMS ভোল্টেজ Vrms = ১১,০০০ V\n\nসূত্র:\nপিক ভোল্টেজ Vm = √2 · Vrms\n\nমান বসিয়ে:\nVm = ১.৪১৪২ × ১১,০০০ = ১৫,৫৫৬.৩৫ V = ১৫.৫৬ kV\n\nউত্তর:\nপিক ভোল্টেজ Vm = ১৫.৫৬ kV।'
      },
      givenValues: {
        'Vrms': '11 kV (11,000 V)'
      },
      finalAnswer: {
        en: 'Peak Voltage Vm = 15.56 kV (15,556.35 V)',
        hi: 'शिखर वोल्टेज Vm = 15.56 kV (15,556.35 V)',
        bn: 'পিক ভোল্টেজ Vm = ১৫.৫৬ kV (১৫,৫৫৬.৩৫ V)'
      }
    },
    {
      id: 'ex-ch5-half-cycle-avg',
      problem: {
        en: 'A sinusoidal AC current has a peak amplitude of Im = 50 A. Calculate: (a) Its half-cycle average value (Iavg), and (b) Its full-cycle average value.',
        hi: 'एक साइनसॉइडल एसी धारा का शिखर आयाम Im = 50 A है। गणना करें: (a) इसका अर्ध-चक्र औसत मान (Iavg), एवं (b) इसका पूर्ण-चक्र औसत मान।',
        bn: 'একটি সাইনুসয়েডাল এসি কারেন্টের পিক অ্যাম্প্লিটিউড Im = ৫০ A। নির্ণয় করুন: (a) এর অর্ধ-সাইকেল গড় মান (Iavg), এবং (b) এর পূর্ণ-সাইকেল গড় মান।'
      },
      solution: {
        en: 'Given:\n- Peak Current Im = 50 A\n\nPart (a): Half-Cycle Average Current\nFormula: Iavg(half) = (2 · Im) / π\nSubstitution: Iavg = (2 × 50) / 3.14159265 = 100 / 3.14159\nCalculation: Iavg = 31.83 A\n\nPart (b): Full-Cycle Average Current\nFor any symmetrical sinusoidal wave, positive and negative half-cycles have equal area and opposite signs.\nCalculation: Iavg(full) = 0.0 A\n\nAnswer:\n(a) Half-cycle average = 31.83 A; (b) Full-cycle average = 0.0 A.',
        hi: 'दिया गया है:\n- शिखर धारा Im = 50 A\n\nभाग (a): अर्ध-चक्र औसत:\nसूत्र: Iavg = (2 · Im) / π = 100 / 3.1416 = 31.83 A\n\nभाग (b): पूर्ण-चक्र औसत:\nसममित तरंग के लिए पूर्ण चक्र का औसत सदैव 0 A होता है।\n\nउत्तर:\n(a) अर्ध-चक्र औसत = 31.83 A; (b) पूर्ण-चक्र औसत = 0.0 A।',
        bn: 'প্রদত্ত:\n- পিক কারেন্ট Im = ৫০ A\n\nঅংশ (a): অর্ধ-সাইকেল গড়:\nসূত্র: Iavg = (2 · Im) / π = ১০০ / ৩.১৪১৬ = ৩১.৮৩ A\n\nঅংশ (b): পূর্ণ-সাইকেল গড়:\nপ্রতিসম তরঙ্গের জন্য পূর্ণ সাইকেলের গড় সর্বদা 0 A।\n\nউত্তর:\n(a) অর্ধ-সাইকেল গড় = ৩১.৮৩ A; (b) পূর্ণ-সাইকেল গড় = ০.০ A।'
      },
      givenValues: {
        'Im': '50 A'
      },
      finalAnswer: {
        en: 'Half-Cycle Average = 31.83 A | Full-Cycle Average = 0.0 A',
        hi: 'अर्ध-चक्र औसत = 31.83 A | पूर्ण-चक्र औसत = 0.0 A',
        bn: 'অর্ধ-সাইকেল গড় = ৩১.৮৩ A | পূর্ণ-সাইকেল গড় = ০.০ A'
      }
    },
    {
      id: 'ex-ch5-form-peak-factor',
      problem: {
        en: 'A sinusoidal AC voltage waveform has a peak voltage of Vm = 100 V. Calculate its: (a) RMS voltage, (b) Half-cycle average voltage, (c) Form Factor (Kf), and (d) Peak Factor (Kp).',
        hi: 'एक साइनसॉइडल एसी वोल्टेज वेवफॉर्म का शिखर वोल्टेज Vm = 100 V है। ज्ञात करें: (a) RMS वोल्टेज, (b) अर्ध-चक्र औसत वोल्टेज, (c) फॉर्म फैक्टर (Kf), एवं (d) पीक फैक्टर (Kp)।',
        bn: 'একটি সাইনুসয়েডাল এসি ভোল্টেজের পিক মান Vm = ১০০ V। নির্ণয় করুন: (a) RMS ভোল্টেজ, (b) অর্ধ-সাইকেল গড় ভোল্টেজ, (c) ফর্ম ফ্যাক্টর (Kf), এবং (d) পিক ফ্যাক্টর (Kp)।'
      },
      solution: {
        en: 'Given:\n- Peak Voltage Vm = 100 V\n\nStep 1: Calculate RMS Voltage\nVrms = Vm / √2 = 100 / 1.4142 = 70.71 V\n\nStep 2: Calculate Half-Cycle Average Voltage\nVavg = (2 · Vm) / π = (2 × 100) / 3.1416 = 63.66 V\n\nStep 3: Calculate Form Factor (Kf)\nKf = Vrms / Vavg = 70.71 / 63.66 = 1.1107 ≈ 1.11\n\nStep 4: Calculate Peak Factor (Kp)\nKp = Vm / Vrms = 100 / 70.71 = 1.4142 ≈ 1.414\n\nAnswer:\n(a) Vrms = 70.71 V, (b) Vavg = 63.66 V, (c) Form Factor Kf = 1.11, (d) Peak Factor Kp = 1.414.',
        hi: 'दिया गया है:\n- Vm = 100 V\n\nचरण 1: Vrms = 100 / √2 = 70.71 V\nचरण 2: Vavg = 200 / π = 63.66 V\nचरण 3: फॉर्म फैक्टर Kf = 70.71 / 63.66 = 1.11\nचरण 4: पीक फैक्टर Kp = 100 / 70.71 = 1.414\n\nउत्तर:\n(a) Vrms = 70.71 V, (b) Vavg = 63.66 V, (c) Kf = 1.11, (d) Kp = 1.414।',
        bn: 'প্রদত্ত:\n- Vm = ১০০ V\n\nধাপ ১: Vrms = ১০০ / √2 = ৭০.৭১ V\nধাপ ২: Vavg = ২০০ / π = ৬৩.৬৬ V\nধাপ ৩: ফর্ম ফ্যাক্টর Kf = ৭০.৭১ / ৬৩.৬৬ = ১.১১\nধাপ ৪: পিক ফ্যাক্টর Kp = ১০০ / ৭০.৭১ = ১.৪১৪\n\nউত্তর:\n(a) Vrms = ৭০.৭১ V, (b) Vavg = ৬৩.৬৬ V, (c) Kf = ১.১১, (d) Kp = ১.৪১৪।'
      },
      givenValues: {
        'Vm': '100 V'
      },
      finalAnswer: {
        en: 'Vrms = 70.71 V | Vavg = 63.66 V | Form Factor Kf = 1.11 | Peak Factor Kp = 1.414',
        hi: 'Vrms = 70.71 V | Vavg = 63.66 V | फॉर्म फैक्टर Kf = 1.11 | पीक फैक्टर Kp = 1.414',
        bn: 'Vrms = ৭০.৭১ V | Vavg = ৬৩.৬৬ V | ফর্ম ফ্যাক্টর Kf = ১.১১ | পিক ফ্যাক্টর Kp = ১.৪১৪'
      }
    }
  ],
  practicalApplications: {
    en: [
      'AC Instrument Metering: Digital multimeters calibrated to display true RMS for accurate AC power calculations.',
      'Thermal Equipment Sizing: Sizing electric heaters, geysers, and incandescent lighting based on RMS voltage (P = Vrms²/R).',
      'Electrical Insulation Rating: High-voltage substation bushings, transformers, and cables designed for peak voltage stress (√2 · Vrms).',
      'Rectifier Design: Sizing DC smoothing filter capacitors and calculating ripple factor using the AC form factor.'
    ],
    hi: [
      'एसी उपकरण मीटरिंग: सटीक शक्ति गणना के लिए ट्रू RMS प्रदर्शित करने वाले डिजिटल मल्टीमीटर।',
      'तापीय उपकरण रेटिंग: RMS वोल्टेज के आधार पर हीटर और गीजर की रेटिंग (P = Vrms²/R)।',
      'विद्युत इन्सुलेशन रेटिंग: शिखर वोल्टेज (√2 · Vrms) को सहन करने के लिए ट्रांसफार्मर और केबल इन्सुलेशन डिजाइन।',
      'रेक्टिफायर डिजाइन: फिल्टर कैपेसिटर का आकार और रिपल फैक्टर निर्धारित करना।'
    ],
    bn: [
      'এসি মিটারিং: সঠিক পাওয়ার পরিমাপের জন্য ট্রু আরএমএস (True RMS) মাল্টিমিটার ক্যালিব্রেশন।',
      'হিটিং সরঞ্জাম সাইজিং: আরএমএস ভোল্টেজের ভিত্তিতে রুম হিটার ও গিজারের ওয়াটেজ হিসাব (P = Vrms²/R)।',
      'ইনসুলেশন স্পেসিফিকেশন: কেবল ও ট্রান্সফরমারের ইনসুলেশন পিক ভোল্টেজের (√2 · Vrms) ভিত্তিতে নির্ধারণ।',
      'রেকটিফায়ার ফিল্টার ডিজাইন: ফর্ম ফ্যাক্টরের সাহায্যে রিপল ফ্যাক্টর ও স্মুথিং ক্যাপাসিটর গণনা।'
    ]
  },
  importantPoints: {
    en: [
      'RMS value is the heating-equivalent DC value: Vrms = Vm / √2 ≈ 0.7071 · Vm for pure sine waves.',
      'Average value of a symmetrical AC wave over a FULL cycle is always ZERO.',
      'Half-cycle average value for a sinusoidal wave is Vavg = 2Vm / π ≈ 0.6366 · Vm.',
      'Form factor of a pure sinusoidal wave is Kf = Vrms / Vavg = 1.11.',
      'Peak factor (crest factor) of a pure sinusoidal wave is Kp = Vm / Vrms = √2 ≈ 1.414.',
      'Standard nominal power grid voltages (e.g. 230 V, 415 V, 11 kV, 33 kV) are always stated in RMS.'
    ],
    hi: [
      'RMS मान तापन-समतुल्य मान होता है: शुद्ध साइन वेव के लिए Vrms = Vm / √2 ≈ 0.7071 · Vm।',
      'पूर्ण चक्र पर सममित साइन वेव का औसत मान सदैव शून्य (0) होता है।',
      'साइनसॉइडल वेव का अर्ध-चक्र औसत मान Vavg = 2Vm / π ≈ 0.6366 · Vm होता है।',
      'शुद्ध साइन वेव का फॉर्म फैक्टर Kf = 1.11 होता है।',
      'शुद्ध साइन वेव का पीक फैक्टर Kp = √2 ≈ 1.414 होता है।',
      'मानक ग्रिड वोल्टेज (230V, 415V, 11kV) सदैव RMS मान में व्यक्त किए जाते हैं।'
    ],
    bn: [
      'RMS মান হলো তাপীয় সমতুল্য মান: বিশুদ্ধ সাইন তরঙ্গে Vrms = Vm / √2 ≈ ০.৭০৭১ · Vm।',
      'পূর্ণ সাইকেলে প্রতিসম এসি তরঙ্গের গড় মান সর্বদা শূন্য (0)।',
      'সাইন তরঙ্গের অর্ধ-সাইকেল গড় মান Vavg = 2Vm / π ≈ ০.৬৩৬৬ · Vm।',
      'বিশুদ্ধ সাইন তরঙ্গের ফর্ম ফ্যাক্টর Kf = ১.১১।',
      'বিশুদ্ধ সাইন তরঙ্গের পিক ফ্যাক্টর Kp = √২ ≈ ১.৪১৪।',
      'জাতীয় গ্রিডের সকল ভোল্টেজ (২৩০V, ৪১৫V, ১১kV) সর্বদা RMS মানে প্রকাশিত হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Stating that full-cycle average of a sine wave is 2Vm/π: The FULL-cycle average is 0 V; 2Vm/π is the HALF-cycle average.',
      'Confusing RMS with the arithmetic mean: RMS involves squaring, taking the mean, and square rooting; it is NOT the simple average.',
      'Forgetting that Form Factor = RMS / Average and Peak Factor = Peak / RMS.',
      'Designing equipment insulation for RMS rather than Peak voltage: Peak voltage is 1.414 × RMS, which dielectric must withstand.'
    ],
    hi: [
      'यह कहना कि पूर्ण चक्र का औसत 2Vm/π है: पूर्ण चक्र का औसत 0 V होता है; 2Vm/π केवल अर्ध-चक्र का औसत है।',
      'RMS को साधारण अंकगणितीय औसत समझना: RMS में वर्ग, माध्य और वर्गमूल शामिल होता है।',
      'फॉर्म फैक्टर (RMS / औसत) और पीक फैक्टर (शिखर / RMS) के सूत्रों में भ्रमित होना।',
      'इन्सुलेशन को RMS वोल्टेज के लिए डिज़ाइन करना: इन्सुलेशन को सदैव शिखर वोल्टेज (1.414 × RMS) के लिए डिज़ाइन किया जाना चाहिए।'
    ],
    bn: [
      'পূর্ণ সাইকেলের গড় মানকে 2Vm/π বলা: পূর্ণ সাইকেলের গড় মান 0 V; 2Vm/π হলো অর্ধ-সাইকেলের গড়।',
      'RMS মানকে সাধারণ গড় ভাবা: RMS হলো বর্গের গড়ের বর্গমূল, সাধারণ পাটিগণিতীয় গড় নয়।',
      'ফর্ম ফ্যাক্টর (RMS / গড়) ও পিক ফ্যাক্টর (পিক / RMS) এর সূত্র উল্টে ফেলা।',
      'ইনসুলেশনকে RMS মানে ডিজাইন করা: ইনসুলেশনকে অবশ্যই পিক ভোল্টেজের (১.৪১৪ × RMS) জন্য রেট করতে হয়।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch5-l3-1',
      question: {
        en: 'What is the average value of a pure sinusoidal alternating voltage over one complete cycle?',
        hi: 'एक पूर्ण चक्र पर शुद्ध साइनसॉइडल प्रत्यावर्ती वोल्टेज का औसत मान क्या होता है?',
        bn: 'এক পূর্ণ সাইকেলে বিশুদ্ধ সাইনুসয়েডাল অল্টারনেটিং ভোল্টেজের গড় মান কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '0 V', hi: '0 V', bn: '০ V' } },
        { id: 'opt-b', text: { en: '0.637 Vm', hi: '0.637 Vm', bn: '০.৬৩৭ Vm' } },
        { id: 'opt-c', text: { en: '0.707 Vm', hi: '0.707 Vm', bn: '০.৭০৭ Vm' } },
        { id: 'opt-d', text: { en: '1.414 Vm', hi: '1.414 Vm', bn: '১.৪১৪ Vm' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'For any symmetrical wave, positive and negative half-cycles cancel completely over a full cycle, resulting in 0 V.',
        hi: 'सममित तरंग के लिए धनात्मक और ऋणात्मक क्षेत्र पूर्ण चक्र में एक दूसरे को निरस्त कर देते हैं, जिससे औसत 0 V होता है।',
        bn: 'প্রতিসম তরঙ্গের জন্য পূর্ণ সাইকেলে পজিটিভ ও নেগেটিভ অর্ধ-চক্র পরস্পরকে বাতিল করায় গড় মান ০ V হয়।'
      }
    },
    {
      id: 'mcq-ch5-l3-2',
      question: {
        en: 'What is the form factor of a pure sinusoidal AC waveform?',
        hi: 'शुद्ध साइनसॉइडल एसी वेवफॉर्म का फॉर्म फैक्टर क्या होता है?',
        bn: 'বিশুদ্ধ সাইনুসয়েডাল এসি তরঙ্গের ফর্ম ফ্যাক্টর কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '1.00', hi: '1.00', bn: '১.০০' } },
        { id: 'opt-b', text: { en: '1.11', hi: '1.11', bn: '১.১১' } },
        { id: 'opt-c', text: { en: '1.414', hi: '1.414', bn: '১.৪১৪' } },
        { id: 'opt-d', text: { en: '0.707', hi: '0.707', bn: '০.৭০৭' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Form Factor = RMS / Half-Cycle Average = (Vm/√2) / (2Vm/π) = π / (2√2) ≈ 1.11.',
        hi: 'फॉर्म फैक्टर = RMS / अर्ध-चक्र औसत = 1.11।',
        bn: 'ফর্ম ফ্যাক্টর = RMS / অর্ধ-সাইকেল গড় = ১.১১।'
      }
    },
    {
      id: 'mcq-ch5-l3-3',
      question: {
        en: 'If an AC supply has an RMS voltage of 200 V, what is its peak voltage?',
        hi: 'यदि किसी एसी आपूर्ति का RMS वोल्टेज 200 V है, तो इसका शिखर वोल्टेज क्या होगा?',
        bn: 'যদি একটি এসি সাপ্লাইয়ের আরএমএস ভোল্টেজ ২০০ V হয়, তবে এর পিক ভোল্টেজ কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '141.4 V', hi: '141.4 V', bn: '১৪১.৪ V' } },
        { id: 'opt-b', text: { en: '200 V', hi: '200 V', bn: '২০০ V' } },
        { id: 'opt-c', text: { en: '282.8 V', hi: '282.8 V', bn: '২৮২.৮ V' } },
        { id: 'opt-d', text: { en: '400 V', hi: '400 V', bn: '৪০০ V' } }
      ],
      correctOptionId: 'opt-c',
      explanation: {
        en: 'Vm = √2 × Vrms = 1.4142 × 200 V = 282.84 V ≈ 282.8 V.',
        hi: 'Vm = √2 × 200 = 1.4142 × 200 = 282.84 V।',
        bn: 'Vm = √2 × ২০০ = ১.৪১৪২ × ২০০ = ২৮২.৮৪ V।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch5-l3-1',
      question: {
        en: 'An alternating sinusoidal voltage given by v(t) = 340 · sin(100π · t) V is applied across a 10 Ω pure resistor. Calculate: (a) RMS voltage Vrms, (b) RMS current Irms, (c) Average thermal power dissipated P in the resistor.',
        hi: 'एक प्रत्यावर्ती वोल्टेज v(t) = 340 · sin(100π · t) V को 10 Ω के शुद्ध प्रतिरोधक पर लगाया गया है। गणना करें: (a) RMS वोल्टेज Vrms, (b) RMS धारा Irms, (c) प्रतिरोधक में क्षयित औसत तापीय शक्ति P।',
        bn: 'একটি অল্টারনেটিং ভোল্টেজ v(t) = ৩৪০ · sin(১০০π · t) V একটি ১০ Ω রোধের আড়াআড়িতে প্রযুক্ত হলো। নির্ণয় করুন: (a) RMS ভোল্টেজ Vrms, (b) RMS কারেন্ট Irms, (c) রোধে অপচয়িত গড় তাপীয় শক্তি P।'
      },
      hint: {
        en: 'Calculate Vrms = Vm / √2, Irms = Vrms / R, and P = Vrms × Irms = Irms² × R.',
        hi: 'Vrms = Vm / √2, Irms = Vrms / R, और P = Irms² × R की गणना करें।',
        bn: 'Vrms = Vm / √2, Irms = Vrms / R এবং P = Irms² × R হিসাব করুন।'
      },
      answerKey: {
        en: '(a) Vrms = 340 / √2 = 240.42 V.\n(b) Irms = Vrms / R = 240.42 / 10 = 24.04 A.\n(c) Power P = (Vrms)² / R = (240.42)² / 10 = 5780 W = 5.78 kW (or P = Irms² · R = 24.042² × 10 = 5.78 kW).',
        hi: '(a) Vrms = 340 / √2 = 240.42 V।\n(b) Irms = 240.42 / 10 = 24.04 A।\n(c) शक्ति P = (240.42)² / 10 = 5780 W = 5.78 kW।',
        bn: '(a) Vrms = ৩৪০ / √2 = ২৪০.৪২ V।\n(b) Irms = ২৪০.৪২ / ১০ = ২৪.০৪ A।\n(c) পাওয়ার P = (২৪০.৪২)² / ১০ = ৫৭৮০ W = ৫.৭৮ kW।'
      }
    },
    {
      id: 'pq-ch5-l3-2',
      question: {
        en: 'Explain why the heating effect of an AC current in a resistor is proportional to the square of the instantaneous current (i²), and how this leads to the mathematical derivation of the RMS value.',
        hi: 'स्पष्ट करें कि प्रतिरोधक में एसी धारा का तापन प्रभाव तात्कालिक धारा के वर्ग (i²) के समानुपाती क्यों होता है, और यह कैसे RMS मान के गणितीय निगमन की ओर ले जाता है।',
        bn: 'ব্যাখ্যা করুন কেন কোনো রোধে এসি কারেন্টের তাপীয় প্রভাব তাৎক্ষণিক কারেন্টের বর্গের (i²) সমানুপাতিক, এবং কীভাবে এটি আরএমএস (RMS) মানের গাণিতিক প্রতিপাদনে পরিচালিত করে।'
      },
      hint: {
        en: 'Joule heating law state dH = i²R dt. Since i² is always positive regardless of whether i is positive or negative, thermal energy accumulates in both half-cycles.',
        hi: 'जूल के नियम dH = i²R dt का संदर्भ लें। धारा की दिशा चाहे जो हो, i² सदैव धनात्मक रहता है।',
        bn: 'জুলের সূত্র dH = i²R dt উল্লেখ করুন। কারেন্ট ধনাত্মক বা ঋণাত্মক যাই হোক, i² সর্বদা ধনাত্মক থাকে।'
      },
      answerKey: {
        en: '1. Joule\'s Law of Heating: The instantaneous rate of thermal dissipation in a resistor R is p(t) = i²(t) · R. Because i(t) is squared, p(t) is ALWAYS POSITIVE throughout both positive and negative half-cycles; heat is generated continuously.\n2. Average Power Integration: The average heating power over a cycle of period T is P_avg = (1/T) · ∫₀ᵀ [i²(t) · R] dt = R · [ (1/T) · ∫₀ᵀ i²(t) dt ].\n3. Equivalence to DC: For a direct current I_dc, power is P_dc = I_dc² · R. Setting P_avg = P_dc yields I_dc = √[ (1/T) · ∫₀ᵀ i²(t) dt ] = Irms.\nHence, the Root-Mean-Square (RMS) value emerges naturally as the exact heating equivalent of alternating current.',
        hi: '1. जूल का तापन नियम: तापीय शक्ति p(t) = i²(t) · R होती है। धारा का वर्ग (i²) होने के कारण दोनों अर्ध-चक्रों में शक्ति सदैव धनात्मक रहती है।\n2. औसत शक्ति: एक चक्र में औसत शक्ति P_avg = R · [(1/T) ∫ i² dt] होती है।\n3. DC से समतुल्यता: DC शक्ति P = I_dc² · R के बराबर रखने पर I_dc = √[(1/T) ∫ i² dt] = Irms प्राप्त होता है।',
        bn: '১. জুলের তাপীয় সূত্র: যেকোনো রোধে উৎপন্ন তাৎক্ষণিক তাপ p(t) = i²(t) · R। কারেন্টের বর্গ (i²) সর্বদা ধনাত্মক হওয়ায় উভয় অর্ধ-সাইকেলেই তাপ উৎপন্ন হয়।\n২. গড় শক্তি: এক পূর্ণ সাইকেলে গড় শক্তি P_avg = R · [(1/T) ∫ i² dt]।\n৩. ডিসি-র সাথে সমতুল্যকরণ: ডিসি তাপীয় শক্তি P = I_dc² · R এর সাথে সমান করে পাই I_dc = √[(1/T) ∫ i² dt] = Irms। এটিই আরএমএস মানের ভিত্তি।'
      }
    }
  ]
};

export const CHAPTER_5_LESSONS: Record<string, Lesson> = {
  'ch5-ac-fundamentals': LESSON_AC_FUNDAMENTALS,
  'ch5-sinusoidal-waveform': LESSON_SINUSOIDAL_WAVEFORM,
  'ch5-rms-average-values': LESSON_RMS_AVERAGE
};
