import { Lesson } from '../types';

export const LESSON_MAGNETIC_FIELD_LORENTZ_FORCE: Lesson = {
  id: 'lsn-ch8-magnetic-field-lorentz-force',
  topicId: 'ch8-magnetic-field-lorentz-force',
  chapterId: 'ch-inductors',
  order: 1,
  title: {
    en: 'Magnetic Fields, Flux Density (B), Field Intensity (H) & Lorentz Force',
    hi: 'चुंबकीय क्षेत्र, फ्लक्स घनत्व (B), क्षेत्र तीव्रता (H) एवं लोरेंट्ज़ बल',
    bn: 'চৌম্বক ক্ষেত্র, ফ্লাক্স ঘনত্ব (B), ক্ষেত্র প্রাবল্য (H) ও লরেন্টজ বল'
  },
  description: {
    en: 'Fundamental concepts of magnetism, magnetic field lines, magnetic flux (Φ), flux density (B), magnetic field intensity (H), permeability (μ), and the Lorentz force on moving electric charges.',
    hi: 'चुंबकत्व के मूलभूत सिद्धांत, चुंबकीय बल रेखाएं, चुंबकीय फ्लक्स (Φ), फ्लक्स घनत्व (B), चुंबकीय क्षेत्र तीव्रता (H), पारगम्यता (μ) एवं गतिमान आवेश पर लोरेंट्ज़ बल।',
    bn: 'চুম্বকত্বের মৌলিক ধারণা, চৌম্বক বলরেখা, চৌম্বক ফ্লাক্স (Φ), ফ্লাক্স ঘনত্ব (B), চৌম্বক ক্ষেত্র প্রাবল্য (H), প্রবেশ্যতা (μ) এবং গতিশীল আধানের উপর লরেন্টজ বল।'
  },
  easyExplanation: {
    en: 'Magnets and electric currents create an invisible zone of influence around them called a magnetic field. When an electric charge moves through this field, it experiences a sideways push known as the Lorentz force—the fundamental operating mechanism behind every electric motor on Earth!',
    hi: 'चुंबक और विद्युत धारा अपने चारों ओर प्रभाव का एक अदृश्य क्षेत्र बनाते हैं जिसे चुंबकीय क्षेत्र कहते हैं। जब कोई विद्युत आवेश इस क्षेत्र में गति करता है, तो उस पर एक पार्श्व बल लगता है जिसे लोरेंट्ज़ बल कहते हैं—यही पृथ्वी पर हर इलेक्ट्रिक मोटर का मूल कार्य सिद्धांत है!',
    bn: 'চুম্বক এবং তড়িৎ প্রবাহ তাদের চারপাশে প্রভাবের একটি অদৃশ্য অঞ্চল তৈরি করে যাকে চৌম্বক ক্ষেত্র বলে। কোনো বৈদ্যুতিক আধান যখন এই ক্ষেত্রের মধ্য দিয়ে গতিশীল হয়, তখন এটি পার্শ্বমুখী বল অনুভব করে যাকে লরেন্টজ বল বলে—যা পৃথিবীর প্রতিটি বৈদ্যুতিক মোটরের মূল চালিকাশক্তি!'
  },
  detailedExplanation: {
    en: `1. Magnetic Field and Magnetic Flux (Φ):
A magnetic field is a region of space where magnetic poles or moving electric charges experience a magnetic force. 
- Magnetic Flux (Φ) represents the total number of magnetic lines of force passing through a defined surface.
- SI Unit: Weber (Wb) [1 Wb = 10⁸ Maxwell / lines of force].
- Magnetic lines form continuous closed loops outside from North to South, and inside from South to North.

2. Magnetic Flux Density (B):
Magnetic flux density (also called magnetic induction) is the amount of magnetic flux passing perpendicularly through a unit surface area:
B = Φ / A [Tesla (T) or Wb/m²]
In CGS units: 1 Tesla = 10,000 Gauss (G).

3. Magnetic Field Intensity or Strength (H):
Magnetic field intensity represents the magnetizing force applied by an external current or MMF per unit length:
H = MMF / l = (N · I) / l [Ampere-turns per meter (A·t/m or A/m)]

4. Magnetic Permeability (μ):
Permeability is the ability of a medium to conduct and concentrate magnetic flux lines:
B = μ · H = μ0 · μr · H
- Permeability of free space / vacuum: μ0 = 4π × 10⁻⁷ H/m (≈ 1.2566 × 10⁻⁶ H/m).
- Relative permeability (μr): Dimensionless ratio (μr = 1 for air/vacuum, up to 100,000+ for supermalloy / silicon steel).

5. The Lorentz Force Law:
When a particle with electric charge q moves with velocity v in a region containing both an electric field E and a magnetic field B, the total force F experienced is:
F = F_electric + F_magnetic = q(E + v × B)

For a pure magnetic field (E = 0):
F = q · v · B · sin(θ) [Newtons]
- If charge moves parallel to B (θ = 0°): F = 0.
- If charge moves perpendicular to B (θ = 90°): Maximum force F = q·v·B.
- The direction is given by Fleming's Left-Hand Rule or the Right-Hand Vector Cross Product.

For a current-carrying straight conductor of length L carrying current I in field B:
F = B · I · L · sin(θ) [Newtons]`,
    hi: `1. चुंबकीय क्षेत्र एवं चुंबकीय फ्लक्स (Φ):
चुंबकीय क्षेत्र वह स्थान है जहाँ चुंबकीय ध्रुव या गतिमान आवेश चुंबकीय बल का अनुभव करते हैं।
- चुंबकीय फ्लक्स (Φ) किसी सतह से गुजरने वाली कुल चुंबकीय बल रेखाओं की संख्या है।
- SI मात्रक: वेबर (Wb) [1 Wb = 10⁸ मैक्सवेल]।

2. चुंबकीय फ्लक्स घनत्व (B):
प्रति इकाई लंबवत क्षेत्रफल से गुजरने वाले चुंबकीय फ्लक्स को फ्लक्स घनत्व (या चुंबकीय प्रेरण) कहते हैं:
B = Φ / A [टेस्ला (T) या Wb/m²] (1 T = 10,000 गॉस)।

3. चुंबकीय क्षेत्र की तीव्रता (H):
चुंबकीय क्षेत्र तीव्रता किसी माध्यम में चुंबकत्व उत्पन्न करने वाले बल (MMF प्रति मीटर लंबाई) को दर्शाती है:
H = (N · I) / l [एम्पियर-टर्न प्रति मीटर (A·t/m)]

4. पारगम्यता (Permeability, μ):
किसी माध्यम द्वारा चुंबकीय बल रेखाओं को अपने भीतर से गुजरने देने की क्षमता को पारगम्यता कहते हैं:
B = μ · H = μ0 · μr · H
जहाँ निर्वात की पारगम्यता μ0 = 4π × 10⁻⁷ H/m, और μr सापेक्ष पारगम्यता है।

5. लोरेंट्ज़ बल (Lorentz Force):
विद्युत क्षेत्र E एवं चुंबकीय क्षेत्र B में v वेग से गतिमान q आवेश पर लगने वाला कुल बल:
F = q(E + v × B)
शुद्ध चुंबकीय क्षेत्र में: F = q · v · B · sin(θ)
धारावाही चालक पर बल: F = B · I · L · sin(θ) [न्यूटन]।`,
    bn: `১. চৌম্বক ক্ষেত্র ও চৌম্বক ফ্লাক্স (Φ):
যে স্থানে কোনো চৌম্বক মেরু বা গতিশীল আধান চৌম্বক বল অনুভব করে তাকে চৌম্বক ক্ষেত্র বলে।
- চৌম্বক ফ্লাক্স (Φ) হলো কোনো ক্ষেত্রফলের মধ্য দিয়ে লম্বভাবে অতিক্রান্ত মোট চৌম্বক বলরেখার সংখ্যা।
- SI একক: ওয়েবার (Wb) [১ Wb = ১০⁸ ম্যাক্সওয়েল]।

২. চৌম্বক ফ্লাক্স ঘনত্ব (B):
একক ক্ষেত্রফলের মধ্য দিয়ে লম্বভাবে অতিক্রান্ত চৌম্বক ফ্লাক্সকে ফ্লাক্স ঘনত্ব বলে:
B = Φ / A [টেসলা (T) বা Wb/m²] (১ টেসলা = ১০,০০০ গাউস)।

৩. চৌম্বক ক্ষেত্র প্রাবল্য বা তীব্রতা (H):
কোনো মাধ্যমে প্রতি একক দৈর্ঘ্যে প্রযুক্ত চৌম্বক চালক বলকে ক্ষেত্র প্রাবল্য বলে:
H = (N · I) / l [অ্যাম্পিয়ার-টার্ন প্রতি মিটার (A·t/m)]

৪. চৌম্বক প্রবেশ্যতা (Permeability, μ):
কোনো মাধ্যমের মধ্য দিয়ে চৌম্বক বলরেখা প্রবেশ করার সহজতাকে প্রবেশ্যতা বলে:
B = μ · H = μ0 · μr · H
যেখানে শূন্যস্থানের প্রবেশ্যতা μ0 = 4π × 10⁻⁷ H/m এবং μr হলো আপেক্ষিক প্রবেশ্যতা।

৫. লরেন্টজ বল (Lorentz Force):
তড়িৎ ক্ষেত্র E ও চৌম্বক ক্ষেত্র B তে v বেগে গতিশীল q আধানের উপর মোট প্রযুক্ত বল:
F = q(E + v × B)
শুধুমাত্র চৌম্বক ক্ষেত্রে: F = q · v · B · sin(θ)
চৌম্বক ক্ষেত্রে L দৈর্ঘ্যের I তড়িৎবাহী তারের উপর বল: F = B · I · L · sin(θ) [নিউটন]।`
  },
  formulas: [
    {
      expression: 'B = Φ / A',
      description: {
        en: 'Magnetic flux density in Tesla (Wb/m²)',
        hi: 'चुंबकीय फ्लक्स घनत्व (Tesla)',
        bn: 'চৌম্বক ফ্লাক্স ঘনত্ব (টেসলা)'
      }
    },
    {
      expression: 'B = μ · H = μ0 · μr · H',
      description: {
        en: 'Relationship between flux density B and magnetic field intensity H',
        hi: 'फ्लक्स घनत्व B एवं चुंबकीय तीव्रता H का संबंध',
        bn: 'ফ্লাক্স ঘনত্ব B ও ক্ষেত্র প্রাবল্য H এর সম্পর্ক'
      }
    },
    {
      expression: 'F = q · (v × B) = q · v · B · sin(θ)',
      description: {
        en: 'Lorentz magnetic force on a moving point charge',
        hi: 'गतिमान बिंदु आवेश पर लोरेंट्ज़ चुंबकीय बल',
        bn: 'গতিশীল বিন্দু আধানের উপর লরেন্টজ চৌম্বক বল'
      }
    },
    {
      expression: 'F = B · I · L · sin(θ)',
      description: {
        en: 'Magnetic force on a current-carrying straight conductor',
        hi: 'धारावाही चालक तार पर लगने वाला चुंबकीय बल',
        bn: 'তড়িৎবাহী পরিবাহী তারের উপর চৌম্বক বল'
      }
    }
  ],
  workedExamples: [
    {
      problem: {
        en: 'A magnetic core has a cross-sectional area of 25 cm² and carries a total magnetic flux of 3.5 mWb. Calculate the magnetic flux density B in Tesla and in Gauss.',
        hi: 'एक चुंबकीय कोर का अनुप्रस्थ काट क्षेत्रफल 25 cm² है और इसमें 3.5 mWb का कुल फ्लक्स प्रवाहित होता है। टेस्ला और गॉस में फ्लक्स घनत्व B की गणना करें।',
        bn: 'একটি চৌম্বক কোরের প্রস্থচ্ছেদের ক্ষেত্রফল ২৫ cm² এবং এতে মোট ৩.৫ mWb চৌম্বক ফ্লাক্স প্রবাহিত হচ্ছে। টেসলা এবং গাউসে ফ্লাক্স ঘনত্ব B নির্ণয় করো।'
      },
      solution: {
        en: `Step 1: Convert units to standard SI:
Area A = 25 cm² = 25 × 10⁻⁴ m² = 0.0025 m²
Flux Φ = 3.5 mWb = 3.5 × 10⁻³ Wb = 0.0035 Wb

Step 2: Calculate flux density B:
B = Φ / A = (3.5 × 10⁻³ Wb) / (25 × 10⁻⁴ m²) = 1.40 Tesla (T)

Step 3: Convert to Gauss:
B_Gauss = 1.40 × 10,000 = 14,000 Gauss (G).`,
        hi: `चरण 1: SI मात्रकों में बदलें:
A = 25 × 10⁻⁴ m² = 0.0025 m²
Φ = 3.5 × 10⁻³ Wb

चरण 2: फ्लक्स घनत्व B निकालें:
B = Φ / A = (3.5 × 10⁻³) / (25 × 10⁻⁴) = 1.40 Tesla (T)

चरण 3: गॉस में बदलें:
B = 1.40 × 10,000 = 14,000 Gauss.`,
        bn: `ধাপ ১: SI এককে রূপান্তর:
A = ২৫ × ১০⁻⁴ m² = ০.০০২৫ m²
Φ = ৩.৫ × ১০⁻³ Wb

ধাপ ২: ফ্লাক্স ঘনত্ব B গণনা:
B = Φ / A = (৩.৫ × ১০⁻³) / (২৫ × ১০⁻⁴) = ১.৪০ টেসলা (T)

ধাপ ৩: গাউসে রূপান্তর:
B = ১.৪০ × ১০,০০০ = ১৪,০০০ গাউস (G)।`
      }
    },
    {
      problem: {
        en: 'A straight wire of length 0.5 m carries a current of 12 A perpendicular to a uniform magnetic field of 0.8 Tesla. Calculate the mechanical force exerted on the wire.',
        hi: '0.5 मीटर लंबा सीधा तार 0.8 टेस्ला के एकसमान चुंबकीय क्षेत्र के लंबवत 12 A की धारा वहन करता है। तार पर लगने वाले यांत्रिक बल की गणना करें।',
        bn: '০.৫ মিটার দীর্ঘ একটি সোজা তার ০.৮ টেসলা সুষম চৌম্বক ক্ষেত্রের সাথে লম্বভাবে ১২ A কারেন্ট বহন করে। তারটির উপর প্রযুক্ত যান্ত্রিক বল গণনা করো।'
      },
      solution: {
        en: `Given:
L = 0.5 m, I = 12 A, B = 0.8 T, θ = 90° (sin 90° = 1.0)

Using the magnetic force formula:
F = B · I · L · sin(θ)
F = 0.8 T × 12 A × 0.5 m × 1.0 = 4.80 Newtons (N).`,
        hi: `दिया गया है:
L = 0.5 m, I = 12 A, B = 0.8 T, θ = 90°

सूत्र: F = B · I · L · sin(θ)
F = 0.8 × 12 × 0.5 × 1 = 4.80 न्यूटन (N)।`,
        bn: `দেওয়া আছে:
L = ০.৫ m, I = ১২ A, B = ০.৮ T, θ = ৯০°

সূত্র: F = B · I · L · sin(θ)
F = ০.৮ × ১২ × ০.৫ × ১ = ৪.৮০ নিউটন (N)।`
      }
    }
  ],
  quiz: [
    {
      question: {
        en: 'What is the SI unit of magnetic flux density (B)?',
        hi: 'चुंबकीय फ्लक्स घनत्व (B) का SI मात्रक क्या है?',
        bn: 'চৌম্বক ফ্লাক্স ঘনত্বের (B) SI একক কী?'
      },
      options: {
        en: ['Weber (Wb)', 'Tesla (T)', 'Ampere-turn/meter', 'Henry (H)'],
        hi: ['वेबर (Wb)', 'टेस्ला (T)', 'एम्पियर-टर्न/मीटर', 'हेनरी (H)'],
        bn: ['ওয়েবার (Wb)', 'টেসলা (T)', 'অ্যাম্পিয়ার-টার্ন/মিটার', 'হেনরি (H)']
      },
      correctAnswer: 1,
      explanation: {
        en: 'Magnetic flux density B is measured in Tesla (T) or Wb/m². Weber (Wb) is the unit of total magnetic flux Φ.',
        hi: 'फ्लक्स घनत्व B का मात्रक टेस्ला (T) या Wb/m² है। वेबर (Wb) कुल फ्लक्स Φ का मात्रक है।',
        bn: 'ফ্লাক্স ঘনত্ব B-এর একক টেসলা (T) বা Wb/m²। ওয়েবার (Wb) হলো মোট ফ্লাক্স Φ-এর একক।'
      }
    },
    {
      question: {
        en: 'If a charged particle moves parallel to the magnetic field lines (θ = 0°), what is the Lorentz magnetic force on it?',
        hi: 'यदि कोई आवेशित कण चुंबकीय क्षेत्र रेखाओं के समानांतर (θ = 0°) गति करता है, तो उस पर लोरेंट्ज़ चुंबकीय बल क्या होगा?',
        bn: 'যদি কোনো আহিত কণা চৌম্বক বলরেখার সমান্তরালে (θ = ০°) গতিশীল হয়, তবে তার উপর প্রযুক্ত লরেন্টজ চৌম্বক বল কত হবে?'
      },
      options: {
        en: ['Maximum: q·v·B', 'Zero (0 N)', 'q·v / B', 'Negative maximum: -q·v·B'],
        hi: ['अधिकतम: q·v·B', 'शून्य (0 N)', 'q·v / B', 'ऋणात्मक अधिकतम: -q·v·B'],
        bn: ['সর্বোচ্চ: q·v·B', 'শূন্য (0 N)', 'q·v / B', 'ঋণাত্মক সর্বোচ্চ: -q·v·B']
      },
      correctAnswer: 1,
      explanation: {
        en: 'Because F = q·v·B·sin(θ), when θ = 0°, sin(0°) = 0, so the magnetic force is identically zero.',
        hi: 'चूँकि F = q·v·B·sin(θ), जब θ = 0° होता है, तो sin(0°) = 0 होने से बल शून्य होता है।',
        bn: 'যেহেতু F = q·v·B·sin(θ), θ = ০° হলে sin(০°) = ০, তাই চৌম্বক বল শূন্য হয়।'
      }
    }
  ],
  flashcards: [
    {
      term: {
        en: 'Magnetic Flux (Φ)',
        hi: 'चुंबकीय फ्लक्स (Φ)',
        bn: 'চৌম্বক ফ্লাক্স (Φ)'
      },
      definition: {
        en: 'The total number of magnetic lines of force passing through a surface, measured in Webers (Wb). 1 Wb = 10⁸ Maxwell.',
        hi: 'किसी सतह से गुजरने वाली कुल चुंबकीय बल रेखाओं की संख्या, वेबर (Wb) में मापी जाती है।',
        bn: 'কোনো তলের মধ্য দিয়ে অতিক্রান্ত মোট চৌম্বক বলরেখার সংখ্যা, ওয়েবার (Wb) এককে পরিমাপ করা হয়।'
      }
    },
    {
      term: {
        en: 'Lorentz Force Law',
        hi: 'लोरेंट्ज़ बल नियम',
        bn: 'লরেন্টজ বল সূত্র'
      },
      definition: {
        en: 'F = q(E + v × B). The combined force exerted on a moving charge by electric and magnetic fields.',
        hi: 'F = q(E + v × B)। विद्युत एवं चुंबकीय क्षेत्रों द्वारा गतिमान आवेश पर लगने वाला संयुक्त बल।',
        bn: 'F = q(E + v × B)। তড়িৎ ও চৌম্বক ক্ষেত্র দ্বারা গতিশীল আধানের উপর প্রযুক্ত সম্মিলিত বল।'
      }
    }
  ]
};
