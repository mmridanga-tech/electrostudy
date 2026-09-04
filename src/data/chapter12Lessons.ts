import { Lesson } from '../types';
import { LESSON_AC_THEVENIN_NORTON } from './chapter12Lesson1';
import { LESSON_AC_SUPERPOSITION_MAXPOWER } from './chapter12Lesson2';
import { LESSON_COUPLED_CIRCUITS_DOT } from './chapter12Lesson3';
import { LESSON_LINEAR_TRANSFORMERS_REFLECTED } from './chapter12Lesson4';
import { LESSON_IDEAL_TRANSFORMERS_PUZ } from './chapter12Lesson5';
import { LESSON_PASSIVE_FILTERS_BODE } from './chapter12Lesson6';
import { LESSON_TWO_PORT_PARAMETERS_AC } from './chapter12Lesson7';

export const CHAPTER_12_LESSONS: Record<string, Lesson> = {
  // Canonical Topic ID mappings (Chapter 12 Lessons 1–7)
  'tp-pure-resistive': LESSON_AC_THEVENIN_NORTON,
  'tp-pure-inductive': LESSON_AC_SUPERPOSITION_MAXPOWER,
  'tp-pure-capacitive': LESSON_COUPLED_CIRCUITS_DOT,
  'tp-rl-circuit': LESSON_LINEAR_TRANSFORMERS_REFLECTED,
  'tp-rc-circuit': LESSON_IDEAL_TRANSFORMERS_PUZ,
  'tp-rlc-circuit': LESSON_PASSIVE_FILTERS_BODE,
  'tp-admittance-intro': LESSON_TWO_PORT_PARAMETERS_AC,

  // Canonical Lesson ID mappings
  'lsn-ch12-ac-thevenin-norton': LESSON_AC_THEVENIN_NORTON,
  'lsn-ch12-ac-superposition-max-power': LESSON_AC_SUPERPOSITION_MAXPOWER,
  'lsn-ch12-coupled-circuits-dot-convention': LESSON_COUPLED_CIRCUITS_DOT,
  'lsn-ch12-reflected-impedance-t-models': LESSON_LINEAR_TRANSFORMERS_REFLECTED,
  'lsn-ch12-passive-filters-design': LESSON_IDEAL_TRANSFORMERS_PUZ,
  'lsn-ch12-bode-plots-frequency-response': LESSON_PASSIVE_FILTERS_BODE,
  'lsn-ch12-two-port-network-parameters': LESSON_TWO_PORT_PARAMETERS_AC,

  // Backward-compatibility legacy topic aliases
  'tp-pure-resis': LESSON_AC_THEVENIN_NORTON,
  'tp-pure-induct': LESSON_AC_SUPERPOSITION_MAXPOWER,
  'tp-rl-series': LESSON_LINEAR_TRANSFORMERS_REFLECTED,
  'tp-rc-series': LESSON_IDEAL_TRANSFORMERS_PUZ,
  'tp-rlc-series': LESSON_PASSIVE_FILTERS_BODE,
  'tp-rlc-parallel': LESSON_TWO_PORT_PARAMETERS_AC,

  // Backward-compatibility legacy lesson aliases
  'lsn-ch12-ac-superposition-maxpower': LESSON_AC_SUPERPOSITION_MAXPOWER,
  'lsn-ch12-coupled-circuits-dot': LESSON_COUPLED_CIRCUITS_DOT,
  'lsn-ch12-linear-transformers-reflected': LESSON_LINEAR_TRANSFORMERS_REFLECTED,
  'lsn-ch12-ideal-transformers-puz': LESSON_IDEAL_TRANSFORMERS_PUZ,
  'lsn-ch12-passive-filters-bode': LESSON_PASSIVE_FILTERS_BODE,
  'lsn-ch12-two-port-parameters-ac': LESSON_TWO_PORT_PARAMETERS_AC
};
