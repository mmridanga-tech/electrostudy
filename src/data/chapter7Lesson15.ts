import { Lesson } from '../types';

export const LESSON_RC_FILTERS: Lesson = {
  id: 'lsn-ch7-rc-filters',
  topicId: 'ch7-rc-filters',
  chapterId: 'ch-capacitors',
  order: 15,
  title: {
    en: 'RC Filters: Low-Pass and High-Pass Passive Filters',
    hi: 'RC फिल्टर: लो-पास एवं हाई-पास पैसिव फिल्टर',
    bn: 'RC ফিল্টার: লো-পাস ও হাই-পাস প্যাসিভ ফিল্টার'
  },
  description: {
    en: 'Cut-off frequency (fc = 1/(2πRC)), voltage gain, decibel attenuation (-3dB point), phase shift characteristics, and audio/signal filtering applications.',
    hi: 'कट-ऑफ आवृत्ति (fc = 1/(2πRC)), वोल्टेज गेन, डेसिबल क्षीणन (-3dB बिंदु), फेज़ शिफ्ट एवं ऑडियो/सिग्नल फिल्टर अनुप्रयोग।',
    bn: 'কাট-অফ ফ্রিকোয়েন্সি (fc = ১/(২πRC)), ভোল্টেজ গেইন, ডেসিবল অ্যাটেনিউয়েশন (-৩dB বিন্দু), ফেজ শিফট ও অডিও ফিল্টারিং।'
  },
  easyExplanation: {
    en: 'An RC filter uses a resistor and a capacitor to let certain signal frequencies pass while blocking others. Because a capacitor has high resistance to low frequencies and low resistance to high frequencies, swapping the position of R and C lets us create either a Low-Pass Filter (which lets bass and DC pass) or a High-Pass Filter (which lets treble and high frequencies pass).',
    hi: 'RC फिल्टर एक प्रतिरोधक (R) और कैपेसिटर (C) का उपयोग करके चुनिंदा आवृत्तियों (frequencies) को गुजरने देता है और अवांछित आवृत्तियों को रोकता है। कैपेसिटर उच्च आवृत्तियों को आसानी से जाने देता है जबकि निम्न आवृत्तियों को रोकता है। R और C की स्थिति बदलकर हम लो-पास (bass/DC पास करने वाला) या हाई-पास (treble/high frequency पास करने वाला) फिल्टर बना सकते हैं।',
    bn: 'RC ফিল্টার হলো রোধক (R) ও ক্যাপাসিটর (C) দিয়ে তৈরি এমন একটি বর্তনী যা নির্দিষ্ট ফ্রিকোয়েন্সির সিগন্যালকে যেতে দেয় এবং অন্যগুলোকে আটকে দেয়। ক্যাপাসিটর উচ্চ ফ্রিকোয়েন্সিতে কম বাধা এবং নিম্ন ফ্রিকোয়েন্সিতে বেশি বাধা দেয়। তাই R ও C এর সংযোগস্থল অদলবদল করে আমরা লো-পাস ফিল্টার (কম ফ্রিকোয়েন্সি বা বেস পাস করে) অথবা হাই-পাস ফিল্টার (উচ্চ ফ্রিকোয়েন্সি পাস করে) তৈরি করতে পারি।'
  },
  detailedExplanation: {
    en: `1. Passive RC Low-Pass Filter (LPF):
In an RC Low-Pass Filter, the input voltage is applied across the series combination of R and C, and the output is taken ACROSS THE CAPACITOR:
- Circuit: Input -> Resistor (R) -> [Node V_out] -> Capacitor (C) -> Ground.
- Voltage Transfer Function (Voltage Divider):
  V_out / V_in = X_c / √(R² + X_c²) = [1 / (jωC)] / [R + 1 / (jωC)] = 1 / (1 + jωRC)
- Gain Magnitude:
  |A_v| = |V_out / V_in| = 1 / √(1 + (ωRC)²) = 1 / √(1 + (f / f_c)²)

2. Cut-off Frequency (f_c or -3dB Frequency):
The cut-off frequency is the frequency at which the capacitive reactance equals the resistance (X_c = R):
  1 / (2 · π · f_c · C) = R  ===>  f_c = 1 / (2 · π · R · C)
At f = f_c:
- Voltage gain |A_v| = 1 / √2 ≈ 0.707 (70.7% of input passes).
- Output power is halved: P_out = ½ P_in (-3 dB power level).
- Phase Shift: θ = -arctan(f / f_c) = -45° (Output lags input by 45°).
- Roll-off slope: -20 dB/decade (-6 dB/octave) beyond f_c.

3. Passive RC High-Pass Filter (HPF):
In an RC High-Pass Filter, the capacitor comes first, and the output is taken ACROSS THE RESISTOR:
- Circuit: Input -> Capacitor (C) -> [Node V_out] -> Resistor (R) -> Ground.
- Voltage Transfer Function:
  V_out / V_in = R / [R + 1 / (jωC)] = jωRC / (1 + jωRC)
- Gain Magnitude:
  |A_v| = (f / f_c) / √(1 + (f / f_c)²)
- At low frequencies (f << f_c): X_c is huge, blocking DC/low frequencies.
- At high frequencies (f >> f_c): X_c approaches 0 Ω, so V_out ≈ V_in (Gain ≈ 1).
- At f = f_c: |A_v| = 1 / √2 = 0.707 (-3 dB), and phase lead θ = +45°.

4. Summary of Filter Characteristics:
- Low-Pass: Passes frequencies from 0 Hz (DC) to f_c; attenuates f > f_c.
- High-Pass: Blocks DC (0 Hz); passes frequencies f > f_c up to infinity.`,
    hi: `1. पैसिव RC लो-पास फिल्टर (LPF):
- इनपुट R के माध्यम से दिया जाता है और आउटपुट कैपेसिटर (C) के दोनों सिरों से लिया जाता है।
- गेन सूत्र: |Av| = 1 / √(1 + (f / fc)²)
- कट-ऑफ आवृत्ति पर (f = fc): गेन 0.707 (-3 dB) हो जाता है और फेज़ लैग -45° होता है।
- यह DC और कम आवृत्ति के सिग्नलों को आसानी से गुजरने देता है, लेकिन उच्च आवृत्तियों को रोक देता है।

2. कट-ऑफ आवृत्ति (Cut-off Frequency, fc):
fc = 1 / (2 · π · R · C) [हर्ट्ज़, Hz]
इस आवृत्ति पर कैपेसिटिव रिएक्टेंस ठीक प्रतिरोध के बराबर होता है (Xc = R)।

3. पैसिव RC हाई-पास फिल्टर (HPF):
- इनपुट C के माध्यम से दिया जाता है और आउटपुट प्रतिरोधक (R) से लिया जाता है।
- यह DC (0 Hz) को पूरी तरह ब्लॉक करता है और केवल कट-ऑफ आवृत्ति से ऊपर के सिग्नलों को जाने देता है।
- f = fc पर गेन 0.707 होता है और फेज़ लीड +45° होती है।`,
    bn: `১. প্যাসিভ RC লো-পাস ফিল্টার (LPF):
- সিগন্যাল রোধকের (R) মধ্য দিয়ে পাঠানো হয় এবং আউটপুট নেওয়া হয় ক্যাপাসিটরের (C) আড়াআড়ি থেকে।
- ভোল্টেজ গেইন: |Av| = ১ / √(১ + (f / fc)²)
- কম ফ্রিকোয়েন্সিতে ক্যাপাসিটরের বাধা (Xc) খুব বেশি থাকে, ফলে ইনপুট ভোল্টেজ সরাসরি আউটপুটে পাওয়া যায়। উচ্চ ফ্রিকোয়েন্সিতে Xc কমে গ্রাউন্ডে চলে যায়।

২. কাট-অফ ফ্রিকোয়েন্সি (fc):
fc = ১ / (২ · π · R · C) [Hz]
যে ফ্রিকোয়েন্সিতে Xc = R হয়, তাকে কাট-অফ ফ্রিকোয়েন্সি বলে। এই বিন্দুতে গেইন ০.৭০৭ (-৩ dB) হয়।

৩. প্যাসিভ RC হাই-পাস ফিল্টার (HPF):
- ইনপুট ক্যাপাসিটরের (C) মধ্য দিয়ে যায় এবং আউটপুট নেওয়া হয় রোধকের (R) আড়াআড়ি থেকে।
- এটি ডিসি এবং কম ফ্রিকোয়েন্সি সম্পূর্ণ আটকে দেয় এবং fc এর চেয়ে বেশি ফ্রিকোয়েন্সির সিগন্যাল অনায়াসে পাস করায়।`
  },
  formulas: [
    {
      expression: 'f_c = 1 / (2 · π · R · C)',
      description: {
        en: 'Cut-off (-3dB) corner frequency of 1st-order RC filter in Hz',
        hi: 'प्रथम-क्रम RC फिल्टर की कट-ऑफ (-3dB) आवृत्ति (हर्ट्ज़ में)',
        bn: '১ম অর্ডার RC ফিল্টারের কাট-অফ (-৩dB) ফ্রিকোয়েন্সি (Hz এককে)'
      }
    },
    {
      expression: '|A_v(LPF)| = 1 / \\sqrt{1 + (f / f_c)^2}',
      description: {
        en: 'Voltage gain magnitude for RC Low-Pass Filter',
        hi: 'RC लो-पास फिल्टर का वोल्टेज गेन परिमाण',
        bn: 'RC লো-পাস ফিল্টারের ভোল্টেজ গেইন'
      }
    },
    {
      expression: '|A_v(HPF)| = (f / f_c) / \\sqrt{1 + (f / f_c)^2}',
      description: {
        en: 'Voltage gain magnitude for RC High-Pass Filter',
        hi: 'RC हाई-पास फिल्टर का वोल्टेज गेन परिमाण',
        bn: 'RC হাই-পাস ফিল্টারের ভোল্টেজ গেইন'
      }
    },
    {
      expression: 'Gain_{dB} = 20 · \\log_{10}(|V_{out} / V_{in}|)',
      description: {
        en: 'Decibel (dB) voltage attenuation formula',
        hi: 'डेसिबल (dB) वोल्टेज क्षीणन सूत्र',
        bn: 'ডেসিবল (dB) ভোল্টেজ রূপান্তর সূত্র'
      }
    }
  ],
  practicalApplications: [
    {
      en: 'Anti-aliasing low-pass filters in analog-to-digital converters (ADC) and audio DAC smoothing circuits',
      hi: 'माइक्रोकंट्रोलर ADC इनपुट पर शोर हटाने हेतु एंटी-अलियासिंग लो-पास फिल्टर',
      bn: 'অ্যানালগ-টু-ডিজিটাল কনভার্টারে (ADC) নয়েজ দূর করতে অ্যান্টি-অ্যালাইসিং লো-পাস ফিল্টার'
    },
    {
      en: 'DC-blocking and AC coupling capacitors between multi-stage transistor amplifier circuits',
      hi: 'ट्रांजिस्टर एम्पलीफायर चरणों के बीच डीसी ब्लॉकिंग एवं सिग्नल कपलिंग',
      bn: 'ট্রানজিস্টর অ্যামপ্লিফায়ারের এক ধাপ থেকে অন্য ধাপে ডিসি ব্লক করে শুধু এসি অডিও পাঠাতে হাই-পাস কাপলিং'
    },
    {
      en: 'Audio equalizer tone control crossover networks (woofer bass vs tweeter treble separation)',
      hi: 'ऑडियो इक्वलाइज़र एवं लाउडस्पीकर क्रॉसओवर (वूफर एवं ट्वीटर सेपरेशन)',
      bn: 'অডিও স্পিকার ক্রসওভার নেটওয়ার্কে বেস এবং ট্রিবল আলাদা করার ফিল্টার'
    }
  ],
  importantPoints: {
    en: [
      'At the cut-off frequency fc, Xc = R, the output voltage drops to 70.7% (1/√2) of the input, representing a 3 dB reduction',
      'A first-order passive RC filter provides an attenuation roll-off rate of 20 dB/decade (6 dB/octave)',
      'Low-Pass Filter output is taken across the Capacitor; High-Pass Filter output is taken across the Resistor'
    ],
    hi: [
      'कट-ऑफ आवृत्ति (fc) पर Xc = R होता है और आउटपुट वोल्टेज इनपुट का 70.7% (-3 dB) रह जाता है',
      'फर्स्ट-ऑर्डर RC फिल्टर का रोल-ऑफ स्लोप -20 dB प्रति दशक (-6 dB/octave) होता है',
      'लो-पास में आउटपुट कैपेसिटर से लिया जाता है, जबकि हाई-पास में आउटपुट रेजिस्टर से लिया जाता है'
    ],
    bn: [
      'কাট-অফ ফ্রিকোয়েন্সিতে Xc = R হয় এবং আউটপুট ভোল্টেজ মূল ইনপুটের ৭০.৭% (-৩ dB) এ নেমে আসে',
      'একটি ১ম-অর্ডার প্যাসিভ RC ফিল্টারের সিগন্যাল কমার হার হলো প্রতি দশকে ২০ dB (-২০ dB/decade)',
      'লো-পাস ফিল্টারে আউটপুট ক্যাপাসিটরের দুই প্রান্তে এবং হাই-পাস ফিল্টারে আউটপুট রেজিস্টরের দুই প্রান্তে মাপা হয়'
    ]
  },
  commonMistakes: {
    en: [
      'Assuming that a low-pass filter completely cuts off signals immediately above fc; it gradually rolls off at 20 dB/decade',
      'Confusing the component across which the output is measured (LPF = across C, HPF = across R)'
    ],
    hi: [
      'यह सोचना कि कट-ऑफ आवृत्ति के बाद सिग्नल तुरंत शून्य हो जाता है; वास्तव में यह धीरे-धीरे (20 dB/decade) क्षीण होता है',
      'यह भूलना कि लो-पास में आउटपुट C से और हाई-पास में R से लिया जाता है'
    ],
    bn: [
      'মনে করা যে fc পার হলেই সব সিগন্যাল এক ঝটকায় বন্ধ হয়ে যায়; প্রকৃতপক্ষে এটি ধাপে ধাপে -২০ dB/decade হারে কমতে থাকে',
      'লো-পাস ও হাই-পাস ফিল্টারে কার আড়াআড়ি আউটপুট নেওয়া হচ্ছে (LPF = C, HPF = R) তা গুলিয়ে ফেলা'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch7-15-1',
      question: {
        en: 'In a series RC low-pass filter, what is the output voltage when the input signal frequency equals the cut-off frequency (f = fc)?',
        hi: 'एक RC लो-पास फिल्टर में जब इनपुट आवृत्ति कट-ऑफ आवृत्ति के बराबर (f = fc) होती है, तब आउटपुट वोल्टेज क्या होता है?',
        bn: 'একটি সিরিজ RC লো-পাস ফিল্টারে যখন ইনপুট ফ্রিকোয়েন্সি কাট-অফ ফ্রিকোয়েন্সির সমান (f = fc) হয়, তখন আউটপুট ভোল্টেজ কত হবে?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Equal to input voltage Vin (100%)', hi: 'इनपुट वोल्टेज के बराबर (100%)', bn: 'ইনপুট ভোল্টেজের সমান (১০০%)' } },
        { id: 'opt-b', text: { en: '0.707 Vin (-3 dB point)', hi: '0.707 Vin (-3 dB बिंदु)', bn: '০.৭০৭ Vin (-৩ dB বিন্দু)' } },
        { id: 'opt-c', text: { en: '0.500 Vin (-6 dB point)', hi: '0.500 Vin (-6 dB बिंदु)', bn: '০.৫০০ Vin (-৬ dB বিন্দু)' } },
        { id: 'opt-d', text: { en: '0 V (completely blocked)', hi: '0 V (पूरी तरह से अवरुद्ध)', bn: '০ V (সম্পূর্ণ ব্লক)' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'At cut-off frequency fc, capacitive reactance Xc = R. Therefore, |Vout| = Vin / √(1 + 1) = Vin / √2 ≈ 0.707 Vin (-3 dB).',
        hi: 'कट-ऑफ आवृत्ति पर Xc = R होने के कारण Vout = Vin / √2 = 0.707 Vin (-3 dB) होता है।',
        bn: 'কাট-অফ ফ্রিকোয়েন্সিতে Xc = R হওয়ায় Vout = Vin / √২ = ০.৭০৭ Vin (-৩ dB) হয়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch7-15-1',
      question: {
        en: 'Design a passive RC low-pass filter with a cut-off frequency of 1 kHz using a 10 nF capacitor. Calculate: (a) Required resistance R, (b) Output voltage for a 10 V peak-to-peak input at 1 kHz, (c) Output voltage at a high noise frequency of 10 kHz.',
        hi: '1 kHz कट-ऑफ आवृत्ति हेतु 10 nF कैपेसिटर वाले लो-पास फिल्टर की गणना करें: (a) आवश्यक प्रतिरोध R, (b) 1 kHz पर 10 Vpp इनपुट का आउटपुट, (c) 10 kHz शोर पर आउटपुट।',
        bn: '১০ nF ক্যাপাসিটর ব্যবহার করে ১ kHz কাট-অফ ফ্রিকোয়েন্সির একটি লো-পাস ফিল্টার ডিজাইন করুন: (a) প্রয়োজনীয় রোধ R, (b) ১ kHz এ ১০ Vpp ইনপুটের জন্য আউটপুট ভোল্টেজ, (c) ১০ kHz নয়েজ সিগন্যালে আউটপুট ভোল্টেজ।'
      },
      hint: {
        en: 'Use R = 1 / (2 · π · fc · C). At 1 kHz, Vout = 0.707 · 10 V. At 10 kHz, use Vout = Vin / √(1 + (f/fc)²).',
        hi: 'R = 1 / (2π × fc × C) सूत्र लगाएं।',
        bn: 'R = ১ / (২π × fc × C) সমীকরণ ব্যবহার করুন।'
      },
      answerKey: {
        en: '(a) R = 1 / (2 · π · 1000 · 10×10⁻⁹) = 15,915 Ω ≈ 15.9 kΩ (standard 16 kΩ). (b) At 1 kHz (f = fc): Vout = 0.707 × 10 V = 7.07 Vpp. (c) At 10 kHz (f = 10 fc): Vout = 10 / √(1 + 10²) = 10 / √101 ≈ 0.995 Vpp (attenuated by ~20 dB).',
        hi: '(a) R = 15.9 kΩ, (b) 1 kHz पर Vout = 7.07 Vpp, (c) 10 kHz पर Vout = 0.995 Vpp (शोर 90% कम हो गया)।',
        bn: '(a) R = ১৫.৯ kΩ, (b) ১ kHz এ Vout = ৭.০৭ Vpp, (c) ১০ kHz এ Vout = ০.৯৯৫ Vpp (নয়েজ ৯০% কমে যায়)।'
      }
    }
  ]
};
