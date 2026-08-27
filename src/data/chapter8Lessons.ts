import { Lesson } from '../types';
import { LESSON_MAGNETIC_FIELD_LORENTZ_FORCE } from './chapter8Lesson1';
import { LESSON_BIOT_SAVART_AMPERES_LAW } from './chapter8Lesson2';
import { LESSON_FARADAYS_LAW_LENZ_LAW } from './chapter8Lesson3';
import { LESSON_SELF_INDUCTANCE_DERIVATION } from './chapter8Lesson4';
import { LESSON_MUTUAL_INDUCTANCE_COUPLING } from './chapter8Lesson5';
import { LESSON_MAGNETIC_MATERIALS_PERMEABILITY } from './chapter8Lesson6';
import { LESSON_HYSTERESIS_BH_CURVE } from './chapter8Lesson7';
import { LESSON_EDDY_CURRENTS_SKIN_EFFECT } from './chapter8Lesson8';
import { LESSON_INDUCTORS_IN_SERIES_PARALLEL } from './chapter8Lesson9';
import { LESSON_ENERGY_STORED_MAGNETIC_FIELD } from './chapter8Lesson10';
import { LESSON_RL_TRANSIENT_GROWTH_DECAY } from './chapter8Lesson11';
import { LESSON_INDUCTIVE_KICK_FLYBACK } from './chapter8Lesson12';
import { LESSON_INDUCTORS_IN_AC_CIRCUITS } from './chapter8Lesson13';
import { LESSON_QUALITY_FACTOR_CHOKES } from './chapter8Lesson14';
import { LESSON_TYPES_OF_INDUCTORS } from './chapter8Lesson15';
import { LESSON_INDUCTOR_COLOR_NUMERICAL_CODES } from './chapter8Lesson16';
import { LESSON_SWITCHED_MODE_POWER_INDUCTORS } from './chapter8Lesson17';
import { LESSON_SOLENOIDS_RELAYS_ELECTROMAGNETS } from './chapter8Lesson18';
import { LESSON_WIRELESS_POWER_INDUCTION_HEATING } from './chapter8Lesson19';
import { LESSON_INDUCTOR_TESTING_DIAGNOSTICS } from './chapter8Lesson20';

export const CHAPTER_8_LESSONS: Record<string, Lesson> = {
  'ch8-magnetic-fields-lorentz-force': LESSON_MAGNETIC_FIELD_LORENTZ_FORCE,
  'ch8-magnetic-field-lorentz-force': LESSON_MAGNETIC_FIELD_LORENTZ_FORCE,
  'ch8-biot-savart-ampere-law': LESSON_BIOT_SAVART_AMPERES_LAW,
  'ch8-biot-savart-amperes-law': LESSON_BIOT_SAVART_AMPERES_LAW,
  'ch8-faradays-lenzs-law': LESSON_FARADAYS_LAW_LENZ_LAW,
  'ch8-faradays-law-lenz-law': LESSON_FARADAYS_LAW_LENZ_LAW,
  'ch8-self-inductance-solenoid-toroid': LESSON_SELF_INDUCTANCE_DERIVATION,
  'ch8-self-inductance-derivation': LESSON_SELF_INDUCTANCE_DERIVATION,
  'ch8-mutual-inductance-dot-convention': LESSON_MUTUAL_INDUCTANCE_COUPLING,
  'ch8-mutual-inductance-coupling': LESSON_MUTUAL_INDUCTANCE_COUPLING,
  'ch8-magnetic-materials-permeability': LESSON_MAGNETIC_MATERIALS_PERMEABILITY,
  'ch8-hysteresis-b-h-curve': LESSON_HYSTERESIS_BH_CURVE,
  'ch8-hysteresis-bh-curve': LESSON_HYSTERESIS_BH_CURVE,
  'ch8-eddy-currents-skin-effect': LESSON_EDDY_CURRENTS_SKIN_EFFECT,
  'ch8-inductors-in-series-parallel': LESSON_INDUCTORS_IN_SERIES_PARALLEL,
  'ch8-energy-stored-magnetic-field': LESSON_ENERGY_STORED_MAGNETIC_FIELD,
  'ch8-rl-transient-growth-decay': LESSON_RL_TRANSIENT_GROWTH_DECAY,
  'ch8-inductive-kick-flyback': LESSON_INDUCTIVE_KICK_FLYBACK,
  'ch8-inductors-in-ac-circuits': LESSON_INDUCTORS_IN_AC_CIRCUITS,
  'ch8-quality-factor-chokes': LESSON_QUALITY_FACTOR_CHOKES,
  'ch8-types-of-inductors': LESSON_TYPES_OF_INDUCTORS,
  'ch8-inductor-color-numerical-codes': LESSON_INDUCTOR_COLOR_NUMERICAL_CODES,
  'ch8-switched-mode-power-inductors': LESSON_SWITCHED_MODE_POWER_INDUCTORS,
  'ch8-solenoids-relays-electromagnets': LESSON_SOLENOIDS_RELAYS_ELECTROMAGNETS,
  'ch8-wireless-power-induction-heating': LESSON_WIRELESS_POWER_INDUCTION_HEATING,
  'ch8-inductor-testing-diagnostics': LESSON_INDUCTOR_TESTING_DIAGNOSTICS,
};

export {
  LESSON_MAGNETIC_FIELD_LORENTZ_FORCE,
  LESSON_BIOT_SAVART_AMPERES_LAW,
  LESSON_FARADAYS_LAW_LENZ_LAW,
  LESSON_SELF_INDUCTANCE_DERIVATION,
  LESSON_MUTUAL_INDUCTANCE_COUPLING,
  LESSON_MAGNETIC_MATERIALS_PERMEABILITY,
  LESSON_HYSTERESIS_BH_CURVE,
  LESSON_EDDY_CURRENTS_SKIN_EFFECT,
  LESSON_INDUCTORS_IN_SERIES_PARALLEL,
  LESSON_ENERGY_STORED_MAGNETIC_FIELD,
  LESSON_RL_TRANSIENT_GROWTH_DECAY,
  LESSON_INDUCTIVE_KICK_FLYBACK,
  LESSON_INDUCTORS_IN_AC_CIRCUITS,
  LESSON_QUALITY_FACTOR_CHOKES,
  LESSON_TYPES_OF_INDUCTORS,
  LESSON_INDUCTOR_COLOR_NUMERICAL_CODES,
  LESSON_SWITCHED_MODE_POWER_INDUCTORS,
  LESSON_SOLENOIDS_RELAYS_ELECTROMAGNETS,
  LESSON_WIRELESS_POWER_INDUCTION_HEATING,
  LESSON_INDUCTOR_TESTING_DIAGNOSTICS,
};
