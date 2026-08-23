import { Lesson } from '../types';
import { LESSON_ELECTRICAL_MACHINES_FUNDAMENTALS } from './chapter6Lesson1';
import { LESSON_MAGNETIC_CIRCUITS } from './chapter6Lesson2';
import { LESSON_DC_MACHINE_CONSTRUCTION } from './chapter6Lesson3';
import { LESSON_DC_GENERATOR_EMF } from './chapter6Lesson4';
import { LESSON_DC_GENERATOR_TYPES } from './chapter6Lesson5';
import { LESSON_DC_GENERATOR_CHARACTERISTICS } from './chapter6Lesson6';

export const CHAPTER_6_LESSONS: Record<string, Lesson> = {
  'ch6-electrical-machines-fundamentals': LESSON_ELECTRICAL_MACHINES_FUNDAMENTALS,
  'ch6-magnetic-circuits': LESSON_MAGNETIC_CIRCUITS,
  'ch6-dc-machine-construction': LESSON_DC_MACHINE_CONSTRUCTION,
  'ch6-dc-generator-emf': LESSON_DC_GENERATOR_EMF,
  'ch6-dc-generator-types': LESSON_DC_GENERATOR_TYPES,
  'ch6-dc-generator-characteristics': LESSON_DC_GENERATOR_CHARACTERISTICS,
};

export {
  LESSON_ELECTRICAL_MACHINES_FUNDAMENTALS,
  LESSON_MAGNETIC_CIRCUITS,
  LESSON_DC_MACHINE_CONSTRUCTION,
  LESSON_DC_GENERATOR_EMF,
  LESSON_DC_GENERATOR_TYPES,
  LESSON_DC_GENERATOR_CHARACTERISTICS,
};
