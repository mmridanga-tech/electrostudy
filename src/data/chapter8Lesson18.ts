import { Lesson } from '../types';

export const LESSON_SOLENOIDS_RELAYS_ELECTROMAGNETS: Lesson = {
  id: 'lsn-ch8-solenoids-relays-electromagnets',
  topicId: 'ch8-solenoids-relays-electromagnets',
  chapterId: 'ch-inductors',
  order: 18,
  title: {
    en: 'Industrial Actuators: Electromagnets, Solenoids & Relays',
    hi: 'औद्योगिक एक्चुएटर: विद्युत चुंबक, सोलेनोइड एवं विद्युतचुंबकीय रिले',
    bn: 'ইন্ডাস্ট্রিয়াল অ্যাকচুয়েটর: ইলেক্ট্রোম্যাগনেট, সলিনয়েড ও রিলে'
  },
  description: {
    en: 'Principles of electromagnetic force generation, mathematical derivation of magnetic attractive force F = B²A / 2μ0, linear solenoid valve actuators, electromechanical relays (armature, spring, NO/NC contacts), contactors, and shading rings for AC buzz elimination.',
    hi: 'विद्युतचुंबकीय बल उत्पत्ति का सिद्धांत, चुंबकीय आकर्षण बल सूत्र F = B²A / 2μ0, लीनियर सोलेनोइड वाल्व, इलेक्ट्रोमैकेनिकल रिले (NO/NC संपर्क), कांटैक्टर एवं एसी हमिंग/बज़िंग रोकने हेतु शेडिंग रिंग।',
    bn: 'তড়িচ্চুম্বকীয় বল সৃষ্টির মূলনীতি, চৌম্বক আকর্ষণ বল সমীকরণ F = B²A / 2μ0, লিনিয়ার সলিনয়েড ভালভ, ইলেক্ট্রোমেকানিক্যাল রিলে (NO/NC কন্টাক্ট), কন্টাক্টর ও এসি গুঞ্জন প্রতিরোধে শেডিং রিং।'
  },
  easyExplanation: {
    en: 'Electromagnets turn electrical current directly into physical mechanical muscle! When electric current energizes a coil around an iron core, the strong magnetic field pulls a movable iron plunger or spring-loaded armature with massive force (F = B²A / 2μ0). This is how car starter motors engage, industrial robotic valves open, and relays switch high-voltage equipment safely from low-voltage microcontrollers.',
    hi: 'विद्युत चुंबक विद्युत धारा को सीधे शक्तिशाली यांत्रिक गति में बदलते हैं! जब धारा लोहे के कोर के चारों ओर की कुंडली में बहती है, तो शक्तिशाली चुंबकीय बल भारी खिंचाव बल (F = B²A / 2μ0) पैदा करता है। इसी सिद्धांत से कार के स्टार्टर मोटर चालू होते हैं, इंडस्ट्रियल वॉल्व खुलते हैं और रिले उच्च वोल्टेज उपकरणों को सुरक्षित रूप से ऑन/ऑफ करते हैं।',
    bn: 'তড়িচ্চুম্বক বিদ্যুৎ প্রবাহকে সরাসরি শক্তিশালী যান্ত্রিক শক্তিতে রূপান্তরিত করে! যখন একটি কয়েলে কারেন্ট প্রবাহিত হয়, তখন শক্তিশালী চৌম্বক ক্ষেত্র একটি লোহার রড বা আর্মেচারকে সজোরে আকর্ষণ করে (F = B²A / 2μ0)। এর মাধ্যমেই গাড়ির স্টার্টার মোটর কাজ করে, রোবোটিক ভালভ খোলে এবং রিলে মাইক্রোকন্ট্রোলারের সাহায্যে উচ্চ ভোল্টেজ সার্কিট নিয়ন্ত্রণ করে।'
  },
  detailedExplanation: {
    en: `1. Derivation of Magnetic Attractive Pulling Force:
Consider an electromagnet with pole face area A and flux density B separated from an iron armature by a small air gap g.
- Magnetic energy density in the air gap: w_m = B² / (2 · μ0) [Joules/m³].
- If the armature moves an incremental virtual distance dg, the change in air-gap volume is dV = A · dg.
- Work done by magnetic force: dW = F · dg = w_m · dV = [ B² / (2 · μ0) ] · (A · dg).
- Canceling dg gives Maxwell's Pull Formula:
  F = (B² · A) / (2 · μ0) [Newtons for one pole face]
  For a Horseshoe / U-shaped electromagnet with two pole faces:
  F_total = (B² · A) / μ0 [Newtons]

2. Linear Solenoid Actuators:
Consists of a stationary helical coil, an iron frame, and a movable soft-iron cylindrical core called a "plunger".
- De-energized: A return spring holds the plunger in extended position.
- Energized: Magnetic flux lines seek the path of minimum magnetic reluctance (ℜ), pulling the plunger inward into the coil center with force proportional to (N · I)².
- Applications: Solenoid valves (controlling pneumatic/hydraulic fluid flow), automotive starter solenoids, door locks, pinball flippers.

3. Electromechanical Relays & Industrial Contactors:
- Core Components: Coil, fixed iron core, movable pivoted armature, return spring, and silver-alloy electrical contacts.
- Contact Configurations:
  1. Normally Open (NO / Form A): Open when de-energized, closes when coil is powered.
  2. Normally Closed (NC / Form B): Closed when de-energized, opens when coil is powered.
  3. Changeover (CO / SPDT / Form C): Common terminal (COM) toggles between NC and NO.
- Contactors: Heavy-duty relays with large arc chutes, designed to switch 3-phase high currents (10 A to 1,000+ A) for industrial motors.

4. AC Relays and Shading Rings (Shading Coil):
In AC electromagnets, magnetic flux crosses zero twice per cycle (100 or 120 times/sec), causing the pulling force to drop to zero and the armature to violently chatter/buzz against the return spring.
- The Solution: A heavy copper ring ("shading ring") is embedded across roughly 1/3 of the pole face.
- Working Principle: The shading ring acts as a shorted secondary turn, creating a phase-lagged magnetic flux (Φ_shaded lags Φ_unshaded by ≈ 45° to 60°). The vector sum of the two forces never drops to zero, ensuring silent, chatter-free hold!`,
    hi: `1. मैक्सवेल का चुंबकीय खिंचाव बल सूत्र (Maxwell's Pull Formula):
F = (B² · A) / (2 · μ0) [न्यूटन]
(दो ध्रुवों वाले U-आकार के चुंबक के लिए: F = B² · A / μ0)।

2. सोलेनोइड एक्चुएटर (Solenoid Actuator):
न्यूनतम रिलक्टेंस के सिद्धांत पर काम करता है। करंट देने पर प्लंजर अंदर खिंच जाता है (वॉल्व नियंत्रण, ऑटोमोबाइल स्टार्टर)।

3. इलेक्ट्रोमैकेनिकल रिले (Relay):
- NO (Normally Open): सामान्यतः खुला, करंट मिलने पर बंद।
- NC (Normally Closed): सामान्यतः बंद, करंट मिलने पर खुला।

4. शेडिंग रिंग (Shading Ring):
एसी रिले में फ्लक्स शून्य होने पर होने वाली चटरिंग (खटखटाहट/बज़िंग) को रोकने के लिए पोल पर तांबे की एक छोटी रिंग लगाई जाती है जो फेज़-शिफ्टेड फ्लक्स बनाकर निरंतर बल बनाए रखती है।`,
    bn: `১. ম্যাক্সওয়েলের চৌম্বক আকর্ষণ বল সমীকরণ:
F = (B² · A) / (2 · μ0) [নিউটন]
(দুটি পোল বিশিষ্ট U-আকৃতির জন্য: F = B² · A / μ0)।

২. সলিনয়েড অ্যাকচুয়েটর:
ন্যূনতম রিলাক্ট্যান্সের নীতিতে কাজ করে। কয়েলে বিদ্যুৎ দিলে লোহার রডটি (Plunger) তীব্র বেগে কয়েলের কেন্দ্রে আকর্ষিত হয় (ভালভ নিয়ন্ত্রণ, অটোমোবাইল)।

৩. রিলে ও কন্টাক্টর:
- NO (Normally Open): বিদ্যুৎ না থাকলে খোলা, বিদ্যুৎ দিলে সংযোগ পায়।
- NC (Normally Closed): বিদ্যুৎ না থাকলে যুক্ত, বিদ্যুৎ দিলে বিচ্ছিন্ন হয়।

৪. শেডিং রিং (Shading Ring):
এসি রিলেতে সাইকেল শূন্যে নামলে আর্মেচারের কাঁপুনি বা গুঞ্জন (Chattering) দূর করতে পোলের মাথায় তামার বলয় বসানো হয় যা সার্বক্ষণিক আকর্ষণ বল বজায় রাখে।`
  },
  formulas: [
    {
      expression: 'F = \\frac{B^2 \\cdot A}{2\\mu_0}',
      description: {
        en: 'Maxwell formula for magnetic attractive force per pole face',
        hi: 'प्रति ध्रुव फलक चुंबकीय आकर्षण बल का मैक्सवेल सूत्र',
        bn: 'প্রতিটি পোল ফেসে চৌম্বক আকর্ষণ বলের ম্যাক্সওয়েল সমীকরণ'
      }
    }
  ],
  workedExamples: [
    {
      problem: {
        en: 'A lifting electromagnet has two pole faces, each of area A = 150 cm² (0.015 m²). If the magnetic flux density across the air gap contact is B = 1.4 Tesla, calculate the maximum steel load (in kg) the magnet can lift against gravity (g = 9.81 m/s²).',
        hi: 'एक उठाने वाले विद्युत चुंबक के दो ध्रुव हैं (प्रत्येक का क्षेत्रफल 150 cm²)। यदि B = 1.4 Tesla है, तो यह चुंबक कितने किलोग्राम (kg) का अधिकतम भार उठा सकता है?',
        bn: 'ভারোত্তোলন ইলেক্ট্রোম্যাগনেটের দুটি পোল রয়েছে (প্রতিটির ক্ষেত্রফল ১৫০ cm²)। যদি ফ্লাক্স ঘনত্ব B = ১.৪ টেসলা হয়, তবে এটি সর্বোচ্চ কত কেজি (kg) ভার উত্তোলন করতে পারবে? (g = ৯.৮১ m/s²)'
      },
      solution: {
        en: `Given:
Number of poles = 2
Area per pole A = 150 cm² = 0.015 m²
B = 1.4 Tesla
μ0 = 4π × 10⁻⁷ H/m ≈ 1.2566 × 10⁻⁶ H/m
g = 9.81 m/s²

Step 1: Calculate total magnetic pull force F for two poles:
F_total = 2 × [ (B² · A) / (2 · μ0) ] = (B² · A) / μ0
F_total = [ (1.4)² × 0.015 ] / (1.2566 × 10⁻⁶)
F_total = [ 1.96 × 0.015 ] / 1.2566 × 10⁻⁶ = 0.0294 / 1.2566 × 10⁻⁶
F_total = 23,396.4 Newtons.

Step 2: Convert Force to mass lifting capacity (m = F / g):
m = 23,396.4 N / 9.81 m/s² = 2,385 kg (≈ 2.385 metric tons!).`,
        hi: `F = (B² · A) / μ0 = (1.4² × 0.015) / (4π × 10⁻⁷) = 23,396.4 N
द्रव्यमान m = F / g = 23,396.4 / 9.81 = 2,385 kg (लगभग 2.38 टन)।`,
        bn: `F = (B² · A) / μ0 = (১.৪² × ০.০১৫) / (৪π × ১০⁻⁷) = ২৩,৩৯৬.৪ N
ভর m = F / g = ২৩,৩৯৬.৪ / ৯.৮১ = ২,৩৮৫ kg (প্রায় ২.৩৮৫ টন)।`
      }
    }
  ],
  quiz: [
    {
      question: {
        en: 'What is the function of a copper "shading ring" installed on the pole face of an AC contactor or relay?',
        hi: 'AC कांटैक्टर या रिले के पोल पर लगाई गई तांबे की "शेडिंग रिंग" का क्या कार्य है?',
        bn: 'এসি কন্টাক্টর বা রিলের পোলে তামার "শেডিং রিং" বসানোর মূল উদ্দেশ্য কী?'
      },
      options: {
        en: ['To increase the resistance of the electrical contacts', 'To prevent mechanical armature chattering/buzzing caused by zero-crossings of AC flux', 'To cool the coil with thermal convection', 'To convert AC into DC'],
        hi: ['संपर्कों का प्रतिरोध बढ़ाने के लिए', 'एसी फ्लक्स के शून्य होने पर होने वाली चटरिंग एवं आवाज (बज़िंग) को रोकने के लिए', 'कुंडली को ठंडा रखने के लिए', 'एसी को डीसी में बदलने के लिए'],
        bn: ['কন্টাক্ট রোধ বৃদ্ধির জন্য', 'এসি ফ্লাক্স শূন্যে নামার কারণে সৃষ্ট কম্পন ও গুঞ্জন (Chattering/Buzzing) দূর করতে', 'কয়েল ঠান্ডা রাখতে', 'এসিকে ডিসিতে রূপান্তর করতে']
      },
      correctAnswer: 1,
      explanation: {
        en: 'The shading ring produces a phase-shifted auxiliary magnetic flux that maintains holding force when the main AC flux passes through zero, preventing mechanical buzzing.',
        hi: 'शेडिंग रिंग एक फेज़-शिफ्टेड फ्लक्स बनाती है जिससे मुख्य फ्लक्स शून्य होने पर भी होल्डिंग बल बना रहता है और खटखटाहट बंद हो जाती है।',
        bn: 'শেডিং রিং মূল ফ্লাক্স শূন্যে নামার সময় একটি বিকল্প ফেজ-শিফটেড ফ্লাক্স সৃষ্টি করে সার্বক্ষণিক আকর্ষণ বজায় রাখে।'
      }
    }
  ],
  flashcards: [
    {
      term: {
        en: 'Magnetic Pull Force',
        hi: 'चुंबकीय आकर्षण बल',
        bn: 'চৌম্বক আকর্ষণ বল'
      },
      definition: {
        en: 'F = B²A / 2μ0. The mechanical attractive force generated at an electromagnet pole face.',
        hi: 'F = B²A / 2μ0। विद्युत चुंबक के ध्रुव पर उत्पन्न यांत्रिक आकर्षण बल।',
        bn: 'F = B²A / 2μ0। তড়িচ্চুম্বকের পোলে সৃষ্ট যান্ত্রিক আকর্ষণ বলের সমীকরণ।'
      }
    }
  ]
};
