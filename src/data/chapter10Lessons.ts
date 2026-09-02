import { Lesson } from '../types';
import { LESSON_FARADAYS_LAWS_DISCOVERY } from './chapter10Lesson1';
import { LESSON_LENZS_LAW_CONSERVATION_ENERGY } from './chapter10Lesson2';
import { LESSON_FLEMINGS_RIGHT_HAND_RULE } from './chapter10Lesson3';
import { LESSON_DYNAMICALLY_INDUCED_EMF } from './chapter10Lesson4';
import { LESSON_STATICALLY_INDUCED_EMF } from './chapter10Lesson5';
import { LESSON_SELF_INDUCTION_INDUCTANCE } from './chapter10Lesson6';
import { LESSON_MUTUAL_INDUCTION } from './chapter10Lesson7';
import { LESSON_COEFFICIENT_OF_COUPLING } from './chapter10Lesson8';
import { LESSON_TRANSFORMER_EMF_EQUATION } from './chapter10Lesson9';
import { LESSON_EDDY_CURRENTS_LOSS_MECHANISMS } from './chapter10Lesson10';
import { LESSON_ELEMENTARY_AC_GENERATOR } from './chapter10Lesson11';
import { LESSON_ELEMENTARY_DC_GENERATOR } from './chapter10Lesson12';
import { LESSON_SKIN_EFFECT_PROXIMITY_EFFECT } from './chapter10Lesson13';
import { LESSON_HOMOPOLAR_GENERATORS_DISCS } from './chapter10Lesson14';
import { LESSON_INDUCTION_COILS_TRANSFORMERS } from './chapter10Lesson15';
import { LESSON_ELECTROMAGNETIC_BRAKING_DAMPING } from './chapter10Lesson16';

