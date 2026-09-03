import { Lesson } from '../types';

export const LESSON_GAUSS_LAW: Lesson = {
  id: 'lsn-ch11-gauss-law',
  topicId: 'ch11-gauss-law',
  chapterId: 'ch-em-waves',
  order: 2,
  title: {
    en: "Gauss's Law & Electric Flux",
    hi: 'गॉस का नियम एवं विद्युत फ्लक्स',
    bn: 'গাউসের সূত্র ও তড়িৎ ফ্লাক্স'
  },
  description: {
    en: "Formulation of electric flux, closed Gaussian surfaces, Gauss's law for electrostatics, enclosed charge calculations, and field derivations across spherical, cylindrical, and planar symmetries.",
    hi: 'विद्युत फ्लक्स की अवधारणा, संवृत गॉसियन सतहें, स्थिरवैद्युतिकी हेतु गॉस का नियम, परिबद्ध आवेश गणना, तथा गोलीय, बेलनाकार एवं समतलीय सममिति में विद्युत क्षेत्र की व्युत्पत्ति।',
    bn: 'তড়িৎ ফ্লাক্সের ধারণা, বদ্ধ গাউসীয় তল, স্থিরতড়িৎ বিজ্ঞানে গাউসের সূত্র, আবদ্ধ আধানের হিসাব এবং গোলকীয়, চোঙাকৃতি ও সমতল প্রতিসাম্যে ক্ষেত্র প্রাবল্য নির্ণয়।'
  },
  estimatedMinutes: 35,
  easyExplanation: {
    en: "Imagine an invisible net surrounding a swarm of glowing fireflies. The total light rays crossing through the net depends only on how many fireflies are trapped inside, not on the net's shape or where the fireflies sit. Gauss's Law states exactly this for electricity: the total electric flux (field lines) leaving any closed imaginary surface (called a Gaussian surface) equals the total electric charge enclosed divided by the permittivity of the medium ε₀: ∮ E · dA = Q_enclosed / ε₀. When physical systems have high geometric symmetry (spheres, infinite cylinders, or flat planes), Gauss's Law allows us to calculate electric fields in a single step without difficult integrals.",
    hi: 'कल्पना कीजिए कि एक अदृश्य जाली जुगनुओं के झुंड को घेरे हुए है। जाली से बाहर निकलने वाले कुल प्रकाश की किरणें केवल इस बात पर निर्भर करती हैं कि कितने जुगनू अंदर बंद हैं, जाली के आकार पर नहीं। गॉस का नियम ठीक यही बताता है: किसी भी बंद काल्पनिक सतह (गॉसियन सतह) से निकलने वाला कुल विद्युत फ्लक्स अंदर बंद कुल आवेश को माध्यम के परावैद्युतांक ε₀ से विभाजित करने पर प्राप्त मान के बराबर होता है: ∮ E · dA = Q_enclosed / ε₀। जब प्रणालियों में गोलीय, बेलनाकार या समतलीय सममिति होती है, तो गॉस का नियम जटिल समाकलन के बिना तुरंत विद्युत क्षेत्र निकालने में मदद करता है।',
    bn: 'কল্পনা করুন একটি অদৃশ্য জাল জোনাকি পোকার ঝাঁককে ঘিরে রেখেছে। জাল ভেদ করে বের হওয়া মোট আলোর রশ্মি কেবল ভেতরে কয়টি জোনাকি বন্দি আছে তার উপর নির্ভর করে, জালের আকারের উপর নয়। গাউসের সূত্রটি ঠিক এই ধারণারই রূপ: যেকোনো আবদ্ধ কাল্পনিক তল (গাউসীয় তল) অতিক্রমকারী মোট তড়িৎ ফ্লাক্স হলো তার অভ্যন্তরে আবদ্ধ মোট আধান ও মাধ্যমের ভেদ্যতার (ε₀) অনুপাত: ∮ E · dA = Q_enclosed / ε₀। গোলকীয়, চোঙাকৃতি বা সমতল প্রতিসাম্য থাকলে এই সূত্রের সাহায্যে জটিল সমাকলন ছাড়াই তড়িৎ ক্ষেত্র সহজে বের করা যায়।'
  },
  detailedExplanation: {
    en: "Gauss's law is one of the four fundamental Maxwell equations, forming the cornerstone of electrostatics. It relates the distribution of electric charge to the resulting electric field. Mathematically, the net outward electric flux Φ_E through any closed surface S is defined by the surface integral Φ_E = ∮_S E · dA.\n\nGauss's law states that: ∮_S E · dA = Q_enclosed / ε0.\nIn media with polarization, the generalized form uses electric displacement D: ∮_S D · dA = Q_free,enclosed.\n\nApplying the Divergence Theorem (Gauss-Ostrogradsky theorem) converts the surface integral to a volume integral: ∮_S E · dA = ∫_V (∇ · E) dV = (1/ε0) ∫_V ρ dV. Since this holds for any arbitrary volume, the differential (point) form of Gauss's law is established: ∇ · E = ρ / ε0, or ∇ · D = ρ_v (where ρ_v is the free volume charge density in C/m³).\n\nPractical application of Gauss's law relies on choosing a Gaussian surface that matches the natural symmetry of the charge distribution so that E is either constant and perpendicular to dA, or parallel to dA (making E · dA = 0):\n1. Spherical Symmetry: Concentric spherical shell of radius r. For a point charge or conducting sphere of charge Q: E(4π r²) = Q/ε0 => E = Q / (4π ε0 r²).\n2. Cylindrical Symmetry: Coaxial cylinder of radius r and length L. For an infinite line of linear charge density λ (C/m): E(2π r L) = λ L / ε0 => E = λ / (2π ε0 r).\n3. Planar Symmetry: Pillbox cylinder straddling an infinite flat sheet with surface charge density σ (C/m²): 2 E A = σ A / ε0 => E = σ / (2ε0). Between two oppositely charged parallel conducting plates, the field superimposes to E = σ / ε0.",
    hi: 'गॉस का नियम स्थिरवैद्युतिकी का आधार स्तंभ और मैक्सवेल के चार समीकरणों में से पहला है। यह विद्युत आवेश वितरण को परिणामी विद्युत क्षेत्र से जोड़ता है। किसी बंद सतह S से गुजरने वाला कुल विद्युत फ्लक्स Φ_E = ∮_S E · dA होता है।\n\nगॉस का नियम कहता है: ∮_S E · dA = Q_enclosed / ε0। सामान्यीकृत रूप में विस्थापन वेक्टर D के लिए: ∮_S D · dA = Q_free।\n\nडाइवर्जेंस प्रमेय लगाने पर इसका अवकल (बिंदु) रूप प्राप्त होता है: ∇ · E = ρ / ε0 अथवा ∇ · D = ρ_v।\n\nसममिति के आधार पर अनुप्रयोग:\n1. गोलीय सममिति: बिंदु आवेश अथवा गोलीय चालक हेतु E = Q / (4π ε0 r²)।\n2. बेलनाकार सममिति: रेखीय आवेश घनत्व λ हेतु E = λ / (2π ε0 r)।\n3. समतलीय सममिति: अपरिमित समतल आवेशित चादर हेतु E = σ / (2ε0); संधारित्र की दो विपरीत आवेशित प्लेटों के बीच E = σ / ε0।',
    bn: 'গাউসের সূত্রটি স্থির তড়িৎবিদ্যার মূল ভিত্তি এবং ম্যাক্সওয়েলের চারটি সমীকরণের প্রথমটি। এটি আধান বণ্টন এবং তার ফলে সৃষ্ট তড়িৎ ক্ষেত্রের সম্পর্ক নির্ধারণ করে। যেকোনো আবদ্ধ তল S দিয়ে অতিক্রান্ত মোট তড়িৎ ফ্লাক্স হলো Φ_E = ∮_S E · dA।\n\nগাউসের মূল সূত্র: ∮_S E · dA = Q_enclosed / ε0। ডাইইলেক্ট্রিক মাধ্যমে: ∮_S D · dA = Q_free।\n\nডাইভারজেন্স উপপাদ্য প্রয়োগ করে এর অবকল রূপ পাওয়া যায়: ∇ · E = ρ / ε0 বা ∇ · D = ρ_v।\n\nপ্রতিসাম্যের উপর ভিত্তি করে প্রয়োগসমূহ:\n১. গোলকীয় প্রতিসাম্য: বিন্দু আধান বা গোলকের ক্ষেত্রে E = Q / (4π ε0 r²)।\n২. চোঙাকৃতি প্রতিসাম্য: অসীম দৈর্ঘ্যের তারে রৈখিক আধান ঘনত্ব λ হলে E = λ / (2π ε0 r)।\n৩. সমতল প্রতিসাম্য: অসীম সমতল পাতলা চাদরে ক্ষেত্রফল আধান ঘনত্ব σ হলে E = σ / (2ε0); এবং সমান্তরাল ধারক পাতের মধ্যে E = σ / ε0।'
  },
  formulas: [
    {
      id: 'f-gauss-law-integral',
      symbol: 'Φ_E',
      expression: '∮ E · dA = Q_enc / ε₀',
      title: {
        en: "Gauss's Law (Integral Form)",
        hi: 'गॉस का नियम (समाकल रूप)',
        bn: 'গাউসের সূত্র (সমাকলন রূপ)'
      },
      description: {
        en: 'Total electric flux exiting a closed surface equals total enclosed charge divided by permittivity of free space.',
        hi: 'किसी बंद सतह से बाहर निकलने वाला कुल विद्युत फ्लक्स परिबद्ध आवेश को ε₀ से विभाजित करने के बराबर होता है।',
        bn: 'যেকোনো আবদ্ধ তল থেকে নির্গত মোট তড়িৎ ফ্লাক্স হলো আবদ্ধ মোট আধান ও ε₀ এর অনুপাত।'
      },
      variables: [
        { symbol: 'E', name: { en: 'Electric field vector (V/m)', hi: 'विद्युत क्षेत्र सदिश (V/m)', bn: 'তড়িৎ ক্ষেত্র ভেক্টর (V/m)' } },
        { symbol: 'dA', name: { en: 'Outward area normal vector element (m²)', hi: 'सतह क्षेत्रफल सदिश तत्व (m²)', bn: 'বহির্মুখী ক্ষেত্রফল ভেক্টর উপাদান (m²)' } },
        { symbol: 'Q_enc', name: { en: 'Net enclosed electric charge (C)', hi: 'कुल परिबद्ध विद्युत आवेश (C)', bn: 'আবদ্ধ মোট তড়িৎ আধান (C)' } },
        { symbol: 'ε₀', name: { en: 'Permittivity of vacuum (8.854 × 10⁻¹² F/m)', hi: 'निर्वात का परावैद्युतांक', bn: 'শূন্যস্থানের ভেদ্যতা' } }
      ]
    },
    {
      id: 'f-gauss-law-differential',
      symbol: '∇ · D',
      expression: '∇ · D = ρ_v,  ∇ · E = ρ / ε₀',
      title: {
        en: "Gauss's Law (Differential / Point Form)",
        hi: 'गॉस का नियम (अवकल / बिंदु रूप)',
        bn: 'গাউসের সূত্র (ব্যবকলন / বিন্দু রূপ)'
      },
      description: {
        en: 'The divergence of electric displacement equals free volume charge density at every infinitesimal point in space.',
        hi: 'विद्युत विस्थापन का डाइवर्जेंस अंतरिक्ष के प्रत्येक बिंदु पर मुक्त आयतन आवेश घनत्व के बराबर होता है।',
        bn: 'মহাকাশের যেকোনো বিন্দুতে তড়িৎ সরণের ডাইভারজেন্স মুক্ত আয়তন আধান ঘনত্বের সমান।'
      },
      variables: [
        { symbol: '∇ · D', name: { en: 'Divergence of electric displacement (C/m³)', hi: 'विद्युत विस्थापन का डाइवर्जेंस', bn: 'তড়িৎ সরণের ডাইভারজেন্স' } },
        { symbol: 'ρ_v', name: { en: 'Free volume charge density (C/m³)', hi: 'मुक्त आयतन आवेश घनत्व (C/m³)', bn: 'মুক্ত আয়তন আধান ঘনত্ব (C/m³)' } }
      ]
    },
    {
      id: 'f-cylindrical-field',
      symbol: 'E_line',
      expression: 'E = λ / (2π ε₀ r)',
      title: {
        en: 'Electric Field of Infinite Line Charge',
        hi: 'अनंत रेखीय आवेश का विद्युत क्षेत्र',
        bn: 'অসীম দৈর্ঘ্যের রৈখিক আধানের তড়িৎ ক্ষেত্র'
      },
      description: {
        en: 'Radial electric field at distance r from an infinitely long straight filament carrying linear charge density λ.',
        hi: 'रेखीय आवेश घनत्व λ वाले अनंत सीधे तार से r दूरी पर त्रिज्य विद्युत क्षेत्र।',
        bn: 'রৈখিক আধান ঘনত্ব λ বিশিষ্ট অসীম সরল তার থেকে r দূরত্বে ব্যাসার্ধ বরাবর তড়িৎ ক্ষেত্র।'
      },
      variables: [
        { symbol: 'E', name: { en: 'Radial electric field (V/m)', hi: 'त्रिज्य विद्युत क्षेत्र (V/m)', bn: 'ব্যাসার্ধীয় তড়িৎ ক্ষেত্র (V/m)' } },
        { symbol: 'λ', name: { en: 'Linear charge density (C/m)', hi: 'रेखीय आवेश घनत्व (C/m)', bn: 'রৈখিক আধান ঘনত্ব (C/m)' } },
        { symbol: 'r', name: { en: 'Radial distance from axis (m)', hi: 'अक्ष से त्रिज्य दूरी (m)', bn: 'অক্ষ থেকে ব্যাসার্ধীয় দূরত্ব (m)' } }
      ]
    },
    {
      id: 'f-planar-field',
      symbol: 'E_sheet',
      expression: 'E = σ / (2ε₀) [Single Sheet],  E = σ / ε₀ [Parallel Plates]',
      title: {
        en: 'Electric Field of Planar Surface Charge',
        hi: 'समतल पृष्ठीय आवेश का विद्युत क्षेत्र',
        bn: 'সমতল পৃষ্ঠীয় আধানের তড়িৎ ক্ষেত্র'
      },
      description: {
        en: 'Uniform perpendicular electric field produced by an infinite plane of charge with surface density σ.',
        hi: 'पृष्ठीय आवेश घनत्व σ वाले अनंत समतल द्वारा उत्पन्न एकसमान लंबवत विद्युत क्षेत्र।',
        bn: 'তলে পৃষ্ঠীয় আধান ঘনত্ব σ থাকলে উৎপন্ন সুষম লম্ব তড়িৎ ক্ষেত্র।'
      },
      variables: [
        { symbol: 'E', name: { en: 'Uniform electric field (V/m)', hi: 'एकसमान विद्युत क्षेत्र (V/m)', bn: 'সুষম তড়িৎ ক্ষেত্র (V/m)' } },
        { symbol: 'σ', name: { en: 'Surface charge density (C/m²)', hi: 'पृष्ठीय आवेश घनत्व (C/m²)', bn: 'তলমাত্রিক আধান ঘনত্ব (C/m²)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-flux-definition',
      title: {
        en: '1. Electric Flux and the Gaussian Surface',
        hi: '1. विद्युत फ्लक्स एवं गॉसियन सतह',
        bn: '১. তড়িৎ ফ্লাক্স ও গাউসীয় তল'
      },
      content: {
        en: 'Electric flux Φ_E represents the number of electric field lines passing through a given geometric area. For a flat surface with area vector A (normal to surface) in a uniform field E, Φ_E = E · A = E A cos(θ). For an arbitrary curved surface, flux is computed by integrating E · dA over the entire surface.\n\nA Gaussian surface is an imaginary closed mathematical surface chosen deliberately around a charge distribution. Because it is closed, its outward normal vector always points outward from the enclosed interior volume. Charges outside the Gaussian surface contribute zero net flux through the surface: every field line entering through one side must eventually exit through the opposite side.',
        hi: 'विद्युत फ्लक्स Φ_E किसी दिए गए क्षेत्रफल से गुजरने वाली विद्युत क्षेत्र रेखाओं की संख्या को दर्शाता है। एकसमान क्षेत्र में सपाट सतह के लिए Φ_E = E · A = E A cos(θ)।\n\nगॉसियन सतह एक काल्पनिक बंद गणितीय सतह है जिसे आवेश वितरण के चारों ओर चुना जाता है। गॉसियन सतह के बाहर स्थित आवेश सतह से गुजरने वाले कुल फ्लक्स में शून्य योगदान देते हैं, क्योंकि एक तरफ से प्रवेश करने वाली रेखा दूसरी तरफ से बाहर निकल जाती है।',
        bn: 'তড়িৎ ফ্লাক্স Φ_E কোনো তলের মধ্য দিয়ে অতিক্রান্ত তড়িৎ বলরেখার সংখ্যা নির্দেশ করে। সমতল ক্ষেত্রে Φ_E = E · A = E A cos(θ)।\n\nগাউসীয় তল হলো আধানকে ঘিরে ইচ্ছামতো কল্পনা করা একটি বদ্ধ গাণিতিক তল। এই তলের বাইরের কোনো আধান মোট ফ্লাক্সে কোনো ভূমিকা রাখে না, কারণ বহিঃস্থ আধানের যেসব বলরেখা এক পাশ দিয়ে প্রবেশ করে তা অন্য পাশ দিয়ে বেরিয়ে যায়।'
      },
      schematicId: 'circuit-ch11-gauss-law'
    },
    {
      id: 'sec-symmetry-applications',
      title: {
        en: '2. Exploiting Symmetry in Practical Engineering',
        hi: '2. व्यावहारिक इंजीनियरिंग में सममिति का उपयोग',
        bn: '২. ব্যবহারিক প্রকৌশলে প্রতিসাম্যের প্রয়োগ'
      },
      content: {
        en: 'Gauss’s law is always physically valid for any closed surface, but it is practically useful for calculating E only when high symmetry exists:\n• Spherical symmetry: Point charges, spherical shells, and isolated conductors.\n• Cylindrical symmetry: Power transmission lines, coaxial cables, and electron beam tubes.\n• Planar symmetry: Parallel plate capacitors, flat busbars, and semiconductor p-n junctions.\n\nInside an isolated electrostatic conductor in equilibrium, the electric field is strictly ZERO (E = 0). If it were non-zero, free electrons would experience force and accelerate, contradicting static equilibrium. Consequently, any net charge residing on a conductor resides entirely on its outer surface, and the electric field immediately outside a conducting surface is normal: E = σ / ε0.',
        hi: 'गॉस का नियम हमेशा वैध रहता है, लेकिन इसका उपयोग E निकालने के लिए तभी संभव है जब उच्च सममिति मौजूद हो:\n• गोलीय सममिति: बिंदु आवेश और गोलीय चालक।\n• बेलनाकार सममिति: पावर ट्रांसमिशन लाइनें और समाक्षीय (coaxial) केबल।\n• समतलीय सममिति: समानांतर प्लेट संधारित्र और अर्धचालक जंक्शन।\n\nस्थिरवैद्युत संतुलन में किसी चालक के भीतर विद्युत क्षेत्र सदैव शून्य होता है (E = 0)। अतः चालक को दिया गया समस्त आवेश उसकी बाहरी सतह पर स्थित होता है, और सतह के ठीक बाहर विद्युत क्षेत्र सतह के लंबवत E = σ / ε0 होता है।',
        bn: 'গাউসের সূত্র সর্বদা সত্য, তবে উচ্চ প্রতিসাম্য থাকলেই কেবল সহজে E নির্ণয়ে এটি সরাসরি ব্যবহার করা যায়:\n• গোলকীয় প্রতিসাম্য: বিন্দু আধান ও গোলকীয় পরিবাহী।\n• চোঙাকৃতি প্রতিসাম্য: বিদ্যুৎ সঞ্চালন লাইন ও কোঅ্যাক্সিয়াল ক্যাবল।\n• সমতল প্রতিসাম্য: সমান্তরাল পাত ধারক ও সেমিকন্ডাক্টর ডায়োড।\n\nস্থিরতড়িৎ ভারসাম্যে পরিবাহীর অভ্যন্তরে তড়িৎ ক্ষেত্র সর্বদা শূন্য (E = ০)। ফলে পরিবাহীর সকল নেট আধান বহির্তলে অবস্থান করে এবং পরিবাহীর ঠিক বাইরে তড়িৎ ক্ষেত্র লম্বভাবে E = σ / ε0 হয়।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-gauss-law',
      title: {
        en: "Gaussian Surfaces: Spherical, Cylindrical & Planar",
        hi: 'गॉसियन सतहें: गोलीय, बेलनाकार एवं समतलीय',
        bn: 'গাউসীয় তল: গোলকীয়, চোঙাকৃতি ও সমতলীয়'
      },
      caption: {
        en: "Illustration of Gaussian pillbox on a planar charge sheet, Gaussian cylinder around a high-voltage line conductor, and Gaussian sphere enclosing a point charge.",
        hi: 'समतल आवेशित चादर पर गॉसियन पिलबॉक्स, उच्च-वोल्टेज चालक तार के चारों ओर गॉसियन बेलन, तथा बिंदु आवेश को घेरता गॉसियन गोला।',
        bn: 'সমতল আধানের উপর গাউসীয় পিলবক্স, উচ্চ-ভোল্টেজ পরিবাহী তারের চারপাশে গাউসীয় চোঙ এবং বিন্দু আধানকে পরিবেষ্টনকারী গাউসীয় গোলক।'
      },
      svgType: 'circuit-ch11-gauss-law'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-coaxial-cable-field',
      problem: {
        en: 'A high-frequency RG-58 coaxial cable has an inner conductor with radius a = 0.45 mm carrying uniform linear charge density λ = +12 nC/m. The outer shield conductor has an inner radius b = 1.50 mm with charge density -12 nC/m. The space between is filled with solid polyethylene (relative permittivity εr = 2.30). Calculate the electric field intensity E at: (a) r = 0.80 mm (inside the dielectric), and (b) r = 2.0 mm (outside the cable).',
        hi: 'एक उच्च-आवृत्ति RG-58 समाक्षीय केबल के आंतरिक चालक की त्रिज्या a = 0.45 मिमी है जिस पर रेखीय आवेश घनत्व λ = +12 nC/m है। बाहरी आवरण चालक की आंतरिक त्रिज्या b = 1.50 मिमी है जिस पर -12 nC/m आवेश है। बीच का स्थान पॉलीथीन (εr = 2.30) से भरा है। विद्युत क्षेत्र तीव्रता E ज्ञात कीजिए: (a) r = 0.80 मिमी पर, तथा (b) r = 2.0 मिमी पर (केबल के बाहर)।',
        bn: 'একটি আরজি-৫৮ কোঅ্যাক্সিয়াল ক্যাবলের ভেতরের পরিবাহীর ব্যাসার্ধ a = ০.৪৫ মিমি এবং রৈখিক আধান ঘনত্ব λ = +১২ nC/m। বাইরের পরিবাহীর ভেতরের ব্যাসার্ধ b = ১.৫০ মিমি এবং আধান ঘনত্ব -১২ nC/m। এদের মধ্যবর্তী স্থানে পলিথিন (εr = ২.৩০) ডাইইলেক্ট্রিক রয়েছে। তড়িৎ ক্ষেত্র প্রাবল্য E নির্ণয় করুন: (a) r = ০.৮০ মিমি বিন্দুতে এবং (b) r = ২.০ মিমি বিন্দুতে (ক্যাবলের বাইরে)।'
      },
      solution: {
        en: 'Step 1: Formulate cylindrical Gaussian surface of radius r and length L between conductors (a < r < b):\n∮ D · dA = Q_free,enc\nD · (2π r L) = λ · L => D = λ / (2π r).\nSince D = ε E = ε0 εr E:\nE(r) = λ / (2π ε0 εr r).\n\nStep 2: Evaluate at r = 0.80 mm = 0.80 × 10⁻³ m:\nε = 2.30 · (8.854 × 10⁻¹² F/m) = 2.0364 × 10⁻¹¹ F/m.\nE(0.80 mm) = (12 × 10⁻⁹ C/m) / [2 · π · (2.0364 × 10⁻¹¹ F/m) · (0.80 × 10⁻³ m)]\nE = (12 × 10⁻⁹) / (1.0236 × 10⁻¹³) = 117,233 V/m ≈ 117.2 kV/m.\n\nStep 3: Outside the cable (r = 2.0 mm > b):\nA Gaussian cylinder enclosing r = 2.0 mm encompasses both inner (+λ) and outer (-λ) conductors.\nTotal enclosed charge Q_enc = (+λ + (-λ)) L = 0.\nTherefore: E(r > b) = 0 V/m.\n\nPhysical Interpretation: The outer conductor perfectly electrostatic-shields the external environment from radiation and electric field stress.',
        hi: 'चरण 1: बेलनाकार गॉसियन सतह (a < r < b) के लिए:\nE(r) = λ / (2π ε0 εr r)।\n\nचरण 2: r = 0.80 मिमी पर गणना:\nε = 2.30 · (8.854 × 10⁻¹²) = 2.036 × 10⁻¹¹ F/m।\nE = (12 × 10⁻⁹) / [2π · (2.036 × 10⁻¹¹) · (0.80 × 10⁻³)] = 117.2 kV/m।\n\nचरण 3: केबल के बाहर (r = 2.0 मिमी):\nकुल परिबद्ध आवेश Q_enc = +λ - λ = 0। अतः E = 0 V/m।\nनिष्कर्ष: बाहरी परिरक्षण केबल से बाहर विद्युत क्षेत्र को पूरी तरह शून्य कर देता है।',
        bn: 'ধাপ ১: পরিবাহীদ্বয়ের মাঝে বেলনাকার গাউসীয় তলের জন্য:\nE(r) = λ / (২π ε0 εr r)।\n\nধাপ ২: r = ০.৮০ মিমি বিন্দুতে মান বসিয়ে:\nε = ২.৩০ · (৮.৮৫৪ × ১০⁻¹²) = ২.০৩৬ × ১০⁻১১ F/m।\nE = (১২ × ১০⁻৯) / [২π · (২.০৩৬ × ১০⁻১১) · (০.৮০ × ১০⁻৩)] = ১১৭.২ kV/m।\n\nধাপ ৩: ক্যাবলের বাইরে (r = ২.০ মিমি):\nমোট আবদ্ধ আধান Q_enc = +λ - λ = ০। অতএব E = ০ V/m।\nফলাফল: বাইরের পরিবাহীটি সম্পূর্ণ ইলেকট্রোস্ট্যাটিক শিল্ডিং প্রদান করে।'
      },
      givenValues: {
        'a': '0.45 mm',
        'b': '1.50 mm',
        'λ': '+12 nC/m',
        'εr': '2.30',
        'r1': '0.80 mm',
        'r2': '2.0 mm'
      },
      finalAnswer: {
        en: 'E(0.80 mm) = 117.2 kV/m (radially outward),  E(2.0 mm) = 0 V/m',
        hi: 'E(0.80 मिमी) = 117.2 kV/m (त्रिज्यीय बाहर की ओर),  E(2.0 मिमी) = 0 V/m',
        bn: 'E(০.৮০ মিমি) = ১১৭.২ kV/m (বাইরের দিকে),  E(২.০ মিমি) = ০ V/m'
      }
    },
    {
      id: 'ex-parallel-plates-dielectric-breakdown',
      problem: {
        en: 'A parallel plate air capacitor has a plate area A = 0.05 m² separated by distance d = 2.0 mm. A charge Q = 88.54 nC is placed on the positive plate and -88.54 nC on the negative plate. Determine: (a) the surface charge density σ, (b) the electric flux density D, (c) the electric field intensity E, and (d) verify if the field exceeds the dielectric breakdown strength of air (E_breakdown = 3.0 MV/m).',
        hi: 'एक समानांतर प्लेट वायु संधारित्र की प्लेट का क्षेत्रफल A = 0.05 m² और उनके बीच की दूरी d = 2.0 मिमी है। धनात्मक प्लेट पर Q = 88.54 nC और ऋणात्मक प्लेट पर -88.54 nC आवेश है। ज्ञात कीजिए: (a) पृष्ठीय आवेश घनत्व σ, (b) विद्युत फ्लक्स घनत्व D, (c) विद्युत क्षेत्र तीव्रता E, तथा (d) क्या यह वायु की ब्रेकडाउन सीमा (3.0 MV/m) से अधिक है?',
        bn: 'একটি সমান্তরাল পাত বায়ু ধারকের পাতের ক্ষেত্রফল A = ০.০৫ m² এবং পাতদ্বয়ের দূরত্ব d = ২.০ মিমি। ধনাত্মক পাতে Q = ৮৮.৫৪ nC এবং ঋণাত্মক পাতে -৮৮.৫৪ nC আধান দেওয়া হলো। নির্ণয় করুন: (a) পৃষ্ঠীয় আধান ঘনত্ব σ, (b) তড়িৎ ফ্লাক্স ঘনত্ব D, (c) তড়িৎ ক্ষেত্র প্রাবল্য E, এবং (d) এটি বায়ুর ডাইইলেক্ট্রিক ব্রেকডাউন সীমা (৩.০ MV/m) অতিক্রম করেছে কিনা তা যাচাই করুন।'
      },
      solution: {
        en: 'Step 1: Compute surface charge density σ:\nσ = Q / A = (88.54 × 10⁻⁹ C) / (0.05 m²) = 1.7708 × 10⁻⁶ C/m² = 1.771 μC/m².\n\nStep 2: By Gauss’s law between parallel plates:\nD = σ = 1.7708 × 10⁻⁶ C/m².\n\nStep 3: Compute electric field E:\nE = D / ε0 = (1.7708 × 10⁻⁶ C/m²) / (8.854 × 10⁻¹² F/m) = 200,000 V/m = 200 kV/m = 0.20 MV/m.\n\nStep 4: Breakdown check:\nSince E = 0.20 MV/m is well below the dielectric breakdown threshold of air (3.0 MV/m), the capacitor operates safely with a safety margin of 3.0 / 0.20 = 15.',
        hi: 'चरण 1: पृष्ठीय आवेश घनत्व σ = Q / A = 88.54 × 10⁻⁹ / 0.05 = 1.771 μC/m²।\nचरण 2: प्लेटों के बीच D = σ = 1.771 μC/m²।\nचरण 3: विद्युत क्षेत्र E = σ / ε0 = 1.771 × 10⁻⁶ / 8.854 × 10⁻¹² = 200 kV/m।\nचरण 4: वायु का ब्रेकडाउन 3.0 MV/m है। चूंकि 0.20 MV/m < 3.0 MV/m है, संधारित्र पूरी तरह सुरक्षित है।',
        bn: 'ধাপ ১: পৃষ্ঠীয় আধান ঘনত্ব σ = Q / A = ৮৮.৫৪ × ১০⁻৯ / ০.০৫ = ১.৭৭১ μC/m²।\nধাপ ২: পাতদ্বয়ের মাঝে D = σ = ১.৭৭১ μC/m²।\nধাপ ৩: তড়িৎ ক্ষেত্র E = σ / ε0 = ১.৭৭১ × ১০⁻৬ / ৮.৮৫৪ × ১০⁻১২ = ২০০ kV/m।\nধাপ ৪: বায়ুর ব্রেকডাউন ৩.০ MV/m। ২০০ kV/m < ৩.০ MV/m হওয়ায় ধারকটি সম্পূর্ণ নিরাপদ।'
      },
      givenValues: {
        'A': '0.05 m²',
        'd': '2.0 mm',
        'Q': '88.54 nC',
        'ε0': '8.854 × 10⁻¹² F/m'
      },
      finalAnswer: {
        en: 'σ = 1.771 μC/m²,  D = 1.771 μC/m²,  E = 200 kV/m (0.20 MV/m); Safe operation (factor of safety = 15)',
        hi: 'σ = 1.771 μC/m²,  D = 1.771 μC/m²,  E = 200 kV/m; सुरक्षित संचालन (सुरक्षा गुणांक = 15)',
        bn: 'σ = ১.৭৭১ μC/m²,  D = ১.৭৭১ μC/m²,  E = ২০০ kV/m; নিরাপদ পরিচালন (সুরক্ষা গুণক = ১৫)'
      }
    }
  ],
  practicalApplications: {
    en: [
      'High-Voltage Coaxial Cable Design: Calculating radial dielectric stress to optimize insulation thickness and prevent partial discharges.',
      'Faraday Cage Shielding: Protecting sensitive avionics, MRI scanner rooms, and data centers against external electromagnetic pulses and lightning strikes.',
      'Electrostatic Precipitators: Designing cylindrical charging electrodes to remove fly ash and particulate matter from industrial smoke stacks.',
      'Van de Graaff Generators: Utilizing charge transfer to the outer surface of hollow conducting spheres to generate megavolt potentials for nuclear physics.',
      'Capacitive Touchscreens: Detecting tiny changes in surface charge density σ when a conductive human finger perturbs the localized electric flux field.'
    ],
    hi: [
      'उच्च वोल्टेज समाक्षीय केबल डिजाइन: इन्सुलेशन मोटाई अनुकूलित करने और आंशिक डिस्चार्ज रोकने के लिए त्रिज्यीय ढांकता हुआ तनाव की गणना।',
      'फैराडे केज परिरक्षण: संवेदनशील एवियोनिक्स, एमआरआई कमरों और डेटा केंद्रों को बाहरी बिजली और ईएमपी से सुरक्षित रखना।',
      'इलेक्ट्रोस्टैटिक प्रीसिपिटेटर: औद्योगिक चिमनियों से हानिकारक राख और धूल के कणों को अलग करने के लिए बेलनाकार इलेक्ट्रोड डिजाइन करना।',
      'वान डी ग्राफ जनरेटर: परमाणु भौतिकी अनुसंधान के लिए उच्च वोल्टेज उत्पन्न करने हेतु खोखले चालक गोले के बाहरी पृष्ठ पर आवेश संचय का उपयोग।',
      'कैपेसिटिव टचस्क्रीन: उंगली के स्पर्श से स्थानीय विद्युत फ्लक्स में होने वाले सूक्ष्म परिवर्तन को मापकर इनपुट दर्ज करना।'
    ],
    bn: [
      'উচ্চ-ভোল্টেজ কোঅ্যাক্সিয়াল ক্যাবল ডিজাইন: ইনসুলেশনের পুরুত্ব নির্ধারণ এবং পার্শিয়াল ডিসচার্জ রোধে ব্যাসার্ধীয় ডাইইলেক্ট্রিক স্ট্রেস গণনা।',
      'ফ্যারাডে খাঁচা শিল্ডিং: সংবেদনশীল চিকিৎসা সরঞ্জাম (MRI), বিমান এবং ডেটা সেন্টারকে বজ্রপাত ও বাহ্যিক ইলেক্ট্রোম্যাগনেটিক পালস থেকে সুরক্ষা।',
      'ইলেক্ট্রোস্ট্যাটিক প্রিসিপিটেটর: কয়লা চালিত বিদ্যুৎ কেন্দ্রের চিমনির ধোঁয়া থেকে ধূলিকণা অপসারণে চোঙাকৃতি ইলেক্ট্রোড ব্যবহার।',
      'ভ্যান ডি গ্রাফ জেনারেটর: পারমাণবিক গবেষণার জন্য কয়েক মেগাভোল্ট বিভব তৈরি করতে ফাঁপা ধাতব গোলকের বহিঃতলে আধান স্থানান্তরের প্রয়োগ।',
      'ক্যাপাসিটিভ টাচস্ক্রিন: মানুষের আঙুলের সংস্পর্শে পৃষ্ঠীয় আধান ঘনত্ব ও স্থানীয় ফ্লাক্স পরিবর্তনের নিখুঁত পরিমাপ।'
    ]
  },
  importantPoints: {
    en: [
      "Gauss's law is mathematically exact for any closed surface of any arbitrary geometry, whether regular or distorted.",
      'Charges located entirely outside the Gaussian surface contribute ZERO to the total net surface integral ∮ E · dA.',
      'Inside an ideal electrostatic conductor in static equilibrium, the electric field is strictly zero everywhere (E = 0).',
      'Any excess net charge placed on an electrostatic conductor resides exclusively on its outer boundary surface.',
      'The electric field immediately outside a charged conductor is always strictly perpendicular to the surface: E = σ / ε0 n̂.',
      "The point form of Gauss's law ∇ · D = ρ_v directly asserts that electric flux lines originate on positive charges and terminate on negative charges."
    ],
    hi: [
      'गॉस का नियम किसी भी बंद सतह के लिए गणितीय रूप से सदैव सत्य है, चाहे सतह का आकार नियमित हो या अनियमित।',
      'गॉसियन सतह के बाहर स्थित कोई भी आवेश कुल पृष्ठ समाकल ∮ E · dA में शून्य योगदान देता है।',
      'स्थिरवैद्युत संतुलन की स्थिति में किसी भी आदर्श चालक के भीतर विद्युत क्षेत्र हर जगह शून्य होता है (E = 0)।',
      'चालक को दिया गया कोई भी अतिरिक्त आवेश केवल उसकी सबसे बाहरी सतह पर ही वितरित होता है।',
      'आवेशित चालक की सतह के ठीक बाहर विद्युत क्षेत्र सदैव सतह के लंबवत होता है: E = σ / ε0।',
      'गॉस के नियम का बिंदु रूप ∇ · D = ρ_v स्पष्ट करता है कि विद्युत फ्लक्स रेखाएं धनावेश से शुरू होती हैं और ऋणावेश पर समाप्त होती हैं।'
    ],
    bn: [
      'গাউসের সূত্রটি যেকোনো আকৃতির বদ্ধ তলের জন্য গাণিতিকভাবে সম্পূর্ণ নির্ভুল, তা নিয়মিত বা অনিয়মিত যাই হোক না কেন।',
      'গাউসীয় তলের বাইরে অবস্থিত আধান মোট পৃষ্ঠ সমাকলনে ∮ E · dA কোনো নেট ফ্লাক্স যোগ করে না।',
      'স্থিরতড়িৎ ভারসাম্যে আদর্শ পরিবাহীর অভ্যন্তরে যেকোনো বিন্দুতে তড়িৎ ক্ষেত্র সম্পূর্ণ শূন্য (E = ০)।',
      'একটি পরিবাহীতে প্রদত্ত যেকোনো অতিরিক্ত আধান সর্বদা কেবল তার সর্ববহিঃস্থ তলেই অবস্থান করে।',
      'একটি পরিবাহী তলের ঠিক বাইরে তড়িৎ ক্ষেত্র সর্বদা তলের সাথে লম্ব থাকে: E = σ / ε0 n̂।',
      'গাউসের অবকল রূপ ∇ · D = ρ_v নির্দেশ করে যে তড়িৎ বলরেখা ধনাত্মক আধানে সৃষ্টি হয় এবং ঋণাত্মক আধানে শেষ হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Applying Gauss’s law across an open surface; Gauss’s law strictly requires a completely closed three-dimensional Gaussian envelope.',
      'Assuming E = 0 everywhere on the surface just because the net enclosed charge is zero (e.g. an electric dipole inside a sphere has non-zero E on the boundary even though net flux is zero).',
      'Forgetting that for a conducting plate, charge distributes onto both outer surfaces, differing from a single idealized mathematical sheet of surface charge.',
      'Confusing the total electric flux Φ_E (measured in V·m or N·m²/C) with the electric field intensity E (measured in V/m).'
    ],
    hi: [
      'खुली सतह पर गॉस का नियम लागू करना; गॉस का नियम केवल पूर्णतः बंद त्रिविमीय सतह पर ही लागू होता है।',
      'यह मान लेना कि यदि कुल परिबद्ध आवेश शून्य है तो सतह पर हर जगह E = 0 होगा (उदाहरण: द्विध्रुव के लिए कुल फ्लक्स शून्य है, परंतु सतह पर E शून्य नहीं होता)।',
      'चालक प्लेट में दोनों तरफ आवेश वितरण को भूल जाना और उसे गणितीय पतली चादर मान लेना।',
      'कुल विद्युत फ्लक्स Φ_E (V·m) और विद्युत क्षेत्र तीव्रता E (V/m) को एक ही समझ लेना।'
    ],
    bn: [
      'খোলা তলে গাউসের সূত্র প্রয়োগ করা; গাউসের সূত্র কেবল সম্পূর্ণ আবদ্ধ ত্রিমাত্রিক তলের জন্যই প্রযোজ্য।',
      'বদ্ধ আধান শূন্য হলেই তলের সর্বত্র E = ০ ধরে নেওয়া (যেমন একটি তড়িৎ দ্বিমেরু ভেতরে থাকলে নিট ফ্লাক্স শূন্য হলেও তলে E থাকে)।',
      'পরিবাহী পাতের ক্ষেত্রে আধান উভয় তলে বণ্টিত হয়, যা একটিমাত্র পাতলা কাল্পনিক চাদরের চেয়ে আলাদা তা বিবেচনায় না রাখা।',
      'মোট তড়িৎ ফ্লাক্স Φ_E (V·m) এবং তড়িৎ ক্ষেত্র প্রাবল্য E (V/m) এর একক ও ধারণাকে গুলিয়ে ফেলা।'
    ]
  },
  keyTakeaways: {
    en: [
      "Gauss's law ∮ E · dA = Q_enc / ε0 directly links total outward electric flux to enclosed charge.",
      'High physical symmetry (spherical, cylindrical, planar) reduces complex surface integrals to simple algebraic multiplications: E · Area = Q_enc / ε0.',
      'Faraday cages isolate internal electronic circuits because external electrostatic charges redistribute along the outer shell to maintain E_inside = 0.',
      'The differential form ∇ · D = ρ_v states that electric field lines diverge from positive charge sources and converge onto negative charge sinks.',
      'Inside dielectric media, Gauss’s law takes the invariant form ∮ D · dA = Q_free, automatically accounting for dielectric polarization.'
    ],
    hi: [
      'गॉस का नियम ∮ E · dA = Q_enc / ε0 कुल बाह्य फ्लक्स को परिबद्ध आवेश से सीधे जोड़ता है।',
      'उच्च सममिति जटिल समाकलनों को सरल बीजगणितीय गुणन में बदल देती है: E · Area = Q_enc / ε0।',
      'फैराडे केज आंतरिक उपकरणों को सुरक्षित रखता है क्योंकि बाहरी आवेश सतह पर पुनः वितरित होकर भीतर E = 0 बनाए रखते हैं।',
      'अवकल रूप ∇ · D = ρ_v बताता है कि विद्युत क्षेत्र रेखाएं धनावेश से अपसरित और ऋणावेश पर अभिसरित होती हैं।',
      'परावैद्युत माध्यमों में गॉस का नियम ∮ D · dA = Q_free रूप लेता है, जो ध्रुवीकरण को स्वतः समाहित कर लेता है।'
    ],
    bn: [
      'গাউসের সূত্র ∮ E · dA = Q_enc / ε0 মোট বহির্মুখী ফ্লাক্সকে আবদ্ধ আধানের সাথে সম্পর্কিত করে।',
      'উচ্চ প্রতিসাম্য জটিল সমাকলনকে সহজ বীজগণিতীয় সমীকরণে রূপান্তর করে: E · Area = Q_enc / ε0।',
      'ফ্যারাডে খাঁচা ভেতরের যন্ত্রাংশকে সুরক্ষিত রাখে কারণ বহিস্থ আধান বহির্তলে সজ্জিত হয়ে ভেতরে E = ০ বজায় রাখে।',
      'অবকল রূপ ∇ · D = ρ_v নিশ্চিত করে যে ধনাত্মক আধান তড়িৎ বলরেখার উৎস এবং ঋণাত্মক আধান তার গ্রাহক।',
      'ডাইইলেক্ট্রিক মাধ্যমে ∮ D · dA = Q_free সমীকরণ পোলারাইজেশনকে স্বয়ংক্রিয়ভাবে হিসেবে অন্তর্ভুক্ত করে।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch11-l02-01',
      question: {
        en: 'A point charge +Q is placed at the center of a cube of edge length L. What is the total electric flux exiting through one face of the cube?',
        hi: '+Q बिंदु आवेश L भुजा वाले घन के केंद्र पर रखा है। घन के किसी एक फलक से निकलने वाला कुल विद्युत फ्लक्स कितना होगा?',
        bn: 'L বাহুবিশিষ্ট একটি ঘনকের কেন্দ্রে +Q মানের একটি বিন্দু আধান রাখা আছে। ঘনকটির যেকোনো একটি তল দিয়ে নির্গত মোট তড়িৎ ফ্লাক্স কত?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Q / ε₀', hi: 'Q / ε₀', bn: 'Q / ε₀' } },
        { id: 'opt-b', text: { en: 'Q / (6 ε₀)', hi: 'Q / (6 ε₀)', bn: 'Q / (6 ε₀)' } },
        { id: 'opt-c', text: { en: 'Q / (4π ε₀ L²)', hi: 'Q / (4π ε₀ L²)', bn: 'Q / (4π ε₀ L²)' } },
        { id: 'opt-d', text: { en: 'Zero', hi: 'शून्य', bn: 'শূন্য' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'By Gauss’s law, total flux through all 6 symmetrical faces of the cube is Q / ε0. By symmetry, each individual face transmits exactly 1/6 of the total flux: Φ_face = Q / (6 ε0).',
        hi: 'गॉस के नियम से घन के सभी 6 फलकों से कुल फ्लक्स Q / ε0 है। सममिति के कारण प्रत्येक फलक से फ्लक्स = Q / (6 ε0) होगा।',
        bn: 'গাউসের সূত্রানুযায়ী ঘনকের ৬টি তল দিয়ে মোট ফ্লাক্স Q / ε0। প্রতিসাম্যের কারণে একটি নির্দিষ্ট তল দিয়ে ফ্লাক্স হবে Q / (৬ ε0)।'
      }
    },
    {
      id: 'mcq-ch11-l02-02',
      question: {
        en: 'What is the electrostatic field intensity inside the metallic wall or solid body of a conductor in static equilibrium?',
        hi: 'स्थिर संतुलन में किसी चालक के ठोस धात्विक भाग के भीतर स्थिरवैद्युत क्षेत्र तीव्रता कितनी होती है?',
        bn: 'স্থির ভারসাম্যে কোনো পরিবাহীর ধাতব অভ্যন্তরীণ অংশে তড়িৎ ক্ষেত্র প্রাবল্য কত?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Strictly zero (0 V/m)', hi: 'सर्वथा शून्य (0 V/m)', bn: 'সর্বদা শূন্য (০ V/m)' } },
        { id: 'opt-b', text: { en: 'Equal to σ / ε₀', hi: 'σ / ε₀ के बराबर', bn: 'σ / ε₀ এর সমান' } },
        { id: 'opt-c', text: { en: 'Inversely proportional to radius squared', hi: 'त्रिज्या के वर्ग के व्युत्क्रमानुपाती', bn: 'ব্যাসার্ধের বর্গের ব্যস্তানুপাতিক' } },
        { id: 'opt-d', text: { en: 'Infinite', hi: 'अनंत', bn: 'অসীম' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'In electrostatic equilibrium, free charges rearrange instantly until internal force is canceled, guaranteeing E = 0 everywhere inside the conducting material.',
        hi: 'स्थिरवैद्युत संतुलन में मुक्त आवेश इस प्रकार व्यवस्थित होते हैं कि चालक के भीतर परिणामी विद्युत क्षेत्र सर्वथा शून्य (E = 0) हो जाता है।',
        bn: 'স্থিরতড়িৎ ভারসাম্যে মুক্ত ইলেকট্রন এমনভাবে সজ্জিত হয় যেন পরিবাহীর অভ্যন্তরে সর্বত্র তড়িৎ ক্ষেত্র শূন্য (E = ০) হয়।'
      }
    },
    {
      id: 'mcq-ch11-l02-03',
      question: {
        en: 'What is the differential (point) form of Gauss’s law in terms of electric displacement D and free charge density ρ_v?',
        hi: 'विद्युत विस्थापन D और मुक्त आवेश घनत्व ρ_v के पदों में गॉस के नियम का अवकल रूप क्या है?',
        bn: 'তড়িৎ সরণ D এবং মুক্ত আধান ঘনত্ব ρ_v এর সাপেক্ষে গাউসের সূত্রের অবকল রূপ কোনটি?'
      },
      options: [
        { id: 'opt-a', text: { en: '∇ × D = ρ_v', hi: '∇ × D = ρ_v', bn: '∇ × D = ρ_v' } },
        { id: 'opt-b', text: { en: '∇ · D = ρ_v', hi: '∇ · D = ρ_v', bn: '∇ · D = ρ_v' } },
        { id: 'opt-c', text: { en: '∇ · D = 0', hi: '∇ · D = 0', bn: '∇ · D = 0' } },
        { id: 'opt-d', text: { en: '∇² D = -ρ_v', hi: '∇² D = -ρ_v', bn: '∇² D = -ρ_v' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: "Gauss's law in differential form states that the divergence of the electric displacement field equals the free charge density: ∇ · D = ρ_v.",
        hi: 'गॉस के नियम का अवकल रूप बताता है कि विद्युत विस्थापन का डाइवर्जेंस मुक्त आवेश घनत्व के बराबर होता है: ∇ · D = ρ_v।',
        bn: 'গাউসের সূত্রের অবকল রূপানুযায়ী তড়িৎ সরণ ক্ষেত্রের ডাইভারজেন্স মুক্ত আধান ঘনত্বের সমান: ∇ · D = ρ_v।'
      }
    },
    {
      id: 'mcq-ch11-l02-04',
      question: {
        en: 'How does the electric field E vary with radial distance r from an infinitely long straight wire carrying uniform charge density λ?',
        hi: 'एकसमान आवेश घनत्व λ वाले अनंत सीधे तार से त्रिज्य दूरी r के साथ विद्युत क्षेत्र E कैसे परिवर्तित होता है?',
        bn: 'সুষম আধান ঘনত্ব λ বিশিষ্ট একটি অসীম দীর্ঘ সরল তার থেকে দূরত্বের r সাথে তড়িৎ ক্ষেত্র E কীভাবে পরিবর্তিত হয়?'
      },
      options: [
        { id: 'opt-a', text: { en: 'E ∝ 1 / r²', hi: 'E ∝ 1 / r²', bn: 'E ∝ 1 / r²' } },
        { id: 'opt-b', text: { en: 'E ∝ 1 / r', hi: 'E ∝ 1 / r', bn: 'E ∝ 1 / r' } },
        { id: 'opt-c', text: { en: 'E is constant independent of r', hi: 'E स्थिर है और r पर निर्भर नहीं करता', bn: 'E ধ্রুবক এবং r এর উপর নির্ভরশীল নয়' } },
        { id: 'opt-d', text: { en: 'E ∝ r', hi: 'E ∝ r', bn: 'E ∝ r' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'For an infinite line charge, Gauss’s law gives E(2π r L) = λ L / ε0, hence E = λ / (2π ε0 r), demonstrating that E is inversely proportional to r (1/r).',
        hi: 'अनंत रेखीय आवेश के लिए गॉस के नियम से E = λ / (2π ε0 r) प्राप्त होता है, जो 1/r के समानुपाती है।',
        bn: 'অসীম দৈর্ঘ্যের তারের জন্য গাউসের সূত্র দেয় E = λ / (২π ε0 r), অর্থাৎ E দূরত্বের ব্যস্তানুপাতিক (১/r)।'
      }
    },
    {
      id: 'mcq-ch11-l02-05',
      question: {
        en: 'If an electric dipole with charges +q and -q is enclosed entirely within a closed spherical surface, what is the net electric flux leaving the surface?',
        hi: 'यदि +q और -q आवेशों वाला एक विद्युत द्विध्रुव पूरी तरह से एक बंद गोलीय सतह के भीतर स्थित है, तो सतह से निकलने वाला कुल विद्युत फ्लक्स क्या होगा?',
        bn: 'যদি +q ও -q আধানের একটি তড়িৎ দ্বিমেরু সম্পূর্ণভাবে একটি বদ্ধ গোলকীয় তলের অভ্যন্তরে থাকে, তবে তলটি দিয়ে নির্গত মোট তড়িৎ ফ্লাক্স কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '2q / ε₀', hi: '2q / ε₀', bn: '2q / ε₀' } },
        { id: 'opt-b', text: { en: 'Zero (0)', hi: 'शून्य (0)', bn: 'শূন্য (০)' } },
        { id: 'opt-c', text: { en: 'q / ε₀', hi: 'q / ε₀', bn: 'q / ε₀' } },
        { id: 'opt-d', text: { en: 'q · d / ε₀', hi: 'q · d / ε₀', bn: 'q · d / ε₀' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Total enclosed charge Q_enc = +q + (-q) = 0. According to Gauss’s law, Φ_E = Q_enc / ε0 = 0.',
        hi: 'कुल परिबद्ध आवेश Q_enc = +q - q = 0। गॉस के नियम से कुल फ्लक्स शून्य (0) होगा।',
        bn: 'মোট আবদ্ধ আধান Q_enc = +q - q = ০। গাউসের সূত্রানুযায়ী মোট ফ্লাক্স শূন্য (০)।'
      }
    },
    {
      id: 'mcq-ch11-l02-06',
      question: {
        en: 'What is the electric field intensity between two large, oppositely charged parallel conducting plates carrying surface charge densities +σ and -σ in air?',
        hi: 'वायु में +σ और -σ पृष्ठीय आवेश घनत्व वाली दो बड़ी समानांतर चालक प्लेटों के बीच विद्युत क्षेत्र तीव्रता क्या होती है?',
        bn: 'বায়ুতে +σ এবং -σ পৃষ্ঠীয় আধান ঘনত্ব বিশিষ্ট দুটি সমান্তরাল পরিবাহী পাতের মধ্যবর্তী স্থানে তড়িৎ ক্ষেত্র প্রাবল্য কত?'
      },
      options: [
        { id: 'opt-a', text: { en: 'E = σ / (2ε₀)', hi: 'E = σ / (2ε₀)', bn: 'E = σ / (2ε₀)' } },
        { id: 'opt-b', text: { en: 'E = σ / ε₀', hi: 'E = σ / ε₀', bn: 'E = σ / ε₀' } },
        { id: 'opt-c', text: { en: 'E = 2σ / ε₀', hi: 'E = 2σ / ε₀', bn: 'E = 2σ / ε₀' } },
        { id: 'opt-d', text: { en: 'E = 0', hi: 'E = 0', bn: 'E = 0' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Each sheet contributes σ / (2ε0) in the same direction between the plates. Vector addition yields E_net = σ / (2ε0) + σ / (2ε0) = σ / ε0.',
        hi: 'प्रत्येक प्लेट बीच के क्षेत्र में समान दिशा में σ / (2ε0) का योगदान देती है। दोनों का योग E = σ / ε0 होता है।',
        bn: 'পাতদ্বয়ের মধ্যবর্তী স্থানে প্রতিটি পাত একই অভিমুখে σ / (২ε0) ক্ষেত্র তৈরি করে। এদের যোগফল E = σ / ε0।'
      }
    },
    {
      id: 'mcq-ch11-l02-07',
      question: {
        en: 'A closed Gaussian surface encloses no charges (Q_enc = 0). Which statement MUST be true?',
        hi: 'एक बंद गॉसियन सतह के भीतर कोई आवेश नहीं है (Q_enc = 0)। कौन सा कथन अनिवार्य रूप से सत्य है?',
        bn: 'একটি বদ্ধ গাউসীয় তলে কোনো আবদ্ধ আধান নেই (Q_enc = ০)। কোন উক্তিটি অবশ্যই সত্য?'
      },
      options: [
        { id: 'opt-a', text: { en: 'The electric field E is zero everywhere on the surface', hi: 'सतह पर हर जगह विद्युत क्षेत्र E शून्य होगा', bn: 'তলের সর্বত্র তড়িৎ ক্ষেত্র E শূন্য হবে' } },
        { id: 'opt-b', text: { en: 'The net electric flux through the closed surface is zero', hi: 'बंद सतह से गुजरने वाला कुल विद्युत फ्लक्स शून्य होगा', bn: 'বদ্ধ তলের মধ্য দিয়ে মোট তড়িৎ ফ্লাক্স শূন্য হবে' } },
        { id: 'opt-c', text: { en: 'No external charges exist anywhere in the universe', hi: 'ब्रह्मांड में कहीं भी कोई बाह्य आवेश नहीं है', bn: 'মহাবিশ্বে কোনো বহিঃস্থ আধান নেই' } },
        { id: 'opt-d', text: { en: 'Electric potential on the surface must be zero', hi: 'सतह पर विद्युत विभव शून्य होना चाहिए', bn: 'তলে তড়িৎ বিভব অবশ্যই শূন্য হবে' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Gauss’s law guarantees that net flux ∮ E · dA is zero. It does NOT require E itself to be zero at every point on the surface, as external fields can pass straight through.',
        hi: 'गॉस का नियम केवल यह सुनिश्चित करता है कि कुल फ्लक्स ∮ E · dA = 0 होगा। यह आवश्यक नहीं है कि सतह के प्रत्येक बिंदु पर E शून्य हो।',
        bn: 'গাউসের সূত্র নিশ্চিত করে যে মোট ফ্লাক্স ∮ E · dA = ০। এর অর্থ এই নয় যে তলের প্রতিটি বিন্দুতে E এর মান শূন্য হবে।'
      }
    },
    {
      id: 'mcq-ch11-l02-08',
      question: {
        en: 'What mathematical theorem converts the surface integral in Gauss’s law into the volume integral form?',
        hi: 'कौन सा गणितीय प्रमेय गॉस के नियम में पृष्ठ समाकल को आयतन समाकल रूप में परिवर्तित करता है?',
        bn: 'কোন গাণিতিক উপপাদ্যটি গাউসের সূত্রের পৃষ্ঠ সমাকলনকে আয়তন সমাকলনে রূপান্তরিত করে?'
      },
      options: [
        { id: 'opt-a', text: { en: "Stokes' Theorem", hi: 'स्टोक्स का प्रमेय', bn: 'স্টোকসের উপপাদ্য' } },
        { id: 'opt-b', text: { en: 'Divergence Theorem (Gauss-Ostrogradsky Theorem)', hi: 'डाइवर्जेंस प्रमेय (गॉस-ओस्ट्रोग्राडस्की प्रमेय)', bn: 'ডাইভারজেন্স উপপাদ্য (গাউস-ওস্ট্রোগাডস্কি উপপাদ্য)' } },
        { id: 'opt-c', text: { en: "Green's Theorem in the plane", hi: 'समतल में ग्रीन का प्रमेय', bn: 'সমতলে গ্রিনের উপপাদ্য' } },
        { id: 'opt-d', text: { en: 'Mean Value Theorem', hi: 'माध्य मान प्रमेय', bn: 'মধ্যমান উপপাদ্য' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'The Divergence Theorem equates the closed surface flux integral ∮ E · dA to the volume integral of the divergence ∫ (∇ · E) dV.',
        hi: 'डाइवर्जेंस प्रमेय बंद पृष्ठ फ्लक्स समाकल ∮ E · dA को डाइवर्जेंस के आयतन समाकल ∫ (∇ · E) dV के बराबर रखता है।',
        bn: 'ডাইভারজেন্স উপপাদ্য বদ্ধ তলের ফ্লাক্স সমাকলন ∮ E · dA কে আয়তন ডাইভারজেন্স সমাকলনের ∫ (∇ · E) dV সাথে সম্পর্কিত করে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch11-l02-01',
      question: {
        en: 'A solid conducting sphere of radius R1 = 5.0 cm carries a charge of +15 μC. It is surrounded by a concentric thin conducting spherical shell of radius R2 = 10.0 cm carrying a charge of -5 μC. Find the electric field at: (a) r = 3 cm, (b) r = 7 cm, and (c) r = 12 cm.',
        hi: 'R1 = 5.0 सेमी त्रिज्या के एक ठोस चालक गोले पर +15 μC आवेश है। यह R2 = 10.0 सेमी त्रिज्या के संकेंद्रीय पतले चालक खोल से घिरा है जिस पर -5 μC आवेश है। विद्युत क्षेत्र ज्ञात कीजिए: (a) r = 3 सेमी पर, (b) r = 7 सेमी पर, और (c) r = 12 सेमी पर।',
        bn: 'R1 = ৫.০ সেমি ব্যাসার্ধের একটি নিরেট পরিবাহী গোলকে +১৫ μC আধান আছে। এটি R2 = ১০.০ সেমি ব্যাসার্ধের একটি সমকেন্দ্রিক পাতলা পরিবাহী গোলকীয় খোলস দ্বারা পরিবেষ্টিত যাতে -৫ μC আধান রয়েছে। তড়িৎ ক্ষেত্র নির্ণয় করুন: (a) r = ৩ সেমি, (b) r = ৭ সেমি, এবং (c) r = ১২ সেমি দূরত্বে।'
      },
      hint: {
        en: 'Inside conductor E = 0. For intermediate distance use Q_enc = +15 μC. For outer distance use Q_enc = +15 - 5 = +10 μC.',
        hi: 'चालक के अंदर E = 0। बीच के भाग के लिए Q_enc = +15 μC। बाहर के लिए Q_enc = +10 μC लें।',
        bn: 'পরিবাহীর ভেতরে E = ০। অন্তর্বর্তী দূরত্বের জন্য Q_enc = +১৫ μC এবং বাইরের জন্য Q_enc = +১০ μC ব্যবহার করুন।'
      },
      answerKey: {
        en: '(a) E = 0 V/m (inside conductor). (b) E = k Q / r² = (8.99 × 10⁹)(15 × 10⁻⁶)/(0.07)² = 2.75 × 10⁷ V/m (27.5 MV/m). (c) E = (8.99 × 10⁹)(10 × 10⁻⁶)/(0.12)² = 6.24 × 10⁶ V/m (6.24 MV/m).',
        hi: '(a) E = 0 V/m। (b) E = 27.5 MV/m। (c) E = 6.24 MV/m।',
        bn: '(a) E = ০ V/m। (b) E = ২৭.৫ MV/m। (c) E = ৬.২৪ MV/m।'
      }
    },
    {
      id: 'pq-ch11-l02-02',
      question: {
        en: 'Explain why electric charge on an isolated conductor in electrostatic equilibrium resides entirely on the outer surface.',
        hi: 'समझाइए कि स्थिरवैद्युत संतुलन में किसी विलगित चालक का आवेश पूर्णतः उसकी बाहरी सतह पर ही क्यों रहता है।',
        bn: 'ব্যাখ্যা করুন কেন স্থিরতড়িৎ ভারসাম্যে কোনো পরিবাহীর সমস্ত আধান কেবল তার বহিঃপৃষ্ঠেই অবস্থান করে।'
      },
      hint: {
        en: 'Construct a Gaussian surface just inside the outer boundary of the conductor and use E = 0.',
        hi: 'चालक की बाहरी सीमा के ठीक भीतर एक गॉसियन सतह की कल्पना करें और E = 0 का उपयोग करें।',
        bn: 'পরিবাহীর বহির্তলের ঠিক ভেতরে একটি গাউসীয় তল কল্পনা করুন এবং E = ০ শর্ত প্রয়োগ করুন।'
      },
      answerKey: {
        en: 'Inside a conductor in equilibrium, E = 0 everywhere. For any Gaussian surface enclosed entirely within the conducting material, ∮ E · dA = 0. By Gauss’s law, Q_enc must be zero for any interior volume. Thus no net charge can reside in the interior; all charge must reside on the outer surface.',
        hi: 'चालक के भीतर E = 0 होता है। अतः चालक के भीतर किसी भी गॉसियन सतह के लिए ∮ E · dA = 0 होगा, जिससे Q_enc = 0 होना अनिवार्य है। इसलिए सारा आवेश केवल सतह पर ही रह सकता है।',
        bn: 'ভারসাম্যে পরিবাহীর অভ্যন্তরে E = ০। যেকোনো অভ্যন্তরীণ গাউসীয় তলে ∮ E · dA = ০ হওয়ায় Q_enc = ০ হতে বাধ্য। ফলে কোনো আধান ভেতরে থাকতে পারে না, সব আধান বহির্তলে অবস্থান করে।'
      }
    },
    {
      id: 'pq-ch11-l02-03',
      question: {
        en: 'Derive the formula for the electric field due to an infinite plane sheet of charge with uniform surface density σ using Gauss’s law.',
        hi: 'गॉस के नियम का उपयोग करके एकसमान पृष्ठीय घनत्व σ वाली अनंत समतल आवेशित चादर के कारण विद्युत क्षेत्र का सूत्र व्युत्पन्न कीजिए।',
        bn: 'গাউসের সূত্রের সাহায্যে সুষম তলমাত্রিক আধান ঘনত্ব σ বিশিষ্ট একটি অসীম সমতল চাদরের জন্য তড়িৎ ক্ষেত্রের রাশিমালা প্রতিপাদন করুন।'
      },
      hint: {
        en: 'Use a cylindrical Gaussian pillbox of cross-sectional area A straddling both sides of the sheet.',
        hi: 'चादर के दोनों ओर विस्तृत अनुप्रस्थ काट क्षेत्रफल A वाले बेलनाकार पिलबॉक्स का उपयोग करें।',
        bn: 'চাদরের উভয় পাশে প্রসারিত A প্রস্থচ্ছেদের একটি চোঙাকৃতি পিলবক্স গাউসীয় তল হিসেবে নিন।'
      },
      answerKey: {
        en: 'Flux through curved sides is zero because E is parallel to surface. Flux through the two end caps is 2(E A). Enclosed charge is Q_enc = σ A. By Gauss’s law: 2 E A = σ A / ε0 => E = σ / (2ε0).',
        hi: 'वक्र पृष्ठ से फ्लक्स = 0। दोनों सिरों से कुल फ्लक्स = 2 E A। परिबद्ध आवेश = σ A। अतः 2 E A = σ A / ε0 => E = σ / (2ε0)।',
        bn: 'বক্রপৃষ্ঠ দিয়ে ফ্লাক্স শূন্য। দুই প্রান্তীয় বৃত্তাকার তল দিয়ে মোট ফ্লাক্স = ২ E A। আবদ্ধ আধান = σ A। অতএব ২ E A = σ A / ε0 => E = σ / (২ε0)।'
      }
    },
    {
      id: 'pq-ch11-l02-04',
      question: {
        en: 'A spherical cloud of radius R has uniform volume charge density ρ. Using Gauss’s law, find the electric field as a function of r: (a) inside the cloud (r < R), and (b) outside the cloud (r > R).',
        hi: 'R त्रिज्या के एक गोलीय मेघ में एकसमान आयतन आवेश घनत्व ρ है। गॉस के नियम से r के फलन के रूप में विद्युत क्षेत्र ज्ञात कीजिए: (a) मेघ के अंदर (r < R), और (b) मेघ के बाहर (r > R)।',
        bn: 'R ব্যাসার্ধের একটি গোলকীয় মেঘে সুষম আয়তন আধান ঘনত্ব ρ বিদ্যমান। গাউসের সূত্র ব্যবহার করে r দূরত্বের অপেক্ষক হিসেবে তড়িৎ ক্ষেত্র নির্ণয় করুন: (a) মেঘের ভেতরে (r < R), এবং (b) মেঘের বাইরে (r > R)।'
      },
      hint: {
        en: 'For r < R, enclosed charge is ρ · (4/3 π r³). For r > R, enclosed charge is the full total charge Q_total = ρ · (4/3 π R³).',
        hi: 'r < R के लिए परिबद्ध आवेश ρ · (4/3 π r³) है। r > R के लिए कुल आवेश Q_total है।',
        bn: 'r < R এর জন্য আবদ্ধ আধান ρ · (৪/৩ π r³)। r > R এর জন্য সম্পূর্ণ আধান Q_total ব্যবহার করুন।'
      },
      answerKey: {
        en: '(a) For r < R: E(4π r²) = [ρ(4/3 π r³)] / ε0 => E(r) = ρ r / (3ε0) (increases linearly). (b) For r > R: E(4π r²) = Q_total / ε0 => E(r) = ρ R³ / (3ε0 r²) (decreases as 1/r²).',
        hi: '(a) r < R के लिए: E = ρ r / (3ε0)। (b) r > R के लिए: E = ρ R³ / (3ε0 r²)।',
        bn: '(a) r < R এর জন্য: E = ρ r / (৩ε0)। (b) r > R এর জন্য: E = ρ R³ / (৩ε0 r²)।'
      }
    },
    {
      id: 'pq-ch11-l02-05',
      question: {
        en: 'A high-voltage power line conductor of diameter 3.0 cm operates with a surface electric field of 1.8 MV/m. Calculate its linear charge density λ in μC/m.',
        hi: '3.0 सेमी व्यास का एक उच्च-वोल्टेज चालक 1.8 MV/m की सतह विद्युत क्षेत्र तीव्रता पर कार्य करता है। इसका रेखीय आवेश घनत्व λ (μC/m में) ज्ञात कीजिए।',
        bn: '৩.০ সেমি ব্যাসের একটি উচ্চ-ভোল্টেজ বিদ্যুৎ পরিবাহী তারের পৃষ্ঠের তড়িৎ ক্ষেত্র ১.৮ MV/m। তারটির রৈখিক আধান ঘনত্ব λ (μC/m এককে) নির্ণয় করুন।'
      },
      hint: {
        en: 'Radius r = d/2 = 0.015 m. Use E = λ / (2π ε0 r) => λ = 2π ε0 r E.',
        hi: 'त्रिज्या r = 0.015 मीटर। λ = 2π ε0 r E सूत्र का उपयोग करें।',
        bn: 'ব্যাসার্ধ r = ০.০১৫ মিটার। λ = ২π ε0 r E সমীকরণ ব্যবহার করুন।'
      },
      answerKey: {
        en: 'λ = 2 · π · (8.854 × 10⁻¹² F/m) · (0.015 m) · (1.8 × 10⁶ V/m) = 1.502 × 10⁻⁶ C/m = 1.50 μC/m.',
        hi: 'λ = 1.50 μC/m।',
        bn: 'λ = ১.৫০ μC/m।'
      }
    }
  ]
};
