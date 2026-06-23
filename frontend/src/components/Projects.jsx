import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { projects } from "../data/portfolioData";

const ProjectCard = ({ project, index }) => {
  const isWide = project.span === "wide";

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={`project-card-${project.id}`}
      className={`group relative block border border-neutral-900 hover:border-neutral-700 transition-colors duration-500 bg-[#0A0A0A] ${
        isWide ? "lg:col-span-8" : "lg:col-span-4"
      }`}
    >
      <div className="hover-grayscale overflow-hidden aspect-[16/10] lg:aspect-[16/11] bg-neutral-950">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-neutral-600">
              0{index + 1}
            </span>
            <span className="text-label">{project.type}</span>
          </div>
          <ArrowUpRight
            size={20}
            strokeWidth={1.25}
            className="text-neutral-500 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
          />
        </div>

        <h3 className="font-serif text-white text-2xl md:text-3xl font-light mb-3 group-hover:text-neutral-100">
          {project.name}
        </h3>

        <p className="font-sans text-neutral-400 text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-neutral-400 border border-neutral-800 px-2.5 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        <span className="font-mono text-xs text-neutral-600">
          {project.period}
        </span>
      </div>
    </a>
  );
};

export const Projects = () => {
  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="relative py-24 md:py-32 px-6 md:px-10 border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="04"
          label="Selected Projects"
          title="Things I have built."
          subtitle="A small collection of the work I am most proud of — built across university, collaborations, and independent exploration."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-neutral-900">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
