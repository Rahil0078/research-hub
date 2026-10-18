export interface AcademicResource {
  id: string;
  slug: string;
  title: string;
  category: "Dissertation" | "Literature Review" | "Data Analysis" | "Publishing" | "Ethics";
  readTime: string;
  description: string;
  summary: string;
  keyPoints: string[];
  downloadable?: string;
}

export const academicResources: AcademicResource[] = [
  {
    id: "prisma-2020-guide",
    slug: "prisma-2020-systematic-literature-review-guide",
    title: "PRISMA 2020 Systematic Literature Review: A Step-by-Step Practical Guide",
    category: "Literature Review",
    readTime: "7 min read",
    description: "Master the 27-item checklist and 4-phase flow diagram required for publishable systematic reviews.",
    summary:
      "The Preferred Reporting Items for Systematic Reviews and Meta-Analyses (PRISMA) 2020 statement is the gold standard for medical, social science, and engineering reviews. This guide walks you through Boolean query design, deduplication, screening, risk-of-bias tools, and synthesis matrices.",
    keyPoints: [
      "Defining clear PICO/PECO or SPIDER eligibility criteria",
      "Formulating reproducible search strings for Scopus, WoS, and PubMed",
      "Handling grey literature and pre-print screening",
      "Documenting study attrition through the updated 4-stage PRISMA flow chart",
    ],
    downloadable: "PRISMA_2020_Checklist_Template.pdf",
  },
  {
    id: "dissertation-chapter-checklist",
    slug: "doctoral-dissertation-chapter-blueprint-checklist",
    title: "The 5-Chapter Doctoral Dissertation Structure: Comprehensive Blueprint",
    category: "Dissertation",
    readTime: "9 min read",
    description: "An exhaustive breakdown of Chapters 1 to 5 with supervisor-proven checklists for each chapter.",
    summary:
      "A complete architectural guide to structuring Introduction (Ch 1), Literature Review (Ch 2), Methodology (Ch 3), Results & Findings (Ch 4), and Discussion & Implications (Ch 5) according to international university standards.",
    keyPoints: [
      "Crafting an undeniable research problem statement and theoretical framework",
      "Avoiding the common trap of descriptive summaries in literature reviews",
      "Defending sample size, reliability (Cronbach's Alpha), and validity measures",
      "Aligning empirical findings with foundational theories in the discussion chapter",
    ],
    downloadable: "Doctoral_Dissertation_Chapter_Blueprint.pdf",
  },
  {
    id: "statistical-decision-tree",
    slug: "statistical-test-selection-decision-tree",
    title: "Statistical Test Selection: Choosing Between Parametric & Non-Parametric Models",
    category: "Data Analysis",
    readTime: "6 min read",
    description: "How to accurately select between t-tests, ANOVA, Mann-Whitney, Kruskal-Wallis, regression, and PLS-SEM.",
    summary:
      "Selecting the wrong statistical technique is one of the most common reasons for examiner revision requests. Learn how to verify normality (Shapiro-Wilk), homoscedasticity, sample size thresholds, and measurement scale types.",
    keyPoints: [
      "Step-by-step diagnostic verification before running inferential statistics",
      "When to choose PLS-SEM over CB-SEM (AMOS vs SmartPLS)",
      "Reporting effect sizes, confidence intervals, and p-values in APA 7th style",
      "Qualitative coding frameworks using NVivo for thematic saturation",
    ],
    downloadable: "Statistical_Methodology_Selection_Matrix.pdf",
  },
  {
    id: "scopus-journal-selection",
    slug: "how-to-choose-the-right-scopus-journal-and-avoid-predatory-publishers",
    title: "Navigating Scopus & Web of Science: Avoid Predatory Journals & Target High-Impact Venues",
    category: "Publishing",
    readTime: "8 min read",
    description: "Essential strategies to verify indexing credentials, analyze acceptance rates, and calculate APCs.",
    summary:
      "Predatory publishers exploit researchers with counterfeit indexing claims. This guide shows how to authenticate journals directly on Scopus preview, the Clarivate Master Journal List, and DOAJ to protect your academic reputation.",
    keyPoints: [
      "Recognizing hijacked journals and hijacked clones",
      "Understanding CiteScore, SNIP, SJR, and Journal Impact Factor (JIF)",
      "Drafting an impactful cover letter to the Editor-in-Chief",
      "Structuring constructive point-by-point rebuttal responses to reviewers",
    ],
    downloadable: "Journal_Evaluation_Checklist.pdf",
  },
];
