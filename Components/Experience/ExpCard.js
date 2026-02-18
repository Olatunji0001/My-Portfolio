const ExperienceCard = ({ experience, isLast }) => {
  return (
    <div className={`relative text-white pl-8 ${!isLast ? "pb-12" : ""}`}>
      
      {/* Timeline marker */}
      <div className="absolute left-0 top-0 flex flex-col items-center h-full">
        <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-[#A78BFA]" />
        <div className={`flex-1 w-px bg-[#A78BFA] ${isLast ? "hidden" : ""}`} />
      </div>

      <div className="space-y-5">

        {/* Company */}
        <div className="flex items-center gap-3">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#A78BFA]/40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5 text-[#A78BFA]"
            >
              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
              <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
              <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
            </svg>
          </div>

          <span className="text-lg md:text-2xl font-semibold">
            {experience.company}
          </span>
        </div>

        {/* Role + Year */}
        <div>
          <h3 className="text-md md:text-xl font-medium text-[#A78BFA]">
            {experience.role}
          </h3>

          <div className="mt-2 flex items-center gap-2 text-sm text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
            </svg>
            <span>{experience.year}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-[13px] md:text-[16px] leading-relaxed text-gray-300">
          {experience.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {experience.skills.map((skill, index) => (
            <span
              key={index}
              className="rounded-full border border-[#A78BFA]/60 px-3 py-1 text-[12px] md:text-[14px] text-[#A78BFA]"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ExperienceCard;
