"use client";

import { useId } from "react";

export function LogoMark({ size = 36 }: { size?: number }) {
  const gradientId = useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F97316" />
          <stop offset="1" stopColor="#FBBF24" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill={`url(#${gradientId})`} />
      <rect x="7" y="16" width="26" height="11" rx="3" fill="white" />
      <rect x="10.5" y="19" width="7" height="5" rx="1" fill={`url(#${gradientId})`} opacity="0.85" />
      <circle cx="13" cy="29" r="3" fill="white" stroke={`url(#${gradientId})`} strokeWidth="2" />
      <circle cx="27" cy="29" r="3" fill="white" stroke={`url(#${gradientId})`} strokeWidth="2" />
      <circle cx="31" cy="9.5" r="3.5" fill="#34C759" stroke="white" strokeWidth="1.5" />
    </svg>
  );
}
