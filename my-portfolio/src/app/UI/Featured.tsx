"use client";
import { motion } from "motion/react";
import { FiGithub } from "react-icons/fi";
import "../globals.css";

export default function Featured() {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#818cf8] via-[#3b82f6] to-[#4f46e5] pb-30 px-4">
        <div className="max-w-7xl mx-auto py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-32 h-1 mx-auto rounded bg-white/80 mb-6"></div>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for
              development
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group relative w-full h-auto bg-indigo-900/50 rounded-lg border border-indigo-700 text-white overflow-hidden hover:bg-indigo-800/60 transition-all duration-300"
            >
              <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center text-white font-bold text-xl">
                  E-Commerce Platform
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                  E-Commerce Platform
                </h3>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  A modern e-commerce solution built with React and Node.js,
                  featuring real-time inventory management, secure payments, and
                  responsive design.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    React
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    Node.js
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    MongoDB
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    Stripe
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
                <div className="w-full h-full bg-gradient-to-br from-green-500 to-teal-600 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center text-white font-bold text-xl">
                  Task Manager
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                  Task Management App
                </h3>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  A collaborative task management application with real-time
                  updates, team collaboration features, and intuitive
                  drag-and-drop interface.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    Vue.js
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    Firebase
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    Tailwind
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    WebSocket
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
                <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-600 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center text-white font-bold text-xl">
                  Portfolio Site
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                  Portfolio Website
                </h3>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  A clean, modern portfolio website showcasing responsive design
                  principles and smooth animations built with cutting-edge
                  technologies.
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
                <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-600 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center text-white font-bold text-xl">
                  Weather App
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                  Weather Dashboard
                </h3>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  A comprehensive weather application with location-based
                  forecasts, interactive maps, and detailed weather analytics
                  with beautiful visualizations.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    React
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    Chart.js
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    OpenWeather API
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    Leaflet
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
                <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center text-white font-bold text-xl">
                  Social Platform
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                  Social Media Platform
                </h3>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  A full-stack social media application with real-time
                  messaging, content sharing, user authentication, and advanced
                  privacy controls.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    Next.js
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    PostgreSQL
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    Socket.io
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    Redis
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
                <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-green-600 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center text-white font-bold text-xl">
                  Finance Tracker
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                  Personal Finance Tracker
                </h3>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  A comprehensive finance management application with expense
                  tracking, budget planning, investment monitoring, and detailed
                  financial analytics.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    React Native
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    Express
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    MongoDB
                  </span>
                  <span className="px-2 py-1 bg-indigo-800 rounded text-xs">
                    Plaid API
                  </span>
                </div>

                <button className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 rounded text-sm font-medium transition-colors">
                  <FiGithub className="w-4 h-4" />
                  View Code
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
