import Icon from "../ui/Icon";

function FloatingActions({ company }) {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3">
      <a
        href={`tel:${company.mobileRaw}`}
        className="grid h-[52px] w-[52px] place-items-center rounded-full border border-[var(--c-primary)] bg-[var(--c-primary)] text-white shadow-[var(--shadow-md)] transition-colors hover:bg-[var(--c-primary-dark)]"
        aria-label="Call now"
        title="Call now"
      >
        <Icon name="phone" className="text-[22px]" />
        <span className="sr-only">Call</span>
      </a>
      <a
        href={`https://wa.me/91${company.mobileRaw}`}
        target="_blank"
        rel="noreferrer"
        className="grid h-[52px] w-[52px] place-items-center rounded-full border border-[#25D366] bg-[#25D366] text-white shadow-[var(--shadow-md)] transition-colors hover:border-[#1ea952] hover:bg-[#1ea952]"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <Icon name="whatsapp" className="text-[22px]" />
        <span className="sr-only">WhatsApp</span>
      </a>
    </div>
  );
}

export default FloatingActions;
