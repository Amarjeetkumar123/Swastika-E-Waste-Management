import PageHero from "../components/sections/PageHero";
import CategoryDetailSection from "../components/sections/CategoryDetailSection";

function CategoryPage({ category }) {
  return (
    <>
      <PageHero
        eyebrow="Category Detail"
        title={`${category.title} in Karnataka`}
        description="Item-level category coverage with use-case alignment for tender and procurement enquiries."
        primaryCta={{ label: "Send Enquiry", href: "/contact" }}
        secondaryCta={{ label: "All Categories", href: "/tender-categories" }}
      />
      <CategoryDetailSection category={category} />
    </>
  );
}

export default CategoryPage;
