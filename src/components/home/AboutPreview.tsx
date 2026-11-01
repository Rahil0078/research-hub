import { ArrowRight, Globe2, Handshake, Headset, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import { siteConfig } from "../../config/site";

const features = [
  { icon: ShieldCheck, label: "Quality Assurance" },
  { icon: Globe2, label: "Global Support" },
  { icon: Handshake, label: "On-Time Delivery" },
  { icon: Headset, label: "Dedicated Support" },
];

const AboutPreview = () => {
  return (
    <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Image with gold sweep frame */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-4 -left-4 h-2/3 w-2/3 rounded-tl-[2rem] border-t-[5px] border-l-[5px] border-brand-gold" />
            <div className="relative overflow-hidden rounded-2xl lg:rounded-r-[140px] shadow-[0_30px_60px_-25px_rgba(1,34,67,0.45)] ring-1 ring-slate-200">
              <img
                src="/images/research-hub/about-library-globe.jpg"
                alt="Desk globe beside a stack of books in a university library"
                width={1600}
                height={1067}
                loading="lazy"
                className="h-64 sm:h-80 w-full object-cover object-[30%_center]"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-7 grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">
            <div className="xl:col-span-8">
              <h2
                className="text-3xl sm:text-[40px] font-bold text-brand-navy tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                About <span className="text-accent-700">Research Hub</span>
              </h2>
              <p className="mt-4 text-[15px] sm:text-base text-slate-700 leading-relaxed">
                We are a trusted academic research consultancy committed to empowering researchers,
                scholars and professionals with high-quality research support and publication
                guidance — led by our founder{" "}
                <strong className="text-brand-navy">{siteConfig.founder}</strong>.
              </p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-y-4">
                {features.map(({ icon: Icon, label }, idx) => (
                  <div
                    key={label}
                    className={`flex items-center gap-2.5 px-2 ${idx !== 0 ? "sm:border-l sm:border-brand-gold/60" : ""}`}
                  >
                    <Icon size={26} className="shrink-0 text-accent-700" strokeWidth={1.75} />
                    <span className="text-[13px] font-medium leading-tight text-brand-navy">{label}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-navy-light hover:-translate-y-0.5 group"
              >
                <span>Know More</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Quote card */}
            <figure className="xl:col-span-4 relative rounded-2xl bg-brand-gold-light border border-brand-gold-border p-7 shadow-[0_20px_40px_-25px_rgba(1,34,67,0.35)]">
              <span
                className="block text-6xl leading-none text-brand-gold"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote
                className="-mt-4 text-xl sm:text-2xl italic leading-snug text-brand-navy"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Turning your research ideas into impactful publications.&rdquo;
              </blockquote>
              <svg className="mt-4 h-3 w-36 text-brand-gold" viewBox="0 0 144 12" fill="none" aria-hidden="true">
                <path d="M2 10C40 2 100 0 142 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutPreview;
