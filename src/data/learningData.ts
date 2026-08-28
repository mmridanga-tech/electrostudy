import { DetailedSubject, Chapter, Topic, Lesson } from '../types';
import { CHAPTER_1_LESSONS } from './chapter1Lessons';
import { CHAPTER_2_LESSONS } from './chapter2Lessons';
import { CHAPTER_3_LESSONS } from './chapter3Lessons';
import { CHAPTER_4_LESSONS } from './chapter4Lessons';
import { CHAPTER_5_LESSONS } from './chapter5Lessons';
import { CHAPTER_6_LESSONS } from './chapter6Lessons';
import { CHAPTER_7_LESSONS } from './chapter7Lessons';
import { CHAPTER_8_LESSONS } from './chapter8Lessons';
import { CHAPTER_9_LESSONS } from './chapter9Lessons';
import { ELECTRICAL_MACHINES_SUBJECT } from './electricalMachinesData';
import { POWER_SYSTEMS_SUBJECT } from './powerSystemsData';
import { MEASUREMENTS_SUBJECT } from './measurementsData';

const RAW_DETAILED_SUBJECTS: DetailedSubject[] = [
  {
    id: 'basic-electrical',
    slug: 'basic-electrical-engineering',
    icon: 'Zap',
    title: {
      en: 'Basic Electrical Engineering',
      hi: 'बेसिक इलेक्ट्रिकल इंजीनियरिंग',
      bn: 'বেসিক ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং'
    },
    description: {
      en: 'Foundational principles of DC circuits, AC fundamentals, magnetic circuits, transformers, and electrical safety.',
      hi: 'डीसी सर्किट, एसी सिद्धांत, चुंबकीय परिपथ, ट्रांसफॉर्मर और विद्युत सुरक्षा के मूलभूत सिद्धांत।',
      bn: 'ডিসি সার্কিট, এসি মূলনীতি, চুম্বকীয় সার্কিট, ট্রান্সফরমার এবং বৈদ্যুতিক নিরাপত্তার মৌলিক নীতিসমূহ।'
    },
    chapters: [
      {
        id: 'ch-elec-fund',
        subjectId: 'basic-electrical',
        order: 1,
        title: {
          en: 'Chapter 1: Electrical Fundamentals',
          hi: 'अध्याय 1: इलेक्ट्रिकल मूलभूत सिद्धांत',
          bn: 'অধ্যায় ১: ইলেকট্রিক্যাল মৌলিক ভিত্তি'
        },
        topics: [
          {
            id: 'tp-charge',
            chapterId: 'ch-elec-fund',
            order: 1,
            title: {
              en: 'Electric Charge',
              hi: 'विद्युत आवेश',
              bn: 'তড়িৎ আধান'
            }
          },
          {
            id: 'tp-current',
            chapterId: 'ch-elec-fund',
            order: 2,
            title: {
              en: 'Electric Current',
              hi: 'विद्युत धारा',
              bn: 'তড়িৎ প্রবাহ'
            }
          },
          {
            id: 'tp-voltage',
            chapterId: 'ch-elec-fund',
            order: 3,
            title: {
              en: 'Voltage / Potential Difference',
              hi: 'वोल्टेज / विभवांतर',
              bn: 'ভোল্টেজ / বিভব পার্থক্য'
            }
          },
          {
            id: 'tp-emf',
            chapterId: 'ch-elec-fund',
            order: 4,
            title: {
              en: 'EMF (Electromotive Force)',
              hi: 'ईएमएफ (विद्युत वाहक बल)',
              bn: 'ইএমএফ (ইলেক্ট্রোমোটিভ ফোর্স)'
            }
          },
          {
            id: 'tp-resistance',
            chapterId: 'ch-elec-fund',
            order: 5,
            title: {
              en: 'Resistance',
              hi: 'प्रतिरोध',
              bn: 'রোধ'
            }
          },
          {
            id: 'tp-conductance',
            chapterId: 'ch-elec-fund',
            order: 6,
            title: {
              en: 'Conductance',
              hi: 'चालकता (कंडक्टेंस)',
              bn: 'পরিবাহিতা (কন্ডাক্ট্যান্স)'
            }
          },
          {
            id: 'tp-power',
            chapterId: 'ch-elec-fund',
            order: 7,
            title: {
              en: 'Power',
              hi: 'विद्युत शक्ति',
              bn: 'বৈদ্যুতিক ক্ষমতা'
            }
          },
          {
            id: 'tp-energy',
            chapterId: 'ch-elec-fund',
            order: 8,
            title: {
              en: 'Energy',
              hi: 'विद्युत ऊर्जा',
              bn: 'বৈদ্যুতিক শক্তি'
            }
          },
          {
            id: 'tp-electrical-work',
            chapterId: 'ch-elec-fund',
            order: 9,
            title: {
              en: 'Electrical Work',
              hi: 'विद्युत कार्य',
              bn: 'বৈদ্যুতিক কাজ'
            }
          },
          {
            id: 'tp-units-si',
            chapterId: 'ch-elec-fund',
            order: 10,
            title: {
              en: 'Units & SI Units',
              hi: 'मात्रक एवं एसआई इकाइयाँ',
              bn: 'একক এবং এসআই একক'
            }
          },
          {
            id: 'tp-electrical-symbols',
            chapterId: 'ch-elec-fund',
            order: 11,
            title: {
              en: 'Electrical Symbols',
              hi: 'विद्युत संकेत एवं प्रतीक',
              bn: 'বৈদ্যুতিক প্রতীকসমূহ'
            }
          }
        ]
      },
      {
        id: 'ch-ohms-circuits',
        subjectId: 'basic-electrical',
        order: 2,
        title: {
          en: "Chapter 2: Ohm's Law & Basic Circuits",
          hi: 'अध्याय 2: ओम का नियम एवं बुनियादी परिपथ',
          bn: 'অধ্যায় ২: ওহমের সূত্র ও মৌলিক সার্কিট'
        },
        topics: [
                  {
                            "id": "tp-ohms-law",
                            "chapterId": "ch-ohms-circuits",
                            "order": 1,
                            "title": {
                                      "en": "Ohm's Law",
                                      "hi": "ओम का नियम",
                                      "bn": "ওহমের সূত্র"
                            }
                  },
                  {
                            "id": "tp-v-i-r-rel",
                            "chapterId": "ch-ohms-circuits",
                            "order": 2,
                            "title": {
                                      "en": "Voltage–Current–Resistance Relationship",
                                      "hi": "वोल्टेज-करंट-प्रतिरोध संबंध",
                                      "bn": "ভোল্টেজ-কারেন্ট-রেজিস্ট্যান্স সম্পর্ক"
                            }
                  },
                  {
                            "id": "tp-series-circuit",
                            "chapterId": "ch-ohms-circuits",
                            "order": 3,
                            "title": {
                                      "en": "Series Circuit",
                                      "hi": "श्रेणी परिपथ (सीरीज सर्किट)",
                                      "bn": "সিরিজ সার্কিট"
                            }
                  },
                  {
                            "id": "tp-parallel-circuit",
                            "chapterId": "ch-ohms-circuits",
                            "order": 4,
                            "title": {
                                      "en": "Parallel Circuit",
                                      "hi": "समानांतर परिपथ (पैरेलल सर्किट)",
                                      "bn": "প্যারালাল সার্কিট"
                            }
                  },
                  {
                            "id": "tp-series-parallel-circuit",
                            "chapterId": "ch-ohms-circuits",
                            "order": 5,
                            "title": {
                                      "en": "Series-Parallel Circuit",
                                      "hi": "श्रेणी-समानांतर परिपथ",
                                      "bn": "সিরিজ-প্যারালাল সার্কিট"
                            }
                  },
                  {
                            "id": "tp-voltage-division",
                            "chapterId": "ch-ohms-circuits",
                            "order": 6,
                            "title": {
                                      "en": "Voltage Division",
                                      "hi": "वोल्टेज विभाजन नियम",
                                      "bn": "ভোল্টেজ ডিভাইডার রুল"
                            }
                  },
                  {
                            "id": "tp-current-division",
                            "chapterId": "ch-ohms-circuits",
                            "order": 7,
                            "title": {
                                      "en": "Current Division",
                                      "hi": "धारा विभाजन नियम",
                                      "bn": "কারেন্ট ডিভাইডার রুল"
                            }
                  },
                  {
                            "id": "tp-open-circuit",
                            "chapterId": "ch-ohms-circuits",
                            "order": 8,
                            "title": {
                                      "en": "Open Circuit",
                                      "hi": "खुला परिपथ (ओपन सर्किट)",
                                      "bn": "ওপেন সার্কিট"
                            }
                  },
                  {
                            "id": "tp-short-circuit",
                            "chapterId": "ch-ohms-circuits",
                            "order": 9,
                            "title": {
                                      "en": "Short Circuit",
                                      "hi": "लघु परिपथ (शॉर्ट सर्किट)",
                                      "bn": "শর্ট সার্কিট"
                            }
                  },
                  {
                            "id": "tp-practical-apps",
                            "chapterId": "ch-ohms-circuits",
                            "order": 10,
                            "title": {
                                      "en": "Practical Applications",
                                      "hi": "व्यावहारिक अनुप्रयोग",
                                      "bn": "ব্যবহারিক প্রয়োগসমূহ"
                            }
                  }
        ]
      },
      {
        id: 'ch-measurements',
        subjectId: 'basic-electrical',
        order: 3,
        title: {
          en: 'Chapter 3: Electrical Measurements & Instrumentation',
          hi: 'अध्याय 3: विद्युत मापन एवं इंस्ट्रूमेंटेशन',
          bn: 'অধ্যায় ৩: বৈদ্যুতিক পরিমাপ ও ইনস্ট্রুমেন্টেশন'
        },
        topics: [
                  {
                            "id": "ch3-fundamentals-measurement",
                            "chapterId": "ch-measurements",
                            "order": 1,
                            "title": {
                                      "en": "Fundamentals of Measurement & Units",
                                      "hi": "मापन के मूल सिद्धांत एवं इकाइयाँ",
                                      "bn": "পরিমাপের মূল নীতি ও এককসমূহ"
                            }
                  },
                  {
                            "id": "ch3-measurement-errors",
                            "chapterId": "ch-measurements",
                            "order": 2,
                            "title": {
                                      "en": "Measurement Errors",
                                      "hi": "मापन त्रुटियाँ (Measurement Errors)",
                                      "bn": "পরিমাপের ত্রুটিসমূহ (Measurement Errors)"
                            }
                  },
                  {
                            "id": "ch3-electrical-instruments",
                            "chapterId": "ch-measurements",
                            "order": 3,
                            "title": {
                                      "en": "Electrical Measuring Instruments & Operating Principles",
                                      "hi": "विद्युत मापन उपकरण एवं कार्य सिद्धांत",
                                      "bn": "বৈদ্যুতিক পরিমাপক যন্ত্র ও কার্যনীতি"
                            }
                  },
                  {
                            "id": "ch3-pmmc-instruments",
                            "chapterId": "ch-measurements",
                            "order": 4,
                            "title": {
                                      "en": "Permanent Magnet Moving Coil (PMMC) Instruments",
                                      "hi": "स्थायी चुंबक मूविंग कॉइल (PMMC) उपकरण",
                                      "bn": "স্থায়ী চুম্বক মুভিং কয়েল (PMMC) ইনস্ট্রুমেন্ট"
                            }
                  },
                  {
                            "id": "ch3-moving-iron",
                            "chapterId": "ch-measurements",
                            "order": 5,
                            "title": {
                                      "en": "Moving Iron (MI) Instruments",
                                      "hi": "मूविंग आयरन (MI) उपकरण",
                                      "bn": "মুভিং আয়রন (MI) ইনস্ট্রুমেন্ট"
                            }
                  },
                  {
                            "id": "ch3-electrodynamometer",
                            "chapterId": "ch-measurements",
                            "order": 6,
                            "title": {
                                      "en": "Electrodynamometer Instruments",
                                      "hi": "इलेक्ट्रोडायनेमोमीटर उपकरण (Electrodynamometer Instruments)",
                                      "bn": "ইলেক্ট্রোডায়নামোমিটার যন্ত্র (Electrodynamometer Instruments)"
                            }
                  },
                  {
                            "id": "ch3-thermal-instruments",
                            "chapterId": "ch-measurements",
                            "order": 7,
                            "title": {
                                      "en": "Thermal Instruments",
                                      "hi": "तापीय उपकरण (Thermal Instruments)",
                                      "bn": "থার্মাল বা তাপীয় যন্ত্র (Thermal Instruments)"
                            }
                  },
                  {
                            "id": "ch3-ammeter-voltmeter",
                            "chapterId": "ch-measurements",
                            "order": 8,
                            "title": {
                                      "en": "Ammeter & Voltmeter",
                                      "hi": "अमीटर एवं वोल्टमीटर (Ammeter & Voltmeter)",
                                      "bn": "অ্যামিটার ও ভোল্টমিটার (Ammeter & Voltmeter)"
                            }
                  },
                  {
                            "id": "ch3-wattmeter-power",
                            "chapterId": "ch-measurements",
                            "order": 9,
                            "title": {
                                      "en": "Wattmeter & Power Measurement",
                                      "hi": "वाटमीटर एवं शक्ति मापन (Wattmeter & Power Measurement)",
                                      "bn": "ওয়াটমিটার ও পাওয়ার পরিমাপ (Wattmeter & Power Measurement)"
                            }
                  },
                  {
                            "id": "ch3-energy-measurement",
                            "chapterId": "ch-measurements",
                            "order": 10,
                            "title": {
                                      "en": "Energy Measurement",
                                      "hi": "ऊर्जा मापन (Energy Measurement)",
                                      "bn": "এনার্জি বা শক্তি পরিমাপ (Energy Measurement)"
                            }
                  },
                  {
                            "id": "ch3-digital-instruments",
                            "chapterId": "ch-measurements",
                            "order": 11,
                            "title": {
                                      "en": "Digital Measuring Instruments",
                                      "hi": "डिजिटल मापन यंत्र (Digital Measuring Instruments)",
                                      "bn": "ডিজিটাল পরিমাপক যন্ত্র (Digital Measuring Instruments)"
                            }
                  },
                  {
                            "id": "ch3-cro-oscilloscope",
                            "chapterId": "ch-measurements",
                            "order": 12,
                            "title": {
                                      "en": "CRO & Oscilloscope",
                                      "hi": "सीआरओ एवं ऑसिलोस्कोप (CRO & Oscilloscope)",
                                      "bn": "সিআরও ও অসিলোস্কোপ (CRO & Oscilloscope)"
                            }
                  },
                  {
                            "id": "ch3-transducers",
                            "chapterId": "ch-measurements",
                            "order": 13,
                            "title": {
                                      "en": "Transducers",
                                      "hi": "ट्रांसड्यूसर (Transducers)",
                                      "bn": "ট্রান্সডিউসার (Transducers)"
                            }
                  },
                  {
                            "id": "ch3-bridges-resistance",
                            "chapterId": "ch-measurements",
                            "order": 14,
                            "title": {
                                      "en": "Bridges & Resistance Measurement",
                                      "hi": "ब्रिज एवं प्रतिरोध मापन (Bridges & Resistance Measurement)",
                                      "bn": "ব্রিজ ও রেজিস্ট্যান্স পরিমাপ (Bridges & Resistance Measurement)"
                            }
                  },
                  {
                            "id": "ch3-inductance-capacitance",
                            "chapterId": "ch-measurements",
                            "order": 15,
                            "title": {
                                      "en": "Inductance & Capacitance Measurement",
                                      "hi": "प्रेरकत्व एवं धारिता मापन (Inductance & Capacitance Measurement)",
                                      "bn": "ইনডাক্ট্যান্স ও ক্যাপাসিট্যান্স পরিমাপ (Inductance & Capacitance Measurement)"
                            }
                  },
                  {
                            "id": "ch3-instrument-transformers",
                            "chapterId": "ch-measurements",
                            "order": 16,
                            "title": {
                                      "en": "Instrument Transformers",
                                      "hi": "इन्स्ट्रूमेंट ट्रांसफॉर्मर (Instrument Transformers)",
                                      "bn": "ইন্সট্রুমেন্ট ট্রান্সফরমার (Instrument Transformers)"
                            }
                  },
                  {
                            "id": "ch3-frequency-phase",
                            "chapterId": "ch-measurements",
                            "order": 17,
                            "title": {
                                      "en": "Measurement of Frequency & Phase",
                                      "hi": "आवृत्ति एवं फेज़ मापन (Measurement of Frequency & Phase)",
                                      "bn": "ফ্রিকোয়েন্সি ও ফেজ পরিমাপ (Measurement of Frequency & Phase)"
                            }
                  },
                  {
                            "id": "ch3-calibration-testing",
                            "chapterId": "ch-measurements",
                            "order": 18,
                            "title": {
                                      "en": "Calibration & Testing",
                                      "hi": "कैलिब्रेशन एवं परीक्षण (Calibration & Testing)",
                                      "bn": "ক্যালিব্রেশন ও টেস্টিং (Calibration & Testing)"
                            }
                  },
                  {
                            "id": "ch3-practical-safety",
                            "chapterId": "ch-measurements",
                            "order": 19,
                            "title": {
                                      "en": "Practical Measurement & Safety",
                                      "hi": "व्यवहारिक मापन एवं सुरक्षा (Practical Measurement & Safety)",
                                      "bn": "ব্যবহারিক পরিমাপ ও নিরাপত্তা (Practical Measurement & Safety)"
                            }
                  },
                  {
                            "id": "ch3-troubleshooting",
                            "chapterId": "ch-measurements",
                            "order": 20,
                            "title": {
                                      "en": "Measurement Applications & Troubleshooting",
                                      "hi": "मापन अनुप्रयोग एवं ट्रबलशूटिंग (Measurement Applications & Troubleshooting)",
                                      "bn": "পরিমাপ প্রয়োগ ও ট্রাবলশুটিং (Measurement Applications & Troubleshooting)"
                            }
                  }
        ]
      },
      {
        id: 'ch-dc-network-analysis',
        subjectId: 'basic-electrical',
        order: 4,
        title: {
          en: 'Chapter 4: DC Circuits & Network Analysis',
          hi: 'अध्याय 4: डीसी परिपथ एवं नेटवर्क विश्लेषण',
          bn: 'অধ্যায় ৪: ডিসি সার্কিট ও নেটওয়ার্ক অ্যানালিসিস'
        },
        topics: [
                  {
                            "id": "ch4-dc-network-fundamentals",
                            "chapterId": "ch-dc-network-analysis",
                            "order": 1,
                            "title": {
                                      "en": "DC Network Fundamentals & Circuit Terminology",
                                      "hi": "डीसी नेटवर्क के मूल सिद्धांत एवं शब्दावली",
                                      "bn": "ডিসি নেটওয়ার্কের মৌলিক ভিত্তি ও সার্কিট পরিভাষা"
                            }
                  },
                  {
                            "id": "ch4-kcl",
                            "chapterId": "ch-dc-network-analysis",
                            "order": 2,
                            "title": {
                                      "en": "Kirchhoff's Current Law (KCL)",
                                      "hi": "किरचॉफ का धारा नियम (KCL)",
                                      "bn": "কার্শফের কারেন্ট সূত্র (KCL)"
                            }
                  },
                  {
                            "id": "ch4-kvl",
                            "chapterId": "ch-dc-network-analysis",
                            "order": 3,
                            "title": {
                                      "en": "Kirchhoff's Voltage Law (KVL)",
                                      "hi": "किरचॉफ का वोल्टेज नियम (KVL)",
                                      "bn": "কার্শফের ভোল্টেজ সূত্র (KVL)"
                            }
                  },
                  {
                            "id": "ch4-node-branch",
                            "chapterId": "ch-dc-network-analysis",
                            "order": 4,
                            "title": {
                                      "en": "Node, Branch, and Loop Concepts",
                                      "hi": "नोड, शाखा (ब्रांच) एवं लूप की अवधारणाएँ",
                                      "bn": "নোড, ব্রাঞ্চ এবং লুপের ধারণা"
                            }
                  },
                  {
                            "id": "ch4-nodal-analysis",
                            "chapterId": "ch-dc-network-analysis",
                            "order": 5,
                            "title": {
                                      "en": "Nodal Analysis Method",
                                      "hi": "नोडल विश्लेषण विधि (Nodal Analysis)",
                                      "bn": "নোডাল অ্যানালিসিস পদ্ধতি"
                            }
                  },
                  {
                            "id": "ch4-mesh-analysis",
                            "chapterId": "ch-dc-network-analysis",
                            "order": 6,
                            "title": {
                                      "en": "Mesh and Loop Analysis Method",
                                      "hi": "मेष एवं लूप विश्लेषण विधि (Mesh Analysis)",
                                      "bn": "মেশ ও লুপ অ্যানালিসিস পদ্ধতি"
                            }
                  },
                  {
                            "id": "ch4-network-reduction",
                            "chapterId": "ch-dc-network-analysis",
                            "order": 7,
                            "title": {
                                      "en": "Series and Parallel Network Reduction",
                                      "hi": "श्रेणी एवं समानांतर नेटवर्क रिडक्शन",
                                      "bn": "সিরিজ ও প্যারালাল নেটওয়ার্ক রিডাকশন"
                            }
                  },
                  {
                            "id": "ch4-divider-networks",
                            "chapterId": "ch-dc-network-analysis",
                            "order": 8,
                            "title": {
                                      "en": "Voltage and Current Division in Complex Networks",
                                      "hi": "जटिल नेटवर्कों में वोल्टेज एवं धारा विभाजन",
                                      "bn": "জটিল নেটওয়ার্কে ভোল্টেজ ও কারেন্ট ডিভিশন"
                            }
                  },
                  {
                            "id": "ch4-star-delta",
                            "chapterId": "ch-dc-network-analysis",
                            "order": 9,
                            "title": {
                                      "en": "Star-Delta (Delta-Wye) Transformation",
                                      "hi": "स्टार-डेल्टा (स्टार-डेल्टा) रूपांतरण",
                                      "bn": "স্টার-ডেল্টা (স্টার-ডেল্টা) রূপান্তর"
                            }
                  },
                  {
                            "id": "ch4-network-theorems-intro",
                            "chapterId": "ch-dc-network-analysis",
                            "order": 10,
                            "title": {
                                      "en": "Introduction to Network Theorems",
                                      "hi": "नेटवर्क प्रमेयों का परिचय",
                                      "bn": "নেটওয়ার্ক উপপাদ্যের পরিচিতি"
                            }
                  },
                  {
                            "id": "ch4-thevenins-theorem",
                            "chapterId": "ch-dc-network-analysis",
                            "order": 11,
                            "title": {
                                      "en": "Thevenin's Theorem",
                                      "hi": "थेवेनिन का प्रमेय (Thevenin's Theorem)",
                                      "bn": "থেভেনিনের উপপাদ্য (Thevenin's Theorem)"
                            }
                  },
                  {
                            "id": "ch4-nortons-theorem",
                            "chapterId": "ch-dc-network-analysis",
                            "order": 12,
                            "title": {
                                      "en": "Norton's Theorem",
                                      "hi": "नॉर्टन का प्रमेय (Norton's Theorem)",
                                      "bn": "নর্টনের উপপাদ্য (Norton's Theorem)"
                            }
                  },
                  {
                            "id": "ch4-superposition-theorem",
                            "chapterId": "ch-dc-network-analysis",
                            "order": 13,
                            "title": {
                                      "en": "Superposition Theorem",
                                      "hi": "सुपरपोजिशन प्रमेय (Superposition Theorem)",
                                      "bn": "সুপারপজিশন উপপাদ্য (Superposition Theorem)"
                            }
                  },
                  {
                            "id": "ch4-max-power-transfer",
                            "chapterId": "ch-dc-network-analysis",
                            "order": 14,
                            "title": {
                                      "en": "Maximum Power Transfer Theorem",
                                      "hi": "अधिकतम शक्ति हस्तांतरण प्रमेय",
                                      "bn": "সর্বোচ্চ পাওয়ার ট্রান্সফার উপপাদ্য"
                            }
                  },
                  {
                            "id": "ch4-reciprocity-theorem",
                            "chapterId": "ch-dc-network-analysis",
                            "order": 15,
                            "title": {
                                      "en": "Reciprocity Theorem",
                                      "hi": "रेसीप्रोसिटी (पारस्परिकता) प्रमेय",
                                      "bn": "রেসিপ্রোসিটি উপপাদ্য"
                            }
                  },
                  {
                            "id": "ch4-source-transformation",
                            "chapterId": "ch-dc-network-analysis",
                            "order": 16,
                            "title": {
                                      "en": "Source Transformation Techniques",
                                      "hi": "स्रोत रूपांतरण तकनीक (Source Transformation)",
                                      "bn": "সোর্স ট্রান্সফরমেশন পদ্ধতি"
                            }
                  },
                  {
                            "id": "ch4-dc-fault-analysis",
                            "chapterId": "ch-dc-network-analysis",
                            "order": 17,
                            "title": {
                                      "en": "DC Network Fault Analysis & Bridge Networks",
                                      "hi": "डीसी नेटवर्क फॉल्ट विश्लेषण एवं ब्रिज नेटवर्क",
                                      "bn": "ডিসি নেটওয়ার্ক ফল্ট অ্যানালিসিস ও ब्रिज নেটওয়ার্ক"
                            }
                  },
                  {
                            "id": "ch4-practical-dc-applications",
                            "chapterId": "ch-dc-network-analysis",
                            "order": 18,
                            "title": {
                                      "en": "Practical DC Circuit & Industrial Applications",
                                      "hi": "व्यावहारिक डीसी सर्किट एवं औद्योगिक अनुप्रयोग",
                                      "bn": "ব্যবহারিক ডিসি সার্কিট ও শিল্প প্রয়োগ"
                            }
                  }
        ]
      },
      {
        id: 'ch-alternating-current',
        subjectId: 'basic-electrical',
        order: 5,
        title: {
          en: 'Chapter 5: AC Circuits & Alternating Current',
          hi: 'अध्याय 5: एसी परिपथ एवं प्रत्यावर्ती धारा',
          bn: 'অধ্যায় ৫: এসি সার্কিট ও অল্টারনেটিং কারেন্ট'
        },
        topics: [
          {
            id: 'ch5-ac-fundamentals',
            chapterId: 'ch-alternating-current',
            order: 1,
            title: {
              en: 'AC Fundamentals & Waveform Characteristics',
              hi: 'एसी के मूल सिद्धांत एवं वेवफॉर्म विशेषताएँ',
              bn: 'এসি-র মৌলিক ধারণা ও ওয়েভফর্মের বৈশিষ্ট্য'
            }
          },
          {
            id: 'ch5-sinusoidal-waveform',
            chapterId: 'ch-alternating-current',
            order: 2,
            title: {
              en: 'Sinusoidal Waveform & Mathematical Representation',
              hi: 'साइनसॉइडल वेवफॉर्म एवं गणितीय निरूपण',
              bn: 'সাইনুসয়েডাল ওয়েভফর্ম ও গাণিতিক প্রকাশ'
            }
          },
          {
            id: 'ch5-rms-average-values',
            chapterId: 'ch-alternating-current',
            order: 3,
            title: {
              en: 'RMS, Average, Form Factor & Peak Factor',
              hi: 'RMS, औसत मान, फॉर्म फैक्टर एवं पीक फैक्टर',
              bn: 'RMS, গড় মান, ফর্ম ফ্যাক্টর ও পিক ফ্যাক্টর'
            }
          },
          {
            id: 'ch5-phase-phase-difference',
            chapterId: 'ch-alternating-current',
            order: 4,
            title: {
              en: 'Phase, Phase Difference & Phasors',
              hi: 'फेज, फेज अंतर एवं फेजर',
              bn: 'ফেজ, ফেজ পার্থক্য ও ফেজর'
            }
          },
          {
            id: 'ch5-complex-numbers',
            chapterId: 'ch-alternating-current',
            order: 5,
            title: {
              en: 'Complex Numbers & Rectangular/Polar Form',
              hi: 'कॉम्प्लेक्स संख्या एवं आयताकार/ध्रुवीय रूप',
              bn: 'কমপ্লেক্স সংখ্যা ও আয়তাকার/পোলার রূপ'
            }
          },
          {
            id: 'ch5-ac-resistance',
            chapterId: 'ch-alternating-current',
            order: 6,
            title: {
              en: 'Purely Resistive AC Circuit',
              hi: 'शुद्ध प्रतिरोधी एसी परिपथ',
              bn: 'বিশুদ্ধ রেজিস্টিভ এসি সার্কিট'
            }
          },
          {
            id: 'ch5-ac-inductor',
            chapterId: 'ch-alternating-current',
            order: 7,
            title: {
              en: 'Pure Inductive AC Circuit',
              hi: 'शुद्ध इंडक्टिव एसी परिपथ',
              bn: 'বিশুদ্ধ ইন্ডাক্টিভ এসি সার্কিট'
            }
          },
          {
            id: 'ch5-ac-capacitor',
            chapterId: 'ch-alternating-current',
            order: 8,
            title: {
              en: 'Pure Capacitive AC Circuit',
              hi: 'शुद्ध कैपेसिटिव एसी परिपथ',
              bn: 'বিশুদ্ধ ক্যাপাসিটিভ এসি সার্কিট'
            }
          },
          {
            id: 'ch5-inductive-reactance',
            chapterId: 'ch-alternating-current',
            order: 9,
            title: {
              en: 'Inductive Reactance & Capacitive Reactance',
              hi: 'इंडक्टिव रिएक्टेंस एवं कैपेसिटिव रिएक्टेंस',
              bn: 'ইন্ডাক্টিভ রিঅ্যাকট্যান্স ও ক্যাপাসিটিভ রিঅ্যাকট্যান্স'
            }
          },
          {
            id: 'ch5-series-rl-rc',
            chapterId: 'ch-alternating-current',
            order: 10,
            title: {
              en: 'Series RL and RC Circuits',
              hi: 'सीरीज RL एवं RC परिपथ',
              bn: 'সিরিজ RL ও RC সার্কিট'
            }
          },
          {
            id: 'ch5-series-rlc',
            chapterId: 'ch-alternating-current',
            order: 11,
            title: {
              en: 'Series RLC Circuit & Impedance',
              hi: 'सीरीज RLC परिपथ एवं प्रतिबाधा',
              bn: 'সিরিজ RLC সার্কিট ও ইম্পিড্যান্স'
            }
          },
          {
            id: 'ch5-ac-impedance-admittance',
            chapterId: 'ch-alternating-current',
            order: 12,
            title: {
              en: 'Impedance, Admittance, Conductance & Susceptance',
              hi: 'इम्पीडेंस, एडमिटेंस, कंडक्टेंस एवं ससेप्टेंस',
              bn: 'ইম্পিড্যান্স, অ্যাডমিট্যান্স, কন্ডাক্ট্যান্স ও সাসেপ্ট্যান্স'
            }
          },
          {
            id: 'ch5-ac-series-parallel',
            chapterId: 'ch-alternating-current',
            order: 13,
            title: {
              en: 'Series-Parallel AC Networks',
              hi: 'सीरीज-पैरेलल एसी नेटवर्क',
              bn: 'সিরিজ-প্যারালাল এসি নেটওয়ার্ক'
            }
          },
          {
            id: 'ch5-resonance',
            chapterId: 'ch-alternating-current',
            order: 14,
            title: {
              en: 'Series & Parallel Resonance',
              hi: 'सीरीज एवं पैरेलल रेजोनेंस',
              bn: 'সিরিজ ও প্যারালাল রেজোন্যান্স'
            }
          },
          {
            id: 'ch5-resonant-frequency-q',
            chapterId: 'ch-alternating-current',
            order: 15,
            title: {
              en: 'Resonant Frequency, Q-Factor & Bandwidth',
              hi: 'रेजोनेंट फ्रीक्वेंसी, Q-फैक्टर एवं बैंडविड्थ',
              bn: 'রেজোন্যান্ট ফ্রিকোয়েন্সি, Q-ফ্যাক্টর ও ব্যান্ডউইথ'
            }
          },
          {
            id: 'ch5-ac-power',
            chapterId: 'ch-alternating-current',
            order: 16,
            title: {
              en: 'AC Power: Active, Reactive & Apparent Power',
              hi: 'एसी पावर: सक्रिय, प्रतिक्रियाशील एवं प्रत्यक्ष शक्ति',
              bn: 'এসি পাওয়ার: অ্যাক্টিভ, রিঅ্যাক্টিভ ও অ্যাপারেন্ট পাওয়ার'
            }
          },
          {
            id: 'ch5-power-factor',
            chapterId: 'ch-alternating-current',
            order: 17,
            title: {
              en: 'Power Factor & Power Factor Correction',
              hi: 'पावर फैक्टर एवं पावर फैक्टर सुधार',
              bn: 'পাওয়ার ফ্যাক্টর ও পাওয়ার ফ্যাক্টর কারেকশন'
            }
          },
          {
            id: 'ch5-three-phase-intro',
            chapterId: 'ch-alternating-current',
            order: 18,
            title: {
              en: 'Introduction to Three-Phase AC Systems',
              hi: 'थ्री-फेज एसी सिस्टम का परिचय',
              bn: 'থ্রি-ফেজ এসি সিস্টেমের পরিচিতি'
            }
          },
          {
            id: 'ch5-star-delta-ac',
            chapterId: 'ch-alternating-current',
            order: 19,
            title: {
              en: 'Three-Phase Star and Delta Connections',
              hi: 'थ्री-फेज स्टार एवं डेल्टा कनेक्शन',
              bn: 'থ্রি-ফেজ স্টার ও ডেল্টা কানেকশন'
            }
          },
          {
            id: 'ch5-ac-practical-applications',
            chapterId: 'ch-alternating-current',
            order: 20,
            title: {
              en: 'Practical AC Circuits & Industrial Applications',
              hi: 'व्यावहारिक एसी परिपथ एवं औद्योगिक अनुप्रयोग',
              bn: 'ব্যবহারিক এসি সার্কিট ও শিল্প প্রয়োগ'
            }
          }
        ]
      },
      {
        id: 'ch-capacitors',
        subjectId: 'basic-electrical',
        order: 6,
        title: {
          en: 'Chapter 6: Capacitors & Electrostatics',
          hi: 'अध्याय 6: संधारित्र (कैपेसिटर) एवं स्थिरवैद्युतिकी',
          bn: 'অধ্যায় ৬: ক্যাপাসিটর ও স্থিরতড়িৎ'
        },
        topics: [
          {
            id: 'ch7-electric-field-potential',
            chapterId: 'ch-capacitors',
            order: 1,
            level: 'Foundation',
            title: {
              en: 'Electric Field, Potential & Gauss\'s Law',
              hi: 'विद्युत क्षेत्र, विभव एवं गाउस का नियम',
              bn: 'তড়িৎ ক্ষেত্র, বিভব ও গাউসের সূত্র'
            }
          },
          {
            id: 'ch7-capacitance-fundamentals',
            chapterId: 'ch-capacitors',
            order: 2,
            level: 'Foundation',
            title: {
              en: 'Capacitance Concept, Definition & Working Principle',
              hi: 'धारिता (कैपेसिटेंस) की संकल्पना एवं कार्य सिद्धांत',
              bn: 'ধারকত্বের ধারণা, সংজ্ঞা ও কার্যপ্রণালী'
            }
          },
          {
            id: 'ch7-dielectrics-permittivity',
            chapterId: 'ch-capacitors',
            order: 3,
            level: 'Foundation',
            title: {
              en: 'Dielectric Materials, Relative Permittivity & Polarization',
              hi: 'परावैद्युत पदार्थ, सापेक्ष पारगम्यता एवं ध्रुवण',
              bn: 'ডাই-ইলেকট্রিক উপাদান, আপেক্ষিক প্রবেশ্যতা ও পোলারাইজেশন'
            }
          },
          {
            id: 'ch7-parallel-plate-capacitor',
            chapterId: 'ch-capacitors',
            order: 4,
            level: 'Diploma',
            title: {
              en: 'Parallel Plate & Multi-Plate Capacitors',
              hi: 'समानांतर प्लेट एवं बहु-प्लेट संधारित्र',
              bn: 'সমান্তরাল পাত ও বহু-পাত ধারক'
            }
          },
          {
            id: 'ch7-cylindrical-spherical-capacitors',
            chapterId: 'ch-capacitors',
            order: 5,
            level: 'Engineering',
            title: {
              en: 'Cylindrical & Spherical Capacitors & Cable Capacitance',
              hi: 'बेलनाकार एवं गोलाकार संधारित्र तथा केबल धारिता',
              bn: 'সিলিন্ড্রিক্যাল ও স্ফেরিক্যাল ক্যাপাসিটর এবং কেবল ক্যাপাসিট্যান্স'
            }
          },
          {
            id: 'ch7-capacitors-in-series',
            chapterId: 'ch-capacitors',
            order: 6,
            level: 'Diploma',
            title: {
              en: 'Capacitors in Series Connection & Voltage Division',
              hi: 'श्रेणी क्रम में संधारित्र एवं वोल्टेज विभाजन',
              bn: 'সিরিজ সংযোগে ক্যাপাসিটর ও ভোল্টেজ বিভাজন'
            }
          },
          {
            id: 'ch7-capacitors-in-parallel',
            chapterId: 'ch-capacitors',
            order: 7,
            level: 'Diploma',
            title: {
              en: 'Capacitors in Parallel Connection & Charge Distribution',
              hi: 'समानांतर क्रम में संधारित्र एवं आवेश वितरण',
              bn: 'প্যারালাল সংযোগে ক্যাপাসিটর ও চার্জ বণ্টন'
            }
          },
          {
            id: 'ch7-energy-stored-capacitor',
            chapterId: 'ch-capacitors',
            order: 8,
            level: 'Diploma',
            title: {
              en: 'Energy Stored in a Capacitor & Electrostatic Energy Density',
              hi: 'संधारित्र में संचित ऊर्जा एवं स्थिरवैद्युत ऊर्जा घनत्व',
              bn: 'ক্যাপাসিটরে সঞ্চিত শক্তি ও তড়িৎ শক্তি ঘনত্ব'
            }
          },
          {
            id: 'ch7-rc-charging-transient',
            chapterId: 'ch-capacitors',
            order: 9,
            level: 'Engineering',
            title: {
              en: 'RC Circuit Charging Transient & Time Constant (τ = R·C)',
              hi: 'RC परिपथ चार्जिंग क्षणिक एवं समय स्थिरांक (τ = R·C)',
              bn: 'RC সার্কিট চার্জিং ট্রানজিয়েন্ট ও টাইম কনস্ট্যান্ট'
            }
          },
          {
            id: 'ch7-rc-discharging-transient',
            chapterId: 'ch-capacitors',
            order: 10,
            level: 'Engineering',
            title: {
              en: 'RC Circuit Discharging Transient & Energy Dissipation',
              hi: 'RC परिपथ डिस्चार्जिंग क्षणिक एवं ऊर्जा क्षय',
              bn: 'RC সার্কিট ডিসচার্জিং ট্রানজিয়েন্ট ও শক্তি ক্ষয়'
            }
          },
          {
            id: 'ch7-types-of-capacitors',
            chapterId: 'ch-capacitors',
            order: 11,
            level: 'Practical',
            title: {
              en: 'Types of Capacitors (Electrolytic, Ceramic, Mica, Film, Supercaps)',
              hi: 'कैपेसिटर के प्रकार (इलेक्ट्रोलाइटिक, सेरामिक, माइका, फिल्म, सुपरकैप्स)',
              bn: 'ক্যাপাসিটরের প্রকারভেদ (ইলেক্ট্রোলাইটিক, সিরামিক, মাইকা, ফিল্ম, সুপারক্যাপ)'
            }
          },
          {
            id: 'ch7-capacitor-ratings-codes',
            chapterId: 'ch-capacitors',
            order: 12,
            level: 'Practical',
            title: {
              en: 'Capacitor Ratings, Voltage Limits & EIA Color/Numerical Codes',
              hi: 'कैपेसिटर रेटिंग, वोल्टेज सीमाएं एवं EIA 3-अंकीय कोड प्रणाली',
              bn: 'ক্যাপাসিটরের রেটিং, ভোল্টেজ সীমা ও কালার/নিউমেরিক্যাল কোড'
            }
          },
          {
            id: 'ch7-capacitor-losses-dielectric-breakdown',
            chapterId: 'ch-capacitors',
            order: 13,
            level: 'Engineering',
            title: {
              en: 'Dielectric Breakdown, Losses, ESR & Tan Delta (tan δ)',
              hi: 'परावैद्युत ब्रेकडाउन, हानियां, ESR एवं टैन डेल्टा (tan δ)',
              bn: 'ডাই-ইলেকট্রিক ব্রেকডাউন, অপচয়, ESR ও ট্যান ডেল্টা (tan δ)'
            }
          },
          {
            id: 'ch7-capacitors-in-ac-circuits',
            chapterId: 'ch-capacitors',
            order: 14,
            level: 'Diploma',
            title: {
              en: 'Capacitors in AC Circuits, Phase Relationship & Capacitive Reactance',
              hi: 'एसी परिपथ में संधारित्र, फेज़ संबंध एवं धारितीय प्रतिघात (Xc)',
              bn: 'এসি সার্কিটে ক্যাপাসিটর, ফেজ সম্পর্ক ও ক্যাপাসিটিভ রিঅ্যাকট্যান্স (Xc)'
            }
          },
          {
            id: 'ch7-rc-filters',
            chapterId: 'ch-capacitors',
            order: 15,
            level: 'Diploma',
            title: {
              en: 'RC Filters: Low-Pass and High-Pass Passive Filters',
              hi: 'RC फिल्टर: लो-पास एवं हाई-पास पैसिव फिल्टर',
              bn: 'RC ফিল্টার: লো-পাস ও হাই-পাস প্যাসিভ ফিল্টার'
            }
          },
          {
            id: 'ch7-power-factor-improvement',
            chapterId: 'ch-capacitors',
            order: 16,
            level: 'Practical',
            title: {
              en: 'Power Factor Improvement & Capacitor Bank kVAR Calculations',
              hi: 'पावर फैक्टर सुधार एवं कैपेसिटर बैंक kVAR गणना',
              bn: 'পাওয়ার ফ্যাক্টর বৃদ্ধি ও ক্যাপাসিটর ব্যাংক kVAR হিসাব'
            }
          },
          {
            id: 'ch7-snubber-smoothing-decoupling',
            chapterId: 'ch-capacitors',
            order: 17,
            level: 'Practical',
            title: {
              en: 'Capacitor Applications: Snubber Circuits, DC Smoothing & Decoupling',
              hi: 'कैपेसिटर अनुप्रयोग: स्नबर परिपथ, डीसी स्मूथिंग एवं डीकपलिंग',
              bn: 'ক্যাপাসিটরের প্রয়োগ: স্নাবার সার্কিট, ডিসি স্মুথিং ও ডিকাপলিং'
            }
          },
          {
            id: 'ch7-motor-capacitors-voltage-multipliers',
            chapterId: 'ch-capacitors',
            order: 18,
            level: 'Practical',
            title: {
              en: 'Motor Start/Run Capacitors & Voltage Multipliers',
              hi: 'मोटर स्टार्ट/रन कैपेसिटर एवं वोल्टेज मल्टीप्लायर',
              bn: 'মোটর স্টার্ট/রান ক্যাপাসিটর ও ভোল্টেজ মাল্টিপ্লায়ার'
            }
          },
          {
            id: 'ch7-supercapacitors-energy-storage',
            chapterId: 'ch-capacitors',
            order: 19,
            level: 'Engineering',
            title: {
              en: 'Supercapacitors, Ultracapacitors & Advanced Energy Storage',
              hi: 'सुपरकैपेसिटर, अल्ट्राकैपेसिटर एवं आधुनिक ऊर्जा भंडारण',
              bn: 'সুপারক্যাপাসিটর, আল্ট্রাক্যাপাসিটর ও আধুনিক শক্তি সংরক্ষণ'
            }
          },
          {
            id: 'ch7-capacitor-testing-safety-capstone',
            chapterId: 'ch-capacitors',
            order: 20,
            level: 'Practical',
            title: {
              en: 'Capacitor Testing, Fault Diagnostics, Safety & Chapter 7 Capstone',
              hi: 'कैपेसिटर परीक्षण, फॉल्ट निदान, सुरक्षा एवं अध्याय 7 समापन',
              bn: 'ক্যাপাসিটর টেস্টিং, ত্রুটি নির্ণয়, নিরাপত্তা ও অধ্যায় ৭ সমাপনী'
            }
          }
        ]
      },
      {
        id: 'ch-inductors',
        subjectId: 'basic-electrical',
        order: 8,
        title: {
          en: 'Chapter 8: Inductors & Electromagnetism',
          hi: 'अध्याय 8: प्रेरक (इंडक्टर) एवं विद्युतचुंबकत्व',
          bn: 'অধ্যায় ৮: ইন্ডাক্টর ও তড়িচ্চুম্বকত্ব'
        },
        topics: [
          {
            id: 'ch8-magnetic-fields-lorentz-force',
            chapterId: 'ch-inductors',
            order: 1,
            level: 'Diploma',
            title: {
              en: 'Magnetic Fields, Flux Density & Lorentz Force',
              hi: 'चुंबकीय क्षेत्र, फ्लक्स घनत्व एवं लॉरेंट्ज़ बल',
              bn: 'চৌম্বক ক্ষেত্র, ফ্লাক্স ঘনত্ব ও লরেঞ্জ বল'
            }
          },
          {
            id: 'ch8-biot-savart-ampere-law',
            chapterId: 'ch-inductors',
            order: 2,
            level: 'Engineering',
            title: {
              en: 'Biot-Savart Law & Ampere’s Circuital Law',
              hi: 'बायो-सावर्ट का नियम एवं एम्पीयर का परिपथीय नियम',
              bn: 'বায়ো-সাভার্ট সূত্র ও অ্যাম্পিয়ারের সার্কিটাল সূত্র'
            }
          },
          {
            id: 'ch8-faradays-lenzs-law',
            chapterId: 'ch-inductors',
            order: 3,
            level: 'Diploma',
            title: {
              en: 'Faraday’s Law of Induction & Lenz’s Law',
              hi: 'फैराडे का विद्युतचुंबकीय प्रेरण नियम एवं लेन्ज़ का नियम',
              bn: 'ফ্যারাডের তড়িচ্চুম্বকীয় আবেশ সূত্র ও লেঞ্জের সূত্র'
            }
          },
          {
            id: 'ch8-self-inductance-solenoid-toroid',
            chapterId: 'ch-inductors',
            order: 4,
            level: 'Diploma',
            title: {
              en: 'Self-Inductance, Solenoid & Toroid Inductance',
              hi: 'स्व-प्रेरकत्व (Self-Inductance), परिनालिका एवं टॉरॉइड',
              bn: 'স্ব-আবেশ (সেলফ-ইন্ডাক্ট্যান্স), সলিনয়েড ও টরয়েড'
            }
          },
          {
            id: 'ch8-mutual-inductance-dot-convention',
            chapterId: 'ch-inductors',
            order: 5,
            level: 'Engineering',
            title: {
              en: 'Mutual Inductance, Dot Convention & Coupling (k)',
              hi: 'पारस्परिक प्रेरकत्व, डॉट परिपाटी एवं युग्मन गुणांक (k)',
              bn: 'মিউচুয়াল ইন্ডাক্ট্যান্স, ডট কনভেনশন ও কাপলিং সহগ (k)'
            }
          },
          {
            id: 'ch8-magnetic-materials-permeability',
            chapterId: 'ch-inductors',
            order: 6,
            level: 'Diploma',
            title: {
              en: 'Magnetic Materials, Permeability & Reluctance',
              hi: 'चुंबकीय पदार्थ, पारगम्यता एवं रिलक्टेंस',
              bn: 'চৌম্বক উপাদান, প্রবেশ্যতা ও রিলাক্ট্যান্স'
            }
          },
          {
            id: 'ch8-hysteresis-b-h-curve',
            chapterId: 'ch-inductors',
            order: 7,
            level: 'Engineering',
            title: {
              en: 'Magnetic Hysteresis, B-H Curve & Core Losses',
              hi: 'चुंबकीय हिस्टैरिसीस, B-H वक्र एवं कोर हानियाँ',
              bn: 'চৌম্বক হিস্টেরেসিস, B-H কার্ভ ও কোর লস'
            }
          },
          {
            id: 'ch8-eddy-currents-skin-effect',
            chapterId: 'ch-inductors',
            order: 8,
            level: 'Engineering',
            title: {
              en: 'Eddy Currents, Laminated Cores & Skin Effect',
              hi: 'भंवर धाराएं (Eddy Currents), लेमिनेटेड कोर एवं त्वचा प्रभाव',
              bn: 'এডি কারেন্ট, লেমিনেটেড কোর ও স্কিন ইফেক্ট'
            }
          },
          {
            id: 'ch8-inductors-in-series-parallel',
            chapterId: 'ch-inductors',
            order: 9,
            level: 'Diploma',
            title: {
              en: 'Inductors in Series & Parallel (With & Without Coupling)',
              hi: 'श्रेणी एवं समानांतर क्रम में इंडक्टर (युग्मन सहित व रहित)',
              bn: 'সিরিজ ও প্যারালালে ইন্ডাক্টর (কাপলিং সহ ও ব্যতীত)'
            }
          },
          {
            id: 'ch8-energy-stored-magnetic-field',
            chapterId: 'ch-inductors',
            order: 10,
            level: 'Diploma',
            title: {
              en: 'Energy Stored in an Inductor & Magnetic Energy Density',
              hi: 'इंडक्टर में संचित ऊर्जा एवं चुंबकीय ऊर्जा घनत्व',
              bn: 'ইন্ডাক্টরে সঞ্চিত শক্তি ও চৌম্বক শক্তি ঘনত্ব'
            }
          },
          {
            id: 'ch8-rl-transient-growth-decay',
            chapterId: 'ch-inductors',
            order: 11,
            level: 'Engineering',
            title: {
              en: 'RL Circuit Transients, Current Growth & Decay (τ = L/R)',
              hi: 'RL परिपथ क्षणिक अवस्था, धारा वृद्धि एवं ह्रास (τ = L/R)',
              bn: 'RL সার্কিট ট্রানজিয়েন্ট, কারেন্ট বৃদ্ধি ও হ্রাস (τ = L/R)'
            }
          },
          {
            id: 'ch8-inductive-kick-flyback',
            chapterId: 'ch-inductors',
            order: 12,
            level: 'Practical',
            title: {
              en: 'Inductive Kick, Flyback Spikes & Freewheeling Diodes',
              hi: 'इंडक्टिव किक, फ्लाईबैक वोल्टेज स्पाइक एवं फ्रीव्हीलिंग डायोड',
              bn: 'ইন্ডাক্টিভ কিক, ফ্লাইব্যাক ভোল্টেজ স্পাইক ও ফ্রিহুইলিং ডায়োড'
            }
          },
          {
            id: 'ch8-inductors-in-ac-circuits',
            chapterId: 'ch-inductors',
            order: 13,
            level: 'Diploma',
            title: {
              en: 'Inductors in AC Circuits: Reactance (X_L) & Phasors',
              hi: 'प्रत्यावर्ती परिपथ में इंडक्टर: प्रतिघात (X_L) एवं फेज़र',
              bn: 'এসি সার্কিটে ইন্ডাক্টর: রিঅ্যাকট্যান্স (X_L) ও ফেজর'
            }
          },
          {
            id: 'ch8-quality-factor-chokes',
            chapterId: 'ch-inductors',
            order: 14,
            level: 'Engineering',
            title: {
              en: 'Quality Factor (Q), Self-Resonant Frequency & Chokes',
              hi: 'क्वालिटी फैक्टर (Q), स्व-अनुनाद आवृत्ति (SRF) एवं चोक',
              bn: 'কোয়ালিটি ফ্যাক্টর (Q), সেলফ-রেজোন্যান্ট ফ্রিকোয়েন্সি ও চোক'
            }
          },
          {
            id: 'ch8-types-of-inductors',
            chapterId: 'ch-inductors',
            order: 15,
            level: 'Practical',
            title: {
              en: 'Types of Inductors: Construction, Cores & Selection Guide',
              hi: 'इंडक्टर के प्रकार: संरचना, कोर एवं चयन गाइड',
              bn: 'ইন্ডাক্টরের প্রকারভেদ: গঠন, কোর ও নির্বাচন গাইড'
            }
          },
          {
            id: 'ch8-inductor-color-numerical-codes',
            chapterId: 'ch-inductors',
            order: 16,
            level: 'Practical',
            title: {
              en: 'Inductor EIA Color Codes, SMD Codes & Ratings (I_sat)',
              hi: 'इंडक्टर कलर कोड, SMD मार्किंग कोड एवं रेटिंग (I_sat)',
              bn: 'ইন্ডাক্টর কালার কোড, SMD মার্কিং কোড ও রেটিং (I_sat)'
            }
          },
          {
            id: 'ch8-switched-mode-power-inductors',
            chapterId: 'ch-inductors',
            order: 17,
            level: 'Practical',
            title: {
              en: 'Power Inductors in SMPS: Buck, Boost & Energy Transfer',
              hi: 'SMPS में पावर इंडक्टर: बक, बूस्ट एवं ऊर्जा स्थानांतरण चक्र',
              bn: 'SMPS এ পাওয়ার ইন্ডাক্টর: বাক, বুস্ট ও শক্তি রূপান্তর চক্র'
            }
          },
          {
            id: 'ch8-solenoids-relays-electromagnets',
            chapterId: 'ch-inductors',
            order: 18,
            level: 'Practical',
            title: {
              en: 'Industrial Actuators: Electromagnets, Solenoids & Relays',
              hi: 'औद्योगिक एक्चुएटर: विद्युत चुंबक, सोलेनोइड एवं रिले',
              bn: 'ইন্ডাস্ট্রিয়াল অ্যাকচুয়েটর: ইলেক্ট্রোম্যাগনেট, সলিনয়েড ও রিলে'
            }
          },
          {
            id: 'ch8-wireless-power-induction-heating',
            chapterId: 'ch-inductors',
            order: 19,
            level: 'Practical',
            title: {
              en: 'Wireless Power Transfer (WPT) & Induction Heating',
              hi: 'वायरलेस पावर ट्रांसफर (WPT) एवं प्रेरण तापन (Induction Heating)',
              bn: 'ওয়্যারলেস পাওয়ার ট্রান্সফার (WPT) ও ইনডাকশন হিটিং'
            }
          },
          {
            id: 'ch8-inductor-testing-diagnostics',
            chapterId: 'ch-inductors',
            order: 20,
            level: 'Practical',
            title: {
              en: 'Inductor Testing, Fault Diagnostics & Chapter 8 Capstone',
              hi: 'इंडक्टर परीक्षण, दोष निदान एवं अध्याय 8 समापन',
              bn: 'ইন্ডাক্টর টেস্টিং, ত্রুটি নির্ণয় ও অধ্যায় ৮ সমাপনী'
            }
          }
        ]
      },
      {
        id: 'ch-magnetic-circuits',
        subjectId: 'basic-electrical',
        order: 9,
        title: {
          en: 'Chapter 9: Magnetic Circuits',
          hi: 'अध्याय 9: चुंबकीय परिपथ',
          bn: 'অধ্যায় ৯: চুম্বকীয় সার্কিট'
        },
        topics: [
          {
            id: 'tp-magnetic-flux',
            chapterId: 'ch-magnetic-circuits',
            order: 1,
            title: {
              en: 'Magnetic Flux',
              hi: 'चुंबकीय फ्लक्स',
              bn: 'চুম্বকীয় ফ্লাক্স'
            }
          },
          {
            id: 'tp-flux-density',
            chapterId: 'ch-magnetic-circuits',
            order: 2,
            title: {
              en: 'Flux Density',
              hi: 'फ्लक्स घनत्व',
              bn: 'ফ্লাক্স ঘনত্ব'
            }
          },
          {
            id: 'tp-mmf',
            chapterId: 'ch-magnetic-circuits',
            order: 3,
            title: {
              en: 'Magnetomotive Force (MMF)',
              hi: 'चुंबकीय वाहक बल (MMF)',
              bn: 'ম্যাগনেটোমোটিভ ফোর্স (MMF)'
            }
          },
          {
            id: 'tp-reluctance',
            chapterId: 'ch-magnetic-circuits',
            order: 4,
            title: {
              en: 'Reluctance',
              hi: 'रिलक्टेंस (चुंबकीय प्रतिरोध)',
              bn: 'রিলাকট্যান্স'
            }
          },
          {
            id: 'tp-permeability',
            chapterId: 'ch-magnetic-circuits',
            order: 5,
            title: {
              en: 'Permeability',
              hi: 'पारगम्यता (पर्मिएबिलिटी)',
              bn: 'পারমিয়াবিলিটি'
            }
          },
          {
            id: 'tp-magnetic-field-strength',
            chapterId: 'ch-magnetic-circuits',
            order: 6,
            title: {
              en: 'Magnetic Field Strength',
              hi: 'चुंबकीय क्षेत्र की तीव्रता',
              bn: 'চৌম্বক ক্ষেত্রের তীব্রতা'
            }
          },
          {
            id: 'tp-amperes-law',
            chapterId: 'ch-magnetic-circuits',
            order: 7,
            title: {
              en: 'Ampere\'s Law',
              hi: 'एम्पीयर का नियम',
              bn: 'অ্যাম্পিয়ারের সূত্র'
            }
          },
          {
            id: 'tp-mag-vs-elec-circuit',
            chapterId: 'ch-magnetic-circuits',
            order: 8,
            title: {
              en: 'Magnetic Circuit vs Electrical Circuit',
              hi: 'चुंबकीय परिपथ बनाम विद्युत परिपथ',
              bn: 'চুম্বকীয় সার্কিট বনাম বৈদ্যুতিক সার্কিট'
            }
          },
          {
            id: 'tp-series-magnetic-circuit',
            chapterId: 'ch-magnetic-circuits',
            order: 9,
            title: {
              en: 'Series Magnetic Circuit',
              hi: 'श्रेणी चुंबकीय परिपथ',
              bn: 'সিরিজ ম্যাগনেটিক সার্কিট'
            }
          },
          {
            id: 'tp-magnetic-materials',
            chapterId: 'ch-magnetic-circuits',
            order: 10,
            title: {
              en: 'Magnetic Materials',
              hi: 'चुंबकीय पदार्थ',
              bn: 'চুম্বকীয় পদার্থসমূহ'
            }
          }
        ]
      },
      {
        id: 'ch-em-induction',
        subjectId: 'basic-electrical',
        order: 10,
        title: {
          en: 'Chapter 10: Electromagnetic Induction',
          hi: 'अध्याय 10: विद्युत चुंबकीय प्रेरण',
          bn: 'অধ্যায় ১০: তড়িৎচুম্বকীয় আবেশ'
        },
        topics: [
          {
            id: 'tp-faradays-law',
            chapterId: 'ch-em-induction',
            order: 1,
            title: {
              en: 'Faraday\'s Law',
              hi: 'फैराडे का नियम',
              bn: 'ফ্যারাডের সূত্র'
            }
          },
          {
            id: 'tp-lenzs-law',
            chapterId: 'ch-em-induction',
            order: 2,
            title: {
              en: 'Lenz\'s Law',
              hi: 'लेंज का नियम',
              bn: 'লেনজের সূত্র'
            }
          },
          {
            id: 'tp-flemings-right-hand-rule',
            chapterId: 'ch-em-induction',
            order: 3,
            title: {
              en: 'Fleming\'s Right-Hand Rule',
              hi: 'फ्लेमिंग का दायां हाथ का नियम',
              bn: 'ফ্লেমিংয়ের ডানহস্ত নিয়ম'
            }
          },
          {
            id: 'tp-dynamically-induced-emf',
            chapterId: 'ch-em-induction',
            order: 4,
            title: {
              en: 'Dynamically Induced EMF',
              hi: 'गतिक रूप से प्रेरित EMF',
              bn: 'ডায়নামিকালি আবিষ্ট ইএমএফ'
            }
          },
          {
            id: 'tp-statically-induced-emf',
            chapterId: 'ch-em-induction',
            order: 5,
            title: {
              en: 'Statically Induced EMF',
              hi: 'स्थैतिक रूप से प्रेरित EMF',
              bn: 'স্ট্যাটিকালি আবিষ্ট ইএমএফ'
            }
          },
          {
            id: 'tp-self-induced-emf',
            chapterId: 'ch-em-induction',
            order: 6,
            title: {
              en: 'Self-Induced EMF',
              hi: 'स्व-प्रेरित EMF',
              bn: 'স্ব-আবিষ্ট ইএমএফ'
            }
          },
          {
            id: 'tp-mutually-induced-emf',
            chapterId: 'ch-em-induction',
            order: 7,
            title: {
              en: 'Mutually Induced EMF',
              hi: 'पारस्परिक प्रेरित EMF',
              bn: 'পারস্পরিক আবিষ্ট ইএমএফ'
            }
          },
          {
            id: 'tp-em-induction-apps',
            chapterId: 'ch-em-induction',
            order: 8,
            title: {
              en: 'Applications of Electromagnetic Induction',
              hi: 'विद्युत चुंबकीय प्रेरण के अनुप्रयोग',
              bn: 'তড়িৎচুম্বকীয় আবেশের প্রয়োগ'
            }
          }
        ]
      },
      {
        id: 'ch-ac-fundamentals',
        subjectId: 'basic-electrical',
        order: 11,
        title: {
          en: 'Chapter 11: AC Fundamentals',
          hi: 'अध्याय 11: एसी मूलभूत सिद्धांत',
          bn: 'অধ্যায় ১১: এসি মৌলিক ভিত্তি'
        },
        topics: [
          {
            id: 'tp-ac-vs-dc',
            chapterId: 'ch-ac-fundamentals',
            order: 1,
            title: {
              en: 'AC vs DC',
              hi: 'एसी बनाम डीसी',
              bn: 'এসি বনাম ডিসি'
            }
          },
          {
            id: 'tp-sinusoidal-waveform',
            chapterId: 'ch-ac-fundamentals',
            order: 2,
            title: {
              en: 'Sinusoidal Waveform',
              hi: 'साइनसोइडल तरंगरूप',
              bn: 'সাইনুসয়েডাল ওয়েভফর্ম'
            }
          },
          {
            id: 'tp-cycle',
            chapterId: 'ch-ac-fundamentals',
            order: 3,
            title: {
              en: 'Cycle',
              hi: 'चक्र (साइकिल)',
              bn: 'সাইকেল'
            }
          },
          {
            id: 'tp-time-period',
            chapterId: 'ch-ac-fundamentals',
            order: 4,
            title: {
              en: 'Time Period',
              hi: 'आवर्तकाल (टाइम पीरियड)',
              bn: 'পর্যায়কাল (টাইম পিরিয়ড)'
            }
          },
          {
            id: 'tp-frequency',
            chapterId: 'ch-ac-fundamentals',
            order: 5,
            title: {
              en: 'Frequency',
              hi: 'आवृत्ति (फ्रीक्वेंसी)',
              bn: 'কম্পাঙ্ক (ফ্রিকোয়েন্সি)'
            }
          },
          {
            id: 'tp-angular-frequency',
            chapterId: 'ch-ac-fundamentals',
            order: 6,
            title: {
              en: 'Angular Frequency',
              hi: 'कोणीय आवृत्ति',
              bn: 'কৌণিক কম্পাঙ্ক'
            }
          },
          {
            id: 'tp-amplitude',
            chapterId: 'ch-ac-fundamentals',
            order: 7,
            title: {
              en: 'Amplitude',
              hi: 'आयाम (एंप्लीटुड)',
              bn: 'বিস্তার (অ্যাম্প্লিচিউড)'
            }
          },
          {
            id: 'tp-instantaneous-value',
            chapterId: 'ch-ac-fundamentals',
            order: 8,
            title: {
              en: 'Instantaneous Value',
              hi: 'तात्क्षणिक मान',
              bn: 'তাৎক্ষণিক মান'
            }
          },
          {
            id: 'tp-average-value',
            chapterId: 'ch-ac-fundamentals',
            order: 9,
            title: {
              en: 'Average Value',
              hi: 'औसत मान (एवरेज वैल्यू)',
              bn: 'গড় মান (অ্যাভারেজ ভ্যালু)'
            }
          },
          {
            id: 'tp-rms-value',
            chapterId: 'ch-ac-fundamentals',
            order: 10,
            title: {
              en: 'RMS Value',
              hi: 'आरएमएस मान (RMS Value)',
              bn: 'আরএমএস মান (RMS ভ্যালু)'
            }
          },
          {
            id: 'tp-form-factor',
            chapterId: 'ch-ac-fundamentals',
            order: 11,
            title: {
              en: 'Form Factor',
              hi: 'फॉर्म फैक्टर',
              bn: 'ফর্ম ফ্যাক্টর'
            }
          },
          {
            id: 'tp-peak-factor',
            chapterId: 'ch-ac-fundamentals',
            order: 12,
            title: {
              en: 'Peak Factor',
              hi: 'पीक फैक्टर',
              bn: 'পিক ফ্যাক্টর'
            }
          },
          {
            id: 'tp-phase-difference',
            chapterId: 'ch-ac-fundamentals',
            order: 13,
            title: {
              en: 'Phase & Phase Difference',
              hi: 'कला एवं कलांतर (फेज एवं फेज अंतर)',
              bn: 'ফেজ ও ফেজ পার্থক্য'
            }
          }
        ]
      },
      {
        id: 'ch-ac-circuits',
        subjectId: 'basic-electrical',
        order: 12,
        title: {
          en: 'Chapter 12: AC Circuits',
          hi: 'अध्याय 12: एसी परिपथ',
          bn: 'অধ্যায় ১২: এসি সার্কিট'
        },
        topics: [
          {
            id: 'tp-pure-resistive',
            chapterId: 'ch-ac-circuits',
            order: 1,
            title: {
              en: 'Pure Resistive Circuit',
              hi: 'शुद्ध प्रतिरोधी परिपथ',
              bn: 'পিওর রেজিস্ট্রিভ সার্কিট'
            }
          },
          {
            id: 'tp-pure-inductive',
            chapterId: 'ch-ac-circuits',
            order: 2,
            title: {
              en: 'Pure Inductive Circuit',
              hi: 'शुद्ध प्रेरक परिपथ',
              bn: 'পিওর ইন্ডাক্টিভ সার্কিট'
            }
          },
          {
            id: 'tp-pure-capacitive',
            chapterId: 'ch-ac-circuits',
            order: 3,
            title: {
              en: 'Pure Capacitive Circuit',
              hi: 'शुद्ध कैपेसिटिव परिपथ',
              bn: 'পিওর ক্যাপাসিটিভ সার্কিট'
            }
          },
          {
            id: 'tp-rl-circuit',
            chapterId: 'ch-ac-circuits',
            order: 4,
            title: {
              en: 'RL Circuit',
              hi: 'आरएल परिपथ (RL Circuit)',
              bn: 'আরএল সার্কিট (RL Circuit)'
            }
          },
          {
            id: 'tp-rc-circuit',
            chapterId: 'ch-ac-circuits',
            order: 5,
            title: {
              en: 'RC Circuit',
              hi: 'आरसी परिपथ (RC Circuit)',
              bn: 'আরসি সার্কিট (RC Circuit)'
            }
          },
          {
            id: 'tp-rlc-circuit',
            chapterId: 'ch-ac-circuits',
            order: 6,
            title: {
              en: 'RLC Circuit',
              hi: 'आरएलसी परिपथ (RLC Circuit)',
              bn: 'আরএলসি সার্কিট (RLC Circuit)'
            }
          },
          {
            id: 'tp-impedance',
            chapterId: 'ch-ac-circuits',
            order: 7,
            title: {
              en: 'Impedance',
              hi: 'प्रतिबाधा (इम्पीडेंस)',
              bn: 'ইম্পিডেন্স'
            }
          },
          {
            id: 'tp-reactance',
            chapterId: 'ch-ac-circuits',
            order: 8,
            title: {
              en: 'Reactance',
              hi: 'रिएक्टेंस',
              bn: 'রিয়্যাক্ট্যান্স'
            }
          },
          {
            id: 'tp-admittance-intro',
            chapterId: 'ch-ac-circuits',
            order: 9,
            title: {
              en: 'Admittance — Introduction',
              hi: 'प्रवेश्यता (एडमिटेंस) — परिचय',
              bn: 'অ্যাডমিট্যান্স — পরিচিতি'
            }
          },
          {
            id: 'tp-phasor-concept',
            chapterId: 'ch-ac-circuits',
            order: 10,
            title: {
              en: 'Phasor Concept',
              hi: 'फेजर अवधारणा',
              bn: 'ফেজর ধারণা'
            }
          },
          {
            id: 'tp-power-ac-circuit',
            chapterId: 'ch-ac-circuits',
            order: 11,
            title: {
              en: 'Power in AC Circuit',
              hi: 'एसी परिपथ में शक्ति',
              bn: 'এসি সার্কিটে পাওয়ার'
            }
          }
        ]
      },
      {
        id: 'ch-power-factor',
        subjectId: 'basic-electrical',
        order: 13,
        title: {
          en: 'Chapter 13: Power Factor',
          hi: 'अध्याय 13: पावर फैक्टर (शक्ति गुणांक)',
          bn: 'অধ্যায় ১৩: পাওয়ার ফ্যাক্টর'
        },
        topics: [
          {
            id: 'tp-pf-definition',
            chapterId: 'ch-power-factor',
            order: 1,
            title: {
              en: 'Definition of Power Factor',
              hi: 'पावर फैक्टर की परिभाषा',
              bn: 'পাওয়ার ফ্যাক্টরের সংজ্ঞায়ন'
            }
          },
          {
            id: 'tp-lagging-pf',
            chapterId: 'ch-power-factor',
            order: 2,
            title: {
              en: 'Lagging Power Factor',
              hi: 'लैगिंग पावर फैक्टर',
              bn: 'ল্যাগিং পাওয়ার ফ্যাক্টর'
            }
          },
          {
            id: 'tp-leading-pf',
            chapterId: 'ch-power-factor',
            order: 3,
            title: {
              en: 'Leading Power Factor',
              hi: 'लीडिंग पावर फैक्टर',
              bn: 'লিডিং পাওয়ার ফ্যাক্টর'
            }
          },
          {
            id: 'tp-unity-pf',
            chapterId: 'ch-power-factor',
            order: 4,
            title: {
              en: 'Unity Power Factor',
              hi: 'यूनिटी पावर फैक्टर',
              bn: 'ইউনিটি পাওয়ার ফ্যাক্টর'
            }
          },
          {
            id: 'tp-active-power',
            chapterId: 'ch-power-factor',
            order: 5,
            title: {
              en: 'Active Power',
              hi: 'एक्टिव पावर (वास्तविक शक्ति)',
              bn: 'অ্যাক্টিভ পাওয়ার (প্রকৃত শক্তি)'
            }
          },
          {
            id: 'tp-reactive-power',
            chapterId: 'ch-power-factor',
            order: 6,
            title: {
              en: 'Reactive Power',
              hi: 'रिएक्टिव पावर (प्रतिघाती शक्ति)',
              bn: 'রিয়্যাক্টিভ পাওয়ার (প্রতিক্রিয়াশীল শক্তি)'
            }
          },
          {
            id: 'tp-apparent-power',
            chapterId: 'ch-power-factor',
            order: 7,
            title: {
              en: 'Apparent Power',
              hi: 'एपेरेंट पावर (आभासी शक्ति)',
              bn: 'অ্যাপারেন্ট পাওয়ার (আপাত শক্তি)'
            }
          },
          {
            id: 'tp-power-triangle',
            chapterId: 'ch-power-factor',
            order: 8,
            title: {
              en: 'Power Triangle',
              hi: 'पावर ट्रायंगल (शक्ति त्रिभुज)',
              bn: 'পাওয়ার ট্রায়াঙ্গেল'
            }
          },
          {
            id: 'tp-pf-calculation',
            chapterId: 'ch-power-factor',
            order: 9,
            title: {
              en: 'Power Factor Calculation',
              hi: 'पावर फैक्टर की गणना',
              bn: 'পাওয়ার ফ্যাক্টর গণনা'
            }
          },
          {
            id: 'tp-pf-improvement-intro',
            chapterId: 'ch-power-factor',
            order: 10,
            title: {
              en: 'Power Factor Improvement — Introduction',
              hi: 'पावर फैक्टर सुधार — परिचय',
              bn: 'পাওয়ার ফ্যাক্টর উন্নয়ন — পরিচিতি'
            }
          }
        ]
      },
      {
        id: 'ch-three-phase',
        subjectId: 'basic-electrical',
        order: 14,
        title: {
          en: 'Chapter 14: Three-Phase Fundamentals',
          hi: 'अध्याय 14: थ्री-फेज मूलभूत सिद्धांत',
          bn: 'অধ্যায় ১৪: থ্রি-ফেজ মৌলিক ভিত্তি'
        },
        topics: [
          {
            id: 'tp-single-vs-three-phase',
            chapterId: 'ch-three-phase',
            order: 1,
            title: {
              en: 'Single Phase vs Three Phase',
              hi: 'सिंगल फेज बनाम थ्री फेज',
              bn: 'সিঙ্গেল ফেজ বনাম থ্রি ফেজ'
            }
          },
          {
            id: 'tp-three-phase-supply',
            chapterId: 'ch-three-phase',
            order: 2,
            title: {
              en: 'Three-Phase Supply',
              hi: 'थ्री-फेज सप्लाई',
              bn: 'থ্রি-ফেজ সরবরাহ'
            }
          },
          {
            id: 'tp-star-connection',
            chapterId: 'ch-three-phase',
            order: 3,
            title: {
              en: 'Star (Y) Connection',
              hi: 'स्टार (Y) कनेक्शन',
              bn: 'স্টার (Y) কানেকশন'
            }
          },
          {
            id: 'tp-delta-connection',
            chapterId: 'ch-three-phase',
            order: 4,
            title: {
              en: 'Delta (Δ) Connection',
              hi: 'डेल्टा (Δ) कनेक्शन',
              bn: 'ডেল্টা (Δ) কানেকশন'
            }
          },
          {
            id: 'tp-line-voltage',
            chapterId: 'ch-three-phase',
            order: 5,
            title: {
              en: 'Line Voltage',
              hi: 'लाइन वोल्टेज',
              bn: 'লাইন ভোল্টেজ'
            }
          },
          {
            id: 'tp-phase-voltage',
            chapterId: 'ch-three-phase',
            order: 6,
            title: {
              en: 'Phase Voltage',
              hi: 'फेज वोल्टेज',
              bn: 'ফেজ ভোল্টেজ'
            }
          },
          {
            id: 'tp-line-current',
            chapterId: 'ch-three-phase',
            order: 7,
            title: {
              en: 'Line Current',
              hi: 'लाइन करंट',
              bn: 'লাইন কারেন্ট'
            }
          },
          {
            id: 'tp-phase-current',
            chapterId: 'ch-three-phase',
            order: 8,
            title: {
              en: 'Phase Current',
              hi: 'फेज करंट',
              bn: 'ফেজ কারেন্ট'
            }
          },
          {
            id: 'tp-star-delta-rel',
            chapterId: 'ch-three-phase',
            order: 9,
            title: {
              en: 'Star-Delta Relationship',
              hi: 'स्टार-डेल्टा संबंध',
              bn: 'স্টার-ডেল্টা সম্পর্ক'
            }
          },
          {
            id: 'tp-three-phase-power',
            chapterId: 'ch-three-phase',
            order: 10,
            title: {
              en: 'Three-Phase Power',
              hi: 'थ्री-फेज पावर',
              bn: 'থ্রি-ফেজ পাওয়ার'
            }
          },
          {
            id: 'tp-balanced-load',
            chapterId: 'ch-three-phase',
            order: 11,
            title: {
              en: 'Balanced Load',
              hi: 'बैलेंस्ड लोड (संतुलित भार)',
              bn: 'ব্যালেন্সড লোড'
            }
          }
        ]
      },
      {
        id: 'ch-electrical-safety',
        subjectId: 'basic-electrical',
        order: 15,
        title: {
          en: 'Chapter 15: Electrical Safety Basics',
          hi: 'अध्याय 15: विद्युत सुरक्षा मूलभूत बातें',
          bn: 'অধ্যায় ১৫: বৈদ্যুতিক নিরাপত্তা ভিত্তি'
        },
        topics: [
          {
            id: 'tp-electric-shock',
            chapterId: 'ch-electrical-safety',
            order: 1,
            title: {
              en: 'Electric Shock',
              hi: 'इलेक्ट्रिक शौक (विद्युत झटका)',
              bn: 'ইলেকট্রিক শক'
            }
          },
          {
            id: 'tp-causes-electrical-accidents',
            chapterId: 'ch-electrical-safety',
            order: 2,
            title: {
              en: 'Causes of Electrical Accidents',
              hi: 'विद्युत दुर्घटनाओं के कारण',
              bn: 'বৈদ্যুতিক দুর্ঘটনার কারণসমূহ'
            }
          },
          {
            id: 'tp-earthing-concept',
            chapterId: 'ch-electrical-safety',
            order: 3,
            title: {
              en: 'Earthing — Basic Concept',
              hi: 'अर्थिंग — मूल अवधारणा',
              bn: 'আর্থিং — মৌলিক ধারণা'
            }
          },
          {
            id: 'tp-fuse',
            chapterId: 'ch-electrical-safety',
            order: 4,
            title: {
              en: 'Fuse',
              hi: 'फ्यूज',
              bn: 'ফিউজ'
            }
          },
          {
            id: 'tp-mcb-concept',
            chapterId: 'ch-electrical-safety',
            order: 5,
            title: {
              en: 'MCB — Basic Concept',
              hi: 'एमसीबी (MCB) — मूल अवधारणा',
              bn: 'এমসিবি (MCB) — মৌলিক ধারণা'
            }
          },
          {
            id: 'tp-rccb-elcb-concept',
            chapterId: 'ch-electrical-safety',
            order: 6,
            title: {
              en: 'RCCB/ELCB — Basic Concept',
              hi: 'आरसीसीबी/इएलसीबी — मूल अवधारणा',
              bn: 'আরসিসিবি/ইএলসিবি — মৌলিক ধারণা'
            }
          },
          {
            id: 'tp-electrical-isolation',
            chapterId: 'ch-electrical-safety',
            order: 7,
            title: {
              en: 'Electrical Isolation',
              hi: 'विद्युत पृथक्करण (आइसोलेशन)',
              bn: 'বৈদ্যুতিক আইসোলেশন'
            }
          },
          {
            id: 'tp-safe-working-practices',
            chapterId: 'ch-electrical-safety',
            order: 8,
            title: {
              en: 'Safe Working Practices',
              hi: 'सुरक्षित कार्य पद्धतियाँ',
              bn: 'নিরাপদ কাজের নিয়মাবলী'
            }
          },
          {
            id: 'tp-basic-ppe',
            chapterId: 'ch-electrical-safety',
            order: 9,
            title: {
              en: 'Basic PPE',
              hi: 'बुनियादी पीपीई (PPE)',
              bn: 'মৌলিক পিপিই (PPE)'
            }
          },
          {
            id: 'tp-first-response-accidents',
            chapterId: 'ch-electrical-safety',
            order: 10,
            title: {
              en: 'First Response to Electrical Accidents',
              hi: 'विद्युत दुर्घटनाओं पर प्राथमिक प्रतिक्रिया',
              bn: 'বৈদ্যুতিক দুর্ঘটনায় প্রাথমিক চিকিৎসা ও প্রতিক্রিয়া'
            }
          }
        ]
      }
    ]
  },
  ELECTRICAL_MACHINES_SUBJECT,
  POWER_SYSTEMS_SUBJECT,
  MEASUREMENTS_SUBJECT
];

