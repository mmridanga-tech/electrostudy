import { Lesson } from '../types';

export const LESSON_AMPERE_CIRCUITAL_LAW: Lesson = {
  id: 'lsn-ch11-ampere-law',
  topicId: 'ch11-ampere-law',
  chapterId: 'ch-em-waves',
  order: 3,
  title: {
    en: "Ampere's Circuital Law & Magnetic Circulation",
    hi: 'एम्पीयर का परिपथीय नियम एवं चुंबकीय परिसंचरण',
    bn: 'অ্যাম্পিয়ারের বর্তনী সূত্র ও চুম্বকীয় সঞ্চালন'
  },
  description: {
    en: "Comprehensive analysis of line integrals of magnetic fields, Amperian loops, enclosed conduction current, field distributions for conductors, solenoids, and toroids, the B vs H distinction, and magnetostatic limitations.",
    hi: 'चुंबकीय क्षेत्रों के रेखीय समाकल, एम्पीयर लूप, परिबद्ध चालन धारा, चालकों, परिनालिकाओं एवं टोरोइड के क्षेत्र वितरण, B बनाम H का अंतर, तथा चुंबकस्थैतिकी की सीमाओं का विस्तृत अध्ययन।',
    bn: 'চৌম্বক ক্ষেত্রের রৈখিক সমাকলন, অ্যাম্পিয়ার লুপ, আবদ্ধ পরিবাহী প্রবাহ, পরিবাহী, সলিনয়েড ও টরয়েডের ক্ষেত্র বিন্যাস, B বনাম H এর পার্থক্য এবং স্থির চুম্বকবিদ্যার সীমাবদ্ধতার বিশদ পাঠ।'
  },
  estimatedMinutes: 35,
  easyExplanation: {
    en: "When an electric current flows through a wire, it whips up a swirling vortex of magnetic field lines circling around it, like water whirling down a drain. Ampere's Circuital Law gives us an elegant way to calculate this magnetic swirl: if you walk along any closed loop (an Amperian loop) and sum up the magnetic field along your path, the total circulation equals the net electric current piercing through the loop multiplied by the magnetic permeability: ∮ B · dl = μ₀ I_enclosed (or in terms of magnetic field intensity, ∮ H · dl = I_enclosed). This powerful law allows engineers to design electromagnets, electric motor windings, solenoids, and toroidal inductors with high mathematical precision.",
    hi: 'जब किसी तार से विद्युत धारा बहती है, तो वह अपने चारों ओर एक चुंबकीय भंवर बनाती है। एम्पीयर का परिपथीय नियम इस चुंबकीय चक्र की गणना करने का एक आसान तरीका देता है: यदि आप किसी बंद लूप (एम्पीयर लूप) के अनुदिश चलते हैं और पथ के प्रत्येक बिंदु पर चुंबकीय क्षेत्र का योग करते हैं, तो कुल परिसंचरण लूप से होकर गुजरने वाली कुल धारा के बराबर होता है: ∮ H · dl = I_enclosed। यह नियम इंजीनियरों को विद्युत मोटर, परिनालिका (सोलेनॉइड) और ट्रांसफार्मर के चुंबकीय कोर डिजाइन करने में मदद करता है।',
    bn: 'যখন কোনো তারের মধ্য দিয়ে তড়িৎ প্রবাহিত হয়, তখন এটি তার চারপাশে বলরেখার একটি ঘূর্ণায়মান চৌম্বক ক্ষেত্র তৈরি করে। অ্যাম্পিয়ারের বর্তনী সূত্র এই চৌম্বক সঞ্চালন পরিমাপের একটি চমৎকার পদ্ধতি: আপনি যদি কোনো বদ্ধ লুপ বরাবর হেঁটে যান এবং প্রতি অংশে চৌম্বক ক্ষেত্রের মান যোগ করেন, তবে মোট সঞ্চালন লুপ ভেদ করে যাওয়া মোট তড়িৎ প্রবাহের সমান হবে: ∮ H · dl = I_enclosed (বা ∮ B · dl = μ₀ I_enclosed)। এই সূত্রটি মোটর, জেনারেটর, সলিনয়েড এবং টরয়েডাল ইন্ডাক্টর নিখুঁতভাবে নকশা করতে ব্যবহৃত হয়।'
  },
  detailedExplanation: {
    en: "Ampere's Circuital Law is the magnetic analogue of Gauss's law in electrostatics. It connects the macroscopic line integral (circulation) of the magnetic field vector around a closed Amperian contour C to the total net conduction current I_enc passing through any open surface S bounded by C:\n\n∮_C H · dl = I_enc = ∫_S J · dA\nor in free space using flux density B: ∮_C B · dl = μ0 I_enc.\n\nApplying Stokes' Theorem converts the contour line integral into a surface integral of curl: ∮_C H · dl = ∫_S (∇ × H) · dA = ∫_S J · dA. Because this holds for any arbitrary bounding surface, the differential (point) form of Ampere's law is derived: ∇ × H = J, or ∇ × B = μ0 J.\n\nDistinction Between B and H:\n• H (Magnetic Field Intensity, A/m): Produced strictly by free macroscopic conduction currents, independent of the surrounding magnetic material medium.\n• B (Magnetic Flux Density, Tesla): The actual force-exerting field inside the medium, which includes both the external drive and the internal microscopic alignment of atomic magnetic dipoles: B = μ H = μ0(H + M), where M is magnetization.\n\nKey Engineering Derivations Using Symmetrical Amperian Loops:\n1. Long Cylindrical Solid Conductor (radius R, carrying current I):\n   - Outside (r ≥ R): H(2π r) = I => H = I / (2π r) and B = μ0 I / (2π r).\n   - Inside (r < R, uniform current density J = I / π R²): Enclosed current I_enc = I (r² / R²). Thus H(2π r) = I(r² / R²) => H = I r / (2π R²) and B = μ0 I r / (2π R²). The internal field grows linearly from zero at the center to maximum at the conductor surface.\n2. Ideal Long Solenoid (n turns/m, carrying current I):\n   Inside the core, the field is axial and uniform: B = μ0 n I, H = n I. Outside the ideal solenoid, B ≈ 0.\n3. Toroid (circular ring with N total turns and mean radius r):\n   H(2π r) = N I => H = N I / (2π r) and B = μ N I / (2π r).\n\nLimitations: Classical Ampere's circuital law applies strictly to steady-state magnetostatic conditions where currents are continuous and closed (∇ · J = 0). When electric fields change with time (such as during capacitor charging), Ampere's law fails because the divergence of a curl is mathematically zero (∇ · (∇ × H) = 0), but the continuity equation dictates ∇ · J = -∂ρ/∂t ≠ 0. This limitation prompted James Clerk Maxwell to add the displacement current correction.",
    hi: 'एम्पीयर का परिपथीय नियम स्थिरवैद्युतिकी के गॉस नियम का चुंबकीय प्रतिरूप है। यह किसी बंद समोच्च C के चारों ओर चुंबकीय क्षेत्र सदिश के रेखीय समाकल (परिसंचरण) को परिबद्ध कुल चालन धारा I_enc से जोड़ता है:\n∮_C H · dl = I_enc = ∫_S J · dA\n\nस्टोक्स प्रमेय लागू करने पर इसका अवकल (बिंदु) रूप प्राप्त होता है: ∇ × H = J अथवा ∇ × B = μ0 J।\n\nB और H में अंतर:\n• H (A/m): केवल मुक्त चालन धाराओं द्वारा उत्पन्न होता है, माध्यम से स्वतंत्र है।\n• B (टेस्ला): माध्यम के भीतर वास्तविक चुंबकीय फ्लक्स घनत्व है: B = μ H = μ0(H + M)।\n\nसममिति के अनुप्रयोग:\n1. लंबा बेलनाकार ठोस चालक (त्रिज्या R):\n   - बाहर (r ≥ R): B = μ0 I / (2π r)\n   - अंदर (r < R): B = μ0 I r / (2π R²)\n2. लंबी परिनालिका (Solenoid): B = μ0 n I\n3. टोरोइड (Toroid): B = μ N I / (2π r)\n\nसीमाएं: यह नियम केवल स्थिर (DC) धाराओं के लिए मान्य है। समय-परिवर्ती क्षेत्रों (जैसे संधारित्र आवेशन) में यह विफल हो जाता है, जिसे मैक्सवेल ने विस्थापन धारा जोड़कर संशोधित किया।',
    bn: 'অ্যাম্পিয়ারের বর্তনী সূত্র স্থির চুম্বকবিদ্যার একটি প্রধান সূত্র। এটি যেকোনো বদ্ধ কনট্যুর C বরাবর চৌম্বক ক্ষেত্রের রৈখিক সমাকলনকে (সঞ্চালন) লুপের মধ্য দিয়ে প্রবাহিত মোট তড়িৎ প্রবাহ I_enc এর সাথে সম্পর্কিত করে:\n∮_C H · dl = I_enc = ∫_S J · dA\n\nস্টোকসের উপপাদ্য প্রয়োগ করে এর অবকল রূপ পাওয়া যায়: ∇ × H = J বা ∇ × B = μ0 J।\n\nB ও H এর পার্থক্য:\n• H (A/m): কেবলমাত্র মুক্ত পরিবাহী প্রবাহের উপর নির্ভরশীল, মাধ্যমের বৈশিষ্ট্যের উপর নয়।\n• B (টেসলা): মাধ্যমের অভ্যন্তরে মোট চৌম্বক ফ্লাক্স ঘনত্ব: B = μ H = μ0(H + M)।\n\nগুরুত্বপূর্ণ প্রয়োগসমূহ:\n১. দীর্ঘ নিরেট তার (ব্যাসার্ধ R):\n   - বাইরে (r ≥ R): B = μ0 I / (২π r)\n   - ভেতরে (r < R): B = μ0 I r / (২π R²)\n২. দীর্ঘ সলিনয়েড: B = μ0 n I\n৩. টরয়েড: B = μ N I / (২π r)\n\nসীমাবদ্ধতা: এই সূত্রটি শুধুমাত্র অপরিবর্তনশীল (DC) প্রবাহের জন্য প্রযোজ্য। পরিবর্তনশীল তড়িৎ ক্ষেত্রের ক্ষেত্রে এটি অসম্পূর্ণ, যা ম্যাক্সওয়েল সরণ প্রবাহ যোগ করে সংশোধন করেছিলেন।'
  },
  formulas: [
    {
      id: 'f-ampere-integral',
      symbol: '∮ H · dl',
      expression: '∮ H · dl = I_enc,  ∮ B · dl = μ₀ I_enc',
      title: {
        en: "Ampere's Circuital Law (Integral Form)",
        hi: 'एम्पीयर का परिपथीय नियम (समाकल रूप)',
        bn: 'অ্যাম্পিয়ারের বর্তনী সূত্র (সমাকলন রূপ)'
      },
      description: {
        en: 'The line integral of magnetic field intensity around any closed path equals the total net conduction current piercing the enclosed area.',
        hi: 'किसी बंद पथ के परितः चुंबकीय क्षेत्र तीव्रता का रेखीय समाकल परिबद्ध क्षेत्रफल से गुजरने वाली कुल चालन धारा के बराबर होता है।',
        bn: 'যেকোনো বদ্ধ পথ বরাবর চৌম্বক ক্ষেত্র প্রাবল্যের রৈখিক সমাকলন পথটির ক্ষেত্রফল ভেদকারী মোট তড়িৎ প্রবাহের সমান।'
      },
      variables: [
        { symbol: 'H', name: { en: 'Magnetic field intensity (A/m)', hi: 'चुंबकीय क्षेत्र तीव्रता (A/m)', bn: 'চৌম্বক ক্ষেত্র প্রাবল্য (A/m)' } },
        { symbol: 'dl', name: { en: 'Vector differential line element along contour (m)', hi: 'अवकल पथ लंबाई सदिश (m)', bn: 'পথ বরাবর ক্ষুদ্র ভেক্টর উপাদান (m)' } },
        { symbol: 'I_enc', name: { en: 'Net enclosed current passing through loop (A)', hi: 'लूप से गुजरने वाली कुल धारा (A)', bn: 'লুপ ভেদকারী মোট আবদ্ধ প্রবাহ (A)' } },
        { symbol: 'B', name: { en: 'Magnetic flux density (Tesla, T)', hi: 'चुंबकीय फ्लक्स घनत्व (T)', bn: 'চৌম্বক ফ্লাক্স ঘনত্ব (T)' } }
      ]
    },
    {
      id: 'f-ampere-differential',
      symbol: '∇ × H',
      expression: '∇ × H = J,  ∇ × B = μ₀ J',
      title: {
        en: "Ampere's Law (Differential / Point Form)",
        hi: 'एम्पीयर का नियम (अवकल रूप)',
        bn: 'অ্যাম্পিয়ারের সূত্র (ব্যবকলন রূপ)'
      },
      description: {
        en: 'The curl of the magnetic field intensity at any point equals the local conduction current density vector J.',
        hi: 'किसी बिंदु पर चुंबकीय क्षेत्र तीव्रता का कर्ल स्थानीय चालन धारा घनत्व सदिश J के बराबर होता है।',
        bn: 'যেকোনো বিন্দুতে চৌম্বক ক্ষেত্র প্রাবল্যের কার্ল স্থানীয় তড়িৎ প্রবাহ ঘনত্ব ভেক্টর J এর সমান।'
      },
      variables: [
        { symbol: '∇ × H', name: { en: 'Curl of magnetic field intensity (A/m²)', hi: 'चुंबकीय क्षेत्र तीव्रता का कर्ल', bn: 'চৌম্বক ক্ষেত্র প্রাবল্যের কার্ল' } },
        { symbol: 'J', name: { en: 'Volume conduction current density (A/m²)', hi: 'चालन धारा घनत्व (A/m²)', bn: 'পরিবাহী প্রবাহ ঘনত্ব (A/m²)' } }
      ]
    },
    {
      id: 'f-solenoid-field',
      symbol: 'B_sol',
      expression: 'B = μ₀ n I,  H = n I',
      title: {
        en: 'Magnetic Field Inside an Ideal Solenoid',
        hi: 'आदर्श परिनालिका के भीतर चुंबकीय क्षेत्र',
        bn: 'আদর্শ সলিনয়েডের অভ্যন্তরে চৌম্বক ক্ষেত্র'
      },
      description: {
        en: 'Uniform axial magnetic field inside a long tightly wound solenoid with n turns per meter carrying current I.',
        hi: 'प्रति मीटर n फेरों वाली लंबी परिनालिका के भीतर एकसमान अक्षीय चुंबकीय क्षेत्र।',
        bn: 'প্রতি মিটারে n পাকসংখ্যা বিশিষ্ট দীর্ঘ সলিনয়েডের অভ্যন্তরে সুষম অক্ষীয় চৌম্বক ক্ষেত্র।'
      },
      variables: [
        { symbol: 'B', name: { en: 'Core flux density (T)', hi: 'कोर फ्लक्स घनत्व (T)', bn: 'কোর ফ্লাক্স ঘনত্ব (T)' } },
        { symbol: 'n', name: { en: 'Turns per unit length (N / L, turns/m)', hi: 'प्रति एकांक लंबाई फेरों की संख्या', bn: 'একক দৈর্ঘ্যে পাকসংখ্যা' } },
        { symbol: 'I', name: { en: 'Current in windings (A)', hi: 'वाइंडिंग धारा (A)', bn: 'কয়েলে তড়িৎ প্রবাহ (A)' } }
      ]
    },
    {
      id: 'f-toroid-field',
      symbol: 'B_toroid',
      expression: 'B = (μ₀ N I) / (2π r)',
      title: {
        en: 'Magnetic Field Inside a Toroid',
        hi: 'टोरोइड के भीतर चुंबकीय क्षेत्र',
        bn: 'টরয়েডের অভ্যন্তরে চৌম্বক ক্ষেত্র'
      },
      description: {
        en: 'Circular concentric magnetic flux density inside a toroidal ring with N total turns at mean radius r.',
        hi: 'माध्य त्रिज्या r पर कुल N फेरों वाली टोरोइड रिंग के भीतर संकेंद्रीय चुंबकीय फ्लक्स घनत्व।',
        bn: 'গড় ব্যাসার্ধ r এ মোট N পাকসংখ্যা বিশিষ্ট টরয়েডাল রিংয়ের অভ্যন্তরে বৃত্তাকার চৌম্বক ফ্লাক্স ঘনত্ব।'
      },
      variables: [
        { symbol: 'N', name: { en: 'Total number of turns', hi: 'कुल फेरों की संख्या', bn: 'মোট পাকসংখ্যা' } },
        { symbol: 'r', name: { en: 'Mean radial distance from toroid center (m)', hi: 'टोरोइड केंद्र से माध्य दूरी (m)', bn: 'টরয়েডের কেন্দ্র থেকে গড় দূরত্ব (m)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-amperian-contour',
      title: {
        en: '1. Amperian Loops and the Right-Hand Rule',
        hi: '1. एम्पीयर लूप एवं दाहिने हाथ का नियम',
        bn: '১. অ্যাম্পিয়ার লুপ ও ডানহাত নিয়ম'
      },
      content: {
        en: "An Amperian loop is a closed mathematical curve chosen deliberately to exploit spatial symmetry. The sign of enclosed current is established by the Right-Hand Grip Rule: if the fingers of your right hand curl along the chosen direction of integration dl around the loop, the thumb points in the positive direction of current flow. Any current entering in that direction counts as +I, while currents flowing in the reverse direction count as -I.\n\nAmpere's law works seamlessly because the line integral measures the total tangential component of field along the path. If H is constant in magnitude and strictly tangential to the loop of circumference C, the integral collapses to simply H · C = I_enc.",
        hi: 'एम्पीयर लूप एक बंद गणितीय वक्र है जिसे सममिति का लाभ उठाने के लिए चुना जाता है। परिबद्ध धारा का चिह्न दाएं हाथ के नियम से निर्धारित होता है: यदि दाएं हाथ की अंगुलियां लूप के चारों ओर समाकलन की दिशा dl में मुड़ती हैं, तो अंगूठा धनात्मक धारा की दिशा दर्शाता है। इस दिशा में बहने वाली धारा +I और विपरीत दिशा वाली धारा -I मानी जाती है।\n\nयदि H का परिमाण स्थिर है और लूप के स्पर्शरेखीय है, तो समाकल H · C = I_enc में बदल जाता है।',
        bn: 'অ্যাম্পিয়ার লুপ হলো একটি ইচ্ছামতো নির্বাচিত বদ্ধ গাণিতিক বক্ররেখা যা প্রতিসাম্যকে কাজে লাগায়। আবদ্ধ তড়িৎ প্রবাহের চিহ্ন ডানহাত স্ক্রু নিয়ম দ্বারা নির্ধারিত হয়: যদি ডান হাতের আঙুলগুলি সমাকলনের দিক dl বরাবর বাঁকানো হয়, তবে বৃদ্ধাঙ্গুলি ধনাত্মক প্রবাহের অভিমুখ নির্দেশ করে। বিপরীত প্রবাহ ঋণাত্মক হিসেবে গণ্য হয়।\n\nযদি H এর মান ধ্রুবক এবং লুপের স্পর্শক বরাবর থাকে, তবে সমাকলনটি সরাসরি H · C = I_enc রাশিতে রূপান্তরিত হয়।'
      },
      schematicId: 'circuit-ch11-ampere-law'
    },
    {
      id: 'sec-solenoid-toroid-design',
      title: {
        en: '2. Solenoids, Toroids and Magnetic Circuit Confinement',
        hi: '2. परिनालिका, टोरोइड एवं चुंबकीय परिपथ परिरोधन',
        bn: '২. সলিনয়েড, টরয়েড ও চৌম্বক বর্তনীর ক্ষেত্র আবদ্ধকরণ'
      },
      content: {
        en: 'Ampere’s law reveals why solenoids and toroids are foundational to electrical machinery:\n• Solenoid: By wrapping thousands of turns around a straight cylindrical core, external field lines cancel through destructive interference, while internal field lines reinforce constructively into a dense, uniform axial field: B = μ n I. When an iron core is inserted, μ jumps by thousands of times, multiplying the flux density.\n• Toroid: Bending a solenoid into a closed doughnut shape produces a closed magnetic circuit with zero external leakage flux. All magnetic field lines remain completely trapped inside the core, preventing electromagnetic interference (EMI) with neighboring sensitive electronics.',
        hi: 'एम्पीयर का नियम दर्शाता है कि परिनालिका और टोरोइड इलेक्ट्रिकल मशीनों के लिए इतने महत्वपूर्ण क्यों हैं:\n• परिनालिका (Solenoid): एक बेलनाकार कोर के चारों ओर हजारों फेरे लपेटने से बाहर का क्षेत्र रद्द हो जाता है, जबकि भीतर एक शक्तिशाली एकसमान अक्षीय क्षेत्र B = μ n I बनता है।\n• टोरोइड (Toroid): परिनालिका को एक छल्ले (डोनट) के रूप में मोड़ने से शून्य बाहरी रिसाव (लीकेज) वाला एक पूर्णतः संवृत चुंबकीय परिपथ बनता है, जो संवेदनशील इलेक्ट्रॉनिक सर्किट में ईएमआई हस्तक्षेप को रोकता है।',
        bn: 'অ্যাম্পিয়ারের সূত্র ব্যাখ্যা করে কেন সলিনয়েড এবং টরয়েড বৈদ্যুতিক যন্ত্রপাতির ভিত্তি:\n• সলিনয়েড: চোঙের চারপাশে হাজার হাজার তারের পাক জড়ালে বাইরের ক্ষেত্র বাতিল হয়ে যায় এবং ভেতরে একটি শক্তিশালী সুষম অক্ষীয় ক্ষেত্র B = μ n I গঠিত হয়।\n• টরয়েড: সলিনয়েডকে বৃত্তাকার রিং আকারে বাঁকালে এটি একটি বদ্ধ চৌম্বক বর্তনী তৈরি করে যাতে কোনো বহিরাগত লিকেজ ফ্লাক্স থাকে না, ফলে আশেপাশের সার্কিটে ইলেক্ট্রোম্যাগনেটিক ইন্টারফেরেন্স (EMI) সম্পূর্ণ দূর হয়।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ampere-law',
      title: {
        en: "Ampere's Circuital Law: Straight Wire, Solenoid & Toroid",
        hi: 'एम्पीयर का परिपथीय नियम: सीधा तार, परिनालिका एवं टोरोइड',
        bn: 'অ্যাম্পিয়ারের বর্তনী সূত্র: সরল তার, সলিনয়েড ও টরয়েড'
      },
      caption: {
        en: "Amperian circular loop around a current-carrying wire, rectangular Amperian path through an ideal solenoid, and concentric loop inside a toroidal inductor.",
        hi: 'धारावाही चालक के चारों ओर संकेंद्रीय एम्पीयर वृत्ताकार लूप, आदर्श परिनालिका के माध्यम से आयताकार एम्पीयर पथ, तथा टोरोइडल इंडक्टर के भीतर संकेंद्रीय लूप।',
        bn: 'তড়িৎবাহী তারের চারপাশে অ্যাম্পিয়ার বৃত্তাকার লুপ, সলিনয়েডের মধ্যে আয়তাকার অ্যাম্পিয়ার পথ এবং টরয়েডের অভ্যন্তরে সমকেন্দ্রিক লুপ।'
      },
      svgType: 'circuit-ch11-ampere-law'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-solid-conductor-internal-external',
      problem: {
        en: 'A solid cylindrical copper busbar of radius R = 10.0 mm carries a uniformly distributed direct current I = 250 A. Calculate the magnetic flux density B at: (a) r = 4.0 mm from the center axis (inside the conductor), and (b) r = 25.0 mm from the center axis (outside the conductor in air).',
        hi: 'त्रिज्या R = 10.0 मिमी की एक ठोस बेलनाकार तांबे की बसबार में 250 A की एकसमान दिष्ट धारा प्रवाहित हो रही है। चुंबकीय फ्लक्स घनत्व B ज्ञात कीजिए: (a) केंद्रीय अक्ष से r = 4.0 मिमी दूरी पर (चालक के भीतर), और (b) अक्ष से r = 25.0 मिमी दूरी पर (चालक के बाहर)।',
        bn: 'R = ১০.০ মিমি ব্যাসার্ধের একটি নিরেট তামার সিলিন্ডার আকৃতির পরিবাহীতে সুষমভাবে I = ২৫০ A ডিসি কারেন্ট প্রবাহিত হচ্ছে। চৌম্বক ফ্লাক্স ঘনত্ব B নির্ণয় করুন: (a) অক্ষ থেকে r = ৪.০ মিমি দূরত্বে (পরিবাহীর অভ্যন্তরে), এবং (b) অক্ষ থেকে r = ২৫.০ মিমি দূরত্বে (বায়ুতে পরিবাহীর বাইরে)।'
      },
      solution: {
        en: 'Step 1: Magnetic flux density inside conductor (r < R = 0.010 m):\nCurrent density J = I / (π R²).\nEnclosed current for Amperian circle of radius r = 0.004 m:\nI_enc = J · (π r²) = I · (r² / R²) = 250 · (4² / 10²) = 250 · 0.16 = 40.0 A.\nBy Ampere’s Law:\nB(2π r) = μ0 I_enc => B = (μ0 I r) / (2π R²)\nB(4 mm) = (4π × 10⁻⁷ · 40.0) / (2π · 0.004) = (2 × 10⁻⁷ · 40.0) / 0.004 = 2.0 × 10⁻³ Tesla = 2.0 mT.\n\nStep 2: Magnetic flux density outside conductor (r > R, r = 0.025 m):\nThe entire current I = 250 A is enclosed: I_enc = 250 A.\nB(2π r) = μ0 I => B = (μ0 I) / (2π r)\nB(25 mm) = (4π × 10⁻⁷ · 250) / (2π · 0.025) = (2 × 10⁻⁷ · 250) / 0.025 = 2.0 × 10⁻³ Tesla = 2.0 mT.\n\nNote: Interestingly, at r = 4 mm inside and r = 25 mm outside, B is 2.0 mT. Peak field occurs at surface r = R = 10 mm: B_peak = (2 × 10⁻⁷ · 250) / 0.010 = 5.0 mT.',
        hi: 'चरण 1: चालक के भीतर (r = 4 मिमी):\nपरिबद्ध धारा I_enc = I(r²/R²) = 250(16/100) = 40 A।\nB = μ0 I_enc / (2π r) = (4π × 10⁻⁷ × 40) / (2π × 0.004) = 2.0 mT।\n\nचरण 2: चालक के बाहर (r = 25 मिमी):\nकुल धारा परिबद्ध = 250 A।\nB = μ0 I / (2π r) = (4π × 10⁻⁷ × 250) / (2π × 0.025) = 2.0 mT।\nसतह पर अधिकतम मान B_max = 5.0 mT प्राप्त होता है।',
        bn: 'ধাপ ১: পরিবাহীর ভেতরে (r = ৪ মিমি):\nআবদ্ধ কারেন্ট I_enc = I(r²/R²) = ২৫০(১৬/১০০) = ৪০ A।\nB = μ0 I_enc / (২π r) = (৪π × ১০⁻⁷ × ৪০) / (২π × ০.০০৪) = ২.০ mT।\n\nধাপ ২: পরিবাহীর বাইরে (r = ২৫ মিমি):\nমোট আবদ্ধ কারেন্ট = ২৫০ A।\nB = μ0 I / (২π r) = (৪π × ১০⁻⁷ × ২৫০) / (২π × ০.০২৫) = ২.০ mT।\nপৃষ্ঠে সর্বোচ্চ মান B_max = ৫.০ mT হয়।'
      },
      givenValues: {
        'R': '10.0 mm (0.010 m)',
        'I': '250 A',
        'r1': '4.0 mm',
        'r2': '25.0 mm'
      },
      finalAnswer: {
        en: 'B(inside, r = 4.0 mm) = 2.0 mT;  B(outside, r = 25.0 mm) = 2.0 mT;  Peak surface field B(10 mm) = 5.0 mT',
        hi: 'B(अंदर, r = 4.0 मिमी) = 2.0 mT;  B(बाहर, r = 25.0 मिमी) = 2.0 mT;  सतह पर शीर्ष मान B(10 मिमी) = 5.0 mT',
        bn: 'B(ভেতরে, r = ৪.০ মিমি) = ২.০ mT;  B(বাইরে, r = ২৫.০ মিমি) = ২.০ mT;  পৃষ্ঠে সর্বোচ্চ মান B(১০ মিমি) = ৫.০ mT'
      }
    },
    {
      id: 'ex-toroidal-inductor-ferrite',
      problem: {
        en: 'A high-frequency toroidal choke inductor has a powdered iron core with relative permeability μr = 125, mean core radius r_mean = 3.5 cm, and cross-sectional area A = 1.2 cm². It is wound uniformly with N = 450 turns of copper wire carrying a DC current of 3.2 A. Calculate: (a) the magnetic field intensity H inside the core, (b) the magnetic flux density B inside the core, and (c) the total magnetic flux Φ in the core.',
        hi: 'एक उच्च-आवृत्ति टोरोइडल चोक इंडक्टर में आपेक्षिक चुंबकशीलता μr = 125, माध्य त्रिज्या r_mean = 3.5 सेमी तथा अनुप्रस्थ काट क्षेत्रफल A = 1.2 cm² का लौह कोर है। इस पर 450 फेरे लपेटे गए हैं जिनमें 3.2 A की धारा प्रवाहित है। ज्ञात कीजिए: (a) कोर के भीतर चुंबकीय क्षेत्र तीव्रता H, (b) चुंबकीय फ्लक्स घनत्व B, तथा (c) कोर में कुल फ्लक्स Φ।',
        bn: 'একটি উচ্চ-ফ্রিকোয়েন্সি টরয়েডাল ইন্ডাক্টরের লোহার কোরের আপেক্ষিক প্রবেশ্যতা μr = ১২৫, গড় ব্যাসার্ধ r_mean = ৩.৫ সেমি এবং প্রস্থচ্ছেদ A = ১.২ cm²। এতে ৪৫০ পাক তামার তার জড়ানো আছে যাতে ৩.২ A ডিসি কারেন্ট প্রবাহিত হচ্ছে। নির্ণয় করুন: (a) কোরের অভ্যন্তরে চৌম্বক প্রাবল্য H, (b) চৌম্বক ফ্লাক্স ঘনত্ব B, এবং (c) কোরে মোট চৌম্বক ফ্লাক্স Φ।'
      },
      solution: {
        en: 'Step 1: Compute magnetic field intensity H using Ampere’s Law:\n∮ H · dl = N · I\nH · (2π r_mean) = N · I\nH = (N · I) / (2π r_mean) = (450 · 3.2 A) / [2 · π · 0.035 m] = 1440 / 0.21991 = 6548.1 A/m ≈ 6.55 kA/m.\n\nStep 2: Compute core permeability and magnetic flux density B:\nμ = μ0 · μr = (4π × 10⁻⁷ H/m) · 125 = 1.5708 × 10⁻⁴ H/m.\nB = μ · H = (1.5708 × 10⁻⁴ H/m) · (6548.1 A/m) = 1.0285 Tesla ≈ 1.03 T.\n\nStep 3: Compute total magnetic flux Φ:\nΦ = B · A = (1.0285 T) · (1.2 × 10⁻⁴ m²) = 1.234 × 10⁻⁴ Weber = 123.4 μWb.',
        hi: 'चरण 1: H की गणना:\nH = N I / (2π r) = (450 × 3.2) / (2π × 0.035) = 6548 A/m (6.55 kA/m)।\n\nचरण 2: B की गणना:\nμ = 125 × 4π × 10⁻⁷ = 1.571 × 10⁻⁴ H/m।\nB = μ H = 1.571 × 10⁻⁴ × 6548 = 1.029 टेस्ला (1.03 T)।\n\nचरण 3: कुल फ्लक्स Φ:\nΦ = B × A = 1.029 × 1.2 × 10⁻⁴ = 123.4 μWb।',
        bn: 'ধাপ ১: H নির্ণয়:\nH = N I / (২π r) = (৪৫০ × ৩.২) / (২π × ০.০৩৫) = ৬৫৪৮ A/m (৬.৫৫ kA/m)।\n\nধাপ ২: B নির্ণয়:\nμ = ১২৫ × ৪π × ১০⁻৭ = ১.৫৭১ × ১০⁻৪ H/m।\nB = μ H = ১.৫৭১ × ১০⁻৪ × ৬৫৪৮ = ১.০২৯ টেসলা (১.০৩ T)।\n\nধাপ ৩: মোট ফ্লাক্স Φ:\nΦ = B × A = ১.০২৯ × ১.২ × ১০⁻৪ = ১২৩.৪ μWb।'
      },
      givenValues: {
        'μr': '125',
        'r_mean': '3.5 cm (0.035 m)',
        'A': '1.2 cm² (1.2 × 10⁻⁴ m²)',
        'N': '450 turns',
        'I': '3.2 A'
      },
      finalAnswer: {
        en: 'H = 6548 A/m (6.55 kA/m),  B = 1.03 T,  Φ = 123.4 μWb',
        hi: 'H = 6548 A/m (6.55 kA/m),  B = 1.03 T,  Φ = 123.4 μWb',
        bn: 'H = ৬৫৪৮ A/m (৬.৫৫ kA/m),  B = ১.০৩ T,  Φ = ১২৩.৪ μWb'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Switch-Mode Power Supply (SMPS) Toroidal Chokes: Utilizing toroidal core geometry to contain all magnetic flux and minimize radiated EMI into sensitive microcontroller circuits.',
      'DC Transmission Busbar Clearance Design: Calculating outer magnetic field falloff (B ∝ 1/r) to establish safe electromagnetic exposure zones for utility substation workers.',
      'Magnetic Resonance Imaging (MRI) Superconducting Solenoids: Applying B = μ0 n I to create intensely uniform, homogenous magnetic fields up to 3.0 Tesla across the human body.',
      'Rogowski Coil AC Current Sensors: Using an open-core flexible toroidal winding integrating ∮ H · dl to measure massive alternating and surge currents up to 100 kA without core saturation.',
      'Electromagnetic Relay and Actuator Design: Sizing solenoid coil turns N and operating current I to produce required magnetizing force H and magnetic holding pressure.'
    ],
    hi: [
      'एसएमपीएस टोरोइडल चोक: सभी चुंबकीय फ्लक्स को कोर में सीमित रखकर निकटवर्ती इलेक्ट्रॉनिक सर्किट में विकिरणित ईएमआई को न्यूनतम करना।',
      'डीसी ट्रांसमिशन बसबार डिजाइन: सबस्टेशन कर्मचारियों की सुरक्षा हेतु चुंबकीय क्षेत्र की गिरावट (B ∝ 1/r) की सटीक गणना।',
      'एमआरआई सुपरकंडक्टिंग सोलेनॉइड: मानव शरीर के संपूर्ण स्कैनिंग क्षेत्र में 3.0 टेस्ला तक का अत्यंत सुदृढ़ एवं एकसमान चुंबकीय क्षेत्र तैयार करना।',
      'रोगोवस्की कॉइल करंट सेंसर: बिना संतृप्ति (सैचुरेशन) के 100 kA तक की विशाल प्रत्यावर्ती और सर्ज धाराओं को मापने के लिए लचीली वाइंडिंग का उपयोग।',
      'विद्युत चुंबकीय रिले एवं एक्चुएटर डिजाइन: आवश्यक चुंबकीय आकर्षण बल उत्पन्न करने के लिए सोलेनॉइड फेरों N और धारा I का सटीक निर्धारण।'
    ],
    bn: [
      'এসএমপিএস টরয়েডাল চোক: চৌম্বক ফ্লাক্স কোরের ভেতর সীমাবদ্ধ রেখে সংবেদনশীল মাইক্রোকন্ট্রোলার সার্কিটে ক্ষতিকারক EMI বিকিরণ প্রতিরোধ।',
      'ডিসি বাসবার নিরাপত্তা নকশা: সাবস্টেশনের কর্মীদের স্বাস্থ্য সুরক্ষায় দূরত্বের সাথে চৌম্বক ক্ষেত্রের হ্রাস (B ∝ ১/r) নির্ধারণ।',
      'এমআরআই সুপারকন্ডাক্টিং সলিনয়েড: মানবদেহের অভ্যন্তরে নিখুঁত রোগ নির্ণয়ের জন্য ৩.০ টেসলা পর্যন্ত অত্যন্ত সুষম চৌম্বক ক্ষেত্র তৈরি।',
      'রোগোস্কি কয়েল সেন্সর: কোর স্যাচুরেশন ছাড়াই ১০০ kA পর্যন্ত বিশালাকার এসি ও সার্জ কারেন্ট পরিমাপে ওপেন-কোর টরয়েডাল ওয়াইন্ডিং ব্যবহার।',
      'ইলেক্ট্রোম্যাগনেটিক রিলে ও অ্যাকচুয়েটর ডিজাইন: প্রয়োজনীয় চৌম্বকীয় বল অর্জনের জন্য সলিনয়েডের পাকসংখ্যা N ও তড়িৎ প্রবাহ I এর সমন্বয়।'
    ]
  },
  importantPoints: {
    en: [
      "Ampere's Circuital Law applies strictly to closed Amperian paths and steady, continuous direct currents (magnetostatics).",
      'Magnetic field intensity H is measured in Amperes per meter (A/m), while magnetic flux density B is measured in Tesla (T) or Wb/m².',
      'Inside a solid cylindrical conductor carrying uniform DC, the magnetic field increases linearly from zero at the center to maximum at the outer surface: B ∝ r.',
      'Outside any cylindrical conductor carrying total current I, the magnetic field decays inversely with distance: B ∝ 1/r, regardless of conductor thickness.',
      'An ideal infinitely long solenoid has completely uniform axial field B = μ0 n I inside and zero magnetic field everywhere outside.',
      "Stokes' Theorem rigorously converts Ampere's integral form ∮ H · dl = I into its differential point form ∇ × H = J."
    ],
    hi: [
      'एम्पीयर का परिपथीय नियम केवल संवृत पथों और स्थिर दिष्ट धाराओं (चुंबकस्थैतिकी) के लिए ही पूर्णतः मान्य है।',
      'चुंबकीय क्षेत्र तीव्रता H को एम्पीयर प्रति मीटर (A/m) में और चुंबकीय फ्लक्स घनत्व B को टेस्ला (T) में मापा जाता है।',
      'एकसमान डीसी ले जाने वाले ठोस बेलनाकार चालक के भीतर चुंबकीय क्षेत्र केंद्र पर शून्य से सतह पर अधिकतम तक रैखिक रूप से बढ़ता है: B ∝ r।',
      'चालक के बाहर चुंबकीय क्षेत्र चालक की मोटाई की परवाह किए बिना दूरी के व्युत्क्रमानुपाती घटता है: B ∝ 1/r।',
      'एक आदर्श अनंत परिनालिका के भीतर क्षेत्र एकसमान B = μ0 n I होता है और बाहर सर्वथा शून्य होता है।',
      'स्टोक्स का प्रमेय एम्पीयर के समाकल रूप ∮ H · dl = I को अवकल रूप ∇ × H = J में परिवर्तित करता है।'
    ],
    bn: [
      'অ্যাম্পিয়ারের বর্তনী সূত্র কঠোরভাবে কেবল আবদ্ধ পথ এবং অপরিবর্তনশীল ডিসি কারেন্টের জন্য প্রযোজ্য।',
      'চৌম্বক ক্ষেত্র প্রাবল্য H এর একক অ্যাম্পিয়ার প্রতি মিটার (A/m) এবং চৌম্বক ফ্লাক্স ঘনত্ব B এর একক টেসলা (T)।',
      'সুষম ডিসি পরিবাহী নিরেট তারের অভ্যন্তরে চৌম্বক ক্ষেত্র কেন্দ্র থেকে পৃষ্ঠ পর্যন্ত রৈখিকভাবে বৃদ্ধি পায়: B ∝ r।',
      'তারের বাইরে দূরত্বের সাথে চৌম্বক ক্ষেত্র ব্যস্তানুপাতিক হারে হ্রাস পায়: B ∝ ১/r।',
      'একটি আদর্শ অসীম সলিনয়েডের অভ্যন্তরে ক্ষেত্র সুষম অক্ষীয় B = μ0 n I এবং বাইরে সম্পূর্ণ শূন্য।',
      'স্টোকসের উপপাদ্যের সাহায্যে অ্যাম্পিয়ারের সমাকলন রূপ ∮ H · dl = I সরাসরি ব্যবকলন রূপ ∇ × H = J এ রূপান্তরিত হয়।'
    ]
  },
  commonMistakes: {
    en: [
      "Confusing magnetic field intensity H (A/m) with flux density B (Tesla); H is the magnetizing effort independent of matter, while B is the material's magnetic response.",
      "Attempting to apply classical Ampere's law across the gap between capacitor plates during AC charging without Maxwell's displacement current term.",
      "Assuming the magnetic field inside a solid conductor is zero like the electrostatic electric field; a steady current distributed throughout a conductor produces a strong internal magnetic field B ∝ r.",
      'Forgetting that n in B = μ0 n I represents turns PER UNIT LENGTH (N/L), not total turns N.'
    ],
    hi: [
      'चुंबकीय क्षेत्र तीव्रता H (A/m) और फ्लक्स घनत्व B (T) को एक ही समझ लेना; H माध्यम-स्वतंत्र प्रयास है जबकि B भौतिक फ्लक्स है।',
      'प्रत्यावर्ती आवेशन के दौरान संधारित्र प्लेटों के बीच बिना विस्थापन धारा जोड़े शास्त्रीय एम्पीयर नियम लागू करने का प्रयास करना।',
      'यह मान लेना कि स्थिरवैद्युत क्षेत्र की तरह चालक के भीतर चुंबकीय क्षेत्र भी शून्य होता है; धारावाही चालक के अंदर B ∝ r क्षेत्र मौजूद रहता है।',
      'यह भूल जाना कि B = μ0 n I में n प्रति इकाई लंबाई फेरों की संख्या (N/L) है, न कि कुल फेरे N।'
    ],
    bn: [
      'চৌম্বক প্রাবল্য H (A/m) এবং চৌম্বক ফ্লাক্স ঘনত্ব B (T) এর পার্থক্য ভুলে যাওয়া; H হলো চুম্বকায়ন প্রচেষ্টা এবং B হলো মাধ্যমের অভ্যন্তরীণ ফ্লাক্স।',
      'ক্যাপাসিটর চার্জিংয়ের সময় ম্যাক্সওয়েলের সরণ প্রবাহ বাদ দিয়ে সাধারণ অ্যাম্পিয়ারের সূত্র প্রয়োগ করার ভুল করা।',
      'স্থির তড়িৎ ক্ষেত্রের মতো পরিবাহীর অভ্যন্তরে চৌম্বক ক্ষেত্রও শূন্য হবে বলে ভুল অনুমান করা; সুষম ডিসি পরিবাহীর ভেতর B ∝ r ক্ষেত্র বিদ্যমান থাকে।',
      'B = μ0 n I সূত্রে n যে প্রতি একক দৈর্ঘ্যে পাকসংখ্যা (N/L), তা খেয়াল না করে মোট পাকসংখ্যা N বসিয়ে ফেলা।'
    ]
  },
  keyTakeaways: {
    en: [
      "Ampere's Circuital Law relates the circulation of magnetic field along a closed contour to enclosed current: ∮ H · dl = I_enc.",
      'High structural symmetry allows rapid determination of magnetic fields for wires, coaxial conductors, solenoids, and toroids.',
      'Toroids provide self-contained magnetic circuits with virtually zero external leakage flux, making them ideal for high-efficiency power electronics.',
      "The differential form ∇ × H = J confirms that electric current vortices are the rotational sources of magnetic field intensity.",
      'Classical Ampere’s law is incomplete for dynamic time-varying fields, forming the historical necessity for Maxwell’s displacement current correction.'
    ],
    hi: [
      'एम्पीयर का नियम किसी बंद पथ के परितः चुंबकीय क्षेत्र के परिसंचरण को परिबद्ध धारा से जोड़ता है: ∮ H · dl = I_enc।',
      'उच्च संरचनात्मक सममिति तारों, समाक्षीय केबलों, परिनालिकाओं और टोरोइड्स के चुंबकीय क्षेत्रों की त्वरित गणना करने देती है।',
      'टोरोइड लगभग शून्य बाहरी फ्लक्स रिसाव के साथ आत्मनिर्भर चुंबकीय परिपथ प्रदान करते हैं।',
      'अवकल रूप ∇ × H = J पुष्टि करता है कि विद्युत धारा घनत्व चुंबकीय क्षेत्र के घूर्णी स्रोत हैं।',
      'शास्त्रीय एम्पीयर नियम समय-परिवर्ती क्षेत्रों के लिए अधूरा है, जिसने मैक्सवेल के विस्थापन धारा संशोधन को जन्म दिया।'
    ],
    bn: [
      'অ্যাম্পিয়ারের সূত্র একটি বদ্ধ কনট্যুর বরাবর চৌম্বক সঞ্চালনকে আবদ্ধ তড়িৎ প্রবাহের সাথে সম্পর্কিত করে: ∮ H · dl = I_enc।',
      'উচ্চ প্রতিসাম্য তার, কোঅ্যাক্সিয়াল ক্যাবল, সলিনয়েড ও টরয়েডের চৌম্বক ক্ষেত্র সহজে বের করতে সাহায্য করে।',
      'টরয়েডাল আকৃতি বহিরাগত লিকেজ ফ্লাক্স সম্পূর্ণ দূর করে অত্যন্ত কার্যকর পাওয়ার ইলেকট্রনিক্স তৈরিতে সাহায্য করে।',
      'অবকল রূপ ∇ × H = J নিশ্চিত করে যে তড়িৎ প্রবাহ ঘনত্ব হলো চৌম্বক ক্ষেত্রের ঘূর্ণনশীল উৎস।',
      'সময়-পরিবর্তনশীল ক্ষেত্রে চিরায়ত অ্যাম্পিয়ারের সূত্র অসম্পূর্ণ, যার ফলেই ম্যাক্সওয়েলের সরণ প্রবাহের আবিষ্কার ঘটে।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch11-l03-01',
      question: {
        en: "What does the line integral ∮ H · dl represent along a closed contour C?",
        hi: 'एक बंद समोच्च C के अनुदिश रेखीय समाकल ∮ H · dl क्या दर्शाता है?',
        bn: 'একটি বদ্ধ কনট্যুর C বরাবর রৈখিক সমাকলন ∮ H · dl কী নির্দেশ করে?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Total electric flux exiting the surface', hi: 'सतह से निकलने वाला कुल विद्युत फ्लक्स', bn: 'তল থেকে নির্গত মোট তড়িৎ ফ্লাক্স' } },
        { id: 'opt-b', text: { en: 'Magnetomotive force (MMF) or net enclosed conduction current (I_enc)', hi: 'चुंबकवाहक बल (MMF) अथवा कुल परिबद्ध चालन धारा (I_enc)', bn: 'চুম্বকচালক বল (MMF) বা মোট আবদ্ধ পরিবাহী প্রবাহ (I_enc)' } },
        { id: 'opt-c', text: { en: 'Total electrostatic potential energy', hi: 'कुल स्थिरवैद्युत स्थितिज ऊर्जा', bn: 'মোট স্থিরতড়িৎ স্থিতি শক্তি' } },
        { id: 'opt-d', text: { en: 'Rate of change of magnetic flux', hi: 'चुंबकीय फ्लक्स के परिवर्तन की दर', bn: 'চৌম্বক ফ্লাক্স পরিবর্তনের হার' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: "By Ampere's circuital law, ∮ H · dl represents the magnetomotive force (MMF) in Ampere-turns, which equals the net enclosed conduction current I_enc.",
        hi: 'एम्पीयर के नियम से ∮ H · dl चुंबकवाहक बल (MMF) को दर्शाता है, जो परिबद्ध कुल धारा I_enc के बराबर होता है।',
        bn: 'অ্যাম্পিয়ারের সূত্রানুযায়ী ∮ H · dl হলো চুম্বকচালক বল (MMF), যা আবদ্ধ মোট তড়িৎ প্রবাহ I_enc এর সমান।'
      }
    },
    {
      id: 'mcq-ch11-l03-02',
      question: {
        en: 'How does the magnetic flux density B vary inside a solid cylindrical wire of radius R carrying uniform DC current with distance r from the axis (r < R)?',
        hi: 'R त्रिज्या के ठोस तार के भीतर अक्ष से r दूरी पर (r < R) चुंबकीय फ्लक्स घनत्व B किस प्रकार बदलता है?',
        bn: 'R ব্যাসার্ধের একটি নিরেট তারের অভ্যন্তরে অক্ষ থেকে r দূরত্বে (r < R) চৌম্বক ফ্লাক্স ঘনত্ব B কীভাবে পরিবর্তিত হয়?'
      },
      options: [
        { id: 'opt-a', text: { en: 'B ∝ 1 / r', hi: 'B ∝ 1 / r', bn: 'B ∝ 1 / r' } },
        { id: 'opt-b', text: { en: 'B ∝ r (linearly increases from center to surface)', hi: 'B ∝ r (केंद्र से सतह तक रैखिक रूप से बढ़ता है)', bn: 'B ∝ r (কেন্দ্র থেকে পৃষ্ঠ পর্যন্ত রৈখিকভাবে বাড়ে)' } },
        { id: 'opt-c', text: { en: 'B is zero everywhere inside', hi: 'भीतर हर जगह B शून्य होता है', bn: 'অভ্যন্তরে সর্বত্র B শূন্য থাকে' } },
        { id: 'opt-d', text: { en: 'B ∝ 1 / r²', hi: 'B ∝ 1 / r²', bn: 'B ∝ 1 / r²' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Inside the solid wire, enclosed current is proportional to r², so B(2π r) ∝ r², giving B ∝ r (linear growth).',
        hi: 'ठोस तार के अंदर परिबद्ध धारा r² के समानुपाती होती है, अतः B(2π r) ∝ r² से B ∝ r (रैखिक वृद्धि) प्राप्त होता है।',
        bn: 'তারের অভ্যন্তরে আবদ্ধ কারেন্ট r² এর সমানুপাতিক হওয়ায় B(২π r) ∝ r², ফলে B ∝ r (রৈখিক বৃদ্ধি পায়)।'
      }
    },
    {
      id: 'mcq-ch11-l03-03',
      question: {
        en: 'What is the magnetic field intensity H inside an ideal long solenoid with n turns per meter carrying current I?',
        hi: 'प्रति मीटर n फेरों वाली तथा I धारा ले जाने वाली एक आदर्श लंबी परिनालिका के भीतर H क्या है?',
        bn: 'প্রতি মিটারে n পাকসংখ্যা এবং I তড়িৎ প্রবাহ বিশিষ্ট একটি দীর্ঘ সলিনয়েডের অভ্যন্তরে H কত?'
      },
      options: [
        { id: 'opt-a', text: { en: 'H = n · I', hi: 'H = n · I', bn: 'H = n · I' } },
        { id: 'opt-b', text: { en: 'H = μ₀ · n · I', hi: 'H = μ₀ · n · I', bn: 'H = μ₀ · n · I' } },
        { id: 'opt-c', text: { en: 'H = I / (2π n)', hi: 'H = I / (2π n)', bn: 'H = I / (2π n)' } },
        { id: 'opt-d', text: { en: 'H = 0', hi: 'H = 0', bn: 'H = 0' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'By Ampere’s law on a rectangular path, H = n I (in A/m). The magnetic flux density is B = μ H = μ0 n I (in Tesla).',
        hi: 'आयताकार लूप पर एम्पीयर नियम लगाने पर H = n I (A/m) प्राप्त होता है। फ्लक्स घनत्व B = μ0 n I होता है।',
        bn: 'আয়তাকার লুপে অ্যাম্পিয়ারের সূত্র প্রয়োগ করে পাওয়া যায় H = n I (A/m)। ফ্লাক্স ঘনত্ব B = μ0 n I (Tesla)।'
      }
    },
    {
      id: 'mcq-ch11-l03-04',
      question: {
        en: 'What is the differential form of Ampere’s circuital law in magnetostatics?',
        hi: 'चुंबकस्थैतिकी में एम्पीयर के परिपथीय नियम का अवकल रूप क्या है?',
        bn: 'স্থির চুম্বকবিদ্যায় অ্যাম্পিয়ারের বর্তনী সূত্রের অবকল রূপ কোনটি?'
      },
      options: [
        { id: 'opt-a', text: { en: '∇ · H = J', hi: '∇ · H = J', bn: '∇ · H = J' } },
        { id: 'opt-b', text: { en: '∇ × H = J', hi: '∇ × H = J', bn: '∇ × H = J' } },
        { id: 'opt-c', text: { en: '∇ × B = 0', hi: '∇ × B = 0', bn: '∇ × B = 0' } },
        { id: 'opt-d', text: { en: '∇² H = J', hi: '∇² H = J', bn: '∇² H = J' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'The curl of magnetic field intensity equals the conduction current density: ∇ × H = J (or ∇ × B = μ0 J).',
        hi: 'चुंबकीय क्षेत्र तीव्रता का कर्ल चालन धारा घनत्व के बराबर होता है: ∇ × H = J।',
        bn: 'চৌম্বক ক্ষেত্র প্রাবল্যের কার্ল পরিবাহী প্রবাহ ঘনত্বের সমান: ∇ × H = J।'
      }
    },
    {
      id: 'mcq-ch11-l03-05',
      question: {
        en: 'An Amperian loop encloses three parallel conductors carrying currents of +5 A, -8 A, and +10 A. What is the line integral ∮ H · dl around the loop?',
        hi: 'एक एम्पीयर लूप में +5 A, -8 A, और +10 A धारा वाले तीन समानांतर चालक बंद हैं। लूप के परितः ∮ H · dl का मान क्या होगा?',
        bn: 'একটি অ্যাম্পিয়ার লুপ তিনটি সমান্তরাল তারকে ঘিরে রেখেছে যাতে +৫ A, -৮ A এবং +১০ A কারেন্ট প্রবাহিত হচ্ছে। লুপ বরাবর ∮ H · dl এর মান কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '23 A', hi: '23 A', bn: '23 A' } },
        { id: 'opt-b', text: { en: '7 A', hi: '7 A', bn: '7 A' } },
        { id: 'opt-c', text: { en: '-3 A', hi: '-3 A', bn: '-3 A' } },
        { id: 'opt-d', text: { en: 'Zero', hi: 'शून्य', bn: 'শূন্য' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Net enclosed current is the algebraic sum: I_enc = (+5) + (-8) + (+10) = +7 A. Therefore, ∮ H · dl = 7 A.',
        hi: 'कुल परिबद्ध धारा = +5 - 8 + 10 = +7 A। अतः ∮ H · dl = 7 A।',
        bn: 'মোট আবদ্ধ তড়িৎ প্রবাহ হলো বীজগণিতীয় যোগফল: I_enc = +৫ - ৮ + ১০ = +৭ A। অতএব ∮ H · dl = ৭ A।'
      }
    },
    {
      id: 'mcq-ch11-l03-06',
      question: {
        en: 'Why is a toroidal inductor preferred over an open straight solenoid in low-noise RF and audio circuits?',
        hi: 'कम शोर वाले आरएफ और ऑडियो सर्किट में सीधी परिनालिका की तुलना में टोरोइडल इंडक्टर को प्राथमिकता क्यों दी जाती है?',
        bn: 'কম নয়েজযুক্ত আরএফ এবং অডিও সার্কিটে সরল সলিনয়েডের তুলনায় টরয়েডাল ইন্ডাক্টর বেশি পছন্দ করা হয় কেন?'
      },
      options: [
        { id: 'opt-a', text: { en: 'It has higher electrical resistance', hi: 'इसका विद्युत प्रतिरोध अधिक होता है', bn: 'এর বৈদ্যুতিক রোধ বেশি' } },
        { id: 'opt-b', text: { en: 'Virtually all magnetic flux is confined inside the closed core, preventing EMI radiation', hi: 'लगभग सारा चुंबकीय फ्लक्स कोर के अंदर सीमित रहता है, जिससे ईएमआई विकिरण नहीं होता', bn: 'প্রায় সমস্ত চৌম্বক ফ্লাক্স বদ্ধ কোরের মধ্যে সীমাবদ্ধ থাকে, যা EMI বিকিরণ প্রতিরোধ করে' } },
        { id: 'opt-c', text: { en: 'It requires no magnetic material', hi: 'इसे किसी चुंबकीय पदार्थ की आवश्यकता नहीं होती', bn: 'এতে কোনো চৌম্বক উপাদানের প্রয়োজন হয় না' } },
        { id: 'opt-d', text: { en: 'It can only operate on DC currents', hi: 'यह केवल डीसी धाराओं पर काम कर सकता है', bn: 'এটি কেবল ডিসি কারেন্টে কাজ করতে পারে' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'The circular geometry of a toroid traps all magnetic flux lines within the donut core, producing virtually zero external stray field and eliminating magnetic coupling with adjacent circuitry.',
        hi: 'टोरोइड की गोलाकार संरचना सभी चुंबकीय फ्लक्स रेखाओं को कोर के अंदर रोक कर रखती है, जिससे नगण्य बाह्य क्षेत्र बनता है और हस्तक्षेप समाप्त हो जाता है।',
        bn: 'টরয়েডের বৃত্তাকার গঠন সমস্ত বলরেখাকে কোরের মধ্যে আটকে রাখে, ফলে কোনো বহিরাগত লিকেজ ক্ষেত্র তৈরি হয় না এবং নয়েজ দূর হয়।'
      }
    },
    {
      id: 'mcq-ch11-l03-07',
      question: {
        en: 'What fundamental mathematical identity proves that classical Ampere’s law ∇ × H = J is inconsistent with time-varying charge accumulation (∂ρ/∂t ≠ 0)?',
        hi: 'कौन सी मौलिक गणितीय सर्वसमिका यह सिद्ध करती है कि शास्त्रीय एम्पीयर नियम ∇ × H = J समय-परिवर्ती आवेश संचय (∂ρ/∂t ≠ 0) के साथ असंगत है?',
        bn: 'কোন মৌলিক গাণিতিক অভেদ প্রমাণ করে যে চিরায়ত অ্যাম্পিয়ারের সূত্র ∇ × H = J সময়-পরিবর্তনশীল আধান জমার (∂ρ/∂t ≠ 0) সাথে অসঙ্গতিপূর্ণ?'
      },
      options: [
        { id: 'opt-a', text: { en: 'The divergence of any curl is identically zero: ∇ · (∇ × A) ≡ 0', hi: 'किसी भी कर्ल का डाइवर्जेंस सदैव शून्य होता है: ∇ · (∇ × A) ≡ 0', bn: 'যেকোনো কার্লের ডাইভারজেন্স সর্বদা শূন্য: ∇ · (∇ × A) ≡ 0' } },
        { id: 'opt-b', text: { en: 'The curl of a gradient is always non-zero', hi: 'प्रवणता का कर्ल हमेशा अशून्य होता है', bn: 'গ্র্যাডিয়েন্টের কার্ল সর্বদা অশূন্য' } },
        { id: 'opt-c', text: { en: 'The Laplacian of a scalar is zero', hi: 'अदिश का लाप्लासियन शून्य होता है', bn: 'স্কেলারের ল্যাপ্লাসিয়ান শূন্য' } },
        { id: 'opt-d', text: { en: 'Divergence theorem fails in three dimensions', hi: 'त्रिविम में डाइवर्जेंस प्रमेय विफल हो जाता है', bn: 'ত্রিমাত্রায় ডাইভারজেন্স উপপাদ্য ব্যর্থ হয়' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Taking divergence of both sides gives ∇ · (∇ × H) = ∇ · J. Since ∇ · (∇ × H) is identically zero for any vector field, it demands ∇ · J = 0. But conservation of charge states ∇ · J = -∂ρ/∂t. If ∂ρ/∂t ≠ 0, a contradiction occurs.',
        hi: 'दोनों पक्षों का डाइवर्जेंस लेने पर ∇ · (∇ × H) = ∇ · J प्राप्त होता है। चूँकि किसी भी कर्ल का डाइवर्जेंस सदैव शून्य होता है, यह ∇ · J = 0 की माँग करता है, जो आवेश संरक्षण ∇ · J = -∂ρ/∂t का विरोध करता है जब ∂ρ/∂t ≠ 0 हो।',
        bn: 'উভয়পাশে ডাইভারজেন্স নিলে ∇ · (∇ × H) = ∇ · J হয়। যেহেতু যেকোনো কার্লের ডাইভারজেন্স সর্বদাই শূন্য, তাই এটি নির্দেশ করে ∇ · J = ০। কিন্তু আধানের নিত্যতা সূত্র বলে ∇ · J = -∂ρ/∂t, যা পরিবর্তনশীল ক্ষেত্রে দ্বন্দ্ব সৃষ্টি করে।'
      }
    },
    {
      id: 'mcq-ch11-l03-08',
      question: {
        en: 'At a distance of 10 cm from a long, straight power cable carrying 50 A DC, what is the magnetic flux density B in air?',
        hi: '50 A DC ले जाने वाले एक लंबे सीधे केबल से 10 सेमी की दूरी पर वायु में चुंबकीय फ्लक्स घनत्व B कितना होगा?',
        bn: '৫০ A ডিসি কারেন্ট বহনকারী একটি দীর্ঘ সরল ক্যাবল থেকে ১০ সেমি দূরত্বে বায়ুতে চৌম্বক ফ্লাক্স ঘনত্ব B কত হবে?'
      },
      options: [
        { id: 'opt-a', text: { en: '1.0 × 10⁻⁴ T (100 μT)', hi: '1.0 × 10⁻⁴ T (100 μT)', bn: '১.০ × ১০⁻৪ T (১০০ μT)' } },
        { id: 'opt-b', text: { en: '5.0 × 10⁻⁵ T (50 μT)', hi: '5.0 × 10⁻⁵ T (50 μT)', bn: '৫.০ × ১০⁻৫ T (৫০ μT)' } },
        { id: 'opt-c', text: { en: '2.5 × 10⁻³ T', hi: '2.5 × 10⁻³ T', bn: '২.৫ × ১০⁻৩ T' } },
        { id: 'opt-d', text: { en: '0.01 T', hi: '0.01 T', bn: '০.০১ T' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'B = (μ0 I) / (2π r) = (4π × 10⁻⁷ · 50) / (2π · 0.10) = (2 × 10⁻⁷ · 50) / 0.10 = 1.0 × 10⁻⁴ T = 100 μT = 0.10 mT.',
        hi: 'B = (μ0 I) / (2π r) = (4π × 10⁻⁷ × 50) / (2π × 0.10) = 1.0 × 10⁻⁴ T = 100 μT।',
        bn: 'B = (μ0 I) / (২π r) = (৪π × ১০⁻৭ × ৫০) / (২π × ০.১০) = ১.০ × ১০⁻৪ T = ১০০ μT।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch11-l03-01',
      question: {
        en: 'A solenoid of length L = 40 cm has N = 800 turns and carries a current of 2.5 A. Calculate the magnetic field intensity H and flux density B at its center, assuming an air core.',
        hi: 'L = 40 सेमी लंबाई और N = 800 फेरों वाली एक परिनालिका में 2.5 A धारा प्रवाहित है। इसके केंद्र पर चुंबकीय क्षेत्र तीव्रता H तथा फ्लक्स घनत्व B की गणना कीजिए।',
        bn: 'L = ৪০ সেমি দৈর্ঘ্য এবং N = ৮০০ পাকসংখ্যা বিশিষ্ট একটি সলিনয়েডে ২.৫ A তড়িৎ প্রবাহিত হচ্ছে। বায়ু কোরের ক্ষেত্রে এর কেন্দ্রে চৌম্বক প্রাবল্য H এবং ফ্লাক্স ঘনত্ব B নির্ণয় করুন।'
      },
      hint: {
        en: 'Compute turns per meter n = N / L = 800 / 0.40 = 2000 turns/m. Then use H = n I and B = μ0 H.',
        hi: 'प्रति मीटर फेरे n = 800 / 0.40 = 2000 फेरे/मीटर। फिर H = n I तथा B = μ0 H निकालें।',
        bn: 'একক দৈর্ঘ্যে পাকসংখ্যা n = ৮০০ / ০.৪০ = ২০০০ পাক/মিটার। অতঃপর H = n I এবং B = μ0 H ব্যবহার করুন।'
      },
      answerKey: {
        en: 'n = 2000 turns/m. H = (2000)(2.5) = 5000 A/m (5.0 kA/m). B = (4π × 10⁻⁷)(5000) = 6.283 × 10⁻³ T = 6.28 mT.',
        hi: 'H = 5000 A/m, B = 6.28 mT।',
        bn: 'H = ৫০০০ A/m, B = ৬.২৮ mT।'
      }
    },
    {
      id: 'pq-ch11-l03-02',
      question: {
        en: 'State Ampere’s circuital law in both integral and differential forms, and explain how Stokes’ theorem mathematically links them.',
        hi: 'एम्पीयर के परिपथीय नियम को समाकल और अवकल दोनों रूपों में लिखिए, और समझाइए कि स्टोक्स प्रमेय उन्हें गणितीय रूप से कैसे जोड़ता है।',
        bn: 'অ্যাম্পিয়ারের বর্তনী সূত্রকে সমাকলন ও ব্যবকলন উভয় রূপে বিবৃত করুন এবং ব্যাখ্যা করুন কীভাবে স্টোকসের উপপাদ্য এদের মধ্যে সংযোগ স্থাপন করে।'
      },
      hint: {
        en: 'Recall ∮ H · dl = ∫ (∇ × H) · dA and equate it to ∫ J · dA.',
        hi: '∮ H · dl = ∫ (∇ × H) · dA को याद करें और इसे ∫ J · dA के बराबर रखें।',
        bn: '∮ H · dl = ∫ (∇ × H) · dA মনে করুন এবং একে ∫ J · dA এর সমান লিখুন।'
      },
      answerKey: {
        en: 'Integral form: ∮_C H · dl = ∫_S J · dA. Stokes’ Theorem states ∮_C H · dl = ∫_S (∇ × H) · dA. Equating the two surface integrals for an arbitrary open surface S yields the differential form: ∇ × H = J.',
        hi: 'समाकल रूप: ∮ H · dl = I_enc। स्टोक्स प्रमेय से ∮ H · dl = ∫ (∇ × H) · dA। दोनों की तुलना करने पर अवकल रूप ∇ × H = J प्राप्त होता है।',
        bn: 'সমাকলন রূপ: ∮ H · dl = I_enc। স্টোকসের উপপাদ্য অনুযায়ী ∮ H · dl = ∫ (∇ × H) · dA। উভয় সমাকলন তুলনা করলে ব্যবকলন রূপ ∇ × H = J পাওয়া যায়।'
      }
    },
    {
      id: 'pq-ch11-l03-03',
      question: {
        en: 'A coaxial cable has an inner solid conductor of radius a carrying current +I, and a thin outer cylindrical shield of radius b carrying return current -I. Using Ampere’s law, find B in the regions: (a) a < r < b, and (b) r > b.',
        hi: 'एक समाक्षीय केबल में +I धारा ले जाने वाला त्रिज्या a का आंतरिक चालक और -I वापसी धारा ले जाने वाला त्रिज्या b का बाहरी शील्ड है। एम्पीयर के नियम से B ज्ञात कीजिए: (a) a < r < b, और (b) r > b।',
        bn: 'একটি কোঅ্যাক্সিয়াল ক্যাবলের a ব্যাসার্ধের ভেতরের পরিবাহী +I প্রবাহ এবং b ব্যাসার্ধের বাইরের পরিবাহী -I প্রত্যাবর্তন প্রবাহ বহন করে। অ্যাম্পিয়ারের সূত্র ব্যবহার করে B নির্ণয় করুন: (a) a < r < b, এবং (b) r > b অঞ্চলে।'
      },
      hint: {
        en: 'For a < r < b, enclosed current is +I. For r > b, net enclosed current is +I + (-I) = 0.',
        hi: 'a < r < b के लिए परिबद्ध धारा +I है। r > b के लिए कुल परिबद्ध धारा शून्य है।',
        bn: 'a < r < b এর জন্য আবদ্ধ কারেন্ট +I। r > b এর জন্য মোট কারেন্ট +I - I = ০।'
      },
      answerKey: {
        en: '(a) For a < r < b: B(2π r) = μ0 I => B = (μ0 I) / (2π r). (b) For r > b: Net enclosed current I_enc = I - I = 0 => B = 0.',
        hi: '(a) a < r < b के लिए: B = μ0 I / (2π r)। (b) r > b के लिए: कुल धारा शून्य होने से B = 0।',
        bn: '(a) a < r < b অঞ্চলে: B = μ0 I / (২π r)। (b) r > b অঞ্চলে: মোট প্রবাহ শূন্য হওয়ায় B = ০।'
      }
    },
    {
      id: 'pq-ch11-l03-04',
      question: {
        en: 'A square cross-section toroid has inner radius R1 = 12 cm, outer radius R2 = 18 cm, and N = 600 turns. If the winding carries 4.0 A, calculate B at the inner radius R1 and outer radius R2.',
        hi: 'एक वर्गाकार अनुप्रस्थ काट वाले टोरोइड की आंतरिक त्रिज्या R1 = 12 सेमी, बाहरी त्रिज्या R2 = 18 सेमी और फेरों की संख्या N = 600 है। यदि धारा 4.0 A है, तो R1 और R2 पर B की गणना कीजिए।',
        bn: 'বর্গাকার প্রস্থচ্ছেদের একটি টরয়েডের ভেতরের ব্যাসার্ধ R1 = ১২ সেমি, বাইরের ব্যাসার্ধ R2 = ১৮ সেমি এবং পাকসংখ্যা N = ৬০০। যদি এতে ৪.০ A কারেন্ট প্রবাহিত হয়, তবে R1 এবং R2 ব্যাসার্ধে B নির্ণয় করুন।'
      },
      hint: {
        en: 'Use B(r) = (μ0 N I) / (2π r) with r = 0.12 m and r = 0.18 m.',
        hi: 'B(r) = (μ0 N I) / (2π r) का उपयोग r = 0.12 मीटर और r = 0.18 मीटर के लिए करें।',
        bn: 'r = ০.১২ মিটার এবং r = ০.১৮ মিটারের জন্য B(r) = (μ0 N I) / (২π r) সূত্র ব্যবহার করুন।'
      },
      answerKey: {
        en: 'At R1 = 0.12 m: B = (2 × 10⁻⁷ · 600 · 4.0) / 0.12 = 4.0 × 10⁻³ T = 4.0 mT. At R2 = 0.18 m: B = (2 × 10⁻⁷ · 600 · 4.0) / 0.18 = 2.67 × 10⁻³ T = 2.67 mT.',
        hi: 'R1 पर: B = 4.0 mT। R2 पर: B = 2.67 mT।',
        bn: 'R1 এ: B = ৪.০ mT। R2 এ: B = ২.৬৭ mT।'
      }
    },
    {
      id: 'pq-ch11-l03-05',
      question: {
        en: 'Explain why classical Ampere’s circuital law must be modified for high-frequency AC circuits containing capacitive elements.',
        hi: 'समझाइए कि धारितीय तत्वों वाले उच्च-आवृत्ति एसी परिपथों के लिए शास्त्रीय एम्पीयर नियम को संशोधित क्यों किया जाना चाहिए।',
        bn: 'ব্যাখ্যা করুন কেন ধারক উপাদান বিশিষ্ট উচ্চ-ফ্রিকোয়েন্সি এসি বর্তনীর ক্ষেত্রে চিরায়ত অ্যাম্পিয়ারের সূত্র পরিবর্তন করা আবশ্যক।'
      },
      hint: {
        en: 'Consider a Gaussian pillbox or Amperian loop bounded by a surface passing through the capacitor gap where conduction current is zero.',
        hi: 'संधारित्र प्लेटों के बीच के क्षेत्र से गुजरने वाली सतह पर विचार करें जहाँ चालन धारा शून्य होती है।',
        bn: 'ক্যাপাসিটর পাতের মধ্যবর্তী স্থানে চালন কারেন্ট শূন্য থাকে, এমন একটি তলের কথা বিবেচনা করুন।'
      },
      answerKey: {
        en: 'Between capacitor plates, conduction current J_c is zero because no charges physically jump across the dielectric gap. An Amperian loop enclosing the wire detects I, but choosing a bulging surface passing between the plates gives zero enclosed conduction current, violating surface independence. Maxwell resolved this by introducing displacement current I_d = ε0 dΦ_E/dt.',
        hi: 'संधारित्र प्लेटों के बीच चालन धारा शून्य होती है। यदि समाकलन सतह प्लेटों के बीच से गुजरे तो परिणाम शून्य आता है, जो विरोधाभास है। मैक्सवेल ने विस्थापन धारा जोड़कर इस विसंगति को दूर किया।',
        bn: 'ক্যাপাসিটর পাতের মাঝে কোনো ইলেকট্রন চলাচল না করায় পরিবাহী প্রবাহ শূন্য হয়। তারের চারপাশের লুপে কারেন্ট থাকলেও পাতের মধ্যবর্তী তল ধরলে আবদ্ধ প্রবাহ শূন্য দেখায়। ম্যাক্সওয়েল সরণ প্রবাহ যোগ করে এই অসামঞ্জস্য দূর করেন।'
      }
    }
  ]
};
