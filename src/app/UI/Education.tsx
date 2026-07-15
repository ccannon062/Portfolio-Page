import { FiAward } from "react-icons/fi";

const education = [
  {
    degree: "Juris Doctor (J.D.) Candidate",
    meta: "University of Nebraska College of Law · 1L",
    description:
      "Focused on intellectual property law — patents, trademarks, and technology transactions — with an emphasis on helping innovators protect their work.",
  },
  {
    degree: "B.S. in Computer Science",
    meta: "Creighton University · Omaha, NE",
    description: "Graduated Summa Cum Laude.",
  },
];

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
        <div className="space-y-10">
          {education.map((item) => (
            <div key={item.degree} className="border-l-2 border-[#a3812f]/40 pl-6">
              <div className="flex items-center gap-3 mb-1">
                <FiAward className="w-5 h-5 text-[#a3812f] shrink-0" />
                <h3 className="font-serif text-xl font-semibold text-white">
                  {item.degree}
                </h3>
              </div>
              <p className="text-[#e8e6df]/60 text-sm mb-3">{item.meta}</p>
              <p className="text-[#e8e6df]/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
