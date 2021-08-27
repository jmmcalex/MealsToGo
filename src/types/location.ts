export interface Location {
  results: [
    {
      geometry: {
        location: {
          lng: number;
          lat: number;
        };
      };
      viewport: {
        [direction: string]: {
          lat: number;
          lng: number;
        };
      };
    }
  ];
}
