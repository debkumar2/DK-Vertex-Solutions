import React from 'react';
import { motion } from 'framer-motion';
import { Zap, RefreshCw, Bot, BarChart3, ShieldCheck, Users } from 'lucide-react';
import { solutionsData } from '../data/solutionsData';

export default function Solutions() {
  const getSolutionIcon = (iconName) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-500" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5 text-sky-500" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-purple-500" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-emerald-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-blue-600" />;
      case 'Users':
        return <Users className="w-5 h-5 text-indigo-500" />;
      default:
        return <Zap className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="solutions" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 border border-sky-100 px-3 py-1 rounded-full mb-3">
            Impact-Driven Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Technology That Solves Real Problems
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl">
            We convert complex operational hurdles into streamlined software workflows designed for high efficiency.
          </p>
        </div>

        {/* Solutions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionsData.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:shadow-lg hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center mb-4">
                  {getSolutionIcon(item.iconName)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-700">DK Vertex Solution</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
