import { Chapter } from '../../types';

export const POWER_SYSTEMS_MODULE_3: Chapter = {
  id: 'ps-ch3-distribution',
  subjectId: 'power-systems',
  order: 3,
  title: {
    en: 'Module 3: Mechanical Design, Distribution Systems & Underground Cables',
    hi: 'मॉड्यूल 3: यांत्रिक डिजाइन, वितरण प्रणाली एवं भूमिगत केबल',
    bn: 'মডিউল ৩: মেকানিক্যাল ডিজাইন, ডিস্ট্রিবিউশন সিস্টেম ও আন্ডারগ্রাউন্ড ক্যাবল'
  },
  topics: [
    {
      id: 'ps-tp10-sag-tension',
      chapterId: 'ps-ch3-distribution',
      order: 1,
      level: 'Diploma',
      title: {
        en: '10. Sag and Tension Calculations in Overhead Lines',
        hi: '10. ओवरहेड लाइनों में सैग (झोल) एवं तनाव की गणना',
        bn: '১০. ওভারহেড লাইনে স্যাগ ও টান হিসাব'
      },
      description: {
        en: 'Parabolic and catenary sag formulas for supports at equal and unequal levels, ice coating weight, wind pressure force, and temperature variation stringing charts.',
        hi: 'समान एवं असमान स्तर के खंभों के लिए सैग सूत्र (S = W·L² / 8T), वायु दबाव एवं बर्फ भार के प्रभाव।',
        bn: 'সমতল ও অসমান খুঁটির জন্য স্যাগ সূত্র (S = W·L² / 8T), বাতাসের চাপ ও বরফের ওজনের সম্মিলিত প্রভাব।'
      },
      lesson: {
        id: 'lesson-ps-tp10',
        topicId: 'ps-tp10-sag-tension',
        title: {
          en: 'Overhead Line Sag, Mechanical Tension & Weather Loads',
          hi: 'ओवरहेड लाइन सैग, यांत्रिक तनाव एवं मौसम भार',
          bn: 'ওভারহেড লাইনের স্যাগ, মেকানিক্যাল টান ও আবহাওয়ার লোড'
        },
        description: {
          en: 'Mathematical determination of minimum ground clearance, conductor tension, and environmental loading vectors.',
          hi: 'न्यूनतम ग्राउंड क्लीयरेंस, कंडक्टर तनाव एवं हवा-बर्फ के संयुक्त भार का यांत्रिक विश्लेषण।',
          bn: 'গ্রাউন্ড ক্লিয়ারেন্স, কন্ডাক্টরের মেকানিক্যাল টান এবং বাতাস ও বরফের লোড হিসাব।'
        },
        detailedExplanation: {
          en: 'Sag is the vertical difference in level between the highest point of conductor support and the lowest point of the conductor.\n\n1. Supports at Equal Level (Parabolic Approximation):\nFor span length $L$ (meters), total conductor weight $w$ (kg/m or N/m), and working horizontal tension $T$ (N or kg):\n$$S = \\frac{w \\cdot L^2}{8 T}$$\nConductor length between supports: $l_{\\text{actual}} \\approx L + \\frac{8 S^2}{3 L}$.\n\n2. Supports at Unequal Levels (Hilly Terrain):\nWhen supports $A$ and $B$ have a height difference $h$ across span $L$:\n- Distance of lowest point $O$ from support $A$: $x_1 = \\frac{L}{2} - \\frac{T \\cdot h}{w \\cdot L}$\n- Distance of lowest point $O$ from support $B$: $x_2 = \\frac{L}{2} + \\frac{T \\cdot h}{w \\cdot L}$\n- Sags: $S_1 = \\frac{w x_1^2}{2 T}$ and $S_2 = \\frac{w x_2^2}{2 T}$.\n\n3. Environmental Weather Loading Vectors:\n- Conductor self weight $w$ acting vertically downwards.\n- Ice coating adds vertical weight $w_i = \\pi \\cdot t (d + t) \\cdot \\rho_{\\text{ice}}$ acting vertically downwards.\n- Wind pressure exerts a horizontal transverse force $w_w = P_{\\text{wind}} \\times (d + 2t)$ per meter length.\n- Total Resultant Effective Weight Vector:\n  $$w_r = \\sqrt{(w + w_i)^2 + w_w^2}$$\n- Slant Sag $S_{\\text{slant}} = \\frac{w_r L^2}{8 T}$; Vertical Sag (clearance to ground) $S_{\\text{vertical}} = S_{\\text{slant}} \\cos \\theta$, where $\\tan \\theta = \\frac{w_w}{w + w_i}$.',
          hi: '1. समान स्तर पर सैग: $S = \\frac{w L^2}{8 T}$।\n2. असमान स्तर (पहाड़ी क्षेत्र): $x_1 = \\frac{L}{2} - \\frac{Th}{wL}$, $S_1 = \\frac{w x_1^2}{2T}$।\n3. मौसम प्रभाव:\n- बर्फ का भार ($w_i$) नीचे की ओर।\n- हवा का बल ($w_w$) क्षैतिज रूप से।\n- कुल परिणामी भार: $w_r = \\sqrt{(w + w_i)^2 + w_w^2}$।\n- ऊर्ध्वाधर सैग: $S_{vert} = S_{slant} \\cos\\theta$।',
          bn: '১. সমতল খুঁটিতে স্যাগ: $S = \\frac{w L^2}{8 T}$।\n২. অসমান খুঁটিতে (পাহাড়ি এলাকায়): $x_1 = \\frac{L}{2} - \\frac{Th}{wL}$, $S_1 = \\frac{w x_1^2}{2T}$।\n৩. আবহাওয়ার লোড:\n- বরফের ওজন ($w_i$) উল্লম্বভাবে নিচে কাজ করে।\n- বাতাসের চাপ ($w_w$) আনুভূমিকভাবে কাজ করে।\n- কার্যকর মোট ওজন: $w_r = \\sqrt{(w + w_i)^2 + w_w^2}$।\n- উল্লম্ব স্যাগ: $S_{vert} = S_{slant} \\cos\\theta$।'
        },
        keyTakeaways: {
          en: [
            'Sag is directly proportional to the square of span length (L²) and inversely proportional to conductor working tension (T).',
            'Wind load acts horizontally, while ice weight acts vertically downwards; resultant weight is their vector sum.',
            'Working tension T = Ultimate Breaking Strength / Safety Factor (Safety factor is typically 2.0).'
          ],
          hi: [
            'सैग स्पैन की लंबाई के वर्ग (L²) के समानुपाती और तनाव (T) के व्युत्क्रमानुपाती होता है।',
            'हवा का भार क्षैतिज तथा बर्फ का भार ऊर्ध्वाधर होता है।',
            'कार्यकारी तनाव T = ब्रेकिंग स्ट्रेंथ / सेफ्टी फैक्टर (सुरक्षा गुणांक प्रायः 2 होता है)।'
          ],
          bn: [
            'স্য্যাগ স্প্যানের দৈর্ঘ্যের বর্গের (L²) সমানুপাতিক এবং মেকানিক্যাল টান (T) এর ব্যস্তানুপাতিক।',
            'বাতাসের চাপ আনুভূমিক এবং বরফের ওজন উল্লম্বভাবে ক্রিয়া করে।',
            'কার্যকর টান T = আল্টিমেট ব্রেকিং স্ট্রেংথ / সেফটি ফ্যাক্টর (সেফটি ফ্যাক্টর সাধারণতঃ ২.০ হয়)।'
          ]
        },
        formulas: [
          {
            id: 'f-sag-equal',
            name: { en: 'Sag with Equal Level Supports', hi: 'समान स्तर पर सैग सूत्र', bn: 'সমতল খুঁটিতে স্যাগ সূত্র' },
            formula: 'S = \\frac{w_r \\cdot L^2}{8 T}, \\quad w_r = \\sqrt{(w + w_i)^2 + w_w^2}',
            description: {
              en: 'wr = Resultant weight per unit length, L = Span length in meters, T = Horizontal tension in Newtons.',
              hi: 'wr = परिणामी भार, L = स्पैन, T = तनाव।',
              bn: 'wr = কার্যকর মোট ওজন, L = স্প্যানের দৈর্ঘ্য, T = কন্ডাক্টরের টান।'
            }
          }
        ],
        solvedExamples: [
          {
            id: 'ex-sag-calc-1',
            problem: {
              en: 'An overhead transmission line has a span of 200 meters between level supports. The conductor has a cross-sectional area of 1.5 cm², total weight of 1.2 kg/m, and an ultimate breaking strength of 5000 kg. If the factor of safety is 2, wind pressure is 1.5 kg/m, and ice weight is neglected, calculate: (a) Slant sag, and (b) Vertical sag.',
              hi: '200 मीटर स्पैन वाली लाइन में तार का भार 1.2 kg/m, ब्रेकिंग स्ट्रेंथ 5000 kg, सेफ्टी फैक्टर 2 और वायु भार 1.5 kg/m है। (a) तिरछा सैग और (b) ऊर्ध्वाधर सैग ज्ञात कीजिए।',
              bn: '২০০ মিটার স্প্যানের একটি লাইনে কন্ডাক্টরের ওজন ১.২ kg/m, ব্রেকিং স্ট্রেংথ ৫০০০ kg, সেফটি ফ্যাক্টর ২ এবং বাতাসের চাপ ১.৫ kg/m। নির্ণয় করুন: (ক) তীর্যক স্যাগ এবং (খ) উল্লম্ব স্যাগ।'
            },
            solution: {
              en: 'Step 1: Working Tension T = Ultimate Breaking Strength / Factor of Safety = 5000 kg / 2 = 2500 kg\nStep 2: Resultant weight wr = √(w² + ww²) = √(1.2² + 1.5²) = √(1.44 + 2.25) = √3.69 = 1.921 kg/m\nStep 3: Slant Sag S_slant = (wr · L²) / (8 · T) = (1.921 × 200²) / (8 × 2500) = (1.921 × 40,000) / 20,000 = 3.842 meters\nStep 4: cos θ = w / wr = 1.2 / 1.921 = 0.6247\nVertical Sag S_vertical = S_slant × cos θ = 3.842 × 0.6247 = 2.40 meters',
              hi: 'चरण 1: कार्यकारी तनाव T = 5000 / 2 = 2500 kg\nचरण 2: परिणामी भार wr = √(1.2² + 1.5²) = 1.921 kg/m\nचरण 3: तिरछा सैग = (1.921 × 200²) / (8 × 2500) = 3.842 m\nचरण 4: ऊर्ध्वाधर सैग = 3.842 × (1.2 / 1.921) = 2.40 m',
              bn: 'ধাপ ১: কার্যকর টান T = ৫০০০ / ২ = ২৫০০ kg\nধাপ ২: কার্যকর ওজন wr = √(১.২² + ১.৫²) = ১.৯২১ kg/m\nধাপ ৩: তীর্যক স্যাগ = (১.৯২১ × ২০০²) / (৮ × ২৫০০) = ৩.৮৪২ মি\nধাপ ৪: উল্লম্ব স্যাগ = ৩.৮৪২ × (১.২ / ১.৯২১) = ২.৪০ মি'
            },
            givenValues: { 'Span L': '200 m', 'Self Weight w': '1.2 kg/m', 'Wind Load ww': '1.5 kg/m', 'Breaking Strength': '5000 kg', 'Safety Factor': '2' },
            finalAnswer: {
              en: 'Slant Sag = 3.84 m, Vertical Sag = 2.40 m',
              hi: 'तिरछा सैग = 3.84 m, ऊर्ध्वाधर सैग = 2.40 m',
              bn: 'তীর্যক স্যাগ = ৩.৮৪ মি, উল্লম্ব স্যাগ = ২.৪০ মি'
            }
          }
        ],
        mcqs: [
          {
            id: 'mcq-sag-1',
            question: {
              en: 'If the mechanical tension in an overhead transmission line conductor is doubled while keeping span length and weight constant, what happens to the sag?',
              hi: 'यदि स्पैन और भार को स्थिर रखते हुए ओवरहेड लाइन में तनाव को दोगुना कर दिया जाए, तो सैग पर क्या प्रभाव पड़ेगा?',
              bn: 'যদি স্প্যান এবং ওজন অপরিবর্তিত রেখে সঞ্চালন লাইনের টান দ্বিগুণ করা হয়, তবে স্যাগের কী পরিবর্তন হবে?'
            },
            options: [
              { id: 'opt-1', text: { en: 'Sag becomes HALF of its initial value', hi: 'सैग आधा (1/2) हो जाएगा', bn: 'স্যাগ অর্ধেক (১/২) হয়ে যাবে' } },
              { id: 'opt-2', text: { en: 'Sag becomes FOUR times', hi: 'सैग 4 गुना हो जाएगा', bn: 'স্যাগ ৪ গুণ হবে' } },
              { id: 'opt-3', text: { en: 'Sag doubles', hi: 'सैग दोगुना हो जाएगा', bn: 'স্যাগ দ্বিগুণ হবে' } },
              { id: 'opt-4', text: { en: 'Sag remains unchanged', hi: 'सैग अपरिवर्तित रहेगा', bn: 'স্যাগ অপরিবর্তিত থাকবে' } }
            ],
            correctOptionId: 'opt-1',
            explanation: {
              en: 'From the formula S = wL² / 8T, sag S is inversely proportional to tension T. Doubling T reduces S by half.',
              hi: 'सूत्र S = wL² / 8T के अनुसार सैग तनाव T के व्युत्क्रमानुपाती होता है। T दोगुना करने पर S आधा हो जाता है।',
              bn: 'সূত্র S = wL² / 8T অনুসারে স্যাগ টানের ব্যস্তানুপাতিক। টান T দ্বিগুণ করলে স্যাগ S অর্ধেক হয়ে যাবে।'
            }
          }
        ]
      }
    },
    {
      id: 'ps-tp11-distribution-networks',
      chapterId: 'ps-ch3-distribution',
      order: 2,
      level: 'Foundation',
      title: {
        en: '11. Radial, Ring Main & Interconnected Distribution Networks',
        hi: '11. रेडियल, रिंग मेन एवं इंटरकनेक्टेड वितरण नेटवर्क',
        bn: '১১. রেডিয়াল, রিং মেইন ও ইন্টারকানেক্টেড ডিস্ট্রিবিউশন পদ্ধতি'
      },
      description: {
        en: 'Feeders, distributors, service mains, voltage drop calculations for concentrated and uniformly distributed loads, point of minimum potential, and reliability comparison.',
        hi: 'फीडर, डिस्ट्रीब्यूटर, सर्विस मेन्स लेआउट, वोल्टेज ड्रॉप गणना एवं न्यूनतम विभव बिंदु (Point of Minimum Potential)।',
        bn: 'ফিডার, ডিস্ট্রিবিউটর, সার্ভিস মেইনস লেআউট, ভোল্টেজ ড্রপ হিসাব এবং সর্বনিম্ন বিভব বিন্দু।'
      },
      lesson: {
        id: 'lesson-ps-tp11',
        topicId: 'ps-tp11-distribution-networks',
        title: {
          en: 'Distribution Schemes & Distributor Voltage Drop Analysis',
          hi: 'वितरण योजनाएं एवं डिस्ट्रीब्यूटर वोल्टेज ड्रॉप विश्लेषण',
          bn: 'ডিস্ট্রিবিউশন স্কিম ও ভোল্টেজ ড্রপ বিশ্লেষণ'
        },
        description: {
          en: 'Engineering classification of distribution topologies and point-of-minimum potential calculation.',
          hi: 'रेडियल, रिंग मेन और इंटरकनेक्टेड नेटवर्क का विस्तृत अध्ययन एवं वोल्टेज ड्रॉप गणना।',
          bn: 'রেডিয়াল, রিং মেইন এবং ইন্টারকানেক্টেড ডিস্ট্রিবিউশন গ্রিড বিশ্লেষণ।'
        },
        detailedExplanation: {
          en: '1. Primary Components of Distribution System:\n- Feeder: A conductor connecting the substation to the feeding areas. It has NO tappings along its length; current remains constant throughout. Designed primarily on Current Carrying Capacity.\n- Distributor: A conductor from which consumer tappings are taken. Current varies continuously along its length. Designed strictly based on Permissible Voltage Drop (typically ±5% or ±6% as per statutory grid codes).\n- Service Mains: Small cable connecting the distributor to the consumer energy meter.\n\n2. Network Topologies:\n- Radial System: Single path from source to consumers. Simplest and lowest capital cost, but poor reliability (any fault disconnects all downstream consumers) and large voltage drops at far ends.\n- Ring Main System: Distributor forms a closed loop fed from one or more points. Isolating switches allow faulty sections to be disconnected while supplying power from the alternative direction. High reliability and uniform voltage profile.\n- Interconnected System: Powered from multiple generating substations. Highest reliability and flexibility under contingency outages.\n\n3. Voltage Drop Calculations:\n- Distributor fed at one end with concentrated loads: $\\Delta V = \\sum I_k R_k$.\n- Distributor fed at one end with Uniformly Distributed Load ($i$ Amps/meter over length $l$): Total voltage drop is $\\Delta V = \\frac{1}{2} i r l^2 = \\frac{1}{2} I R$ (exactly HALF the drop of the same total current concentrated at the far end!).\n- Ring distributor or distributor fed at both ends: The Point of Minimum Potential is identified where current flows in from both directions.',
          hi: '1. घटक:\n- फीडर: सबस्टेशन से डिस्ट्रीब्यूटर तक। इसमें कोई टैपिंग नहीं होती। यह धारा क्षमता (Current capacity) पर डिजाइन होता है।\n- डिस्ट्रीब्यूटर: जिससे उपभोक्ताओं को कनेक्शन मिलते हैं। यह वोल्टेज ड्रॉप (अनुमेय सीमा ±5%) पर डिजाइन होता है।\n- सर्विस मेन्स: डिस्ट्रीब्यूटर से उपभोक्ता मीटर तक का तार।\n2. रिंग मेन सिस्टम: लूप लेआउट जिससे उच्च विश्वसनीयता और कम वोल्टेज ड्रॉप मिलता है।\n3. एक समान वितरित लोड (Uniform load) का वोल्टेज ड्रॉप कुल लोड के अंत में होने वाले ड्रॉप का आधा (1/2 IR) होता है।',
          bn: '১. ডিস্ট্রিবিউশন উপাদান:\n- ফিডার: সাবস্টেশন থেকে ডিস্ট্রিবিউটর পর্যন্ত লাইন। এতে কোনো ট্যাপিং থাকে না। এটি কারেন্ট বহন ক্ষমতার ওপর ভিত্তি করে ডিজাইন করা হয়।\n- ডিস্ট্রিবিউটর: যেখান থেকে গ্রাহকদের সংযোগ দেওয়া হয়। এটি অনুমোদিত ভোল্টেজ ড্রপ (±৫%) এর ওপর ভিত্তি করে ডিজাইন করা হয়।\n- সার্ভিস মেইনস: ডিস্ট্রিবিউটর থেকে গ্রাহকের মিটার পর্যন্ত ক্যাবল।\n২. রিং মেইন সিস্টেম: লুপ পদ্ধতির মাধ্যমে নির্ভরযোগ্য বিদ্যুৎ সরবরাহ ও কম ভোল্টেজ ড্রপ নিশ্চিত করে।\n৩. সমভাবে বিস্তৃত লোডের (Uniform Load) ক্ষেত্রে ভোল্টেজ ড্রপ হয় মোট ড্রপের অর্ধেক (১/২ IR)।'
        },
        keyTakeaways: {
          en: [
            'Feeders are designed on current carrying capacity; Distributors are designed strictly on permissible voltage drop.',
            'A distributor with uniformly distributed load has half the voltage drop (0.5 · I · R) of a concentrated load at the far end.',
            'In a distributor fed at both ends, the Point of Minimum Potential receives current from both sides.'
          ],
          hi: [
            'फीडर करंट क्षमता पर और डिस्ट्रीब्यूटर वोल्टेज ड्रॉप पर डिजाइन होते हैं।',
            'यूनिफॉर्म लोड का वोल्टेज ड्रॉप 0.5 IR होता है।',
            'दोनों सिरों से पोषित डिस्ट्रीब्यूटर में न्यूनतम विभव बिंदु पर दोनों ओर से धारा आती है।'
          ],
          bn: [
            'ফিডার ডিজাইন হয় কারেন্ট ধারণক্ষমতার ওপর; ডিস্ট্রিবিউটর ডিজাইন হয় ভোল্টেজ ড্রপের ওপর।',
            'সমভাবে বিস্তৃত লোডের ভোল্টেজ ড্রপ ০.৫ IR হয়।',
            'উভয় প্রান্ত থেকে বিদ্যুৎ সরবরাহকৃত ডিস্ট্রিবিউটরে সর্বনিম্ন বিভব বিন্দুতে দুই দিক থেকেই কারেন্ট প্রবেশ করে।'
          ]
        },
        formulas: [
          {
            id: 'f-dist-uniform',
            name: { en: 'Uniform Load Voltage Drop', hi: 'यूनिफॉर्म लोड वोल्टेज ड्रॉप सूत्र', bn: 'ইউনিফর্ম লোড ভোল্টেজ ড্রপ সূত্র' },
            formula: '\\Delta V = \\frac{1}{2} i \\cdot r \\cdot l^2 = \\frac{1}{2} I_{\\text{total}} \\cdot R_{\\text{total}}',
            description: {
              en: 'i = load current per meter (A/m), r = resistance per meter (Ω/m), l = length of distributor.',
              hi: 'i = प्रति मीटर करंट, r = प्रति मीटर प्रतिरोध, l = लंबाई।',
              bn: 'i = প্রতি মিটারে কারেন্ট, r = প্রতি মিটারে রেজিস্ট্যান্স, l = ডিস্ট্রিবিউটরের দৈর্ঘ্য।'
            }
          }
        ],
        solvedExamples: [
          {
            id: 'ex-dist-calc-1',
            problem: {
              en: 'A 2-wire DC distributor AB 500 meters long is fed at end A at 250 V. It is loaded uniformly at 1.0 A/meter along its entire length. In addition, concentrated loads of 50 A and 80 A are tapped off at 150 m and 350 m from end A. If total loop resistance of the distributor is 0.04 Ω per 100 meters, calculate the voltage at the far end B.',
              hi: '500 मीटर लंबे 2-वायर DC डिस्ट्रीब्यूटर AB को सिरे A पर 250 V पर फीड किया जाता है। इसमें 1.0 A/m का समान लोड और 150m पर 50A व 350m पर 80A का लोड है। लूप प्रतिरोध 0.04 Ω/100m होने पर सिरे B पर वोल्टेज ज्ञात कीजिए।',
              bn: '৫০০ মিটার দীর্ঘ একটি ২-তারের DC ডিস্ট্রিবিউটর AB এর A প্রান্তে ২৫০ V ভোল্টেজ দেওয়া হয়। পুরো দৈর্ঘ্যে ১.০ A/m হারে ইউনিফর্ম লোড এবং A থেকে ১৫০ মি দূরে ৫০ A ও ৩৫০ মি দূরে ৮০ A কনসেনট্রেটেড লোড যুক্ত। লাইনের রেজিস্ট্যান্স ০.০৪ Ω/১০০ মি হলে B প্রান্তের ভোল্টেজ নির্ণয় করুন।'
            },
            solution: {
              en: 'Step 1: Resistance per meter r = 0.04 Ω / 100 m = 0.0004 Ω/m\nStep 2: Voltage drop due to uniformly distributed load = 0.5 × i × r × L² = 0.5 × 1.0 × 0.0004 × (500)² = 0.0002 × 250,000 = 50.0 V\nStep 3: Voltage drop due to concentrated load at 150 m (50 A) = 50 A × (150 m × 0.0004 Ω/m) = 50 × 0.06 = 3.0 V\nStep 4: Voltage drop due to concentrated load at 350 m (80 A) = 80 A × (350 m × 0.0004 Ω/m) = 80 × 0.14 = 11.2 V\nStep 5: Total voltage drop at end B = 50.0 + 3.0 + 11.2 = 64.2 V\nVoltage at end B VB = VA - Total Drop = 250 V - 64.2 V = 185.8 V',
              hi: 'चरण 1: r = 0.0004 Ω/m\nचरण 2: यूनिफॉर्म लोड ड्रॉप = 0.5 × 1 × 0.0004 × 500² = 50 V\nचरण 3: 50A लोड ड्रॉप = 50 × (150 × 0.0004) = 3.0 V\nचरण 4: 80A लोड ड्रॉप = 80 × (350 × 0.0004) = 11.2 V\nचरण 5: कुल ड्रॉप = 64.2 V ⇒ VB = 250 - 64.2 = 185.8 V',
              bn: 'ধাপ ১: প্রতি মিটারে রেজিস্ট্যান্স r = ০.০০০৪ Ω/মি\nধাপ ২: ইউনিফর্ম লোড ড্রপ = ০.৫ × ১ × ০.০০০৪ × ৫০০² = ৫০ V\nধাপ ৩: ৫০A লোড ড্রপ = ৫০ × (১৫০ × ০.০০০৪) = ৩.০ V\nধাপ ৪: ৮০A লোড ড্রপ = ৮০ × (৩৫০ × ০.০০০৪) = ১১.২ V\nধাপ ৫: মোট ড্রপ = ৬৪.২ V ⇒ VB = ২৫০ - ৬৪.২ = ১৮৫.৮ V'
            },
            givenValues: { 'Feeding Voltage': '250 V', 'Length': '500 m', 'Uniform Load': '1.0 A/m', 'Resistance': '0.04 Ω/100m' },
            finalAnswer: {
              en: 'Total Voltage Drop = 64.2 V, Voltage at Far End B = 185.8 V',
              hi: 'कुल वोल्टेज ड्रॉप = 64.2 V, सिरे B पर वोल्टेज = 185.8 V',
              bn: 'মোট ভোল্টেজ ড্রপ = ৬৪.২ V, B প্রান্তের ভোল্টেজ = ১৮৫.৮ V'
            }
          }
        ],
        mcqs: [
          {
            id: 'mcq-dist-1',
            question: {
              en: 'Which criterion is the PRIMARY factor used to size and design a power distributor?',
              hi: 'विद्युत डिस्ट्रीब्यूटर (Distributor) का आकार निर्धारित करने का मुख्य आधार क्या है?',
              bn: 'একটি বিদ্যুৎ ডিস্ট্রিবিউটর সাইজিং করার ক্ষেত্রে প্রধান বিবেচ্য বিষয় কোনটি?'
            },
            options: [
              { id: 'opt-1', text: { en: 'Permissible voltage drop limit', hi: 'अनुमेय वोल्टेज ड्रॉप की सीमा', bn: 'অনুমোদিত ভোল্টেজ ড্রপ সীমা' } },
              { id: 'opt-2', text: { en: 'Current carrying capacity only', hi: 'केवल करंट वहन क्षमता', bn: 'কেবল কারেন্ট বহন ক্ষমতা' } },
              { id: 'opt-3', text: { en: 'Corona discharge loss', hi: 'कोरोना डिस्चार्ज हानि', bn: 'করোনা লস' } },
              { id: 'opt-4', text: { en: 'Skin depth', hi: 'स्किन डेप्थ', bn: 'স্কিন ডেপথ' } }
            ],
            correctOptionId: 'opt-1',
            explanation: {
              en: 'Consumers require standard supply voltage within ±5%. Because tappings occur along the distributor, voltage drops progressively accumulate and govern conductor cross-section.',
              hi: 'उपभोक्ताओं को स्थिर वोल्टेज देने के लिए डिस्ट्रीब्यूटर को वोल्टेज ड्रॉप सीमा के आधार पर डिजाइन किया जाता है।',
              bn: 'গ্রাহকের প্রান্তে ভোল্টেজ নির্দিষ্ট সীমার (±৫%) মধ্যে রাখতে ডিস্ট্রিবিউটর ভোল্টেজ ড্রপের ওপর ভিত্তি করে ডিজাইন করা হয়।'
            }
          }
        ]
      }
    },
    {
      id: 'ps-tp12-substations-earthing',
      chapterId: 'ps-ch3-distribution',
      order: 3,
      level: 'Diploma',
      title: {
        en: '12. Substation Bus Schemes & Neutral Grounding Methods',
        hi: '12. सबस्टेशन बसबार स्कीम्स एवं न्यूट्रल ग्राउंडिंग विधियाँ',
        bn: '১২. সাবস্টেশন বাসবার স্কিম ও নিউট্রাল আর্থিং পদ্ধতি'
      },
      description: {
        en: 'Single busbar, sectionalized busbar, duplicate busbar, breaker-and-a-half schemes, Gas Insulated Substations (GIS), and Solid/Resistance/Peterson coil (Arc Suppression Coil) grounding.',
        hi: 'सिंगल बसबार, डबल बसबार, ब्रेकर-एंड-हाफ स्कीम, GIS सबस्टेशन और न्यूट्रल ग्राउंडिंग विधियाँ।',
        bn: 'সিঙ্গেল বাসবার, ডাবল বাসবার, ব্রেকার-অ্যান্ড-হাফ স্কিম, GIS সাবস্টেশন এবং সলিড ও পিটারসন কয়েল আর্থিং।'
      },
      lesson: {
        id: 'lesson-ps-tp12',
        topicId: 'ps-tp12-substations-earthing',
        title: {
          en: 'Substation Bus Configurations & Resonant Peterson Coil Grounding',
          hi: 'सबस्टेशन बसबार विन्यास एवं पीटरसन कॉइल ग्राउंडिंग',
          bn: 'সাবস্টেশন বাস কনফিগারেশন ও পিটারসন কয়েল রেজোন্যান্ট আর্থিং'
        },
        description: {
          en: 'High-voltage substation layouts, SF6 GIS technology, arcing grounds, and resonant neutral earthing.',
          hi: 'ईएचवी सबस्टेशन लेआउट, जीआईएस (GIS) तकनीक, आर्किंग ग्राउंड्स एवं न्यूट्रल अर्थिंग विधियाँ।',
          bn: 'EHV সাবস্টেশন লেআউট, SF6 GIS প্রযুক্তি, আর্কিং গ্রাউন্ড এবং রেজোন্যান্ট নিউট্রাল আর্থিং।'
        },
        detailedExplanation: {
          en: '1. Substation Busbar Schemes:\n- Single Bus Scheme: Low cost, but total outage on busbar maintenance/fault.\n- Duplicate (Double) Bus Scheme: Two buses connected via a Bus Coupler breaker. Enables seamless transfer of circuits during maintenance without power interruption.\n- Breaker-and-a-Half Scheme: Three circuit breakers connect two distinct circuits between two main buses (1.5 breakers per circuit). Most reliable layout for 400 kV/765 kV switchyards; any breaker can be isolated without dropping a line.\n- Gas Insulated Substation (GIS): Encapsulates high-voltage conductors in pressurized SF6 gas enclosures, reducing substation physical footprint by 85–90% compared to Air Insulated Substations (AIS).\n\n2. Neutral Grounding Methods & Arcing Grounds:\nIn ungrounded systems, a single line-to-ground fault creates a capacitive charging current through the healthy phases. When the fault arc extinguishes at current zero and restrikes, repeated capacitive overvoltages (up to 4 to 5 times normal phase voltage) destroy insulation—a dangerous phenomenon known as Arcing Grounds.\n- Solid Grounding: Neutral solidly grounded; converts dangerous arcing ground into heavy fault current that triggers protective relays instantaneously.\n- Peterson Coil Grounding (Resonant Neutral Grounding): An iron-cored tapped inductor (Peterson coil with inductance $L_p$) is connected between generator/transformer neutral and ground. The inductive fault current $I_L = \\frac{V_{ph}}{\\omega L_p}$ opposes and exactly cancels the leading capacitive earth fault current $I_C = 3 \\omega C_0 V_{ph}$:\n$$L_p = \\frac{1}{3 \\omega^2 C_0}$$\nThis extinguishes the arc spontaneously without interrupting power!',
          hi: '1. बसबार स्कीम्स: डबल बसबार एवं ब्रेकर-एंड-हाफ स्कीम (400 kV पर प्रयुक्त) उच्चतम विश्वसनीयता प्रदान करती हैं। GIS सबस्टेशन SF6 गैस द्वारा 85% जगह बचाते हैं।\n2. आर्किंग ग्राउंड्स: अनग्राउंडेड सिस्टम में कैपेसिटिव करंट से 4-5 गुना ओवर-वोल्टेज उत्पन्न होती है।\n3. पीटरसन कॉइल ग्राउंडिंग: न्यूट्रल में प्रेरकत्व $L_p = \\frac{1}{3\\omega^2 C_0}$ लगाकर कैपेसिटिव फॉल्ट करंट को पूरी तरह निष्प्रभावी कर दिया जाता है जिससे आर्क स्वतः बुझ जाती है।',
          bn: '১. বাসবার স্কিম: ডাবল বাসবার ও ব্রেকার-অ্যান্ড-হাফ স্কিম সর্বোচ্চ নির্ভরযোগ্যতা প্রদান করে। SF6 GIS সাবস্টেশন ৮৫-৯০% জায়গা সাশ্রয় করে।\n২. আর্কিং গ্রাউন্ডস: আনগ্রাউন্ডেড সিস্টেমে ফল্ট আর্কের বারবার রিস্ট্রাইকের কারণে ৪-৫ গুণ ওভার-ভোল্টেজ তৈরি হয়।\n৩. পিটারসন কয়েল আর্থিং: নিউট্রালে $L_p = \\frac{1}{3\\omega^2 C_0}$ টিউন করা ইন্ডাক্টর যুক্ত করে ফল্টের ক্যাপাসিটিভ কারেন্টকে সরাসরি বাতিল করে আর্ক নির্বাপিত করা হয়।'
        },
        keyTakeaways: {
          en: [
            'Breaker-and-a-half bus scheme uses 3 circuit breakers for every 2 transmission circuits (1.5 breakers/circuit).',
            'Arcing grounds in ungrounded systems cause catastrophic insulation breakdown due to capacitive voltage surges.',
            'Peterson Coil resonant inductance condition: L = 1 / (3 · ω² · C0) where C0 is phase-to-ground capacitance.'
          ],
          hi: [
            'ब्रेकर-एंड-हाफ स्कीम में प्रति 2 सर्किट 3 सर्किट ब्रेकर होते हैं।',
            'अनग्राउंडेड सिस्टम में आर्किंग ग्राउंड से अत्यधिक ओवर-वोल्टेज उत्पन्न होती है।',
            'पीटरसन कॉइल सूत्र: L = 1 / (3 ω² C0)।'
          ],
          bn: [
            'ব্রেকার-অ্যান্ড-হাফ স্কিমে প্রতি ২টি সার্কিটের জন্য ৩টি ব্রেকার থাকে।',
            'আনগ্রাউন্ডেড সিস্টেমে আর্কিং গ্রাউন্ডের ফলে মারাত্মক ওভার-ভোল্টেজ সৃষ্টি হয়।',
            'পিটারসন কয়েলের টিউনিং শর্ত: L = ১ / (৩ · ω² · C0)।'
          ]
        },
        formulas: [
          {
            id: 'f-peterson-coil',
            name: { en: 'Peterson Coil Resonant Inductance', hi: 'पीटरसन कॉइल प्रेरकत्व सूत्र', bn: 'পিটারসন কয়েল ইন্ডাকট্যান্স সূত্র' },
            formula: 'L_p = \\frac{1}{3 \\omega^2 C_0} = \\frac{1}{3 (2\\pi f)^2 C_0}',
            description: {
              en: 'Lp = Peterson coil inductance (Henrys), C0 = Capacitance to ground per phase (Farads), f = Frequency (Hz).',
              hi: 'Lp = पीटरसन कॉइल इंडक्टेंस, C0 = प्रति फेज ग्राउंड धारिता।',
              bn: 'Lp = পিটারসন কয়েলের ইন্ডাকট্যান্স, C0 = প্রতি ফেজের গ্রাউন্ড ক্যাপাসিট্যান্স।'
            }
          }
        ],
        solvedExamples: [
          {
            id: 'ex-peterson-calc-1',
            problem: {
              en: 'A 33 kV, 50 Hz 3-phase transmission line has a capacitance to ground of each conductor equal to 4.5 μF. Determine the inductance and kVA rating of the Peterson Arc Suppression Coil required for complete neutralization of the fault current.',
              hi: 'एक 33 kV, 50 Hz 3-फेज लाइन में प्रत्येक तार की ग्राउंड धारिता 4.5 μF है। फॉल्ट करंट को पूरी तरह संतुलित करने के लिए पीटरसन कॉइल का प्रेरकत्व (Lp) और kVA रेटिंग ज्ञात कीजिए।',
              bn: 'একটি ৩৩ kV, ৫০ Hz ৩-ফেজ লাইনে প্রতি ফেজের গ্রাউন্ড ক্যাপাসিট্যান্স ৪.৫ μF। ফল্ট কারেন্ট সম্পূর্ণ নিষ্ক্রিয় করতে প্রয়োজনীয় পিটারসন কয়েলের ইন্ডাকট্যান্স (Lp) ও kVA রেটিং নির্ণয় করুন।'
            },
            solution: {
              en: 'Step 1: Given f = 50 Hz, ω = 2π × 50 = 314.16 rad/s, C0 = 4.5 × 10⁻⁶ F\nStep 2: Peterson coil inductance Lp = 1 / (3 · ω² · C0)\nLp = 1 / [3 × (314.16)² × (4.5 × 10⁻⁶)] = 1 / [3 × 98696 × 4.5 × 10⁻⁶] = 1 / 1.3324 = 0.7505 Henry\nStep 3: Fault Phase Voltage Vph = 33,000 / √3 = 19,052.5 V\nPeterson Coil current IL = Vph / (ω · Lp) = 19,052.5 / (314.16 × 0.7505) = 19,052.5 / 235.78 = 80.80 A\nStep 4: kVA Rating = (Vph × IL) / 1000 = (19,052.5 × 80.80) / 1000 = 1,539.4 kVA ≈ 1.54 MVA',
              hi: 'चरण 1: Lp = 1 / (3 × (2π×50)² × 4.5×10⁻⁶) = 0.751 H\nचरण 2: Vph = 33 kV / √3 = 19.05 kV\nचरण 3: कॉइल करंट = 19052.5 / (314.16 × 0.751) = 80.8 A\nचरण 4: रेटिंग = 19.05 kV × 80.8 A = 1,539.4 kVA',
              bn: 'ধাপ ১: Lp = ১ / (৩ × (২π×৫০)² × ৪.৫×১০⁻⁶) = ০.৭৫১ হেনরি\nধাপ ২: Vph = ৩৩ kV / √৩ = ১৯.০৫ kV\nধাপ ৩: কয়েল কারেন্ট = ১৯০৫২.৫ / (৩১৪.১৬ × ০.৭৫১) = ৮০.৮ A\nধাপ ৪: রেটিং = ১৯.০৫ kV × ৮০.৮ A = ১৫৩৯.৪ kVA'
            },
            givenValues: { 'Line Voltage': '33 kV', 'Capacitance C0': '4.5 μF', 'Frequency': '50 Hz' },
            finalAnswer: {
              en: 'Peterson Coil Inductance Lp = 0.751 H, Rating = 1,539.4 kVA (1.54 MVA)',
              hi: 'पीटरसन कॉइल प्रेरकत्व = 0.751 H, रेटिंग = 1,539.4 kVA',
              bn: 'পিটারসন কয়েল ইন্ডাকট্যান্স Lp = ০.৭৫১ H, রেটিং = ১৫৩৯.৪ kVA'
            }
          }
        ],
        mcqs: [
          {
            id: 'mcq-sub-1',
            question: {
              en: 'Which substation busbar arrangement provides maximum operational reliability by allowing any circuit breaker to be maintained without interrupting power to any circuit?',
              hi: 'कौन सी सबस्टेशन बसबार व्यवस्था किसी भी सर्किट में बाधा डाले बिना किसी भी सर्किट ब्रेकर के रखरखाव की अनुमति देकर अधिकतम विश्वसनीयता प्रदान करती है?',
              bn: 'কোন সাবস্টেশন বাসবার স্কিমে যেকোনো সার্কিট ব্রেকার মেইনটেন্যান্স করার সময় কোনো ফিডারের বিদ্যুৎ সরবরাহ বন্ধ করতে হয় না?'
            },
            options: [
              { id: 'opt-1', text: { en: 'Breaker-and-a-half scheme', hi: 'ब्रेकर-एंड-हाफ स्कीम (Breaker-and-a-half)', bn: 'ব্রেকার-অ্যান্ড-হাফ স্কিম (Breaker-and-a-half)' } },
              { id: 'opt-2', text: { en: 'Single busbar with sectionalizer', hi: 'सेक्शनलाइज़र युक्त सिंगल बस', bn: 'সেকশনালাইজড সিঙ্গেল বাস' } },
              { id: 'opt-3', text: { en: 'Radial bus', hi: 'रेडियल बस', bn: 'রেডিয়াল বাস' } },
              { id: 'opt-4', text: { en: 'Transfer bus scheme', hi: 'ट्रांसफर बस स्कीम', bn: 'ট্রান্সফার বাস স্কিম' } }
            ],
            correctOptionId: 'opt-1',
            explanation: {
              en: 'In a breaker-and-a-half scheme, three breakers are shared between two circuits across two main buses, ensuring no line drops out during breaker tripping or overhaul.',
              hi: 'ब्रेकर-एंड-हाफ स्कीम में दो सर्किटों के बीच तीन ब्रेकर होते हैं जिससे किसी भी ब्रेकर को अलग करने पर बिजली बंद नहीं होती।',
              bn: 'ব্রেকার-অ্যান্ড-হাফ স্কিমে ২টি সার্কিটের জন্য ৩টি ব্রেকার থাকায় যেকোনো ব্রেকার মেরামতকালে বিদ্যুৎ প্রবাহ নিরবচ্ছিন্ন থাকে।'
            }
          }
        ]
      }
    },
    {
      id: 'ps-tp13-underground-cables',
      chapterId: 'ps-ch3-distribution',
      order: 4,
      level: 'Engineering',
      title: {
        en: '13. Underground Cables: Construction, Grading & Thermal Rating',
        hi: '13. भूमिगत केबल: निर्माण, ग्रेडिंग एवं थर्मल रेटिंग',
        bn: '১৩. আন্ডারগ্রাউন্ড ক্যাবল: গঠন, গ্র্যাডিং ও থার্মাল রেটিং'
      },
      description: {
        en: 'Core, paper/XLPE insulation, lead sheath, armor, capacitance of 3-core belted cables (Cn = Cs + 3Cc), dielectric stress, capacitance grading, and intersheath grading.',
        hi: 'केबल संरचना (कंडक्टर, इंसुलेशन, लेड शीथ, आर्मरिंग), 3-कोर केबल धारिता, कैपेसिटेंस ग्रेडिंग एवं थर्मल करंट क्षमता।',
        bn: 'ক্যাবলের গঠন (কন্ডাক্টর, ইনসুলেশন, লেড শিথ, আর্মারিং), ৩-কোর ক্যাবল ক্যাপাসিট্যান্স, ক্যাপাসিট্যান্স গ্র্যাডিং ও থার্মাল রেটিং।'
      },
      lesson: {
        id: 'lesson-ps-tp13',
        topicId: 'ps-tp13-underground-cables',
        title: {
          en: 'Underground Cable Construction, Dielectric Grading & 3-Core Capacitance',
          hi: 'भूमिगत केबल संरचना, डाइइलेक्ट्रिक ग्रेडिंग एवं 3-कोर धारिता',
          bn: 'আন্ডারগ্রাউন্ড ক্যাবলের গঠন, ডাইইলেক্ট্রিক গ্র্যাডিং ও ৩-কোর ক্যাপাসিট্যান্স'
        },
        description: {
          en: 'Physical layering of power cables, electrostatic stress distribution, and insulation grading techniques.',
          hi: 'पावर केबल की आंतरिक संरचना, इलेक्ट्रोस्टैटिक स्ट्रेस वितरण एवं कैपेसिटेंस ग्रेडिंग।',
          bn: 'পাওয়ার ক্যাবলের স্তরসমূহ, ডাইইলেক্ট্রিক স্ট্রেস বণ্টন ও ক্যাপাসিট্যান্স গ্র্যাডিং।'
        },
        detailedExplanation: {
          en: '1. Underground Cable Construction Layers:\n- Core/Conductor: Tinned copper or aluminum stranded conductors.\n- Insulation: Impregnated paper, PVC, or cross-linked polyethylene (XLPE).\n- Metallic Sheath: Lead or aluminum extrusion to prevent moisture ingress.\n- Bedding: Fibrous jute tape dipped in bitumen protecting the metallic sheath against corrosion.\n- Armoring: Galvanized steel wire/tape providing mechanical puncture protection.\n- Serving: Outer fibrous layer preserving the armor.\n\n2. Dielectric Stress Distribution:\nIn a single-core cable of conductor radius $r$ and inner sheath radius $R$ at operating voltage $V$:\n- Electrostatic stress at radius $x$: $g_x = \\frac{V}{x \\ln(R/r)}$\n- Maximum stress occurs at conductor surface ($x = r$): $g_{max} = \\frac{V}{r \\ln(R/r)}$\n- Minimum stress occurs at outer sheath ($x = R$): $g_{min} = \\frac{V}{R \\ln(R/r)}$\n- For most economical cable sizing ($g_{max}$ minimized for a given $V$ and $R$): $\\frac{R}{r} = e \\approx 2.718$.\n\n3. Cable Grading Techniques:\n- Capacitance Grading: Uses multiple concentric dielectric layers with permittivity decreasing from inside to outside ($\\varepsilon_1 > \\varepsilon_2 > \\varepsilon_3$) such that $\\varepsilon_1 r_1 = \\varepsilon_2 r_2 = \\varepsilon_3 r_3$, achieving uniform electrical stress.\n- Intersheath Grading: Uses metallic intersheaths maintained at fixed intermediate potentials using auxiliary transformer taps.\n\n4. 3-Core Belted Cable Capacitance:\nLet $C_s$ = capacitance of each core to grounded sheath, and $C_c$ = capacitance between any two cores.\n- Capacitance to neutral per phase: $C_n = C_s + 3 C_c$.\n- In standard two-measurement tests: If all cores strapped together to sheath gives $C_a = 3 C_s$, and between two strapped cores and the third to sheath gives $C_b = 2 C_s + 2 C_c$, then $C_n = \\frac{3 C_b - C_a}{2}$.',
          hi: '1. केबल परतें: कोर → इंसुलेशन (XLPE) → लेड शीथ → बेडिंग → आर्मरिंग → सर्विंग।\n2. स्ट्रेस वितरण: अधिकतम स्ट्रेस कंडक्टर की सतह पर ($g_{max} = \\frac{V}{r \\ln(R/r)}$) तथा न्यूनतम शीथ पर होता है। किफायती आकार हेतु $R/r = e = 2.718$।\n3. कैपेसिटेंस ग्रेडिंग: अंदर से बाहर की ओर परमिटिविटी घटाई जाती है ($\\varepsilon_1 > \\varepsilon_2 > \\varepsilon_3$)।\n4. 3-कोर केबल धारिता: $C_n = C_s + 3 C_c$।',
          bn: '১. ক্যাবলের স্তর: কোর → ইনসুলেশন (XLPE) → মেটালিক শিথ → বেডিং → আর্মারিং → সার্ভিং।\n২. ডাইইলেক্ট্রিক স্ট্রেস: কন্ডাক্টরের পৃষ্ঠে সর্বোচ্চ স্ট্রেস ($g_{max} = \\frac{V}{r \\ln(R/r)}$) এবং শিথে সর্বনিম্ন। সাশ্রয়ী আকারের অনুপাত $R/r = e = ২.৭১৮$।\n৩. ক্যাপাসিট্যান্স গ্র্যাডিং: ভেতর থেকে বাইরে পারমিটিভিটি কমানো হয় ($\\varepsilon_1 > \\varepsilon_2 > \\varepsilon_3$) যাতে স্ট্রেস সমান থাকে।\n৪. ৩-কোর ক্যাবল ক্যাপাসিট্যান্স: প্রতি ফেজে $C_n = C_s + ৩ C_c$।'
        },
        keyTakeaways: {
          en: [
            'Maximum dielectric stress occurs at the conductor surface (x = r); minimum occurs at the outer sheath (x = R).',
            'Most economical cable dimension: Overall inner sheath radius R relates to conductor radius r as R/r = e = 2.718.',
            '3-Core Belted Cable equivalent line-to-neutral capacitance is Cn = Cs + 3·Cc.'
          ],
          hi: [
            'अधिकतम डाइइलेक्ट्रिक स्ट्रेस कंडक्टर की सतह पर होता है।',
            'आर्थिक दृष्टि से सबसे अनुकूल अनुपात R/r = 2.718 (e) होता है।',
            '3-कोर केबल की न्यूट्रल धारिता: Cn = Cs + 3 Cc।'
          ],
          bn: [
            'সর্বোচ্চ ডাইইলেক্ট্রিক স্ট্রেস কন্ডাক্টরের পৃষ্ঠে (x = r) ঘটে।',
            'সবচেয়ে সাশ্রয়ী ক্যাবল ডাইমেনশন অনুপাত R/r = e = ২.৭১৮।',
            '৩-কোর বেল্টেড ক্যাবলের নিউট্রাল ক্যাপাসিট্যান্স হলো Cn = Cs + ৩·Cc।'
          ]
        },
        formulas: [
          {
            id: 'f-cable-stress',
            name: { en: 'Maximum Dielectric Stress (gmax)', hi: 'अधिकतम डाइइलेक्ट्रिक स्ट्रेस', bn: 'সর্বোচ্চ ডাইইলেক্ট্রিক স্ট্রেস' },
            formula: 'g_{\\text{max}} = \\frac{V}{r \\ln\\left( \\frac{R}{r} \\right)}, \\quad g_{\\text{min}} = \\frac{V}{R \\ln\\left( \\frac{R}{r} \\right)}',
            description: {
              en: 'V = Operating voltage across insulation, r = Conductor radius, R = Inner radius of metallic sheath.',
              hi: 'कंडक्टर की सतह पर अधिकतम वोल्टेज प्रवणता।',
              bn: 'কন্ডাক্টরের বহির্তলে সর্বোচ্চ ভোল্টেজ গ্রেডিয়েন্ট সমীকরণ।'
            }
          },
          {
            id: 'f-cable-cn',
            name: { en: '3-Core Belted Cable Capacitance to Neutral', hi: '3-कोर केबल न्यूट्रल धारिता', bn: '৩-কোর ক্যাবলের নিউট্রাল ক্যাপাসিট্যান্স' },
            formula: 'C_n = C_s + 3 C_c',
            description: {
              en: 'Cs = Capacitance of each conductor to metallic sheath, Cc = Capacitance between any two conductors.',
              hi: 'Cs = कोर से शीथ धारिता, Cc = कोर से कोर धारिता।',
              bn: 'Cs = কন্ডাক্টর থেকে শিথ ক্যাপাসিট্যান্স, Cc = দুটি কন্ডাক্টরের মধ্যবর্তী ক্যাপাসিট্যান্স।'
            }
          }
        ],
        solvedExamples: [
          {
            id: 'ex-cable-stress-1',
            problem: {
              en: 'A 66 kV single-core lead-sheathed underground cable has a conductor diameter of 2.0 cm and an internal sheath diameter of 5.4 cm. Calculate: (a) Maximum dielectric stress, and (b) Minimum dielectric stress.',
              hi: 'एक 66 kV सिंगल-कोर भूमिगत केबल में कंडक्टर का व्यास 2.0 cm और शीथ का आंतरिक व्यास 5.4 cm है। (a) अधिकतम और (b) न्यूनतम डाइइलेक्ट्रिक स्ट्रेस ज्ञात कीजिए।',
              bn: 'একটি ৬৬ kV সিঙ্গেল-কোর আন্ডারগ্রাউন্ড ক্যাবলের কন্ডাক্টরের ব্যাস ২.০ সেমি এবং শিথের অভ্যন্তরীণ ব্যাস ৫.৪ সেমি। নির্ণয় করুন: (ক) সর্বোচ্চ ডাইইলেক্ট্রিক স্ট্রেস, এবং (খ) সর্বনিম্ন ডাইইলেক্ট্রিক স্ট্রেস।'
            },
            solution: {
              en: 'Step 1: Radius of conductor r = 2.0 / 2 = 1.0 cm\nRadius of sheath R = 5.4 / 2 = 2.7 cm\nStep 2: Operating line-to-ground voltage V = 66 kV / √3 = 38.105 kV (rms)\nStep 3: ln(R / r) = ln(2.7 / 1.0) = ln(2.7) = 0.99325\nStep 4: Maximum stress g_max = V / [r · ln(R/r)] = 38.105 / (1.0 × 0.99325) = 38.36 kV/cm (rms)\nStep 5: Minimum stress g_min = V / [R · ln(R/r)] = 38.105 / (2.7 × 0.99325) = 14.21 kV/cm (rms)',
              hi: 'चरण 1: r = 1.0 cm, R = 2.7 cm, V = 66 / √3 = 38.105 kV\nचरण 2: ln(R/r) = ln(2.7) = 0.9933\nचरण 3: g_max = 38.105 / (1.0 × 0.9933) = 38.36 kV/cm\nचरण 4: g_min = 38.105 / (2.7 × 0.9933) = 14.21 kV/cm',
              bn: 'ধাপ ১: r = ১.০ সেমি, R = ২.৭ সেমি, V = ৬৬ / √৩ = ৩৮.১০৫ kV\nধাপ ২: ln(R/r) = ln(২.৭) = ০.৯৯৩৩\nধাপ ৩: g_max = ৩৮.১০৫ / (১.০ × ০.৯৯৩৩) = ৩৮.৩৬ kV/cm\nধাপ ৪: g_min = ৩৮.১০৫ / (২.৭ × ০.৯৯৩৩) = ১৪.২১ kV/cm'
            },
            givenValues: { 'Voltage': '66 kV', 'Conductor Diameter': '2.0 cm', 'Sheath Diameter': '5.4 cm' },
            finalAnswer: {
              en: 'g_max = 38.36 kV/cm (at core), g_min = 14.21 kV/cm (at sheath)',
              hi: 'g_max = 38.36 kV/cm (कोर पर), g_min = 14.21 kV/cm (शीथ पर)',
              bn: 'g_max = ৩৮.৩৬ kV/cm (কন্ডাক্টরে), g_min = ১৪.২১ kV/cm (শিথে)'
            }
          }
        ],
        mcqs: [
          {
            id: 'mcq-cable-1',
            question: {
              en: 'For the most economical design of a single-core underground cable to withstand a given voltage with minimum insulation stress, the ratio of inner sheath diameter (D) to conductor diameter (d) must be equal to:',
              hi: 'न्यूनतम इंसुलेशन स्ट्रेस के साथ सबसे किफायती सिंगल-कोर केबल के लिए शीथ व्यास (D) और कंडक्टर व्यास (d) का अनुपात कितना होना चाहिए?',
              bn: 'সর্বনিম্ন ডাইইলেক্ট্রিক স্ট্রেসে সবচেয়ে সাশ্রয়ী সিঙ্গেল-কোর ক্যাবল ডিজাইনের জন্য শিথের ব্যাস (D) ও কন্ডাক্টরের ব্যাস (d) এর অনুপাত কত হতে হয়?'
            },
            options: [
              { id: 'opt-1', text: { en: 'e ≈ 2.718', hi: 'e ≈ 2.718 (नेचुरल लॉग बेस)', bn: 'e ≈ ২.৭১৮' } },
              { id: 'opt-2', text: { en: '√3 ≈ 1.732', hi: '√3 ≈ 1.732', bn: '√৩ ≈ ১.৭৩২' } },
              { id: 'opt-3', text: { en: 'π ≈ 3.141', hi: 'π ≈ 3.141', bn: 'π ≈ ৩.১৪১' } },
              { id: 'opt-4', text: { en: '2.0', hi: '2.0', bn: '২.০' } }
            ],
            correctOptionId: 'opt-1',
            explanation: {
              en: 'Differentiating g_max = V / (r · ln(R/r)) with respect to r and equating to zero yields ln(R/r) = 1, meaning R/r = D/d = e ≈ 2.718.',
              hi: 'g_max का अवकलन करने पर न्यूनतम स्ट्रेस के लिए R/r = e = 2.718 प्राप्त होता है।',
              bn: 'g_max এর ডিফারেন্সিয়েশন করলে সর্বনিম্ন স্ট্রেসের জন্য R/r = D/d = e ≈ ২.৭১৮ পাওয়া যায়।'
            }
          }
        ]
      }
    }
  ]
};
