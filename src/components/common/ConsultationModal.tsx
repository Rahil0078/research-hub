import { useState, useEffect } from "react";
import { X, MessageCircle, ShieldCheck, Clock } from "lucide-react";
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

  /** The form has no backend: submitting opens WhatsApp with the details pre-filled. */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Academic Consultation Request*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email || "-"}\n*Level:* ${formData.academicLevel}\n*Service:* ${formData.service}\n*Domain:* ${formData.domain}\n*Deadline:* ${formData.deadline}\n*Details:* ${formData.requirements || "I would like to discuss my requirements with an expert."}`;
    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-navy/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-auto z-10 animate-slide-up">
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-brand-navy-light via-slate-800 to-accent-950 p-6 sm:p-7 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close consultation modal"
          >
            <X size={20} />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-400/20 border border-accent-300/30 text-accent-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <ShieldCheck size={14} />
            100% Confidential & Secure
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-serif">
            Request Free Academic Consultation
          </h3>
          <p className="text-sm text-slate-300 mt-1 max-w-lg">
            Share your research requirements and continue on WhatsApp. Our 10+ years experienced PhD research team will reply there.
          </p>
        </div>

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
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500 text-sm"
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
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                placeholder="e.g. scholar@university.edu"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Academic Level
              </label>
              <select
                value={formData.academicLevel}
                onChange={(e) => setFormData({ ...formData, academicLevel: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500 text-sm bg-white"
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
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500 text-sm bg-white"
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
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500 text-sm bg-white"
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
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500 text-sm resize-none"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-accent-600" /> 24h Response
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-600" /> Non-Disclosure (NDA)
              </span>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-md shadow-emerald-600/20"
            >
              <MessageCircle size={18} />
              Continue on WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultationModal;
