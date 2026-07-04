import React from "react";

export interface Place {
  id: string;
  name: string;
  category?: string;
  lat: number;
  lon: number;
}

export interface MapViewProps {
  children: React.ReactNode;
  center: { lat: number; lon: number };
  places: Place[];
}

export interface SearchProps {
  center: { lat: number; lon: number };
  onResults: (places: Place[]) => void;
}
