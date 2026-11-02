import {
  installmentPlan,
  quoteServices,
  QUOTE_VALIDITY_DAYS,
  type QuoteService,
} from "../data/quotation";

/** Selected service id → quantity. Unselected services are absent. */
export type QuoteSelection = Readonly<Record<string, number>>;

export interface QuoteClient {
  name: string;
  phone: string;
  email: string;
  institution: string;
}

export interface QuoteLine {
  service: QuoteService;
  quantity: number;
  amount: number;
}

export interface QuoteInstallment {
  label: string;
  milestone: string;
  amount: number;
}

export interface QuoteSummary {
  lines: QuoteLine[];
  total: number;
  installments: QuoteInstallment[];
}

export interface QuoteDocument extends QuoteSummary {
  client: QuoteClient;
  number: string;
  issueDate: Date;
  validUntil: Date;
}

const ORDINALS = ["1st", "2nd", "3rd", "4th", "5th", "6th"];

const inrFormatter = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 });

export const formatINR = (amount: number): string => `₹${inrFormatter.format(amount)}`;

export const formatQuoteDate = (date: Date): string =>
  date.toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });

export const unitText = (service: QuoteService, quantity: number): string =>
  service.unitLabel ? `${quantity} ${service.unitLabel}${quantity === 1 ? "" : "s"}` : "1";

/** Splits the total by plan share; the last installment absorbs rounding. */
const splitInstallments = (total: number): QuoteInstallment[] => {
  let allocated = 0;
  return installmentPlan.map((step, index) => {
    const isLast = index === installmentPlan.length - 1;
    const amount = isLast ? total - allocated : Math.round(total * step.share);
    allocated += amount;
    return { label: ORDINALS[index] ?? `${index + 1}th`, milestone: step.milestone, amount };
  });
};

export const calculateQuote = (selection: QuoteSelection): QuoteSummary => {
  const lines = quoteServices
    .filter((service) => (selection[service.id] ?? 0) > 0)
    .map((service) => {
      const quantity = selection[service.id];
      return { service, quantity, amount: service.price * quantity };
    });
  const total = lines.reduce((sum, line) => sum + line.amount, 0);
  return { lines, total, installments: total > 0 ? splitInstallments(total) : [] };
};

/** e.g. RH / RAHUL / 02-11-2026 / 4821 — the random suffix keeps quotes distinct. */
export const createQuoteNumber = (clientName: string, date: Date): string => {
  const firstName = clientName.trim().split(/\s+/)[0] ?? "";
  const nameCode = firstName.toUpperCase().replace(/[^A-Z]/g, "").slice(0, 12) || "CLIENT";
  const datePart = date
    .toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" })
    .replaceAll("/", "-");
  const suffix = String(crypto.getRandomValues(new Uint32Array(1))[0] % 10000).padStart(4, "0");
  return `RH / ${nameCode} / ${datePart} / ${suffix}`;
};

export const buildQuoteDocument = (selection: QuoteSelection, client: QuoteClient): QuoteDocument => {
  const issueDate = new Date();
  const validUntil = new Date(issueDate);
  validUntil.setDate(validUntil.getDate() + QUOTE_VALIDITY_DAYS);
  return {
    ...calculateQuote(selection),
    client,
    number: createQuoteNumber(client.name, issueDate),
    issueDate,
    validUntil,
  };
};

export const buildQuoteWhatsAppMessage = (quote: QuoteDocument): string => {
  const items = quote.lines
    .map((line) => `• ${line.service.title} (${unitText(line.service, line.quantity)}) — ${formatINR(line.amount)}`)
    .join("\n");
  const institution = quote.client.institution ? [`*Institution:* ${quote.client.institution}`] : [];
  return [
    "*Quotation Request — Research Hub*",
    `*Quote No:* ${quote.number}`,
    `*Name:* ${quote.client.name}`,
    ...institution,
    "",
    items,
    "",
    `*Total:* ${formatINR(quote.total)}`,
    "",
    "Please confirm the scope and next steps.",
  ].join("\n");
};
