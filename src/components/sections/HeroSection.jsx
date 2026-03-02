import Container from "../ui/Container";
import ButtonLink from "../ui/ButtonLink";
import Icon from "../ui/Icon";
import heroBackgroundImage from "../../assets/background-hero-section.jpg";

function HeroSection({ hero, company }) {
  const highlights = [
    "4 Core Scrap Categories",
    "Karnataka Coverage",
    "GST and MSME Registered",
  ];

  return (
    <section
      id="home"
      className="overflow-hidden border-b border-[var(--c-border)]"
      style={{
        backgroundImage: `url(${heroBackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container className="flex min-h-[calc(100vh-72px)] items-center py-14 sm:py-[4.5rem] lg:py-24">
        <div className="w-full max-w-[1200px] text-left">
          <p className="inline-flex rounded-full border border-white/45 bg-white/92 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[var(--c-primary)]">
              {hero.eyebrow}
          </p>
          <h1 className="mt-6 max-w-[22ch] text-4xl font-semibold leading-[1.06] tracking-tight !text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.88)] sm:text-5xl lg:text-[3.25rem]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-[66ch] text-base leading-8 text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.74)] sm:text-[1.06rem]">
            {hero.description}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-2.5">
            {highlights.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-white/45 bg-white/94 px-3 py-1.5 text-xs font-semibold text-[var(--c-ink)]"
              >
                <Icon name="check" className="mr-1.5 text-[0.78em] text-[var(--c-primary)]" />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-2 text-sm font-semibold text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.68)]">
            <p className="inline-flex items-center">
              <Icon name="phone" className="mr-1.5 text-[0.95em] text-[#7fc5d1]" />
              {company.mobile}
            </p>
            <p className="inline-flex items-center">
              <Icon name="mail" className="mr-1.5 text-[0.95em] text-[#7fc5d1]" />
              {company.email}
            </p>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <ButtonLink href="/contact" icon="phone">
              {hero.primaryCta}
            </ButtonLink>
            <ButtonLink href="/tender-categories" variant="secondary" icon="layers">
              {hero.secondaryCta}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
