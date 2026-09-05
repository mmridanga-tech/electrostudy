import { Lesson } from '../types';
import { LESSON_PER_UNIT_SYSTEM } from './chapter16Lesson1';
import { LESSON_SINGLE_LINE_POWER_SYSTEM } from './chapter16Lesson2';
import { LESSON_TRANSMISSION_PARAMETERS } from './chapter16Lesson3';
import { LESSON_TRANSMISSION_MODELS } from './chapter16Lesson4';
import { LESSON_TRANSMISSION_PERFORMANCE } from './chapter16Lesson5';
import { LESSON_YBUS_FORMULATION } from './chapter16Lesson6';
import { LESSON_POWER_FLOW_METHODS } from './chapter16Lesson7';
import { LESSON_SYMMETRICAL_FAULT } from './chapter16Lesson8';
import { LESSON_UNSYMMETRICAL_FAULTS } from './chapter16Lesson9';
import { LESSON_POWER_SYSTEM_STABILITY } from './chapter16Lesson10';

export const CHAPTER_16_LESSONS: Record<string, Lesson> = {
  // Canonical Topic ID mappings
  'tp-ch16-per-unit-system': LESSON_PER_UNIT_SYSTEM,
  'tp-ch16-single-line-diagram-pu-impedance': LESSON_SINGLE_LINE_POWER_SYSTEM,
  'tp-ch16-single-line-diagram': LESSON_SINGLE_LINE_POWER_SYSTEM,
  'tp-ch16-transmission-line-parameters': LESSON_TRANSMISSION_PARAMETERS,
  'tp-ch16-line-parameters': LESSON_TRANSMISSION_PARAMETERS,
  'tp-ch16-transmission-line-models': LESSON_TRANSMISSION_MODELS,
  'tp-ch16-line-models': LESSON_TRANSMISSION_MODELS,
  'tp-ch16-transmission-line-performance': LESSON_TRANSMISSION_PERFORMANCE,
  'tp-ch16-line-performance': LESSON_TRANSMISSION_PERFORMANCE,
  'tp-ch16-ybus-formulation': LESSON_YBUS_FORMULATION,
  'tp-ch16-bus-admittance-matrix': LESSON_YBUS_FORMULATION,
  'tp-ch16-power-flow-methods': LESSON_POWER_FLOW_METHODS,
  'tp-ch16-symmetrical-fault-analysis': LESSON_SYMMETRICAL_FAULT,
  'tp-ch16-unsymmetrical-faults': LESSON_UNSYMMETRICAL_FAULTS,
  'tp-ch16-power-system-stability': LESSON_POWER_SYSTEM_STABILITY,

  // Canonical Lesson ID mappings
  'lsn-ch16-per-unit-system': LESSON_PER_UNIT_SYSTEM,
  'lsn-ch16-single-line-diagram-pu-impedance': LESSON_SINGLE_LINE_POWER_SYSTEM,
  'lsn-ch16-single-line-diagram': LESSON_SINGLE_LINE_POWER_SYSTEM,
  'lsn-ch16-transmission-line-parameters': LESSON_TRANSMISSION_PARAMETERS,
  'lsn-ch16-line-parameters': LESSON_TRANSMISSION_PARAMETERS,
  'lsn-ch16-transmission-line-models': LESSON_TRANSMISSION_MODELS,
  'lsn-ch16-line-models': LESSON_TRANSMISSION_MODELS,
  'lsn-ch16-transmission-line-performance': LESSON_TRANSMISSION_PERFORMANCE,
  'lsn-ch16-line-performance': LESSON_TRANSMISSION_PERFORMANCE,
  'lsn-ch16-ybus-formulation': LESSON_YBUS_FORMULATION,
  'lsn-ch16-bus-admittance-matrix': LESSON_YBUS_FORMULATION,
  'lsn-ch16-power-flow-methods': LESSON_POWER_FLOW_METHODS,
  'lsn-ch16-symmetrical-fault-analysis': LESSON_SYMMETRICAL_FAULT,
  'lsn-ch16-unsymmetrical-faults': LESSON_UNSYMMETRICAL_FAULTS,
  'lsn-ch16-power-system-stability': LESSON_POWER_SYSTEM_STABILITY,

  // Short topic / forward aliases
  'tp-per-unit-system': LESSON_PER_UNIT_SYSTEM,
  'tp-single-line-diagram': LESSON_SINGLE_LINE_POWER_SYSTEM,
  'tp-line-parameters': LESSON_TRANSMISSION_PARAMETERS,
  'tp-line-models': LESSON_TRANSMISSION_MODELS,
  'tp-line-performance': LESSON_TRANSMISSION_PERFORMANCE,
  'tp-bus-admittance-matrix': LESSON_YBUS_FORMULATION,
  'tp-ybus-formulation': LESSON_YBUS_FORMULATION,
  'tp-power-flow-methods': LESSON_POWER_FLOW_METHODS,
  'tp-symmetrical-fault-analysis': LESSON_SYMMETRICAL_FAULT,
  'tp-unsymmetrical-faults': LESSON_UNSYMMETRICAL_FAULTS,
  'tp-power-system-stability': LESSON_POWER_SYSTEM_STABILITY,

  'ch16-per-unit-system': LESSON_PER_UNIT_SYSTEM,
  'ch16-single-line-diagram': LESSON_SINGLE_LINE_POWER_SYSTEM,
  'ch16-single-line-diagram-pu-impedance': LESSON_SINGLE_LINE_POWER_SYSTEM,
  'ch16-line-parameters': LESSON_TRANSMISSION_PARAMETERS,
  'ch16-transmission-line-parameters': LESSON_TRANSMISSION_PARAMETERS,
  'ch16-line-models': LESSON_TRANSMISSION_MODELS,
  'ch16-transmission-line-models': LESSON_TRANSMISSION_MODELS,
  'ch16-line-performance': LESSON_TRANSMISSION_PERFORMANCE,
  'ch16-transmission-line-performance': LESSON_TRANSMISSION_PERFORMANCE,
  'ch16-bus-admittance-matrix': LESSON_YBUS_FORMULATION,
  'ch16-ybus-formulation': LESSON_YBUS_FORMULATION,
  'ch16-power-flow-methods': LESSON_POWER_FLOW_METHODS,
  'ch16-symmetrical-fault-analysis': LESSON_SYMMETRICAL_FAULT,
  'ch16-unsymmetrical-faults': LESSON_UNSYMMETRICAL_FAULTS,
  'ch16-power-system-stability': LESSON_POWER_SYSTEM_STABILITY,
};

