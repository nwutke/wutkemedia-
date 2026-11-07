import { realEstatePrices } from "@/lib/content";

const rows = [
  {
    name: "Listing Photos",
    detail: "Drone not included",
    price: realEstatePrices.listingPhotos,
  },
  { name: "Drone Photos", price: realEstatePrices.drone },
  { name: "Floor Plans", price: realEstatePrices.floorPlans },
  { name: "Digital Staging", price: realEstatePrices.digitalStaging },
] as const;

export function Pricing() {
  return (
    <section className="band pricing" id="pricing" aria-labelledby="pricing-heading">
      <div className="pricing-glow" aria-hidden="true" />
      <div className="wrap price-layout reveal">
        <div className="price-intro">
          <p className="eyebrow">02 / Real Estate Media pricing</p>
          <h2 className="price-title" id="pricing-heading">
            Make your
            <br />
            listing
            <br />
            stand out.
          </h2>
          <p>Choose the media you need for your next listing.</p>
          <a className="button" href="#contact">
            Let&apos;s plan your shoot
          </a>
        </div>
        <div className="rate-card" aria-label="Real estate media prices">
          <div className="rate-feature">
            <div>
              <h3>Listing Photo Package</h3>
              <p>Standard and drone photos</p>
            </div>
            <strong>${realEstatePrices.package}</strong>
          </div>
          {rows.map((row) => (
            <div className="rate-row" key={row.name}>
              <span className="rate-name">
                <span>
                  {row.name}
                  {"detail" in row ? <small>{row.detail}</small> : null}
                </span>
              </span>
              <strong>${row.price}</strong>
            </div>
          ))}
          <div className="rate-row">
            <span className="rate-name">Video Tour</span>
            <strong>
              <small>Starting at</small>${realEstatePrices.videoTourFrom}
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