export const DETAILED_SUBJECTS: DetailedSubject[] = RAW_DETAILED_SUBJECTS.map((subject) => {
  if (subject.id === 'power-systems' || subject.id === 'electrical-measurements') {
    return subject;
  }
  if (subject.id === 'electrical-machines') {
    return {
      ...subject,
      chapters: subject.chapters.map((chapter) => ({
        ...chapter,
        topics: chapter.topics.map((topic) => ({
          ...topic,
          lesson: CHAPTER_6_LESSONS[topic.id] || topic.lesson
        }))
      }))
    };
  }
  if (subject.id !== 'basic-electrical') return subject;
  return {
    ...subject,
    chapters: subject.chapters.map((chapter) => {
      if (chapter.id === 'ch-elec-fund') {
        return {
          ...chapter,
          topics: chapter.topics.map((topic) => ({
            ...topic,
            lesson: CHAPTER_1_LESSONS[topic.id] || topic.lesson
          }))
        };
      }
      if (chapter.id === 'ch-ohms-circuits') {
        return {
          ...chapter,
          topics: chapter.topics.map((topic) => ({
            ...topic,
            lesson: CHAPTER_2_LESSONS[topic.id] || topic.lesson
          }))
        };
      }
      if (chapter.id === 'ch-measurements' || chapter.id === 'ch-power-energy') {
        return {
          ...chapter,
          topics: chapter.topics.map((topic) => ({
            ...topic,
            lesson: CHAPTER_3_LESSONS[topic.id] || topic.lesson
          }))
        };
      }
      if (chapter.id === 'ch-dc-network-analysis') {
        return {
          ...chapter,
          topics: chapter.topics.map((topic) => ({
            ...topic,
            lesson: CHAPTER_4_LESSONS[topic.id] || topic.lesson
          }))
        };
      }
      if (chapter.id === 'ch-alternating-current') {
        return {
          ...chapter,
          topics: chapter.topics.map((topic) => ({
            ...topic,
            lesson: CHAPTER_5_LESSONS[topic.id] || topic.lesson
          }))
        };
      }
      if (chapter.id === 'ch-capacitors') {
        return {
          ...chapter,
          topics: chapter.topics.map((topic) => ({
            ...topic,
            lesson: CHAPTER_7_LESSONS[topic.id] || topic.lesson
          }))
        };
      }
      if (chapter.id === 'ch-inductors') {
        return {
          ...chapter,
          topics: chapter.topics.map((topic) => ({
            ...topic,
            lesson: CHAPTER_8_LESSONS[topic.id] || topic.lesson
          }))
        };
      }
      if (chapter.id === 'ch-magnetic-circuits') {
        return {
          ...chapter,
          topics: chapter.topics.map((topic) => ({
            ...topic,
            lesson: CHAPTER_9_LESSONS[topic.id] || topic.lesson
          }))
        };
      }
      return chapter;
    })
  };
});

