import { Lesson } from '../types';

export const LESSON_EDDY_CURRENTS_LOSS_MECHANISMS: Lesson = {
  id: 'lsn-ch10-eddy-currents-loss-mechanisms',
  topicId: 'ch10-eddy-currents-loss-mechanisms',
  chapterId: 'ch-em-induction',
  order: 10,
  title: {
    en: 'Eddy Currents: Formation, Loss Mechanisms & Lamination Design',
    hi: 'भंवर धाराएं: उत्पत्ति, हानि तंत्र एवं लैमिनेशन डिजाइन',
    bn: 'এডি বা ঘূর্ণি কারেন্ট: উৎপত্তি, অপচয় প্রক্রিয়া ও ল্যামিনেশন নকশা'
  },
  description: {
    en: 'Deep-dive into Foucault currents, circulating paths in bulk conductors, quadratic dependence on thickness and frequency, silicon steel laminations, and practical mitigation in power apparatus.',
    hi: 'फूको धाराओं (भंवर धाराओं), ठोस चालकों में चक्रीय पथों, मोटाई एवं आवृत्ति पर द्विघात निर्भरता, सिलिकॉन स्टील लैमिनेशन तथा विद्युत उपकरणों में हानि निवारण तकनीकों का व्यापक अध्ययन।',
    bn: 'ফুকো বা এডি কারেন্ট, পরিবাহীর ভেতর ঘূর্ণায়মান পথ, বেধ ও কম্পাঙ্কের ওপর দ্বিঘাত নির্ভরতা, সিলিকন স্টিল ল্যামিনেশন এবং বৈদ্যুতিক যন্ত্রপাতিতে অপচয় হ্রাসের বিশদ বিশ্লেষণ।'
  },
  estimatedMinutes: 32,
  easyExplanation: {
    en: "When an alternating magnetic flux cuts through a solid block of iron or copper, it doesn't just induce voltage at the terminals—it induces swirling whirlpools of electrical current inside the metal itself! These 'eddy currents' flow through the metal's internal resistance, converting valuable electrical energy into unwanted heat (I²R loss). To stop them, engineers slice the solid iron core into hundreds of razor-thin sheets insulated with varnish, forcing the whirlpools into tiny, harmless micro-loops.",
    hi: 'जब कोई बदलता हुआ चुंबकीय फ्लक्स लोहे या तांबे के ठोस ब्लॉक से गुजरता है, तो वह केवल सिरों पर ही वोल्टेज नहीं बनाता, बल्कि धातु के अंदर ही घूमती हुई भंवर जैसी धाराएं पैदा कर देता है! इन्हें "भंवर धाराएं" (Eddy Currents) कहते हैं। ये धातु के आंतरिक प्रतिरोध में बहकर बिजली को व्यर्थ ऊष्मा (गर्मी) में बदल देती हैं। इससे बचने के लिए ट्रांसफार्मर और मोटरों के कोर को ठोस बनाने के बजाय वार्निश लगी पतली-पतली पत्तियों (लैमिनेशन) को जोड़कर बनाया जाता है।',
    bn: 'যখন কোনো পরিবর্তনশীল চৌম্বক ফ্লাক্স কোনো নিরেট লোহা বা তামার ব্লকের মধ্য দিয়ে প্রবাহিত হয়, তখন ধাতুর অভ্যন্তরে ঘূর্ণায়মান পানির মতো চক্রাকার বিদ্যুৎপ্রবাহ সৃষ্টি হয়! একে "এডি কারেন্ট" বা ঘূর্ণি প্রবাহ বলে। এই প্রবাহ ধাতুর অভ্যন্তরীণ রোধের কারণে প্রচুর উত্তাপ (I²R অপচয়) সৃষ্টি করে। এই অপচয় রোধ করতে মোটর ও ট্রান্সফরমারের কোর নিরেট না করে পাতলা ধাতব শিট (ল্যামিনেশন) জোড়া লাগিয়ে তৈরি করা হয় এবং তাদের মাঝে অন্তরক বার্নিশের প্রলেপ দেওয়া হয়।'
  },
  detailedExplanation: {
    en: `1. Physical Origin & Phenomenon (Foucault Currents):
In 1851, French physicist Léon Foucault observed that a copper disc rotating between the poles of a strong electromagnet experienced an invisible braking torque and became extremely hot.
According to Faraday's Law in differential form:
  ∇ × E = - ∂B/∂t
A time-varying magnetic field B(t) produces a non-conservative, closed-loop electric field E throughout the conductive medium. Since bulk metal has high electrical conductivity (low resistivity ρ), this induced electric field drives massive circulating loops of current known as eddy currents.

2. Classical Mathematical Derivation of Eddy Current Loss (P_e):
Consider a rectangular sheet or lamination of thickness 't', height 'h', and length 'l', carrying alternating magnetic flux density B(t) = B_m · sin(ωt) along its length:
- Let x be the distance from the central neutral plane of the lamination (-t/2 ≤ x ≤ +t/2).
- The flux enclosed by a closed loop at distance x is:
  Φ(x) = 2 · x · h · B_m · sin(ωt)
- Induced EMF around the rectangular loop:
  e(x) = - dΦ/dt = - 2 · x · h · ω · B_m · cos(ωt)
- The loop resistance for strip thickness dx and length l:
  dR ≈ 2 · ρ · h / (l · dx)
- The instantaneous power dissipated in the elemental loop:
  dP = e(x)² / dR = [4 · x² · h² · ω² · B_m² · cos²(ωt)] / [2 · ρ · h / (l · dx)]
  dP = (2 · ω² · B_m² · h · l / ρ) · x² · cos²(ωt) · dx
- Integrating across the entire thickness from x = 0 to x = t/2:
  P_avg = (π² / 6) · (f² · B_m² · t² / ρ) · V (Watts)
where V = h · l · t is the volume of the lamination.

3. The Quadratic Law of Thickness (P_e ∝ t²):
Notice the critical term: P_e ∝ t².
- If a solid core of thickness T is split into N insulated laminations of thickness t = T / N:
  The loss in each sheet drops by (1/N)².
  The total loss of all N sheets drops to:
  P_total = N · (P_solid / N²) = P_solid / N.
  For example, slicing a solid iron block into 50 insulated laminations reduces eddy current power dissipation by 98%!

4. Material Engineering & Mitigation:
- Silicon Steel Alloys (CRGO): Adding 3% to 4.5% silicon into electrical steel increases resistivity ρ by nearly 400%, slashing K_e while retaining high magnetic saturation (B_sat ≈ 1.8 to 2.0 T).
- Interlaminar Insulation: Phosphate coating (Carlite) or heat-resistant insulating varnish (0.01 mm thick) prevents current jumping between adjacent sheets.
- Ferrites & Powdered Iron: In high-frequency SMPS (10 kHz - 10 MHz), even thin laminations dissipate too much heat. Non-conductive ceramic ferrites (MnZn, NiZn) with resistivities 10⁶ times higher than steel are mandatory.

5. Applications & Detriments:
- Negative Impacts: Core overheating, efficiency loss in transformers, synchronous machines, and induction motors; hot-spot formation deteriorating paper insulation.
- Constructive Applications: Induction furnaces (controlled metal melting), eddy-current disc brakes in high-speed rail, metal detectors, and deadbeat damping in PMMC measuring instruments.`,

    hi: `1. भौतिक उत्पत्ति एवं फूको धाराएं:
1851 में फ्रांसीसी भौतिक विज्ञानी लियोन फूको ने देखा कि जब एक तांबे की चकती को शक्तिशाली विद्युत चुंबक के ध्रुवों के बीच घुमाया जाता है, तो उस पर एक अदृश्य ब्रेकिंग टॉर्क लगता है और वह अत्यधिक गर्म हो जाती है।
फैराडे के मैक्सवेल नियम के अनुसार:
  ∇ × E = - ∂B/∂t
समय के साथ बदलने वाला चुंबकीय फ्लक्स B(t) धातु के अंदर एक चक्रीय विद्युत क्षेत्र (E) उत्पन्न करता है। धातु की उच्च चालकता (कम प्रतिरोधकता ρ) के कारण धातु के पिंड के अंदर बड़ी मात्रा में भंवर धाराएं चक्कर काटने लगती हैं।

2. भंवर धारा हानि (P_e) का गणितीय सूत्र:
मोटाई 't', ऊंचाई 'h', और लंबाई 'l' की एक लैमिनेशन पट्टी पर विचार करें:
  P_e = K_e · f² · B_m² · t² · V  (वाट)
जहाँ:
- K_e = π² / (6·ρ) (पदार्थ स्थिरांक)
- f = प्रत्यावर्ती आवृत्ति (Hz)
- B_m = अधिकतम चुंबकीय फ्लक्स घनत्व (Tesla)
- t = लैमिनेशन की मोटाई (मीटर)
- V = कोर का आयतन (m³)

3. मोटाई का वर्ग नियम (P_e ∝ t²):
भंवर धारा हानि लैमिनेशन की मोटाई के वर्ग (t²) के समानुपाती होती है। यदि एक ठोस लोहे के कोर को N पतली लैमिनेशन पत्तियों में विभाजित कर दिया जाए, तो कुल भंवर धारा हानि 1/N गुना घट जाती है। उदाहरण के लिए, 0.35 mm की पत्तियों का उपयोग करने से ठोस कोर की तुलना में हानि 99% तक कम हो जाती है।

4. हानि निवारण तकनीकें:
- सिलिकॉन स्टील: 3% से 4% सिलिकॉन मिलाने से विद्युत प्रतिरोधकता ρ में 4 गुना वृद्धि होती है, जिससे भंवर धाराएं बहुत क्षीण हो जाती हैं।
- वार्निश लैमिनेशन: प्रत्येक पत्ती पर वार्निश की पतली परत लगाई जाती है ताकि धाराएं एक पत्ती से दूसरी पत्ती में न जा सकें।
- फेराइट कोर: उच्च आवृत्ति वाले स्विच मोड बिजली आपूर्ति (SMPS) में धातु के स्थान पर अचालक फेराइट कोर का उपयोग किया जाता है।`,

    bn: `১. ভৌত উৎপত্তি ও ফুকো প্রবাহ:
১৮৫১ সালে ফরাসি পদার্থবিদ লিওন ফুকো আবিষ্কার করেন যে শক্তিশালী চৌম্বক ক্ষেত্রে একটি তামার চাকতি ঘোরানো হলে চাকতিতে তীব্র বাধা সৃষ্টি হয় এবং চাকতিটি উত্তপ্ত হয়ে ওঠে।
ম্যাক্সওয়েল-ফ্যারাডে সমীকরণ অনুযায়ী:
  ∇ × E = - ∂B/∂t
পরিবর্তনশীল চৌম্বক ফ্লাক্স ধাতুর অভ্যন্তরে একটি চক্রাকার বিদ্যুৎ ক্ষেত্র তৈরি করে। ধাতব পদার্থের উচ্চ পরিবাহিতা এবং নিম্ন রোধের কারণে এর ভেতরে পানির ঘূর্ণির মতো আবদ্ধ বিদ্যুৎপ্রবাহের সৃষ্টি হয়, যা এডি কারেন্ট নামে পরিচিত।

২. এডি কারেন্ট অপচয়ের সমীকরণ:
একটি l দৈর্ঘ্য, h উচ্চতা এবং t পুরুত্বের ল্যামিনেশন পাতের জন্য:
  P_e = K_e · f² · B_m² · t² · V (ওয়াট)
যেখানে:
- K_e = π² / (6·ρ)
- f = এসি কম্পাঙ্ক (Hz)
- B_m = সর্বোচ্চ চৌম্বক ফ্লাক্স ঘনত্ব (T)
- t = প্রতিটি পাতের পুরুত্ব (m)
- V = মোট আয়তন (m³)

৩. পুরুত্বের বর্গীয় সূত্র (P_e ∝ t²):
ল্যামিনেশনের পুরুত্ব অর্ধেকে (t/2) কমিয়ে আনলে এডি কারেন্ট অপচয় এক-চতুর্থাংশে নেমে আসে। একটি নিরেট ব্লককে N সংখ্যক অন্তরিত পাতে বিভক্ত করলে মোট অপচয় 1/N ভাগে হ্রাস পায়।`
  },
  formulas: [
    {
      id: 'f-eddy-current-loss-universal',
      symbol: 'P_e',
      expression: 'P_e = K_e · f² · B_m² · t² · V',
      title: {
        en: 'Universal Eddy Current Loss Formula',
        hi: 'सार्वभौमिक भंवर धारा हानि सूत्र',
        bn: 'সার্বজনীন এডি কারেন্ট অপচয় সূত্র'
      },
      description: {
        en: 'Total power loss in Watts dissipated as heat due to circulating eddy currents in magnetic core materials',
        hi: 'चुंबकीय कोर में भंवर धाराओं के कारण ऊष्मा के रूप में नष्ट होने वाली कुल विद्युत शक्ति (वाट)',
        bn: 'চৌম্বক কোরের ভেতর এডি কারেন্টের কারণে তাপে রূপান্তরিত মোট বৈদ্যুতিক অপচয় (ওয়াট)'
      },
      variables: [
        { symbol: 'P_e', name: { en: 'Eddy current loss (Watts)', hi: 'भंवर धारा हानि (वाट)', bn: 'এডি কারেন্ট অপচয় (ওয়াট)' } },
        { symbol: 'K_e', name: { en: 'Core material coefficient: π²/(6ρ)', hi: 'पदार्थ गुणांक: π²/(6ρ)', bn: 'উপাদান সহগ: π²/(6ρ)' } },
        { symbol: 'f', name: { en: 'Excitation frequency (Hz)', hi: 'आवृत्ति (Hz)', bn: 'কম্পাঙ্ক (Hz)' } },
        { symbol: 'B_m', name: { en: 'Maximum magnetic flux density (T)', hi: 'अधिकतम फ्लक्स घनत्व (T)', bn: 'সর্বোচ্চ ফ্লাক্স ঘনত্ব (T)' } },
        { symbol: 't', name: { en: 'Lamination sheet thickness (m)', hi: 'पत्ती की मोटाई (m)', bn: 'ল্যামিনেশন পাতের বেধ (m)' } },
        { symbol: 'V', name: { en: 'Total volume of core (m³)', hi: 'कोर का आयतन (m³)', bn: 'কোরের মোট আয়তন (m³)' } }
      ]
    },
    {
      id: 'f-eddy-loss-per-kg',
      symbol: 'p_e',
      expression: 'p_e = k_e · f² · B_m² · t²',
      title: {
        en: 'Specific Eddy Current Loss (W/kg)',
        hi: 'विशिष्ट भंवर धारा हानि (W/kg)',
        bn: 'নির্দিষ্ট এডি কারেন্ট অপচয় (W/kg)'
      },
      description: {
        en: 'Eddy current loss normalized per unit mass of magnetic material',
        hi: 'प्रति किलोग्राम कोर द्रव्यमान में भंवर धारा हानि',
        bn: 'প্রতি কিলোগ্রাম কোর ভরের জন্য এডি কারেন্ট অপচয়'
      },
      variables: [
        { symbol: 'p_e', name: { en: 'Specific eddy loss (W/kg)', hi: 'विशिष्ट हानि (W/kg)', bn: 'নির্দিষ্ট অপচয় (W/kg)' } },
        { symbol: 'k_e', name: { en: 'Material-density constant', hi: 'पदार्थ-घनत्व नियतांक', bn: 'উপাদান-ঘনত্ব ধ্রুবক' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-eddy-derivation-detailed',
      title: {
        en: 'Step-by-Step Derivation of the Thickness-Squared Law',
        hi: 'मोटाई के वर्ग नियम की चरणबद्ध गणितीय व्युत्पत्ति',
        bn: 'পুরুত্বের বর্গীয় সূত্রের ধাপে ধাপে গাণিতিক প্রতিপাদন'
      },
      content: {
        en: `Consider a thin electrical steel lamination of thickness t centered at x = 0, with boundary surfaces at x = -t/2 and x = +t/2.
1. Let magnetic flux density B(t) = B_m · sin(ωt) act perpendicular to the cross section of dimensions h × t.
2. An elemental loop of width 2x and height h encloses an area A(x) = 2x · h.
3. The instantaneous magnetic flux through this loop is:
   Φ(x, t) = 2x · h · B_m · sin(ωt)
4. By Faraday's Law, the induced EMF driving circulating current in this path is:
   e(x, t) = - dΦ/dt = - 2x · h · ω · B_m · cos(ωt)
5. The loop resistance consisting of two parallel vertical strips of cross-section h · dx and length l is:
   R(x) = 2 · ρ · h / (l · dx)
6. Instantaneous power dissipated in strip dx:
   dP(x, t) = e² / R = [4x² · h² · ω² · B_m² · cos²(ωt)] · [l · dx / (2 · ρ · h)]
   dP(x, t) = (2 · ω² · B_m² · h · l / ρ) · x² · cos²(ωt) · dx
7. Averaging over time yields ⟨cos²(ωt)⟩ = 1/2.
8. Integrating from x = 0 to x = t/2:
   P = ∫[0 to t/2] (ω² · B_m² · h · l / ρ) · x² · dx = (ω² · B_m² · h · l / ρ) · [t³ / 24]
9. Substituting ω = 2πf and volume V = h · l · t:
   P_e = [(4π²f²) · B_m² · V · t²] / [24 · ρ] = (π² / 6ρ) · f² · B_m² · t² · V.
This establishes the rigorous mathematical foundation for P_e ∝ t²!`,
        hi: `x = -t/2 से x = +t/2 के बीच रखी एक पतली लैमिनेशन पत्ती पर विचार करें:
1. लूप द्वारा घेरा गया क्षेत्रफल: A(x) = 2x · h
2. चुंबकीय फ्लक्स: Φ(x, t) = 2x · h · B_m · sin(ωt)
3. प्रेरित ईएमएफ: e(x, t) = - 2x · h · ω · B_m · cos(ωt)
4. प्रतिरोध: dR = 2 · ρ · h / (l · dx)
5. तात्कालिक शक्ति व्यय: dP = e² / dR = (2 · ω² · B_m² · h · l / ρ) · x² · cos²(ωt) · dx
6. समय-औसत ⟨cos²(ωt)⟩ = 1/2 लेते हुए और x = 0 से t/2 तक समाकलन करने पर:
   P_e = (π² / 6ρ) · f² · B_m² · t² · V
यह सिद्ध करता है कि भंवर धारा हानि मोटाई के वर्ग (t²) के समानुपाती होती है।`,
        bn: `একটি t বেধের ল্যামিনেশন পাতের ক্ষেত্রে:
১. আবদ্ধ ক্ষেত্রফল: A(x) = 2x · h
২. চৌম্বক ফ্লাক্স: Φ(x, t) = 2x · h · B_m · sin(ωt)
৩. আবিষ্ট ইএমএফ: e(x, t) = - 2x · h · ω · B_m · cos(ωt)
৪. সমাকলন করে মোট শক্তি অপচয় পাওয়া যায়:
   P_e = (π² / 6ρ) · f² · B_m² · t² · V
এর মাধ্যমে প্রমাণিত হয় যে এডি কারেন্ট অপচয় পাতের বেধের বর্গের (t²) সমানুপাতিক।`
      }
    },
    {
      id: 'sec-eddy-industrial-comparison',
      title: {
        en: 'Solid Core vs. Laminated Assembly: Industrial Metrics',
        hi: 'ठोस कोर बनाम लैमिनेटेड कोर: औद्योगिक तुलना',
        bn: 'নিরেট কোর বনাম ল্যামিনেটেড কোর: শিল্প তুলনা'
      },
      content: {
        en: `Industrial Engineering Data:
- Standard Distribution Transformer: 50 Hz, B_m = 1.6 T.
- Solid mild steel block (t = 100 mm): Eddy current loss exceeds 8,500 W/kg, causing red-hot melting within minutes.
- Modern 0.27 mm CRGO lamination stack (t = 0.27 mm): Eddy current loss drops below 0.35 W/kg!
- Silicon Content Optimization: Pure iron has ρ ≈ 10 × 10⁻⁸ Ω·m. Adding 3.2% Silicon increases ρ to 45 × 10⁻⁸ Ω·m. Exceeding 4.5% silicon makes the steel brittle and impossible to punch or shear without micro-fracturing.`,
        hi: `औद्योगिक आंकड़े:
- 50 Hz, 1.6 T पर 100 mm का ठोस लोहा ब्लॉक 8,500 W/kg से अधिक ऊष्मा उत्पन्न करता है, जिससे वह कुछ ही मिनटों में लाल होकर पिघलने लगता है।
- 0.27 mm CRGO सिलिकॉन स्टील लैमिनेशन में यही हानि घटकर मात्र 0.35 W/kg रह जाती है!
- सिलिकॉन की मात्रा: 3.2% सिलिकॉन मिलाने से प्रतिरोधकता 4.5 गुना बढ़ जाती है। 4.5% से अधिक सिलिकॉन मिलाने पर इस्पात भंगुर (brittle) हो जाता है।`,
        bn: `শিল্পক্ষেত্রের ডেটা:
- ৫০ হার্টজে নিরেট লোহার ব্লকে এডি কারেন্ট অপচয় ৮,৫০০ W/kg ছাড়িয়ে যায়, যা কয়েক মিনিটে লোহাকে গলিয়ে দিতে পারে।
- ০.২৭ মিমি CRGO ল্যামিনেশন স্ট্যাক ব্যবহারে এই অপচয় ০.৩৫ W/kg এর নিচে নেমে আসে!
- ৩.২% সিলিকন যোগ করলে রোধ ক্ষমতা ৪.৫ গুণ বৃদ্ধি পায়।`
      },
      schematicId: 'circuit-ch10-eddy-current-solid-vs-laminated'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-eddy-1',
      problem: {
        en: 'A transformer core has an eddy-current loss of 180 W when operated at 50 Hz with a maximum flux density of 1.2 T. Calculate the new eddy-current loss if the operating frequency is increased to 60 Hz and the peak flux density is increased to 1.4 T, assuming core volume and lamination thickness remain unchanged.',
        hi: 'एक ट्रांसफॉर्मर कोर में 50 Hz और 1.2 T अधिकतम फ्लक्स घनत्व पर 180 W भंवर धारा हानि होती है। यदि कोर आयतन और लैमिनेशन मोटाई अपरिवर्तित रहे, तो 60 Hz आवृत्ति और 1.4 T शीर्ष फ्लक्स घनत्व पर नई भंवर धारा हानि ज्ञात कीजिए।',
        bn: 'একটি ট্রান্সফরমার কোরে ৫০ Hz কম্পাঙ্ক এবং ১.২ T সর্বোচ্চ ফ্লাক্স ঘনত্বে এডি কারেন্ট অপচয় ১৮০ W। কোর আয়তন ও ল্যামিনেশন বেধ অপরিবর্তিত থাকলে ৬০ Hz কম্পাঙ্ক এবং ১.৪ T শীর্ষ ফ্লাক্স ঘনত্বে নতুন এডি কারেন্ট অপচয় নির্ণয় কর।'
      },
      givenValues: {
        en: 'P_e1 = 180 W, f₁ = 50 Hz, B_m1 = 1.2 T, f₂ = 60 Hz, B_m2 = 1.4 T',
        hi: 'P_e1 = 180 W, f₁ = 50 Hz, B_m1 = 1.2 T, f₂ = 60 Hz, B_m2 = 1.4 T',
        bn: 'P_e1 = ১৮০ W, f₁ = ৫০ Hz, B_m1 = ১.২ T, f₂ = ৬০ Hz, B_m2 = ১.৪ T'
      },
      solution: {
        en: `1. Recall the eddy-current loss formula:
   P_e = K_e · B_m² · f² · t² · V
2. Since core volume V, lamination thickness t, and material constant K_e remain constant:
   P_e ∝ B_m² · f²
3. Form the ratio:
   P_e2 / P_e1 = (B_m2 / B_m1)² · (f₂ / f₁)²
4. Substitute given values:
   P_e2 / 180 = (1.4 / 1.2)² · (60 / 50)²
   P_e2 / 180 = (7 / 6)² · (1.2)² = (49 / 36) · 1.44 = 1.3611 · 1.44 = 1.96
5. Compute new loss:
   P_e2 = 180 · 1.96 = 352.8 W`,
        hi: `1. भंवर धारा हानि सूत्र:
   P_e = K_e · B_m² · f² · t² · V
2. चूंकि V, t और सामग्री नियतांक स्थिर हैं:
   P_e ∝ B_m² · f²
3. अनुपात:
   P_e2 / P_e1 = (B_m2 / B_m1)² · (f₂ / f₁)²
4. मान रखने पर:
   P_e2 / 180 = (1.4 / 1.2)² · (60 / 50)² = (49 / 36) · 1.44 = 1.96
5. नई हानि:
   P_e2 = 180 × 1.96 = 352.8 W`,
        bn: `১. এডি কারেন্ট অপচয়ের সূত্র:
   P_e = K_e · B_m² · f² · t² · V
2. যেহেতু আয়তন V, বেধ t এবং ধ্রুবক K_e অপরিবর্তিত:
   P_e ∝ B_m² · f²
৩. অনুপাত গঠন:
   P_e2 / P_e1 = (B_m2 / B_m1)² · (f₂ / f₁)²
৪. মান বসিয়ে পাই:
   P_e2 / ১৮০ = (১.৪ / ১.২)² · (৬০ / ৫০)² = (৪৯ / ৩৬) · ১.৪৪ = ১.৯৬
৫. নতুন অপচয়:
   P_e2 = ১৮০ × ১.৯৬ = ৩৫২.৮ W`
      },
      finalAnswer: {
        en: 'P_e2 = 352.8 W (a 96% increase in eddy-current loss)',
        hi: 'P_e2 = 352.8 W (भंवर धारा हानि में 96% की वृद्धि)',
        bn: 'P_e2 = ৩৫২.৮ W (এডি কারেন্ট অপচয়ে ৯৬% বৃদ্ধি)'
      }
    },
    {
      id: 'ex-eddy-2',
      problem: {
        en: 'A 50 Hz transformer core constructed from 0.50 mm thick laminations has an eddy-current loss of 320 W. If the core is rebuilt using thinner 0.35 mm laminations while keeping the total iron volume, frequency, and maximum flux density identical, determine: (a) The new eddy-current loss, and (b) The percentage reduction in loss.',
        hi: '0.50 mm मोटी लैमिनेशन से बने 50 Hz ट्रांसफॉर्मर कोर में भंवर धारा हानि 320 W है। यदि कुल लौह आयतन, आवृत्ति और अधिकतम फ्लक्स घनत्व को समान रखते हुए कोर को 0.35 mm की पतली लैमिनेशन से पुनर्निर्मित किया जाए, तो ज्ञात कीजिए: (a) नई भंवर धारा हानि, तथा (b) हानि में प्रतिशत कमी।',
        bn: '০.৫০ মিমি পুরু ল্যামিনেশন দ্বারা তৈরি ৫০ Hz ট্রান্সফরমার কোরের এডি কারেন্ট অপচয় ৩২০ W। মোট আয়রন আয়তন, কম্পাঙ্ক এবং সর্বোচ্চ ফ্লাক্স ঘনত্ব একই রেখে যদি কোরটি ০.৩৫ মিমি পাতলা ল্যামিনেশন দ্বারা পুনর্গঠন করা হয়, তবে নির্ণয় কর: (a) নতুন এডি কারেন্ট অপচয়, এবং (b) অপচয়ের শতকরা হ্রাস।'
      },
      givenValues: {
        en: 't₁ = 0.50 mm, P_e1 = 320 W, t₂ = 0.35 mm',
        hi: 't₁ = 0.50 mm, P_e1 = 320 W, t₂ = 0.35 mm',
        bn: 't₁ = ০.৫০ মিমি, P_e1 = ৩২০ W, t₂ = ০.৩৫ মিমি'
      },
      solution: {
        en: `1. Relation between eddy-current loss and lamination thickness:
   P_e ∝ t² (when total core volume, B_m, and frequency f are fixed)
2. Express the ratio:
   P_e2 / P_e1 = (t₂ / t₁)²
3. Substitute the values:
   P_e2 / 320 = (0.35 / 0.50)² = (0.7)² = 0.49
4. Calculate new eddy-current loss:
   P_e2 = 320 · 0.49 = 156.8 W
5. Calculate percentage reduction:
   Reduction (%) = [(P_e1 - P_e2) / P_e1] · 100% = [(320 - 156.8) / 320] · 100% = (163.2 / 320) · 100% = 51%`,
        hi: `1. लैमिनेशन मोटाई के साथ संबंध:
   P_e ∝ t² (जब कुल आयतन, B_m और f स्थिर हों)
2. अनुपात:
   P_e2 / P_e1 = (t₂ / t₁)²
3. मान रखने पर:
   P_e2 / 320 = (0.35 / 0.50)² = 0.49
4. नई भंवर धारा हानि:
   P_e2 = 320 × 0.49 = 156.8 W
5. प्रतिशत कमी:
   कमी = [(320 - 156.8) / 320] × 100% = 51%`,
        bn: `১. ল্যামিনেশন বেধের সাথে সম্পর্ক:
   P_e ∝ t² (যখন মোট আয়তন, B_m এবং f অপরিবর্তিত)
২. অনুপাত:
   P_e2 / P_e1 = (t₂ / t₁)²
৩. মান বসিয়ে:
   P_e2 / ৩২০ = (০.৩৫ / ০.৫০)² = ০.৪৯
৪. নতুন এডি কারেন্ট অপচয়:
   P_e2 = ৩২০ × ০.৪৯ = ১৫৬.৮ W
৫. শতকরা হ্রাস:
   হ্রাস = [(৩২০ - ১৫৬.৮) / ৩২০] × ১০০% = ৫১%`
      },
      finalAnswer: {
        en: 'New Eddy Loss P_e2 = 156.8 W; Power Saved = 163.2 W (51% reduction)',
        hi: 'नई हानि P_e2 = 156.8 W; बचाई गई शक्ति = 163.2 W (51% कमी)',
        bn: 'নতুন অপচয় P_e2 = ১৫৬.৮ W; অপচয় রোধ = ১৬৩.২ W (৫১% হ্রাস)'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Induction Furnaces & Metallurgy: High-frequency circulating eddy currents melt metals rapidly in an inert vacuum without combustion contamination.',
      'Induction Cooktops: High-frequency alternating magnetic fields generate localized eddy currents directly in ferromagnetic cookware bottoms for high-efficiency heating.',
      'Electromagnetic Damping in Galvanometers & Meters: Metallic formers moving through magnetic fields induce opposing eddy currents to eliminate pointer oscillations (deadbeat response).',
      'Eddy Current Rail Brakes & Dynamometers: Non-friction electromagnetic braking for high-speed trains (TGV, ICE) and engine dynamometer testing without mechanical pad wear.',
      'Non-Destructive Testing (NDT): High-frequency eddy current probes detect surface micro-cracks and corrosion in aircraft skins and nuclear piping.'
    ],
    hi: [
      'इंडक्शन भट्टियां और धातु विज्ञान: उच्च-आवृत्ति भंवर धाराएं धातु को बिना किसी ईंधन प्रदूषण के निर्वात में तेजी से पिघलाती हैं।',
      'इंडक्शन कुकटॉप: उच्च-आवृत्ति चुंबकीय क्षेत्र कुकवेयर की तली में भंवर धाराएं उत्पन्न कर अत्यधिक कुशल तापन प्रदान करते हैं।',
      'गैल्वेनोमीटर में विद्युत चुंबकीय अवमंदन: चुंबकीय क्षेत्र में घूमते धातु फ्रेम में भंवर धाराएं सुई के दोलन को समाप्त कर तुरंत स्थिर करती हैं।',
      'एडी करंट रेल ब्रेक और डायनेमोमीटर: बिना किसी घिसाव के हाई-स्पीड ट्रेनों और इंजन टेस्टिंग के लिए घर्षण-रहित ब्रेकिंग।',
      'गैर-विनाशकारी परीक्षण (NDT): विमान की धातुई सतहों और पाइपलाइनों में सूक्ष्म दरारों का पता लगाने के लिए एडी करंट जांच।'
    ],
    bn: [
      'ইন্ডাকশন ফার্নেস ও ধাতুবিদ্যা: উচ্চ-কম্পাঙ্কের এডি কারেন্ট কোনো জ্বালানি দূষণ ছাড়াই ধাতুকে দ্রুত গলিয়ে দেয়।',
      'ইন্ডাকশন কুকার: উচ্চ-কম্পাঙ্কের পরিবর্তনশীল চৌম্বক ক্ষেত্র রান্নার পাত্রের তলায় এডি কারেন্ট তৈরি করে সরাসরি তাপ উৎপন্ন করে।',
      'গ্যালভানোমিটারের ইলেক্ট্রোম্যাগনেটিক ড্যাম্পিং: চৌম্বক ক্ষেত্রে পরিবাহী ফ্রেমের ঘূর্ণনে আবিষ্ট এডি কারেন্ট মিটারের কাঁটার দোলন দ্রুত থামিয়ে দেয়।',
      'এডি কারেন্ট রেল ব্রেক ও ডায়নামোমিটার: দ্রুতগতির ট্রেনে কোনো যান্ত্রিক ঘর্ষণ ছাড়াই মসৃণ ইলেক্ট্রোম্যাগনেটিক ব্রেকিং।',
      'নন-ডিস্ট্রাকটিভ টেস্টিং (NDT): বিমানের কাঠামো ও পাইপলাইনের অভ্যন্তরীণ সূক্ষ্ম ফাটল শনাক্তকরণে এডি কারেন্ট প্রোব ব্যবহার।'
    ]
  },
  importantPoints: {
    en: [
      'Eddy-current loss formula: P_e = K_e · B_m² · f² · t² · V (Watts), scaling with the square of frequency, peak flux density, and lamination thickness.',
      'Lenz\'s law governs direction: The circulating eddy currents flow in paths that create magnetic fields opposing the original flux change.',
      'Laminations must be parallel to flux paths: Insulating layers segment the transverse current loops without obstructing longitudinal magnetic flux.',
      'Silicon alloying increases core resistivity: Adding 3.2% to 4% silicon to electrical steel increases electrical resistivity ρ roughly fourfold, drastically choking eddy currents.',
      'Higher frequencies require advanced core materials: Thin laminations suffice up to a few kHz; radio frequencies (MHz) demand powdered iron or ferrite ceramics with very high resistivity.',
      'Thermal dissipation: Eddy currents always cause I²R Joule heating, which is parasitic in transformers and electric motors but utilized productively in induction heating.'
    ],
    hi: [
      'भंवर धारा हानि का सूत्र: P_e = K_e · B_m² · f² · t² · V (वाट), जो आवृत्ति, शीर्ष फ्लक्स घनत्व और मोटाई के वर्ग के समानुपाती होता है।',
      'लेंज़ का नियम: उत्पन्न भंवर धाराएं इस दिशा में बहती हैं कि वे मूल चुंबकीय फ्लक्स परिवर्तन का विरोध करती हैं।',
      'लैमिनेशन सदैव फ्लक्स रेखाओं के समानांतर होनी चाहिए: इंसुलेशन परतें धारा लूपों को तोड़ती हैं जबकि चुंबकीय फ्लक्स को बाधित नहीं करतीं।',
      'सिलिकॉन स्टील की भूमिका: 3.2% से 4% सिलिकॉन मिलाने से विद्युत प्रतिरोधकता लगभग 4 गुना बढ़ जाती है, जिससे भंवर धाराएं काफी घट जाती हैं।',
      'उच्च आवृत्तियों पर कोर सामग्री: कुछ kHz तक पतली लैमिनेशन काम करती हैं, परंतु MHz आवृत्तियों पर फेराइट या पाउडर कोर की आवश्यकता होती है।',
      'तापीय ऊर्जा में रूपांतरण: भंवर धाराएं हमेशा I²R ऊष्मा उत्पन्न करती हैं, जो मोटरों में अवांछनीय हानि है परंतु इंडक्शन हीटिंग में उपयोगी है।'
    ],
    bn: [
      'এডি কারেন্ট অপচয়ের সূত্র: P_e = K_e · B_m² · f² · t² · V (ওয়াট), যা কম্পাঙ্ক, সর্বোচ্চ ফ্লাক্স ঘনত্ব এবং ল্যামিনেশন বেধের বর্গের সমানুপাতিক।',
      'লেঞ্জের সূত্র প্রয়োগ: আবিষ্ট ঘূর্ণি প্রবাহ এমন দিকে চলে যা মূল ফ্লাক্স পরিবর্তনের বিরুদ্ধে বাধা সৃষ্টি করে।',
      'ল্যামিনেশন সর্বদা ফ্লাক্সের সমান্তরালে স্থাপন করতে হয়: এতে অন্তরিত স্তরগুলো অনুপ্রস্থ কারেন্ট লুপ ভেঙে দেয় কিন্তু অনুদৈর্ঘ্য ফ্লাক্স প্রবাহ অক্ষুণ্ণ রাখে।',
      'সিলিকন স্টিলের ভূমিকা: ৩.২% থেকে ৪% সিলিকন যোগ করলে উপাদানের রোধ প্রায় ৪ গুণ বৃদ্ধি পায়, যা এডি কারেন্ট অনেক কমিয়ে দেয়।',
      'উচ্চ কম্পাঙ্কে বিশেষ কোর: কয়েক kHz পর্যন্ত পাতলা ল্যামিনেশন কার্যকর হলেও MHz কম্পাঙ্কে ফেরাইট বা গুঁড়া লোহার কোর ব্যবহার বাধ্যতামূলক।',
      'জুল তাপীয় অপচয়: এডি কারেন্ট সর্বদা I²R তাপে রূপান্তরিত হয়, যা ট্রান্সফরমার বা মোটরে ক্ষতিকর কিন্তু ইন্ডাকশন হিটিংয়ে ফলপ্রসূ।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing eddy current loss (P_e ∝ f² · B_m²) with hysteresis loss (P_h ∝ f · B_m¹·⁶): Eddy loss scales with the square of frequency, while hysteresis loss scales linearly with frequency.',
      'Assuming lamination reduces magnetic flux: Thin varnish or oxide insulation only blocks electrical conduction between plates; total magnetic cross-section remains essentially preserved.',
      'Orienting laminations perpendicular to flux lines: This creates high reluctance air gaps in the magnetic circuit, ruining core permeability and drawing excessive magnetizing current.',
      'Believing loss decreases linearly with thickness: Reducing thickness by half reduces eddy current loss to one-fourth (1/4) due to the quadratic t² relationship.'
    ],
    hi: [
      'भंवर धारा हानि (P_e ∝ f² · B_m²) और हिस्टैरिसीस हानि (P_h ∝ f · B_m¹·⁶) में भ्रम: भंवर हानि आवृत्ति के वर्ग पर निर्भर करती है जबकि हिस्टैरिसीस हानि रैखिक रूप से।',
      'यह सोचना कि लैमिनेशन से चुंबकीय फ्लक्स घट जाता है: वार्निश केवल विद्युत प्रवाह को रोकती है, चुंबकीय पथ अप्रभावित रहता है।',
      'लैमिनेशन को फ्लक्स रेखाओं के लंबवत लगाना: ऐसा करने से चुंबकीय परिपथ में वायु अंतराल बन जाते हैं और पारगम्यता नष्ट हो जाती है।',
      'यह मानना कि मोटाई घटाने से हानि रैखिक रूप से घटती है: t² संबंध के कारण मोटाई आधी करने पर हानि घटकर एक-चौथाई (1/4) रह जाती है।'
    ],
    bn: [
      'এডি কারেন্ট অপচয় (P_e ∝ f² · B_m²) এবং হিস্টেরেসিস অপচয়ের (P_h ∝ f · B_m¹·⁶) মধ্যে বিভ্রান্তি: এডি অপচয় কম্পাঙ্কের বর্গের সাথে এবং হিস্টেরেসিস সরল অনুপাতে বাড়ে।',
      'ভাবা যে ল্যামিনেশন করলে চৌম্বক ফ্লাক্স কমে যায়: পাতলা বার্নিশ স্তর কেবল বৈদ্যুতিক সংযোগ বিচ্ছিন্ন করে, কোরের চৌম্বকীয় ক্ষমতা অক্ষুণ্ণ থাকে।',
      'ল্যামিনেশনকে চৌম্বক বলরেখার সাথে লম্বালম্বি বসানো: এর ফলে চৌম্বক বর্তনীতে অতিরিক্ত রিল্যাক্ট্যান্স তৈরি হয়ে কোর কার্যকারিতা হারায়।',
      'বেধের সাথে রৈখিক সম্পর্কের ভ্রান্ত ধারণা: t² সূত্রের কারণে ল্যামিনেশন বেধ অর্ধেক করলে অপচয় কমে এক-চতুর্থাংশ (১/৪) হয়।'
    ]
  },
  keyTakeaways: {
    en: [
      'Eddy currents are closed loops of induced current circulating in conductive material subjected to time-varying magnetic fields.',
      'Power loss scales quadratically with lamination thickness (P_e ∝ t²), making thin laminations the primary defense in electrical machines.',
      'Resistivity enhancement via silicon alloying (3-4% Si) provides an additional factor-of-four reduction in eddy losses.',
      'Laminations must be electrically insulated with surface varnish, carlite, or oxide coats and oriented strictly parallel to magnetic flux lines.',
      'While mitigated in transformers and stators, eddy currents are actively harnessed in induction heating, magnetic damping, and contactless railway brakes.'
    ],
    hi: [
      'भंवर धाराएं समय के साथ बदलते चुंबकीय क्षेत्र में रखे गए सुचालक पदार्थों के भीतर बहने वाली संवृत विद्युत धाराएं हैं।',
      'तापीय हानि लैमिनेशन की मोटाई के वर्ग (P_e ∝ t²) के अनुपात में घटती है, जिससे पतली पत्तियां उपयोग करना सबसे प्रभावी उपाय है।',
      '3-4% सिलिकॉन मिलाने से विद्युत प्रतिरोधकता बढ़ती है, जिससे भंवर धारा हानि में भारी कमी आती है।',
      'लैमिनेशन प्लेटों पर वार्निश या ऑक्साइड इंसुलेशन होना चाहिए और उन्हें सदैव चुंबकीय फ्लक्स के समानांतर रखना चाहिए।',
      'ट्रांसफॉर्मर में अवांछनीय होने के बावजूद भंवर धाराओं का उपयोग इंडक्शन हीटिंग, मीटर डैम्पिंग और रेल ब्रेक में लाभकारी रूप से किया जाता है।'
    ],
    bn: [
      'পরিবর্তনশীল চৌম্বক ক্ষেত্রে অবস্থিত কোনো পরিবাহীর অভ্যন্তরে আবিষ্ট বদ্ধ ঘূর্ণি বিদ্যুৎ প্রবাহই হলো এডি কারেন্ট।',
      'ল্যামিনেশনের পুরুত্বের বর্গের অনুপাতে (P_e ∝ t²) অপচয় হ্রাস পায়, তাই পাতলা পাতের স্ট্যাক ব্যবহার সবচেয়ে মোক্ষম কৌশল।',
      'লোহার সাথে ৩-৪% সিলিকন সংকর করলে রোধ ক্ষমতা বৃদ্ধি পেয়ে এডি কারেন্ট প্রবাহ বহুগুণ রোধ করে।',
      'ল্যামিনেশন পাতগুলোকে বার্নিশ দ্বারা অন্তরিত রাখতে হয় এবং সর্বদা চৌম্বক বলরেখার সমান্তরালে স্থাপন করতে হয়।',
      'যন্ত্রপাতিতে এডি কারেন্ট কমানো হলেও ইন্ডাকশন হিটিং, মিটার ড্যাম্পিং এবং রেল ব্রেকিংয়ে একে কার্যকরভাবে কাজে লাগানো হয়।'
    ]
  },
  mcqs: [
    {
      id: "q-eddy-1",
      question: {
        en: "If the thickness of a transformer lamination is halved (t_new = t / 2) while keeping frequency and flux density constant, the eddy current loss will:",
        hi: "यदि आवृत्ति और फ्लक्स घनत्व स्थिर रखते हुए ट्रांसफॉर्मर लैमिनेशन की मोटाई आधी (t/2) कर दी जाए, तो भंवर धारा हानि होगी:",
        bn: "কম্পাঙ্ক ও ফ্লাক্স ঘনত্ব অপরিবর্তিত রেখে ট্রান্সফরমার ল্যামিনেশনের পুরুত্ব অর্ধেক (t/2) করা হলে এডি কারেন্ট অপচয় হবে:"
      },
      options: [
        { id: "opt-1", text: { en: "Double (2x)", hi: "दोगुनी (2x)", bn: "দ্বিগুণ (2x)" } },
        { id: "opt-2", text: { en: "Halve (0.5x)", hi: "आधी (0.5x)", bn: "অর্ধেক (0.5x)" } },
        { id: "opt-3", text: { en: "Reduce to one-fourth (0.25x)", hi: "एक-चौथाई (0.25x)", bn: "এক-চতুর্থাংশ (0.25x)" } },
        { id: "opt-4", text: { en: "Remain unchanged", hi: "अपरिवर्तित रहेगी", bn: "অপরিবর্তিত থাকবে" } }
      ],
      correctOptionId: "opt-3",
      explanation: {
        en: "Because eddy current loss depends on the square of thickness (P_e ∝ t²), halving thickness results in (1/2)² = 1/4 of the original loss.",
        hi: "चूंकि भंवर धारा हानि मोटाई के वर्ग (P_e ∝ t²) के समानुपाती होती है, अतः मोटाई आधी करने पर हानि (1/2)² = 1/4 रह जाती है।",
        bn: "যেহেতু এডি কারেন্ট অপচয় বেধের বর্গের সমানুপাতিক (P_e ∝ t²), তাই বেধ অর্ধেক করলে অপচয় (১/২)² = ১/৪ ভাগে হ্রাস পায়।"
      }
    },
    {
      id: "q-eddy-2",
      question: {
        en: "Why is silicon (approx. 3-4%) added to low-carbon electrical steel used in transformer cores?",
        hi: "ट्रांसफॉर्मर कोर में उपयोग किए जाने वाले कम कार्बन वाले स्टील में सिलिकॉन (लगभग 3-4%) क्यों मिलाया जाता है?",
        bn: "ট্রান্সফরমারের কোরে ব্যবহৃত স্টিলে প্রায় ৩-৪% সিলিকন মেশানোর কারণ কী?"
      },
      options: [
        { id: "opt-1", text: { en: "To increase electrical resistivity and decrease eddy current loss", hi: "विद्युत प्रतिरोधकता बढ़ाने और भंवर धारा हानि घटाने के लिए", bn: "বৈদ্যুতিক রোধ বৃদ্ধি করে এডি কারেন্ট অপচয় কমানোর জন্য" } },
        { id: "opt-2", text: { en: "To make the steel mechanically flexible and ductile", hi: "स्टील को यांत्रिक रूप से लचीला बनाने के लिए", bn: "স্টিলকে নমনীয় করার জন্য" } },
        { id: "opt-3", text: { en: "To eliminate the need for surface varnish insulation", hi: "वार्निश इंसुलेशन की आवश्यकता समाप्त करने के लिए", bn: "বার্নিশ ইন্সুলেশনের প্রয়োজনীয়তা দূর করতে" } },
        { id: "opt-4", text: { en: "To double the maximum magnetic saturation density", hi: "अधिकतम चुंबकीय संतृप्ति घनत्व को दोगुना करने के लिए", bn: "সর্বোচ্চ চৌম্বক সম্পৃক্তি দ্বিগুণ করতে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Adding silicon increases electrical resistivity ρ by roughly four times, substantially choking circulating eddy currents without compromising magnetic permeability.",
        hi: "सिलिकॉन मिलाने से विद्युत प्रतिरोधकता ρ लगभग 4 गुना बढ़ जाती है, जिससे चुंबकीय पारगम्यता प्रभावित किए बिना भंवर धाराएं काफी कम हो जाती हैं।",
        bn: "সিলিকন যোগ করলে উপাদানের বৈদ্যুতিক রোধ প্রায় ৪ গুণ বৃদ্ধি পায়, যা চৌম্বক প্রবেশ্যতা নষ্ট না করেই এডি প্রবাহকে কার্যকরভাবে হ্রাস করে।"
      }
    },
    {
      id: "q-eddy-3",
      question: {
        en: "If a transformer core is operated at a 20% higher frequency (1.2f) with constant maximum flux density B_m, eddy current loss increases by:",
        hi: "यदि अधिकतम फ्लक्स घनत्व B_m को स्थिर रखते हुए किसी ट्रांसफॉर्मर को 20% अधिक आवृत्ति (1.2f) पर चलाया जाए, तो भंवर धारा हानि कितनी बढ़ेगी?",
        bn: "সর্বোচ্চ ফ্লাক্স ঘনত্ব B_m স্থির রেখে ট্রান্সফরমারকে ২০% বেশি কম্পাঙ্কে (১.২f) পরিচালনা করলে এডি কারেন্ট অপচয় বৃদ্ধি পাবে:"
      },
      options: [
        { id: "opt-1", text: { en: "20%", hi: "20%", bn: "২০%" } },
        { id: "opt-2", text: { en: "44%", hi: "44%", bn: "৪৪%" } },
        { id: "opt-3", text: { en: "144%", hi: "144%", bn: "১৪৪%" } },
        { id: "opt-4", text: { en: "0%", hi: "0%", bn: "০%" } }
      ],
      correctOptionId: "opt-2",
      explanation: {
        en: "Eddy current loss is proportional to f² (P_e ∝ f²). For 1.2f, (1.2)² = 1.44, representing a 44% increase in loss.",
        hi: "भंवर धारा हानि आवृत्ति के वर्ग (P_e ∝ f²) के समानुपाती होती है। अतः (1.2)² = 1.44, अर्थात् 44% की वृद्धि।",
        bn: "এডি কারেন্ট অপচয় f² এর সমানুপাতিক। (১.২)² = ১.৪৪, অর্থাৎ অপচয় ৪৪% বৃদ্ধি পায়।"
      }
    },
    {
      id: "mcq-ch10-l10-04",
      question: {
        en: "How does splitting a solid iron core of thickness D into N insulated laminations of thickness t = D / N affect the total eddy current loss?",
        hi: "D मोटाई के एक ठोस लोहे के कोर को t = D / N मोटाई की N इंसुलेटेड पत्तियों में बांटने से कुल भंवर धारा हानि पर क्या प्रभाव पड़ता है?",
        bn: "D পুরুত্বের একটি নিরেট লোহার কোরকে t = D / N পুরুত্বের N সংখ্যক অন্তরিত পাতে ভাগ করলে মোট এডি কারেন্ট অপচয়ে কী প্রভাব পড়ে?"
      },
      options: [
        { id: "opt-1", text: { en: "Loss is reduced by a factor of 1 / N²", hi: "हानि 1 / N² के अनुपात में घट जाती है", bn: "অপচয় ১ / N² গুণ হ্রাস পায়" } },
        { id: "opt-2", text: { en: "Loss is reduced by a factor of 1 / N", hi: "हानि 1 / N घटती है", bn: "অপচয় ১ / N গুণ কমে" } },
        { id: "opt-3", text: { en: "Loss remains completely unchanged", hi: "हानि अपरिवर्तित रहती है", bn: "অপচয় অপরিবর্তিত থাকে" } },
        { id: "opt-4", text: { en: "Loss increases by N²", hi: "हानि N² गुना बढ़ जाती है", bn: "অপচয় N² গুণ বৃদ্ধি পায়" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "The loss per lamination scales as t² = (D/N)². Across N laminations, total loss scales as N × (D/N)² = D² / N = (Solid Loss) / N².",
        hi: "प्रत्येक पत्ती की हानि (D/N)² के अनुसार घटती है। N पत्तियों की कुल हानि 1/N² रह जाती है।",
        bn: "প্রতিটি পাতের ক্ষতি (D/N)² হারে কমে। N সংখ্যক পাতের মোট ক্ষতি ১/N² অংশে নেমে আসে।"
      }
    },
    {
      id: "mcq-ch10-l10-05",
      question: {
        en: "What orientation must core laminations have relative to the magnetic flux lines in a transformer or motor armature?",
        hi: "ट्रांसफॉर्मर या मोटर में चुंबकीय फ्लक्स रेखाओं के सापेक्ष कोर लैमिनेशन किस दिशा में होनी चाहिए?",
        bn: "ট্রান্সফরমার বা মোটরে চৌম্বক ফ্লাক্স রেখার সাপেক্ষে কোর ল্যামিনেশন কোন অভিমুখে স্থাপন করা আবশ্যক?"
      },
      options: [
        { id: "opt-1", text: { en: "Parallel to the magnetic flux lines", hi: "चुंबकीय फ्लक्स रेखाओं के समानांतर", bn: "চৌম্বক ফ্লাক্স রেখার সমান্তরালে" } },
        { id: "opt-2", text: { en: "Perpendicular to the magnetic flux lines", hi: "चुंबकीय फ्लक्स रेखाओं के लंबवत", bn: "চৌম্বক ফ্লাক্স রেখার সাথে লম্বভাবে" } },
        { id: "opt-3", text: { en: "At a 45-degree diagonal angle", hi: "45 डिग्री के विकर्ण कोण पर", bn: "৪৫ ডিগ্রি কোণে তির্যকভাবে" } },
        { id: "opt-4", text: { en: "Random orientation without any preferred axis", hi: "बिना किसी निश्चित अक्ष के यादृच्छिक रूप से", bn: "যেকোনো এলোমেলো অভিমুখে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Laminations must lie parallel to flux so that the magnetic circuit is unhindered while the eddy currents (which circulate perpendicular to flux) encounter the insulating varnish barriers.",
        hi: "पत्तियां फ्लक्स के समानांतर रखी जाती हैं ताकि फ्लक्स आसानी से बहे और लंबवत घूमने वाली भंवर धाराओं को इंसुलेशन रोक सके।",
        bn: "ল্যামিনেশনগুলো অবশ্যই ফ্লাক্সের সমান্তরালে থাকতে হয় যাতে ফ্লাক্স নির্বিঘ্নে যায় কিন্তু লম্বভাবে ঘুরতে চাওয়া এডি কারেন্ট ইনসুলেশনে বাধা পায়।"
      }
    },
    {
      id: "mcq-ch10-l10-06",
      question: {
        en: "What typical thickness range is standard for cold-rolled silicon steel core laminations used in 50 Hz/60 Hz power transformers?",
        hi: "50 Hz/60 Hz पावर ट्रांसफॉर्मर में प्रयुक्त कोल्ड-रोल्ड सिलिकॉन स्टील पत्तियों की सामान्य मोटाई सीमा क्या होती है?",
        bn: "৫০ Hz/৬০ Hz পাওয়ার ট্রান্সফরমারে ব্যবহৃত কোল্ড-রোল্ড সিলিকন স্টিল ল্যামিনেশনের স্বাভাবিক পুরুত্ব কত?"
      },
      options: [
        { id: "opt-1", text: { en: "0.23 mm to 0.35 mm", hi: "0.23 mm से 0.35 mm", bn: "০.২৩ মিমি থেকে ০.৩৫ মিমি" } },
        { id: "opt-2", text: { en: "2.0 mm to 5.0 mm", hi: "2.0 mm से 5.0 mm", bn: "২.০ মিমি থেকে ৫.০ মিমি" } },
        { id: "opt-3", text: { en: "10 mm to 25 mm", hi: "10 mm से 25 mm", bn: "১০ মিমি থেকে ২৫ মিমি" } },
        { id: "opt-4", text: { en: "0.001 mm (1 micrometer)", hi: "0.001 mm (1 माइक्रोमीटर)", bn: "০.০০১ মিমি (১ মাইক্রোমিটার)" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Commercial power transformers at 50/60 Hz standardly employ 0.23 mm to 0.35 mm (e.g., M4, 27M4 grades) CRGO sheets to balance manufacturing punching costs with minimal eddy losses.",
        hi: "व्यावसायिक ट्रांसफॉर्मर में आम तौर पर 0.23 mm से 0.35 mm मोटाई की सिलिकॉन स्टील शीट उपयोग की जाती हैं।",
        bn: "বাণিজ্যিক পাওয়ার ট্রান্সফরমারে সাধারণত ০.২৩ মিমি থেকে ০.৩৫ মিমি পুরুত্বের সিলিকন স্টিল শিট ব্যবহৃত হয়।"
      }
    },
    {
      id: "mcq-ch10-l10-07",
      question: {
        en: "Why is adding more than 4.5% silicon to electrical steel avoided in commercial transformer sheet manufacturing?",
        hi: "इलेक्ट्रिकल स्टील में 4.5% से अधिक सिलिकॉन मिलाना व्यावसायिक निर्माण में क्यों टाला जाता है?",
        bn: "ইলেকট্রিক্যাল স্টিলে ৪.৫% এর বেশি সিলিকন মেশানো বাণিজ্যিক উৎপাদনে কেন এড়িয়ে চলা হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "It makes the alloy excessively brittle and difficult to punch or shear without cracking", hi: "यह मिश्र धातु को अत्यधिक भंगुर बना देता है जिससे काटना या पंच करना कठिन हो जाता है", bn: "এটি সংকর ধাতুকে অত্যন্ত ভঙ্গুর করে তোলে ফলে কাটার সময় ফাটল ধরে" } },
        { id: "opt-2", text: { en: "Silicon makes the steel permanently radioactive", hi: "सिलिकॉन स्टील को रेडियोधर्मी बना देता है", bn: "সিলিকন স্টিলকে তেজস্ক্রিয় বানায়" } },
        { id: "opt-3", text: { en: "It reduces electrical resistance to zero", hi: "यह विद्युत प्रतिरोध को शून्य कर देता है", bn: "এটি বৈদ্যুতিক রোধ শূন্যে নামিয়ে দেয়" } },
        { id: "opt-4", text: { en: "It makes the steel transparent to magnetic fields", hi: "यह स्टील को चुंबकीय क्षेत्र के लिए पारदर्शी बनाता है", bn: "এটি স্টিলকে চৌম্বক ক্ষেত্রের জন্য স্বচ্ছ করে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Beyond 4.5% Si, steel becomes extremely brittle at room temperature, making standard cold rolling, shearing, and stamping operations practically impossible without blade shattering and sheet cracking.",
        hi: "4.5% से अधिक सिलिकॉन स्टील को बहुत भंगुर बना देता है, जिससे शीट काटना और पंच करना असंभव हो जाता है।",
        bn: "৪.৫% এর বেশি সিলিকন স্টিলকে অত্যন্ত ভঙ্গুর বানিয়ে ফেলে, ফলে ঠান্ডা অবস্থায় এটি কাটা বা ছিদ্র করা অসম্ভব হয়ে পড়ে।"
      }
    },
    {
      id: "mcq-ch10-l10-08",
      question: {
        en: "What modern non-crystalline core material achieves up to 70% lower eddy current and core losses than conventional silicon steel?",
        hi: "पारंपरिक सिलिकॉन स्टील की तुलना में कौन सा आधुनिक अक्रिस्टलीय पदार्थ 70% कम कोर हानि देता है?",
        bn: "গতানুগতিক সিলিকন স্টিলের চেয়ে ৭০% পর্যন্ত কম কোর অপচয় ঘটায় কোন আধুনিক অনিয়তাকার উপাদান?"
      },
      options: [
        { id: "opt-1", text: { en: "Amorphous metal alloys (metallic glasses with ribbon thickness ~0.025 mm)", hi: "अक्रिस्टलीय धातु मिश्र धातु (मेटालिक ग्लास रिबन मोटाई ~0.025 mm)", bn: "অ্যামোরফাস ধাতু বা মেটালিক গ্লাস (পাতলা রিবন পুরুত্ব ~০.০২৫ মিমি)" } },
        { id: "opt-2", text: { en: "Pure solid cast copper", hi: "शुद्ध ठोस ढलवां तांबा", bn: "বিশুদ্ধ নিরেট ঢালাই তামা" } },
        { id: "opt-3", text: { en: "Cast iron blocks", hi: "कच्चा लोहा (कास्ट आयरन)", bn: "ঢালাই লোহার নিরেট ব্লক" } },
        { id: "opt-4", text: { en: "Solid carbon graphite rods", hi: "ठोस कार्बन ग्रेफाइट छड़ें", bn: "নিরেট কার্বন গ্রাফাইট রড" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Amorphous metal alloys have a non-crystalline atomic structure with ultra-thin ribbon geometry (~25 µm) and high electrical resistivity, cutting core losses by up to 70-80% in distribution transformers.",
        hi: "अक्रिस्टलीय धातु (मेटालिक ग्लास) अत्यधिक पतली (~25 µm) और उच्च प्रतिरोधकता वाली होती हैं, जो कोर हानि 70% तक घटा देती हैं।",
        bn: "অ্যামোরফাস মেটালের অনিয়তাকার পারমাণবিক গঠন, পাতলা ফিতা (~২৫ µm) এবং উচ্চ রোধকত্ব কোর লস ৭০% পর্যন্ত কমিয়ে দেয়।"
      }
    }
  ],
  mcqQuestions: [
    {
      id: "q-eddy-1",
      question: {
        en: "If the thickness of a transformer lamination is halved (t_new = t / 2) while keeping frequency and flux density constant, the eddy current loss will:",
        hi: "यदि आवृत्ति और फ्लक्स घनत्व स्थिर रखते हुए ट्रांसफॉर्मर लैमिनेशन की मोटाई आधी (t/2) कर दी जाए, तो भंवर धारा हानि होगी:",
        bn: "কম্পাঙ্ক ও ফ্লাক্স ঘনত্ব অপরিবর্তিত রেখে ট্রান্সফরমার ল্যামিনেশনের পুরুত্ব অর্ধেক (t/2) করা হলে এডি কারেন্ট অপচয় হবে:"
      },
      options: [
        { id: "opt-1", text: { en: "Double (2x)", hi: "दोगुनी (2x)", bn: "দ্বিগুণ (2x)" } },
        { id: "opt-2", text: { en: "Halve (0.5x)", hi: "आधी (0.5x)", bn: "অর্ধেক (0.5x)" } },
        { id: "opt-3", text: { en: "Reduce to one-fourth (0.25x)", hi: "एक-चौथाई (0.25x)", bn: "এক-চতুর্থাংশ (0.25x)" } },
        { id: "opt-4", text: { en: "Remain unchanged", hi: "अपरिवर्तित रहेगी", bn: "অপরিবর্তিত থাকবে" } }
      ],
      correctOptionId: "opt-3",
      explanation: {
        en: "Because eddy current loss depends on the square of thickness (P_e ∝ t²), halving thickness results in (1/2)² = 1/4 of the original loss.",
        hi: "चूंकि भंवर धारा हानि मोटाई के वर्ग (P_e ∝ t²) के समानुपाती होती है, अतः मोटाई आधी करने पर हानि (1/2)² = 1/4 रह जाती है।",
        bn: "যেহেতু এডি কারেন্ট অপচয় বেধের বর্গের সমানুপাতিক (P_e ∝ t²), তাই বেধ অর্ধেক করলে অপচয় (১/২)² = ১/৪ ভাগে হ্রাস পায়।"
      }
    },
    {
      id: "q-eddy-2",
      question: {
        en: "Why is silicon (approx. 3-4%) added to low-carbon electrical steel used in transformer cores?",
        hi: "ट्रांसफॉर्मर कोर में उपयोग किए जाने वाले कम कार्बन वाले स्टील में सिलिकॉन (लगभग 3-4%) क्यों मिलाया जाता है?",
        bn: "ট্রান্সফরমারের কোরে ব্যবহৃত স্টিলে প্রায় ৩-৪% সিলিকন মেশানোর কারণ কী?"
      },
      options: [
        { id: "opt-1", text: { en: "To increase electrical resistivity and decrease eddy current loss", hi: "विद्युत प्रतिरोधकता बढ़ाने और भंवर धारा हानि घटाने के लिए", bn: "বৈদ্যুতিক রোধ বৃদ্ধি করে এডি কারেন্ট অপচয় কমানোর জন্য" } },
        { id: "opt-2", text: { en: "To make the steel mechanically flexible and ductile", hi: "स्टील को यांत्रिक रूप से लचीला बनाने के लिए", bn: "স্টিলকে নমনীয় করার জন্য" } },
        { id: "opt-3", text: { en: "To eliminate the need for surface varnish insulation", hi: "वार्निश इंसुलेशन की आवश्यकता समाप्त करने के लिए", bn: "বার্নিশ ইন্সুলেশনের প্রয়োজনীয়তা দূর করতে" } },
        { id: "opt-4", text: { en: "To double the maximum magnetic saturation density", hi: "अधिकतम चुंबकीय संतृप्ति घनत्व को दोगुना करने के लिए", bn: "সর্বোচ্চ চৌম্বক সম্পৃক্তি দ্বিগুণ করতে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Adding silicon increases electrical resistivity ρ by roughly four times, substantially choking circulating eddy currents without compromising magnetic permeability.",
        hi: "सिलिकॉन मिलाने से विद्युत प्रतिरोधकता ρ लगभग 4 गुना बढ़ जाती है, जिससे चुंबकीय पारगम्यता प्रभावित किए बिना भंवर धाराएं काफी कम हो जाती हैं।",
        bn: "সিলিকন যোগ করলে উপাদানের বৈদ্যুতিক রোধ প্রায় ৪ গুণ বৃদ্ধি পায়, যা চৌম্বক প্রবেশ্যতা নষ্ট না করেই এডি প্রবাহকে কার্যকরভাবে হ্রাস করে।"
      }
    },
    {
      id: "q-eddy-3",
      question: {
        en: "If a transformer core is operated at a 20% higher frequency (1.2f) with constant maximum flux density B_m, eddy current loss increases by:",
        hi: "यदि अधिकतम फ्लक्स घनत्व B_m को स्थिर रखते हुए किसी ट्रांसफॉर्मर को 20% अधिक आवृत्ति (1.2f) पर चलाया जाए, तो भंवर धारा हानि कितनी बढ़ेगी?",
        bn: "সর্বোচ্চ ফ্লাক্স ঘনত্ব B_m স্থির রেখে ট্রান্সফরমারকে ২০% বেশি কম্পাঙ্কে (১.২f) পরিচালনা করলে এডি কারেন্ট অপচয় বৃদ্ধি পাবে:"
      },
      options: [
        { id: "opt-1", text: { en: "20%", hi: "20%", bn: "২০%" } },
        { id: "opt-2", text: { en: "44%", hi: "44%", bn: "৪৪%" } },
        { id: "opt-3", text: { en: "144%", hi: "144%", bn: "১৪৪%" } },
        { id: "opt-4", text: { en: "0%", hi: "0%", bn: "০%" } }
      ],
      correctOptionId: "opt-2",
      explanation: {
        en: "Eddy current loss is proportional to f² (P_e ∝ f²). For 1.2f, (1.2)² = 1.44, representing a 44% increase in loss.",
        hi: "भंवर धारा हानि आवृत्ति के वर्ग (P_e ∝ f²) के समानुपाती होती है। अतः (1.2)² = 1.44, अर्थात् 44% की वृद्धि।",
        bn: "এডি কারেন্ট অপচয় f² এর সমানুপাতিক। (১.২)² = ১.৪৪, অর্থাৎ অপচয় ৪৪% বৃদ্ধি পায়।"
      }
    },
    {
      id: "mcq-ch10-l10-04",
      question: {
        en: "How does splitting a solid iron core of thickness D into N insulated laminations of thickness t = D / N affect the total eddy current loss?",
        hi: "D मोटाई के एक ठोस लोहे के कोर को t = D / N मोटाई की N इंसुलेटेड पत्तियों में बांटने से कुल भंवर धारा हानि पर क्या प्रभाव पड़ता है?",
        bn: "D পুরুত্বের একটি নিরেট লোহার কোরকে t = D / N পুরুত্বের N সংখ্যক অন্তরিত পাতে ভাগ করলে মোট এডি কারেন্ট অপচয়ে কী প্রভাব পড়ে?"
      },
      options: [
        { id: "opt-1", text: { en: "Loss is reduced by a factor of 1 / N²", hi: "हानि 1 / N² के अनुपात में घट जाती है", bn: "অপচয় ১ / N² গুণ হ্রাস পায়" } },
        { id: "opt-2", text: { en: "Loss is reduced by a factor of 1 / N", hi: "हानि 1 / N घटती है", bn: "অপচয় ১ / N গুণ কমে" } },
        { id: "opt-3", text: { en: "Loss remains completely unchanged", hi: "हानि अपरिवर्तित रहती है", bn: "অপচয় অপরিবর্তিত থাকে" } },
        { id: "opt-4", text: { en: "Loss increases by N²", hi: "हानि N² गुना बढ़ जाती है", bn: "অপচয় N² গুণ বৃদ্ধি পায়" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "The loss per lamination scales as t² = (D/N)². Across N laminations, total loss scales as N × (D/N)² = D² / N = (Solid Loss) / N².",
        hi: "प्रत्येक पत्ती की हानि (D/N)² के अनुसार घटती है। N पत्तियों की कुल हानि 1/N² रह जाती है।",
        bn: "প্রতিটি পাতের ক্ষতি (D/N)² হারে কমে। N সংখ্যক পাতের মোট ক্ষতি ১/N² অংশে নেমে আসে।"
      }
    },
    {
      id: "mcq-ch10-l10-05",
      question: {
        en: "What orientation must core laminations have relative to the magnetic flux lines in a transformer or motor armature?",
        hi: "ट्रांसफॉर्मर या मोटर में चुंबकीय फ्लक्स रेखाओं के सापेक्ष कोर लैमिनेशन किस दिशा में होनी चाहिए?",
        bn: "ট্রান্সফরমার বা মোটরে চৌম্বক ফ্লাক্স রেখার সাপেক্ষে কোর ল্যামিনেশন কোন অভিমুখে স্থাপন করা আবশ্যক?"
      },
      options: [
        { id: "opt-1", text: { en: "Parallel to the magnetic flux lines", hi: "चुंबकीय फ्लक्स रेखाओं के समानांतर", bn: "চৌম্বক ফ্লাক্স রেখার সমান্তরালে" } },
        { id: "opt-2", text: { en: "Perpendicular to the magnetic flux lines", hi: "चुंबकीय फ्लक्स रेखाओं के लंबवत", bn: "চৌম্বক ফ্লাক্স রেখার সাথে লম্বভাবে" } },
        { id: "opt-3", text: { en: "At a 45-degree diagonal angle", hi: "45 डिग्री के विकर्ण कोण पर", bn: "৪৫ ডিগ্রি কোণে তির্যকভাবে" } },
        { id: "opt-4", text: { en: "Random orientation without any preferred axis", hi: "बिना किसी निश्चित अक्ष के यादृच्छिक रूप से", bn: "যেকোনো এলোমেলো অভিমুখে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Laminations must lie parallel to flux so that the magnetic circuit is unhindered while the eddy currents (which circulate perpendicular to flux) encounter the insulating varnish barriers.",
        hi: "पत्तियां फ्लक्स के समानांतर रखी जाती हैं ताकि फ्लक्स आसानी से बहे और लंबवत घूमने वाली भंवर धाराओं को इंसुलेशन रोक सके।",
        bn: "ল্যামিনেশনগুলো অবশ্যই ফ্লাক্সের সমান্তরালে থাকতে হয় যাতে ফ্লাক্স নির্বিঘ্নে যায় কিন্তু লম্বভাবে ঘুরতে চাওয়া এডি কারেন্ট ইনসুলেশনে বাধা পায়।"
      }
    },
    {
      id: "mcq-ch10-l10-06",
      question: {
        en: "What typical thickness range is standard for cold-rolled silicon steel core laminations used in 50 Hz/60 Hz power transformers?",
        hi: "50 Hz/60 Hz पावर ट्रांसफॉर्मर में प्रयुक्त कोल्ड-रोल्ड सिलिकॉन स्टील पत्तियों की सामान्य मोटाई सीमा क्या होती है?",
        bn: "৫০ Hz/৬০ Hz পাওয়ার ট্রান্সফরমারে ব্যবহৃত কোল্ড-রোল্ড সিলিকন স্টিল ল্যামিনেশনের স্বাভাবিক পুরুত্ব কত?"
      },
      options: [
        { id: "opt-1", text: { en: "0.23 mm to 0.35 mm", hi: "0.23 mm से 0.35 mm", bn: "০.২৩ মিমি থেকে ০.৩৫ মিমি" } },
        { id: "opt-2", text: { en: "2.0 mm to 5.0 mm", hi: "2.0 mm से 5.0 mm", bn: "২.০ মিমি থেকে ৫.০ মিমি" } },
        { id: "opt-3", text: { en: "10 mm to 25 mm", hi: "10 mm से 25 mm", bn: "১০ মিমি থেকে ২৫ মিমি" } },
        { id: "opt-4", text: { en: "0.001 mm (1 micrometer)", hi: "0.001 mm (1 माइक्रोमीटर)", bn: "০.০০১ মিমি (১ মাইক্রোমিটার)" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Commercial power transformers at 50/60 Hz standardly employ 0.23 mm to 0.35 mm (e.g., M4, 27M4 grades) CRGO sheets to balance manufacturing punching costs with minimal eddy losses.",
        hi: "व्यावसायिक ट्रांसफॉर्मर में आम तौर पर 0.23 mm से 0.35 mm मोटाई की सिलिकॉन स्टील शीट उपयोग की जाती हैं।",
        bn: "বাণিজ্যিক পাওয়ার ট্রান্সফরমারে সাধারণত ০.২৩ মিমি থেকে ০.৩৫ মিমি পুরুত্বের সিলিকন স্টিল শিট ব্যবহৃত হয়।"
      }
    },
    {
      id: "mcq-ch10-l10-07",
      question: {
        en: "Why is adding more than 4.5% silicon to electrical steel avoided in commercial transformer sheet manufacturing?",
        hi: "इलेक्ट्रिकल स्टील में 4.5% से अधिक सिलिकॉन मिलाना व्यावसायिक निर्माण में क्यों टाला जाता है?",
        bn: "ইলেকট্রিক্যাল স্টিলে ৪.৫% এর বেশি সিলিকন মেশানো বাণিজ্যিক উৎপাদনে কেন এড়িয়ে চলা হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "It makes the alloy excessively brittle and difficult to punch or shear without cracking", hi: "यह मिश्र धातु को अत्यधिक भंगुर बना देता है जिससे काटना या पंच करना कठिन हो जाता है", bn: "এটি সংকর ধাতুকে অত্যন্ত ভঙ্গুর করে তোলে ফলে কাটার সময় ফাটল ধরে" } },
        { id: "opt-2", text: { en: "Silicon makes the steel permanently radioactive", hi: "सिलिकॉन स्टील को रेडियोधर्मी बना देता है", bn: "সিলিকন স্টিলকে তেজস্ক্রিয় বানায়" } },
        { id: "opt-3", text: { en: "It reduces electrical resistance to zero", hi: "यह विद्युत प्रतिरोध को शून्य कर देता है", bn: "এটি বৈদ্যুতিক রোধ শূন্যে নামিয়ে দেয়" } },
        { id: "opt-4", text: { en: "It makes the steel transparent to magnetic fields", hi: "यह स्टील को चुंबकीय क्षेत्र के लिए पारदर्शी बनाता है", bn: "এটি স্টিলকে চৌম্বক ক্ষেত্রের জন্য স্বচ্ছ করে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Beyond 4.5% Si, steel becomes extremely brittle at room temperature, making standard cold rolling, shearing, and stamping operations practically impossible without blade shattering and sheet cracking.",
        hi: "4.5% से अधिक सिलिकॉन स्टील को बहुत भंगुर बना देता है, जिससे शीट काटना और पंच करना असंभव हो जाता है।",
        bn: "৪.৫% এর বেশি সিলিকন স্টিলকে অত্যন্ত ভঙ্গুর বানিয়ে ফেলে, ফলে ঠান্ডা অবস্থায় এটি কাটা বা ছিদ্র করা অসম্ভব হয়ে পড়ে।"
      }
    },
    {
      id: "mcq-ch10-l10-08",
      question: {
        en: "What modern non-crystalline core material achieves up to 70% lower eddy current and core losses than conventional silicon steel?",
        hi: "पारंपरिक सिलिकॉन स्टील की तुलना में कौन सा आधुनिक अक्रिस्टलीय पदार्थ 70% कम कोर हानि देता है?",
        bn: "গতানুগতিক সিলিকন স্টিলের চেয়ে ৭০% পর্যন্ত কম কোর অপচয় ঘটায় কোন আধুনিক অনিয়তাকার উপাদান?"
      },
      options: [
        { id: "opt-1", text: { en: "Amorphous metal alloys (metallic glasses with ribbon thickness ~0.025 mm)", hi: "अक्रिस्टलीय धातु मिश्र धातु (मेटालिक ग्लास रिबन मोटाई ~0.025 mm)", bn: "অ্যামোরফাস ধাতু বা মেটালিক গ্লাস (পাতলা রিবন পুরুত্ব ~০.০২৫ মিমি)" } },
        { id: "opt-2", text: { en: "Pure solid cast copper", hi: "शुद्ध ठोस ढलवां तांबा", bn: "বিশুদ্ধ নিরেট ঢালাই তামা" } },
        { id: "opt-3", text: { en: "Cast iron blocks", hi: "कच्चा लोहा (कास्ट आयरन)", bn: "ঢালাই লোহার নিরেট ব্লক" } },
        { id: "opt-4", text: { en: "Solid carbon graphite rods", hi: "ठोस कार्बन ग्रेफाइट छड़ें", bn: "নিরেট কার্বন গ্রাফাইট রড" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Amorphous metal alloys have a non-crystalline atomic structure with ultra-thin ribbon geometry (~25 µm) and high electrical resistivity, cutting core losses by up to 70-80% in distribution transformers.",
        hi: "अक्रिस्टलीय धातु (मेटालिक ग्लास) अत्यधिक पतली (~25 µm) और उच्च प्रतिरोधकता वाली होती हैं, जो कोर हानि 70% तक घटा देती हैं।",
        bn: "অ্যামোরফাস মেটালের অনিয়তাকার পারমাণবিক গঠন, পাতলা ফিতা (~২৫ µm) এবং উচ্চ রোধকত্ব কোর লস ৭০% পর্যন্ত কমিয়ে দেয়।"
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch10-l10-1',
      question: {
        en: 'A 50 Hz transformer has an eddy current loss of 400 W. If it is connected to a 60 Hz supply with identical maximum magnetic flux density B_m, calculate the new eddy current loss.',
        hi: '50 Hz के ट्रांसफॉर्मर में भंवर धारा हानि 400 W है। यदि इसे समान अधिकतम फ्लक्स घनत्व B_m के साथ 60 Hz आपूर्ति से जोड़ा जाए, तो नई भंवर धारा हानि की गणना कीजिए।',
        bn: '৫০ হার্টজের একটি ট্রান্সফরমারে এডি কারেন্ট অপচয় ৪০০ ওয়াট। সর্বোচ্চ ফ্লাক্স ঘনত্ব অপরিবর্তিত রেখে ৬০ হার্টজের লাইনে যুক্ত করলে নতুন এডি কারেন্ট অপচয় কত হবে?'
      },
      hint: {
        en: 'P_e ∝ f² when B_m is constant. Therefore, P_e2 = P_e1 × (f2 / f1)²',
        hi: 'जब B_m स्थिर हो तो P_e ∝ f² होता है। अतः P_e2 = P_e1 × (f2 / f1)²',
        bn: 'B_m স্থির থাকলে P_e ∝ f²। সুতরাং P_e2 = P_e1 × (f2 / f1)²'
      },
      answerKey: {
        en: 'P_e2 = 400 × (60 / 50)² = 400 × 1.44 = 576 Watts.',
        hi: 'P_e2 = 400 × (60 / 50)² = 400 × 1.44 = 576 वाट।',
        bn: 'P_e2 = ৪০০ × (৬০ / ৫০)² = ৪০০ × ১.৪৪ = ৫৭৬ ওয়াট।'
      }
    },
    {
      id: 'pq-ch10-l10-2',
      question: {
        en: 'Explain why ferrite cores are used in megahertz SMPS inductors rather than laminated steel sheets.',
        hi: 'स्पष्ट कीजिए कि मेगाहर्ट्ज़ आवृत्ति वाले SMPS प्रेरकों में लैमिनेटेड स्टील शीट के बजाय फेराइट कोर का उपयोग क्यों किया जाता है।',
        bn: 'মেগাহার্টজ কম্পাঙ্কের SMPS ইন্ডাক্টরে পাতলা ল্যামিনেশন স্টিলের পরিবর্তে কেন ফেরাইট কোর ব্যবহার করা হয় ব্যাখ্যা করুন।'
      },
      hint: {
        en: 'Consider the frequency squared term (f²) in MHz and the electrical resistivity ρ of ceramic oxides versus metals.',
        hi: 'मेगाहर्ट्ज में f² पद तथा धातु की तुलना में सिरेमिक ऑक्साइड की विद्युत प्रतिरोधकता ρ पर विचार करें।',
        bn: 'MHz সীমার f² পদ এবং ধাতুর তুলনায় সিরামিক অক্সাইড ফেরাইটের বৈদ্যুতিক রোধ ক্ষমতার তুলনা করুন।'
      },
      answerKey: {
        en: 'At frequencies in the 100 kHz - 10 MHz range, f² is 10⁸ to 10¹² times larger than at 50 Hz. Even razor-thin metal laminations (0.05 mm) would vaporize from eddy currents. Ferrites are ceramic magnetic insulators with resistivities 10⁶ to 10⁸ times higher than silicon steel, reducing eddy losses to virtually zero.',
        hi: '100 kHz से 10 MHz पर f² का मान 50 Hz की तुलना में खरबों गुना बढ़ जाता है। इतनी उच्च आवृत्ति पर धातु की पतली पत्तियां भी जल जाएंगी। फेराइट एक अचालक सिरेमिक पदार्थ है जिसकी प्रतिरोधकता स्टील से 10⁶ गुना अधिक होती है, जिससे भंवर धारा हानि नगण्य हो जाती है।',
        bn: '১০০ kHz থেকে ১০ MHz কম্পাঙ্কে f² এর মান বহুগুণ বৃদ্ধি পায়। ফলে ধাতব পাত অতিরিক্ত তাপে পুড়ে যাবে। ফেরাইট হলো সিরামিক অক্সাইড যার রোধ সাধারণ স্টিলের তুলনায় ১০⁶ গুণেরও বেশি, ফলে মেগাহার্টজ কম্পাঙ্কেও এডি কারেন্ট প্রায় শূন্য থাকে।'
      }
    }
  ]
};
