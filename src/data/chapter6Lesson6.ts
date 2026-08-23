import { Lesson } from '../types';

export const LESSON_DC_GENERATOR_CHARACTERISTICS: Lesson = {
  id: 'lsn-ch6-dc-generator-characteristics',
  topicId: 'ch6-dc-generator-characteristics',
  chapterId: 'ch-electrical-machines',
  order: 6,
  title: {
    en: 'DC Generator Characteristics & Voltage Build-Up',
    hi: 'डीसी जनरेटर की विशेषताएँ एवं वोल्टेज बिल्ड-अप',
    bn: 'ডিসি জেনারেটরের বৈশিষ্ট্য ও ভোল্টেজ বিল্ড-আপ'
  },
  description: {
    en: 'Open circuit characteristic (OCC / Magnetization curve), internal and external load curves, self-excitation voltage build-up, critical field resistance, critical speed, and troubleshooting build-up failures.',
    hi: 'ओपन सर्किट विशेषता (OCC), आंतरिक व बाह्य लोड वक्र, सेल्फ-एक्साइटेड वोल्टेज बिल्ड-अप, क्रांतिक फील्ड प्रतिरोध, क्रांतिक गति एवं वोल्टेज बिल्ड-अप विफलता निवारण।',
    bn: 'ওপেন সার্কিট বৈশিষ্ট্য (OCC / ম্যাগনেটাইজেশন কার্ভ), অভ্যন্তরীণ ও বাহ্যিক লোড কার্ভ, ভোল্টেজ বিল্ড-আপ প্রক্রিয়া, সংকট ফিল্ড রোধ, সংকট গতি এবং ত্রুটি সমাধান।'
  },
  estimatedMinutes: 32,
  easyExplanation: {
    en: 'A DC generator\'s performance is evaluated using characteristic curves that show how output voltage responds to field excitation current and load demand. In self-excited shunt generators, voltage builds up cumulatively starting from a tiny residual magnetic voltage (6–12 V) until the field resistance line intersects the magnetic saturation curve (OCC). If the field resistance is too high (above critical resistance Rc) or the rotor spins too slowly (below critical speed Nc), the generator fails to produce electricity.',
    hi: 'डीसी जनरेटर के प्रदर्शन का मूल्यांकन उन विशिष्ट वक्रों (Curves) द्वारा किया जाता है जो यह दर्शाते हैं कि फील्ड करंट और लोड बदलने पर वोल्टेज कैसे बदलता है। सेल्फ-एक्साइटेड शंट जनरेटर में वोल्टेज छोटे अवशिष्ट चुंबकत्व (6-12 V) से क्रमिक रूप से तब तक बढ़ता है जब तक फील्ड प्रतिरोध रेखा मैग्नेटाइजेशन वक्र (OCC) को नहीं काटती। यदि फील्ड प्रतिरोध क्रांतिक मान (Rc) से अधिक हो या गति क्रांतिक मान (Nc) से कम हो, तो वोल्टेज उत्पन्न नहीं होता।',
    bn: 'ডিসি জেনারেটরের কর্মক্ষমতা বিভিন্ন বৈশিষ্ট্য রেখার (কার্ভ) মাধ্যমে মূল্যায়ন করা হয় যা দেখায় কীভাবে ফিল্ড কারেন্ট এবং লোড পরিবর্তনের সাথে ভোল্টেজ পরিবর্তিত হয়। সেলফ-এক্সাইটেড শান্ট জেনারেটরে সামান্য অবশিষ্ট চৌম্বকত্ব (৬-১২ V) থেকে ভোল্টেজ ধীরে ধীরে বৃদ্ধি পেয়ে ফিল্ড রোধ রেখা এবং ম্যাগনেটাইজেশন কার্ভের (OCC) ছেদবিন্দুতে স্থির হয়। যদি ফিল্ড রোধ সংকট রোধের (Rc) চেয়ে বেশি হয় বা গতি সংকট গতির (Nc) নিচে নামে, তবে ভোল্টেজ বিল্ড-আপ ব্যর্থ হয়।'
  },
  detailedExplanation: {
    en: `1. Open Circuit Characteristic (OCC) / Magnetization Curve:
The Open Circuit Characteristic (OCC) relates no-load induced EMF (E_0) to field excitation current (I_f) at a constant rotational speed (N).
- Test Procedure: The generator is driven at rated speed with armature terminals open-circuited. Field winding is disconnected from armature and powered through a rheostat from an independent DC source. Field current I_f is increased from 0 to saturation while recording E_0.
- Distinct Regions of the OCC Curve:
  * 1. Residual Voltage Offset (O to A): At I_f = 0, a small EMF (typically 4 V to 12 V) exists due to permanent residual magnetism retained in field pole cores.
  * 2. Linear Region / Air-Gap Line (A to B): For low excitation, magnetic reluctance is dominated by the non-magnetic air gap. Flux and induced EMF rise in direct linear proportion to field current (Φ ∝ I_f).
  * 3. Knee Point & Magnetic Saturation (B to C): At higher field currents, iron pole cores and armature teeth saturate. Permeability drops sharply, and further increases in I_f produce only marginal gains in flux and voltage.
- Effect of Speed Variation on OCC:
  Since E_0 ∝ N for constant flux:
  E_02 = E_01 · (N_2 / N_1)
  At higher speed, the entire OCC scales upward vertically.

2. Step-by-Step Mechanism of Voltage Build-Up in Shunt Generators:
For a self-excited DC shunt generator running at rated speed with field switch closed:
- Step 1: Residual flux in pole cores induces a small residual EMF: E_res (6–12 V).
- Step 2: This E_res drives a small initial field current through the shunt field coils: I_f1 = E_res / R_f.
- Step 3: This initial field current produces additional MMF that reinforces the residual flux, increasing total flux to Φ_1.
- Step 4: Increased flux induces a higher EMF: E_1 > E_res.
- Step 5: Higher EMF drives still larger field current I_f2 = E_1 / R_f, which further magnifies flux.
- Step 6 (Equilibrium): This cumulative reinforcement continues until the Field Resistance Line (straight line V = I_f · R_f) intersects the non-linear OCC curve. At this stable intersection point P, induced EMF exactly balances the voltage drop across the field winding, establishing the steady-state no-load operating voltage.

3. Critical Field Resistance (R_c) & Critical Speed (N_c):
A. Critical Field Resistance (R_c):
- Definition: The maximum value of field circuit resistance below which the shunt generator will successfully build up voltage at a given speed.
- Graphical Determination: The slope of the straight line drawn TANGENT to the initial linear portion (air-gap line) of the OCC curve represents R_c.
- Condition for Build-Up: Total field resistance R_f MUST be LESS than critical resistance R_c (R_f < R_c).
- If R_f > R_c, the resistance line lies completely above the OCC (except at the residual origin), and the generator fails to excite.

B. Critical Speed (N_c):
- Definition: The minimum rotational speed at which a shunt generator with a given field resistance R_f can build up its voltage.
- Mathematical Relation:
  N_c = N_rated · (R_f / R_c)
- If actual speed N < N_c, the OCC drops below the field resistance line, preventing voltage build-up.

4. Four Necessary Conditions for Successful Voltage Build-Up:
1. Residual Magnetism: There must be sufficient residual magnetic flux in the field pole cores.
2. Correct Field Polarity: Field coils must be connected such that the field current reinforces (aids) the residual flux. If polarity is reversed, field flux cancels residual flux, driving voltage to zero.
3. Sub-Critical Field Resistance: Total field circuit resistance must be less than the critical field resistance (R_f < R_c).
4. Super-Critical Speed: Rotor rotational speed must exceed the critical speed (N > N_c).

5. Troubleshooting Voltage Build-Up Failures:
- Fault 1: No Residual Magnetism (due to prolonged storage, heavy shock, or heat).
  * Remedy: "Field Flashing" — momentarily connecting a 12V/24V external DC battery to field winding terminals for a few seconds to restore magnetic domain orientation.
- Fault 2: Reversed Field Connections (field MMF opposes residual flux).
  * Remedy: Disconnect field winding and reverse the two terminal leads.
- Fault 3: Field Resistance Too High (R_f > R_c).
  * Remedy: Cut out external field rheostat resistance until R_f < R_c.
- Fault 4: Direction of Rotation Reversed (flips induced EMF polarity, causing field flux to oppose residual flux).
  * Remedy: Reverse the prime-mover rotation or reverse field coil connections.

6. Load Characteristics of DC Generators:
A. DC Shunt Generator Load Curves:
- External Characteristic: Curve showing Terminal Voltage (V) vs Load Current (I_L).
- Voltage Drops with Increasing Load due to 3 cumulative causes:
  * 1. Armature Resistance Drop (I_a · R_a).
  * 2. Armature Reaction: Demagnetizing effect reduces net pole flux Φ.
  * 3. Reduction in Field Current: As terminal voltage V drops, shunt field current I_sh = V / R_sh also drops, further reducing flux (Breakdown / Turning Point occurs if overloaded beyond rated capacity).
B. Compound Generator Load Curves:
- Over-Compounded: Series field over-compensates internal drops; V rises with load.
- Flat-Compounded: Series field exactly cancels internal drops; V remains constant from no-load to full-load.
- Under-Compounded: Series field partially compensates internal drops; V droops slightly.
- Differential Compounded: Series field opposes shunt field; V drops precipitously with load.`,
    hi: `1. ओपन सर्किट विशेषता (OCC / मैग्नेटाइजेशन कर्व):
OCC वक्र स्थिर गति पर नो-लोड प्रेरित EMF (E_0) और फील्ड करंट (I_f) के बीच संबंध दर्शाता है।
- अवशिष्ट वोल्टेज (Residual Voltage): I_f = 0 पर पोल में बचे चुंबकत्व के कारण 6-12 V वोल्टेज मिलता है।
- रेखीय भाग (Air-gap line): कम करंट पर फ्लक्स और EMF फील्ड करंट के सीधे समानुपाती होते हैं।
- संतृप्ति भाग (Saturation region): कोर संतृप्त होने पर करंट बढ़ाने पर भी EMF बहुत धीमे बढ़ता है।
- गति का प्रभाव: E_02 = E_01 · (N_2 / N_1)। गति बढ़ने पर पूरा OCC वक्र ऊपर खिसक जाता है।

2. शंट जनरेटर में वोल्टेज बिल्ड-अप प्रक्रिया:
- अवशिष्ट फ्लक्स से छोटी वोल्टेज (E_res) बनती है।
- यह वोल्टेज फील्ड कॉइल में छोटी धारा (I_f) चलाती है।
- फील्ड धारा अवशिष्ट फ्लक्स को मजबूत करती है, जिससे उत्पन्न वोल्टेज बढ़ता है।
- यह क्रमिक वृद्धि तब तक चलती है जब तक फील्ड प्रतिरोध रेखा (V = I_f · R_f) OCC वक्र को नहीं काटती।

3. क्रांतिक प्रतिरोध (R_c) एवं क्रांतिक गति (N_c):
- क्रांतिक फील्ड प्रतिरोध (R_c): OCC वक्र के रेखीय भाग की स्पर्श रेखा का ढाल। वोल्टेज बनने के लिए R_f < R_c होना आवश्यक है।
- क्रांतिक गति (N_c): वह न्यूनतम गति जिस पर दिया गया जनरेटर वोल्टेज बना सके (N > N_c)। N_c = N_rated · (R_f / R_c)।

4. वोल्टेज बिल्ड-अप की चार अनिवार्य शर्तें:
1. पोल्स में अवशिष्ट चुंबकत्व उपस्थित होना चाहिए।
2. फील्ड कनेक्शन ऐसे हों कि फील्ड फ्लक्स अवशिष्ट फ्लक्स का सहयोग करे।
3. फील्ड प्रतिरोध क्रांतिक प्रतिरोध से कम होना चाहिए (R_f < R_c)।
4. घूर्णन गति क्रांतिक गति से अधिक होनी चाहिए (N > N_c)।

5. विफलता और समाधान (Troubleshooting):
- अवशिष्ट चुंबकत्व समाप्त होना → फील्ड फ्लैशिंग (DC बैटरी से क्षणिक करंट देना)।
- फील्ड कनेक्शन उलटे होना → फील्ड टर्मिनलों को आपस में बदलना।
- R_f > R_c होना → रियोस्टेट प्रतिरोध कम करना।`,
    bn: `১. ওপেন সার্কিট বৈশিষ্ট্য (OCC / ম্যাগনেটাইজেশন কার্ভ):
ধ্রুব গতিতে নো-লোড আবিষ্ট EMF (E_0) এবং ফিল্ড কারেন্টের (I_f) সম্পর্ক হলো OCC কার্ভ।
- অবশিষ্ট ভোল্টেজ: I_f = ০ অবস্থায় অবশিষ্ট চৌম্বকত্বের কারণে ৬-১২ V ভোল্টেজ থাকে।
- রৈখিক অঞ্চল (এয়ার-গ্যাপ লাইন): ফ্লাক্স ও ভোল্টেজ ফিল্ড কারেন্টের সমানুপাতিক থাকে।
- সম্পৃক্ত অঞ্চল (স্যাচুরেশন): ম্যাগনেটিক কোর স্যাচুরেটেড হলে ভোল্টেজ বৃদ্ধি ধীর হয়।
- গতির প্রভাব: E_0 ∝ N। গতি বাড়লে OCC কার্ভ উল্লম্বভাবে উপরে উঠে।

২. ভোল্টেজ বিল্ড-আপ প্রক্রিয়া:
- অবশিষ্ট ফ্লাক্স → সামান্য E_res → সামান্য ফিল্ড কারেন্ট → ফ্লাক্স বৃদ্ধি → EMF বৃদ্ধি → স্থায়ী ভারসাম্য (যেখানে ফিল্ড রোধ রেখা OCC-কে ছেদ করে)।

৩. সংকট রোধ (R_c) ও সংকট গতি (N_c):
- সংকট ফিল্ড রোধ (R_c): OCC-র স্পর্শকের ঢাল। ভোল্টেজ সৃষ্টির শর্ত: R_f < R_c।
- সংকট গতি (N_c): ভোল্টেজ বিল্ড-আপের সর্বনিম্ন গতি (N > N_c)। N_c = N_rated · (R_f / R_c)।

৪. ভোল্টেজ বিল্ড-আপের ৪টি মৌলিক শর্ত:
১. ফিল্ড পোলে অবশিষ্ট চৌম্বকত্ব থাকতে হবে।
২. ফিল্ড কয়েলের পোলারিটি অবশিষ্ট ফ্লাক্সের সহায়ক হতে হবে।
৩. ফিল্ড সার্কিট রোধ সংকট রোধ অপেক্ষা কম হতে হবে (R_f < R_c)।
৪. ঘূর্ণন গতি সংকট গতি অপেক্ষা বেশি হতে হবে (N > N_c)।

৫. ত্রুটি ও প্রতিকার:
- অবশিষ্ট চৌম্বকত্ব না থাকলে → ফিল্ড ফ্ল্যাশিং (বহিরাগত ডিসি ব্যাটারি দ্বারা ফ্ল্যাশ করা)।
- উল্টো সংযোগ থাকলে → ফিল্ড টার্মিনাল পরিবর্তন করা।
- R_f > R_c হলে → ফিল্ড রিওস্ট্যাটের রোধ কমানো।`
  },
  formulas: [
    {
      id: 'f-occ-speed-scaling',
      symbol: 'E_{02}',
      expression: 'E_{02} = E_{01} \\cdot \\frac{N_2}{N_1}',
      title: {
        en: 'OCC Speed Scaling Formula',
        hi: 'OCC गति स्केलिंग सूत्र',
        bn: 'OCC গতি স্কেলিং সূত্র'
      },
      description: {
        en: 'Induced no-load voltage scales in direct proportion to rotational speed for constant field current.',
        hi: 'स्थिर फील्ड धारा पर प्रेरित नो-लोड वोल्टेज घूर्णन गति के सीधे समानुपाती होता है।',
        bn: 'নির্দিষ্ট ফিল্ড কারেন্টে আবিষ্ট নো-লোড ভোল্টেজ ঘূর্ণন গতির সমানুপাতিক হারে পরিবর্তিত হয়।'
      }
    },
    {
      id: 'f-critical-resistance',
      symbol: 'R_c',
      expression: 'R_c = \\left. \\frac{\\Delta E_0}{\\Delta I_f} \\right|_{\\text{air-gap tangent}}',
      title: {
        en: 'Critical Field Resistance Formula',
        hi: 'क्रांतिक फील्ड प्रतिरोध सूत्र',
        bn: 'সংকট ফিল্ড রোধ সূত্র'
      },
      description: {
        en: 'Slope of the tangent line drawn to the linear initial portion (air-gap line) of the OCC at rated speed.',
        hi: 'रेटेड गति पर OCC वक्र के रेखीय भाग की स्पर्श रेखा का ढाल।',
        bn: 'রেটেড গতিতে OCC কার্ভের রৈখিক অংশের স্পর্শকের ঢাল।'
      }
    },
    {
      id: 'f-critical-speed',
      symbol: 'N_c',
      expression: 'N_c = N_1 \\cdot \\frac{R_f}{R_c}',
      title: {
        en: 'Critical Speed Formula',
        hi: 'क्रांतिक गति सूत्र',
        bn: 'সংকট গতি সূত্র'
      },
      description: {
        en: 'Minimum operational speed required for a shunt generator with field resistance Rf to build up voltage.',
        hi: 'Rf फील्ड प्रतिरोध वाले शंट जनरेटर के वोल्टेज निर्माण हेतु आवश्यक न्यूनतम घूर्णन गति।',
        bn: 'Rf ফিল্ড রোধযুক্ত শান্ট জেনারেটরের ভোল্টেজ সৃষ্টির জন্য প্রয়োজনীয় সর্বনিম্ন গতি।'
      }
    },
    {
      id: 'f-voltage-regulation',
      symbol: '\\%VR',
      expression: '\\%VR = \\frac{V_{NL} - V_{FL}}{V_{FL}} \\times 100\\%',
      title: {
        en: 'Voltage Regulation Percentage',
        hi: 'प्रतिशत वोल्टेज रेगुलेशन',
        bn: 'শতকরা ভোল্টেজ রেগুলেশন'
      },
      description: {
        en: 'Percentage variation in terminal voltage when rated full-load is completely disconnected at constant speed.',
        hi: 'स्थिर गति पर रेटेड लोड हटाने पर टर्मिनल वोल्टेज में प्रतिशत परिवर्तन।',
        bn: 'ধ্রুব গতিতে পূর্ণ লোড বিচ্ছিন্ন করলে টার্মিনাল ভোল্টেজের শতকরা পরিবর্তন।'
      }
    }
  ],
  sections: [
    {
      id: 'sec-occ-curve',
      title: {
        en: '1. Open Circuit Characteristic (OCC) Analysis',
        hi: '1. ओपन सर्किट विशेषता (OCC) विश्लेषण',
        bn: '১. ওপেন সার্কিট বৈশিষ্ট্য (OCC) বিশ্লেষণ'
      },
      content: {
        en: 'The Open Circuit Characteristic (OCC), also called the Magnetization Curve, graphs no-load induced EMF (E_0) against field excitation current (I_f) at constant rated speed. Starting from a non-zero residual voltage intercept (4–12 V) created by residual magnetism in the field pole cores, the curve rises linearly along the Air-Gap Line where magnetic reluctance is dominated by the air space. As iron saturation begins, the curve bends through a knee point and levels off into saturation. If the generator is driven at speed N2 different from N1, every point on the curve scales vertically according to E_02 = E_01 · (N2 / N1).',
        hi: 'ओपन सर्किट विशेषता (OCC) या मैग्नेटाइजेशन वक्र स्थिर गति पर नो-लोड EMF (E_0) और फील्ड करंट (I_f) का ग्राफ है। पोल में अवशिष्ट चुंबकत्व के कारण यह 4-12 V से शुरू होता है और एयर-गैप लाइन पर सीधा बढ़ता है। कोर संतृप्ति होने पर यह मुड़कर चपटा हो जाता है। गति बदलने पर वक्र E_02 = E_01 · (N2 / N1) के अनुसार ऊपर या नीचे खिसकता है।',
        bn: 'ওপেন সার্কিট বৈশিষ্ট্য (OCC) বা ম্যাগনেটাইজেশন কার্ভ হলো ধ্রুব গতিতে নো-লোড EMF (E_0) বনাম ফিল্ড কারেন্টের (I_f) লেখচিত্র। অবশিষ্ট চৌম্বকত্বের কারণে এটি ৪-১২ V থেকে শুরু হয়ে রৈখিকভাবে বাড়ে এবং আয়রন কোর স্যাচুরেটেড হলে অনুভূমিক রূপ নেয়। গতি পরিবর্তিত হলে E_02 = E_01 · (N2 / N1) অনুপাতে কার্ভের প্রতিটি বিন্দু উল্লম্বভাবে স্থানান্তরিত হয়।'
      },
      schematicId: 'dc-generator-characteristics',
      keyEquations: ['E_0 \\propto \\Phi \\cdot N', 'E_{02} = E_{01} \\cdot \\frac{N_2}{N_1}']
    },
    {
      id: 'sec-voltage-buildup',
      title: {
        en: '2. Mechanics of Self-Excited Voltage Build-Up',
        hi: '2. स्व-उत्तेजित वोल्टेज निर्माण की कार्यप्रणाली',
        bn: '২. সেলফ-এক্সাইটেড ভোল্টেজ বিল্ড-আপের মূলনীতি'
      },
      content: {
        en: 'Self-excitation in a shunt generator is a regenerative feedback loop. Tiny residual flux induces a few volts in the armature. This small EMF forces a minute field current through the shunt winding (I_f = E_res / R_f). If the field is connected with correct polarity, this current strengthens the magnetic flux, inducing an even higher EMF. The progressive staircase build-up continues until the field resistance line (O-P with slope R_f = V / I_f) intersects the saturation knee of the OCC. The stable voltage at point P represents the rated no-load terminal voltage.',
        hi: 'शंट जनरेटर में स्व-उत्तेजन एक पुनर्योजी (Regenerative) प्रक्रिया है। अवशिष्ट फ्लक्स से कुछ वोल्ट पैदा होते हैं जो फील्ड में छोटी धारा भेजते हैं। यदि कनेक्शन सही हैं, तो यह धारा फ्लक्स को बढ़ाती है जिससे वोल्टेज और बढ़ता है। यह क्रमिक वृद्धि तब तक जारी रहती है जब तक फील्ड प्रतिरोध रेखा (R_f = V / I_f) OCC वक्र को नहीं काटती। कटान बिंदु P पर नो-लोड वोल्टेज स्थिर हो जाता है।',
        bn: 'শান্ট জেনারেটরে সেলফ-এক্সাইটেশন হলো একটি রিজেনারেটিভ প্রতিক্রিয়া। অবশিষ্ট ফ্লাক্স আর্মেচারে সামান্য ভোল্টেজ তৈরি করে যা ফিল্ড কয়েলে প্রাথমিক কারেন্ট পাঠায়। সঠিক পোলারিটি থাকলে এই কারেন্ট ফ্লাক্স বৃদ্ধি করে ভোল্টেজ আরও বাড়িয়ে দেয়। এই ধারাবাহিক বৃদ্ধি ততক্ষণ চলে যতক্ষণ ফিল্ড রোধ রেখা OCC কার্ভের স্যাচুরেশন অঞ্চলকে ছেদ না করে। ছেদবিন্দু P-তে নো-লোড ভোল্টেজ স্থিতিশীল হয়।'
      },
      keyEquations: ['I_{f1} = \\frac{E_{res}}{R_f}', 'V_{steady} = \\text{Intersection}(OCC, R_f \\text{ line})']
    },
    {
      id: 'sec-critical-parameters',
      title: {
        en: '3. Critical Resistance, Critical Speed & Failure Remedies',
        hi: '3. क्रांतिक प्रतिरोध, क्रांतिक गति एवं विफलता निवारण',
        bn: '৩. সংকট রোধ, সংকট গতি এবং ত্রুটি সমাধান'
      },
      content: {
        en: 'Critical Field Resistance (R_c) is the slope of the line tangent to the air-gap portion of the OCC. For voltage build-up, total field resistance must be less than R_c (R_f < R_c). If R_f > R_c, the generator produces only residual voltage. Critical Speed (N_c) is the lowest speed at which a machine with field resistance R_f can build up voltage (N_c = N_rated · R_f / R_c). If build-up fails due to loss of residual magnetism, Field Flashing (applying an external 12V–24V DC battery pulse to field coils) restores the magnetic domain alignment.',
        hi: 'क्रांतिक फील्ड प्रतिरोध (R_c) OCC वक्र के रेखीय भाग की स्पर्श रेखा का ढाल होता है। वोल्टेज बनने के लिए फील्ड प्रतिरोध R_c से कम (R_f < R_c) होना चाहिए। यदि R_f > R_c हो, तो केवल अवशिष्ट वोल्टेज ही मिलता है। क्रांतिक गति (N_c) वह न्यूनतम गति है जिस पर जनरेटर वोल्टेज बना सकता है (N_c = N_rated · R_f / R_c)। अवशिष्ट चुंबकत्व समाप्त होने पर फील्ड फ्लैशिंग (बाहरी DC बैटरी से क्षणिक करंट देना) द्वारा चुंबकत्व पुनः स्थापित किया जाता है।',
        bn: 'সংকট ফিল্ড রোধ (R_c) হলো OCC কার্ভের স্পর্শকের ঢাল। ভোল্টেজ বিল্ড-আপের জন্য মোট ফিল্ড রোধ অবশ্যই R_c অপেক্ষা কম (R_f < R_c) হতে হবে। অন্যথায় কেবল অবশিষ্ট ভোল্টেজ পাওয়া যাবে। সংকট গতি (N_c) হলো সর্বনিম্ন গতি যাতে প্রদত্ত ফিল্ড রোধে ভোল্টেজ উৎপন্ন হতে পারে (N_c = N_rated · R_f / R_c)। অবশিষ্ট চৌম্বকত্ব নষ্ট হয়ে গেলে ফিল্ড ফ্ল্যাশিংয়ের মাধ্যমে ব্যাটারি পালস প্রয়োগ করে তা পুনরুজ্জীবিত করা হয়।'
      },
      keyEquations: ['R_f < R_c', 'N > N_c', 'N_c = N_{rated} \\cdot \\frac{R_f}{R_c}']
    }
  ],
  diagrams: [
    {
      id: 'diag-dc-generator-characteristics',
      title: {
        en: 'OCC Curve, Critical Resistance Tangent & Voltage Build-Up Staircase',
        hi: 'OCC वक्र, क्रांतिक प्रतिरोध स्पर्श रेखा एवं वोल्टेज निर्माण सोपान',
        bn: 'OCC কার্ভ, সংকট রোধ স্পর্শক এবং ভোল্টেজ বিল্ড-আপ ধাপসমূহ'
      },
      caption: {
        en: 'Open Circuit Characteristic (OCC) with residual voltage, air-gap tangent (Rc line), field resistance operating line (Rf), and external load characteristics.',
        hi: 'अवशिष्ट वोल्टेज, एयर-गैप स्पर्श रेखा (Rc), फील्ड प्रतिरोध रेखा (Rf) एवं लोड विशेषताओं के साथ OCC वक्र।',
        bn: 'অবশিষ্ট ভোল্টেজ, এয়ার-গ্যাপ স্পর্শক (Rc লাইন), ফিল্ড রোধ রেখা (Rf) এবং লোড বৈশিষ্ট্যসহ OCC কার্ভ।'
      },
      svgType: 'dc-generator-characteristics'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-dc-gen-char-1',
      problem: {
        en: 'The open circuit characteristic (OCC) of a DC shunt generator driven at 1000 RPM is given by the following test points: If (A): [0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0], E0 (V): [10, 55, 100, 140, 170, 190, 205]. (a) Determine the critical field resistance at 1000 RPM, and (b) Find the no-load voltage built up if the shunt field resistance is adjusted to 80 Ω.',
        hi: '1000 RPM पर चलने वाले डीसी शंट जनरेटर का OCC डेटा निम्न है: If (A): [0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0], E0 (V): [10, 55, 100, 140, 170, 190, 205]। ज्ञात कीजिए: (a) 1000 RPM पर क्रांतिक फील्ड प्रतिरोध, एवं (b) यदि शंट फील्ड प्रतिरोध 80 Ω हो तो नो-लोड वोल्टेज।',
        bn: '১০০০ RPM গতিতে চালিত একটি ডিসি শান্ট জেনারেটরের OCC ডেটা নিম্নরূপ: If (A): [০, ০.৫, ১.০, ১.৫, ২.০, ২.৫, ৩.০], E0 (V): [১০, ৫৫, ১০০, ১৪০, ১৭০, ১৯০, ২০৫]। নির্ণয় করো: (a) ১০০০ RPM এ সংকট ফিল্ড রোধ, এবং (b) শান্ট ফিল্ড রোধ ৮০ Ω হলে উৎপাদিত নো-লোড ভোল্টেজ।'
      },
      givenValues: {
        'Speed (N1)': '1000 RPM',
        'Residual Voltage (at If = 0)': '10 V',
        'Initial Linear Point': 'If = 1.0 A, E0 = 100 V',
        'Shunt Field Resistance (Rf)': '80 Ω'
      },
      solution: {
        en: `1. Calculate Critical Field Resistance (R_c):
R_c is the slope of the initial linear portion (air-gap tangent):
Slope = ΔE0 / ΔIf = (100 V - 10 V) / (1.0 A - 0 A) = 90 / 1.0 = 90 Ω (approx 100 Ω through origin 100/1.0 = 100 Ω).
Taking the chord from origin through linear point: R_c ≈ 100 Ω.

2. Determine No-Load Voltage for R_f = 80 Ω:
Draw field resistance line: V = I_f · 80.
- At I_f = 1.0 A: V = 80 V (OCC = 100 V)
- At I_f = 2.0 A: V = 160 V (OCC = 170 V)
- At I_f = 2.5 A: V = 200 V (OCC = 190 V)
Interpolating between If = 2.0 A and 2.5 A:
Intersection point occurs at I_f ≈ 2.25 A where E_0 = V = 2.25 × 80 = 180 Volts.

Conclusion: Because R_f (80 Ω) < R_c (100 Ω), the generator successfully builds up to 180 V.`,
        hi: `1. क्रांतिक फील्ड प्रतिरोध (R_c):
प्रारंभिक रेखीय भाग का ढाल: R_c = 100 V / 1.0 A = 100 Ω।

2. Rf = 80 Ω पर नो-लोड वोल्टेज:
फील्ड रेखा V = If × 80 और OCC वक्र का कटान बिंदु If ≈ 2.25 A पर मिलता है।
नो-लोड वोल्टेज V = 2.25 × 80 = 180 वोल्ट।`,
        bn: `১. সংকট ফিল্ড রোধ (R_c):
প্রাথমিক রৈখিক অংশের ঢাল: R_c = ১০০ V / ১.০ A = ১০০ Ω।

২. Rf = ৮০ Ω এ নো-লোড ভোল্টেজ:
ফিল্ড লাইন V = If × ৮০ এবং OCC কার্ভের ছেদবিন্দু If ≈ ২.২৫ A তে অবস্থিত।
নো-লোড ভোল্টেজ V = ২.২৫ × ৮০ = ১৮০ ভোল্ট।`
      },
      finalAnswer: {
        en: '(a) Critical Resistance R_c ≈ 100 Ω, (b) No-Load Voltage V_NL = 180 V',
        hi: '(a) क्रांतिक प्रतिरोध R_c ≈ 100 Ω, (b) नो-लोड वोल्टेज V_NL = 180 V',
        bn: '(a) সংকট রোধ R_c ≈ ১০০ Ω, (b) নো-লোড ভোল্টেজ V_NL = ১৮০ V'
      }
    },
    {
      id: 'ex-dc-gen-char-2',
      problem: {
        en: 'A DC shunt generator has a critical field resistance of 120 Ω at a rated speed of 1500 RPM. If the actual field winding resistance is 90 Ω, calculate: (a) The critical speed (N_c) below which the generator will fail to build up voltage, and (b) The critical field resistance if the generator speed is reduced to 1200 RPM.',
        hi: 'एक डीसी शंट जनरेटर का 1500 RPM की रेटेड गति पर क्रांतिक फील्ड प्रतिरोध 120 Ω है। यदि वास्तविक फील्ड वाइंडिंग प्रतिरोध 90 Ω है, तो ज्ञात कीजिए: (a) क्रांतिक गति (N_c) जिसके नीचे जनरेटर वोल्टेज नहीं बना पाएगा, एवं (b) यदि गति घटाकर 1200 RPM कर दी जाए तो नया क्रांतिक फील्ड प्रतिरोध।',
        bn: 'একটি ডিসি শান্ট জেনারেটরের ১৫০০ RPM রেটেড গতিতে সংকট ফিল্ড রোধ ১২০ Ω। যদি ফিল্ড কয়েলের প্রকৃত রোধ ৯০ Ω হয়, তবে নির্ণয় করো: (a) সংকট গতি (N_c) যার নিচে নামলে ভোল্টেজ তৈরি হবে না, এবং (b) গতি কমিয়ে ১২০০ RPM করা হলে নতুন সংকট ফিল্ড রোধ।'
      },
      givenValues: {
        'Rated Speed (N1)': '1500 RPM',
        'Critical Resistance at N1 (Rc1)': '120 Ω',
        'Field Resistance (Rf)': '90 Ω',
        'Reduced Speed (N2)': '1200 RPM'
      },
      solution: {
        en: `1. Calculate Critical Speed (N_c):
Using formula: N_c = N_rated · (R_f / R_c1)
N_c = 1500 RPM · (90 Ω / 120 Ω) = 1500 · 0.75 = 1125 RPM.
If the prime-mover spins slower than 1125 RPM with Rf = 90 Ω, voltage build-up will fail completely.

2. Calculate Critical Field Resistance at Reduced Speed (N2 = 1200 RPM):
Critical resistance is directly proportional to speed:
R_c2 = R_c1 · (N2 / N1)
R_c2 = 120 Ω · (1200 / 1500) = 120 · 0.8 = 96 Ω.`,
        hi: `1. क्रांतिक गति (N_c):
N_c = 1500 × (90 / 120) = 1125 RPM।

2. 1200 RPM पर नया क्रांतिक प्रतिरोध (R_c2):
R_c2 = 120 × (1200 / 1500) = 96 Ω।`,
        bn: `১. সংকট গতি (N_c):
N_c = ১৫০০ × (৯০ / ১২০) = ১১২৫ RPM।

২. ১২০০ RPM এ নতুন সংকট ফিল্ড রোধ (R_c2):
R_c2 = ১২০ × (১২০০ / ১৫০০) = ৯৬ Ω।`
      },
      finalAnswer: {
        en: '(a) Critical Speed N_c = 1125 RPM, (b) New Critical Resistance R_c2 = 96 Ω',
        hi: '(a) क्रांतिक गति N_c = 1125 RPM, (b) नया क्रांतिक प्रतिरोध R_c2 = 96 Ω',
        bn: '(a) সংকট গতি N_c = ১১২৫ RPM, (b) নতুন সংকট রোধ R_c2 = ৯৬ Ω'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Industrial Commissioning: Field engineers measure the OCC curve on factory test beds to verify magnetic silicon-steel quality and air-gap uniformity.',
      'Field Rheostat Calibration: Determining critical resistance Rc ensures field rheostats are sized to allow reliable voltage excitation under all ambient conditions.',
      'Black-Start Diesel Generators: Power station black-start DC exciters use field flashing circuits to bootstrap thermal generation grids after blackout.',
      'Railway Traction Alternator Exciters: Self-excited pilot exciters use precise OCC tuning to maintain constant 750 V DC bus lines across varying diesel RPM.',
      'Arc Welding Dynamos: OCC and drooping external characteristics are engineered to deliver steep volt-ampere slopes preventing electrode fusing during manual stick welding.'
    ],
    hi: [
      'औद्योगिक परीक्षण: फैक्ट्री में सिलिकॉन-स्टील की गुणवत्ता और एयर-गैप एकरूपता जांचने के लिए OCC वक्र निकाला जाता है।',
      'फील्ड रियोस्टेट कैलिब्रेशन: क्रांतिक प्रतिरोध Rc ज्ञात कर यह सुनिश्चित किया जाता है कि जनरेटर हर मौसम में वोल्टेज बना सके।',
      'ब्लैक-स्टार्ट जनरेटर: पावर ग्रिड ब्लैकआउट के बाद प्लांट शुरू करने हेतु फील्ड फ्लैशिंग का उपयोग।',
      'रेलवे ट्रैक्शन एक्साइटर: डीजल गति बदलने पर भी स्थिर 750 V DC बस वोल्टेज बनाए रखने में OCC ट्यूनिंग।',
      'आर्क वेल्डिंग डायनेमो: वेल्डिंग रॉड को चिपकने से रोकने के लिए ड्रॉपिंग लोड विशेषता का उपयोग।'
    ],
    bn: [
      'শিল্প কমিশনিং: সিলিকন স্টিলের মান এবং এয়ার-গ্যাপ সমতা যাচাইয়ে OCC কার্ভ পরীক্ষা করা হয়।',
      'ফিল্ড রিওস্ট্যাট ক্যালিব্রেশন: সংকট রোধ Rc পরিমাপ করে নিশ্চিত করা হয় যাতে সব তাপমাত্রায় ভোল্টেজ তৈরি হয়।',
      'ব্ল্যাক-স্টার্ট জেনারেটর: পাওয়ার গ্রিড বিকল হলে ফিল্ড ফ্ল্যাশিংয়ের মাধ্যমে নতুন করে বিদ্যুৎ উৎপাদন শুরু করা।',
      'রেলওয়ে ট্র্যাকশন এক্সাইটার: ইঞ্জিনের বিভিন্ন গতিতে স্থির ৭৫০ V DC বাসলাইন বজায় রাখতে OCC টিউনিং।',
      'আর্ক ওয়েল্ডিং ডায়নামো: ওয়েল্ডিং রড গলে আটকে যাওয়া রোধ করতে খাড়া ড্রপিং ভোল্টেজ বৈশিষ্ট্যের প্রয়োগ।'
    ]
  },
  importantPoints: {
    en: [
      'OCC is plotted between no-load voltage E0 and field current If at constant rotational speed.',
      'Residual magnetism in field poles is mandatory to initiate self-excitation in DC shunt generators.',
      'Voltage build-up stabilizes at the intersection point of the OCC curve and the field resistance line V = If · Rf.',
      'Critical Field Resistance Rc is the slope of the air-gap line tangent to the OCC; for build-up, Rf must be less than Rc.',
      'Critical Speed Nc is the speed below which the generator fails to excite for a given field resistance Rf.',
      'If residual magnetism is lost, Field Flashing using an external DC source restores magnetic domains.'
    ],
    hi: [
      'OCC वक्र स्थिर गति पर नो-लोड वोल्टेज E0 और फील्ड करंट If के बीच खींचा जाता है।',
      'शंट जनरेटर में स्व-उत्तेजन शुरू करने के लिए पोल्स में अवशिष्ट चुंबकत्व अनिवार्य है।',
      'वोल्टेज निर्माण OCC वक्र और फील्ड प्रतिरोध रेखा (V = If · Rf) के कटान बिंदु पर स्थिर होता है।',
      'क्रांतिक प्रतिरोध Rc स्पर्श रेखा का ढाल है; वोल्टेज बनने के लिए Rf < Rc होना चाहिए।',
      'क्रांतिक गति Nc वह न्यूनतम गति है जिसके नीचे जनरेटर उत्तेजित नहीं हो सकता।',
      'अवशिष्ट चुंबकत्व समाप्त होने पर फील्ड फ्लैशिंग (DC स्रोत) द्वारा इसे पुनः प्राप्त किया जाता है।'
    ],
    bn: [
      'OCC কার্ভ ধ্রুব গতিতে নো-লোড ভোল্টেজ E0 এবং ফিল্ড কারেন্ট If এর মধ্যে আঁকা হয়।',
      'শান্ট জেনারেটরে সেলফ-এক্সাইটেশন শুরুর জন্য পোলে অবশিষ্ট চৌম্বকত্ব অপরিহার্য।',
      'OCC কার্ভ এবং ফিল্ড রোধ রেখার (V = If · Rf) ছেদবিন্দুতে ভোল্টেজ বিল্ড-আপ স্থিতিশীল হয়।',
      'সংকট রোধ Rc হলো স্পর্শকের ঢাল; ভোল্টেজ তৈরির জন্য অবশ্যই Rf < Rc হতে হবে।',
      'সংকট গতি Nc হলো সর্বনিম্ন গতি যার নিচে জেনারেটর ভোল্টেজ সৃষ্টি করতে পারে না।',
      'অবশিষ্ট চৌম্বকত্ব নষ্ট হলে ফিল্ড ফ্ল্যাশিংয়ের মাধ্যমে বহিরাগত ডিসি উৎস দিয়ে তা ফিরিয়ে আনা হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Assuming that if a generator fails to build up voltage, the machine is physically burned out. (Usually it is simply reversed field polarity, Rf > Rc, or lost residual flux).',
      'Thinking Critical Field Resistance is constant at all speeds. (Rc is directly proportional to speed: Rc ∝ N).',
      'Forgetting that reversing prime-mover rotation reverses induced EMF polarity, causing field flux to cancel residual magnetism.',
      'Confusing Internal Characteristic (Eg vs Ia) with External Characteristic (V vs IL). External includes brush and armature drops.',
      'Attempting field flashing with AC current instead of pure DC battery voltage.'
    ],
    hi: [
      'वोल्टेज न बनने पर यह मान लेना कि मशीन जल गई है (अक्सर यह केवल उल्टा कनेक्शन, Rf > Rc या अवशिष्ट फ्लक्स की कमी होती है)।',
      'यह सोचना कि क्रांतिक प्रतिरोध Rc सभी गतियों पर स्थिर रहता है (Rc गति N के समानुपाती होता है)।',
      'यह भूल जाना कि घूर्णन दिशा उलटने से प्रेरित EMF की दिशा उलट जाती है और फ्लक्स नष्ट हो जाता है।',
      'आंतरिक विशेषता (Eg बनाम Ia) और बाह्य विशेषता (V बनाम IL) में भ्रमित होना।',
      'फील्ड फ्लैशिंग के लिए DC बैटरी के बजाय AC सप्लाई का उपयोग कर देना।'
    ],
    bn: [
      'ভোল্টেজ না উঠলে মেশিন পুড়ে গেছে মনে করা (বেশিরভাগ ক্ষেত্রে এটি উল্টো পোলারিটি, Rf > Rc বা অবশিষ্ট ফ্লাক্সের অভাব)।',
      'মনে করা সংকট রোধ Rc সব গতিতে অপরিবর্তিত থাকে (প্রকৃতপক্ষে Rc ∝ N)।',
      'ঘূর্ণন দিক উল্টে গেলে আবিষ্ট EMF উল্টে অবশিষ্ট চৌম্বকত্ব নষ্ট হয়ে যায় তা ভুলে যাওয়া।',
      'অভ্যন্তরীণ বৈশিষ্ট্য (Eg বনাম Ia) এবং বাহ্যিক বৈশিষ্ট্যের (V বনাম IL) মধ্যে গুলিয়ে ফেলা।',
      'ডিসি ব্যাটারির বদলে এসি কারেন্ট দিয়ে ফিল্ড ফ্ল্যাশিং করার ভুল করা।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-dc-gen-char-1',
      question: {
        en: 'What happens to a self-excited DC shunt generator if its total field resistance exceeds the critical field resistance (Rf > Rc)?',
        hi: 'यदि एक सेल्फ-एक्साइटेड डीसी शंट जनरेटर का कुल फील्ड प्रतिरोध क्रांतिक प्रतिरोध से अधिक (Rf > Rc) हो जाए तो क्या होगा?',
        bn: 'যদি একটি সেলফ-এক্সাইটেড ডিসি শান্ট জেনারেটরের মোট ফিল্ড রোধ সংকট রোধের চেয়ে বেশি (Rf > Rc) হয় তবে কী ঘটবে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The generator builds up excessive, dangerous voltage', hi: 'जनरेटर अत्यधिक खतरनाक वोल्टेज उत्पन्न करेगा', bn: 'জেনারেটর অতিরিক্ত বিপজ্জনক ভোল্টেজ তৈরি করবে' } },
        { id: 'opt-2', text: { en: 'The generator fails to build up voltage and gives only residual voltage', hi: 'जनरेटर वोल्टेज नहीं बना पाएगा और केवल अवशिष्ट वोल्टेज देगा', bn: 'জেনারেটর ভোল্টেজ তৈরি করতে ব্যর্থ হবে এবং কেবল অবশিষ্ট ভোল্টেজ দেবে' } },
        { id: 'opt-3', text: { en: 'The armature immediately burns out due to overcurrent', hi: 'अतिधारा के कारण आर्मेचर तुरंत जल जाएगा', bn: 'অতিরিক্ত কারেন্টে আর্মেচার তৎক্ষণাৎ পুড়ে যাবে' } },
        { id: 'opt-4', text: { en: 'The rotational speed automatically doubles', hi: 'घूर्णन गति स्वतः दोगुनी हो जाएगी', bn: 'ঘূর্ণন গতি স্বয়ংক্রিয়ভাবে দ্বিগুণ হবে' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'When Rf > Rc, the field resistance line lies above the OCC curve without intersecting it; hence cumulative feedback cannot proceed, leaving only the small residual EMF (6–12 V).',
        hi: 'जब Rf > Rc होता है, तो फील्ड प्रतिरोध रेखा OCC वक्र को नहीं काटती, जिससे वोल्टेज बिल्ड-अप नहीं होता और केवल 6-12 V अवशिष्ट वोल्टेज ही मिलता है।',
        bn: 'Rf > Rc হলে ফিল্ড লাইন OCC কার্ভকে ছেদ করতে পারে না, ফলে ভোল্টেজ বাড়ে না এবং কেবল সামান্য অবশিষ্ট ভোল্টেজ (৬-১২ V) থাকে।'
      }
    },
    {
      id: 'mcq-dc-gen-char-2',
      question: {
        en: 'The process of momentarily connecting an external DC source to restore lost residual magnetism in a DC generator is called:',
        hi: 'डीसी जनरेटर में खोए हुए अवशिष्ट चुंबकत्व को पुनः स्थापित करने के लिए बाहरी डीसी स्रोत जोड़ने की प्रक्रिया क्या कहलाती है?',
        bn: 'ডিসি জেনারেটরে নষ্ট হয়ে যাওয়া অবশিষ্ট চৌম্বকত্ব পুনরুদ্ধারে বহিরাগত ডিসি উৎস ক্ষণিকের জন্য যুক্ত করার প্রক্রিয়াকে কী বলে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Field Flashing', hi: 'फील्ड फ्लैशिंग (Field Flashing)', bn: 'ফিল্ড ফ্ল্যাশিং (Field Flashing)' } },
        { id: 'opt-2', text: { en: 'Armature Commutation', hi: 'आर्मेचर कम्यूटेशन', bn: 'আর্মেচার কমিউটেশন' } },
        { id: 'opt-3', text: { en: 'Magnetic Damping', hi: 'चुंबकीय डैम्पिंग', bn: 'ম্যাগনেটিক ড্যাম্পিং' } },
        { id: 'opt-4', text: { en: 'Equalizer Bonding', hi: 'इक्वलाइज़र बॉन्डिंग', bn: 'ইকুয়ালাইজার বন্ডিং' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Field Flashing passes a brief DC pulse through field coils from an external battery to re-magnetize the ferromagnetic pole cores.',
        hi: 'फील्ड फ्लैशिंग में बाहरी डीसी बैटरी से फील्ड कॉइल में करंट का एक छोटा पल्स दिया जाता है ताकि पोल्स पुनः चुंबकीय हो सकें।',
        bn: 'ফিল্ড ফ্ল্যাশিংয়ে ব্যাটারি থেকে ক্ষণস্থায়ী ডিসি কারেন্ট ফিল্ড কয়েলে পাঠিয়ে পোল কোরের অবশিষ্ট চৌম্বকত্ব ফিরিয়ে আনা হয়।'
      }
    },
    {
      id: 'mcq-dc-gen-char-3',
      question: {
        en: 'How does Critical Field Resistance (Rc) change if the rotational speed of a DC generator is increased by 20%?',
        hi: 'यदि डीसी जनरेटर की घूर्णन गति 20% बढ़ा दी जाए, तो क्रांतिक फील्ड प्रतिरोध (Rc) में क्या परिवर्तन होगा?',
        bn: 'ডিসি জেনারেটরের ঘূর্ণন গতি ২০% বৃদ্ধি পেলে সংকট ফিল্ড রোধ (Rc) কীভাবে পরিবর্তিত হবে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Rc decreases by 20%', hi: 'Rc में 20% की कमी होगी', bn: 'Rc ২০% হ্রাস পাবে' } },
        { id: 'opt-2', text: { en: 'Rc increases by 20%', hi: 'Rc में 20% की वृद्धि होगी', bn: 'Rc ২০% বৃদ্ধি পাবে' } },
        { id: 'opt-3', text: { en: 'Rc remains completely unaffected by speed', hi: 'Rc गति से पूरी तरह अप्रभावित रहेगा', bn: 'Rc গতির দ্বারা সম্পূর্ণ অপ্রভাবিত থাকবে' } },
        { id: 'opt-4', text: { en: 'Rc drops to zero', hi: 'Rc शून्य हो जाएगा', bn: 'Rc শূন্যে নেমে যাবে' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Critical field resistance is directly proportional to rotational speed (Rc ∝ N). Increasing speed by 20% increases Rc by 20%.',
        hi: 'क्रांतिक फील्ड प्रतिरोध घूर्णन गति के सीधे समानुपाती होता है (Rc ∝ N)। गति 20% बढ़ने पर Rc भी 20% बढ़ जाएगा।',
        bn: 'সংকট ফিল্ড রোধ ঘূর্ণন গতির সমানুপাতিক (Rc ∝ N)। গতি ২০% বৃদ্ধি পেলে Rc-ও ২০% বৃদ্ধি পাবে।'
      }
    },
    {
      id: 'mcq-dc-gen-char-4',
      question: {
        en: 'In the Open Circuit Characteristic (OCC) curve, the initial small voltage at zero field current (If = 0) is caused by:',
        hi: 'ओपन सर्किट विशेषता (OCC) वक्र में शून्य फील्ड करंट (If = 0) पर मिलने वाला प्रारंभिक छोटा वोल्टेज किसके कारण होता है?',
        bn: 'ওপেন সার্কিট বৈশিষ্ট্য (OCC) কার্ভে শূন্য ফিল্ড কারেন্টে (If = ০) প্রাপ্ত প্রাথমিক সামান্য ভোল্টেজের কারণ কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Residual magnetism in pole cores', hi: 'पोल कोर में उपस्थित अवशिष्ट चुंबकत्व', bn: 'পোল কোরে উপস্থিত অবশিষ্ট চৌম্বকত্ব' } },
        { id: 'opt-2', text: { en: 'Armature reactance voltage', hi: 'आर्मेचर रिएक्टेंस वोल्टेज', bn: 'আর্মেচার রিঅ্যাকট্যান্স ভোল্টেজ' } },
        { id: 'opt-3', text: { en: 'Contact drop across carbon brushes', hi: 'कार्बन ब्रश का संपर्क वोल्टेज ड्रॉप', bn: 'কার্বন ব্রাশের কন্টাক্ট ড্রপ' } },
        { id: 'opt-4', text: { en: 'Electrostatic charge on the commutator', hi: 'कम्यूटेटर पर स्थिरवैद्युत आवेश', bn: 'কমিউটেটরের স্থির বৈদ্যুতিক চার্জ' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Residual magnetism retained in the ferromagnetic pole shoes induces a small residual EMF (4–12 V) at rated speed when If = 0.',
        hi: 'पोल्स के लौहचुंबकीय पदार्थ में रुका हुआ अवशिष्ट चुंबकत्व If = 0 पर 4-12 V का प्रारंभिक अवशिष्ट EMF बनाता है।',
        bn: 'ফেরোম্যাগনেটিক পোল শু-তে সংরক্ষিত অবশিষ্ট চৌম্বকত্ব If = ০ অবস্থায় ৪-১২ V প্রাথমিক ভোল্টেজ সৃষ্টি করে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-dc-gen-char-1',
      question: {
        en: 'A DC shunt generator rated at 1200 RPM has a critical field resistance of 150 Ω. If the field circuit resistance is 100 Ω, find the lowest speed at which the generator will build up voltage.',
        hi: '1200 RPM पर चलने वाले डीसी शंट जनरेटर का क्रांतिक फील्ड प्रतिरोध 150 Ω है। यदि फील्ड परिपथ का प्रतिरोध 100 Ω हो, तो वह न्यूनतम गति ज्ञात कीजिए जिस पर जनरेटर वोल्टेज बना सकेगा।',
        bn: '১২০০ RPM গতিতে রেটেড একটি ডিসি শান্ট জেনারেটরের সংকট ফিল্ড রোধ ১৫০ Ω। যদি ফিল্ড সার্কিটের রোধ ১০০ Ω হয়, তবে জেনারেটরটি ভোল্টেজ তৈরি করতে সক্ষম এমন সর্বনিম্ন গতি নির্ণয় করো।'
      },
      hint: {
        en: 'Use the critical speed formula: Nc = N_rated · (Rf / Rc).',
        hi: 'क्रांतिक गति सूत्र Nc = N_rated · (Rf / Rc) का प्रयोग करें।',
        bn: 'সংকট গতির সূত্র Nc = N_rated · (Rf / Rc) ব্যবহার করো।'
      },
      answerKey: {
        en: 'Nc = 1200 RPM × (100 Ω / 150 Ω) = 1200 × (2/3) = 800 RPM. Below 800 RPM, the generator will fail to build up voltage.',
        hi: 'Nc = 1200 × (100 / 150) = 800 RPM। 800 RPM से कम गति पर वोल्टेज नहीं बनेगा।',
        bn: 'Nc = ১২০০ × (১০০ / ১৫০) = ৮০০ RPM। ৮০০ RPM এর নিচে নামলে ভোল্টেজ বিল্ড-আপ ব্যর্থ হবে।'
      }
    },
    {
      id: 'pq-dc-gen-char-2',
      question: {
        en: 'Explain why a DC shunt generator fails to build up voltage if the direction of prime-mover rotation is reversed.',
        hi: 'स्पष्ट कीजिए कि यदि प्राइम मूवर के घूर्णन की दिशा उलट दी जाए तो डीसी शंट जनरेटर वोल्टेज बनाने में क्यों विफल हो जाता है?',
        bn: 'ব্যাখ্যা করো কেন প্রাইম মুভারের ঘূর্ণন দিক উল্টে দিলে ডিসি শান্ট জেনারেটরে ভোল্টেজ বিল্ড-আপ ব্যর্থ হয়।'
      },
      hint: {
        en: 'Apply Fleming\'s Right-Hand Rule to determine the polarity of the induced EMF when rotation is reversed and examine its effect on field current direction.',
        hi: 'फ्लेमिंग के दाएँ हाथ नियम से प्रेरित EMF की ध्रुवता पर घूर्णन दिशा का प्रभाव देखें।',
        bn: 'ঘূর্ণন দিক উল্টালে আবিষ্ট EMF এর পোলারিটিতে কী প্রভাব পড়ে তা ফ্লেমিংয়ের ডান হাত নিয়মে বিবেচনা করো।'
      },
      answerKey: {
        en: 'Reversing the rotation direction reverses the polarity of the induced residual EMF according to Fleming\'s Right-Hand Rule. Consequently, the initial field current flows in the opposite direction through the shunt coils, creating an MMF that opposes and wipes out the residual magnetism instead of reinforcing it. With residual flux destroyed, the generator output drops to zero.',
        hi: 'घूर्णन दिशा उलटने से प्रेरित अवशिष्ट EMF की ध्रुवता (प्लस/माइनस) उलट जाती है। इससे फील्ड वाइंडिंग में धारा विपरीत दिशा में बहती है और वह अवशिष्ट चुंबकत्व को मजबूत करने के बजाय समाप्त (demagnetize) कर देती है। फ्लक्स नष्ट होते ही वोल्टेज शून्य हो जाता है।',
        bn: 'ঘূর্ণন দিক উল্টে দিলে ফ্লেমিংয়ের ডান হাত নিয়ম অনুসারে আবিষ্ট ভোল্টেজের পোলারিটি উল্টে যায়। ফলে ফিল্ড কয়েলে উল্টোমুখী কারেন্ট প্রবাহিত হয়ে অবশিষ্ট চৌম্বকত্বকে শক্তিশালী করার বদলে বিনষ্ট করে ফেলে। অবশিষ্ট ফ্লাক্স নষ্ট হয়ে যাওয়ায় ভোল্টেজ বিল্ড-আপ পুরোপুরি ব্যর্থ হয়।'
      }
    }
  ]
};
