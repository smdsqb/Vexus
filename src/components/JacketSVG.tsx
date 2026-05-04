// Inline SVG illustrations for each product.
// Used as React components — no external image files needed.

interface JacketSVGProps {
  variant: "monza" | "silverstone" | "suzuka" | "imola";
  size?: number;
}

export default function JacketSVG({ variant, size = 200 }: JacketSVGProps) {
  const props = {
    viewBox: "0 0 300 360",
    width: size,
    xmlns: "http://www.w3.org/2000/svg",
  };

  if (variant === "monza") {
    return (
      <svg {...props}>
        {/* Body */}
        <path d="M90 60 L30 110 L18 180 L55 186 L55 330 L245 330 L245 186 L282 180 L270 110 L210 60 Q175 44 150 48 Q125 44 90 60Z" fill="#121212" stroke="#1e1e1e" strokeWidth="1.5" />
        {/* Sleeves */}
        <path d="M90 60 L30 110 L18 180 L55 186 L55 230 L80 200 L80 60Z" fill="#0e0e0e" stroke="#1a1a1a" strokeWidth="1" />
        <path d="M210 60 L270 110 L282 180 L245 186 L245 230 L220 200 L220 60Z" fill="#0e0e0e" stroke="#1a1a1a" strokeWidth="1" />
        {/* Red shoulder stripes */}
        <path d="M90 60 L30 110 L18 180 L55 186 L55 195 L80 165 L80 60Z" fill="#be3124" opacity="0.85" />
        <path d="M210 60 L270 110 L282 180 L245 186 L245 195 L220 165 L220 60Z" fill="#be3124" opacity="0.85" />
        {/* Collar */}
        <path d="M118 50 Q150 40 182 50 L186 62 Q150 54 114 62Z" fill="#1a1a1a" stroke="#252525" strokeWidth="1" />
        {/* Gold collar trim */}
        <path d="M118 50 Q150 40 182 50 L182 54 Q150 44 118 54Z" fill="#d4a843" opacity="0.8" />
        {/* Zipper */}
        <line x1="150" y1="62" x2="150" y2="330" stroke="#252525" strokeWidth="1.5" />
        {/* Chest pocket */}
        <rect x="162" y="100" width="48" height="36" fill="none" stroke="#222" strokeWidth="1" />
        {/* Brand mark */}
        <rect x="92" y="100" width="44" height="36" fill="none" stroke="rgba(212,168,67,0.2)" strokeWidth="1" />
        <text x="114" y="122" fontFamily="Barlow Condensed, sans-serif" fontSize="10" fontWeight="700" fill="rgba(212,168,67,0.4)" textAnchor="middle" letterSpacing="2">VX</text>
        {/* Ghost number */}
        <text x="150" y="295" fontFamily="Barlow Condensed, sans-serif" fontSize="110" fontWeight="700" fill="rgba(255,255,255,0.025)" textAnchor="middle">01</text>
      </svg>
    );
  }

  if (variant === "silverstone") {
    return (
      <svg {...props}>
        {/* Body — midnight blue */}
        <path d="M90 60 L30 110 L18 180 L55 186 L55 330 L245 330 L245 186 L282 180 L270 110 L210 60 Q175 44 150 48 Q125 44 90 60Z" fill="#0d1117" stroke="#181f2a" strokeWidth="1.5" />
        {/* Sleeves */}
        <path d="M90 60 L30 110 L18 180 L55 186 L55 230 L80 200 L80 60Z" fill="#0a0d12" stroke="#181f2a" strokeWidth="1" />
        <path d="M210 60 L270 110 L282 180 L245 186 L245 230 L220 200 L220 60Z" fill="#0a0d12" stroke="#181f2a" strokeWidth="1" />
        {/* Blue shoulder panels */}
        <path d="M90 60 L30 110 L18 180 L55 186 L55 195 L80 165 L80 60Z" fill="#152035" opacity="0.9" />
        <path d="M210 60 L270 110 L282 180 L245 186 L245 195 L220 165 L220 60Z" fill="#152035" opacity="0.9" />
        {/* Hood shape */}
        <path d="M110 55 Q150 30 190 55 L192 68 Q150 44 108 68Z" fill="#0e151e" stroke="#181f2a" strokeWidth="1" />
        <path d="M130 52 Q150 38 170 52 L168 62 Q150 48 132 62Z" fill="#0a0f15" />
        {/* Gold collar trim */}
        <path d="M118 50 Q150 40 182 50 L182 54 Q150 44 118 54Z" fill="#d4a843" opacity="0.6" />
        {/* Brand mark */}
        <text x="150" y="122" fontFamily="Barlow Condensed, sans-serif" fontSize="10" fontWeight="700" fill="rgba(212,168,67,0.35)" textAnchor="middle" letterSpacing="2">VX</text>
        {/* Ghost number */}
        <text x="150" y="295" fontFamily="Barlow Condensed, sans-serif" fontSize="110" fontWeight="700" fill="rgba(255,255,255,0.025)" textAnchor="middle">02</text>
      </svg>
    );
  }

  if (variant === "suzuka") {
    return (
      <svg {...props}>
        {/* Body — carbon dark */}
        <path d="M90 60 L30 110 L18 180 L55 186 L55 330 L245 330 L245 186 L282 180 L270 110 L210 60 Q175 44 150 48 Q125 44 90 60Z" fill="#0c0c0a" stroke="#1e1e18" strokeWidth="1.5" />
        {/* Sleeves */}
        <path d="M90 60 L30 110 L18 180 L55 186 L55 230 L80 200 L80 60Z" fill="#0a0a08" stroke="#1a1a14" strokeWidth="1" />
        <path d="M210 60 L270 110 L282 180 L245 186 L245 230 L220 200 L220 60Z" fill="#0a0a08" stroke="#1a1a14" strokeWidth="1" />
        {/* Gold shoulder panels */}
        <path d="M90 60 L30 110 L18 180 L55 186 L55 195 L80 165 L80 60Z" fill="#2a2510" opacity="0.9" />
        <path d="M210 60 L270 110 L282 180 L245 186 L245 195 L220 165 L220 60Z" fill="#2a2510" opacity="0.9" />
        {/* Gold collar trim */}
        <path d="M118 50 Q150 40 182 50 L182 54 Q150 44 118 54Z" fill="#d4a843" />
        {/* Diagonal gold chest stripes */}
        <line x1="55" y1="230" x2="245" y2="205" stroke="rgba(212,168,67,0.2)" strokeWidth="10" />
        <line x1="55" y1="252" x2="245" y2="227" stroke="rgba(212,168,67,0.1)" strokeWidth="10" />
        {/* Zipper */}
        <line x1="150" y1="62" x2="150" y2="330" stroke="#1e1e14" strokeWidth="1.5" />
        {/* Brand mark */}
        <text x="114" y="122" fontFamily="Barlow Condensed, sans-serif" fontSize="10" fontWeight="700" fill="rgba(212,168,67,0.45)" textAnchor="middle" letterSpacing="2">VX</text>
        {/* Ghost number */}
        <text x="150" y="295" fontFamily="Barlow Condensed, sans-serif" fontSize="110" fontWeight="700" fill="rgba(255,255,255,0.025)" textAnchor="middle">03</text>
      </svg>
    );
  }

  // imola — deep red hoodie
  return (
    <svg {...props}>
      {/* Body */}
      <path d="M90 60 L30 110 L18 180 L55 186 L55 330 L245 330 L245 186 L282 180 L270 110 L210 60 Q175 44 150 48 Q125 44 90 60Z" fill="#110a0a" stroke="#1e1212" strokeWidth="1.5" />
      {/* Sleeves */}
      <path d="M90 60 L30 110 L18 180 L55 186 L55 230 L80 200 L80 60Z" fill="#0d0808" stroke="#1a1010" strokeWidth="1" />
      <path d="M210 60 L270 110 L282 180 L245 186 L245 230 L220 200 L220 60Z" fill="#0d0808" stroke="#1a1010" strokeWidth="1" />
      {/* Dark red shoulder panels */}
      <path d="M90 60 L30 110 L18 180 L55 186 L55 195 L80 165 L80 60Z" fill="#200e0e" opacity="0.9" />
      <path d="M210 60 L270 110 L282 180 L245 186 L245 195 L220 165 L220 60Z" fill="#200e0e" opacity="0.9" />
      {/* Hood */}
      <path d="M110 55 Q150 30 190 55 L192 68 Q150 44 108 68Z" fill="#160808" stroke="#1e1212" strokeWidth="1" />
      <path d="M130 52 Q150 38 170 52 L168 62 Q150 48 132 62Z" fill="#100606" />
      {/* Red collar trim */}
      <path d="M118 50 Q150 40 182 50 L182 54 Q150 44 118 54Z" fill="#be3124" opacity="0.8" />
      {/* Brand mark */}
      <text x="150" y="122" fontFamily="Barlow Condensed, sans-serif" fontSize="10" fontWeight="700" fill="rgba(190,49,36,0.45)" textAnchor="middle" letterSpacing="2">VX</text>
      {/* Ghost number */}
      <text x="150" y="295" fontFamily="Barlow Condensed, sans-serif" fontSize="110" fontWeight="700" fill="rgba(255,255,255,0.025)" textAnchor="middle">04</text>
    </svg>
  );
}
