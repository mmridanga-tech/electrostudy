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
import { CHAPTER_10_LESSONS } from './chapter10Lessons';
import { CHAPTER_11_LESSONS } from './chapter11Lessons';
import { CHAPTER_12_LESSONS } from './chapter12Lessons';
import { CHAPTER_13_LESSONS } from './chapter13Lessons';
import { CHAPTER_14_LESSONS } from './chapter14Lessons';
import { CHAPTER_15_LESSONS } from './chapter15Lessons';
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
        id: 'ch-electrical-machines',
        subjectId: 'basic-electrical',
        order: 6,
        title: {
          en: 'Chapter 6: DC Machines & Transformers',
          hi: 'अध्याय 6: डीसी मशीनें एवं ट्रांसफॉर्मर',
          bn: 'অধ্যায় ৬: ডিসি মেশিন ও ট্রান্সফরমার'
        },
        topics: [
          {
            id: 'ch6-electrical-machines-fundamentals',
            chapterId: 'ch-electrical-machines',
            order: 1,
            level: 'Foundation',
            title: {
              en: 'Electromechanical Energy Conversion Fundamentals',
              hi: 'विद्युत-यांत्रिक ऊर्जा रूपांतरण के मूल सिद्धांत',
              bn: 'ইলেক্ট্রোমেকানিক্যাল শক্তি রূপান্তরের মূল ভিত্তি'
            },
            description: {
              en: 'Energy flow in magnetic coupling medium, generator and motor actions, Faraday induction, and Lorentz force law F = B·I·L.',
              hi: 'चुंबकीय माध्यम में ऊर्जा प्रवाह, जनरेटर व मोटर क्रिया, फैराडे प्रेरण एवं लोरेंट्ज़ बल नियम F = B·I·L।',
              bn: 'চৌম্বক মাধ্যমে শক্তি প্রবাহ, জেনারেটর ও মোটর ক্রিয়া, ফ্যারাডের আবেশ এবং লরেন্টজ বল সূত্র F = B·I·L।'
            }
          },
          {
            id: 'ch6-magnetic-circuits',
            chapterId: 'ch-electrical-machines',
            order: 2,
            level: 'Diploma',
            title: {
              en: 'Magnetic Circuits & Electromagnetic Principles in Machines',
              hi: 'चुंबकीय परिपथ एवं विद्युतचुंबकीय सिद्धांत',
              bn: 'ম্যাগনেটিক সার্কিট ও ইলেক্ট্রোম্যাগনেটিক নীতি'
            },
            description: {
              en: 'MMF, reluctance, magnetic flux paths, permeability, Lenz’s law, and Fleming’s right-hand rule for generator induced EMF.',
              hi: 'MMF, रिलक्टेंस, चुंबकीय फ्लक्स पथ, लेन्ज का नियम एवं जनरेटर प्रेरित EMF हेतु फ्लेमिंग का दायाँ हाथ नियम।',
              bn: 'MMF, রিলাক্ট্যান্স, চৌম্বক ফ্লাক্স পথ, লেঞ্জের সূত্র এবং জেনারেটরে আবিষ্ট EMF নির্ণয়ে ফ্লেমিংয়ের ডান হাত নিয়ম।'
            }
          },
          {
            id: 'ch6-dc-machine-construction',
            chapterId: 'ch-electrical-machines',
            order: 3,
            level: 'Diploma',
            title: {
              en: 'DC Machine Construction & Armature Windings',
              hi: 'डीसी मशीन की संरचना एवं आर्मेचर वाइंडिंग (Lap & Wave)',
              bn: 'ডিসি মেশিনের গঠন ও আর্মেচার ওয়াইন্ডিং (ল্যাপ ও ওয়েভ)'
            },
            description: {
              en: 'Stator yoke, field poles, armature core laminations, commutator segments, carbon brushes, and Lap (A=P) vs Wave (A=2) windings.',
              hi: 'योक, फील्ड पोल, आर्मेचर कोर, कम्यूटेटर, कार्बन ब्रश तथा लैप (A=P) एवं वेव वाइंडिंग (A=2) की तुलना।',
              bn: 'ইয়োক, ফিল্ড পোল, আর্মেচার কোর, কমিউটেটর, কার্বন ব্রাশ এবং ল্যাপ (A=P) বনাম ওয়েভ (A=2) ওয়াইন্ডিং।'
            }
          },
          {
            id: 'ch6-dc-generator-emf',
            chapterId: 'ch-electrical-machines',
            order: 4,
            level: 'Engineering',
            title: {
              en: 'DC Generator EMF Equation & Voltage Generation',
              hi: 'डीसी जनरेटर EMF समीकरण एवं वोल्टेज निर्माण',
              bn: 'ডিসি জেনারেটরের EMF সমীকরণ ও ভোল্টেজ উৎপাদন'
            },
            description: {
              en: 'Derivation of generated EMF Eg = (P·Φ·Z·N)/(60·A), role of speed N and flux per pole Φ in voltage generation.',
              hi: 'उत्पन्न EMF समीकरण Eg = (P·Φ·Z·N)/(60·A) का निगमन तथा घूर्णन गति N और फ्लक्स Φ का प्रभाव।',
              bn: 'উৎপন্ন EMF সমীকরণ Eg = (P·Φ·Z·N)/(60·A) প্রতিপাদন এবং ঘূর্ণন গতি ও ফ্লাক্সের প্রভাব।'
            }
          },
          {
            id: 'ch6-dc-generator-types',
            chapterId: 'ch-electrical-machines',
            order: 5,
            level: 'Diploma',
            title: {
              en: 'Types of DC Generators & Field Excitation Methods',
              hi: 'डीसी जनरेटर के प्रकार एवं फील्ड उत्तेजन विधियाँ',
              bn: 'ডিসি জেনারেটরের প্রকারভেদ ও ফিল্ড এক্সাইটেশন'
            },
            description: {
              en: 'Separately excited, shunt, series, cumulative compound, and differential compound DC generators with circuit topologies.',
              hi: 'प्रथक उत्तेजित, शंट, सीरीज, संचयी यौगिक (Cumulative) एवं विभेदी यौगिक (Differential) डीसी जनरेटर।',
              bn: 'পৃথক উত্তেজিত, সান্ট, সিরিজ, কিউমুলেটিভ ও ডিফারেনশিয়াল কম্পাউন্ড ডিসি জেনারেটর।'
            }
          },
          {
            id: 'ch6-dc-generator-characteristics',
            chapterId: 'ch-electrical-machines',
            order: 6,
            level: 'Engineering',
            title: {
              en: 'DC Generator Characteristics & Voltage Build-Up',
              hi: 'डीसी जनरेटर विशेषताएँ एवं वोल्टेज बिल्ड-अप',
              bn: 'ডিসি জেনারেটরের বৈশিষ্ট্য ও ভোল্টেজ বিল্ড-আপ'
            },
            description: {
              en: 'Open circuit characteristic (OCC), internal and external load curves, critical resistance Rc, critical speed Nc, and residual magnetism.',
              hi: 'ओपन सर्किट विशेषता (OCC), आंतरिक एवं बाह्य लोड वक्र, क्रांतिक प्रतिरोध Rc, क्रांतिक गति Nc एवं अवशिष्ट चुंबकत्व।',
              bn: 'ওপেন সার্কিট ক্যারেক্টারিস্টিক (OCC), লোড বৈশিষ্ট্য রেখা, ক্রিটিক্যাল রেজিস্ট্যান্স Rc, ক্রিটিক্যাল স্পিড Nc এবং অবশিষ্ট চুম্বকত্ব।'
            }
          },
          {
            id: 'ch6-dc-generator-losses-efficiency',
            chapterId: 'ch-electrical-machines',
            order: 7,
            level: 'Engineering',
            title: {
              en: 'DC Machine Losses, Efficiency & Power Flow',
              hi: 'डीसी मशीन हानियाँ, दक्षता एवं शक्ति प्रवाह',
              bn: 'ডিসি মেশিনের অপচয়, কর্মদক্ষতা ও পাওয়ার ফ্লো'
            },
            description: {
              en: 'Copper losses (I²R), iron losses (hysteresis and eddy current), mechanical losses, maximum efficiency condition, and power stage flow diagram.',
              hi: 'कॉपर हानियाँ, लौह हानियाँ, यांत्रिक हानियाँ, अधिकतम दक्षता की शर्त एवं पावर फ्लो डायग्राम।',
              bn: 'কপার লস, আয়রন লস, মেকানিক্যাল লস, সর্বোচ্চ দক্ষতার শর্ত এবং পাওয়ার ফ্লো ডায়াগ্রাম।'
            }
          },
          {
            id: 'ch6-dc-motor-principle',
            chapterId: 'ch-electrical-machines',
            order: 8,
            level: 'Engineering',
            title: {
              en: 'DC Motor Principle, Back EMF & Torque Equation',
              hi: 'डीसी मोटर सिद्धांत, बैक EMF एवं टॉर्क समीकरण',
              bn: 'ডিসি মোটরের নীতি, ব্যাক EMF ও টর্ক সমীকরণ'
            },
            description: {
              en: 'Lorentz force action, back EMF Eb = V - Ia·Ra as an automatic speed regulator, electromagnetic torque equation Ta = (1/2π)·(P·Φ·Z·Ia)/A.',
              hi: 'लोरेंट्ज़ बल, बैक EMF Eb = V - Ia·Ra का स्व-नियमन सिद्धांत एवं विद्युतचुंबकीय टॉर्क Ta ∝ Φ·Ia।',
              bn: 'লরেন্টজ বল, ব্যাক EMF Eb = V - Ia·Ra ও এর অটো-স্পিড রেগুলেশন এবং ইলেক্ট্রোম্যাগনেটিক টর্ক সমীকরণ Ta ∝ Φ·Ia।'
            }
          },
          {
            id: 'ch6-dc-motor-types',
            chapterId: 'ch-electrical-machines',
            order: 9,
            level: 'Diploma',
            title: {
              en: 'Types of DC Motors & Speed-Torque Characteristics',
              hi: 'डीसी मोटरों के प्रकार एवं गति-टॉर्क विशेषताएँ',
              bn: 'ডিসি মোটরের প্রকারভেদ ও স্পিড-টর্ক বৈশিষ্ট্য'
            },
            description: {
              en: 'DC shunt motor (constant speed), DC series motor (high starting torque, dangerous at no-load), compound motors, and torque-speed curves.',
              hi: 'डीसी शंट मोटर (स्थिर गति), सीरीज मोटर (उच्च स्टार्टिंग टॉर्क), कंपाउंड मोटर एवं टॉर्क-गति वक्र।',
              bn: 'ডিসি সান্ট মোটর (স্থির গতি), সিরিজ মোটর (উচ্চ স্টার্টিং টর্ক, নো-লোডে বিপজ্জনক), কম্পাউন্ড মোটর এবং টর্ক-স্পিড কার্ভ।'
            }
          },
          {
            id: 'ch6-dc-motor-starting',
            chapterId: 'ch-electrical-machines',
            order: 10,
            level: 'Practical',
            title: {
              en: 'DC Motor Starting Methods & Starters (2-Pt, 3-Pt, 4-Pt)',
              hi: 'डीसी मोटर स्टार्टिंग विधियाँ एवं स्टार्टर (2-Point, 3-Point, 4-Point)',
              bn: 'ডিসি মোটর স্টার্টিং পদ্ধতি ও স্টার্টার (২-পয়েন্ট, ৩-পয়েন্ট, ৪-পয়েন্ট)'
            },
            description: {
              en: 'Why starters are required at zero back EMF, 2-point starter for series motors, 3-point and 4-point starters with No-Volt Release and Overload Release coils.',
              hi: 'शून्य बैक EMF पर स्टार्टर की आवश्यकता, 2-पॉइंट, 3-पॉइंट व 4-पॉइंट स्टार्टर तथा NVR और OLR सुरक्षा।',
              bn: 'শূন্য ব্যাক EMF অবস্থায় স্টার্টারের প্রয়োজন, ২-পয়েন্ট, ৩-পয়েন্ট ও ৪-পয়েন্ট স্টার্টার এবং NVR ও OLR প্রটেকশন।'
            }
          },
          {
            id: 'ch6-dc-motor-speed-control',
            chapterId: 'ch-electrical-machines',
            order: 11,
            level: 'Engineering',
            title: {
              en: 'Speed Control (Flux, Armature, Ward-Leonard) & Electric Braking',
              hi: 'गति नियंत्रण (फ्लक्स, आर्मेचर, वार्ड-लियोनार्ड) एवं इलेक्ट्रिक ब्रेकिंग',
              bn: 'গতি নিয়ন্ত্রণ (ফ্লাক্স, আর্মেচার, ওয়ার্ড-লিওনার্ড) ও ইলেকট্রিক ব্রেকিং'
            },
            description: {
              en: 'Field flux control (above base speed), armature resistance control (below base speed), Ward-Leonard system (smooth 4-quadrant control), and dynamic/regenerative/plugging braking.',
              hi: 'फील्ड फ्लक्स नियंत्रण (बेस स्पीड से ऊपर), आर्मेचर नियंत्रण (बेस स्पीड से नीचे), वार्ड-लियोनार्ड सिस्टम एवं इलेक्ट्रिक ब्रेकिंग विधियाँ।',
              bn: 'ফিল্ড ফ্লাক্স কন্ট্রোল (বেস গতির উপরে), আর্মেচার কন্ট্রোল (বেস গতির নিচে), ওয়ার্ড-লিওনার্ড পদ্ধতি এবং ডায়নামিক, রিজেনারেটিভ ও প্লাগিং ব্রেকিং।'
            }
          },
          {
            id: 'ch6-dc-motor-braking',
            chapterId: 'ch-electrical-machines',
            order: 12,
            level: 'Engineering',
            title: {
              en: 'DC Motor Braking Methods (Plugging, Rheostatic & Regenerative)',
              hi: 'डीसी मोटर ब्रेकिंग विधियाँ (प्लगिंग, रियोस्टैटिक एवं रीजेनरेटिव)',
              bn: 'ডিসি মোটর ব্রেকিং পদ্ধতি (প্লাগিং, রিহোস্ট্যাটিক ও রিজেনারেটিভ)'
            },
            description: {
              en: 'Regenerative braking with power return, Rheostatic/Dynamic braking with energy dissipation, and Plugging reverse current braking with safety interlocking.',
              hi: 'रीजेनरेटिव ब्रेकिंग, रियोस्टैटिक/डायनामिक ब्रेकिंग एवं प्लगिंग (विपरीत धारा) ब्रेकिंग का विश्लेषण।',
              bn: 'রিজেনারেটিভ ব্রেকিং, রিহোস্ট্যাটিক/ডায়নামিক ব্রেকিং এবং প্লাগিং রিভার্স কারেন্ট ব্রেকিং বিশ্লেষণ।'
            }
          },
          {
            id: 'ch6-transformer-fundamentals',
            chapterId: 'ch-electrical-machines',
            order: 13,
            level: 'Foundation',
            title: {
              en: 'Transformer Fundamentals & EMF Equation',
              hi: 'ट्रांसफॉर्मर के मूल सिद्धांत एवं EMF समीकरण',
              bn: 'ট্রান্সফরমারের মূলনীতি ও EMF সমীকরণ'
            },
            description: {
              en: 'Mutual induction, ideal vs practical transformers, transformation ratio K = V2/V1 = N2/N1 = I1/I2, EMF equation E = 4.44·f·N·Φm, and core flux density.',
              hi: 'पारस्परिक प्रेरण, आदर्श व वास्तविक ट्रांसफॉर्मर, रूपांतरण अनुपात K, EMF समीकरण E = 4.44·f·N·Φm तथा कोर फ्लक्स घनत्व।',
              bn: 'মিউচুয়াল ইনডাকশন, আদর্শ ও বাস্তব ট্রান্সফরমার, রূপান্তর অনুপাত K, EMF সমীকরণ E = ৪.৪৪·f·N·Φm এবং কোর ফ্লাক্স ঘনত্ব।'
            }
          },
          {
            id: 'ch6-transformer-types-construction',
            chapterId: 'ch-electrical-machines',
            order: 14,
            level: 'Diploma',
            title: {
              en: 'Transformer Types, Construction & Cooling Methods',
              hi: 'ट्रांसफॉर्मर प्रकार, संरचना एवं शीतलन विधियाँ',
              bn: 'ট্রান্সফরমারের প্রকারভেদ, গঠন ও কুলিং পদ্ধতি'
            },
            description: {
              en: 'Core-type vs Shell-type vs Berry-type transformers, CRGO silicon steel laminations, windings, and cooling methods (ONAN, ONAF, OFAF, OFWF).',
              hi: 'कोर-टाइप, शेल-टाइप एवं बेरी-टाइप ट्रांसफॉर्मर, CRGO सिलिकॉन स्टील लेमिनेशन, वाइंडिंग एवं शीतलन विधियाँ (ONAN, ONAF, OFAF, OFWF)।',
              bn: 'কোর-টাইপ, শেল-টাইপ ও বেরি-টাইপ ট্রান্সফরমার, CRGO সিলিকন স্টিল লেমিনেশন, ওয়াইন্ডিং এবং কুলিং পদ্ধতি (ONAN, ONAF, OFAF, OFWF)।'
            }
          },
          {
            id: 'ch6-transformer-equivalent-circuit',
            chapterId: 'ch-electrical-machines',
            order: 15,
            level: 'Engineering',
            title: {
              en: 'Equivalent Circuit & Phasor Analysis',
              hi: 'तुल्य परिपथ एवं फेज़र विश्लेषण',
              bn: 'সমতুল্য সার্কিট ও ফেজর ডায়াগ্রাম'
            },
            description: {
              en: 'Exact and approximate equivalent circuits referred to primary/secondary, magnetizing reactance Xm, core-loss resistance Rc, and phasor diagrams.',
              hi: 'प्राथमिक/द्वितीयक के संदर्भ में सटीक एवं अनुमानित तुल्य परिपथ, कोर-हानि प्रतिरोध Rc, मैग्नेटाइजिंग रिएक्टेंस Xm एवं फेज़र आरेख।',
              bn: 'প্রাইমারি ও সেকেন্ডারির সাপেক্ষে তুল্য সার্কিট, কোর-লস রেজিস্ট্যান্স Rc, ম্যাগনেটাইজিং রিঅ্যাকট্যান্স Xm এবং ফেজর ডায়াগ্রাম।'
            }
          },
          {
            id: 'ch6-transformer-losses-efficiency',
            chapterId: 'ch-electrical-machines',
            order: 16,
            level: 'Engineering',
            title: {
              en: 'Transformer Losses, Efficiency & Voltage Regulation',
              hi: 'हानियाँ, दक्षता एवं वोल्टेज रेगुलेशन',
              bn: 'ট্রান্সফরমারের লস, কর্মদক্ষতা ও ভোল্টেজ রেগুলেশন'
            },
            description: {
              en: 'Iron losses (Hysteresis & Eddy current), copper losses (I²R), maximum efficiency condition (Pi = Pcu), all-day efficiency, and voltage regulation formula.',
              hi: 'लौह हानियाँ (हिस्टैरिसीस व भंवर धारा), कॉपर हानियाँ, अधिकतम दक्षता की शर्त (Pi = Pcu), ऑल-डे दक्षता एवं वोल्टेज नियमन।',
              bn: 'আয়রন লস (হিস্টেরেসিস ও এডি কারেন্ট), কপার লস (I²R), সর্বোচ্চ দক্ষতার শর্ত (Pi = Pcu), অল-ডে দক্ষতা এবং ভোল্টেজ রেগুলেশন।'
            }
          },
          {
            id: 'ch6-transformer-tests',
            chapterId: 'ch-electrical-machines',
            order: 17,
            level: 'Engineering',
            title: {
              en: 'Transformer Testing: OC, SC & Sumpner’s Back-to-Back Tests',
              hi: 'ट्रांसफॉर्मर परीक्षण: OC, SC एवं संपटनर परीक्षण',
              bn: 'ট্রান্সফরমার টেস্টিং: OC, SC ও সাম্পনার টেস্ট'
            },
            description: {
              en: 'Open Circuit (OC) test for core parameters, Short Circuit (SC) test for winding impedance, and Sumpner’s test for full-load temperature rise.',
              hi: 'कोर पैरामीटर हेतु ओपन सर्किट (OC) टेस्ट, वाइंडिंग प्रतिबाधा हेतु शॉर्ट सर्किट (SC) टेस्ट एवं तापमान वृद्धि हेतु संपटनर टेस्ट।',
              bn: 'কোর প্যারামিটারের জন্য ওপেন সার্কিট (OC) টেস্ট, ওয়াইন্ডিং ইম্পিডেন্সের জন্য শর্ট সার্কিট (SC) টেস্ট এবং তাপমাত্রা বৃদ্ধির জন্য সাম্পনার টেস্ট।'
            }
          },
          {
            id: 'ch6-transformer-parallel-operation',
            chapterId: 'ch-electrical-machines',
            order: 18,
            level: 'Engineering',
            title: {
              en: 'Parallel Operation & Load Sharing',
              hi: 'समानांतर प्रचालन एवं भार विभाजन',
              bn: 'প্যারালাল অপারেশন ও লোড শেয়ারিং'
            },
            description: {
              en: 'Essential conditions for parallel operation: equal voltage ratio, same polarity, identical phase sequence/displacement, proportional per-unit impedance.',
              hi: 'समानांतर प्रचालन की आवश्यक शर्तें: समान वोल्टेज अनुपात, समान ध्रुवता, समान फेज़ अनुक्रम एवं आनुपातिक प्रतिबाधा।',
              bn: 'প্যারালাল অপারেশনের অপরিহার্য শর্তাবলী: অভিন্ন ভোল্টেজ অনুপাত, একই পোলারিটি, ফেজ সিকোয়েন্স ও আনুপাতিক পার-ইউনিট ইম্পিডেন্স।'
            }
          },
          {
            id: 'ch6-transformer-protection-maintenance',
            chapterId: 'ch-electrical-machines',
            order: 19,
            level: 'Practical',
            title: {
              en: 'Transformer Protection (Buchholz Relay, 87T) & Maintenance',
              hi: 'ट्रांसफॉर्मर सुरक्षा (बुखोल्ज़ रिले, 87T) एवं अनुरक्षण',
              bn: 'ট্রান্সফরমার সুরক্ষা (বুখহোলজ রিলে, 87T) ও রক্ষণাবেক্ষণ'
            },
            description: {
              en: 'Buchholz gas-actuated relay, conservator tank, silica gel breather, differential protection (87T), oil dielectric BDV testing, and DGA diagnostics.',
              hi: 'बुखोल्ज़ गैस-चालित रिले, कंज़र्वेटर टैंक, सिलिका जेल ब्रीदर, डिफरेंशियल प्रोटेक्शन (87T), तेल ब्रेकडाउन (BDV) एवं DGA डायग्नोस्टिक्स।',
              bn: 'বুখহোলজ গ্যাস চালিত রিলে, কনজারভেটর ট্যাংক, সিলিকা জেল ব্রিদার, ডিফারেনশিয়াল সুরক্ষা (87T), তেলের ডাই-ইলেকট্রিক BDV টেস্ট ও DGA বিশ্লেষণ।'
            }
          },
          {
            id: 'ch6-transformer-applications',
            chapterId: 'ch-electrical-machines',
            order: 20,
            level: 'Practical',
            title: {
              en: 'Auto-transformers, Instrument Transformers & Industrial Duty',
              hi: 'ऑटो-ट्रांसफॉर्मर, इंस्ट्रूमेंट ट्रांसफॉर्मर (CT/PT) एवं औद्योगिक उपयोग',
              bn: 'অটো-ট্রান্সফরমার, ইনস্ট্রুমেন্ট ট্রান্সফরমার ও শিল্প প্রয়োগ'
            },
            description: {
              en: 'Single-winding auto-transformers (copper saving factor 1 - 1/K), Current (CT) and Potential Transformers (PT), and specialized furnace and inverter-duty units.',
              hi: 'ऑटो-ट्रांसफॉर्मर (कॉपर बचत 1 - 1/K), करंट (CT) व पोटेंशियल ट्रांसफॉर्मर (PT), फर्नेस एवं सोलर इनवर्टर-ड्यूटी ट्रांसफॉर्मर।',
              bn: 'অটো-ট্রান্সফরমার (কপার সাশ্রয় ১ - ১/K), কারেন্ট ও পটেনশিয়াল ট্রান্সফরমার (CT/PT), ফার্নেস এবং সোলার ইনভার্টার ট্রান্সফরমার।'
            }
          },
          {
            id: 'ch6-induction-motor-principle',
            chapterId: 'ch-electrical-machines',
            order: 21,
            level: 'Foundation',
            title: {
              en: '3-Phase Induction Motor: Operating Principle, RMF & Slip',
              hi: '3-फेज इंडक्शन मोटर: कार्य सिद्धांत, RMF एवं स्लिप (s)',
              bn: '৩-ফেজ ইন্ডাকশন মোটরের মূলনীতি, RMF ও স্লিপ (s)'
            },
            description: {
              en: 'Generation of constant 1.5 Φm Rotating Magnetic Field (RMF), synchronous speed Ns = 120f/P, rotor induced currents, slip definition s = (Ns - Nr)/Ns, and rotor frequency fr = s·f.',
              hi: '1.5 Φm मान के घूर्णी चुंबकीय क्षेत्र (RMF) का निर्माण, तुल्यकालिक गति Ns = 120f/P, स्लिप s = (Ns - Nr)/Ns एवं रोटर आवृत्ति fr = s·f।',
              bn: '১.৫ Φm মানের ঘূর্ণমান চৌম্বক ক্ষেত্র (RMF) সৃষ্টি, সিনক্রোনাস স্পিড Ns = ১২০f/P, স্লিপ সমীকরণ s = (Ns - Nr)/Ns এবং রোটর ফ্রিকোয়েন্সি fr = s·f।'
            }
          },
          {
            id: 'ch6-induction-motor-torque-slip',
            chapterId: 'ch-electrical-machines',
            order: 22,
            level: 'Engineering',
            title: {
              en: 'Torque-Slip Characteristics & Maximum Breakdown Torque',
              hi: 'टॉर्क-स्लिप विशेषताएँ एवं अधिकतम टॉर्क (Pull-Out Torque)',
              bn: 'টর্ক-স্লিপ বৈশিষ্ট্য ও সর্বোচ্চ ব্রেকডাউন টর্ক'
            },
            description: {
              en: 'Electromagnetic torque equation T ∝ s·E2²·R2 / (R2² + (s·X2)²), condition for maximum breakdown torque (R2 = s_max·X2), and starting torque optimization.',
              hi: 'टॉर्क समीकरण T ∝ s·E2²·R2 / (R2² + (s·X2)²), अधिकतम टॉर्क की शर्त (R2 = s_max·X2) एवं स्टार्टिंग टॉर्क सुधार।',
              bn: 'টর্ক উৎপাদন সমীকরণ T ∝ s·E2²·R2 / (R2² + (s·X2)²), সর্বোচ্চ টর্কের শর্ত (R2 = s_max·X2) এবং স্টার্টিং টর্ক অপ্টিমাইজেশন।'
            }
          },
          {
            id: 'ch6-induction-motor-starters-speed',
            chapterId: 'ch-electrical-machines',
            order: 23,
            level: 'Practical',
            title: {
              en: 'Induction Motor Starters (DOL, Star-Delta, Auto-Xfmr) & V/f Speed Control',
              hi: 'इंडक्शन मोटर स्टार्टर (DOL, स्टार-डेल्टा, ऑटो-ट्रांसफॉर्मर) एवं V/f गति नियंत्रण',
              bn: 'ইন্ডাকশন মোটর স্টার্টার (DOL, স্টার-ডেল্টা, অটো-ট্রান্সফরমার) ও V/f গতি নিয়ন্ত্রণ'
            },
            description: {
              en: 'Methods to limit high starting current surges: Direct-On-Line (DOL), Star-Delta (reduces current & torque by 1/3), Auto-transformer starter, and modern VFD (V/f speed control).',
              hi: 'स्टार्टिंग धारा सीमित करने की विधियाँ: DOL, स्टार-डेल्टा (धारा व टॉर्क 1/3), ऑटो-ट्रांसफॉर्मर स्टार्टर एवं आधुनिक VFD (V/f गति नियंत्रण)।',
              bn: 'উচ্চ স্টার্টিং কারেন্ট নিয়ন্ত্রণে DOL, স্টার-ডেল্টা (কারেন্ট ও টর্ক ১/৩ ভাগে নামে), অটো-ট্রান্সফরমার স্টার্টার এবং আধুনিক ভিএফডি (V/f গতি নিয়ন্ত্রণ)।'
            }
          },
          {
            id: 'ch6-synchronous-generator-motor',
            chapterId: 'ch-electrical-machines',
            order: 24,
            level: 'Engineering',
            title: {
              en: 'Synchronous Machines: Alternator EMF, Voltage Regulation & V-Curves',
              hi: 'सिंक्रोनस मशीनें: अल्टरनेटर EMF, वोल्टेज रेगुलेशन एवं V-वक्र',
              bn: 'সিনক্রোনাস মেশিন: অল্টারনেটর EMF, ভোল্টেজ রেগুলেশন ও V-কার্ভ'
            },
            description: {
              en: 'Alternator EMF equation Eph = 4.44·Kc·Kd·f·T·Φ, voltage regulation methods, synchronous motor constant speed, V-curves and inverted V-curves, and synchronous condensers.',
              hi: 'अल्टरनेटर EMF समीकरण Eph = 4.44·Kc·Kd·f·T·Φ, वोल्टेज रेगुलेशन विधियाँ, सिंक्रोनस मोटर V-वक्र एवं सिंक्रोनस कंडेनसर।',
              bn: 'অল্টারনেটর EMF সমীকরণ Eph = ৪.৪৪·Kc·Kd·f·T·Φ, ভোল্টেজ রেগুলেশন, সিনক্রোনাস মোটরের V-কার্ভ এবং পাওয়ার গ্রিডে সিনক্রোনাস কনডেনসার।'
            }
          },
          {
            id: 'ch6-single-phase-special-motors',
            chapterId: 'ch-electrical-machines',
            order: 25,
            level: 'Engineering',
            title: {
              en: 'Single-Phase Motors & Special Machines (Stepper, BLDC, Universal)',
              hi: 'सिंगल-फेज मोटरें एवं विशेष मशीनें (स्टेपर, BLDC, यूनिवर्सल मोटर)',
              bn: 'সিঙ্গেল-ফেজ মোটর ও বিশেষ বৈদ্যুতিক মেশিন (স্টেপার, BLDC, ইউনিভার্সাল মোটর)'
            },
            description: {
              en: 'Double revolving field theory, capacitor-start/run motors, Universal AC/DC series motor, Stepper motors for precision motion, and Brushless DC (BLDC) motors in EVs and robotics.',
              hi: 'डबल रिवॉल्विंग फील्ड थ्योरी, कैपेसिटर स्टार्ट/रन मोटर, यूनिवर्सल एसी/डीसी मोटर, स्टेपर मोटर एवं इलेक्ट्रिक वाहनों में BLDC मोटर।',
              bn: 'ডাবল রিভলভিং ফিল্ড তত্ত্ব, ক্যাপাসিটর স্টার্ট ও রান মোটর, ইউনিভার্সাল এসি/ডিসি মোটর, স্টেপার মোটর এবং আধুনিক ইভি ও রোবোটিক্সে BLDC মোটর।'
            }
          }
        ]
      },
      {
        id: 'ch-capacitors',
        subjectId: 'basic-electrical',
        order: 7,
        title: {
          en: 'Chapter 7: Capacitors & Electrostatics',
          hi: 'अध्याय 7: संधारित्र (कैपेसिटर) एवं स्थिरवैद्युतिकी',
          bn: 'অধ্যায় ৭: ক্যাপাসিটর ও স্থিরতড়িৎ'
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
            id: 'ch10-faradays-laws-discovery',
            chapterId: 'ch-em-induction',
            order: 1,
            title: {
              en: 'Faraday’s Experiments & Laws of Electromagnetic Induction',
              hi: 'फैराडे के प्रयोग एवं विद्युत चुंबकीय प्रेरण के नियम',
              bn: 'ফ্যারাডের পরীক্ষা ও তড়িৎচুম্বকীয় আবেশের সূত্রসমূহ'
            }
          },
          {
            id: 'ch10-lenzs-law-conservation-energy',
            chapterId: 'ch-em-induction',
            order: 2,
            title: {
              en: 'Lenz’s Law & Conservation of Energy Principle',
              hi: 'लेंज का नियम एवं ऊर्जा संरक्षण का सिद्धांत',
              bn: 'লেনজের সূত্র ও শক্তি সংরক্ষণ নীতি'
            }
          },
          {
            id: 'ch10-flemings-right-hand-rule',
            chapterId: 'ch-em-induction',
            order: 3,
            title: {
              en: 'Fleming’s Right-Hand Rule & Vector Cross Product (v × B)',
              hi: 'फ्लेमिंग का दायां हाथ नियम एवं सदिश गुणन (v × B)',
              bn: 'ফ্লেমিংয়ের ডানহস্ত নিয়ম ও ভেক্টর গুণন (v × B)'
            }
          },
          {
            id: 'ch10-dynamically-induced-emf',
            chapterId: 'ch-em-induction',
            order: 4,
            title: {
              en: 'Dynamically (Motional) Induced EMF in Conductors',
              hi: 'चालकों में गतिक रूप से प्रेरित ईएमएफ (EMF)',
              bn: 'পরিবাহীতে গতিশীলভাবে আবিষ্ট ইএমএফ (EMF)'
            }
          },
          {
            id: 'ch10-statically-induced-emf',
            chapterId: 'ch-em-induction',
            order: 5,
            title: {
              en: 'Statically Induced EMF: Concept & Working Principles',
              hi: 'स्थैतिक रूप से प्रेरित ईएमएफ: अवधारणा एवं कार्य सिद्धांत',
              bn: 'স্থিতিশীলভাবে আবিষ্ট ইএমএফ: ধারণা ও কার্যনীতি'
            }
          },
          {
            id: 'ch10-self-induction-inductance',
            chapterId: 'ch-em-induction',
            order: 6,
            title: {
              en: 'Self-Induction, Self-Induced EMF & Coefficient of Self-Inductance (L)',
              hi: 'स्व-प्रेरण, स्व-प्रेरित ईएमएफ एवं स्व-प्रेरकत्व गुणांक (L)',
              bn: 'স্ব-আবেশ, স্ব-আবিষ্ট ইএমএফ এবং স্ব-আবেশ গুণাঙ্ক (L)'
            }
          },
          {
            id: 'ch10-mutual-induction',
            chapterId: 'ch-em-induction',
            order: 7,
            title: {
              en: 'Mutual Induction & Mutual Inductance',
              hi: 'पारस्परिक प्रेरण एवं अन्योन्य प्रेरकत्व (M)',
              bn: 'পারস্পরিক আবেশ ও পারস্পরিক আবেশাঙ্ক (M)'
            }
          },
          {
            id: 'ch10-coefficient-of-coupling',
            chapterId: 'ch-em-induction',
            order: 8,
            title: {
              en: 'Coefficient of Coupling & Leakage Flux',
              hi: 'युग्मन गुणांक (k) एवं क्षरण फ्लक्स',
              bn: 'কাপলিং গুণাঙ্ক (k) ও লিকেজ ফ্লাক্স'
            }
          },
          {
            id: 'ch10-transformer-emf-equation',
            chapterId: 'ch-em-induction',
            order: 9,
            title: {
              en: 'Transformer EMF Equation & Ideal Transformer',
              hi: 'ट्रांसफॉर्मर ईएमएफ समीकरण एवं आदर्श ट्रांसफॉर्मर',
              bn: 'ট্রান্সফরমার ইএমএফ সমীকরণ ও আদর্শ ট্রান্সফরমার'
            }
          },
          {
            id: 'ch10-eddy-currents-loss-mechanisms',
            chapterId: 'ch-em-induction',
            order: 10,
            title: {
              en: 'Eddy Currents: Formation, Core Heating & Lamination Design',
              hi: 'भंवर धाराएं: उत्पत्ति, कोर तापन एवं लैमिनेशन डिजाइन',
              bn: 'ঘূর্ণি বা এডি কারেন্ট: উৎপত্তি, কোর উত্তাপন ও ল্যামিনেশন নকশা'
            }
          },
          {
            id: 'ch10-elementary-ac-generator',
            chapterId: 'ch-em-induction',
            order: 11,
            title: {
              en: 'Elementary Single-Loop AC Generator: Slip Rings & Sine Wave Generation',
              hi: 'प्राथमिक सिंगल-लूप एसी जनरेटर: स्लिप रिंग्स एवं ज्या-तरंग उत्पत्ति',
              bn: 'মৌলিক সিঙ্গেল-লুপ এসি জেনারেটর: স্লিপ রিংস ও সাইন ওয়েভ উৎপত্তি'
            }
          },
          {
            id: 'ch10-elementary-dc-generator',
            chapterId: 'ch-em-induction',
            order: 12,
            title: {
              en: 'Elementary DC Generator: Split-Ring Commutator & Pulsating DC',
              hi: 'प्राथमिक डीसी जनरेटर: स्प्लिट-रिंग कम्यूटेटर एवं स्पंदित डीसी',
              bn: 'মৌলিক ডিসি জেনারেটর: স্প্লিট-রিং কমিউটেটর ও স্পন্দিত ডিসি'
            }
          },
          {
            id: 'ch10-skin-effect-proximity-effect',
            chapterId: 'ch-em-induction',
            order: 13,
            title: {
              en: 'High-Frequency Induction: Skin Effect, Skin Depth (δ) & Proximity Effect',
              hi: 'उच्च-आवृत्ति प्रेरण: स्किन प्रभाव, स्किन डेप्थ (δ) एवं प्रॉक्सिमिटी प्रभाव',
              bn: 'উচ্চ-কম্পাঙ্কের আবেশ: স্কিন ইফেক্ট, স্কিন ডেপথ (δ) ও প্রক্সিমিটি ইফেক্ট'
            }
          },
          {
            id: 'ch10-homopolar-generators-discs',
            chapterId: 'ch-em-induction',
            order: 14,
            title: {
              en: 'Faraday’s Disc & Homopolar Generators (Pure DC Induction)',
              hi: 'फैराडे डिस्क एवं होमोपोलर जनरेटर (शुद्ध डीसी प्रेरण)',
              bn: 'ফ্যারাডে ডিস্ক ও হোমোপোলার জেনারেটর (বিশুদ্ধ ডিসি আবেশ)'
            }
          },
          {
            id: 'ch10-induction-coils-transformers',
            chapterId: 'ch-em-induction',
            order: 15,
            title: {
              en: 'Induction Coils, Ruhmkorff Spark Coils & Transformer Action Principles',
              hi: 'प्रेरण कुंडलियां, रूह्मकॉर्फ स्पार्क कॉइल एवं ट्रांसफार्मर क्रिया सिद्धांत',
              bn: 'আবেশ কয়েল, রুমকর্ফ স্পার্ক কয়েল ও ট্রান্সফরমারের কার্যনীতি'
            }
          },
          {
            id: 'ch10-electromagnetic-braking-damping',
            chapterId: 'ch-em-induction',
            order: 16,
            title: {
              en: 'Electromagnetic Braking, Eddy Current Damping & Train Retarders',
              hi: 'विद्युत चुंबकीय ब्रेकिंग, भंवर धारा डैम्पिंग एवं ट्रेन मंदक',
              bn: 'তড়িৎচৌম্বকীয় ব্রেকিং, এডি কারেন্ট ড্যাম্পিং ও ট্রেন রিটার্ডার'
            }
          },
          {
            id: 'ch10-induction-heating-melting',
            chapterId: 'ch-em-induction',
            order: 17,
            title: {
              en: 'Industrial Induction Heating, Surface Hardening & Induction Furnaces',
              hi: 'औद्योगिक प्रेरण तापन, सतह कठोरीकरण एवं प्रेरण भट्टियां',
              bn: 'শিল্প আবেশ উত্তাপন, পৃষ্ঠ দৃঢ়ীকরণ ও ইন্ডাকশন ফার্নেস'
            }
          },
          {
            id: 'ch10-wireless-power-rfid-inductive',
            chapterId: 'ch-em-induction',
            order: 18,
            title: {
              en: 'Wireless Power Transfer (WPT), Qi Inductive Charging & RFID Induction',
              hi: 'वायरलेस पावर ट्रांसफर (WPT), क्यूई इंडक्टिव चार्जिंग एवं आरएफआईडी प्रेरण',
              bn: 'ওয়্যারলেস পাওয়ার ট্রান্সফার (WPT), কিউআই চার্জিং ও আরএফআইডি আবেশ'
            }
          },
          {
            id: 'ch10-linear-induction-magnetic-levitation',
            chapterId: 'ch-em-induction',
            order: 19,
            title: {
              en: 'Linear Induction Motors (LIM), Magnetic Levitation (Maglev) & Railguns',
              hi: 'रैखिक प्रेरण मोटर (LIM), चुंबकीय उत्तोलन (मैगलेव) एवं रेलगन',
              bn: 'লিনিয়ার ইন্ডাকশন মোটর (LIM), ম্যাগনেটিক লেভিটেশন (ম্যাগলেভ) ও রেলগান'
            }
          },
          {
            id: 'ch10-em-induction-testing-safety-capstone',
            chapterId: 'ch-em-induction',
            order: 20,
            title: {
              en: 'Electromagnetic Induction Testing, Shielding, EMI/EMC & Chapter 10 Capstone',
              hi: 'विद्युत चुंबकीय प्रेरण परीक्षण, शील्डिंग, ईएमआई/ईएमसी एवं कैपस्टोन',
              bn: 'তড়িৎচুম্বকীয় আবেশ পরীক্ষা, শিল্ডিং, ইএমআই/ইএমসি ও অধ্যায় ১০ ক্যাপস্টোন'
            }
          }
        ]
      },
      {
        id: 'ch-em-waves',
        subjectId: 'basic-electrical',
        order: 11,
        title: {
          en: 'Chapter 11: Electromagnetic Waves & Electromagnetic Field Theory',
          hi: 'अध्याय 11: विद्युत चुंबकीय तरंगें एवं क्षेत्र सिद्धांत',
          bn: 'অধ্যায় ১১: তড়িৎচৌম্বকীয় তরঙ্গ ও ক্ষেত্র তত্ত্ব'
        },
        topics: [
          {
            id: "ch11-field-fundamentals",
            chapterId: "ch-em-waves",
            order: 1,
            title: {
              en: "Electromagnetic Field Fundamentals: E, D, B, H Vectors & Permittivity/Permeability",
              hi: "विद्युत चुंबकीय क्षेत्र के मूल सिद्धांत: E, D, B, H सदिश एवं परावैद्युतांक/चुंबकशीलता",
              bn: "তড়িৎচৌম্বকীয় ক্ষেত্রের মৌলিক ভিত্তি: E, D, B, H ভেক্টর এবং প্রবেশ্যতা/ভেদ্যতা"
            }
          },
          {
            id: "ch11-gauss-law",
            chapterId: "ch-em-waves",
            order: 2,
            title: {
              en: "Gauss’s Law for Electrostatics & Magnetostatics (Divergence Laws)",
              hi: "स्थिरवैद्युतिकी एवं स्थिरचुंबकत्व के लिए गाउस का नियम (अपसरण नियम)",
              bn: "স্থিরতড়িৎ ও স্থিরচুম্বকত্বে গাউসের সূত্র (ডাইভারজেন্স সূত্র)"
            }
          },
          {
            id: "ch11-ampere-law",
            chapterId: "ch-em-waves",
            order: 3,
            title: {
              en: "Ampere’s Circuital Law & Magnetic Circulation (Curl of H)",
              hi: "एम्पीयर का परिपथीय नियम एवं चुंबकीय परिसंचरण (H का कर्ल)",
              bn: "অ্যাম্পিয়ারের বর্তনী সূত্র ও চৌম্বক সঞ্চালন (H এর কার্ল)"
            }
          },
          {
            id: "ch11-faraday-law",
            chapterId: "ch-em-waves",
            order: 4,
            title: {
              en: "Faraday’s Law of Induction: Field Formulation & Maxwell-Faraday Curl Equation",
              hi: "फैराडे का प्रेरण नियम: क्षेत्र निरूपण एवं मैक्सवेल-फैराडे कर्ल समीकरण",
              bn: "ফ্যারাডের আবেশ সূত্র: ক্ষেত্র রূপ ও ম্যাক্সওয়েল-ফ্যারাডে কার্ল সমীকরণ"
            }
          },
          {
            id: "ch11-displacement-current",
            chapterId: "ch-em-waves",
            order: 5,
            title: {
              en: "Displacement Current Density & The Generalized Ampere-Maxwell Law",
              hi: "विस्थापन धारा घनत्व एवं सामान्यीकृत एम्पीयर-मैक्सवेल नियम",
              bn: "সরণ প্রবাহ ঘনত্ব ও সার্বিক অ্যাম্পিয়ার-ম্যাক্সওয়েল সূত্র"
            }
          },
          {
            id: "ch11-maxwell-equations",
            chapterId: "ch-em-waves",
            order: 6,
            title: {
              en: "Maxwell’s Four Fundamental Equations & Electromagnetic Boundary Conditions",
              hi: "मैक्सवेल के चार मौलिक समीकरण एवं विद्युत चुंबकीय परिसीमा स्थितियाँ",
              bn: "ম্যাক্সওয়েলের চারটি মৌলিক সমীকরণ ও তড়িৎচৌম্বকীয় সীমানা শর্ত"
            }
          },
          {
            id: "ch11-wave-propagation-plane-waves",
            chapterId: "ch-em-waves",
            order: 7,
            title: {
              en: "Electromagnetic Wave Propagation, Uniform Plane Waves (UPW) & Poynting Vector",
              hi: "विद्युत चुंबकीय तरंग संचरण, एकसमान समतल तरंगें (UPW) एवं पॉइंटिंग सदिश",
              bn: "তড়িৎচৌম্বকীয় তরঙ্গ সঞ্চালন, সমরূপ সমতল তরঙ্গ (UPW) ও পয়েন্টিং ভেক্টর"
            }
          },
          {
            id: "ch11-wave-polarization",
            chapterId: "ch-em-waves",
            order: 8,
            title: {
              en: "Wave Polarization (Linear, Circular, Elliptical) & Axial Ratio",
              hi: "तरंग ध्रुवीकरण (रैखिक, वृत्ताकार, दीर्घवृत्ताकार) एवं अक्षीय अनुपात",
              bn: "তরঙ্গ সমবর্তন (রৈখিক, বৃত্তাকার, উপবৃত্তাকার) ও অক্ষীয় অনুপাত"
            }
          },
          {
            id: "ch11-reflection-refraction-normal",
            chapterId: "ch-em-waves",
            order: 9,
            title: {
              en: "Normal Incidence Reflection & Transmission, Wave Impedance and VSWR",
              hi: "अभिलम्ब आपतन परावर्तन एवं संचरण, तरंग प्रतिबाधा तथा VSWR",
              bn: "অভিলম্ব আপতন প্রতিফলন ও সঞ্চালন, তরঙ্গ প্রতিবন্ধকতা এবং VSWR"
            }
          },
          {
            id: "ch11-oblique-incidence-snell-brewster",
            chapterId: "ch-em-waves",
            order: 10,
            title: {
              en: "Oblique Incidence: Snell's Law, Brewster Angle & Total Internal Reflection (TIR)",
              hi: "तिर्यक आपतन: स्नेल का नियम, ब्रूस्टर कोण एवं पूर्ण आंतरिक परावर्तन (TIR)",
              bn: "তির্যক আপতন: স্নেলের সূত্র, ব্রুস্টার কোণ ও অভ্যন্তরীণ পূর্ণ প্রতিফলন (TIR)"
            }
          },
          {
            id: "ch11-skin-depth-shielding",
            chapterId: "ch-em-waves",
            order: 11,
            title: {
              en: "Attenuation Constant, Skin Depth & Electromagnetic Shielding Effectiveness",
              hi: "क्षीणन स्थिरांक, त्वचा गहराई (स्किन डेप्थ) एवं विद्युत चुंबकीय परिरक्षण प्रभावशीलता",
              bn: "ক্ষীণন ধ্রুবক, স্কিন ডেপথ ও তড়িৎচৌম্বকীয় শিল্ডিং কার্যকারিতা"
            }
          },
          {
            id: "ch11-waveguides-cutoff-dispersion",
            chapterId: "ch-em-waves",
            order: 12,
            title: {
              en: "Rectangular Waveguides: TE/TM Modes, Cutoff Frequencies & Phase/Group Velocity",
              hi: "आयताकार वेवगाइड: TE/TM विधाएं, अंतक आवृत्तियां एवं कला/समूह वेग",
              bn: "আয়তাকার ওয়েভগাইড: TE/TM মোড, কাট-অফ কম্পাঙ্ক ও ফেজ/গ্রুপ বেগ"
            }
          },
          {
            id: "ch11-em-spectrum-radio-to-gamma",
            chapterId: "ch-em-waves",
            order: 13,
            title: {
              en: "The Electromagnetic Spectrum & Modern Communications (Radio to Gamma Rays)",
              hi: "विद्युत चुंबकीय स्पेक्ट्रम एवं आधुनिक संचार (रेडियो से गामा किरणों तक)",
              bn: "তড়িৎচৌম্বকীয় বর্ণালী ও আধুনিক যোগাযোগ (রেডিও থেকে গামা রশ্মি)"
            }
          },
          {
            id: "ch11-antenna-fundamentals-link-budget",
            chapterId: "ch-em-waves",
            order: 14,
            title: {
              en: "Antenna Fundamentals: Radiation Patterns, Directivity, Gain & Friis Link Budget",
              hi: "एंटीना मूल सिद्धांत: विकिरण प्रतिरूप, दिशात्मकता, लब्धि एवं फ़्रीस लिंक बजट",
              bn: "অ্যান্টেনার মৌলিক বিষয়: বিকিরণ প্যাটার্ন, নির্দেশকতা, গেইন ও ফ্রিস লিঙ্ক বাজেট"
            }
          }
        ]
      },
      {
        id: 'ch-ac-circuits',
        subjectId: 'basic-electrical',
        order: 12,
        title: {
          en: 'Chapter 12: Advanced AC Network Analysis & Coupled Circuits',
          hi: 'अध्याय 12: उन्नत एसी नेटवर्क विश्लेषण एवं युग्मित परिपथ',
          bn: 'অধ্যায় ১২: উন্নত এসি নেটওয়ার্ক বিশ্লেষণ ও কাপল্ড সার্কিট'
        },
        topics: [
          {
            id: 'tp-pure-resistive',
            chapterId: 'ch-ac-circuits',
            order: 1,
            title: {
              en: 'AC Thevenin & Norton Theorems',
              hi: 'एसी थेवेनिन एवं नॉर्टन प्रमेय',
              bn: 'এসি থেভেনিন ও নর্টন উপপাদ্য'
            }
          },
          {
            id: 'tp-pure-inductive',
            chapterId: 'ch-ac-circuits',
            order: 2,
            title: {
              en: 'AC Superposition & Maximum Power Transfer',
              hi: 'एसी अध्यारोपण एवं अधिकतम शक्ति स्थानांतरण',
              bn: 'এসি সুপারপজিশন ও সর্বোচ্চ শক্তি স্থানান্তর'
            }
          },
          {
            id: 'tp-pure-capacitive',
            chapterId: 'ch-ac-circuits',
            order: 3,
            title: {
              en: 'Coupled Inductors, Mutual Inductance & Dot Convention',
              hi: 'युग्मित प्रेरक, अन्योन्य प्रेरकत्व एवं डॉट परिपाटी',
              bn: 'কাপল্ড ইন্ডাক্টর, পারস্পরিক ইন্ডাকট্যান্স ও ডট কনভেনশন'
            }
          },
          {
            id: 'tp-rl-circuit',
            chapterId: 'ch-ac-circuits',
            order: 4,
            title: {
              en: 'Linear Transformers, Reflected Impedance & Equivalent T/Π Models',
              hi: 'रैखिक ट्रांसफार्मर, परावर्तित प्रतिबाधा एवं समतुल्य T/Π मॉडल',
              bn: 'লিনিয়ার ট্রান্সফরমার, প্রতিফলিত প্রতিবাধা ও তুল্য টি/পাই মডেল'
            }
          },
          {
            id: 'tp-rc-circuit',
            chapterId: 'ch-ac-circuits',
            order: 5,
            title: {
              en: 'Passive AC Filter Design',
              hi: 'निष्क्रिय एसी फिल्टर डिजाइन',
              bn: 'প্যাসিভ এসি ফিল্টার ডিজাইন'
            }
          },
          {
            id: 'tp-rlc-circuit',
            chapterId: 'ch-ac-circuits',
            order: 6,
            title: {
              en: 'Bode Plots & Frequency Response of AC Circuits',
              hi: 'बोडे प्लॉट एवं एसी परिपथों की आवृत्ति अनुक्रिया',
              bn: 'বোড প্লট ও এসি বর্তনীর কম্পাঙ্ক প্রতিক্রিয়া'
            }
          },
          {
            id: 'tp-admittance-intro',
            chapterId: 'ch-ac-circuits',
            order: 7,
            title: {
              en: 'Two-Port Network Parameters in the AC Domain (Z, Y, ABCD, h)',
              hi: 'एसी डोमेन में टू-पोर्ट नेटवर्क प्राचल (Z, Y, ABCD, h)',
              bn: 'এসি ডোমেনে টু-পোর্ট নেটওয়ার্ক প্যারামিটার (Z, Y, ABCD, h)'
            }
          },
          {
            id: 'tp-reactance',
            chapterId: 'ch-ac-circuits',
            order: 8,
            title: {
              en: 'Non-Sinusoidal AC Waveforms & Harmonics',
              hi: 'अ-ज्यावक्रीय (Non-Sinusoidal) एसी तरंगरूप एवं हार्मोनिक्स',
              bn: 'নন-সাইনুসয়েডাল এসি তরঙ্গরূপ ও হারমোনিক্স'
            }
          },
          {
            id: 'tp-phasor-concept',
            chapterId: 'ch-ac-circuits',
            order: 9,
            title: {
              en: 'Total Harmonic Distortion & Network Impact',
              hi: 'कुल हार्मोनिक विरूपण (THD) एवं नेटवर्क पर प्रभाव',
              bn: 'টোটাল হারমোনিক ডিস্টরশন (THD) ও নেটওয়ার্ক প্রভাব'
            }
          },
          {
            id: 'tp-power-ac-circuit',
            chapterId: 'ch-ac-circuits',
            order: 10,
            title: {
              en: 'AC Locus Diagrams',
              hi: 'एसी लोकस (बिंदुपथ) आरेख',
              bn: 'এসি লোকাস ডায়াগ্রাম'
            }
          }
        ]
      },
      {
        id: 'ch-power-factor',
        subjectId: 'basic-electrical',
        order: 13,
        title: {
          en: 'Chapter 13: Power Factor Engineering & Reactive Power Compensation',
          hi: 'अध्याय 13: पावर फैक्टर इंजीनियरिंग एवं रिएक्टिव पावर कंपेंसेशन',
          bn: 'অধ্যায় ১৩: পাওয়ার ফ্যাক্টর ইঞ্জিনিয়ারিং ও রিঅ্যাক্টিভ পাওয়ার ক্ষতিপূরণ'
        },
        topics: [
          {
            id: 'tp-power-factor-intro',
            chapterId: 'ch-power-factor',
            order: 1,
            title: {
              en: 'Fundamentals of Power Factor & The Power Triangle',
              hi: 'पावर फैक्टर के मूल सिद्धांत एवं शक्ति त्रिभुज',
              bn: 'পাওয়ার ফ্যাক্টরের মৌলিক নীতি ও পাওয়ার ট্রায়াঙ্গেল'
            }
          },
          {
            id: 'tp-power-factor-correction',
            chapterId: 'ch-power-factor',
            order: 2,
            title: {
              en: 'Practical Power Factor Correction Methods',
              hi: 'व्यावहारिक पावर फैक्टर सुधार विधियाँ',
              bn: 'ব্যবহারিক পাওয়ার ফ্যাক্টর সংশোধন পদ্ধতি'
            }
          },
          {
            id: 'tp-capacitor-bank-sizing',
            chapterId: 'ch-power-factor',
            order: 3,
            title: {
              en: 'Capacitor Bank Sizing & Engineering Design',
              hi: 'कैपेसिटर बैंक साइज़िंग एवं इंजीनियरिंग डिज़ाइन',
              bn: 'ক্যাপাসিটর ব্যাংক সাইজিং ও ইঞ্জিনিয়ারিং নকশা'
            }
          },
          {
            id: 'tp-automatic-pfc',
            chapterId: 'ch-power-factor',
            order: 4,
            title: {
              en: 'APFC Panels & Automation',
              hi: 'APFC पैनल एवं ऑटोमेशन',
              bn: 'APFC প্যানেল ও স্বয়ংক্রিয় নিয়ন্ত্রণ'
            }
          },
          {
            id: 'tp-reactive-power-flow',
            chapterId: 'ch-power-factor',
            order: 5,
            title: {
              en: 'Reactive Power Flow & Voltage Stability',
              hi: 'रिएक्टिव पावर प्रवाह एवं वोल्टेज स्थिरता',
              bn: 'রিঅ্যাক্টিভ পাওয়ার প্রবাহ ও ভোল্টেজ স্থায়িত্ব'
            }
          },
          {
            id: 'tp-harmonic-pfc-interaction',
            chapterId: 'ch-power-factor',
            order: 6,
            title: {
              en: 'Harmonics, Resonance & Detuned Filter Design',
              hi: 'हार्मोनिक्स, अनुनाद एवं डिट्यून्ड फिल्टर डिज़ाइन',
              bn: 'হারমোনিকস, রেজোন্যান্স ও ডিটিউনড ফিল্টার ডিজাইন'
            }
          },
          {
            id: 'tp-power-quality-compensation',
            chapterId: 'ch-power-factor',
            order: 7,
            title: {
              en: 'Industrial Power Factor Economics & Case Studies',
              hi: 'औद्योगिक पावर फैक्टर अर्थशास्त्र एवं केस स्टडीज',
              bn: 'শিল্প পাওয়ার ফ্যাক্টর অর্থনীতি ও কেস স্টাডি'
            }
          },
          {
            id: 'tp-demand-tariff-pf-economics',
            chapterId: 'ch-power-factor',
            order: 8,
            title: {
              en: 'Maximum Demand, Utility Tariffs & PFC Economics',
              hi: 'अधिकतम मांग, बिजली टैरिफ एवं PFC अर्थशास्त्र',
              bn: 'সর্বোচ্চ চাহিদা, ইউটিলিটি ট্যারিফ ও PFC অর্থনীতি'
            }
          },
          {
            id: 'tp-pfc-commissioning-troubleshooting',
            chapterId: 'ch-power-factor',
            order: 9,
            title: {
              en: 'Commissioning, Field Testing & APFC Troubleshooting',
              hi: 'कमिशनिंग, फील्ड टेस्टिंग एवं APFC ट्रबलशूटिंग',
              bn: 'কমিশনিং, ফিল্ড টেস্টিং ও APFC ট্রাবলশুটিং'
            }
          },
          {
            id: 'tp-pfc-engineering-capstone',
            chapterId: 'ch-power-factor',
            order: 10,
            title: {
              en: 'Complete Industrial PFC Design Capstone',
              hi: 'पूर्ण औद्योगिक PFC डिजाइन कैपस्टोन',
              bn: 'সম্পূর্ণ শিল্প PFC নকশা ক্যাপস্টোন'
            }
          }
        ]
      },
      {
        id: 'ch-three-phase',
        subjectId: 'basic-electrical',
        order: 14,
        title: {
          en: 'Chapter 14: Three-Phase Systems, Unbalanced Networks & Industrial Power Measurement',
          hi: 'अध्याय 14: थ्री-फेज प्रणालियां, असंतुलित नेटवर्क एवं औद्योगिक शक्ति मापन',
          bn: 'অধ্যায় ১৪: থ্রি-ফেজ সিস্টেম, ভারসাম্যহীন নেটওয়ার্ক ও শিল্প বিদ্যুৎ পরিমাপ'
        },
        topics: [
          {
            id: 'tp-three-phase-advanced-analysis',
            chapterId: 'ch-three-phase',
            order: 1,
            title: {
              en: 'Advanced Three-Phase System Analysis',
              hi: 'उन्नत थ्री-फेज प्रणाली विश्लेषण',
              bn: 'উন্নত থ্রি-ফেজ সিস্টেম বিশ্লেষণ'
            }
          },
          {
            id: 'tp-three-phase-sequence-components',
            chapterId: 'ch-three-phase',
            order: 2,
            title: {
              en: 'Symmetrical Components & Sequence Networks',
              hi: 'सममित घटक एवं अनुक्रम नेटवर्क',
              bn: 'সিমেট্রিক্যাল কম্পোনেন্টস ও সিকোয়েন্স নেটওয়ার্ক'
            }
          },
          {
            id: 'tp-unbalanced-three-phase-loads',
            chapterId: 'ch-three-phase',
            order: 3,
            title: {
              en: 'Unbalanced Three-Phase Loads & Neutral Displacement',
              hi: 'असंतुलित थ्री-फेज लोड एवं न्यूट्रल विस्थापन',
              bn: 'ভারসাম্যহীন থ্রি-ফেজ লোড ও নিউট্রাল সরণ'
            }
          },
          {
            id: 'tp-neutral-displacement',
            chapterId: 'ch-three-phase',
            order: 4,
            title: {
              en: 'Neutral Displacement, Voltage Unbalance & Phase Failure',
              hi: 'न्यूट्रल विस्थापन, वोल्टेज असंतुलन एवं फेज विफलता',
              bn: 'নিউট্রাল সরণ, ভোল্টেজ ভারসাম্যহীনতা ও ফেজ ব্যর্থতা'
            }
          },
          {
            id: 'tp-three-phase-power-measurement',
            chapterId: 'ch-three-phase',
            order: 5,
            title: {
              en: 'Three-Phase Power Measurement — Wattmeter Methods',
              hi: 'थ्री-फेज शक्ति मापन — वाटमीटर विधियां',
              bn: 'থ্রি-ফেজ পাওয়ার পরিমাপ — ওয়াটমিটার পদ্ধতি'
            }
          },
          {
            id: 'tp-three-wattmeter-measurement',
            chapterId: 'ch-three-phase',
            order: 6,
            title: {
              en: 'Three-Wattmeter Method, Four-Wire Systems & Reactive Power',
              hi: 'त्रि-वाटमीटर विधि, चार-तार प्रणालियां एवं प्रतिघाती शक्ति',
              bn: 'ত্রি-ওয়াটমিটার পদ্ধতি, চার-তার সিস্টেম ও রিঅ্যাক্টিভ পাওয়ার'
            }
          },
          {
            id: 'tp-ct-pt-industrial-metering',
            chapterId: 'ch-three-phase',
            order: 7,
            title: {
              en: 'CT, PT/VT & Industrial Electrical Metering',
              hi: 'CT, PT/VT एवं औद्योगिक विद्युत मीटरिंग',
              bn: 'CT, PT/VT ও শিল্প বিদ্যুৎ মিটারিং'
            }
          },
          {
            id: 'tp-power-quality-three-phase',
            chapterId: 'ch-three-phase',
            order: 8,
            title: {
              en: 'Three-Phase Power Quality Measurement & Diagnostics',
              hi: 'थ्री-फेज पावर क्वालिटी मापन एवं डायग्नोस्टिक्स',
              bn: 'থ্রি-ফেজ পাওয়ার কোয়ালিটি পরিমাপ ও ডায়াগনস্টিকস'
            }
          },
          {
            id: 'tp-industrial-three-phase-metering',
            chapterId: 'ch-three-phase',
            order: 9,
            title: {
              en: 'Industrial Three-Phase Measurement, Metering & Troubleshooting',
              hi: 'औद्योगिक थ्री-फेज मापन, मीटरिंग एवं ट्रबलशूटिंग',
              bn: 'শিল্প থ্রি-ফেজ পরিমাপ, মিটারিং ও ট্রাবলশুটিং'
            }
          },
          {
            id: 'tp-three-phase-engineering-capstone',
            chapterId: 'ch-three-phase',
            order: 10,
            title: {
              en: 'Complete Three-Phase Industrial System Analysis — Final Engineering Capstone',
              hi: 'पूर्ण थ्री-फेज औद्योगिक प्रणाली विश्लेषण — अंतिम इंजीनियरिंग कैपस्टोन',
              bn: 'সম্পূর্ণ থ্রি-ফেজ শিল্প সিস্টেম বিশ্লেষণ — চূড়ান্ত ইঞ্জিনিয়ারিং ক্যাপস্টোন'
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
      if (chapter.id === 'ch-electrical-machines' || chapter.id === 'ch-dc-machines-transformers' || chapter.id === 'ch-dc-machines') {
        return {
          ...chapter,
          topics: chapter.topics.map((topic) => ({
            ...topic,
            lesson: CHAPTER_6_LESSONS[topic.id] || topic.lesson
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
      if (chapter.id === 'ch-em-induction') {
        return {
          ...chapter,
          topics: chapter.topics.map((topic) => ({
            ...topic,
            lesson: CHAPTER_10_LESSONS[topic.id] || topic.lesson
          }))
        };
      }
      if (chapter.id === 'ch-em-waves' || chapter.id === 'ch-ac-fundamentals') {
        return {
          ...chapter,
          topics: chapter.topics.map((topic) => ({
            ...topic,
            lesson: CHAPTER_11_LESSONS[topic.id] || topic.lesson
          }))
        };
      }
      if (chapter.id === 'ch-ac-circuits') {
        return {
          ...chapter,
          topics: chapter.topics.map((topic) => ({
            ...topic,
            lesson: CHAPTER_12_LESSONS[topic.id] || topic.lesson
          }))
        };
      }
      if (chapter.id === 'ch-power-factor') {
        return {
          ...chapter,
          topics: chapter.topics.map((topic) => ({
            ...topic,
            lesson: CHAPTER_13_LESSONS[topic.id] || topic.lesson
          }))
        };
      }
      if (chapter.id === 'ch-three-phase') {
        return {
          ...chapter,
          topics: chapter.topics.map((topic) => ({
            ...topic,
            lesson: CHAPTER_14_LESSONS[topic.id] || topic.lesson
          }))
        };
      }
      if (chapter.id === 'ch-electrical-safety') {
        return {
          ...chapter,
          topics: chapter.topics.map((topic) => ({
            ...topic,
            lesson: CHAPTER_15_LESSONS[topic.id] || topic.lesson
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
      (topicId.includes('ch9') && c.order === 9) ||
      (topicId.includes('ch10') && c.order === 10) ||
      (topicId.includes('ch11') && c.order === 11) ||
      (topicId.includes('ch12') && c.order === 12) ||
      (topicId.includes('ch13') && c.order === 13) ||
      (topicId.includes('ch14') && c.order === 14) ||
      (topicId.includes('ch15') && c.order === 15)
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

