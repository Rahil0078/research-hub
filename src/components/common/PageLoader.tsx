import { ResearchHubEmblem } from "../icons/AcademicIcons";

const PageLoader = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 bg-white px-6">
      <div className="relative flex items-center justify-center">
        {/* Outer glowing pulsing ring */}
        <div className="absolute -inset-3 rounded-3xl bg-accent-400/20 blur-xl animate-pulse" />

        {/* Spinning decorative orbit */}
        <div className="absolute -inset-2 rounded-2xl border border-dashed border-accent-400/60 animate-[spin_8s_linear_infinite]" />

        {/* Center Crest Emblem */}
        <div className="relative rounded-2xl bg-brand-navy p-4 shadow-2xl border border-accent-500/40">
          <ResearchHubEmblem size={56} variant="gold" />
        </div>
      </div>

      <div className="text-center space-y-1 animate-fade-in">
        <h3
          className="text-lg font-bold text-slate-900 tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Research Hub
        </h3>
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent-700">
          Thesis & SLR Consultation
        </p>

        {/* Bouncing Dots */}
        <div className="pt-2 flex items-center justify-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-500 animate-bounce [animation-delay:-0.3s]" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent-600 animate-bounce [animation-delay:-0.15s]" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent-700 animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
