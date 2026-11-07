import { BrandLink } from "@/components/Logo";
import { NavLinks } from "@/components/NavLinks";

export function Header() {
  return (
    <header>
      <nav className="nav" aria-label="Main navigation">
        <BrandLink priority />
        <NavLinks />
      </nav>
    </header>
  );
}
