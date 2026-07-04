"use client";

import Map from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

export default function MapView({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Map
        initialViewState={{ longitude: -0.19, latitude: 5.56, zoom: 12 }}
        style={{ width: "100%", height: "100vh" }}
        mapStyle="https://api.maptiler.com/maps/base-v4/style.json?key=lCZejhXvO8RW4PYq7YkJ"
      />

      <div className="absolute top-2 left-2">{children}</div>
    </div>
  );
}
