import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import Icon from "../ui/Icon";

const stepIcons = ["file", "layers", "shield", "briefcase", "location", "check"];

function ProcessSection({ steps }) {
  return (
    <section id="process" className="border-b border-[var(--c-border)] bg-[#eef4f9] py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow="Working Model"
          title="Tender and Procurement Process"
          description="A structured process helps us respond quickly and accurately for category-specific requirements."
          align="center"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-2xl border border-[var(--c-border)] bg-white p-6 shadow-[var(--shadow-sm)]">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#e8f1f4] text-sm font-bold text-[var(--c-primary)]">
                <Icon name={stepIcons[index] || "gear"} className="text-[16px]" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[var(--c-heading)]">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--c-body)]">{step.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProcessSection;
