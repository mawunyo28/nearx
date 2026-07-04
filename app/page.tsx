import dynamic from "next/dynamic";

const MapView = dynamic(() => import("./components/Map"));

export default function Home() {
  return (
    <MapView>
      <h1>Hello World</h1>
    </MapView>
  );
}
