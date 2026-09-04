import { Lesson } from '../types';

export const LESSON_DEMAND_TARIFF_PF_ECONOMICS: Lesson = {
  id: 'lsn-ch13-pf-economics-demand-tariff',
  topicId: 'tp-demand-tariff-pf-economics',
  chapterId: 'ch-power-factor',
  order: 8,
  title: {
    en: 'Maximum Demand, Utility Tariffs & PFC Economics',
    hi: 'अधिकतम मांग, बिजली टैरिफ एवं PFC अर्थशास्त्र',
    bn: 'সর্বোচ্চ চাহিদা, ইউটিলিটি ট্যারিফ ও PFC অর্থনীতি'
  },
  description: {
    en: 'Master the engineering and financial mechanics of industrial electricity tariffs. Explore two-part and three-part rate structures, maximum demand kVA billing meters, power factor penalty formulas, and utility incentive rebates. Learn quantitative techniques to calculate demand reduction, line loss mitigation, transformer headroom expansion, and capital budgeting payback periods.',
    hi: 'औद्योगिक बिजली टैरिफ के इंजीनियरिंग एवं वित्तीय तंत्र में महारत हासिल करें। दो-भाग एवं तीन-भाग दर संरचनाओं, अधिकतम मांग (kVA) बिलिंग मीटर, पावर फैक्टर जुर्माना सूत्रों एवं यूटिलिटी प्रोत्साहन छूट का अन्वेषण करें। मांग में कमी, लाइन हानि में कमी, ट्रांसफार्मर हेडरूम विस्तार एवं पूंजीगत पेबैक अवधि की मात्रात्मक गणना सीखें।',
    bn: 'শিল্প বিদ্যুৎ ট্যারিফের ইঞ্জিনিয়ারিং ও আর্থিক কলাকৌশল আয়ত্ত করুন। টু-পার্ট ও থ্রি-পার্ট রেট কাঠামো, সর্বোচ্চ চাহিদা (kVA) বিলিং মিটার, পাওয়ার ফ্যাক্টর জরিমানা সূত্র এবং রিবেট ছাড় অনুসন্ধান করুন। চাহিদা হ্রাস, লাইন লস হ্রাস, ট্রান্সফরমার ধারণক্ষমতা সম্প্রসারণ এবং মূলধনী পেব্যাক হিসাবের পরিমাণগত পদ্ধতি জানুন।'
  },
  estimatedMinutes: 50,
  easyExplanation: {
    en: 'Electricity utilities don’t just bill factories for the kilowatt-hours (kWh) they consume to do work; they also charge heavily for "Maximum Demand" measured in kilovolt-amperes (kVA). Think of kVA as the size of the pipe needed to deliver electricity. When your power factor is low (say 0.70), you need a much bigger pipe (more kVA) to deliver the same amount of useful work (kW). The utility company bills you for this extra capacity through a monthly demand charge, and they also add steep penalties if your average power factor drops below 0.90! By installing power factor correction capacitors, you provide the reactive power locally, shrinking your billed kVA by 20% to 30%, completely eliminating monthly penalties, and earning a bonus discount on your bill. In most industrial plants, the capacitor bank pays for itself in just 6 to 12 months!',
    hi: 'बिजली कंपनियां कारखानों से केवल उनके द्वारा उपयोग की गई ऊर्जा (kWh) का बिल नहीं लेतीं, बल्कि किलोवोल्ट-एम्पीयर (kVA) में मापी जाने वाली "अधिकतम मांग" (Maximum Demand) के लिए भी भारी शुल्क लेती हैं। kVA को बिजली पहुंचाने वाले पाइप के आकार की तरह समझें। जब पावर फैक्टर कम (जैसे 0.70) होता है, तो समान उपयोगी कार्य (kW) करने के लिए बहुत बड़े पाइप (अधिक kVA) की आवश्यकता होती है। यूटिलिटी इस अतिरिक्त क्षमता के लिए हर महीने मांग शुल्क लेती है और PF 0.90 से कम होने पर भारी जुर्माना लगाती है! कैपेसिटर बैंक लगाकर आप स्थानीय रूप से रिएक्टिव पावर की आपूर्ति करते हैं, जिससे बिल का kVA 20% से 30% तक घट जाता है, जुर्माना समाप्त हो जाता है और बिल में छूट मिलती है। अधिकांश कारखानों में यह निवेश मात्र 6 से 12 महीनों में वापस मिल जाता है!',
    bn: 'বিদ্যুৎ কোম্পানিগুলি কেবল কাজের জন্য ব্যবহৃত মোট ইউনিট বা কিলোওয়াট-ঘণ্টা (kWh) দিয়েই শিল্প কারখানার বিল তৈরি করে না; তারা কিলোভোল্ট-অ্যাম্পিয়ার (kVA) এককে পরিমাপ করা "সর্বোচ্চ চাহিদা" বা ম্যাক্সিমাম ডিমান্ডের জন্যও চড়া হারে চার্জ করে। kVA-কে বিদ্যুৎ সরবরাহের পাইপের আকারের সাথে তুলনা করা যায়। পাওয়ার ফ্যাক্টর কম থাকলে (যেমন ০.৭০) একই পরিমাণ দরকারী কাজ (kW) পেতে অনেক মোটা তার বা পাইপের (অতিরিক্ত kVA) প্রয়োজন হয়। বিদ্যুৎ সংস্থা এই অতিরিক্ত ক্যাপাসিটির জন্য প্রতি মাসে ডিমান্ড চার্জ আদায় করে এবং PF ০.৯০ এর নিচে নামলে অতিরিক্ত জরিমানা চাপায়! পাওয়ার ফ্যাক্টর ক্যাপাসিটর স্থাপন করে স্থানীয়ভাবে রিঅ্যাক্টিভ পাওয়ার সরবরাহ করলে বিলের kVA ২০% থেকে ৩০% পর্যন্ত কমে যায়, মাসিক জরিমানা সম্পূর্ণরূপে বন্ধ হয় এবং সরকারি রিবেট বোনাস পাওয়া যায়। বেশিরভাগ শিল্পে এই ক্যাপাসিটর ব্যাংক মাত্র ৬ থেকে ১২ মাসের মধ্যে তার সমস্ত খরচ তুলে আনে!'
  },
  detailedExplanation: {
    en: 'Industrial electricity economics is governed by tariff structures that reflect both energy consumption and grid infrastructure capacity constraints:\n\n1. Industrial Rate Structures (Two-Part & Three-Part Tariffs):\n- Active Energy Charge ($/kWh): Billed for actual energy consumed: Cost_energy = Energy_kWh · Rate_kWh.\n- Maximum Demand Charge ($/kVA/month): Billed for the peak apparent power recorded by a 15-minute or 30-minute integrating demand register: Cost_demand = S_max · Rate_kVA.\n- Power Factor Surcharge / Penalty Clause: If monthly average power factor drops below a statutory threshold (typically PF_ref = 0.90 or 0.92 lagging), a percentage surcharge is applied to the total bill:\n  Penalty (%) = k_pen · (PF_ref - PF_actual) · 100, where k_pen typically ranges from 1.0 to 1.5.\n- Power Factor Incentive / Rebate Clause: If average power factor exceeds an efficiency threshold (typically 0.95 lagging), the utility credits an incentive rebate:\n  Rebate (%) = k_reb · (PF_actual - PF_reb_threshold) · 100 up to unity.\n\n2. Analytical Demand Reduction Mechanics:\nActive power P remains strictly constant across compensation. The apparent power demand is inversely proportional to power factor:\n  S_1 = P / PF_1  (before compensation)\n  S_2 = P / PF_2  (after compensation)\n  ΔS = S_1 - S_2 = P · (1/PF_1 - 1/PF_2)\nExample: An industrial plant operates at P = 750 kW with PF_1 = 0.75. Demand is S_1 = 1,000 kVA. Improving to PF_2 = 0.98 reduces demand to S_2 = 765.3 kVA, saving ΔS = 234.7 kVA every month. At a demand tariff of $14/kVA/month, monthly savings = 234.7 · $14 = $3,285.80, or $39,430 annually!\n\n3. Substation Transformer Headroom Release:\nDistribution transformers and feeder conductors are thermally rated in kVA (current carrying capacity), not kW. Operating at low power factor bottlenecks electrical infrastructure:\n  Available spare capacity (headroom) ΔS_trafo = S_rated - S_2.\n  Recovered active power capacity: ΔP_recovered = S_rated · (PF_2 - PF_1).\nFor a 1,000 kVA transformer upgraded from PF 0.75 to 0.98, the plant unlocks ΔP = 1,000 · (0.98 - 0.75) = 230 kW of usable active power capacity without buying an expensive new transformer.\n\n4. Internal Line Loss Mitigation:\nFeeder I²R losses scale with the square of the line current:\n  P_loss = 3 · I² · R_feeder.\nSince current I = P / (√3 · V_L · PF), line losses decrease with the square of power factor:\n  P_loss_2 = P_loss_1 · (PF_1 / PF_2)².\nImproving PF from 0.72 to 0.98 reduces electrical feeder losses by: 1 - (0.72 / 0.98)² = 1 - 0.54 = 46% loss reduction!\n\n5. Capital Budgeting & Simple Payback Period (SPP):\n  SPP = Total Installed CapEx / Net Annual Operating Savings.\nInstalled APFC cost generally ranges from $30 to $65 per kVAR. With typical annual demand and penalty savings of $40 to $90 per kVAR compensated, payback periods fall between 6 and 14 months, representing internal rates of return (IRR) exceeding 80% to 150%.',
    hi: 'औद्योगिक बिजली का अर्थशास्त्र एवं टैरिफ संरचना:\n\n1. औद्योगिक दर संरचना (द्वि-भाग एवं त्रि-भाग टैरिफ):\n- सक्रिय ऊर्जा शुल्क ($/kWh): खपत की गई वास्तविक ऊर्जा।\n- अधिकतम मांग शुल्क ($/kVA/माह): 15 या 30 मिनट के पीक kVA पर आधारित मांग शुल्क।\n- पावर फैक्टर जुर्माना: 0.90 से नीचे PF गिरने पर कुल बिल पर 1% से 1.5% प्रति 0.01 PF का जुर्माना।\n- पावर फैक्टर प्रोत्साहन (छूट): 0.95 से अधिक PF होने पर बिल पर 0.5% प्रति 0.01 PF की नकद छूट।\n\n2. मांग में कमी (kVA Reduction):\nS = P / PF। जब सक्रिय भार P स्थिर रहता है, तो मांग में कमी ΔS = P · (1/PF_1 - 1/PF_2) होती है। 750 kW भार पर PF को 0.75 से 0.98 करने पर मांग 1,000 kVA से घटकर 765 kVA रह जाती है (235 kVA की बचत)। $14/kVA की दर से यह सालाना $39,400 से अधिक की शुद्ध बचत देता है!\n\n3. ट्रांसफार्मर क्षमता की मुक्ति (हेडरूम):\nट्रांसफार्मर और केबल kVA (करंट) पर आधारित होते हैं। 1,000 kVA का ट्रांसफार्मर 0.75 PF पर केवल 750 kW दे सकता है, जबकि 0.98 PF पर यह 980 kW दे सकता है। 230 kW की क्षमता मुक्त हो जाती है, जिससे बिना नया ट्रांसफार्मर खरीदे अतिरिक्त मशीनें चलाई जा सकती हैं।\n\n4. आंतरिक लाइन हानि में कमी:\nकेबल में होने वाली I²R हानि करंट के वर्ग के समानुपाती होती है। PF को 0.72 से 0.98 तक बढ़ाने पर आंतरिक बिजली हानियों में 46% की भारी गिरावट आती है।\n\n5. पेबैक अवधि:\nSPP = कुल स्थापित लागत / वार्षिक बचत। अधिकांश औद्योगिक APFC पैनल 6 से 14 महीनों में अपनी पूरी लागत वसूल कर लेते हैं।',
    bn: 'শিল্প বিদ্যুৎ অর্থনীতি ও ট্যারিফ কাঠামোর বিস্তারিত বিশ্লেষণ:\n\n১. শিল্প বিদ্যুতের দর কাঠামো (টু-পার্ট ও থ্রি-পার্ট ট্যারিফ):\n- সক্রিয় শক্তি বিল ($/kWh): ব্যবহৃত মোট শক্তির মূল্য।\n- সর্বোচ্চ চাহিদা চার্জ ($/kVA/মাস): ১৫ বা ৩০ মিনিটের সর্বোচ্চ রেকর্ডকৃত kVA এর ওপর ধার্য বিল।\n- পাওয়ার ফ্যাক্টর জরিমানা: গড় PF ০.৯০ এর নিচে নামলে মোট বিদ্যুৎ বিলে শতকরা হারে অতিরিক্ত জরিমানা।\n- পাওয়ার ফ্যাক্টর রিবেট: গড় PF ০.৯৫ এর ওপরে উন্নীত হলে প্রতি ০.০১ PF বৃদ্ধির জন্য বিলে শতকরা রিবেট ছাড়।\n\n২. ডিমান্ড হ্রাস গণনা:\nS = P / PF। সক্রিয় লোড P স্থির থাকলে ডিমান্ড হ্রাস ΔS = P · (১/PF_১ - ১/PF_২)। ৭৫০ kW প্ল্যান্টে PF ০.৭৫ থেকে ০.৯৮ এ উন্নীত করলে kVA ১,০০০ থেকে কমে ৭৬৫ kVA হয় (২৩৫ kVA সাশ্রয়)। প্রতি kVA-তে $১৪ হলে বছরে প্রায় $৩৯,৪৩০ সাশ্রয় হয়!\n\n৩. ট্রান্সফরমার ধারণক্ষমতা বৃদ্ধি (হেডরুম রিলিজ):\nট্রান্সফরমার ও তারের ক্ষমতা মূলত kVA কারেন্ট দ্বারা সীমাবদ্ধ। ১,০০০ kVA ট্রান্সফরমার ০.৭৫ PF এ মাত্র ৭৫০ kW দিতে পারে, কিন্তু ০.৯৮ PF এ এটি ৯৮০ kW উৎপাদন করতে পারে। কোনো নতুন ট্রান্সফরমার না কিনেই ২৩০ kW অতিরিক্ত লোড চালানোর ক্ষমতা পাওয়া যায়।\n\n৪. ফিডার লাইন লস হ্রাস:\nI²R শক্তি অপচয় কারেন্টের বর্গের সমানুপাতিক। PF ০.৭২ থেকে ০.৯৮ এ উন্নীত করলে অভ্যন্তরীণ বিদ্যুৎ অপচয় প্রায় ৪৬% হ্রাস পায়।\n\n৫. মূলধনী পেব্যাক সময়কাল (SPP):\nSPP = মোট প্রাথমিক খরচ / বার্ষিক মোট সাশ্রয়। সাধারণত ৬ থেকে ১৪ মাসের মধ্যে সম্পূর্ণ বিনিয়োগ উঠে আসে।'
  },
  formulas: [
    {
      id: 'f-demand-kva-reduction',
      symbol: '\\Delta S',
      expression: '\\Delta S = P \\cdot \\left(\\frac{1}{PF_1} - \\frac{1}{PF_2}\\right)',
      title: {
        en: 'Maximum Demand Reduction (kVA)',
        hi: 'अधिकतम मांग में कमी (kVA)',
        bn: 'সর্বোচ্চ চাহিদা হ্রাস (kVA)'
      },
      description: {
        en: 'Calculates the reduction in billed apparent power maximum demand when power factor is improved from PF1 to PF2 for constant active power load P.',
        hi: 'स्थिर सक्रिय भार P के लिए पावर फैक्टर को PF1 से PF2 तक सुधारने पर बिल योग्य kVA मांग में कमी की गणना करता है।',
        bn: 'ধ্রুব সক্রিয় লোড P এর জন্য পাওয়ার ফ্যাক্টর PF1 থেকে PF2 তে উন্নীত করার ফলে সর্বোচ্চ kVA চাহিদা হ্রাস গণনা করে।'
      },
      variables: [
        { symbol: '\\Delta S', name: { en: 'Billed demand reduction (kVA)', hi: 'मांग में कमी (kVA)', bn: 'বিলিং চাহিদা হ্রাস (kVA)' } },
        { symbol: 'P', name: { en: 'Active plant operating load (kW)', hi: 'सक्रिय प्लांट लोड (kW)', bn: 'প্ল্যান্টের সক্রিয় লোড (kW)' } },
        { symbol: 'PF_1', name: { en: 'Initial uncompensated power factor', hi: 'प्रारंभिक पावर फैक्टर', bn: 'প্রাথমিক পাওয়ার ফ্যাক্টর' } },
        { symbol: 'PF_2', name: { en: 'Target corrected power factor', hi: 'सुधरा हुआ पावर फैक्टर', bn: 'উন্নত পাওয়ার ফ্যাক্টর' } }
      ]
    },
    {
      id: 'f-feeder-loss-reduction',
      symbol: '\\% \\Delta P_{\\text{loss}}',
      expression: '\\% \\Delta P_{\\text{loss}} = \\left[1 - \\left(\\frac{PF_1}{PF_2}\\right)^2\\right] \\times 100\\%',
      title: {
        en: 'Feeder I²R Loss Reduction Percentage',
        hi: 'फीडर I²R हानि में प्रतिशत कमी',
        bn: 'ফিডার I²R অপচয় হ্রাসের শতকরা হার'
      },
      description: {
        en: 'Calculates the percentage reduction in cable and busbar conductor resistive dissipation resulting from power factor correction.',
        hi: 'पावर फैक्टर सुधार के परिणामस्वरूप केबल और बसबार कंडक्टर में होने वाली प्रतिरोधक ऊर्जा हानि में प्रतिशत कमी की गणना।',
        bn: 'পাওয়ার ফ্যাক্টর সংশোধনের ফলে কেবল ও বাসবারে রেজিস্ট্যান্সজনিত শক্তি অপচয় হ্রাসের শতকরা হার গণনা।'
      },
      variables: [
        { symbol: '\\% \\Delta P_{\\text{loss}}', name: { en: 'Conductor loss reduction percentage (%)', hi: 'हानि में कमी का प्रतिशत (%)', bn: 'অপচয় হ্রাসের শতকরা হার (%)' } },
        { symbol: 'PF_1', name: { en: 'Initial power factor', hi: 'प्रारंभिक पावर फैक्टर', bn: 'প্রাথমিক পাওয়ার ফ্যাক্টর' } },
        { symbol: 'PF_2', name: { en: 'Improved power factor', hi: 'सुधरा हुआ पावर फैक्टर', bn: 'উন্নত পাওয়ার ফ্যাক্টর' } }
      ]
    },
    {
      id: 'f-simple-payback-period',
      symbol: 'SPP',
      expression: 'SPP = \\frac{\\text{CapEx}_{\\text{total}}}{\\text{Annual Savings}_{\\text{demand}} + \\text{Annual Savings}_{\\text{penalty}} + \\text{Annual Rebate}}',
      title: {
        en: 'Simple Payback Period (SPP)',
        hi: 'साधारण पेबैक अवधि (SPP)',
        bn: 'সরল বিনিয়োগ প্রত্যাহার কাল (SPP)'
      },
      description: {
        en: 'Determines the number of years (or months) required for cumulative operational tariff savings to completely recover total initial capital expenditure.',
        hi: 'प्रारंभिक पूंजीगत लागत को पूरी तरह से वसूल करने के लिए आवश्यक वर्षों (या महीनों) की संख्या निर्धारित करता है।',
        bn: 'প্রাথমিক মোট মূলধনী খরচ পুরোপুরি তুলে আনার জন্য প্রয়োজনীয় সময় (বছর বা মাস) নির্ণয় করে।'
      },
      variables: [
        { symbol: 'SPP', name: { en: 'Simple payback period (Years or Months)', hi: 'पेबैक अवधि (वर्ष या महीने)', bn: 'পেব্যাক সময়কাল (বছর বা মাস)' } },
        { symbol: '\\text{CapEx}_{\\text{total}}', name: { en: 'Total installed PFC capital cost ($)', hi: 'कुल स्थापित PFC लागत ($)', bn: 'PFC ইনস্টলেশনের মোট মূলধন ($)' } }
      ]
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch13-l08-01',
      title: {
        en: 'Example 1: Industrial Two-Part Tariff Demand Savings & Payback',
        hi: 'उदाहरण 1: औद्योगिक द्वि-भाग टैरिफ मांग बचत एवं पेबैक',
        bn: 'উদাহরণ ১: শিল্প দ্বি-স্তর ট্যারিফ চাহিদা সাশ্রয় ও পেব্যাক হিসাব'
      },
      problem: {
        en: 'A manufacturing facility draws a steady active power load of P = 600 kW at an initial lagging power factor of PF_1 = 0.72. The electric utility assesses a maximum demand charge of $16.00 per kVA per month and imposes a 1.5% penalty on the total monthly energy bill ($28,000/mo) for each 0.01 that the power factor falls below 0.90 lagging. (a) Calculate the required capacitor bank rating to achieve PF_2 = 0.98 lagging. (b) Determine the monthly demand charge reduction. (c) Calculate total monthly savings including penalty elimination. (d) If the installed APFC panel costs $27,000, find the Simple Payback Period in months.',
        hi: 'एक विनिर्माण संयंत्र 0.72 लैगिंग पावर फैक्टर पर P = 600 kW का स्थिर सक्रिय भार लेता है। बिजली कंपनी $16.00 प्रति kVA प्रति माह का मांग शुल्क लगाती है और 0.90 से नीचे प्रत्येक 0.01 PF के लिए कुल मासिक ऊर्जा बिल ($28,000) पर 1.5% का जुर्माना लगाती है। (a) 0.98 PF प्राप्त करने के लिए आवश्यक कैपेसिटर बैंक रेटिंग की गणना करें। (b) मासिक मांग शुल्क में कमी ज्ञात करें। (c) जुर्माना समाप्ति सहित कुल मासिक बचत ज्ञात करें। (d) यदि APFC पैनल की लागत $27,000 है, तो महीनों में पेबैक अवधि ज्ञात करें।',
        bn: 'একটি কারখানা ০.৭২ ল্যাগিং পাওয়ার ফ্যাক্টরে P = ৬০০ kW লোড ব্যবহার করে। বিদ্যুৎ সংস্থা প্রতি মাসে প্রতি kVA ডিমান্ডে $১৬.০০ চার্জ করে এবং ০.৯০ এর নিচে প্রতি ০.০১ PF হ্রাসের জন্য মাসিক বিলের ($২৮,০০০) ওপর ১.৫% জরিমানা আরোপ করে। (a) ০.৯৮ ল্যাগিং PF পেতে প্রয়োজনীয় ক্যাপাসিটর ব্যাংকের মান নির্ণয় করুন। (b) মাসিক ডিমান্ড চার্জ হ্রাস নির্ণয় করুন। (c) জরিমানা দূরীকরণসহ মোট মাসিক সাশ্রয় হিসাব করুন। (d) APFC প্যানেলের মোট খরচ $২৭,০০০ হলে পেব্যাক পিরিয়ড (মাসে) নির্ণয় করুন।'
      },
      solution: {
        en: 'Step 1: Calculate initial and target angles:\n  θ₁ = arccos(0.72) = 43.95° ➔ tan(θ₁) = 0.9639\n  θ₂ = arccos(0.98) = 11.48° ➔ tan(θ₂) = 0.2031\n\nStep 2: Required capacitor rating Q_c:\n  Q_c = P · [tan(θ₁) - tan(θ₂)] = 600 · [0.9639 - 0.2031] = 600 · 0.7608 = 456.5 kVAR\n  Install standard 450 kVAR or 475 kVAR APFC bank.\n\nStep 3: Calculate demand reduction:\n  S₁ = P / PF₁ = 600 / 0.72 = 833.33 kVA\n  S₂ = P / PF₂ = 600 / 0.98 = 612.24 kVA\n  ΔS = S₁ - S₂ = 833.33 - 612.24 = 221.09 kVA reduction.\n  Monthly demand savings = 221.09 kVA · $16.00/kVA = $3,537.44 / month.\n\nStep 4: Calculate penalty avoided:\n  Underperformance below 0.90 = (0.90 - 0.72) = 0.18 (which is 18 increments of 0.01).\n  Monthly penalty percentage = 18 · 1.5% = 27% penalty surcharge!\n  Monthly penalty charge = 27% of $28,000 = $7,560.00 / month.\n\nStep 5: Total monthly savings:\n  Total monthly savings = Demand savings + Penalty eliminated\n  Total monthly savings = $3,537.44 + $7,560.00 = $11,097.44 / month!\n\nStep 6: Simple Payback Period:\n  SPP = CapEx / Monthly Savings = $27,000 / $11,097.44 = 2.43 months!\n  The APFC panel completely pays for itself in less than two and a half months!',
        hi: 'चरण 1: कोण ज्ञात करें: θ₁ = 43.95°, tan(θ₁) = 0.9639; θ₂ = 11.48°, tan(θ₂) = 0.2031।\n\nचरण 2: आवश्यक कैपेसिटर Q_c = 600 · (0.9639 - 0.2031) = 456.5 kVAR। 475 kVAR बैंक चुनें।\n\nचरण 3: मांग में कमी: S₁ = 600 / 0.72 = 833.3 kVA; S₂ = 600 / 0.98 = 612.2 kVA; ΔS = 221.1 kVA।\nमासिक मांग बचत = 221.1 · $16 = $3,537.44/माह।\n\nचरण 4: बचाया गया जुर्माना: (0.90 - 0.72) = 18 स्टेप। जुर्माना = 18 · 1.5% = 27%।\nमासिक जुर्माना = $28,000 का 27% = $7,560.00/माह।\n\nचरण 5: कुल मासिक बचत = $3,537.44 + $7,560.00 = $11,097.44 प्रति माह।\n\nचरण 6: पेबैक अवधि = $27,000 / $11,097.44 = 2.43 महीने (ढाई महीने से भी कम)!',
        bn: 'ধাপ ১: কোণ নির্ণয়: θ₁ = ৪৩.৯৫°, tan(θ₁) = ০.৯৬৩৯; θ₂ = ১১.৪৮°, tan(θ₂) = ০.২০৩১।\n\nধাপ ২: প্রয়োজনীয় ক্যাপাসিটর Q_c = ৬০০ · (০.৯৬৩৯ - ০.২০৩১) = ৪৫৬.৫ kVAR। (মানক ৪৭৫ kVAR ব্যাংক)।\n\nধাপ ৩: চাহিদা হ্রাস: S₁ = ৮৩৩.৩৩ kVA; S₂ = ৬১২.২৪ kVA; ΔS = ২২১.০৯ kVA।\nমাসিক চাহিদা সাশ্রয় = ২২১.০৯ · $১৬ = $৩,৫৩৭.৪৪ প্রতি মাসে।\n\nধাপ ৪: পরিহারকৃত জরিমানা: (০.৯০ - ০.৭২) = ১৮ টি ধাপ। মোট জরিমানা = ১৮ · ১.৫% = ২৭%।\nমাসিক জরিমানা = $২৮,০০০ এর ২৭% = $৭,৫৬০.০০/মাস।\n\nধাপ ৫: মোট মাসিক সাশ্রয় = $৩,৫৩৭.৪৪ + $৭,৫৬০.০০ = $১১,০৯৭.৪৪ প্রতি মাসে।\n\nধাপ ৬: পেব্যাক সময়কাল = $২৭,০০০ / $১১,০৯৭.৪৪ = ২.৪৩ মাস (আড়াই মাসেরও কম সময়ে পুরো খরচ উঠে আসে)!'
      }
    },
    {
      id: 'ex-ch13-l08-02',
      title: {
        en: 'Example 2: Transformer Headroom Unlocking & Feeder Loss Reduction',
        hi: 'उदाहरण 2: ट्रांसफार्मर क्षमता की मुक्ति एवं फीडर हानि में कमी',
        bn: 'উদাহরণ ২: ট্রান্সফরমার অতিরিক্ত ক্ষমতা অবমুক্তকরণ ও লাইন লস হ্রাস'
      },
      problem: {
        en: 'A 415V industrial substation transformer is rated at S_rated = 1,250 kVA. The factory currently operates at P = 900 kW with an uncompensated power factor of PF_1 = 0.75 lagging. (a) Is the transformer overloaded? (b) If the factory installs an APFC bank to improve the power factor to PF_2 = 0.98, determine the new transformer operating kVA and the released active load headroom ΔP. (c) If feeder cable resistance is R = 0.015 Ω per phase, calculate the reduction in 3-phase feeder I²R power loss in kW.',
        hi: 'एक 415V सबस्टेशन ट्रांसफार्मर की रेटिंग S_rated = 1,250 kVA है। कारखाना वर्तमान में P = 900 kW भार 0.75 लैगिंग पावर फैक्टर पर चला रहा है। (a) क्या ट्रांसफार्मर ओवरलोड है? (b) यदि APFC बैंक लगाकर PF बढ़ाकर 0.98 किया जाए, तो नया kVA लोड और मुक्त हुई सक्रिय शक्ति क्षमता ΔP ज्ञात करें। (c) यदि केबल का प्रतिरोध R = 0.015 Ω प्रति फेज है, तो फीडर I²R हानि में कमी (kW में) ज्ञात करें।',
        bn: 'একটি ৪১৫V সাবস্টেশন ট্রান্সফরমারের ক্ষমতা S_rated = ১,২৫০ kVA। কারখানাটি বর্তমানে ০.৭৫ ল্যাগিং PF-এ P = ৯০০ kW লোড চালাচ্ছে। (a) ট্রান্সফরমারটি কি ওভারলোডেড? (b) APFC ব্যাংক স্থাপন করে PF ০.৯৮ এ উন্নীত করলে নতুন kVA লোড এবং মুক্ত হওয়া সক্রিয় ক্ষমতা ΔP কত হবে? (c) প্রতি ফেজে ফিডার কেবলের রোধ R = ০.০১৫ Ω হলে ৩-ফেজ I²R শক্তি অপচয় হ্রাস (kW) নির্ণয় করুন।'
      },
      solution: {
        en: 'Step 1: Evaluate initial loading:\n  S₁ = P / PF₁ = 900 kW / 0.75 = 1,200 kVA.\n  Loading percentage = (1,200 / 1,250) · 100% = 96.0% (Dangerously close to maximum capacity; no room for expansion).\n\nStep 2: Calculate corrected loading and released capacity:\n  S₂ = P / PF₂ = 900 kW / 0.98 = 918.37 kVA.\n  Corrected loading percentage = (918.37 / 1,250) · 100% = 73.47% (Cool running with ample reserve).\n  Released transformer kVA capacity = 1,200 - 918.37 = 281.63 kVA.\n  Recovered active power capacity at PF = 0.98: ΔP = 281.63 · 0.98 = 276 kW of new factory machinery can be added without buying an additional transformer!\n\nStep 3: Feeder current before and after correction:\n  I₁ = (S₁ · 1000) / (√3 · 415) = 1,200,000 / 718.8 = 1,669.4 A.\n  I₂ = (S₂ · 1000) / (√3 · 415) = 918,370 / 718.8 = 1,277.6 A.\n  Current reduction = 1,669.4 - 1,277.6 = 391.8 A (-23.5% current reduction).\n\nStep 4: Feeder I²R loss reduction:\n  P_loss_1 = 3 · I₁² · R = 3 · (1,669.4)² · 0.015 = 125,410 W = 125.4 kW.\n  P_loss_2 = 3 · I₂² · R = 3 · (1,277.6)² · 0.015 = 73,450 W = 73.5 kW.\n  Feeder loss savings = 125.4 - 73.5 = 51.9 kW of pure waste eliminated 24/7!',
        hi: 'चरण 1: प्रारंभिक लोडिंग: S₁ = 900 / 0.75 = 1,200 kVA (96% लोडिंग; ओवरलोडिंग के करीब)।\n\nचरण 2: सुधार के बाद लोडिंग: S₂ = 900 / 0.98 = 918.4 kVA (73.5% लोडिंग)।\nमुक्त हुई ट्रांसफार्मर क्षमता = 1,200 - 918.4 = 281.6 kVA।\nअतिरिक्त सक्रिय भार क्षमता ΔP = 281.6 · 0.98 = 276 kW बिना नया ट्रांसफार्मर खरीदे उपलब्ध है!\n\nचरण 3: फीडर करंट:\nI₁ = 1,200,000 / (√3 · 415) = 1,669.4 A; I₂ = 918,370 / (√3 · 415) = 1,277.6 A। करंट में 391.8 A (-23.5%) की कमी।\n\nचरण 4: लाइन लॉस में कमी:\nP_loss_1 = 3 · (1,669.4)² · 0.015 = 125.4 kW;\nP_loss_2 = 3 · (1,277.6)² · 0.015 = 73.5 kW।\nऊर्जा हानि में शुद्ध बचत = 51.9 kW चौबीसों घंटे!',
        bn: 'ধাপ ১: প্রাথমিক লোডিং: S₁ = ৯০০ / ০.৭৫ = ১,২০০ kVA (৯৬% লোডিং, অত্যন্ত ঝুঁকিপূর্ণ সীমার কাছাকাছি)।\n\nধাপ ২: সংশোধিত লোডিং: S₂ = ৯০০ / ০.৯৮ = ৯১৮.৪ kVA (৭৩.৫% লোডিং)।\nমুক্ত ট্রান্সফরমার ক্ষমতা = ১,২০০ - ৯১৮.৪ = ২৮১.৬ kVA।\nনতুন মেশিন চালানোর সক্রিয় ক্ষমতা ΔP = ২৮১.৬ · ০.৯৮ = ২৭৬ kW কোনো অতিরিক্ত ট্রান্সফরমার কেনা ছাড়াই পাওয়া গেল!\n\nধাপ ৩: ফিডার কারেন্ট:\nI₁ = ১,৬৬৯.৪ A; I₂ = ১,২৭৭.৬ A। বিদ্যুৎপ্রবাহ হ্রাস ৩৯১.৮ A (-২৩.৫%)।\n\nধাপ ৪: লাইন লস হ্রাস:\nP_loss_১ = ৩ · (১,৬৬৯.৪)² · ০.০১৫ = ১২৫.৪ kW;\nP_loss_২ = ৩ · (১,২৭৭.৬)² · ০.০১৫ = ৭৩.৫ kW।\nসার্বক্ষণিক লাইন লস সাশ্রয় = ৫১.৯ kW!'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Industrial Maximum Demand Shaving: Dynamic kVAR compensation during factory shift changes and peak motor starting cycles prevents apparent power spikes on 15-minute utility demand registers, saving tens of thousands of dollars each month.',
      'Substation Capital Expenditure Deferral: Upgrading power factor from 0.75 to 0.98 frees up 20% to 25% of transformer kVA capacity, enabling manufacturing expansion without purchasing expensive substation transformers and switchgear.'
    ],
    hi: [
      'औद्योगिक अधिकतम मांग शेविंग: मोटर स्टार्टिंग चक्रों के दौरान गतिशील kVAR आपूर्ति 15-मिनट के यूटिलिटी डिमांड मीटर पर kVA स्पाइक्स को रोकती है, जिससे हर महीने भारी बचत होती है।',
      'सबस्टेशन पूंजीगत व्यय को टालना: PF को 0.75 से 0.98 तक बढ़ाने से ट्रांसफार्मर की 20% से 25% क्षमता मुक्त होती है, जिससे बिना नया ट्रांसफार्मर खरीदे उत्पादन बढ़ाया जा सकता है।'
    ],
    bn: [
      'শিল্প সর্বোচ্চ চাহিদা কর্তন (ডিমান্ড শেভিং): কারখানার পিক সময়ে গতিশীল kVAR সরবরাহ করে ১৫ মিনিটের মিটারে kVA স্পাইক উঠতে না দিয়ে প্রতি মাসে বিপুল অর্থ সাশ্রয় করা।',
      'সাবস্টেশন মূলধনী ব্যয় স্থগিতকরণ: PF ০.৭৫ থেকে ০.৯৮ এ উন্নীত করার মাধ্যমে ২০% থেকে ২৫% kVA ক্ষমতা মুক্ত করে নতুন ট্রান্সফরমার না কিনেই কারখানা সম্প্রসারণ করা।'
    ]
  },
  importantPoints: {
    en: [
      'Apparent power demand S (kVA) is inversely proportional to power factor: S = P / cos(φ). Active power P (kW) does not change when adding capacitors.',
      'Never target unity (1.00) or leading power factor on utility incomers; utilities penalize leading power factor equally severely and it destabilizes voltage regulation.',
      'Conductor I²R losses decrease with the square of power factor ratio: P_loss_2 = P_loss_1 · (PF_1 / PF_2)², significantly reducing cable operating temperatures.'
    ],
    hi: [
      'आभासी शक्ति मांग S (kVA) पावर फैक्टर के व्युत्क्रमानुपाती होती है: S = P / cos(φ)। कैपेसिटर जोड़ने पर सक्रिय शक्ति P (kW) नहीं बदलती।',
      'यूटिलिटी इनकमर पर कभी भी यूनिटी (1.00) या लीडिंग पावर फैक्टर का लक्ष्य न रखें; यूटिलिटी कंपनियां लीडिंग PF पर भी भारी जुर्माना लगाती हैं और वोल्टेज अस्थिर होता है।',
      'कंडक्टर I²R ऊर्जा हानि पावर फैक्टर अनुपात के वर्ग के साथ घटती है, जिससे केबलों का तापमान काफी कम हो जाता है।'
    ],
    bn: [
      'আপাত শক্তি চাহিদা S (kVA) পাওয়ার ফ্যাক্টরের ব্যস্তানুপাতিক: S = P / cos(φ)। ক্যাপাসিটর যুক্ত করলে সক্রিয় শক্তি P (kW) অপরিবর্তিত থাকে।',
      'ইনকামারে কখনোই ইউনিটি (১.০০) বা লিডিং পাওয়ার ফ্যাক্টরের লক্ষ্য নির্ধারণ করবেন না; ইউটিলিটি লিডিং PF-এর জন্যও সমানভাবে জরিমানা করে এবং এতে ভোল্টেজ বৃদ্ধি পায়।',
      'কন্ডাক্টরের I²R অপচয় পাওয়ার ফ্যাক্টর অনুপাতের বর্গের সাথে হ্রাস পায়, ফলে কেবলের পরিচালন তাপমাত্রা উল্লেখযোগ্যভাবে কমে যায়।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing kWh (active energy consumed) with kVA (maximum apparent power demand capacity reserved by the utility grid).',
      'Assuming that improving power factor from 0.75 to 0.98 reduces the active energy consumption (kWh) of an electric motor. Motors consume the same mechanical kW regardless of compensation.'
    ],
    hi: [
      'kWh (खपत की गई वास्तविक ऊर्जा) को kVA (यूटिलिटी ग्रिड द्वारा आरक्षित अधिकतम आभासी मांग क्षमता) के साथ भ्रमित करना।',
      'यह मान लेना कि PF 0.75 से 0.98 करने पर मोटर की वास्तविक ऊर्जा खपत (kWh) घट जाती है। मोटर लोड के अनुसार समान kW ही लेती है।'
    ],
    bn: [
      'kWh (ব্যবহৃত মোট সক্রিয় শক্তি) এবং kVA (গ্রিড কর্তৃক সংরক্ষিত সর্বোচ্চ আপাত চাহিদা) এর মধ্যে গুলিয়ে ফেলা।',
      'ভেবে নেওয়া যে PF ০.৭৫ থেকে ০.৯৮ করলে মোটরের সক্রিয় শক্তি গ্রহণ (kWh) কমে যায়। মোটর লোডের অনুপাতে একই পরিমাণ kW গ্রহণ করে।'
    ]
  },
  keyTakeaways: {
    en: [
      'Maximum demand kVA charges and power factor penalty surcharges make APFC installations among the highest-yielding corporate capital investments (payback typically 6 to 14 months).',
      'Power factor correction releases transformer and switchgear current-carrying capacity, providing a cost-effective alternative to costly electrical substation expansion.'
    ],
    hi: [
      'अधिकतम मांग kVA शुल्क और PF जुर्माना APFC पैनल को कारखानों के लिए सबसे अधिक मुनाफा देने वाले निवेशों में से एक बनाते हैं (पेबैक आमतौर पर 6 से 14 महीने)।',
      'पावर फैक्टर सुधार ट्रांसफार्मर और स्विचगियर की करंट वहन क्षमता को मुक्त करता है, जो महंगे सबस्टेशन विस्तार का एक लागत प्रभावी विकल्प है।'
    ],
    bn: [
      'সর্বোচ্চ চাহিদা kVA চার্জ ও PF জরিমানা পরিহার APFC প্যানেলকে যেকোনো শিল্পের সর্বোচ্চ লাভজনক মূলধনী বিনিয়োগে পরিণত করে (পেব্যাক সাধারণত ৬ থেকে ১৪ মাস)।',
      'পাওয়ার ফ্যাক্টর সংশোধন ট্রান্সফরমার ও সুইচগিয়ারের কারেন্ট ধারণক্ষমতা মুক্ত করে, যা ব্যয়বহুল নতুন সাবস্টেশন স্থাপনের সাশ্রয়ী বিকল্প।'
    ]
  },
  practiceQuestions: [
    {
      id: 'pq-ch13-l08-01',
      question: {
        en: 'An industrial facility runs at 800 kW active load with an uncompensated power factor of 0.70. How many kVA of billed maximum demand are eliminated if an APFC panel corrects the power factor to 0.98?',
        hi: 'एक औद्योगिक इकाई 0.70 के असंशोधित पावर फैक्टर पर 800 kW सक्रिय भार चलाती है। यदि APFC पैनल PF को 0.98 तक सुधारता है तो बिल योग्य अधिकतम मांग (kVA) में कितनी कमी आएगी?',
        bn: 'একটি শিল্প প্রতিষ্ঠান ০.৭০ পাওয়ার ফ্যাক্টরে ৮০০ kW লোড চালাচ্ছে। APFC প্যানেল দ্বারা PF ০.৯৮ এ উন্নীত করা হলে সর্বোচ্চ ডিমান্ডে কত kVA সাশ্রয় হবে?'
      },
      hint: {
        en: 'Compute initial demand S₁ = 800 / 0.70 and corrected demand S₂ = 800 / 0.98. The demand reduction is ΔS = S₁ - S₂.',
        hi: 'S₁ = 800 / 0.70 और S₂ = 800 / 0.98 निकालें। मांग में कमी ΔS = S₁ - S₂ होगी।',
        bn: 'প্রাথমিক চাহিদা S₁ = ৮০০ / ০.৭০ এবং সংশোধিত চাহিদা S₂ = ৮০০ / ০.৯৮ হিসাব করুন। চাহিদা হ্রাস ΔS = S₁ - S₂।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch13-l08-01',
      question: {
        en: 'In an industrial electricity two-part tariff, the Maximum Demand charge is billed on which electrical quantity?',
        hi: 'औद्योगिक बिजली के द्वि-भाग टैरिफ में, अधिकतम मांग (Maximum Demand) शुल्क किस विद्युत राशि पर लगाया जाता है?',
        bn: 'শিল্প বিদ্যুতের টু-পার্ট ট্যারিফে সর্বোচ্চ চাহিদা (Maximum Demand) চার্জ কোন বৈদ্যুতিক রাশির ওপর ধার্য করা হয়?'
      },
      options: [
        { en: 'Peak apparent power (kVA) averaged over a 15-min or 30-min window', hi: '15 या 30 मिनट की विंडो में औसत पीक आभासी शक्ति (kVA)', bn: '১৫ বা ৩০ মিনিটের উইন্ডোতে গড় পিক আপাত শক্তি (kVA)' },
        { en: 'Instantaneous reactive power (kVAR) at midnight', hi: 'आधी रात को तात्कालिक रिएक्टिव पावर (kVAR)', bn: 'মধ্যরাতের তাৎক্ষণিক রিঅ্যাক্টিভ পাওয়ার (kVAR)' },
        { en: 'Total active energy consumed in kilowatt-hours (kWh)', hi: 'किलोवाट-घंटे (kWh) में खपत की गई कुल सक्रिय ऊर्जा', bn: 'কিলোওয়াট-ঘণ্টায় (kWh) ব্যবহৃত মোট সক্রিয় শক্তি' },
        { en: 'Substation operating frequency (Hertz)', hi: 'सबस्टेशन ऑपरेटिंग आवृत्ति (हर्ट्ज)', bn: 'সাবস্টেশনের অপারেটিং ফ্রিকোয়েন্সি (হার্টজ)' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Electric utilities bill maximum demand in kVA (apparent power) integrated over a standard 15-minute or 30-minute demand interval to account for distribution network capacity.',
        hi: 'बिजली कंपनियां वितरण नेटवर्क क्षमता की लागत वसूलने के लिए 15 या 30 मिनट के अंतराल पर एकीकृत kVA (आभासी शक्ति) पर अधिकतम मांग का बिल बनाती हैं।',
        bn: 'বিদ্যুৎ সংস্থাগুলি বিতরণ নেটওয়ার্কের ক্যাপাসিটি চার্জ করার জন্য ১৫ বা ৩০ মিনিটের গড় kVA (আপাত শক্তি) এর ওপর ভিত্তি করে সর্বোচ্চ চাহিদা বিল নির্ধারণ করে।'
      }
    },
    {
      id: 'mcq-ch13-l08-02',
      question: {
        en: 'If a plant active load P = 500 kW is held constant and power factor is raised from 0.70 to 0.98, by what approximate percentage does the feeder current decrease?',
        hi: 'यदि 500 kW का सक्रिय भार स्थिर रहे और पावर फैक्टर को 0.70 से बढ़ाकर 0.98 किया जाए, तो फीडर करंट में लगभग कितने प्रतिशत की कमी आएगी?',
        bn: 'যদি ৫০০ kW সক্রিয় লোড স্থির থাকে এবং পাওয়ার ফ্যাক্টর ০.৭০ থেকে ০.৯৮ এ উন্নীত হয়, তবে ফিডার কারেন্ট আনুমানিক কত শতাংশ হ্রাস পাবে?'
      },
      options: [
        { en: '28.6%', hi: '28.6%', bn: '২৮.৬%' },
        { en: '10.0%', hi: '10.0%', bn: '১০.০%' },
        { en: '45.0%', hi: '45.0%', bn: '৪৫.০%' },
        { en: '0.0% (current never changes)', hi: '0.0% (करंट कभी नहीं बदलता)', bn: '০.০% (কারেন্ট অপরিবর্তিত থাকে)' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Current is inversely proportional to power factor: I₂ / I₁ = PF₁ / PF₂ = 0.70 / 0.98 = 0.7143. Current reduction = 1 - 0.7143 = 0.2857 = 28.6%.',
        hi: 'करंट पावर फैक्टर के व्युत्क्रमानुपाती होता है: I₂ / I₁ = 0.70 / 0.98 = 0.7143। कमी = 1 - 0.7143 = 28.6%।',
        bn: 'কারেন্ট পাওয়ার ফ্যাক্টরের ব্যস্তানুপাতিক: I₂ / I₁ = ০.৭০ / ০.৯৮ = ০.৭১৪৩। কারেন্ট হ্রাস = ১ - ০.৭১৪৩ = ২৮.৬%।'
      }
    },
    {
      id: 'mcq-ch13-l08-03',
      question: {
        en: 'Why do utility rate tariffs assess severe financial surcharges when a facility power factor drops below 0.90 lagging?',
        hi: 'जब किसी कारखाने का पावर फैक्टर 0.90 लैगिंग से नीचे गिरता है तो बिजली कंपनियां भारी वित्तीय जुर्माना क्यों लगाती हैं?',
        bn: 'কারখানার পাওয়ার ফ্যাক্টর ০.৯০ ল্যাগিংয়ের নিচে নামলে বিদ্যুৎ সংস্থাগুলি কেন চড়া আর্থিক জরিমানা আরোপ করে?'
      },
      options: [
        { en: 'Because low PF loads force excessive reactive current into grid lines, causing severe line losses and transformer overheating', hi: 'क्योंकि कम PF भार ग्रिड में अत्यधिक रिएक्टिव करंट भेजते हैं, जिससे ट्रांसफार्मर गर्म होते हैं और लाइन लॉस बढ़ता है', bn: 'কারণ কম PF এর ফলে গ্রিড লাইনে অতিরিক্ত রিঅ্যাক্টিভ কারেন্ট প্রবাহিত হয়, যার ফলে ট্রান্সফরমার অতিরিক্ত গরম হয় ও লাইন লস বাড়ে' },
        { en: 'Because low power factor changes the speed of utility turbine generators', hi: 'क्योंकि कम पावर फैक्टर यूटिलिटी टरबाइन जनरेटर की गति बदल देता है', bn: 'কারণ কম পাওয়ার ফ্যাক্টর টারবাইন জেনারেটরের ঘূর্ণন গতি বদলে দেয়' },
        { en: 'Because reactive power creates radio interference in television broadcasts', hi: 'क्योंकि रिएक्टिव पावर टेलीविजन प्रसारण में रेडियो हस्तक्षेप पैदा करती है', bn: 'কারণ রিঅ্যাক্টিভ পাওয়ার টিভি সম্প্রচারে ব্যাঘাত ঘটায়' },
        { en: 'Because utilities only sell direct current (DC)', hi: 'क्योंकि बिजली कंपनियां केवल दिष्ट धारा (DC) बेचती हैं', bn: 'কারণ বিদ্যুৎ সংস্থা কেবল ডিসি বিদ্যুৎ বিক্রি করে' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Low power factor loads draw heavy magnetizing reactive currents that overload grid transformers, cables, and switchgear with I²R heat without performing productive revenue-earning work.',
        hi: 'कम पावर फैक्टर लोड अत्यधिक मैग्नेटाइजिंग करंट लेते हैं जो ग्रिड ट्रांसफार्मर और केबलों को गर्म करते हैं बिना कोई उपयोगी राजस्व-उत्पादक कार्य किए।',
        bn: 'কম পাওয়ার ফ্যাক্টরের লোড গ্রিড থেকে বিশাল রিঅ্যাক্টিভ কারেন্ট গ্রহণ করে, যা কোনো দরকারী কাজ না করেই লাইন ও ট্রান্সফরমারে অপ্রয়োজনীয় I²R তাপ ও অপচয় সৃষ্টি করে।'
      }
    },
    {
      id: 'mcq-ch13-l08-04',
      question: {
        en: 'A 1,000 kVA substation transformer is fully loaded to 1,000 kVA at 0.70 lagging PF. If the plant corrects to 0.98 PF, how much additional active power (kW) can the transformer deliver without overload?',
        hi: 'एक 1,000 kVA सबस्टेशन ट्रांसफार्मर 0.70 लैगिंग PF पर 1,000 kVA से पूरी तरह से भरा हुआ है। यदि संयंत्र PF को 0.98 तक सुधारता है, तो ट्रांसफार्मर बिना ओवरलोड हुए कितना अतिरिक्त सक्रिय भार (kW) दे सकता है?',
        bn: 'একটি ১,০০০ kVA সাবস্টেশন ট্রান্সফরমার ০.৭০ ল্যাগিং PF-এ ১,০০০ kVA লোডে পূর্ণ। PF ০.৯৮ এ উন্নীত করা হলে ট্রান্সফরমারটি ওভারলোড ছাড়াই অতিরিক্ত কতটা সক্রিয় শক্তি (kW) দিতে পারবে?'
      },
      options: [
        { en: '280 kW', hi: '280 kW', bn: '২৮০ kW' },
        { en: '70 kW', hi: '70 kW', bn: '৭০ kW' },
        { en: '500 kW', hi: '500 kW', bn: '৫০০ kW' },
        { en: '0 kW', hi: '0 kW', bn: '০ kW' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Initial active power delivered = 1,000 kVA · 0.70 = 700 kW. Corrected active power capability = 1,000 kVA · 0.98 = 980 kW. Additional active power headroom = 980 - 700 = 280 kW.',
        hi: 'प्रारंभिक सक्रिय भार = 1,000 · 0.70 = 700 kW। सुधरी हुई क्षमता = 1,000 · 0.98 = 980 kW। अतिरिक्त क्षमता = 980 - 700 = 280 kW।',
        bn: 'প্রাথমিক সক্রিয় ক্ষমতা = ১,০০০ · ০.৭০ = ৭০০ kW। সংশোধিত সক্রিয় ক্ষমতা = ১,০০০ · ০.৯৮ = ৯৮০ kW। অতিরিক্ত সক্রিয় ধারণক্ষমতা = ৯৮০ - ৭০০ = ২৮০ kW।'
      }
    },
    {
      id: 'mcq-ch13-l08-05',
      question: {
        en: 'What happens to the internal distribution feeder I²R power loss when power factor improves from 0.75 to 0.98?',
        hi: 'जब पावर फैक्टर 0.75 से सुधरकर 0.98 हो जाता है तो आंतरिक वितरण फीडर की I²R ऊर्जा हानि पर क्या प्रभाव पड़ता है?',
        bn: 'পাওয়ার ফ্যাক্টর ০.৭৫ থেকে ০.৯৮ এ উন্নীত হলে অভ্যন্তরীণ ডিস্ট্রিবিউশন ফিডারের I²R শক্তি অপচয়ের কী ঘটে?'
      },
      options: [
        { en: 'Losses drop by approximately 41.4%', hi: 'ऊर्जा हानि में लगभग 41.4% की गिरावट आती है', bn: 'অপচয় প্রায় ৪১.৪% হ্রাস পায়' },
        { en: 'Losses increase by 23.0%', hi: 'हानि में 23.0% की वृद्धि होती है', bn: 'অপচয় ২৩.০% বৃদ্ধি পায়' },
        { en: 'Losses drop to exactly zero', hi: 'हानि घटकर शून्य हो जाती है', bn: 'অপচয় পুরোপুরি শূন্য হয়ে যায়' },
        { en: 'Losses remain unchanged because voltage is constant', hi: 'हानि अपरिवर्तित रहती है क्योंकि वोल्टेज स्थिर है', bn: 'ভোল্টেজ স্থির থাকায় অপচয় অপরিবর্তিত থাকে' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Loss reduction = 1 - (PF₁ / PF₂)² = 1 - (0.75 / 0.98)² = 1 - 0.5857 = 0.4143 or 41.4% reduction in conductor heat loss.',
        hi: 'हानि में कमी = 1 - (0.75 / 0.98)² = 1 - 0.5857 = 41.4% की कमी।',
        bn: 'অপচয় হ্রাস = ১ - (০.৭৫ / ০.৯৮)² = ১ - ০.৫৮৫৭ = ৪১.৪% অপচয় কমে।'
      }
    },
    {
      id: 'mcq-ch13-l08-06',
      question: {
        en: 'Why is it critical NOT to overcompensate an industrial plant to a leading power factor (e.g., 0.92 leading)?',
        hi: 'किसी औद्योगिक संयंत्र को लीडिंग पावर फैक्टर (जैसे 0.92 लीडिंग) पर ओवरकंपेंसेट न करना क्यों महत्वपूर्ण है?',
        bn: 'শিল্প কারখানাকে লিডিং পাওয়ার ফ্যাক্টরে (যেমন ০.৯২ লিডিং) অতিরিক্ত ক্ষতিপূরণ বা ওভারকম্পেনসেট না করা কেন অত্যন্ত জরুরি?'
      },
      options: [
        { en: 'Leading PF creates busbar voltage rise (Ferranti effect), generator instability, and utility penalty surcharges', hi: 'लीडिंग PF से बसबार वोल्टेज बढ़ता है, जनरेटर अस्थिर होते हैं और यूटिलिटी जुर्माना लगाती है', bn: 'লিডিং PF এর কারণে বাসবারে মারাত্মক ভোল্টেজ বৃদ্ধি পায়, জেনারেটর অস্থির হয় এবং ইউটিলিটি জরিমানা আরোপ করে' },
        { en: 'Leading PF causes cables to freeze in winter', hi: 'लीडिंग PF से सर्दियों में केबल जम जाते हैं', bn: 'লিডিং PF এর কারণে শীতে তার বরফ হয়ে যায়' },
        { en: 'Leading PF reduces active electrical energy to negative values', hi: 'लीडिंग PF सक्रिय ऊर्जा को ऋणात्मक मान में बदल देता है', bn: 'লিডিং PF সক্রিয় শক্তিকে ঋণাত্মক করে তোলে' },
        { en: 'Leading PF converts all AC induction motors into DC stepper motors', hi: 'लीडिंग PF सभी AC मोटरों को DC मोटर में बदल देता है', bn: 'লিডিং PF সমস্ত এসি মোটরকে ডিসি মোটরে রূপান্তর করে' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Overcompensation causes leading current flowing through inductive source impedance, raising bus voltage (ΔV ≈ Q · X_L / V), risking overvoltage damage, tripping backup generators, and triggering utility leading PF penalties.',
        hi: 'अति-क्षतिपूर्ति से वोल्टेज बढ़ता है, उपकरण ट्रिप होते हैं, बैकअप जनरेटर अस्थिर हो जाते हैं और यूटिलिटी जुर्माना लगाती है।',
        bn: 'ওভারকম্পেনসেশনের ফলে ইনডাক্টিভ সোর্স রিয়্যাক্ট্যান্সে ভোল্টেজ বৃদ্ধি পায়, যন্ত্রপাতি পুড়ে যাওয়ার ঝুঁকি তৈরি হয়, জেনারেটর ট্রিপ করে এবং ইউটিলিটি জরিমানা ধার্য করে।'
      }
    },
    {
      id: 'mcq-ch13-l08-07',
      question: {
        en: 'An APFC installation costing $32,000 saves $2,500/month in demand charges and avoids a monthly PF penalty of $1,500. What is the Simple Payback Period?',
        hi: 'एक APFC स्थापना जिसकी लागत $32,000 है, मांग शुल्क में $2,500/माह बचाती है और $1,500 के मासिक PF जुर्माने से बचाती है। पेबैक अवधि क्या है?',
        bn: '$৩২,০০০ খরচে স্থাপিত একটি APFC প্যানেল প্রতি মাসে ডিমান্ড চার্জে $২,৫০০ বাঁচায় এবং $১,৫০০ মাসিক PF জরিমানা রোধ করে। সরল পেব্যাক পিরিয়ড কত?'
      },
      options: [
        { en: '8.0 months', hi: '8.0 महीने', bn: '৮.০ মাস' },
        { en: '24.0 months', hi: '24.0 महीने', bn: '২৪.০ মাস' },
        { en: '16.0 months', hi: '16.0 महीने', bn: '১৬.০ মাস' },
        { en: '4.0 months', hi: '4.0 महीने', bn: '৪.০ মাস' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Total monthly savings = $2,500 + $1,500 = $4,000/month. Simple Payback Period = CapEx / Monthly Savings = $32,000 / $4,000 = 8.0 months.',
        hi: 'कुल मासिक बचत = $2,500 + $1,500 = $4,000 प्रति माह। पेबैक अवधि = $32,000 / $4,000 = 8.0 महीने।',
        bn: 'মোট মাসিক সাশ্রয় = $২,৫০০ + $১,৫০০ = $৪,০০০ প্রতি মাসে। পেব্যাক সময়কাল = $৩২,০০০ / $৪,০০০ = ৮.০ মাস।'
      }
    },
    {
      id: 'mcq-ch13-l08-08',
      question: {
        en: 'A manufacturing plant is charged an active energy rate of $0.12/kWh and a demand charge of $15/kVA/month. Does installing capacitors decrease the kWh meter reading of the factory active load?',
        hi: 'एक विनिर्माण संयंत्र से $0.12/kWh सक्रिय ऊर्जा और $15/kVA/माह मांग शुल्क लिया जाता है। क्या कैपेसिटर लगाने से कारखाने के सक्रिय लोड का kWh मीटर रीडिंग घटता है?',
        bn: 'একটি কারখানা প্রতি kWh সক্রিয় শক্তিতে $০.১২ এবং প্রতি kVA ডিমান্ডে $১৫ চার্জ দেয়। ক্যাপাসিটর বসালে কি কারখানার মূল সক্রিয় লোডের kWh মিটার রিডিং হ্রাস পায়?'
      },
      options: [
        { en: 'No; capacitors provide local reactive power (kVAR) reducing kVA demand, but machinery active work consumption (kWh) remains constant (except for small internal line loss reductions)', hi: 'नहीं; कैपेसिटर स्थानीय रिएक्टिव पावर (kVAR) देते हैं जिससे kVA मांग घटती है, लेकिन मशीनों का वास्तविक कार्य (kWh) स्थिर रहता है', bn: 'না; ক্যাপাসিটর স্থানীয় রিঅ্যাক্টিভ পাওয়ার দিয়ে kVA ডিমান্ড কমায়, কিন্তু মূল মেশিনের সক্রিয় কাজের খরচ (kWh) অপরিবর্তিত থাকে (সামান্য লাইন লস হ্রাস ব্যতীত)' },
        { en: 'Yes; capacitors cut active power consumption in half', hi: 'हाँ; कैपेसिटर सक्रिय ऊर्जा खपत को आधा कर देते हैं', bn: 'হ্যাঁ; ক্যাপাসিটর সক্রিয় বিদ্যুৎ খরচ অর্ধেক করে ফেলে' },
        { en: 'Yes; capacitors generate free mechanical horsepower for the motors', hi: 'हाँ; कैपेसिटर मोटरों के लिए मुफ्त यांत्रिक अश्वशक्ति उत्पन्न करते हैं', bn: 'হ্যাঁ; ক্যাপাসিটর মোটরের জন্য বিনামূল্যে যান্ত্রিক শক্তি তৈরি করে' },
        { en: 'No; capacitors increase active power consumption by 100%', hi: 'नहीं; कैपेसिटर सक्रिय बिजली खपत को 100% बढ़ा देते हैं', bn: 'না; ক্যাপাসিটর সক্রিয় বিদ্যুৎ খরচ দ্বিগুণ করে দেয়' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Capacitors supply magnetizing reactive power locally. Active energy kWh used by production motors to perform physical mechanical work remains identical; the economic savings arise predominantly from kVA maximum demand reductions and penalty elimination.',
        hi: 'कैपेसिटर स्थानीय रूप से मैग्नेटाइजिंग रिएक्टिव पावर की आपूर्ति करते हैं। उपयोगी यांत्रिक कार्य करने वाली मोटरों का वास्तविक kWh लोड समान रहता है; मुख्य आर्थिक बचत kVA मांग में कमी और जुर्माना समाप्ति से होती है।',
        bn: 'ক্যাপাসিটর কেবল চুম্বকায়ন রিঅ্যাক্টিভ শক্তি সরবরাহ করে। কারখানার মোটরের যান্ত্রিক কাজের জন্য প্রয়োজনীয় সক্রিয় kWh বিদ্যুৎ অপরিবর্তিত থাকে; যাবতীয় আর্থিক সঞ্চয় মূলত kVA ডিমান্ড চার্জ হ্রাস ও জরিমানা দূরীকরণ থেকে আসে।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ch13-pf-tariff-economics',
      title: {
        en: 'Industrial Maximum Demand & Utility Tariff Economics Schematic',
        hi: 'औद्योगिक अधिकतम मांग एवं बिजली टैरिफ अर्थशास्त्र आरेख',
        bn: 'শিল্প সর্বোচ্চ চাহিদা ও ইউটিলিটি ট্যারিফ অর্থনীতি স্কিম্যাটিক'
      },
      caption: {
        en: 'Industrial electrical single-line diagram illustrating utility kVA metering, shunt capacitor reactive power injection, demand charge savings, and payback metrics.',
        hi: 'उपयोगिता kVA मीटरिंग, शंट कैपेसिटर रिएक्टिव पावर इंजेक्शन, मांग शुल्क बचत और पेबैक मेट्रिक्स को दर्शाने वाला औद्योगिक सिंगल-लाइन आरेख।',
        bn: 'ইউটিলিটি kVA মিটারিং, শান্ট ক্যাপাসিটর রিঅ্যাক্টিভ শক্তি সংযোজন, ডিমান্ড চার্জ সাশ্রয় এবং পেব্যাক মেট্রিক্স প্রদর্শনকারী শিল্প সিঙ্গেল-লাইন ডায়াগ্রাম।'
      },
      svgType: 'circuit-ch13-pf-tariff-economics'
    }
  ]
};
