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
    <section className="relative overflow-hidden bg-slate-950 pt-20 pb-12 sm:pt-28 sm:pb-16 text-white">
      <div className="absolute right-0 top-0 h-[220px] w-[220px] rounded-full bg-amber-500/10 blur-[90px] sm:h-[420px] sm:w-[420px]" />

      <Container>
        <div className="relative max-w-2xl">
          <span className="inline-flex items-center gap-2.5 sm:gap-3">
            <span className="h-[2px] w-6 bg-amber-500 sm:w-8" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-400 sm:text-xs">
              {label}
            </span>
          </span>

          <h1
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white sm:mt-4"
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
