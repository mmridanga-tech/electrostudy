import { LanguageOption, SubjectItem, ToolItem, PracticeItem, Language } from '../types';

export const LANGUAGES: LanguageOption[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    region: 'Global Standard',
    flagText: 'EN',
    description: 'Standard terminology for Engineering degree and technical references'
  },
  {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    region: 'Diploma & ITI Preferred',
    flagText: 'HI',
    description: 'सरल भाषा में डिप्लोमा और आईटीआई इलेक्ट्रिशियन के संपूर्ण नोट्स'
  },
  {
    code: 'bn',
    name: 'Bengali',
    nativeName: 'বাংলা',
    region: 'State Polytechnic & ITI',
    flagText: 'BN',
    description: 'সহজ বাংলা ভাষায় ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং এবং ডিপ্লোমা সিলেবাস'
  }
];

export const UI_TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    heroBadge: '100% Free • Built for Electrical Students',
    heroHeadingPrefix: 'Learn Electrical Engineering.',
    heroHeadingSuffix: 'Build Your Future.',
    heroSubtitle: 'Free study resources, notes, formulas, quizzes and electrical tools for Degree, Diploma and ITI Electrician students.',
    startLearning: 'Start Learning',
    exploreTools: 'Explore Tools',
    statsSubjectsLabel: 'Subjects',
    statsResourcesLabel: 'Study Resources',
    statsQuestionsLabel: 'Practice Questions',
    statsLanguagesLabel: 'Languages Supported',
    exploreTitle: 'Explore Electrical Engineering',
    exploreSubtitle: 'Everything you need to understand electrical engineering from basics to advanced concepts.',
    toolsTitle: 'Powerful Electrical Tools',
    toolsSubtitle: 'Calculate, understand and solve electrical problems faster with our engineering tools.',
    viewAllTools: 'View All Tools',
    practiceTitle: 'Practice. Test. Improve.',
    practiceSubtitle: 'Prepare yourself for semester exams and competitive tests with targeted MCQs.',
    startPractice: 'Start Practice',
    languageTitle: 'Learn in Your Language',
    languageSubtitle: 'Study electrical engineering in the language you understand best.',
    languageBannerText: 'Switching languages updates all key terms, subject descriptions, and study material guides.',
    ctaTitle: 'Start Learning Electrical Engineering Today',
    ctaSubtitle: 'Free education. Practical knowledge. Better preparation for B.Tech, Diploma, and ITI examinations.',
    footerTagline: 'Free Electrical Engineering Education Platform for Degree, Diploma & ITI Students',
    footerCopyright: '© 2026 ElectroStudy. All rights reserved.',
    footerBadge: 'Free for educational purposes.',
    searchPlaceholder: 'Search subjects, notes, formulas, or tools (e.g. Ohm\'s law, AC machines)...',
    navHome: 'Home',
    navSubjects: 'Subjects',
    navNotes: 'Notes',
    navMCQ: 'MCQ',
    navTools: 'Tools',
    navExams: 'Exams',
    navAbout: 'About',
    quickCalcTitle: 'Quick Electrical Calculator',
    close: 'Close',
    exploreCardBtn: 'Explore Syllabus',
    questionsCountText: 'Questions',
    difficultyLabel: 'Difficulty',
    
    // Additional UI strings for complete localization
    logoSubtext: 'Electrical Engineering Hub',
    searchLabel: 'Search (Cmd+K)',
    tryCalculator: 'Try Calculator',
    verifiedBadge: 'Verified',
    comprehensiveSyllabus: 'Comprehensive Syllabus',
    keyTopics: 'Key Topics',
    questionsAvailable: 'Questions Available',
    activeLanguage: 'Active Language',
    currentlySelected: 'Currently Selected',
    clickToSwitch: 'Click to Switch',
    noCostFree: 'No Cost • No Limits • Free Forever',
    targetAudiences: 'Target Audiences',
    quickNavigation: 'Quick Navigation',
    supportedLanguages: 'Supported Languages',
    platformCommitment: 'Platform Commitment',
    freeAccessTitle: '100% Free Access',
    freeAccessDesc: 'All study material, notes, formulas and calculators are free without mandatory login or subscription.',
    btechSyllabus: 'Degree (B.Tech / BE)',
    diplomaSyllabus: 'Diploma Electrical',
    itiSyllabus: 'ITI Electrician',
    schematicEngineTitle: 'Interactive Schematic Engine',
    realtimeFormulas: 'Real-time Formulas',
    interactiveSolvers: 'Interactive Solvers',
    btechItiAligned: 'Aligned with AICTE & NCVT',
    calculatorTitle: 'Interactive Engineering Calculators',
    testPrepBadge: 'Exam & Competitive Test Prep',
    multilingualHubBadge: 'Multilingual Engineering Hub',
    navigationMenuTitle: 'Navigation Menu',
    selectLanguage: 'Select Language',
    calculatorsAndTools: 'Calculators & Tools',
    mcqsAndPractice: 'MCQs & Practice',
    typeToSearch: 'Type to search across subjects, formulas, MCQs, and electrical tools',
    tryKeywords: 'Try keywords like: "Ohm", "Transformer", "Motor", "Cable", "Power"',
    syllabusBreakdown: 'Syllabus Breakdown (B.Tech / Diploma Aligned)',
    freeResource: 'Free Resource',
    calculatedOutput: 'Calculated Output',
    powerComponents: 'Power Components',
    recommendedCable: 'Recommended Cable',
    syllabusModules: 'Syllabus & Course Modules',
    calcDisclaimer: 'Note: Initial educational calculation for learning reference. Not intended for professional design or installation.',
    phase1Notice: 'Phase 1 Educational Foundation'
  },
  hi: {
    heroBadge: '100% नि:शुल्क • इलेक्ट्रिकल छात्रों के लिए समर्पित',
    heroHeadingPrefix: 'इलेक्ट्रिकल इंजीनियरिंग सीखें।',
    heroHeadingSuffix: 'अपना भविष्य बनाएं।',
    heroSubtitle: 'डिग्री, डिप्लोमा और आईटीआई इलेक्ट्रिशियन छात्रों के लिए मुफ्त अध्ययन सामग्री, नोट्स, सूत्र और टूल्स।',
    startLearning: 'पढ़ना शुरू करें',
    exploreTools: 'टूल्स देखें',
    statsSubjectsLabel: 'विषय (Subjects)',
    statsResourcesLabel: 'अध्ययन संसाधन',
    statsQuestionsLabel: 'अभ्यास प्रश्न (MCQs)',
    statsLanguagesLabel: 'भाषाएं उपलब्ध',
    exploreTitle: 'इलेक्ट्रिकल इंजीनियरिंग सीखें',
    exploreSubtitle: 'बेसिक कांसेप्ट से लेकर एडवांस इंजीनियरिंग विषयों की संपूर्ण जानकारी एक ही स्थान पर।',
    toolsTitle: 'पावरफुल इलेक्ट्रिकल टूल्स',
    toolsSubtitle: 'इलेक्ट्रिकल कैलकुलेशन, सूत्र और समस्याओं को आसानी से और तेजी से हल करें।',
    viewAllTools: 'सभी टूल्स देखें',
    practiceTitle: 'अभ्यास करें। टेस्ट दें। सुधारें।',
    practiceSubtitle: 'सेमेस्टर परीक्षा और प्रतियोगी परीक्षाओं (SSC JE, RRB JE, ITI Exam) की तैयारी करें।',
    startPractice: 'अभ्यास शुरू करें',
    languageTitle: 'अपनी भाषा में सीखें',
    languageSubtitle: 'इलेक्ट्रिकल इंजीनियरिंग को उस भाषा में समझें जिसमें आप सबसे सहज महसूस करते हैं।',
    languageBannerText: 'भाषा बदलने पर सभी महत्वपूर्ण शब्द और अध्ययन गाइड आपकी चुनी हुई भाषा में प्रदर्शित होंगे।',
    ctaTitle: 'आज ही इलेक्ट्रिकल इंजीनियरिंग पढ़ना शुरू करें',
    ctaSubtitle: 'मुफ्त शिक्षा। व्यावहारिक ज्ञान। B.Tech, डिप्लोमा और ITI परीक्षाओं के लिए सर्वोत्तम तैयारी।',
    footerTagline: 'डिग्री, डिप्लोमा और आईटीआई छात्रों के लिए निःशुल्क इलेक्ट्रिकल इंजीनियरिंग शिक्षा मंच',
    footerCopyright: '© 2026 ElectroStudy. सर्वाधिकार सुरक्षित।',
    footerBadge: 'शैक्षणिक उद्देश्यों के लिए पूर्णतः निःशुल्क।',
    searchPlaceholder: 'विषय, नोट्स, सूत्र या टूल खोजें (जैसे: ओम का नियम, मोटर)...',
    navHome: 'होम',
    navSubjects: 'विषय',
    navNotes: 'नोट्स',
    navMCQ: 'एम.सी.क्यू',
    navTools: 'टूल्स',
    navExams: 'परीक्षाएं',
    navAbout: 'हमारे बारे में',
    quickCalcTitle: 'क्विक इलेक्ट्रिकल कैलकुलेटर',
    close: 'बंद करें',
    exploreCardBtn: 'सिलेबस देखें',
    questionsCountText: 'प्रश्न',
    difficultyLabel: 'कठिनाई स्तर',

    // Additional UI strings for complete localization
    logoSubtext: 'इलेक्ट्रिकल इंजीनियरिंग हब',
    searchLabel: 'खोजें (Cmd+K)',
    tryCalculator: 'कैलकुलेटर खोलें',
    verifiedBadge: 'सत्यापित',
    comprehensiveSyllabus: 'संपूर्ण पाठ्यक्रम',
    keyTopics: 'मुख्य विषय',
    questionsAvailable: 'प्रश्न उपलब्ध',
    activeLanguage: 'सक्रिय भाषा',
    currentlySelected: 'वर्तमान में चयनित',
    clickToSwitch: 'क्लिक करके बदलें',
    noCostFree: 'निःशुल्क • कोई सीमा नहीं • हमेशा मुफ्त',
    targetAudiences: 'लक्ष्य छात्र वर्ग',
    quickNavigation: 'त्वरित नेविगेशन',
    supportedLanguages: 'समर्थित भाषाएं',
    platformCommitment: 'प्लेटफॉर्म प्रतिबद्धता',
    freeAccessTitle: '100% मुफ्त पहुंच',
    freeAccessDesc: 'सभी अध्ययन सामग्री, नोट्स, सूत्र और कैलकुलेटर बिना किसी लॉगिन या सदस्यता के मुफ्त हैं।',
    btechSyllabus: 'डिग्री (B.Tech / BE)',
    diplomaSyllabus: 'डिप्लोमा इलेक्ट्रिकल',
    itiSyllabus: 'ITI इलेक्ट्रिशियन',
    schematicEngineTitle: 'इंटरएक्टिव सर्किट स्कीमैटिक',
    realtimeFormulas: 'रियल-टाइम सूत्र',
    interactiveSolvers: 'इंटरएक्टिव सॉल्वर',
    btechItiAligned: 'AICTE एवं NCVT द्वारा संरेखित',
    calculatorTitle: 'इंटरएक्टिव इंजीनियरिंग कैलकुलेटर',
    testPrepBadge: 'परीक्षा और प्रतियोगी परीक्षा तैयारी',
    multilingualHubBadge: 'बहुभाषी इंजीनियरिंग हब',
    navigationMenuTitle: 'नेविगेशन मेनू',
    selectLanguage: 'भाषा चुनें',
    calculatorsAndTools: 'कैलकुलेटर और टूल्स',
    mcqsAndPractice: 'MCQ और अभ्यास',
    typeToSearch: 'विषय, सूत्र, प्रश्न और टूल्स खोजने के लिए टाइप करें',
    tryKeywords: 'मुख्य शब्द खोजें: "ओम का नियम", "ट्रांसफॉर्मर", "मोटर", "केबल", "पावर"',
    syllabusBreakdown: 'पाठ्यक्रम विवरण (B.Tech / डिप्लोमा संरेखित)',
    freeResource: 'मुफ्त संसाधन',
    calculatedOutput: 'गणना का परिणाम',
    powerComponents: 'पावर घटक',
    recommendedCable: 'अनुशंसित केबल',
    syllabusModules: 'पाठ्यक्रम और विषय मॉड्यूल',
    calcDisclaimer: 'नोट: अध्ययन के लिए प्रारंभिक शैक्षणिक गणना। पेशेवर डिज़ाइन या इंस्टॉलेशन के लिए नहीं।',
    phase1Notice: 'चरण 1 शैक्षणिक आधार'
  },
  bn: {
    heroBadge: '১০০% বিনামূল্যে • ইলেকট্রিক্যাল শিক্ষার্থীদের জন্য নির্মিত',
    heroHeadingPrefix: 'ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং শিখুন।',
    heroHeadingSuffix: 'আপনার ভবিষ্যৎ গড়ুন।',
    heroSubtitle: 'বি.টেক, ডিপ্লোমা এবং আইটিআই ইলেকট্রিশিয়ান শিক্ষার্থীদের জন্য বিনামূল্যে নোটস, সূত্র এবং ক্যালকুলেটর টুলস।',
    startLearning: 'পড়া শুরু করুন',
    exploreTools: 'টুলস ব্যবহার করুন',
    statsSubjectsLabel: 'বিষয়সমূহ',
    statsResourcesLabel: 'স্টাडी রিসোর্স',
    statsQuestionsLabel: 'অনুশীলন প্রশ্নাবলী',
    statsLanguagesLabel: 'সমর্থিত ভাষা',
    exploreTitle: 'ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং অন্বেষণ করুন',
    exploreSubtitle: 'মৌলিক ধারণা থেকে শুরু করে অ্যাডভান্সড ইঞ্জিনিয়ারিং বিষয়সমূহ সহজ ভাষায় বুঝুন।',
    toolsTitle: 'শক্তিশালী ইলেকট্রিক্যাল ক্যালকুলেটর',
    toolsSubtitle: 'ইলেকট্রিক্যাল হিসাব, ফর্মুলা এবং সার্কিটের সমস্যা সহজে ও দ্রুত সমাধান করুন।',
    viewAllTools: 'সব টুলস দেখুন',
    practiceTitle: 'অনুশীলন। পরীক্ষা। উন্নতি।',
    practiceSubtitle: 'সেমিস্টার পরীক্ষা এবং প্রতিযোগিতামূলক পরীক্ষার (SSC JE, WBSETCL, ITI) জন্য প্রস্তুত হন।',
    startPractice: 'প্র্যাকটিস শুরু করুন',
    languageTitle: 'আপনার নিজের ভাষায় শিখুন',
    languageSubtitle: 'ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং শিখুন আপনার নিজস্ব ও সহজ ভাষায়।',
    languageBannerText: 'ভাষা পরিবর্তন করলে সমস্ত গুরুত্বপূর্ণ টার্ম এবং অধ্যায়ের বর্ণনা আপনার পছন্দের ভাষায় পরিবর্তিত হবে।',
    ctaTitle: 'আজই ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং শেখা শুরু করুন',
    ctaSubtitle: 'বিনামূল্যে শিক্ষা। ব্যবহারিক জ্ঞান। সেমিস্টার ও চাকরির পরীক্ষার সেরা প্রস্তুতি।',
    footerTagline: 'ডিগ্রি, ডিপ্লোমা এবং আইটিআই শিক্ষার্থীদের জন্য সম্পূর্ণ ফ্রি ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং প্ল্যাটফর্ম',
    footerCopyright: '© ২০২৬ ElectroStudy. সর্বস্বত্ব সংরক্ষিত।',
    footerBadge: 'শিক্ষামূলক ব্যবহারের জন্য সম্পূর্ণ বিনামূল্যে।',
    searchPlaceholder: 'বিষয়, নোটস, ফর্মুলা বা টুলস খুঁজুন (যেমন: ওহমের সূত্র, ট্রান্সফর্মার)...',
    navHome: 'হোম',
    navSubjects: 'বিষয়সমূহ',
    navNotes: 'নোটস',
    navMCQ: 'এমসিকিউ',
    navTools: 'টুলস',
    navExams: 'পরীক্ষা',
    navAbout: 'আমাদের কথা',
    quickCalcTitle: 'কুইক ইলেকট্রিক্যাল ক্যালকুলেটর',
    close: 'বন্ধ করুন',
    exploreCardBtn: 'সিলেবাস দেখুন',
    questionsCountText: 'প্রশ্ন',
    difficultyLabel: 'কঠিনতার মাত্রা',

    // Additional UI strings for complete localization
    logoSubtext: 'ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং হাব',
    searchLabel: 'খুঁজুন (Cmd+K)',
    tryCalculator: 'ক্যালকুলেটর ব্যবহার করুন',
    verifiedBadge: 'যাচাইকৃত',
    comprehensiveSyllabus: 'সম্পূর্ণ সিলেবাস',
    keyTopics: 'মূল বিষয়সমূহ',
    questionsAvailable: 'প্রশ্ন উপলব্ধ',
    activeLanguage: 'সক্রিয় ভাষা',
    currentlySelected: 'বর্তমানে নির্বাচিত',
    clickToSwitch: 'ক্লিক করে পরিবর্তন করুন',
    noCostFree: 'বিনামূল্যে • কোনো সীমাবদ্ধতা নেই • চিরকাল ফ্রি',
    targetAudiences: 'লক্ষ্যভিত্তিক শিক্ষার্থী',
    quickNavigation: 'দ্রুত নেভিগেশন',
    supportedLanguages: 'সমর্থিত ভাষাসমূহ',
    platformCommitment: 'প্ল্যাটফর্মের প্রতিশ্রুতি',
    freeAccessTitle: '১০০% ফ্রি অ্যাক্সেস',
    freeAccessDesc: 'সকল স্টাডি উপাদান, নোট, ফর্মুলা এবং ক্যালকুলেটর বিনামূল্যে ব্যবহারের জন্য উন্মুক্ত।',
    btechSyllabus: 'ডিগ্রি (B.Tech / BE)',
    diplomaSyllabus: 'ডিপ্লোমা ইলেকট্রিক্যাল',
    itiSyllabus: 'ITI ইলেকট্রিশিয়ান',
    schematicEngineTitle: 'ইন্টারেক্টিভ সার্কিট ডায়াগ্রাম Engine',
    realtimeFormulas: 'রিয়েল-টাইম সূত্র',
    interactiveSolvers: 'ইন্টারেক্টিভ সলভার',
    btechItiAligned: 'AICTE এবং NCVT নির্দেশিকা অনুযায়ী',
    calculatorTitle: 'ইন্টারেক্টিভ ইঞ্জিনিয়ারিং ক্যালকুলেটর',
    testPrepBadge: 'পরীক্ষা ও চাকরির প্রস্তুতি',
    multilingualHubBadge: 'বহুভাষিক ইঞ্জিনিয়ারিং হাব',
    navigationMenuTitle: 'নেভিগেশন মেনু',
    selectLanguage: 'ভাষা নির্বাচন করুন',
    calculatorsAndTools: 'ক্যালকুলেটর ও টুলস',
    mcqsAndPractice: 'এমসিকিউ এবং প্র্যাকটিস',
    typeToSearch: 'বিষয়, সূত্র, প্রশ্ন ও টুলস খুঁজতে টাইপ করুন',
    tryKeywords: 'খুঁজুন: "ওহমের সূত্র", "ট্রান্সফরমার", "মোটর", "ক্যাবল", "পাওয়ার"',
    syllabusBreakdown: 'সিলেবাসের বিস্তারিত (B.Tech / ডিপ্লোমা)',
    freeResource: 'ফ্রি রিসোর্স',
    calculatedOutput: 'গণনা করা ফলাফল',
    powerComponents: 'পাওয়ার কম্পোনেন্ট',
    recommendedCable: 'সুপারিশকৃত ক্যাবল',
    syllabusModules: 'সিলেবাস ও কোর্স মডিউল',
    calcDisclaimer: 'নোট: শিক্ষার জন্য প্রাথমিক গণনা। বাণিজ্যিক ও পেশাদার নকশার জন্য সরাসরি প্রযোজ্য নয়।',
    phase1Notice: 'ফেজ ১ শিক্ষামূলক ভিত্তি'
  }
};

