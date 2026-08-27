import { Lesson } from '../types';

export const LESSON_CYLINDRICAL_SPHERICAL_CAPACITORS: Lesson = {
  id: 'lsn-ch7-cylindrical-spherical-capacitors',
  topicId: 'ch7-cylindrical-spherical-capacitors',
  chapterId: 'ch-capacitors',
  order: 5,
  title: {
    en: 'Cylindrical & Spherical Capacitors & Cable Capacitance',
    hi: 'बेलनाकार एवं गोलाकार संधारित्र तथा केबल धारिता',
    bn: 'সিলিন্ড্রিক্যাল ও স্ফেরিক্যাল ক্যাপাসিটর এবং ক্যাবল ক্যাপাসিট্যান্স'
  },
  description: {
    en: 'Capacitance derivations for coaxial cylindrical cables (C = 2πεL / ln(b/a)), concentric spherical capacitors (C = 4πεab / (b-a)), and isolated spheres.',
    hi: 'समाक्षीय केबल धारिता सूत्र, संकेंद्रीय गोलाकार संधारित्र एवं विलगित गोले की धारिता।',
    bn: 'কোএক্সিয়াল ক্যাবল ক্যাপাসিট্যান্স সূত্র, সমকেন্দ্রিক গোলকীয় ক্যাপাসিটর ও একক গোলকের ধারকত্ব।'
  },
  easyExplanation: {
    en: 'Coaxial TV cables and underground high-voltage power cables are actually long cylindrical capacitors. The inner copper wire is one plate, the outer grounded metal shield is the second plate, and the plastic/oil insulation between them acts as the dielectric.',
    hi: 'कोएक्सियल टीवी केबल और भूमिगत हाई-वोल्टेज केबल वास्तव में लंबे बेलनाकार कैपेसिटर होते हैं। अंदर का तांबे का तार पहली प्लेट है, बाहर की ग्राउंडेड शील्ड दूसरी प्लेट है और बीच का प्लास्टिक इन्सुलेशन परावैद्युत है।',
    bn: 'আমাদের টিভি কোএক্সিয়াল ক্যাবল এবং মাটির নিচের পাওয়ার ক্যাবলগুলো মূলত দীর্ঘ সিলিন্ড্রিক্যাল ক্যাপাসিটর। ভেতরের তামার তারটি প্রথম পাত, বাইরের গ্রাউন্ড করা মেটাল শিল্ড দ্বিতীয় পাত এবং মাঝের প্লাস্টিক ইনসুলেশন ডাই-ইলেকট্রিক হিসেবে কাজ করে।'
  },
  detailedExplanation: {
    en: `1. Cylindrical Coaxial Capacitor / Single-Core Cable:
Consists of an inner conducting cylinder of radius 'a' and an outer concentric conducting cylinder of inner radius 'b', with dielectric of permittivity ε = ε0 · εr filling the length L:
- Electric field at radius r (where a < r < b): E(r) = Q / (2 · π · ε · L · r)
- Potential difference: V = ∫[a to b] E(r) dr = (Q / 2πεL) · ln(b / a)
- Capacitance per length L:
C = (2 · π · ε0 · εr · L) / ln(b / a) [Farads]
- Capacitance per unit length (Farads/meter):
C' = (2 · π · ε0 · εr) / ln(b / a) [F/m]

2. Concentric Spherical Capacitor:
Consists of an inner conducting sphere of radius 'a' and an outer concentric spherical shell of inner radius 'b':
- Radial field: E(r) = Q / (4 · π · ε · r²)
- Potential difference: V = (Q / 4πε) · [ (1/a) - (1/b) ] = (Q / 4πε) · [ (b - a) / (a · b) ]
- Capacitance:
C = (4 · π · ε0 · εr · a · b) / (b - a) [Farads]

3. Isolated Conducting Sphere (e.g., Planet Earth):
When the outer boundary shell is taken to infinity (b → ∞):
C_isolated_sphere = 4 · π · ε0 · εr · R [Farads]
For Earth (Radius R ≈ 6,400 km in vacuum):
C_Earth = 4 · π · (8.854 × 10⁻¹²) · (6.4 × 10⁶ m) ≈ 711 μF.`,
    hi: `1. बेलनाकार (समाक्षीय केबल) संधारित्र:
आंतरिक त्रिज्या a, बाहरी त्रिज्या b तथा लंबाई L वाले सिंगल कोर केबल की धारिता:
C = (2 · π · ε0 · εr · L) / ln(b / a) [फैराड]

2. संकेंद्रीय गोलाकार संधारित्र (Spherical Capacitor):
आंतरिक त्रिज्या a और बाहरी त्रिज्या b के लिए:
C = (4 · π · ε0 · εr · a · b) / (b - a) [फैराड]

3. विलगित गोला (Isolated Sphere - जैसे पृथ्वी):
जब b → ∞ हो: C = 4 · π · ε0 · εr · R
पृथ्वी की धारिता (R = 6400 km): C ≈ 711 μF.`,
    bn: `১. সিলিন্ড্রিক্যাল কোএক্সিয়াল ক্যাবল ক্যাপাসিটর:
ভেতরের পরিবাহীর ব্যাসার্ধ a, বাইরের পরিবাহীর ব্যাসার্ধ b এবং দৈর্ঘ্য L হলে মোট ক্যাপাসিট্যান্স:
C = (2 · π · ε0 · εr · L) / ln(b / a) [ফ্যারাড]

২. সমকেন্দ্রিক গোলকীয় ক্যাপাসিটর:
ভেতরের গোলকের ব্যাসার্ধ a এবং বাইরের গোলকের ব্যাসার্ধ b হলে:
C = (4 · π · ε0 · εr · a · b) / (b - a) [ফ্যারাড]

৩. বিচ্ছিন্ন একক গোলক (যেমন পৃথিবী):
যদি বাইরের গোলক অসীমে থাকে (b → ∞): C = 4 · π · ε0 · εr · R
পৃথিবীর নিজস্ব ক্যাপাসিট্যান্স (R = 6400 km): প্রায় 711 μF।`
  },
  formulas: [
    {
      expression: 'C_cable = (2 · π · ε0 · εr · L) / ln(b / a)',
      description: {
        en: 'Capacitance of a coaxial cylindrical cable of length L',
        hi: 'L लंबाई के समाक्षीय केबल की धारिता',
        bn: 'L দৈর্ঘ্যের কোএক্সিয়াল ক্যাবলের ক্যাপাসিট্যান্স'
      }
    },
    {
      expression: 'C_sphere = 4 · π · ε0 · εr · R',
      description: {
        en: 'Capacitance of an isolated spherical conductor of radius R',
        hi: 'त्रिज्या R वाले विलगित गोले की धारिता',
        bn: 'R ব্যাসার্ধের বিচ্ছিন্ন গোলকের ক্যাপাসিট্যান্স'
      }
    }
  ],
  practicalApplications: [
    {
      en: 'Charging current and dielectric stress analysis in 11kV/33kV underground distribution cables',
      hi: '11kV/33kV भूमिगत केबलों में चार्जिंग करंट और डाइइलेक्ट्रिक स्ट्रेस विश्लेषण',
      bn: '১১kV/৩৩kV আন্ডারগ্রাউন্ড ক্যাবলের চার্জিং কারেন্ট ও ভোল্টেজ স্ট্রেস হিসাব'
    },
    {
      en: 'High-frequency characteristic impedance (Zo) matching for 50-ohm and 75-ohm RF coaxial cables',
      hi: '50-ओम एवं 75-ओम आरएफ कोएक्सियल केबलों में इम्पीडेंस मैचिंग',
      bn: '৫০ ও ৭৫ ওহম আরএফ কোএক্সিয়াল ক্যাবলে ইম্পিড্যান্স ম্যাচিং'
    }
  ],
  importantPoints: {
    en: [
      'In single-core cables, electric field stress is MAXIMUM at the conductor surface (r = a) and MINIMUM at the sheath (r = b)',
      'Underground AC power cables draw significant reactive charging current due to high cylindrical capacitance over long distances',
      'The capacitance of the Earth is approximately 711 microfarads (711 μF)'
    ],
    hi: [
      'केबल में अधिकतम विद्युत क्षेत्र तनाव चालक की सतह (r = a) पर और न्यूनतम शीथ (r = b) पर होता है',
      'लंबी भूमिगत एसी केबलें अपनी उच्च बेलनाकार धारिता के कारण पर्याप्त चार्जिंग करंट खींचती हैं',
      'पृथ्वी की स्थिरवैद्युत धारिता लगभग 711 माइक्रोफैराड (711 μF) होती है'
    ],
    bn: [
      'ক্যাবলে বৈদ্যুতিক স্ট্রেস বা চাপ পরিবাহীর পৃষ্ঠে (r = a) সর্বোচ্চ এবং বাইরের শিথে (r = b) সর্বনিম্ন হয়',
      'দীর্ঘ আন্ডারগ্রাউন্ড এসি ক্যাবল উচ্চ ক্যাপাসিট্যান্সের কারণে উল্লেখযোগ্য পরিমাণ চার্জিং কারেন্ট গ্রহণ করে',
      'সমগ্র পৃথিবীর স্থিরতড়িৎ ক্যাপাসিট্যান্স প্রায় 711 মাইক্রোফ্যারাড (711 μF)'
    ]
  },
  commonMistakes: {
    en: [
      'Using common log (log10) instead of natural logarithm (ln / log_e) in the cable formula',
      'Swapping the radii in the denominator (using a/b instead of b/a)'
    ],
    hi: [
      'केबल सूत्र में प्राकृतिक लघुगणक (ln) के स्थान पर सामान्य लॉग (log10) का प्रयोग कर देना',
      'त्रिज्या अनुपात में b/a के स्थान पर a/b लिख देना'
    ],
    bn: [
      'ক্যাবল সূত্রে প্রাকৃতিক লগারিদম (ln)-এর পরিবর্তে সাধারণ log10 ব্যবহার করা',
      'ব্যাসার্ধের অনুপাতে b/a এর জায়গায় ভুলবশত a/b লেখা'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch7-5-1',
      question: {
        en: 'In a single-core underground cable, the maximum dielectric stress occurs at:',
        hi: 'एक सिंगल-कोर भूमिगत केबल में अधिकतम परावैद्युत तनाव कहाँ होता है?',
        bn: 'একটি সিঙ্গেল-কোর আন্ডারগ্রাউন্ড ক্যাবলে সর্বোচ্চ ডাই-ইলেকট্রিক চাপ কোথায় ঘটে?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Surface of the conductor', hi: 'चालक की सतह पर', bn: 'পরিবাহীর উপরিভাগে' } },
        { id: 'opt-b', text: { en: 'Inner surface of lead sheath', hi: 'शीथ की भीतरी सतह पर', bn: 'মেটালিক শিথের ভেতরের দিকে' } },
        { id: 'opt-c', text: { en: 'Midpoint of dielectric', hi: 'परावैद्युत के मध्य बिंदु पर', bn: 'ডাই-ইলেকট্রিকের ঠিক মাঝখানে' } },
        { id: 'opt-d', text: { en: 'Uniform throughout', hi: 'सर्वत्र एकसमान', bn: 'সর্বত্র সমান' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Since E(r) = V / (r · ln(b/a)), electric field E is inversely proportional to radius r and is maximum when r = a (conductor surface).',
        hi: 'चूंकि E(r) = V / (r · ln(b/a)) होता है, इसलिए त्रिज्या r न्यूनतम होने पर (चालक सतह r = a) विद्युत क्षेत्र अधिकतम होता है।',
        bn: 'যেহেতু E(r) = V / (r · ln(b/a)), তাই ব্যাসার্ধ r সর্বনিম্ন অর্থাৎ পরিবাহীর পৃষ্ঠে (r = a) তড়িৎ চাপ সর্বোচ্চ হয়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch7-5-1',
      question: {
        en: 'A 1 km long coaxial cable has a conductor diameter of 1 cm and inner sheath diameter of 2.718 cm. If the insulation has εr = 3, calculate the total capacitance of the cable.',
        hi: '1 km लंबे कोएक्सियल केबल का कोर व्यास 1 cm एवं शीथ आंतरिक व्यास 2.718 cm है। यदि εr = 3 हो तो कुल धारिता की गणना करें।',
        bn: '১ কিমি দীর্ঘ কোএক্সিয়াল ক্যাবলের কন্ডাক্টর ব্যাস ১ সেমি ও শিথ ব্যাস ২.৭১৮ সেমি। εr = ৩ হলে ক্যাবলের মোট ক্যাপাসিট্যান্স কত?'
      },
      hint: {
        en: 'Notice that b/a = 2.718 / 1 = e, so ln(b/a) = ln(e) = 1.',
        hi: 'ध्यान दें कि b/a = e है, अतः ln(b/a) = ln(e) = 1।',
        bn: 'লক্ষ করুন b/a = e, ফলে ln(b/a) = ln(e) = 1।'
      },
      answerKey: {
        en: 'C = (2 · π · 8.854 × 10⁻¹² · 3 · 1000) / 1 ≈ 0.1669 × 10⁻⁶ F = 0.167 μF (167 nF).',
        hi: 'C = (2 × π × 8.854 × 10⁻¹² × 3 × 1000) / 1 = 0.167 μF.',
        bn: 'C = (২ × π × 8.854 × 10⁻¹² × ৩ × ১০০০) / ১ ≈ 0.167 μF (167 nF)।'
      }
    }
  ]
};
