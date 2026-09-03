import { Lesson } from '../types';
import { LESSON_EM_FIELD_FUNDAMENTALS } from './chapter11Lesson1';
import { LESSON_GAUSS_LAW } from './chapter11Lesson2';
import { LESSON_AMPERE_CIRCUITAL_LAW } from './chapter11Lesson3';
import { LESSON_FARADAY_LAW_FIELD } from './chapter11Lesson4';
import { LESSON_DISPLACEMENT_CURRENT } from './chapter11Lesson5';
import { LESSON_MAXWELLS_EQUATIONS } from './chapter11Lesson6';
import { LESSON_EM_WAVE_PROPAGATION } from './chapter11Lesson7';

export const CHAPTER_11_LESSONS: Record<string, Lesson> = {
  // Topic ID mappings
  'ch11-field-fundamentals': LESSON_EM_FIELD_FUNDAMENTALS,
  'ch11-gauss-law': LESSON_GAUSS_LAW,
  'ch11-ampere-law': LESSON_AMPERE_CIRCUITAL_LAW,
  'ch11-faraday-law': LESSON_FARADAY_LAW_FIELD,
  'ch11-displacement-current': LESSON_DISPLACEMENT_CURRENT,
  'ch11-maxwell-equations': LESSON_MAXWELLS_EQUATIONS,
  'ch11-wave-propagation-plane-waves': LESSON_EM_WAVE_PROPAGATION,

  // Lesson ID mappings
  'lsn-ch11-field-fundamentals': LESSON_EM_FIELD_FUNDAMENTALS,
  'lsn-ch11-gauss-law': LESSON_GAUSS_LAW,
  'lsn-ch11-ampere-law': LESSON_AMPERE_CIRCUITAL_LAW,
  'lsn-ch11-faraday-law': LESSON_FARADAY_LAW_FIELD,
  'lsn-ch11-displacement-current': LESSON_DISPLACEMENT_CURRENT,
  'lsn-ch11-maxwell-equations': LESSON_MAXWELLS_EQUATIONS,
  'lsn-ch11-wave-propagation-plane-waves': LESSON_EM_WAVE_PROPAGATION,

  // Alternative / legacy / backward-compatibility aliases
  'tp-ch11-field-fundamentals': LESSON_EM_FIELD_FUNDAMENTALS,
  'tp-ch11-gauss-law': LESSON_GAUSS_LAW,
  'tp-ch11-ampere-law': LESSON_AMPERE_CIRCUITAL_LAW,
  'tp-ch11-faraday-law': LESSON_FARADAY_LAW_FIELD,
  'tp-ch11-displacement-current': LESSON_DISPLACEMENT_CURRENT,
  'tp-ch11-maxwell-equations': LESSON_MAXWELLS_EQUATIONS,
  'tp-ch11-wave-propagation-plane-waves': LESSON_EM_WAVE_PROPAGATION,

  'tp-field-fundamentals': LESSON_EM_FIELD_FUNDAMENTALS,
  'tp-gauss-law': LESSON_GAUSS_LAW,
  'tp-ampere-law': LESSON_AMPERE_CIRCUITAL_LAW,
  'tp-faraday-law': LESSON_FARADAY_LAW_FIELD,
  'tp-displacement-current': LESSON_DISPLACEMENT_CURRENT,
  'tp-maxwell-equations': LESSON_MAXWELLS_EQUATIONS,
  'tp-wave-propagation-plane-waves': LESSON_EM_WAVE_PROPAGATION,

  'ch11-uniform-plane-waves': LESSON_EM_WAVE_PROPAGATION,
  'lsn-ch11-uniform-plane-waves': LESSON_EM_WAVE_PROPAGATION,
  'tp-uniform-plane-waves': LESSON_EM_WAVE_PROPAGATION,

  'ch11-em-wave-propagation': LESSON_EM_WAVE_PROPAGATION,
  'lsn-ch11-em-wave-propagation': LESSON_EM_WAVE_PROPAGATION,
  'tp-em-wave-propagation': LESSON_EM_WAVE_PROPAGATION
};

export {
  LESSON_EM_FIELD_FUNDAMENTALS,
  LESSON_GAUSS_LAW,
  LESSON_AMPERE_CIRCUITAL_LAW,
  LESSON_FARADAY_LAW_FIELD,
  LESSON_DISPLACEMENT_CURRENT,
  LESSON_MAXWELLS_EQUATIONS,
  LESSON_EM_WAVE_PROPAGATION
};
