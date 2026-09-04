import { Lesson } from '../types';

export const LESSON_INDUSTRIAL_PF_CASE_STUDY: Lesson = {
  id: 'lsn-ch13-power-quality-compensation',
  topicId: 'tp-power-quality-compensation',
  chapterId: 'ch-power-factor',
  order: 7,
  title: {
    en: 'Industrial Power Factor Economics & Case Studies',
    hi: 'औद्योगिक पावर फैक्टर अर्थशास्त्र एवं केस स्टडीज',
    bn: 'শিল্প পাওয়ার ফ্যাক্টর অর্থনীতি ও কেস স্টাডি'
  },
  description: {
    en: 'Master the financial and commercial engineering of power factor correction. Analyze two-part and three-part utility tariffs, maximum demand kVA billing reductions, penalty avoidance, and rebate bonuses. Calculate released transformer and switchgear capacity (headroom), and evaluate capital investment using Simple Payback Period (SPP), Net Present Value (NPV), and Return on Investment (ROI) through comprehensive industrial case studies.',
    hi: 'पावर फैक्टर सुधार के वित्तीय और वाणिज्यिक इंजीनियरिंग में महारत हासिल करें। दो-भाग और तीन-भाग बिजली टैरिफ, अधिकतम मांग (kVA) बिलिंग में कमी, जुर्माना निवारण और प्रोत्साहन छूट का विश्लेषण करें। मुक्त हुई ट्रांसफार्मर क्षमता (हेडरूम) की गणना करें, और केस स्टडीज के माध्यम से साधारण पेबैक अवधि (SPP), नेट प्रेजेंट वैल्यू (NPV) और निवेश पर लाभ (ROI) का मूल्यांकन करें।',
    bn: 'পাওয়ার ফ্যাক্টর সংশোধনের আর্থিক ও বাণিজ্যিক প্রকৌশল আয়ত্ত করুন। টু-পার্ট ও থ্রি-পার্ট ইউটিলিটি ট্যারিফ, সর্বোচ্চ চাহিদা kVA বিলিং হ্রাস, জরিমানা পরিহার এবং ইউটিলিটি রিবেট বোনাস বিশ্লেষণ। মুক্ত হওয়া ট্রান্সফরমার ধারণক্ষমতা (হেডরুম) হিসাব এবং বিস্তারিত শিল্প কেস স্টাডির মাধ্যমে সিম্পল পেব্যাক পিরিয়ড (SPP), নেট প্রেজেন্ট ভ্যালু (NPV) ও বিনিয়োগের লাভ (ROI) মূল্যায়ন।'
  },
  estimatedMinutes: 55,
  easyExplanation: {
    en: 'Power factor engineering is one of the rare investments where engineering physics translates directly into pure business profit. Electric utility companies bill factories based on apparent power (kVA), not just real energy (kWh). When your factory runs at a poor power factor (like 0.72), your electric bill includes a massive "demand charge" because the utility has to supply fat cables and transformers to carry all the useless reactive current. They also hit you with monthly penalties! Installing an automated capacitor bank improves your power factor to 0.98. This slashes your billed kVA by 25%, cancels all penalties, earns you a monthly green bonus rebate, and frees up capacity in your transformers so you can expand production without spending millions on new electrical infrastructure. Most capacitor systems pay for themselves completely in less than 9 to 14 months!',
    hi: 'पावर फैक्टर सुधार इंजीनियरिंग का एक ऐसा अनूठा क्षेत्र है जहाँ विज्ञान सीधे शुद्ध व्यापारिक मुनाफे में बदलता है। बिजली कंपनियाँ कारखानों से केवल उपयोग की गई ऊर्जा (kWh) का बिल नहीं लेतीं, बल्कि अधिकतम मांग (kVA) पर भी भारी शुल्क वसूलती हैं। 0.72 जैसे खराब पावर फैक्टर पर चलने से बिल में भारी मांग शुल्क और पेनल्टी (जुर्माना) जुड़ता है। एक स्वचालित APFC पैनल लगाकर पावर फैक्टर को 0.98 करने से बिल का kVA 25% घट जाता है, सभी जुर्माने समाप्त हो जाते हैं, और सरकार से बिल में छूट मिलती है। इसके अलावा ट्रांसफार्मर पर लोड कम होने से आप बिना नया ट्रांसफार्मर खरीदे अपनी फैक्ट्री का विस्तार कर सकते हैं। यह पूरा सिस्टम 9 से 14 महीनों में अपनी पूरी लागत वसूल कर देता है!',
    bn: 'পাওয়ার ফ্যাক্টর সংশোধন ইঞ্জিনিয়ারিংয়ের অন্যতম ক্ষেত্র যেখানে পদার্থবিজ্ঞানের সূত্র সরাসরি নগদ ব্যবসায়িক মুনাফায় রূপান্তরিত হয়। বিদ্যুৎ সরবরাহকারী সংস্থাগুলি কেবল ব্যবহৃত ইউনিট (kWh) নয়, বরং সর্বোচ্চ চাহিদার (kVA) ওপর ভিত্তি করে বিল তৈরি করে। খারাপ পাওয়ার ফ্যাক্টরে (যেমন ০.৭২) কারখানা চালালে বিলে বিশাল "ডিমান্ড চার্জ" এবং জরিমানা যোগ হয়। একটি স্বয়ংক্রিয় ক্যাপাসিটর প্যানেল বসিয়ে পাওয়ার ফ্যাক্টর ০.৯৮ এ উন্নীত করলে বিলের kVA ২৫% কমে যায়, সব জরিমানা বন্ধ হয় এবং ইউটিলিটি থেকে উল্টো রিবেট পাওয়া যায়। তাছাড়া ট্রান্সফরমার ফাঁকা হওয়ায় নতুন যন্ত্রপাতি কেনার সুযোগ তৈরি হয়। অধিকাংশ ক্যাপাসিটর ব্যাংক মাত্র ৯ থেকে ১৪ মাসের মধ্যে সম্পূর্ণ বিনিয়োগ তুলে আনে!'
  },
  detailedExplanation: {
    en: 'Industrial power factor correction is fundamentally justified by financial thermodynamics and commercial tariff structures:\n\n1. Commercial Tariff Structures:\nIndustrial power contracts are structured as Two-Part or Three-Part Tariffs:\n- Active Energy Charge ($/kWh): Total real kilowatt-hours consumed.\n- Maximum Demand Charge ($/kVA/month): Billed on the highest 15-minute or 30-minute integrated apparent power demand (S_max in kVA) recorded during the monthly billing cycle.\n- Power Factor Penalty / Rebate Clauses:\n  * Penalty: Utilities enforce strict surcharges (e.g., 1.0% to 1.5% surcharge on the entire monthly bill for every 0.01 that the average monthly PF falls below a benchmark threshold, typically 0.90 or 0.92 lagging).\n  * Incentive / Rebate: Utilities reward high efficiency by granting a monthly rebate (e.g., 0.5% discount on the entire energy bill for every 0.01 that the monthly PF exceeds 0.95 lagging up to unity).\n\n2. Maximum Demand (kVA) Reduction Mechanics:\nApparent power demand is inversely proportional to power factor: S = P / cos(ϕ).\nWhen active power P remains constant at 800 kW:\n- At PF₁ = 0.75: S₁ = 800 / 0.75 = 1,066.7 kVA\n- At PF₂ = 0.98: S₂ = 800 / 0.98 = 816.3 kVA\nDemand reduction ΔS = S₁ - S₂ = 1,066.7 - 816.3 = 250.4 kVA.\nAt a typical demand charge of $12.00 per kVA per month, this saves:\nMonthly Demand Savings = 250.4 kVA · $12.00 = $3,004.80 per month = $36,057 per year!\n\n3. Transformer & Switchgear Capacity Release (Capital Deferral):\nSubstation transformers, switchboards, and distribution cables are thermally limited by current (kVA), not kW.\nWhen a 1,000 kVA transformer is loaded to 100% capacity at 0.75 lagging PF, it can deliver only 750 kW of active machinery work.\nIf the plant corrects its power factor to 0.98, the same 1,000 kVA transformer can now deliver:\nP_new = 1,000 kVA · 0.98 = 980 kW of real productive load!\nCapacity Released = 980 kW - 750 kW = 230 kW (or 234.7 kVA of transformer headroom).\nThis enables the plant to install additional production machinery without investing $150,000+ in a new substation transformer, incoming breaker, and civil switchgear rooms.\n\n4. Financial Metrics (SPP, NPV, ROI):\n- Simple Payback Period: SPP = Total Capital Expenditure (Capex) / Net Annual Financial Savings.\n  Typically between 6 and 18 months for low-voltage APFC systems.\n- Net Present Value (NPV): Evaluates cumulative discounted cash flows over the 10-to-15-year equipment lifespan.\n- Internal Rate of Return (IRR): Often exceeds 60% to 120%, making PFC one of the highest-yielding capital investments available to corporate plant managers.',
    hi: 'औद्योगिक पावर फैक्टर का अर्थशास्त्र:\n\n1. टैरिफ संरचना:\n- सक्रिय ऊर्जा शुल्क ($/kWh): कुल खपत की गई यूनिट।\n- अधिकतम मांग शुल्क ($/kVA): महीने के दौरान दर्ज किए गए अधिकतम kVA लोड पर आधारित।\n- पेनल्टी और छूट: 0.90 से कम PF होने पर पूरे बिल पर 1-2% का जुर्माना, और 0.95 से अधिक होने पर बिल में छूट।\n\n2. kVA मांग में कमी:\nS = P / PF। 800 kW लोड पर PF को 0.75 से 0.98 करने पर मांग 1,067 kVA से घटकर 816 kVA रह जाती है (250 kVA की बचत)। $12/kVA की दर से यह सालाना $36,000 की शुद्ध बचत देता है!\n\n3. ट्रांसफार्मर क्षमता की मुक्ति (हेडरूम):\n1,000 kVA का ट्रांसफार्मर 0.75 PF पर केवल 750 kW लोड ले सकता है। 0.98 PF पर यह 980 kW ले सकता है। 230 kW की अतिरिक्त क्षमता मुक्त हो जाती है, जिससे बिना नया ट्रांसफार्मर खरीदे फैक्ट्री बढ़ाई जा सकती है।\n\n4. पेबैक अवधि (SPP):\nSPP = कुल लागत / वार्षिक बचत। अधिकांश APFC सिस्टम केवल 9 से 14 महीनों में अपना खर्च वसूल कर लेते हैं।',
    bn: 'পাওয়ার ফ্যাক্টর অর্থনীতির বাণিজ্যিক বিশ্লেষণ:\n\n১. শিল্প বিদ্যুতের ট্যারিফ:\n- সক্রিয় ইউনিট বিল ($/kWh): ব্যবহৃত প্রকৃত বিদ্যুৎ।\n- সর্বোচ্চ ডিমান্ড চার্জ ($/kVA): মাসের সর্বোচ্চ kVA এর ওপর ধার্য বিল।\n- জরিমানা ও রিবেট: ০.৯০ এর নিচে নামলে পুরো বিলে ১-২% জরিমানা এবং ০.৯৫ ছাড়ালে বিশেষ ছাড়।\n\n২. kVA ডিমান্ড হ্রাস:\nS = P / PF। ৮০০ kW কারখানায় PF ০.৭৫ থেকে ০.৯৮ এ নিলে kVA ১,০৬৭ থেকে ৮১৬ তে নেমে আসে (২৫১ kVA সাশ্রয়)। প্রতি kVA তে $১২ ধরলে বছরে ৩৬,০০০ ডলারেরও বেশি সাশ্রয় হয়!\n\n৩. ট্রান্সফরমার ধারণক্ষমতা বৃদ্ধি:\n১,০০০ kVA ট্রান্সফরমার ০.৭৫ PF এ মাত্র ৭৫০ kW দিতে পারে, কিন্তু ০.৯৮ PF এ এটি ৯৮০ kW দিতে সক্ষম। ফলে কোনো নতুন ট্রান্সফরমার না কিনেও ২৩০ kW অতিরিক্ত কারখানা চালানো সম্ভব হয়।\n\n৪. বিনিয়োগ প্রত্যাহার কাল (Payback Period):\nSPP = মোট খরচ / বার্ষিক সাশ্রয়। সাধারণত ৯ থেকে ১৪ মাসের মধ্যে সম্পূর্ণ বিনিয়োগের টাকা উঠে আসে।'
  },
  formulas: [
    {
      id: 'f-demand-reduction',
      symbol: '\\Delta S',
      expression: '\\Delta S = P \\cdot \\left(\\frac{1}{PF_1} - \\frac{1}{PF_2}\\right)',
      title: {
        en: 'Billed Maximum Demand Reduction (kVA)',
        hi: 'बिल योग्य अधिकतम मांग में कमी (kVA)',
        bn: 'সর্বোচ্চ বিলিং চাহিদা হ্রাস সমীকরণ (kVA)'
      },
      description: {
        en: 'Calculates the monthly billed apparent power demand reduction in kVA when improving plant power factor from PF1 to PF2 for real load P.',
        hi: 'वास्तविक भार P के लिए पावर फैक्टर को PF1 से PF2 तक सुधारने पर बिल योग्य kVA मांग में कमी की गणना।',
        bn: 'সক্রিয় লোড P এর জন্য পাওয়ার ফ্যাক্টর PF1 থেকে PF2 তে উন্নীত করার ফলে মাসিক kVA ডিমান্ড হ্রাস নির্ণয়।'
      },
      variables: [
        { symbol: '\\Delta S', name: { en: 'Billed demand reduction (kVA)', hi: 'मांग में कमी (kVA)', bn: 'বিলিং চাহিদা হ্রাস (kVA)' } },
        { symbol: 'P', name: { en: 'Active factory operating load (kW)', hi: 'सक्रिय फैक्ट्री लोड (kW)', bn: 'কারখানার সক্রিয় লোড (kW)' } },
        { symbol: 'PF_1', name: { en: 'Initial uncompensated power factor', hi: 'प्रारंभिक पावर फैक्टर', bn: 'প্রাথমিক পাওয়ার ফ্যাক্টর' } },
        { symbol: 'PF_2', name: { en: 'Target improved power factor', hi: 'सुधरा हुआ पावर फैक्टर', bn: 'উন্নত পাওয়ার ফ্যাক্টর' } }
      ]
    },
    {
      id: 'f-transformer-capacity-release',
      symbol: '\\Delta P_{\\text{release}}',
      expression: '\\Delta P_{\\text{release}} = S_{\\text{tx}} \\cdot (PF_2 - PF_1)',
      title: {
        en: 'Transformer Active Power Work Capacity Release',
        hi: 'ट्रांसफार्मर सक्रिय शक्ति वहन क्षमता में वृद्धि',
        bn: 'ট্রান্সফরমার সক্রিয় উৎপাদন ক্ষমতা বৃদ্ধি সমীকরণ'
      },
      description: {
        en: 'Quantifies the additional active power load (in kW) that an existing transformer of rating S_tx can carry when plant power factor is raised from PF1 to PF2.',
        hi: 'S_tx रेटिंग वाले मौजूदा ट्रांसफार्मर द्वारा वहन की जा सकने वाली अतिरिक्त सक्रिय शक्ति (kW) की गणना।',
        bn: 'পাওয়ার ফ্যাক্টর PF1 থেকে PF2 তে বাড়িয়ে একটি বিদ্যমান S_tx ট্রান্সফরমার থেকে কত অতিরিক্ত সক্রিয় শক্তি (kW) পাওয়া যাবে তা নির্ণয়।'
      },
      variables: [
        { symbol: '\\Delta P_{\\text{release}}', name: { en: 'Released active power headroom (kW)', hi: 'मुक्त सक्रिय शक्ति हेडरूम (kW)', bn: 'মুক্ত সক্রিয় উৎপাদন ক্ষমতা (kW)' } },
        { symbol: 'S_{\\text{tx}}', name: { en: 'Transformer nameplate capacity rating (kVA)', hi: 'ट्रांसफार्मर नेमप्लेट क्षमता (kVA)', bn: 'ট্রান্সফরমার রেটেড ক্ষমতা (kVA)' } },
        { symbol: 'PF_1, PF_2', name: { en: 'Initial and improved power factors', hi: 'प्रारंभिक एवं सुधरा हुआ पावर फैक्टर', bn: 'প্রাথমিক ও উন্নত পাওয়ার ফ্যাক্টর' } }
      ]
    },
    {
      id: 'f-simple-payback',
      symbol: '\\text{SPP}',
      expression: '\\text{SPP} = \\frac{\\text{CapEx}}{\\text{Annual Savings}_{\\text{net}}} \\quad (\\text{years or months})',
      title: {
        en: 'Simple Capital Payback Period',
        hi: 'साधारण पूंजी पेबैक अवधि',
        bn: 'সাধারণ বিনিয়োগ প্রত্যাহার সময়কাল (Payback Period)'
      },
      description: {
        en: 'Calculates the exact duration in months or years required for cumulative net utility bill savings to completely recover the initial turnkey installation cost.',
        hi: 'बिजली बिल की शुद्ध बचत द्वारा प्रारंभिक स्थापना लागत को पूरी तरह वसूल करने में लगने वाले समय की गणना।',
        bn: 'বিদ্যুৎ বিল সাশ্রয়ের মাধ্যমে ক্যাপাসিটর প্যানেল স্থাপনের মূল খরচ তুলে আনতে প্রয়োজনীয় সময় নির্ণয়।'
      },
      variables: [
        { symbol: '\\text{SPP}', name: { en: 'Simple payback period (years or months)', hi: 'साधारण पेबैक अवधि', bn: 'পেব্যাক সময়কাল (বছর বা মাস)' } },
        { symbol: '\\text{CapEx}', name: { en: 'Total turnkey installation capital cost ($)', hi: 'कुल स्थापना लागत ($)', bn: 'মোট মূলধনী খরচ ($)' } },
        { symbol: '\\text{Annual Savings}_{\\text{net}}', name: { en: 'Net annual bill savings from demand reduction, penalties, and rebates ($)', hi: 'मांग, जुर्माने और छूट से शुद्ध वार्षिक बचत ($)', bn: 'বাৎসরিক নেট বিল সাশ্রয় ($)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch13-l07-tariffs',
      title: {
        en: 'Understanding Two-Part & Three-Part Utility Tariffs',
        hi: 'दो-भाग और तीन-भाग बिजली टैरिफ को समझना',
        bn: 'টু-পার্ট ও থ্রি-পার্ট ইউটিলিটি ট্যারিফের বিশদ বিবরণ'
      },
      content: {
        en: 'Utility rate structures are designed to recover both capital infrastructure investment and operational fuel generation costs:\n\n1. Two-Part Tariff Structure:\nBill = (Demand Rate · S_billed) + (Energy Rate · E_kWh)\n- S_billed: Peak 30-minute maximum demand in kVA.\n- E_kWh: Total kilowatt-hours consumed.\nBecause S = P / PF, running at 0.70 PF increases billed demand by 43% compared to unity! Correcting PF provides instant, direct recurring monthly demand charge savings.\n\n2. Three-Part Tariff with Surcharge / Incentive Structure:\nBill = Demand Charge + Energy Charge ± PF Adjustment\nUtilities establish an official benchmark power factor (typically 0.90 or 0.92 lagging):\n- Penalty Formula: If monthly average PF < PF_benchmark:\n  Penalty Surcharge = Total Energy Bill · [k_p · (PF_benchmark - PF_actual)]\n  where k_p is typically 1.0 to 1.5% surcharge per 0.01 shortfall.\n- Incentive / Rebate Formula: If monthly average PF > 0.95:\n  Bill Rebate = Total Energy Bill · [k_i · (PF_actual - 0.95)]\n  where k_i is typically 0.5% rebate per 0.01 improvement up to unity.\nA manufacturing plant spending $100,000 per month on electricity that raises its power factor from 0.82 to 0.99 transforms an $8,000 monthly penalty into a $2,000 monthly cash rebate—a swing of $10,000 per month ($120,000 per year) from PF clauses alone!',
        hi: 'बिजली टैरिफ की संरचना:\n\n1. टू-पार्ट टैरिफ:\nकुल बिल = (मांग दर × kVA) + (ऊर्जा दर × kWh)।\nचूंकि S = P / PF, अतः 0.70 PF पर चलने से kVA मांग 43% बढ़ जाती है। PF सुधारने से यह मांग तुरंत घटती है।\n\n2. थ्री-पार्ट टैरिफ (पेनल्टी और छूट):\nउपयोगिता कंपनियाँ 0.90 या 0.92 का मानक तय करती हैं।\n- यदि PF 0.90 से कम है: प्रति 0.01 गिरावट पर बिल में 1% से 1.5% का जुर्माना जुड़ता है।\n- यदि PF 0.95 से अधिक है: प्रति 0.01 सुधार पर बिल में 0.5% की नकद छूट मिलती है।\n0.82 से 0.99 तक जाने पर ₹8,000 का जुर्माना ₹2,000 की छूट में बदल जाता है, जिससे केवल इस नियम से हर महीने भारी बचत होती है।',
        bn: 'ইউটিলিটি ট্যারিফ কাঠামোর নিয়মাবলী:\n\n১. টু-পার্ট ট্যারিফ:\nমোট বিল = (ডিমান্ড রেট × kVA) + (এনার্জি রেট × kWh)।\nযেহেতু S = P / PF, তাই ০.৭০ PF এ কারখানা চালালে kVA বিল ৪৩% বেড়ে যায়। PF উন্নতি করলে এই বাড়তি বিল সরাসরি বন্ধ হয়।\n\n২. থ্রি-পার্ট ট্যারিফ (জরিমানা ও রিবেট):\nইউটিলিটি সাধারণত ০.৯০ বা ০.৯২ কে স্ট্যান্ডার্ড বেঞ্চমার্ক ধরে।\n- PF ০.৯০ এর নিচে নামলে প্রতি ০.০১ পার্থক্যের জন্য ১% থেকে ১.৫% জরিমানা দিতে হয়।\n- PF ০.৯৫ এর ওপরে গেলে প্রতি ০.০১ এর জন্য ০.৫% ক্যাশ রিবেট বা ছাড় পাওয়া যায়।\nPF ০.৮২ থেকে ০.৯৯ তে নিয়ে গেলে মাসিক জরিমানা বন্ধ হয়ে উল্টো বোনাস পাওয়া যায়, যা বছরে লক্ষাধিক টাকা সাশ্রয় করে।'
      }
    },
    {
      id: 'sec-ch13-l07-financial-case',
      title: {
        en: 'Financial Payback & Return on Investment Analysis',
        hi: 'वित्तीय पेबैक एवं निवेश पर लाभ (ROI) विश्लेषण',
        bn: 'আর্থিক পেব্যাক ও বিনিয়োগের লাভ (ROI) পর্যালোচনা'
      },
      content: {
        en: 'Evaluating capital expenditure on an APFC panel requires standard corporate capital budgeting metrics:\n\n1. Turnkey Capital Expenditure (CapEx):\nIncludes:\n- Fully assembled detuned APFC panel (enclosure, main incoming MCCB, stage contactors, 7% detuning reactors, 480 V heavy-duty capacitors, microprocessor controller, cooling exhaust fans).\n- Interconnecting copper busbars and armored feeder cables.\n- Class 0.5 Current Transformers and cable civil raceways.\n- Electrical commissioning, insulation testing, and harmonic audit labor.\n\n2. Net Annual Financial Benefits:\nTotal Annual Benefit = Annual Demand Charge Reductions + Annual Penalty Avoidance + Annual Utility Cash Rebates - Annual Maintenance & Losses.\n\n3. Financial Return Metrics:\n- Simple Payback Period (SPP): Turnkey CapEx / Annual Net Savings. In industrial manufacturing, an SPP below 2.0 years is considered an exceptional investment. Most detuned APFC panels achieve payback in 8 to 15 months.\n- Return on Investment (ROI): (Annual Net Savings / Turnkey CapEx) · 100%. Typically ranges from 70% to 150% annually.\n- Internal Rate of Return (IRR): Over a 10-year asset life, typical IRR exceeds 80%, outperforming almost all other industrial equipment upgrades.',
        hi: 'APFC पैनल के लिए वित्तीय विश्लेषण:\n\n1. कुल स्थापना लागत (CapEx):\nइसमें डिट्यून्ड APFC पैनल, 7% रिएक्टर, 480 V कैपेसिटर, MCCB, कांटेक्टर, माइक्रोप्रोसेसर रिले, केबल और स्थापना शुल्क शामिल हैं।\n\n2. कुल वार्षिक बचत:\nवार्षिक लाभ = मांग शुल्क में बचत + जुर्माना मुक्ति + सरकार से छूट - रखरखाव खर्च।\n\n3. वित्तीय रिटर्न:\n- साधारण पेबैक अवधि (SPP): कुल लागत / वार्षिक बचत। अधिकांश औद्योगिक APFC पैनल 8 से 15 महीनों में पूरे पैसे वसूल कर देते हैं।\n- निवेश पर लाभ (ROI): 70% से 150% प्रति वर्ष। 10 वर्षों के जीवनकाल में यह कारखाने के सबसे अधिक लाभदायक निवेशों में से एक होता है।',
        bn: 'APFC প্যানেলে মূলধনী বিনিয়োগের হিসাব:\n\n১. মোট টার্নকি খরচ (CapEx):\nএর মধ্যে রয়েছে সম্পূর্ণ ডিটিউনড প্যানেল, ৭% রিঅ্যাক্টর, ৪৮০ V ক্যাপাসিটর, সার্কিট ব্রেকার, কন্ট্রোলার, কেবল ও ইনস্টলেশন ফি।\n\n২. বাৎসরিক মোট আর্থিক সাশ্রয়:\nমোট সাশ্রয় = kVA ডিমান্ড হ্রাসজনিত সাশ্রয় + জরিমানা পরিহার + ইউটিলিটি রিবেট বোনাস - রক্ষণাবেক্ষণ ব্যয়।\n\n৩. আর্থিক সূচকসমূহ:\n- সিম্পল পেব্যাক সময়কাল (SPP): মোট খরচ / বাৎসরিক সাশ্রয়। অধিকাংশ শিল্পক্ষেত্রে ৮ থেকে ১৫ মাসের মধ্যে সম্পূর্ণ বিনিয়োগ উঠে আসে।\n- রিটার্ন অন ইনভেস্টমেন্ট (ROI): বছরে ৭০% থেকে ১৫০% পর্যন্ত। ১০ বছরের কার্যকর জীবনে এটি অত্যন্ত লাভজনক একটি প্রকল্প।'
      }
    }
  ],
  examples: [
    {
      id: 'ex-ch13-l07-01',
      title: {
        en: 'Comprehensive 1,000 kW Industrial Plant Power Factor Economics',
        hi: 'व्यापक 1,000 kW औद्योगिक संयंत्र पावर फैक्टर अर्थशास्त्र',
        bn: '১,০০০ kW শিল্প কারখানার বিস্তারিত পাওয়ার ফ্যাক্টর অর্থনৈতিক হিসাব'
      },
      problem: {
        en: 'A continuous manufacturing plastics plant operates with a continuous active load of P = 1,000 kW at an uncompensated power factor of PF₁ = 0.72 lagging. The plant operates 7,200 hours per year.\nUtility Tariff Terms:\n- Energy charge: $0.10 per kWh.\n- Monthly Maximum Demand charge: $14.00 per kVA per month.\n- Power Factor Penalty: If average PF < 0.90, a 1.2% surcharge on the active energy bill is charged for every 0.01 drop below 0.90.\n- Power Factor Rebate: If average PF > 0.95, a 0.5% rebate on the active energy bill is credited for every 0.01 above 0.95 up to unity.\n\nThe plant management installs a turnkey 7% detuned APFC capacitor bank costing $36,000 to raise the power factor to PF₂ = 0.98 lagging. Calculate:\n1. Monthly demand reduction in kVA and annual demand cost savings.\n2. Annual penalty avoided and annual rebate earned.\n3. Total annual net savings and the Simple Payback Period (SPP) in months.',
        hi: 'एक प्लास्टिक विनिर्माण संयंत्र 0.72 लैगिंग पावर फैक्टर पर 1,000 kW का निरंतर भार चलाता है। संयंत्र प्रति वर्ष 7,200 घंटे काम करता है।\nबिजली दरें:\n- ऊर्जा दर: $0.10 प्रति kWh।\n- अधिकतम मांग शुल्क: $14.00 प्रति kVA प्रति माह।\n- पेनल्टी: 0.90 से नीचे जाने पर प्रति 0.01 पर ऊर्जा बिल का 1.2% जुर्माना।\n- छूट: 0.95 से ऊपर जाने पर प्रति 0.01 पर ऊर्जा बिल में 0.5% की छूट।\n\nप्रबंधन ने पावर फैक्टर को 0.98 करने के लिए $36,000 की लागत से 7% डिट्यून्ड APFC पैनल लगाया। ज्ञात कीजिए:\n1. मासिक kVA मांग में कमी और वार्षिक मांग बचत।\n2. जुर्माने से मुक्ति और वार्षिक छूट।\n3. कुल वार्षिक बचत और महीनों में पेबैक अवधि (SPP)।',
        bn: 'একটি প্লাস্টিক উৎপাদন কারখানা ০.৭২ ল্যাগিং পাওয়ার ফ্যাক্টরে ১,০০০ kW লোড অবিচ্ছিন্নভাবে চালায়। বছরে মোট পরিচালন সময় ৭,২০০ ঘণ্টা।\nবিদ্যুৎ ট্যারিফ:\n- প্রতি ইউনিট রেট: $০.১০ প্রতি kWh।\n- মাসিক সর্বোচ্চ ডিমান্ড চার্জ: $১৪.০০ প্রতি kVA।\n- জরিমানা: ০.৯০ এর নিচে নামলে প্রতি ০.০১ এর জন্য ১.২% সারচার্জ।\n- রিবেট: ০.৯৫ ছাড়ালে প্রতি ০.০১ এর জন্য ০.৫% বোনাস ছাড়।\n\nকারখানাটি $৩৬,০০০ খরচে একটি ৭% ডিটিউনড APFC প্যানেল লাগিয়ে PF ০.৯৮ এ উন্নীত করল। নির্ণয় করুন:\n১. মাসিক kVA ডিমান্ড হ্রাস এবং বাৎসরিক ডিমান্ড বিল সাশ্রয়।\n২. জরিমানা পরিহার এবং অর্জিত রিবেট।\n৩. বাৎসরিক মোট নেট সাশ্রয় এবং কত মাসে বিনিয়োগ উঠে আসবে (SPP)।'
      },
      solution: {
        en: 'Step 1: Calculate Maximum Demand (kVA) Reduction:\nInitial Demand S₁ = P / PF₁ = 1,000 kW / 0.72 = 1,388.9 kVA\nImproved Demand S₂ = P / PF₂ = 1,000 kW / 0.98 = 1,020.4 kVA\nMonthly Demand Reduction ΔS = 1,388.9 - 1,020.4 = 368.5 kVA\nMonthly Demand Savings = 368.5 kVA · $14.00/kVA = $5,159.00 per month\nAnnual Demand Savings = $5,159.00 · 12 = $61,908.00 per year\n\nStep 2: Calculate Active Energy Consumption & Bill:\nAnnual Energy = 1,000 kW · 7,200 hours = 7,200,000 kWh per year\nMonthly Energy = 7,200,000 / 12 = 600,000 kWh per month\nMonthly Energy Bill = 600,000 kWh · $0.10/kWh = $60,000 per month\nAnnual Energy Bill = $60,000 · 12 = $720,000 per year\n\nStep 3: Calculate Power Factor Penalty & Rebate:\n- Initial state (PF₁ = 0.72): Below 0.90 threshold by (0.90 - 0.72) = 0.18 (18 points of 0.01).\n  Monthly Penalty % = 18 · 1.2% = 21.6% surcharge on energy bill!\n  Monthly Penalty = 0.216 · $60,000 = $12,960 per month\n  Annual Penalty Avoided = $12,960 · 12 = $155,520 per year!\n- Improved state (PF₂ = 0.98): Above 0.95 threshold by (0.98 - 0.95) = 0.03 (3 points of 0.01).\n  Monthly Rebate % = 3 · 0.5% = 1.5% discount on energy bill\n  Monthly Rebate = 0.015 · $60,000 = $900 per month\n  Annual Rebate Earned = $900 · 12 = $10,800 per year\n\nStep 4: Calculate Total Annual Financial Savings:\nTotal Annual Savings = Annual Demand Savings ($61,908) + Annual Penalty Avoided ($155,520) + Annual Rebate Earned ($10,800) = $228,228.00 per year!\n\nStep 5: Calculate Simple Payback Period (SPP):\nTotal Turnkey CapEx = $36,000\nSPP (years) = $36,000 / $228,228 = 0.1577 years\nSPP (months) = 0.1577 · 12 = 1.89 months ≈ Under 2 months!\n\nConclusion: The $36,000 detuned capacitor bank saves $228,228 every year, fully recovering its entire turnkey purchase and installation cost in less than 2 months (60 days), after which it yields pure profit.',
        hi: 'चरण 1: kVA मांग में कमी एवं वार्षिक बचत:\nप्रारंभिक मांग S₁ = 1,000 / 0.72 = 1,388.9 kVA\nसुधरी मांग S₂ = 1,000 / 0.98 = 1,020.4 kVA\nमासिक मांग कमी = 368.5 kVA\nमासिक मांग बचत = 368.5 · $14 = $5,159\nवार्षिक मांग बचत = $5,159 · 12 = $61,908 प्रति वर्ष\n\nचरण 2: ऊर्जा बिल:\nमासिक ऊर्जा = 600,000 kWh\nमासिक ऊर्जा बिल = 600,000 · $0.10 = $60,000 प्रति माह\n\nचरण 3: पेनल्टी मुक्ति एवं छूट:\n- प्रारंभिक पेनल्टी (0.72 PF): 18 अंक × 1.2% = 21.6% जुर्माना।\n  वार्षिक जुर्माना मुक्ति = 0.216 · $60,000 · 12 = $155,520 प्रति वर्ष!\n- 0.98 PF पर छूट: 3 अंक × 0.5% = 1.5% छूट।\n  वार्षिक छूट = 0.015 · $60,000 · 12 = $10,800 प्रति वर्ष।\n\nचरण 4: कुल वार्षिक बचत:\nकुल बचत = $61,908 + $155,520 + $10,800 = $228,228 प्रति वर्ष।\n\nचरण 5: पेबैक अवधि:\nSPP = $36,000 / $228,228 = 0.158 वर्ष = 1.89 महीने (लगभग 2 महीने!)।\n\nनिष्कर्ष: $36,000 का सिस्टम 2 महीने से भी कम समय में अपनी लागत वसूल कर लेता है और सालाना $228,228 की शुद्ध बचत देता है।',
        bn: 'ধাপ ১: kVA ডিমান্ড হ্রাস ও সাশ্রয়:\nপ্রাথমিক চাহিদা S₁ = ১,০০০ / ০.৭২ = ১,৩৮৮.৯ kVA\nনতুন চাহিদা S₂ = ১,০০০ / ০.৯৮ = ১,০২০.৪ kVA\nমাসিক চাহিদা হ্রাস = ৩৬৮.৫ kVA\nমাসিক ডিমান্ড সাশ্রয় = ৩৬৮.৫ · $১৪ = $৫,১৫৯\nবাৎসরিক ডিমান্ড সাশ্রয় = $৫,১৫৯ · ১২ = $৬১,৯০৮ প্রতি বছর\n\nধাপ ২: এনার্জি বিল:\nমাসিক বিদ্যুৎ বিল = ৬০০,০০০ kWh · $০.১০ = $৬০,০০০ প্রতি মাস\n\nধাপ ৩: জরিমানা ও রিবেট:\n- প্রাথমিক জরিমানা (০.৭২ PF): ১৮ পয়েন্ট × ১.২% = ২১.৬% সারচার্জ।\n  বাৎসরিক জরিমানা পরিহার = ০.২১৬ · $৬০,০০০ · ১২ = $১৫৫,৫২০ প্রতি বছর!\n- ০.৯৮ PF এ রিবেট বোনাস: ৩ পয়েন্ট × ০.৫% = ১.৫% ছাড়।\n  বাৎসরিক রিবেট = ০.০১৫ · $৬০,০০০ · ১২ = $১০,৮০০ প্রতি বছর।\n\nধাপ ৪: বাৎসরিক মোট নেট সাশ্রয়:\nমোট সাশ্রয় = $৬১,৯০৮ + $১৫৫,৫২০ + $১০,৮০০ = $২২৮,২২৮ প্রতি বছর।\n\nধাপ ৫: পেব্যাক পিরিয়ড (SPP):\nSPP = $৩৬,০০০ / $২২৮,২২৮ = ০.১৫৮ বছর = ১.৮৯ মাস (২ মাসেরও কম!)।\n\nফলাফল: $৩৬,০০০ মূল্যের সিস্টেমটি মাত্র ৬০ দিনের মধ্যে তার সম্পূর্ণ খরচ তুলে আনে এবং এরপর প্রতি বছর কারখানাকে $২২৮,২২৮ ডলারের মুনাফা দেয়।'
      }
    },
    {
      id: 'ex-ch13-l07-02',
      title: {
        en: 'Substation Transformer Headroom Release for Factory Expansion',
        hi: 'फैक्ट्री विस्तार के लिए सबस्टेशन ट्रांसफार्मर हेडरूम मुक्ति',
        bn: 'কারখানা সম্প্রসারণে সাবস্টেশন ট্রান্সফরমারের হেডরুম মুক্তি হিসাব'
      },
      problem: {
        en: 'A manufacturing factory has an existing 1,600 kVA substation transformer that is fully loaded at 100% capacity (1,600 kVA), operating at a power factor of 0.75 lagging. The factory wants to install a new production line requiring 300 kW of additional active machinery load. A new secondary substation would cost $180,000.\n1. Calculate the active power delivered by the transformer currently.\n2. Determine the active power the transformer can deliver if power factor is corrected to 0.99 lagging.\n3. Can the factory install the 300 kW expansion without purchasing a new transformer?',
        hi: 'एक विनिर्माण कारखाने में 1,600 kVA का सबस्टेशन ट्रांसफार्मर है जो 0.75 लैगिंग पावर फैक्टर पर अपनी 100% क्षमता (1,600 kVA) पर पूरी तरह भरा हुआ है। कारखाना 300 kW का नया उत्पादन लोड जोड़ना चाहता है। नए सबस्टेशन की लागत $180,000 है।\n1. वर्तमान में ट्रांसफार्मर द्वारा दी जा रही सक्रिय शक्ति की गणना करें।\n2. यदि पावर फैक्टर को 0.99 लैगिंग तक सुधारा जाए, तो ट्रांसफार्मर कितनी सक्रिय शक्ति दे सकेगा?\n3. क्या कारखाना नया ट्रांसफार्मर खरीदे बिना 300 kW का नया लोड जोड़ सकता है?',
        bn: 'একটি কারখানায় ১,৬০০ kVA সাবস্টেশন ট্রান্সফরমার রয়েছে যা ০.৭৫ ল্যাগিং পাওয়ার ফ্যাক্টরে ১০০% পূর্ণ লোডে (১,৬০০ kVA) চলছে। কারখানাটিতে অতিরিক্ত ৩০০ kW লোডের একটি নতুন প্রোডাকশন লাইন বসানো প্রয়োজন। নতুন সাবস্টেশন নির্মাণে খরচ হবে $১৮০,০০০।\n১. বর্তমানে ট্রান্সফরমারটি কত সক্রিয় শক্তি সরবরাহ করছে?\n২. পাওয়ার ফ্যাক্টর ০.৯৯ ল্যাগিং এ উন্নীত করলে এটি কত সক্রিয় শক্তি সরবরাহ করতে পারবে?\n৩. নতুন ট্রান্সফরমার না কিনে কি কারখানাটি ৩০০ kW লোড চালু করতে পারবে?'
      },
      solution: {
        en: 'Step 1: Calculate current active power delivered:\nP_current = S_tx · PF₁ = 1,600 kVA · 0.75 = 1,200 kW\n\nStep 2: Calculate active power deliverable at PF₂ = 0.99:\nP_improved = S_tx · PF₂ = 1,600 kVA · 0.99 = 1,584 kW\n\nStep 3: Calculate released active power capacity (headroom):\nΔP_released = P_improved - P_current = 1,584 kW - 1,200 kW = 384 kW\n\nStep 4: Expansion feasibility evaluation:\nThe new production line requires 300 kW.\nThe released capacity of 384 kW exceeds the required 300 kW with an 84 kW safety margin (the transformer will operate at only: (1,200 + 300) / 0.99 = 1,515 kVA, which is 94.7% of rating).\n\nConclusion: Installing a $25,000 capacitor bank frees up 384 kW of transformer capacity, allowing the factory to install its 300 kW production line immediately and completely defer the $180,000 substation transformer expansion, saving $155,000 in net capital expenditure!',
        hi: 'चरण 1: वर्तमान सक्रिय शक्ति:\nP_current = 1,600 · 0.75 = 1,200 kW\n\nचरण 2: 0.99 PF पर नई सक्रिय शक्ति:\nP_improved = 1,600 · 0.99 = 1,584 kW\n\nचरण 3: मुक्त सक्रिय शक्ति (हेडरूम):\nΔP = 1,584 - 1,200 = 384 kW\n\nचरण 4: विस्तार व्यवहार्यता:\nआवश्यक लोड = 300 kW। मुक्त क्षमता (384 kW) आवश्यक लोड से अधिक है। नया ट्रांसफार्मर खरीदने की कोई आवश्यकता नहीं है।\n\nनिष्कर्ष: केवल $25,000 का कैपेसिटर बैंक लगाकर $180,000 के नए ट्रांसफार्मर की लागत बचा ली गई।',
        bn: 'ধাপ ১: বর্তমান সরবরাহকৃত সক্রিয় ক্ষমতা:\nP_current = ১,৬০০ · ০.৭৫ = ১,২০০ kW\n\nধাপ ২: ০.৯৯ PF এ নতুন উৎপাদন ক্ষমতা:\nP_improved = ১,৬০০ · ০.৯৯ = ১,৫৮৪ kW\n\nধাপ ৩: মুক্ত হওয়া সক্রিয় ক্ষমতা (হেডরুম):\nΔP = ১,৫৮৪ - ১,২০০ = ৩৮৪ kW\n\nধাপ ৪: সম্প্রসারণের সম্ভাব্যতা:\nনতুন মেশিনের জন্য প্রয়োজন ৩০০ kW। মুক্ত হওয়া ক্ষমতা ৩৮৪ kW হওয়ায় কোনো নতুন ট্রান্সফরমার না কিনেই এটি চালানো সম্ভব।\n\nফলাফল: মাত্র $২৫,০০০ মূল্যের ক্যাপাসিটর ব্যাংক লাগিয়ে কারখানাটি $১৮০,০০০ মূল্যের নতুন সাবস্টেশন নির্মাণের খরচ সম্পূর্ণ বাঁচিয়ে দিল।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Chemical Fertilizer Plant Tariff Optimization: Eliminating severe monthly lagging penalties and saving $15,000 monthly on maximum demand charges.',
      'Textile Weaving Mill Expansion Without Grid Upgrade: Recovering 450 kVA of transformer headroom via centralized APFC panels, enabling the installation of 40 new air-jet looms without purchasing utility grid capacity.',
      'Commercial Airport Terminal Modernization: Mitigating low power factor caused by thousands of LED airfield lights, conveyor belts, and escalators to qualify for utility environmental green rebates.'
    ],
    hi: [
      'रासायनिक उर्वरक संयंत्र टैरिफ अनुकूलन: मासिक जुर्माने को समाप्त करना और मांग शुल्क में प्रति माह $15,000 की बचत करना।',
      'कपड़ा मिल का विस्तार: APFC पैनलों द्वारा 450 kVA ट्रांसफार्मर क्षमता मुक्त करके बिना नया सबस्टेशन बनाए 40 नए लूम स्थापित करना।',
      'हवाई अड्डा आधुनिकीकरण: रनवे लाइटिंग और कन्वेयर बेल्ट के कारण होने वाले खराब पावर फैक्टर को ठीक करके बिजली बिल में छूट प्राप्त करना।'
    ],
    bn: [
      'রাসায়নিক সার কারখানা: ভারী মাসিক জরিমানা বন্ধ করা এবং ডিমান্ড চার্জে মাসে $১৫,০০০ সাশ্রয় করা।',
      'টেক্সটাইল উইভিং মিল সম্প্রসারণ: APFC প্যানেল বসিয়ে ট্রান্সফরমারের ৪৫০ kVA হেডরুম মুক্ত করে নতুন ৪০টি তাঁত মেশিন চালু করা।',
      'বিমানবন্দর টার্মিনাল আধুনিকায়ন: রানওয়ে লাইট ও কনভেয়ার বেল্টের লো পাওয়ার ফ্যাক্টর সংশোধন করে ইউটিলিটি গ্রিন রিবেট বোনাস অর্জন।'
    ]
  },
  importantPoints: {
    en: [
      'Electric utilities bill commercial customers on apparent power demand (kVA); improving power factor directly slashes monthly maximum demand charges.',
      'Substation transformers and switchboards are thermally rated in kVA, not kW; improving power factor unlocks physical transformer headroom to power factory expansions without capital expenditure.',
      'Industrial APFC capacitor panels deliver extraordinary financial returns, frequently achieving complete Simple Payback Periods in 6 to 15 months.'
    ],
    hi: [
      'बिजली कंपनियाँ kVA मांग पर बिल बनाती हैं; पावर फैक्टर सुधारने से सीधे मासिक मांग शुल्क में कमी आती है।',
      'ट्रांसफार्मर kVA में रेटेड होते हैं; पावर फैक्टर सुधारने से ट्रांसफार्मर की वहन क्षमता मुक्त होती है जिससे बिना नए ट्रांसफार्मर के फैक्ट्री बढ़ाई जा सकती है।',
      'औद्योगिक APFC पैनल असाधारण वित्तीय लाभ देते हैं और अक्सर 6 से 15 महीनों में अपनी पूरी लागत वसूल कर देते हैं।'
    ],
    bn: [
      'বিদ্যুৎ সংস্থাগুলো kVA চাহিদার ওপর বিল করে; পাওয়ার ফ্যাক্টর সংশোধন সরাসরি সর্বোচ্চ ডিমান্ড চার্জ কমিয়ে দেয়।',
      'ট্রান্সফরমারের ক্ষমতা kVA তে সীমাবদ্ধ থাকে; পাওয়ার ফ্যাক্টর বৃদ্ধি করলে ট্রান্সফরমারের হেডরুম ফাঁকা হয় যা কারখানা সম্প্রসারণে সহায়তা করে।',
      'শিল্পক্ষেত্রে APFC প্যানেল স্থাপন অত্যন্ত লাভজনক এবং অধিকাংশ ক্ষেত্রে মাত্র ৬ থেকে ১৫ মাসের মধ্যে এর সম্পূর্ণ খরচ উঠে আসে।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistake: Evaluating power factor correction solely on kWh energy savings. Correction: Conductor I²R energy loss reductions are real, but they represent only 5–10% of total financial returns. The massive financial savings come from kVA demand reduction, penalty elimination, and utility bill rebate bonuses.',
      'Mistake: Procuring low-cost un-detuned capacitor banks to maximize short-term ROI in a harmonic environment. Correction: In factories with VFDs, un-detuned capacitors resonate with drive harmonics, suffering catastrophic failure within months. Always budget for 7% detuned reactors.'
    ],
    hi: [
      'त्रुटि: केवल kWh ऊर्जा बचत के आधार पर पावर फैक्टर सुधार का मूल्यांकन करना। सुधार: केबल हानि में कमी कुल बचत का केवल 5-10% होती है। असली बड़ी बचत kVA मांग में कमी, जुर्माना मुक्ति और सरकार से मिलने वाली छूट से आती है।',
      'त्रुटि: पैसे बचाने के लिए VFD वाले कारखाने में सस्ते बिना रिएक्टर वाले कैपेसिटर लगाना। सुधार: हार्मोनिक्स के कारण साधारण कैपेसिटर कुछ ही महीनों में फट जाते हैं। हमेशा 7% डिट्यून्ड रिएक्टर वाले बैंक ही खरीदें।'
    ],
    bn: [
      'ভুল: শুধুমাত্র kWh বিদ্যুৎ সাশ্রয়ের ওপর ভিত্তি করে প্রকল্পের মূল্যায়ন করা। সংশোধন: তারের অপচয় হ্রাস মোট লাভের মাত্র ৫-১০%। আসল বিশাল সাশ্রয় আসে kVA ডিমান্ড হ্রাস, জরিমানা পরিহার এবং ইউটিলিটি রিবেট থেকে।',
      'ভুল: খরচ বাঁচাতে VFD চালিত কারখানায় সস্তা সাধারণ ক্যাপাসিটর ব্যাংক লাগানো। সংশোধন: হারমোনিক রেজোন্যান্সের কারণে সাধারণ ক্যাপাসিটর কয়েক মাসেই বিস্ফোরিত হয়। সর্বদা ৭% ডিটিউনড রিঅ্যাক্টর সহ প্যানেল নির্বাচন করুন।'
    ]
  },
  keyTakeaways: {
    en: [
      'Improving power factor reduces billed kVA demand: ΔS = P · [1/PF₁ - 1/PF₂].',
      'Correcting plant power factor releases critical transformer headroom, deferring expensive substation upgrades.',
      'Detuned APFC systems deliver typical payback periods of 6 to 15 months and an IRR exceeding 80%.'
    ],
    hi: [
      'पावर फैक्टर सुधारने से बिल योग्य kVA मांग घटती है: ΔS = P · [1/PF₁ - 1/PF₂]।',
      'प्लांट पावर फैक्टर सुधारने से ट्रांसफार्मर की अतिरिक्त क्षमता मुक्त होती है, जिससे नया सबस्टेशन खरीदने का खर्च बचता है।',
      'डिट्यून्ड APFC सिस्टम 6 से 15 महीनों में लागत वसूल कर लेते हैं और 80% से अधिक IRR देते हैं।'
    ],
    bn: [
      'পাওয়ার ফ্যাক্টর উন্নতি করলে বিলিং kVA চাহিদা উল্লেখযোগ্যভাবে হ্রাস পায়: ΔS = P · [১/PF₁ - ১/PF₂]।',
      'পাওয়ার ফ্যাক্টর সংশোধন বিদ্যমান ট্রান্সফরমারের ক্যাপাসিটি মুক্ত করে ব্যয়বহুল সাবস্টেশন সম্প্রসারণ এড়াতে সাহায্য করে।',
      'ডিটিউনড APFC প্যানেল সাধারণত ৬ থেকে ১৫ মাসের মধ্যে সম্পূর্ণ বিনিয়োগ তুলে আনে।'
    ]
  },
  practiceQuestions: [
    {
      id: 'pq-ch13-l07-01',
      question: {
        en: 'A factory draws 600 kW at 0.75 lagging PF. If the utility charges $15 per kVA of maximum demand per month, calculate the annual demand charge savings achieved by improving the power factor to 0.98 lagging.',
        hi: 'एक फैक्ट्री 0.75 लैगिंग PF पर 600 kW लोड खींचती है। यदि बिजली कंपनी प्रति माह $15 प्रति kVA मांग शुल्क लेती है, तो PF को 0.98 करने पर वार्षिक मांग शुल्क बचत की गणना करें।',
        bn: 'একটি কারখানা ০.৭৫ ল্যাগিং PF এ ৬০০ kW বিদ্যুৎ ব্যবহার করে। ইউটিলিটি প্রতি মাসে প্রতি kVA ডিমান্ডে $১৫ চার্জ করলে PF ০.৯৮ এ উন্নীত করার মাধ্যমে বাৎসরিক ডিমান্ড চার্জ সাশ্রয় হিসাব করুন।'
      },
      hint: {
        en: 'Compute S₁ = 600 / 0.75 = 800 kVA, S₂ = 600 / 0.98 = 612.2 kVA. Find ΔS = 187.8 kVA. Multiply by $15/month and 12 months.',
        hi: 'S₁ और S₂ निकालें। मांग में कमी ΔS = 187.8 kVA प्राप्त करें और $15 तथा 12 महीनों से गुणा करें।',
        bn: 'S₁ ও S₂ বের করুন। ডিমান্ড হ্রাস ΔS = ১৮৭.৮ kVA কে $১৫ এবং ১২ মাস দিয়ে গুণ করুন।'
      }
    },
    {
      id: 'pq-ch13-l07-02',
      question: {
        en: 'Explain why improving factory power factor from 0.80 to 0.98 releases physical capacity in upstream distribution transformers, and how this defers capital expenditure on substation infrastructure.',
        hi: 'व्याख्या करें कि फैक्ट्री के पावर फैक्टर को 0.80 से 0.98 तक सुधारने से अपस्ट्रीम ट्रांसफार्मर में भौतिक क्षमता कैसे मुक्त होती है, और यह नए सबस्टेशन के पूंजीगत व्यय को कैसे टालता है।',
        bn: 'ব্যাখ্যা করুন কেন কারখানার পাওয়ার ফ্যাক্টর ০.৮০ থেকে ০.৯৮ এ উন্নীত করলে বিদ্যমান ট্রান্সফরমারের শারীরিক লোড ক্ষমতা মুক্ত হয় এবং এটি কীভাবে নতুন সাবস্টেশন কেনার খরচ বাঁচায়।'
      },
      hint: {
        en: 'Recall that transformers are thermally rated in current (kVA = √3 · V · I). As PF rises, less reactive current circulates, leaving more thermal headroom for real power kW.',
        hi: 'याद रखें कि ट्रांसफार्मर करंट (kVA) पर रेटेड होते हैं। PF सुधरने से रिएक्टिव करंट घटता है और एक्टिव पावर के लिए हेडरूम खाली होता है।',
        bn: 'মনে রাখবেন ট্রান্সফরমারের ক্ষমতা কারেন্ট বা kVA দ্বারা নির্ধারিত হয়। PF বাড়লে অতিরিক্ত রিঅ্যাক্টিভ কারেন্ট কমে যায়, ফলে সক্রিয় ক্ষমতার জন্য হেডরুম তৈরি হয়।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch13-l07-01',
      question: {
        en: 'Why do electric utilities bill industrial customers on maximum apparent power demand (kVA) rather than active power alone (kW)?',
        hi: 'बिजली कंपनियाँ औद्योगिक उपभोक्ताओं से केवल वास्तविक शक्ति (kW) के बजाय अधिकतम आभासी शक्ति मांग (kVA) पर बिल क्यों वसूलती हैं?',
        bn: 'বিদ্যুৎ সরবরাহকারী সংস্থাগুলি কেবল সক্রিয় শক্তির (kW) বদলে সর্বোচ্চ আপাত চাহিদা (kVA) এর ওপর ভিত্তি করে শিল্প গ্রাহকদের বিল করে কেন?'
      },
      options: [
        { en: 'Because transmission lines, transformers, and switchgear must be physically sized to carry total current (kVA), regardless of whether that current does useful real work', hi: 'क्योंकि ट्रांसमिशन लाइनों और ट्रांसफार्मरों को कुल धारा (kVA) वहन करने के लिए डिज़ाइन किया जाता है, चाहे वह धारा उपयोगी काम करे या न करे', bn: 'কারণ সঞ্চালন লাইন, ট্রান্সফরমার ও তারের আকার মোট কারেন্ট (kVA) বহনের উপযোগী করে তৈরি করতে হয়, তা দিয়ে উপযোগী কাজ হোক বা না হোক' },
        { en: 'Because utility digital computers can only calculate square roots', hi: 'क्योंकि बिजली कंपनी के कंप्यूटर केवल वर्गमूल की गणना कर सकते हैं', bn: 'কারণ বিদ্যুৎ সংস্থার কম্পিউটার শুধুমাত্র বর্গমূল হিসাব করতে পারে' },
        { en: 'Because reactive power creates physical rust on aluminum overhead lines', hi: 'क्योंकि प्रतिघाती शक्ति ओवरहेड लाइनों पर भौतिक जंग पैदा करती है', bn: 'কারণ রিঅ্যাক্টিভ পাওয়ারের কারণে অ্যালুমিনিয়াম তারে মরিচা ধরে' },
        { en: 'To encourage industrial factories to operate their motors at zero speed', hi: 'कारखानों को अपनी मोटरों को शून्य गति पर चलाने के लिए प्रोत्साहित करने हेतु', bn: 'কারখানাকে মোটর বন্ধ রাখতে উৎসাহিত করার জন্য' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Conductors, circuit breakers, and transformers heat up and are thermally rated according to total line current (kVA). The utility must invest capital in copper and iron to carry the reactive current, which must be recovered via demand charges.',
        hi: 'उपकरण कुल करंट (kVA) के कारण गर्म होते हैं। यूटिलिटी को इस अतिरिक्त करंट को ले जाने के लिए बड़े तारों और ट्रांसफार्मरों में निवेश करना पड़ता है, जिसकी भरपाई मांग शुल्क से की जाती है।',
        bn: 'পরিবাহী ও ট্রান্সফরমারের তারের আকার মোট কারেন্ট বা kVA দ্বারা নির্ধারিত হয়। এই অতিরিক্ত রিঅ্যাক্টিভ কারেন্ট পরিবহনের জন্য ইউটিলিটিকে যে বাড়তি অবকাঠামো বানাতে হয়, তার খরচ তুলতে ডিমান্ড চার্জ ধরা হয়।'
      }
    },
    {
      id: 'mcq-ch13-l07-02',
      question: {
        en: 'A factory draws 500 kW at 0.70 lagging PF. Improving the PF to 1.0 (unity) reduces the apparent power demand by how much?',
        hi: 'एक फैक्ट्री 0.70 लैगिंग PF पर 500 kW लोड खींचती है। PF को 1.0 (यूनिटी) तक सुधारने पर आभासी शक्ति मांग (kVA) में कितनी कमी आएगी?',
        bn: 'একটি কারখানা ০.৭০ ল্যাগিং PF এ ৫০০ kW লোড চালায়। PF কে ১.০ (ইউনিটি) তে নিলে আপাত চাহিদা (kVA) কত হ্রাস পাবে?'
      },
      options: [
        { en: '214.3 kVA (from 714.3 kVA down to 500.0 kVA)', hi: '214.3 kVA (714.3 kVA से घटकर 500.0 kVA)', bn: '২১৪.৩ kVA (৭১৪.৩ kVA থেকে কমে ৫০০.০ kVA)' },
        { en: 'Exactly 0 kVA', hi: 'ठीक 0 kVA', bn: 'ঠিক ০ kVA' },
        { en: '500.0 kVA', hi: '500.0 kVA', bn: '৫০০.০ kVA' },
        { en: '1,000.0 kVA', hi: '1,000.0 kVA', bn: '১,০০০.০ kVA' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'S₁ = 500 / 0.70 = 714.29 kVA. At unity PF, S₂ = 500 / 1.0 = 500.0 kVA. Reduction ΔS = 714.29 - 500.0 = 214.29 kVA.',
        hi: 'S₁ = 500 / 0.70 = 714.3 kVA। S₂ = 500 / 1.0 = 500 kVA। कमी = 714.3 - 500 = 214.3 kVA।',
        bn: 'S₁ = ৫০০ / ০.৭০ = ৭১৪.৩ kVA। ইউনিটি PF এ S₂ = ৫০০ / ১.০ = ৫০০ kVA। চাহিদা হ্রাস = ৭১৪.৩ - ৫০০ = ২১৪.৩ kVA।'
      }
    },
    {
      id: 'mcq-ch13-l07-03',
      question: {
        en: 'How does improving power factor from 0.75 to 0.98 release capacity in a 2,000 kVA plant distribution transformer?',
        hi: 'पावर फैक्टर को 0.75 से 0.98 तक सुधारने से 2,000 kVA प्लांट वितरण ट्रांसफार्मर में क्षमता कैसे मुक्त होती है?',
        bn: 'পাওয়ার ফ্যাক্টর ০.৭৫ থেকে ০.৯৮ এ উন্নীত করলে একটি ২,০০০ kVA কারখানার ট্রান্সফরমারের কতটুকু সক্রিয় ক্ষমতা বৃদ্ধি পায়?'
      },
      options: [
        { en: 'It increases the usable real power throughput by 460 kW (from 1,500 kW to 1,960 kW) at 100% transformer rating', hi: 'यह 100% ट्रांसफार्मर रेटिंग पर उपयोगी वास्तविक शक्ति प्रवाह को 460 kW (1,500 kW से 1,960 kW) बढ़ा देता है', bn: 'এটি ১০০% ট্রান্সফরমার লোডে ব্যবহারের উপযোগী বাস্তব উৎপাদন ক্ষমতা ৪৬০ kW (১,৫০০ kW থেকে ১,৯৬০ kW) বৃদ্ধি করে' },
        { en: 'It steps down the frequency of the transformer to 25 Hz', hi: 'यह ट्रांसफार्मर की आवृत्ति को घटाकर 25 Hz कर देता है', bn: 'এটি ট্রান্সফরমারের ফ্রিকোয়েন্সি কমিয়ে ২৫ Hz করে ফেলে' },
        { en: 'It permanently magnetizes the core steel plates', hi: 'यह कोर स्टील प्लेटों को स्थायी रूप से चुंबकित कर देता है', bn: 'এটি ট্রান্সফরমার কোরের স্টিলকে স্থায়ী চুম্বকে পরিণত করে' },
        { en: 'It eliminates the need for transformer oil cooling radiators', hi: 'यह ट्रांसफार्मर तेल शीतलन रेडिएटर्स की आवश्यकता को समाप्त करता है', bn: 'এর ফলে ট্রান্সফরমারের তেল বা রেডিয়েটরের কোনো প্রয়োজন থাকে না' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'At 0.75 PF, P_max = 2,000 · 0.75 = 1,500 kW. At 0.98 PF, P_max = 2,000 · 0.98 = 1,960 kW. Capacity released = 1,960 - 1,500 = 460 kW of real machinery power without buying a new transformer.',
        hi: '0.75 PF पर अधिकतम लोड = 2,000 · 0.75 = 1,500 kW। 0.98 PF पर = 2,000 · 0.98 = 1,960 kW। मुक्त क्षमता = 1,960 - 1,500 = 460 kW।',
        bn: '০.৭৫ PF এ P_max = ২,০০০ · ০.৭৫ = ১,৫০০ kW। ০.৯৮ PF এ P_max = ২,০০০ · ০.৯৮ = ১,৯৬০ kW। মুক্ত হওয়া ক্ষমতা = ১,৯৬০ - ১,৫০০ = ৪৬০ kW।'
      }
    },
    {
      id: 'mcq-ch13-l07-04',
      question: {
        en: 'What is the typical Simple Payback Period (SPP) for an industrial Automatic Power Factor Correction (APFC) panel installation?',
        hi: 'एक औद्योगिक स्वचालित पावर फैक्टर सुधार (APFC) पैनल स्थापना के लिए विशिष्ट साधारण पेबैक अवधि (SPP) क्या है?',
        bn: 'শিল্পক্ষেত্রে একটি অটোমেটিক পাওয়ার ফ্যাক্টর কারেকশন (APFC) প্যানেল স্থাপনের সাধারণ পেব্যাক পিরিয়ড (SPP) কত হয়?'
      },
      options: [
        { en: '6 to 18 months', hi: '6 से 18 महीने', bn: '৬ থেকে ১৮ মাস' },
        { en: '15 to 25 years', hi: '15 से 25 वर्ष', bn: '১৫ থেকে ২৫ বছর' },
        { en: 'Zero days (instantaneous free equipment)', hi: 'शून्य दिन (तत्काल मुफ्त उपकरण)', bn: 'শূন্য দিন' },
        { en: 'Capacitor panels never recover their initial investment', hi: 'कैपेसिटर पैनल कभी भी अपने प्रारंभिक निवेश को वसूल नहीं करते', bn: 'ক্যাপাসিটর প্যানেল কখনোই তার খরচ তুলতে পারে না' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Due to substantial maximum demand savings, elimination of monthly utility penalties, and power factor rebate bonuses, industrial APFC panels routinely achieve full capital payback within 6 to 18 months.',
        hi: 'मांग शुल्क में भारी बचत, जुर्माने की समाप्ति और सरकारी छूट के कारण APFC पैनल 6 से 18 महीनों में अपनी पूरी लागत वसूल कर लेते हैं।',
        bn: 'ডিমান্ড চার্জ সাশ্রয়, মাসিক জরিমানা পরিহার এবং ইউটিলিটি রিবেটের কারণে সাধারণত মাত্র ৬ থেকে ১৮ মাসের মধ্যে পুরো সিস্টেমের খরচ উঠে আসে।'
      }
    },
    {
      id: 'mcq-ch13-l07-05',
      question: {
        en: 'Under a typical utility penalty clause (e.g., 1.5% surcharge per 0.01 PF below 0.90), what is the penalty surcharge on a $50,000 monthly energy bill for a plant operating at 0.80 lagging PF?',
        hi: 'एक विशिष्ट उपयोगिता जुर्माना खंड (0.90 से नीचे प्रति 0.01 पर 1.5% अधिभार) के तहत, 0.80 लैगिंग PF पर चलने वाले संयंत्र के लिए $50,000 के मासिक ऊर्जा बिल पर जुर्माना अधिभार क्या होगा?',
        bn: 'একটি সাধারণ ইউটিলিটি জরিমানা বিধিতে (০.৯০ এর নিচে প্রতি ০.০১ এ ১.৫% সারচার্জ), ০.৮০ ল্যাগিং PF এ চলা কারখানার $৫০,০০০ মাসিক বিলে কত টাকা জরিমানা আসবে?'
      },
      options: [
        { en: '$7,500 per month (15% surcharge)', hi: '$7,500 प्रति माह (15% अधिभार)', bn: '$৭,৫০০ প্রতি মাস (১৫% সারচার্জ)' },
        { en: '$500 per month', hi: '$500 प्रति माह', bn: '$৫০০ প্রতি মাস' },
        { en: '$25,000 per month', hi: '$25,000 प्रति माह', bn: '$২৫,০০০ প্রতি মাস' },
        { en: '$0 (zero penalty)', hi: '$0 (शून्य जुर्माना)', bn: '$০ (কোনো জরিমানা নেই)' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Shortfall below 0.90 benchmark = 0.90 - 0.80 = 0.10 (10 points of 0.01). Surcharge percentage = 10 · 1.5% = 15.0%. Penalty amount = 0.15 · $50,000 = $7,500 per month ($90,000 per year!).',
        hi: 'गिरावट = 0.90 - 0.80 = 0.10 (10 अंक)। जुर्माना = 10 · 1.5% = 15%। अधिभार राशि = 0.15 · $50,000 = $7,500 प्रति माह।',
        bn: 'পার্থক্য = ০.৯০ - ০.৮০ = ০.১০ (১০ পয়েন্ট)। জরিমানা শতকরা = ১০ · ১.৫% = ১৫%। মোট মাসিক জরিমানা = ০.১৫ · $৫০,০০০ = $৭,৫০০ প্রতি মাস।'
      }
    },
    {
      id: 'mcq-ch13-l07-06',
      question: {
        en: 'What is the primary risk of attempting to maximize power factor economic rebates by overcompensating into leading power factor territory?',
        hi: 'लीडिंग पावर फैक्टर क्षेत्र में ओवर-कंपेंसेट करके अधिकतम आर्थिक छूट पाने के प्रयास का मुख्य जोखिम क्या है?',
        bn: 'অতিরিক্ত রিবেট পাওয়ার লোভে সিস্টেমকে লিডিং পাওয়ার ফ্যাক্টরে ওভার-কম্পেনসেট করার প্রধান ঝুঁকি কী?'
      },
      options: [
        { en: 'System overvoltages (Ferranti-type rise), harmonic instability, generator tripping, and forfeiture of utility rebates (many utilities penalize leading PF)', hi: 'सिस्टम ओवरवोल्टेज, हार्मोनिक अस्थिरता, जनरेटर ट्रिपिंग, और छूट से वंचित होना (कंपनियां लीडिंग PF पर भी जुर्माना लगाती हैं)', bn: 'সিস্টেমে ওভারভোল্টেজ বৃদ্ধি, হারমোনিক অস্থিতিশীলতা, জেনারেটর ট্রিপ এবং উল্টো ইউটিলিটি জরিমানা (অনেক ইউটিলিটি লিডিং PF এও জরিমানা করে)' },
        { en: 'The plant electric meter will run completely backwards at 1,000 RPM', hi: 'प्लांट का बिजली मीटर 1,000 RPM पर पूरी तरह से उल्टा घूमेगा', bn: 'বিদ্যুৎ মিটার উল্টো দিকে দ্রুত গতিতে ঘুরতে থাকবে' },
        { en: 'Factory air conditioning will produce dry ice instead of cold air', hi: 'फैक्ट्री एसी ठंडी हवा के स्थान पर ड्राई आइस बनाने लगेगा', bn: 'শীতাতপ নিয়ন্ত্রণ ব্যবস্থা ঠাণ্ডা বাতাসের বদলে বরফ ছড়াবে' },
        { en: 'Conductor cables will instantly convert into solid gold', hi: 'कंडक्टर केबल तुरंत ठोस सोने में बदल जाएंगे', bn: 'তারের সব পরিবাহী সোনায় পরিণত হবে' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Overcompensation causes leading current that elevates plant bus voltage, risks self-excitation, and trips on-site backup generators. Furthermore, modern utility grid codes penalize leading power factor equally to lagging power factor.',
        hi: 'ओवर-कंपेंसेशन से वोल्टेज खतरनाक रूप से बढ़ जाता है, जनरेटर ट्रिप हो सकते हैं, और आधुनिक बिजली कंपनियां लीडिंग पावर फैक्टर पर भी भारी जुर्माना लगाती हैं।',
        bn: 'ওভার-কম্পেনসেশনের কারণে লাইনে ভোল্টেজ বিপজ্জনকভাবে বেড়ে যায়, ব্যাকআপ জেনারেটর ট্রিপ করে এবং আধুনিক গ্রিড কোড অনুযায়ী লিডিং পাওয়ার ফ্যাক্টরেও উল্টো জরিমানা দিতে হয়।'
      }
    },
    {
      id: 'mcq-ch13-l07-07',
      question: {
        en: 'In industrial project finance, why does a detuned APFC installation often show an Internal Rate of Return (IRR) exceeding 80%?',
        hi: 'औद्योगिक परियोजना वित्तपोषण में, एक डिट्यून्ड APFC स्थापना अक्सर 80% से अधिक आंतरिक प्रतिफल दर (IRR) क्यों दिखाती है?',
        bn: 'শিল্প অর্থায়নে একটি ডিটিউনড APFC প্রকল্প সাধারণত ৮০% এর বেশি ইন্টারনাল রেট অব রিটার্ন (IRR) প্রদর্শন করে কেন?'
      },
      options: [
        { en: 'Because the upfront equipment CapEx is modest compared to the massive monthly recurring savings in demand charges, penalties, and rebates across a 10-year asset life', hi: 'क्योंकि 10 साल के जीवनकाल में मांग शुल्क, जुर्माने और छूट में होने वाली भारी मासिक बचत की तुलना में प्रारंभिक उपकरण लागत बहुत कम होती है', bn: 'কারণ ১০ বছরের দীর্ঘ পরিচালন জীবনে প্রতি মাসের বিপুল ডিমান্ড চার্জ সাশ্রয়, জরিমানা পরিহার ও রিবেটের তুলনায় প্রাথমিক যন্ত্রপাতি কেনার খরচ অনেক কম' },
        { en: 'Because banks provide 0% interest loans exclusively for power capacitors', hi: 'क्योंकि बैंक विशेष रूप से पावर कैपेसिटर के लिए 0% ब्याज ऋण प्रदान करते हैं', bn: 'কারণ ব্যাংক ক্যাপাসিটরের জন্য সুদমুক্ত ঋণ দেয়' },
        { en: 'Because capacitors require zero maintenance and zero replacement parts forever', hi: 'क्योंकि कैपेसिटर को हमेशा के लिए शून्य रखरखाव और शून्य भागों की आवश्यकता होती है', bn: 'কারণ ক্যাপাসিটরে কোনোদিন কোনো রক্ষণাবেক্ষণ লাগে না' },
        { en: 'Because governments pay 100% of all factory electricity bills once PF reaches 0.99', hi: 'क्योंकि PF 0.99 पर पहुंचने पर सरकार कारखाने के सभी बिजली बिलों का 100% भुगतान करती है', bn: 'কারণ PF ০.৯৯ হলে সরকার সব বিদ্যুৎ বিল ফ্রি করে দেয়' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'A typical $30,000 APFC installation can save $30,000 to $60,000 annually. Compounded over a 10-to-15-year operational life, the discounted cash flows generate extraordinarily high IRRs (often 70% to 120%).',
        hi: 'एक ₹25-30 लाख का APFC पैनल सालाना ₹30-50 लाख तक बचा सकता है। 10 वर्षों के जीवनकाल में यह भारी नकद प्रवाह पैदा करता है जिससे IRR 80% से ऊपर निकल जाता है।',
        bn: 'একটি সাধারণ $৩০,০০০ মূল্যের APFC প্যানেল বছরে $৩০,০০০ থেকে $৬০,০০০ ডলার পর্যন্ত সাশ্রয় করতে পারে। ১০-১৫ বছরের জীবনকালে এই বিপুল সঞ্চয় প্রকল্পটির IRR ৮০% এর ওপরে নিয়ে যায়।'
      }
    },
    {
      id: 'mcq-ch13-l07-08',
      question: {
        en: 'An industrial plant spends $40,000 per month on electricity and pays a monthly power factor penalty of $4,800. If an APFC panel costing $24,000 eliminates the penalty and saves an additional $1,200/month in demand charges, what is the Simple Payback Period?',
        hi: 'एक औद्योगिक संयंत्र बिजली पर प्रति माह $40,000 खर्च करता है और $4,800 का मासिक पावर फैक्टर जुर्माना देता है। यदि $24,000 की लागत वाला APFC पैनल जुर्माने को समाप्त करता है और मांग शुल्क में $1,200/माह की अतिरिक्त बचत करता है, तो साधारण पेबैक अवधि क्या है?',
        bn: 'একটি কারখানা প্রতি মাসে $৪০,০০০ বিদ্যুৎ বিল দেয় যার মধ্যে $৪,৮০০ হলো মাসিক PF জরিমানা। $২৪,০০০ খরচে একটি APFC প্যানেল বসিয়ে জরিমানা দূর করা হলো এবং ডিমান্ড চার্জে অতিরিক্ত $১,২০০/মাস সাশ্রয় হলো। পেব্যাক পিরিয়ড কত?'
      },
      options: [
        { en: '4.0 months', hi: '4.0 महीने', bn: '৪.০ মাস' },
        { en: '24.0 months', hi: '24.0 महीने', bn: '২৪.০ মাস' },
        { en: '12.0 months', hi: '12.0 महीने', bn: '১২.০ মাস' },
        { en: '48.0 months', hi: '48.0 महीने', bn: '৪৮.০ মাস' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Monthly savings = $4,800 (penalty eliminated) + $1,200 (demand reduction) = $6,000 per month. Payback period = CapEx / Monthly Savings = $24,000 / $6,000 = 4.0 months.',
        hi: 'मासिक बचत = $4,800 + $1,200 = $6,000 प्रति माह। पेबैक अवधि = $24,000 / $6,000 = 4.0 महीने।',
        bn: 'মাসিক মোট সাশ্রয় = $৪,৮০০ + $১,২০০ = $৬,০০০। পেব্যাক সময়কাল = $২৪,০০০ / $৬,০০০ = ৪.০ মাস।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ch13-industrial-pf-case-study',
      title: {
        en: 'Industrial Substation Two-Part Tariff Power Flow Schematic',
        hi: 'औद्योगिक सबस्टेशन द्वि-भाग टैरिफ पावर फ्लो आरेख',
        bn: 'শিল্প সাবস্টেশন দ্বি-স্তর ট্যারিফ পাওয়ার ফ্লো ডায়াগ্রাম'
      },
      caption: {
        en: 'Comprehensive industrial single-line diagram illustrating utility grid connection, two-part billing meters, transformer loading, and APFC bank payback economics.',
        hi: 'उपयोगिता ग्रिड कनेक्शन, दो-भाग बिलिंग मीटर, ट्रांसफार्मर लोडिंग, और APFC बैंक बचत को दर्शाने वाला औद्योगिक सिंगल-लाइन आरेख।',
        bn: 'গ্রিড সংযোগ, টু-পার্ট বিলিং মিটার, ট্রান্সফরমার লোডিং এবং APFC ব্যাংক সাশ্রয় অর্থনীতি চিত্রিতকারী শিল্প সিঙ্গেল-লাইন ডায়াগ্রাম।'
      },
      svgType: 'circuit-ch13-industrial-pf-case-study'
    }
  ]
};
