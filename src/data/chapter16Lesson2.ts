import { Lesson } from '../types';

export const LESSON_SINGLE_LINE_POWER_SYSTEM: Lesson = {
  id: 'lsn-ch16-single-line-diagram-pu-impedance',
  topicId: 'tp-ch16-single-line-diagram-pu-impedance',
  chapterId: 'ch-advanced-power-system-analysis',
  order: 2,
  title: {
    en: 'Single-Line Diagram & Complete Per-Unit Reactance Network',
    hi: 'सिंगल-लाइन आरेख एवं संपूर्ण प्रति-इकाई प्रतिघात नेटवर्क',
    bn: 'সিঙ্গল-লাইন ডায়াগ্রাম ও সম্পূর্ণ পার-ইউনিট রিঅ্যাক্ট্যান্স নেটওয়ার্ক'
  },
  description: {
    en: 'Synthesis of complex three-phase power grids into single-line diagrams (SLD) and per-unit impedance and reactance diagrams: representation of generators, three-winding transformers, transmission lines, loads, and grounding connections.',
    hi: 'जटिल थ्री-फेज पावर ग्रिड का सिंगल-लाइन आरेख (SLD) और प्रति-इकाई प्रतिबाधा एवं प्रतिघात आरेखों में रूपांतरण: जनरेटर, थ्री-वाइंडिंग ट्रांसफार्मर, पारेषण लाइनों, भारों और अर्थिंग संपर्कों का निरूपण।',
    bn: 'জটিল থ্রি-ফেজ পাওয়ার গ্রিডকে সিঙ্গল-লাইন ডায়াগ্রাম (SLD) এবং পার-ইউনিট ইম্পিডেন্স ও রিঅ্যাক্ট্যান্স ডায়াগ্রামে রূপান্তর: জেনারেটর, থ্রি-ওয়াইন্ডিং ট্রান্সফরমার, সঞ্চালন লাইন, লোড এবং গ্রাউন্ডিং সংযোগের বিশদ উপস্থাপনা।'
  },
  estimatedMinutes: 40,
  easyExplanation: {
    en: 'A modern power system contains thousands of individual conductors, switches, transformers, and generators. Drawing all three physical phases (A, B, and C) alongside neutral and ground wires on schematic plans would create an unreadable maze of lines. Because balanced three-phase systems operate with symmetrical voltages and currents having identical magnitudes shifted by 120 degrees, electrical engineers condense the entire three-phase system into a concise, standardized blueprint called a Single-Line Diagram (SLD). From the SLD, we remove ideal transformer turns ratios by switching to the per-unit system and build the Per-Unit Reactance Diagram, creating a single continuous circuit that allows fast calculation of bus voltages, load flows, and fault currents.',
    hi: 'आधुनिक विद्युत प्रणाली में हजारों तार, स्विच, ट्रांसफार्मर और जनरेटर होते हैं। तीनों फेजों (A, B, C) को अलग-अलग दिखाना बहुत जटिल और भ्रमित करने वाला होगा। चूंकि संतुलित थ्री-फेज सिस्टम में तीनों फेजों की धारा और वोल्टेज एक समान परिमाण और 120 डिग्री के अंतर पर होते हैं, इसलिए इंजीनियर पूरे सिस्टम को एक मानकीकृत एकल रेखा में दर्शाते हैं जिसे सिंगल-लाइन आरेख (SLD) कहा जाता है। इसके बाद प्रति-इकाई प्रणाली लागू करके एक सतत प्रतिघात नेटवर्क बनाया जाता है।',
    bn: 'একটি আধুনিক পাওয়ার গ্রিডে হাজার হাজার পরিবাহী, সুইচ, ট্রান্সফরমার এবং জেনারেটর থাকে। তিনটি ফেজের (A, B, C) প্রতিটি তার আলাদা করে আঁকলে ডায়াগ্রামটি অসম্ভব জটিল হয়ে পড়বে। ভারসাম্যপূর্ণ থ্রি-ফেজ সিস্টেমে প্রতিটি ফেজের মান সমান এবং ১২০ ডিগ্রি ব্যবধানে বিন্যস্ত থাকায় প্রকৌশলীরা পুরো সিস্টেমকে একটি একক রেখাচিত্র বা সিঙ্গল-লাইন ডায়াগ্রামে (SLD) প্রকাশ করেন। এরপর পার-ইউনিট মান ব্যবহার করে সম্পূর্ণ গ্রিডকে একটি একক রিঅ্যাক্ট্যান্স সার্কিটে রূপান্তর করা হয়।'
  },
  detailedExplanation: {
    en: 'The Single-Line Diagram (SLD) serves as the topological foundation of power system engineering. Standardized graphical symbols (IEEE 315 / IEC 60617) represent synchronous machines (circles), delta-wye transformers (interlocking circles with winding vectors), circuit breakers (squares), disconnect switches, and busbars (thick solid horizontal or vertical lines).\n\nStep-by-Step Conversion from SLD to Reactance Diagram:\n1. Establish System-Wide Base MVA (S_base): Select a round number, such as 100 MVA, common to all zones.\n2. Partition Grid into Voltage Zones: Every two-winding transformer splits the system into two distinct zones; a three-winding transformer establishes three zones. The voltage base in each zone is tied to the transformer rated voltage ratio.\n3. Model Apparatus on the System Base:\n   • Synchronous Generators: Modeled as an ideal internal AC EMF (E_g) behind an equivalent subtransient or transient series reactance (Xd" or Xd\'). Armature resistance is typically neglected in short-circuit studies because X/R > 20.\n   • Transformers: Modeled simply as a series leakage reactance (X_t). Magnetizing branch admittance (shunt core loss and magnetizing susceptance) is neglected because the shunt impedance is over 100 to 500 times the series impedance.\n   • Transmission Corridors: Modeled as a series impedance (R + jX) and, for medium/long lines, shunt capacitive charging susceptance (jB/2) at each bus.\n   • Static Loads: Modeled as constant power (P + jQ), constant current, or equivalent shunt per-unit admittance Y_L = (P - jQ) / |V|².\n4. Reference Bus (Neutral Bus): The zero-potential neutral of all star-connected generator EMF sources, transformer grounded neutrals, and capacitive charging paths are tied to a common reference ground line in the reactance diagram.',
    hi: 'सिंगल-लाइन आरेख (SLD) पावर सिस्टम इंजीनियरिंग का आधार है। इसमें जनरेटर, ट्रांसफार्मर, सर्किट ब्रेकर और बसबार को मानक प्रतीकों द्वारा दर्शाया जाता है।\n\nSLD से प्रतिघात आरेख बनाने के चरण:\n1. एक सामान्य सिस्टम MVA बेस (जैसे 100 MVA) चुनें।\n2. ट्रांसफार्मर अनुपात के आधार पर ग्रिड को वोल्टेज ज़ोन में विभाजित करें।\n3. सभी उपकरणों (जनरेटर, ट्रांसफार्मर, लाइनों) के प्रतिघात को आधार परिवर्तन सूत्र द्वारा नए बेस पर बदलें।\n4. जनरेटर को उसके आंतरिक EMF और सीरीज प्रतिघात के रूप में दिखाएं।\n5. ट्रांसफार्मर की मैग्नेटाइजिंग शाखा और लाइनों के प्रतिरोध को शॉर्ट-सर्किट अध्ययन में नगण्य मानकर केवल सीरीज प्रतिघात बनाएं।',
    bn: 'সিঙ্গল-লাইন ডায়াগ্রাম (SLD) পাওয়ার সিস্টেমের মূল স্থাপত্য ভিত্তি। এতে জেনারেটর, ট্রান্সফরমার, সার্কিট ব্রেকার ও বাসবার মানসম্মত প্রতীকে প্রকাশ পায়।\n\nSLD থেকে রিঅ্যাক্ট্যান্স ডায়াগ্রাম তৈরির ধাপসমূহ:\n১. একটি সাধারণ সিস্টেম বেস MVA (যেমন ১০০ MVA) নির্বাচন করুন।\n২. ট্রান্সফরমারের মাধ্যমে গ্রিডকে স্বতন্ত্র ভোল্টেজ জোনে ভাগ করুন।\n৩. প্রতিটি জেনারেটর, ট্রান্সফরমার ও লাইনের রিঅ্যাক্ট্যান্সকে সাধারণ বেসে রূপান্তর করুন।\n৪. জেনারেটরকে একটি আদর্শ ভোল্টেজ সোর্স ও সিরিজ রিঅ্যাক্ট্যান্স হিসেবে এবং ট্রান্সফরমারকে সিরিজ লিকেজ রিঅ্যাক্ট্যান্স হিসেবে আঁকুন।\n৫. সকল নিরপেক্ষ গ্রাউন্ড পয়েন্টকে একটি সাধারণ রেফারেন্স লাইনে যুক্ত করুন।'
  },
  formulas: [
    {
      id: 'f-ch16-zone-voltage',
      symbol: 'V_{base,B}',
      expression: 'V_{base,B} = V_{base,A} \\cdot \\left(\\frac{V_{rated,B}}{V_{rated,A}}\\right)',
      title: {
        en: 'Transformer Boundary Voltage Zone Propagation',
        hi: 'ट्रांसफार्मर सीमा वोल्टेज ज़ोन प्रसार',
        bn: 'ট্রান্সফরমার সীমানা ভোল্টেজ জোন বিস্তার'
      },
      description: {
        en: 'Calculates the base voltage of an adjoining network zone separated by a two-winding power transformer.',
        hi: 'दो-वाइंडिंग पावर ट्रांसफार्मर द्वारा अलग किए गए संलग्न नेटवर्क ज़ोन के बेस वोल्टेज की गणना करता है।',
        bn: 'ট্রান্সফরমার দ্বারা বিভক্ত সংলগ্ন নেটওয়ার্ক জোনের বেস ভোল্টেজ নির্ধারণ করে।'
      },
      variables: [
        { symbol: 'V_{base,B}', name: { en: 'Base voltage in secondary zone B (kV)', hi: 'द्वितीयक ज़ोन B का बेस वोल्टेज (kV)', bn: 'সেকেন্ডারি জোন B এর বেস ভোল্টেজ (kV)' } },
        { symbol: 'V_{base,A}', name: { en: 'Base voltage in primary zone A (kV)', hi: 'प्राथमिक ज़ोन A का बेस वोल्टेज (kV)', bn: 'প্রাইমারি জোন A এর বেস ভোল্টেজ (kV)' } },
        { symbol: 'V_{rated,B}', name: { en: 'Rated voltage of winding B (kV)', hi: 'वाइंडिंग B का रेटेड वोल्टेज (kV)', bn: 'ওয়াইন্ডিং B এর রেটেড ভোল্টেজ (kV)' } },
        { symbol: 'V_{rated,A}', name: { en: 'Rated voltage of winding A (kV)', hi: 'वाइंडिंग A का रेटेड वोल्टेज (kV)', bn: 'ওয়াইন্ডিং A এর রেটেড ভোল্টেজ (kV)' } }
      ]
    },
    {
      id: 'f-ch16-load-impedance-pu',
      symbol: 'Z_{load,pu}',
      expression: 'Z_{load,pu} = \\frac{|V_{pu}|^2}{S_{load,pu}^*} = \\frac{|V_{pu}|^2}{P_{pu} - jQ_{pu}}',
      title: {
        en: 'Equivalent Per-Unit Static Load Impedance',
        hi: 'समतुल्य प्रति-इकाई स्थैतिक भार प्रतिबाधा',
        bn: 'সমতুল্য পার-ইউনিট স্ট্যাটিক লোড ইম্পিডেন্স'
      },
      description: {
        en: 'Converts a specified bus active and reactive load demand (P + jQ) into an equivalent per-unit shunt impedance representation.',
        hi: 'निर्दिष्ट बस एक्टिव और रिएक्टिव लोड (P + jQ) को समतुल्य शंट प्रतिबाधा में परिवर्तित करता है।',
        bn: 'নির্দিষ্ট বাস পাওয়ার লোডকে (P + jQ) সমতুল্য পার-ইউনিট শান্ট ইম্পিডেন্সে রূপান্তর করে।'
      },
      variables: [
        { symbol: 'Z_{load,pu}', name: { en: 'Equivalent load per-unit impedance', hi: 'समतुल्य भार प्रति-इकाई प्रतिबाधा', bn: 'সমতুল্য লোড পার-ইউনিট ইম্পিডেন্স' } },
        { symbol: 'V_{pu}', name: { en: 'Bus operating voltage (p.u.)', hi: 'बस ऑपरेटिंग वोल्टेज (p.u.)', bn: 'বাস অপারেটিং ভোল্টেজ (p.u.)' } },
        { symbol: 'P_{pu}', name: { en: 'Active power demand (p.u.)', hi: 'सक्रिय शक्ति (p.u.)', bn: 'অ্যাক্টিভ পাওয়ার ডিমান্ড (p.u.)' } },
        { symbol: 'Q_{pu}', name: { en: 'Reactive power demand (p.u.)', hi: 'प्रतिक्रियाशील शक्ति (p.u.)', bn: 'রিঅ্যাক্টিভ পাওয়ার ডিমান্ড (p.u.)' } }
      ]
    },
    {
      id: 'f-ch16-three-winding-star',
      symbol: 'Z_1',
      expression: 'Z_1 = \\frac{1}{2} (Z_{12} + Z_{13} - Z_{23})',
      title: {
        en: 'Three-Winding Transformer Star-Equivalent Impedance',
        hi: 'थ्री-वाइंडिंग ट्रांसफार्मर स्टार-समतुल्य प्रतिबाधा',
        bn: 'থ্রি-ওয়াইন্ডিং ট্রান্সফরমার স্টার-সমতুল্য ইম্পিডেন্স'
      },
      description: {
        en: 'Calculates the primary leg impedance of a three-winding transformer equivalent circuit from two-winding short-circuit test impedances.',
        hi: 'शॉर्ट-सर्किट परीक्षणों से थ्री-वाइंडिंग ट्रांसफार्मर के स्टार-समतुल्य परिपथ की प्राथमिक शाखा प्रतिबाधा ज्ञात करता है।',
        bn: 'শর্ট-সার্কিট পরীক্ষা থেকে থ্রি-ওয়াইন্ডিং ট্রান্সফরমারের স্টার-সমতুল্য সার্কিটের প্রাইমারি শাখা ইম্পিডেন্স নির্ণয় করে।'
      },
      variables: [
        { symbol: 'Z_1', name: { en: 'Equivalent impedance of primary branch (p.u.)', hi: 'प्राथमिक शाखा की समतुल्य प्रतिबाधा (p.u.)', bn: 'প্রাইমারি শাখার সমতুল্য ইম্পিডেন্স (p.u.)' } },
        { symbol: 'Z_{12}', name: { en: 'Impedance measured between windings 1 and 2 (p.u.)', hi: 'वाइंडिंग 1 और 2 के बीच प्रतिबाधा (p.u.)', bn: 'ওয়াইন্ডিং ১ ও ২ এর মধ্যকার ইম্পিডেন্স (p.u.)' } },
        { symbol: 'Z_{13}', name: { en: 'Impedance measured between windings 1 and 3 (p.u.)', hi: 'वाइंडिंग 1 और 3 के बीच प्रतिबाधा (p.u.)', bn: 'ওয়াইন্ডিং ১ ও ৩ এর মধ্যকার ইম্পিডেন্স (p.u.)' } },
        { symbol: 'Z_{23}', name: { en: 'Impedance measured between windings 2 and 3 (p.u.)', hi: 'वाइंडिंग 2 और 3 के बीच प्रतिबाधा (p.u.)', bn: 'ওয়াইন্ডিং ২ ও ৩ এর মধ্যকার ইম্পিডেন্স (p.u.)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch16-l02-sld-conventions',
      title: {
        en: 'Single-Line Diagram Standards & Reactance Approximations',
        hi: 'सिंगल-लाइन आरेख मानक एवं प्रतिघात सन्निकटन',
        bn: 'সিঙ্গল-লাইন ডায়াগ্রাম স্ট্যান্ডার্ড ও রিঅ্যাক্ট্যান্স আসন্নীকরণ'
      },
      content: {
        en: 'In high-voltage transmission networks, series inductive reactances (X) of generators, transformers, and lines are typically 5 to 30 times larger than their series resistances (R). In short-circuit fault studies, this justifies the standard "Reactance Diagram" simplification:\n\n• Resistances are neglected (R ≈ 0), introducing less than a 2% to 5% conservative error in symmetrical fault current calculations.\n• All static shunt loads are omitted because their high impedance in parallel with short circuits draws negligible fault current.\n• Transformer magnetizing currents (normally 1% to 2% of rated current) are neglected.\n• Line charging capacitances are omitted during low-frequency fault calculations.\n\nThe resulting pure reactance network reduces power grid calculation to elementary series-parallel impedance arithmetic or admittance bus matrix (Y_bus) inversion.',
        hi: 'उच्च-वोल्टेज पारेषण नेटवर्कों में सीरीज प्रेरणिक प्रतिघात (X) प्रतिरोध (R) से 5 से 30 गुना बड़ा होता है। शॉर्ट-सर्किट अध्ययनों में प्रतिरोध को नगण्य मानकर शुद्ध "प्रतिघात आरेख" (Reactance Diagram) बनाया जाता है, जिससे गणनाएं बहुत सरल हो जाती हैं।',
        bn: 'উচ্চ ভোল্টেজ সঞ্চালন গ্রিডে ইন্ডাক্টিভ রিঅ্যাক্ট্যান্স (X) সাধারণত রোধ (R) এর চেয়ে ৫ থেকে ৩০ গুণ বেশি হয়। শর্ট-সার্কিট বিশ্লেষণের সময় রোধ অগ্রাহ্য করে শুধুমাত্র "রিঅ্যাক্ট্যান্স ডায়াগ্রাম" তৈরি করা হয়।'
      },
      schematicId: 'sch-ch16-single-line-pu-network'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch16-l02-01',
      problem: {
        en: 'A power system consists of a generator G (30 MVA, 11 kV, X" = 0.15 p.u.) connected via a transformer T1 (30 MVA, 11/132 kV, X = 0.10 p.u.) to a transmission line having an actual reactance of X_line = 80 Ω. At the receiving end, transformer T2 (25 MVA, 132/33 kV, X = 0.12 p.u.) steps down voltage to a motor M (20 MVA, 33 kV, X" = 0.20 p.u.). Choose a system base of 100 MVA and 11 kV in the generator circuit. Determine the per-unit reactance of all components on the chosen base.',
        hi: 'एक पावर सिस्टम में जनरेटर G (30 MVA, 11 kV, X" = 0.15 p.u.), ट्रांसफार्मर T1 (30 MVA, 11/132 kV, X = 0.10 p.u.) द्वारा 80 Ω प्रतिघात वाली लाइन से जुड़ा है। रिसीविंग छोर पर ट्रांसफार्मर T2 (25 MVA, 132/33 kV, X = 0.12 p.u.) मोटर M (20 MVA, 33 kV, X" = 0.20 p.u.) को बिजली देता है। 100 MVA और 11 kV बेस पर सभी उपकरणों का प्रति-इकाई प्रतिघात ज्ञात कीजिए।',
        bn: 'একটি সিস্টেমে জেনারেটর G (৩০ MVA, ১১ kV, X" = ০.১৫ p.u.) একটি ট্রান্সফরমার T1 (৩০ MVA, ১১/১৩২ kV, X = ০.১০ p.u.) এর মাধ্যমে ৮০ Ω লাইনের সাথে যুক্ত। অপর প্রান্তে T2 (২৫ MVA, ১৩২/৩৩ kV, X = ০.১২ p.u.) মোটর M (২০ MVA, ৩৩ kV, X" = ০.২০ p.u.) কে সরবরাহ করে। ১০০ MVA ও ১১ kV বেসে সকল উপাদানের পার-ইউনিট রিঅ্যাক্ট্যান্স নির্ণয় করুন।'
      },
      solution: {
        en: 'Step 1: Determine Base Voltages in Each Zone:\n• Zone 1 (Generator): V_base1 = 11 kV\n• Zone 2 (Transmission Line): V_base2 = 11 * (132 / 11) = 132 kV\n• Zone 3 (Motor): V_base3 = 132 * (33 / 132) = 33 kV\n\nStep 2: Generator G Reactance (S_base = 100 MVA, V_base1 = 11 kV):\nX_G,new = 0.15 * (11 / 11)² * (100 / 30) = 0.15 * 3.333 = 0.500 p.u.\n\nStep 3: Transformer T1 Reactance:\nX_T1,new = 0.10 * (11 / 11)² * (100 / 30) = 0.10 * 3.333 = 0.333 p.u.\n\nStep 4: Transmission Line Reactance in Zone 2:\nZ_base2 = (132)² / 100 = 17,424 / 100 = 174.24 Ω\nX_line,pu = 80 Ω / 174.24 Ω = 0.459 p.u.\n\nStep 5: Transformer T2 Reactance:\nX_T2,new = 0.12 * (132 / 132)² * (100 / 25) = 0.12 * 4.0 = 0.480 p.u.\n\nStep 6: Motor M Reactance:\nX_M,new = 0.20 * (33 / 33)² * (100 / 20) = 0.20 * 5.0 = 1.000 p.u.',
        hi: 'चरण 1: प्रत्येक ज़ोन का बेस वोल्टेज:\n• ज़ोन 1 (जनरेटर): 11 kV\n• ज़ोन 2 (लाइन): 132 kV\n• ज़ोन 3 (मोटर): 33 kV\n\nचरण 2: जनरेटर प्रतिघात:\nX_G = 0.15 * (100 / 30) = 0.500 p.u.\n\nचरण 3: ट्रांसफार्मर T1:\nX_T1 = 0.10 * (100 / 30) = 0.333 p.u.\n\nचरण 4: पारेषण लाइन:\nZ_base2 = 132² / 100 = 174.24 Ω; X_line = 80 / 174.24 = 0.459 p.u.\n\nचरण 5: ट्रांसफार्मर T2:\nX_T2 = 0.12 * (100 / 25) = 0.480 p.u.\n\nचरण 6: मोटर M:\nX_M = 0.20 * (100 / 20) = 1.000 p.u.',
        bn: 'ধাপ ১: প্রতিটি জোনের বেস ভোল্টেজ:\n• জোন ১: ১১ kV, জোন ২: ১৩২ kV, জোন ৩: ৩৩ kV\nধাপ ২: জেনারেটর: X_G = ০.১৫ * (১০০/৩০) = ০.৫০০ p.u.\nধাপ ৩: ট্রান্সফরমার T1: X_T1 = ০.১০ * (১০০/৩০) = ০.৩৩৩ p.u.\nধাপ ৪: সঞ্চালন লাইন: Z_base = ১৭৪.২৪ Ω, X_line = ৮০/১৭৪.২৪ = ০.৪৫৯ p.u.\nধাপ ৫: ট্রান্সফরমার T2: X_T2 = ০.১২ * (১০০/২৫) = ০.৪৮০ p.u.\nধাপ ৬: মোটর M: X_M = ০.২০ * (১০০/২০) = ১.০০০ p.u.'
      },
      givenValues: { 'G': '30 MVA, 11 kV, 0.15 pu', 'T1': '30 MVA, 11/132 kV, 0.10 pu', 'Line': '80 Ω', 'T2': '25 MVA, 132/33 kV, 0.12 pu', 'M': '20 MVA, 33 kV, 0.20 pu' },
      finalAnswer: {
        en: 'X_G = 0.500 p.u., X_T1 = 0.333 p.u., X_line = 0.459 p.u., X_T2 = 0.480 p.u., X_M = 1.000 p.u.',
        hi: 'X_G = 0.500 p.u., X_T1 = 0.333 p.u., X_line = 0.459 p.u., X_T2 = 0.480 p.u., X_M = 1.000 p.u.',
        bn: 'X_G = ০.৫০০ p.u., X_T1 = ০.৩৩৩ p.u., X_line = ০.৪৫৯ p.u., X_T2 = ০.৪৮০ p.u., X_M = ১.০০০ p.u.'
      }
    },
    {
      id: 'ex-ch16-l02-02',
      problem: {
        en: 'A three-winding transformer has rated impedances on a 100 MVA base: Z12 = j0.08 p.u., Z13 = j0.12 p.u., and Z23 = j0.16 p.u. Calculate the impedances of the star-equivalent branches Z1, Z2, and Z3.',
        hi: 'एक थ्री-वाइंडिंग ट्रांसफार्मर की 100 MVA आधार पर रेटेड प्रतिबाधाएं हैं: Z12 = j0.08 p.u., Z13 = j0.12 p.u., और Z23 = j0.16 p.u.। स्टार-समतुल्य शाखाओं Z1, Z2 और Z3 की प्रतिबाधाएं ज्ञात कीजिए।',
        bn: 'একটি থ্রি-ওয়াইন্ডিং ট্রান্সফরমারের ১০০ MVA বেসে প্রতিবাধা Z12 = j0.08 p.u., Z13 = j0.12 p.u., এবং Z23 = j0.16 p.u.। স্টার-সমতুল্য শাখা Z1, Z2 এবং Z3 এর মান নির্ণয় করুন।'
      },
      solution: {
        en: 'Apply the star-equivalent equations for a three-winding transformer:\n\nStep 1: Calculate Primary Branch Z1:\nZ1 = 0.5 * (Z12 + Z13 - Z23) = 0.5 * (j0.08 + j0.12 - j0.16) = 0.5 * (j0.04) = +j0.02 p.u.\n\nStep 2: Calculate Secondary Branch Z2:\nZ2 = 0.5 * (Z12 + Z23 - Z13) = 0.5 * (j0.08 + j0.16 - j0.12) = 0.5 * (j0.12) = +j0.06 p.u.\n\nStep 3: Calculate Tertiary Branch Z3:\nZ3 = 0.5 * (Z13 + Z23 - Z12) = 0.5 * (j0.12 + j0.16 - j0.08) = 0.5 * (j0.20) = +j0.10 p.u.',
        hi: 'स्टार समतुल्य समीकरण लागू करें:\nZ1 = 0.5 * (Z12 + Z13 - Z23) = 0.5 * (j0.08 + j0.12 - j0.16) = +j0.02 p.u.\nZ2 = 0.5 * (Z12 + Z23 - Z13) = 0.5 * (j0.08 + j0.16 - j0.12) = +j0.06 p.u.\nZ3 = 0.5 * (Z13 + Z23 - Z12) = 0.5 * (j0.12 + j0.16 - j0.08) = +j0.10 p.u.',
        bn: 'স্টার সমতুল্য সূত্র প্রয়োগ করে:\nZ1 = ০.৫ * (j0.08 + j0.12 - j0.16) = +j0.02 p.u.\nZ2 = ০.৫ * (j0.08 + j0.16 - j0.12) = +j0.06 p.u.\nZ3 = ০.৫ * (j0.12 + j0.16 - j0.08) = +j0.10 p.u.'
      },
      givenValues: { 'Z12': 'j0.08 pu', 'Z13': 'j0.12 pu', 'Z23': 'j0.16 pu' },
      finalAnswer: {
        en: 'Z1 = +j0.02 p.u., Z2 = +j0.06 p.u., Z3 = +j0.10 p.u.',
        hi: 'Z1 = +j0.02 p.u., Z2 = +j0.06 p.u., Z3 = +j0.10 p.u.',
        bn: 'Z1 = +j0.02 p.u., Z2 = +j0.06 p.u., Z3 = +j0.10 p.u.'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Substation automation systems (SAS) and SCADA human-machine interfaces showing real-time breaker statuses on dynamic SLDs.',
      'Constructing the nodal bus admittance matrix (Y_bus) for power flow and short-circuit solver engines.',
      'Sizing and selection of substation circuit breaker interrupting capacities based on Thévenin equivalent reactance seen from the bus.'
    ],
    hi: [
      'सबस्टेशन ऑटोमेशन और SCADA स्क्रीन पर डायनेमिक SLD द्वारा ब्रेकर की वास्तविक स्थिति का प्रदर्शन।',
      'पावर फ्लो और शॉर्ट-सर्किट गणना के लिए नोडल एडमिटेंस मैट्रिक्स (Y_bus) का निर्माण।',
      'बस से देखे गए थेवेनिन समतुल्य प्रतिघात के आधार पर सर्किट ब्रेकर रेटिंग का चयन।'
    ],
    bn: [
      'সাবস্টেশন অটোমেশন ও SCADA সিস্টেমে রিয়েল-টাইম ব্রেকার স্ট্যাটাস প্রদর্শনে এসএলডি (SLD)।',
      'লোড ফ্লো ও ফল্ট বিশ্লেষণের জন্য নোডাল বাস অ্যাডমিট্যান্স ম্যাট্রিক্স (Y_bus) গঠন।',
      'সাবস্টেশন বাস থেকে থ্যাভেনিন রিঅ্যাক্ট্যান্স হিসাব করে সার্কিট ব্রেকারের ব্রেকিং ক্যাপাসিটি নির্ধারণ।'
    ]
  },
  importantPoints: {
    en: [
      'The single-line diagram assumes fully balanced three-phase operation; single-phase representation is valid only under balanced conditions.',
      'Every transformer creates a boundary between two distinct base-voltage zones.',
      'In a per-unit reactance diagram, all generator neutral points connect to a single common zero-potential reference bus.',
      'Transformer magnetizing branches are typically open-circuited in fault study reactance networks due to their extremely high impedance.'
    ],
    hi: [
      'सिंगल-लाइन आरेख पूर्णतः संतुलित 3-फेज संचालन मानकर बनाया जाता है।',
      'प्रत्येक ट्रांसफार्मर दो अलग-अलग बेस-वोल्टेज ज़ोन के बीच एक सीमा बनाता है।',
      'प्रतिघात आरेख में सभी जनरेटर के न्यूट्रल बिंदु एक सामान्य शून्य-विभव संदर्भ बस से जुड़ते हैं।',
      'फॉल्ट अध्ययन में ट्रांसफार्मर की मैग्नेटाइजिंग शाखा को उच्च प्रतिबाधा के कारण खुला परिपथ माना जाता है।'
    ],
    bn: [
      'সিঙ্গল-লাইন ডায়াগ্রাম সম্পূর্ণ ভারসাম্যপূর্ণ থ্রি-ফেজ অপারেশনের ক্ষেত্রে প্রযোজ্য।',
      'প্রতিটি ট্রান্সফরমার দুটি পৃথক ভোল্টেজ জোনের মধ্যে সীমানা তৈরি করে।',
      'রিঅ্যাক্ট্যান্স ডায়াগ্রামে সকল জেনারেটরের নিউট্রাল একটি কমন রেফারেন্স বাসে সংযুক্ত হয়।',
      'ফল্ট স্টাডিতে ট্রান্সফরমারের ম্যাগনেটাইজিং শাখাকে ওপেন সার্কিট হিসেবে ধরা হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Neglecting the transformer turns ratio when stepping the base voltage into the transmission corridor.',
      'Attempting to insert ideal transformer symbols with turns ratios into the final per-unit reactance diagram (in per-unit, transformers are just series impedances).',
      'Forgetting that star-equivalent branches of three-winding transformers can have a negative reactance value.'
    ],
    hi: [
      'पारेषण लाइन ज़ोन में बेस वोल्टेज की गणना करते समय ट्रांसफार्मर अनुपात की उपेक्षा करना।',
      'प्रति-इकाई आरेख में ट्रांसफार्मर के टर्न अनुपात को बनाए रखना (प्रति-इकाई में ट्रांसफार्मर केवल एक सीरीज प्रतिबाधा बन जाता है)।',
      'यह भूल जाना कि थ्री-वाइंडिंग ट्रांसफार्मर की स्टार शाखा का प्रतिघात कभी-कभी ऋणात्मक (negative) भी हो सकता है।'
    ],
    bn: [
      'সঞ্চালন লাইন জোনে বেস ভোল্টেজ গণনার সময় ট্রান্সফরমার রেশিও বিবেচনা না করা।',
      'পার-ইউনিট ডায়াগ্রামে ট্রান্সফরমার প্রতীক আঁকা (পার-ইউনিটে এটি কেবল একটি সিরিজ রিঅ্যাক্ট্যান্স)।',
      'থ্রি-ওয়াইন্ডিং ট্রান্সফরমারের সমতুল্য স্টার শাখায় ঋণাত্মক রিঅ্যাক্ট্যান্স মান আসতে পারে তা ভুলে যাওয়া।'
    ]
  },
  keyTakeaways: {
    en: [
      'The single-line diagram encapsulates complex 3-phase topology into an intuitive single-wire visual framework.',
      'The per-unit reactance diagram completely dissolves transformer turns ratios into continuous series reactances.',
      'A common neutral reference line ties all generator sources and shunt paths together.'
    ],
    hi: [
      'सिंगल-लाइन आरेख संपूर्ण 3-फेज ग्रिड को एक सुलभ एकल-तार रूपरेखा में बदल देता है।',
      'प्रति-इकाई प्रतिघात आरेख में ट्रांसफार्मर टर्न अनुपात समाप्त होकर साधारण सीरीज प्रतिघात बन जाते हैं।',
      'एक सामान्य न्यूट्रल संदर्भ रेखा सभी जनरेटर और शंट घटकों को आपस में जोड़ती है।'
    ],
    bn: [
      'সিঙ্গল-লাইন ডায়াগ্রাম জটিল থ্রি-ফেজ গ্রিডকে একটি সহজ একক রেখাচিত্রে উপস্থাপন করে।',
      'পার-ইউনিট রিঅ্যাক্ট্যান্স ডায়াগ্রামের মাধ্যমে ট্রান্সফরমার রেশিও উঠে গিয়ে সাধারণ সিরিজ রিঅ্যাক্ট্যান্সে পরিণত হয়।',
      'একটি সাধারণ রেফারেন্স নিউট্রাল লাইন সমস্ত জেনারেটর ও গ্রাউন্ড পাথকে সংযুক্ত করে।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch16-l02-01',
      question: {
        en: 'In a balanced single-line diagram, what does a solid horizontal or vertical bar represent?',
        hi: 'संतुलित सिंगल-लाइन आरेख में एक ठोस क्षैतिज या लंबवत रेखा क्या दर्शाती है?',
        bn: 'ভারসাম্যপূর্ণ সিঙ্গল-লাইন ডায়াগ্রামে একটি মোটা অনুভূমিক বা উল্লম্ব রেখা কী নির্দেশ করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'An electrical busbar (node)', hi: 'एक विद्युत बसबार (नोड)', bn: 'একটি বৈদ্যুতিক বাসবার (নোড)' } },
        { id: 'opt-2', text: { en: 'A lightning arrester', hi: 'एक तड़ित चालक (लाइटनिंग अरेस्टर)', bn: 'একটি লাইটনিং অ্যারেস্টার' } },
        { id: 'opt-3', text: { en: 'An underground shield wire', hi: 'एक भूमिगत शील्ड तार', bn: 'একটি আন্ডারগ্রাউন্ড শিল্ড তার' } },
        { id: 'opt-4', text: { en: 'A power factor correction capacitor', hi: 'एक पावर फैक्टर सुधार संधारित्र', bn: 'একটি পাওয়ার ফ্যাক্টর কারেকশন ক্যাপাসিটর' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'A thick line on a single-line diagram represents a substation busbar where multiple incoming and outgoing transmission circuits meet at a common electrical node.',
        hi: 'सिंगल-लाइन आरेख पर एक मोटी रेखा सबस्टेशन बसबार को दर्शाती है जहाँ कई सर्किट एक साथ मिलते हैं।',
        bn: 'সিঙ্গল-লাইন ডায়াগ্রামে মোটা রেখা দ্বারা একটি বাসবার বা নোডকে চিহ্নিত করা হয় যেখানে একাধিক সার্কিট মিলিত হয়।'
      }
    },
    {
      id: 'mcq-ch16-l02-02',
      question: {
        en: 'Why is the magnetizing branch of a transformer typically omitted in fault analysis reactance diagrams?',
        hi: 'फॉल्ट विश्लेषण प्रतिघात आरेखों में ट्रांसफार्मर की मैग्नेटाइजिंग शाखा को सामान्यतः क्यों छोड़ दिया जाता है?',
        bn: 'ফল্ট স্টাডি রিঅ্যাক্ট্যান্স ডায়াগ্রামে ট্রান্সফরমারের ম্যাগনেটাইজিং শাখাকে কেন বাদ দেওয়া হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Its shunt impedance is very large compared to the series leakage reactance, drawing negligible fault current', hi: 'इसकी शंट प्रतिबाधा सीरीज प्रतिघात की तुलना में बहुत अधिक होती है, जिससे नगण्य फॉल्ट धारा बहती है', bn: 'সিরিজ লিকেজের তুলনায় এর শান্ট ইম্পিডেন্স অত্যন্ত বেশি হওয়ায় নগণ্য ফল্ট কারেন্ট টানে' } },
        { id: 'opt-2', text: { en: 'Core saturation forces the magnetizing inductance to infinity', hi: 'कोर संतृप्ति मैग्नेटाइजिंग प्रेरकत्व को अनंत कर देती है', bn: 'কোর স্যাচুরেশন ম্যাগনেটাইজিং ইন্ডাক্ট্যান্সকে অসীম করে' } },
        { id: 'opt-3', text: { en: 'Transformers do not have core losses under short circuits', hi: 'शॉर्ट-सर्किट के दौरान ट्रांसफार्मर में कोर हानियां नहीं होती हैं', bn: 'শর্ট-সার্কিটের সময় ট্রান্সফরমারের কোর লস থাকে না' } },
        { id: 'opt-4', text: { en: 'The secondary winding voltage is zero under normal conditions', hi: 'सामान्य परिस्थितियों में द्वितीयक वाइंडिंग वोल्टेज शून्य होता है', bn: 'স্বাভাবিক অবস্থায় সেকেন্ডারি ভোল্টেজ শূন্য থাকে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'The magnetizing impedance of a modern power transformer is typically 100 to 500 p.u., which is completely negligible in parallel with the low series leakage reactance (0.08 to 0.15 p.u.) during short circuits.',
        hi: 'ट्रांसफार्मर की मैग्नेटाइजिंग प्रतिबाधा 100 से 500 p.u. तक बहुत अधिक होती है, इसलिए शॉर्ट-सर्किट के दौरान इसका प्रभाव नगण्य होता है।',
        bn: 'ম্যাগনেটাইজিং ইম্পিডেন্স ১০০ থেকে ৫০০ p.u. হওয়ায় স্বল্প সিরিজ লিকেজ রিঅ্যাক্ট্যান্সের সমান্তরালে এটি উপেক্ষণীয়।'
      }
    },
    {
      id: 'mcq-ch16-l02-03',
      question: {
        en: 'When converting a three-phase system into a per-unit reactance diagram, what serves as the common return path for all generator EMF sources?',
        hi: 'थ्री-फेज सिस्टम को प्रति-इकाई प्रतिघात आरेख में बदलते समय, सभी जनरेटर EMF स्रोतों के लिए सामान्य वापसी पथ क्या होता है?',
        bn: 'থ্রি-ফেজ সিস্টেমকে পার-ইউনিট রিঅ্যাক্ট্যান্স ডায়াগ্রামে রূপান্তরের সময় জেনারেটর EMF সোর্সের জন্য কমন রিটার্ন পাথ হিসেবে কী কাজ করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The zero-potential reference neutral bus', hi: 'शून्य-विभव संदर्भ न्यूट्रल बस', bn: 'শূন্য-বিভব রেফারেন্স নিউট্রাল বাস' } },
        { id: 'opt-2', text: { en: 'The highest-voltage transmission conductor', hi: 'उच्चतम वोल्टेज पारेषण चालक', bn: 'সর্বোচ্চ ভোল্টেজের সঞ্চালন পরিবাহী' } },
        { id: 'opt-3', text: { en: 'The generator exciter circuit', hi: 'जनरेटर उत्तेजक (एक्साइटर) परिपथ', bn: 'জেনারেটরের এক্সাইটার সার্কিট' } },
        { id: 'opt-4', text: { en: 'The step-up transformer delta winding', hi: 'स्टेप-अप ट्रांसफार्मर डेल्टा वाइंडिंग', bn: 'স্টেপ-আপ ট্রান্সফরমার ডেল্টা ওয়াইন্ডিং' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Under balanced conditions, the neutrals of all star-connected generator sources are at identical zero potential and are tied together to form the reference neutral bus.',
        hi: 'संतुलित परिस्थितियों में सभी स्टार-कनेक्टेड जनरेटर के न्यूट्रल शून्य विभव पर होते हैं और एक संदर्भ न्यूट्रल बस बनाते हैं।',
        bn: 'ভারসাম্যপূর্ণ অবস্থায় সকল স্টার-সংযুক্ত জেনারেটরের নিউট্রাল শূন্য বিভবে থাকে এবং রেফারেন্স নিউট্রাল বাস গঠন করে।'
      }
    },
    {
      id: 'mcq-ch16-l02-04',
      question: {
        en: 'In a three-winding transformer, what physical phenomenon can cause one of the star-equivalent branch reactances (Z1, Z2, or Z3) to become negative?',
        hi: 'थ्री-वाइंडिंग ट्रांसफार्मर में, कौन सी भौतिक घटना स्टार-समतुल्य शाखा प्रतिघातों (Z1, Z2, या Z3) में से किसी एक को ऋणात्मक बना सकती है?',
        bn: 'থ্রি-ওয়াইন্ডিং ট্রান্সফরমারের স্টার-সমতুল্য শাখার যেকোনো একটি রিঅ্যাক্ট্যান্স (Z1, Z2, বা Z3) কেন ঋণাত্মক হতে পারে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Strong mutual magnetic coupling and spatial sandwiching of the middle winding between the other two', hi: 'अन्य दो वाइंडिंग के बीच मध्य वाइंडिंग का सैंडविच होना और मजबूत पारस्परिक चुंबकीय युग्मन', bn: 'অন্য দুটি ওয়াইন্ডিংয়ের মাঝে মধ্যবর্তী ওয়াইন্ডিংটির গভীর ম্যাগনেটিক কাপলিং' } },
        { id: 'opt-2', text: { en: 'Capacitive breakdown between the tank and core', hi: 'टैंक और कोर के बीच संधारित्र ब्रेकडाउन', bn: 'ট্যাংক ও কোরের মধ্যকার ক্যাপাসিটিভ ব্রেকডাউন' } },
        { id: 'opt-3', text: { en: 'Excessive copper resistance in the tertiary winding', hi: 'तृतीयक वाइंडिंग में अत्यधिक तांबे का प्रतिरोध', bn: 'টারশিয়ারি ওয়াইন্ডিংয়ে অতিরিক্ত তামার রোধ' } },
        { id: 'opt-4', text: { en: 'Harmonic resonance at 150 Hz', hi: '150 Hz पर हार्मोनिक अनुनाद', bn: '১৫০ Hz এ হারমোনিক রেজোন্যান্স' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'The star-equivalent is a mathematical circuit model; when the middle winding shares leakage flux extensively with both outer windings, the subtraction in Z = 0.5*(Z_a + Z_b - Z_c) can yield a negative reactance value.',
        hi: 'स्टार समतुल्य एक गणितीय मॉडल है; जब मध्य वाइंडिंग दोनों बाहरी वाइंडिंग्स के साथ लीकेज फ्लक्स साझा करती है, तो Z = 0.5*(Za + Zb - Zc) सूत्र से मान ऋणात्मक आ सकता है।',
        bn: 'স্টার সমতুল্য একটি গাণিতিক মডেল; মাঝের ওয়াইন্ডিংটি যখন উভয় ওয়াইন্ডিংয়ের সাথে লিকেজ ফ্লাক্স শেয়ার করে, তখন গাণিতিকভাবে মানটি ঋণাত্মক আসতে পারে।'
      }
    },
    {
      id: 'mcq-ch16-l02-05',
      question: {
        en: 'A generator rated 50 MVA, 13.8 kV has X" = 0.20 p.u. If the base in its zone is chosen as 100 MVA, 13.8 kV, what is its reactance on the system base?',
        hi: '50 MVA, 13.8 kV पर 0.20 p.u. प्रतिघात वाला जनरेटर है। यदि इसके ज़ोन में बेस 100 MVA, 13.8 kV चुना जाता है, तो सिस्टम बेस पर इसका प्रतिघात क्या होगा?',
        bn: '৫০ MVA, ১৩.৮ kV জেনারেটরের X" = ০.২০ p.u.। জোনে ১০০ MVA, ১৩.৮ kV বেস নির্বাচন করা হলে সিস্টেমে এর রিঅ্যাক্ট্যান্স কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '0.40 p.u.', hi: '0.40 p.u.', bn: '০.৪০ p.u.' } },
        { id: 'opt-2', text: { en: '0.10 p.u.', hi: '0.10 p.u.', bn: '০.১০ p.u.' } },
        { id: 'opt-3', text: { en: '0.20 p.u.', hi: '0.20 p.u.', bn: '০.২০ p.u.' } },
        { id: 'opt-4', text: { en: '0.80 p.u.', hi: '0.80 p.u.', bn: '০.৮০ p.u.' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'X_new = X_old * (S_new / S_old) = 0.20 * (100 / 50) = 0.40 p.u.',
        hi: 'X_new = 0.20 * (100 / 50) = 0.40 p.u.।',
        bn: 'X_new = ০.২০ * (১০০ / ৫০) = ০.৪০ p.u.।'
      }
    },
    {
      id: 'mcq-ch16-l02-06',
      question: {
        en: 'How is a synchronous generator represented in a subtransient short-circuit reactance diagram?',
        hi: 'सबट्रांजिएंट शॉर्ट-सर्किट प्रतिघात आरेख में तुल्यकालिक जनरेटर को कैसे दर्शाया जाता है?',
        bn: 'সাবট্রানজিয়েন্ট শর্ট-সার্কিট রিঅ্যাক্ট্যান্স ডায়াগ্রামে একটি সিনক্রোনাস জেনারেটরকে কীভাবে উপস্থাপন করা হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'An ideal internal voltage source Eg in series with subtransient reactance Xd"', hi: 'सबट्रांजिएंट प्रतिघात Xd" के साथ श्रेणीक्रम में एक आदर्श आंतरिक वोल्टेज स्रोत Eg', bn: 'সাবট্রানজিয়েন্ট রিঅ্যাক্ট্যান্স Xd" এর সাথে সিরিজে একটি আদর্শ ভোল্টেজ সোর্স Eg' } },
        { id: 'opt-2', text: { en: 'A pure current source in parallel with rotor resistance', hi: 'रोटर प्रतिरोध के समानांतर में एक शुद्ध धारा स्रोत', bn: 'রোটর রোধের সমান্তরালে একটি কারেন্ট সোর্স' } },
        { id: 'opt-3', text: { en: 'An open circuit with infinite impedance', hi: 'अनंत प्रतिबाधा वाला एक खुला परिपथ', bn: 'অসীম ইম্পিডেন্সযুক্ত ওপেন সার্কিট' } },
        { id: 'opt-4', text: { en: 'A pure resistance equal to the armature copper loss', hi: 'आर्मेचर कॉपर हानि के बराबर एक शुद्ध प्रतिरोध', bn: 'আর্মেচার কপার লসের সমান একটি রোধ' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'In subtransient fault calculations, a synchronous generator is modeled as an internal pre-fault EMF Eg behind its subtransient reactance Xd".',
        hi: 'शॉर्ट-सर्किट गणना में जनरेटर को आंतरिक EMF (Eg) और सबट्रांजिएंट प्रतिघात (Xd") के सीरीज संयोजन के रूप में मॉडल किया जाता है।',
        bn: 'সাবট্রানজিয়েন্ট গণনায় জেনারেটরকে অভ্যন্তরীণ EMF (Eg) এবং সাবট্রানজিয়েন্ট রিঅ্যাক্ট্যান্স (Xd") এর সিরিজ সংযোগ হিসেবে ধরা হয়।'
      }
    },
    {
      id: 'mcq-ch16-l02-07',
      question: {
        en: 'What happens to the ideal transformer turns ratio when moving from a physical schematic to a per-unit impedance network?',
        hi: 'भौतिक योजनाबद्ध आरेख से प्रति-इकाई प्रतिबाधा नेटवर्क पर जाते समय आदर्श ट्रांसफार्मर के टर्न अनुपात का क्या होता है?',
        bn: 'প্রকৃত সার্কিট থেকে পার-ইউনিট ইম্পিডেন্স নেটওয়ার্কে রূপান্তরের সময় আদর্শ ট্রান্সফরমার টার্ন রেশিওর কী ঘটে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'It is completely eliminated; the transformer becomes a simple series per-unit leakage impedance', hi: 'यह पूरी तरह समाप्त हो जाता है; ट्रांसफार्मर एक साधारण सीरीज प्रतिघात बन जाता है', bn: 'এটি সম্পূর্ণ বিলুপ্ত হয়; ট্রান্সফরমার কেবল একটি সিরিজ পার-ইউনিট লিকেজ ইম্পিডেন্সে পরিণত হয়' } },
        { id: 'opt-2', text: { en: 'It must be multiplied by sqrt(3)', hi: 'इसे sqrt(3) से गुणा करना पड़ता है', bn: 'এটিকে sqrt(3) দিয়ে গুণ করতে হয়' } },
        { id: 'opt-3', text: { en: 'It is replaced with an ideal current transformer', hi: 'इसे एक आदर्श करंट ट्रांसफार्मर से बदल दिया जाता है', bn: 'এটিকে একটি কারেন্ট ট্রান্সফরমার দিয়ে প্রতিস্থাপন করা হয়' } },
        { id: 'opt-4', text: { en: 'It shifts the frequency from 50 Hz to 60 Hz', hi: 'यह आवृत्ति को 50 Hz से 60 Hz में बदल देता है', bn: 'এটি ফ্রিকোয়েন্সি পরিবর্তন করে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'By choosing base voltages proportional to the transformer turns ratio across zones, the ideal transformer ratio is normalized to 1:1, leaving only its series per-unit impedance.',
        hi: 'ज़ोन के बेस वोल्टेज को ट्रांसफार्मर अनुपात के अनुसार चुनने पर आदर्श ट्रांसफार्मर 1:1 हो जाता है और केवल सीरीज प्रतिबाधा शेष बचती है।',
        bn: 'বেস ভোল্টেজ ট্রান্সফরমার অনুপাত অনুযায়ী নির্বাচন করায় টার্ন রেশিও ১:১ হয়ে যায় এবং কেবল সিরিজ ইম্পিডেন্স অবশিষ্ট থাকে।'
      }
    },
    {
      id: 'mcq-ch16-l02-08',
      question: {
        en: 'A 400 kV transmission line has a base impedance of 1,600 Ω. If a static load draws 80 MW and 60 MVAR at 1.0 p.u. voltage on a 100 MVA base, what is the magnitude of the per-unit load impedance?',
        hi: 'एक 400 kV लाइन की बेस प्रतिबाधा 1,600 Ω है। यदि 100 MVA बेस पर 1.0 p.u. वोल्टेज पर एक लोड 80 MW और 60 MVAR लेता है, तो प्रति-इकाई लोड प्रतिबाधा का परिमाण क्या है?',
        bn: 'একটি ৪০০ kV লাইনের বেস ইম্পিডেন্স ১,৬০০ Ω। ১০০ MVA বেসে ১.০ p.u. ভোল্টেজে লোড ৮০ MW এবং ৬০ MVAR টানলে পার-ইউনিট লোড ইম্পিডেন্সের মান কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '1.00 p.u.', hi: '1.00 p.u.', bn: '১.০০ p.u.' } },
        { id: 'opt-2', text: { en: '0.80 p.u.', hi: '0.80 p.u.', bn: '০.৮০ p.u.' } },
        { id: 'opt-3', text: { en: '1.25 p.u.', hi: '1.25 p.u.', bn: '১.২৫ p.u.' } },
        { id: 'opt-4', text: { en: '0.60 p.u.', hi: '0.60 p.u.', bn: '০.৬০ p.u.' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'P_pu = 80/100 = 0.8, Q_pu = 60/100 = 0.6. S_load,pu = sqrt(0.8² + 0.6²) = 1.0 p.u. Then |Z_load,pu| = |V_pu|² / |S_load,pu| = (1.0)² / 1.0 = 1.00 p.u.',
        hi: 'S_pu = sqrt(0.8² + 0.6²) = 1.0 p.u.। प्रतिबाधा |Z_pu| = |V|² / |S| = 1.0 / 1.0 = 1.00 p.u.।',
        bn: 'S_pu = sqrt(০.৮² + ০.৬²) = ১.০ p.u.। ইম্পিডেন্স |Z_pu| = |V|² / |S| = ১.০ / ১.০ = ১.০০ p.u.।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch16-l02-01',
      question: {
        en: 'In a 2-bus system, generator G1 (13.8 kV, 50 MVA, X = 0.20 p.u.) connects to Bus 1. A transformer T1 (50 MVA, 13.8/220 kV, X = 0.10 p.u.) connects Bus 1 to Bus 2. A 220 kV line with X = 48.4 Ω extends from Bus 2 to a fault. On a 100 MVA, 13.8 kV base at G1, find the total Thévenin reactance to the fault.',
        hi: 'एक 2-बस सिस्टम में, जनरेटर G1 (13.8 kV, 50 MVA, X = 0.20 p.u.) बस 1 से जुड़ा है। ट्रांसफार्मर T1 (50 MVA, 13.8/220 kV, X = 0.10 p.u.) बस 1 और 2 को जोड़ता है। बस 2 से X = 48.4 Ω वाली 220 kV लाइन एक फॉल्ट तक जाती है। 100 MVA बेस पर फॉल्ट तक कुल थेवेनिन प्रतिघात ज्ञात कीजिए।',
        bn: 'একটি ২-বাস সিস্টেমে জেনারেটর G1 (১৩.৮ kV, ৫০ MVA, X = ০.২০ p.u.) বাস ১ এ সংযুক্ত। ট্রান্সফরমার T1 (৫০ MVA, ১৩.৮/২২০ kV, X = ০.১০ p.u.) বাস ১ ও ২ কে যুক্ত করে। বাস ২ থেকে X = ৪৮.৪ Ω সঞ্চালন লাইন একটি ফল্ট পর্যন্ত বিস্তৃত। ১০০ MVA বেসে মোট থ্যাভেনিন রিঅ্যাক্ট্যান্স নির্ণয় করুন।'
      },
      hint: {
        en: 'Z_base in the 220 kV zone is 220² / 100 = 484 Ω. Line per-unit reactance is 48.4 / 484 = 0.10 p.u. Generator on 100 MVA base is 0.20 * 2 = 0.40 p.u. Transformer is 0.10 * 2 = 0.20 p.u. Total X_th = 0.40 + 0.20 + 0.10 = 0.70 p.u.',
        hi: 'लाइन का प्रतिघात = 48.4 / 484 = 0.10 p.u.। जनरेटर = 0.40 p.u., ट्रांसफार्मर = 0.20 p.u.। कुल X_th = 0.40 + 0.20 + 0.10 = 0.70 p.u.।',
        bn: 'লাইনের পার-ইউনিট রিঅ্যাক্ট্যান্স = ৪৮.৪ / ৪৮৪ = ০.১০ p.u.। মোট X_th = ০.৪০ + ০.২০ + ০.১০ = ০.৭০ p.u.।'
      }
    }
  ]
};
