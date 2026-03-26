'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Threat Intel Pipeline',
    description: 'End-to-end ML pipeline for processing and classifying threat intelligence data',
    repo: 'osth0006/threat-intel-pipeline',
    tags: ['Python', 'PyTorch', 'Apache Kafka', 'Docker'],
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Geospatial Anomaly Detection',
    description: 'Anomaly detection on geospatial/temporal data using deep learning',
    repo: 'osth0006/geospatial-anomaly-detection',
    tags: ['Python', 'TensorFlow', 'GeoPandas', 'PostGIS'],
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Secure C2 Dashboard',
    description: 'Full-stack C2 dashboard with real-time data visualization',
    repo: 'osth0006/secure-c2-dashboard',
    tags: ['TypeScript', 'React', 'Node.js', 'WebSocket'],
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" strokeLinecap="round" />
        <path d="M6 8h.01M9 8h.01" strokeLinecap="round" />
        <path d="M6 11h12" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Federated Learning Sim',
    description: 'Privacy-preserving federated learning for distributed sensor networks',
    repo: 'osth0006/federated-learning-sim',
    tags: ['Python', 'PyTorch', 'gRPC', 'Differential Privacy'],
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="5" r="3" />
        <circle cx="5" cy="19" r="3" />
        <circle cx="19" cy="19" r="3" />
        <path d="M12 8v3M7.5 17.5l3-5.5M16.5 17.5l-3-5.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-cyber-accent font-mono text-sm tracking-[0.2em] uppercase mb-3">
            // portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.a
              key={project.repo}
              href={`https://github.com/${project.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              className="group block p-8 bg-cyber-card border border-cyber-border rounded-lg card-glow transition-all duration-300 hover:border-cyber-accent/30"
            >
              <div className="text-cyber-accent mb-5 opacity-70 group-hover:opacity-100 transition-opacity">
                {project.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-cyber-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-cyber-muted text-sm leading-relaxed mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono bg-cyber-accent/5 border border-cyber-border rounded text-cyber-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
