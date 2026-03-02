import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import Icon from "../ui/Icon";

function FaqSection({ items }) {
  return (
    <section className="border-b border-[var(--c-border)] bg-[#f7fafe] py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow="FAQ"
          title="Common Enquiry Questions"
          description="Quick answers for buyers, procurement teams, and businesses evaluating scrap category support."
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-4">
          {items.map((item, index) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-[var(--c-border)] bg-white p-5 shadow-[var(--shadow-sm)]"
              open={index === 0}
            >
              <summary className="inline-flex w-full cursor-pointer list-none items-start pr-8 text-base font-semibold text-[var(--c-heading)]">
                <Icon name="question" className="mr-2 shrink-0 text-[0.95em] text-[var(--c-primary)]" />
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-6 text-[var(--c-body)]">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FaqSection;
