import Container from "../ui/Container";
import ButtonLink from "../ui/ButtonLink";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import Icon from "../ui/Icon";

function CategoryDetailSection({ category, reverse = false }) {
  return (
    <section className="border-b border-[var(--c-border)] bg-white py-16 sm:py-20 even:bg-[#f7fafe]">
      <Container>
        <div className={`grid items-start gap-8 lg:grid-cols-2 lg:gap-12 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div className="rounded-2xl border border-[var(--c-border)] bg-white p-6 shadow-[var(--shadow-sm)] sm:p-7">
            <p className="inline-flex items-center rounded-full bg-[#e9f3f5] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--c-primary)]">
              <Icon name="layers" className="mr-1.5 text-[0.8em]" />
              Tender Category
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--c-heading)]">{category.title}</h3>
            <p className="mt-4 text-base leading-7 text-[var(--c-body)]">{category.description}</p>

            <ul className="mt-6 grid list-none gap-2 p-0 sm:grid-cols-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--c-border)] bg-[var(--c-surface-alt)] px-3 py-2 text-sm font-medium text-[var(--c-ink)]"
                >
                  <Icon name="check" className="text-[0.85em] text-[var(--c-primary)]" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.08em] text-[#5f7790]">Typical Enquiry Use Cases</p>
            <ul className="mt-3 space-y-1.5 p-0 text-sm leading-6 text-[var(--c-body)]">
              {category.useCases.map((item) => (
                <li key={item} className="list-none inline-flex items-start">
                  <Icon name="check" className="mr-1.5 mt-[2px] shrink-0 text-[0.85em] text-[var(--c-primary)]" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact" icon="phone">
                Submit Enquiry
              </ButtonLink>
              <ButtonLink href="/tender-categories" variant="ghost" icon="layers">
                Back to All Categories
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--c-border)] bg-[#f1f6fb] p-5 shadow-[var(--shadow-sm)]">
            <ImagePlaceholder altText={category.placeholderAlt} label={`${category.title} Image Space`} className="m-0" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CategoryDetailSection;
