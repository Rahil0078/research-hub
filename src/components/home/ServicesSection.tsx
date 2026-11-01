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
    <section className="relative py-16 sm:py-20 bg-brand-sky overflow-hidden" id="services">
      {/* Decorative dot grids, as in the mockup */}
      <div className="hidden lg:block absolute left-8 top-28 h-24 w-20 bg-[radial-gradient(#012243_1.2px,transparent_1.2px)] [background-size:12px_12px] opacity-15" />
      <div className="hidden lg:block absolute right-8 top-20 h-24 w-20 bg-[radial-gradient(#012243_1.2px,transparent_1.2px)] [background-size:12px_12px] opacity-15" />

      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="heading-rules text-3xl sm:text-[40px] font-bold text-brand-navy tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Our Core Services
          </h2>
          <p className="text-sm sm:text-lg text-slate-700 mt-3">
            Comprehensive research solutions tailored to your academic needs
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {servicesData.map((service) => {
            const Icon = iconMap[service.iconName] || FileText;

            return (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="group flex flex-col items-center text-center rounded-2xl bg-white px-4 py-7 sm:px-6 border border-slate-200/70 shadow-[0_6px_24px_-12px_rgba(1,34,67,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-gold/60 hover:shadow-[0_20px_40px_-18px_rgba(1,34,67,0.35)]"
              >
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-brand-navy text-white shadow-lg shadow-brand-navy/25 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={26} strokeWidth={1.75} />
                </div>

                <h3 className="mt-4 text-sm sm:text-[17px] font-semibold text-brand-navy leading-snug font-sans">
                  {service.title}
                </h3>

                <p className="mt-2 hidden sm:block text-xs text-slate-500 leading-relaxed line-clamp-2">
                  {service.shortDescription}
                </p>

                <span className="mt-4 flex h-7 w-7 items-center justify-center rounded-full bg-brand-navy text-white transition-colors duration-300 group-hover:bg-brand-gold group-hover:text-brand-navy">
                  <ArrowRight size={15} />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-gold-dark transition-colors group"
          >
            <span>View All Services</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
