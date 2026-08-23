import { Lesson } from '../types';
import { LESSON_SERIES_RL_RC } from './chapter5Lesson10';
import { LESSON_SERIES_RLC } from './chapter5Lesson11';
import { LESSON_AC_IMPEDANCE_ADMITTANCE } from './chapter5Lesson12';
import { LESSON_AC_SERIES_PARALLEL } from './chapter5Lesson13';
import { LESSON_RESONANCE } from './chapter5Lesson14';
import { LESSON_RESONANT_FREQUENCY_Q } from './chapter5Lesson15';
import { LESSON_AC_POWER } from './chapter5Lesson16';
import { LESSON_POWER_FACTOR } from './chapter5Lesson17';
import { LESSON_THREE_PHASE_INTRO } from './chapter5Lesson18';
import { LESSON_STAR_DELTA_AC } from './chapter5Lesson19';
import { LESSON_AC_PRACTICAL_APPLICATIONS } from './chapter5Lesson20';

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
      'पीक फैक्टर (क्रेस्ट फैक्टर) Kp = Vm / Vrms = √2 ≈ 1.414 होता है।',
      'मानक ग्रिड वोल्टेज (जैसे 230 V, 415 V) हमेशा RMS में व्यक्त किए जाते हैं।'
    ],
    bn: [
      'RMS মান হলো তাপীয় সমতুল্য DC মান: সাইন তরঙ্গের জন্য Vrms = Vm / √2 ≈ 0.7071 · Vm।',
      'একটি পূর্ণ সাইকেলে প্রতিসম এসি তরঙ্গের গড় মান সর্বদা শূন্য (0)।',
      'সাইন তরঙ্গের অর্ধ-সাইকেল গড় মান Vavg = 2Vm / π ≈ 0.6366 · Vm।',
      'বিশুদ্ধ সাইন তরঙ্গের ফর্ম ফ্যাক্টর Kf = Vrms / Vavg = ১.১১।',
      'পিক ফ্যাক্টর (ক্রেস্ট ফ্যাক্টর) Kp = Vm / Vrms = √2 ≈ ১.৪১৪।',
      'স্ট্যান্ডার্ড পাওয়ার গ্রিড ভোল্টেজ (যেমন ২৩০ V, ৪১৫ V) সর্বদা RMS মানে প্রকাশিত হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Stating average value over a full cycle as 2Vm/π: The full cycle average is 0 V; 2Vm/π is only for a half cycle.',
      'Confusing RMS with simple arithmetic mean: RMS involves squaring, taking the mean, and square-rooting.',
      'Swapping Form factor (RMS / Avg) and Peak factor (Peak / RMS) formulas.',
      'Designing insulation for RMS voltage: Insulation must always withstand the peak voltage (1.414 × RMS).'
    ],
    hi: [
      'पूर्ण चक्र पर औसत मान को 2Vm/π बताना: पूर्ण चक्र औसत 0 V होता है; 2Vm/π केवल अर्ध-चक्र का औसत है।',
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

export const LESSON_PHASE_DIFFERENCE: Lesson = {
  id: 'lsn-ch5-phase-phase-difference',
  topicId: 'ch5-phase-phase-difference',
  order: 4,
  title: {
    en: 'Phase, Phase Difference & Phasors',
    hi: 'फेज, फेज अंतर एवं फेजर निरूपण',
    bn: 'ফেজ, ফেজ পার্থক্য ও ফেজর'
  },
  easyExplanation: {
    en: 'Phase describes the specific fraction of a cycle that an alternating waveform has advanced relative to an arbitrary starting reference point. Phase difference measures the angular or time separation between two alternating quantities of the exact same frequency.',
    hi: 'फेज यह दर्शाता है कि एक प्रत्यावर्ती तरंग किसी प्रारंभिक संदर्भ बिंदु के सापेक्ष चक्र के कितने भाग तक आगे बढ़ चुकी है। फेज अंतर समान आवृत्ति की दो प्रत्यावर्ती राशियों के बीच के कोणीय या समय अंतराल को मापता है।',
    bn: 'ফেজ হলো কোনো নির্দিষ্ট রেফারেন্স বিন্দুর সাপেক্ষে একটি অল্টারনেটিং তরঙ্গের বর্তমান চক্রীয় অবস্থান। ফেজ পার্থক্য একই কম্পাঙ্কের দুটি এসি তরঙ্গের মধ্যকার কৌণিক বা সময়ের ব্যবধান নির্দেশ করে।'
  },
  detailedExplanation: {
    en: '1. Meaning of Phase:\nPhase represents the instantaneous fractional position of a sinusoidal wave in its cyclic progression, measured as the total electrical angle θ = (ωt + φ) in degrees (°) or radians (rad) from the positive zero-crossing reference.\n\n2. Phase Angle (Initial Phase Shift, φ):\nThe angle φ represents the value of the phase at the exact initial instant t = 0:\nv(t) = Vm · sin(ωt + φ)\n- If φ = 0: the wave passes through zero in the positive direction at t = 0.\n- If φ > 0 (+φ): the wave is shifted to the left on the time axis (reaches positive maximum earlier).\n- If φ < 0 (-φ): the wave is shifted to the right on the time axis (reaches positive maximum later).\n\n3. Phase Difference (φ₁ - φ₂):\nWhen two alternating quantities of the SAME frequency are compared, their phase difference is the angular difference between their corresponding points (such as positive peaks or positive zero crossings):\nLet v₁(t) = Vm1 · sin(ωt + φ₁) and v₂(t) = Vm2 · sin(ωt + φ₂)\nPhase difference φ = φ₁ - φ₂\n\n4. Relative Phase Terminology:\n- In-Phase (φ = 0°): Both quantities pass through zero, reach positive peaks, and pass through negative peaks at the EXACT same instants.\n- Leading Quantity: A waveform that attains its maximum or zero-crossing EARLIER in time relative to another (has a more positive phase angle).\n- Lagging Quantity: A waveform that attains its maximum or zero-crossing LATER in time relative to another (has a more negative phase angle).\n- Quadrature (90° Phase Difference): Waveforms differ by 90° (π/2 rad); when one wave is at its peak, the other is passing through zero.\n- Antiphase / Out of Phase by 180°: Waveforms are in exact opposition (φ = 180° = π rad); when one is at its positive peak, the other is at its negative peak.\n\n5. Time-to-Phase Mathematical Relationship:\nThe physical time difference Δt between corresponding points of two sinusoidal waveforms of frequency f and time period T is:\nΔt = (|φ| / 360°) · T = |φ| / (2π · f) = |φ| / ω\nWhere φ is in degrees when dividing by 360°, and in radians when dividing by 2π.\n\n6. Phasor Concept & Rotating Vector Representation:\nA phasor is a directed line segment (vector) that rotates counterclockwise (CCW) about the origin at a constant angular velocity ω rad/s equal to the AC angular frequency.\n- Length of the Phasor: Represents the maximum amplitude (Vm) or RMS value (Vrms).\n- Angle with Reference Axis: Represents the phase angle φ at t = 0.\n- Vertical Projection: The vertical component of the rotating phasor onto the imaginary/vertical axis represents the exact instantaneous value: v(t) = Vm · sin(ωt + φ).\n- Phasor Addition/Subtraction: Simplifies complex sinusoidal arithmetic from differential equations into straightforward algebraic vector geometry.',
    hi: '1. फेज का अर्थ:\nफेज किसी प्रत्यावर्ती राशि की चक्र में तात्कालिक स्थिति को दर्शाता है, जिसे विद्युत कोण θ = (ωt + φ) के रूप में मापा जाता है।\n\n2. प्रारंभिक फेज कोण (φ):\nt = 0 पर वेवफॉर्म की कोणीय स्थिति को प्रारंभिक फेज कोण कहते हैं: v(t) = Vm · sin(ωt + φ)।\n- यदि φ > 0 (+φ): तरंग समय में पहले शिखर पर पहुँचती है (लीडिंग)।\n- यदि φ < 0 (-φ): तरंग समय में बाद में शिखर पर पहुँचती है (लैगिंग)।\n\n3. फेज अंतर:\nसमान आवृत्ति की दो राशियों के बीच का कोणीय अंतर: φ = φ₁ - φ₂।\n- इन-फेज (In-Phase): φ = 0°, दोनों तरंगें एक साथ शून्य और शिखर पर पहुँचती हैं।\n- लीडिंग (Leading): जो तरंग समय में पहले शिखर प्राप्त करती है।\n- लैगिंग (Lagging): जो तरंग समय में बाद में शिखर प्राप्त करती है।\n- 90° फेज अंतर (Quadrature): एक के शिखर पर होने पर दूसरी शून्य होती है।\n- 180° विपरीत फेज (Antiphase): दोनों तरंगें एक दूसरे के पूर्णतः विपरीत होती हैं।\n\n4. समय एवं फेज संबंध:\nΔt = (|φ| / 360°) × T = |φ| / (2πf)।\n\n5. फेजर अवधारणा (Phasor Concept):\nफेजर एक घूर्णनशील वेक्टर है जो वामावर्त (CCW) दिशा में ω rad/s से घूमता है।\n- फेजर की लंबाई: शिखर मान या RMS मान।\n- फेजर का ऊर्ध्वाधर प्रक्षेप: तात्कालिक मान v(t)।',
    bn: '১. ফেজের অর্থ:\nফেজ হলো কোনো সাইনুসয়েডাল তরঙ্গের চক্রীয় অগ্রগতির তাৎক্ষণিক অবস্থান, যা মোট তড়িৎ কোণ θ = (ωt + φ) হিসেবে পরিমাপ করা হয়।\n\n২. প্রাথমিক ফেজ কোণ (φ):\nt = ০ মুহূর্তে তরঙ্গের কোণ: v(t) = Vm · sin(ωt + φ)।\n- φ > 0 (+φ) হলে তরঙ্গ সময়ের দিক থেকে আগে শিখরে পৌঁছায় (লিডিং)।\n- φ < 0 (-φ) হলে তরঙ্গ সময়ের দিক থেকে পরে শিখরে পৌঁছায় (ল্যাগিং)।\n\n৩. ফেজ পার্থক্য:\nএকই কম্পাঙ্কের দুটি তরঙ্গের মধ্যকার কৌণিক ব্যবধান: φ = φ₁ - φ₂।\n- ইন-ফেজ: φ = 0°, একই সাথে শূন্য ও পিক মানে পৌঁছায়।\n- লিডিং: যে তরঙ্গ আগে পিক বা শূন্য অতিক্রম করে।\n- ল্যাগিং: যে তরঙ্গ পরে পিক বা শূন্য অতিক্রম করে।\n- ৯০° কোয়ড্রেচার: একটি যখন পিকে, অন্যটি তখন শূন্যে।\n- ১৮০° অ্যান্টিফেজ: দুটি তরঙ্গ সম্পূর্ণ বিপরীতমুখী।\n\n৪. সময় ও ফেজের সম্পর্ক:\nΔt = (|φ| / 360°) × T = |φ| / (2πf)।\n\n৫. ফেজর ও ঘূর্ণায়মান ভেক্টর:\nফেজর হলো একটি ভেক্টর যা ঘড়ির কাঁটার বিপরীত দিকে (CCW) ধ্রুবক কৌণিক বেগে ω rad/s ঘোরে। এর উলম্ব প্রক্ষেপ তাৎক্ষণিক মান প্রকাশ করে।'
  },
  formulas: [
    {
      symbol: 'φ',
      expression: 'φ = φ_1 - φ_2',
      description: {
        en: 'Phase difference between two AC waveforms of same frequency',
        hi: 'समान आवृत्ति की दो एसी तरंगों के बीच फेज अंतर',
        bn: 'একই কম্পাঙ্কের দুটি এসি তরঙ্গের মধ্যকার ফেজ পার্থক্য'
      }
    },
    {
      symbol: 'Δt',
      expression: 'Δt = (|φ| / 360°) · T = |φ| / (2π · f)',
      description: {
        en: 'Physical time shift corresponding to phase angle φ',
        hi: 'फेज कोण φ के संगत भौतिक समय अंतराल',
        bn: 'ফেজ কোণ φ এর সংশ্লিষ্ট বাস্তব সময় ব্যবধান'
      }
    },
    {
      symbol: 'V(t)',
      expression: 'V(t) = V_m · \\sin(\\omega t + \\phi)',
      description: {
        en: 'Sinusoidal waveform with initial phase angle φ',
        hi: 'प्रारंभिक फेज कोण φ युक्त साइनसॉइडल वेवफॉर्म',
        bn: 'প্রাথমিক ফেজ কোণ φ সমন্বিত সাইনুসয়েডাল তরঙ্গ'
      }
    },
    {
      symbol: '\\mathbf{V}',
      expression: '\\mathbf{V} = V_{rms} \\angle \\phi = \\frac{V_m}{\\sqrt{2}} \\angle \\phi',
      description: {
        en: 'Phasor representation in polar form with RMS magnitude and angle',
        hi: 'ध्रुवीय रूप में RMS परिमाण एवं कोण के साथ फेजर निरूपण',
        bn: 'RMS মান ও কোণ সহ পোলার রূপে ফেজর প্রকাশ'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ch5-phase-diff',
      title: {
        en: 'Phasor Vector Rotation and Corresponding Phase-Shifted Waveforms',
        hi: 'फेजर वेक्टर घूर्णन एवं संबंधित फेज-विस्थापित वेवफॉर्म',
        bn: 'ফেজর ভেক্টর ঘূর্ণন ও সংশ্লিষ্ট ফেজ-স্থানান্তরিত তরঙ্গ'
      },
      caption: {
        en: 'Counter-clockwise rotating phasors VA and VB generate phase-shifted sinusoidal waves vA(t) and vB(t) separated by phase angle φ and time difference Δt.',
        hi: 'वामावर्त घूमते फेजर VA एवं VB फेज अंतर φ और समय अंतर Δt से अलग वेवफॉर्म उत्पन्न करते हैं।',
        bn: 'ঘড়ির কাঁটার বিপরীতে ঘূর্ণায়মান ফেজর VA এবং VB ফেজ পার্থক্য φ ও সময় পার্থক্য Δt বিশিষ্ট তরঙ্গ উৎপন্ন করে।'
      },
      svgType: 'circuit-phase-difference'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch5-l4-1',
      problem: {
        en: 'Two alternating voltages of grid frequency f = 50 Hz have a time difference of Δt = 2.5 ms between their consecutive positive zero-crossings. Calculate the phase difference (φ) between them in degrees and in radians.',
        hi: 'ग्रिड आवृत्ति f = 50 Hz के दो प्रत्यावर्ती वोल्टेज के बीच धनात्मक शून्य-क्रॉसिंग में समय अंतर Δt = 2.5 ms है। उनके बीच फेज अंतर (φ) की डिग्री और रेडियन में गणना करें।',
        bn: 'গ্রিড ফ্রিকোয়েন্সি f = ৫০ Hz বিশিষ্ট দুটি অল্টারনেটিং ভোল্টেজের পজিটিভ জিরো-ক্রসিং এর মধ্যে সময় পার্থক্য Δt = ২.৫ ms। তাদের মধ্যকার ফেজ পার্থক্য (φ) ডিগ্রি এবং রেডিয়ানে নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n- Frequency f = 50 Hz\n- Time difference Δt = 2.5 ms = 0.0025 s\n\n1. Calculate Time Period T:\nT = 1 / f = 1 / 50 = 0.020 s = 20 ms\n\n2. Phase Difference in Degrees:\nφ = (Δt / T) × 360° = (2.5 ms / 20 ms) × 360°\nφ = (1 / 8) × 360° = 45.0°\n\n3. Phase Difference in Radians:\nφ_rad = φ × (π / 180°) = 45 × (π / 180) = π / 4 rad = 0.7854 rad\n\nAnswer:\nPhase difference φ = 45° (or π/4 rad).',
        hi: 'दिया गया है:\n- f = 50 Hz\n- Δt = 2.5 ms = 0.0025 s\n\n1. आवर्तकाल T = 1 / 50 = 20 ms\n2. डिग्री में फेज अंतर: φ = (2.5 / 20) × 360° = 45°\n3. रेडियन में: φ = 45 × (π / 180) = 0.7854 rad (π/4 rad)\n\nउत्तर: φ = 45° (π/4 rad)।',
        bn: 'প্রদত্ত:\n- f = ৫০ Hz\n- Δt = ২.৫ ms = ০.০০২৫ s\n\n১. পর্যায়কাল T = ১ / ৫০ = ২০ ms\n২. ডিগ্রিতে ফেজ পার্থক্য: φ = (২.৫ / ২০) × ৩৬০° = ৪৫°\n৩. রেডিয়ানে: φ = ৪৫ × (π / ১৮০) = ০.৭৮৫৪ rad (π/৪ rad)\n\nউত্তর: φ = ৪৫° (π/৪ rad)।'
      },
      givenValues: {
        'Frequency (f)': '50 Hz',
        'Time Shift (Δt)': '2.5 ms'
      },
      finalAnswer: {
        en: 'Phase Difference φ = 45.0° (π/4 rad)',
        hi: 'फेज अंतर φ = 45.0° (π/4 rad)',
        bn: 'ফেজ পার্থক্য φ = ৪৫.০° (π/৪ rad)'
      }
    },
    {
      id: 'ex-ch5-l4-2',
      problem: {
        en: 'A 60 Hz sinusoidal AC current lags behind the applied voltage by a phase angle of φ = 60°. Determine the corresponding physical time delay (Δt) in milliseconds by which the current waveform lags behind the voltage.',
        hi: 'एक 60 Hz साइनसॉइडल एसी धारा लागू वोल्टेज से φ = 60° के फेज कोण से लैग (पीछे) करती है। मिलीसेकंड में वह भौतिक समय अंतराल (Δt) ज्ञात करें जिससे धारा वोल्टेज से पिछड़ती है।',
        bn: 'একটি ৬০ Hz সাইনুসয়েডাল এসি কারেন্ট প্রযুক্ত ভোল্টেজ অপেক্ষা φ = ৬০° ফেজ কোণে পিছিয়ে (ল্যাগ) থাকে। কারেন্ট কত মিলি সেকেন্ড সময় বিলম্বে (Δt) ভোল্টেজকে অনুসরণ করে তা নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n- Frequency f = 60 Hz\n- Phase angle φ = 60°\n\n1. Calculate Time Period T:\nT = 1 / 60 = 0.01667 s = 16.67 ms\n\n2. Time Delay Formula:\nΔt = (φ / 360°) × T\n\n3. Substitution:\nΔt = (60° / 360°) × 16.667 ms = (1 / 6) × 16.667 ms = 2.778 ms\n\nAnswer:\nThe current waveform lags behind the voltage by a time delay of Δt = 2.78 ms.',
        hi: 'दिया गया है:\n- f = 60 Hz\n- φ = 60°\n\n1. आवर्तकाल T = 1 / 60 = 16.67 ms\n2. समय अंतराल Δt = (60 / 360) × 16.67 ms = 2.78 ms\n\nउत्तर: समय विलंब Δt = 2.78 ms।',
        bn: 'প্রদত্ত:\n- f = ৬০ Hz\n- φ = ৬০°\n\n১. পর্যায়কাল T = ১ / ৬০ = ১৬.৬৭ ms\n২. সময় বিলম্ব Δt = (৬০ / ৩৬০) × ১৬.৬৭ ms = ২.৭৮ ms\n\nউত্তর: সময় বিলম্ব Δt = ২.৭৮ ms।'
      },
      givenValues: {
        'Frequency (f)': '60 Hz',
        'Phase Angle (φ)': '60°'
      },
      finalAnswer: {
        en: 'Time Delay Δt = 2.78 ms',
        hi: 'समय विलंब Δt = 2.78 ms',
        bn: 'সময় বিলম্ব Δt = ২.৭৮ ms'
      }
    },
    {
      id: 'ex-ch5-l4-3',
      problem: {
        en: 'Two alternating voltages are given by v₁(t) = 150 · sin(100πt + 30°) V and v₂(t) = 200 · sin(100πt - 45°) V. (a) State the reference waveform, (b) Find the net phase difference between v₁ and v₂, (c) Identify which waveform leads and which lags.',
        hi: 'दो प्रत्यावर्ती वोल्टेज समीकरण v₁(t) = 150 · sin(100πt + 30°) V और v₂(t) = 200 · sin(100πt - 45°) V द्वारा दिए गए हैं। (a) संदर्भ वेवफॉर्म बताएं, (b) v₁ और v₂ के बीच कुल फेज अंतर ज्ञात करें, (c) पहचानें कि कौन सी तरंग लीड कर रही है और कौन सी लैग।',
        bn: 'দুটি অল্টারনেটিং ভোল্টেজ যথাক্রমে v₁(t) = ১৫০ · sin(১০০πt + ৩০°) V এবং v₂(t) = ২০০ · sin(১০০πt - ৪৫°) V দ্বারা সংজ্ঞায়িত। (a) রেফারেন্স তরঙ্গ উল্লেখ করুন, (b) v₁ ও v₂ এর মধ্যকার মোট ফেজ পার্থক্য নির্ণয় করুন, (c) কোনটি লিডিং এবং কোনটি ল্যাগিং তা চিহ্নিত করুন।'
      },
      solution: {
        en: 'Given:\n- v₁(t) = 150 · sin(ωt + 30°) where φ₁ = +30°\n- v₂(t) = 200 · sin(ωt - 45°) where φ₂ = -45°\n- Angular frequency ω = 100π rad/s (f = 50 Hz)\n\n(a) Reference Waveform:\nThe standard reference is sin(ωt + 0°).\nRelative to reference, v₁ leads reference by 30°, while v₂ lags reference by 45°.\n\n(b) Net Phase Difference (φ):\nφ = φ₁ - φ₂ = (+30°) - (-45°) = 30° + 45° = 75°\n\n(c) Leading / Lagging Relationship:\nSince φ₁ > φ₂ (+30° > -45°):\n- Waveform v₁(t) LEADS v₂(t) by 75°.\n- Equivalently, waveform v₂(t) LAGS v₁(t) by 75°.\n\nAnswer:\nPhase difference = 75°; v₁(t) leads v₂(t) by 75°.',
        hi: 'हल:\n- φ₁ = +30°\n- φ₂ = -45°\n\n(a) संदर्भ: sin(ωt + 0°)\n(b) कुल फेज अंतर: φ = 30° - (-45°) = 75°\n(c) चूँकि +30° > -45°, अतः v₁(t), v₂(t) से 75° आगे (LEADS) है।\n\nउत्तर: फेज अंतर 75°; v₁(t) लीड करता है।',
        bn: 'সমাধান:\n- φ₁ = +৩০°\n- φ₂ = -৪৫°\n\n(a) রেফারেন্স: sin(ωt + ০°)\n(b) মোট ফেজ পার্থক্য: φ = ৩০° - (-৪৫°) = ৭৫°\n(c) যেহেতু +৩০° > -৪৫°, তাই v₁(t) তরঙ্গটি v₂(t) অপেক্ষা ৭৫° এগিয়ে (LEADS) রয়েছে।\n\nউত্তর: ফেজ পার্থক্য ৭৫°; v₁(t) লিডিং।'
      },
      givenValues: {
        'Waveform v1 Phase (φ1)': '+30°',
        'Waveform v2 Phase (φ2)': '-45°'
      },
      finalAnswer: {
        en: 'Net Phase Difference φ = 75°; v1(t) leads v2(t) by 75°',
        hi: 'कुल फेज अंतर φ = 75°; v1(t), v2(t) से 75° लीड करता है',
        bn: 'মোট ফেজ পার্থক্য φ = ৭৫°; v1(t), v2(t) অপেক্ষা ৭৫° লিড করে'
      }
    }
  ],
  practicalApplications: {
    en: [
      '3-Phase Power Distribution: Standard power systems use 120° phase-shifted voltages across three phases (R, Y, B) for smooth, balanced torque generation.',
      'AC Induction Motors: Phase differences between stator windings generate the rotating magnetic field (RMF) that drives mechanical rotation.',
      'Grid Synchronization: Before connecting a synchronous generator to the national power grid, the phase angle difference must be strictly zero (synchroscope verification).'
    ],
    hi: [
      '3-फेज विद्युत वितरण: मानक विद्युत प्रणालियाँ तीन फेजों (R, Y, B) के बीच 120° फेज-विस्थापित वोल्टेज का उपयोग करती हैं।',
      'एसी इंडक्शन मोटर: स्टेटर वाइंडिंग्स के बीच फेज अंतर घूर्णन चुंबकीय क्षेत्र (RMF) उत्पन्न करता है जो रोटर को घुमाता है।',
      'ग्रिड सिंक्रोनाइज़ेशन: सिंक्रोनस जनरेटर को ग्रिड से जोड़ने से पहले फेज अंतर शून्य होना अनिवार्य है।'
    ],
    bn: [
      '৩-ফেজ পাওয়ার বিতরণ: মানক পাওয়ার ব্যবস্থায় তিনটি ফেজের (R, Y, B) মধ্যে ১২০° ফেজ পার্থক্য ব্যবহার করে সুষম ঘূর্ণন টর্ক তৈরি করা হয়।',
      'এসি ইনডাকশন মোটর: স্টেটরের উইন্ডিংসমূহের মধ্যকার ফেজ পার্থক্য ঘূর্ণায়মান চৌম্বক ক্ষেত্র (RMF) সৃষ্টি করে।',
      'গ্রিড সিঙ্ক্রোনাইজেশন: জেনারেটরকে গ্রিডে যুক্ত করার পূর্বে ফেজ পার্থক্য নিখুঁতভাবে শূন্য (০°) হতে হয়।'
    ]
  },
  importantPoints: {
    en: [
      'Phase angle φ dictates the exact point in the AC cycle where the waveform crosses zero at t = 0.',
      'A positive phase angle (+φ) indicates a leading waveform (reaches peak earlier), while a negative phase angle (-φ) indicates a lagging waveform.',
      'Phase difference φ translates directly into time displacement via Δt = (φ / 360°) × T = φ / (2πf).',
      'Phasors rotate counter-clockwise (CCW); their vertical projections map directly to instantaneous time-domain values.'
    ],
    hi: [
      'फेज कोण φ यह निर्धारित करता है कि t = 0 पर वेवफॉर्म किस चक्र बिंदु पर शून्य को पार करता है।',
      'धनात्मक कोण (+φ) लीडिंग तरंग दर्शाता है (शिखर पहले आता है), जबकि ऋणात्मक कोण (-φ) लैगिंग तरंग दर्शाता है।',
      'फेज अंतर सीधे समय अंतराल में बदलता है: Δt = (φ / 360°) × T = φ / (2πf)।',
      'फेजर वामावर्त (CCW) घूमते हैं; उनका ऊर्ध्वाधर प्रक्षेप तात्कालिक समय-डोमेन मान प्रदान करता है।'
    ],
    bn: [
      'ফেজ কোণ φ নির্ধারণ করে t = ০ মুহূর্তে তরঙ্গটি তার চক্রের কোন বিন্দুতে অবস্থিত।',
      'পজিটিভ কোণ (+φ) লিডিং তরঙ্গ নির্দেশ করে, আর নেগেটিভ কোণ (-φ) ল্যাগিং তরঙ্গ নির্দেশ করে।',
      'ফেজ পার্থক্য সরাসরি সময় ব্যবধানে রূপান্তরযোগ্য: Δt = (φ / ৩৬০°) × T = φ / (২πf)।',
      'ফেজর ঘড়ির কাঁটার বিপরীতে (CCW) ঘোরে; এর উলম্ব প্রক্ষেপ তাৎক্ষণিক মানের সমান।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing leading vs lagging: If φ is positive (+φ), it LEADS (waveform shifts LEFT on time axis, reaching peak earlier).',
      'Calculating phase difference between waveforms of DIFFERENT frequencies: Phase difference is mathematically defined ONLY for waves of identical frequency.',
      'Dividing degrees by radians: Ensure units are consistent when calculating Δt (use 360° for degrees or 2π for radians).'
    ],
    hi: [
      'लीडिंग और लैगिंग में भ्रम: यदि φ धनात्मक (+φ) है, तो यह लीड करता है (वेवफॉर्म समय अक्ष पर बाईं ओर खिसकता है)।',
      'भिन्न आवृत्तियों की तरंगों के बीच फेज अंतर निकालना: फेज अंतर केवल समान आवृत्ति वाली तरंगों के लिए ही मान्य है।',
      'डिग्री और रेडियन को मिलाना: Δt की गणना करते समय डिग्री के लिए 360° और रेडियन के लिए 2π का उपयोग करें।'
    ],
    bn: [
      'লিডিং ও ল্যাগিং গুলিয়ে ফেলা: φ পজিটিভ (+φ) হলে তা লিড করে (তরঙ্গটি সময় অক্ষে বামে সরে যায় ও আগে শিখরে পৌঁছায়)।',
      'ভিন্ন ফ্রিকোয়েন্সির তরঙ্গের মধ্যে ফেজ পার্থক্য হিসাব করা: ফেজ পার্থক্য কেবল একই ফ্রিকোয়েন্সির তরঙ্গের জন্যই সংজ্ঞায়িত।',
      'ডিগ্রি ও রেডিয়ান গুলিয়ে ফেলা: Δt হিসাবের সময় এককের সামঞ্জস্য রাখুন (ডিগ্রির জন্য ৩৬০° এবং রেডিয়ানের জন্য ২π)।'
    ]
  },
  mcqs: [
    {
      id: 'quiz-ch5-l4-1',
      question: {
        en: 'If two alternating voltages of the same frequency reach their positive peak values at the exact same instant in time, their phase difference is:',
        hi: 'यदि समान आवृत्ति के दो प्रत्यावर्ती वोल्टेज ठीक एक ही समय पर अपने धनात्मक शिखर मान पर पहुँचते हैं, तो उनका फेज अंतर क्या है?',
        bn: 'যদি একই কম্পাঙ্কের দুটি এসি ভোল্টেজ ঠিক একই মুহূর্তে তাদের পজিটিভ পিক মানে পৌঁছায়, তবে তাদের ফেজ পার্থক্য কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '0° (Strictly In-Phase)', hi: '0° (पूर्णतः समान फेज / इन-फेज)', bn: '০° (সম্পূর্ণ ইন-ফেজ)' } },
        { id: 'opt-b', text: { en: '90° (In Quadrature)', hi: '90° (क्वाड्रैचर में)', bn: '৯০° (কোয়াড্রেচার)' } },
        { id: 'opt-c', text: { en: '180° (Antiphase)', hi: '180° (विपरीत फेज)', bn: '১৮০° (অ্যান্টিফেজ)' } },
        { id: 'opt-d', text: { en: '360° (Indeterminate)', hi: '360° (अनिर्धार्य)', bn: '৩৬০° (অনির্দিষ্ট)' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'When waveforms reach their peak values and zero crossings simultaneously, the phase difference is φ = 0° (in-phase).',
        hi: 'जब तरंगें एक साथ अपने शिखर और शून्य मान पर पहुँचती हैं, तो फेज अंतर φ = 0° होता है।',
        bn: 'যখন তরঙ্গদ্বয় একই সাথে তাদের পিক ও শূন্য মানে পৌঁছায়, তখন ফেজ পার্থক্য φ = ০° (ইন-ফেজ)।'
      }
    },
    {
      id: 'quiz-ch5-l4-2',
      question: {
        en: 'In a 50 Hz AC power system, a phase angle difference of 90° between voltage and current corresponds to a physical time difference of:',
        hi: '50 Hz एसी पावर सिस्टम में वोल्टेज और धारा के बीच 90° का फेज अंतर कितने समय अंतराल के बराबर है?',
        bn: 'একটি ৫০ Hz এসি বিদ্যুৎ ব্যবস্থায় ভোল্টেজ ও কারেন্টের মধ্যকার ৯০° ফেজ পার্থক্য কত বাস্তব সময়ের পার্থক্যের সমান?'
      },
      options: [
        { id: 'opt-a', text: { en: '2.5 ms', hi: '2.5 ms', bn: '২.৫ ms' } },
        { id: 'opt-b', text: { en: '5.0 ms', hi: '5.0 ms', bn: '৫.০ ms' } },
        { id: 'opt-c', text: { en: '10.0 ms', hi: '10.0 ms', bn: '১০.০ ms' } },
        { id: 'opt-d', text: { en: '20.0 ms', hi: '20.0 ms', bn: '২০.০ ms' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'At 50 Hz, period T = 1/50 = 20 ms. Time difference Δt = (90° / 360°) × 20 ms = 0.25 × 20 ms = 5.0 ms.',
        hi: '50 Hz पर आवर्तकाल T = 20 ms। समय अंतर Δt = (90/360) × 20 = 5.0 ms।',
        bn: '৫০ Hz এ পর্যায়কাল T = ২০ ms। সময় ব্যবধান Δt = (৯০/৩৬০) × ২০ = ৫.০ ms।'
      }
    },
    {
      id: 'quiz-ch5-l4-3',
      question: {
        en: 'Given v(t) = 100 · sin(ωt - 30°) and i(t) = 10 · sin(ωt + 60°), which of the following statements is true?',
        hi: 'यदि v(t) = 100 · sin(ωt - 30°) और i(t) = 10 · sin(ωt + 60°) दिया गया है, तो कौन सा कथन सत्य है?',
        bn: 'যদি v(t) = ১০০ · sin(ωt - ৩০°) এবং i(t) = ১০ · sin(ωt + ৬০°) হয়, তবে নিচের কোনটি সত্য?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Current i(t) leads voltage v(t) by 90°', hi: 'धारा i(t), वोल्टेज v(t) से 90° आगे (लीड) है', bn: 'কারেন্ট i(t) ভোল্টেজ v(t) অপেক্ষা ৯০° এগিয়ে (লিড) রয়েছে' } },
        { id: 'opt-b', text: { en: 'Voltage v(t) leads current i(t) by 90°', hi: 'वोल्टेज v(t), धारा i(t) से 90° आगे है', bn: 'ভোল্টেজ v(t) কারেন্ট i(t) অপেক্ষা ৯০° এগিয়ে রয়েছে' } },
        { id: 'opt-c', text: { en: 'Current i(t) lags voltage v(t) by 30°', hi: 'धारा i(t), वोल्टेज से 30° लैग करती है', bn: 'কারেন্ট i(t) ভোল্টেজ অপেক্ষা ৩০° ল্যাগ করে' } },
        { id: 'opt-d', text: { en: 'Voltage and current are in-phase', hi: 'वोल्टेज और धारा समान फेज में हैं', bn: 'ভোল্টেজ ও কারেন্ট ইন-ফেজে রয়েছে' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Phase difference φ = φ_i - φ_v = (+60°) - (-30°) = +90°. Hence, current leads voltage by 90° (quadrature lead).',
        hi: 'फेज अंतर φ = (+60°) - (-30°) = +90°। अतः धारा वोल्टेज से 90° आगे (लीड) है।',
        bn: 'ফেজ পার্থক্য φ = (+৬০°) - (-৩০°) = +৯০°। সুতরাং কারেন্ট ভোল্টেজ অপেক্ষা ৯০° এগিয়ে (লিড) রয়েছে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch5-l4-1',
      question: {
        en: 'Two alternating currents are described by i₁(t) = 14.14 · sin(314t + 45°) A and i₂(t) = 7.07 · sin(314t - 15°) A. Calculate: (a) Supply frequency f, (b) Phase difference between i₁ and i₂, (c) Time shift Δt between their positive peaks.',
        hi: 'दो प्रत्यावर्ती धाराएँ i₁(t) = 14.14 · sin(314t + 45°) A और i₂(t) = 7.07 · sin(314t - 15°) A द्वारा व्यक्त हैं। गणना करें: (a) आपूर्ति आवृत्ति f, (b) i₁ और i₂ के बीच फेज अंतर, (c) उनके धनात्मक शिखरों के बीच समय अंतराल Δt।',
        bn: 'দুটি অল্টারনেটিং কারেন্ট i₁(t) = ১৪.১৪ · sin(৩১৪t + ৪৫°) A এবং i₂(t) = ৭.০৭ · sin(৩১৪t - ১৫°) A দ্বারা সংজ্ঞায়িত। নির্ণয় করুন: (a) সরবরাহ কম্পাঙ্ক f, (b) i₁ ও i₂ এর মধ্যকার ফেজ পার্থক্য, (c) তাদের পজিটিভ পিকের মধ্যবর্তী সময় পার্থক্য Δt।'
      },
      hint: {
        en: 'ω = 314 rad/s → f = ω / (2π). Net phase φ = 45° - (-15°). Time delay Δt = (φ / 360°) × (1 / f).',
        hi: 'ω = 314 rad/s से f = 314 / 2π = 50 Hz। φ = 45 - (-15) = 60°। Δt = (60/360) × (1/50)।',
        bn: 'ω = ৩১৪ rad/s থেকে f = ৩১৪ / (২π) = ৫০ Hz। মোট ফেজ φ = ৪৫° - (-১৫°) = ৬০°। Δt = (৬০/৩৬০) × (১/৫০)।'
      },
      answerKey: {
        en: '(a) Frequency f = ω / 2π = 314 / (2 × 3.1416) = 50.0 Hz.\n(b) Phase difference φ = (+45°) - (-15°) = 60.0° (i₁ leads i₂ by 60°).\n(c) Period T = 1 / 50 = 20.0 ms. Time shift Δt = (60° / 360°) × 20 ms = 3.33 ms.',
        hi: '(a) आवृत्ति f = 50.0 Hz।\n(b) फेज अंतर φ = 60.0° (i₁ लीड करता है)।\n(c) समय अंतराल Δt = (60/360) × 20 = 3.33 ms।',
        bn: '(a) ফ্রিকোয়েন্সি f = ৫০.০ Hz।\n(b) ফেজ পার্থক্য φ = ৬০.০° (i₁ এগিয়ে রয়েছে)।\n(c) সময় ব্যবধান Δt = (৬০/৩৬০) × ২০ = ৩.৩৩ ms।'
      }
    }
  ]
};

export const LESSON_COMPLEX_NUMBERS: Lesson = {
  id: 'lsn-ch5-complex-numbers',
  topicId: 'ch5-complex-numbers',
  order: 5,
  title: {
    en: 'Complex Numbers & Rectangular/Polar Form',
    hi: 'सम्मिश्र संख्याएँ एवं आयताकार/ध्रुवीय रूप',
    bn: 'জটিল সংখ্যা এবং রেকট্যাঙ্গুলার ও পোলার রূপ'
  },
  easyExplanation: {
    en: 'Complex numbers provide an indispensable mathematical framework in AC electrical engineering, enabling engineers to combine resistance and reactance into a single impedance entity and transform complex differential calculus into simple algebraic calculations.',
    hi: 'सम्मिश्र संख्याएँ एसी इलेक्ट्रिकल इंजीनियरिंग में एक अनिवार्य गणितीय ढाँचा प्रदान करती हैं, जिससे प्रतिरोध और प्रतिघात को एक ही प्रतिबाधा (इम्पीडेंस) में संयोजित करके कलन की जगह साधारण बीजगणित का उपयोग किया जा सकता है।',
    bn: 'জটিল সংখ্যা (Complex Numbers) এসি ইঞ্জিনিয়ারিংয়ের একটি অপরিহার্য ভিত্তি, যা রোধ ও রিয়্যাক্ট্যান্সকে একত্রিত করে একটি সামগ্রিক ইম্পিডেন্স গঠন করতে এবং জটিল ক্যালকুলাসের পরিবর্তে সহজ বীজগণিত ব্যবহারে সহায়তা করে।'
  },
  detailedExplanation: {
    en: '1. Why Complex Numbers in AC Analysis?\nIn AC circuits, voltages and currents oscillate at angular frequency ω with both magnitude and phase angle. Instead of solving trigonometric differential equations (Kirchhoff\'s integro-differential equations), Steinmetz introduced complex phasors and impedance vectors: Z = R + jX.\n\n2. The Engineering Operator j:\nIn electrical engineering, the letter "j" is strictly used instead of "i" (to avoid confusion with instantaneous electric current i):\n- j = √(-1)\n- j² = -1\n- j³ = -j\n- j⁴ = +1\n- 1 / j = -j (multiplying by -j rotates a phasor 90° clockwise; multiplying by +j rotates 90° counter-clockwise).\n\n3. Rectangular Form (Cartesian):\nZ = a + jb\n- a = Real Part (represents resistance R in ohms or in-phase active component).\n- b = Imaginary Part (represents net reactance X = XL - XC in ohms or quadrature reactive component).\n\n4. Polar Form (Trigonometric / Exponential):\nZ = |Z| ∠ θ = |Z| · e^(jθ) = |Z|(cos θ + j sin θ)\n- |Z| = Magnitude / Modulus: |Z| = √(a² + b²)\n- θ = Phase Angle / Argument: θ = tan⁻¹(b / a) in radians or degrees.\n\n5. Quadrant Rules for Angle θ = atan2(b, a):\n- Quadrant I (a > 0, b > 0): θ = tan⁻¹(b/a) [0° to +90°, Inductive Load]\n- Quadrant II (a < 0, b > 0): θ = 180° - tan⁻¹(|b/a|) [+90° to +180°]\n- Quadrant III (a < 0, b < 0): θ = -180° + tan⁻¹(|b/a|) [-180° to -90°]\n- Quadrant IV (a > 0, b < 0): θ = -tan⁻¹(|b|/a) [-90° to 0°, Capacitive Load]\n\n6. Coordinate Conversions:\n- Rectangular to Polar: |Z| = √(a² + b²), θ = tan⁻¹(b / a)\n- Polar to Rectangular: a = |Z| · cos θ, b = |Z| · sin θ\n\n7. Fundamental Complex Arithmetic in AC Circuits:\n- Addition (Prefer Rectangular): Z₁ + Z₂ = (a₁ + a₂) + j(b₁ + b₂)\n- Subtraction (Prefer Rectangular): Z₁ - Z₂ = (a₁ - a₂) + j(b₁ - b₂)\n- Multiplication (Prefer Polar): Z₁ × Z₂ = (|Z₁| · |Z₂|) ∠ (θ₁ + θ₂)\n- Division (Prefer Polar): Z₁ / Z₂ = (|Z₁| / |Z₂|) ∠ (θ₁ - θ₂)\n\n8. Complex Conjugate (Z*):\nIf Z = a + jb = |Z| ∠ θ, its complex conjugate is Z* = a - jb = |Z| ∠ -θ.\nKey property: Z · Z* = a² + b² = |Z|² (purely real quantity).\n\n9. AC Ohm\'s Law and Impedance Application:\nV = I · Z   |   I = V / Z   |   Z = V / I',
    hi: '1. एसी विश्लेषण में सम्मिश्र संख्याएँ क्यों?\nएसी परिपथों में परिमाण और फेज दोनों होते हैं। स्टेनमेट्ज़ ने फेजर और प्रतिबाधा (Z = R + jX) के लिए सम्मिश्र संख्याओं का प्रयोग प्रस्तुत किया।\n\n2. इंजीनियरिंग ऑपरेटर j:\nधारा i से भ्रम से बचने के लिए इलेक्ट्रिकल में j का उपयोग करते हैं:\n- j = √(-1)\n- j² = -1, 1/j = -j।\n\n3. आयताकार रूप (Rectangular Form):\nZ = a + jb (a = वास्तविक भाग/प्रतिरोध R, b = काल्पनिक भाग/प्रतिघात X)।\n\n4. ध्रुवीय रूप (Polar Form):\nZ = |Z| ∠ θ, जहाँ |Z| = √(a² + b²) और θ = tan⁻¹(b/a)।\n\n5. रूपांतरण:\n- आयताकार से ध्रुवीय: |Z| = √(a² + b²), θ = tan⁻¹(b/a)\n- ध्रुवीय से आयताकार: a = |Z| cos θ, b = |Z| sin θ।\n\n6. अंकगणितीय नियम:\n- योग एवं घटाव: आयताकार रूप सर्वोत्तम है: (a₁±a₂) + j(b₁±b₂)।\n- गुणा एवं भाग: ध्रुवीय रूप सर्वोत्तम है: (|Z₁||Z₂|) ∠ (θ₁+θ₂) एवं (|Z₁|/|Z₂|) ∠ (θ₁-θ₂)।\n\n7. सम्मिश्र संयुग्मी (Conjugate):\nZ = a + jb का संयुग्मी Z* = a - jb = |Z| ∠ -θ होता है।',
    bn: '১. এসি বিশ্লেষণে জটিল সংখ্যার প্রয়োজনীয়তা:\nএসি সার্কিটে ভোল্টেজ ও কারেন্টের মান এবং ফেজ উভয়ই থাকে। ডিফারেনশিয়াল সমীকরণের সমাধানের পরিবর্তে স্টেইনমেটজ ফেজর ও ইম্পিডেন্স ভেক্টরের (Z = R + jX) জন্য জটিল সংখ্যা ব্যবহারের সূচনা করেন।\n\n২. ইঞ্জিনিয়ারিং অপারেটর j:\nতড়িৎ প্রবাহ i এর সাথে বিভ্রান্তি এড়াতে j ব্যবহৃত হয়:\n- j = √(-1)\n- j² = -1, 1/j = -j।\n\n৩. রেকট্যাঙ্গুলার রূপ (Rectangular Form):\nZ = a + jb (a = বাস্তব অংশ/রোধ R, b = কাল্পনিক অংশ/রিয়্যাক্ট্যান্স X)।\n\n৪. পোলার রূপ (Polar Form):\nZ = |Z| ∠ θ, যেখানে |Z| = √(a² + b²) এবং θ = tan⁻¹(b/a)।\n\n৫. রূপান্তর:\n- রেকট্যাঙ্গুলার থেকে পোলার: |Z| = √(a² + b²), θ = tan⁻¹(b/a)\n- পোলার থেকে রেকট্যাঙ্গুলার: a = |Z| cos θ, b = |Z| sin θ।\n\n৬. গাণিতিক অপারেশন:\n- যোগ ও বিয়োগ: রেকট্যাঙ্গুলার রূপ সুবিধাজনক: (a₁±a₂) + j(b₁±b₂)।\n- গুণ ও ভাগ: পোলার রূপ সুবিধাজনক: (|Z₁||Z₂|) ∠ (θ₁+θ₂) এবং (|Z₁|/|Z₂|) ∠ (θ₁-θ₂)।\n\n৭. জটিল অনুবন্ধী (Conjugate):\nZ = a + jb এর অনুবন্ধী Z* = a - jb = |Z| ∠ -θ।'
  },
  formulas: [
    {
      symbol: '|Z|',
      expression: '|Z| = \\sqrt{a^2 + b^2}',
      description: {
        en: 'Magnitude (modulus) of complex impedance vector Z = a + jb',
        hi: 'सम्मिश्र प्रतिबाधा वेक्टर Z = a + jb का परिमाण',
        bn: 'জটিল ইম্পিডেন্স ভেক্টর Z = a + jb এর পরম মান'
      }
    },
    {
      symbol: 'θ',
      expression: '\\theta = \\tan^{-1}\\left(\\frac{b}{a}\\right)',
      description: {
        en: 'Phase angle argument of complex number in degrees or radians',
        hi: 'डिग्री या रेडियन में सम्मिश्र संख्या का फेज कोण',
        bn: 'ডিগ্রি বা রেডিয়ানে জটিল সংখ্যার ফেজ কোণ'
      }
    },
    {
      symbol: 'Z_{rect}',
      expression: 'a = |Z|\\cos\\theta, \\quad b = |Z|\\sin\\theta',
      description: {
        en: 'Polar to rectangular component conversion equations',
        hi: 'ध्रुवीय से आयताकार घटक रूपांतरण समीकरण',
        bn: 'পোলার থেকে রেকট্যাঙ্গুলার রূপান্তরের সমীকরণ'
      }
    },
    {
      symbol: 'Z_1 \\times Z_2',
      expression: 'Z_1 \\cdot Z_2 = (|Z_1|\\cdot|Z_2|) \\angle (\\theta_1 + \\theta_2)',
      description: {
        en: 'Complex multiplication in polar coordinate form',
        hi: 'ध्रुवीय रूप में सम्मिश्र गुणन',
        bn: 'পোলার পদ্ধতিতে জটিল সংখ্যার গুণফল'
      }
    },
    {
      symbol: 'Z_1 / Z_2',
      expression: '\\frac{Z_1}{Z_2} = \\left(\\frac{|Z_1|}{|Z_2|}\\right) \\angle (\\theta_1 - \\theta_2)',
      description: {
        en: 'Complex division in polar coordinate form',
        hi: 'ध्रुवीय रूप में सम्मिश्र भाग',
        bn: 'পোলার পদ্ধতিতে জটিল সংখ্যার ভাগফল'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ch5-complex-plane',
      title: {
        en: 'Argand Diagram of Complex Impedance Vector (Rectangular and Polar Representations)',
        hi: 'सम्मिश्र प्रतिबाधा वेक्टर का अर्गैंड आरेख (आयताकार एवं ध्रुवीय निरूपण)',
        bn: 'জটিল ইম্পিডেন্স ভেক্টরের আর্গান্ড চিত্র (রেকট্যাঙ্গুলার ও পোলার প্রকাশ)'
      },
      caption: {
        en: 'Geometric visualization of real component (a = |Z|cosθ) along the horizontal axis, imaginary reactance (b = |Z|sinθ) along the vertical j-axis, and resultant polar vector Z = |Z| ∠ θ.',
        hi: 'क्षैतिज अक्ष पर वास्तविक घटक a = |Z|cosθ, ऊर्ध्वाधर j-अक्ष पर काल्पनिक प्रतिघात b = |Z|sinθ और परिणामी ध्रुवीय वेक्टर Z = |Z| ∠ θ का ज्यामितीय दृश्य।',
        bn: 'অনুভূমিক অক্ষে বাস্তব অংশ a = |Z|cosθ, উলম্ব j-অক্ষে কাল্পনিক অংশ b = |Z|sinθ এবং লব্ধি পোলার ভেক্টর Z = |Z| ∠ θ এর জ্যামিতিক রূপ।'
      },
      svgType: 'circuit-complex-plane'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch5-l5-1',
      problem: {
        en: 'Convert the following complex electrical impedances from rectangular to polar form: (a) Z₁ = 6 + j8 Ω, (b) Z₂ = 12 - j5 Ω.',
        hi: 'निम्नलिखित सम्मिश्र विद्युत प्रतिबाधाओं को आयताकार से ध्रुवीय रूप में बदलें: (a) Z₁ = 6 + j8 Ω, (b) Z₂ = 12 - j5 Ω।',
        bn: 'নিচের জটিল ইম্পিডেন্সগুলোকে রেকট্যাঙ্গুলার থেকে পোলার রূপে রূপান্তর করুন: (a) Z₁ = ৬ + j৮ Ω, (b) Z₂ = ১২ - j৫ Ω।'
      },
      solution: {
        en: 'Part (a): Z₁ = 6 + j8 Ω (Quadrant I, Inductive)\n1. Magnitude: |Z₁| = √(6² + 8²) = √(36 + 64) = √100 = 10.0 Ω\n2. Angle: θ₁ = tan⁻¹(8 / 6) = tan⁻¹(1.3333) = 53.13°\nPolar Form: Z₁ = 10.0 ∠ 53.13° Ω\n\nPart (b): Z₂ = 12 - j5 Ω (Quadrant IV, Capacitive)\n1. Magnitude: |Z₂| = √(12² + (-5)²) = √(144 + 25) = √169 = 13.0 Ω\n2. Angle: θ₂ = tan⁻¹(-5 / 12) = tan⁻¹(-0.4167) = -22.62°\nPolar Form: Z₂ = 13.0 ∠ -22.62° Ω\n\nAnswer:\nZ₁ = 10.0 ∠ 53.13° Ω, Z₂ = 13.0 ∠ -22.62° Ω.',
        hi: 'हल:\n(a) Z₁ = 6 + j8 Ω:\n|Z₁| = √(36 + 64) = 10 Ω\nθ₁ = tan⁻¹(8/6) = 53.13°\nध्रुवीय रूप: Z₁ = 10 ∠ 53.13° Ω\n\n(b) Z₂ = 12 - j5 Ω:\n|Z₂| = √(144 + 25) = 13 Ω\nθ₂ = tan⁻¹(-5/12) = -22.62°\nध्रुवीय रूप: Z₂ = 13 ∠ -22.62° Ω।',
        bn: 'সমাধান:\n(a) Z₁ = ৬ + j৮ Ω:\n|Z₁| = √(৩৬ + ৬৪) = ১০ Ω\nθ₁ = tan⁻¹(৮/৬) = ৫৩.১৩°\nপোলার রূপ: Z₁ = ১০ ∠ ৫৩.১৩° Ω\n\n(b) Z₂ = ১২ - j৫ Ω:\n|Z₂| = √(১৪৪ + ২৫) = ১৩ Ω\nθ₂ = tan⁻¹(-৫/১২) = -২২.৬২°\nপোলার রূপ: Z₂ = ১৩ ∠ -২২.৬২° Ω।'
      },
      givenValues: {
        'Impedance Z1': '6 + j8 Ω',
        'Impedance Z2': '12 - j5 Ω'
      },
      finalAnswer: {
        en: 'Z1 = 10.0 ∠ 53.13° Ω and Z2 = 13.0 ∠ -22.62° Ω',
        hi: 'Z1 = 10.0 ∠ 53.13° Ω एवं Z2 = 13.0 ∠ -22.62° Ω',
        bn: 'Z1 = ১০.০ ∠ ৫৩.১৩° Ω এবং Z2 = ১৩.০ ∠ -২২.৬২° Ω'
      }
    },
    {
      id: 'ex-ch5-l5-2',
      problem: {
        en: 'Convert the AC voltage phasor V = 230 ∠ 30° V into its equivalent rectangular form a + jb.',
        hi: 'एसी वोल्टेज फेजर V = 230 ∠ 30° V को इसके समतुल्य आयताकार रूप a + jb में बदलें।',
        bn: 'এসি ভোল্টেজ ফেজর V = ২৩০ ∠ ৩০° V কে এর সমতুল্য রেকট্যাঙ্গুলার রূপ a + jb তে রূপান্তর করুন।'
      },
      solution: {
        en: 'Given:\n- Magnitude |V| = 230 V\n- Phase angle θ = 30°\n\n1. Real Part (a):\na = |V| · cos θ = 230 · cos(30°) = 230 × 0.8660 = 199.19 V\n\n2. Imaginary Part (b):\nb = |V| · sin θ = 230 · sin(30°) = 230 × 0.5000 = 115.00 V\n\n3. Rectangular Form:\nV = 199.19 + j115.00 V\n\nAnswer:\nV = 199.19 + j115.0 V.',
        hi: 'दिया गया है:\n- |V| = 230 V, θ = 30°\n\n1. वास्तविक भाग a = 230 × cos(30°) = 230 × 0.8660 = 199.19 V\n2. काल्पनिक भाग b = 230 × sin(30°) = 230 × 0.5 = 115.0 V\n\nआयताकार रूप: V = 199.19 + j115.0 V।',
        bn: 'প্রদত্ত:\n- |V| = ২৩০ V, θ = ৩০°\n\n১. বাস্তব অংশ a = ২৩০ × cos(৩০°) = ২৩০ × ০.৮৬৬০ = ১৯৯.১৯ V\n২. কাল্পনিক অংশ b = ২৩০ × sin(৩০°) = ২৩০ × ০.৫ = ১১৫.০ V\n\nরেকট্যাঙ্গুলার রূপ: V = ১৯৯.১৯ + j১১৫.০ V।'
      },
      givenValues: {
        'Voltage Phasor |V|': '230 V',
        'Phase Angle θ': '30°'
      },
      finalAnswer: {
        en: 'V = 199.19 + j115.00 V',
        hi: 'V = 199.19 + j115.00 V',
        bn: 'V = ১৯৯.১৯ + j১১৫.০০ V'
      }
    },
    {
      id: 'ex-ch5-l5-3',
      problem: {
        en: 'An alternating sinusoidal voltage V = 100 ∠ 45° V is applied across an impedance Z = 20 ∠ 15° Ω. Calculate the resulting current phasor I in polar form, and convert the result into rectangular form.',
        hi: 'एक प्रत्यावर्ती वोल्टेज V = 100 ∠ 45° V को प्रतिबाधा Z = 20 ∠ 15° Ω पर लगाया गया है। ध्रुवीय रूप में परिणामी धारा फेजर I की गणना करें, और परिणाम को आयताकार रूप में बदलें।',
        bn: 'একটি অল্টারনেটিং ভোল্টেজ V = ১০০ ∠ ৪৫° V একটি ইম্পিডেন্স Z = ২০ ∠ ১৫° Ω এর আড়াআড়িতে প্রযুক্ত হলো। পোলার রূপে কারেন্ট ফেজর I নির্ণয় করুন এবং ফলাফলকে রেকট্যাঙ্গুলার রূপে রূপান্তর করুন।'
      },
      solution: {
        en: 'Given:\n- Voltage V = 100 ∠ 45° V\n- Impedance Z = 20 ∠ 15° Ω\n\n1. Complex Division for Current Phasor:\nI = V / Z = (100 ∠ 45°) / (20 ∠ 15°)\n\n2. Polar Division Law:\nMagnitude: |I| = |V| / |Z| = 100 / 20 = 5.0 A\nAngle: θ_I = θ_V - θ_Z = 45° - 15° = 30°\n\nPolar Current:\nI = 5.0 ∠ 30° A\n\n3. Convert to Rectangular Form:\nReal Part: a = 5 · cos(30°) = 5 × 0.8660 = 4.33 A\nImaginary Part: b = 5 · sin(30°) = 5 × 0.5000 = 2.50 A\nI = 4.33 + j2.50 A\n\nAnswer:\nI = 5.0 ∠ 30° A = 4.33 + j2.50 A.',
        hi: 'हल:\n1. ध्रुवीय भाग नियम: I = V / Z = (100 / 20) ∠ (45° - 15°) = 5.0 ∠ 30° A\n2. आयताकार रूपांतरण:\na = 5 × cos(30°) = 4.33 A\nb = 5 × sin(30°) = 2.50 A\nI = 4.33 + j2.50 A।\n\nउत्तर: I = 5.0 ∠ 30° A (4.33 + j2.50 A)।',
        bn: 'সমাধান:\n১. পোলার ভাগের সূত্র: I = V / Z = (১০০ / ২০) ∠ (৪৫° - ১৫°) = ৫.০ ∠ ৩০° A\n২. রেকট্যাঙ্গুলার রূপান্তর:\na = ৫ × cos(৩০°) = ৪.৩৩ A\nb = ৫ × sin(৩০°) = ২.৫০ A\nI = ৪.৩৩ + j২.৫০ A।\n\nউত্তর: I = ৫.০ ∠ ৩০° A (৪.৩৩ + j২.৫০ A)।'
      },
      givenValues: {
        'Voltage (V)': '100 ∠ 45° V',
        'Impedance (Z)': '20 ∠ 15° Ω'
      },
      finalAnswer: {
        en: 'I = 5.0 ∠ 30° A (4.33 + j2.50 A)',
        hi: 'I = 5.0 ∠ 30° A (4.33 + j2.50 A)',
        bn: 'I = ৫.০ ∠ ৩০° A (৪.৩৩ + j২.৫০ A)'
      }
    }
  ],
  practicalApplications: {
    en: [
      'AC Impedance Analysis: Complex notation Z = R + jX allows engineers to apply Ohm’s Law and Kirchhoff’s Laws to AC circuits using standard algebraic techniques.',
      'Power System Load Flow: Transmission lines, transformers, and industrial loads are modeled as complex admittances (Y = G + jB) in power grid solvers.',
      'Filter and RF Design: Complex poles and zeroes in the s-plane determine frequency response, resonance, and cutoff frequencies for analog filters.'
    ],
    hi: [
      'एसी प्रतिबाधा विश्लेषण: सम्मिश्र संकेतन Z = R + jX इंजीनियरों को सामान्य बीजगणितीय विधियों से एसी परिपथों में ओम व किरचॉफ के नियम लागू करने की अनुमति देता है।',
      'विद्युत प्रणाली लोड फ्लो: ट्रांसमिशन लाइन और ट्रांसफॉर्मर को पावर ग्रिड सॉल्वर्स में सम्मिश्र एडमिटेंस (Y = G + jB) के रूप में मॉडल किया जाता है।',
      'फिल्टर और आरएफ डिज़ाइन: s-समतल में सम्मिश्र पोल्स और ज़ीरोज़ एनालॉग फिल्टर की आवृत्ति प्रतिक्रिया और कटऑफ आवृत्ति निर्धारित करते हैं।'
    ],
    bn: [
      'এসি ইম্পিডেন্স বিশ্লেষণ: জটিল স্বরলিপি Z = R + jX ব্যবহার করে এসি সার্কিটে সহজে ওহম ও কার্শফের সূত্র প্রয়োগ করা যায়।',
      'পাওয়ার সিস্টেম লোড ফ্লো: গ্রিড সিমুলেশনে সঞ্চালন লাইন ও ট্রান্সফরমারকে জটিল অ্যাডমিট্যান্স (Y = G + jB) হিসেবে মডেল করা হয়।',
      'ফিল্টার ও আরএফ ডিজাইন: s-তলে জটিল পোল এবং জিরো অ্যানালগ ফিল্টারের ফ্রিকোয়েন্সি প্রতিক্রিয়া ও কাট-অফ ফ্রিকোয়েন্সি নির্ধারণ করে।'
    ]
  },
  importantPoints: {
    en: [
      'The operator j = √(-1) denotes a +90° counter-clockwise rotation in the complex plane, while 1/j = -j denotes a -90° clockwise rotation.',
      'Addition and subtraction are vastly easier in Rectangular form: Z₁ ± Z₂ = (a₁ ± a₂) + j(b₁ ± b₂).',
      'Multiplication and division are vastly easier in Polar form: multiply/divide magnitudes and add/subtract angles.',
      'Multiplying a complex number by its conjugate Z · Z* yields the squared real magnitude |Z|² = a² + b².'
    ],
    hi: [
      'ऑपरेटर j = √(-1) सम्मिश्र तल में +90° वामावर्त घूर्णन को दर्शाता है, जबकि 1/j = -j -90° दक्षिणावर्त घूर्णन को दर्शाता है।',
      'योग और घटाव आयताकार रूप में बहुत आसान हैं: Z₁ ± Z₂ = (a₁ ± a₂) + j(b₁ ± b₂)।',
      'गुणा और भाग ध्रुवीय रूप में बहुत सरल होते हैं: परिमाणों का गुणा/भाग और कोणों का योग/घटाव करें।',
      'किसी सम्मिश्र संख्या को उसके संयुग्मी से गुणा करने पर वास्तविक वर्ग परिमाण |Z|² = a² + b² प्राप्त होता है।'
    ],
    bn: [
      'অপারেটর j = √(-১) জটিল তলে +৯০° ঘড়ির কাঁটার বিপরীতে ঘূর্ণন নির্দেশ করে, এবং ১/j = -j -৯০° ঘড়ির কাঁটার দিকে ঘূর্ণন নির্দেশ করে।',
      'যোগ ও বিয়োগের ক্ষেত্রে রেকট্যাঙ্গুলার রূপ অত্যন্ত সুবিধাজনক: Z₁ ± Z₂ = (a₁ ± a₂) + j(b₁ ± b₂)।',
      'গুণ ও ভাগের ক্ষেত্রে পোলার রূপ সর্বোত্তম: মানসমূহ গুণ/ভাগ হয় এবং কোণসমূহ যোগ/বিয়োগ হয়।',
      'যেকোনো জটিল সংখ্যাকে তার অনুবন্ধী দিয়ে গুণ করলে বাস্তব মানের বর্গ |Z|² = a² + b² পাওয়া যায়।'
    ]
  },
  commonMistakes: {
    en: [
      'Attempting addition or subtraction directly in polar form without first converting to rectangular coordinates.',
      'Forgetting quadrant corrections when using θ = arctan(b / a) for negative real parts (a < 0, add ±180°).',
      'Treating 1/j as +j instead of -j (since 1/j = j / j² = j / (-1) = -j).'
    ],
    hi: [
      'ध्रुवीय रूप में सीधे जोड़ या घटाव करने का प्रयास करना बिना आयताकार रूप में बदले।',
      'θ = arctan(b / a) में चतुर्थांश (क्वाड्रेंट) सुधार भूल जाना जब वास्तविक भाग ऋणात्मक हो (a < 0 होने पर 180° जोड़ें)।',
      '1/j को +j समझ लेना जबकि 1/j = -j होता है।'
    ],
    bn: [
      'রেকট্যাঙ্গুলার রূপে রূপান্তর না করেই সরাসরি পোলার রূপে যোগ বা বিয়োগ করার ভুল করা।',
      'বাস্তব অংশ ঋণাত্মক হলে (a < 0) কোয়াড্রেন্ট সংশোধনে ±১৮০° যোগ করতে ভুলে যাওয়া।',
      '1/j কে -j এর পরিবর্তে +j ধরে নেওয়া।'
    ]
  },
  mcqs: [
    {
      id: 'quiz-ch5-l5-1',
      question: {
        en: 'The polar representation of the complex impedance Z = 3 + j4 Ω is:',
        hi: 'सम्मिश्र प्रतिबाधा Z = 3 + j4 Ω का ध्रुवीय निरूपण क्या है?',
        bn: 'জটিল ইম্পিডেন্স Z = ৩ + j৪ Ω এর পোলার রূপ কোনটি?'
      },
      options: [
        { id: 'opt-a', text: { en: '5.0 ∠ 53.13° Ω', hi: '5.0 ∠ 53.13° Ω', bn: '৫.০ ∠ ৫৩.১৩° Ω' } },
        { id: 'opt-b', text: { en: '5.0 ∠ 36.87° Ω', hi: '5.0 ∠ 36.87° Ω', bn: '৫.০ ∠ ৩৬.৮৭° Ω' } },
        { id: 'opt-c', text: { en: '7.0 ∠ 45.00° Ω', hi: '7.0 ∠ 45.00° Ω', bn: '৭.০ ∠ ৪৫.০০° Ω' } },
        { id: 'opt-d', text: { en: '25.0 ∠ 53.13° Ω', hi: '25.0 ∠ 53.13° Ω', bn: '২৫.০ ∠ ৫৩.১৩° Ω' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: '|Z| = √(3² + 4²) = √25 = 5.0 Ω, θ = tan⁻¹(4/3) = 53.13°. Hence, Z = 5.0 ∠ 53.13° Ω.',
        hi: '|Z| = √(9 + 16) = 5 Ω, θ = tan⁻¹(4/3) = 53.13°। अतः Z = 5.0 ∠ 53.13° Ω।',
        bn: '|Z| = √(৯ + ১৬) = ৫ Ω, θ = tan⁻¹(৪/৩) = ৫৩.১৩°। সুতরাং Z = ৫.০ ∠ ৫৩.১৩° Ω।'
      }
    },
    {
      id: 'quiz-ch5-l5-2',
      question: {
        en: 'When two complex numbers Z₁ = 10 ∠ 30° and Z₂ = 5 ∠ 20° are multiplied together, the result is:',
        hi: 'जब दो सम्मिश्र संख्याओं Z₁ = 10 ∠ 30° और Z₂ = 5 ∠ 20° को गुणा किया जाता है, तो परिणाम क्या होगा?',
        bn: 'দুটি জটিল সংখ্যা Z₁ = ১০ ∠ ৩০° এবং Z₂ = ৫ ∠ ২০° গুণ করলে গুণফল কত হবে?'
      },
      options: [
        { id: 'opt-a', text: { en: '50 ∠ 50°', hi: '50 ∠ 50°', bn: '৫০ ∠ ৫০°' } },
        { id: 'opt-b', text: { en: '50 ∠ 600°', hi: '50 ∠ 600°', bn: '৫০ ∠ ৬০০°' } },
        { id: 'opt-c', text: { en: '15 ∠ 50°', hi: '15 ∠ 50°', bn: '১৫ ∠ ৫০°' } },
        { id: 'opt-d', text: { en: '2 ∠ 10°', hi: '2 ∠ 10°', bn: '২ ∠ ১০°' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'In polar multiplication: |Z_res| = 10 × 5 = 50, θ_res = 30° + 20° = 50°. Result = 50 ∠ 50°.',
        hi: 'ध्रुवीय गुणन में: परिमाण = 10 × 5 = 50, कोण = 30° + 20° = 50°। परिणाम = 50 ∠ 50°।',
        bn: 'পোলার গুণ পদ্ধতিতে: মান = ১০ × ৫ = ৫০, কোণ = ৩০° + ২০° = ৫০°। ফলাফল = ৫০ ∠ ৫০°।'
      }
    },
    {
      id: 'quiz-ch5-l5-3',
      question: {
        en: 'The complex conjugate of the impedance Z = 15 - j20 Ω is:',
        hi: 'प्रतिबाधा Z = 15 - j20 Ω का सम्मिश्र संयुग्मी क्या है?',
        bn: 'ইম্পিডেন্স Z = ১৫ - j২০ Ω এর অনুবন্ধী জটিল সংখ্যা কোনটি?'
      },
      options: [
        { id: 'opt-a', text: { en: '15 + j20 Ω', hi: '15 + j20 Ω', bn: '১৫ + j২০ Ω' } },
        { id: 'opt-b', text: { en: '-15 - j20 Ω', hi: '-15 - j20 Ω', bn: '-১৫ - j২০ Ω' } },
        { id: 'opt-c', text: { en: '-15 + j20 Ω', hi: '-15 + j20 Ω', bn: '-১৫ + j২০ Ω' } },
        { id: 'opt-d', text: { en: '20 - j15 Ω', hi: '20 - j15 Ω', bn: '২০ - j১৫ Ω' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'The complex conjugate changes the sign of the imaginary component only: (a - jb)* = a + jb. Hence, (15 - j20)* = 15 + j20 Ω.',
        hi: 'संयुग्मी केवल काल्पनिक भाग का चिह्न बदलता है: (15 - j20)* = 15 + j20 Ω।',
        bn: 'অনুবন্ধী কেবল কাল্পনিক অংশের চিহ্ন পরিবর্তন করে: (১৫ - j২০)* = ১৫ + j২০ Ω।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch5-l5-1',
      question: {
        en: 'Two parallel circuit branches have impedances Z₁ = 8 + j6 Ω and Z₂ = 6 - j8 Ω. Calculate the equivalent total impedance Z_eq = (Z₁ · Z₂) / (Z₁ + Z₂) in polar and rectangular form.',
        hi: 'दो समानांतर शाखाओं की प्रतिबाधा Z₁ = 8 + j6 Ω और Z₂ = 6 - j8 Ω है। ध्रुवीय एवं आयताकार रूप में कुल समतुल्य प्रतिबाधा Z_eq = (Z₁ · Z₂) / (Z₁ + Z₂) की गणना करें।',
        bn: 'দুটি সমান্তরাল শাখার ইম্পিডেন্স যথাক্রমে Z₁ = ৮ + j৬ Ω এবং Z₂ = ৬ - j৮ Ω। পোলার ও রেকট্যাঙ্গুলার রূপে মোট সমতুল্য ইম্পিডেন্স Z_eq = (Z₁ · Z₂) / (Z₁ + Z₂) নির্ণয় করুন।'
      },
      hint: {
        en: 'Convert Z₁ and Z₂ to polar for numerator multiplication. Use rectangular for denominator addition: Z₁ + Z₂ = (8+6) + j(6-8) = 14 - j2 Ω. Then perform polar division.',
        hi: 'अंश के गुणन के लिए ध्रुवीय रूप का उपयोग करें: Z₁ = 10 ∠ 36.87°, Z₂ = 10 ∠ -53.13°। हर के लिए Z₁ + Z₂ = 14 - j2 = 14.14 ∠ -8.13°।',
        bn: 'লবের গুণের জন্য পোলার রূপ নিন: Z₁ = ১০ ∠ ৩৬.৮৭°, Z₂ = ১০ ∠ -৫৩.১৩°। হরের জন্য Z₁ + Z₂ = ১৪ - j২ = ১৪.১৪ ∠ -৮.১৩°।'
      },
      answerKey: {
        en: '1. Numerator Product: Z₁ = 10 ∠ 36.87° Ω, Z₂ = 10 ∠ -53.13° Ω\nZ₁ · Z₂ = 100 ∠ (36.87° - 53.13°) = 100 ∠ -16.26° Ω²\n\n2. Denominator Sum:\nZ₁ + Z₂ = (8 + 6) + j(6 - 8) = 14 - j2 Ω\nPolar: |Z_sum| = √(14² + (-2)²) = √200 = 14.142 Ω, θ = tan⁻¹(-2/14) = -8.13°\nZ₁ + Z₂ = 14.142 ∠ -8.13° Ω\n\n3. Equivalent Impedance:\nZ_eq = (100 ∠ -16.26°) / (14.142 ∠ -8.13°) = 7.071 ∠ (-16.26° - (-8.13°)) = 7.071 ∠ -8.13° Ω\nIn Rectangular: 7.071 · cos(-8.13°) + j 7.071 · sin(-8.13°) = 7.00 - j1.00 Ω.\n\nAnswer: Z_eq = 7.07 ∠ -8.13° Ω = 7.0 - j1.0 Ω.',
        hi: '1. अंश: Z₁ · Z₂ = 100 ∠ -16.26°\n2. हर: Z₁ + Z₂ = 14 - j2 = 14.142 ∠ -8.13°\n3. Z_eq = (100/14.142) ∠ (-16.26° - (-8.13°)) = 7.071 ∠ -8.13° Ω = 7.0 - j1.0 Ω।',
        bn: '১. লবের গুণফল: Z₁ · Z₂ = ১০০ ∠ -১৬.২৬° Ω²\n২. হরের যোগফল: Z₁ + Z₂ = ১৪ - j২ = ১৪.১৪২ ∠ -৮.১৩° Ω\n৩. সমতুল্য ইম্পিডেন্স: Z_eq = ৭.০৭১ ∠ -৮.১৩° Ω = ৭.০ - j১.০ Ω।'
      }
    },
    {
      id: 'pq-ch5-l5-2',
      question: {
        en: 'Explain why multiplication and division are significantly easier in polar form than in rectangular form for AC circuit calculations.',
        hi: 'स्पष्ट करें कि एसी परिपथ गणना में आयताकार रूप की तुलना में ध्रुवीय रूप में गुणा और भाग करना काफी आसान क्यों है।',
        bn: 'এসি সার্কিট গণনায় রেকট্যাঙ্গুলার রূপের চেয়ে পোলার রূপে গুণ ও ভাগ করা কেন উল্লেখযোগ্যভাবে সহজ তা ব্যাখ্যা করুন।'
      },
      hint: {
        en: 'In polar form, magnitudes simply multiply/divide, and phase angles add/subtract.',
        hi: 'ध्रुवीय रूप में केवल परिमाणों का गुणा/भाग और कोणों का जोड़/घटाव होता है।',
        bn: 'পোলার রূপে কেবল মানগুলোর গুণ/ভাগ এবং কোণগুলোর যোগ/বিয়োগ হয়।'
      },
      answerKey: {
        en: 'In polar form Z = |Z| ∠ θ, multiplication requires multiplying magnitudes and adding angles (|Z₁||Z₂| ∠ θ₁+θ₂), and division requires dividing magnitudes and subtracting angles (|Z₁|/|Z₂| ∠ θ₁-θ₂). In contrast, rectangular multiplication requires FOIL binomial expansion with j² = -1, and division requires multiplying both numerator and denominator by the complex conjugate to rationalize the denominator.',
        hi: 'ध्रुवीय रूप में गुणा करने पर परिमाणों का सीधा गुणा और कोणों का जोड़ होता है, तथा भाग में परिमाणों का भाग और कोणों का घटाव होता है। जबकि आयताकार रूप में भाग करने के लिए हर के संयुग्मी (conjugate) से गुणा करना पड़ता है जो अधिक जटिल है।',
        bn: 'পোলার রূপে গুণ করার সময় মানগুলো গুণ এবং কোণগুলো যোগ হয়, আর ভাগের সময় মান ভাগ ও কোণ বিয়োগ হয়। কিন্তু রেকট্যাঙ্গুলার রূপে ভাগ করতে জটিল অনুবন্ধী (Conjugate) দিয়ে হর ও লবকে গুণ করে বাস্তব সংখ্যায় আনতে হয় যা অনেক দীর্ঘ ও জটিল।'
      }
    }
  ]
};

export const LESSON_AC_RESISTANCE: Lesson = {
  id: 'lsn-ch5-ac-resistance',
  topicId: 'ch5-ac-resistance',
  order: 6,
  title: {
    en: 'AC Through Pure Resistance',
    hi: 'शुद्ध प्रतिरोध में प्रत्यावर्ती धारा',
    bn: 'বিশুদ্ধ রোধের মধ্য দিয়ে এসি'
  },
  easyExplanation: {
    en: 'In a purely resistive AC circuit, current and voltage rise and fall in perfect synchronization with zero phase angle difference, maintaining a unity power factor of 1.0.',
    hi: 'एक शुद्ध प्रतिरोधी एसी परिपथ में, धारा और वोल्टेज बिना किसी फेज अंतर के एक साथ बढ़ते और घटते हैं, जिससे पावर फैक्टर 1.0 (यूनिटी) रहता है।',
    bn: 'একটি বিশুদ্ধ রোধীয় এসি সার্কিটে, কারেন্ট ও ভোল্টেজ কোনো ফেজ পার্থক্য ছাড়াই সম্পূর্ণ সমলয়ে ওঠানামা করে, যার ফলে পাওয়ার ফ্যাক্টর ১.০ (ইউনিটি) হয়।'
  },
  detailedExplanation: {
    en: '1. Circuit Configuration:\nA purely resistive AC circuit consists solely of a non-inductive, non-capacitive pure resistor R connected across an ideal sinusoidal AC voltage source: v(t) = Vm · sin(ωt).\n\n2. AC Ohm\'s Law and Instantaneous Current:\nAccording to Ohm\'s law at every instantaneous point in time:\ni(t) = v(t) / R = (Vm / R) · sin(ωt) = Im · sin(ωt)\nWhere maximum peak current Im = Vm / R, and RMS current Irms = Vrms / R.\n\n3. Phase Relationship (Zero Phase Difference):\nComparing the voltage v(t) = Vm · sin(ωt + 0°) and current i(t) = Im · sin(ωt + 0°):\n- Phase angle of voltage φ_v = 0°\n- Phase angle of current φ_i = 0°\n- Phase difference φ = φ_v - φ_i = 0.0°\nHence, in a pure resistor, alternating current is STRICTLY IN-PHASE with alternating voltage.\n\n4. Phasor Representation & Impedance:\n- Voltage Phasor: V = Vrms ∠ 0°\n- Current Phasor: I = Irms ∠ 0° (drawn collinear along the same positive real axis as V)\n- Complex Impedance: Z = R + j0 = R ∠ 0° Ω.\n\n5. Power in Purely Resistive AC Circuit:\nThe instantaneous power p(t) delivered to the resistor is the product of instantaneous voltage and current:\np(t) = v(t) · i(t) = [Vm · sin(ωt)] · [Im · sin(ωt)]\np(t) = Vm · Im · sin²(ωt)\nUsing the trigonometric identity sin²(ωt) = (1 - cos 2ωt) / 2:\np(t) = (Vm · Im / 2) · (1 - cos 2ωt) = Vrms · Irms · (1 - cos 2ωt) = P_avg - P_avg · cos(2ωt)\n\n6. Key Power Characteristics in Pure Resistor:\n- Constant Component: P_avg = Vrms · Irms = Irms² · R = Vrms² / R.\n- Pulsating Component: -Vrms · Irms · cos(2ωt), oscillating at DOUBLE the supply frequency (2f).\n- Non-Negative Property (p(t) ≥ 0): Because sin²(ωt) is always ≥ 0, instantaneous power is NEVER negative. Energy flows unidirectionally from the source to the resistor, converting electrical energy into heat at every instant of the AC cycle.\n- Peak Instantaneous Power: P_peak = 2 · P_avg = Vm · Im.\n\n7. Power Factor:\nThe power factor is defined as cos φ = cos(0°) = 1.0 (Unity Power Factor). All apparent power (S = V·I VA) is converted entirely into true active power (P = V·I Watts); reactive power is strictly zero (Q = 0 VAR).\n\n8. Practical Applications & Real-World Resistive Loads:\n- Incandescent / Tungsten filament lamps.\n- Electric heating elements: toasters, room heaters, water geysers, soldering irons, electric kettles.\n- Precision measurement shunt and series dropping resistors.',
    hi: '1. परिपथ संरचना:\nजब एक शुद्ध प्रतिरोधक R को प्रत्यावर्ती वोल्टेज v(t) = Vm · sin(ωt) से जोड़ा जाता है।\n\n2. तात्कालिक धारा:\ni(t) = v(t) / R = (Vm / R) · sin(ωt) = Im · sin(ωt)।\nजहाँ Im = Vm / R और Irms = Vrms / R।\n\n3. फेज संबंध (φ = 0°):\nधारा और वोल्टेज दोनों का फेज कोण 0° है। अतः धारा वोल्टेज के पूर्णतः समान फेज (in-phase) में होती है।\n\n4. फेजर एवं प्रतिबाधा:\nV = Vrms ∠ 0°, I = Irms ∠ 0°, प्रतिबाधा Z = R + j0 = R ∠ 0° Ω।\n\n5. तात्कालिक शक्ति p(t):\np(t) = v(t) · i(t) = VmIm sin²(ωt) = VI(1 - cos 2ωt)।\n\n6. शक्ति की प्रमुख विशेषताएँ:\n- औसत सक्रिय शक्ति: P = Vrms · Irms = Irms² · R।\n- द्वि-आवृत्ति दोलन: शक्ति 2f आवृत्ति पर स्पंदित होती है।\n- सदैव धनात्मक (p(t) ≥ 0): धारा की दिशा चाहे जो हो, प्रतिरोधक में हर क्षण ऊष्मा उत्पन्न होती है।\n- पावर फैक्टर: cos(0°) = 1.0 (यूनिटी)।',
    bn: '১. সার্কিট গঠন:\nএকটি বিশুদ্ধ রোধ R কে সাইনুসয়েডাল এসি উৎস v(t) = Vm · sin(ωt) এর সাথে যুক্ত করা হলে।\n\n২. তাৎক্ষণিক কারেন্ট:\ni(t) = v(t) / R = (Vm / R) · sin(ωt) = Im · sin(ωt)।\nযেখানে Im = Vm / R এবং Irms = Vrms / R।\n\n৩. ফেজ সম্পর্ক (φ = 0°):\nভোল্টেজ ও কারেন্ট উভয়ই একই সময়ে শূন্য ও পিক মানে পৌঁছায়। কারেন্ট ভোল্টেজের সম্পূর্ণ ইন-ফেজে থাকে।\n\n৪. ফেজর ও ইম্পিডেন্স:\nV = Vrms ∠ ০°, I = Irms ∠ ০°, Z = R + j০ = R ∠ ০° Ω।\n\n৫. তাৎক্ষণিক পাওয়ার p(t):\np(t) = v(t) · i(t) = VmIm sin²(ωt) = VI(১ - cos ২ωt)।\n\n৬. পাওয়ারের প্রধান বৈশিষ্ট্যসমূহ:\n- গড় সক্রিয় শক্তি: P = Vrms · Irms = Irms² · R।\n- দ্বিগুণ কম্পাঙ্ক: পাওয়ার উৎসের দ্বিগুণ ফ্রিকোয়েন্সিতে (2f) স্পন্দিত হয়।\n- সর্বদা ধনাত্মক (p(t) ≥ 0): উভয় অর্ধ-চক্রেই রোধে তাপ উৎপন্ন হয়।\n- পাওয়ার ফ্যাক্টর: cos(০°) = ১.০ (ইউনিটি)।'
  },
  formulas: [
    {
      symbol: 'i(t)',
      expression: 'i(t) = \\frac{v(t)}{R} = \\frac{V_m}{R} \\sin(\\omega t) = I_m \\sin(\\omega t)',
      description: {
        en: 'Instantaneous current equation in a purely resistive AC circuit',
        hi: 'शुद्ध प्रतिरोधी एसी परिपथ में तात्कालिक धारा समीकरण',
        bn: 'বিশুদ্ধ রোধীয় এসি সার্কিটের তাৎক্ষণিক কারেন্ট সমীকরণ'
      }
    },
    {
      symbol: 'I_{rms}',
      expression: 'I_{rms} = \\frac{V_{rms}}{R}, \\quad I_m = \\frac{V_m}{R}',
      description: {
        en: 'Ohm\'s law relationship for RMS and peak AC values in pure resistance',
        hi: 'शुद्ध प्रतिरोध में RMS एवं शिखर मानों के लिए ओम का नियम',
        bn: 'বিশুদ্ধ রোধে RMS ও পিক মানের জন্য ওহমের সূত্র'
      }
    },
    {
      symbol: 'p(t)',
      expression: 'p(t) = v(t) \\cdot i(t) = V_{rms}I_{rms}(1 - \\cos 2\\omega t) \\ge 0',
      description: {
        en: 'Instantaneous power pulsating at double frequency 2f, strictly non-negative',
        hi: 'द्वि-आवृत्ति 2f पर स्पंदित होने वाली सदैव धनात्मक तात्कालिक शक्ति',
        bn: 'দ্বিগুণ ফ্রিকোয়েন্সি 2f এ স্পন্দিত সর্বদা ধনাত্মক তাৎক্ষণিক পাওয়ার'
      }
    },
    {
      symbol: 'P',
      expression: 'P = V_{rms} \\cdot I_{rms} = I_{rms}^2 \\cdot R = \\frac{V_{rms}^2}{R}',
      description: {
        en: 'Average active power dissipated in resistor (Watts)',
        hi: 'प्रतिरोधक में क्षयित औसत सक्रिय शक्ति (वाट में)',
        bn: 'রোধে অপচয়িত গড় সক্রিয় ক্ষমতা (ওয়াট)'
      }
    },
    {
      symbol: 'PF',
      expression: '\\cos\\phi = \\cos(0^\\circ) = 1.0 \\quad \\text{(Unity)}',
      description: {
        en: 'Unity power factor of a pure resistive load',
        hi: 'शुद्ध प्रतिरोधी लोड का यूनिटी पावर फैक्टर',
        bn: 'বিশুদ্ধ রোধীয় লোডের ইউনিটি পাওয়ার ফ্যাক্টর'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ch5-pure-resistance',
      title: {
        en: 'Pure Resistive AC Circuit, In-Phase Phasors and Non-Negative Double-Frequency Power Curve',
        hi: 'शुद्ध प्रतिरोधी परिपथ, इन-फेज फेजर एवं द्वि-आवृत्ति शक्ति वक्र',
        bn: 'বিশুদ্ধ রোধীয় সার্কিট, ইন-ফেজ ফেজর এবং দ্বিগুণ ফ্রিকোয়েন্সির পাওয়ার তরঙ্গ'
      },
      caption: {
        en: 'Schematic showing AC source driving resistor R, in-phase voltage and current waveforms crossing zero together, and instantaneous power p(t) pulsating at 2f above zero baseline.',
        hi: 'प्रतिरोधक R से जुड़ा एसी स्रोत, एक साथ शून्य पार करते वोल्टेज एवं धारा वेवफॉर्म, और 2f पर स्पंदित धनात्मक शक्ति p(t)।',
        bn: 'এসি উৎসের সাথে যুক্ত রোধ R, একই সাথে শূন্য অতিক্রমকারী ভোল্টেজ ও কারেন্ট তরঙ্গ এবং 2f এ স্পন্দিত পাওয়ার p(t)।'
      },
      svgType: 'circuit-pure-resistance'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch5-l6-1',
      problem: {
        en: 'A pure electric heater resistor of R = 23 Ω is connected across a standard single-phase AC supply given by v(t) = 325.27 · sin(100πt) V. Calculate: (a) Peak and RMS voltage, (b) Peak and RMS current, (c) Expression for instantaneous current i(t), (d) Average power P dissipated.',
        hi: 'एक शुद्ध विद्युत हीटर प्रतिरोध R = 23 Ω को प्रत्यावर्ती आपूर्ति v(t) = 325.27 · sin(100πt) V से जोड़ा गया है। गणना करें: (a) शिखर एवं RMS वोल्टेज, (b) शिखर एवं RMS धारा, (c) तात्कालिक धारा i(t) का समीकरण, (d) औसत शक्ति P।',
        bn: 'একটি বিশুদ্ধ ইলেকট্রিক হিটার রোধ R = ২৩ Ω একটি এসি উৎস v(t) = ৩২৫.২৭ · sin(১০০πt) V এর সাথে যুক্ত। নির্ণয় করুন: (a) পিক ও আরএমএস ভোল্টেজ, (b) পিক ও আরএমএস কারেন্ট, (c) তাৎক্ষণিক কারেন্ট i(t) এর সমীকরণ, (d) অপচয়িত গড় শক্তি P।'
      },
      solution: {
        en: 'Given:\n- v(t) = 325.27 · sin(100πt) V\n- Resistance R = 23 Ω\n- Peak voltage Vm = 325.27 V\n- Angular frequency ω = 100π rad/s (f = 50 Hz)\n\n(a) RMS Voltage:\nVrms = Vm / √2 = 325.27 / 1.4142 = 230.0 V\n\n(b) Peak and RMS Current:\nPeak Current: Im = Vm / R = 325.27 / 23 = 14.14 A\nRMS Current: Irms = Vrms / R = 230 / 23 = 10.0 A (or Im / √2 = 14.14 / 1.4142 = 10.0 A)\n\n(c) Instantaneous Current Equation:\nSince current in a pure resistor is in-phase with voltage (φ = 0°):\ni(t) = Im · sin(ωt) = 14.14 · sin(100πt) A\n\n(d) Average Power Dissipated:\nP = Vrms × Irms = 230 V × 10 A = 2300 W = 2.30 kW\n(Verification: P = Irms² · R = 10² × 23 = 2300 W).\n\nAnswer:\n(a) Vm = 325.3 V, Vrms = 230 V\n(b) Im = 14.14 A, Irms = 10.0 A\n(c) i(t) = 14.14 · sin(100πt) A\n(d) P = 2.30 kW.',
        hi: 'हल:\n(a) Vm = 325.27 V, Vrms = 325.27 / √2 = 230 V\n(b) Im = 325.27 / 23 = 14.14 A, Irms = 230 / 23 = 10 A\n(c) i(t) = 14.14 · sin(100πt) A\n(d) औसत शक्ति P = 230 × 10 = 2300 W (2.3 kW)।\n\nउत्तर: Irms = 10 A, P = 2.3 kW।',
        bn: 'সমাধান:\n(a) Vm = ৩২৫.২৭ V, Vrms = ৩২৫.২৭ / √২ = ২৩০ V\n(b) Im = ৩২৫.২৭ / ২৩ = ১৪.১৪ A, Irms = ২৩০ / ২৩ = ১০ A\n(c) i(t) = ১৪.১৪ · sin(১০০πt) A\n(d) গড় শক্তি P = ২৩০ × ১০ = ২৩০০ W (২.৩ kW)।\n\nউত্তর: Irms = ১০ A, P = ২.৩ kW।'
      },
      givenValues: {
        'Peak Voltage (Vm)': '325.27 V',
        'Resistance (R)': '23 Ω'
      },
      finalAnswer: {
        en: 'Vrms = 230 V, Irms = 10.0 A, i(t) = 14.14·sin(100πt) A, Power P = 2.30 kW',
        hi: 'Vrms = 230 V, Irms = 10.0 A, i(t) = 14.14·sin(100πt) A, शक्ति P = 2.30 kW',
        bn: 'Vrms = ২৩০ V, Irms = ১০.০ A, i(t) = ১৪.১৪·sin(১০০πt) A, ক্ষমতা P = ২.৩০ kW'
      }
    },
    {
      id: 'ex-ch5-l6-2',
      problem: {
        en: 'A 100 W incandescent lamp is designed to operate on a 230 V, 50 Hz AC domestic supply. Determine: (a) Hot resistance R of the filament, (b) RMS current drawn by the lamp, (c) Peak value of instantaneous power dissipated in the filament.',
        hi: 'एक 100 W का इनकैंडेसेंट लैंप 230 V, 50 Hz एसी घरेलू आपूर्ति पर काम करने के लिए डिज़ाइन किया गया है। निर्धारित करें: (a) फिलामेंट का गर्म प्रतिरोध R, (b) लैंप द्वारा ली गई RMS धारा, (c) फिलामेंट में क्षयित तात्कालिक शक्ति का शिखर मान।',
        bn: 'একটি ১০০ W ইনক্যান্ডেসেন্ট ল্যাম্প ২৩০ V, ৫০ Hz এসি গৃহস্থালি লাইনে পরিচালনার জন্য নির্মিত। নির্ণয় করুন: (a) ফিলামেন্টের উত্তপ্ত রোধ R, (b) ল্যাম্প কর্তৃক গৃহীত আরএমএস কারেন্ট, (c) ফিলামেন্টে অপচয়িত তাৎক্ষণিক ক্ষমতার পিক মান।'
      },
      solution: {
        en: 'Given:\n- Rated Power P = 100 W\n- RMS Voltage Vrms = 230 V\n- Frequency f = 50 Hz\n\n(a) Filament Resistance R:\nP = Vrms² / R → R = Vrms² / P\nR = (230)² / 100 = 52900 / 100 = 529.0 Ω\n\n(b) RMS Current Irms:\nIrms = P / Vrms = 100 / 230 = 0.4348 A = 434.8 mA\n(Check: Irms = Vrms / R = 230 / 529 = 0.4348 A)\n\n(c) Peak Instantaneous Power:\nIn a pure resistor, instantaneous power pulsates between 0 and P_peak:\nP_peak = 2 × P_avg = 2 × 100 W = 200.0 W (or Vm · Im = (√2 × 230) × (√2 × 0.4348) = 2 × 100 = 200 W)\n\nAnswer:\n(a) Resistance R = 529.0 Ω\n(b) Current Irms = 0.435 A\n(c) Peak Power = 200.0 W.',
        hi: 'हल:\n(a) प्रतिरोध R = V² / P = (230)² / 100 = 529 Ω\n(b) धारा Irms = 100 / 230 = 0.435 A (434.8 mA)\n(c) शिखर तात्कालिक शक्ति = 2 × P = 2 × 100 = 200 W।\n\nउत्तर: R = 529 Ω, Irms = 0.435 A, P_peak = 200 W।',
        bn: 'সমাধান:\n(a) রোধ R = V² / P = (২৩০)² / ১০০ = ৫২৯ Ω\n(b) কারেন্ট Irms = ১০০ / ২৩০ = ০.৪৩৫ A (৪৩৪.৮ mA)\n(c) পিক তাৎক্ষণিক ক্ষমতা = ২ × P = ২ × ১০০ = ২০০ W।\n\nউত্তর: R = ৫২৯ Ω, Irms = ০.৪৩৫ A, P_peak = ২০০ W।'
      },
      givenValues: {
        'Rated Power (P)': '100 W',
        'Voltage (Vrms)': '230 V'
      },
      finalAnswer: {
        en: 'R = 529.0 Ω, Irms = 0.435 A (434.8 mA), Peak Power = 200.0 W',
        hi: 'R = 529.0 Ω, Irms = 0.435 A (434.8 mA), शिखर शक्ति = 200.0 W',
        bn: 'R = ৫২৯.০ Ω, Irms = ০.৪৩৫ A (৪৩৪.৮ mA), পিক ক্ষমতা = ২০০.০ W'
      }
    },
    {
      id: 'ex-ch5-l6-3',
      problem: {
        en: 'A 2.5 kW AC water heater operates on a 240 V, 50 Hz supply for 3 hours daily. Determine: (a) Resistance of the heating coil, (b) Power factor of the heater, (c) Total electrical energy consumed in kilowatt-hours (kWh) and Joules over a 30-day billing month.',
        hi: 'एक 2.5 kW का एसी वॉटर हीटर 240 V, 50 Hz आपूर्ति पर प्रतिदिन 3 घंटे संचालित होता है। निर्धारित करें: (a) हीटिंग कॉइल का प्रतिरोध, (b) हीटर का पावर फैक्टर, (c) 30 दिनों के बिलिंग माह में कुल खपत विद्युत ऊर्जा (kWh एवं जूल में)।',
        bn: 'একটি ২.৫ kW এসি ওয়াটার হিটার ২৪০ V, ৫০ Hz লাইনে দৈনিক ৩ ঘণ্টা চলে। নির্ণয় করুন: (a) হিটিং কয়েলের রোধ, (b) হিটারের পাওয়ার ফ্যাক্টর, (c) ৩০ দিনের মাসে মোট ব্যবহৃত বিদ্যুৎ শক্তি (kWh ও জুলে)।'
      },
      solution: {
        en: 'Given:\n- Active Power P = 2.5 kW = 2500 W\n- Voltage Vrms = 240 V\n- Daily Operating Time t_day = 3 hours\n- Number of days N = 30 days\n\n(a) Heating Coil Resistance:\nR = Vrms² / P = (240)² / 2500 = 57600 / 2500 = 23.04 Ω\n\n(b) Power Factor:\nSince the heating element is purely resistive, the phase angle φ = 0°.\nPower Factor PF = cos(0°) = 1.0 (Unity).\n\n(c) Total Energy Consumed:\nTotal Operating Hours = 3 h/day × 30 days = 90 hours\nEnergy in kWh = Power (kW) × Total Hours (h) = 2.5 kW × 90 h = 225.0 kWh (Units of electricity)\nEnergy in Joules = 225 kWh × (3.6 × 10⁶ J / kWh) = 8.10 × 10⁸ Joules = 810 MJ.\n\nAnswer:\n(a) R = 23.04 Ω\n(b) Power factor = 1.0 (Unity)\n(c) Energy consumed = 225 kWh (810 MJ).',
        hi: 'हल:\n(a) प्रतिरोध R = (240)² / 2500 = 23.04 Ω\n(b) पावर फैक्टर = cos(0°) = 1.0 (यूनिटी)\n(c) कुल समय = 3 × 30 = 90 घंटे।\nऊर्जा = 2.5 kW × 90 h = 225 kWh। जूल में = 225 × 3.6 × 10⁶ = 810 MJ।\n\nउत्तर: R = 23.04 Ω, PF = 1.0, ऊर्जा = 225 kWh।',
        bn: 'সমাধান:\n(a) রোধ R = (২৪০)² / ২৫০০ = ২৩.০৪ Ω\n(b) পাওয়ার ফ্যাক্টর = cos(০°) = ১.০ (ইউনিটি)\n(c) মোট সময় = ৩ × ৩০ = ৯০ ঘণ্টা।\nশক্তি = ২.৫ kW × ৯০ h = ২২৫ kWh। জুলে = ২২৫ × ৩.৬ × ১০⁶ = ৮১০ MJ।\n\nউত্তর: R = ২৩.০৪ Ω, PF = ১.০, শক্তি = ২২৫ kWh।'
      },
      givenValues: {
        'Power (P)': '2.5 kW',
        'Voltage (Vrms)': '240 V',
        'Duration': '3 h/day for 30 days'
      },
      finalAnswer: {
        en: 'Resistance R = 23.04 Ω, PF = 1.0 (Unity), Monthly Energy = 225.0 kWh (810 MJ)',
        hi: 'प्रतिरोध R = 23.04 Ω, PF = 1.0 (यूनिटी), मासिक ऊर्जा = 225.0 kWh (810 MJ)',
        bn: 'রোধ R = ২৩.০৪ Ω, PF = ১.০ (ইউনিটি), মাসিক শক্তি = ২২৫.০ kWh (৮১০ MJ)'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Electric Heating Appliances: Water geysers, toasters, space heaters, and industrial furnaces use nichrome resistive elements operating at unity power factor.',
      'Incandescent Lighting: Traditional filament lamps convert AC electrical power directly into light and thermal radiation with zero phase displacement.',
      'Load Testing: Resistive load banks are used in generator and UPS commissioning to verify electrical output without reactive current distortion.'
    ],
    hi: [
      'विद्युत तापन उपकरण: वॉटर गीजर, टोस्टर, हीटर और औद्योगिक भट्टियाँ नाइक्रोम प्रतिरोधी तत्वों का उपयोग करती हैं जो 1.0 पावर फैक्टर पर कार्य करते हैं।',
      'तापदीप्त प्रकाश व्यवस्था (Incandescent): फिलामेंट बल्ब बिना किसी फेज विस्थापन के एसी विद्युत ऊर्जा को सीधे प्रकाश और ऊष्मा में बदलते हैं।',
      'लोड परीक्षण: जनरेटर और यूपीएस की क्षमता का परीक्षण करने के लिए प्रतिरोधी लोड बैंकों (Load Banks) का उपयोग किया जाता है।'
    ],
    bn: [
      'বৈদ্যুতিক হিটিং যন্ত্রপাতি: ওয়াটার গিজার, টোস্টার, রুম হিটার এবং শিল্প ফার্নেস বিশুদ্ধ রোধীয় নাইক্রোম তারের সাহায্যে ইউনিটি পাওয়ার ফ্যাক্টরে কাজ করে।',
      'ইনক্যান্ডেসেন্ট লাইটিং: ফিলামেন্ট ল্যাম্প কোনো ফেজ পার্থক্য ছাড়াই এসি বিদ্যুৎ শক্তিকে সরাসরি তাপ ও আলোতে রূপান্তরিত করে।',
      'লোড টেস্টিং: জেনারেটর এবং ইউপিএস পরীক্ষার জন্য রেজিস্টিভ লোড ব্যাংক ব্যবহার করে বিশুদ্ধ ইউনিটি পাওয়ার ফ্যাক্টরে লোড প্রয়োগ করা হয়।'
    ]
  },
  importantPoints: {
    en: [
      'In a purely resistive AC circuit, current is strictly in-phase with voltage (phase angle φ = 0°).',
      'The power factor of a pure resistor is strictly unity (cos 0° = 1.0); reactive power is zero.',
      'Instantaneous power p(t) oscillates at double the supply frequency (2f) and is strictly non-negative (p(t) ≥ 0).',
      'Average active power is P = Vrms · Irms = Irms² · R = Vrms² / R, while peak power is 2 × P_avg.'
    ],
    hi: [
      'शुद्ध प्रतिरोधी परिपथ में धारा और वोल्टेज पूर्णतः समान फेज (φ = 0°) में होते हैं।',
      'शुद्ध प्रतिरोधक का पावर फैक्टर सदैव 1.0 (यूनिटी) होता है; रिएक्टिव पावर शून्य होती है।',
      'तात्कालिक शक्ति आपूर्ति आवृत्ति की दोगुनी (2f) पर दोलन करती है और सदैव धनात्मक (p(t) ≥ 0) रहती है।',
      'औसत सक्रिय शक्ति P = Vrms · Irms = Irms² · R होती है, जबकि शिखर शक्ति 2 × P_avg होती है।'
    ],
    bn: [
      'বিশুদ্ধ রোধযুক্ত এসি সার্কিটে কারেন্ট ও ভোল্টেজ সম্পূর্ণ ইন-ফেজে থাকে (φ = ০°)।',
      'বিশুদ্ধ রোধের পাওয়ার ফ্যাক্টর সর্বদা ১.০ (ইউনিটি) এবং রিঅ্যাক্টিভ পাওয়ার শূন্য।',
      'তাৎক্ষণিক পাওয়ার উৎসের দ্বিগুণ ফ্রিকোয়েন্সিতে (2f) স্পন্দিত হয় এবং সর্বদা অ-ঋণাত্মক (p(t) ≥ 0) থাকে।',
      'গড় সক্রিয় শক্তি P = Vrms · Irms = Irms² · R এবং পিক পাওয়ার হলো ২ × P_avg।'
    ]
  },
  commonMistakes: {
    en: [
      'Assuming power frequency is f instead of 2f: The instantaneous power frequency in an AC circuit is 2 × supply frequency (e.g., 100 Hz for a 50 Hz supply).',
      'Thinking instantaneous power goes negative: In a pure resistor, current and voltage change sign simultaneously, so p(t) = v(t) × i(t) is always ≥ 0.',
      'Using peak values instead of RMS values for power calculations: Always use RMS values for P = V · I or convert correctly (P = Vm · Im / 2).'
    ],
    hi: [
      'शक्ति की आवृत्ति को f मान लेना: तात्कालिक शक्ति की आवृत्ति आपूर्ति आवृत्ति की दोगुनी (2f) होती है (50 Hz के लिए 100 Hz)।',
      'यह सोचना कि तात्कालिक शक्ति ऋणात्मक होती है: शुद्ध प्रतिरोध में p(t) सदैव ≥ 0 रहता है क्योंकि वोल्टेज और धारा एक साथ चिन्ह बदलते हैं।',
      'शक्ति गणना में RMS के स्थान पर शिखर मान का उपयोग करना: P = V · I में सदैव RMS मान का ही उपयोग करें।'
    ],
    bn: [
      'পাওয়ার ফ্রিকোয়েন্সিকে f মনে করা: তাৎক্ষণিক পাওয়ারের কম্পাঙ্ক সরবরাহ ফ্রিকোয়েন্সির দ্বিগুণ (2f) হয় (৫০ Hz সরবরাহের জন্য ১০০ Hz)।',
      'তাৎক্ষণিক পাওয়ার ঋণাত্মক হতে পারে ভাবা: বিশুদ্ধ রোধে p(t) সর্বদা ≥ ০ থাকে কারণ ভোল্টেজ ও কারেন্ট একসাথে দিক পরিবর্তন করে।',
      'পাওয়ার গণনায় RMS মানের জায়গায় পিক মান ব্যবহার করা: P = V · I গণনায় সর্বদা RMS মান ব্যবহার করতে হয়।'
    ]
  },
  mcqs: [
    {
      id: 'quiz-ch5-l6-1',
      question: {
        en: 'The phase angle difference between voltage and current in a purely resistive AC circuit is:',
        hi: 'एक शुद्ध प्रतिरोधी एसी परिपथ में वोल्टेज और धारा के बीच फेज कोण अंतर क्या है?',
        bn: 'বিশুদ্ধ রোধীয় এসি সার্কিটে ভোল্টেজ ও কারেন্টের মধ্যকার ফেজ কোণের পার্থক্য কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '0° (Strictly In-Phase)', hi: '0° (पूर्णतः समान फेज)', bn: '০° (সম্পূর্ণ ইন-ফেজ)' } },
        { id: 'opt-b', text: { en: '90° (Current leads)', hi: '90° (धारा आगे रहती है)', bn: '৯০° (কারেন্ট এগিয়ে থাকে)' } },
        { id: 'opt-c', text: { en: '90° (Current lags)', hi: '90° (धारा पीछे रहती है)', bn: '৯০° (কারেন্ট পিছিয়ে থাকে)' } },
        { id: 'opt-d', text: { en: '180° (Antiphase)', hi: '180° (विपरीत फेज)', bn: '১৮০° (অ্যান্টিফেজ)' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'In a pure resistor, current and voltage pass through zero and peak simultaneously, so φ = 0°.',
        hi: 'शुद्ध प्रतिरोधक में धारा और वोल्टेज एक साथ शून्य और शिखर पर पहुँचते हैं, अतः φ = 0°।',
        bn: 'বিশুদ্ধ রোধে কারেন্ট ও ভোল্টেজ একই সাথে শূন্য ও পিক অতিক্রম করে, তাই φ = ০°।'
      }
    },
    {
      id: 'quiz-ch5-l6-2',
      question: {
        en: 'If a 50 Hz sinusoidal voltage is applied to a pure resistor, the frequency of the pulsating instantaneous power waveform is:',
        hi: 'यदि एक 50 Hz साइनसॉइडल वोल्टेज को शुद्ध प्रतिरोधक पर लगाया जाता है, तो स्पंदित तात्कालिक शक्ति तरंग की आवृत्ति क्या होगी?',
        bn: 'যদি একটি ৫০ Hz সাইনুসয়েডাল ভোল্টেজ কোনো বিশুদ্ধ রোধে প্রয়োগ করা হয়, তবে স্পন্দিত তাৎক্ষণিক পাওয়ার তরঙ্গের কম্পাঙ্ক কত হবে?'
      },
      options: [
        { id: 'opt-a', text: { en: '100 Hz (Double the supply frequency 2f)', hi: '100 Hz (आपूर्ति आवृत्ति की दोगुनी 2f)', bn: '১০০ Hz (সরবরাহ কম্পাঙ্কের দ্বিগুণ 2f)' } },
        { id: 'opt-b', text: { en: '50 Hz (Same as supply frequency)', hi: '50 Hz (आपूर्ति आवृत्ति के समान)', bn: '৫০ Hz (সরবরাহ কম্পাঙ্কের সমান)' } },
        { id: 'opt-c', text: { en: '25 Hz (Half the supply frequency)', hi: '25 Hz (आपूर्ति आवृत्ति की आधी)', bn: '২৫ Hz (সরবরাহ কম্পাঙ্কের অর্ধেক)' } },
        { id: 'opt-d', text: { en: '0 Hz (Constant DC power)', hi: '0 Hz (स्थिर DC शक्ति)', bn: '০ Hz (স্থির ডিসি পাওয়ার)' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Instantaneous power is p(t) = VI(1 - cos 2ωt), which oscillates at angular frequency 2ω and linear frequency 2f = 2 × 50 = 100 Hz.',
        hi: 'तात्कालिक शक्ति p(t) = VI(1 - cos 2ωt) आवृत्ति 2f = 2 × 50 = 100 Hz पर दोलन करती है।',
        bn: 'তাৎক্ষণিক পাওয়ার p(t) = VI(১ - cos ২ωt) এর কম্পাঙ্ক 2f = ২ × ৫০ = ১০০ Hz।'
      }
    },
    {
      id: 'quiz-ch5-l6-3',
      question: {
        en: 'The power factor of a pure resistive AC circuit is:',
        hi: 'एक शुद्ध प्रतिरोधी एसी परिपथ का पावर फैक्टर क्या होता है?',
        bn: 'বিশুদ্ধ রোধীয় এসি সার্কিটের পাওয়ার ফ্যাক্টর কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '1.0 (Unity)', hi: '1.0 (यूनिटी / इकाई)', bn: '১.০ (ইউনিটি)' } },
        { id: 'opt-b', text: { en: '0.0 (Zero)', hi: '0.0 (शून्य)', bn: '০.০ (শূন্য)' } },
        { id: 'opt-c', text: { en: '0.707 Lagging', hi: '0.707 लैगिंग', bn: '০.৭০৭ ল্যাগিং' } },
        { id: 'opt-d', text: { en: '0.866 Leading', hi: '0.866 लीडिंग', bn: '০.৮৬৬ লিডিং' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Power factor is cos(φ). For a pure resistor, φ = 0°, so cos(0°) = 1.0 (Unity).',
        hi: 'पावर फैक्टर cos(φ) होता है। शुद्ध प्रतिरोधक के लिए φ = 0°, अतः cos(0°) = 1.0 (यूनिटी)।',
        bn: 'পাওয়ার ফ্যাক্টর হলো cos(φ)। বিশুদ্ধ রোধে φ = ০°, তাই cos(০°) = ১.০ (ইউনিটি)।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch5-l6-1',
      question: {
        en: 'A 240 V, 50 Hz AC voltage source is connected to a 48 Ω pure resistor. Calculate: (a) RMS current, (b) Peak instantaneous current, (c) Average active power dissipated, (d) Peak instantaneous power delivered to the resistor.',
        hi: 'एक 240 V, 50 Hz एसी वोल्टेज स्रोत 48 Ω के शुद्ध प्रतिरोधक से जुड़ा है। गणना करें: (a) RMS धारा, (b) शिखर तात्कालिक धारा, (c) क्षयित औसत सक्रिय शक्ति, (d) प्रतिरोधक को दी गई शिखर तात्कालिक शक्ति।',
        bn: 'একটি ২৪০ V, ৫০ Hz এসি ভোল্টেজ উৎস একটি ৪৮ Ω বিশুদ্ধ রোধের সাথে যুক্ত। নির্ণয় করুন: (a) আরএমএস কারেন্ট, (b) পিক তাৎক্ষণিক কারেন্ট, (c) অপচয়িত গড় সক্রিয় ক্ষমতা, (d) রোধে প্রদত্ত পিক তাৎক্ষণিক ক্ষমতা।'
      },
      hint: {
        en: 'Irms = Vrms / R, Im = √2 × Irms, P_avg = Vrms × Irms, P_peak = 2 × P_avg = Vm × Im.',
        hi: 'Irms = 240 / 48 = 5 A। Im = 5 × √2 = 7.07 A। P_avg = 240 × 5 = 1200 W। P_peak = 2 × 1200 = 2400 W।',
        bn: 'Irms = ২৪০ / ৪৮ = ৫ A। Im = ৫ × √২ = ৭.০৭ A। P_avg = ২৪০ × ৫ = ১২০০ W। P_peak = ২ × ১২০০ = ২৪০০ W।'
      },
      answerKey: {
        en: '(a) RMS current Irms = Vrms / R = 240 / 48 = 5.0 A.\n(b) Peak current Im = √2 × 5.0 = 7.071 A.\n(c) Average active power P_avg = Vrms × Irms = 240 × 5.0 = 1200 W = 1.20 kW.\n(d) Peak instantaneous power P_peak = 2 × P_avg = 2 × 1200 W = 2400 W = 2.40 kW.',
        hi: '(a) RMS धारा Irms = 240 / 48 = 5.0 A।\n(b) शिखर धारा Im = 7.07 A।\n(c) औसत शक्ति P = 1200 W (1.20 kW)।\n(d) शिखर तात्कालिक शक्ति P_peak = 2400 W (2.40 kW)।',
        bn: '(a) আরএমএস কারেন্ট Irms = ২৪০ / ৪৮ = ৫.০ A।\n(b) পিক কারেন্ট Im = ৭.০৭ A।\n(c) গড় সক্রিয় শক্তি P = ১২০০ W (১.২০ kW)।\n(d) পিক তাৎক্ষণিক ক্ষমতা P_peak = ২৪০০ W (২.৪০ kW)।'
      }
    }
  ]
};

export const LESSON_AC_INDUCTOR: Lesson = {
  id: 'lsn-ch5-ac-inductor',
  topicId: 'ch5-ac-inductor',
  chapterId: 'ch-alternating-current',
  order: 7,
  title: {
    en: 'Pure Inductive AC Circuit',
    hi: 'शुद्ध इंडक्टिव एसी परिपथ',
    bn: 'বিশুদ্ধ ইন্ডাক্টিভ এসি বর্তনী'
  },
  description: {
    en: 'Comprehensive analysis of pure inductive AC circuits: inductive reactance XL = 2πfL, current lagging voltage by 90°, magnetic energy storage, zero active power dissipation, and frequency response.',
    hi: 'शुद्ध इंडक्टिव एसी परिपथ का गहन अध्ययन: इंडक्टिव रिएक्टेंस XL = 2πfL, धारा का वोल्टेज से 90° लैग, चुंबकीय ऊर्जा संचय, शून्य सक्रिय शक्ति क्षय एवं आवृत्ति अनुक्रिया।',
    bn: 'বিশুদ্ধ ইন্ডাক্টিভ এসি বর্তনীর বিশদ বিশ্লেষণ: ইন্ডাক্টিভ রিঅ্যাকট্যান্স XL = 2πfL, কারেন্টের ভোল্টেজের তুলনায় ৯০° পশ্চাদপসরণ (ল্যাগ), চৌম্বক শক্তি সঞ্চয়, শূন্য সক্রিয় ক্ষমতা অপচয় এবং কম্পাঙ্ক নির্ভরতা।'
  },
  estimatedMinutes: 28,
  easyExplanation: {
    en: 'A pure inductor is a coil with zero resistance. When AC voltage is applied, the changing magnetic field induces a counter-voltage that delays the current. In a pure inductor, the current lags behind the applied voltage by exactly 90 degrees (a quarter of a cycle). The opposition to current is called Inductive Reactance XL = 2πfL. Because the current and voltage are 90° out of phase, an ideal inductor consumes zero average active power.',
    hi: 'एक शुद्ध इंडक्टर केवल शून्य प्रतिरोध वाला कॉइल होता है। जब इस पर एसी वोल्टेज लगाया जाता है, तो बदलता चुंबकीय क्षेत्र एक विरोधी बैक-ईएमएफ बनाता है जो धारा को पीछे धकेल देता है। अतः शुद्ध इंडक्टर में धारा वोल्टेज से ठीक 90° पीछे (लैग) रहती है। इसके विरोध को इंडक्टिव रिएक्टेंस XL = 2πfL कहते हैं और यह कोई वास्तविक शक्ति (वाट) खर्च नहीं करता।',
    bn: 'একটি বিশুদ্ধ ইন্ডাক্টর হলো শূন্য রোধবিশিষ্ট কয়েল। পরিবর্তনশীল এসি ভোল্টেজ প্রয়োগ করলে উৎপন্ন ব্যাক-ইএমএফ কারেন্টকে বাধা দেয় এবং কারেন্ট ভোল্টেজের চেয়ে ঠিক ৯০° পিছিয়ে (ল্যাগ করে) প্রবাহিত হয়। কারেন্ট প্রবাহে এর বাধাকে ইন্ডাক্টিভ রিঅ্যাকট্যান্স XL = 2πfL বলা হয় এবং এতে গড় সক্রিয় ক্ষমতার কোনো অপচয় হয় না।'
  },
  detailedExplanation: {
    en: 'A pure inductive AC circuit consists of an ideal inductance L without resistance. Applying KVL, v(t) = L(di/dt). Integrating gives i(t) = Im·sin(ωt - 90°), proving current lags voltage by 90° (π/2 radians). The inductive reactance XL = ωL = 2πfL in Ohms represents frequency-dependent opposition (XL ∝ f). At DC (f=0), XL = 0 Ω (short circuit); at high frequencies, XL blocks AC. Instantaneous power oscillates at double frequency (2f) with an average active power of zero (P = V·I·cos(-90°) = 0 W), as energy is cyclically stored in the magnetic field and returned to the source.',
    hi: 'शुद्ध इंडक्टिव परिपथ में केवल प्रेरकत्व L होता है। KVL समीकरण v(t) = L(di/dt) का समाकलन करने पर i(t) = Im·sin(ωt - 90°) प्राप्त होता है, जो सिद्ध करता है कि धारा वोल्टेज से 90° पीछे रहती है। इंडक्टिव रिएक्टेंस XL = 2πfL (ओम में) आवृत्ति के समानुपाती है। डीसी (f=0) पर यह शॉर्ट सर्किट (XL = 0) तथा उच्च आवृत्ति पर ओपन सर्किट जैसा व्यवहार करता है। तात्कालिक शक्ति 2f आवृत्ति पर दोलन करती है और औसत सक्रिय शक्ति शून्य (P = 0 W) होती है क्योंकि ऊर्जा चुंबकीय क्षेत्र में संचित होकर पुनः स्रोत को लौट जाती है।',
    bn: 'বিশুদ্ধ ইন্ডাক্টিভ এসি সার্কিটে রোধ শূন্য থাকে। KVL থেকে v(t) = L(di/dt) সমাকলন করে পাওয়া যায় i(t) = Im·sin(ωt - ৯০°), যা প্রমাণ করে কারেন্ট ভোল্টেজ থেকে ৯০° পিছিয়ে থাকে। ইন্ডাক্টিভ রিঅ্যাকট্যান্স XL = 2πfL ফ্রিকোয়েন্সির সাথে বাড়ে (XL ∝ f)। ডিসিতে (f=০) এটি শর্ট সার্কিট (XL = ০) এবং অতি উচ্চ কম্পাঙ্কে ওপেন সার্কিট হিসেবে কাজ করে। এক চক্রে গড় সক্রিয় ক্ষমতা শূন্য (P = ০ W) কারণ চৌম্বক ক্ষেত্রে শক্তি সঞ্চিত হয়ে আবার উৎসে ফেরত যায়।'
  },
  solvedExamples: [
    {
      id: 'ex-ch5-l7-1',
      problem: {
        en: 'A pure inductor of inductance L = 0.159 H is connected across a 230 V, 50 Hz AC supply. Calculate: (a) Inductive reactance XL, (b) RMS current drawn, (c) Peak current, (d) Average active power consumed.',
        hi: 'L = 0.159 H का एक शुद्ध इंडक्टर 230 V, 50 Hz एसी स्रोत से जुड़ा है। गणना करें: (a) इंडक्टिव रिएक्टेंस XL, (b) RMS धारा, (c) शिखर धारा, (d) औसत सक्रिय शक्ति।',
        bn: 'L = ০.১৫৯ H মানের একটি বিশুদ্ধ ইন্ডাক্টর ২৩০ V, ৫০ Hz এসি উৎসের সাথে যুক্ত। নির্ণয় করুন: (a) ইন্ডাক্টিভ রিঅ্যাকট্যান্স XL, (b) আরএমএস কারেন্ট, (c) পিক কারেন্ট, (d) অপচয়িত গড় সক্রিয় ক্ষমতা।'
      },
      solution: {
        en: 'Given:\n- Inductance L = 0.159 H\n- RMS Voltage Vrms = 230 V\n- Frequency f = 50 Hz\n\n(a) Inductive Reactance XL:\nXL = 2πfL = 2 × π × 50 × 0.159 = 50.0 Ω\n\n(b) RMS Current Irms:\nIrms = Vrms / XL = 230 / 50.0 = 4.60 A\n\n(c) Peak Current Im:\nIm = √2 × Irms = 1.4142 × 4.60 = 6.505 A\n\n(d) Average Active Power P:\nP = Vrms × Irms × cos(-90°) = 230 × 4.60 × 0 = 0.0 W.',
        hi: 'हल:\n(a) XL = 2πfL = 2 × π × 50 × 0.159 = 50.0 Ω\n(b) Irms = Vrms / XL = 230 / 50 = 4.60 A\n(c) Im = √2 × 4.60 = 6.51 A\n(d) P = 230 × 4.60 × cos(-90°) = 0.0 W।',
        bn: 'সমাধান:\n(a) XL = 2πfL = ২ × π × ৫০ × ০.১৫৯ = ৫০.০ Ω\n(b) Irms = Vrms / XL = ২৩০ / ৫০ = ৪.৬০ A\n(c) Im = √২ × ৪.৬০ = ৬.৫১ A\n(d) P = ২৩০ × ৪.৬০ × cos(-৯০°) = ০.০ W।'
      },
      finalAnswer: {
        en: 'XL = 50.0 Ω, Irms = 4.60 A, Im = 6.51 A, Active Power P = 0.0 W',
        hi: 'XL = 50.0 Ω, Irms = 4.60 A, Im = 6.51 A, सक्रिय शक्ति P = 0.0 W',
        bn: 'XL = ৫০.০ Ω, Irms = ৪.৬০ A, Im = ৬.৫১ A, সক্রিয় ক্ষমতা P = ০.০ W'
      }
    }
  ],
  sections: [
    {
      id: 'sec-ch5-l7-1',
      title: {
        en: '1. Concept of an Ideal Pure Inductor in AC Circuits',
        hi: '1. एसी परिपथ में आदर्श शुद्ध प्रेरक (Pure Inductor) की अवधारणा',
        bn: '১. এসি বর্তনীতে আদর্শ বিশুদ্ধ আবেশকের (Pure Inductor) ধারণা'
      },
      content: {
        en: 'A pure inductive AC circuit consists of a coil with pure self-inductance L (measured in Henries, H) and strictly zero electrical resistance (R = 0 Ω). In reality, every physical wire coil possesses some internal winding resistance; however, in theoretical circuit analysis and superconducting or heavy copper choke coils, resistance is neglected to isolate purely inductive phenomena.\n\nWhen connected across a sinusoidal alternating voltage source v(t) = Vm · sin(ωt), an alternating current begins to flow through the coil. According to Faraday’s Law of Electromagnetic Induction and Lenz’s Law, any time-varying current produces a changing magnetic flux, which induces a counter-electromotive force (self-induced back EMF) e_L(t) = -L(di/dt) in the coil. This self-induced EMF constantly opposes the rate of change of current, creating an electrical opposition to AC current called Inductive Reactance (XL).',
        hi: 'एक शुद्ध इंडक्टिव एसी परिपथ में एक ऐसा प्रेरक (कॉइल) होता है जिसका स्व-प्रेरकत्व L (हेनरी, H में) होता है और जिसका प्रतिरोध पूरी तरह शून्य (R = 0 Ω) माना जाता है। व्यावहारिक रूप से प्रत्येक तार में कुछ न कुछ आंतरिक प्रतिरोध होता है, किन्तु सैद्धांतिक विश्लेषण में शुद्ध चुंबकीय प्रभावों को समझने के लिए प्रतिरोध को नगण्य माना जाता है।\n\nजब इस प्रेरक पर एक ज्यावक्रीय प्रत्यावर्ती वोल्टेज v(t) = Vm · sin(ωt) लगाया जाता है, तो कॉइल में प्रत्यावर्ती धारा प्रवाहित होने लगती है। फैराडे के विद्युत चुम्बकीय प्रेरण के नियम एवं लेन्ज के नियम के अनुसार, बदलती धारा बदलते चुंबकीय फ्लक्स को जन्म देती है, जिससे कॉइल में एक विरोधी विद्युत वाहक बल (Back EMF) e_L(t) = -L(di/dt) उत्पन्न होता है। यह विरोधी EMF धारा के परिवर्तन की दर का लगातार विरोध करता है, जिसे इंडक्टिव रिएक्टेंस (XL) कहा जाता है।',
        bn: 'একটি বিশুদ্ধ ইন্ডাক্টিভ এসি বর্তনী শুধুমাত্র স্বকীয় আবেশাঙ্ক L (হেনরি, H) বিশিষ্ট একটি কয়েল নিয়ে গঠিত যার বৈদ্যুতিক রোধ সম্পূর্ণরূপে শূন্য (R = ০ Ω)। বাস্তবে কয়েলের তারের নিজস্ব কিছু রোধ থাকে, তবে তাত্ত্বিক সার্কিট বিশ্লেষণে বিশুদ্ধ চৌম্বকীয় প্রভাব পর্যবেক্ষণের জন্য রোধকে শূন্য ধরা হয়।\n\nযখন কয়েলে একটি সাইনোসয়ডাল পরিবর্তনশীল ভোল্টেজ v(t) = Vm · sin(ωt) প্রয়োগ করা হয়, তখন কয়েলের মধ্য দিয়ে পরিবর্তনশীল কারেন্ট প্রবাহিত হয়। ফ্যারাডের তড়িচ্চৌম্বকীয় আবেশ এবং লেঞ্জের সূত্রানুসারে, এই পরিবর্তনশীল কারেন্ট কয়েলে একটি বিপরীত তড়িচ্চালক বল (Back EMF) e_L(t) = -L(di/dt) তৈরি করে। এই ব্যাক-ইএমএফ কারেন্টের পরিবর্তনের হারকে বাধা প্রদান করে, যা ইন্ডাক্টিভ রিঅ্যাকট্যান্স (XL) নামে পরিচিত।'
      },
      schematicId: 'circuit-pure-inductor'
    },
    {
      id: 'sec-ch5-l7-2',
      title: {
        en: '2. Mathematical Derivation of Voltage-Current Phase Lag (90°)',
        hi: '2. वोल्टेज-धारा 90° फेज लैग का गणितीय निगमन',
        bn: '২. ভোল্টেজ-কারেন্ট ৯০° ফেজ ল্যাগের গাণিতিক প্রতিপাদন'
      },
      content: {
        en: 'To establish the quantitative relationship between voltage and current in a pure inductor, we apply Kirchhoff\'s Voltage Law (KVL) around the closed single loop:\n\nv(t) + e_L(t) = 0  ⟹  v(t) - L (di/dt) = 0  ⟹  v(t) = L (di/dt)\n\nSubstituting the sinusoidal applied voltage v(t) = Vm · sin(ωt):\n\nL (di/dt) = Vm · sin(ωt)  ⟹  di = (Vm / L) · sin(ωt) dt\n\nIntegrating both sides with respect to time t:\n\ni(t) = (Vm / L) ∫ sin(ωt) dt = -(Vm / (ωL)) · cos(ωt)\n\nUsing the fundamental trigonometric identity -cos(θ) = sin(θ - 90°) = sin(θ - π/2):\n\ni(t) = (Vm / (ωL)) · sin(ωt - 90°) = Im · sin(ωt - π/2)\n\nWhere the peak current is defined as Im = Vm / (ωL) = Vm / XL, and inductive reactance is XL = ωL = 2πfL (in Ohms, Ω).\n\nPhysical Significance: The resulting equation proves mathematically that in a pure inductive AC circuit, the alternating current i(t) strictly lags behind the applied alternating voltage v(t) by exactly 90° (π/2 radians or a quarter of a full cycle, T/4). The voltage reaches its positive peak first, and current reaches its positive peak 90° later.',
        hi: 'शुद्ध प्रेरक में वोल्टेज और धारा के बीच सटीक संबंध प्राप्त करने के लिए किरचॉफ का वोल्टेज नियम (KVL) लगाते हैं:\n\nv(t) + e_L(t) = 0  ⟹  v(t) = L (di/dt)\n\nप्रत्यावर्ती वोल्टेज v(t) = Vm · sin(ωt) का मान रखने पर:\n\ndi = (Vm / L) · sin(ωt) dt\n\nदोनों पक्षों का समय t के सापेक्ष समाकलन (Integration) करने पर:\n\ni(t) = (Vm / L) ∫ sin(ωt) dt = -(Vm / (ωL)) · cos(ωt)\n\nत्रिकोणमितीय सूत्र -cos(θ) = sin(θ - 90°) का उपयोग करने पर:\n\ni(t) = (Vm / (ωL)) · sin(ωt - 90°) = Im · sin(ωt - π/2)\n\nजहाँ शिखर धारा Im = Vm / (ωL) = Vm / XL, तथा इंडक्टिव रिएक्टेंस XL = ωL = 2πfL (ओम, Ω) है।\n\nभौतिक निष्कर्ष: यह समीकरण सिद्ध करता है कि एक शुद्ध इंडक्टिव परिपथ में प्रत्यावर्ती धारा i(t) आरोपित वोल्टेज v(t) से ठीक 90° (π/2 रेडियन या एक-चौथाई चक्र T/4) पीछे (लैग) रहती है। वोल्टेज पहले अपने शिखर पर पहुँचता है, और धारा 90° बाद शिखर मान प्राप्त करती है।',
        bn: 'বিশুদ্ধ আবেশকে ভোল্টেজ ও কারেন্টের সম্পর্ক নির্ণয়ে কার্শফের ভোল্টেজ সূত্র (KVL) প্রয়োগ করা হয়:\n\nv(t) + e_L(t) = ০  ⟹  v(t) = L (di/dt)\n\nসাইনোসয়ডাল ভোল্টেজ v(t) = Vm · sin(ωt) বসিয়ে পাই:\n\ndi = (Vm / L) · sin(ωt) dt\n\nসময় t এর সাপেক্ষে সমাকলন (ইনটিগ্রেশন) করে:\n\ni(t) = (Vm / L) ∫ sin(ωt) dt = -(Vm / (ωL)) · cos(ωt)\n\nত্রিকোণমিতিক রূপান্তর -cos(θ) = sin(θ - ৯০°) প্রয়োগ করে:\n\ni(t) = (Vm / (ωL)) · sin(ωt - ৯০°) = Im · sin(ωt - π/২)\n\nযেখানে পিক কারেন্ট Im = Vm / (ωL) = Vm / XL, এবং ইন্ডাক্টিভ রিঅ্যাকট্যান্স XL = ωL = 2πfL (ওহম, Ω)।\n\nভৌত তাৎপর্য: এই গাণিতিক সম্পর্কটি প্রমাণ করে যে বিশুদ্ধ ইন্ডাক্টিভ এসি সার্কিটে প্রবাহিত কারেন্ট i(t) সর্বদা প্রযুক্ত ভোল্টেজ v(t) এর চেয়ে ঠিক ৯০° (π/২ রেডিয়ান বা চক্রের এক-চতুর্থাংশ T/4 সময়) পিছিয়ে (ল্যাগ করে) চলে।'
      },
      keyEquations: [
        'v(t) = Vm · sin(ωt)',
        'i(t) = Im · sin(ωt - 90°)',
        'XL = 2πfL = ωL (Ω)',
        'Im = Vm / XL  |  Irms = Vrms / XL',
        'ZL = +j XL = XL ∠ +90° Ω'
      ]
    },
    {
      id: 'sec-ch5-l7-3',
      title: {
        en: '3. Inductive Reactance (XL) and Frequency Dependence',
        hi: '3. इंडक्टिव रिएक्टेंस (XL) एवं आवृत्ति निर्भरता',
        bn: '৩. ইন্ডাক্টিভ রিঅ্যাকট্যান্স (XL) এবং ফ্রিকোয়েন্সি নির্ভরতা'
      },
      content: {
        en: 'Inductive reactance XL is the opposition offered by an inductor to the flow of alternating current. It is expressed in Ohms (Ω) and given by the formula:\n\nXL = 2πfL = ωL\n\nKey Engineering Behaviors Across Frequencies:\n1. Direct Proportionality (XL ∝ f): At higher supply frequencies, current changes much more rapidly (larger di/dt). Consequently, the induced opposing EMF is higher, resulting in directly proportional growth of reactance. If frequency doubles from 50 Hz to 100 Hz, XL exactly doubles.\n\n2. Direct Current Behavior (f = 0 Hz): For a steady DC source, frequency is zero (f = 0). Thus, XL = 2π(0)L = 0 Ω. A pure inductor presents strictly zero opposition to steady direct current once steady state is reached, behaving as an ideal short circuit.\n\n3. High-Frequency Behavior (f → ∞): At extremely high frequencies (e.g. radio frequency RF signals), XL becomes extraordinarily high (XL → ∞ Ω), behaving as an open circuit that effectively chokes and blocks high-frequency AC components (Choke Inductors / RF Filters).',
        hi: 'इंडक्टिव रिएक्टेंस (XL) किसी प्रेरक द्वारा प्रत्यावर्ती धारा के प्रवाह में प्रस्तुत किया गया विरोध है। इसका मात्रक ओम (Ω) होता है और इसका सूत्र है:\n\nXL = 2πfL = ωL\n\nविभिन्न आवृत्तियों पर मुख्य व्यवहार:\n1. सीधा समानुपाती संबंध (XL ∝ f): उच्च आपूर्ति आवृत्ति पर धारा में परिवर्तन बहुत तीव्र होता है (बड़ा di/dt)। अतः प्रेरित विरोधी बैक EMF भी अधिक होता है, जिससे रिएक्टेंस आवृत्ति के समानुपात में बढ़ता है। यदि आवृत्ति 50 Hz से 100 Hz दोगुनी हो जाए, तो XL भी ठीक दोगुना हो जाता है।\n\n2. दिष्ट धारा (DC) पर व्यवहार (f = 0 Hz): स्थिर डीसी के लिए आवृत्ति शून्य होती है (f = 0)। अतः XL = 2π(0)L = 0 Ω। स्थिर अवस्था में शुद्ध प्रेरक डीसी धारा को शून्य विरोध प्रस्तुत करता है और आदर्श शॉर्ट सर्किट की तरह कार्य करता है।\n\n3. उच्च आवृत्ति व्यवहार (f → ∞): अत्यंत उच्च आवृत्तियों पर XL बहुत विशाल हो जाता है (XL → ∞ Ω), जिससे प्रेरक एक ओपन सर्किट की तरह कार्य करके उच्च आवृत्ति एसी सिग्नल को ब्लॉक (चोक) कर देता है।',
        bn: 'ইন্ডাক্টিভ রিঅ্যাকট্যান্স (XL) হলো পরিবর্তনশীল এসি কারেন্ট প্রবাহে আবেশক কর্তৃক সৃষ্ট কার্যকর বাধা। এর একক ওহম (Ω) এবং এর সূত্র:\n\nXL = 2πfL = ωL\n\nবিভিন্ন কম্পাঙ্কে এর আচরণ:\n১. সরাসরি সমানুপাতিক (XL ∝ f): কম্পাঙ্ক বৃদ্ধি পেলে কারেন্ট পরিবর্তনের হার (di/dt) বৃদ্ধি পায়। ফলে উৎপন্ন ব্যাক-ইএমএফ বৃদ্ধি পাওয়ায় রিঅ্যাকট্যান্স সরাসরি সমানুপাতিক হারে বৃদ্ধি পায়। ফ্রিকোয়েন্সি ৫০ Hz থেকে দ্বিগুণ হয়ে ১০০ Hz হলে XL ও দ্বিগুণ হয়।\n\n২. সরাসরি ডিসি প্রবাহে আচরণ (f = ০ Hz): স্থির ডিসি উৎসের জন্য কম্পাঙ্ক শূন্য (f = ০)। অতএব XL = ২π(০)L = ০ Ω। ফলে বিশুদ্ধ আবেশক ডিসির জন্য শূন্য বাধা প্রদান করে এবং শর্ট সার্কিট হিসেবে কাজ করে।\n\n৩. উচ্চ কম্পাঙ্কে আচরণ (f → ∞): অতি উচ্চ ফ্রিকোয়েন্সিতে XL অসীম বা অত্যন্ত বৃহৎ হয়ে যায়, ফলে আবেশক ওপেন সার্কিটের ন্যায় আচরণ করে উচ্চ কম্পাঙ্কের এসি সিগন্যালকে বাধা (ব্লক/চোক) দেয়।'
      }
    },
    {
      id: 'sec-ch5-l7-4',
      title: {
        en: '4. Instantaneous Power, Zero Active Power & Magnetic Energy Storage',
        hi: '4. तात्कालिक शक्ति, शून्य सक्रिय शक्ति एवं चुंबकीय ऊर्जा संचय',
        bn: '৪. তাৎক্ষণিক ক্ষমতা, শূন্য সক্রিয় ক্ষমতা এবং চৌম্বক শক্তি সঞ্চয়'
      },
      content: {
        en: 'The instantaneous power p(t) absorbed by the pure inductor is the product of instantaneous voltage and instantaneous current:\n\np(t) = v(t) · i(t) = [Vm · sin(ωt)] · [Im · sin(ωt - 90°)] = [Vm · sin(ωt)] · [-Im · cos(ωt)]\n\nUsing the double-angle identity sin(2θ) = 2 sin(θ) cos(θ):\n\np(t) = -(Vm · Im / 2) · sin(2ωt) = -Vrms · Irms · sin(2ωt)\n\nCritical Scientific Insights on Inductive Power:\n1. Double-Frequency Oscillation (2f): Instantaneous power oscillates at twice the source frequency (2ω = 4πf). For a 50 Hz system, power pulses at 100 Hz.\n\n2. Zero Average Active Power (P = 0 W): The instantaneous power curve has perfectly symmetrical positive and negative half-cycles. Integrating over one complete period yields an average value of zero:\n\nP = Vrms · Irms · cos(-90°) = Vrms · Irms · (0) = 0 Watts.\nAn ideal inductor consumes zero net active electrical energy and converts zero energy into heat.\n\n3. Magnetic Energy Exchange: During the first quarter-cycle (when v and i have the same polarity, p > 0), electrical energy is drawn from the AC source and stored in the inductor’s magnetic field: W = ½ L [i(t)]². During the next quarter-cycle (when polarity reverses, p < 0), the magnetic field collapses and 100% of the stored energy is returned to the AC generator. This reversible sloshing of energy is quantified as Reactive Power (Q = Vrms · Irms in VAR, lagging).',
        hi: 'शुद्ध प्रेरक द्वारा अवशोषित तात्कालिक शक्ति p(t) तात्कालिक वोल्टेज और धारा का गुणनफल होती है:\n\np(t) = v(t) · i(t) = [Vm · sin(ωt)] · [-Im · cos(ωt)] = -(Vm · Im / 2) · sin(2ωt) = -Vrms · Irms · sin(2ωt)\n\nइंडक्टिव पावर के महत्वपूर्ण वैज्ञानिक तथ्य:\n1. दोगुनी आवृत्ति पर दोलन (2f): तात्कालिक शक्ति स्रोत की आवृत्ति से दोगुनी आवृत्ति पर दोलन करती है (50 Hz प्रणाली में 100 Hz पर)।\n\n2. शून्य औसत सक्रिय शक्ति (P = 0 W): तात्कालिक शक्ति वक्र के धनात्मक और ऋणात्मक अर्ध-चक्र पूर्णतः समान होते हैं। एक पूर्ण चक्र पर औसत शक्ति शून्य होती है:\n\nP = Vrms · Irms · cos(-90°) = 0 वाट।\nएक आदर्श प्रेरक कभी भी सक्रिय शक्ति का क्षय (ऊष्मा के रूप में) नहीं करता।\n\n3. चुंबकीय ऊर्जा विनिमय: पहले चौथाई चक्र में (p > 0) स्रोत से ऊर्जा लेकर चुंबकीय क्षेत्र W = ½ L i² के रूप में संचित होती है। अगले चौथाई चक्र में (p < 0) चुंबकीय फ्लक्स समाप्त होकर 100% ऊर्जा स्रोत को वापस लौट जाती है। इस ऊर्जा के दोलन को रिएक्टिव पावर (Q = V · I VAR, लैगिंग) कहा जाता है।',
        bn: 'বিশুদ্ধ আবেশকে শোষিত তাৎক্ষণিক ক্ষমতা p(t) হলো তাৎক্ষণিক ভোল্টেজ ও কারেন্টের গুণফল:\n\np(t) = v(t) · i(t) = [Vm · sin(ωt)] · [-Im · cos(ωt)] = -(Vm · Im / ২) · sin(২ωt) = -Vrms · Irms · sin(২ωt)\n\nপাওয়ার সম্পর্কিত মূল সিদ্ধান্তসমূহ:\n১. দ্বিগুণ কম্পাঙ্কে স্পন্দন (2f): তাৎক্ষণিক ক্ষমতা মূল এসি উৎসের দ্বিগুণ ফ্রিকোয়েন্সিতে স্পন্দিত হয় (৫০ Hz উৎসের জন্য ১০০ Hz)।\n\n২. শূন্য গড় সক্রিয় ক্ষমতা (P = ০ W): তাৎক্ষণিক পাওয়ার তরঙ্গের ধনাত্মক ও ঋণাত্মক উভয় অর্ধাংশ সম্পূর্ণ সমান ক্ষেত্রফলবিশিষ্ট। ফলে এক পূর্ণ চক্রে গড় সক্রিয় ক্ষমতা:\n\nP = Vrms · Irms · cos(-৯০°) = ০ ওয়াট।\nএকটি আদর্শ আবেশক কার্যকরভাবে কোনো শক্তি অপচয় বা তাপে রূপান্তর করে না।\n\n৩. চৌম্বক শক্তি বিনিময়: চক্রের প্রথম এক-চতুর্থাংশে কয়েলে চৌম্বক ক্ষেত্র W = ½ L i² তৈরি হয়ে শক্তি সঞ্চিত হয় (p > ০)। পরবর্তী এক-চতুর্থাংশে চৌম্বক ক্ষেত্র ভেঙে পড়ে সঞ্চিত শক্তি সম্পূর্ণ উৎসে ফিরে যায় (p < ০)। এই শক্তি আদান-প্রদানকে রিঅ্যাক্টিভ ক্ষমতা (Q = V · I VAR) বলে।'
      },
      keyEquations: [
        'p(t) = -Vrms · Irms · sin(2ωt)',
        'P_avg = Vrms · Irms · cos(-90°) = 0 W',
        'Power Factor = cos(-90°) = 0.0 (Lagging)',
        '|Q| = Vrms · Irms (VAR, Lagging)',
        'W_max = ½ L Im² (Joules)'
      ]
    }
  ],
  formulas: [
    {
      symbol: 'X_L',
      expression: 'X_L = 2 · \\pi · f · L = \\omega · L',
      description: {
        en: 'Inductive Reactance: calculates the opposition in Ohms offered by an inductor of inductance L at frequency f.',
        hi: 'इंडक्टिव रिएक्टेंस: आवृत्ति f पर L प्रेरकत्व वाले प्रेरक द्वारा प्रस्तुत विरोध (ओम में) की गणना करता है।',
        bn: 'ইন্ডাক্টিভ রিঅ্যাকট্যান্স: f কম্পাঙ্কে L মানের আবেশকের ওহমিক বাধা গণনা করে।'
      }
    },
    {
      symbol: 'I_{rms}',
      expression: 'I_{rms} = \\frac{V_{rms}}{X_L} = \\frac{V_{rms}}{2\\pi f L}',
      description: {
        en: 'Inductive RMS Current: determines the effective alternating current flowing through the inductor from RMS voltage and reactance.',
        hi: 'इंडक्टिव RMS धारा: RMS वोल्टेज और रिएक्टेंस से प्रेरक में प्रवाहित होने वाली प्रभावी प्रत्यावर्ती धारा की गणना करता है।',
        bn: 'ইন্ডাক্টিভ আরএমএস কারেন্ট: আরএমএস ভোল্টেজ ও রিঅ্যাকট্যান্সের সাহায্যে আবেশকে প্রবাহিত কার্যকরী কারেন্ট নির্ণয় করে।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'AC Filter Chokes: Used in rectifier power supplies to attenuate high-frequency AC ripple while freely passing pure DC.',
      'Fluorescent Lamp Ballasts: Traditional inductive ballasts limit operating lamp arc current without wasting power as heat (unlike resistors).',
      'Induction Motors & Transformers: Stator and primary windings operate primarily on inductive magnetization principles.',
      'Current-Limiting Reactors: Heavy industrial air-core reactors installed in substations to limit prospective short-circuit fault currents.'
    ],
    hi: [
      'एसी फिल्टर चोक: रेक्टिफायर पावर सप्लाई में उच्च आवृत्ति एसी रिपल को रोककर शुद्ध डीसी को आगे जाने देने के लिए।',
      'फ्लोरोसेंट लैंप बैलास्ट: पारंपरिक चोक कॉइल बिना ऊष्मा अपव्यय किए लैंप करंट को सुरक्षित रूप से सीमित करती है।',
      'इंडक्शन मोटर और ट्रांसफार्मर: इनके प्राथमिक वाइंडिंग चुंबकीय फ्लक्स स्थापित करने के लिए शुद्ध प्रेरकत्व सिद्धांत पर कार्य करते हैं।',
      'करंट-लिमिटिंग रिएक्टर: सबस्टेशनों में शॉर्ट-सर्किट फॉल्ट करंट को सुरक्षित सीमा में रखने के लिए स्थापित विशाल रिएक्टर।'
    ],
    bn: [
      'এসি ফিল্টার চোক: রেকটিফায়ার পাওয়ার সাপ্লাইয়ে উচ্চ কম্পাঙ্কের এসি রিপল দমন করে বিশুদ্ধ ডিসি নির্গমনে ব্যবহৃত হয়।',
      'টিউবলাইট ব্যালাস্ট: রোধকের মতো তাপ অপচয় না করে নিরাপদ কারেন্ট নিয়ন্ত্রক হিসেবে কাজ করে।',
      'ইন্ডাকশন মোটর ও ট্রান্সফরমার: প্রাইমারি ওয়াইন্ডিংয়ে চৌম্বক ফ্লাক্স তৈরিতে আবেশক ক্রিয়া ব্যবহৃত হয়।',
      'কারেন্ট লিমিটিং রিঅ্যাক্টর: সাবস্টেশনে শর্ট-সার্কিট ত্রুটির সময় বিপজ্জনক অতিরিক্ত কারেন্ট নিয়ন্ত্রণে ব্যবহৃত হয়।'
    ]
  },
  importantPoints: {
    en: [
      'In a pure inductor, current strictly lags applied voltage by 90° (φ = -90° or -π/2 radians).',
      'Inductive reactance XL = 2πfL is directly proportional to frequency (XL ∝ f).',
      'An ideal inductor acts as a short circuit (XL = 0 Ω) to direct current (DC, f = 0 Hz).',
      'Average active power dissipated is strictly zero (P = 0 W, Power Factor = 0.0 lagging).',
      'Instantaneous power oscillates at twice the supply frequency (2f) between +V·I and -V·I.'
    ],
    hi: [
      'शुद्ध प्रेरक में धारा वोल्टेज से ठीक 90° पीछे (लैग) रहती है (φ = -90°)।',
      'इंडक्टिव रिएक्टेंस XL = 2πfL आवृत्ति के सीधे समानुपाती होता है (XL ∝ f)।',
      'स्थिर दिष्ट धारा (DC, f = 0 Hz) के लिए आदर्श प्रेरक शॉर्ट सर्किट (XL = 0 Ω) का कार्य करता है।',
      'औसत सक्रिय शक्ति क्षय शून्य होता है (P = 0 W, पावर फैक्टर = 0.0 लैगिंग)।',
      'तात्कालिक शक्ति आपूर्ति आवृत्ति की दोगुनी आवृत्ति (2f) पर दोलन करती है।'
    ],
    bn: [
      'বিশুদ্ধ আবেশকে প্রবাহিত কারেন্ট ভোল্টেজের চেয়ে ঠিক ৯০° পিছিয়ে (ল্যাগ করে) থাকে (φ = -৯০°)।',
      'ইন্ডাক্টিভ রিঅ্যাকট্যান্স XL = 2πfL ফ্রিকোয়েন্সির সরাসরি সমানুপাতিক (XL ∝ f)।',
      'স্থির ডিসি (f = ০ Hz) উৎসের জন্য আদর্শ আবেশক শর্ট সার্কিট (XL = ০ Ω) হিসেবে কাজ করে।',
      'গড় সক্রিয় ক্ষমতা ক্ষয় শূন্য (P = ০ W, পাওয়ার ফ্যাক্টর = ০.০ ল্যাগিং)।',
      'তাৎক্ষণিক ক্ষমতা মূল কম্পাঙ্কের দ্বিগুণ (2f) হারে স্পন্দিত হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing phase direction: saying "voltage lags current" instead of the correct fact that "current lags voltage by 90°" (remember mnemonic ELI: E leads I in L).',
      'Assuming an inductor dissipates active thermal energy: an ideal inductor consumes 0 Watts; energy is stored in magnetic fields, not converted to heat.',
      'Forgetting that XL depends on frequency: assuming an inductor behaves the same at 50 Hz as at 500 Hz or DC.'
    ],
    hi: [
      'फेज दिशा में भ्रम: "वोल्टेज धारा से लैग करता है" कहना, जबकि सही तथ्य यह है कि "धारा वोल्टेज से 90° लैग करती है" (याद रखें ELI: L में E आगे है I से)।',
      'यह मान लेना कि प्रेरक ऊष्मा पैदा करता है: आदर्श प्रेरक 0 वाट सक्रिय शक्ति लेता है; ऊर्जा केवल चुंबकीय रूप में संचित होती है।',
      'यह भूल जाना कि XL आवृत्ति पर निर्भर करता है: 50 Hz और 500 Hz पर विरोध अलग-अलग होगा।'
    ],
    bn: [
      'ফেজের দিক গুলিয়ে ফেলা: কারেন্ট ভোল্টেজের চেয়ে ৯০° পিছিয়ে থাকে, ভোল্টেজ নয় (স্মরণ রাখুন ELI: L-এ E বা ভোল্টেজ I এর চেয়ে এগিয়ে)।',
      'মনে করা আবেশক তাপ শক্তি অপচয় করে: একটি আদর্শ আবেশক ০ ওয়াট শক্তি ব্যয় করে; শক্তি শুধু চৌম্বক ক্ষেত্রে জমা থাকে।',
      'XL এর ফ্রিকোয়েন্সি নির্ভরতা উপেক্ষা করা: ৫০ Hz এবং ৫০০ Hz এ এর বাধা সম্পূর্ণ ভিন্ন হবে।'
    ]
  },
  mcqs: [
    {
      id: 'quiz-ch5-l7-1',
      question: {
        en: 'In a pure inductive AC circuit, the phase relationship between current and voltage is:',
        hi: 'एक शुद्ध इंडक्टिव एसी परिपथ में धारा और वोल्टेज के बीच फेज संबंध क्या होता है?',
        bn: 'একটি বিশুদ্ধ ইন্ডাক্টিভ এসি সার্কিটে কারেন্ট ও ভোল্টেজের মধ্যকার ফেজ সম্পর্ক কোনটি?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Current lags voltage by 90° (π/2 rad)', hi: 'धारा वोल्टेज से 90° लैग करती है', bn: 'কারেন্ট ভোল্টেজের চেয়ে ৯০° ল্যাগ করে' } },
        { id: 'opt-b', text: { en: 'Current leads voltage by 90° (π/2 rad)', hi: 'धारा वोल्टेज से 90° लीड करती है', bn: 'কারেন্ট ভোল্টেজের চেয়ে ৯০° লিড করে' } },
        { id: 'opt-c', text: { en: 'Current is in phase with voltage (0°)', hi: 'धारा और वोल्टेज समान फेज में होते हैं (0°)', bn: 'কারেন্ট ও ভোল্টেজ একই ফেজে থাকে (০°)' } },
        { id: 'opt-d', text: { en: 'Current lags voltage by 180° (π rad)', hi: 'धारा वोल्टेज से 180° लैग करती है', bn: 'কারেন্ট ভোল্টেজের চেয়ে ১৮০° ল্যাগ করে' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'By Faraday\'s and Lenz\'s laws, back EMF causes current i(t) = Im sin(ωt - 90°), which strictly lags voltage by 90° (ELI mnemonic).',
        hi: 'फैराडे और लेन्ज के नियम के अनुसार i(t) = Im sin(ωt - 90°) होता है, जिससे धारा वोल्टेज से ठीक 90° पीछे (लैग) रहती है।',
        bn: 'ফ্যারাডে ও লেঞ্জের সূত্রানুযায়ী ব্যাক-ইএমএফ এর কারণে কারেন্ট i(t) = Im sin(ωt - ৯০°), যা ভোল্টেজের চেয়ে ৯০° ল্যাগ করে।'
      }
    },
    {
      id: 'quiz-ch5-l7-2',
      question: {
        en: 'If the AC supply frequency connected to a pure inductor is tripled (3f), its inductive reactance (XL) will:',
        hi: 'यदि किसी शुद्ध प्रेरक से जुड़े एसी स्रोत की आवृत्ति तीन गुनी (3f) कर दी जाए, तो इसका इंडक्टिव रिएक्टेंस (XL):',
        bn: 'বিশুদ্ধ আবেশকে যুক্ত এসি উৎসের কম্পাঙ্ক তিনগুণ (3f) করা হলে এর ইন্ডাক্টিভ রিঅ্যাকট্যান্স (XL):'
      },
      options: [
        { id: 'opt-a', text: { en: 'Become 3 times larger', hi: '3 गुना बढ़ जाएगा', bn: '৩ গুণ বৃদ্ধি পাবে' } },
        { id: 'opt-b', text: { en: 'Reduce to one-third (1/3)', hi: 'एक-तिहाई (1/3) रह जाएगा', bn: 'এক-তৃতীয়াংশ (১/৩) হবে' } },
        { id: 'opt-c', text: { en: 'Remain unchanged', hi: 'अपरिवर्तित रहेगा', bn: 'অপরিবর্তিত থাকবে' } },
        { id: 'opt-d', text: { en: 'Become 9 times larger', hi: '9 गुना बढ़ जाएगा', bn: '৯ গুণ বৃদ্ধি পাবে' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Since XL = 2πfL, reactance is directly proportional to frequency (XL ∝ f). Tripling f triples XL.',
        hi: 'चूँकि XL = 2πfL होता है, अतः XL आवृत्ति के सीधे समानुपाती है। f को 3 गुना करने पर XL भी 3 गुना हो जाएगा।',
        bn: 'যেহেতু XL = 2πfL, তাই রিঅ্যাকট্যান্স ফ্রিকোয়েন্সির সরাসরি সমানুপাতিক। f তিনগুণ হলে XL ও ৩ গুণ হবে।'
      }
    },
    {
      id: 'quiz-ch5-l7-3',
      question: {
        en: 'The average active power (P) dissipated by a pure inductor connected across a 230 V, 50 Hz AC supply is:',
        hi: '230 V, 50 Hz एसी स्रोत से जुड़े शुद्ध प्रेरक द्वारा क्षयित औसत सक्रिय शक्ति (P) कितनी होती है?',
        bn: '২৩০ V, ৫০ Hz এসি উৎসের সাথে যুক্ত একটি বিশুদ্ধ আবেশকের অপচয়িত গড় সক্রিয় ক্ষমতা কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '0 Watts', hi: '0 वाट', bn: '০ ওয়াট' } },
        { id: 'opt-b', text: { en: '230 Watts', hi: '230 वाट', bn: '২৩০ ওয়াট' } },
        { id: 'opt-c', text: { en: '115 Watts', hi: '115 वाट', bn: '১১৫ ওয়াট' } },
        { id: 'opt-d', text: { en: 'Infinity', hi: 'अनंत', bn: 'অসীম' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'P = V · I · cos(φ). For a pure inductor, φ = -90°, so cos(-90°) = 0.0. Average active power is strictly 0 W.',
        hi: 'P = V · I · cos(-90°) = V · I · (0) = 0 W। शुद्ध प्रेरक कोई सक्रिय शक्ति नष्ट नहीं करता।',
        bn: 'P = V · I · cos(-৯০°) = ০ W। বিশুদ্ধ আবেশকে গড় সক্রিয় ক্ষমতার কোনো অপচয় হয় না।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch5-l7-1',
      question: {
        en: 'A pure inductor having an inductance of L = 0.318 H (approx 1/π H) is connected across a 230 V, 50 Hz AC supply. Calculate: (a) Inductive reactance XL, (b) RMS current Irms, (c) Peak current Im, (d) Active power P, (e) Reactive power Q, (f) Write the instantaneous equations for voltage v(t) and current i(t).',
        hi: 'L = 0.318 H (लगभग 1/π H) का एक शुद्ध प्रेरक 230 V, 50 Hz एसी स्रोत से जुड़ा है। गणना करें: (a) इंडक्टिव रिएक्टेंस XL, (b) RMS धारा Irms, (c) शिखर धारा Im, (d) सक्रिय शक्ति P, (e) रिएक्टिव शक्ति Q, (f) वोल्टेज v(t) एवं धारा i(t) के तात्कालिक समीकरण लिखें।',
        bn: 'L = ০.৩১৮ H মানের একটি বিশুদ্ধ আবেশক ২৩০ V, ৫০ Hz এসি লাইনের সাথে সংযুক্ত। নির্ণয় করুন: (a) ইন্ডাক্টিভ রিঅ্যাকট্যান্স XL, (b) আরএমএস কারেন্ট Irms, (c) শীর্ষ কারেন্ট Im, (d) সক্রিয় ক্ষমতা P, (e) রিঅ্যাক্টিভ ক্ষমতা Q, (f) ভোল্টেজ v(t) ও কারেন্ট i(t) এর তাৎক্ষণিক সমীকরণ।'
      },
      hint: {
        en: 'XL = 2 · π · 50 · 0.318 = 100 Ω. Irms = 230 / 100 = 2.3 A. Im = √2 · 2.3 = 3.25 A. Vm = √2 · 230 = 325.27 V. P = 0 W. Q = 230 × 2.3 = 529 VAR lagging.',
        hi: 'XL = 2π × 50 × 0.318 = 100 Ω। Irms = 230 / 100 = 2.3 A। Im = 2.3 × √2 = 3.25 A। v(t) = 325.3 sin(314.16 t), i(t) = 3.25 sin(314.16 t - 90°)।',
        bn: 'XL = ২π × ৫০ × ০.৩১৮ = ১০০ Ω। Irms = ২৩০ / ১০০ = ২.৩ A। Im = ২.৩ × √২ = ৩.২৫ A। P = ০ W, Q = ৫২৯ VAR ল্যাগিং।'
      },
      answerKey: {
        en: '(a) Inductive Reactance XL = 2πfL = 2 × π × 50 × 0.3183 = 100.0 Ω.\n(b) RMS Current Irms = Vrms / XL = 230 / 100.0 = 2.30 A.\n(c) Peak Current Im = √2 × Irms = 1.4142 × 2.30 = 3.253 A.\n(d) Active Power P = Vrms · Irms · cos(-90°) = 230 × 2.30 × 0 = 0.0 W.\n(e) Reactive Power Q = Vrms · Irms = 230 × 2.30 = 529.0 VAR (Lagging).\n(f) Peak voltage Vm = √2 × 230 = 325.27 V, ω = 2π(50) = 314.16 rad/s.\n  v(t) = 325.27 sin(314.16 t) V\n  i(t) = 3.253 sin(314.16 t - 90°) A (or -3.253 cos(314.16 t) A).',
        hi: '(a) इंडक्टिव रिएक्टेंस XL = 2π(50)(0.318) = 100 Ω।\n(b) RMS धारा Irms = 230 / 100 = 2.30 A।\n(c) शिखर धारा Im = √2 × 2.30 = 3.25 A।\n(d) सक्रिय शक्ति P = 0 W।\n(e) रिएक्टिव शक्ति Q = 230 × 2.30 = 529 VAR (लैगिंग)।\n(f) v(t) = 325.3 sin(314.16 t) V, i(t) = 3.25 sin(314.16 t - 90°) A।',
        bn: '(a) ইন্ডাক্টিভ রিঅ্যাকট্যান্স XL = ২π × ৫০ × ০.৩১৮ = ১০০ Ω।\n(b) আরএমএস কারেন্ট Irms = ২৩০ / ১০০ = ২.৩০ A।\n(c) পিক কারেন্ট Im = √২ × ২.৩০ = ৩.২৫ A।\n(d) সক্রিয় ক্ষমতা P = ০ W।\n(e) রিঅ্যাক্টিভ ক্ষমতা Q = ৫২৯ VAR (ল্যাগিং)।\n(f) v(t) = ৩২৫.৩ sin(৩১৪.১৬ t) V, i(t) = ৩.২৫ sin(৩১৪.১৬ t - ৯০°) A।'
      }
    }
  ]
};

export const LESSON_AC_CAPACITOR: Lesson = {
  id: 'lsn-ch5-ac-capacitor',
  topicId: 'ch5-ac-capacitor',
  chapterId: 'ch-alternating-current',
  order: 8,
  title: {
    en: 'Pure Capacitive AC Circuit',
    hi: 'शुद्ध कैपेसिटिव एसी परिपथ',
    bn: 'বিশুদ্ধ ক্যাপাসিটিভ এসি বর্তনী'
  },
  description: {
    en: 'In-depth engineering analysis of pure capacitive AC circuits: capacitive reactance XC = 1/(2πfC), current leading voltage by 90°, electrostatic field energy exchange, zero active power dissipation, and DC blocking behavior.',
    hi: 'शुद्ध कैपेसिटिव एसी परिपथ का गहन इंजीनियरिंग विश्लेषण: कैपेसिटिव रिएक्टेंस XC = 1/(2πfC), धारा का वोल्टेज से 90° लीड, स्थिरवैद्युत क्षेत्र ऊर्जा विनिमय, शून्य सक्रिय शक्ति एवं डीसी ब्लॉकिंग व्यवहार।',
    bn: 'বিশুদ্ধ ক্যাপাসিটিভ এসি বর্তনীর পূর্ণাঙ্গ বিশ্লেষণ: ক্যাপাসিটিভ রিঅ্যাকট্যান্স XC = 1/(2πfC), কারেন্টের ভোল্টেজের তুলনায় ৯০° অগ্রগমন (লিড), স্থিরবৈদ্যুতিক শক্তি বিনিময়, শূন্য সক্রিয় ক্ষমতা অপচয় এবং ডিসি ব্লকিং বৈশিষ্ট্য।'
  },
  estimatedMinutes: 28,
  easyExplanation: {
    en: 'A capacitor stores energy in an electric field between two conductive plates. When connected to an AC supply, the continuous charging and discharging creates an alternating current. In a pure capacitor, current leads the applied voltage by exactly 90 degrees (one quarter of a cycle). The opposition to AC current is Capacitive Reactance XC = 1/(2πfC). A capacitor blocks DC (f=0) completely, while easily passing high-frequency AC. An ideal capacitor consumes zero average active power.',
    hi: 'कैपेसिटर दो प्लेटों के बीच विद्युत क्षेत्र में ऊर्जा संचित करता है। एसी स्रोत से जुड़ने पर लगातार चार्जिंग और डिस्चार्जिंग से धारा बहती है। शुद्ध कैपेसिटर में धारा वोल्टेज से ठीक 90° आगे (लीड) रहती है। इसके विरोध को कैपेसिटिव रिएक्टेंस XC = 1/(2πfC) कहते हैं। कैपेसिटर डीसी को पूरी तरह ब्लॉक करता है तथा उच्च आवृत्ति एसी को आसानी से जाने देता है। यह शून्य सक्रिय शक्ति खर्च करता है।',
    bn: 'ক্যাপাসিটর দুটি পরিবাহী পাতের মাঝে বৈদ্যুতিক ক্ষেত্রে শক্তি জমা রাখে। এসি উৎসের সাথে যুক্ত হলে ক্রমাগত চার্জ ও ডিসচার্জের মাধ্যমে কারেন্ট প্রবাহিত হয়। বিশুদ্ধ ক্যাপাসিটরে কারেন্ট ভোল্টেজের চেয়ে ঠিক ৯০° এগিয়ে (লিড করে) থাকে। কারেন্ট প্রবাহে এর ওহমিক বাধাকে ক্যাপাসিটিভ রিঅ্যাকট্যান্স XC = 1/(2πfC) বলা হয়। ক্যাপাসিটর ডিসি প্রবাহকে সম্পূর্ণ ব্লক করে কিন্তু উচ্চ কম্পাঙ্কের এসি সহজেই প্রবাহিত হতে দেয়।'
  },
  detailedExplanation: {
    en: 'In a purely capacitive AC circuit with ideal capacitance C, charge is q(t) = C·v(t) = C·Vm·sin(ωt). The current is i(t) = dq/dt = ωC·Vm·cos(ωt) = Im·sin(ωt + 90°), proving current leads voltage by 90° (+π/2 radians). Capacitive reactance XC = 1/(ωC) = 1/(2πfC) in Ohms is inversely proportional to frequency (XC ∝ 1/f). At DC (f=0), XC → ∞ Ω (open circuit); at very high frequencies, XC → 0 Ω (short circuit). Average active power over a complete period is zero (P = V·I·cos(+90°) = 0 W), as energy is reversibly stored in the electrostatic field during charging and returned to the source during discharging.',
    hi: 'शुद्ध कैपेसिटिव एसी परिपथ में आवेश q(t) = C·v(t) होता है। धारा i(t) = dq/dt = ωC·Vm·cos(ωt) = Im·sin(ωt + 90°) होती है, जो सिद्ध करती है कि धारा वोल्टेज से 90° आगे रहती है। कैपेसिटिव रिएक्टेंस XC = 1/(2πfC) आवृत्ति के व्युत्क्रमानुपाती (XC ∝ 1/f) है। डीसी (f=0) पर यह ओपन सर्किट (XC = ∞) और उच्च आवृत्ति पर शॉर्ट सर्किट (XC → 0) की तरह कार्य करता है। औसत सक्रिय शक्ति शून्य (P = 0 W) होती है क्योंकि ऊर्जा स्थिरवैद्युत क्षेत्र में चक्रीय रूप से संचित होकर पुनः स्रोत को लौट जाती है।',
    bn: 'বিশুদ্ধ ক্যাপাসিটিভ এসি সার্কিটে চার্জ q(t) = C·v(t)। কারেন্ট i(t) = dq/dt = ωC·Vm·cos(ωt) = Im·sin(ωt + ৯০°), যা প্রমাণ করে কারেন্ট ভোল্টেজ থেকে ৯০° এগিয়ে থাকে। ক্যাপাসিটিভ রিঅ্যাকট্যান্স XC = 1/(2πfC) ফ্রিকোয়েন্সির ব্যস্তানুপাতিক (XC ∝ 1/f)। ডিসিতে (f=০) এটি ওপেন সার্কিট (XC = ∞) এবং অতি উচ্চ কম্পাঙ্কে শর্ট সার্কিট (XC → ০) হিসেবে কাজ করে। গড় সক্রিয় ক্ষমতা শূন্য (P = ০ W) কারণ স্থিরবৈদ্যুতিক ক্ষেত্রে শক্তি সঞ্চিত হয়ে আবার উৎসে ফেরত যায়।'
  },
  solvedExamples: [
    {
      id: 'ex-ch5-l8-1',
      problem: {
        en: 'A pure capacitor of capacitance C = 31.83 µF is connected across a 230 V, 50 Hz AC supply. Calculate: (a) Capacitive reactance XC, (b) RMS current drawn, (c) Peak current, (d) Average active power consumed.',
        hi: '31.83 µF धारिता का एक शुद्ध कैपेसिटर 230 V, 50 Hz एसी स्रोत से जुड़ा है। गणना करें: (a) कैपेसिटिव रिएक्टेंस XC, (b) RMS धारा, (c) शिखर धारा, (d) औसत सक्रिय शक्ति।',
        bn: '৩১.৮৩ µF মানের একটি বিশুদ্ধ ক্যাপাসিটর ২৩০ V, ৫০ Hz এসি উৎসের সাথে যুক্ত। নির্ণয় করুন: (a) ক্যাপাসিটিভ রিঅ্যাকট্যান্স XC, (b) আরএমএস কারেন্ট, (c) পিক কারেন্ট, (d) অপচয়িত গড় সক্রিয় ক্ষমতা।'
      },
      solution: {
        en: 'Given:\n- Capacitance C = 31.83 µF = 31.83 × 10⁻⁶ F\n- RMS Voltage Vrms = 230 V\n- Frequency f = 50 Hz\n\n(a) Capacitive Reactance XC:\nXC = 1 / (2πfC) = 1 / (2 × π × 50 × 31.83 × 10⁻⁶) = 100.0 Ω\n\n(b) RMS Current Irms:\nIrms = Vrms / XC = 230 / 100.0 = 2.30 A\n\n(c) Peak Current Im:\nIm = √2 × Irms = 1.4142 × 2.30 = 3.253 A\n\n(d) Average Active Power P:\nP = Vrms × Irms × cos(+90°) = 230 × 2.30 × 0 = 0.0 W.',
        hi: 'हल:\n(a) XC = 1 / (2π × 50 × 31.83×10⁻⁶) = 100.0 Ω\n(b) Irms = Vrms / XC = 230 / 100 = 2.30 A\n(c) Im = √2 × 2.30 = 3.25 A\n(d) P = 230 × 2.30 × cos(+90°) = 0.0 W।',
        bn: 'সমাধান:\n(a) XC = ১ / (২π × ৫০ × ৩১.৮৩×১০⁻⁶) = ১০০.০ Ω\n(b) Irms = Vrms / XC = ২৩০ / ১০০ = ২.৩০ A\n(c) Im = √২ × ২.৩০ = ৩.২৫ A\n(d) P = ২৩০ × ২.৩০ × cos(+৯০°) = ০.০ W।'
      },
      finalAnswer: {
        en: 'XC = 100.0 Ω, Irms = 2.30 A, Im = 3.25 A, Active Power P = 0.0 W',
        hi: 'XC = 100.0 Ω, Irms = 2.30 A, Im = 3.25 A, सक्रिय शक्ति P = 0.0 W',
        bn: 'XC = ১০০.০ Ω, Irms = ২.৩০ A, Im = ৩.২৫ A, সক্রিয় ক্ষমতা P = ০.০ W'
      }
    }
  ],
  sections: [
    {
      id: 'sec-ch5-l8-1',
      title: {
        en: '1. Concept of an Ideal Pure Capacitor in AC Circuits',
        hi: '1. एसी परिपथ में आदर्श शुद्ध संधारित्र (Pure Capacitor) की अवधारणा',
        bn: '১. এসি বর্তনীতে আদর্শ বিশুদ্ধ ধারকের (Pure Capacitor) ধারণা'
      },
      content: {
        en: 'A pure capacitive AC circuit comprises a capacitor of capacitance C (measured in Farads, F) separated by an ideal dielectric having infinite insulation resistance (leakage resistance R_leak = ∞ Ω) and strictly zero series lead resistance (ESR = 0 Ω).\n\nWhen connected to a constant DC source, a capacitor draws current only briefly until charged to the source voltage, after which the steady DC current drops to zero because the dielectric forms a physical open circuit. However, when connected to an alternating voltage source v(t) = Vm · sin(ωt), the continuous rise and fall of applied voltage forces electric charge q(t) to flow continuously back and forth between the conductive plates. This continuous charging and discharging constitutes alternating current flow in the external circuit, even though no electrons actually pass across the insulating dielectric.',
        hi: 'एक शुद्ध कैपेसिटिव एसी परिपथ में एक ऐसा संधारित्र (कैपेसिटर) होता है जिसकी धारिता C (फैराड, F) होती है और जिसकी प्लेटों के बीच का परावैद्युत (Dielectric) पूर्णतः आदर्श होता है (अनंत इन्सुलेशन प्रतिरोध R_leak = ∞ Ω तथा शून्य समतुल्य श्रेणी प्रतिरोध ESR = 0 Ω)।\n\nजब संधारित्र को किसी डीसी स्रोत से जोड़ा जाता है, तो वह केवल चार्ज होने तक क्षणिक धारा लेता है और फिर पूर्णतः धारा को रोक देता है (ओपन सर्किट बन जाता है)। किन्तु जब इस पर प्रत्यावर्ती वोल्टेज v(t) = Vm · sin(ωt) लगाया जाता है, तो वोल्टेज के निरंतर बदलने के कारण संधारित्र की प्लेटों पर आवेश q(t) लगातार घटता-बढ़ता रहता है। इस निरंतर चार्जिंग और डिस्चार्जिंग प्रक्रिया के कारण बाह्य परिपथ में निरंतर एसी धारा प्रवाहित होती रहती है, यद्यपि कोई भी इलेक्ट्रॉन परावैद्युत माध्यम के आर-पार नहीं जाता।',
        bn: 'একটি বিশুদ্ধ ক্যাপাসিটিভ এসি বর্তনী C ধারকত্ববিশিষ্ট (ফ্যারাড, F) একটি ক্যাপাসিটর নিয়ে গঠিত যার দুই পাতের মাঝের ডাই-ইলেকট্রিক মাধ্যমটি সম্পূর্ণ ত্রুটিহীন (অসীম ইনসুলেশন রোধ R_leak = ∞ Ω এবং শূন্য অভ্যন্তরীণ রোধ ESR = ০ Ω)।\n\nস্থির ডিসি উৎসের সাথে যুক্ত থাকলে ক্যাপাসিটরটি চার্জ হওয়া পর্যন্ত ক্ষণিকের জন্য কারেন্ট নেয় এবং পূর্ণ চার্জিত হয়ে ডিসি কারেন্ট সম্পূর্ণ বন্ধ করে দেয় (ওপেন সার্কিট হিসেবে থাকে)। কিন্তু যখন পরিবর্তনশীল এসি ভোল্টেজ v(t) = Vm · sin(ωt) প্রয়োগ করা হয়, তখন ভোল্টেজের ক্রমাগত হ্রাস-বৃদ্ধির ফলে ক্যাপাসিটরের পাতে চার্জ q(t) অনবরত জমা ও নির্গত হতে থাকে। এই অবিরাম চার্জ ও ডিসচার্জ প্রক্রিয়ার ফলেই বহিস্থ সার্কিটে নিরবচ্ছিন্ন এসি কারেন্ট প্রবাহিত হয়।'
      },
      schematicId: 'circuit-pure-capacitor'
    },
    {
      id: 'sec-ch5-l8-2',
      title: {
        en: '2. Mathematical Derivation of Voltage-Current Phase Lead (+90°)',
        hi: '2. वोल्टेज-धारा +90° फेज लीड का गणितीय निगमन',
        bn: '২. ভোল্টেজ-কারেন্ট +৯০° ফেজ লিডের গাণিতিক প্রতিপাদন'
      },
      content: {
        en: 'At any instant of time t, the electric charge stored on the capacitor plates is proportional to the instantaneous voltage v(t) across it:\n\nq(t) = C · v(t) = C · [Vm · sin(ωt)]\n\nBy fundamental definition, electric current is the time rate of change of electric charge:\n\ni(t) = dq/dt = d/dt [C · Vm · sin(ωt)] = C · Vm · ω · cos(ωt)\n\nUsing the fundamental trigonometric identity cos(θ) = sin(θ + 90°) = sin(θ + π/2):\n\ni(t) = (ω C Vm) · sin(ωt + 90°) = [Vm / (1 / (ωC))] · sin(ωt + π/2)\n\nDefining Capacitive Reactance as XC = 1 / (ωC) = 1 / (2πfC) (in Ohms, Ω), and peak current as Im = Vm / XC:\n\ni(t) = Im · sin(ωt + 90°) = Im · sin(ωt + π/2)\n\nPhysical Significance: In a pure capacitive circuit, alternating current i(t) strictly leads the applied voltage v(t) by exactly 90° (+π/2 radians or a quarter of a period, T/4). When the voltage is passing through zero and rising at maximum speed (maximum dv/dt), the current is already at its positive peak.',
        hi: 'किसी भी क्षण t पर संधारित्र प्लेटों पर संचित आवेश उस पर आरोपित तात्कालिक वोल्टेज v(t) के समानुपाती होता है:\n\nq(t) = C · v(t) = C · [Vm · sin(ωt)]\n\nविद्युत धारा की मूल परिभाषा के अनुसार, धारा आवेश के प्रवाह की समय दर है:\n\ni(t) = dq/dt = d/dt [C · Vm · sin(ωt)] = ω C Vm · cos(ωt)\n\nत्रिकोणमितीय सूत्र cos(θ) = sin(θ + 90°) का उपयोग करने पर:\n\ni(t) = [Vm / (1 / (ωC))] · sin(ωt + 90°) = Im · sin(ωt + π/2)\n\nजहाँ कैपेसिटिव रिएक्टेंस XC = 1 / (ωC) = 1 / (2πfC) (ओम, Ω), तथा शिखर धारा Im = Vm / XC है।\n\nभौतिक निष्कर्ष: शुद्ध कैपेसिटिव परिपथ में प्रत्यावर्ती धारा i(t) आरोपित वोल्टेज v(t) से ठीक 90° (+π/2 रेडियन या T/4 चक्र) आगे (लीड) रहती है। जब वोल्टेज शून्य से गुजर रहा होता है और उसके बदलने की दर dv/dt सर्वाधिक होती है, उस समय धारा अपने अधिकतम शिखर पर होती है।',
        bn: 'যেকোনো সময় t-তে ক্যাপাসিটরের পাতে জমা চার্জ প্রযুক্ত তাৎক্ষণিক ভোল্টেজ v(t) এর সমানুপাতিক:\n\nq(t) = C · v(t) = C · [Vm · sin(ωt)]\n\nতড়িৎ প্রবাহের সংজ্ঞানুযায়ী কারেন্ট হলো সময়ের সাপেক্ষে চার্জের পরিবর্তনের হার:\n\ni(t) = dq/dt = d/dt [C · Vm · sin(ωt)] = ω C Vm · cos(ωt)\n\nত্রিকোণমিতিক সূত্র cos(θ) = sin(θ + ৯০°) প্রয়োগ করে পাই:\n\ni(t) = [Vm / (১ / (ωC))] · sin(ωt + ৯০°) = Im · sin(ωt + π/২)\n\nযেখানে ক্যাপাসিটিভ রিঅ্যাকট্যান্স XC = 1 / (ωC) = 1 / (2πfC) (ওহম, Ω), এবং শীর্ষ কারেন্ট Im = Vm / XC।\n\nভৌত তাৎপর্য: বিশুদ্ধ ক্যাপাসিটিভ সার্কিটে এসি কারেন্ট i(t) প্রযুক্ত ভোল্টেজ v(t) এর চেয়ে ঠিক ৯০° (+π/২ রেডিয়ান বা চক্রের এক-চতুর্থাংশ T/4 সময়) এগিয়ে (লিড করে) থাকে।'
      },
      keyEquations: [
        'v(t) = Vm · sin(ωt)',
        'i(t) = Im · sin(ωt + 90°)',
        'XC = 1 / (2πfC) = 1 / (ωC) (Ω)',
        'Im = Vm / XC  |  Irms = Vrms / XC',
        'ZC = -j XC = XC ∠ -90° Ω'
      ]
    },
    {
      id: 'sec-ch5-l8-3',
      title: {
        en: '3. Capacitive Reactance (XC) and Frequency Response',
        hi: '3. कैपेसिटिव रिएक्टेंस (XC) एवं आवृत्ति अनुक्रिया',
        bn: '৩. ক্যাপাসিটিভ রিঅ্যাকট্যান্স (XC) এবং ফ্রিকোয়েন্সি নির্ভরতা'
      },
      content: {
        en: 'Capacitive reactance XC represents the opposition offered by a capacitor to the flow of alternating current. It is measured in Ohms (Ω) and given by:\n\nXC = 1 / (2πfC) = 1 / (ωC)\n\nCritical Engineering Principles Across Frequencies:\n1. Inverse Proportionality (XC ∝ 1/f): Reactance is inversely proportional to frequency. As frequency increases, the capacitor charges and discharges much faster per unit time, resulting in higher current flow for the same voltage and consequently lower reactance. If frequency doubles, XC is halved.\n\n2. DC Blocking / Open Circuit (f = 0 Hz): For a steady direct current source (f = 0 Hz), XC = 1 / [2π(0)C] = 1 / 0 → ∞ Ω. A capacitor presents infinite resistance to steady DC, making it an ideal DC-blocking element (coupling capacitor in amplifiers).\n\n3. High-Frequency Bypass / Short Circuit (f → ∞): As supply frequency approaches very high frequencies, XC approaches zero (XC → 0 Ω). The capacitor acts as a dynamic AC short circuit, easily bypassing high-frequency noise and AC signals to ground (Bypass / Decoupling Capacitors).',
        hi: 'कैपेसिटिव रिएक्टेंस (XC) प्रत्यावर्ती धारा के प्रवाह में संधारित्र द्वारा प्रस्तुत विरोध है। इसका मात्रक ओम (Ω) होता है और सूत्र है:\n\nXC = 1 / (2πfC) = 1 / (ωC)\n\nविभिन्न आवृत्तियों पर मुख्य गुणधर्म:\n1. व्युत्क्रमानुपाती संबंध (XC ∝ 1/f): कैपेसिटिव रिएक्टेंस आवृत्ति के व्युत्क्रमानुपाती होता है। उच्च आवृत्ति पर चार्जिंग-डिस्चार्जिंग चक्र बहुत तेज होता है, जिससे अधिक धारा प्रवाहित होती है और विरोध घट जाता है। यदि आवृत्ति दोगुनी कर दी जाए, तो XC आधा रह जाता है।\n\n2. डीसी ब्लॉकिंग / ओपन सर्किट (f = 0 Hz): स्थिर डीसी के लिए f = 0 होता है, जिससे XC = 1 / 0 = ∞ Ω हो जाता है। अतः संधारित्र डीसी के लिए अनंत विरोध प्रस्तुत करता है और डीसी को पूरी तरह ब्लॉक कर देता है।\n\n3. उच्च आवृत्ति बाईपास / शॉर्ट सर्किट (f → ∞): अत्यंत उच्च आवृत्ति पर XC लगभग शून्य (XC → 0 Ω) हो जाता है। संधारित्र उच्च आवृत्ति एसी तरंगों के लिए शॉर्ट सर्किट की तरह कार्य करके उन्हें आसानी से बाईपास कर देता है।',
        bn: 'ক্যাপাসিটিভ রিঅ্যাকট্যান্স (XC) হলো এসি কারেন্ট প্রবাহে ক্যাপাসিটর কর্তৃক সৃষ্ট কার্যকর ওহমিক বাধা। এর একক ওহম (Ω) এবং এর সূত্র:\n\nXC = 1 / (2πfC) = 1 / (ωC)\n\nকম্পাঙ্ক পরিবর্তনের ফলাফল:\n১. ব্যস্তানুপাতিক সম্পর্ক (XC ∝ 1/f): কম্পাঙ্ক বৃদ্ধি পেলে চার্জিং ও ডিসচার্জিংয়ের হার দ্রুততর হয়, ফলে বেশি কারেন্ট প্রবাহিত হওয়ায় বাধা হ্রাস পায়। ফ্রিকোয়েন্সি দ্বিগুণ হলে XC অর্ধেক হয়ে যায়।\n\n২. ডিসি ব্লকিং / ওপেন সার্কিট (f = ০ Hz): স্থির ডিসির ক্ষেত্রে কম্পাঙ্ক শূন্য (f = ০), ফলে XC = ১ / ০ = ∞ Ω। অর্থাৎ ক্যাপাসিটর ডিসি প্রবাহকে সম্পূর্ণ আটকে দেয় (ব্লক করে)।\n\n৩. উচ্চ কম্পাঙ্কে বাইপাস (f → ∞): অতি উচ্চ কম্পাঙ্কে XC শূন্যের কাছাকাছি চলে আসে (XC → ০ Ω)। ফলে ক্যাপাসিটরটি উচ্চ কম্পাঙ্কের সিগন্যালের জন্য শর্ট সার্কিট হিসেবে কাজ করে সহজেই বাইপাস তৈরি করে দেয়।'
      }
    },
    {
      id: 'sec-ch5-l8-4',
      title: {
        en: '4. Instantaneous Power, Zero Active Dissipation & Electrostatic Energy Cycles',
        hi: '4. तात्कालिक शक्ति, शून्य सक्रिय क्षय एवं स्थिरवैद्युत ऊर्जा चक्र',
        bn: '৪. তাৎক্ষণিক ক্ষমতা, শূন্য সক্রিয় অপচয় এবং স্থিরবৈদ্যুতিক শক্তি চক্র'
      },
      content: {
        en: 'The instantaneous power p(t) delivered to a pure capacitor is given by:\n\np(t) = v(t) · i(t) = [Vm · sin(ωt)] · [Im · cos(ωt)] = (Vm · Im / 2) · sin(2ωt) = Vrms · Irms · sin(2ωt)\n\nEssential Physical Observations:\n1. Symmetrical Power Oscillation (2f): Instantaneous power is a pure sine wave pulsing at twice the line frequency (2f) with zero vertical offset.\n\n2. Zero Net Active Power (P = 0 W): The average power consumed over a complete cycle is strictly zero:\n\nP = Vrms · Irms · cos(+90°) = Vrms · Irms · (0) = 0 Watts.\nAn ideal capacitor dissipates zero active thermal energy.\n\n3. Reversible Electrostatic Field Storage: During charging (when v and i share identical polarities, p > 0), the source pumps energy into the capacitor dielectric, storing it in the electrostatic electric field: W = ½ C [v(t)]². During discharging (when polarities oppose, p < 0), the electric field discharges and returns 100% of stored energy back to the supply. This reactive power exchange is characterized as leading reactive power (Q < 0 or Leading VAR).',
        hi: 'शुद्ध संधारित्र को दी गई तात्कालिक शक्ति p(t) का समीकरण है:\n\np(t) = v(t) · i(t) = [Vm · sin(ωt)] · [Im · cos(ωt)] = (Vm · Im / 2) · sin(2ωt) = Vrms · Irms · sin(2ωt)\n\nप्रमुख भौतिक निष्कर्ष:\n1. सममित दोलन (2f): तात्कालिक शक्ति स्रोत की आवृत्ति से दोगुनी आवृत्ति (2f) पर एक शुद्ध ज्यावक्रीय तरंग के रूप में दोलन करती है।\n\n2. शून्य सक्रिय शक्ति (P = 0 W): एक पूर्ण चक्र में औसत शक्ति:\n\nP = Vrms · Irms · cos(+90°) = 0 वाट।\nएक आदर्श संधारित्र कोई वास्तविक तापीय ऊर्जा नष्ट नहीं करता।\n\n3. स्थिरवैद्युत ऊर्जा संचय: चार्जिंग के दौरान (p > 0) स्रोत से ऊर्जा लेकर परावैद्युत क्षेत्र में W = ½ C v² के रूप में संचित होती है। डिस्चार्जिंग के दौरान (p < 0) यह संचित ऊर्जा शत-प्रतिशत एसी स्रोत को वापस लौट जाती है। इसे लीडिंग रिएक्टिव पावर (Leading VAR) कहा जाता है।',
        bn: 'বিশুদ্ধ ক্যাপাসিটরে প্রদত্ত তাৎক্ষণিক ক্ষমতার সমীকরণ:\n\np(t) = v(t) · i(t) = [Vm · sin(ωt)] · [Im · cos(ωt)] = (Vm · Im / ২) · sin(২ωt) = Vrms · Irms · sin(২ωt)\n\nবৈজ্ঞানিক সিদ্ধান্তসমূহ:\n১. দ্বিগুণ কম্পাঙ্কে স্পন্দন (2f): তাৎক্ষণিক ক্ষমতা মূল এসি লাইনের দ্বিগুণ কম্পাঙ্কে (2f) কোনো অফসেট ছাড়াই বিশুদ্ধ সাইন তরঙ্গ হিসেবে স্পন্দিত হয়।\n\n২. শূন্য গড় সক্রিয় ক্ষমতা (P = ০ W): এক পূর্ণ চক্রে গড় সক্রিয় ক্ষমতার মান:\n\nP = Vrms · Irms · cos(+৯০°) = ০ ওয়াট।\nএকটি আদর্শ ক্যাপাসিটরে কোনো তাপীয় সক্রিয় ক্ষমতার অপচয় হয় না।\n\n৩. স্থিরবৈদ্যুতিক শক্তি চক্র: চার্জিংয়ের সময় ক্যাপাসিটরের পাতে W = ½ C v² স্থিরবৈদ্যুতিক শক্তি সঞ্চিত হয় (p > ০)। ডিসচার্জিংয়ের সময় এই শক্তি সম্পূর্ণ উৎসে ফেরত চলে যায় (p < ০)। এই শক্তি আদান-প্রদানকে লিডিং রিঅ্যাক্টিভ ক্ষমতা (Leading VAR) বলা হয়।'
      },
      keyEquations: [
        'p(t) = Vrms · Irms · sin(2ωt)',
        'P_avg = Vrms · Irms · cos(+90°) = 0 W',
        'Power Factor = cos(+90°) = 0.0 (Leading)',
        '|Q| = Vrms · Irms (VAR, Leading)',
        'W_max = ½ C Vm² (Joules)'
      ]
    }
  ],
  formulas: [
    {
      id: 'f-ch5-l8-1',
      title: {
        en: 'Capacitive Reactance',
        hi: 'कैपेसिटिव रिएक्टेंस',
        bn: 'ক্যাপাসিটিভ রিঅ্যাকট্যান্স'
      },
      formula: 'XC = 1 / (2 · π · f · C) = 1 / (ω · C)',
      description: {
        en: 'Calculates the opposition in Ohms offered by a capacitor of capacitance C at frequency f.',
        hi: 'आवृत्ति f पर धारिता C वाले संधारित्र द्वारा प्रस्तुत विरोध (ओम में) की गणना करता है।',
        bn: 'f কম্পাঙ্কে C ধারকত্ববিশিষ্ট ক্যাপাসিটরের ওহমিক বাধা গণনা করে।'
      },
      variables: [
        { symbol: 'XC', name: { en: 'Capacitive Reactance (Ω)', hi: 'कैपेसिटिव रिएक्टेंस (Ω)', bn: 'ক্যাপাসিটিভ রিঅ্যাকট্যান্স (Ω)' } },
        { symbol: 'f', name: { en: 'Frequency (Hz)', hi: 'आवृत्ति (Hz)', bn: 'কম্পাঙ্ক (Hz)' } },
        { symbol: 'C', name: { en: 'Capacitance (F)', hi: 'धारिता (F)', bn: 'ধারকত্ব (F)' } },
        { symbol: 'ω', name: { en: 'Angular Frequency (rad/s)', hi: 'कोणीय आवृत्ति (rad/s)', bn: 'কৌণিক কম্পাঙ্ক (rad/s)' } }
      ]
    },
    {
      id: 'f-ch5-l8-2',
      title: {
        en: 'Capacitive RMS Current',
        hi: 'कैपेसिटिव RMS धारा',
        bn: 'ক্যাপাসিটিভ আরএমএস কারেন্ট'
      },
      formula: 'Irms = Vrms / XC = Vrms · (2πfC)',
      description: {
        en: 'Calculates the effective current drawn by a capacitor connected across an AC voltage source.',
        hi: 'एसी वोल्टेज स्रोत से जुड़े संधारित्र द्वारा ली जाने वाली प्रभावी धारा की गणना करता है।',
        bn: 'এসি ভোল্টেজ উৎসের সাথে যুক্ত ক্যাপাসিটরের কার্যকরী কারেন্ট নির্ণয় করে।'
      },
      variables: [
        { symbol: 'Irms', name: { en: 'RMS Current (A)', hi: 'RMS धारा (A)', bn: 'আরএমএস কারেন্ট (A)' } },
        { symbol: 'Vrms', name: { en: 'RMS Voltage (V)', hi: 'RMS वोल्टेज (V)', bn: 'আরএমএস ভোল্টেজ (V)' } },
        { symbol: 'XC', name: { en: 'Capacitive Reactance (Ω)', hi: 'कैपेसिटिव रिएक्टेंस (Ω)', bn: 'ক্যাপাসিটিভ রিঅ্যাকট্যান্স (Ω)' } }
      ]
    }
  ],
  practicalApplications: {
    en: [
      'Power Factor Correction: Shunt capacitor banks installed in industrial plants supply leading reactive power to cancel lagging inductive currents from induction motors.',
      'Single-Phase Motor Starting: Run and start capacitors create an artificial 90° auxiliary phase shift in ceiling fans and domestic water pumps to generate starting torque.',
      'DC Blocking and AC Coupling: Coupling capacitors in audio amplifiers pass alternating audio signals between stages while completely blocking DC bias voltages.',
      'High-Frequency Noise Filtering: Bypass capacitors route high-frequency electrical switching noise directly to ground, stabilizing digital electronics.'
    ],
    hi: [
      'पावर फैक्टर सुधार: औद्योगिक संयंत्रों में शंट कैपेसिटर बैंक इंडक्शन मोटरों के लैगिंग करंट को निष्प्रभावी करने के लिए लीडिंग रिएक्टिव पावर देते हैं।',
      'सिंगल-फेज मोटर स्टार्टिंग: सीलिंग फैन और घरेलू पंपों में सहायक वाइंडिंग में 90° फेज शिफ्ट पैदा करके शुरुआती टॉर्क उत्पन्न करने के लिए।',
      'डीसी ब्लॉकिंग एवं एसी कपलिंग: ऑडियो एम्पलीफायर में डीसी बायस वोल्टेज को रोकते हुए केवल एसी ऑडियो सिग्नल को आगे बढ़ाने के लिए।',
      'शोर फिल्टरिंग: डिजिटल सर्किट में उच्च आवृत्ति के विद्युत शोर को सीधे ग्राउंड में बाईपास करने के लिए।'
    ],
    bn: [
      'পাওয়ার ফ্যাক্টর উন্নতি: শিল্প কারখানায় ইন্ডাকশন মোটরের ল্যাগিং কারেন্ট প্রশমিত করতে শান্ট ক্যাপাসিটর ব্যাংক ব্যবহৃত হয়।',
      'সিঙ্গেল-ফেজ মোটর স্টার্ট: সিলিং ফ্যান ও পাম্পের অক্সিলিয়ারি ওয়াইন্ডিংয়ে ৯০° ফেজ পার্থক্য সৃষ্টি করে স্টার্টিং টর্ক তৈরি করে।',
      'ডিসি ব্লকিং ও এসি কাপলিং: অডিও অ্যামপ্লিফায়ারে ডিসি বায়াস ভোল্টেজ ব্লক করে শুধুমাত্র এসি অডিও সিগন্যাল পারাপারে ব্যবহৃত হয়।',
      'উচ্চ কম্পাঙ্ক নয়েজ ফিল্টারিং: ডিজিটাল সার্কিটে ক্ষতিকারক উচ্চ কম্পাঙ্কের নয়েজ সরাসরি গ্রাউন্ডে বাইপাস করতে ব্যবহৃত হয়।'
    ]
  },
  importantPoints: {
    en: [
      'In a pure capacitor, current strictly leads voltage by 90° (φ = +90° or +π/2 radians; mnemonic ICE: I leads E in C).',
      'Capacitive reactance XC = 1/(2πfC) is inversely proportional to frequency (XC ∝ 1/f).',
      'A capacitor blocks direct current completely (XC = ∞ Ω at f = 0 Hz, open circuit to DC).',
      'Average active power dissipated in a pure capacitor is strictly zero (P = 0 W, Power Factor = 0.0 leading).',
      'Instantaneous power oscillates at twice the supply frequency (2f) between +V·I and -V·I.'
    ],
    hi: [
      'शुद्ध संधारित्र में धारा वोल्टेज से ठीक 90° आगे (लीड) रहती है (φ = +90°; याद रखें ICE: C में I आगे है E से)।',
      'कैपेसिटिव रिएक्टेंस XC = 1/(2πfC) आवृत्ति के व्युत्क्रमानुपाती होता है (XC ∝ 1/f)।',
      'संधारित्र दिष्ट धारा (DC) को पूरी तरह ब्लॉक कर देता है (f = 0 पर XC = ∞ Ω, ओपन सर्किट)।',
      'औसत सक्रिय शक्ति क्षय शून्य होता है (P = 0 W, पावर फैक्टर = 0.0 लीडिंग)।',
      'तात्कालिक शक्ति आपूर्ति आवृत्ति की दोगुनी आवृत्ति (2f) पर दोलन करती है।'
    ],
    bn: [
      'বিশুদ্ধ ক্যাপাসিটরে কারেন্ট ভোল্টেজের চেয়ে ঠিক ৯০° এগিয়ে (লিড করে) থাকে (φ = +৯০°; স্মরণ রাখুন ICE: C-তে I বা কারেন্ট E এর চেয়ে এগিয়ে)।',
      'ক্যাপাসিটিভ রিঅ্যাকট্যান্স XC = 1/(2πfC) ফ্রিকোয়েন্সির ব্যস্তানুপাতিক (XC ∝ 1/f)।',
      'ক্যাপাসিটর ডিসি প্রবাহকে সম্পূর্ণ ব্লক করে দেয় (f = ০ Hz এ XC = ∞ Ω, ওপেন সার্কিট)।',
      'গড় সক্রিয় ক্ষমতা অপচয় শূন্য (P = ০ W, পাওয়ার ফ্যাক্টর = ০.০ লিডিং)।',
      'তাৎক্ষণিক ক্ষমতা দ্বিগুণ ফ্রিকোয়েন্সিতে (2f) স্পন্দিত হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing phase lead vs lag: asserting that "voltage leads current" in a capacitor (remember ICE: Current I leads Voltage E in Capacitance C).',
      'Assuming XC increases with frequency: XC decreases when frequency rises, unlike XL which increases.',
      'Treating a capacitor as an open circuit to AC: a capacitor acts as an open circuit only to steady DC, not to alternating current.'
    ],
    hi: [
      'लीड और लैग में भ्रम: संधारित्र में "वोल्टेज आगे है" समझ लेना (याद रखें ICE: संधारित्र C में धारा I वोल्टेज E से आगे होती है)।',
      'यह सोचना कि आवृत्ति बढ़ने पर XC बढ़ता है: आवृत्ति बढ़ने पर XC घटता है, जबकि XL बढ़ता है।',
      'एसी में संधारित्र को ओपन सर्किट समझ लेना: संधारित्र केवल स्थिर डीसी के लिए ओपन सर्किट होता है, एसी के लिए नहीं।'
    ],
    bn: [
      'লিড ও ল্যাগের বিভ্রান্তি: ক্যাপাসিটরে ভোল্টেজ এগিয়ে থাকে ভাবা (স্মরণ রাখুন ICE: ক্যাপাসিটরে কারেন্ট ভোল্টেজের চেয়ে এগিয়ে)।',
      'মনে করা ফ্রিকোয়েন্সি বাড়লে XC বাড়ে: ফ্রিকোয়েন্সি বাড়লে XC কমে, যেখানে XL বৃদ্ধি পায়।',
      'এসি বর্তনীতে ক্যাপাসিটরকে ওপেন সার্কিট মনে করা: ক্যাপাসিটর কেবল স্থির ডিসির জন্য ওপেন সার্কিট।'
    ]
  },
  mcqs: [
    {
      id: 'quiz-ch5-l8-1',
      question: {
        en: 'In a pure capacitive AC circuit, the phase angle between voltage and current is:',
        hi: 'एक शुद्ध कैपेसिटिव एसी परिपथ में वोल्टेज और धारा के बीच का फेज कोण कितना होता है?',
        bn: 'একটি বিশুদ্ধ ক্যাপাসিটিভ এসি সার্কিটে ভোল্টেজ ও কারেন্টের মধ্যবর্তী ফেজ কোণ কত?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Current leads voltage by 90° (+π/2 rad)', hi: 'धारा वोल्टेज से 90° लीड करती है', bn: 'কারেন্ট ভোল্টেজের চেয়ে ৯০° এগিয়ে (লিড) থাকে' } },
        { id: 'opt-b', text: { en: 'Current lags voltage by 90° (-π/2 rad)', hi: 'धारा वोल्टेज से 90° लैग करती है', bn: 'কারেন্ট ভোল্টেজের চেয়ে ৯০° পিছিয়ে (ল্যাগ) থাকে' } },
        { id: 'opt-c', text: { en: 'Current and voltage are in phase (0°)', hi: 'धारा और वोल्टेज समान फेज में होते हैं (0°)', bn: 'কারেন্ট ও ভোল্টেজ ইন-ফেজে থাকে (০°)' } },
        { id: 'opt-d', text: { en: 'Current is 180° out of phase with voltage', hi: 'धारा वोल्टेज से 180° विपरीत फेज में होती है', bn: 'কারেন্ট ভোল্টেজের সাথে ১৮০° বিপরীত ফেজে থাকে' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Since current is proportional to dv/dt, i(t) = Im sin(ωt + 90°). Current leads voltage by 90° (ICE mnemonic).',
        hi: 'चूँकि धारा i(t) = C(dv/dt) = Im sin(ωt + 90°) होती है, अतः धारा वोल्टेज से 90° आगे (लीड) रहती है।',
        bn: 'যেহেতু কারেন্ট i(t) = C(dv/dt) = Im sin(ωt + ৯০°), তাই কারেন্ট ভোল্টেজের চেয়ে ৯০° লিড করে।'
      }
    },
    {
      id: 'quiz-ch5-l8-2',
      question: {
        en: 'When a pure capacitor is connected across a steady DC voltage source (f = 0 Hz), its capacitive reactance is:',
        hi: 'जब एक शुद्ध संधारित्र को स्थिर डीसी वोल्टेज स्रोत (f = 0 Hz) से जोड़ा जाता है, तो इसका कैपेसिटिव रिएक्टेंस कितना होता है?',
        bn: 'যখন একটি বিশুদ্ধ ক্যাপাসিটরকে স্থির ডিসি ভোল্টেজ উৎসের (f = ০ Hz) সাথে যুক্ত করা হয়, তখন এর ক্যাপাসিটিভ রিঅ্যাকট্যান্স কত?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Infinite (∞ Ω, blocks DC completely)', hi: 'अनंत (∞ Ω, डीसी को पूरी तरह रोकता है)', bn: 'অসীম (∞ Ω, ডিসি সম্পূর্ণ ব্লক করে)' } },
        { id: 'opt-b', text: { en: 'Zero (0 Ω, short circuit)', hi: 'शून्य (0 Ω, शॉर्ट सर्किट)', bn: 'শূন্য (০ Ω, শর্ট সার্কিট)' } },
        { id: 'opt-c', text: { en: '100 Ω', hi: '100 Ω', bn: '১০০ Ω' } },
        { id: 'opt-d', text: { en: '1.0 Ω', hi: '1.0 Ω', bn: '১.০ Ω' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'XC = 1 / (2πfC). For DC, f = 0, so XC = 1 / 0 = ∞ Ω. The capacitor acts as an open circuit to steady DC.',
        hi: 'XC = 1 / (2πfC)। डीसी के लिए f = 0 होने से XC = 1 / 0 = ∞ Ω होता है (ओपन सर्किट)।',
        bn: 'XC = ১ / (২πfC)। ডিসির জন্য f = ০ হওয়ায় XC = ১ / ০ = ∞ Ω হয় (ওপেন সার্কিট)।'
      }
    },
    {
      id: 'quiz-ch5-l8-3',
      question: {
        en: 'If the supply frequency to a capacitive circuit is doubled from 50 Hz to 100 Hz with constant voltage, the RMS current will:',
        hi: 'यदि स्थिर वोल्टेज पर किसी कैपेसिटिव परिपथ की आपूर्ति आवृत्ति 50 Hz से बढ़ाकर 100 Hz (दोगुनी) कर दी जाए, तो RMS धारा:',
        bn: 'স্থির ভোল্টেজে একটি ক্যাপাসিটিভ সার্কিটের কম্পাঙ্ক ৫০ Hz থেকে দ্বিগুণ করে ১০০ Hz করা হলে আরএমএস কারেন্ট:'
      },
      options: [
        { id: 'opt-a', text: { en: 'Double (become 2 times larger)', hi: 'दोगुनी (2 गुना) हो जाएगी', bn: 'দ্বিগুণ (২ গুণ) হবে' } },
        { id: 'opt-b', text: { en: 'Halve (become 0.5 times)', hi: 'आधी (0.5 गुना) रह जाएगी', bn: 'অর্ধেক (০.৫ গুণ) হবে' } },
        { id: 'opt-c', text: { en: 'Remain the same', hi: 'समान रहेगी', bn: 'একই থাকবে' } },
        { id: 'opt-d', text: { en: 'Quadruple (become 4 times larger)', hi: 'चार गुनी हो जाएगी', bn: 'চার গুণ হবে' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Irms = Vrms / XC = Vrms · (2πfC). Current is directly proportional to frequency (I ∝ f). Doubling frequency doubles the current.',
        hi: 'Irms = V · (2πfC)। धारा आवृत्ति के समानुपाती है। आवृत्ति दोगुनी होने पर धारा भी दोगुनी हो जाएगी।',
        bn: 'Irms = V · (২πfC)। কারেন্ট ফ্রিকোয়েন্সির সরাসরি সমানুপাতিক। কম্পাঙ্ক দ্বিগুণ হলে কারেন্টও দ্বিগুণ হবে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch5-l8-1',
      question: {
        en: 'A 31.83 µF capacitor (approx 100/π µF) is connected to a 230 V, 50 Hz AC supply. Calculate: (a) Capacitive reactance XC, (b) RMS current Irms, (c) Peak current Im, (d) Active power P, (e) Reactive power Q, (f) Write the instantaneous expressions for applied voltage v(t) and current i(t).',
        hi: '31.83 µF का एक संधारित्र (लगभग 100/π µF) 230 V, 50 Hz एसी स्रोत से जुड़ा है। गणना करें: (a) कैपेसिटिव रिएक्टेंस XC, (b) RMS धारा Irms, (c) शिखर धारा Im, (d) सक्रिय शक्ति P, (e) रिएक्टिव शक्ति Q, (f) आरोपित वोल्टेज v(t) एवं धारा i(t) के तात्कालिक व्यंजक लिखें।',
        bn: 'একটি ৩১.৮৩ µF ক্যাপাসিটর ২৩০ V, ৫০ Hz এসি উৎসের সাথে যুক্ত। নির্ণয় করুন: (a) ক্যাপাসিটিভ রিঅ্যাকট্যান্স XC, (b) আরএমএস কারেন্ট Irms, (c) শীর্ষ কারেন্ট Im, (d) সক্রিয় ক্ষমতা P, (e) রিঅ্যাক্টিভ ক্ষমতা Q, (f) প্রযুক্ত ভোল্টেজ v(t) ও কারেন্ট i(t) এর তাৎক্ষণিক সমীকরণ।'
      },
      hint: {
        en: 'XC = 1 / (2 · π · 50 · 31.83 × 10⁻⁶) = 100 Ω. Irms = 230 / 100 = 2.3 A. Im = √2 · 2.3 = 3.25 A. P = 0 W. Q = 529 VAR leading.',
        hi: 'XC = 1 / (2π × 50 × 31.83×10⁻⁶) = 100 Ω। Irms = 230 / 100 = 2.3 A। Im = 3.25 A। P = 0 W। Q = 529 VAR (लीडिंग)।',
        bn: 'XC = ১ / (২π × ৫০ × ৩১.৮৩×১০⁻⁶) = ১০০ Ω। Irms = ২৩০ / ১০০ = ২.৩ A। Im = ৩.২৫ A। P = ০ W। Q = ৫২৯ VAR (লিডিং)।'
      },
      answerKey: {
        en: '(a) Capacitive Reactance XC = 1 / (2πfC) = 1 / (2 × π × 50 × 31.831 × 10⁻⁶) = 100.0 Ω.\n(b) RMS Current Irms = Vrms / XC = 230 / 100.0 = 2.30 A.\n(c) Peak Current Im = √2 × Irms = 1.4142 × 2.30 = 3.253 A.\n(d) Active Power P = Vrms · Irms · cos(+90°) = 230 × 2.30 × 0 = 0.0 W.\n(e) Reactive Power Q = Vrms · Irms = 230 × 2.30 = 529.0 VAR (Leading).\n(f) Peak voltage Vm = √2 × 230 = 325.27 V, ω = 2π(50) = 314.16 rad/s.\n  v(t) = 325.27 sin(314.16 t) V\n  i(t) = 3.253 sin(314.16 t + 90°) A (or +3.253 cos(314.16 t) A).',
        hi: '(a) कैपेसिटिव रिएक्टेंस XC = 1 / (2π × 50 × 31.83×10⁻⁶) = 100.0 Ω।\n(b) RMS धारा Irms = 230 / 100 = 2.30 A।\n(c) शिखर धारा Im = √2 × 2.30 = 3.25 A।\n(d) सक्रिय शक्ति P = 0 W।\n(e) रिएक्टिव शक्ति Q = 230 × 2.30 = 529 VAR (लीडिंग)।\n(f) v(t) = 325.3 sin(314.16 t) V, i(t) = 3.25 sin(314.16 t + 90°) A।',
        bn: '(a) ক্যাপাসিটিভ রিঅ্যাকট্যান্স XC = ১০০.০ Ω।\n(b) আরএমএস কারেন্ট Irms = ২.৩০ A।\n(c) পিক কারেন্ট Im = ৩.২৫ A।\n(d) সক্রিয় ক্ষমতা P = ০ W।\n(e) রিঅ্যাক্টিভ ক্ষমতা Q = ৫২৯ VAR (লিডিং)।\n(f) v(t) = ৩২৫.৩ sin(৩১৪.১৬ t) V, i(t) = ৩.২৫ sin(৩১৪.১৬ t + ৯০°) A।'
      }
    }
  ]
};

export const LESSON_REACTANCE_COMPARISON: Lesson = {
  id: 'lsn-ch5-inductive-reactance',
  topicId: 'ch5-inductive-reactance',
  chapterId: 'ch-alternating-current',
  order: 9,
  title: {
    en: 'Inductive Reactance vs. Capacitive Reactance',
    hi: 'इंडक्टिव रिएक्टेंस बनाम कैपेसिटिव रिएक्टेंस',
    bn: 'ইন্ডাক্টিভ রিঅ্যাকট্যান্স বনাম ক্যাপাসিটিভ রিঅ্যাকট্যান্স'
  },
  description: {
    en: 'Comparative synthesis of inductive (XL = 2πfL) and capacitive (XC = 1/(2πfC)) reactances: physical nature, frequency dependency curves, complex impedance representations, and the equal reactance crossover frequency f₀.',
    hi: 'इंडक्टिव (XL = 2πfL) और कैपेसिटिव (XC = 1/(2πfC)) रिएक्टेंस का तुलनात्मक विश्लेषण: भौतिक प्रकृति, आवृत्ति वक्र, सम्मिश्र प्रतिबाधा निरूपण एवं समान रिएक्टेंस क्रॉसओवर आवृत्ति f₀।',
    bn: 'ইন্ডাক্টিভ (XL = 2πfL) এবং ক্যাপাসিটিভ (XC = 1/(2πfC)) রিঅ্যাকট্যান্সের তুলনামূলক বিশ্লেষণ: ভৌত প্রকৃতি, কম্পাঙ্ক নির্ভরতা রেখাচিত্র, জটিল ইম্পিড্যান্স এবং সমান রিঅ্যাকট্যান্স ক্রসওভার ফ্রিকোয়েন্সি f₀।'
  },
  estimatedMinutes: 26,
  easyExplanation: {
    en: 'Reactance is the opposition offered to AC current by inductors and capacitors without wasting energy as heat. Inductive reactance XL = 2πfL increases with frequency because higher frequencies induce stronger opposing EMFs. Capacitive reactance XC = 1/(2πfC) decreases with frequency because capacitors charge and discharge faster. The crossover frequency f₀ = 1/(2π√LC) is where both reactances are equal (XL = XC), causing their opposing effects to cancel completely.',
    hi: 'रिएक्टेंस इंडक्टर और कैपेसिटर द्वारा बिना ऊष्मा क्षय किए एसी धारा में प्रस्तुत किया गया विरोध है। इंडक्टिव रिएक्टेंस XL = 2πfL आवृत्ति बढ़ने पर बढ़ता है क्योंकि उच्च आवृत्ति पर बैक-ईएमएफ अधिक होता है। कैपेसिटिव रिएक्टेंस XC = 1/(2πfC) आवृत्ति बढ़ने पर घटता है। क्रॉसओवर आवृत्ति f₀ = 1/(2π√LC) पर दोनों रिएक्टेंस बराबर (XL = XC) हो जाते हैं और एक-दूसरे के प्रभाव को निरस्त कर देते हैं।',
    bn: 'রিঅ্যাকট্যান্স হলো আবেশক ও ধারক কর্তৃক তাপ অপচয় না করে এসি কারেন্ট প্রবাহে সৃষ্ট বাধা। ইন্ডাক্টিভ রিঅ্যাকট্যান্স XL = 2πfL ফ্রিকোয়েন্সি বাড়লে বাড়ে কারণ পরিবর্তনশীল ব্যাক-ইএমএফ বৃদ্ধি পায়। ক্যাপাসিটিভ রিঅ্যাকট্যান্স XC = 1/(2πfC) ফ্রিকোয়েন্সি বাড়লে হ্রাস পায়। ক্রসওভার ফ্রিকোয়েন্সি f₀ = 1/(2π√LC)-তে উভয় রিঅ্যাকট্যান্স সমান (XL = XC) হয় এবং পরস্পরকে সম্পূর্ণরূপে বাতিল করে।'
  },
  detailedExplanation: {
    en: 'Reactance X (measured in Ω) is the non-dissipative opposition to AC. Inductors introduce positive imaginary impedance ZL = +jXL (XL = 2πfL), where current lags voltage by 90°. Capacitors introduce negative imaginary impedance ZC = -jXC (XC = 1/(2πfC)), where current leads voltage by 90°. XL is linear with frequency (XL ∝ f, slope 2πL), acting as a short at DC and open at high frequencies. XC is an inverse hyperbola (XC ∝ 1/f), acting as an open circuit at DC and short at high frequencies. At crossover frequency f₀ = 1/(2π√LC), XL = XC, net reactance Xnet = XL - XC = 0 Ω, forming the basis for electrical resonance and filter networks.',
    hi: 'रिएक्टेंस X (ओम में) एसी का गैर-तापीय विरोध है। इंडक्टर धनात्मक काल्पनिक प्रतिबाधा ZL = +jXL (XL = 2πfL) देता है जहाँ धारा 90° लैग करती है। कैपेसिटर ऋणात्मक काल्पनिक प्रतिबाधा ZC = -jXC (XC = 1/(2πfC)) देता है जहाँ धारा 90° लीड करती है। XL आवृत्ति के रैखिक समानुपाती (XL ∝ f) है, जो डीसी पर शॉर्ट और उच्च आवृत्ति पर ओपन जैसा होता है। XC व्युत्क्रमानुपाती (XC ∝ 1/f) है, जो डीसी पर ओपन और उच्च आवृत्ति पर शॉर्ट जैसा होता है। क्रॉसओवर आवृत्ति f₀ = 1/(2π√LC) पर XL = XC होने से कुल रिएक्टेंस Xnet = 0 Ω हो जाता है।',
    bn: 'রিঅ্যাকট্যান্স X (ওহম) হলো এসির অ-তাপীয় কার্যকর বাধা। আবেশক ধনাত্মক কাল্পনিক ইম্পিড্যান্স ZL = +jXL (XL = 2πfL) দেয় যেখানে কারেন্ট ৯০° ল্যাগ করে। ধারক ঋণাত্মক কাল্পনিক ইম্পিড্যান্স ZC = -jXC (XC = 1/(2πfC)) দেয় যেখানে কারেন্ট ৯০° লিড করে। XL ফ্রিকোয়েন্সির সাথে রৈখিকভাবে বাড়ে (XL ∝ f)। XC ব্যস্তানুপাতিকভাবে হ্রাস পায় (XC ∝ 1/f)। ক্রসওভার কম্পাঙ্ক f₀ = 1/(2π√LC)-তে XL = XC হয়ে মোট নেট রিঅ্যাকট্যান্স Xnet = ০ Ω হয়।'
  },
  solvedExamples: [
    {
      id: 'ex-ch5-l9-1',
      problem: {
        en: 'A coil has an inductance L = 0.2 H and a capacitor has capacitance C = 50 µF. Find: (a) XL and XC at supply frequency f = 50 Hz, (b) Net reactance Xnet, (c) Crossover frequency f₀ where XL = XC.',
        hi: 'एक कॉइल का प्रेरकत्व L = 0.2 H तथा संधारित्र की धारिता C = 50 µF है। ज्ञात करें: (a) f = 50 Hz पर XL एवं XC, (b) कुल नेट रिएक्टेंस Xnet, (c) क्रॉसओवर आवृत्ति f₀ जहाँ XL = XC हो।',
        bn: 'একটি কয়েলের আবেশাঙ্ক L = ০.২ H এবং ধারকের ধারকত্ব C = ৫০ µF। নির্ণয় করুন: (a) f = ৫০ Hz এ XL ও XC, (b) নেট রিঅ্যাকট্যান্স Xnet, (c) ক্রসওভার কম্পাঙ্ক f₀ যেখানে XL = XC।'
      },
      solution: {
        en: 'Given:\n- L = 0.2 H, C = 50 µF = 50 × 10⁻⁶ F, f = 50 Hz\n\n(a) Reactances at 50 Hz:\nXL = 2πfL = 2 × π × 50 × 0.2 = 62.83 Ω\nXC = 1 / (2πfC) = 1 / (2 × π × 50 × 50 × 10⁻⁶) = 63.66 Ω\n\n(b) Net Reactance Xnet:\nXnet = XL - XC = 62.83 - 63.66 = -0.83 Ω (slightly capacitive)\n\n(c) Crossover Frequency f₀:\nf₀ = 1 / (2π√(LC)) = 1 / (2 × π × √(0.2 × 50 × 10⁻⁶)) = 1 / (2 × π × 0.003162) = 50.33 Hz.',
        hi: 'हल:\n(a) XL = 2π(50)(0.2) = 62.83 Ω, XC = 1/(2π(50)(50×10⁻⁶)) = 63.66 Ω\n(b) Xnet = XL - XC = 62.83 - 63.66 = -0.83 Ω (कैपेसिटिव)\n(c) f₀ = 1 / (2π√(0.2 × 50×10⁻⁶)) = 50.33 Hz।',
        bn: 'সমাধান:\n(a) XL = ২π(৫০)(০.২) = ৬২.৮৩ Ω, XC = ১/(২π(৫০)(৫০×১০⁻⁶)) = ৬৩.৬৬ Ω\n(b) Xnet = XL - XC = ৬২.৮৩ - ৬৩.৬৬ = -০.৮৩ Ω (ক্যাপাসিটিভ)\n(c) f₀ = ১ / (২π√(০.২ × ৫০×১০⁻⁶)) = ৫০.৩৩ Hz।'
      },
      finalAnswer: {
        en: 'XL = 62.83 Ω, XC = 63.66 Ω, Xnet = -0.83 Ω (Capacitive), f₀ = 50.33 Hz',
        hi: 'XL = 62.83 Ω, XC = 63.66 Ω, Xnet = -0.83 Ω (कैपेसिटिव), f₀ = 50.33 Hz',
        bn: 'XL = ৬২.৮৩ Ω, XC = ৬৩.৬৬ Ω, Xnet = -০.৮৩ Ω (ক্যাপাসিটিভ), f₀ = ৫০.৩৩ Hz'
      }
    }
  ],
  sections: [
    {
      id: 'sec-ch5-l9-1',
      title: {
        en: '1. The Physical Nature of Reactance (Opposition to AC)',
        hi: '1. रिएक्टेंस की भौतिक प्रकृति (एसी का विरोध)',
        bn: '১. রিঅ্যাকট্যান্সের ভৌত প্রকৃতি (এসি কারেন্টের বাধা)'
      },
      content: {
        en: 'In electrical engineering, Reactance (symbol X, measured in Ohms, Ω) is the non-dissipative opposition offered by inductive and capacitive elements to the flow of alternating current. Unlike electrical Resistance (R), which irreversibly converts electrical energy into thermal heat energy via Joule heating (P = I²R), pure reactance stores electrical energy temporarily in electromagnetic fields and returns it completely to the circuit during every alternate quarter-cycle.\n\nTwo Fundamental Forms of Reactance Exist:\n1. Inductive Reactance (XL = 2πfL = ωL): Arises from the back electromotive force generated by a changing magnetic field in an inductor. In complex notation, its impedance is positive imaginary: ZL = +j XL = XL ∠ +90° Ω.\n\n2. Capacitive Reactance (XC = 1/(2πfC) = 1/(ωC)): Arises from the opposing electric potential established by accumulated electrostatic charge on capacitor plates. In complex notation, its impedance is negative imaginary: ZC = -j XC = (1/jωC) = XC ∠ -90° Ω.',
        hi: 'विद्युत इंजीनियरिंग में, रिएक्टेंस (प्रतीक X, मात्रक ओम Ω) प्रेरकत्व एवं धारिता द्वारा प्रत्यावर्ती धारा के प्रवाह में प्रस्तुत किया जाने वाला गैर-तापीय (Non-dissipative) विरोध है। विद्युत प्रतिरोध (R) के विपरीत, जो विद्युत ऊर्जा को जूल प्रभाव (P = I²R) द्वारा अपरिवर्तनीय रूप से ऊष्मा में बदल देता है, शुद्ध रिएक्टेंस ऊर्जा को विद्युत-चुंबकीय क्षेत्रों में अस्थायी रूप से संचित करता है और अगले ही चौथाई चक्र में शत-प्रतिशत ऊर्जा परिपथ को वापस लौटा देता है।\n\nरिएक्टेंस के दो मूल रूप होते हैं:\n1. इंडक्टिव रिएक्टेंस (XL = 2πfL = ωL): बदलते चुंबकीय क्षेत्र द्वारा उत्पन्न विरोधी बैक EMF के कारण होता है। सम्मिश्र रूप में इसकी प्रतिबाधा धनात्मक काल्पनिक होती है: ZL = +j XL = XL ∠ +90° Ω।\n\n2. कैपेसिटिव रिएक्टेंस (XC = 1/(2πfC) = 1/(ωC)): संधारित्र प्लेटों पर संचित स्थिरवैद्युत आवेश द्वारा उत्पन्न विरोधी वोल्टेज के कारण होता है। सम्मिश्र रूप में इसकी प्रतिबाधा ऋणात्मक काल्पनिक होती है: ZC = -j XC = XC ∠ -90° Ω।',
        bn: 'তড়িৎ প্রকৌশলে রিঅ্যাকট্যান্স (প্রতীক X, একক ওহম Ω) হলো আবেশক ও ধারক কর্তৃক পরিবর্তনশীল এসি কারেন্ট প্রবাহে প্রদত্ত অ-তাপীয় বাধা। রোধ (R) যেমন বিদ্যুৎ শক্তিকে তাপে (P = I²R) অপচয় করে, রিঅ্যাকট্যান্স তা করে না; বরং শক্তিকে সাময়িকভাবে তড়িচ্চৌম্বকীয় ক্ষেত্রে জমা রাখে এবং পরবর্তী এক-চতুর্থাংশ চক্রে সম্পূর্ণ শক্তি সার্কিটে ফেরত দেয়।\n\nরিঅ্যাকট্যান্সের দুটি মৌলিক রূপ:\n১. ইন্ডাক্টিভ রিঅ্যাকট্যান্স (XL = 2πfL = ωL): পরিবর্তনশীল চৌম্বক ক্ষেত্রজনিত ব্যাক-ইএমএফ এর কারণে সৃষ্টি হয়। জটিল রাশিতে এর মান ধনাত্মক কাল্পনিক: ZL = +j XL = XL ∠ +৯০° Ω।\n\n২. ক্যাপাসিটিভ রিঅ্যাকট্যান্স (XC = 1/(2πfC) = 1/(ωC)): ক্যাপাসিটর পাতে জমা হওয়া চার্জজনিত বিপরীত বিভবের কারণে সৃষ্টি হয়। জটিল রাশিতে এর মান ঋণাত্মক কাল্পনিক: ZC = -j XC = XC ∠ -৯০° Ω।'
      },
      schematicId: 'circuit-reactance-comparison'
    },
    {
      id: 'sec-ch5-l9-2',
      title: {
        en: '2. Comparative Frequency Response Curves: XL vs. XC',
        hi: '2. तुलनात्मक आवृत्ति अनुक्रिया वक्र: XL बनाम XC',
        bn: '২. তুলনামূলক ফ্রিকোয়েন্সি রেসপন্স লেখচিত্র: XL বনাম XC'
      },
      content: {
        en: 'The most defining contrast between XL and XC is their diametrically opposite variation with supply frequency f:\n\n1. Linear Proportionality of Inductive Reactance (XL ∝ f):\nPlotting XL against frequency produces a straight line passing through the origin (slope = 2πL). At f = 0 Hz (DC), XL = 0 Ω (short circuit). As f increases toward infinity, XL grows without bound (XL → ∞), increasingly suffocating high-frequency alternating currents.\n\n2. Rectangular Hyperbola of Capacitive Reactance (XC ∝ 1/f):\nPlotting XC against frequency produces an inverse rectangular hyperbola. At f = 0 Hz (DC), XC = 1/0 = ∞ Ω (open circuit). As f increases toward infinity, XC asymptotically plunges toward zero (XC → 0 Ω), freely conducting high-frequency currents.\n\nDual Engineering Complementarity: Inductors block high frequencies and pass DC, whereas capacitors block DC and pass high frequencies. This complementary duality forms the foundation of all electrical filter designs, audio crossovers, power factor correction systems, and tuned circuits.',
        hi: 'XL और XC के बीच सबसे प्रमुख अंतर आपूर्ति आवृत्ति f के साथ उनके विपरीत व्यवहार का है:\n\n1. इंडक्टिव रिएक्टेंस का रैखिक संबंध (XL ∝ f):\nXL और आवृत्ति के बीच का ग्राफ मूल बिंदु से गुजरने वाली एक सीधी रेखा (ढाल = 2πL) होती है। f = 0 Hz (DC) पर XL = 0 Ω (शॉर्ट सर्किट) होता है। जैसे-जैसे आवृत्ति बढ़ती है, XL अनंत (XL → ∞) की ओर बढ़ता है और उच्च आवृत्ति को रोकता है।\n\n2. कैपेसिटिव रिएक्टेंस का व्युत्क्रमानुपाती वक्र (XC ∝ 1/f):\nXC और आवृत्ति का ग्राफ एक आयताकार हाइपरबोला (Hyperbola) होता है। f = 0 Hz (DC) पर XC = ∞ Ω (ओपन सर्किट) होता है। जैसे-जैसे आवृत्ति बढ़ती है, XC तेजी से घटकर शून्य (XC → 0 Ω) की ओर जाता है और उच्च आवृत्ति को सुगमता से प्रवाहित होने देता है।\n\nपूरक इंजीनियरिंग सिद्धांत: प्रेरक उच्च आवृत्ति को रोकता है और डीसी को जाने देता है, जबकि संधारित्र डीसी को रोकता है और उच्च आवृत्ति को जाने देता है। यह पूरक गुणधर्म सभी इलेक्ट्रिकल फिल्टर और ट्यून्ड सर्किट का आधार है।',
        bn: 'XL ও XC এর মধ্যকার সবচেয়ে স্পষ্ট পার্থক্য হলো কম্পাঙ্ক f এর সাথে এদের বিপরীতমুখী আচরণ:\n\n১. ইন্ডাক্টিভ রিঅ্যাকট্যান্সের রৈখিক সম্পর্ক (XL ∝ f):\nকম্পাঙ্কের বিপরীতে XL এর লেখচিত্রটি মূলবিন্দুগামী একটি সরলরেখা (ঢাল = ২πL)। f = ০ Hz (ডিসি) এ XL = ০ Ω (শর্ট সার্কিট)। কম্পাঙ্ক বৃদ্ধির সাথে সাথে XL অসীম বা অতি উচ্চ মানে পৌঁছায় এবং উচ্চ কম্পাঙ্কের কারেন্টকে ব্লক করে।\n\n২. ক্যাপাসিটিভ রিঅ্যাকট্যান্সের হাইপারবোলিক সম্পর্ক (XC ∝ 1/f):\nকম্পাঙ্কের বিপরীতে XC এর লেখচিত্র একটি ব্যস্তানুপাতিক হাইপারবোলা। f = ০ Hz (ডিসি) এ XC = ∞ Ω (ওপেন সার্কিট)। কম্পাঙ্ক বৃদ্ধির সাথে সাথে XC দ্রুত হ্রাস পেয়ে শূন্যের দিকে যায় এবং উচ্চ কম্পাঙ্কের কারেন্টকে সহজে পার করে দেয়।\n\nপরিপূরক নীতি: আবেশক উচ্চ কম্পাঙ্ক আটকে ডিসি পার করে, আর ক্যাপাসিটর ডিসি আটকে উচ্চ কম্পাঙ্ক পার করে। এই বিপরীত ধর্মই সকল ইলেকট্রিক্যাল ফিল্টার ও অডিও ক্রসওভারের মূল ভিত্তি।'
      },
      keyEquations: [
        'XL = 2πfL (Linear, passing through origin)',
        'XC = 1 / (2πfC) (Inverse hyperbola)',
        'At DC (f = 0): XL = 0 Ω (Short) | XC = ∞ Ω (Open)',
        'At High Freq (f → ∞): XL → ∞ (Block) | XC → 0 Ω (Pass)',
        'Xnet = XL - XC'
      ]
    },
    {
      id: 'sec-ch5-l9-3',
      title: {
        en: '3. Equal Reactance Crossover Frequency (f₀) and Circuit Regimes',
        hi: '3. समान रिएक्टेंस क्रॉसओवर आवृत्ति (f₀) एवं परिपथ व्यवहार क्षेत्र',
        bn: '৩. সমান রিঅ্যাকট্যান্স ক্রসওভার কম্পাঙ্ক (f₀) এবং সার্কিট অঞ্চল'
      },
      content: {
        en: 'When the linear rising line XL = 2πfL and the hyperbolic falling curve XC = 1/(2πfC) are plotted on the same axes, they intersect at exactly one unique frequency f₀ where both reactances are identical in magnitude (XL = XC):\n\n2π f₀ L = 1 / (2π f₀ C)  ⟹  (2π f₀)² = 1 / (LC)  ⟹  f₀ = 1 / (2π √(LC))\n\nThree Distinct Operating Regimes in AC Circuits:\n\n1. Low-Frequency Regime (f < f₀):\nHere, capacitive reactance exceeds inductive reactance (XC > XL). The net reactance Xnet = XL - XC is negative (-j). The overall circuit exhibits capacitive dominant behavior: current leads the supply voltage (φ > 0).\n\n2. Crossover / Equal Reactance Frequency (f = f₀):\nAt this exact frequency, XL = XC. In a series combination, the positive imaginary impedance +jXL and negative imaginary impedance -jXC cancel each other out completely: Znet = +jXL - jXC = 0 Ω. Net reactance vanishes, leaving only the circuit\'s real resistance. This equal-reactance balance is the cornerstone of AC Series Resonance, which will be explored in exhaustive depth in Lesson 14.\n\n3. High-Frequency Regime (f > f₀):\nHere, inductive reactance exceeds capacitive reactance (XL > XC). The net reactance Xnet = XL - XC is positive (+j). The overall circuit exhibits inductive dominant behavior: current lags the supply voltage (φ < 0).',
        hi: 'जब एक ही ग्राफ पर बढ़ती हुई रेखा XL = 2πfL और घटता हुआ वक्र XC = 1/(2πfC) खींचे जाते हैं, तो वे एक अद्वितीय बिंदु पर प्रतिच्छेद करते हैं जहाँ दोनों का परिमाण बिल्कुल बराबर होता है (XL = XC):\n\n2π f₀ L = 1 / (2π f₀ C)  ⟹  f₀ = 1 / (2π √(LC))\n\nएसी परिपथ के तीन स्पष्ट कार्यक्षेत्र:\n\n1. निम्न-आवृत्ति क्षेत्र (f < f₀):\nयहाँ XC > XL होता है। शुद्ध रिएक्टेंस Xnet = XL - XC ऋणात्मक (-j) होता है। परिपथ कैपेसिटिव प्रधान व्यवहार करता है और धारा वोल्टेज से लीड करती है (φ > 0)।\n\n2. क्रॉसओवर / समान रिएक्टेंस आवृत्ति (f = f₀):\nइस सटीक आवृत्ति पर XL = XC होता है। सीरीज संयोजन में +jXL और -jXC एक दूसरे को पूर्णतः निरस्त कर देते हैं: Znet = +jXL - jXC = 0 Ω। परिपथ का शुद्ध रिएक्टेंस शून्य हो जाता है। यह स्थिति एसी सीरीज अनुनाद (Resonance) की मूल शर्त है, जिसका विस्तृत अध्ययन पाठ 14 में किया जाएगा।\n\n3. उच्च-आवृत्ति क्षेत्र (f > f₀):\nयहाँ XL > XC होता है। शुद्ध रिएक्टेंस धनात्मक (+j) होता है। परिपथ इंडक्टिव प्रधान व्यवहार करता है और धारा वोल्टेज से लैग करती है (φ < 0)।',
        bn: 'যখন একই অক্ষে ঊর্ধ্বমুখী সরলরেখা XL = 2πfL এবং নিম্নমুখী বক্ররেখা XC = 1/(2πfC) আঁকা হয়, তখন তারা ঠিক একটি নির্দিষ্ট বিন্দুতে পরস্পরকে ছেদ করে যেখানে উভয়ের মান সমান হয় (XL = XC):\n\n২π f₀ L = ১ / (২π f₀ C)  ⟹  f₀ = ১ / (২π √(LC))\n\nসার্কিটের তিনটি সুস্পষ্ট কার্যকাল:\n\n১. নিম্ন কম্পাঙ্ক অঞ্চল (f < f₀):\nএখানে XC > XL। নেট রিঅ্যাকট্যান্স ঋণাত্মক (-j)। সার্কিটটি মূলত ক্যাপাসিটিভ আচরণ প্রকাশ করে এবং কারেন্ট ভোল্টেজের চেয়ে এগিয়ে থাকে (φ > ০)।\n\n২. ক্রসওভার / সমান রিঅ্যাকট্যান্স কম্পাঙ্ক (f = f₀):\nএই কম্পাঙ্কে XL = XC। সিরিজ সার্কিটে +jXL ও -jXC পরস্পরকে সম্পূর্ণ বাতিল করে দেয়: Znet = ০ Ω। ফলে সার্কিটের নেট রিঅ্যাকট্যান্স শূন্য হয়ে যায়। এই ভারসাম্যের অবস্থাই হলো এসি রেজোন্যান্সের ভিত্তি যা পাঠ ১৪-এ বিস্তারিতভাবে আলোচিত হবে।\n\n৩. উচ্চ কম্পাঙ্ক অঞ্চল (f > f₀):\nএখানে XL > XC। নেট রিঅ্যাকট্যান্স ধনাত্মক (+j)। সার্কিটটি ইন্ডাক্টিভ আচরণ প্রকাশ করে এবং কারেন্ট ভোল্টেজের চেয়ে পিছিয়ে থাকে (φ < ০)।'
      },
      keyEquations: [
        'f₀ = 1 / (2π √(LC)) (Hz)',
        'f < f₀ ⟹ XC > XL (Capacitive Dominant, I leads V)',
        'f = f₀ ⟹ XL = XC (Equal Reactance Point, Znet = 0)',
        'f > f₀ ⟹ XL > XC (Inductive Dominant, I lags V)'
      ]
    }
  ],
  formulas: [
    {
      symbol: 'X_{net}',
      expression: 'X_{net} = X_L - X_C = 2\\pi f L - \\frac{1}{2\\pi f C}',
      description: {
        en: 'Net Reactance: calculates algebraic net imaginary reactance of a series circuit combining inductive and capacitive components.',
        hi: 'शुद्ध रिएक्टेंस: इंडक्टिव एवं कैपेसिटिव घटकों वाले परिपथ के कुल शुद्ध काल्पनिक रिएक्टेंस की गणना करता है।',
        bn: 'নেট রিঅ্যাকট্যান্স: ইন্ডাক্টিভ ও ক্যাপাসিটিভ উপাদানের সমন্বয়ে গঠিত সার্কিটের মোট নেট রিঅ্যাকট্যান্স নির্ণয় করে।'
      }
    },
    {
      symbol: 'f_0',
      expression: 'f_0 = \\frac{1}{2 · \\pi · \\sqrt{L · C}}',
      description: {
        en: 'Equal Reactance Crossover Frequency: calculates the specific frequency at which inductive and capacitive reactances are mathematically equal in magnitude.',
        hi: 'समान रिएक्टेंस क्रॉसओवर आवृत्ति: वह विशिष्ट आवृत्ति जिस पर इंडक्टिव और कैपेसिटिव रिएक्टेंस का परिमाण बराबर होता है।',
        bn: 'সমান রিঅ্যাকট্যান্স ক্রসওভার কম্পাঙ্ক: যে নির্দিষ্ট কম্পাঙ্কে ইন্ডাক্টিভ ও ক্যাপাসিটিভ রিঅ্যাকট্যান্সের মান সমান হয়।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Audio Speaker Crossover Networks: Low-pass inductor filters route bass frequencies to woofers while high-pass capacitor filters route treble frequencies to tweeters.',
      'Power Factor Neutralization: Installing power factor correction capacitors exactly balances the inductive lagging VARs generated by heavy factory induction motors.',
      'Harmonic Trap Filters: Tuned LC combinations trap and shunt destructive harmonic frequencies (e.g. 3rd, 5th, 7th harmonics) safely to ground.',
      'Radio & Communication Tuning: Variable inductors and capacitors set the crossover frequency to select desired radio transmission channels.'
    ],
    hi: [
      'ऑडियो स्पीकर क्रॉसओवर नेटवर्क: लो-पास इंडक्टर फिल्टर बास ध्वनियों को वूफर तक भेजते हैं और हाई-पास कैपेसिटर फिल्टर ट्रेबल ध्वनियों को ट्वीटर तक भेजते हैं।',
      'पावर फैक्टर न्यूट्रलाइजेशन: कैपेसिटर बैंक लगाकर औद्योगिक इंडक्शन मोटरों के लैगिंग रिएक्टिव पावर को संतुलित करना।',
      'हार्मोनिक ट्रैप फिल्टर: विशिष्ट आवृत्ति पर XL और XC को बराबर करके हानिकारक हार्मोनिक तरंगों को सुरक्षित रूप से ग्राउंड करना।',
      'रेडियो ट्यूनिंग: वेरिएबल इंडक्टर और कैपेसिटर के संयोजन द्वारा वांछित चैनल को चुनना।'
    ],
    bn: [
      'অডিও স্পিকার ক্রসওভার নেটওয়ার্ক: লো-পাস ইনডাক্টর ফিল্টার নিম্ন কম্পাঙ্কের বেস শব্দ উফারে পাঠায় এবং হাই-পাস ক্যাপাসিটর ফিল্টার উচ্চ কম্পাঙ্কের ট্রেবল শব্দ টুইটারে পাঠায়।',
      'পাওয়ার ফ্যাক্টর ব্যালান্সিং: ফ্যাক্টরির মোটরের ক্ষতিকর ল্যাগিং রিঅ্যাক্টিভ ক্ষমতা প্রশমিত করতে ক্যাপাসিটর ব্যাংক সংযোগ করা।',
      'হারমোনিক ফিল্টার: নির্দিষ্ট কম্পাঙ্কে টিউন করা LC সার্কিট দিয়ে ক্ষতিকর হারমোনিক গ্রাউন্ডে অপসারণ করা।',
      'রেডিও রিসিভার টিউনিং: নির্দিষ্ট রেডিও স্টেশন বা চ্যানেল বাছাই করতে এল-সি সমন্বয় ব্যবহার করা।'
    ]
  },
  importantPoints: {
    en: [
      'XL = 2πfL is directly proportional to frequency (XL ∝ f, linear slope).',
      'XC = 1/(2πfC) is inversely proportional to frequency (XC ∝ 1/f, hyperbola).',
      'Complex impedance of an inductor is ZL = +j XL (current lags by 90°).',
      'Complex impedance of a capacitor is ZC = -j XC (current leads by 90°).',
      'At crossover frequency f₀ = 1/(2π√LC), XL = XC and their +j and -j reactances cancel completely.'
    ],
    hi: [
      'XL = 2πfL आवृत्ति के सीधे समानुपाती होता है (रैखिक ढाल)।',
      'XC = 1/(2πfC) आवृत्ति के व्युत्क्रमानुपाती होता है (हाइपरबोला वक्र)।',
      'प्रेरक की सम्मिश्र प्रतिबाधा ZL = +j XL होती है (धारा 90° लैग करती है)।',
      'संधारित्र की सम्मिश्र प्रतिबाधा ZC = -j XC होती है (धारा 90° लीड करती है)।',
      'क्रॉसओवर आवृत्ति f₀ = 1/(2π√LC) पर XL = XC होता है और दोनों +j व -j रिएक्टेंस एक दूसरे को निरस्त कर देते हैं।'
    ],
    bn: [
      'XL = 2πfL ফ্রিকোয়েন্সির সরাসরি সমানুপাতিক (রৈখিক রেখা)।',
      'XC = 1/(2πfC) ফ্রিকোয়েন্সির ব্যস্তানুপাতিক (হাইপারবোলিক বক্ররেখা)।',
      'আবেশকের জটিল ইম্পিড্যান্স ZL = +j XL (কারেন্ট ৯০° ল্যাগ করে)।',
      'ক্যাপাসিটরের জটিল ইম্পিড্যান্স ZC = -j XC (কারেন্ট ৯০° লিড করে)।',
      'ক্রসওভার কম্পাঙ্ক f₀ = 1/(2π√LC) এ XL = XC হয় এবং +j ও -j রিঅ্যাকট্যান্স একে অপরকে প্রশমিত করে।'
    ]
  },
  commonMistakes: {
    en: [
      'Adding reactances arithmetically instead of vectorially: forgetting that inductive is +j and capacitive is -j, so net reactance in series is XL - XC, not XL + XC.',
      'Assuming crossover frequency depends on voltage: f₀ = 1/(2π√LC) depends purely on L and C, completely independent of voltage or current.',
      'Treating DC resistance and reactance as the same: resistance converts energy to heat (dissipative), whereas reactance stores and returns field energy (non-dissipative).'
    ],
    hi: [
      'रिएक्टेंस को साधारण रूप से जोड़ देना: यह भूल जाना कि इंडक्टिव +j है और कैपेसिटिव -j है, अतः शुद्ध मान XL - XC होता है, न कि XL + XC।',
      'यह सोचना कि क्रॉसओवर आवृत्ति वोल्टेज पर निर्भर करती है: f₀ केवल L और C पर निर्भर करती है, वोल्टेज या करंट पर नहीं।',
      'प्रतिरोध और रिएक्टेंस को समान समझना: प्रतिरोध ऊर्जा को ऊष्मा में बदलता है, जबकि रिएक्टेंस ऊर्जा को केवल संचित और वापस करता है।'
    ],
    bn: [
      'বীজগণিতীয়ভাবে রিঅ্যাকট্যান্স যোগ করা: আবেশক হলো +j এবং ধারক হলো -j, তাই সিরিজ সার্কিটে নেট রিঅ্যাকট্যান্স হলো XL - XC, যোগফল নয়।',
      'মনে করা ক্রসওভার কম্পাঙ্ক ভোল্টেজের ওপর নির্ভরশীল: f₀ শুধুমাত্র L এবং C এর মানের ওপর নির্ভর করে।',
      'রোধ ও রিঅ্যাকট্যান্সকে একই মনে করা: রোধ তাপ অপচয় করে, আর রিঅ্যাকট্যান্স শক্তি অপচয় না করে সংরক্ষণ ও ফেরত দেয়।'
    ]
  },
  mcqs: [
    {
      id: 'quiz-ch5-l9-1',
      question: {
        en: 'In complex j-notation, the electrical impedances of a pure inductor and a pure capacitor are represented respectively as:',
        hi: 'सम्मिश्र j-संकेतन में, एक शुद्ध प्रेरक और शुद्ध संधारित्र की विद्युत प्रतिबाधा को क्रमशः कैसे दर्शाया जाता है?',
        bn: 'জটিল j-পদ্ধতিতে একটি বিশুদ্ধ আবেশক ও বিশুদ্ধ ধারকের বৈদ্যুতিক ইম্পিড্যান্সকে যথাক্রমে কীভাবে প্রকাশ করা হয়?'
      },
      options: [
        { id: 'opt-a', text: { en: '+j XL and -j XC', hi: '+j XL एवं -j XC', bn: '+j XL এবং -j XC' } },
        { id: 'opt-b', text: { en: '-j XL and +j XC', hi: '-j XL एवं +j XC', bn: '-j XL এবং +j XC' } },
        { id: 'opt-c', text: { en: '+j XL and +j XC', hi: '+j XL एवं +j XC', bn: '+j XL এবং +j XC' } },
        { id: 'opt-d', text: { en: 'XL and XC (Real scalars)', hi: 'XL एवं XC (वास्तविक अदिश)', bn: 'XL এবং XC (বাস্তব স্কেলার)' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Inductive impedance leads by +90° (ZL = +j XL), while capacitive impedance lags by -90° (ZC = -j XC = 1/(jωC)).',
        hi: 'इंडक्टिव प्रतिबाधा +90° होती है (ZL = +j XL) और कैपेसिटिव प्रतिबाधा -90° होती है (ZC = -j XC)।',
        bn: 'ইন্ডাক্টিভ ইম্পিড্যান্স ধনাত্মক কাল্পনিক (+j XL) এবং ক্যাপাসিটিভ ইম্পিড্যান্স ঋণাত্মক কাল্পনিক (-j XC)।'
      }
    },
    {
      id: 'quiz-ch5-l9-2',
      question: {
        en: 'At a frequency below the crossover frequency (f < f₀), a circuit containing both L and C behaves as:',
        hi: 'क्रॉसओवर आवृत्ति से कम आवृत्ति पर (f < f₀), L और C दोनों वाला परिपथ कैसा व्यवहार करता है?',
        bn: 'ক্রসওভার কম্পাঙ্কের চেয়ে কম কম্পাঙ্কে (f < f₀), L এবং C উভয় উপাদানযুক্ত সার্কিটটি কেমন আচরণ প্রকাশ করে?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Capacitive dominant (XC > XL, current leads voltage)', hi: 'कैपेसिटिव प्रधान (XC > XL, धारा वोल्टेज से लीड करती है)', bn: 'ক্যাপাসিটিভ প্রধান (XC > XL, কারেন্ট ভোল্টেজের চেয়ে এগিয়ে থাকে)' } },
        { id: 'opt-b', text: { en: 'Inductive dominant (XL > XC, current lags voltage)', hi: 'इंडक्टिव प्रधान (XL > XC, धारा वोल्टेज से लैग करती है)', bn: 'ইন্ডাক্টিভ প্রধান (XL > XC, কারেন্ট ভোল্টেজের চেয়ে পিছিয়ে থাকে)' } },
        { id: 'opt-c', text: { en: 'Purely resistive with zero impedance', hi: 'शून्य प्रतिबाधा के साथ शुद्ध प्रतिरोधी', bn: 'সম্পূর্ণ রোধীয়' } },
        { id: 'opt-d', text: { en: 'Open circuit', hi: 'ओपन सर्किट', bn: 'ওপেন সার্কিট' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'When f < f₀, XC = 1/(2πfC) is large while XL = 2πfL is small. Thus XC > XL, making the circuit capacitive dominant.',
        hi: 'जब f < f₀ होता है, तब XC बड़ा और XL छोटा होता है (XC > XL)। अतः परिपथ कैपेसिटिव प्रधान व्यवहार करता है।',
        bn: 'যখন f < f₀ হয়, তখন XC এর মান বড় এবং XL এর মান কম থাকে (XC > XL)। ফলে সার্কিটটি ক্যাপাসিটিভ প্রধান হয়।'
      }
    },
    {
      id: 'quiz-ch5-l9-3',
      question: {
        en: 'If an inductor L = 100 mH and capacitor C = 10 µF are connected together, their equal reactance crossover frequency f₀ is approximately:',
        hi: 'यदि एक प्रेरक L = 100 mH और संधारित्र C = 10 µF एक साथ जुड़े हैं, तो उनकी समान रिएक्टेंस क्रॉसओवर आवृत्ति f₀ लगभग कितनी होगी?',
        bn: 'যদি একটি আবেশক L = ১০০ mH এবং ধারক C = ১০ µF একসাথে যুক্ত থাকে, তবে তাদের সমান রিঅ্যাকট্যান্স ক্রসওভার কম্পাঙ্ক f₀ প্রায় কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '159.15 Hz', hi: '159.15 Hz', bn: '১৫৯.১৫ Hz' } },
        { id: 'opt-b', text: { en: '50.00 Hz', hi: '50.00 Hz', bn: '৫০.০০ Hz' } },
        { id: 'opt-c', text: { en: '1000.00 Hz', hi: '1000.00 Hz', bn: '১০০০.০০ Hz' } },
        { id: 'opt-d', text: { en: '318.30 Hz', hi: '318.30 Hz', bn: '৩১৮.৩০ Hz' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'f₀ = 1 / (2π√(LC)) = 1 / (2π √(0.100 × 10 × 10⁻⁶)) = 1 / (2π √(10⁻⁶)) = 1 / (2π × 10⁻³) = 1000 / (2π) = 159.15 Hz.',
        hi: 'f₀ = 1 / (2π√(LC)) = 1 / (2π √(0.1 × 10⁻⁵)) = 1000 / 2π = 159.15 Hz।',
        bn: 'f₀ = ১ / (২π√(LC)) = ১০০০ / (২π) = ১৫৯.১৫ Hz।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch5-l9-1',
      question: {
        en: 'An AC circuit contains an inductor L = 0.20 H and a capacitor C = 50 µF connected in series with a 200 V variable-frequency AC source. Calculate: (a) Inductive reactance XL at 50 Hz, (b) Capacitive reactance XC at 50 Hz, (c) Net reactance Xnet at 50 Hz, (d) The crossover frequency f₀ where XL = XC, (e) The reactance magnitude XL = XC at crossover frequency f₀.',
        hi: 'एक एसी परिपथ में L = 0.20 H का प्रेरक और C = 50 µF का संधारित्र 200 V परिवर्ती-आवृत्ति एसी स्रोत के साथ श्रेणी में जुड़े हैं। गणना करें: (a) 50 Hz पर इंडक्टिव रिएक्टेंस XL, (b) 50 Hz पर कैपेसिटिव रिएक्टेंस XC, (c) 50 Hz पर शुद्ध रिएक्टेंस Xnet, (d) क्रॉसओवर आवृत्ति f₀ जहाँ XL = XC हो, (e) f₀ पर रिएक्टेंस का मान।',
        bn: 'একটি এসি সার্কিটে L = ০.২০ H আবেশক এবং C = ৫০ µF ধারক একটি ২০০ V পরিবর্তনশীল কম্পাঙ্কের এসি উৎসের সাথে সিরিজে যুক্ত। নির্ণয় করুন: (a) ৫০ Hz এ ইন্ডাক্টিভ রিঅ্যাকট্যান্স XL, (b) ৫০ Hz এ ক্যাপাসিটিভ রিঅ্যাকট্যান্স XC, (c) ৫০ Hz এ নেট রিঅ্যাকট্যান্স Xnet, (d) ক্রসওভার কম্পাঙ্ক f₀ যেখানে XL = XC, (e) f₀ কম্পাঙ্কে রিঅ্যাকট্যান্সের মান।'
      },
      hint: {
        en: 'At 50 Hz: XL = 2π(50)(0.2) = 62.83 Ω. XC = 1/(2π × 50 × 50×10⁻⁶) = 63.66 Ω. Xnet = 62.83 - 63.66 = -0.83 Ω (Capacitive). f₀ = 1 / (2π√(0.2 × 50×10⁻⁶)) = 1 / (2π × 0.003162) = 50.33 Hz. XL(f₀) = 2π(50.33)(0.2) = 63.25 Ω.',
        hi: '50 Hz पर: XL = 62.83 Ω, XC = 63.66 Ω, Xnet = -0.83 Ω। f₀ = 1 / (2π√(0.2 × 50×10⁻⁶)) = 50.33 Hz। f₀ पर XL = XC = 63.25 Ω।',
        bn: '৫০ Hz এ: XL = ৬২.৮৩ Ω, XC = ৬৩.৬৬ Ω, Xnet = -০.৮৩ Ω। f₀ = ৫০.৩৩ Hz। f₀ এ XL = XC = ৬৩.২৫ Ω।'
      },
      answerKey: {
        en: '(a) At 50 Hz, Inductive Reactance XL = 2π × 50 × 0.20 = 62.83 Ω.\n(b) At 50 Hz, Capacitive Reactance XC = 1 / (2π × 50 × 50 × 10⁻⁶) = 63.66 Ω.\n(c) Net Reactance Xnet = XL - XC = 62.83 - 63.66 = -0.83 Ω (Slightly Capacitive dominant, current leads by almost 90° if R=0).\n(d) Crossover frequency f₀ = 1 / (2π √(L·C)) = 1 / (2π √(0.20 × 50 × 10⁻⁶)) = 1 / (2π √(10⁻⁵)) = 1 / (2π × 3.1623 × 10⁻³) = 50.33 Hz.\n(e) Reactance magnitude at f₀ = 2π × 50.33 × 0.20 = 63.25 Ω (and XC = 1 / (2π × 50.33 × 50 × 10⁻⁶) = 63.25 Ω).',
        hi: '(a) 50 Hz पर इंडक्टिव रिएक्टेंस XL = 62.83 Ω।\n(b) 50 Hz पर कैपेसिटिव रिएक्टेंस XC = 63.66 Ω।\n(c) शुद्ध रिएक्टेंस Xnet = 62.83 - 63.66 = -0.83 Ω (हल्का कैपेसिटिव)।\n(d) क्रॉसओवर आवृत्ति f₀ = 50.33 Hz।\n(e) f₀ पर रिएक्टेंस का परिमाण XL = XC = 63.25 Ω।',
        bn: '(a) ৫০ Hz এ ইন্ডাক্টিভ রিঅ্যাকট্যান্স XL = ৬২.৮৩ Ω।\n(b) ৫০ Hz এ ক্যাপাসিটিভ রিঅ্যাকট্যান্স XC = ৬৩.৬৬ Ω।\n(c) নেট রিঅ্যাকট্যান্স Xnet = ৬২.৮৩ - ৬৩.৬৬ = -০.৮৩ Ω (ক্যাপাসিটিভ)।\n(d) ক্রসওভার কম্পাঙ্ক f₀ = ৫০.৩৩ Hz।\n(e) f₀ এ রিঅ্যাকট্যান্স XL = XC = ৬৩.২৫ Ω।'
      }
    }
  ]
};

export {
  LESSON_SERIES_RL_RC,
  LESSON_SERIES_RLC,
  LESSON_AC_IMPEDANCE_ADMITTANCE,
  LESSON_AC_SERIES_PARALLEL,
  LESSON_RESONANCE,
  LESSON_RESONANT_FREQUENCY_Q,
  LESSON_AC_POWER,
  LESSON_POWER_FACTOR,
  LESSON_THREE_PHASE_INTRO,
  LESSON_STAR_DELTA_AC,
  LESSON_AC_PRACTICAL_APPLICATIONS
};

export const CHAPTER_5_LESSONS: Record<string, Lesson> = {
  'ch5-ac-fundamentals': LESSON_AC_FUNDAMENTALS,
  'ch5-sinusoidal-waveform': LESSON_SINUSOIDAL_WAVEFORM,
  'ch5-rms-average-values': LESSON_RMS_AVERAGE,
  'ch5-phase-phase-difference': LESSON_PHASE_DIFFERENCE,
  'ch5-complex-numbers': LESSON_COMPLEX_NUMBERS,
  'ch5-ac-resistance': LESSON_AC_RESISTANCE,
  'ch5-ac-inductor': LESSON_AC_INDUCTOR,
  'ch5-ac-capacitor': LESSON_AC_CAPACITOR,
  'ch5-inductive-reactance': LESSON_REACTANCE_COMPARISON,
  'ch5-series-rl-rc': LESSON_SERIES_RL_RC,
  'ch5-series-rlc': LESSON_SERIES_RLC,
  'ch5-ac-impedance-admittance': LESSON_AC_IMPEDANCE_ADMITTANCE,
  'ch5-ac-series-parallel': LESSON_AC_SERIES_PARALLEL,
  'ch5-resonance': LESSON_RESONANCE,
  'ch5-resonant-frequency-q': LESSON_RESONANT_FREQUENCY_Q,
  'ch5-ac-power': LESSON_AC_POWER,
  'ch5-power-factor': LESSON_POWER_FACTOR,
  'ch5-three-phase-intro': LESSON_THREE_PHASE_INTRO,
  'ch5-star-delta-ac': LESSON_STAR_DELTA_AC,
  'ch5-ac-practical-applications': LESSON_AC_PRACTICAL_APPLICATIONS
};
