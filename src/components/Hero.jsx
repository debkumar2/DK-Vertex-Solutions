import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle, Code, Layers, Cpu, ShieldCheck, Terminal } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-gradient">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-semibold mb-6 shadow-xs animate-shimmer">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>{companyData.subtitle}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
              We Build Digital Products That <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600">Move Businesses Forward.</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
              {companyData.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-base shadow-lg shadow-blue-600/25 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/35 transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-slate-700 font-semibold text-base border border-slate-300 hover:bg-slate-50 hover:text-slate-900 transition-all duration-200 active:scale-95 cursor-pointer shadow-xs"
              >
                <span>Explore Our Work</span>
              </button>
            </div>

            {/* Value Highlights Pill Row */}
            <div className="pt-6 border-t border-slate-200/80 w-full grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-slate-600 text-xs sm:text-sm font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Scalable Web & Mobile</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 text-xs sm:text-sm font-medium">
                <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                <span>AI & Automation Ready</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 text-xs sm:text-sm font-medium col-span-2 sm:col-span-1">
                <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Clean Engineering</span>
              </div>
            </div>

          </motion.div>

          {/* Right Abstract Tech Visual */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative mx-auto w-full max-w-lg">
              
              {/* Decorative Glow backdrop */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 opacity-20 blur-xl pointer-events-none" />

              {/* Main Technical Window Mockup */}
              <div className="relative bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 p-4 sm:p-5 overflow-hidden text-slate-100">
                
                {/* Window Bar Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 bg-slate-800/60 px-3 py-0.5 rounded-full border border-slate-700/50">
                    <Terminal className="w-3 h-3 text-sky-400" />
                    <span>dk-vertex-solutions.engine</span>
                  </div>
                  <div className="w-12" />
                </div>

                {/* Content Grid Inside Mockup */}
                <div className="space-y-4">
                  
                  {/* Status Banner */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-semibold text-slate-200">System Architecture Active</span>
                    </div>
                    <span className="text-[11px] font-mono text-sky-400 bg-sky-950/60 border border-sky-800/50 px-2 py-0.5 rounded">v2.4 Live</span>
                  </div>

                  {/* Code Snippet Card */}
                  <div className="bg-slate-950/90 rounded-xl p-3.5 border border-slate-800 text-[12px] font-mono leading-relaxed space-y-1 text-slate-300">
                    <div className="text-slate-500">// DK Vertex Architecture Config</div>
                    <div>
                      <span className="text-purple-400">const</span> <span className="text-blue-400">app</span> = <span className="text-amber-300">createProduct</span>({`{`}
                    </div>
                    <div className="pl-4">
                      <span className="text-sky-300">frontend:</span> <span className="text-emerald-400">'React + Tailwind'</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-sky-300">backend:</span> <span className="text-emerald-400">'Node + Express'</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-sky-300">database:</span> <span className="text-emerald-400">'PostgreSQL'</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-sky-300">aiIntegration:</span> <span className="text-purple-300">true</span>
                    </div>
                    <div>{`});`}</div>
                  </div>

                  {/* Floating Metric Badges inside Mockup */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-800/50 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 font-medium">Platform</div>
                        <div className="text-sm font-bold text-slate-100">Full-Stack ERP</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/50 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-purple-600/20 text-purple-400">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 font-medium">AI Workflows</div>
                        <div className="text-sm font-bold text-slate-100">Integrated</div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Floating Accent Badge 1 */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 hidden sm:flex"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">100% Reliable Code</div>
                  <div className="text-[10px] font-medium text-slate-500">Enterprise Standard</div>
                </div>
              </motion.div>

              {/* Floating Accent Badge 2 */}
              <motion.div 
                className="absolute -bottom-6 -left-4 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 hidden sm:flex"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, delay: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Custom Web & Mobile</div>
                  <div className="text-[10px] font-medium text-slate-500">React & React Native</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