export function getDetailedSubject(subjectId: string): DetailedSubject | undefined {
  return DETAILED_SUBJECTS.find(s => s.id === subjectId || s.slug === subjectId);
}

export interface TopicContext {
  subject: DetailedSubject;
  chapter: Chapter;
  topic: Topic;
  lesson?: Lesson;
  topicIndex: number;
  totalTopics: number;
  chapterIndex: number;
  totalChapters: number;
  allChapters: Chapter[];
  prevTopic?: Topic;
  nextTopic?: Topic;
}

export function getTopicContext(topicId: string): TopicContext | undefined {
  if (!topicId) {
    // Default to the very first topic
    const firstSubject = DETAILED_SUBJECTS[0];
    const firstChapter = firstSubject?.chapters[0];
    const firstTopic = firstChapter?.topics[0];
    if (!firstTopic || !firstChapter || !firstSubject) return undefined;
    return {
      subject: firstSubject,
      chapter: firstChapter,
      topic: firstTopic,
      lesson: firstTopic.lesson,
      topicIndex: 1,
      totalTopics: firstChapter.topics.length,
      chapterIndex: 1,
      totalChapters: firstSubject.chapters.length,
      allChapters: firstSubject.chapters,
      prevTopic: undefined,
      nextTopic: firstChapter.topics[1]
    };
  }

  // 1. Direct search by topic ID or lesson ID or lesson topicId across all subjects
  for (const subject of DETAILED_SUBJECTS) {
    for (let chIdx = 0; chIdx < subject.chapters.length; chIdx++) {
      const chapter = subject.chapters[chIdx];
      const topicIdx = chapter.topics.findIndex(t => 
        t.id === topicId || 
        (t.lesson && (t.lesson.id === topicId || t.lesson.topicId === topicId))
      );
      if (topicIdx !== -1) {
        const topic = chapter.topics[topicIdx];
        
        // Calculate previous topic (within chapter or from previous chapter's last topic)
        let prevTopic: Topic | undefined;
        if (topicIdx > 0) {
          prevTopic = chapter.topics[topicIdx - 1];
        } else if (chIdx > 0) {
          const prevChapter = subject.chapters[chIdx - 1];
          if (prevChapter.topics.length > 0) {
            prevTopic = prevChapter.topics[prevChapter.topics.length - 1];
          }
        }

        // Calculate next topic (within chapter or from next chapter's first topic)
        let nextTopic: Topic | undefined;
        if (topicIdx < chapter.topics.length - 1) {
          nextTopic = chapter.topics[topicIdx + 1];
        } else if (chIdx < subject.chapters.length - 1) {
          const nextChapter = subject.chapters[chIdx + 1];
          if (nextChapter.topics.length > 0) {
            nextTopic = nextChapter.topics[0];
          }
        }

        return {
          subject,
          chapter,
          topic,
          lesson: topic.lesson,
          topicIndex: topicIdx + 1,
          totalTopics: chapter.topics.length,
          chapterIndex: chIdx + 1,
          totalChapters: subject.chapters.length,
          allChapters: subject.chapters,
          prevTopic,
          nextTopic
        };
      }
    }
  }

  // 2. Search by subject ID or slug or chapter ID or alias
  const matchingSubject = DETAILED_SUBJECTS.find(s => 
    s.id === topicId || 
    s.slug === topicId ||
    (topicId.includes('electrical-measurements') && s.id === 'electrical-measurements') ||
    (topicId.includes('power-systems') && s.id === 'power-systems') ||
    (topicId.includes('electrical-machines') && s.id === 'electrical-machines') ||
    (topicId.startsWith('basic-electrical') && s.id === 'basic-electrical')
  ) || (
    topicId.includes('measurement') || topicId.startsWith('meas-') || topicId.includes('instrument') || topicId.includes('pmmc') || topicId.includes('bridge') || topicId.includes('wattmeter')
      ? DETAILED_SUBJECTS.find(s => s.id === 'electrical-measurements')
      : topicId.includes('power') || topicId.startsWith('ps-') || topicId.includes('grid') || topicId.includes('transmission')
      ? DETAILED_SUBJECTS.find(s => s.id === 'power-systems')
      : topicId.includes('machines') || topicId.startsWith('em-')
      ? DETAILED_SUBJECTS.find(s => s.id === 'electrical-machines')
      : DETAILED_SUBJECTS[0]
  );

  if (matchingSubject) {
    // Check if topicId matches a chapter ID or module
    const matchingChapterIdx = matchingSubject.chapters.findIndex(c => 
      c.id === topicId || 
      (topicId.includes('em-ch1') && c.id === 'em-ch1-transformers') ||
      (topicId.includes('em-ch2') && c.id === 'em-ch2-dc-generators') ||
      (topicId.includes('em-ch3') && c.id === 'em-ch3-dc-motors') ||
      (topicId.includes('em-ch4') && c.id === 'em-ch4-induction-motors') ||
      (topicId.includes('em-ch5') && c.id === 'em-ch5-synchronous-special') ||
      (topicId.includes('transformer') && c.id === 'em-ch1-transformers') ||
      (topicId.includes('generator') && c.id === 'em-ch2-dc-generators') ||
      (topicId.includes('motor') && c.id === 'em-ch3-dc-motors') ||
      (topicId.includes('induction') && c.id === 'em-ch4-induction-motors') ||
      (topicId.includes('synchronous') && c.id === 'em-ch5-synchronous-special') ||
      (topicId.includes('ch1') && c.order === 1) ||
      (topicId.includes('ch2') && c.order === 2) ||
      (topicId.includes('ch3') && c.order === 3) ||
      (topicId.includes('ch4') && c.order === 4) ||
      (topicId.includes('ch5') && c.order === 5) ||
      (topicId.includes('ch6') && c.order === 6) ||
      (topicId.includes('ch7') && c.order === 7) ||
      (topicId.includes('ch8') && c.order === 8) ||
      (topicId.includes('ch9') && c.order === 9)
    );

    const chIdx = matchingChapterIdx !== -1 ? matchingChapterIdx : 0;
    const chapter = matchingSubject.chapters[chIdx];
    if (chapter && chapter.topics.length > 0) {
      const topic = chapter.topics[0];
      return {
        subject: matchingSubject,
        chapter,
        topic,
        lesson: topic.lesson,
        topicIndex: 1,
        totalTopics: chapter.topics.length,
        chapterIndex: chIdx + 1,
        totalChapters: matchingSubject.chapters.length,
        allChapters: matchingSubject.chapters,
        prevTopic: chIdx > 0 ? matchingSubject.chapters[chIdx - 1].topics[matchingSubject.chapters[chIdx - 1].topics.length - 1] : undefined,
        nextTopic: chapter.topics.length > 1 ? chapter.topics[1] : (chIdx < matchingSubject.chapters.length - 1 ? matchingSubject.chapters[chIdx + 1].topics[0] : undefined)
      };
    }
  }

  return undefined;
}

