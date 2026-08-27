import { Lesson } from '../types';

export const LESSON_SELF_INDUCTANCE_DERIVATION: Lesson = {
  id: 'lsn-ch8-self-inductance-derivation',
  topicId: 'ch8-self-inductance-derivation',
  chapterId: 'ch-inductors',
  order: 4,
  title: {
    en: 'Self-Inductance (L) & Physical Formulas',
    hi: 'स्व-प्रेरकत्व (L) एवं भौतिक सूत्र निगमन',
    bn: 'স্ব-আবেশ (L) ও কয়েলের ভৌত সমীকরণ প্রতিপাদন'
  },
  description: {
    en: 'Definition of self-inductance (L), Henry unit, self-induced back EMF (e = -L di/dt), mathematical derivation of inductance for solenoids and toroids (L = μ·N²·A / l), factors affecting inductance.',
    hi: 'स्व-प्रेरकत्व (L) की परिभाषा, हेनरी मात्रक, बैक EMF (e = -L di/dt), परिनालिका एवं टोराइड के प्रेरकत्व का निगमन (L = μ·N²·A / l), प्रेरकत्व को प्रभावित करने वाले कारक।',
    bn: 'স্ব-আবেশের (L) সংজ্ঞা, হেনরি একক, স্ব-আবিষ্ট ব্যাক EMF (e = -L di/dt), সলিনয়েড ও টরয়েডের ইন্ডাক্ট্যান্স সমীকরণ (L = μ·N²·A / l) প্রতিপাদন ও নিয়ামকসমূহ।'
  },
  easyExplanation: {
    en: 'Inductance is the "electrical inertia" of a circuit. Just as a heavy flywheel resists changes in its spinning speed, an inductor resists any change in electric current flowing through it. When current tries to increase, the inductor pushes back; when current drops, the inductor kicks forward to keep it moving!',
    hi: 'प्रेरकत्व (Inductance) किसी परिपथ का "विद्युत जड़त्व" (Electrical Inertia) है। जैसे एक भारी चक्का अपनी घूर्णन गति में बदलाव का विरोध करता है, वैसे ही एक इंडक्टर अपने से बहने वाली विद्युत धारा में किसी भी बदलाव का विरोध करता है!',
    bn: 'ইন্ডাক্ট্যান্স হলো কোনো সার্কিটের "বৈদ্যুতিক জড়তা" (Electrical Inertia)। যেমন একটি ভারী ফ্লাইহুইল তার ঘূর্ণন গতির পরিবর্তনকে বাধা দেয়, তেমনই একটি ইন্ডাক্টর তার মধ্য দিয়ে প্রবাহিত কারেন্টের যেকোনো পরিবর্তনকে বাধা প্রদান করে!'
  },
  detailedExplanation: {
    en: `1. Definition of Self-Inductance (L):
Self-inductance is the property of an electric circuit or coil by virtue of which it opposes any change of electric current flowing through itself by generating a self-induced back EMF.
Mathematically, self-inductance is the ratio of total magnetic flux linkages (λ = N·Φ) to the current (I) producing it:
L = λ / I = (N · Φ) / I [Henry (H)]

2. Self-Induced EMF Equation:
According to Faraday's Law: e = -N (dΦ / dt)
Since N·Φ = L·i, differentiating with respect to time gives:
e = -L · (di / dt) [Volts]
The voltage drop across an ideal inductor (taking the passive sign convention) is:
v_L(t) = L · (di / dt)

3. Definition of 1 Henry (H):
An inductor has a self-inductance of 1 Henry if a current changing at the rate of 1 Ampere per second (1 A/s) induces a back EMF of 1 Volt across its terminals:
1 Henry = 1 Volt · second / Ampere = 1 Wb / A = 1 Ω · s.

4. Derivation of Inductance for a Solenoid:
Consider a solenoid of length l, cross-sectional area A, having N total turns, wound on a magnetic core of permeability μ = μ0·μr:
Step 1: Magnetic flux density inside solenoid:
B = (μ · N · I) / l
Step 2: Total magnetic flux Φ:
Φ = B · A = (μ · N · I · A) / l
Step 3: Total flux linkages λ:
λ = N · Φ = (μ · N² · I · A) / l
Step 4: Inductance L = λ / I:
L = (μ · N² · A) / l = (μ0 · μr · N² · A) / l [Henry]

In terms of Magnetic Reluctance (S or ℜ = l / (μ·A)):
L = N² / ℜ

5. Four Key Factors Affecting Inductance:
1. Number of Turns (N): L ∝ N² (Doubling turns quadruples inductance!).
2. Core Permeability (μr): Using a ferrite or iron core (μr = 1000 to 5000) increases L by thousands of times over an air core (μr = 1).
3. Cross-Sectional Area (A): L ∝ A (Thicker core = higher L).
4. Length of Coil (l): L ∝ 1/l (More tightly compressed coil = higher L).`,
    hi: `1. स्व-प्रेरकत्व (Self-Inductance, L):
किसी कुंडली का वह गुण जिसके कारण वह अपने भीतर प्रवाहित होने वाली धारा के परिवर्तन का विरोध करती है।
L = (N · Φ) / I [हेनरी (H)]

2. स्व-प्रेरित EMF समीकरण:
e = -L · (di / dt) [वोल्ट]

3. 1 हेनरी (Henry) की परिभाषा:
यदि किसी कुंडली में धारा 1 A/s की दर से बदलने पर उसमें 1 Volt का प्रेरित EMF उत्पन्न हो, तो उसका प्रेरकत्व 1 Henry होता है।

4. परिनालिका के प्रेरकत्व का सूत्र निगमन:
लंबाई l, क्षेत्रफल A एवं N फेरों वाली परिनालिका के लिए:
L = (μ0 · μr · N² · A) / l [हेनरी]
या रिलक्टेंस (ℜ) के पदों में: L = N² / ℜ

5. प्रेरकत्व को प्रभावित करने वाले 4 कारक:
- फेरों की संख्या N: L ∝ N² (फेरे दोगुने करने पर L चार गुना हो जाता है)।
- कोर की पारगम्यता μr: फेराइट या आयरन कोर लगाने पर L हजारों गुना बढ़ जाता है।
- कोर का क्षेत्रफल A: L ∝ A
- कुंडली की लंबाई l: L ∝ 1/l।`,
    bn: `১. স্ব-আবেশ (Self-Inductance, L):
কোনো কয়েলের নিজস্ব ধর্ম যার দরুন এটি তার মধ্য দিয়ে প্রবাহিত কারেন্টের যেকোনো পরিবর্তনকে স্ব-আবিষ্ট ব্যাক EMF সৃষ্টির মাধ্যমে বাধা দেয়।
L = (N · Φ) / I [হেনরি (H)]

২. স্ব-আবিষ্ট ব্যাক EMF সমীকরণ:
e = -L · (di / dt) [ভোল্ট]

৩. ১ হেনরি (1 Henry) এর সংজ্ঞা:
কোনো কয়েলে প্রতি সেকেন্ডে ১ অ্যাম্পিয়ার হারে কারেন্ট পরিবর্তিত হলে যদি তাতে ১ ভোল্ট ব্যাক EMF আবিষ্ট হয়, তবে তার স্ব-আবেশ ১ হেনরি।

৪. সলিনয়েডের ইন্ডাক্ট্যান্স সমীকরণ প্রতিপাদন:
দৈর্ঘ্য l, ক্ষেত্রফল A ও N পাকসংখ্যার জন্য:
L = (μ0 · μr · N² · A) / l [হেনরি]
বা রিলাক্ট্যান্স ℜ এর মাধ্যমে: L = N² / ℜ

৫. ইন্ডাক্ট্যান্সের ৪টি মূল নিয়ামক:
- পাকসংখ্যা N: L ∝ N² (পাকসংখ্যা দ্বিগুণ করলে ইন্ডাক্ট্যান্স ৪ গুণ হয়)।
- কোরের প্রবেশ্যতা μr: এয়ার কোরের চেয়ে ফেরাইট বা সিলিকন স্টিল কোর ব্যবহার করলে L কয়েক হাজার গুণ বৃদ্ধি পায়।
- প্রস্থচ্ছেদের ক্ষেত্রফল A: L ∝ A
- কয়েলের দৈর্ঘ্য l: L ∝ 1/l।`
  },
  formulas: [
    {
      expression: 'e = -L · (di / dt)',
      description: {
        en: 'Self-induced back EMF across an inductor',
        hi: 'इंडक्टर में स्व-प्रेरित बैक EMF',
        bn: 'ইন্ডাক্টরে স্ব-আবিষ্ট ব্যাক EMF'
      }
    },
    {
      expression: 'L = (μ0 · μr · N² · A) / l',
      description: {
        en: 'Self-inductance of a cylindrical solenoid coil',
        hi: 'बेलनाकार परिनालिका कुंडली का स्व-प्रेरकत्व',
        bn: 'সলিনয়েড কয়েলের স্ব-আবেশ (ইন্ডাক্ট্যান্স)'
      }
    },
    {
      expression: 'L = N² / ℜ',
      description: {
        en: 'Inductance in terms of turns and magnetic reluctance',
        hi: 'फेरों एवं चुंबकीय रिलक्टेंस के पदों में प्रेरकत्व',
        bn: 'পাকসংখ্যা ও চৌম্বক রিলাক্ট্যান্সের মাধ্যমে ইন্ডাক্ট্যান্স'
      }
    }
  ],
  workedExamples: [
    {
      problem: {
        en: 'An inductor coil has 400 turns wound on an iron core with relative permeability μr = 1200. The core length is 20 cm and its cross-sectional area is 8 cm². Calculate the self-inductance L of the coil.',
        hi: 'एक इंडक्टर कुंडली में 400 फेरे हैं जो μr = 1200 वाले लोहे के कोर पर लपेटे गए हैं। कोर की लंबाई 20 cm और क्षेत्रफल 8 cm² है। कुंडली का स्व-प्रेरकत्व L ज्ञात करें।',
        bn: 'একটি ইন্ডাক্টর কয়েলে ৪০০ পাক তার রয়েছে যা μr = ১২০০ বিশিষ্ট একটি আয়রন কোরের উপর জড়ানো। কোরের দৈর্ঘ্য ২০ cm এবং প্রস্থচ্ছেদের ক্ষেত্রফল ৮ cm²। কয়েলটির ইন্ডাক্ট্যান্স L নির্ণয় করো।'
      },
      solution: {
        en: `Given:
N = 400 turns
μr = 1200, μ0 = 4π × 10⁻⁷ H/m
l = 20 cm = 0.20 m
A = 8 cm² = 8 × 10⁻⁴ m² = 0.0008 m²

Apply the solenoid inductance formula:
L = (μ0 · μr · N² · A) / l
L = (4π × 10⁻⁷ × 1200 × 400² × 8 × 10⁻⁴) / 0.20
L = (1.508 × 10⁻³ × 160,000 × 8 × 10⁻⁴) / 0.20
L = (193.024 × 10⁻³) / 0.20 = 0.965 Henry = 965 mH.`,
        hi: `दिया गया: N = 400, μr = 1200, l = 0.2 m, A = 8 × 10⁻⁴ m²

सूत्र: L = (μ0 · μr · N² · A) / l
L = (4π × 10⁻⁷ × 1200 × 160000 × 8 × 10⁻⁴) / 0.20
L = 0.965 H = 965 mH.`,
        bn: `দেওয়া আছে: N = ৪০০, μr = ১২০০, l = ০.২ m, A = ৮ × ১০⁻⁴ m²

সূত্র: L = (μ0 · μr · N² · A) / l
L = (৪π × ১০⁻⁷ × ১২০০ × ১৬০০০০ × ৮ × ১০⁻⁴) / ০.২০
L = ০.৯৬৫ H = ৯৬৫ mH।`
      }
    }
  ],
  quiz: [
    {
      question: {
        en: 'If the number of turns (N) in a coil is tripled (3x) with all other physical dimensions unchanged, by what factor does its self-inductance increase?',
        hi: 'यदि किसी कुंडली में फेरों की संख्या (N) तीन गुनी (3x) कर दी जाए, तो उसका स्व-प्रेरकत्व कितने गुना बढ़ जाएगा?',
        bn: 'যদি কোনো কয়েলের পাকসংখ্যা (N) ৩ গুণ করা হয় এবং অন্য সকল মাত্রা অপরিবর্তিত থাকে, তবে তার ইন্ডাক্ট্যান্স কত গুণ বৃদ্ধি পাবে?'
      },
      options: {
        en: ['3 times', '6 times', '9 times', '27 times'],
        hi: ['3 गुना', '6 गुना', '9 गुना', '27 गुना'],
        bn: ['৩ গুণ', '৬ গুণ', '৯ গুণ', '২৭ গুণ']
      },
      correctAnswer: 2,
      explanation: {
        en: 'Inductance is proportional to the square of turns (L ∝ N²). When N is multiplied by 3, L is multiplied by 3² = 9.',
        hi: 'प्रेरकत्व फेरों के वर्ग के समानुपाती होता है (L ∝ N²)। फेरे 3 गुना करने पर L का मान 3² = 9 गुना हो जाता है।',
        bn: 'ইন্ডাক্ট্যান্স পাকসংখ্যার বর্গের সমানুপাতিক (L ∝ N²)। তাই N ৩ গুণ হলে L এর মান ৩² = ৯ গুণ হয়।'
      }
    }
  ],
  flashcards: [
    {
      term: {
        en: 'Self-Inductance (L)',
        hi: 'स्व-प्रेरकत्व (L)',
        bn: 'স্ব-আবেশ (L)'
      },
      definition: {
        en: 'The ratio of magnetic flux linkages to current: L = NΦ / I. Formula for solenoid: L = μ N² A / l. Measured in Henrys (H).',
        hi: 'फ्लक्स लिंकेज एवं धारा का अनुपात: L = NΦ / I। परिनालिका सूत्र: L = μ N² A / l।',
        bn: 'ফ্লাক্স লিংকেজ ও কারেন্টের অনুপাত: L = NΦ / I। সলিনয়েড সূত্র: L = μ N² A / l। একক হেনরি (H)।'
      }
    }
  ]
};
