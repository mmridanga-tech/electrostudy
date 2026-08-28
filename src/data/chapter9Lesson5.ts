import { Lesson } from '../types';

export const LESSON_PERMEABILITY: Lesson = {
  id: 'lsn-ch9-permeability',
  topicId: 'tp-permeability',
  chapterId: 'ch-magnetic-circuits',
  order: 5,
  title: {
    en: 'Magnetic Permeability (μ, μ₀, μᵣ)',
    hi: 'चुंबकीय पारगम्यता (μ, μ₀, μᵣ)',
    bn: 'চৌম্বক প্রবেশ্যতা বা পারমিয়াবিলিটি (μ, μ₀, μᵣ)'
  },
  description: {
    en: 'Absolute permeability (μ), permeability of free space / vacuum (μ₀ = 4π × 10⁻⁷ H/m), relative permeability (μᵣ = μ / μ₀), and material classification based on μᵣ.',
    hi: 'निरपेक्ष पारगम्यता (μ), निर्वात की पारगम्यता (μ₀ = 4π × 10⁻⁷ H/m), आपेक्षिक पारगम्यता (μᵣ) एवं पदार्थों का वर्गीकरण।',
    bn: 'পরম প্রবেশ্যতা (μ), শূন্যস্থানের প্রবেশ্যতা (μ₀ = ৪π × ১০⁻⁷ H/m), আপেক্ষিক প্রবেশ্যতা (μᵣ) এবং উপাদানের শ্রেণিবিভাগ।'
  },
  easyExplanation: {
    en: 'Permeability is like the "magnetic conductivity" of a substance. It measures how readily a material allows magnetic lines of force to pass through it compared to empty vacuum. Materials like iron and silicon steel have relative permeability of thousands, concentrating flux effortlessly!',
    hi: 'पारगम्यता किसी पदार्थ की "चुंबकीय चालकता" की तरह है। यह दर्शाती है कि कोई पदार्थ निर्वात की तुलना में चुंबकीय रेखाओं को कितनी आसानी से अपने अंदर से गुजरने देता है। लोहे और सिलिकॉन स्टील की आपेक्षिक पारगम्यता हजारों में होती है!',
    bn: 'পারমিয়াবিলিটি হলো কোনো পদার্থের "চৌম্বক পরিবাহিতা"। এটি নির্দেশ করে শূন্যস্থানের তুলনায় কোনো পদার্থ কত সহজে চৌম্বক বলরেখা নিজের ভেতর দিয়ে প্রবাহিত হতে দেয়। লোহা এবং সিলিকন স্টিলের আপেক্ষিক প্রবেশ্যতা কয়েক হাজার গুণ পর্যন্ত হতে পারে!'
  },
  detailedExplanation: {
    en: `1. Definition of Magnetic Permeability (μ):
- The ability of a magnetic material to support the development of a magnetic field within itself.
- Relationship:
  $$B = \\mu \\cdot H \\implies \\mu = \\frac{B}{H}$$
  (where $B$ is Magnetic Flux Density in Tesla, $H$ is Magnetic Field Intensity in A/m).
- SI Unit: Henry per meter (H/m) or Newton per Ampere squared ($N/A^2$).

2. Permeability of Free Space or Vacuum ($\\mu_0$):
- Exact physical constant:
  $$\\mu_0 = 4\\pi \\times 10^{-7}\\text{ H/m} \\approx 1.256637 \\times 10^{-6}\\text{ H/m}$$
- Air and non-magnetic materials (copper, aluminum, wood) have $\\mu \\approx \\mu_0$.

3. Relative Permeability ($\\mu_r$):
- Ratio of the absolute permeability of a material ($\\mu$) to the permeability of free space ($\\mu_0$):
  $$\\mu_r = \\frac{\\mu}{\\mu_0}$$
- $\\mu_r$ is dimensionless (has no units).

4. Practical Values of $\\mu_r$:
- **Vacuum / Air:** $\\mu_r = 1$
- **Diamagnetic Materials (Bismuth, Copper, Water):** $\\mu_r < 1$ (slightly less than 1, e.g. 0.99999)
- **Paramagnetic Materials (Aluminum, Platinum, Air):** $\\mu_r > 1$ (slightly greater than 1, e.g. 1.00002)
- **Ferromagnetic Materials (Iron, Nickel, Cobalt, Silicon Steel):** $\\mu_r \\gg 1$ (ranging from 500 to 50,000+)
- **Supermalloy / Mu-metal:** $\\mu_r = 100,000$ to $300,000$ (used for magnetic shielding).`,
    hi: `1. चुंबकीय पारगम्यता (μ):
- सूत्र: B = μ · H => μ = B / H (मात्रक: H/m)।

2. निर्वात की पारगम्यता (μ₀):
- मान: µ₀ = 4π × 10⁻⁷ H/m ≈ 1.2566 × 10⁻⁶ H/m।

3. आपेक्षिक पारगम्यता (μᵣ):
- सूत्र: µᵣ = µ / µ₀ (विमाहीन अनुपात)।
- वायु / निर्वात: µᵣ = 1
- फेरोमैग्नेटिक (लोहा, स्टील): µᵣ = 1000 - 50,000+।`,
    bn: `১. চৌম্বক প্রবেশ্যতা (μ - Magnetic Permeability):
- কোনো পদার্থের মধ্যে চৌম্বক ফ্লাক্স তৈরির সামর্থ্যকে পারমিয়াবিলিটি বলে।
- সূত্র: $B = \\mu \\cdot H \\implies \\mu = \\frac{B}{H}$
- একক: হেনরি পার মিটার (H/m)।

২. শূন্যস্থানের প্রবেশ্যতা ($\\mu_0$):
- ধ্রুবক মান: $\\mu_0 = 4\\pi \\times 10^{-7}$ H/m।

৩. আপেক্ষিক প্রবেশ্যতা ($\\mu_r$):
- $\\mu_r = \\frac{\\mu}{\\mu_0}$ (এটি একটি এককবিহীন সংখ্যা)।
- বায়ু বা শূন্যস্থান: $\\mu_r = 1$
- ডায়াম্যাগনেটিক: $\\mu_r < 1$
- প্যারাম্যাগনেটিক: $\\mu_r > 1$
- ফেরোম্যাগনেটিক: $\\mu_r \\gg 1$ (হাজার থেকে লক্ষ পর্যন্ত)।`
  },
  formulas: [
    {
      expression: 'μ = μ₀ · μᵣ',
      description: {
        en: 'Total permeability where μ₀ = 4π × 10⁻⁷ H/m',
        hi: 'कुल पारगम्यता सूत्र',
        bn: 'মোট চৌম্বক প্রবেশ্যতা সূত্র'
      }
    },
    {
      expression: 'μ = B / H',
      description: {
        en: 'Permeability as ratio of flux density to field intensity',
        hi: 'पारगम्यता = B / H',
        bn: 'পারমিয়াবিলিটি = B / H'
      }
    }
  ],
  workedExamples: [
    {
      problem: {
        en: 'If an iron core has relative permeability μr = 2500, what is its absolute permeability μ?',
        hi: 'यदि लोहे के कोर की आपेक्षिक पारगम्यता µr = 2500 है, तो इसकी निरपेक्ष पारगम्यता µ क्या होगी?',
        bn: 'একটি আয়রন কোরের আপেক্ষিক প্রবেশ্যতা μr = ২৫০০ হলে এর পরম প্রবেশ্যতা μ কত?'
      },
      solution: {
        en: 'μ = μ₀ × μr = (4π × 10⁻⁷ H/m) × 2500 = 3.1416 × 10⁻³ H/m (3.14 mH/m).',
        hi: 'µ = 4π × 10⁻⁷ × 2500 = 3.14 × 10⁻³ H/m।',
        bn: 'μ = (৪π × ১০⁻⁷) × ২৫০০ = ৩.১৪১৬ × ১০⁻৩ H/m (৩.১৪ mH/m)।'
      }
    }
  ]
};
