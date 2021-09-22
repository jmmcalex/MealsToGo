import React, { createContext, useState } from 'react';
import { Restaurant } from '../../types/restaurant';

type ContextProps = {
  children: React.ReactNode;
};

type FavoriteState = {
  favorites: Restaurant[];
  addToFavorites: (r: Restaurant) => void;
  removeFromFavorites: (r: Restaurant) => void;
};

const defaultState = {
  favorites: [],
  addToFavorites: (r: Restaurant) => null,
  removeFromFavorites: (r: Restaurant) => null,
};

export const FavoritesContext = createContext<FavoriteState>(defaultState);

export const FavoritesContextProvider = ({ children }: ContextProps) => {
  const [favorites, setFavorites] = useState<Restaurant[]>([]);

  const add = (restaurant: Restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const remove = (restaurant: Restaurant) => {
    const newFavorites = favorites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavorites(newFavorites);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites: add,
        removeFromFavorites: remove,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
