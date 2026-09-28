import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, RefreshCw, Bot, BarChart3, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import { solutionsData } from '../data/solutionsData';

export default function Solutions() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const getSolutionIcon = (iconName, isHovered) => {
    const className = `w-6 h-6 transition-colors duration-500 ${isHovered ? 'text-white' : 'text-slate-900'}`;
    switch (iconName) {
      case 'Zap': return <Zap className={className} strokeWidth={1.5} />;
      case 'RefreshCw': return <RefreshCw className={className} strokeWidth={1.5} />;
      case 'Bot': return <Bot className={className} strokeWidth={1.5} />;
      case 'BarChart3': return <BarChart3 className={className} strokeWidth={1.5} />;
      case 'ShieldCheck': return <ShieldCheck className={className} strokeWidth={1.5} />;
      case 'Users': return <Users className={className} strokeWidth={1.5} />;
      default: return <Zap className={className} strokeWidth={1.5} />;
    }
  };

  return (
    <section id="solutions" className="py-24 sm:py-32 bg-white relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Sticky Column */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-blue-600 text-xs font-semibold uppercase tracking-widest mb-8 shadow-xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span>Impact-Driven</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 tracking-[-0.03em] leading-[1.05] mb-6 font-['Plus_Jakarta_Sans',sans-serif]"
              >
                Technology <br />
                That Solves <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                  Real Problems.
                </span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-500 leading-relaxed mb-10 max-w-sm"
              >
                We bypass trends to focus on what matters: converting complex operational hurdles into streamlined software workflows designed for high efficiency.
              </motion.p>
            </div>
          </div>

          {/* Right Scrolling List */}
          <div className="lg:w-2/3 flex flex-col border-t border-slate-200/80">
            {solutionsData.map((item, idx) => {
              const isHovered = hoveredIdx === idx;
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="group relative block border-b border-slate-200/80 py-8 sm:py-10 cursor-pointer overflow-hidden transition-all duration-500"
                >
                  
                  {/* Subtle Background Hover Fill */}
                  <div 
                    className="absolute inset-0 bg-slate-50 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[0.16,1,0.3,1] pointer-events-none" 
                  />

                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 px-4 sm:px-6">
                    
                    {/* Number Indicator */}
                    <div className="text-sm font-mono font-bold text-slate-300 group-hover:text-blue-500 transition-colors duration-300 w-8">
                      0{idx + 1}
                    </div>

                    {/* Icon Box */}
                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500 ease-out group-hover:shadow-lg group-hover:shadow-blue-500/20 group-hover:scale-110">
                      {getSolutionIcon(item.iconName, isHovered)}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-blue-950 transition-colors duration-300 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed max-w-md group-hover:text-slate-600 transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>

                      {/* Expanding Arrow */}
                      <div className="flex items-center text-blue-600 overflow-hidden mt-2 sm:mt-0">
                        <motion.div
                          animate={{ x: isHovered ? 0 : -20, opacity: isHovered ? 1 : 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="flex items-center"
                        >
                          <span className="text-xs font-bold uppercase tracking-wider mr-2 whitespace-nowrap">Explore</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </div>
                      
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
