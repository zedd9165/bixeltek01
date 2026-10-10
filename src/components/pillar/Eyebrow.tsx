import React from "react";

/** Small section label: a square marker + text. Text is rendered exactly as passed in. */
export default function Eyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 text-[13px] font-semibold font-poppins ${
        dark ? "text-violet-300" : "text-[#670EF7]"
      }`}
    >
      <span
        className={`h-2 w-2 rotate-45 ${dark ? "bg-violet-300" : "bg-[#670EF7]"}`}
      />
      {children}
    </div>
  );
}