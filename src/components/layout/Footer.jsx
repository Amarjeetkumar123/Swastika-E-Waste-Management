import Container from "../ui/Container";
import Icon from "../ui/Icon";

function Footer({ company, links }) {
  return (
    <footer className="border-t border-[#19384f] bg-[#0f2f46] py-12">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p className="text-base font-bold text-[#f2f7fb]">{company.name}</p>
            <p className="mt-3 text-sm leading-6 text-[#b8c7d5]">
              Karnataka-focused scrap tender category support for ferrous, non-ferrous, electrical/e-waste, and industrial requirements.
            </p>
            <p className="mt-4 flex items-center text-sm text-[#d8e3ec]">
              <Icon name="phone" className="mr-1.5 text-[0.95em] text-[#7fc5d1]" />
              {company.mobile}
            </p>
            <p className="flex items-center text-sm text-[#d8e3ec]">
              <Icon name="mail" className="mr-1.5 text-[0.95em] text-[#7fc5d1]" />
              {company.email}
            </p>
          </div>

          <ul className="flex list-none flex-wrap gap-3 p-0 text-sm md:ml-auto">
            {links.map((link) => (
              <li key={`footer-${link.href}`}>
                <a
                  href={link.href}
                  className="inline-flex rounded-lg border border-white px-3 py-2 font-medium text-white transition-colors hover:bg-white hover:text-[#0f2f46]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-xs text-[#99afc2]">
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
