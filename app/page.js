// import Image from "next/image";
import Intro from "@/Components/Intro";
import AboutMe from "@/Components/About-Me";
import Services from "@/Components/Services";
import Skills from "@/Components/Skills";
import Projects from "@/Components/Projects";
import Contact from "@/Components/Contact";
import ExperienceSection from "@/Components/Experience/ExpList";

export default function Home() {
  return (
    <div>
        <Intro />
        <AboutMe />
        <Services />
        <Skills />
        <ExperienceSection />
        <Projects />
        <Contact />
    </div>
  );
}