export const STATS_DATA = [
  { id: 'stat-subjects', value: '10+', keyLabel: 'statsSubjectsLabel' },
  { id: 'stat-resources', value: '100+', keyLabel: 'statsResourcesLabel' },
  { id: 'stat-mcqs', value: '500+', keyLabel: 'statsQuestionsLabel' },
  { id: 'stat-languages', value: '3', keyLabel: 'statsLanguagesLabel' }
];

export const SUBJECTS_DATA: SubjectItem[] = [
  {
    id: 'basic-electrical',
    icon: 'Zap',
    color: 'from-cyan-500 to-blue-600',
    topicsCount: 18,
    badge: 'Core Basic',
    name: {
      en: 'Basic Electrical Engineering',
      hi: 'बेसिक इलेक्ट्रिकल इंजीनियरिंग',
      bn: 'বেসিক ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং'
    },
    description: {
      en: 'Fundamental principles including Ohm\'s law, Kirchhoff\'s laws, AC/DC circuits, magnetic circuits, and basic network theorems.',
      hi: 'ओम का नियम, किरचॉफ के नियम, AC/DC परिपथ, चुंबकीय परिपथ और नेटवर्क प्रमेय के मूलभूत सिद्धांत।',
      bn: 'ওহমের সূত্র, কার্শফের সূত্র, এসি/ডিসি সার্কিট, ম্যাগনেটিক সার্কিট এবং সার্কিট থিওরেমের মূল বিষয়বস্তু।'
    }
  },
  {
    id: 'electrical-machines',
    icon: 'Cpu',
    color: 'from-blue-600 to-indigo-600',
    topicsCount: 24,
    badge: 'Must Master',
    name: {
      en: 'Electrical Machines',
      hi: 'इलेक्ट्रिकल मशीन्स (DC & AC)',
      bn: 'ইলেকট্রিক্যাল মেশিনস (DC ও AC)'
    },
    description: {
      en: 'Detailed concepts of Transformers, DC Generators, DC Motors, 3-Phase Induction Motors, and Synchronous Machines.',
      hi: 'ट्रांसफॉर्मर, डीसी जनरेटर, डीसी मोटर, 3-फेज इंडक्शन मोटर और सिंक्रोनस मशीनों का विस्तृत अध्ययन।',
      bn: 'ট্রান্সফরমার, ডিসি জেনারেটর, ডিসি মোটর, ৩-ফেজ ইন্ডাকশন মোটর এবং সিনক্রোনাস মেশিনের সচিত্র ব্যাখ্যা।'
    }
  },
  {
    id: 'power-systems',
    icon: 'Activity',
    color: 'from-teal-500 to-emerald-600',
    topicsCount: 22,
    badge: 'High Weightage',
    name: {
      en: 'Power Systems',
      hi: 'पावर सिस्टम (जनरेशन, ट्रांसमिशन)',
      bn: 'পাওয়ার সিস্টেমস (বিদ্যুৎ উৎপাদন ও সঞ্চালন)'
    },
    description: {
      en: 'Power generation methods, transmission lines, switchgear & protection, distribution networks, and fault calculations.',
      hi: 'विद्युत उत्पादन की विधियां, पारेषण लाइनें, स्विचगियर एवं संरक्षण, तथा वितरण प्रणाली का अध्ययन।',
      bn: 'বিদ্যুৎ উৎপাদন পদ্ধতি, ট্রান্সমিশন লাইন, সুইচগিয়ার ও প্রটেকশন এবং ডিস্ট্রিবিউশন নেটওয়ার্ক।'
    }
  },
  {
    id: 'electrical-measurements',
    icon: 'Gauge',
    color: 'from-cyan-600 to-teal-600',
    topicsCount: 16,
    badge: 'Practical Lab',
    name: {
      en: 'Electrical Measurements & Instrumentation',
      hi: 'इलेक्ट्रिकल मापन एवं यंत्र',
      bn: 'ইলেকট্রিক্যাল মেজারমেন্টস ও ইনস্ট্রুমেন্টেশন'
    },
    description: {
      en: 'PMMC, MI instruments, Wattmeters, Energy meters, AC Bridges, CRO, transducers, and measurement errors.',
      hi: 'PMMC, MI मीटर, वाटमीटर, एनर्जी मीटर, AC ब्रिज, CRO, ट्रांसड्यूसर और मापन त्रुटियों का विवरण।',
      bn: 'PMMC, MI ইনস্ট্রুমেন্ট, ওয়াটমিটার, এনার্জি মিটার, এসি ব্রিজ, সিআরও এবং মেজারমেন্টের প্রাথমিক ধারণা।'
    }
  },
  {
    id: 'control-systems',
    icon: 'SlidersHorizontal',
    color: 'from-indigo-500 to-cyan-600',
    topicsCount: 14,
    badge: 'Engineering Core',
    name: {
      en: 'Control Systems',
      hi: 'कंट्रोल सिस्टम्स',
      bn: 'কন্ট্রোল সিস্টেমস'
    },
    description: {
      en: 'Open and closed loop control, transfer functions, block diagram reduction, Routh stability, and Root Locus techniques.',
      hi: 'ओपन एवं क्लोज्ड लूप नियंत्रण, ट्रांसफर फंक्शन, ब्लॉक आरेख, राउथ स्थिरता और रूट लोकस की अवधारणाएं।',
      bn: 'ওপেন ও ক্লোজড লুপ কন্ট্রোল, ট্রান্সফার ফাংশন, ব্লক ডায়াগ্রাম রিডাকশন এবং সিস্টেম স্ট্যাবিলিটি анализ।'
    }
  },
  {
    id: 'power-electronics',
    icon: 'Radio',
    color: 'from-sky-500 to-blue-700',
    topicsCount: 20,
    badge: 'Modern Tech',
    name: {
      en: 'Power Electronics & Drives',
      hi: 'पावर इलेक्ट्रॉनिक्स एवं ड्राइव्स',
      bn: 'পাওয়ার ইলেকট্রনিক্স ও ড্রাইভস'
    },
    description: {
      en: 'Thyristors, SCR characteristics, controlled rectifiers, choppers, inverters, and speed control of electric drives.',
      hi: 'थायरिस्टर, SCR विशेषताएं, नियंत्रित रेक्टिफायर, चॉपर, इन्वर्टर और मोटर स्पीड कंट्रोल ड्राइव्स।',
      bn: 'থাইরিস্টর, এসসিআর বৈশিষ্ট্য, নিয়ন্ত্রিত রেকটিফায়ার, চপার, ইনভার্টার এবং ইলেকট্রিক ড্রাইভ নিয়ন্ত্রন।'
    }
  }
];

