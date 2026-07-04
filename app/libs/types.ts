export interface Place {
  id: string;
  name: string;
  category?: string;
  lat: number;
  lon: number;
}

export interface MapViewProps {
  center: { lat: number; lon: number };
  places: Place[];
}

export interface SearchProps {
  center: { lat: number; lon: number };
  onResults: (places: Place[]) => void;
}
