interface IconProps {
  size?: number;
  className?: string;
  variant?: "gold" | "navy" | "white";
}

export const ResearchHubEmblem = ({
  size = 48,
  className = "",
  variant = "gold",
}: IconProps) => {
  const isGold = variant === "gold";
  const isNavy = variant === "navy";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Shield / Crest */}
      <rect
        width="64"
        height="64"
        rx="16"
        fill={isGold ? "#0B192C" : isNavy ? "#C58F28" : "#FFFFFF"}
      />
      <rect
        x="3"
        y="3"
        width="58"
        height="58"
        rx="13"
        stroke={isGold ? "#C58F28" : isNavy ? "#0B192C" : "#E2E8F0"}
        strokeWidth="2"
        strokeOpacity="0.8"
      />

      {/* Inner Decorative Laurel or Ring */}
      <circle
        cx="32"
        cy="32"
        r="24"
        stroke={isGold ? "#E5A93C" : isNavy ? "#0B192C" : "#C58F28"}
        strokeWidth="1.5"
        strokeDasharray="4 2"
        strokeOpacity="0.5"
      />

      {/* RH Monogram */}
      {/* Letter R */}
      <path
        d="M20 44V20H28.5C32.2 20 34.8 22.3 34.8 25.8C34.8 28.8 32.5 31 29.5 31.5L35.5 44H30.2L24.8 32.5H24.2V44H20ZM24.2 28.5H28.2C30 28.5 31 27.5 31 25.9C31 24.3 30 23.4 28.2 23.4H24.2V28.5Z"
        fill={isGold ? "#F3BA4A" : isNavy ? "#FFFFFF" : "#0B192C"}
      />
      {/* Letter H */}
      <path
        d="M37.5 44V20H41.8V29.8H46.8V20H51.1V44H46.8V33.8H41.8V44H37.5Z"
        fill={isGold ? "#FFFFFF" : isNavy ? "#0B192C" : "#C58F28"}
      />

      {/* Graduation Mortarboard Tassel accent at top */}
      <path
        d="M26 15L32 12L38 15L32 17.5L26 15Z"
        fill="#C58F28"
      />
      <path
        d="M38 15V19C38 19.5 38.5 20 39 20"
        stroke="#C58F28"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const GraduationCapIcon = ({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
  </svg>
);
