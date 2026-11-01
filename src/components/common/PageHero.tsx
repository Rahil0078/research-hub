import type { ReactNode } from "react";
import Container from "../common/Container";

interface PageHeroProps {
  label: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

const PageHero = ({ label, title, description, children }: PageHeroProps) => {
  return (
    <section className="relative isolate overflow-hidden bg-midnight pt-20 pb-12 sm:pt-28 sm:pb-16 text-white">
      <div className="aurora -z-10 -top-20 right-0 h-[260px] w-[260px] bg-accent-500/25 sm:h-[420px] sm:w-[420px]" />
      <div className="aurora -z-10 -bottom-32 left-[15%] h-[240px] w-[240px] bg-accent-700/35 [animation-delay:-7s]" />
      <div className="absolute inset-0 -z-10 bg-grid-dark" />

      <Container>
        <div className="relative max-w-2xl">
          <span className="inline-flex items-center gap-2.5 sm:gap-3">
            <span className="h-[2px] w-6 bg-brand-gold sm:w-8" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent-300 sm:text-xs">
              {label}
            </span>
          </span>

          <h1
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gradient-light sm:mt-4 pb-1"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {title}
          </h1>

          {description && (
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:mt-4 sm:text-base font-sans">
              {description}
            </p>
          )}

          {children}
        </div>
      </Container>
    </section>
  );
};

export default PageHero;
