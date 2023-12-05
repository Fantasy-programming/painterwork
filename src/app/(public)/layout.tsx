import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { NextAuthProvider } from "@/Provider";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import "@/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Colorworks",
  description: "A Painter you can trust",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="colorwork">
      <body className={inter.className}>
        <div className="min-h-screen pattern1">
          <Navbar />
          <NextAuthProvider>{children}</NextAuthProvider>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
