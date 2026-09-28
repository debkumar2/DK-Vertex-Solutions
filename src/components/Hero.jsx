import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Sparkles, 
  Code2, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Database, 
  TrendingUp, 
  Server, 
  Smartphone, 
  BrainCircuit, 
  Zap, 
  Terminal,
  Globe2,
  Activity,
  Boxes,
  CheckCircle2,
  Lock
} from 'lucide-react';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const handleMouseMove = (e) => {
    if (shouldReduceMotion) return;
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Staggered word animation container
  const headlineWords = [
    { text: "Engineering", gradient: false },
    { text: "Digital", gradient: true },
    { text: "Experiences", gradient: true },
    { text: "That", gradient: false },
    { text: "Feel", gradient: false },
    { text: "Exceptional.", gradient: false }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      id="hero" 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100svh] flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white text-slate-900 border-b border-slate-100 selection:bg-blue-600 selection:text-white"
    >
      {/* Background Architectural Canvas (Fine grid, soft gradients, abstract 3D grid lines) */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      {/* Soft Ambient Radial Blur Blobs */}
      <div 
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[550px] pointer-events-none opacity-70"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.12) 0%, rgba(14, 165, 233, 0.06) 40%, rgba(124, 58, 237, 0.02) 60%, transparent 80%)',
          filter: 'blur(70px)'
        }}
      />
      
      {/* Cursor-Reactive Aurora Glow */}
      <div 
        className="absolute top-1/3 right-4 w-[600px] h-[600px] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, rgba(124, 58, 237, 0.05) 50%, transparent 70%)',
          filter: 'blur(60px)',
          transform: `translate(${mousePos.x * 45}px, ${mousePos.y * 45}px)`
        }}
      />

      {/* Abstract Geometric Vector Vectors */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#0EA5E9" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M -50 200 Q 400 80 900 280 T 2000 200" stroke="url(#heroGradient)" strokeWidth="1.2" fill="none" strokeDasharray="6 6" />
        <path d="M 0 550 Q 600 420 1200 600 T 2100 480" stroke="url(#heroGradient)" strokeWidth="1.2" fill="none" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Content Column (60% width: lg:col-span-7) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start text-left max-w-2xl lg:max-w-none"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Small Label / Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-950 text-white text-xs sm:text-sm font-medium mb-7 shadow-lg shadow-slate-950/10 border border-slate-800"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
              </span>
              <span className="font-semibold text-slate-100 tracking-wide font-mono text-[11px] uppercase">
                DK Vertex Solutions
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-sky-300 text-xs flex items-center gap-1 font-medium">
                <Sparkles className="w-3.5 h-3.5" /> Creative Engineering
              </span>
            </motion.div>

            {/* Oversized Editorial Headline with Word Reveal */}
            <h1 className="text-4xl sm:text-5xl lg:text-[4.15rem] font-extrabold tracking-[-0.035em] leading-[1.08] mb-6 font-['Plus_Jakarta_Sans',sans-serif] text-slate-900">
              {headlineWords.map((item, idx) => (
                <motion.span 
                  key={idx} 
                  variants={wordVariants}
                  className={`inline-block mr-[0.28em] last:mr-0 ${
                    item.gradient 
                      ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 font-black" 
                      : ""
                  }`}
                >
                  {item.text}
                </motion.span>
              ))}
            </h1>

            {/* Supporting Text */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-9 max-w-[62ch] font-normal"
            >
              We design and build custom web applications, AI-powered solutions, mobile apps, ERP systems, and scalable software that elevate modern businesses.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-11"
            >
              {/* Primary CTA */}
              <button
                type="button"
                onClick={() => handleScrollTo('contact')}
                className="relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-slate-950 text-white font-semibold text-base shadow-xl shadow-slate-950/20 hover:shadow-2xl hover:shadow-blue-600/25 hover:bg-blue-600 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer group overflow-hidden border border-slate-800"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-500/20 to-indigo-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10">Start Your Project</span>
                <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={() => handleScrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-950 font-semibold text-base border border-slate-200 hover:border-slate-300 shadow-2xs hover:shadow-xs active:scale-[0.99] transition-all duration-200 cursor-pointer"
              >
                <span>View Case Studies</span>
              </button>
            </motion.div>

            {/* Technology Pills Row */}
            <motion.div 
              variants={itemVariants}
              className="pt-6 border-t border-slate-200/80 w-full"
            >
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                {[
                  { icon: Code2, label: "React", color: "text-sky-500" },
                  { icon: Server, label: "Node.js", color: "text-emerald-500" },
                  { icon: BrainCircuit, label: "AI", color: "text-purple-500" },
                  { icon: Smartphone, label: "Mobile", color: "text-blue-500" },
                  { icon: Database, label: "ERP", color: "text-amber-500" },
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/70 text-slate-700 text-xs font-semibold hover:bg-white hover:border-slate-300 hover:shadow-2xs transition-all"
                  >
                    <item.icon className={`w-3.5 h-3.5 ${item.color}`} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </motion.div>

          {/* Right Visual Column (40% width: lg:col-span-5) */}
          <motion.div 
            className="lg:col-span-5 relative w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div 
              className="relative mx-auto w-full max-w-lg lg:max-w-none select-none"
              style={{
                transform: shouldReduceMotion 
                  ? 'none' 
                  : `perspective(1200px) rotateY(${mousePos.x * 8}deg) rotateX(${-mousePos.y * 8}deg)`
              }}
            >
              {/* Outer Glowing Backdrop Aura */}
              <div 
                className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-600/20 via-sky-400/15 to-purple-600/20 blur-2xl pointer-events-none transition-transform duration-500"
                style={{
                  transform: `translate(${mousePos.x * 25}px, ${mousePos.y * 25}px)`
                }}
              />

              {/* Main Product Showcase Card */}
              <div className="relative awwwards-card rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-2xl">
                
                {/* Browser Window Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-200/60 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-rose-400 transition-colors" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-amber-400 transition-colors" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-emerald-400 transition-colors" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 ml-2">vertex-os v3.2</span>
                  </div>

                  {/* Realtime Live Engine Tag */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-medium font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>SYSTEM HEALTHY</span>
                  </div>
                </div>

                {/* Layered Digital Ecosystem Composition */}
                <div className="space-y-3.5">
                  
                  {/* Analytics Dashboard Panel */}
                  <div className="p-4 rounded-xl bg-slate-950 text-white border border-slate-800 relative overflow-hidden shadow-lg">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/20 via-sky-500/10 to-transparent pointer-events-none" />
                    
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
                        <Activity className="w-3.5 h-3.5 animate-pulse" />
                        <span>Realtime Throughput</span>
                      </div>
                      <span className="text-[11px] font-mono bg-blue-900/60 border border-blue-700/50 text-sky-300 px-2 py-0.5 rounded">
                        Global Edge
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-extrabold tracking-tight font-mono">4.92 ms</span>
                      <span className="text-xs text-emerald-400 font-semibold font-mono">↑ 99.98% SLA</span>
                    </div>

                    {/* Waveform Frequency bars */}
                    <div className="flex items-end gap-1.5 h-7 w-full pt-1">
                      {[40, 65, 45, 80, 55, 90, 75, 100, 85, 95, 100].map((h, i) => (
                        <div 
                          key={i} 
                          className={`flex-1 rounded-xs transition-all duration-500 ${i > 7 ? 'bg-gradient-to-t from-sky-500 to-blue-400' : 'bg-slate-800'}`}
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* AI Workflow & Database Pods */}
                  <div className="grid grid-cols-2 gap-3">
                    
                    {/* AI Workflow Card */}
                    <div className="p-3.5 rounded-xl bg-purple-50/70 border border-purple-200/80 flex flex-col justify-between group hover:border-purple-300 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center shadow-xs">
                          <BrainCircuit className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono font-semibold text-purple-700 bg-purple-100 px-1.5 py-0.5 rounded">
                          AI LLM
                        </span>
                      </div>
                      <div className="mt-3">
                        <div className="text-xs font-bold text-slate-900">Neural Agents</div>
                        <div className="text-[10px] text-purple-700 font-medium">Automated Logic</div>
                      </div>
                    </div>

                    {/* Cloud Database Node Pod */}
                    <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/80 flex flex-col justify-between group hover:border-blue-300 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-xs">
                          <Zap className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono font-semibold text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded">
                          0-DOWNTIME
                        </span>
                      </div>
                      <div className="mt-3">
                        <div className="text-xs font-bold text-slate-900">Edge Clusters</div>
                        <div className="text-[10px] text-blue-700 font-medium">Multi-Region Cloud</div>
                      </div>
                    </div>

                  </div>

                  {/* Code Snippet Panel */}
                  <div className="p-3.5 rounded-xl bg-slate-900 text-slate-300 border border-slate-800 font-mono text-[11px] leading-relaxed">
                    <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-800 text-slate-500 text-[10px]">
                      <span>pipeline.deploy.ts</span>
                      <span className="text-sky-400">CI/CD Active</span>
                    </div>
                    <div>
                      <span className="text-purple-400">export default</span> <span className="text-blue-400">defineArchitecture</span>({`{`}
                    </div>
                    <div className="pl-3 text-slate-400">
                      aiCore: <span className="text-emerald-400">'Autonomous'</span>,
                    </div>
                    <div className="pl-3 text-slate-400">
                      scalability: <span className="text-sky-300">'Infinite'</span>
                    </div>
                    <div>{`});`}</div>
                  </div>

                </div>

              </div>

              {/* Floating Mobile App Mockup Preview (Bottom Left) */}
              <motion.div 
                className="absolute -bottom-5 -left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-200 hidden sm:flex items-center gap-3 max-w-[220px] z-20"
                animate={shouldReduceMotion ? {} : { y: [0, -7, 0] }}
                transition={{ duration: 5.5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 text-white flex items-center justify-center font-bold shadow-md shadow-sky-500/20 shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Mobile & iOS</div>
                  <div className="text-[10px] text-slate-500">Cross-Platform Sync</div>
                </div>
              </motion.div>

              {/* Floating Quality Assurance Badge (Top Right) */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-200 hidden sm:flex items-center gap-3 max-w-[210px] z-20"
                animate={shouldReduceMotion ? {} : { y: [0, 7, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold shadow-md shadow-blue-500/20 shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">4.9★ Delivery</div>
                  <div className="text-[10px] text-slate-500">World-Class Craft</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
