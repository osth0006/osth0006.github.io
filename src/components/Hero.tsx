'use client';

import { motion } from 'framer-motion';
import ParticleField from './ParticleField';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleField />
      <div className="mesh-bg absolute inset-0" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-cyber-accent font-mono text-sm tracking-[0.3em] uppercase mb-6">
            osth0006
          </p>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Building{' '}
            <span className="text-cyber-accent glow">AI/ML Systems</span>
            <br />
            for National Security
          </h1>
          <p className="text-lg md:text-xl text-cyber-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Machine learning pipelines, threat intelligence, and secure distributed systems
            — engineered for defense and intelligence applications.
          </p>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-8 py-3 bg-cyber-accent/10 border border-cyber-accent/30 text-cyber-accent font-medium rounded hover:bg-cyber-accent/20 hover:border-cyber-accent/60 transition-all duration-300"
          >
            View Portfolio
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5">
              <path d="M8 3L8 13M8 13L13 8M8 13L3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyber-bg to-transparent" />
    </section>
  );
}
