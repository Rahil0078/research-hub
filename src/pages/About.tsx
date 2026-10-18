import {
  Award,
  ShieldCheck,
  Users2,
  CheckCircle2,
  Target,
} from "lucide-react";
import Layout from "../components/layout/Layout";
import SEO from "../components/common/SEO";
import Container from "../components/common/Container";
import { openConsultationModal } from "../components/common/ConsultationModal";

const About = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: "100% Academic Confidentiality",
      description:
        "Every research inquiry and thesis dataset is bound by enforceable non-disclosure agreements (NDAs). Your identity and scholarly work remain private at all times.",
    },
    {
      icon: Award,
      title: "Zero Tolerance for Plagiarism",
      description:
        "All work is drafted from first principles and verified through non-repository Turnitin scans. We guarantee <10% similarity index and zero automated AI-spinning.",
    },
    {
      icon: Users2,
      title: "10+ Years Dedicated Experience",
      description:
        "Our mentorship panel includes doctoral graduates, university professors, and peer reviewers with over a decade of continuous academic service.",
    },
    {
      icon: Target,
      title: "Outcome-Driven Milestones",
      description:
        "We operate on progressive chapter-by-chapter submissions, incorporating supervisor feedback at each stage to ensure committee sign-off.",
    },
  ];

  return (
    <Layout>
      <SEO
        title="About Us | 10+ Years of Academic Mentorship & Research Guidance"
        description="Learn about Research Hub's 10+ years legacy supporting 2000+ researchers across 800+ academic disciplines. Ethical, confidential, and publication-grade guidance."
        url="/about"
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-amber-50/50 via-white to-white py-14 sm:py-20 border-b border-slate-100">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-700">
              OUR MISSION & EXPERTISE
            </span>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 mt-2 tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Academic Excellence Powered by 10+ Years Experienced Writers
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-sans">
              Founded over 2 years ago, Research Hub has rapidly grown to guide over 2000+ doctoral and postgraduate scholars across 800+ academic disciplines with an elite panel of researchers possessing 10+ years of individual scholarly expertise.
            </p>
          </div>
        </Container>
      </section>

      {/* Narrative & Stats */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h2
                className="text-2xl sm:text-3xl font-bold text-slate-950"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Bridging Knowledge Gaps for Doctoral & Postgraduate Scholars
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Academic research can be an isolating journey. Between overwhelming literature volumes, intricate statistical models, and stringent university formatting, candidates often face avoidable delays.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Over the past decade, our panel has guided over <strong className="text-slate-900">2,000+ scholars</strong> from premier institutions across India, the UK, Europe, Australia, and the Middle East. Whether formulating a PRISMA-compliant Systematic Literature Review (SLR) or running multi-group SEM path analyses, we ensure every chapter is defensible and methodologically sound.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl font-bold font-serif text-slate-950">2000+</div>
                  <div className="text-xs text-slate-500 font-medium">Theses & Papers Guided</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl font-bold font-serif text-slate-950">800+</div>
                  <div className="text-xs text-slate-500 font-medium">Academic Disciplines</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-950 text-white p-8 sm:p-9 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-400">
                  OUR CORE PILLARS
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif mt-2 mb-4">
                  The Research Hub Standard
                </h3>
                <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-amber-400 shrink-0 mt-0.5" />
                    <span>PhD domain mentors with verified university research backgrounds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-amber-400 shrink-0 mt-0.5" />
                    <span>Non-repository plagiarism verification protecting your thesis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-amber-400 shrink-0 mt-0.5" />
                    <span>Full revision assistance until official supervisor sign-off</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-amber-400 shrink-0 mt-0.5" />
                    <span>Direct phone and WhatsApp access for rapid status updates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values Grid */}
      <section className="py-16 sm:py-24 bg-slate-50/60 border-t border-slate-100">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-700">
              TRUST & INTEGRITY
            </span>
            <h2
              className="text-3xl font-bold text-slate-950 mt-1"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Our Commitments to Every Scholar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="rounded-2xl bg-white p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 border border-amber-200 text-amber-800 mb-4">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 font-serif">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Pre-Footer Action */}
      <section className="bg-slate-950 py-16 text-white text-center">
        <Container>
          <div className="max-w-2xl mx-auto space-y-4">
            <h2
              className="text-3xl font-bold font-serif"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Collaborate With Our Senior Mentors
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Take the stress out of your academic journey. Connect directly with our editorial and research consultation board.
            </p>
            <div className="pt-4 flex justify-center">
              <button
                type="button"
                onClick={() => openConsultationModal()}
                className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default About;
