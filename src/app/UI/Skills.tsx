"use client";
import { motion } from "motion/react";
import { FiFileText, FiShield, FiGlobe, FiBookOpen } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { TbBracketsAngle } from "react-icons/tb";
import "../globals.css";

export default function Skills() {
  return (
    <>
      <div className="w-full py-20 md:py-28 bg-[#1e2432]">
        <div className="mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight py-6 text-center">
            Focus &amp; Interests
          </h1>
          <div className="w-32 h-1 mx-auto rounded bg-[#D3AC2B]"></div>
          <p className="pt-6 text-gray-100/90 text-lg leading-relaxed text-center max-w-2xl mx-auto">
            Building a foundation in intellectual property law, informed by a
            background in technology
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-6 max-w-7xl mx-auto px-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-full max-w-80 h-auto bg-[#3B475C]/40 rounded-lg border border-[#D3AC2B]/30 justify-self-center text-white p-6 hover:shadow-[0px_0px_6px_3px_rgba(211,_172,_43,_0.3)] transition-shadow duration-300"
          >
            <div className="flex gap-4 items-center mb-4">
              <div className="bg-[#D3AC2B]/30 p-3 rounded-lg">
                <FiFileText className="text-white w-6 h-6" />
              </div>
              <h2 className="text-xl font-medium">Patent Law</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-100/90">
              <li className="hover:text-white">Utility &amp; Design Patents</li>
              <li className="hover:text-white">Prior Art &amp; Novelty</li>
              <li className="hover:text-white">Patent Prosecution</li>
              <li className="hover:text-white">Claim Drafting</li>
              <li className="hover:text-white">USPTO Practice</li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-full max-w-80 h-auto bg-[#3B475C]/40 rounded-lg border border-[#D3AC2B]/30 justify-self-center text-white p-6 hover:shadow-[0px_0px_6px_3px_rgba(211,_172,_43,_0.3)] transition-shadow duration-300"
          >
            <div className="flex gap-4 items-center mb-4">
              <div className="bg-[#D3AC2B]/30 p-3 rounded-lg">
                <FiShield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-medium">Trademark &amp; Copyright</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-100/90">
              <li className="hover:text-white">Trademark Registration</li>
              <li className="hover:text-white">Brand Protection</li>
              <li className="hover:text-white">Copyright Law</li>
              <li className="hover:text-white">Fair Use</li>
              <li className="hover:text-white">Licensing</li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-full max-w-80 h-auto bg-[#3B475C]/40 rounded-lg border border-[#D3AC2B]/30 justify-self-center text-white p-6 hover:shadow-[0px_0px_6px_3px_rgba(211,_172,_43,_0.3)] transition-shadow duration-300"
          >
            <div className="flex gap-4 items-center mb-4">
              <div className="bg-[#D3AC2B]/30 p-3 rounded-lg">
                <FiGlobe className="text-white w-6 h-6" />
              </div>
              <h2 className="text-xl font-medium">Technology &amp; IP Transactions</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-100/90">
              <li className="hover:text-white">Tech Licensing Agreements</li>
              <li className="hover:text-white">Software IP</li>
              <li className="hover:text-white">Startup Counseling</li>
              <li className="hover:text-white">Trade Secrets</li>
              <li className="hover:text-white">Contract Drafting</li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-full max-w-80 h-auto bg-[#3B475C]/40 rounded-lg border border-[#D3AC2B]/30 justify-self-center text-white p-6 hover:shadow-[0px_0px_6px_3px_rgba(211,_172,_43,_0.3)] transition-shadow duration-300"
          >
            <div className="flex gap-4 items-center mb-4">
              <div className="bg-[#D3AC2B]/30 p-3 rounded-lg">
                <FiBookOpen className="text-white w-6 h-6" />
              </div>
              <h2 className="text-xl font-medium">Legal Research &amp; Writing</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-100/90">
              <li className="hover:text-white">Case Analysis</li>
              <li className="hover:text-white">Legal Writing</li>
              <li className="hover:text-white">Client Memoranda</li>
              <li className="hover:text-white">Statutory Interpretation</li>
              <li className="hover:text-white">Oral Advocacy</li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-full max-w-80 h-auto bg-[#3B475C]/40 rounded-lg border border-[#D3AC2B]/30 justify-self-center text-white p-6 hover:shadow-[0px_0px_6px_3px_rgba(211,_172,_43,_0.3)] transition-shadow duration-300"
          >
            <div className="flex gap-4 items-center mb-4">
              <div className="bg-[#D3AC2B]/30 p-3 rounded-lg">
                <TbBracketsAngle className="text-white w-6 h-6" />
              </div>
              <h2 className="text-xl font-medium">Technical Foundation</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-100/90">
              <li className="hover:text-white">Java &amp; Spring Boot</li>
              <li className="hover:text-white">Full-Stack Development</li>
              <li className="hover:text-white">System Design</li>
              <li className="hover:text-white">API Architecture</li>
              <li className="hover:text-white">Software Development Lifecycle</li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-full max-w-80 h-auto bg-[#3B475C]/40 rounded-lg border border-[#D3AC2B]/30 justify-self-center text-white p-6 hover:shadow-[0px_0px_6px_3px_rgba(211,_172,_43,_0.3)] transition-shadow duration-300"
          >
            <div className="flex gap-4 items-center mb-4">
              <div className="bg-[#D3AC2B]/30 p-3 rounded-lg">
                <HiOutlineLightBulb className="text-white w-6 h-6" />
              </div>
              <h2 className="text-xl font-medium">Strengths I Bring</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-100/90">
              <li className="hover:text-white">Technical Fluency</li>
              <li className="hover:text-white">Analytical Problem-Solving</li>
              <li className="hover:text-white">Attention to Detail</li>
              <li className="hover:text-white">Cross-Disciplinary Thinking</li>
              <li className="hover:text-white">Client-Centered Mindset</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
}
