import Image from "next/image";

const SIZES = {
  hero: "(max-width: 1024px) 100vw, 50vw",
  product: "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 42vw",
  section: "(max-width: 768px) 100vw, 85vw"
} as const;

const QUALITY = {
  hero: 92,
  product: 88,
  section: 86
} as const;

const ASPECT = {
  hero: "aspect-[16/11] md:aspect-[16/9]",
  product: "aspect-[16/10]",
  section: "aspect-[16/10]"
} as const;

const OBJECT_STYLE = {
  hero: "object-cover object-center contrast-[1.03] saturate-[1.02]",
  product: "object-contain object-center p-3",
  section: "object-cover object-center contrast-[1.03] saturate-[1.02]"
} as const;

type PremiumImageProps = {
  src: string;
  alt: string;
  variant: keyof typeof SIZES;
  priority?: boolean;
  className?: string;
};

/**
 * Full-bleed optimized image: higher encode quality, correct sizes, premium frame.
 */
export function PremiumImage({ src, alt, variant, priority, className = "" }: PremiumImageProps) {
  return (
    <div className={`premium-image-frame relative w-full overflow-hidden ${ASPECT[variant]} ${className}`}>
      <span className="media-orbit media-orbit-outer" aria-hidden />
      <span className="media-orbit media-orbit-inner" aria-hidden />
      <span className="media-orbit-dot media-orbit-dot-a" aria-hidden />
      <span className="media-orbit-dot media-orbit-dot-b" aria-hidden />
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={QUALITY[variant]}
        sizes={SIZES[variant]}
        className={OBJECT_STYLE[variant]}
      />
    </div>
  );
}
