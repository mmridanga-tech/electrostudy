import { Lesson } from '../types';

export const LESSON_WAVEGUIDES_CUTOFF_DISPERSION: Lesson = {
  "id": "lsn-ch11-waveguides-cutoff-dispersion",
  "topicId": "ch11-waveguides-cutoff-dispersion",
  "chapterId": "ch-em-waves",
  "order": 12,
  "title": {
    "en": "Guided Waves: Parallel-Plate & Rectangular Waveguides, Cutoff Frequencies & Dispersion",
    "hi": "निर्देशित तरंगें: समांतर-प्लेट एवं आयताकार वेवगाइड, अंतक आवृत्तियां एवं विक्षेपण",
    "bn": "পরিচালিত তরঙ্গ: সমান্তরাল-প্লেট ও আয়তাকার ওয়েভগাইড, কাটঅফ কম্পাঙ্ক ও বিচ্ছুরণ"
  },
  "description": {
    "en": "Rigorous electromagnetic theory of hollow metallic conduits guiding microwave and millimeter waves, transverse electric (TE_mn) and transverse magnetic (TM_mn) modal solutions, cutoff frequency f_c, guide wavelength λ_g, phase velocity v_p, group velocity v_g, wave dispersion, and dominant TE10 mode.",
    "hi": "माइक्रोवेव एवं मिलीमीटर तरंगों को निर्देशित करने वाली खोखली धातु नलिकाओं का सिद्धांत, अनुप्रस्थ विद्युत (TE_mn) एवं अनुप्रस्थ चुंबकीय (TM_mn) विधाएं, अंतक आवृत्ति f_c, गाइड तरंगदैर्ध्य λ_g, कला वेग v_p, समूह वेग v_g, तरंग विक्षेपण तथा प्रमुख TE10 विधा।",
    "bn": "মাইক্রোওয়েভ ও মিলিমিটার তরঙ্গ পরিচালনাকারী ফাঁপা ধাতব নলের তত্ত্ব, অনুপ্রস্থ তড়িৎ (TE_mn) ও অনুপ্রস্থ চৌম্বক (TM_mn) মোড সমাধান, কাটঅফ কম্পাঙ্ক f_c, গাইড তরঙ্গদৈর্ঘ্য λ_g, দশা বেগ v_p, দলগত বেগ v_g, তরঙ্গ বিচ্ছুরণ এবং প্রধান TE10 মোড।"
  },
  "estimatedMinutes": 55,
  "easyExplanation": {
    "en": "Imagine shouting through a long metal pipe: your sound waves bounce back and forth between the pipe walls, channeling all your voice energy straight to the far end without spreading out into the surrounding air. A waveguide does the exact same thing for high-frequency microwave radio signals! Instead of using wires (which leak energy and suffer huge resistance losses at gigahertz frequencies), engineers use hollow, shiny metal rectangular pipes. The electromagnetic waves bounce off the top, bottom, and side walls at precise angles, guided safely inside. But here is the catch: a pipe acts like a high-pass frequency filter. Every waveguide has a strict 'Cutoff Frequency' (f_c). If you try to send a signal with a frequency below cutoff, the wave literally cannot enter the pipe—it decays away into nothing within a couple of centimeters! Inside the pipe, individual wave crests seem to move faster than the speed of light (Phase Velocity v_p > c), but the actual information and energy travel slower than light (Group Velocity v_g < c), perfectly satisfying Einstein's relativity because v_p × v_g = c².",
    "hi": "कल्पना कीजिए कि आप एक लंबी धातु की नली में चिल्लाते हैं: आपकी आवाज की तरंगें दीवारों से टकराकर बिना फैले सीधे दूसरे सिरे तक पहुंच जाती हैं। एक वेवगाइड (तरंग-पथक) उच्च-आवृत्ति माइक्रोवेव सिग्नलों के लिए बिल्कुल यही काम करता है! तारों का उपयोग करने के बजाय (जो गीगाहर्ट्ज आवृत्तियों पर भारी ऊर्जा खो देते हैं), इंजीनियर खोखले धातु के आयताकार पाइपों का उपयोग करते हैं। विद्युत चुंबकीय तरंगें दीवारों से टकराकर नली के अंदर ही निर्देशित होती हैं। परंतु वेवगाइड का एक सख्त नियम होता है जिसे 'अंतक आवृत्ति' (कटऑफ फ्रीक्वेंसी f_c) कहते हैं। यदि आप f_c से कम आवृत्ति की तरंग भेजेंगे, तो वह पाइप के भीतर प्रवेश ही नहीं कर पाएगी और तुरंत समाप्त हो जाएगी! वेवगाइड के भीतर तरंग शिखाएं प्रकाश की गति से भी तेज चलती प्रतीत होती हैं (कला वेग v_p > c), परंतु वास्तविक ऊर्जा और डेटा प्रकाश से धीमा चलते हैं (समूह वेग v_g < c), जिससे v_p × v_g = c² का नियम संतुलित रहता है।",
    "bn": "কল্পনা করুন একটি লম্বা ধাতব পাইপের মধ্য দিয়ে কথা বলা: শব্দের তরঙ্গ পাইপের দেয়ালে ধাক্কা খেয়ে ছড়িয়ে না পড়ে সরাসরি অপর প্রান্তে পৌঁছে যায়। একটি ওয়েভগাইড উচ্চ-কম্পাঙ্কের মাইক্রোওয়েভ সংকেতের জন্য ঠিক এই কাজটিই করে! গিগাহার্টজ কম্পাঙ্কে তারের মাধ্যমে সংকেত পাঠালে প্রচণ্ড শক্তি অপচয় হয়, তাই ফাঁপা আয়তাকার ধাতব পাইপ ব্যবহার করা হয়। তড়িৎচৌম্বক তরঙ্গগুলি পাইপের চার দেয়ালে প্রতিফলিত হয়ে সামনের দিকে অগ্রসর হয়। তবে ওয়েভগাইডের একটি কঠোর নিয়ম রয়েছে যাকে 'কাটঅফ কম্পাঙ্ক' (f_c) বলা হয়। কাটঅফের চেয়ে কম কম্পাঙ্কের সংকেত পাইপে প্রবেশ করতে পারে না এবং কয়েক সেন্টিমিটারের মধ্যেই নিঃশেষ হয়ে যায়! ওয়েভগাইডের ভেতরে তরঙ্গের দশা বেগ আলোর চেয়েও দ্রুত (v_p > c) মনে হলেও মূল সংকেত ও শক্তি আলোর চেয়ে কম গতিতে (v_g < c) চলে, যেখানে v_p × v_g = c² সমীকরণটি বজায় থাকে।"
  },
  "detailedExplanation": {
    "en": "Consider a hollow rectangular metallic pipe aligned along the z-axis with internal width 'a' (along x) and internal height 'b' (along y), where standard convention sets a > b (typically a = 2b).\n\n1. Waveguide Modal Classification:\nBecause a single hollow conductor has only one continuous boundary, it CANNOT support a TEM (Transverse ElectroMagnetic) wave (TEM requires at least two separate conductors, like a coaxial cable or twin-lead line, to maintain a non-zero voltage difference). Guided solutions decompose into two distinct families:\n• Transverse Electric (TE_mn or H_mn modes): E_z = 0, H_z ≠ 0 everywhere.\n• Transverse Magnetic (TM_mn or E_mn modes): H_z = 0, E_z ≠ 0 everywhere.\nHere, m and n represent the number of half-wavelength field variations along width 'a' and height 'b' respectively.\n\n2. The Helmholtz Wave Equation and Cutoff Wavenumber:\nInside the lossless dielectric filling the pipe (usually air, ε, μ), the longitudinal fields satisfy:\n∇_t² ψ + k_c² ψ = 0,   where k_c² = k² - β² = ω² μ ε - β².\nApplying perfect electric conductor (PEC) boundary conditions (tangential E = 0 on all 4 inner walls) quantizes the transverse wavenumber k_c:\nk_c = √[ (m π / a)² + (n π / b)² ].\n\n3. Propagation Constant (β) & Cutoff Frequency (f_c):\nThe longitudinal propagation constant β_mn is:\nβ_mn = √[ k² - k_c² ] = √[ ω² μ ε - (m π / a)² - (n π / b)² ].\n\nThree distinct propagation regimes exist:\n(a) Propagation Band (ω > ω_c): k > k_c. β is purely REAL. Waves propagate down the guide without attenuation: E ~ e^(-j β z).\n(b) Cutoff Frequency (f_c,mn): Occurs when k = k_c (β = 0):\nf_c,mn = (1 / (2 √(μ ε))) · √[ (m / a)² + (n / b)² ] = (c / 2) · √[ (m / a)² + (n / b)² ] (for air).\n(c) Evanescent / Attenuation Band (ω < ω_c): k < k_c. β becomes purely IMAGINARY: β = -j α. Fields attenuate exponentially down the tube as e^(-α z) carrying ZERO net time-averaged power!\n\n4. Dominant Mode: TE10 Mode:\nSince a > b, the lowest cutoff frequency occurs for mode (m = 1, n = 0), known as the Dominant TE10 Mode:\nf_c,10 = c / (2 a).\nThe corresponding cutoff wavelength is:\nλ_c,10 = 2 a.\n(The cutoff wavelength is independent of guide height b!).\nField equations for dominant TE10 mode:\nE_y(x, z) = -j [ (ω μ a) / π ] H_0 sin(π x / a) e^(-j β z)\nH_x(x, z) = j [ (β a) / π ] H_0 sin(π x / a) e^(-j β z)\nH_z(x, z) = H_0 cos(π x / a) e^(-j β z)\nE_x = E_z = H_y = 0.\n\n5. Guide Wavelength (λ_g), Phase Velocity (v_p) and Group Velocity (v_g):\n• Guide Wavelength: λ_g = 2π / β = λ0 / √[ 1 - (f_c / f)² ] > λ0. (Always longer than free space wavelength!).\n• Phase Velocity: v_p = ω / β = c / √[ 1 - (f_c / f)² ] > c. (Phase velocity exceeds the speed of light!).\n• Group Velocity: v_g = dω / dβ = c · √[ 1 - (f_c / f)² ] < c. (Information and energy travel at v_g, strictly subluminal).\nFundamental Relativistic Velocity Relation: v_p · v_g = c².",
    "hi": "खोखली आयताकार धातु नलिकाओं (वेवगाइड्स) में एकल चालक होने के कारण TEM तरंगें संभव नहीं होती हैं। इसमें दो प्रकार की विधाएं पाई जाती हैं:\n• TE विधाएं (E_z = 0)\n• TM विधाएं (H_z = 0)\n\nअंतक आवृत्ति (Cutoff Frequency):\nf_c,mn = (c / 2) √[ (m / a)² + (n / b)² ]।\n\nप्रमुख विधा (Dominant Mode) TE10:\nआयताकार वेवगाइड में सबसे न्यूनतम अंतक आवृत्ति TE10 विधा की होती है:\nf_c,10 = c / (2 a), तथा अंतक तरंगदैर्ध्य λ_c = 2 a।\n\nयदि f < f_c हो, तो तरंग वेवगाइड में आगे नहीं बढ़ पाती और चरघातांकी रूप से नष्ट हो जाती है।\n\nगाइड तरंगदैर्ध्य: λ_g = λ0 / √[ 1 - (f_c / f)² ] > λ0।\nकला वेग: v_p = c / √[ 1 - (f_c / f)² ] > c।\nसमूह वेग: v_g = c √[ 1 - (f_c / f)² ] < c।\nआइंस्टीन का संबंध: v_p · v_g = c²।",
    "bn": "ফাঁপা আয়তাকার ধাতব ওয়েভগাইডে একক পরিবাহী থাকার কারণে TEM তরঙ্গ সঞ্চালিত হতে পারে না। এতে দুই ধরনের মোড বিদ্যমান:\n• TE মোড (E_z = ০)\n• TM মোড (H_z = ০)\n\nকাটঅফ কম্পাঙ্ক:\nf_c,mn = (c / ২) √[ (m / a)² + (n / b)² ]।\n\nপ্রধান মোড (Dominant Mode) TE10:\nআয়তাকার ওয়েভগাইডে সর্বনিম্ন কাটঅফ কম্পাঙ্ক থাকে TE10 মোডে:\nf_c,10 = c / (২ a), এবং কাটঅফ তরঙ্গদৈর্ঘ্য λ_c = ২ a।\n\nযদি f < f_c হয়, তবে তরঙ্গ আর সঞ্চালিত হতে পারে না এবং দ্রুত ক্ষয়প্রাপ্ত হয়।\n\nগাইড তরঙ্গদৈর্ঘ্য: λ_g = λ0 / √[ ১ - (f_c / f)² ] > λ0।\nদশা বেগ: v_p = c / √[ ১ - (f_c / f)² ] > c।\nদলগত বেগ: v_g = c √[ ১ - (f_c / f)² ] < c।\nমৌলিক সম্পর্ক: v_p · v_g = c²।"
  },
  "formulas": [
    {
      "id": "f-waveguide-cutoff",
      "symbol": "f_c,mn",
      "expression": "f_c,mn = (c / (2 √ε_r)) · √[ (m / a)² + (n / b)² ]",
      "title": {
        "en": "Rectangular Waveguide Cutoff Frequency",
        "hi": "आयताकार वेवगाइड अंतक आवृत्ति",
        "bn": "আয়তাকার ওয়েভগাইড কাটঅফ কম্পাঙ্ক"
      },
      "description": {
        "en": "Threshold frequency below which mode (m, n) cannot propagate down the waveguide conduit.",
        "hi": "वह देहली आवृत्ति जिससे कम आवृत्ति पर मोड (m, n) वेवगाइड में संचरित नहीं हो सकता।",
        "bn": "যে ন্যূনতম কম্পাঙ্কের নিচে মোড (m, n) ওয়েভগাইডে সঞ্চালিত হতে পারে না।"
      },
      "variables": [
        {
          "symbol": "f_c,mn",
          "name": {
            "en": "Cutoff frequency for mode (m, n) (Hz)",
            "hi": "मोड (m, n) की अंतक आवृत्ति",
            "bn": "মোড (m, n) এর কাটঅফ কম্পাঙ্ক"
          }
        },
        {
          "symbol": "a",
          "name": {
            "en": "Broad wall internal width (m)",
            "hi": "चौड़ी दीवार की आंतरिक चौड़ाई",
            "bn": "প্রশস্ত দেয়ালের অভ্যন্তরীণ প্রস্থ"
          }
        },
        {
          "symbol": "b",
          "name": {
            "en": "Narrow wall internal height (m)",
            "hi": "संकीर्ण दीवार की आंतरिक ऊंचाई",
            "bn": "সংকীর্ণ দেয়ালের অভ্যন্তরীণ উচ্চতা"
          }
        },
        {
          "symbol": "m, n",
          "name": {
            "en": "Mode indices (integers: 0, 1, 2...)",
            "hi": "विधा सूचकांक (m, n)",
            "bn": "মোড সূচক (m, n)"
          }
        }
      ]
    },
    {
      "id": "f-dominant-te10-cutoff",
      "symbol": "f_c,10",
      "expression": "f_c,10 = c / (2 a),   λ_c,10 = 2 a   (for a > b)",
      "title": {
        "en": "Dominant TE10 Mode Cutoff Condition",
        "hi": "प्रमुख TE10 विधा अंतक शर्त",
        "bn": "প্রধান TE10 মোড কাটঅফ শর্ত"
      },
      "description": {
        "en": "Lowest cutoff frequency of any mode in a rectangular waveguide, occurring when m = 1, n = 0.",
        "hi": "आयताकार वेवगाइड में किसी भी विधा की न्यूनतम अंतक आवृत्ति (m = 1, n = 0)।",
        "bn": "আয়তাকার ওয়েভগাইডের যেকোনো মোডের সর্বনিম্ন কাটঅফ কম্পাঙ্ক (m = ১, n = ০)।"
      },
      "variables": [
        {
          "symbol": "f_c,10",
          "name": {
            "en": "Dominant TE10 cutoff frequency (Hz)",
            "hi": "प्रमुख TE10 अंतक आवृत्ति",
            "bn": "প্রধান TE10 কাটঅফ কম্পাঙ্ক"
          }
        },
        {
          "symbol": "λ_c,10",
          "name": {
            "en": "Dominant mode cutoff wavelength (m)",
            "hi": "अंतक तरंगदैर्ध्य",
            "bn": "কাটঅফ তরঙ্গদৈর্ঘ্য"
          }
        }
      ]
    },
    {
      "id": "f-guide-wavelength",
      "symbol": "λ_g",
      "expression": "λ_g = λ0 / √[ 1 - (f_c / f)² ] = 2π / β > λ0",
      "title": {
        "en": "Guide Wavelength",
        "hi": "गाइड तरंगदैर्ध्य",
        "bn": "গাইড তরঙ্গদৈর্ঘ্য"
      },
      "description": {
        "en": "Spatial periodicity of wave fields along the longitudinal axis inside the waveguide.",
        "hi": "वेवगाइड के भीतर अनुदैर्ध्य अक्ष के अनुदिश तरंग क्षेत्रों की स्थानिक आवर्तिता।",
        "bn": "ওয়েভগাইডের অভ্যন্তরে অক্ষ বরাবর তরঙ্গের কার্যকর তরঙ্গদৈর্ঘ্য।"
      },
      "variables": [
        {
          "symbol": "λ_g",
          "name": {
            "en": "Guide wavelength (m)",
            "hi": "गाइड तरंगदैर्ध्य",
            "bn": "গাইড তরঙ্গদৈর্ঘ্য"
          }
        },
        {
          "symbol": "λ0",
          "name": {
            "en": "Unbounded medium wavelength (c/f) (m)",
            "hi": "मुक्त माध्यम तरंगदैर्ध्य",
            "bn": "মুক্ত মাধ্যমের তরঙ্গদৈর্ঘ্য"
          }
        }
      ]
    },
    {
      "id": "f-waveguide-velocities",
      "symbol": "v_p, v_g",
      "expression": "v_p = c / √[ 1 - (f_c / f)² ] > c,   v_g = c · √[ 1 - (f_c / f)² ] < c,   v_p · v_g = c²",
      "title": {
        "en": "Waveguide Phase Velocity & Group Velocity",
        "hi": "वेवगाइड कला वेग एवं समूह वेग",
        "bn": "ওয়েভগাইড দশা বেগ ও দলগত বেগ"
      },
      "description": {
        "en": "Phase velocity of wave crests and group velocity of energy transport, satisfying Einstein's product relation.",
        "hi": "तरंग शिखाओं का कला वेग एवं ऊर्जा संचरण का समूह वेग, जो v_p · v_g = c² को संतुष्ट करते हैं।",
        "bn": "তরঙ্গ শীর্ষের দশা বেগ এবং শক্তি সঞ্চালনের দলগত বেগ, যা v_p · v_g = c² শর্ত মেনে চলে।"
      },
      "variables": [
        {
          "symbol": "v_p",
          "name": {
            "en": "Phase velocity (m/s, > c)",
            "hi": "कला वेग",
            "bn": "দশা বেগ"
          }
        },
        {
          "symbol": "v_g",
          "name": {
            "en": "Group velocity (m/s, < c)",
            "hi": "समूह वेग",
            "bn": "দলগত বেগ"
          }
        }
      ]
    }
  ],
  "sections": [
    {
      "id": "sec-waveguide-modes",
      "title": {
        "en": "1. Electromagnetic Boundary Matching & Modal Field Structures",
        "hi": "1. विद्युत चुंबकीय सीमा सुमेलन एवं विधा क्षेत्र संरचनाएं",
        "bn": "১. তড়িৎচৌম্বকীয় সীমানা শর্ত এবং মোড ক্ষেত্র কাঠামো"
      },
      "content": {
        "en": "In a closed rectangular pipe with conducting walls at x = 0, x = a and y = 0, y = b, the tangential electric field components must vanish on all four interior surfaces:\n• E_y = 0 at x = 0 and x = a\n• E_x = 0 at y = 0 and y = b\n\nSolving the two-dimensional Helmholtz equation subject to these Dirichlet/Neumann conditions forces the transverse wavenumbers to be discrete multiples of π/a and π/b:\nk_x = m π / a,   k_y = n π / b.\n\nFor TM modes, both E_x and E_y are derived from E_z. Enforcing tangential conditions requires E_z ~ sin(m π x / a) sin(n π y / b). If either m = 0 or n = 0, E_z is identically zero everywhere! Thus, TM01 and TM10 modes do not exist; the lowest TM mode is TM11.\n\nFor TE modes, H_z satisfies Neumann boundary conditions ∂H_z/∂n = 0, yielding H_z ~ cos(m π x / a) cos(n π y / b). Here, m and n cannot both be zero (which would yield a trivial static DC field), but either m or n can be zero! Since width a > height b, the lowest allowed mode is TE10.",
        "hi": "चारों आंतरिक चालक दीवारों पर स्पर्शज्या विद्युत क्षेत्र शून्य होना आवश्यक है।\nहल करने पर प्राप्त होता है: k_x = m π / a, k_y = n π / b।\n\nTM विधाओं के लिए E_z = 0 होने के लिए m और n दोनों का अशून्य (कम से कम 1) होना आवश्यक है, अतः सबसे निचली TM विधा TM11 होती है।\nTE विधाओं में m या n में से कोई एक शून्य हो सकता है। चूंकि चौड़ाई a > ऊंचाई b है, अतः सबसे निचली विधा TE10 होती है।",
        "bn": "চারটি অভ্যন্তরীণ পরিবাহী দেয়ালে স্পর্শকীয় তড়িৎ ক্ষেত্র শূন্য হতে হয়।\nসমাধান করলে পাওয়া যায়: k_x = m π / a, k_y = n π / b।\n\nTM মোডের জন্য m ও n উভয়কেই অন্তত ১ হতে হয়, তাই সর্বনিম্ন TM মোড হলো TM11।\nTE মোডের ক্ষেত্রে m অথবা n শূন্য হতে পারে। যেহেতু প্রস্থ a > উচ্চতা b, তাই সামগ্রিক সর্বনিম্ন মোড হলো TE10।"
      },
      "schematicId": "circuit-ch11-waveguides-cutoff-dispersion"
    },
    {
      "id": "sec-dispersion-velocities",
      "title": {
        "en": "2. Wave Dispersion, Phase Velocity & Group Velocity",
        "hi": "2. तरंग विक्षेपण, कला वेग एवं समूह वेग",
        "bn": "২. তরঙ্গ বিচ্ছুরণ, দশা বেগ ও দলগত বেগ"
      },
      "content": {
        "en": "A waveguide is inherently a dispersive transmission system: signals of different frequencies travel at different velocities!\n\nThe dispersion relation inside a waveguide is nonlinear:\nβ(ω) = √[ (ω/c)² - (ω_c/c)² ] = (1/c) √[ ω² - ω_c² ].\n\nBecause the relationship between ω and β is a curve rather than a straight line:\n• The Phase Velocity v_p = ω / β = c / √[ 1 - (f_c / f)² ] represents the speed at which individual geometric wave peaks travel. As f approaches cutoff (f ⟶ f_c), v_p approaches infinity (∞)!\n• The Group Velocity v_g = dω / dβ = c √[ 1 - (f_c / f)² ] represents the true physical speed at which information, signals, and electromagnetic energy are transported down the guide. As f approaches cutoff, v_g approaches zero.\n\nEnergy bounces almost purely side-to-side between the walls near cutoff, stalling forward progress. Far above cutoff (f ≫ f_c), v_p and v_g both converge to the speed of light c.",
        "hi": "वेवगाइड एक विक्षेपी प्रणाली है जिसमें विभिन्न आवृत्तियों की तरंगें अलग-अलग गति से चलती हैं।\n\nकला वेग (v_p = ω/β) तरंग शिखाओं की गति है, जो f ⟶ f_c होने पर अनंत (∞) की ओर जाती है।\nसमूह वेग (v_g = dω/dβ) सूचना और ऊर्जा संचरण की वास्तविक गति है, जो f ⟶ f_c होने पर शून्य हो जाती है।\nआइंस्टीन के सापेक्षता सिद्धांत के अनुसार v_p · v_g = c² सदैव सत्य रहता है।",
        "bn": "ওয়েভগাইড একটি বিচ্ছুরণশীল মাধ্যম যেখানে বিভিন্ন কম্পাঙ্কের সংকেত ভিন্ন ভিন্ন গতিতে চলে।\n\nদশা বেগ (v_p = ω/β) তরঙ্গ চূড়ার গতি নির্দেশ করে, যা f ⟶ f_c হলে অসীমের দিকে ধাবিত হয়।\nদলগত বেগ (v_g = dω/dβ) তথ্য ও শক্তি পরিবহনের প্রকৃত বেগ, যা f ⟶ f_c হলে শূন্য হয়ে যায়।\nআইনস্টাইনের আপেক্ষিকতা তত্ত্বানুসারে v_p · v_g = c² সর্বদা অটুট থাকে।"
      }
    }
  ],
  "diagrams": [
    {
      "id": "diag-ch11-waveguides-cutoff-dispersion",
      "title": {
        "en": "Rectangular Waveguide TE10 Field Distribution, Zig-Zag Ray Paths & Dispersion Curves",
        "hi": "आयताकार वेवगाइड TE10 क्षेत्र वितरण, ज़िग-ज़ैग किरण पथ एवं विक्षेपण वक्र",
        "bn": "আয়তাকার ওয়েভগাইড TE10 ক্ষেত্র বিন্যাস, আঁকাবাঁকা রশ্মি পথ এবং বিচ্ছুরণ বক্ররেখা"
      },
      "caption": {
        "en": "Schematic of standard rectangular waveguide (dimensions a × b), TE10 transverse electric field profile E_y(x) = sin(π x / a), bouncing plane wave ray vectors, and ω-β hyperbolic dispersion curves showing v_p and v_g.",
        "hi": "मानक आयताकार वेवगाइड (a × b), TE10 विद्युत क्षेत्र प्रोफ़ाइल E_y = sin(π x / a), दीवारों से टकराती तरंगों के किरण पथ तथा ω-β विक्षेपण वक्र का विस्तृत आरेख।",
        "bn": "আদর্শ আয়তাকার ওয়েভগাইড (a × b), TE10 তড়িৎ ক্ষেত্র প্রোফাইল E_y = sin(π x / a), দেয়ালে প্রতিফলিত রশ্মি পথ এবং ω-β বিচ্ছুরণ রেখাচিত্র।"
      },
      "svgType": "circuit-ch11-waveguides-cutoff-dispersion"
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-ch11-l12-01",
      "problem": {
        "en": "A standard WR-90 X-band rectangular waveguide has internal dimensions a = 2.286 cm (0.900 inches) and b = 1.016 cm (0.400 inches). The waveguide is filled with air. Calculate: (a) the cutoff frequency for the dominant TE10 mode, (b) the cutoff frequency for the TE20, TE01, and TM11 modes, (c) the guide wavelength λ_g at operating frequency f = 10 GHz, and (d) the phase velocity v_p and group velocity v_g at 10 GHz.",
        "hi": "एक मानक WR-90 X-बैंड आयताकार वेवगाइड के आंतरिक आयाम a = 2.286 cm तथा b = 1.016 cm हैं। ज्ञात कीजिए: (a) प्रमुख TE10 विधा की अंतक आवृत्ति, (b) TE20, TE01 तथा TM11 की अंतक आवृत्तियां, (c) 10 GHz पर गाइड तरंगदैर्ध्य λ_g, तथा (d) 10 GHz पर कला वेग v_p एवं समूह वेग v_g।",
        "bn": "একটি আদর্শ WR-90 X-ব্যান্ড আয়তাকার ওয়েভগাইডের অভ্যন্তরীণ মাত্রা a = ২.২৮৬ সেমি এবং b = ১.০১৬ সেমি। নির্ণয় করুন: (a) প্রধান TE10 মোডের কাটঅফ কম্পাঙ্ক, (b) TE20, TE01 ও TM11 মোডের কাটঅফ কম্পাঙ্ক, (c) ১০ GHz কম্পাঙ্কে গাইড তরঙ্গদৈর্ঘ্য λ_g, এবং (d) ১০ GHz এ দশা বেগ v_p ও দলগত বেগ v_g।"
      },
      "solution": {
        "en": "Given: a = 0.02286 m, b = 0.01016 m, c = 3.0 × 10⁸ m/s.\nFormula: f_c,mn = (c / 2) √[ (m / a)² + (n / b)² ].\n\n(a) Dominant TE10 mode (m = 1, n = 0):\nf_c,10 = c / (2 a) = (3.0 × 10⁸) / (2 × 0.02286) = (3.0 × 10⁸) / 0.04572 = 6.562 × 10⁹ Hz = 6.562 GHz.\nλ_c,10 = 2 a = 4.572 cm.\n\n(b) Next higher-order modes:\n• TE20 (m = 2, n = 0): f_c,20 = 2 × f_c,10 = 2 × 6.562 = 13.124 GHz.\n• TE01 (m = 0, n = 1): f_c,01 = c / (2 b) = (3.0 × 10⁸) / (2 × 0.01016) = (3.0 × 10⁸) / 0.02032 = 14.764 GHz.\n• TM11 (m = 1, n = 1): f_c,11 = (c / 2) √[ (1/0.02286)² + (1/0.01016)² ] = √[ (6.562)² + (14.764)² ] = √[ 43.06 + 217.98 ] = √261.04 = 16.157 GHz.\nNotice that between 6.56 GHz and 13.12 GHz, ONLY the dominant TE10 mode can propagate!\n\n(c) At f = 10 GHz:\nFree-space wavelength: λ0 = c / f = (3.0 × 10⁸) / (10 × 10⁹) = 0.030 m = 3.00 cm.\nCutoff ratio: (f_c / f) = 6.562 / 10.0 = 0.6562.\n√[ 1 - (f_c / f)² ] = √[ 1 - (0.6562)² ] = √[ 1 - 0.4306 ] = √0.5694 = 0.7546.\nGuide wavelength: λ_g = λ0 / 0.7546 = 3.00 cm / 0.7546 = 3.976 cm.\n\n(d) Velocities at 10 GHz:\nPhase velocity: v_p = c / 0.7546 = (3.0 × 10⁸) / 0.7546 = 3.976 × 10⁸ m/s (1.325 c, faster than light!).\nGroup velocity: v_g = c × 0.7546 = (3.0 × 10⁸) × 0.7546 = 2.264 × 10⁸ m/s (0.755 c, strictly subluminal).\nCheck: v_p × v_g = (3.976 × 10⁸) × (2.264 × 10⁸) = 9.00 × 10¹⁶ = c² (Verified).",
        "hi": "(a) TE10 की अंतक आवृत्ति: f_c,10 = c / (2 a) = 3×10⁸ / (2 × 0.02286) = 6.562 GHz।\n(b) TE20 = 13.12 GHz; TE01 = 14.76 GHz; TM11 = 16.16 GHz।\n(c) 10 GHz पर λ0 = 3.0 cm। √[1 - (6.562/10)²] = 0.7546। λ_g = 3.0 / 0.7546 = 3.98 cm।\n(d) कला वेग v_p = c / 0.7546 = 3.98 × 10⁸ m/s। समूह वेग v_g = c × 0.7546 = 2.26 × 10⁸ m/s।",
        "bn": "(a) TE10 এর কাটঅফ কম্পাঙ্ক: f_c,10 = c / (২ a) = ৩×১০⁸ / (২ × ০.০২২৮৬) = ৬.৫৬২ GHz।\n(b) TE20 = ১৩.১২ GHz; TE01 = ১৪.৭৬ GHz; TM11 = ১৬.১৬ GHz।\n(c) ১০ GHz এ λ0 = ৩.০ সেমি। √[১ - (৬.৫৬২/১০)²] = ০.৭৫৪৬। λ_g = ৩.০ / ০.৭৫৪৬ = ৩.৯৮ সেমি।\n(d) দশা বেগ v_p = ৩.৯৮ × ১০⁸ m/s; দলগত বেগ v_g = ২.২৬ × ১০⁸ m/s।"
      }
    },
    {
      "id": "ex-ch11-l12-02",
      "problem": {
        "en": "A rectangular air-filled waveguide is designed to operate in the single-mode TE10 regime from 8.2 GHz to 12.4 GHz. If the design requires the operating band to be safely centered such that the lowest operating frequency (8.2 GHz) is 1.25 times f_c,10, determine: (a) the required broad dimension 'a', and (b) the maximum allowable height 'b' such that the TE01 mode does not propagate at 12.4 GHz.",
        "hi": "एक आयताकार वेवगाइड को 8.2 GHz से 12.4 GHz तक एकल-विधा TE10 में कार्य करने के लिए डिज़ाइन किया गया है। यदि 8.2 GHz की आवृत्ति f_c,10 की 1.25 गुना हो, तो ज्ञात कीजिए: (a) आवश्यक चौड़ाई 'a', तथा (b) ऊंचाई 'b' का अधिकतम मान ताकि 12.4 GHz पर TE01 विधा संचरित न हो।",
        "bn": "একটি আয়তাকার ওয়েভগাইড ৮.২ GHz থেকে ১২.৪ GHz পর্যন্ত একক TE10 মোডে কাজ করবে। যদি ৮.২ GHz কম্পাঙ্কটি f_c,10 এর ১.২৫ গুণ হয়, তবে নির্ণয় করুন: (a) প্রয়োজনীয় প্রস্থ 'a', এবং (b) সর্বোচ্চ অনুমোদিত উচ্চতা 'b' যাতে ১২.৪ GHz এ TE01 মোড সঞ্চালিত হতে না পারে।"
      },
      "solution": {
        "en": "Step 1: Calculate broad wall width 'a':\nf_lowest = 1.25 × f_c,10 = 8.2 GHz.\nf_c,10 = 8.2 / 1.25 = 6.56 GHz.\nSince f_c,10 = c / (2 a):\na = c / (2 f_c,10) = (3.0 × 10⁸) / (2 × 6.56 × 10⁹) = (3.0 × 10⁸) / (1.312 × 10¹⁰) = 0.02287 m = 2.29 cm.\n\nStep 2: Determine maximum height 'b':\nTo prevent the TE01 mode from propagating at the highest frequency f_highest = 12.4 GHz, we must require:\nf_c,01 > 12.4 GHz.\nSince f_c,01 = c / (2 b):\nc / (2 b) > 12.4 × 10⁹  ⟹  b < c / (2 × 12.4 × 10⁹) = (3.0 × 10⁸) / (2.48 × 10¹⁰) = 0.0121 m = 1.21 cm.\nTypically, engineers set b = a / 2 = 2.286 / 2 = 1.143 cm, safely pushing f_c,01 up to ~13.1 GHz.",
        "hi": "चरण 1: f_c,10 = 8.2 / 1.25 = 6.56 GHz। a = c / (2 × 6.56×10⁹) = 2.29 cm।\nचरण 2: TE01 को रोकने के लिए f_c,01 > 12.4 GHz आवश्यक है। b < c / (2 × 12.4×10⁹) = 1.21 cm। व्यावहारिक रूप से b ≈ a / 2 = 1.14 cm चुना जाता है।",
        "bn": "ধাপ ১: f_c,10 = ৮.২ / ১.২৫ = ৬.৫৬ GHz। a = c / (২ × ৬.৫৬×১০⁹) = ২.২৯ সেমি।\nধাপ ২: TE01 মোড আটকাতে f_c,01 > ১২.৪ GHz হতে হবে। b < c / (২ × ১২.৪×১০⁹) = ১.২১ সেমি। বাস্তবে b ≈ a / ২ = ১.১৪ সেমি রাখা হয়।"
      }
    }
  ],
  "practicalApplications": {
    "en": [
      "High-Power Radar Systems: Weather radar, air-traffic surveillance, and naval phased-array radars use rectangular copper waveguides capable of handling megawatts of peak RF power without dielectric breakdown.",
      "Satellite Communication Feeds: Earth station parabolic satellite dishes use waveguides to route 4–30 GHz signals between the feedhorn and low-noise amplifiers with fractions of a decibel of loss.",
      "Linear Particle Accelerators: SLAC and CERN utilize copper waveguide structures operating at S-band (2.856 GHz) to generate immense longitudinal electric fields that accelerate electrons to near the speed of light.",
      "Medical Radiation Oncology (LINACs): Cancer radiotherapy systems use microwave waveguides to transport RF power from magnetrons into accelerator cavities to generate therapeutic X-ray beams.",
      "Microwave Radiometers & Astronomy: Deep-space radio telescopes use cryogenic waveguides to capture faint cosmic microwave background signals without adding thermal noise."
    ],
    "hi": [
      "उच्च-शक्ति रडार प्रणालियां: मौसम रडार और विमानन रडार मेगावाट स्तर की RF शक्ति को सुरक्षित रूप से भेजने के लिए आयताकार वेवगाइड्स का उपयोग करते हैं।",
      "उपग्रह संचार (सैटकॉम): अर्थ स्टेशन डिश एंटेना 4 से 30 GHz के सिग्नलों को न्यूनतम हानि के साथ जोड़ने के लिए वेवगाइड्स का उपयोग करते हैं।",
      "कण त्वरक (LINAC): SLAC और सर्न (CERN) में इलेक्ट्रॉनों को प्रकाश की गति तक त्वरित करने के लिए माइक्रोवेव वेवगाइड्स का उपयोग किया जाता है।",
      "कैंसर रेडियोथेरेपी: अस्पतालों में कैंसर ट्यूमर को नष्ट करने वाली एक्स-रे किरणें बनाने के लिए वेवगाइड्स द्वारा माइक्रोवेव शक्ति पहुंचाई जाती है।",
      "रेडियो खगोल विज्ञान: गहरे अंतरिक्ष से आने वाले दुर्बल ब्रह्मांडीय सिग्नलों को पकड़ने के लिए वेवगाइड्स का उपयोग किया जाता है।"
    ],
    "bn": [
      "উচ্চ-ক্ষমতার রাডার ব্যবস্থা: আবহাওয়া ও সামরিক রাডারে মেগাওয়াট ক্ষমতার মাইক্রোওয়েভ সংকেত পরিবহনে আয়তাকার ওয়েভগাইড ব্যবহৃত হয়।",
      "স্যাটেলাইট যোগাযোগ: স্যাটেলাইট গ্রাউন্ড স্টেশনে ৪-৩০ GHz সংকেত সর্বনিম্ন অপচয়ে স্থানান্তর করতে ওয়েভগাইড অপরিহার্য।",
      "কণা ত্বরণকারী (LINAC): সার্ন (CERN) এবং অন্যান্য গবেষণাগারে কণিকাকে আলোর কাছাকাছি বেগে ত্বরান্বিত করতে ওয়েভগাইড ব্যবহৃত হয়।",
      "ক্যান্সার রেডিওথেরাপি: মেডিকেল লিনাক মেশিনে এক্স-রে রশ্মি তৈরির লক্ষ্যে মাইক্রোওয়েভ শক্তি সঞ্চালনে ওয়েভগাইড ব্যবহৃত হয়।",
      "রেডিও জ্যোতির্বিজ্ঞান: মহাকাশ থেকে আগত অতি ক্ষীণ মহাজাগতিক সংকেত নিখুঁতভাবে সংগ্রহ করতে ক্রায়োজেনিক ওয়েভগাইড ব্যবহৃত হয়।"
    ]
  },
  "importantPoints": {
    "en": [
      "Hollow single-conductor metallic waveguides CANNOT support TEM waves; they only support TE and TM modes.",
      "Cutoff frequency f_c defines a sharp high-pass filter boundary: waves with f > f_c propagate freely, while waves with f < f_c are evanescent and attenuate exponentially.",
      "The dominant mode in a rectangular waveguide (a > b) is TE10, having cutoff wavelength λ_c = 2a and cutoff frequency f_c = c / (2a).",
      "Guide wavelength λ_g is always strictly greater than free-space wavelength λ0 (λ_g > λ0).",
      "Phase velocity v_p exceeds the speed of light (v_p > c), while group velocity v_g is less than c (v_g < c), maintaining v_p · v_g = c²."
    ],
    "hi": [
      "खोखली एकल-चालक वेवगाइड्स में TEM तरंगें संभव नहीं हैं; ये केवल TE और TM विधाओं का समर्थन करती हैं।",
      "अंतक आवृत्ति f_c एक उच्च-पास फिल्टर की भांति कार्य करती है: f > f_c पर तरंग संचरित होती है, तथा f < f_c पर तुरंत क्षय हो जाती है।",
      "आयताकार वेवगाइड में प्रमुख विधा TE10 होती है, जिसकी अंतक आवृत्ति f_c = c / (2a) होती है।",
      "गाइड तरंगदैर्ध्य λ_g सदैव मुक्त अंतरिक्ष तरंगदैर्ध्य λ0 से बड़ी होती है (λ_g > λ0)।",
      "कला वेग प्रकाश की गति से अधिक (v_p > c) होता है, जबकि समूह वेग कम (v_g < c) होता है, और v_p · v_g = c² बना रहता है।"
    ],
    "bn": [
      "একক পরিবাহী ফাঁপা ওয়েভগাইডে TEM তরঙ্গ সঞ্চালিত হতে পারে না; কেবল TE ও TM মোড সমর্থিত।",
      "কাটঅফ কম্পাঙ্ক f_c হাই-পাস ফিল্টারের মতো কাজ করে: f > f_c তে তরঙ্গ চলে, f < f_c তে তরঙ্গ বিলীন হয়ে যায়।",
      "আয়তাকার ওয়েভগাইডের প্রধান মোড হলো TE10, যার কাটঅফ কম্পাঙ্ক f_c = c / (২a)।",
      "গাইড তরঙ্গদৈর্ঘ্য λ_g সর্বদা মুক্ত স্থানের তরঙ্গদৈর্ঘ্য λ0 এর চেয়ে বড় হয় (λ_g > λ0)।",
      "দশা বেগ আলোর চেয়ে বেশি (v_p > c) এবং দলগত বেগ আলোর চেয়ে কম (v_g < c) হলেও v_p · v_g = c² বজায় থাকে।"
    ]
  },
  "commonMistakes": {
    "en": [
      "Believing TEM modes can propagate in a hollow single-pipe waveguide (TEM requires at least two separate conductors).",
      "Thinking the TE10 cutoff frequency depends on guide height 'b'; f_c,10 = c / (2a) depends purely on broad width 'a'.",
      "Assuming TM10 or TM01 modes exist; for TM modes, boundary conditions require both m ≥ 1 and n ≥ 1 (lowest TM mode is TM11).",
      "Confusing phase velocity v_p (which can exceed c without violating relativity) with group velocity v_g (which carries information and is strictly ≤ c)."
    ],
    "hi": [
      "यह सोचना कि खोखले वेवगाइड में TEM विधा चल सकती है (TEM के लिए कम से कम दो अलग चालकों की आवश्यकता होती है)।",
      "यह मानना कि TE10 की अंतक आवृत्ति ऊंचाई 'b' पर निर्भर करती है; f_c,10 = c / (2a) केवल चौड़ाई 'a' पर निर्भर करती है।",
      "TM10 या TM01 विधाओं का अस्तित्व मान लेना; TM के लिए m और n दोनों का न्यूनतम 1 होना आवश्यक है (न्यूनतम TM विधा TM11 है)।",
      "कला वेग v_p (जो c से अधिक हो सकता है) को समूह वेग v_g (जो सूचना ले जाता है और सदैव ≤ c होता है) के साथ मिला देना।"
    ],
    "bn": [
      "মনে করা যে ফাঁপা একক পাইপে TEM মোড চলতে পারে (TEM এর জন্য দুটি পৃথক পরিবাহী প্রয়োজন)।",
      "মনে করা যে TE10 এর কাটঅফ কম্পাঙ্ক উচ্চতা 'b' এর ওপর নির্ভর করে; f_c,10 = c / (২a) কেবল প্রস্থ 'a' এর ওপর নির্ভরশীল।",
      "TM10 বা TM01 মোডের অস্তিত্ব কল্পনা করা; TM মোডের জন্য m ও n উভয়কেই অন্তত ১ হতে হয় (সর্বনিম্ন TM মোড TM11)।",
      "দশা বেগ v_p (যা আলোর চেয়ে বেশি হতে পারে) এবং দলগত বেগ v_g (যা তথ্য পরিবহন করে এবং সর্বদা ≤ c) গুলিয়ে ফেলা।"
    ]
  },
  "keyTakeaways": {
    "en": [
      "Hollow rectangular waveguides act as ultra-low-loss high-power conduits for microwave and millimeter waves.",
      "The cutoff frequency f_c enforces an absolute high-pass filter boundary for electromagnetic wave propagation.",
      "The dominant TE10 mode provides single-mode operational bandwidth with predictable field profiles and zero cross-mode interference.",
      "Wave dispersion causes phase velocity to exceed the speed of light while energy travels subluminally at group velocity, confirming v_p · v_g = c²."
    ],
    "hi": [
      "खोखले आयताकार वेवगाइड्स माइक्रोवेव आवृत्तियों पर न्यूनतम हानि वाले उच्च-शक्ति संचरण माध्यम हैं।",
      "अंतक आवृत्ति f_c विद्युत चुंबकीय तरंगों के संचरण के लिए एक पूर्ण उच्च-पास फिल्टर सीमा लागू करती है।",
      "प्रमुख TE10 विधा बिना किसी व्यतिकरण के विस्तृत बैंडविड्थ में स्थिर प्रचालन प्रदान करती है।",
      "तरंग विक्षेपण के कारण कला वेग प्रकाश से तेज और समूह वेग प्रकाश से धीमा होता है, जिससे v_p · v_g = c² सिद्ध होता है।"
    ],
    "bn": [
      "ফাঁপা আয়তাকার ওয়েভগাইড মাইক্রোওয়েভ সংকেতের জন্য অত্যন্ত কম অপচয়ের উচ্চ-ক্ষমতাসম্পন্ন পথ।",
      "কাটঅফ কম্পাঙ্ক f_c তরঙ্গের জন্য একটি অনিবার্য হাই-পাস ফিল্টার দেওয়াল তৈরি করে।",
      "প্রধান TE10 মোড কোনো মোড বিভ্রান্তি ছাড়াই প্রশস্ত ব্যান্ডউইথ প্রদান করে।",
      "তরঙ্গ বিচ্ছুরণের কারণে দশা বেগ আলোর চেয়ে বেশি হলেও শক্তি আলোর চেয়ে কম গতিতে চলে, ফলে v_p · v_g = c² সংরক্ষিত থাকে।"
    ]
  },
  "mcqs": [
    {
      "id": "mcq-ch11-l12-01",
      "question": {
        "en": "Why can a hollow metallic rectangular pipe NOT support a Transverse ElectroMagnetic (TEM) wave?",
        "hi": "एक खोखली धातु की आयताकार नली अनुप्रस्थ विद्युत चुंबकीय (TEM) तरंग का समर्थन क्यों नहीं कर सकती?",
        "bn": "একটি ফাঁপা ধাতব আয়তাকার পাইপ কেন ট্রান্সভার্স ইলেকট্রোম্যাগনেটিক (TEM) তরঙ্গ সমর্থন করতে পারে না?"
      },
      "options": [
        {
          "id": "opt-1",
          "text": {
            "en": "Because it has only one single continuous conducting boundary",
            "hi": "क्योंकि इसमें केवल एक ही सतत चालक सीमा होती है",
            "bn": "কারণ এতে কেবল একটি একক নিরবচ্ছিন্ন পরিবাহী সীমানা থাকে"
          }
        },
        {
          "id": "opt-2",
          "text": {
            "en": "Because it is made of metal instead of plastic",
            "hi": "क्योंकि यह प्लास्टिक के बजाय धातु की बनी होती है",
            "bn": "কারণ এটি প্লাস্টিকের বদলে ধাতু দিয়ে তৈরি"
          }
        },
        {
          "id": "opt-3",
          "text": {
            "en": "Because TEM waves only exist in vacuum",
            "hi": "क्योंकि TEM तरंगें केवल निर्वात में होती हैं",
            "bn": "কারণ TEM তরঙ্গ কেবল শূন্যস্থানে থাকে"
          }
        },
        {
          "id": "opt-4",
          "text": {
            "en": "Because the frequency is too high",
            "hi": "क्योंकि आवृत्ति बहुत अधिक होती है",
            "bn": "কারণ কম্পাঙ্ক অত্যন্ত বেশি"
          }
        }
      ],
      "correctOptionId": "opt-1",
      "explanation": {
        "en": "TEM waves require at least two electrically isolated conductors (like coaxial cable) to maintain electrostatic potential differences. A single closed conductor has a uniform boundary potential, forcing electrostatic fields inside to be identically zero.",
        "hi": "TEM तरंगों के लिए कम से कम दो अलग चालकों की आवश्यकता होती है। एकल चालक की पूरी सीमा पर समान विभव होने के कारण भीतर अनुप्रस्थ स्थैतिक क्षेत्र शून्य हो जाता है।",
        "bn": "TEM তরঙ্গের জন্য অন্তত দুটি পৃথক পরিবাহী প্রয়োজন। একক পরিবাহীতে বিভব সমান থাকায় ভেতরে অনুদৈর্ঘ্যহীন স্থির তড়িৎ ক্ষেত্র থাকা অসম্ভব।"
      }
    },
    {
      "id": "mcq-ch11-l12-02",
      "question": {
        "en": "What is the dominant mode in an air-filled rectangular waveguide with broad wall width 'a' and height 'b' (where a > b)?",
        "hi": "आयताकार वेवगाइड (चौड़ाई 'a' > ऊंचाई 'b') में प्रमुख विधा (Dominant Mode) कौन सी होती है?",
        "bn": "আয়তাকার ওয়েভগাইডে (প্রস্থ 'a' > উচ্চতা 'b') প্রধান মোড (Dominant Mode) কোনটি?"
      },
      "options": [
        {
          "id": "opt-1",
          "text": {
            "en": "TM01",
            "hi": "TM01",
            "bn": "TM01"
          }
        },
        {
          "id": "opt-2",
          "text": {
            "en": "TE10",
            "hi": "TE10",
            "bn": "TE10"
          }
        },
        {
          "id": "opt-3",
          "text": {
            "en": "TE01",
            "hi": "TE01",
            "bn": "TE01"
          }
        },
        {
          "id": "opt-4",
          "text": {
            "en": "TM11",
            "hi": "TM11",
            "bn": "TM11"
          }
        }
      ],
      "correctOptionId": "opt-2",
      "explanation": {
        "en": "The dominant mode has the lowest cutoff frequency of all possible modes. Since a > b, f_c,10 = c / (2a) is strictly the lowest cutoff frequency, making TE10 the dominant mode.",
        "hi": "चूंकि a > b है, अतः f_c,10 = c / (2a) सबसे न्यूनतम अंतक आवृत्ति होती है, जिससे TE10 प्रमुख विधा बनती है।",
        "bn": "যেহেতু a > b, তাই f_c,10 = c / (২a) হলো সর্বনিম্ন কাটঅফ কম্পাঙ্ক, ফলে TE10 প্রধান মোড।"
      }
    },
    {
      "id": "mcq-ch11-l12-03",
      "question": {
        "en": "What happens if a signal of frequency f is launched into a waveguide where f is below the cutoff frequency (f < f_c)?",
        "hi": "यदि वेवगाइड में अंतक आवृत्ति से कम (f < f_c) आवृत्ति का सिग्नल भेजा जाए तो क्या होता है?",
        "bn": "কাটঅফ কম্পাঙ্কের চেয়ে কম (f < f_c) কম্পাঙ্কের সংকেত ওয়েভগাইডে প্রবেশ করালে কী ঘটবে?"
      },
      "options": [
        {
          "id": "opt-1",
          "text": {
            "en": "The wave travels faster than the speed of light with zero loss",
            "hi": "तरंग बिना किसी हानि के प्रकाश से तेज गति से चलती है",
            "bn": "তরঙ্গ কোনো অপচয় ছাড়াই আলোর চেয়ে দ্রুত গতিতে চলবে"
          }
        },
        {
          "id": "opt-2",
          "text": {
            "en": "The wave is evanescent and attenuates exponentially down the tube without propagating power",
            "hi": "तरंग अवमंदित हो जाती है और बिना शक्ति संचरित किए चरघातांकी रूप से नष्ट हो जाती है",
            "bn": "তরঙ্গটি ক্ষীয়মাণ হয়ে যায় এবং শক্তি সঞ্চালন না করে সূচকীয় হারে নিঃশেষ হয়"
          }
        },
        {
          "id": "opt-3",
          "text": {
            "en": "The wave converts permanently into sound waves",
            "hi": "तरंग ध्वनि तरंगों में बदल जाती है",
            "bn": "তরঙ্গটি শব্দ তরঙ্গে রূপান্তরিত হয়"
          }
        },
        {
          "id": "opt-4",
          "text": {
            "en": "The wave reflects back with increased frequency",
            "hi": "तरंग बढ़ी हुई आवृत्ति के साथ वापस लौटती है",
            "bn": "তরঙ্গটি বর্ধিত কম্পাঙ্ক নিয়ে ফিরে আসে"
          }
        }
      ],
      "correctOptionId": "opt-2",
      "explanation": {
        "en": "Below cutoff, propagation constant β becomes purely imaginary (β = -j α). The wave is evanescent: E(z) ~ e^(-α z), causing rapid exponential decay with zero net power transfer.",
        "hi": "f < f_c होने पर प्रसरण स्थिरांक काल्पनिक (β = -j α) हो जाता है। तरंग अवमंदित होकर e^(-α z) के अनुसार तुरंत क्षीण हो जाती है।",
        "bn": "f < f_c হলে বিস্তার ধ্রুবক কাল্পনিক (β = -j α) হয়ে যায়। ফলে তরঙ্গটি সূচকীয় হারে (e^(-α z)) দ্রুত মিলিয়ে যায়।"
      }
    },
    {
      "id": "mcq-ch11-l12-04",
      "question": {
        "en": "What is the cutoff wavelength λ_c for the dominant TE10 mode in an air-filled rectangular waveguide of broad width a = 3.0 cm?",
        "hi": "चौड़ाई a = 3.0 cm वाले आयताकार वेवगाइड में प्रमुख TE10 विधा की अंतक तरंगदैर्ध्य λ_c क्या है?",
        "bn": "a = ৩.০ সেমি প্রশস্ত আয়তাকার ওয়েভগাইডে প্রধান TE10 মোডের কাটঅফ তরঙ্গদৈর্ঘ্য λ_c কত?"
      },
      "options": [
        {
          "id": "opt-1",
          "text": {
            "en": "1.5 cm",
            "hi": "1.5 cm",
            "bn": "১.৫ সেমি"
          }
        },
        {
          "id": "opt-2",
          "text": {
            "en": "3.0 cm",
            "hi": "3.0 cm",
            "bn": "৩.০ সেমি"
          }
        },
        {
          "id": "opt-3",
          "text": {
            "en": "6.0 cm",
            "hi": "6.0 cm",
            "bn": "৬.০ সেমি"
          }
        },
        {
          "id": "opt-4",
          "text": {
            "en": "12.0 cm",
            "hi": "12.0 cm",
            "bn": "১২.০ সেমি"
          }
        }
      ],
      "correctOptionId": "opt-3",
      "explanation": {
        "en": "For the TE10 mode, the cutoff wavelength is λ_c,10 = 2a = 2 × 3.0 cm = 6.0 cm.",
        "hi": "TE10 विधा के लिए अंतक तरंगदैर्ध्य λ_c,10 = 2a = 2 × 3.0 = 6.0 cm होती है।",
        "bn": "TE10 মোডের জন্য কাটঅফ তরঙ্গদৈর্ঘ্য λ_c,10 = ২a = ২ × ৩.০ = ৬.০ সেমি।"
      }
    },
    {
      "id": "mcq-ch11-l12-05",
      "question": {
        "en": "What is the mathematical product of the phase velocity v_p and the group velocity v_g inside a lossless waveguide?",
        "hi": "एक हानिरहित वेवगाइड के भीतर कला वेग v_p और समूह वेग v_g का गुणनफल क्या होता है?",
        "bn": "একটি অপচয়হীন ওয়েভগাইডের অভ্যন্তরে দশা বেগ v_p এবং দলগত বেগ v_g এর গুণফল কত?"
      },
      "options": [
        {
          "id": "opt-1",
          "text": {
            "en": "0",
            "hi": "0",
            "bn": "০"
          }
        },
        {
          "id": "opt-2",
          "text": {
            "en": "c (speed of light)",
            "hi": "c (प्रकाश की गति)",
            "bn": "c (আলোর বেগ)"
          }
        },
        {
          "id": "opt-3",
          "text": {
            "en": "c² (speed of light squared)",
            "hi": "c² (प्रकाश की गति का वर्ग)",
            "bn": "c² (আলোর বেগের বর্গ)"
          }
        },
        {
          "id": "opt-4",
          "text": {
            "en": "Infinity",
            "hi": "अनंत",
            "bn": "অসীম"
          }
        }
      ],
      "correctOptionId": "opt-3",
      "explanation": {
        "en": "Since v_p = c / √[1 - (f_c/f)²] and v_g = c √[1 - (f_c/f)²], their product is v_p · v_g = c².",
        "hi": "कला वेग v_p = c / √[1 - (f_c/f)²] तथा समूह वेग v_g = c √[1 - (f_c/f)²] का गुणनफल ठीक c² होता है।",
        "bn": "দশা বেগ v_p ও দলগত বেগ v_g এর গুণফল সর্বদা আলোর বেগের বর্গের সমান: v_p · v_g = c²।"
      }
    },
    {
      "id": "mcq-ch11-l12-06",
      "question": {
        "en": "Why does the TM10 mode NOT exist in a rectangular waveguide?",
        "hi": "आयताकार वेवगाइड में TM10 विधा का अस्तित्व क्यों नहीं होता है?",
        "bn": "আয়তাকার ওয়েভগাইডে TM10 মোডের অস্তিত্ব কেন থাকে না?"
      },
      "options": [
        {
          "id": "opt-1",
          "text": {
            "en": "Because boundary conditions force E_z to be zero everywhere if either m = 0 or n = 0",
            "hi": "क्योंकि यदि m = 0 या n = 0 हो तो सीमा शर्तें E_z को पूरे क्षेत्र में शून्य कर देती हैं",
            "bn": "কারণ m = ০ বা n = ০ হলে সীমানা শর্ত E_z কে সব জায়গায় শূন্য করে দেয়"
          }
        },
        {
          "id": "opt-2",
          "text": {
            "en": "Because magnetic fields cannot enter copper",
            "hi": "क्योंकि चुंबकीय क्षेत्र तांबे में प्रवेश नहीं कर सकता",
            "bn": "কারণ চৌম্বক ক্ষেত্র তামায় প্রবেশ করতে পারে না"
          }
        },
        {
          "id": "opt-3",
          "text": {
            "en": "Because TM modes only exist in coaxial cables",
            "hi": "क्योंकि TM विधाएं केवल कोएक्सियल केबल में होती हैं",
            "bn": "কারণ TM মোড কেবল কোঅ্যাক্সিয়ালে থাকে"
          }
        },
        {
          "id": "opt-4",
          "text": {
            "en": "Because cutoff frequency would be negative",
            "hi": "क्योंकि अंतक आवृत्ति ऋणात्मक हो जाएगी",
            "bn": "কারণ কাটঅফ কম্পাঙ্ক ঋণাত্মক হবে"
          }
        }
      ],
      "correctOptionId": "opt-1",
      "explanation": {
        "en": "For TM modes, E_z(x, y) = E_0 sin(m π x / a) sin(n π y / b). If n = 0 (as in TM10), sin(0) = 0, causing E_z to vanish identically everywhere.",
        "hi": "TM विधा में E_z = E_0 sin(m π x / a) sin(n π y / b) होता है। यदि n = 0 हो, तो E_z शून्य हो जाता है, जिससे कोई क्षेत्र नहीं बचता।",
        "bn": "TM মোডে E_z = E_0 sin(m π x / a) sin(n π y / b)। n = ০ হলে sin(০) = ০ হয়ে E_z সম্পূর্ণ শূন্য হয়ে যায়।"
      }
    },
    {
      "id": "mcq-ch11-l12-07",
      "question": {
        "en": "How does the guide wavelength λ_g compare to the free-space wavelength λ0 inside a propagating waveguide?",
        "hi": "वेवगाइड के भीतर गाइड तरंगदैर्ध्य λ_g की तुलना मुक्त आकाश तरंगदैर्ध्य λ0 से कैसे होती है?",
        "bn": "ওয়েভগাইডের অভ্যন্তরে গাইড তরঙ্গদৈর্ঘ্য λ_g মুক্ত স্থানের তরঙ্গদৈর্ঘ্য λ0 এর তুলনায় কেমন?"
      },
      "options": [
        {
          "id": "opt-1",
          "text": {
            "en": "λ_g is always shorter than λ0 (λ_g < λ0)",
            "hi": "λ_g सदैव λ0 से छोटी होती है",
            "bn": "λ_g সর্বদা λ0 এর চেয়ে ছোট হয়"
          }
        },
        {
          "id": "opt-2",
          "text": {
            "en": "λ_g is always longer than λ0 (λ_g > λ0)",
            "hi": "λ_g सदैव λ0 से बड़ी होती है (λ_g > λ0)",
            "bn": "λ_g সর্বদা λ0 এর চেয়ে বড় হয় (λ_g > λ0)"
          }
        },
        {
          "id": "opt-3",
          "text": {
            "en": "λ_g is exactly equal to λ0",
            "hi": "λ_g सदैव λ0 के बराबर होती है",
            "bn": "λ_g সর্বদা λ0 এর সমান"
          }
        },
        {
          "id": "opt-4",
          "text": {
            "en": "λ_g is zero",
            "hi": "λ_g शून्य होती है",
            "bn": "λ_g শূন্য"
          }
        }
      ],
      "correctOptionId": "opt-2",
      "explanation": {
        "en": "Because λ_g = λ0 / √[1 - (f_c/f)²] and the square-root denominator is strictly less than 1 for propagating frequencies, λ_g is always strictly greater than λ0.",
        "hi": "चूंकि λ_g = λ0 / √[1 - (f_c/f)²] है और हर 1 से छोटा होता है, अतः λ_g सदैव λ0 से बड़ी होती है।",
        "bn": "যেহেতু λ_g = λ0 / √[১ - (f_c/f)²] এবং হর ১ এর চেয়ে ছোট, তাই λ_g সর্বদা λ0 এর চেয়ে বড় হয়।"
      }
    },
    {
      "id": "mcq-ch11-l12-08",
      "question": {
        "en": "What is the group velocity v_g in an air-filled waveguide at a frequency where f = 2 f_c?",
        "hi": "हवा से भरे वेवगाइड में f = 2 f_c आवृत्ति पर समूह वेग v_g क्या होगा?",
        "bn": "বাতাস ভর্তি ওয়েভগাইডে f = ২ f_c কম্পাঙ্কে দলগত বেগ v_g কত হবে?"
      },
      "options": [
        {
          "id": "opt-1",
          "text": {
            "en": "0.500 c",
            "hi": "0.500 c",
            "bn": "০.৫০০ c"
          }
        },
        {
          "id": "opt-2",
          "text": {
            "en": "0.866 c",
            "hi": "0.866 c",
            "bn": "০.৮৬৬ c"
          }
        },
        {
          "id": "opt-3",
          "text": {
            "en": "1.155 c",
            "hi": "1.155 c",
            "bn": "১.১৫৫ c"
          }
        },
        {
          "id": "opt-4",
          "text": {
            "en": "c",
            "hi": "c",
            "bn": "c"
          }
        }
      ],
      "correctOptionId": "opt-2",
      "explanation": {
        "en": "v_g = c √[1 - (f_c/f)²] = c √[1 - (1/2)²] = c √[1 - 0.25] = c √0.75 ≈ 0.866 c.",
        "hi": "v_g = c √[1 - (1/2)²] = c √0.75 = 0.866 c।",
        "bn": "v_g = c √[১ - (১/২)²] = c √০.৭৫ = ০.৮৬৬ c।"
      }
    }
  ],
  "practiceQuestions": [
    {
      "id": "pq-ch11-l12-01",
      "question": {
        "en": "An air-filled rectangular waveguide has internal dimensions a = 5.0 cm and b = 2.5 cm. (a) Determine the cutoff frequency of the dominant TE10 mode. (b) Find the guide wavelength λ_g and propagation constant β at an operating frequency of 4.0 GHz. (c) If a signal of 2.5 GHz is launched into the guide, calculate the attenuation constant α in Np/m and dB/m.",
        "hi": "हवा से भरे आयताकार वेवगाइड के आयाम a = 5.0 cm तथा b = 2.5 cm हैं। (a) प्रमुख TE10 विधा की अंतक आवृत्ति ज्ञात कीजिए। (b) 4.0 GHz पर गाइड तरंगदैर्ध्य λ_g तथा कला स्थिरांक β ज्ञात कीजिए। (c) यदि 2.5 GHz का सिग्नल भेजा जाए तो अवमंदन स्थिरांक α (Np/m तथा dB/m में) ज्ञात कीजिए।",
        "bn": "বাতাস ভর্তি আয়তাকার ওয়েভগাইডের মাত্রা a = ৫.০ সেমি এবং b = ২.৫ সেমি। (a) প্রধান TE10 মোডের কাটঅফ কম্পাঙ্ক নির্ণয় করুন। (b) ৪.০ GHz এ গাইড তরঙ্গদৈর্ঘ্য λ_g ও দশা ধ্রুবক β নির্ণয় করুন। (c) ২.৫ GHz সিগন্যাল প্রবেশ করালে ক্ষয় ধ্রুবক α (Np/m এবং dB/m এ) নির্ণয় করুন।"
      },
      "hint": {
        "en": "f_c = c / (2a). For f < f_c: α = (2π/c) √(f_c² - f²). Multiply Np/m by 8.686 for dB/m.",
        "hi": "f_c = 3×10⁸ / (2 × 0.05) = 3.0 GHz। 2.5 GHz < 3.0 GHz होने पर α ज्ञात करें।",
        "bn": "f_c = ৩×১০⁸ / (২ × ০.০৫) = ৩.০ GHz। ২.৫ GHz < ৩.০ GHz হওয়ায় α নির্ণয় করুন।"
      },
      "answerKey": {
        "en": "(a) f_c,10 = c / (2a) = (3.0 × 10⁸) / (2 × 0.05) = 3.0 × 10⁹ Hz = 3.0 GHz.\n(b) At f = 4.0 GHz: λ0 = c / f = 3.0 × 10⁸ / 4.0 × 10⁹ = 0.075 m = 7.5 cm.\n√[1 - (3/4)²] = √[1 - 0.5625] = √0.4375 = 0.6614.\nλ_g = 7.5 cm / 0.6614 = 11.34 cm.\nβ = 2π / λ_g = 2π / 0.1134 = 55.41 rad/m.\n(c) At f = 2.5 GHz (below cutoff): α = (2π / c) √[f_c² - f²] = (2π / 3×10⁸) √[(3.0×10⁹)² - (2.5×10⁹)²]\n= (2.094 × 10⁻⁸) × √[9.0 - 6.25] × 10⁹ = (2.094 × 10⁻⁸) × (1.6583 × 10⁹) = 34.73 Np/m.\nIn dB/m: α_dB = 8.686 × 34.73 = 301.6 dB/m (virtually complete extinction within 2 cm).",
        "hi": "(a) f_c = 3.0 GHz; (b) 4 GHz पर λ_g = 11.34 cm, β = 55.4 rad/m; (c) 2.5 GHz पर α = 34.73 Np/m = 301.6 dB/m।",
        "bn": "(a) f_c = ৩.০ GHz; (b) ৪ GHz এ λ_g = ১১.৩৪ সেমি, β = ৫৫.৪ rad/m; (c) ২.৫ GHz এ α = ৩৪.৭৩ Np/m = ৩০১.৬ dB/m।"
      }
    },
    {
      "id": "pq-ch11-l12-02",
      "question": {
        "en": "Explain why the phase velocity inside a rectangular waveguide can exceed the speed of light in vacuum without violating Einstein's special theory of relativity.",
        "hi": "समझाइए कि आयताकार वेवगाइड के भीतर कला वेग आइंस्टीन के विशेष सापेक्षता सिद्धांत का उल्लंघन किए बिना निर्वात में प्रकाश की गति से अधिक कैसे हो सकता है।",
        "bn": "ওয়েভগাইডের ভেতরে দশা বেগ আলোর চেয়ে বেশি হলেও তা কীভাবে আইনস্টাইনের বিশেষ আপেক্ষিকতা তত্ত্ব লঙ্ঘন করে না তা ব্যাখ্যা করুন।"
      },
      "hint": {
        "en": "Distinguish between phase velocity (geometric interference of wavefronts) and group velocity (actual transport of energy and information).",
        "hi": "कला वेग केवल तरंग शिखाओं का ज्यामितीय प्रतिच्छेदन है, जबकि वास्तविक ऊर्जा और सूचना समूह वेग (v_g < c) से चलती है।",
        "bn": "দশা বেগ হলো কেবল তরঙ্গশীর্ষের জ্যামিতিক ছেদবিন্দুর গতি, যেখানে প্রকৃত সংকেত ও শক্তি চলে দলগত বেগে (v_g < c)।"
      },
      "answerKey": {
        "en": "Phase velocity v_p = ω / β = c / √[1 - (f_c/f)²] represents the speed at which points of constant mathematical phase (wavefront crests) appear to move along the guide axis. Geometrically, it is the intersection point of two plane wavefronts bouncing between the walls; just like the intersection point of two closing scissor blades can move arbitrarily fast, phase velocity does not represent the motion of any physical particle or information. The actual electromagnetic energy and data signals propagate along the zig-zag path at the Group Velocity v_g = c √[1 - (f_c/f)³] < c. Since v_g is strictly subluminal and v_p · v_g = c², causality and special relativity are strictly preserved.",
        "hi": "कला वेग v_p केवल तरंग शिखाओं के ज्यामितीय गति का आभास है। जैसे कैंची के दोनों फलकों के काटने का बिंदु प्रकाश से भी तेज चल सकता है, परंतु धातु का कोई कण प्रकाश से तेज नहीं चलता। वेवगाइड में वास्तविक सिग्नल और ऊर्जा समूह वेग v_g से चलते हैं, जो प्रकाश की गति c से सदैव कम (v_g < c) होता है। चूंकि v_p · v_g = c² है, अतः सापेक्षता सिद्धांत पूर्णतः सुरक्षित रहता है।",
        "bn": "দশা বেগ v_p হলো তরঙ্গের গাণিতিক দশার কাল্পনিক গতি। কাঁচির দুটি ব্লেড বন্ধ করার সময় তাদের সংযোগ বিন্দু যেমন আলোর চেয়েও দ্রুত এগোতে পারে কিন্তু কোনো কণা আলো অতিক্রম করে না, তেমনই দশা বেগ কোনো তথ্য পরিবহন করে না। মূল তথ্য ও শক্তি সঞ্চালিত হয় দলগত বেগ v_g দ্বারা, যার মান আলোর চেয়ে কম (v_g < c)। v_p · v_g = c² বজায় থাকায় আপেক্ষিকতা তত্ত্ব লঙ্ঘিত হয় না।"
      }
    },
    {
      "id": "pq-ch11-l12-03",
      "question": {
        "en": "A Ku-band rectangular waveguide has dimensions a = 1.58 cm and b = 0.79 cm. Calculate: (a) the usable frequency range for single-mode TE10 operation (assuming 1.25 f_c,10 to 0.95 f_next), and (b) identify the next higher-order mode that limits the upper operating frequency.",
        "hi": "एक Ku-बैंड वेवगाइड (a = 1.58 cm, b = 0.79 cm) के लिए ज्ञात कीजिए: (a) एकल-विधा TE10 प्रचालन की उपयोगी आवृत्ति सीमा, तथा (b) अधिकतम आवृत्ति को सीमित करने वाली अगली उच्च विधा की पहचान कीजिए।",
        "bn": "একটি Ku-ব্যান্ড ওয়েভগাইডের (a = ১.৫৮ সেমি, b = ০.৭৯ সেমি) ক্ষেত্রে নির্ণয় করুন: (a) একক TE10 মোড পরিচালনার কার্যকর কম্পাঙ্ক সীমা, এবং (b) সর্বোচ্চ পরিচালন কম্পাঙ্ক সীমাবদ্ধকারী পরবর্তী উচ্চ মোড চিহ্নিত করুন।"
      },
      "hint": {
        "en": "f_c,10 = c / (2a). For b = a/2, TE20 and TE01 have identical cutoff frequencies f_c = c / a.",
        "hi": "f_c,10 = c / (2 × 0.0158) = 9.49 GHz। TE20 और TE01 दोनों 2 × 9.49 = 18.98 GHz पर कटऑफ होते हैं।",
        "bn": "f_c,10 = c / (২ × ০.০১৫৮) = ৯.৪৯ GHz। TE20 ও TE01 উভয়েরই কাটঅফ কম্পাঙ্ক ১৮.৯৮ GHz।"
      },
      "answerKey": {
        "en": "Step 1: Calculate TE10 cutoff frequency:\nf_c,10 = c / (2a) = (3.0 × 10⁸) / (2 × 0.0158) = 9.494 GHz.\nStep 2: Identify next higher-order modes:\nBecause b = a / 2 = 0.79 cm:\n• TE20 cutoff: f_c,20 = c / a = 2 × 9.494 = 18.987 GHz.\n• TE01 cutoff: f_c,01 = c / (2b) = c / a = 18.987 GHz.\nBoth TE20 and TE01 modes share the exact same cutoff frequency of 18.99 GHz.\nStep 3: Calculate usable single-mode frequency range:\n• Lower limit: 1.25 × f_c,10 = 1.25 × 9.494 GHz = 11.87 GHz.\n• Upper limit: 0.95 × f_next = 0.95 × 18.987 GHz = 18.04 GHz.\nThe recommended operating range is 12.0 GHz to 18.0 GHz (standard Ku-band).",
        "hi": "(a) TE10 अंतक = 9.49 GHz। अगली विधाएं TE20 तथा TE01 = 18.99 GHz। उपयोगी प्रचालन सीमा: 11.87 GHz से 18.04 GHz (Ku-बैंड)। (b) अगली सीमित करने वाली विधाएं TE20 एवं TE01 हैं।",
        "bn": "(a) TE10 কাটঅফ = ৯.৪৯ GHz। পরবর্তী মোড TE20 ও TE01 = ১৮.৯৯ GHz। কার্যকর পরিচালন সীমা: ১১.৮৭ GHz থেকে ১৮.০৪ GHz। (b) পরবর্তী উচ্চ মোড হলো সমকক্ষ TE20 ও TE01।"
      }
    },
    {
      "id": "pq-ch11-l12-04",
      "question": {
        "en": "Derive the mathematical expression for the guide wavelength λ_g in terms of free space wavelength λ0 and waveguide broad dimension 'a' for the dominant TE10 mode.",
        "hi": "प्रमुख TE10 विधा के लिए गाइड तरंगदैर्ध्य λ_g का व्यंजक मुक्त अंतरिक्ष तरंगदैर्ध्य λ0 और वेवगाइड चौड़ाई 'a' के पदों में निगमित कीजिए।",
        "bn": "প্রধান TE10 মোডের জন্য মুক্ত স্থানের তরঙ্গদৈর্ঘ্য λ0 এবং ওয়েভগাইড প্রস্থ 'a' এর সাপেক্ষে গাইড তরঙ্গদৈর্ঘ্য λ_g এর সমীকরণ প্রতিপাদন করুন।"
      },
      "hint": {
        "en": "Start from β = √[k² - (π/a)²] and use k = 2π/λ0, β = 2π/λ_g.",
        "hi": "β = √[(2π/λ0)² - (π/a)²] से शुरू करें और 2π/λ0 बाहर निकालें।",
        "bn": "β = √[(২π/λ0)² - (π/a)²] থেকে শুরু করে ২π/λ0 কমন নিন।"
      },
      "answerKey": {
        "en": "The longitudinal propagation constant inside the guide is:\nβ = √[ k² - k_c² ], where k = 2π / λ0 and k_c = π / a for TE10.\nβ = √[ (2π / λ0)² - (π / a)² ] = (2π / λ0) √[ 1 - (λ0 / (2a))² ].\nSince guide wavelength is defined as λ_g = 2π / β, substituting β yields:\nλ_g = 2π / [ (2π / λ0) √[ 1 - (λ0 / (2a))² ] ]\nλ_g = λ0 / √[ 1 - (λ0 / 2a)² ].\nSince cutoff wavelength λ_c = 2a, this is equivalently written as λ_g = λ0 / √[ 1 - (λ0 / λ_c)² ] = λ0 / √[ 1 - (f_c / f)² ].",
        "hi": "β = √[(2π/λ0)² - (π/a)²] = (2π/λ0) √[1 - (λ0/2a)²]। अतः λ_g = 2π / β = λ0 / √[1 - (λ0 / 2a)²] सिद्ध होता है।",
        "bn": "β = √[(২π/λ0)² - (π/a)²] = (২π/λ0) √[১ - (λ0/২a)²]। সুতরাং λ_g = ২π / β = λ0 / √[১ - (λ0 / ২a)²] প্রতিপাদিত হলো।"
      }
    },
    {
      "id": "pq-ch11-l12-05",
      "question": {
        "en": "Why are standard rectangular waveguides typically manufactured with an aspect ratio of approximately 2:1 (width a ≈ 2b)?",
        "hi": "मानक आयताकार वेवगाइड्स आमतौर पर लगभग 2:1 के पहलू अनुपात (चौड़ाई a ≈ 2b) के साथ क्यों बनाए जाते हैं?",
        "bn": "আদর্শ আয়তাকার ওয়েভগাইড সাধারণত প্রায় ২:১ অনুপাত (প্রস্থ a ≈ ২b) দিয়ে তৈরি করা হয় কেন?"
      },
      "hint": {
        "en": "Consider single-mode operational bandwidth between TE10 and the next higher-order modes (TE20 and TE01).",
        "hi": "TE10 और अगली विधाओं (TE20 व TE01) के बीच अधिकतम एकल-विधा बैंडविड्थ प्राप्त करने के लिए।",
        "bn": "TE10 এবং পরবর্তী উচ্চ মোডগুলির (TE20 ও TE01) মধ্যে সর্বোচ্চ একক-মোড ব্যান্ডউইথ নিশ্চিত করার জন্য।"
      },
      "answerKey": {
        "en": "Designing the waveguide with a ≈ 2b maximizes the single-mode operational frequency bandwidth. If a = 2b, the cutoff frequencies of the next two higher-order modes, TE20 (f_c,20 = c/a) and TE01 (f_c,01 = c/(2b) = c/a), occur at the exact same frequency, which is exactly double the dominant mode cutoff (f_c,20 = 2 f_c,10). This gives a theoretical 2:1 (one full octave) single-mode frequency window where only the TE10 mode can propagate without danger of mode mixing or signal distortion. Furthermore, keeping b reasonably large prevents excessive ohmic wall attenuation and maximizes power-handling capacity against electrical arcing.",
        "hi": "a = 2b अनुपात रखने से TE20 और TE01 दोनों की अंतक आवृत्ति 2 f_c,10 पर एक साथ आती है। इससे वेवगाइड को एकल-विधा (TE10) में संचालित करने के लिए अधिकतम संभव बैंडविड्थ (पूरा एक ऑक्टेव) प्राप्त होता है, जिससे अन्य विधाओं का हस्तक्षेप रुक जाता है और पावर हैंडलिंग क्षमता भी उत्कृष्ट रहती है।",
        "bn": "a = ২b অনুপাত রাখলে পরবর্তী দুটি মোড TE20 এবং TE01 উভয়ের কাটঅফ কম্পাঙ্ক ঠিক ২ f_c,10 তে অবস্থান করে। এর ফলে সম্পূর্ণ একটি অক্টেভ জুড়ে কোনো অবাঞ্ছিত মোডের মিশ্রণ ছাড়াই সর্বোচ্চ একক-মোড (TE10) ব্যান্ডউইথ পাওয়া যায় এবং শক্তি ধারণক্ষমতাও সর্বোচ্চ থাকে।"
      }
    }
  ]
};
