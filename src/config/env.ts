export const env = {
  apiUrl: import.meta.env.VITE_API_URL ?? "",
  ecommerceUrl: import.meta.env.VITE_ECOMMERCE_URL ?? "",
  googleMapUrl:
    import.meta.env.VITE_GOOGLE_MAP_URL ??
    "https://maps.google.com/maps?q=India&output=embed",
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER ?? "",
  email: import.meta.env.VITE_EMAIL ?? "Daneenheatexchangerspvtltd@gmail.com",
} as const;
