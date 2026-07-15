const groups = [
  {
    title: "Patent Law",
    items: [
      "Utility & Design Patents",
      "Prior Art & Novelty",
      "Patent Prosecution",
      "Claim Drafting",
      "USPTO Practice",
    ],
  },
  {
    title: "Trademark & Copyright",
    items: [
      "Trademark Registration",
      "Brand Protection",
      "Copyright Law",
      "Fair Use",
      "Licensing",
    ],
  },
  {
    title: "Technology & IP Transactions",
    items: [
      "Tech Licensing Agreements",
      "Software IP",
      "Startup Counseling",
      "Trade Secrets",
      "Contract Drafting",
    ],
  },
  {
    title: "Legal Research & Writing",
    items: [
      "Case Analysis",
      "Legal Writing",
      "Client Memoranda",
      "Statutory Interpretation",
      "Oral Advocacy",
    ],
  },
  {
    title: "Technical Foundation",
    items: [
      "Java & Spring Boot",
      "Full-Stack Development",
      "System Design",
      "API Architecture",
      "Software Development Lifecycle",
    ],
  },
  {
    title: "Strengths I Bring",
    items: [
      "Technical Fluency",
      "Analytical Problem-Solving",
      "Attention to Detail",
      "Cross-Disciplinary Thinking",
      "Client-Centered Mindset",
    ],
  },
];

export default function Skills() {
  return (
    <section id="focus" className="w-full bg-[#0c0f16] py-20 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#a3812f] text-sm font-medium tracking-[0.2em] uppercase mb-3">
          Focus &amp; Interests
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-12">
          Where My Interests Lie
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-10">
          {groups.map((group) => (
            <div key={group.title} className="border-t border-[#a3812f]/30 pt-4">
              <h3 className="text-white font-medium mb-3">{group.title}</h3>
              <ul className="space-y-1.5 text-[#e8e6df]/70 text-sm">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
