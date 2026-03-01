import { useEffect, useRef, useState } from "react";
import "./App.css";
import heroBackgroundImage from "./assets/photorealistic-earth-planet.jpg";
import aboutImage from "./assets/Electronics.webp";
import blogImage from "./assets/Mobile-Phone-Laptop-Battery-Recycling.jpg";
import serviceElectricalImage from "./assets/Electronics2.webp";
import serviceHardDiskImage from "./assets/hard-disk.jpg";
import serviceItadImage from "./assets/IT-Asset-Disposition.webp";
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
    text: "Hazardous materials like lead, mercury, and cadmium are safely dismantled and recycled through compliant processes.",
    image: serviceElectricalImage,
  },
  {
    title: "Hard Disk Shredding",
    text: "Certified data destruction with physical shredding ensures secure and irreversible disposal of storage devices.",
    image: serviceHardDiskImage,
  },
  {
    title: "IT Asset Disposition",
    text: "End-to-end ITAD services covering assessment, reuse, resale, and responsible recycling for maximum asset value.",
    image: serviceItadImage,
  },
  {
    title: "Batteries",
    text: "Safe battery collection and treatment prevents landfill contamination and recovers reusable material efficiently.",
    image: serviceBatteryImage,
  },
  {
    title: "Cables Recycling",
    text: "Recovery of copper, aluminum, and other valuable materials from all common industrial and consumer cable types.",
    image: serviceCableImage,
  },
  {
    title: "Door to Door Recycling",
    text: "Convenient pickup of paper, plastic, metal, glass, and electronics from homes, campuses, and offices.",
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
    label: "Largest E-Waste Producer",
  },
  {
    icon: "fa-solid fa-recycle",
    value: 2,
    decimals: 0,
    suffix: "M Tonnes",
    label: "Annual Indian E-Waste",
  },
  {
    icon: "fa-solid fa-chart-line",
    value: 30,
    decimals: 0,
    suffix: "%",
    label: "CAGR Growth Rate",
  },
  {
    icon: "fa-solid fa-industry",
    value: 5.2,
    decimals: 1,
    suffix: "M Tonnes",
    label: "Projected by 2020",
  },
];

const processSteps = [
  {
    title: "Collection",
    text: "Scheduled pickup from homes, institutions, and businesses.",
  },
  {
    title: "Sorting & Assessment",
    text: "Devices are sorted and assessed for reuse, refurbishment, or recovery.",
  },
  {
    title: "Data Destruction",
    text: "Secure destruction protocols protect sensitive business and personal data.",
  },
  {
    title: "Recycling & Disposal",
    text: "Certified treatment with eco-safe processing and controlled disposal.",
  },
  {
    title: "Reporting & Certification",
    text: "Transparent reporting and compliance-ready documentation for clients.",
  },
];

