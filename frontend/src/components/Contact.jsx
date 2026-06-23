import { ArrowUpRight, Github, Mail, MapPin } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { profile } from "../data/portfolioData";

export const Contact = () => {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 md:py-32 px-6 md:px-10 border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="06"
          label="Contact"
          title="Let's build something."
          subtitle="Open to discussing roles, collaborations, and engineering work. The fastest way to reach me is by email."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Email — primary CTA */}
          <a
            href={`mailto:${profile.email}`}
            data-testid="contact-email-card"
            className="group lg:col-span-8 block border border-neutral-900 hover:border-neutral-700 bg-[#0A0A0A] hover:bg-[#121212] p-10 md:p-14 transition-all duration-500"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <Mail size={16} strokeWidth={1.5} className="text-neutral-500" />
                  <span className="text-label">Email</span>
                </div>
                <p
                  data-testid="contact-email-text"
                  className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-light tracking-tight leading-[1.05] break-all"
                >
                  {profile.email}
                </p>
                <p className="mt-6 font-sans text-neutral-400 text-base max-w-md leading-relaxed">
                  Click to compose a message. I read everything and reply when I can.
                </p>
              </div>
              <ArrowUpRight
                size={28}
                strokeWidth={1.25}
                className="text-neutral-500 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300 shrink-0"
              />
            </div>
          </a>

          {/* Side column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-github-card"
              className="group block border border-neutral-900 hover:border-neutral-700 bg-[#0A0A0A] hover:bg-[#121212] p-8 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-4">
                <Github size={18} strokeWidth={1.5} className="text-neutral-400 group-hover:text-white transition-colors" />
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.25}
                  className="text-neutral-500 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                />
              </div>
              <div className="text-label mb-2">GitHub</div>
              <p className="font-serif text-2xl text-white">@bennytime</p>
              <p className="mt-3 font-sans text-sm text-neutral-500">
                Code, side projects, and experiments.
              </p>
            </a>

            <div
              data-testid="contact-location"
              className="border border-neutral-900 bg-[#0A0A0A] p-8"
            >
              <div className="flex items-center justify-between mb-4">
                <MapPin size={18} strokeWidth={1.5} className="text-neutral-400" />
              </div>
              <div className="text-label mb-2">Based in</div>
              <p className="font-serif text-2xl text-white">{profile.location}</p>
              <p className="mt-3 font-sans text-sm text-neutral-500">
                Open to remote, hybrid, and on-site work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
