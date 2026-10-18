export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  department: string;
  university?: string;
  image: string;
  rating: number;
  quote: string;
  serviceUsed: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "priya-s",
    name: "Priya S.",
    role: "PhD Scholar",
    department: "Management",
    university: "Symbiosis International University",
    image: "/images/research-hub/priya-testimonial.jpg",
    rating: 5,
    quote: "Excellent support for my PhD thesis. The team is highly knowledgeable and very professional.",
    serviceUsed: "Thesis & Dissertation Writing",
  },
  {
    id: "rahul-k",
    name: "Rahul K.",
    role: "Research Scholar",
    department: "Computer Science",
    university: "IIT Bombay Alumni / Research Fellow",
    image: "/images/research-hub/rahul-testimonial.jpg",
    rating: 5,
    quote: "Their SLR support saved me months of effort. Highly recommend their research expertise.",
    serviceUsed: "Systematic Literature Review (SLR)",
  },
  {
    id: "anjali-m",
    name: "Anjali M.",
    role: "Postgraduate Researcher",
    department: "Education",
    university: "Tata Institute of Social Sciences",
    image: "/images/research-hub/anjali-testimonial.jpg",
    rating: 5,
    quote: "Timely delivery and high-quality work. The team understands academic requirements very well.",
    serviceUsed: "Data Analysis & Interpretation",
  },
  {
    id: "dr-vikram-r",
    name: "Dr. Vikram R.",
    role: "Assistant Professor",
    department: "Mechanical Engineering",
    university: "NIT Karnataka",
    image: "/images/research-hub/rahul-testimonial.jpg",
    rating: 5,
    quote: "Our paper got accepted in an Elsevier Q1 journal with minor revisions thanks to their rigorous technical writing and reviewer rebuttal guidance.",
    serviceUsed: "Research Paper Publication Support",
  },
  {
    id: "sneha-d",
    name: "Sneha D.",
    role: "Doctoral Candidate",
    department: "Life Sciences & Healthcare",
    university: "Manipal Academy of Higher Education",
    image: "/images/research-hub/priya-testimonial.jpg",
    rating: 5,
    quote: "Flawless statistical analysis and PRISMA meta-analysis support. Their adherence to ethical standards and confidentiality gave me peace of mind.",
    serviceUsed: "Data Analysis & SLR",
  },
];
