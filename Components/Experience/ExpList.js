import experiences from "./ExpArray";
import ExperienceCard from "./ExpCard";

const ExperienceSection = () => {
  return (
    <section id="experience" className="my-10 scroll-mt-28 md:mb-20 px-4">
      {/* header */}
      <div className="mb-10 text-center">
        <h2 className="font-heading text-[24px] md:text-[45px] text-white font-extrabold">My Experience</h2>
        <p className="text-[14px] md:text-[14px] text-[#A78BFA] font-semibold">
          Professional Experience.
        </p>
      </div>

      {/* timeline */}
      <div className="relative max-w-screen-md mx-auto">
        {experiences.map((experience, index) => (
          <ExperienceCard 
            key={experience.id} 
            experience={experience} 
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;