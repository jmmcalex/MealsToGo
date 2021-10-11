import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState, useEffect, useContext } from 'react';
import { Restaurant } from '../../types/restaurant';
import { AuthenticationContext } from '../authentication/authentication.context';

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
  const { user } = useContext(AuthenticationContext);
  const [favorites, setFavorites] = useState<Restaurant[]>([]);

  useEffect(() => {
    if (user) loadFavorites(user.uid);
  }, [user]);

  useEffect(() => {
    if (user) saveFavorites(favorites, user.uid);
  }, [favorites, user]);

  const saveFavorites = async (value, uid: string) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favorites-${uid}`, jsonValue);
    } catch (e) {
      console.log('error storing favorites', e);
    }
  };

  const loadFavorites = async (uid: string) => {
    try {
      const value = await AsyncStorage.getItem(`@favorites-${uid}`);
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
