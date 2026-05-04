import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ src, title, description, link }) => {
  const isVideo = src?.endsWith(".webm") || src?.endsWith(".mp4");
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative group w-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
    >
      {/* Subtle Pulsing Border on Hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-purple-500/0 group-hover:border-purple-500/50 group-hover:animate-pulse transition-all duration-500 pointer-events-none" />
      
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative h-[350px] w-full overflow-hidden">
          {isVideo ? (
            <video
              src={src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <img 
              src={src} 
              alt={title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="p-6">
          <h3 className="text-white text-xl font-bold font-display group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-secondary text-sm font-sans line-clamp-2">
            {description}
          </p>
          
          <div className="mt-4 flex items-center text-purple-400 text-xs font-semibold uppercase tracking-wider gap-1">
            <span>Explore</span>
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectCard;
