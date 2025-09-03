import Image from "next/image";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import "./globals.css";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex items-center bg-gradient-to-r from-[#818cf8] via-[#3b82f6] to-[#4f46e5]">
      <div className="mx-auto text-center max-w-2xl px-6">
        <h1 className="text-5xl font-bold text-white tracking-tight py-6">
          Hello, I'm Caleb
        </h1>
        <p className="text-gray-100/90 text-lg leading-relaxed mb-8">
          A full stack enthusiast with a passion for building elegant,
          performant web applications and creating seamless user experiences.
        </p>
        <div className="flex justify-center gap-6 mb-10">
          <button className="bg-white text-indigo-600 font-medium px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition ease-in-out duration-300 hover:scale-105">
            View My Work
          </button>
          <button className="bg-indigo-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition ease-in-out duration-300 hover:scale-105">
            Download CV
          </button>
        </div>
        <div className="flex justify-center gap-6">
          <FiGithub className="text-white bg-black p-3 rounded-2xl w-12 h-12 hover:bg-gray-800 transition" />
          <FiLinkedin className="text-white bg-black p-3 rounded-2xl w-12 h-12 hover:bg-gray-800 transition" />
          <MdOutlineEmail className="text-white bg-black p-3 rounded-2xl w-12 h-12 hover:bg-gray-800 transition" />
        </div>
      </div>
    </div>
  );
}
