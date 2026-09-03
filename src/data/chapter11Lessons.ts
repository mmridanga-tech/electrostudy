import { Lesson } from '../types';
import { LESSON_EM_FIELD_FUNDAMENTALS } from './chapter11Lesson1';
import { LESSON_GAUSS_LAW } from './chapter11Lesson2';
import { LESSON_AMPERE_CIRCUITAL_LAW } from './chapter11Lesson3';
import { LESSON_FARADAY_LAW_FIELD } from './chapter11Lesson4';
import { LESSON_DISPLACEMENT_CURRENT } from './chapter11Lesson5';
import { LESSON_MAXWELLS_EQUATIONS } from './chapter11Lesson6';
import { LESSON_EM_WAVE_PROPAGATION } from './chapter11Lesson7';
import { LESSON_WAVE_POLARIZATION } from './chapter11Lesson8';
import { LESSON_NORMAL_INCIDENCE_REFLECTION as LESSON_REFLECTION_REFRACTION_NORMAL } from './chapter11Lesson9';
import { LESSON_OBLIQUE_INCIDENCE_SNELL_BREWSTER } from './chapter11Lesson10';
import { LESSON_SKIN_DEPTH_CONDUCTORS_SHIELDING as LESSON_SKIN_DEPTH_SHIELDING } from './chapter11Lesson11';
import { LESSON_WAVEGUIDES_CUTOFF_DISPERSION } from './chapter11Lesson12';
import { LESSON_EM_SPECTRUM_RADIO_TO_GAMMA } from './chapter11Lesson13';
import { LESSON_ANTENNA_FUNDAMENTALS_LINK_BUDGET } from './chapter11Lesson14';

