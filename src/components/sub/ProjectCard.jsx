import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../utils/motion";

const ProjectCard = ({ src, title, description }) => {
  return (
    <motion.div
      variants={slideInFromLeft(0.5)} // Animation variant
      initial="hidden" // Initial state
      whileInView="visible" // Animate when in view
      viewport={{ once: true, amount: 1 }} // Trigger once, 30% visibility
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
    >
      <img src={src} alt={title} width={500} height={500} />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 ">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
