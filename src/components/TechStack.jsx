import React from 'react';
import { techStackData } from '../data/techStackData';
import { Code2, Database, Cpu, Globe, Server, Smartphone, Layers, Terminal, Sparkles } from 'lucide-react';

export default function TechStack() {
  // Helper function to return icon based on tech name
  const renderTechIcon = (name) => {
    switch (name) {
      case 'React':
      case 'React Native':
        return <Code2 className="w-5 h-5 text-sky-500" />;
      case 'JavaScript':
        return <Terminal className="w-5 h-5 text-amber-500" />;
      case 'Node.js':
      case 'Express':
        return <Server className="w-5 h-5 text-emerald-500" />;
      case 'PostgreSQL':
      case 'MongoDB':
        return <Database className="w-5 h-5 text-blue-500" />;
      case 'Tailwind CSS':
        return <Globe className="w-5 h-5 text-cyan-500" />;
      case 'REST APIs':
        return <Layers className="w-5 h-5 text-indigo-500" />;
      case 'AI':
        return <Sparkles className="w-5 h-5 text-purple-500" />;
      case 'Docker':
        return <Smartphone className="w-5 h-5 text-blue-600" />;
      default:
        return <Cpu className="w-5 h-5 text-slate-500" />;
    }
  };

  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...techStackData, ...techStackData];

  return (
    <section className="py-12 bg-slate-900 text-white overflow-hidden relative border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400">Core Capability</span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-100 mt-1">Technologies We Build With</h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 max-w-md text-center sm:text-right">
          Battle-tested modern stacks selected for performance, maintainability, and rapid engineering.
        </p>
      </div>

      {/* Marquee Wrapper with Gradient Mask Fades */}
      <div className="relative w-full overflow-hidden py-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-slate-900 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-slate-900 after:to-transparent">
        <div className="animate-marquee flex items-center gap-4">
          {marqueeItems.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-slate-200 hover:border-slate-500 hover:bg-slate-800 transition-all duration-200 shrink-0 shadow-xs"
            >
              <div className="p-1.5 rounded-lg bg-slate-900/80">
                {renderTechIcon(tech.name)}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm text-white tracking-tight">{tech.name}</span>
                <span className="text-[10px] text-slate-400 font-medium">{tech.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
