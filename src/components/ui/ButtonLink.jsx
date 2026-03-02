import Icon from "./Icon";

function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  target,
  rel,
  icon,
  iconPosition = "left",
}) {
  const variants = {
    primary:
      "border border-[#196f82] bg-[#196f82] !text-white shadow-[var(--shadow-sm)] hover:border-[#125a6b] hover:bg-[#125a6b]",
    secondary:
      "border border-[#9fb0c2] bg-white text-[#0b2538] hover:border-[#8298ad] hover:bg-[#eaf0f6]",
    ghost:
      "border border-[#b7c6d5] bg-[#f3f7fb] text-[#173a56] hover:border-[#9fb0c2] hover:bg-[#e7eef5]",
    highlight:
      "border border-[#b37a18] bg-[#b37a18] !text-white shadow-[var(--shadow-sm)] hover:border-[#8f5f10] hover:bg-[#8f5f10]",
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-[0.95rem] font-bold tracking-[0.01em] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--c-primary)] ${variants[variant]} ${className}`}
    >
      {icon && iconPosition === "left" ? <Icon name={icon} className="mr-2 shrink-0 text-[0.95em]" /> : null}
      {children}
      {icon && iconPosition === "right" ? <Icon name={icon} className="ml-2 shrink-0 text-[0.95em]" /> : null}
    </a>
  );
}

export default ButtonLink;
