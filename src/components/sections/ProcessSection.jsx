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

        <div className="mt-14">
          <ol className="relative">
            <span className="pointer-events-none absolute left-5 top-4 h-[calc(100%-2rem)] w-px bg-[var(--c-border-strong)] md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />

            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <li key={step.title} className={`${index !== steps.length - 1 ? "pb-12 sm:pb-14" : ""} relative`}>
                  <div className="relative grid gap-2 md:grid-cols-2 md:gap-14">
                    <div
                      className={`pl-16 md:max-w-[36rem] md:pl-0 ${
                        isLeft
                          ? "md:col-start-1 md:justify-self-end md:pr-16 md:text-right"
                          : "md:col-start-2 md:justify-self-start md:pl-16"
                      }`}
                    >
                      <p className="text-[0.69rem] font-semibold uppercase tracking-[0.14em] text-[var(--c-primary)]">
                        Step {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold leading-tight text-[var(--c-heading)]">{step.title}</h3>
                      <p className="mt-2.5 max-w-[56ch] text-sm leading-7 text-[var(--c-body)] md:text-base">{step.text}</p>
                    </div>
                  </div>

                  <span className="absolute left-0 top-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--c-border)] bg-white text-[var(--c-primary)] shadow-[var(--shadow-sm)] md:left-1/2 md:-translate-x-1/2">
                    <Icon name={stepIcons[index] || "gear"} className="text-[15px]" />
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}

export default ProcessSection;
