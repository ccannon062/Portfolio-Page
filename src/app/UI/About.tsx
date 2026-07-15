"use client";
import Image from "next/image";
import "../globals.css";

export default function About() {
  return (
    <>
      <div className="w-full bg-[#232a3a] py-20 md:py-28 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight py-6 text-center">
            About Me
          </h1>
          <div className="w-32 h-1 mx-auto rounded bg-[#D3AC2B]"></div>
          <p className="pt-6 text-gray-100/90 text-lg leading-relaxed text-center">
            1L at the University of Nebraska College of Law with a passion
            for intellectual property law — helping inventors, founders, and
            creators protect what they&apos;ve built.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-16 px-4 sm:px-10 gap-10 max-w-6xl mx-auto items-center">
          <div className="justify-self-center">
            <div className="w-80 h-96 relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/Intern-Headshots-40.jpg"
                alt="Caleb Cannon headshot"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 320px"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </div>
          <div className="max-w-lg justify-self-center">
            <h2 className="font-serif text-white text-2xl font-medium md:text-left text-center">
              Law Student &amp; Aspiring IP Attorney
            </h2>
            <p className="text-gray-100/90 text-lg leading-relaxed mt-4">
              Before starting law school, I spent time as a software
              developer building backend systems with Java Spring Boot and
              RESTful APIs, and contributed to DoD-funded research applying
              machine learning to social science questions. That technical
              background shapes how I think about intellectual property —
              I&apos;ve built the kind of products that IP law exists to
              protect.
              <br />
              <br />
              Now at the University of Nebraska College of Law, I&apos;m
              focused on patent, trademark, and technology law, drawn to the
              intersection of innovation and legal protection.
            </p>
            <div className="grid grid-cols-2 pt-6 gap-5">
              <div className="text-center bg-[#D3AC2B] text-[#232a3a] py-6 rounded-xl font-semibold">
                1L
                <br />
                UNL College of Law
              </div>
              <div className="text-center bg-[#D3AC2B] text-[#232a3a] py-6 rounded-xl font-semibold">
                4+ Yrs
                <br />
                Software Engineering
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
