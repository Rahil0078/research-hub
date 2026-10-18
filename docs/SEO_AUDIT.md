# SEO implementation audit

## Findings before implementation

- The canonical domain in the client SEO component was `esperradiators.com`, while the production domain is `esperradiator.com`.
- There were no `robots.txt`, sitemap, Cloudflare Pages route fallback, or response security headers.
- The site had no individual product URLs; product detail links led to an ecommerce placeholder.
- Metadata and one LocalBusiness node were injected after client rendering, and the HTML shell had incomplete, duplicated defaults.
- Product, FAQ, breadcrumb, WebSite/SearchAction, Organization, and complete LocalBusiness schema were absent.
- The contact telephone link did not match the displayed telephone number.
- Lazy images generally had alt text, but several did not declare dimensions or asynchronous decoding.
- The app was already using route-level lazy loading. This has been retained and product pages are also lazy-loaded.

## Implemented controls

- `npm run build` runs `scripts/generate-sitemap.mjs` before TypeScript and Vite. It discovers static React Router paths and active product slugs, writes canonical XML URLs with `lastmod`, `changefreq`, and priorities, and excludes the `noindex` ecommerce placeholder.
- `public/robots.txt`, `public/_redirects`, and `public/_headers` are deployed by Cloudflare Pages. The redirect preserves direct access to SPA routes; headers provide CSP, clickjacking, MIME-sniffing, referrer, permissions, and immutable image-cache policy.
- The reusable SEO component sets title, description, keywords, robots, author, viewport, theme colour, canonical, Open Graph, Twitter, and JSON-LD per route. Its base graph includes Organization, LocalBusiness, Logo, Brand, ContactPoint, WebSite and SearchAction. Pages add FAQ, BreadcrumbList, and Product nodes as relevant.
- Product detail URLs now use `/products/:slug`, with Product schema, specifications, applications, images, breadcrumbs, and related products. `/products?query=` is a functional schema-backed search URL.
- GA4, GTM, and Microsoft Clarity only load when their respective `VITE_*` environment variables are set; no identifiers are hard-coded.

## Deployment verification

- Local production output contains `dist/robots.txt`, `dist/sitemap.xml`, `dist/_headers`, and `dist/_redirects`.
- `npm run lint` and `npm run build` pass.
- The deployed site was checked before this change was deployed. At that time both crawler asset URLs returned `200 text/html`, which confirms the currently deployed Cloudflare build is still the old version. After deploying this commit, they must return `text/plain` for `/robots.txt` and `application/xml` (or `text/xml`) for `/sitemap.xml`.
