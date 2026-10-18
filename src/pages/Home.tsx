import SEO from "../components/common/SEO";
import Layout from "../components/layout/Layout";
import Hero from "../components/home/Hero";
import TrustIndicators from "../components/home/TrustIndicators";
import ServicesSection from "../components/home/ServicesSection";
import ProcessSection from "../components/home/ProcessSection";
import ResearchDomainsSection from "../components/home/ResearchDomainsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CTASection from "../components/home/CTASection";

const Home = () => {
  return (
    <Layout>
      <SEO
        title="Expert Research Support for Your Academic Journey | Research Hub"
        description="From Thesis to Publication — Get professional guidance from our 10+ years experienced research and content experts. Specializing in PhD Thesis, Systematic Literature Review (SLR), Proposal Writing, Data Analysis & Scopus Publication."
        url="/"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Research Hub",
            description:
              "Expert academic research consultancy offering thesis guidance, systematic literature reviews, proposal writing, and publication support.",
            url: "https://researchhub.org",
            telephone: "+91 8956338249",
            email: "researchhub147@gmail.com",
            sameAs: [
              "https://instagram.com/researchhub",
              "https://linkedin.com/company/researchhub",
            ],
          },
        ]}
      />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust Indicators (4 stat columns) */}
      <TrustIndicators />

      {/* 3. Our Services (8 service cards) */}
      <ServicesSection />

      {/* 4. How It Works (4 steps + guarantees) */}
      <ProcessSection />

      {/* 5. Research Domains (800+ subjects) */}
      <ResearchDomainsSection />

      {/* 6. Testimonials (Client feedback carousel) */}
      <TestimonialsSection />

      {/* 7. Pre-Footer Call to Action */}
      <CTASection />
    </Layout>
  );
};

export default Home;
