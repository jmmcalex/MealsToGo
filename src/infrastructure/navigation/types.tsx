/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { Restaurant } from '../../types/restaurant';

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type AccountStackParamList = {
  Main: undefined;
  Login: undefined;
  Register: undefined;
};

export type BottomTabParamList = {
  Restaurants: undefined;
  Map: undefined;
  Settings: undefined;
};

export type RestaurantTabParamList = {
  Restaurants: undefined;
  RestaurantDetail: {
    restaurant: Restaurant;
  };
};

export type MapTabParamList = {
  Map: undefined;
  RestaurantDetail: {
    restaurant: Restaurant;
  };
};

export type SettingsParamList = {
  Settings: undefined;
  Favorites: undefined;
  RestaurantDetail: {
    restaurant: Restaurant;
  };
};
