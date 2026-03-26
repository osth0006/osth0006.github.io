import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'osth0006 | AI/ML for National Security',
  description: 'Technical portfolio — AI/ML, cybersecurity, and defense technology.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
