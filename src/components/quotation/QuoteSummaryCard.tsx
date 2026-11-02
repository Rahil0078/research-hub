import { Download, Loader2, MessageCircle } from "lucide-react";
import { formatINR, unitText, type QuoteSummary } from "../../utils/quotation";

interface QuoteSummaryCardProps {
  summary: QuoteSummary;
  canSubmit: boolean;
  downloading: boolean;
  onDownload: () => void;
  onWhatsApp: () => void;
}

const QuoteSummaryCard = ({ summary, canSubmit, downloading, onDownload, onWhatsApp }: QuoteSummaryCardProps) => {
  const hasLines = summary.lines.length > 0;

  return (
    <div className="rounded-2xl bg-brand-navy p-6 text-white shadow-xl sm:p-7 lg:sticky lg:top-28">
      <span className="text-xs font-bold uppercase tracking-[0.22em] text-accent-400">Your Quotation</span>

      {hasLines ? (
        <ul className="mt-4 space-y-3 border-b border-slate-700/70 pb-4">
          {summary.lines.map((line) => (
            <li key={line.service.id} className="flex items-start justify-between gap-4 text-sm">
              <span className="text-slate-200">
                {line.service.title}
                {line.service.unitLabel && (
                  <span className="block text-xs text-slate-400">{unitText(line.service, line.quantity)}</span>
                )}
              </span>
              <span className="shrink-0 font-semibold">{formatINR(line.amount)}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 border-b border-slate-700/70 pb-4 text-sm text-slate-400">
          Select one or more services to see your quotation.
        </p>
      )}

      <div className="mt-4 flex items-end justify-between">
        <span className="text-sm text-slate-300">Total fee</span>
        <span className="text-3xl font-bold text-brand-gold">{formatINR(summary.total)}</span>
      </div>

      {summary.installments.length > 0 && (
        <div className="mt-4 rounded-xl border border-slate-700/70 bg-brand-navy-light/70 p-3.5 text-xs">
          <span className="mb-2 block font-semibold text-slate-200">Payment in {summary.installments.length} installments</span>
          <ul className="space-y-1.5 text-slate-400">
            {summary.installments.map((step) => (
              <li key={step.label} className="flex justify-between gap-3">
                <span>
                  {step.label} · {step.milestone}
                </span>
                <span className="shrink-0 text-slate-200">{formatINR(step.amount)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6 space-y-3">
        <button
          type="button"
          onClick={onDownload}
          disabled={!canSubmit || downloading}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gold px-5 py-3.5 text-sm font-bold text-brand-navy shadow-md transition-all hover:bg-brand-gold-dark active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100"
        >
          {downloading ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
          <span>{downloading ? "Preparing PDF…" : "Download Quotation PDF"}</span>
        </button>
        <button
          type="button"
          onClick={onWhatsApp}
          disabled={!canSubmit}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-bold text-white transition-all hover:bg-emerald-500 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100"
        >
          <MessageCircle size={18} />
          <span>Send Quote on WhatsApp</span>
        </button>
        {!canSubmit && (
          <p className="text-center text-xs text-slate-400">Choose a service and enter your name to continue.</p>
        )}
      </div>
    </div>
  );
};

export default QuoteSummaryCard;
