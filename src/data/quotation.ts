// PLACEHOLDER PRICING — replace the services, prices and milestones below with
// the client-approved list. Everything on the quotation page and in the
// generated PDF is driven from this file.

export interface QuoteService {
  id: string;
  title: string;
  /** Short line shown under the title, e.g. "8 chapters" */
  subtitle?: string;
  /** "Included work" text printed in the PDF scope table */
  description: string;
  /** Price in INR for one unit */
  price: number;
  /** When set, the user can pick a quantity (e.g. "paper" → "3 papers") */
  unitLabel?: string;
  maxQuantity?: number;
}

export interface InstallmentStep {
  milestone: string;
  /** Fraction of the total fee; all steps must add up to 1 */
  share: number;
}

export const quoteServices: QuoteService[] = [
  {
    id: "synopsis",
    title: "Synopsis",
    description:
      "Prepared according to the applicable university guidelines/template. May include title, background, problem statement, rationale, research gap, aim and objectives, research questions/hypotheses, brief literature review, proposed methodology, scope/significance, expected outcomes, timeline and references.",
    price: 10000,
  },
  {
    id: "thesis",
    title: "Complete Thesis",
    subtitle: "Up to 8 chapters",
    description:
      "Structured according to the university-approved format. Depending on the discipline and approved outline, this may cover introduction, literature review, research methodology, results/data analysis, discussion, findings, conclusion/recommendations, references and appendices.",
    price: 40000,
  },
  {
    id: "research-paper",
    title: "Research Paper",
    subtitle: "For Scopus-indexed journals",
    description:
      "Research paper intended for submission to a Scopus-indexed journal. Topic, paper type, target journal, data/materials, author requirements and journal format are confirmed before drafting begins.",
    price: 7000,
    unitLabel: "paper",
    maxQuantity: 5,
  },
  {
    id: "review-paper",
    title: "Review Paper / SLR",
    subtitle: "PRISMA-based systematic review",
    description:
      "Systematic or narrative review paper including search protocol, screening, quality assessment, thematic synthesis and future research agenda, formatted for the target journal.",
    price: 12000,
    unitLabel: "paper",
    maxQuantity: 5,
  },
  {
    id: "data-analysis",
    title: "Data Analysis",
    subtitle: "SPSS, AMOS, SmartPLS, R, Python",
    description:
      "Statistical analysis of the supplied dataset using tools appropriate to the research design, with result tables, figures and interpretation.",
    price: 8000,
  },
  {
    id: "plagiarism-ai-reduction",
    title: "Plagiarism & AI Content Reduction",
    subtitle: "Per chapter / document",
    description:
      "Rewriting of flagged sections to reduce similarity and AI-writing indicators, with a Turnitin report where available.",
    price: 3000,
    unitLabel: "document",
    maxQuantity: 10,
  },
];

export const installmentPlan: InstallmentStep[] = [
  { milestone: "On confirmation of the quotation", share: 0.25 },
  { milestone: "After approval of the first deliverable / outline", share: 0.25 },
  { milestone: "At the mid-project milestone", share: 0.25 },
  { milestone: "Before final delivery", share: 0.25 },
];

export const QUOTE_VALIDITY_DAYS = 15;

export const includedSupport: string[] = [
  "All deliverables will be supplied as soft copies in Microsoft Word (.docx) and/or PDF format, as applicable.",
  "Citations and reference list formatting will follow the university guidelines or the agreed target-journal style.",
  "Turnitin similarity and AI-writing reports will be provided where available. A below-15% target is requested; actual results depend on content and report settings, so a specific score cannot be guaranteed.",
  "Unlimited reasonable corrections within the agreed scope, including revisions based on supervisor feedback. Major changes to topic, methodology, approved scope or supplied data may affect the fee and timeline.",
  "Google Meet discussion with the assigned writer can be arranged when required, subject to mutual availability and reasonable notice.",
];

export const quotationTerms: string[] = [
  "This is an indicative quotation generated online. The final scope, fee and schedule are confirmed only after Research Hub reviews your requirements and confirms them in writing.",
  "The client remains responsible for the accuracy of information supplied, required institutional approvals, ethical conduct, and compliance with university and journal rules.",
  "Journal submission/publication fees, article processing charges (APCs), paid datasets, fieldwork, survey administration, translation and other third-party expenses are excluded unless separately agreed in writing.",
  "Research Hub does not guarantee a particular Turnitin similarity/AI score, Scopus indexing at the time of publication, journal acceptance, or publication by a specific date.",
  "Delays in client inputs, approvals, feedback, data or payments may affect the timeline; any changes will be discussed and confirmed in writing.",
];
