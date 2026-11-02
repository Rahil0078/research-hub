// Loaded on demand (dynamic import) when the user clicks "Download" so jsPDF
// never ships in the initial bundle.
import { jsPDF } from "jspdf";
import { __createTable, autoTable, type CellInput, type UserOptions } from "jspdf-autotable";
import { siteConfig } from "../config/site";
import { includedSupport, quotationTerms } from "../data/quotation";
import { formatINR, formatQuoteDate, unitText, type QuoteDocument } from "./quotation";

type RGB = [number, number, number];

const FONT = "Inter";
const FONT_FILES = [
  { file: "Inter-Regular.ttf", style: "normal" },
  { file: "Inter-Bold.ttf", style: "bold" },
] as const;

const NAVY: RGB = [1, 34, 67];
const ACCENT: RGB = [42, 86, 166];
const GREEN: RGB = [21, 128, 61];
const TEXT: RGB = [30, 41, 59];
const MUTED: RGB = [100, 116, 139];
const BORDER: RGB = [219, 228, 240];
const TINT: RGB = [244, 247, 252];

const PAGE_WIDTH = 210;
const PAGE_HEIGHT = 297;
const MARGIN = 16;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;
const FOOTER_SPACE = 22;
const LINE_HEIGHT_FACTOR = 1.4;
const PT_TO_MM = 0.3528;
const HEADING_HEIGHT = 4;
const HEADING_KEEP_WITH = 18;

const baseTable: Partial<UserOptions> = {
  margin: { left: MARGIN, right: MARGIN, bottom: FOOTER_SPACE },
  theme: "grid",
  rowPageBreak: "avoid",
  styles: {
    font: FONT,
    fontSize: 8.3,
    textColor: TEXT,
    lineColor: BORDER,
    lineWidth: 0.2,
    cellPadding: { horizontal: 2.6, vertical: 2 },
  },
  headStyles: { fillColor: NAVY, textColor: 255, fontStyle: "bold" },
};

let fontCache: Promise<string[]> | null = null;

const toBase64 = (buffer: ArrayBuffer): string => {
  const bytes = new Uint8Array(buffer);
  const CHUNK = 0x8000;
  let binary = "";
  for (let i = 0; i < bytes.length; i += CHUNK) {
    binary += String.fromCharCode(...bytes.subarray(i, i + CHUNK));
  }
  return btoa(binary);
};

/** Inter subset that includes the ₹ glyph (jsPDF's built-in fonts lack it). */
const loadFonts = (): Promise<string[]> => {
  fontCache ??= Promise.all(
    FONT_FILES.map(async ({ file }) => {
      const response = await fetch(`/fonts/${file}`);
      if (!response.ok) throw new Error(`Could not load ${file} (HTTP ${response.status})`);
      return toBase64(await response.arrayBuffer());
    })
  ).catch((error: unknown) => {
    fontCache = null;
    throw error;
  });
  return fontCache;
};

const lineHeight = (fontSize: number) => fontSize * PT_TO_MM * LINE_HEIGHT_FACTOR;

const tableEndY = (doc: jsPDF): number =>
  (doc as unknown as { lastAutoTable: { finalY: number } }).lastAutoTable.finalY;

const ensureSpace = (doc: jsPDF, y: number, needed: number): number => {
  if (y + needed <= PAGE_HEIGHT - FOOTER_SPACE) return y;
  doc.addPage();
  return MARGIN + 6;
};

const setText = (doc: jsPDF, size: number, style: "normal" | "bold", color: RGB) => {
  doc.setFont(FONT, style);
  doc.setFontSize(size);
  doc.setTextColor(...color);
};

const drawHeader = (doc: jsPDF, quote: QuoteDocument): number => {
  const right = PAGE_WIDTH - MARGIN;
  setText(doc, 24, "bold", NAVY);
  doc.text("RESEARCH HUB", MARGIN, 24);
  setText(doc, 9.5, "normal", ACCENT);
  doc.text("Research Writing & Academic Support", MARGIN, 31);

  setText(doc, 9, "bold", NAVY);
  doc.text("QUOTATION", right, 20, { align: "right" });
  setText(doc, 8, "normal", TEXT);
  doc.text(quote.number, right, 25, { align: "right" });
  doc.text(`Issue date: ${formatQuoteDate(quote.issueDate)}`, right, 31, { align: "right" });

  doc.setDrawColor(...NAVY);
  doc.setLineWidth(0.6);
  doc.line(MARGIN, 35, right, 35);

  setText(doc, 15, "bold", NAVY);
  doc.text("RESEARCH SUPPORT QUOTATION", PAGE_WIDTH / 2, 47, { align: "center" });
  return 53;
};

