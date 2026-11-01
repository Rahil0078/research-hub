interface BrandMarkProps {
  size?: number;
  className?: string;
  /** "light" = navy mark for white backgrounds, "dark" = white mark for navy backgrounds */
  tone?: "light" | "dark";
  /** Gently bobs the graduation cap (used by the page loader) */
  animated?: boolean;
}

const NAVY = "#012243";
const GOLD = "#EFC374";

/** Research Hub mark: graduation cap resting on an open book (from the client mockup). */
const BrandMark = ({ size = 48, className = "", tone = "light", animated = false }: BrandMarkProps) => {
  const ink = tone === "dark" ? "#FFFFFF" : NAVY;
  const pageFill = tone === "dark" ? "none" : "#FFFFFF";

  return (
    <svg
      width={size}
      height={(size * 60) / 64}
      viewBox="0 0 64 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Book cover */}
      <path
        d="M4 30V54C14 51.5 24 52.5 32 57C40 52.5 50 51.5 60 54V30"
        stroke={ink}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Pages */}
      <path
        d="M31 53C24 48.5 15 47.5 8 49V27C15 25.5 24 26.5 31 31Z"
        fill={pageFill}
        stroke={ink}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M33 53C40 48.5 49 47.5 56 49V27C49 25.5 40 26.5 33 31Z"
        fill={pageFill}
        stroke={ink}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />

      {/* Graduation cap */}
      <g className={animated ? "animate-cap-bob" : undefined} style={{ transformOrigin: "32px 18px" }}>
        <path d="M18 17.5V26C22 29.5 27 31 32 31C37 31 42 29.5 46 26V17.5L32 23Z" fill={ink} />
        <path d="M32 3L57 13L32 23L7 13Z" fill={ink} />
        {/* Tassel */}
        <path d="M32 13L52 16.5V29" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M50.5 29H53.5L54.5 36H49.5Z" fill={GOLD} />
      </g>
    </svg>
  );
};

export default BrandMark;
