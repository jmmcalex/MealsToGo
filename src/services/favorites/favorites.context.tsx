import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState, useEffect } from 'react';
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

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  const saveFavorites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@favorites', jsonValue);
    } catch (e) {
      console.log('error storing favorites', e);
    }
  };

  const loadFavorites = async () => {
    try {
      const value = await AsyncStorage.getItem('@favorites');
      if (value !== null) {
        setFavorites(JSON.parse(value));
      }
    } catch (e) {
      console.log('error loading favorites', e);
    }
  };

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
