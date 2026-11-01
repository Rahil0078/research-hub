import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";
import Container from "../common/Container";
import { openConsultationModal } from "../common/ConsultationModal";
import { createWhatsAppUrl } from "../../config/site";

const CTASection = () => {
  const perks = ["Quick Response", "No Obligation", "100% Confidential"];

  return (
    <section className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-200/80">
      <Container>
        <div className="rounded-3xl bg-midnight p-8 sm:p-12 shadow-[0_40px_100px_-30px_rgba(0,27,68,0.6)] relative overflow-hidden isolate text-white">
          <div className="aurora -z-10 -top-20 -left-20 h-80 w-80 bg-accent-500/30" />
          <div className="aurora -z-10 -bottom-24 right-0 h-72 w-72 bg-accent-700/40 [animation-delay:-8s]" />
          <div className="absolute inset-0 -z-10 bg-grid-dark" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: 3D Graduation Cap on Stacked Books */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="relative w-48 sm:w-60 lg:w-64">
                <img
                  src="/images/research-hub/academic-cap-books.jpg"
                  alt="Academic graduation cap on scholarly books"
                  width={300}
                  height={250}
                  className="w-full h-auto object-contain rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-white/10"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: CTA Content & Actions */}
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-accent-300">
                READY TO GET STARTED?
              </span>

              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient-light tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Let's Turn Your Research Goals into Reality
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-xl">
                Get expert guidance from our 10+ years experienced research team today.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={() => openConsultationModal()}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 btn-gold btn-shine rounded-full text-sm font-semibold tracking-wide transition-all hover:-translate-y-0.5 active:scale-95 group cursor-pointer"
                >
                  <span>Get a Free Consultation</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href={createWhatsAppUrl("Hello! I would like to get started with Research Hub for my academic project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 glass-dark rounded-full text-white hover:bg-white/10 hover:border-emerald-400/60 text-sm font-semibold transition-all active:scale-95"
                >
                  <MessageCircle size={18} className="text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* 3 Perks Checkmarks */}
              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-medium text-slate-300">
                {perks.map((perk) => (
                  <div key={perk} className="flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-accent-300" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
