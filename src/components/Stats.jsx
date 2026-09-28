import React from 'react';
import { motion } from 'framer-motion';
import { statsData } from '../data/statsData';

export default function Stats() {
  return (
    <section className="py-16 bg-blue-600 text-white relative overflow-hidden">
      {/* Decorative Grid backdrop */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-blue-500/50">
          {statsData.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`flex flex-col items-center text-center ${idx > 0 ? 'pt-6 lg:pt-0' : ''}`}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2">
                <span>{stat.value}</span>
                <span className="text-sky-300">{stat.suffix}</span>
              </div>
              <div className="text-base sm:text-lg font-bold text-blue-100 mb-1">
                {stat.label}
              </div>
              <div className="text-xs sm:text-sm text-blue-200/90 max-w-[200px]">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
