import { BookOpen, FileCheck2, Users2, ShieldCheck } from "lucide-react";
import Container from "../common/Container";

const TrustIndicators = () => {
  const stats = [
    {
      icon: BookOpen,
      value: "800+",
      label: "Subjects Covered",
      description: "Across STEM, Management, Social Sciences & Law",
    },
    {
      icon: FileCheck2,
      value: "2000+",
      label: "Projects Delivered",
      description: "Theses, SLRs, proposals & publishable articles",
    },
    {
      icon: Users2,
      value: "10+ Years",
      label: "Experienced Team",
      description: "PhD supervisors, statisticians & senior editors",
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: "Confidential & Original",
      description: "Strict non-disclosure & Turnitin originality verified",
    },
  ];

  return (
    <section className="relative -mt-6 sm:-mt-8 z-20">
      <Container>
        <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-xl border border-slate-100/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`flex items-center gap-4 ${
                    idx !== 0 ? "lg:pl-6" : ""
                  } ${idx > 1 ? "pt-4 sm:pt-0" : ""}`}
                >
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-700 border border-amber-200/60 shadow-sm">
                    <Icon size={26} className="text-amber-800" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-serif leading-none tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrustIndicators;
