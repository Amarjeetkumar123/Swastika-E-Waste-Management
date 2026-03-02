import Container from "../ui/Container";
import Icon from "../ui/Icon";

function Footer({ company, links }) {
  return (
    <footer className="border-t border-[#214865] bg-[#0b263d] py-14 text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3">
              <span className="inline-block h-9 w-2 rounded-full bg-[#2a90a3]"></span>
              <p className="text-xl font-bold tracking-[0.01em] text-white">{company.name}</p>
            </div>

            <p className="mt-4 max-w-[64ch] text-sm leading-7 text-white">
              Karnataka-focused scrap tender and procurement support for ferrous, non-ferrous, electrical and e-waste, and industrial
              material categories with structured communication and quick response.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#3c5f78] bg-[#11324a] px-3 py-1.5 text-xs font-semibold text-white">
                <Icon name="shield" className="text-[0.78em] text-[#8ad0dc]" />
                GST Registered
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#3c5f78] bg-[#11324a] px-3 py-1.5 text-xs font-semibold text-white">
                <Icon name="briefcase" className="text-[0.78em] text-[#8ad0dc]" />
                MSME Micro Enterprise
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#3c5f78] bg-[#11324a] px-3 py-1.5 text-xs font-semibold text-white">
                <Icon name="location" className="text-[0.78em] text-[#8ad0dc]" />
                Bengaluru, Karnataka
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${company.mobileRaw}`}
                className="inline-flex items-center gap-2 rounded-xl border border-[#3d617b] bg-[#14364f] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1a4563]"
              >
                <Icon name="phone" className="text-[0.9em] text-[#8ad0dc]" />
                {company.mobile}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-[#3d617b] bg-[#14364f] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1a4563]"
              >
                <Icon name="mail" className="text-[0.9em] text-[#8ad0dc]" />
                {company.email}
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-white">Quick Navigation</p>
            <ul className="mt-5 list-none space-y-2.5 p-0">
              {links.map((link) => (
                <li key={`footer-${link.href}`}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2.5 text-sm font-medium text-white transition-colors hover:text-white"
                  >
                    <Icon name="arrow-right" className="text-[0.72em] text-[#8ad0dc]" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-white">Business Details</p>
            <ul className="mt-5 list-none space-y-3 p-0 text-sm text-white">
              <li className="flex items-start gap-2.5">
                <Icon name="building" className="mt-0.5 text-[0.9em] text-[#8ad0dc]" />
                <span>{company.legalName}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="shield" className="mt-0.5 text-[0.9em] text-[#8ad0dc]" />
                <span>GSTIN: {company.gstin}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="briefcase" className="mt-0.5 text-[0.9em] text-[#8ad0dc]" />
                <span>{company.constitution}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="location" className="mt-0.5 text-[0.9em] text-[#8ad0dc]" />
                <span>{company.placeOfBusiness}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[#2a4e68] pt-5 text-xs text-white sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>Karnataka Operations | Tender and Procurement Support</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
