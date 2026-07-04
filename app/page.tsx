import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Place } from "./libs/types";

const MapView = dynamic(() => import("./components/Map"), { ssr: false });

export default function Home() {
  const [center, setCenter] = useState({ lat: 7.95, lon: -1.03 });
  const [places, setPlaces] = useState<Place[]>([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) =>
          setCenter({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
        (err) => console.warn("Geolocation Denined. Using Fallback", err),
      );
    }
  }, []);

  return (
    <MapView center={center} places={places}>
      {" "}
    </MapView>
  );
}
