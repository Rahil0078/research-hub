import { useState, useEffect } from "react";
import { Search, X, ArrowRight, BookOpen, Layers, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { servicesData } from "../../data/services";
import { researchDomainsData } from "../../data/domains";
import { academicResources } from "../../data/resources";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  const filteredServices = servicesData.filter(
    (s) => s.title.toLowerCase().includes(q) || s.shortDescription.toLowerCase().includes(q)
  );

  const filteredDomains = researchDomainsData.filter(
    (d) =>
      d.title.toLowerCase().includes(q) ||
      d.shortDescription.toLowerCase().includes(q) ||
      d.subDisciplines.some((sub) => sub.toLowerCase().includes(q))
  );

  const filteredResources = academicResources.filter(
    (r) => r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q)
  );

  return (
    <div className="fixed inset-0 z-[120] flex items-start justify-center p-4 sm:p-6 pt-20 sm:pt-28 overflow-y-auto">
      <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-10 animate-slide-up">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 gap-3">
          <Search size={20} className="text-amber-600 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search services (SLR, Thesis, Data Analysis), domains, or topics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-slate-800 placeholder-slate-400 text-sm focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-slate-400 hover:text-slate-600">
              <X size={18} />
            </button>
          )}
          <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-slate-700">
            <X size={20} />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-5">
          {/* Services Section */}
          {filteredServices.length > 0 && (
            <div>
              <div className="text-[11px] font-bold text-amber-700 uppercase tracking-wider px-2 mb-2 flex items-center gap-1.5">
                <Layers size={13} />
                Research Services ({filteredServices.length})
              </div>
              <div className="space-y-1">
                {filteredServices.map((svc) => (
                  <Link
                    key={svc.id}
                    to={`/services/${svc.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-amber-50/60 transition-colors group"
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-800 group-hover:text-amber-800">
                        {svc.title}
                      </div>
                      <div className="text-xs text-slate-500 line-clamp-1">{svc.shortDescription}</div>
                    </div>
                    <ArrowRight size={15} className="text-slate-400 group-hover:text-amber-700 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Disciplines Section */}
          {filteredDomains.length > 0 && (
            <div>
              <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider px-2 mb-2 flex items-center gap-1.5">
                <BookOpen size={13} />
                Research Disciplines ({filteredDomains.length})
              </div>
              <div className="space-y-1">
                {filteredDomains.map((dom) => (
                  <Link
                    key={dom.id}
                    to={`/research-domains/${dom.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-800 group-hover:text-slate-900">
                        {dom.title}
                      </div>
                      <div className="text-xs text-slate-500 line-clamp-1">{dom.shortDescription}</div>
                    </div>
                    <ArrowRight size={15} className="text-slate-400 group-hover:text-slate-800 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Resources Section */}
          {filteredResources.length > 0 && (
            <div>
              <div className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider px-2 mb-2 flex items-center gap-1.5">
                <ShieldCheck size={13} />
                Guides & Resources ({filteredResources.length})
              </div>
              <div className="space-y-1">
                {filteredResources.map((res) => (
                  <Link
                    key={res.id}
                    to="/resources"
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-emerald-50/60 transition-colors group"
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-800 group-hover:text-emerald-900">
                        {res.title}
                      </div>
                      <div className="text-xs text-slate-500 line-clamp-1">{res.description}</div>
                    </div>
                    <ArrowRight size={15} className="text-slate-400 group-hover:text-emerald-700 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {filteredServices.length === 0 &&
            filteredDomains.length === 0 &&
            filteredResources.length === 0 && (
              <div className="p-8 text-center text-slate-500 text-sm">
                No matching results found for "{query}". Try searching for "SLR", "Thesis", "Data Analysis", or "Management".
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
