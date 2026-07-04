"use client";

import Map, { Marker } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { MapViewProps } from "../libs/types";
import { useState } from "react";

export default function MapView({ children, center, places }: MapViewProps) {
  const [viewState, setViewState] = useState({
    longitude: center.lon,
    latitude: center.lat,
    zoom: 11,
  });

  // console.log(viewState);

  return (
    <div>
      <Map
        initialViewState={{ ...viewState }}
        style={{ width: "100%", height: "100vh" }}
        onMove={(e) => setViewState(e.viewState)}
        mapStyle="https://tiles.openfreemap.org/styles/liberty"
        zoom={viewState.zoom}
        bearing={0}
      >
        {/* <Marker latitude={center.lat} longitude={center.lon} color="red" /> */}
        {places.map((place) => {
          {
            /* console.log(place); */
          }
          <Marker
            key={place.id}
            latitude={place.lat}
            longitude={place.lon}
            color="red"
          />;
        })}
      </Map>

      <div className="absolute top-4 left-4">{children}</div>
    </div>
  );
}
