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
  center: Center;
  places: Place[];
}

export interface Center {
  lat: number;
  lon: number;
}

export interface SearchProps {
  center: Center;
  onResults: (places: Place[]) => void;
}
