const ICON_MAP = {
  phone: "fa-solid fa-phone",
  whatsapp: "fa-brands fa-whatsapp",
  mail: "fa-solid fa-envelope",
  location: "fa-solid fa-location-dot",
  building: "fa-solid fa-building",
  menu: "fa-solid fa-bars",
  close: "fa-solid fa-xmark",
  check: "fa-solid fa-check",
  shield: "fa-solid fa-shield-halved",
  layers: "fa-solid fa-layer-group",
  "arrow-right": "fa-solid fa-arrow-right",
  file: "fa-solid fa-file-lines",
  briefcase: "fa-solid fa-briefcase",
  gear: "fa-solid fa-gear",
  question: "fa-solid fa-circle-question",
};

function Icon({ name, className = "text-[0.95em]" }) {
  const iconClass = ICON_MAP[name];
  if (!iconClass) {
    return null;
  }

  return (
    <i
      className={`${iconClass} inline-flex shrink-0 items-center justify-center leading-none ${className}`}
      aria-hidden="true"
    ></i>
  );
}

export default Icon;
