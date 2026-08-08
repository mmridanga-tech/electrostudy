import { Lesson } from '../types';
import { CHAPTER_2_LESSONS_PART1 } from './chapter2LessonsPart1';
import { CHAPTER_2_LESSONS_PART2 } from './chapter2LessonsPart2';

export const CHAPTER_2_LESSONS: Record<string, Lesson> = {
  ...CHAPTER_2_LESSONS_PART1,
  ...CHAPTER_2_LESSONS_PART2
};
