export interface ResearchDomain {
  id: string;
  slug: string;
  title: string;
  iconName: string;
  shortDescription: string;
  overview: string;
  subDisciplines: string[];
  sampleTopics: string[];
  commonMethodologies: string[];
  keyTools: string[];
}

export const researchDomainsData: ResearchDomain[] = [
  {
    id: "management-studies",
    slug: "management-studies",
    title: "Management Studies",
    iconName: "Building2",
    shortDescription: "Strategic Management, Finance, Marketing, HRM, Supply Chain & Entrepreneurship.",
    overview:
      "Management scholarship demands robust theoretical foundations (e.g., Resource-Based View, Institutional Theory, Agency Theory) combined with empirical rigor. Our senior consultants have guided over 600+ theses across top B-schools and universities worldwide.",
    subDisciplines: [
      "Strategic Management & Corporate Governance",
      "Financial Management, FinTech & Banking",
      "Human Resource Management (HRM) & Org Behavior",
      "Digital Marketing & Consumer Psychology",
      "Operations & Sustainable Supply Chain Management",
      "Entrepreneurship & Innovation Ecosystems",
      "International Business & Cross-Cultural Trade",
      "Hospital & Healthcare Administration",
    ],
    sampleTopics: [
      "Impact of ESG Reporting on Firm Valuation: Moderating Role of Board Independence",
      "Consumer Adoption of AI-Driven Recommendation Agents in Omnichannel Retail",
      "Sustainable Supply Chain Resilience in Post-Disruption Manufacturing",
      "Psychological Capital and Employee Retention in Remote Tech Workforces",
    ],
    commonMethodologies: ["Structural Equation Modeling (PLS-SEM & CB-SEM)", "Panel Data Regression", "Event Studies", "Qualitative Case Studies"],
    keyTools: ["SPSS", "SmartPLS 4", "AMOS", "Stata", "NVivo"],
  },
  {
    id: "computer-science-it",
    slug: "computer-science-it",
    title: "Computer Science & IT",
    iconName: "Monitor",
    shortDescription: "AI, Machine Learning, Cybersecurity, Cloud Computing, IoT & Software Engineering.",
    overview:
      "From cutting-edge deep learning architectures to decentralized security protocols and distributed cloud frameworks, our STEM mentors help design, implement, and document high-impact computational research.",
    subDisciplines: [
      "Artificial Intelligence & Deep Learning",
      "Natural Language Processing (LLMs & Transformers)",
      "Computer Vision & Multimodal Perception",
      "Cybersecurity, Cryptography & Blockchain",
      "Cloud Computing & Edge Computing Paradigms",
      "Internet of Things (IoT) & Smart Grid Networks",
      "Big Data Analytics & Distributed Systems",
      "Software Architecture & Agile Methodologies",
    ],
    sampleTopics: [
      "Explainable AI (XAI) Framework for Early Sepsis Detection in Intensive Care",
      "Lightweight Cryptographic Protocols for Resource-Constrained IoT Sensors",
      "Zero-Shot Multilingual Sentiment Analysis Using Domain-Adapted Transformers",
      "Anomaly Detection in Software-Defined Networks Using Graph Neural Networks",
    ],
    commonMethodologies: ["Empirical Algorithm Benchmarking", "Simulation & Emulation (NS3, Mininet)", "Ablation Studies", "A/B Testing"],
    keyTools: ["Python (PyTorch / TensorFlow)", "MATLAB", "LaTeX / Overleaf", "Docker", "Git"],
  },
  {
    id: "engineering-technology",
    slug: "engineering-technology",
    title: "Engineering & Technology",
    iconName: "Cpu",
    shortDescription: "Mechanical, Civil, Electrical, Robotics, Materials Science & Renewable Energy.",
    overview:
      "Empowering engineering researchers with numerical modeling, finite element analysis (FEA), computational fluid dynamics (CFD), and experimental design verification across core and interdisciplinary engineering streams.",
    subDisciplines: [
      "Thermal Engineering & Heat Transfer",
      "Structural Engineering & Earthquake Resilient Design",
      "Power Systems, Smart Grids & Electric Vehicles",
      "Robotics, Mechatronics & Autonomous Navigation",
      "Nanomaterials & Advanced Composite Fabrication",
      "Water Resource & Environmental Engineering",
      "Telecommunications & 5G/6G Wireless Networks",
      "Biomedical Engineering & Bio-Instrumentation",
    ],
    sampleTopics: [
      "CFD Optimization of Microchannel Heat Sinks for EV Battery Thermal Management",
      "Performance Assessment of Geopolymer Concrete Utilizing Industrial Waste Slag",
      "Model Predictive Control for Multi-Source Hybrid Renewable Microgrids",
      "Fabrication and Mechanical Characterization of Carbon Nanotube Reinforced Polymer",
    ],
    commonMethodologies: ["Finite Element Analysis (FEA)", "Computational Fluid Dynamics (CFD)", "Taguchi Optimization / RSM", "Experimental Validation"],
    keyTools: ["ANSYS (Fluent / Mechanical)", "MATLAB / Simulink", "AutoCAD / SolidWorks", "OriginPro"],
  },
  {
    id: "social-sciences",
    slug: "social-sciences",
    title: "Social Sciences",
    iconName: "Landmark",
    shortDescription: "Economics, Sociology, Political Science, Psychology & International Relations.",
    overview:
      "We help social science scholars investigate complex societal structures, behavioral phenomena, public policies, and cultural dynamics through balanced qualitative, quantitative, and mixed-methodological inquiry.",
    subDisciplines: [
      "Applied Economics & Econometrics",
      "Sociology & Community Development",
      "Cognitive & Clinical Psychology",
      "Public Policy, Governance & Administration",
      "International Relations & Geopolitical Studies",
      "Gender Studies & Social Inequality",
      "Anthropology & Cultural Ethnography",
      "Media, Communication & Journalism Studies",
    ],
    sampleTopics: [
      "Socio-Economic Impacts of Microfinance Programs on Rural Women's Empowerment",
      "Cognitive Behavioral Interventions for Adolescent Academic Stress in Urban Schools",
      "Geopolitical Implications of Central Bank Digital Currencies in Global Trade",
      "Digital Media Literacy and Political Polarization in Developing Democracies",
    ],
    commonMethodologies: ["Thematic Analysis", "Grounded Theory", "Phenomenology", "Econometric Time Series / GMM", "Survey Questionnaires"],
    keyTools: ["NVivo", "ATLAS.ti", "SPSS", "Stata", "MAXQDA"],
  },
  {
    id: "life-sciences-healthcare",
    slug: "life-sciences-healthcare",
    title: "Life Sciences & Healthcare",
    iconName: "HeartPulse",
    shortDescription: "Medicine, Public Health, Nursing, Pharmacy, Biotechnology & Bioinformatics.",
    overview:
      "Clinical and life sciences studies require meticulous ethics compliance, rigorous study protocols, and strict statistical verification. We guide health researchers from retrospective audits to systematic reviews and pharmacological investigations.",
    subDisciplines: [
      "Clinical Medicine & Surgery",
      "Public Health, Epidemiology & Preventive Medicine",
      "Nursing Practice & Healthcare Systems",
      "Pharmacology, Drug Delivery & Formulation",
      "Biotechnology & Molecular Biology",
      "Bioinformatics & Genomic Data Science",
      "Microbiology & Infectious Diseases",
      "Nutrition & Dietetics Research",
    ],
    sampleTopics: [
      "Systematic Review and Meta-Analysis of SGLT2 Inhibitors in Diabetic Nephropathy",
      "Assessing Vaccine Hesitancy Factors Across Vulnerable Rural Populations",
      "Nanostructured Lipid Carriers for Targeted Dermal Drug Delivery",
      "In Silico Screening and Molecular Docking of Bioactive Phytochemicals Against Cancer Targets",
    ],
    commonMethodologies: ["Systematic Review & Meta-Analysis (PRISMA)", "Survival Analysis (Kaplan-Meier, Cox Proportional)", "In Silico Molecular Docking", "Randomized Controlled Trial (RCT) Protocols"],
    keyTools: ["RevMan", "GraphPad Prism", "AutoDock Vina", "R / Bioconductor", "PyMOL"],
  },
  {
    id: "arts-humanities",
    slug: "arts-humanities",
    title: "Arts & Humanities",
    iconName: "Palette",
    shortDescription: "Literature, History, Philosophy, Linguistics, Visual Arts & Cultural Studies.",
    overview:
      "Guiding scholars in developing persuasive arguments, close-reading critical analyses, historical archival investigations, and theoretical dissections across global literary traditions and cultural expressions.",
    subDisciplines: [
      "English Literature & Comparative Poetics",
      "Post-Colonial & Subaltern Studies",
      "Modern & Contemporary World History",
      "Applied Linguistics, Semiotics & Discourse Analysis",
      "Ethics, Metaphysics & Political Philosophy",
      "Art History, Visual Culture & Aesthetics",
      "Film Studies & Digital Narratology",
      "Religious & Inter-Faith Studies",
    ],
    sampleTopics: [
      "Eco-Critical Readings of Contemporary South Asian Climate Fiction",
      "Deconstruction of Identity and Diaspora in Post-War Immigrant Narratives",
      "Discourse Analysis of Institutional Power Structures in Higher Education Textbooks",
      "The Evolution of Visual Symbolism in Mid-Twentieth Century Avant-Garde Cinema",
    ],
    commonMethodologies: ["Close Reading & Textual Criticism", "Discourse & Corpus Analysis", "Archival Historiography", "Hermeneutic Phenomenology"],
    keyTools: ["AntConc", "Voyant Tools", "Zotero", "Mendeley"],
  },
  {
    id: "education",
    slug: "education",
    title: "Education",
    iconName: "GraduationCap",
    shortDescription: "Pedagogy, Educational Technology, Curriculum Design, Higher Ed & Assessment.",
    overview:
      "From pedagogical theory validation to classroom action research, instructional technology adoption, and special needs education, we provide comprehensive academic research assistance for educators and researchers.",
    subDisciplines: [
      "Curriculum Design & Instructional Strategies",
      "Educational Technology & E-Learning Platforms",
      "Assessment, Psychometrics & Student Evaluation",
      "Special Needs & Inclusive Education",
      "Higher Education Administration & Leadership",
      "Teacher Professional Development & Pedagogy",
      "Early Childhood Education & Child Development",
      "STEM Education & Inquiry-Based Learning",
    ],
    sampleTopics: [
      "Effectiveness of Gamified Learning Modules on High School STEM Conceptual Mastery",
      "Teachers' Preparedness and Perceptions of Inclusive Classrooms for Neurodivergent Learners",
      "Assessing the Long-Term Outcomes of HyFlex Modalities in Postgraduate Programs",
      "Impact of Formative Digital Quizzing on Self-Regulated Learning Behaviors",
    ],
    commonMethodologies: ["Action Research", "Quasi-Experimental Pre/Post Testing", "Mixed-Methods Evaluation", "Delphi Technique"],
    keyTools: ["SPSS", "Qualtrics", "Google Forms", "NVivo"],
  },
  {
    id: "law",
    slug: "law",
    title: "Law",
    iconName: "Scale",
    shortDescription: "Constitutional Law, Corporate, IP, Cyber Law, Criminal Justice & International Law.",
    overview:
      "Legal research requires doctrinal rigor, nuanced statutory interpretation, comparative international jurisprudence, and exhaustive case-law tracing. Our legal scholars assist LL.M. and Ph.D. candidates in building defensible legal dissertations.",
    subDisciplines: [
      "Constitutional & Administrative Law",
      "Corporate, Banking & Commercial Jurisprudence",
      "Intellectual Property Rights (IPR) & Technology Law",
      "Cyber Law, Data Privacy & AI Governance",
      "International Law & Human Rights Protection",
      "Criminal Law, Criminology & Penology",
      "Environmental & Climate Change Legislation",
      "Alternative Dispute Resolution (ADR) & Arbitration",
    ],
    sampleTopics: [
      "Regulatory Challenges of Artificial Intelligence Authorship in Patent Law",
      "Data Sovereignty vs. Cross-Border Data Flows: A Comparative Legal Analysis",
      "Efficacy of Commercial Courts in Expediting Insolvency and Bankruptcy Proceedings",
      "Legal Mechanisms for Combating Deepfake Misinformation and Protecting Privacy Rights",
    ],
    commonMethodologies: ["Doctrinal Legal Research", "Comparative Jurisprudence Analysis", "Empirical Legal Studies", "Statutory & Legislative Drafting Review"],
    keyTools: ["SCC Online", "Manupatra", "HeinOnline", "Westlaw", "LexisNexis"],
  },
];
