import { Link } from "react-router-dom";
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
} from "lucide-react";
import Layout from "../components/layout/Layout";
import SEO from "../components/common/SEO";
import Container from "../components/common/Container";
import { servicesData } from "../data/services";
import { openConsultationModal } from "../components/common/ConsultationModal";

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

const Services = () => {
  return (
    <Layout>
      <SEO
        title="Comprehensive Research Services | Thesis, SLR, Data Analysis & Publication"
        description="Explore our specialized academic research services including Thesis & Dissertation Writing, Systematic Literature Reviews (SLR), Proposal Writing, Statistical Analysis, and Scopus Publication Support."
        url="/services"
      />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-amber-50/50 via-white to-white py-14 sm:py-20 border-b border-slate-100">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-700">
              ACADEMIC EXPERTISE
            </span>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 mt-2 tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Comprehensive Research Support Services
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-sans">
              From early conceptualization and proposal defense to rigorous data analysis and high-impact journal publication, our 10+ years experienced PhD consultants guide you through every milestone.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {servicesData.map((service) => {
              const Icon = iconMap[service.iconName] || FileText;

              return (
                <div
                  key={service.id}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl group"
                >
                  <div>
                    {service.badge && (
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 border border-amber-300/60 px-2.5 py-0.5 rounded-full mb-4">
                        {service.badge}
                      </span>
                    )}

                    <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-xl bg-slate-50 border border-slate-200 text-slate-800 group-hover:bg-amber-50 group-hover:border-amber-300 group-hover:text-amber-800 transition-colors">
                      <Icon size={26} strokeWidth={1.75} />
                    </div>

                    <h2
                      className="text-xl font-bold text-slate-950 group-hover:text-amber-900 transition-colors leading-snug"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {service.title}
                    </h2>

                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    <ul className="mt-5 space-y-2 text-xs text-slate-700">
                      {service.benefits.slice(0, 2).map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-amber-600 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-amber-700 transition-colors"
                    >
                      <span>Explore Details</span>
                      <ArrowRight size={14} />
                    </Link>

                    <button
                      type="button"
                      onClick={() => openConsultationModal(service.title)}
                      className="text-xs font-semibold text-amber-700 hover:text-amber-900 cursor-pointer"
                    >
                      Consult Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Conversion Banner */}
      <section className="bg-slate-950 py-16 text-white text-center">
        <Container>
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-400">
              CUSTOM ACADEMIC ASSISTANCE
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Need a Customized Research Package?
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Every academic journey is unique. Share your thesis chapter, dataset, or reviewer comments for a customized plan within 24 hours.
            </p>
            <div className="pt-4 flex justify-center">
              <button
                type="button"
                onClick={() => openConsultationModal()}
                className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                Schedule Free Research Consultation
              </button>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Services;
