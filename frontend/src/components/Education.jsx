import { SectionHeader } from "./SectionHeader";
import { education } from "../data/portfolioData";

export const Education = () => {
  return (
    <section
      id="education"
      data-testid="education-section"
      className="relative py-24 md:py-32 px-6 md:px-10 border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="05"
          label="Education"
          title="Formal training."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 lg:col-start-1">
            {education.map((item, i) => (
              <article
                key={i}
                data-testid={`education-item-${i}`}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-baseline pb-10 border-b border-neutral-900 last:border-b-0"
              >
                <div className="md:col-span-3">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                    {item.period}
                  </span>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-serif text-2xl md:text-3xl text-white font-light mb-1">
                    {item.degree}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 mb-4">
                    {item.org}
                  </p>
                  <p className="font-sans text-neutral-400 text-base leading-relaxed max-w-2xl">
                    {item.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
