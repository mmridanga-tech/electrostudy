import React, { useState } from 'react';
import { Settings, RotateCcw, Info, Zap, Shield, Compass, Cpu, Layers } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface DCMachineConstructionAnimationProps {
  currentLanguage: Language;
}

type OperationMode = 'MOTOR' | 'GENERATOR';
type ComponentKey = 'yoke' | 'poles' | 'fieldWinding' | 'armatureCore' | 'armatureWinding' | 'commutator' | 'brushes' | 'shaft';

interface ComponentDetail {
  name: { en: string; hi: string; bn: string };
  material: { en: string; hi: string; bn: string };
  function: { en: string; hi: string; bn: string };
  importance: { en: string; hi: string; bn: string };
}

const COMPONENTS_DATA: Record<ComponentKey, ComponentDetail> = {
  yoke: {
    name: {
      en: 'Yoke (Outer Frame)',
      hi: 'योक (बाहरी फ्रेम)',
      bn: 'ইয়োক (বাইরের ফ্রেম)'
    },
    material: {
      en: 'Cast iron (small machines) or Cast/Rolled steel (large industrial machines)',
      hi: 'ढलवाँ लोहा (छोटी मशीनें) या कास्ट स्टील / रोल्ड स्टील (बड़ी मशीनें)',
      bn: 'ঢালাই লোহা (ছোট মেশিন) অথবা কাস্ট/রোল্ড স্টিল (বৃহৎ শিল্প মেশিন)'
    },
    function: {
      en: 'Provides mechanical protection to inner parts and completes the magnetic flux return path between field poles.',
      hi: 'आंतरिक भागों को यांत्रिक सुरक्षा प्रदान करता है और फील्ड पोलों के बीच चुंबकीय फ्लक्स के वापसी पथ को पूरा करता है।',
      bn: 'অভ্যন্তরীণ যন্ত্রাংশসমূহকে যান্ত্রিক সুরক্ষা প্রদান করে এবং পোলসমূহের মাঝে চৌম্বক ফ্লাক্সের রিটার্ন পথ তৈরি করে।'
    },
    importance: {
      en: 'High magnetic permeability reduces core reluctance, minimizing required excitation ampere-turns.',
      hi: 'उच्च चुंबकीय पारगम्यता कोर के रिलक्टेंस को कम करती है, जिससे आवश्यक MMF घटता है।',
      bn: 'উচ্চ চৌম্বক প্রবেশ্যতা রিলাক্ট্যান্স হ্রাস করে প্রয়োজনীয় এক্সাইটেশন MMF কমায়।'
    }
  },
  poles: {
    name: {
      en: 'Field Poles & Pole Shoes',
      hi: 'फील्ड पोल एवं पोल शू',
      bn: 'ফিল্ড পোল ও পোল শু'
    },
    material: {
      en: 'Laminated annealed silicon steel plates bolted to the yoke',
      hi: 'योक से बोल्ट किए गए लैमिनेटेड सिलिकॉन स्टील प्लेट्स',
      bn: 'ইয়োকের সাথে বোল্টযুক্ত পাতলা সিলিকন স্টিল লেমিনেশন'
    },
    function: {
      en: 'Produces the main working magnetic flux. Pole shoes spread flux uniformly across the air gap and support field coils.',
      hi: 'मुख्य कार्यशील चुंबकीय फ्लक्स उत्पन्न करता है। पोल शू एयर-गैप में फ्लक्स को समान रूप से फैलाते हैं और कॉइल को सहारा देते हैं।',
      bn: 'মূল চৌম্বক ফ্লাক্স তৈরি করে। পোল শু এয়ার-গ্যাপে ফ্লাক্স সুষমভাবে ছড়ায় এবং ফিল্ড কয়েলকে ধরে রাখে।'
    },
    importance: {
      en: 'Laminations suppress eddy current losses caused by armature tooth pulsations.',
      hi: 'लैमिनेशन आर्मेचर दांतों के स्पंदन से होने वाली भंवर धारा (एडी करंट) हानियों को रोकते हैं।',
      bn: 'লেমিনেশন আর্মেচার দাঁতের কম্পনজনিত এডি কারেন্ট লস হ্রাস করে।'
    }
  },
  fieldWinding: {
    name: {
      en: 'Field Coils (Exciting Windings)',
      hi: 'फील्ड कॉइल्स (उत्तेजक वाइंडिंग)',
      bn: 'ফিল্ড কয়েল (উত্তেজক ওয়াইন্ডিং)'
    },
    material: {
      en: 'Enamelled high-conductivity electrolytic copper wire (SE copper)',
      hi: 'उच्च चालकता वाला एनामेल्ड इलेक्ट्रोलाइटिक कॉपर तार',
      bn: 'উচ্চ পরিবাহী এনামেলযুক্ত ইলেক্ট্রোলাইটিক কপার তার'
    },
    function: {
      en: 'Carries DC excitation current to set up alternating North (N) and South (S) magnetic poles across the periphery.',
      hi: 'डीसी उत्तेजना धारा प्रवाहित कर परिधि पर क्रमिक उत्तर (N) एवं दक्षिण (S) चुंबकीय ध्रुव स्थापित करती है।',
      bn: 'ডিসি এক্সাইটেশন কারেন্ট প্রবাহের মাধ্যমে পর্যায়ক্রমিক N ও S চৌম্বক মেরু সৃষ্টি করে।'
    },
    importance: {
      en: 'Shunt windings have many turns of thin wire (high R); Series windings have few turns of thick wire (low R).',
      hi: 'शंट वाइंडिंग में पतले तार के अधिक टर्न (उच्च R) होते हैं; सीरीज में मोटे तार के कम टर्न (कम R) होते हैं।',
      bn: 'সান্ট ওয়াইন্ডিংয়ে সরু তারের বহু প্যাঁচ (উচ্চ R); সিরিজ ওয়াইন্ডিংয়ে মোটা তারের কম প্যাঁচ (স্বল্প R) থাকে।'
    }
  },
  armatureCore: {
    name: {
      en: 'Armature Core (Slotted Rotor)',
      hi: 'आर्मेचर कोर (स्लॉटेड रोटर)',
      bn: 'আর্মেচার কোর (খাঁজকাটা রোটর)'
    },
    material: {
      en: 'Laminated silicon steel stampings (0.35 to 0.5 mm thick, insulated by varnish)',
      hi: 'लैमिनेटेड सिलिकॉन स्टील स्टैम्पिंग्स (0.35 से 0.5 मिमी मोटी, वार्निश इंसुलेटेड)',
      bn: 'পাতলা সিলিকন স্টিল স্ট্যাম্পিং (০.৩৫ থেকে ০.৫ মিমি পুরু, বার্নিশ ইনসুলেটেড)'
    },
    function: {
      en: 'Houses armature conductors inside peripheral slots and provides an extremely low-reluctance path for magnetic flux.',
      hi: 'परिधीय स्लॉट्स में आर्मेचर चालकों को रखता है और चुंबकीय फ्लक्स को न्यूनतम रिलक्टेंस पथ प्रदान करता है।',
      bn: 'পরিধির খাঁজে আর্মেচার কন্ডাক্টর ধরে রাখে এবং চৌম্বক ফ্লাক্সকে অতি স্বল্প রিলাক্ট্যান্স পথ দেয়।'
    },
    importance: {
      en: 'Silicon content (3-4%) reduces hysteresis loss; thin laminations drastically minimize eddy current losses.',
      hi: 'सिलिकॉन (3-4%) हिस्टैरिसीस हानि कम करता है; पतली लैमिनेशन एडी करंट हानि को न्यूनतम करती है।',
      bn: 'সিলিকন (৩-৪%) হিস্টেরেসিস লস কমায় এবং পাতলা লেমিনেশন এডি কারেন্ট লস অতিমাত্রায় হ্রাস করে।'
    }
  },
  armatureWinding: {
    name: {
      en: 'Armature Windings',
      hi: 'आर्मेचर वाइंडिंग',
      bn: 'আর্মেচার ওয়াইন্ডিং'
    },
    material: {
      en: 'Insulated copper conductors connected in Lap or Wave topologies',
      hi: 'लैप या वेव टोपोलॉजी में जुड़े इंसुलेटेड कॉपर चालक',
      bn: 'ল্যাপ বা ওয়েভ পদ্ধতিতে সংযুক্ত ইনসুলেটেড কপার কন্ডাক্টর'
    },
    function: {
      en: 'Seat of actual energy conversion: induces EMF (Generator) or experiences Lorentz electromagnetic torque (Motor).',
      hi: 'वास्तविक ऊर्जा रूपांतरण का केंद्र: EMF उत्पन्न करता है (जनरेटर) या लोरेंट्ज़ टॉर्क अनुभव करता है (मोटर)।',
      bn: 'প্রকৃত শক্তি রূপান্তরের মূল স্থান: EMF আবিষ্ট করে (জেনারেটর) অথবা লরেন্টজ টর্ক সৃষ্টি করে (মোটর)।'
    },
    importance: {
      en: 'Lap winding is used for high-current, low-voltage (A = P); Wave winding is used for high-voltage, low-current (A = 2).',
      hi: 'लैप वाइंडिंग उच्च धारा, निम्न वोल्टेज (A = P) के लिए; वेव वाइंडिंग उच्च वोल्टेज, निम्न धारा (A = 2) के लिए होती है।',
      bn: 'উচ্চ কারেন্ট ও নিম্ন ভোল্টেজের জন্য ল্যাপ (A = P); উচ্চ ভোল্টেজ ও কম কারেন্টের জন্য ওয়েভ ওয়াইন্ডিং (A = 2)।'
    }
  },
  commutator: {
    name: {
      en: 'Commutator (Mechanical Rectifier / Inverter)',
      hi: 'कम्यूटेटर (मैकेनिकल रेक्टिफायर / इन्वर्टर)',
      bn: 'কমিউটেটর (মেকানিক্যাল রেকটিফায়ার / ইনভার্টার)'
    },
    material: {
      en: 'Wedge-shaped hard-drawn electrolytic copper segments insulated by thin V-mica sheets (0.5 to 0.8 mm)',
      hi: 'कठोर इलेक्ट्रोलाइटिक कॉपर सेगमेंट्स, जो पतली अभ्रक (माइका) शीट्स से इंसुलेटेड होते हैं',
      bn: 'কঠিন টানা ইলেক্ট্রোলাইটিক কপার সেগমেন্ট, যা পাতলা মাইকা শিট দ্বারা ইনসুলেটেড'
    },
    function: {
      en: 'Converts generated AC in armature into unidirectional DC (Generator) or converts DC supply into alternating current in armature coils (Motor).',
      hi: 'जनरेटर में आर्मेचर के AC को DC में बदलता है; मोटर में बाहरी DC को आर्मेचर कॉइल में प्रत्यावर्ती धारा में बदलता है।',
      bn: 'জেনারেটরে উৎপন্ন AC-কে DC-তে রূপান্তর করে এবং মোটরে বাহ্যিক DC-কে আর্মেচার কয়েলে AC-তে রূপান্তরিত করে।'
    },
    importance: {
      en: 'Rotates synchronously with the shaft, providing mechanical commutation without semiconductor electronics.',
      hi: 'शाफ्ट के साथ घूमता है और बिना इलेक्ट्रॉनिक सर्किट के मैकेनिकल कम्यूटेशन प्रदान करता है।',
      bn: 'শ্যাফটের সাথে ঘূর্ণায়মান থেকে কোনো ইলেকট্রনিক সার্কিট ছাড়াই মেকানিক্যাল কম্যুটেশন নিশ্চিত করে।'
    }
  },
  brushes: {
    name: {
      en: 'Carbon Brushes & Brush Gear',
      hi: 'कार्बन ब्रश एवं ब्रश गियर',
      bn: 'কার্বন ব্রাশ ও ব্রাশ গিয়ার'
    },
    material: {
      en: 'High-grade carbon-graphite or electro-graphite blocks housed in spring-tensioned brush holders',
      hi: 'हाई-ग्रेड कार्बन-ग्रेफाइट या इलेक्ट्रो-ग्रेफाइट ब्लॉक्स, स्प्रिंग युक्त ब्रश होल्डर में',
      bn: 'উচ্চমানের কার্বন-গ্রাফাইট ব্লক, যা স্প্রিং-যুক্ত ব্রাশ হোল্ডারে স্থাপিত'
    },
    function: {
      en: 'Collects current from rotating commutator segments and conveys it to external stationary terminals (and vice versa).',
      hi: 'घूमते हुए कम्यूटेटर से धारा एकत्र कर बाहरी स्थिर टर्मिनलों तक पहुँचाता है।',
      bn: 'ঘূর্ণায়মান কমিউটেটর সেগমেন্ট থেকে কারেন্ট সংগ্রহ করে স্থির টার্মিনালে সরবরাহ করে।'
    },
    importance: {
      en: 'Carbon offers self-lubrication, negative temperature coefficient of resistance, and high contact resistance that aids sparkless commutation.',
      hi: 'कार्बन सेल्फ-लुब्रिकेशन और उच्च संपर्क प्रतिरोध प्रदान करता है, जिससे स्पार्करहित कम्यूटेशन होता है।',
      bn: 'কার্বনের স্ব-পিচ্ছিলকরণ বৈশিষ্ট্য ও উচ্চ কন্টাক্ট রেজিস্ট্যান্স স্পার্কহীন কম্যুটেশনে সহায়তা করে।'
    }
  },
  shaft: {
    name: {
      en: 'Shaft & Bearings',
      hi: 'शाफ्ट एवं बेयरिंग्स',
      bn: 'শ্যাফট ও বিয়ারিং'
    },
    material: {
      en: 'High-tensile mild steel shaft with ball or roller bearings housed in end-brackets',
      hi: 'हाई-टेंसाइल माइल्ड स्टील शाफ्ट एवं बॉल/रोलर बेयरिंग',
      bn: 'উচ্চ শক্তিসম্পন্ন মাইল্ড স্টিল শ্যাফট এবং বল/রোলার বিয়ারিং'
    },
    function: {
      en: 'Transmits mechanical rotational power to/from the driven load or prime mover with minimal frictional resistance.',
      hi: 'यांत्रिक घूर्णन शक्ति को न्यूनतम घर्षण के साथ लोड या प्राइम मूवर तक स्थानांतरित करता है।',
      bn: 'ন্যূনতম ঘর্ষণে যান্ত্রিক ঘূর্ণন শক্তিকে লোড বা প্রাইম মুভারে স্থানান্তরিত করে।'
    },
    importance: {
      en: 'Precision balanced to eliminate centrifugal vibrations at rated operational speeds.',
      hi: 'रेटेड परिचालन गति पर कंपन को समाप्त करने के लिए सटीक रूप से संतुलित।',
      bn: 'ঘূর্ণন গতিতে কম্পন মুক্ত রাখতে অত্যন্ত সূক্ষ্মভাবে ব্যালান্সড।'
    }
  }
};

