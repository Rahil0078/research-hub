import { useState } from "react";
import { Download, CheckCircle2, Clock } from "lucide-react";
import Layout from "../components/layout/Layout";
import SEO from "../components/common/SEO";
import Container from "../components/common/Container";
import { academicResources } from "../data/resources";
import { openConsultationModal } from "../components/common/ConsultationModal";
import { toast } from "sonner";

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Literature Review", "Dissertation", "Data Analysis", "Publishing"];

  const filtered = selectedCategory === "All"
    ? academicResources
    : academicResources.filter((r) => r.category === selectedCategory);

  const handleDownload = (title: string) => {
    toast.success(`Download started for "${title}". Check your downloads folder.`);
  };

  return (
    <Layout>
      <SEO
        title="Scholarly Research Guides & Resources | Research Hub"
        description="Free academic templates, PRISMA 2020 SLR checklists, 5-chapter dissertation blueprints, and Scopus journal selection guidelines."
        url="/resources"
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-amber-50/50 via-white to-white py-14 sm:py-20 border-b border-slate-100">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-700">
              OPEN ACADEMIC KNOWLEDGE
            </span>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 mt-2 tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Academic Research Guides & Toolkits
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-sans">
              Practical checklists, PRISMA frameworks, and statistical blueprints distilled from over a decade of mentoring doctoral scholars and publishing in peer-reviewed journals.
            </p>

            {/* Category Filter Pills */}
            <div className="mt-8 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-slate-950 text-white shadow-xs"
                      : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Resources List */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:border-amber-400 hover:shadow-xl transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/80">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock size={13} /> {item.readTime}
                    </span>
                  </div>

                  <h2
                    className="text-xl sm:text-2xl font-bold text-slate-950 leading-snug"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {item.title}
                  </h2>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="mt-5 space-y-2">
                    <span className="text-xs font-bold text-slate-900 block">
                      Key Highlights:
                    </span>
                    {item.keyPoints.map((point, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                        <CheckCircle2 size={14} className="text-amber-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleDownload(item.title)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-amber-700 transition-colors cursor-pointer"
                  >
                    <Download size={14} className="text-amber-600" />
                    <span>Download PDF Blueprint</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => openConsultationModal(item.title)}
                    className="text-xs font-semibold text-amber-700 hover:text-amber-900 cursor-pointer"
                  >
                    Discuss With Expert
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Resources;
