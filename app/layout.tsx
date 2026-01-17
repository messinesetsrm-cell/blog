import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Messinese Salvatore | Antigravity",
    template: "%s | Antigravity"
  },
  description: "Dalle radici alla gravità zero. Un'area personale dedicata a pensieri, dati di mercato e multimedia curata da Messinese Salvatore.",
  keywords: ["Messinese Salvatore", "Antigravity", "Finanza", "Multimedia", "Blog", "Mercati"],
  authors: [{ name: "Messinese Salvatore" }],
  creator: "Messinese Salvatore",
  other: {
    "google-adsense-account": "ca-pub-4846963160240954",
  },
};

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4846963160240954"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - 100px)', paddingTop: '6rem' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
