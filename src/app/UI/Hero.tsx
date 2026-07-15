"use client";
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import Image from "next/image";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <div id="home" className="w-full bg-[#0c0f16] pt-16 pb-24 md:pt-24 md:pb-32 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">
        <div data-aos="fade-up">
          <p className="text-[#a3812f] text-sm font-medium tracking-[0.2em] uppercase mb-4">
            1L &middot; Intellectual Property Law
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Caleb Cannon
          </h1>
          <p className="text-[#e8e6df]/80 text-lg leading-relaxed max-w-xl mb-8">
            J.D. Candidate at the University of Nebraska College of Law,
            focused on helping innovators protect their hard work. Bringing a
            background in software engineering to the practice of law.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#e8e6df]/70 mb-10">
            <span className="flex items-center gap-2">
              <FiMapPin className="w-4 h-4 text-[#a3812f]" />
              Lincoln, NE
            </span>
            <a
              href="mailto:caleb.cristoph.cannon@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors duration-200"
            >
              <FiMail className="w-4 h-4 text-[#a3812f]" />
              caleb.cristoph.cannon@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/cannoncc/"
              target="_blank"
              className="flex items-center gap-2 hover:text-white transition-colors duration-200"
            >
              <FiLinkedin className="w-4 h-4 text-[#a3812f]" />
              LinkedIn
            </a>
            <a
              href="https://github.com/ccannon062"
              target="_blank"
              className="flex items-center gap-2 hover:text-white transition-colors duration-200"
            >
              <FiGithub className="w-4 h-4 text-[#a3812f]" />
              GitHub
            </a>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="/CalebCResume.pdf"
              download="CalebCResume.pdf"
              className="bg-[#a3812f] text-[#0c0f16] font-semibold px-6 py-3 rounded hover:bg-[#c9a227] transition-colors duration-200"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="border border-[#e8e6df]/25 text-[#e8e6df] px-6 py-3 rounded hover:border-[#a3812f] hover:text-white transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="justify-self-center md:justify-self-end"
        >
          <div className="w-48 h-56 md:w-56 md:h-64 relative rounded-md overflow-hidden ring-1 ring-[#a3812f]/30 shadow-2xl">
            <Image
              src="/Intern-Headshots-40.jpg"
              alt="Caleb Cannon headshot"
              fill
              className="object-cover"
              sizes="224px"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        </div>
      </div>
    </div>
  );
}
