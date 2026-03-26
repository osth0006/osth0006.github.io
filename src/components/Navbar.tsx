'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cyber-bg/90 backdrop-blur-md border-b border-cyber-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-wider text-cyber-accent font-mono">
          osth0006
        </Link>
        <div className="flex gap-8 text-sm font-medium">
          <a href="/#portfolio" className="text-cyber-muted hover:text-cyber-accent transition-colors">
            Portfolio
          </a>
          <a href="/#skills" className="text-cyber-muted hover:text-cyber-accent transition-colors">
            Skills
          </a>
          <Link href="/blog" className="text-cyber-muted hover:text-cyber-accent transition-colors">
            Blog
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
