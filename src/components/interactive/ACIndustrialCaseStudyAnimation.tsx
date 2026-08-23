import React, { useState, useId } from 'react';
import { 
  RotateCcw, 
  Cpu, 
  Zap, 
  Activity, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Thermometer, 
  Sliders,
  Flame,
  FileText
} from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface ACIndustrialCaseStudyAnimationProps {
  currentLanguage: Language;
}

type CaseStudyTab = 'motor' | 'pfc' | 'distribution' | 'troubleshooting';
type CapBankConfig = 'delta' | 'star' | 'single';

const TRANSLATIONS = {
  en: {
    title: 'Industrial AC Engineering & Diagnostics Lab',
    subtitle: 'Comprehensive capstone simulation: Analyze 3-phase industrial induction motors, size automated power factor correction (APFC) capacitor banks, calculate power distribution parameters, and follow a structured 10-step troubleshooting protocol.',
    tabMotor: 'Case 1: AC Induction Motor',
    tabPfc: 'Case 2: APFC Capacitor Sizing',
    tabDist: 'Case 3: 3-Phase Distribution',
    tabTrouble: 'Case 4: Troubleshooting Flow',
    resetBtn: 'Reset to Defaults',

    // Motor Tab
    motorTitle: 'Three-Phase Industrial Induction Motor Analysis',
    pOutLabel: 'Shaft Output Power P_out (kW)',
    efficiencyLabel: 'Motor Efficiency η (%)',
    vLineLabel: 'Supply Line Voltage V_L (V)',
    pfLabel: 'Operating Power Factor (cos φ)',
    motorPIn: 'Electrical Input Power (P_in)',
    motorCurrent: 'Full-Load Line Current (I_L)',
    motorApparent: 'Apparent Power (S)',
    motorReactive: 'Reactive Power Demand (Q)',
    motorPhaseIStar: 'Phase Current (Star-run):',
    motorPhaseIDelta: 'Phase Current (Delta-run):',
    motorInsight: 'Engineering Insight: An induction motor operating below 0.85 PF draws substantially higher line current, causing severe I²R conductor heating and voltage drops along distribution feeders.',

    // PFC Tab
    pfcTitle: 'Industrial APFC Capacitor Bank Sizing',
    pfcKWLabel: 'Connected Active Load P (kW)',
    pfcInitialPf: 'Initial Power Factor (cos φ₁)',
    pfcTargetPf: 'Target Power Factor (cos φ₂)',
    pfcFreqLabel: 'Grid Frequency f (Hz)',
    pfcBankConfig: 'Capacitor Bank Topology',
    pfcDelta: '3-Phase Delta (Δ) Connected Bank (Standard)',
    pfcStar: '3-Phase Star (Y) Connected Bank',
    pfcSingle: 'Single-Phase Bank',
    pfcQ1: 'Initial Reactive Power (Q₁)',
    pfcQ2: 'Target Reactive Power (Q₂)',
    pfcQc: 'Required Compensation (Q_c)',
    pfcCapPerPhase: 'Capacitance per Phase (C)',
    pfcCurrentSaved: 'Line Current Reduction (ΔI_L)',
    pfcKvaReleased: 'Transformer Capacity Released (ΔS)',
    pfcInsight: 'Delta-connected capacitor banks are universally preferred in industry because each capacitor operates at full line voltage V_L, reducing the required microfarad (μF) capacitance by a factor of 3 compared to Star banks for the exact same kVAR rating.',

    // Distribution Tab
    distTitle: 'Three-Phase Distribution Feeder Analysis',
    distVl: 'Line Voltage V_L (V)',
    distIl: 'Feeder Current I_L (A)',
    distPf: 'Load Power Factor (cos φ)',
    distPfType: 'Load Characteristic',
    distLag: 'Lagging (Inductive - Motors, Chチルlers)',
    distLead: 'Leading (Overexcited synchronous / Cable capacitance)',
    distActiveP: 'Active Power (P)',
    distReactiveQ: 'Reactive Power (Q)',
    distApparentS: 'Apparent Power (S)',
    distZeq: 'Equivalent Load Impedance / Phase',
    distInsight: 'In 3-phase balanced distribution, feeder line losses are proportional to I_L² = P² / (3 · V_L² · PF²). Improving power factor from 0.75 to 0.95 reduces feeder I²R power losses by over 37%!',

    // Troubleshooting Tab
    troubleTitle: 'Standard 10-Step Industrial AC Troubleshooting Protocol',
    stepOf: 'Step',
    prevStep: 'Previous Step',
    nextStep: 'Next Step',
    safetyWarning: 'CRITICAL SAFETY MANDATE: Always isolate power, apply Lockout/Tagout (LOTO), and verify absence of voltage with a calibrated CAT III/IV meter before touching terminals.',
    stepWhat: 'What to Inspect',
    stepWhy: 'Engineering Significance',
    stepExpected: 'Nominal Expected Result',
    stepFault: 'Potential Fault / Action Required',

    steps: [
      {
        name: '1. Supply Voltage Verification',
        what: 'Measure Line-to-Line (V_RY, V_YB, V_BR) and Line-to-Neutral (V_RN, V_YN, V_BN) voltages at the incoming main breaker.',
        why: 'Confirms that the utility grid supply is within statutory voltage tolerance (typically ±6% to ±10%).',
        expected: '400 V ± 6% (Line-to-Line) and 230 V ± 6% (Line-to-Neutral).',
        fault: 'Under-voltage (< 376 V) triggers motor stalling and overheating; over-voltage causes magnetic core saturation.'
      },
      {
        name: '2. Supply Frequency Verification',
        what: 'Measure grid frequency with a calibrated True-RMS digital multimeter or power quality analyzer.',
        why: 'AC induction motor synchronous speed Ns = 120f / P is directly locked to supply frequency.',
        expected: '50.0 Hz ± 0.5 Hz (or 60.0 Hz in North America).',
        fault: 'Frequency deviations indicate generator governor malfunction or microgrid synchronization failure.'
      },
      {
        name: '3. Phase Sequence & Rotation Verification',
        what: 'Connect a digital Phase Sequence Meter across terminals R, Y, B.',
        why: 'Incorrect sequence reverses rotation of 3-phase motors, risking catastrophic mechanical damage to pumps and compressors.',
        expected: 'Clockwise Positive Sequence: R → Y → B.',
        fault: 'Reverse sequence (R-B-Y): Swap any two supply phase leads at the incoming terminal block.'
      },
      {
        name: '4. Line Current Measurement & Balance',
        what: 'Use a True-RMS AC clamp meter to measure individual line currents I_R, I_Y, I_B under full operating load.',
        why: 'Identifies phase load unbalance. A current unbalance of 5% can cause a 50% increase in motor winding temperature rise!',
        expected: 'Equal currents across all 3 phases (current unbalance < 2%).',
        fault: 'Severe unbalance (> 5%): Check for single-phasing, blown phase fuses, or unbalanced single-phase branch loads.'
      },
      {
        name: '5. Power Factor & Harmonic Distortion (THD)',
        what: 'Log active power (kW), reactive power (kVAR), and cos φ using a 3-phase Power Quality Analyzer.',
        why: 'Low PF incurs utility penalty surcharges and saturates upstream substation distribution transformers.',
        expected: 'Operating PF ≥ 0.95 lagging; Total Harmonic Voltage Distortion (THD_V) < 5%.',
        fault: 'Low PF (< 0.85): Switch in APFC capacitor stages. High THD: Install harmonic detuned reactor filters.'
      },
      {
        name: '6. Neutral Conductor & Ground Current Check',
        what: 'Measure neutral conductor current I_N and ground earth conductor leakage current.',
        why: 'In balanced 3-phase systems, I_N should be near 0 A. High I_N indicates triplen (3rd) harmonics or severe phase load unbalance.',
        expected: 'I_N < 5% of rated phase current; Ground leakage < 30 mA.',
        fault: 'Excessive neutral current: Check 3rd harmonic content from nonlinear switch-mode power supplies; resize neutral conductor.'
      },
      {
        name: '7. Terminal Connection Torque & Integrity',
        what: 'Inspect all busbar bolts, contactor lugs, and circuit breaker screw terminals for mechanical tightness.',
        why: 'Loose electrical joints create localized contact resistance, generating severe I²R overheating and arcing.',
        expected: 'Tight connections torqued to manufacturer specified N·m (Newton-meters).',
        fault: 'Discolored copper or loose lug: De-energize, clean contact oxidation, re-torque with calibrated torque wrench.'
      },
      {
        name: '8. Infrared Thermographic Scan',
        what: 'Perform non-contact thermal imaging of switchgear, cables, breaker contacts, and motor bearings while under load.',
        why: 'Detects thermal hotspots before insulation breakdown or catastrophic fire outbreaks occur.',
        expected: 'Uniform thermal profile with terminal temperature differential ΔT < 5°C across phases.',
        fault: 'Hotspot with ΔT > 15°C: Severe fault condition — immediately schedule maintenance for terminal replacement.'
      },
      {
        name: '9. Insulation Resistance (Megger Test)',
        what: 'De-energize circuit, isolate sensitive electronics, and apply a 500V or 1000V DC Megger test between phase-to-phase and phase-to-ground.',
        why: 'Verifies dielectric integrity of winding and cable insulation.',
        expected: 'Insulation resistance > 100 MΩ (Absolute minimum allowable = 1 MΩ).',
        fault: 'Insulation resistance < 1 MΩ: Moisture ingress, aged insulation, or carbon tracking — overhaul or replace winding.'
      },
      {
        name: '10. Safety Lockout/Tagout (LOTO) & Documentation',
        what: 'Apply physical padlock and warning tags before servicing; record all test metrics in plant CMMS logbook.',
        why: 'Mandatory statutory OSHA / IEC compliance ensuring zero unintended re-energization during maintenance.',
        expected: 'Documented test report with baseline parameters and signed maintenance sign-off.',
        fault: 'Never restore power without formal clearance and safety perimeter inspection.'
      }
    ]
  },
  hi: {
    title: 'औद्योगिक एसी इंजीनियरिंग एवं डायग्नोस्टिक्स लैब',
    subtitle: 'व्यापक कैपस्टोन सिमुलेशन: 3-फेज औद्योगिक मोटर का विश्लेषण करें, स्वचालित पावर फैक्टर करेक्शन (APFC) कैपेसिटर का आकार निर्धारित करें और 10-चरणीय ट्रबलशूटिंग प्रोटोकॉल का पालन करें।',
    tabMotor: 'केस 1: एसी इंडक्शन मोटर',
    tabPfc: 'केस 2: APFC कैपेसिटर आकार',
    tabDist: 'केस 3: 3-फेज वितरण',
    tabTrouble: 'केस 4: ट्रबलशूटिंग प्रवाह',
    resetBtn: 'डिफ़ॉल्ट रीसेट',

    motorTitle: 'थ्री-फेज औद्योगिक इंडक्शन मोटर विश्लेषण',
    pOutLabel: 'शाफ्ट आउटपुट शक्ति P_out (kW)',
    efficiencyLabel: 'मोटर दक्षता η (%)',
    vLineLabel: 'सप्लाई लाइन वोल्टेज V_L (V)',
    pfLabel: 'ऑपरेटिंग पावर फैक्टर (cos φ)',
    motorPIn: 'विद्युत इनपुट शक्ति (P_in)',
    motorCurrent: 'पूर्ण भार लाइन धारा (I_L)',
    motorApparent: 'आभासी शक्ति (S)',
    motorReactive: 'प्रतिक्रियाशील शक्ति मांग (Q)',
    motorPhaseIStar: 'फेज धारा (स्टार परिचालन):',
    motorPhaseIDelta: 'फेज धारा (डेल्टा परिचालन):',
    motorInsight: 'इंजीनियरिंग अंतर्दृष्टि: 0.85 से कम PF पर मोटर बहुत अधिक धारा खींचती है, जिससे तारों में I²R ताप और वोल्टेज में गिरावट आती है।',

    pfcTitle: 'औद्योगिक APFC कैपेसिटर बैंक आकार निर्धारण',
    pfcKWLabel: 'सक्रिय भार शक्ति P (kW)',
    pfcInitialPf: 'प्रारंभिक पावर फैक्टर (cos φ₁)',
    pfcTargetPf: 'लक्षित पावर फैक्टर (cos φ₂)',
    pfcFreqLabel: 'ग्रिड आवृत्ति f (Hz)',
    pfcBankConfig: 'कैपेसिटर बैंक टोपोलॉजी',
    pfcDelta: '3-फेज डेल्टा (Δ) संयोजित बैंक (मानक)',
    pfcStar: '3-फेज स्टार (Y) संयोजित बैंक',
    pfcSingle: 'सिंगल-फेज बैंक',
    pfcQ1: 'प्रारंभिक प्रतिक्रियाशील शक्ति (Q₁)',
    pfcQ2: 'लक्षित प्रतिक्रियाशील शक्ति (Q₂)',
    pfcQc: 'आवश्यक मुआवजा (Q_c)',
    pfcCapPerPhase: 'प्रति फेज धारिता (C)',
    pfcCurrentSaved: 'लाइन धारा में कमी (ΔI_L)',
    pfcKvaReleased: 'मुक्त ट्रांसफार्मर क्षमता (ΔS)',
    pfcInsight: 'उद्योगों में डेल्टा बैंक को प्राथमिकता दी जाती है क्योंकि प्रत्येक कैपेसिटर पूर्ण लाइन वोल्टेज V_L पर काम करता है, जिससे समान kVAR के लिए स्टार की तुलना में 1/3 (33%) μF कैपेसिटेंस की ही आवश्यकता होती है।',

    distTitle: 'थ्री-फेज वितरण फीडर विश्लेषण',
    distVl: 'लाइन वोल्टेज V_L (V)',
    distIl: 'फीडर धारा I_L (A)',
    distPf: 'लोड पावर फैक्टर (cos φ)',
    distPfType: 'लोड विशेषता',
    distLag: 'लैगिंग (प्रेरणिक भार - मोटर, चिलर)',
    distLead: 'लीडिंग (धारिता भार)',
    distActiveP: 'सक्रिय शक्ति (P)',
    distReactiveQ: 'प्रतिक्रियाशील शक्ति (Q)',
    distApparentS: 'आभासी शक्ति (S)',
    distZeq: 'समतुल्य लोड प्रतिबाधा / फेज',
    distInsight: '3-फेज वितरण में लाइन हानियां I_L² के समानुपाती होती हैं। PF को 0.75 से बढ़ाकर 0.95 करने पर लाइन में I²R ऊर्जा हानि 37% से अधिक कम हो जाती है!',

    troubleTitle: 'मानक 10-चरणीय औद्योगिक एसी ट्रबलशूटिंग प्रोटोकॉल',
    stepOf: 'चरण',
    prevStep: 'पिछला चरण',
    nextStep: 'अगला चरण',
    safetyWarning: 'महत्वपूर्ण सुरक्षा चेतावनी: टर्मिनलों को छूने से पहले हमेशा बिजली काटें, LOTO लागू करें और CAT III/IV मीटर से शून्य वोल्टेज सत्यापित करें।',
    stepWhat: 'क्या जांचें',
    stepWhy: 'इंजीनियरिंग महत्व',
    stepExpected: 'मानक अपेक्षित परिणाम',
    stepFault: 'संभावित दोष / आवश्यक कार्रवाई',

    steps: [
      {
        name: '1. सप्लाई वोल्टेज सत्यापन',
        what: 'मेन ब्रेकर पर लाइन-से-लाइन (400V) और लाइन-से-न्यूट्रल (230V) वोल्टेज मापें।',
        why: 'पुष्टि करता है कि ग्रिड वोल्टेज विनियामक सीमा (±6%) के भीतर है।',
        expected: '400 V ± 6% (लाइन-टू-लाइन) और 230 V ± 6% (लाइन-टू-न्यूट्रल)।',
        fault: 'कम वोल्टेज (< 376 V) से मोटर गर्म होती है; अधिक वोल्टेज से कोर संतृप्त हो जाती है।'
      },
      {
        name: '2. ग्रिड आवृत्ति सत्यापन',
        what: 'True-RMS मल्टीमीटर से ग्रिड आवृत्ति मापें।',
        why: 'इंडक्शन मोटर की गति Ns = 120f / P सीधे आवृत्ति पर निर्भर करती है।',
        expected: '50.0 Hz ± 0.5 Hz।',
        fault: 'आवृत्ति विचलन जनरेटर गवर्नर की खराबी को दर्शाता है।'
      },
      {
        name: '3. फेज सीक्वेंस एवं घूर्णन जांच',
        what: 'R, Y, B पर फेज सीक्वेंस मीटर जोड़ें।',
        why: 'गलत क्रम मोटर की घूर्णन दिशा उलट देता है, जिससे पंप और कंप्रेसर क्षतिग्रस्त हो सकते हैं।',
        expected: 'मानक धनात्मक क्रम: R → Y → B।',
        fault: 'विपरीत क्रम (R-B-Y): किन्हीं दो सप्लाई तारों को आपस में बदलें।'
      },
      {
        name: '4. लाइन धारा माप एवं संतुलन',
        what: 'क्लैंप मीटर से प्रत्येक फेज की धारा I_R, I_Y, I_B मापें।',
        why: '5% का धारा असंतुलन मोटर के तापमान को 50% तक बढ़ा सकता है!',
        expected: 'तीनों फेजों में समान धारा (असंतुलन < 2%)।',
        fault: 'गंभीर असंतुलन (> 5%): फ्यूज उड़ने या सिंगल-फेजिंग की जांच करें।'
      },
      {
        name: '5. पावर फैक्टर एवं हार्मोनिक्स (THD)',
        what: 'पावर क्वालिटी एनालाइजर से kW, kVAR और cos φ मापें।',
        why: 'कम PF पर बिजली बोर्ड जुर्माना लगाता है और ट्रांसफार्मर ओवरलोड होता है।',
        expected: 'PF ≥ 0.95 लैगिंग; THD_V < 5%।',
        fault: 'कम PF (< 0.85): APFC कैपेसिटर चालू करें। उच्च THD: हार्मोनिक फिल्टर लगाएं।'
      },
      {
        name: '6. न्यूट्रल एवं अर्थ लीकेज धारा',
        what: 'न्यूट्रल तार धारा I_N और ग्राउंड लीकेज धारा मापें।',
        why: 'संतुलित लोड पर I_N शून्य होना चाहिए। उच्च I_N असंतुलन या 3rd हार्मोनिक्स दर्शाता है।',
        expected: 'I_N < रेटेड धारा का 5%; ग्राउंड लीकेज < 30 mA।',
        fault: 'उच्च न्यूट्रल धारा: SMPS गैर-रेखीय लोड या फेज असंतुलन की जांच करें।'
      },
      {
        name: '7. टर्मिनल कनेक्शन एवं कसाव (Torque)',
        what: 'सभी बसबार और ब्रेकर टर्मिनलों के कसाव की जांच करें।',
        why: 'ढीले कनेक्शन संपर्क प्रतिरोध बढ़ाते हैं, जिससे चिंगारी और अत्यधिक ताप पैदा होता है।',
        expected: 'मानक N·m टॉर्क पर कसे हुए कनेक्शन।',
        fault: 'ढीला टर्मिनल: बिजली काटें, जंग साफ करें और टॉर्क रिंच से कसें।'
      },
      {
        name: '8. इन्फ्रारेड थर्मल स्कैन (Hotspots)',
        what: 'चालू लोड पर थर्मल कैमरे से केबल और ब्रेकर का तापमान स्कैन करें।',
        why: 'इंसुलेशन जलने या आग लगने से पहले अत्यधिक गर्म बिंदुओं का पता लगाता है।',
        expected: 'फेजों के बीच तापमान अंतर ΔT < 5°C।',
        fault: 'हॉटस्पॉट (ΔT > 15°C): गंभीर दोष — तुरंत रखरखाव निर्धारित करें।'
      },
      {
        name: '9. इंसुलेशन प्रतिरोध (मेगर टेस्ट)',
        what: 'बिजली बंद करके 500V/1000V डीसी मेगर से फेज-टू-ग्राउंड इंसुलेशन मापें।',
        why: 'वाइंडिंग और केबल इंसुलेशन की मजबूती की पुष्टि करता है।',
        expected: 'इंसुलेशन प्रतिरोध > 100 MΩ (न्यूनतम स्वीकार्य = 1 MΩ)।',
        fault: '< 1 MΩ: नमी या जला हुआ इंसुलेशन — वाइंडिंग बदलें।'
      },
      {
        name: '10. सुरक्षा LOTO एवं दस्तावेजीकरण',
        what: 'सर्विसिंग से पहले पैडलॉक (LOTO) लगाएं और रिपोर्ट दर्ज करें।',
        why: 'रखरखाव के दौरान गलती से बिजली चालू होने से रोकता है।',
        expected: 'हस्ताक्षरित सुरक्षा रिपोर्ट और सुरक्षित संचालन।',
        fault: 'बिना सुरक्षा जांच के कभी भी बिजली बहाल न करें।'
      }
    ]
  },
  bn: {
    title: 'শিল্প এসি ইঞ্জিনিয়ারিং ও ডায়াগনস্টিকস ল্যাব',
    subtitle: 'চূড়ান্ত ক্যাপস্টোন সিমুলেশন: ৩-ফেজ মোটর বিশ্লেষণ, APFC ক্যাপাসিটর ব্যাংক সাইজিং, পাওয়ার ডিস্ট্রিবিউশন এবং ১০-ধাপের ট্রাবলশুটিং প্রোটোকল অনুসরণ করুন।',
    tabMotor: 'কেস ১: এসি মোটর বিশ্লেষণ',
    tabPfc: 'কেস ২: APFC ক্যাপাসিটর সাইজিং',
    tabDist: 'কেস ৩: ৩-ফেজ ডিস্ট্রিবিউশন',
    tabTrouble: 'কেস ৪: ট্রাবলশুটিং পদ্ধতি',
    resetBtn: 'ডিফল্ট রিসেট',

    motorTitle: 'থ্রি-ফেজ শিল্প ইন্ডাকশন মোটর বিশ্লেষণ',
    pOutLabel: 'শ্যাফট আউটপুট পাওয়ার P_out (kW)',
    efficiencyLabel: 'মোটর দক্ষতা η (%)',
    vLineLabel: 'সাপ্লাই লাইন ভোল্টেজ V_L (V)',
    pfLabel: 'অপারেটিং পাওয়ার ফ্যাক্টর (cos φ)',
    motorPIn: 'বৈদ্যুতিক ইনপুট ক্ষমতা (P_in)',
    motorCurrent: 'ফুল-লোড লাইন কারেন্ট (I_L)',
    motorApparent: 'আপাত ক্ষমতা (S)',
    motorReactive: 'রিঅ্যাক্টিভ পাওয়ার চাহিদা (Q)',
    motorPhaseIStar: 'ফেজ কারেন্ট (স্টার চালনা):',
    motorPhaseIDelta: 'ফেজ কারেন্ট (ডেল্টা চালনা):',
    motorInsight: 'ইঞ্জিনিয়ারিং পরামর্শ: ০.৮৫ এর নিচে PF থাকলে মোটর অতিরিক্ত কারেন্ট টানে, যার ফলে লাইনে I²R তাপক্ষয় এবং ভোল্টেজ ড্রপ বৃদ্ধি পায়।',

    pfcTitle: 'শিল্প APFC ক্যাপাসিটর ব্যাংক সাইজিং',
    pfcKWLabel: 'সক্রিয় লোড ক্ষমতা P (kW)',
    pfcInitialPf: 'প্রাথমিক পাওয়ার ফ্যাক্টর (cos φ₁)',
    pfcTargetPf: 'টার্গেট পাওয়ার ফ্যাক্টর (cos φ₂)',
    pfcFreqLabel: 'গ্রিড ফ্রিকোয়েন্সি f (Hz)',
    pfcBankConfig: 'ক্যাপাসিটর ব্যাংক সংযোগ',
    pfcDelta: '৩-ফেজ ডেল্টা (Δ) সংযুক্ত ব্যাংক (স্ট্যান্ডার্ড)',
    pfcStar: '৩-ফেজ স্টার (Y) সংযুক্ত ব্যাংক',
    pfcSingle: 'সিঙ্গেল-ফেজ ব্যাংক',
    pfcQ1: 'প্রাথমিক রিঅ্যাক্টিভ ক্ষমতা (Q₁)',
    pfcQ2: 'টার্গেট রিঅ্যাক্টিভ ক্ষমতা (Q₂)',
    pfcQc: 'প্রয়োজনীয় ক্ষতিপূরণ (Q_c)',
    pfcCapPerPhase: 'প্রতি ফেজের ক্যাপাসিট্যান্স (C)',
    pfcCurrentSaved: 'লাইন কারেন্ট হ্রাস (ΔI_L)',
    pfcKvaReleased: 'মুক্ত ট্রান্সফরমার ক্ষমতা (ΔS)',
    pfcInsight: 'শিল্পে ডেল্টা ক্যাপাসিটর ব্যাংক বহুল ব্যবহৃত হয় কারণ প্রতিটি ক্যাপাসিটর সম্পূর্ণ লাইন ভোল্টেজ V_L এ কাজ করে, ফলে স্টারের তুলনায় ১/৩ (৩৩%) μF ক্যাপাসিট্যান্সের প্রয়োজন হয়।',

    distTitle: 'থ্রি-ফেজ ডিস্ট্রিবিউশন ফিডার বিশ্লেষণ',
    distVl: 'লাইন ভোল্টেজ V_L (V)',
    distIl: 'ফিডার কারেন্ট I_L (A)',
    distPf: 'লোড পাওয়ার ফ্যাক্টর (cos φ)',
    distPfType: 'লোড বৈশিষ্ট্য',
    distLag: 'ল্যাগিং (ইনডাক্টিভ - মোটর, চিলার)',
    distLead: 'লিডিং (ক্যাপাসিটিভ লোড)',
    distActiveP: 'সক্রিয় ক্ষমতা (P)',
    distReactiveQ: 'রিঅ্যাক্টিভ ক্ষমতা (Q)',
    distApparentS: 'আপাত ক্ষমতা (S)',
    distZeq: 'সমতুল্য লোড ইম্পিডেন্স / ফেজ',
    distInsight: '৩-ফেজ লাইনে শক্তি অপচয় I_L² এর সমানুপাতিক। PF ০.৭৫ থেকে ০.৯৫ এ উন্নীত করলে লাইনের I²R তাপক্ষয় ৩৭% এর বেশি হ্রাস পায়!',

    troubleTitle: 'মানক ১০-ধাপের শিল্প এসি ট্রাবলশুটিং প্রোটোকল',
    stepOf: 'ধাপ',
    prevStep: 'পূর্ববর্তী ধাপ',
    nextStep: 'পরবর্তী ধাপ',
    safetyWarning: 'জরুরি নিরাপত্তা নির্দেশিকা: টার্মিনাল স্পর্শ করার পূর্বে সর্বদা বিদ্যুৎ সংযোগ বিচ্ছিন্ন করুন, LOTO প্রয়োগ করুন এবং CAT III/IV মিটার দিয়ে শূন্য ভোল্টেজ নিশ্চিত করুন।',
    stepWhat: 'কী পরিদর্শন করবেন',
    stepWhy: 'ইঞ্জিনিয়ারিং গুরুত্ব',
    stepExpected: 'প্রত্যাশিত মানক ফলাফল',
    stepFault: 'সম্ভাব্য ত্রুটি / প্রয়োজনীয় ব্যবস্থা',

    steps: [
      {
        name: '১. সরবরাহ ভোল্টেজ যাচাইকরণ',
        what: 'মেইন ব্রেকারে লাইন-টু-লাইন (৪০০V) এবং লাইন-টু-নিউট্রাল (২৩০V) ভোল্টেজ পরিমাপ করুন।',
        why: 'গ্রিড ভোল্টেজ স্ট্যান্ডার্ড সহনশীলতার (±৬%) মধ্যে আছে কিনা তা নিশ্চিত করে।',
        expected: '৪০০ V ± ৬% (লাইন-টু-লাইন) এবং ২৩০ V ± ৬% (লাইন-টু-নিউট্রাল)।',
        fault: 'কম ভোল্টেজ (< ৩৭৬ V) মোটর অতিরিক্ত গরম করে; উচ্চ ভোল্টেজ ম্যাগনেটিক কোর সম্পৃক্ত করে।'
      },
      {
        name: '২. গ্রিড ফ্রিকোয়েন্সি যাচাইকরণ',
        what: 'True-RMS মাল্টিমিটার দিয়ে সাপ্লাই ফ্রিকোয়েন্সি মাপুন।',
        why: 'মোটরের গতি Ns = ১২০f / P সরাসরি ফ্রিকোয়েন্সির সাথে যুক্ত।',
        expected: '৫০.০ Hz ± ০.৫ Hz।',
        fault: 'ফ্রিকোয়েন্সির বিচ্যুতি জেনারেটর গভর্নারের ত্রুটি নির্দেশ করে।'
      },
      {
        name: '৩. ফেজ সিকোয়েন্স ও ঘূর্ণন পরীক্ষা',
        what: 'R, Y, B টার্মিনালে ফেজ সিকোয়েন্স মিটার যুক্ত করুন।',
        why: 'ভুল সিকোয়েন্সে মোটর উল্টো ঘোরে, যা পাম্প ও কম্প্রেসরের অপূরণীয় ক্ষতি করে।',
        expected: 'ক্লকওয়াইজ পজিটিভ সিকোয়েন্স: R → Y → B।',
        fault: 'বিপরীত সিকোয়েন্স (R-B-Y): ইনকামিং ব্রেকারে যেকোনো দুটি তার অদলবদল করুন।'
      },
      {
        name: '৪. লাইন কারেন্ট পরিমাপ ও সমতা',
        what: 'ক্ল্যাম্প মিটার দিয়ে প্রতিটি ফেজের কারেন্ট I_R, I_Y, I_B মাপুন।',
        why: '৫% কারেন্ট অসমেঞ্জস্য মোটরের উইন্ডিং তাপমাত্রা ৫০% পর্যন্ত বাড়িয়ে দিতে পারে!',
        expected: 'তিন ফেজে সমান কারেন্ট (পার্থক্য < ২%)।',
        fault: 'অতিরিক্ত অসমেঞ্জস্য (> ৫%): ফেজ ফিউজ বা সিঙ্গেল ফেজিং ত্রুটি পরীক্ষা করুন।'
      },
      {
        name: '৫. পাওয়ার ফ্যাক্টর ও হারমোনিক্স (THD)',
        what: 'পাওয়ার কোয়ালিটি অ্যানালাইজার দিয়ে kW, kVAR এবং cos φ লগ করুন।',
        why: 'কম PF থাকলে বিদ্যুৎ কোম্পানি জরিমানা করে এবং ট্রান্সফরমার ওভারলোড হয়।',
        expected: 'PF ≥ ০.৯৫ ল্যাগিং; ভোল্টেজ হারমোনিক THD < ৫%।',
        fault: 'কম PF (< ০.৮৫): APFC ক্যাপাসিটর চালু করুন। অতিরিক্ত THD: ফিল্টার স্থাপন করুন।'
      },
      {
        name: '৬. নিউট্রাল ও আর্থ লিকেজ কারেন্ট',
        what: 'নিউট্রাল তারের কারেন্ট I_N এবং আর্থ লিকেজ কারেন্ট পরিমাপ করুন।',
        why: 'সুষম লোডে I_N শূন্য হওয়ার কথা। উচ্চ I_N লোড অসমতা বা ৩য় হারমোনিক্স নির্দেশ করে।',
        expected: 'I_N < রেটেড কারেন্টের ৫%; গ্রাউন্ড লিকেজ < ৩০ mA।',
        fault: 'উচ্চ নিউট্রাল কারেন্ট: SMPS লোড বা ফেজ লোডের অসমতা যাচাই করুন।'
      },
      {
        name: '৭. টার্মিনাল সংযোগ ও টাইটনেস (Torque)',
        what: 'বাসবার নাট-বোল্ট এবং ব্রেকার টার্মিনালের যান্ত্রিক দৃঢ়তা পরীক্ষা করুন।',
        why: 'আলগা সংযোগে অতিরিক্ত রোধ সৃষ্টি হয়ে অগ্নিকাণ্ড ঘটতে পারে।',
        expected: 'ম্যানুফ্যাকচারার নির্ধারিত N·m টর্কে আঁটসাঁট সংযোগ।',
        fault: 'আলগা টার্মিনাল: সংযোগ পরিষ্কার করুন এবং টর্ক রেঞ্চ দিয়ে নির্দিষ্ট মানে আঁটুন।'
      },
      {
        name: '৮. ইনফ্রারেড থার্মাল স্ক্যান (Hotspots)',
        what: 'থার্মাল ক্যামেরা দিয়ে তার ও ব্রেকার টার্মিনালের তাপমাত্রা স্ক্যান করুন।',
        why: 'ইনসুলেশন পোড়ার আগেই অতিরিক্ত গরম হওয়া স্থানগুলো শনাক্ত করে।',
        expected: 'সকল ফেজের মধ্যে তাপমাত্রার পার্থক্য ΔT < ৫°C।',
        fault: 'হটস্পট (ΔT > ১৫°C): গুরুতর ত্রুটি — অবিলম্বে টার্মিনাল পরিবর্তনের ব্যবস্থা নিন।'
      },
      {
        name: '৯. ইনসুলেশন রেজিস্ট্যান্স (মেগার টেস্ট)',
        what: 'বিদ্যুৎ বন্ধ করে ৫০০V/১০০০V ডিসি মেগার দিয়ে ফেজ ও গ্রাউন্ডের ইনসুলেশন মাপুন।',
        why: 'তার ও কয়েলের ডাই-ইলেকট্রিক সক্ষমতা যাচাই করে।',
        expected: 'ইনসুলেশন রোধ > ১০০ MΩ (সর্বনিম্ন গ্রহণযোগ্য = ১ MΩ)।',
        fault: '< ১ MΩ: আর্দ্রতা বা ক্ষতিগ্রস্ত ইনসুলেশন — উইন্ডিং মেরামত বা প্রতিস্থাপন করুন।'
      },
      {
        name: '১০. নিরাপত্তা LOTO ও ডকুমেন্টেশন',
        what: 'মেরামতের পূর্বে প্যাডলক (LOTO) লাগান এবং লগবুকে ডেটা লিপিবদ্ধ করুন।',
        why: 'কাজের সময় অনাকাঙ্ক্ষিতভাবে বিদ্যুৎ চালু হওয়া প্রতিরোধ করে।',
        expected: 'স্বাক্ষরিত নিরাপত্তা অনুমতিপত্র ও রক্ষণাবেক্ষণ রিপোর্ট।',
        fault: 'সম্পূর্ণ নিরাপত্তা পরীক্ষা না করে কখনোই পাওয়ার সংযোগ চালু করবেন না।'
      }
    ]
  }
};