export const CHAPTER_16_LESSON_LIST: Lesson[] = [
  LESSON_PER_UNIT_SYSTEM,
  LESSON_SINGLE_LINE_POWER_SYSTEM,
  LESSON_TRANSMISSION_PARAMETERS,
  LESSON_TRANSMISSION_MODELS,
  LESSON_TRANSMISSION_PERFORMANCE,
  LESSON_YBUS_FORMULATION,
  LESSON_POWER_FLOW_METHODS,
  LESSON_SYMMETRICAL_FAULT,
  LESSON_UNSYMMETRICAL_FAULTS,
  LESSON_POWER_SYSTEM_STABILITY,
];

export function getChapter16Lesson(topicOrLessonId: string): Lesson | undefined {
  return CHAPTER_16_LESSONS[topicOrLessonId];
}

export {
  LESSON_PER_UNIT_SYSTEM,
  LESSON_SINGLE_LINE_POWER_SYSTEM,
  LESSON_TRANSMISSION_PARAMETERS,
  LESSON_TRANSMISSION_MODELS,
  LESSON_TRANSMISSION_PERFORMANCE,
  LESSON_YBUS_FORMULATION,
  LESSON_POWER_FLOW_METHODS,
  LESSON_SYMMETRICAL_FAULT,
  LESSON_UNSYMMETRICAL_FAULTS,
  LESSON_POWER_SYSTEM_STABILITY,
};
