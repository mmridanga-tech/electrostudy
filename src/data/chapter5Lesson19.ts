import { Lesson } from '../types';

export const LESSON_STAR_DELTA_AC: Lesson = {
  id: 'lsn-ch5-star-delta-ac',
  topicId: 'ch5-star-delta-ac',
  chapterId: 'ch-alternating-current',
  order: 19,
  title: {
    en: 'Three-Phase Star and Delta Connections',
    hi: 'थ्री-फेज स्टार एवं डेल्टा संयोजन',
    bn: 'থ্রি-ফেজ স্টার ও ডেল্টা সংযোগ'
  },
  estimatedMinutes: 55,
  easyExplanation: {
    en: 'In three-phase AC systems, three single-phase windings or loads are interconnected in two primary configurations: Star (Wye, Y) and Delta (Mesh, Δ). In a Star connection, the common end of all three windings is joined at a central neutral point (N). Star systems provide two different voltages: a Line Voltage (e.g., 415 V between lines) and a Phase Voltage (e.g., 240 V between line and neutral), where Line Voltage is √3 (approx 1.732) times the Phase Voltage, while Line Current equals Phase Current. In a Delta connection, the three windings are connected end-to-end in a closed triangular loop without a neutral. Here, Line Voltage equals Phase Voltage, while Line Current is √3 times the Phase Current. Star-Delta transitions are widely used in induction motor starters to reduce starting surge currents by 66.7%.',
    hi: 'थ्री-फेज एसी प्रणालियों में तीन कॉइलों या लोडों को मुख्य रूप से दो तरीकों से जोड़ा जाता है: स्टार (Y) और डेल्टा (Δ)। स्टार संयोजन में तीनों कॉइलों के एक सिरे को एक उभयनिष्ठ न्यूट्रल बिंदु (N) पर जोड़ा जाता है। इसमें दो प्रकार के वोल्टेज मिलते हैं: लाइन वोल्टेज (415 V) और फेज वोल्टेज (240 V), जहाँ लाइन वोल्टेज फेज वोल्टेज का √3 (1.732) गुना होता है तथा लाइन धारा फेज धारा के बराबर होती है। डेल्टा संयोजन में तीनों कॉइलों को एक बंद त्रिभुजाकार लूप में जोड़ा जाता है जिसमें कोई न्यूट्रल नहीं होता। डेल्टा में लाइन वोल्टेज फेज वोल्टेज के बराबर होती है, लेकिन लाइन धारा फेज धारा की √3 गुना होती है। मोटरों को सुरक्षित शुरू करने के लिए स्टार-डेल्टा स्टार्टर का व्यापक उपयोग होता है।',
    bn: 'থ্রি-ফেজ এসি সার্কিটে তিনটি ফেজ কয়েল বা লোডকে প্রধানত দুটি পদ্ধতিতে আন্তঃসংযুক্ত করা হয়: স্টার (Y) এবং ডেল্টা (Δ)। স্টার সংযোগে তিনটি কয়েলের প্রান্তবিন্দুকে একটি সাধারণ নিউট্রাল বিন্দুতে (N) যুক্ত করা হয়। স্টারে দুটি ভোল্টেজ পাওয়া যায়: লাইন ভোল্টেজ (৪১৫ V) এবং ফেজ ভোল্টেজ (২৪০ V), যেখানে লাইন ভোল্টেজ ফেজ ভোল্টেজের √৩ (১.৭৩২) গুণ এবং লাইন কারেন্ট ফেজ কারেন্টের সমান। ডেল্টা সংযোগে কয়েলগুলোকে একটি বদ্ধ ত্রিভুজাকার লুপে সাজানো হয় যেখানে কোনো নিউট্রাল থাকে না। ডেল্টায় লাইন ভোল্টেজ ফেজ ভোল্টেজের সমান, কিন্তু লাইন কারেন্ট ফেজ কারেন্টের √৩ গুণ। মোটর শুরুর অতিরিক্ত কারেন্ট কমাতে স্টার-ডেল্টা স্টার্টার বহুল ব্যবহৃত।'
  },
  detailedExplanation: {
    en: `1. Three-Phase Star (Wye or Y) Connection:
In a Star connection, similar terminals (either all start terminals or all finish terminals) of the three phase windings are joined together to form a common junction called the Neutral Point (N).
- 4-Wire Star System: Three line conductors (R, Y, B) emanate from the outer terminals and one neutral conductor (N) from the central junction.
- Phase Voltage (V_ph): Voltage measured across a single phase winding (between any line and neutral: V_RN, V_YN, V_BN).
- Line Voltage (V_L): Voltage measured across any two line conductors (V_RY, V_YB, V_BR).
- Mathematical Derivation:
  V_RY = V_RN - V_YN = V_RN + (-V_YN)
  Using phasor parallelogram addition with 60° angle between V_RN and -V_YN:
  V_L = √(V_ph² + V_ph² + 2·V_ph·V_ph·cos 60°) = √(3 · V_ph²) = √3 · V_ph ≈ 1.732 · V_ph.
  Phasor angle: Line voltage leads its corresponding phase voltage by 30° (V_RY = √3 · V_RN ∠+30°).
- Current Relationship:
  Since the line conductor is directly in series with the phase winding:
  I_L = I_ph.

2. Three-Phase Delta (Mesh or Δ) Connection:
In a Delta connection, the finish terminal of one winding is connected to the start terminal of the adjacent winding, forming a closed triangular series loop. Three line conductors (R, Y, B) are tapped from the three corner nodes.
- Voltage Relationship:
  Since each line is connected directly across the terminals of a single phase winding:
  V_L = V_ph.
- Current Relationship:
  Applying Kirchhoff's Current Law (KCL) at line node R:
  I_R = I_RY - I_BR = I_RY + (-I_BR)
  By phasor subtraction (with 60° displacement between I_RY and -I_BR):
  I_L = √(I_ph² + I_ph² + 2·I_ph·I_ph·cos 60°) = √(3 · I_ph²) = √3 · I_ph ≈ 1.732 · I_ph.
  Phasor angle: Line current lags the corresponding phase current by 30° (I_R = √3 · I_RY ∠-30°).

3. Three-Phase Power in Star and Delta Systems:
Total active power (P), reactive power (Q), and apparent power (S) equations are universally identical for balanced loads in both topologies when expressed in line quantities:
- Active Power: P = √3 · V_L · I_L · cos φ = 3 · V_ph · I_ph · cos φ (Watts / kW)
- Reactive Power: Q = √3 · V_L · I_L · sin φ = 3 · V_ph · I_ph · sin φ (VAR / kVAR)
- Apparent Power: S = √3 · V_L · I_L = 3 · V_ph · I_ph (VA / kVA)

4. Comparison of Power in Star vs. Delta for Identical Phase Impedance Z:
If three identical impedance elements (Z ∠φ) are connected first in Star and then in Delta across the same 3-phase line voltage V_L:
- In Star: V_ph = V_L / √3 ⇒ I_ph = V_L / (√3 · Z) ⇒ I_L = I_ph = V_L / (√3 · Z).
  P_Star = 3 · (V_L / √3)² / Z · cos φ = (V_L² / Z) · cos φ.
- In Delta: V_ph = V_L ⇒ I_ph = V_L / Z ⇒ I_L = √3 · I_ph = √3 · V_L / Z.
  P_Delta = 3 · (V_L)² / Z · cos φ = 3 · (V_L² / Z) · cos φ.
- Key Engineering Conclusion: P_Delta = 3 · P_Star and I_L(Delta) = 3 · I_L(Star).
A delta connection draws 3 times more line current and dissipates 3 times more power than a star connection of the exact same impedance!

5. Industrial Star-Delta Starter Application:
Direct-On-Line (DOL) starting of a large 3-phase induction motor creates severe line voltage dips by drawing 6 to 8 times rated full-load current.
- Star Starting: The motor stator windings are initially connected in Star during startup. Phase voltage is reduced to 1/√3 (57.7%) of rated line voltage, reducing starting torque and starting line current to exactly 1/3 (33.3%) of full DOL Delta value.
- Delta Running: Once the motor accelerates to 80-90% of rated synchronous speed, a timer-operated contactor transitions the stator windings to Delta connection for full rated operating torque and power output.`,
    hi: `1. थ्री-फेज स्टार (Wye या Y) संयोजन:
स्टार संयोजन में तीनों फेजों के समान सिरों को एक साथ जोड़कर न्यूट्रल बिंदु (N) बनाया जाता है।
- लाइन वोल्टेज V_L और फेज वोल्टेज V_ph में संबंध: V_L = √3 · V_ph (लाइन वोल्टेज फेज वोल्टेज से 30° आगे होता है)।
- लाइन धारा I_L और फेज धारा I_ph में संबंध: I_L = I_ph।
- 4-तार स्टार प्रणाली में दो वोल्टेज प्राप्त होते हैं: 415 V (लाइन-टू-लाइन) और 240 V (लाइन-टू-न्यूट्रल)।

2. थ्री-फेज डेल्टा (Mesh या Δ) संयोजन:
डेल्टा संयोजन में तीनों कॉइलों को एक सिरे से दूसरे सिरे तक जोड़कर बंद त्रिकोण बनाया जाता है।
- लाइन वोल्टेज और फेज वोल्टेज में संबंध: V_L = V_ph।
- लाइन धारा और फेज धारा में संबंध: I_L = √3 · I_ph (लाइन धारा फेज धारा से 30° पीछे होती है)।
- डेल्टा में कोई न्यूट्रल नहीं होता, केवल 3 तार (R, Y, B) होते हैं।

3. थ्री-फेज शक्ति (Power):
स्टार और डेल्टा दोनों के लिए कुल शक्ति का सूत्र समान रहता है:
P = √3 · V_L · I_L · cos φ = 3 · V_ph · I_ph · cos φ।

4. समान प्रतिबाधा पर शक्ति की तुलना:
समान प्रतिबाधा Z को डेल्टा में जोड़ने पर वह स्टार की तुलना में 3 गुना अधिक धारा खींचती है और 3 गुना अधिक शक्ति (P_Delta = 3 · P_Star) खपत करती है।

5. स्टार-डेल्टा स्टार्टर:
इंडक्शन मोटर को शुरू करते समय धारा को 1/3 (33.3%) तक सीमित करने के लिए पहले स्टार में शुरू किया जाता है, फिर गति पकड़ने पर डेल्टा में बदला जाता है।`,
    bn: `১. থ্রি-ফেজ স্টার (Y) সংযোগ:
স্টার সংযোগে তিনটি কয়েলের এক প্রান্ত একত্রিত করে নিউট্রাল পয়েন্ট (N) তৈরি করা হয়।
- ভোল্টেজ সম্পর্ক: V_L = √৩ · V_ph (লাইন ভোল্টেজ ফেজ ভোল্টেজ থেকে ৩০° এগিয়ে থাকে)।
- কারেন্ট সম্পর্ক: I_L = I_ph।
- স্টারে ৪১৫ V ও ২৪০ V দুটি ভিন্ন ভোল্টেজ পাওয়া যায়।

২. থ্রি-ফেজ ডেল্টা (Δ) সংযোগ:
ডেল্টা সংযোগে তিনটি কয়েলকে পর্যায়ক্রমে যুক্ত করে একটি ত্রিভুজাকার লুপ তৈরি করা হয়। এতে কোনো নিউট্রাল থাকে না।
- ভোল্টেজ সম্পর্ক: V_L = V_ph।
- কারেন্ট সম্পর্ক: I_L = √৩ · I_ph (লাইন কারেন্ট ফেজ কারেন্ট থেকে ৩০° পিছিয়ে থাকে)।

৩. থ্রি-ফেজ ক্ষমতা (Power):
উভয় সংযোগেই মোট পাওয়ারের সমীকরণ:
P = √৩ · V_L · I_L · cos φ = ৩ · V_ph · I_ph · cos φ।

৪. একই লোডের ক্ষেত্রে তুলনামূলক বিশ্লেষণ:
একই মানের লোড ডেল্টায় সংযুক্ত থাকলে স্টারের তুলনায় ৩ গুণ বেশি কারেন্ট টানে এবং ৩ গুণ বেশি ক্ষমতা গ্রহণ করে (P_Delta = ৩ · P_Star)।

৫. স্টার-ডেল্টা স্টার্টারের প্রয়োগ:
মোটর চালু করার মুহূর্তে অতিরিক্ত কারেন্ট ও ভোল্টেজ ড্রপ কমাতে প্রথমে স্টারে চালিয়ে গতি বৃদ্ধির পর ডেল্টায় স্থানান্তর করা হয়। এতে স্টার্টিং কারেন্ট ৩৩.৩% এ নেমে আসে।`
  },
  sections: [
    {
      id: 'sec-star-phasor-derivation',
      title: {
        en: 'Phasor Derivation: Star Voltage Relationship (V_L = √3 · V_ph ∠30°)',
        hi: 'फेजर व्युत्पत्ति: स्टार वोल्टेज संबंध (V_L = √3 · V_ph ∠30°)',
        bn: 'ফেজর প্রমাণ: স্টার ভোল্টেজ সম্পর্ক (V_L = √৩ · V_ph ∠৩০°)'
      },
      content: {
        en: 'Let phase voltages be: V_RN = V_ph ∠0°, V_YN = V_ph ∠-120°, V_BN = V_ph ∠-240°.\nThe Line Voltage V_RY between lines R and Y is given by Kirchhoff\'s Voltage Law: V_RY = V_RN - V_YN = V_RN + (-V_YN).\nFrom vector parallelogram geometry:\n|V_RY| = √(V_RN² + V_YN² + 2·V_RN·V_YN·cos 60°) = √(V_ph² + V_ph² + 2·V_ph²·0.5) = √(3·V_ph²) = √3 · V_ph.\nThe phase angle of V_RY with respect to V_RN is tan α = (V_ph · sin 60°) / (V_ph + V_ph · cos 60°) = (√3/2) / (1 + 0.5) = (√3/2) / (3/2) = 1/√3 ⇒ α = 30°.\nConclusion: In a Star connection, Line Voltage leads its corresponding Phase Voltage by 30° and is √3 (1.732) times larger in magnitude.',
        hi: 'स्टार संयोजन में लाइन वोल्टेज V_RY = V_RN - V_YN।\nसमांतर चतुर्भुज नियम से: |V_RY| = √(V_ph² + V_ph² + 2·V_ph²·cos 60°) = √(3·V_ph²) = √3 · V_ph।\nकोण α = 30° आता है। अतः लाइन वोल्टेज, फेज वोल्टेज से 30° आगे (lead) होता है और परिमाण में √3 गुना होता है।',
        bn: 'স্টার সংযোগে লাইন ভোল্টেজ V_RY = V_RN - V_YN।\nভেক্টর সামান্তরিক সূত্রানুসারে: |V_RY| = √(V_ph² + V_ph² + ২·V_ph²·cos ৬০°) = √৩ · V_ph এবং কোণ α = ৩০°। অর্থাৎ লাইন ভোল্টেজ ফেজ ভোল্টেজ অপেক্ষা ৩০° এগিয়ে থাকে এবং মানে √৩ গুণ হয়।'
      },
      keyEquations: [
        'V_{RY} = V_{RN} - V_{YN} = \\sqrt{3} \\cdot V_{\\text{ph}} \\angle 30^\\circ',
        'V_L = \\sqrt{3} \\cdot V_{\\text{ph}} \\approx 1.732 \\cdot V_{\\text{ph}}',
        'I_L = I_{\\text{ph}}'
      ]
    },
    {
      id: 'sec-delta-phasor-derivation',
      title: {
        en: 'Phasor Derivation: Delta Current Relationship (I_L = √3 · I_ph ∠-30°)',
        hi: 'फेजर व्युत्पत्ति: डेल्टा धारा संबंध (I_L = √3 · I_ph ∠-30°)',
        bn: 'ফেজর প্রমাণ: ডেল্টা কারেন্ট সম্পর্ক (I_L = √৩ · I_ph ∠-৩০°)'
      },
      content: {
        en: 'In a balanced Delta load, phase currents are I_RY = I_ph ∠-φ, I_YB = I_ph ∠(-120° - φ), I_BR = I_ph ∠(-240° - φ).\nApplying KCL at node R: I_R = I_RY - I_BR = I_RY + (-I_BR).\nBy vector addition of I_RY and -I_BR (which are separated by 60°):\n|I_R| = √(I_RY² + I_BR² + 2·I_RY·I_BR·cos 60°) = √(I_ph² + I_ph² + 2·I_ph²·0.5) = √(3·I_ph²) = √3 · I_ph.\nConclusion: In a Delta connection, Line Current lags its component Phase Current by 30° and is √3 (1.732) times larger in magnitude.',
        hi: 'डेल्टा संयोजन में नोड R पर KCL लगाने से लाइन धारा I_R = I_RY - I_BR प्राप्त होती है।\nसदिश योग से: |I_R| = √(I_ph² + I_ph² + 2·I_ph²·cos 60°) = √3 · I_ph। लाइन धारा, फेज धारा से 30° पीछे (lag) होती है और परिमाण में √3 गुना होती है।',
        bn: 'ডেল্টা সংযোগে নোড R-এ KCL প্রয়োগ করে: I_R = I_RY - I_BR।\nভেক্টর যোগে: |I_R| = √(I_ph² + I_ph² + ২·I_ph²·cos ৬০°) = √৩ · I_ph। অর্থাৎ লাইন কারেন্ট ফেজ কারেন্ট থেকে ৩০° পিছিয়ে থাকে এবং মানে √৩ গুণ হয়।'
      },
      keyEquations: [
        'I_R = I_{RY} - I_{BR} = \\sqrt{3} \\cdot I_{\\text{ph}} \\angle -30^\\circ',
        'I_L = \\sqrt{3} \\cdot I_{\\text{ph}} \\approx 1.732 \\cdot I_{\\text{ph}}',
        'V_L = V_{\\text{ph}}'
      ]
    },
    {
      id: 'sec-star-vs-delta-comparison',
      title: {
        en: 'Detailed Star vs. Delta Comparison Matrix',
        hi: 'स्टार बनाम डेल्टा विस्तृत तुलना सारणी',
        bn: 'স্টার বনাম ডেল্টা তুলনামূলক বিশ্লেষণ'
      },
      content: {
        en: 'Comparison Summary:\n1. Voltage: Star has V_L = √3 · V_ph; Delta has V_L = V_ph.\n2. Current: Star has I_L = I_ph; Delta has I_L = √3 · I_ph.\n3. Neutral Terminal: Available in 4-wire Star; Absent in 3-wire Delta.\n4. Available Voltages: Star provides two voltages (415V/240V); Delta provides only single voltage (415V).\n5. Winding Insulation: Star requires lower insulation (57.7% of line voltage); Delta requires full line voltage insulation (100%).\n6. Total Power across identical Impedance Z: P_Delta = 3 · P_Star.\n7. Typical Applications: Star is preferred for alternator generation, distribution substations, and lighting loads; Delta is preferred for high-power motors, industrial heaters, and delta transmission meshes.',
        hi: 'तुलना सारांश:\n1. वोल्टेज: स्टार में V_L = √3·V_ph; डेल्टा में V_L = V_ph।\n2. धारा: स्टार में I_L = I_ph; डेल्टा में I_L = √3·I_ph।\n3. न्यूट्रल: स्टार में उपलब्ध; डेल्टा में अनुपलब्ध।\n4. इंसुलेशन आवश्यकता: स्टार में कम (57.7%); डेल्टा में अधिक (100%)।\n5. समान प्रतिबाधा Z पर शक्ति: P_Delta = 3 · P_Star।',
        bn: 'তুলনা সংক্ষেপ:\n১. ভোল্টেজ: স্টারে V_L = √৩·V_ph; ডেল্টায় V_L = V_ph।\n২. কারেন্ট: স্টারে I_L = I_ph; ডেল্টায় I_L = √৩·I_ph।\n৩. নিউট্রাল: স্টারে প্রাপ্তিসাধ্য; ডেল্টায় অনুপস্থিত।\n৪. ইনসুলেশন: স্টারে কম (৫৭.৭%); ডেল্টায় বেশি (১০০%)।\n৫. সমমানের লোডে পাওয়ার: P_Delta = ৩ · P_Star।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-star-delta-connections',
      title: {
        en: 'Three-Phase Star and Delta Configurations & Transformations',
        hi: 'थ्री-फेज स्टार एवं डेल्टा विन्यास एवं रूपांतरण',
        bn: 'থ্রি-ফেজ স্টার ও ডেল্টা বিন্যাস এবং রূপান্তর'
      },
      caption: {
        en: 'Three-Phase Star (Wye) vs. Delta (Mesh) Topology: Line vs. Phase Quantities, Neutral Line, and Voltage/Current Transformations',
        hi: 'थ्री-फेज स्टार बनाम डेल्टा टोपोलॉजी: लाइन बनाम फेज राशियाँ, न्यूट्रल तार एवं वोल्टेज/धारा रूपांतरण',
        bn: 'থ্রি-ফেজ স্টার বনাম ডেল্টা টপোলজি: লাইন বনাম ফেজ রাশি, নিউট্রাল তার ও ভোল্টেজ/কারেন্ট রূপান্তর'
      },
      svgType: 'circuit-star-delta-connections'
    }
  ],
  formulas: [
    {
      symbol: 'V_L (Star)',
      expression: 'V_L = \\sqrt{3} \\cdot V_{\\text{ph}} \\approx 1.732 \\cdot V_{\\text{ph}} \\quad \\Longleftrightarrow \\quad V_{\\text{ph}} = \\frac{V_L}{\\sqrt{3}} \\approx 0.577 \\cdot V_L',
      description: {
        en: 'Line Voltage in a balanced Star connection is √3 times the Phase Voltage and leads by 30°',
        hi: 'संतुलित स्टार संयोजन में लाइन वोल्टेज फेज वोल्टेज का √3 गुना होती है और 30° आगे होती है',
        bn: 'সুষম স্টার সংযোগে লাইন ভোল্টেজ ফেজ ভোল্টেজের √৩ গুণ এবং ৩০° এগিয়ে থাকে'
      }
    },
    {
      symbol: 'I_L (Delta)',
      expression: 'I_L = \\sqrt{3} \\cdot I_{\\text{ph}} \\approx 1.732 \\cdot I_{\\text{ph}} \\quad \\Longleftrightarrow \\quad I_{\\text{ph}} = \\frac{I_L}{\\sqrt{3}} \\approx 0.577 \\cdot I_L',
      description: {
        en: 'Line Current in a balanced Delta connection is √3 times the Phase Current and lags by 30°',
        hi: 'संतुलित डेल्टा संयोजन में लाइन धारा फेज धारा की √3 गुना होती है और 30° पीछे होती है',
        bn: 'সুষম ডেল্টা সংযোগে লাইন কারেন্ট ফেজ কারেন্টের √৩ গুণ এবং ৩০° পিছিয়ে থাকে'
      }
    },
    {
      symbol: 'P_{3\\phi}',
      expression: 'P_{3\\phi} = \\sqrt{3} \\cdot V_L \\cdot I_L \\cdot \\cos \\phi = 3 \\cdot V_{\\text{ph}} \\cdot I_{\\text{ph}} \\cdot \\cos \\phi',
      description: {
        en: 'Total Active (Real) Power in a balanced 3-phase circuit (identical for Star and Delta)',
        hi: 'संतुलित 3-फेज परिपथ में कुल सक्रिय शक्ति (स्टार एवं डेल्टा दोनों के लिए समान)',
        bn: 'সুষম ৩-ফেজ সার্কিটে মোট সক্রিয় ক্ষমতা (স্টার ও ডেল্টা উভয়ের জন্যই সমরূপ)'
      }
    },
    {
      symbol: 'P_{\\Delta} / P_Y',
      expression: 'P_{\\text{Delta}} = 3 \\cdot P_{\\text{Star}} \\quad (\\text{for identical phase impedance } Z)',
      description: {
        en: 'Delta connection draws 3 times more power and current than Star connection of identical impedance elements',
        hi: 'समान प्रतिबाधा Z के लिए डेल्टा संयोजन स्टार संयोजन की तुलना में 3 गुना अधिक शक्ति एवं धारा लेता है',
        bn: 'একই প্রতিবাধার ক্ষেত্রে ডেল্টা সংযোগ স্টার সংযোগের তুলনায় ৩ গুণ বেশি কারেন্ট ও পাওয়ার গ্রহণ করে'
      }
    }
  ],
  solvedExamples: [
    {
      id: 'ex-19-1-star-calc',
      problem: {
        en: 'A balanced 3-phase Star-connected load having an impedance of Z = (12 + j16) Ω per phase is connected across a 415 V, 50 Hz, 3-phase supply. Calculate: (a) Phase voltage V_ph, (b) Magnitude of phase impedance |Z|, (c) Phase current I_ph and Line current I_L, (d) Power factor cos φ, (e) Total active power P, (f) Total reactive power Q, and (g) Total apparent power S.',
        hi: 'प्रति फेज प्रतिबाधा Z = (12 + j16) Ω वाला एक संतुलित 3-फेज स्टार लोड 415 V, 50 Hz 3-फेज सप्लाई से जुड़ा है। गणना करें: (a) V_ph, (b) |Z|, (c) I_ph एवं I_L, (d) cos φ, (e) सक्रिय शक्ति P, (f) प्रतिक्रियाशील शक्ति Q, एवं (g) कुल आभासी शक्ति S।',
        bn: 'প্রতি ফেজে Z = (১২ + j১৬) Ω বিশিষ্ট একটি সুষম ৩-ফেজ স্টার লোড ৪১৫ V, ৫০ Hz সরবরাহের সাথে যুক্ত। নির্ণয় করুন: (a) V_ph, (b) |Z|, (c) I_ph ও I_L, (d) cos φ, (e) মোট সক্রিয় ক্ষমতা P, (f) রিঅ্যাক্টিভ ক্ষমতা Q, এবং (g) মোট আপাত ক্ষমতা S।'
      },
      givenValues: {
        'V_L': '415 V',
        'Z_ph': '12 + j16 Ω',
        'f': '50 Hz'
      },
      solution: {
        en: `Step 1: Calculate Phase Voltage (V_ph) in Star:
V_ph = V_L / √3 = 415 / 1.73205 = 239.60 V ≈ 240 V.

Step 2: Calculate Phase Impedance Magnitude (|Z|) and Phase Angle:
|Z| = √(R² + X_L²) = √(12² + 16²) = √(144 + 256) = √400 = 20.0 Ω.
Phase angle φ = arctan(X_L / R) = arctan(16 / 12) = arctan(1.3333) = 53.13°.

Step 3: Calculate Currents (I_ph and I_L):
In Star, line current equals phase current:
I_ph = V_ph / |Z| = 239.60 / 20.0 = 11.98 A.
I_L = I_ph = 11.98 A.

Step 4: Calculate Power Factor:
cos φ = R / |Z| = 12 / 20 = 0.60 lagging.
sin φ = X_L / |Z| = 16 / 20 = 0.80 lagging.

Step 5: Calculate Powers (P, Q, S):
Active Power P = √3 · V_L · I_L · cos φ = 1.73205 × 415 × 11.98 × 0.60 = 5,165.2 W = 5.165 kW.
(Verification: P = 3 · I_ph² · R = 3 × 11.98² × 12 = 3 × 143.52 × 12 = 5,166.7 W).
Reactive Power Q = √3 · V_L · I_L · sin φ = 1.73205 × 415 × 11.98 × 0.80 = 6,886.9 VAR = 6.887 kVAR.
Apparent Power S = √3 · V_L · I_L = 1.73205 × 415 × 11.98 = 8,608.6 VA = 8.609 kVA.`,
        hi: `चरण 1: V_ph = 415 / √3 = 239.6 V (240 V)।
चरण 2: |Z| = √(12² + 16²) = 20 Ω।
चरण 3: I_ph = I_L = 239.6 / 20 = 11.98 A।
चरण 4: cos φ = 12 / 20 = 0.60 लैगिंग।
चरण 5: सक्रिय शक्ति P = √3 × 415 × 11.98 × 0.60 = 5.165 kW।
प्रतिक्रियाशील शक्ति Q = 6.887 kVAR। कुल आभासी शक्ति S = 8.609 kVA।`,
        bn: `ধাপ ১: V_ph = ৪১৫ / √৩ = ২৩৯.৬০ V (২৪০ V)।
ধাপ ২: |Z| = √(১২² + ১৬²) = ২০.০ Ω, φ = ৫৩.১৩°।
ধাপ ৩: স্টারে I_L = I_ph = ২৩৯.৬০ / ২০.০ = ১১.৯৮ A।
ধাপ ৪: পাওয়ার ফ্যাক্টর cos φ = ১২ / ২০ = ০.৬০ ল্যাগিং।
ধাপ ৫: সক্রিয় ক্ষমতা P = ৫.১৬৫ kW, রিঅ্যাক্টিভ ক্ষমতা Q = ৬.৮৮৭ kVAR, আপাত ক্ষমতা S = ৮.৬০৯ kVA।`
      }
    },
    {
      id: 'ex-19-2-delta-calc',
      problem: {
        en: 'Three identical coils, each having a resistance of R = 18 Ω and an inductive reactance of X_L = 24 Ω, are connected in Delta across a 400 V, 50 Hz, 3-phase supply. Calculate: (a) Phase voltage V_ph, (b) Phase current I_ph, (c) Line current I_L, (d) Power factor cos φ, and (e) Total active power P and reactive power Q.',
        hi: 'तीन समान कॉइलें (R = 18 Ω, X_L = 24 Ω) एक 400 V, 50 Hz 3-फेज सप्लाई से डेल्टा में जुड़ी हैं। गणना करें: (a) V_ph, (b) I_ph, (c) I_L, (d) cos φ, (e) कुल सक्रिय शक्ति P एवं प्रतिक्रियाशील शक्ति Q।',
        bn: 'প্রতিটি কয়েলে R = ১৮ Ω এবং X_L = ২৪ Ω বিশিষ্ট তিনটি অভিন্ন কয়েল ৪০০ V, ৫০ Hz সরবরাহের সাথে ডেল্টায় যুক্ত। নির্ণয় করুন: (a) V_ph, (b) I_ph, (c) I_L, (d) cos φ, (e) মোট সক্রিয় ক্ষমতা P এবং রিঅ্যাক্টিভ ক্ষমতা Q।'
      },
      givenValues: {
        'V_L': '400 V',
        'R': '18 Ω',
        'X_L': '24 Ω'
      },
      solution: {
        en: `Step 1: Calculate Phase Voltage (V_ph) in Delta:
In a Delta connection: V_ph = V_L = 400 V.

Step 2: Calculate Phase Impedance (|Z|):
|Z| = √(R² + X_L²) = √(18² + 24²) = √(324 + 576) = √900 = 30.0 Ω.

Step 3: Calculate Phase Current (I_ph):
I_ph = V_ph / |Z| = 400 / 30.0 = 13.333 A.

Step 4: Calculate Line Current (I_L):
In Delta: I_L = √3 · I_ph = 1.73205 × 13.333 = 23.094 A.

Step 5: Calculate Power Factor:
cos φ = R / |Z| = 18 / 30 = 0.60 lagging.
sin φ = X_L / |Z| = 24 / 30 = 0.80 lagging.

Step 6: Calculate Active and Reactive Power:
Active Power P = √3 · V_L · I_L · cos φ = 1.73205 × 400 × 23.094 × 0.60 = 9,600 W = 9.60 kW.
(Verification: P = 3 · I_ph² · R = 3 × (13.333)² × 18 = 3 × 177.78 × 18 = 9,600 W).
Reactive Power Q = √3 · V_L · I_L · sin φ = 1.73205 × 400 × 23.094 × 0.80 = 12,800 VAR = 12.80 kVAR.`,
        hi: `चरण 1: डेल्टा में V_ph = V_L = 400 V।
चरण 2: |Z| = √(18² + 24²) = 30 Ω।
चरण 3: I_ph = 400 / 30 = 13.33 A।
चरण 4: I_L = √3 × 13.33 = 23.09 A।
चरण 5: cos φ = 18 / 30 = 0.60 लैगिंग।
चरण 6: सक्रिय शक्ति P = 9.60 kW, प्रतिक्रियाशील शक्ति Q = 12.80 kVAR।`,
        bn: `ধাপ ১: ডেল্টায় V_ph = V_L = ৪০০ V।
ধাপ ২: |Z| = √(১৮² + ২৪²) = ৩০.০ Ω।
ধাপ ৩: ফেজ কারেন্ট I_ph = ৪০০ / ৩০ = ১৩.৩৩৩ A।
ধাপ ৪: লাইন কারেন্ট I_L = √৩ × ১৩.৩৩৩ = ২৩.০৯৪ A।
ধাপ ৫: পাওয়ার ফ্যাক্টর cos φ = ১৮ / ৩০ = ০.৬০ ল্যাগিং।
ধাপ ৬: মোট সক্রিয় ক্ষমতা P = ৯.৬০ kW, রিঅ্যাক্টিভ ক্ষমতা Q = ১২.৮০ kVAR।`
      }
    }
  ],
  practicalApplications: {
    en: [
      'Substation Transformers (Dyn11): Step-down distribution transformers utilize a Delta primary (to block 3rd harmonics) and a 4-wire Star secondary (to supply 415 V 3-phase power to factories and 240 V single-phase power to residences).',
      'Induction Motor Star-Delta Starters: Star-Delta switching reduces inrush starting current to 33.3% of full-voltage DOL starting, preventing catastrophic grid voltage dips and breaker tripping.',
      'Industrial Resistance Furnaces: Heating elements reconnected from Star to Delta increase thermal heat output by exactly 300% (3×) for rapid heating cycles.',
      'High-Voltage AC Transmission Lines: Long-distance overhead transmission grids use 3-phase 3-wire Delta configurations to minimize tower conductor weight and eliminate neutral line costs.'
    ],
    hi: [
      'सबस्टेशन ट्रांसफार्मर (Dyn11): प्राइमरी डेल्टा (हार्मोनिक्स रोकने हेतु) और सेकेंडरी स्टार (415V/240V आपूर्ति हेतु) विन्यास का उपयोग होता है।',
      'स्टार-डेल्टा स्टार्टर: इंडक्शन मोटरों में स्टार्टिंग धारा को 33.3% तक घटाने के लिए उपयोग किया जाता है।',
      'औद्योगिक हीटिंग फर्नेस: हीटिंग कॉइलों को स्टार से डेल्टा में बदलने पर ऊष्मा उत्पादन ठीक 3 गुना बढ़ जाता है।',
      'हाई-वोल्टेज ट्रांसमिशन लाइन: लंबी दूरी के ट्रांसमिशन में तार का वजन और लागत घटाने के लिए 3-वायर डेल्टा का उपयोग किया जाता है।'
    ],
    bn: [
      'সাবস্টেশন ট্রান্সফরমার (Dyn11): ডেল্টা প্রাইমারি ও ৪-ওয়্যার স্টার সেকেন্ডারি ব্যবহার করে কলকারখানায় ৪১৫ V ও বাসাবাড়িতে ২৪০ V বিদ্যুৎ সরবরাহ করা হয়।',
      'স্টার-ডেল্টা মোটর স্টার্টার: মোটর শুরুর বিশাল কারেন্ট ধাক্কা ৩৩.৩% এ নামিয়ে আনতে ব্যবহৃত হয়।',
      'শিল্প হিটিং ফার্নেস: কয়েলগুলোকে স্টার থেকে ডেল্টায় পরিবর্তন করলে উত্তাপ উৎপাদন ঠিক ৩ গুণ বেড়ে যায়।',
      'হাই-ভোল্টেজ সঞ্চালন লাইন: দীর্ঘ দূরত্বের লাইনে খরচ কমাতে ৩-ওয়্যার ডেল্টা ট্রান্সমিশন ব্যবহৃত হয়।'
    ]
  },
  importantPoints: {
    en: [
      'In a balanced Star system: Line Voltage V_L = √3 · V_ph ∠+30°, Line Current I_L = I_ph.',
      'In a balanced Delta system: Line Voltage V_L = V_ph, Line Current I_L = √3 · I_ph ∠-30°.',
      'Total power formulas are identical in terms of line values: P = √3 · V_L · I_L · cos φ for both Star and Delta.',
      'Connecting identical impedances in Delta instead of Star draws 3 times more line current and consumes 3 times more active power (P_Delta = 3 · P_Star).',
      'Star-Delta starter limits starting current and starting torque to 1/3 (33.3%) of the direct-on-line (DOL) Delta starting values.'
    ],
    hi: [
      'स्टार प्रणाली में: V_L = √3 · V_ph ∠+30°, I_L = I_ph।',
      'डेल्टा प्रणाली में: V_L = V_ph, I_L = √3 · I_ph ∠-30°।',
      'कुल शक्ति सूत्र दोनों में समान होता है: P = √3 · V_L · I_L · cos φ।',
      'समान लोड को डेल्टा में जोड़ने पर वह स्टार की तुलना में 3 गुना अधिक धारा और शक्ति लेता है (P_Delta = 3 · P_Star)।',
      'स्टार-डेल्टा स्टार्टर स्टार्टिंग धारा और टॉर्क को DOL मान के 1/3 (33.3%) तक सीमित करता है।'
    ],
    bn: [
      'সুষম স্টার সার্কিটে: V_L = √৩ · V_ph ∠+৩০°, I_L = I_ph।',
      'সুষম ডেল্টা সার্কিটে: V_L = V_ph, I_L = √৩ · I_ph ∠-৩০°।',
      'উভয় সার্কিটেই মোট পাওয়ার সমীকরণ: P = √৩ · V_L · I_L · cos φ।',
      'একই লোড ডেল্টায় সংযোগ করলে ৩ গুণ বেশি কারেন্ট ও পাওয়ার টানে (P_Delta = ৩ · P_Star)।',
      'স্টার-ডেল্টা স্টার্টার স্টার্টিং কারেন্ট ও টর্ককে DOL মানের ১/৩ (৩৩.৩%) এ নামিয়ে আনে।'
    ]
  },
  commonMistakes: {
    en: [
      'Applying √3 to current instead of voltage in Star: Remember Star boosts Voltage (V_L = √3·V_ph), Delta boosts Current (I_L = √3·I_ph).',
      'Forgetting that V_ph = V_L in Delta: Do not divide line voltage by √3 when analyzing Delta-connected loads.',
      'Using the wrong power formula: Total 3-phase power is P = √3 · V_L · I_L · cos φ (with line values) OR P = 3 · V_ph · I_ph · cos φ (with phase values). Never write P = 3 · V_L · I_L · cos φ.',
      'Assuming a neutral wire exists in Delta: A standard Delta connection is strictly a 3-wire system without a neutral point.'
    ],
    hi: [
      'स्टार में वोल्टेज की जगह करंट में √3 लगाना: याद रखें स्टार में वोल्टेज बढ़ता है (V_L = √3·V_ph) और डेल्टा में करंट बढ़ता है (I_L = √3·I_ph)।',
      'डेल्टा में V_ph = V_L भूलना: डेल्टा में लाइन वोल्टेज को √3 से भाग न दें।',
      'शक्ति सूत्र में भ्रम: सही सूत्र P = √3·V_L·I_L·cos φ है, P = 3·V_L·I_L·cos φ कभी न लिखें।',
      'डेल्टा में न्यूट्रल तार मानना: डेल्टा कनेक्शन में कोई न्यूट्रल नहीं होता।'
    ],
    bn: [
      'স্টারে ভোল্টেজের পরিবর্তে কারেন্টে √৩ গুণ করা: স্টারে ভোল্টেজ বৃদ্ধি পায় (V_L = √৩·V_ph) এবং ডেল্টায় কারেন্ট বৃদ্ধি পায় (I_L = √৩·I_ph)।',
      'ডেল্টায় V_ph = V_L ভুলে যাওয়া: ডেল্টায় লাইন ভোল্টেজকে √৩ দিয়ে ভাগ করবেন না।',
      'ভুল পাওয়ার সূত্র ব্যবহার: লাইন মান দিয়ে P = √৩·V_L·I_L·cos φ এবং ফেজ মান দিয়ে P = ৩·V_ph·I_ph·cos φ।',
      'ডেল্টায় নিউট্রাল খোঁজা: ডেল্টা সংযোগে কোনো নিউট্রাল পয়েন্ট থাকে না।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-19-1',
      question: {
        en: 'In a balanced three-phase Star (Wye) connected system, what is the exact mathematical relationship between Line Voltage (V_L) and Phase Voltage (V_ph)?',
        hi: 'संतुलित थ्री-फेज स्टार (Wye) प्रणाली में लाइन वोल्टेज (V_L) और फेज वोल्टेज (V_ph) के बीच सही संबंध क्या है?',
        bn: 'একটি সুষম ৩-ফেজ স্টার (Wye) ব্যবস্থায় লাইন ভোল্টেজ (V_L) ও ফেজ ভোল্টেজের (V_ph) মধ্যে সঠিক গাণিতিক সম্পর্ক কোনটি?'
      },
      options: [
        { id: 'opt-a', text: { en: 'V_L = V_ph', hi: 'V_L = V_ph', bn: 'V_L = V_ph' } },
        { id: 'opt-b', text: { en: 'V_L = √3 · V_ph ∠30°', hi: 'V_L = √3 · V_ph ∠30°', bn: 'V_L = √৩ · V_ph ∠৩০°' } },
        { id: 'opt-c', text: { en: 'V_L = V_ph / √3', hi: 'V_L = V_ph / √3', bn: 'V_L = V_ph / √৩' } },
        { id: 'opt-d', text: { en: 'V_L = 3 · V_ph', hi: 'V_L = 3 · V_ph', bn: 'V_L = 3 · V_ph' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'In a Star connection, the line voltage is the vector difference between two phase voltages (V_RY = V_RN - V_YN), yielding a magnitude of √3 · V_ph and leading the phase voltage by 30°.',
        hi: 'स्टार संयोजन में लाइन वोल्टेज दो फेज वोल्टेजों का सदिश अंतर (V_RY = V_RN - V_YN) होता है, जिसका परिमाण √3 · V_ph होता है और यह फेज वोल्टेज से 30° आगे होता है।',
        bn: 'স্টার সংযোগে লাইন ভোল্টেজ দুটি ফেজ ভোল্টেজের ভেক্টর বিয়োগফল (V_RY = V_RN - V_YN), যার মান √৩ · V_ph এবং এটি ফেজ ভোল্টেজ থেকে ৩০° এগিয়ে থাকে।'
      }
    },
    {
      id: 'mcq-19-2',
      question: {
        en: 'In a balanced three-phase Delta (Mesh) connected system, what is the relationship between Line Current (I_L) and Phase Current (I_ph)?',
        hi: 'संतुलित थ्री-फेज डेल्टा (Mesh) प्रणाली में लाइन धारा (I_L) और फेज धारा (I_ph) के बीच क्या संबंध होता है?',
        bn: 'একটি সুষম ৩-ফেজ ডেল্টা (Mesh) ব্যবস্থায় লাইন কারেন্ট (I_L) ও ফেজ কারেন্টের (I_ph) সম্পর্ক কী?'
      },
      options: [
        { id: 'opt-a', text: { en: 'I_L = I_ph', hi: 'I_L = I_ph', bn: 'I_L = I_ph' } },
        { id: 'opt-b', text: { en: 'I_L = I_ph / √3', hi: 'I_L = I_ph / √3', bn: 'I_L = I_ph / √৩' } },
        { id: 'opt-c', text: { en: 'I_L = √3 · I_ph ∠-30°', hi: 'I_L = √3 · I_ph ∠-30°', bn: 'I_L = √৩ · I_ph ∠-৩০°' } },
        { id: 'opt-d', text: { en: 'I_L = 3 · I_ph', hi: 'I_L = 3 · I_ph', bn: 'I_L = 3 · I_ph' } }
      ],
      correctOptionId: 'opt-c',
      explanation: {
        en: 'In Delta, line current is the vector difference of two phase currents at a node (I_R = I_RY - I_BR), making I_L = √3 · I_ph lagging by 30°.',
        hi: 'डेल्टा में लाइन धारा नोड पर दो फेज धाराओं का सदिश अंतर होती है (I_R = I_RY - I_BR), अतः I_L = √3 · I_ph।',
        bn: 'ডেল্টায় নোডে দুটি ফেজ কারেন্টের ভেক্টর বিয়োগের মাধ্যমে লাইন কারেন্ট পাওয়া যায় (I_R = I_RY - I_BR), তাই I_L = √৩ · I_ph।'
      }
    },
    {
      id: 'mcq-19-3',
      question: {
        en: 'When a 3-phase induction motor is started using a Star-Delta starter, what is the starting line current compared to Direct-On-Line (DOL) Delta starting?',
        hi: 'जब एक 3-फेज मोटर को स्टार-डेल्टा स्टार्टर से चालू किया जाता है, तो DOL डेल्टा स्टार्टिंग की तुलना में स्टार्टिंग लाइन धारा कितनी हो जाती है?',
        bn: 'স্টার-ডেল্টা স্টার্টার ব্যবহার করে ৩-ফেজ মোটর চালু করলে DOL ডেল্টা স্টার্টিংয়ের তুলনায় স্টার্টিং লাইন কারেন্ট কত হয়?'
      },
      options: [
        { id: 'opt-a', text: { en: '1/√3 (57.7%) of DOL current', hi: 'DOL धारा का 1/√3 (57.7%)', bn: 'DOL কারেন্টের ১/√৩ (৫৭.৭%)' } },
        { id: 'opt-b', text: { en: '1/3 (33.3%) of DOL current', hi: 'DOL धारा का 1/3 (33.3%)', bn: 'DOL কারেন্টের ১/৩ (৩৩.৩%)' } },
        { id: 'opt-c', text: { en: 'Equal to DOL current', hi: 'DOL धारा के बराबर', bn: 'DOL কারেন্টের সমান' } },
        { id: 'opt-d', text: { en: '1/2 (50%) of DOL current', hi: 'DOL धारा का 1/2 (50%)', bn: 'DOL কারেন্টের ১/২ (৫০%)' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'In Star, winding voltage drops by 1/√3 and winding current drops by 1/√3. Since line current equals phase current in Star, total starting line current is (1/√3) × (1/√3) = 1/3 (33.3%) of delta starting current.',
        hi: 'स्टार में वाइंडिंग वोल्टेज 1/√3 और वाइंडिंग धारा 1/√3 घट जाती है। स्टार में I_L = I_ph होने से कुल स्टार्टिंग लाइन धारा डेल्टा की तुलना में 1/3 (33.3%) रह जाती है।',
        bn: 'স্টারে কয়েল ভোল্টেজ ১/√৩ এবং কয়েল কারেন্ট ১/√৩ গুণ কমে। ফলে লাইন কারেন্ট ডেল্টার তুলনায় ১/৩ (৩৩.৩%) এ নেমে আসে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-star-delta-conversion-calc',
      question: {
        en: 'A 415 V, 50 Hz, 3-phase supply feeds a balanced star-connected load with impedance Z = 15 + j20 Ω per phase. Determine: (a) Phase voltage V_ph, (b) Line current I_L, (c) Power factor cos φ, and (d) Total active power P. If this same load is reconnected in Delta across the same supply, determine (e) new line current and (f) new total active power.',
        hi: 'एक 415 V, 50 Hz 3-फेज सप्लाई प्रति फेज प्रतिबाधा Z = 15 + j20 Ω वाले स्टार लोड को शक्ति देती है। ज्ञात करें: (a) V_ph, (b) I_L, (c) cos φ, एवं (d) सक्रिय शक्ति P। यदि इसी लोड को डेल्टा में जोड़ा जाए, तो (e) नई लाइन धारा एवं (f) नई कुल सक्रिय शक्ति ज्ञात करें।',
        bn: 'একটি ৪১৫ V, ৫০ Hz সরবরাহ প্রতি ফেজে Z = ১৫ + j২০ Ω বিশিষ্ট একটি স্টার লোডে যুক্ত। নির্ণয় করুন: (a) V_ph, (b) I_L, (c) cos φ, এবং (d) মোট সক্রিয় ক্ষমতা P। এই একই লোড ডেল্টায় পুনঃসংযুক্ত হলে (e) নতুন লাইন কারেন্ট ও (f) নতুন মোট ক্ষমতা কত হবে?'
      },
      hint: {
        en: 'In Star: |Z| = √(15² + 20²) = 25 Ω, V_ph = 415 / √3 = 239.6 V, I_L = 239.6 / 25 = 9.584 A, P = 3·I²·R = 4,133 W. In Delta: V_ph = 415 V, I_ph = 415 / 25 = 16.6 A, I_L = √3 · 16.6 = 28.75 A, P_Delta = 3 · P_Star = 12,400 W.',
        hi: 'स्टार में: |Z| = 25 Ω, V_ph = 239.6 V, I_L = 9.584 A, P = 4.13 kW। डेल्टा में: I_L = 28.75 A, P = 12.40 kW।',
        bn: 'স্টারে: |Z| = ২৫ Ω, V_ph = ২৩৯.৬ V, I_L = ৯.৫৮৪ A, P = ৪.১৩ kW। ডেল্টায়: I_L = ২৮.৭৫ A, P = ১২.৪০ kW।'
      },
      answerKey: {
        en: '(a) Phase Voltage in Star V_ph = 415 / √3 = 239.60 V.\n(b) Line Current in Star I_L = V_ph / |Z| = 239.60 / 25.0 = 9.584 A.\n(c) Power Factor cos φ = R / |Z| = 15 / 25 = 0.60 lagging.\n(d) Total Active Power in Star P_Star = 3 × 9.584² × 15 = 4,133.4 W = 4.13 kW.\n(e) Line Current in Delta I_L(Delta) = √3 · (415 / 25) = √3 × 16.60 = 28.75 A (exactly 3 × 9.584 A).\n(f) Total Active Power in Delta P_Delta = 3 × 4,133.4 = 12,400.2 W = 12.40 kW.',
        hi: '(a) स्टार में V_ph = 239.60 V।\n(b) स्टार में I_L = 9.584 A।\n(c) पावर फैक्टर cos φ = 0.60 लैगिंग।\n(d) स्टार में कुल शक्ति P_Star = 4.13 kW।\n(e) डेल्टा में लाइन धारा I_L(Delta) = 28.75 A।\n(f) डेल्टा में कुल शक्ति P_Delta = 12.40 kW।',
        bn: '(a) স্টারে V_ph = ২৩৯.৬০ V।\n(b) স্টারে I_L = ৯.৫৮৪ A।\n(c) cos φ = ০.৬০ ল্যাগিং।\n(d) স্টারে মোট সক্রিয় ক্ষমতা P_Star = ৪.১৩ kW।\n(e) ডেল্টায় লাইন কারেন্ট I_L(Delta) = ২৮.৭৫ A।\n(f) ডেল্টায় মোট ক্ষমতা P_Delta = ১২.৪০ kW।'
      }
    }
  ]
};
