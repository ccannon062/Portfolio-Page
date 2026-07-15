export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-[#12161f] py-20 md:py-24 px-6 border-y border-white/10"
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-[#a3812f] text-sm font-medium tracking-[0.2em] uppercase mb-3">
          Summary
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
          Law Student &amp; Aspiring IP Attorney
        </h2>
        <p className="text-[#e8e6df]/80 text-lg leading-relaxed">
          Before starting law school, I spent time as a software developer
          building backend systems with Java Spring Boot and RESTful APIs,
          and contributed to DoD-funded research applying machine learning to
          social science questions. That technical background shapes how I
          think about intellectual property — I&apos;ve built the kind of
          products that IP law exists to protect. Now at the University of
          Nebraska College of Law, I&apos;m focused on patent, trademark, and
          technology law, drawn to the intersection of innovation and legal
          protection.
        </p>
        <div className="flex flex-wrap gap-3 mt-8">
          <span className="inline-flex items-center border border-[#a3812f]/40 text-[#a3812f] text-sm px-4 py-1.5 rounded-full">
            1L &mdash; UNL College of Law
          </span>
          <span className="inline-flex items-center border border-[#a3812f]/40 text-[#a3812f] text-sm px-4 py-1.5 rounded-full">
            4+ Yrs Software Engineering
          </span>
        </div>
      </div>
    </section>
  );
}
