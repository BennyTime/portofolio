import { SectionHeader } from "./SectionHeader";
import { skills } from "../data/portfolioData";

export const Skills = () => {
  const categories = Object.entries(skills);

  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="relative py-24 md:py-32 px-6 md:px-10 border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="02"
          label="Toolkit"
          title="A measured set of tools."
          subtitle="The technologies I reach for, organised by where they sit in the stack."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-900">
          {categories.map(([category, items], i) => (
            <div
              key={category}
              data-testid={`skill-category-${category.toLowerCase()}`}
              className="bg-[#0A0A0A] p-8 md:p-10 hover:bg-[#121212] transition-colors duration-500"
            >
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-mono text-xs text-neutral-600">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-white text-xl">
                  {category}
                </h3>
              </div>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="font-mono text-sm text-neutral-300 flex items-center gap-3 group"
                  >
                    <span className="h-px w-3 bg-neutral-700 group-hover:bg-white group-hover:w-6 transition-all duration-300" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
