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
  PlusCircle,
  ArrowRight,
} from "lucide-react";
import Container from "../common/Container";
import { researchDomainsData } from "../../data/domains";

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

const ResearchDomainsSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-white" id="research-domains">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-700">
              RESEARCH DOMAINS
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-slate-950 mt-1 tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              800+ Subjects Across Multiple Disciplines
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              We support research across diverse academic and professional fields.
            </p>
          </div>

          <Link
            to="/research-domains"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 hover:text-amber-700 transition-colors group shrink-0"
          >
            <span>View All Subjects</span>
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* 8 Disciplines + 1 "View All Subjects" Card Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {researchDomainsData.map((domain) => {
            const Icon = domainIcons[domain.iconName] || Landmark;

            return (
              <Link
                key={domain.id}
                to={`/research-domains/${domain.slug}`}
                className="group flex flex-col items-center justify-center text-center p-5 rounded-2xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-amber-400 hover:shadow-lg transition-all duration-300 active:scale-95 min-h-[140px]"
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-800 shadow-xs group-hover:bg-amber-50 group-hover:border-amber-300 group-hover:text-amber-800 transition-colors">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-amber-900 transition-colors">
                  {domain.title}
                </span>
              </Link>
            );
          })}

          {/* 9th "View All Subjects" Action Card */}
          <Link
            to="/research-domains"
            className="group flex flex-col items-center justify-center text-center p-5 rounded-2xl border border-dashed border-amber-300 bg-amber-50/40 hover:bg-amber-50 hover:border-amber-500 hover:shadow-md transition-all duration-300 active:scale-95 min-h-[140px]"
          >
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-800 border border-amber-200 shadow-xs group-hover:scale-105 transition-transform">
              <PlusCircle size={24} />
            </div>
            <span className="text-xs sm:text-sm font-bold text-amber-900">
              View All <br /> Subjects
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ResearchDomainsSection;
