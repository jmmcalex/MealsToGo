import React from 'react';
import styled from 'styled-components/native';
import { Restaurant } from '../../types/restaurant';
import { Text } from '../typography/text.component';

const CompactImage = styled.Image`
  border-radius: ${({ theme }) => theme.space[2]};
  width: 120px;
  height: 120px;
`;

const Item = styled.View`
  padding: ${({ theme }) => theme.space[1]};
  max-width: 120px;
  /* justify-content: center; */
  align-items: center;
`;

interface CompactRestaurantInfoProps {
  restaurant: Restaurant;
}
export const CompactRestaurantInfo = ({
  restaurant,
}: CompactRestaurantInfoProps) => {
  return (
    <Item>
      <CompactImage source={{ uri: restaurant.images[0] }} />
      <Text variant='label' numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
