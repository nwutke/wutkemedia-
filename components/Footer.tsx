import { ExternalLink } from "@/components/ExternalLink";
import { BrandLink } from "@/components/Logo";
import { studio } from "@/lib/content";

export function Footer() {
  return (
    <footer>
      <div className="wrap footer">
        <BrandLink />
        <small>{studio.copyright}</small>
        <div className="footer-links">
          <a href="#pricing">Pricing</a>
          <ExternalLink href={studio.portfolioUrl}>Portfolio</ExternalLink>
          <a href="#contact">Contact ↗</a>
        </div>
      </div>
    </footer>
  );
}
