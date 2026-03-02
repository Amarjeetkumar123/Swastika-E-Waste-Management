function ImagePlaceholder({ altText, label = "Image Placeholder", className = "", ratio = "aspect-[4/3]" }) {
  return (
    <figure className={`w-full ${className}`}>
      <div
        role="img"
        aria-label={altText}
        className={`${ratio} w-full rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface-alt)] p-5 shadow-[var(--shadow-sm)]`}
      >
        <div className="flex h-full items-center justify-center rounded-xl border border-[var(--c-border)] bg-white">
          <p className="px-4 text-center text-sm font-medium text-[var(--c-body)]">{label}</p>
        </div>
      </div>
      <figcaption className="mt-2 text-xs font-medium text-[#6e8396]">Alt text: {altText}</figcaption>
    </figure>
  );
}

export default ImagePlaceholder;
