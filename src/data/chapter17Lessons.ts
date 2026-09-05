import { Lesson } from '../types';
import { LESSON_PROTECTION_PHILOSOPHY_ZONES } from './chapter17Lesson1';
import { LESSON_INSTRUMENT_TRANSFORMERS } from './chapter17Lesson2';
import { LESSON_OVERCURRENT_EARTH_FAULT } from './chapter17Lesson3';
import { LESSON_DIFFERENTIAL_PROTECTION } from './chapter17Lesson4';
import { LESSON_TRANSFORMER_PROTECTION } from './chapter17Lesson5';
import { LESSON_DISTANCE_PROTECTION } from './chapter17Lesson6';
import { LESSON_CARRIER_PILOT_SCHEMES } from './chapter17Lesson7';
import { LESSON_GENERATOR_MOTOR_PROTECTION } from './chapter17Lesson8';
import { LESSON_BUSBAR_BREAKER_FAILURE } from './chapter17Lesson9';
import { LESSON_CIRCUIT_BREAKERS_IEC61850 } from './chapter17Lesson10';

export const CHAPTER_17_LESSONS: Record<string, Lesson> = {
  // Canonical Topic ID mappings
  'tp-ch17-protection-philosophy-zones': LESSON_PROTECTION_PHILOSOPHY_ZONES,
  'tp-ch17-instrument-transformers-protection': LESSON_INSTRUMENT_TRANSFORMERS,
  'tp-ch17-overcurrent-earth-fault-relays': LESSON_OVERCURRENT_EARTH_FAULT,
  'tp-ch17-differential-protection-principles': LESSON_DIFFERENTIAL_PROTECTION,
  'tp-ch17-transformer-protection-inrush': LESSON_TRANSFORMER_PROTECTION,
  'tp-ch17-distance-protection-transmission-lines': LESSON_DISTANCE_PROTECTION,
  'tp-ch17-carrier-pilot-wire-schemes': LESSON_CARRIER_PILOT_SCHEMES,
  'tp-ch17-generator-motor-protection': LESSON_GENERATOR_MOTOR_PROTECTION,
  'tp-ch17-busbar-protection-breaker-failure': LESSON_BUSBAR_BREAKER_FAILURE,
  'tp-ch17-circuit-breakers-arc-interruption': LESSON_CIRCUIT_BREAKERS_IEC61850,

  // Canonical Lesson ID mappings
  'lsn-ch17-protection-philosophy-zones': LESSON_PROTECTION_PHILOSOPHY_ZONES,
  'lsn-ch17-instrument-transformers-protection': LESSON_INSTRUMENT_TRANSFORMERS,
  'lsn-ch17-overcurrent-earth-fault-relays': LESSON_OVERCURRENT_EARTH_FAULT,
  'lsn-ch17-differential-protection-principles': LESSON_DIFFERENTIAL_PROTECTION,
  'lsn-ch17-transformer-protection-inrush': LESSON_TRANSFORMER_PROTECTION,
  'lsn-ch17-distance-protection-transmission-lines': LESSON_DISTANCE_PROTECTION,
  'lsn-ch17-carrier-pilot-wire-schemes': LESSON_CARRIER_PILOT_SCHEMES,
  'lsn-ch17-generator-motor-protection': LESSON_GENERATOR_MOTOR_PROTECTION,
  'lsn-ch17-busbar-protection-breaker-failure': LESSON_BUSBAR_BREAKER_FAILURE,
  'lsn-ch17-circuit-breakers-arc-interruption': LESSON_CIRCUIT_BREAKERS_IEC61850,

  // Additional intuitive aliases
  'ch17-protection-philosophy-zones': LESSON_PROTECTION_PHILOSOPHY_ZONES,
  'ch17-instrument-transformers-protection': LESSON_INSTRUMENT_TRANSFORMERS,
  'ch17-overcurrent-earth-fault-relays': LESSON_OVERCURRENT_EARTH_FAULT,
  'ch17-differential-protection-principles': LESSON_DIFFERENTIAL_PROTECTION,
  'ch17-transformer-protection-inrush': LESSON_TRANSFORMER_PROTECTION,
  'ch17-distance-protection-transmission-lines': LESSON_DISTANCE_PROTECTION,
  'ch17-carrier-pilot-wire-schemes': LESSON_CARRIER_PILOT_SCHEMES,
  'ch17-generator-motor-protection': LESSON_GENERATOR_MOTOR_PROTECTION,
  'ch17-busbar-protection-breaker-failure': LESSON_BUSBAR_BREAKER_FAILURE,
  'ch17-circuit-breakers-arc-interruption': LESSON_CIRCUIT_BREAKERS_IEC61850,
};

export const CHAPTER_17_LESSON_LIST: Lesson[] = [
  LESSON_PROTECTION_PHILOSOPHY_ZONES,
  LESSON_INSTRUMENT_TRANSFORMERS,
  LESSON_OVERCURRENT_EARTH_FAULT,
  LESSON_DIFFERENTIAL_PROTECTION,
  LESSON_TRANSFORMER_PROTECTION,
  LESSON_DISTANCE_PROTECTION,
  LESSON_CARRIER_PILOT_SCHEMES,
  LESSON_GENERATOR_MOTOR_PROTECTION,
  LESSON_BUSBAR_BREAKER_FAILURE,
  LESSON_CIRCUIT_BREAKERS_IEC61850,
];

export function getChapter17Lesson(topicOrLessonId: string): Lesson | undefined {
  return CHAPTER_17_LESSONS[topicOrLessonId];
}

export {
  LESSON_PROTECTION_PHILOSOPHY_ZONES,
  LESSON_INSTRUMENT_TRANSFORMERS,
  LESSON_OVERCURRENT_EARTH_FAULT,
  LESSON_DIFFERENTIAL_PROTECTION,
  LESSON_TRANSFORMER_PROTECTION,
  LESSON_DISTANCE_PROTECTION,
  LESSON_CARRIER_PILOT_SCHEMES,
  LESSON_GENERATOR_MOTOR_PROTECTION,
  LESSON_BUSBAR_BREAKER_FAILURE,
  LESSON_CIRCUIT_BREAKERS_IEC61850,
};
