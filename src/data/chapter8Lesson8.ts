import { Lesson } from '../types';

export const LESSON_EDDY_CURRENTS_SKIN_EFFECT: Lesson = {
  id: 'lsn-ch8-eddy-currents-skin-effect',
  topicId: 'ch8-eddy-currents-skin-effect',
  chapterId: 'ch-inductors',
  order: 8,
  title: {
    en: 'Eddy Currents, Laminated Cores & Skin Effect',
    hi: 'भंवर धाराएं (Eddy Currents), लेमिनेटेड कोर एवं त्वचा प्रभाव',
    bn: 'এডি কারেন্ট, লেমিনেটেড কোর ও স্কিন ইফেক্ট'
  },
  description: {
    en: 'Mechanism of eddy currents in conducting cores, eddy current power loss formula (P_e = K_e B_max² f² t² V), mitigation by thin laminations and ferrite materials, and skin effect / proximity effect in high-frequency AC conductors.',
    hi: 'चालक कोर में भंवर धाराओं का सिद्धांत, भंवर धारा हानि सूत्र (P_e = K_e B_max² f² t² V), पतली लेमिनेशन एवं फेराइट द्वारा रोकथाम, तथा एसी चालकों में त्वचा प्रभाव (Skin Effect)।',
    bn: 'কন্ডাক্টিং কোরে এডি কারেন্টের উৎপত্তি, এডি কারেন্ট লস সমীকরণ (P_e = K_e B_max² f² t² V), পাতলা লেমিনেশন ও ফেরাইটের ব্যবহার, এবং উচ্চ ফ্রিকোয়েন্সিতে তারের স্কিন ইফেক্ট।'
  },
  easyExplanation: {
    en: 'When alternating magnetic fields pass through a solid block of metal, they induce swirling circular loops of electric current inside the metal itself—just like whirlpools in a river. These "eddy currents" waste valuable power and overheat the metal. Engineers slice the metal core into paper-thin insulated sheets (laminations) to trap and shrink these whirlpools!',
    hi: 'जब प्रत्यावर्ती चुंबकीय क्षेत्र ठोस धातु के ब्लॉक से गुजरता है, तो वह धातु के अंदर ही घूमने वाली चक्रवाती विद्युत धाराएं प्रेरित करता है—जैसे नदी में भंवर। ये "भंवर धाराएं" ऊर्जा बर्बाद करती हैं और कोर को गर्म करती हैं। इंजीनियर कोर को पतली वार्निश-युक्त पत्तियों (लैमिनेशन) में काटकर इन भंवरों को रोकते हैं!',
    bn: 'যখন পরিবর্তনশীল চৌম্বক ক্ষেত্র ধাতব ব্লকের মধ্য দিয়ে প্রবাহিত হয়, তখন এটি ধাতুর অভ্যন্তরে ঘূর্ণায়মান বৃত্তাকার কারেন্ট লুপ আবিষ্ট করে—ঠিক নদীর ঘূর্ণির মতো। এই "এডি কারেন্ট" বিদ্যুৎ অপচয় করে এবং কোর উত্তপ্ত করে। প্রকৌশলীরা কোরকে পাতলা ইনসুলেটেড পাতে (লেমিনেট) বিভক্ত করে এই অপচয় প্রতিহত করেন!'
  },
  detailedExplanation: {
    en: `1. Origin and Physics of Eddy Currents:
According to Faraday's Law, when time-varying magnetic flux passes through a conducting magnetic core, closed loops of EMF are induced inside the bulk material.
Because metal cores have low electrical resistance, large circulating currents flow in closed concentric loops perpendicular to the magnetic flux lines.

2. Eddy Current Power Loss Formula:
For a magnetic core of volume V composed of laminated sheets of thickness t, operating at frequency f and maximum flux density B_max:
P_e = K_e · (B_max)² · f² · t² · V [Watts]
Where:
- K_e = Eddy current constant = (π² / (6 · ρ)), inversely proportional to core electrical resistivity ρ.
- B_max = Maximum operating flux density (Tesla).
- f = Supply frequency (Hz) — Note quadratic f² dependence!
- t = Thickness of each individual lamination sheet (meters) — Note quadratic t² dependence!
- V = Total core volume (m³).

3. Methods of Mitigating Core Losses:
1. Thin Laminated Sheets (Lamination Stacking):
   Slicing the core into insulated sheets (typically 0.23 mm to 0.50 mm for CRGO steel). Slicing thickness t by a factor of 10 reduces eddy current loss by 10² = 100 times!
2. Silicon Alloying (3% to 4.5% Silicon Steel):
   Adding silicon drastically increases the electrical resistivity ρ of the iron, shrinking circulating eddy current magnitudes.
3. Powdered Iron & Ferrites (High Frequency / SMPS):
   Using non-conductive ceramic ferrite cores (MnZn, NiZn) with resistivity ρ > 10⁶ Ω·m at kHz to MHz switching frequencies.

4. Skin Effect in AC Conductors:
In AC circuits, changing internal magnetic flux causes opposing eddy currents inside the conductor that cancel current at the center and concentrate current along the outer surface ("skin").
- Skin Depth (δ): The depth below the surface where current density drops to 1/e (≈ 36.8%):
  δ = √( ρ / (π · f · μ) )
- At 50 Hz in copper: δ ≈ 9.2 mm.
- At 100 kHz in SMPS: δ ≈ 0.2 mm.
- AC resistance increases significantly above DC resistance: R_ac > R_dc.
- Solved using Litz wire (bundles of thousands of individually insulated fine strands).`,
    hi: `1. भंवर धारा हानि (Eddy Current Loss) का सूत्र:
P_e = K_e · (B_max)² · f² · t² · V [वाट]
जहाँ t लेमिनेशन की मोटाई, f आवृत्ति, और B_max अधिकतम फ्लक्स घनत्व है।

2. भंवर धारा को कम करने के उपाय:
- कोर को पतली वार्निश-युक्त पत्तियों (0.27 - 0.35 mm) में लैमिनेट करना (मोटाई आधी करने पर हानि 1/4 हो जाती है)।
- लोहे में 3% - 4% सिलिकॉन मिलाना जिससे प्रतिरोधकता ρ बढ़ जाती है।
- उच्च आवृत्ति (kHz/MHz) पर फेराइट कोर का उपयोग करना।

3. त्वचा प्रभाव (Skin Effect):
उच्च आवृत्ति एसी धारा चालक के केंद्र से न बहकर केवल उसकी बाहरी सतह (Skin) से बहती है। इसे रोकने के लिए लित्ज़ वायर (Litz wire) का उपयोग किया जाता है।`,
    bn: `১. এডি কারেন্ট অপচয় সমীকরণ:
P_e = K_e · (B_max)² · f² · t² · V [ওয়াট]
যেখানে t লেমিনেশন পাতার পুরুত্ব, f ফ্রিকোয়েন্সি এবং B_max সর্বোচ্চ ফ্লাক্স ঘনত্ব।

২. এডি কারেন্ট কমানোর উপায়:
- কোরকে পাতলা ইনসুলেটেড পাতে (০.২৭ - ০.৩৫ mm) লেমিনেট করা (পুরুত্ব অর্ধেক করলে লস ১/৪ হয়ে যায়)।
- লোহায় ৩% - ৪% সিলিকন মেশানো যাতে বৈদ্যুতিক রোধ বৃদ্ধি পায়।
- উচ্চ ফ্রিকোয়েন্সিতে সিরামিক ফেরাইট কোর ব্যবহার।

৩. স্কিন ইফেক্ট (Skin Effect):
এসি ফ্রিকোয়েন্সিতে কারেন্ট পরিবাহীর কেন্দ্র দিয়ে না গিয়ে কেবল বহিঃপৃষ্ঠ দিয়ে প্রবাহিত হয়। ত্বকের গভীরতা: δ = √( ρ / (π·f·μ) )। এটি দূর করতে লিটজ ওয়্যার (Litz wire) ব্যবহার করা হয়।`
  },
  formulas: [
    {
      expression: 'P_e = K_e · B_{max}^2 · f^2 · t^2 · V',
      description: {
        en: 'Eddy current power loss in laminated magnetic cores',
        hi: 'लेमिनेटेड चुंबकीय कोर में भंवर धारा शक्ति हानि',
        bn: 'লেমিনেটেড চৌম্বক কোরে এডি কারেন্ট শক্তি অপচয়'
      }
    },
    {
      expression: 'δ = \\sqrt{ \\frac{\\rho}{\\pi \\cdot f \\cdot \\mu} }',
      description: {
        en: 'Skin depth of an electrical conductor in an AC magnetic field',
        hi: 'प्रत्यावर्ती क्षेत्र में चालक की त्वचा गहराई (Skin Depth)',
        bn: 'এসি চৌম্বক ক্ষেত্রে পরিবাহীর স্কিন ডেপথ'
      }
    }
  ],
  workedExamples: [
    {
      problem: {
        en: 'A solid core has an eddy current loss of 800 Watts. If the solid core is replaced by a laminated core made of sheets 1/5th the original thickness, calculate the new eddy current loss (assuming frequency and flux density remain identical).',
        hi: 'एक ठोस कोर में 800 वाट की भंवर धारा हानि होती है। यदि ठोस कोर को 1/5 मोटाई वाली लेमिनेटेड पत्तियों से बदल दिया जाए, तो नई भंवर धारा हानि ज्ञात करें।',
        bn: 'একটি নিরেট কোরে ৮০০ ওয়াট এডি কারেন্ট লস হয়। যদি নিরেট কোরটিকে মূল পুরুত্বের ১/৫ অংশ পুরু লেমিনেটেড পাত দ্বারা প্রতিস্থাপন করা হয়, তবে নতুন এডি কারেন্ট অপচয় কত হবে?'
      },
      solution: {
        en: `Eddy current loss is proportional to the square of lamination thickness:
P_e ∝ t²

Since t_new = t_old / 5:
P_e_new = P_e_old × (1/5)² = P_e_old × (1/25)
P_e_new = 800 W / 25 = 32 Watts.
(A massive 96% reduction in core heating!).`,
        hi: `सूत्र: P_e ∝ t²
P_new = P_old × (1/5)² = 800 / 25 = 32 वाट।`,
        bn: `সূত্র: P_e ∝ t²
P_new = P_old × (১/৫)² = ৮০০ / ২৫ = ৩২ ওয়াট।`
      }
    }
  ],
  quiz: [
    {
      question: {
        en: 'Why is silicon added (approx 3% to 4%) in electrical steel sheets used for transformer cores?',
        hi: 'ट्रांसफॉर्मर कोर के लिए उपयोग की जाने वाली इलेक्ट्रिकल स्टील शीट में सिलिकॉन (लगभग 3% से 4%) क्यों मिलाया जाता है?',
        bn: 'ট্রান্সফরমার কোরে ব্যবহৃত সিলিকন স্টিল পাতে কেন ৩% থেকে ৪% সিলিকন মেশানো হয়?'
      },
      options: {
        en: ['To increase electrical resistivity and decrease eddy currents', 'To make the steel physically softer and flexible', 'To increase core electrical conductivity', 'To lower the melting point'],
        hi: ['विद्युत प्रतिरोधकता बढ़ाकर भंवर धाराओं को कम करने के लिए', 'स्टील को लचीला बनाने के लिए', 'विद्युत चालकता बढ़ाने के लिए', 'गलनांक कम करने के लिए'],
        bn: ['বৈদ্যুতিক রোধ বৃদ্ধি করে এডি কারেন্ট হ্রাস করার জন্য', 'ইস্পাতকে নমনীয় করার জন্য', 'পরিবাহিতা বৃদ্ধির জন্য', 'গলনাঙ্ক কমানোর জন্য']
      },
      correctAnswer: 0,
      explanation: {
        en: 'Adding silicon increases the bulk electrical resistivity ρ of the steel, directly reducing eddy current magnitude and energy loss without degrading magnetic permeability.',
        hi: 'सिलिकॉन मिलाने से स्टील की विद्युत प्रतिरोधकता बढ़ जाती है, जिससे भंवर धाराएं और ऊर्जा हानि बहुत कम हो जाती है।',
        bn: 'সিলিকন স্টিলের বৈদ্যুতিক রোধ বৃদ্ধি করে, যার ফলে চৌম্বক প্রবেশ্যতা নষ্ট না করেই এডি কারেন্ট অপচয় অনেকাংশে কমে যায়।'
      }
    }
  ],
  flashcards: [
    {
      term: {
        en: 'Eddy Current Loss',
        hi: 'भंवर धारा हानि (Eddy Current Loss)',
        bn: 'এডি কারেন্ট লস'
      },
      definition: {
        en: 'P_e = K_e B_max² f² t² V. Joule heat loss caused by circular induced currents in magnetic cores, reduced by thin laminations.',
        hi: 'P_e = K_e B_max² f² t² V। कोर में प्रेरित चक्रवाती धाराओं से होने वाली ऊष्मा हानि।',
        bn: 'P_e = K_e B_max² f² t² V। কোরে আবিষ্ট ঘূর্ণায়মান কারেন্টজনিত তাপ অপচয়, যা পাতলা লেমিনেশনে দূর হয়।'
      }
    }
  ]
};
