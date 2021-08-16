import React from 'react';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import { Restaurant } from '../../models/restaurant';

type RestaurantInfoProps = {
  restaurant: Restaurant;
};

export const RestaurantInfoCard = ({ restaurant }: RestaurantInfoProps) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard>
      <RestaurantCardImage source={{ uri: photos[0] }} />
      <RestaurantCardTitle title={`${name}`} subtitle={`${address}`} />
    </RestaurantCard>
  );
};

const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const RestaurantCardImage = styled(Card.Cover)`
  padding: ${({ theme }) => theme.space[2]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const RestaurantCardTitle = styled(Card.Title)``;
