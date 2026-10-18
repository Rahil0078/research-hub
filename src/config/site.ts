export const siteConfig = {
  name: "Research Hub",
  titleSuffix: "Research Hub | Thesis & SLR",
  legalName: "Research Hub Academic Consultancy",
  tagline: "Your Research Partner for PhD 🎓",
  heroSubtitle:
    "From Thesis to Publication — Get professional guidance from our 10+ years experienced research and content experts.",
  phones: ["+91 8956338249", "+91 9112837665"],
  displayPhones: [
    { label: "WhatsApp & Direct Support", number: "+91 8956338249", clean: "918956338249" },
    { label: "Consultation Desk", number: "+91 9112837665", clean: "919112837665" },
  ],
  email: "researchhub147@gmail.com",
  whatsappNumber: "918956338249",
  whatsappNumberAlt: "919112837665",
  url: "https://researchhub.org",
  logo: "/favicon.svg",
  defaultImage: "/images/research-hub/hero-researchers.jpg",
  address: "Academic Research Support Centre, Pune & Mumbai Hub, India",
  instagramHandle: "@researchhub_147",
  stats: {
    subjectsCovered: "800+",
    projectsDelivered: "2000+",
    experiencedYears: "10+ Years",
    confidentiality: "100%",
  },
  socials: {
    instagram: "https://www.instagram.com/researchhub_147/",
  },
};

export const site = {
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: siteConfig.logo,
  defaultImage: siteConfig.defaultImage,
  phone: siteConfig.phones[0],
  email: siteConfig.email,
  mapUrl: "https://maps.google.com/?q=India",
  officeAddress: {
    streetAddress: "Academic Research Support Centre",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411001",
    addressCountry: "IN",
  },
};

export const absoluteUrl = (path: string) => {
  if (!path) return site.url;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
};

export const createWhatsAppUrl = (message?: string, altPhone = false) => {
  const number = altPhone ? siteConfig.whatsappNumberAlt : siteConfig.whatsappNumber;
  const defaultText =
    "Hello Research Hub team! I am interested in expert guidance for my academic research / thesis / SLR project. Please let me know how to proceed.";
  const encoded = encodeURIComponent(message || defaultText);
  return `https://wa.me/${number}?text=${encoded}`;
};
