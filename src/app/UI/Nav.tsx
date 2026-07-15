const links = [
  { href: "#about", label: "Summary" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#focus", label: "Focus" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0c0f16]/90 backdrop-blur border-b border-white/10">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-serif text-lg text-white tracking-wide"
        >
          Caleb Cannon
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-[#e8e6df]/70">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-[#c9a227] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/CalebCResume.pdf"
          download="CalebCResume.pdf"
          className="hidden md:inline-block text-sm border border-[#a3812f] text-[#a3812f] px-4 py-2 rounded hover:bg-[#a3812f] hover:text-[#0c0f16] transition-colors duration-200"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
