import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react"; // Import the logos

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keerthana Karnati | Portfolio",
  description: "Software Engineer and Designer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-950 text-white antialiased`}>
        {/* The Navigation Bar */}
        <nav className="fixed top-0 w-full z-50 grid grid-cols-3 items-center px-6 md:px-12 py-8">
          
          {/* 1. Left Side: Your Name/Logo */}
          <div className="flex justify-start">
            <Link href="/" className="text-[10px] tracking-[0.3em] font-bold hover:text-zinc-400 transition">
              KEERTHANA KARNATI
            </Link>
          </div>

          {/* 2. Center: Navigation Capsule */}
          <div className="flex justify-self-center items-center gap-6 px-8 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <Link href="/" className="text-[10px] tracking-[0.2em] hover:text-zinc-400 transition">HOME</Link>
            <Link href="/about" className="text-[10px] tracking-[0.2em] hover:text-zinc-400 transition">ABOUT</Link>
            <Link href="/experience" className="text-[10px] tracking-[0.2em] hover:text-zinc-400 transition">EXPERIENCE</Link>
            <Link href="/projects" className="text-[10px] tracking-[0.2em] hover:text-zinc-400 transition">PROJECTS</Link>
          </div>

          {/* 3. Right Side: Social Logos & Email */}
          <div className="flex justify-end items-center gap-5">
            <a 
              href="mailto:your.email@example.com" 
              className="hover:text-zinc-400 transition"
            >
              <Mail size={18} strokeWidth={1.5} />
            </a>
            <a 
              href="https://linkedin.com/in/YOUR_LINKEDIN_HERE" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-zinc-400 transition"
            >
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
            
            <a 
              href="https://github.com/keerthanakarnati" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-zinc-400 transition"
            >
              <Github size={18} strokeWidth={1.5} />
            </a>
          </div>
        </nav>
        
        {children}
      </body>
    </html>
  );
}