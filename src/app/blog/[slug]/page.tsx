import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const { meta } = getPostBySlug(params.slug);
    return { title: `${meta.title} | osth0006` };
  } catch {
    return { title: 'Post Not Found | osth0006' };
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  let post;
  try {
    post = getPostBySlug(params.slug);
  } catch {
    notFound();
  }

  return (
    <main>
      <Navbar />
      <article className="pt-32 pb-20 px-6 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-cyber-muted hover:text-cyber-accent text-sm font-mono transition-colors mb-8 inline-block"
          >
            ← Back to blog
          </Link>
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.meta.title}</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-cyber-muted font-mono">{post.meta.date}</span>
              <div className="flex gap-2">
                {post.meta.tags.map((tag: string) => (
                  <span key={tag} className="px-2 py-0.5 text-xs font-mono bg-cyber-accent/5 border border-cyber-border rounded text-cyber-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </header>
          <div className="prose prose-invert max-w-none">
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
