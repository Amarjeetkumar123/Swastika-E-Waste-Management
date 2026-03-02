import PageHero from "../components/sections/PageHero";
import CredentialsSection from "../components/sections/CredentialsSection";

function CredentialsPage({ content }) {
  return (
    <>
      <PageHero
        eyebrow="Credentials"
        title="Registration and Compliance Profile"
        description="Key business details used for transparent communication in scrap procurement and tender workflows."
        primaryCta={{ label: "Contact for Verification", href: "/contact" }}
      />
      <CredentialsSection credentials={content.credentials} compliancePoints={content.compliancePoints} />
    </>
  );
}

export default CredentialsPage;
