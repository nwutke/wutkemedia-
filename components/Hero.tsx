import { CoverImage } from "@/components/CoverImage";

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="home-heading">
      <div className="hero-copy">
        <p className="eyebrow">Vancouver Island · Creative studio</p>
        <h1 id="home-heading">
          <span>Good ideas.</span>
          <span>Made</span>
          <span>
            <em>visible.</em>
          </span>
        </h1>
        <p className="lede">
          Photography, video, web and graphic design. Creative work for
          businesses, brands and people ready to stand out.
        </p>
        <div className="actions">
          <a className="button" href="#contact">
            Start a project
          </a>
          <a className="button outline" href="#services">
            Explore services
          </a>
        </div>
        <p className="hero-sign">Wutke Media&nbsp;&nbsp;/&nbsp;&nbsp;Nicholas Wutke</p>
      </div>
      <div className="hero-visual">
        <div className="hero-frame">
          <CoverImage
            src="/images/portfolio-7.jpg"
            alt="Kitchen interior photographed by Nicholas Wutke"
            sizes="(max-width: 800px) 100vw, 48vw"
            priority
          />
          <p className="photo-note">
            <span>A different perspective.</span>
            <span>Photography by Nick ↗</span>
          </p>
        </div>
      </div>
      <div className="scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
