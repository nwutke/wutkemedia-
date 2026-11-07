"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "services", label: "Services", index: "01" },
  { id: "pricing", label: "Pricing", index: "02" },
  { id: "work", label: "Recent work", index: "03" },
  { id: "design", label: "Design", index: "04" },
  { id: "contact", label: "Contact", index: "05" },
];

export function SectionRail() {
  const [current, setCurrent] = useState(sections[0].id);

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setCurrent(visible.target.id);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.15, 0.4, 0.7] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="rail" aria-label="Section">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          aria-current={current === section.id ? "true" : undefined}
          aria-label={section.label}
        >
          {section.index}
        </a>
      ))}
    </nav>
  );
}
