import PageHero from "../components/sections/PageHero";
import CategoriesOverviewSection from "../components/sections/CategoriesOverviewSection";
import CategoryDetailSection from "../components/sections/CategoryDetailSection";

function CategoriesPage({ content }) {
  return (
    <>
      <PageHero
        eyebrow="Tender Categories"
        title="Scrap Category Coverage for Karnataka Enquiries"
        description="Browse all primary scrap categories and supported material types before sending your tender or procurement requirement."
        primaryCta={{ label: "Submit Enquiry", href: "/contact" }}
      />
      <CategoriesOverviewSection categories={content.categories} />
      {content.categories.map((category, index) => (
        <CategoryDetailSection key={category.id} category={category} reverse={index % 2 === 1} />
      ))}
    </>
  );
}

export default CategoriesPage;
