import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Server, 
  Smartphone, 
  Layers, 
  Terminal, 
  Sparkles, 
  Box, 
  Network, 
  Fingerprint, 
  Zap 
} from 'lucide-react';

const bentoItems = [
  {
    title: "AI & Neural Systems",
    description: "Custom LLMs, automated logic, and intelligent workflows powering next-generation enterprise applications.",
    icon: Sparkles,
    colSpan: "lg:col-span-8",
    bg: "bg-gradient-to-br from-neutral-900 to-neutral-950",
    border: "border-amber-500/20",
    textHover: "group-hover:text-amber-400",
    techs: ["OpenAI", "LangChain", "Vector DBs", "Python"]
  },
  {
    title: "Mobile Native",
    description: "Flawless cross-platform iOS and Android experiences.",
    icon: Smartphone,
    colSpan: "lg:col-span-4",
    bg: "bg-gradient-to-br from-neutral-900 to-neutral-950",
    border: "border-neutral-800",
    textHover: "group-hover:text-emerald-400",
    techs: ["React Native", "Expo", "Swift"]
  },
  {
    title: "Frontend Engineering",
    description: "Lightning-fast, accessible, and responsive user interfaces.",
    icon: Code2,
    colSpan: "lg:col-span-4",
    bg: "bg-neutral-900/50",
    border: "border-neutral-800",
    textHover: "group-hover:text-sky-400",
    techs: ["React", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Backend Architecture",
    description: "Robust APIs and microservices built for infinite scale.",
    icon: Server,
    colSpan: "lg:col-span-4",
    bg: "bg-neutral-900/50",
    border: "border-neutral-800",
    textHover: "group-hover:text-rose-400",
    techs: ["Node.js", "Express", "REST", "GraphQL"]
  },
  {
    title: "Cloud & Data",
    description: "Secure, highly available data layer and containerized deployments.",
    icon: Database,
    colSpan: "lg:col-span-4",
    bg: "bg-neutral-900/50",
    border: "border-neutral-800",
    textHover: "group-hover:text-blue-400",
    techs: ["PostgreSQL", "MongoDB", "Docker"]
  }
];

export default function TechStack() {
  return (
    <section className="py-24 sm:py-32 bg-[#050505] text-white relative overflow-hidden border-y border-neutral-900">
      
      {/* Refined Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(217, 119, 6, 0.15) 0%, rgba(16, 185, 129, 0.05) 50%, transparent 70%)',
          filter: 'blur(100px)'
        }}
      />
      
      {/* Micro-dot Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #737373 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-sm">
              <Fingerprint className="w-3.5 h-3.5" />
              <span>Core DNA</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
              Engineered with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500">
                Precision & Scale.
              </span>
            </h2>
          </div>
          
          <p className="text-base text-neutral-400 max-w-sm leading-relaxed">
            We bypass trends and build on battle-tested, enterprise-grade technologies to ensure your product remains fast, secure, and infinitely scalable.
          </p>
        </div>

        {/* Premium Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
          {bentoItems.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={idx}
              className={`group relative rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${item.colSpan} ${item.bg} border ${item.border} backdrop-blur-md`}
            >
              {/* Card Inner Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/[0.03] group-hover:to-transparent transition-colors duration-500 pointer-events-none" />
              
              <div className="relative z-10 h-full flex flex-col">
                
                {/* Header & Icon */}
                <div className="flex items-start justify-between mb-8">
                  <div className={`p-3 rounded-2xl bg-neutral-950/80 border border-neutral-800 shadow-inner group-hover:scale-110 transition-transform duration-500 ${item.textHover}`}>
                    <item.icon className="w-6 h-6 transition-colors" />
                  </div>
                  <Zap className="w-4 h-4 text-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="mt-auto">
                  <h3 className="text-xl font-bold text-neutral-100 mb-3 tracking-tight group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.techs.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-lg bg-neutral-950/50 text-neutral-300 border border-neutral-800/80 group-hover:border-neutral-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
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
