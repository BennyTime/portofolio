import { profile } from "../data/portfolioData";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="site-footer"
      className="border-t border-neutral-900 px-6 md:px-10 py-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-serif text-xl text-white">{profile.name}</p>
          <p className="font-mono text-xs text-neutral-500 uppercase tracking-[0.2em] mt-1">
            {profile.title} · {profile.location}
          </p>
        </div>
        <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
          <span>© {year}</span>
          <span className="h-px w-8 bg-neutral-800" />
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};
