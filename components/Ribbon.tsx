function Asterisk() {
  return (
    <svg className="asterisk" viewBox="0 0 16 16" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7.15.4h1.7v4.55L12.6 1.2l1.2 1.2-3.75 3.75H15.6v1.7h-5.55l3.75 3.75-1.2 1.2-3.75-3.75V15.6h-1.7v-5.55L3.4 14.8l-1.2-1.2 3.75-3.75H.4V8.15h5.55L2.2 4.4l1.2-1.2 3.75 3.75V.4Z"
      />
    </svg>
  );
}

export function Ribbon() {
  return (
    <div className="ribbon">
      <span>Photography & video</span>
      <b aria-hidden="true">
        <Asterisk />
      </b>
      <span>Web design</span>
      <b aria-hidden="true">
        <Asterisk />
      </b>
      <span>Graphic design</span>
      <b aria-hidden="true">
        <Asterisk />
      </b>
      <span>Built around your brand</span>
    </div>
  );
}
