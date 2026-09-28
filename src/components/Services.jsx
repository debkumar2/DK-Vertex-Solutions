import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Sparkles, Smartphone, Building2, Cpu, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function Services() {
  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-6 h-6 text-blue-600" />;
      case 'Server':
        return <Server className="w-6 h-6 text-sky-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-purple-600" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-indigo-600" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-blue-700" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-600" />;
      default:
        return <Layout className="w-6 h-6 text-blue-600" />;
    }
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const offsetTop = el.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-3">
            Our Core Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            What We Build
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl">
            End-to-end software development services crafted with modern technology stacks and engineered for business performance.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={handleScrollToContact}
              className="group relative bg-white rounded-2xl p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden"
            >
              {/* Top Card Gradient Glow on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header Row: Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-blue-50 flex items-center justify-center transition-colors duration-200">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-2xl font-mono font-extrabold text-slate-300 group-hover:text-blue-500/40 transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Badge */}
                <span className="inline-block text-[11px] font-semibold text-slate-500 uppercase tracking-wider bg-slate-100 group-hover:bg-blue-50 group-hover:text-blue-700 px-2.5 py-0.5 rounded mb-3 transition-colors">
                  {service.badge}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Card Footer Arrow Link */}
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-700 pt-4 border-t border-slate-100">
                <span>Discuss Requirement</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-200" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
