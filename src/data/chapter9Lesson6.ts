import { Lesson } from '../types';

export const LESSON_MAGNETIC_FIELD_STRENGTH: Lesson = {
  id: 'lsn-ch9-magnetic-field-strength',
  topicId: 'tp-magnetic-field-strength',
  chapterId: 'ch-magnetic-circuits',
  order: 6,
  title: {
    en: 'Magnetic Field Strength (H) / Magnetizing Force',
    hi: 'चुंबकीय क्षेत्र की तीव्रता (H) / चुंबकन बल',
    bn: 'চৌম্বক ক্ষেত্রের তীব্রতা (H) বা ম্যাগনেটাইজিং ফোর্স'
  },
  description: {
    en: 'Magnetic field intensity (H = MMF / l = N·I / l) in Ampere-turns/meter (AT/m), relation with flux density (B = µ·H), and magnetizing intensity in solenoids and toroids.',
    hi: 'चुंबकीय क्षेत्र की तीव्रता H = N·I / l (AT/m), फ्लक्स घनत्व से संबंध (B = µ·H), परिनालिका एवं टोरोइड में चुंबकन तीव्रता।',
    bn: 'চৌম্বক ক্ষেত্রের তীব্রতা H = N·I / l (AT/m), ফ্লাক্স ঘনত্বের সাথে সম্পর্ক (B = µ·H) এবং সলিনয়েড ও টোরয়েডে তীব্রতা হিসাব।'
  },
  easyExplanation: {
    en: 'Magnetic field strength (H) represents the magnetizing "effort" or force applied per meter of a magnetic circuit. While MMF is the total magnetic push of the entire coil, H is how concentrated that push is along each unit length of the path!',
    hi: 'चुंबकीय क्षेत्र तीव्रता (H) प्रति मीटर लंबाई पर लगाए गए चुंबकन बल को दर्शाती है। MMF पूरी कॉइल का कुल चुंबकीय बल है, जबकि H प्रति मीटर लंबाई में उस बल का वितरण है!',
    bn: 'চৌম্বক ক্ষেত্রের তীব্রতা (H) হলো চৌম্বক বর্তনীর প্রতি মিটার দৈর্ঘ্যে প্রযুক্ত ম্যাগনেটাইজিং বলের পরিমাণ। পুরো কয়েলের মোট চৌম্বক চালিকাশক্তি হলো MMF, আর প্রতি একক দৈর্ঘ্যে তা কতটা ঘনীভূত তা প্রকাশ করে H!'
  },
  detailedExplanation: {
    en: `1. Definition of Magnetic Field Strength / Intensity (H):
- The Magnetomotive Force (MMF) distributed per unit length of the magnetic path.
- Mathematical Formula:
  $$H = \\frac{\\text{MMF}}{l} = \\frac{N \\cdot I}{l}$$
  where:
  - $N$ = number of turns
  - $I$ = electric current in Amperes
  - $l$ = mean length of the magnetic path in meters
- SI Unit: Ampere-turns per meter (AT/m) or Ampere per meter (A/m).

2. Relationship with Magnetic Flux Density (B):
- Flux density $B$ is the magnetic result produced inside a medium when subjected to field intensity $H$:
  $$B = \\mu \\cdot H = \\mu_0 \\mu_r \\cdot H$$
  $$\\implies H = \\frac{B}{\\mu_0 \\mu_r}$$

3. Key Distinction Between B and H:
- **H (Field Intensity):** Determined purely by the external current source and geometry ($N \\cdot I / l$), completely independent of the core material.
- **B (Flux Density):** Depends heavily on the material placed inside the field through its permeability $\\mu$.

4. Solved Problem:
A toroidal ring of mean diameter 20 cm ($d = 0.2\\text{ m}, l = \\pi d = 0.6283\\text{ m}$) has 800 turns carrying 1.5 A.
- Step 1: $H = \\frac{N \\cdot I}{l} = \\frac{800 \\times 1.5}{0.6283} = \\frac{1200}{0.6283} = 1909.9\\text{ AT/m}$.
- Step 2: If the core is silicon steel with $\\mu_r = 1500$, calculate $B$:
  $$B = \\mu_0 \\mu_r H = (4\\pi \\times 10^{-7}) \\times 1500 \\times 1909.9 = 3.60\\text{ T (saturated core)}.$$`,
    hi: `1. चुंबकीय क्षेत्र तीव्रता (H):
- सूत्र: H = (N · I) / l (AT/m या A/m)।
- यह प्रति मीटर लंबाई पर चुंबकीय वाहक बल है।

2. B और H में संबंध:
- B = µ · H = µ₀ µᵣ · H => H = B / (µ₀ µᵣ)।

3. उदाहरण:
N = 800, I = 1.5 A, l = 0.628 m
H = (800 × 1.5) / 0.628 = 1910 AT/m।`,
    bn: `১. চৌম্বক তীব্রতা (H - Magnetic Field Intensity):
- প্রতি একক দৈর্ঘ্যে প্রযুক্ত ম্যাগনেটোমোটিভ ফোর্সকে চৌম্বক ক্ষেত্রের তীব্রতা (H) বলে।
- সূত্র: $H = \\frac{N \\cdot I}{l}$
- একক: অ্যাম্পিয়ার-টার্ন পার মিটার (AT/m) বা A/m।

২. B এবং H এর সম্পর্ক:
- $B = \\mu \\cdot H = \\mu_0 \\mu_r \\cdot H \\implies H = \\frac{B}{\\mu_0 \\mu_r}$

৩. B ও H এর পার্থক্য:
- $H$ নির্ভর করে কয়েলের কারেন্ট ও দৈর্ঘ্যের ওপর।
- $B$ নির্ভর করে কোরের উপাদান কতটা সহজে চুম্বকিত হতে পারে তার ওপর।`
  },
  formulas: [
    {
      expression: 'H = (N · I) / l = MMF / l',
      description: {
        en: 'Magnetic field intensity in AT/m',
        hi: 'चुंबकीय क्षेत्र तीव्रता सूत्र (AT/m)',
        bn: 'চৌম্বক তীব্রতার সূত্র (AT/m)'
      }
    },
    {
      expression: 'B = μ₀ · μᵣ · H',
      description: {
        en: 'Constitutive relation between flux density and field intensity',
        hi: 'B और H का संबंध',
        bn: 'B এবং H এর সম্পর্ক'
      }
    }
  ],
  workedExamples: [
    {
      problem: {
        en: 'A solenoid of length 0.5 m has 1000 turns and carries 2 A. What is the magnetic field intensity H inside?',
        hi: '0.5 मीटर लंबी परिनालिका में 1000 फेरे हैं और 2 A धारा बहती है। अंदर चुंबकीय क्षेत्र तीव्रता H क्या होगी?',
        bn: '০.৫ মিটার লম্বা একটি সলিনয়েডে ১০০০ প্যাঁচ আছে এবং এতে ২ অ্যাম্পিয়ার কারেন্ট চললে ভেতরের চৌম্বক তীব্রতা H কত?'
      },
      solution: {
        en: 'H = (N × I) / l = (1000 × 2 A) / 0.5 m = 4000 AT/m.',
        hi: 'H = (1000 × 2) / 0.5 = 4000 AT/m।',
        bn: 'H = (১০০০ × ২) / ০.৫ = ৪০০০ AT/m (অ্যাম্পিয়ার-টার্ন/মিটার)।'
      }
    }
  ]
};
