import { useEffect, useRef, useState } from "react";
import "./App.css";
import heroBackgroundImage from "./assets/hero-background-image.png";
import aboutImage from "./assets/Electronics.webp";
import blogImage from "./assets/Mobile-Phone-Laptop-Battery-Recycling.jpg";
import serviceElectricalImage from "./assets/Electronics2.webp";
import serviceHardDiskImage from "./assets/hard-disk.jpg";
import serviceItadImage from "./assets/IT-Asset-Disposition.jpg";
import serviceBatteryImage from "./assets/Mobile-Phone-Laptop-Battery-Recycling.jpg";
import serviceCableImage from "./assets/e-waste-3.webp";
import serviceDoorImage from "./assets/commercial-garbage-bin-1024x683.jpg";
import cablesImage from "./assets/Electronics2.webp";
import doorRecyclingImage from "./assets/commercial-garbage-bin-1024x683.jpg";
import corporateBackgroundImage from "./assets/Responsible-E-Waste-Management.jpeg";
import municipalImage from "./assets/MUNICIPAL.png";
import hazardousImage from "./assets/HAZARDOUS.png";
import recyclingImage from "./assets/RECYCLING.png";
import biomedicalImage from "./assets/BIOMEDICAL.png";
import logoImage from "./assets/logo.svg";

const FALLBACK_IMAGE = aboutImage;

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact Us", href: "#contact" },
];

const categoryTiles = [
  {
    image: municipalImage,
    title: "MUNICIPAL",
    tagline: "'Clean India' with smart solutions",
  },
  {
    image: hazardousImage,
    title: "HAZARDOUS",
    tagline: "Logistics and processing",
  },
  {
    image: recyclingImage,
    title: "RECYCLING",
    tagline: "Strides towards sustainability",
  },
  {
    image: biomedicalImage,
    title: "BIOMEDICAL",
    tagline: "Safe transportation and disposal",
  },
];

const serviceCards = [
  {
    title: "Electrical & Electronic",
    text: "Hazardous materials such as lead, mercury, and cadmium can leach into soil and water, causing pollution and harm to wildlife. Proper recycling ensures these toxins are safely extracted and processed.",
    image: serviceElectricalImage,
  },
  {
    title: "Hard Disk Shredding",
    text: "When it comes to ensuring that sensitive data is securely destroyed and electronics are disposed of properly, our hard disk shredding service provides complete peace of mind. We physically destroy hard drives to ensure no data can ever be recovered.",
    image: serviceHardDiskImage,
  },
  {
    title: "IT Asset Disposition (ITAD)",
    text: "An assessment of the IT assets is conducted to determine their value, condition, and whether they can be reused, recycled, or sold. Our ITAD service ensures compliance with environmental regulations while maximizing asset recovery value.",
    image: serviceItadImage,
  },
  {
    title: "Batteries",
    text: "When batteries are disposed of in landfills or incinerators, they contribute to the growing problem of e-waste, which is becoming a global challenge. Our battery recycling program safely processes all battery types to recover valuable materials.",
    image: serviceBatteryImage,
  },
  {
    title: "Cables Recycling",
    text: "Cables, including those used in electrical, telecommunications, and electronic devices, often contain valuable metals like copper, aluminum, and other components that can be recycled for reuse.",
    image: serviceCableImage,
  },
  {
    title: "Door to Door Recycling",
    text: "This service is offered as part of our effort to reduce waste and promote recycling directly from your premises. We collect paper, plastic, metal, glass, and electronics.",
    image: serviceDoorImage,
  },
];

const acceptedItems = [
  { icon: "fa-solid fa-laptop", label: "Laptops" },
  { icon: "fa-solid fa-desktop", label: "Computers" },
  { icon: "fa-solid fa-fax", label: "Fax Machines" },
  { icon: "fa-solid fa-keyboard", label: "Keyboards" },
  { icon: "fa-solid fa-copy", label: "Copiers" },
  { icon: "fa-solid fa-tape", label: "Cassettes" },
  { icon: "fa-solid fa-plug", label: "Cables" },
  { icon: "fa-solid fa-phone", label: "Telephones" },
  { icon: "fa-solid fa-hard-drive", label: "Disk Drives" },
  { icon: "fa-solid fa-lightbulb", label: "Lights & Bulbs" },
  { icon: "fa-solid fa-display", label: "Monitors" },
  { icon: "fa-solid fa-video", label: "Projectors" },
  { icon: "fa-solid fa-wifi", label: "Modems" },
  { icon: "fa-solid fa-microchip", label: "Circuit Boards" },
];