export const CHAPTER_11_LESSONS: Record<string, Lesson> = {
  // Topic ID mappings
  'ch11-field-fundamentals': LESSON_EM_FIELD_FUNDAMENTALS,
  'ch11-gauss-law': LESSON_GAUSS_LAW,
  'ch11-ampere-law': LESSON_AMPERE_CIRCUITAL_LAW,
  'ch11-faraday-law': LESSON_FARADAY_LAW_FIELD,
  'ch11-displacement-current': LESSON_DISPLACEMENT_CURRENT,
  'ch11-maxwell-equations': LESSON_MAXWELLS_EQUATIONS,
  'ch11-wave-propagation-plane-waves': LESSON_EM_WAVE_PROPAGATION,
  'ch11-wave-polarization': LESSON_WAVE_POLARIZATION,
  'ch11-reflection-refraction-normal': LESSON_REFLECTION_REFRACTION_NORMAL,
  'ch11-oblique-incidence-snell-brewster': LESSON_OBLIQUE_INCIDENCE_SNELL_BREWSTER,
  'ch11-skin-depth-shielding': LESSON_SKIN_DEPTH_SHIELDING,
  'ch11-waveguides-cutoff-dispersion': LESSON_WAVEGUIDES_CUTOFF_DISPERSION,
  'ch11-em-spectrum-radio-to-gamma': LESSON_EM_SPECTRUM_RADIO_TO_GAMMA,
  'ch11-antenna-fundamentals-link-budget': LESSON_ANTENNA_FUNDAMENTALS_LINK_BUDGET,

  // Lesson ID mappings
  'lsn-ch11-field-fundamentals': LESSON_EM_FIELD_FUNDAMENTALS,
  'lsn-ch11-gauss-law': LESSON_GAUSS_LAW,
  'lsn-ch11-ampere-law': LESSON_AMPERE_CIRCUITAL_LAW,
  'lsn-ch11-faraday-law': LESSON_FARADAY_LAW_FIELD,
  'lsn-ch11-displacement-current': LESSON_DISPLACEMENT_CURRENT,
  'lsn-ch11-maxwell-equations': LESSON_MAXWELLS_EQUATIONS,
  'lsn-ch11-wave-propagation-plane-waves': LESSON_EM_WAVE_PROPAGATION,
  'lsn-ch11-wave-polarization': LESSON_WAVE_POLARIZATION,
  'lsn-ch11-reflection-refraction-normal': LESSON_REFLECTION_REFRACTION_NORMAL,
  'lsn-ch11-oblique-incidence-snell-brewster': LESSON_OBLIQUE_INCIDENCE_SNELL_BREWSTER,
  'lsn-ch11-skin-depth-shielding': LESSON_SKIN_DEPTH_SHIELDING,
  'lsn-ch11-waveguides-cutoff-dispersion': LESSON_WAVEGUIDES_CUTOFF_DISPERSION,
  'lsn-ch11-em-spectrum-radio-to-gamma': LESSON_EM_SPECTRUM_RADIO_TO_GAMMA,
  'lsn-ch11-antenna-fundamentals-link-budget': LESSON_ANTENNA_FUNDAMENTALS_LINK_BUDGET,

  // Alternative / legacy / backward-compatibility aliases
  'tp-ch11-field-fundamentals': LESSON_EM_FIELD_FUNDAMENTALS,
  'tp-ch11-gauss-law': LESSON_GAUSS_LAW,
  'tp-ch11-ampere-law': LESSON_AMPERE_CIRCUITAL_LAW,
  'tp-ch11-faraday-law': LESSON_FARADAY_LAW_FIELD,
  'tp-ch11-displacement-current': LESSON_DISPLACEMENT_CURRENT,
  'tp-ch11-maxwell-equations': LESSON_MAXWELLS_EQUATIONS,
  'tp-ch11-wave-propagation-plane-waves': LESSON_EM_WAVE_PROPAGATION,
  'tp-ch11-wave-polarization': LESSON_WAVE_POLARIZATION,
  'tp-ch11-reflection-refraction-normal': LESSON_REFLECTION_REFRACTION_NORMAL,
  'tp-ch11-oblique-incidence-snell-brewster': LESSON_OBLIQUE_INCIDENCE_SNELL_BREWSTER,
  'tp-ch11-skin-depth-shielding': LESSON_SKIN_DEPTH_SHIELDING,
  'tp-ch11-waveguides-cutoff-dispersion': LESSON_WAVEGUIDES_CUTOFF_DISPERSION,
  'tp-ch11-em-spectrum-radio-to-gamma': LESSON_EM_SPECTRUM_RADIO_TO_GAMMA,
  'tp-ch11-antenna-fundamentals-link-budget': LESSON_ANTENNA_FUNDAMENTALS_LINK_BUDGET,

  'tp-field-fundamentals': LESSON_EM_FIELD_FUNDAMENTALS,
  'tp-gauss-law': LESSON_GAUSS_LAW,
  'tp-ampere-law': LESSON_AMPERE_CIRCUITAL_LAW,
  'tp-faraday-law': LESSON_FARADAY_LAW_FIELD,
  'tp-displacement-current': LESSON_DISPLACEMENT_CURRENT,
  'tp-maxwell-equations': LESSON_MAXWELLS_EQUATIONS,
  'tp-wave-propagation-plane-waves': LESSON_EM_WAVE_PROPAGATION,

  'ch11-uniform-plane-waves': LESSON_EM_WAVE_PROPAGATION,
  'lsn-ch11-uniform-plane-waves': LESSON_EM_WAVE_PROPAGATION,
  'tp-uniform-plane-waves': LESSON_EM_WAVE_PROPAGATION,

  'ch11-em-wave-propagation': LESSON_EM_WAVE_PROPAGATION,
  'lsn-ch11-em-wave-propagation': LESSON_EM_WAVE_PROPAGATION,
  'tp-em-wave-propagation': LESSON_EM_WAVE_PROPAGATION
};

export {
  LESSON_EM_FIELD_FUNDAMENTALS,
  LESSON_GAUSS_LAW,
  LESSON_AMPERE_CIRCUITAL_LAW,
  LESSON_FARADAY_LAW_FIELD,
  LESSON_DISPLACEMENT_CURRENT,
  LESSON_MAXWELLS_EQUATIONS,
  LESSON_EM_WAVE_PROPAGATION,
  LESSON_WAVE_POLARIZATION,
  LESSON_REFLECTION_REFRACTION_NORMAL,
  LESSON_OBLIQUE_INCIDENCE_SNELL_BREWSTER,
  LESSON_SKIN_DEPTH_SHIELDING,
  LESSON_WAVEGUIDES_CUTOFF_DISPERSION,
  LESSON_EM_SPECTRUM_RADIO_TO_GAMMA,
  LESSON_ANTENNA_FUNDAMENTALS_LINK_BUDGET
};
