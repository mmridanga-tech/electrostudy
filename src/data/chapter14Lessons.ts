import { Lesson } from '../types';
import { LESSON_THREE_PHASE_ADVANCED_ANALYSIS } from './chapter14Lesson1';
import { LESSON_SYMMETRICAL_COMPONENTS } from './chapter14Lesson2';
import { LESSON_UNBALANCED_THREE_PHASE_LOAD_ANALYSIS } from './chapter14Lesson3';
import { LESSON_NEUTRAL_DISPLACEMENT_VOLTAGE_UNBALANCE } from './chapter14Lesson4';
import { LESSON_THREE_PHASE_POWER_MEASUREMENT } from './chapter14Lesson5';
import { LESSON_THREE_WATTMETER_METHOD } from './chapter14Lesson6';
import { LESSON_CT_PT_METERING } from './chapter14Lesson7';
import { LESSON_THREE_PHASE_POWER_QUALITY } from './chapter14Lesson8';
import { LESSON_INDUSTRIAL_METERING_CASE_STUDY } from './chapter14Lesson9';
import { LESSON_THREE_PHASE_ENGINEERING_CAPSTONE } from './chapter14Lesson10';

// Canonical named exports
export {
  LESSON_THREE_PHASE_ADVANCED_ANALYSIS,
  LESSON_SYMMETRICAL_COMPONENTS,
  LESSON_UNBALANCED_THREE_PHASE_LOAD_ANALYSIS,
  LESSON_NEUTRAL_DISPLACEMENT_VOLTAGE_UNBALANCE,
  LESSON_THREE_PHASE_POWER_MEASUREMENT,
  LESSON_THREE_WATTMETER_METHOD,
  LESSON_CT_PT_METERING,
  LESSON_THREE_PHASE_POWER_QUALITY,
  LESSON_INDUSTRIAL_METERING_CASE_STUDY,
  LESSON_THREE_PHASE_ENGINEERING_CAPSTONE
};

// Aliases for backward compatibility
export const LESSON_THREE_PHASE_POWER_ANALYSIS = LESSON_THREE_PHASE_ADVANCED_ANALYSIS;
export const LESSON_STAR_DELTA_TRANSFORMATION_DYNAMICS = LESSON_SYMMETRICAL_COMPONENTS;
export const LESSON_UNBALANCED_THREE_PHASE_LOADS = LESSON_UNBALANCED_THREE_PHASE_LOAD_ANALYSIS;
export const LESSON_NEUTRAL_DISPLACEMENT_FLOATING_NEUTRAL = LESSON_NEUTRAL_DISPLACEMENT_VOLTAGE_UNBALANCE;
export const LESSON_TWO_WATTMETER_METHOD = LESSON_THREE_PHASE_POWER_MEASUREMENT;
export const LESSON_THREE_WATTMETER_REACTIVE_MEASUREMENT = LESSON_THREE_WATTMETER_METHOD;
export const LESSON_INSTRUMENT_TRANSFORMERS_CT_PT = LESSON_CT_PT_METERING;
export const LESSON_HARMONIC_DISTORTIONS_SEQUENCE_MAPPING = LESSON_THREE_PHASE_POWER_QUALITY;
export const LESSON_ASYMMETRICAL_FAULT_ANALYSIS = LESSON_INDUSTRIAL_METERING_CASE_STUDY;
export const LESSON_INDUSTRIAL_SUBSTATION_POWER_STUDIO = LESSON_THREE_PHASE_ENGINEERING_CAPSTONE;