const statCards = [
  {
    icon: "fa-solid fa-earth-asia",
    value: 5,
    decimals: 0,
    suffix: "th",
    label: "India: 5th Largest E-Waste Producer Globally",
  },
  {
    icon: "fa-solid fa-recycle",
    value: 2,
    decimals: 0,
    suffix: "M Tonnes",
    label: "2 Million Tonnes of E-Waste Generated Annually in India",
  },
  {
    icon: "fa-solid fa-chart-line",
    value: 30,
    decimals: 0,
    suffix: "%",
    label: "30% CAGR Growth in Indian E-Waste (ASSOCHAM)",
  },
  {
    icon: "fa-solid fa-industry",
    value: 5.2,
    decimals: 1,
    suffix: "M Tonnes",
    label: "5.2 Million Tonnes Projected by 2020",
  },
];

const processSteps = [
  {
    title: "Collection",
    text: "We collect e-waste directly from your home, office, or facility through our door-to-door pickup service or at designated drop-off points.",
  },
  {
    title: "Sorting & Assessment",
    text: "All collected items are sorted and assessed for reuse potential, resale value, or recycling suitability.",
  },
  {
    title: "Data Destruction",
    text: "Sensitive data on all devices is securely wiped or physically destroyed in compliance with data protection regulations.",
  },
  {
    title: "Recycling & Disposal",
    text: "Materials are processed using environmentally safe methods. Hazardous components are segregated and handled by certified experts.",
  },
  {
    title: "Reporting & Certification",
    text: "Clients receive a certificate of responsible disposal and a detailed report of assets processed.",
  },
];

const containerClass =
  "mx-auto w-[min(100%-42px,1180px)] max-[680px]:w-full max-[680px]:px-[15px]";
const sectionClass = "py-[96px] max-[680px]:py-[78px]";
const sectionLightClass =
  "bg-[linear-gradient(180deg,rgba(237,244,255,0.68)_0%,rgba(255,255,255,0.88)_100%)]";
const sectionKickerClass =
  "mb-3.5 font-['Space_Grotesk'] text-[0.82rem] font-bold uppercase tracking-[0.12em] text-lime-600";
const sectionTitleClass =
  "mb-4 font-['Space_Grotesk'] text-[clamp(1.75rem,3.2vw,2.55rem)] font-semibold leading-[1.16] tracking-[-0.01em] text-[#0f172a]";
const bodyTextClass = "mb-3.5 text-[1.02rem] leading-[1.72] text-[#475569]";
const buttonBaseClass =
  "inline-flex items-center justify-center rounded-full border-0 px-[1.52rem] py-[0.85rem] font-['Space_Grotesk'] text-[0.95rem] font-bold leading-none tracking-[0.01em] !text-white transition-all duration-300 hover:-translate-y-[2px] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2";
const primaryButtonClass = `${buttonBaseClass} focus-visible:outline-[#2ba84a] bg-[#2ba84a] shadow-[0_10px_20px_rgba(43,168,74,0.25)] hover:shadow-[0_14px_28px_rgba(43,168,74,0.35)] hover:bg-[#248f3f]`;
const secondaryButtonClass = `${buttonBaseClass} focus-visible:outline-[#2ba84a] bg-[#2ba84a] shadow-[0_10px_20px_rgba(43,168,74,0.25)] hover:shadow-[0_14px_28px_rgba(43,168,74,0.35)] hover:bg-[#248f3f]`;
const smallButtonClass = "px-[1.15rem] py-[0.66rem] text-[0.85rem]";

