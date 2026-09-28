import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, Hexagon } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Track active section
      const sections = companyData.navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 sm:px-6 pt-4 sm:pt-6 pointer-events-none">
      
      {/* Main Navbar Container */}
      <motion.div 
        layout
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto flex items-center justify-between transition-all duration-500 max-w-7xl w-full mx-auto ${
          isScrolled 
            ? 'awwwards-card px-4 sm:px-6 py-3 sm:py-3.5 rounded-2xl shadow-xl' 
            : 'px-2 py-2 bg-transparent'
        }`}
      >
        
        {/* Brand Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="DK Vertex Solutions Home"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-950 text-white overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-slate-800">
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Hexagon className="w-6 h-6 absolute text-slate-800/50" strokeWidth={1} />
            <span className="font-bold text-lg font-mono relative z-10 tracking-tight">DK</span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-tight text-slate-900 text-[17px] leading-tight group-hover:text-blue-600 transition-colors font-['Plus_Jakarta_Sans',sans-serif]">
              DK Vertex <span className="font-medium text-slate-500">Solutions</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 absolute left-1/2 -translate-x-1/2">
          {companyData.navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative px-4 py-2 text-[13px] font-semibold text-slate-600 hover:text-slate-950 transition-colors rounded-full group"
              >
                <span className="relative z-10">{link.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-slate-100/80 rounded-full -z-0 border border-slate-200/60"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {!isActive && (
                  <div className="absolute inset-0 bg-slate-50 rounded-full -z-0 scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-950 text-white font-semibold text-[13px] overflow-hidden transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-slate-900/10 hover:shadow-xl hover:shadow-blue-600/20 border border-slate-800"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-500/20 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Start Project</span>
            <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden relative p-2.5 rounded-xl text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:text-slate-950 transition-all active:scale-95"
          aria-label="Toggle Navigation Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

      </motion.div>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 pointer-events-auto"
            />

            {/* Mobile Menu Panel */}
            <motion.div 
              initial={{ y: -20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -10, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-2xl rounded-3xl p-6 z-50 pointer-events-auto overflow-hidden"
            >
              
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">Navigation</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <nav className="flex flex-col gap-1.5 mb-8">
                {companyData.navLinks.map((link, idx) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <motion.a
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.05 * idx, duration: 0.4 }}
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`group flex items-center justify-between px-4 py-3.5 rounded-2xl text-[15px] font-bold transition-all ${
                        isActive
                          ? 'bg-slate-950 text-white shadow-md'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <Sparkles className="w-4 h-4 text-sky-400" />}
                    </motion.a>
                  );
                })}
              </nav>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="pt-6 border-t border-slate-100"
              >
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-slate-950 text-white font-semibold text-[15px] shadow-lg shadow-slate-900/10 active:scale-[0.98] transition-transform"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </motion.div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
