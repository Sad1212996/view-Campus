import type { Route } from "./types";

export function calcFare(route: Route, originId: string, destId: string): number {
  const originIndex = route.stops.findIndex((s) => s.id === originId);
  const destIndex = route.stops.findIndex((s) => s.id === destId);
  if (originIndex === -1 || destIndex === -1 || originIndex === destIndex) return 0;

  const distance = Math.abs(destIndex - originIndex);
  const raw = route.baseFare + (distance - 1) * route.perStopFare;
  const fare = Math.max(route.baseFare, Math.round(raw / 5) * 5);
  return fare;
}
