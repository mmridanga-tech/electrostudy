import { Lesson } from '../types';

export const LESSON_SWITCHED_MODE_POWER_INDUCTORS: Lesson = {
  id: 'lsn-ch8-switched-mode-power-inductors',
  topicId: 'ch8-switched-mode-power-inductors',
  chapterId: 'ch-inductors',
  order: 17,
  title: {
    en: 'Power Inductors in SMPS: Buck, Boost & Energy Transfer',
    hi: 'SMPS में पावर इंडक्टर: बक, बूस्ट एवं ऊर्जा स्थानांतरण चक्र',
    bn: 'SMPS এ পাওয়ার ইন্ডাক্টর: বাক, বুস্ট ও শক্তি রূপান্তর চক্র'
  },
  description: {
    en: 'Operating principles of inductors as dynamic energy storage reservoirs in switched-mode DC-DC power converters: Buck (step-down), Boost (step-up), and Buck-Boost topologies, volt-second balance rule, continuous conduction mode (CCM) vs discontinuous conduction mode (DCM), and ripple current ΔI_L design.',
    hi: 'स्विच-मोड डीसी-डीसी कन्वर्टर्स में इंडक्टर की भूमिका: बक (स्टेप-डाउन), बूस्ट (स्टेप-अप) टोपोलॉजी, वोल्ट-सेकंड संतुलन नियम, कंटीन्यूअस (CCM) बनाम डिस्कंटीन्यूअस (DCM) मोड एवं रिपल करंट गणना।',
    bn: 'সুইচ-মোড ডিসি-ডিসি কনভার্টারে ইন্ডাক্টরের ভূমিকা: বাক (স্টেপ-ডাউন), বুস্ট (স্টেপ-আপ) সার্কিট, ভোল্ট-সেকেন্ড ব্যালেন্স নীতি, CCM বনাম DCM মোড ও রিপল কারেন্ট ΔI_L ডিজাইন।'
  },
  easyExplanation: {
    en: 'Every laptop charger, phone adapter, and EV power module uses inductors as high-speed energy buckets! Millions of times per second, a MOSFET switch fills the inductor with magnetic energy from the battery, and then dumps that energy into the output capacitor to smoothly step down (Buck) or step up (Boost) DC voltage with over 95% efficiency!',
    hi: 'हर लैपटॉप चार्जर, मोबाइल एडाप्टर और इलेक्ट्रिक वाहन में इंडक्टर हाई-स्पीड "ऊर्जा की बाल्टी" की तरह काम करते हैं! प्रति सेकंड लाखों बार MOSFET स्विच इंडक्टर में चुंबकीय ऊर्जा भरता है और फिर उसे आउटपुट में खाली करके 95% से अधिक दक्षता के साथ वोल्टेज को घटाता (Buck) या बढ़ाता (Boost) है!',
    bn: 'ল্যাপটপ চার্জার, মোবাইল অ্যাডাপ্টার ও বৈদ্যুতিক গাড়িতে ইন্ডাক্টর অতি দ্রুতগতির "শক্তির বালতি" হিসেবে কাজ করে! প্রতি সেকেন্ডে লক্ষাধিকবার একটি মসফেট সুইচ ব্যাটারি থেকে ইন্ডাক্টরে চৌম্বক শক্তি জমা করে এবং আউটপুটে ঢেলে দিয়ে ৯৫% এর বেশি দক্ষতায় ভোল্টেজ কমায় (Buck) বা বাড়ায় (Boost)!'
  },
  detailedExplanation: {
    en: `1. The Principle of Inductor Volt-Second Balance:
For any switched inductor operating in steady-state periodic switching (period T_s = 1 / f_sw, duty cycle D):
The net change in inductor current over one complete switching cycle must be zero (ΔI_net = 0).
Therefore, the average voltage across the inductor over one cycle must equal zero:
∫₀^{T_s} v_L(t) dt = 0  ==>  V_L(ON) · t_ON = -V_L(OFF) · t_OFF

2. Buck Converter (Step-Down: V_out < V_in):
- During t_ON (Switch closed, duration D · T_s):
  v_L = V_in - V_out.
  Current ramps up linearly: ΔI_L = ((V_in - V_out) · D) / (f_sw · L).
  Energy is stored in the inductor core.
- During t_OFF (Switch open, freewheeling diode conducts, duration (1 - D) · T_s):
  v_L = -V_out.
  Current ramps down linearly, discharging stored magnetic energy to the output load.
- Voltage Transfer Ratio (CCM):
  V_out = D · V_in (where D = t_ON / T_s, 0 < D < 1).

3. Boost Converter (Step-Up: V_out > V_in):
- During t_ON: Switch connects inductor directly across V_in (v_L = V_in). Current ramps up, storing magnetic energy. Diode prevents output capacitor from discharging back.
- During t_OFF: Switch opens; the inductor voltage reverses and adds in series with the input voltage (v_L = V_in - V_out, where V_out > V_in). Diode forward-biases, boosting voltage onto output capacitor!
- Voltage Transfer Ratio (CCM):
  V_out = V_in / (1 - D)

4. Inductance Sizing Formula for Buck Converter:
To maintain Continuous Conduction Mode (CCM) with a specified peak-to-peak ripple current ratio r (typically r = 20% to 40% of load current I_out):
L_min = [ (V_in - V_out) · V_out ] / [ V_in · f_sw · ΔI_L ] [Henry]

5. Continuous (CCM) vs Discontinuous (DCM) Conduction Mode:
- CCM (Continuous Conduction Mode): Inductor current never drops to zero during the cycle. Best for low output voltage ripple and high efficiency at medium-to-heavy loads.
- DCM (Discontinuous Conduction Mode): Inductor current reaches zero before the end of the switching period. Occurs at very light loads.`,
    hi: `1. वोल्ट-सेकंड संतुलन (Volt-Second Balance):
स्थायी अवस्था में इंडक्टर के औसत वोल्टेज का मान पूरे चक्र में शून्य होना चाहिए:
∫₀^T v_L(t) dt = 0

2. बक कनवर्टर (Buck Converter - स्टेप डाउन):
V_out = D · V_in (जहाँ D ड्यूटी साइकिल = t_ON / T है)।
- स्विच ऑन: इंडक्टर ऊर्जा संचित करता है (v_L = V_in - V_out)।
- स्विच ऑफ: इंडक्टर ऊर्जा को लोड में भेजता है (v_L = -V_out)।

3. बूस्ट कनवर्टर (Boost Converter - स्टेप अप):
V_out = V_in / (1 - D)
इंडक्टर का किकबैक वोल्टेज इनपुट वोल्टेज के साथ जुड़कर उच्च आउटपुट वोल्टेज बनाता है।

4. CCM बनाम DCM मोड:
- CCM: इंडक्टर धारा कभी शून्य नहीं होती (अधिकतम दक्षता)।
- DCM: हल्के लोड पर धारा शून्य हो जाती है।`,
    bn: `১. ভোল্ট-সেকেন্ড ব্যালেন্স নীতি (Volt-Second Balance):
স্টেডি স্টেটে এক পূর্ণ সাইকেলে ইন্ডাক্টরের গড় ভোল্টেজ অবশ্যই শূন্য হতে হবে:
∫₀^T v_L(t) dt = 0

২. বাক কনভার্টার (Buck Converter - Step Down):
V_out = D · V_in (যেখানে D হলো ডিউটি সাইকেল = t_ON / T)।
- সুইচ অন: ইন্ডাক্টরে শক্তি জমা হয় (v_L = V_in - V_out)।
- সুইচ অফ: ইন্ডাক্টর সেই শক্তি লোডে স্থানান্তর করে।

৩. বুস্ট কনভার্টার (Boost Converter - Step Up):
V_out = V_in / (1 - D)
ইন্ডাক্টরের ব্যাক-ভোল্টেজ ইনপুটের সাথে সিরিজে যুক্ত হয়ে আউটপুটে উচ্চ ভোল্টেজ তৈরি করে।

৪. CCM বনাম DCM মোড:
- CCM: সাইকেল চলাকালে কারেন্ট কখনো শূন্যে নামে না।
- DCM: কম লোডে কারেন্ট শূন্যে নেমে আসে।`
  },
  formulas: [
    {
      expression: 'V_{out} = D \\cdot V_{in}',
      description: {
        en: 'Buck converter DC voltage transfer ratio in CCM',
        hi: 'बक कनवर्टर का वोल्टेज रूपांतरण अनुपात (CCM)',
        bn: 'বাক কনভার্টারের আউটপুট ভোল্টেজ সমীকরণ (CCM)'
      }
    },
    {
      expression: 'V_{out} = \\frac{V_{in}}{1 - D}',
      description: {
        en: 'Boost converter DC voltage step-up transfer ratio in CCM',
        hi: 'बूस्ट कनवर्टर का वोल्टेज स्टेप-अप अनुपात (CCM)',
        bn: 'বুস্ট কনভার্টারের ভোল্টেজ স্টেপ-আপ সমীকরণ (CCM)'
      }
    },
    {
      expression: 'L = \\frac{(V_{in} - V_{out}) \\cdot V_{out}}{V_{in} \\cdot f_{sw} \\cdot \\Delta I_L}',
      description: {
        en: 'Buck converter inductor value sizing equation',
        hi: 'बक कनवर्टर के लिए इंडक्टर मान चयन सूत्र',
        bn: 'বাক কনভার্টারে ইন্ডাক্টর সাইজিং সমীকরণ'
      }
    }
  ],
  workedExamples: [
    {
      problem: {
        en: 'A synchronous Buck converter steps down a 12.0 V DC input to 3.3 V DC output to power a microcontroller system delivering 2.0 A current. The switching frequency is f_sw = 500 kHz. If maximum allowed inductor ripple current is ΔI_L = 0.60 A (30% of I_out), calculate the required inductance L.',
        hi: '12.0 V इनपुट को 3.3 V (2.0 A) में बदलने वाले बक कनवर्टर (f_sw = 500 kHz, रिपल ΔI_L = 0.60 A) के लिए आवश्यक इंडक्टर L की गणना करें।',
        bn: 'একটি বাক কনভার্টার ১২.০ V ইনপুট থেকে ৩.৩ V আউটপুটে ২.০ A কারেন্ট সরবরাহ করে। সুইচিং ফ্রিকোয়েন্সি f_sw = ৫০০ kHz এবং অনুমোদিত রিপল কারেন্ট ΔI_L = ০.৬০ A হলে প্রয়োজনীয় ইন্ডাক্ট্যান্স L নির্ণয় করো।'
      },
      solution: {
        en: `Given:
V_in = 12.0 V
V_out = 3.3 V
f_sw = 500 kHz = 500 × 10³ Hz
ΔI_L = 0.60 A

Step 1: Calculate Duty Cycle D:
D = V_out / V_in = 3.3 / 12.0 = 0.275 (27.5% ON-time).

Step 2: Apply Inductor Sizing Equation:
L = [ (V_in - V_out) · D ] / [ f_sw · ΔI_L ]
L = [ (12.0 - 3.3) × 0.275 ] / [ (500 × 10³) × 0.60 ]
L = [ 8.7 × 0.275 ] / 300,000 = 2.3925 / 300,000
L = 7.975 × 10⁻⁶ Henry ≈ 8.0 μH (Select standard standard 8.2 μH or 10 μH SMD power inductor).`,
        hi: `D = 3.3 / 12 = 0.275
L = [(12 - 3.3) × 0.275] / [500,000 × 0.60] = 2.3925 / 300,000 = 7.975 μH (मानक 8.2 μH चयन करें)।`,
        bn: `D = ৩.৩ / ১২ = ০.২৭৫
L = [(১২ - ৩.৩) × ০.২৭৫] / [৫০০,০০০ × ০.৬০] = ২.৩৯২৫ / ৩০০,০০০ = ৭.৯৭৫ μH (স্ট্যান্ডার্ড ৮.২ μH বা ১০ μH নির্বাচিত)।`
      }
    }
  ],
  quiz: [
    {
      question: {
        en: 'In a continuous conduction mode (CCM) Boost converter operating with duty cycle D = 0.75, what is the output voltage for an input of 12 V DC?',
        hi: 'बूस्ट कनवर्टर में 12 V इनपुट एवं ड्यूटी साइकिल D = 0.75 पर आउटपुट वोल्टेज क्या होगा?',
        bn: 'ডিউটি সাইকেল D = ০.৭৫ বিশিষ্ট একটি বুস্ট কনভার্টারে ১২ V ইনপুটের জন্য আউটপুট ভোল্টেজ কত হবে?'
      },
      options: {
        en: ['9 V', '24 V', '48 V', '96 V'],
        hi: ['9 V', '24 V', '48 V', '96 V'],
        bn: ['৯ V', '২৪ V', '৪৮ V', '৯৬ V']
      },
      correctAnswer: 2,
      explanation: {
        en: 'V_out = V_in / (1 - D) = 12 V / (1 - 0.75) = 12 / 0.25 = 48 Volts.',
        hi: 'V_out = V_in / (1 - D) = 12 / (1 - 0.75) = 12 / 0.25 = 48 वोल्ट।',
        bn: 'V_out = V_in / (1 - D) = ১২ / (১ - ০.৭৫) = ১২ / ০.২৫ = ৪৮ ভোল্ট।'
      }
    }
  ],
  flashcards: [
    {
      term: {
        en: 'Volt-Second Balance',
        hi: 'वोल्ट-सेकंड संतुलन',
        bn: 'ভোল্ট-সেকেন্ড ব্যালেন্স'
      },
      definition: {
        en: 'The net magnetic flux change and average voltage across an inductor in periodic steady state is zero (∫ v_L dt = 0).',
        hi: 'स्थायी अवस्था में पूरे चक्र में इंडक्टर के औसत वोल्टेज का मान शून्य होता है।',
        bn: 'স্টেডি স্টেটে এক পূর্ণ সুইচিং চক্রে ইন্ডাক্টরের গড় ভোল্টেজ মান শূন্য হয়।'
      }
    }
  ]
};
