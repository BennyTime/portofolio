import { ArrowDown } from "lucide-react";
import { profile } from "../data/portfolioData";

export const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-end overflow-hidden grain"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/12623752/pexels-photo-12623752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-[#0A0A0A]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-24 md:pb-32 reveal-stagger">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-label">Portfolio · 2025</span>
          <span className="h-px w-12 bg-neutral-700" />
          <span className="text-label">{profile.location}</span>
        </div>

        <h1
          data-testid="hero-name"
          className="font-serif font-light text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-5xl"
        >
          {profile.name}
          <span className="block text-neutral-400 italic mt-2">
            {profile.title}.
          </span>
        </h1>

        <div className="mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8 max-w-5xl">
          <p
            data-testid="hero-tagline"
            className="font-sans text-neutral-300 text-base md:text-lg leading-relaxed max-w-md"
          >
            {profile.tagline}. Building frontends, backend APIs, and
            interactive experiences with care.
          </p>

          <div className="flex items-center gap-6">
            <button
              data-testid="hero-cta-work"
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-3 bg-white text-black px-6 py-3 text-xs font-mono uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors"
            >
              View Work
              <ArrowDown size={14} strokeWidth={1.5} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
            <button
              data-testid="hero-cta-contact"
              onClick={() => scrollTo("contact")}
              className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-300 hover:text-white border-b border-neutral-700 hover:border-white pb-1 transition-all"
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 md:right-10 z-10 text-label flex items-center gap-3">
        <span>Scroll</span>
        <span className="h-px w-8 bg-neutral-700" />
      </div>
    </section>
  );
};
