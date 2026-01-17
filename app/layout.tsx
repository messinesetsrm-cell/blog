import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - 100px)', paddingTop: '6rem' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
