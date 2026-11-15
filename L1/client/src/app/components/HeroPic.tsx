import { getImageProps } from "next/image";

// small gif data uri to eliminate unnecessary image load
const BLANK =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

type HeroPicProps = {
  src: string;
  width: number;
  height: number;
  showFrom?: number;
  showUntil?: number;
  className: string;
  priority?: boolean;
  unoptimized?: boolean;
};

export function HeroPic({
  src,
  width,
  height,
  showFrom,
  showUntil,
  className,
  priority = false,
  unoptimized = false,
}: HeroPicProps) {
  const { props } = getImageProps({
    src,
    alt: "",
    width,
    height,
    sizes: "100vw",
    loading: priority ? "eager" : "lazy",
    fetchPriority: priority ? "high" : "auto",
    unoptimized,
  });

  return (
    <picture>
      {showFrom !== undefined && (
        <source media={`(max-width: ${showFrom - 1}px)`} srcSet={BLANK} />
      )}
      {showUntil !== undefined && (
        <source media={`(min-width: ${showUntil}px)`} srcSet={BLANK} />
      )}
      <img {...props} className={className} />
    </picture>
  );
}



// <HeroPic
//         src="/hero_mobile_kuzhu_web.webp"
//         width={1080}
//         height={356}
//         showUntil={768}
//         priority
//         unoptimized
//         className="h-auto w-full object-cover object-center md:hidden absolute top-1/2 -translate-y-1/2 left-0 right-0"
//       />