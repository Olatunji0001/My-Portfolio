import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";


export default function Footer(){
  return(
    <div className="container font-mono text-center mt-10 p-5 md:p-10 text-white">
          <p className="nav-list">Copyright © 2026 Musbau Olatunji -  <span className="test-font text-md">Tee Jay!⚡.</span></p>

          <div className="flex justify-center gap-4 mt-5">
            <a href="mailto:musbautunji@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            >
            <CiMail className="text-2xl" />
            </a>
            <a href="https://www.instagram.com/tee_jay_boy_/"
            target="_blank"
            rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a href="https://x.com/_tee_jay_01"
            target="_blank"
            rel="noopener noreferrer"
            >
             <FaXTwitter className="text-2xl" />
            </a>
            <a href="https://github.com/Olatunji0001"
            target="_blank"
            rel="noopener noreferrer"
            >
            <IoLogoGithub className="text-2xl" />
            </a>
          </div>
    </div>
  )
}