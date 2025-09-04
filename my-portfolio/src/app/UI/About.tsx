"use client";
import "../globals.css";

export default function About() {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#818cf8] via-[#3b82f6] to-[#4f46e5] pb-30 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-white tracking-tight py-6 text-center">
            About Me
          </h1>
          <div className="w-32 h-1 mx-auto rounded bg-indigo-900"></div>
          <p className="pt-6 text-gray-100/90 text-lg leading-relaxed text-center">
            Full stack engineering enthusiast with industry experience and a
            passion for building unique and challenging systems.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-20 px-10 gap-4 max-w-6xl mx-auto">
          <div className="relative justify-self-center mb-4">
            <div className="w-80 h-96 bg-[url(/Intern-Headshots-40.jpg)] bg-cover rounded-xl relative z-1"></div>
            <div className="w-10 h-10 bg-white opacity-20 rounded-full absolute -top-4 -right-4 z-3"></div>
            <div className="w-9 h-9 bg-white opacity-20 rounded-full absolute -left-4 -bottom-4 -z-0"></div>
          </div>
          <div className="max-w-lg justify-self-center">
            <h2 className="text-white/90 text-2xl font-bold md:text-left text-center">
              Student & Engineering Enthusiast
            </h2>
            <p className="text-gray-100/90 text-lg leading-relaxed mt-4">
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
              <div className="text-center bg-indigo-900 text-white py-6 rounded-xl">
                50+
                <br />
                Projects Completed
              </div>
              <div className="text-center bg-indigo-900 text-white py-6 rounded-xl">
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
