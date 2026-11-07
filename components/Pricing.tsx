import { realEstatePrices } from "@/lib/content";

export function Pricing() {
  const prices = realEstatePrices;

  return (
    <section className="pricing" id="pricing" aria-labelledby="pricing-heading">
      <div className="wrap price-layout">
        <div className="price-intro">
          <div className="eyebrow">02 / Real Estate Media pricing</div>
          <h2 className="price-title" id="pricing-heading">
            MAKE YOUR
            <br />
            LISTING
            <br />
            STAND OUT.
          </h2>
          <p>Choose the media you need for your next listing.</p>
          <a className="button" href="#contact">
            Let&apos;s plan your shoot
          </a>
        </div>
        <div aria-label="Real estate media prices">
          <div className="price-feature">
            <div>
              <h3>Listing Photo Package</h3>
              <p>Standard and drone photos</p>
            </div>
            <strong>${prices.package}</strong>
          </div>
          <div className="price-row">
            <span>
              Listing Photos
              <small>Drone not included</small>
            </span>
            <strong>${prices.listingPhotos}</strong>
          </div>
          <div className="price-row">
            <span>Drone Photos</span>
            <strong>${prices.drone}</strong>
          </div>
          <div className="price-row">
            <span>Floor Plans</span>
            <strong>${prices.floorPlans}</strong>
          </div>
          <div className="price-row">
            <span>Digital Staging</span>
            <strong>${prices.digitalStaging}</strong>
          </div>
          <div className="price-row">
            <span>Video Tour</span>
            <strong>
              <small>Starting at</small>${prices.videoTourFrom}
            </strong>
          </div>
          <p className="price-foot">
            All other services — web design, graphic design, photo & video,
            social media management and headshots: Contact for a quote.
          </p>
        </div>
      </div>
    </section>
  );
}
