import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

// export default function ProjectCard({
//   id,
//   desktopImage,
//   name,
//   cardDescription,
// }) {
//   return (
//     <div className="md:w-[100%] container border border-[#A78BFA] rounded-xl   text-white name">
//       <div className="cursor-pointer">
//         <div>
//           <Image
//             className="mb-3 rounded-xl"
//             src={desktopImage}
//             width={800}
//             height={600}
//             alt={name}
//           />
//           <div className=" p-6">
//             <h2 className="md:text-[17px] text-[14px] font-bold mb-3">
//               {name}
//             </h2>

//             <p className="md:font-regular text-[13px] md:text-[15px]">
//               {cardDescription}
//             </p>

//             <Link href={`/Project/${id}`}>
//               <button className="rounded-full nav-list hover:bg-[#A78BFA] mx-auto mt-4 text-[14px] border border-[#A78BFA] w-[164px] h-[41px] hover:scale-105 transition-transform duration-300">
//                 <div className="flex items-center hover:gap-5 justify-center gap-3">
//                   <p>View Project</p>
//                   <IoIosArrowForward className="text-white font-bold" />
//                 </div>
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


const ProjectCard = ({ project, position, index, currentIndex, onClick }) => {
  const { id, desktopImage, name, cardDescription } = project;

  const variants = {
    center: {
      x: '0%',
      scale: 1,
      opacity: 1,
      zIndex: 5,
      filter: 'blur(0px)'
    },
    left: {
      x: '-60%',
      scale: 0.7,
      opacity: 0.5,
      zIndex: 1,
      filter: 'blur(2px)'
    },
    right: {
      x: '60%',
      scale: 0.7,
      opacity: 0.5,
      zIndex: 1,
      filter: 'blur(2px)'
    },
    hidden: {
      x: position === 'left' ? '-80%' : '80%',
      scale: 0.5,
      opacity: 0,
      zIndex: 0
    }
  };

  const isCenter = position === 'center';

  return (
    <motion.div
      variants={variants}
      animate={position}
      initial="hidden"
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30
      }}
      onClick={() => !isCenter && onClick(index)}
      className="absolute w-[90%] md:w-[60%]"
      style={{ 
        top: '50%', 
        left: '50%', 
        translateX: '-50%', 
        translateY: '-50%',
        pointerEvents: isCenter ? 'auto' : 'all',
        cursor: isCenter ? 'default' : 'pointer'
      }}
    >
      <div className="md:w-[100%] container border border-[#A78BFA] rounded-xl text-white">
        <div className={isCenter ? 'cursor-default' : 'cursor-pointer'}>
          <div>
            <img
              className="mb-3 rounded-t-xl w-full h-auto object-cover"
              src={desktopImage}
              alt={name}
              loading="lazy"
            />
            <div className="p-6">
              <h2 className="md:text-[17px] text-[14px] font-bold mb-3">
                {name}
              </h2>

              <p className="md:font-regular text-[13px] md:text-[15px]">
                {cardDescription}
              </p>

              {isCenter && (
                <a href={`/Project/${id}`}>
                  <button className="rounded-full hover:bg-[#A78BFA] mx-auto mt-4 text-[14px] border border-[#A78BFA] w-[164px] h-[41px] hover:scale-105 transition-all duration-300">
                    <div className="flex items-center hover:gap-5 justify-center gap-3 transition-all duration-300">
                      <p>View Project</p>
                      <span className="text-white font-bold">→</span>
                    </div>
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};