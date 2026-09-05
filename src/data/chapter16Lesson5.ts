import { Lesson } from '../types';

export const LESSON_TRANSMISSION_PERFORMANCE: Lesson = {
  id: 'lsn-ch16-transmission-line-performance',
  topicId: 'tp-ch16-transmission-line-performance',
  chapterId: 'ch-advanced-power-system-analysis',
  order: 5,
  title: {
    en: 'Transmission Performance, Voltage Regulation, Efficiency & Ferranti Effect',
    hi: 'पारेषण कार्यप्रदर्शन, वोल्टेज नियमन, दक्षता एवं फेरांटी प्रभाव',
    bn: 'ট্রান্সমিশন কর্মক্ষমতা, ভোল্টেজ রেগুলেশন, দক্ষতা ও ফেরান্টি প্রভাব'
  },
  description: {
    en: 'Analytical formulation of transmission performance indices: percentage voltage regulation (%VR), transmission efficiency (η), circle diagrams, Ferranti effect voltage rise under no-load or light-load conditions, and shunt reactor compensation sizing.',
    hi: 'पारेषण कार्यप्रदर्शन सूचकांकों का विश्लेषणात्मक निरूपण: प्रतिशत वोल्टेज नियमन (%VR), पारेषण दक्षता (η), सर्कल आरेख, नो-लोड या कम लोड स्थितियों में फेरांटी प्रभाव द्वारा वोल्टेज वृद्धि, तथा शंट रिएक्टर क्षतिपूर्ति आकार निर्धारण।',
    bn: 'সঞ্চালন কর্মক্ষমতা সূচকের গাণিতিক রূপ: শতকরা ভোল্টেজ রেগুলেশন (%VR), সঞ্চালন দক্ষতা (η), সার্কেল ডায়াগ্রাম, নো-লোড বা হালকা লোডে ফেরান্টি প্রভাবে ভোল্টেজ বৃদ্ধি এবং শান্ট রিঅ্যাক্টর কমপেনসেশনের আকার নির্ধারণ।'
  },
  estimatedMinutes: 42,
  easyExplanation: {
    en: 'Once an electric transmission line is built, operating utilities closely track two critical performance metrics: Voltage Regulation and Transmission Efficiency. Voltage regulation measures how much the receiving voltage changes when consumers turn their factory machinery and appliances on or off. Ideally, voltage should stay rock solid regardless of load. Transmission efficiency measures how much generated power actually reaches customers versus what is lost as heat in the conductors. Most intriguingly, when a long high-voltage line is disconnected or lightly loaded (such as late at night), the receiving-end voltage can actually soar higher than the sending-end voltage! This counter-intuitive phenomenon is the Ferranti Effect, caused by line charging capacitance drawing leading reactive current through series inductance.',
    hi: 'पारेषण लाइन चालू होने के बाद ऑपरेटर दो मुख्य मैट्रिक्स पर नज़र रखते हैं: वोल्टेज नियमन और पारेषण दक्षता। वोल्टेज नियमन यह मापता है कि पूरा लोड बंद करने पर रिसीविंग वोल्टेज में कितना परिवर्तन आता है। आदर्श रूप से यह शून्य होना चाहिए। दक्षता यह दर्शाती है कि उत्पन्न बिजली का कितना प्रतिशत वास्तव में उपभोक्ताओं तक पहुँचता है। सबसे दिलचस्प बात यह है कि जब लंबी लाइन पर कोई लोड नहीं होता, तो रिसीविंग-एंड वोल्टेज सेंडिंग-एंड वोल्टेज से भी अधिक हो जाता है! इसे फेरांटी प्रभाव (Ferranti Effect) कहा जाता है, जो लाइन की धारिता द्वारा खींची जाने वाली लीडिंग धारा के कारण होता है।',
    bn: 'সঞ্চালন লাইন চালুর পর দুটি প্রধান সূচক পর্যবেক্ষণ করা হয়: ভোল্টেজ রেগুলেশন ও সঞ্চালন দক্ষতা। লোড পরিবর্তনের সাথে রিসিভিং ভোল্টেজের পরিবর্তনের হারই হলো ভোল্টেজ রেগুলেশন, যা আদর্শভাবে শূন্য হওয়া বাঞ্ছনীয়। দক্ষতা নির্দেশ করে মোট উৎপাদিত বিদ্যুতের কত অংশ গ্রাহক পর্যায়ে পৌঁছায়। সবচেয়ে বিস্ময়কর বিষয় হলো, যখন কোনো দীর্ঘ উচ্চ ভোল্টেজ লাইন নো-লোড বা হালকা লোডে থাকে, তখন রিসিভিং প্রান্তের ভোল্টেজ প্রেরিত ভোল্টেজের চেয়েও বেড়ে যেতে পারে! একে ফেরান্টি প্রভাব (Ferranti Effect) বলা হয়, যা লাইনের ক্যাপাসিট্যান্সে সৃষ্ট লিডিং চার্জিং কারেন্টের ফলে ঘটে।'
  },
  detailedExplanation: {
    en: 'Transmission line performance is quantified through voltage stability, losses, and reactive power dynamics:\n\n1. Percentage Voltage Regulation (%VR):\nDefined as the percentage change in receiving-end voltage magnitude when full rated load is disconnected, with sending-end voltage held constant:\n%VR = (|V_r,NL| - |V_r,FL|) / |V_r,FL| * 100%\nUsing the two-port ABCD relationship, under no-load condition (I_r = 0):\nV_s = A * V_r,NL  ==>  |V_r,NL| = |V_s| / |A|\nTherefore, the exact formula for medium and long lines is:\n%VR = ((|V_s| / |A|) - |V_r,FL|) / |V_r,FL| * 100%\n• Lagging PF Loads (Inductive): |V_r,NL| > |V_r,FL|, leading to positive voltage regulation (receiving voltage drops as load increases).\n• Leading PF Loads (Capacitive): Armature/line capacitive support can cause |V_r,FL| > |V_r,NL|, producing negative voltage regulation.\n• Zero Voltage Regulation Condition: Occurs at a slightly leading power factor: tan(phi_r) = -R / X.\n\n2. Transmission Efficiency (η):\nη = (P_r,3ph / P_s,3ph) * 100% = (P_r / (P_r + 3 * I_line² * R)) * 100%\nwhere P_r = sqrt(3) * V_r,LL * I_r * cos(phi_r), and P_s = sqrt(3) * V_s,LL * I_s * cos(phi_s).\n\n3. The Ferranti Effect:\nDiscovered by Sebastian Ziani de Ferranti in 1887 on the Deptford AC system. When a medium or long line is unloaded (I_r = 0), capacitive charging current I_c flows along the length. Because I_c leads voltage by nearly 90 degrees, passing through series inductive reactance jX produces a voltage drop jX * I_c that is in phase with V_r, forcing V_s < V_r!\n• Approximate Voltage Rise:\nDelta V = V_r - V_s = (omega² * l² * L * C / 2) * V_r\nBecause wave velocity v = 1 / sqrt(L*C), this simplifies elegantly to:\nDelta V ≈ (omega * l / v)² * (V_r / 2)\nFor a 400 km, 400 kV line at 50 Hz, receiving-end voltage can rise by over 10% to 15% (reaching 460 kV), endangering transformer insulation and surge arresters.\n\n4. Shunt Reactor Compensation:\nTo suppress Ferranti overvoltages during open-circuit or energization conditions, inductive shunt reactors (Q_L) are switched on at terminal substations to absorb line charging VARs: Q_reactor = (V_r,LL)² * omega * C_line.',
    hi: 'पारेषण लाइन कार्यप्रदर्शन को वोल्टेज स्थिरता और दक्षता द्वारा मापा जाता है:\n\n1. प्रतिशत वोल्टेज नियमन (%VR):\n%VR = ((|Vs| / |A|) - |Vr,FL|) / |Vr,FL| * 100%\n• लैगिंग पावर फैक्टर पर %VR धनात्मक होता है।\n• लीडिंग पावर फैक्टर पर %VR ऋणात्मक हो सकता है।\n\n2. पारेषण दक्षता (η):\nη = (Pr / Ps) * 100% = (Pr / (Pr + Losses)) * 100%\n\n3. फेरांटी प्रभाव:\nनो-लोड या हल्के लोड पर कैपेसिटिव चार्जिंग करंट सीरीज प्रेरकत्व से गुजरते समय वोल्टेज को बढ़ा देता है:\nVr - Vs ≈ (omega * l / v)² * (Vr / 2)\n\n4. शंट रिएक्टर:\nफेरांटी प्रभाव से उत्पन्न अत्यधिक वोल्टेज को नियंत्रित करने के लिए सबस्टेशनों में शंट रिएक्टर लगाए जाते हैं जो चार्जिंग MVAR को अवशोषित करते हैं।',
    bn: 'পাওয়ার লাইনের কর্মক্ষমতা ভোল্টেজ নিয়ন্ত্রণ ও সিস্টেম লসের ওপর নির্ভরশীল:\n\n১. শতকরা ভোল্টেজ রেগুলেশন (%VR):\n%VR = ((|Vs| / |A|) - |Vr,FL|) / |Vr,FL| * ১০০%\n• ল্যাগিং লোডে ভোল্টেজ রেগুলেশন পজিটিভ হয়।\n• লিডিং লোডে ভোল্টেজ রেগুলেশন নেগেটিভ হতে পারে।\n\n২. সঞ্চালন দক্ষতা (η):\nη = (Pr / Ps) * ১০০%\n\n৩. ফেরান্টি প্রভাব:\nহালকা লোড বা নো-লোডে লাইনের ক্যাপাসিট্যান্সের কারণে রিসিভিং ভোল্টেজ সেন্ডিং ভোল্টেজের চেয়ে বৃদ্ধি পায়:\nVr - Vs ≈ (omega * l / v)² * (Vr / ২)\n\n৪. শান্ট রিঅ্যাক্টর:\nঅতিরিক্ত ভোল্টেজ কমাতে সাবস্টেশনে শান্ট রিঅ্যাক্টর যুক্ত করা হয় যা ক্যাপাসিটিভ MVAR শোষণ করে।'
  },
  formulas: [
    {
      id: 'f-ch16-voltage-regulation',
      symbol: '\\%VR',
      expression: '\\%VR = \\frac{\\frac{|V_s|}{|A|} - |V_{r,FL}|}{|V_{r,FL}|} \\times 100\\%',
      title: {
        en: 'Exact Percentage Voltage Regulation',
        hi: 'सटीक प्रतिशत वोल्टेज नियमन सूत्र',
        bn: 'সুনির্দিষ্ট শতকরা ভোল্টেজ রেগুলেশন সূত্র'
      },
      description: {
        en: 'Calculates the percentage rise in receiving voltage when full load is dropped to no-load, taking two-port parameter A into account.',
        hi: 'फुल लोड हटने पर टू-पोर्ट पैरामीटर A को ध्यान में रखते हुए वोल्टेज में प्रतिशत वृद्धि की गणना करता है।',
        bn: 'টু-পোর্ট প্যারামিটার A বিবেচনায় নিয়ে পূর্ণ লোড অপসারণে রিসিভিং ভোল্টেজের শতকরা বৃদ্ধি নির্ণয় করে।'
      },
      variables: [
        { symbol: '\\%VR', name: { en: 'Percentage voltage regulation (%)', hi: 'प्रतिशत वोल्टेज नियमन (%)', bn: 'শতকরা ভোল্টেজ রেগুলেশন (%)' } },
        { symbol: '|V_s|', name: { en: 'Sending-end phase voltage magnitude (V)', hi: 'सेंडिंग-एंड वोल्टेज परिमाण (V)', bn: 'সেন্ডিং ভোল্টেজের মান (V)' } },
        { symbol: '|A|', name: { en: 'Magnitude of line parameter A', hi: 'लाइन पैरामीटर A का परिमाण', bn: 'লাইন প্যারামিটার A এর মান' } },
        { symbol: '|V_{r,FL}|', name: { en: 'Receiving-end full-load phase voltage magnitude (V)', hi: 'फुल-लोड रिसीविंग वोल्टेज (V)', bn: 'ফুল-লোড রিসিভিং ভোল্টেজ (V)' } }
      ]
    },
    {
      id: 'f-ch16-ferranti-voltage-rise',
      symbol: '\\Delta V',
      expression: 'V_r - V_s \\approx \\frac{1}{2} \\omega^2 l^2 L C \\cdot V_r = \\frac{1}{2} \\left(\\frac{\\omega l}{v}\\right)^2 V_r',
      title: {
        en: 'Ferranti Effect No-Load Voltage Rise',
        hi: 'फेरांटी प्रभाव नो-लोड वोल्टेज वृद्धि सूत्र',
        bn: 'ফেরান্টি প্রভাবে নো-লোড ভোল্টেজ বৃদ্ধির সূত্র'
      },
      description: {
        en: 'Approximates the open-circuit receiving-end voltage rise over sending-end voltage due to distributed shunt capacitive charging.',
        hi: 'वितरित शंट धारिता चार्जिंग के कारण नो-लोड पर सेंडिंग वोल्टेज की तुलना में रिसीविंग वोल्टेज वृद्धि की गणना करता है।',
        bn: 'বিতরিত শান্ট ক্যাপাসিটিভ চার্জিংয়ের ফলে নো-লোডে প্রেরিত ভোল্টেজের চেয়ে প্রাপক ভোল্টেজের বৃদ্ধি নির্ণয় করে।'
      },
      variables: [
        { symbol: 'V_r - V_s', name: { en: 'Voltage rise at receiving end (V)', hi: 'रिसीविंग छोर पर वोल्टेज वृद्धि (V)', bn: 'রিসিভিং প্রান্তে ভোল্টেজ বৃদ্ধি (V)' } },
        { symbol: '\\omega', name: { en: 'Angular power frequency (2*pi*f, rad/s)', hi: 'कोणीय आवृत्ति (rad/s)', bn: 'কৌণিক কম্পাঙ্ক (rad/s)' } },
        { symbol: 'l', name: { en: 'Length of line (m or km)', hi: 'लाइन की लंबाई (m या km)', bn: 'লাইনের দৈর্ঘ্য (m বা km)' } },
        { symbol: 'v', name: { en: 'Electromagnetic wave speed (~3e8 m/s in air)', hi: 'विद्युत चुम्बकीय तरंग चाल (m/s)', bn: 'তরঙ্গ বেগ (m/s)' } }
      ]
    },
    {
      id: 'f-ch16-efficiency',
      symbol: '\\eta',
      expression: '\\eta = \\frac{P_{r,3ph}}{P_{s,3ph}} \\times 100\\% = \\frac{P_{r,3ph}}{P_{r,3ph} + 3 I_{line}^2 R} \\times 100\\%',
      title: {
        en: 'Three-Phase Transmission Line Efficiency',
        hi: 'थ्री-फेज पारेषण लाइन दक्षता सूत्र',
        bn: 'থ্রি-ফেজ সঞ্চালন লাইনের কর্মদক্ষতা সূত্র'
      },
      description: {
        en: 'Ratio of real electrical power delivered to receiving-end loads to total real power injected by sending-end generators.',
        hi: 'रिसीविंग छोर पर वितरित वास्तविक शक्ति और सेंडिंग छोर पर इंजेक्ट की गई कुल शक्ति का अनुपात।',
        bn: 'রিসিভিং লোডে প্রাপ্ত সক্রিয় শক্তি এবং প্রেরক জেনারেটর কর্তৃক প্রদত্ত মোট সক্রিয় শক্তির অনুপাত।'
      },
      variables: [
        { symbol: '\\eta', name: { en: 'Transmission efficiency (%)', hi: 'पारेषण दक्षता (%)', bn: 'সঞ্চালন দক্ষতা (%)' } },
        { symbol: 'P_{r,3ph}', name: { en: 'Three-phase receiving end active power (W or MW)', hi: 'रिसीविंग वास्तविक शक्ति (MW)', bn: 'রিসিভিং প্রান্তে সক্রিয় শক্তি (MW)' } },
        { symbol: 'P_{s,3ph}', name: { en: 'Three-phase sending end active power (MW)', hi: 'सेंडिंग वास्तविक शक्ति (MW)', bn: 'সেন্ডিং প্রান্তে সক্রিয় শক্তি (MW)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch16-l05-ferranti-analysis',
      title: {
        en: 'The Physics of Ferranti Voltage Rise & Shunt Compensation',
        hi: 'फेरांटी वोल्टेज वृद्धि की भौतिकी एवं शंट क्षतिपूर्ति',
        bn: 'ফেরান্টি ভোল্টেজ বৃদ্ধির পদার্থবিজ্ঞান ও শান্ট ক্ষতিপূরণ'
      },
      content: {
        en: 'The Ferranti effect is primarily an EHV and UHV phenomenon because charging current scales with the square of voltage (Q_c = omega * C * V²). On long 400 kV and 765 kV corridors, the total capacitive charging power can reach hundreds of MVARs:\n\n1. Mechanism of Voltage Rise:\nUnder open-circuit conditions (Ir = 0), the current entering the line is entirely capacitive: Is = C * Vr. The sending voltage is Vs = A * Vr. Since A = cosh(gamma*l) ≈ 1 - (omega² * l² * L * C / 2) for a lossless line, we have:\nVs = (1 - (omega² * l² * L * C / 2)) * Vr < Vr.\nBecause the multiplier is strictly less than 1, Vr is strictly greater than Vs!\n\n2. Hazards of Uncontrolled Ferranti Rise:\n• Overstressing transformer core laminations into magnetic saturation, generating dangerous 3rd and 5th harmonic currents.\n• Dielectric breakdown and puncture of bushing and insulator strings.\n• Unintended thermal tripping of surge arresters (MOVs).\n\n3. Engineering Solution — Line-End Shunt Reactors:\nFixed or switched inductive shunt reactors are permanently installed at one or both ends of long transmission circuits. By drawing an inductive lagging current that exactly cancels the leading capacitive charging current, the shunt reactor maintains a flat voltage profile along the entire corridor during open-circuit energization.',
        hi: 'फेरांटी प्रभाव विशेष रूप से 400 kV और 765 kV की EHV लाइनों में देखा जाता है क्योंकि चार्जिंग MVAR वोल्टेज के वर्ग (V²) के अनुपात में बढ़ता है। नो-लोड पर लाइन का संधारित्र एक लीडिंग धारा खींचता है जो प्रेरकत्व के साथ मिलकर वोल्टेज को बढ़ा देती है। इसे नियंत्रित करने के लिए सबस्टेशनों में शंट रिएक्टर लगाए जाते हैं।',
        bn: 'ফেরান্টি প্রভাব মূলত ৪০০ kV ও ৭৬৫ kV সঞ্চালন লাইনে তীব্রভাবে দেখা দেয় কারণ চার্জিং পাওয়ার ভোল্টেজের বর্গের সাথে বাড়ে। নো-লোডে ধারিতা থেকে উৎপন্ন লিডিং কারেন্ট লাইনের ইন্ডাকট্যান্সের সাথে মিলিত হয়ে রিসিভিং ভোল্টেজকে বিপজ্জনক মাত্রায় বাড়িয়ে দেয়। এটি প্রশমনে শান্ট রিঅ্যাক্টর ব্যবহৃত হয়।'
      },
      schematicId: 'sch-ch16-transmission-performance'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch16-l05-01',
      problem: {
        en: 'A 3-phase, 50 Hz, 220 kV transmission line has the following ABCD parameters: A = D = 0.92 ∠1.5°, B = 110 ∠75° Ω. At full load, the line delivers 100 MW at 0.8 power factor lagging with a receiving-end voltage of 220 kV (line-to-line). Calculate:\n(a) The sending-end line-to-line voltage.\n(b) The percentage voltage regulation (%VR).',
        hi: 'एक 3-फेज, 50 Hz, 220 kV लाइन के ABCD पैरामीटर हैं: A = D = 0.92 ∠1.5°, B = 110 ∠75° Ω। फुल लोड पर लाइन 220 kV पर 0.8 लैगिंग पावर फैक्टर पर 100 MW की आपूर्ति करती है। गणना कीजिए:\n(a) सेंडिंग-एंड लाइन-टू-लाइन वोल्टेज\n(b) प्रतिशत वोल्टेज नियमन (%VR)।',
        bn: 'একটি ৩-ফেজ ৫০ Hz ২২০ kV সঞ্চালন লাইনের ABCD প্যারামিটারসমূহ: A = D = ০.৯২ ∠১.৫°, B = ১১০ ∠৭৫° Ω। পূর্ণ লোডে ২২০ kV তে ০.৮ ল্যাগিং পাওয়ার ফ্যাক্টরে ১০০ MW বিদ্যুৎ সরবরাহ করা হলে নির্ণয় করুন:\n(a) সেন্ডিং-এন্ড লাইন ভোল্টেজ\n(b) শতকরা ভোল্টেজ রেগুলেশন (%VR)।'
      },
      solution: {
        en: 'Given:\n• V_r,LL = 220 kV -> V_r = 220 / sqrt(3) = 127.02 kV ∠0°\n• P_r = 100 MW, cos(phi) = 0.8 lag -> phi = -36.87°\n• Line Current I_r = P / (sqrt(3) * V_r,LL * cos(phi)) = (100 * 10^6) / (sqrt(3) * 220,000 * 0.8) = 328.04 A\nIn phasor form: I_r = 0.32804 ∠-36.87° kA\n\nStep 1: Calculate Sending-End Phase Voltage V_s:\nV_s = A * V_r + B * I_r\n• A * V_r = (0.92 ∠1.5°) * (127.02 ∠0°) = 116.86 ∠1.5° kV = 116.82 + j3.06 kV\n• B * I_r = (110 ∠75° Ω) * (0.32804 ∠-36.87° kA) = 36.08 ∠38.13° kV = 28.38 + j22.28 kV\n• V_s = (116.82 + 28.38) + j(3.06 + 22.28) = 145.20 + j25.34 kV\n• Magnitude |V_s| = sqrt((145.20)² + (25.34)²) = sqrt(21,083 + 642) = 147.39 kV (phase)\n• Sending Line Voltage V_s,LL = sqrt(3) * 147.39 = 255.29 kV\n\nStep 2: Calculate Percentage Voltage Regulation:\n• No-Load Receiving Phase Voltage |V_r,NL| = |V_s| / |A| = 147.39 / 0.92 = 160.21 kV\n• Full-Load Receiving Phase Voltage |V_r,FL| = 127.02 kV\n• %VR = (|V_r,NL| - |V_r,FL|) / |V_r,FL| * 100% = (160.21 - 127.02) / 127.02 * 100% = (33.19 / 127.02) * 100% = 26.13%',
        hi: 'चरण 1: V_r = 127.02 kV ∠0°\nI_r = 328.04 ∠-36.87° A = 0.328 kA\nV_s = A*Vr + B*Ir = (0.92∠1.5° * 127.02) + (110∠75° * 0.328∠-36.87°)\nV_s = (116.82 + j3.06) + (28.38 + j22.28) = 145.20 + j25.34 kV\n|V_s| (फेज) = 147.39 kV; V_s,LL = 255.29 kV\n\nचरण 2: V_r,NL = |V_s| / |A| = 147.39 / 0.92 = 160.21 kV\n%VR = (160.21 - 127.02) / 127.02 * 100 = 26.13%',
        bn: 'ধাপ ১: V_r = ১২৭.০২ kV ∠০°\nI_r = ০.৩২৮ kA ∠-৩৬.৮৭°\nV_s = A*Vr + B*Ir = ১৪৫.২০ + j২৫.৩৪ kV\n|V_s| (ফেজ) = ১৪৭.৩৯ kV; V_s,LL = ২৫৫.২৯ kV\nধাপ ২: V_r,NL = ১৪৭.৩৯ / ০.৯২ = ১৬০.২১ kV\n%VR = (১৬০.২১ - ১২৭.০২) / ১২৭.০২ * ১০০ = ২৬.১৩%'
      },
      givenValues: { 'V_r,LL': '220 kV', 'P_r': '100 MW', 'pf': '0.8 lag', 'A': '0.92 ∠1.5°', 'B': '110 ∠75°' },
      finalAnswer: {
        en: 'Sending line voltage |Vs,LL| = 255.29 kV, Voltage Regulation %VR = 26.13%',
        hi: 'सेंडिंग लाइन वोल्टेज = 255.29 kV, वोल्टेज नियमन %VR = 26.13%',
        bn: 'সেন্ডিং লাইন ভোল্টেজ = ২৫৫.২৯ kV, ভোল্টেজ রেগুলেশন %VR = ২৬.১৩%'
      }
    },
    {
      id: 'ex-ch16-l05-02',
      problem: {
        en: 'A 400 km, 400 kV, 50 Hz uncompensated overhead transmission line has an inductance of L = 1.0 mH/km and capacitance of C = 0.012 μF/km. Assuming a lossless line, estimate the open-circuit receiving-end line voltage if the sending-end line voltage is held at nominal 400 kV.',
        hi: '400 km लंबी, 400 kV, 50 Hz की एक ओवरहेड लाइन का प्रेरकत्व L = 1.0 mH/km और धारिता C = 0.012 μF/km है। हानिरहित लाइन मानते हुए, यदि सेंडिंग वोल्टेज 400 kV पर स्थिर है, तो ओपन-सर्किट पर रिसीविंग वोल्टेज ज्ञात कीजिए।',
        bn: '৪০০ km দীর্ঘ, ৪০০ kV, ৫০ Hz ওভারহেড লাইনের ইন্ডাকট্যান্স L = ১.০ mH/km এবং ক্যাপাসিট্যান্স C = ০.০১২ μF/km। ক্ষতিহীন লাইন ধরে, সেন্ডিং ভোল্টেজ ৪০০ kV হলে ওপেন-সার্কিট রিসিভিং ভোল্টেজ নির্ণয় করুন।'
      },
      solution: {
        en: 'Step 1: Calculate Total Distributed Parameters for Length l = 400 km:\n• Total Inductance L_tot = 1.0 * 10^-3 * 400 = 0.400 H\n• Total Capacitance C_tot = 0.012 * 10^-6 * 400 = 4.80 * 10^-6 F\n• Angular Frequency omega = 2 * pi * 50 = 314.159 rad/s\n\nStep 2: Calculate Propagation Velocity v and Phase Shift beta*l:\n• v = 1 / sqrt(L * C) = 1 / sqrt(10^-3 * 1.2 * 10^-8) = 1 / sqrt(1.2 * 10^-11) = 288,675 km/s\n• beta = omega * sqrt(L * C) = 314.159 * sqrt(1.2 * 10^-11) = 314.159 * 3.4641 * 10^-6 = 1.088 * 10^-3 rad/km\n• Total Phase Angle beta * l = (1.088 * 10^-3) * 400 = 0.4353 radians = 24.94°\n\nStep 3: Calculate Parameter A for Lossless Line:\n• A = cosh(gamma * l) = cos(beta * l) = cos(24.94°) = 0.9067\n\nStep 4: Calculate No-Load Receiving Voltage:\nUnder open-circuit (Ir = 0), Vs = A * Vr ==> Vr = Vs / A\n• V_r,LL = 400 kV / 0.9067 = 441.16 kV\n\nStep 5: Calculate Voltage Rise (Ferranti Rise):\n• Delta V = V_r - V_s = 441.16 - 400 = 41.16 kV rise (over 10.3% overvoltage).',
        hi: 'चरण 1: beta * l = omega * sqrt(L*C) * l = 314.16 * 3.464e-6 * 400 = 0.4353 rad = 24.94°\nचरण 2: A = cos(beta * l) = cos(24.94°) = 0.9067\nचरण 3: V_r = V_s / A = 400 kV / 0.9067 = 441.16 kV\nवोल्टेज वृद्धि = 441.16 - 400 = 41.16 kV (10.3% वृद्धि)।',
        bn: 'ধাপ ১: beta * l = ৩১৪.১৬ * ৩.৪৬৪e-৬ * ৪০০ = ০.৪৩৫৩ rad = ২৪.৯৪°\nধাপ ২: A = cos(beta * l) = cos(২৪.৯৪°) = ০.৯০৬৭\nধাপ ৩: V_r = V_s / A = ৪০০ kV / ০.৯০৬৭ = ৪৪১.১৬ kV\nভোল্টেজ বৃদ্ধি = ৪৪১.১৬ - ৪০০ = ৪১.১৬ kV (১০.৩% বৃদ্ধি)।'
      },
      givenValues: { 'l': '400 km', 'V_s': '400 kV', 'L': '1.0 mH/km', 'C': '0.012 μF/km', 'f': '50 Hz' },
      finalAnswer: {
        en: 'No-load receiving line voltage Vr = 441.16 kV (Ferranti rise of 41.16 kV / 10.3%)',
        hi: 'नो-लोड रिसीविंग वोल्टेज Vr = 441.16 kV (41.16 kV / 10.3% की वृद्धि)',
        bn: 'নো-লোড রিসিভিং ভোল্টেজ Vr = ৪৪১.১৬ kV (৪১.১৬ kV / ১০.৩% ফেরান্টি বৃদ্ধি)'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Substation operating protocols: switching on tertiary-connected shunt reactors before energizing unloaded 400 kV or 765 kV lines.',
      'Grid compliance auditing: verifying that transmission lines maintain grid voltages within statutory limits (±5% nominal) under all loading conditions.',
      'Static VAR Compensator (SVC) and STATCOM installation to dynamically provide fast reactive power compensation and voltage stabilization.'
    ],
    hi: [
      'सबस्टेशन संचालन: 400 kV या 765 kV लाइनों को एनर्जाइज करने से पहले शंट रिएक्टर चालू करना।',
      'ग्रिड अनुपालन ऑडिट: यह सत्यापित करना कि लाइन वोल्टेज वैधानिक सीमा (±5%) के भीतर रहे।',
      'वोल्टेज स्थिरीकरण हेतु स्टेटिक वार कम्पेन्सेटर (SVC) और STATCOM की स्थापना।'
    ],
    bn: [
      'সাবস্টেশন পরিচালনা: ৪০০ kV বা ৭৬৫ kV লাইন এনার্জাইজ করার পূর্বে শান্ট রিঅ্যাক্টর চালু করা।',
      'গ্রিড কোড অডিট: লাইনের ভোল্টেজ যেন বিধিবদ্ধ সীমার (±৫%) মধ্যে থাকে তা নিশ্চিতকরণ।',
      'গতিশীল ভোল্টেজ নিয়ন্ত্রণের জন্য স্ট্যাটিক ভার কম্পেনসেটর (SVC) ও STATCOM স্থাপন।'
    ]
  },
  importantPoints: {
    en: [
      'Voltage regulation can be negative under leading power factor conditions (receiving voltage is higher under full load than no load).',
      'The Ferranti effect is purely caused by capacitive charging current passing through series line inductance under no-load or light-load conditions.',
      'In a lossless line, parameter A equals cos(beta*l), which is strictly less than 1, proving that Vr > Vs at no load.',
      'Zero voltage regulation occurs at a leading power factor condition satisfying tan(phi) = -R/X.'
    ],
    hi: [
      'लीडिंग पावर फैक्टर स्थितियों में वोल्टेज नियमन ऋणात्मक हो सकता है।',
      'फेरांटी प्रभाव नो-लोड या हल्के लोड पर सीरीज प्रेरकत्व से गुजरने वाली कैपेसिटिव धारा के कारण होता है।',
      'हानिरहित लाइन में A = cos(beta*l) < 1 होता है, जिससे साबित होता है कि नो-लोड पर Vr > Vs होता है।',
      'शून्य वोल्टेज नियमन tan(phi) = -R/X वाले लीडिंग पावर फैक्टर पर होता है।'
    ],
    bn: [
      'লিডিং পাওয়ার ফ্যাক্টরে ভোল্টেজ রেগুলেশন ঋণাত্মক হতে পারে।',
      'নো-লোড অবস্থায় লাইনের ক্যাপাসিটিভ চার্জিং কারেন্ট ইন্ডাকট্যান্সে ভোল্টেজ বুস্ট করে ফেরান্টি প্রভাব ঘটায়।',
      'লসলেস লাইনে A = cos(beta*l) < ১ হওয়ায় নো-লোডে Vr > Vs হয়।',
      'tan(phi) = -R/X শর্তে লিডিং পাওয়ার ফ্যাক্টরে ভোল্টেজ রেগুলেশন শূন্য হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Assuming voltage regulation can never be negative (it is routinely negative for leading capacitive loads).',
      'Calculating no-load voltage as simply |Vs| instead of |Vs| / |A| for medium and long lines.',
      'Thinking that the Ferranti effect is caused by electromagnetic induction from nearby power plants (it is purely due to self-capacitance and self-inductance of the line).'
    ],
    hi: [
      'यह मानना कि वोल्टेज नियमन कभी ऋणात्मक नहीं हो सकता (यह लीडिंग लोड पर ऋणात्मक होता है)।',
      'मध्यम और लंबी लाइनों में नो-लोड वोल्टेज को |Vs| / |A| के बजाय केवल |Vs| मान लेना।',
      'यह सोचना कि फेरांटी प्रभाव किसी बाहरी संयंत्र से होता है (यह लाइन की अपनी धारिता और प्रेरकत्व से होता है)।'
    ],
    bn: [
      'মনে করা যে ভোল্টেজ রেগুলেশন কখনো নেগেটিভ হতে পারে না (লিডিং লোডে এটি নিয়মিত নেগেটিভ হয়)।',
      'মাঝারি ও দীর্ঘ লাইনে নো-লোড ভোল্টেজকে |Vs| / |A| এর বদলে কেবল |Vs| ধরা।',
      'মনে করা যে ফেরান্টি প্রভাব বাইরের কোনো কারণে ঘটে (এটি লাইনের নিজস্ব ক্যাপাসিট্যান্স ও ইন্ডাকট্যান্সের ফল)।'
    ]
  },
  keyTakeaways: {
    en: [
      'Voltage regulation quantifies line voltage stiffness against load swings, governed by parameter A and series impedance B.',
      'Ferranti voltage rise is a serious operational hazard on long EHV circuits, requiring shunt reactor mitigation.',
      'Maximum efficiency occurs when variable I²R series conductor losses balance fixed shunt losses.'
    ],
    hi: [
      'वोल्टेज नियमन लोड परिवर्तन के विरुद्ध वोल्टेज स्थिरता को दर्शाता है।',
      'फेरांटी प्रभाव लंबी EHV लाइनों में एक गंभीर जोखिम है जिसे शंट रिएक्टर द्वारा नियंत्रित किया जाता है।',
      'अधिकतम दक्षता तब मिलती है जब सीरीज कॉपर लॉस शंट हानियों के बराबर होते हैं।'
    ],
    bn: [
      'ভোল্টেজ রেগুলেশন লোডের ওঠানামার বিরুদ্ধে গ্রিডের ভোল্টেজ স্থিতিশীলতা নির্দেশ করে।',
      'ফেরান্টি ভোল্টেজ বৃদ্ধি দীর্ঘ EHV লাইনে মারাত্মক ক্ষতি করতে পারে, যা শান্ট রিঅ্যাক্টর দিয়ে দূর করা হয়।',
      'সিরিজ কন্ডাক্টর লস ও শান্ট লসের সামঞ্জস্যে সর্বোচ্চ সঞ্চালন দক্ষতা অর্জিত হয়।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch16-l05-01',
      question: {
        en: 'Under which load power factor condition can a transmission line exhibit negative percentage voltage regulation?',
        hi: 'किस लोड पावर फैक्टर स्थिति के तहत एक पारेषण लाइन ऋणात्मक प्रतिशत वोल्टेज नियमन प्रदर्शित कर सकती है?',
        bn: 'কোন ধরণের লোড পাওয়ার ফ্যাক্টরে একটি সঞ্চালন লাইন ঋণাত্মক শতকরা ভোল্টেজ রেগুলেশন প্রদর্শন করতে পারে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Leading power factor (capacitive load)', hi: 'लीडिंग पावर फैक्टर (संधारित्र भार)', bn: 'লিডিং পাওয়ার ফ্যাক্টর (ক্যাপাসিটিভ লোড)' } },
        { id: 'opt-2', text: { en: 'Lagging power factor (inductive load)', hi: 'लैगिंग पावर फैक्टर (प्रेरणिक भार)', bn: 'ল্যাগিং পাওয়ার ফ্যাক্টর (ইন্ডাক্টিভ লোড)' } },
        { id: 'opt-3', text: { en: 'Unity power factor (purely resistive load)', hi: 'इकाई पावर फैक्टर (शुद्ध प्रतिरोधी भार)', bn: 'ইউনিটি পাওয়ার ফ্যাক্টর (বিশুদ্ধ রোধ লোড)' } },
        { id: 'opt-4', text: { en: 'Zero power factor lagging', hi: 'शून्य पावर फैक्टर लैगिंग', bn: 'জিরো পাওয়ার ফ্যাক্টর ল্যাগিং' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'At leading power factors, the leading current creates a capacitive voltage boost across series line inductance, making full-load receiving voltage higher than no-load voltage, giving negative regulation.',
        hi: 'लीडिंग पावर फैक्टर पर धारा सीरीज प्रतिघात पर वोल्टेज बढ़ाती है, जिससे फुल लोड वोल्टेज नो-लोड वोल्टेज से अधिक हो जाता है और नियमन ऋणात्मक हो जाता है।',
        bn: 'লিডিং কারেন্ট লাইনের সিরিজ রিঅ্যাক্ট্যান্সে ভোল্টেজ বৃদ্ধি করে, ফলে ফুল-লোড ভোল্টেজ নো-লোড ভোল্টেজের চেয়ে বেশি হয়ে ঋণাত্মক রেগুলেশন তৈরি করে।'
      }
    },
    {
      id: 'mcq-ch16-l05-02',
      question: {
        en: 'What physical condition triggers the Ferranti effect in a high-voltage AC transmission line?',
        hi: 'हाई-वोल्टेज AC पारेषण लाइन में कौन सी भौतिक स्थिति फेरांटी प्रभाव को ट्रिगर करती है?',
        bn: 'উচ্চ ভোল্টেজ এসি সঞ্চালন লাইনে কোন ভৌত অবস্থায় ফেরান্টি প্রভাব ঘটে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'An open-circuit or very lightly loaded long transmission line', hi: 'एक ओपन-सर्किट या बहुत कम भार वाली लंबी पारेषण लाइन', bn: 'ওপেন সার্কিট বা অত্যন্ত হালকা লোডে থাকা দীর্ঘ সঞ্চালন লাইন' } },
        { id: 'opt-2', text: { en: 'A heavy short-circuit fault at the receiving bus', hi: 'रिसीविंग बस पर एक भारी शॉर्ट-सर्किट फॉल्ट', bn: 'রিসিভিং বাসে তীব্র শর্ট-সার্কিট ফল্ট' } },
        { id: 'opt-3', text: { en: 'Operating at exactly 100% surge impedance loading', hi: 'ठीक 100% सर्ज इम्पीडेंस लोडिंग पर संचालन', bn: 'ঠিক ১০০% সার্জ ইম্পিডেন্স লোডিংয়ে পরিচালনা' } },
        { id: 'opt-4', text: { en: 'Direct current (HVDC) transmission', hi: 'दिष्ट धारा (HVDC) पारेषण', bn: 'ডিসি (HVDC) সঞ্চালন' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Under no-load or light-load conditions, the large capacitive charging current flowing through the series line inductance causes the receiving-end voltage to exceed the sending-end voltage.',
        hi: 'नो-लोड या हल्के लोड पर, सीरीज प्रेरकत्व से बहने वाला बड़ा कैपेसिटिव चार्जिंग करंट रिसीविंग वोल्टेज को सेंडिंग वोल्टेज से अधिक कर देता है।',
        bn: 'নো-লোড বা স্বল্প লোডে লাইনের ইন্ডাকট্যান্সের মধ্য দিয়ে প্রবাহিত ক্যাপাসিটিভ কারেন্ট রিসিভিং ভোল্টেজকে প্রেরিত ভোল্টেজের চেয়ে বাড়িয়ে দেয়।'
      }
    },
    {
      id: 'mcq-ch16-l05-03',
      question: {
        en: 'For a medium transmission line modeled by two-port parameters, what is the exact expression for the no-load receiving-end phase voltage |Vr,NL|?',
        hi: 'टू-पोर्ट पैरामीटर द्वारा मॉडल की गई मध्यम पारेषण लाइन के लिए नो-लोड रिसीविंग फेज वोल्टेज |Vr,NL| का सटीक व्यंजक क्या है?',
        bn: 'টু-পোর্ট প্যারামিটার বিশিষ্ট মাঝারি সঞ্চালন লাইনের নো-লোড রিসিভিং ফেজ ভোল্টেজ |Vr,NL| এর সঠিক রাশিমালা কোনটি?'
      },
      options: [
        { id: 'opt-1', text: { en: '|V_s| / |A|', hi: '|V_s| / |A|', bn: '|V_s| / |A|' } },
        { id: 'opt-2', text: { en: '|V_s| * |A|', hi: '|V_s| * |A|', bn: '|V_s| * |A|' } },
        { id: 'opt-3', text: { en: '|V_s| / |B|', hi: '|V_s| / |B|', bn: '|V_s| / |B|' } },
        { id: 'opt-4', text: { en: '|V_s| - |I_r * Z|', hi: '|V_s| - |I_r * Z|', bn: '|V_s| - |I_r * Z|' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Under no load, Ir = 0, so Vs = A * Vr,NL. Taking magnitudes gives |Vr,NL| = |Vs| / |A|.',
        hi: 'नो-लोड पर Ir = 0 होता है, इसलिए Vs = A * Vr,NL होता है। अतः |Vr,NL| = |Vs| / |A|।',
        bn: 'নো-লোডে Ir = ০ হওয়ায় Vs = A * Vr,NL। সুতরাং |Vr,NL| = |Vs| / |A|।'
      }
    },
    {
      id: 'mcq-ch16-l05-04',
      question: {
        en: 'Which substation equipment is specifically deployed to mitigate the Ferranti effect on long EHV transmission corridors?',
        hi: 'लंबी EHV पारेषण लाइनों पर फेरांटी प्रभाव को कम करने के लिए विशेष रूप से कौन सा सबस्टेशन उपकरण लगाया जाता है?',
        bn: 'দীর্ঘ EHV সঞ্চালন লাইনে ফেরান্টি প্রভাব প্রশমনে সাবস্টেশনে কোন সরঞ্জামটি বিশেষভাবে স্থাপন করা হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Inductive Shunt Reactor', hi: 'प्रेरणिक शंट रिएक्टर (Inductive Shunt Reactor)', bn: 'ইন্ডাক্টিভ শান্ট রিঅ্যাক্টর' } },
        { id: 'opt-2', text: { en: 'Series Capacitor Bank', hi: 'सीरीज कैपेसिटर बैंक (Series Capacitor Bank)', bn: 'সিরিজ ক্যাপাসিটর ব্যাংক' } },
        { id: 'opt-3', text: { en: 'Shunt Capacitor Bank', hi: 'शंट कैपेसिटर बैंक', bn: 'শান্ট ক্যাপাসিটর ব্যাংক' } },
        { id: 'opt-4', text: { en: 'Current Limiting Fuse', hi: 'करंट लिमिटिंग फ्यूज', bn: 'কারেন্ট লিমিটিং ফিউজ' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Shunt reactors draw lagging reactive power to absorb the excess capacitive charging MVARs generated by line capacitance, neutralizing the Ferranti rise.',
        hi: 'शंट रिएक्टर लैगिंग रिएक्टिव पावर खींचकर लाइन धारिता द्वारा उत्पन्न अतिरिक्त चार्जिंग MVAR को अवशोषित करते हैं।',
        bn: 'শান্ট রিঅ্যাক্টর ল্যাগিং কারেন্ট টেনে লাইনের ক্যাপাসিট্যান্সে সৃষ্ট অতিরিক্ত চার্জিং MVAR শোষণ করে এবং ভোল্টেজ স্বাভাবিক রাখে।'
      }
    },
    {
      id: 'mcq-ch16-l05-05',
      question: {
        en: 'For a short transmission line with resistance R and inductive reactance X, what is the approximate percentage voltage regulation formula for load power factor cos(phi) lagging?',
        hi: 'प्रतिरोध R और प्रेरणिक प्रतिघात X वाली लघु लाइन के लिए cos(phi) लैगिंग पावर फैक्टर पर अनुमानित प्रतिशत वोल्टेज नियमन सूत्र क्या है?',
        bn: 'রোধ R এবং ইন্ডাক্টিভ রিঅ্যাক্ট্যান্স X বিশিষ্ট একটি ক্ষুদ্র লাইনের cos(phi) ল্যাগিং পাওয়ার ফ্যাক্টরে আনুমানিক ভোল্টেজ রেগুলেশন সূত্র কোনটি?'
      },
      options: [
        { id: 'opt-1', text: { en: '(I * R * cos(phi) + I * X * sin(phi)) / V_r * 100%', hi: '(I * R * cos(phi) + I * X * sin(phi)) / V_r * 100%', bn: '(I * R * cos(phi) + I * X * sin(phi)) / V_r * ১০০%' } },
        { id: 'opt-2', text: { en: '(I * R * cos(phi) - I * X * sin(phi)) / V_r * 100%', hi: '(I * R * cos(phi) - I * X * sin(phi)) / V_r * 100%', bn: '(I * R * cos(phi) - I * X * sin(phi)) / V_r * ১০০%' } },
        { id: 'opt-3', text: { en: '(I * X * cos(phi)) / V_r * 100%', hi: '(I * X * cos(phi)) / V_r * 100%', bn: '(I * X * cos(phi)) / V_r * ১০০%' } },
        { id: 'opt-4', text: { en: '(I * R) / V_r * 100%', hi: '(I * R) / V_r * 100%', bn: '(I * R) / V_r * ১০০%' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'For lagging power factor: Delta V ≈ I * R * cos(phi) + I * X * sin(phi). Dividing by Vr gives the approximate %VR.',
        hi: 'लैगिंग पावर फैक्टर के लिए वोल्टेज ड्रॉप Delta V = I*R*cos(phi) + I*X*sin(phi) होता है।',
        bn: 'ল্যাগিং পাওয়ার ফ্যাক্টরে ভোল্টেজ ড্রপ Delta V = I*R*cos(phi) + I*X*sin(phi)।'
      }
    },
    {
      id: 'mcq-ch16-l05-06',
      question: {
        en: 'At what power factor condition does a transmission line achieve exactly zero voltage regulation (%VR = 0)?',
        hi: 'किस पावर फैक्टर स्थिति में एक पारेषण लाइन ठीक शून्य वोल्टेज नियमन (%VR = 0) प्राप्त करती है?',
        bn: 'কোন পাওয়ার ফ্যাক্টর শর্তে একটি সঞ্চালন লাইনে ঠিক শূন্য ভোল্টেজ রেগুলেশন (%VR = ০) অর্জিত হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Leading power factor with tan(phi) = -R / X', hi: 'tan(phi) = -R / X वाले लीडिंग पावर फैक्टर पर', bn: 'tan(phi) = -R / X শর্তে লিডিং পাওয়ার ফ্যাক্টরে' } },
        { id: 'opt-2', text: { en: 'Unity power factor (cos(phi) = 1.0)', hi: 'इकाई पावर फैक्टर (cos(phi) = 1.0) पर', bn: 'ইউনিটি পাওয়ার ফ্যাক্টরে' } },
        { id: 'opt-3', text: { en: 'Lagging power factor with tan(phi) = X / R', hi: 'tan(phi) = X / R वाले लैगिंग पावर फैक्टर पर', bn: 'ল্যাগিং পাওয়ার ফ্যাক্টরে' } },
        { id: 'opt-4', text: { en: 'Zero power factor leading', hi: 'शून्य पावर फैक्टर लीडिंग पर', bn: 'জিরো পাওয়ার ফ্যাক্টর লিডিংয়ে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Setting Delta V = I * (R * cos(phi) - X * sin(phi)) = 0 gives tan(phi) = R / X (leading, or phi = -arctan(R/X)).',
        hi: 'डेल्टा V = 0 रखने पर R*cos(phi) - X*sin(phi) = 0 मिलता है, जिससे tan(phi) = R/X (लीडिंग) प्राप्त होता है।',
        bn: 'Delta V = ০ বসালে R*cos(phi) - X*sin(phi) = ০ হয়, অর্থাৎ tan(phi) = R/X (লিডিং)।'
      }
    },
    {
      id: 'mcq-ch16-l05-07',
      question: {
        en: 'Why does the Ferranti effect become negligibly small on short underground distribution cables compared to long overhead lines?',
        hi: 'लंबी ओवरहेड लाइनों की तुलना में छोटे भूमिगत केबलों पर फेरांटी प्रभाव नगण्य क्यों होता है?',
        bn: 'দীর্ঘ ওভারহেড লাইনের তুলনায় স্বল্প দৈর্ঘ্যের আন্ডারগ্রাউন্ড ক্যাবলে ফেরান্টি প্রভাব নগণ্য হয় কেন?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Ferranti voltage rise scales with the square of line length (l²), which is very small for short cables', hi: 'फेरांटी वोल्टेज वृद्धि लाइन की लंबाई के वर्ग (l²) के समानुपाती होती है, जो छोटे केबलों के लिए बहुत कम है', bn: 'ফেরান্টি ভোল্টেজ বৃদ্ধি লাইনের দৈর্ঘ্যের বর্গের (l²) সমানুপাতিক, যা ক্ষুদ্র ক্যাবলে অত্যন্ত কম' } },
        { id: 'opt-2', text: { en: 'Underground cables have zero capacitance', hi: 'भूमिगत केबलों में धारिता शून्य होती है', bn: 'আন্ডারগ্রাউন্ড ক্যাবলে ক্যাপাসিট্যান্স থাকে না' } },
        { id: 'opt-3', text: { en: 'Underground cables operate only on DC', hi: 'भूमिगत केबल केवल DC पर काम करते हैं', bn: 'ক্যাবলে কেবল ডিসি চলে' } },
        { id: 'opt-4', text: { en: 'Earth absorbs all reactive power directly', hi: 'पृथ्वी सभी रिएक्टिव पावर को सीधे अवशोषित करती है', bn: 'মাটি সকল রিঅ্যাক্টিভ পাওয়ার টেনে নেয়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Delta V is proportional to (omega*l)² * L * C / 2. Because length l is only a few kilometers for distribution cables, (l)² is tiny, preventing significant voltage rise despite high capacitance.',
        hi: 'वोल्टेज वृद्धि लंबाई के वर्ग (l²) पर निर्भर करती है। वितरण केबल केवल कुछ किलोमीटर लंबे होते हैं, इसलिए (l)² बहुत छोटा होता है।',
        bn: 'ভোল্টেজ বৃদ্ধি দৈর্ঘ্যের বর্গের (l²) সাথে সমানুপাতিক। স্বল্প দৈর্ঘ্যের কারণে l² অতি ক্ষুদ্র হওয়ায় ভোল্টেজ বৃদ্ধি ঘটে না।'
      }
    },
    {
      id: 'mcq-ch16-l05-08',
      question: {
        en: 'A transmission line delivers 80 MW at a receiving-end voltage of 132 kV. Total 3-phase series line resistance losses are 4 MW. What is the transmission efficiency?',
        hi: 'एक लाइन 132 kV पर 80 MW की आपूर्ति करती है। कुल 3-फेज सीरीज लाइन हानि 4 MW है। पारेषण दक्षता क्या है?',
        bn: 'একটি সঞ্চালন লাইন ১৩২ kV তে ৮০ MW সরবরাহ করে। মোট ৩-ফেজ লাইনে রোধের কারণে ক্ষতি ৪ MW। সঞ্চালন দক্ষতা কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '95.24%', hi: '95.24%', bn: '৯৫.২৪%' } },
        { id: 'opt-2', text: { en: '96.00%', hi: '96.00%', bn: '৯৬.০০%' } },
        { id: 'opt-3', text: { en: '90.00%', hi: '90.00%', bn: '৯০.০০%' } },
        { id: 'opt-4', text: { en: '92.50%', hi: '92.50%', bn: '৯২.৫০%' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'P_s = P_r + Losses = 80 + 4 = 84 MW. Efficiency = (P_r / P_s) * 100% = (80 / 84) * 100% = 95.238% ≈ 95.24%.',
        hi: 'P_s = 80 + 4 = 84 MW। दक्षता = (80 / 84) * 100 = 95.24%।',
        bn: 'P_s = ৮০ + ৪ = ৮৪ MW। দক্ষতা = (৮০ / ৮৪) * ১০০ = ৯৫.২৪%।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch16-l05-01',
      question: {
        en: 'A 300 km, 400 kV line has A = 0.90 ∠1.0°. If the sending voltage is held at 400 kV line-to-line, find the no-load receiving line voltage.',
        hi: 'एक 300 km, 400 kV लाइन के लिए A = 0.90 ∠1.0° है। यदि सेंडिंग वोल्टेज 400 kV पर है, तो नो-लोड रिसीविंग लाइन वोल्टेज ज्ञात कीजिए।',
        bn: 'একটি ৩০০ km, ৪০০ kV লাইনের A = ০.৯০ ∠১.০°। সেন্ডিং ভোল্টেজ ৪০০ kV হলে নো-লোড রিসিভিং লাইন ভোল্টেজ নির্ণয় করুন।'
      },
      hint: {
        en: 'Vr,NL = Vs / |A| = 400 / 0.90 = 444.44 kV.',
        hi: 'Vr,NL = 400 / 0.90 = 444.44 kV।',
        bn: 'Vr,NL = ৪০০ / ০.৯০ = ৪৪৪.৪৪ kV।'
      }
    }
  ]
};
