import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import Layout from "../components/layout/Layout";
import SEO from "../components/common/SEO";
import Container from "../components/common/Container";
import PageHero from "../components/common/PageHero";
import ServicePicker from "../components/quotation/ServicePicker";
import QuoteSummaryCard from "../components/quotation/QuoteSummaryCard";
import { createWhatsAppUrl } from "../config/site";
import {
  buildQuoteDocument,
  buildQuoteWhatsAppMessage,
  calculateQuote,
  type QuoteClient,
  type QuoteSelection,
} from "../utils/quotation";

const loadPdfModule = () => import("../utils/quotationPdf");

const MIN_NAME_LENGTH = 2;

const emptyClient: QuoteClient = { name: "", phone: "", email: "", institution: "" };

const clientFields: { key: keyof QuoteClient; label: string; type: string; placeholder: string; maxLength: number }[] = [
  { key: "name", label: "Full Name *", type: "text", placeholder: "e.g. Rahul Sharma", maxLength: 80 },
  { key: "phone", label: "WhatsApp / Phone", type: "tel", placeholder: "e.g. +91 98765 43210", maxLength: 20 },
  { key: "email", label: "Email Address", type: "email", placeholder: "e.g. scholar@university.ac.in", maxLength: 120 },
  { key: "institution", label: "University / Institution", type: "text", placeholder: "e.g. Bangalore University", maxLength: 120 },
];

const inputClass =
  "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500";

const trimClient = (client: QuoteClient): QuoteClient => ({
  name: client.name.trim(),
  phone: client.phone.trim(),
  email: client.email.trim(),
  institution: client.institution.trim(),
});

const Quotation = () => {
  const [selection, setSelection] = useState<QuoteSelection>({});
  const [client, setClient] = useState<QuoteClient>(emptyClient);
  const [downloading, setDownloading] = useState(false);

  const summary = useMemo(() => calculateQuote(selection), [selection]);
  const canSubmit = summary.lines.length > 0 && client.name.trim().length >= MIN_NAME_LENGTH;

  // Warm up the PDF chunk once the form is ready so the download feels instant.
  // A failed prefetch is harmless: the click handler imports again and reports errors.
  useEffect(() => {
    if (canSubmit) loadPdfModule().catch(() => undefined);
  }, [canSubmit]);

  const toggleService = (serviceId: string) =>
    setSelection((current) =>
      current[serviceId]
        ? Object.fromEntries(Object.entries(current).filter(([id]) => id !== serviceId))
        : { ...current, [serviceId]: 1 }
    );

  const changeQuantity = (serviceId: string, quantity: number) =>
    setSelection((current) => ({ ...current, [serviceId]: quantity }));

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const { downloadQuotationPdf } = await loadPdfModule();
      await downloadQuotationPdf(buildQuoteDocument(selection, trimClient(client)));
      toast.success("Your quotation PDF has been downloaded.");
    } catch {
      toast.error("Could not generate the PDF. Please try again or contact us on WhatsApp.");
    } finally {
      setDownloading(false);
    }
  };

  const handleWhatsApp = () => {
    const quote = buildQuoteDocument(selection, trimClient(client));
    window.open(createWhatsAppUrl(buildQuoteWhatsAppMessage(quote)), "_blank", "noopener,noreferrer");
  };

  return (
    <Layout>
      <SEO
        title="Get an Instant Research Quotation | Research Hub"
        description="Choose thesis, synopsis, research paper and data analysis services, see the total fee and payment schedule instantly, and download your Research Hub quotation as a PDF."
        url="/quotation"
      />

      <PageHero
        label="INSTANT QUOTATION"
        title="Build Your Research Quotation"
        description="Pick the services you need, see the fee and installment plan instantly, and download a ready-to-share PDF quotation."
      />

      <section className="py-14 sm:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="space-y-10 lg:col-span-7">
              <div>
                <h2 className="mb-1 text-2xl font-bold text-slate-950" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  1. Choose Services
                </h2>
                <p className="mb-5 text-sm text-slate-600">Select everything you need. Quantities can be adjusted where applicable.</p>
                <ServicePicker selection={selection} onToggle={toggleService} onQuantityChange={changeQuantity} />
              </div>

              <div>
                <h2 className="mb-1 text-2xl font-bold text-slate-950" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  2. Your Details
                </h2>
                <p className="mb-5 text-sm text-slate-600">These details are printed on your quotation. Nothing is stored on our servers.</p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {clientFields.map((field) => (
                    <div key={field.key}>
                      <label htmlFor={`quote-${field.key}`} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                        {field.label}
                      </label>
                      <input
                        id={`quote-${field.key}`}
                        type={field.type}
                        placeholder={field.placeholder}
                        maxLength={field.maxLength}
                        required={field.key === "name"}
                        value={client[field.key]}
                        onChange={(e) => setClient((current) => ({ ...current, [field.key]: e.target.value }))}
                        className={inputClass}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <QuoteSummaryCard
                summary={summary}
                canSubmit={canSubmit}
                downloading={downloading}
                onDownload={handleDownload}
                onWhatsApp={handleWhatsApp}
              />
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Quotation;
