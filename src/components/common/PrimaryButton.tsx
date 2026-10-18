import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "dark" | "gold";
  onClick?: () => void;
  to?: string;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  showArrow?: boolean;
}

const variantStyles = {
  primary:
    "bg-slate-950 text-white hover:bg-slate-800 shadow-md hover:shadow-lg active:scale-95",

  secondary:
    "border border-slate-300 text-slate-800 hover:bg-slate-50 active:scale-95",

  outline:
    "border-2 border-amber-600 text-amber-800 hover:bg-amber-50 active:scale-95",

  dark:
    "bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg active:scale-95",

  gold:
    "bg-amber-500 text-slate-950 hover:bg-amber-400 font-bold shadow-md hover:shadow-lg active:scale-95",
};

const Button = ({
  children,
  variant = "primary",
  onClick,
  to,
  href,
  type = "button",
  disabled = false,
  className = "",
  showArrow = true,
}: ButtonProps) => {
  const base = `
    group
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-xl
    px-5
    py-3
    text-xs
    sm:text-sm
    font-semibold
    tracking-wide
    transition-all
    duration-300
    hover:-translate-y-0.5
    whitespace-nowrap
  `;

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  const classes = `${base} ${variantStyles[variant]} ${
    disabled ? "cursor-not-allowed opacity-45 hover:translate-y-0 hover:shadow-none" : ""
  } ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
};

export default Button;
