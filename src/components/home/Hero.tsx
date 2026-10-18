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
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/40 via-white to-slate-50/50 pt-8 pb-14 sm:pt-12 sm:pb-20">
      {/* Subtle background ambient glows */}
      <div className="absolute top-12 left-1/4 -z-10 w-96 h-96 rounded-full bg-amber-200/20 blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 -z-10 w-80 h-80 rounded-full bg-slate-200/30 blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tagline / Kicker Badge */}
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-amber-800 bg-amber-100/70 border border-amber-300/60 px-3 py-1 rounded-full">
                YOUR RESEARCH PARTNER FOR A BRIGHTER TOMORROW
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-slate-950 tracking-tight leading-[1.12]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Expert Research Support <br className="hidden sm:inline" />
              <span className="text-slate-900">for Your Academic Journey</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-sans">
              From Thesis to Publication — Get professional guidance from our{" "}
              <strong className="text-slate-900 font-semibold">10+ years experienced</strong> research and content experts.
            </p>

            {/* Checkmark Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-700">
                    <CheckCircle2 size={16} className="fill-amber-500 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Primary Consultation Button */}
              <button
                type="button"
                onClick={() => openConsultationModal()}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg active:scale-95 group cursor-pointer"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </button>

              {/* WhatsApp Secondary Button */}
              <a
                href={createWhatsAppUrl("Hi! I would like to consult with an expert regarding my academic research / thesis / SLR project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border-2 border-emerald-500 text-emerald-700 bg-white hover:bg-emerald-50 text-sm font-semibold transition-all shadow-sm active:scale-95 group"
              >
                <MessageCircle size={19} className="text-emerald-600 fill-emerald-100" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Micro Caption */}
            <p className="text-xs text-slate-500 pt-1 flex items-center gap-1.5">
              <Sparkles size={13} className="text-amber-500" />
              Share your requirements and get expert guidance within 24 hours.
            </p>
          </div>

          {/* Right Column: Visual Composite matching screenshot */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px]">
              {/* Main Image Frame */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-200/80 bg-white group">
                <img
                  src="/images/research-hub/hero-researchers.jpg"
                  alt="Academic researchers collaborating with research hub mentorship"
                  width={640}
                  height={420}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Badge on image */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs backdrop-blur-md bg-slate-950/70 px-4 py-2.5 rounded-xl border border-white/20">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="font-semibold">Mentors Online</span>
                  </div>
                  <span className="text-amber-300 font-medium">10+ Yrs Field Expertise</span>
                </div>
              </div>

              {/* Decorative Handwritten Academic Milestones Floating Pill */}
              <div className="hidden sm:flex absolute -top-5 -right-3 flex-col items-center bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-lg border border-amber-200 text-right rotate-1 animate-float">
                <span className="text-[11px] font-serif font-bold text-slate-800 italic">
                  Ideas ➔ Research ➔ Analysis ➔ Success
                </span>
              </div>

              {/* Decorative Book Spines Stack representation */}
              <div className="hidden md:flex absolute -bottom-5 -left-4 flex-col gap-1 bg-slate-950 text-white px-3 py-2.5 rounded-xl shadow-xl border border-amber-500/30 text-[11px] font-bold tracking-widest uppercase">
                <div className="text-amber-400 flex items-center gap-1.5 text-[10px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> THESIS & DISSERTATION
                </div>
                <div className="text-slate-300 flex items-center gap-1.5 text-[10px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400" /> SLR & PRISMA
                </div>
                <div className="text-amber-400 flex items-center gap-1.5 text-[10px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> SCOPUS PUBLICATION
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