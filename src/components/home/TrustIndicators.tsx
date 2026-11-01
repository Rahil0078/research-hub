import { ArrowRight, BookOpen, ShieldCheck, Trophy, Users } from "lucide-react";
import Container from "../common/Container";
import { openConsultationModal } from "../common/ConsultationModal";
import { siteConfig } from "../../config/site";

const stats = [
  { icon: Trophy, value: siteConfig.stats.projectsDelivered, label: "Projects Delivered" },
  { icon: BookOpen, value: siteConfig.stats.subjectsCovered, label: "Subjects Covered" },
  { icon: Users, value: "10+", label: "Years Experienced Team" },
  { icon: ShieldCheck, value: siteConfig.stats.confidentiality, label: "Confidential & Original" },
];

/** Navy stats band with gold icons and a gold "Let's Achieve…" ribbon (client mockup). */
const TrustIndicators = () => {
  return (
    <section className="bg-white pb-16 sm:pb-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-brand-navy text-white shadow-[0_30px_60px_-30px_rgba(1,34,67,0.7)]">
          <div className="absolute inset-0 bg-grid-dark opacity-40" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12">
            {/* Stats */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-y-8 px-6 py-9 sm:px-10">
              {stats.map(({ icon: Icon, value, label }, idx) => (
                <div
                  key={label}
                  className={`flex items-center gap-3.5 md:px-4 ${idx !== 0 ? "md:border-l md:border-brand-gold/60" : ""}`}
                >
                  <Icon size={34} className="shrink-0 text-brand-gold" strokeWidth={1.9} />
                  <div>
                    <div className="text-2xl sm:text-[30px] font-bold leading-none">{value}</div>
                    <div className="mt-1.5 text-xs sm:text-[13px] text-slate-200 leading-tight">{label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Gold ribbon CTA */}
            <div className="lg:col-span-4 relative flex flex-col items-center lg:items-end justify-center gap-3 px-8 py-8 lg:py-6 lg:pl-20 text-brand-navy">
              <div className="gold-ribbon absolute inset-0" />
              <p
                className="relative text-center lg:text-right text-[30px] sm:text-[34px] leading-[1.05]"
                style={{ fontFamily: "var(--font-script)" }}
              >
                Let&apos;s Achieve Research Excellence Together!
              </p>
              <button
                type="button"
                onClick={() => openConsultationModal()}
                className="relative inline-flex items-center gap-2 rounded-full bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-navy-light hover:-translate-y-0.5 group cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrustIndicators;
