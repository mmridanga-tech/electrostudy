import { Lesson } from '../types';
import { LESSON_PF_ENGINEERING_FUNDAMENTALS as LESSON_FUNDAMENTALS_POWER_FACTOR } from './chapter13Lesson1';
import { LESSON_PF_CORRECTION_METHODS as LESSON_PRACTICAL_PFC_METHODS } from './chapter13Lesson2';
import { LESSON_CAPACITOR_BANK_SIZING } from './chapter13Lesson3';
import { LESSON_APFC_PANELS_AUTOMATION } from './chapter13Lesson4';
import { LESSON_REACTIVE_POWER_FLOW_VOLTAGE_STABILITY as LESSON_REACTIVE_POWER_FLOW } from './chapter13Lesson5';
import { LESSON_HARMONICS_RESONANCE_DETUNING } from './chapter13Lesson6';
import { LESSON_INDUSTRIAL_PF_CASE_STUDY } from './chapter13Lesson7';
import { LESSON_DEMAND_TARIFF_PF_ECONOMICS } from './chapter13Lesson8';
import { LESSON_PFC_COMMISSIONING_TROUBLESHOOTING } from './chapter13Lesson9';
import { LESSON_PFC_ENGINEERING_CAPSTONE } from './chapter13Lesson10';

export const CHAPTER_13_LESSONS: Record<string, Lesson> = {
  // Primary Canonical Topic ID mappings (Chapter 13 Lessons 1–10)
  'tp-power-factor-intro': LESSON_FUNDAMENTALS_POWER_FACTOR,
  'tp-power-factor-correction': LESSON_PRACTICAL_PFC_METHODS,
  'tp-capacitor-bank-sizing': LESSON_CAPACITOR_BANK_SIZING,
  'tp-automatic-pfc': LESSON_APFC_PANELS_AUTOMATION,
  'tp-reactive-power-flow': LESSON_REACTIVE_POWER_FLOW,
  'tp-harmonic-pfc-interaction': LESSON_HARMONICS_RESONANCE_DETUNING,
  'tp-power-quality-compensation': LESSON_INDUSTRIAL_PF_CASE_STUDY,
  'tp-demand-tariff-pf-economics': LESSON_DEMAND_TARIFF_PF_ECONOMICS,
  'tp-pfc-commissioning-troubleshooting': LESSON_PFC_COMMISSIONING_TROUBLESHOOTING,
  'tp-pfc-engineering-capstone': LESSON_PFC_ENGINEERING_CAPSTONE,

  // Primary Canonical Lesson ID mappings (Chapter 13 Lessons 1–10)
  'lsn-ch13-pf-engineering-fundamentals': LESSON_FUNDAMENTALS_POWER_FACTOR,
  'lsn-ch13-pf-correction-methods': LESSON_PRACTICAL_PFC_METHODS,
  'lsn-ch13-capacitor-bank-sizing': LESSON_CAPACITOR_BANK_SIZING,
  'lsn-ch13-apfc-panel-design': LESSON_APFC_PANELS_AUTOMATION,
  'lsn-ch13-reactive-power-flow-voltage': LESSON_REACTIVE_POWER_FLOW,
  'lsn-ch13-harmonics-capacitor-resonance': LESSON_HARMONICS_RESONANCE_DETUNING,
  'lsn-ch13-power-quality-compensation': LESSON_INDUSTRIAL_PF_CASE_STUDY,
  'lsn-ch13-pf-economics-demand-tariff': LESSON_DEMAND_TARIFF_PF_ECONOMICS,
  'lsn-ch13-pfc-commissioning-troubleshooting': LESSON_PFC_COMMISSIONING_TROUBLESHOOTING,
  'lsn-ch13-pfc-engineering-capstone': LESSON_PFC_ENGINEERING_CAPSTONE,

  // Canonical Chapter 13 lesson list array access aliases
  'ch13-pf-economics-demand-tariff': LESSON_DEMAND_TARIFF_PF_ECONOMICS,
  'ch13-pfc-commissioning-troubleshooting': LESSON_PFC_COMMISSIONING_TROUBLESHOOTING,
  'ch13-pfc-engineering-capstone': LESSON_PFC_ENGINEERING_CAPSTONE,

  // Legacy Topic Aliases (for backward compatibility)
  'tp-pf-definition': LESSON_FUNDAMENTALS_POWER_FACTOR,
  'tp-lagging-pf': LESSON_PRACTICAL_PFC_METHODS,
  'tp-leading-pf': LESSON_CAPACITOR_BANK_SIZING,
  'tp-unity-pf': LESSON_APFC_PANELS_AUTOMATION,
  'tp-active-power': LESSON_REACTIVE_POWER_FLOW,
  'tp-reactive-power': LESSON_HARMONICS_RESONANCE_DETUNING,
  'tp-apparent-power': LESSON_INDUSTRIAL_PF_CASE_STUDY,
  'tp-power-triangle': LESSON_FUNDAMENTALS_POWER_FACTOR,
  'tp-pf-calculation': LESSON_FUNDAMENTALS_POWER_FACTOR,
  'tp-pf-improvement-intro': LESSON_PRACTICAL_PFC_METHODS,
  'tp-apfc-control': LESSON_APFC_PANELS_AUTOMATION,
  'tp-apfc-panel-design': LESSON_APFC_PANELS_AUTOMATION,
  'tp-reactive-power-management': LESSON_REACTIVE_POWER_FLOW,
  'tp-reactive-power-flow-voltage': LESSON_REACTIVE_POWER_FLOW,
  'tp-harmonic-resonance': LESSON_HARMONICS_RESONANCE_DETUNING,
  'tp-harmonics-detuning': LESSON_HARMONICS_RESONANCE_DETUNING,
  'tp-pf-economics': LESSON_INDUSTRIAL_PF_CASE_STUDY,
  'tp-industrial-case-studies': LESSON_INDUSTRIAL_PF_CASE_STUDY,

  // Legacy Lesson ID Aliases (for backward compatibility)
  'lsn-ch13-fundamentals-power-factor': LESSON_FUNDAMENTALS_POWER_FACTOR,
  'ch13-pf-engineering-fundamentals': LESSON_FUNDAMENTALS_POWER_FACTOR,
  'lsn-ch13-practical-pfc-methods': LESSON_PRACTICAL_PFC_METHODS,
  'ch13-pf-correction-methods': LESSON_PRACTICAL_PFC_METHODS,
  'ch13-capacitor-bank-sizing': LESSON_CAPACITOR_BANK_SIZING,
  'lsn-ch13-apfc-panels-automation': LESSON_APFC_PANELS_AUTOMATION,
  'ch13-apfc-panel-design': LESSON_APFC_PANELS_AUTOMATION,
  'lsn-ch13-reactive-power-flow': LESSON_REACTIVE_POWER_FLOW,
  'lsn-ch13-reactive-power-flow-voltage-stability': LESSON_REACTIVE_POWER_FLOW,
  'ch13-reactive-power-flow-voltage': LESSON_REACTIVE_POWER_FLOW,
  'lsn-ch13-harmonics-resonance-detuning': LESSON_HARMONICS_RESONANCE_DETUNING,
  'ch13-harmonics-capacitor-resonance': LESSON_HARMONICS_RESONANCE_DETUNING,
  'lsn-ch13-industrial-pf-case-study': LESSON_INDUSTRIAL_PF_CASE_STUDY,
  'ch13-power-quality-compensation': LESSON_INDUSTRIAL_PF_CASE_STUDY
};
