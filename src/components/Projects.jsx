import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Check, X, Layers, Smartphone, FileText, Sparkles, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const getProjectIcon = (id) => {
    switch (id) {
      case 'university-erp': return <Layers className="w-6 h-6 text-indigo-500" />;
      case 'shopease': return <Smartphone className="w-6 h-6 text-rose-500" />;
      case 'gst-tracker': return <FileText className="w-6 h-6 text-emerald-500" />;
      case 'ai-resume-builder': return <Sparkles className="w-6 h-6 text-amber-500" />;
      default: return <Layers className="w-6 h-6 text-blue-500" />;
    }
  };

  const cardColors = [
    "bg-gradient-to-br from-slate-900 to-indigo-950",
    "bg-gradient-to-br from-slate-900 to-rose-950",
    "bg-gradient-to-br from-slate-900 to-emerald-950",
    "bg-gradient-to-br from-slate-900 to-amber-950"
  ];

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean, Elegant Header */}
        <div className="flex flex-col items-center text-center mb-24 sm:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-semibold uppercase tracking-widest mb-8"
          >
            <span>Portfolio Showcase</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-[-0.03em] leading-tight font-['Plus_Jakarta_Sans',sans-serif] mb-6"
          >
            Featured Work.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-neutral-400 max-w-2xl font-light"
          >
            A curated selection of our finest engineering achievements, built for scale, performance, and impact.
          </motion.p>
        </div>

        {/* Interactive Parallax Stack Container */}
        <div className="relative pb-32">
          {projectsData.map((project, idx) => {
            const topOffset = `calc(10vh + ${idx * 30}px)`;
            const bgClass = cardColors[idx % cardColors.length];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="sticky w-full mb-24 shadow-2xl origin-top"
                style={{ top: topOffset }}
              >
                <div 
                  onClick={() => setSelectedProject(project)}
                  className={`relative w-full h-[600px] lg:h-[500px] rounded-[2.5rem] ${bgClass} border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden cursor-pointer group flex flex-col lg:flex-row items-center`}
                >
                  
                  {/* Subtle Inner Glow */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none" />

                  {/* Left Content */}
                  <div className="w-full lg:w-1/2 h-1/2 lg:h-full p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center mb-8 backdrop-blur-md group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                      {getProjectIcon(project.id)}
                    </div>

                    <span className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-3">
                      {project.category}
                    </span>

                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 group-hover:text-white/90 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-8 line-clamp-2 lg:line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-3 text-sm font-semibold text-white mt-auto lg:mt-0">
                      <span>View Case Study</span>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                        <ArrowUpRight className="w-4 h-4 transform group-hover:rotate-45 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Right Mockup Graphic */}
                  <div className="w-full lg:w-1/2 h-1/2 lg:h-full relative overflow-hidden flex items-end lg:items-center justify-center pt-8 lg:pt-0">
                    <div className="absolute inset-0 bg-black/20" />
                    
                    <motion.div 
                      className="relative z-10 w-[80%] lg:w-[110%] h-[90%] lg:h-[80%] lg:-mr-12 rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none bg-black/60 border-t border-x lg:border-r-0 lg:border-y lg:border-l border-white/15 shadow-2xl backdrop-blur-md flex flex-col overflow-hidden group-hover:-translate-y-4 lg:group-hover:-translate-x-4 lg:group-hover:translate-y-0 transition-transform duration-700 ease-out"
                    >
                      {/* Faux Window Controls */}
                      <div className="h-10 bg-black/40 border-b border-white/10 flex items-center px-4 gap-2 w-full">
                        <div className="w-3 h-3 rounded-full bg-white/20" />
                        <div className="w-3 h-3 rounded-full bg-white/20" />
                        <div className="w-3 h-3 rounded-full bg-white/20" />
                      </div>
                      <div className="flex-1 p-6 relative">
                        <div className="w-full h-8 bg-white/5 rounded-lg mb-4" />
                        <div className="w-2/3 h-24 bg-white/5 rounded-lg mb-4" />
                        <div className="w-full h-32 bg-white/5 rounded-lg" />
                        
                        {/* Superimposed Icon */}
                        <div className="absolute bottom-8 right-8 w-24 h-24 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-700">
                          {getProjectIcon(project.id)}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Premium Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl bg-[#0a0a0a] rounded-[2rem] border border-neutral-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              
              <div className="flex items-center justify-between p-6 sm:p-8 border-b border-neutral-900">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-bold uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="p-2.5 rounded-full bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors border border-neutral-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
                  {selectedProject.title}
                </h3>
                
                <p className="text-neutral-400 text-lg leading-relaxed mb-10">
                  {selectedProject.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest mb-4">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {selectedProject.technologies.map((t) => (
                        <span key={t} className="px-3 py-1.5 rounded-lg bg-neutral-900/80 text-neutral-300 text-xs font-semibold border border-neutral-800">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest mb-4">
                      Key Highlights
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 border-t border-neutral-900 bg-neutral-950/50 flex items-center justify-end">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedProject(null);
                    setTimeout(() => {
                      const el = document.getElementById('contact');
                      if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
                    }, 300);
                  }}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-colors"
                >
                  <span>Start Similar Project</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 -group-hover:translate-y-0.5 transition-transform" />
                </a>
              </div>
              
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
