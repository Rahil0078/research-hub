import { useParams, Link, Navigate } from "react-router-dom";
import {
  FileEdit,
  Layers,
  FileText,
  BarChart3,
  PenTool,
  CheckSquare,
  BookOpen,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  HelpCircle,
  Cpu,
  Users,
} from "lucide-react";
import Layout from "../components/layout/Layout";
import SEO from "../components/common/SEO";
import Container from "../components/common/Container";
import { servicesData } from "../data/services";
import { openConsultationModal } from "../components/common/ConsultationModal";
import { createWhatsAppUrl } from "../config/site";

const iconMap: Record<string, React.ElementType> = {
  FileEdit,
  Layers,
  FileText,
  BarChart3,
  PenTool,
  CheckSquare,
  BookOpen,
  ShieldCheck,
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = iconMap[service.iconName] || FileText;

  return (
    <Layout>
      <SEO
        title={`${service.title} | Research Hub Academic Services`}
        description={service.overview.slice(0, 160)}
        url={`/services/${service.slug}`}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.overview,
            provider: {
              "@type": "EducationalOrganization",
              name: "Research Hub",
            },
          },
        ]}
      />

      {/* Breadcrumb Bar */}
      <div className="bg-slate-50 border-b border-slate-100 py-3 text-xs text-slate-500">
        <Container>
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-slate-800 transition-colors">
              Home
            </Link>
            <ChevronRight size={13} />
            <Link to="/services" className="hover:text-slate-800 transition-colors">
              Services
            </Link>
            <ChevronRight size={13} />
            <span className="text-slate-900 font-semibold truncate">
              {service.title}
            </span>
          </div>
        </Container>
      </div>

      {/* Service Hero Header */}
      <section className="bg-gradient-to-b from-amber-50/40 via-white to-white py-14 sm:py-20 border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-800 bg-amber-100/70 border border-amber-300/60 px-3 py-1 rounded-full">
                  {service.badge || "Academic Excellence"}
                </span>
              </div>

              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {service.title}
              </h1>

              <p className="text-lg text-amber-900 font-serif font-medium">
                {service.tagline}
              </p>

              <p className="text-base text-slate-600 leading-relaxed font-sans max-w-2xl">
                {service.overview}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3.5">
                <button
                  type="button"
                  onClick={() => openConsultationModal(service.title)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <span>Request Consultation for {service.title}</span>
                  <ArrowRight size={16} />
                </button>

                <a
                  href={createWhatsAppUrl(`Hello! I would like to discuss my requirements for ${service.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-emerald-500 text-emerald-700 bg-white hover:bg-emerald-50 font-semibold text-sm transition-all"
                >
                  <MessageCircle size={18} className="text-emerald-600" />
                  <span>Direct WhatsApp Query</span>
                </a>
              </div>
            </div>

            {/* Quick Summary Card */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-lg space-y-5">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 border border-amber-200 text-amber-800">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-slate-900">
                      Service Highlights
                    </h2>
                    <span className="text-xs text-slate-500">100% Confidential Support</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                      <CheckCircle2 size={15} className="text-amber-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-100 text-xs text-slate-500">
                  <strong>Turnaround:</strong> Customized to your university deadline.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Methodology Section */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-100">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-700">
              OUR METHODOLOGY
            </span>
            <h2
              className="text-3xl font-bold text-slate-950 mt-1"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              How We Execute {service.title}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              A structured, milestone-driven workflow ensuring peer-reviewed academic rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.methodology.map((m) => (
              <div
                key={m.step}
                className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-extrabold text-amber-600 font-serif">
                    {m.step}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-2 mb-2 font-serif">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Deliverables & Tools Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Key Deliverables */}
            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-700">
                WHAT YOU RECEIVE
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-slate-950"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Deliverables & Quality Guarantee
              </h2>
              <div className="space-y-3 pt-2">
                {service.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Software Tools & Target Audience */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-700">
                  SOFTWARE & PLATFORMS
                </span>
                <h3 className="text-xl font-bold text-slate-950 mt-1 mb-3 flex items-center gap-2">
                  <Cpu size={20} className="text-slate-800" />
                  <span>Standardized Academic Software</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-700">
                  SCHOLAR PROFILES
                </span>
                <h3 className="text-xl font-bold text-slate-950 mt-1 mb-3 flex items-center gap-2">
                  <Users size={20} className="text-slate-800" />
                  <span>Who This Service Is Designed For</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.targetAudience.map((audience) => (
                    <span
                      key={audience}
                      className="px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-900"
                    >
                      {audience}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs Section */}
      {service.faqs.length > 0 && (
        <section className="py-16 sm:py-20 bg-slate-50/50">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-700">
                  FREQUENTLY ASKED QUESTIONS
                </span>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-slate-950 mt-1"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Common Questions About {service.title}
                </h2>
              </div>

              <div className="space-y-4">
                {service.faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs"
                  >
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2.5">
                      <HelpCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 pl-7 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="bg-slate-950 text-white py-14 text-center">
        <Container>
          <div className="max-w-xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
              Ready to Advance with {service.title}?
            </h2>
            <p className="text-sm text-slate-400">
              Connect directly with our senior research mentors. Free evaluation and proposal breakdown within 24 hours.
            </p>
            <div className="pt-4 flex justify-center">
              <button
                type="button"
                onClick={() => openConsultationModal(service.title)}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
