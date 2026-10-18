/// <reference types="vite/client" />

interface Window {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
}

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_ECOMMERCE_URL: string;
  readonly VITE_GOOGLE_MAP_URL: string;
  readonly VITE_WHATSAPP_NUMBER: string;
  readonly VITE_EMAIL: string;
  readonly VITE_GA4_MEASUREMENT_ID: string;
  readonly VITE_GTM_CONTAINER_ID: string;
  readonly VITE_CLARITY_PROJECT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