export const TOOLS_DATA: ToolItem[] = [
  {
    id: 'ohms-law',
    icon: 'Zap',
    category: 'Circuit Basics',
    formula: 'V = I × R | P = V × I',
    name: {
      en: "Ohm's Law Calculator",
      hi: 'ओम का नियम कैलकुलेटर',
      bn: 'ওহমের সূত্র ক্যালকুলেটর'
    },
    description: {
      en: 'Calculate Voltage (V), Current (I), Resistance (R), and Power (P) effortlessly.',
      hi: 'वोल्टेज, करंट, प्रतिरोध और शक्ति का आसानी से मान ज्ञात करें।',
      bn: 'ভোল্টেজ, কারেন্ট, রেজিস্ট্যান্স এবং পাওয়ারের মান সহজেই গণনা করুন।'
    }
  },
  {
    id: 'power-calc',
    icon: 'Activity',
    category: 'Power Analysis',
    formula: 'P = V × I × cos(Φ)',
    name: {
      en: 'Power Calculator',
      hi: 'पावर कैलकुलेटर (AC & DC)',
      bn: 'পাওয়ার ক্যালকুলেটর (AC ও DC)'
    },
    description: {
      en: 'Calculate Active Power (kW), Reactive Power (kVAR), and Apparent Power (kVA) in single & 3-phase.',
      hi: 'एक्टिव, रिएक्टिव और अपैरेंट पावर की 1-फेज और 3-फेज में गणना करें।',
      bn: 'এক একক এবং ৩-ফেজ সার্কিটের কিলাওয়াট (kW), kVAR ও kVA পাওয়ার নির্ণয়।'
    }
  },
  {
    id: 'motor-current',
    icon: 'Cpu',
    category: 'Machines',
    formula: 'I = P / (√3 × V × PF × Eff)',
    name: {
      en: 'Motor Current Calculator',
      hi: 'मोटर फुल-लोड करंट कैलकुलेटर',
      bn: 'মোটর ফুল-লোড কারেন্ট ক্যালকুলেটর'
    },
    description: {
      en: 'Determine full-load current (FLC) for 3-phase and 1-phase AC induction motors with efficiency & PF.',
      hi: '3-फेज और 1-फेज एसी इंडक्शन मोटर के लिए फुल-लोड करंट का सटीक मान ज्ञात करें।',
      bn: '৩-ফেজ এবং ১-ফেজ এসি মোটরের জন্য ফুল-লোড কারেন্ট (FLC) নির্ধারণ করুন।'
    }
  },
  {
    id: 'cable-size',
    icon: 'Ruler',
    category: 'Wiring & Safety',
    formula: 'Area = (2 × L × I × ρ) / V_drop',
    name: {
      en: 'Cable Size Calculator',
      hi: 'केबल साइज कैलकुलेटर',
      bn: 'কেবল সাইজ ক্যালকুলেটর'
    },
    description: {
      en: 'Find recommended copper/aluminum wire size based on load current, length, and max allowed drop.',
      hi: 'लोड करंट, दूरी और अधिकतम स्वीकार्य वोल्टेज ड्रॉप के आधार पर केबल मोटाई ज्ञात करें।',
      bn: 'লোড কারেন্ট, তারের দৈর্ঘ্য এবং ভোল্টেজ ড্রপ অনুযায়ী সঠিক ক্যাবল নির্বাচন করুন।'
    }
  },
  {
    id: 'voltage-drop',
    icon: 'TrendingDown',
    category: 'Distribution',
    formula: 'V_drop = (2 × L × I × R) / 1000',
    name: {
      en: 'Voltage Drop Calculator',
      hi: 'वोल्टेज ड्रॉप कैलकुलेटर',
      bn: 'ভোল্টেজ ড্রপ ক্যালকুলেটর'
    },
    description: {
      en: 'Calculate percentage voltage drop across long transmission or building distribution cables.',
      hi: 'लंबी ट्रांसमिशन लाइन या भवन वायरिंग में वोल्टेज गिरावट प्रतिशत की गणना करें।',
      bn: 'দীর্ঘ ডিস্ট্রিবিউশন কেবল ও লাইনের ভোল্টেজ পতন বা লস শতাংশ নির্ণয় করুন।'
    }
  },
  {
    id: 'three-phase',
    icon: 'Layers',
    category: '3-Phase Systems',
    formula: 'P = √3 × V_line × I_line × cos(Φ)',
    name: {
      en: '3-Phase Power Calculator',
      hi: '3-फेज पावर कैलकुलेटर',
      bn: '৩-ফেজ পাওয়ার ক্যালকুলেটর'
    },
    description: {
      en: 'Star and Delta connected load calculations for line voltage, line current, and total active power.',
      hi: 'स्टार और डेल्टा लोड कनेक्शन के लिए लाइन और फेज मानों की त्वरित गणना।',
      bn: 'স্টার ও ডেল্টা লোড কানেকশনের জন্য লাইন ভোল্টেজ, কারেন্ট ও পাওয়ার বিশ্লেষণ।'
    }
  }
];

