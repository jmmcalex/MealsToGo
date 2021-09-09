import React, { createContext, useEffect, useState } from 'react';
import { locationRequest, locationTransform } from './location.service';

type ContextProps = {
  children: React.ReactNode;
};

type LocationValue = {
  isLoading: boolean;
  error: any;
  location: { lat: number; lng: number };
  keyword: string;
  search: (s: string) => void;
};

const DefaultLocationValue: LocationValue = {
  isLoading: false,
  error: null,
  location: { lat: 0, lng: 0 },
  keyword: '',
  search: () => null,
};

export const LocationContext =
  createContext<LocationValue>(DefaultLocationValue);

export const LocationContextProvider = ({ children }: ContextProps) => {
  const [location, setlocation] = useState<{ lat: number; lng: number }>(
    DefaultLocationValue.location
  );
  const [keyword, setKeyword] = useState<string>('San Francisco');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    onSearch(keyword);
    if (!keyword.length) {
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((location) => {
        setIsLoading(false);
        setlocation(location);
        console.log('locaiton', location);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, [keyword]);

  const onSearch = (searchKeyWord: string) => {
    setIsLoading(true);
    setKeyword(searchKeyWord);
  };

  return (
    <LocationContext.Provider
      value={{ location, keyword, isLoading, error, search: onSearch }}
    >
      {children}
    </LocationContext.Provider>
  );
};
