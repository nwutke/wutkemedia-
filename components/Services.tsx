import { Fragment } from "react";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section className="band services" id="services" aria-labelledby="services-heading">
      <div className="wrap services-layout reveal">
        <div className="services-intro">
          <p className="eyebrow">01 / What I do</p>
          <h2 id="services-heading">
            Your ideas. Your brand.
            <br />
            <em>One creative partner.</em>
          </h2>
          <p>
            For small businesses, growing brands, independent professionals and
            real estate agents. Let’s make something that feels like you.
          </p>
        </div>
        <ul className="service-list">
          {services.map((service) => {
            const [index, kicker] = service.number.split(" / ");
            return (
              <li key={service.number}>
              <a className="service-row" href={service.href}>
                <span className="num">
                  {index}
                  <small>{kicker}</small>
                </span>
                <span className="service-copy">
                  <span className="service-title">
                    {service.lines.map((line, lineIndex) => (
                      <Fragment key={line}>
                        {lineIndex > 0 ? " " : null}
                        {line}
                      </Fragment>
                    ))}
                  </span>
                  <span className="service-body">{service.body}</span>
                </span>
                <span className="service-cta">{service.cta} ↗</span>
              </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