export const PRACTICE_DATA: PracticeItem[] = [
  {
    id: 'basic-mcq',
    questionsCount: 150,
    difficulty: 'Basic',
    icon: 'Zap',
    topics: ['Ohm\'s Law', 'KCL & KVL', 'Resistor Color Codes', 'AC vs DC Fundamentals'],
    title: {
      en: 'Basic Electrical MCQs',
      hi: 'बेसिक इलेक्ट्रिकल प्रश्नोत्तर',
      bn: 'বেসিক ইলেকট্রিক্যাল প্রশ্নাবলী'
    },
    difficultyLabel: {
      en: 'Basic Level',
      hi: 'बेसिक स्तर',
      bn: 'সহজ মাত্রা'
    }
  },
  {
    id: 'machines-mcq',
    questionsCount: 220,
    difficulty: 'Intermediate',
    icon: 'Cpu',
    topics: ['Transformers', 'Induction Motor Slip', 'DC Motor Starters', 'Alternator EMF Equation'],
    title: {
      en: 'Electrical Machines MCQs',
      hi: 'इलेक्ट्रिकल मशीन प्रश्नोत्तरी',
      bn: 'ইলেকট্রিক্যাল মেশিনস এমসিকিউ'
    },
    difficultyLabel: {
      en: 'Intermediate Level',
      hi: 'मध्यम स्तर',
      bn: 'মাঝারি মাত্রা'
    }
  },
  {
    id: 'power-mcq',
    questionsCount: 180,
    difficulty: 'Advanced',
    icon: 'ShieldAlert',
    topics: ['Relays & Circuit Breakers', 'Corona Effect', 'Sag Calculation', 'Tariff & Power Factor'],
    title: {
      en: 'Power Systems MCQs',
      hi: 'पावर सिस्टम प्रश्न बैंक',
      bn: 'পাওয়ার সিস্টেমস প্রশ্ন ব্যাংক'
    },
    difficultyLabel: {
      en: 'Advanced Level',
      hi: 'उच्च स्तर',
      bn: 'উচ্চ মাত্রা'
    }
  }
];
