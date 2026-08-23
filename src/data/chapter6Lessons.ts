import { Lesson } from '../types';
import { LESSON_ELECTRICAL_MACHINES_FUNDAMENTALS } from './chapter6Lesson1';
import { LESSON_MAGNETIC_CIRCUITS } from './chapter6Lesson2';
import { LESSON_DC_MACHINE_CONSTRUCTION } from './chapter6Lesson3';
import { LESSON_DC_GENERATOR_EMF } from './chapter6Lesson4';
import { LESSON_DC_GENERATOR_TYPES } from './chapter6Lesson5';
import { LESSON_DC_GENERATOR_CHARACTERISTICS } from './chapter6Lesson6';
import { LESSON_DC_GENERATOR_LOSSES_EFFICIENCY } from './chapter6Lesson7';
import { LESSON_DC_MOTOR_PRINCIPLE } from './chapter6Lesson8';
import { LESSON_DC_MOTOR_TYPES } from './chapter6Lesson9';
import { LESSON_DC_MOTOR_STARTING } from './chapter6Lesson10';
import { LESSON_DC_MOTOR_SPEED_CONTROL } from './chapter6Lesson11';
import { LESSON_DC_MOTOR_BRAKING } from './chapter6Lesson12';
import { LESSON_TRANSFORMER_FUNDAMENTALS } from './chapter6Lesson13';
import { LESSON_TRANSFORMER_TYPES_CONSTRUCTION } from './chapter6Lesson14';
import { LESSON_TRANSFORMER_EQUIVALENT_CIRCUIT } from './chapter6Lesson15';

export const CHAPTER_6_LESSONS: Record<string, Lesson> = {
  'ch6-electrical-machines-fundamentals': LESSON_ELECTRICAL_MACHINES_FUNDAMENTALS,
  'ch6-magnetic-circuits': LESSON_MAGNETIC_CIRCUITS,
  'ch6-dc-machine-construction': LESSON_DC_MACHINE_CONSTRUCTION,
  'ch6-dc-generator-emf': LESSON_DC_GENERATOR_EMF,
  'ch6-dc-generator-types': LESSON_DC_GENERATOR_TYPES,
  'ch6-dc-generator-characteristics': LESSON_DC_GENERATOR_CHARACTERISTICS,
  'ch6-dc-generator-losses-efficiency': LESSON_DC_GENERATOR_LOSSES_EFFICIENCY,
  'ch6-dc-motor-principle': LESSON_DC_MOTOR_PRINCIPLE,
  'ch6-dc-motor-types': LESSON_DC_MOTOR_TYPES,
  'ch6-dc-motor-starting': LESSON_DC_MOTOR_STARTING,
  'ch6-dc-motor-speed-control': LESSON_DC_MOTOR_SPEED_CONTROL,
  'ch6-dc-motor-braking': LESSON_DC_MOTOR_BRAKING,
  'ch6-transformer-fundamentals': LESSON_TRANSFORMER_FUNDAMENTALS,
  'ch6-transformer-types-construction': LESSON_TRANSFORMER_TYPES_CONSTRUCTION,
  'ch6-transformer-equivalent-circuit': LESSON_TRANSFORMER_EQUIVALENT_CIRCUIT,
};

export {
  LESSON_ELECTRICAL_MACHINES_FUNDAMENTALS,
  LESSON_MAGNETIC_CIRCUITS,
  LESSON_DC_MACHINE_CONSTRUCTION,
  LESSON_DC_GENERATOR_EMF,
  LESSON_DC_GENERATOR_TYPES,
  LESSON_DC_GENERATOR_CHARACTERISTICS,
  LESSON_DC_GENERATOR_LOSSES_EFFICIENCY,
  LESSON_DC_MOTOR_PRINCIPLE,
  LESSON_DC_MOTOR_TYPES,
  LESSON_DC_MOTOR_STARTING,
  LESSON_DC_MOTOR_SPEED_CONTROL,
  LESSON_DC_MOTOR_BRAKING,
  LESSON_TRANSFORMER_FUNDAMENTALS,
  LESSON_TRANSFORMER_TYPES_CONSTRUCTION,
  LESSON_TRANSFORMER_EQUIVALENT_CIRCUIT,
};