const heroHighlights = [
  {
    icon: "fa-solid fa-shield-halved",
    title: "Certified Security",
    text: "End-to-end secure data destruction for enterprise devices.",
  },
  {
    icon: "fa-solid fa-truck-fast",
    title: "Fast Collection",
    text: "Scheduled pickup for offices, campuses, and housing societies.",
  },
  {
    icon: "fa-solid fa-leaf",
    title: "Eco Compliance",
    text: "Audited recycling and documentation aligned with regulations.",
  },
];

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
    <div className="page">
      <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="top-bar">
          <div className="container top-bar-inner">
            <p>
              <i className="fa-regular fa-envelope" aria-hidden="true"></i>
              info@swastika.co.in
            </p>
            <span className="dot-separator">|</span>
            <p>
              <i className="fa-solid fa-phone" aria-hidden="true"></i>080-4000
              0004
            </p>
          </div>
        </div>

        <nav className="main-nav">
          <div className="container nav-inner">
            <a href="#home" className="logo" onClick={closeMenu}>
              <i className="fa-solid fa-recycle" aria-hidden="true"></i>
              SWASTIKA
            </a>

            <button
              type="button"
              className="menu-toggle"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              <i className="fa-solid fa-bars" aria-hidden="true"></i>
            </button>

            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={closeMenu}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn btn-primary btn-small nav-button">
              Enquiry
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="hero"
          style={{
            backgroundImage: `radial-gradient(circle at 14% 18%, rgba(14, 165, 233, 0.18) 0%, transparent 36%), radial-gradient(circle at 86% 80%, rgba(20, 184, 166, 0.16) 0%, transparent 34%), linear-gradient(132deg, rgba(8, 26, 52, 0.52) 0%, rgba(14, 53, 95, 0.42) 52%, rgba(15, 118, 110, 0.42) 100%), url(${heroBackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container hero-grid">
            <div className="hero-content">
              <p className="hero-tag">SWASTIKA - Recycle Today, Protect Tomorrow</p>
              <h1>
                Give Your E-Waste a Second Life - Recycle for a Sustainable Tomorrow!
              </h1>
              <p className="hero-subtitle">
                Responsible E-Waste Management for a Greener Future!
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary">
                  Get a Free Quote
                </a>
                <a href="#about" className="btn btn-outline">
                  Learn More
                </a>
              </div>
              <div className="hero-highlights">
                {heroHighlights.map((item) => (
                  <article key={item.title} className="hero-highlight-card">
                    <i className={item.icon} aria-hidden="true"></i>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section reveal">
          <div className="container split-grid">
            <div>
              <p className="section-kicker">About Swastika e-Waste</p>
              <h2>
                Safe, Efficient, and Environmentally Responsible Recycling
              </h2>
              <p>
                At Swastika e-Waste, we are dedicated to addressing the growing
                challenge of electronic waste by providing safe, efficient, and
                environmentally responsible recycling solutions. As one of
                India&apos;s leading e-waste management companies, we believe
                that every discarded electronic device holds the potential to be
                repurposed or recycled.
              </p>
              <p>
                According to ASSOCHAM, the CAGR of electronic waste is 30%.
                India will generate 5.2 million tonnes of e-waste by 2020.
              </p>
            </div>

            <img
              src={aboutImage}
              alt="Workers sorting electronic waste for recycling"
              loading="lazy"
              onError={handleImageError}
            />
          </div>
        </section>

        <section className="section section-light reveal">
          <div className="container">
            <div className="tile-grid">
              {categoryTiles.map((tile) => (
                <article key={tile.title} className="tile-card">
                  <img
                    src={tile.image}
                    alt={tile.title}
                    loading="lazy"
                    onError={handleImageError}
                  />
                  <h3>{tile.title}</h3>
                  <p>{tile.tagline}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <h2 className="left-title">We are Leading Recycling Solutions</h2>
            <article className="blog-card">
              <img
                src={blogImage}
                alt="Broken devices ready for recycling"
                loading="lazy"
                onError={handleImageError}
              />
              <div className="blog-content">
                <h3>
                  Broken Devices? Don&apos;t Dump &apos;Em - Recycle for a
                  Greener Future!
                </h3>
                <p>
                  Did you know that millions of broken phones, laptops, and
                  gadgets are just sitting in drawers or, worse, ending up in
                  landfills each year? Swastika helps you dispose of old devices
                  responsibly while recovering valuable materials.
                </p>
                <a href="#services" className="btn btn-primary btn-small">
                  Read More
                </a>
              </div>
            </article>
          </div>
        </section>

        <section id="services" className="section section-light reveal">
          <div className="container">
            <div className="center-head">
              <p className="section-kicker">Services</p>
              <h2>Services</h2>
              <p>
                Broken Devices? Don&apos;t Dump &apos;Em - Recycle for a Greener
                Future! We offer a variety of ITAD and e-waste recycling
                services.
              </p>
            </div>

            <div className="service-grid">
              {serviceCards.map((card) => (
                <article key={card.title} className="service-card">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    onError={handleImageError}
                  />
                  <div className="service-body">
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                    <a href="#contact">Read More</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="accepted-strip reveal">
          <p className="strip-title">Items Accepted by Swastika</p>
          <div className="marquee">
            <div className="marquee-track">
              {[...acceptedItems, ...acceptedItems].map((item, index) => (
                <div className="accepted-item" key={`${item.label}-${index}`}>
                  <i className={item.icon} aria-hidden="true"></i>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="container stats-layout">
            <div>
              <p className="section-kicker">Why Choose Swastika</p>
              <h2>How Can We Help You Today?</h2>
              <p>
                India is among the world&apos;s top e-waste producing countries,
                and organizations need trusted recycling partners to stay
                compliant and sustainable. Swastika provides audited, secure,
                and eco-conscious services that reduce environmental impact
                while improving material recovery.
              </p>
            </div>

            <div className="counter-grid" ref={statsRef}>
              {statCards.map((stat, index) => (
                <article key={stat.label} className="counter-card">
                  <i className={stat.icon} aria-hidden="true"></i>
                  <h3>
                    {counterValues[index].toFixed(stat.decimals)}
                    {stat.suffix}
                  </h3>
                  <p>{stat.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-light reveal">
          <div className="container split-grid">
            <img
              src={cablesImage}
              alt="Colorful cables and wires ready for recycling"
              loading="lazy"
              onError={handleImageError}
            />

            <div>
              <p className="section-kicker">Cables Recycling</p>
              <h2>Cables Recycling</h2>
              <p>
                Swastika recovers high-value metals from cable waste through
                controlled and environmentally responsible methods. Our
                collection and processing workflow handles mixed cable streams
                from industrial and commercial sources.
              </p>
              <ul className="custom-list">
                <li>Copper Cables</li>
                <li>Aluminum Cables</li>
                <li>Fiber Optic Cables</li>
                <li>Coaxial Cables</li>
                <li>Power Cords</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="container split-grid reverse">
            <img
              src={doorRecyclingImage}
              alt="Door to door recycling pickup van"
              loading="lazy"
              onError={handleImageError}
            />

            <div>
              <p className="section-kicker">Door to Door Recycling</p>
              <h2>Door to Door Recycling</h2>
              <p>
                Our door-to-door recycling service simplifies responsible
                disposal by collecting reusable and recyclable materials from
                your doorstep. We help homes, offices, and institutions keep
                waste out of landfills through scheduled pickups.
              </p>
              <ul className="custom-list">
                <li>Paper</li>
                <li>Plastic</li>
                <li>Metal</li>
                <li>Glass</li>
                <li>Electronics</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          className="corporate-section reveal"
          style={{
            backgroundImage: `linear-gradient(128deg, rgba(11, 32, 56, 0.78), rgba(15, 108, 101, 0.74)), url(${corporateBackgroundImage})`,
          }}
        >
          <div className="container corporate-content">
            <p className="section-kicker">Trusted ITAD Partner</p>
            <h2>Corporate and Government Offices</h2>
            <p>
              Outdated electronics can expose organizations to data risk and
              compliance penalties. Swastika supports corporate and government
              offices with secure IT asset disposition, audited destruction
              workflows, and regulatory-ready reporting.
            </p>
            <a href="#contact" className="btn btn-primary">
              Contact Us Today
            </a>
          </div>
        </section>

        <section className="cta-banner reveal">
          <div className="container cta-wrap">
            <h2>
              Don&apos;t Trash It, Recycle It! Turn Your Old Electronics into a
              Greener Future - Start Recycling Today!
            </h2>
            <a href="#contact" className="btn btn-primary">
              Send Enquiry
            </a>
          </div>
        </section>

        <section id="process" className="section section-light reveal">
          <div className="container">
            <div className="center-head">
              <p className="section-kicker">Our Process</p>
              <h2>Our Process</h2>
            </div>

            <div className="process-row">
              {processSteps.map((step, index) => (
                <article key={step.title} className="process-step">
                  <div className="step-number">{index + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section reveal">
          <div className="container contact-grid">
            <div className="contact-panel">
              <p className="section-kicker">Contact</p>
              <h2>Let&apos;s Plan Your Recycling Program</h2>
              <p>
                Mail us or call us for pickup scheduling, compliance support,
                and enterprise e-waste lifecycle planning.
              </p>

              <div className="contact-list">
                <p>
                  <i className="fa-regular fa-envelope" aria-hidden="true"></i>
                  info@swastika.co.in
                </p>
                <p>
                  <i className="fa-solid fa-phone" aria-hidden="true"></i>
                  080-4000 0004
                </p>
              </div>

              <iframe
                title="Swastika location map"
                src="https://maps.google.com/maps?q=Bengaluru%20India&t=&z=11&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
              ></iframe>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <input type="text" placeholder="Full Name" required />
                <input type="text" placeholder="Company Name" required />
                <input type="email" placeholder="Email Address" required />
                <input type="tel" placeholder="Phone Number" required />
                <select defaultValue="" required>
                  <option value="" disabled>
                    Service Required
                  </option>
                  <option>Electrical & Electronic</option>
                  <option>Hard Disk Shredding</option>
                  <option>IT Asset Disposition</option>
                  <option>Batteries</option>
                  <option>Cables Recycling</option>
                  <option>Door to Door Recycling</option>
                </select>
                <textarea placeholder="Message" rows="4" required></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Enquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <div>
            <a href="#home" className="logo">
              <i className="fa-solid fa-recycle" aria-hidden="true"></i>
              SWASTIKA
            </a>
            <p className="footer-tag">
              Responsible e-waste management and ITAD services for a greener
              India.
            </p>
          </div>

          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={`footer-${link.href}`}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <p className="footer-copy">
          ©2025 Swastika. All Rights Reserved | Designed & Developed By
          Adyasoft Technologies Inc.
        </p>
      </footer>

      <div className={`floating-actions ${cookieAccepted ? "" : "offset"}`}>
        <button
          type="button"
          className={`scroll-top ${showScrollTop ? "show" : ""}`}
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <i className="fa-solid fa-arrow-up" aria-hidden="true"></i>
        </button>

        <a
          className="whatsapp-button"
          href="https://wa.me/918040000004"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
        </a>
      </div>

      {!cookieAccepted && (
        <div className="cookie-banner">
          <p>
            We use cookies to improve your browsing experience and analyze site
            traffic.
          </p>
          <button
            type="button"
            className="btn btn-primary btn-small"
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
