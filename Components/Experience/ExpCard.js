const ExperienceCard = ({ experience, isLast }) => {
  return (
    <div className={`relative pl-8 ${!isLast ? 'pb-10' : ''}`}>
      {/* vertical line and dot */}
      <div className={`absolute left-0 top-2.5 w-[2px]  ${!isLast ? 'h-full' : 'h-0'}`}>
        <div className="absolute left-[-5px] top-0 size-3 rounded-full border-2 border-[#A78BFA] "></div>
      </div>

      
      <div className="space-y-3">
        {/* company */}
        <div className="flex items-center gap-3">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
              <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
              <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
              <path d="M10 6h4"></path>
              <path d="M10 10h4"></path>
              <path d="M10 14h4"></path>
              <path d="M10 18h4"></path>
            </svg>
          </div>
          <span className="text-lg font-semibold ">{experience.company}</span>
        </div>

        {/* role and year */}
        <div>
          <h3 className="text-xl font-medium ">{experience.role}</h3>
          <div className="mt-1 flex items-center gap-2 text-sm ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
            <span>{experience.year}</span>
          </div>
        </div>

        {/* description */}
        <p className="">{experience.description}</p>

        {/* skills */}
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill, index) => (
            <div key={index} className="rounded-full border border-gray-300 px-3 py-1 text-sm">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;