import { Link } from "react-router-dom";

interface LogoProps {
  dark?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ dark = false, className = "", size = "md" }: LogoProps) => {
  const isSmall = size === "sm";
  const isLarge = size === "lg";

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3 group transition-transform active:scale-95 ${className}`}
      aria-label="Research Hub - Home"
    >
      {/* Monogram Crest RH */}
      <div
        className={`relative flex items-center justify-center rounded-xl border font-bold transition-all duration-300 shadow-sm ${
          isSmall
            ? "h-9 w-9 text-base"
            : isLarge
            ? "h-14 w-14 text-2xl"
            : "h-11 w-11 text-xl"
        } ${
          dark
            ? "bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 border-amber-300/40 text-slate-950 shadow-amber-950/20"
            : "bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 border-amber-400/50 text-white shadow-amber-500/20"
        }`}
        style={{ fontFamily: "'Cinzel', 'Playfair Display', serif" }}
      >
        <span className="tracking-tighter font-extrabold select-none drop-shadow-sm">
          RH
        </span>
        {/* Subtle decorative ring */}
        <div className="absolute inset-0.5 rounded-[10px] border border-white/25 pointer-events-none" />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col text-left">
        <span
          className={`font-black tracking-tight leading-none transition-colors select-none ${
            isSmall
              ? "text-base"
              : isLarge
              ? "text-2xl"
              : "text-lg sm:text-xl"
          } ${
            dark
              ? "text-white group-hover:text-amber-300"
              : "text-slate-900 group-hover:text-amber-800"
          }`}
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Research <span className="text-amber-600 font-bold">Hub</span>
        </span>
        <span
          className={`font-bold tracking-[0.22em] uppercase transition-colors select-none ${
            isSmall
              ? "text-[9px] mt-0.5"
              : isLarge
              ? "text-[12px] mt-1"
              : "text-[10px] sm:text-[11px] mt-0.5"
          } ${
            dark
              ? "text-amber-300/90"
              : "text-amber-800/90"
          }`}
        >
          THESIS | RESEARCH | SLR
        </span>
      </div>
    </Link>
  );
};

export default Logo;
