import BrandMark from "../icons/BrandMark";

const PageLoader = () => {
  return (
    <div
      className="flex min-h-[70vh] flex-col items-center justify-center gap-6 bg-white px-6"
      role="status"
      aria-label="Loading Research Hub"
    >
      <div className="relative flex h-32 w-32 items-center justify-center">
        {/* Soft halo */}
        <div className="absolute inset-2 rounded-full bg-brand-gold/15 blur-xl animate-pulse" />
        {/* Track + spinning gold arc */}
        <div className="absolute inset-0 rounded-full border-[3px] border-brand-navy/10" />
        <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-brand-gold border-r-brand-gold/40 animate-spin [animation-duration:1.1s]" />
        {/* Mark */}
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_-10px_rgba(1,34,67,0.35)]">
          <BrandMark size={58} animated />
        </div>
      </div>

      <div className="text-center animate-fade-in">
        <h3
          className="text-2xl font-bold uppercase tracking-[0.04em] text-brand-navy"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Research Hub
        </h3>
        <p className="mt-1 text-[11px] font-medium tracking-wide text-brand-navy/70">
          Research • Publication • Academic Excellence
        </p>

        {/* Indeterminate progress bar */}
        <div className="mx-auto mt-4 h-1 w-40 overflow-hidden rounded-full bg-brand-navy/10">
          <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-dark animate-loader-bar" />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
