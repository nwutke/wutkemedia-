import Image from "next/image";

type CoverImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
};

export function CoverImage({
  src,
  alt,
  sizes,
  priority = false,
}: CoverImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      style={{ objectFit: "cover" }}
    />
  );
}
