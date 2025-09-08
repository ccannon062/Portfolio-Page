"use client";
import { motion } from "motion/react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import "../globals.css";

export default function Featured() {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#818cf8] via-[#3b82f6] to-[#4f46e5] pb-30 px-4">
        <div className="max-w-7xl mx-auto py-16">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white tracking-tight mb-4">
              Featured Projects
            </h2>
            <div className="w-32 h-1 mx-auto rounded bg-indigo-900 mb-6"></div>
            <p className="text-gray-100/90 text-lg max-w-2xl mx-auto">
              A collection of finished and active projects that showcase my
              skills and passion for development
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group relative w-full h-auto bg-indigo-900/50 rounded-lg border border-indigo-700 text-white overflow-hidden hover:bg-indigo-800/60 transition-all duration-300"
            >
              <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center text-white font-bold text-xl bg-[url(/EventZ.png)] bg-cover"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                  Event Scheduling Platform
                </h3>

                <p className="text-gray-100/90 mb-4 text-sm leading-relaxed">
                  A modern scheduling solution built with React and Java Spring
                  boot. Featuring event scheduling, creation, browsing, and user
                  authentication.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    React
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    PostgreSQL
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    Java Spring
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    OpenAPI
                  </span>
                </div>

                <a
                  href="https://github.com/ccannon062/EventZ"
                  target="_blank"
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 rounded text-sm font-medium transition-colors cursor-pointer"
                >
                  <FiGithub className="w-4 h-4" />
                  View Code
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group relative w-full h-auto bg-indigo-900/50 rounded-lg border border-indigo-700 text-white overflow-hidden hover:bg-indigo-800/60 transition-all duration-300"
            >
              <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                <div className="w-full h-full bg-gradient-to-br from-green-500 to-teal-600 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center text-white font-bold text-xl bg-[url(/StartupWeb.png)] bg-cover"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                  VulcanWeb
                </h3>

                <p className="text-gray-100/90 mb-4 text-sm leading-relaxed">
                  A website built for a local startup. Featuring full stack
                  functionality, responsive web design, and basic web security
                  principles.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    HTML5
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    Bootstrap 5
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    JavaScript
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    Flask
                  </span>
                </div>
                <a
                  href="https://github.com/ccannon062/VulcanWeb"
                  target="_blank"
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 rounded text-sm font-medium transition-colors cursor-pointer"
                >
                  <FiGithub className="w-4 h-4" />
                  View Code
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group relative w-full h-auto bg-indigo-900/50 rounded-lg border border-indigo-700 text-white overflow-hidden hover:bg-indigo-800/60 transition-all duration-300"
            >
              <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-600 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center text-white font-bold text-xl bg-[url(/PortfolioWeb.png)] bg-cover"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                  Portfolio Website
                </h3>

                <p className="text-gray-100/90 mb-4 text-sm leading-relaxed">
                  A clean, modern portfolio website showcasing modern design
                  principles, web security, and full stack functionality with
                  cloud hosting.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    React
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    Tailwind
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    Framer Motion
                  </span>
                </div>

                <a
                  href="https://github.com/ccannon062/Portfolio-Page"
                  target="_blank"
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 rounded text-sm font-medium transition-colors cursor-pointer"
                >
                  <FiGithub className="w-4 h-4" />
                  View Code
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group relative w-full h-auto bg-indigo-900/50 rounded-lg border border-indigo-700 text-white overflow-hidden hover:bg-indigo-800/60 transition-all duration-300"
            >
              <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-600 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center text-white font-bold text-xl bg-[url(/NodeNetwork.png)] bg-cover"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                  Social Media Analysis
                </h3>

                <p className="text-gray-100/90 mb-4 text-sm leading-relaxed">
                  A comprehensive social media analysis project using Python,
                  the Reddit API, and matplotlib to visualize and disect social
                  media networks.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    Python
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    PRAW
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    Matplotlib
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    NetworkX
                  </span>
                </div>

                <a
                  href="https://github.com/ccannon062/CSC445-Final-Project"
                  target="_blank"
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 rounded text-sm font-medium transition-colors cursor-pointer"
                >
                  <FiGithub className="w-4 h-4" />
                  View Code
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group relative w-full h-auto bg-indigo-900/50 rounded-lg border border-indigo-700 text-white overflow-hidden hover:bg-indigo-800/60 transition-all duration-300"
            >
              <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center text-white font-bold text-xl bg-[url(/EERDiagram.png)] bg-cover"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                  Home Management Platform
                </h3>

                <p className="text-gray-100/90 mb-4 text-sm leading-relaxed">
                  A currently active project for my Database Design & Security
                  class. A fully functional recipe collaboration and management
                  system.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    React
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    Express.js
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    MySQL
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    AWS
                  </span>
                </div>

                <button className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 rounded text-sm font-medium transition-colors">
                  <FiGithub className="w-4 h-4" />
                  View Code
                </button>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group relative w-full h-auto bg-indigo-900/50 rounded-lg border border-indigo-700 text-white overflow-hidden hover:bg-indigo-800/60 transition-all duration-300"
            >
              <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-green-600 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center text-white font-bold text-xl bg-[url(/MOBS.png)] bg-cover"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                  MOBS Research
                </h3>

                <p className="text-gray-100/90 mb-4 text-sm leading-relaxed">
                  Computer science research funded by the DoD&apos;s DEPSCoR
                  intiative. Utilizing ML, social science, and data to predict
                  mob outcomes.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    Python
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    JavaScript
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    React
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    MySQL
                  </span>
                </div>

                <a
                  href="https://sameral-khateeb.github.io/MobsModeling/index.html"
                  target="_blank"
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 rounded text-sm font-medium transition-colors cursor-pointer"
                >
                  <FiExternalLink className="w-4 h-4" />
                  Visit Website
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
