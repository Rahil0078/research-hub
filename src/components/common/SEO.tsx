import { useEffect } from "react";
import { absoluteUrl, site } from "../../config/site";

type JsonLd = Record<string, unknown>;

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  robots?: string;
  breadcrumbs?: BreadcrumbItem[];
  structuredData?: JsonLd[];
}

const defaultKeywords =
  "academic research support, thesis writing, dissertation guidance, systematic literature review, SLR, PRISMA 2020, research proposal writing, data analysis, SPSS, AMOS, SmartPLS, Scopus publication, SCI indexed journals, plagiarism removal, PhD assistance";

const setMeta = (selector: string, attribute: "name" | "property", value: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  element.content = content;
};

const setLink = (rel: string, href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
};

const baseSchemas = (): JsonLd[] => [
  {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${site.url}/#organization`,
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    logo: absoluteUrl(site.logo),
    brand: { "@type": "Brand", name: site.name },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      email: site.email,
      contactType: "academic consultancy and support",
      areaServed: "Worldwide",
      availableLanguage: ["en", "hi"],
    },
    address: { "@type": "PostalAddress", ...site.officeAddress },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    publisher: { "@id": `${site.url}/#organization` },
  },
];

const SEO = ({
  title,
  description = "Research Hub provides expert academic research support for Thesis & Dissertation Writing, Systematic Literature Review (SLR), Proposal Writing, Data Analysis, and Journal Publication. 10+ years experienced team.",
  keywords = defaultKeywords,
  image = site.defaultImage,
  url = "/",
  type = "website",
  robots = "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  breadcrumbs,
  structuredData = [],
}: SEOProps) => {
  useEffect(() => {
    const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;
    const canonicalUrl = absoluteUrl(url);
    const imageUrl = absoluteUrl(image);

    document.title = fullTitle;

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[name="keywords"]', "name", "keywords", keywords);
    setMeta('meta[name="robots"]', "name", "robots", robots);

    setMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta('meta[property="og:image"]', "property", "og:image", imageUrl);
    setMeta('meta[property="og:type"]', "property", "og:type", type);
    setMeta('meta[property="og:site_name"]', "property", "og:site_name", site.name);

    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", imageUrl);

    setLink("canonical", canonicalUrl);

    const schemas: JsonLd[] = [...baseSchemas()];

    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: absoluteUrl(crumb.path),
        })),
      });
    }

    schemas.push(...structuredData);

    const scriptId = "dynamic-seo-schema";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schemas);
  }, [title, description, keywords, image, url, type, robots, breadcrumbs, structuredData]);

  return null;
};

export default SEO;