const drawClientTable = (doc: jsPDF, quote: QuoteDocument, y: number): number => {
  const { client } = quote;
  const body: CellInput[][] = [
    ["Prepared for", client.name, "Valid until", formatQuoteDate(quote.validUntil)],
    ["Phone", client.phone || "—", "Email", client.email || "—"],
  ];
  if (client.institution) body.push(["Institution", { content: client.institution, colSpan: 3 }]);

  autoTable(doc, {
    ...baseTable,
    startY: y,
    body,
    columnStyles: {
      0: { fontStyle: "bold", fillColor: TINT, cellWidth: 30 },
      2: { fontStyle: "bold", fillColor: TINT, cellWidth: 30 },
    },
  });
  return tableEndY(doc);
};

/** `keepWith` is the height (mm) of content that must stay on the heading's page. */
const drawHeading = (doc: jsPDF, text: string, y: number, keepWith = HEADING_KEEP_WITH): number => {
  const top = ensureSpace(doc, y + 8, keepWith);
  setText(doc, 11.5, "bold", NAVY);
  doc.text(text, MARGIN, top);
  return top + 3.5;
};

const drawParagraph = (doc: jsPDF, text: string, y: number, size = 9): number => {
  setText(doc, size, "normal", TEXT);
  const lines: string[] = doc.splitTextToSize(text, CONTENT_WIDTH);
  const top = ensureSpace(doc, y, lines.length * lineHeight(size));
  doc.text(lines, MARGIN, top);
  return top + (lines.length - 1) * lineHeight(size);
};

const drawBullets = (doc: jsPDF, items: string[], y: number): number => {
  const size = 8.5;
  let cursor = y + 5;
  for (const item of items) {
    setText(doc, size, "normal", TEXT);
    const lines: string[] = doc.splitTextToSize(item, CONTENT_WIDTH - 5);
    cursor = ensureSpace(doc, cursor, lines.length * lineHeight(size));
    doc.text("•", MARGIN + 1, cursor);
    doc.text(lines, MARGIN + 5, cursor);
    cursor += lines.length * lineHeight(size) + 1.2;
  }
  return cursor - lineHeight(size);
};

const drawScopeTable = (doc: jsPDF, quote: QuoteDocument, y: number): number => {
  autoTable(doc, {
    ...baseTable,
    startY: y,
    head: [["Service", "Included work (brief)", "Qty", "Amount"]],
    body: quote.lines.map((line) => [
      line.service.subtitle ? `${line.service.title}\n${line.service.subtitle}` : line.service.title,
      line.service.description,
      unitText(line.service, line.quantity),
      formatINR(line.amount),
    ]),
    columnStyles: {
      0: { cellWidth: 40, fontStyle: "bold", textColor: NAVY },
      2: { cellWidth: 20, halign: "center" },
      3: { cellWidth: 24, halign: "right", fontStyle: "bold" },
    },
  });
  return tableEndY(doc);
};

const feeTables = (quote: QuoteDocument): UserOptions[] => [
  {
    ...baseTable,
    body: [
      [
        { content: "Total quotation fee", styles: { fontStyle: "bold", fontSize: 10, valign: "middle" } },
        { content: formatINR(quote.total), styles: { fontStyle: "bold", fontSize: 17, textColor: GREEN, halign: "right" } },
      ],
    ],
    styles: { ...baseTable.styles, fillColor: TINT },
    columnStyles: { 1: { cellWidth: 70 } },
  },
  {
    ...baseTable,
    head: [["Installment", "Payment milestone", { content: "Amount", styles: { halign: "right" } }]],
    body: [
      ...quote.installments.map((step) => [step.label, step.milestone, formatINR(step.amount)]),
      [
        {
          content: `The ${quote.installments.length} installments total ${formatINR(quote.total)}. Each payment is due at the milestone listed above; the next stage proceeds after payment confirmation.`,
          colSpan: 3,
          styles: { fontSize: 7.5, fontStyle: "normal", textColor: MUTED, halign: "left" },
        },
      ],
    ],
    columnStyles: {
      0: { cellWidth: 28, fontStyle: "bold" },
      2: { cellWidth: 30, halign: "right", fontStyle: "bold" },
    },
  },
];

/** Height of a table without drawing it, so a section can be kept on one page. */
const measureTable = (doc: jsPDF, options: UserOptions): number => {
  const table = __createTable(doc, options);
  return [...table.head, ...table.body].reduce((sum, row) => sum + row.height, 0);
};

