import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import BengaluruMap from "../ui/BengaluruMap";
import Icon from "../ui/Icon";

function ServiceAreasSection({ areas }) {
  return (
    <section className="border-b border-[var(--c-border)] bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-stretch">
          <div className="rounded-2xl border border-[var(--c-border)] bg-[#f7fafe] p-6 shadow-[var(--shadow-sm)] sm:p-7">
            <SectionHeader
              eyebrow="Coverage"
              title="Karnataka Service Areas"
              description="Bengaluru is our primary operating base with enquiry support across major districts in Karnataka."
            />
            <ul className="mt-7 grid list-none gap-2 p-0 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => (
                <li
                  key={area}
                  className="inline-flex items-center rounded-full border border-[var(--c-border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--c-ink)]"
                >
                  <Icon name="location" className="mr-1.5 text-[0.85em] text-[var(--c-primary)]" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <BengaluruMap areas={areas} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ServiceAreasSection;
