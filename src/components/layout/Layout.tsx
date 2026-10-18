import { useState, useEffect, type ReactNode } from "react";
import { Toaster } from "sonner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ConsultationModal from "../common/ConsultationModal";
import WhatsAppFloatingButton from "../common/WhatsAppFloatingButton";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedDomain, setSelectedDomain] = useState<string>("");

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ service?: string; domain?: string }>;
      if (customEvent.detail) {
        if (customEvent.detail.service) setSelectedService(customEvent.detail.service);
        if (customEvent.detail.domain) setSelectedDomain(customEvent.detail.domain);
      }
      setModalOpen(true);
    };

    window.addEventListener("open-consultation", handleOpen);
    return () => window.removeEventListener("open-consultation", handleOpen);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloatingButton />

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedService("");
          setSelectedDomain("");
        }}
        defaultService={selectedService}
        defaultDomain={selectedDomain}
      />

      <Toaster position="top-right" richColors closeButton />
    </div>
  );
};

export default Layout;
