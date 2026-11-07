import { CoverImage } from "@/components/CoverImage";
import { ExternalLink } from "@/components/ExternalLink";
import { gallery, studio } from "@/lib/content";

export function Work() {
  return (
    <section className="band work" id="work" aria-labelledby="work-heading">
      <div className="wrap">
        <div className="section-top reveal">
          <div>
            <p className="eyebrow">03 / Recent work</p>
            <h2 id="work-heading">
              A little of what <em>I create.</em>
            </h2>
          </div>
          <ExternalLink className="text-link" href={studio.portfolioUrl}>
            View the photography portfolio ↗
          </ExternalLink>
        </div>
        <div className="gallery reveal">
          {gallery.map((item, index) => (
            <figure key={item.index} className={`g${index + 1}`}>
              <div className="shot">
                <CoverImage
                  src={item.src}
                  alt={item.alt}
                  sizes={
                    item.featured
                      ? "(max-width: 800px) 100vw, 46vw"
                      : "(max-width: 800px) 100vw, 26vw"
                  }
                />
              </div>
              <figcaption>
                {item.caption} <span>{item.index}</span>
              </figcaption>
            </figure>
          ))}
          <figure className="work-placeholder g6">
            <div className="placeholder-art">
              <span>WEB / 01</span>
              <strong>
                Your next
                <br />
                digital chapter.
              </strong>
              <small>Web design work · Placeholder</small>
            </div>
            <figcaption>
              Web design <span>Coming to this gallery</span>
            </figcaption>
          </figure>
          <figure className="work-placeholder g7">
            <div className="placeholder-art graphic">
              <span>DESIGN / 02</span>
              <strong>
                Ideas with
                <br />
                an identity.
              </strong>
              <small>Graphic design work · Placeholder</small>
            </div>
            <figcaption>
              Graphic design <span>Coming to this gallery</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
