import type { Route } from "./types";

export const accentClasses: Record<
  Route["accent"],
  { bg: string; text: string; hex: string }
> = {
  red: {
    bg: "bg-[var(--tag-red-bg)]",
    text: "text-[var(--tag-red-text)]",
    hex: "#7A2331",
  },
  blue: {
    bg: "bg-[var(--tag-blue-bg)]",
    text: "text-[var(--tag-blue-text)]",
    hex: "#1B3A63",
  },
  green: {
    bg: "bg-[var(--tag-green-bg)]",
    text: "text-[var(--tag-green-text)]",
    hex: "#24522E",
  },
  yellow: {
    bg: "bg-[var(--tag-yellow-bg)]",
    text: "text-[var(--tag-yellow-text)]",
    hex: "#7A5300",
  },
};
