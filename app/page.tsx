"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, GraduationCap, Linkedin, Mail, Github } from "lucide-react";

export default function Portfolio() {
  // --- data ---
  const education = [
    { school: "University of Central Missouri", degree: "M.S. Computer Science", duration: "2023 - 2025" },
    { school: "Osmania University", degree: "B.E. Computer Science", duration: "2019 - 2023" }
  ];

  const experience = [
    {
      role: "Full Stack Developer Intern",
      company: "Virtusa",
      duration: "June 2023 – Dec 2023",
      description: "Developed end-to-end web features using React and Angular.js, delivering high-performance, user-centric solutions."
    }
  ];

  const projects = [
    { title: "Flower Shop Website", description: "Comprehensive e-commerce platform with dynamic inventory management.", tech: ["PHP", "HTML", "CSS", "MySQL"], link: "#" },
    { title: "CarPool System", description: "Efficient ride-sharing application focusing on scalability and user experience.", tech: ["React", "MongoDB"], link: "#" },
    { title: "Portfolio Website", description: "Modern, responsive personal brand site with smooth animations.", tech: ["Next JS", "React", "Tailwind CSS", "Framer Motion", "Lucide React"], link: "#" },
    { title: "Hotel Management System", description: "Full-stack enterprise application for hotel operations and guest management using layered architecture.", tech: ["Java", "SpringBoot", "MongoDB", "Thymeleaf", "Bootstrap", "Jquery", "Maven"], link: "#" },
  ];

  const certifications = [
    { title: "Oracle Certified Java SE 8 Programmer", issuer: "Oracle"},
    { title: "NPTEL – Deep Learning", issuer: "NPTEL" },
    { title: "NPTEL – The Joy of Computing Using Python", issuer: "NPTEL" }
  ];

  return (
    /* background: White in light , Dark navy in dark mode */
    <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-200 font-sans selection:bg-blue-500/30 transition-colors duration-300">
      
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        
        {/* HERO SECTION */}
        <motion.section id="about" className="mb-40 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start pt-10">
          <div className="lg:col-span-2">
            <div className="flex items-start gap-6 mb-6">
              {/* Picture Frame*/}
              <div className="relative w-20 h-20 md:w-35 md:h-35 rounded-2xl overflow-hidden border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-950/50 flex-shrink-0 mt-1 shadow-sm">
                  <img 
                      src="/images/profile.jpg" 
                      alt="Keerthana Karnati"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
              </div>

              <div className="flex flex-col">
                <h1 className="text-sm font-bold tracking-[0.4em] uppercase text-blue-600 dark:text-blue-500 mb-2">
                  Keerthana Karnati
                </h1>
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tighter italic text-slate-900 dark:text-white leading-tight">
                  Full Stack Developer <span className="text-blue-600 dark:text-blue-500 mx-1">·</span> Software Engineer <span className="text-blue-600 dark:text-blue-500 mx-1">·</span>
                  AI Enthusiast <span className="text-blue-600 dark:text-blue-500 mx-1">·</span> Data Analyst
                </h2>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl">
            I am a tech professional who thrives at the intersection of clean code and intelligent data. 
            Having recently completed my Master’s in Computer Science, my focus is on building end-to-end technology that solves 
            real-world problems through robust software architecture and Generative AI.
            Whether I’m architecting a multi-tier enterprise system in Java or leveraging 
            LLMs to automate workflows, I am dedicated to building software that is as smart as it is functional.
            </p>
          </div>

          {/* Education -Light gray bg in light mode, dark tint in dark mode */}
          <div className="p-6 rounded-xl border border-blue-100 dark:border-blue-900/30 bg-slate-50 dark:bg-blue-950/10 backdrop-blur-sm">
            <h3 className="text-[10px] font-bold mb-4 text-blue-600 dark:text-blue-500 uppercase tracking-widest flex items-center gap-2">
              <GraduationCap size={12} /> Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={i}>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">{edu.school}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-500">{edu.degree}</p>
                  <p className="text-[10px] text-blue-700 dark:text-blue-900 mt-0.5">{edu.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Experience */}
        <section id="experience" className="mb-40 scroll-mt-24">
          <h3 className="text-[10px] font-bold mb-12 text-slate-400 dark:text-slate-600 uppercase tracking-[0.4em]">Experience</h3>
          <div className="space-y-12">
            {experience.map((exp, i) => (
              <div key={i} className="group relative pl-8 border-l border-slate-200 dark:border-slate-900">
                <div className="absolute w-1.5 h-1.5 bg-blue-300 dark:bg-blue-900 rounded-full -left-[3.5px] top-2 group-hover:bg-blue-500 transition-colors" />
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">{exp.role}</h4>
                  <span className="text-xs text-blue-600 dark:text-blue-900 font-mono">{exp.duration}</span>
                </div>
                <p className="text-blue-600 dark:text-blue-500/70 text-sm mb-2 font-medium">{exp.company}</p>
                <p className="text-slate-600 dark:text-slate-500 text-sm max-w-2xl">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-40 scroll-mt-24">
          <h3 className="text-[10px] font-bold mb-12 text-slate-400 dark:text-slate-600 uppercase tracking-[0.4em]">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="p-8 rounded-2xl border border-blue-100 dark:border-blue-900/20 bg-slate-50/50 dark:bg-blue-950/5 hover:bg-white dark:hover:bg-blue-950/10 hover:shadow-xl dark:hover:shadow-none transition-all group">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition text-slate-900 dark:text-slate-100">{project.title}</h4>
                  <a href={project.link} target="_blank"><ExternalLink size={18} className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400" /></a>
                </div>
                <p className="text-slate-600 dark:text-slate-500 text-sm mb-6 leading-relaxed">{project.description}</p>
                <div className="flex gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono text-blue-600 dark:text-blue-400/60 border border-blue-200 dark:border-blue-900/30 px-2 py-1 rounded bg-white dark:bg-blue-950/20 shadow-sm dark:shadow-none">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Certifications */}
        <section id="certs" className="mb-40 scroll-mt-24">
          <div className="flex flex-col gap-10">
            {/* Heading */}
            <h3 className="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.4em]">
              Certifications
            </h3>

            {/* The Grid of Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <div 
                  key={i} 
                  className="p-4 border border-blue-10 dark:border-blue-900/20 bg-slate-50 dark:bg-blue-950/5 rounded-xl group transition-all"
                >
                  <p className="text-slate-800 dark:text-slate-200 text-sm font-semibold leading-tight">
                    {cert.title}
                  </p>
                  <p className="text-blue-600 dark:text-blue-500/60 text-[10px] uppercase tracking-widest mt-2 font-medium">
                    {cert.issuer}
                  </p>
                </div>
              ))}
            </div>

            {/* Single Button  */}
            <div className="flex justify-center mt-4">
              <a 
                href="https://www.linkedin.com/in/keerthana-karnati-8ba4151a0/details/certifications/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 rounded-full border border-blue-200 dark:border-blue-500/30 bg-white dark:bg-blue-500/5 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-slate-900 transition-all shadow-sm hover:shadow-blue-500/20"
              >
                VIEW ON LINKEDIN
                {/* <Linkedin size={10} className="group-hover:scale-100 transition-transform" /> */}
              </a>
            </div>
          </div>
        </section>
        {/* Connection */}
<section id="connect" className="mb-20 scroll-mt-24">
  <div className="p-12 rounded-3xl border border-blue-200 dark:border-blue-900/20 bg-slate-50 dark:bg-blue-950/5 text-center transition-all">
    <h3 className="text-[10px] font-bold text-blue-600 dark:text-blue-500 uppercase tracking-[0.4em] mb-4">
    </h3>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 tracking-tighter">
      Let's Connect.
    </h2>
    
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      {/* Email Link */}
      <a 
        href="mailto:keerthanakarnati.work@gmail.com" 
        className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-400 transition-all group"
      >
        <Mail size={18} className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
        
      </a>

      {/* LinkedIn Link */}
      <a 
        href="https://www.linkedin.com/in/keerthana-karnati-8ba4151a0/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-400 transition-all group"
      >
        <Linkedin size={18} className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
       
      </a>

      {/* GitHub Link */}
      <a 
        href="https://github.com/Keerthana-Karnati" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-400 transition-all group"
      >
        <Github size={18} className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
        
      </a>
    </div>

    <p className="mt-10 text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
      Currently seeking new opportunities in Full Stack Development and Software Engineer roles. 
      My inbox is always open!
    </p>
  </div>
</section>
        <footer className="text-center text-[10px] text-slate-400 dark:text-slate-800 uppercase tracking-[0.5em] pt-20 border-t border-slate-100 dark:border-slate-900">
          Keerthana Karnati
        </footer>
      </main>
    </div>
  );
}
