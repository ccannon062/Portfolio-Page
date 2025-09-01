import Image from "next/image";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import "./globals.css";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex items-center">
      <div className="mx-auto text-center w-[609px]">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4A73F3] to-[#6E4AEE] py-4">
          Hello, I'm Caleb
        </h1>
        <p className="text-[#B9BDC5] text-xl font-medium mb-5">
          A full stack enthusiast with a passion for building elegant,
          performant web applications and creating seamless user experiences.
        </p>
        <div className="w-full justify-center flex gap-[30px]">
          <button className="bg-amber-950">View My Work</button>
          <button className="bg-amber-950">Download CV</button>
        </div>
        <div>
          <FiGithub />
          <FiLinkedin />
          <MdOutlineEmail />
        </div>
      </div>
    </div>
  );
}
