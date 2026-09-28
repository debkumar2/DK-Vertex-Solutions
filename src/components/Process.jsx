import React from 'react';
import { motion } from 'framer-motion';
import { processData } from '../data/processData';

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-3">
            Development Lifecycle
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            From Idea to Production
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl">
            A structured, transparent engineering methodology ensuring timely delivery and high code quality at every phase.
          </p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative my-8">
          {/* Horizontal Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {processData.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step Circle */}
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-slate-300 group-hover:border-blue-600 group-hover:bg-blue-600 text-slate-700 group-hover:text-white font-mono font-extrabold text-lg flex items-center justify-center shadow-md transition-all duration-300 mb-6 group-hover:scale-110">
                  {item.step}
                </div>

                {/* Step Title & Subtitle */}
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <span className="text-xs font-semibold text-blue-600 mb-2 block">
                  {item.subtitle}
                </span>

                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed px-1">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="lg:hidden relative pl-6 border-l-2 border-slate-200 space-y-10 my-6">
          {processData.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="relative pl-6"
            >
              {/* Timeline Dot Badge */}
              <div className="absolute -left-[35px] top-0 w-10 h-10 rounded-xl bg-blue-600 text-white font-mono font-extrabold text-sm flex items-center justify-center shadow-md">
                {item.step}
              </div>

              <div className="bg-slate-50/80 p-5 rounded-xl border border-slate-200/80">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 block mb-1">
                  {item.subtitle}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
