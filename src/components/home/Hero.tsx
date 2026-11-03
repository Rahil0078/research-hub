import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import { createWhatsAppUrl } from "../../config/site";

const Hero = () => {
  return (
    <section className="relative isolate flex items-center overflow-hidden bg-brand-navy text-white min-h-[calc(100svh-4.625rem)] md:min-h-[360px] md:h-[calc(100svh-5rem)] md:max-h-[860px]">
      {/* Photo — right side on desktop, full background on mobile */}
      <img
        src="/images/research-hub/hero-researchers.jpg"
        alt="Research mentor guiding a PhD scholar through data analysis in a university library"
        width={1376}
        height={768}
        loading="eager"
        className="absolute inset-y-0 right-0 -z-20 h-full w-full object-cover object-[60%_center] lg:w-[62%]"
      />
      {/* Navy wash fading into the photo */}
      <div className="absolute inset-0 -z-10 bg-brand-navy/80 lg:bg-transparent lg:bg-gradient-to-r lg:from-brand-navy lg:from-40% lg:via-brand-navy/60 lg:via-56% lg:to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent" />
      {/* Fine grid on the solid navy side */}
      <div className="absolute inset-y-0 left-0 -z-10 w-1/2 bg-grid-dark opacity-60" />

      <Container>
        <div className="max-w-[44rem] py-10 md:py-6 animate-slide-up">
          <h1
            className="text-[36px] leading-[1.08] sm:text-5xl lg:text-[clamp(2.4rem,8svh,3.6rem)] font-bold tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            <span className="lg:whitespace-nowrap">Your Research Journey,</span>
            <span className="block text-brand-gold">Our Expertise.</span>
          </h1>

          <p className="mt-4 [@media(max-height:700px)]:mt-2.5 max-w-xl text-[15px] sm:text-lg [@media(max-height:700px)]:text-base leading-relaxed text-slate-100">
            Professional research assistance, publication guidance and academic support for
            researchers worldwide.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            <strong className="font-semibold text-white">2+ years</strong> in the industry ·{" "}
            <strong className="font-semibold text-white">10+ years</strong> experienced team ·{" "}
            <strong className="font-semibold text-white">2000+</strong> projects delivered
          </p>

          <span className="mt-5 [@media(max-height:700px)]:mt-3 block h-[3px] w-20 rounded-full bg-brand-gold" />

          <div className="mt-6 [@media(max-height:700px)]:mt-4 flex flex-col sm:flex-row gap-3">
            <Link
              to="/services"
              className="btn-gold btn-shine group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 [@media(max-height:700px)]:py-2.5 text-sm sm:text-[15px] font-semibold transition-all hover:-translate-y-0.5 active:scale-95"
            >
              <span>Explore Our Services</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={createWhatsAppUrl("Hi! I would like to consult with an expert regarding my academic research / thesis / SLR project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-white/80 px-7 py-3.5 [@media(max-height:700px)]:py-2.5 text-sm sm:text-[15px] font-semibold text-white transition-all hover:bg-white hover:text-brand-navy active:scale-95"
            >
              <MessageCircle size={19} className="text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </Container>

      {/* Thin gold line separating hero from content */}
      <div className="absolute bottom-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-brand-gold/70 to-transparent" />
    </section>
  );
};

export default Hero;
