import React, { useState } from 'react';
import { Layers, Shield, Compass, Zap, Magnet, Info, SplitSquareVertical } from 'lucide-react';
import { Language } from '../../types';

interface MaxwellEquationsExplorerAnimationProps {
  currentLanguage: Language;
}

type EquationId = 'gauss-e' | 'gauss-m' | 'faraday' | 'ampere-maxwell';
type ViewMode = 'equations' | 'boundaries';

export const MaxwellEquationsExplorerAnimation: React.FC<MaxwellEquationsExplorerAnimationProps> = ({
  currentLanguage
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>('equations');
  const [selectedEq, setSelectedEq] = useState<EquationId>('gauss-e');

  const eqDetails = {
    'gauss-e': {
      title: "1. Gauss's Law for Electrostatics",
      diffForm: '∇ · D = ρ_v',
      diffAlt: '∇ · E = ρ_v / ε₀',
      intForm: '∯ D · dA = Q_enclosed',
      intAlt: '∯ E · dA = Q_enc / ε₀',
      source: 'Scalar Free Electric Charge Density (ρ_v)',
      field: 'Electric Flux Density D and Electric Field E',
      physicalMeaning: 'Electric field lines diverge radially from positive charges and converge onto negative charges. Charges act as physical sources and sinks of electric flux.',
      color: 'cyan'
    },
    'gauss-m': {
      title: "2. Gauss's Law for Magnetism",
      diffForm: '∇ · B = 0',
      diffAlt: 'div(B) = 0',
      intForm: '∯ B · dA = 0',
      intAlt: 'Net Magnetic Flux = 0',
      source: 'None (No isolated magnetic monopole charges)',
      field: 'Magnetic Flux Density B',
      physicalMeaning: 'Magnetic field lines are solenoidal continuous loops without start or end points. Total magnetic flux leaving any closed Gaussian volume identically equals zero.',
      color: 'purple'
    },
    'faraday': {
      title: "3. Faraday's Law of Induction",
      diffForm: '∇ × E = -∂B/∂t',
      diffAlt: 'curl(E) = -∂B/∂t',
      intForm: '∮ E · dl = -dΦ_B/dt = -d/dt ∬ B · dA',
      intAlt: 'EMF = -dΦ/dt',
      source: 'Time-varying Magnetic Flux Density (-∂B/∂t)',
      field: 'Circulating Non-Conservative Electric Field E',
      physicalMeaning: 'A time-varying magnetic field induces a circulating electric field vortex in space. The negative sign represents Lenz’s law, opposing the change in magnetic flux.',
      color: 'sky'
    },
    'ampere-maxwell': {
      title: "4. Ampère-Maxwell Generalized Law",
      diffForm: '∇ × H = J + ∂D/∂t',
      diffAlt: 'curl(H) = J_conduction + J_displacement',
      intForm: '∮ H · dl = I_conduction + ∬ (∂D/∂t) · dA',
      intAlt: 'Circulation = I_c + I_d',
      source: 'Conduction Current Density J + Displacement Current ∂D/∂t',
      field: 'Circulating Magnetic Field Intensity H',
      physicalMeaning: 'Magnetic fields are created both by electric charges in motion (currents) and by time-varying electric flux. This term enables self-sustaining electromagnetic wave propagation!',
      color: 'amber'
    }
  };

  const labels = {
    en: {
      title: 'Maxwell’s Four Fundamental Equations & Boundary Conditions',
      subtitle: 'The master unification of electromagnetism, electrodynamics, and electromagnetic wave foundation',
      equationsTab: 'Four Maxwell Equations',
      boundariesTab: 'Material Boundary Conditions',
      diffTitle: 'Differential Form (Point Relation):',
      intTitle: 'Integral Form (Macroscopic Region):',
      sourceTitle: 'Source Entity:',
      fieldTitle: 'Governed Field:',
      physicalTitle: 'Physical Significance:',
      boundariesNotice: 'Interface Boundary Conditions Between Medium 1 (ε₁, μ₁, σ₁) and Medium 2 (ε₂, μ₂, σ₂):',
      eTanLabel: 'Tangential Electric Field Continuity:',
      eTanFormula: 'E₁_t = E₂_t',
      eTanDesc: 'Work done along an infinitesimal rectangular loop across the boundary must be zero (from Faraday’s law).',
      hTanLabel: 'Tangential Magnetic Field Discontinuity:',
      hTanFormula: 'H₁_t - H₂_t = K_s (Surface Conduction Current)',
      hTanDesc: 'If neither medium is a perfect conductor, surface current density K_s = 0, so H₁_t = H₂_t.',
      dNormLabel: 'Normal Electric Flux Discontinuity:',
      dNormFormula: 'D₁_n - D₂_n = ρ_s (Free Surface Charge)',
      dNormDesc: 'Gaussian pillbox across interface shows jump discontinuity equal to surface free charge density ρ_s.',
      bNormLabel: 'Normal Magnetic Flux Continuity:',
      bNormFormula: 'B₁_n = B₂_n',
      bNormDesc: 'Magnetic flux lines never terminate; normal B is ALWAYS strictly continuous across any interface!'
    },
    hi: {
      title: 'मैक्सवेल के चार मूलभूत समीकरण एवं परिसीमा शर्तें',
      subtitle: 'विद्युत-चुंबकत्व, विद्युत-गतिकी एवं तरंगों का एकीकृत सैद्धांतिक अन्वेषक',
      equationsTab: 'मैक्सवेल के चार समीकरण',
      boundariesTab: 'माध्यम परिसीमा शर्तें',
      diffTitle: 'अवकल रूप (बिंदु संबंध):',
      intTitle: 'समाकल रूप (स्थूल क्षेत्र):',
      sourceTitle: 'स्रोत राशि:',
      fieldTitle: 'संबंधित क्षेत्र:',
      physicalTitle: 'भौतिक महत्व:',
      boundariesNotice: 'माध्यम 1 एवं माध्यम 2 के मध्य अंतरापृष्ठ परिसीमा शर्तें:',
      eTanLabel: 'स्पर्शरेखीय विद्युत क्षेत्र निरंतरता:',
      eTanFormula: 'E₁_t = E₂_t',
      eTanDesc: 'अंतरापृष्ठ पर स्पर्शरेखीय विद्युत क्षेत्र सतत रहता है।',
      hTanLabel: 'स्पर्शरेखीय चुंबकीय क्षेत्र असततता:',
      hTanFormula: 'H₁_t - H₂_t = K_s (पृष्ठीय धारा)',
      hTanDesc: 'आदर्श चालक न होने पर K_s = 0, अतः H₁_t = H₂_t।',
      dNormLabel: 'अभिलम्बवत विद्युत फ्लक्स असततता:',
      dNormFormula: 'D₁_n - D₂_n = ρ_s (पृष्ठीय आवेश)',
      dNormDesc: 'परावैद्युत अंतरापृष्ठ पर D का अंतर पृष्ठीय मुक्त आवेश के बराबर होता है।',
      bNormLabel: 'अभिलम्बवत चुंबकीय फ्लक्स निरंतरता:',
      bNormFormula: 'B₁_n = B₂_n',
      bNormDesc: 'B का अभिलम्ब घटक सभी माध्यमों की सीमाओं पर सदैव सतत रहता है!'
    },
    bn: {
      title: 'ম্যাক্সওয়েলের চারটি মৌলিক সমীকরণ ও বাউন্ডারি শর্তাবলি',
      subtitle: 'তড়িচ্চুম্বকীয় তত্ত্ব ও তরঙ্গ সৃষ্টির সমন্বিত জ্ঞানভাণ্ডার',
      equationsTab: 'ম্যাক্সওয়েলের ৪টি সমীকরণ',
      boundariesTab: 'পদার্থের বাউন্ডারি শর্ত',
      diffTitle: 'ডিফারেনশিয়াল রূপ (বিন্দু সম্পর্ক):',
      intTitle: 'ইন্টিগ্রাল রূপ (স্থূল অঞ্চল):',
      sourceTitle: 'উৎস রাশি:',
      fieldTitle: 'সংশ্লিষ্ট ক্ষেত্র:',
      physicalTitle: 'ভৌত তাৎপর্য:',
      boundariesNotice: 'মাধ্যম ১ এবং মাধ্যম ২-এর সংযোগস্থলে ইন্টারফেস শর্তাবলি:',
      eTanLabel: 'স্পর্শকীয় তড়িৎ ক্ষেত্র ধারাবাহিকতা:',
      eTanFormula: 'E₁_t = E₂_t',
      eTanDesc: 'ইন্টারফেসে স্পর্শকীয় তড়িৎ ক্ষেত্রের কোনো পরিবর্তন হয় না।',
      hTanLabel: 'স্পর্শকীয় চৌম্বক ক্ষেত্র শর্ত:',
      hTanFormula: 'H₁_t - H₂_t = K_s (পৃষ্ঠ কারেন্ট)',
      hTanDesc: 'সারফেস কারেন্ট K_s না থাকলে H₁_t = H₂_t।',
      dNormLabel: 'অভিলম্ব তড়িৎ ফ্লাক্স বিচ্ছিন্নতা:',
      dNormFormula: 'D₁_n - D₂_n = ρ_s (পৃষ্ঠ মুক্ত আধান)',
      dNormDesc: 'গাউসীয় পিলবক্স প্রমাণ করে D-এর লাফ মুক্ত তল আধান ρ_s-এর সমান।',
      bNormLabel: 'অভিলম্ব চৌম্বক ফ্লাক্স ধারাবাহিকতা:',
      bNormFormula: 'B₁_n = B₂_n',
      bNormDesc: 'চৌম্বক বলরেখার শুরু বা শেষ নেই; তাই অভিলম্ব B সর্বদা নিরবচ্ছিন্ন!'
    }
  }[currentLanguage] || {
    title: 'Maxwell’s Four Fundamental Equations & Boundary Conditions',
    subtitle: 'The master unification of electromagnetism',
    equationsTab: 'Four Maxwell Equations',
    boundariesTab: 'Material Boundary Conditions',
    diffTitle: 'Differential Form:',
    intTitle: 'Integral Form:',
    sourceTitle: 'Source Entity:',
    fieldTitle: 'Governed Field:',
    physicalTitle: 'Physical Significance:',
    boundariesNotice: 'Interface Boundary Conditions Between Media:',
    eTanLabel: 'Tangential E Continuity:',
    eTanFormula: 'E₁_t = E₂_t',
    eTanDesc: 'Tangential electric field is always continuous.',
    hTanLabel: 'Tangential H Relation:',
    hTanFormula: 'H₁_t - H₂_t = K_s',
    hTanDesc: 'Discontinuous if surface conduction current exists.',
    dNormLabel: 'Normal D Relation:',
    dNormFormula: 'D₁_n - D₂_n = ρ_s',
    dNormDesc: 'Discontinuous by surface charge density.',
    bNormLabel: 'Normal B Continuity:',
    bNormFormula: 'B₁_n = B₂_n',
    bNormDesc: 'Normal B is strictly continuous across all interfaces.'
  };

  const currEq = eqDetails[selectedEq];

  return (
    <div
      className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 text-white shadow-xl max-w-4xl mx-auto"
      id="simulation-maxwell-equations"
      role="region"
      aria-label="Maxwell's Equations Explorer Simulation"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-3 mb-4 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-indigo-950/80 border border-indigo-700/50 text-indigo-400">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">{labels.title}</h3>
            <p className="text-xs text-slate-400">{labels.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Top View Selector: Equations vs Boundary Conditions */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <button
          type="button"
          onClick={() => setViewMode('equations')}
          className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 border transition-all ${
            viewMode === 'equations'
              ? 'bg-indigo-950/80 border-indigo-500 text-indigo-200'
              : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          <Layers className="w-4 h-4 text-indigo-400" />
          <span>{labels.equationsTab}</span>
        </button>
        <button
          type="button"
          onClick={() => setViewMode('boundaries')}
          className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 border transition-all ${
            viewMode === 'boundaries'
              ? 'bg-cyan-950/80 border-cyan-500 text-cyan-200'
              : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          <SplitSquareVertical className="w-4 h-4 text-cyan-400" />
          <span>{labels.boundariesTab}</span>
        </button>
      </div>

      {viewMode === 'equations' ? (
        <div>
          {/* 4 Equation Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
            <button
              type="button"
              onClick={() => setSelectedEq('gauss-e')}
              className={`p-2.5 rounded-lg border text-left transition-all ${
                selectedEq === 'gauss-e'
                  ? 'bg-cyan-950/70 border-cyan-500 text-cyan-200'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="text-[10px] uppercase font-bold text-slate-400">1. Gauss Elec</div>
              <div className="text-xs font-mono font-bold text-cyan-400 mt-1">∇ · D = ρ_v</div>
            </button>

            <button
              type="button"
              onClick={() => setSelectedEq('gauss-m')}
              className={`p-2.5 rounded-lg border text-left transition-all ${
                selectedEq === 'gauss-m'
                  ? 'bg-purple-950/70 border-purple-500 text-purple-200'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="text-[10px] uppercase font-bold text-slate-400">2. Gauss Mag</div>
              <div className="text-xs font-mono font-bold text-purple-400 mt-1">∇ · B = 0</div>
            </button>

            <button
              type="button"
              onClick={() => setSelectedEq('faraday')}
              className={`p-2.5 rounded-lg border text-left transition-all ${
                selectedEq === 'faraday'
                  ? 'bg-sky-950/70 border-sky-500 text-sky-200'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="text-[10px] uppercase font-bold text-slate-400">3. Faraday</div>
              <div className="text-xs font-mono font-bold text-sky-400 mt-1">∇ × E = -∂B/∂t</div>
            </button>

            <button
              type="button"
              onClick={() => setSelectedEq('ampere-maxwell')}
              className={`p-2.5 rounded-lg border text-left transition-all ${
                selectedEq === 'ampere-maxwell'
                  ? 'bg-amber-950/70 border-amber-500 text-amber-200'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="text-[10px] uppercase font-bold text-slate-400">4. Ampere-Maxwell</div>
              <div className="text-xs font-mono font-bold text-amber-400 mt-1">∇ × H = J + ∂D/∂t</div>
            </button>
          </div>

          {/* Detailed Display of Selected Equation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800 mb-4">
            {/* Mathematical Formulas */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>{currEq.title}</span>
              </h4>

              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase">{labels.diffTitle}</span>
                <div className="text-base font-mono font-bold text-cyan-300">{currEq.diffForm}</div>
                <div className="text-xs font-mono text-slate-400">{currEq.diffAlt}</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase">{labels.intTitle}</span>
                <div className="text-base font-mono font-bold text-emerald-300">{currEq.intForm}</div>
                <div className="text-xs font-mono text-slate-400">{currEq.intAlt}</div>
              </div>
            </div>

            {/* Physical Meaning and Source */}
            <div className="space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                  <span className="text-slate-400 block mb-0.5">{labels.sourceTitle}</span>
                  <span className="text-white font-semibold font-mono">{currEq.source}</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                  <span className="text-slate-400 block mb-0.5">{labels.fieldTitle}</span>
                  <span className="text-cyan-300 font-semibold font-mono">{currEq.field}</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                <span className="text-amber-400 font-bold block mb-1">{labels.physicalTitle}</span>
                {currEq.physicalMeaning}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Boundary Conditions View */
        <div className="space-y-4">
          <div className="text-xs text-slate-300 mb-2">
            {labels.boundariesNotice}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* E-tangential */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-cyan-400">{labels.eTanLabel}</div>
              <div className="text-lg font-mono font-bold text-cyan-300 p-2 rounded bg-slate-900 border border-slate-800 text-center">
                {labels.eTanFormula}
              </div>
              <p className="text-[11px] text-slate-400">{labels.eTanDesc}</p>
            </div>

            {/* H-tangential */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-amber-400">{labels.hTanLabel}</div>
              <div className="text-lg font-mono font-bold text-amber-300 p-2 rounded bg-slate-900 border border-slate-800 text-center">
                {labels.hTanFormula}
              </div>
              <p className="text-[11px] text-slate-400">{labels.hTanDesc}</p>
            </div>

            {/* D-normal */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-emerald-400">{labels.dNormLabel}</div>
              <div className="text-lg font-mono font-bold text-emerald-300 p-2 rounded bg-slate-900 border border-slate-800 text-center">
                {labels.dNormFormula}
              </div>
              <p className="text-[11px] text-slate-400">{labels.dNormDesc}</p>
            </div>

            {/* B-normal */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-purple-400">{labels.bNormLabel}</div>
              <div className="text-lg font-mono font-bold text-purple-300 p-2 rounded bg-slate-900 border border-slate-800 text-center">
                {labels.bNormFormula}
              </div>
              <p className="text-[11px] text-slate-400">{labels.bNormDesc}</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer Banner */}
      <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
        <span className="font-mono text-cyan-400">Wave Speed: c = 1 / √(μ₀ε₀) ≈ 2.998 × 10⁸ m/s</span>
        <span className="font-mono text-amber-400">Intrinsic Impedance: η₀ = √(μ₀/ε₀) ≈ 376.73 Ω</span>
      </div>
    </div>
  );
};
