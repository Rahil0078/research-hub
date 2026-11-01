import { Link } from "react-router-dom";
import BrandMark from "../icons/BrandMark";

interface LogoProps {
  dark?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeStyles = {
  sm: { mark: 34, name: "text-[17px]", tagline: "text-[7.5px]" },
  md: { mark: 46, name: "text-[22px] sm:text-[25px]", tagline: "text-[8.5px] sm:text-[9.5px]" },
  lg: { mark: 58, name: "text-[30px]", tagline: "text-[11px]" },
};

const Logo = ({ dark = false, className = "", size = "md" }: LogoProps) => {
  const styles = sizeStyles[size];

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2.5 group transition-transform active:scale-95 ${className}`}
      aria-label="Research Hub - Home"
    >
      <BrandMark
        size={styles.mark}
        tone={dark ? "dark" : "light"}
        className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
      />

      <div className="flex flex-col text-left leading-none">
        <span
          className={`font-bold uppercase tracking-[0.02em] select-none ${styles.name} ${
            dark ? "text-white" : "text-brand-navy"
          }`}
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Research Hub
        </span>
        <span
          className={`mt-1 font-medium tracking-wide whitespace-nowrap select-none ${styles.tagline} ${
            dark ? "text-slate-300" : "text-brand-navy/80"
          }`}
        >
          Research • Publication • Academic Excellence
        </span>
      </div>
    </Link>
  );
};

export default Logo;
