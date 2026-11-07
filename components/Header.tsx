import { BrandLink } from "@/components/Logo";

export function Header() {
  return (
    <header>
      <nav className="nav" aria-label="Main navigation">
        <BrandLink priority />
        <div className="links">
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#work">Recent work</a>
          <a className="button" href="#contact">
            Start a project
          </a>
        </div>
      </nav>
    </header>
  );
}
