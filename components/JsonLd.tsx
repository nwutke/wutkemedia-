import { description, realEstatePrices, studio } from "@/lib/content";
import { getSiteUrl } from "@/lib/site-url";

export function JsonLd() {
  const siteUrl = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: studio.name,
    description,
    url: siteUrl,
    image: `${siteUrl}/images/portfolio-7.jpg`,
    telephone: "+1-780-690-8201",
    email: studio.email,
    founder: {
      "@type": "Person",
      name: studio.person,
      url: studio.portfolioUrl,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Vancouver Island",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "BC",
      addressCountry: "CA",
    },
    sameAs: [studio.portfolioUrl],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Real estate media",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Listing Photo Package",
          description: "Standard and drone photos",
          price: String(realEstatePrices.package),
          priceCurrency: "CAD",
        },
        {
          "@type": "Offer",
          name: "Listing Photos",
          description: "Drone not included",
          price: String(realEstatePrices.listingPhotos),
          priceCurrency: "CAD",
        },
        {
          "@type": "Offer",
          name: "Drone Photos",
          price: String(realEstatePrices.drone),
          priceCurrency: "CAD",
        },
        {
          "@type": "Offer",
          name: "Floor Plans",
          price: String(realEstatePrices.floorPlans),
          priceCurrency: "CAD",
        },
        {
          "@type": "Offer",
          name: "Digital Staging",
          price: String(realEstatePrices.digitalStaging),
          priceCurrency: "CAD",
        },
        {
          "@type": "Offer",
          name: "Video Tour",
          description: "Starting at",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: String(realEstatePrices.videoTourFrom),
            priceCurrency: "CAD",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
