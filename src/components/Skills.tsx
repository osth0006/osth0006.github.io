'use client';

import { motion } from 'framer-motion';

const skills = [
  {
    category: 'ML / AI',
    items: [
      { name: 'PyTorch / TensorFlow', level: 95 },
      { name: 'NLP & Transformers', level: 88 },
      { name: 'Computer Vision', level: 82 },
      { name: 'MLOps & Deployment', level: 85 },
    ],
  },
  {
    category: 'Data Science',
    items: [
      { name: 'Python / Pandas / NumPy', level: 95 },
      { name: 'Statistical Analysis', level: 88 },
      { name: 'Data Engineering', level: 80 },
      { name: 'Geospatial Analysis', level: 78 },
    ],
  },
  {
    category: 'Full-Stack Dev',
    items: [
      { name: 'TypeScript / React', level: 85 },
      { name: 'Node.js / Python APIs', level: 88 },
      { name: 'PostgreSQL / Redis', level: 82 },
      { name: 'Docker / Kubernetes', level: 78 },
    ],
  },
  {
    category: 'Cyber / OPSEC',
    items: [
      { name: 'Threat Modeling', level: 85 },
      { name: 'Network Security', level: 80 },
      { name: 'Secure Architecture', level: 88 },
      { name: 'OSINT / Red Team', level: 75 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="mesh-bg absolute inset-0 opacity-50" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-cyber-accent font-mono text-sm tracking-[0.2em] uppercase mb-3">
            // capabilities
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">Technical Skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="p-6 bg-cyber-card/50 border border-cyber-border rounded-lg"
            >
              <h3 className="text-lg font-semibold mb-6 text-cyber-accent font-mono">
                {group.category}
              </h3>
              <div className="space-y-5">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-cyber-text">{skill.name}</span>
                      <span className="text-cyber-muted font-mono text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-cyber-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-cyber-accent-dim to-cyber-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
