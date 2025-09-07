"use client";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-gradient-to-r from-[#818cf8] via-[#3b82f6] to-[#4f46e5]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Caleb Cannon</h3>
            <p className="text-gray-100/90">
              Crafting digital experiences with passion
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/ccannon062"
              target="_blank"
              className="p-3 rounded-full hover:bg-indigo-600/20 border border-indigo-700/50 transition ease-in-out duration-300 hover:scale-105"
            >
              <FiGithub className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/cannoncc/"
              target="_blank"
              className="p-3 rounded-full hover:bg-indigo-600/20  border border-indigo-700/50 transition ease-in-out duration-300 hover:scale-105"
            >
              <FiLinkedin className="w-5 h-5 text-white" />
            </a>
            <a
              href="mailto:caleb.cristoph.cannon@gmail.com"
              className="p-3 rounded-full hover:bg-indigo-600/20 border border-indigo-700/50 transition ease-in-out duration-300 hover:scale-105"
            >
              <FiMail className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-indigo-700/50 text-center">
          <p className="text-gray-100/90 flex items-center justify-center space-x-2">
            <span>© 2025 Caleb Cannon</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
