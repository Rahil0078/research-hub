export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TrustAssurance {
  title: string;
  description: string;
  iconName: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "Step 01",
    number: "01",
    title: "Share Your Requirements",
    description: "Discuss your research goals with our experts.",
    iconName: "MessageSquare",
  },
  {
    step: "Step 02",
    number: "02",
    title: "Get Expert Guidance",
    description: "Receive a customized plan and quotation.",
    iconName: "FileSpreadsheet",
  },
  {
    step: "Step 03",
    number: "03",
    title: "Work with Our Team",
    description: "Our experienced writers and researchers work on your project.",
    iconName: "Users",
  },
  {
    step: "Step 04",
    number: "04",
    title: "Review & Delivery",
    description: "Get high-quality, original and well-formatted work on time.",
    iconName: "CheckCircle2",
  },
];

export const trustAssurances: TrustAssurance[] = [
  {
    title: "Dedicated Support",
    description: "Personalized assistance throughout",
    iconName: "UserCheck",
  },
  {
    title: "Regular Updates",
    description: "Stay informed at every stage",
    iconName: "MessagesSquare",
  },
  {
    title: "On-Time Delivery",
    description: "We value your deadlines",
    iconName: "Clock",
  },
  {
    title: "Complete Confidentiality",
    description: "Your data is 100% secure",
    iconName: "Lock",
  },
];
