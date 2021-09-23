import React from 'react';
import { Pressable, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Restaurant } from '../../types/restaurant';
import { CompactRestaurantInfo } from '../restaurant/compact-restaurant-info.component';
import { Spacer } from '../spacer/spacer.component';

const FavoritesWrapper = styled.View`
  flex-direction: row;
  padding: ${({ theme }) => theme.space[1]};
`;

type FavoritesBarProps = {
  favorites: Restaurant[];
  goToDetail: (restaurant: Restaurant) => void;
};

export const FavoritesBar = ({ favorites, goToDetail }: FavoritesBarProps) => {
  if (!favorites.length) {
    return null;
  }
  return (
    <FavoritesWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position='left' size='large'>
              <Pressable onPress={() => goToDetail(restaurant)}>
                <CompactRestaurantInfo restaurant={restaurant} />
              </Pressable>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavoritesWrapper>
  );
};
