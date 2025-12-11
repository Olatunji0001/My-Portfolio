"use client";

import projects from "./ProjectArray";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";

const ProjectList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getPosition = (index) => {
    const diff = index - currentIndex;

    if (diff === 0) return "center";
    if (diff === 1 || diff === -(projects.length - 1)) return "right";
    if (diff === -1 || diff === projects.length - 1) return "left";
    return "hidden";
  };

  const navigate = (direction) => {
    setCurrentIndex((prev) => {
      if (direction === 1) {
        return prev === projects.length - 1 ? 0 : prev + 1;
      } else {
        return prev === 0 ? projects.length - 1 : prev - 1;
      }
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Handle drag end to determine swipe direction
  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    
    if (info.offset.x > swipeThreshold) {
      navigate(-1);
    } else if (info.offset.x < -swipeThreshold) {
      navigate(1);
    }
  };

  return (
    <div className="w-full min-h-screen overflow-hidden ">
      {/* header */}
     
      {/* main container*/}
      <motion.div 
        className="relative h-[700px] md:h-[700px] max-w-6xl mx-auto"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            position={getPosition(index)}
            index={index}
            currentIndex={currentIndex}
            onClick={goToSlide}
          />
        ))}

        {/* nav btns */}
        <div className=" absolute top-1/2 -translate-y-1/2 w-full px-4 md:px-10 flex justify-between pointer-events-none z-1">
          <button
            onClick={() => navigate(-1)}
            className="hidden md:block pointer-events-auto text-[#A78BFA] text-4xl backdrop-blur-sm p-4 rounded-full  border border-[#A78BFA]/30 transition-all hover:scale-110"
          >
            <FaCircleArrowLeft />
          </button>
          <button
            onClick={() => navigate(1)}
            className="hidden md:block pointer-events-auto text-[#A78BFA] text-4xl backdrop-blur-sm p-4 rounded-full  hover:bg-white/20 border border-[#A78BFA]/30 transition-all hover:scale-110"
          >
            <FaCircleArrowRight />
          </button>
        </div>
      </motion.div>

     
    </div>
  );
};

export default ProjectList;