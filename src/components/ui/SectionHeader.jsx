function SectionHeader({ eyebrow, title, description, align = "left", tone = "default" }) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const isLight = tone === "light";
  const eyebrowClass = isLight
    ? "border-[#2b5a79] bg-[#0f324b] text-[#7fc5d1]"
    : "border-[var(--c-border)] bg-[var(--c-surface-alt)] text-[var(--c-primary)]";
  const titleClass = isLight ? "text-white" : "text-[var(--c-heading)]";
  const descriptionClass = isLight ? "text-[#c9d9e7]" : "text-[var(--c-body)]";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className={`inline-flex rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] ${eyebrowClass}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`mt-4 text-3xl font-semibold tracking-tight sm:text-[2.1rem] ${titleClass}`}>{title}</h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 sm:text-[1.02rem] ${descriptionClass}`}>{description}</p>
      ) : null}
    </div>
  );
}

export default SectionHeader;
