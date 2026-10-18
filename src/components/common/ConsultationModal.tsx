import { useState, useEffect } from "react";
import { X, CheckCircle2, MessageCircle, Send, ShieldCheck, Clock } from "lucide-react";
import { createWhatsAppUrl } from "../../config/site";
import { servicesData } from "../../data/services";
import { researchDomainsData } from "../../data/domains";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultDomain?: string;
}

export const openConsultationModal = (service?: string, domain?: string) => {
  const event = new CustomEvent("open-consultation", {
    detail: { service, domain },
  });
  window.dispatchEvent(event);
};

const ConsultationModal = ({
  isOpen,
  onClose,
  defaultService = "",
  defaultDomain = "",
}: ConsultationModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    academicLevel: "PhD / Doctoral Candidate",
    service: defaultService || servicesData[0].title,
    domain: defaultDomain || researchDomainsData[0].title,
    deadline: "Within 1 Month",
    requirements: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) setFormData((prev) => ({ ...prev, service: defaultService }));
    if (defaultDomain) setFormData((prev) => ({ ...prev, domain: defaultDomain }));
  }, [defaultService, defaultDomain]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const message = `*Academic Consultation Request*\n\n*Name:* ${formData.name}\n*Level:* ${formData.academicLevel}\n*Service:* ${formData.service}\n*Domain:* ${formData.domain}\n*Deadline:* ${formData.deadline}\n*Details:* ${formData.requirements || "I would like to discuss my requirements with an expert."}`;
    window.open(createWhatsAppUrl(message), "_blank");
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-auto z-10 animate-slide-up">
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-amber-950 p-6 sm:p-7 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close consultation modal"
          >
            <X size={20} />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-300/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <ShieldCheck size={14} />
            100% Confidential & Secure
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-serif">
            Request Free Academic Consultation
          </h3>
          <p className="text-sm text-slate-300 mt-1 max-w-lg">
            Share your research requirements. Our 10+ years experienced PhD research team will review and connect within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center sm:p-10">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={36} />
            </div>

            <h4 className="text-2xl font-bold text-slate-900 font-serif">
              Enquiry Received Successfully!
            </h4>
            <p className="text-slate-600 mt-2 max-w-md mx-auto text-sm leading-relaxed">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>. A dedicated research consultant has been assigned to your query and will contact you at{" "}
              <span className="font-semibold text-slate-900">{formData.phone || formData.email}</span> within 24 hours.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={handleWhatsAppRedirect}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-md shadow-emerald-600/20"
              >
                <MessageCircle size={18} />
                Connect on WhatsApp Right Now
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Priya Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. scholar@university.edu"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Academic Level
                </label>
                <select
                  value={formData.academicLevel}
                  onChange={(e) => setFormData({ ...formData, academicLevel: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 text-sm bg-white"
                >
                  <option>PhD / Doctoral Candidate</option>
                  <option>Postdoctoral Fellow / Faculty</option>
                  <option>Master's / Postgraduate Student</option>
                  <option>Undergraduate Researcher</option>
                  <option>Independent Researcher</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Service Needed
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 text-sm bg-white"
                >
                  {servicesData.map((svc) => (
                    <option key={svc.id} value={svc.title}>
                      {svc.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Research Domain
                </label>
                <select
                  value={formData.domain}
                  onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 text-sm bg-white"
                >
                  {researchDomainsData.map((dom) => (
                    <option key={dom.id} value={dom.title}>
                      {dom.title}
                    </option>
                  ))}
                  <option value="Other / Interdisciplinary">Other / Interdisciplinary</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Research Topic or Project Description
              </label>
              <textarea
                rows={3}
                placeholder="Briefly describe your research problem, current stage (proposal, methodology, chapters, revisions), or specific requirements..."
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 text-sm resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-amber-600" /> 24h Response
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-600" /> Non-Disclosure (NDA)
                </span>
              </div>

              <div className="flex w-full sm:w-auto gap-2.5">
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-emerald-500 text-emerald-700 hover:bg-emerald-50 font-semibold text-xs transition-colors"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </button>
                <button
                  type="submit"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wide transition-all shadow-md"
                >
                  <Send size={14} />
                  Submit Request
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ConsultationModal;
