import { Lesson } from '../types';

export const LESSON_AC_SUPERPOSITION_MAXPOWER: Lesson = {
  id: 'lsn-ch12-ac-superposition-max-power',
  topicId: 'tp-pure-inductive',
  chapterId: 'ch-ac-circuits',
  order: 2,
  title: {
    en: 'AC Superposition & Maximum Power Transfer Theorems',
    hi: 'एसी अध्यारोपण एवं अधिकतम शक्ति स्थानांतरण प्रमेय',
    bn: 'এসি উপরিপাতন ও সর্বোচ্চ ক্ষমতা স্থানান্তর উপপাদ্য'
  },
  description: {
    en: 'Analyze multi-source linear AC networks using the superposition theorem with single and multi-frequency sources. Master maximum real power transfer under unconstrained complex conjugate matching (Z_L = Z_th*), pure resistive load constraint (R_L = |Z_th|), and power transfer efficiency.',
    hi: 'एकल एवं बहु-आवृत्ति स्रोतों के साथ अध्यारोपण प्रमेय का उपयोग करके बहु-स्रोत रैखिक एसी नेटवर्क का विश्लेषण करें। अप्रतिबंधित सम्मिश्र संयुग्मी मिलान (Z_L = Z_th*), शुद्ध प्रतिरोधी लोड प्रतिबंध (R_L = |Z_th|), एवं शक्ति स्थानांतरण दक्षता में महारत हासिल करें।',
    bn: 'একক ও বহু-কম্পাঙ্কের উৎসের উপস্থিতিতে উপরিপাতন উপপাদ্য ব্যবহার করে মাল্টি-সোর্স রৈখিক এসি নেটওয়ার্ক বিশ্লেষণ করুন। জটিল অনুবন্ধী ম্যাচিং (Z_L = Z_th*), বিশুদ্ধ রোধীয় লোড শর্ত (R_L = |Z_th|) এবং ক্ষমতা স্থানান্তর দক্ষতা পুঙ্খানুপুঙ্খভাবে আয়ত্ত করুন।'
  },
  estimatedMinutes: 40,
  easyExplanation: {
    en: 'When an AC circuit has multiple sources operating at the SAME frequency, we can solve for voltages and currents by turning on one source at a time and adding the resulting phasors using vector algebra. However, if sources operate at DIFFERENT frequencies (like a 50 Hz source and a 100 Hz harmonic), their phasors rotate at different speeds and CANNOT be added together directly as phasors! Instead, we find the separate time-domain sinusoids and sum them in the time domain. Furthermore, to deliver the maximum possible real (heat/work) power from an AC source to a load, the load must cancel the internal reactance (resonance) and match the internal resistance: Z_L must equal the complex conjugate of the internal impedance (Z_L = Z_th* = R_th - jX_th).',
    hi: 'जब किसी एसी परिपथ में समान आवृत्ति पर कार्य करने वाले कई स्रोत होते हैं, तो हम एक समय में एक स्रोत को चालू रखकर और प्राप्त फेजरों को सदिश रूप में जोड़कर हल कर सकते हैं। लेकिन यदि स्रोत भिन्न आवृत्तियों पर कार्य कर रहे हों (उदा. 50 Hz और 100 Hz), तो उनके फेजरों को सीधे नहीं जोड़ा जा सकता; उन्हें समय-डोमेन में जोड़ना पड़ता है। इसके अतिरिक्त, किसी एसी स्रोत से लोड में अधिकतम वास्तविक शक्ति स्थानांतरित करने के लिए, लोड प्रतिबाधा को आंतरिक प्रतिबाधा का सम्मिश्र संयुग्मी होना चाहिए: Z_L = Z_th* = R_th - jX_th।',
    bn: 'যখন কোনো এসি বর্তনীতে একই কম্পাঙ্কের একাধিক উৎস থাকে, তখন একটি উৎস সক্রিয় রেখে বাকিগুলো নিষ্ক্রিয় করে প্রাপ্ত ফেজরগুলোকে ভেক্টর যোগের মাধ্যমে মোট মান পাওয়া যায়। তবে উৎসগুলো ভিন্ন ভিন্ন কম্পাঙ্কে ক্রিয়াশীল হলে তাদের সরাসরি ফেজর যোগ করা যায় না; টাইম-ডোমেনে সমীকরণ যোগ করতে হয়। এছাড়া লোডে সর্বোচ্চ সক্রিয় ক্ষমতা স্থানান্তরের জন্য লোড প্রতিবাধাকে অভ্যন্তরীণ প্রতিবাধার জটিল অনুবন্ধী হতে হয়: Z_L = Z_th* = R_th - jX_th।'
  },
  detailedExplanation: {
    en: '1. Superposition with Same-Frequency Sources: In any linear, bilateral AC network driven by independent sources at a common frequency ω, the total response (voltage phasor V or current phasor I) is the phasor sum of the individual responses produced by each independent source acting alone with all other independent sources deactivated (voltage sources shorted, current sources opened): V_total = ∑ V_k.\n\n2. Multi-Frequency Superposition: If the sources operate at distinct frequencies (ω_1 ≠ ω_2), phasor addition is strictly invalid because each frequency creates a distinct phasor plane rotating at a different angular velocity. To obtain the total response:\n- Solve the circuit at frequency ω_1 to get phasor V_1 and convert to time-domain: v_1(t) = |V_1|√2 cos(ω_1 t + θ_1).\n- Solve the circuit at frequency ω_2 to get phasor V_2 and convert: v_2(t) = |V_2|√2 cos(ω_2 t + θ_2).\n- The total instantaneous voltage is v(t) = v_1(t) + v_2(t).\n- The total average power dissipated in a resistor R is the sum of the individual average powers: P_total = P_1 + P_2 = (|I_1,rms|^2 + |I_2,rms|^2) · R. Cross-frequency average power terms integrate to zero over a common period.\n\n3. Maximum Power Transfer Theorem for AC Networks:\n- Case A: Unconstrained Load Impedance Z_L = R_L + jX_L: To maximize active power P_L transferred to the load from a Thevenin equivalent (V_th, Z_th = R_th + jX_th), the load impedance must be the complex conjugate of the Thevenin impedance: Z_L = Z_th* = R_th - jX_th.\nUnder this conjugate match condition, the reactive parts cancel completely (X_L + X_th = 0), creating net resonance, and maximum power delivered is P_max = |V_th|^2 / (4 R_th).\n- Case B: Purely Resistive Load (X_L = 0, R_L variable): If the load must be purely resistive, the condition for maximum power is R_L = |Z_th| = √(R_th^2 + X_th^2).\n- Efficiency at Maximum Power: Exactly 50% of the total generated real power is delivered to the load; the remaining 50% is dissipated as heat inside the internal resistance R_th.',
    hi: '1. समान आवृत्ति पर अध्यारोपण: यदि सभी स्रोत समान आवृत्ति ω पर हैं, तो कुल फेजर प्रतिक्रिया प्रत्येक व्यक्तिगत स्रोत द्वारा उत्पन्न फेजरों का सदिश योग होती है: V_total = ∑ V_k।\n2. बहु-आवृत्ति अध्यारोपण: यदि स्रोतों की आवृत्तियाँ भिन्न हों (ω_1 ≠ ω_2), तो फेजरों को सीधे नहीं जोड़ा जा सकता। प्रत्येक आवृत्ति के लिए अलग से फेजर हल निकालें, उन्हें समय डोमेन में बदलें, और फिर v(t) = v_1(t) + v_2(t) के रूप में जोड़ें।\n3. अधिकतम शक्ति स्थानांतरण:\n- स्थिति A (सम्मिश्र लोड Z_L): अधिकतम वास्तविक शक्ति के लिए लोड प्रतिबाधा को आंतरिक प्रतिबाधा का संयुग्मी होना चाहिए: Z_L = Z_th* = R_th - jX_th। इस स्थिति में P_max = |V_th|^2 / (4 R_th)।\n- स्थिति B (केवल प्रतिरोधी लोड R_L): जब लोड केवल प्रतिरोधी हो, तो अधिकतम शक्ति हेतु R_L = |Z_th| = √(R_th^2 + X_th^2)।\n- दक्षता: अधिकतम शक्ति स्थानांतरण पर दक्षता ठीक 50% होती है।',
    bn: '১. সম-কম্পাঙ্কে উপরিপাতন: সকল উৎস একই কম্পাঙ্ক ω-তে থাকলে মোট রেসপন্স প্রতিটি উৎসের জন্য প্রাপ্ত ফেজরগুলোর ভেক্টর যোগফল: V_total = ∑ V_k।\n২. বহু-কম্পাঙ্কে উপরিপাতন: উৎসগুলোর কম্পাঙ্ক ভিন্ন হলে তাদের ফেজর সরাসরি যোগ করা যায় না। প্রতিটি কম্পাঙ্কের জন্য আলাদা ফেজর সমাধান করে টাইম ডোমেনে নিয়ে v(t) = v_1(t) + v_2(t) করতে হয়।\n৩. সর্বোচ্চ ক্ষমতা স্থানান্তর উপপাদ্য:\n- শর্ত ক (জটিল লোড Z_L): Z_L = Z_th* = R_th - jX_th (অনুবন্ধী ম্যাচিং)। এক্ষেত্রে P_max = |V_th|^2 / (4 R_th)।\n- শর্ত খ (কেবল রোধীয় লোড R_L): R_L = |Z_th| = √(R_th^2 + X_th^2)।\n- দক্ষতা: সর্বোচ্চ ক্ষমতা স্থানান্তরের ক্ষেত্রে দক্ষতা সর্বদা ৫০% হয়।'
  },
  formulas: [
    {
      id: 'f-ac-max-power-conjugate',
      symbol: 'Z_L^*',
      expression: 'Z_L = Z_{th}^* = R_{th} - jX_{th}',
      title: {
        en: 'Complex Conjugate Matching Condition',
        hi: 'सम्मिश्र संयुग्मी मिलान शर्त',
        bn: 'জটিল অনুবন্ধী ম্যাচিং শর্ত'
      },
      description: {
        en: 'Condition for maximum active power transfer from an AC network with internal impedance Z_th.',
        hi: 'आंतरिक प्रतिबाधा Z_th वाले एसी नेटवर्क से अधिकतम वास्तविक शक्ति स्थानांतरण की शर्त।',
        bn: 'অভ্যন্তরীণ প্রতিবাধা Z_th বিশিষ্ট এসি নেটওয়ার্ক থেকে সর্বোচ্চ সক্রিয় ক্ষমতা স্থানান্তরের শর্ত।'
      },
      variables: [
        { symbol: 'Z_L', name: { en: 'Load impedance (Ω)', hi: 'लोड प्रतिबाधा (Ω)', bn: 'লোড প্রতিবাধা (Ω)' } },
        { symbol: 'Z_{th}^*', name: { en: 'Complex conjugate of Thevenin impedance (Ω)', hi: 'थेवेनिन प्रतिबाधा का सम्मिश्र संयुग्मी (Ω)', bn: 'থেভেনিন প্রতিবাধার জটিল অনুবন্ধী (Ω)' } }
      ]
    },
    {
      id: 'f-ac-p-max',
      symbol: 'P_{max}',
      expression: 'P_{max} = \\frac{|\\mathbf{V}_{th}|^2}{4 R_{th}}',
      title: {
        en: 'Maximum Active Power Delivered',
        hi: 'वितरित अधिकतम वास्तविक शक्ति',
        bn: 'সরবরাহকৃত সর্বোচ্চ সক্রিয় ক্ষমতা'
      },
      description: {
        en: 'Calculates the maximum real power transferred under complex conjugate matching.',
        hi: 'सम्मिश्र संयुग्मी मिलान के अंतर्गत स्थानांतरित अधिकतम वास्तविक शक्ति की गणना।',
        bn: 'জটিল অনুবন্ধী ম্যাচিং অবস্থায় স্থানান্তরিত সর্বোচ্চ সক্রিয় ক্ষমতা গণনা।'
      },
      variables: [
        { symbol: 'P_{max}', name: { en: 'Maximum real power (W)', hi: 'अधिकतम वास्तविक शक्ति (W)', bn: 'সর্বোচ্চ সক্রিয় ক্ষমতা (W)' } },
        { symbol: '|\\mathbf{V}_{th}|', name: { en: 'RMS Thevenin open-circuit voltage magnitude (V)', hi: 'RMS थेवेनिन वोल्टेज परिमाण (V)', bn: 'আরএমএস থেভেনিন ভোল্টেজের মান (V)' } },
        { symbol: 'R_{th}', name: { en: 'Thevenin internal resistance (Ω)', hi: 'थेवेनिन आंतरिक प्रतिरोध (Ω)', bn: 'থেভেনিন অভ্যন্তরীণ রোধ (Ω)' } }
      ]
    },
    {
      id: 'f-ac-resistive-match',
      symbol: 'R_L',
      expression: 'R_L = |\\mathbf{Z}_{th}| = \\sqrt{R_{th}^2 + X_{th}^2}',
      title: {
        en: 'Constrained Purely Resistive Load Matching',
        hi: 'प्रतिबंधित शुद्ध प्रतिरोधी लोड मिलान',
        bn: 'বিশুদ্ধ রোধীয় লোড ম্যাচিং শর্ত'
      },
      description: {
        en: 'Optimal resistance when load reactance is constrained to zero (pure resistor).',
        hi: 'जब लोड प्रतिघात शून्य तक सीमित हो (शुद्ध प्रतिरोधक) तो इष्टतम प्रतिरोध।',
        bn: 'লোড রিঅ্যাক্ট্যান্স শূন্য থাকলে সর্বোচ্চ ক্ষমতার জন্য উপযুক্ত রোধ।'
      },
      variables: [
        { symbol: 'R_L', name: { en: 'Optimal load resistance (Ω)', hi: 'इष्टतम लोड प्रतिरोध (Ω)', bn: 'অনুকূল লোড রোধ (Ω)' } },
        { symbol: '|\\mathbf{Z}_{th}|', name: { en: 'Magnitude of internal impedance (Ω)', hi: 'आंतरिक प्रतिबाधा का परिमाण (Ω)', bn: 'অভ্যন্তরীণ প্রতিবাধার মান (Ω)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch12-l02-superposition-principles',
      title: {
        en: 'Superposition Theorem with AC Sources',
        hi: 'एसी स्रोतों के साथ अध्यारोपण प्रमेय',
        bn: 'এসি উৎস সহ উপরিপাতন উপপাদ্য'
      },
      content: {
        en: 'The superposition theorem states that in any linear AC circuit containing multiple independent sources, the phasor response across or through any element equals the sum of the individual phasor responses when each independent source acts alone.\n\nSteps for single-frequency analysis:\n1. Select one independent source.\n2. Deactivate all other independent voltage sources (replace with short circuits) and current sources (replace with open circuits).\n3. Retain all dependent sources intact.\n4. Solve for the branch current phasor I_k\' or node voltage phasor V_k\'.\n5. Repeat for all independent sources.\n6. Sum the individual phasors: I_total = ∑ I_k\'.',
        hi: 'अध्यारोपण प्रमेय के अनुसार किसी भी रैखिक एसी परिपथ में किसी भी घटक में प्रवाहित धारा या वोल्टेज का मान प्रत्येक स्वतंत्र स्रोत द्वारा व्यक्तिगत रूप से उत्पन्न मानों के फेजर योग के बराबर होता है।',
        bn: 'উপরিপাতন উপপাদ্য অনুসারে যেকোনো রৈখিক এসি বর্তনীতে কোনো উপাদানের ভোল্টেজ বা কারেন্ট প্রতিটি স্বাধীন উৎসের একক ক্রিয়ার ফলে সৃষ্ট ফেজরগুলোর ভেক্টর সমষ্টির সমান।'
      }
    },
    {
      id: 'sec-ch12-l02-multi-frequency',
      title: {
        en: 'Handling Multi-Frequency Excitations',
        hi: 'बहु-आवृत्ति उत्तेजनाओं का समाधान',
        bn: 'বহু-কম্পাঙ্ক উদ্দীপনা সমাধান'
      },
      content: {
        en: 'When sources have different angular frequencies (e.g., ω_1 = 314 rad/s and ω_2 = 628 rad/s, or DC + AC):\n- Phasors CANNOT be added together! A phasor V_1 at ω_1 rotates at speed ω_1, while V_2 rotates at ω_2. Their relative angle continuously changes with time.\n- The correct procedure is to calculate the time-domain sinusoidal response for each frequency individually:\n  v_1(t) = V_m1 cos(ω_1 t + ϕ_1)\n  v_2(t) = V_m2 cos(ω_2 t + ϕ_2)\n  v(t) = v_1(t) + v_2(t)\n- Effective RMS voltage of a multi-frequency signal with zero DC offset is V_rms = √(V_rms,1^2 + V_rms,2^2).\n- Total active power dissipated in a load resistor R is P = P_1 + P_2 = V_rms,1^2 / R + V_rms,2^2 / R.',
        hi: 'जब स्रोतों की आवृत्तियाँ भिन्न हों, तो फेजरों को सीधे नहीं जोड़ा जा सकता क्योंकि उनकी घूर्णन गति भिन्न होती है। सही विधि प्रत्येक आवृत्ति के लिए समय-डोमेन ज्यावक्रीय फलन निकालना और फिर उन्हें समय डोमेन में जोड़ना है: v(t) = v_1(t) + v_2(t)। कुल RMS वोल्टेज V_rms = √(V_rms,1^2 + V_rms,2^2) होता है।',
        bn: 'ভিন্ন ভিন্ন কম্পাঙ্কের উৎসের ক্ষেত্রে ফেজর সরাসরি যোগ করা যায় না। প্রতিটি কম্পাঙ্কের জন্য আলাদাভাবে সমাধান করে টাইম ডোমেন সমীকরণ v(t) = v_1(t) + v_2(t) আকারে যোগ করতে হয়। মোট আরএমএস মান V_rms = √(V_rms,1^2 + V_rms,2^2)।'
      }
    },
    {
      id: 'sec-ch12-l02-max-power-proof',
      title: {
        en: 'Mathematical Derivation of Maximum Power Transfer',
        hi: 'अधिकतम शक्ति स्थानांतरण की गणितीय व्युत्पत्ति',
        bn: 'সর্বোচ্চ ক্ষমতা স্থানান্তরের গাণিতিক প্রতিপাদন'
      },
      content: {
        en: 'Consider a Thevenin equivalent V_th with impedance Z_th = R_th + jX_th feeding load Z_L = R_L + jX_L.\nThe load current is I_L = V_th / ((R_th + R_L) + j(X_th + X_L)).\nThe real power dissipated in the load is:\nP_L = |I_L|^2 R_L = [|V_th|^2 R_L] / [(R_th + R_L)^2 + (X_th + X_L)^2].\n\nTo maximize P_L with respect to load reactance X_L:\n∂P_L / ∂X_L = 0  ⇒  X_L + X_th = 0  ⇒  X_L = -X_th.\nSubstituting X_L = -X_th simplifies the power expression to:\nP_L = [|V_th|^2 R_L] / (R_th + R_L)^2.\n\nDifferentiating with respect to R_L and setting to zero:\n∂P_L / ∂R_L = |V_th|^2 · [(R_th + R_L)^2 - 2R_L(R_th + R_L)] / (R_th + R_L)^4 = 0\n(R_th + R_L) - 2R_L = 0  ⇒  R_L = R_th.\n\nHence, maximum power transfer occurs if and only if:\nZ_L = R_th - jX_th = Z_th*.\nThe maximum power delivered is P_max = |V_th|^2 / (4 R_th).',
        hi: 'लोड में वास्तविक शक्ति P_L = |V_th|^2 R_L / [(R_th + R_L)^2 + (X_th + X_L)^2]।\nX_L के सापेक्ष अवकलन करने पर X_L = -X_th प्राप्त होता है (जो परिपथ को अनुनाद में लाता है)। इसके बाद R_L के सापेक्ष अवकलन करने पर R_L = R_th प्राप्त होता है। अतः Z_L = Z_th* होने पर अधिकतम शक्ति स्थानांतरित होती है, और P_max = |V_th|^2 / (4 R_th)।',
        bn: 'লোডে সক্রিয় ক্ষমতা P_L = |V_th|^2 R_L / [(R_th + R_L)^2 + (X_th + X_L)^2]।\nX_L এর সাপেক্ষে ব্যবকলন করে পাওয়া যায় X_L = -X_th (অনুরণন শর্ত)। এরপর R_L এর সাপেক্ষে ব্যবকলন করে পাওয়া যায় R_L = R_th। সুতরাং Z_L = Z_th* শর্তে সর্বোচ্চ ক্ষমতা হস্তান্তরিত হয় এবং P_max = |V_th|^2 / (4 R_th)।'
      }
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch12-l02-01',
      problem: {
        en: 'An AC signal generator has an open-circuit voltage V_th = 20∠0° V (RMS) and internal impedance Z_th = 15 + j20 Ω at 1 MHz. (a) Determine the load impedance Z_L required for maximum active power transfer. (b) Calculate the maximum power delivered to this load. (c) If the load is constrained to be purely resistive (R_L with X_L = 0), find the optimal value of R_L and the power delivered.',
        hi: 'एक एसी सिग्नल जनरेटर में 1 MHz पर ओपन-सर्किट वोल्टेज V_th = 20∠0° V (RMS) और आंतरिक प्रतिबाधा Z_th = 15 + j20 Ω है। (a) अधिकतम शक्ति स्थानांतरण हेतु आवश्यक लोड प्रतिबाधा Z_L ज्ञात कीजिए। (b) लोड को दी गई अधिकतम शक्ति की गणना कीजिए। (c) यदि लोड केवल प्रतिरोधी (X_L = 0) हो, तो R_L का इष्टतम मान एवं लोड शक्ति ज्ञात कीजिए।',
        bn: '১ MHz এ একটি এসি সিগন্যাল জেনারেটরের ওপেন-সার্কিট ভোল্টেজ V_th = ২০∠০° V (RMS) এবং অভ্যন্তরীণ প্রতিবাধা Z_th = ১৫ + j২০ Ω। (ক) সর্বোচ্চ সক্রিয় ক্ষমতা স্থানান্তরের জন্য প্রয়োজনীয় লোড প্রতিবাধা Z_L নির্ণয় করুন। (খ) লোডে স্থানান্তরিত সর্বোচ্চ ক্ষমতা গণনা করুন। (গ) লোডটি যদি বিশুদ্ধ রোধীয় (X_L = ০) হয়, তবে R_L এর উপযুক্ত মান ও স্থানান্তরিত ক্ষমতা নির্ণয় করুন।'
      },
      formula: {
        en: 'Z_L = Z_th* = R_th - jX_th, P_max = |V_th|^2 / (4 R_th), R_L,opt = |Z_th| = sqrt(R_th^2 + X_th^2), P_R = |V_th|^2 · R_L / [(R_th + R_L)^2 + X_th^2]',
        hi: 'Z_L = Z_th* = R_th - jX_th, P_max = |V_th|^2 / (4 R_th), R_L = |Z_th|, P_R = |V_th|^2 · R_L / [(R_th + R_L)^2 + X_th^2]',
        bn: 'Z_L = Z_th* = R_th - jX_th, P_max = |V_th|^2 / (4 R_th), R_L = |Z_th|, P_R = |V_th|^2 · R_L / [(R_th + R_L)^2 + X_th^2]'
      },
      substitution: {
        en: '(a) Z_L = 15 - j20 Ω (a 15 Ω resistor in series with a capacitor of reactance -20 Ω).\n(b) P_max = (20)^2 / (4 · 15) = 400 / 60 = 6.67 W.\n(c) For purely resistive load: R_L = sqrt(15^2 + 20^2) = sqrt(225 + 400) = sqrt(625) = 25 Ω.\nPower with R_L = 25 Ω:\nDenominator = (15 + 25)^2 + 20^2 = 40^2 + 400 = 1600 + 400 = 2000.\nP_R = [(20)^2 · 25] / 2000 = [400 · 25] / 2000 = 10000 / 2000 = 5.00 W.',
        hi: '(a) Z_L = 15 - j20 Ω।\n(b) P_max = (20)^2 / (4 × 15) = 400 / 60 = 6.67 W।\n(c) R_L = sqrt(15^2 + 20^2) = 25 Ω।\nP_R = [400 × 25] / [(40)^2 + (20)^2] = 10000 / 2000 = 5.00 W।',
        bn: '(ক) Z_L = ১৫ - j২০ Ω।\n(খ) P_max = (২০)^২ / (৪ × ১৫) = ৪০০ / ৬০ = ৬.৬৭ W।\n(গ) R_L = রুট(১৫^২ + ২০^২) = ২৫ Ω।\nP_R = [৪০০ × ২৫] / [(৪০)^২ + (২০)^২] = ১০০০০ / ২০০০ = ৫.০০ W।'
      },
      calculation: {
        en: 'Conjugate match yields 6.67 W, while the best possible pure resistor yields 5.00 W (25% less power due to uncancelled reactance).',
        hi: 'संयुग्मी मिलान से 6.67 W प्राप्त होता है, जबकि शुद्ध प्रतिरोधक से 5.00 W प्राप्त होता है।',
        bn: 'অনুবন্ধী ম্যাচিংয়ে ৬.৬৭ W পাওয়া যায়, যেখানে বিশুদ্ধ রোধে ৫.০০ W ক্ষমতা পাওয়া যায়।'
      },
      finalAnswer: {
        en: '(a) Z_L = 15 - j20 Ω; (b) P_max = 6.67 W; (c) R_L = 25 Ω, P_R = 5.00 W',
        hi: '(a) Z_L = 15 - j20 Ω; (b) P_max = 6.67 W; (c) R_L = 25 Ω, P_R = 5.00 W',
        bn: '(ক) Z_L = ১৫ - j২০ Ω; (খ) P_max = ৬.৬৭ W; (গ) R_L = ২৫ Ω, P_R = ৫.০০ W'
      }
    },
    {
      id: 'ex-ch12-l02-02',
      problem: {
        en: 'A circuit contains a branch resistor R = 10 Ω connected between node A and ground. Two AC sources at the SAME frequency (ω = 500 rad/s) drive node A: Source 1 is V_1 = 50∠0° V connected through an inductor L_1 (X_L = 10 Ω). Source 2 is V_2 = 30∠90° V connected through a capacitor C_2 (X_C = -10 Ω). Use the superposition theorem to find the total phasor voltage V_A across the 10 Ω resistor.',
        hi: 'एक परिपथ में नोड A एवं ग्राउंड के मध्य R = 10 Ω का प्रतिरोधक जुड़ा है। समान आवृत्ति पर दो स्रोत नोड A को संचालित करते हैं: स्रोत 1 V_1 = 50∠0° V प्रेरक (X_L = 10 Ω) के माध्यम से जुड़ा है। स्रोत 2 V_2 = 30∠90° V संधारित्र (X_C = -10 Ω) के माध्यम से जुड़ा है। अध्यारोपण प्रमेय द्वारा नोड A का कुल वोल्टेज V_A ज्ञात कीजिए।',
        bn: 'একটি বর্তনীতে নোড A ও গ্রাউন্ডের মাঝে R = ১০ Ω রোধ যুক্ত। একই কম্পাঙ্কের দুটি উৎস নোড A-তে সংযুক্ত: উৎস ১ V_1 = ৫০∠০° V আবেশকের (X_L = ১০ Ω) মাধ্যমে এবং উৎস ২ V_2 = ৩০∠৯০° V ধারকের (X_C = -১০ Ω) মাধ্যমে যুক্ত। উপরিপাতন উপপাদ্য ব্যবহার করে নোড A এর মোট ভোল্টেজ V_A নির্ণয় করুন।'
      },
      formula: {
        en: 'With V_2 = 0: V_A\' = V_1 · [Z_p1 / (Z_1 + Z_p1)] where Z_p1 = R || Z_2.\nWith V_1 = 0: V_A\'\' = V_2 · [Z_p2 / (Z_2 + Z_p2)] where Z_p2 = R || Z_1.\nV_A = V_A\' + V_A\'\'.',
        hi: 'V_A = V_A\' + V_A\'\'',
        bn: 'V_A = V_A\' + V_A\'\''
      },
      substitution: {
        en: 'Alternatively, apply nodal analysis for superposition verification:\n(V_A - 50∠0°) / j10 + V_A / 10 + (V_A - j30) / (-j10) = 0.\nV_A · [-j0.1 + 0.1 + j0.1] = (50 / j10) + (j30 / -j10).\nV_A · [0.1] = -j5 - 3 = -3 - j5.\nV_A = (-3 - j5) / 0.1 = -30 - j50 V.\nIn polar form: |V_A| = sqrt((-30)^2 + (-50)^2) = sqrt(900 + 2500) = sqrt(3400) = 58.31 V.\nAngle = 180° + arctan(-50 / -30) = 180° + 59.04° = -120.96° (or 239.04°).',
        hi: 'नोडल विश्लेषण द्वारा:\n(V_A - 50)/j10 + V_A/10 + (V_A - j30)/(-j10) = 0।\nV_A(0.1) = -3 - j5 → V_A = -30 - j50 V = 58.31∠-120.96° V।',
        bn: 'নোডাল বিশ্লেষণ দ্বারা:\n(V_A - ৫০)/j১০ + V_A/১০ + (V_A - j৩০)/(-j১০) = ০।\nV_A(০.১) = -৩ - j৫ → V_A = -৩০ - j৫০ V = ৫৮.৩১∠-১২০.৯৬° V।'
      },
      calculation: {
        en: 'Contribution from V_1 alone gives V_A\' = -25 - j25 V; contribution from V_2 alone gives V_A\'\' = -5 - j25 V. Sum = -30 - j50 V.',
        hi: 'V_1 का योगदान V_A\' = -25 - j25 V; V_2 का योगदान V_A\'\' = -5 - j25 V। योग = -30 - j50 V।',
        bn: 'V_1 এর অবদান V_A\' = -২৫ - j২৫ V; V_2 এর অবদান V_A\'\' = -৫ - j২৫ V। যোগফল = -৩০ - j৫০ V।'
      },
      finalAnswer: {
        en: 'V_A = -30 - j50 V = 58.31∠-120.96° V (RMS)',
        hi: 'V_A = -30 - j50 V = 58.31∠-120.96° V',
        bn: 'V_A = -৩০ - j৫০ V = ৫৮.৩১∠-১২০.৯৬° V'
      },
      }
  ],
  practicalApplications: {
    en: [
      'RF Transmitter Antenna Impedance Matching: In cellular base stations and Wi-Fi routers, antenna tuners insert conjugate matching LC networks between the power amplifier (e.g., Z_out = 5 - j15 Ω) and the 50 Ω coaxial antenna feed to maximize radiated RF power and prevent damaging reflected waves.',
      'Audio System Loudspeaker Drivers: Audio power amplifiers strive for extremely low output resistance (high damping factor) rather than maximum power transfer because a 50% loss of power in high-power amplifiers generates excessive heat, while in small-signal sensors conjugate matching is paramount.'
    ],
    hi: [
      'आरएफ ट्रांसमीटर एंटीना प्रतिबाधा मिलान: सेलुलर बेस स्टेशनों एवं वाई-फाई राउटरों में, एंटीना ट्यूनर पावर एम्पलीफायर और 50 Ω एंटीना के बीच संयुग्मी मिलान LC नेटवर्क लगाते हैं ताकि अधिकतम शक्ति प्रसारित हो सके और परावर्तित तरंगों से बचाव हो।',
      'ऑडियो सिस्टम लाउडस्पीकर ड्राइवर: ऑडियो पावर एम्पलीफायरों में अधिकतम शक्ति के बजाय बहुत कम आउटपुट प्रतिरोध का लक्ष्य रखा जाता है ताकि आंतरिक ताप कम हो, जबकि छोटे सिग्नल सेंसरों में संयुग्मी मिलान सर्वोच्च प्राथमिकता है।'
    ],
    bn: [
      'আরএফ ট্রান্সমিটার অ্যান্টেনা প্রতিবাধা ম্যাচিং: সেলুলার বেস স্টেশন ও ওয়াই-ফাই রাউটারে পাওয়ার অ্যামপ্লিফায়ার ও অ্যান্টেনার মাঝে অনুবন্ধী ম্যাচিং LC নেটওয়ার্ক ব্যবহার করে সর্বোচ্চ ক্ষমতা বিকিরণ নিশ্চিত করা হয়।',
      'অডিও সিস্টেম লাউডস্পিকার ড্রাইভার: অডিও পাওয়ার অ্যামপ্লিফায়ারে তাপ অপচয় কমাতে নিম্ন আউটপুট রোধকে অগ্রাধিকার দেওয়া হয়, তবে ক্ষুদ্র সেন্সর সিগন্যালে অনুবন্ধী ম্যাচিং অপরিহার্য।'
    ]
  },
  importantPoints: {
    en: [
      'Superposition applies directly to VOLTAGE and CURRENT phasors, NEVER to active or reactive power (P or Q) because power is a quadratic (non-linear) function of current and voltage: P ≠ P_1 + P_2 when sources are at the same frequency.',
      'At maximum power transfer under complex conjugate matching, the power transfer efficiency is precisely 50%. The internal resistance R_th dissipates exactly as much real power as the load resistor R_L.'
    ],
    hi: [
      'अध्यारोपण सीधे वोल्टेज और धारा फेजरों पर लागू होता है, सक्रिय या प्रतिक्रियाशील शक्ति (P या Q) पर कभी नहीं क्योंकि शक्ति एक द्विघात (गैर-रैखिक) फलन है।',
      'सम्मिश्र संयुग्मी मिलान के अंतर्गत अधिकतम शक्ति स्थानांतरण पर दक्षता ठीक 50% होती है। आंतरिक प्रतिरोध लोड प्रतिरोध जितनी ही शक्ति नष्ट करता है।'
    ],
    bn: [
      'উপরিপাতন সরাসরি ভোল্টেজ ও কারেন্ট ফেজরে প্রযোজ্য, কিন্তু ক্ষমতা (P বা Q) তে নয়, কারণ ক্ষমতা একটি দ্বিঘাত (অরৈখিক) রাশি।',
      'জটিল অনুবন্ধী ম্যাচিং অবস্থায় সর্বোচ্চ ক্ষমতা স্থানান্তরের ক্ষেত্রে দক্ষতা ঠিক ৫০%। অভ্যন্তরীণ রোধে লোডের সমান পরিমাণ ক্ষমতা অপচয় হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistake: Setting Z_L = Z_th (equality) instead of Z_L = Z_th* (complex conjugate) for maximum power transfer. Correction: The load reactance must have the OPPOSITE sign of the Thevenin reactance (X_L = -X_th) so that the total loop reactance cancels to zero at resonance.'
    ],
    hi: [
      'त्रुटि: अधिकतम शक्ति स्थानांतरण के लिए Z_L = Z_th* (संयुग्मी) के बजाय Z_L = Z_th (समान) सेट करना। सुधार: लोड प्रतिघात का चिह्न थेवेनिन प्रतिघात के विपरीत (X_L = -X_th) होना चाहिए ताकि कुल लूप प्रतिघात शून्य होकर अनुनाद उत्पन्न करे।'
    ],
    bn: [
      'ভুল: সর্বোচ্চ ক্ষমতা স্থানান্তরের জন্য Z_L = Z_th* (অনুবন্ধী) এর বদলে Z_L = Z_th (সমান) বিবেচনা করা। সংশোধন: মোট লুপ রিঅ্যাক্ট্যান্স শূন্য করে অনুরণন তৈরি করতে লোড রিঅ্যাক্ট্যান্সের চিহ্ন থেভেনিন রিঅ্যাক্ট্যান্সের বিপরীত (X_L = -X_th) হতে হবে।'
    ]
  },
  keyTakeaways: {
    en: [
      'For arbitrary complex loads, maximum real power is delivered when Z_L = Z_th*. If the load is constrained to be pure resistance, choose R_L = |Z_th|.'
    ],
    hi: [
      'सम्मिश्र लोड के लिए, अधिकतम वास्तविक शक्ति तब स्थानांतरित होती है जब Z_L = Z_th*। यदि लोड शुद्ध प्रतिरोधी हो, तो R_L = |Z_th| चुनें।'
    ],
    bn: [
      'জটিল লোডের ক্ষেত্রে Z_L = Z_th* হলে সর্বোচ্চ সক্রিয় ক্ষমতা স্থানান্তরিত হয়। আর লোডটি কেবল রোধীয় হলে R_L = |Z_th| নির্বাচন করতে হয়।'
    ]
  },
  practiceQuestions: [
    {
      id: 'pq-ch12-l02-01',
      question: {
        en: 'Why is maximum power transfer theorem rarely used in bulk electric power transmission systems?',
        hi: 'थोक विद्युत पारेषण प्रणालियों में अधिकतम शक्ति स्थानांतरण प्रमेय का उपयोग शायद ही कभी क्यों किया जाता है?',
        bn: 'কেন বৃহৎ বৈদ্যুতিক শক্তি সঞ্চালন ব্যবস্থায় সর্বোচ্চ ক্ষমতা স্থানান্তর উপপাদ্য সচরাচর ব্যবহার করা হয় না?'
      },
      hint: {
        en: 'Consider the 50% efficiency limit and what dissipating gigawatts of heat inside generator/transmission line resistance would do.',
        hi: '50% दक्षता सीमा पर विचार करें और सोचें कि ट्रांसमिशन लाइनों में गीगावाट ताप नष्ट होने से क्या होगा।',
        bn: '৫০% দক্ষতা সীমাবদ্ধতা এবং জেনারেটর ও লাইনে গিগাওয়াট তাপ অপচয়ের ক্ষতিকর প্রভাব বিবেচনা করুন।'
      }
    },
    {
      id: 'pq-ch12-l02-02',
      question: {
        en: 'An AC source has Z_th = 40 + j30 Ω. What is the value of the load impedance Z_L for maximum active power, and what is its nature (capacitive or inductive)?',
        hi: 'एक एसी स्रोत में Z_th = 40 + j30 Ω है। अधिकतम शक्ति के लिए लोड प्रतिबाधा Z_L का मान क्या होगा, और इसकी प्रकृति (धारितीय या प्रेरकीय) क्या होगी?',
        bn: 'একটি এসি উৎসের Z_th = ৪০ + j৩০ Ω। সর্বোচ্চ সক্রিয় ক্ষমতার জন্য লোড প্রতিবাধা Z_L এর মান কত হবে এবং এর প্রকৃতি কেমন হবে?'
      },
      hint: {
        en: 'Z_L = Z_th* = 40 - j30 Ω. The -j indicates a capacitive reactance.',
        hi: 'Z_L = 40 - j30 Ω (धारितीय प्रतिघात)।',
        bn: 'Z_L = ৪০ - j৩০ Ω (ধারকীয় রিঅ্যাক্ট্যান্স)।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch12-l02-01',
      question: {
        en: 'For an AC source with internal impedance Z_th = R_th + jX_th, maximum real power is delivered to an unrestricted complex load Z_L when:',
        hi: 'आंतरिक प्रतिबाधा Z_th = R_th + jX_th वाले एसी स्रोत के लिए, अप्रतिबंधित सम्मिश्र लोड Z_L को अधिकतम वास्तविक शक्ति तब मिलती है जब:',
        bn: 'আভ্যন্তরীণ প্রতিবাধা Z_th = R_th + jX_th বিশিষ্ট এসি উৎসের ক্ষেত্রে লোডে সর্বোচ্চ সক্রিয় ক্ষমতা স্থানান্তরিত হয় যখন:'
      },
      options: [
        { id: 'opt-1', text: { en: 'Z_L = Z_th', hi: 'Z_L = Z_th', bn: 'Z_L = Z_th' } },
        { id: 'opt-2', text: { en: 'Z_L = Z_th* = R_th - jX_th', hi: 'Z_L = Z_th* = R_th - jX_th', bn: 'Z_L = Z_th* = R_th - jX_th' } },
        { id: 'opt-3', text: { en: 'Z_L = -Z_th', hi: 'Z_L = -Z_th', bn: 'Z_L = -Z_th' } },
        { id: 'opt-4', text: { en: 'R_L = 0 and X_L = X_th', hi: 'R_L = 0 और X_L = X_th', bn: 'R_L = ০ এবং X_L = X_th' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Maximum power transfer occurs under complex conjugate matching Z_L = Z_th*, which sets R_L = R_th and cancels the total net loop reactance (X_L + X_th = 0).',
        hi: 'अधिकतम शक्ति स्थानांतरण सम्मिश्र संयुग्मी मिलान Z_L = Z_th* के तहत होता है, जो R_L = R_th करता है और कुल लूप प्रतिघात को रद्द करता है।',
        bn: 'জটিল অনুবন্ধী ম্যাচিং Z_L = Z_th* এর শর্তে সর্বোচ্চ ক্ষমতা হস্তান্তরিত হয়, যাতে R_L = R_th হয় এবং মোট রিঅ্যাক্ট্যান্স নাকচ হয়।'
      }
    },
    {
      id: 'mcq-ch12-l02-02',
      question: {
        en: 'What is the theoretical power transfer efficiency at the maximum power transfer operating point in an AC circuit?',
        hi: 'एसी परिपथ में अधिकतम शक्ति स्थानांतरण बिंदु पर सैद्धांतिक शक्ति स्थानांतरण दक्षता क्या होती है?',
        bn: 'এসি বর্তনীতে সর্বোচ্চ ক্ষমতা স্থানান্তর অপারেটিং পয়েন্টে তাত্ত্বিক ক্ষমতা স্থানান্তর দক্ষতা কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '100%', hi: '100%', bn: '১০০%' } },
        { id: 'opt-2', text: { en: '70.7%', hi: '70.7%', bn: '৭০.৭%' } },
        { id: 'opt-3', text: { en: '50%', hi: '50%', bn: '৫০%' } },
        { id: 'opt-4', text: { en: '25%', hi: '25%', bn: '২৫%' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'Because R_L = R_th and the same current flows through both, identical power is dissipated in the source resistance as in the load, giving η = P_L / (P_th + P_L) = 50%.',
        hi: 'क्योंकि R_L = R_th है और दोनों से समान धारा बहती है, स्रोत और लोड में समान शक्ति नष्ट होती है, जिससे दक्षता ठीक 50% होती है।',
        bn: 'যেহেতু R_L = R_th এবং উভয়ের মধ্য দিয়ে একই কারেন্ট প্রবাহিত হয়, তাই উৎস ও লোডে সমান ক্ষমতা ক্ষয় হয়, ফলে দক্ষতা ৫০% হয়।'
      }
    },
    {
      id: 'mcq-ch12-l02-03',
      question: {
        en: 'If a load connected to an AC source with Z_th = 8 + j6 Ω is constrained to be PURELY RESISTIVE (X_L = 0), what should R_L be for maximum power transfer?',
        hi: 'यदि Z_th = 8 + j6 Ω वाले एसी स्रोत से जुड़ा लोड केवल प्रतिरोधी (X_L = 0) होने के लिए बाध्य है, तो अधिकतम शक्ति के लिए R_L क्या होना चाहिए?',
        bn: 'যদি Z_th = ৮ + j৬ Ω বিশিষ্ট উৎসের সাথে যুক্ত লোডটি কেবল বিশুদ্ধ রোধীয় (X_L = ০) হতে বাধ্য হয়, তবে সর্বোচ্চ ক্ষমতার জন্য R_L কত হবে?'
      },
      options: [
        { id: 'opt-1', text: { en: '8 Ω', hi: '8 Ω', bn: '৮ Ω' } },
        { id: 'opt-2', text: { en: '14 Ω', hi: '14 Ω', bn: '১৪ Ω' } },
        { id: 'opt-3', text: { en: '10 Ω', hi: '10 Ω', bn: '১০ Ω' } },
        { id: 'opt-4', text: { en: '6 Ω', hi: '6 Ω', bn: '৬ Ω' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'When the load is purely resistive, the condition for maximum power transfer is R_L = |Z_th| = sqrt(8^2 + 6^2) = sqrt(64 + 36) = 10 Ω.',
        hi: 'जब लोड शुद्ध प्रतिरोधी होता है, तो R_L = |Z_th| = sqrt(8^2 + 6^2) = 10 Ω।',
        bn: 'লোড বিশুদ্ধ রোধীয় হলে সর্বোচ্চ ক্ষমতার শর্ত R_L = |Z_th| = রুট(৮^২ + ৬^২) = ১০ Ω।'
      }
    },
    {
      id: 'mcq-ch12-l02-04',
      question: {
        en: 'Why CANNOT phasor superposition be applied directly by adding phasors when sources operate at different frequencies (e.g., 50 Hz and 120 Hz)?',
        hi: 'जब स्रोत भिन्न आवृत्तियों (उदा. 50 Hz और 120 Hz) पर कार्य करते हैं, तो फेजरों को सीधे जोड़कर फेजर अध्यारोपण क्यों नहीं किया जा सकता?',
        bn: 'ভিন্ন ভিন্ন কম্পাঙ্কের (যেমন ৫০ Hz ও ১২০ Hz) উৎসের ক্ষেত্রে সরাসরি ফেজর যোগ করে উপরিপাতন করা যায় না কেন?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Inductors become non-linear at higher frequencies', hi: 'उच्च आवृत्तियों पर प्रेरक गैर-रैखिक हो जाते हैं', bn: 'উচ্চ কম্পাঙ্কে আবেশক অরৈখিক আচরণ করে' } },
        { id: 'opt-2', text: { en: 'Phasors defined at different frequencies rotate at different angular velocities and cannot exist on a single stationary complex plane', hi: 'भिन्न आवृत्तियों के फेजर भिन्न कोणीय वेग से घूमते हैं और एक ही स्थिर सम्मिश्र तल पर नहीं रह सकते', bn: 'ভিন্ন কম্পাঙ্কের ফেজরগুলো ভিন্ন কৌণিক বেগে ঘোরে এবং একটি নির্দিষ্ট জটিল তলে স্থির থাকে না' } },
        { id: 'opt-3', text: { en: 'The superposition theorem is strictly a DC theorem', hi: 'अध्यारोपण प्रमेय केवल डीसी प्रमेय है', bn: 'উপরিপাতন উপপাদ্য শুধুমাত্র ডিসির জন্য প্রযোজ্য' } },
        { id: 'opt-4', text: { en: 'Kirchhoff’s laws fail in multi-frequency circuits', hi: 'बहु-आवृत्ति परिपथों में किरचॉफ के नियम विफल हो जाते हैं', bn: 'বহু-কম্পাঙ্ক বর্তনীতে কার্শফের সূত্র ব্যর্থ হয়' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Phasors are frozen snapshots rotating at e^(jωt). If ω differs, their phase relationship changes continuously with time. Thus, each frequency must be analyzed independently and combined in the time domain.',
        hi: 'फेजर e^(jωt) पर घूमते हैं। यदि ω भिन्न हो, तो उनका संबंध समय के साथ बदलता रहता है। इसलिए प्रत्येक आवृत्ति का अलग विश्लेषण करके समय डोमेन में जोड़ना पड़ता है।',
        bn: 'ফেজরগুলো e^(jωt) বেগে ঘোরে। কম্পাঙ্ক ভিন্ন হলে তাদের আপেক্ষিক কোণ সময়ের সাথে পরিবর্তিত হয়। তাই আলাদা সমাধান করে টাইম ডোমেনে যোগ করতে হয়।'
      }
    },
    {
      id: 'mcq-ch12-l02-05',
      question: {
        en: 'An AC circuit delivers maximum active power to a conjugate-matched load. If |V_th| = 100 V RMS and R_th = 25 Ω, what is P_max?',
        hi: 'एक एसी परिपथ संयुग्मी-मिलान वाले लोड को अधिकतम शक्ति देता है। यदि |V_th| = 100 V RMS और R_th = 25 Ω है, तो P_max क्या है?',
        bn: 'একটি এসি বর্তনী অনুবন্ধী-ম্যাচিং লোডে সর্বোচ্চ ক্ষমতা দেয়। যদি |V_th| = ১০০ V RMS এবং R_th = ২৫ Ω হয়, তবে P_max কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '400 W', hi: '400 W', bn: '৪০০ W' } },
        { id: 'opt-2', text: { en: '100 W', hi: '100 W', bn: '১০০ W' } },
        { id: 'opt-3', text: { en: '200 W', hi: '200 W', bn: '২০০ W' } },
        { id: 'opt-4', text: { en: '50 W', hi: '50 W', bn: '৫০ W' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'P_max = |V_th|^2 / (4 R_th) = (100)^2 / (4 · 25) = 10,000 / 100 = 100 W.',
        hi: 'P_max = (100)^2 / (4 × 25) = 10000 / 100 = 100 W।',
        bn: 'P_max = (১০০)^২ / (৪ × ২৫) = ১০০০০ / ১০০ = ১০০ W।'
      }
    },
    {
      id: 'mcq-ch12-l02-06',
      question: {
        en: 'Can the superposition theorem be used to calculate total active power P_total directly by summing the power caused by individual sources at the same frequency (i.e., P_total = P_1 + P_2)?',
        hi: 'क्या समान आवृत्ति पर व्यक्तिगत स्रोतों द्वारा उत्पन्न शक्तियों को सीधे जोड़कर (P_total = P_1 + P_2) कुल सक्रिय शक्ति की गणना की जा सकती है?',
        bn: 'একই কম্পাঙ্কের পৃথক উৎসের ক্ষমতা সরাসরি যোগ করে (P_total = P_1 + P_2) কি মোট সক্রিয় ক্ষমতা নির্ণয় করা যায়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Yes, because power is conserved in all electrical networks', hi: 'हाँ, क्योंकि सभी विद्युत नेटवर्कों में शक्ति संरक्षित रहती है', bn: 'হ্যাঁ, কারণ সকল বৈদ্যুতিক নেটওয়ার্কে ক্ষমতা সংরক্ষিত থাকে' } },
        { id: 'opt-2', text: { en: 'No, because power is non-linear (proportional to current squared), producing cross-product interference terms', hi: 'नहीं, क्योंकि शक्ति गैर-रैखिक है (धारा के वर्ग के समानुपाती), जिससे क्रॉस-प्रोडक्ट पद उत्पन्न होते हैं', bn: 'না, কারণ ক্ষমতা অরৈখিক (কারেন্টের বর্গের সমানুপাতিক), যা ক্রস-গুণফল তৈরি করে' } },
        { id: 'opt-3', text: { en: 'Yes, but only if the circuit contains no inductors', hi: 'हाँ, लेकिन केवल तभी जब परिपथ में कोई प्रेरक न हो', bn: 'হ্যাঁ, তবে কেবল বর্তনীতে কোনো আবেশক না থাকলে' } },
        { id: 'opt-4', text: { en: 'Yes, if the phase difference between sources is 90°', hi: 'हाँ, यदि स्रोतों के बीच 90° का कलान्तर हो', bn: 'হ্যাঁ, যদি উৎসদ্বয়ের মাঝে ৯০° দশা পার্থক্য থাকে' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Superposition applies only to linear quantities (voltage and current). Power P = |I_1 + I_2|^2 R = (|I_1|^2 + |I_2|^2 + 2 Re{I_1 · I_2*}) R ≠ P_1 + P_2.',
        hi: 'अध्यारोपण केवल रैखिक राशियों (V और I) पर लागू होता है। P = |I_1 + I_2|^2 R में क्रॉस पद शामिल होता है, इसलिए P ≠ P_1 + P_2।',
        bn: 'উপরিপাতন কেবল রৈখিক রাশিতে (ভোল্টেজ ও কারেন্ট) প্রযোজ্য। ক্ষমতায় ক্রস টার্ম থাকার কারণে P ≠ P_1 + P_2।'
      }
    },
    {
      id: 'mcq-ch12-l02-07',
      question: {
        en: 'In an AC circuit where V_th = 60∠30° V and Z_th = 12 - j16 Ω, what is the reactive part of the load X_L needed for conjugate matching?',
        hi: 'एक एसी परिपथ में जहाँ V_th = 60∠30° V और Z_th = 12 - j16 Ω है, संयुग्मी मिलान हेतु आवश्यक लोड का प्रतिक्रियाशील भाग X_L क्या है?',
        bn: 'একটি এসি বর্তনীতে V_th = ৬০∠৩০° V এবং Z_th = ১২ - j১৬ Ω হলে অনুবন্ধী ম্যাচিংয়ের জন্য প্রয়োজনীয় লোড রিঅ্যাক্ট্যান্স X_L কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '-16 Ω (capacitive)', hi: '-16 Ω (धारितीय)', bn: '-১৬ Ω (ধারকীয়)' } },
        { id: 'opt-2', text: { en: '+16 Ω (inductive)', hi: '+16 Ω (प्रेरकीय)', bn: '+১৬ Ω (আবেশীয়)' } },
        { id: 'opt-3', text: { en: '0 Ω (resistive)', hi: '0 Ω (प्रतिरोधी)', bn: '০ Ω (রোধীয়)' } },
        { id: 'opt-4', text: { en: '+20 Ω', hi: '+20 Ω', bn: '+২০ Ω' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Since Z_th has a capacitive reactance of -j16 Ω, the complex conjugate Z_th* requires X_L = +16 Ω (an inductor), which cancels the internal capacitance at resonance.',
        hi: 'चूँकि Z_th में -j16 Ω का धारिता प्रतिघात है, इसलिए संयुग्मी मिलान के लिए X_L = +16 Ω (प्रेरक) आवश्यक है ताकि अनुनाद उत्पन्न हो सके।',
        bn: 'যেহেতু Z_th এ -j১৬ Ω ধারকীয় রিঅ্যাক্ট্যান্স আছে, তাই অনুবন্ধী ম্যাচিংয়ে অনুরণন ঘটাতে X_L = +১৬ Ω (আবেশক) প্রয়োজন।'
      }
    },
    {
      id: 'mcq-ch12-l02-08',
      question: {
        en: 'A circuit is excited simultaneously by a DC battery V_dc = 10 V and an AC generator v_ac(t) = 14.14 cos(1000t) V across a 10 Ω resistor. What is the total average power dissipated in the resistor?',
        hi: 'एक 10 Ω प्रतिरोधक पर 10 V की डीसी बैटरी एवं v_ac(t) = 14.14 cos(1000t) V का एसी जनरेटर एक साथ लगाया गया है। प्रतिरोधक में कुल औसत शक्ति क्या होगी?',
        bn: '১০ Ω রোধের সাথে একটি ১০ V ডিসি ব্যাটারি এবং v_ac(t) = ১৪.১৪ cos(১০০০t) V এসি জেনারেটর যুক্ত করা হলো। রোধটিতে মোট গড় ক্ষমতা কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '10 W', hi: '10 W', bn: '১০ W' } },
        { id: 'opt-2', text: { en: '20 W', hi: '20 W', bn: '২০ W' } },
        { id: 'opt-3', text: { en: '30 W', hi: '30 W', bn: '৩০ W' } },
        { id: 'opt-4', text: { en: '15 W', hi: '15 W', bn: '১৫ W' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'For signals at different frequencies (DC is 0 Hz, AC is 1000 rad/s), average powers add directly: P_dc = V_dc^2 / R = 100 / 10 = 10 W. V_ac,rms = 14.14 / √2 = 10 V, so P_ac = 10^2 / 10 = 10 W. P_total = 10 + 10 = 20 W.',
        hi: 'भिन्न आवृत्तियों के लिए औसत शक्तियाँ सीधे जुड़ती हैं: P_dc = 10^2 / 10 = 10 W। P_ac = (10)^2 / 10 = 10 W। कुल शक्ति = 10 + 10 = 20 W।',
        bn: 'ভিন্ন কম্পাঙ্কের সংকেতের ক্ষেত্রে গড় ক্ষমতা সরাসরি যোগ হয়: P_dc = ১০^২ / ১০ = ১০ W। P_ac = (১০)^২ / ১০ = ১০ W। মোট ক্ষমতা = ১০ + ১০ = ২০ W।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ch12-l02-01',
      title: {
        en: 'AC Maximum Power Transfer and Superposition Topologies',
        hi: 'परिपथ योजनाबद्ध आरेख',
        bn: 'বর্তনী স্কিম্যাটিক চিত্র'
      },
      caption: {
        en: 'AC Maximum Power Transfer and Superposition Topologies',
        hi: 'एसी अधिकतम शक्ति स्थानांतरण एवं अध्यारोपण टोपोलॉजी',
        bn: 'এসি সর্বোচ্চ ক্ষমতা স্থানান্তর ও উপরিপাতন টপোলজি'
      },
      svgType: 'circuit-ch12-ac-superposition-max-power'
    }
  ]
};
