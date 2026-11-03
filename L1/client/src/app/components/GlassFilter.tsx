export default function GlassFilters() {
  return (
    <svg className="absolute w-0 h-0 pointer-events-none opacity-0">
      <filter id="container-glass" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.008 0.008"
          numOctaves={2}
          seed={92}
          result="noise"
        />
        <feGaussianBlur in="noise" stdDeviation={0.02} result="blur" />
        <feDisplacementMap
          in="SourceGraphic"
          in2="blur"
          scale={77}
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  );
}
