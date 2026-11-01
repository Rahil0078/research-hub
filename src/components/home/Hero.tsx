import { ArrowRight, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import Container from "../common/Container";
import { openConsultationModal } from "../common/ConsultationModal";
import { createWhatsAppUrl } from "../../config/site";

const Hero = () => {
  const highlights = [
    "Original & Confidential Work",
    "Plagiarism Free Content",
    "On-Time Delivery",
    "Expert Research Team",
  ];

  return (
    <section className="relative isolate overflow-hidden bg-midnight text-white pt-12 pb-24 sm:pt-16 sm:pb-32">
      {/* Ambient aurora lights + grid texture */}
      <div className="aurora -z-10 -top-24 left-[10%] h-[420px] w-[420px] bg-accent-500/30" />
      <div className="aurora -z-10 top-1/3 -right-24 h-[380px] w-[380px] bg-accent-700/40 [animation-delay:-6s]" />
      <div className="aurora -z-10 bottom-0 left-1/3 h-[260px] w-[260px] bg-brand-gold/10 [animation-delay:-11s]" />
      <div className="absolute inset-0 -z-10 bg-grid-dark" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 space-y-7 animate-slide-up">
            {/* Tagline / Kicker Badge */}
            <div className="inline-flex items-center gap-2 glass-dark rounded-full px-3.5 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent-300 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-300" />
              </span>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-accent-100">
                Your Research Partner for a Brighter Tomorrow
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[60px] font-bold tracking-tight leading-[1.08]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Expert Research Support <br className="hidden sm:inline" />
              <span className="relative inline-block text-gradient-light pb-2">
                for Your Academic Journey
                <span className="absolute bottom-0 left-0 h-[3px] w-24 rounded-full bg-gradient-to-r from-brand-gold to-transparent" />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-sans">
              From Thesis to Publication — Serving the academic industry for{" "}
              <strong className="text-white font-semibold">2+ years</strong>, with a team of{" "}
              <strong className="text-white font-semibold">10+ years experienced</strong> writers and researchers.
            </p>

            {/* Checkmark Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="shrink-0 text-accent-300" />
                  <span className="text-xs sm:text-sm font-medium text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={() => openConsultationModal()}
                className="btn-shine inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white text-brand-navy text-sm font-bold tracking-wide transition-all shadow-[0_10px_40px_-10px_rgba(126,159,218,0.7)] hover:shadow-[0_14px_50px_-8px_rgba(126,159,218,0.9)] hover:-translate-y-0.5 active:scale-95 group cursor-pointer"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={createWhatsAppUrl("Hi! I would like to consult with an expert regarding my academic research / thesis / SLR project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-dark inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-white hover:bg-white/10 hover:border-emerald-400/60 text-sm font-semibold transition-all active:scale-95"
              >
                <MessageCircle size={19} className="text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Micro Caption */}
            <p className="text-xs text-slate-400 flex items-center gap-1.5">
              <Sparkles size={13} className="text-brand-gold" />
              Share your requirements and get expert guidance within 24 hours.
            </p>
          </div>

          {/* Right Column: Visual Composite */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-full max-w-[480px]">
              {/* Soft glow behind the image */}
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-accent-500/25 blur-3xl" />

              {/* Main Image Frame with animated gradient ring */}
              <div className="glow-ring rounded-2xl shadow-2xl shadow-black/50">
                <div className="relative overflow-hidden rounded-2xl group">
                  <img
                    src="/images/research-hub/hero-researchers.jpg"
                    alt="Academic researchers collaborating with research hub mentorship"
                    width={640}
                    height={420}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/10 to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs glass-dark px-4 py-2.5 rounded-xl">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      </span>
                      <span className="font-semibold">Mentors Online</span>
                    </div>
                    <span className="text-accent-200 font-medium">10+ Yrs Field Expertise</span>
                  </div>
                </div>
              </div>

              {/* Floating milestone pill */}
              <div className="hidden sm:flex absolute -top-6 -right-4 glass-dark px-4 py-2.5 rounded-xl shadow-xl rotate-2 animate-float">
                <span className="text-[11px] font-serif font-semibold text-white italic">
                  Ideas ➔ Research ➔ Analysis ➔ Success
                </span>
              </div>

              {/* Floating service stack */}
              <div className="hidden md:flex absolute -bottom-7 -left-6 flex-col gap-1.5 bg-white text-brand-navy px-4 py-3 rounded-xl shadow-2xl shadow-black/40 text-[10px] font-bold tracking-widest uppercase animate-float [animation-delay:-2s]">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-600" /> Thesis & Dissertation
                </div>
                <div className="flex items-center gap-1.5 text-slate-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400" /> SLR & PRISMA
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" /> Scopus Publication
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
