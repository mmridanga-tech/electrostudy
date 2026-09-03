# -*- coding: utf-8 -*-
import os

lesson1_code = '''import { Lesson } from '../types';

export const LESSON_ELECTRIC_SHOCK: Lesson = {
  id: 'lsn-ch15-electric-shock',
  topicId: 'tp-electric-shock',
  chapterId: 'ch-electrical-safety',
  order: 1,
  title: {
    en: 'Electric Shock',
    hi: 'इलेक्ट्रिक शौक (विद्युत झटका)',
    bn: 'ইলেকট্রিক শক'
  },
  description: {
    en: 'Comprehensive study of electric shock: physiological effects of electric current on the human body, human body impedance under dry and wet conditions, perception and let-go thresholds, ventricular fibrillation, touch and step voltages, and statutory safe voltage limits.',
    hi: 'विद्युत झटके का व्यापक अध्ययन: मानव शरीर पर विद्युत धारा के शारीरिक प्रभाव, शुष्क एवं आर्द्र स्थितियों में शारीरिक प्रतिबाधा, संवेदन एवं विमुक्ति सीमा, निलय तंतुविकसन (वेंट्रिकुलर फिब्रिलेशन), स्पर्श एवं चरण वोल्टेज तथा वैधानिक सुरक्षित वोल्टेज सीमाएँ।',
    bn: 'ইলেকট্রিক শকের বিশদ অধ্যয়ন: মানবদেহে তড়িৎপ্রবাহের শারীরিক প্রভাব, শুষ্ক ও ভেজা অবস্থায় দেহের প্রতিবাধা, অনুভূতি ও লেট-গো সীমা, ভেন্ট্রিকুলার ফিব্রিলেশন, স্পর্শ ও পদক্ষেপ ভোল্টেজ এবং বিধিবদ্ধ নিরাপদ ভোল্টেজ সীমা।'
  },
  estimatedMinutes: 35,
  easyExplanation: {
    en: 'An electric shock happens when electric current flows through the human body. Contrary to popular belief, it is the electric current (milliamperes), not just the voltage alone, that causes muscle spasms, burns, and cardiac arrest. Our dry skin acts as a protective resistor of about 10,000 to 100,000 ohms. However, when skin is wet, sweaty, or broken, its resistance plunges down to around 1,000 ohms. At just 1 mA, you feel a faint tingle; at 10 to 20 mA, your muscles contract so violently that you cannot let go of the wire; and at 50 to 100 mA, the heart enters chaotic uncoordinated fluttering (ventricular fibrillation), which is fatal within minutes without immediate CPR or defibrillation.',
    hi: 'विद्युत झटका तब लगता है जब मानव शरीर से होकर विद्युत धारा प्रवाहित होती है। सामान्य धारणा के विपरीत, केवल वोल्टेज ही नहीं बल्कि विद्युत धारा (मिलीएम्पियर) मांसपेशियों में ऐंठन, जलन और हृदय गति रुकने का मुख्य कारण बनती है। हमारी सूखी त्वचा लगभग 10,000 से 100,000 ओम के सुरक्षात्मक प्रतिरोधक की तरह कार्य करती है। लेकिन गीली या पसीने से भीगी त्वचा में यह प्रतिरोध घटकर मात्र 1,000 ओम रह जाता है। मात्र 1 mA पर हल्की झनझनाहट महसूस होती है; 10 से 20 mA पर मांसपेशियां इतनी कसकर जकड़ जाती हैं कि व्यक्ति तार छोड़ नहीं पाता; और 50 से 100 mA पर हृदय अनियंत्रित होकर फड़फड़ाने लगता है (वेंट्रिकुलर फिब्रिलेशन), जो तुरंत सीपीआर या डिफिब्रिलेटर न मिलने पर घातक होता है।',
    bn: 'মানবদেহের মধ্য দিয়ে যখন তড়িৎপ্রবাহ প্রবাহিত হয় তখনই ইলেকট্রিক শক ঘটে। প্রচলিত ধারণার বিপরীতে, শুধুমাত্র ভোল্টেজ নয় বরং তড়িৎপ্রবাহের মান (মিলিঅ্যাম্পিয়ার) পেশির খিঁচুনি, দগ্ধতা ও হৃদস্পন্দন বন্ধ হওয়ার কারণ। আমাদের শুষ্ক ত্বক ১০,০০০ থেকে ১০০,০০০ ওহমের একটি প্রতিরক্ষামূলক রোধ হিসেবে কাজ করে। তবে ত্বক ভেজা বা ঘর্মাক্ত থাকলে রোধ কমে মাত্র ১,০০০ ওহমে নেমে আসে। মাত্র ১ mA প্রবাহে মৃদু ঝিনঝিন অনুভূতি হয়; ১০ থেকে ২০ mA প্রবাহে পেশির তীব্র সংকোচনের ফলে হাত দিয়ে ধরা তার ছেড়ে দেওয়া অসম্ভব হয়ে পড়ে (ক্যানট লেট-গো); এবং ৫০ থেকে ১০০ mA প্রবাহে হৃদযন্ত্রে ভেন্ট্রিকুলার ফিব্রিলেশন ঘটে, যা তাৎক্ষণিক সিপিআর বা ডিফিব্রিলেটর ছাড়া কয়েক মিনিটের মধ্যেই প্রাণঘাতী হয়।'
  },
  detailedExplanation: {
    en: 'The human body is an electrolytic volume conductor enclosed in a high-resistance semi-insulating envelope (the epidermis/stratum corneum). When a person simultaneously touches two conductive points at differing electric potentials, a closed circuit is formed and electric current flows through internal tissues, nerves, blood vessels, and vital organs.\\n\\nKey determinants of shock severity according to IEC 60479-1:\\n1. Current Magnitude (I): Current through the body is governed by Ohm’s Law: I_b = V_touch / Z_b. While voltage provides the driving force, it is the current density passing through the myocardium (heart muscle) and central nervous system that causes physiological damage.\\n2. Duration of Contact (t): The longer current flows, the greater the thermal energy dissipation (Joule heating Q = I² R t) and the higher the probability that current coincides with the vulnerable T-phase of the cardiac cycle (relative refractory period lasting ~150-200 ms), triggering ventricular fibrillation.\\n3. Current Pathway: Hand-to-hand and left-hand-to-feet pathways are the most hazardous because the thoracic cavity and heart lie directly in the primary path of current flow.\\n4. Frequency and Waveform: 50 Hz and 60 Hz alternating currents are roughly 3 to 5 times more dangerous in inducing ventricular fibrillation than direct current (DC) of the same magnitude, because power frequencies match the natural neuromuscular depolarization trigger rates.\\n5. Body Impedance (Z_b): Consists of skin resistance, skin capacitance, and internal bodily tissue resistance. Internal body resistance is fairly constant around 500 to 800 Ω, while skin resistance varies from 100,000 Ω (dry, thick, calloused) to 1,000 Ω (wet, punctured, or under voltages exceeding breakdown threshold ~100 V).\\n\\nPhysiological Zones (IEC 60479-1):\\n• Zone AC-1 (< 0.5 mA): Imperceptible, no reaction.\\n• Zone AC-2 (0.5 mA to ~10 mA): Perception threshold, involuntary reflex withdrawal, no physiological harm.\\n• Zone AC-3 (10 mA to ~50 mA): Tetanic muscle contractions, inability to release grip ("let-go threshold"), difficulty breathing, reversible cardiac disturbances.\\n• Zone AC-4 (> 50 mA): Ventricular fibrillation threshold, irreversible cellular electrocution, severe internal burns, and asphyxia.',
    hi: 'मानव शरीर एक इलेक्ट्रोलाइटिक संवाहक है जो उच्च-प्रतिरोधक एपिडर्मिस त्वचा से ढका होता है। जब कोई व्यक्ति विभिन्न विद्युत विभव वाले दो बिंदुओं को छूता है, तो एक बंद परिपथ बनता है और धारा आंतरिक नसों, रक्त वाहिकाओं और महत्वपूर्ण अंगों से बहती है।\\n\\nआईईसी 60479-1 के अनुसार झटके की गंभीरता के प्रमुख कारक:\\n1. धारा का परिमाण (I): शरीर में धारा ओम के नियम I = V / Z_b द्वारा निर्धारित होती है। वोल्टेज बल प्रदान करता है, लेकिन मायोकार्डियम (हृदय) से गुजरने वाली धारा क्षति का कारण बनती है।\\n2. संपर्क की अवधि (t): धारा जितने लंबे समय तक बहती है, ऊष्मीय ऊर्जा (Q = I² R t) उतनी ही अधिक उत्पन्न होती है और कार्डियक चक्र के संवेदनशील टी-फेज के दौरान वेंट्रिकुलर फिब्रिलेशन की संभावना बढ़ जाती है।\\n3. धारा का मार्ग: हाथ से हाथ और बाएं हाथ से पैर का मार्ग सबसे खतरनाक है क्योंकि हृदय सीधे धारा मार्ग में आता है।\\n4. आवृत्ति एवं तरंग रूप: 50 Hz / 60 Hz प्रत्यावर्ती धारा (AC) समान मान वाली दिष्ट धारा (DC) की तुलना में 3 से 5 गुना अधिक खतरनाक होती है क्योंकि यह न्यूरोमस्कुलर विध्रुवण दरों के साथ प्रतिध्वनित होती है।\\n5. शारीरिक प्रतिबाधा (Z_b): आंतरिक शारीरिक प्रतिरोध लगभग 500-800 ओम स्थिर रहता है, जबकि त्वचा का प्रतिरोध 100,000 ओम (सूखी) से घटकर 1,000 ओम (गीली या उच्च वोल्टेज टूटने पर) हो जाता है।\\n\\nशारीरिक क्षेत्र (IEC 60479-1):\\n• जोन AC-1 (< 0.5 mA): महसूस नहीं होता।\\n• जोन AC-2 (0.5 mA - 10 mA): संवेदना की सीमा, अनैच्छिक हाथ खिंचाव।\\n• जोन AC-3 (10 mA - 50 mA): मांसपेशियों का तीव्र संकुचन, तार न छोड़ पाना (कैनट लेट-गो), सांस लेने में कठिनाई।\\n• जोन AC-4 (> 50 mA): वेंट्रिकुलर फिब्रिलेशन, गंभीर आंतरिक जलन और घातक स्थिति।',
    bn: 'মানবদেহ মূলত একটি ইলেক্ট্রোলাইটিক পরিবাহী যা বহিরাংশে উচ্চ-রোধযুক্ত ত্বক (এপিডার্মিস) দ্বারা আবৃত। যখন কোনো ব্যক্তি দুটি ভিন্ন বিভবের পরিবাহী অংশ স্পর্শ করে, তখন একটি বদ্ধ বর্তনী গঠিত হয় এবং তড়িৎপ্রবাহ অভ্যন্তরীণ কলা, স্নায়ু, রক্তনালী ও গুরুত্বপূর্ণ অঙ্গের মধ্য দিয়ে প্রবাহিত হয়।\\n\\nআইইসি ৬০৪৭৯-১ অনুসারে শকের তীব্রতা নির্ধারণকারী মূল বিষয়সমূহ:\\n১. তড়িৎপ্রবাহের মান (I): দেহের মধ্য দিয়ে প্রবাহ ওহমের সূত্র I_b = V_touch / Z_b দ্বারা নির্ধারিত হয়। ভোল্টেজ চালিকাশক্তি দিলেও হৃদপিণ্ডের মধ্য দিয়ে প্রবাহিত কারেন্ট ডেনসিটিই আসল ক্ষতি করে।\\n২. সংযোগকাল (t): প্রবাহ যত দীর্ঘ সময় স্থায়ী হয়, তাপীয় শক্তি ক্ষয় (জুল হিটিং Q = I² R t) তত বৃদ্ধি পায় এবং হৃদযন্ত্রের টি-ফেজের সাথে মিলে ভেন্ট্রিকুলার ফিব্রিলেশন ঘটার সম্ভাবনা প্রবল হয়।\\n৩. প্রবাহের পথ: হাত থেকে হাত এবং বাম হাত থেকে পায়ের পথ সবচেয়ে বিপজ্জনক কারণ এতে হৃদপিণ্ড সরাসরি তড়িৎপ্রবাহের গতিপথে পড়ে।\\n৪. কম্পাঙ্ক ও তরঙ্গরূপ: ৫০ হার্জ ও ৬০ হার্জ এসি কারেন্ট সমমানের ডিসি কারেন্টের তুলনায় ৩ থেকে ৫ গুণ বেশি বিপজ্জনক, কারণ এই কম্পাঙ্ক মানব স্নায়ু-পেশির প্রাকৃতিক সংবেদনশীলতার সীমার মধ্যে পড়ে।\\n৫. শারীরিক প্রতিবাধা (Z_b): দেহের অভ্যন্তরীণ রোধ ৫০০-৮০০ ওহমের মধ্যে স্থিতিশীল থাকে, কিন্তু ত্বকের রোধ শুষ্ক অবস্থায় ১০০,০০০ ওহম থেকে ভেজা বা উচ্চ ভোল্টেজ পরিস্থিতিতে ১,০০০ ওহমে নেমে আসে।\\n\\nশারীরবৃত্তীয় অঞ্চল (IEC 60479-1):\\n• অঞ্চল AC-1 (< ০.৫ mA): অনুভূত হয় না।\\n• অঞ্চল AC-2 (০.৫ mA - ১০ mA): সংবেদনশীলতা সীমা, অনিচ্ছাকৃত হাত প্রত্যাহার।\\n• অঞ্চল AC-3 (১০ mA - ৫০ mA): পেশির আড়ষ্টতা, তার আঁকড়ে থাকা ("ক্যানট লেট-গো"), শ্বাসকষ্ট।\\n• অঞ্চল AC-4 (> ৫০ mA): ভেন্ট্রিকুলার ফিব্রিলেশন, মারাত্মক টিস্যু দগ্ধতা এবং মৃত্যুঝুঁকি।'
  },
  formulas: [
    {
      id: 'f-touch-current-ohms-law',
      symbol: 'I_b',
      expression: 'I_b = V_t / Z_b',
      title: {
        en: "Human Body Touch Current",
        hi: 'मानव शरीर स्पर्श धारा',
        bn: 'মানবদেহে স্পর্শ তড়িৎপ্রবাহ'
      },
      description: {
        en: 'Calculates the current flowing through a human body when subjected to a touch voltage across contact points.',
        hi: 'स्पर्श बिंदुओं पर वोल्टेज लगने पर मानव शरीर से प्रवाहित होने वाली धारा की गणना करता है।',
        bn: 'সংযোগ বিন্দুতে স্পর্শ ভোল্টেজ প্রযুক্ত হলে মানবদেহে প্রবাহিত তড়িৎপ্রবাহের মান গণনা করে।'
      },
      variables: [
        { symbol: 'I_b', name: { en: 'Body current (A or mA)', hi: 'शारीरिक धारा (A या mA)', bn: 'দেহের তড়িৎপ্রবাহ (A বা mA)' } },
        { symbol: 'V_t', name: { en: 'Touch voltage (V)', hi: 'स्पर्श वोल्टेज (V)', bn: 'স্পর্শ ভোল্টেজ (V)' } },
        { symbol: 'Z_b', name: { en: 'Total body impedance (Ω)', hi: 'कुल शारीरिक प्रतिबाधा (Ω)', bn: 'দেহের মোট প্রতিবাধা (Ω)' } }
      ]
    },
    {
      id: 'f-joule-thermal-injury',
      symbol: 'Q_heat',
      expression: 'Q = I_b^2 \\cdot R_b \\cdot t',
      title: {
        en: "Joule Thermal Energy Dissipation in Tissues",
        hi: 'ऊतकों में जूल तापीय ऊर्जा क्षय',
        bn: 'কোষকলায় জুল তাপীয় শক্তি ক্ষয়'
      },
      description: {
        en: 'Determines the thermal burn energy generated in body tissues during an electric shock duration.',
        hi: 'विद्युत झटके की अवधि में शारीरिक ऊतकों में उत्पन्न ऊष्मीय दहन ऊर्जा का निर्धारण करता है।',
        bn: 'ইলেকট্রিক শকের সময়কালে দেহের কোষকলায় সৃষ্ট তাপীয় দহন শক্তি নির্ধারণ করে।'
      },
      variables: [
        { symbol: 'Q', name: { en: 'Thermal energy generated (Joules, J)', hi: 'उत्पन्न तापीय ऊर्जा (जूल, J)', bn: 'সৃষ্ট তাপীয় শক্তি (জুল, J)' } },
        { symbol: 'I_b', name: { en: 'Body current (A)', hi: 'शारीरिक धारा (A)', bn: 'দেহের কারেন্ট (A)' } },
        { symbol: 'R_b', name: { en: 'Internal tissue resistance (Ω)', hi: 'आंतरिक ऊतक प्रतिरोध (Ω)', bn: 'অভ্যন্তরীণ টিস্যু রোধ (Ω)' } },
        { symbol: 't', name: { en: 'Contact duration (seconds, s)', hi: 'संपर्क समय (सेकंड, s)', bn: 'সংযোগ সময় (সেকেন্ড, s)' } }
      ]
    },
    {
      id: 'f-safe-touch-voltage-limit',
      symbol: 'U_L',
      expression: 'U_L \\le 50\\text{ V (dry)}, \\quad U_L \\le 25\\text{ V (wet)}',
      title: {
        en: 'Statutory Conventional Touch Voltage Limits (IEC 60364)',
        hi: 'वैधानिक पारंपरिक स्पर्श वोल्टेज सीमाएँ (IEC 60364)',
        bn: 'বিধিবদ্ধ স্পর্শ ভোল্টেজ সীমা (IEC 60364)'
      },
      description: {
        en: 'Maximum permissible touch voltage that can appear indefinitely on exposed conductive parts without causing harmful physiological effects.',
        hi: 'खुले संवाहक भागों पर बिना किसी शारीरिक क्षति के स्थायी रूप से अनुमत अधिकतम स्पर्श वोल्टेज।',
        bn: 'উন্মুক্ত পরিবাহী অংশে কোনো প্রকার শারীরিক ক্ষতি ছাড়া অবিচ্ছিন্নভাবে অনুমোদিত সর্বোচ্চ স্পর্শ ভোল্টেজ।'
      },
      variables: [
        { symbol: 'U_L', name: { en: 'Conventional touch voltage limit (V)', hi: 'पारंपरिक स्पर्श वोल्टेज सीमा (V)', bn: 'প্রচলিত স্পর্শ ভোল্টেজ সীমা (V)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch15-l01-shock-mechanisms',
      title: {
        en: 'Physiological Effects and Current Thresholds',
        hi: 'शारीरिक प्रभाव एवं धारा सीमाएँ',
        bn: 'শারীরবৃত্তীয় প্রভাব ও তড়িৎপ্রবাহের সীমা'
      },
      content: {
        en: 'Electric shock affects the human organism primarily through three distinct mechanisms: neuromuscular stimulation, tissue burns, and disruption of cardiac rhythm.\\n\\n1. Threshold of Perception (0.5 to 1.5 mA at 50 Hz): The human nervous system detects an initial tingling sensation at contact points. No involuntary muscular contractions occur.\\n\\n2. Let-Go Threshold (10 to 20 mA for adults): Current excites motor nerve axons, producing continuous involuntary tetanus of the flexor forearm muscles. Because the flexor muscles (which close the fingers) are biomechanically stronger than the extensor muscles (which open the hand), the victim involuntarily grips the energized conductor tightly and is unable to let go.\\n\\n3. Respiratory Paralysis (20 to 50 mA): Strong contractions of the intercostal chest muscles and the diaphragm halt the breathing process. If the current is not interrupted within 3 to 4 minutes, suffocation (asphyxia) and irreversible hypoxic brain injury ensue.\\n\\n4. Ventricular Fibrillation (50 to 100 mA): At this threshold, coordinated synchronous contractions of the heart ventricles cease. The cardiac muscle fibers twitch chaotically at 400 to 600 pulses/min, pumping zero blood into the arterial system. Blood pressure drops to zero within seconds. Ventricular fibrillation is fatal within minutes unless an automated external defibrillator (AED) or immediate external chest compressions (CPR) are administered.\\n\\n5. Severe Electrothermal Burns (> 1 A): At currents exceeding 1 A, Joule heating (I²Rt) rapidly cooks tissues, coagulates blood in peripheral blood vessels, and causes deep third-degree thermal injuries and myoglobinuria (kidney failure due to muscle protein breakdown).',
        hi: 'विद्युत झटका मानव शरीर को तीन प्राथमिक तंत्रों द्वारा प्रभावित करता है: न्यूरोमस्कुलर उत्तेजना, ऊतकों का जलना और हृदय गति में व्यवधान।\\n\\n1. संवेदन सीमा (0.5 से 1.5 mA, 50 Hz पर): हल्की झनझनाहट महसूस होती है, कोई अनैच्छिक संकुचन नहीं होता।\\n2. लेट-गो थ्रेशोल्ड (10 से 20 mA): मांसपेशियां इतनी जकड़ जाती हैं कि हाथ की मुट्ठी अपने आप बंद हो जाती है और व्यक्ति तार को छोड़ नहीं पाता।\\n3. श्वसन पक्षाघात (20 से 50 mA): सीने की मांसपेशियों के अत्यधिक खिंचाव से सांस रुक जाती है, जिससे दम घुटने लगता है।\\n4. वेंट्रिकुलर फिब्रिलेशन (50 से 100 mA): हृदय की नियमित धड़कन रुककर अनियंत्रित कंपन में बदल जाती है। रक्त प्रवाह शून्य हो जाता है और कुछ ही मिनटों में मृत्यु हो सकती है यदि तुरंत सीपीआर या डिफिब्रिलेटर न दिया जाए।\\n5. गंभीर विद्युत जलन (> 1 A): उच्च धारा अत्यधिक ऊष्मा (I²Rt) पैदा करती है जिससे रक्त वाहिकाएं जम जाती हैं और गहरे आंतरिक घाव हो जाते हैं।',
        bn: 'ইলেকট্রিক শক প্রধানত তিনটি প্রক্রিয়ায় মানবদেহে ক্ষতিসাধন করে: স্নায়ু-পেশির উদ্দীপনা, টিস্যু দগ্ধতা এবং হৃদস্পন্দনের ছন্দপতন।\\n\\n১. সংবেদনশীলতা সীমা (০.৫ থেকে ১.৫ mA): সংযোগ বিন্দুতে ঝিনঝিন অনুভূতি হয় কিন্তু পেশির কোনো তীব্র খিঁচুনি হয় না।\\n২. লেট-গো সীমা (১০ থেকে ২০ mA): আঙুল বাঁকানোর পেশিগুলি তীব্রভাবে সংকুচিত হয়ে যাওয়ায় আক্রান্ত ব্যক্তি তারটিকে শক্তভাবে আঁকড়ে ধরে এবং ছেড়ে দিতে পারে না।\\n৩. শ্বাসরোধ (২০ থেকে ৫০ mA): বক্ষপেশি অবশ হয়ে শ্বাসপ্রশ্বাস বন্ধ হয়ে যায়, ফলে অক্সিজেন স্বল্পতায় মস্তিষ্কের ক্ষতি হয়।\\n৪. ভেন্ট্রিকুলার ফিব্রিলেশন (৫০ থেকে ১০০ mA): হৃদযন্ত্রের পাম্পিং বন্ধ হয়ে রক্তচাপ শূন্যে নেমে আসে। কয়েক মিনিটের মধ্যে ডিফিব্রিলেশন বা সিপিআর না দিলে মৃত্যু অনিবার্য।\\n৫. মারাত্মক তাপীয় দগ্ধতা (> ১ A): অভ্যন্তরীণ টিস্যু ও রক্তনালী পুড়ে মারাত্মক ক্ষত ও কিডনি বিকল হতে পারে।'
      },
      schematicId: 'circuit-ch15-electric-shock-path'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch15-l01-01',
      problem: {
        en: 'A worker with wet, sweaty hands touches a live 230 V (50 Hz AC) conductor while standing barefoot on a damp concrete floor. The worker’s total body resistance (hand skin, internal tissues, and foot contact) drops to 1,150 Ω. Calculate:\\n(a) The current flowing through the worker’s body.\\n(b) The physiological danger zone according to IEC 60479-1.\\n(c) The thermal energy dissipated in the body if contact persists for 1.2 seconds.',
        hi: 'एक कार्यकर्ता जिसके हाथ गीले और पसीने से भीगे हैं, नम कंक्रीट के फर्श पर नंगे पैर खड़े होकर 230 V (50 Hz AC) के लाइव तार को छू लेता है। कार्यकर्ता का कुल शारीरिक प्रतिरोध घटकर 1,150 Ω हो जाता है। गणना कीजिए:\\n(a) शरीर से प्रवाहित होने वाली धारा।\\n(b) IEC 60479-1 के अनुसार शारीरिक खतरा क्षेत्र।\\n(c) यदि संपर्क 1.2 सेकंड तक बना रहे तो शरीर में उत्पन्न तापीय ऊर्जा।',
        bn: 'ভেজা ও ঘর্মাক্ত হাতে একজন কর্মী স্যাঁতসেঁতে কংক্রিটের মেঝেতে খালি পায়ে দাঁড়িয়ে ২৩০ V (৫০ Hz AC) একটি লাইভ পরিবাহী স্পর্শ করলেন। কর্মীর মোট শারীরিক রোধ কমে ১,১৫০ Ω হলো। নির্ণয় করুন:\\n(a) কর্মীর দেহের মধ্য দিয়ে প্রবাহিত কারেন্ট।\\n(b) IEC 60479-1 অনুসারে শারীরবৃত্তীয় বিপদ অঞ্চল।\\n(c) সংযোগ ১.২ সেকেন্ড স্থায়ী হলে দেহে উৎপন্ন তাপীয় শক্তি।'
      },
      solution: {
        en: 'Given:\\n• Touch Voltage (V_t) = 230 V AC\\n• Total Body Impedance (Z_b) = 1,150 Ω\\n• Contact duration (t) = 1.2 s\\n\\nStep 1: Calculate Body Current (I_b)\\nFormula: I_b = V_t / Z_b\\nSubstitution: I_b = 230 / 1150 = 0.200 A = 200 mA\\n\\nStep 2: Determine Physiological Hazard Zone\\nAt I_b = 200 mA with duration t = 1.2 s:\\n• Threshold for ventricular fibrillation is ~50 mA for durations over 0.5 s.\\n• 200 mA is 4 times the ventricular fibrillation threshold and lies deeply within Zone AC-4.2 of IEC 60479-1.\\n• Physiological interpretation: Severe respiratory tetanus, rapid ventricular fibrillation, high probability of instantaneous death without immediate automated external defibrillation (AED).\\n\\nStep 3: Calculate Joule Thermal Energy (Q)\\nFormula: Q = I_b² · R_b · t\\nSubstitution: Q = (0.200)² · 1150 · 1.2\\nCalculation: Q = 0.040 · 1150 · 1.2 = 46 · 1.2 = 55.2 Joules',
        hi: 'दिया गया है:\\n• स्पर्श वोल्टेज (V_t) = 230 V AC\\n• कुल शारीरिक प्रतिबाधा (Z_b) = 1,150 Ω\\n• संपर्क समय (t) = 1.2 s\\n\\nचरण 1: शारीरिक धारा (I_b) की गणना\\nसूत्र: I_b = V_t / Z_b\\nमान रखने पर: I_b = 230 / 1150 = 0.200 A = 200 mA\\n\\nचरण 2: शारीरिक खतरे का क्षेत्र\\nI_b = 200 mA और समय 1.2 s पर:\\n• वेंट्रिकुलर फिब्रिलेशन सीमा ~50 mA से 4 गुना अधिक है (Zone AC-4.2)।\\n• शारीरिक निष्कर्ष: श्वसन रुकावट, वेंट्रिकुलर फिब्रिलेशन और तत्काल डिफिब्रिलेटर न मिलने पर मृत्यु की अत्यधिक संभावना।\\n\\nचरण 3: तापीय ऊर्जा (Q) की गणना\\nसूत्र: Q = I_b² · R_b · t = (0.200)² × 1150 × 1.2 = 55.2 जूल',
        bn: 'প্রদত্ত:\\n• স্পর্শ ভোল্টেজ (V_t) = ২৩০ V AC\\n• দেহের মোট প্রতিবাধা (Z_b) = ১,১৫০ Ω\\n• সময়কাল (t) = ১.২ s\\n\\nধাপ ১: দেহের কারেন্ট (I_b) গণনা\\nসূত্র: I_b = V_t / Z_b\\nমান বসিয়ে: I_b = ২৩০ / ১১৫০ = ০.২০০ A = ২০০ mA\\n\\nধাপ ২: বিপদের মাত্রা মূল্যায়ন\\n২০০ mA কারেন্ট ৫০ mA ফিব্রিলেশন সীমার ৪ গুণ বেশি (IEC 60479-1 জোন AC-4.2)। তাৎক্ষণিক ডিফিব্রিলেশন না পেলে এটি নিশ্চিত প্রাণঘাতী।\\n\\nধাপ ৩: জুল তাপীয় শক্তি (Q) গণনা\\nসূত্র: Q = I_b² · R_b · t = (০.২০০)² × ১১৫০ × ১.২ = ৫৫.২ জুল'
      },
      givenValues: { 'V_t': '230 V', 'Z_b': '1150 Ω', 't': '1.2 s' },
      finalAnswer: {
        en: 'Body current = 200 mA (Zone AC-4.2: High risk of fatal ventricular fibrillation); Thermal energy = 55.2 J',
        hi: 'शारीरिक धारा = 200 mA (घातक वेंट्रिकुलर फिब्रिलेशन का उच्च जोखिम); तापीय ऊर्जा = 55.2 J',
        bn: 'দেহের কারেন্ট = ২০০ mA (মারাত্মক ভেন্ট্রিকুলার ফিব্রিলেশনের চরম ঝুঁকি); তাপীয় শক্তি = ৫৫.২ J'
      }
    },
    {
      id: 'ex-ch15-l01-02',
      problem: {
        en: 'Under dry industrial conditions, a human body has an estimated total contact resistance of 4,600 Ω. Determine the maximum touch voltage that can appear on a metallic equipment frame such that the body current does not exceed the safe let-go threshold of 10 mA.',
        hi: 'शुष्क औद्योगिक परिस्थितियों में, मानव शरीर का अनुमानित कुल संपर्क प्रतिरोध 4,600 Ω है। धातु के उपकरण फ्रेम पर दिखाई देने वाले अधिकतम स्पर्श वोल्टेज का निर्धारण करें ताकि शारीरिक धारा 10 mA की सुरक्षित लेट-गो सीमा से अधिक न हो।',
        bn: 'শুষ্ক শিল্প পরিবেশে মানবদেহের আনুমানিক মোট সংযোগ রোধ ৪,৬০০ Ω। ধাতব যন্ত্রপাতির ফ্রেমে সর্বোচ্চ কত স্পর্শ ভোল্টেজ অনুমোদিত যাতে দেহের কারেন্ট ১০ mA নিরাপদ লেট-গো সীমা অতিক্রম না করে?'
      },
      solution: {
        en: 'Given:\\n• Body Resistance (R_b) = 4,600 Ω\\n• Maximum safe current threshold (I_max) = 10 mA = 0.010 A\\n\\nStep 1: State Formula\\nV_touch_max = I_max · R_b\\n\\nStep 2: Substitution & Calculation\\nV_touch_max = 0.010 A · 4,600 Ω = 46 V\\n\\nStep 3: Engineering Analysis\\nNotice that 46 V is strictly below the international statutory safe touch voltage limit of 50 V AC (IEC 60364-4-41). Under dry skin conditions, keeping touch voltage below 50 V guarantees that even with prolonged involuntary contact, current remains near or below the let-go threshold, allowing the victim to release themselves safely.',
        hi: 'दिया गया है:\\n• शारीरिक प्रतिरोध (R_b) = 4,600 Ω\\n• अधिकतम सुरक्षित धारा (I_max) = 10 mA = 0.010 A\\n\\nचरण 1: सूत्र\\nV_touch_max = I_max · R_b\\n\\nचरण 2: गणना\\nV_touch_max = 0.010 × 4,600 = 46 V\\n\\nनिष्कर्ष: 46 V अंतरराष्ट्रीय स्तर पर स्वीकृत 50 V सुरक्षित सीमा से कम है, जिससे व्यक्ति आसानी से तार छोड़ सकता है।',
        bn: 'প্রদত্ত:\\n• দেহের রোধ (R_b) = ৪,৬০০ Ω\\n• সর্বোচ্চ নিরাপদ কারেন্ট (I_max) = ১০ mA = ০.০১০ A\\n\\nধাপ ১: সূত্র\\nV_touch_max = I_max · R_b\\n\\nধাপ ২: মান বসিয়ে গণনা\\nV_touch_max = ০.০১০ × ৪,৬০০ = ৪৬ V\\n\\nব্যাখ্যা: ৪৬ V মানটি আন্তর্জাতিকভাবে নির্ধারিত ৫০ V নিরাপদ স্পর্শ ভোল্টেজ সীমার নিচে, যা আক্রান্ত ব্যক্তিকে তার ছেড়ে দিতে সক্ষম করে।'
      },
      givenValues: { 'R_b': '4600 Ω', 'I_max': '10 mA (0.010 A)' },
      finalAnswer: {
        en: 'Maximum safe touch voltage = 46 V (Complies with 50 V statutory limit for dry locations)',
        hi: 'अधिकतम सुरक्षित स्पर्श वोल्टेज = 46 V (शुष्क स्थानों के लिए 50 V की वैधानिक सीमा के अनुरूप)',
        bn: 'সর্বোচ্চ নিরাপদ স্পর্শ ভোল্টেজ = ৪৬ V (শুষ্ক স্থানের ৫০ V বিধিবদ্ধ সীমার অনুকূল)'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Selection and calibration of 30 mA high-sensitivity Residual Current Circuit Breakers (RCCBs) for domestic shock protection.',
      'Establishing Safety Extra-Low Voltage (SELV, < 25 V AC RMS) supplies for swimming pools, wet bathrooms, and handheld inspection lamps.',
      'Mandating the use of dielectric insulating rubber safety mats (IS 15652 / IEC 61111) in front of high-voltage switchgear panels to insert high series resistance in the foot-to-earth path.',
      'Designing equipotential bonding systems in hazardous plant environments to reduce touch and step voltages to zero during ground faults.'
    ],
    hi: [
      'घरेलू विद्युत झटके से सुरक्षा हेतु 30 mA उच्च-संवेदनशीलता वाले आरसीसीबी (RCCB) का चयन और अंशांकन।',
      'स्विमिंग पूल, गीले बाथरूम और पोर्टेबल लैंप के लिए सेफ्टी एक्स्ट्रा-लो वोल्टेज (SELV, < 25 V AC) की स्थापना।',
      'उच्च वोल्टेज स्विचगियर पैनल के सामने रबर सुरक्षा मैट (IS 15652) का अनिवार्य उपयोग ताकि पैर से जमीन के प्रतिरोध को बढ़ाया जा सके।',
      'ग्राउंड फॉल्ट के दौरान स्पर्श और चरण वोल्टेज को शून्य करने के लिए समविभव बॉन्डिंग (Equipotential bonding) का डिजाइन।'
    ],
    bn: [
      'আবাসিক ভবনে শক সুরক্ষা নিশ্চিত করতে ৩০ mA সংবেদনশীলতার আরসিসিবি (RCCB) নির্বাচন ও স্থাপন।',
      'সুইমিং পুল, ভেজা বাথরুম এবং বহনযোগ্য বাতির জন্য সেফটি এক্সট্রা-লো ভোল্টেজ (SELV, < ২৫ V AC) সরবরাহ নিশ্চিতকরণ।',
      'উচ্চ ভোল্টেজ সাবস্টেশন ও সুইচগিয়ারের সামনে ডাইইলেক্ট্রিক রাবার ম্যাট স্থাপন করে পা থেকে মাটির রোধ বৃদ্ধি করা।',
      'গ্রাউন্ড ফল্টের সময় স্পর্শ ও পদক্ষেপ ভোল্টেজ নিরাপদ রাখতে সমবিভ্ভব বন্ধন (Equipotential bonding) নকশাকরণ।'
    ]
  },
  importantPoints: {
    en: [
      'Current, not voltage alone, is the true biological killer; however, higher voltage drives higher current through the skin according to Ohm’s law.',
      'Skin resistance breaks down nonlinearly above 100-200 V as electric breakdown punctures the insulating stratum corneum.',
      '50/60 Hz AC is far more prone to inducing ventricular fibrillation than DC due to resonance with cardiac muscle repolarization.',
      'The "cannot let-go" threshold is roughly 10 mA to 16 mA for women and 15 mA to 22 mA for men.',
      'Statutory limits for touch voltage: 50 V AC in normal dry locations and 25 V AC in wet/agricultural locations (IEC 60364).'
    ],
    hi: [
      'केवल वोल्टेज नहीं, बल्कि धारा का परिमाण ही वास्तविक जैविक क्षति करता है; हालांकि उच्च वोल्टेज त्वचा के माध्यम से अधिक धारा प्रवाहित करता है।',
      '100-200 V से ऊपर त्वचा का सुरक्षात्मक प्रतिरोध अचानक टूट जाता है।',
      '50/60 Hz AC धारा हृदय की मांसपेशियों के लिए DC की तुलना में कहीं अधिक खतरनाक होती है।',
      'तार न छोड़ पाने (कैनट लेट-गो) की सीमा महिलाओं में लगभग 10-16 mA और पुरुषों में 15-22 mA होती है।',
      'स्पर्श वोल्टेज की वैधानिक सीमा: सामान्य शुष्क स्थानों में 50 V AC और गीले स्थानों में 25 V AC (IEC 60364)।'
    ],
    bn: [
      'শুধুমাত্র ভোল্টেজ নয়, কারেন্টের মানই আসল জৈবিক ঘাতক; তবে উচ্চ ভোল্টেজ ওহমের সূত্রে দেহে বেশি কারেন্ট পাঠায়।',
      '১০০-২০০ ভোল্টের উপরে ত্বকের রোধ দ্রুত ভেঙে পড়ে (ডাইইলেক্ট্রিক ব্রেকডাউন)।',
      '৫০/৬০ হার্জ এসি কারেন্ট হৃদযন্ত্রে ভেন্ট্রিকুলার ফিব্রিলেশন সৃষ্টিতে সমমানের ডিসি কারেন্টের চেয়ে অনেক বেশি ক্ষতিকর।',
      '"ক্যানট লেট-গো" থ্রেশহোল্ড মহিলাদের ক্ষেত্রে প্রায় ১০-১৬ mA এবং পুরুষদের ক্ষেত্রে ১৫-২২ mA।',
      'স্পর্শ ভোল্টেজের বিধিবদ্ধ সীমা: শুষ্ক স্থানে ৫০ V AC এবং ভেজা স্থানে ২৫ V AC (IEC 60364)।'
    ]
  },
  commonMistakes: {
    en: [
      'Believing that low voltage (like 110 V or 230 V) is inherently safe and cannot kill; in reality, most fatal electrocutions occur on standard 230 V supplies.',
      'Assuming that dry skin resistance protects you in all situations; moisture, sweat, or salt drops resistance by a factor of 50 to 100.',
      'Confusing the perception threshold (1 mA) with the let-go threshold (10-20 mA).',
      'Failing to recognize that DC shocks cause intense electrochemical burns and sudden muscle jerks upon make and break, even if the fibrillation threshold is higher.'
    ],
    hi: [
      'यह सोचना कि घरेलू 230 V सुरक्षित है और जानलेवा नहीं हो सकता; वास्तव में अधिकांश घातक दुर्घटनाएँ 230 V पर ही होती हैं।',
      'यह मानना कि सूखी त्वचा हर स्थिति में बचाएगी; पसीना या पानी प्रतिरोध को 50 से 100 गुना घटा देता है।',
      'संवेदन सीमा (1 mA) और लेट-गो सीमा (10-20 mA) के बीच भ्रमित होना।',
      'यह न समझना कि DC झटका भी गंभीर रासायनिक जलन पैदा कर सकता है।'
    ],
    bn: [
      'মনে করা যে গৃহস্থালির ২৩০ V ভোল্টেজ নিরাপদ এবং প্রাণঘাতী নয়; প্রকৃতপক্ষে সিংহভাগ প্রাণঘাতী শক ২৩০ V সরবরাহেই ঘটে।',
      'ধরে নেওয়া যে শুষ্ক ত্বক সব সময় রক্ষা করবে; ঘাম বা ভেজা ত্বক রোধ ৫০ থেকে ১০০ গুণ কমিয়ে দেয়।',
      'অনুভূতি সীমা (১ mA) এবং লেট-গো সীমার (১০-২০ mA) মধ্যে বিভ্রান্ত হওয়া।',
      'ডিসি শক যে তীব্র রাসায়নিক ও তাপীয় দগ্ধতা তৈরি করতে পারে তা উপেক্ষা করা।'
    ]
  },
  keyTakeaways: {
    en: [
      'Shock severity depends upon current magnitude, duration, pathway through the body, and power supply frequency.',
      '30 mA is the universal safety threshold: currents above this can trigger fatal ventricular fibrillation within seconds.',
      'Body impedance is predominantly skin impedance, which collapses under wet conditions to approximately 1,000 Ω.',
      'Never touch electrical conductors without verified de-energization and lockout-tagout protocols.'
    ],
    hi: [
      'झटके की गंभीरता धारा के मान, समय, शरीर के मार्ग और आपूर्ति आवृत्ति पर निर्भर करती है।',
      '30 mA सार्वभौमिक सुरक्षा सीमा है: इसके ऊपर की धारा वेंट्रिकुलर फिब्रिलेशन पैदा कर सकती है।',
      'शारीरिक प्रतिबाधा मुख्य रूप से त्वचा पर निर्भर करती है, जो गीली होने पर गिरकर ~1,000 Ω हो जाती है।',
      'बिना डी-एनर्जाइजेशन और लॉकआउट-टैगआउट के कभी भी किसी विद्युत चालक को न छुएं।'
    ],
    bn: [
      'শকের ভয়াবহতা কারেন্টের মান, সময়কাল, দেহের অভ্যন্তরীণ পথ এবং কম্পাঙ্কের উপর নির্ভরশীল।',
      '৩০ mA হলো সার্বজনীন জীবনরক্ষা সীমা: এর বেশি প্রবাহে ভেন্ট্রিকুলার ফিব্রিলেশন ঘটতে পারে।',
      'দেহের মোট রোধ মূলত ত্বকের রোধ, যা ভেজা অবস্থায় দ্রুত কমে প্রায় ১,০০০ ওহমে নেমে আসে।',
      'যাচাইকৃত আইসোলেশন ও লকআউট-ট্যাগআউট ছাড়া কখনো কোনো পরিবাহী স্পর্শ করবেন না।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch15-l01-01',
      question: {
        en: 'According to IEC 60479-1, what is the generally accepted "cannot let-go" threshold current range for a human at 50 Hz AC?',
        hi: 'IEC 60479-1 के अनुसार, 50 Hz AC पर मानव के लिए सामान्यतः स्वीकृत "कैनट लेट-गो" थ्रेशोल्ड धारा सीमा क्या है?',
        bn: 'IEC 60479-1 অনুসারে, ৫০ Hz AC তে মানুষের জন্য সাধারণভাবে স্বীকৃত "ক্যানট লেট-গো" থ্রেশহোল্ড কারেন্টের মাত্রা কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '0.1 mA to 0.5 mA', hi: '0.1 mA से 0.5 mA', bn: '০.১ mA থেকে ০.৫ mA' } },
        { id: 'opt-2', text: { en: '1 mA to 2 mA', hi: '1 mA से 2 mA', bn: '১ mA থেকে ২ mA' } },
        { id: 'opt-3', text: { en: '10 mA to 20 mA', hi: '10 mA से 20 mA', bn: '১০ mA থেকে ২০ mA' } },
        { id: 'opt-4', text: { en: '500 mA to 1 A', hi: '500 mA से 1 A', bn: '৫০০ mA থেকে ১ A' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'At 10 to 20 mA (50 Hz AC), involuntary tetanic contraction of the forearm flexor muscles occurs, preventing the person from opening their hand to release the energized conductor.',
        hi: '10 से 20 mA (50 Hz AC) पर मांसपेशियों का अनैच्छिक संकुचन होता है, जिससे व्यक्ति हाथ खोलकर तार को छोड़ नहीं पाता।',
        bn: '১০ থেকে ২০ mA (৫০ Hz AC) কারেন্টে হাতের পেশির অনৈচ্ছিক সংকোচন ঘটে, যার ফলে ব্যক্তি তার ছেড়ে দিতে অক্ষম হয়।'
      }
    },
    {
      id: 'mcq-ch15-l01-02',
      question: {
        en: 'Which physiological condition is the primary cause of immediate fatality during an electrical shock in the 50 mA to 100 mA range?',
        hi: '50 mA से 100 mA की सीमा में विद्युत झटके के दौरान तत्काल मृत्यु का प्राथमिक कारण कौन सी शारीरिक स्थिति है?',
        bn: '৫০ mA থেকে ১০০ mA সীমার মধ্যে ইলেকট্রিক শকে তাৎক্ষণিক মৃত্যুর প্রাথমিক কারণ কোন শারীরবৃত্তীয় অবস্থা?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Severe external skin blistering', hi: 'त्वचा पर गंभीर छाले पड़ना', bn: 'ত্বকে মারাত্মক ফোসকা পড়া' } },
        { id: 'opt-2', text: { en: 'Ventricular fibrillation of the heart', hi: 'हृदय का वेंट्रिकुलर फिब्रिलेशन (निलय तंतुविकसन)', bn: 'হৃদযন্ত্রের ভেন্ট্রিকুলার ফিব্রিলেশন' } },
        { id: 'opt-3', text: { en: 'Temporary loss of hearing', hi: 'सुनने की क्षमता का अस्थायी नुकसान', bn: 'শ্রবণশক্তির সাময়িক ক্ষতি' } },
        { id: 'opt-4', text: { en: 'Dehydration of limb joints', hi: 'जोड़ों का निर्जलीकरण', bn: 'অঙ্গপ্রত্যঙ্গের নির্জলীকরণ' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Currents between 50 mA and 100 mA disrupt the heart rhythm, triggering chaotic ventricular fibrillation, stopping blood circulation within seconds.',
        hi: '50 mA से 100 mA की धारा हृदय गति को बाधित कर वेंट्रिकुलर फिब्रिलेशन पैदा करती है, जिससे रक्त प्रवाह रुक जाता है।',
        bn: '৫০ mA থেকে ১০০ mA কারেন্ট হৃদস্পন্দনের ছন্দ নষ্ট করে ভেন্ট্রিকুলার ফিব্রিলেশন সৃষ্টি করে, ফলে সেকেন্ডের মধ্যে রক্তসঞ্চালন বন্ধ হয়।'
      }
    },
    {
      id: 'mcq-ch15-l01-03',
      question: {
        en: 'What is the conventional statutory safe touch voltage limit specified by IEC 60364 for normal dry environments?',
        hi: 'सामान्य शुष्क वातावरण के लिए IEC 60364 द्वारा निर्दिष्ट पारंपरिक वैधानिक सुरक्षित स्पर्श वोल्टेज सीमा क्या है?',
        bn: 'স্বাভাবিক শুষ্ক পরিবেশের জন্য IEC 60364 দ্বারা নির্ধারিত বিধিবদ্ধ নিরাপদ স্পর্শ ভোল্টেজ সীমা কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '12 V AC', hi: '12 V AC', bn: '১২ V AC' } },
        { id: 'opt-2', text: { en: '25 V AC', hi: '25 V AC', bn: '২৫ V AC' } },
        { id: 'opt-3', text: { en: '50 V AC', hi: '50 V AC', bn: '৫০ V AC' } },
        { id: 'opt-4', text: { en: '110 V AC', hi: '110 V AC', bn: '১১০ V AC' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'IEC 60364-4-41 sets the conventional touch voltage limit (U_L) at 50 V AC for dry locations and 25 V AC for wet or restrictive locations.',
        hi: 'IEC 60364-4-41 सामान्य शुष्क स्थानों के लिए स्पर्श वोल्टेज सीमा 50 V AC और गीले स्थानों के लिए 25 V AC निर्धारित करता है।',
        bn: 'IEC 60364-4-41 শুষ্ক স্থানের জন্য প্রচলিত স্পর্শ ভোল্টেজ সীমা ৫০ V AC এবং ভেজা স্থানের জন্য ২৫ V AC নির্ধারণ করে।'
      }
    },
    {
      id: 'mcq-ch15-l01-04',
      question: {
        en: 'Under completely wet and broken skin conditions, to what approximate value does human body impedance drop?',
        hi: 'पूरी तरह से गीली और कटी-फटी त्वचा की स्थिति में मानव शरीर की प्रतिबाधा लगभग किस मान तक गिर जाती है?',
        bn: 'সম্পূর্ণ ভেজা ও ক্ষতবিক্ষত ত্বকের অবস্থায় মানবদেহের রোধ আনুমানিক কত মানে নেমে আসে?'
      },
      options: [
        { id: 'opt-1', text: { en: '1,000,000 Ω', hi: '1,000,000 Ω', bn: '১,০০০,০০০ Ω' } },
        { id: 'opt-2', text: { en: '100,000 Ω', hi: '100,000 Ω', bn: '১০০,০০০ Ω' } },
        { id: 'opt-3', text: { en: '1,000 Ω', hi: '1,000 Ω', bn: '১,০০০ Ω' } },
        { id: 'opt-4', text: { en: '10 Ω', hi: '10 Ω', bn: '১০ Ω' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'When skin moisture or wounds bypass the stratum corneum, body impedance collapses to internal tissue resistance, standardized at roughly 1,000 Ω.',
        hi: 'जब नमी या घाव के कारण त्वचा का प्रतिरोध समाप्त हो जाता है, तो शरीर की प्रतिबाधा आंतरिक ऊतकों के प्रतिरोध (~1,000 Ω) तक गिर जाती है।',
        bn: 'ত্বকের বাহ্যিক স্তর আর্দ্রতা বা ক্ষতের কারণে বিনষ্ট হলে শরীরের সামগ্রিক রোধ অভ্যন্তরীণ রোধের সমান (প্রায় ১,০০০ Ω) হয়ে যায়।'
      }
    },
    {
      id: 'mcq-ch15-l01-05',
      question: {
        en: 'Why is 50 Hz AC generally more hazardous to the human heart than DC of the same RMS voltage?',
        hi: 'समान RMS वोल्टेज की DC की तुलना में 50 Hz AC मानव हृदय के लिए सामान्यतः अधिक खतरनाक क्यों है?',
        bn: 'সমমানের আরএমএস ভোল্টেজের ডিসির চেয়ে ৫০ Hz এসি মানব হৃদযন্ত্রের জন্য সাধারণত বেশি বিপজ্জনক কেন?'
      },
      options: [
        { id: 'opt-1', text: { en: 'AC produces zero heat in human tissues', hi: 'AC मानव ऊतकों में शून्य ऊष्मा पैदा करती है', bn: 'এসি মানবদেহে কোনো তাপ তৈরি করে না' } },
        { id: 'opt-2', text: { en: '50 Hz frequency resonates with heart pacemaker cells and neuromuscular depolarization rates', hi: '50 Hz आवृत्ति हृदय पेसमेकर कोशिकाओं और न्यूरोमस्कुलर विध्रुवण दरों के साथ प्रतिध्वनित होती है', bn: '৫০ Hz কম্পাঙ্ক হৃদযন্ত্রের পেসমেকার কোষ ও স্নায়ু-পেশির স্বাভাবিক ক্রিয়াকে মারাত্মকভাবে বিঘ্নিত করে' } },
        { id: 'opt-3', text: { en: 'DC cannot pass through skin at all', hi: 'DC त्वचा से बिल्कुल नहीं गुजर सकती', bn: 'ডিসি ত্বক ভেদ করতে পারে না' } },
        { id: 'opt-4', text: { en: 'AC only flows on the surface of the hair', hi: 'AC केवल बालों की सतह पर बहती है', bn: 'এসি কেবল চুলের উপর দিয়ে প্রবাহিত হয়' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'The repetitive cycling of 50 Hz AC closely matches the repolarization vulnerability window of cardiac muscle cells, triggering ventricular fibrillation at far lower currents than DC.',
        hi: '50 Hz AC की आवृत्ति हृदय की कोशिकाओं की उत्तेजनशीलता के अनुकूल होती है, जिससे यह DC की तुलना में बहुत कम धारा पर ही फिब्रिलेशन उत्पन्न करती है।',
        bn: '৫০ Hz এসির পর্যায়বৃত্ত পরিবর্তন হৃদকোষের সংবেদনশীল সময়ের সাথে মিলে যায়, ফলে ডিসির চেয়ে অনেক কম কারেন্টেই ফিব্রিলেশন ঘটে।'
      }
    },
    {
      id: 'mcq-ch15-l01-06',
      question: {
        en: 'If a touch voltage of 240 V AC is applied across a body resistance of 1,200 Ω, what is the resulting current through the person?',
        hi: 'यदि 1,200 Ω के शारीरिक प्रतिरोध पर 240 V AC का स्पर्श वोल्टेज लगाया जाता है, तो व्यक्ति से प्रवाहित होने वाली धारा क्या होगी?',
        bn: 'যদি ১,২০০ Ω শারীরিক রোধের বিপরীতে ২৪০ V AC স্পর্শ ভোল্টেজ প্রযুক্ত হয়, তবে ব্যক্তির মধ্য দিয়ে প্রবাহিত কারেন্ট কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '20 mA', hi: '20 mA', bn: '২০ mA' } },
        { id: 'opt-2', text: { en: '200 mA', hi: '200 mA', bn: '২০০ mA' } },
        { id: 'opt-3', text: { en: '5 mA', hi: '5 mA', bn: '৫ mA' } },
        { id: 'opt-4', text: { en: '2 A', hi: '2 A', bn: '২ A' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'By Ohm’s law, I = V / R = 240 V / 1,200 Ω = 0.200 A = 200 mA. This is well above the ventricular fibrillation threshold.',
        hi: 'ओम के नियम से, I = V / R = 240 / 1200 = 0.2 A = 200 mA। यह वेंट्रिकुलर फिब्रिलेशन सीमा से काफी अधिक है।',
        bn: 'ওহমের সূত্রানুসারে, I = V / R = ২৪০ V / ১,২০০ Ω = ০.২ A = ২০০ mA। এটি ফিব্রিলেশন সীমার অনেক উপরে।'
      }
    },
    {
      id: 'mcq-ch15-l01-07',
      question: {
        en: 'Which shock pathway through the human body presents the highest statistical mortality risk?',
        hi: 'मानव शरीर के माध्यम से कौन सा झटका मार्ग उच्चतम सांख्यिकीय मृत्यु जोखिम प्रस्तुत करता है?',
        bn: 'মানবদেহের মধ্য দিয়ে কোন শক পথটি পরিসংখ্যানে সর্বাধিক মৃত্যুঝুঁকি তৈরি করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Left hand to feet (across the thoracic cavity and heart)', hi: 'बाएं हाथ से पैर (सीने और हृदय के आर-पार)', bn: 'বাম হাত থেকে পা (বক্ষগহ্বর ও হৃদপিণ্ডের মধ্য দিয়ে)' } },
        { id: 'opt-2', text: { en: 'Foot to foot (step potential only)', hi: 'पैर से पैर (केवल चरण विभव)', bn: 'পা থেকে পা (শুধু পদক্ষেপ বিভব)' } },
        { id: 'opt-3', text: { en: 'Right thumb to right index finger', hi: 'दाहिने अंगूठे से दाहिनी तर्जनी', bn: 'ডান বৃদ্ধাঙ্গুলি থেকে ডান তর্জনী' } },
        { id: 'opt-4', text: { en: 'Elbow to forearm on the same arm', hi: 'एक ही बांह पर कोहनी से अग्रभाग', bn: 'একই হাতের কনুই থেকে বাহু' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'The left-hand-to-feet path directs the maximum fraction of total body current directly through the cardiac muscle and chest organs, maximizing fibrillation danger.',
        hi: 'बाएं हाथ से पैर का मार्ग अधिकतम धारा को सीधे हृदय और फेफड़ों से गुजारता है, जिससे फिब्रिलेशन का खतरा सबसे अधिक होता है।',
        bn: 'বাম হাত থেকে পায়ের পথটি মোট কারেন্টের সিংহভাগ সরাসরি হৃদযন্ত্র ও বক্ষের মধ্য দিয়ে প্রবাহিত করে মারাত্মক ঝুঁকি তৈরি করে।'
      }
    },
    {
      id: 'mcq-ch15-l01-08',
      question: {
        en: 'What is the primary life-saving purpose of specifying a 30 mA tripping sensitivity for residential RCCBs?',
        hi: 'आवासीय आरसीसीबी (RCCB) के लिए 30 mA ट्रिपिंग संवेदनशीलता निर्दिष्ट करने का प्राथमिक जीवन रक्षक उद्देश्य क्या है?',
        bn: 'আবাসিক আরসিসিবিতে ৩০ mA ট্রিপিং সংবেদনশীলতা নির্ধারণের প্রধান জীবনরক্ষাকারী উদ্দেশ্য কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'To prevent electricity theft', hi: 'बिजली चोरी रोकना', bn: 'বিদ্যুৎ চুরি প্রতিরোধ করা' } },
        { id: 'opt-2', text: { en: 'To disconnect power before current can reach the ventricular fibrillation zone (>50 mA)', hi: 'धारा के वेंट्रिकुलर फिब्रिलेशन क्षेत्र (>50 mA) तक पहुंचने से पहले बिजली काटना', bn: 'কারেন্টের মান ভেন্ট্রিকুলার ফিব্রিলেশন সীমায় (>৫০ mA) পৌঁছানোর আগেই বিদ্যুৎ সংযোগ বিচ্ছিন্ন করা' } },
        { id: 'opt-3', text: { en: 'To protect copper cables from overheating', hi: 'तांबे के तारों को गर्म होने से बचाना', bn: 'তামার তার অতিরিক্ত গরম হওয়া রোধ করা' } },
        { id: 'opt-4', text: { en: 'To reduce the electricity bill by 30%', hi: 'बिजली बिल में 30% कमी करना', bn: 'বিদ্যুৎ বিল ৩০% হ্রাস করা' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: '30 mA is deliberately selected because it sits safely below the ventricular fibrillation threshold (~50 mA) while operating quickly (within 30-40 ms) to save human life.',
        hi: '30 mA को जानबूझकर चुना गया है क्योंकि यह फिब्रिलेशन सीमा (~50 mA) से नीचे रहता है और मानव जीवन बचाने के लिए 30-40 ms में ट्रिप हो जाता है।',
        bn: '৩০ mA মাত্রাটি ভেন্ট্রিকুলার ফিব্রিলেশন সীমার (~৫০ mA) নিচে থাকে এবং ৩০-৪০ মিলিসেকেন্ডের মধ্যে ট্রিপ করে জীবন রক্ষা করে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch15-l01-01',
      question: {
        en: 'Explain why water and sweat dramatically reduce human skin resistance during an electrical contact.',
        hi: 'स्पष्ट कीजिए कि विद्युत संपर्क के दौरान पानी और पसीना मानव त्वचा के प्रतिरोध को अत्यधिक क्यों घटा देते हैं।',
        bn: 'ব্যাখ্যা করুন কেন জল ও ঘাম ইলেকট্রিক শকের সময় মানবদেহের ত্বকের রোধ নাটকীয়ভাবে কমিয়ে দেয়।'
      },
      hint: {
        en: 'Consider the dissolved mineral salts (ions) in sweat and how moisture bypasses the dry stratum corneum dielectric layer.',
        hi: 'पसीने में घुले खनिज लवणों (आयनों) और नमी द्वारा सूखी त्वचा के इन्सुलेटिंग परत को बायपास करने पर विचार करें।',
        bn: 'ঘামে দ্রবীভূত লবণ (আয়ন) এবং কীভাবে আর্দ্রতা ত্বকের শুষ্ক অন্তরক স্তর অতিক্রম করে তা বিবেচনা করুন।'
      }
    },
    {
      id: 'pq-ch15-l01-02',
      question: {
        en: 'Calculate the prospective body current for a person with 2,000 Ω body resistance who accidentally touches a 415 V line-to-line three-phase conductor.',
        hi: '2,000 Ω शारीरिक प्रतिरोध वाले व्यक्ति के लिए संभावित शारीरिक धारा की गणना कीजिए जो गलती से 415 V लाइन-टू-लाइन थ्री-फेज तार को छू लेता है।',
        bn: '২,০০০ Ω শারীরিক রোধসম্পন্ন ব্যক্তির দেহে প্রবাহিত সম্ভাব্য কারেন্ট নির্ণয় করুন যিনি দুর্ঘটনাবশত একটি ৪১৫ V লাইন-টু-লাইন থ্রি-ফেজ পরিবাহী স্পর্শ করেন।'
      },
      hint: {
        en: 'Apply Ohm’s law: I = V / R = 415 / 2000.',
        hi: 'ओम का नियम लागू करें: I = V / R = 415 / 2000।',
        bn: 'ওহমের সূত্র প্রয়োগ করুন: I = V / R = ৪১৫ / ২০০০।'
      }
    }
  ]
};
'''

with open('src/data/chapter15Lesson1.ts', 'w', encoding='utf-8') as f:
  f.write(lesson1_code)

print("Created src/data/chapter15Lesson1.ts")

