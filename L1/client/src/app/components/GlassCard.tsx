type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({ children, className = "" }: Props) {
  return (
    <div
      className={`relative isolate flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* filter layer: inherits radius, bleeds 1px outward to hide edge leaks */}
      <span
        aria-hidden
        className="
          absolute -inset-px -z-10 rounded-[inherit]
          backdrop-blur-xs
          [backdrop-filter:url(#container-glass)]
        "
      />

      {/* border layer: inherits radius */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-[inherit] border-2 border-white/25"
      />

      <div className="relative">{children}</div>
    </div>
  );
}
