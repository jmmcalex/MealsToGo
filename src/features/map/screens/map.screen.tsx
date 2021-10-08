import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import styled from 'styled-components/native';
import { MapTabParamList } from '../../../infrastructure/navigation/types';
import { LocationContext } from '../../../services/location/location.context';
import { RestaurantsContext } from '../../../services/restaurants/mock/restaurants.context';
import { MapCallout } from '../components/map-callout.component';
import { Search } from '../components/search.component';

type MapScreenProps = StackScreenProps<MapTabParamList, 'Map'>;

export const MapScreen = ({ navigation }: MapScreenProps) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0);
  const { viewport } = location.geometry;

  useEffect(() => {
    if (viewport && viewport.northeast && viewport.southwest) {
      const northeastLat = viewport.northeast.lat;
      const southwestLat = viewport.southwest.lat;

      setLatDelta(northeastLat - southwestLat);
    }
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: location.geometry.location.lat,
          longitude: location.geometry.location.lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                longitude: restaurant.geometry.location.lng,
                latitude: restaurant.geometry.location.lat,
              }}
            >
              <Callout
                onPress={() =>
                  navigation.navigate('RestaurantDetail', { restaurant })
                }
              >
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;
