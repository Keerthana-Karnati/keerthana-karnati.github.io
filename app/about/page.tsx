"use client";
import React from "react"; // ADD THIS LINE
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-white p-10">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-center md:text-left"
      >
        <h1 className="text-5xl font-bold mt-4 italic">About Me</h1>
        <p className="mt-6 text-zinc-400 text-xl leading-relaxed">
          I am Keerthana Karnati. I specialize in building digital experiences 
          that combine technical logic with elegant design. Currently exploring 
          the intersection of AI and Web Development.
        </p>
      </motion.div>
    </main>
  );
}