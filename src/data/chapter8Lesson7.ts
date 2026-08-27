import { Lesson } from '../types';

export const LESSON_HYSTERESIS_BH_CURVE: Lesson = {
  id: 'lsn-ch8-hysteresis-b-h-curve',
  topicId: 'ch8-hysteresis-b-h-curve',
  chapterId: 'ch-inductors',
  order: 7,
  title: {
    en: 'Magnetic Hysteresis, B-H Curve & Core Losses',
    hi: 'चुंबकीय हिस्टैरिसीस, B-H वक्र एवं कोर हानियाँ',
    bn: 'চৌম্বক হিস্টেরেসিস, B-H কার্ভ ও কোর লস'
  },
  description: {
    en: 'The B-H magnetization curve, saturation flux density (B_sat), remanence/retentivity (B_r), coercivity (H_c), physical explanation of magnetic hysteresis, Steinmetz empirical formula for hysteresis loss (P_h), and soft vs hard magnetic materials.',
    hi: 'B-H चुंबकन वक्र, संतृप्ति फ्लक्स घनत्व (B_sat), अवशिष्ट चुंबकत्व (B_r), निग्राहिता (H_c), हिस्टैरिसीस लूप का भौतिक सिद्धांत, स्टीनमेट्ज़ सूत्र (P_h) एवं नर्म बनाम कठोर चुंबकीय पदार्थ।',
    bn: 'B-H ম্যাগনেটাইজেশন কার্ভ, স্যাচুরেশন ফ্লাক্স ঘনত্ব (B_sat), অবশিষ্ট চুম্বকত্ব (B_r), কোয়ার্সিভিটি (H_c), চৌম্বক হিস্টেরেসিস ব্যাখ্যা, স্টেইনমেটজের হিস্টেরেসিস অপচয় সূত্র (P_h) ও নরম বনাম শক্ত চৌম্বক উপাদান।'
  },
  easyExplanation: {
    en: 'When you magnetize and demagnetize iron repeatedly with AC current, the magnetic domains experience friction as they flip back and forth. The magnetic flux density (B) lags behind the applied current (H). This lagging phenomenon is called "hysteresis", and the energy lost during each cycle turns directly into heat!',
    hi: 'जब लोहे को एसी धारा द्वारा बार-बार चुंबकित और विचुंबकित किया जाता है, तो चुंबकीय डोमेन के आगे-पीछे घूमने में आंतरिक घर्षण होता है। फ्लक्स घनत्व (B) प्रयुक्त धारा (H) से पीछे रह जाता है। इसे "हिस्टैरिसीस" कहते हैं, और हर चक्र में नष्ट हुई ऊर्जा ऊष्मा (गर्मी) में बदल जाती है!',
    bn: 'যখন এসি কারেন্ট দ্বারা লোহাকে বারবার চুম্বকীয় ও বিচুম্বকীয় করা হয়, তখন আণবিক ডোমেইনগুলো দিক পরিবর্তনের সময় ঘর্ষণ অনুভব করে। ফ্লাক্স ঘনত্ব (B) প্রযুক্ত প্রাবল্য (H) থেকে পিছিয়ে পড়ে। এই ঘটনাকে "হিস্টেরেসিস" বলে এবং প্রতিটি সাইকেলে অপচয়কৃত শক্তি তাপে পরিণত হয়!'
  },
  detailedExplanation: {
    en: `1. The B-H Magnetization Curve:
When an unmagnetized ferromagnetic core is subjected to an increasing magnetizing field H = (N·I)/l:
- Initial Curve (O to S): Domain walls move easily; B rises sharply.
- Knee Point: Most domains are aligned in the field direction.
- Magnetic Saturation (B_sat): All magnetic domains are 100% aligned. Further increases in H produce almost no increase in B (core acts like air). Typical B_sat for silicon steel is 1.6 to 2.0 Tesla.

2. Complete Hysteresis Loop Cycle:
1. Retentivity / Remanence (B_r): When H is reduced back to zero (I = 0), a residual magnetic flux remains in the core.
2. Coercivity / Coercive Force (H_c): The reverse magnetizing force required to reduce the residual magnetic flux density to zero.
3. Reverse Saturation (-B_sat) and return loop completion.

3. Physical Meaning of the Hysteresis Loop Area:
The area enclosed by the B-H hysteresis loop represents the energy lost per unit volume (Joules/m³) as thermal heat during one complete cycle of AC magnetization:
Energy Loss per cycle = ∮ H · dB [J/m³/cycle]

4. Steinmetz's Empirical Formula for Hysteresis Power Loss:
Charles Proteus Steinmetz established the fundamental engineering formula:
P_h = η · (B_max)^n · f · V [Watts]
Where:
- η = Steinmetz hysteresis coefficient (depends on material grade: ≈ 0.001 to 0.003 for silicon steel).
- B_max = Maximum operating flux density (Tesla).
- n = Steinmetz exponent (typically 1.6 for B_max between 0.1 T and 1.2 T; up to 2.0 for higher saturation).
- f = AC supply frequency (Hz).
- V = Volume of the magnetic core (m³).

5. Soft vs Hard Magnetic Materials:
- Soft Magnetic Materials (Silicon Steel, Ferrites, Permalloy, Metglas):
  Narrow B-H loop, high permeability, low coercivity H_c, low hysteresis loss. Used in transformers, inductors, electric motors, and generators.
- Hard Magnetic Materials (NdFeB Neodymium, Alnico, Samarium-Cobalt, Hard Ferrites):
  Extremely wide B-H loop, very high retentivity B_r and coercivity H_c. Resists demagnetization. Used to manufacture permanent magnets for speakers, hard drives, and BLDC motors.`,
    hi: `1. B-H वक्र एवं मुख्य बिंदु:
- संतृप्ति (Saturation, B_sat): जब सभी डोमेन पूरी तरह संरेखित हो जाते हैं (सिलिकॉन स्टील में 1.6 - 2.0 T)।
- अवशिष्ट चुंबकत्व (Retentivity, B_r): H = 0 होने पर कोर में बचा हुआ चुंबकत्व।
- निग्राहिता (Coercivity, H_c): अवशिष्ट चुंबकत्व को शून्य करने के लिए आवश्यक विपरीत चुंबकीय तीव्रता।

2. हिस्टैरिसीस हानि (Hysteresis Loss) - स्टीनमेट्ज़ सूत्र:
P_h = η · (B_max)^1.6 · f · V [वाट]
जहाँ f आवृत्ति, V कोर का आयतन एवं η पदार्थ गुणांक है।

3. नर्म बनाम कठोर चुंबकीय पदार्थ:
- नर्म पदार्थ (Soft): संकीर्ण लूप, कम हिस्टैरिसीस हानि (ट्रांसफॉर्मर, इंडक्टर कोर)।
- कठोर पदार्थ (Hard): चौड़ा लूप, उच्च निग्राहिता (स्थायी चुंबक, लाउडस्पीकर)।`,
    bn: `১. B-H কার্ভ ও প্রধান পরিভাষা:
- স্যাচুরেশন (B_sat): যখন কোরের সমস্ত ডোমেইন সম্পূর্ণ সারিবদ্ধ হয় (সিলিকন স্টিলে ১.৬ - ২.০ T)।
- রেটেনটিভিটি (B_r): H = ০ করার পরেও কোরে জমে থাকা অবশিষ্ট চুম্বকত্ব।
- কোয়ার্সিভিটি (H_c): অবশিষ্ট ফ্লাক্সকে শূন্যে নামাতে প্রয়োজনীয় বিপরীত চৌম্বক প্রাবল্য।

২. হিস্টেরেসিস লস - স্টেইনমেটজ সমীকরণ:
P_h = η · (B_max)^১.৬ · f · V [ওয়াট]
যেখানে f ফ্রিকোয়েন্সি, V কোরের আয়তন এবং η উপাদান ধ্রুবক।

৩. নরম বনাম শক্ত চৌম্বক উপাদান:
- নরম উপাদান (Soft): সরু লুপ, অত্যন্ত কম হিস্টেরেসিস অপচয় (ট্রান্সফরমার, ইন্ডাক্টর কোর)।
- শক্ত উপাদান (Hard): চওড়া লুপ, উচ্চ কোয়ার্সিভিটি (স্থায়ী চুম্বক, BLDC মোটর)।`
  },
  formulas: [
    {
      expression: 'P_h = η · (B_max)^{1.6} · f · V',
      description: {
        en: 'Steinmetz empirical equation for core hysteresis power loss',
        hi: 'हिस्टैरिसीस शक्ति हानि का स्टीनमेट्ज़ सूत्र',
        bn: 'কোর হিস্টেরেসিস অপচয়ের স্টেইনমেটজ সমীকরণ'
      }
    },
    {
      expression: 'W_h = ∮ H · dB',
      description: {
        en: 'Hysteresis energy loss per cycle per unit volume (B-H loop area)',
        hi: 'प्रति चक्र प्रति इकाई आयतन हिस्टैरिसीस ऊर्जा हानि (लूप क्षेत्रफल)',
        bn: 'প্রতি সাইকেলে একক আয়তনে হিস্টেরেসিস শক্তি অপচয় (B-H লুপ ক্ষেত্রফল)'
      }
    }
  ],
  workedExamples: [
    {
      problem: {
        en: 'A magnetic core of volume 0.015 m³ operates at a frequency of 50 Hz with maximum flux density B_max = 1.2 Tesla. If the material\'s Steinmetz coefficient is η = 120 J/m³, calculate the total hysteresis power loss.',
        hi: '0.015 m³ आयतन वाला एक चुंबकीय कोर 50 Hz आवृत्ति एवं अधिकतम फ्लक्स घनत्व B_max = 1.2 T पर कार्य करता है। यदि स्टीनमेट्ज़ गुणांक η = 120 J/m³ है, तो कुल हिस्टैरिसीस हानि ज्ञात करें।',
        bn: '০.০১৫ m³ আয়তনের একটি চৌম্বক কোর ৫০ Hz ফ্রিকোয়েন্সি এবং সর্বোচ্চ ফ্লাক্স ঘনত্ব B_max = ১.২ T তে কাজ করে। উপাদানটির স্টেইনমেটজ ধ্রুবক η = ১২০ J/m³ হলে মোট হিস্টেরেসিস অপচয় নির্ণয় করো।'
      },
      solution: {
        en: `Given:
V = 0.015 m³
f = 50 Hz
B_max = 1.2 T
η = 120 J/m³

Calculate B_max^1.6:
1.2^1.6 ≈ 1.3387

Apply Steinmetz formula:
P_h = η · (B_max)^1.6 · f · V
P_h = 120 × 1.3387 × 50 × 0.015
P_h = 120.48 Watts.`,
        hi: `सूत्र: P_h = η · (B_max)^1.6 · f · V
1.2^1.6 = 1.3387
P_h = 120 × 1.3387 × 50 × 0.015 = 120.48 वाट।`,
        bn: `সূত্র: P_h = η · (B_max)^১.৬ · f · V
১.২^১.৬ = ১.৩৩৮৭
P_h = ১২০ × ১.৩৩৮৭ × ৫০ × ০.০১৫ = ১২০.৪৮ ওয়াট।`
      }
    }
  ],
  quiz: [
    {
      question: {
        en: 'Which property is most desirable for the magnetic core of a power transformer or inductor?',
        hi: 'पावर ट्रांसफॉर्मर या इंडक्टर के चुंबकीय कोर के लिए कौन सा गुण सबसे वांछनीय है?',
        bn: 'পাওয়ার ট্রান্সফরমার বা ইন্ডাক্টরের কোরের জন্য সবচেয়ে বাঞ্ছনীয় বৈশিষ্ট্য কোনটি?'
      },
      options: {
        en: ['High coercivity and broad B-H loop', 'Low coercivity, high permeability, and narrow B-H loop', 'Zero saturation flux density', 'High electrical conductivity with thick solid iron'],
        hi: ['उच्च निग्राहिता एवं चौड़ा लूप', 'कम निग्राहिता, उच्च पारगम्यता एवं संकीर्ण B-H लूप', 'शून्य संतृप्ति फ्लक्स', 'मोटी ठोस लोहे की प्लेटें'],
        bn: ['উচ্চ কোয়ার্সিভিটি ও চওড়া লুপ', 'কম কোয়ার্সিভিটি, উচ্চ প্রবেশ্যতা ও সরু B-H লুপ', 'শূন্য স্যাচুরেশন ফ্লাক্স', 'উচ্চ বিদ্যুৎ পরিবাহিতা']
      },
      correctAnswer: 1,
      explanation: {
        en: 'A soft magnetic core with high permeability, low coercivity, and a narrow B-H loop minimizes hysteresis energy loss and heat generation.',
        hi: 'कम निग्राहिता एवं संकीर्ण B-H लूप वाला नर्म चुंबकीय कोर हिस्टैरिसीस ऊर्जा हानि को न्यूनतम रखता है।',
        bn: 'কম কোয়ার্সিভিটি ও সরু B-H লুপযুক্ত নরম চৌম্বক উপাদান হিস্টেরেসিস অপচয় ও তাপমাত্রা সর্বনিম্ন রাখে।'
      }
    }
  ],
  flashcards: [
    {
      term: {
        en: 'Coercivity (H_c)',
        hi: 'निग्राहिता (Coercivity)',
        bn: 'কোয়ার্সিভিটি (H_c)'
      },
      definition: {
        en: 'The reverse magnetic field intensity required to reduce residual flux density to zero.',
        hi: 'अवशिष्ट फ्लक्स को शून्य करने के लिए आवश्यक विपरीत चुंबकीय तीव्रता।',
        bn: 'অবশিষ্ট চৌম্বক ফ্লাক্সকে শূন্যে নামাতে প্রয়োজনীয় বিপরীতমুখী চৌম্বক প্রাবল্য।'
      }
    }
  ]
};
