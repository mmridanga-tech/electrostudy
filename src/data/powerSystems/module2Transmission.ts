import { Chapter } from '../../types';

export const POWER_SYSTEMS_MODULE_2: Chapter = {
  id: 'ps-ch2-transmission',
  subjectId: 'power-systems',
  order: 2,
  title: {
    en: 'Module 2: Overhead Transmission Line Parameters & Modeling',
    hi: 'मॉड्यूल 2: ओवरहेड ट्रांसमिशन लाइन पैरामीटर एवं मॉडलिंग',
    bn: 'মডিউল ২: ওভারহেড সঞ্চালন লাইনের প্যারামিটার ও মডেলিং'
  },
  topics: [
    {
      id: 'ps-tp5-line-parameters',
      chapterId: 'ps-ch2-transmission',
      order: 1,
      level: 'Engineering',
      title: {
        en: '5. Line Constants: Resistance, Inductance (GMD/GMR) & Bundled Conductors',
        hi: '5. लाइन स्थिरांक: प्रतिरोध, प्रेरकत्व (GMD/GMR) एवं बंडल्ड कंडक्टर',
        bn: '৫. লাইন প্যারামিটার: রেজিস্ট্যান্স, ইন্ডাকট্যান্স (GMD/GMR) ও বান্ডল্ড কন্ডাক্টর'
      },
      description: {
        en: 'Skin effect, Proximity effect, Loop inductance, Geometric Mean Distance (GMD), Geometric Mean Radius (GMR), and ACSR Bundled conductors.',
        hi: 'स्किन प्रभाव, प्रॉक्सिमिटी प्रभाव, लूप प्रेरकत्व, GMD एवं GMR गणना तथा बंडल्ड कंडक्टर।',
        bn: 'স্কিন ইফেক্ট, প্রক্সিমিটি ইফেক্ট, GMD ও GMR হিসাব এবং ACSR বান্ডল্ড কন্ডাক্টর বিশ্লেষণ।'
      },
      lesson: {
        id: 'lesson-ps-tp5',
        topicId: 'ps-tp5-line-parameters',
        title: {
          en: 'Transmission Line Resistance, Inductance & GMD/GMR Method',
          hi: 'लाइन प्रतिरोध, प्रेरकत्व एवं GMD/GMR विधि',
          bn: 'লাইনের রেজিস্ট্যান্স, ইন্ডাকট্যান্স ও GMD/GMR পদ্ধতি'
        },
        description: {
          en: 'Mathematical formulation of overhead conductor inductance using self and mutual geometric mean distances.',
          hi: 'GMD एवं GMR विधि द्वारा ओवरहेड ट्रांसमिशन लाइन के प्रेरकत्व की सटीक गणना।',
          bn: 'GMD ও GMR পদ্ধতির সাহায্যে ওভারহেড সঞ্চালন লাইনের ইন্ডাকট্যান্স নির্ণয়ের গাণিতিক রূপ।'
        },
        detailedExplanation: {
          en: 'An overhead AC transmission line exhibits distributed parameters: series resistance (R), series inductance (L), shunt capacitance (C), and shunt conductance (G).\n\n1. AC Resistance & Skin Effect:\nIn AC lines, alternating magnetic flux inside the conductor creates eddy currents that oppose current in the inner core and reinforce it at the outer surface. This non-uniform current distribution increases effective AC resistance ($R_{ac} \\approx 1.2 \\text{ to } 1.3 \\times R_{dc}$) and is called the Skin Effect. Skin depth $\\delta = \\sqrt{\\frac{\\rho}{\\pi f \\mu}}$.\n\n2. Inductance & Flux Linkages:\nTotal inductance comprises internal flux linkage ($L_{int} = \\frac{\\mu_0}{8\\pi} = \\frac{1}{2} \\times 10^{-7} \\text{ H/m}$) and external flux linkage ($L_{ext} = 2 \\times 10^{-7} \\ln(D/r) \\text{ H/m}$).\nFor any 3-phase transposed overhead transmission line:\n$$L = 2 \\times 10^{-7} \\ln\\left(\\frac{D_m}{D_s}\\right) \\text{ H/m/phase} = 0.2 \\ln\\left(\\frac{\\text{GMD}}{\\text{GMR}}\\right) \\text{ mH/km/phase}$$\n- $\\text{GMD} = D_m = \\sqrt[3]{D_{ab} D_{bc} D_{ca}}$ (Geometric Mean Distance between phase centers)\n- $\\text{GMR} = D_s = r\' = r \\cdot e^{-1/4} = 0.7788 r$ (Self GMR for a solid round conductor)\n\n3. Bundled Conductors:\nHigh voltage lines (≥ 400 kV) use bundles of 2, 4, or 6 sub-conductors per phase separated by spacers. Bundling vastly increases effective phase GMR ($D_{s,bundle} = \\sqrt{d \\cdot r\'}$ for 2-bundle, $\\sqrt[4]{d^3 \\sqrt{2} \\cdot r\'}$ for 4-bundle), which substantially decreases line inductance, increases line capacitance, elevates Surge Impedance Loading (SIL), and suppresses corona discharge.',
          hi: '1. स्किन प्रभाव: AC में आंतरिक चुंबकीय फ्लक्स के कारण धारा कंडक्टर की बाहरी सतह पर केंद्रित हो जाती है, जिससे प्रभावी प्रतिरोध $R_{ac} > R_{dc}$ हो जाता है।\n2. प्रेरकत्व (Inductance): $L = 0.2 \\ln(\\text{GMD} / \\text{GMR})$ mH/km/phase। जहाँ GMD = $(D_{ab} D_{bc} D_{ca})^{1/3}$ और ठोस तार के लिए $\\text{GMR} = 0.7788 r$ होता है।\n3. बंडल्ड कंडक्टर: 400 kV या अधिक पर प्रति फेज 2 या 4 सब-कंडक्टर लगाने से GMR बढ़ता है, जिससे प्रेरकत्व घटता है, धारिता बढ़ती है और कोरोना प्रभाव कम होता है।',
          bn: '১. স্কিন ইফেক্ট: অল্টারনেটিং কারেন্টে চৌম্বক ফ্লাক্সের দরুন বিদ্যুৎ পরিবাহীর বহির্তলে কেন্দ্রীভূত হয়, যার ফলে কার্যকর এসি রেজিস্ট্যান্স ডিসির চেয়ে ২০-৩০% বৃদ্ধি পায়।\n২. ইন্ডাকট্যান্স: ৩-ফেজ লাইনের ক্ষেত্রে $L = ০.২ \\ln(\\text{GMD} / \\text{GMR})$ mH/km/phase। এখানে GMD = $\\sqrt[3]{D_{ab} D_{bc} D_{ca}}$ এবং সলিড কন্ডাক্টরের জন্য $\\text{GMR} = ০.৭৭৮৮ r$।\n৩. বান্ডল্ড কন্ডাক্টর: ৪০০ kV বা তার বেশি লাইনে প্রতি ফেজে একাধিক সাব-কন্ডাক্টর ব্যবহার করলে GMR বহুগুণ বাড়ে, ফলে লাইনের ইন্ডাকট্যান্স কমে এবং করোনা ক্ষতি দূরীভূত হয়।'
        },
        keyTakeaways: {
          en: [
            'For a solid round conductor, self GMR = r · e^(-0.25) = 0.7788 · r due to internal magnetic flux linkages.',
            'Transposition of 3-phase lines ensures equal inductance and voltage drops across all three phases.',
            'Bundled conductors significantly increase GMR, lowering series inductance and reducing corona noise.'
          ],
          hi: [
            'आंतरिक फ्लक्स के कारण ठोस गोल कंडक्टर का स्व-GMR = 0.7788 r होता है।',
            '3-फेज लाइनों का ट्रांसपोज़िशन तीनों फेजों में समान प्रेरकत्व और वोल्टेज बनाए रखता है।',
            'बंडल्ड कंडक्टर GMR को बढ़ाकर प्रेरकत्व कम करते हैं और कोरोना को रोकते हैं।'
          ],
          bn: [
            'অভ্যন্তরীণ চৌম্বকীয় ফ্লাক্সের কারণে সলিড পরিবাহীর স্বকীয় GMR = ০.৭৭৮৮ r।',
            '৩-ফেজ লাইনের ট্রান্সপজিশন করলে তিনটি ফেজেই সমান ইন্ডাকট্যান্স ও ভোল্টেজ বজায় থাকে।',
            'বান্ডল্ড কন্ডাক্টর GMR বৃদ্ধি করে ইন্ডাকট্যান্স হ্রাস করে এবং করোনা প্রতিরোধ করে।'
          ]
        },
        formulas: [
          {
            id: 'f-line-inductance-gmd',
            name: { en: '3-Phase Transposed Line Inductance', hi: '3-फेज ट्रांसपोज़्ड लाइन प्रेरकत्व', bn: '৩-ফেজ সঞ্চালন লাইনের ইন্ডাকট্যান্স' },
            formula: 'L = 0.2 \\ln\\left( \\frac{\\text{GMD}}{\\text{GMR}} \\right) \\text{ mH/km/phase}',
            description: {
              en: 'GMD = Geometric Mean Distance = ∛(D₁₂ · D₂₃ · D₃₁), GMR = Geometric Mean Radius of phase conductor bundle.',
              hi: 'GMD = ∛(D₁₂·D₂₃·D₃₁), GMR = बंडल या कंडक्टर का प्रभावी त्रिज्या।',
              bn: 'GMD = জ্যামিতিক গড় দূরত্ব = ∛(D₁₂ · D₂₃ · D₃₁), GMR = কন্ডাক্টরের স্বকীয় ব্যাসার্ধ।'
            }
          },
          {
            id: 'f-gmr-bundle-2',
            name: { en: '2-Conductor Bundle GMR', hi: '2-कंडक्टर बंडल GMR', bn: '২-কন্ডাক্টর বান্ডল GMR' },
            formula: '\\text{GMR}_{\\text{bundle}} = \\sqrt{d \\cdot D_s} = \\sqrt{d \\cdot (0.7788 \\cdot r)}',
            description: {
              en: 'd = bundle sub-conductor spacing (typically 40-45 cm), r = physical conductor radius.',
              hi: 'd = बंडल स्पेसिंग, r = कंडक्टर त्रिज्या।',
              bn: 'd = সাব-কন্ডাক্টরের মধ্যবর্তী দূরত্ব, r = কন্ডাক্টরের ব্যাসার্ধ।'
            }
          }
        ],
        solvedExamples: [
          {
            id: 'ex-gmd-calc',
            problem: {
              en: 'A 3-phase 50 Hz transposed overhead transmission line has conductors arranged in a horizontal plane with spacing D12 = 4 m, D23 = 4 m, and D31 = 8 m. Each conductor has an outside diameter of 2.5 cm. Calculate the inductance per phase per kilometer of the line.',
              hi: 'एक 3-फेज 50 Hz ट्रांसपोज़्ड लाइन के तार क्षैतिज रूप से 4m, 4m एवं 8m की दूरी पर हैं। प्रत्येक तार का व्यास 2.5 cm है। प्रति किलोमीटर प्रति फेज प्रेरकत्व (Inductance) ज्ञात कीजिए।',
              bn: 'একটি ৩-ফেজ ৫০ Hz ট্রান্সপোজড লাইনের কন্ডাক্টরগুলো আনুভূমিকভাবে ৪মি, ৪মি এবং ৮মি দূরত্বে অবস্থিত। প্রতিটি কন্ডাক্টরের ব্যাস ২.৫ সেমি। প্রতি কিলোমিটারে প্রতি ফেজের ইন্ডাকট্যান্স নির্ণয় করুন।'
            },
            solution: {
              en: 'Step 1: Radius r = 2.5 cm / 2 = 1.25 cm = 0.0125 m\nStep 2: Self GMR (Ds) = 0.7788 × r = 0.7788 × 0.0125 = 0.009735 m\nStep 3: GMD (Dm) = ∛(D12 × D23 × D31) = ∛(4 × 4 × 8) = ∛(128) = 5.0397 m\nStep 4: Inductance L = 0.2 × ln(GMD / GMR) = 0.2 × ln(5.0397 / 0.009735) = 0.2 × ln(517.69) = 0.2 × 6.2493 = 1.250 mH/km/phase',
              hi: 'चरण 1: r = 0.0125 m, GMR = 0.7788 × 0.0125 = 0.009735 m\nचरण 2: GMD = ∛(4 × 4 × 8) = 5.04 m\nचरण 3: L = 0.2 × ln(5.04 / 0.009735) = 1.250 mH/km/phase',
              bn: 'ধাপ ১: ব্যাসার্ধ r = ০.০১২৫ মি, GMR = ০.৭৭৮৮ × ০.০১২৫ = ০.০০৯৭৩৫ মি\nধাপ ২: GMD = ∛(৪ × ৪ × ৮) = ৫.০৪ মি\nধাপ ৩: L = ০.২ × ln(৫.০৪ / ০.০০৯৭৩৫) = ১.২৫০ mH/km/phase'
            },
            givenValues: { 'Conductor Diameter': '2.5 cm', 'Spacing D12, D23, D31': '4 m, 4 m, 8 m', 'Frequency': '50 Hz' },
            finalAnswer: {
              en: 'Line Inductance L = 1.250 mH/km/phase (Reactance XL = 0.393 Ω/km)',
              hi: 'लाइन प्रेरकत्व L = 1.250 mH/km/phase (XL = 0.393 Ω/km)',
              bn: 'লাইনের ইন্ডাকট্যান্স L = ১.২৫০ mH/km/phase (XL = ০.৩৯৩ Ω/km)'
            }
          }
        ],
        mcqs: [
          {
            id: 'mcq-param-1',
            question: {
              en: 'Why is the self Geometric Mean Radius (GMR) of a solid circular conductor taken as 0.7788·r instead of r for inductance calculations?',
              hi: 'प्रेरकत्व गणना में ठोस गोल कंडक्टर का स्व-GMR, r के स्थान पर 0.7788·r क्यों लिया जाता है?',
              bn: 'ইন্ডাকট্যান্স গণনায় সলিড গোলাকার তারের GMR এর মান r এর পরিবর্তে ০.৭৭৮৮·r কেন ধরা হয়?'
            },
            options: [
              { id: 'opt-1', text: { en: 'To account for internal magnetic flux linkages inside the conductor', hi: 'कंडक्टर के अंदर आंतरिक चुंबकीय फ्लक्स लिंकेज को सम्मिलित करने के लिए', bn: 'কন্ডাক্টরের ভেতরের ইন্টারনাল চৌম্বক ফ্লাক্স লিংকেজ বিবেচনা করার জন্য' } },
              { id: 'opt-2', text: { en: 'Due to skin effect at 50 Hz', hi: '50 Hz पर स्किन प्रभाव के कारण', bn: '৫০ Hz এ স্কিন ইফেক্টের কারণে' } },
              { id: 'opt-3', text: { en: 'To account for earth capacitance', hi: 'पृथ्वी की धारिता को जोड़ने के लिए', bn: 'মাটির ক্যাপাসিট্যান্স যোগ করার জন্য' } },
              { id: 'opt-4', text: { en: 'Due to thermal expansion', hi: 'तापीय प्रसार के कारण', bn: 'তাপীয় প্রসারণের কারণে' } }
            ],
            correctOptionId: 'opt-1',
            explanation: {
              en: 'Replacing a solid conductor with an equivalent fictitious hollow thin-walled cylinder of radius r\' = r · e^(-1/4) = 0.7788·r accurately represents internal magnetic flux linkages without complex integration.',
              hi: '0.7788·r कंडक्टर के आंतरिक फ्लक्स लिंकेज को एक समतुल्य खोखले सिलेंडर के रूप में मॉडल करता है।',
              bn: '০.৭৭৮৮·r মূলত পরিবাহীর অভ্যন্তরীণ ম্যাগনেটিক ফ্লাক্স লিংকেজকে সমতুল্য ফাঁপা সিলিন্ডারের ব্যাসার্ধ আকারে প্রকাশ করে।'
            }
          }
        ]
      }
    },
    {
      id: 'ps-tp6-line-capacitance',
      chapterId: 'ps-ch2-transmission',
      order: 2,
      level: 'Engineering',
      title: {
        en: '6. Line Capacitance, Earth Effect & Charging Current',
        hi: '6. लाइन धारिता (Capacitance), पृथ्वी का प्रभाव एवं चार्जिंग धारा',
        bn: '৬. লাইনের ক্যাপাসিট্যান্স, মাটির প্রভাব ও চার্জিং কারেন্ট'
      },
      description: {
        en: 'Electrostatic field distribution, Line-to-Neutral capacitance of transposed 3-phase lines, method of images for earth effect, and line charging MVAR generation.',
        hi: 'इलेक्ट्रोस्टैटिक फील्ड, 3-फेज ट्रांसपोज़्ड लाइन धारिता, पृथ्वी प्रभाव हेतु मेथड ऑफ इमेजेस एवं चार्जिंग धारा।',
        bn: 'ইলেক্ট্রোস্ট্যাটিক ফিল্ড, ৩-ফেজ লাইনের লাইন-টু-নিউট্রাল ক্যাপাসিট্যান্স, মাটির প্রভাবে মেথড অফ ইমেজেস এবং চার্জিং কারেন্ট।'
      },
      lesson: {
        id: 'lesson-ps-tp6',
        topicId: 'ps-tp6-line-capacitance',
        title: {
          en: 'Transmission Line Capacitance & Charging Current Dynamics',
          hi: 'ट्रांसमिशन लाइन धारिता एवं चार्जिंग धारा गतिशीलता',
          bn: 'সঞ্চালন লাইনের ক্যাপাসিট্যান্স ও চার্জিং কারেন্ট'
        },
        description: {
          en: 'Electrostatic capacitance derivations for 3-phase transposed circuits and charging reactive power generation.',
          hi: '3-फेज ओवरहेड ट्रांसमिशन लाइनों की धारिता गणना एवं चार्जिंग MVAR विश्लेषण।',
          bn: '৩-ফেজ ওভারহেড লাইনের ক্যাপাসিট্যান্স নির্ণয় ও চার্জিং MVAR বিশ্লেষণ।'
        },
        detailedExplanation: {
          en: 'Capacitance in transmission lines results from the potential difference between conductors and the surrounding electrostatic field.\n\n1. 3-Phase Transposed Line Capacitance:\nUnlike inductance, the electric charge resides entirely on the outer surface of conductors, so internal capacitance is zero. The actual physical radius $r$ is used directly (NOT $0.7788r$).\n$$C_n = \\frac{2\\pi \\varepsilon_0}{\\ln\\left(\\frac{\\text{GMD}}{r}\\right)} \\text{ F/m/phase} = \\frac{0.0242}{\\log_{10}\\left(\\frac{\\text{GMD}}{r}\\right)} \\mu\\text{F/km/phase}$$\n\n2. Earth Effect & Method of Images:\nThe presence of the conducting earth plane increases line capacitance. By placing fictitious image conductors of opposite charge at a depth $h$ equal to the conductor height above ground, the capacitance to neutral with earth effect is:\n$$C_n = \\frac{2\\pi \\varepsilon_0}{\\ln\\left(\\frac{D}{r}\\right) - \\ln\\left(\\frac{\\sqrt{4h^2 + D^2}}{2h}\\right)}$$\nIn practice, because transmission line conductors are high above ground ($h \\gg D$), the earth effect increases capacitance by only 1% to 2% and is often neglected in standard studies.\n\n3. Charging Current & Reactive MVAR Generation:\nEven under zero-load conditions, the alternating voltage creates a continuous charging current: $I_c = \\omega C_n V_{ph} = 2\\pi f C_n \\frac{V_{LL}}{\\sqrt{3}}$ Amperes/phase. This generates capacitive reactive power $Q_c = \\sqrt{3} V_{LL} I_c = 3 \\omega C_n V_{ph}^2 = \\omega C_n V_{LL}^2$ MVAR.',
          hi: '1. 3-फेज लाइन धारिता: धारिता गणना में वास्तविक त्रिज्या r का उपयोग होता है (0.7788r नहीं)। $C_n = \\frac{2\\pi \\varepsilon_0}{\\ln(\\text{GMD}/r)}$ F/m/phase।\n2. पृथ्वी का प्रभाव: जमीन की उपस्थिति से धारिता 1-2% बढ़ जाती है।\n3. चार्जिंग धारा: नो-लोड पर भी धारिता के कारण धारा बहती है: $I_c = \\omega C_n V_{ph}$।',
          bn: '১. ৩-ফেজ ক্যাপাসিট্যান্স: ক্যাপাসিট্যান্সের ক্ষেত্রে কন্ডাক্টরের মূল ব্যাসার্ধ r ব্যবহৃত হয়। $C_n = \\frac{2\\pi \\varepsilon_0}{\\ln(\\text{GMD}/r)}$ F/m/phase।\n২. মাটির প্রভাব: মাটির উপস্থিতির কারণে লাইনের ক্যাপাসিট্যান্স ১-২% বৃদ্ধি পায়।\n৩. চার্জিং কারেন্ট: নো-লোড অবস্থাতেও ক্যাপাসিট্যান্সের দরুন কারেন্ট প্রবাহিত হয়: $I_c = \\omega C_n V_{ph}$।'
        },
        keyTakeaways: {
          en: [
            'Physical conductor radius r is used for capacitance calculations because charge resides only on conductor surface.',
            'Charging current Ic leads the phase voltage by 90 degrees and causes Ferranti effect on unloaded lines.',
            'Bundling conductors increases capacitance, raising the Surge Impedance Loading (SIL) of the line.'
          ],
          hi: [
            'धारिता गणना में वास्तविक त्रिज्या r प्रयुक्त होती है क्योंकि आवेश सतह पर रहता है।',
            'चार्जिंग धारा वोल्टेज से 90° आगे (lead) होती है।',
            'बंडल कंडक्टर धारिता को बढ़ाते हैं।'
          ],
          bn: [
            'ক্যাপাসিট্যান্সে মূল ব্যাসার্ধ r ব্যবহৃত হয় কারণ চার্জ কেবল পরিবাহীর বহির্তলে থাকে।',
            'চার্জিং কারেন্ট ভোল্টেজের চেয়ে ৯০° এগিয়ে (lead) থাকে।',
            'বান্ডল্ড কন্ডাক্টর লাইনের ক্যাপাসিট্যান্স বাড়ায়।'
          ]
        },
        formulas: [
          {
            id: 'f-cap-formula',
            name: { en: 'Line-to-Neutral Capacitance', hi: 'लाइन-टू-न्यूट्रल धारिता', bn: 'লাইন-টু-নিউট্রাল ক্যাপাসিট্যান্স' },
            formula: 'C_n = \\frac{2\\pi \\varepsilon_0}{\\ln\\left( \\frac{\\text{GMD}}{r} \\right)} \\text{ F/m} = \\frac{0.0242}{\\log_{10}\\left( \\frac{\\text{GMD}}{r} \\right)} \\mu\\text{F/km}',
            description: {
              en: 'ε0 = 8.854 × 10⁻¹² F/m, GMD = equivalent equilateral spacing, r = outer conductor radius.',
              hi: 'धारिता सूत्र प्रति किलोमीटर।',
              bn: 'প্রতি কিলোমিটারে লাইন-টু-নিউট্রাল ক্যাপাসিট্যান্স সূত্র।'
            }
          },
          {
            id: 'f-charging-current',
            name: { en: 'Line Charging Current & MVAR', hi: 'चार्जिंग धारा एवं MVAR', bn: 'চার্জিং কারেন্ট ও MVAR' },
            formula: 'I_c = 2\\pi f \\cdot C_n \\cdot V_{ph}, \\quad Q_{\\text{charging}} = \\omega C_{\\text{total}} V_{LL}^2',
            description: {
              en: 'Ic = Charging current (Amperes/phase), Q = Total three-phase reactive power generated (VAR).',
              hi: 'लाइन चार्जिंग धारा और 3-फेज रिएक्टिव पावर उत्पादन।',
              bn: 'লাইন চার্জিং কারেন্ট ও মোট ৩-ফেজ রিঅ্যাক্টিভ পাওয়ার সমীকরণ।'
            }
          }
        ],
        solvedExamples: [
          {
            id: 'ex-cap-charging-1',
            problem: {
              en: 'A 3-phase 50 Hz 132 kV overhead transmission line is 100 km long. The conductors are transposed with an equilateral spacing of 3.5 meters and radius 1.0 cm. Calculate: (a) Capacitance per phase to neutral, (b) Charging current per phase, and (c) Total reactive power generated by line capacitance in MVAR.',
              hi: 'एक 3-फेज 50 Hz 132 kV 100 km लंबी लाइन में 3.5 m समबाहु दूरी और 1.0 cm त्रिज्या वाले तार हैं। (a) प्रति फेज धारिता, (b) चार्जिंग धारा, और (c) कुल MVAR ज्ञात कीजिए।',
              bn: 'একটি ৩-ফেজ ৫০ Hz ১৩২ kV ১০০ কিমি দীর্ঘ সঞ্চালন লাইনে ৩.৫ মি ব্যবধান ও ১.০ সেমি ব্যাসার্ধের তার রয়েছে। নির্ণয় করুন: (ক) প্রতি ফেজে ক্যাপাসিট্যান্স, (খ) চার্জিং কারেন্ট, এবং (গ) মোট উৎপাদিত MVAR।'
            },
            solution: {
              en: 'Step 1: GMD = 3.5 m = 350 cm, r = 1.0 cm\nStep 2: Cn = 0.0242 / log10(350 / 1.0) = 0.0242 / 2.544 = 0.00951 μF/km\nTotal line capacitance C_total = 0.00951 μF/km × 100 km = 0.951 μF = 0.951 × 10⁻⁶ F\nStep 3: Phase voltage Vph = 132,000 / √3 = 76,210 V\nCharging current Ic = 2π × 50 × (0.951 × 10⁻⁶) × 76,210 = 22.77 A/phase\nStep 4: Total 3-phase charging MVAR = √3 × VLL × Ic = √3 × 132 × 22.77 = 5.21 MVAR',
              hi: 'चरण 1: Cn = 0.00951 μF/km, कुल C = 0.951 μF\nचरण 2: Vph = 76.21 kV, Ic = 2π × 50 × C × Vph = 22.77 A\nचरण 3: Q = √3 × 132 kV × 22.77 A = 5.21 MVAR',
              bn: 'ধাপ ১: Cn = ০.০০৯৫১ μF/km, মোট C = ০.৯৫১ μF\nধাপ ২: Vph = ৭৬.২১ kV, চার্জিং কারেন্ট Ic = ২২.৭৭ A\nধাপ ৩: মোট রিঅ্যাক্টিভ পাওয়ার Q = √৩ × ১৩২ kV × ২২.৭৭ A = ৫.২১ MVAR'
            },
            givenValues: { 'Voltage VLL': '132 kV', 'Line Length': '100 km', 'Spacing D': '3.5 m', 'Radius r': '1.0 cm', 'Frequency': '50 Hz' },
            finalAnswer: {
              en: 'Cn = 0.00951 μF/km, Charging Current Ic = 22.77 A, Q = 5.21 MVAR',
              hi: 'Cn = 0.00951 μF/km, चार्जिंग धारा Ic = 22.77 A, Q = 5.21 MVAR',
              bn: 'Cn = ০.০০৯৫১ μF/km, চার্জিং কারেন্ট Ic = ২২.৭৭ A, Q = ৫.২১ MVAR'
            }
          }
        ],
        mcqs: [
          {
            id: 'mcq-cap-1',
            question: {
              en: 'What is the phase angle relationship between the line charging current and the line-to-neutral voltage in an overhead transmission line?',
              hi: 'ओवरहेड ट्रांसमिशन लाइन में लाइन चार्जिंग धारा और वोल्टेज के बीच क्या कला संबंध (Phase relationship) होता है?',
              bn: 'ওভারহেড সঞ্চালন লাইনে চার্জিং কারেন্ট এবং ভোল্টেজের মধ্যে ফেজ কোণের সম্পর্ক কী?'
            },
            options: [
              { id: 'opt-1', text: { en: 'Charging current LEADS voltage by 90°', hi: 'चार्जिंग धारा वोल्टेज से 90° आगे (Lead) होती है', bn: 'চার্জিং কারেন্ট ভোল্টেজ থেকে ৯০° এগিয়ে (Lead) থাকে' } },
              { id: 'opt-2', text: { en: 'Charging current LAGS voltage by 90°', hi: 'चार्जिंग धारा वोल्टेज से 90° पीछे (Lag) होती है', bn: 'চার্জিং কারেন্ট ভোল্টেজ থেকে ৯০° পিছিয়ে (Lag) থাকে' } },
              { id: 'opt-3', text: { en: 'In-phase with voltage (0°)', hi: 'वोल्टेज के साथ समान कला में (0°)', bn: 'ভোল্টেজের সাথে ইন-ফেজে (০°)' } },
              { id: 'opt-4', text: { en: 'Lags voltage by 45°', hi: 'वोल्टेज से 45° पीछे होती है', bn: 'ভোল্টেজ থেকে ৪৫° পিছিয়ে থাকে' } }
            ],
            correctOptionId: 'opt-1',
            explanation: {
              en: 'Because the shunt branch is purely capacitive admittance Y = jωC, the charging current Ic = jωC·V leads the voltage by exactly 90 degrees.',
              hi: 'शंट शाखा पूरी तरह कैपेसिटिव (Y = jωC) होने के कारण चार्जिंग धारा वोल्टेज से 90 डिग्री लीड करती है।',
              bn: 'শান্ট শাখাটি সম্পূর্ণ ক্যাপাসিটিভ (Y = jωC) হওয়ায় চার্জিং কারেন্ট ভোল্টেজের তুলনায় ঠিক ৯০° লিড করে।'
            }
          }
        ]
      }
    },
    {
      id: 'ps-tp7-line-performance',
      chapterId: 'ps-ch2-transmission',
      order: 3,
      level: 'Engineering',
      title: {
        en: '7. Performance of Short, Medium (Nominal-T & π) & Long Transmission Lines',
        hi: '7. शार्ट, मीडियम एवं लॉन्ग ट्रांसमिशन लाइनों का प्रदर्शन ও ABCD पैरामीटर',
        bn: '৭. শর্ট, মিডিয়াম (T ও π) এবং লং ট্রান্সমিশন লাইনের কার্যকারিতা ও ABCD প্যারামিটার'
      },
      description: {
        en: 'ABCD two-port parameters, voltage regulation, transmission efficiency, rigorous hyperbolic long line solution (cosh γl, sinh γl), and characteristic impedance Z0.',
        hi: 'ABCD पैरामीटर, वोल्टेज रेगुलेशन, ट्रांसमिशन दक्षता एवं लॉन्ग लाइन हाइपरबॉलिक समीकरण।',
        bn: 'ABCD প্যারামিটার, ভোল্টেজ রেগুলেশন, সঞ্চালন দক্ষতা এবং লং লাইনের হাইপারবোলিক সমীকরণ।'
      },
      lesson: {
        id: 'lesson-ps-tp7',
        topicId: 'ps-tp7-line-performance',
        title: {
          en: 'Performance of Transmission Lines & ABCD Parameters',
          hi: 'ट्रांसमिशन लाइनों का प्रदर्शन एवं ABCD पैरामीटर',
          bn: 'সঞ্চালন লাইনের পারফরম্যান্স ও ABCD প্যারামিটার'
        },
        description: {
          en: 'Two-port matrix modeling of overhead transmission lines, voltage regulation, efficiency, and ABCD network representation.',
          hi: 'ABCD मैट्रिक्स द्वारा ट्रांसमिशन लाइन मॉडलिंग, वोल्टेज रेगुलेशन एवं दक्षता।',
          bn: 'ABCD প্যারামিটার দিয়ে সঞ্চালন লাইনের বিশ্লেষণ, ভোল্টেজ রেগুলেশন ও দক্ষতা।'
        },
        detailedExplanation: {
          en: 'Transmission lines are classified into three operating categories:\n\n1. Short Transmission Lines (Length < 80 km, Voltage < 20 kV):\nCapacitance is neglected. Series impedance $Z = R + jX$.\nTwo-port equations: $V_s = V_r + I_r Z$ and $I_s = I_r$.\nABCD Matrix: $A=1, B=Z, C=0, D=1$.\n\n2. Medium Transmission Lines (80 km ≤ Length ≤ 240 km, Voltage 20–100 kV):\nCapacitance is lumped at discrete nodes using two primary models:\n- Nominal-T Network: Series impedance split in half ($Z/2$), total shunt admittance $Y$ placed in the center.\n  $$A = D = 1 + \\frac{YZ}{2}, \\quad B = Z\\left(1 + \\frac{YZ}{4}\\right), \\quad C = Y$$\n- Nominal-$\\pi$ Network: Full series impedance $Z$ in middle, shunt admittance split into two halves ($Y/2$) at sending and receiving ends.\n  $$A = D = 1 + \\frac{YZ}{2}, \\quad B = Z, \\quad C = Y\\left(1 + \\frac{YZ}{4}\\right)$$\n\n3. Long Transmission Lines (Length > 240 km, Voltage > 100 kV):\nParameters are uniformly distributed along the entire length. Solved via wave equations:\n$$V_s = V_r \\cosh(\\gamma l) + I_r Z_0 \\sinh(\\gamma l), \\quad I_s = V_r \\frac{\\sinh(\\gamma l)}{Z_0} + I_r \\cosh(\\gamma l)$$\nWhere propagation constant $\\gamma = \\alpha + j\\beta = \\sqrt{z \\cdot y}$ and Characteristic Impedance $Z_0 = \\sqrt{z/y} = \\sqrt{(r+j\\omega l)/(g+j\\omega c)}$.\n\n4. Reciprocity & Symmetry Conditions: For all passive reciprocal symmetrical lines, $AD - BC = 1$ and $A = D$.',
          hi: '1. शार्ट लाइन (< 80 km): धारिता नगण्य होती है। A=1, B=Z, C=0, D=1।\n2. मीडियम लाइन (80-240 km): Nominal-T और Nominal-π मॉडल। दोनों में $A = D = 1 + YZ/2$ होता है।\n3. लॉन्ग लाइन (> 240 km): वितरित पैरामीटर (Distributed parameters)। $A = \\cosh(\\gamma l)$ एवं $B = Z_0 \\sinh(\\gamma l)$।\n4. सममित और द्विपक्षीय लाइन के लिए: $AD - BC = 1$ और $A = D$।',
          bn: '১. শর্ট লাইন (< ৮০ কিমি): ক্যাপাসিট্যান্স উপেক্ষিত। A=১, B=Z, C=০, D=১।\n২. মিডিয়াম লাইন (৮০-২৪০ কিমি): নমিনাল-T ও নমিনাল-π মডেল। উভয়ের ক্ষেত্রে $A = D = ১ + YZ/২$।\n৩. লং লাইন (> ২৪০ কিমি): ডিস্ট্রিবিউটেড প্যারামিটার সমাধান: $A = \\cosh(\\gamma l)$ ও $B = Z_0 \\sinh(\\gamma l)$।\n৪. প্যাসিভ ও প্রতিসম লাইনের ক্ষেত্রে সর্বদা: $AD - BC = ১$ এবং $A = D$।'
        },
        keyTakeaways: {
          en: [
            'Short lines: A = 1, B = Z, C = 0, D = 1.',
            'Nominal-T line: A = D = 1 + YZ/2, B = Z(1 + YZ/4), C = Y.',
            'Nominal-π line: A = D = 1 + YZ/2, B = Z, C = Y(1 + YZ/4).',
            'Voltage Regulation: %VR = (|Vs/A| - |Vr|)/|Vr| × 100%.'
          ],
          hi: [
            'शार्ट लाइन: A = 1, B = Z, C = 0, D = 1.',
            'मीडियम लाइन: A = D = 1 + YZ/2.',
            'प्रतिशत रेगुलेशन = (|Vs/A| - |Vr|)/|Vr| × 100%.'
          ],
          bn: [
            'শর্ট লাইন: A = ১, B = Z, C = ০, D = ১।',
            'মিডিয়াম লাইন: A = D = ১ + YZ/২।',
            'ভোল্টেজ রেগুলেশন = (|Vs/A| - |Vr|)/|Vr| × ১০০%।'
          ]
        },
        formulas: [
          {
            id: 'f-abcd-matrix',
            name: { en: 'Generalized ABCD Matrix Equation', hi: 'सामान्यीकृत ABCD मैट्रिक्स', bn: 'ABCD ম্যাট্রিক্স সমীকরণ' },
            formula: '\\begin{bmatrix} V_s \\\\ I_s \\end{bmatrix} = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix} \\begin{bmatrix} V_r \\\\ I_r \\end{bmatrix}',
            description: {
              en: 'Vs = A·Vr + B·Ir, Is = C·Vr + D·Ir. Symmetrical condition A = D, Reciprocal condition AD - BC = 1.',
              hi: 'Vs = A·Vr + B·Ir, Is = C·Vr + D·Ir.',
              bn: 'Vs = A·Vr + B·Ir, Is = C·Vr + D·Ir (যেখানে AD - BC = ১)।'
            }
          },
          {
            id: 'f-vr-formula',
            name: { en: 'Percentage Voltage Regulation (%VR)', hi: 'प्रतिशत वोल्टेज रेगुलेशन', bn: 'শতাংশ ভোল্টেজ রেগুলেশন' },
            formula: '\\%VR = \\frac{|V_s/A| - |V_r|}{|V_r|} \\times 100\\%',
            description: {
              en: 'No-load receiving voltage is |Vs/A|, full-load receiving voltage is |Vr|.',
              hi: 'नो-लोड वोल्टेज |Vs/A| और फुल-लोड वोल्टेज |Vr| का प्रतिशत अंतर।',
              bn: 'নো-লোড ভোল্টেজ |Vs/A| ও ফুল-লোড ভোল্টেজ |Vr| এর শতকরা পরিবর্তন।'
            }
          }
        ],
        solvedExamples: [
          {
            id: 'ex-short-line-vr',
            problem: {
              en: 'A 3-phase 50 Hz short transmission line delivers 20 MW at 66 kV with 0.8 lagging power factor. Line resistance is 5 Ω/phase and inductive reactance is 12 Ω/phase. Find: (a) Sending end line voltage, (b) Percentage voltage regulation, and (c) Transmission efficiency.',
              hi: 'एक 3-फेज शार्ट लाइन 66 kV पर 0.8 लैगिंग पर 20 MW लोड देती है। R = 5 Ω/phase, X = 12 Ω/phase। सेंडिंग एंड वोल्टेज, वोल्टेज रेगुलेशन एवं दक्षता ज्ञात कीजिए।',
              bn: 'একটি ৩-ফেজ শর্ট সঞ্চালন লাইন ৬৬ kV তে ০.৮ ল্যাগিং পাওয়ার ফ্যাক্টরে ২০ MW সরবরাহ করে। R = ৫ Ω/phase, X = ১২ Ω/phase। সেন্ডিং ভোল্টেজ, ভোল্টেজ রেগুলেশন এবং সঞ্চালন দক্ষতা নির্ণয় করুন।'
            },
            solution: {
              en: 'Step 1: Receiving phase voltage Vr = 66,000 / √3 = 38,105 V\nLoad current Ir = P / (√3 · VLL · cos φ) = 20,000,000 / (√3 × 66,000 × 0.8) = 218.7 A\nStep 2: Voltage drop ΔV ≈ Ir · (R cos φ + X sin φ) = 218.7 × (5×0.8 + 12×0.6) = 218.7 × (4 + 7.2) = 2,449.4 V\nStep 3: Sending end phase voltage Vs = Vr + ΔV = 38,105 + 2,449.4 = 40,554.4 V\nSending end Line voltage Vs_line = √3 × 40,554.4 = 70.24 kV\nStep 4: %VR = (2,449.4 / 38,105) × 100% = 6.43%\nStep 5: Total Line Loss = 3 × Ir² × R = 3 × (218.7)² × 5 = 717,440 W = 0.717 MW\nTransmission Efficiency η = 20 / (20 + 0.717) × 100% = 96.54%',
              hi: 'चरण 1: Vr = 38.105 kV, Ir = 218.7 A\nचरण 2: वोल्टेज ड्रॉप = 2.45 kV, सेंडिंग वोल्टेज Vs = 70.24 kV (Line)\nचरण 3: वोल्टेज रेगुलेशन %VR = 6.43%\nचरण 4: लाइन हानि = 0.717 MW, दक्षता η = 96.54%',
              bn: 'ধাপ ১: Vr = ৩৮.১০৫ kV, Ir = ২১৮.৭ A\nধাপ ২: ভোল্টেজ ড্রপ = ২.৪৫ kV, সেন্ডিং লাইন ভোল্টেজ Vs = ৭০.২৪ kV\nধাপ ৩: ভোল্টেজ রেগুলেশন %VR = ৬.৪৩%\nধাপ ৪: মোট লস = ০.৭১৭ MW, সঞ্চালন দক্ষতা η = ৯৬.৫৪%'
            },
            givenValues: { 'Load': '20 MW', 'Vr': '66 kV', 'cos φ': '0.8 lag', 'R': '5 Ω', 'X': '12 Ω' },
            finalAnswer: {
              en: 'Vs = 70.24 kV, Voltage Regulation = 6.43%, Efficiency = 96.54%',
              hi: 'Vs = 70.24 kV, रेगुलेशन = 6.43%, दक्षता = 96.54%',
              bn: 'Vs = ৭০.২৪ kV, ভোল্টেজ রেগুলেশন = ৬.৪৩%, দক্ষতা = ৯৬.৫৪%'
            }
          }
        ],
        mcqs: [
          {
            id: 'mcq-abcd-1',
            question: {
              en: 'What are the dimensions (units) of the ABCD parameters of a transmission line?',
              hi: 'ट्रांसमिशन लाइन के ABCD पैरामीटरों की इकाइयाँ (Units) क्या होती हैं?',
              bn: 'একটি সঞ্চালন লাইনের ABCD প্যারামিটারগুলোর একক কী কী?'
            },
            options: [
              { id: 'opt-1', text: { en: 'A and D are dimensionless, B is in Ohms (Ω), C is in Siemens (S or ℧)', hi: 'A और D आयामहीन, B ओम (Ω) में, C सीमेंस (S) में', bn: 'A ও D এককহীন, B ওহমে (Ω), C সিমেন্সে (S বা ℧)' } },
              { id: 'opt-2', text: { en: 'All four parameters are in Ohms (Ω)', hi: 'सभी चारों ओम में हैं', bn: 'সবগুলোই ওহমে' } },
              { id: 'opt-3', text: { en: 'A is in Ohms, B is dimensionless, C is in Siemens', hi: 'A ओम में, B आयामहीन', bn: 'A ওহমে, B এককহীন' } },
              { id: 'opt-4', text: { en: 'B and C are dimensionless, A and D are in Ohms', hi: 'B और C आयामहीन', bn: 'B ও C এককহীন' } }
            ],
            correctOptionId: 'opt-1',
            explanation: {
              en: 'From Vs = A·Vr + B·Ir and Is = C·Vr + D·Ir: A and D are voltage and current ratios (dimensionless), B is transfer impedance (V/I = Ω), and C is transfer admittance (I/V = Siemens).',
              hi: 'समीकरण से A और D अनुपात हैं (यूनिटलेस), B इम्पीडेंस (Ω) है और C एडमिटेंस (सीमेंस) है।',
              bn: 'সমীকরণ অনুযায়ী A ও D হলো অনুপাত (এককহীন), B হলো ইম্পিডেন্স (Ω), এবং C হলো এডমিট্যান্স (সিমেন্স)।'
            }
          }
        ]
      }
    },
    {
      id: 'ps-tp8-ferranti-sil',
      chapterId: 'ps-ch2-transmission',
      order: 4,
      level: 'Engineering',
      title: {
        en: '8. Ferranti Effect, Surge Impedance Loading (SIL) & Line Compensation',
        hi: '8. फेरांती प्रभाव, सर्ज इम्पीडेंस लोडिंग (SIL) एवं लाइन क्षतिपूर्ति',
        bn: '৮. ফেরান্তি ইফেক্ট, সার্জ ইম্পিডেন্স লোডিং (SIL) ও লাইন ক্ষতিপূরণ'
      },
      description: {
        en: 'Ferranti effect phasor derivation (Vr > Vs at no-load), Surge Impedance Z0 = √(L/C), SIL = V² / Z0, Shunt reactor compensation, and Series capacitor compensation.',
        hi: 'फेरांती प्रभाव फेज़र विश्लेषण, सर्ज इम्पीडेंस लोडिंग (SIL), शंट रिएक्टर एवं सीरीज कैपेसिटर क्षतिपूर्ति।',
        bn: 'ফেরান্তি ইফেক্ট ফেজর বিশ্লেষণ (নো-লোডে Vr > Vs), সার্জ ইম্পিডেন্স লোডিং (SIL), শান্ট রিঅ্যাক্টর ও সিরিজ ক্যাপাসিটর ক্ষতিপূরণ।'
      },
      lesson: {
        id: 'lesson-ps-tp8',
        topicId: 'ps-tp8-ferranti-sil',
        title: {
          en: 'Ferranti Effect, SIL & Reactive Power Compensation',
          hi: 'फेरांती प्रभाव, SIL एवं रिएक्टिव पावर क्षतिपूर्ति',
          bn: 'ফেরান্তি ইফেক্ট, SIL ও রিঅ্যাক্টিভ পাওয়ার ক্ষতিপূরণ'
        },
        description: {
          en: 'Voltage rise phenomenon on unloaded long lines and methods to maximize power transfer capability.',
          hi: 'नो-लोड लंबी लाइनों पर वोल्टेज वृद्धि की घटना एवं विद्युत संचरण क्षमता बढ़ाने की तकनीकें।',
          bn: 'নো-লোড বা কম লোডে ভোল্টেজ বৃদ্ধির ঘটনা এবং বিদ্যুৎ সঞ্চালন ক্ষমতা বৃদ্ধির কৌশলসমূহ।'
        },
        detailedExplanation: {
          en: '1. The Ferranti Effect:\nWhen a medium or long transmission line is operated at no-load or light load, the receiving end voltage ($V_r$) rises and becomes strictly GREATER than the sending end voltage ($V_s$).\n- Mechanism: The distributed charging current $I_c$ leads voltage by 90°. When passing through line series inductance $jX_L$, it produces a voltage drop $I_c \\cdot jX_L = (j |I_c|) (j X_L) = -|I_c| X_L$, which is in direct phase opposition to sending voltage, causing receiving voltage $V_r = V_s + \\frac{1}{2} \\omega^2 L C l^2 V_s > V_s$.\n- Mitigation: Installing Shunt Reactors (inductive coils) at the receiving substations absorbs excess capacitive charging MVAR and brings $V_r$ back to nominal levels.\n\n2. Surge Impedance & Surge Impedance Loading (SIL):\nFor a lossless transmission line ($R=0, G=0$):\n- Surge Impedance: $Z_0 = \\sqrt{L/C}$. Typical values: Overhead lines $Z_0 \\approx 400\\;\\Omega$; Underground cables $Z_0 \\approx 40\\;\\Omega$.\n- Surge Impedance Loading (SIL) = $\\frac{V_{LL}^2}{Z_0}$ MW.\nAt SIL loading, reactive power consumed by line series inductance ($I^2 X_L$) EXACTLY balances reactive power generated by line shunt capacitance ($V^2 \\omega C$). The voltage profile across the entire line becomes completely flat ($V_s = V_r$).\n\n3. Reactive Line Compensation:\n- Series Capacitors: Reduce net line inductive reactance ($X_{net} = X_L - X_C$), increasing steady-state power transfer limit $P_{max} = \\frac{E V}{X_{net}}$ and improving system transient stability.\n- Shunt Capacitors: Supply reactive power locally at receiving ends to boost voltage during heavy peak loads.',
          hi: '1. फेरांती प्रभाव: नो-लोड या कम लोड पर लाइन चार्जिंग करंट के कारण रिसीविंग वोल्टेज सेंडिंग वोल्टेज से अधिक हो जाता है ($V_r > V_s$)। इसे रोकने के लिए सबस्टेशनों पर शंट रिएक्टर लगाए जाते हैं।\n2. सर्ज इम्पीडेंस लोडिंग (SIL): $SIL = V_{LL}^2 / Z_0$ MW। ओवरहेड लाइन के लिए $Z_0 \\approx 400\\;\\Omega$ और केबल के लिए $\\approx 40\\;\\Omega$ होता है।\n3. सीरीज कैपेसिटर: लाइन रिएक्टेंस को कम करके अधिकतम विद्युत संचरण क्षमता ($P_{max} = EV/X$) को बढ़ाते हैं।',
          bn: '১. ফেরান্তি ইফেক্ট: নো-লোড বা কম লোডে লাইন চার্জিং ক্যাপাসিট্যান্সের কারণে রিসিভিং ভোল্টেজ সেন্ডিং ভোল্টেজের চেয়ে বেশি হয়ে যায় ($V_r > V_s$)। এটি প্রশমিত করতে সাবস্টেশনে শান্ট রিঅ্যাক্টর স্থাপন করা হয়।\n২. সার্জ ইম্পিডেন্স লোডিং (SIL): $SIL = V_{LL}^2 / Z_0$ MW। ওভারহেড লাইনের সার্জ ইম্পিডেন্স $Z_0 \\approx ৪০০\\;\\Omega$ এবং আন্ডারগ্রাউন্ড ক্যাবলের ক্ষেত্রে $\\approx ৪০\\;\\Omega$।\n৩. সিরিজ ক্যাপাসিটর: লাইনের কার্যকর রিঅ্যাকট্যান্স হ্রাস করে সর্বোচ্চ বিদ্যুৎ সঞ্চালন ক্ষমতা বৃদ্ধি করে।'
        },
        keyTakeaways: {
          en: [
            'Ferranti effect occurs ONLY in medium and long lines under no-load or lightly loaded conditions.',
            'Surge impedance of overhead lines is ~400 Ω, whereas for underground cables it is ~40 Ω (10 times smaller).',
            'When load = SIL, voltage regulation is 0% and power factor is unity along the entire line length.',
            'Series compensation improves power transfer capacity; shunt reactors mitigate overvoltages.'
          ],
          hi: [
            'फेरांती प्रभाव केवल नो-लोड या हल्के लोड पर मीडियम और लॉन्ग लाइनों में होता है।',
            'सर्ज इम्पीडेंस: ओवरहेड लाइन ~400 Ω, केबल ~40 Ω।',
            'लोड = SIL होने पर वोल्टेज रेगुलेशन शून्य होता है।'
          ],
          bn: [
            'ফেরান্তি ইফেক্ট কেবল নো-লোড বা কম লোডে মিডিয়াম ও লং সঞ্চালন লাইনে ঘটে।',
            'সার্জ ইম্পিডেন্স: ওভারহেড লাইনে ~৪০০ ওহম এবং আন্ডারগ্রাউন্ড ক্যাবলে ~৪০ ওহম।',
            'লোড = SIL হলে লাইনের ভোল্টেজ রেগুলেশন ০% হয়।'
          ]
        },
        formulas: [
          {
            id: 'f-sil-formula',
            name: { en: 'Surge Impedance Loading (SIL)', hi: 'सर्ज इम्पीडेंस लोडिंग सूत्र', bn: 'সার্জ ইম্পিডেন্স লোডিং সূত্র' },
            formula: 'Z_0 = \\sqrt{\\frac{L}{C}}, \\quad \\text{SIL} = \\frac{V_{LL}^2}{Z_0} \\text{ MW}',
            description: {
              en: 'Z0 = Surge impedance (Ω), VLL = Rated line-to-line voltage in kV.',
              hi: 'Z0 = सर्ज इम्पीडेंस, SIL = स्वाभाविक लोड क्षमता (MW)।',
              bn: 'Z0 = সার্জ ইম্পিডেন্স (ওহম), SIL = প্রাকৃতিক লোডিং ক্ষমতা (MW)।'
            }
          },
          {
            id: 'f-ferranti-rise',
            name: { en: 'Ferranti Voltage Rise Equation', hi: 'फेरांती वोल्टेज वृद्धि समीकरण', bn: 'ফেরান্তি ভোল্টেজ বৃদ্ধি সমীকরণ' },
            formula: 'V_r - V_s \\approx \\frac{1}{2} \\omega^2 L C l^2 V_s = \\frac{1}{2} \\left(\\frac{\\omega l}{v}\\right)^2 V_s',
            description: {
              en: 'l = Line length, v = speed of light (3 × 10⁵ km/s), ω = 2πf.',
              hi: 'फेरांती प्रभाव में वोल्टेज वृद्धि।',
              bn: 'ফেরান্তি ইফেক্টে ভোল্টেজ বৃদ্ধির গাণিতিক সমীকরণ।'
            }
          }
        ],
        solvedExamples: [
          {
            id: 'ex-sil-calc',
            problem: {
              en: 'A 400 kV 3-phase 50 Hz transmission line has series inductance L = 1.0 mH/km and shunt capacitance C = 0.01 μF/km. Calculate: (a) Surge impedance Z0, (b) Surge Impedance Loading (SIL) in MW, and (c) The SIL if operating voltage is increased to 765 kV.',
              hi: 'एक 400 kV लाइन में L = 1.0 mH/km और C = 0.01 μF/km है। (a) सर्ज इम्पीडेंस Z0, (b) SIL (MW में), और (c) 765 kV पर नई SIL ज्ञात कीजिए।',
              bn: 'একটি ৪০০ kV সঞ্চালন লাইনে L = ১.০ mH/km এবং C = ০.০১ μF/km। নির্ণয় করুন: (ক) সার্জ ইম্পিডেন্স Z0, (খ) SIL (MW এ), এবং (গ) ভোল্টেজ ৭৬৫ kV করা হলে নতুন SIL।'
            },
            solution: {
              en: 'Step 1: Surge impedance Z0 = √(L / C) = √(1.0 × 10⁻³ / 0.01 × 10⁻⁶) = √(100,000) = 316.23 Ω\nStep 2: SIL at 400 kV = (VLL)² / Z0 = (400 × 10³)² / 316.23 = 1.6 × 10¹¹ / 316.23 = 505.96 MW\nStep 3: SIL at 765 kV = (765 × 10³)² / 316.23 = 5.852 × 10¹¹ / 316.23 = 1,850.6 MW\nNotice: SIL scales with the square of voltage (V²)!',
              hi: 'चरण 1: Z0 = √(10⁻³ / 10⁻⁸) = 316.23 Ω\nचरण 2: 400 kV पर SIL = (400)² / 316.23 = 505.96 MW\nचरण 3: 765 kV पर SIL = (765)² / 316.23 = 1,850.6 MW (3.65 गुना वृद्धि)',
              bn: 'ধাপ ১: Z0 = √(১০⁻³ / ১০⁻৮) = ৩১৬.২৩ ওহম\nধাপ ২: ৪০০ kV তে SIL = (৪০০)² / ৩১৬.২৩ = ৫০৫.৯৬ MW\nধাপ ৩: ৭৬৫ kV তে SIL = (৭৬৫)² / ৩১৬.২৩ = ১৮৫০.৬ MW'
            },
            givenValues: { 'Line Voltage': '400 kV / 765 kV', 'L': '1.0 mH/km', 'C': '0.01 μF/km' },
            finalAnswer: {
              en: 'Surge Impedance Z0 = 316.23 Ω, SIL (400 kV) = 506 MW, SIL (765 kV) = 1,851 MW',
              hi: 'Z0 = 316.23 Ω, SIL (400 kV) = 506 MW, SIL (765 kV) = 1,851 MW',
              bn: 'Z0 = ৩১৬.২৩ ওহম, SIL (৪০০ kV) = ৫০৬ MW, SIL (৭৬৫ kV) = ১৮৫১ MW'
            }
          }
        ],
        mcqs: [
          {
            id: 'mcq-ferranti-1',
            question: {
              en: 'Which electrical equipment is permanently connected to high-voltage transmission lines specifically to suppress the Ferranti overvoltage effect at light loads?',
              hi: 'कम लोड पर फेरांती ओवर-वोल्टेज प्रभाव को दबाने के लिए हाई-वोल्टेज लाइनों पर कौन सा उपकरण लगाया जाता है?',
              bn: 'কম লোডে অতিরিক্ত ভোল্টেজ (ফেরান্তি ইফেক্ট) রোধ করতে হাই-ভোল্টেজ সঞ্চালন লাইনে কোনটি সংযোগ করা হয়?'
            },
            options: [
              { id: 'opt-1', text: { en: 'Shunt Reactor (Inductive reactor)', hi: 'शंट रिएक्टर (प्रेरकत्व)', bn: 'শান্ট রিঅ্যাক্টর (ইন্ডাক্টিভ রিঅ্যাক্টর)' } },
              { id: 'opt-2', text: { en: 'Series Capacitor', hi: 'सीरीज कैपेसिटर', bn: 'সিরিজ ক্যাপাসিটর' } },
              { id: 'opt-3', text: { en: 'Shunt Capacitor Bank', hi: 'शंट कैपेसिटर बैंक', bn: 'শান্ট ক্যাপাসিটর ব্যাংক' } },
              { id: 'opt-4', text: { en: 'Synchronous Condenser overexcited', hi: 'ओवरएक्साइटेड सिंक्रोनस कंडेनसर', bn: 'ওভার-এক্সাইটেড সিনক্রোনাস কন্ডেনসার' } }
            ],
            correctOptionId: 'opt-1',
            explanation: {
              en: 'Shunt reactors consume lagging reactive power (VARs), neutralizing the leading capacitive charging current of the line and keeping receiving voltage within safe limits.',
              hi: 'शंट रिएक्टर लैगिंग रिएक्टिव पावर का उपभोग करके लाइन की चार्जिंग धारा को संतुलित करते हैं।',
              bn: 'শান্ট রিঅ্যাক্টর ল্যাগিং রিঅ্যাক্টিভ পাওয়ার শোষণ করে লাইনের লিডিং চার্জিং কারেন্টকে নিষ্ক্রিয় করে রিসিভিং ভোল্টেজ স্বাভাবিক রাখে।'
            }
          }
        ]
      }
    },
    {
      id: 'ps-tp9-corona-insulators',
      chapterId: 'ps-ch2-transmission',
      order: 5,
      level: 'Diploma',
      title: {
        en: '9. Corona Phenomenon, Insulator Types & String Efficiency',
        hi: '9. कोरोना प्रभाव, इंसुलेटर के प्रकार एवं स्ट्रिंग दक्षता',
        bn: '৯. করোনা ইফেক্ট, ইনসুলেটরের প্রকারভেদ ও স্ট্রিং এফিসিয়েন্সি'
      },
      description: {
        en: 'Critical disruptive voltage Vd, visual critical voltage Vv, Peek\'s corona power loss equation, Pin/Suspension/Strain insulators, and string efficiency improvement using guard rings.',
        hi: 'क्रिटिकल डिसरप्टिव वोल्टेज Vd, कोरोना शक्ति हानि, पिन/सस्पेंशन इंसुलेटर एवं गार्ड रिंग द्वारा स्ट्रिंग दक्षता सुधार।',
        bn: 'ক্রিটিকাল ডিসরাপ্টিভ ভোল্টেজ Vd, করোনা পাওয়ার লস, পিন ও সাসপেনশন ইনসুলেটর এবং গার্ড রিং দ্বারা স্ট্রিং দক্ষতা বৃদ্ধি।'
      },
      lesson: {
        id: 'lesson-ps-tp9',
        topicId: 'ps-tp9-corona-insulators',
        title: {
          en: 'Corona Discharge Physics & Suspension Insulator String Efficiency',
          hi: 'कोरोना डिस्चार्ज भौतिकी एवं सस्पेंशन इंसुलेटर स्ट्रिंग दक्षता',
          bn: 'করোনা ডিসচার্জ ও সাসপেনশন ইনসুলেটর স্ট্রিং এফিসিয়েন্সি'
        },
        description: {
          en: 'Analysis of air dielectric breakdown, Peek\'s formula, insulator potential distribution, and guard ring grading methods.',
          hi: 'वायु परावैद्युत भंजन, पीक का कोरोना सूत्र, इंसुलेटर वोल्टेज वितरण एवं गार्ड रिंग मॉडलिंग।',
          bn: 'বায়ুর ডাইইলেক্ট্রিক ব্রেকডাউন, পিকের করোনা সমীকরণ, ইনসুলেটর ডিস্ক ভোল্টেজ বণ্টন ও গার্ড রিং।'
        },
        detailedExplanation: {
          en: '1. The Corona Phenomenon:\nWhen alternating potential difference across two conductors exceeds the breakdown strength of air (dielectric strength $g_0 = 30 \\text{ kV/cm (peak)} = 21.2 \\text{ kV/cm (rms)}$ at NTP), surrounding air gets ionized. This results in a faint violet glow, hissing noise, ozone gas production ($O_3$), and active electrical power loss.\n- Critical Disruptive Voltage ($V_d$): Minimum phase voltage at which air ionization starts:\n  $$V_d = m_0 \\cdot g_0 \\cdot \\delta \\cdot r \\cdot \\ln\\left(\\frac{D}{r}\\right) \\text{ kV/phase}$$\n  Where $m_0$ is conductor surface irregularity factor (0.80 to 0.98), $\\delta = \\frac{3.92 b}{273 + t}$ is air density factor.\n- Peek\'s Corona Power Loss Formula:\n  $$P = \\frac{242.2}{\\delta} (f + 25) \\sqrt{\\frac{r}{D}} (V_{ph} - V_d)^2 \\times 10^{-5} \\text{ kW/km/phase}$$\n- Methods to Reduce Corona: Increase conductor diameter ($r$) using ACSR conductors, increase inter-conductor spacing ($D$), or use bundled conductors.\n\n2. Insulators & String Efficiency:\nSuspension insulator strings comprise porcelain/glass discs connected by metal pins. Due to shunt capacitance ($C_1 = k \\cdot C$) between metal links and the grounded steel tower cross-arm, voltage is NOT distributed equally across the string discs. The disc closest to the conductor experiences the maximum electrical stress.\n- String Efficiency ($\\eta_s$):\n  $$\\eta_s = \\frac{\\text{Total Phase Voltage Across String}}{n \\times \\text{Voltage across disc nearest to conductor}} \\times 100\\%$$\n- Methods to Improve String Efficiency: Using longer cross-arms (lowers $k$), Capacitance grading of discs (using larger capacitance discs near conductor), and Static Guard Rings (provides shielding currents that cancel tower shunt currents, achieving near 100% uniform voltage distribution).',
          hi: '1. कोरोना प्रभाव: हवा की परावैद्युत क्षमता (21.2 kV/cm rms) टूटने पर बैंगनी चमक, फुसफुसाहट और ओजोन गैस के साथ बिजली का नुकसान होता है।\n- क्रिटिकल वोल्टेज: $V_d = m_0 g_0 \\delta r \\ln(D/r)$। बंडल्ड कंडक्टर लगाने से कोरोना कम होता है।\n2. स्ट्रिंग दक्षता: टॉवर के साथ शंट धारिता ($C_1 = kC$) के कारण नीचे वाली डिस्क पर सबसे अधिक वोल्टेज स्ट्रेस होता है।\n$$\\text{String Efficiency} = \\frac{V_{\\text{total}}}{n \\times V_{\\text{bottom}}} \\times 100\\%$$\nगार्ड रिंग (Guard Ring) लगाने से स्ट्रिंग दक्षता 100% के करीब पहुंच जाती है।',
          bn: '১. করোনা ইফেক্ট: বাতাসের ডাইইলেক্ট্রিক শক্তি (২১.২ kV/cm rms) ভেঙে গেলে বেগুনি আভা, হিসহিস শব্দ ও ওজোন গ্যাস নির্গমনের সাথে বিদ্যুৎ অপচয় ঘটে।\n- ক্রিটিকাল ডিসরাপ্টিভ ভোল্টেজ: $V_d = m_0 g_0 \\delta r \\ln(D/r)$। বান্ডল্ড কন্ডাক্টর ব্যবহারে করোনা কমে।\n২. স্ট্রিং এফিসিয়েন্সি: মেটাল পিনের সাথে টাওয়ারের শান্ট ক্যাপাসিট্যান্সের দরুন কন্ডাক্টরের নিকটবর্তী ডিস্কে সর্বোচ্চ ভোল্টেজ পড়ে।\n$$\\text{String Efficiency} = \\frac{V_{\\text{total}}}{n \\times V_{\\text{bottom}}} \\times ১০০\\%$$\nগার্ড রিং (Guard Ring) ব্যবহারের মাধ্যমে স্ট্রিং দক্ষতা প্রায় ১০০% এ উন্নীত করা যায়।'
        },
        keyTakeaways: {
          en: [
            'Dielectric breakdown strength of air at normal temperature & pressure is 30 kV/cm (peak) or 21.2 kV/cm (rms).',
            'In rough, stormy weather, critical disruptive voltage decreases by ~20%, causing corona to start at lower voltages.',
            'The bottom-most insulator disc closest to the power conductor carries the highest voltage and is most prone to flashover.',
            'Static guard ring equalizes potential distribution across insulator strings, raising string efficiency close to 100%.'
          ],
          hi: [
            'हवा की परावैद्युत क्षमता 30 kV/cm (peak) या 21.2 kV/cm (rms) होती है।',
            'तूफानी मौसम में क्रिटिकल वोल्टेज घट जाता है जिससे कोरोना बढ़ जाता है।',
            'कंडक्टर के सबसे नजदीक वाली डिस्क पर अधिकतम वोल्टेज तनाव होता है।',
            'गार्ड रिंग लगाने से स्ट्रिंग दक्षता 100% के पास पहुँचती है।'
          ],
          bn: [
            'বাতাসের ডাইইলেক্ট্রিক ব্রেকডাউন শক্তি ৩০ kV/cm (পিক) বা ২১.২ kV/cm (rms)।',
            'ঝড়বৃষ্টির আর্দ্র আবহাওয়ায় ক্রিটিকাল ভোল্টেজ ২০% কমে যায়, ফলে দ্রুত করোনা শুরু হয়।',
            'কন্ডাক্টরের সবচেয়ে কাছের নিচের ডিস্কটিতে সর্বোচ্চ ভোল্টেজ চাপ পড়ে।',
            'গার্ড রিং যুক্ত করলে স্ট্রিং এফিসিয়েন্সি প্রায় ১০০% এর কাছাকাছি পৌঁছায়।'
          ]
        },
        formulas: [
          {
            id: 'f-corona-vd',
            name: { en: 'Critical Disruptive Voltage (Vd)', hi: 'क्रिटिकल डिसरप्टिव वोल्टेज', bn: 'ক্রিটিকাল ডিসরাপ্টিভ ভোল্টেজ' },
            formula: 'V_d = m_0 \\cdot g_0 \\cdot \\delta \\cdot r \\cdot \\ln\\left( \\frac{D}{r} \\right) \\text{ kV/phase (rms)}',
            description: {
              en: 'g0 = 21.2 kV/cm, m0 = irregularity factor, δ = air density factor, r = radius, D = spacing.',
              hi: 'कोरोना शुरू होने का न्यूनतम वोल्टेज।',
              bn: 'করোনা শুরু হওয়ার ন্যূনতম ফেজ ভোল্টেজ সমীকরণ।'
            }
          },
          {
            id: 'f-string-eff',
            name: { en: 'Insulator String Efficiency', hi: 'स्ट्रिंग दक्षता सूत्र', bn: 'স্ট্রিং এফিসিয়েন্সি সূত্র' },
            formula: '\\eta_{\\text{string}} = \\frac{V_{\\text{phase}}}{n \\times V_n} \\times 100\\%',
            description: {
              en: 'Vphase = Total phase voltage across string, n = Number of discs, Vn = Voltage across the bottom-most unit.',
              hi: 'n = डिस्कों की संख्या, Vn = निचले डिस्क का वोल्टेज।',
              bn: 'n = ডিস্কের সংখ্যা, Vn = কন্ডাক্টরের সাথে সংযুক্ত নিচের ডিস্কের ভোল্টেজ।'
            }
          }
        ],
        solvedExamples: [
          {
            id: 'ex-string-3disc',
            problem: {
              en: 'In a 3-disc suspension insulator string, the shunt capacitance between each pin and earth is 10% (k = 0.1) of the mutual self-capacitance of each disc. If the string withstands a line-to-ground phase voltage of 33 kV, calculate: (a) Voltage across each disc, and (b) String efficiency.',
              hi: 'एक 3-डिस्क सस्पेंशन इंसुलेटर में शंट धारिता स्व-धारिता की 10% (k = 0.1) है। कुल फेज वोल्टेज 33 kV होने पर: (a) प्रत्येक डिस्क का वोल्टेज और (b) स्ट्रिंग दक्षता ज्ञात कीजिए।',
              bn: 'একটি ৩-ডিস্ক সাসপেনশন ইনসুলেটর স্ট্রিংয়ে শান্ট ক্যাপাসিট্যান্স সেলফ ক্যাপাসিট্যান্সের ১০% (k = ০.১)। মোট ফেজ ভোল্টেজ ৩৩ kV হলে নির্ণয় করুন: (ক) প্রতিটি ডিস্কের আড়াআড়িতে ভোল্টেজ, এবং (খ) স্ট্রিং এফিসিয়েন্সি।'
            },
            solution: {
              en: 'Step 1: Disc node voltage relations for k = 0.1:\nLet V1 = voltage across top disc (nearest cross-arm).\nVoltage across middle disc V2 = V1 × (1 + k) = V1 × (1 + 0.1) = 1.1 V1\nVoltage across bottom disc V3 = V1 × (1 + 3k + k²) = V1 × (1 + 0.3 + 0.01) = 1.31 V1\nStep 2: Total voltage V = V1 + V2 + V3 = V1 (1 + 1.1 + 1.31) = 3.41 V1\nGiven total line-to-ground voltage V = 33 kV\nTherefore V1 = 33 / 3.41 = 9.677 kV\nV2 = 1.1 × 9.677 = 10.645 kV\nV3 = 1.31 × 9.677 = 12.678 kV\nStep 3: String Efficiency η = V / (3 × V3) × 100% = 33 / (3 × 12.678) × 100% = 33 / 38.034 × 100% = 86.76%',
              hi: 'चरण 1: V2 = 1.1 V1, V3 = 1.31 V1\nचरण 2: कुल V = 3.41 V1 = 33 kV ⇒ V1 = 9.68 kV, V2 = 10.65 kV, V3 = 12.68 kV\nचरण 3: स्ट्रिंग दक्षता η = 33 / (3 × 12.68) = 86.76%',
              bn: 'ধাপ ১: V2 = ১.১ V1, V3 = ১.৩১ V1\nধাপ ২: মোট V = ৩.৪১ V1 = ৩৩ kV ⇒ V1 = ৯.৬৮ kV, V2 = ১০.৬৫ kV, V3 = ১২.৬৮ kV\nধাপ ৩: স্ট্রিং এফিসিয়েন্সি η = ৩৩ / (৩ × ১২.৬৮) = ৮৬.৭৬%'
            },
            givenValues: { 'Total Phase Voltage': '33 kV', 'Number of Discs n': '3', 'Shunt Ratio k': '0.1' },
            finalAnswer: {
              en: 'V1 = 9.68 kV, V2 = 10.65 kV, V3 = 12.68 kV, String Efficiency = 86.76%',
              hi: 'V1 = 9.68 kV, V2 = 10.65 kV, V3 = 12.68 kV, स्ट्रिंग दक्षता = 86.76%',
              bn: 'V1 = ৯.৬৮ kV, V2 = ১০.৬৫ kV, V3 = ১২.৬৮ kV, স্ট্রিং এফিসিয়েন্সি = ৮৬.৭৬%'
            }
          }
        ],
        mcqs: [
          {
            id: 'mcq-insulator-1',
            question: {
              en: 'In a suspension insulator string, why does the bottom-most unit closest to the conductor experience the maximum voltage stress?',
              hi: 'सस्पेंशन इंसुलेटर स्ट्रिंग में कंडक्टर के सबसे पास वाली निचली डिस्क पर अधिकतम वोल्टेज तनाव क्यों होता है?',
              bn: 'সাসপেনশন ইনসুলেটর স্ট্রিংয়ে কন্ডাক্টরের সবচেয়ে কাছের নিচের ডিস্কে সর্বোচ্চ ভোল্টেজ স্ট্রেস কেন পড়ে?'
            },
            options: [
              { id: 'opt-1', text: { en: 'Because it carries the sum of all capacitive charging currents flowing through the upper units and tower shunt paths', hi: 'क्योंकि यह ऊपरी इकाइयों और टावर शंट पाथ से बहने वाली सभी कैपेसिटिव धाराओं का योग वहन करती है', bn: 'কারণ এটি ওপরের সকল ডিস্ক ও টাওয়ার শান্ট পাথের মোট চার্জিং কারেন্ট বহন করে' } },
              { id: 'opt-2', text: { en: 'Because it is made of inferior ceramic material', hi: 'क्योंकि यह घटिया सामग्री से बनी होती है', bn: 'কারণ এটি দুর্বল সিরামিক দিয়ে তৈরি' } },
              { id: 'opt-3', text: { en: 'Because of magnetic induction from the ground', hi: 'जमीन से चुंबकीय प्रेरण के कारण', bn: 'মাটির চৌম্বক আবেশের কারণে' } },
              { id: 'opt-4', text: { en: 'Due to direct sunlight on the lower disc', hi: 'सीधी धूप पड़ने के कारण', bn: 'সরাসরি সূর্যালোক পড়ার কারণে' } }
            ],
            correctOptionId: 'opt-1',
            explanation: {
              en: 'Shunt capacitances between intermediate link pins and the grounded tower continuously divert current, causing the bottom unit to carry the highest cumulative charging current, generating the largest I/ωC voltage drop.',
              hi: 'टॉवर के साथ शंट धारिता के कारण निचली डिस्क से सबसे अधिक कुल धारा प्रवाहित होती है, जिससे उस पर वोल्टेज सबसे ज्यादा होता है।',
              bn: 'টাওয়ারের শান্ট ক্যাপাসিট্যান্সের কারণে নিচের ডিস্ক দিয়ে সবচেয়ে বেশি কারেন্ট প্রবাহিত হয়, ফলে এর দুই প্রান্তে সর্বোচ্চ ভোল্টেজ ড্রপ হয়।'
            }
          }
        ]
      }
    }
  ]
};
