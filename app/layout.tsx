import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import ThemeToggle from "./components/ThemeToggle";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keerthana Karnati | Full Stack Developer",
  description: "Software Engineer & Data Analyst Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-200 antialiased transition-colors duration-300`}>
        <Providers> 
          <nav className="fixed top-0 w-full z-50 grid grid-cols-3 items-center px-6 md:px-12 py-8 bg-white/50 dark:bg-[#020617]/50 backdrop-blur-md border-b border-blue-200 dark:border-blue-900/20">
            
            <div className="flex justify-start">
              <Link href="/" className="text-[20px] tracking-[0.3em] font-bold text-blue-600 dark:text-blue-400 hover:opacity-70 transition">
                KK
              </Link>
            </div>

            <div className="flex justify-self-center items-center gap-5 px-6 py-3 rounded-full bg-slate-100 dark:bg-blue-950/20 border border-slate-200 dark:border-blue-900/30 shadow-sm dark:shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              {/* Added dark:text classes to nav links so they are visible in the both modes */}
              <Link href="/#about" className="text-[9px] font-bold tracking-[0.2em] text-slate-500 dark:text-slate-400 hover:text-blue-600 transition">ABOUT</Link>
              <Link href="/#experience" className="text-[9px] font-bold tracking-[0.2em] text-slate-500 dark:text-slate-400 hover:text-blue-600 transition">EXPERIENCE</Link>
              <Link href="/#projects" className="text-[9px] font-bold tracking-[0.2em] text-slate-500 dark:text-slate-400 hover:text-blue-600 transition">PROJECTS</Link>
              <Link href="/#certs" className="text-[9px] font-bold tracking-[0.2em] text-slate-500 dark:text-slate-400 hover:text-blue-600 transition">CERTIFICATIONS</Link>
            </div>

            <div className="flex justify-end items-center gap-5">
              <ThemeToggle />
              <a href="mailto:keerthanakarnati.work@gmail.com" className="text-slate-400 hover:text-blue-600 transition">
                <Mail size={18} strokeWidth={1.5} />
              </a>
              <a href="https://www.linkedin.com/in/keerthana-karnati-8ba4151a0/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition">
                <Linkedin size={18} strokeWidth={1.5} />
              </a>
              <a href="https://github.com/Keerthana-Karnati" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition">
                <Github size={18} strokeWidth={1.5} />
              </a>
            </div>
          </nav>
          {children} 
        </Providers>
      </body>
    </html>
  );
}