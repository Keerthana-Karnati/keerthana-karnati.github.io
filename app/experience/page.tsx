"use client";
import React from "react";
import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    company: "Company Name",
    role: "Software Engineering Intern",
    duration: "June 2025 - Present",
    description: "Developed responsive web applications using Next.js and Tailwind CSS. Optimized database queries for faster load times.",
  },
  {
    company: "University Project",
    role: "Full Stack Developer",
    duration: "Jan 2025 - May 2025",
    description: "Built an AI-integrated task manager. Lead a team of 4 students to deliver the project 2 weeks ahead of schedule.",
  },
  {
    company: "Tech Start-up",
    role: "Frontend Developer",
    duration: "Aug 2024 - Dec 2024",
    description: "Designed clean user interfaces and implemented smooth animations using Framer Motion.",
  }
];

export default function Experience() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-16 italic text-white text-center"
        >
          Experience
        </motion.h1>

        <div className="relative border-l border-zinc-800 ml-4 md:ml-0">
          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 ml-8 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-zinc-950" />
              
              <span className="text-sm text-zinc-500 font-mono tracking-tighter uppercase">
                {exp.duration}
              </span>
              <h2 className="text-2xl font-semibold text-white mt-1">
                {exp.role}
              </h2>
              <h3 className="text-blue-400 font-medium mb-4">
                {exp.company}
              </h3>
              <p className="text-zinc-400 leading-relaxed max-w-xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}