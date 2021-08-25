export interface Coordinate {
  lat: number;
  lng: number;
}

export interface MockRestaurant {
  business_status: string;
  geometry: {
    location: Coordinate;
    viewport: {
      [direction: string]: Coordinate;
    };
  };
  icon: string;
  name: string;
  opening_hours: {
    open_now: boolean;
  };
  photos: [
    {
      height: number;
      html_attributions: string[];
      photo_reference: string;
      width: number;
    }
  ];
  place_id: string;
  plus_code: {
    compound_code: string;
    global_code: string;
  };
  price_level: number;
  rating: number;
  reference: string;
  scope: string;
  types: string[];
  user_ratings_total: number;
  vicinity: string;
}

export interface Location {
  html_attributions: string[];
  next_page_token: string;
  results: MockRestaurant[];
  status: string;
}

export interface Restaurant extends MockRestaurant {
  address: string;
  images: string[];
  isOpenNow: boolean;
  isClosedTemporarily: boolean;
}
