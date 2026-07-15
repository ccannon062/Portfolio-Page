import { FiExternalLink } from "react-icons/fi";

const experience = [
  {
    title: "Software Developer",
    meta: "Java Spring Boot · RESTful APIs",
    description:
      "Built and maintained backend systems, primarily using Java Spring Boot to design and extend RESTful API features for production applications.",
    tags: ["Java", "Spring Boot", "REST APIs", "PostgreSQL"],
  },
  {
    title: "MOBS Research",
    meta: "DoD DEPSCoR Initiative",
    description:
      "Computer science research funded by the DoD's DEPSCoR initiative, applying machine learning and social science methods to model and predict mob outcomes.",
    tags: ["Python", "Machine Learning", "Data Analysis"],
    link: "https://sameral-khateeb.github.io/MobsModeling/index.html",
  },
];

export default function Featured() {
  return (
    <section
      id="experience"
      className="w-full bg-[#12161f] py-20 md:py-24 px-6 border-y border-white/10"
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-[#a3812f] text-sm font-medium tracking-[0.2em] uppercase mb-3">
          Experience
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-10">
          Prior Experience
        </h2>
        <div className="space-y-10">
          {experience.map((item) => (
            <div
              key={item.title}
              className="border-l-2 border-[#a3812f]/40 pl-6"
            >
              <h3 className="font-serif text-xl font-semibold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-[#e8e6df]/50 text-sm mb-3">{item.meta}</p>
              <p className="text-[#e8e6df]/80 leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#e8e6df]/70 border border-white/10 px-2.5 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    className="ml-2 inline-flex items-center gap-1 text-sm text-[#a3812f] hover:text-[#c9a227] transition-colors duration-200"
                  >
                    <FiExternalLink className="w-3.5 h-3.5" />
                    Visit Website
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
