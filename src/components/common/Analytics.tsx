import { useEffect } from "react";

const appendScript = (id: string, src: string) => {
  if (document.getElementById(id)) return;

  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
};

const Analytics = () => {
  useEffect(() => {
    const gaId = import.meta.env.VITE_GA4_MEASUREMENT_ID;
    const gtmId = import.meta.env.VITE_GTM_CONTAINER_ID;
    const clarityId = import.meta.env.VITE_CLARITY_PROJECT_ID;

    if (gaId) {
      appendScript("ga4", `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`);
      window.dataLayer = window.dataLayer ?? [];
      window.gtag = window.gtag ?? ((...args: unknown[]) => window.dataLayer?.push(args));
      window.gtag("js", new Date());
      window.gtag("config", gaId, { send_page_view: true });
    }

    if (gtmId) {
      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      appendScript("gtm", `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`);
    }

    if (clarityId) {
      appendScript("clarity", `https://www.clarity.ms/tag/${encodeURIComponent(clarityId)}`);
    }
  }, []);

  return null;
};

export default Analytics;
