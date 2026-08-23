import React, { useState } from 'react';
import { 
  ArrowLeft, 
  BookOpen, 
  Zap, 
  Calculator, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  Lightbulb, 
  Award, 
  FileText,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Lesson, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/content';
import { CircuitSchematicSvg } from './CircuitSchematicSvg';
import { OhmsLawSimulation } from './interactive/OhmsLawSimulation';
import { ElectricChargeAnimation } from './interactive/ElectricChargeAnimation';
import { ElectricCurrentAnimation } from './interactive/ElectricCurrentAnimation';
import { VoltagePotentialAnimation } from './interactive/VoltagePotentialAnimation';
import { EmfAnimation } from './interactive/EmfAnimation';
import { ResistanceAnimation } from './interactive/ResistanceAnimation';
import { ConductanceAnimation } from './interactive/ConductanceAnimation';
import { ElectricalPowerAnimation } from './interactive/ElectricalPowerAnimation';
import { ElectricalEnergyAnimation } from './interactive/ElectricalEnergyAnimation';
import { ElectricalWorkAnimation } from './interactive/ElectricalWorkAnimation';
import { SIUnitsAnimation } from './interactive/SIUnitsAnimation';
import { ElectricalSymbolsAnimation } from './interactive/ElectricalSymbolsAnimation';
import { PMMCAnimation } from './interactive/PMMCAnimation';
import { MovingIronAnimation } from './interactive/MovingIronAnimation';
import { ElectrodynamometerAnimation } from './interactive/ElectrodynamometerAnimation';
import { KCLNodeAnimation } from './interactive/KCLNodeAnimation';
import { KVLLoopAnimation } from './interactive/KVLLoopAnimation';
import { NodalAnalysisAnimation } from './interactive/NodalAnalysisAnimation';
import { MeshAnalysisAnimation } from './interactive/MeshAnalysisAnimation';
import { NetworkReductionAnimation } from './interactive/NetworkReductionAnimation';
import { DividerNetworkAnimation } from './interactive/DividerNetworkAnimation';
import { StarDeltaAnimation } from './interactive/StarDeltaAnimation';
import { TheveninEquivalentAnimation } from './interactive/TheveninEquivalentAnimation';
import { NortonEquivalentAnimation } from './interactive/NortonEquivalentAnimation';
import { SuperpositionAnimation } from './interactive/SuperpositionAnimation';
import { MaximumPowerTransferAnimation } from './interactive/MaximumPowerTransferAnimation';
import { ReciprocityAnimation } from './interactive/ReciprocityAnimation';
import { SourceTransformationAnimation } from './interactive/SourceTransformationAnimation';
import { DCFaultAnalysisAnimation } from './interactive/DCFaultAnalysisAnimation';
import { DCPracticalCaseStudyAnimation } from './interactive/DCPracticalCaseStudyAnimation';
import { ACWaveformAnimation } from './interactive/ACWaveformAnimation';
import { SinusoidalWaveformAnimation } from './interactive/SinusoidalWaveformAnimation';
import { RMSAverageAnimation } from './interactive/RMSAverageAnimation';
import { PhasorPhaseAnimation } from './interactive/PhasorPhaseAnimation';
import { ComplexNumberAnimation } from './interactive/ComplexNumberAnimation';
import { PureResistiveACAnimation } from './interactive/PureResistiveACAnimation';
import { PureInductiveACAnimation } from './interactive/PureInductiveACAnimation';
import { PureCapacitiveACAnimation } from './interactive/PureCapacitiveACAnimation';
import { ReactanceComparisonAnimation } from './interactive/ReactanceComparisonAnimation';
import { SeriesRLRCAnimation } from './interactive/SeriesRLRCAnimation';
import { SeriesRLCAnimation } from './interactive/SeriesRLCAnimation';
import { ImpedanceAdmittanceAnimation } from './interactive/ImpedanceAdmittanceAnimation';
import { SeriesParallelACAnimation } from './interactive/SeriesParallelACAnimation';
import { ResonanceAnimation } from './interactive/ResonanceAnimation';
import { ResonanceQBandwidthAnimation } from './interactive/ResonanceQBandwidthAnimation';
import { ACPowerTriangleAnimation } from './interactive/ACPowerTriangleAnimation';
import { PowerFactorCorrectionAnimation } from './interactive/PowerFactorCorrectionAnimation';
import { ThreePhaseACAnimation } from './interactive/ThreePhaseACAnimation';
import { ThreePhaseStarDeltaAnimation } from './interactive/ThreePhaseStarDeltaAnimation';
import { ACIndustrialCaseStudyAnimation } from './interactive/ACIndustrialCaseStudyAnimation';
import { MachineEnergyConversionAnimation } from './interactive/MachineEnergyConversionAnimation';
import { MagneticCircuitAnimation } from './interactive/MagneticCircuitAnimation';
import { DCMachineConstructionAnimation } from './interactive/DCMachineConstructionAnimation';
import { DCGeneratorEMFAnimation } from './interactive/DCGeneratorEMFAnimation';
import { DCGeneratorTypesAnimation } from './interactive/DCGeneratorTypesAnimation';
import { DCGeneratorCharacteristicsAnimation } from './interactive/DCGeneratorCharacteristicsAnimation';
import { DCGeneratorEfficiencyAnimation } from './interactive/DCGeneratorEfficiencyAnimation';
import { DCMotorTorqueAnimation } from './interactive/DCMotorTorqueAnimation';
import { DCMotorTypesAnimation } from './interactive/DCMotorTypesAnimation';
import { DCMotorStarterAnimation } from './interactive/DCMotorStarterAnimation';
import { DCMotorSpeedControlAnimation } from './interactive/DCMotorSpeedControlAnimation';
import { DCMotorBrakingAnimation } from './interactive/DCMotorBrakingAnimation';
import { TransformerEMFAnimation } from './interactive/TransformerEMFAnimation';
import { TransformerConstructionCoolingAnimation } from './interactive/TransformerConstructionCoolingAnimation';
import { TransformerEquivalentCircuitAnimation } from './interactive/TransformerEquivalentCircuitAnimation';
import { TransformerLossEfficiencyAnimation } from './interactive/TransformerLossEfficiencyAnimation';
import { TransformerTestsAnimation } from './interactive/TransformerTestsAnimation';
import { TransformerParallelOperationAnimation } from './interactive/TransformerParallelOperationAnimation';

const renderTopicAnimation = (lesson: Lesson, currentLanguage: Language) => {
  const topicId = lesson.topicId || '';
  const lessonId = lesson.id || '';

  if (topicId === 'tp-charge' || lessonId === 'lsn-charge') {
    return <ElectricChargeAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'tp-current' || lessonId === 'lsn-current') {
    return <ElectricCurrentAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'tp-voltage' || lessonId === 'lsn-voltage') {
    return <VoltagePotentialAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'tp-emf' || lessonId === 'lsn-emf') {
    return <EmfAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'tp-resistance' || lessonId === 'lsn-resistance') {
    return <ResistanceAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'tp-conductance' || lessonId === 'lsn-conductance') {
    return <ConductanceAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'tp-power' || lessonId === 'lsn-power') {
    return <ElectricalPowerAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'tp-energy' || lessonId === 'lsn-energy') {
    return <ElectricalEnergyAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'tp-electrical-work' || lessonId === 'lsn-work') {
    return <ElectricalWorkAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'tp-units-si' || lessonId === 'lsn-units-si') {
    return <SIUnitsAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'tp-electrical-symbols' || lessonId === 'lsn-symbols') {
    return <ElectricalSymbolsAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'tp-ohms-law' || lessonId === 'lsn-ohms-law') {
    return <OhmsLawSimulation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch3-pmmc-instruments' || lessonId === 'ch3-pmmc-instruments') {
    return <PMMCAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch3-moving-iron' || topicId === 'ch3-moving-iron-instruments' || lessonId === 'ch3-moving-iron') {
    return <MovingIronAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch3-electrodynamometer' || topicId === 'ch3-electrodynamometer-instruments' || lessonId === 'ch3-electrodynamometer') {
    return <ElectrodynamometerAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch4-kcl' || lessonId === 'lsn-ch4-kcl') {
    return <KCLNodeAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch4-kvl' || lessonId === 'lsn-ch4-kvl') {
    return <KVLLoopAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch4-nodal-analysis' || lessonId === 'lsn-ch4-nodal-analysis') {
    return <NodalAnalysisAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch4-mesh-analysis' || lessonId === 'lsn-ch4-mesh-analysis') {
    return <MeshAnalysisAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch4-network-reduction' || lessonId === 'lsn-ch4-network-reduction') {
    return <NetworkReductionAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch4-divider-networks' || lessonId === 'lsn-ch4-divider-networks') {
    return <DividerNetworkAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch4-star-delta' || lessonId === 'lsn-ch4-star-delta') {
    return <StarDeltaAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch4-thevenins-theorem' || lessonId === 'lsn-ch4-thevenins-theorem') {
    return <TheveninEquivalentAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch4-nortons-theorem' || lessonId === 'lsn-ch4-nortons-theorem') {
    return <NortonEquivalentAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch4-superposition-theorem' || lessonId === 'lsn-ch4-superposition-theorem') {
    return <SuperpositionAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch4-max-power-transfer' || lessonId === 'lsn-ch4-max-power-transfer') {
    return <MaximumPowerTransferAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch4-reciprocity-theorem' || lessonId === 'lsn-ch4-reciprocity-theorem') {
    return <ReciprocityAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch4-source-transformation' || lessonId === 'lsn-ch4-source-transformation') {
    return <SourceTransformationAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch4-dc-fault-analysis' || lessonId === 'lsn-ch4-dc-fault-analysis') {
    return <DCFaultAnalysisAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch4-practical-dc-applications' || lessonId === 'lsn-ch4-practical-dc-applications') {
    return <DCPracticalCaseStudyAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch5-ac-fundamentals' || lessonId === 'lsn-ch5-ac-fundamentals') {
    return <ACWaveformAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch5-sinusoidal-waveform' || lessonId === 'lsn-ch5-sinusoidal-waveform') {
    return <SinusoidalWaveformAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch5-rms-average-values' || lessonId === 'lsn-ch5-rms-average-values') {
    return <RMSAverageAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch5-phase-phase-difference' || lessonId === 'lsn-ch5-phase-phase-difference') {
    return <PhasorPhaseAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch5-complex-numbers' || lessonId === 'lsn-ch5-complex-numbers') {
    return <ComplexNumberAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch5-ac-resistance' || lessonId === 'lsn-ch5-ac-resistance') {
    return <PureResistiveACAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch5-ac-inductor' || lessonId === 'lsn-ch5-ac-inductor') {
    return <PureInductiveACAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch5-ac-capacitor' || lessonId === 'lsn-ch5-ac-capacitor') {
    return <PureCapacitiveACAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch5-inductive-reactance' || lessonId === 'lsn-ch5-inductive-reactance') {
    return <ReactanceComparisonAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch5-series-rl-rc' || lessonId === 'lsn-ch5-series-rl-rc') {
    return <SeriesRLRCAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch5-series-rlc' || lessonId === 'lsn-ch5-series-rlc') {
    return <SeriesRLCAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch5-ac-impedance-admittance' || lessonId === 'lsn-ch5-ac-impedance-admittance') {
    return <ImpedanceAdmittanceAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch5-ac-series-parallel' || lessonId === 'lsn-ch5-ac-series-parallel') {
    return <SeriesParallelACAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch5-resonance' || lessonId === 'lsn-ch5-resonance') {
    return <ResonanceAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch5-resonant-frequency-q' || lessonId === 'lsn-ch5-resonant-frequency-q') {
    return <ResonanceQBandwidthAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch5-ac-power' || lessonId === 'lsn-ch5-ac-power') {
    return <ACPowerTriangleAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch5-power-factor' || lessonId === 'lsn-ch5-power-factor') {
    return <PowerFactorCorrectionAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch5-three-phase-intro' || lessonId === 'lsn-ch5-three-phase-intro') {
    return <ThreePhaseACAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch5-star-delta-ac' || lessonId === 'lsn-ch5-star-delta-ac') {
    return <ThreePhaseStarDeltaAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch5-ac-practical-applications' || lessonId === 'lsn-ch5-ac-practical-applications') {
    return <ACIndustrialCaseStudyAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch6-electrical-machines-fundamentals' || lessonId === 'lsn-ch6-electrical-machines-fundamentals') {
    return <MachineEnergyConversionAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch6-magnetic-circuits' || lessonId === 'lsn-ch6-magnetic-circuits') {
    return <MagneticCircuitAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch6-dc-machine-construction' || lessonId === 'lsn-ch6-dc-machine-construction') {
    return <DCMachineConstructionAnimation currentLanguage={currentLanguage} />;
  }
  if (topicId === 'ch6-dc-generator-emf' || lessonId === 'lsn-ch6-dc-generator-emf') {
    return <DCGeneratorEMFAnimation language={currentLanguage} />;
  }
  if (topicId === 'ch6-dc-generator-types' || lessonId === 'lsn-ch6-dc-generator-types') {
    return <DCGeneratorTypesAnimation language={currentLanguage} />;
  }
  if (topicId === 'ch6-dc-generator-characteristics' || lessonId === 'lsn-ch6-dc-generator-characteristics') {
    return <DCGeneratorCharacteristicsAnimation language={currentLanguage} />;
  }
  if (topicId === 'ch6-dc-generator-losses-efficiency' || lessonId === 'lsn-ch6-dc-generator-losses-efficiency') {
    return <DCGeneratorEfficiencyAnimation language={currentLanguage} />;
  }
  if (topicId === 'ch6-dc-motor-principle' || lessonId === 'lsn-ch6-dc-motor-principle') {
    return <DCMotorTorqueAnimation language={currentLanguage} />;
  }
  if (topicId === 'ch6-dc-motor-types' || lessonId === 'lsn-ch6-dc-motor-types') {
    return <DCMotorTypesAnimation language={currentLanguage} />;
  }
  if (topicId === 'ch6-dc-motor-starting' || lessonId === 'lsn-ch6-dc-motor-starting') {
    return <DCMotorStarterAnimation language={currentLanguage} />;
  }
  if (topicId === 'ch6-dc-motor-speed-control' || lessonId === 'lsn-ch6-dc-motor-speed-control') {
    return <DCMotorSpeedControlAnimation language={currentLanguage} />;
  }
  if (topicId === 'ch6-dc-motor-braking' || lessonId === 'lsn-ch6-dc-motor-braking') {
    return <DCMotorBrakingAnimation language={currentLanguage} />;
  }
  if (topicId === 'ch6-transformer-fundamentals' || lessonId === 'lsn-ch6-transformer-fundamentals') {
    return <TransformerEMFAnimation language={currentLanguage} />;
  }
  if (topicId === 'ch6-transformer-types-construction' || lessonId === 'lsn-ch6-transformer-types-construction') {
    return <TransformerConstructionCoolingAnimation language={currentLanguage} />;
  }
  if (topicId === 'ch6-transformer-equivalent-circuit' || lessonId === 'lsn-ch6-transformer-equivalent-circuit') {
    return <TransformerEquivalentCircuitAnimation language={currentLanguage} />;
  }
  if (topicId === 'ch6-transformer-losses-efficiency' || lessonId === 'lsn-ch6-transformer-losses-efficiency') {
    return <TransformerLossEfficiencyAnimation language={currentLanguage} />;
  }
  if (topicId === 'ch6-transformer-tests' || lessonId === 'lsn-ch6-transformer-tests') {
    return <TransformerTestsAnimation language={currentLanguage} />;
  }
  if (topicId === 'ch6-transformer-parallel-operation' || lessonId === 'lsn-ch6-transformer-parallel-operation') {
    return <TransformerParallelOperationAnimation language={currentLanguage} />;
  }
  return null;
};

interface LessonViewerProps {
  lesson: Lesson;
  currentLanguage: Language;
  onBack: () => void;
}

export const LessonViewer: React.FC<LessonViewerProps> = ({
  lesson,
  currentLanguage,
  onBack
}) => {
  const t = UI_TRANSLATIONS[currentLanguage];
  const [activeTab, setActiveTab] = useState<'overview' | 'formulas' | 'keypoints' | 'practice'>('overview');
  
  // MCQ state: track selected option for each MCQ
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  
  // Practice question hint toggle state
  const [revealedHints, setRevealedHints] = useState<Record<string, boolean>>({});
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});

  const handleSelectOption = (mcqId: string, optionId: string) => {
    setSelectedAnswers(prev => ({ ...prev, [mcqId]: optionId }));
  };

  const toggleHint = (pqId: string) => {
    setRevealedHints(prev => ({ ...prev, [pqId]: !prev[pqId] }));
  };

  const toggleAnswer = (pqId: string) => {
    setRevealedAnswers(prev => ({ ...prev, [pqId]: !prev[pqId] }));
  };

  const title = lesson.title?.[currentLanguage] || lesson.title?.en || '';
  const easyExp = lesson.easyExplanation?.[currentLanguage] || lesson.easyExplanation?.en || lesson.description?.[currentLanguage] || lesson.description?.en || '';
  const detailedExp = lesson.detailedExplanation?.[currentLanguage] || lesson.detailedExplanation?.en || (lesson.sections ? lesson.sections.map(s => `${s.title?.[currentLanguage] || s.title?.en || ''}\n\n${s.content?.[currentLanguage] || s.content?.en || ''}`).join('\n\n') : '');
  const applications = lesson.practicalApplications?.[currentLanguage] || lesson.practicalApplications?.en || [];
  const importantPoints = lesson.importantPoints?.[currentLanguage] || lesson.importantPoints?.en || [];
  const commonMistakes = lesson.commonMistakes?.[currentLanguage] || lesson.commonMistakes?.en || [];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Top Bar with Back Button */}
      <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800 print-hidden">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/60 px-3 py-1.5 rounded-lg border border-cyan-200 dark:border-cyan-800 transition-all shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Syllabus</span>
        </button>
        <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold">
          Lesson #{lesson.order}
        </span>
      </div>

      {/* Lesson Header */}
      <div className="print-hidden">
        <h3 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
          {title}
        </h3>
        <p className="text-xs text-cyan-600 dark:text-cyan-400 mt-1 font-semibold flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Interactive Learning Module</span>
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 print-hidden">
        <button
          onClick={() => setActiveTab('overview')}
          className={`flex-1 min-w-[120px] px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'overview'
              ? 'bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 shadow-sm border border-slate-200 dark:border-slate-700'
              : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Explanation</span>
        </button>

        <button
          onClick={() => setActiveTab('formulas')}
          className={`flex-1 min-w-[120px] px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'formulas'
              ? 'bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 shadow-sm border border-slate-200 dark:border-slate-700'
              : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Calculator className="w-3.5 h-3.5" />
          <span>Formulas & Examples</span>
        </button>

        <button
          onClick={() => setActiveTab('keypoints')}
          className={`flex-1 min-w-[120px] px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'keypoints'
              ? 'bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 shadow-sm border border-slate-200 dark:border-slate-700'
              : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Lightbulb className="w-3.5 h-3.5" />
          <span>Key Points & Applications</span>
        </button>

        <button
          onClick={() => setActiveTab('practice')}
          className={`flex-1 min-w-[120px] px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'practice'
              ? 'bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 shadow-sm border border-slate-200 dark:border-slate-700'
              : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Award className="w-3.5 h-3.5" />
          <span>MCQs & Practice ({lesson.mcqs.length + lesson.practiceQuestions.length})</span>
        </button>
      </div>

      {/* TAB 1: OVERVIEW & EXPLANATION */}
      <div className={activeTab === 'overview' ? 'space-y-5' : 'hidden print:block print:space-y-5'}>
        {/* Easy Concept Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-cyan-50/70 dark:bg-cyan-950/40 border border-cyan-200/90 dark:border-cyan-800/80 space-y-2.5 print-avoid-break">
          <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-300 font-bold text-xs uppercase tracking-wider">
            <Zap className="w-4 h-4 text-cyan-500" />
            <span>Easy Concept Explanation</span>
          </div>
          <p className="text-base sm:text-[17px] text-slate-800 dark:text-slate-200 leading-relaxed sm:leading-loose font-normal">
            {easyExp}
          </p>
        </div>

        {/* Detailed Engineering Explanation */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2.5 shadow-2xs print-avoid-break">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider">
            <FileText className="w-4 h-4 text-cyan-500" />
            <span>Detailed Engineering Explanation</span>
          </div>
          <p className="text-base sm:text-[17px] text-slate-700 dark:text-slate-300 leading-relaxed sm:leading-loose font-normal">
            {detailedExp}
          </p>
        </div>

        {/* Interactive Topic Learning Animation System */}
        <div className="pt-1 print-avoid-break">
          {renderTopicAnimation(lesson, currentLanguage)}
        </div>

        {/* Schematic Diagram Preview */}
        {lesson.diagrams && lesson.diagrams.length > 0 && (
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-white space-y-3 print-avoid-break">
            <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center justify-between">
              <span>{lesson.diagrams[0].title[currentLanguage] || lesson.diagrams[0].title.en}</span>
              <span className="text-[10px] text-slate-400">Interactive Circuit Schematic</span>
            </div>
            <CircuitSchematicSvg 
              svgType={lesson.diagrams[0].svgType} 
              caption={lesson.diagrams[0].caption[currentLanguage] || lesson.diagrams[0].caption.en} 
            />
          </div>
        )}
      </div>

      {/* TAB 2: FORMULAS & SOLVED EXAMPLES */}
      <div className={activeTab === 'formulas' ? 'space-y-6' : 'hidden print:block print:space-y-6'}>
        {/* Formulas List */}
        <div className="space-y-3 print-avoid-break">
          <h4 className="text-xs font-bold font-display uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Calculator className="w-4 h-4 text-cyan-500" />
            <span>Core Mathematical Formulas</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {lesson.formulas.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white space-y-1.5">
                <div className="text-lg font-bold font-mono text-cyan-300">{item.expression}</div>
                <p className="text-xs text-slate-400">
                  {item.description[currentLanguage] || item.description.en}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Solved Examples */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold font-display uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Step-by-Step Solved Example</span>
          </h4>
          {(lesson.solvedExamples || []).map((ex) => (
            <div key={ex.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3 print-avoid-break">
              <div className="font-semibold text-sm text-slate-900 dark:text-white">
                <span className="text-cyan-600 dark:text-cyan-400 font-bold mr-2">Problem:</span>
                {ex.problem[currentLanguage] || ex.problem.en}
              </div>

              {ex.givenValues && (
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {Object.entries(ex.givenValues).map(([k, v]) => (
                    <span key={k} className="px-2.5 py-1 rounded bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                      {k}: <strong className="text-cyan-600 dark:text-cyan-300">{v}</strong>
                    </span>
                  ))}
                </div>
              )}

              <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-900 font-mono text-xs text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Solution Steps:</span>
                {ex.solution[currentLanguage] || ex.solution.en}
              </div>

              {ex.finalAnswer && (
                <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300 font-mono font-bold">
                  Result: {ex.finalAnswer[currentLanguage] || ex.finalAnswer.en}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* TAB 3: KEY POINTS & MISTAKES */}
      <div className={activeTab === 'keypoints' ? 'space-y-6' : 'hidden print:block print:space-y-6'}>
        {/* Important Points */}
        <div className="space-y-3 print-avoid-break">
          <h4 className="text-xs font-bold font-display uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span>Important Exam & Interview Points</span>
          </h4>
          <div className="space-y-2">
            {importantPoints.map((point, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 flex items-start gap-2.5 text-xs text-amber-900 dark:text-amber-200">
                <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Applications */}
        <div className="space-y-3 print-avoid-break">
          <h4 className="text-xs font-bold font-display uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-cyan-500" />
            <span>Practical Field Applications</span>
          </h4>
          <div className="space-y-2">
            {applications.map((app, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                <span className="w-5 h-5 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 font-mono font-bold flex items-center justify-center shrink-0 text-[10px]">
                  {idx + 1}
                </span>
                <span className="leading-relaxed font-medium">{app}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="space-y-3 print-avoid-break">
          <h4 className="text-xs font-bold font-display uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-rose-500" />
            <span>Common Student Mistakes to Avoid</span>
          </h4>
          <div className="space-y-2">
            {commonMistakes.map((mistake, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/60 flex items-start gap-2.5 text-xs text-rose-900 dark:text-rose-200">
                <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed font-medium">{mistake}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TAB 4: MCQs & PRACTICE QUESTIONS */}
      <div className={activeTab === 'practice' ? 'space-y-6' : 'hidden print:block print:space-y-6'}>
        {/* MCQs Section */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold font-display uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-cyan-500" />
            <span>Multiple Choice Practice Questions</span>
          </h4>

          {lesson.mcqs.map((mcq, qIdx) => {
            const qText = mcq.question[currentLanguage] || mcq.question.en;
            const expText = mcq.explanation[currentLanguage] || mcq.explanation.en;
            const userSelected = selectedAnswers[mcq.id];

            return (
              <div key={mcq.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3 print-avoid-break">
                <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-start gap-2">
                  <span className="text-cyan-600 dark:text-cyan-400 font-mono">Q{qIdx + 1}.</span>
                  <span>{qText}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {mcq.options.map((opt) => {
                    const optText = opt.text[currentLanguage] || opt.text.en;
                    const isSelected = userSelected === opt.id;
                    const isCorrect = mcq.correctOptionId === opt.id;

                    let btnStyle = "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-cyan-400";
                    
                    if (userSelected) {
                      if (isCorrect) {
                        btnStyle = "bg-emerald-50 dark:bg-emerald-950/80 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-bold";
                      } else if (isSelected) {
                        btnStyle = "bg-rose-50 dark:bg-rose-950/80 border-rose-500 text-rose-800 dark:text-rose-200 font-bold";
                      }
                    }

                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleSelectOption(mcq.id, opt.id)}
                        className={`p-3 rounded-lg border text-xs text-left transition-all flex items-center justify-between ${btnStyle} ${isCorrect ? 'print:border-emerald-600 print:bg-emerald-50 print:font-bold' : 'print:border-slate-300'}`}
                      >
                        <span>
                          <strong className="uppercase mr-2 font-mono text-cyan-600 dark:text-cyan-400 print:text-black">({opt.id})</strong>
                          {optText}
                        </span>
                        {userSelected && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 ml-2" />}
                        {userSelected && isSelected && !isCorrect && <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 ml-2" />}
                      </button>
                    );
                  })}
                </div>

                <div className={`p-3 rounded-lg bg-cyan-50/80 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800 text-xs text-cyan-900 dark:text-cyan-200 leading-relaxed font-mono ${userSelected ? 'block' : 'hidden print:block'}`}>
                  <strong className="block font-sans font-bold text-cyan-700 dark:text-cyan-300 mb-0.5">Explanation:</strong>
                  {expText}
                </div>
              </div>
            );
          })}
        </div>

        {/* Descriptive Practice Questions */}
        <div className="space-y-4 pt-2 border-t border-slate-200 dark:border-slate-800">
          <h4 className="text-xs font-bold font-display uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-emerald-500" />
            <span>Descriptive Examination Questions</span>
          </h4>

          {lesson.practiceQuestions.map((pq, pIdx) => {
            const pqText = pq.question[currentLanguage] || pq.question.en;
            const hintText = pq.hint ? (pq.hint[currentLanguage] || pq.hint.en) : null;
            const ansText = pq.answerKey[currentLanguage] || pq.answerKey.en;
            const showHint = revealedHints[pq.id];
            const showAns = revealedAnswers[pq.id];

            return (
              <div key={pq.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3 print-avoid-break">
                <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-start gap-2">
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono">P{pIdx + 1}.</span>
                  <span>{pqText}</span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1 print-hidden">
                  {hintText && (
                    <button
                      onClick={() => toggleHint(pq.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-3 py-1.5 rounded-lg border border-amber-200 dark:border-amber-800 transition-colors"
                    >
                      <Lightbulb className="w-3.5 h-3.5" />
                      <span>{showHint ? 'Hide Hint' : 'View Hint'}</span>
                      {showHint ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  )}

                  <button
                    onClick={() => toggleAnswer(pq.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-800 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{showAns ? 'Hide Answer Key' : 'Reveal Answer Key'}</span>
                    {showAns ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {hintText && (
                  <div className={`p-3 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-800 dark:text-amber-300 ${showHint ? 'block' : 'hidden print:block'}`}>
                    <strong>Hint:</strong> {hintText}
                  </div>
                )}

                <div className={`p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs text-emerald-800 dark:text-emerald-300 font-mono ${showAns ? 'block' : 'hidden print:block'}`}>
                  <strong>Answer Key:</strong> {ansText}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
