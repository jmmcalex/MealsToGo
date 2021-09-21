export interface Geometry {
  location: {
    lng: number;
    lat: number;
  };
  viewport: {
    northeast: {
      lat: number;
      lng: number;
    };
    southwest: {
      lat: number;
      lng: number;
    };
  };
}

export interface Location {
  geometry: Geometry;
}

export interface LocationResponse {
  results: Location[];
}
