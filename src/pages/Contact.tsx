import { useState } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
} from "lucide-react";
import Layout from "../components/layout/Layout";
import SEO from "../components/common/SEO";
import Container from "../components/common/Container";
import { siteConfig, createWhatsAppUrl } from "../config/site";
import { servicesData } from "../data/services";
import { researchDomainsData } from "../data/domains";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    academicLevel: "PhD Scholar",
    service: servicesData[0].title,
    domain: researchDomainsData[0].title,
    deadline: "Within 1 Month",
    requirements: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Consultation inquiry sent! Our team will reach you within 24 hours.");
  };

  const handleWhatsAppRedirect = () => {
    const message = `*Direct Academic Consultation Inquiry*\n\n*Name:* ${formData.name || "Scholar"}\n*Service:* ${formData.service}\n*Domain:* ${formData.domain}\n*Details:* ${formData.requirements || "Please share availability for a consultation session."}`;
    window.open(createWhatsAppUrl(message), "_blank");
  };

  return (
    <Layout>
      <SEO
        title="Contact Us & Book Free Research Consultation | Research Hub"
        description="Get in touch with Research Hub. Phone: +91 8956338249 / +91 9112837665, Email: researchhub147@gmail.com. Rapid 24-hour turnaround for academic queries."
        url="/contact"
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-amber-50/50 via-white to-white py-14 sm:py-20 border-b border-slate-100">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-700">
              GET IN TOUCH
            </span>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 mt-2 tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Consult with Our Senior Research Panel
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-sans">
              Have an upcoming proposal deadline, complex statistical hurdle, or peer review revision? Discuss your project confidentially with our PhD mentors.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Contact Details & WhatsApp */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl bg-slate-950 text-white p-7 sm:p-8 shadow-xl space-y-6">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-400">
                  DIRECT CONTACT CHANNELS
                </span>

                <div className="space-y-4">
                  <a
                    href={`tel:${siteConfig.phones[0].replace(/\s+/g, "")}`}
                    className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-colors group"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">Direct Hotline</span>
                      <span className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                        {siteConfig.phones[0]}
                      </span>
                    </div>
                  </a>

                  <a
                    href={`tel:${siteConfig.phones[1].replace(/\s+/g, "")}`}
                    className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-colors group"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">Consultation Desk</span>
                      <span className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                        {siteConfig.phones[1]}
                      </span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-colors group"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">Email Inquiries</span>
                      <span className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors break-all">
                        {siteConfig.email}
                      </span>
                    </div>
                  </a>
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-3 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-amber-400" />
                    <span>Mon – Sat, 9:00 AM – 8:00 PM IST (24h online response)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-emerald-400" />
                    <span>Non-Disclosure Agreement (NDA) on request</span>
                  </div>
                </div>

                {/* Instant WhatsApp Action */}
                <div className="pt-2">
                  <a
                    href={createWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-md active:scale-95"
                  >
                    <MessageCircle size={18} />
                    <span>Chat on WhatsApp Directly</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-lg">
                <h3
                  className="text-2xl font-bold text-slate-950 mb-1"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Send an Academic Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Fill in your research stage. Our senior coordinators will evaluate and share a detailed consultation roadmap within 24 hours.
                </p>

                {submitted ? (
                  <div className="p-8 text-center bg-amber-50/50 rounded-2xl border border-amber-200/80">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 font-serif">
                      Thank You, {formData.name}!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto">
                      Your query has been logged. An academic supervisor will review your project details and contact you via WhatsApp / Phone shortly.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        type="button"
                        onClick={handleWhatsAppRedirect}
                        className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-xs flex items-center justify-center gap-2"
                      >
                        <MessageCircle size={16} />
                        Continue on WhatsApp
                      </button>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold"
                      >
                        Submit Another Query
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500"
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
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500"
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
                          placeholder="e.g. scholar@university.ac.in"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                          Academic Degree Level
                        </label>
                        <select
                          value={formData.academicLevel}
                          onChange={(e) => setFormData({ ...formData, academicLevel: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500"
                        >
                          <option>PhD / Doctoral Scholar</option>
                          <option>Postgraduate / Master's / M.Tech</option>
                          <option>Undergraduate Researcher</option>
                          <option>Faculty / University Professor</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                          Service Required
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500"
                        >
                          {servicesData.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
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
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500"
                        >
                          {researchDomainsData.map((d) => (
                            <option key={d.id} value={d.title}>
                              {d.title}
                            </option>
                          ))}
                          <option value="Interdisciplinary">Interdisciplinary / Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Research Topic & Description
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Share your research title, problem statement, current status, or university submission deadline..."
                        value={formData.requirements}
                        onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500"
                      />
                    </div>

                    <div className="pt-3 flex items-center justify-between">
                      <span className="text-xs text-slate-500 flex items-center gap-1.5">
                        <ShieldCheck size={15} className="text-emerald-600" />
                        100% Confidential
                      </span>

                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md active:scale-95 cursor-pointer"
                      >
                        <Send size={14} />
                        <span>Submit Inquiry</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Contact;
