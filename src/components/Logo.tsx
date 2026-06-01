type LogoProps = {
  className?: string;
};

/**
 * Custom QFooD wordmark. The "Q" is a stylized QR/plate badge in lime,
 * followed by the wordmark. Scales with font-size of the parent.
 */
export default function Logo({ className = '' }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-extrabold tracking-tight ${className}`}
    >
      <span
        aria-hidden
        className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-lime text-ink-900 shadow-[0_0_24px_rgba(199,253,62,0.45)]"
      >
        {/* QR-style glyph */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="1" width="6" height="6" rx="1.5" fill="#0a0c08" />
          <rect x="13" y="1" width="6" height="6" rx="1.5" fill="#0a0c08" />
          <rect x="1" y="13" width="6" height="6" rx="1.5" fill="#0a0c08" />
          <rect x="3" y="3" width="2" height="2" fill="#c7fd3e" />
          <rect x="15" y="3" width="2" height="2" fill="#c7fd3e" />
          <rect x="3" y="15" width="2" height="2" fill="#c7fd3e" />
          <rect x="13" y="13" width="2.5" height="2.5" rx="0.5" fill="#0a0c08" />
          <rect x="16.5" y="13" width="2.5" height="2.5" rx="0.5" fill="#0a0c08" />
          <rect x="13" y="16.5" width="2.5" height="2.5" rx="0.5" fill="#0a0c08" />
          <rect x="16.5" y="16.5" width="2.5" height="2.5" rx="0.5" fill="#0a0c08" />
          <circle cx="10" cy="10" r="1.6" fill="#0a0c08" />
        </svg>
      </span>
      <span className="text-xl leading-none text-white">
        QFoo<span className="text-lime">D</span>
      </span>
    </span>
  );
}
