import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Info } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const activeTestimonial = testimonialsData[currentIndex];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-3">
            Feedback & Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Client & Partner Perspective
          </h2>
          <p className="mt-2 text-sm text-slate-500 max-w-lg">
            A look into project feedback and institutional collaboration.
          </p>
        </div>

        {/* Testimonial Carousel Card */}
        <div className="relative bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-md">
          
          {/* Top Info Banner indicating template structure */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <Quote className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-slate-700">Project Review</span>
            </div>
            {activeTestimonial.isPlaceholder && (
              <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-0.5 rounded-full">
                <Info className="w-3 h-3" /> Sample Structure
              </span>
            )}
          </div>

          <div className="min-h-[160px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg sm:text-2xl text-slate-800 font-medium leading-relaxed mb-8 italic">
                  "{activeTestimonial.quote}"
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-base font-bold text-slate-900">
                      {activeTestimonial.author}
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      {activeTestimonial.role} • <span className="text-blue-600 font-semibold">{activeTestimonial.project}</span>
                    </div>
                  </div>

                  {/* Indicator Pills */}
                  <div className="flex items-center gap-1.5">
                    {testimonialsData.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setCurrentIndex(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          i === currentIndex ? 'bg-blue-600 w-6' : 'bg-slate-300 hover:bg-slate-400'
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 flex justify-between pointer-events-none">
            <button
              type="button"
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-white shadow-lg border border-slate-200 text-slate-700 hover:text-blue-600 pointer-events-auto transition-colors focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-2.5 rounded-full bg-white shadow-lg border border-slate-200 text-slate-700 hover:text-blue-600 pointer-events-auto transition-colors focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
