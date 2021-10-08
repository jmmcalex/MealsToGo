import React from 'react';
import { View } from 'react-native';
import { Callout } from 'react-native-maps';
import { CompactRestaurantInfo } from '../../../components/restaurant/compact-restaurant-info.component';
import { Restaurant } from '../../../types/restaurant';

interface MapCalloutProps {
  restaurant: Restaurant;
}

export const MapCallout = ({ restaurant }: MapCalloutProps) => (
  <View>
    <CompactRestaurantInfo restaurant={restaurant} />
  </View>
);
