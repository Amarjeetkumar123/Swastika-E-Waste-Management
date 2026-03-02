import PageHero from "../components/sections/PageHero";

function NotFoundPage() {
  return (
    <PageHero
      eyebrow="404"
      title="Page Not Found"
      description="The requested page is not available. Use the home page or category pages to continue."
      primaryCta={{ label: "Go to Home", href: "/" }}
      secondaryCta={{ label: "View Categories", href: "/tender-categories" }}
    />
  );
}

export default NotFoundPage;
