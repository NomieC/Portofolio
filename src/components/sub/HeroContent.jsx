"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../utils/motion";
import Planet from "./Planet.jsx";
import "../../styles/downloadcv.css";

const CV = "/FidelBrianDava_CV.pdf";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="h-full w-full flex flex-col justify-center px-5 md:px-20 mt-20 md:mt-40 z-[20]"
    >
      <div className="h-full w-full flex flex-col md:flex-row justify-between items-center mt-20 md:mt-0">
        {/* Left: Text Content */}
        <div className="flex flex-col gap-5 text-start max-w-full md:max-w-[50%]">
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold"
          >
            <span className="textnama text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              <span>Fidel</span> <span>Brian</span> <span>Dava</span>
            </span>
          </motion.div>
          <motion.div
            variants={slideInFromLeft(0.6)}
            className="flex flex-col gap-6 text-3xl md:text-5xl font-bold text-white"
          >
            Junior Full Stack Developer
          </motion.div>
          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-base md:text-lg text-gray-400 my-3"
          >
            I am a Full Stack Developer with experience in developing web
            applications using JavaScript, React, Node.js, and MySQL. I am
            passionate about creating high-quality software and I enjoy learning
            new technologies.
          </motion.p>
          <motion.div variants={slideInFromLeft(0.9)} className="button mx-auto md:mx-0">
            <a href={CV} download="FidelBrianDava_CV.pdf">
              <button className="btn">
                <strong className="strong">Download CV</strong>
                <div className="containerstars">
                  <div className="stars"></div>
                </div>
                <div className="glow">
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
              </button>
            </a>
          </motion.div>
        </div>

        {/* Right: Planet */}
        <motion.div
          variants={slideInFromRight(1)}
          className="w-full md:w-[90%] h-auto md:h-[90%] -mt-[200px] md:mt-0 "
        >
          <Planet />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;