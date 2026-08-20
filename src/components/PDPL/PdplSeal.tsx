import { ShieldCheck } from "lucide-react";

/**
 * PdplSeal — the recurring "official mark" motif used across the PDPL page.
 * A circular seal with rotating perimeter text, evoking an official
 * compliance stamp rather than a generic icon badge.
 *
 * Usage: <PdplSeal size={220} label="SDAIA · PDPL · COMPLIANT ·" tone="gold" />
 */
export default function PdplSeal({
  size = 200,
  label = "PERSONAL DATA PROTECTION LAW · SAUDI ARABIA · ",
  tone = "gold",
}: {
  size?: number;
  label?: string;
  tone?: "gold" | "ink";
}) {
  const ring = tone === "gold" ? "#C9974A" : "#0A1929";
  const id = "seal-path-" + Math.round(size);

  return (
    <div
      className="relative shrink-0 select-none"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 200 200" width={size} height={size} className="animate-[spin_28s_linear_infinite]">
        <defs>
          <path id={id} d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
        </defs>
        <circle cx="100" cy="100" r="96" fill="none" stroke={ring} strokeWidth="1" opacity="0.35" />
        <circle cx="100" cy="100" r="78" fill="none" stroke={ring} strokeWidth="1.5" opacity="0.6" />
        <text fill={ring} fontSize="10.2" letterSpacing="2.5" fontFamily="ui-monospace, monospace">
          <textPath href={`#${id}`} startOffset="0%">
            {label.repeat(2)}
          </textPath>
        </text>
      </svg>
      <div
        className="absolute inset-0 flex items-center justify-center rounded-full"
        style={{ margin: size * 0.24 }}
      >
        <div
          className="flex h-full w-full items-center justify-center rounded-full border"
          style={{ borderColor: ring, borderWidth: 1.5 }}
        >
          <ShieldCheck
            className="h-[38%] w-[38%]"
            style={{ color: ring }}
            strokeWidth={1.5}
          />
        </div>
      </div>
    </div>
  );
}