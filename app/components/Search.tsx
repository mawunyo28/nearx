import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Place, SearchProps } from "../libs/types";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Search = ({ center, onResults }: SearchProps) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [results, setResults] = useState<Place[]>([]);

  const RADIUS_KM = 5;

  const latDelta = RADIUS_KM / 111;
  const lonDelta = RADIUS_KM / (111 * Math.cos((center.lat * Math.PI) / 180));

  const lonMin = center.lon - lonDelta;
  const lonMax = center.lon + lonDelta;
  const latMin = center.lat - latDelta;
  const latMax = center.lat + latDelta;

  async function handleSearch() {
    setLoading(true);
    const query = `/api/search?q=${encodeURIComponent(value)}&viewbox=${lonMin},${latMax},${lonMax},${latMin}&bounded=1`;
    try {
      const res = await fetch(query);
      const data = await res.json();

      const places: Place[] = data.map((item: any) => ({
        category: item?.category,
        id: String(item?.place_id),
        name: item?.namedetails?.name ?? item?.display_name,
        lat: Number.parseFloat(item?.lat),
        lon: Number.parseFloat(item?.lon),
      }));

      setResults(places);
      onResults(places);
    } catch (e) {
      console.error("Nominatim Query failed"); // Todo: change to toast
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex gap-5">
        <Input
          className="min-w-2xl"
          placeholder="eg.. cafe, restaurant, "
          disabled={loading}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></Input>
        <Button onClick={handleSearch} disabled={loading}>
          {loading ? "..." : "Search"}
        </Button>
      </div>

      <ScrollArea className="flex-1 ">
        <div className="flex flex-col gap-2">
          {results?.map((place) => (
            <Card key={place.id}>
              <CardContent className="p-4 flex">
                <p className="font-medium">{place.name}</p>
                <Badge variant="secondary" className="mt-1">
                  {place.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
