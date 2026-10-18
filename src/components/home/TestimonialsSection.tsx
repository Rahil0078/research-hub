import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../common/Container";
import { testimonialsData } from "../../data/testimonials";

const TestimonialsSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const prev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, testimonialsData.length - 3) : prevIndex - 1
    );
  };

  const next = () => {
    setStartIndex((prevIndex) =>
      prevIndex >= testimonialsData.length - 3 ? 0 : prevIndex + 1
    );
  };

  const visibleTestimonials = testimonialsData.slice(startIndex, startIndex + 3);

  return (
    <section className="py-20 sm:py-24 bg-slate-950 text-white relative overflow-hidden" id="testimonials">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />

      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-400">
              TESTIMONIALS
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mt-1 tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              What Our Clients Say
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
              Trusted by researchers, scholars and professionals across the globe.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={prev}
              aria-label="Previous testimonials"
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white text-white hover:text-slate-950 border border-white/10 flex items-center justify-center transition-all active:scale-95 cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonials"
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white text-white hover:text-slate-950 border border-white/10 flex items-center justify-center transition-all active:scale-95 cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleTestimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl bg-white text-slate-900 p-6 sm:p-7 shadow-xl flex flex-col justify-between border border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Row */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3.5">
                <img
                  src={t.image}
                  alt={t.name}
                  width={46}
                  height={46}
                  className="w-11 h-11 rounded-full object-cover border border-amber-300/80 shadow-xs shrink-0"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-950">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {t.role}, {t.department}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
