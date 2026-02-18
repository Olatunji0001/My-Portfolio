"use client";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div id="about" className="container p-5 md:p-10">
      <div className="name text-center py-3 space-y-2">
        <h2 className="text-[24px] md:text-[45px] text-white font-extrabold">
          About Me
        </h2>
        <p className="text-[14px] md:text-[14px] text-[#A78BFA] font-semibold">
          Backend Developer • Express • NestJS
        </p>
      </div>

      <div
        id="resume"
        className="fade-in contents space-y-7 my-4 md:text-[17px] text-[13px] flex flex-col gap-3 md:max-w-[840px] mx-auto text-center text-white"
      >
        <p>
          Hi! I'm <span className="text-[#A78BFA]">Olatunji</span>, a
          backend-focused developer who builds scalable and well-structured
          server-side applications using Express and NestJS.
        </p>

        <p>
          Backend engineering is my priority. I enjoy designing RESTful APIs,
          structuring databases, handling authentication and authorization, and
          building systems that are clean, maintainable, and production-ready. I
          think deeply about architecture, performance, and long-term
          scalability.
        </p>

        <p>
          I work primarily with Node.js, Express, and NestJS — building
          multi-store e-commerce backends, payment integrations, role-based
          access systems, and service-layer architectures. I focus on writing
          code that doesn’t just work, but can grow without becoming messy.
        </p>

        <p>
          While backend is my strength, I also understand frontend development
          using React and Next.js. This allows me to operate comfortably as a
          full-stack developer when necessary and design APIs that frontend
          applications can consume efficiently.
        </p>

        <p>
          Outside of coding, I’m refining backend architectures, improving my
          system design skills, and building projects that go beyond basic CRUD
          operations.
        </p>

        <button
          onClick={() =>
            window.open("/Olatunji_Backend_Developer_1Page_Resume.pdf")
          }
          className="rounded-full nav-list hover:bg-[#A78BFA] mx-auto mt-4 text-[14px] border border-[#A78BFA] w-[164px] h-[41px] hover:scale-105 transition-transform duration-300"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
}