const TRANSLATIONS = {
  en: {
    title: 'DC Machine Anatomy & Operational Principle Simulator',
    subtitle: 'Interactive cutaway section of an industrial DC Machine. Select any structural component to inspect its construction, material properties, and electromechanical function.',
    modeTitle: 'Operating Mode',
    motorMode: 'Motor Operation (Electrical In → Torque Out)',
    genMode: 'Generator Operation (Prime Mover In → EMF Out)',
    componentInspector: 'Component Details & Material Specs',
    materialLabel: 'Engineered Material',
    functionLabel: 'Primary Operational Function',
    importanceLabel: 'Engineering & Practical Importance',
    clickInstruction: 'Click or focus any part on the cutaway diagram to inspect its engineering design:',
    yokeBtn: 'Yoke / Frame',
    polesBtn: 'Poles & Shoes',
    fieldBtn: 'Field Windings',
    coreBtn: 'Armature Core',
    armWindingBtn: 'Armature Winding',
    commBtn: 'Commutator',
    brushBtn: 'Carbon Brushes',
    shaftBtn: 'Shaft & Bearings',
    rotationDir: 'Direction of Armature Rotation: Clockwise (ω)',
    torqueVector: 'Developed Lorentz Torque: T_e = k · Φ · I_a',
    emfVector: 'Generated Armature EMF: E_g = (P·Φ·Z·N)/(60·A)',
    reversibilityNote: 'Principle of Electromechanical Reversibility: The identical physical DC machine operates seamlessly as either a motor or a generator depending on the direction of energy input!',
    reset: 'Reset View'
  },
  hi: {
    title: 'डीसी मशीन संरचना एवं कार्य सिद्धांत सिम्युलेटर',
    subtitle: 'औद्योगिक डीसी मशीन का इंटरैक्टिव कटअवे मॉडल। संरचनात्मक घटकों की सामग्री, कार्यप्रणाली एवं महत्व देखने के लिए किसी भी भाग का चयन करें।',
    modeTitle: 'संचालन मोड',
    motorMode: 'मोटर संचालन (विद्युत इनपुट → यांत्रिक टॉर्क)',
    genMode: 'जनरेटर संचालन (प्राइम मूवर इनपुट → विद्युत EMF)',
    componentInspector: 'घटक विवरण एवं सामग्री विनिर्देश',
    materialLabel: 'इंजीनियरिंग सामग्री',
    functionLabel: 'प्राथमिक कार्य',
    importanceLabel: 'इंजीनियरिंग एवं व्यावहारिक महत्व',
    clickInstruction: 'इंजीनियरिंग डिजाइन देखने के लिए आरेख पर किसी भी घटक पर क्लिक करें:',
    yokeBtn: 'योक / फ्रेम',
    polesBtn: 'पोल एवं पोल शू',
    fieldBtn: 'फील्ड वाइंडिंग',
    coreBtn: 'आर्मेचर कोर',
    armWindingBtn: 'आर्मेचर वाइंडिंग',
    commBtn: 'कम्यूटेटर',
    brushBtn: 'कार्बन ब्रश',
    shaftBtn: 'शाफ्ट एवं बेयरिंग',
    rotationDir: 'आर्मेचर घूर्णन दिशा: दक्षिणावर्त (Clockwise ω)',
    torqueVector: 'उत्पन्न लोरेंट्ज़ टॉर्क: T_e = k · Φ · I_a',
    emfVector: 'उत्पन्न आर्मेचर EMF: E_g = (P·Φ·Z·N)/(60·A)',
    reversibilityNote: 'विद्युत-यांत्रिक उत्क्रमणीयता का सिद्धांत: वही समान डीसी मशीन ऊर्जा इनपुट की दिशा के आधार पर मोटर या जनरेटर दोनों के रूप में कार्य कर सकती है!',
    reset: 'डिफ़ॉल्ट रीसेट'
  },
  bn: {
    title: 'ডিসি মেশিন গঠন ও কার্যপ্রণালী সিমুলেটর',
    subtitle: 'ইন্ডাস্ট্রিয়াল ডিসি মেশিনের ইন্টারঅ্যাক্টিভ ক্রস-সেকশন ডায়াগ্রাম। প্রতিটি কাঠামোগত অংশের উপাদান ও কার্যকারিতা বিশদে জানতে ক্লিক করুন।',
    modeTitle: 'অপারেশন মোড',
    motorMode: 'মোটর অপারেশন (বিদ্যুৎ ইনপুট → যান্ত্রিক টর্ক)',
    genMode: 'জেনারেটর অপারেশন (প্রাইম মুভার ইনপুট → বিদ্যুৎ EMF)',
    componentInspector: 'যন্ত্রাংশের বিবরণ ও উপাদান',
    materialLabel: 'ব্যবহৃত উপাদান',
    functionLabel: 'প্রধান কার্যপ্রণালী',
    importanceLabel: 'ইঞ্জিনিয়ারিং ও ব্যবহারিক গুরুত্ব',
    clickInstruction: 'বিশদ জানতে ডায়াগ্রামের যেকোনো যন্ত্রাংশ নির্বাচন করুন:',
    yokeBtn: 'ইয়োক / ফ্রেম',
    polesBtn: 'পোল ও পোল শু',
    fieldBtn: 'ফিল্ড ওয়াইন্ডিং',
    coreBtn: 'আর্মেচার কোর',
    armWindingBtn: 'আর্মেচার ওয়াইন্ডিং',
    commBtn: 'কমিউটেটর',
    brushBtn: 'কার্বন ব্রাশ',
    shaftBtn: 'শ্যাফট ও বিয়ারিং',
    rotationDir: 'আর্মেচারের ঘূর্ণন দিক: ক্লকওয়াইজ (ω)',
    torqueVector: 'উৎপন্ন লরেন্টজ টর্ক: T_e = k · Φ · I_a',
    emfVector: 'উৎপন্ন আর্মেচার EMF: E_g = (P·Φ·Z·N)/(60·A)',
    reversibilityNote: 'ইলেক্ট্রোমেকানিক্যাল উভমুখিতা নীতি: একই ভৌত ডিসি মেশিন শক্তির প্রবাহের দিকের ওপর নির্ভর করে মোটর অথবা জেনারেটর হিসেবে নির্বিঘ্নে কাজ করে!',
    reset: 'ভিউ রিসেট'
  }
};

