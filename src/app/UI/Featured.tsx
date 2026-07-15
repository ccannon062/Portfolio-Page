"use client";
import { motion } from "motion/react";
import { FiExternalLink, FiCode } from "react-icons/fi";
import { HiOutlineBeaker } from "react-icons/hi";
import "../globals.css";

export default function Featured() {
  return (
    <>
      <div className="w-full py-20 md:py-28 bg-[#232a3a] px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Prior Experience
            </h2>
            <div className="w-32 h-1 mx-auto rounded bg-[#D3AC2B] mb-6"></div>
            <p className="text-gray-100/90 text-lg max-w-2xl mx-auto">
              A technical and research background that now informs how I
              think about innovation, systems, and the law
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group relative w-full h-auto bg-[#3B475C]/40 rounded-lg border border-[#D3AC2B]/30 text-white overflow-hidden hover:bg-[#3B475C]/70 transition-all duration-300 p-6"
            >
              <div className="flex gap-4 items-center mb-4">
                <div className="bg-[#D3AC2B]/30 p-3 rounded-lg">
                  <FiCode className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-[#D3AC2B] transition-colors duration-300">
                  Software Developer
                </h3>
              </div>

              <p className="text-gray-100/90 mb-4 text-sm leading-relaxed">
                Built and maintained backend systems, primarily using Java
                Spring Boot to design and extend RESTful API features for
                production applications.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[#232a3a] rounded text-xs">
                  Java
                </span>
                <span className="px-2 py-1 bg-[#232a3a] rounded text-xs">
                  Spring Boot
                </span>
                <span className="px-2 py-1 bg-[#232a3a] rounded text-xs">
                  REST APIs
                </span>
                <span className="px-2 py-1 bg-[#232a3a] rounded text-xs">
                  PostgreSQL
                </span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group relative w-full h-auto bg-[#3B475C]/40 rounded-lg border border-[#D3AC2B]/30 text-white overflow-hidden hover:bg-[#3B475C]/70 transition-all duration-300 p-6"
            >
              <div className="flex gap-4 items-center mb-4">
                <div className="bg-[#D3AC2B]/30 p-3 rounded-lg">
                  <HiOutlineBeaker className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-[#D3AC2B] transition-colors duration-300">
                  MOBS Research
                </h3>
              </div>

              <p className="text-gray-100/90 mb-4 text-sm leading-relaxed">
                Computer science research funded by the DoD&apos;s DEPSCoR
                initiative, applying machine learning and social science
                methods to model and predict mob outcomes.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-[#232a3a] rounded text-xs">
                  Python
                </span>
                <span className="px-2 py-1 bg-[#232a3a] rounded text-xs">
                  Machine Learning
                </span>
                <span className="px-2 py-1 bg-[#232a3a] rounded text-xs">
                  Data Analysis
                </span>
              </div>

              <a
                href="https://sameral-khateeb.github.io/MobsModeling/index.html"
                target="_blank"
                className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-[#D3AC2B] text-[#232a3a] hover:bg-[#c09a23] rounded text-sm font-semibold transition-colors cursor-pointer"
              >
                <FiExternalLink className="w-4 h-4" />
                Visit Website
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
