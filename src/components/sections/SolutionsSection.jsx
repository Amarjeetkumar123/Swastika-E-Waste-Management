import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import Icon from "../ui/Icon";

const solutionIcons = ["briefcase", "layers", "shield", "gear"];

function SolutionsSection({ items }) {
  return (
    <section className="border-b border-[var(--c-border)] bg-white py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow="Service Focus"
          title="High-Demand Scrap Solution Areas"
          description="These focus areas are aligned to common Karnataka enquiry patterns seen across scrap dealer and industrial procurement channels."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {items.map((item, index) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface-alt)] p-6 shadow-[var(--shadow-sm)] transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-bold text-[var(--c-primary)] shadow-[var(--shadow-sm)]">
                <Icon name={solutionIcons[index] || "check"} className="text-[0.95em]" />
              </span>
              <h3 className="mt-4 text-xl font-semibold text-[var(--c-heading)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--c-body)]">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SolutionsSection;
