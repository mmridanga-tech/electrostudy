import { Lesson } from '../types';
import { LESSON_AC_THEVENIN_NORTON } from './chapter12Lesson1';
import { LESSON_AC_SUPERPOSITION_MAXPOWER } from './chapter12Lesson2';
import { LESSON_COUPLED_CIRCUITS_DOT } from './chapter12Lesson3';
import { LESSON_LINEAR_TRANSFORMERS_REFLECTED } from './chapter12Lesson4';
import { LESSON_PASSIVE_FILTERS_DESIGN } from './chapter12Lesson5';
import { LESSON_BODE_PLOTS_FREQUENCY_RESPONSE } from './chapter12Lesson6';
import { LESSON_TWO_PORT_PARAMETERS_AC } from './chapter12Lesson7';
import { LESSON_NON_SINUSOIDAL_HARMONICS } from './chapter12Lesson8';
import { LESSON_THD_DISTORTION_POWER } from './chapter12Lesson9';
import { LESSON_AC_LOCUS_DIAGRAMS } from './chapter12Lesson10';

export const CHAPTER_12_LESSONS: Record<string, Lesson> = {
  // Canonical Topic ID mappings (Chapter 12 Lessons 1–10)
  'tp-pure-resistive': LESSON_AC_THEVENIN_NORTON,
  'tp-pure-inductive': LESSON_AC_SUPERPOSITION_MAXPOWER,
  'tp-pure-capacitive': LESSON_COUPLED_CIRCUITS_DOT,
  'tp-rl-circuit': LESSON_LINEAR_TRANSFORMERS_REFLECTED,
  'tp-rc-circuit': LESSON_PASSIVE_FILTERS_DESIGN,
  'tp-rlc-circuit': LESSON_BODE_PLOTS_FREQUENCY_RESPONSE,
  'tp-admittance-intro': LESSON_TWO_PORT_PARAMETERS_AC,
  'tp-reactance': LESSON_NON_SINUSOIDAL_HARMONICS,
  'tp-phasor-concept': LESSON_THD_DISTORTION_POWER,
  'tp-power-ac-circuit': LESSON_AC_LOCUS_DIAGRAMS,

  // Canonical Lesson ID mappings
  'lsn-ch12-ac-thevenin-norton': LESSON_AC_THEVENIN_NORTON,
  'lsn-ch12-ac-superposition-max-power': LESSON_AC_SUPERPOSITION_MAXPOWER,
  'lsn-ch12-coupled-circuits-dot-convention': LESSON_COUPLED_CIRCUITS_DOT,
  'lsn-ch12-reflected-impedance-t-models': LESSON_LINEAR_TRANSFORMERS_REFLECTED,
  'lsn-ch12-passive-filters-design': LESSON_PASSIVE_FILTERS_DESIGN,
  'lsn-ch12-bode-plots-frequency-response': LESSON_BODE_PLOTS_FREQUENCY_RESPONSE,
  'lsn-ch12-two-port-network-parameters': LESSON_TWO_PORT_PARAMETERS_AC,
  'lsn-ch12-non-sinusoidal-harmonics': LESSON_NON_SINUSOIDAL_HARMONICS,
  'lsn-ch12-thd-distortion-power': LESSON_THD_DISTORTION_POWER,
  'lsn-ch12-ac-locus-diagrams': LESSON_AC_LOCUS_DIAGRAMS,

  // Backward-compatibility legacy topic aliases
  'tp-pure-resis': LESSON_AC_THEVENIN_NORTON,
  'tp-pure-induct': LESSON_AC_SUPERPOSITION_MAXPOWER,
  'tp-rl-series': LESSON_LINEAR_TRANSFORMERS_REFLECTED,
  'tp-rc-series': LESSON_PASSIVE_FILTERS_DESIGN,
  'tp-rlc-series': LESSON_BODE_PLOTS_FREQUENCY_RESPONSE,
  'tp-rlc-parallel': LESSON_TWO_PORT_PARAMETERS_AC,
  'tp-non-sinusoidal-harmonics': LESSON_NON_SINUSOIDAL_HARMONICS,
  'tp-thd-distortion-power': LESSON_THD_DISTORTION_POWER,
  'tp-ac-locus-diagrams': LESSON_AC_LOCUS_DIAGRAMS,
  'tp-harmonics': LESSON_NON_SINUSOIDAL_HARMONICS,
  'tp-locus-diagrams': LESSON_AC_LOCUS_DIAGRAMS,

  // Backward-compatibility legacy lesson aliases
  'lsn-ch12-ac-superposition-maxpower': LESSON_AC_SUPERPOSITION_MAXPOWER,
  'lsn-ch12-coupled-circuits-dot': LESSON_COUPLED_CIRCUITS_DOT,
  'lsn-ch12-linear-transformers-reflected': LESSON_LINEAR_TRANSFORMERS_REFLECTED,
  'lsn-ch12-ideal-transformers-puz': LESSON_PASSIVE_FILTERS_DESIGN,
  'lsn-ch12-passive-filters-bode': LESSON_BODE_PLOTS_FREQUENCY_RESPONSE,
  'lsn-ch12-two-port-parameters-ac': LESSON_TWO_PORT_PARAMETERS_AC
};