export const CHAPTER_10_LESSONS: Record<string, Lesson> = {
  // Topic ID mapping
  'ch10-faradays-laws-discovery': LESSON_FARADAYS_LAWS_DISCOVERY,
  'ch10-lenzs-law-conservation-energy': LESSON_LENZS_LAW_CONSERVATION_ENERGY,
  'ch10-flemings-right-hand-rule': LESSON_FLEMINGS_RIGHT_HAND_RULE,
  'ch10-dynamically-induced-emf': LESSON_DYNAMICALLY_INDUCED_EMF,
  'ch10-statically-induced-emf': LESSON_STATICALLY_INDUCED_EMF,
  'ch10-self-induction-inductance': LESSON_SELF_INDUCTION_INDUCTANCE,
  'ch10-mutual-induction': LESSON_MUTUAL_INDUCTION,
  'ch10-mutual-induction-coupling': LESSON_MUTUAL_INDUCTION, // Legacy/alias mapping
  'ch10-coefficient-of-coupling': LESSON_COEFFICIENT_OF_COUPLING,
  'ch10-dot-convention-coupled-circuits': LESSON_COEFFICIENT_OF_COUPLING, // Legacy/alias mapping
  'ch10-transformer-emf-equation': LESSON_TRANSFORMER_EMF_EQUATION,
  'ch10-energy-stored-magnetic-field': LESSON_TRANSFORMER_EMF_EQUATION, // Legacy/alias mapping
  'ch10-eddy-currents-loss-mechanisms': LESSON_EDDY_CURRENTS_LOSS_MECHANISMS,
  'ch10-elementary-ac-generator': LESSON_ELEMENTARY_AC_GENERATOR,
  'ch10-elementary-dc-generator': LESSON_ELEMENTARY_DC_GENERATOR,
  'ch10-skin-effect-proximity-effect': LESSON_SKIN_EFFECT_PROXIMITY_EFFECT,
  'ch10-homopolar-generators-discs': LESSON_HOMOPOLAR_GENERATORS_DISCS,
  'ch10-induction-coils-transformers': LESSON_INDUCTION_COILS_TRANSFORMERS,
  'ch10-electromagnetic-braking-damping': LESSON_ELECTROMAGNETIC_BRAKING_DAMPING,

  // Lesson ID mapping & backward compatibility aliases
  'lsn-ch10-faradays-laws-discovery': LESSON_FARADAYS_LAWS_DISCOVERY,
  'lsn-ch10-lenzs-law-conservation-energy': LESSON_LENZS_LAW_CONSERVATION_ENERGY,
  'lsn-ch10-flemings-right-hand-rule': LESSON_FLEMINGS_RIGHT_HAND_RULE,
  'lsn-ch10-dynamically-induced-emf': LESSON_DYNAMICALLY_INDUCED_EMF,
  'lsn-ch10-statically-induced-emf': LESSON_STATICALLY_INDUCED_EMF,
  'lsn-ch10-self-induction-inductance': LESSON_SELF_INDUCTION_INDUCTANCE,
  'lsn-ch10-mutual-induction': LESSON_MUTUAL_INDUCTION,
  'lsn-ch10-mutual-induction-coupling': LESSON_MUTUAL_INDUCTION,
  'lsn-ch10-coefficient-of-coupling': LESSON_COEFFICIENT_OF_COUPLING,
  'lsn-ch10-dot-convention-coupled-circuits': LESSON_COEFFICIENT_OF_COUPLING,
  'lsn-ch10-transformer-emf-equation': LESSON_TRANSFORMER_EMF_EQUATION,
  'lsn-ch10-energy-stored-magnetic-field': LESSON_TRANSFORMER_EMF_EQUATION,
  'lsn-ch10-eddy-currents-loss-mechanisms': LESSON_EDDY_CURRENTS_LOSS_MECHANISMS,
  'lsn-ch10-elementary-ac-generator': LESSON_ELEMENTARY_AC_GENERATOR,
  'lsn-ch10-elementary-dc-generator': LESSON_ELEMENTARY_DC_GENERATOR,
  'lsn-ch10-skin-effect-proximity-effect': LESSON_SKIN_EFFECT_PROXIMITY_EFFECT,
  'lsn-ch10-homopolar-generators-discs': LESSON_HOMOPOLAR_GENERATORS_DISCS,
  'lsn-ch10-induction-coils-transformers': LESSON_INDUCTION_COILS_TRANSFORMERS,
  'lsn-ch10-electromagnetic-braking-damping': LESSON_ELECTROMAGNETIC_BRAKING_DAMPING,

  'tp-faradays-laws-discovery': LESSON_FARADAYS_LAWS_DISCOVERY,
  'tp-lenzs-law-conservation-energy': LESSON_LENZS_LAW_CONSERVATION_ENERGY,
  'tp-flemings-right-hand-rule': LESSON_FLEMINGS_RIGHT_HAND_RULE,
  'tp-dynamically-induced-emf': LESSON_DYNAMICALLY_INDUCED_EMF,
  'tp-statically-induced-emf': LESSON_STATICALLY_INDUCED_EMF,
  'tp-self-induction-inductance': LESSON_SELF_INDUCTION_INDUCTANCE,
  'tp-mutual-induction': LESSON_MUTUAL_INDUCTION,
  'tp-coefficient-of-coupling': LESSON_COEFFICIENT_OF_COUPLING,
  'tp-transformer-emf-equation': LESSON_TRANSFORMER_EMF_EQUATION,
  'tp-eddy-currents-loss-mechanisms': LESSON_EDDY_CURRENTS_LOSS_MECHANISMS,
  'tp-elementary-ac-generator': LESSON_ELEMENTARY_AC_GENERATOR,
  'tp-elementary-dc-generator': LESSON_ELEMENTARY_DC_GENERATOR,
  'tp-skin-effect-proximity-effect': LESSON_SKIN_EFFECT_PROXIMITY_EFFECT,
  'tp-homopolar-generators-discs': LESSON_HOMOPOLAR_GENERATORS_DISCS,
  'tp-induction-coils-transformers': LESSON_INDUCTION_COILS_TRANSFORMERS,
  'tp-electromagnetic-braking-damping': LESSON_ELECTROMAGNETIC_BRAKING_DAMPING
};

export {
  LESSON_FARADAYS_LAWS_DISCOVERY,
  LESSON_LENZS_LAW_CONSERVATION_ENERGY,
  LESSON_FLEMINGS_RIGHT_HAND_RULE,
  LESSON_DYNAMICALLY_INDUCED_EMF,
  LESSON_STATICALLY_INDUCED_EMF,
  LESSON_SELF_INDUCTION_INDUCTANCE,
  LESSON_MUTUAL_INDUCTION,
  LESSON_COEFFICIENT_OF_COUPLING,
  LESSON_TRANSFORMER_EMF_EQUATION,
  LESSON_EDDY_CURRENTS_LOSS_MECHANISMS,
  LESSON_ELEMENTARY_AC_GENERATOR,
  LESSON_ELEMENTARY_DC_GENERATOR,
  LESSON_SKIN_EFFECT_PROXIMITY_EFFECT,
  LESSON_HOMOPOLAR_GENERATORS_DISCS,
  LESSON_INDUCTION_COILS_TRANSFORMERS,
  LESSON_ELECTROMAGNETIC_BRAKING_DAMPING
};