const getCookieState = () => {
  if (typeof window === "undefined") {
    return true;
  }

  return window.localStorage.getItem("swastika-cookie-consent") === "accepted";
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [cookieAccepted, setCookieAccepted] = useState(getCookieState);
  const [counterValues, setCounterValues] = useState(statCards.map(() => 0));
  const [startCounter, setStartCounter] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setShowScrollTop(window.scrollY > 560);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!statsRef.current) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCounter(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startCounter) {
      return undefined;
    }

    const duration = 1400;
    const start = performance.now();
    let frameId = 0;

    const animate = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      setCounterValues(
        statCards.map((stat) =>
          Number((stat.value * progress).toFixed(stat.decimals))
        )
      );

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frameId);
  }, [startCounter]);

  const closeMenu = () => setMenuOpen(false);

  const handleImageError = (event) => {
    event.currentTarget.src = FALLBACK_IMAGE;
  };

  const handleAcceptCookies = () => {
    window.localStorage.setItem("swastika-cookie-consent", "accepted");
    setCookieAccepted(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="relative overflow-x-clip bg-white font-['Manrope'] text-[#0f172a]">
      <header
        className={`fixed left-0 top-0 z-1000 w-full border-b transition-all duration-300 ${
          isScrolled 
            ? "border-b-slate-200/50 bg-white/70 backdrop-blur-md shadow-sm" 
            : "border-b-transparent bg-white/50 backdrop-blur-sm"
        }`}
      >
        <div className="border-b border-slate-100/50 bg-linear-to-r from-lime-50/50 to-lime-50/50 backdrop-blur-sm">
          <div
            className={`${containerClass} flex min-h-10 items-center justify-end gap-3 max-[920px]:justify-center max-[680px]:flex-wrap max-[680px]:gap-y-1 max-[680px]:py-2`}
          >
            <p className="m-0 inline-flex items-center gap-2 font-['Space_Grotesk'] text-[0.82rem] font-bold text-[#0f172a]">
              <i className="fa-regular fa-envelope text-lime-600" aria-hidden="true"></i>
              info@swastika.co.in
            </p>
            <span className="text-slate-300">|</span>
            <p className="m-0 inline-flex items-center gap-2 font-['Space_Grotesk'] text-[0.82rem] font-bold text-[#0f172a]">
              <i className="fa-solid fa-phone text-lime-600" aria-hidden="true"></i>
              080-4000 0004
            </p>
          </div>
        </div>

        <nav className="flex min-h-18.5 items-center">
          <div className={`${containerClass} flex w-full items-center justify-between gap-5.5`}>
            <a href="#home" className="inline-flex items-center" onClick={closeMenu}>
              <img
                src={logoImage}
                alt="Swastika logo"
                className="h-16 w-auto object-contain"
                loading="eager"
              />
            </a>

            <button
              type="button"
              className="hidden items-center justify-center rounded-full bg-[#2ba84a] p-[0.6rem] text-[1.05rem] text-white shadow-[0_8px_16px_rgba(43,168,74,0.2)] transition-all duration-300 hover:bg-[#248f3f] hover:shadow-[0_12px_20px_rgba(43,168,74,0.3)] hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-[#2ba84a] focus-visible:outline-offset-2 max-[920px]:inline-flex"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              <i className="fa-solid fa-bars" aria-hidden="true"></i>
            </button>

            <ul
              className={`m-0 flex list-none items-center gap-6.5 p-0 max-[920px]:absolute max-[920px]:left-0 max-[920px]:right-0 max-[920px]:top-28.5 max-[920px]:flex-col max-[920px]:gap-4 max-[920px]:overflow-hidden max-[920px]:border-t max-[920px]:border-slate-200/50 max-[920px]:bg-white/70 max-[920px]:shadow-lg max-[920px]:backdrop-blur-md max-[920px]:transition-[max-height,padding] max-[920px]:duration-300 ${
                menuOpen
                  ? "max-[920px]:max-h-90 max-[920px]:py-5"
                  : "max-[920px]:max-h-0 max-[920px]:py-0"
              }`}
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="relative font-['Space_Grotesk'] text-[0.92rem] font-bold tracking-[0.02em] text-[#0f172a] transition-colors duration-200 after:absolute after:-bottom-1.75 after:left-0 after:h-1 after:w-0 after:rounded-full after:bg-linear-to-r after:from-lime-600 after:to-slate-700 after:transition-all after:duration-300 hover:text-lime-600 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={`${primaryButtonClass} ${smallButtonClass} shadow-[0_10px_24px_rgba(43,168,74,0.3)] max-[920px]:hidden`}
            >
              Enquiry
            </a>
          </div>
        </nav>
      </header>

      <main className="relative z-1 pt-28.5">
        <section
          id="home"
          className="relative min-h-[calc(100vh-114px)] overflow-hidden py-16 max-[680px]:py-12"
          style={{
            backgroundImage: `url(${heroBackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(104deg,rgba(3,16,32,0.84)_0%,rgba(4,22,41,0.7)_36%,rgba(7,35,61,0.36)_63%,rgba(10,92,128,0.14)_100%)]"></div>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_74%_22%,rgba(56,189,248,0.15)_0%,transparent_42%),radial-gradient(circle_at_18%_86%,rgba(20,184,166,0.11)_0%,transparent_34%)]"></div>

          <div className={`${containerClass} relative z-10`}>
            <div className="max-w-full px-0">
              <p className="mb-3 font-['Space_Grotesk'] text-[0.82rem] font-bold uppercase tracking-[0.16em] text-white/85">
                SWASTIKA - RECYCLE TODAY, PROTECT TOMORROW
              </p>
              <h1 className="mb-6 max-w-212.5 text-[clamp(2.4rem,5vw,4.2rem)] leading-[1.15] font-bold text-white drop-shadow-[0_8px_20px_rgba(2,8,18,0.6)]">
                Give Your E-Waste a Second Life - Recycle for a Sustainable
                Tomorrow!
              </h1>
              <p className="mb-8 max-w-screen-sm text-[1.15rem] leading-[1.7] text-white/95 drop-shadow-[0_6px_14px_rgba(2,8,18,0.55)]">
                Responsible E-Waste Management for a Greener Future!
              </p>
              <p className="mb-4 max-w-screen-md text-[1rem] leading-[1.72] text-white/92 drop-shadow-[0_6px_14px_rgba(2,8,18,0.5)]">
                At Swastika e-Waste, we are dedicated to addressing the
                growing challenge of electronic waste by providing safe,
                efficient, and environmentally responsible recycling solutions.
                As one of India&apos;s leading e-waste management companies, we
                believe that every discarded electronic device holds the
                potential to be repurposed or recycled.
              </p>
              <p className="mb-8 max-w-screen-md text-[0.96rem] leading-[1.7] text-white/85 drop-shadow-[0_6px_14px_rgba(2,8,18,0.5)]">
                According to ASSOCHAM, an industrial body in India, the
                Compound Annual Growth Rate (CAGR) of electronic waste is 30%.
                With changing consumer behavior and rapid economic growth,
                ASSOCHAM estimates that India will generate 5.2 million tonnes
                of e-waste by 2020.
              </p>
              <div className="flex flex-wrap gap-4 items-center max-[680px]:flex-col">
                <a
                  href="#contact"
                  className={`${primaryButtonClass} px-[1.8rem] py-[0.95rem] text-[0.98rem] shadow-[0_14px_34px_rgba(43,168,74,0.34)] hover:shadow-[0_18px_42px_rgba(43,168,74,0.44)]`}
                >
                  Get a Free Quote
                </a>
                <a
                  href="#about"
                  className={`${secondaryButtonClass} px-[1.8rem] py-[0.95rem] text-[0.98rem]`}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className={`${sectionClass} reveal`}>
          <div className={`${containerClass} grid grid-cols-2 items-center gap-9.5 max-[920px]:grid-cols-1`}>
            <div>
              <p className={sectionKickerClass}>About Swastika e-Waste</p>
              <h2 className={sectionTitleClass}>
                Safe, Efficient, and Environmentally Responsible Recycling
              </h2>
              <p className={bodyTextClass}>
                At Swastika e-Waste, we are dedicated to addressing the growing
                challenge of electronic waste by providing safe, efficient, and
                environmentally responsible recycling solutions. As one of
                India&apos;s leading e-waste management companies, we believe
                that every discarded electronic device holds the potential to be
                repurposed or recycled.
              </p>
              <p className={bodyTextClass}>
                According to ASSOCHAM, the CAGR of electronic waste is 30%.
                India will generate 5.2 million tonnes of e-waste by 2020.
              </p>
            </div>

            <img
              className="block min-h-90 w-full rounded-[18px] border border-[rgba(111,147,196,0.24)] object-cover shadow-[0_16px_38px_rgba(18,39,74,0.1)]"
              src={aboutImage}
              alt="Workers sorting electronic waste for recycling"
              loading="lazy"
              onError={handleImageError}
            />
          </div>
        </section>

        <section className={`${sectionClass} reveal bg-linear-to-b from-slate-50/50 to-white`}>
          <div className={containerClass}>
            <div className="grid grid-cols-4 gap-8 max-[920px]:grid-cols-2 max-[680px]:grid-cols-1">
              {categoryTiles.map((tile) => (
                <article
                  key={tile.title}
                  className="group text-center transition-all duration-300 hover:-translate-y-3 cursor-pointer"
                >
                  <div className="mb-6 flex justify-center">
                    <img
                      className="mx-auto h-20 w-20 object-contain transition-transform duration-300 group-hover:scale-110"
                      src={tile.image}
                      alt={tile.title}
                      loading="lazy"
                      onError={handleImageError}
                    />
                  </div>
                  <h3 className="mb-3 font-['Space_Grotesk'] text-[1.1rem] font-semibold text-[#0f172a] group-hover:text-lime-600 transition-colors">
                    {tile.title}
                  </h3>
                  <p className="text-[0.93rem] leading-[1.6] text-[#475569]">{tile.tagline}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${sectionClass} reveal`}>
          <div className={containerClass}>
            <h2 className={`${sectionTitleClass} mb-8`}>We are Leading Recycling Solutions</h2>
            <article className="grid overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg max-[920px]:grid-cols-1 min-[921px]:grid-cols-[1fr_1.08fr]">
              <img
                className="block h-full w-full rounded-none object-cover max-[920px]:min-h-67.5"
                src={blogImage}
                alt="Broken devices ready for recycling"
                loading="lazy"
                onError={handleImageError}
              />
              <div className="px-8 py-9 bg-linear-to-br from-white to-slate-50/50">
                <h3 className="mb-3 font-['Space_Grotesk'] text-[1.35rem] font-semibold leading-[1.24] text-[#0f172a]">
                  Broken Devices? Don&apos;t Dump &apos;Em - Recycle for a
                  Greener Future!
                </h3>
                <p className={`${bodyTextClass} mb-4`}>
                  Did you know that millions of broken phones, laptops, and
                  gadgets are just sitting in drawers or, worse, ending up in
                  landfills each year? We often don&apos;t think twice about
                  tossing old electronics, but the impact is huge.
                </p>
                <p className={`${bodyTextClass} mb-4`}>
                  When these devices are dumped, they release toxic chemicals
                  into the environment. Swastika helps you dispose of old
                  devices responsibly while recovering valuable materials.
                </p>
                <a href="#services" className={`${primaryButtonClass} ${smallButtonClass}`}>
                  Read More
                </a>
              </div>
            </article>
          </div>
        </section>

        <section id="services" className={`${sectionClass} reveal bg-linear-to-b from-white to-slate-50/50`}>
          <div className={containerClass}>
            <div className="mx-auto mb-12 max-w-190 text-center">
              <p className={sectionKickerClass}>Services</p>
              <h2 className={sectionTitleClass}>Services</h2>
              <p className={bodyTextClass}>
                Broken Devices? Don&apos;t Dump &apos;Em - Recycle for a Greener
                Future! We offer a variety of IT asset disposition (ITAD) and
                e-waste recycling services ranging from Data Sanitization, Asset
                Recovery to Refurbishing and Safe Disposal.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 max-[1080px]:grid-cols-2 max-[680px]:grid-cols-1">
              {serviceCards.map((card) => (
                <article
                  key={card.title}
                  className="group overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-lg"
                >
                  <div className="relative h-48 overflow-hidden rounded-xl mb-4">
                    <img
                      className="block h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      onError={handleImageError}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <h3 className="mb-2 font-['Space_Grotesk'] text-[1.1rem] font-semibold text-[#0f172a] group-hover:text-lime-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="mb-4 text-[0.94rem] leading-[1.65] text-[#475569]">{card.text}</p>
                    <a
                      href="#contact"
                      className="font-['Space_Grotesk'] text-[0.92rem] font-bold text-lime-600 transition-colors hover:text-lime-700 inline-flex items-center gap-2 group/link"
                    >
                      Read More
                      <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                        <i className="fa-solid fa-arrow-right text-[0.75rem]"></i>
                      </span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="reveal overflow-hidden bg-linear-to-r from-lime-50/50 to-lime-50/50 py-10">
          <div className={`${containerClass} mb-8 text-center`}>
            <p className={sectionKickerClass}>Accepted Items</p>
            <h2 className={`${sectionTitleClass} mb-3`}>What We Accept</h2>
            <p className="m-0 text-[1rem] leading-[1.7] text-[#475569]">
              We recycle a wide range of electronic devices, including:
            </p>
          </div>
          <div className="w-full overflow-hidden">
            <div className="marquee-track flex w-max items-center gap-5">
              {[...acceptedItems, ...acceptedItems].map((item, index) => (
                <div
                  className="min-w-40 rounded-lg bg-white px-5 py-4 text-[#0f172a] transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center gap-3"
                  key={`${item.label}-${index}`}
                >
                  <i className={`${item.icon} block text-[1.4rem] text-[#2ba84a]`} aria-hidden="true"></i>
                  <span className="block w-full text-center font-['Space_Grotesk'] text-[0.95rem] font-medium leading-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`${sectionClass} reveal`}>
          <div className={`${containerClass} grid grid-cols-2 items-start gap-7.5 max-[920px]:grid-cols-1`}>
            <div>
              <p className={sectionKickerClass}>Why Choose Swastika</p>
              <h2 className={sectionTitleClass}>How Can We Help You Today?</h2>
              <p className={bodyTextClass}>
                India is the fifth largest electronic waste producer in the
                world. Approximately 2 million tonnes of e-waste are generated
                annually, and an undisclosed amount of e-waste is imported from
                other countries around the world. Swastika provides a
                comprehensive, end-to-end solution to responsibly manage this
                challenge.
              </p>
            </div>

            <div
              className="grid grid-cols-2 gap-6 max-[680px]:grid-cols-1"
              ref={statsRef}
            >
              {statCards.map((stat, index) => (
                <article
                  key={stat.label}
                  className="rounded-lg p-6 bg-linear-to-br from-lime-50/50 to-lime-50/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-md"
                >
                  <i className={`${stat.icon} mb-4 text-[1.4rem] text-lime-600`} aria-hidden="true"></i>
                  <h3 className="mb-2 font-['Space_Grotesk'] text-[1.5rem] font-semibold text-lime-600">
                    {counterValues[index].toFixed(stat.decimals)}
                    {stat.suffix}
                  </h3>
                  <p className="m-0 text-[0.9rem] leading-normal text-[#475569]">{stat.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${sectionClass} ${sectionLightClass} reveal`}>
          <div className={`${containerClass} grid grid-cols-2 items-center gap-9.5 max-[920px]:grid-cols-1`}>
            <img
              className="block min-h-90 w-full rounded-[18px] border border-[rgba(111,147,196,0.24)] object-cover shadow-[0_16px_38px_rgba(18,39,74,0.1)]"
              src={cablesImage}
              alt="Colorful cables and wires ready for recycling"
              loading="lazy"
              onError={handleImageError}
            />

            <div>
              <p className={sectionKickerClass}>Cables Recycling</p>
              <h2 className={sectionTitleClass}>Cables Recycling</h2>
              <p className={bodyTextClass}>
                Cables, including those used in electrical,
                telecommunications, and electronic devices, often contain
                valuable metals like copper, aluminum, and other components
                that can be recycled for reuse.
              </p>
              <p className="mb-2 font-['Space_Grotesk'] text-[0.94rem] font-semibold text-[#0f172a]">
                Types of cables we recycle:
              </p>
              <ul className="custom-list">
                <li>
                  <strong>Copper Cables:</strong> Found in most electrical
                  wiring, telecom cables, and electronic devices.
                </li>
                <li>
                  <strong>Aluminum Cables:</strong> Common in power
                  transmission lines, some electrical wiring, and
                  telecommunication cables.
                </li>
                <li>
                  <strong>Fiber Optic Cables:</strong> Used for high-speed
                  internet and communication; contain glass and sometimes
                  metals.
                </li>
                <li>
                  <strong>Coaxial Cables:</strong> Used in TV and internet
                  connections; contain a mixture of copper, aluminum, and
                  plastic.
                </li>
                <li>
                  <strong>Power Cords:</strong> Found in household appliances
                  and electronics; recycled for copper and plastic content.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className={`${sectionClass} reveal`}>
          <div className={`${containerClass} grid grid-cols-2 items-center gap-9.5 max-[920px]:grid-cols-1`}>
            <img
              className="block min-h-90 w-full rounded-[18px] border border-[rgba(111,147,196,0.24)] object-cover shadow-[0_16px_38px_rgba(18,39,74,0.1)] min-[921px]:order-2"
              src={doorRecyclingImage}
              alt="Door to door recycling pickup van"
              loading="lazy"
              onError={handleImageError}
            />

            <div className="min-[921px]:order-1">
              <p className={sectionKickerClass}>Door to Door Recycling</p>
              <h2 className={sectionTitleClass}>Door to Door Recycling</h2>
              <p className={bodyTextClass}>
                This service is offered as part of our effort to reduce waste
                and promote recycling directly from your premises.
              </p>
              <p className="mb-2 font-['Space_Grotesk'] text-[0.94rem] font-semibold text-[#0f172a]">
                We collect:
              </p>
              <ul className="custom-list">
                <li>
                  <strong>Paper:</strong> Newspapers, magazines, office paper,
                  cardboard boxes.
                </li>
                <li>
                  <strong>Plastic:</strong> Bottles, containers, bags, and
                  other plastic items.
                </li>
                <li>
                  <strong>Metal:</strong> Aluminum cans, steel cans, and other
                  metal containers.
                </li>
                <li>
                  <strong>Glass:</strong> Bottles, jars, and other glass
                  containers.
                </li>
                <li>
                  <strong>Electronics:</strong> Old phones, computers, cables,
                  and small devices.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          className="reveal bg-[#102742] bg-cover bg-center py-25.5"
          style={{
            backgroundImage: `linear-gradient(128deg, rgba(11, 32, 56, 0.78), rgba(15, 108, 101, 0.74)), url(${corporateBackgroundImage})`,
          }}
        >
          <div className={`${containerClass} mx-auto max-w-195 text-center`}>
            <p className={`${sectionKickerClass} text-[#f1f9ff]`}>Trusted ITAD Partner</p>
            <h2 className={`${sectionTitleClass} text-[#f1f9ff]`}>Corporate and Government Offices</h2>
            <p className={`${bodyTextClass} text-[#f1f9ff]`}>
              From small businesses to large corporations, government offices,
              and healthcare centers, the disposition of IT equipment can be
              complicated and risky. Workstations to large data centers,
              medical equipment and all their replacement parts, handheld
              devices, smartphones, and any other IT equipment being
              decommissioned can pose data security risks and environmental
              hazards.
            </p>
            <p className={`${bodyTextClass} text-[#f1f9ff]`}>
              Our one-stop, full-service IT asset disposition and recovery
              helps our clients through strict data security protocols and full
              compliance with all environmental regulations.
            </p>
            <a href="#contact" className={primaryButtonClass}>
              Contact Us Today
            </a>
          </div>
        </section>

        <section className="reveal bg-[linear-gradient(125deg,#f59e0b_0%,#f43f5e_100%)] py-13.5">
          <div className={`${containerClass} flex items-center justify-between gap-4.5 max-[1080px]:flex-col max-[1080px]:text-center`}>
            <h2 className="m-0 max-w-222.5 font-['Space_Grotesk'] text-[clamp(1.2rem,2.5vw,1.86rem)] font-semibold leading-[1.2] text-[#fff7ef]">
              Don&apos;t Trash It, Recycle It! Turn Your Old Electronics into a
              Greener Future - Start Recycling Today!
            </h2>
            <a href="#contact" className={primaryButtonClass}>
              Send Enquiry
            </a>
          </div>
        </section>

        <section id="process" className={`${sectionClass} ${sectionLightClass} reveal`}>
          <div className={containerClass}>
            <div className="mx-auto mb-8.5 max-w-190 text-center">
              <p className={sectionKickerClass}>Our Process</p>
              <h2 className={sectionTitleClass}>Our Process</h2>
            </div>

            <div className="relative grid grid-cols-5 gap-4.5 max-[1080px]:grid-cols-2 max-[680px]:grid-cols-1">
              <div className="pointer-events-none absolute left-[9%] right-[9%] top-6.75 h-0.75 bg-[linear-gradient(90deg,rgba(20,184,166,0.46),rgba(59,130,246,0.58))] max-[1080px]:hidden"></div>
              {processSteps.map((step, index) => (
                <article key={step.title} className="relative z-1 text-center">
                  <div className="mx-auto mb-3 grid h-13.5 w-13.5 place-items-center rounded-full border-4 border-[#d6fbe4] bg-[#25D366] font-['Space_Grotesk'] text-base font-bold text-white shadow-[0_10px_22px_rgba(37,211,102,0.32)]">
                    {index + 1}
                  </div>
                  <h3 className="mb-2.5 font-['Space_Grotesk'] text-[1.03rem] font-semibold text-[#152439]">
                    {step.title}
                  </h3>
                  <p className="m-0 text-[0.9rem] leading-[1.6] text-[#52627a]">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className={`${sectionClass} reveal`}>
          <div className={`${containerClass} grid grid-cols-[0.92fr_1.08fr] gap-8 max-[920px]:grid-cols-1`}>
            <div className="rounded-2xl p-8 bg-linear-to-br from-lime-50/50 to-lime-50/30">
              <p className={sectionKickerClass}>Contact</p>
              <h2 className={sectionTitleClass}>Contact Us</h2>
              <p className={bodyTextClass}>
                Mail us or call us for pickup scheduling, compliance support,
                and enterprise e-waste lifecycle planning.
              </p>

              <div className="my-6 space-y-3">
                <p className="inline-flex items-center gap-3 text-[0.95rem] font-semibold text-[#0f172a]">
                  <i className="fa-regular fa-envelope text-lime-600 text-[1.1rem]" aria-hidden="true"></i>
                  info@swastika.co.in
                </p>
                <p className="inline-flex items-center gap-3 text-[0.95rem] font-semibold text-[#0f172a]">
                  <i className="fa-regular fa-envelope text-lime-600 text-[1.1rem]" aria-hidden="true"></i>
                  sathish.s@swastika.co.in
                </p>
                <p className="inline-flex items-center gap-3 text-[0.95rem] font-semibold text-[#0f172a]">
                  <i className="fa-solid fa-phone text-lime-600 text-[1.1rem]" aria-hidden="true"></i>
                  080-4000 0004
                </p>
              </div>

              <iframe
                className="min-h-55 w-full rounded-xl border-0"
                title="Swastika location map"
                src="https://maps.google.com/maps?q=Bengaluru%20India&t=&z=11&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
              ></iframe>
            </div>

            <form
              className="rounded-2xl p-8 bg-linear-to-br from-white to-slate-50/50"
              onSubmit={handleSubmit}
            >
              <div className="mb-6 grid grid-cols-2 gap-6 max-[680px]:grid-cols-1">
                <input
                  className="w-full bg-transparent px-0 py-3 text-[0.95rem] font-medium text-[#0f172a] border-0 border-b-2 border-b-slate-300 outline-0 placeholder:text-[#cbd5e1] transition-all duration-200 focus:border-b-lime-600 focus:bg-lime-50/30 focus:px-3 focus:py-3"
                  type="text"
                  placeholder="Full Name"
                  required
                />
                <input
                  className="w-full bg-transparent px-0 py-3 text-[0.95rem] font-medium text-[#0f172a] border-0 border-b-2 border-b-slate-300 outline-0 placeholder:text-[#cbd5e1] transition-all duration-200 focus:border-b-lime-600 focus:bg-lime-50/30 focus:px-3 focus:py-3"
                  type="text"
                  placeholder="Company Name"
                  required
                />
                <input
                  className="w-full bg-transparent px-0 py-3 text-[0.95rem] font-medium text-[#0f172a] border-0 border-b-2 border-b-slate-300 outline-0 placeholder:text-[#cbd5e1] transition-all duration-200 focus:border-b-lime-600 focus:bg-lime-50/30 focus:px-3 focus:py-3"
                  type="email"
                  placeholder="Email Address"
                  required
                />
                <input
                  className="w-full bg-transparent px-0 py-3 text-[0.95rem] font-medium text-[#0f172a] border-0 border-b-2 border-b-slate-300 outline-0 placeholder:text-[#cbd5e1] transition-all duration-200 focus:border-b-lime-600 focus:bg-lime-50/30 focus:px-3 focus:py-3"
                  type="tel"
                  placeholder="Phone Number"
                  required
                />
                <select
                  className="col-span-2 w-full bg-transparent px-0 py-3 text-[0.95rem] font-medium text-[#0f172a] border-0 border-b-2 border-b-slate-300 outline-0 transition-all duration-200 focus:border-b-lime-600 focus:bg-lime-50/30 focus:px-3 focus:py-3 max-[680px]:col-span-1"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Type of Waste / Service Required
                  </option>
                  <option>Electrical & Electronic</option>
                  <option>Hard Disk Shredding</option>
                  <option>IT Asset Disposition</option>
                  <option>Batteries</option>
                  <option>Cables Recycling</option>
                  <option>Door to Door Recycling</option>
                </select>
                <textarea
                  className="col-span-2 w-full bg-transparent px-0 py-3 text-[0.95rem] font-medium text-[#0f172a] border-0 border-b-2 border-b-slate-300 outline-0 placeholder:text-[#cbd5e1] transition-all duration-200 focus:border-b-lime-600 focus:bg-lime-50/30 focus:px-3 focus:py-3 max-[680px]:col-span-1"
                  placeholder="Message"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className={primaryButtonClass}>
                Send Enquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="relative z-1 bg-linear-to-b from-slate-900 to-slate-950 px-0 pb-6 pt-14 text-white">
        <div className={`${containerClass} flex items-start justify-between gap-6 max-[680px]:flex-col`}>
          <div>
            <a
              href="#home"
              className="inline-flex items-center"
            >
              <img
                src={logoImage}
                alt="Swastika logo"
                className="h-14 w-auto object-contain"
                loading="lazy"
              />
            </a>
            <p className="mt-2.5 max-w-90 text-[1rem] leading-[1.7] text-white/70">
              Responsible e-waste management and ITAD services for a greener
              India.
            </p>
          </div>

          <ul className="m-0 flex list-none flex-wrap items-center gap-4 p-0">
            {navLinks.map((link) => (
              <li key={`footer-${link.href}`}>
                <a
                  href={link.href}
                  className="font-['Space_Grotesk'] text-[0.88rem] font-bold text-white/70 transition-colors hover:text-emerald-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-7 text-center text-[0.84rem] font-semibold leading-[1.4] text-white/50">
          ©2025 Swastika. All Rights Reserved | Designed & Developed By
          Adyasoft Technologies Inc.
        </p>
      </footer>

      <div
        className={`fixed right-5 z-1100 flex flex-col gap-2.5 transition-[bottom] duration-300 ${
          cookieAccepted ? "bottom-5" : "bottom-23.5"
        }`}
      >
        <button
          type="button"
          className={`grid h-12.5 w-12.5 place-items-center rounded-full bg-[#2ba84a] text-white shadow-[0_10px_20px_rgba(43,168,74,0.25)] transition-all duration-300 hover:bg-[#248f3f] hover:shadow-[0_14px_28px_rgba(43,168,74,0.35)] hover:-translate-y-1 active:scale-95 focus-visible:outline-2 focus-visible:outline-[#2ba84a] focus-visible:outline-offset-2 ${
            showScrollTop
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <i className="fa-solid fa-arrow-up" aria-hidden="true"></i>
        </button>

        <a
          className="grid h-12.5 w-12.5 place-items-center rounded-full border border-[#25D366] bg-[#25D366] text-[1.5rem] text-white shadow-[0_12px_25px_rgba(43,168,74,0.3)] transition-colors duration-300 hover:bg-[#248f3f]"
          href="https://wa.me/918040000004"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <i className="fa-brands fa-whatsapp text-white" aria-hidden="true"></i>
        </a>
      </div>

      {!cookieAccepted && (
        <div className="fixed inset-x-0 bottom-0 z-1080 flex items-center justify-between gap-4 border-t border-emerald-400/30 bg-linear-to-r from-slate-900 to-slate-800 backdrop-blur-md px-6 py-4 max-[680px]:items-start max-[680px]:flex-col">
          <p className="m-0 text-[0.9rem] text-white/80">
            We use cookies to improve your browsing experience and analyze site
            traffic.
          </p>
          <button
            type="button"
            className={`${primaryButtonClass} ${smallButtonClass}`}
            onClick={handleAcceptCookies}
          >
            Accept Cookies
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
