"use client";

import { useEffect, useState } from "react";
import type { Route } from "@/lib/types";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function randomStep(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function seedFromId(id: string) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return h;
}

export function useLiveRoute(route: Route) {
  const seed = seedFromId(route.id);
  const intervalSeconds = route.departureIntervalMin * 60;

  const [secondsToDeparture, setSecondsToDeparture] = useState(
    () => 30 + (seed % Math.max(1, intervalSeconds - 30))
  );
  const [waiting, setWaiting] = useState(() => 2 + (seed % 13));
  const [onboard, setOnboard] = useState(() => seed % (route.vehicle.capacity + 1));

  useEffect(() => {
    const clock = setInterval(() => {
      setSecondsToDeparture((s) => (s <= 0 ? intervalSeconds : s - 1));
    }, 1000);

    const passengers = setInterval(() => {
      setWaiting((w) => clamp(w + randomStep(-1, 2), 0, 24));
      setOnboard((o) => clamp(o + randomStep(-1, 1), 0, route.vehicle.capacity));
    }, 4000);

    return () => {
      clearInterval(clock);
      clearInterval(passengers);
    };
  }, [route, intervalSeconds]);

  const minutes = Math.floor(secondsToDeparture / 60);
  const seconds = secondsToDeparture % 60;
  const countdownLabel = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  return { secondsToDeparture, countdownLabel, waiting, onboard };
}
