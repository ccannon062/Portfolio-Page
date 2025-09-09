"use client";
import { motion } from "motion/react";
import { FiDatabase, FiGlobe } from "react-icons/fi";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { TbBracketsAngle } from "react-icons/tb";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlinePalette } from "react-icons/md";
import "../globals.css";

export default function Skills() {
  return (
    <>
      <div className="w-full m:p-30 bg-gradient-to-r from-[#818cf8] via-[#3b82f6] to-[#4f46e5]">
        <div className="mx-auto px-4">
          <h1 className="text-5xl font-bold text-white tracking-tight py-6 text-center">
            Skills & Expertise
          </h1>
          <div className="w-32 h-1 mx-auto rounded bg-indigo-900"></div>
          <p className="pt-6 text-gray-100/90 text-lg leading-relaxed text-center">
            Specialized in backend development with full-stack capabilities
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-6 max-w-7xl mx-auto px-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="relative w-full max-w-80 h-auto bg-indigo-900/45 rounded-md border border-gray-100 justify-self-center text-white p-6 hover:shadow-[0px_0px_6px_3px_rgba(147,_51,_234,_0.2)]"
          >
            <div className="flex gap-4 items-center mb-4">
              <div className="bg-indigo-900/30 p-3 rounded-lg">
                <FiDatabase className="text-white w-6 h-6" />
              </div>
              <h2 className="text-xl font-medium">Backend Engineering</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-100/90">
              <li className="hover:text-white">Java Spring Boot</li>
              <li className="hover:text-white">Microservices</li>
              <li className="hover:text-white">PostgreSQL</li>
              <li className="hover:text-white">MongoDB</li>
              <li className="hover:text-white">REST APIs</li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="relative w-full max-w-80 h-auto bg-indigo-900/45 rounded-md border border-gray-100 justify-self-center text-white p-6 hover:shadow-[0px_0px_6px_3px_rgba(147,_51,_234,_0.2)]"
          >
            <div className="flex gap-4 items-center mb-4">
              <div className="bg-indigo-900/30 p-3 rounded-lg">
                <HiOutlineLightningBolt className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-medium">Enterprise Technologies</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-100/90">
              <li className="hover:text-white">Spring Framework</li>
              <li className="hover:text-white">JPA/Hibernate</li>
              <li className="hover:text-white">Maven/Gradle</li>
              <li className="hover:text-white">JUnit</li>
              <li className="hover:text-white">Docker</li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="relative w-full max-w-80 h-auto bg-indigo-900/45 rounded-md border border-gray-100 justify-self-center text-white p-6 hover:shadow-[0px_0px_6px_3px_rgba(147,_51,_234,_0.2)]"
          >
            <div className="flex gap-4 items-center mb-4">
              <div className="bg-indigo-900/30 p-3 rounded-lg">
                <FiGlobe className="text-white w-6 h-6" />
              </div>
              <h2 className="text-xl font-medium">Cloud & DevOps</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-100/90">
              <li className="hover:text-white">AWS</li>
              <li className="hover:text-white">CI/CD</li>
              <li className="hover:text-white">Git</li>
              <li className="hover:text-white">Linux</li>
              <li className="hover:text-white">Kubernetes</li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="relative w-full max-w-80 h-auto bg-indigo-900/45 rounded-md border border-gray-100 justify-self-center text-white p-6 hover:shadow-[0px_0px_6px_3px_rgba(147,_51,_234,_0.2)]"
          >
            <div className="flex gap-4 items-center mb-4">
              <div className="bg-indigo-900/30 p-3 rounded-lg">
                <TbBracketsAngle className="text-white w-6 h-6" />
              </div>
              <h2 className="text-xl font-medium">Frontend</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-100/90">
              <li className="hover:text-white">React</li>
              <li className="hover:text-white">TypeScript</li>
              <li className="hover:text-white">TailwindCSS</li>
              <li className="hover:text-white">Next.js</li>
              <li className="hover:text-white">Vite</li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="relative w-full max-w-80 h-auto bg-indigo-900/45 rounded-md border border-gray-100 justify-self-center text-white p-6 hover:shadow-[0px_0px_6px_3px_rgba(147,_51,_234,_0.2)]"
          >
            <div className="flex gap-4 items-center mb-4">
              <div className="bg-indigo-900/30 p-3 rounded-lg">
                <IoPhonePortraitOutline className="text-white w-6 h-6" />
              </div>
              <h2 className="text-xl font-medium">Web & App Development</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-100/90">
              <li className="hover:text-white">HTML5</li>
              <li className="hover:text-white">CSS3</li>
              <li className="hover:text-white">JavaScript</li>
              <li className="hover:text-white">React Native</li>
              <li className="hover:text-white">Expo</li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="relative w-full max-w-80 h-auto bg-indigo-900/45 rounded-md border border-gray-100 justify-self-center text-white p-6 hover:shadow-[0px_0px_6px_3px_rgba(147,_51,_234,_0.2)]"
          >
            <div className="flex gap-4 items-center mb-4">
              <div className="bg-indigo-900/30 p-3 rounded-lg">
                <MdOutlinePalette className="text-white w-6 h-6" />
              </div>
              <h2 className="text-xl font-medium">Architecture & Design</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-100/90">
              <li className="hover:text-white">Figma</li>
              <li className="hover:text-white">Adobe Creative Suite</li>
              <li className="hover:text-white">OpenAPI</li>
              <li className="hover:text-white">Relational DB Design</li>
              <li className="hover:text-white">Responsive Design</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
}
