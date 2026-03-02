import HeroSection from "../components/sections/HeroSection";
import SolutionsSection from "../components/sections/SolutionsSection";
import CategoriesOverviewSection from "../components/sections/CategoriesOverviewSection";
import ProcessSection from "../components/sections/ProcessSection";
import ServiceAreasSection from "../components/sections/ServiceAreasSection";
import FaqSection from "../components/sections/FaqSection";

function HomePage({ content }) {
  return (
    <>
      <HeroSection hero={content.hero} company={content.company} />
      <SolutionsSection items={content.solutions} />
      <CategoriesOverviewSection categories={content.categories} />
      <ProcessSection steps={content.processSteps} />
      <ServiceAreasSection areas={content.serviceAreas} />
      <FaqSection items={content.faqs} />
    </>
  );
}

export default HomePage;
