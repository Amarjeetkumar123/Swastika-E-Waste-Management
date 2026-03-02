import Container from "../ui/Container";
import ButtonLink from "../ui/ButtonLink";
import ImagePlaceholder from "../ui/ImagePlaceholder";
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
      className="relative overflow-hidden border-b border-[var(--c-border)] py-16 sm:py-24"
      style={{
        backgroundImage: `url(${heroBackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/85"></div>
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="inline-flex rounded-full border border-[var(--c-border)] bg-white px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[var(--c-primary)]">
              {hero.eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--c-heading)] sm:text-5xl lg:text-[3.4rem]">
              {hero.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--c-body)] sm:text-[1.05rem]">{hero.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-[var(--c-border)] bg-white px-3 py-1 text-xs font-semibold text-[var(--c-ink)]"
                >
                  <Icon name="check" className="mr-1.5 text-[0.78em] text-[var(--c-primary)]" />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-[#5a7186]">
              <p className="inline-flex items-center">
                <Icon name="phone" className="mr-1.5 text-[0.95em] text-[var(--c-primary)]" />
                {company.mobile}
              </p>
              <p className="inline-flex items-center">
                <Icon name="mail" className="mr-1.5 text-[0.95em] text-[var(--c-primary)]" />
                {company.email}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact" icon="phone">
                {hero.primaryCta}
              </ButtonLink>
              <ButtonLink href="/tender-categories" variant="secondary" icon="layers">
                {hero.secondaryCta}
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--c-border)] bg-white p-5 shadow-[var(--shadow-md)] sm:p-6">
            <div className="mb-4 flex items-center justify-between rounded-xl border border-[var(--c-border)] bg-[var(--c-surface-alt)] px-4 py-3">
              <p className="inline-flex items-center text-sm font-semibold text-[var(--c-heading)]">
                <Icon name="briefcase" className="mr-1.5 text-[0.95em] text-[var(--c-primary)]" />
                Business Profile
              </p>
              <span className="inline-flex items-center rounded-full bg-[#d8ecf0] px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-[var(--c-primary)]">
                <Icon name="shield" className="mr-1 text-[0.78em]" />
                Verified
              </span>
            </div>
            <ImagePlaceholder altText={hero.placeholderAlt} label="Hero Image Space" className="m-0" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
