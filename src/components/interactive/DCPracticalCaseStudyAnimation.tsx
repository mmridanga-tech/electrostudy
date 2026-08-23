import React, { useState } from 'react';
import { Language } from '../../types';
import { RotateCcw, Wrench, ChevronRight, ChevronLeft, CheckCircle2, ShieldCheck, Factory, Cpu, BatteryCharging, Sun } from 'lucide-react';

interface Props {
  currentLanguage: Language;
}

type CaseStudyId = 'case1_relay' | 'case2_battery' | 'case3_solar' | 'case4_plc';

interface CaseStudyStep {
  stepTitle: string;
  description: string;
  circuitState: string;
  measuredData: string;
  analysisText: string;
  actionText: string;
}

interface CaseStudyData {
  id: CaseStudyId;
  title: string;
  icon: React.ReactNode;
  industry: string;
  steps: CaseStudyStep[];
}

const CASE_STUDIES: Record<Language, CaseStudyData[]> = {
  en: [
    {
      id: 'case1_relay',
      title: 'Industrial Control Relay Voltage Drop Fault',
      icon: <Factory className="w-4 h-4 text-cyan-400" />,
      industry: 'Manufacturing Plant Control Panel',
      steps: [
        {
          stepTitle: 'Step 1: Observed Symptoms & System Complaint',
          description: 'A 24V DC heavy-duty industrial contactor relay fails to energize when triggered by PLC digital output.',
          circuitState: 'Control Loop: 24V DC Supply → 100m Cable Pair → Relay Coil (Nominal Resistance 120 Ω, Min Pickup Voltage 19.2V).',
          measuredData: 'Terminal voltage at PLC panel output: 24.1V DC. Voltage across Relay Coil terminals during trigger: 16.2V DC.',
          analysisText: 'Voltage at relay coil (16.2V) is well below the 19.2V minimum pickup threshold, preventing magnetic armature pull-in.',
          actionText: 'Proceed to measure cable loop resistance and terminal contact voltage drops.'
        },
        {
          stepTitle: 'Step 2: Diagnostic Measurement & Cable Analysis',
          description: 'Apply Ohm’s Law and series circuit network analysis to identify where voltage is being lost.',
          circuitState: 'Total Series Circuit: Vs (24V) = I × (R_cable + R_coil). Nominal coil current I_coil = 16.2V / 120Ω = 0.135A.',
          measuredData: 'Measured cable loop resistance R_cable = (24.1V - 16.2V) / 0.135A = 58.5 Ω.',
          analysisText: 'Standard 100m 0.75mm² cable should have R_cable ≈ 4.8 Ω. The observed 58.5 Ω indicates severe oxidation/loose terminal connection.',
          actionText: 'Locate intermediate terminal strip and inspect contact resistance.'
        },
        {
          stepTitle: 'Step 3: Root Cause Confirmation & Corrective Action',
          description: 'Identified loose corrosion at terminal block TB2-14 in field junction box.',
          circuitState: 'Post-Repair Circuit: Cable loop resistance restored to 4.8 Ω.',
          measuredData: 'New coil voltage: V_coil = 24V × [120 / (120 + 4.8)] = 23.08V DC. Coil current = 0.192A.',
          analysisText: 'Relay receives 23.08V (> 19.2V threshold) and energizes cleanly within 15ms.',
          actionText: 'REPAIR COMPLETE: Re-tightened TB2-14 terminals, applied anti-corrosion spray, and logged preventive maintenance record.'
        }
      ]
    },
    {
      id: 'case2_battery',
      title: 'Substation DC Battery Bank Branch Imbalance',
      icon: <BatteryCharging className="w-4 h-4 text-emerald-400" />,
      industry: 'Electrical Substation 110V DC Auxiliary Power',
      steps: [
        {
          stepTitle: 'Step 1: Substation Alarm & Initial Symptoms',
          description: 'Substation DC supervision relay triggers "Battery String Current Imbalance" alarm during floating charge.',
          circuitState: 'Two parallel 110V lead-acid battery strings (String A and String B) connected to main DC busbar.',
          measuredData: 'Total busbar charging current = 10.0A. String A current = 8.8A, String B current = 1.2A.',
          analysisText: 'Parallel branches should share charging current equally (~5.0A each). Severe imbalance indicates high internal resistance or cell degradation in String B.',
          actionText: 'Isolate String B de-energized and perform internal resistance test per cell.'
        },
        {
          stepTitle: 'Step 2: Nodal & Mesh Analysis of Battery Branches',
          description: 'Using Thevenin equivalent model for individual battery cells.',
          circuitState: 'String B contains 55 cells in series. Internal resistance R_int_B = V_open / I_short.',
          measuredData: 'Cell #28 in String B shows terminal voltage 1.82V (normal 2.25V) and internal resistance 45mΩ (normal 2.5mΩ).',
          analysisText: 'Cell #28 has developed internal plate sulfation, adding ~42.5mΩ resistance to String B, reducing branch current by 80%.',
          actionText: 'Bypass or replace defective Cell #28 and recalibrate string balance.'
        },
        {
          stepTitle: 'Step 3: Verification & System Restoration',
          description: 'Replaced Cell #28 with new healthy 2.25V cell.',
          circuitState: 'String B internal resistance restored to 137.5mΩ total.',
          measuredData: 'Charging current String A = 5.05A, String B = 4.95A. Current imbalance < 2%.',
          analysisText: 'Substation DC auxiliary busbar fully stabilized with 100% back-up capacity for protection relay trip coils.',
          actionText: 'SYSTEM RESTORED: Alarm cleared and battery bank returned to auto-float charge mode.'
        }
      ]
    },
    {
      id: 'case3_solar',
      title: 'Industrial Solar PV Array DC String Troubleshooting',
      icon: <Sun className="w-4 h-4 text-amber-400" />,
      industry: 'Commercial Rooftop 500kW Solar Plant',
      steps: [
        {
          stepTitle: 'Step 1: Inverter DC Input Power Drop',
          description: 'Central Inverter MPPT Tracker 2 output dropped by 33% during peak solar irradiance (1000 W/m²).',
          circuitState: 'MPPT Input 2 connects 3 parallel strings (String 1, 2, 3) of 20 PV modules in series (V_oc = 1000V DC).',
          measuredData: 'String 1 current = 9.2A, String 2 current = 9.1A, String 3 current = 0.0A.',
          analysisText: 'String 3 generates zero current despite full solar radiation, indicating complete open circuit in String 3 branch.',
          actionText: 'Safely isolate String 3 isolator switch and perform VOC and insulation resistance testing.'
        },
        {
          stepTitle: 'Step 2: String Circuit Tracing & Diode Testing',
          description: 'Trace PV string circuit to locate broken inter-module connector or blown string fuse.',
          circuitState: 'String 3 combiner box branch: 15A DC Fuse → MC4 Connectors → PV Modules 1..20.',
          measuredData: 'String 3 open-circuit voltage Voc = 1000V DC (Normal). Continuity test across 15A DC fuse shows OPEN (blown).',
          analysisText: 'Blown DC string fuse caused by transient reverse current or short circuit in Module bypass diode.',
          actionText: 'Test bypass diodes of modules in String 3 before replacing fuse.'
        },
        {
          stepTitle: 'Step 3: Diode Replacement & String Re-commissioning',
          description: 'Replaced shorted bypass diode in Module #14 and installed new 15A 1000V gPV DC fuse.',
          circuitState: 'String 3 fully restored to parallel MPPT busbar.',
          measuredData: 'String 1 = 9.2A, String 2 = 9.1A, String 3 = 9.2A. Total MPPT 2 current = 27.5A.',
          analysisText: 'Inverter MPPT 2 output restored to 100% (27.5kW DC input).',
          actionText: 'COMMISSIONED: Thermal imaging inspection verified no hotspot in Module #14.'
        }
      ]
    },
    {
      id: 'case4_plc',
      title: 'Factory PLC Power Distribution Panel Fault',
      icon: <Cpu className="w-4 h-4 text-indigo-400" />,
      industry: 'Automotive Robotic Assembly Line',
      steps: [
        {
          stepTitle: 'Step 1: Intermittent PLC Reset & Bus Undervoltage',
          description: 'Main PLC controller reboots randomly when high-power solenoid valves cycle on the 24V DC bus.',
          circuitState: '24V 40A Switched Mode Power Supply (SMPS) feeding PLC CPU, Sensors, and Solenoid Valves via shared busbar.',
          measuredData: 'Static bus voltage = 24.0V DC. Transient oscilloscope capture during solenoid activation drops to 16.8V DC for 45ms.',
          analysisText: 'Transient voltage sag below 18.0V DC triggers internal brownout reset circuit of PLC CPU.',
          actionText: 'Analyze DC bus impedance and separate sensitive CPU power from inductive solenoid load.'
        },
        {
          stepTitle: 'Step 2: Network Separation & Decoupling Calculation',
          description: 'Apply Kirchhoff’s Voltage and Current Laws to redesign power distribution branches.',
          circuitState: 'Modified Architecture: Dedicated 24V SMPS for PLC CPU + Decoupling diode/capacitor filter; Separate 24V SMPS for Solenoids.',
          measuredData: 'Solenoid inrush current peak = 28A at di/dt = 500 A/ms.',
          analysisText: 'Inductive solenoid switching (V = L di/dt) creates high back-EMF spikes that propagate through shared DC rail.',
          actionText: 'Install flywheel suppression diodes across solenoid coils and split power rails.'
        },
        {
          stepTitle: 'Step 3: System Stability Verification',
          description: 'Installed flywheel diodes across all inductive solenoid valves and split DC supply rails.',
          circuitState: 'Independent Dual DC Bus: Solenoid bus transient sag remains localized to Solenoid rail.',
          measuredData: 'PLC CPU rail voltage stays steady at 24.0V ± 0.1V DC during continuous solenoid cycling.',
          analysisText: 'Zero brownout resets observed over 24-hour continuous production run.',
          actionText: 'RESOLVED: Updated electrical schematics and standard operating procedure.'
        }
      ]
    }
  ],
  hi: [
    {
      id: 'case1_relay',
      title: 'औद्योगिक नियंत्रण रिले वोल्टेज ड्रॉप फॉल्ट',
      icon: <Factory className="w-4 h-4 text-cyan-400" />,
      industry: 'मैन्युफैक्चरिंग प्लांट कंट्रोल पैनल',
      steps: [
        {
          stepTitle: 'चरण 1: देखे गए लक्षण एवं शिकायत',
          description: 'PLC डिजिटल आउटपुट द्वारा ट्रिगर किए जाने पर 24V DC हैवी-ड्यूटी रिले सक्रिय नहीं होता है।',
          circuitState: 'नियंत्रण परिपथ: 24V DC सप्लाई → 100m केबल → रिले कॉइल (मानक प्रतिरोध 120 Ω, न्यूनतम पिकअप 19.2V)।',
          measuredData: 'PLC आउटपुट टर्मिनल पर वोल्टेज: 24.1V DC। ट्रिगर के समय रिले कॉइल पर वोल्टेज: 16.2V DC।',
          analysisText: 'रिले कॉइल पर वोल्टेज (16.2V) आवश्यक 19.2V से काफी कम है, जिससे रिले ऑन नहीं हो पाता।',
          actionText: 'केबल लूप प्रतिरोध और टर्मिनल ड्रॉप मापने के लिए आगे बढ़ें।'
        },
        {
          stepTitle: 'चरण 2: डायग्नोस्टिक माप एवं विश्लेषण',
          description: 'ओम के नियम का उपयोग करके वोल्टेज हानि के स्थान की पहचान करें।',
          circuitState: 'कुल श्रेणी परिपथ: Vs (24V) = I × (R_cable + R_coil)। कॉइल धारा I = 16.2V / 120Ω = 0.135A।',
          measuredData: 'मापा गया केबल प्रतिरोध R_cable = (24.1V - 16.2V) / 0.135A = 58.5 Ω।',
          analysisText: 'सामान्य केबल प्रतिरोध लगभग 4.8 Ω होना चाहिए। 58.5 Ω अत्यधिक टर्मिनल जंग या ढीले कनेक्शन को दर्शाता है।',
          actionText: 'टर्मिनल स्ट्रिप की जांच करें और ढीले कनेक्शन को ठीक करें।'
        },
        {
          stepTitle: 'चरण 3: मूल कारण सुधार एवं सत्यापन',
          description: 'टर्मिनल ब्लॉक TB2-14 पर ढीला कनेक्शन और जंग पाया गया।',
          circuitState: 'मरम्मत के बाद: केबल प्रतिरोध 4.8 Ω पर बहाल हुआ।',
          measuredData: 'नया कॉइल वोल्टेज: V_coil = 23.08V DC। कॉइल धारा = 0.192A।',
          analysisText: 'रिले को 23.08V (> 19.2V) प्राप्त होता है और वह 15ms के भीतर तुरंत ऑन हो जाता है।',
          actionText: 'मरम्मत पूर्ण: टर्मिनलों को कस दिया गया और जंग-रोधी स्प्रे लगाया गया।'
        }
      ]
    },
    {
      id: 'case2_battery',
      title: 'सबस्टेशन डीसी बैटरी बैंक करंट असंतुलन',
      icon: <BatteryCharging className="w-4 h-4 text-emerald-400" />,
      industry: 'सबस्टेशन 110V DC सहायक पावर',
      steps: [
        {
          stepTitle: 'चरण 1: अलार्म एवं प्रारंभिक लक्षण',
          description: 'सबस्टेशन डीसी रिले में "बैटरी स्ट्रिंग करंट असंतुलन" अलार्म बजता है।',
          circuitState: 'मुख्य DC बसबार से जुड़ी दो समानांतर 110V लेड-एसिड बैटरी स्ट्रिंग्स (स्ट्रिंग A और B)।',
          measuredData: 'कुल चार्जिंग धारा = 10.0A। स्ट्रिंग A = 8.8A, स्ट्रिंग B = 1.2A।',
          analysisText: 'समानांतर शाखाओं में धारा समान (~5.0A) होनी चाहिए। असंतुलन स्ट्रिंग B में उच्च आंतरिक प्रतिरोध दर्शाता है।',
          actionText: 'स्ट्रिंग B को अलग करें और सेल-वार प्रतिरोध परीक्षण करें।'
        },
        {
          stepTitle: 'चरण 2: बैटरी सेल विश्लेषण',
          description: 'खराब बैटरी सेल की पहचान के लिए इंटरनल रेजिस्टेंस टेस्ट।',
          circuitState: 'स्ट्रिंग B में श्रेणी में 55 सेल हैं।',
          measuredData: 'स्ट्रिंग B में सेल #28 का वोल्टेज 1.82V (सामान्य 2.25V) और आंतरिक प्रतिरोध 45mΩ (सामान्य 2.5mΩ) मिला।',
          analysisText: 'सेल #28 में सल्फेशन के कारण 42.5mΩ का अतिरिक्त प्रतिरोध उत्पन्न हुआ है जिससे धारा 80% घट गई है।',
          actionText: 'खराब सेल #28 को बदलें।'
        },
        {
          stepTitle: 'चरण 3: प्रणाली की पूर्ण बहाली',
          description: 'सेल #28 को नए 2.25V सेल से बदला गया।',
          circuitState: 'स्ट्रिंग B का प्रतिरोध सामान्य स्तर पर आ गया।',
          measuredData: 'चार्जिंग धारा: स्ट्रिंग A = 5.05A, स्ट्रिंग B = 4.95A।',
          analysisText: 'सबस्टेशन डीसी बसबार पूरी तरह से संतुलित और स्थिर हो गया।',
          actionText: 'प्रणाली बहाल: अलार्म रीसेट हो गया और बैटरी बैंक सामान्य स्थिति में है।'
        }
      ]
    },
    {
      id: 'case3_solar',
      title: 'सोलर पीवी ऐरे डीसी स्ट्रिंग ट्रबलशूटिंग',
      icon: <Sun className="w-4 h-4 text-amber-400" />,
      industry: 'व्यावसायिक 500kW सोलर पावर प्लांट',
      steps: [
        {
          stepTitle: 'चरण 1: इनवर्टर डीसी इनपुट पावर में गिरावट',
          description: 'पीक धूप के दौरान इनवर्टर MPPT 2 का आउटपुट 33% घट जाता है।',
          circuitState: 'MPPT 2 में 3 समानांतर स्ट्रिंग्स जुड़ी हैं (प्रत्येक में 20 पीवी मॉड्यूल)।',
          measuredData: 'स्ट्रिंग 1 धारा = 9.2A, स्ट्रिंग 2 धारा = 9.1A, स्ट्रिंग 3 धारा = 0.0A।',
          analysisText: 'धूप होने के बावजूद स्ट्रिंग 3 में शून्य धारा पूर्ण ओपन-सर्किट फॉल्ट दर्शाती है।',
          actionText: 'स्ट्रिंग 3 का आइसोलेटर बंद करें और VOC परीक्षण करें।'
        },
        {
          stepTitle: 'चरण 2: स्ट्रिंग ट्रैसिंग एवं फ्यूज परीक्षण',
          description: 'टूटे हुए कनेक्टर या जले हुए फ्यूज का पता लगाएं।',
          circuitState: 'स्ट्रिंग 3 कंबाइनर बॉक्स: 15A DC फ्यूज → पीवी मॉड्यूल।',
          measuredData: 'स्ट्रिंग 3 ओपन सर्किट वोल्टेज Voc = 1000V DC। 15A DC फ्यूज जला हुआ (OPEN) मिला।',
          analysisText: 'बायपास डायोड में शॉर्ट-सर्किट के कारण अत्यधिक रिवर्स धारा से फ्यूज उड़ गया।',
          actionText: 'मॉड्यूल बायपास डायोड की जांच करें।'
        },
        {
          stepTitle: 'चरण 3: डायोड प्रतिस्थापन एवं re-commissioning',
          description: 'मॉड्यूल #14 में शॉर्ट हुए डायोड को बदला गया और नया 15A फ्यूज लगाया गया।',
          circuitState: 'स्ट्रिंग 3 पूरी तरह से चालू स्थिति में।',
          measuredData: 'स्ट्रिंग 1 = 9.2A, स्ट्रिंग 2 = 9.1A, स्ट्रिंग 3 = 9.2A। कुल धारा = 27.5A।',
          analysisText: 'इनवर्टर आउटपुट 100% पर बहाल (27.5kW DC)।',
          actionText: 'सत्यापित: थर्मल इमेजिंग से कोई हॉटस्पॉट नहीं पाया गया।'
        }
      ]
    },
    {
      id: 'case4_plc',
      title: 'फैक्ट्री पीएलसी पावर डिस्ट्रीब्यूशन पैनल फॉल्ट',
      icon: <Cpu className="w-4 h-4 text-indigo-400" />,
      industry: 'ऑटोमोटिव रोबोटिक असेंबली लाइन',
      steps: [
        {
          stepTitle: 'चरण 1: अनपेक्षित पीएलसी रीसेट एवं अंडरवोल्टेज',
          description: '24V DC बस पर सोलेनोइड वाल्व चालू होने पर मुख्य PLC रीसेट हो जाता है।',
          circuitState: '24V 40A पावर सप्लाई (SMPS) से PLC और सोलेनोइड वाल्व दोनों जुड़े हैं।',
          measuredData: 'सामान्य बस वोल्टेज = 24.0V DC। सोलेनोइड चालू होने पर क्षणिक ड्रॉप = 16.8V DC।',
          analysisText: '18.0V से नीचे वोल्टेज ड्रॉप होने पर PLC का ब्राउनआउट सर्किट रीसेट ट्रिगर कर देता है।',
          actionText: 'संवेदनशील PLC पावर को सोलेनोइड लोड से अलग करें।'
        },
        {
          stepTitle: 'चरण 2: परिपथ पृथक्करण एवं नेटवर्क संशोधन',
          description: 'पावर वितरण शाखाओं को अलग करने के लिए KCL/KVL का अनुप्रयोग।',
          circuitState: 'संशोधित संरचना: PLC के लिए अलग 24V SMPS तथा सोलेनोइड के लिए अलग SMPS।',
          measuredData: 'सोलेनोइड इनरश धारा पिक = 28A।',
          analysisText: 'सोलेनोइड स्विचिंग (V = L di/dt) से उच्च बैक-EMF स्पाइक्स उत्पन्न होती हैं जो साझा DC रेल को प्रभावित करती हैं।',
          actionText: 'सोलेनोइड कॉइल पर फ्लाईव्हील डायोड लगाएं।'
        },
        {
          stepTitle: 'चरण 3: प्रणाली स्थिरता सत्यापन',
          description: 'सभी सोलेनोइड वाल्वों पर फ्लाईव्हील डायोड लगाए गए और DC बस अलग की गई।',
          circuitState: 'स्वतंत्र दोहरी DC बस प्रणाली।',
          measuredData: 'सोलेनोइड चलने के दौरान PLC बस वोल्टेज 24.0V ± 0.1V पर स्थिर रहता है।',
          analysisText: '24 घंटे के निरंतर उत्पादन रन में कोई रीसेट नहीं हुआ।',
          actionText: 'समस्या हल: इलेक्ट्रिक ड्राइंग को अपडेट किया गया।'
        }
      ]
    }
  ],
  bn: [
    {
      id: 'case1_relay',
      title: 'শিল্প সলিনয়েড রিলে ভোল্টেজ ড্রপ ফল্ট',
      icon: <Factory className="w-4 h-4 text-cyan-400" />,
      industry: 'উৎপাদন প্ল্যান্ট কন্ট্রোল প্যানেল',
      steps: [
        {
          stepTitle: 'ধাপ ১: লক্ষণ ও সমস্যা বিবরণ',
          description: 'PLC ডিজিটাল আউটপুট দ্বারা কমান্ড দিলেও ২৪V DC ইন্ডাস্ট্রিয়াল রিলে চালু হয় না।',
          circuitState: 'কন্ট্রোল লুপ: ২৪V DC সোর্স → ১০০ মি কেবল → রিলে কয়েল (রেজিস্ট্যান্স ১২০ Ω, পিকআপ ভোল্টেজ ১৯.২V)।',
          measuredData: 'PLC প্যানেল আউটপুটে ভোল্টেজ: ২৪.১V DC। ট্রিপের সময় রিলে কয়েল টার্মিনালে ভোল্টেজ: ১৬.২V DC।',
          analysisText: 'রিলে কয়েলে ভোল্টেজ (১৬.২V) প্রয়োজনীয় ১৯.২V থেকে কম হওয়ায় কয়েল এনাবলে ব্যর্থ হচ্ছে।',
          actionText: 'কেবল রেজিস্ট্যান্স ও কন্টাক্ট ড্রপ পরিমাপ শুরু করুন।'
        },
        {
          stepTitle: 'ধাপ ২: পরিমাপ ও কেবল বিশ্লেষণ',
          description: 'ওহমের সূত্র ব্যবহার করে ভোল্টেজ হ্রাসের উৎস শনাক্তকরণ।',
          circuitState: 'মোট সার্কিট: Vs (২৪V) = I × (R_cable + R_coil)। কয়েল কারেন্ট I = ১৬.২V / ১২০Ω = ০.১৩৫A।',
          measuredData: 'পরিমাপকৃত কেবল লুপ রেজিস্ট্যান্স R_cable = (২৪.১V - ১৬.২V) / ০.১৩৫A = ৫৮.৫ Ω।',
          analysisText: 'স্বাভাবিক কেবল রেজিস্ট্যান্স হওয়া উচিত ~৪.৮ Ω। ৫৮.৫ Ω মান ঢিলে সংযোগ বা কন্টাক্ট জারণ নির্দেশ করে।',
          actionText: 'টার্মিনাল কানেক্টর চেক করুন ও কানেকশন শক্ত করুন।'
        },
        {
          stepTitle: 'ধাপ ৩: মূল কারণ সংশোধন ও যাচাইকরণ',
          description: 'টার্মিনাল ব্লক TB2-14 তে লুজ কানেকশন ও জারণ পাওয়া গেছে।',
          circuitState: 'মেরামতের পর: কেবল রেজিস্ট্যান্স ৪.৮ Ω এ ফিরে এসেছে।',
          measuredData: 'নতুন কয়েল ভোল্টেজ: V_coil = ২৩.০৮V DC। কয়েল কারেন্ট = ০.১৯২A।',
          analysisText: 'রিলে ২৩.০৮V (> ১৯.২V) ভোল্টেজ পেয়ে ১৫ms এর মধ্যে সঠিকভাবে কাজ শুরু করেছে।',
          actionText: 'সংশোধন সম্পন্ন: টার্মিনাল টাইট করা হয়েছে ও অ্যান্টি-করোশন স্প্রে প্রয়োগ করা হয়েছে।'
        }
      ]
    },
    {
      id: 'case2_battery',
      title: 'সাবস্টেশন ডিসি ব্যাটারি ব্যাংক কারেন্ট অসামঞ্জস্য',
      icon: <BatteryCharging className="w-4 h-4 text-emerald-400" />,
      industry: 'সাবস্টেশন ১১০V DC ব্যাকআপ পাওয়ার',
      steps: [
        {
          stepTitle: 'ধাপ ১: অ্যালার্ম ও লক্ষণ',
          description: 'সাবস্টেশন ডিসি মনিটরিং রিলেতে "ব্যাটারি স্ট্রিং কারেন্ট ইমব্যালেন্স" অ্যালার্ম ট্রিগার করেছে।',
          circuitState: 'মূল ১১০V DC বাসবারে যুক্ত দুটি প্যারালাল ব্যাটারি স্ট্রিং (স্ট্রিং A ও স্ট্রিং B)।',
          measuredData: 'মোট চার্জিং কারেন্ট = ১০.০A। স্ট্রিং A কারেন্ট = ৮.৮A, স্ট্রিং B কারেন্ট = ১.২A।',
          analysisText: 'প্যারালাল ব্রাঞ্চে কারেন্ট সমান (~৫.০A) হওয়া উচিত। অসামঞ্জস্য স্ট্রিং B তে উচ্চ অভ্যন্তরীণ বাধা নির্দেশ করে।',
          actionText: 'স্ট্রিং B ডিসকানেক্ট করে সেলভিত্তিক রেজিস্ট্যান্স টেস্ট করুন।'
        },
        {
          stepTitle: 'ধাপ ২: ব্যাটারি সেল বিশ্লেষণ',
          description: 'অভ্যন্তরীণ বাধা পরীক্ষার মাধ্যমে ত্রুটিযুক্ত সেল শনাক্তকরণ।',
          circuitState: 'স্ট্রিং B তে সিরিজে ৫৫টি সেল রয়েছে।',
          measuredData: 'স্ট্রিং B এর সেল #২৮ এর ভোল্টেজ ১.৮২V (স্বাভাবিক ২.২৫V) ও রেজিস্ট্যান্স ৪৫mΩ (স্বাভাবিক ২.৫mΩ)।',
          analysisText: 'সেল #২৮ এ সালফেশনের কারণে অতিরিক্ত ৪২.৫mΩ রেজিস্ট্যান্স তৈরি হওয়ায় স্ট্রিং B এর কারেন্ট ৮০% কমে গেছে।',
          actionText: 'ত্রুটিযুক্ত সেল #২৮ পরিবর্তন করুন।'
        },
        {
          stepTitle: 'ধাপ ৩: সিস্টেম পুনঃস্থাপন',
          description: 'সেল #২৮ এর স্থানে নতুন ২.২৫V সেল স্থাপন করা হলো।',
          circuitState: 'স্ট্রিং B এর মোট বাধা স্বাভাবিক অবস্থায় ফিরে এসেছে।',
          measuredData: 'চার্জিং কারেন্ট: স্ট্রিং A = ৫.০৫A, স্ট্রিং B = ৪.৯৫A। কারেন্ট অসামঞ্জস্য < ২%।',
          analysisText: 'সাবস্টেশন ডিসি সহায়ক পাওয়ার শতভাগ সক্ষমতায় ফিরে এসেছে।',
          actionText: 'রিস্টোর সম্পন্ন: অ্যালার্ম রিয়েল-টাইমে রিসেট হয়েছে।'
        }
      ]
    },
    {
      id: 'case3_solar',
      title: 'সোলার পিভি অ্যারে ডিসি স্ট্রিং ট্রাবলশুটিং',
      icon: <Sun className="w-4 h-4 text-amber-400" />,
      industry: 'বাণিজ্যিক ৫০০kW সোলার প্ল্যান্ট',
      steps: [
        {
          stepTitle: 'ধাপ ১: ইনভার্টার ইনপুট পাওয়ার ড্রপ',
          description: 'পূর্ণ সূর্যালোকের সময় ইনভার্টার MPPT 2 এর আউটপুট ৩৩% কমে গেছে।',
          circuitState: 'MPPT 2 তে ৩টি প্যারালাল স্ট্রিং যুক্ত (প্রতিটিতে ২০টি পিভি মডিউল)।',
          measuredData: 'স্ট্রিং ১ কারেন্ট = ৯.২A, স্ট্রিং ২ কারেন্ট = ৯.১A, স্ট্রিং ৩ কারেন্ট = ০.০A।',
          analysisText: 'সূর্যালোক থাকা সত্ত্বেও স্ট্রিং ৩ এ শূন্য কারেন্ট সম্পূর্ণ ওপেন সার্কিট ফল্ট নির্দেশ করে।',
          actionText: 'স্ট্রিং ৩ এর আইসোলেটার বন্ধ করে Voc পরীক্ষা করুন।'
        },
        {
          stepTitle: 'ধাপ ২: স্ট্রিং সার্কিট ট্র্যাকিং ও ফিউজ টেস্ট',
          description: 'কাটা কানেক্টর বা জ্বলে যাওয়া ফিউজ খুঁজে বের করা।',
          circuitState: 'স্ট্রিং ৩ কম্বাইনার বক্স: ১৫A DC ফিউজ → পিভি মডিউল।',
          measuredData: 'স্ট্রিং ৩ ওপেন সার্কিট ভোল্টেজ Voc = ১০০০V DC। ১৫A DC ফিউজ কাটা (OPEN) পাওয়া গেছে।',
          analysisText: 'বাইপাস ডায়োড শর্ট হওয়ার কারণে বিপরীত কারেন্ট প্রবাহে ফিউজ পুড়ে গেছে।',
          actionText: 'মডিউল বাইপাস ডায়োড পরীক্ষা করুন।'
        },
        {
          stepTitle: 'ধাপ ৩: ডায়োড পরিবর্তন ও রিকমিশনিং',
          description: 'মডিউল #১৪ এর শর্ট ডায়োড পরিবর্তন করা হলো এবং নতুন ১৫A ফিউজ লাগানো হলো।',
          circuitState: 'স্ট্রিং ৩ পুনরায় সচল।',
          measuredData: 'স্ট্রিং ১ = ৯.২A, স্ট্রিং ২ = ৯.১A, স্ট্রিং ৩ = ৯.২A। মোট কারেন্ট = ২৭.৫A।',
          analysisText: 'ইনভার্টার ইনপুট ১০০% এ রিস্টোর হয়েছে (২৭.৫kW DC)।',
          actionText: 'যাচাইকৃত: থার্মাল ইমেজিং এ কোনো হটস্পট পাওয়া যায়নি।'
        }
      ]
    },
    {
      id: 'case4_plc',
      title: 'ফ্যাক্টরি পিএলসি পাওয়ার ডিস্ট্রিবিউশন প্যানেল ফল্ট',
      icon: <Cpu className="w-4 h-4 text-indigo-400" />,
      industry: 'অটোমোটিভ রোবোটিক অ্যাসেম্বলি লাইন',
      steps: [
        {
          stepTitle: 'ধাপ ১: আচমকা পিএলসি রিস্টার্ট ও ভোল্টেজ ড্রপ',
          description: '২৪V DC বাসে সলিনয়েড ভালভ চালু হলেই প্রধান PLC রিবুট নেয়।',
          circuitState: '২৪V ৪০A SMPS সোর্স থেকে PLC ও সলিনয়েড উভয়ই পাওয়ার নেয়।',
          measuredData: 'স্বাভাবিক বাস ভোল্টেজ = ২৪.০V DC। সলিনয়েড চালুর সময় ক্ষণস্থায়ী ড্রপ = ১৬.৮V DC।',
          analysisText: '১৮.০V এর নিচে ভোল্টেজ ড্রপ হলে PLC এর ব্রাউনআউট সার্কিট রিস্টার্ট ট্রিগার করে।',
          actionText: 'PLC পাওয়ার লাইন সলিনয়েড লোড থেকে আলাদা করুন।'
        },
        {
          stepTitle: 'ধাপ ২: সার্কিট পৃথকীকরণ ও ডিকাপলিং',
          description: 'KCL/KVL নীতি প্রয়োগ করে পাওয়ার ব্রাঞ্চ আলাদা করা।',
          circuitState: 'নতুন বিন্যাস: PLC এর জন্য আলাদা ২৪V SMPS এবং সলিনয়েডের জন্য আলাদা SMPS।',
          measuredData: 'সলিনয়েড স্টার্টিং ইনরাশ কারেন্ট পিক = ২৮A।',
          analysisText: 'সলিনয়েড স্যুইচিং (V = L di/dt) এর সময় তৈরি ব্যাক-EMF স্পাইক যৌথ DC লাইনকে বিকৃত করে।',
          actionText: 'সলিনয়েড কয়েলে ফ্লাইহুইল ডায়োড যুক্ত করুন।'
        },
        {
          stepTitle: 'ধাপ ৩: সিস্টেম স্থায়িত্ব পরীক্ষা',
          description: 'সব সলিনয়েড ভালভে ফ্লাইহুইল ডায়োড লাগানো হলো এবং DC বাস আলাদা করা হলো।',
          circuitState: 'স্বাধীন ডুয়াল DC বাস সিস্টেম।',
          measuredData: 'সলিনয়েড চালুর সময়ও PLC লাইনে ভোল্টেজ ২৪.০V ± ০.১V এ স্থির থাকে।',
          analysisText: '২৪ ঘণ্টা টানা উৎপাদনে কোনো অনাকাঙ্ক্ষিত রিস্টার্ট ঘটেনি।',
          actionText: 'সমাধান সম্পন্ন: ইলেকট্রিক্যাল ড্রয়িং আপডেট করা হয়েছে।'
        }
      ]
    }
  ]
};

