import { AntDesign } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { Pressable } from 'react-native';
import styled from 'styled-components/native';
import { FavoritesContext } from '../../services/favorites/favorites.context';
import { Restaurant } from '../../types/restaurant';

const FavoriteButton = styled(Pressable)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

type FavoriteProps = {
  restaurant: Restaurant;
};

export const Favorite = ({ restaurant }: FavoriteProps) => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);
  const isFavorite = favorites.find((r) => r.placeId === restaurant.placeId);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(restaurant);
    } else {
      addToFavorites(restaurant);
    }
  };

  return (
    <FavoriteButton onPress={toggleFavorite}>
      <AntDesign
        name={isFavorite ? 'heart' : 'hearto'}
        size={24}
        color={isFavorite ? 'yellow' : 'white'}
      />
    </FavoriteButton>
  );
};
