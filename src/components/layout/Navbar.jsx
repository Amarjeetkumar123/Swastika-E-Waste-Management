import { useState } from "react";
import Container from "../ui/Container";
import ButtonLink from "../ui/ButtonLink";
import Icon from "../ui/Icon";

function isActive(href, currentPath) {
  if (href === "/") {
    return currentPath === "/";
  }

  if (href === "/tender-categories") {
    return currentPath === href || currentPath.startsWith("/tender-categories/");
  }

  return currentPath === href;
}

const navIcons = {
  Home: "building",
  About: "briefcase",
  "Tender Categories": "layers",
  Process: "gear",
  Credentials: "shield",
  Contact: "mail",
};

function Navbar({ company, links, currentPath }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--c-border)] bg-white/95 backdrop-blur">
      <Container className="flex min-h-[72px] items-center justify-between gap-6">
        <a href="/" className="inline-flex items-center gap-3">
          <span className="inline-block h-8 w-2 rounded-full bg-[var(--c-primary)]"></span>
          <span className="text-sm font-bold tracking-[0.02em] text-[var(--c-heading)] sm:text-base">
            {company.name}
          </span>
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--c-border)] bg-white text-[var(--c-heading)] shadow-[var(--shadow-sm)] lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <Icon name={isOpen ? "close" : "menu"} className="text-lg" />
        </button>

        <nav
          className={`absolute left-4 right-4 top-[76px] rounded-2xl border border-[var(--c-border)] bg-white p-4 shadow-[var(--shadow-md)] lg:static lg:block lg:w-auto lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex list-none flex-col gap-2 p-0 lg:flex-row lg:items-center lg:gap-2">
            {links.map((link) => {
              const active = isActive(link.href, currentPath);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                      active
                        ? "bg-[var(--c-surface-alt)] text-[var(--c-primary)]"
                        : "text-[var(--c-body)] hover:bg-[var(--c-surface-alt)] hover:text-[var(--c-heading)]"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon
                      name={navIcons[link.label] || "arrow-right"}
                      className="mr-2 text-[0.85em]"
                    />
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li className="mt-2 flex flex-wrap gap-2 lg:mt-0 lg:pl-2">
              <ButtonLink
                href={`tel:${company.mobileRaw}`}
                className="px-4 py-2.5 text-sm"
                variant="primary"
                icon="phone"
              >
                Call Now
              </ButtonLink>
              <ButtonLink
                href={`https://wa.me/91${company.mobileRaw}`}
                variant="highlight"
                className="px-4 py-2.5 text-sm"
                target="_blank"
                rel="noreferrer"
                icon="whatsapp"
              >
                WhatsApp
              </ButtonLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