export const ACIndustrialCaseStudyAnimation: React.FC<ACIndustrialCaseStudyAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const isReducedMotion = useReducedMotion();

  const [activeTab, setActiveTab] = useState<CaseStudyTab>('motor');

  // Case 1: Motor State
  const [motorPOut, setMotorPOut] = useState<number>(37); // 37 kW (~50 HP)
  const [motorEff, setMotorEff] = useState<number>(93); // 93%
  const [motorVL, setMotorVL] = useState<number>(400); // 400 V
  const [motorPF, setMotorPF] = useState<number>(0.86); // 0.86 lagging

  // Case 2: PFC State
  const [pfcKW, setPfcKW] = useState<number>(150); // 150 kW
  const [pfcInitialPf, setPfcInitialPf] = useState<number>(0.75);
  const [pfcTargetPf, setPfcTargetPf] = useState<number>(0.96);
  const [pfcVL, setPfcVL] = useState<number>(400); // 400 V
  const [pfcFreq, setPfcFreq] = useState<number>(50); // 50 Hz
  const [pfcConfig, setPfcConfig] = useState<CapBankConfig>('delta');

  // Case 3: Distribution State
  const [distVL, setDistVL] = useState<number>(415); // 415 V
  const [distIL, setDistIL] = useState<number>(120); // 120 A
  const [distPF, setDistPF] = useState<number>(0.82);
  const [distPfType, setDistPfType] = useState<'lag' | 'lead'>('lag');

  // Case 4: Troubleshooting State
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const sqrt3 = Math.sqrt(3);

  // --- MOTOR CALCULATIONS ---
  const motorPIn = motorPOut / (motorEff / 100); // kW
  const motorIL = (motorPIn * 1000) / (sqrt3 * motorVL * motorPF); // A
  const motorS = (sqrt3 * motorVL * motorIL) / 1000; // kVA
  const motorPhi = Math.acos(motorPF);
  const motorQ = (sqrt3 * motorVL * motorIL * Math.sin(motorPhi)) / 1000; // kVAR

  // Phase currents
  const motorIphStar = motorIL;
  const motorIphDelta = motorIL / sqrt3;

  // --- PFC CALCULATIONS ---
  const phi1 = Math.acos(pfcInitialPf);
  const phi2 = Math.acos(pfcTargetPf);
  const pfcQ1 = pfcKW * Math.tan(phi1); // kVAR
  const pfcQ2 = pfcKW * Math.tan(phi2); // kVAR
  const pfcQc = Math.max(0, pfcQ1 - pfcQ2); // kVAR required

  // Capacitance calculations:
  // For 3-phase Delta: Qc_total = 3 · (2π f C_delta · VL²) => C_delta = (Qc * 10^3) / (3 · 2π f VL²)
  const omega = 2 * Math.PI * pfcFreq;
  let pfcCapMicroFarad = 0;
  if (pfcConfig === 'delta') {
    pfcCapMicroFarad = (pfcQc * 1000 * 1e6) / (3 * omega * pfcVL * pfcVL);
  } else if (pfcConfig === 'star') {
    // For Star: Vph = VL / √3 => Qc_total = 3 · (2π f C_star · (VL/√3)²) = 2π f C_star VL² => C_star = (Qc * 10^3) / (omega * VL²)
    pfcCapMicroFarad = (pfcQc * 1000 * 1e6) / (omega * pfcVL * pfcVL);
  } else {
    // Single-phase: C = (Qc * 10^3) / (omega * V²)
    pfcCapMicroFarad = (pfcQc * 1000 * 1e6) / (omega * (pfcVL / sqrt3) * (pfcVL / sqrt3));
  }

  // Initial and Final Current & kVA
  const initialIL = (pfcKW * 1000) / (sqrt3 * pfcVL * pfcInitialPf);
  const finalIL = (pfcKW * 1000) / (sqrt3 * pfcVL * pfcTargetPf);
  const pfcCurrentSaved = initialIL - finalIL;
  const initialS = pfcKW / pfcInitialPf;
  const finalS = pfcKW / pfcTargetPf;
  const pfcKvaReleased = initialS - finalS;

  // --- DISTRIBUTION CALCULATIONS ---
  const distP = (sqrt3 * distVL * distIL * distPF) / 1000; // kW
  const distS = (sqrt3 * distVL * distIL) / 1000; // kVA
  const distPhi = Math.acos(distPF);
  const distQ = (sqrt3 * distVL * distIL * Math.sin(distPhi) * (distPfType === 'lead' ? -1 : 1)) / 1000; // kVAR
  const distZeqStar = (distVL / sqrt3) / distIL; // Ω / phase

  const handleReset = () => {
    setMotorPOut(37);
    setMotorEff(93);
    setMotorVL(400);
    setMotorPF(0.86);

    setPfcKW(150);
    setPfcInitialPf(0.75);
    setPfcTargetPf(0.96);
    setPfcVL(400);
    setPfcFreq(50);
    setPfcConfig('delta');

    setDistVL(415);
    setDistIL(120);
    setDistPF(0.82);
    setDistPfType('lag');

    setCurrentStepIndex(0);
  };

  const currentStep = t.steps[currentStepIndex];

  return (
    <InteractiveSimulationCard
      currentLanguage={currentLanguage}
      title={t.title}
      subtitle={t.subtitle}
      onReset={handleReset}
      calloutTitle="Safety & Standards Compliance (IEC 60364 / NFPA 70E)"
      calloutText={t.safetyWarning}
    >
      <div className="space-y-6">
        {/* Navigation Tabs for Case Studies */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-slate-950 rounded-xl border border-slate-800" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'motor'}
            onClick={() => setActiveTab('motor')}
            className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all focus:outline-none focus:ring-2 focus:ring-sky-400 ${
              activeTab === 'motor'
                ? 'bg-sky-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Cpu className="w-4 h-4 text-sky-300" />
            <span>{t.tabMotor}</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'pfc'}
            onClick={() => setActiveTab('pfc')}
            className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
              activeTab === 'pfc'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Zap className="w-4 h-4 text-emerald-300" />
            <span>{t.tabPfc}</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'distribution'}
            onClick={() => setActiveTab('distribution')}
            className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 ${
              activeTab === 'distribution'
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Activity className="w-4 h-4 text-amber-300" />
            <span>{t.tabDist}</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'troubleshooting'}
            onClick={() => setActiveTab('troubleshooting')}
            className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all focus:outline-none focus:ring-2 focus:ring-purple-400 ${
              activeTab === 'troubleshooting'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-purple-300" />
            <span>{t.tabTrouble}</span>
          </button>
        </div>

        {/* CASE 1: MOTOR ANALYSIS */}
        {activeTab === 'motor' && (
          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-slate-900/90 rounded-xl border border-slate-800">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <label htmlFor="motor-pout">{t.pOutLabel}</label>
                  <span className="font-mono text-sky-400">{motorPOut} kW ({(motorPOut * 1.341).toFixed(1)} HP)</span>
                </div>
                <input
                  id="motor-pout"
                  type="range"
                  min={5}
                  max={200}
                  step={1}
                  value={motorPOut}
                  onChange={(e) => setMotorPOut(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded appearance-none cursor-pointer accent-sky-500"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <label htmlFor="motor-eff">{t.efficiencyLabel}</label>
                  <span className="font-mono text-emerald-400">{motorEff}%</span>
                </div>
                <input
                  id="motor-eff"
                  type="range"
                  min={75}
                  max={98}
                  step={0.5}
                  value={motorEff}
                  onChange={(e) => setMotorEff(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <label htmlFor="motor-vl">{t.vLineLabel}</label>
                  <span className="font-mono text-amber-400">{motorVL} V</span>
                </div>
                <input
                  id="motor-vl"
                  type="range"
                  min={200}
                  max={690}
                  step={10}
                  value={motorVL}
                  onChange={(e) => setMotorVL(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <label htmlFor="motor-pf">{t.pfLabel}</label>
                  <span className="font-mono text-purple-400">{motorPF.toFixed(2)} lag</span>
                </div>
                <input
                  id="motor-pf"
                  type="range"
                  min={0.5}
                  max={0.98}
                  step={0.01}
                  value={motorPF}
                  onChange={(e) => setMotorPF(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded appearance-none cursor-pointer accent-purple-500"
                />
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 bg-slate-900 rounded-xl border border-sky-900/50 text-center">
                <span className="text-[11px] text-slate-400 font-medium block">{t.motorPIn}</span>
                <span className="text-xl font-mono font-bold text-sky-400 mt-1 block">{motorPIn.toFixed(2)} kW</span>
                <span className="text-[10px] text-slate-500 font-mono">P_in = P_out / η</span>
              </div>

              <div className="p-3.5 bg-slate-900 rounded-xl border border-emerald-900/50 text-center">
                <span className="text-[11px] text-slate-400 font-medium block">{t.motorCurrent}</span>
                <span className="text-xl font-mono font-bold text-emerald-400 mt-1 block">{motorIL.toFixed(2)} A</span>
                <span className="text-[10px] text-slate-500 font-mono">I_L = P_in / (√3·V_L·PF)</span>
              </div>

              <div className="p-3.5 bg-slate-900 rounded-xl border border-purple-900/50 text-center">
                <span className="text-[11px] text-slate-400 font-medium block">{t.motorApparent}</span>
                <span className="text-xl font-mono font-bold text-purple-400 mt-1 block">{motorS.toFixed(2)} kVA</span>
                <span className="text-[10px] text-slate-500 font-mono">S = √3·V_L·I_L</span>
              </div>

              <div className="p-3.5 bg-slate-900 rounded-xl border border-amber-900/50 text-center">
                <span className="text-[11px] text-slate-400 font-medium block">{t.motorReactive}</span>
                <span className="text-xl font-mono font-bold text-amber-400 mt-1 block">{motorQ.toFixed(2)} kVAR</span>
                <span className="text-[10px] text-slate-500 font-mono">Q = √(S² - P_in²)</span>
              </div>
            </div>

            {/* Motor Topology Comparison */}
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
              <div>
                <span className="text-slate-400">{t.motorPhaseIStar} </span>
                <strong className="text-sky-300 font-bold">{motorIphStar.toFixed(2)} A</strong> (I_ph = I_L)
              </div>
              <div className="h-4 w-px bg-slate-800 hidden sm:block" />
              <div>
                <span className="text-slate-400">{t.motorPhaseIDelta} </span>
                <strong className="text-amber-300 font-bold">{motorIphDelta.toFixed(2)} A</strong> (I_ph = I_L / √3)
              </div>
            </div>

            <p className="text-xs text-slate-300 bg-slate-900/60 p-3 rounded-lg border border-slate-800 leading-relaxed">
              {t.motorInsight}
            </p>
          </div>
        )}

        {/* CASE 2: APFC CAPACITOR BANK SIZING */}
        {activeTab === 'pfc' && (
          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 bg-slate-900/90 rounded-xl border border-slate-800">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <label htmlFor="pfc-kw">{t.pfcKWLabel}</label>
                  <span className="font-mono text-sky-400">{pfcKW} kW</span>
                </div>
                <input
                  id="pfc-kw"
                  type="range"
                  min={10}
                  max={500}
                  step={5}
                  value={pfcKW}
                  onChange={(e) => setPfcKW(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded appearance-none cursor-pointer accent-sky-500"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <label htmlFor="pfc-pf1">{t.pfcInitialPf}</label>
                  <span className="font-mono text-amber-400">{pfcInitialPf.toFixed(2)}</span>
                </div>
                <input
                  id="pfc-pf1"
                  type="range"
                  min={0.50}
                  max={0.92}
                  step={0.01}
                  value={pfcInitialPf}
                  onChange={(e) => setPfcInitialPf(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <label htmlFor="pfc-pf2">{t.pfcTargetPf}</label>
                  <span className="font-mono text-emerald-400">{pfcTargetPf.toFixed(2)}</span>
                </div>
                <input
                  id="pfc-pf2"
                  type="range"
                  min={pfcInitialPf + 0.02}
                  max={1.0}
                  step={0.01}
                  value={pfcTargetPf}
                  onChange={(e) => setPfcTargetPf(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <label htmlFor="pfc-vl">{t.vLineLabel}</label>
                  <span className="font-mono text-slate-200">{pfcVL} V</span>
                </div>
                <input
                  id="pfc-vl"
                  type="range"
                  min={230}
                  max={690}
                  step={10}
                  value={pfcVL}
                  onChange={(e) => setPfcVL(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded appearance-none cursor-pointer accent-slate-400"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <label htmlFor="pfc-freq">{t.pfcFreqLabel}</label>
                  <span className="font-mono text-slate-200">{pfcFreq} Hz</span>
                </div>
                <div className="flex gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setPfcFreq(50)}
                    className={`flex-1 py-1 text-xs font-bold rounded ${pfcFreq === 50 ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-400'}`}
                  >
                    50 Hz
                  </button>
                  <button
                    type="button"
                    onClick={() => setPfcFreq(60)}
                    className={`flex-1 py-1 text-xs font-bold rounded ${pfcFreq === 60 ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-400'}`}
                  >
                    60 Hz
                  </button>
                </div>
              </div>
            </div>

            {/* Bank Configuration Selector */}
            <div className="flex flex-wrap items-center gap-3 p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-xs font-semibold text-slate-400">{t.pfcBankConfig}:</span>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setPfcConfig('delta')}
                  className={`px-3 py-1.5 rounded-lg border transition-all ${
                    pfcConfig === 'delta'
                      ? 'bg-emerald-950 text-emerald-300 border-emerald-500 shadow'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  {t.pfcDelta}
                </button>
                <button
                  type="button"
                  onClick={() => setPfcConfig('star')}
                  className={`px-3 py-1.5 rounded-lg border transition-all ${
                    pfcConfig === 'star'
                      ? 'bg-sky-950 text-sky-300 border-sky-500 shadow'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  {t.pfcStar}
                </button>
              </div>
            </div>

            {/* Sizing Outputs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              <div className="p-3 bg-slate-900 rounded-xl border border-amber-900/40 text-center">
                <span className="text-[11px] text-slate-400 font-medium block">{t.pfcQ1}</span>
                <span className="text-base font-mono font-bold text-amber-400 mt-1 block">{pfcQ1.toFixed(1)} kVAR</span>
              </div>

              <div className="p-3 bg-slate-900 rounded-xl border border-teal-900/40 text-center">
                <span className="text-[11px] text-slate-400 font-medium block">{t.pfcQ2}</span>
                <span className="text-base font-mono font-bold text-teal-400 mt-1 block">{pfcQ2.toFixed(1)} kVAR</span>
              </div>

              <div className="p-3 bg-slate-900 rounded-xl border border-emerald-900/60 text-center bg-emerald-950/20">
                <span className="text-[11px] text-emerald-300 font-bold block">{t.pfcQc}</span>
                <span className="text-lg font-mono font-black text-emerald-400 mt-1 block">{pfcQc.toFixed(1)} kVAR</span>
              </div>

              <div className="p-3 bg-slate-900 rounded-xl border border-cyan-900/60 text-center">
                <span className="text-[11px] text-cyan-300 font-bold block">{t.pfcCapPerPhase}</span>
                <span className="text-base font-mono font-bold text-cyan-400 mt-1 block">{pfcCapMicroFarad.toFixed(1)} μF</span>
                <span className="text-[9px] text-slate-500 font-mono">per branch</span>
              </div>

              <div className="p-3 bg-slate-900 rounded-xl border border-sky-900/40 text-center">
                <span className="text-[11px] text-slate-400 font-medium block">{t.pfcCurrentSaved}</span>
                <span className="text-base font-mono font-bold text-sky-400 mt-1 block">{pfcCurrentSaved.toFixed(1)} A</span>
                <span className="text-[9px] text-slate-500 font-mono">({((pfcCurrentSaved / initialIL) * 100).toFixed(0)}% reduction)</span>
              </div>

              <div className="p-3 bg-slate-900 rounded-xl border border-purple-900/40 text-center">
                <span className="text-[11px] text-slate-400 font-medium block">{t.pfcKvaReleased}</span>
                <span className="text-base font-mono font-bold text-purple-300 mt-1 block">{pfcKvaReleased.toFixed(1)} kVA</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 bg-slate-900/60 p-3 rounded-lg border border-slate-800 leading-relaxed">
              {t.pfcInsight}
            </p>
          </div>
        )}

        {/* CASE 3: THREE-PHASE DISTRIBUTION */}
        {activeTab === 'distribution' && (
          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-slate-900/90 rounded-xl border border-slate-800">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <label htmlFor="dist-vl">{t.distVl}</label>
                  <span className="font-mono text-sky-400">{distVL} V</span>
                </div>
                <input
                  id="dist-vl"
                  type="range"
                  min={200}
                  max={690}
                  step={5}
                  value={distVL}
                  onChange={(e) => setDistVL(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded appearance-none cursor-pointer accent-sky-500"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <label htmlFor="dist-il">{t.distIl}</label>
                  <span className="font-mono text-emerald-400">{distIL} A</span>
                </div>
                <input
                  id="dist-il"
                  type="range"
                  min={5}
                  max={500}
                  step={5}
                  value={distIL}
                  onChange={(e) => setDistIL(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <label htmlFor="dist-pf">{t.distPf}</label>
                  <span className="font-mono text-amber-400">{distPF.toFixed(2)}</span>
                </div>
                <input
                  id="dist-pf"
                  type="range"
                  min={0.2}
                  max={1.0}
                  step={0.01}
                  value={distPF}
                  onChange={(e) => setDistPF(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-slate-300 block">{t.distPfType}</span>
                <div className="flex gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setDistPfType('lag')}
                    className={`flex-1 py-1 text-xs font-bold rounded ${distPfType === 'lag' ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-400'}`}
                  >
                    Lagging (Inductive)
                  </button>
                  <button
                    type="button"
                    onClick={() => setDistPfType('lead')}
                    className={`flex-1 py-1 text-xs font-bold rounded ${distPfType === 'lead' ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-400'}`}
                  >
                    Leading (Capacitive)
                  </button>
                </div>
              </div>
            </div>

            {/* Distribution Results */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 bg-slate-900 rounded-xl border border-amber-900/50 text-center">
                <span className="text-[11px] text-slate-400 font-medium block">{t.distActiveP}</span>
                <span className="text-xl font-mono font-bold text-amber-400 mt-1 block">{distP.toFixed(2)} kW</span>
                <span className="text-[10px] text-slate-500 font-mono">P = √3·V_L·I_L·cosφ</span>
              </div>

              <div className="p-3.5 bg-slate-900 rounded-xl border border-sky-900/50 text-center">
                <span className="text-[11px] text-slate-400 font-medium block">{t.distReactiveQ}</span>
                <span className={`text-xl font-mono font-bold mt-1 block ${distQ >= 0 ? 'text-sky-400' : 'text-cyan-400'}`}>
                  {distQ.toFixed(2)} kVAR
                </span>
                <span className="text-[10px] text-slate-500 font-mono">{distPfType === 'lag' ? '+Q (Absorbed)' : '-Q (Delivered)'}</span>
              </div>

              <div className="p-3.5 bg-slate-900 rounded-xl border border-purple-900/50 text-center">
                <span className="text-[11px] text-slate-400 font-medium block">{t.distApparentS}</span>
                <span className="text-xl font-mono font-bold text-purple-300 mt-1 block">{distS.toFixed(2)} kVA</span>
                <span className="text-[10px] text-slate-500 font-mono">S = √3·V_L·I_L</span>
              </div>

              <div className="p-3.5 bg-slate-900 rounded-xl border border-emerald-900/50 text-center">
                <span className="text-[11px] text-slate-400 font-medium block">{t.distZeq}</span>
                <span className="text-xl font-mono font-bold text-emerald-400 mt-1 block">{distZeqStar.toFixed(2)} Ω</span>
                <span className="text-[10px] text-slate-500 font-mono">Star Z_eq = V_ph / I_L</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 bg-slate-900/60 p-3 rounded-lg border border-slate-800 leading-relaxed">
              {t.distInsight}
            </p>
          </div>
        )}

        {/* CASE 4: TROUBLESHOOTING PROTOCOL FLOW */}
        {activeTab === 'troubleshooting' && (
          <div className="space-y-5">
            {/* Step Navigation Bar */}
            <div className="flex items-center justify-between p-3.5 bg-slate-900 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-purple-950 text-purple-300 border border-purple-700 rounded-md font-mono text-xs font-bold">
                  {t.stepOf} {currentStepIndex + 1} / {t.steps.length}
                </span>
                <span className="text-sm font-bold text-white hidden sm:inline">
                  {currentStep.name}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={currentStepIndex === 0}
                  onClick={() => setCurrentStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-semibold text-slate-200 flex items-center gap-1 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{t.prevStep}</span>
                </button>
                <button
                  type="button"
                  disabled={currentStepIndex === t.steps.length - 1}
                  onClick={() => setCurrentStepIndex((prev) => Math.min(t.steps.length - 1, prev + 1))}
                  className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-semibold text-white flex items-center gap-1 transition-colors"
                >
                  <span>{t.nextStep}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Stepper Dots */}
            <div className="flex justify-between items-center gap-1 px-1 overflow-x-auto py-1">
              {t.steps.map((step, idx) => (
                <button
                  key={step.name}
                  type="button"
                  onClick={() => setCurrentStepIndex(idx)}
                  className={`h-2 flex-1 rounded-full transition-all ${
                    idx === currentStepIndex
                      ? 'bg-purple-500 ring-2 ring-purple-400/50'
                      : idx < currentStepIndex
                      ? 'bg-emerald-500'
                      : 'bg-slate-800'
                  }`}
                  aria-label={`Go to step ${idx + 1}: ${step.name}`}
                />
              ))}
            </div>

            {/* Active Step Details Card */}
            <div className="p-5 bg-slate-950 rounded-xl border border-purple-900/40 space-y-4">
              <h4 className="text-base font-bold text-purple-300 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-400" />
                {currentStep.name}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                  <span className="font-bold text-sky-300 uppercase tracking-wider block mb-1">
                    {t.stepWhat}
                  </span>
                  <p className="text-slate-300 leading-relaxed">{currentStep.what}</p>
                </div>

                <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                  <span className="font-bold text-indigo-300 uppercase tracking-wider block mb-1">
                    {t.stepWhy}
                  </span>
                  <p className="text-slate-300 leading-relaxed">{currentStep.why}</p>
                </div>

                <div className="p-3 bg-emerald-950/20 rounded-lg border border-emerald-900/40">
                  <span className="font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                    {t.stepExpected}
                  </span>
                  <p className="text-emerald-200/90 font-mono leading-relaxed">{currentStep.expected}</p>
                </div>

                <div className="p-3 bg-amber-950/20 rounded-lg border border-amber-900/40">
                  <span className="font-bold text-amber-400 uppercase tracking-wider block mb-1">
                    {t.stepFault}
                  </span>
                  <p className="text-amber-200/90 leading-relaxed">{currentStep.fault}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </InteractiveSimulationCard>
  );
};
