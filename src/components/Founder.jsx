import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Code, Terminal, Sparkles, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { companyData } from '../data/companyData';

export default function Founder() {
  const { founder, contact } = companyData;

  return (
    <section id="founder" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-950/80 border border-sky-800/80 px-3 py-1 rounded-full mb-3">
            Engineering Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Meet the Founder
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl">
            Founder-led software development ensuring high technical standards, direct accountability, and clean architecture.
          </p>
        </div>

        {/* Premium Spotlight Grid */}
        <div className="bg-slate-800/60 rounded-3xl border border-slate-700/80 p-8 sm:p-12 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Founder Visual Badge */}
            <motion.div 
              className="lg:col-span-4 flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative mb-6 group">
                <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-blue-500 via-sky-400 to-purple-500 opacity-70 blur-md group-hover:opacity-100 transition duration-300" />
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-slate-900 border-4 border-slate-800 flex items-center justify-center overflow-hidden shadow-xl">
                  {/* Founder Initial Brand Visual */}
                  <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex flex-col items-center justify-center p-4">
                    <span className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
                      DM
                    </span>
                    <span className="text-[10px] uppercase font-mono text-slate-400 mt-1">Founder & Dev</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-100 mb-1">
                {founder.name}
              </h3>
              <p className="text-sky-400 font-medium text-sm mb-4">
                {founder.title}
              </p>

              {/* Social Quick Links */}
              <div className="flex items-center gap-3">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${contact.personalEmail}`}
                  aria-label="Send Email"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Founder Description & Skills */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                <blockquote className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal mb-6 pl-4 border-l-4 border-blue-500 italic bg-slate-900/40 p-4 rounded-r-xl">
                  "{founder.bio}"
                </blockquote>

                <p className="text-sm text-slate-400 leading-relaxed mb-8">
                  {founder.vision}
                </p>
              </div>

              {/* Technical Expertise Skills Pill Grid */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 block">
                  Core Engineering Capabilities
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {founder.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 text-sky-300 border border-slate-700 text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow-xs"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-sky-400" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
