import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { createWhatsAppUrl } from "../../config/site";

const WhatsAppFloatingButton = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Quick Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-medium px-3.5 py-2 rounded-xl shadow-xl border border-slate-200/80 animate-fade-in">
          <span>Need Quick Academic Help? <strong>Chat with Experts</strong></span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 ml-1"
            aria-label="Dismiss tooltip"
          >
            <X size={13} />
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={createWhatsAppUrl("Hello Research Hub! I need consultation regarding my academic research / thesis / SLR work.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5B] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10 group-hover:hidden" />
        <MessageCircle size={28} className="fill-white" />
      </a>
    </div>
  );
};

export default WhatsAppFloatingButton;
