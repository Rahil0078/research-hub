import { useParams, Link, Navigate } from "react-router-dom";
import {
  Building2,
  Monitor,
  Cpu,
  Landmark,
  HeartPulse,
  Palette,
  GraduationCap,
  Scale,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  Lightbulb,
  Workflow,
  Wrench,
} from "lucide-react";
import Layout from "../components/layout/Layout";
import SEO from "../components/common/SEO";
import Container from "../components/common/Container";
import { researchDomainsData } from "../data/domains";
import { openConsultationModal } from "../components/common/ConsultationModal";
import { createWhatsAppUrl } from "../config/site";

const domainIcons: Record<string, React.ElementType> = {
  Building2,
  Monitor,
  Cpu,
  Landmark,
  HeartPulse,
  Palette,
  GraduationCap,
  Scale,
};

const DomainDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const domain = researchDomainsData.find((d) => d.slug === slug);

  if (!domain) {
    return <Navigate to="/research-domains" replace />;
  }

  const Icon = domainIcons[domain.iconName] || Landmark;

  return (
    <Layout>
      <SEO
        title={`${domain.title} Research Support & Dissertation Guidance | Research Hub`}
        description={domain.overview.slice(0, 160)}
        url={`/research-domains/${domain.slug}`}
      />

      {/* Breadcrumb Bar */}
      <div className="bg-slate-50 border-b border-slate-100 py-3 text-xs text-slate-500">
        <Container>
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-slate-800 transition-colors">
              Home
            </Link>
            <ChevronRight size={13} />
            <Link to="/research-domains" className="hover:text-slate-800 transition-colors">
              Research Domains
            </Link>
            <ChevronRight size={13} />
            <span className="text-slate-900 font-semibold truncate">
              {domain.title}
            </span>
          </div>
        </Container>
      </div>

      {/* Domain Hero */}
      <section className="bg-gradient-to-b from-amber-50/40 via-white to-white py-14 sm:py-20 border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-800 bg-amber-100/70 border border-amber-300/60 px-3 py-1 rounded-full">
                  DISCIPLINE SPECIALIZATION
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 shadow-xs">
                  <Icon size={28} />
                </div>
                <h1
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {domain.title}
                </h1>
              </div>

              <p className="text-base text-slate-600 leading-relaxed font-sans max-w-2xl pt-2">
                {domain.overview}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3.5">
                <button
                  type="button"
                  onClick={() => openConsultationModal(undefined, domain.title)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <span>Consult {domain.title} Specialist</span>
                  <ArrowRight size={16} />
                </button>

                <a
                  href={createWhatsAppUrl(`Hi Research Hub! I need assistance in the domain of ${domain.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-emerald-500 text-emerald-700 bg-white hover:bg-emerald-50 font-semibold text-sm transition-all"
                >
                  <MessageCircle size={18} className="text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick Fact Box */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-lg space-y-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Academic Highlights
                </h3>
                <div className="space-y-3 text-xs text-slate-600">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="block font-bold text-slate-900 mb-0.5">Discipline Scope</span>
                    Covering Master's, Doctoral & Faculty research levels
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="block font-bold text-slate-900 mb-0.5">Faculty Peer Review</span>
                    Reviewed by doctoral editors with 10+ years experience
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="block font-bold text-slate-900 mb-0.5">Standard Software</span>
                    {domain.keyTools.join(", ")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Sub-Disciplines Covered */}
      <section className="py-16 bg-white border-b border-slate-100">
        <Container>
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-700">
              SPECIALIZED BRANCHES
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold text-slate-950 mt-1"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Key Sub-Fields in {domain.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {domain.subDisciplines.map((sub, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-amber-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    {sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Sample Topics & Methodologies */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Sample Research Topics */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-700">
                RECENT SCHOLARLY THEMES
              </span>
              <h3
                className="text-2xl font-bold text-slate-950 flex items-center gap-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                <Lightbulb size={22} className="text-amber-600" />
                <span>Sample Dissertation & Research Titles</span>
              </h3>
              <div className="space-y-3 pt-2">
                {domain.sampleTopics.map((topic, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs text-xs sm:text-sm text-slate-700 font-medium italic leading-relaxed"
                  >
                    "{topic}"
                  </div>
                ))}
              </div>
            </div>

            {/* Methodologies & Analytical Tools */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-700">
                  RESEARCH METHODOLOGIES
                </span>
                <h3
                  className="text-2xl font-bold text-slate-950 mt-1 flex items-center gap-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  <Workflow size={22} className="text-slate-800" />
                  <span>Analytical Approaches</span>
                </h3>
                <div className="space-y-2.5 mt-3">
                  {domain.commonMethodologies.map((meth, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800"
                    >
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span>{meth}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-700">
                  SPECIALIZED SOFTWARE
                </span>
                <h3
                  className="text-xl font-bold text-slate-950 mt-1 mb-3 flex items-center gap-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  <Wrench size={20} className="text-slate-800" />
                  <span>Tools & Frameworks Used</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {domain.keyTools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-900"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-950 text-white py-14 text-center">
        <Container>
          <div className="max-w-xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
              Starting Your Research in {domain.title}?
            </h2>
            <p className="text-sm text-slate-400">
              Get matched with a PhD consultant specializing in your exact field. Zero plagiarism, verified methodology, and complete confidentiality.
            </p>
            <div className="pt-4 flex justify-center">
              <button
                type="button"
                onClick={() => openConsultationModal(undefined, domain.title)}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Connect with {domain.title} Mentor
              </button>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default DomainDetail;
