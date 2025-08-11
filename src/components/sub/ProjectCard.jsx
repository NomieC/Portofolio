import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "../../utils/motion";

const ProjectCard = ({ src, title, description, link }) => {
  const isVideo = src?.endsWith(".webm") || src?.endsWith(".mp4");
  return (
    <motion.div
      variants={slideInFromTop} // Animation variant
      initial="hidden" // Initial state
      whileInView="visible" // Animate when in view
      viewport={{ once: true, amount: 0.1 }} // Trigger once, 10% visibility
      className=" mx-auto max-w-md md:max-w-2xl lg:max-w-7xl relative overflow-hidden rounded-lg shadow-lg border border-[#fff] backdrop-blur-s bg-white/5 hover:bg-white/10 transition-all duration-300 ease-in-out"
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        {isVideo ? (
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className="mb-8 object-cover"
          />
        ) : (
          <img src={src} alt={title} className="mb-8 object-cover" />
        )}

        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectCard;
