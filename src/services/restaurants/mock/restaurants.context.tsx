import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
  ReactNode,
} from 'react';
import { Restaurant } from '../../../types/restaurant';
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
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
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
    retrieveRestaurants();
  }, []);

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
