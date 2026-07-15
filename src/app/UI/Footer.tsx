import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-[#0c0f16] border-t border-white/10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-[#e8e6df]/60">
        <p>© 2026 Caleb Cannon — University of Nebraska College of Law</p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/ccannon062"
            target="_blank"
            className="hover:text-[#a3812f] transition-colors duration-200"
          >
            <FiGithub className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/cannoncc/"
            target="_blank"
            className="hover:text-[#a3812f] transition-colors duration-200"
          >
            <FiLinkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:caleb.cristoph.cannon@gmail.com"
            className="hover:text-[#a3812f] transition-colors duration-200"
          >
            <FiMail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
