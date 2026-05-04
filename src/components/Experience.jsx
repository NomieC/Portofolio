import React from "react";
import ProjectCard from "./sub/ProjectCard";
import { motion } from "framer-motion";
import { styles } from "../styles";

const projects = [
  {
    link: "https://tv.umn.ac.id",
    src: "/UMNTV.webm",
    title: "UMNTV",
    date: "2025",
    description: "Website for UMN TV, a student organization in my university (Still in development)",
    color: "#804dee"
  },
  {
    link: "#",
    src: "/Dishub.png",
    title: "Dishub Tangerang Selatan",
    date: "2025",
    description: "Website for Dishub Tangerang Selatan, a local government organization while I was an intern there",
    color: "#00cea8"
  },
  {
    link: "https://maisonresto.com",
    src: "/maison.jpeg",
    title: "Maison de l'Anglais",
    date: "2024",
    description: "FnB website for midterms project, made with PHP laravel",
    color: "#f12711"
  },
  {
    link: "https://genshinfo.vercel.app/",
    src: "/genshinfo.jpeg",
    title: "Genshinfo",
    date: "2023",
    description: "Wiki website for genshin impact community",
    color: "#56ccf2"
  },
];

const ExperienceItem = ({ project, index }) => {
  return (
    <div className="flex items-center justify-center w-full mb-16 relative group">
      {/* Connector Line */}
      {index !== projects.length - 1 && (
        <div className="absolute top-10 bottom-[-60px] w-[2px] bg-gradient-to-b from-purple-500/50 via-transparent to-transparent opacity-30" />
      )}

      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl px-4 gap-4 md:gap-10">
        {/* Project Card */}
        <div className={`flex-1 w-full ${index % 2 === 0 ? "md:order-1" : "md:order-3"}`}>
          <ProjectCard {...project} />
        </div>

        {/* Center Node */}
        <div className="relative flex items-center justify-center z-10 md:order-2">
            <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute w-8 h-8 rounded-full border border-white/30"
            />
        </div>

        {/* Date Side */}
        <div className={`flex-1 hidden md:block ${index % 2 === 0 ? "md:order-3 text-left pl-10" : "md:order-1 text-right pr-10"}`}>
            <span className="text-white font-display text-4xl font-bold opacity-20 group-hover:opacity-100 transition-opacity">
                {project.date}
            </span>
        </div>
        
        {/* Mobile Date */}
        <div className="md:hidden mt-2">
            <span className="text-secondary font-display font-bold">{project.date}</span>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 z-10" id="projects">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 px-4"
      >
        <p className={`${styles.sectionSubText} font-sans tracking-[0.3em] uppercase`}>A Portfolio of Cosmic Solutions</p>
        <h1 className="text-white font-display font-bold text-5xl md:text-6xl mt-4">
          Deployments: Digital Constellations
        </h1>
      </motion.div>

      <div className="mt-20 flex flex-col w-full relative">
        {projects.map((project, index) => (
          <ExperienceItem key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
