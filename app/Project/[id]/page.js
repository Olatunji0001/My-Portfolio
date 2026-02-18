"use client";

import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import ProjectArray from "@/Components/ProjectSection/ProjectArray";
import { useParams } from "next/navigation";

export default function ProjectPage() {
  const params = useParams();
  const id = params.id;

  const project = ProjectArray.find((p) => p.id === Number(id));

  if (!project) {
    return <p className="text-white text-center mt-10">Project not found</p>;
  }

  return (
    <div className="container mx-auto p-5 md:p-10 text-white">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6">{project.name}</h1>

      {/* Description & Tech */}
      <div className="my-6 p-8 border border-[#A78BFA] rounded-xl">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">Description</h3>
        <p className="leading-7">{project.description}</p>

        <hr className="my-6 border-[#A78BFA]" />

        <h3 className="text-xl md:text-2xl font-semibold mb-4">Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="text-white px-3 py-1 rounded-full border border-[#A78BFA] text-sm hover:bg-[#A78BFA]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Visit Project Button */}
      <div className="my-6 flex justify-center">
        <a
          href={project.visitProject}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-6 py-3 flex items-center gap-3 border border-[#A78BFA] rounded-md hover:bg-[#A78BFA] hover:scale-105 transition-transform duration-300">
            <span>Visit Project</span>
            <FaExternalLinkAlt />
          </button>
        </a>
      </div>

      {/* Desktop Image Only */}
      <div className="my-8 w-full flex justify-center">
        <Image
          src={project.desktopImage}
          alt={project.name}
          width={1200}
          height={800}
          className="w-full h-auto rounded-xl object-contain"
        />
      </div>
    </div>
  );
}
