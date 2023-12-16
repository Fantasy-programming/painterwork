import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

import { NextAuthProvider } from '@/Provider';

import { Inter } from 'next/font/google';

import Footer from './_components/Footer';
import Navbar from './_components/Navbar';
import Animate from './_components/Animate';

import '@/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Colorworks',
  description: 'Painters you can trust',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="colorwork">
      <body className={inter.className}>
        <Animate>
          <div className="min-h-screen pattern1">
            <Navbar />
            <NextAuthProvider>{children}</NextAuthProvider>
            <Footer />
          </div>
          <Analytics />
        </Animate>
      </body>
    </html>
  );
}
