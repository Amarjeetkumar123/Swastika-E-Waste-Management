import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import ButtonLink from "../ui/ButtonLink";
import Icon from "../ui/Icon";

function CategoriesOverviewSection({ categories }) {
  return (
    <section id="tender-categories" className="border-b border-[var(--c-border)] bg-[#f7fafe] py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow="Category Coverage"
          title="Karnataka Tender Categories We Support"
          description="Explore each category page for supported scrap items, use cases, and enquiry actions."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <article
              key={category.id}
              className="rounded-2xl border border-[var(--c-border)] bg-white p-6 shadow-[var(--shadow-sm)] transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-[#e8f1f4] px-3 py-1 text-xs font-semibold text-[var(--c-primary)]">
                  <Icon name="layers" className="mr-1.5 text-[0.8em]" />
                  {category.shortTitle}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#6f8395]">
                  {category.items.length} Items
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--c-heading)]">{category.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--c-body)]">{category.description}</p>
              <ButtonLink
                href={`/tender-categories/${category.id}`}
                variant="secondary"
                className="mt-6"
                icon="arrow-right"
                iconPosition="right"
              >
                View {category.shortTitle}
              </ButtonLink>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default CategoriesOverviewSection;
