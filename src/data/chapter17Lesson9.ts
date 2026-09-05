import { Lesson } from '../types';

export const LESSON_BUSBAR_BREAKER_FAILURE: Lesson = {
  id: 'lsn-ch17-busbar-protection-breaker-failure',
  topicId: 'tp-ch17-busbar-protection-breaker-failure',
  chapterId: 'ch-advanced-power-system-protection',
  order: 9,
  title: {
    en: 'Busbar Protection and Breaker Failure (LBB/50BF)',
    hi: 'बसबार सुरक्षा एवं ब्रेकर विफलता (LBB/50BF)',
    bn: 'বাসবার সুরক্ষা ও ব্রেকার ব্যর্থতা (LBB/50BF)'
  },
  description: {
    en: 'Substation busbar architecture and backup interruption systems: Single, double, and one-and-a-half (1.5 CB) breaker layouts, Check Zone vs. Discriminated Zone (two-out-of-two tripping criteria), extreme multi-feeder CT saturation management, and Local Breaker Backup / Breaker Failure (ANSI 50BF / LBB) staging logic (Stage 1 re-trip, Stage 2 bus clearing and remote teleprotection trip).',
    hi: 'सबस्टेशन बसबार आर्किटेक्चर एवं बैकअप इंटरप्शन सिस्टम: सिंगल, डबल और डेढ़ ब्रेकर (1.5 CB) लेआउट, चेक ज़ोन बनाम डिस्क्रिमिनेटेड ज़ोन (दो-में-से-दो ट्रिपिंग दर्शन), बहु-फीडर CT सैचुरेशन प्रबंधन, और लोकल ब्रेकर बैकअप / ब्रेकर विफलता (ANSI 50BF / LBB) स्टेजिंग लॉजिक।',
    bn: 'সাবস্টেশন বাসবার আর্কিটেকচার ও ব্যাকআপ ইন্টারাপশন ব্যবস্থা: সিঙ্গেল, ডাবল ও ওয়ান-অ্যান্ড-এ-হাফ (১.৫ CB) ব্রেকার লেআউট, চেক জোন বনাম ডিসক্রিমিনেটেড জোন (টু-আউট-অব-টু ট্রিপিং নীতি), মাল্টি-ফিডার সিটি স্যাচুরেশন ব্যবস্থাপনা এবং লোকাল ব্রেকার ব্যাকআপ (ANSI 50BF / LBB) পর্যায়ক্রমিক লজিক।'
  },
  estimatedMinutes: 55,
  easyExplanation: {
    en: 'A substation busbar is the electrical super-highway where dozens of high-voltage transmission lines, power transformers, and generators converge. A short circuit on a busbar is the most violent fault in the entire power system, concentrating fault currents up to 40,000 to 63,000 Amperes! However, falsely tripping a busbar disconnects an entire city or region in a split second. Therefore, busbar protection must follow a strict "two-out-of-two" rule: both a global "Check Zone" and an individual "Discriminated Zone" must independently agree that a fault exists before tripping. What happens if a line faults and its circuit breaker jams mechanically and refuses to open? The Breaker Failure Relay (ANSI 50BF / LBB) starts a 100-millisecond timer the instant the trip command is issued. If current is still flowing after 100 milliseconds, it instantly trips all adjacent circuit breakers around that busbar and beams a transfer-trip signal to the remote substations to extinguish the fault!',
    hi: 'सबस्टेशन बसबार वह केंद्रीय जंक्शन है जहाँ दर्जनों हाई-वोल्टेज पारेषण लाइनें, जनरेटर और ट्रांसफार्मर आपस में जुड़ते हैं। बसबार पर शॉर्ट सर्किट पूरे पावर सिस्टम में सबसे भयानक होता है, जहाँ 40,000 से 63,000 एम्पीयर तक का करंट बह सकता है! लेकिन यदि बसबार गलती से ट्रिप हो जाए, तो एक झटके में पूरा शहर या राज्य अंधेरे में डूब सकता है। इसलिए बसबार सुरक्षा में "टू-आउट-ऑफ-टू" नियम लागू होता है: ट्रिप करने से पहले "चेक ज़ोन" और "डिस्क्रिमिनेटेड ज़ोन" दोनों का सहमत होना अनिवार्य है। यदि किसी लाइन में फॉल्ट होने पर सर्किट ब्रेकर जाम हो जाए और न खुले, तो ब्रेकर विफलता रिले (ANSI 50BF/LBB) 100 मिलीसेकंड का टाइमर चलाता है। यदि 100 ms बाद भी करंट बहता रहे, तो यह बसबार से जुड़े अन्य सभी ब्रेकर्स को खोलकर फॉल्ट को पूरी तरह काट देता है!',
    bn: 'সাবস্টেশনের বাসবার হলো এমন একটি মূল কেন্দ্র যেখানে ডজন ডজন সঞ্চালন লাইন, ট্রান্সফরমার এবং জেনারেটর এসে মিলিত হয়। বাসবারে শর্ট সার্কিট ঘটলে পুরো পাওয়ার গ্রিডের মধ্যে সবচেয়ে ভয়াবহ বিস্ফোরণ ও ৪০,০০০ থেকে ৬৩,০০০ অ্যাম্পিয়ার পর্যন্ত তীব্র কারেন্ট তৈরি হয়! কিন্তু বাসবার ভুলবশত ট্রিপ করলে পুরো একটি বিভাগ বা শহর নিমেষেই বিদ্যুৎহীন হয়ে পড়বে। এজন্য বাসবার সুরক্ষায় "টু-আউট-অব-টু" নীতি মানা হয়: একটি "চেক জোন" এবং নির্দিষ্ট "ডিসক্রিমিনেটেড জোন" উভয়ই একমত হলেই কেবল ট্রিপ হবে। আবার কোনো লাইনে ফল্ট হলে যদি সেখানকার সার্কিট ব্রেকার জ্যাম হয়ে খুলতে ব্যর্থ হয়, তবে লোকাল ব্রেকার ব্যাকআপ (ANSI 50BF/LBB) ১০০ মিলিসেকেন্ডের টাইমার চালায়। ১০০ ms পরেও কারেন্ট চলতে থাকলে এটি ওই বাসবারের সাথে যুক্ত বাকি সমস্ত ব্রেকার খুলে দিয়ে গ্রিডকে রক্ষা করে!'
  },
  detailedExplanation: {
    en: 'Busbar protection (ANSI 87B) and Breaker Failure Protection (ANSI 50BF) represent the critical master clearing layer in electrical switchgear:\n\n1. Substation Busbar Topologies:\n• Single Busbar: Economical, but bus fault or maintenance de-energizes the entire substation.\n• Double Busbar with Bus Coupler: Incorporates Main Bus 1 and Main Bus 2 connected via a Bus Coupler breaker. Isolators allow transferring any feeder between Bus 1 and Bus 2 without interruption.\n• One-and-a-Half Breaker (1.5 CB) Scheme: Standard in 400 kV and 765 kV switchyards. Three circuit breakers are shared between two adjacent circuits connected across two parallel buses (Bus A and Bus B). Provides absolute flexibility: any single breaker can be isolated for maintenance without disconnecting any line or busbar!\n\n2. Dual-Zone "Two-out-of-Two" Tripping Philosophy:\nTo guarantee absolute immunity against catastrophic false tripping (e.g. human accidental trip contact closure or relay hardware failure):\n• Discriminated Zone (Bus Zone): Sums currents belonging specifically to that bus section (guided by isolator auxiliary replica switches). If an internal fault occurs on Bus 1, only the Bus 1 Discriminated Zone operates.\n• Check Zone (Supervisory Zone): Sums all currents entering and leaving the ENTIRE substation regardless of isolator status. Operates for faults anywhere within the station boundary.\n• Tripping Rule: Trip outputs are wired in series logic (AND gate). Breakers are tripped IF AND ONLY IF [Discriminated Zone Operates] AND [Check Zone Operates]!\n\n3. Breaker Failure Protection (ANSI 50BF / LBB):\nCircuit breakers can fail to clear a short circuit due to mechanical jamming, trip coil burnout, loss of pneumatic/hydraulic pressure, or auxiliary DC circuit disconnection.\nOperating sequence of the 50BF scheme:\n• Initiation: Master trip relay (ANSI 86) of any feeder protection starts the 50BF logic and starts timer T1.\n• Current Detector (50BF): Fast undercurrent detector monitors secondary current (pickup typically set to 0.1 to 0.2 In). If fault current drops below pickup, the breaker has cleared the fault and the timer immediately resets.\n• Stage 1 (Re-trip ~50 to 100 ms): If current persists, the relay triggers a secondary trip coil on the same local breaker to overcome a single failed trip coil.\n• Stage 2 (Bus Clear & Teleprotection ~120 to 180 ms): If current still persists after T2, the breaker is declared failed. The relay instantly issues trip commands to ALL circuit breakers connected to that same busbar section, and transmits high-speed Carrier Transfer Trip (DTT) signals over fiber/PLCC to remote-end line breakers to quench the infeed completely.',
    hi: 'बसबार एवं ब्रेकर विफलता सुरक्षा के तकनीकी बिंदु:\n1. सबस्टेशन लेआउट: सिंगल बस, डबल बस (बस कप्लर्स सहित), और डेढ़ ब्रेकर योजना (1.5 CB - 400/765 kV में मानक)।\n2. टू-आउट-ऑफ-टू ट्रिपिंग: गलती से ट्रिपिंग रोकने के लिए चेक ज़ोन (पूरे सबस्टेशन की निगरानी) और डिस्क्रिमिनेटेड ज़ोन (विशिष्ट बसबार सेक्शन) दोनों का एक साथ ट्रिप होना अनिवार्य होता है।\n3. ब्रेकर विफलता सुरक्षा (50BF / LBB):\n• जब किसी लाइन का मुख्य रिले ट्रिप देता है, तो 50BF टाइमर (T1) चालू हो जाता है।\n• करंट डिटेक्टर (50BF): यदि 100-150 ms बाद भी करंट बहता रहता है, तो ब्रेकर को विफल माना जाता है।\n• स्टेज 1 (50-100 ms): उसी ब्रेकर के दूसरे ट्रिप कॉइल को दोबारा ट्रिप कमांड (Re-trip) देता है।\n• स्टेज 2 (120-180 ms): उस बस से जुड़े अन्य सभी ब्रेकर्स को ट्रिप करता है और लाइन के दूसरे छोर पर रिमोट ट्रिप सिग्नल भेजता है।',
    bn: 'বাসবার ও ব্রেকার ফেইলিওর সুরক্ষার প্রযুক্তিগত বিশ্লেষণ:\n১. বাসবার টপোলজি: সিঙ্গেল বাস, ডাবল বাস ও ১.৫ ব্রেকার স্কিম (উচ্চ ভোল্টেজে ব্যবহৃত)।\n২. টু-আউট-অব-টু ট্রিপিং: ভুলবশত সাবস্টেশন বন্ধ হওয়া ঠেকাতে চেক জোন ও ডিসক্রিমিনেটেড জোন উভয়ের যৌথ সম্মতি ছাড়া কোনো ব্রেকার ট্রिप করানো হয় না।\n৩. লোকাল ব্রেকার ব্যাকআপ (50BF / LBB):\n• লাইনের মূল রিলে ট্রিপ সিগন্যাল দিলে সাথে সাথে 50BF এর টাইমার চালু হয়।\n• ১০০-১৫০ মিলিসেকেন্ডের মধ্যেও যদি কারেন্ট বন্ধ না হয়, তবে ব্রেকার অকেজো হিসেবে ঘোষিত হয়।\n• স্টেজ ১ (৫০-১০০ ms): একই ব্রেকারের বিকল্প ট্রিপ কয়েলে পুনরায় রি-ট্রিপ সংকেত দেয়।\n• স্টেজ ২ (১২০-১৮০ ms): বাসবারের বাকি সব ব্রেকার তাৎক্ষণিক খুলে দেয় এবং দূরবর্তী প্রান্তের ব্রেকার বন্ধ করতে অপটিক্যাল ফাইবারে ডাইরেক্ট ট্রান্সফার ট্রিপ (DTT) পাঠায়।'
  },
  formulas: [
    {
      id: 'f-ch17-lbb-timer-coordination',
      symbol: 'T_{50BF}',
      expression: 'T_{50BF} = t_{cb} + t_{reset} + t_{margin}',
      title: {
        en: 'Breaker Failure (50BF) Timer Coordination Formula',
        hi: 'ब्रेकर विफलता (50BF) टाइमर समन्वय सूत्र',
        bn: 'ব্রেকার ফেইলিওর (50BF) টাইমার সমন্বয় সূত্র'
      },
      description: {
        en: 'Calculates the minimum secure operating time delay for Stage 2 breaker failure busbar backup trip to prevent premature tripping of healthy bays.',
        hi: 'स्वस्थ बे (Bays) की असामयिक ट्रिपिंग को रोकने के लिए स्टेज 2 ब्रेकर विफलता के सुरक्षित समय की गणना करता है।',
        bn: 'সুস্থ ফিডার যেন অনাকাঙ্ক্ষিতভাবে বন্ধ না হয় সেজন্য ব্রেকার ফেইলিওর স্টেজ ২ এর ন্যূনতম নিরাপদ সময় বিলম্ব নির্ণয় করে।'
      },
      variables: [
        { symbol: 'T_{50BF}', name: { en: 'Total 50BF Stage 2 operating time delay (ms)', hi: 'कुल 50BF स्टेज 2 समय देरी (ms)', bn: 'মোট 50BF স্টেজ ২ সময় বিলম্ব (ms)' } },
        { symbol: 't_{cb}', name: { en: 'Maximum circuit breaker interrupting time (typically 40 to 60 ms for 2 to 3 cycle breakers)', hi: 'सर्किट ब्रेकर इंटरप्शन समय (ms)', bn: 'সার্কিট ব্রেকারের ফল্ট কাটার সময় (ms)' } },
        { symbol: 't_{reset}', name: { en: '50BF current detector relay reset time (typically 15 to 25 ms)', hi: 'रिले रीसेट समय (ms)', bn: 'রিলের কারেন্ট ডিটেক্টর রিসেট সময় (ms)' } },
        { symbol: 't_{margin}', name: { en: 'Safety margin for contact bounce and auxiliary relays (typically 40 to 60 ms)', hi: 'सुरक्षा मार्जिन (ms)', bn: 'নিরাপত্তা মার্জিন (ms)' } }
      ]
    },
    {
      id: 'f-ch17-bus-kcl-check',
      symbol: 'I_{diff,bus}',
      expression: 'I_{diff,bus} = \\left| \\sum_{k=1}^{M} \\vec{I}_{k} \\right|',
      title: {
        en: 'Busbar Differential Kirchhoff Vector Sum',
        hi: 'बसबार डिफरेंशियल किरचॉफ वेक्टर योग',
        bn: 'বাসবার ডিফারেনশিয়াল কার্শফ ভেক্টর যোগফল'
      },
      description: {
        en: 'Calculates the algebraic vector sum of all M feeder currents terminating on a common busbar zone.',
        hi: 'एक सामान्य बसबार पर समाप्त होने वाले सभी M फीडर धाराओं के वेक्टर योग की गणना करता है।',
        bn: 'একটি বাসবারে সমাপ্ত হওয়া সমস্ত M সংখ্যক ফিডারের কারেন্ট ভেক্টরের বীজগাণিতিক যোগফল নির্ণয় করে।'
      },
      variables: [
        { symbol: 'I_{diff,bus}', name: { en: 'Bus differential operating current (A)', hi: 'बस डिफरेंशियल धारा', bn: 'বাস ডিফারেনশিয়াল কারেন্ট' } },
        { symbol: '\\vec{I}_{k}', name: { en: 'Current vector of feeder k terminating on the bus section (A)', hi: 'फीडर k की धारा', bn: 'ফিডার k এর কারেন্ট ভেক্টর' }, isVector: true },
        { symbol: 'M', name: { en: 'Total number of connected incoming and outgoing feeders', hi: 'कुल जुड़े हुए फीडर', bn: 'সংযুক্ত মোট ফিডারের সংখ্যা' } }
      ]
    }
  ],
  keyPoints: [
    {
      en: 'Busbar short circuits generate catastrophic fault currents (up to 63 kA) and require high-speed clearing (<25 ms).',
      hi: 'बसबार शॉर्ट सर्किट अत्यधिक फॉल्ट धाराएं (63 kA तक) उत्पन्न करते हैं और उन्हें तेजी से (<25 ms) साफ करने की आवश्यकता होती है।',
      bn: 'বাসবার শর্ট সার্কিটে মারাত্মক ফল্ট কারেন্ট (৬৩ kA পর্যন্ত) তৈরি হয় যা ২৫ মিলিসেকেন্ডের মধ্যে বিচ্ছিন্ন করা জরুরি।'
    },
    {
      en: 'The "two-out-of-two" tripping philosophy requires simultaneous pickup of both Check Zone and Discriminated Zone before tripping.',
      hi: '"टू-आउट-ऑफ-टू" ट्रिपिंग दर्शन में ट्रिप करने से पहले चेक ज़ोन और डिस्क्रिमिनेटेड ज़ोन दोनों का एक साथ सक्रिय होना अनिवार्य है।',
      bn: '"টু-আউট-অব-টু" তত্ত্বে চেক জোন এবং ডিসক্রিমিনেটেড জোন উভয়ের যুগপৎ ট্রিপ নির্দেশ ছাড়া ব্রেকার খোলা হয় না।'
    },
    {
      en: 'Breaker Failure (ANSI 50BF / LBB) provides crucial backup when a mechanical circuit breaker fails to open following a trip signal.',
      hi: 'ब्रेकर विफलता (50BF/LBB) तब महत्वपूर्ण बैकअप प्रदान करता है जब कोई ब्रेकर ट्रिप सिग्नल मिलने के बाद भी खुलने में विफल रहता है।',
      bn: 'ট্রিপ নির্দেশ পাওয়ার পরেও যান্ত্রিক ত্রুটির কারণে কোনো সার্কিট ব্রেকার খুলতে ব্যর্থ হলে 50BF / LBB জরুরি ব্যাকআপ দেয়।'
    },
    {
      en: 'Stage 1 re-trips the local breaker using a secondary coil, while Stage 2 (~150 ms) trips the entire busbar and sends remote transfer trips.',
      hi: 'स्टेज 1 दूसरे कॉइल का उपयोग करके स्थानीय ब्रेकर को फिर से ट्रिप करता है, जबकि स्टेज 2 पूरे बसबार को ट्रिप करता है और रिमोट ट्रिप भेजता है।',
      bn: 'স্টেজ ১ বিকল্প ট্রিপ কয়েলে লোকাল ব্রেকারকে রি-ট্রিপ করায় এবং স্টেজ ২ (~১৫০ ms) পুরো বাসবার ট্রিপ করে দূরবর্তী প্রান্তে সংকেত পাঠায়।'
    }
  ],
  schematics: [
    {
      id: 'sch-ch17-l09-01',
      title: {
        en: 'Dual-Zone Busbar Protection Topology & 50BF Breaker Failure Staging Logic',
        hi: 'दोहरी-ज़ोन बसबार सुरक्षा टोपोलॉजी एवं 50BF ब्रेकर विफलता स्टेजिंग लॉजिक',
        bn: 'ডুয়াল-জোন বাসবার সুরক্ষা টোপোলজি ও 50BF ব্রেকার ফেইলিওর স্টেজ লজিক'
      },
      content: {
        en: 'The schematic details: (1) A double busbar substation layout illustrating the separate Discriminated Zone CT summing circuits (Bus 1, Bus 2) coupled with the overall Check Zone CT summing loop, and (2) The ANSI 50BF Local Breaker Backup state machine showing Trip Initiation, current detector logic, Stage 1 Re-trip coil output, Stage 2 bus tripping matrix, and Direct Transfer Trip (DTT) teleprotection output.',
        hi: 'यह आरेख दिखाता है: (1) चेक ज़ोन और डिस्क्रिमिनेटेड ज़ोन के साथ डबल बसबार सबस्टेशन व्यवस्था, और (2) ट्रिप इनिशिएशन, करंट डिटेक्टर, स्टेज 1 री-ट्रिप और स्टेज 2 बस ट्रिपिंग के साथ 50BF ब्रेकर विफलता स्टेट मशीन।',
        bn: 'এই স্কিম্যাটিকটি প্রদর্শন করে: (১) চেক জোন ও ডিসক্রিমিনেটেড জোন সমন্বিত ডাবল বাসবার সাবস্টেশন লেআউট এবং (২) ট্রিপ ইনিশিয়েশন, কারেন্ট ডিটেক্টর, স্টেজ ১ রি-ট্রিপ ও স্টেজ ২ বাস ট্রিপিং সহ ANSI 50BF লোকাল ব্রেকার ব্যাকআপ স্টেট মেশিন।'
      },
      schematicId: 'sch-ch17-busbar-protection-breaker-failure'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch17-l09-01',
      problem: {
        en: 'A 400 kV gas-insulated substation (GIS) utilizes 2-cycle circuit breakers (rated interrupting time t_cb = 40 ms). The breaker failure relay current detector has a reset time of t_reset = 20 ms. If a safety margin of t_margin = 50 ms is specified to prevent spurious bus trips, determine the required Stage 2 Breaker Failure (50BF) operating time delay (T_50BF).',
        hi: 'एक 400 kV GIS सबस्टेशन में 2-साइकिल सर्किट ब्रेकर (t_cb = 40 ms) हैं। 50BF करंट डिटेक्टर का रीसेट समय 20 ms है और सुरक्षा मार्जिन 50 ms है। स्टेज 2 ब्रेकर विफलता (T_50BF) के लिए आवश्यक समय सेटिंग निर्धारित करें।',
        bn: 'একটি ৪০০ kV GIS সাবস্টেশনে ২-সাইকেল সার্কিট ব্রেকার (t_cb = ৪০ ms) ব্যবহৃত হয়। 50BF রিলের কারেন্ট ডিটেক্টরের রিসেট সময় ২০ ms এবং নিরাপত্তা মার্জিন ৫০ ms। স্টেজ ২ ব্রেকার ফেইলিওর (T_50BF) রিলের প্রয়োজনীয় সময় বিলম্ব নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n• Circuit breaker interrupting time t_cb = 40 ms (2 cycles at 50 Hz)\n• Current detector reset time t_reset = 20 ms\n• Desired safety margin t_margin = 50 ms\n\nStep 1: Apply the 50BF timer coordination equation:\nT_50BF = t_cb + t_reset + t_margin\nT_50BF = 40 ms + 20 ms + 50 ms = 110 ms\n\nStep 2: Practical standard setting verification:\nIn standard utility practice for 400 kV grids, Stage 2 50BF time delay is typically set between 120 ms and 150 ms to guarantee zero false operations while maintaining critical system transient stability limits (<200 ms).\n\nConclusion: Configure Stage 2 50BF timer setting at T_50BF = 120 ms.',
        hi: 'चरण 1: T_50BF = 40 + 20 + 50 = 110 ms\nचरण 2: ग्रिड स्थिरता और सुरक्षा मार्जिन को ध्यान में रखते हुए, मानक उपयोगिता सेटिंग 120 ms होगी।',
        bn: 'ধাপ ১: T_50BF = ৪০ + ২০ + ৫০ = ১১০ ms\nধাপ ২: গ্রিড স্থায়িত্ব ও নিরাপত্তা ব্যবধান বিবেচনা করে স্ট্যান্ডার্ড ইউটিলিটি সেটিং হিসেবে ১২০ ms নির্বাচন করা হবে।'
      },
      givenValues: { 't_cb': '40 ms', 't_reset': '20 ms', 't_margin': '50 ms' },
      finalAnswer: {
        en: 'Calculated minimum = 110 ms; Standard recommended setting = 120 ms',
        hi: 'न्यूनतम गणना = 110 ms; अनुशंसित मानक सेटिंग = 120 ms',
        bn: 'হিসাবকৃত ন্যূনতম = ১১০ ms; প্রস্তাবিত স্ট্যান্ডার্ড সেটিং = ১২০ ms'
      }
    },
    {
      id: 'ex-ch17-l09-02',
      problem: {
        en: 'A double-busbar 220 kV substation has 6 feeders connected. Under normal operation, Feeders 1, 2, and 3 are connected to Bus 1, while Feeders 4, 5, and 6 are connected to Bus 2. A catastrophic 30 kA short circuit occurs on Bus 1. State the operating states of: (a) Bus 1 Discriminated Zone, (b) Bus 2 Discriminated Zone, (c) Substation Check Zone, and (d) Which circuit breakers will be tripped.',
        hi: 'एक 220 kV डबल-बस सबस्टेशन में बस 1 पर 30 kA का फॉल्ट होता है। बताएं: (a) बस 1 ज़ोन, (b) बस 2 ज़ोन, (c) चेक ज़ोन, और (d) कौन से ब्रेकर ट्रिप होंगे।',
        bn: 'একটি ২২০ kV ডাবল বাস সাবস্টেশনের বাস ১ এ ৩০ kA শর্ট সার্কিট ঘটল। উল্লেখ করুন: (a) বাস ১ জোন, (b) বাস ২ জোন, (c) চেক জোন এবং (d) কোন কোন ব্রেকার ট্রিপ করবে।'
      },
      solution: {
        en: 'Step 1: Check Zone response:\nThe Check Zone monitors all 6 feeders combined across the entire station. Because 30 kA is entering the substation and failing to balance, Check Zone measures I_diff = 30 kA.\nResult: Check Zone PICKS UP (Tripping permission granted).\n\nStep 2: Bus 1 Discriminated Zone response:\nFeeders 1, 2, 3 terminate on Bus 1. Sum of currents on Bus 1 does not balance to zero (I_diff = 30 kA).\nResult: Bus 1 Discriminated Zone PICKS UP.\n\nStep 3: Bus 2 Discriminated Zone response:\nFeeders 4, 5, 6 terminate on Bus 2. Currents entering and leaving Bus 2 balance perfectly to zero (I_diff = 0 A).\nResult: Bus 2 Discriminated Zone RESTRAINS (Does not pick up).\n\nStep 4: Tripping Logic Implementation:\n• Bus 1: [Check Zone = 1] AND [Bus 1 Zone = 1] -> TRIP command issued to breakers 1, 2, 3 and Bus Coupler.\n• Bus 2: [Check Zone = 1] AND [Bus 2 Zone = 0] -> NO TRIP. Feeders 4, 5, 6 remain energized and stable!',
        hi: 'चेक ज़ोन: सक्रिय (30 kA फॉल्ट देखा गया)।\nबस 1 ज़ोन: सक्रिय (फॉल्ट बस 1 पर है)।\nबस 2 ज़ोन: शांत (0 A अंतर, कोई फॉल्ट नहीं)।\nपरिणाम: बस 1 के ब्रेकर (1, 2, 3) और बस कपलर ट्रिप होंगे। बस 2 के फीडर चालू रहेंगे।',
        bn: 'চেক জোন: সক্রিয় (ফল্ট নিশ্চিত করেছে)।\nবাস ১ জোন: সক্রিয় (ফল্ট বাস ১ এ)।\nবাস ২ জোন: শান্ত (কোনো ফল্ট নেই)।\nসিদ্ধান্ত: বাস ১ এর ব্রেকার (১, ২, ৩) এবং বাস কাপলার ট্রিপ করবে। বাস ২ এর ফিডারগুলো সম্পূর্ণ স্বাভাবিকভাবে বিদ্যুৎ সরবরাহ চালু রাখবে।'
      },
      givenValues: { 'Fault': '30 kA on Bus 1', 'Feeders': '1-3 on Bus 1, 4-6 on Bus 2' },
      finalAnswer: {
        en: 'Check Zone: OPERATES; Bus 1 Zone: OPERATES; Bus 2 Zone: RESTS; Only Bus 1 breakers trip',
        hi: 'चेक ज़ोन: सक्रिय; बस 1 ज़ोन: सक्रिय; बस 2 ज़ोन: शांत; केवल बस 1 के ब्रेकर ट्रिप होंगे',
        bn: 'চেক জোন: সক্রিয়; বাস ১ জোন: সক্রিয়; বাস ২ জোন: নিষ্ক্রিয়; কেবল বাস ১ এর ব্রেকারগুলো ট্রিপ করবে'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Configuring numerical busbar protection systems (e.g. centralized or decentralized bay-unit architectures) in 400 kV extra-high-voltage substations.',
      'Integrating breaker failure (50BF) initiation and trip matrices into substation lockout relays (ANSI 86).',
      'Implementing isolator auxiliary switch replica logic to track dynamic feeder switching between main buses.'
    ],
    hi: [
      '400 kV EHV सबस्टेशनों में संख्यात्मक बसबार सुरक्षा प्रणालियों को कॉन्फ़िगर करना।',
      'सबस्टेशन लॉकआउट रिले (ANSI 86) में ब्रेकर विफलता (50BF) ट्रिप मैट्रिक्स को जोड़ना।',
      'मुख्य बसों के बीच फीडर स्विचिंग को ट्रैक करने के लिए आइसोलेटर सहायक संपर्क लॉजिक लागू करना।'
    ],
    bn: [
      '৪০০ kV ইএইচভি সাবস্টেশনে সেন্ট্রালাইজড ও ডিসেন্ট্রালাইজড বে-ইউনিট বিশিষ্ট বাসবার সুরক্ষা কনফিগারেশন।',
      'সাবস্টেশন মাস্টার লকআউট রিলের (ANSI 86) সাথে ব্রেকার ফেইলিওর (50BF) ট্রিপ ম্যাট্রিক্স একীভূতকরণ।',
      'ডাবল বাসের মধ্যে ফিডার পরিবর্তন ট্র্যাক করতে আইসোলেটর অক্সিলিয়ারি রেপ্লিকা লজিক বাস্তবায়ন।'
    ]
  },
  commonMistakes: {
    en: [
      'Omitting the Check Zone and tripping busbars using only the Discriminated Zone: an auxiliary contact misbehavior or maintenance bump will trigger a catastrophic blackout of the entire substation!',
      'Setting the 50BF current detector pickup above the minimum prospective fault current, preventing breaker failure protection from detecting high-resistance faults.',
      'Setting the 50BF timer too short (<80 ms), causing healthy adjacent breakers to trip during normal, slow clearing by elderly circuit breakers.'
    ],
    hi: [
      'चेक ज़ोन को छोड़ना और केवल डिस्क्रिमिनेटेड ज़ोन से ट्रिप करना: किसी रिले की छोटी खराबी से पूरा सबस्टेशन बंद हो सकता है!',
      '50BF करंट पिकअप को बहुत अधिक सेट करना, जिससे हाई-रेजिस्टेंस फॉल्ट पर ब्रेकर विफलता रिले काम ही नहीं करता।',
      '50BF टाइमर को बहुत कम (<80 ms) सेट करना, जिससे सामान्य ब्रेकर के खुलने से पहले ही बैकअप रिले पूरी बस को ट्रिप कर देता है।'
    ],
    bn: [
      'চেক জোন বাদ দিয়ে কেবল ডিসক্রিমিনেটেড জোনের ওপর নির্ভর করা: একটি ছোট যান্ত্রিক ত্রুটিতে পুরো সাবস্টেশন ব্ল্যাকআউট হয়ে যাবে!',
      '50BF কারেন্ট ডিটেক্টরের পিকআপ অনেক বেশি সেট করা, ফলে উচ্চ রেজিস্ট্যান্স ফল্টে ব্রেকার আটকে গেলেও রিলে তা বুঝতে পারে না।',
      '50BF এর টাইমার অতিরিক্ত কম (<৮০ ms) রাখা, যার ফলে সাধারণ ব্রেকার স্বাভাবিকভাবে খোলার আগেই পুরো বাসবার অযথা ট্রিপ হয়ে যায়।'
    ]
  },
  keyTakeaways: {
    en: [
      'Busbar protection operates on Kirchhoff’s Current Law with mandatory Check Zone and Discriminated Zone AND-logic.',
      'Breaker Failure (ANSI 50BF / LBB) initiates when a primary protection trip command fails to extinguish current within ~120 ms.',
      'Stage 1 re-trips the local breaker; Stage 2 clears the entire busbar and sends remote transfer trip commands.'
    ],
    hi: [
      'बसबार सुरक्षा किरचॉफ के नियम पर काम करती है जिसमें चेक ज़ोन और डिस्क्रिमिनेटेड ज़ोन का AND-लॉजिक अनिवार्य है।',
      'ब्रेकर विफलता (50BF) तब शुरू होती है जब ट्रिप कमांड मिलने के बाद भी ~120 ms में करंट बंद नहीं होता।',
      'स्टेज 1 स्थानीय ब्रेकर को री-ट्रिप करता है; स्टेज 2 पूरी बसबार को साफ करता है और रिमोट ट्रिप भेजता है।'
    ],
    bn: [
      'বাসবার সুরক্ষা কার্শফের সূত্রের ওপর প্রতিষ্ঠিত যেখানে চেক জোন ও ডিসক্রিমিনেটেড জোনের যৌথ AND-লজিক বাধ্যতামূলক।',
      'ব্রেকার ফেইলিওর (ANSI 50BF) তখনই সক্রিয় হয় যখন ট্রিপ সংকেত সত্ত্বেও ~১২০ ms এর মধ্যে কারেন্ট শূন্য না হয়।',
      'স্টেজ ১ স্থানীয় ব্রেকারকে রি-ট্রিপ করায়; স্টেজ ২ পুরো বাসবার খুলে দেয় এবং দূরবর্তী প্রান্তে ট্রান্সফার ট্রিপ পাঠায়।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch17-l09-01',
      question: {
        en: 'Why is the "Two-out-of-Two" tripping philosophy (Check Zone AND Discriminated Zone) mandatory in high-voltage busbar protection?',
        hi: 'हाई-वोल्टेज बसबार सुरक्षा में "टू-आउट-ऑफ-टू" ट्रिपिंग दर्शन (चेक ज़ोन AND डिस्क्रिमिनेटेड ज़ोन) क्यों अनिवार्य है?',
        bn: 'হাই-ভোল্টেজ বাসবার সুরক্ষায় "টু-আউট-অব-টু" ট্রিপিং দর্শন (চেক জোন AND ডিসক্রিমিনেটেড জোন) বাধ্যতামূলক কেন?'
      },
      options: [
        { id: 'opt-1', text: { en: 'To achieve extreme security: a single accidental contact closure or hardware fault can never trigger a catastrophic false trip of the entire substation', hi: 'अत्यधिक सुरक्षा प्राप्त करने के लिए: एक आकस्मिक संपर्क बंद होने या हार्डवेयर दोष से पूरे सबस्टेशन की गलत ट्रिपिंग कभी नहीं हो सकती', bn: 'অনাকাঙ্ক্ষিত ট্রিপিং রোধে সর্বোচ্চ নিরাপত্তা বিধান: একটি মাত্র তারের শর্ট বা হার্ডওয়্যার ত্রুটিতে যেন পুরো সাবস্টেশন কখনোই বন্ধ না হয়ে যায়' } },
        { id: 'opt-2', text: { en: 'To double the speed of electricity through the busbar conductors', hi: 'बसबार कंडक्टरों के माध्यम से बिजली की गति को दोगुना करने के लिए', bn: 'বাসবারে বিদ্যুতের গতি দ্বিগুণ করতে' } },
        { id: 'opt-3', text: { en: 'Because two CTs weigh less than one CT', hi: 'क्योंकि दो CT एक CT से हल्के होते हैं', bn: 'কারণ দুটি সিটির ওজন একটির চেয়ে কম' } },
        { id: 'opt-4', text: { en: 'To allow the substation to operate without a grounding system', hi: 'सबस्टेशन को बिना ग्राउंडिंग सिस्टम के संचालित करने की अनुमति देने के लिए', bn: 'সাবস্টেশনকে গ্রাউন্ডিং ছাড়া চালানোর জন্য' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Falsely tripping a 400 kV busbar disconnects hundreds of megawatts of generation and load. By requiring both an independent overall Check Zone and the bus-specific Discriminated Zone to agree simultaneously, spurious trips are virtually eliminated.',
        hi: 'गलत बस ट्रिपिंग से पूरा क्षेत्र अंधेरे में डूब सकता है। चेक ज़ोन और डिस्क्रिमिनेटेड ज़ोन दोनों का AND लॉजिक होने से किसी एक रिले की खराबी से गलत ट्रिप नहीं होता।',
        bn: 'বাসবার ভুল ট্রিপ করলে একসাথে শত শত মেগাওয়াট লোড ও জেনারেটর বিচ্ছিন্ন হয়ে ভয়াবহ বিপর্যয় ঘটে। চেক জোন ও ডিসক্রিমিনেটেড জোনের যৌথ সম্মতি থাকায় অযাচিত ব্ল্যাকআউট শূন্যের কোঠায় থাকে।'
      }
    },
    {
      id: 'mcq-ch17-l09-02',
      question: {
        en: 'What condition initiates the timing circuit of a Local Breaker Backup / Breaker Failure (ANSI 50BF) protection scheme?',
        hi: 'लोकल ब्रेकर बैकअप / ब्रेकर विफलता (ANSI 50BF) सुरक्षा योजना के टाइमिंग सर्किट को कौन सी स्थिति शुरू करती है?',
        bn: 'কোন পরিস্থিতিটি লোকাল ব্রেকার ব্যাকআপ (ANSI 50BF) সুরক্ষা স্কিমের টাইমিং সার্কিটকে চালু করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'A trip command issued by a primary protection relay (ANSI 86/trip coil energization) coupled with current detector pickup (50BF)', hi: 'प्राथमिक सुरक्षा रिले द्वारा ट्रिप कमांड जारी करना (86 ट्रिप कॉइल सक्रियण) और साथ में करंट डिटेक्टर पिकअप (50BF)', bn: 'প্রাইমারি প্রোটেকশন রিলে কর্তৃক ট্রিপ নির্দেশ জারি (৮৬ ট্রিপ কয়েল সক্রিয়) এবং সাথে কারেন্ট ডিটেক্টরের উপস্থিতি (50BF)' } },
        { id: 'opt-2', text: { en: 'A rise in ambient temperature inside the control room', hi: 'कंट्रोल रूम के तापमान में वृद्धि', bn: 'কন্ট্রোল রুমের তাপমাত্রা বৃদ্ধি' } },
        { id: 'opt-3', text: { en: 'A routine change in electricity tariff rates', hi: 'बिजली दरों में नियमित बदलाव', bn: 'বিদ্যুতের দাম পরিবর্তন হওয়া' } },
        { id: 'opt-4', text: { en: 'The opening of the substation main entrance gate', hi: 'सबस्टेशन के मुख्य द्वार का खुलना', bn: 'সাবস্টেশনের গেট খোলা' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: '50BF logic starts when two conditions coincide: (1) An external trip command has been dispatched to the breaker trip coil, AND (2) The 50BF current detector confirms that current continues to flow through the breaker contacts.',
        hi: '50BF टाइमर तब शुरू होता है जब रिले ब्रेकर को ट्रिप कमांड भेजता है और करंट डिटेक्टर देखता है कि ब्रेकर में अभी भी करंट बह रहा है।',
        bn: '50BF টাইমার দুটি শর্তে শুরু হয়: (১) মূল রিলে ব্রেকার খোলার ট্রিপ কমান্ড দিয়েছে এবং (২) কারেন্ট ডিটেক্টর নিশ্চিত করছে যে ব্রেকারের ভেতর দিয়ে এখনও বিদ্যুৎ প্রবাহিত হচ্ছে।'
      }
    },
    {
      id: 'mcq-ch17-l09-03',
      question: {
        en: 'What is the operational action executed during Stage 1 of a Breaker Failure (50BF) sequence?',
        hi: 'ब्रेकर विफलता (50BF) अनुक्रम के स्टेज 1 के दौरान क्या परिचालन कार्रवाई की जाती है?',
        bn: 'ব্রেকার ফেইলিওর (50BF) সিকোয়েন্সের স্টেজ ১ চলাকালীন কোন অপারেশনটি সম্পন্ন করা হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'It pulses a secondary, independent trip coil on the SAME circuit breaker (Re-trip) to overcome a single failed trip coil', hi: 'यह एक जले हुए ट्रिप कॉइल की विफलता से निपटने के लिए उसी सर्किट ब्रेकर के दूसरे ट्रिप कॉइल (Re-trip) को चालू करता है', bn: 'প্রথম কয়েলের ব্যর্থতা দূর করতে একই সার্কিট ব্রেকারের দ্বিতীয় বিকল্প ট্রিপ কয়েলে পুনরায় ট্রিপ সংকেত (Re-trip) পাঠায়' } },
        { id: 'opt-2', text: { en: 'It drops the grid frequency by 2 Hz', hi: 'यह ग्रिड आवृत्ति को 2 Hz कम करता है', bn: 'এটি গ্রিড ফ্রিকোয়েন্সি ২ Hz কমিয়ে দেয়' } },
        { id: 'opt-3', text: { en: 'It discharges all fire extinguishing systems in the switchyard', hi: 'यह सभी अग्निशामक प्रणालियों को सक्रिय करता है', bn: 'এটি সব অগ্নিনির্বাপক ব্যবস্থা চালু করে দেয়' } },
        { id: 'opt-4', text: { en: 'It locks all substation doors automatically', hi: 'यह सभी सबस्टेशन दरवाजों को स्वचालित रूप से लॉक करता है', bn: 'সব দরজা লক করে দেয়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'High-voltage breakers have dual trip coils (Coil 1 and Coil 2). Stage 1 (~50 to 80 ms) energizes the alternate trip coil in case the primary failure was simply a burned-out coil or open trip circuit wire, avoiding an unnecessary whole-bus trip.',
        hi: 'HV ब्रेकर्स में दो ट्रिप कॉइल होते हैं। स्टेज 1 (50-80 ms) दूसरे कॉइल को सक्रिय करता है ताकि यदि पहला कॉइल खराब हो तो ब्रेकर खुल जाए और बाकी बसबार ट्रिप होने से बच जाए।',
        bn: 'উচ্চ ভোল্টেজের ব্রেকারে দুটি ট্রিপ কয়েল থাকে। স্টেজ ১ বিকল্প কয়েলকে চালু করে দেখে যে কেবল কয়েল কাটার কারণেই ব্রেকার আটকে ছিল কিনা; ফলে পুরো বাসবার অযথা ট্রিপ করা থেকে রক্ষা পায়।'
      }
    },
    {
      id: 'mcq-ch17-l09-04',
      question: {
        en: 'If a circuit breaker remains jammed after the Stage 2 timer (T2 ~ 150 ms) expires, what protective action is taken by the 50BF relay?',
        hi: 'यदि स्टेज 2 टाइमर (150 ms) समाप्त होने के बाद भी सर्किट ब्रेकर जाम रहता है, तो 50BF रिले द्वारा क्या कार्रवाई की जाती है?',
        bn: 'যদি স্টেজ ২ টাইমারের (১৫০ ms) পরেও সার্কিট ব্রেকার জ্যাম হয়ে অনড় থাকে, তবে 50BF রিলে কী পদক্ষেপ গ্রহণ করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'It trips ALL circuit breakers connected to the same busbar section and sends a Direct Transfer Trip (DTT) signal to remote line terminals', hi: 'यह उसी बसबार से जुड़े सभी सर्किट ब्रेकर्स को ट्रिप करता है और रिमोट लाइन टर्मिनलों को डायरेक्ट ट्रांसफर ट्रिप भेजता है', bn: 'এটি ওই বাসবার সেকশনের সাথে সংযুক্ত সমস্ত সার্কিট ব্রেকার তাৎক্ষণিক ট্রিপ করায় এবং দূরবর্তী প্রান্তে ডাইরেক্ট ট্রান্সফার ট্রিপ (DTT) সংকেত পাঠায়' } },
        { id: 'opt-2', text: { en: 'It permanently resets the relay without further action', hi: 'यह बिना किसी कार्रवाई के रिले को रीसेट करता है', bn: 'কোনো ব্যবস্থা না নিয়ে রিলে রিসেট করে দেয়' } },
        { id: 'opt-3', text: { en: 'It raises the busbar voltage to clear the jam by burning it away', hi: 'यह जाम को जलाने के लिए बसबार वोल्टेज बढ़ाता है', bn: 'জ্যাম পুড়িয়ে ফেলতে বাসবার ভোল্টেজ বাড়ায়' } },
        { id: 'opt-4', text: { en: 'It disconnects the DC batteries from the substation', hi: 'यह सबस्टेशन से डीसी बैटरी को डिस्कनेक्ट करता है', bn: 'সাবস্টেশনের ব্যাটারি সংযোগ বিচ্ছিন্ন করে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Because the local breaker cannot extinguish the fault current, the fault has effectively become a busbar fault. Stage 2 trips every adjacent breaker on that bus and commands remote-end line breakers via carrier/fiber to open, quenching all fault current infeeds.',
        hi: 'चूंकि ब्रेकर विफल हो गया है, 50BF उस बस से जुड़े अन्य सभी ब्रेकर्स को ट्रिप करता है और लाइन के दूसरे छोर पर भी ट्रिप सिग्नल भेजता है ताकि फॉल्ट करंट पूरी तरह बंद हो जाए।',
        bn: 'যেহেতু ব্রেকারটি ফল্ট কাটতে পারেনি, তাই ফল্টটি এখন বাসবার ফল্টের রূপ নিয়েছে। স্টেজ ২ ওই বাসবারের সব ব্রেকার খুলে দেয় এবং লাইনের অপর প্রান্তে অপটিক্যাল ফাইবারে সিগন্যাল পাঠিয়ে বিদ্যুৎ বিচ্ছিন্ন করে।'
      }
    },
    {
      id: 'mcq-ch17-l09-05',
      question: {
        en: 'What is the decisive operational advantage of a "One-and-a-Half Breaker" (1.5 CB) switchyard scheme used in 400 kV and 765 kV substations?',
        hi: '400 kV और 765 kV सबस्टेशनों में उपयोग की जाने वाली "डेढ़ ब्रेकर" (1.5 CB) योजना का निर्णायक परिचालन लाभ क्या है?',
        bn: '৪০০ kV ও ৭৬৫ kV সাবস্টেশনে ব্যবহৃত "ওয়ান-অ্যান্ড-এ-হাফ ব্রেকার" (১.৫ CB) ব্যবস্থার সবচেয়ে বড় প্রযুক্তিগত সুবিধা কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Any single circuit breaker can be isolated and removed for maintenance without taking any transmission line or busbar out of service', hi: 'किसी भी एक सर्किट ब्रेकर को किसी भी पारेषण लाइन या बसबार को बंद किए बिना रखरखाव के लिए अलग किया जा सकता है', bn: 'যেকোনো একটি সার্কিট ব্রেকারকে কোনো লাইন বা বাসবার বন্ধ না করেই রক্ষণাবেক্ষণের জন্য নিরাপদে আলাদা করা যায়' } },
        { id: 'opt-2', text: { en: 'It reduces the number of circuit breakers to half of a single busbar', hi: 'यह ब्रेकर्स की संख्या को सिंगल बस की तुलना में आधा कर देता है', bn: 'এটি ব্রেকারের সংখ্যা অর্ধেকে নামিয়ে আনে' } },
        { id: 'opt-3', text: { en: 'It allows lightning strikes to bypass the substation completely', hi: 'यह बिजली को सबस्टेशन से पूरी तरह बायपास करने की अनुमति देता है', bn: 'বজ্রপাতকে সাবস্টেশন বাইপাস করায়' } },
        { id: 'opt-4', text: { en: 'It eliminates the need for any current transformers', hi: 'यह करंट ट्रांसफार्मर की आवश्यकता को समाप्त करता है', bn: 'কোনো সিটির প্রয়োজন হয় না' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'In a 1.5 CB scheme, three breakers control two circuits between two buses. If any breaker is taken out for overhaul, both circuits remain energized via the remaining breakers, ensuring supreme reliability.',
        hi: '1.5 CB में दो सर्किटों के बीच तीन ब्रेकर होते हैं। किसी भी एक ब्रेकर को मेंटेनेंस में लेने पर भी दोनों लाइनें बिना किसी रुकावट के चालू रहती हैं।',
        bn: '১.৫ ব্রেকার স্কিমে দুটি লাইনের মাঝে ৩টি ব্রেকার থাকে। যেকোনো একটি ব্রেকার মেইনটেন্যান্সে নিলেও কোনো লাইনে বিদ্যুৎ বিভ্রাট ঘটে না।'
      }
    },
    {
      id: 'mcq-ch17-l09-06',
      question: {
        en: 'How does modern decentralized numerical busbar protection track which feeder current belongs to which busbar zone in a double-busbar station?',
        hi: 'आधुनिक विकेंद्रीकृत संख्यात्मक बसबार सुरक्षा डबल-बसबार स्टेशन में यह कैसे ट्रैक करती है कि कौन सा फीडर किस बस से जुड़ा है?',
        bn: 'আধুনিক ডিসেন্ট্রালাইজড নিউমেরিক্যাল বাসবার সুরক্ষা কীভাবে ট্র্যাক করে যে কোন ফিডারটি কোন বাসবারের সাথে যুক্ত আছে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'By continuously reading the dual auxiliary contacts of the bus isolators (disconnector replica logic)', hi: 'बस आइसोलेटरों के दोहरे सहायक संपर्कों (डिस्कनेक्टर रेप्लिका लॉजिक) को लगातार पढ़कर', bn: 'বাস আইসোলেটরের সহায়ক অক্সিলিয়ারি কন্টাক্টের অবস্থান (ডিসকানেক্টর রেপ্লিকা লজিক) সার্বক্ষণিকভাবে পড়ে' } },
        { id: 'opt-2', text: { en: 'By measuring the color of the paint on the busbar support insulators', hi: 'इंसुलेटर पर पेंट के रंग को मापकर', bn: 'ইনসুলেটরের রঙের মাত্রা দেখে' } },
        { id: 'opt-3', text: { en: 'By listening to the hum of the transformer at 100 Hz', hi: 'ट्रांसफार्मर की 100 Hz गुनगुनाहट सुनकर', bn: 'ট্রান্সফরমারের গুঞ্জন শুনে' } },
        { id: 'opt-4', text: { en: 'By estimating wind direction over the switchyard', hi: 'स्विचयार्ड पर हवा की दिशा का अनुमान लगाकर', bn: 'বাতাসের দিক মেপে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Each bus selector isolator is equipped with mechanically driven normally open (NO) and normally closed (NC) auxiliary contacts. The numerical relay uses this "disconnector replica" to dynamically route each feeder CT current into either Bus 1 or Bus 2 differential summing matrices.',
        hi: 'आइसोलेटर के सहायक संपर्क (Auxiliary contacts) रिले को बताते हैं कि फीडर किस बस से जुड़ा है। रिले उसी अनुसार करंट को बस 1 या बस 2 के समीकरण में जोड़ता है।',
        bn: 'আইসোলেটরের সহায়ক অক্সিলিয়ারি সুইচের সংকেত রিলেকে তাৎক্ষণিক জানায় ফিডারটি কোন বাসের সাথে যুক্ত। রিলে সে অনুযায়ী অভ্যন্তরীণ সফটওয়্যারে কারেন্টকে সংশ্লিষ্ট বাস জোনে যুক্ত করে।'
      }
    },
    {
      id: 'mcq-ch17-l09-07',
      question: {
        en: 'Why is the current detector reset time (t_reset) critical in calculating the 50BF timer setting?',
        hi: '50BF टाइमर सेटिंग की गणना में करंट डिटेक्टर रीसेट समय (t_reset) क्यों महत्वपूर्ण है?',
        bn: '50BF টাইমার সেটিং গণনায় কারেন্ট ডিটেক্টরের রিসেট সময় (t_reset) অত্যন্ত গুরুত্বপূর্ণ কেন?'
      },
      options: [
        { id: 'opt-1', text: { en: 'If the timer expires before the current detector resets after breaker arc extinction, a false busbar trip will be triggered', hi: 'यदि ब्रेकर द्वारा आर्क बुझाने के बाद करंट डिटेक्टर के रीसेट होने से पहले टाइमर समाप्त हो जाता है, तो पूरी बस गलती से ट्रिप हो जाएगी', bn: 'ব্রেকারে আর্ক নিভে যাওয়ার পর কারেন্ট ডিটেক্টর রিসেট হওয়ার আগেই টাইমার শেষ হয়ে গেলে সুস্থ বাসবার ভুলবশত ট্রিপ করে যাবে' } },
        { id: 'opt-2', text: { en: 'It determines the battery recharge duration', hi: 'यह बैटरी रिचार्ज की अवधि निर्धारित करता है', bn: 'এটি ব্যাটারি রিচার্জের সময় নির্ধারণ করে' } },
        { id: 'opt-3', text: { en: 'It controls the opening speed of the disconnectors', hi: 'यह आइसोलेटर के खुलने की गति को नियंत्रित करता है', bn: 'আইসোলেটর খোলার গতি নিয়ন্ত্রণ করে' } },
        { id: 'opt-4', text: { en: 'It limits the maximum current of the lightning arrester', hi: 'यह सर्ज अरेस्टर के करंट को सीमित करता है', bn: 'লাইটনিং অ্যারেস্টারের কারেন্ট সীমিত করে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Even after breaker contacts physically separate and extinguish the electric arc, the numerical current detector takes 15–20 ms to mathematically recognize that current has reached zero. If the 50BF timer is set without accounting for this reset delay, it will declare a false breaker failure.',
        hi: 'आर्क बुझने के बाद भी रिले को करंट शून्य पहचानने में 15-20 ms लगते हैं। यदि टाइमर बहुत छोटा होगा, तो सफल ऑपरेशन के बावजूद रिले पूरी बस को ट्रिप कर देगा।',
        bn: 'ব্রেকার আর্ক নিভিয়ে ফেলার পরেও রিলের সফটওয়্যার কারেন্ট শূন্য হতে ১৫-২০ ms সময় নেয়। টাইমার এই রিসেট সময়ের চেয়ে বড় না হলে সফল অপারেশনের পরেও পুরো বাসবার ভুল ট্রিপ করবে।'
      }
    },
    {
      id: 'mcq-ch17-l09-08',
      question: {
        en: 'For a 50BF scheme on a breaker with t_cb = 50 ms, t_reset = 20 ms, and an intentional safety margin of t_margin = 50 ms, what is the required Stage 2 operating time delay?',
        hi: 't_cb = 50 ms, t_reset = 20 ms, और t_margin = 50 ms वाले ब्रेकर के लिए आवश्यक 50BF स्टेज 2 समय देरी क्या है?',
        bn: 't_cb = ৫০ ms, t_reset = ২০ ms এবং t_margin = ৫০ ms বিশিষ্ট একটি ব্রেকারের জন্য প্রয়োজনীয় স্টেজ ২ ব্রেকার ফেইলিওর সময় বিলম্ব কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '120 ms', hi: '120 ms', bn: '১২০ ms' } },
        { id: 'opt-2', text: { en: '70 ms', hi: '70 ms', bn: '৭০ ms' } },
        { id: 'opt-3', text: { en: '200 ms', hi: '200 ms', bn: '২০০ ms' } },
        { id: 'opt-4', text: { en: '500 ms', hi: '500 ms', bn: '৫০০ ms' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'T_50BF = t_cb + t_reset + t_margin = 50 ms + 20 ms + 50 ms = 120 ms.',
        hi: 'T_50BF = 50 + 20 + 50 = 120 ms।',
        bn: 'T_50BF = ৫০ + ২০ + ৫০ = ১২০ ms।'
      }
    }
  ]
};
