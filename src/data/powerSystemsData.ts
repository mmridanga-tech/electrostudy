import { DetailedSubject } from '../types';
import { POWER_SYSTEMS_MODULE_1 } from './powerSystems/module1Generation';
import { POWER_SYSTEMS_MODULE_2 } from './powerSystems/module2Transmission';
import { POWER_SYSTEMS_MODULE_3 } from './powerSystems/module3Distribution';
import { POWER_SYSTEMS_MODULE_4 } from './powerSystems/module4Faults';
import { POWER_SYSTEMS_MODULE_5 } from './powerSystems/module5Protection';

export const POWER_SYSTEMS_SUBJECT: DetailedSubject = {
  id: 'power-systems',
  slug: 'power-systems',
  icon: 'Activity',
  title: {
    en: 'Power Systems (Generation, Transmission & Protection)',
    hi: 'पावर सिस्टम्स (जनरेशन, ट्रांसमिशन एवं सुरक्षा)',
    bn: 'পাওয়ার সিস্টেমস (উৎপাদন, সঞ্চালন ও সুরক্ষা)'
  },
  description: {
    en: 'Comprehensive 22-topic engineering curriculum covering Electrical Power Generation, Overhead Transmission Lines & Modeling, Distribution Systems & Underground Cables, Fault Analysis & Symmetrical Components, and Switchgear, Relays & Grid Stability.',
    hi: 'विद्युत उत्पादन, ट्रांसमिशन लाइन मॉडलिंग, वितरण प्रणाली व भूमिगत केबल, फॉल्ट विश्लेषण तथा स्विचगियर, रिले एवं ग्रिड स्थिरता का संपूर्ण 22-विषय पाठ्यक्रम।',
    bn: 'বিদ্যুৎ উৎপাদন, ট্রান্সমিশন লাইন মডেলিং, ডিস্ট্রিবিউশন সিস্টেম ও ক্যাবল, ফল্ট অ্যানালিসিস এবং সুইচগিয়ার, রিলে ও গ্রিড স্ট্যাবিলিটির সম্পূর্ণ ২২-টপিক সিলেবাস।'
  },
  chapters: [
    POWER_SYSTEMS_MODULE_1,
    POWER_SYSTEMS_MODULE_2,
    POWER_SYSTEMS_MODULE_3,
    POWER_SYSTEMS_MODULE_4,
    POWER_SYSTEMS_MODULE_5
  ]
};
