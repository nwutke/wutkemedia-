import Image from "next/image";

type LogoProps = {
  /** Preload the mark in the header. The footer copy can stay lazy. */
  priority?: boolean;
};

/**
 * Temporary Wutke Media lockup.
 *
 * The final logo is a brush-style black W and orange-red (#FF4422) M.
 * It is not available yet. To swap it in, replace `public/logo.svg`.
 * Keep a similar aspect ratio, or change the rendered size in
 * `.brandmark` in `app/globals.css`.
 *
 * Also update the favicon when the final mark arrives:
 * `app/icon.svg`, `app/favicon.ico`, and `app/apple-icon.png`.
 */
export function Logo({ priority = false }: LogoProps) {
  return (
    <>
      <Image
        className="brandmark"
        src="/logo.svg"
        alt=""
        width={56}
        height={26}
        priority={priority}
      />
      <span>
        WUTKE MEDIA
        <small>CREATIVE & MEDIA STUDIO</small>
      </span>
    </>
  );
}

export function BrandLink({ priority = false }: LogoProps) {
  return (
    <a className="brand" href="#home" aria-label="Wutke Media home">
      <Logo priority={priority} />
    </a>
  );
}
