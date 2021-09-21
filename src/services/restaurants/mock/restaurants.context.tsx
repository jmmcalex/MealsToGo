import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Restaurant } from '../../../types/restaurant';
import { LocationContext } from '../../location/location.context';
import {
  restaurantsRequest,
  restaurantsTransform,
} from './restaurants.service';

type Props = {
  children: ReactNode;
};

interface ContextType {
  restaurants: Restaurant[];
  isLoading: boolean;
  error: any;
}

export const RestaurantsContext = createContext<ContextType>({
  restaurants: [],
  isLoading: false,
  error: null,
});

export const RestaurantsContextProvider = ({ children }: Props) => {
  const { location } = useContext(LocationContext);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = (location: { lat: number; lng: number }) => {
    setIsLoading(true);
    setRestaurants([]);
    const locationString = `${location.lat},${location.lng}`;

    setTimeout(() => {
      restaurantsRequest(locationString)
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) retrieveRestaurants(location.geometry.location);
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
