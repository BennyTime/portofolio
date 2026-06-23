import { useEffect, useState } from "react";
import { navItems, profile } from "../data/portfolioData";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      data-testid="site-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <button
          data-testid="nav-logo"
          onClick={() => scrollTo("hero")}
          className="font-mono text-xs uppercase tracking-[0.25em] text-white hover:text-neutral-300 transition-colors"
        >
          {profile.name.split(" ").map((n) => n[0]).join("")} — Portfolio
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <button
              key={item.id}
              data-testid={`nav-link-${item.id}`}
              onClick={() => scrollTo(item.id)}
              className="group flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors"
            >
              <span className="text-neutral-600">0{i + 1}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10">
          <nav className="px-6 py-6 flex flex-col gap-5">
            {navItems.map((item, i) => (
              <button
                key={item.id}
                data-testid={`nav-mobile-link-${item.id}`}
                onClick={() => scrollTo(item.id)}
                className="flex items-center gap-3 text-sm font-mono uppercase tracking-[0.2em] text-neutral-300 hover:text-white text-left"
              >
                <span className="text-neutral-600">0{i + 1}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
