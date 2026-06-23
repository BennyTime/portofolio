import { SectionHeader } from "./SectionHeader";
import { experience } from "../data/portfolioData";

export const Experience = () => {
  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="relative py-24 md:py-32 px-6 md:px-10 border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="03"
          label="Experience"
          title="Selected work & study."
        />

        <div className="relative pl-8 md:pl-12 border-l border-neutral-900">
          {experience.map((item, i) => (
            <article
              key={i}
              data-testid={`experience-item-${i}`}
              className="relative pb-16 last:pb-0 group"
            >
              <span className="absolute -left-[33px] md:-left-[49px] top-2 w-2 h-2 bg-neutral-700 group-hover:bg-white transition-colors duration-300" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-baseline">
                <div className="md:col-span-3">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                    {item.period}
                  </span>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-serif text-2xl md:text-3xl text-white font-light mb-1">
                    {item.role}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 mb-4">
                    {item.org}
                  </p>
                  <p className="font-sans text-neutral-400 text-base leading-relaxed max-w-2xl">
                    {item.summary}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
