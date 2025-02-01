import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "../../utils/motion";

const ProjectCard = ({ src, title, description, link }) => {
  return (
    <motion.div
      variants={slideInFromTop} // Animation variant
      initial="hidden" // Initial state
      whileInView="visible" // Animate when in view
      viewport={{ once: false, amount: 0.1 }} // Trigger once, 10% visibility
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#fff] "
    >
      <img src={src} alt={title} width={500} height={500} />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;