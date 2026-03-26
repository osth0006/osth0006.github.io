'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export default function BlogPreview({ posts }: { posts: Post[] }) {
  return (
    <section id="blog" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <p className="text-cyber-accent font-mono text-sm tracking-[0.2em] uppercase mb-3">
              // blog
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">Latest Posts</h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex text-sm text-cyber-muted hover:text-cyber-accent transition-colors"
          >
            View all →
          </Link>
        </motion.div>

        <div className="space-y-4">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block p-6 bg-cyber-card border border-cyber-border rounded-lg hover:border-cyber-accent/30 card-glow transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-cyber-accent transition-colors mb-2">
                      {post.title}
                    </h3>
                    <p className="text-cyber-muted text-sm">{post.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 text-xs font-mono bg-cyber-accent/5 border border-cyber-border rounded text-cyber-muted">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-cyber-muted font-mono whitespace-nowrap">{post.date}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
