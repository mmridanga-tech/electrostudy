import { Lesson } from '../types';
import { LESSON_ELECTRICAL_MACHINES_FUNDAMENTALS } from './chapter6Lesson1';
import { LESSON_MAGNETIC_CIRCUITS } from './chapter6Lesson2';
import { LESSON_DC_MACHINE_CONSTRUCTION } from './chapter6Lesson3';

export const CHAPTER_6_LESSONS: Record<string, Lesson> = {
  'ch6-electrical-machines-fundamentals': LESSON_ELECTRICAL_MACHINES_FUNDAMENTALS,
  'ch6-magnetic-circuits': LESSON_MAGNETIC_CIRCUITS,
  'ch6-dc-machine-construction': LESSON_DC_MACHINE_CONSTRUCTION,
};

export {
  LESSON_ELECTRICAL_MACHINES_FUNDAMENTALS,
  LESSON_MAGNETIC_CIRCUITS,
  LESSON_DC_MACHINE_CONSTRUCTION,
};
