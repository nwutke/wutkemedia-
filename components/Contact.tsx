import { ContactForm } from "@/components/ContactForm";
import { studio } from "@/lib/content";

export function Contact() {
  return (
    <section className="band contact" id="contact" aria-labelledby="contact-heading">
      <div className="wrap contact-grid reveal">
        <div className="contact-copy">
          <p className="eyebrow">05 / Let&apos;s create something</p>
          <h2 id="contact-heading">
            Your next idea
            <br />
            <em>starts here.</em>
          </h2>
          <p>
            A new website, a fresh look, photos or a bigger creative idea? Tell
            Nick what you have in mind.
          </p>
          <div className="contact-details">
            <a href={studio.phoneHref}>{studio.phoneDisplay} ↗</a>
            <a href={studio.emailHref}>{studio.email} ↗</a>
            <small>Based on Vancouver Island, BC</small>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
