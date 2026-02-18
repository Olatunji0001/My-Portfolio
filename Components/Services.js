"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <div id="services" className="container p-5 md:p-10">
      <div className="name text-center py-3 space-y-2">
        <h2 className="text-[24px] md:text-[45px] text-white font-extrabold">
          What I Do
        </h2>
        <p className="text-[14px] md:text-[14px] text-[#A78BFA] font-semibold">
          Backend-Focused Services
        </p>
      </div>

      <div className="contents my-4 md:text-[17px] gap-4 text-[13px] flex flex-col justify-evenly md:w-[100%] md:flex-row mx-auto text-white">

        {/* Backend Development - PRIMARY */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-[100%] md:w-[30%] h-[290px] p-6 rounded-md cursor-pointer hover:scale-105 hover:border-2 hover:border-[#A78BFA] transition-transform duration-300"
        >
          <div>
            <Image
              className="mb-3"
              src="/service-icon.png"
              width={44}
              height={44}
              alt="backend-icon"
            />
            <h2 className="md:text-[17px] text-[14px] font-bold mb-3">
              Backend Engineering
            </h2>
            <p className="md:font-regular text-[13px] md:text-[15px]">
              Designing scalable and production-ready server-side applications
              using Node.js, Express, and NestJS. I build RESTful APIs,
              authentication systems (JWT, RBAC), payment integrations,
              and structured architectures that are clean, maintainable,
              and built to scale.
            </p>
          </div>
        </motion.div>

        {/* API & System Architecture */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-[100%] md:w-[30%] h-[290px] p-6 rounded-md cursor-pointer hover:scale-105 hover:border-2 hover:border-[#A78BFA] transition-transform duration-300"
        >
          <div>
            <Image
              className="mb-3"
              src="/service-icon.png"
              width={44}
              height={44}
              alt="architecture-icon"
            />
            <h2 className="md:text-[17px] text-[14px] font-bold mb-3">
              API & System Design
            </h2>
            <p className="md:font-regular text-[13px] md:text-[15px]">
              Structuring applications using MVC and service-layer patterns.
              Designing efficient database schemas with MongoDB and Mongoose.
              Building systems that handle multi-role users, multi-store logic,
              and complex business workflows without becoming messy.
            </p>
          </div>
        </motion.div>

        {/* Fullstack Capability */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-[100%] md:w-[30%] h-[290px] p-6 rounded-md cursor-pointer hover:scale-105 hover:border-2 hover:border-[#A78BFA] transition-transform duration-300"
        >
          <div>
            <Image
              className="mb-3"
              src="/service-icon.png"
              width={44}
              height={44}
              alt="frontend-icon"
            />
            <h2 className="md:text-[17px] text-[14px] font-bold mb-3">
              Full-Stack Development
            </h2>
            <p className="md:font-regular text-[13px] md:text-[15px]">
              When needed, I build responsive frontend applications using
              React and Next.js. This allows me to design backend APIs that
              integrate seamlessly with modern user interfaces and deliver
              complete, production-ready products.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
