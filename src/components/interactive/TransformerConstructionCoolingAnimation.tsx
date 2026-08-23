import React, { useState, useEffect } from 'react';
import { RotateCcw, Wind, Droplets, Shield, Info, Layers, ThermometerSun, AlertCircle, Fan } from 'lucide-react';

interface TransformerConstructionCoolingAnimationProps {
  language?: 'en' | 'hi' | 'bn';
}

type StructuralType = 'core-type' | 'shell-type';
type CoolingMethod = 'dry-type' | 'onan' | 'onaf';

type ComponentId =
  | 'core'
  | 'hv-winding'
  | 'lv-winding'
  | 'insulation'
  | 'oil-tank'
  | 'radiator'
  | 'conservator'
  | 'breather'
  | 'buchholz'
  | 'fan';

export const TransformerConstructionCoolingAnimation: React.FC<TransformerConstructionCoolingAnimationProps> = ({
  language = 'en'
}) => {
  const [structType, setStructType] = useState<StructuralType>('core-type');
  const [coolingMode, setCoolingMode] = useState<CoolingMethod>('onan');
  const [selectedComp, setSelectedComp] = useState<ComponentId>('core');
  const [animTick, setAnimTick] = useState<number>(0);

  // Animation cycle for oil & air convection loops
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimTick((prev) => (prev + 1) % 40);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleReset = () => {
    setStructType('core-type');
    setCoolingMode('onan');
    setSelectedComp('core');
  };

  const t = {
    title: {
      en: 'Interactive Transformer Construction & Industrial Cooling Simulator',
      hi: 'इंटरैक्टिव ट्रांसफॉर्मर संरचना एवं औद्योगिक कूलिंग सिम्युलेटर',
      bn: 'ইন্টারেক্টিভ ট্রান্সফরমার গঠন ও শিল্প কুলিং সিমুলেটর'
    },
    coreType: { en: 'Core-Type Design', hi: 'कोर-टाइप संरचना', bn: 'কোর-টাইপ গঠন' },
    shellType: { en: 'Shell-Type Design', hi: 'शेल-टाइप संरचना', bn: 'শেল-টাইপ গঠন' },
    dryType: { en: 'Dry-Type (Air)', hi: 'ड्राई-टाइप (हवा)', bn: 'ড্রাই-টাইপ (বায়ু)' },
    onan: { en: 'ONAN (Oil Nat / Air Nat)', hi: 'ONAN (ऑयल नेचुरल / एयर नेचुरल)', bn: 'ONAN (স্বাভাবিক তেল/বায়ু)' },
    onaf: { en: 'ONAF (Oil Nat / Air Forced)', hi: 'ONAF (ऑयल नेचुरल / एयर फोर्स्ड)', bn: 'ONAF (তেল স্বাভাবিক/বায়ু চালিত)' },
    reset: { en: 'Reset Defaults', hi: 'रीसेट करें', bn: 'রিসেট করুন' },
    clickToInspect: {
      en: 'Click any highlighted component to inspect its engineering design & purpose',
      hi: 'किसी भी घटक पर क्लिक करके उसकी इंजीनियरिंग भूमिका एवं उद्देश्य देखें',
      bn: 'যেকোনো উপাদানে ক্লিক করে তার প্রকৌশল ভূমিকা ও উদ্দেশ্য বিস্তারিত দেখুন'
    },
    thermalNote: {
      en: 'Note: Diagram illustrates qualitative thermal fluid pathways and structural component topology.',
      hi: 'नोट: आरेख तापीय द्रव प्रवाह और संरचनात्मक घटकों की व्यवस्था को दर्शाता है।',
      bn: 'দ্রষ্টব্য: চিত্রটি তাপীয় তরল প্রবাহ ও কাঠামোগত উপাদানের গুণগত বিন্যাস প্রদর্শন করে।'
    }
  };

  // Technical Component Database (Trilingual)
  const componentInfo: Record<
    ComponentId,
    {
      name: { en: string; hi: string; bn: string };
      functionDesc: { en: string; hi: string; bn: string };
      engineeringPurpose: { en: string; hi: string; bn: string };
      rating: { en: string; hi: string; bn: string };
    }
  > = {
    core: {
      name: {
        en: 'Laminated CRGO Silicon Steel Core',
        hi: 'लैमिनेटेड CRGO सिलिकॉन स्टील कोर',
        bn: 'লেমিনেটেড CRGO সিলিকন স্টিল কোর'
      },
      functionDesc: {
        en: 'Provides a continuous low-reluctance magnetic pathway for the alternating mutual flux linking primary and secondary windings.',
        hi: 'प्राइमरी और सेकेंडरी वाइंडिंग को जोड़ने वाले प्रत्यावर्ती फ्लक्स के लिए न्यूनतम रिलक्टेंस (कम बाधा) वाला चुंबकीय मार्ग प्रदान करता है।',
        bn: 'প্রাইমারি ও সেকেন্ডারি ওয়াইন্ডিং সংযুক্তকারী পরিবর্তী ফ্লাক্সের জন্য অত্যন্ত কম রিল্যাকট্যান্সের চৌম্বক পথ প্রদান করে।'
      },
      engineeringPurpose: {
        en: 'Cold-Rolled Grain-Oriented (CRGO) steel with 0.27–0.35 mm laminations insulated with Carlite varnish reduces Eddy Current losses (∝ t²) and Hysteresis losses (∝ f · Bm^1.6).',
        hi: '0.27–0.35 mm मोटाई की वार्निश-लेपित पट्टियाँ भंवर धारा हानियों (Eddy Current Losses) और हिस्टैरिसीस हानियों को न्यूनतम करती हैं।',
        bn: '০.২৭-০.৩৫ মিমি পাতলা বার্নিশযুক্ত স্টিল লেমিনেশন এডি কারেন্ট লস (∝ t²) ও হিস্টেরেসিস লস উল্লেখযোগ্যভাবে হ্রাস করে।'
      },
      rating: { en: 'Flux Density: 1.5–1.7 Tesla', hi: 'फ्लक्स घनत्व: 1.5–1.7 टेस्ला', bn: 'ফ্লাক্স ঘনত্ব: ১.৫–১.৭ টেসলা' }
    },
    'lv-winding': {
      name: {
        en: 'Low Voltage (LV) Winding (Placed Next to Core)',
        hi: 'लो वोल्टेज (LV) वाइंडिंग (कोर के सबसे समीप)',
        bn: 'লো ভোল্টেজ (LV) ওয়াইন্ডিং (কোরের সবচেয়ে কাছে)'
      },
      functionDesc: {
        en: 'Carries high load current at lower terminal potential, wound with thicker copper/aluminum conductor cross-section.',
        hi: 'कम वोल्टेज पर उच्च लोड धारा प्रवाहित करती है, इसलिए मोटे तांबे के तारों से बनाई जाती है।',
        bn: 'নিম্ন ভোল্টেজে উচ্চ লোড কারেন্ট বহন করে, তাই মোটা কপার কন্ডাক্টর দিয়ে তৈরি করা হয়।'
      },
      engineeringPurpose: {
        en: 'Placed immediately adjacent to the grounded core limb to minimize dielectric insulation barrier thickness, weight, and material cost.',
        hi: 'अर्थ किए गए कोर के पास रखने से इन्सुलेशन की आवश्यकता और लागत काफी कम हो जाती है।',
        bn: 'গ্রাউন্ডেড কোরের সাথে সংলগ্ন রাখার ফলে প্রয়োজনীয় ইনসুলেশন স্তর পাতলা রাখা যায় ও ব্যয় হ্রাস পায়।'
      },
      rating: { en: 'Typical Voltage: 415 V / 11 kV', hi: 'मानक वोल्टेज: 415 V / 11 kV', bn: 'আদর্শ ভোল্টেজ: ৪১৫ V / ১১ kV' }
    },
    'hv-winding': {
      name: {
        en: 'High Voltage (HV) Winding (Placed Concentrically Outside LV)',
        hi: 'हाई वोल्टेज (HV) वाइंडिंग (LV के बाहर संकेंद्रित)',
        bn: 'হাই ভোল্টেজ (HV) ওয়াইন্ডিং (LV-এর বাইরে সমকেন্দ্রী)'
      },
      functionDesc: {
        en: 'Carries lower current at transmission/grid voltage with large number of series turns.',
        hi: 'ग्रिड ट्रांसमिशन वोल्टेज पर कम धारा प्रवाहित करती है और इसमें अधिक संख्या में टर्न्स होते हैं।',
        bn: 'গ্রিড ভোল্টেজে কম কারেন্ট ও অধিক সংখ্যক টার্ন নিয়ে শক্তি স্থানান্তর সম্পন্ন করে।'
      },
      engineeringPurpose: {
        en: 'Placed on the outer layer to facilitate tappings for off-circuit / on-load tap changers (OLTC) and simplify clearance from the transformer tank walls.',
        hi: 'बाहरी परत पर होने से टैप चेंजर (OLTC) लगाना और वाइंडिंग से टैंक की सुरक्षित दूरी रखना आसान होता है।',
        bn: 'বাইরের স্তরে থাকায় ট্যাপ চেঞ্জার (OLTC) সংযোগ ও ট্যাংক প্রাচীর থেকে নিরাপদ দূরত্ব বজায় রাখা সহজ হয়।'
      },
      rating: { en: 'Typical Voltage: 33 kV / 132 kV / 400 kV', hi: 'मानक वोल्टेज: 33 kV / 132 kV / 400 kV', bn: 'আদর্শ ভোল্টেজ: ৩৩ kV / ১৩২ kV / ৪০০ kV' }
    },
    insulation: {
      name: {
        en: 'Solid Dielectric Insulation Barriers',
        hi: 'सॉलिड डाइइलेक्ट्रिक इन्सुलेशन बैरियर',
        bn: 'কঠিন ডাই-ইলেকট্রিক ইনসুলেশন স্তর'
      },
      functionDesc: {
        en: 'Provides electrical isolation between core-to-LV, LV-to-HV, and inter-turn winding layers.',
        hi: 'कोर-से-LV, LV-से-HV और वाइंडिंग टर्न्स के बीच विद्युत अलगाव (इन्सुलेशन) प्रदान करता है।',
        bn: 'কোর ও LV, LV ও HV এবং প্রতিটি টার্নের মাঝে বৈদ্যুতিক বিচ্ছিন্নতা প্রদান করে।'
      },
      engineeringPurpose: {
        en: 'Composed of high-grade pressboard, Nomex, craft paper, and epoxy resin tubes capable of withstanding switching impulses and lightning surges.',
        hi: 'प्रेसबोर्ड, क्राफ्ट पेपर और एपॉक्सी रेजिन से निर्मित जो स्विचिंग सर्ज और आकाशीय बिजली के झटकों को सहन करते हैं।',
        bn: 'প্রেসবার্ড, ক্রাফট পেপার ও ইপক্সি রেজিন দিয়ে গঠিত যা চরম ভোল্টেজ সার্জ ও বজ্রপাত সহ্য করতে পারে।'
      },
      rating: { en: 'Dielectric Strength: > 50 kV/mm', hi: 'डाइइलेक्ट्रिक क्षमता: > 50 kV/mm', bn: 'ডাই-ইলেকট্রিক শক্তি: > ৫০ kV/mm' }
    },
    'oil-tank': {
      name: {
        en: 'Fabricated Steel Transformer Main Tank',
        hi: 'स्टील ट्रांसफॉर्मर मुख्य ऑयल टैंक',
        bn: 'স্টিল নির্মিত ট্রান্সফরমার প্রধান অয়েল ট্যাংক'
      },
      functionDesc: {
        en: 'Encloses the active core-coil assembly and holds high-grade mineral insulating oil.',
        hi: 'कोर और वाइंडिंग असेंबली को सुरक्षित रखता है और डाइइलेक्ट्रिक मिनरल ऑयल से भरा होता है।',
        bn: 'মূল কোর ও ওয়াইন্ডিং ইউনিটকে ধারণ করে এবং ডাই-ইলেকট্রিক মিনারেল তেলে নিমজ্জিত রাখে।'
      },
      engineeringPurpose: {
        en: 'Built from welded structural mild steel sheets reinforced with stiffeners to withstand internal hydraulic pressure during short-circuit electromagnetic faults.',
        hi: 'वेल्डेड स्टील प्लेट्स से निर्मित जो शॉर्ट-सर्किट के समय अत्यधिक आंतरिक दबाव को सुरक्षित रूप से सहन करता है।',
        bn: 'দৃঢ় স্টিল প্লেট দ্বারা ঝালাইকৃত যা শর্ট-সার্কিট চলাকালীন তীব্র অভ্যন্তরীণ হাইড্রোলিক চাপ সামলায়।'
      },
      rating: { en: 'Test Pressure: 0.35 bar (Vaccum Proof)', hi: 'परीक्षण दाब: 0.35 बार', bn: 'চাপ সহনশীলতা: ০.৩৫ বার' }
    },
    radiator: {
      name: {
        en: 'Cooling Radiator Tubes / Pressed Steel Fins',
        hi: 'कूलिंग रेडिएटर ट्यूब्स / स्टील फिन्स',
        bn: 'কুলিং রেডিয়েটর টিউব ও স্টিল ফিন'
      },
      functionDesc: {
        en: 'Maximizes the surface area exposed to ambient air for efficient convective and conductive heat dissipation from hot circulating oil.',
        hi: 'गर्म तेल से ताप को हवा में प्रसारित करने के लिए विशाल पृष्ठीय क्षेत्रफल प्रदान करता है।',
        bn: 'উত্তপ্ত তেল থেকে বায়ুমণ্ডলে দ্রুত তাপ ছড়িয়ে দেওয়ার জন্য বিশাল পৃষ্ঠের ক্ষেত্রফল প্রদান করে।'
      },
      engineeringPurpose: {
        en: 'Hot oil rises to the top of the tank by buoyancy, enters radiator headers, cools as it descends, and re-enters the bottom of the tank (thermosiphon convection loop).',
        hi: 'गर्म तेल ऊपर उठकर रेडिएटर में जाता है, हवा से ठंडा होकर नीचे बैठता है और वापस टैंक में प्रवेश करता है (थर्मोसाइफन चक्र)।',
        bn: 'থার্মোসাইফন প্রক্রিয়ায় গরম তেল উপরে উঠে রেডিয়েটরে প্রবেশ করে, শীতল হয়ে নিচে নেমে পুনরায় ট্যাংকে ঢোকে।'
      },
      rating: { en: 'Heat Dissipation: 60–80 W/m²·°C', hi: 'ताप अपव्यय: 60–80 W/m²·°C', bn: 'তাপ অপসারণ: ৬০–৮০ W/m²·°C' }
    },
    conservator: {
      name: {
        en: 'Oil Conservator Expansion Tank',
        hi: 'ऑयल कंज़र्वेटर टैंक (प्रसारण टैंक)',
        bn: 'অয়েল কনজারভেটর প্রসারণ ট্যাংক'
      },
      functionDesc: {
        en: 'Accommodates the volumetric expansion and contraction of insulating oil during transformer loading and temperature swings.',
        hi: 'लोड और तापमान बढ़ने पर तेल के फैलने और सिकुड़ने के लिए अतिरिक्त स्थान प्रदान करता है।',
        bn: 'লোড ও তাপমাত্রার পরিবর্তনে তেলের আয়তন বৃদ্ধি ও সংকোচন সমন্বয় করে।'
      },
      engineeringPurpose: {
        en: 'Maintains a completely oil-filled main tank, minimizing the oil surface exposed to atmospheric air to prevent oil oxidation and sludge formation.',
        hi: 'मुख्य टैंक को हमेशा तेल से भरा रखता है ताकि तेल हवा के संपर्क में आकर खराब (ऑक्सीडाइज) न हो।',
        bn: 'প্রধান ট্যাংক সর্বদা পূর্ণ রাখে যাতে বাতাস স্পর্শ করে তেল জারিত ও স্লাজযুক্ত হতে না পারে।'
      },
      rating: { en: 'Volume: ~8–10% of Main Tank', hi: 'आयतन: मुख्य टैंक का 8–10%', bn: 'আয়তন: মূল ট্যাংকের প্রায় ৮-১০%' }
    },
    breather: {
      name: {
        en: 'Silica Gel Dehydrating Breather',
        hi: 'सिलिका जेल डिहाइड्रेटिंग ब्रीदर',
        bn: 'সিলিকা জেল ডিহাইড্রেটিং ব্রিদার'
      },
      functionDesc: {
        en: 'Filters and extracts moisture from atmospheric air drawn into the conservator tank during thermal cooling cycles ("breathing in").',
        hi: 'जब ट्रांसफॉर्मर ठंडा होकर सांस लेता है, तो बाहर की हवा की नमी को सोखकर सूखी हवा अंदर भेजता है।',
        bn: 'ট্রান্সফরমার ঠান্ডা হওয়ার সময় টেনে নেওয়া বায়ুমণ্ডলীয় বাতাস থেকে আর্দ্রতা শোষণ করে।'
      },
      engineeringPurpose: {
        en: 'Cobalt-chloride impregnated silica gel crystals (Blue when dry, turns Pink when saturated with moisture) prevent degradation of oil dielectric breakdown voltage.',
        hi: 'नीले रंग के सिलिका क्रिस्टल नमी सोखने पर गुलाबी हो जाते हैं, जिससे तेल की डाइइलेक्ट्रिक शक्ति सुरक्षित रहती है।',
        bn: 'নীল রঙের ক্রিস্টাল আর্দ্রতা শুষে গোলাপি রঙে পরিণত হয় এবং তেলের ব্রেকডাউন ভোল্টেজ রক্ষা করে।'
      },
      rating: { en: 'Dry Color: Blue (Cobalt) / Turns Pink', hi: 'सूखा: नीला / संतृप्त: गुलाबी', bn: 'শুষ্ক অবস্থা: নীল / স্যাচুরেটেড: গোলাপি' }
    },
    buchholz: {
      name: {
        en: 'Buchholz Protective Gas-Actuated Relay',
        hi: 'बुखोल्ज सुरक्षा रिले (गैस-चालित रिले)',
        bn: 'বুখোলজ সুরক্ষামূলক গ্যাস চালিত রিলে'
      },
      functionDesc: {
        en: 'Detects incipient internal faults (such as inter-turn short circuits, hot spots, or core arcing) by sensing accumulated decomposition gas and oil surge velocity.',
        hi: 'टैंक के अंदर किसी भी आंतरिक शॉर्ट-सर्किट या स्पार्किंग से उत्पन्न गैस और तेल के तेज बहाव को पकड़कर अलार्म/ट्रिप सिग्नल देता है।',
        bn: 'ট্যাংকের অভ্যন্তরে কোনো ওয়াইন্ডিং ত্রুটি বা আর্কিংয়ের কারণে উৎপন্ন গ্যাস ও তেলের প্রবাহ শনাক্ত করে অ্যালার্ম দেয়।'
      },
      engineeringPurpose: {
        en: 'Installed in the inclined connecting pipe between main tank and conservator. Minor faults tilt upper float to trigger alarm; severe arcing trips main circuit breaker via lower flap.',
        hi: 'टैंक और कंज़र्वेटर के बीच पाइप में लगा होता है। हल्की खराबी पर अलार्म और भारी खराबी पर ब्रेकर ट्रिप करता है।',
        bn: 'ট্যাংক ও কনজারভেটরের মধ্যকার পাইপে থাকে; ছোট ত্রুটিতে সতর্ক সংকেত এবং বড় ত্রুটিতে ট্রিপ করে।'
      },
      rating: { en: 'Angle of Pipe: 9°–10° to Horizontal', hi: 'पाइप झुकाव: 9°–10°', bn: 'পাইপের ঢাল: ৯°–১০°' }
    },
    fan: {
      name: {
        en: 'Forced Air Cooling Fans (ONAF)',
        hi: 'फोर्स्ड एयर कूलिंग पंखे (ONAF प्रणाली)',
        bn: 'ফোর্সড এয়ার কুলিং ফ্যান (ONAF পদ্ধতি)'
      },
      functionDesc: {
        en: 'Blows high-velocity ambient air across radiator tube banks to dramatically increase convective heat dissipation rate.',
        hi: 'रेडिएटर ट्यूबों पर तेज हवा फेंककर तेल को बहुत तेजी से ठंडा करते हैं।',
        bn: 'রেডিয়েটর টিউবের উপর তীব্র গতিতে শীতল বাতাস প্রবাহিত করে তাপ অপসারণের হার দ্রুত বৃদ্ধি করে।'
      },
      engineeringPurpose: {
        en: 'Allows up to 25%–33% continuous overload capacity on standard ONAN-rated transformers without exceeding insulation thermal class temperature limits (65°C winding rise).',
        hi: 'ट्रांसफॉर्मर को अपनी मूल क्षमता से 25%–33% अधिक लोड सुरक्षित रूप से संभालने की क्षमता देता है।',
        bn: 'অতিরিক্ত ২৫%-৩৩% পর্যন্ত লোড চলাকালীন ওয়াইন্ডিং তাপমাত্রাকে নিরাপদ সীমার মধ্যে রাখে।'
      },
      rating: { en: 'Boosts Rating: +25% to +33% MVA', hi: 'क्षमता वृद्धि: +25% से +33%', bn: 'ক্ষমতা বৃদ্ধি: +২৫% থেকে +৩৩%' }
    }
  };

  const selectedData = componentInfo[selectedComp];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-6 text-slate-100 shadow-xl my-6">
      {/* Header & Modes */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-cyan-400" />
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
              {t.title[language]}
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {t.clickToInspect[language]}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2">
          {/* Structural Design Selector */}
          <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800">
            <button
              onClick={() => setStructType('core-type')}
              className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                structType === 'core-type' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
              aria-pressed={structType === 'core-type'}
            >
              {t.coreType[language]}
            </button>
            <button
              onClick={() => setStructType('shell-type')}
              className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                structType === 'shell-type' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
              aria-pressed={structType === 'shell-type'}
            >
              {t.shellType[language]}
            </button>
          </div>

          {/* Cooling Mode Selector */}
          <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800">
            <button
              onClick={() => setCoolingMode('dry-type')}
              className={`px-2 py-1 rounded text-xs font-semibold transition-colors ${
                coolingMode === 'dry-type' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
              aria-pressed={coolingMode === 'dry-type'}
            >
              {t.dryType[language]}
            </button>
            <button
              onClick={() => setCoolingMode('onan')}
              className={`px-2 py-1 rounded text-xs font-semibold transition-colors ${
                coolingMode === 'onan' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
              aria-pressed={coolingMode === 'onan'}
            >
              {t.onan[language]}
            </button>
            <button
              onClick={() => setCoolingMode('onaf')}
              className={`px-2 py-1 rounded text-xs font-semibold transition-colors ${
                coolingMode === 'onaf' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
              aria-pressed={coolingMode === 'onaf'}
            >
              {t.onaf[language]}
            </button>
          </div>

          <button
            onClick={handleReset}
            className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-lg transition-colors"
            title={t.reset[language]}
            aria-label={t.reset[language]}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Cross-Section Graphic & Component Selector */}
      <div className="my-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* SVG Detailed Transformer Cutaway Illustration */}
        <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center relative overflow-hidden">
          <svg viewBox="0 0 600 380" className="w-full h-auto max-h-[360px] cursor-pointer">
            <defs>
              <linearGradient id="oilGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#0369a1" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="coreSteelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#475569" />
                <stop offset="50%" stopColor="#334155" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
            </defs>

            {/* If Oil Immersed: Draw Outer Steel Tank & Oil Level */}
            {coolingMode !== 'dry-type' && (
              <g
                onClick={() => setSelectedComp('oil-tank')}
                className={`transition-opacity ${selectedComp === 'oil-tank' ? 'opacity-100' : 'opacity-85 hover:opacity-100'}`}
              >
                {/* Main Tank Body */}
                <rect x="80" y="110" width="340" height="230" rx="8" fill="#0f172a" stroke="#64748b" strokeWidth="2.5" />
                {/* Dielectric Transformer Mineral Oil */}
                <rect x="85" y="115" width="330" height="220" rx="6" fill="url(#oilGrad)" />
                {/* Tank Label */}
                <text x="95" y="130" fill="#38bdf8" fontSize="10" fontWeight="bold">
                  Transformer Oil Tank
                </text>

                {/* Animated Convection Thermal Oil Flow Arrows */}
                <g stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 3" fill="none" opacity="0.8">
                  {/* Rising Hot Oil Near Core */}
                  <path d={`M 170 270 L 170 140 L 330 140 L 330 270`} />
                  <polygon points="167,160 170,150 173,160" fill="#f59e0b" />
                  <polygon points="327,160 330,150 333,160" fill="#f59e0b" />
                </g>
              </g>
            )}

            {/* Dry Type Enclosure Boundary */}
            {coolingMode === 'dry-type' && (
              <g>
                <rect x="80" y="90" width="340" height="260" rx="8" fill="#0b1120" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6 4" />
                <text x="95" y="110" fill="#fbbf24" fontSize="11" fontWeight="bold">
                  IP23 Ventilated Dry-Type Enclosure (Air Natural)
                </text>
                {/* Air convection currents */}
                <path d="M 120 330 Q 140 200 120 110" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
                <path d="M 380 330 Q 360 200 380 110" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
              </g>
            )}

            {/* TRANSFORMER CORE STRUCTURE */}
            {structType === 'core-type' ? (
              /* Core-Type (2 Main Limbs) */
              <g
                onClick={() => setSelectedComp('core')}
                className={`transition-all ${selectedComp === 'core' ? 'filter drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]' : ''}`}
              >
                {/* Main Core Frame */}
                <rect x="130" y="140" width="240" height="170" rx="6" fill="url(#coreSteelGrad)" stroke="#94a3b8" strokeWidth="2" />
                {/* Center Window */}
                <rect x="190" y="170" width="120" height="110" rx="4" fill={coolingMode !== 'dry-type' ? '#0369a1' : '#020617'} opacity={coolingMode !== 'dry-type' ? 0.8 : 1} />
                <text x="250" y="225" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">
                  Core Limb
                </text>
              </g>
            ) : (
              /* Shell-Type (3 Limbs, Central limb carries 2x flux) */
              <g
                onClick={() => setSelectedComp('core')}
                className={`transition-all ${selectedComp === 'core' ? 'filter drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]' : ''}`}
              >
                <rect x="110" y="140" width="280" height="170" rx="6" fill="url(#coreSteelGrad)" stroke="#c084fc" strokeWidth="2" />
                <rect x="145" y="170" width="55" height="110" rx="4" fill={coolingMode !== 'dry-type' ? '#0369a1' : '#020617'} />
                <rect x="300" y="170" width="55" height="110" rx="4" fill={coolingMode !== 'dry-type' ? '#0369a1' : '#020617'} />
                <text x="250" y="225" textAnchor="middle" fill="#c084fc" fontSize="9" fontWeight="bold">
                  Central Limb (2Φ)
                </text>
              </g>
            )}

            {/* CONCENTRIC WINDINGS ON CORE LIMBS */}
            {/* Left Limb LV & HV Windings */}
            <g>
              {/* LV Winding (Inner - Brown/Amber) */}
              <g onClick={() => setSelectedComp('lv-winding')} className="cursor-pointer">
                <rect x="155" y="175" width="16" height="100" rx="3" fill="#b45309" stroke="#f59e0b" strokeWidth={selectedComp === 'lv-winding' ? 2.5 : 1} />
                <text x="163" y="230" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold" transform="rotate(-90 163 230)">
                  LV Winding
                </text>
              </g>

              {/* Solid Insulation Barrier */}
              <g onClick={() => setSelectedComp('insulation')} className="cursor-pointer">
                <rect x="172" y="173" width="5" height="104" rx="1" fill="#cbd5e1" stroke="#94a3b8" strokeWidth={selectedComp === 'insulation' ? 2 : 0.5} />
              </g>

              {/* HV Winding (Outer - Blue/Cyan) */}
              <g onClick={() => setSelectedComp('hv-winding')} className="cursor-pointer">
                <rect x="178" y="175" width="16" height="100" rx="3" fill="#1d4ed8" stroke="#38bdf8" strokeWidth={selectedComp === 'hv-winding' ? 2.5 : 1} />
                <text x="186" y="230" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold" transform="rotate(-90 186 230)">
                  HV Winding
                </text>
              </g>
            </g>

            {/* Right Limb LV & HV Windings */}
            <g>
              {/* LV Winding Inner */}
              <g onClick={() => setSelectedComp('lv-winding')} className="cursor-pointer">
                <rect x="306" y="175" width="16" height="100" rx="3" fill="#b45309" stroke="#f59e0b" strokeWidth={selectedComp === 'lv-winding' ? 2.5 : 1} />
              </g>
              {/* Insulation Barrier */}
              <g onClick={() => setSelectedComp('insulation')} className="cursor-pointer">
                <rect x="323" y="173" width="5" height="104" rx="1" fill="#cbd5e1" stroke="#94a3b8" strokeWidth={selectedComp === 'insulation' ? 2 : 0.5} />
              </g>
              {/* HV Winding Outer */}
              <g onClick={() => setSelectedComp('hv-winding')} className="cursor-pointer">
                <rect x="329" y="175" width="16" height="100" rx="3" fill="#1d4ed8" stroke="#38bdf8" strokeWidth={selectedComp === 'hv-winding' ? 2.5 : 1} />
              </g>
            </g>

            {/* COOLING SYSTEM ANCILLARY COMPONENTS (If not Dry-Type) */}
            {coolingMode !== 'dry-type' && (
              <g>
                {/* Radiator Cooling Tubes Bank (Right Side) */}
                <g onClick={() => setSelectedComp('radiator')} className="cursor-pointer">
                  {/* Top & Bottom Header Pipes */}
                  <path d="M 420 140 L 480 140" stroke="#64748b" strokeWidth="6" />
                  <path d="M 420 310 L 480 310" stroke="#64748b" strokeWidth="6" />
                  
                  {/* Radiator Fin Tubes */}
                  {[440, 455, 470, 485].map((rx, idx) => (
                    <g key={`fin-${idx}`}>
                      <rect x={rx - 4} y="138" width="8" height="175" rx="3" fill="#1e293b" stroke="#f59e0b" strokeWidth={selectedComp === 'radiator' ? 2 : 1} />
                      {/* Descending Cool Oil Stream */}
                      <line x1={rx} y1="150" x2={rx} y2="300" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" />
                    </g>
                  ))}
                  <text x="462" y="125" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">
                    Radiator Bank
                  </text>
                </g>

                {/* ONAF Cooling Fans (Mounted under/beside radiators) */}
                {coolingMode === 'onaf' && (
                  <g onClick={() => setSelectedComp('fan')} className="cursor-pointer">
                    <g transform="translate(460, 335)">
                      <circle cx="0" cy="0" r="15" fill="#0f172a" stroke="#10b981" strokeWidth={selectedComp === 'fan' ? 2.5 : 1.5} />
                      {/* Rotating Fan Blades */}
                      <g transform={`rotate(${animTick * 18})`}>
                        <path d="M 0 0 L -8 -10 A 5 5 0 0 1 0 -13 Z" fill="#10b981" />
                        <path d="M 0 0 L 10 -8 A 5 5 0 0 1 13 0 Z" fill="#10b981" />
                        <path d="M 0 0 L 8 10 A 5 5 0 0 1 0 13 Z" fill="#10b981" />
                        <path d="M 0 0 L -10 8 A 5 5 0 0 1 -13 0 Z" fill="#10b981" />
                      </g>
                      <circle cx="0" cy="0" r="3" fill="#fff" />
                    </g>
                    {/* Airflow upward arrows */}
                    <path d="M 445 355 L 445 320" stroke="#10b981" strokeWidth="2" strokeDasharray="3 2" />
                    <path d="M 475 355 L 475 320" stroke="#10b981" strokeWidth="2" strokeDasharray="3 2" />
                    <text x="460" y="370" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="bold">
                      ONAF Fan
                    </text>
                  </g>
                )}

                {/* Conservator Tank (Mounted Top Left) */}
                <g onClick={() => setSelectedComp('conservator')} className="cursor-pointer">
                  <rect x="120" y="25" width="130" height="42" rx="14" fill="#1e293b" stroke="#94a3b8" strokeWidth={selectedComp === 'conservator' ? 2.5 : 1.5} />
                  {/* Half Oil Level */}
                  <path d="M 122 46 Q 185 43 248 46 L 248 53 A 14 14 0 0 1 236 65 L 134 65 A 14 14 0 0 1 122 53 Z" fill="#0284c7" opacity="0.6" />
                  <text x="185" y="44" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">
                    Conservator Tank
                  </text>
                  <text x="185" y="56" textAnchor="middle" fill="#38bdf8" fontSize="7.5">
                    Oil Expansion Space
                  </text>
                </g>

                {/* Connecting Pipe from Main Tank to Conservator with Buchholz Relay */}
                <g>
                  {/* Inclined Pipe */}
                  <path d="M 210 110 L 210 70" stroke="#64748b" strokeWidth="8" />
                  <path d="M 210 110 L 210 70" stroke="#0284c7" strokeWidth="4" />

                  {/* Buchholz Relay Unit */}
                  <g onClick={() => setSelectedComp('buchholz')} className="cursor-pointer">
                    <rect x="195" y="75" width="30" height="22" rx="4" fill="#7f1d1d" stroke="#ef4444" strokeWidth={selectedComp === 'buchholz' ? 2.5 : 1.5} />
                    <text x="210" y="89" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">
                      B
                    </text>
                  </g>
                  <text x="235" y="90" fill="#ef4444" fontSize="8" fontWeight="bold">
                    Buchholz Relay
                  </text>
                </g>

                {/* Silica Gel Breather Assembly */}
                <g onClick={() => setSelectedComp('breather')} className="cursor-pointer">
                  {/* Breather pipe from conservator */}
                  <path d="M 120 40 L 95 40 L 95 65" stroke="#94a3b8" strokeWidth="3" fill="none" />
                  {/* Breather Glass Cylinder */}
                  <rect x="85" y="65" width="20" height="35" rx="3" fill="#0f172a" stroke="#38bdf8" strokeWidth={selectedComp === 'breather' ? 2.5 : 1.5} />
                  {/* Blue Silica Gel Crystals */}
                  <rect x="88" y="70" width="14" height="22" rx="2" fill="#0284c7" />
                  {/* Oil Seal Cup at bottom */}
                  <rect x="86" y="94" width="18" height="6" rx="2" fill="#b45309" />
                  <text x="75" y="85" textAnchor="end" fill="#38bdf8" fontSize="8" fontWeight="bold">
                    Breather
                  </text>
                </g>
              </g>
            )}
          </svg>
          <div className="text-[11px] text-slate-400 font-mono mt-1 text-center">
            {t.thermalNote[language]}
          </div>
        </div>

        {/* Selected Component Detailed Specification Card */}
        <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
                  Component Inspector
                </span>
                <h4 className="text-base font-bold text-white mt-0.5">
                  {selectedData.name[language]}
                </h4>
              </div>
              <span className="p-2 bg-slate-900 rounded-lg text-cyan-400 border border-slate-800">
                <Info className="w-5 h-5" />
              </span>
            </div>

            {/* Function description */}
            <div className="mt-4 space-y-3">
              <div>
                <div className="text-xs font-semibold text-slate-300">
                  {language === 'en' ? 'Primary Engineering Function:' : language === 'hi' ? 'प्राथमिक इंजीनियरिंग कार्य:' : 'প্রধান প্রকৌশল কাজ:'}
                </div>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {selectedData.functionDesc[language]}
                </p>
              </div>

              <div>
                <div className="text-xs font-semibold text-slate-300">
                  {language === 'en' ? 'Design Rationale & Physics:' : language === 'hi' ? 'डिजाइन एवं भौतिकी तर्क:' : 'ডিজাইন ও পদার্থবিজ্ঞানের যুক্তি:'}
                </div>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {selectedData.engineeringPurpose[language]}
                </p>
              </div>

              <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                <span className="text-[11px] text-cyan-300 font-mono font-semibold">
                  {language === 'en' ? 'Design Specification: ' : language === 'hi' ? 'डिजाइन विशिष्टता: ' : 'ডিজাইন স্পেসিফিকেশন: '}
                </span>
                <span className="text-[11px] text-white font-mono">
                  {selectedData.rating[language]}
                </span>
              </div>
            </div>
          </div>

          {/* Component Quick Selector Chips */}
          <div className="mt-6 pt-3 border-t border-slate-800">
            <div className="text-[11px] text-slate-400 font-medium mb-2">
              {language === 'en' ? 'Selectable Components:' : language === 'hi' ? 'चयन योग्य घटक:' : 'নির্বাচনযোগ্য উপাদানসমূহ:'}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {(['core', 'lv-winding', 'hv-winding', 'insulation', 'oil-tank', 'radiator', 'conservator', 'breather', 'buchholz', 'fan'] as ComponentId[]).map(
                (cid) => (
                  <button
                    key={cid}
                    onClick={() => setSelectedComp(cid)}
                    className={`px-2 py-1 rounded text-[11px] font-medium transition-colors ${
                      selectedComp === cid
                        ? 'bg-cyan-600 text-white font-bold'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                    aria-pressed={selectedComp === cid}
                  >
                    {componentInfo[cid].name.en.split(' ')[0]}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
