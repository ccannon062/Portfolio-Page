"use client";
import "../globals.css";

export default function Skills() {
  return (
    <>
      <div className="w-full pt-10 bg-gradient-to-r from-[#9ca3f0] via-[#6b93f7] to-[#6366f1]">
        <div className="mx-auto px-4">
          <h1 className="text-4xl font-bold text-white tracking-tight py-6 text-center">
            Skills & Expertise
          </h1>
          <div className="w-32 h-1 mx-auto rounded bg-indigo-900"></div>
          <p className="pt-6 text-gray-100/90 text-lg leading-relaxed text-center">
            Specialized in backend development with full-stack capabilities
          </p>
        </div>
        <div className="grid grid-cols-3 mt-10">
          <div></div>
        </div>
      </div>
    </>
  );
}