const drawFeeSection = (doc: jsPDF, quote: QuoteDocument, y: number): number => {
  const tables = feeTables(quote);
  const sectionHeight = tables.reduce((sum, options) => sum + measureTable(doc, options), HEADING_HEIGHT);
  let cursor = drawHeading(doc, "2. Fee & Payment Schedule", y, sectionHeight);
  for (const options of tables) {
    autoTable(doc, { ...options, startY: cursor });
    cursor = tableEndY(doc);
  }
  return cursor;
};

const drawContactTable = (doc: jsPDF, y: number): number => {
  autoTable(doc, {
    ...baseTable,
    startY: y,
    body: [
      ["Company", `${siteConfig.name} – Research Writing & Academic Support`],
      ["Phone", siteConfig.phones.join("  /  ")],
      ["Email", siteConfig.email],
      ["Address", siteConfig.address],
    ],
    columnStyles: { 0: { cellWidth: 30, fontStyle: "bold", fillColor: TINT } },
  });
  return tableEndY(doc);
};

const drawSignatures = (doc: jsPDF, quote: QuoteDocument, y: number): void => {
  const top = ensureSpace(doc, y + 10, 30);
  const rightColumn = PAGE_WIDTH / 2 + 6;
  doc.setDrawColor(...BORDER);
  doc.setLineWidth(0.3);
  doc.line(MARGIN, top, PAGE_WIDTH - MARGIN, top);

  setText(doc, 9.5, "bold", NAVY);
  doc.text("For Research Hub", MARGIN, top + 8);
  doc.text("Client Acceptance", rightColumn, top + 8);

  setText(doc, 8.5, "normal", TEXT);
  doc.text("Authorized representative: ____________________", MARGIN, top + 17);
  doc.text("Date: ____________________", MARGIN, top + 24);
  doc.text(`${quote.client.name}: ____________________`, rightColumn, top + 17, { maxWidth: CONTENT_WIDTH / 2 - 6 });
  doc.text("Date: ____________________", rightColumn, top + 24);
};

const drawFooters = (doc: jsPDF): void => {
  const pageCount = doc.getNumberOfPages();
  for (let page = 1; page <= pageCount; page += 1) {
    doc.setPage(page);
    doc.setDrawColor(...BORDER);
    doc.setLineWidth(0.3);
    doc.line(MARGIN, PAGE_HEIGHT - 15, PAGE_WIDTH - MARGIN, PAGE_HEIGHT - 15);
    setText(doc, 7.5, "normal", MUTED);
    doc.text("Research Hub | Research Writing & Academic Support", MARGIN, PAGE_HEIGHT - 10);
    doc.text(`Page ${page} of ${pageCount}`, PAGE_WIDTH - MARGIN, PAGE_HEIGHT - 10, { align: "right" });
  }
};

const createDocument = async (): Promise<jsPDF> => {
  const fonts = await loadFonts();
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  FONT_FILES.forEach(({ file, style }, index) => {
    doc.addFileToVFS(file, fonts[index]);
    doc.addFont(file, FONT, style);
  });
  doc.setLineHeightFactor(LINE_HEIGHT_FACTOR);
  return doc;
};

/** Draws the full quotation; returned so it can be previewed without saving. */
export const renderQuotationPdf = async (quote: QuoteDocument): Promise<jsPDF> => {
  const doc = await createDocument();
  doc.setProperties({ title: `Quotation ${quote.number}`, author: siteConfig.name, subject: "Research support quotation" });

  let y = drawHeader(doc, quote);
  y = drawClientTable(doc, quote, y);
  y = drawParagraph(doc, `Dear ${quote.client.name},`, y + 9);
  y = drawParagraph(
    doc,
    "Thank you for considering Research Hub for your research-support requirements. This quotation outlines the selected services, fee, payment schedule and working terms for your review.",
    y + 6
  );
  y = drawScopeTable(doc, quote, drawHeading(doc, "1. Selected Services & Deliverables", y));
  y = drawFeeSection(doc, quote, y);
  y = drawBullets(doc, includedSupport, drawHeading(doc, "3. Included Support & File Delivery", y));
  y = drawBullets(doc, quotationTerms, drawHeading(doc, "4. Terms & Clarifications", y));
  y = drawContactTable(doc, drawHeading(doc, "5. Company Contact Details", y));
  y = drawParagraph(
    doc,
    "Thank you for the opportunity to support your research project. Please share this quotation with our team on WhatsApp or email to confirm the scope and proceed.",
    y + 9
  );
  drawSignatures(doc, quote, y);
  drawFooters(doc);
  return doc;
};

export const downloadQuotationPdf = async (quote: QuoteDocument): Promise<void> => {
  const doc = await renderQuotationPdf(quote);
  doc.save(`Research-Hub-Quotation-${quote.number.replace(/[^A-Za-z0-9]+/g, "-")}.pdf`);
};
