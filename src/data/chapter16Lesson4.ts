import { Lesson } from '../types';

export const LESSON_TRANSMISSION_MODELS: Lesson = {
  id: 'lsn-ch16-transmission-line-models',
  topicId: 'tp-ch16-transmission-line-models',
  chapterId: 'ch-advanced-power-system-analysis',
  order: 4,
  title: {
    en: 'Short, Medium & Long Transmission-Line Two-Port Models',
    hi: 'लघु, मध्यम एवं दीर्घ पारेषण लाइन टू-पोर्ट मॉडल',
    bn: 'ক্ষুদ্র, মাঝারি ও দীর্ঘ ট্রান্সমিশন লাইন টু-পোর্ট মডেল'
  },
  description: {
    en: 'Two-port ABCD network representation of overhead transmission lines: short line lumped model (l < 80 km), medium line nominal-T and nominal-π models (80 < l < 250 km), and rigorous distributed-parameter hyperbolic wave equations for long lines (l > 250 km).',
    hi: 'ओवरहेड पारेषण लाइनों का टू-पोर्ट ABCD नेटवर्क निरूपण: लघु लाइन लम्पड मॉडल (l < 80 km), मध्यम लाइन नॉमिनल-T एवं नॉमिनल-π मॉडल (80 < l < 250 km), तथा दीर्घ लाइनों (l > 250 km) के लिए अतिपरवलयिक (hyperbolic) तरंग समीकरण।',
    bn: 'ওভারহেড সঞ্চালন লাইনের টু-পোর্ট ABCD নেটওয়ার্ক মডেল: ক্ষুদ্র লাইনের লাম্পড মডেল (l < ৮০ km), মাঝারি লাইনের নমিনাল-T ও নমিনাল-π মডেল (৮০ < l < ২৫০ km) এবং দীর্ঘ লাইনের (l > ২৫০ km) জন্য হাইপারবোলিক তরঙ্গ সমীকরণ।'
  },
  estimatedMinutes: 42,
  easyExplanation: {
    en: 'In power grid analysis, a transmission line connects a sending-end generation bus (Vs, Is) to a receiving-end substation bus (Vr, Ir). We model this transmission channel as an electrical two-port network governed by four universal ABCD constants: Vs = A*Vr + B*Ir, and Is = C*Vr + D*Ir. For short lines under 80 km, capacitance is so small that it is neglected, treating the line as a simple series resistor and inductor. For medium lines (80 to 250 km), shunt capacitance can no longer be ignored and is lumped either at both ends (nominal-π) or at the center (nominal-T). For long lines over 250 km, parameters are continuously distributed along the wire, requiring hyperbolic sine and cosine functions (sinh, cosh) to account for traveling electromagnetic waves!',
    hi: 'पावर ग्रिड में ट्रांसमिशन लाइन सेंडिंग-एंड बस (Vs, Is) को रिसीविंग-एंड बस (Vr, Ir) से जोड़ती है। इसे टू-पोर्ट ABCD नेटवर्क के रूप में मॉडल किया जाता है: Vs = A*Vr + B*Ir और Is = C*Vr + D*Ir। 80 किमी से छोटी लाइनों में धारिता (Capacitance) को नगण्य माना जाता है। 80 से 250 किमी की मध्यम लाइनों में धारिता को सिरों पर (नॉमिनल-π) या केंद्र में (नॉमिनल-T) लम्प किया जाता है। 250 किमी से लंबी लाइनों में विद्युत चुम्बकीय तरंगों के व्यवहार को सटीक रूप से दर्शाने के लिए अतिपरवलयिक फलनों (sinh, cosh) की आवश्यकता होती है!',
    bn: 'পাওয়ার গ্রিডে একটি সঞ্চালন লাইন সেন্ডিং-এন্ড (Vs, Is) এবং রিসিভিং-এন্ডের (Vr, Ir) মধ্যে সংযোগ স্থাপন করে। একে টু-পোর্ট ABCD নেটওয়ার্কের মাধ্যমে প্রকাশ করা হয়: Vs = A*Vr + B*Ir এবং Is = C*Vr + D*Ir। ৮০ কিমি-র কম দৈর্ঘ্যের লাইনে ক্যাপাসিট্যান্স অগ্রাহ্য করা হয়। ৮০ থেকে ২৫০ কিমি দূরত্বের মাঝারি লাইনে ক্যাপাসিট্যান্সকে দুই প্রান্তে (নমিনাল-π) বা মাঝে (নমিনাল-T) কেন্দ্রীভূত ধরা হয়। ২৫০ কিমি-র দীর্ঘ লাইনে ক্রমাগত বিতরিত প্যারামিটারের সঠিক রূপায়ণে হাইপারবোলিক ফাংশন (sinh, cosh) ব্যবহৃত হয়!'
  },
  detailedExplanation: {
    en: 'The transmission matrix relates sending-end voltage and current phasors to receiving-end quantities:\n[Vs] = [A  B] [Vr]\n[Is]   [C  D] [Ir]\n\nUniversal Two-Port Properties:\n1. Reciprocity: All passive, linear, bilateral transmission lines satisfy AD - BC = 1.\n2. Symmetry: Symmetrical lines identical from either end satisfy A = D.\n\nLine Classification Categories:\n1. Short Line Model (Length l < 80 km or f * l < 4000 Hz·km):\n• Shunt charging current is negligible (Y = 0).\n• Series impedance Z = R + jX = z * l.\n• ABCD Matrix: A = 1, B = Z, C = 0, D = 1.\n\n2. Medium Line Models (80 km < l < 250 km or 4000 < f * l < 10,000 Hz·km):\nTotal series impedance Z = z * l, total shunt admittance Y = y * l (where y = j * omega * C_n).\n• Nominal-π Model: Shunt admittance is split into two equal halves (Y/2) placed at the sending and receiving buses:\n  A = D = 1 + (Y * Z / 2)\n  B = Z\n  C = Y * (1 + (Y * Z / 4))\n• Nominal-T Model: Series impedance is split into two halves (Z/2) with total shunt admittance Y connected at the midpoint:\n  A = D = 1 + (Y * Z / 2)\n  B = Z * (1 + (Y * Z / 4))\n  C = Y\n\n3. Long Line Rigorous Distributed-Parameter Model (l > 250 km):\nParameters R, L, C, and G are uniformly distributed along the differential length dx. Wave propagation is governed by the telegrapher’s equations:\nd²V/dx² = gamma² * V, where gamma = alpha + j*beta = sqrt(z * y) is the complex propagation constant, and Z_c = sqrt(z / y) is the characteristic impedance.\n• ABCD Hyperbolic Matrix:\n  A = D = cosh(gamma * l)\n  B = Z_c * sinh(gamma * l)\n  C = (1 / Z_c) * sinh(gamma * l)\n• Equivalent-π Circuit: Replaces lumped parameters with corrected values Z\' = Z * (sinh(gamma*l) / (gamma*l)) and Y\'/2 = (Y/2) * (tanh(gamma*l/2) / (gamma*l/2)).',
    hi: 'ट्रांसमिशन मैट्रिक्स सेंडिंग-एंड वोल्टेज और करंट को रिसीविंग-एंड से जोड़ता है:\nVs = A*Vr + B*Ir, Is = C*Vr + D*Ir।\nसभी पैसिव, सममित लाइनों के लिए AD - BC = 1 और A = D होता है।\n\n1. लघु लाइन (l < 80 km):\nA = 1, B = Z, C = 0, D = 1।\n\n2. मध्यम लाइन (80 < l < 250 km):\n• नॉमिनल-π: A = D = 1 + YZ/2, B = Z, C = Y(1 + YZ/4)।\n• नॉमिनल-T: A = D = 1 + YZ/2, B = Z(1 + YZ/4), C = Y।\n\n3. दीर्घ लाइन (l > 250 km):\nप्रसारण स्थिरांक gamma = sqrt(z*y) और लाक्षणिक प्रतिबाधा Z_c = sqrt(z/y)।\nA = D = cosh(gamma*l), B = Z_c * sinh(gamma*l), C = (1/Z_c) * sinh(gamma*l)।',
    bn: 'ট্রান্সমিশন ম্যাট্রিক্স সেন্ডিং ও রিসিভিং প্রান্তের মধ্যে সংযোগ স্থাপন করে:\nVs = A*Vr + B*Ir এবং Is = C*Vr + D*Ir।\nপ্রতিসাম্য ও দ্বিমুখী লাইনের জন্য AD - BC = ১ এবং A = D।\n\n১. ক্ষুদ্র লাইন (l < ৮০ km):\nA = ১, B = Z, C = ০, D = ১।\n\n২. মাঝারি লাইন (৮০ < l < ২৫০ km):\n• নমিনাল-π: A = D = ১ + YZ/২, B = Z, C = Y(১ + YZ/৪)।\n• নমিনাল-T: A = D = ১ + YZ/২, B = Z(১ + YZ/৪), C = Y।\n\n৩. দীর্ঘ লাইন (l > ২৫০ km):\nপ্রোপাগেশন কনস্ট্যান্ট gamma = sqrt(z*y) এবং ক্যারেক্টারিস্টিক ইম্পিডেন্স Z_c = sqrt(z/y)।\nA = D = cosh(gamma*l), B = Z_c * sinh(gamma*l), C = (১/Z_c) * sinh(gamma*l)।'
  },
  formulas: [
    {
      id: 'f-ch16-abcd-matrix',
      symbol: '[ABCD]',
      expression: '\\begin{bmatrix} V_s \\\\ I_s \\end{bmatrix} = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix} \\begin{bmatrix} V_r \\\\ I_r \\end{bmatrix}, \\quad A D - B C = 1',
      title: {
        en: 'Two-Port ABCD Transmission Line Matrix',
        hi: 'टू-पोर्ट ABCD पारेषण लाइन मैट्रिक्स',
        bn: 'টু-পোর্ট ABCD সঞ্চালন লাইন ম্যাট্রিক্স'
      },
      description: {
        en: 'Relates sending-end phasors to receiving-end phasors; satisfies reciprocity (AD - BC = 1) and symmetry (A = D).',
        hi: 'सेंडिंग-एंड फेजर्स को रिसीविंग-एंड फेजर्स से जोड़ता है; पारस्परिकता (AD - BC = 1) और समरूपता (A = D) को संतुष्ट करता है।',
        bn: 'সেন্ডিং-এন্ড এবং রিসিভিং-এন্ড ফেজরের সম্পর্ক স্থাপন করে; রেসিপ্রোসিটি (AD - BC = ১) ও প্রতিসাম্য (A = D) নিশ্চিত করে।'
      },
      variables: [
        { symbol: 'V_s, V_r', name: { en: 'Sending and receiving end phase voltages (V)', hi: 'सेंडिंग एवं रिसीविंग वोल्टेज (V)', bn: 'সেন্ডিং ও রিসিভিং ভোল্টেজ (V)' } },
        { symbol: 'I_s, I_r', name: { en: 'Sending and receiving end line currents (A)', hi: 'सेंडिंग एवं रिसीविंग धाराएँ (A)', bn: 'সেন্ডিং ও রিসিভিং কারেন্ট (A)' } },
        { symbol: 'A, D', name: { en: 'Dimensionless voltage ratio parameters', hi: 'विमाहीन वोल्टेज अनुपात स्थिरांक', bn: 'মাত্রাহীন ভোল্টেজ অনুপাত ধ্রুবক' } },
        { symbol: 'B', name: { en: 'Transfer impedance parameter (Ω)', hi: 'स्थानांतरण प्रतिबाधा (Ω)', bn: 'ট্রান্সফার ইম্পিডেন্স (Ω)' } },
        { symbol: 'C', name: { en: 'Transfer admittance parameter (S or mho)', hi: 'स्थानांतरण प्रवेश्यता (S या mho)', bn: 'ট্রান্সফার অ্যাডমিট্যান্স (S বা mho)' } }
      ]
    },
    {
      id: 'f-ch16-nominal-pi-abcd',
      symbol: 'A_{\\pi}',
      expression: 'A = D = 1 + \\frac{Y Z}{2}, \\quad B = Z, \\quad C = Y \\left(1 + \\frac{Y Z}{4}\\right)',
      title: {
        en: 'Nominal-π Medium Transmission Line Parameters',
        hi: 'नॉमिनल-π मध्यम पारेषण लाइन स्थिरांक',
        bn: 'নমিনাল-π মাঝারি সঞ্চালন লাইন প্যারামিটার'
      },
      description: {
        en: 'Calculates ABCD constants for a medium line modeled as total series impedance Z with shunt admittance halves Y/2 at each bus.',
        hi: 'कुल सीरीज प्रतिबाधा Z और दोनों सिरों पर Y/2 शंट एडमिटेंस वाली मध्यम लाइन के लिए ABCD स्थिरांक ज्ञात करता है।',
        bn: 'সিরিজ ইম্পিডেন্স Z এবং উভয় প্রান্তে Y/২ শান্ট অ্যাডমিট্যান্সযুক্ত মাঝারি লাইনের ABCD ধ্রুবক গণনা করে।'
      },
      variables: [
        { symbol: 'Z', name: { en: 'Total series line impedance (R + jX, Ω)', hi: 'कुल सीरीज प्रतिबाधा (Ω)', bn: 'মোট সিরিজ ইম্পিডেন্স (Ω)' } },
        { symbol: 'Y', name: { en: 'Total shunt line admittance (jωC, S)', hi: 'कुल शंट एडमिटेंस (S)', bn: 'মোট শান্ট অ্যাডমিট্যান্স (S)' } }
      ]
    },
    {
      id: 'f-ch16-long-line-hyperbolic',
      symbol: 'A_{long}',
      expression: 'A = \\cosh(\\gamma l), \\quad B = Z_c \\sinh(\\gamma l), \\quad C = \\frac{1}{Z_c} \\sinh(\\gamma l)',
      title: {
        en: 'Long Transmission Line Hyperbolic Wave Parameters',
        hi: 'दीर्घ पारेषण लाइन अतिपरवलयिक तरंग स्थिरांक',
        bn: 'দীর্ঘ সঞ্চালন লাইন হাইপারবোলিক তরঙ্গ ধ্রুবক'
      },
      description: {
        en: 'Exact distributed-parameter ABCD constants expressed using propagation constant gamma and characteristic impedance Z_c.',
        hi: 'प्रसारण स्थिरांक gamma और लाक्षणिक प्रतिबाधा Z_c का उपयोग करके सटीक वितरित-पैरामीटर ABCD स्थिरांक।',
        bn: 'প্রোপাগেশন কনস্ট্যান্ট gamma এবং ক্যারেক্টারিস্টিক ইম্পিডেন্স Z_c ব্যবহার করে দীর্ঘ লাইনের সুনির্দিষ্ট ABCD ধ্রুবক।'
      },
      variables: [
        { symbol: '\\gamma', name: { en: 'Propagation constant = sqrt(z * y) (m^-1)', hi: 'प्रसारण स्थिरांक (m^-1)', bn: 'প্রোপাগেশন কনস্ট্যান্ট (m^-1)' } },
        { symbol: 'Z_c', name: { en: 'Characteristic impedance = sqrt(z / y) (Ω)', hi: 'लाक्षणिक प्रतिबाधा (Ω)', bn: 'ক্যারেক্টারিস্টিক ইম্পিডেন্স (Ω)' } },
        { symbol: 'l', name: { en: 'Total line length (km or m)', hi: 'लाइन की कुल लंबाई (km)', bn: 'লাইনের মোট দৈর্ঘ্য (km)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch16-l04-line-models',
      title: {
        en: 'Derivation of Nominal-π and Rigorous Hyperbolic Distributed Equations',
        hi: 'नॉमिनल-π एवं सटीक अतिपरवलयिक वितरित समीकरणों का निगमन',
        bn: 'নমিনাল-π ও সুনির্দিষ্ট হাইপারবোলিক বিতরিত সমীকরণসমূহের ব্যুৎপত্তি'
      },
      content: {
        en: 'Understanding the physical limits of lumped models versus distributed models is fundamental to modern transmission planning:\n\n1. When is a Lumped Model Valid?\nAt power frequency (f = 50 Hz), the electromagnetic wavelength in air is lambda = c / f = (3 * 10^5 km/s) / 50 Hz = 6,000 km. When line length l < 0.04 * lambda (~240 km), phase shift across the line is small (< 15 degrees), permitting lumped representations like nominal-π.\n\n2. The Nominal-π Circuit Analysis:\nAt the receiving end, receiving current Ir flows into the load, while shunt capacitor Y/2 draws current Ir_cap = (Y/2) * Vr. The series branch current is I_series = Ir + (Y/2)*Vr. The sending voltage is:\nVs = Vr + Z * I_series = Vr + Z * (Ir + (Y/2)*Vr) = (1 + YZ/2) * Vr + Z * Ir.\nComparing with Vs = A*Vr + B*Ir confirms: A = 1 + YZ/2, and B = Z.\nSimilarly, the sending current Is = I_series + (Y/2)*Vs, yielding C = Y * (1 + YZ/4) and D = 1 + YZ/2.\n\n3. High-Frequency and Long-Line Physics:\nFor lines exceeding 250 km or during lightning surges (f > 10 kHz), electromagnetic wave reflections at terminal boundaries cannot be captured by lumped inductors and capacitors. Hyperbolic functions cosh(gamma*l) and sinh(gamma*l) naturally incorporate forward-traveling and reverse-reflected wave components.',
        hi: '50 Hz पर प्रकाश की चाल से विद्युत चुम्बकीय तरंगदैर्घ्य 6,000 किमी होती है। 240 किमी से कम लंबाई की लाइनों में फेज विस्थापन 15 डिग्री से कम होता है, जिससे नॉमिनल-π जैसे लम्पड मॉडल सटीक परिणाम देते हैं। 250 किमी से अधिक लंबाई में वेव रिफ्लेक्शन के कारण वितरित अतिपरवलयिक फलनों का उपयोग अनिवार्य हो जाता है।',
        bn: '৫০ Hz এ বায়ুতে ইলেক্ট্রোম্যাগনেটিক তরঙ্গের দৈর্ঘ্য ৬,০০০ কিমি। ২৪০ কিমি পর্যন্ত লাইনে ফেজ ব্যবধান ১৫ ডিগ্রির কম হওয়ায় নমিনাল-π মডেল নির্ভুল ফল দেয়। ২৫০ কিমি-র বেশি দৈর্ঘ্যে প্রতিফলিত তরঙ্গের প্রভাব বিবেচনা করতে হাইপারবোলিক সমীকরণ অপরিহার্য।'
      },
      schematicId: 'sch-ch16-transmission-models'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch16-l04-01',
      problem: {
        en: 'A 3-phase, 50 Hz, 150 km overhead transmission line has a total series impedance of Z = 30 + j120 Ω and a total shunt admittance of Y = j0.001 S (Siemens). Using the nominal-π model, determine the ABCD parameters of the line and verify the reciprocity relation AD - BC = 1.',
        hi: 'एक 3-फेज, 50 Hz, 150 km ओवरहेड लाइन की कुल सीरीज प्रतिबाधा Z = 30 + j120 Ω और कुल शंट एडमिटेंस Y = j0.001 S है। नॉमिनल-π मॉडल का उपयोग करके लाइन के ABCD पैरामीटर ज्ञात कीजिए और AD - BC = 1 की पुष्टि कीजिए।',
        bn: 'একটি ১৫০ km দীর্ঘ ৩-ফেজ ৫০ Hz লাইনের মোট সিরিজ ইম্পিডেন্স Z = ৩০ + j১২০ Ω এবং মোট শান্ট অ্যাডমিট্যান্স Y = j০.০০১ S। নমিনাল-π মডেল ব্যবহার করে ABCD প্যারামিটার নির্ণয় করুন এবং AD - BC = ১ সম্পর্কটি যাচাই করুন।'
      },
      solution: {
        en: 'Given:\n• Z = 30 + j120 Ω\n• Y = j0.001 S = 0.001 ∠90° S\n\nStep 1: Calculate Product Y * Z:\nY * Z = (j0.001) * (30 + j120) = j0.03 - 0.12 = -0.12 + j0.03\n\nStep 2: Calculate A and D:\nA = D = 1 + (Y * Z / 2) = 1 + (-0.06 + j0.015) = 0.94 + j0.015 = 0.9401 ∠0.914°\n\nStep 3: Calculate B:\nB = Z = 30 + j120 Ω = 123.69 ∠75.96° Ω\n\nStep 4: Calculate C:\nC = Y * (1 + Y * Z / 4) = j0.001 * (1 + (-0.03 + j0.0075)) = j0.001 * (0.97 + j0.0075)\nC = -0.0000075 + j0.00097 S = 0.000970 ∠90.44° S\n\nStep 5: Verify Reciprocity (AD - BC = 1):\n• A² = (0.94 + j0.015)² = 0.8836 - 0.000225 + j0.0282 = 0.883375 + j0.0282\n• BC = Z * Y * (1 + YZ/4) = (-0.12 + j0.03) * (0.97 + j0.0075) = -0.1164 - j0.0009 + j0.0291 - 0.000225 = -0.116625 + j0.0282\n• AD - BC = A² - BC = (0.883375 + j0.0282) - (-0.116625 + j0.0282) = 1.000 + j0 = 1.000.',
        hi: 'चरण 1: Y * Z = j0.001 * (30 + j120) = -0.12 + j0.03\nचरण 2: A = D = 1 + YZ/2 = 0.94 + j0.015\nचरण 3: B = Z = 30 + j120 Ω\nचरण 4: C = Y(1 + YZ/4) = -7.5e-6 + j0.00097 S\nचरण 5: AD - BC = (0.94 + j0.015)² - Z*C = 1.000 + j0 (सत्यापित)।',
        bn: 'ধাপ ১: Y * Z = j০.০০১ * (৩০ + j১২০) = -০.১২ + j০.০৩\nধাপ ২: A = D = ১ + YZ/২ = ০.৯৪ + j০.০১৫\nধাপ ৩: B = Z = ৩০ + j১২০ Ω\nধাপ ৪: C = Y(১ + YZ/৪) = -৭.৫e-৬ + j০.০০০৯৭ S\nধাপ ৫: AD - BC = ১.০০০ (যাচাইকৃত)।'
      },
      givenValues: { 'Z': '30 + j120 Ω', 'Y': 'j0.001 S', 'Length': '150 km' },
      finalAnswer: {
        en: 'A = D = 0.940 + j0.015, B = 30 + j120 Ω, C = -0.0000075 + j0.00097 S (AD - BC = 1)',
        hi: 'A = D = 0.940 + j0.015, B = 30 + j120 Ω, C = -0.0000075 + j0.00097 S (AD - BC = 1)',
        bn: 'A = D = ০.৯৪০ + j০.০১৫, B = ৩০ + j১২০ Ω, C = -০.০০০০০৭৫ + j০.০০০৯৭ S (AD - BC = ১)'
      }
    },
    {
      id: 'ex-ch16-l04-02',
      problem: {
        en: 'A short 3-phase 33 kV transmission line of 20 km length has a series impedance per phase of Z = 4 + j10 Ω. It delivers 15 MW at 0.85 power factor lagging to a 33 kV load at the receiving end. Find the sending-end phase and line voltage.',
        hi: '20 किमी लंबी एक 3-फेज 33 kV लघु पारेषण लाइन का प्रति-फेज सीरीज प्रतिबाधा Z = 4 + j10 Ω है। यह 33 kV पर 0.85 लैगिंग पावर फैक्टर पर 15 MW का भार आपूर्ति करती है। सेंडिंग-एंड फेज और लाइन वोल्टेज ज्ञात कीजिए।',
        bn: '২০ কিমি দীর্ঘ একটি ৩-ফেজ ৩৩ kV ক্ষুদ্র লাইনের প্রতি-ফেজ সিরিজ ইম্পিডেন্স Z = ৪ + j১০ Ω। এটি ৩৩ kV লোডে ০.৮৫ ল্যাগিং পাওয়ার ফ্যাক্টরে ১৫ MW বিদ্যুৎ সরবরাহ করে। সেন্ডিং-এন্ড ফেজ ও লাইন ভোল্টেজ নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n• Receiving end line voltage V_r,LL = 33 kV\n• Receiving end phase voltage V_r = 33,000 / sqrt(3) = 19,052.56 V ∠0°\n• Load P = 15 MW, cos(phi) = 0.85 lag -> phi = -31.79°\n• Line impedance Z = 4 + j10 Ω\n\nStep 1: Calculate Receiving End Line Current I_r:\nI_r = P / (sqrt(3) * V_r,LL * cos(phi)) = (15 * 10^6) / (sqrt(3) * 33,000 * 0.85) = 308.87 A\nIn phasor form: I_r = 308.87 ∠-31.79° A = 308.87 * (0.85 - j0.5268) = 262.54 - j162.71 A\n\nStep 2: For Short Line, A = 1, B = Z, C = 0, D = 1:\nV_s = V_r + Z * I_r\n• Z * I_r = (4 + j10) * (262.54 - j162.71) = (1050.16 + 1627.10) + j(2625.40 - 650.84) = 2677.26 + j1974.56 V\n• V_s = 19,052.56 + (2677.26 + j1974.56) = 21,729.82 + j1974.56 V\n• Magnitude: |V_s| = sqrt((21,729.82)² + (1974.56)²) = sqrt(472,185,084 + 3,898,890) = 21,819.1 V (phase)\n\nStep 3: Calculate Sending End Line-to-Line Voltage:\nV_s,LL = sqrt(3) * 21,819.1 V = 37,791.8 V = 37.79 kV',
        hi: 'चरण 1: V_r (फेज) = 33,000 / sqrt(3) = 19,052.6 V\nI_r = 15e6 / (sqrt(3) * 33000 * 0.85) = 308.87 ∠-31.79° A = 262.54 - j162.71 A\nचरण 2: V_s = V_r + Z * I_r = 19052.6 + (4 + j10)*(262.54 - j162.71) = 21,729.8 + j1974.6 V\n|V_s| (फेज) = 21,819 V\nचरण 3: लाइन वोल्टेज V_s,LL = sqrt(3) * 21.82 kV = 37.79 kV।',
        bn: 'ধাপ ১: V_r (ফেজ) = ৩৩,০০০ / sqrt(৩) = ১৯,০৫২.৬ V\nI_r = ১৫e৬ / (sqrt(৩) * ৩৩০০০ * ০.৮৫) = ৩০৮.৮৭ ∠-৩১.৭৯° A\nধাপ ২: V_s = V_r + Z * I_r = ১৯০৫২.৬ + (৪ + j১০)*(২৬২.৫৪ - j১৬২.৭১) = ২১,৮১৯ V (ফেজ)\nধাপ ৩: লাইন ভোল্টেজ V_s,LL = sqrt(৩) * ২১.৮২ kV = ৩৭.৭৯ kV।'
      },
      givenValues: { 'V_r,LL': '33 kV', 'Z': '4 + j10 Ω', 'P': '15 MW', 'pf': '0.85 lag', 'Length': '20 km' },
      finalAnswer: {
        en: 'Sending phase voltage |Vs| = 21.82 kV, Sending line voltage |Vs,LL| = 37.79 kV',
        hi: 'सेंडिंग फेज वोल्टेज = 21.82 kV, सेंडिंग लाइन वोल्टेज = 37.79 kV',
        bn: 'সেন্ডিং ফেজ ভোল্টেজ = ২১.৮২ kV, সেন্ডিং লাইন ভোল্টেজ = ৩৭.৭৯ kV'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Transmission network expansion planning where lines are modeled as two-port branch impedances in load-flow programs.',
      'Evaluation of transmission line power transfer limits and thermal rating constraints.',
      'Sizing of series capacitors (to reduce parameter B) and shunt reactors (to counteract parameter C charging susceptance).'
    ],
    hi: [
      'पारेषण नेटवर्क विस्तार योजना जहां लोड-फ्लो प्रोग्राम में लाइनों को टू-पोर्ट मॉडल के रूप में दर्ज किया जाता है।',
      'पावर ट्रांसफर सीमाओं और थर्मल रेटिंग प्रतिबंधों का मूल्यांकन।',
      'सीरीज कैपेसिटर (B घटाने हेतु) और शंट रिएक्टर (C का मुकाबला करने हेतु) का चयन।'
    ],
    bn: [
      'লোড-ফ্লো সফটওয়্যারে সঞ্চালন লাইনকে টু-পোর্ট ব্রাঞ্চ হিসেবে মডেলিং।',
      'বিদ্যুৎ সঞ্চালনের ক্ষমতা ও তাপীয় সীমাবদ্ধতা মূল্যায়ন।',
      'সিরিজ ক্যাপাসিটর (B কমাতে) এবং শান্ট রিঅ্যাক্টর (C চার্জিং কমাতে) এর আকার নির্ধারণ।'
    ]
  },
  importantPoints: {
    en: [
      'All passive symmetrical lines strictly satisfy AD - BC = 1 and A = D.',
      'Short lines (< 80 km) ignore shunt capacitance: A = 1, B = Z, C = 0, D = 1.',
      'In nominal-π, B = Z, while in nominal-T, C = Y.',
      'Long lines (> 250 km) require hyperbolic wave equations: A = cosh(gamma*l), B = Z_c * sinh(gamma*l).'
    ],
    hi: [
      'सभी निष्क्रिय सममित लाइनें AD - BC = 1 और A = D को पूरी तरह संतुष्ट करती हैं।',
      'लघु लाइनें (< 80 km) शंट धारिता की उपेक्षा करती हैं: A = 1, B = Z, C = 0, D = 1।',
      'नॉमिनल-π में B = Z होता है, जबकि नॉमिनल-T में C = Y होता है।',
      'दीर्घ लाइनों (> 250 km) में अतिपरवलयिक फलनों का उपयोग किया जाता है: A = cosh(gamma*l)।'
    ],
    bn: [
      'সকল প্যাসিভ প্রতিসম লাইন AD - BC = ১ এবং A = D সম্পর্ক পুরোপুরি মেনে চলে।',
      'ক্ষুদ্র লাইনে (< ৮০ km) শান্ট ক্যাপাসিট্যান্স অগ্রাহ্য করা হয়: A = ১, B = Z, C = ০, D = ১।',
      'নমিনাল-π তে B = Z এবং নমিনাল-T তে C = Y হয়।',
      'দীর্ঘ লাইনের (> ২৫০ km) জন্য হাইপারবোলিক তরঙ্গ সমীকরণ প্রযোজ্য: A = cosh(gamma*l)।'
    ]
  },
  commonMistakes: {
    en: [
      'Mixing up line-to-line and line-to-neutral voltages in the ABCD equations (equations MUST be evaluated on a per-phase basis).',
      'Confusing the B parameter in nominal-T (Z*(1 + YZ/4)) with nominal-π (simply Z).',
      'Assuming parameter A is a pure real number; because lines have series resistance, A = 1 + YZ/2 is a complex number with a small imaginary part.'
    ],
    hi: [
      'ABCD समीकरणों में लाइन-टू-लाइन और फेज वोल्टेज को मिला देना (समीकरण हमेशा प्रति-फेज आधार पर हल होने चाहिए)।',
      'नॉमिनल-T के B पैरामीटर को नॉमिनल-π के साथ मिला देना।',
      'यह मानना कि A एक पूर्णतः वास्तविक संख्या है; सीरीज प्रतिरोध के कारण A सम्मिश्र (complex) होता है।'
    ],
    bn: [
      'ABCD সমীকরণে লাইন-টু-লাইন এবং ফেজ ভোল্টেজ গুলিয়ে ফেলা (হিসাব সর্বদা প্রতি-ফেজ ভিত্তিতে করতে হয়)।',
      'নমিনাল-T এবং নমিনাল-π এর B এবং C প্যারামিটারের মধ্যে বিভ্রান্ত হওয়া।',
      'A প্যারামিটারকে পুরোপুরি বাস্তব সংখ্যা মনে করা; লাইনের রোধের কারণে A একটি জটিল সংখ্যা।'
    ]
  },
  keyTakeaways: {
    en: [
      'ABCD two-port parameters standardize transmission modeling across any distance.',
      'Short lines neglect capacitance, medium lines use lumped π or T circuits, and long lines require exact hyperbolic distributed-wave models.',
      'The reciprocity property AD - BC = 1 provides an immediate integrity check for calculated parameters.'
    ],
    hi: [
      'ABCD टू-पोर्ट पैरामीटर किसी भी दूरी की ट्रांसमिशन लाइनों का मानकीकृत विश्लेषण करते हैं।',
      'लघु लाइनें धारिता छोड़ती हैं, मध्यम लाइनें लम्पड π या T उपयोग करती हैं, और दीर्घ लाइनें अतिपरवलयिक मॉडल का उपयोग करती हैं।',
      'पारस्परिकता नियम AD - BC = 1 गणना की सत्यता की त्वरित पुष्टि करता है।'
    ],
    bn: [
      'ABCD টু-পোর্ট প্যারামিটার যেকোনো দূরত্বের সঞ্চালন লাইনের মানসম্মত গাণিতিক রূপ প্রদান করে।',
      'ক্ষুদ্র লাইনে ক্যাপাসিট্যান্স বাদ পড়ে, মাঝারি লাইনে ল্যাম্পড π বা T এবং দীর্ঘ লাইনে হাইপারবোলিক তরঙ্গ মডেল ব্যবহৃত হয়।',
      'AD - BC = ১ সম্পর্কটি যেকোনো হিসাবের যথার্থতা যাচাইয়ে সহায়তা করে।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch16-l04-01',
      question: {
        en: 'For any passive, linear, bilateral transmission line, what fundamental condition must the ABCD parameters always satisfy?',
        hi: 'किसी भी निष्क्रिय, रैखिक, द्विपक्षीय पारेषण लाइन के लिए, ABCD मापदंडों को हमेशा किस मूलभूत शर्त को पूरा करना चाहिए?',
        bn: 'যেকোনো প্যাসিভ, রৈখিক, দ্বিমুখী সঞ্চালন লাইনের ক্ষেত্রে ABCD প্যারামিটারসমূহ সর্বদা কোন মৌলিক শর্তটি পূরণ করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'AD - BC = 1', hi: 'AD - BC = 1', bn: 'AD - BC = ১' } },
        { id: 'opt-2', text: { en: 'AB - CD = 0', hi: 'AB - CD = 0', bn: 'AB - CD = ০' } },
        { id: 'opt-3', text: { en: 'A + D = B + C', hi: 'A + D = B + C', bn: 'A + D = B + C' } },
        { id: 'opt-4', text: { en: 'A * D = 0', hi: 'A * D = 0', bn: 'A * D = ০' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Reciprocity dictates that the determinant of the transmission ABCD matrix must equal unity: AD - BC = 1.',
        hi: 'पारस्परिकता (Reciprocity) के नियम के अनुसार ABCD मैट्रिक्स का सारणिक 1 होना चाहिए: AD - BC = 1।',
        bn: 'রেসিপ্রোসিটি বা পারস্পরিকতার নিয়মানুসারে ট্রান্সমিশন ম্যাট্রিক্সের নির্ণায়ক সর্বদা ১ হয়: AD - BC = ১।'
      }
    },
    {
      id: 'mcq-ch16-l04-02',
      question: {
        en: 'What are the ABCD parameters of a short transmission line (l < 80 km) having series impedance Z?',
        hi: 'सीरीज प्रतिबाधा Z वाली लघु पारेषण लाइन (l < 80 km) के ABCD पैरामीटर क्या होते हैं?',
        bn: 'সিরিজ ইম্পিডেন্স Z বিশিষ্ট একটি ক্ষুদ্র সঞ্চালন লাইনের (l < ৮০ km) ABCD প্যারামিটার কী হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'A = 1, B = Z, C = 0, D = 1', hi: 'A = 1, B = Z, C = 0, D = 1', bn: 'A = ১, B = Z, C = ০, D = ১' } },
        { id: 'opt-2', text: { en: 'A = 0, B = Z, C = 1, D = 0', hi: 'A = 0, B = Z, C = 1, D = 0', bn: 'A = ০, B = Z, C = ১, D = ০' } },
        { id: 'opt-3', text: { en: 'A = Z, B = 1, C = 0, D = Z', hi: 'A = Z, B = 1, C = 0, D = Z', bn: 'A = Z, B = ১, C = ০, D = Z' } },
        { id: 'opt-4', text: { en: 'A = 1, B = 0, C = Z, D = 1', hi: 'A = 1, B = 0, C = Z, D = 1', bn: 'A = ১, B = ০, C = Z, D = ১' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'For a short line, shunt admittance is zero (C = 0). Vs = Vr + Z*Ir (so A = 1, B = Z) and Is = Ir (so C = 0, D = 1).',
        hi: 'लघु लाइन में शंट धारिता शून्य मानी जाती है, इसलिए A = 1, B = Z, C = 0, D = 1 होता है।',
        bn: 'ক্ষুদ্র লাইনে শান্ট ক্যাপাসিট্যান্স শূন্য ধরা হয়, ফলে A = ১, B = Z, C = ০, D = ১।'
      }
    },
    {
      id: 'mcq-ch16-l04-03',
      question: {
        en: 'In the nominal-π model of a medium transmission line, what is the value of parameter B in terms of series impedance Z and shunt admittance Y?',
        hi: 'मध्यम पारेषण लाइन के नॉमिनल-π मॉडल में, सीरीज प्रतिबाधा Z और शंट एडमिटेंस Y के संदर्भ में पैरामीटर B का मान क्या है?',
        bn: 'মাঝারি সঞ্চালন লাইনের নমিনাল-π মডেলে সিরিজ ইম্পিডেন্স Z এবং শান্ট অ্যাডমিট্যান্স Y এর সাপেক্ষে প্যারামিটার B এর মান কত?'
      },
      options: [
        { id: 'opt-1', text: { en: 'B = Z', hi: 'B = Z', bn: 'B = Z' } },
        { id: 'opt-2', text: { en: 'B = Z * (1 + Y*Z / 4)', hi: 'B = Z * (1 + Y*Z / 4)', bn: 'B = Z * (১ + Y*Z / ৪)' } },
        { id: 'opt-3', text: { en: 'B = Z / 2', hi: 'B = Z / 2', bn: 'B = Z / ২' } },
        { id: 'opt-4', text: { en: 'B = Y', hi: 'B = Y', bn: 'B = Y' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'In nominal-π, the series branch connects the two nodes directly without series splitting, so B is simply equal to Z.',
        hi: 'नॉमिनल-π मॉडल में सीरीज शाखा बिना विभाजित हुए सीधे जुड़ती है, इसलिए B = Z होता है।',
        bn: 'নমিনাল-π মডেলে সিরিজ ব্রাঞ্চটি কোনো বিভাজন ছাড়াই সরাসরি নোড দুটির মধ্যে থাকে, তাই B = Z হয়।'
      }
    },
    {
      id: 'mcq-ch16-l04-04',
      question: {
        en: 'In the nominal-T model of a medium transmission line, what is the value of parameter C?',
        hi: 'मध्यम पारेषण लाइन के नॉमिनल-T मॉडल में पैरामीटर C का मान क्या होता है?',
        bn: 'মাঝারি সঞ্চালন লাইনের নমিনাল-T মডেলে প্যারামিটার C এর মান কত?'
      },
      options: [
        { id: 'opt-1', text: { en: 'C = Y', hi: 'C = Y', bn: 'C = Y' } },
        { id: 'opt-2', text: { en: 'C = Y * (1 + Y*Z / 4)', hi: 'C = Y * (1 + Y*Z / 4)', bn: 'C = Y * (১ + Y*Z / ৪)' } },
        { id: 'opt-3', text: { en: 'C = 0', hi: 'C = 0', bn: 'C = ০' } },
        { id: 'opt-4', text: { en: 'C = Y / 2', hi: 'C = Y / 2', bn: 'C = Y / ২' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'In nominal-T, total shunt admittance Y sits directly at the center node to ground, making C = Y.',
        hi: 'नॉमिनल-T मॉडल में पूरी शंट एडमिटेंस Y केंद्र में ग्राउंड से जुड़ी होती है, इसलिए C = Y होता है।',
        bn: 'নমিনাল-T মডেলে সম্পূর্ণ শান্ট অ্যাডমিট্যান্স Y কেন্দ্রে সংযুক্ত থাকে, ফলে C = Y হয়।'
      }
    },
    {
      id: 'mcq-ch16-l04-05',
      question: {
        en: 'For a long transmission line with propagation constant γ and length l, which hyperbolic expression represents parameter A?',
        hi: 'प्रसारण स्थिरांक γ और लंबाई l वाली दीर्घ पारेषण लाइन के लिए, कौन सा अतिपरवलयिक व्यंजक पैरामीटर A को दर्शाता है?',
        bn: 'প্রোপাগেশন কনস্ট্যান্ট γ এবং দৈর্ঘ্য l বিশিষ্ট দীর্ঘ সঞ্চালন লাইনের ক্ষেত্রে কোন হাইপারবোলিক রাশিটি প্যারামিটার A নির্দেশ করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'A = cosh(γ * l)', hi: 'A = cosh(γ * l)', bn: 'A = cosh(γ * l)' } },
        { id: 'opt-2', text: { en: 'A = sinh(γ * l)', hi: 'A = sinh(γ * l)', bn: 'A = sinh(γ * l)' } },
        { id: 'opt-3', text: { en: 'A = Z_c * cosh(γ * l)', hi: 'A = Z_c * cosh(γ * l)', bn: 'A = Z_c * cosh(γ * l)' } },
        { id: 'opt-4', text: { en: 'A = tanh(γ * l)', hi: 'A = tanh(γ * l)', bn: 'A = tanh(γ * l)' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'From the solution to the wave equations for a distributed long line: A = D = cosh(gamma * l).',
        hi: 'दीर्घ लाइन के तरंग समीकरण के हल से: A = D = cosh(gamma * l) होता है।',
        bn: 'দীর্ঘ লাইনের ওয়েভ সমীকরণ থেকে প্রাপ্ত: A = D = cosh(gamma * l)।'
      }
    },
    {
      id: 'mcq-ch16-l04-06',
      question: {
        en: 'What is the characteristic impedance Z_c of a lossless transmission line having inductance L and capacitance C per unit length?',
        hi: 'प्रति इकाई लंबाई प्रेरकत्व L और धारिता C वाली दोषरहित (lossless) पारेषण लाइन की लाक्षणिक प्रतिबाधा Z_c क्या है?',
        bn: 'প্রতি একক দৈর্ঘ্যে ইন্ডাকট্যান্স L এবং ক্যাপাসিট্যান্স C বিশিষ্ট লসলেস সঞ্চালন লাইনের ক্যারেক্টারিস্টিক ইম্পিডেন্স Z_c কত?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Z_c = sqrt(L / C)', hi: 'Z_c = sqrt(L / C)', bn: 'Z_c = sqrt(L / C)' } },
        { id: 'opt-2', text: { en: 'Z_c = sqrt(C / L)', hi: 'Z_c = sqrt(C / L)', bn: 'Z_c = sqrt(C / L)' } },
        { id: 'opt-3', text: { en: 'Z_c = 1 / sqrt(L * C)', hi: 'Z_c = 1 / sqrt(L * C)', bn: 'Z_c = ১ / sqrt(L * C)' } },
        { id: 'opt-4', text: { en: 'Z_c = omega * L', hi: 'Z_c = omega * L', bn: 'Z_c = omega * L' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'For a lossless line (R = 0, G = 0), Z_c = sqrt(z / y) = sqrt((j*omega*L) / (j*omega*C)) = sqrt(L / C).',
        hi: 'हानिरहित लाइन के लिए Z_c = sqrt(z/y) = sqrt(L/C) होता है।',
        bn: 'ক্ষতিহীন লাইনের ক্ষেত্রে Z_c = sqrt(z/y) = sqrt(L/C)।'
      }
    },
    {
      id: 'mcq-ch16-l04-07',
      question: {
        en: 'What are the physical dimensions (units) of parameter C in the ABCD matrix?',
        hi: 'ABCD मैट्रिक्स में पैरामीटर C की भौतिक विमाएँ (इकाइयाँ) क्या हैं?',
        bn: 'ABCD ম্যাট্রিক্সে প্যারামিটার C এর একক কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Siemens (S or mho, Ω^-1)', hi: 'सीमेंस (S या mho, Ω^-1)', bn: 'সিমেন্স (S বা mho, Ω^-1)' } },
        { id: 'opt-2', text: { en: 'Ohms (Ω)', hi: 'ओम (Ω)', bn: 'ওহম (Ω)' } },
        { id: 'opt-3', text: { en: 'Dimensionless (unitless)', hi: 'विमाहीन (मात्रकहीन)', bn: 'মাত্রাহীন' } },
        { id: 'opt-4', text: { en: 'Farads (F)', hi: 'फैराड (F)', bn: 'ফ্যারাড (F)' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Is = C*Vr + D*Ir. Since current Is is in amperes and voltage Vr is in volts, C has units of Amperes/Volt = Siemens (S or mho).',
        hi: 'Is = C*Vr + D*Ir में धारा/वोल्टेज का अनुपात सीमेंस (S या mho) होता है।',
        bn: 'Is = C*Vr + D*Ir সূত্রে কারেন্ট/ভোল্টেজ অনুপাতের একক সিমেন্স (S বা mho)।'
      }
    },
    {
      id: 'mcq-ch16-l04-08',
      question: {
        en: 'Why is a transmission line classified as symmetrical?',
        hi: 'पारेषण लाइन को सममित (symmetrical) क्यों वर्गीकृत किया जाता है?',
        bn: 'একটি সঞ্চালন লাইনকে প্রতিসম (symmetrical) বলা হয় কেন?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Parameter A equals parameter D (A = D)', hi: 'पैरामीटर A पैरामीटर D के बराबर होता है (A = D)', bn: 'প্যারামিটার A এবং D এর মান সমান (A = D)' } },
        { id: 'opt-2', text: { en: 'Parameter B equals parameter C', hi: 'पैरामीटर B पैरामीटर C के बराबर होता है', bn: 'প্যারামিটার B এবং C এর মান সমান' } },
        { id: 'opt-3', text: { en: 'Line resistance equals line reactance', hi: 'लाइन प्रतिरोध लाइन प्रतिघात के बराबर होता है', bn: 'লাইনের রোধ ও রিঅ্যাক্ট্যান্স সমান' } },
        { id: 'opt-4', text: { en: 'The line has no capacitance to earth', hi: 'लाइन की पृथ्वी से कोई धारिता नहीं होती', bn: 'লাইনের কোনো ক্যাপাসিট্যান্স থাকে না' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'A network is symmetrical if looking into it from either the sending or receiving port yields the same open-circuit and short-circuit impedances, which requires A = D.',
        hi: 'जब लाइन दोनों सिरों से एक समान दिखाई देती है, तो A = D होता है, जो समरूपता की पहचान है।',
        bn: 'উভয় প্রান্ত থেকে সার্কিটের আচরণ অভিন্ন হলে A = D হয়, যা নেটওয়ার্কের প্রতিসাম্য নির্দেশ করে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch16-l04-01',
      question: {
        en: 'A 200 km line has Z = 40 + j160 Ω and Y = j0.0012 S. Calculate the magnitude of parameter A using the nominal-π model.',
        hi: '200 किमी की एक लाइन में Z = 40 + j160 Ω और Y = j0.0012 S है। नॉमिनल-π मॉडल का उपयोग करके पैरामीटर A का परिमाण ज्ञात कीजिए।',
        bn: '২০০ কিমি দীর্ঘ লাইনের Z = ৪০ + j১৬০ Ω এবং Y = j০.০০১২ S। নমিনাল-π মডেল ব্যবহার করে প্যারামিটার A এর মান নির্ণয় করুন।'
      },
      hint: {
        en: 'Y*Z = (j0.0012)*(40 + j160) = -0.192 + j0.048. Then A = 1 + YZ/2 = 1 - 0.096 + j0.024 = 0.904 + j0.024. |A| = sqrt(0.904² + 0.024²) = 0.9043.',
        hi: 'A = 1 + YZ/2 = 0.904 + j0.024, |A| = 0.9043।',
        bn: 'A = ১ + YZ/২ = ০.৯০৪ + j০.০২৪, |A| = ০.৯০৪৩।'
      }
    }
  ]
};
