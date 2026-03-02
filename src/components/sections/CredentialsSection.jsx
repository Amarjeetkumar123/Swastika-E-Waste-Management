import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import Icon from "../ui/Icon";

function CredentialsSection({ credentials, compliancePoints }) {
  return (
    <section id="credentials" className="border-b border-[var(--c-border)] bg-[#f7fafe] py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-2xl border border-[var(--c-border)] bg-white p-6 shadow-[var(--shadow-sm)] sm:p-7">
            <SectionHeader
              eyebrow="Verified Business Profile"
              title="Business Credentials"
              description="Official registration and identity details used for procurement and tender communication."
            />

            <dl className="mt-8 grid gap-3 sm:grid-cols-2">
              {credentials.map((item) => (
                <div key={item.label} className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface-alt)] p-4">
                  <dt className="inline-flex items-center text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#5f7790]">
                    <Icon name="file" className="mr-1 text-[0.8em] text-[var(--c-primary)]" />
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-sm font-semibold text-[var(--c-heading)]">{item.value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.08em] text-[#5f7790]">Compliance Highlights</p>
            <ul className="mt-3 space-y-1.5 p-0 text-sm leading-6 text-[var(--c-body)]">
              {compliancePoints.map((point) => (
                <li key={point} className="inline-flex items-start list-none">
                  <Icon name="shield" className="mr-1.5 mt-[2px] shrink-0 text-[0.85em] text-[var(--c-primary)]" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs font-medium text-[#6e8396]">
              Sensitive personal identifiers are verified internally and are not published publicly.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--c-border)] bg-white p-5 shadow-[var(--shadow-sm)]">
            <ImagePlaceholder
              altText="Business registration documents and compliance records"
              label="Credentials Image Space"
              ratio="aspect-[3/4]"
              className="m-0"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CredentialsSection;
