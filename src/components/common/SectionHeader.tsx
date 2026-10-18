interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
}

const SectionHeader = ({
  label,
  title,
  description,
  light = false,
  align = "left",
}: SectionHeaderProps) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const textColor = light ? "text-white" : "text-slate-950";
  const descColor = light ? "text-slate-300" : "text-slate-600";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <span className="inline-flex items-center gap-2 sm:gap-3">
        <span className="h-[2px] w-6 bg-amber-600 sm:w-8" />
        <span
          className={`text-[11px] font-bold uppercase tracking-[0.22em] ${
            light ? "text-amber-400" : "text-amber-700"
          }`}
        >
          {label}
        </span>
      </span>

      <h2
        className={`mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold font-serif leading-tight ${textColor}`}
      >
        {title}
      </h2>

      {description && (
        <p className={`mt-2 max-w-xl text-sm leading-6 ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
