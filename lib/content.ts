export const studio = {
  name: "Wutke Media",
  person: "Nicholas Wutke",
  phoneDisplay: "780-690-8201",
  phoneHref: "tel:+17806908201",
  email: "nicholaswutke@gmail.com",
  emailHref: "mailto:nicholaswutke@gmail.com",
  location: "Vancouver Island, BC",
  portfolioUrl: "https://zlist.ca/nicholaswutke/portfolio",
  exampleSiteUrl: "https://www.manbirnarang.ca",
  exampleSiteHost: "manbirnarang.ca",
  copyright: "© 2026 Wutke Media · Vancouver Island, BC",
} as const;

export const description =
  "Wutke Media is Nicholas Wutke's creative studio on Vancouver Island, BC. Web design, graphic design, photography, video, social media, headshots, and real estate media.";

export const realEstatePrices = {
  package: 240,
  listingPhotos: 200,
  drone: 80,
  floorPlans: 50,
  digitalStaging: 60,
  videoTourFrom: 200,
} as const;

export const PROJECT_TYPES = [
  "Web design — contact for a quote",
  "Graphic design — contact for a quote",
  "Photo & video — contact for a quote",
  "Social media management — contact for a quote",
  "Headshots — contact for a quote",
  `Real Estate: Photo Package — $${realEstatePrices.package}`,
  `Real Estate: Listing Photos — $${realEstatePrices.listingPhotos}`,
  `Real Estate: Drone Photos — $${realEstatePrices.drone}`,
  `Real Estate: Floor Plans — $${realEstatePrices.floorPlans}`,
  `Real Estate: Digital Staging — $${realEstatePrices.digitalStaging}`,
  `Real Estate: Video Tour — from $${realEstatePrices.videoTourFrom}`,
  "Something else / let's talk",
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];

export const services = [
  {
    number: "01 / BUILD",
    lines: ["Web Design"],
    body: "Websites for businesses, professionals and personal brands. A home online that feels like you.",
    href: "#contact",
    cta: "Contact for a quote",
  },
  {
    number: "02 / SHAPE",
    lines: ["Graphic Design"],
    body: "Logos, branding, print materials and social graphics for a consistent visual identity.",
    href: "#contact",
    cta: "Contact for a quote",
  },
  {
    number: "03 / CAPTURE",
    lines: ["Photo & Video"],
    body: "Photography and video for your business, products, events and brand stories.",
    href: "#contact",
    cta: "Contact for a quote",
  },
  {
    number: "04 / CONNECT",
    lines: ["Social Media", "Management"],
    body: "Keep your business or personal brand present with social media management.",
    href: "#contact",
    cta: "Contact for a quote",
  },
  {
    number: "05 / INTRODUCE",
    lines: ["Headshots"],
    body: "A personal introduction for your website, professional profiles and marketing.",
    href: "#contact",
    cta: "Contact for a quote",
  },
  {
    number: "06 / SHOWCASE",
    lines: ["Real Estate Media"],
    body: "Listing photos, drone imagery, floor plans, digital staging and video tours.",
    href: "#pricing",
    cta: "Explore media pricing",
  },
] as const;

export const gallery = [
  {
    src: "/images/portfolio-8.jpg",
    alt: "Living room and fireplace from Nicholas Wutke's portfolio",
    caption: "Light & detail",
    index: "01",
    featured: true,
  },
  {
    src: "/images/portfolio-0.jpg",
    alt: "Exterior of a home photographed by Nicholas Wutke",
    caption: "Street-level perspective",
    index: "02",
    featured: false,
  },
  {
    src: "/images/portfolio-3.jpg",
    alt: "Aerial property photo by Nicholas Wutke",
    caption: "A view from above",
    index: "03",
    featured: false,
  },
  {
    src: "/images/portfolio-7.jpg",
    alt: "Kitchen interior from Nicholas Wutke's portfolio",
    caption: "Interior photography",
    index: "04",
    featured: false,
  },
  {
    src: "/images/portfolio-9.jpg",
    alt: "Bedroom photographed by Nicholas Wutke",
    caption: "The quiet details",
    index: "05",
    featured: false,
  },
] as const;

export const contactUnavailableMessage = `The contact form isn’t available right now. Email ${studio.email} or call ${studio.phoneDisplay} and Nick will get your message.`;

export const contactSendFailedMessage = `We couldn’t send that just now. Email ${studio.email} or call ${studio.phoneDisplay} and Nick will get your message.`;
