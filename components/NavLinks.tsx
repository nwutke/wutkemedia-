"use client";

import { useRef } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#work", label: "Recent work" },
];

export function NavLinks() {
  const menuRef = useRef<HTMLDetailsElement>(null);

  function closeMenu() {
    if (menuRef.current) menuRef.current.open = false;
  }

  return (
    <div className="links">
      {links.map((link) => (
        <a key={link.href} className="desk-link" href={link.href}>
          {link.label}
        </a>
      ))}
      <details ref={menuRef} className="nav-menu">
        <summary>Menu</summary>
        <div>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="button menu-cta" href="#contact" onClick={closeMenu}>
            Start a project
          </a>
        </div>
      </details>
      <a className="button" href="#contact">
        Start a project
      </a>
    </div>
  );
}
