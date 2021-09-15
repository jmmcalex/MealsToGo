/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { Restaurant } from '../../types/restaurant';

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Restaurants: undefined;
  Map: undefined;
  Settings: undefined;
};

export type TabOneParamList = {
  Restaurants: undefined;
  RestaurantDetail: {
    restaurant: Restaurant;
  };
};

export type TabTwoParamList = {
  Map: undefined;
};

export type TabThreeParamList = {
  Settings: undefined;
};
