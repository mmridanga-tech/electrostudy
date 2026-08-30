import { Lesson } from '../types';
import { LESSON_FARADAYS_LAWS_DISCOVERY } from './chapter10Lesson1';
import { LESSON_LENZS_LAW_CONSERVATION_ENERGY } from './chapter10Lesson2';
import { LESSON_FLEMINGS_RIGHT_HAND_RULE } from './chapter10Lesson3';
import { LESSON_DYNAMICALLY_INDUCED_EMF } from './chapter10Lesson4';
import { LESSON_STATICALLY_INDUCED_EMF } from './chapter10Lesson5';
import { LESSON_SELF_INDUCTION_INDUCTANCE } from './chapter10Lesson6';

export const CHAPTER_10_LESSONS: Record<string, Lesson> = {
  // Topic ID mapping
  'ch10-faradays-laws-discovery': LESSON_FARADAYS_LAWS_DISCOVERY,
  'ch10-lenzs-law-conservation-energy': LESSON_LENZS_LAW_CONSERVATION_ENERGY,
  'ch10-flemings-right-hand-rule': LESSON_FLEMINGS_RIGHT_HAND_RULE,
  'ch10-dynamically-induced-emf': LESSON_DYNAMICALLY_INDUCED_EMF,
  'ch10-statically-induced-emf': LESSON_STATICALLY_INDUCED_EMF,
  'ch10-self-induction-inductance': LESSON_SELF_INDUCTION_INDUCTANCE,

  // Lesson ID mapping & backward compatibility aliases
  'lsn-ch10-faradays-laws-discovery': LESSON_FARADAYS_LAWS_DISCOVERY,
  'lsn-ch10-lenzs-law-conservation-energy': LESSON_LENZS_LAW_CONSERVATION_ENERGY,
  'lsn-ch10-flemings-right-hand-rule': LESSON_FLEMINGS_RIGHT_HAND_RULE,
  'lsn-ch10-dynamically-induced-emf': LESSON_DYNAMICALLY_INDUCED_EMF,
  'lsn-ch10-statically-induced-emf': LESSON_STATICALLY_INDUCED_EMF,
  'lsn-ch10-self-induction-inductance': LESSON_SELF_INDUCTION_INDUCTANCE,
  'tp-faradays-laws-discovery': LESSON_FARADAYS_LAWS_DISCOVERY,
  'tp-lenzs-law-conservation-energy': LESSON_LENZS_LAW_CONSERVATION_ENERGY,
  'tp-flemings-right-hand-rule': LESSON_FLEMINGS_RIGHT_HAND_RULE,
  'tp-dynamically-induced-emf': LESSON_DYNAMICALLY_INDUCED_EMF,
  'tp-statically-induced-emf': LESSON_STATICALLY_INDUCED_EMF,
  'tp-self-induction-inductance': LESSON_SELF_INDUCTION_INDUCTANCE
};

export {
  LESSON_FARADAYS_LAWS_DISCOVERY,
  LESSON_LENZS_LAW_CONSERVATION_ENERGY,
  LESSON_FLEMINGS_RIGHT_HAND_RULE,
  LESSON_DYNAMICALLY_INDUCED_EMF,
  LESSON_STATICALLY_INDUCED_EMF,
  LESSON_SELF_INDUCTION_INDUCTANCE
};

