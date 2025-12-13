const ExperienceCard = ({ experience, isLast }) => {
  return (
    <div className={`relative text-white pl-8 ${!isLast ? "pb-10" : ""}`}>
      {/* vertical line + dot */}
      {/* timeline marker */}
      <div className="absolute left-0 top-0 flex flex-col items-center h-full">
        {/* Dot */}
        <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-[#A78BFA]"></div>

        {/* Line */}
        <div className={`flex-1 w-px bg-[#A78BFA] ${isLast ? "hidden" : ""}`} />
      </div>

      <div className="space-y-4">
        {/* company */}
        <div className="flex items-center gap-3">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5"
            >
              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
              <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
              <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
              <path d="M10 6h4"></path>
              <path d="M10 10h4"></path>
              <path d="M10 14h4"></path>
              <path d="M10 18h4"></path>
            </svg>
          </div>
          <span className="text-md md:text-xl font-semibold ">{experience.company}</span>
        </div>

        {/* role and year */}
        <div className="space-y-3">
          <h3 className="md:text-xl text-md font-medium ">{experience.role}</h3>
          <div className="mt-1 flex items-center gap-2 text-sm ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
            >
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
            <span>{experience.year}</span>
          </div>
        </div>

        {/* description */}
        <p className="md:text-[17px] leading-[30px] text-[13px]">{experience.description}</p>

        {/* skills */}
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill, index) => (
            <div
              key={index}
              className="rounded-full border md:text-[17px] text-[13px] border-[#A78BFA] px-3 py-1 text-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
