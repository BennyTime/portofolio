export const SectionHeader = ({ number, label, title, subtitle }) => {
  return (
    <div className="mb-16 md:mb-20">
      <div className="flex items-center gap-4 mb-6">
        <span className="font-mono text-xs text-neutral-600 tracking-[0.25em]">
          {number}
        </span>
        <span className="h-px w-12 bg-neutral-800" />
        <span className="text-label">{label}</span>
      </div>
      <h2 className="font-serif font-light text-white text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] max-w-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 font-sans text-neutral-400 text-base md:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
