import { Lesson } from '../types';
import { LESSON_ELECTRIC_SHOCK } from './chapter15Lesson1';
import { LESSON_CAUSES_ELECTRICAL_ACCIDENTS } from './chapter15Lesson2';
import { LESSON_EARTHING_CONCEPT } from './chapter15Lesson3';
import { LESSON_FUSE_CONCEPT } from './chapter15Lesson4';
import { LESSON_MCB_CONCEPT } from './chapter15Lesson5';
import { LESSON_RCCB_ELCB_CONCEPT } from './chapter15Lesson6';
import { LESSON_ELECTRICAL_ISOLATION } from './chapter15Lesson7';

export const CHAPTER_15_LESSONS: Record<string, Lesson> = {
  // Canonical Topic ID mappings from learningData.ts
  'tp-electric-shock': LESSON_ELECTRIC_SHOCK,
  'tp-causes-electrical-accidents': LESSON_CAUSES_ELECTRICAL_ACCIDENTS,
  'tp-earthing-concept': LESSON_EARTHING_CONCEPT,
  'tp-fuse': LESSON_FUSE_CONCEPT,
  'tp-fuse-concept': LESSON_FUSE_CONCEPT,
  'tp-mcb-concept': LESSON_MCB_CONCEPT,
  'tp-rccb-elcb-concept': LESSON_RCCB_ELCB_CONCEPT,
  'tp-electrical-isolation': LESSON_ELECTRICAL_ISOLATION,

  // Canonical Lesson ID mappings
  'lsn-ch15-electric-shock': LESSON_ELECTRIC_SHOCK,
  'lsn-ch15-causes-electrical-accidents': LESSON_CAUSES_ELECTRICAL_ACCIDENTS,
  'lsn-ch15-earthing-concept': LESSON_EARTHING_CONCEPT,
  'lsn-ch15-fuse-concept': LESSON_FUSE_CONCEPT,
  'lsn-ch15-mcb-concept': LESSON_MCB_CONCEPT,
  'lsn-ch15-rccb-elcb-concept': LESSON_RCCB_ELCB_CONCEPT,
  'lsn-ch15-electrical-isolation': LESSON_ELECTRICAL_ISOLATION,

  // Forward / backward-compatibility aliases
  'ch15-electric-shock': LESSON_ELECTRIC_SHOCK,
  'ch15-causes-electrical-accidents': LESSON_CAUSES_ELECTRICAL_ACCIDENTS,
  'ch15-earthing-concept': LESSON_EARTHING_CONCEPT,
  'ch15-fuse-concept': LESSON_FUSE_CONCEPT,
  'ch15-mcb-concept': LESSON_MCB_CONCEPT,
  'ch15-rccb-elcb-concept': LESSON_RCCB_ELCB_CONCEPT,
  'ch15-electrical-isolation': LESSON_ELECTRICAL_ISOLATION,

  'tp-ch15-electric-shock': LESSON_ELECTRIC_SHOCK,
  'tp-ch15-causes-electrical-accidents': LESSON_CAUSES_ELECTRICAL_ACCIDENTS,
  'tp-ch15-earthing-concept': LESSON_EARTHING_CONCEPT,
  'tp-ch15-fuse-concept': LESSON_FUSE_CONCEPT,
  'tp-ch15-mcb-concept': LESSON_MCB_CONCEPT,
  'tp-ch15-rccb-elcb-concept': LESSON_RCCB_ELCB_CONCEPT,
  'tp-ch15-electrical-isolation': LESSON_ELECTRICAL_ISOLATION
};

export function getChapter15Lesson(topicOrLessonId: string): Lesson | undefined {
  return CHAPTER_15_LESSONS[topicOrLessonId];
}

export {
  LESSON_ELECTRIC_SHOCK,
  LESSON_CAUSES_ELECTRICAL_ACCIDENTS,
  LESSON_EARTHING_CONCEPT,
  LESSON_FUSE_CONCEPT,
  LESSON_MCB_CONCEPT,
  LESSON_RCCB_ELCB_CONCEPT,
  LESSON_ELECTRICAL_ISOLATION
};
