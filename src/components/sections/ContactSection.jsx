import { useState } from "react";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import ButtonLink from "../ui/ButtonLink";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import Icon from "../ui/Icon";

const initialFormState = {
  name: "",
  company: "",
  mobile: "",
  email: "",
  category: "",
  material: "",
  quantity: "",
  district: "",
  message: "",
};

function ContactSection({ company, categories, contact }) {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const lines = [
      "Tender Enquiry - Shree Varahi Global Enterprises",
      `Name: ${formData.name}`,
      `Firm: ${formData.company}`,
      `Mobile: ${formData.mobile}`,
      `Email: ${formData.email}`,
      `Category: ${formData.category}`,
      `Material: ${formData.material}`,
      `Quantity: ${formData.quantity}`,
      `District: ${formData.district}`,
      `Message: ${formData.message || "NA"}`,
    ];

    const encodedMessage = encodeURIComponent(lines.join("\n"));
    const whatsappUrl = `https://wa.me/91${company.mobileRaw}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="border-b border-[var(--c-border)] bg-[#eef4f9] py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <div className="rounded-2xl border border-[#18425f] bg-[#133a56] p-6 shadow-[var(--shadow-md)] sm:p-7">
            <SectionHeader eyebrow="Contact" title="Tender Enquiry" description={contact.formIntro} tone="light" />

            <div className="mt-6 space-y-3 rounded-xl border border-[#2a5978] bg-[#0f324b] p-5 text-sm text-[#c8d8e6]">
              <p className="inline-flex items-center">
                <Icon name="phone" className="mr-2 text-[0.95em] text-[#7fc5d1]" />
                <span className="font-semibold text-white">Mobile:</span>&nbsp;{company.mobile}
              </p>
              <p className="inline-flex items-center">
                <Icon name="mail" className="mr-2 text-[0.95em] text-[#7fc5d1]" />
                <span className="font-semibold text-white">Email:</span>&nbsp;{company.email}
              </p>
              <p className="inline-flex items-center">
                <Icon name="location" className="mr-2 text-[0.95em] text-[#7fc5d1]" />
                <span className="font-semibold text-white">Base Location:</span>&nbsp;{company.placeOfBusiness}
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <ButtonLink href={`tel:${company.mobileRaw}`} className="text-sm" variant="primary" icon="phone">
                Call Now
              </ButtonLink>
              <ButtonLink
                href={`https://wa.me/91${company.mobileRaw}`}
                variant="highlight"
                target="_blank"
                rel="noreferrer"
                className="text-sm"
                icon="whatsapp"
              >
                WhatsApp
              </ButtonLink>
            </div>

            <ImagePlaceholder altText={contact.mapPlaceholderAlt} label="Location/Map Image Space" className="mt-6" />
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-[var(--c-border)] bg-white p-6 shadow-[var(--shadow-md)] sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium text-[var(--c-body)]">
                Full Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1.5 w-full rounded-xl border border-[var(--c-border)] px-3.5 py-2.5 text-sm focus:border-[var(--c-primary)] focus:outline-none"
                />
              </label>
              <label className="text-sm font-medium text-[var(--c-body)]">
                Firm Name
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="mt-1.5 w-full rounded-xl border border-[var(--c-border)] px-3.5 py-2.5 text-sm focus:border-[var(--c-primary)] focus:outline-none"
                />
              </label>
              <label className="text-sm font-medium text-[var(--c-body)]">
                Mobile Number
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="mt-1.5 w-full rounded-xl border border-[var(--c-border)] px-3.5 py-2.5 text-sm focus:border-[var(--c-primary)] focus:outline-none"
                />
              </label>
              <label className="text-sm font-medium text-[var(--c-body)]">
                Email Address
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1.5 w-full rounded-xl border border-[var(--c-border)] px-3.5 py-2.5 text-sm focus:border-[var(--c-primary)] focus:outline-none"
                />
              </label>
              <label className="text-sm font-medium text-[var(--c-body)] sm:col-span-2">
                Tender Category
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="mt-1.5 w-full rounded-xl border border-[var(--c-border)] px-3.5 py-2.5 text-sm focus:border-[var(--c-primary)] focus:outline-none"
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.title}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </label>
              <label className="text-sm font-medium text-[var(--c-body)]">
                Material Name
                <input
                  type="text"
                  name="material"
                  value={formData.material}
                  onChange={handleChange}
                  required
                  className="mt-1.5 w-full rounded-xl border border-[var(--c-border)] px-3.5 py-2.5 text-sm focus:border-[var(--c-primary)] focus:outline-none"
                />
              </label>
              <label className="text-sm font-medium text-[var(--c-body)]">
                Approx Quantity
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  className="mt-1.5 w-full rounded-xl border border-[var(--c-border)] px-3.5 py-2.5 text-sm focus:border-[var(--c-primary)] focus:outline-none"
                />
              </label>
              <label className="text-sm font-medium text-[var(--c-body)] sm:col-span-2">
                District / Location
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                  className="mt-1.5 w-full rounded-xl border border-[var(--c-border)] px-3.5 py-2.5 text-sm focus:border-[var(--c-primary)] focus:outline-none"
                />
              </label>
              <label className="text-sm font-medium text-[var(--c-body)] sm:col-span-2">
                Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="mt-1.5 w-full rounded-xl border border-[var(--c-border)] px-3.5 py-2.5 text-sm focus:border-[var(--c-primary)] focus:outline-none"
                ></textarea>
              </label>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center rounded-xl border border-[var(--c-primary)] bg-[var(--c-primary)] px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-sm)] transition-colors hover:bg-[var(--c-primary-dark)]"
              >
                <Icon name="file" className="mr-2 text-[0.95em]" />
                Send Tender Enquiry
              </button>
              <a
                href={contact.tenderFormUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-xl border border-[var(--c-border-strong)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--c-ink)] transition-colors hover:bg-[var(--c-surface-alt)]"
              >
                <Icon name="whatsapp" className="mr-2 text-[0.95em] text-[#25D366]" />
                Open WhatsApp Directly
              </a>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}

export default ContactSection;
