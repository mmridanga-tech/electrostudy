import React, { useState, useId } from 'react';
import { Language } from '../../types';
import { AlertTriangle, CheckCircle2, Wrench, ShieldAlert, Activity, Search, Info, HelpCircle } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

type SymptomKey = 
  | 'pf-low'
  | 'pf-leading'
  | 'apfc-hunting'
  | 'step-not-switching'
  | 'capacitor-overheating'
  | 'fuse-blowing'
  | 'harmonic-current'
  | 'voltage-rise';

interface TroubleshootingScenario {
  id: SymptomKey;
  title: { en: string; hi: string; bn: string };
  summary: { en: string; hi: string; bn: string };
  causes: { en: string[]; hi: string[]; bn: string[] };
  diagnosticChecks: { en: string[]; hi: string[]; bn: string[] };
  correctiveActions: { en: string[]; hi: string[]; bn: string[] };
  safetyWarning?: { en: string; hi: string; bn: string };
}

export const PFCCommissioningTroubleshooter: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const controlId = useId();

  const [activeSymptom, setActiveSymptom] = useState<SymptomKey>('pf-low');
  const [activeTab, setActiveTab] = useState<'troubleshoot' | 'checklist'>('troubleshoot');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleChecklist = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const scenarios: TroubleshootingScenario[] = [
    {
      id: 'pf-low',
      title: {
        en: '1. Power Factor Remains Low Despite APFC Energized',
        hi: '1. APFC चालू होने के बावजूद पावर फैक्टर कम बना रहता है',
        bn: '১. APFC সক্রিয় থাকা সত্ত্বেও পাওয়ার ফ্যাক্টর কম থেকে যায়'
      },
      summary: {
        en: 'Controller displays target PF not achieved, or displays erroneous unity PF while plant utility meter registers low lagging PF.',
        hi: 'कंट्रोलर प्रदर्शित करता है कि लक्षित PF प्राप्त नहीं हुआ, या गलत यूनिटी PF दिखाता है जबकि यूटिलिटी मीटर कम लैगिंग PF दर्ज करता है।',
        bn: 'কন্ট্রোলার দেখায় টার্গেট PF অর্জিত হয়নি, বা ভুল ইউনিটি PF প্রদর্শন করে যখন ইউটিলিটি মিটার কম ল্যাগিং PF রেকর্ড করে।'
      },
      causes: {
        en: [
          'CT installed downstream of capacitor bank connection point (blind to capacitor reactive power).',
          'Current Transformer (CT) polarity reversed (P1/P2 or S1/S2 wired backwards).',
          'CT ratio programmed incorrectly in APFC controller (e.g. 1000/5A CT programmed as 500/5A).',
          'Voltage phase and current phase angle mismatch (e.g. CT on Phase R, but controller sensed V_Y-B).',
          'Blown control fuses or tripped MCB on capacitor contactor coils.'
        ],
        hi: [
          'CT कैपेसिटर बैंक कनेक्शन पॉइंट के डाउनस्ट्रीम लगा है (कैपेसिटर रिएक्टिव पावर सेंस नहीं कर पाता)।',
          'करंट ट्रांसफार्मर (CT) पोलरिटी उल्टी है (P1/P2 या S1/S2 उल्टे जुड़े हैं)।',
          'APFC कंट्रोलर में CT अनुपात गलत प्रोग्राम किया गया है (उदा. 1000/5A को 500/5A लिखा गया)।',
          'वोल्टेज फेज एवं करंट फेज एंगल मिसमैच (जैसे Phase R पर CT, लेकिन कंट्रोलर V_Y-B सेंस कर रहा हो)।',
          'कैपेसिटर कॉन्टैक्टर कॉइल के कंट्रोल फ्यूज उड़े हैं या MCB ट्रिप है।'
        ],
        bn: [
          'CT ক্যাপাসিটর ব্যাংক সংযোগের ডাউনস্ট্রিমে ইনস্টল করা (ক্যাপাসিটরের রিঅ্যাক্টিভ পাওয়ার সেন্স করতে পারে না)।',
          'কারেন্ট ট্রান্সফরমার (CT) পোলারিটি বিপরীতভাবে যুক্ত (P1/P2 বা S1/S2 উল্টো লাগানো)।',
          'APFC কন্ট্রোলারে CT রেশিও ভুল প্রোগ্রাম করা (যেমন 1000/5A এর বদলে 500/5A সেট করা)।',
          'ভোল্টেজ ফেজ ও কারেন্ট ফেজ অ্যাঙ্গেলের অসামঞ্জস্য (যেমন Phase R-এ CT, কিন্তু V_Y-B সেন্স করা হচ্ছে)।',
          'ক্যাপাসিটর কন্ট্যাক্টর কয়েলের কন্ট্রোল ফিউজ কাটা বা MCB ট্রিপ করা।'
        ]
      },
      diagnosticChecks: {
        en: [
          'Verify CT location: CT MUST be on the incoming main breaker UPSTREAM of both load and capacitor branches.',
          'Measure secondary CT current with a calibrated true-RMS clamp meter and compare with APFC display.',
          'Verify phase orientation: If CT is in Line L1, controller reference voltage must be according to manufacturer table (e.g. L2-L3 or L1-N).',
          'Check contactor coil auxiliary voltages when steps are commanded ON.'
        ],
        hi: [
          'CT की स्थिति जांचें: CT लोड एवं कैपेसिटर दोनों के अपस्ट्रीम इनकमिंग मेन ब्रेकर पर होना चाहिए।',
          'कैलिब्रेटेड ट्रू-RMS क्लैंप मीटर से सेकंडरी CT करंट नापें और APFC डिस्प्ले से तुलना करें।',
          'फेज ओरिएंटेशन जांचें: यदि CT लाइन L1 में है, तो कंट्रोलर संदर्भ वोल्टेज निर्माता तालिका अनुसार होना चाहिए।',
          'स्टेप्स ON होने पर कॉन्टैक्टर कॉइल ऑक्सिलरी वोल्टेज मापें।'
        ],
        bn: [
          'CT অবস্থান যাচাই করুন: CT অবশ্যই লোড ও ক্যাপাসিটর উভয়ের আপস্ট্রিমে ইনকামিং ব্রেকারে থাকবে।',
          'ক্যালিব্রেটেড ট্রু-RMS ক্ল্যাম্প মিটার দিয়ে সেকেন্ডারি CT কারেন্ট পরিমাপ করে APFC ডিসপ্লের সাথে মেলান।',
          'ফেজ ওরিয়েন্টেশন পরীক্ষা করুন: CT যদি Line L1-এ থাকে, কন্ট্রোলার রেফারেন্স ভোল্টেজ ম্যানুয়াল অনুযায়ী হতে হবে।',
          'ধাপগুলো চালু করার নির্দেশ দিলে কন্ট্যাক্টর কয়েলের ভোল্টেজ পরীক্ষা করুন।'
        ]
      },
      correctiveActions: {
        en: [
          'Relocate CT to incoming main busbar upstream of capacitor tap-off point.',
          'Swap S1 and S2 wires at controller terminal if active power reads negative (indicating reversed CT).',
          'Reprogram correct CT primary and secondary ratio in controller configuration menu.',
          'Re-align sensing voltage phases as per controller wiring schematic.'
        ],
        hi: [
          'CT को कैपेसिटर टैप-ऑफ से पहले इनकमिंग मेन बसबार पर रिलोकेट करें।',
          'यदि सक्रिय शक्ति ऋणात्मक दिखाई दे तो कंट्रोलर टर्मिनल पर S1 और S2 तारों को आपस में बदलें।',
          'कंट्रोलर मेनू में सही CT प्राइमरी एवं सेकंडरी अनुपात रीप्रोग्राम करें।',
          'कंट्रोलर वायरिंग आरेख के अनुसार सेंसिंग वोल्टेज फेजों को पुनः संयोजित करें।'
        ],
        bn: [
          'CT-কে ক্যাপাসিটর সংযোগ বিন্দুর আগে ইনকামিং মেইন বাসবারে স্থানান্তর করুন।',
          'যদি অ্যাক্টিভ পাওয়ার নেগেটিভ দেখায় তবে কন্ট্রোলার টার্মিনালে S1 ও S2 তার অদলবদল করুন।',
          'কন্ট্রোলার মেনুতে সঠিক CT প্রাইমারি ও সেকেন্ডারি অনুপাত পুনরায় সেট করুন।',
          'কন্ট্রোলার ওয়্যারিং ডায়াগ্রাম অনুসারে রেফারেন্স ভোল্টেজ ফেজ পুনরায় বিন্যস্ত করুন।'
        ]
      },
      safetyWarning: {
        en: 'DANGER: NEVER open-circuit an energized Current Transformer secondary. Open CT produces lethal kilovolt peaks. Always short-circuit CT terminals before disconnecting!',
        hi: 'खतरा: कभी भी चालू करंट ट्रांसफॉर्मर (CT) की सेकंडरी को खुला (open-circuit) न छोड़ें। ओपन CT से घातक किलोवोल्ट वोल्टेज उत्पन्न होता है। अलग करने से पहले हमेशा CT टर्मिनल शॉर्ट करें!',
        bn: 'বিপদ: চালু অবস্থায় কারেন্ট ট্রান্সফরমারের (CT) সেকেন্ডারি কখনোই খোলা রাখবেন না। ওপেন CT-তে প্রাণঘাতী কিলোভোল্ট তৈরি হয়। সংযোগ বিচ্ছিন্ন করার আগে সর্বদা CT শর্ট করুন!'
      }
    },
    {
      id: 'pf-leading',
      title: {
        en: '2. Power Factor Becomes Leading (Overcompensation)',
        hi: '2. पावर फैक्टर लीडिंग हो जाता है (अति-क्षतिपूर्ति / ओवरकंपेंसेशन)',
        bn: '২. পাওয়ার ফ্যাক্টর লিডিং হয়ে যায় (অতিরিক্ত ক্ষতিপূরণ)'
      },
      summary: {
        en: 'PF meter reads 0.90 to 0.95 Leading during light load hours or plant shutdown, leading to utility penalties and generator instability.',
        hi: 'हल्के लोड या प्लांट बंद होने के दौरान PF मीटर 0.90 से 0.95 लीडिंग दिखाता है, जिससे यूटिलिटी जुर्माना और जनरेटर अस्थिरता होती है।',
        bn: 'হালকা লোড বা কারখানা বন্ধের সময় PF মিটার ০.৯০ থেকে ০.৯৫ লিডিং দেখায়, যার ফলে জরিমানা ও জেনারেটরের অস্থিরতা দেখা দেয়।'
      },
      causes: {
        en: [
          'Fixed unswitched capacitor banks permanently connected to main bus.',
          'APFC controller manual mode left engaged with all stages energized.',
          'Smallest capacitor step is too large relative to minimum plant standby load.',
          'Welded contactor main contacts keeping step permanently energized despite relay coil de-energized.'
        ],
        hi: [
          'मेन बस पर स्थायी रूप से जुड़े फिक्स्ड कैपेसिटर बैंक जो बंद नहीं होते।',
          'APFC कंट्रोलर का मैनुअल मोड सभी स्टेप्स ON रखकर गलती से चालू छोड़ दिया गया हो।',
          'न्यूनतम स्टैंडबाय लोड की तुलना में सबसे छोटा कैपेसिटर स्टेप बहुत बड़ा होना।',
          'कॉन्टैक्टर के मुख्य संपर्क वेल्ड (चिपक) जाना जिससे रिले बंद होने पर भी स्टेप चालू रहता है।'
        ],
        bn: [
          'মেইন বাসবারে স্থায়ীভাবে যুক্ত আনসুইচড ফিক্সড ক্যাপাসিটর ব্যাংক।',
          'APFC কন্ট্রোলারের ম্যানুয়াল মোডে সমস্ত ধাপ চালু রেখে দেওয়া।',
          'কারখানার সর্বনিম্ন স্ট্যান্ডবাই লোডের তুলনায় ক্ষুদ্রতম ক্যাপাসিটর স্টেপটি অতিরিক্ত বড় হওয়া।',
          'কন্ট্যাক্টরের কন্ট্যাক্ট ওয়েল্ড বা আটকে যাওয়া যার ফলে কয়েল বন্ধ থাকলেও ক্যাপাসিটর চালু থাকে।'
        ]
      },
      diagnosticChecks: {
        en: [
          'Check APFC display for manual vs automatic control mode status indicator.',
          'Perform physical visual inspection and continuity test on contactors when controller signals zero steps active.',
          'Measure standby reactive load during non-operational weekend hours.'
        ],
        hi: [
          'APFC डिस्प्ले पर मैनुअल बनाम ऑटोमैटिक कंट्रोल मोड स्थिति संकेतक जांचें।',
          'कंट्रोलर द्वारा सभी स्टेप बंद करने पर कॉन्टैक्टरों का भौतिक निरीक्षण एवं कंटीन्यूटी टेस्ट करें।',
          'सप्ताहांत में गैर-कार्यशील घंटों के दौरान स्टैंडबाय रिएक्टिव लोड मापें।'
        ],
        bn: [
          'APFC ডিসপ্লেতে ম্যানুয়াল বনাম অটোমেটিক মোড নির্দেশক পরীক্ষা করুন।',
          'কন্ট্রোলার সব ধাপ বন্ধ দেখালেও কন্ট্যাক্টরগুলোতে কন্টিনিউটি টেস্ট করুন।',
          'ছুটির দিনে বা কারখানা বন্ধের সময় স্ট্যান্ডবাই রিঅ্যাক্টিভ লোড পরিমাপ করুন।'
        ]
      },
      correctiveActions: {
        en: [
          'Replace oversized first step with smaller fractional trim steps (e.g. 10 or 15 kVAR instead of 50 kVAR).',
          'Set APFC controller target PF strictly to 0.98 or 0.99 Lagging (never set to unity or leading).',
          'Replace damaged contactors with capacitor-duty contactors with damping inrush resistors.'
        ],
        hi: [
          'बड़े पहले स्टेप को छोटे ट्रिम स्टेप्स से बदलें (उदा. 50 kVAR की जगह 10 या 15 kVAR)।',
          'APFC कंट्रोलर का टार्गेट PF 0.98 या 0.99 लैगिंग पर सेट करें (कभी भी 1.00 या लीडिंग न रखें)।',
          'क्षतिग्रस्त कॉन्टैक्टरों को इनरश डैम्पिंग रेसिस्टर युक्त कैपेसिटर-ड्यूटी कॉन्टैक्टरों से बदलें।'
        ],
        bn: [
          'অতিরিক্ত বড় প্রথম ধাপকে ছোট ট্রিম ধাপে পরিবর্তন করুন (যেমন ৫০ kVAR-এর বদলে ১০ বা ১৫ kVAR)।',
          'APFC কন্ট্রোলারে টার্গেট PF ০.৯৮ বা ০.৯৯ ল্যাগিং নির্ধারণ করুন (কখনোই ১.০০ বা লিডিং নয়)।',
          'ইনরাশ কারেন্ট রোধকারী রেজিস্টরযুক্ত বিশেষ ক্যাপাসিটর-ডিউটি কন্ট্যাক্টর ব্যবহার করুন।'
        ]
      }
    },
    {
      id: 'apfc-hunting',
      title: {
        en: '3. APFC Hunting (Rapid Oscillation / Cycling)',
        hi: '3. APFC हंटिंग (तेजी से स्टेप्स का ऑन-ऑफ होना / ऑसिलेशन)',
        bn: '৩. APFC হান্টিং (দ্রুত অন-অফ হওয়া বা অস্থির সাইক্লিং)'
      },
      summary: {
        en: 'Contactors switch ON and OFF repeatedly every few seconds, leading to severe contact pitting, chattering, and premature failure.',
        hi: 'कॉन्टैक्टर हर कुछ सेकंड में बार-बार ON और OFF होते हैं, जिससे संपर्क जलते हैं, चैटरिंग होती है और जल्दी खराब होते हैं।',
        bn: 'কন্ট্যাক্টরগুলো প্রতি কয়েক সেকেন্ডে বারবার অন-অফ হতে থাকে, যার ফলে কন্ট্যাক্ট নষ্ট হয় ও অকালে বিকল হয়।'
      },
      causes: {
        en: [
          'C/k sensitivity ratio set too low or incorrectly calculated.',
          'Capacitor step rating (kVAR) is larger than the hysteresis/deadband programmed into the controller.',
          'Switching delay timer set too short (<45 seconds), switching before capacitors have fully discharged.'
        ],
        hi: [
          'C/k संवेदनशीलता अनुपात (sensitivity ratio) बहुत कम सेट होना या गलत गणना होना।',
          'कैपेसिटर स्टेप रेटिंग (kVAR) कंट्रोलर में प्रोग्राम किए गए हिस्टैरिसीस/डेडबैंड से अधिक होना।',
          'स्विचिंग डिले टाइमर बहुत कम सेट होना (<45 सेकंड), जिससे कैपेसिटर डिस्चार्ज होने से पहले दोबारा चालू हो जाते हैं।'
        ],
        bn: [
          'C/k সেনসিটিভিটি রেশিও খুব কম বা ভুলভাবে গণনাকৃত হওয়া।',
          'ক্যাপাসিটর ধাপের মান (kVAR) কন্ট্রোলারে প্রোগ্রাম করা ডেডব্যান্ডের চেয়ে বেশি হওয়া।',
          'সুইচিং ডিলে টাইমার অতিরিক্ত কম (<৪৫ সেকেন্ড) রাখা, ফলে ডিসচার্জ হওয়ার আগেই পুনরায় চালু হয়।'
        ]
      },
      diagnosticChecks: {
        en: [
          'Calculate theoretical C/k: C/k = (Q_step * 1000) / (√3 * V * CT_ratio * 5). Verify against controller manual.',
          'Inspect controller deadband threshold setting. Deadband MUST exceed the reactive power of the smallest switched step by at least 15-20%.'
        ],
        hi: [
          'सैद्धांतिक C/k की गणना करें: C/k = (Q_step * 1000) / (√3 * V * CT_ratio * 5)। कंट्रोलर मैनुअल से मिलान करें।',
          'कंट्रोलर के डेडबैंड थ्रेशोल्ड की जांच करें। डेडबैंड सबसे छोटे स्टेप के kVAR से कम से कम 15-20% अधिक होना चाहिए।'
        ],
        bn: [
          'তাত্ত্বিক C/k হিসাব করুন: C/k = (Q_step * 1000) / (√3 * V * CT_ratio * 5)। কন্ট্রোলার ম্যানুয়ালের সাথে যাচাই করুন।',
          'কন্ট্রোলারের ডেডব্যান্ড পরীক্ষা করুন। ডেডব্যান্ড অবশ্যই ক্ষুদ্রতম ধাপের kVAR-এর চেয়ে ১৫-২০% বেশি হতে হবে।'
        ]
      },
      correctiveActions: {
        en: [
          'Recalibrate C/k factor to match the smallest stage kVAR and installed CT ratio.',
          'Widen controller deadband (switch-off threshold) to prevent hunting.',
          'Increase discharge reconnection delay to minimum 60–180 seconds for standard discharge resistors.'
        ],
        hi: [
          'C/k फैक्टर को सबसे छोटे स्टेप kVAR और स्थापित CT अनुपात के अनुसार पुनः कैलिब्रेट करें।',
          'हंटिंग रोकने के लिए कंट्रोलर डेडबैंड (स्विच-ऑफ थ्रेशोल्ड) को बढ़ाएं।',
          'मानक डिस्चार्ज रेसिस्टर्स के लिए रिकनेक्शन डिले को बढ़ाकर न्यूनतम 60–180 सेकंड करें।'
        ],
        bn: [
          'সবচেয়ে ছোট ধাপের kVAR ও CT রেশিও অনুসারে C/k ফ্যাক্টর পুনরায় নির্ধারণ করুন।',
          'হান্টিং রোধে কন্ট্রোলারের ডেডব্যান্ড বৃদ্ধি করুন।',
          'ক্যাপাসিটর পুনরায় সংযুক্তির রিকনেকশন বিলম্ব ন্যূনতম ৬০–১৮০ সেকেন্ডে বাড়িয়ে দিন।'
        ]
      }
    },
    {
      id: 'step-not-switching',
      title: {
        en: '4. Specific Capacitor Step Not Switching',
        hi: '4. विशिष्ट कैपेसिटर स्टेप का चालू न होना',
        bn: '৪. নির্দিষ্ট ক্যাপাসিটর ধাপ চালু না হওয়া'
      },
      summary: {
        en: 'APFC relay calls for step activation (LED illuminated), but the contactor does not pull in or fails to draw reactive current.',
        hi: 'APFC रिले स्टेप चालू करने का संकेत देता है (LED जलती है), लेकिन कॉन्टैक्टर पिक-अप नहीं करता या रिएक्टिव करंट नहीं लेता।',
        bn: 'APFC রিলে ধাপ সক্রিয় করার নির্দেশ দেয় (LED জ্বলে), কিন্তু কন্ট্যাক্টর পিক-আপ করে না বা কারেন্ট নেয় না।'
      },
      causes: {
        en: [
          'Relay output contact welded open or internally failed.',
          'Tripped control MCB or blown control fuse for that specific output branch.',
          'Contactor coil open-circuit or burned out.',
          'Series thermal overload or pressure switch tripped on capacitor can.'
        ],
        hi: [
          'रिले आउटपुट संपर्क अंदर से जल चुका है या खराब हो गया है।',
          'उस विशिष्ट आउटपुट शाखा का कंट्रोल MCB ट्रिप है या फ्यूज उड़ गया है।',
          'कॉन्टैक्टर कॉइल ओपन-सर्किट हो गई है या जल गई है।',
          'कैपेसिटर कैन का आंतरिक थर्मल या प्रेशर स्विच ट्रिप हो गया है।'
        ],
        bn: [
          'রিলে আউটপুট কন্ট্যাক্ট নষ্ট বা ভেতর থেকে পুড়ে গেছে।',
          'নির্দিষ্ট আউটপুট ব্রাঞ্চের কন্ট্রোল ফিউজ কাটা বা MCB ট্রিপ করা।',
          'কন্ট্যাক্টর কয়েল কেটে গেছে বা পুড়ে গেছে।',
          'ক্যাপাসিটরের অভ্যন্তরীণ থার্মাল বা প্রেসার সুইচ ট্রিপ করেছে।'
        ]
      },
      diagnosticChecks: {
        en: [
          'Measure control voltage across contactor coil terminals (A1-A2) when APFC step indicator is lit.',
          'De-energize control power and measure contactor coil resistance using an ohmmeter.',
          'Check step fuse continuity on all 3 phases of the power circuit.'
        ],
        hi: [
          'जब APFC स्टेप इंडिकेटर जले, तो कॉन्टैक्टर कॉइल टर्मिनलों (A1-A2) पर कंट्रोल वोल्टेज मापें।',
          'कंट्रोल पावर बंद करें और ओममीटर से कॉन्टैक्टर कॉइल का प्रतिरोध मापें।',
          'पावर सर्किट के तीनों फेजों पर स्टेप फ्यूज की कंटीन्यूटी जांचें।'
        ],
        bn: [
          'APFC ধাপ সক্রিয় নির্দেশক জ্বললে কন্ট্যাক্টর কয়েল টার্মিনালে (A1-A2) কন্ট্রোল ভোল্টেজ মাপুন।',
          'কন্ট্রোল পাওয়ার বন্ধ করে ওহমমিটার দিয়ে কয়েলের রেজিস্ট্যান্স পরিমাপ করুন।',
          'পাওয়ার সার্কিটের তিনটি ফেজের স্টেপ ফিউজের কন্টিনিউটি পরীক্ষা করুন।'
        ]
      },
      correctiveActions: {
        en: [
          'Replace blown control fuses and inspect for shorted wiring.',
          'Replace defective contactor coil or replace contactor with capacitor-duty unit.',
          'Reassign stage to an available spare relay output channel if controller output contact is damaged.'
        ],
        hi: [
          'उड़े हुए कंट्रोल फ्यूज बदलें और शॉर्ट वायरिंग की जांच करें।',
          'दोषपूर्ण कॉन्टैक्टर कॉइल बदलें या संपूर्ण कॉन्टैक्टर को कैपेसिटर-ड्यूटी यूनिट से बदलें।',
          'यदि कंट्रोलर आउटपुट संपर्क खराब हो गया है तो उपलब्ध स्पेयर आउटपुट चैनल पर स्टेप री-असाइन करें।'
        ],
        bn: [
          'কাটা কন্ট্রোল ফিউজ পরিবর্তন করুন এবং ওয়্যারিং পরীক্ষা করুন।',
          'ত্রুটিপূর্ণ কন্ট্যাক্টর কয়েল বা সম্পূর্ণ কন্ট্যাক্টর পরিবর্তন করুন।',
          'কন্ট্রোলারের কন্ট্যাক্ট নষ্ট হলে উপলব্ধ অতিরিক্ত (স্পেয়ার) চ্যানেলে সংযোগ দিন।'
        ]
      }
    },
    {
      id: 'capacitor-overheating',
      title: {
        en: '5. Capacitor Cans Overheating & Bulging',
        hi: '5. कैपेसिटर कैन का अत्यधिक गर्म होना एवं फूलना (Bulging)',
        bn: '৫. ক্যাপাসিটর অতিরিক্ত গরম হওয়া ও ফুলে যাওয়া (Bulging)'
      },
      summary: {
        en: 'Capacitor case temperature exceeds 55°C–60°C; pressure disconnector expands top seam, or dielectric oil seeps out.',
        hi: 'कैपेसिटर का तापमान 55°C–60°C से अधिक हो जाता है; आंतरिक दबाव से ऊपरी सीम फूल जाती है या तेल का रिसाव होता है।',
        bn: 'ক্যাপাসিটরের বডির তাপমাত্রা ৫৫°C–৬০°C ছাড়িয়ে যায়; অভ্যন্তরীণ চাপে ঢাকনা ফুলে ওঠে বা ডাই-ইলেকট্রিক তেল বের হয়।'
      },
      causes: {
        en: [
          'Harmonic resonance causing severe harmonic current amplification through the capacitor cells.',
          'High ambient temperature in panel due to failed exhaust fans or blocked ventilation louvers.',
          'Continuous operational overvoltage exceeding the continuous 110% rated capacitor tolerance.',
          'Loose busbar terminations generating high local I²R terminal heating.'
        ],
        hi: [
          'हार्मोनिक रेजोनेंस के कारण कैपेसिटर से होकर अत्यधिक हार्मोनिक करंट का प्रवाह होना।',
          'पैनल एग्जॉस्ट पंखे खराब होने या वेंटिलेशन बंद होने से अत्यधिक परिवेशी तापमान।',
          'निरंतर ओवरवोल्टेज जो कैपेसिटर की रेटेड सहनसीमा (110%) से अधिक हो।',
          'ढीले बसबार कनेक्शन जिनसे अत्यधिक स्थानीय I²R टर्मिनल हीटिंग उत्पन्न होती है।'
        ],
        bn: [
          'হারমোনিক রেজোন্যান্সের ফলে ক্যাপাসিটরের মধ্য দিয়ে উচ্চ হারমোনিক কারেন্ট প্রবাহ।',
          'প্যানেলের এক্সস্ট ফ্যান নষ্ট বা ভেন্টিলেশন বন্ধ থাকায় উচ্চ অভ্যন্তরীণ তাপমাত্রা।',
          'ধারাবাহিক অতিরিক্ত ভোল্টেজ যা ক্যাপাসিটরের সহনশীলতার (১১০%) বেশি।',
          'লুজ বাসবার বা টার্মিনাল সংযোগ থেকে অতিরিক্ত I²R তাপ সৃষ্টি হওয়া।'
        ]
      },
      diagnosticChecks: {
        en: [
          'Perform thermal imaging (infrared thermography) across capacitor cans, reactors, and terminal lugs.',
          'Measure harmonic current THD_I and individual 5th/7th harmonic current components using a power quality analyzer.',
          'Measure operating phase voltage under full plant and no-load conditions.'
        ],
        hi: [
          'कैपेसिटर कैन, रिएक्टर और टर्मिनल लग्स पर थर्मल इमेजिंग (इन्फ्रारेड थर्मोग्राफी) करें।',
          'पावर क्वालिटी एनालाइजर से करंट THD_I और 5वें/7वें हार्मोनिक घटकों को मापें।',
          'फुल लोड और नो-लोड स्थितियों में ऑपरेटिंग फेज वोल्टेज मापें।'
        ],
        bn: [
          'ক্যাপাসিটর ক্যান, রিঅ্যাক্টর ও টার্মিনালে ইনফ্রারেড থার্মাল ইমেজিং পরীক্ষা করুন।',
          'পাওয়ার কোয়ালিটি অ্যানালাইজার দিয়ে কারেন্ট THD_I এবং ৫ম/৭ম হারমোনিক কারেন্ট পরিমাপ করুন।',
          'পূর্ণ লোড এবং নো-লোড উভয় অবস্থায় অপারেটিং ফেজ ভোল্টেজ পরীক্ষা করুন।'
        ]
      },
      correctiveActions: {
        en: [
          'IMMEDIATELY replace bulged/leaking capacitors (internal pressure disconnector has actuated; capacitor is irreparably compromised).',
          'Install series detuned reactors (7% or 14%) to convert capacitor bank into an inductive branch for harmonics.',
          'Upgrade capacitor voltage rating from 415V to 480V or 525V when used with series reactors.',
          'Replace faulty panel exhaust fans and clean air intake filters.'
        ],
        hi: [
          'फूले या लीक हुए कैपेसिटर को तुरंत बदलें (आंतरिक डिस्कनेक्टर सक्रिय हो चुका है; यह अब सुरक्षित नहीं है)।',
          'हार्मोनिक्स के लिए कैपेसिटर को इंडक्टिव बनाने हेतु सीरीज डिट्यून्ड रिएक्टर (7% या 14%) स्थापित करें।',
          'सीरीज रिएक्टर के साथ उपयोग करते समय कैपेसिटर वोल्टेज रेटिंग 415V से बढ़ाकर 480V या 525V करें।',
          'खराब पैनल एग्जॉस्ट पंखे बदलें और एयर इनटेक फिल्टर साफ करें।'
        ],
        bn: [
          'ফুলে যাওয়া বা তেল লিক করা ক্যাপাসিটর অবিলম্বে পরিবর্তন করুন (ভেতরের প্রটেকশন বিচ্ছিন্ন হয়ে গেছে)।',
          'হারমোনিক্সের জন্য সিরিজ ডিটিউন্ড রিঅ্যাক্টর (৭% বা ১৪%) স্থাপন করুন।',
          'সিরিজ রিঅ্যাক্টর ব্যবহারের ক্ষেত্রে ক্যাপাসিটরের ভোল্টেজ রেটিং ৪১৫V থেকে ৪৮০V বা ৫২৫V-এ উন্নীত করুন।',
          'প্যানেলের নষ্ট এগজস্ট ফ্যান পরিবর্তন ও এয়ার ফিল্টার পরিষ্কার করুন।'
        ]
      },
      safetyWarning: {
        en: 'WARNING: Bulged capacitor cans contain high internal pressurized gases. Allow minimum 15 minutes de-energized cooldown before handling. Wear full face shield and safety gloves!',
        hi: 'चेतावनी: फूले हुए कैपेसिटर कैन में उच्च आंतरिक दबाव वाली गैसें होती हैं। हाथ लगाने से पहले कम से कम 15 मिनट ठंडा होने दें। फेस शील्ड और सुरक्षा दस्ताने पहनें!',
        bn: 'সতর্কতা: ফুলে যাওয়া ক্যাপাসিটরের ভেতরে উচ্চচাপের গ্যাস থাকে। স্পর্শ করার আগে অন্তত ১৫ মিনিট ঠান্ডা হতে দিন। ফেস শিল্ড ও সেফটি গ্লাভস পরিধান করুন!'
      }
    },
    {
      id: 'fuse-blowing',
      title: {
        en: '6. Capacitor Fuses Repeatedly Blow',
        hi: '6. कैपेसिटर फ्यूज का बार-बार उड़ना',
        bn: '৬. ক্যাপাসিটর ফিউজ বারবার পুড়ে যাওয়া'
      },
      summary: {
        en: 'HRC fuses on capacitor branches rupture repeatedly during step energization or steady-state operation.',
        hi: 'कैपेसिटर ब्रांच के HRC फ्यूज स्टेप चालू होते समय या सामान्य संचालन में बार-बार उड़ जाते हैं।',
        bn: 'ক্যাপাসিটর ব্রাঞ্চের HRC ফিউজ সুইচিংয়ের সময় বা সাধারণ পরিচালনায় বারবার পুড়ে যায়।'
      },
      causes: {
        en: [
          'Fuse rated too close to nominal capacitor current (lacks allowance for inrush, tolerance & harmonics).',
          'Standard distribution contactors used without damping inrush resistors (inrush currents exceed 100x I_n).',
          'Internal cell breakdown / puncture inside the capacitor element.',
          'Severe harmonic overload (5th or 7th harmonic current resonance).'
        ],
        hi: [
          'फ्यूज रेटिंग कैपेसिटर के नॉमिनल करंट के बहुत करीब होना (इनरश, टॉलरेंस और हार्मोनिक्स की गुंजाइश न होना)।',
          'इनरश डैम्पिंग रेसिस्टर के बिना साधारण डिस्ट्रीब्यूशन कॉन्टैक्टर का उपयोग (इनरश करंट 100x I_n तक पहुंचना)।',
          'कैपेसिटर एलिमेंट के अंदर इंटरनल सेल ब्रेकडाउन या पंक्चर होना।',
          'गंभीर हार्मोनिक ओवरलोड (5वीं या 7वीं हार्मोनिक करंट रेजोनेंस)।'
        ],
        bn: [
          'ফিউজ রেটিং ক্যাপাসিটরের নামমাত্র কারেন্টের খুব কাছাকাছি হওয়া (ইনরাশ ও হারমোনিক্সের সহনশীলতা না থাকা)।',
          'ইনরাশ রোধক ছাড়া সাধারণ কন্ট্যাক্টর ব্যবহার (ইনরাশ কারেন্ট ১০০ গুণ পর্যন্ত হতে পারে)।',
          'ক্যাপাসিটরের ভেতরের সেলের অভ্যন্তরীণ শর্ট সার্কিট বা পাংচার।',
          'তীব্র হারমোনিক ওভারলোড (৫ম বা ৭ম হারমোনিক রেজোন্যান্স)।'
        ]
      },
      diagnosticChecks: {
        en: [
          'Verify fuse sizing rule: Capacitor HRC fuses MUST be sized between 1.65x to 1.8x of capacitor nominal current (I_n).',
          'Test capacitor capacitance across all 3 phases (L-L) with a calibrated digital capacitance meter.',
          'Verify that contactors have early-make inrush damping block and resistors intact.'
        ],
        hi: [
          'फ्यूज साइज़िंग नियम जांचें: कैपेसिटर HRC फ्यूज का मान कैपेसिटर के नॉमिनल करंट (I_n) का 1.65 से 1.8 गुना होना चाहिए।',
          'कैलिब्रेटेड डिजिटल कैपेसिटेंस मीटर से तीनों फेजों पर कैपेसिटेंस मापें।',
          'जांचें कि कॉन्टैक्टर के इनरश डैम्पिंग ब्लॉक और रेसिस्टर्स सही स्थिति में हैं।'
        ],
        bn: [
          'ফিউজ সাইজিং নিয়ম যাচাই করুন: ক্যাপাসিটর HRC ফিউজ অবশ্যই ক্যাপাসিটর নমিনাল কারেন্টের ১.৬৫ থেকে ১.৮ গুণ হতে হবে।',
          'ক্যালিব্রেটেড ডিজিটাল ক্যাপাসিট্যান্স মিটার দিয়ে তিনটি ফেজের ক্যাপাসিট্যান্স পরীক্ষা করুন।',
          'কন্ট্যাক্টরের আর্লি-মেক ইনরাশ ড্যাম্পিং রেজিস্টর ব্লক অক্ষত আছে কিনা তা যাচাই করুন।'
        ]
      },
      correctiveActions: {
        en: [
          'Replace undersized fuses with gG/gL HRC fuses rated at 1.65x to 1.8x I_nominal.',
          'Install dedicated capacitor-duty contactors equipped with pre-insertion damping contacts.',
          'If capacitance across any phase is unbalanced by >10%, replace the failed capacitor unit.'
        ],
        hi: [
          'छोटे फ्यूज को 1.65x से 1.8x I_nominal रेटिंग वाले gG/gL HRC फ्यूज से बदलें।',
          'प्री-इंसर्शन डैम्पिंग संपर्कों से लैस समर्पित कैपेसिटर-ड्यूटी कॉन्टैक्टर स्थापित करें।',
          'यदि किसी भी फेज में कैपेसिटेंस >10% असंतुलित है, तो खराब कैपेसिटर को बदलें।'
        ],
        bn: [
          'কম রেটিংয়ের ফিউজ পরিবর্তন করে ১.৬৫x থেকে ১.৮x I_nominal রেটিংয়ের gG/gL HRC ফিউজ লাগান।',
          'প্রি-ইনসার্শন ড্যাম্পিং কন্ট্যাক্টযুক্ত ডেডিকেটেড ক্যাপাসিটর-ডিউটি কন্ট্যাক্টর স্থাপন করুন।',
          'যদি কোনো ফেজের ক্যাপাসিট্যান্সের পার্থক্য ১০%-এর বেশি হয় তবে ইউনিটটি পরিবর্তন করুন।'
        ]
      }
    },
    {
      id: 'harmonic-current',
      title: {
        en: '7. Harmonic Current Amplification Upon Switching',
        hi: '7. कैपेसिटर ऑन करते ही हार्मोनिक करंट में तीव्र वृद्धि',
        bn: '৭. ক্যাপাসিটর অন করার সাথে সাথে হারমোনিক কারেন্ট বৃদ্ধি'
      },
      summary: {
        en: 'Total Current Distortion (THD_I) spikes from 8% to 35% when capacitor bank steps engage; motors vibrate and transformers buzz loudly.',
        hi: 'कैपेसिटर स्टेप्स चालू होते ही करंट विकृति (THD_I) 8% से बढ़कर 35% हो जाती है; मोटरें कंपन करती हैं और ट्रांसफार्मर गूंजते हैं।',
        bn: 'ক্যাপাসিটর অন করলেই কারেন্ট ডিস্টরশন (THD_I) ৮% থেকে লাফিয়ে ৩৫% হয়ে যায়; মোটর কাঁপে ও ট্রান্সফরমার শব্দ করে।'
      },
      causes: {
        en: [
          'Parallel resonance between transformer leakage inductance and bare capacitor bank at 5th or 7th harmonic.',
          'Heavy nonlinear loads (VFDs, rectifiers, induction furnaces) injecting harmonic currents at the resonant frequency.'
        ],
        hi: [
          'ट्रांसफॉर्मर लीकेज इंडक्टेंस और बेयर कैपेसिटर बैंक के बीच 5वीं या 7वीं हार्मोनिक पर समानांतर रेजोनेंस।',
          'भारी नॉन-लीनियर लोड (VFD, रेक्टिफायर, इंडक्शन फर्नेस) जो रेजोनेंट फ्रीक्वेंसी पर हार्मोनिक करंट इंजेक्ट कर रहे हैं।'
        ],
        bn: [
          'ট্রান্সফরমার লিকেজ ইন্ডাকট্যান্স ও আন-ডিটিউন্ড ক্যাপাসিটরের মধ্যে ৫ম বা ৭ম হারমোনিকে প্যারালাল রেজোন্যান্স।',
          'নন-লিনিয়ার লোড (VFD, রেকটিফায়ার ইত্যাদি) থেকে রেজোন্যান্ট ফ্রিকোয়েন্সিতে হারমোনিক ইনজেকশন।'
        ]
      },
      diagnosticChecks: {
        en: [
          'Calculate resonant harmonic order: h_res = √(S_sc / Q_c). Check if h_res falls near 4.8–5.2 (5th harmonic) or 6.8–7.2 (7th harmonic).',
          'Measure individual harmonic spectrum with APFC steps switched off versus switched on.'
        ],
        hi: [
          'रेजोनेंट हार्मोनिक ऑर्डर की गणना करें: h_res = √(S_sc / Q_c)। जांचें कि क्या h_res 5वें या 7वें हार्मोनिक के पास है।',
          'कैपेसिटर स्टेप्स बंद होने और चालू होने की स्थिति में अलग-अलग हार्मोनिक स्पेक्ट्रम मापें।'
        ],
        bn: [
          'রেজোন্যান্ট হারমোনিক অর্ডার হিসাব করুন: h_res = √(S_sc / Q_c)। এটি ৫ম বা ৭ম হারমোনিকের কাছাকাছি কিনা দেখুন।',
          'ক্যাপাসিটর ধাপ বন্ধ ও চালু অবস্থায় হারমোনিক স্পেকট্রাম তুলনা করুন।'
        ]
      },
      correctiveActions: {
        en: [
          'DO NOT operate standard bare capacitor banks on systems with >15% nonlinear load.',
          'Retrofit each capacitor step with series detuned filter reactors (7% tuning to 189 Hz or 5.67% to 210 Hz).',
          'Install Active Harmonic Filter (AHF) at main bus for dynamic cancellation.'
        ],
        hi: [
          '>15% नॉन-लीनियर लोड वाले सिस्टम पर मानक बेयर कैपेसिटर बैंक कभी न चलाएं।',
          'प्रत्येक कैपेसिटर स्टेप में सीरीज डिट्यून्ड रिएक्टर (7% यानी 189 Hz ट्यूनिंग) लगाएं।',
          'डायनेमिक हार्मोनिक रद्दीकरण के लिए मुख्य बस पर एक्टिव हार्मोनिक फिल्टर (AHF) स्थापित करें।'
        ],
        bn: [
          '>১৫% নন-লিনিয়ার লোডযুক্ত সিস্টেমে সাধারণ আন-ডিটিউন্ড ক্যাপাসিটর ব্যাংক চালাবেন না।',
          'প্রতিটি ধাপে সিরিজ ডিটিউন্ড ফিল্টার রিঅ্যাক্টর (৭% অর্থাৎ ১৮৯ Hz-এ টিউন করা) যুক্ত করুন।',
          'মেইন বাসবারে একটি অ্যাক্টিভ হারমোনিক ফিল্টার (AHF) স্থাপন করুন।'
        ]
      }
    },
    {
      id: 'voltage-rise',
      title: {
        en: '8. Unexpected Busbar Voltage Rise',
        hi: '8. बसबार वोल्टेज में अप्रत्याशित वृद्धि',
        bn: '৮. বাসবারে অপ্রত্যাশিত ভোল্টেজ বৃদ্ধি'
      },
      summary: {
        en: 'Main LV bus voltage rises from 415V to 445V+ during night hours, causing equipment overvoltage trips and incandescent lamp failures.',
        hi: 'रात के समय मुख्य LV बस वोल्टेज 415V से बढ़कर 445V+ हो जाता है, जिससे उपकरण ट्रिप होते हैं और लाइटें खराब होती हैं।',
        bn: 'রাতের বেলা মেইন LV বাসবার ভোল্টেজ ৪১৫V থেকে ৪৪৫V+ পর্যন্ত বেড়ে যায়, যা যন্ত্রপাতি ট্রিপ ও লাইট কাটার কারণ হয়।'
      },
      causes: {
        en: [
          'Capacitor bank remains connected during light load / no-load conditions (Ferranti-like voltage elevation ΔV ≈ Q * X_L / V).',
          'Overcompensation causing leading reactive power flow back through the transformer reactance.'
        ],
        hi: [
          'हल्के या शून्य भार के दौरान कैपेसिटर बैंक का जुड़ा रहना (वोल्टेज वृद्धि ΔV ≈ Q * X_L / V)।',
          'अति-क्षतिपूर्ति (overcompensation) के कारण ट्रांसफार्मर प्रतिघात से होकर लीडिंग रिएक्टिव पावर का उल्टा प्रवाह।'
        ],
        bn: [
          'হালকা লোডে ক্যাপাসিটর ব্যাংক চালু থাকা (ভোল্টেজ বৃদ্ধি ΔV ≈ Q * X_L / V)।',
          'ওভারকম্পেনসেশনের কারণে ট্রান্সফরমার রিয়্যাক্ট্যান্সের মধ্য দিয়ে লিডিং রিঅ্যাক্টিভ পাওয়ারের উল্টো প্রবাহ।'
        ]
      },
      diagnosticChecks: {
        en: [
          'Log 24-hour bus voltage and active/reactive power using a PQ data logger.',
          'Verify APFC controller automatically disconnects steps when plant load drops below 10% of rating.'
        ],
        hi: [
          'PQ डेटा लॉगर से 24 घंटे का बस वोल्टेज और एक्टिव/रिएक्टिव पावर रिकॉर्ड करें।',
          'जांचें कि प्लांट लोड 10% से कम होने पर APFC कंट्रोलर स्वचालित रूप से स्टेप्स को डिस्कनेक्ट करता है या नहीं।'
        ],
        bn: [
          'PQ ডাটা লগার দিয়ে ২৪ ঘণ্টার বাসবার ভোল্টেজ এবং অ্যাক্টিভ/রিঅ্যাক্টিভ পাওয়ার রেকর্ড করুন।',
          'প্ল্যান্টের লোড ১০%-এর নিচে নামলে APFC কন্ট্রোলার নিজে থেকে ধাপগুলো বন্ধ করে কিনা তা যাচাই করুন।'
        ]
      },
      correctiveActions: {
        en: [
          'Configure APFC controller with "No-Load Disconnect" protection feature.',
          'Verify utility incoming transformer off-load tap changer setting is set for nominal nominal voltage.'
        ],
        hi: [
          'APFC कंट्रोलर में "नो-लोड डिस्कनेक्ट" सुरक्षा सुविधा चालू करें।',
          'जांचें कि यूटिलिटी ट्रांसफार्मर का ऑफ-लोड टैप चेंजर नॉमिनल वोल्टेज पर सेट है।'
        ],
        bn: [
          'APFC কন্ট্রোলারে "নো-লোড ডিসকানেক্ট" প্রটেকশন বৈশিষ্ট্য সক্রিয় করুন।',
          'ইনকামিং ট্রান্সফরমারের ট্যাপ চেঞ্জার সেটিং নর্মাল ভোল্টেজে নির্ধারিত আছে কিনা পরীক্ষা করুন।'
        ]
      }
    }
  ];

  const currentScenario = scenarios.find(s => s.id === activeSymptom) || scenarios[0];

  const checklistItems = [
    { id: 'ct_pos', en: '1. CT located on incoming main line UPSTREAM of capacitor tap-off', hi: '1. CT कैपेसिटर टैप-ऑफ से पहले इनकमिंग मेन लाइन पर अपस्ट्रीम है', bn: '১. CT ক্যাপাসিটর সংযোগের আপস্ট্রিমে ইনকামিং লাইনে যুক্ত' },
    { id: 'ct_pol', en: '2. CT polarity (P1 to grid, P2 to load; S1/S2 correct orientation) verified', hi: '2. CT पोलरिटी (P1 ग्रिड की ओर, P2 लोड की ओर; S1/S2 सही दिशा) सत्यापित है', bn: '২. CT পোলারিটি (P1 গ্রিডে, P2 লোডে; S1/S2 সঠিক সংযোগ) পরীক্ষিত' },
    { id: 'ct_ratio', en: '3. APFC controller programmed with exact CT primary and secondary rating', hi: '3. APFC कंट्रोलर में सही CT प्राइमरी एवं सेकंडरी रेटिंग प्रोग्राम की गई है', bn: '৩. APFC কন্ট্রোলারে সঠিক CT প্রাইমারি ও সেকেন্ডারি রেটিং প্রোগ্রাম করা' },
    { id: 'v_phase', en: '4. Reference voltage wiring phase sequence and phase angle correctly matched', hi: '4. संदर्भ वोल्टेज वायरिंग फेज अनुक्रम और फेज एंगल सही ढंग से मेल खाते हैं', bn: '৪. রেফারেন্স ভোল্টেজ ফেজ সিকোয়েন্স ও ফেজ অ্যাঙ্গেল সঠিকভাবে ম্যাচ করা' },
    { id: 'discharge', en: '5. Discharge resistors operational (voltage drops below 50V within 60 seconds)', hi: '5. डिस्चार्ज रेसिस्टर कार्यशील हैं (60 सेकंड में वोल्टेज 50V से नीचे गिरता है)', bn: '৫. ডিসচার্জ রেজিস্টর কার্যকর (৬০ সেকেন্ডের মধ্যে ভোল্টেজ ৫০V-এর নিচে নামে)' },
    { id: 'contactors', en: '6. Capacitor-duty contactors with inrush damping resistors installed', hi: '6. इनरश डैम्पिंग रेसिस्टर्स से लैस कैपेसिटर-ड्यूटी कॉन्टैक्टर स्थापित हैं', bn: '৬. ইনরাশ ড্যাম্পিং রেজিস্টরযুক্ত ক্যাপাসিটর-ডিউটি কন্ট্যাক্টর ইনস্টল করা' },
    { id: 'fuses', en: '7. HRC fuses sized at 1.65x to 1.8x capacitor nominal current', hi: '7. HRC फ्यूज कैपेसिटर नॉमिनल करंट के 1.65 से 1.8 गुना पर निर्धारित हैं', bn: '৭. HRC ফিউজ ক্যাপাসিটর নমিনাল কারেন্টের ১.৬৫ থেকে ১.৮ গুণ রেট করা' },
    { id: 'delay', en: '8. Reconnection delay timer programmed for minimum 60–120 seconds', hi: '8. रिकनेक्शन डिले टाइमर न्यूनतम 60–120 सेकंड पर प्रोग्राम किया गया है', bn: '৮. পুনরায় সংযোগের বিলম্ব টাইমার ন্যূনতম ৬০–১২০ সেকেন্ডে প্রোগ্রাম করা' }
  ];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-cyan-400 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-cyan-400" />
            {lang === 'en' ? 'PFC Commissioning & Field Diagnostics Troubleshooter' : lang === 'hi' ? 'PFC कमिशनिंग एवं फील्ड डायग्नोस्टिक्स ट्रबलशूटर' : 'PFC কমিশনিং ও ফিল্ড ডায়াগনস্টিক ট্রাবলশুটার'}
          </h3>
          <p className="text-xs text-slate-400">
            {lang === 'en' ? 'Interactive Diagnostic Guide for APFC Panels & Capacitor Banks' : lang === 'hi' ? 'APFC पैनल एवं कैपेसिटर बैंक हेतु इंटरैक्टिव नैदानिक गाइड' : 'APFC প্যানেল ও ক্যাপাসিটর ব্যাংকের ইন্টারেক্টিভ ডায়াগনস্টিক গাইড'}
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('troubleshoot')}
            className={`px-3 py-1 rounded transition-colors ${activeTab === 'troubleshoot' ? 'bg-cyan-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'}`}
          >
            {lang === 'en' ? 'Symptom Diagnostics' : lang === 'hi' ? 'लक्षण डायग्नोस्टिक्स' : 'লক্ষণ ডায়াগনস্টিকস'}
          </button>
          <button
            onClick={() => setActiveTab('checklist')}
            className={`px-3 py-1 rounded transition-colors ${activeTab === 'checklist' ? 'bg-cyan-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'}`}
          >
            {lang === 'en' ? 'Commissioning Checklist' : lang === 'hi' ? 'कमिशनिंग चेकलिस्ट' : 'কমিশনিং চেকলিস্ট'}
          </button>
        </div>
      </div>

      {activeTab === 'troubleshoot' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: 8 Selectable Symptoms */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2 flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              {lang === 'en' ? 'Select Field Symptom:' : lang === 'hi' ? 'फील्ड लक्षण चुनें:' : 'ফিল্ড লক্ষণ নির্বাচন করুন:'}
            </span>
            <div className="space-y-1.5">
              {scenarios.map((sc) => {
                const isSelected = sc.id === activeSymptom;
                return (
                  <button
                    key={sc.id}
                    onClick={() => setActiveSymptom(sc.id)}
                    className={`w-full text-left p-2.5 rounded-lg border text-xs transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-cyan-950/80 border-cyan-500 text-cyan-200 font-semibold shadow-md'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/40'
                    }`}
                  >
                    <span className="truncate pr-2">{sc.title[lang]}</span>
                    {isSelected && <Activity className="w-3.5 h-3.5 text-cyan-400 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Detailed Diagnostic Findings */}
          <div className="lg:col-span-8 bg-slate-950/70 p-5 rounded-xl border border-slate-800 space-y-4">
            <div className="border-b border-slate-800 pb-3">
              <h4 className="text-sm sm:text-base font-bold text-amber-400 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                {currentScenario.title[lang]}
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                {currentScenario.summary[lang]}
              </p>
            </div>

            {/* Likely Root Causes */}
            <div className="space-y-1.5">
              <h5 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                {lang === 'en' ? 'Likely Root Causes:' : lang === 'hi' ? 'संभावित मूल कारण:' : 'সম্ভাব্য মূল কারণসমূহ:'}
              </h5>
              <ul className="space-y-1">
                {currentScenario.causes[lang].map((cause, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-start gap-2 bg-slate-900/60 p-2 rounded border border-slate-800/80">
                    <span className="w-4 h-4 rounded-full bg-amber-950 text-amber-400 border border-amber-800 flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{cause}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Diagnostic Checks to Perform */}
            <div className="space-y-1.5">
              <h5 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                {lang === 'en' ? 'Diagnostic Checks & Measurements:' : lang === 'hi' ? 'नैदानिक परीक्षण एवं माप:' : 'ডায়াগনস্টিক পরীক্ষা ও পরিমাপ:'}
              </h5>
              <ul className="space-y-1">
                {currentScenario.diagnosticChecks[lang].map((check, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-start gap-2 bg-slate-900/60 p-2 rounded border border-slate-800/80">
                    <Search className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{check}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Corrective Engineering Action */}
            <div className="space-y-1.5">
              <h5 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                {lang === 'en' ? 'Recommended Corrective Action:' : lang === 'hi' ? 'अनुशंसित सुधारात्मक कार्रवाई:' : 'প্রস্তাবিত সমাধানমূলক ব্যবস্থা:'}
              </h5>
              <ul className="space-y-1">
                {currentScenario.correctiveActions[lang].map((action, idx) => (
                  <li key={idx} className="text-xs text-emerald-300 flex items-start gap-2 bg-emerald-950/30 p-2 rounded border border-emerald-900/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Safety Warning */}
            {currentScenario.safetyWarning && (
              <div className="p-3 rounded-lg bg-red-950/40 border border-red-800/80 text-xs text-red-200 flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-red-300 mb-0.5">
                    {lang === 'en' ? 'CRITICAL SAFETY DIRECTIVE:' : lang === 'hi' ? 'महत्वपूर्ण सुरक्षा निर्देश:' : 'জরুরি নিরাপত্তা নির্দেশিকা:'}
                  </strong>
                  <span>{currentScenario.safetyWarning[lang]}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Commissioning Pre-Flight Checklist Tab */
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-slate-950 p-3 rounded-lg border border-slate-800">
            <span className="text-xs text-slate-300">
              {lang === 'en' ? 'Completed Tasks:' : lang === 'hi' ? 'पूर्ण किए गए कार्य:' : 'সম্পন্ন কাজ:'}{' '}
              <strong className="text-cyan-400 font-mono">
                {Object.values(checkedItems).filter(Boolean).length} / {checklistItems.length}
              </strong>
            </span>
            <button
              onClick={() => setCheckedItems({})}
              className="text-xs text-slate-400 hover:text-slate-200 underline"
            >
              {lang === 'en' ? 'Reset Checklist' : lang === 'hi' ? 'चेकलिस्ट रीसेट करें' : 'চেকলিস্ট রিসেট'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {checklistItems.map((item) => {
              const isDone = !!checkedItems[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleChecklist(item.id)}
                  className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-start gap-3 ${
                    isDone
                      ? 'bg-emerald-950/40 border-emerald-600 text-emerald-200'
                      : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isDone}
                    onChange={() => {}}
                    className="mt-0.5 accent-emerald-500 rounded cursor-pointer"
                  />
                  <span>{item[lang]}</span>
                </div>
              );
            })}
          </div>

          <div className="p-3 bg-cyan-950/30 border border-cyan-800/60 rounded-lg text-xs text-cyan-200 flex items-start gap-2">
            <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span>
              {lang === 'en'
                ? 'Standard Commissioning Rule: Always perform initial step testing in MANUAL mode with a clamp-on ammeter on each phase to verify balanced current draw before enabling AUTOMATIC microprocessor control.'
                : lang === 'hi'
                ? 'मानक कमिशनिंग नियम: स्वचालित मोड सक्षम करने से पहले हमेशा प्रत्येक फेज पर क्लैंप मीटर लगाकर संतुलित करंट सुनिश्चित करने हेतु मैनुअल मोड में पहला परीक्षण करें।'
                : 'স্ট্যান্ডার্ড কমিশনিং নিয়ম: স্বয়ংক্রিয় মোড চালু করার আগে সর্বদা ম্যানুয়াল মোডে ক্ল্যাম্প মিটার দিয়ে প্রতিটি ফেজের ব্যালেন্সড কারেন্ট নিশ্চিত করে নিন।'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
