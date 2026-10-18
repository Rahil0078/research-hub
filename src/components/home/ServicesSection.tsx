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
} from "lucide-react";
import Container from "../common/Container";
import { servicesData } from "../../data/services";

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

const ServicesSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-white" id="services">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-700">
              OUR SERVICES
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-slate-950 mt-1 tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Comprehensive Research Support
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              End-to-end assistance for every stage of your research journey.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 hover:text-amber-700 transition-colors group shrink-0"
          >
            <span>View All Services</span>
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* 8 Service Cards Grid (2 rows of 4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => {
            const Icon = iconMap[service.iconName] || FileText;

            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/5"
              >
                <div>
                  {/* Icon Container */}
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 border border-slate-200/80 text-slate-800 transition-colors duration-300 group-hover:bg-amber-50 group-hover:border-amber-300/60 group-hover:text-amber-800">
                    <Icon size={24} strokeWidth={1.75} />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-bold text-slate-900 group-hover:text-amber-900 transition-colors leading-snug"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Know More Action Link */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-amber-700 group-hover:text-amber-700 transition-colors"
                  >
                    <span>Know More</span>
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
