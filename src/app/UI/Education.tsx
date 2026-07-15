import { FiAward } from "react-icons/fi";

export default function Education() {
  return (
    <section id="education" className="w-full bg-[#0c0f16] py-20 md:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-[#a3812f] text-sm font-medium tracking-[0.2em] uppercase mb-3">
          Education
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-10">
          Academic Background
        </h2>
        <div className="border-l-2 border-[#a3812f]/40 pl-6">
          <div className="flex items-center gap-3 mb-1">
            <FiAward className="w-5 h-5 text-[#a3812f] shrink-0" />
            <h3 className="font-serif text-xl font-semibold text-white">
              Juris Doctor (J.D.) Candidate
            </h3>
          </div>
          <p className="text-[#e8e6df]/60 text-sm mb-3">
            University of Nebraska College of Law &middot; 1L
          </p>
          <p className="text-[#e8e6df]/80 leading-relaxed">
            Focused on intellectual property law &mdash; patents, trademarks,
            and technology transactions &mdash; with an emphasis on helping
            innovators protect their work.
          </p>
        </div>
      </div>
    </section>
  );
}
