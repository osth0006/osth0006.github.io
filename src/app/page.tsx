import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Skills from '@/components/Skills';
import BlogPreview from '@/components/BlogPreview';
import Footer from '@/components/Footer';
import { getAllPosts } from '@/lib/blog';

export default function Home() {
  const posts = getAllPosts();

  return (
    <main>
      <Navbar />
      <Hero />
      <Portfolio />
      <Skills />
      <BlogPreview posts={posts} />
      <Footer />
    </main>
  );
}
