import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Sparkles, Smartphone, Building2, Cpu, ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-7 h-7" strokeWidth={1.5} />;
      case 'Server': return <Server className="w-7 h-7" strokeWidth={1.5} />;
      case 'Sparkles': return <Sparkles className="w-7 h-7" strokeWidth={1.5} />;
      case 'Smartphone': return <Smartphone className="w-7 h-7" strokeWidth={1.5} />;
      case 'Building2': return <Building2 className="w-7 h-7" strokeWidth={1.5} />;
      case 'Cpu': return <Cpu className="w-7 h-7" strokeWidth={1.5} />;
      default: return <Layout className="w-7 h-7" strokeWidth={1.5} />;
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
    <section id="services" className="py-24 sm:py-32 bg-[#F9FAFB] relative overflow-hidden">
      
      {/* Decorative Minimalist Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-gradient-to-bl from-blue-50/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-[400px] bg-gradient-to-tr from-amber-50/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-3">
            Our Core Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            We Engineer Digital Excellence
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl">
            End-to-end software development services crafted with modern technology stacks and designed for unparalleled business performance.
          </p>
        </div>

        {/* Interactive Awwwards List / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={handleScrollToContact}
              className="group relative bg-white rounded-[2rem] p-8 sm:p-10 border border-slate-200/60 hover:border-slate-300 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden flex flex-col h-full"
            >
              
              {/* Dynamic Hover Background Gradient */}
              <div 
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none
                  ${index % 2 === 0 ? 'bg-gradient-to-br from-blue-50/50 via-transparent to-transparent' : 'bg-gradient-to-br from-amber-50/50 via-transparent to-transparent'}
                `} 
              />

              <div className="relative z-10 flex flex-col h-full">
                
                {/* Header: Icon & Large Watermark Number */}
                <div className="flex items-start justify-between mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-800 group-hover:scale-110 group-hover:bg-white group-hover:shadow-md transition-all duration-500 ease-out">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-5xl font-extrabold text-slate-100 tracking-tighter group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-auto">
                  <span className="inline-block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.badge}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-4 group-hover:text-blue-950 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 group-hover:text-slate-700 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                  <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                    Explore Capability
                  </span>
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4 transform group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
