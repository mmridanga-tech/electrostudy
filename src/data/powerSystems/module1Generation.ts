import { Chapter } from '../../types';

export const POWER_SYSTEMS_MODULE_1: Chapter = {
  id: 'ps-ch1-generation',
  subjectId: 'power-systems',
  order: 1,
  title: {
    en: 'Module 1: Generation of Electrical Energy & Economics',
    hi: 'मॉड्यूल 1: विद्युत ऊर्जा उत्पादन एवं अर्थशास्त्र',
    bn: 'মডিউল ১: বিদ্যুৎ শক্তি উৎপাদন ও অর্থনীতি'
  },
  topics: [
    {
      id: 'ps-tp1-generation-methods',
      chapterId: 'ps-ch1-generation',
      order: 1,
      level: 'Foundation',
      title: {
        en: '1. Conventional & Renewable Power Generation',
        hi: '1. पारंपरिक एवं नवीकरणीय विद्युत उत्पादन',
        bn: '১. সনাতন ও নবায়নযোগ্য বিদ্যুৎ উৎপাদন পদ্ধতি'
      },
      description: {
        en: 'Thermal (Rankine cycle), Hydroelectric (Pelton/Francis/Kaplan turbines), Nuclear (PWR/BWR), Solar PV, and Wind energy generation principles with layout schematics.',
        hi: 'थर्मल (रैंकिन चक्र), हाइड्रोइलेक्ट्रिक, परमाणु, सोलर पीवी एवं पवन ऊर्जा उत्पादन के मूलभूत सिद्धांत व लेआउट।',
        bn: 'থার্মাল (র‍্যাঙ্কিন সাইকেল), হাইড্রোইলেকট্রিক, নিউক্লিয়ার, সৌর ও বায়ু বিদ্যুৎ উৎপাদনের মূলনীতি ও লেআউট ডায়াগ্রাম।'
      },
      lesson: {
        id: 'lesson-ps-tp1',
        topicId: 'ps-tp1-generation-methods',
        title: {
          en: 'Conventional & Renewable Power Generation',
          hi: 'पारंपरिक एवं नवीकरणीय विद्युत उत्पादन',
          bn: 'সনাতন ও নবায়নযোগ্য বিদ্যুৎ উৎপাদন পদ্ধতি'
        },
        description: {
          en: 'Comprehensive breakdown of base-load and peak-load electrical power generation technologies.',
          hi: 'बेस-लोड एवं पीक-लोड विद्युत उत्पादन तकनीकों का संपूर्ण विश्लेषण।',
          bn: 'বেস-লোড ও পিক-লোড বিদ্যুৎ উৎপাদন প্রযুক্তির বিস্তারিত বিশ্লেষণ।'
        },
        detailedExplanation: {
          en: 'Electrical power generation is the process of converting primary energy sources (fossil fuels, water head, nuclear fission, solar radiation, wind kinetic energy) into three-phase alternating electrical energy using synchronous generators or power electronic converters.\n\n1. Thermal Power Plants (Rankine Cycle): Water is heated in a boiler to create superheated steam at high pressure (~170 bar, 540°C). The steam expands in multi-stage turbines (HP, IP, LP) driving a 2-pole alternator at 3000 RPM (50 Hz). Thermal efficiency is limited to 32–38% primarily due to latent heat loss in condensers.\n\n2. Hydroelectric Power Plants: Water from high-altitude reservoirs flows through penstocks to drive hydraulic turbines. Depending on the head (H) and discharge (Q):\n- Pelton Wheel (High head > 250 m, impulse type)\n- Francis Turbine (Medium head 60–300 m, mixed radial-axial reaction type)\n- Kaplan Turbine (Low head < 60 m, axial reaction type with adjustable runner blades)\n\n3. Nuclear Power Plants: Controlled nuclear fission of Uranium-235 (or Pu-239) produces enormous thermal energy. Neutrons are slowed by moderators (Heavy water D₂O, Graphite) and controlled by Boron/Cadmium control rods.\n\n4. Solar PV & Wind: Solar cells convert photons directly to DC via photovoltaic effect ($P = V_{mp} \\cdot I_{mp}$), inverted to grid-tied AC. Wind turbines convert aerodynamic lift into shaft torque, generating electrical power governed by Betz limit (maximum theoretical efficiency 59.3%).',
          hi: 'विद्युत ऊर्जा का उत्पादन प्राथमिक ऊर्जा स्रोतों को 3-फेज अल्टरनेटर द्वारा विद्युत ऊर्जा में बदलने की प्रक्रिया है।\n1. थर्मल पावर प्लांट: 170 bar और 540°C पर भाप टरबाइन को 3000 RPM पर घुमाती है (दक्षता 32-38%)।\n2. हाइड्रो पावर प्लांट: पानी के शीर्ष (Head) से टरबाइन चलाई जाती है। पेल्टन (उच्च हेड > 250m), फ्रांसिस (मध्यम हेड), कापलान (निम्न हेड < 60m)।\n3. परमाणु संयंत्र: U-235 के विखंडन से ऊर्जा प्राप्त होती है, जिसमें भारी पानी (D2O) मंदक और कैडमियम छड़ें नियंत्रक का कार्य करती हैं।\n4. सौर एवं पवन ऊर्जा: सौर सेल पीवी प्रभाव द्वारा और पवन चक्की गतिज ऊर्जा को विद्युत ऊर्जा में बदलती है।',
          bn: 'বিদ্যুৎ উৎপাদন হলো প্রাথমিক শক্তিকে সিনক্রোনাস অল্টারনেটর বা ইনভার্টারের মাধ্যমে ৩-ফেজ এসি বিদ্যুৎ শক্তিতে রূপান্তরের প্রক্রিয়া।\n১. থার্মাল পাওয়ার প্লান্ট: বয়লারে তৈরি উচ্চ চাপের বাষ্প স্টিম টার্বাইনের সাহায্যে অল্টারনেটরকে ৩০০০ RPM এ ঘোরায় (কর্মদক্ষতা ৩২-৩৮%)।\n২. হাইড্রোইলেকট্রিক প্লান্ট: পানির পটেনশিয়াল শক্তিকে পেল্টন (উচ্চ হেড > ২৫০ মি), ফ্রান্সিস (মাঝারি হেড), বা কাপলান (কম হেড < ৬০ মি) টার্বাইনে প্রবাহিত করে বিদ্যুৎ উৎপন্ন করা হয়।\n৩. নিউক্লিয়ার প্লান্ট: ইউরেনিয়াম-২৩৫ এর নিয়ন্ত্রিত ফিশন বিক্রিয়ার মাধ্যমে বাষ্প তৈরি করা হয়।\n৪. সোলার ও উইন্ড প্লান্ট: পিভি সেল এবং উইন্ড টার্বাইনের সাহায্যে গ্রিড-টাইড পরিবেশবান্ধব বিদ্যুৎ উৎপাদন করা হয়।'
        },
        keyTakeaways: {
          en: [
            'Generation voltage is typically 11 kV to 25 kV AC (50 Hz), stepped up to 132/220/400/765 kV for bulk transmission.',
            'Hydro plants have the highest efficiency (>85%) and fastest startup time (<5 minutes), ideal for peak load dispatch.',
            'Thermal plants serve as steady base-load stations due to high inertia and longer cold-startup duration (6 to 8 hours).',
            'Betz limit dictates maximum theoretical aerodynamic power extraction from wind at 59.3% (16/27).'
          ],
          hi: [
            'उत्पादन वोल्टेज आमतौर पर 11 kV से 25 kV AC होता है, जिसे ट्रांसमिशन हेतु 132/220/400/765 kV पर स्टेप-अप किया जाता है।',
            'हाइड्रो पावर प्लांट की दक्षता 85% से अधिक होती है और यह 5 मिनट में चालू हो सकता है, इसलिए यह पीक-लोड के लिए उत्तम है।',
            'थर्मल प्लांट स्थिर बेस-लोड स्टेशन के रूप में कार्य करते हैं।',
            'पवन ऊर्जा निष्कर्षण की अधिकतम सैद्धांतिक सीमा बेट्ज़ नियम (59.3%) द्वारा निर्धारित होती है।'
          ],
          bn: [
            'বিদ্যুৎ উৎপাদন ভোল্টেজ সাধারণতঃ ১১ kV থেকে ২৫ kV AC হয়, যা গ্রিডে সঞ্চালনের জন্য ১৩২/২২০/৪০০ kV তে স্টেপ-আপ করা হয়।',
            'হাইড্রো প্লান্টের কর্মদক্ষতা সর্বোচ্চ (>৮৫%) এবং ৫ মিনিটের মধ্যে চালু হতে পারে বলে পিক লোড সরবরাহে আদর্শ।',
            'থার্মাল প্লান্ট প্রধানত বেস-লোড সরবরাহকারী হিসেবে ব্যবহৃত হয়।',
            'উইন্ড এনার্জির সর্বোচ্চ তাত্ত্বিক রূপান্তর সীমা হলো বেটজ লিমিট (৫৯.৩%)।'
          ]
        },
        formulas: [
          {
            id: 'f-hydro-power',
            name: { en: 'Hydroelectric Power Generation', hi: 'जलविद्युत उत्पादन समीकरण', bn: 'হাইড্রোইলেকট্রিক পাওয়ার উৎপাদন সমীকরণ' },
            formula: 'P = \\rho \\cdot g \\cdot Q \\cdot H \\cdot \\eta_{\\text{overall}} \\text{ Watts} = 9.81 \\cdot Q \\cdot H \\cdot \\eta \\text{ kW}',
            description: {
              en: 'P = Power (kW), Q = Water discharge rate (m³/s), H = Net head (m), η = Overall plant efficiency.',
              hi: 'P = शक्ति (kW), Q = प्रवाह दर (m³/s), H = हेड (मीटर), η = कुल दक्षता।',
              bn: 'P = বিদ্যুৎ শক্তি (kW), Q = পানির প্রবাহ (মি³/সে), H = নেট হেড (মি), η = প্লান্টের সামগ্রিক দক্ষতা।'
            }
          },
          {
            id: 'f-wind-power',
            name: { en: 'Wind Turbine Power Equation', hi: 'पवन चक्की शक्ति समीकरण', bn: 'উইন্ড টার্বাইন পাওয়ার সমীকরণ' },
            formula: 'P_w = \\frac{1}{2} \\rho A v^3 C_p',
            description: {
              en: 'ρ = Air density (1.225 kg/m³), A = Swept area πR² (m²), v = Wind velocity (m/s), Cp = Power coefficient (Cp ≤ 0.593).',
              hi: 'ρ = वायु घनत्व, A = रोटर क्षेत्रफल, v = वायु वेग, Cp = शक्ति गुणांक (अधिकतम 0.593)।',
              bn: 'ρ = বাতাসের ঘনত্ব, A = ব্লেডের ক্ষেত্রফল, v = বাতাসের গতিবেগ, Cp = পাওয়ার কো-এফিশিয়েন্ট (সর্বোচ্চ ০.৫৯৩)।'
            }
          }
        ],
        solvedExamples: [
          {
            id: 'ex-hydro-1',
            problem: {
              en: 'A hydroelectric station is supplied from a reservoir with a catchment area of 150 km² and an annual rainfall of 120 cm. The head is 180 m and the plant efficiency is 80%. If 30% of the rainfall is lost in evaporation and seepage, calculate the continuous average power output in MW.',
              hi: 'एक हाइड्रो स्टेशन का जलग्रहण क्षेत्र 150 km² और वार्षिक वर्षा 120 cm है। हेड 180 m और दक्षता 80% है। यदि 30% वर्षा वाष्पीकरण में नष्ट हो जाती है, तो निरंतर औसत पावर (MW) ज्ञात कीजिए।',
              bn: 'একটি হাইড্রো পাওয়ার স্টেশনের ক্যাচমেন্ট এরিয়া ১৫০ km² এবং বার্ষিক বৃষ্টিপাত ১২০ সেমি। কার্যকর হেড ১৮০ মি এবং প্লান্টের দক্ষতা ৮০%। যদি ৩০% বৃষ্টি বাষ্পীভবনে নষ্ট হয়, তবে সার্বক্ষণিক গড় বিদ্যুৎ উৎপাদন MW এ নির্ণয় করুন।'
            },
            solution: {
              en: 'Step 1: Effective annual water volume V = Area × Rainfall × (1 - Loss)\nV = (150 × 10⁶ m²) × (1.20 m) × 0.70 = 126 × 10⁶ m³/year\nStep 2: Average discharge rate Q = V / (365 × 24 × 3600) = 126 × 10⁶ / 31.536 × 10⁶ = 3.995 m³/s\nStep 3: Power output P = 9.81 × Q × H × η = 9.81 × 3.995 × 180 × 0.80 = 5643.5 kW = 5.64 MW',
              hi: 'चरण 1: प्रभावी जल आयतन V = 126 × 10⁶ m³/वर्ष\nचरण 2: औसत प्रवाह दर Q = 3.995 m³/s\nचरण 3: P = 9.81 × 3.995 × 180 × 0.80 = 5.64 MW',
              bn: 'ধাপ ১: কার্যকর পানির আয়তন V = ১২৬ × ১০⁶ মি³/বছর\nধাপ ২: গড় প্রবাহ Q = ৩.৯৯৫ মি³/সে\nধাপ ৩: বিদ্যুৎ শক্তি P = ৯.৮১ × ৩.৯৯৫ × ১৮০ × ০.৮০ = ৫.৬৪ মেগাওয়াট (MW)'
            },
            givenValues: { 'Catchment Area': '150 km²', 'Rainfall': '120 cm', 'Net Head': '180 m', 'Efficiency': '80%', 'Losses': '30%' },
            finalAnswer: {
              en: 'Average Continuous Power = 5.64 MW',
              hi: 'निरंतर औसत पावर = 5.64 MW',
              bn: 'সার্বক্ষণিক গড় বিদ্যুৎ = ৫.৬৪ MW'
            }
          }
        ],
        mcqs: [
          {
            id: 'mcq-ps-gen-1',
            question: {
              en: 'For high head (> 250 meters) and low discharge hydroelectric installations, which turbine type is universally selected?',
              hi: 'उच्च हेड (> 250 मीटर) एवं कम जल प्रवाह वाले हाइड्रोइलेक्ट्रिक प्लांट के लिए कौन सी टरबाइन चुनी जाती है?',
              bn: 'উচ্চ হেড (> ২৫০ মিটার) এবং কম পানি প্রবাহের জন্য কোন ধরণের হাইড্রো টার্বাইন নির্বাচন করা হয়?'
            },
            options: [
              { id: 'opt-1', text: { en: 'Kaplan turbine', hi: 'कापलान टरबाइन', bn: 'কাপলান টার্বাইন' } },
              { id: 'opt-2', text: { en: 'Pelton impulse wheel', hi: 'पेल्टन व्हील (इम्पल्स टरबाइन)', bn: 'পেল্টন হুইল (ইম্পালস টার্বাইন)' } },
              { id: 'opt-3', text: { en: 'Francis turbine', hi: 'फ्रांसिस टरबाइन', bn: 'ফ্রান্সিস টার্বাইন' } },
              { id: 'opt-4', text: { en: 'Propeller turbine', hi: 'प्रोपेलर टरबाइन', bn: 'প্রপেলার টার্বাইন' } }
            ],
            correctOptionId: 'opt-2',
            explanation: {
              en: 'Pelton wheel is an impulse turbine specially engineered for converting high pressure head into high-velocity kinetic water jets through nozzles.',
              hi: 'पेल्टन व्हील एक इम्पल्स टरबाइन है जो उच्च हेड वाले जल दबाव को नोजल द्वारा उच्च वेग के जेट में बदलती है।',
              bn: 'পেল্টন হুইল হলো একটি ইম্পালস টার্বাইন যা নোজলের মাধ্যমে উচ্চ পানির হেডকে উচ্চগতির গতিশক্তিতে রূপান্তর করে।'
            }
          }
        ]
      }
    },
    {
      id: 'ps-tp2-load-curves-economics',
      chapterId: 'ps-ch1-generation',
      order: 2,
      level: 'Core',
      title: {
        en: '2. Load Curves, Load Factor & Economics of Power Generation',
        hi: '2. लोड कर्व, लोड फैक्टर एवं विद्युत अर्थशास्त्र',
        bn: '২. লোড কার্ভ, লোড ফ্যাক্টর ও বিদ্যুৎ উৎপাদন অর্থনীতি'
      },
      description: {
        en: 'Load duration curve, Base load vs Peak load plants, Connected load, Maximum Demand, Load Factor, Diversity Factor, Plant Capacity Factor, and Tariff structures.',
        hi: 'लोड अवधि वक्र, बेस लोड व पीक लोड प्लांट, लोड फैक्टर, डायवर्सिटी फैक्टर, प्लांट क्षमता फैक्टर एवं विद्युत दर (टैरिफ)।',
        bn: 'লোড ডিউরেশন কার্ভ, বেস লোড ও পিক লোড প্লান্ট, লোড ফ্যাক্টর, ডাইভার্সিটি ফ্যাক্টর, প্লান্ট ক্যাপাসিটি ফ্যাক্টর এবং ট্যারিফ পদ্ধতি।'
      },
      lesson: {
        id: 'lesson-ps-tp2',
        topicId: 'ps-tp2-load-curves-economics',
        title: {
          en: 'Power System Economics, Load Factors & Tariffs',
          hi: 'पावर सिस्टम अर्थशास्त्र, लोड कारक एवं टैरिफ',
          bn: 'পাওয়ার সিস্টেম অর্থনীতি, লোড ফ্যাক্টর ও ট্যারিফ'
        },
        description: {
          en: 'Mathematical formulation of load factors, plant capacity, reserve margins, diversity factors, and cost of generation.',
          hi: 'लोड फैक्टर, प्लांट क्षमता, डायवर्सिटी फैक्टर और विद्युत उत्पादन लागत का संपूर्ण गणितीय विश्लेषण।',
          bn: 'লোড ফ্যাক্টর, প্লান্ট ক্যাপাসিটি ফ্যাক্টর, ডাইভার্সিটি ফ্যাক্টর এবং বিদ্যুৎ উৎপাদন ব্যয়ের গাণিতিক হিসাব।'
        },
        detailedExplanation: {
          en: 'Power generation economics deals with minimizing cost per kilowatt-hour ($/kWh) while maintaining grid reliability.\n\n1. Load Curve & Load Duration Curve (LDC): A plot of electrical demand (MW) versus time of day. The area under the daily load curve represents total energy generated ($E = \\int P(t) dt$ in kWh).\n\n2. Key Operational Factors:\n- Demand Factor = $\\frac{\\text{Maximum Demand}}{\\text{Connected Load}} < 1$\n- Load Factor (LF) = $\\frac{\\text{Average Load}}{\\text{Maximum Demand}} = \\frac{\\text{Total Energy Generated (kWh)}}{\\text{Maximum Demand (kW)} \\times 24 \\text{ hrs}}$. High LF reduces generating cost per unit because fixed capital costs are distributed over more energy units.\n- Diversity Factor = $\\frac{\\sum \\text{Individual Max Demands}}{\\text{Coincident Station Max Demand}} > 1$. High diversity factor reduces the required station capacity, saving capital expenditure.\n- Plant Capacity Factor = $\\frac{\\text{Actual Energy Generated}}{\\text{Plant Rating} \\times \\text{Time}} = \\frac{\\text{Average Load}}{\\text{Plant Capacity}}$\n- Reserve Margin = $\\text{Plant Capacity} - \\text{Maximum Demand}$\n\n3. Tariff Structures: Methods of charging consumers. Common types: Two-part tariff ($E_{\\text{cost}} = A \\cdot \\text{kW} + B \\cdot \\text{kWh}$), Maximum demand tariff, and Time-of-Day (TOD) tariff encouraging off-peak consumption.',
          hi: 'विद्युत अर्थशास्त्र का उद्देश्य प्रति यूनिट उत्पादन लागत (₹/kWh) को न्यूनतम करना है।\n- लोड फैक्टर (LF): औसत लोड / अधिकतम मांग। उच्च लोड फैक्टर से प्रति यूनिट लागत घटती है।\n- डायवर्सिटी फैक्टर: व्यक्तिगत अधिकतम मांगों का योग / स्टेशन की अधिकतम मांग (> 1)। उच्च डायवर्सिटी फैक्टर से कम क्षमता का प्लांट लगाना पड़ता है।\n- प्लांट क्षमता फैक्टर: उत्पादित कुल ऊर्जा / (प्लांट क्षमता × समय)।\n- रिजर्व क्षमता = प्लांट क्षमता - अधिकतम मांग।',
          bn: 'বিদ্যুৎ উৎপাদন অর্থনীতির মূল লক্ষ্য হলো নির্ভরযোগ্যতা বজায় রেখে প্রতি কিলোওয়াট-আওয়ার (kWh) উৎপাদন খরচ সর্বনিম্ন করা।\n- লোড ফ্যাক্টর (LF) = গড় লোড / সর্বোচ্চ চাহিদা। উচ্চ লোড ফ্যাক্টর থাকলে প্রতি ইউনিট উৎপাদন খরচ হ্রাস পায়।\n- ডাইভার্সিটি ফ্যাক্টর = পৃথক সর্বোচ্চ চাহিদাগুলোর যোগফল / স্টেশনের সমন্বিত সর্বোচ্চ চাহিদা (> ১)। এটি বেশি হলে ছোট সাইজের প্লান্ট দিয়ে বেশি গ্রাহককে সেবা দেওয়া যায়।\n- প্লান্ট ক্যাপাসিটি ফ্যাক্টর = উৎপাদিত মোট শক্তি / (প্লান্ট রেটিং × মোট সময়)।\n- রিজার্ভ ক্যাপাসিটি = প্লান্ট ক্যাপাসিটি - সর্বোচ্চ চাহিদা।'
        },
        keyTakeaways: {
          en: [
            'Diversity factor is ALWAYS greater than 1.0 (typically 1.2 to 1.8). Higher diversity factor lowers station peak demand.',
            'Load factor and Plant Capacity factor are ALWAYS less than or equal to 1.0 (or 100%).',
            'Plant Use Factor = Actual Energy Produced / (Plant Rating × Operating Hours).',
            'Reserve Capacity = Maximum Demand × [(Load Factor / Plant Capacity Factor) - 1].'
          ],
          hi: [
            'डायवर्सिटी फैक्टर हमेशा 1 से बड़ा होता है (आमतौर पर 1.2 से 1.8)।',
            'लोड फैक्टर और प्लांट क्षमता फैक्टर हमेशा 1 (या 100%) से कम होते हैं।',
            'रिजर्व क्षमता = प्लांट क्षमता - स्टेशन की अधिकतम मांग।'
          ],
          bn: [
            'ডাইভার্সিটি ফ্যাক্টর সর্বদা ১-এর বেশি হয় (সাধারণতঃ ১.২ থেকে ১.৮)।',
            'লোড ফ্যাক্টর এবং প্লান্ট ক্যাপাসিটি ফ্যাক্টর সর্বদা ১-এর কম (বা ১০০% এর কম) হয়।',
            'রিজার্ভ ক্যাপাসিটি = মোট প্লান্ট ক্ষমতা - স্টেশনের সর্বোচ্চ চাহিদা।'
          ]
        },
        formulas: [
          {
            id: 'f-load-factor',
            name: { en: 'Load Factor (LF)', hi: 'लोड फैक्टर (LF)', bn: 'লোড ফ্যাক্টর (LF)' },
            formula: '\\text{Load Factor} = \\frac{\\text{Average Load}}{\\text{Maximum Demand}} = \\frac{\\text{Energy Generated (kWh)}}{\\text{Max Demand (kW)} \\times T \\text{ (hours)}}',
            description: {
              en: 'Ratio of average load over a specified period to the peak maximum demand.',
              hi: 'निर्दिष्ट समय में औसत लोड और अधिकतम मांग का अनुपात।',
              bn: 'একটি নির্দিষ্ট সময়ের গড় লোড ও সর্বোচ্চ পিক চাহিদার অনুপাত।'
            }
          },
          {
            id: 'f-diversity-factor',
            name: { en: 'Diversity Factor', hi: 'डायवर्सिटी फैक्टर', bn: 'ডাইভার্সিটি ফ্যাক্টর' },
            formula: '\\text{Diversity Factor} = \\frac{\\sum_{i=1}^n \\text{Individual Peak Demand}_i}{\\text{Simultaneous Coincident Max Demand}} > 1.0',
            description: {
              en: 'Sum of individual consumer maximum demands divided by station coincident maximum demand.',
              hi: 'व्यक्तिगत उपभोक्ताओं की अधिकतम मांगों का योग बटा स्टेशन की अधिकतम मांग।',
              bn: 'ভোক্তাদের পৃথক সর্বোচ্চ চাহিদার যোগফল ভাগ স্টেশনের মোট সর্বোচ্চ চাহিদা।'
            }
          },
          {
            id: 'f-plant-capacity-factor',
            name: { en: 'Plant Capacity Factor', hi: 'प्लांट क्षमता फैक्टर', bn: 'প্লান্ট ক্যাপাসিটি ফ্যাক্টর' },
            formula: '\\text{Plant Capacity Factor} = \\frac{\\text{Average Load}}{\\text{Rated Plant Capacity}} = \\text{Load Factor} \\times \\frac{\\text{Max Demand}}{\\text{Plant Capacity}}',
            description: {
              en: 'Indicates the utilization of installed generating capacity.',
              hi: 'स्थापित उत्पादन क्षमता के वास्तविक उपयोग को दर्शाता है।',
              bn: 'ইনস্টলড বিদ্যুৎ উৎপাদন ক্ষমতার প্রকৃত ব্যবহারের সূচক।'
            }
          }
        ],
        solvedExamples: [
          {
            id: 'ex-econ-1',
            problem: {
              en: 'A generating station has a maximum demand of 50 MW. The connected load is 80 MW. The total energy generated in a year is 219 × 10⁶ kWh. Calculate: (a) Demand factor, (b) Annual load factor, and (c) Plant capacity if the reserve capacity is 15 MW.',
              hi: 'एक उत्पादन केंद्र की अधिकतम मांग 50 MW और कनेक्टेड लोड 80 MW है। वार्षिक उत्पादित ऊर्जा 219 × 10⁶ kWh है। (a) डिमांड फैक्टर, (b) वार्षिक लोड फैक्टर, और (c) प्लांट क्षमता (रिजर्व 15 MW होने पर) ज्ञात कीजिए।',
              bn: 'একটি বিদ্যুৎ কেন্দ্রের সর্বোচ্চ চাহিদা ৫০ MW এবং সংযুক্ত লোড ৮০ MW। বার্ষিক উৎপাদিত মোট বিদ্যুৎ ২১৯ × ১০⁶ kWh। নির্ণয় করুন: (ক) ডিমান্ড ফ্যাক্টর, (খ) বার্ষিক লোড ফ্যাক্টর, এবং (গ) প্লান্ট ক্যাপাসিটি (যদি ১৫ MW রিজার্ভ থাকে)।'
            },
            solution: {
              en: 'Part (a): Demand Factor = Max Demand / Connected Load = 50 MW / 80 MW = 0.625 (62.5%)\n\nPart (b): Average Load = Energy / 8760 hrs = (219 × 10⁶ kWh) / 8760 h = 25,000 kW = 25 MW\nAnnual Load Factor = Average Load / Max Demand = 25 MW / 50 MW = 0.50 (50.0%)\n\nPart (c): Plant Capacity = Max Demand + Reserve Capacity = 50 MW + 15 MW = 65 MW',
              hi: 'भाग (a): डिमांड फैक्टर = 50 / 80 = 0.625 (62.5%)\nभाग (b): औसत लोड = 219×10⁶ / 8760 = 25 MW, लोड फैक्टर = 25 / 50 = 0.50 (50%)\nभाग (c): प्लांट क्षमता = 50 + 15 = 65 MW',
              bn: 'অংশ (ক): ডিমান্ড ফ্যাক্টর = ৫০ / ৮০ = ০.৬২৫ (৬২.৫%)\nঅংশ (খ): গড় লোড = ২১৯×১০⁶ / ৮৭৬০ = ২৫ MW, লোড ফ্যাক্টর = ২৫ / ৫০ = ০.৫০ (৫০%)\nঅংশ (গ): মোট প্লান্ট ক্যাপাসিটি = ৫০ + ১৫ = ৬৫ MW'
            },
            givenValues: { 'Max Demand': '50 MW', 'Connected Load': '80 MW', 'Annual Energy': '219 × 10⁶ kWh', 'Reserve': '15 MW' },
            finalAnswer: {
              en: 'Demand Factor = 62.5%, Load Factor = 50%, Plant Capacity = 65 MW',
              hi: 'डिमांड फैक्टर = 62.5%, लोड फैक्टर = 50%, प्लांट क्षमता = 65 MW',
              bn: 'ডিমান্ড ফ্যাক্টর = ৬২.৫%, লোড ফ্যাক্টর = ৫০%, প্লান্ট ক্ষমতা = ৬৫ MW'
            }
          }
        ],
        mcqs: [
          {
            id: 'mcq-ps-econ-1',
            question: {
              en: 'Which of the following operational factors in a power system is always GREATER than unity (1.0)?',
              hi: 'पावर सिस्टम में निम्नलिखित में से कौन सा कारक हमेशा 1.0 से बड़ा होता है?',
              bn: 'পাওয়ার সিস্টেমে নিচের কোন ফ্যাক্টরটির মান সর্বদা ১.০ অপেক্ষা বেশি হয়?'
            },
            options: [
              { id: 'opt-1', text: { en: 'Load Factor', hi: 'लोड फैक्टर', bn: 'লোড ফ্যাক্টর' } },
              { id: 'opt-2', text: { en: 'Demand Factor', hi: 'डिमांड फैक्टर', bn: 'ডিমান্ড ফ্যাক্টর' } },
              { id: 'opt-3', text: { en: 'Diversity Factor', hi: 'डायवर्सिटी फैक्टर', bn: 'ডাইভার্সিটি ফ্যাক্টর' } },
              { id: 'opt-4', text: { en: 'Plant Capacity Factor', hi: 'प्लांट क्षमता फैक्टर', bn: 'প্লান্ট ক্যাপাসিটি ফ্যাক্টর' } }
            ],
            correctOptionId: 'opt-3',
            explanation: {
              en: 'Diversity factor is the sum of individual maximum demands divided by the station coincident peak demand. Because consumers do not reach their peak demand at the exact same instant, this ratio is always > 1.',
              hi: 'डायवर्सिटी फैक्टर हमेशा 1 से बड़ा होता है क्योंकि सभी उपभोक्ताओं की अधिकतम मांग एक ही समय पर नहीं होती।',
              bn: 'ডাইভার্সিটি ফ্যাক্টর সর্বদা ১-এর বেশি হয় কারণ সকল গ্রাহকের সর্বোচ্চ চাহিদা একই মুহূর্তে ঘটে না।'
            }
          }
        ]
      }
    },
    {
      id: 'ps-tp3-thermal-hydro-layouts',
      chapterId: 'ps-ch1-generation',
      order: 3,
      level: 'Diploma',
      title: {
        en: '3. Thermal & Hydroelectric Plant Auxiliaries & Water Hammer',
        hi: '3. थर्मल एवं हाइड्रोइलेक्ट्रिक प्लांट सहायक उपकरण व वाटर हैमर',
        bn: '৩. থার্মাল ও হাইড্রো প্লান্টের সহায়ক সরঞ্জাম ও ওয়াটার হ্যামার'
      },
      description: {
        en: 'Superheaters, Reheaters, Economizers, Air Preheaters, Electrostatic Precipitators (ESP), Penstocks, Surge Tanks, Water Hammer physics, and Specific Speed of turbines.',
        hi: 'सुपरहीटर, रीहीटर, इकोनोमाइज़र, एयर प्रीहीटर, ईएसपी, पेनस्टॉक, सर्ज टैंक एवं वाटर हैमर परिघटना।',
        bn: 'সুপারহিটার, রিহিটার, ইকোনোমাইজার, এয়ার প্রিহিটার, ESP, পেনস্টক, সার্জ ট্যাংক এবং ওয়াটার হ্যামার বিশ্লেষণ।'
      },
      lesson: {
        id: 'lesson-ps-tp3',
        topicId: 'ps-tp3-thermal-hydro-layouts',
        title: {
          en: 'Thermal & Hydro Plant Auxiliaries, Surge Tanks & Water Hammer',
          hi: 'थर्मल एवं हाइड्रो सहायक उपकरण, सर्ज टैंक एवं वाटर हैमर',
          bn: 'থার্মাল ও হাইড্রো অক্সিলিয়ারি সরঞ্জাম, সার্জ ট্যাংক ও ওয়াটার হ্যামার'
        },
        description: {
          en: 'In-depth engineering of thermal efficiency boosters and hydro hydraulic protection systems.',
          hi: 'थर्मल दक्षता बढ़ाने वाले उपकरणों और जलविद्युत सुरक्षा प्रणालियों का विस्तृत अध्ययन।',
          bn: 'থার্মাল দক্ষতা বৃদ্ধির অক্সিলিয়ারি যন্ত্রপাতি ও জলবিদ্যুৎ সুরক্ষায় সার্জ ট্যাংকের ক্রিয়া।'
        },
        detailedExplanation: {
          en: '1. Thermal Power Plant Auxiliary Cycle:\n- Economizer: Extracts residual heat from flue gases before the chimney to preheat boiler feedwater, boosting overall thermal efficiency by 10–12%.\n- Superheater & Reheater: Converts saturated steam to dry superheated steam at 540°C, eliminating moisture droplets that would erode high-pressure turbine blades.\n- Air Preheater (APH): Preheats incoming combustion air using flue gas heat, improving boiler furnace combustion stability.\n- Electrostatic Precipitator (ESP): Employs high voltage DC (-60 kV) corona discharge to charge and collect fly ash with 99.5% particulate capture efficiency.\n\n2. Hydroelectric Surge Tanks & Water Hammer:\nWhen load on a hydroelectric generator suddenly drops, the turbine governor rapidly closes the inlet control gates. The massive inertia of moving water in the long penstock produces a catastrophic pressure wave called Water Hammer. A Surge Tank (a vertical open water tower located near the turbine) absorbs this pressure pulse by allowing water to rise freely, preventing penstock rupture, and rapidly supplies water during sudden load pickup.',
          hi: '1. थर्मल प्लांट उपकरण:\n- इकोनोमाइज़र: फ्लू गैसों से ऊष्मा लेकर बॉयलर फीड जल को गर्म करता है (दक्षता 10-12% बढ़ती है)।\n- सुपरहीटर: भाप को अति-तप्त करता है जिससे टरबाइन ब्लेडों को जंग और कटाव से बचाया जा सके।\n- ईएसपी (ESP): 60 kV DC कोरोना द्वारा 99.5% उड़न राख (fly ash) को अलग करता है।\n2. सर्ज टैंक एवं वाटर हैमर: लोड अचानक घटने पर गेट बंद होने से पेनस्टॉक में उत्पन्न अत्यधिक दबाव तरंग (वाटर हैमर) को अवशोषित करने के लिए सर्ज टैंक लगाया जाता है।',
          bn: '১. থার্মাল অক্সিলিয়ারি সাইকেল:\n- ইকোনোমাইজার: চিমনি দিয়ে বের হওয়া ধোঁয়ার অবশিষ্ট তাপ দিয়ে বয়লারের ফিড ওয়াটার উত্তপ্ত করে (১০-১২% দক্ষতা বৃদ্ধি)।\n- সুপারহিটার: স্যাচুরেটেড বাষ্পকে শুষ্ক ও সুপারহিটেড বাষ্পে রূপান্তর করে টার্বাইন ব্লেডের ক্ষয় রোধ করে।\n- ESP: উচ্চ ভোল্টেজ (-৬০ kV DC) করোনার সাহায্যে ৯৯.৫% ছাই দূর করে।\n২. সার্জ ট্যাংক ও ওয়াটার হ্যামার: হঠাৎ লোড কমে গেলে টার্বাইন গেট বন্ধ হওয়ায় পেনস্টকে সৃষ্ট বিধ্বংসী চাপকে (ওয়াটার হ্যামার) প্রশমিত করতে পেনস্টকের শুরুতে সার্জ ট্যাংক স্থাপন করা হয়।'
        },
        keyTakeaways: {
          en: [
            'Economizers recover flue gas heat to increase boiler feedwater temperature, saving ~1% fuel per 6°C temperature rise.',
            'Surge tanks prevent penstock burst caused by water hammer during sudden gate closure.',
            'Specific Speed of Turbine: Ns = (N · √P) / H^(5/4) dictates whether Pelton, Francis, or Kaplan is chosen.'
          ],
          hi: [
            'इकोनोमाइज़र फ्लू गैस से फीड वाटर को गर्म करता है।',
            'सर्ज टैंक वाटर हैमर से पेनस्टॉक को फटने से बचाता है।',
            'विशिष्ट गति (Specific Speed): Ns = N√P / H^(5/4)।'
          ],
          bn: [
            'ইকোনোমাইজার ফ্লু গ্যাস থেকে তাপ পুনরুদ্ধার করে বয়লার ফিড ওয়াটার উত্তপ্ত করে।',
            'সার্জ ট্যাংক পেনস্টককে ওয়াটার হ্যামারের বিস্ফোরণ থেকে সুরক্ষা দেয়।',
            'টার্বাইনের স্পেসিফিক স্পিড: Ns = N√P / H^(5/4)।'
          ]
        },
        formulas: [
          {
            id: 'f-turbine-ns',
            name: { en: 'Turbine Specific Speed (Ns)', hi: 'टरबाइन विशिष्ट गति', bn: 'টার্বাইন স্পেসিফিক স্পিড' },
            formula: 'N_s = \\frac{N \\cdot \\sqrt{P}}{H^{5/4}}',
            description: {
              en: 'N = Speed (RPM), P = Shaft Power (metric HP or kW), H = Net head (m). Pelton: Ns = 10-35, Francis: Ns = 60-300, Kaplan: Ns = 300-1000.',
              hi: 'विशिष्ट गति समीकरण। पेल्टन: 10-35, फ्रांसिस: 60-300, कापलान: 300-1000.',
              bn: 'স্পেসিফিক স্পিড সমীকরণ। পেল্টন: ১০-৩৫, ফ্রান্সিস: ৬০-৩০০, কাপলান: ৩০০-১০০০।'
            }
          }
        ],
        solvedExamples: [
          {
            id: 'ex-ns-calc',
            problem: {
              en: 'A water turbine develops 15,000 kW under a net head of 25 meters at a rotational speed of 150 RPM. Determine the specific speed of the turbine and state the type of turbine.',
              hi: 'एक जल टरबाइन 25 मीटर हेड पर 150 RPM पर 15,000 kW शक्ति उत्पन्न करती है। टरबाइन की विशिष्ट गति (Ns) और टरबाइन का प्रकार बताइए।',
              bn: 'একটি ওয়াটার টার্বাইন ২৫ মিটার হেডে ১৫০ RPM গতিতে ১৫,০০০ kW ক্ষমতা উৎপাদন করে। টার্বাইনের স্পেসিফিক স্পিড (Ns) নির্ণয় করুন এবং এটি কোন ধরণের টার্বাইন তা উল্লেখ করুন।'
            },
            solution: {
              en: 'Step 1: Formula Ns = (N · √P) / H^(5/4)\nStep 2: N = 150 RPM, P = 15,000 kW, H = 25 m\nStep 3: H^(5/4) = 25^1.25 = (5²)^1.25 = 5^2.5 = 55.90\nStep 4: Ns = (150 × √15000) / 55.90 = (150 × 122.47) / 55.90 = 328.6\nStep 5: Since Ns = 328.6 (between 300 and 1000 for low head), it is a Kaplan turbine.',
              hi: 'चरण 1: Ns = (150 × √15000) / 25^1.25 = 18371 / 55.90 = 328.6\nचरण 2: 300 से 1000 के बीच होने के कारण यह कापलान टरबाइन (Kaplan) है।',
              bn: 'ধাপ ১: Ns = (১৫০ × √১৫০০০) / ২৫^১.২৫ = ১৮৩৭১ / ৫৫.৯০ = ৩২৮.৬\nধাপ ২: Ns = ৩২৮.৬ (৩০০ থেকে ১০০০ এর মধ্যে) হওয়ায় এটি একটি কাপলান টার্বাইন।'
            },
            givenValues: { 'Power P': '15,000 kW', 'Head H': '25 m', 'Speed N': '150 RPM' },
            finalAnswer: {
              en: 'Specific Speed Ns = 328.6, Turbine Type = Kaplan Turbine',
              hi: 'विशिष्ट गति Ns = 328.6, टरबाइन प्रकार = कापलान टरबाइन',
              bn: 'স্পেসিফিক স্পিড Ns = ৩২৮.৬, টার্বাইনের ধরণ = কাপলান টার্বাইন'
            }
          }
        ],
        mcqs: [
          {
            id: 'mcq-ps-aux-1',
            question: {
              en: 'In a thermal power plant, the economizer is installed to preheat:',
              hi: 'थर्मल पावर प्लांट में इकोनोमाइज़र किसको गर्म करने के लिए लगाया जाता है?',
              bn: 'থার্মাল পাওয়ার প্লান্টে ইকোনোমাইজার কী উত্তপ্ত করতে ব্যবহৃত হয়?'
            },
            options: [
              { id: 'opt-1', text: { en: 'Combustion air entering furnace', hi: 'भट्टी में जाने वाली दहन वायु', bn: 'ফার্নেসে প্রবেশকারী বাতাস' } },
              { id: 'opt-2', text: { en: 'Boiler feedwater using flue gases', hi: 'फ्लू गैसों द्वारा बॉयलर फीड जल', bn: 'ফ্লু গ্যাসের সাহায্যে বয়লার ফিড ওয়াটার' } },
              { id: 'opt-3', text: { en: 'High pressure steam', hi: 'उच्च दबाव वाली भाप', bn: 'উচ্চ চাপের স্টিম' } },
              { id: 'opt-4', text: { en: 'Turbine lubricating oil', hi: 'टरबाइन ल्यूब्रिकेटिंग तेल', bn: 'টার্বাইন লুব্রিকেটিং তেল' } }
            ],
            correctOptionId: 'opt-2',
            explanation: {
              en: 'Economizer extracts waste heat from chimney flue gases to preheat water entering the boiler drum, improving overall thermal efficiency.',
              hi: 'इकोनोमाइज़र चिमनी से निकलने वाली गर्म फ्लू गैसों से बॉयलर फीड वाटर को पहले से गर्म करता है।',
              bn: 'ইকোনোমাইজার ফ্লু গ্যাসের অপচয় হওয়া তাপ থেকে বয়লারে প্রবেশকারী পানিকে প্রি-হিট করে।'
            }
          }
        ]
      }
    },
    {
      id: 'ps-tp4-nuclear-solar-wind',
      chapterId: 'ps-ch1-generation',
      order: 4,
      level: 'Engineering',
      title: {
        en: '4. Nuclear Reactor Physics, Solar PV & Wind Energy Conversion',
        hi: '4. परमाणु रिएक्टर भौतिकी, सोलर पीवी एवं पवन ऊर्जा रूपांतरण',
        bn: '৪. নিউক্লিয়ার রিঅ্যাক্টর, সোলার পিভি ও উইন্ড এনার্জি সিস্টেম'
      },
      description: {
        en: 'Nuclear fission chain reaction, multiplication factor (k), PWR/BWR/CANDU systems, Solar PV I-V curves, Maximum Power Point Tracking (MPPT), and Wind power Betz coefficient.',
        hi: 'परमाणु विखंडन श्रृंखला अभिक्रिया, गुणन कारक (k), PWR/BWR, सोलर MPPT एवं पवन ऊर्जा बेट्ज़ गुणांक।',
        bn: 'নিউক্লিয়ার ফিশন চেইন রিঅ্যাকশন, PWR/BWR/CANDU রিঅ্যাক্টর, সোলার MPPT অ্যালগরিদম এবং উইন্ড বেটজ কো-এফিশিয়েন্ট।'
      },
      lesson: {
        id: 'lesson-ps-tp4',
        topicId: 'ps-tp4-nuclear-solar-wind',
        title: {
          en: 'Nuclear Reactors, Solar PV Maximum Power & Wind Dynamics',
          hi: 'परमाणु रिएक्टर, सोलर MPPT एवं पवन ऊर्जा गतिशीलता',
          bn: 'নিউক্লিয়ার রিঅ্যাক্টর, সোলার MPPT ও উইন্ড পাওয়ার ডাইনামিক্স'
        },
        description: {
          en: 'Physics of modern non-fossil generation: fission control, semiconductor solar energy harvesting, and aerodynamic wind conversion.',
          hi: 'गैर-जीवाश्म उत्पादन का संपूर्ण अध्ययन: विखंडन नियंत्रण, सोलर PV और पवन ऊर्जा रूपांतरण।',
          bn: 'অ-জীবাশ্ম বিদ্যুৎ উৎপাদন প্রযুক্তি: নিউক্লিয়ার ফিশন, সোলার MPPT এবং উইন্ড এনার্জি রূপান্তর।'
        },
        detailedExplanation: {
          en: '1. Nuclear Fission Reactor Physics:\nFission of 1 gram of U-235 releases ~8.2 × 10¹⁰ Joules (equivalent to burning 2.5 tonnes of coal). Fast neutrons produced (~2 MeV) must be moderated to thermal energy (~0.025 eV) for continuous capture.\n- Neutron Multiplication Factor $k = \\frac{\\text{Neutrons in generation } (n+1)}{\\text{Neutrons in generation } n}$. For steady operation, $k = 1.0$ (Critical state).\n- Pressurized Water Reactor (PWR): Uses high-pressure water (155 bar) as both coolant and moderator; primary loop water does not boil and transfers heat to a secondary steam loop.\n- Boiling Water Reactor (BWR): Single loop where water boils directly inside the reactor vessel.\n- CANDU: Uses natural un-enriched Uranium and Heavy Water (D₂O) moderator.\n\n2. Solar Photovoltaic (PV) & MPPT:\nSolar cell output follows the diode equation: $I = I_{ph} - I_0 [e^{\\frac{q(V + I R_s)}{n k T}} - 1]$. The Maximum Power Point Tracking (MPPT) algorithm (Perturb & Observe or Incremental Conductance) dynamically tracks the knee of the P-V curve ($dP/dV = 0$) to extract peak wattage under changing solar irradiance ($G$) and temperature ($T$).\n\n3. Wind Turbine Aerodynamics:\nWind power kinetic flux is $P_{available} = \\frac{1}{2} \\rho A v^3$. By momentum theory, the Betz limit dictates that maximum power coefficient $C_p = 16/27 = 0.593$, meaning no wind turbine can capture more than 59.3% of incoming wind energy.',
          hi: '1. परमाणु विखंडन: 1 ग्राम U-235 से 2.5 टन कोयले के बराबर ऊर्जा मिलती है। स्थिर संचालन के लिए न्यूट्रॉन गुणन कारक k = 1.0 (क्रिटिकल) होना चाहिए। PWR में दोहरे लूप और BWR में एकल लूप का उपयोग होता है।\n2. सोलर पीवी एवं MPPT: अधिकतम शक्ति बिंदु ट्रैकिंग (MPPT) द्वारा सूर्य की धूप में उतार-चढ़ाव के बावजूद P-V वक्र के चरम बिंदु (dP/dV = 0) से अधिकतम बिजली निकाली जाती है।\n3. पवन ऊर्जा: पवन से उपलब्ध शक्ति $P = \\frac{1}{2}\\rho A v^3$ होती है और बेट्ज़ नियम के अनुसार अधिकतम दक्षता 59.3% हो सकती है।',
          bn: '১. নিউক্লিয়ার ফিশন: ১ গ্রাম ইউরেনিয়াম-২৩৫ থেকে ২.৫ টন কয়লার সমপরিমাণ শক্তি মেলে। রিঅ্যাক্টরের স্থিতিশীলতার জন্য নিউট্রন মাল্টিপ্লিকেশন ফ্যাক্টর k = ১.০ (ক্রিটিকাল) বজায় রাখতে হয়।\n২. সোলার পিভি ও MPPT: সোলার প্যানেল থেকে সর্বোচ্চ বিদ্যুৎ শক্তি পাওয়ার জন্য MPPT অ্যালগরিদম (dP/dV = 0 বিন্দুতে) ব্যবহার করা হয়।\n৩. উইন্ড এনার্জি: বাতাসের গতিশক্তি $P = \\frac{1}{2}\\rho A v^3$। বেটজ লিমিট অনুসারে উইন্ড টার্বাইনের সর্বোচ্চ তাত্ত্বিক রূপান্তর ক্ষমতা ৫৯.৩%।'
        },
        keyTakeaways: {
          en: [
            'Nuclear reactor state: k = 1 (Critical), k > 1 (Supercritical - power rising), k < 1 (Subcritical - power shutting down).',
            'Solar PV efficiency drops by ~0.4%/°C increase in cell temperature.',
            'Wind power output is proportional to the CUBE of wind velocity (v³); doubling wind speed increases power by 8 times!'
          ],
          hi: [
            'परमाणु रिएक्टर: k = 1 (क्रिटिकल), k > 1 (सुपरक्रिटिकल), k < 1 (सबक्रिटिकल)।',
            'पवन ऊर्जा हवा के वेग के घन (v³) के समानुपाती होती है (वेग दोगुना होने पर पावर 8 गुना हो जाती है)।'
          ],
          bn: [
            'নিউক্লিয়ার রিঅ্যাক্টর: k = ১ (ক্রিটিকাল), k > ১ (সুপারক্রিটিকাল), k < ১ (সাবক্রিটিকাল)।',
            'উইন্ড পাওয়ার বাতাসের বেগের ঘনের (v³) সমানুপাতিক (বাতাসের বেগ দ্বিগুণ হলে শক্তি ৮ গুণ বাড়ে)।'
          ]
        },
        formulas: [
          {
            id: 'f-mppt-condition',
            name: { en: 'MPPT Maximum Power Condition', hi: 'MPPT अधिकतम शक्ति शर्त', bn: 'MPPT সর্বোচ্চ শক্তি শর্ত' },
            formula: '\\frac{dP}{dV} = 0 \\implies I + V \\frac{dI}{dV} = 0 \\iff \\frac{dI}{dV} = -\\frac{I}{V}',
            description: {
              en: 'Incremental conductance MPPT condition where incremental conductance equals negative instantaneous conductance.',
              hi: 'इंक्रीमेंटल कंडक्टेंस MPPT शर्त।',
              bn: 'ইনক্রিমেন্টাল কন্ডাক্ট্যান্স MPPT শর্ত সমীকরণ।'
            }
          }
        ],
        solvedExamples: [
          {
            id: 'ex-wind-betz',
            problem: {
              en: 'A 3-blade wind turbine has a rotor diameter of 80 meters. It operates in air of density 1.225 kg/m³ with a wind speed of 12 m/s. If the turbine power coefficient is Cp = 0.42 and generator efficiency is 90%, calculate the electrical power generated in Megawatts (MW).',
              hi: 'एक 3-ब्लेड वाली पवन चक्की का रोटर व्यास 80 मीटर है। यह 1.225 kg/m³ वायु घनत्व एवं 12 m/s हवा की गति में कार्य करती है। यदि Cp = 0.42 और जनरेटर दक्षता 90% है, तो उत्पादित विद्युत शक्ति (MW) ज्ञात करें।',
              bn: 'একটি ৩-ব্লেডের উইন্ড টার্বাইনের রটার ব্যাস ৮০ মিটার। বাতাসের ঘনত্ব ১.২২৫ kg/m³ এবং বেগ ১২ মি/সে। যদি Cp = ০.৪২ এবং জেনারেটরের দক্ষতা ৯০% হয়, তবে উৎপাদিত বিদ্যুৎ শক্তি মেগাওয়াটে (MW) নির্ণয় করুন।'
            },
            solution: {
              en: 'Step 1: Rotor swept area A = π · (D/2)² = π · 40² = 5026.55 m²\nStep 2: Total wind power flux P_wind = 0.5 × ρ × A × v³ = 0.5 × 1.225 × 5026.55 × 12³ = 5,320,094 W = 5.32 MW\nStep 3: Mechanical power captured P_mech = P_wind × Cp = 5.32 MW × 0.42 = 2.234 MW\nStep 4: Electrical power generated P_elec = P_mech × η = 2.234 MW × 0.90 = 2.01 MW',
              hi: 'चरण 1: क्षेत्रफल A = π × 40² = 5026.55 m²\nचरण 2: पवन शक्ति = 0.5 × 1.225 × 5026.55 × 12³ = 5.32 MW\nचरण 3: P_elec = 5.32 × 0.42 × 0.90 = 2.01 MW',
              bn: 'ধাপ ১: ক্ষেত্রফল A = π × ৪০² = ৫০২৬.৫৫ মি²\nধাপ ২: মোট উইন্ড পাওয়ার = ০.৫ × ১.২২৫ × ৫০২৬.৫৫ × ১২³ = ৫.৩২ MW\nধাপ ৩: বৈদ্যুতিক শক্তি P_elec = ৫.৩২ × ০.৪২ × ০.৯০ = ২.০১ মেগাওয়াট (MW)'
            },
            givenValues: { 'Rotor Diameter': '80 m', 'Wind Speed': '12 m/s', 'Air Density': '1.225 kg/m³', 'Cp': '0.42', 'Efficiency': '90%' },
            finalAnswer: {
              en: 'Electrical Power Generated = 2.01 MW',
              hi: 'उत्पादित विद्युत शक्ति = 2.01 MW',
              bn: 'উৎপাদিত বৈদ্যুতিক শক্তি = ২.০১ MW'
            }
          }
        ],
        mcqs: [
          {
            id: 'mcq-nuclear-1',
            question: {
              en: 'In a nuclear reactor, control rods are fabricated from which material to absorb excess neutrons?',
              hi: 'परमाणु रिएक्टर में अतिरिक्त न्यूट्रॉनों को अवशोषित करने हेतु नियंत्रण छड़ें किस धातु की बनाई जाती हैं?',
              bn: 'নিউক্লিয়ার রিঅ্যাক্টরে অতিরিক্ত নিউট্রন শোষণ করতে কন্ট্রোল রড কোন ধাতু দ্বারা তৈরি হয়?'
            },
            options: [
              { id: 'opt-1', text: { en: 'Cadmium or Boron', hi: 'कैडमियम या बोरॉन', bn: 'ক্যাডমিয়াম বা বোরন' } },
              { id: 'opt-2', text: { en: 'Graphite or Heavy Water', hi: 'ग्रेफाइट या भारी पानी', bn: 'গ্রাফাইট বা ভারী পানি' } },
              { id: 'opt-3', text: { en: 'Liquid Sodium', hi: 'तरल सोडियम', bn: 'তরল সোডিয়াম' } },
              { id: 'opt-4', text: { en: 'Zircaloy', hi: 'जिरकैलॉय', bn: 'জিরক্যালয়' } }
            ],
            correctOptionId: 'opt-1',
            explanation: {
              en: 'Cadmium and Boron have extraordinarily high neutron absorption cross-sections, allowing precise control of the nuclear chain reaction rate.',
              hi: 'कैडमियम और बोरॉन की न्यूट्रॉन अवशोषण क्षमता अत्यधिक उच्च होती है, जिससे विखंडन अभिक्रिया को नियंत्रित किया जाता है।',
              bn: 'ক্যাডমিয়াম ও বোরনের নিউট্রন শোষণ ক্ষমতা অত্যন্ত বেশি হওয়ায় চেইন রিঅ্যাকশন নিয়ন্ত্রণে এগুলো ব্যবহৃত হয়।'
            }
          }
        ]
      }
    }
  ]
};
