import type { Route } from "./types";

export const accentClasses: Record<
  Route["accent"],
  { bg: string; text: string; hex: string }
> = {
  red: {
    bg: "bg-danger-tint",
    text: "text-[var(--danger-text)]",
    hex: "#FF3B30",
  },
  blue: {
    bg: "bg-[var(--tag-blue-bg)]",
    text: "text-[var(--tag-blue-text)]",
    hex: "#F97316",
  },
  green: {
    bg: "bg-[var(--tag-green-bg)]",
    text: "text-[var(--tag-green-text)]",
    hex: "#34C759",
  },
  yellow: {
    bg: "bg-[var(--tag-yellow-bg)]",
    text: "text-[var(--tag-yellow-text)]",
    hex: "#FBBF24",
  },
};