export const DCMachineConstructionAnimation: React.FC<DCMachineConstructionAnimationProps> = ({
  currentLanguage
}) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const isReducedMotion = useReducedMotion();

  const [mode, setMode] = useState<OperationMode>('MOTOR');
  const [selectedComp, setSelectedComp] = useState<ComponentKey>('armatureCore');

  const compData = COMPONENTS_DATA[selectedComp];

  const handleReset = () => {
    setMode('MOTOR');
    setSelectedComp('armatureCore');
  };

  return (
    <InteractiveSimulationCard
      currentLanguage={currentLanguage}
      title={t.title}
      subtitle={t.subtitle}
      onReset={handleReset}
      resetLabel={t.reset}
      calloutTitle={
        mode === 'MOTOR' ? 'Motor Action (Lorentz Force)' : 'Generator Action (Faraday Induction)'
      }
      calloutText={
        mode === 'MOTOR'
          ? 'Armature current in magnetic field creates Lorentz force F = B·I·L, producing continuous rotational torque.'
          : 'Prime mover rotates armature coils across magnetic flux, inducing EMF e = B·L·v collected by commutator and brushes.'
      }
      formulaText={mode === 'MOTOR' ? t.torqueVector : t.emfVector}
      extraHeaderActions={
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800" role="radiogroup" aria-label={t.modeTitle}>
          <button
            type="button"
            role="radio"
            aria-checked={mode === 'MOTOR'}
            onClick={() => setMode('MOTOR')}
            className={`px-2.5 py-1 text-xs font-bold rounded transition-all ${
              mode === 'MOTOR'
                ? 'bg-cyan-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Motor
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={mode === 'GENERATOR'}
            onClick={() => setMode('GENERATOR')}
            className={`px-2.5 py-1 text-xs font-bold rounded transition-all ${
              mode === 'GENERATOR'
                ? 'bg-emerald-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Generator
          </button>
        </div>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Component Selector Buttons & Live Details */}
        <div className="lg:col-span-5 space-y-4 bg-slate-950/70 p-4 rounded-xl border border-slate-800/80">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              {t.clickInstruction}
            </span>
            <div className="grid grid-cols-2 gap-1.5 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setSelectedComp('yoke')}
                aria-pressed={selectedComp === 'yoke'}
                className={`p-2 rounded text-left transition-all border ${
                  selectedComp === 'yoke'
                    ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500 font-bold'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                1. {t.yokeBtn}
              </button>
              <button
                type="button"
                onClick={() => setSelectedComp('poles')}
                aria-pressed={selectedComp === 'poles'}
                className={`p-2 rounded text-left transition-all border ${
                  selectedComp === 'poles'
                    ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500 font-bold'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                2. {t.polesBtn}
              </button>
              <button
                type="button"
                onClick={() => setSelectedComp('fieldWinding')}
                aria-pressed={selectedComp === 'fieldWinding'}
                className={`p-2 rounded text-left transition-all border ${
                  selectedComp === 'fieldWinding'
                    ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500 font-bold'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                3. {t.fieldBtn}
              </button>
              <button
                type="button"
                onClick={() => setSelectedComp('armatureCore')}
                aria-pressed={selectedComp === 'armatureCore'}
                className={`p-2 rounded text-left transition-all border ${
                  selectedComp === 'armatureCore'
                    ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500 font-bold'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                4. {t.coreBtn}
              </button>
              <button
                type="button"
                onClick={() => setSelectedComp('armatureWinding')}
                aria-pressed={selectedComp === 'armatureWinding'}
                className={`p-2 rounded text-left transition-all border ${
                  selectedComp === 'armatureWinding'
                    ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500 font-bold'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                5. {t.armWindingBtn}
              </button>
              <button
                type="button"
                onClick={() => setSelectedComp('commutator')}
                aria-pressed={selectedComp === 'commutator'}
                className={`p-2 rounded text-left transition-all border ${
                  selectedComp === 'commutator'
                    ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500 font-bold'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                6. {t.commBtn}
              </button>
              <button
                type="button"
                onClick={() => setSelectedComp('brushes')}
                aria-pressed={selectedComp === 'brushes'}
                className={`p-2 rounded text-left transition-all border ${
                  selectedComp === 'brushes'
                    ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500 font-bold'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                7. {t.brushBtn}
              </button>
              <button
                type="button"
                onClick={() => setSelectedComp('shaft')}
                aria-pressed={selectedComp === 'shaft'}
                className={`p-2 rounded text-left transition-all border ${
                  selectedComp === 'shaft'
                    ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500 font-bold'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                8. {t.shaftBtn}
              </button>
            </div>
          </div>

          {/* Component Info Box */}
          <div className="p-3.5 bg-slate-900 rounded-xl border border-cyan-900/60 space-y-2.5 text-xs">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
              <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
              <h4 className="font-bold text-sm text-cyan-300">
                {compData.name[currentLanguage] || compData.name.en}
              </h4>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
                {t.materialLabel}:
              </span>
              <p className="text-slate-200 mt-0.5">
                {compData.material[currentLanguage] || compData.material.en}
              </p>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
                {t.functionLabel}:
              </span>
              <p className="text-slate-200 mt-0.5">
                {compData.function[currentLanguage] || compData.function.en}
              </p>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold block">
                {t.importanceLabel}:
              </span>
              <p className="text-amber-200/90 mt-0.5">
                {compData.importance[currentLanguage] || compData.importance.en}
              </p>
            </div>
          </div>
        </div>

        {/* Visual Cutaway DC Machine Diagram */}
        <div className="lg:col-span-7 space-y-3">
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 relative flex flex-col items-center justify-center">
            {/* SVG Diagram of 2-Pole DC Machine Cutaway */}
            <svg viewBox="0 0 460 360" className="w-full h-auto max-h-80 select-none">
              <defs>
                <radialGradient id="armatureGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#475569" />
                  <stop offset="100%" stopColor="#1e293b" />
                </radialGradient>
                <marker id="torqueArrow" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto">
                  <polygon points="0 0, 8 4, 0 8" fill="#38bdf8" />
                </marker>
              </defs>

              {/* 1. Yoke (Outer Circular Frame) */}
              <circle
                cx="230"
                cy="180"
                r="160"
                fill="#0f172a"
                stroke={selectedComp === 'yoke' ? '#38bdf8' : '#334155'}
                strokeWidth={selectedComp === 'yoke' ? '18' : '14'}
                className="cursor-pointer transition-all"
                onClick={() => setSelectedComp('yoke')}
              />
              <text x="230" y="32" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">
                Yoke / Frame (Magnetic Return Path)
              </text>

              {/* 2. Main Field Poles (Top North Pole, Bottom South Pole) */}
              {/* North Pole (Top) */}
              <g
                className="cursor-pointer"
                onClick={() => setSelectedComp('poles')}
              >
                {/* Pole Core */}
                <rect
                  x="190"
                  y="34"
                  width="80"
                  height="45"
                  fill="#1e293b"
                  stroke={selectedComp === 'poles' ? '#38bdf8' : '#475569'}
                  strokeWidth="2"
                />
                {/* Pole Shoe (Flared curved bottom) */}
                <path
                  d="M 170 79 Q 230 98 290 79 L 270 79 L 190 79 Z"
                  fill="#334155"
                  stroke={selectedComp === 'poles' ? '#38bdf8' : '#64748b'}
                  strokeWidth="2"
                />
                <text x="230" y="65" textAnchor="middle" fill="#ef4444" fontSize="16" fontWeight="bold">
                  NORTH (N)
                </text>
              </g>

              {/* South Pole (Bottom) */}
              <g
                className="cursor-pointer"
                onClick={() => setSelectedComp('poles')}
              >
                {/* Pole Core */}
                <rect
                  x="190"
                  y="281"
                  width="80"
                  height="45"
                  fill="#1e293b"
                  stroke={selectedComp === 'poles' ? '#38bdf8' : '#475569'}
                  strokeWidth="2"
                />
                {/* Pole Shoe (Flared curved top) */}
                <path
                  d="M 170 281 Q 230 262 290 281 L 270 281 L 190 281 Z"
                  fill="#334155"
                  stroke={selectedComp === 'poles' ? '#38bdf8' : '#64748b'}
                  strokeWidth="2"
                />
                <text x="230" y="310" textAnchor="middle" fill="#3b82f6" fontSize="16" fontWeight="bold">
                  SOUTH (S)
                </text>
              </g>

              {/* 3. Field Coils on Pole Cores */}
              <g
                className="cursor-pointer"
                onClick={() => setSelectedComp('fieldWinding')}
              >
                {/* Top Coil */}
                <rect x="175" y="42" width="15" height="30" rx="2" fill="#b45309" stroke={selectedComp === 'fieldWinding' ? '#fbbf24' : '#d97706'} strokeWidth="2" />
                <rect x="270" y="42" width="15" height="30" rx="2" fill="#b45309" stroke={selectedComp === 'fieldWinding' ? '#fbbf24' : '#d97706'} strokeWidth="2" />
                {/* Bottom Coil */}
                <rect x="175" y="288" width="15" height="30" rx="2" fill="#b45309" stroke={selectedComp === 'fieldWinding' ? '#fbbf24' : '#d97706'} strokeWidth="2" />
                <rect x="270" y="288" width="15" height="30" rx="2" fill="#b45309" stroke={selectedComp === 'fieldWinding' ? '#fbbf24' : '#d97706'} strokeWidth="2" />
              </g>

              {/* 4. Armature Rotor (Center Cylinder with Slots) */}
              <circle
                cx="230"
                cy="180"
                r="75"
                fill="url(#armatureGrad)"
                stroke={selectedComp === 'armatureCore' ? '#38bdf8' : '#64748b'}
                strokeWidth={selectedComp === 'armatureCore' ? '3' : '2'}
                className="cursor-pointer"
                onClick={() => setSelectedComp('armatureCore')}
              />

              {/* 5. Armature Slots & Conductors (Periphery) */}
              <g
                className="cursor-pointer"
                onClick={() => setSelectedComp('armatureWinding')}
              >
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const cx = 230 + 64 * Math.cos(rad);
                  const cy = 180 + 64 * Math.sin(rad);
                  const isTopHalf = cy < 180;
                  return (
                    <g key={i}>
                      <circle
                        cx={cx}
                        cy={cy}
                        r="6"
                        fill="#0f172a"
                        stroke={selectedComp === 'armatureWinding' ? '#34d399' : '#f59e0b'}
                        strokeWidth="1.5"
                      />
                      {/* Current Direction: Dot (Out of page) or Cross (Into page) */}
                      {isTopHalf ? (
                        <circle cx={cx} cy={cy} r="2" fill="#38bdf8" />
                      ) : (
                        <text x={cx} y={cy + 3} textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="bold">✕</text>
                      )}
                    </g>
                  );
                })}
              </g>

              {/* 6. Commutator Cylinder (Inner ring) */}
              <circle
                cx="230"
                cy="180"
                r="38"
                fill="#78350f"
                stroke={selectedComp === 'commutator' ? '#38bdf8' : '#d97706'}
                strokeWidth={selectedComp === 'commutator' ? '3' : '2'}
                className="cursor-pointer"
                onClick={() => setSelectedComp('commutator')}
              />
              {/* Commutator Segment lines */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => {
                const rad = (angle * Math.PI) / 180;
                const x1 = 230 + 20 * Math.cos(rad);
                const y1 = 180 + 20 * Math.sin(rad);
                const x2 = 230 + 38 * Math.cos(rad);
                const y2 = 180 + 38 * Math.sin(rad);
                return <line key={idx} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#fef08a" strokeWidth="1" />;
              })}

              {/* 7. Carbon Brushes (Mounted horizontally on left and right) */}
              <g
                className="cursor-pointer"
                onClick={() => setSelectedComp('brushes')}
              >
                {/* Left Brush (+) */}
                <rect x="180" y="172" width="14" height="16" fill="#18181b" stroke={selectedComp === 'brushes' ? '#38bdf8' : '#a1a1aa'} strokeWidth="1.5" />
                <text x="174" y="184" textAnchor="end" fill="#38bdf8" fontSize="11" fontWeight="bold">+</text>

                {/* Right Brush (-) */}
                <rect x="266" y="172" width="14" height="16" fill="#18181b" stroke={selectedComp === 'brushes' ? '#38bdf8' : '#a1a1aa'} strokeWidth="1.5" />
                <text x="286" y="184" textAnchor="start" fill="#ef4444" fontSize="11" fontWeight="bold">−</text>
              </g>

              {/* 8. Central Steel Shaft */}
              <circle
                cx="230"
                cy="180"
                r="16"
                fill="#94a3b8"
                stroke={selectedComp === 'shaft' ? '#38bdf8' : '#475569'}
                strokeWidth={selectedComp === 'shaft' ? '3' : '2'}
                className="cursor-pointer"
                onClick={() => setSelectedComp('shaft')}
              />
              <text x="230" y="184" textAnchor="middle" fill="#0f172a" fontSize="8" fontWeight="bold">
                Shaft
              </text>

              {/* Rotation / Torque Motion Indicator */}
              <path
                d="M 285 140 A 65 65 0 0 1 295 195"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="3"
                markerEnd="url(#torqueArrow)"
                strokeDasharray={isReducedMotion ? 'none' : '4 2'}
                className={isReducedMotion ? '' : 'animate-pulse'}
              />
              <text x="325" y="165" fill="#38bdf8" fontSize="10" fontWeight="bold">
                {mode === 'MOTOR' ? 'Torque (T)' : 'Rotation (ω)'}
              </text>
            </svg>

            {/* Bottom Status Callout */}
            <div className="w-full mt-2 pt-2 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>{t.rotationDir}</span>
              <span className="font-mono text-cyan-400 font-bold">
                {mode === 'MOTOR' ? 'T_e ∝ Φ · I_a' : 'E_g = (PΦZN)/(60A)'}
              </span>
            </div>
          </div>

          {/* Reversibility Principle Alert */}
          <div className="p-2.5 bg-cyan-950/40 rounded-lg border border-cyan-900/60 text-[11px] text-cyan-200 flex items-start gap-2">
            <Zap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <p>{t.reversibilityNote}</p>
          </div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
