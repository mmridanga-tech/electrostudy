import { Lesson } from '../types';

export const LESSON_WIRELESS_POWER_RFID_INDUCTIVE: Lesson = {
  id: 'lsn-ch10-wireless-power-rfid-inductive',
  topicId: 'ch10-wireless-power-rfid-inductive',
  chapterId: 'ch-em-induction',
  order: 18,
  title: {
    en: 'Wireless Power Transfer & RFID',
    hi: 'वायरलेस पावर ट्रांसफर, चुंबकीय अनुनाद एवं RFID निकट-क्षेत्र प्रेरण',
    bn: 'ওয়্যারলেস পাওয়ার ট্রান্সফার, চৌম্বকীয় অনুরণন ও RFID আবেশ'
  },
  description: {
    en: 'Near-field magnetic inductive coupling, mutual inductance in loosely coupled air coils, magnetic resonance coupling (WiTricity), Qi wireless charging standard (110-205 kHz), and passive RFID/NFC tag power harvesting via load modulation.',
    hi: 'निकट-क्षेत्र चुंबकीय प्रेरण युग्मन, वायु-क्रोड कुंडलियों में पारस्परिक प्रेरकत्व, चुंबकीय अनुनाद युग्मन (WiTricity), Qi वायरलेस चार्जिंग मानक (110-205 kHz), एवं लोड मॉड्यूलेशन द्वारा निष्क्रिय RFID/NFC टैग पावर हार्वेस्टिंग।',
    bn: 'নিয়ার-ফিল্ড চৌম্বকীয় আবেশ কাপলিং, পারস্পরিক আবেশাঙ্ক, ম্যাগনেটিক রেজোন্যান্স কাপলিং, Qi ওয়্যারলেস চার্জিং স্ট্যান্ডার্ড (১১০-২০৫ kHz) এবং লোড মড্যুলেশনের মাধ্যমে প্যাসিভ RFID/NFC শক্তি সংগ্রহ।'
  },
  estimatedMinutes: 35,
  easyExplanation: {
    en: 'Imagine charging your smartphone, electric toothbrush, or electric car simply by resting it on a sleek pad—with absolutely no cords, pins, or metal contacts plugged into your device! How does electric energy jump across an open air gap? Through Near-Field Electromagnetic Induction! A transmitter coil hidden inside the charging pad pumps an alternating current, generating a pulsating magnetic bubble. When the receiver coil inside your phone enters this magnetic bubble, Faraday’s law induces an alternating electric voltage directly inside your phone. By tuning both coils to resonate at the exact same natural frequency (like two identical musical tuning forks humming together), power leaps across the gap with high efficiency. The same magic powers passive RFID access cards and contactless credit cards: the reader’s magnetic field transmits enough energy to wake up the card’s microchip, which transmits your ID back by subtly tweaking its own electrical load!',
    hi: 'कल्पना कीजिए कि बिना किसी तार, पिन या धातु को छुए केवल चार्जिंग पैड पर फोन रखकर वह चार्ज होने लगे! हवा में से बिजली कैसे कूदकर फोन में पहुंच जाती है? यह संभव होता है निकट-क्षेत्र विद्युत-चुंबकीय प्रेरण (Inductive Coupling) से! पैड के अंदर छिपी ट्रांसमीटर कुण्डली तेजी से बदलता चुंबकीय क्षेत्र बनाती है। जब आपके फोन की रिसीवर कुण्डली इस चुंबकीय क्षेत्र में आती है, तो फैराडे के नियम से उसमें वोल्टेज प्रेरित हो जाता है। जब दोनों कुंडलियों को एक ही अनुनादी आवृत्ति (Resonant Frequency) पर ट्यून किया जाता है, तो भारी मात्रा में ऊर्जा हवा के पार कुशलतापूर्वक स्थानांतरित होती है। यही सिद्धांत मेट्रो कार्ड और कॉन्टैक्टलेस क्रेडिट कार्ड में भी काम करता है: मशीन का चुंबकीय क्षेत्र कार्ड की छोटी चिप को बिजली देता है, और चिप अपना डेटा वापस भेज देती है!',
    bn: 'কোনো তার বা প্লাগ ছাড়াই কেবল চার্জিং প্যাডের ওপর মোবাইল বা ইলেকট্রিক গাড়ি রাখলেই তা চার্জ হতে শুরু করে! বাতাসের ফাঁকা স্থান ভেদ করে বিদ্যুৎ কীভাবে প্রবেশ করে? এর পেছনে কাজ করে নিয়ার-ফিল্ড তড়িৎচৌম্বকীয় আবেশ! চার্জিং প্যাডের ট্রান্সমিটার কয়েল একটি দ্রুত পরিবর্তনশীল চৌম্বক ক্ষেত্র তৈরি করে। যখন ফোনের রিসিভার কয়েল এই চৌম্বক ক্ষেত্রে প্রবেশ করে, তখন ফ্যারাডের সূত্রানুযায়ী ফোনে সরাসরি ভোল্টেজ আবিষ্ট হয়। উভয় কয়েলকে একই রেজোন্যান্ট বা অনুরণন কম্পাঙ্কে টিউন করলে বাতাস ভেদ করে সর্বোচ্চ দক্ষতায় বিদ্যুৎ প্রবাহিত হয়। এই একই জাদুকরী প্রযুক্তিতে চলে মেট্রো কার্ড ও কন্ট্যাক্টলেস ক্রেডিট কার্ড (RFID/NFC): কার্ড রিডারের চৌম্বক ক্ষেত্র কার্ডের ভেতর থাকা ক্ষুদ্র মাইক্রোচিপকে বিদ্যুৎ সরবরাহ করে এবং চিপটি নিজের ডেটা রিডারে পাঠিয়ে দেয়!'
  },
  detailedExplanation: {
    en: `1. Physical Principles of Inductive Power Transfer (IPT):
Inductive power transfer operates in the non-radiative near-field zone (r << λ / 2π), where energy is stored primarily in the magnetic field rather than radiated into free space:
- The primary transmitter coil (inductance L_1, resistance R_1) carries an alternating current I_1(t) = I_1 · e^(jωt).
- This produces an alternating magnetic flux linking the secondary receiver coil (inductance L_2, resistance R_2).
- The mutual inductance M represents the geometric magnetic flux linkage per unit primary current:
  M = k · √(L_1 · L_2)
  where k is the coupling coefficient (0 ≤ k ≤ 1). For typical loosely coupled planar coils separated by an air gap (5 – 20 mm), k is between 0.1 and 0.4.
- By Faraday's law, the open-circuit induced EMF in the secondary coil is:
  V_oc = -j · ω · M · I_1

2. Magnetic Resonant Coupling (WiTricity):
In loosely coupled systems (small k), leakage inductances (1 - k²)L_1 and (1 - k²)L_2 present large reactive impedances that severely choke current and power transfer.
To overcome this limitation, series or parallel resonant capacitors (C_1 and C_2) are connected to both coils, tuned to the identical resonant angular frequency:
  ω_0 = 1 / √(L_1 · C_1) = 1 / √(L_2 · C_2) = 2π · f_0
At resonance, the inductive reactance completely cancels the capacitive reactance (ωL - 1/ωC = 0). The impedance collapses to purely resistive, allowing massive circulating currents, intense magnetic flux amplification, and high power transfer efficiency (η > 70–85%) across air gaps several times the coil radius.

3. Reflected Impedance & Power Transfer:
When a load impedance Z_L = R_L + jX_L is connected across the resonant secondary receiver coil, the total secondary loop impedance is Z_22 = R_2 + jωL_2 + 1/(jωC_2) + Z_L.
The secondary current I_2 = -jωM I_1 / Z_22 creates a counter-magnetic field that couples back into the primary coil (Lenz's law).
This reflected impedance seen by the primary source is:
  Z_ref = (ω · M)² / Z_22
At exact secondary resonance (X_22 = 0), Z_ref is purely real:
  R_ref = (ω · M)² / (R_2 + R_L)
This allows the primary inverter to sense load presence and modulate power delivery automatically.

4. The Qi Wireless Charging Standard:
The Wireless Power Consortium (WPC) Qi standard (pronounced "chee") operates at 110 kHz – 205 kHz:
- Transmitter (Tx) uses an H-bridge inverter driving an LC resonant tank.
- Receiver (Rx) uses synchronous full-bridge rectification and low-dropout (LDO) / buck battery charging controllers.
- Foreign Object Detection (FOD): Tx continuously monitors quality factor Q and reflected power loss. If a stray metallic coin or paperclip is placed on the pad, eddy currents in the object cause unexpected power loss; the Tx immediately halts charging to prevent incendiary thermal burns.
- Digital Communication: The receiver communicates with the transmitter by Load Shift Keying (LSK) or Frequency Shift Keying (FSK). By switching a small capacitor or resistor across the secondary coil, it alters the reflected impedance, modulating the primary current to send digital packets (e.g., charge percentage, voltage regulation commands).

5. Passive RFID & NFC (Near Field Communication):
- Frequency: Standard HF RFID and NFC operate at 13.56 MHz (wavelength λ ≈ 22.1 m).
- Tag Architecture: A planar spiral antenna connected directly to an integrated circuit (IC). The tag contains NO internal battery.
- Power Harvesting: The reader coil emits a 13.56 MHz magnetic field. The tag coil intercepts this flux, inducing an AC voltage that is rectified by an on-chip Schottky diode charge pump to supply 1.8 V – 3.3 V DC, waking up the microcontroller.
- Load Modulation Backscatter: To transmit data back to the reader, the tag IC turns an internal transistor switch ON and OFF, modulating the tag’s load impedance. The reader detects these microscopic impedance variations in its own coil current, decoding the tag's binary serial number.`,
    hi: 'वायरलेस पावर ट्रांसफर एवं RFID का विस्तृत इंजीनियरिंग विश्लेषण: निकट-क्षेत्र प्रेरक युग्मन, युग्मन गुणांक k, चुंबकीय अनुनाद सिद्धांत (WiTricity), परावर्तित प्रतिबाधा (Reflected Impedance), Qi मानक (110-205 kHz), फॉरेन ऑब्जेक्ट डिटेक्शन (FOD), तथा 13.56 MHz पर निष्क्रिय RFID/NFC टैग में लोड मॉड्यूलेशन द्वारा बिना बैटरी डेटा संचार।',
    bn: 'ওয়্যারলেস পাওয়ার ও RFID-এর বিস্তারিত ইঞ্জিনিয়ারিং বিশ্লেষণ: নিয়ার-ফিল্ড ইন্ডাক্টিভ কাপলিং, কাপলিং কোএফিসিয়েন্ট k, ম্যাগনেটিক রেজোন্যান্স কাপলিং (WiTricity), প্রতিফলিত প্রতিবন্ধকতা (Reflected Impedance), Qi ওয়্যারলেস স্ট্যান্ডার্ড (১১০-২০৫ kHz), ফরেন অবজেক্ট ডিটেকশন (FOD) এবং ১৩.৫৬ MHz প্যাসিভ RFID/NFC ট্যাগে লোড মড্যুলেশনের সাহায্যে ব্যাটারিহীন ডেটা স্থানান্তর।'
  },
  formulas: [
    {
      id: 'f-ch10-l18-1',
      formula: 'M = k · √(L_1 · L_2)',
      description: {
        en: 'Mutual inductance M between primary coil L_1 and secondary coil L_2 with coupling coefficient k (0 ≤ k ≤ 1).',
        hi: 'प्राथमिक L_1 एवं द्वितीयक L_2 कुंडलियों के मध्य पारस्परिक प्रेरकत्व M, जहाँ k युग्मन गुणांक है।',
        bn: 'প্রাথমিক কয়েল L_1 ও দ্বিতীয় কয়েল L_2 এর মধ্যে পারস্পরিক আবেশাঙ্ক M, যেখানে k হলো কাপলিং গুণাঙ্ক।'
      }
    },
    {
      id: 'f-ch10-l18-2',
      formula: 'f_0 = 1 / (2π · √(L · C))',
      description: {
        en: 'Natural resonant frequency for wireless LC tank tuning to cancel reactive leakage impedance.',
        hi: 'प्रेरक रिसाव प्रतिघात को समाप्त करने के लिए वायरलेस LC टैंक की प्राकृतिक अनुनादी आवृत्ति।',
        bn: 'লিকেজ রিঅ্যাকট্যান্স দূর করে সর্বোচ্চ শক্তি স্থানান্তরের জন্য LC সার্কিটের অনুরণন কম্পাঙ্ক।'
      }
    },
    {
      id: 'f-ch10-l18-3',
      formula: 'Z_ref = (ω · M)² / Z_2',
      description: {
        en: 'Reflected impedance coupled into the primary circuit from the secondary receiver loop.',
        hi: 'द्वितीयक रिसीवर लूप से प्राथमिक परिपथ में परावर्तित प्रतिबाधा (Reflected Impedance)।',
        bn: 'সেকেন্ডারি রিসিভার সার্কিট থেকে প্রাইমারি সার্কিটে প্রতিফলিত প্রতিবন্ধকতা (Reflected Impedance)।'
      }
    },
    {
      id: 'f-ch10-l18-4',
      formula: 'V_induced = -j · ω · M · I_1',
      description: {
        en: 'Open-circuit AC voltage induced in the secondary receiver coil by primary alternating current I_1.',
        hi: 'प्राथमिक प्रत्यावर्ती धारा I_1 द्वारा द्वितीयक कुण्डली में प्रेरित खुला-परिपथ एसी वोल्टेज।',
        bn: 'প্রাথমিক এসি কারেন্ট I_1 দ্বারা সেকেন্ডারি রিসিভার কয়েলে আবিষ্ট ওপেন-সার্কিট ভোল্টেজ।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ch10-l18-1',
      title: {
        en: 'Resonant Inductive Wireless Power & RFID Backscatter Coupling Architecture',
        hi: 'अनुनादी प्रेरण वायरलेस पावर एवं RFID बैकस्कैटर कपलिंग आर्किटेक्चर',
        bn: 'রেজোন্যান্ট ইন্ডাক্টিভ ওয়্যারলেস পাওয়ার ও RFID ব্যাকস্ক্যাটার কাপলিং আর্কিটেকচার'
      },
      caption: {
        en: 'Schematic showing primary transmitter inverter with resonant capacitor C1, air-gap magnetic flux linkage k, secondary resonant receiver C2, full-bridge rectifier, and RFID load modulation switch.',
        hi: 'प्राथमिक इन्वर्टर (C1), वायु-अंतराल चुंबकीय फ्लक्स (k), द्वितीयक अनुनादी रिसीवर (C2), रेक्टिफायर एवं RFID लोड मॉड्यूलेशन स्विच का योजनाबद्ध परिपथ।',
        bn: 'প্রাইমারি ইনভার্টার (C1), এয়ার-গ্যাপ চৌম্বক সংযোগ (k), সেকেন্ডারি রেজোন্যান্ট রিসিভার (C2), রেকটিফায়ার ও RFID লোড মড্যুলেশন সুইচ প্রদর্শনকারী সার্কিট।'
      },
      svgType: 'circuit-ch10-wireless-power-rfid-inductive'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch10-l18-1',
      problem: {
        en: 'A Qi wireless smartphone charging pad transmitter coil has an inductance of L_1 = 12 µH and operates at a resonant frequency of f_0 = 150 kHz. Calculate: (a) The required series tuning capacitance C_1 to achieve series resonance, and (b) If the receiver coil has L_2 = 15 µH and the magnetic coupling coefficient across a 6 mm air gap is k = 0.25, calculate the mutual inductance M in µH.',
        hi: 'एक Qi स्मार्टफोन चार्जिंग पैड की ट्रांसमीटर कुण्डली का प्रेरकत्व L_1 = 12 µH है तथा यह f_0 = 150 kHz पर कार्य करती है। ज्ञात कीजिए: (a) श्रेणी अनुनाद प्राप्त करने के लिए आवश्यक धारिता C_1, तथा (b) यदि रिसीवर कुण्डली L_2 = 15 µH हो और युग्मन गुणांक k = 0.25 हो, तो पारस्परिक प्रेरकत्व M (µH में) ज्ञात कीजिए।',
        bn: 'একটি Qi ওয়্যারলেস চার্জিং প্যাডের ট্রান্সমিটার কয়েলের আবেশাঙ্ক L_1 = ১২ µH এবং এর কার্যনির্বাহী অনুরণন কম্পাঙ্ক f_0 = ১৫০ kHz। নির্ণয় করুন: (a) সিরিজ রেজোন্যান্স অর্জনের জন্য প্রয়োজনীয় টিউনিং ধারকত্ব C_1, এবং (b) রিসিভার কয়েল L_2 = ১৫ µH এবং কাপলিং কোএফিসিয়েন্ট k = ০.২৫ হলে পারস্পরিক আবেশাঙ্ক M (µH এককে)।'
      },
      solution: {
        en: `Part (a): Calculate series tuning capacitance C_1:
The resonant frequency formula is:
  f_0 = 1 / (2π · √(L_1 · C_1))
Squaring both sides and solving for C_1:
  C_1 = 1 / (4π² · f_0² · L_1)
Substitute given values:
- f_0 = 150,000 Hz = 1.5 × 10⁵ Hz
- L_1 = 12 µH = 12 × 10⁻⁶ H
  4π² · f_0² · L_1 = 4 × π² × (1.5 × 10⁵)² × (12 × 10⁻⁶)
  = 4 × 9.8696 × (2.25 × 10¹⁰) × (12 × 10⁻⁶)
  = 1.0659 × 10⁷
  C_1 = 1 / (1.0659 × 10⁷) = 9.38 × 10⁻⁸ Farads = 93.8 nF (approx 94 nF).

Part (b): Calculate mutual inductance M:
  M = k · √(L_1 · L_2)
  M = 0.25 · √( (12 × 10⁻⁶) · (15 × 10⁻⁶) )
  M = 0.25 · √( 1.80 × 10⁻¹⁰ )
  M = 0.25 · (1.3416 × 10⁻⁵ H) = 3.354 × 10⁻⁶ H = 3.35 µH.`,
        hi: 'भाग (a): C_1 = 1 / (4π² · f_0² · L_1) = 1 / (4π² × (1.5×10⁵)² × 12×10⁻⁶) = 93.8 nF। भाग (b): M = k·√(L1·L2) = 0.25 · √(12 × 15) = 0.25 · √180 = 3.35 µH।',
        bn: 'অংশ (a): C_1 = ১ / (৪π² · f_0² · L_1) = ৯৩.৮ nF। অংশ (b): M = k·√(L1·L2) = ০.২৫ · √(১২ × ১৫) = ৩.৩৫ µH।'
      },
      finalAnswer: {
        en: '(a) C_1 = 93.8 nF, (b) M = 3.35 µH',
        hi: '(a) C_1 = 93.8 nF, (b) M = 3.35 µH',
        bn: '(a) C_1 = ৯৩.৮ nF, (b) M = ৩.৩৫ µH'
      }
    },
    {
      id: 'ex-ch10-l18-2',
      problem: {
        en: 'A high-frequency passive RFID reader emits a 13.56 MHz magnetic field. The tag antenna coil has an inductance of L_tag = 2.4 µH and a mutual inductance with the reader of M = 0.12 µH. If the reader coil current is I_reader = 1.5 A RMS, calculate: (a) The open-circuit induced EMF V_oc (RMS) available at the tag terminals, and (b) The resonant tuning capacitor C_tag required on the RFID silicon chip to resonate at 13.56 MHz.',
        hi: 'एक 13.56 MHz निष्क्रिय RFID रीडर कार्य कर रहा है। टैग एंटीना का प्रेरकत्व L_tag = 2.4 µH तथा रीडर के साथ पारस्परिक प्रेरकत्व M = 0.12 µH है। यदि रीडर धारा 1.5 A RMS हो, तो ज्ञात कीजिए: (a) टैग टर्मिनलों पर उपलब्ध खुला-परिपथ प्रेरित वोल्टेज V_oc, तथा (b) 13.56 MHz पर अनुनाद के लिए सिलिकॉन चिप पर आवश्यक धारिता C_tag।',
        bn: 'একটি ১৩.৫৬ MHz প্যাসিভ RFID রিডার পরিচালিত হচ্ছে। ট্যাগের অ্যান্টেনা আবেশাঙ্ক L_tag = ২.৪ µH এবং পারস্পরিক আবেশাঙ্ক M = ০.১২ µH। রিডার কয়েলের কারেন্ট ১.৫ A RMS হলে নির্ণয় করুন: (a) ট্যাগে আবিষ্ট ওপেন-সার্কিট ভোল্টেজ V_oc, এবং (b) ১৩.৫৬ MHz-এ অনুরণনের জন্য চিপে প্রয়োজনীয় ধারকত্ব C_tag।'
      },
      solution: {
        en: `Part (a): Calculate open-circuit induced voltage V_oc:
  ω = 2π · f = 2π × (13.56 × 10⁶ Hz) = 8.520 × 10⁷ rad/s
  V_oc = ω · M · I_reader
  V_oc = (8.520 × 10⁷ rad/s) × (0.12 × 10⁻⁶ H) × (1.5 A)
  V_oc = 15.34 Volts RMS.
This voltage easily exceeds the forward drop of the internal Schottky charge-pump diodes (typically 0.3 V), providing ample energy to wake the microcontroller!

Part (b): Calculate resonant tuning capacitance C_tag:
  C_tag = 1 / (ω² · L_tag)
  C_tag = 1 / [ (8.520 × 10⁷)² × (2.4 × 10⁻⁶) ]
  C_tag = 1 / [ (7.259 × 10¹⁵) × (2.4 × 10⁻⁶) ]
  C_tag = 1 / (1.742 × 10¹⁰) = 5.74 × 10⁻¹¹ Farads = 57.4 pF.`,
        hi: 'भाग (a): ω = 2π × 13.56×10⁶ = 8.52×10⁷ rad/s। V_oc = ω·M·I = 8.52×10⁷ × 0.12×10⁻⁶ × 1.5 = 15.34 V RMS। भाग (b): C_tag = 1 / (ω²·L) = 57.4 pF।',
        bn: 'অংশ (a): ω = ২π × ১৩.৫৬×১০⁶ = ৮.৫২×১০⁷ rad/s। V_oc = ω·M·I = ১৫.৩৪ V RMS। অংশ (b): C_tag = ১ / (ω²·L) = ৫৭.৪ pF।'
      },
      finalAnswer: {
        en: '(a) V_oc = 15.34 V RMS, (b) C_tag = 57.4 pF',
        hi: '(a) V_oc = 15.34 V RMS, (b) C_tag = 57.4 pF',
        bn: '(a) V_oc = ১৫.৩৪ V RMS, (b) C_tag = ৫৭.৪ pF'
      }
    }
  ],
  practicalApplications: [
    {
      en: 'Qi Consumer Electronics Wireless Charging: Smartphone, smartwatch, and earbud charging pads operating at 110–205 kHz eliminating mechanical USB wear.',
      hi: 'Qi उपभोक्ता इलेक्ट्रॉनिक्स चार्जिंग: स्मार्टफोन, स्मार्टवॉच एवं ईयरबड्स के लिए 110-205 kHz पर तार-रहित चार्जिंग।',
      bn: 'Qi কনজিউমার ইলেকট্রনিক্স চার্জিং: স্মার্টফোন ও স্মার্টওয়াচ চার্জিং প্যাড যা মেকানিক্যাল পোর্টের ক্ষয় দূর করে।'
    },
    {
      en: 'Electric Vehicle (EV) Dynamic & Static Wireless Charging: High-power 11 kW to 22 kW under-chassis resonant inductive pads operating at 85 kHz (SAE J2954 standard).',
      hi: 'इलेक्ट्रिक वाहन (EV) वायरलेस चार्जिंग: गाड़ी के नीचे लगे 85 kHz के 11 kW से 22 kW के वायरलेस पैड।',
      bn: 'বৈদ্যুতিক গাড়ি (EV) ওয়্যারলেস চার্জিং: গাড়ির নিচে থাকা ৮৫ kHz কম্পাঙ্কের ১১ kW থেকে ২২ kW শক্তিশালী আবেশ প্যাড।'
    },
    {
      en: 'Passive HF RFID & NFC Contactless Payments: Transit cards (Oyster, Metro, Suica) and contactless debit cards (Apple Pay, Google Wallet) operating at 13.56 MHz powered entirely by reader field induction.',
      hi: 'निष्क्रिय HF RFID एवं NFC पेमेंट: मेट्रो कार्ड एवं कॉन्टैक्टलेस क्रेडिट कार्ड जो 13.56 MHz पर मशीन के चुंबकीय क्षेत्र से बिजली पाते हैं।',
      bn: 'প্যাসিভ HF RFID ও NFC কন্ট্যাক্টলেস পেমেন্ট: মেট্রো কার্ড ও ডেবিট কার্ড যা রিডারের চৌম্বক ক্ষেত্র থেকে শক্তি নিয়ে কাজ করে।'
    },
    {
      en: 'Hermetically Sealed Medical Implants: Pacemakers, cochlear implants, and retinal prostheses recharged safely through intact skin without transcutaneous wire infection risks.',
      hi: 'चिकित्सा प्रत्यारोपण (Medical Implants): पेसमेकर एवं कॉकलियर इम्प्लांट्स को बिना त्वचा काटे बाहर से सुरक्षित चार्ज करना।',
      bn: 'মেডিকেল ইমপ্লান্ট ওয়্যারলেস চার্জিং: পেসমেকার ও কক্লিয়ার ইমপ্লান্ট যা ত্বকের কোনো তার ছাড়াই নিরাপদে চার্জ করা যায়।'
    },
    {
      en: 'Wet Environment Appliances: Electric toothbrushes and submersible underwater autonomous vehicles (AUVs) charged safely without exposed live metal pins.',
      hi: 'जलरोधक उपकरण: इलेक्ट्रिक टूथब्रश एवं पानी के अंदर चलने वाले रोबोट को बिना खुले पिन के चार्ज करना।',
      bn: 'জলরোধী যন্ত্রপাতি: ইলেকট্রিক টুথব্রাশ ও পানির নিচের রোবট যেখানে কোনো উন্মুক্ত ধাতব সংযোগ থাকে না।'
    }
  ],
  importantPoints: [
    {
      en: 'Wireless power transfer utilizes near-field non-radiative magnetic coupling (H-field); it does NOT radiate electromagnetic radio waves into the far field.',
      hi: 'वायरलेस पावर ट्रांसफर निकट-क्षेत्र चुंबकीय युग्मन का उपयोग करता है; यह रेडियो तरंगों का विकिरण नहीं करता।',
      bn: 'ওয়্যারলেস পাওয়ার ট্রান্সফার নিয়ার-ফিল্ড চৌম্বকীয় কাপলিং ব্যবহার করে; এটি কোনো দূরপাল্লার রেডিও বিকিরণ ঘটায় না।'
    },
    {
      en: 'Resonant tuning (ω = 1/√(LC)) cancels coil leakage inductance, transforming a poorly coupled air transformer into a high-efficiency power link.',
      hi: 'अनुनादी ट्यूनिंग (ω = 1/√(LC)) लीकेज इंडक्टेंस को समाप्त कर देती है, जिससे हवा के आर-पार उच्च दक्षता से बिजली स्थानांतरित होती है।',
      bn: 'রেজোন্যান্ট টিউনিং (ω = ১/√(LC)) লিকেজ ইন্ডাকট্যান্স দূর করে, ফলে বাতাস ভেদ করে সর্বোচ্চ দক্ষতায় বিদ্যুৎ প্রবাহিত হয়।'
    },
    {
      en: 'The coupling coefficient k between air coils drops precipitously with distance (approximately k ∝ 1/distance³).',
      hi: 'दूरी बढ़ने पर युग्मन गुणांक k बहुत तेजी से घटता है (लगभग k ∝ 1/दूरी³)।',
      bn: 'দূরত্ব বৃদ্ধির সাথে সাথে কাপলিং কোএফিসিয়েন্ট k অত্যন্ত দ্রুত হ্রাস পায় (k ∝ ১/দূরত্ব³)।'
    },
    {
      en: 'Foreign Object Detection (FOD) is safety-critical in wireless chargers to prevent accidental heating of coins, keys, or foil into incendiary hazards.',
      hi: 'सिक्कों या चाबियों को गर्म होकर आग पकड़ने से रोकने के लिए फॉरेन ऑब्जेक्ट डिटेक्शन (FOD) सुरक्षा अनिवार्य है।',
      bn: 'কয়েন বা চাবি উত্তপ্ত হয়ে আগুন লাগা প্রতিরোধ করতে ওয়্যারলেস চার্জারে ফরেন অবজেক্ট ডিটেকশন (FOD) অত্যন্ত জরুরি।'
    },
    {
      en: 'Passive RFID tags contain zero batteries: they harvest operating power directly from the reader’s 13.56 MHz magnetic field via electromagnetic induction.',
      hi: 'निष्क्रिय RFID टैग में कोई बैटरी नहीं होती: वे रीडर के चुंबकीय क्षेत्र से सीधे बिजली प्राप्त करते हैं।',
      bn: 'প্যাসিভ RFID ট্যাগে কোনো ব্যাটারি থাকে না: রিডারের চৌম্বক ক্ষেত্র থেকে আবেশ প্রক্রিয়ায় সরাসরি বিদ্যুৎ সংগ্রহ করে।'
    },
    {
      en: 'Passive tags transmit data back to the reader by Load Modulation, switching their load impedance to cause detectable reflected impedance changes in the reader coil.',
      hi: 'टैग लोड मॉड्यूलेशन द्वारा डेटा वापस भेजते हैं, जिससे रीडर की अपनी कुण्डली में करंट में बदलाव दर्ज होता है।',
      bn: 'প্যাসিভ ট্যাগ লোড মড্যুলেশনের সাহায্যে সেকেন্ডারি রোধ পরিবর্তন করে রিডারের কারেন্টে তারতম্য ঘটিয়ে ডেটা পাঠায়।'
    }
  ],
  commonMistakes: [
    {
      en: 'Believing wireless chargers radiate dangerous high-power microwaves: Qi charging uses localized 150 kHz magnetic fields that drop to negligible levels within a few centimeters.',
      hi: 'यह मानना कि वायरलेस चार्जर खतरनाक माइक्रोवेव विकिरण फैलाते हैं: यह केवल 150 kHz का स्थानीय चुंबकीय क्षेत्र होता है जो कुछ सेंटीमीटर में शून्य हो जाता है।',
      bn: 'ওয়্যারলেস চার্জার বিপজ্জনক মাইক্রোওয়েভ বিকিরণ ছড়ায় মনে করা: এটি কেবল ১৫০ kHz-এর স্থানীয় চৌম্বক ক্ষেত্র যা কয়েক সেন্টিমিটারে মিলিয়ে যায়।'
    },
    {
      en: 'Assuming passive NFC/RFID transit cards require an internal lithium battery: They are 100% passive, powered solely by induction when brought within 4 cm of the reader.',
      hi: 'यह सोचना कि मेट्रो कार्ड के अंदर बैटरी होती है: वे पूरी तरह निष्क्रिय होते हैं और केवल मशीन के पास जाने पर चार्ज होते हैं।',
      bn: 'মেট্রো বা ক্রেডিট কার্ডের ভেতর ব্যাটারি আছে ভাবা: এগুলো শতভাগ প্যাসিভ এবং রিডারের কাছে গেলেই কেবল বিদ্যুৎ পায়।'
    },
    {
      en: 'Ignoring coil misalignment: Off-center lateral displacement rapidly degrades coupling factor k, reducing charging efficiency and increasing thermal dissipation.',
      hi: 'कॉइल के गलत संरेखण को नजरअंदाज करना: फोन के थोड़ा खिसकने से k गिर जाता है, जिससे चार्जिंग धीमी और फोन गर्म होने लगता है।',
      bn: 'কয়েলের মিসঅ্যালাইনমেন্ট খেয়াল না করা: কেন্দ্র থেকে সরে গেলে k কমে যায়, ফলে চার্জিং দক্ষতা কমে এবং ফোন অতিরিক্ত গরম হয়।'
    },
    {
      en: 'Placing metallic objects (e.g., metal phone case plates or aluminum foil) on a wireless charger: Eddy currents will rapidly overheat the metal if FOD fails.',
      hi: 'चार्जर पर धातु का कवर या पत्ती लगाना: भंवर धाराओं के कारण धातु अत्यधिक गर्म होकर प्लास्टिक पिघला सकती है।',
      bn: 'চার্জিং প্যাডে ধাতব কভার বা কয়েন রাখা: এডি কারেন্টের কারণে ধাতব অংশ দ্রুত ভয়াবহ উত্তপ্ত হতে পারে।'
    }
  ],
  keyTakeaways: [
    {
      en: 'Wireless power transfer uses near-field non-radiative magnetic induction governed by mutual inductance M = k√(L1·L2).',
      hi: 'वायरलेस पावर ट्रांसफर गैर-विकिरणीय निकट-क्षेत्र चुंबकीय प्रेरण का उपयोग करता है (M = k√(L1·L2))।',
      bn: 'ওয়্যারলেস পাওয়ার ট্রান্সফার নিয়ার-ফিল্ড চৌম্বকীয় আবেশ ব্যবহার করে যার মূল ভিত্তি M = k√(L1·L2)।'
    },
    {
      en: 'Resonant LC tuning on both transmitter and receiver cancels leakage reactive impedance, enabling high power transfer efficiency across air gaps.',
      hi: 'दोनों सिरों पर अनुनादी LC ट्यूनिंग लीकेज प्रतिघात को समाप्त कर उच्च दक्षता प्रदान करती है।',
      bn: 'উভয় প্রান্তে রেজোন্যান্ট LC টিউনিং লিকেজ রিঅ্যাকট্যান্স বাতিল করে উচ্চ দক্ষতা নিশ্চিত করে।'
    },
    {
      en: 'The Qi standard operates at 110–205 kHz with bidirectional digital communication via load shift keying (reflected impedance modulation).',
      hi: 'Qi मानक 110-205 kHz पर परावर्तित प्रतिबाधा मॉड्यूलेशन द्वारा द्विदिशीय संचार करता है।',
      bn: 'Qi স্ট্যান্ডার্ড ১১০-২০৫ kHz কম্পাঙ্কে প্রতিফলিত প্রতিবন্ধকতা মড্যুলেশনের মাধ্যমে দ্বিমুখী যোগাযোগ বজায় রাখে।'
    },
    {
      en: 'Foreign Object Detection (FOD) continuously measures tank Q-factor and energy losses to avoid heating stray metallic objects.',
      hi: 'FOD सुरक्षा धातु की अनपेक्षित वस्तुओं को गर्म होने से बचाने के लिए ऊर्जा हानि की निरंतर निगरानी करती है।',
      bn: 'FOD সার্কিট শক্তি অপচয় পর্যবেক্ষণ করে ভুলবশত ধাতব বস্তু উত্তপ্ত হওয়া রোধ করে।'
    },
    {
      en: 'Passive RFID/NFC cards operate battery-free at 13.56 MHz by rectifying induced RF voltages and modulating load impedance for data backscatter.',
      hi: 'निष्क्रिय RFID कार्ड 13.56 MHz पर बिना बैटरी के चुंबकीय प्रेरण द्वारा संचालित होते हैं।',
      bn: 'প্যাসিভ RFID কার্ড ১৩.৫৬ MHz কম্পাঙ্কে কোনো ব্যাটারি ছাড়া আবেশিত ভোল্টেজ ব্যবহার করে পরিচালিত হয়।'
    }
  ],
  mcqs: [
    {
      id: "mcq-ch10-l18-1",
      question: {
        en: "What fundamental electromagnetic quantity measures the magnetic flux linkage between two loosely coupled wireless charging coils per unit primary current?",
        hi: "दो ढीली-युग्मित वायरलेस चार्जिंग कुंडलियों के बीच प्राथमिक धारा के प्रति इकाई चुंबकीय फ्लक्स लिंकेज को क्या कहते हैं?",
        bn: "দুটি লুজলি কাপলড ওয়্যারলেস চার্জিং কয়েলের মধ্যে প্রাথমিক কারেন্টের প্রতি একক ফ্লাক্স সংযোগকে কী বলা হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "Mutual inductance M = k · √(L_1 · L_2)", hi: "पारस्परिक प्रेरकत्व M = k · √(L_1 · L_2)", bn: "পারস্পরিক আবেশাঙ্ক M = k · √(L_1 · L_2)" } },
        { id: "opt-2", text: { en: "Electrostatic dielectric breakdown voltage", hi: "डाइइलेक्ट्रिक ब्रेकडाउन वोल्टेज", bn: "ডাই-ইলেকট্রিক ব্রেকডাউন ভোল্টেজ" } },
        { id: "opt-3", text: { en: "Thermal contact resistance", hi: "तापीय संपर्क प्रतिरोध", bn: "থার্মাল কন্টাক্ট রেজিস্ট্যান্স" } },
        { id: "opt-4", text: { en: "Acoustic wave impedance", hi: "ध्वनिक तरंग प्रतिबाधा", bn: "শব্দ তরঙ্গ প্রতিবন্ধকতা" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Mutual inductance M quantifies the magnetic coupling between primary and secondary coils across the air gap: M = k√(L1·L2).",
        hi: "पारस्परिक प्रेरकत्व M हवा के अंतराल के पार दोनों कुंडलियों के चुंबकीय जुड़ाव को मापता है: M = k√(L1·L2)।",
        bn: "পারস্পরিক আবেশাঙ্ক M হলো বাতাস ভেদ করে দুটি কয়েলের মধ্যে চৌম্বক সংযোগের পরিমাপ: M = k√(L1·L2)।"
      }
    },
    {
      id: "mcq-ch10-l18-2",
      question: {
        en: "Why must both the transmitter and receiver circuits in a resonant wireless power system be tuned to the exact same resonant frequency (ω_0 = 1/√(LC))?",
        hi: "अनुनादी वायरलेस पावर प्रणाली में ट्रांसमीटर और रिसीवर दोनों को एक ही आवृत्ति पर ट्यून करना क्यों आवश्यक है?",
        bn: "রেজোন্যান্ট ওয়্যারলেস পাওয়ার সিস্টেমে ট্রান্সমিটার ও রিসিভার উভয়কে একই কম্পাঙ্কে টিউন করা আবশ্যক কেন?"
      },
      options: [
        { id: "opt-1", text: { en: "To cancel inductive leakage reactances (ωL = 1/ωC), collapsing impedance to pure resistance and maximizing power transfer across the air gap", hi: "लीकेज प्रतिघात को समाप्त करके प्रतिबाधा को न्यूनतम करना ताकि हवा के पार अधिकतम शक्ति स्थानांतरित हो सके", bn: "লিকেজ রিঅ্যাকট্যান্স বাতিল করে সার্কিট রোধ ন্যূনতম করা যাতে বাতাস ভেদ করে সর্বোচ্চ বিদ্যুৎ প্রবাহিত হয়" } },
        { id: "opt-2", text: { en: "To transform direct current into laser beams", hi: "डीसी करंट को लेजर बीम में बदलने के लिए", bn: "ডিসি কারেন্টকে লেজার রশ্মিতে রূপান্তর করতে" } },
        { id: "opt-3", text: { en: "To prevent any current from flowing in the primary coil", hi: "प्राथमिक कुण्डली में धारा को शून्य करने के लिए", bn: "প্রাইমারি কয়েলে কারেন্ট শূন্য করতে" } },
        { id: "opt-4", text: { en: "To physically pull the phone down with gravitational force", hi: "फोन को गुरुत्वाकर्षण से नीचे खींचने के लिए", bn: "ফোনকে অভিকর্ষ বলে নিচের দিকে টানতে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "At resonance, inductive reactance cancels capacitive reactance. Impedance collapses to pure resistance, allowing high circulating currents and efficient power transfer despite low magnetic coupling k.",
        hi: "अनुनाद पर प्रतिघात शून्य हो जाता है, जिससे केवल शुद्ध प्रतिरोध बचता है और कमजोर युग्मन k के बावजूद भारी शक्ति स्थानांतरित होती है।",
        bn: "রেজোন্যান্সে রিঅ্যাকট্যান্স শূন্য হয়ে যায়, ফলে দুর্বল কাপলিং থাকা সত্ত্বেও উচ্চ ক্ষমতায় বিদ্যুৎ স্থানান্তরিত হয়।"
      }
    },
    {
      id: "mcq-ch10-l18-3",
      question: {
        en: "What typical frequency range is designated worldwide by the Wireless Power Consortium (WPC) for Qi smartphone wireless charging?",
        hi: "Qi स्मार्टफोन वायरलेस चार्जिंग के लिए WPC द्वारा कौन सा आवृत्ति बैंड निर्धारित किया गया है?",
        bn: "Qi স্মার্টফোন ওয়্যারলেস চার্জিংয়ের জন্য বিশ্বব্যাপী কোন কম্পাঙ্ক ব্যান্ডটি নির্ধারিত?"
      },
      options: [
        { id: "opt-1", text: { en: "110 kHz to 205 kHz", hi: "110 kHz से 205 kHz", bn: "১১০ kHz থেকে ২০৫ kHz" } },
        { id: "opt-2", text: { en: "2.4 GHz to 5 GHz (Wi-Fi band)", hi: "2.4 GHz से 5 GHz (वाई-फाई)", bn: "২.৪ GHz থেকে ৫ GHz" } },
        { id: "opt-3", text: { en: "50 Hz to 60 Hz (Mains grid frequency)", hi: "50 Hz से 60 Hz (पावर ग्रिड)", bn: "৫০ Hz থেকে ৬০ Hz" } },
        { id: "opt-4", text: { en: "100 MHz to 108 MHz (FM Radio)", hi: "100 MHz से 108 MHz (एफएम रेडियो)", bn: "১০০ MHz থেকে ১০৮ MHz" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Qi standard inductively coupled power chargers operate in the 110 kHz to 205 kHz low-frequency ISM band.",
        hi: "Qi वायरलेस चार्जर 110 kHz से 205 kHz के निम्न-आवृत्ति बैंड में कार्य करते हैं।",
        bn: "Qi ওয়্যারলেস চার্জার ১১০ kHz থেকে ২০৫ kHz কম্পাঙ্ক ব্যান্ডে পরিচালিত হয়।"
      }
    },
    {
      id: "mcq-ch10-l18-4",
      question: {
        en: "What safety hazard occurs if a metal coin or aluminum chewing-gum wrapper is placed on an active wireless charging pad that lacks Foreign Object Detection (FOD)?",
        hi: "यदि फॉरेन ऑब्जेक्ट डिटेक्शन (FOD) के बिना चल रहे चार्जर पर सिक्का या एल्युमीनियम की पन्नी रख दी जाए तो क्या खतरा होगा?",
        bn: "ফরেন অবজেক্ট ডিটেকশন (FOD) বিহীন সক্রিয় চার্জিং প্যাডে একটি ধাতব কয়েন বা ফয়েল পেপার রাখলে কী বিপদ ঘটবে?"
      },
      options: [
        { id: "opt-1", text: { en: "Intense eddy currents are induced inside the coin, heating it to over 100°C within seconds and posing severe fire and burn hazards", hi: "सिक्के में तीव्र भंवर धाराएं प्रेरित होंगी, जिससे वह सेकंडों में 100°C से अधिक गर्म होकर आग या जलन का खतरा पैदा करेगा", bn: "কয়েনে তীব্র এডি কারেন্ট উৎপন্ন হবে, ফলে এটি কয়েক সেকেন্ডে ১০০°C এর বেশি উত্তপ্ত হয়ে আগুন লাগাতে পারে" } },
        { id: "opt-2", text: { en: "The coin is electrostatically transmuted into gold", hi: "सिक्का सोने में बदल जाएगा", bn: "কয়েনটি সোনায় রূপান্তরিত হবে" } },
        { id: "opt-3", text: { en: "The charger instantly emits blue visible laser light", hi: "चार्जर से नीली लेजर रोशनी निकलने लगेगी", bn: "চার্জার থেকে নীল লেজার আলো বের হবে" } },
        { id: "opt-4", text: { en: "The coin will start orbiting the pad like a satellite", hi: "सिक्का चार्जर के चारों ओर उपग्रह की तरह घूमने लगेगा", bn: "কয়েনটি চার্জারের চারপাশে ঘুরতে থাকবে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "The alternating magnetic field induces eddy currents in any conductive metal, causing rapid Joule heating. FOD halts power delivery if abnormal parasitic loss is detected.",
        hi: "बदलता चुंबकीय क्षेत्र धातु में भंवर धाराएं बनाकर उसे अत्यधिक गर्म कर देता है। FOD सुरक्षा असामान्य ऊर्जा हानि मिलते ही बिजली बंद कर देती है।",
        bn: "পরিবর্তনশীল চৌম্বক ক্ষেত্র ধাতুতে এডি কারেন্ট তৈরি করে দ্রুত উত্তপ্ত করে। FOD সার্কিট এই ঝুঁকি এড়াতে স্বয়ংক্রিয়ভাবে পাওয়ার বন্ধ করে দেয়।"
      }
    },
    {
      id: "mcq-ch10-l18-5",
      question: {
        en: "How does a passive 13.56 MHz RFID / NFC smartcard harvest electrical power to operate its internal microcontroller without any battery?",
        hi: "एक निष्क्रिय 13.56 MHz RFID / NFC स्मार्टकार्ड बिना किसी बैटरी के अपने माइक्रोचिप को चलाने के लिए बिजली कैसे प्राप्त करता है?",
        bn: "একটি প্যাসিভ ১৩.৫৬ MHz RFID / NFC স্মার্টকার্ড কোনো ব্যাটারি ছাড়াই কীভাবে মাইক্রোকন্ট্রোলার চালানোর জন্য বিদ্যুৎ সংগ্রহ করে?"
      },
      options: [
        { id: "opt-1", text: { en: "Its planar loop antenna intercepts the reader’s 13.56 MHz magnetic field, inducing an AC voltage that is rectified on-chip into DC operating voltage", hi: "इसका लूप एंटीना रीडर के चुंबकीय क्षेत्र से एसी वोल्टेज प्रेरित करता है, जिसे चिप पर डीसी में रेक्टिफाई कर लिया जाता है", bn: "এর অ্যান্টেনা কয়েল রিডারের চৌম্বক ক্ষেত্র থেকে এসি ভোল্টেজ আবিষ্ট করে, যা চিপের ভেতর ডিসি ভোল্টেজে রূপান্তরিত হয়" } },
        { id: "opt-2", text: { en: "It absorbs ambient sunlight through translucent plastic", hi: "यह धूप से सौर ऊर्जा प्राप्त करता है", bn: "এটি সূর্যের আলো থেকে সৌরশক্তি সংগ্রহ করে" } },
        { id: "opt-3", text: { en: "It harnesses kinetic motion from the user walking", hi: "यह व्यक्ति के चलने की गतिज ऊर्जा से चार्ज होता है", bn: "ব্যবহারকারীর হাঁটার গতিশক্তি থেকে বিদ্যুৎ পায়" } },
        { id: "opt-4", text: { en: "It draws power from human skin moisture galvanic action", hi: "यह पसीने की रासायनिक क्रिया से चलता है", bn: "ঘামের রাসায়নিক বিক্রিয়া থেকে শক্তি সংগ্রহ করে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "By Faraday’s law of induction, the reader’s alternating magnetic field induces an AC voltage across the card coil. An on-chip Schottky charge pump rectifies this into 1.8V–3.3V DC.",
        hi: "फैराडे के नियम से रीडर का चुंबकीय क्षेत्र कार्ड की कुण्डली में वोल्टेज बनाता है, जिसे आंतरिक डायोड डीसी में बदलकर चिप को चालू करते हैं।",
        bn: "ফ্যারাডের সূত্রানুযায়ী রিডারের চৌম্বক ক্ষেত্র কার্ডের কয়েলে ভোল্টেজ আবিষ্ট করে, যা অন-চিপ রেকটিফায়ার দিয়ে ১.৮-৩.৩ V ডিসিতে রূপান্তরিত হয়।"
      }
    },
    {
      id: "mcq-ch10-l18-6",
      question: {
        en: "How does a battery-free passive RFID tag transmit its serial identification data back to the interrogator reader?",
        hi: "बिना बैटरी वाला निष्क्रिय RFID टैग अपना डेटा रीडर मशीन को वापस कैसे भेजता है?",
        bn: "একটি ব্যাটারিহীন প্যাসিভ RFID ট্যাগ কীভাবে রিডার মেশিনে নিজের ডেটা ফেরত পাঠায়?"
      },
      options: [
        { id: "opt-1", text: { en: "Load Modulation: By switching an internal transistor to alter its coil load impedance, modulating the reflected impedance seen by the reader coil", hi: "लोड मॉड्यूलेशन: आंतरिक ट्रांजिस्टर से अपने लोड को बदलकर, जिससे रीडर की कुण्डली में धारा का स्तर बदल जाता है", bn: "লোড মড্যুলেশন: অভ্যন্তরীণ ট্রানজিস্টর দিয়ে নিজের রোধ পরিবর্তন করে, যা রিডারের কয়েলে প্রতিফলিত কারেন্ট পরিবর্তন করে" } },
        { id: "opt-2", text: { en: "By firing powerful microwave pulses from an onboard klystron tube", hi: "शक्तिशाली माइक्रोवेव तरंगें छोड़कर", bn: "শক্তিশালী মাইক্রোওয়েভ পালস পাঠিয়ে" } },
        { id: "opt-3", text: { en: "By blinking an invisible ultraviolet laser into the reader camera", hi: "अदृश्य पराबैंगनी लेजर चमकाकर", bn: "লেজার আলো জ্বালিয়ে" } },
        { id: "opt-4", text: { en: "By vibrating ultrasound waves through the surrounding air", hi: "अल्ट्रासाउंड ध्वनि तरंगें भेजकर", bn: "আল্ট্রাসাউন্ড শব্দ তরঙ্গ পাঠিয়ে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "The tag microchip switches a load resistor/capacitor on and off. Due to mutual coupling, this alters the reflected impedance (Z_ref = ω²M²/Z_2) in the reader, causing detectable amplitude changes.",
        hi: "टैग अपने लोड को चालू/बंद करता है, जिससे पारस्परिक प्रेरण के कारण रीडर की धारा में सूक्ष्म उतार-चढ़ाव आते हैं जिन्हें रीडर बाइनरी डेटा के रूप में पढ़ लेता है।",
        bn: "ট্যাগ তার নিজস্ব লোড পরিবর্তন করে, ফলে রিডারের প্রাইমারি কয়েলে কারেন্টের পরিবর্তন ঘটে যা রিডার বাইনারি ডেটা হিসেবে গ্রহণ করে।"
      }
    },
    {
      id: "mcq-ch10-l18-7",
      question: {
        en: "What is the relationship between the air-gap separation distance (d) between two planar coils and their magnetic coupling coefficient (k)?",
        hi: "दो समतल कुंडलियों के बीच की दूरी (d) और उनके युग्मन गुणांक (k) के बीच क्या संबंध होता है?",
        bn: "দুটি প্ল্যানার কয়েলের মধ্যবর্তী দূরত্ব (d) এবং তাদের কাপলিং কোএফিসিয়েন্ট (k)-এর মধ্যে সম্পর্ক কী?"
      },
      options: [
        { id: "opt-1", text: { en: "Coupling coefficient k drops precipitously as distance increases (approximately k ∝ 1/d³)", hi: "दूरी बढ़ने पर k बहुत तेजी से घटता है (लगभग k ∝ 1/d³)", bn: "দূরত্ব বৃদ্ধির সাথে k অত্যন্ত দ্রুত হ্রাস পায় (k ∝ ১/d³)" } },
        { id: "opt-2", text: { en: "k increases exponentially with distance", hi: "दूरी बढ़ने पर k तेजी से बढ़ता है", bn: "দূরত্ব বাড়লে k বৃদ্ধি পায়" } },
        { id: "opt-3", text: { en: "k is completely constant regardless of distance", hi: "दूरी से k पर कोई प्रभाव नहीं पड़ता", bn: "দূরত্ব নির্বিশেষে k ধ্রুবক থাকে" } },
        { id: "opt-4", text: { en: "k is zero at zero distance and maximum at 100 meters", hi: "शून्य दूरी पर k शून्य और 100 मीटर पर अधिकतम होता है", bn: "শূন্য দূরত্বে k শূন্য থাকে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "The magnetic dipole field falls off with the cube of distance (B ∝ 1/r³). Consequently, the coupling coefficient k collapses sharply beyond small air gaps.",
        hi: "चुंबकीय द्विध्रुव क्षेत्र दूरी के घन के व्युत्क्रमानुपाती होता है (1/r³)। अतः दूरी बढ़ने पर युग्मन गुणांक k बहुत तेजी से गिरता है।",
        bn: "চৌম্বক ডাইপোল ক্ষেত্র দূরত্বের ঘনের ব্যস্তানুপাতিক (১/r³)। ফলে দূরত্ব সামান্য বাড়লেই কাপলিং ফ্যাক্টর k দ্রুত কমে যায়।"
      }
    },
    {
      id: "mcq-ch10-l18-8",
      question: {
        en: "In medical implants (e.g., rechargeable cardiac pacemakers or neurostimulators), why is transcutaneous inductive power transfer vastly safer than wires exiting through the skin?",
        hi: "चिकित्सा प्रत्यारोपणों में त्वचा के आर-पार तार निकालने की तुलना में प्रेरण द्वारा चार्जिंग अधिक सुरक्षित क्यों है?",
        bn: "চিকিৎসা ইমপ্লান্টে (যেমন পেসমেকার) ত্বকের ভেতর দিয়ে তার বের করার চেয়ে আবেশ চার্জিং অনেক বেশি নিরাপদ কেন?"
      },
      options: [
        { id: "opt-1", text: { en: "It keeps the skin completely closed and intact, permanently eliminating fatal bacterial infection pathways", hi: "यह त्वचा को पूरी तरह बंद और सुरक्षित रखता है, जिससे जानलेवा जीवाणु संक्रमण का खतरा समाप्त हो जाता है", bn: "ত্বক সম্পূর্ণ অক্ষত থাকে, ফলে মারাত্মক ব্যাকটেরিয়াল ইনফেকশনের ঝুঁকি চিরতরে দূর হয়" } },
        { id: "opt-2", text: { en: "It makes the patient immune to all biological viruses", hi: "यह मरीज को सभी वायरस से सुरक्षित कर देता है", bn: "এটি রোগীকে সব ভাইরাস থেকে মুক্ত করে" } },
        { id: "opt-3", text: { en: "It cools the heart down to absolute zero", hi: "यह दिल को ठंडा कर देता है", bn: "এটি হৃৎপিণ্ডকে শীতল করে" } },
        { id: "opt-4", text: { en: "It replaces blood circulation with electric current", hi: "यह रक्त संचार को बिजली से बदल देता है", bn: "রক্ত সঞ্চালন দূর করে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Percutaneous wires breaching the skin create a continuous conduit for life-threatening bacterial infections. Wireless inductive charging operates safely through intact skin.",
        hi: "त्वचा के बाहर निकले तार गंभीर बैक्टीरियल संक्रमण फैला सकते हैं। वायरलेस चार्जिंग बिना त्वचा काटे अंदर की बैटरी को सुरक्षित चार्ज करती है।",
        bn: "ত্বক ভেদ করে তার বের করা থাকলে ইনফেকশনের ঝুঁকি থাকে। আবেশ চার্জিংয়ের ফলে ত্বক অক্ষত রেখে ভেতর নিরাপদে চার্জ করা যায়।"
      }
    }
  ],
  mcqQuestions: [
    {
      id: "mcq-ch10-l18-1",
      question: {
        en: "What fundamental electromagnetic quantity measures the magnetic flux linkage between two loosely coupled wireless charging coils per unit primary current?",
        hi: "दो ढीली-युग्मित वायरलेस चार्जिंग कुंडलियों के बीच प्राथमिक धारा के प्रति इकाई चुंबकीय फ्लक्स लिंकेज को क्या कहते हैं?",
        bn: "দুটি লুজলি কাপলড ওয়্যারলেস চার্জিং কয়েলের মধ্যে প্রাথমিক কারেন্টের প্রতি একক ফ্লাক্স সংযোগকে কী বলা হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "Mutual inductance M = k · √(L_1 · L_2)", hi: "पारस्परिक प्रेरकत्व M = k · √(L_1 · L_2)", bn: "পারস্পরিক আবেশাঙ্ক M = k · √(L_1 · L_2)" } },
        { id: "opt-2", text: { en: "Electrostatic dielectric breakdown voltage", hi: "डाइइलेक्ट्रिक ब्रेकडाउन वोल्टेज", bn: "ডাই-ইলেকট্রিক ব্রেকডাউন ভোল্টেজ" } },
        { id: "opt-3", text: { en: "Thermal contact resistance", hi: "तापीय संपर्क प्रतिरोध", bn: "থার্মাল কন্টাক্ট রেজিস্ট্যান্স" } },
        { id: "opt-4", text: { en: "Acoustic wave impedance", hi: "ध्वनिक तरंग प्रतिबाधा", bn: "শব্দ তরঙ্গ প্রতিবন্ধকতা" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Mutual inductance M quantifies the magnetic coupling between primary and secondary coils across the air gap: M = k√(L1·L2).",
        hi: "पारस्परिक प्रेरकत्व M हवा के अंतराल के पार दोनों कुंडलियों के चुंबकीय जुड़ाव को मापता है: M = k√(L1·L2)।",
        bn: "পারস্পরিক আবেশাঙ্ক M হলো বাতাস ভেদ করে দুটি কয়েলের মধ্যে চৌম্বক সংযোগের পরিমাপ: M = k√(L1·L2)।"
      }
    },
    {
      id: "mcq-ch10-l18-2",
      question: {
        en: "Why must both the transmitter and receiver circuits in a resonant wireless power system be tuned to the exact same resonant frequency (ω_0 = 1/√(LC))?",
        hi: "अनुनादी वायरलेस पावर प्रणाली में ट्रांसमीटर और रिसीवर दोनों को एक ही आवृत्ति पर ट्यून करना क्यों आवश्यक है?",
        bn: "রেজোন্যান্ট ওয়্যারলেস পাওয়ার সিস্টেমে ট্রান্সমিটার ও রিসিভার উভয়কে একই কম্পাঙ্কে টিউন করা আবশ্যক কেন?"
      },
      options: [
        { id: "opt-1", text: { en: "To cancel inductive leakage reactances (ωL = 1/ωC), collapsing impedance to pure resistance and maximizing power transfer across the air gap", hi: "लीकेज प्रतिघात को समाप्त करके प्रतिबाधा को न्यूनतम करना ताकि हवा के पार अधिकतम शक्ति स्थानांतरित हो सके", bn: "লিকেজ রিঅ্যাকট্যান্স বাতিল করে সার্কিট রোধ ন্যূনতম করা যাতে বাতাস ভেদ করে সর্বোচ্চ বিদ্যুৎ প্রবাহিত হয়" } },
        { id: "opt-2", text: { en: "To transform direct current into laser beams", hi: "डीसी करंट को लेजर बीम में बदलने के लिए", bn: "ডিসি কারেন্টকে লেজার রশ্মিতে রূপান্তর করতে" } },
        { id: "opt-3", text: { en: "To prevent any current from flowing in the primary coil", hi: "प्राथमिक कुण्डली में धारा को शून्य करने के लिए", bn: "প্রাইমারি কয়েলে কারেন্ট শূন্য করতে" } },
        { id: "opt-4", text: { en: "To physically pull the phone down with gravitational force", hi: "फोन को गुरुत्वाकर्षण से नीचे खींचने के लिए", bn: "ফোনকে অভিকর্ষ বলে নিচের দিকে টানতে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "At resonance, inductive reactance cancels capacitive reactance. Impedance collapses to pure resistance, allowing high circulating currents and efficient power transfer despite low magnetic coupling k.",
        hi: "अनुनाद पर प्रतिघात शून्य हो जाता है, जिससे केवल शुद्ध प्रतिरोध बचता है और कमजोर युग्मन k के बावजूद भारी शक्ति स्थानांतरित होती है।",
        bn: "রেজোন্যান্সে রিঅ্যাকট্যান্স শূন্য হয়ে যায়, ফলে দুর্বল কাপলিং থাকা সত্ত্বেও উচ্চ ক্ষমতায় বিদ্যুৎ স্থানান্তরিত হয়।"
      }
    },
    {
      id: "mcq-ch10-l18-3",
      question: {
        en: "What typical frequency range is designated worldwide by the Wireless Power Consortium (WPC) for Qi smartphone wireless charging?",
        hi: "Qi स्मार्टफोन वायरलेस चार्जिंग के लिए WPC द्वारा कौन सा आवृत्ति बैंड निर्धारित किया गया है?",
        bn: "Qi স্মার্টফোন ওয়্যারলেস চার্জিংয়ের জন্য বিশ্বব্যাপী কোন কম্পাঙ্ক ব্যান্ডটি নির্ধারিত?"
      },
      options: [
        { id: "opt-1", text: { en: "110 kHz to 205 kHz", hi: "110 kHz से 205 kHz", bn: "১১০ kHz থেকে ২০৫ kHz" } },
        { id: "opt-2", text: { en: "2.4 GHz to 5 GHz (Wi-Fi band)", hi: "2.4 GHz से 5 GHz (वाई-फाई)", bn: "২.৪ GHz থেকে ৫ GHz" } },
        { id: "opt-3", text: { en: "50 Hz to 60 Hz (Mains grid frequency)", hi: "50 Hz से 60 Hz (पावर ग्रिड)", bn: "৫০ Hz থেকে ৬০ Hz" } },
        { id: "opt-4", text: { en: "100 MHz to 108 MHz (FM Radio)", hi: "100 MHz से 108 MHz (एफएम रेडियो)", bn: "১০০ MHz থেকে ১০৮ MHz" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Qi standard inductively coupled power chargers operate in the 110 kHz to 205 kHz low-frequency ISM band.",
        hi: "Qi वायरलेस चार्जर 110 kHz से 205 kHz के निम्न-आवृत्ति बैंड में कार्य करते हैं।",
        bn: "Qi ওয়্যারলেস চার্জার ১১০ kHz থেকে ২০৫ kHz কম্পাঙ্ক ব্যান্ডে পরিচালিত হয়।"
      }
    },
    {
      id: "mcq-ch10-l18-4",
      question: {
        en: "What safety hazard occurs if a metal coin or aluminum chewing-gum wrapper is placed on an active wireless charging pad that lacks Foreign Object Detection (FOD)?",
        hi: "यदि फॉरेन ऑब्जेक्ट डिटेक्शन (FOD) के बिना चल रहे चार्जर पर सिक्का या एल्युमीनियम की पन्नी रख दी जाए तो क्या खतरा होगा?",
        bn: "ফরেন অবজেক্ট ডিটেকশন (FOD) বিহীন সক্রিয় চার্জিং প্যাডে একটি ধাতব কয়েন বা ফয়েল পেপার রাখলে কী বিপদ ঘটবে?"
      },
      options: [
        { id: "opt-1", text: { en: "Intense eddy currents are induced inside the coin, heating it to over 100°C within seconds and posing severe fire and burn hazards", hi: "सिक्के में तीव्र भंवर धाराएं प्रेरित होंगी, जिससे वह सेकंडों में 100°C से अधिक गर्म होकर आग या जलन का खतरा पैदा करेगा", bn: "কয়েনে তীব্র এডি কারেন্ট উৎপন্ন হবে, ফলে এটি কয়েক সেকেন্ডে ১০০°C এর বেশি উত্তপ্ত হয়ে আগুন লাগাতে পারে" } },
        { id: "opt-2", text: { en: "The coin is electrostatically transmuted into gold", hi: "सिक्का सोने में बदल जाएगा", bn: "কয়েনটি সোনায় রূপান্তরিত হবে" } },
        { id: "opt-3", text: { en: "The charger instantly emits blue visible laser light", hi: "चार्जर से नीली लेजर रोशनी निकलने लगेगी", bn: "চার্জার থেকে নীল লেজার আলো বের হবে" } },
        { id: "opt-4", text: { en: "The coin will start orbiting the pad like a satellite", hi: "सिक्का चार्जर के चारों ओर उपग्रह की तरह घूमने लगेगा", bn: "কয়েনটি চার্জারের চারপাশে ঘুরতে থাকবে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "The alternating magnetic field induces eddy currents in any conductive metal, causing rapid Joule heating. FOD halts power delivery if abnormal parasitic loss is detected.",
        hi: "बदलता चुंबकीय क्षेत्र धातु में भंवर धाराएं बनाकर उसे अत्यधिक गर्म कर देता है। FOD सुरक्षा असामान्य ऊर्जा हानि मिलते ही बिजली बंद कर देती है।",
        bn: "পরিবর্তনশীল চৌম্বক ক্ষেত্র ধাতুতে এডি কারেন্ট তৈরি করে দ্রুত উত্তপ্ত করে। FOD সার্কিট এই ঝুঁকি এড়াতে স্বয়ংক্রিয়ভাবে পাওয়ার বন্ধ করে দেয়।"
      }
    },
    {
      id: "mcq-ch10-l18-5",
      question: {
        en: "How does a passive 13.56 MHz RFID / NFC smartcard harvest electrical power to operate its internal microcontroller without any battery?",
        hi: "एक निष्क्रिय 13.56 MHz RFID / NFC स्मार्टकार्ड बिना किसी बैटरी के अपने माइक्रोचिप को चलाने के लिए बिजली कैसे प्राप्त करता है?",
        bn: "একটি প্যাসিভ ১৩.৫৬ MHz RFID / NFC স্মার্টকার্ড কোনো ব্যাটারি ছাড়াই কীভাবে মাইক্রোকন্ট্রোলার চালানোর জন্য বিদ্যুৎ সংগ্রহ করে?"
      },
      options: [
        { id: "opt-1", text: { en: "Its planar loop antenna intercepts the reader’s 13.56 MHz magnetic field, inducing an AC voltage that is rectified on-chip into DC operating voltage", hi: "इसका लूप एंटीना रीडर के चुंबकीय क्षेत्र से एसी वोल्टेज प्रेरित करता है, जिसे चिप पर डीसी में रेक्टिफाई कर लिया जाता है", bn: "এর অ্যান্টেনা কয়েল রিডারের চৌম্বক ক্ষেত্র থেকে এসি ভোল্টেজ আবিষ্ট করে, যা চিপের ভেতর ডিসি ভোল্টেজে রূপান্তরিত হয়" } },
        { id: "opt-2", text: { en: "It absorbs ambient sunlight through translucent plastic", hi: "यह धूप से सौर ऊर्जा प्राप्त करता है", bn: "এটি সূর্যের আলো থেকে সৌরশক্তি সংগ্রহ করে" } },
        { id: "opt-3", text: { en: "It harnesses kinetic motion from the user walking", hi: "यह व्यक्ति के चलने की गतिज ऊर्जा से चार्ज होता है", bn: "ব্যবহারকারীর হাঁটার গতিশক্তি থেকে বিদ্যুৎ পায়" } },
        { id: "opt-4", text: { en: "It draws power from human skin moisture galvanic action", hi: "यह पसीने की रासायनिक क्रिया से चलता है", bn: "ঘামের রাসায়নিক বিক্রিয়া থেকে শক্তি সংগ্রহ করে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "By Faraday’s law of induction, the reader’s alternating magnetic field induces an AC voltage across the card coil. An on-chip Schottky charge pump rectifies this into 1.8V–3.3V DC.",
        hi: "फैराडे के नियम से रीडर का चुंबकीय क्षेत्र कार्ड की कुण्डली में वोल्टेज बनाता है, जिसे आंतरिक डायोड डीसी में बदलकर चिप को चालू करते हैं।",
        bn: "ফ্যারাডের সূত্রানুযায়ী রিডারের চৌম্বক ক্ষেত্র কার্ডের কয়েলে ভোল্টেজ আবিষ্ট করে, যা অন-চিপ রেকটিফায়ার দিয়ে ১.৮-৩.৩ V ডিসিতে রূপান্তরিত হয়।"
      }
    },
    {
      id: "mcq-ch10-l18-6",
      question: {
        en: "How does a battery-free passive RFID tag transmit its serial identification data back to the interrogator reader?",
        hi: "बिना बैटरी वाला निष्क्रिय RFID टैग अपना डेटा रीडर मशीन को वापस कैसे भेजता है?",
        bn: "একটি ব্যাটারিহীন প্যাসিভ RFID ট্যাগ কীভাবে রিডার মেশিনে নিজের ডেটা ফেরত পাঠায়?"
      },
      options: [
        { id: "opt-1", text: { en: "Load Modulation: By switching an internal transistor to alter its coil load impedance, modulating the reflected impedance seen by the reader coil", hi: "लोड मॉड्यूलेशन: आंतरिक ट्रांजिस्टर से अपने लोड को बदलकर, जिससे रीडर की कुण्डली में धारा का स्तर बदल जाता है", bn: "লোড মড্যুলেশন: অভ্যন্তরীণ ট্রানজিস্টর দিয়ে নিজের রোধ পরিবর্তন করে, যা রিডারের কয়েলে প্রতিফলিত কারেন্ট পরিবর্তন করে" } },
        { id: "opt-2", text: { en: "By firing powerful microwave pulses from an onboard klystron tube", hi: "शक्तिशाली माइक्रोवेव तरंगें छोड़कर", bn: "শক্তিশালী মাইক্রোওয়েভ পালস পাঠিয়ে" } },
        { id: "opt-3", text: { en: "By blinking an invisible ultraviolet laser into the reader camera", hi: "अदृश्य पराबैंगनी लेजर चमकाकर", bn: "লেজার আলো জ্বালিয়ে" } },
        { id: "opt-4", text: { en: "By vibrating ultrasound waves through the surrounding air", hi: "अल्ट्रासाउंड ध्वनि तरंगें भेजकर", bn: "আল্ট্রাসাউন্ড শব্দ তরঙ্গ পাঠিয়ে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "The tag microchip switches a load resistor/capacitor on and off. Due to mutual coupling, this alters the reflected impedance (Z_ref = ω²M²/Z_2) in the reader, causing detectable amplitude changes.",
        hi: "टैग अपने लोड को चालू/बंद करता है, जिससे पारस्परिक प्रेरण के कारण रीडर की धारा में सूक्ष्म उतार-चढ़ाव आते हैं जिन्हें रीडर बाइनरी डेटा के रूप में पढ़ लेता है।",
        bn: "ট্যাগ তার নিজস্ব লোড পরিবর্তন করে, ফলে রিডারের প্রাইমারি কয়েলে কারেন্টের পরিবর্তন ঘটে যা রিডার বাইনারি ডেটা হিসেবে গ্রহণ করে।"
      }
    },
    {
      id: "mcq-ch10-l18-7",
      question: {
        en: "What is the relationship between the air-gap separation distance (d) between two planar coils and their magnetic coupling coefficient (k)?",
        hi: "दो समतल कुंडलियों के बीच की दूरी (d) और उनके युग्मन गुणांक (k) के बीच क्या संबंध होता है?",
        bn: "দুটি প্ল্যানার কয়েলের মধ্যবর্তী দূরত্ব (d) এবং তাদের কাপলিং কোএফিসিয়েন্ট (k)-এর মধ্যে সম্পর্ক কী?"
      },
      options: [
        { id: "opt-1", text: { en: "Coupling coefficient k drops precipitously as distance increases (approximately k ∝ 1/d³)", hi: "दूरी बढ़ने पर k बहुत तेजी से घटता है (लगभग k ∝ 1/d³)", bn: "দূরত্ব বৃদ্ধির সাথে k অত্যন্ত দ্রুত হ্রাস পায় (k ∝ ১/d³)" } },
        { id: "opt-2", text: { en: "k increases exponentially with distance", hi: "दूरी बढ़ने पर k तेजी से बढ़ता है", bn: "দূরত্ব বাড়লে k বৃদ্ধি পায়" } },
        { id: "opt-3", text: { en: "k is completely constant regardless of distance", hi: "दूरी से k पर कोई प्रभाव नहीं पड़ता", bn: "দূরত্ব নির্বিশেষে k ধ্রুবক থাকে" } },
        { id: "opt-4", text: { en: "k is zero at zero distance and maximum at 100 meters", hi: "शून्य दूरी पर k शून्य और 100 मीटर पर अधिकतम होता है", bn: "শূন্য দূরত্বে k শূন্য থাকে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "The magnetic dipole field falls off with the cube of distance (B ∝ 1/r³). Consequently, the coupling coefficient k collapses sharply beyond small air gaps.",
        hi: "चुंबकीय द्विध्रुव क्षेत्र दूरी के घन के व्युत्क्रमानुपाती होता है (1/r³)। अतः दूरी बढ़ने पर युग्मन गुणांक k बहुत तेजी से गिरता है।",
        bn: "চৌম্বক ডাইপোল ক্ষেত্র দূরত্বের ঘনের ব্যস্তানুপাতিক (১/r³)। ফলে দূরত্ব সামান্য বাড়লেই কাপলিং ফ্যাক্টর k দ্রুত কমে যায়।"
      }
    },
    {
      id: "mcq-ch10-l18-8",
      question: {
        en: "In medical implants (e.g., rechargeable cardiac pacemakers or neurostimulators), why is transcutaneous inductive power transfer vastly safer than wires exiting through the skin?",
        hi: "चिकित्सा प्रत्यारोपणों में त्वचा के आर-पार तार निकालने की तुलना में प्रेरण द्वारा चार्जिंग अधिक सुरक्षित क्यों है?",
        bn: "চিকিৎসা ইমপ্লান্টে (যেমন পেসমেকার) ত্বকের ভেতর দিয়ে তার বের করার চেয়ে আবেশ চার্জিং অনেক বেশি নিরাপদ কেন?"
      },
      options: [
        { id: "opt-1", text: { en: "It keeps the skin completely closed and intact, permanently eliminating fatal bacterial infection pathways", hi: "यह त्वचा को पूरी तरह बंद और सुरक्षित रखता है, जिससे जानलेवा जीवाणु संक्रमण का खतरा समाप्त हो जाता है", bn: "ত্বক সম্পূর্ণ অক্ষত থাকে, ফলে মারাত্মক ব্যাকটেরিয়াল ইনফেকশনের ঝুঁকি চিরতরে দূর হয়" } },
        { id: "opt-2", text: { en: "It makes the patient immune to all biological viruses", hi: "यह मरीज को सभी वायरस से सुरक्षित कर देता है", bn: "এটি রোগীকে সব ভাইরাস থেকে মুক্ত করে" } },
        { id: "opt-3", text: { en: "It cools the heart down to absolute zero", hi: "यह दिल को ठंडा कर देता है", bn: "এটি হৃৎপিণ্ডকে শীতল করে" } },
        { id: "opt-4", text: { en: "It replaces blood circulation with electric current", hi: "यह रक्त संचार को बिजली से बदल देता है", bn: "রক্ত সঞ্চালন দূর করে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Percutaneous wires breaching the skin create a continuous conduit for life-threatening bacterial infections. Wireless inductive charging operates safely through intact skin.",
        hi: "त्वचा के बाहर निकले तार गंभीर बैक्टीरियल संक्रमण फैला सकते हैं। वायरलेस चार्जिंग बिना त्वचा काटे अंदर की बैटरी को सुरक्षित चार्ज करती है।",
        bn: "ত্বক ভেদ করে তার বের করা থাকলে ইনফেকশনের ঝুঁকি থাকে। আবেশ চার্জিংয়ের ফলে ত্বক অক্ষত রেখে ভেতর নিরাপদে চার্জ করা যায়।"
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch10-l18-1',
      question: {
        en: 'A high-power electric vehicle (EV) wireless charging system has a transmitter coil L_1 = 80 µH and receiver coil L_2 = 60 µH, operating at the SAE J2954 resonant frequency of f_0 = 85 kHz. If the coupling factor across a 150 mm ground clearance is k = 0.18, calculate the mutual inductance M in µH.',
        hi: 'एक इलेक्ट्रिक वाहन वायरलेस चार्जर की प्राथमिक कुण्डली L_1 = 80 µH एवं द्वितीयक L_2 = 60 µH है तथा आवृत्ति 85 kHz है। यदि 150 mm ग्राउंड क्लीयरेंस पर युग्मन गुणांक k = 0.18 हो, तो पारस्परिक प्रेरकत्व M (µH में) ज्ञात कीजिए।',
        bn: 'একটি ইলেকট্রিক গাড়ির ওয়্যারলেস চার্জারের L_1 = ৮০ µH এবং L_2 = ৬০ µH, যা ৮৫ kHz কম্পাঙ্কে চলে। ১৫০ মিমি গ্রাউন্ড ক্লিয়ারেন্সে কাপলিং ফ্যাক্টর k = ০.১৮ হলে পারস্পরিক আবেশাঙ্ক M (µH এককে) কত?'
      },
      hint: {
        en: 'Use M = k · √(L_1 · L_2).',
        hi: 'M = k · √(L_1 · L_2) का प्रयोग करें।',
        bn: 'M = k · √(L_1 · L_2) সূত্রটি প্রয়োগ করুন।'
      },
      answerKey: {
        en: 'M = 0.18 · √( 80 × 60 ) = 0.18 · √4800 = 0.18 · 69.282 µH = 12.47 µH.',
        hi: 'M = 0.18 · √(80 × 60) = 0.18 × 69.28 = 12.47 µH।',
        bn: 'M = ০.১৮ · √(৮০ × ৬০) = ০.১৮ × ৬৯.২৮ = ১২.৪৭ µH।'
      }
    },
    {
      id: 'pq-ch10-l18-2',
      question: {
        en: 'Explain why the reflected resistance R_ref = (ωM)² / R_L seen by a wireless charging transmitter increases when the secondary receiver load resistance R_L decreases (i.e., when drawing heavier load current).',
        hi: 'व्याख्या कीजिए कि जब द्वितीयक रिसीवर अधिक धारा लेता है (R_L घटता है), तो प्राथमिक चार्जर द्वारा महसूस किया जाने वाला परावर्तित प्रतिरोध R_ref क्यों बढ़ जाता है?',
        bn: 'ব্যাখ্যা করুন কেন সেকেন্ডারি রিসিভার বেশি কারেন্ট টানলে (R_L কমলে) প্রাইমারি চার্জারের প্রতিফলিত রোধ R_ref বৃদ্ধি পায়।'
      },
      hint: {
        en: 'A lower load resistance R_L draws larger secondary current I_2 = V_ind / R_L. By Lenz’s law, larger I_2 produces a stronger counter-magnetic field that opposes primary flux.',
        hi: 'कम R_L अधिक धारा I_2 खींचता है। लेन्ज के नियम से यह धारा प्राथमिक फ्लक्स का अधिक विरोध करती है, जिससे प्राथमिक स्रोत पर लोड बढ़ता है।',
        bn: 'কম R_L বেশি সেকেন্ডারি কারেন্ট I_2 তৈরি করে। লেঞ্জের সূত্রানুযায়ী এটি প্রাইমারি কয়েলে বেশি বিপরীত ফ্লাক্স প্রয়োগ করে, ফলে প্রতিফলিত রোধ বাড়ে।'
      },
      answerKey: {
        en: 'A smaller load resistance R_L allows larger secondary current to circulate (I_2 = ωMI_1 / R_L). In accordance with Lenz’s law, this large secondary current creates a strong counter-magnetic field opposing the primary flux, forcing the primary power inverter to deliver greater real power to sustain the magnetic field, which manifests electrically as an increased reflected resistance R_ref = (ωM)² / R_L.',
        hi: 'कम R_L से द्वितीयक कुण्डली में अधिक धारा बहती है। लेन्ज के नियम से यह धारा प्राथमिक चुंबकीय क्षेत्र का विरोध करती है, जिससे प्राथमिक स्रोत को अधिक वास्तविक ऊर्जा देनी पड़ती है और परावर्तित प्रतिरोध R_ref बढ़ जाता है।',
        bn: 'ছোট R_L বেশি সেকেন্ডারি কারেন্ট প্রবাহিত করে। লেঞ্জের নিয়ম অনুযায়ী এই কারেন্ট প্রাইমারি ফ্লাক্সের বিরোধিতা করে, ফলে প্রাইমারিকে বেশি ক্ষমতা সরবরাহ করতে হয় যা বৃদ্ধিপ্রাপ্ত প্রতিফলিত রোধ R_ref হিসেবে প্রকাশ পায়।'
      }
    },
    {
      id: 'pq-ch10-l18-3',
      question: {
        en: 'Calculate the resonant capacitance C required to tune an NFC antenna coil of inductance L = 1.8 µH to the standard carrier frequency of f = 13.56 MHz.',
        hi: '13.56 MHz मानक वाहक आवृत्ति पर L = 1.8 µH वाले NFC एंटीना को ट्यून करने के लिए आवश्यक अनुनादी धारिता C की गणना कीजिए।',
        bn: '১৩.৫৬ MHz স্ট্যান্ডার্ড ফ্রিকোয়েন্সিতে L = ১.৮ µH বিশিষ্ট একটি NFC অ্যান্টেনা টিউন করতে প্রয়োজনীয় ধারকত্ব C নির্ণয় করুন।'
      },
      hint: {
        en: 'Use C = 1 / [ (2π · f)² · L ]. Express your answer in picofarads (pF).',
        hi: 'C = 1 / [ (2π·f)² · L ] का प्रयोग करें और मान पिकोफैराड (pF) में निकालें।',
        bn: 'C = ১ / [ (২π·f)² · L ] সূত্র ব্যবহার করে পিক অফ্যারাডে (pF) মান বের করুন।'
      },
      answerKey: {
        en: 'ω = 2π × (13.56 × 10⁶) = 8.520 × 10⁷ rad/s. C = 1 / [ (8.520 × 10⁷)² × (1.8 × 10⁻⁶) ] = 1 / [ 7.259 × 10¹⁵ × 1.8 × 10⁻⁶ ] = 1 / 1.3066 × 10¹⁰ = 7.65 × 10⁻¹¹ F = 76.5 pF.',
        hi: 'C = 76.5 pF।',
        bn: 'C = ৭৬.৫ pF।'
      }
    },
    {
      id: 'pq-ch10-l18-4',
      question: {
        en: 'Explain how Foreign Object Detection (FOD) protects users from burns when a metallic paperclip is placed on a wireless charging pad alongside a smartphone.',
        hi: 'समझाइए कि जब स्मार्टफोन के साथ एक धातु की पेपरक्लिप चार्जर पर रख दी जाती है, तो FOD तकनीक उपयोगकर्ता को आग या जलने से कैसे बचाती है?',
        bn: 'স্মার্টফোনের সাথে একটি ধাতব পেপারক্লিপ চার্জারে রাখা হলে FOD প্রযুক্তি কীভাবে ব্যবহারকারীকে পোড়ার হাত থেকে রক্ষা করে তা ব্যাখ্যা করুন।'
      },
      hint: {
        en: 'Consider the quality factor Q and the power loss balance: P_tx = P_rx + P_loss. If P_loss unexpectedly rises without the phone requesting more power, an object is absorbing eddy current heat.',
        hi: 'पावर संतुलन पर विचार करें: P_loss = P_tx - P_rx। यदि फोन द्वारा मांगी गई बिजली से अधिक ऊर्जा नष्ट हो रही है, तो क्लिप गर्म हो रही है।',
        bn: 'পাওয়ার লস P_লস = P_পাঠানো - P_গ্রহণ। রিসিভারের চাহিদার বাইরে অতিরিক্ত পাওয়ার লস হলে FOD সার্কিট চার্জ বন্ধ করে দেয়।'
      },
      answerKey: {
        en: 'The transmitter and smartphone constantly report power packets: the pad measures power sent (P_tx) and the phone reports power received (P_rx). Under normal conditions, P_tx - P_rx matches expected coil losses. If a conductive paperclip is present, eddy currents in the clip absorb several watts of parasitic power (P_eddy), causing a sudden discrepancy where P_tx - P_rx exceeds the safety threshold. The pad instantly aborts power transmission before the clip can reach burning temperatures.',
        hi: 'चार्जर और फोन लगातार भेजी गई और प्राप्त की गई शक्ति की तुलना करते हैं। यदि कोई धातु की क्लिप रखी हो, तो वह भंवर धाराओं से ऊर्जा सोखने लगती है। ऊर्जा में यह असंतुलन पहचानते ही चार्जर बिजली बंद कर देता है।',
        bn: 'চৌম্বক প্যাড ও ফোন প্রতিনিয়ত আদান-প্রদানকৃত পাওয়ার তুলনা করে। পেপারক্লিপ থাকলে তা এডি কারেন্টে অতিরিক্ত শক্তি শোষণ করে। এই অতিরিক্ত লস শনাক্ত হবামাত্রই সিস্টেমটি সাথে সাথে চার্জিং বন্ধ করে দেয়।'
      }
    },
    {
      id: 'pq-ch10-l18-5',
      question: {
        en: 'Contrast inductive coupling (non-radiative near-field) with microwave radio frequency radiation (radiative far-field) in terms of safety, distance range, and efficiency for consumer power delivery.',
        hi: 'सुरक्षा, दूरी और दक्षता के संदर्भ में प्रेरक युग्मन (निकट-क्षेत्र) और माइक्रोवेव विकिरण (दूर-क्षेत्र) की तुलना कीजिए।',
        bn: 'নিরাপত্তা, দূরত্ব ও দক্ষতার ভিত্তিতে ইন্ডাক্টিভ কাপলিং (নিয়ার-ফিল্ড) এবং মাইক্রোওয়েভ রেডিয়েশনের (ফার-ফিল্ড) তুলনা করুন।'
      },
      hint: {
        en: 'Inductive coupling stores energy in localized magnetic fields (few centimeters, >80% efficiency, human-safe). Radiative far-field disperses waves via inverse-square law (long distance, poor efficiency, RF radiation exposure limits).',
        hi: 'प्रेरक युग्मन स्थानीय चुंबकीय क्षेत्र में ऊर्जा रखता है (कुछ सेमी, 80% से अधिक दक्षता, मानव सुरक्षित)। विकिरण चारों ओर बिखर जाता है (लंबी दूरी, कम दक्षता)।',
        bn: 'ইন্ডাক্টিভ কাপলিং অল্প দূরত্বে (কয়েক সেমি) ৮০% এর বেশি দক্ষতায় কাজ করে এবং নিরাপদ। মাইক্রোওয়েভ বিকিরণ দূরত্বে যেতে পারে কিন্তু দক্ষতা খুব কম।'
      },
      answerKey: {
        en: 'Inductive coupling operates in the non-radiative near-field (range < 20 cm) with high efficiency (75%–90%) and strong safety because non-magnetic human tissue is transparent to the magnetic field. In contrast, radiative microwave far-field transfers power over meters, but is governed by inverse-square geometric path loss, resulting in extremely poor efficiency (< 1%–5%) and posing severe RF biological tissue heating hazards if scaled to high powers.',
        hi: 'प्रेरक युग्मन निकट-क्षेत्र में कुछ सेंटीमीटर तक 75%-90% उच्च दक्षता के साथ पूरी तरह सुरक्षित काम करता है क्योंकि मानव शरीर चुंबकीय क्षेत्र से अप्रभावित रहता है। इसके विपरीत, माइक्रोवेव दूर तक जा सकता है लेकिन इसकी दक्षता 1%-5% से भी कम होती है और यह जैविक ऊतकों को नुकसान पहुंचा सकता है।',
        bn: 'ইন্ডাক্টিভ কাপলিং অল্প দূরত্বে (২০ সেমি পর্যন্ত) ৭৫%-৯০% উচ্চ দক্ষতায় ও নিরাপদে কাজ করে কারণ মানবদেহে চৌম্বক ক্ষেত্র কোনো ক্ষতি করে না। কিন্তু মাইক্রোওয়েভ রেডিয়েশনের দক্ষতা ১%-৫% এর নিচে এবং উচ্চ মাত্রায় তা মানবদেহের কোষের জন্য ক্ষতিকর।'
      }
    }
  ]
};