export const CHAPTER_14_LESSONS: Record<string, Lesson> = {
  // Part 1: Canonical Lesson ID Mappings (L1–L10)
  'lsn-ch14-three-phase-advanced-analysis': LESSON_THREE_PHASE_ADVANCED_ANALYSIS,
  'lsn-ch14-symmetrical-components': LESSON_SYMMETRICAL_COMPONENTS,
  'lsn-ch14-unbalanced-three-phase-load-analysis': LESSON_UNBALANCED_THREE_PHASE_LOAD_ANALYSIS,
  'lsn-ch14-neutral-displacement-voltage-unbalance': LESSON_NEUTRAL_DISPLACEMENT_VOLTAGE_UNBALANCE,
  'lsn-ch14-three-phase-power-measurement': LESSON_THREE_PHASE_POWER_MEASUREMENT,
  'lsn-ch14-three-wattmeter-method': LESSON_THREE_WATTMETER_METHOD,
  'lsn-ch14-ct-pt-metering': LESSON_CT_PT_METERING,
  'lsn-ch14-three-phase-power-quality': LESSON_THREE_PHASE_POWER_QUALITY,
  'lsn-ch14-industrial-metering-case-study': LESSON_INDUSTRIAL_METERING_CASE_STUDY,
  'lsn-ch14-three-phase-engineering-capstone': LESSON_THREE_PHASE_ENGINEERING_CAPSTONE,

  // Canonical Topic IDs (L1–L10)
  'tp-three-phase-advanced-analysis': LESSON_THREE_PHASE_ADVANCED_ANALYSIS,
  'tp-three-phase-sequence-components': LESSON_SYMMETRICAL_COMPONENTS,
  'tp-unbalanced-three-phase-loads': LESSON_UNBALANCED_THREE_PHASE_LOAD_ANALYSIS,
  'tp-neutral-displacement': LESSON_NEUTRAL_DISPLACEMENT_VOLTAGE_UNBALANCE,
  'tp-three-phase-power-measurement': LESSON_THREE_PHASE_POWER_MEASUREMENT,
  'tp-three-wattmeter-measurement': LESSON_THREE_WATTMETER_METHOD,
  'tp-ct-pt-industrial-metering': LESSON_CT_PT_METERING,
  'tp-power-quality-three-phase': LESSON_THREE_PHASE_POWER_QUALITY,
  'tp-industrial-three-phase-metering': LESSON_INDUSTRIAL_METERING_CASE_STUDY,
  'tp-three-phase-engineering-capstone': LESSON_THREE_PHASE_ENGINEERING_CAPSTONE,

  // Additional Topic Aliases
  'tp-symmetrical-components': LESSON_SYMMETRICAL_COMPONENTS,
  'tp-unbalanced-three-phase-load-analysis': LESSON_UNBALANCED_THREE_PHASE_LOAD_ANALYSIS,
  'tp-neutral-displacement-voltage-unbalance': LESSON_NEUTRAL_DISPLACEMENT_VOLTAGE_UNBALANCE,
  'tp-three-wattmeter-method': LESSON_THREE_WATTMETER_METHOD,
  'tp-ct-pt-metering': LESSON_CT_PT_METERING,
  'tp-industrial-metering-case-study': LESSON_INDUSTRIAL_METERING_CASE_STUDY,

  // LearningData Curriculum Topic IDs (Ch14 Topics 1–10)
  'tp-three-phase-power-analysis': LESSON_THREE_PHASE_ADVANCED_ANALYSIS,
  'tp-star-delta-transformation-dynamics': LESSON_SYMMETRICAL_COMPONENTS,
  'tp-neutral-displacement-floating-neutral': LESSON_NEUTRAL_DISPLACEMENT_VOLTAGE_UNBALANCE,
  'tp-two-wattmeter-method': LESSON_THREE_PHASE_POWER_MEASUREMENT,
  'tp-three-wattmeter-reactive-measurement': LESSON_THREE_WATTMETER_METHOD,
  'tp-instrument-transformers-ct-pt': LESSON_CT_PT_METERING,
  'tp-harmonic-distortions-sequence-mapping': LESSON_THREE_PHASE_POWER_QUALITY,
  'tp-asymmetrical-fault-analysis': LESSON_INDUSTRIAL_METERING_CASE_STUDY,
  'tp-industrial-substation-power-studio': LESSON_THREE_PHASE_ENGINEERING_CAPSTONE,

  // Previous Draft Lesson ID Mappings
  'lsn-ch14-three-phase-power-analysis': LESSON_THREE_PHASE_ADVANCED_ANALYSIS,
  'lsn-ch14-star-delta-transformation-dynamics': LESSON_SYMMETRICAL_COMPONENTS,
  'lsn-ch14-unbalanced-three-phase-loads': LESSON_UNBALANCED_THREE_PHASE_LOAD_ANALYSIS,
  'lsn-ch14-neutral-displacement-floating-neutral': LESSON_NEUTRAL_DISPLACEMENT_VOLTAGE_UNBALANCE,
  'lsn-ch14-two-wattmeter-method': LESSON_THREE_PHASE_POWER_MEASUREMENT,
  'lsn-ch14-three-wattmeter-reactive-measurement': LESSON_THREE_WATTMETER_METHOD,
  'lsn-ch14-instrument-transformers-ct-pt': LESSON_CT_PT_METERING,
  'lsn-ch14-harmonic-distortions-sequence-mapping': LESSON_THREE_PHASE_POWER_QUALITY,
  'lsn-ch14-asymmetrical-fault-analysis': LESSON_INDUSTRIAL_METERING_CASE_STUDY,
  'lsn-ch14-industrial-substation-power-studio': LESSON_THREE_PHASE_ENGINEERING_CAPSTONE,

  // Chapter 14 Lesson list array access aliases
  'ch14-three-phase-power-analysis': LESSON_THREE_PHASE_ADVANCED_ANALYSIS,
  'ch14-star-delta-transformation-dynamics': LESSON_SYMMETRICAL_COMPONENTS,
  'ch14-unbalanced-three-phase-loads': LESSON_UNBALANCED_THREE_PHASE_LOAD_ANALYSIS,
  'ch14-neutral-displacement-floating-neutral': LESSON_NEUTRAL_DISPLACEMENT_VOLTAGE_UNBALANCE,
  'ch14-two-wattmeter-method': LESSON_THREE_PHASE_POWER_MEASUREMENT,
  'ch14-three-wattmeter-reactive-measurement': LESSON_THREE_WATTMETER_METHOD,
  'ch14-instrument-transformers-ct-pt': LESSON_CT_PT_METERING,
  'ch14-harmonic-distortions-sequence-mapping': LESSON_THREE_PHASE_POWER_QUALITY,
  'ch14-asymmetrical-fault-analysis': LESSON_INDUSTRIAL_METERING_CASE_STUDY,
  'ch14-industrial-substation-power-studio': LESSON_THREE_PHASE_ENGINEERING_CAPSTONE,

  // Legacy Topic Aliases
  'tp-single-vs-three-phase': LESSON_THREE_PHASE_ADVANCED_ANALYSIS,
  'tp-three-phase-supply': LESSON_THREE_PHASE_ADVANCED_ANALYSIS,
  'tp-star-connection': LESSON_SYMMETRICAL_COMPONENTS,
  'tp-delta-connection': LESSON_SYMMETRICAL_COMPONENTS,
  'tp-star-delta-rel': LESSON_SYMMETRICAL_COMPONENTS,
  'tp-line-voltage': LESSON_THREE_PHASE_ADVANCED_ANALYSIS,
  'tp-phase-voltage': LESSON_THREE_PHASE_ADVANCED_ANALYSIS,
  'tp-line-current': LESSON_SYMMETRICAL_COMPONENTS,
  'tp-phase-current': LESSON_SYMMETRICAL_COMPONENTS,
  'tp-three-phase-power': LESSON_THREE_PHASE_POWER_MEASUREMENT,
  'tp-balanced-load': LESSON_UNBALANCED_THREE_PHASE_LOAD_ANALYSIS
};

export const CHAPTER_14_LESSON_LIST: Lesson[] = [
  LESSON_THREE_PHASE_ADVANCED_ANALYSIS,
  LESSON_SYMMETRICAL_COMPONENTS,
  LESSON_UNBALANCED_THREE_PHASE_LOAD_ANALYSIS,
  LESSON_NEUTRAL_DISPLACEMENT_VOLTAGE_UNBALANCE,
  LESSON_THREE_PHASE_POWER_MEASUREMENT,
  LESSON_THREE_WATTMETER_METHOD,
  LESSON_CT_PT_METERING,
  LESSON_THREE_PHASE_POWER_QUALITY,
  LESSON_INDUSTRIAL_METERING_CASE_STUDY,
  LESSON_THREE_PHASE_ENGINEERING_CAPSTONE
];

