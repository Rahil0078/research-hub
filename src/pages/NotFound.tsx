import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import SEO from "../components/common/SEO";
import Container from "../components/common/Container";
import Layout from "../components/layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <SEO
        title="Page Not Found | Research Hub"
        description="The page you are looking for does not exist. Browse our academic research services and disciplines."
        url="/404"
        robots="noindex,follow"
      />

      <section className="py-20 sm:py-28 bg-white text-center">
        <Container>
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent-50 text-accent-800 border border-accent-200">
              <BookOpen size={32} />
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-700">
              ERROR 404
            </p>

            <h1
              className="text-4xl sm:text-5xl font-bold text-slate-950 tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Academic Page Not Found
            </h1>

            <p className="text-base text-slate-600 leading-relaxed">
              The research resource or page you are looking for may have been moved or updated. Explore our core services or connect directly with our mentorship desk.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white font-semibold text-sm transition-all"
              >
                <span>Return to Home</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-200 text-slate-800 hover:bg-slate-50 font-semibold text-sm transition-all"
              >
                <span>View Research Services</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default NotFound;
