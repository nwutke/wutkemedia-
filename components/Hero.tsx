import { CoverImage } from "@/components/CoverImage";

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="home-heading">
      <div className="hero-copy">
        <div className="eyebrow">Vancouver Island · Creative studio</div>
        <h1 id="home-heading">
          Good ideas.
          <br />
          Made
          <br />
          <span>visible.</span>
        </h1>
        <p>
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
        <div className="hero-bottom">Wutke Media&nbsp;&nbsp;/&nbsp;&nbsp;Nicholas Wutke</div>
      </div>
      <div className="hero-image">
        <CoverImage
          src="/images/portfolio-7.jpg"
          alt="Kitchen interior photographed by Nicholas Wutke"
          sizes="(max-width: 800px) 100vw, 55vw"
          priority
        />
        <div className="photo-note">
          <span>A different perspective.</span>
          <span>Photography by Nick ↗</span>
        </div>
      </div>
    </section>
  );
}
