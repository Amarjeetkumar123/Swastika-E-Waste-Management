import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import ImagePlaceholder from "../components/ui/ImagePlaceholder";
import PageHero from "../components/sections/PageHero";
import ServiceAreasSection from "../components/sections/ServiceAreasSection";

function AboutPage({ content }) {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About Shree Varahi Global Enterprises"
        description="A Karnataka-focused scrap enquiry business model designed for structured tender and procurement communication."
        primaryCta={{ label: "View Categories", href: "/tender-categories" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />

      <section className="border-b border-[#d1deea] bg-white py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeader
                eyebrow="Business Overview"
                title={content.about.title}
                description={content.about.description}
              />
              <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-6 text-[#3c556c]">
                {content.about.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <ImagePlaceholder altText={content.about.placeholderAlt} label="About Page Image Space" />
          </div>
        </Container>
      </section>

      <ServiceAreasSection areas={content.serviceAreas} />
    </>
  );
}

export default AboutPage;
