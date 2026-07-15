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
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center bg-[#232a3a]">
      <div data-aos="fade-up" className="mx-auto text-center max-w-2xl px-6">
        <h1 className="font-serif text-5xl font-bold text-white tracking-tight py-6">
          Hello, I&apos;m Caleb
        </h1>
        <p className="text-gray-100/90 text-lg leading-relaxed mb-8">
          1L at the University of Nebraska College of Law, focused on
          intellectual property law — helping innovators protect their hard
          work. Bringing a background in software engineering to the practice
          of law.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
          <a
            href="#contact"
            className="bg-white text-[#232a3a] font-medium px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition ease-in-out duration-300 hover:scale-105 cursor-pointer"
          >
            Get In Touch
          </a>
          <a
            href="/CalebCResume.pdf"
            download="CalebCResume.pdf"
            className="bg-[#D3AC2B] text-[#232a3a] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#c09a23] transition ease-in-out duration-300 hover:scale-105"
          >
            Download Resume
          </a>
        </div>
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/cannoncc/"
            target="_blank"
            className="cursor-pointer"
          >
            <FiLinkedin className="text-[#232a3a] bg-[#D3AC2B] p-3 rounded-xl w-12 h-12 hover:bg-[#c09a23] transition ease-in-out duration-300 hover:scale-105" />
          </a>
          <a
            href="mailto:caleb.cristoph.cannon@gmail.com"
            className="cursor-pointer"
          >
            <MdOutlineEmail className="text-[#232a3a] bg-[#D3AC2B] p-3 rounded-xl w-12 h-12 hover:bg-[#c09a23] transition ease-in-out duration-300 hover:scale-105" />
          </a>
          <a
            href="https://github.com/ccannon062"
            target="_blank"
            className="cursor-pointer"
          >
            <FiGithub className="text-[#232a3a] bg-[#D3AC2B] p-3 rounded-xl w-12 h-12 hover:bg-[#c09a23] transition ease-in-out duration-300 hover:scale-105" />
          </a>
        </div>
      </div>
    </div>
  );
}
