import PageHero from "../components/sections/PageHero";
import ContactSection from "../components/sections/ContactSection";
import FaqSection from "../components/sections/FaqSection";

function ContactPage({ content }) {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Submit Your Tender or Procurement Enquiry"
        description="Share material category, quantity, and location details. We will respond with the next action for your requirement."
        secondaryCta={{ label: "View Categories", href: "/tender-categories" }}
      />
      <ContactSection
        company={content.company}
        categories={content.categories}
        contact={content.contact}
      />
      <FaqSection items={content.faqs} />
    </>
  );
}

export default ContactPage;