export const DCPracticalCaseStudyAnimation: React.FC<Props> = ({ currentLanguage }) => {
  const cases = CASE_STUDIES[currentLanguage] || CASE_STUDIES.en;

  const [activeCaseId, setActiveCaseId] = useState<CaseStudyId>('case1_relay');
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const currentCase = cases.find((c) => c.id === activeCaseId) || cases[0];
  const step = currentCase.steps[currentStepIndex] || currentCase.steps[0];
  const totalSteps = currentCase.steps.length;

  const handleSelectCase = (id: CaseStudyId) => {
    setActiveCaseId(id);
    setCurrentStepIndex(0);
  };

  const handleNextStep = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
  };

  return (
    <div className="p-4 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 text-white space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider mb-1">
            <Wrench className="w-4 h-4" />
            <span>Chapter 4 • Lesson 18 Industrial Case Studies</span>
          </div>
          <h3 className="text-xl font-bold font-display text-white">Practical DC Engineering Case Studies</h3>
          <p className="text-xs text-slate-400 mt-0.5">Interactive step-by-step diagnostic workflows for real-world industrial DC electrical problems.</p>
        </div>

        <button
          onClick={handleReset}
          aria-label="Reset Case Study"
          className="print:hidden px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono font-medium transition-colors motion-reduce:transition-none flex items-center gap-1.5 self-start sm:self-auto border border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Case Study</span>
        </button>
      </div>

      {/* Case Study Selection Grid */}
      <div className="print:hidden space-y-2">
        <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
          Select Industrial Application Case Study
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {cases.map((c) => (
            <button
              key={c.id}
              onClick={() => handleSelectCase(c.id)}
              aria-label={c.title}
              aria-pressed={activeCaseId === c.id}
              className={`p-3 rounded-xl text-left transition-all motion-reduce:transition-none border space-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                activeCaseId === c.id
                  ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500 shadow-md shadow-cyan-950'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-2">
                {c.icon}
                <span className="text-[10px] font-mono text-slate-400 uppercase truncate">{c.industry}</span>
              </div>
              <div className="text-xs font-bold font-display line-clamp-2">{c.title}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Case Header & Progress Indicator */}
      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            {currentCase.icon}
            <div>
              <div className="text-[10px] font-mono text-cyan-400 uppercase">{currentCase.industry}</div>
              <h4 className="text-base font-bold font-display text-white">{currentCase.title}</h4>
            </div>
          </div>

          <div className="text-xs font-mono px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 self-start sm:self-auto">
            Step <strong className="text-cyan-400">{currentStepIndex + 1}</strong> of <strong>{totalSteps}</strong>
          </div>
        </div>

        {/* Step Navigation Dots */}
        <div className="flex items-center gap-2 pt-1">
          {currentCase.steps.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 flex-1 rounded-full transition-all motion-reduce:transition-none ${
                idx === currentStepIndex
                  ? 'bg-cyan-400'
                  : idx < currentStepIndex
                  ? 'bg-emerald-500'
                  : 'bg-slate-800'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Step Content Visual Card */}
      <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h5 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wide flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>{step.stepTitle}</span>
          </h5>
          {currentStepIndex === totalSteps - 1 && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-bold uppercase">
              Case Solved
            </span>
          )}
        </div>

        <p className="text-xs text-slate-200 font-medium leading-relaxed bg-slate-900 p-3 rounded-lg border border-slate-800">
          {step.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
          <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1">
            <span className="text-[10px] text-slate-400 uppercase font-bold">Circuit Architecture & State:</span>
            <p className="text-slate-300 leading-relaxed">{step.circuitState}</p>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1">
            <span className="text-[10px] text-cyan-400 uppercase font-bold">Field Measured Readings:</span>
            <p className="text-cyan-200 leading-relaxed font-bold">{step.measuredData}</p>
          </div>
        </div>

        <div className="p-3.5 rounded-lg bg-indigo-950/40 border border-indigo-800/60 space-y-1 text-xs">
          <span className="text-[10px] font-mono text-indigo-300 uppercase font-bold">Engineering Circuit Analysis:</span>
          <p className="text-indigo-200 leading-relaxed font-mono">{step.analysisText}</p>
        </div>

        <div className="p-3.5 rounded-lg bg-emerald-950/40 border border-emerald-800/60 space-y-1 text-xs">
          <span className="text-[10px] font-mono text-emerald-300 uppercase font-bold flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Recommended Engineering Action:</span>
          </span>
          <p className="text-emerald-200 leading-relaxed font-mono">{step.actionText}</p>
        </div>
      </div>

      {/* Step Control Buttons */}
      <div className="print:hidden flex items-center justify-between gap-4 pt-2 border-t border-slate-800">
        <button
          onClick={handlePrevStep}
          disabled={currentStepIndex === 0}
          aria-label="Previous Diagnostic Step"
          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all motion-reduce:transition-none flex items-center gap-2 border focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
            currentStepIndex === 0
              ? 'opacity-40 cursor-not-allowed bg-slate-950 text-slate-600 border-slate-800'
              : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous Step</span>
        </button>

        <button
          onClick={handleNextStep}
          disabled={currentStepIndex === totalSteps - 1}
          aria-label="Next Diagnostic Step"
          className={`px-5 py-2 rounded-xl text-xs font-mono font-bold transition-all motion-reduce:transition-none flex items-center gap-2 border focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
            currentStepIndex === totalSteps - 1
              ? 'opacity-40 cursor-not-allowed bg-slate-950 text-slate-600 border-slate-800'
              : 'bg-cyan-600 hover:bg-cyan-500 text-white border-cyan-500 shadow-md shadow-cyan-950'
          }`}
        >
          <span>Next Diagnostic Step</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
