import '@/styles/globals.css';
import Footer from '@components/Footer';
import NavBar from '@components/NavBar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '徐文韬的博客',
  description: '徐文韬的个人博客，旨在记录生活，分享知识',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
