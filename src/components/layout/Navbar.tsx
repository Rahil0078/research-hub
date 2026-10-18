import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Search, ArrowRight, MessageCircle } from "lucide-react";
import Container from "../common/Container";
import Logo from "../common/Logo";
import { navigation } from "../../constants/navigation";
import { openConsultationModal } from "../common/ConsultationModal";
import SearchModal from "../common/SearchModal";
import { createWhatsAppUrl } from "../../config/site";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
            : "bg-white/90 backdrop-blur-sm border-b border-slate-100/60"
        }`}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Logo />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) => `
                    relative text-[14px] font-medium transition-colors py-1
                    ${
                      isActive
                        ? "text-slate-950 font-semibold after:w-full"
                        : "text-slate-600 hover:text-slate-950 after:w-0"
                    }
                    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-amber-600 after:transition-all after:duration-300 hover:after:w-full
                  `}
                >
                  {item.title}
                </NavLink>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Search Icon */}
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Search services and domains"
                className="p-2.5 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                <Search size={19} />
              </button>

              {/* Consultation CTA Button */}
              <button
                type="button"
                onClick={() => openConsultationModal()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow active:scale-95 group cursor-pointer"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className="p-2 text-slate-700 hover:text-slate-950"
              >
                <Search size={22} />
              </button>

              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={open}
                onClick={() => setOpen(true)}
                className="p-2 text-slate-900 hover:text-amber-700"
              >
                <Menu size={26} />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-[100] bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      >
        <div
          className={`fixed inset-y-0 right-0 w-full max-w-xs bg-white p-6 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <Logo size="sm" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="mt-6 flex flex-col space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `
                    px-3 py-2.5 rounded-xl text-base font-medium transition-colors
                    ${
                      isActive
                        ? "bg-amber-50 text-amber-800 font-semibold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    }
                  `}
                >
                  {item.title}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-slate-100 space-y-3">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openConsultationModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm transition-all"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight size={16} />
            </button>

            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-emerald-500 text-emerald-700 font-semibold text-sm hover:bg-emerald-50 transition-colors"
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Global Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

export default Navbar;