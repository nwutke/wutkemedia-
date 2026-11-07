import { Fragment } from "react";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section className="wrap" id="services" aria-labelledby="services-heading">
      <div className="section-top">
        <div>
          <div className="eyebrow">01 / What I do</div>
          <h2 id="services-heading">
            Your ideas. Your brand.
            <br />
            One creative partner.
          </h2>
        </div>
        <p>
          For small businesses, growing brands, independent professionals and
          real estate agents. Let’s make something that feels like you.
        </p>
      </div>
      <div className="services">
        {services.map((service) => (
          <article className="service" key={service.number}>
            <span className="num">{service.number}</span>
            <h3>
              {service.lines.map((line, index) => (
                <Fragment key={line}>
                  {index > 0 ? <br /> : null}
                  {line}
                </Fragment>
              ))}
            </h3>
            <p>{service.body}</p>
            <a href={service.href}>{service.cta} ↗</a>
          </article>
        ))}
      </div>
    </section>
  );
}
