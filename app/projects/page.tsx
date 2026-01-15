"use client";
import React from "react";
import { motion } from "framer-motion";

// This is where you add your projects in the future!
const PROJECTS = [
  {
    title: "AI Chat Interface",
    description: "A sleek React-based chat UI with real-time streaming.",
    tags: ["Next.js", "Tailwind", "OpenAI"],
  },
  {
    title: "E-Commerce Platform",
    description: "High-performance shopping experience with smooth transitions.",
    tags: ["TypeScript", "Framer Motion", "Stripe"],
  },
  {
    title: "Data Visualization",
    description: "Interactive dashboard for tracking global climate data.",
    tags: ["Three.js", "D3.js", "React"],
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-12 italic text-white"
        >
          Featured Work
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors cursor-pointer"
            >
              <h2 className="text-2xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h2>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex gap-3 flex-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs rounded-full bg-zinc-800 text-zinc-300 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}