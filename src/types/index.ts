export interface NavItem {
  title: string;
  path: string;
  badge?: string;
}

export interface AcademicConsultationData {
  name: string;
  email: string;
  phone: string;
  academicLevel: string;
  service: string;
  domain: string;
  deadline?: string;
  requirements: string;
}

export interface ServiceSummary {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  iconName: string;
}

export interface ResearchDomainSummary {
  id: string;
  slug: string;
  title: string;
  iconName: string;
  shortDescription: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  department: string;
  university?: string;
  quote: string;
  image: string;
  rating: number;
}
