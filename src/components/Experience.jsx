import React from "react";
import ProjectCard from "./sub/ProjectCard";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../utils/motion";

const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 md:mt-20 z-10">
      <motion.h1
        variants={slideInFromTop}
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.01 }}
        className="text-[40px] font-semibold text-gray-500 py-20"
      >
        My Project
      </motion.h1>
      <div className="flex flex-wrap justify-center gap-10 px-10">
        <ProjectCard
          src="/genshinfo.jpeg"
          title="Genshinfo"
          description="Wiki website for genshin impact community"
        />
        <ProjectCard
          src="/maison.jpeg"
          title="Maison de l'Anglais"
          description="FnB website for midterms project, made with PHP laravel"
        />
        <ProjectCard
          src="/genshinfo.jpeg"
          title="Genshinfo"
          description="Wiki website for genshin impact community"
        />
      </div>
    </div>
  );
};

export default Experience;
