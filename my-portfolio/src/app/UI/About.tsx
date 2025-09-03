"use client";
import "../globals.css";

export default function About() {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#818cf8] via-[#3b82f6] to-[#4f46e5] pb-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-white tracking-tight py-6 text-center">
            About Me
          </h1>
          <div className="w-30 h-1 mx-auto rounded bg-black"></div>
          <p className="pt-6 text-gray-100/90 text-lg leading-relaxed text-center">
            Full stack engineering enthusiast with industry experience and a
            passion for building unique and challenging systems.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 mt-20">
          <div className="w-75 h-full opacity-20 bg-black rounded-xl mx-auto"></div>
          <div className="w-150 mx-auto">
            <h2 className="text-indigo-600 text-2xl font-bold">
              Student & Engineering Enthusiast
            </h2>
            <p className="text-gray-100/90 text-lg leading-relaxed">
              I specialize in building full stack applications using various
              modern technologies. In my time as a Software Developer, I
              utilized Java Spring Boot to maintain, build, and create new
              RESTful API features.
              <br />
              <br />
              In my free time, I enjoy building full-stack applications with
              React and modern web technologies, giving me a complete
              perspective on the full development lifecycle.
            </p>
            <div className="grid grid-cols-2 pt-6 gap-5">
              <div className="text-center bg-black text-white py-6 rounded-xl">
                50+
                <br />
                Projects Completed
              </div>
              <div className="text-center bg-black text-white py-6 rounded-xl">
                4
                <br />
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
