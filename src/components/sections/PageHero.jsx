import Container from "../ui/Container";
import ButtonLink from "../ui/ButtonLink";

function PageHero({ eyebrow, title, description, primaryCta, secondaryCta }) {
  return (
    <section className="border-b border-[var(--c-border)] bg-[#edf3f8] py-14 sm:py-18">
      <Container>
        <div className="max-w-5xl rounded-3xl border border-[var(--c-border)] bg-white p-7 shadow-[var(--shadow-sm)] sm:p-9">
          {eyebrow ? (
            <p className="inline-flex rounded-full border border-[var(--c-border)] bg-[var(--c-surface-alt)] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[var(--c-primary)]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--c-heading)] sm:text-4xl">{title}</h1>
          <p className="mt-4 max-w-4xl text-base leading-7 text-[var(--c-body)]">{description}</p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryCta ? (
                <ButtonLink href={primaryCta.href} icon="arrow-right" iconPosition="right">
                  {primaryCta.label}
                </ButtonLink>
              ) : null}
              {secondaryCta ? (
                <ButtonLink href={secondaryCta.href} variant="secondary" icon="layers">
                  {secondaryCta.label}
                </ButtonLink>
              ) : null}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export default PageHero;
