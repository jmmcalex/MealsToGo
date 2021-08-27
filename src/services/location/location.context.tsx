import React, { useState, useContext, createContext } from 'react';
import { Location } from '../../types/location';
import { locationRequest, locationTransform } from './location.service';

type ContextProps = {
  children: React.ReactNode;
};

type LocationValue = {
  isLoading: boolean;
  error: any;
  location: Location;
  keyword: string;
  search: () => void;
};

const DefaultLocationValue: LocationValue = {
  isLoading: false,
  error: null,
  location: {
    results: [
      {
        geometry: {
          location: { lat: 0, lng: 0 },
        },
        viewport: {},
      },
    ],
  },
  keyword: '',
  search: () => null,
};

export const LocationContext =
  createContext<LocationValue>(DefaultLocationValue);

export const LocationContextProvider = ({ children }: ContextProps) => {
  const [location, setlocation] = useState('san francisco');
  const [keyword, setkeyword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <LocationContext.Provider value={(location, keyword, isLoading, error)}>
      {children}
    </LocationContext.Provider>
  );
};
