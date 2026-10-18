import { Link } from "react-router-dom";
import { Phone, Mail, ShieldCheck, Clock, Award, MessageCircle } from "lucide-react";
import Container from "../common/Container";
import Logo from "../common/Logo";
import { siteConfig, createWhatsAppUrl } from "../../config/site";
import { navigation } from "../../constants/navigation";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
      <Container>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-14 lg:py-16">
          {/* Column 1: Brand & Credo */}
          <div className="space-y-4">
            <Logo dark size="md" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Your trusted partner for PhD, thesis writing, SLR, bibliometric analysis, and publication support. Original, Confidential, Professional.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-amber-500 shrink-0" />
                <span>Strict Non-Disclosure & Confidentiality</span>
              </span>
              <span className="flex items-center gap-2">
                <Award size={16} className="text-amber-500 shrink-0" />
                <span>10+ Years Experienced Writers</span>
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} className="text-amber-500 shrink-0" />
                <span>24/7 Scholar Support Desk</span>
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-amber-400 transition-colors inline-block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/#testimonials"
                  className="text-slate-400 hover:text-amber-400 transition-colors inline-block"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-slate-400 hover:text-amber-400 transition-colors inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Get In Touch */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.phones[0].replace(/\s+/g, "")}`}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <Phone size={16} className="text-amber-500 shrink-0" />
                  <span>{siteConfig.phones[0]}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phones[1].replace(/\s+/g, "")}`}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <Phone size={16} className="text-amber-500 shrink-0" />
                  <span>{siteConfig.phones[1]}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <Mail size={16} className="text-amber-500 shrink-0" />
                  <span className="break-all">{siteConfig.email}</span>
                </a>
              </li>
            </ul>

            <div className="mt-5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400">
              <span className="block font-medium text-slate-300 mb-0.5">Availability</span>
              Monday – Saturday, 9:00 AM – 8:00 PM IST
            </div>
          </div>

          {/* Column 4: Follow Us & Academic Trust */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Connect With Us
            </h3>
            <div className="flex flex-col gap-3">
              {/* Official Instagram */}
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-amber-900/30 border border-pink-500/30 text-white hover:border-pink-400 transition-all text-xs font-semibold group"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-sm">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <span className="block text-white font-bold group-hover:text-pink-300 transition-colors">
                    Instagram
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {siteConfig.instagramHandle}
                  </span>
                </div>
              </a>

              {/* Direct WhatsApp Action */}
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-white hover:border-emerald-400 transition-all text-xs font-semibold group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white shrink-0 shadow-sm">
                  <MessageCircle size={16} />
                </div>
                <div>
                  <span className="block text-white font-bold group-hover:text-emerald-300 transition-colors">
                    WhatsApp Chat
                  </span>
                  <span className="text-[11px] text-slate-400">
                    +91 8956338249
                  </span>
                </div>
              </a>
            </div>

            <div className="mt-5 p-3.5 rounded-xl bg-gradient-to-br from-slate-900 to-amber-950/40 border border-amber-900/40">
              <div className="text-xs font-semibold text-amber-300">Fast-Track Peer Support</div>
              <p className="text-xs text-slate-400 mt-1">
                Facing urgent university deadlines or revision requests? Reach our senior editorial desk today.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.titleSuffix}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Contact Desk
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
