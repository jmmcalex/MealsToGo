import React from 'react';
import { Callout } from 'react-native-maps';
import { CompactRestaurantInfo } from '../../../components/restaurant/compact-restaurant-info.component';
import { View } from '../../../components/Themed';
import { Restaurant } from '../../../types/restaurant';

interface MapCalloutProps {
  restaurant: Restaurant;
}

export const MapCallout = ({ restaurant }: MapCalloutProps) => (
  <Callout>
    <View>
      <CompactRestaurantInfo restaurant={restaurant} />
    </View>
  </Callout>
);
