export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  badge?: string;
  iconName: string;
  tagline: string;
  overview: string;
  benefits: string[];
  deliverables: string[];
  methodology: { step: string; title: string; description: string }[];
  tools: string[];
  targetAudience: string[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "thesis-writing",
    slug: "thesis-writing",
    title: "Thesis Writing",
    shortDescription: "Complete support from topic selection to final submission.",
    badge: "Most Popular",
    iconName: "FileEdit",
    tagline: "End-to-End Academic Mentorship for Master's & Doctoral Candidates",
    overview:
      "Our PhD-qualified academic consultants assist you across every milestone of your dissertation — from formulating a novel research problem, literature gap identification, and rigorous theoretical frameworks, through data collection, empirical findings, and academic defense preparation.",
    benefits: [
      "Assistance aligned with university-specific guidelines (APA, Harvard, IEEE, Chicago, MLA)",
      "Zero plagiarism guarantee with verified Turnitin similarity report (< 10%)",
      "Unlimited revisions until university committee or supervisor approval",
      "One-on-one consultation with 10+ years experienced subject-matter domain specialists",
    ],
    deliverables: [
      "Well-defined problem statement, research questions, and hypotheses",
      "Comprehensive chapter-by-chapter drafts (Chapters 1 to 5)",
      "Full bibliographic referencing and citation management in Mendeley/Zotero",
      "Viva Voce / defense presentation deck (PowerPoint with speaker notes)",
    ],
    methodology: [
      {
        step: "01",
        title: "Topic Feasibility & Proposal",
        description:
          "We evaluate research novelty, data availability, and supervisor expectations to finalize a viable thesis topic.",
      },
      {
        step: "02",
        title: "Literature Gap & Framework",
        description:
          "Synthesizing high-impact Q1/Q2 peer-reviewed studies to anchor the conceptual and theoretical framework.",
      },
      {
        step: "03",
        title: "Methodology & Empirical Execution",
        description:
          "Formulating sampling strategies, instrument design, empirical testing, and robust statistical analysis.",
      },
      {
        step: "04",
        title: "Discussion, Implications & Defense",
        description:
          "Synthesizing findings against published literature, highlighting limitations, policy implications, and viva readiness.",
      },
    ],
    tools: ["SPSS", "AMOS", "R / RStudio", "Python", "NVivo", "Mendeley", "Zotero", "LaTeX", "Turnitin"],
    targetAudience: ["PhD Scholars", "Doctor of Business Administration (DBA)", "M.Tech / M.S. Candidates", "Master's Students"],
    faqs: [
      {
        question: "Can I get chapter-wise delivery and reviews?",
        answer:
          "Yes! We work iteratively. You receive Chapter 1 first, get supervisor feedback, incorporate revisions, and only proceed once approved.",
      },
      {
        question: "How do you ensure 100% academic confidentiality?",
        answer:
          "All consultations are bound by non-disclosure agreements (NDAs). Your research files, personal details, and data are strictly encrypted and never shared or republished.",
      },
      {
        question: "Do you assist with university defense (viva voce)?",
        answer:
          "Absolutely. We prepare slide decks, potential examiner questions, methodological justifications, and conduct mock defense sessions.",
      },
    ],
  },
  {
    id: "research-paper-writing",
    slug: "research-paper-writing",
    title: "Research Paper Writing",
    shortDescription: "High-impact original empirical and experimental paper drafting.",
    badge: "Q1/Q2 Standard",
    iconName: "PenTool",
    tagline: "Empirical, Experimental & Theoretical Manuscripts for Indexed Journals",
    overview:
      "We help researchers conceptualize, structure, and articulate original research papers that meet the rigorous standards of high-impact indexed journals. From mathematical formulations and empirical validation to clear scholarly prose.",
    benefits: [
      "Rigorous structural flow following IMRAD (Introduction, Methods, Results, and Discussion)",
      "Novel contribution highlighting to grab reviewers' and editors' attention",
      "Native academic English phrasing with zero grammatical ambiguity",
      "Tailored to target journal formatting guidelines (Elsevier, Springer, Wiley, IEEE, Taylor & Francis)",
    ],
    deliverables: [
      "Complete original research paper manuscript ready for submission",
      "Publication-quality figures, diagrams, and statistical tables",
      "Graphical Abstract and Highlight points as required by top journals",
      "Turnitin similarity report confirming originality",
    ],
    methodology: [
      {
        step: "01",
        title: "Novelty & Scope Formulation",
        description: "Assessing research objectives against state-of-the-art literature to identify unique contributions.",
      },
      {
        step: "02",
        title: "Data & Methodology Articulation",
        description: "Detailing experimental setups, datasets, mathematical proofs, or survey instruments with reproducibility in mind.",
      },
      {
        step: "03",
        title: "Results & Comparative Discussion",
        description: "Benchmarking findings against existing models, illustrating improvements and theoretical implications.",
      },
      {
        step: "04",
        title: "Pre-Submission Peer Review",
        description: "Internal peer review by doctoral editors to eliminate potential desk-rejection reasons.",
      },
    ],
    tools: ["LaTeX / Overleaf", "OriginPro", "MATLAB", "Python", "RStudio", "Turnitin", "Zotero"],
    targetAudience: ["Doctoral Researchers", "Faculty Members", "Postdoctoral Fellows", "Independent Scholars"],
    faqs: [
      {
        question: "Can you write according to LaTeX journal templates?",
        answer: "Yes, our technical writers can work directly in Overleaf or provide clean, compiled LaTeX source bundles with BibTeX files.",
      },
    ],
  },
  {
    id: "review-paper-writing",
    slug: "review-paper-writing",
    title: "Review Paper Writing",
    shortDescription: "In-depth literature search, analysis and documentation (SLR).",
    badge: "PRISMA 2020",
    iconName: "Layers",
    tagline: "Systematic Literature Reviews (SLR) & Narrative Syntheses",
    overview:
      "A rigorous Systematic Literature Review (SLR) requires strict adherence to international protocols like PRISMA 2020. Our bibliometric and content synthesis specialists curate literature from Scopus, Web of Science, and PubMed to build reproducible, publication-ready review papers.",
    benefits: [
      "PRISMA 2020 flowchart generation and protocol pre-registration support (PROSPERO / OSF)",
      "Multi-database search string formulation with Boolean operators",
      "Thematic synthesis matrix, quality assessment, and critical appraisal",
      "High citation potential as review papers generate significant scholarly impact",
    ],
    deliverables: [
      "Complete publishable SLR manuscript with structured abstract and discussion",
      "PRISMA selection flow diagram and inclusion/exclusion matrix",
      "Comprehensive search query logs across Scopus, Web of Science, PubMed, etc.",
      "Synthesis tables categorizing themes, methodologies, and research gaps",
    ],
    methodology: [
      {
        step: "01",
        title: "Protocol & PICO Criteria",
        description: "Defining research questions (PICO / SPIDER criteria), eligibility rules, and databases.",
      },
      {
        step: "02",
        title: "Systematic Multi-Database Search",
        description: "Executing reproducible queries and eliminating duplicates using automated and manual screening.",
      },
      {
        step: "03",
        title: "Quality Assessment & Risk of Bias",
        description: "Evaluating study validity using Cochrane, Newcastle-Ottawa, or JBI assessment tools.",
      },
      {
        step: "04",
        title: "Thematic Synthesis & Future Agenda",
        description: "Integrating qualitative insights into comprehensive thematic frameworks with future research directions.",
      },
    ],
    tools: ["Covidence", "Rayyan", "Scopus", "Web of Science", "PubMed", "Mendeley"],
    targetAudience: ["PhD Scholars", "Clinical Researchers", "Postgraduates", "Faculty Seeking Scopus Reviews"],
    faqs: [
      {
        question: "Is PRISMA compliance guaranteed?",
        answer: "Yes, every systematic review follows the official PRISMA 2020 27-item checklist and flow diagram.",
      },
    ],
  },
  {
    id: "bibliometric-paper-writing",
    slug: "bibliometric-paper-writing",
    title: "Bibliometric Paper Writing",
    shortDescription: "Science mapping, co-citation, co-occurrence and thematic evolution.",
    badge: "High Citation",
    iconName: "BarChart3",
    tagline: "Quantitative Science Mapping Using VOSviewer, Biblioshiny & SciMAT",
    overview:
      "Bibliometric analysis has emerged as one of the most effective, high-yield ways to publish in Scopus Q1/Q2 journals. We extract metadata from Scopus / Web of Science and construct insightful co-authorship networks, keyword co-occurrence maps, co-citation clusters, and thematic evolution charts.",
    benefits: [
      "Publication-ready high-resolution network visualizations (VOSviewer & Biblioshiny)",
      "Comprehensive metric extraction: h-index, Bradford's Law, Lotka's Law, and thematic maps",
      "Identification of emerging research fronts, dominant authors, and institutional networks",
      "Fast turnaround and high acceptance rate in leading indexed journals",
    ],
    deliverables: [
      "Cleaned corpus dataset from Scopus / Clarivate Web of Science (.bib / .csv)",
      "High-res network visualization figures (density, overlay, and cluster maps)",
      "Comprehensive thematic progression tables and motor/niche theme quadrant charts",
      "Complete draft formatted for target journal submission",
    ],
    methodology: [
      {
        step: "01",
        title: "Database Query Design",
        description: "Calibrating search strings in Scopus/WoS to capture all relevant publications without noise.",
      },
      {
        step: "02",
        title: "Data Cleaning & Harmonization",
        description: "Standardizing author names, merging synonym keywords, and filtering irrelevant documents.",
      },
      {
        step: "03",
        title: "Network & Thematic Mapping",
        description: "Generating co-citation, bibliographic coupling, and thematic evolution diagrams in VOSviewer/R.",
      },
      {
        step: "04",
        title: "In-Depth Scholarly Narrative",
        description: "Explaining the structural and temporal dynamics of the research field with actionable insights.",
      },
    ],
    tools: ["VOSviewer", "Bibliometrix (Biblioshiny in R)", "CiteSpace", "SciMAT", "Gephi", "Scopus", "Web of Science"],
    targetAudience: ["Doctoral Researchers", "Early Career Academics", "Professors", "Research Scholars"],
    faqs: [
      {
        question: "Why should I publish a bibliometric paper?",
        answer: "Bibliometric papers provide a quantitative roadmap of an entire field, making them highly cited and attractive to journal editors.",
      },
    ],
  },
  {
    id: "book-writing",
    slug: "book-writing",
    title: "Book Writing",
    shortDescription: "Academic book chapters, edited volumes, monographs & ISBN publication.",
    badge: "Scholarly Books",
    iconName: "BookOpen",
    tagline: "Academic Monographs, Edited Collections & Textbook Development",
    overview:
      "Publishing academic books and book chapters cements scholarly authority and contributes substantially to API scores and academic promotions. We assist authors and editors in drafting book proposals, structuring book chapters, peer-editing manuscripts, and coordinating with premier publishers (Springer, Routledge, CRC Press, IGI Global).",
    benefits: [
      "Assistance with Book Proposals to prestigious international and national publishers",
      "Chapter drafting, academic literature integration, and pedagogical structure",
      "Formatting compliance with publisher-specific style sheets",
      "Support for Edited Books: Call for Chapters (CFP), peer review, and manuscript compilation",
    ],
    deliverables: [
      "Comprehensive Book Proposal (aims, scope, market analysis, TOC)",
      "Fully written and referenced book chapters with index terms",
      "Foreword, preface, and introductory framework",
      "Complete camera-ready manuscript ready for publisher review",
    ],
    methodology: [
      {
        step: "01",
        title: "Book Concept & Scope",
        description: "Defining book theme, target audience, publisher fit, and table of contents.",
      },
      {
        step: "02",
        title: "Publisher Proposal Submission",
        description: "Preparing persuasive book proposals that satisfy commissioning editors.",
      },
      {
        step: "03",
        title: "Chapter Writing & Synthesis",
        description: "Drafting chapters with comprehensive theoretical context and scholarly depth.",
      },
      {
        step: "04",
        title: "Consolidated Index & Final Proofs",
        description: "Formatting citations, cross-references, glossary, and final production review.",
      },
    ],
    tools: ["Microsoft Word", "EndNote", "Zotero", "Grammarly Business", "Turnitin"],
    targetAudience: ["Senior Faculty", "Subject Specialists", "Department Heads", "Monograph Authors"],
    faqs: [
      {
        question: "Can you help me submit to publishers like Springer or Routledge?",
        answer: "Yes, we prepare customized book proposals adhering strictly to publisher guidelines and assist with chapter compilation.",
      },
    ],
  },
  {
    id: "paper-publication",
    slug: "paper-publication",
    title: "Paper Publication",
    shortDescription: "Journal selection, formatting and submission guidance.",
    badge: "Scopus & SCI/SCIE",
    iconName: "ShieldCheck",
    tagline: "Strategic Guidance to Get Your Paper Published in Reputable Journals",
    overview:
      "Navigating the academic publishing landscape can be daunting. We guide you through journal shortlisting (avoiding predatory publications), journal manuscript styling, cover letter crafting, and navigating peer reviewer comments.",
    benefits: [
      "Identification of indexed journals matching your paper scope (Scopus Q1/Q2, Web of Science, ABDC, UGC-CARE)",
      "Manuscript reformatting to exact journal author guidelines",
      "Professional response letter formulation to address peer reviewers and editors",
      "Check against predatory publishers and paper mills to protect academic reputation",
    ],
    deliverables: [
      "Journal selection report with impact factor, review turnaround time, and APC details",
      "Re-styled manuscript strictly following target journal's guidelines",
      "Persuasive Editor-in-Chief cover letter",
      "Point-by-point reviewer rebuttal response letter",
    ],
    methodology: [
      {
        step: "01",
        title: "Manuscript Diagnostic & Scope Fit",
        description: "Evaluating paper strength, novelty, and suitability for indexed venues.",
      },
      {
        step: "02",
        title: "Journal Shortlisting Matrix",
        description: "Curating 3 to 5 verified target journals with verified indexing credentials.",
      },
      {
        step: "03",
        title: "Manuscript Styling & Letter Crafting",
        description: "Applying strict author guidelines, reference formats, and drafting cover letters.",
      },
      {
        step: "04",
        title: "Reviewer Comment Handling",
        description: "Structuring constructive, respectful rebuttal responses and tracking necessary revisions.",
      },
    ],
    tools: ["Scopus Database", "Clarivate Master Journal List", "DOAJ", "Journal Citation Reports", "Zotero"],
    targetAudience: ["Doctoral Researchers", "Faculty Members seeking promotion", "Postgraduates", "Clinicians"],
    faqs: [
      {
        question: "Do you guarantee publication in Scopus or SCI journals?",
        answer:
          "Acceptance ultimately rests with independent journal peer review. However, our rigorous pre-submission preparation, journal matching, and reviewer rebuttal assistance maximize your probability of acceptance.",
      },
    ],
  },
  {
    id: "data-analysis",
    slug: "data-analysis-interpretation",
    title: "Data Analysis & Interpretation",
    shortDescription: "Statistical analysis, visualization and result interpretation.",
    badge: "High Precision",
    iconName: "BarChart3",
    tagline: "Advanced Statistical, Econometric & Qualitative Analysis",
    overview:
      "Transforming raw numbers into academically robust conclusions. Our senior statisticians handle survey data, experimental trials, financial time-series, and qualitative interviews using state-of-the-art software, providing publication-standard tables, charts, and plain-English interpretations.",
    benefits: [
      "Support for quantitative, qualitative (thematic), and mixed-methods research",
      "Reliability, validity, normality, and multicollinearity diagnostic testing",
      "APA-formatted tables with complete hypothesis testing explanations",
      "Raw code and reproducible scripts provided (R script, Python notebooks, SPSS syntax)",
    ],
    deliverables: [
      "Cleaned, coded dataset with variable definitions",
      "Comprehensive descriptive and inferential statistics report",
      "High-resolution visualizations (scatterplots, path models, heatmaps)",
      "Narrative chapter draft explaining findings and theoretical confirmation/rejection",
    ],
    methodology: [
      {
        step: "01",
        title: "Data Screening & Preparation",
        description: "Outlier screening, missing value imputation, normality assessment, and coding checks.",
      },
      {
        step: "02",
        title: "Model Specification & Testing",
        description: "Executing regression, ANOVA, SEM (SmartPLS / AMOS), time series, or thematic coding.",
      },
      {
        step: "03",
        title: "Result Tabulation & Visualization",
        description: "Formatting coefficients, p-values, R-squared values, and creating clear graphs.",
      },
      {
        step: "04",
        title: "Academic Interpretation",
        description: "Translating statistical outcomes into clear, meaningful academic narrative.",
      },
    ],
    tools: ["SPSS", "SmartPLS", "AMOS", "R / RStudio", "Python (Pandas / Scipy)", "Stata", "NVivo", "ATLAS.ti"],
    targetAudience: ["Doctoral Researchers", "Clinical Trialists", "Social Science Researchers", "Market Researchers"],
    faqs: [
      {
        question: "Do you supply the raw analysis files so I can explain them to my guide?",
        answer:
          "Yes. You receive full SPSS datasets, syntax files, SmartPLS project files, or R/Python notebooks along with step-by-step notes.",
      },
    ],
  },
  {
    id: "plagiarism-removal",
    slug: "plagiarism-check-removal",
    title: "Plagiarism Check & Removal",
    shortDescription: "Ensure originality with detailed similarity reports and improvement.",
    badge: "100% Originality",
    iconName: "ShieldCheck",
    tagline: "Authentic Paraphrasing & Turnitin Similarity Reduction Without Meaning Loss",
    overview:
      "Maintain flawless academic integrity. We scan your documents with university-standard similarity detection systems and have subject specialists manually paraphrase overlapping sections, restructuring ideas so the original scholarly meaning is heightened.",
    benefits: [
      "Originality reports using non-repository Turnitin checking (your document is NEVER saved in the database)",
      "Manual academic rewriting by domain experts — NO robotic AI spinners or bot rewriters",
      "AI-generated content detection and humanization to meet stringent university standards",
      "Verification of proper citation, attribution, and quotation usage",
    ],
    deliverables: [
      "Initial highlighted similarity report identifying overlapping passages",
      "Expertly rewritten manuscript with reduced similarity (< 10% or custom university target)",
      "Final Turnitin similarity report confirming acceptable similarity index",
      "Certificate of Academic Originality",
    ],
    methodology: [
      {
        step: "01",
        title: "Non-Repository Turnitin Scan",
        description: "Scanning your document safely without adding it to the institutional repository.",
      },
      {
        step: "02",
        title: "Similarity Breakdown & Attribution Audit",
        description: "Differentiating between acceptable citations/formulas and problematic text overlaps.",
      },
      {
        step: "03",
        title: "Manual Expert Paraphrasing",
        description: "Rewriting text from first principles to enhance academic vocabulary and syntax.",
      },
      {
        step: "04",
        title: "Final Verification Scan",
        description: "Re-scanning the revised work to deliver a clean similarity index and guarantee compliance.",
      },
    ],
    tools: ["Turnitin Non-Repository", "iThenticate", "Copyleaks", "Zotero", "Grammarly"],
    targetAudience: ["PhD Scholars before thesis submission", "Journal Authors", "Postgraduate Students", "Faculty"],
    faqs: [
      {
        question: "Will scanning my paper with you cause it to show 100% similarity later at my university?",
        answer:
          "NEVER. We strictly use a 'No-Repository' instructor account. Your document is scanned against global databases but is never stored in the Turnitin repository.",
      },
      {
        question: "Do you use automated rewriting software?",
        answer:
          "No! Automated tools ruin technical meaning and produce unreadable jargon. All paraphrasing is performed manually by human scholars with relevant subject backgrounds.",
      },
    ],
  },
];
