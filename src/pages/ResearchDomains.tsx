import { useState } from "react";
import { Link } from "react-router-dom";
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
  Search,
  BookOpen,
} from "lucide-react";
import Layout from "../components/layout/Layout";
import SEO from "../components/common/SEO";
import Container from "../components/common/Container";
import { researchDomainsData } from "../data/domains";
import { openConsultationModal } from "../components/common/ConsultationModal";

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

const ResearchDomains = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDomains = researchDomainsData.filter((d) => {
    const term = searchTerm.toLowerCase();
    return (
      d.title.toLowerCase().includes(term) ||
      d.shortDescription.toLowerCase().includes(term) ||
      d.subDisciplines.some((sub) => sub.toLowerCase().includes(term))
    );
  });

  return (
    <Layout>
      <SEO
        title="800+ Academic Research Disciplines & Subjects | Research Hub"
        description="Comprehensive support across 800+ academic disciplines including Management, Computer Science, Engineering, Social Sciences, Healthcare, Arts, Education, and Law."
        url="/research-domains"
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-amber-50/50 via-white to-white py-14 sm:py-20 border-b border-slate-100">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-700">
              DISCIPLINARY COVERAGE
            </span>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 mt-2 tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              800+ Subjects Across Multiple Disciplines
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-sans">
              Our academic consultants hold advanced doctoral degrees and active publication track records across specialized scientific, technical, business, and humanities disciplines.
            </p>

            {/* In-page Domain Search Filter */}
            <div className="mt-8 relative max-w-xl">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Search subjects (e.g. Finance, Machine Learning, Robotics, Nursing, Law)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-white shadow-xs text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Disciplines Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredDomains.map((domain) => {
              const Icon = domainIcons[domain.iconName] || BookOpen;

              return (
                <div
                  key={domain.id}
                  className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 transition-all duration-300 hover:border-amber-400 hover:shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-800">
                        <Icon size={26} strokeWidth={1.75} />
                      </div>
                      <div>
                        <h2
                          className="text-2xl font-bold text-slate-950"
                          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                        >
                          {domain.title}
                        </h2>
                        <span className="text-xs text-amber-700 font-semibold">
                          Over 100+ Specialized Sub-Fields
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {domain.overview}
                    </p>

                    {/* Sub-Disciplines Tags */}
                    <div className="mt-5">
                      <span className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                        Common Sub-Disciplines:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {domain.subDisciplines.slice(0, 5).map((sub) => (
                          <span
                            key={sub}
                            className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-700"
                          >
                            {sub}
                          </span>
                        ))}
                        {domain.subDisciplines.length > 5 && (
                          <span className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 text-xs font-semibold">
                            +{domain.subDisciplines.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Sample Dissertation Topic */}
                    <div className="mt-5 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                      <strong className="text-slate-800 block mb-1">
                        Sample Research Topic:
                      </strong>
                      <span className="italic text-slate-600">
                        "{domain.sampleTopics[0]}"
                      </span>
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/research-domains/${domain.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-amber-700 transition-colors"
                    >
                      <span>Explore Domain Details</span>
                      <ArrowRight size={14} />
                    </Link>

                    <button
                      type="button"
                      onClick={() => openConsultationModal(undefined, domain.title)}
                      className="text-xs font-semibold text-amber-700 hover:text-amber-900 cursor-pointer"
                    >
                      Consult Specialists
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredDomains.length === 0 && (
            <div className="text-center py-16 text-slate-500">
              No disciplines found matching "{searchTerm}". Please contact us directly for interdisciplinary research.
            </div>
          )}
        </Container>
      </section>

      {/* Domain Consultation CTA */}
      <section className="bg-slate-950 py-16 text-white text-center">
        <Container>
          <div className="max-w-2xl mx-auto space-y-4">
            <h2
              className="text-3xl font-bold font-serif"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Don't See Your Exact Research Subject Listed?
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              We cover 800+ niche sub-fields and interdisciplinary domains across worldwide universities. Discuss your specific problem statement with our domain leads.
            </p>
            <div className="pt-4 flex justify-center">
              <button
                type="button"
                onClick={() => openConsultationModal()}
                className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                Discuss Your Research Topic
              </button>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default ResearchDomains;
