import Image from "next/image";
import ProjectList from "./ProjectSection/ProjectList";

export default function Projects() {
  return (
    <div id="projects" className="container  p-5 md:p-10">
      <div className="name text-center py-3 space-y-2">
        <h2 className="text-[24px] md:text-[45px] text-white font-extrabold">
          Projects
        </h2>
        <p className="text-[14px] md:text-[14px] text-[#A78BFA] font-semibold">
          My Creations
        </p>

        <div className="md:hidden block mt-5 flex items-center justify-center">
          <div className="flex items-center gap-2 text-[#A78BFA]/80 animate-swipe-fade">
            <div className="text-2xl animate-arrow-left">←</div>
            <span className="text-sm text-white font-medium">Swipe</span>
            <div className="text-2xl animate-arrow-right">→</div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <ProjectList />
      </div>
    </div>
  );
}
