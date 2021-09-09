import * as React from 'react';
import { useContext, useState } from 'react';
import { FlatList } from 'react-native';
import { ActivityIndicator, Card, Colors, Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeAreaView } from '../../../components/utility/safe-area.component';
import { RestaurantsContext } from '../../../services/restaurants/mock/restaurants.context';
import { Restaurant } from '../../../types/restaurant';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Search } from '../components/search.component';

export function RestaurantsScreen() {
  const { isLoading, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeAreaView edges={['left', 'top', 'right']}>
      <Search />
      <Spacer position='top' size='medium' />
      {isLoading ? (
        <LoadingContainer>
          <ActivityIndicator
            size={50}
            style={{ marginLeft: -15 }}
            animating={true}
            color={Colors.blue300}
          />
        </LoadingContainer>
      ) : (
        <FlatList<Restaurant>
          data={restaurants}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => {
            return (
              <CardContainer>
                <RestaurantInfoCard restaurant={item} />
                <Spacer position='bottom' size='large' />
              </CardContainer>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
}

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const CardContainer = styled.View`
  min-width: 100%;
`;
