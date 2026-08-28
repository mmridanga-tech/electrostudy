import { DetailedSubject } from '../types';

export const ELECTRICAL_MACHINES_SUBJECT: DetailedSubject = {
  id: 'electrical-machines',
  slug: 'electrical-machines',
  icon: 'Cpu',
  title: {
    en: 'Electrical Machines (DC & AC)',
    hi: 'इलेक्ट्रिकल मशीनें (DC एवं AC)',
    bn: 'ইলেকট্রিক্যাল মেশিনস (DC ও AC)'
  },
  description: {
    en: 'Complete 24-topic syllabus covering Transformers, DC Generators, DC Motors, Three-Phase Induction Motors, and Synchronous Machines.',
    hi: 'ट्रांसफॉर्मर, डीसी जनरेटर, डीसी मोटर, 3-फेज इंडक्शन मोटर एवं सिंक्रोनस मशीनों का संपूर्ण 24-विषय पाठ्यक्रम।',
    bn: 'ট্রান্সফরমার, ডিসি জেনারেটর, ডিসি মোটর, ৩-ফেজ ইন্ডাকশন মোটর এবং সিনক্রোনাস মেশিনের সমন্বিত সম্পূর্ণ ২৪-টপিক সিলেবাস।'
  },
  chapters: [
    {
      id: 'em-ch1-transformers',
      subjectId: 'electrical-machines',
      order: 1,
      title: {
        en: 'Module 1: Transformers (Fundamentals, Testing & Protection)',
        hi: 'मड्यूल 1: ट्रांसफॉर्मर (मूल सिद्धांत, परीक्षण एवं सुरक्षा)',
        bn: 'মডিউল ১: ট্রান্সফরমার (মৌলিক ধারণা, টেস্ট ও সুরক্ষা)'
      },
      topics: [
        {
          id: 'ch6-transformer-fundamentals',
          chapterId: 'em-ch1-transformers',
          order: 1,
          level: 'Foundation',
          title: {
            en: '1. Transformer Fundamentals & EMF Equation',
            hi: '1. ट्रांसफॉर्मर के मूल सिद्धांत एवं EMF समीकरण',
            bn: '১. ট্রান্সফরমারের মূলনীতি ও EMF সমীকরণ'
          },
          description: {
            en: 'Mutual induction, ideal vs practical transformers, transformation ratio K = V2/V1 = N2/N1 = I1/I2, EMF equation E = 4.44·f·N·Φm, and core flux density.',
            hi: 'पारस्परिक प्रेरण, आदर्श व वास्तविक ट्रांसफॉर्मर, रूपांतरण अनुपात K, EMF समीकरण E = 4.44·f·N·Φm तथा कोर फ्लक्स घनत्व।',
            bn: 'মিউচুয়াল ইনডাকশন, আদর্শ ও বাস্তব ট্রান্সফরমার, রূপান্তর অনুপাত K, EMF সমীকরণ E = ৪.৪৪·f·N·Φm এবং কোর ফ্লাক্স ঘনত্ব।'
          }
        },
        {
          id: 'ch6-transformer-types-construction',
          chapterId: 'em-ch1-transformers',
          order: 2,
          level: 'Diploma',
          title: {
            en: '2. Transformer Types, Construction & Cooling Methods',
            hi: '2. ट्रांसफॉर्मर प्रकार, संरचना एवं शीतलन विधियाँ',
            bn: '২. ট্রান্সফরমারের প্রকারভেদ, গঠন ও কুলিং পদ্ধতি'
          },
          description: {
            en: 'Core-type vs Shell-type vs Berry-type transformers, CRGO silicon steel laminations, windings, and cooling methods (ONAN, ONAF, OFAF, OFWF).',
            hi: 'कोर-टाइप, शेल-टाइप एवं बेरी-टाइप ट्रांसफॉर्मर, CRGO सिलिकॉन स्टील लेमिनेशन, वाइंडिंग एवं शीतलन विधियाँ (ONAN, ONAF, OFAF, OFWF)।',
            bn: 'কোর-টাইপ, শেল-টাইপ ও বেরি-টাইপ ট্রান্সফরমার, CRGO সিলিকন স্টিল লেমিনেশন, ওয়াইন্ডিং এবং কুলিং পদ্ধতি (ONAN, ONAF, OFAF, OFWF)।'
          }
        },
        {
          id: 'ch6-transformer-equivalent-circuit',
          chapterId: 'em-ch1-transformers',
          order: 3,
          level: 'Engineering',
          title: {
            en: '3. Equivalent Circuit & Phasor Analysis',
            hi: '3. तुल्य परिपथ एवं फेज़र विश्लेषण',
            bn: '৩. সমতুল্য সার্কিট ও ফেজর ডায়াগ্রাম'
          },
          description: {
            en: 'Exact and approximate equivalent circuits referred to primary/secondary, magnetizing reactance Xm, core-loss resistance Rc, and phasor diagrams.',
            hi: 'प्राथमिक/द्वितीयक के संदर्भ में सटीक एवं अनुमानित तुल्य परिपथ, कोर-हानि प्रतिरोध Rc, मैग्नेटाइजिंग रिएक्टेंस Xm एवं फेज़र आरेख।',
            bn: 'প্রাইমারি ও সেকেন্ডারির সাপেক্ষে তুল্য সার্কিট, কোর-লস রেজিস্ট্যান্স Rc, ম্যাগনেটাইজিং রিঅ্যাকট্যান্স Xm এবং ফেজর ডায়াগ্রাম।'
          }
        },
        {
          id: 'ch6-transformer-losses-efficiency',
          chapterId: 'em-ch1-transformers',
          order: 4,
          level: 'Engineering',
          title: {
            en: '4. Transformer Losses, Efficiency & Voltage Regulation',
            hi: '4. हानियाँ, दक्षता एवं वोल्टेज रेगुलेशन',
            bn: '৪. ট্রান্সফরমারের লস, কর্মদক্ষতা ও ভোল্টেজ রেগুলেশন'
          },
          description: {
            en: 'Iron losses (Hysteresis & Eddy current), copper losses (I²R), maximum efficiency condition (Pi = Pcu), all-day efficiency, and voltage regulation formula.',
            hi: 'लौह हानियाँ (हिस्टैरिसीस व भंवर धारा), कॉपर हानियाँ, अधिकतम दक्षता की शर्त (Pi = Pcu), ऑल-डे दक्षता एवं वोल्टेज नियमन।',
            bn: 'আয়রন লস (হিস্টেরেসিস ও এডি কারেন্ট), কপার লস (I²R), সর্বোচ্চ দক্ষতার শর্ত (Pi = Pcu), অল-ডে দক্ষতা এবং ভোল্টেজ রেগুলেশন।'
          }
        },
        {
          id: 'ch6-transformer-tests',
          chapterId: 'em-ch1-transformers',
          order: 5,
          level: 'Engineering',
          title: {
            en: '5. Transformer Testing: OC, SC & Sumpner’s Back-to-Back Tests',
            hi: '5. ट्रांसफॉर्मर परीक्षण: OC, SC एवं संपटनर परीक्षण',
            bn: '৫. ট্রান্সফরমার টেস্টিং: OC, SC ও সাম্পনার টেস্ট'
          },
          description: {
            en: 'Open Circuit (OC) test for core parameters, Short Circuit (SC) test for winding impedance, and Sumpner’s test for full-load temperature rise.',
            hi: 'कोर पैरामीटर हेतु ओपन सर्किट (OC) टेस्ट, वाइंडिंग प्रतिबाधा हेतु शॉर्ट सर्किट (SC) टेस्ट एवं तापमान वृद्धि हेतु संपटनर टेस्ट।',
            bn: 'কোর প্যারামিটারের জন্য ওপেন সার্কিট (OC) টেস্ট, ওয়াইন্ডিং ইম্পিডেন্সের জন্য শর্ট সার্কিট (SC) টেস্ট এবং তাপমাত্রা বৃদ্ধির জন্য সাম্পনার টেস্ট।'
          }
        },
        {
          id: 'ch6-transformer-parallel-operation',
          chapterId: 'em-ch1-transformers',
          order: 6,
          level: 'Engineering',
          title: {
            en: '6. Parallel Operation & Load Sharing',
            hi: '6. समानांतर प्रचालन एवं भार विभाजन',
            bn: '৬. প্যারালাল অপারেশন ও লোড শেয়ারিং'
          },
          description: {
            en: 'Essential conditions for parallel operation: equal voltage ratio, same polarity, identical phase sequence/displacement, proportional per-unit impedance.',
            hi: 'समानांतर प्रचालन की आवश्यक शर्तें: समान वोल्टेज अनुपात, समान ध्रुवता, समान फेज़ अनुक्रम एवं आनुपातिक प्रतिबाधा।',
            bn: 'প্যারালাল অপারেশনের অপরিহার্য শর্তাবলী: অভিন্ন ভোল্টেজ অনুপাত, একই পোলারিটি, ফেজ সিকোয়েন্স ও আনুপাতিক পার-ইউনিট ইম্পিডেন্স।'
          }
        },
        {
          id: 'ch6-transformer-protection-maintenance',
          chapterId: 'em-ch1-transformers',
          order: 7,
          level: 'Practical',
          title: {
            en: '7. Transformer Protection (Buchholz Relay, 87T) & Maintenance',
            hi: '7. ट्रांसफॉर्मर सुरक्षा (बुखोल्ज़ रिले, 87T) एवं अनुरक्षण',
            bn: '৭. ট্রান্সফরমার সুরক্ষা (বুখহোলজ রিলে, 87T) ও রক্ষণাবেক্ষণ'
          },
          description: {
            en: 'Buchholz gas-actuated relay, conservator tank, silica gel breather, differential protection (87T), oil dielectric BDV testing, and DGA diagnostics.',
            hi: 'बुखोल्ज़ गैस-चालित रिले, कंज़र्वेटर टैंक, सिलिका जेल ब्रीदर, डिफरेंशियल प्रोटेक्शन (87T), तेल ब्रेकडाउन (BDV) एवं DGA डायग्नोस्टिक्स।',
            bn: 'বুখহোলজ গ্যাস চালিত রিলে, কনজারভেটর ট্যাংক, সিলিকা জেল ব্রিদার, ডিফারেনশিয়াল সুরক্ষা (87T), তেলের ডাই-ইলেকট্রিক BDV টেস্ট ও DGA বিশ্লেষণ।'
          }
        },
        {
          id: 'ch6-transformer-applications',
          chapterId: 'em-ch1-transformers',
          order: 8,
          level: 'Practical',
          title: {
            en: '8. Auto-transformers, Instrument Transformers & Industrial Duty',
            hi: '8. ऑटो-ट्रांसफॉर्मर, इंस्ट्रूमेंट ट्रांसफॉर्मर (CT/PT) एवं औद्योगिक उपयोग',
            bn: '৮. অটো-ট্রান্সফরমার, ইনস্ট্রুমেন্ট ট্রান্সফরমার ও শিল্প প্রয়োগ'
          },
          description: {
            en: 'Single-winding auto-transformers (copper saving factor 1 - 1/K), Current (CT) and Potential Transformers (PT), and specialized furnace and inverter-duty units.',
            hi: 'ऑटो-ट्रांसफॉर्मर (कॉपर बचत 1 - 1/K), करंट (CT) व पोटेंशियल ट्रांसफॉर्मर (PT), फर्नेस एवं सोलर इनवर्टर-ड्यूटी ट्रांसफॉर्मर।',
            bn: 'অটো-ট্রান্সফরমার (কপার সাশ্রয় ১ - ১/K), কারেন্ট ও পটেনশিয়াল ট্রান্সফরমার (CT/PT), ফার্নেস এবং সোলার ইনভার্টার ট্রান্সফরমার।'
          }
        }
      ]
    },
    {
      id: 'em-ch2-dc-generators',
      subjectId: 'electrical-machines',
      order: 2,
      title: {
        en: 'Module 2: DC Generators (Theory, Construction & Characteristics)',
        hi: 'मड्यूल 2: डीसी जनरेटर (सिद्धांत, संरचना एवं विशेषताएँ)',
        bn: 'মডিউল ২: ডিসি জেনারেটর (মূলনীতি, গঠন ও বৈশিষ্ট্য)'
      },
      topics: [
        {
          id: 'ch6-electrical-machines-fundamentals',
          chapterId: 'em-ch2-dc-generators',
          order: 1,
          level: 'Foundation',
          title: {
            en: '9. Electromechanical Energy Conversion Fundamentals',
            hi: '9. विद्युत-यांत्रिक ऊर्जा रूपांतरण के मूल सिद्धांत',
            bn: '৯. ইলেক্ট্রোমেকানিক্যাল শক্তি রূপান্তরের মূল ভিত্তি'
          },
          description: {
            en: 'Energy flow in magnetic coupling medium, generator and motor actions, Faraday induction, and Lorentz force law F = B·I·L.',
            hi: 'चुंबकीय माध्यम में ऊर्जा प्रवाह, जनरेटर व मोटर क्रिया, फैराडे प्रेरण एवं लोरेंट्ज़ बल नियम F = B·I·L।',
            bn: 'চৌম্বক মাধ্যমে শক্তি প্রবাহ, জেনারেটর ও মোটর ক্রিয়া, ফ্যারাডের আবেশ এবং লরেন্টজ বল সূত্র F = B·I·L।'
          }
        },
        {
          id: 'ch6-magnetic-circuits',
          chapterId: 'em-ch2-dc-generators',
          order: 2,
          level: 'Diploma',
          title: {
            en: '10. Magnetic Circuits & Electromagnetic Principles in Machines',
            hi: '10. चुंबकीय परिपथ एवं विद्युतचुंबकीय सिद्धांत',
            bn: '১০. ম্যাগনেটিক সার্কিট ও ইলেক্ট্রোম্যাগনেটিক নীতি'
          },
          description: {
            en: 'MMF, reluctance, magnetic flux paths, permeability, Lenz’s law, and Fleming’s right-hand rule for generator induced EMF.',
            hi: 'MMF, रिलक्टेंस, चुंबकीय फ्लक्स पथ, लेन्ज का नियम एवं जनरेटर प्रेरित EMF हेतु फ्लेमिंग का दायाँ हाथ नियम।',
            bn: 'MMF, রিলাক্ট্যান্স, চৌম্বক ফ্লাক্স পথ, লেঞ্জের সূত্র এবং জেনারেটরে আবিষ্ট EMF নির্ণয়ে ফ্লেমিংয়ের ডান হাত নিয়ম।'
          }
        },
        {
          id: 'ch6-dc-machine-construction',
          chapterId: 'em-ch2-dc-generators',
          order: 3,
          level: 'Diploma',
          title: {
            en: '11. DC Machine Construction & Armature Windings',
            hi: '11. डीसी मशीन की संरचना एवं आर्मेचर वाइंडिंग (Lap & Wave)',
            bn: '১১. ডিসি মেশিনের গঠন ও আর্মেচার ওয়াইন্ডিং (ল্যাপ ও ওয়েভ)'
          },
          description: {
            en: 'Stator yoke, field poles, armature core laminations, commutator segments, carbon brushes, and Lap (A=P) vs Wave (A=2) windings.',
            hi: 'योक, फील्ड पोल, आर्मेचर कोर, कम्यूटेटर, कार्बन ब्रश तथा लैप (A=P) एवं वेव वाइंडिंग (A=2) की तुलना।',
            bn: 'ইয়োক, ফিল্ড পোল, আর্মেচার কোর, কমিউটেটর, কার্বন ব্রাশ এবং ল্যাপ (A=P) বনাম ওয়েভ (A=2) ওয়াইন্ডিং।'
          }
        },
        {
          id: 'ch6-dc-generator-emf',
          chapterId: 'em-ch2-dc-generators',
          order: 4,
          level: 'Engineering',
          title: {
            en: '12. DC Generator EMF Equation & Voltage Generation',
            hi: '12. डीसी जनरेटर EMF समीकरण एवं वोल्टेज निर्माण',
            bn: '১২. ডিসি জেনারেটরের EMF সমীকরণ ও ভোল্টেজ উৎপাদন'
          },
          description: {
            en: 'Derivation of generated EMF Eg = (P·Φ·Z·N)/(60·A), role of speed N and flux per pole Φ in voltage generation.',
            hi: 'उत्पन्न EMF समीकरण Eg = (P·Φ·Z·N)/(60·A) का निगमन तथा घूर्णन गति N और फ्लक्स Φ का प्रभाव।',
            bn: 'উৎপন্ন EMF সমীকরণ Eg = (P·Φ·Z·N)/(60·A) প্রতিপাদন এবং ঘূর্ণন গতি ও ফ্লাক্সের প্রভাব।'
          }
        },
        {
          id: 'ch6-dc-generator-types',
          chapterId: 'em-ch2-dc-generators',
          order: 5,
          level: 'Diploma',
          title: {
            en: '13. Types of DC Generators & Field Excitation Methods',
            hi: '13. डीसी जनरेटर के प्रकार एवं फील्ड उत्तेजन विधियाँ',
            bn: '১৩. ডিসি জেনারেটরের প্রকারভেদ ও ফিল্ড এক্সাইটেশন'
          },
          description: {
            en: 'Separately excited, shunt, series, cumulative compound, and differential compound DC generators with circuit topologies.',
            hi: 'प्रथक उत्तेजित, शंट, सीरीज, संचयी यौगिक (Cumulative) एवं विभेदी यौगिक (Differential) डीसी जनरेटर।',
            bn: 'পৃথক উত্তেজিত, সান্ট, সিরিজ, কিউমুলেটিভ ও ডিফারেনশিয়াল কম্পাউন্ড ডিসি জেনারেটর।'
          }
        },
        {
          id: 'ch6-dc-generator-characteristics',
          chapterId: 'em-ch2-dc-generators',
          order: 6,
          level: 'Engineering',
          title: {
            en: '14. DC Generator Characteristics & Voltage Build-Up',
            hi: '14. डीसी जनरेटर विशेषताएँ एवं वोल्टेज बिल्ड-अप',
            bn: '১৪. ডিসি জেনারেটরের বৈশিষ্ট্য ও ভোল্টেজ বিল্ড-আপ'
          },
          description: {
            en: 'Open circuit characteristic (OCC), internal and external load curves, critical resistance Rc, critical speed Nc, and residual magnetism.',
            hi: 'ओपन सर्किट विशेषता (OCC), आंतरिक एवं बाह्य लोड वक्र, क्रांतिक प्रतिरोध Rc, क्रांतिक गति Nc एवं अवशिष्ट चुंबकत्व।',
            bn: 'ওপেন সার্কিট ক্যারেক্টারিস্টিক (OCC), লোড বৈশিষ্ট্য রেখা, ক্রিটিক্যাল রেজিস্ট্যান্স Rc, ক্রিটিক্যাল স্পিড Nc এবং অবশিষ্ট চুম্বকত্ব।'
          }
        }
      ]
    },
    {
      id: 'em-ch3-dc-motors',
      subjectId: 'electrical-machines',
      order: 3,
      title: {
        en: 'Module 3: DC Motors (Torque, Starters, Speed Control & Braking)',
        hi: 'मड्यूल 3: डीसी मोटर (टॉर्क, स्टार्टर, गति नियंत्रण एवं ब्रेकिंग)',
        bn: 'মডিউল ৩: ডিসি মোটর (টর্ক, স্টার্টার, গতি নিয়ন্ত্রণ ও ব্রেকিং)'
      },
      topics: [
        {
          id: 'ch6-dc-generator-losses-efficiency',
          chapterId: 'em-ch3-dc-motors',
          order: 1,
          level: 'Engineering',
          title: {
            en: '15. DC Machine Losses, Efficiency & Power Flow',
            hi: '15. डीसी मशीन हानियाँ, दक्षता एवं शक्ति प्रवाह',
            bn: '১৫. ডিসি মেশিনের অপচয়, কর্মদক্ষতা ও পাওয়ার ফ্লো'
          },
          description: {
            en: 'Copper losses (I²R), iron losses (hysteresis and eddy current), mechanical losses, maximum efficiency condition, and power stage flow diagram.',
            hi: 'कॉपर हानियाँ, लौह हानियाँ, यांत्रिक हानियाँ, अधिकतम दक्षता की शर्त एवं पावर फ्लो डायग्राम।',
            bn: 'কপার লস, আয়রন লস, মেকানিক্যাল লস, সর্বোচ্চ দক্ষতার শর্ত এবং পাওয়ার ফ্লো ডায়াগ্রাম।'
          }
        },
        {
          id: 'ch6-dc-motor-principle',
          chapterId: 'em-ch3-dc-motors',
          order: 2,
          level: 'Engineering',
          title: {
            en: '16. DC Motor Principle, Back EMF & Torque Equation',
            hi: '16. डीसी मोटर सिद्धांत, बैक EMF एवं टॉर्क समीकरण',
            bn: '১৬. ডিসি মোটরের নীতি, ব্যাক EMF ও টর্ক সমীকরণ'
          },
          description: {
            en: 'Lorentz force action, back EMF Eb = V - Ia·Ra as an automatic speed regulator, electromagnetic torque equation Ta = (1/2π)·(P·Φ·Z·Ia)/A.',
            hi: 'लोरेंट्ज़ बल, बैक EMF Eb = V - Ia·Ra का स्व-नियमन सिद्धांत एवं विद्युतचुंबकीय टॉर्क Ta ∝ Φ·Ia।',
            bn: 'লরেন্টজ বল, ব্যাক EMF Eb = V - Ia·Ra ও এর অটো-স্পিড রেগুলেশন এবং ইলেক্ট্রোম্যাগনেটিক টর্ক সমীকরণ Ta ∝ Φ·Ia।'
          }
        },
        {
          id: 'ch6-dc-motor-types',
          chapterId: 'em-ch3-dc-motors',
          order: 3,
          level: 'Diploma',
          title: {
            en: '17. Types of DC Motors & Speed-Torque Characteristics',
            hi: '17. डीसी मोटरों के प्रकार एवं गति-टॉर्क विशेषताएँ',
            bn: '১৭. ডিসি মোটরের প্রকারভেদ ও স্পিড-টর্ক বৈশিষ্ট্য'
          },
          description: {
            en: 'DC shunt motor (constant speed), DC series motor (high starting torque, dangerous at no-load), compound motors, and torque-speed curves.',
            hi: 'डीसी शंट मोटर (स्थिर गति), सीरीज मोटर (उच्च स्टार्टिंग टॉर्क), कंपाउंड मोटर एवं टॉर्क-गति वक्र।',
            bn: 'ডিসি সান্ট মোটর (স্থির গতি), সিরিজ মোটর (উচ্চ স্টার্টিং টর্ক, নো-লোডে বিপজ্জনক), কম্পাউন্ড মোটর এবং টর্ক-স্পিড কার্ভ।'
          }
        },
        {
          id: 'ch6-dc-motor-starting',
          chapterId: 'em-ch3-dc-motors',
          order: 4,
          level: 'Practical',
          title: {
            en: '18. DC Motor Starting Methods & Starters (2-Pt, 3-Pt, 4-Pt)',
            hi: '18. डीसी मोटर स्टार्टिंग विधियाँ एवं स्टार्टर (2-Point, 3-Point, 4-Point)',
            bn: '১৮. ডিসি মোটর স্টার্টিং পদ্ধতি ও স্টার্টার (২-পয়েন্ট, ৩-পয়েন্ট, ৪-পয়েন্ট)'
          },
          description: {
            en: 'Why starters are required at zero back EMF, 2-point starter for series motors, 3-point and 4-point starters with No-Volt Release and Overload Release coils.',
            hi: 'शून्य बैक EMF पर स्टार्टर की आवश्यकता, 2-पॉइंट, 3-पॉइंट व 4-पॉइंट स्टार्टर तथा NVR और OLR सुरक्षा।',
            bn: 'শূন্য ব্যাক EMF অবস্থায় স্টার্টারের প্রয়োজন, ২-পয়েন্ট, ৩-পয়েন্ট ও ৪-পয়েন্ট স্টার্টার এবং NVR ও OLR প্রটেকশন।'
          }
        },
        {
          id: 'ch6-dc-motor-speed-control',
          chapterId: 'em-ch3-dc-motors',
          order: 5,
          level: 'Engineering',
          title: {
            en: '19. Speed Control (Flux, Armature, Ward-Leonard) & Electric Braking',
            hi: '19. गति नियंत्रण (फ्लक्स, आर्मेचर, वार्ड-लियोनार्ड) एवं इलेक्ट्रिक ब्रेकिंग',
            bn: '১৯. গতি নিয়ন্ত্রণ (ফ্লাক্স, আর্মেচার, ওয়ার্ড-লিওনার্ড) ও ইলেকট্রিক ব্রেকিং'
          },
          description: {
            en: 'Field flux control (above base speed), armature resistance control (below base speed), Ward-Leonard system (smooth 4-quadrant control), and dynamic/regenerative/plugging braking.',
            hi: 'फील्ड फ्लक्स नियंत्रण (बेस स्पीड से ऊपर), आर्मेचर नियंत्रण (बेस स्पीड से नीचे), वार्ड-लियोनार्ड सिस्टम एवं इलेक्ट्रिक ब्रेकिंग विधियाँ।',
            bn: 'ফিল্ড ফ্লাক্স কন্ট্রোল (বেস গতির উপরে), আর্মেচার কন্ট্রোল (বেস গতির নিচে), ওয়ার্ড-লিওনার্ড পদ্ধতি এবং ডায়নামিক, রিজেনারেটিভ ও প্লাগিং ব্রেকিং।'
          }
        }
      ]
    },
    {
      id: 'em-ch4-induction-motors',
      subjectId: 'electrical-machines',
      order: 4,
      title: {
        en: 'Module 4: Three-Phase Induction Motors (RMF, Torque & Starters)',
        hi: 'मड्यूल 4: 3-फेज इंडक्शन मोटर (RMF, टॉर्क एवं स्टार्टर)',
        bn: 'মডিউল ৪: ৩-ফেজ ইন্ডাকশন মোটর (RMF, টর্ক ও স্টার্টার)'
      },
      topics: [
        {
          id: 'ch6-induction-motor-principle',
          chapterId: 'em-ch4-induction-motors',
          order: 1,
          level: 'Foundation',
          title: {
            en: '20. 3-Phase Induction Motor Operating Principle, RMF & Slip',
            hi: '20. 3-फेज इंडक्शन मोटर कार्य सिद्धांत, RMF एवं स्लिप (s)',
            bn: '২০. ৩-ফেজ ইন্ডাকশন মোটরের মূলনীতি, RMF ও স্লিপ (s)'
          },
          description: {
            en: 'Generation of constant 1.5 Φm Rotating Magnetic Field (RMF), synchronous speed Ns = 120f/P, rotor induced currents, slip definition s = (Ns - Nr)/Ns, and rotor frequency fr = s·f.',
            hi: '1.5 Φm मान के घूर्णी चुंबकीय क्षेत्र (RMF) का निर्माण, तुल्यकालिक गति Ns = 120f/P, स्लिप s = (Ns - Nr)/Ns एवं रोटर आवृत्ति fr = s·f।',
            bn: '১.৫ Φm মানের ঘূর্ণমান চৌম্বক ক্ষেত্র (RMF) সৃষ্টি, সিনক্রোনাস স্পিড Ns = ১২০f/P, স্লিপ সমীকরণ s = (Ns - Nr)/Ns এবং রোটর ফ্রিকোয়েন্সি fr = s·f।'
          }
        },
        {
          id: 'ch6-induction-motor-torque-slip',
          chapterId: 'em-ch4-induction-motors',
          order: 2,
          level: 'Engineering',
          title: {
            en: '21. Torque-Slip Characteristics & Maximum Breakdown Torque',
            hi: '21. टॉर्क-स्लिप विशेषताएँ एवं अधिकतम टॉर्क (Pull-Out Torque)',
            bn: '২১. টর্ক-স্লিপ বৈশিষ্ট্য ও সর্বোচ্চ ব্রেকডাউন টর্ক'
          },
          description: {
            en: 'Electromagnetic torque equation T ∝ s·E2²·R2 / (R2² + (s·X2)²), condition for maximum breakdown torque (R2 = s_max·X2), and starting torque optimization.',
            hi: 'टॉर्क समीकरण T ∝ s·E2²·R2 / (R2² + (s·X2)²), अधिकतम टॉर्क की शर्त (R2 = s_max·X2) एवं स्टार्टिंग टॉर्क सुधार।',
            bn: 'টর্ক উৎপাদন সমীকরণ T ∝ s·E2²·R2 / (R2² + (s·X2)²), সর্বোচ্চ টর্কের শর্ত (R2 = s_max·X2) এবং স্টার্টিং টর্ক অপ্টিমাইজেশন।'
          }
        },
        {
          id: 'ch6-induction-motor-starters-speed',
          chapterId: 'em-ch4-induction-motors',
          order: 3,
          level: 'Practical',
          title: {
            en: '22. Induction Motor Starters (DOL, Star-Delta, Auto-Xfmr) & V/f Speed Control',
            hi: '22. इंडक्शन मोटर स्टार्टर (DOL, स्टार-डेल्टा, ऑटो-ट्रांसफॉर्मर) एवं V/f गति नियंत्रण',
            bn: '২২. ইন্ডাকশন মোটর স্টার্টার (DOL, স্টার-ডেল্টা, অটো-ট্রান্সফরমার) ও V/f গতি নিয়ন্ত্রণ'
          },
          description: {
            en: 'Methods to limit high starting current surges: Direct-On-Line (DOL), Star-Delta (reduces current & torque by 1/3), Auto-transformer starter, and modern VFD (V/f speed control).',
            hi: 'स्टार्टिंग धारा सीमित करने की विधियाँ: DOL, स्टार-डेल्टा (धारा व टॉर्क 1/3), ऑटो-ट्रांसफॉर्मर स्टार्टर एवं आधुनिक VFD (V/f गति नियंत्रण)।',
            bn: 'উচ্চ স্টার্টিং কারেন্ট নিয়ন্ত্রণে DOL, স্টার-ডেল্টা (কারেন্ট ও টর্ক ১/৩ ভাগে নামে), অটো-ট্রান্সফরমার স্টার্টার এবং আধুনিক ভিএফডি (V/f গতি নিয়ন্ত্রণ)।'
          }
        }
      ]
    },
    {
      id: 'em-ch5-synchronous-special',
      subjectId: 'electrical-machines',
      order: 5,
      title: {
        en: 'Module 5: Synchronous Machines & Special Motors',
        hi: 'मड्यूल 5: सिंक्रोनस मशीनें एवं विशेष मोटरें',
        bn: 'মডিউল ৫: সিনক্রোনাস ও স্পেশাল মোটরস'
      },
      topics: [
        {
          id: 'ch6-synchronous-generator-motor',
          chapterId: 'em-ch5-synchronous-special',
          order: 1,
          level: 'Engineering',
          title: {
            en: '23. Synchronous Machines: Alternator EMF, Voltage Regulation & V-Curves',
            hi: '23. सिंक्रोनस मशीनें: अल्टरनेटर EMF, वोल्टेज रेगुलेशन एवं V-वक्र',
            bn: '২৩. সিনক্রোনাস মেশিন: অল্টারনেটর EMF, ভোল্টেজ রেগুলেশন ও V-কার্ভ'
          },
          description: {
            en: 'Alternator EMF equation Eph = 4.44·Kc·Kd·f·T·Φ, voltage regulation methods, synchronous motor constant speed, V-curves and inverted V-curves, and synchronous condensers.',
            hi: 'अल्टरनेटर EMF समीकरण Eph = 4.44·Kc·Kd·f·T·Φ, वोल्टेज रेगुलेशन विधियाँ, सिंक्रोनस मोटर V-वक्र एवं सिंक्रোনस कंडेनसर।',
            bn: 'অল্টারনেটর EMF সমীকরণ Eph = ৪.৪৪·Kc·Kd·f·T·Φ, ভোল্টেজ রেগুলেশন, সিনক্রোনাস মোটরের V-কার্ভ এবং পাওয়ার গ্রিডে সিনক্রোনাস কনডেনসার।'
          }
        },
        {
          id: 'ch6-single-phase-special-motors',
          chapterId: 'em-ch5-synchronous-special',
          order: 2,
          level: 'Engineering',
          title: {
            en: '24. Single-Phase Motors & Special Machines (Stepper, BLDC, Universal)',
            hi: '24. सिंगल-फेज मोटरें एवं विशेष मशीनें (स्टेपर, BLDC, यूनिवर्सल मोटर)',
            bn: '২৪. সিঙ্গেল-ফেজ মোটর ও বিশেষ বৈদ্যুতিক মেশিন (স্টেপার, BLDC, ইউনিভার্সাল মোটর)'
          },
          description: {
            en: 'Double revolving field theory, capacitor-start/run motors, Universal AC/DC series motor, Stepper motors for precision motion, and Brushless DC (BLDC) motors in EVs and robotics.',
            hi: 'डबल रिवॉल्विंग फील्ड थ्योरी, कैपेसिटर स्टार्ट/रन मोटर, यूनिवर्सल एसी/डीसी मोटर, स्टेपर मोटर एवं इलेक्ट्रिक वाहनों में BLDC मोटर।',
            bn: 'ডাবল রিভলভিং ফিল্ড তত্ত্ব, ক্যাপাসিটর স্টার্ট ও রান মোটর, ইউনিভার্সাল এসি/ডিসি মোটর, স্টেপার মোটর এবং আধুনিক ইভি ও রোবোটিক্সে BLDC মোটর।'
          }
        }
      ]
    }
  ]
};
