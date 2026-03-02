import PageHero from "../components/sections/PageHero";
import ProcessSection from "../components/sections/ProcessSection";
import FaqSection from "../components/sections/FaqSection";

function ProcessPage({ content }) {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="How Enquiries Move from Submission to Closure"
        description="Our process is designed to reduce delays and improve category-level clarity for procurement communication."
        primaryCta={{ label: "Start Enquiry", href: "/contact" }}
        secondaryCta={{ label: "View Categories", href: "/tender-categories" }}
      />
      <ProcessSection steps={content.processSteps} />
      <FaqSection items={content.faqs} />
    </>
  );
}

export default ProcessPage;
