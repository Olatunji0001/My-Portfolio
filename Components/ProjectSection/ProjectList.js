"use client";

import projects from "./ProjectArray";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";

// Project Card Component
const ProjectCard = ({ project, position, index, currentIndex, onClick }) => {
  const { id, desktopImage, name, cardDescription } = project;

  const variants = {
    center: {
      x: "0%",
      scale: 1,
      opacity: 1,
      zIndex: 5,
      filter: "blur(0px)",
    },
    left: {
      x: "-60%",
      scale: 0.7,
      opacity: 0.5,
      zIndex: 1,
      filter: "blur(2px)",
    },
    right: {
      x: "60%",
      scale: 0.7,
      opacity: 0.5,
      zIndex: 1,
      filter: "blur(2px)",
    },
    hidden: {
      x: position === "left" ? "-80%" : "80%",
      scale: 0.5,
      opacity: 0,
      zIndex: 0,
    },
  };

  const isCenter = position === "center";

  return (
    <motion.div
      variants={variants}
      animate={position}
      initial="hidden"
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      onClick={() => !isCenter && onClick(index)}
      className="absolute w-[90%] md:w-[60%]"
      style={{
        top: "50%",
        left: "50%",
        translateX: "-50%",
        translateY: "-50%",
        pointerEvents: isCenter ? "auto" : "all",
        cursor: isCenter ? "default" : "pointer",
      }}
    >
      <div className="md:w-[100%] container border border-[#A78BFA] rounded-xl text-white">
        <div className={isCenter ? "cursor-default" : "cursor-pointer"}>
          <div>
            <Image
              className="mb-3 rounded-t-xl w-full h-auto object-cover"
              src={desktopImage}
              width={800}
              height={600}
              alt={name}
            />
            <div className="p-6">
              <h2 className="md:text-[17px] text-[14px] font-bold mb-3">
                {name}
              </h2>

              <p className="md:font-regular text-[13px] md:text-[15px]">
                {cardDescription}
              </p>

              {isCenter && (
                <Link href={`/Project/${id}`}>
                  <button className="rounded-full hover:bg-[#A78BFA] mx-auto mt-4 text-[14px] border border-[#A78BFA] w-[164px] h-[41px] hover:scale-105 transition-all duration-300">
                    <div className="flex items-center hover:gap-5 justify-center gap-3 transition-all duration-300">
                      <p>View Project</p>
                      <IoIosArrowForward className="text-white font-bold" />
                    </div>
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

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

  return (
    <div className="w-full min-h-screen overflow-hidden ">
      {/* header */}
     
      {/* main container*/}
      <div className="relative h-[600px] md:h-[700px] max-w-6xl mx-auto">
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
      </div>

     
    </div>
  );
};

export default ProjectList;