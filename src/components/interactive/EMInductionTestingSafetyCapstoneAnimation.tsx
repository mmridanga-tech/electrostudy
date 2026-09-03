import React, { useState } from 'react';
import { ShieldCheck, AlertTriangle, CheckCircle, XCircle, RotateCcw, Award, ChevronRight, HelpCircle, Zap, Activity } from 'lucide-react';
import { Language } from '../../types';

interface EMInductionTestingSafetyCapstoneAnimationProps {
  currentLanguage: Language;
}

interface ScenarioStep {
  stageTitle: { en: string; hi: string; bn: string };
  question: { en: string; hi: string; bn: string };
  options: {
    id: string;
    text: { en: string; hi: string; bn: string };
    isCorrect: boolean;
    feedback: { en: string; hi: string; bn: string };
  }[];
}

interface CapstoneScenario {
  id: string;
  title: { en: string; hi: string; bn: string };
  subtitle: { en: string; hi: string; bn: string };
  badge: { en: string; hi: string; bn: string };
  steps: ScenarioStep[];
}

export const EMInductionTestingSafetyCapstoneAnimation: React.FC<EMInductionTestingSafetyCapstoneAnimationProps> = ({
  currentLanguage
}) => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState<number>(0);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [completedScenarios, setCompletedScenarios] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const scenarios: CapstoneScenario[] = [
    {
      id: 'sc-transformer-ghost-voltage',
      title: {
        en: 'Scenario 1: High-Voltage Transformer & Ghost Induced Voltage on De-energized Cable',
        hi: 'परिदृश्य 1: उच्च-वोल्टेज ट्रांसफार्मर एवं निष्क्रिय केबल पर प्रेत प्रेरित वोल्टेज (Ghost Voltage)',
        bn: 'দৃশ্যপট ১: উচ্চ-ভোল্টেজ ট্রান্সফরমার এবং সংযোগ বিচ্ছিন্ন তারে ভৌতিক আবিষ্ট ভোল্টেজ'
      },
      subtitle: {
        en: 'An offshore substation technician prepares to service an isolated 33 kV feeder cable that runs parallel to an active 132 kV power line for 4 kilometers.',
        hi: 'एक सबस्टेशन तकनीशियन 33 kV की फीडर केबल की सर्विसिंग कर रहा है जो चालू 132 kV लाइन के समानांतर 4 किमी तक चलती है।',
        bn: 'একজন সাবস্টেশন প্রকৌশলী একটি পৃথকীকৃত ৩৩ kV ক্যাবলের রক্ষণাবেক্ষণ করছেন যা একটি সক্রিয় ১৩২ kV লাইনের সমান্তরালে ৪ কিমি ধরে বিস্তৃত।'
      },
      badge: { en: 'High Voltage / Mutual Induction Safety', hi: 'उच्च वोल्टेज / पारस्परिक प्रेरण सुरक्षा', bn: 'উচ্চ ভোল্টেজ / পারস্পরিক আবেশ নিরাপত্তা' },
      steps: [
        {
          stageTitle: {
            en: 'Step 1: Flux Coupling Mechanism',
            hi: 'चरण 1: चुंबकीय फ्लक्स युग्मन प्रक्रिया',
            bn: 'ধাপ ১: চৌম্বক ফ্লাক্স সংযোগ প্রক্রিয়া'
          },
          question: {
            en: 'Although the 33 kV cable circuit breaker is OPEN, the technician detects 680 Volts on the open conductor. What electromagnetic phenomenon produces this hazardous voltage?',
            hi: 'यद्यपि 33 kV केबल का सर्किट ब्रेकर खुला (OFF) है, तकनीशियन को 680 V का वोल्टेज मिलता है। यह खतरनाक वोल्टेज किस कारण से उत्पन्न होता है?',
            bn: '৩৩ kV ক্যাবলটির সার্কিট ব্রেকার খোলা থাকা সত্ত্বেও তারে ৬৮০ ভোল্ট পাওয়া যাচ্ছে। কোন তড়িৎচৌম্বক ঘটনার কারণে এই বিপজ্জনক ভোল্টেজ তৈরি হয়?'
          },
          options: [
            {
              id: 'opt-1a',
              text: {
                en: 'Mutual magnetic induction (M·di/dt) from the alternating load current of the adjacent parallel 132 kV line',
                hi: 'समानांतर 132 kV लाइन की प्रत्यावर्ती धारा से पारस्परिक चुंबकीय प्रेरण (M·di/dt)',
                bn: 'পাশ্ববর্তী সমান্তরাল ১৩২ kV লাইনের পরিবর্তনশীল কারেন্ট থেকে পারস্পরিক চৌম্বক আবেশ (M·di/dt)'
              },
              isCorrect: true,
              feedback: {
                en: 'Correct! Parallel conductors share mutual inductance M. High alternating currents in the live circuit induce dangerous longitudinal EMFs in the de-energized conductor.',
                hi: 'सही! समानांतर चालकों में पारस्परिक प्रेरकत्व M होता है, जिससे लाइव लाइन से अलग की गई लाइन में खतरनाक ईएमएफ प्रेरित होता है।',
                bn: 'সঠিক! সমান্তরাল লাইনের পারস্পরিক আবেশাঙ্ক (M)-এর কারণে বন্ধ লাইনে বিপজ্জনক ভোল্টেজ আবিষ্ট হয়।'
              }
            },
            {
              id: 'opt-1b',
              text: {
                en: 'Static electricity from wind friction blowing across the cable sheath',
                hi: 'केबल आवरण पर हवा के घर्षण से स्थिर विद्युत',
                bn: 'ক্যাবলের ওপর বাতাসের ঘর্ষণে উৎপন্ন স্থির তড়িৎ'
              },
              isCorrect: false,
              feedback: {
                en: 'Incorrect. Wind friction cannot sustain 680 V continuous 50/60 Hz AC voltage.',
                hi: 'गलत। हवा के घर्षण से निरंतर 50/60 Hz प्रत्यावर्ती वोल्टेज नहीं बन सकता।',
                bn: 'ভুল। বাতাসের ঘর্ষণে ধারাবাহিক এসি ভোল্টেজ উৎপন্ন হতে পারে না।'
              }
            },
            {
              id: 'opt-1c',
              text: {
                en: 'Defective cable copper creating self-generated battery galvanic voltages',
                hi: 'खराब तांबे के तार से बैटरी जैसी गैल्वेनिक वोल्टेज',
                bn: 'ত্রুটিযুক্ত তামার তারের রাসায়নিক ব্যাটারি ভোল্টেজ'
              },
              isCorrect: false,
              feedback: {
                en: 'Incorrect. Galvanic voltages are tiny DC fractions of a volt, not hundreds of AC volts.',
                hi: 'गलत। गैल्वेनिक क्रिया मिलीवोल्ट स्तर की डीसी होती है।',
                bn: 'ভুল। গ্যালভানিক ক্রিয়া মিলিভোল্ট ডিসি তৈরি করে, শত শত ভোল্ট এসি নয়।'
              }
            }
          ]
        },
        {
          stageTitle: {
            en: 'Step 2: Safe Isolation & Earthing Procedure',
            hi: 'चरण 2: सुरक्षित अलगाव एवं भूसंपर्कन (Earthing) प्रक्रिया',
            bn: 'ধাপ ২: নিরাপদ আইসোলেশন ও আর্থিং পদ্ধতি'
          },
          question: {
            en: 'What mandatory electrical safety action must be performed before the technician physically touches the isolated cable?',
            hi: 'केबल को शारीरिक रूप से छूने से पहले तकनीशियन को कौन सा अनिवार्य सुरक्षा कार्य करना चाहिए?',
            bn: 'ক্যাবলটি সরাসরি স্পর্শ করার আগে প্রযুক্তিবিদকে কোন বাধ্যতামূলক নিরাপত্তা পদক্ষেপ গ্রহণ করতে হবে?'
          },
          options: [
            {
              id: 'opt-2a',
              text: {
                en: 'Apply temporary working safety earths (drain grounds) to both ends of the cable to clamp induced voltage to 0 V',
                hi: 'प्रेरित वोल्टेज को शून्य करने के लिए केबल के दोनों सिरों पर अस्थायी सुरक्षा अर्थिंग (Working Earths) लगाएं',
                bn: 'আবিষ্ট ভোল্টেজ শূন্য করার জন্য ক্যাবলের উভয় প্রান্তে অস্থায়ী নিরাপত্তা আর্থিং স্থাপন করা'
              },
              isCorrect: true,
              feedback: {
                en: 'Correct! Applying solid protective earthing at both cable terminals discharges capacitive charges and drains continuously induced mutual voltages safely to ground.',
                hi: 'सही! दोनों सिरों पर ठोस सुरक्षात्मक अर्थिंग लगाने से अवशिष्ट चार्ज और निरंतर प्रेरित वोल्टेज सुरक्षित रूप से जमीन में समा जाते हैं।',
                bn: 'সঠিক! উভয় প্রান্তে আর্থিং স্থাপন করলে আবিষ্ট ভোল্টেজ নিরাপদে মাটিতে চলে যায় এবং বিভব শূন্য হয়।'
              }
            },
            {
              id: 'opt-2b',
              text: {
                en: 'Wear cotton gardening gloves and proceed without earthing',
                hi: 'सूती बागवानी दस्ताने पहनें और बिना अर्थिंग के कार्य शुरू करें',
                bn: 'সুতি কাপড়ের সাধারণ দস্তানা পরে কাজ শুরু করা'
              },
              isCorrect: false,
              feedback: {
                en: 'Danger! Cotton gloves provide zero dielectric breakdown protection against 680 V induced AC!',
                hi: 'खतरनाक! सूती दस्ताने 680 V के झटके से कोई सुरक्षा प्रदान नहीं करते।',
                bn: 'বিপজ্জনক! কাপড়ের দস্তানা ৬৮০ ভোল্টের বিপরীতে কোনো নিরাপত্তা দেয় না।'
              }
            }
          ]
        },
        {
          stageTitle: {
            en: 'Step 3: Engineering Measurement Validation',
            hi: 'चरण 3: मापन यंत्र सत्यापन',
            bn: 'ধাপ ৩: পরিমাপক যন্ত্র যাচাই'
          },
          question: {
            en: 'Which instrument category is mandatory when testing for the absence of voltage in high-voltage substation switchgear?',
            hi: 'सबस्टेशन स्विचगियर में वोल्टेज की अनुपस्थिति की जांच करते समय किस श्रेणी के मीटर अनिवार्य हैं?',
            bn: 'সাবস্টেশনের সুইচগিয়ারে ভোল্টেজ অনুপস্থিতি যাচাইয়ের জন্য কোন শ্রেণির মিটার বাধ্যতামূলক?'
          },
          options: [
            {
              id: 'opt-3a',
              text: {
                en: 'IEC 61243 approved High-Voltage contact voltage detector with built-in self-test (Proving Unit before & after test)',
                hi: 'परीक्षण से पहले और बाद में प्रोविंग यूनिट द्वारा सत्यापित IEC 61243 प्रमाणित हाई-वोल्टेज डिटेक्टर',
                bn: 'টেস্টের আগে ও পরে প্রুভিং ইউনিট দ্বারা যাচাইকৃত IEC 61243 অনুমোদিত হাই-ভোল্টেজ ডিটেক্টর'
              },
              isCorrect: true,
              feedback: {
                en: 'Correct! The Golden Rule of Electrical Testing is the "Live-Dead-Live" test using a dedicated proving unit before and after verifying absence of voltage.',
                hi: 'उत्कृष्ट! सुरक्षित अलगाव का स्वर्ण नियम "लाइव-डेड-लाइव" परीक्षण है।',
                bn: 'চমৎকার! বৈদ্যুতিক সুরক্ষার সুবর্ণ নিয়ম হলো "লাইভ-ডেড-লাইভ" পদ্ধতি মেনে চলা।'
              }
            },
            {
              id: 'opt-3b',
              text: {
                en: 'A standard low-cost hobbyist multimeter with CAT II rating',
                hi: 'CAT II रेटिंग वाला साधारण घरेलू मल्टीमीटर',
                bn: 'একটি সাধারণ CAT II রেটিং যুক্ত মাল্টিমিটার'
              },
              isCorrect: false,
              feedback: {
                en: 'Extreme Hazard! Low-category meters can flash over and explode due to utility transient overvoltages.',
                hi: 'अत्यंत खतरनाक! निम्न श्रेणी के मीटर हाई-वोल्टेज स्पाइक्स पर फट सकते हैं।',
                bn: 'মারাত্মক ঝুঁকিপূর্ণ! সাধারণ মিটার উচ্চ ভোল্টেজ আর্কে বিস্ফোরিত হতে পারে।'
              }
            }
          ]
        }
      ]
    },
    {
      id: 'sc-induction-furnace-hotwork',
      title: {
        en: 'Scenario 2: Industrial Induction Melting Furnace Water-Cooling & Core Loss Testing',
        hi: 'परिदृश्य 2: औद्योगिक प्रेरण गलन भट्टी (Induction Furnace) जल-शीतलन एवं कोर लॉस परीक्षण',
        bn: 'দৃশ্যপট ২: শিল্প ইন্ডাকশন ফার্নেসের পানি-শীতলীকরণ ও কোর লস পরীক্ষা'
      },
      subtitle: {
        en: 'Commissioning a 500 kW, 3 kHz medium-frequency coreless induction furnace for melting alloy steels.',
        hi: 'मिश्र धातु इस्पात को पिघलाने के लिए 500 kW, 3 kHz मध्यम-आवृत्ति कोरलेस प्रेरण भट्टी की कमीशनिंग।',
        bn: 'সংকর ইস্পাত গলানোর জন্য ৫০০ kW, ৩ kHz মাঝারি-কম্পাঙ্কের কোরলেস ইন্ডাকশন ফার্নেস কমিশনিং।'
      },
      badge: { en: 'Induction Heating / Thermal & Magnetic Safety', hi: 'प्रेरण तापन / तापीय एवं चुंबकीय सुरक्षा', bn: 'ইন্ডাকশন উত্তাপন / তাপীয় ও চৌম্বক নিরাপত্তা' },
      steps: [
        {
          stageTitle: {
            en: 'Step 1: Coil Cooling & Skin Effect Loss',
            hi: 'चरण 1: कॉइल शीतलन एवं स्किन प्रभाव हानि',
            bn: 'ধাপ ১: কয়েল কুলিং ও স্কিন ইফেক্ট অপচয়'
          },
          question: {
            en: 'Why is the main primary induction coil constructed from hollow rectangular copper tubing carrying deionized cooling water?',
            hi: 'मुख्य प्रेरण कुण्डली को विआयनीकृत (Deionized) शीतल जल प्रवाहित करने वाली खोखली तांबे की नली से क्यों बनाया जाता है?',
            bn: 'মূল ইন্ডাকশন কয়েলটি কেন ভিতর ফাঁপা তামার পাইপ দিয়ে তৈরি হয় যার মধ্য দিয়ে শীতল পানি প্রবাহিত হয়?'
          },
          options: [
            {
              id: 'opt-2-1a',
              text: {
                en: 'High-frequency AC concentrates current in the outer skin of the copper; water cooling inside the hollow tube removes immense I²R copper losses without increasing coil resistance',
                hi: 'उच्च-आवृत्ति धारा तांबे की बाहरी त्वचा में केंद्रित होती है; खोखली नली में बहता पानी भारी I²R तापन को हटा देता है',
                bn: 'উচ্চ কম্পাঙ্কের কারণে কারেন্ট কয়েলের বাইরের পৃষ্ঠে সীমাবদ্ধ থাকে; ফাঁপা পাইপের ভেতরের শীতল পানি তীব্র I²R তাপ অপসারণ করে'
              },
              isCorrect: true,
              feedback: {
                en: 'Correct! Due to the skin effect at 3 kHz, current flows in a thin outer layer (~1.2 mm). The hollow center provides the ideal path for forced water cooling.',
                hi: 'सही! स्किन प्रभाव के कारण धारा केवल बाहरी परत में बहती है, अतः खोखला केंद्र पानी बहाने के लिए आदर्श है।',
                bn: 'সঠিক! স্কিন ইফেক্টের কারণে কারেন্ট কেবল বাইরের স্তরে প্রবাহিত হয়, তাই ফাঁপা কেন্দ্রে পানি প্রবাহের মাধ্যমে ঠান্ডা রাখা হয়।'
              }
            },
            {
              id: 'opt-2-1b',
              text: {
                en: 'Water conducts the magnetic flux lines better than air or vacuum',
                hi: 'पानी हवा की तुलना में चुंबकीय फ्लक्स को बेहतर संचालित करता है',
                bn: 'পানি বাতাসের চেয়ে চৌম্বক ফ্লাক্স ভালো পরিবহন করে'
              },
              isCorrect: false,
              feedback: {
                en: 'Incorrect. Water has a relative magnetic permeability of ~0.99999 (essentially identical to air).',
                hi: 'गलत। पानी की चुंबकशीलता हवा के लगभग समान (μ_r ≈ 1) होती है।',
                bn: 'ভুল। পানির আপেক্ষিক চৌম্বক ভেদ্যতা প্রায় ১, এটি ফ্লাক্স বৃদ্ধি করে না।'
              }
            }
          ]
        },
        {
          stageTitle: {
            en: 'Step 2: Magnetic Shielding & Stray Flux Shunts',
            hi: 'चरण 2: चुंबकीय शील्डिंग एवं आवारा फ्लक्स शंट',
            bn: 'ধাপ ২: চৌম্বক শিল্ডিং ও স্ট্রে ফ্লাক্স শান্ট'
          },
          question: {
            en: 'What hazard occurs if the furnace outer steel structural framework lacks vertically laminated silicon-steel magnetic shunts?',
            hi: 'यदि भट्टी के बाहरी संरचनात्मक स्टील फ्रेम में सिलिकॉन-स्टील लैमिनेटेड शंट न हों तो क्या खतरा होगा?',
            bn: 'ফার্নেসের বাইরের স্টিল ফ্রেমে যদি সিলিকন-স্টিল ল্যামিনেটেড শান্ট না থাকে তবে কী বিপদ ঘটবে?'
          },
          options: [
            {
              id: 'opt-2-2a',
              text: {
                en: 'Stray magnetic flux will enter the solid structural steel beams, inducing heavy eddy currents that overheat and compromise structural rigidity',
                hi: 'आवारा चुंबकीय फ्लक्स ठोस बीमों में प्रवेश करेगा, जिससे भंवर धाराएं उत्पन्न होकर बीम को पिघला या कमजोर कर सकती हैं',
                bn: 'স্ট্রে ফ্লাক্স কাঠামোর স্টিল বিমে প্রবেশ করে তীব্র এডি কারেন্ট তৈরি করবে, ফলে ফ্রেম অতিরিক্ত উত্তপ্ত হয়ে বিকল হতে পারে'
              },
              isCorrect: true,
              feedback: {
                en: 'Correct! Magnetic flux shunts guide stray flux along low-reluctance laminated paths back to the melt, preventing hazardous eddy heating of structural bolts and beams.',
                hi: 'सही! लैमिनेटेड शंट बाहरी धातु के ढांचों में भंवर धाराओं और खतरनाक तापन को रोकते हैं।',
                bn: 'সঠিক! ল্যামিনেটেড শান্ট স্ট্রে ফ্লাক্সকে নিয়ন্ত্রণ করে যাতে বাইরের ধাতব কাঠামো এডি কারেন্টে উত্তপ্ত না হয়।'
              }
            },
            {
              id: 'opt-2-2b',
              text: {
                en: 'The steel beams will reverse the direction of electrical power back into the utility grid',
                hi: 'स्टील बीम बिजली की दिशा को ग्रिड की तरफ उल्टा कर देंगी',
                bn: 'স্টিল বিম বিদ্যুৎ প্রবাহের দিক গ্রিডের দিকে উল্টে দেবে'
              },
              isCorrect: false,
              feedback: {
                en: 'Incorrect. Eddy currents dissipate power as heat; they cannot act as reverse generators to the grid.',
                hi: 'गलत। भंवर धाराएं ऊर्जा का अपव्यय करती हैं, बिजली पैदा नहीं करतीं।',
                bn: 'ভুল। এডি কারেন্ট তাপ উৎপন্ন করে শক্তি অপচয় করে, পাওয়ার ফেরত পাঠায় না।'
              }
            }
          ]
        }
      ]
    },
    {
      id: 'sc-maglev-linear-induction',
      title: {
        en: 'Scenario 3: Linear Induction Motor (LIM) & Eddy-Current Rail Brake Inspection',
        hi: 'परिदृश्य 3: लीनियर इंडक्शन मोटर (LIM) एवं भंवर धारा ट्रैक ब्रेक निरीक्षण',
        bn: 'দৃশ্যপট ৩: লিনিয়ার ইন্ডাকশন মোটর (LIM) ও এডি কারেন্ট ট্র্যাক ব্রেক পরিদর্শন'
      },
      subtitle: {
        en: 'Safety commissioning and insulation resistance testing on a 250 km/h regional automated transit train bogie.',
        hi: '250 किमी/घंटा की रीजनल ट्रेन बोगी पर सुरक्षा कमीशनिंग एवं इंसुलेशन प्रतिरोध परीक्षण।',
        bn: '২৫০ কিমি/ঘণ্টা গতির ট্রানজিট ট্রেনের বগিতে নিরাপত্তা কমিশনিং ও ইনসুলেশন রোধ পরীক্ষা।'
      },
      badge: { en: 'Linear Traction / Dynamic Braking Safety', hi: 'रैखिक कर्षण / गतिशील ब्रेकिंग सुरक्षा', bn: 'লিনিয়ার ট্র্যাকশন / ডায়নামিক ব্রেকিং সুরক্ষা' },
      steps: [
        {
          stageTitle: {
            en: 'Step 1: Failsafe Standstill Braking Limitations',
            hi: 'चरण 1: शून्य गति पर ब्रेकिंग सीमाएं',
            bn: 'ধাপ ১: স্থির অবস্থায় ব্রেকিং সীমাবদ্ধতা'
          },
          question: {
            en: 'During a steep 4% incline holding test, the driver disables the mechanical parking brake and relies exclusively on the eddy-current retarder. What happens?',
            hi: '4% ढलान पर परीक्षण के दौरान, ड्राइवर मैकेनिकल ब्रेक हटाकर केवल भंवर धारा रिटार्डर पर निर्भर करता है। क्या होगा?',
            bn: '৪% ঢালু ট্র্যাকে মেকানিক্যাল পার্কিং ব্রেক বন্ধ করে শুধু এডি কারেন্ট রিটার্ডারের ওপর নির্ভর করলে কী ঘটবে?'
          },
          options: [
            {
              id: 'opt-3-1a',
              text: {
                en: 'The train rolls backward down the hill because eddy-current braking force is strictly proportional to velocity (F ∝ v) and drops to zero at standstill (v = 0)',
                hi: 'ट्रेन पीछे की ओर लुढ़क जाएगी क्योंकि भंवर धारा ब्रेक वेग के समानुपाती (F ∝ v) होता है और स्थिर अवस्था (v = 0) में शून्य हो जाता है',
                bn: 'ট্রেনটি পেছনের দিকে গড়িয়ে পড়বে কারণ এডি ব্রেকিং বল বেগের সমানুপাতিক (F ∝ v) এবং স্থির অবস্থায় (v = ০) এর মান শূন্য'
              },
              isCorrect: true,
              feedback: {
                en: 'Correct! By Faraday’s law, without relative velocity (v = 0), dΦ/dt = 0, inducing zero eddy current and zero retarding force. Mechanical friction brakes are mandatory for station parking.',
                hi: 'सही! शून्य वेग पर कोई ईएमएफ या भंवर धारा उत्पन्न नहीं होती, अतः पार्किंग के लिए मैकेनिकल ब्रेक अनिवार्य है।',
                bn: 'সঠিক! স্থির অবস্থায় আপেক্ষিক বেগ শূন্য হওয়ায় কোনো এডি কারেন্ট থাকে না, ফলে মেকানিক্যাল ব্রেক আবশ্যক।'
              }
            },
            {
              id: 'opt-3-1b',
              text: {
                en: 'The magnets permanently lock to the rails like superglue and cannot be released',
                hi: 'चुंबक पटरियों से सुपरग्लू की तरह स्थायी रूप से चिपक जाएंगे',
                bn: 'চৌম্বকটি রেললাইনের সাথে স্থায়ীভাবে আটকে যাবে'
              },
              isCorrect: false,
              feedback: {
                en: 'Incorrect. Contactless eddy current brakes maintain an intentional 7 mm air gap and produce force only during motion.',
                hi: 'गलत। भंवर धारा ब्रेक बिना संपर्क के केवल गति के दौरान कार्य करता है।',
                bn: 'ভুল। এডি ব্রেক রেলকে স্পর্শ করে না এবং কেবল গতিশীল অবস্থায় কাজ করে।'
              }
            }
          ]
        },
        {
          stageTitle: {
            en: 'Step 2: Megger Insulation & Residual Magnetic Discharge',
            hi: 'चरण 2: मेगर इंसुलेशन एवं अवशिष्ट चुंबकीय ऊर्जा विसर्जन',
            bn: 'ধাপ ২: মেগার ইনসুলেশন ও অবशिष्ट চৌম্বক শক্তি ডিসচার্জ'
          },
          question: {
            en: 'Before performing a 1,000 V DC insulation resistance (Megger) test on the high-inductance stator coils of the linear induction motor, what safety protocol must be observed upon completing the test?',
            hi: 'लीनियर मोटर की उच्च-प्रेरकत्व कुंडलियों पर 1000 V मेगर परीक्षण पूरा करने के बाद किस सुरक्षा प्रोटोकॉल का पालन करना चाहिए?',
            bn: 'লিনিয়ার মোটরের উচ্চ-আবেশাঙ্ক কয়েলে ১০০০ V মেগার টেস্ট শেষ করার পর তাৎক্ষণিকভাবে কোন সুরক্ষা নিয়মটি পালন করতে হবে?'
          },
          options: [
            {
              id: 'opt-3-2a',
              text: {
                en: 'Discharge the winding inductance and capacitance to ground using a rated grounding probe to neutralize stored energy (1/2 L·I² and 1/2 C·V²)',
                hi: 'संग्रहीत ऊर्जा (1/2 L·I² एवं 1/2 C·V²) को बेअसर करने के लिए ग्राउंडिंग रॉड से वाइंडिंग को डिस्चार्ज करें',
                bn: 'সঞ্চিত শক্তি (1/2 L·I² ও 1/2 C·V²) নিষ্ক্রিয় করার জন্য গ্রাউন্ডিং প্রোব দিয়ে ওয়াইন্ডিংটি গ্রাউন্ডে ডিসচার্জ করা'
              },
              isCorrect: true,
              feedback: {
                en: 'Correct! Large inductive windings store substantial electromagnetic energy and charge cable capacitance. Touching untested terminals without discharging risks severe inductive kickback shock.',
                hi: 'सही! बड़ी वाइंडिंग में महत्वपूर्ण ऊर्जा संग्रहीत रहती है। परीक्षण के बाद डिस्चार्ज न करने पर घातक झटका लग सकता है।',
                bn: 'সঠিক! বৃহৎ আবেশ কয়েলে প্রচুর শক্তি সঞ্চিত থাকে, স্পর্শ করার আগে তা আর্থিং রড দিয়ে ডিসচার্জ করা আবশ্যক।'
              }
            },
            {
              id: 'opt-3-2b',
              text: {
                en: 'Touch both bare terminals simultaneously with bare fingers to test if tingle is gone',
                hi: 'यह जांचने के लिए कि करंट खत्म हुआ या नहीं, उंगलियों से दोनों टर्मिनलों को एक साथ छुएं',
                bn: 'আঙুল দিয়ে দুটি টার্মিনাল স্পর্শ করে দেখা যে কোনো শক আছে কিনা'
              },
              isCorrect: false,
              feedback: {
                en: 'Fatal Violation! Never use human body contact to test for residual voltage!',
                hi: 'घातक उल्लंघन! अवशिष्ट वोल्टेज की जांच कभी भी शरीर से छूकर न करें!',
                bn: 'মারাত্মক জীবনঘাতী ভুল! শরীরের স্পর্শ দিয়ে কখনও ভোল্টেজ পরীক্ষা করবেন না!'
              }
            }
          ]
        }
      ]
    }
  ];

  const currentScenario = scenarios[currentScenarioIndex];
  const currentStep = currentScenario.steps[currentStepIndex];

  const handleSelectOption = (optId: string) => {
    if (hasSubmitted) return;
    setSelectedOptionId(optId);
  };

  const handleSubmitStep = () => {
    if (!selectedOptionId || hasSubmitted) return;
    setHasSubmitted(true);
    const opt = currentStep.options.find((o) => o.id === selectedOptionId);
    if (opt?.isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextStep = () => {
    setSelectedOptionId(null);
    setHasSubmitted(false);

    if (currentStepIndex + 1 < currentScenario.steps.length) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      // Scenario complete
      if (!completedScenarios.includes(currentScenario.id)) {
        setCompletedScenarios((prev) => [...prev, currentScenario.id]);
      }
      if (currentScenarioIndex + 1 < scenarios.length) {
        setCurrentScenarioIndex((prev) => prev + 1);
        setCurrentStepIndex(0);
      } else {
        setIsFinished(true);
      }
    }
  };

  const handleRestart = () => {
    setCurrentScenarioIndex(0);
    setCurrentStepIndex(0);
    setSelectedOptionId(null);
    setHasSubmitted(false);
    setScore(0);
    setCompletedScenarios([]);
    setIsFinished(false);
  };

  const totalSteps = scenarios.reduce((acc, s) => acc + s.steps.length, 0);

  const labels = {
    en: {
      title: 'Chapter 10 Capstone: Electromagnetic Induction Testing & Safety Laboratory',
      subtitle: 'Apply multi-stage diagnostic troubleshooting across transformers, induction furnaces, and linear propulsion',
      scenarioProgress: `Scenario ${currentScenarioIndex + 1} of ${scenarios.length}`,
      stepProgress: `Stage ${currentStepIndex + 1} of ${currentScenario.steps.length}`,
      scoreLabel: 'Safety & Diagnostics Score:',
      submit: 'Verify Engineering Decision',
      next: 'Proceed to Next Stage',
      restart: 'Restart Capstone Lab',
      completedTitle: 'Chapter 10 Mastery Achieved!',
      completedSubtitle: 'You have systematically verified electromagnetic induction diagnostic workflows, safety earthing protocols, and real-world failure modes.',
      scenariosHeader: 'Diagnostic Scenarios Completed:'
    },
    hi: {
      title: 'अध्याय 10 कैपस्टोन: विद्युत-चुंबकीय प्रेरण परीक्षण एवं सुरक्षा प्रयोगशाला',
      subtitle: 'ट्रांसफार्मर, प्रेरण भट्टियों एवं रैखिक प्रणोदन में बहु-स्तरीय नैदानिक परीक्षण का अभ्यास करें',
      scenarioProgress: `परिदृश्य ${currentScenarioIndex + 1} / ${scenarios.length}`,
      stepProgress: `चरण ${currentStepIndex + 1} / ${currentScenario.steps.length}`,
      scoreLabel: 'सुरक्षा एवं डायग्नोस्टिक्स स्कोर:',
      submit: 'निर्णय सत्यापित करें',
      next: 'अगले चरण पर जाएं',
      restart: 'प्रयोगशाला पुनः प्रारंभ करें',
      completedTitle: 'अध्याय 10 में पूर्ण दक्षता प्राप्त!',
      completedSubtitle: 'आपने विद्युत-चुंबकीय प्रेरण के नैदानिक प्रवाह, सुरक्षा अर्थिंग प्रोटोकॉल एवं वास्तविक समस्याओं का सफल समाधान किया है।',
      scenariosHeader: 'पूर्ण किए गए परिदृश्य:'
    },
    bn: {
      title: 'অধ্যায় ১০ ক্যাপস্টোন: তড়িৎচৌম্বকীয় আবেশ পরীক্ষণ ও নিরাপত্তা ল্যাবরেটরি',
      subtitle: 'ট্রান্সফরমার, ইন্ডাকশন ফার্নেস ও লিনিয়ার মোটরের সমন্বিত ত্রুটি নির্ণয় ও নিরাপত্তা অনুশীলন',
      scenarioProgress: `দৃশ্যপট ${currentScenarioIndex + 1} / ${scenarios.length}`,
      stepProgress: `পর্যায় ${currentStepIndex + 1} / ${currentScenario.steps.length}`,
      scoreLabel: 'নিরাপত্তা ও ডায়াগনস্টিক স্কোর:',
      submit: 'সিদ্ধান্ত যাচাই করুন',
      next: 'পরবর্তী পর্যায়ে যান',
      restart: 'ল্যাব পুনরায় শুরু করুন',
      completedTitle: 'অধ্যায় ১০-এ পূর্ণ দক্ষতা অর্জিত!',
      completedSubtitle: 'আপনি সফলভাবে তড়িৎচৌম্বকীয় আবেশের ত্রুটি নির্ণয়, আর্থিং নিরাপত্তা প্রটোকল ও ফিল্ড সমস্যার সমাধান করেছেন।',
      scenariosHeader: 'সম্পূর্ণ দৃশ্যপটসমূহ:'
    }
  }[currentLanguage];

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-xl p-4 sm:p-6 border border-slate-700 shadow-xl">
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-slate-700 pb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-amber-400 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            {labels.title}
          </h2>
          <p className="text-sm text-slate-400 mt-1">{labels.subtitle}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-2 text-xs">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-slate-400">{labels.scoreLabel}</span>
            <span className="font-mono font-bold text-emerald-400">{score} / {totalSteps}</span>
          </div>
          <button
            onClick={handleRestart}
            className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 border border-slate-700 transition-colors focus:ring-2 focus:ring-amber-400"
            aria-label={labels.restart}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isFinished ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Scenario Narrative & Breadcrumb */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Scenario Card */}
            <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  {labels.scenarioProgress}
                </span>
                <span className="text-[11px] px-2 py-0.5 bg-amber-500/20 text-amber-300 rounded border border-amber-500/30">
                  {currentScenario.badge[currentLanguage]}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-100">
                {currentScenario.title[currentLanguage]}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                {currentScenario.subtitle[currentLanguage]}
              </p>
            </div>

            {/* Workflow Pipeline Indicator */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <span className="text-xs font-semibold text-slate-400 block mb-2">
                DIAGNOSTIC PIPELINE ({labels.stepProgress})
              </span>
              <div className="space-y-2">
                {currentScenario.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className={`p-2 rounded-lg text-xs flex items-center justify-between border ${
                      idx === currentStepIndex
                        ? 'bg-amber-500/20 border-amber-400 text-amber-200 font-bold'
                        : idx < currentStepIndex
                        ? 'bg-emerald-950/40 border-emerald-700/60 text-emerald-300'
                        : 'bg-slate-900 border-slate-800 text-slate-500'
                    }`}
                  >
                    <span>{step.stageTitle[currentLanguage]}</span>
                    {idx < currentStepIndex && <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />}
                    {idx === currentStepIndex && <Activity className="w-3.5 h-3.5 text-amber-400 animate-pulse" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Question & Interactive Decision Tree */}
          <div className="lg:col-span-7 bg-slate-800/80 p-5 rounded-xl border border-slate-700 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4 text-sky-400" />
                <span>{currentStep.stageTitle[currentLanguage]}</span>
              </div>

              <h4 className="text-sm sm:text-base font-bold text-slate-100 mb-4 leading-snug">
                {currentStep.question[currentLanguage]}
              </h4>

              {/* Options */}
              <div className="space-y-3">
                {currentStep.options.map((option) => {
                  const isSelected = selectedOptionId === option.id;
                  let cardStyle = 'bg-slate-900/90 border-slate-700 hover:border-slate-500 text-slate-200';

                  if (hasSubmitted) {
                    if (option.isCorrect) {
                      cardStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-100 font-semibold';
                    } else if (isSelected && !option.isCorrect) {
                      cardStyle = 'bg-red-950/80 border-red-500 text-red-100';
                    } else {
                      cardStyle = 'bg-slate-900/50 border-slate-800 text-slate-500 opacity-60';
                    }
                  } else if (isSelected) {
                    cardStyle = 'bg-amber-500/20 border-amber-400 text-amber-200 font-medium shadow-md';
                  }

                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSelectOption(option.id)}
                      disabled={hasSubmitted}
                      className={`w-full text-left p-3.5 rounded-lg border transition-all flex items-start gap-3 ${cardStyle} focus:outline-none focus:ring-2 focus:ring-amber-400`}
                    >
                      <span className="mt-0.5 shrink-0">
                        {hasSubmitted ? (
                          option.isCorrect ? (
                            <CheckCircle className="w-4 h-4 text-emerald-400" />
                          ) : isSelected ? (
                            <XCircle className="w-4 h-4 text-red-400" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-slate-600" />
                          )
                        ) : (
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected ? 'border-amber-400 bg-amber-400' : 'border-slate-600'
                            }`}
                          >
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                          </div>
                        )}
                      </span>
                      <span className="text-xs sm:text-sm">{option.text[currentLanguage]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Feedback banner */}
              {hasSubmitted && (
                <div
                  className={`mt-4 p-3.5 rounded-lg border text-xs sm:text-sm flex items-start gap-2.5 ${
                    currentStep.options.find((o) => o.id === selectedOptionId)?.isCorrect
                      ? 'bg-emerald-950/80 border-emerald-600 text-emerald-200'
                      : 'bg-red-950/80 border-red-600 text-red-200'
                  }`}
                >
                  {currentStep.options.find((o) => o.id === selectedOptionId)?.isCorrect ? (
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    {currentStep.options.find((o) => o.id === selectedOptionId)?.feedback[currentLanguage]}
                  </div>
                </div>
              )}
            </div>

            {/* Action Bar */}
            <div className="mt-6 pt-4 border-t border-slate-700 flex justify-end">
              {!hasSubmitted ? (
                <button
                  onClick={handleSubmitStep}
                  disabled={!selectedOptionId}
                  className={`px-5 py-2.5 rounded-lg font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                    selectedOptionId
                      ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-lg focus:ring-2 focus:ring-amber-400'
                      : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4" />
                  {labels.submit}
                </button>
              ) : (
                <button
                  onClick={handleNextStep}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-lg focus:ring-2 focus:ring-emerald-400"
                >
                  <span>{labels.next}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Completion View */
        <div className="bg-slate-950 p-6 sm:p-8 rounded-xl border border-slate-800 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-4 border border-emerald-500/40">
            <Award className="w-8 h-8" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-emerald-400 mb-2">
            {labels.completedTitle}
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mb-6">
            {labels.completedSubtitle}
          </p>

          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 w-full max-w-md mb-6">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              {labels.scoreLabel}
            </span>
            <span className="text-4xl font-extrabold font-mono text-amber-400">
              {score} / {totalSteps}
            </span>
            <span className="text-xs text-slate-400 block mt-1">
              ({Math.round((score / totalSteps) * 100)}% Proficiency)
            </span>
          </div>

          <div className="w-full max-w-lg text-left bg-slate-900/80 p-4 rounded-xl border border-slate-800 mb-6">
            <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
              {labels.scenariosHeader}
            </h4>
            <ul className="text-xs space-y-2 text-slate-300">
              {scenarios.map((sc, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{sc.title[currentLanguage]}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={handleRestart}
            className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-lg transition-colors flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            {labels.restart}
          </button>
        </div>
      )}
    </div>
  );
};
