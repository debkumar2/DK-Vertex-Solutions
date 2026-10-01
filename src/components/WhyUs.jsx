import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserCheck, 
  Layers, 
  Sparkles, 
  Code2, 
  Target, 
  MonitorSmartphone, 
  Check, 
  X, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  MessageSquare, 
  Bot,
  Lock,
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';
import { whyUsData, comparisonData, keyPillarsData } from '../data/whyUsData';

export default function WhyUs() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Leadership':
        return {
          iconBg: 'bg-blue-600 text-white shadow-blue-500/25',
          badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
          accent: 'text-blue-600',
        };
      case 'Architecture':
        return {
          iconBg: 'bg-sky-500 text-white shadow-sky-500/25',
          badgeBg: 'bg-sky-50 text-sky-700 border-sky-200',
          accent: 'text-sky-600',
        };
      case 'Innovation':
        return {
          iconBg: 'bg-purple-600 text-white shadow-purple-500/25',
          badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
          accent: 'text-purple-600',
        };
      case 'Quality':
        return {
          iconBg: 'bg-emerald-600 text-white shadow-emerald-500/25',
          badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          accent: 'text-emerald-600',
        };
      case 'Business':
        return {
          iconBg: 'bg-amber-500 text-white shadow-amber-500/25',
          badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
          accent: 'text-amber-600',
        };
      default:
        return {
          iconBg: 'bg-indigo-600 text-white shadow-indigo-500/25',
          badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
          accent: 'text-indigo-600',
        };
    }
  };

  const getWhyIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'UserCheck': return <UserCheck className={className} strokeWidth={1.75} />;
      case 'Layers': return <Layers className={className} strokeWidth={1.75} />;
      case 'Sparkles': return <Sparkles className={className} strokeWidth={1.75} />;
      case 'Code2': return <Code2 className={className} strokeWidth={1.75} />;
      case 'Target': return <Target className={className} strokeWidth={1.75} />;
      case 'MonitorSmartphone': return <MonitorSmartphone className={className} strokeWidth={1.75} />;
      case 'MessageSquare': return <MessageSquare className={className} strokeWidth={1.75} />;
      case 'Zap': return <Zap className={className} strokeWidth={1.75} />;
      case 'Bot': return <Bot className={className} strokeWidth={1.75} />;
      case 'ShieldCheck': return <ShieldCheck className={className} strokeWidth={1.75} />;
      default: return <Sparkles className={className} strokeWidth={1.75} />;
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
    <section id="why-us" className="py-24 sm:py-32 bg-[#F9FAFB] relative overflow-hidden">
      
      {/* Decorative Radial Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-blue-50/70 via-sky-50/30 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-gradient-to-tl from-indigo-50/50 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full mb-4 shadow-xs">
            Why DK Vertex Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            More Than Development. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600">
              Engineering Excellence.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            We partner with businesses to provide reliable engineering discipline, direct technical ownership, and maintainable software architecture built for growth.
          </p>
        </div>

        {/* Bento Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {whyUsData.map((item, idx) => {
            const colors = getCategoryColor(item.category);
            const isFeatured = item.isFeatured;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group relative bg-white rounded-[2rem] p-8 sm:p-9 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-500 overflow-hidden flex flex-col justify-between ${
                  isFeatured ? 'lg:col-span-2 bg-gradient-to-br from-white via-slate-50/60 to-blue-50/20' : ''
                }`}
              >
                {/* Subtle Hover Ambient Tint */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  {/* Top Bar: Icon Box & Category Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-13 h-13 rounded-2xl ${colors.iconBg} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-500 ease-out`}>
                      {getWhyIcon(item.iconName, "w-6 h-6 text-white")}
                    </div>
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${colors.badgeBg}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Subtitle & Title */}
                  <span className={`text-[11px] font-mono font-bold uppercase tracking-widest ${colors.accent} mb-1.5 block`}>
                    {item.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3 group-hover:text-blue-950 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Visual Highlights / Widgets */}
                <div className="relative z-10 mt-auto">
                  {item.id === 'founder-led' ? (
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-wrap items-center justify-between gap-3 shadow-2xs">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                        <span className="text-xs font-semibold text-slate-800">Direct Senior Engineer Channel</span>
                      </div>
                      <span className="text-xs font-mono font-bold text-blue-600 bg-white border border-blue-100 px-3 py-1 rounded-xl shadow-2xs">
                        {item.stats}
                      </span>
                    </div>
                  ) : item.id === 'clean-code' ? (
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 font-mono text-[11px] text-slate-700 shadow-2xs">
                      <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1.5 pb-1 border-b border-slate-200/80 font-sans">
                        <span>architecture.config.js</span>
                        <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">CLEAN</span>
                      </div>
                      <p className="text-blue-600 font-semibold">export const <span className="text-indigo-600">dkStandard</span> = &#123;</p>
                      <p className="pl-4 text-slate-600">techDebt: <span className="text-purple-600 font-bold">0</span>,</p>
                      <p className="pl-4 text-slate-600">maintainable: <span className="text-emerald-600 font-bold">true</span>,</p>
                      <p className="text-blue-600 font-semibold">&#125;</p>
                    </div>
                  ) : (
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">{item.highlight}</span>
                      <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-lg">
                        {item.stats}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Agency Comparison Card Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2rem] p-8 sm:p-12 border border-slate-200/80 shadow-md mb-20 overflow-hidden relative"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-8 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1 block">Clear Distinction</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">
                Traditional Agencies vs. DK Vertex Solutions
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">Why clients choose direct technical ownership over layered agencies.</p>
            </div>
            
            <div className="flex items-center gap-3 text-xs font-bold shrink-0">
              <span className="flex items-center gap-1.5 text-slate-500 bg-slate-100 px-3.5 py-1.5 rounded-full">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-400" /> Traditional Agency
              </span>
              <span className="flex items-center gap-1.5 text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600" /> DK Vertex Solutions
              </span>
            </div>
          </div>

          <div className="space-y-3.5">
            {comparisonData.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 p-4.5 rounded-2xl bg-slate-50/70 border border-slate-200/60 hover:bg-slate-50 transition-colors"
              >
                {/* Feature Name */}
                <div className="lg:col-span-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-blue-600 shrink-0 shadow-2xs">
                    {getWhyIcon(row.iconName, "w-4 h-4 text-blue-600")}
                  </div>
                  <span className="text-sm font-bold text-slate-900">
                    {row.feature}
                  </span>
                </div>

                {/* Traditional Agency */}
                <div className="lg:col-span-4 flex items-start gap-2.5 p-3 rounded-xl bg-rose-50/60 border border-rose-100 text-xs text-slate-700">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{row.traditional}</span>
                </div>

                {/* DK Vertex Solutions */}
                <div className="lg:col-span-4 flex items-start gap-2.5 p-3 rounded-xl bg-blue-50/80 border border-blue-200 text-xs text-blue-950 font-semibold">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{row.dkVertex}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Pillars Summary Grid (3 Cards matching Services.jsx style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {keyPillarsData.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] p-8 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              <div className="text-5xl font-extrabold text-slate-100 font-mono mb-4">
                {pillar.number}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                {pillar.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onClick={handleScrollToContact}
          className="rounded-[2rem] bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl cursor-pointer hover:shadow-2xl transition-all"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
              Ready to build software without technical debt?
            </h3>
            <p className="text-sm text-slate-300">
              Discuss your technical architecture directly with our founder & lead engineer.
            </p>
          </div>

          <button className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg transition-all">
            <span>Schedule Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
