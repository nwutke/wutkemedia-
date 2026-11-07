const items = [
  "Photography & video",
  "Web design",
  "Graphic design",
  "Built around your brand",
];

function Group({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="marquee-group" aria-hidden={hidden ? true : undefined}>
      {items.map((item) => (
        <span key={item}>
          {item}
          <i aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

export function Ribbon() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <Group />
        <Group hidden />
      </div>
    </div>
  );
}
