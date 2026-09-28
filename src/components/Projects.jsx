import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Check, X, Layers, Smartphone, FileText, Sparkles, Terminal, Code2 } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const getProjectIcon = (id) => {
    switch (id) {
      case 'university-erp':
        return <Layers className="w-5 h-5 text-blue-600" />;
      case 'shopease':
        return <Smartphone className="w-5 h-5 text-indigo-600" />;
      case 'gst-tracker':
        return <FileText className="w-5 h-5 text-emerald-600" />;
      case 'ai-resume-builder':
        return <Sparkles className="w-5 h-5 text-purple-600" />;
      default:
        return <Code2 className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-3">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Selected Work
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl">
            A curated view of complete software applications, enterprise platforms, and mobile products engineered by DK Vertex Solutions.
          </p>
        </div>

        {/* 2x2 Grid for Selected Work */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              {/* Visual Mockup Container */}
              <div className="relative bg-slate-900 p-6 sm:p-8 min-h-[220px] flex items-center justify-center overflow-hidden">
                {/* Decorative Grid inside Mockup */}
                <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* Device/Browser UI Visual */}
                {project.mockupType === 'mobile' ? (
                  // Mobile App Frame
                  <div className="relative w-44 bg-slate-950 rounded-3xl border-4 border-slate-700 shadow-2xl p-3 text-slate-100 text-[10px]">
                    <div className="w-12 h-2 bg-slate-800 rounded-full mx-auto mb-2" />
                    <div className="bg-slate-900 rounded-xl p-3 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sky-400">ShopEase App</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      </div>
                      <div className="bg-slate-800 rounded p-1.5 text-slate-300 text-[9px]">
                        Catalog • Cart • Checkout
                      </div>
                      <div className="h-10 bg-slate-800/60 rounded flex items-center justify-center text-slate-400">
                        React Native UI
                      </div>
                    </div>
                  </div>
                ) : (
                  // Browser Window Frame
                  <div className="relative w-full max-w-md bg-slate-950 rounded-xl border border-slate-800 shadow-2xl overflow-hidden text-slate-100 text-xs">
                    <div className="bg-slate-900 px-3 py-2 border-b border-slate-800 flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <span className="text-[10px] font-mono text-slate-400 ml-2 truncate">
                        https://app.dkvertex/{project.id}
                      </span>
                    </div>
                    <div className="p-4 space-y-2 bg-slate-950">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-200">{project.title}</span>
                        <span className="text-[10px] bg-blue-950 text-blue-300 px-2 py-0.5 rounded border border-blue-800">
                          {project.type}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Card Info */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1 rounded bg-slate-100">
                      {getProjectIcon(project.id)}
                    </div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Case Study Button */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-blue-600 text-slate-800 hover:text-white font-semibold text-sm transition-all duration-200 border border-slate-200 hover:border-blue-600 cursor-pointer"
                >
                  <span>View Details & Features</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Modal details */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-2.5 mb-2">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-slate-400 font-medium">DK Vertex Case Study</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                {selectedProject.title}
              </h3>
              
              <p className="text-slate-600 text-base mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Technologies Employed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Core Engineering Highlights
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition-colors"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => {
                    setSelectedProject(null);
                    const el = document.getElementById('contact');
                    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 shadow-md shadow-blue-600/20 transition-colors"
                >
                  Build Similar Solution
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
