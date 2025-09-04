"use client";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "../globals.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center bg-gradient-to-r from-[#818cf8] via-[#3b82f6] to-[#4f46e5] static">
      <div className="h-[100px] w-[100px] rounded-full bg-gray-200 opacity-40 absolute md:top-30 md:left-25 top-30 left-5 animate-linear-bounce"></div>
      <div className="h-[60px] w-[60px] rounded-full bg-gray-200 opacity-40 absolute md:top-155 md:left-45 top-155 left-15 animate-linear-bounce"></div>
      <div className="h-[80px] w-[80px] bg-gray-200 opacity-40 absolute md:right-20 md:bottom-100 right-5 bottom-100 animate-linear-bounce"></div>
      <div data-aos="zoom-in" className="mx-auto text-center max-w-2xl px-6">
        <h1 className="text-5xl font-bold text-white tracking-tight py-6">
          Hello, I'm Caleb
        </h1>
        <p className="text-gray-100/90 text-lg leading-relaxed mb-8">
          A full stack enthusiast with a passion for building elegant,
          performant web applications and creating seamless user experiences.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
          <button className="bg-white text-indigo-900 font-medium px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition ease-in-out duration-300 hover:scale-105">
            View My Work
          </button>
          <button className="bg-indigo-900 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition ease-in-out duration-300 hover:scale-105">
            Download CV
          </button>
        </div>
        <div className="flex justify-center gap-6">
          <FiGithub className="text-white bg-indigo-900 p-3 rounded-2xl w-12 h-12 hover:bg-gray-800 transition ease-in-out duration-300 hover:scale-105" />
          <FiLinkedin className="text-white bg-indigo-900 p-3 rounded-2xl w-12 h-12 hover:bg-gray-800 transition ease-in-out duration-300 hover:scale-105" />
          <MdOutlineEmail className="text-white bg-indigo-900 p-3 rounded-2xl w-12 h-12 hover:bg-gray-800 transition ease-in-out duration-300 hover:scale-105" />
        </div>
      </div>
    </div>
  );
}
