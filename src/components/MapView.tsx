"use client";

import { MapContainer, TileLayer, Polyline, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { Stop } from "@/lib/types";

export function MapView({
  stops,
  accentHex,
}: {
  stops: Stop[];
  accentHex: string;
}) {
  const center: [number, number] = [
    stops.reduce((sum, s) => sum + s.lat, 0) / stops.length,
    stops.reduce((sum, s) => sum + s.lng, 0) / stops.length,
  ];
  const positions: [number, number][] = stops.map((s) => [s.lat, s.lng]);

  return (
    <MapContainer
      center={center}
      zoom={14}
      scrollWheelZoom={false}
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polyline
        positions={positions}
        pathOptions={{ color: accentHex, weight: 4, opacity: 0.75 }}
      />
      {stops.map((stop, i) => (
        <CircleMarker
          key={stop.id}
          center={[stop.lat, stop.lng]}
          radius={i === 0 || i === stops.length - 1 ? 8 : 6}
          pathOptions={{
            color: "#ffffff",
            weight: 2,
            fillColor: accentHex,
            fillOpacity: 1,
          }}
        >
          <Popup>
            {i + 1}. {stop.name}
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
