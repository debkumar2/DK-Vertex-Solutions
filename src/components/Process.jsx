import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Compass, 
  Palette, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  CheckCircle2, 
  ArrowRight,
  FileCheck,
  Clock
} from 'lucide-react';
import { processData } from '../data/processData';

const iconMap = {
  Search: Search,
  Compass: Compass,
  Palette: Palette,
  Code2: Code2,
  ShieldCheck: ShieldCheck,
  Rocket: Rocket
};

export default function Process() {
  return (
    <section id="process" className="py-24 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden">
      
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-blue-500/5 blur-[140px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Standard Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-3">
            Development Lifecycle
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            From Idea to Production
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            A structured, transparent engineering methodology ensuring timely delivery and high code quality at every phase.
          </p>
        </div>

        {/* 6-Phase Comprehensive Grid (3 columns x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {processData.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Search;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative bg-white rounded-[2rem] border border-slate-200/90 p-8 shadow-sm hover:shadow-2xl hover:border-blue-400/80 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full"
              >
                {/* Top Animated Hover Line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Row: Phase Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-extrabold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-xl">
                        PHASE {item.step}
                      </span>
                      <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {item.estimatedTime}
                      </span>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-blue-50/80 border border-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-md transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                      {item.subtitle}
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed my-4">
                    {item.description}
                  </p>

                  {/* Key Deliverables List */}
                  {item.highlights && (
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                        Key Milestones:
                      </span>
                      {item.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Output Artifact Box */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="bg-slate-50 group-hover:bg-blue-50/60 border border-slate-200/80 group-hover:border-blue-200 rounded-xl p-3 flex items-center gap-2.5 transition-colors">
                    <FileCheck className="w-4 h-4 text-blue-600 shrink-0" />
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold text-slate-400 uppercase block leading-tight">Deliverable Artifact</span>
                      <span className="text-xs font-bold text-slate-800 truncate block">{item.outputArtifact}</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Ready to start your product journey?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              We guide your project from initial requirements definition all the way to cloud launch with full architectural support.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/25 hover:scale-105 transition-all shrink-0"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
