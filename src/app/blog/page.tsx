import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getAllPosts } from '@/lib/blog';

export const metadata = {
  title: 'Blog | osth0006',
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main>
      <Navbar />
      <div className="pt-32 pb-20 px-6 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <p className="text-cyber-accent font-mono text-sm tracking-[0.2em] uppercase mb-3">
            // blog
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-12">All Posts</h1>
          <div className="space-y-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block p-6 bg-cyber-card border border-cyber-border rounded-lg hover:border-cyber-accent/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h2 className="text-lg font-semibold group-hover:text-cyber-accent transition-colors">
                    {post.title}
                  </h2>
                  <span className="text-xs text-cyber-muted font-mono shrink-0">{post.date}</span>
                </div>
                <p className="text-cyber-muted text-sm mt-2">{post.excerpt}</p>
                <div className="flex gap-2 mt-3">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-xs font-mono bg-cyber-accent/5 border border-cyber-border rounded text-cyber-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
