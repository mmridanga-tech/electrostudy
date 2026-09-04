import { Lesson } from '../types';

export const LESSON_BODE_PLOTS_FREQUENCY_RESPONSE: Lesson = {
  id: 'lsn-ch12-bode-plots-frequency-response',
  topicId: 'tp-rlc-circuit',
  chapterId: 'ch-ac-circuits',
  order: 6,
  title: {
    en: 'Bode Plots & Frequency Response of AC Circuits',
    hi: 'बोडे प्लॉट एवं एसी परिपथों की आवृत्ति अनुक्रिया',
    bn: 'বোড প্লট ও এসি বর্তনীর কম্পাঙ্ক প্রতিক্রিয়া'
  },
  description: {
    en: 'Master frequency-domain network transfer functions H(jω), logarithmic decibel scales, decade/octave axes, asymptotic Bode magnitude and phase approximations, corner break frequencies, second-order quadratic poles with damping ratio ζ and resonance peaking Mp, bandwidth, and gain/phase margin stability analysis.',
    hi: 'आवृत्ति-डोमेन नेटवर्क ट्रांसफर फंक्शन H(jω), लघुगणकीय डेसिबल पैमानों, दशक/अष्टक अक्षों, असममित बोडे परिमाण एवं कला सन्निकटनों, कॉर्नर ब्रेक आवृत्तियों, अवमंदन अनुपात ζ एवं अनुनादी शिखर Mp वाले द्वितीय-कोटि द्विघात ध्रुवों, बैंडविड्थ, और गेन/फेज मार्जिन स्थिरता विश्लेषण में महारत हासिल करें।',
    bn: 'কম্পাঙ্ক-ডোমেন নেটওয়ার্ক ট্রান্সফার ফাংশন H(jω), লগারিদমিক ডেসিবেল স্কেল, ডেকেড/অক্টেভ অক্ষ, অ্যাসিম্পটোটিক বোড ম্যাগনিটিউড ও ফেজ চিত্র, কাট-অফ ব্রেক কম্পাঙ্ক, ড্যাম্পিং অনুপাত ζ ও রেজোন্যান্ট পিক Mp সহ দ্বিতীয়-ক্রমের পোল, ব্যান্ডউইথ এবং গেইন/ফেজ মার্জিন স্থায়িত্ব বিশ্লেষণ পুঙ্খানুপুঙ্খভাবে শিখুন।'
  },
  estimatedMinutes: 42,
  easyExplanation: {
    en: 'When AC signals pass through linear circuits containing resistors, capacitors, and inductors, both the signal amplitude (gain) and the timing (phase shift) change as the frequency changes. A Bode plot is the universal engineering method for visualizing this frequency response. Invented by Hendrik Wade Bode at Bell Labs, it splits the circuit behavior into two separate graphs plotted against frequency on a logarithmic scale: (1) Magnitude in decibels (dB), where multiplication of gains turns into simple addition, and (2) Phase in degrees (°). Instead of calculating complex math for every frequency point, engineers use straight-line asymptotic approximations. At low frequencies, response curves follow simple horizontal lines, and past a corner frequency (break frequency), they roll off along straight lines sloping at -20 dB per decade (for single-pole circuits) or -40 dB per decade (for second-order RLC circuits). In resonant systems, a sharp resonant peak appears near the corner frequency before plunging downward.',
    hi: 'जब एसी संकेत प्रतिरोधकों, संधारित्रों और प्रेरकों वाले परिपथों से गुजरते हैं, तो संकेत का परिमाण (गेन) और कला (फेज) आवृत्ति के अनुसार बदलते हैं। बोडे प्लॉट (Bode Plot) इस आवृत्ति अनुक्रिया को चित्रित करने की मानक इंजीनियरिंग विधि है। बेल लैब्स के हेंड्रिक वेड बोडे द्वारा विकसित इस तकनीक में दो आलेख होते हैं जिन्हें लघुगणकीय आवृत्ति अक्ष पर बनाया जाता है: (1) डेसिबल (dB) में परिमाण आलेख, और (2) डिग्री (°) में कला आलेख। इंजीनियर जटिल गणनाओं के बजाय सीधी असममित रेखाओं (asymptotes) का उपयोग करते हैं। कॉर्नर आवृत्ति (ब्रेक फ्रीक्वेंसी) से आगे वक्र -20 dB प्रति दशक (प्रथम-कोटि) या -40 dB प्रति दशक (द्वितीय-कोटि RLC) की ढलान से गिरता है। अनुनादी परिपथों में कॉर्नर आवृत्ति के पास एक तीखा शिखर (resonant peak) भी प्रकट होता है।',
    bn: 'যখন এসি সিগন্যাল রোধ, ধারক ও আবেশকযুক্ত বর্তনীর মধ্য দিয়ে যায়, তখন কম্পাঙ্কের পরিবর্তনের সাথে সাথে সিগন্যালের মান (গেইন) এবং সময়কাল (ফেজ) উভয়ই পরিবর্তিত হয়। বোড প্লট হলো এই কম্পাঙ্ক প্রতিক্রিয়া বিশ্লেষণের সর্বজনীন ইঞ্জিনিয়ারিং পদ্ধতি। এতে লগারিদমিক কম্পাঙ্ক অক্ষের বিপরীতে দুটি আলাদা গ্রাফ আঁকা হয়: (১) ডেসিবেলে (dB) ম্যাগনিটিউড গ্রাফ, এবং (২) ডিগ্রিতে (°) ফেজ গ্রাফ। জটিল সমীকরণ এড়িয়ে সরলরৈখিক অ্যাসিম্পটোট ব্যবহার করে সহজেই এটি অঙ্কন করা যায়। কাট-অফ কম্পাঙ্ক পেরিয়ে গেলে রেখাটি প্রতি দশকে -২০ dB (একক পোলের জন্য) বা প্রতি দশকে -৪০ dB (দ্বিতীয়-ক্রম RLC এর জন্য) ঢালে নামতে থাকে। রেজোন্যান্ট বর্তনীতে কাট-অফের কাছে একটি তীক্ষ্ণ পিক তৈরি হয়।'
  },
  detailedExplanation: {
    en: '1. Network Transfer Functions in the Frequency Domain:\nIn linear, time-invariant (LTI) AC circuits operating in sinusoidal steady-state, the system behavior is fully described by the complex transfer function H(s) evaluated on the imaginary axis s = jω:\nH(jω) = V_out(jω) / V_in(jω) = |H(jω)| e^{j∠H(jω)} = |H(jω)| ∠θ(ω).\n- Magnitude Response: Gain |H(jω)| = |V_out| / |V_in|.\n- Decibel (dB) Magnitude: |H(jω)|_{dB} = 20 log10 |H(jω)|.\n- Phase Response: θ(ω) = ∠H(jω) = ∠V_out(jω) - ∠V_in(jω) in degrees or radians.\n\n2. The Decibel Scale & Logarithmic Frequency Axis:\n- Why Decibels? Using logarithms transforms cascading series stages from multiplication into simple linear addition:\n  |H_total(jω)| = |H_1| · |H_2|  ⇒  |H_total|_{dB} = |H_1|_{dB} + |H_2|_{dB}.\n- Decades and Octaves:\n  A decade represents a ten-fold increase in frequency: ω_2 / ω_1 = 10.\n  An octave represents a two-fold doubling in frequency: ω_2 / ω_1 = 2.\n  Conversion: 20 dB/decade = 20 log10(2) ≈ 6.02 dB/octave (commonly simplified as 6 dB/octave).\n\n3. Corner (Break) Frequency & Asymptotic Straight-Line Approximations:\nConsider the standard first-order low-pass transfer function with a real pole at s = -p = -ω_c:\nH(jω) = K / [1 + j(ω / ω_c)].\n- Low-frequency asymptote (ω << ω_c): |H(jω)| ≈ K  ⇒  |H|_{dB} = 20 log10(K) (a flat horizontal line).\n- High-frequency asymptote (ω >> ω_c): |H(jω)| ≈ K / (jω / ω_c)  ⇒  |H|_{dB} = 20 log10(K) - 20 log10(ω / ω_c).\n  This represents a straight line with a constant slope of -20 dB/decade (-6 dB/octave).\n- Corner Frequency (ω = ω_c):\n  The two asymptotes intersect precisely at ω = ω_c where asymptotic gain is 20 log10(K).\n  The exact actual magnitude is |H(jω_c)| = K / √[1 + 1²] = K / √2.\n  In dB: |H(jω_c)|_{dB} = 20 log10(K) - 20 log10(√2) = 20 log10(K) - 3.01 dB.\n  The maximum discrepancy (asymptotic error) between the straight-line approximation and true response is exactly 3.01 dB at the corner!\n- Phase Asymptote for a Single Real Pole:\n  Actual phase: θ(ω) = -arctan(ω / ω_c).\n  Asymptotic approximation: 0° for ω ≤ 0.1 ω_c; a straight sloping line at -45°/decade between 0.1 ω_c and 10 ω_c; passing through -45° at ω = ω_c; and -90° for ω ≥ 10 ω_c.\n\n4. First-Order Bode Factor Catalog:\n- Constant Gain K: Flat line at 20 log10|K| dB; phase 0° (if K > 0) or -180° (if K < 0).\n- Pole at Origin (1 / s): Continuous slope of -20 dB/decade passing through 0 dB at ω = 1 rad/s; constant phase of -90°.\n- Zero at Origin (s): Continuous slope of +20 dB/decade passing through 0 dB at ω = 1 rad/s; constant phase of +90°.\n- Simple Zero (1 + s / ω_z): 0 dB for ω < ω_z; rises at +20 dB/decade for ω > ω_z; phase goes from 0° to +90° (+45° at ω_z).\n- Simple Pole (1 / [1 + s / ω_p]): 0 dB for ω < ω_p; rolls off at -20 dB/decade for ω > ω_p; phase goes from 0° to -90° (-45° at ω_p).\n\n5. Second-Order Systems (Quadratic Poles & Resonance):\nThe canonical second-order transfer function is expressed in standard form as:\nH(s) = ω_0² / [s² + 2ζ ω_0 s + ω_0²] = 1 / [ (1 - (ω/ω_0)²) + j 2ζ (ω/ω_0) ],\nwhere ω_0 is the undamped natural frequency and ζ is the damping ratio (ζ = 1 / (2Q)).\n- High-frequency asymptote (ω >> ω_0): drops as 1 / ω², rolling off at -40 dB/decade (-12 dB/octave).\n- Resonant Peaking (Underdamped systems with ζ < 1/√2 ≈ 0.707 or Q > 0.707):\n  The magnitude exhibits a distinct peak Mp at the resonant frequency ω_p = ω_0 √(1 - 2ζ²).\n  The maximum peak magnitude is: M_p = 1 / [2ζ √(1 - ζ²)].\n  For high Q (low damping ζ << 1): ω_p ≈ ω_0 and M_p ≈ Q (in dB: M_{p,dB} ≈ 20 log10(Q)).\n- Second-Order Phase Response:\n  At DC: 0°.\n  At resonance (ω = ω_0): exactly -90° regardless of damping ζ.\n  At high frequencies (ω >> ω_0): approaches -180° asymptotically.\n\n6. Engineering Interpretation: Stability & System Compensation:\n- Gain Margin (GM): The difference between 0 dB and the actual gain at the phase crossover frequency ω_π (where phase = -180°). GM = -|H(jω_π)|_{dB}.\n- Phase Margin (PM): The difference between the actual phase and -180° at the gain crossover frequency ω_g (where gain = 0 dB). PM = 180° + ∠H(jω_g).\n- Stable closed-loop feedback requires both GM > 0 dB (typically ≥ 6 to 10 dB) and PM > 0° (typically ≥ 45° to 60°) to prevent oscillations.',
    hi: '1. ट्रांसफर फंक्शन H(jω) = V_out / V_in = |H| ∠θ। परिमाण dB में: 20 log10 |H|।\n2. डेसिबल पैमाना: चरणों को गुणा करने के बजाय सीधे जोड़ दिया जाता है। 1 दशक = 10 गुना आवृत्ति = 20 dB। 1 अष्टक (ऑक्टेव) = 2 गुना आवृत्ति = 6 dB।\n3. कॉर्नर आवृत्ति एवं असममित रेखाएँ: H(jω) = K / (1 + jω/ω_c)।\n- कम आवृत्ति पर क्षैतिज रेखा (20 log10 K)।\n- उच्च आवृत्ति पर -20 dB/decade की ढलान।\n- कॉर्नर आवृत्ति पर वास्तविक मान असममित रेखा से ठीक 3.01 dB नीचे होता है और कला कोण -45° होता है।\n4. द्वितीय-कोटि परिपथ (RLC): H(s) = ω_0² / (s² + 2ζω_0 s + ω_0²)।\n- उच्च आवृत्ति पर रोल-ऑफ -40 dB/decade (-12 dB/octave) होता है।\n- यदि अवमंदन ζ < 0.707 (या Q > 0.707) हो, तो अनुनादी शिखर M_p = 1 / [2ζ√(1-ζ²)] उत्पन्न होता है।\n- कला कोण 0° से शुरू होकर अनुनाद पर -90° और अंत में -180° तक जाता है।\n5. स्थिरता विश्लेषण: गेन मार्जिन (GM) और फेज मार्जिन (PM) फीडबैक सिस्टम में स्थिरता सुनिश्चित करते हैं (PM ≥ 45° आदर्श)।',
    bn: '১. ট্রান্সফার ফাংশন H(jω) = V_out / V_in = |H| ∠θ। ডেসিবেলে মান: ২০ log10 |H|।\n২. ডেসিবেল স্কেল: একাধিক ধাপের গেইন সরাসরি যোগ করা যায়। ১ ডেকেড = ১০ গুণ কম্পাঙ্ক = ২০ dB। ১ অক্টেভ = ২ গুণ কম্পাঙ্ক = ৬ dB।\n৩. কাট-অফ কম্পাঙ্ক ও সরলরৈখিক অ্যাসিম্পটোট: H(jω) = K / (১ + jω/ω_c)।\n- নিম্ন কম্পাঙ্কে সমান্তরাল সরলরেখা।\n- কাট-অফের পর প্রতি দশকে -২০ dB হারে নামে।\n- কাট-অফে প্রকৃত প্রতিক্রিয়া অ্যাসিম্পটোট থেকে ঠিক ৩.০১ dB নিচে থাকে এবং ফেজ কোণ -৪৫° হয়।\n৪. দ্বিতীয়-ক্রমের RLC বর্তনী: H(s) = ω_0² / (s² + ২ζω_0 s + ω_0²)।\n- উচ্চ কম্পাঙ্কে রোল-অফ -৪০ dB/decade (-১২ dB/octave)।\n- ড্যাম্পিং ζ < ০.৭০৭ (বা Q > ০.৭০৭) হলে রেজোন্যান্ট পিক M_p তৈরি হয়।\n- ফেজ কোণ ০° থেকে অনুরণনে -৯০° এবং উচ্চ কম্পাঙ্কে -১৮০° তে পৌঁছায়।\n৫. সিস্টেমের স্থায়িত্ব: গেইন মার্জিন (GM) এবং ফেজ মার্জিন (PM) এর মান ধনাত্মক হলে সিস্টেম স্থিতিশীল থাকে।'
  },
  formulas: [
    {
      id: 'f-transfer-func-db',
      symbol: '|H|_{dB}',
      expression: '|H(j\\omega)|_{dB} = 20 \\log_{10} |H(j\\omega)| = 20 \\log_{10} \\left| \\frac{\\mathbf{V}_{out}(j\\omega)}{\\mathbf{V}_{in}(j\\omega)} \\right|',
      title: {
        en: 'Bode Decibel Magnitude Definition',
        hi: 'बोडे डेसिबल परिमाण परिभाषा',
        bn: 'বোড ডেসিবেল ম্যাগনিটিউড সংজ্ঞা'
      },
      description: {
        en: 'Converts voltage transfer gain to logarithmic decibels for additive cascading on Bode plots.',
        hi: 'बोडे प्लॉट पर योगात्मक विश्लेषण के लिए वोल्टेज गेन को डेसिबल में बदलता है।',
        bn: 'বোড প্লটে সহজে যোগ করার জন্য ভোল্টেজ গেইনকে ডেসিবেলে রূপান্তর করে।'
      },
      variables: [
        { symbol: '|H|_{dB}', name: { en: 'Magnitude in decibels (dB)', hi: 'डेसिबल में परिमाण (dB)', bn: 'ডেসিবেলে মান (dB)' } },
        { symbol: 'V_out, V_in', name: { en: 'Output and input voltage phasors (V)', hi: 'आउटपुट एवं इनपुट फेजर (V)', bn: 'আউটপুট ও ইনপুট ফেজর (V)' } }
      ]
    },
    {
      id: 'f-corner-break-frequency',
      symbol: '\\omega_c',
      expression: '\\omega_c = \\frac{1}{\\tau}, \\quad f_c = \\frac{\\omega_c}{2\\pi} = \\frac{1}{2\\pi \\tau}',
      title: {
        en: 'Corner (Break) Frequency for First-Order Systems',
        hi: 'प्रथम-कोटि सिस्टम की कॉर्नर (ब्रेक) आवृत्ति',
        bn: 'প্রথম-ক্রম সিস্টেমের ব্রেক (কাট-অফ) কম্পাঙ্ক'
      },
      description: {
        en: 'The frequency where asymptotes intersect and actual response is exactly -3.01 dB below the low-frequency asymptote.',
        hi: 'वह आवृत्ति जहाँ असममित रेखाएँ मिलती हैं और वास्तविक वक्र 3.01 dB नीचे होता है।',
        bn: 'যে কম্পাঙ্কে অ্যাসিম্পটোট রেখাদ্বয় ছেদ করে এবং প্রকৃত মান ৩.০১ dB নিচে থাকে।'
      },
      variables: [
        { symbol: 'ω_c', name: { en: 'Corner angular frequency (rad/s)', hi: 'कॉर्नर कोणीय आवृत्ति (rad/s)', bn: 'কৌণিক কাট-অফ কম্পাঙ্ক (rad/s)' } },
        { symbol: 'τ', name: { en: 'Circuit time constant: RC or L/R (s)', hi: 'समय नियतांक: RC या L/R (s)', bn: 'সময় ধ্রুবক: RC বা L/R (s)' } }
      ]
    },
    {
      id: 'f-bode-phase-asymptote',
      symbol: '\\theta(\\omega)',
      expression: '\\theta(\\omega) \\approx -45^\\circ \\log_{10}\\left(\\frac{\\omega}{0.1\\omega_c}\\right) = -45^\\circ - 45^\\circ \\log_{10}\\left(\\frac{\\omega}{\\omega_c}\\right)',
      title: {
        en: 'Asymptotic Phase Approximation (Single Real Pole)',
        hi: 'असममित कला सन्निकटन (एकल वास्तविक ध्रुव)',
        bn: 'অ্যাসিম্পটোটিক ফেজ সমীকরণ (একক পোল)'
      },
      description: {
        en: 'Linear phase approximation sloping at -45°/decade between 0.1 ω_c and 10 ω_c.',
        hi: '0.1 ω_c और 10 ω_c के बीच -45°/दशक की ढलान वाली रैखिक कला सन्निकटन रेखा।',
        bn: '০.১ ω_c এবং ১০ ω_c এর মাঝে প্রতি দশকে -৪৫° হারে হ্রাস পাওয়া রৈখিক ফেজ সমীকরণ।'
      },
      variables: [
        { symbol: 'θ(ω)', name: { en: 'Phase angle (degrees)', hi: 'कला कोण (डिग्री)', bn: 'ফেজ কোণ (ডিগ্রি)' } },
        { symbol: 'ω, ω_c', name: { en: 'Operating and corner frequencies (rad/s)', hi: 'कार्यकारी एवं कॉर्नर आवृत्तियाँ (rad/s)', bn: 'কার্যকরী ও কাট-অফ কম্পাঙ্ক (rad/s)' } }
      ]
    },
    {
      id: 'f-second-order-standard',
      symbol: 'H(s)',
      expression: 'H(s) = \\frac{\\omega_0^2}{s^2 + 2\\zeta \\omega_0 s + \\omega_0^2}, \\quad \\zeta = \\frac{1}{2Q}',
      title: {
        en: 'Standard Second-Order Quadratic Pole Transfer Function',
        hi: 'मानक द्वितीय-कोटि द्विघात ध्रुव ट्रांसफर फंक्शन',
        bn: 'আদর্শ দ্বিতীয়-ক্রমের ট্রান্সফার ফাংশন'
      },
      description: {
        en: 'Canonical form relating undamped natural frequency ω_0, damping ratio ζ, and quality factor Q.',
        hi: 'प्राकृतिक आवृत्ति ω_0, अवमंदन अनुपात ζ और क्वालिटी फैक्टर Q को जोड़ने वाला मानक रूप।',
        bn: 'প্রাকৃতিক কম্পাঙ্ক ω_0, ড্যাম্পিং অনুপাত ζ এবং কোয়ালিটি ফ্যাক্টর Q এর প্রমিত সমীকরণ।'
      },
      variables: [
        { symbol: 'ω_0', name: { en: 'Undamped natural frequency (rad/s)', hi: 'अनवमंदित प्राकृतिक आवृत्ति (rad/s)', bn: 'আনড্যাম্পড স্বাভাবিক কম্পাঙ্ক (rad/s)' } },
        { symbol: 'ζ', name: { en: 'Damping ratio (dimensionless)', hi: 'अवमंदन अनुपात (विमाहीन)', bn: 'ড্যাম্পিং অনুপাত (মাত্রাহীন)' } },
        { symbol: 'Q', name: { en: 'Quality factor Q = 1 / (2ζ)', hi: 'क्वालिटी फैक्टर Q = 1 / (2ζ)', bn: 'কোয়ালিটি ফ্যাক্টর Q = ১ / (২ζ)' } }
      ]
    },
    {
      id: 'f-resonant-peak-bode',
      symbol: 'M_p',
      expression: 'M_p = \\frac{1}{2\\zeta \\sqrt{1 - \\zeta^2}}, \\quad \\omega_p = \\omega_0 \\sqrt{1 - 2\\zeta^2} \\quad (\\text{for } \\zeta < 1/\\sqrt{2})',
      title: {
        en: 'Second-Order Resonant Peak Magnitude and Frequency',
        hi: 'द्वितीय-कोटि अनुनादी शिखर परिमाण एवं आवृत्ति',
        bn: 'দ্বিতীয়-ক্রম রেজোন্যান্ট পিক ম্যাগনিটিউড ও কম্পাঙ্ক'
      },
      description: {
        en: 'Calculates the height of the resonant peaking spike in underdamped second-order frequency response.',
        hi: 'अल्प-अवमंदित द्वितीय-कोटि आवृत्ति अनुक्रिया में अनुनादी शिखर की ऊँचाई की गणना करता है।',
        bn: 'আন্ডারড্যাম্পড দ্বিতীয়-ক্রমের কম্পাঙ্ক প্রতিক্রিয়ায় রেজোন্যান্ট পিকের উচ্চতা নির্ণয় করে।'
      },
      variables: [
        { symbol: 'M_p', name: { en: 'Peak resonant magnitude (linear ratio)', hi: 'शिखर अनुनादी परिमाण (रैखिक अनुपात)', bn: 'পিক রেজোন্যান্ট মান (অনুপাত)' } },
        { symbol: 'ω_p', name: { en: 'Peak frequency where Mp occurs (rad/s)', hi: 'शिखर आवृत्ति (rad/s)', bn: 'পিক কম্পাঙ্ক (rad/s)' } },
        { symbol: 'ζ', name: { en: 'Damping ratio (must be < 0.7071 for peak to exist)', hi: 'अवमंदन अनुपात (< 0.7071)', bn: 'ড্যাম্পিং অনুপাত (< ০.৭০৭১)' } }
      ]
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch12-l06-01',
      title: {
        en: 'Bode Plot Construction for a First-Order System',
        hi: 'प्रथम-कोटि सिस्टम के लिए बोडे प्लॉट निर्माण',
        bn: 'প্রথম-ক্রম সিস্টেমের জন্য বোড প্লট অঙ্কন'
      },
      problem: {
        en: 'A low-pass network transfer function is given by H(s) = 500 / (s + 50). (a) Convert H(s) to Bode standard form and find the DC gain K and corner frequency ω_c in rad/s and Hz. (b) Determine the asymptotic and exact gain in dB at ω = 50 rad/s and at ω = 500 rad/s. (c) Calculate the phase angle at ω = 50 rad/s and ω = 500 rad/s.',
        hi: 'एक लो-पास नेटवर्क का ट्रांसफर फंक्शन H(s) = 500 / (s + 50) है। (a) इसे बोडे मानक रूप में बदलें और डीसी गेन K तथा कॉर्नर आवृत्ति ω_c ज्ञात करें। (b) ω = 50 rad/s और ω = 500 rad/s पर असममित एवं वास्तविक dB गेन ज्ञात करें। (c) ω = 50 rad/s और ω = 500 rad/s पर कला कोण की गणना करें।',
        bn: 'একটি লো-পাস ট্রান্সফার ফাংশন H(s) = ৫০০ / (s + ৫০)। (a) একে বোড প্রমিত আকারে প্রকাশ করুন এবং ডিসি গেইন K ও ব্রেক কম্পাঙ্ক ω_c নির্ণয় করুন। (b) ω = ৫০ rad/s এবং ω = ৫০০ rad/s এ অ্যাসিম্পটোটিক ও প্রকৃত dB গেইন বের করুন। (c) উভয় কম্পাঙ্কে ফেজ কোণ নির্ণয় করুন।'
      },
      solution: {
        en: 'Step 1: Put H(s) in Bode standard form by factoring out the constant 50 from the denominator:\nH(s) = 500 / [50 · (1 + s / 50)] = 10 / [1 + s / 50].\n- DC Gain: K = 10  ⇒  K_{dB} = 20 log10(10) = +20 dB.\n- Corner frequency: ω_c = 50 rad/s.\n- Frequency in Hz: f_c = ω_c / (2π) = 50 / (2π) ≈ 7.96 Hz.\n\nStep 2: Magnitude Calculations:\n- At ω = 50 rad/s (the corner frequency ω = ω_c):\n  Asymptotic magnitude = 20 dB.\n  Exact magnitude: |H(j50)| = 10 / |1 + j(50/50)| = 10 / |1 + j1| = 10 / √2 ≈ 7.071.\n  In dB: |H(j50)|_{dB} = 20 log10(7.071) = 20 dB - 3.01 dB = +16.99 dB (exact 3.01 dB drop!).\n- At ω = 500 rad/s (one decade above corner, ω = 10 ω_c):\n  Asymptotic magnitude: Since slope is -20 dB/decade, gain = 20 dB - 20 dB = 0 dB.\n  Exact magnitude: |H(j500)| = 10 / |1 + j10| = 10 / √(1 + 100) = 10 / √101 ≈ 0.995.\n  In dB: |H(j500)|_{dB} = 20 log10(0.995) ≈ -0.043 dB (within 0.04 dB of the 0 dB asymptote).\n\nStep 3: Phase Calculations:\nθ(ω) = -arctan(ω / 50).\n- At ω = 50 rad/s: θ = -arctan(1) = -45.0°.\n- At ω = 500 rad/s: θ = -arctan(10) ≈ -84.29° (approaching the -90° high-frequency asymptote).',
        hi: 'चरण 1: मानक रूप: H(s) = 10 / (1 + s/50)। K = 10 (20 dB), ω_c = 50 rad/s (f_c ≈ 7.96 Hz)।\nचरण 2: परिमाण: ω = 50 rad/s पर असममित = 20 dB, वास्तविक = 16.99 dB (ठीक 3.01 dB त्रुटि)। ω = 500 rad/s (एक दशक ऊपर) पर असममित = 0 dB, वास्तविक = -0.043 dB।\nचरण 3: कला कोण: ω = 50 पर -45°, ω = 500 पर -arctan(10) = -84.29°।',
        bn: 'ধাপ ১: প্রমিত রূপ: H(s) = ১০ / (১ + s/৫০)। ডিসি গেইন K = ১০ (২০ dB), ব্রেক কম্পাঙ্ক ω_c = ৫০ rad/s (f_c ≈ ৭.৯৬ Hz)।\nধাপ ২: ম্যাগনিটিউড: ω = ৫০ rad/s এ অ্যাসিম্পটোট = ২০ dB, প্রকৃত = ১৬.৯৯ dB (৩.০১ dB পার্থক্য)। ω = ৫০০ rad/s এ অ্যাসিম্পটোট = ০ dB, প্রকৃত = -০.০৪৩ dB।\nধাপ ৩: ফেজ: ω = ৫০ এ -৪৫°, ω = ৫০০ এ -৮৪.২৯° (-৯০° এর কাছাকাছি)।'
      }
    },
    {
      id: 'ex-ch12-l06-02',
      title: {
        en: 'Resonant Peaking and High-Frequency Roll-off in a Second-Order System',
        hi: 'द्वितीय-कोटि सिस्टम में अनुनादी शिखर एवं उच्च-आवृत्ति रोल-ऑफ',
        bn: 'দ্বিতীয়-ক্রম সিস্টেমে রেজোন্যান্ট পিক ও উচ্চ-কম্পাঙ্ক রোল-অফ'
      },
      problem: {
        en: 'A second-order RLC network has transfer function H(s) = 10^8 / (s² + 400 s + 10^8). Calculate: (a) The undamped natural frequency ω_0 and quality factor Q, (b) The damping ratio ζ, (c) The peak resonant frequency ω_p and peak magnitude M_p in dB, and (d) The asymptotic attenuation in dB at a frequency two decades above resonance (ω = 10^6 rad/s).',
        hi: 'एक द्वितीय-कोटि RLC नेटवर्क का ट्रांसफर फंक्शन H(s) = 10^8 / (s² + 400 s + 10^8) है। गणना करें: (a) प्राकृतिक आवृत्ति ω_0 एवं क्वालिटी फैक्टर Q, (b) अवमंदन अनुपात ζ, (c) शिखर आवृत्ति ω_p एवं शिखर मान M_p (dB में), और (d) अनुनाद से दो दशक ऊपर (ω = 10^6 rad/s) पर असममित क्षीणन।',
        bn: 'একটি দ্বিতীয়-ক্রম ট্রান্সফার ফাংশন H(s) = ১০^৮ / (s² + ৪০০ s + ১০^৮)। নির্ণয় করুন: (a) স্বাভাবিক কম্পাঙ্ক ω_0 ও কোয়ালিটি ফ্যাক্টর Q, (b) ড্যাম্পিং অনুপাত ζ, (c) পিক কম্পাঙ্ক ω_p ও পিক গেইন M_p (dB তে), এবং (d) অনুরণনের দুই দশক উপরে (ω = ১০^৬ rad/s) অ্যাসিম্পটোটিক ক্ষয়।'
      },
      solution: {
        en: 'Step 1: Match denominator with canonical form s² + 2ζ ω_0 s + ω_0²:\nω_0² = 10^8  ⇒  ω_0 = √(10^8) = 10,000 rad/s = 10 krad/s.\n2ζ ω_0 = 400  ⇒  ζ = 400 / (2 · 10,000) = 400 / 20,000 = 0.02.\nQuality factor: Q = 1 / (2ζ) = 1 / (2 · 0.02) = 25.0.\nSince ζ = 0.02 << 0.707, this is a highly underdamped resonant system.\n\nStep 2: Calculate peak resonant frequency ω_p:\nω_p = ω_0 √(1 - 2ζ²) = 10,000 · √[1 - 2(0.02)²] = 10,000 · √(1 - 0.0008) = 10,000 · √0.9992 ≈ 9,996 rad/s (essentially equal to ω_0).\n\nStep 3: Calculate peak magnitude M_p:\nM_p = 1 / [2ζ √(1 - ζ²)] = 1 / [2(0.02) √(1 - 0.0004)] = 1 / [0.04 · 0.9998] ≈ 1 / 0.039992 ≈ 25.005.\nIn dB: M_{p,dB} = 20 log10(25.005) ≈ +27.96 dB.\nNotice that M_{p,dB} ≈ 20 log10(Q) = 20 log10(25) = 27.96 dB.\n\nStep 4: Asymptotic gain at two decades above resonance (ω = 10^6 rad/s = 100 ω_0):\nA second-order system rolls off at -40 dB/decade.\nFor 2 decades: Gain_{dB} = 0 dB - (2 decades · 40 dB/decade) = -80 dB.\nExact check: |H(j·10^6)| ≈ 10^8 / (10^6)² = 10^8 / 10^12 = 10^-4  ⇒  20 log10(10^-4) = -80.0 dB.',
        hi: 'चरण 1: ω_0² = 10^8 से ω_0 = 10,000 rad/s। 2ζω_0 = 400 से ζ = 0.02। Q = 1/(2ζ) = 25।\nचरण 2: शिखर आवृत्ति ω_p = 10,000√(1 - 2(0.02)²) ≈ 9,996 rad/s।\nचरण 3: शिखर गेन M_p ≈ 25.005, dB में 20 log10(25) ≈ +27.96 dB।\nचरण 4: दो दशक ऊपर (ω = 10^6 rad/s) पर रोल-ऑफ -40 dB/decade के कारण क्षीणन = -80 dB।',
        bn: 'ধাপ ১: ω_0 = ১০,০০০ rad/s, ζ = ০.০২, Q = ২৫.০ (উচ্চ আন্ডারড্যাম্পড)।\nধাপ ২: পিক কম্পাঙ্ক ω_p ≈ ৯,৯৯৬ rad/s।\nধাপ ৩: পিক গেইন M_p ≈ ২৫.০১, ডেসিবেলে +২৭.৯৬ dB।\nধাপ ৪: দুই দশক উপরে (ω = ১০^৬ rad/s) -৪০ dB/decade ঢালের কারণে মোট ক্ষয় = -৮০ dB।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Operational Amplifier Feedback Loop Compensation: Control engineers use Bode plots to verify phase margin (PM ≥ 45°) to prevent closed-loop op-amp circuits from oscillating into instability.',
      'Audio Equalizer & Preamplifier Design: Bass, midrange, and treble shelving filters are designed by placing precise lead-lag zeros and poles on Bode plots across the 20 Hz to 20 kHz audio band.',
      'Switch-Mode Power Supply (SMPS) Stability Testing: Frequency response analyzers measure the loop gain and phase of SMPS voltage regulators to ensure robust regulation under rapid load transients.',
      'RF & Microwave Filter Characterization: Vector Network Analyzers (VNAs) plot S21 transmission scattering parameters in decibels and phase, directly producing the RF equivalent of a Bode magnitude plot.'
    ],
    hi: [
      'ऑप-ऐम्प फीडबैक लूप क्षतिपूर्ति: इंजीनियर ऑप-ऐम्प फीडबैक में दोलन रोकने के लिए बोडे प्लॉट से फेज मार्जिन (PM ≥ 45°) की पुष्टि करते हैं।',
      'ऑडियो इक्वलाइज़र एवं प्री-एम्पलीफायर डिजाइन: 20 Hz से 20 kHz ऑडियो बैंड में बेस एवं ट्रेबल फिल्टर डिजाइन करने के लिए बोडे प्लॉट पर ध्रुव एवं शून्य स्थापित किए जाते हैं।',
      'स्विच-मोड पावर सप्लाई (SMPS) स्थिरता परीक्षण: फ्रीक्वेंसी रिस्पॉन्स एनालाइजर तेजी से लोड बदलने पर SMPS रेगुलेटर के लूप गेन और फेज को मापते हैं।',
      'आरएफ एवं माइक्रोवेव फिल्टर लक्षण वर्णन: नेटवर्क एनालाइजर सीधे डेसिबल और फेज में ट्रांसमिशन मापदंडों का आलेखन करके आरएफ बोडे प्लॉट बनाते हैं।'
    ],
    bn: [
      'অপ-অ্যাম্প ফিডব্যাক লুপ কম্পেনসেশন: অপ-অ্যাম্প বর্তনীতে অনাকাঙ্ক্ষিত অসসিলেশন রোধ করতে বোড প্লট দিয়ে ফেজ মার্জিন (PM ≥ ৪৫°) নিশ্চিত করা হয়।',
      'অডিও ইকুয়ালাইজার ও প্রি-অ্যামপ্লিফায়ার ডিজাইন: ২০ Hz থেকে ২০ kHz অডিও রেঞ্জে বেস ও ট্রিবল নিয়ন্ত্রণের জন্য বোড প্লটে পোল ও জিরো স্থাপন করা হয়।',
      'সুইচ-মোড পাওয়ার সাপ্লাই (SMPS) স্থায়িত্ব পরীক্ষা: লোড পরিবর্তনের সাথে দ্রুত ভোল্টেজ নিয়ন্ত্রণের জন্য SMPS লুপের গেইন ও ফেজ পরিমাপ করা হয়।',
      'আরএফ ও মাইক্রোওয়েভ ফিল্টার বৈশিষ্ট্য নির্ণয়: ভেক্টর নেটওয়ার্ক অ্যানালাইজার সরাসরি ডেসিবেল ও ফেজে ট্রান্সমিশন পরিমাপ করে আরএফ বোড প্লট প্রদর্শন করে।'
    ]
  },
  importantPoints: [
    {
      en: 'A decade on a Bode plot corresponds to a 10-fold multiplication of frequency (e.g., 10 Hz to 100 Hz); an octave corresponds to a 2-fold multiplication (e.g., 100 Hz to 200 Hz).',
      hi: 'बोडे प्लॉट पर एक दशक (decade) का अर्थ आवृत्ति का 10 गुना होना है; एक अष्टक (octave) का अर्थ आवृत्ति का 2 गुना होना है।',
      bn: 'বোড প্লটে এক ডেকেড মানে কম্পাঙ্কের ১০ গুণ বৃদ্ধি; এক অক্টেভ মানে কম্পাঙ্কের দ্বিগুণ বৃদ্ধি।'
    },
    {
      en: 'The maximum error between the asymptotic straight-line Bode approximation and the actual curve is 3.01 dB for a simple real pole or zero, occurring exactly at the corner frequency ω = ω_c.',
      hi: 'सरल वास्तविक ध्रुव या शून्य के लिए असममित रेखा और वास्तविक वक्र के बीच अधिकतम अंतर ठीक कॉर्नर आवृत्ति पर 3.01 dB होता है।',
      bn: 'একক পোলের ক্ষেত্রে সরলরৈখিক অ্যাসিম্পটোট ও প্রকৃত গ্রাফের মধ্যে সর্বোচ্চ ৩.০১ dB ব্যবধান ঠিক কাট-অফ কম্পাঙ্কে ঘটে।'
    },
    {
      en: 'A transfer function zero adds a +20 dB/decade upward slope and +90° phase lead; a transfer function pole introduces a -20 dB/decade downward roll-off and -90° phase lag.',
      hi: 'ट्रांसफर फंक्शन का शून्य (Zero) +20 dB/दशक की ऊपर उठती ढलान और +90° कला जोड़ता है; ध्रुव (Pole) -20 dB/दशक की गिरावट और -90° पश्चगामी कला देता है।',
      bn: 'একটি জিরো প্রতি দশকে +২০ dB ঊর্ধ্বমুখী ঢাল ও +৯০° ফেজ লিড যোগ করে; একটি পোল প্রতি দশকে -২০ dB নিম্নমুখী ঢাল ও -৯০° ফেজ ল্যাগ দেয়।'
    },
    {
      en: 'Second-order resonant peaking occurs ONLY when damping ratio ζ < 1/√2 ≈ 0.7071 (or quality factor Q > 0.7071); for ζ ≥ 0.7071, magnitude decreases monotonically without a peak.',
      hi: 'द्वितीय-कोटि अनुनादी शिखर केवल तभी प्रकट होता है जब अवमंदन अनुपात ζ < 0.7071 (या Q > 0.7071) हो।',
      bn: 'দ্বিতীয়-ক্রম রেজোন্যান্ট পিক কেবল তখনই তৈরি হয় যখন ড্যাম্পিং অনুপাত ζ < ০.৭০৭১ (বা Q > ০.৭০৭১) হয়।'
    }
  ],
  commonMistakes: [
    {
      en: 'Using 10 log10 instead of 20 log10 for voltage or current gains: decibels for field quantities (voltage, current) use 20 log10, whereas power quantities use 10 log10.',
      hi: 'वोल्टेज गेन के लिए 10 log10 का उपयोग करना: वोल्टेज एवं धारा के लिए 20 log10 का उपयोग किया जाता है, जबकि शक्ति के लिए 10 log10 का।',
      bn: 'ভোল্টেজ গেইনে 10 log10 ব্যবহার করা: ভোল্টেজ বা কারেন্টের ক্ষেত্রে 20 log10 এবং ক্ষমতার ক্ষেত্রে 10 log10 ব্যবহৃত হয়।'
    },
    {
      en: 'Assuming second-order systems always exhibit a resonant spike: if damping ratio ζ ≥ 0.707 (critically damped or overdamped), there is NO resonant peak.',
      hi: 'यह मान लेना कि द्वितीय-कोटि परिपथों में सदैव अनुनादी शिखर होता है: यदि ζ ≥ 0.707 हो, तो कोई शिखर नहीं बनता।',
      bn: 'মনে করা যে দ্বিতীয়-ক্রম সিস্টেমে সর্বদা রেজোন্যান্ট পিক থাকবে: যদি ζ ≥ ০.৭০৭ হয়, তবে কোনো পিক থাকে না।'
    },
    {
      en: 'Forgetting that phase angles add directly when poles and zeros are cascaded, while decibel magnitudes add algebraically.',
      hi: 'यह भूलना कि कैस्केड चरणों में डेसिबल परिमाण और कला कोण दोनों सीधे जोड़े जाते हैं।',
      bn: 'ভুলে যাওয়া যে একাধিক ধাপ যুক্ত থাকলে ডেসিবেল মান এবং ফেজ কোণ উভয়ই সরাসরি যোগ হয়।'
    }
  ],
  keyTakeaways: [
    {
      en: 'Bode magnitude plots display 20 log10|H| against log frequency, turning cascaded product stages into simple visual additions.',
      hi: 'बोडे परिमाण आलेख 20 log10|H| को लॉग आवृत्ति के विरुद्ध प्रदर्शित करता है, जिससे कैस्केड चरणों का विश्लेषण सरल हो जाता है।',
      bn: 'বোড ম্যাগনিটিউড গ্রাফ ২০ log10|H| কে লগ কম্পাঙ্কের বিপরীতে দেখায়, ফলে ধাপসমূহের সম্মিলিত প্রভাব সরাসরি যোগ করা যায়।'
    },
    {
      en: 'First-order poles roll off at -20 dB/decade (-6 dB/octave); second-order quadratic poles roll off at -40 dB/decade (-12 dB/octave).',
      hi: 'प्रथम-कोटि ध्रुव -20 dB/दशक से और द्वितीय-कोटि द्विघात ध्रुव -40 dB/दशक से गिरते हैं।',
      bn: 'একক পোল প্রতি দশকে -২০ dB এবং দ্বিতীয়-ক্রম পোল প্রতি দশকে -৪০ dB হারে ঢাল তৈরি করে।'
    },
    {
      en: 'Phase margin (PM = 180° + ∠H at 0 dB crossover) must be positive and typically ≥ 45° to guarantee closed-loop feedback stability.',
      hi: 'स्थिरता की गारंटी के लिए 0 dB क्रॉसओवर पर फेज मार्जिन धनात्मक (आदर्श रूप से ≥ 45°) होना चाहिए।',
      bn: 'ফিডব্যাক সিস্টেম স্থিতিশীল রাখতে ০ dB ক্রসওভারে ফেজ মার্জিন অবশ্যই ধনাত্মক ও সাধারণত ≥ ৪৫° হতে হবে।'
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch12-l06-01',
      question: {
        en: 'A filter has transfer function H(s) = (1 + s/100) / (1 + s/10,000). Describe the asymptotic slope of its Bode magnitude plot across the frequency range 1 rad/s to 100,000 rad/s.',
        hi: 'एक फिल्टर का ट्रांसफर फंक्शन H(s) = (1 + s/100) / (1 + s/10,000) है। 1 rad/s से 100,000 rad/s के बीच इसके बोडे परिमाण आलेख की ढलान का वर्णन करें।',
        bn: 'একটি ফিল্টারের ট্রান্সফার ফাংশন H(s) = (১ + s/১০০) / (১ + s/১০,০০০)। ১ rad/s থেকে ১০০,০০০ rad/s রেঞ্জে এর বোড ম্যাগনিটিউডের অ্যাসিম্পটোটিক ঢাল বর্ণনা করুন।'
      },
      hint: {
        en: 'From 0 to 100 rad/s: flat at 0 dB (slope = 0). From 100 to 10,000 rad/s: zero at ω=100 causes slope of +20 dB/decade. Above 10,000 rad/s: pole at ω=10,000 cancels zero slope (+20 - 20 = 0 dB/decade flat again at +40 dB).',
        hi: '100 rad/s तक 0 dB/दशक। 100 से 10,000 rad/s तक +20 dB/दशक। 10,000 rad/s से ऊपर शून्य और ध्रुव संतुलित होकर पुनः 0 dB/दशक (स्थिर +40 dB) हो जाते हैं।',
        bn: '১০০ rad/s পর্যন্ত ০ dB/decade। ১০০ থেকে ১০,০০০ rad/s পর্যন্ত জিরোর কারণে +২০ dB/decade। ১০,০০০ rad/s এর উপরে পোলের কারণে পুনরায় সমান্তরাল (০ dB/decade)।'
      }
    },
    {
      id: 'pq-ch12-l06-02',
      question: {
        en: 'Why is the phase margin evaluated specifically at the gain crossover frequency (where |H(jω)| = 1 or 0 dB)?',
        hi: 'फेज मार्जिन का मूल्यांकन विशेष रूप से गेन क्रॉसओवर आवृत्ति (जहाँ |H(jω)| = 0 dB हो) पर ही क्यों किया जाता है?',
        bn: 'কেন ফেজ মার্জিন কেবল গেইন ক্রসওভার কম্পাঙ্কেই (যেখানে |H(jω)| = ০ dB) পরিমাপ করা হয়?'
      },
      hint: {
        en: 'At unity loop gain (|T| = 1 or 0 dB), if the phase shift reaches -180°, the negative feedback inverts into regenerative positive feedback, causing sustained unattenuated oscillations.',
        hi: '0 dB गेन पर यदि कला -180° हो जाए, तो नकारात्मक फीडबैक सकारात्मक फीडबैक में बदल जाता है और दोलन शुरू हो जाते हैं।',
        bn: '০ dB গেইনে যদি ফেজ -১৮০° তে পৌঁছায়, তবে নেগেটিভ ফিডব্যাক পজিটিভ ফিডব্যাকে রূপ নিয়ে অসসিলেশন শুরু করে।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch12-l06-01',
      question: {
        en: 'On a logarithmic frequency axis of a Bode plot, what does an interval of one "decade" represent?',
        hi: 'बोडे प्लॉट के लघुगणकीय आवृत्ति अक्ष पर एक "दशक" (decade) का अंतराल क्या दर्शाता है?',
        bn: 'বোড প্লটের লগারিদমিক কম্পাঙ্ক অক্ষে এক "ডেকেড" ব্যবধান কী নির্দেশ করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'A 10-fold multiplication of frequency (f_2 = 10 f_1)', hi: 'आवृत्ति का 10 गुना बढ़ना (f_2 = 10 f_1)', bn: 'কম্পাঙ্কের ১০ গুণ বৃদ্ধি (f_2 = ১০ f_1)' } },
        { id: 'opt-2', text: { en: 'A 2-fold multiplication of frequency (doubling)', hi: 'आवृत्ति का 2 गुना बढ़ना (दोगुना)', bn: 'কম্পাঙ্কের দ্বিগুণ বৃদ্ধি' } },
        { id: 'opt-3', text: { en: 'An addition of 10 Hz to the frequency', hi: 'आवृत्ति में 10 Hz का जुड़ना', bn: 'কম্পাঙ্কে ১০ Hz যোগ হওয়া' } },
        { id: 'opt-4', text: { en: 'A fixed duration of 10 seconds', hi: '10 सेकंड का निश्चित समय', bn: '১০ সেকেন্ড সময়কাল' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'A decade represents a frequency ratio of exactly 10 (f_2 / f_1 = 10), such as from 100 Hz to 1,000 Hz or from 1 kHz to 10 kHz.',
        hi: 'लघुगणकीय पैमाने पर एक दशक का अर्थ आवृत्ति का ठीक 10 गुना होना है (जैसे 100 Hz से 1 kHz)।',
        bn: 'লগ স্কেলে এক ডেকেড বলতে কম্পাঙ্ক ঠিক ১০ গুণ হওয়া বোঝায় (যেমন ১০০ Hz থেকে ১ kHz)।'
      }
    },
    {
      id: 'mcq-ch12-l06-02',
      question: {
        en: 'In an asymptotic Bode magnitude plot of a single-pole low-pass filter, what is the exact discrepancy (error) between the straight-line asymptotes and the true curve at the corner frequency ω_c?',
        hi: 'एकल-ध्रुव लो-पास फिल्टर के असममित बोडे आलेख में कॉर्नर आवृत्ति ω_c पर सीधी रेखा और वास्तविक वक्र के बीच त्रुटि कितनी होती है?',
        bn: 'একক-পোল লো-পাস ফিল্টারের অ্যাসিম্পটোটিক বোড চিত্রে কাট-অফ কম্পাঙ্ক ω_c তে সরলরেখা ও প্রকৃত গ্রাফের পার্থক্য কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '0 dB (no error)', hi: '0 dB (कोई त्रुटि नहीं)', bn: '০ dB (কোনো ভুল নেই)' } },
        { id: 'opt-2', text: { en: '3.01 dB', hi: '3.01 dB', bn: '৩.০১ dB' } },
        { id: 'opt-3', text: { en: '6.02 dB', hi: '6.02 dB', bn: '৬.০২ dB' } },
        { id: 'opt-4', text: { en: '20 dB', hi: '20 dB', bn: '২০ dB' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'At ω = ω_c, both low-frequency (0 dB) and high-frequency (0 dB) asymptotes meet at 0 dB, while the true response is 20 log10(1/√2) = -3.01 dB. Thus the maximum asymptotic error is exactly 3.01 dB.',
        hi: 'कॉर्नर आवृत्ति पर असममित मान 0 dB होता है जबकि वास्तविक मान -3.01 dB होता है, अतः त्रुटि 3.01 dB है।',
        bn: 'কাট-অফে অ্যাসিম্পটোটের মান ০ dB এবং প্রকৃত মান -৩.০১ dB, তাই পার্থক্য ৩.০১ dB।'
      }
    },
    {
      id: 'mcq-ch12-l06-03',
      question: {
        en: 'What is the high-frequency asymptotic roll-off slope of a linear transfer function containing two real poles and no zeros?',
        hi: 'दो वास्तविक ध्रुवों और बिना शून्य वाले रैखिक ट्रांसफर फंक्शन की उच्च-आवृत्ति असममित रोल-ऑफ ढलान क्या होती है?',
        bn: 'দুটি বাস্তব পোল এবং কোনো জিরোবিহীন লিনিয়ার ট্রান্সফার ফাংশনের উচ্চ-কম্পাঙ্ক রোল-অফ ঢাল কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '-10 dB/decade', hi: '-10 dB/दशक', bn: '-১০ dB/ডেকেড' } },
        { id: 'opt-2', text: { en: '-20 dB/decade (-6 dB/octave)', hi: '-20 dB/दशक (-6 dB/octave)', bn: '-২০ dB/ডেকেড (-৬ dB/octave)' } },
        { id: 'opt-3', text: { en: '-40 dB/decade (-12 dB/octave)', hi: '-40 dB/दशक (-12 dB/octave)', bn: '-৪০ dB/ডেকেড (-১২ dB/octave)' } },
        { id: 'opt-4', text: { en: '-60 dB/decade', hi: '-60 dB/दशक', bn: '-৬০ dB/ডেকেড' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'Each real pole contributes -20 dB/decade to the high-frequency roll-off. Two poles contribute 2 × (-20 dB/decade) = -40 dB/decade (which equals -12 dB/octave).',
        hi: 'प्रत्येक ध्रुव -20 dB/दशक जोड़ता है। दो ध्रुव मिलकर 2 × (-20) = -40 dB/दशक (-12 dB/octave) ढलान बनाते हैं।',
        bn: 'প্রতিটি পোল -২০ dB/ডেকেড ঢাল তৈরি করে। দুটি পোল মিলে মোট ২ × (-২০) = -৪০ dB/ডেকেড ঢাল প্রদান করে।'
      }
    },
    {
      id: 'mcq-ch12-l06-04',
      question: {
        en: 'For a transfer function with a single real pole H(s) = 1 / (1 + s/ω_c), what is the phase shift at a frequency one decade above the corner frequency (ω = 10 ω_c)?',
        hi: 'एकल वास्तविक ध्रुव H(s) = 1 / (1 + s/ω_c) के लिए कॉर्नर आवृत्ति से एक दशक ऊपर (ω = 10 ω_c) कलांतर क्या होता है?',
        bn: 'একক বাস্তব পোলযুক্ত সিস্টেমে কাট-অফ কম্পাঙ্কের এক দশক উপরে (ω = ১০ ω_c) ফেজ পার্থক্য কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '-45°', hi: '-45°', bn: '-৪৫°' } },
        { id: 'opt-2', text: { en: '-84.3° (asymptotically -90°)', hi: '-84.3° (असममित रूप से -90°)', bn: '-৮৪.৩° (অ্যাসিম্পটোটিকভাবে -৯০°)' } },
        { id: 'opt-3', text: { en: '-135°', hi: '-135°', bn: '-১৩৫°' } },
        { id: 'opt-4', text: { en: '0°', hi: '0°', bn: '০°' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'The exact phase is θ = -arctan(ω / ω_c) = -arctan(10) ≈ -84.29° (which in asymptotic straight-line phase approximations is represented as having reached the -90° asymptote at 10 ω_c).',
        hi: 'वास्तविक कला कोण -arctan(10) ≈ -84.29° होता है, जो असममित नियम में -90° के अत्यंत निकट है।',
        bn: 'প্রকৃত ফেজ -arctan(১০) ≈ -৮৪.২৯°, যা অ্যাসিম্পটোট অনুসারে প্রায় -৯০° এ পৌঁছায়।'
      }
    },
    {
      id: 'mcq-ch12-l06-05',
      question: {
        en: 'Under what condition does a standard second-order system H(s) = ω_0² / (s² + 2ζω_0 s + ω_0²) exhibit a resonant peak (Mp > 1) in its Bode magnitude plot?',
        hi: 'किस स्थिति में द्वितीय-कोटि सिस्टम के बोडे परिमाण आलेख में अनुनादी शिखर (Mp > 1) प्रकट होता है?',
        bn: 'কোন শর্তে একটি দ্বিতীয়-ক্রম সিস্টেমের বোড ম্যাগনিটিউড গ্রাফে রেজোন্যান্ট পিক (Mp > ১) দেখা যায়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Damping ratio ζ > 1.0 (overdamped)', hi: 'अवमंदन अनुपात ζ > 1.0 (अति-अवमंदित)', bn: 'ড্যাম্পিং অনুপাত ζ > ১.০' } },
        { id: 'opt-2', text: { en: 'Damping ratio ζ < 1/√2 ≈ 0.7071 (or Q > 0.7071)', hi: 'अवमंदन अनुपात ζ < 1/√2 ≈ 0.7071 (या Q > 0.7071)', bn: 'ড্যাম্পিং অনুপাত ζ < ১/√২ ≈ ০.৭০৭১ (বা Q > ০.৭০৭১)' } },
        { id: 'opt-3', text: { en: 'Only when ζ = 1.0 (critically damped)', hi: 'केवल जब ζ = 1.0 हो', bn: 'কেবল যখন ζ = ১.০ হয়' } },
        { id: 'opt-4', text: { en: 'A resonant peak exists for all possible values of ζ', hi: 'ζ के सभी मानों के लिए शिखर मौजूद रहता है', bn: 'ζ এর সব মানের জন্যই পিক থাকে' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'The peak magnitude formula Mp = 1 / [2ζ √(1 - ζ²)] is valid and greater than 1 only when ζ < 1/√2 ≈ 0.7071. For ζ ≥ 0.7071, the frequency response rolls off monotonically without peaking.',
        hi: 'अनुनादी शिखर केवल तभी बनता है जब अवमंदन अनुपात ζ < 1/√2 (0.7071) हो। ζ ≥ 0.7071 के लिए वक्र बिना किसी शिखर के गिरता है।',
        bn: 'রেজোন্যান্ট পিক কেবল তখনই গঠিত হয় যখন ζ < ১/√২ (০.৭০৭১) হয়। ζ ≥ ০.৭০৭১ হলে কোনো পিক তৈরি হয় না।'
      }
    },
    {
      id: 'mcq-ch12-l06-06',
      question: {
        en: 'A circuit voltage gain of +40 dB corresponds to what linear voltage multiplication ratio (|V_out / V_in|)?',
        hi: '+40 dB का सर्किट वोल्टेज गेन किस रैखिक वोल्टेज गुणन अनुपात के बराबर है?',
        bn: '+৪০ dB ভোল্টেজ গেইন কোন রৈখিক ভোল্টেজ অনুপাতের সমান?'
      },
      options: [
        { id: 'opt-1', text: { en: '20', hi: '20', bn: '২০' } },
        { id: 'opt-2', text: { en: '40', hi: '40', bn: '৪০' } },
        { id: 'opt-3', text: { en: '100', hi: '100', bn: '১০০' } },
        { id: 'opt-4', text: { en: '10,000', hi: '10,000', bn: '১০,০০০' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: '|H|_{dB} = 20 log10(|H|)  ⇒  40 = 20 log10(|H|)  ⇒  log10(|H|) = 2  ⇒  |H| = 10^2 = 100.',
        hi: '40 dB = 20 log10(|H|) से log10(|H|) = 2, अतः रैखिक अनुपात |H| = 10^2 = 100।',
        bn: '৪০ dB = ২০ log10(|H|) থেকে log10(|H|) = ২, সুতরাং রৈখিক অনুপাত |H| = ১০^২ = ১০০।'
      }
    },
    {
      id: 'mcq-ch12-l06-07',
      question: {
        en: 'How does a simple transfer function zero (1 + s/ω_z) affect the asymptotic Bode magnitude slope for frequencies above its corner frequency ω_z?',
        hi: 'एक सरल ट्रांसफर फंक्शन शून्य (1 + s/ω_z) अपनी कॉर्नर आवृत्ति ω_z से ऊपर बोडे परिमाण ढलान को कैसे प्रभावित करता है?',
        bn: 'একটি সরল ট্রান্সফার ফাংশন জিরো (১ + s/ω_z) কাট-অফ কম্পাঙ্ক ω_z এর উপরে বোড ম্যাগনিটিউড ঢালকে কীভাবে প্রভাবিত করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'It introduces a downward slope of -20 dB/decade', hi: 'यह -20 dB/दशक की नीचे गिरती ढलान जोड़ता है', bn: 'এটি প্রতি দশকে -২০ dB নিম্নমুখী ঢাল যোগ করে' } },
        { id: 'opt-2', text: { en: 'It introduces an upward slope of +20 dB/decade (+6 dB/octave)', hi: 'यह +20 dB/दशक (+6 dB/octave) की ऊपर उठती ढलान जोड़ता है', bn: 'এটি প্রতি দশকে +২০ dB (+৬ dB/octave) ঊর্ধ্বমুখী ঢাল যোগ করে' } },
        { id: 'opt-3', text: { en: 'It causes the gain to immediately drop to zero (-∞ dB)', hi: 'यह गेन को तुरंत शून्य कर देता है', bn: 'এটি গেইন শূন্য করে দেয়' } },
        { id: 'opt-4', text: { en: 'It has no effect on magnitude slope', hi: 'इसका ढलान पर कोई प्रभाव नहीं पड़ता', bn: 'এর ঢালের ওপর কোনো প্রভাব নেই' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Unlike poles which cause downward attenuation (-20 dB/decade), zeros in the numerator cause gain to rise with frequency at an asymptotic rate of +20 dB/decade (+6 dB/octave).',
        hi: 'ध्रुवों (-20 dB/दशक) के विपरीत, अंश में उपस्थित शून्य आवृत्ति बढ़ने के साथ +20 dB/दशक (+6 dB/octave) की वृद्धि करता है।',
        bn: 'পোলের বিপরীতভাবে, লবে অবস্থিত জিরো কম্পাঙ্ক বৃদ্ধির সাথে সাথে প্রতি দশকে +২০ dB ঊর্ধ্বমুখী ঢাল তৈরি করে।'
      }
    },
    {
      id: 'mcq-ch12-l06-08',
      question: {
        en: 'In frequency response and feedback stability analysis, how is Phase Margin (PM) defined?',
        hi: 'आवृत्ति अनुक्रिया एवं फीडबैक स्थिरता विश्लेषण में फेज मार्जिन (PM) को कैसे परिभाषित किया जाता है?',
        bn: 'কম্পাঙ্ক প্রতিক্রিয়া ও ফিডব্যাক স্থায়িত্ব বিশ্লেষণে ফেজ মার্জিন (PM) কীভাবে সংজ্ঞায়িত করা হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The gain in dB at zero frequency (DC)', hi: 'शून्य आवृत्ति (DC) पर dB में गेन', bn: 'শূন্য কম্পাঙ্কে (ডিসিতে) dB গেইন' } },
        { id: 'opt-2', text: { en: 'PM = 180° + ∠H(jω_g), where ω_g is the gain crossover frequency (|H| = 0 dB)', hi: 'PM = 180° + ∠H(jω_g), जहाँ ω_g गेन क्रॉसओवर आवृत्ति (|H| = 0 dB) है', bn: 'PM = ১৮০° + ∠H(jω_g), যেখানে ω_g হলো গেইন ক্রসওভার কম্পাঙ্ক (|H| = ০ dB)' } },
        { id: 'opt-3', text: { en: 'The frequency where phase equals exactly 0°', hi: 'वह आवृत्ति जहाँ कला ठीक 0° होती है', bn: 'যে কম্পাঙ্কে ফেজ ঠিক ০° হয়' } },
        { id: 'opt-4', text: { en: 'The maximum phase shift divided by the quality factor Q', hi: 'अधिकतम कलांतर भाग क्वालिटी फैक्टर Q', bn: 'সর্বোচ্চ ফেজকে Q দিয়ে ভাগফল' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Phase Margin measures how much additional phase lag can be tolerated before the system reaches -180° at unity gain (|H| = 1 or 0 dB). It is calculated as PM = 180° + ∠H(jω_g), where positive PM indicates stable closed-loop operation.',
        hi: 'फेज मार्जिन 0 dB गेन पर -180° तक पहुँचने से बची हुई कला दूरी है: PM = 180° + ∠H(jω_g)। धनात्मक PM स्थिरता का संकेत है।',
        bn: '০ dB গেইন ক্রসওভারে -১৮০° হতে কতটুকু ফেজ অবশিষ্ট আছে তা হলো ফেজ মার্জিন: PM = ১৮০° + ∠H(jω_g)।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ch12-l06-01',
      title: {
        en: 'Bode Magnitude & Phase Asymptotic Plots',
        hi: 'बोडे परिमाण एवं कला असममित आलेख',
        bn: 'বোড ম্যাগনিটিউড ও ফেজ অ্যাসিম্পটোটিক গ্রাফ'
      },
      caption: {
        en: 'Bode Magnitude and Phase Frequency Response: Straight-line asymptotic approximations, -3.01 dB corner corrections, and second-order resonance peaking.',
        hi: 'बोडे परिमाण एवं कला आवृत्ति अनुक्रिया: सीधी-रेखा असममित सन्निकटन, -3.01 dB कॉर्नर सुधार, एवं द्वितीय-कोटि अनुनादी शिखर।',
        bn: 'বোড ম্যাগনিটিউড ও ফেজ কম্পাঙ্ক প্রতিক্রিয়া: সরলরৈখিক অ্যাসিম্পটোট, কাট-অফে -৩.০১ dB সংশোধন এবং দ্বিতীয়-ক্রমের রেজোন্যান্ট পিক।'
      },
      svgType: 'circuit-ch12-bode-plots-frequency-response'
    }
  ]
};

// Legacy compatibility export
export const LESSON_PASSIVE_FILTERS_BODE = LESSON_BODE_PLOTS_FREQUENCY_RESPONSE;
