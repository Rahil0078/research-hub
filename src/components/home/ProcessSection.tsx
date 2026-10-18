import {
  MessageSquare,
  FileSpreadsheet,
  Users,
  CheckCircle2,
  ArrowRight,
  UserCheck,
  MessagesSquare,
  Clock,
  Lock,
} from "lucide-react";
import Container from "../common/Container";
import { processSteps, trustAssurances } from "../../data/process";

const stepIcons: Record<string, React.ElementType> = {
  MessageSquare,
  FileSpreadsheet,
  Users,
  CheckCircle2,
};

const assuranceIcons: Record<string, React.ElementType> = {
  UserCheck,
  MessagesSquare,
  Clock,
  Lock,
};

const ProcessSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50/60 border-y border-slate-100" id="how-it-works">
      <Container>
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-700">
            HOW IT WORKS
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-950 mt-1 tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            A Simple & Transparent Process
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
            From your requirement to successful delivery.
          </p>
        </div>

        {/* Layout: Left 4-step sequence, Right Trust Guarantee Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column (8 cols): 4 Process Steps */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {processSteps.map((step, idx) => {
                const Icon = stepIcons[step.iconName] || MessageSquare;
                const isLast = idx === processSteps.length - 1;

                return (
                  <div key={step.step} className="relative flex flex-col">
                    {/* Step Icon */}
                    <div className="relative mb-4 flex items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-sm text-slate-800">
                        <Icon size={22} className="text-slate-800" />
                      </div>

                      {/* Connecting Arrow for desktop */}
                      {!isLast && (
                        <div className="hidden lg:flex items-center flex-1 px-2 text-slate-300">
                          <div className="h-0.5 flex-1 bg-slate-200" />
                          <ArrowRight size={14} className="text-amber-600 ml-1 shrink-0" />
                        </div>
                      )}
                    </div>

                    {/* Step Label */}
                    <span className="text-xs font-bold text-amber-700 tracking-wider uppercase">
                      {step.step}
                    </span>

                    {/* Step Title */}
                    <h3 className="text-base font-bold text-slate-900 mt-1 mb-1.5 font-serif">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column (4 cols): Trust Assurance Box matching screenshot */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-white p-6 sm:p-7 border border-slate-200/90 shadow-md h-full flex flex-col justify-between space-y-5">
              {trustAssurances.map((item) => {
                const Icon = assuranceIcons[item.iconName] || UserCheck;

                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 border border-slate-200 text-slate-800">
                      <Icon size={20} className="text-slate-800" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProcessSection;
