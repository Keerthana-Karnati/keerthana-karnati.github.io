"use client";
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, ArrowRight, Code, Heart, Coffee, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-zinc-950 text-white selection:bg-violet-500/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen pt-32 pb-10 flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 blur-[140px] rounded-full -z-10" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 italic tracking-tighter">
            Keerthana Karnati
          </h1>
          <p className="text-zinc-400 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-10">
            Software Engineer specializing in building digital experiences 
            that combine technical logic with elegant design.
          </p>

          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-violet-400 hover:text-white transition-all duration-300"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* 2. ABOUT & PHOTO SECTION */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        /* Reduced size classes here: w-64 h-64 (256px) */
        className="relative w-60 h-60 md:w-64 md:h-64 mx-auto group" 
      >
        {/* The decorative glowing frame - Adjusted radius to match smaller size */}
        <div className="absolute -inset-3 border border-white/5 rounded-[40px] -z-10 group-hover:border-violet-500/30 transition-colors duration-500" />
        
        <div className="w-full h-full rounded-[35px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-white/10 relative bg-zinc-900">
          <Image 
            src="/images/profile.jpg" 
            alt="Keerthana Karnati" 
            fill
            priority 
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 italic">Beyond the Code</h2>
          <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
            When I'm not architecting systems or polishing pixels, I immerse myself in the things that keep my creativity fueled. I believe a great engineer is shaped by their curiosity outside the terminal.
          </p>
          
          {/* Interests Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
              <Globe size={18} className="text-violet-400" />
              <span className="text-sm font-medium">Traveling</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
              <Heart size={18} className="text-violet-400" />
              <span className="text-sm font-medium">Digital Art</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
              <Coffee size={18} className="text-violet-400" />
              <span className="text-sm font-medium">Coffee Brewing</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
              <Code size={18} className="text-violet-400" />
              <span className="text-sm font-medium">Open Source</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. GET IN TOUCH SECTION */}
      <section id="contact" className="py-24 px-6 flex justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-2xl p-[1px] rounded-3xl bg-gradient-to-b from-white/20 to-transparent"
        >
          <div className="bg-zinc-900/50 backdrop-blur-xl rounded-[23px] p-12 text-center">
            <h2 className="text-4xl font-bold mb-4 italic text-white">Get In Touch</h2>
            <p className="text-zinc-400 mb-10 max-w-sm mx-auto">
              Have a project in mind or just want to chat about tech? 
              I'm always open to interesting conversations.
            </p>
            
            {/* THE THREE LOGOS ROW */}
            <div className="flex items-center justify-center gap-8 md:gap-12 mt-8">
              
              {/* EMAIL LOGO */}
              <a 
                href="mailto:your.email@example.com" 
                className="group flex flex-col items-center gap-3"
              >
                <div className="p-5 border border-white/10 rounded-full bg-white/5 group-hover:border-violet-500/50 group-hover:bg-violet-500/10 transition-all duration-500 group-hover:-translate-y-2">
                  <Mail size={28} className="text-zinc-400 group-hover:text-white" />
                </div>
                <span className="text-[10px] text-zinc-600 tracking-[0.3em] uppercase group-hover:text-violet-400 transition-colors">Email</span>
              </a>

              {/* LINKEDIN LOGO */}
              <a 
                href="https://linkedin.com/in/YOUR_LINKEDIN" 
                target="_blank" 
                className="group flex flex-col items-center gap-3"
              >
                <div className="p-5 border border-white/10 rounded-full bg-white/5 group-hover:border-violet-500/50 group-hover:bg-violet-500/10 transition-all duration-500 group-hover:-translate-y-2">
                  <Linkedin size={28} className="text-zinc-400 group-hover:text-white" />
                </div>
                <span className="text-[10px] text-zinc-600 tracking-[0.3em] uppercase group-hover:text-violet-400 transition-colors">LinkedIn</span>
              </a>

              {/* GITHUB LOGO */}
              <a 
                href="https://github.com/keerthanakarnati" 
                target="_blank" 
                className="group flex flex-col items-center gap-3"
              >
                <div className="p-5 border border-white/10 rounded-full bg-white/5 group-hover:border-violet-500/50 group-hover:bg-violet-500/10 transition-all duration-500 group-hover:-translate-y-2">
                  <Github size={28} className="text-zinc-400 group-hover:text-white" />
                </div>
                <span className="text-[10px] text-zinc-600 tracking-[0.3em] uppercase group-hover:text-violet-400 transition-colors">GitHub</span>
              </a>

            </div>
          </div>
        </motion.div>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-zinc-600 text-[10px] tracking-[0.3em] uppercase mb-2">
          Designed & Developed by
        </p>
        <p className="text-white text-sm font-medium italic tracking-wider">
          Keerthana Karnati • Built with Next.js
        </p>
        <div className="mt-6 text-zinc-700 text-[9px] tracking-widest uppercase">
          © 2026 • All Rights Reserved
        </div>
      </footer>
    </main>
  );
}



/*"use client"; // This tells Next.js this page uses animations
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold mb-4">Hi, I'm [Your Name]</h1>
        <p className="text-gray-400 text-xl">I build high-performance web experiences.</p>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-8 px-6 py-3 bg-white text-black rounded-full font-semibold"
      >
        View My Work
      </motion.button>
    </main>
  );
}*/