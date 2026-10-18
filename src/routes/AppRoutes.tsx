import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PageLoader from "../components/common/PageLoader";
import ScrollToTop from "../components/common/ScrollToTop";

const Home = lazy(() => import("../pages/Home"));
const Services = lazy(() => import("../pages/Services"));
const ServiceDetail = lazy(() => import("../pages/ServiceDetail"));
const ResearchDomains = lazy(() => import("../pages/ResearchDomains"));
const DomainDetail = lazy(() => import("../pages/DomainDetail"));
const About = lazy(() => import("../pages/About"));
const Resources = lazy(() => import("../pages/Resources"));
const Contact = lazy(() => import("../pages/Contact"));
const Privacy = lazy(() =>
  import("../pages/Legal").then((m) => ({ default: m.Privacy }))
);
const Terms = lazy(() =>
  import("../pages/Legal").then((m) => ({ default: m.Terms }))
);
const NotFound = lazy(() => import("../pages/NotFound"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/research-domains" element={<ResearchDomains />} />
        <Route path="/research-domains/:slug" element={<DomainDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
