import { ExternalLink } from "@/components/ExternalLink";
import { studio } from "@/lib/content";

export function Design() {
  return (
    <section className="band design" id="design" aria-labelledby="design-heading">
      <div className="wrap design-grid reveal">
        <div>
          <p className="eyebrow">04 / Built around your business</p>
          <h2 id="design-heading">
            Web & graphic design
            <br />
            <em>for your business.</em>
          </h2>
          <p>
            From a first impression to a fully realised online presence.
            Websites and graphic design for businesses, professionals and
            personal brands — built around what makes you different.
          </p>
          <div className="tags">
            <span>Business websites</span>
            <span>Graphic design</span>
            <span>Social media</span>
          </div>
          <a className="button" href="#contact">
            Let&apos;s build your brand
          </a>
        </div>
        <div className="site-card">
          <div className="site-browser">
            <div className="browser-top">
              <span aria-hidden="true">● ● ●</span>
              <span>{studio.exampleSiteHost} ↗</span>
            </div>
            <div className="site-inside">
              <small>WEBSITE PROJECT</small>
              <h3>Manbir Narang</h3>
              <div className="bar" />
              <p>
                A real realtor website built by Nick.
                <br />
                Visit the live site to explore the project.
              </p>
            </div>
          </div>
          <div className="site-caption">
            <span>WEB DESIGN / REAL ESTATE</span>
            <ExternalLink href={studio.exampleSiteUrl}>View live site ↗</ExternalLink>
          </div>
          <p className="concept">
            Project title card — not a screenshot of the live site.
          </p>
        </div>
      </div>
    </section>
  );
}
