import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import ButtonLink from "../ui/ButtonLink";
import Icon from "../ui/Icon";
import ferrousImage from "../../assets/ferross-metal-scrape-image.jpg";
import nonFerrousImage from "../../assets/Non-Ferrous-Metal-Scrap.jpg";
import ewasteImage from "../../assets/Electronics2.webp";
import industrialImage from "../../assets/Industrial-and-Machinery-Lots-image.jpg";

const CATEGORY_IMAGES = {
  ferrous: {
    src: ferrousImage,
    alt: "Ferrous metal scrap bundles in an industrial yard",
  },
  "non-ferrous": {
    src: nonFerrousImage,
    alt: "Non-ferrous metal scrap separated for recovery",
  },
  "electrical-ewaste": {
    src: ewasteImage,
    alt: "Electrical and electronic scrap material for processing",
  },
  "industrial-mixed": {
    src: industrialImage,
    alt: "Industrial machinery and mixed scrap lot",
  },
};

function CategoriesOverviewSection({ categories }) {
  return (
    <section id="tender-categories" className="border-b border-[var(--c-border)] bg-[#f7fafe] py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow="Category Coverage"
          title="Karnataka Tender Categories We Support"
          description="Explore each category page for supported scrap items, use cases, and enquiry actions."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const media = CATEGORY_IMAGES[category.id];

            return (
              <article
                key={category.id}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--c-border)] bg-white shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
              >
                <div className="relative overflow-hidden border-b border-[var(--c-border)]">
                  <img
                    src={media?.src}
                    alt={media?.alt || category.placeholderAlt}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[var(--c-primary)] shadow-[var(--shadow-sm)]">
                    <Icon name="layers" className="mr-1.5 text-[0.8em]" />
                    {category.shortTitle}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#607688]">
                      Tender Category
                    </p>
                    <span className="inline-flex items-center rounded-full bg-[#edf4f8] px-2.5 py-1 text-xs font-semibold text-[#35526b]">
                      {category.items.length} Items
                    </span>
                  </div>

                  <h3 className="mt-3 text-[1.38rem] font-semibold leading-tight text-[var(--c-heading)]">{category.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--c-body)]">{category.description}</p>

                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {category.items.slice(0, 4).map((item) => (
                      <li key={item} className="inline-flex items-start gap-2 text-sm text-[var(--c-ink)]">
                        <Icon name="check" className="mt-0.5 text-[0.8em] text-[var(--c-primary)]" />
                        <span className="leading-5">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <ButtonLink
                    href={`/tender-categories/${category.id}`}
                    variant="secondary"
                    className="mt-auto pt-6"
                    icon="arrow-right"
                    iconPosition="right"
                  >
                    View {category.shortTitle}
                  </ButtonLink>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default CategoriesOverviewSection;
