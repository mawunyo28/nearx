"use client";

import Map, { Marker } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { MapViewProps } from "../libs/types";
import { useState } from "react";

export default function MapView({ children, center, places }: MapViewProps) {
  const [viewState, setViewState] = useState({
    longitude: center.lon,
    latitude: center.lat,
    zoom: 14,
  });

  return (
    <div>
      <Map
        initialViewState={{ ...viewState }}
        style={{ width: "100%", height: "100vh" }}
        onMove={(e) => setViewState(e.viewState)}
        mapStyle="https://api.maptiler.com/maps/base-v4/style.json?key=lCZejhXvO8RW4PYq7YkJ"
      >
        <Marker latitude={center.lat} longitude={center.lat} color="red" />
        {places.map((place) => (
          <Marker key={place.id} latitude={place.lat} longitude={place.lon} />
        ))}
      </Map>

      <div className="absolute top-2 left-2">{children}</div>
    </div>
  );
}
