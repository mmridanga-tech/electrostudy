import { Lesson } from '../types';
import { LESSON_MAGNETIC_FLUX, LESSON_FLUX_DENSITY } from './chapter9Lesson1';
import { LESSON_MMF_RELUCTANCE_PERMEABILITY } from './chapter9Lesson2';
import { LESSON_MAGNETIC_VS_ELECTRIC } from './chapter9Lesson3';
import { LESSON_RELUCTANCE_PERMEANCE } from './chapter9Lesson4';
import { LESSON_PERMEABILITY } from './chapter9Lesson5';
import { LESSON_MAGNETIC_FIELD_STRENGTH } from './chapter9Lesson6';
import { LESSON_AMPERES_LAW } from './chapter9Lesson7';
import { LESSON_SERIES_MAGNETIC_CIRCUIT } from './chapter9Lesson9';
import { LESSON_MAGNETIC_MATERIALS_BH_CURVE } from './chapter9Lesson10';

export const CHAPTER_9_LESSONS: Record<string, Lesson> = {
  'tp-magnetic-flux': LESSON_MAGNETIC_FLUX,
  'tp-flux-density': LESSON_FLUX_DENSITY,
  'tp-mmf': LESSON_MMF_RELUCTANCE_PERMEABILITY,
  'tp-reluctance': LESSON_RELUCTANCE_PERMEANCE,
  'tp-permeability': LESSON_PERMEABILITY,
  'tp-magnetic-field-strength': LESSON_MAGNETIC_FIELD_STRENGTH,
  'tp-amperes-law': LESSON_AMPERES_LAW,
  'tp-mag-vs-elec-circuit': LESSON_MAGNETIC_VS_ELECTRIC,
  'tp-series-magnetic-circuit': LESSON_SERIES_MAGNETIC_CIRCUIT,
  'tp-magnetic-materials': LESSON_MAGNETIC_MATERIALS_BH_CURVE,
  // Backward compatibility & aliases
  'ch9-magnetic-flux': LESSON_MAGNETIC_FLUX,
  'ch9-flux-density': LESSON_FLUX_DENSITY,
  'ch9-magnetic-circuits': LESSON_MAGNETIC_FLUX,
  'lsn-ch9-magnetic-flux-density': LESSON_MAGNETIC_FLUX
};

export {
  LESSON_MAGNETIC_FLUX,
  LESSON_FLUX_DENSITY,
  LESSON_MMF_RELUCTANCE_PERMEABILITY,
  LESSON_MAGNETIC_VS_ELECTRIC,
  LESSON_RELUCTANCE_PERMEANCE,
  LESSON_PERMEABILITY,
  LESSON_MAGNETIC_FIELD_STRENGTH,
  LESSON_AMPERES_LAW,
  LESSON_SERIES_MAGNETIC_CIRCUIT,
  LESSON_MAGNETIC_MATERIALS_BH_CURVE
};

// Legacy alias for backward compatibility
export const LESSON_MAGNETIC_FLUX_DENSITY = LESSON_MAGNETIC_FLUX;

