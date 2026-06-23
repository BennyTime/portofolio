import { SectionHeader } from "./SectionHeader";
import { profile } from "../data/portfolioData";

export const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 md:py-32 px-6 md:px-10 border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="01"
          label="About"
          title="Engineering with intent."
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <p className="font-serif text-2xl md:text-3xl text-white font-light leading-[1.4] mb-8">
              {profile.bio}
            </p>
            <p className="font-sans text-neutral-400 text-base leading-relaxed max-w-xl">
              I gravitate toward problems where careful design, observability,
              and clean integration boundaries matter. My academic and project
              work has covered everything from event-driven backends with
              FastAPI and Django REST to cryptographic systems and real-time
              3D experiences in the browser.
            </p>
          </div>

          <div className="lg:col-span-5 lg:pl-12 lg:border-l lg:border-neutral-900">
            <dl className="space-y-8">
              <div data-testid="about-meta-name">
                <dt className="text-label mb-2">Name</dt>
                <dd className="font-serif text-xl text-white">{profile.name}</dd>
              </div>
              <div data-testid="about-meta-role">
                <dt className="text-label mb-2">Discipline</dt>
                <dd className="font-serif text-xl text-white">{profile.title}</dd>
              </div>
              <div data-testid="about-meta-location">
                <dt className="text-label mb-2">Based In</dt>
                <dd className="font-serif text-xl text-white">{profile.location}</dd>
              </div>
              <div data-testid="about-meta-availability">
                <dt className="text-label mb-2">Status</dt>
                <dd className="font-serif text-xl text-white">
                  Open to opportunities
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
