import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";

const root = process.cwd();
const pagesDirectory = join(root, "src", "pages");
const routesFile = join(root, "src", "routes", "AppRoutes.tsx");
const servicesFile = join(root, "src", "data", "services.ts");
const domainsFile = join(root, "src", "data", "domains.ts");
const output = join(root, "public", "sitemap.xml");
const siteUrl = "https://researchhub.org";

const allFiles = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  return (
    await Promise.all(
      entries.map((entry) =>
        entry.isDirectory()
          ? allFiles(join(directory, entry.name))
          : [join(directory, entry.name)]
      )
    )
  ).flat();
};

const routePriority = (path) => {
  if (path === "/") return "1.0";
  if (path === "/services" || path === "/contact") return "0.9";
  if (path.startsWith("/services/")) return "0.8";
  if (path === "/research-domains" || path.startsWith("/research-domains/")) return "0.8";
  return "0.7";
};

const routeChangeFrequency = (path) =>
  path.startsWith("/services") ? "weekly" : "monthly";

const escapeXml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const routeSource = await readFile(routesFile, "utf8");
const staticRoutes = [...routeSource.matchAll(/<Route\s+path="(\/[^":]*)"/g)]
  .map((match) => match[1])
  .filter((path) => !path.includes("*"));

const serviceSource = await readFile(servicesFile, "utf8");
const serviceSlugs = [...serviceSource.matchAll(/slug:\s*"([a-z0-9-]+)"/g)].map(
  (match) => `/services/${match[1]}`
);

const domainSource = await readFile(domainsFile, "utf8");
const domainSlugs = [...domainSource.matchAll(/slug:\s*"([a-z0-9-]+)"/g)].map(
  (match) => `/research-domains/${match[1]}`
);

const files = await allFiles(pagesDirectory);
const sourceLastModified = await Promise.all(
  files.map(async (file) => (await stat(file)).mtime)
);
const lastmod = new Date(
  Math.max(...sourceLastModified.map((date) => date.getTime()))
)
  .toISOString()
  .slice(0, 10);

const urls = [
  ...new Set([...staticRoutes, ...serviceSlugs, ...domainSlugs]),
].sort((a, b) => a.localeCompare(b));

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
  .map(
    (path) => `  <url>\n    <loc>${escapeXml(
      `${siteUrl}${path}`
    )}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${routeChangeFrequency(
      path
    )}</changefreq>\n    <priority>${routePriority(path)}</priority>\n  </url>`
  )
  .join("\n")}\n</urlset>\n`;

await writeFile(output, xml, "utf8");
console.log(
  `Generated sitemap with ${urls.length} URLs from ${relative(
    root,
    routesFile
  )}, services and domains.`
);
