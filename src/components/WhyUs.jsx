import React from 'react';
import { motion } from 'framer-motion';
import { Target, Layers, Code2, Sparkles, MonitorSmartphone, CheckCircle2, Network, TrendingUp } from 'lucide-react';
import { whyUsData } from '../data/whyUsData';

export default function WhyUs() {
  const getWhyIcon = (iconName) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-5 h-5 text-blue-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-sky-600" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-indigo-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-purple-600" />;
      case 'MonitorSmartphone':
        return <MonitorSmartphone className="w-5 h-5 text-emerald-600" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-blue-500" />;
      case 'Network':
        return <Network className="w-5 h-5 text-cyan-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-indigo-500" />;
      default:
        return <Target className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section className="py-24 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-3">
            Why DK Vertex Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            More Than Development
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl">
            We partner with businesses to provide reliable engineering discipline, long-term technical clarity, and maintainable software architecture.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUsData.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-500/40 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                {getWhyIcon(item.iconName)}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
