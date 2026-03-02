import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import Icon from "../ui/Icon";
import imageOne from "../../assets/warehouse-scrap.jpg";
import imageTwo from "../../assets/office-and-IT-image.jpg";
import imageThree from "../../assets/Non-Ferrous-Metal-Recycling-Clifton-Metals-632x764.jpg";
import imageFour from "../../assets/Industrial-and-Machinery-Lots-image.jpg";

const solutionIcons = ["briefcase", "layers", "shield", "gear"];

const solutionImages = [
  {
    src: imageOne,
    alt: "Warehouse scrap materials arranged for category-based clearance",
  },
  {
    src: imageTwo,
    alt: "Office and IT assets prepared for scrap handling",
  },
  {
    src: imageThree,
    alt: "Non-ferrous metal scrap prepared for recovery",
  },
  {
    src: imageFour,
    alt: "Industrial machinery lots staged for scrap coordination",
  },
];

function SolutionsSection({ items }) {
  return (
    <section className="border-b border-[var(--c-border)] bg-white py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow="Service Focus"
          title="High-Demand Scrap Solution Areas"
          description="These focus areas are aligned to common Karnataka enquiry patterns seen across scrap dealer and industrial procurement channels."
          align="center"
        />

        <div className="mt-14">
          {items.map((item, index) => {
            const textOnLeft = index % 2 === 0;
            const media = solutionImages[index] || solutionImages[0];
            const highlights = item.highlights || [];

            return (
              <article
                key={item.title}
                className={`py-10 sm:py-12 ${index !== 0 ? "border-t border-[var(--c-border)]" : ""}`}
              >
                <div className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${textOnLeft ? "" : "lg:[&>*:first-child]:order-2"}`}>
                  <div className="w-full max-w-2xl">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[var(--c-primary)]">
                      Focus Area {String(index + 1).padStart(2, "0")}
                    </p>

                    <span className="mt-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--c-primary)] text-base font-bold text-white shadow-[var(--shadow-sm)]">
                      <Icon name={solutionIcons[index] || "check"} className="text-[1em]" />
                    </span>

                    <h3 className="mt-4 text-2xl font-semibold leading-tight text-[var(--c-heading)] sm:text-[1.7rem]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-[62ch] text-base leading-7 text-[var(--c-body)] sm:text-[1.04rem]">{item.description}</p>

                    {highlights.length > 0 ? (
                      <ul className="mt-5 space-y-3">
                        {highlights.map((point) => (
                          <li key={point} className="flex items-start gap-3 text-[var(--c-body)]">
                            <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#d5e8ec] text-[0.66rem] text-[var(--c-primary)]">
                              <Icon name="check" className="text-[0.75em]" />
                            </span>
                            <span className="leading-6">{point}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>

                  <div className={`${textOnLeft ? "lg:justify-self-end" : "lg:justify-self-start"} w-full max-w-[620px]`}>
                    <img
                      src={media.src}
                      alt={media.alt}
                      className="h-[250px] w-full rounded-2xl object-cover shadow-[var(--shadow-md)] sm:h-[290px] lg:h-[320px]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default SolutionsSection;
