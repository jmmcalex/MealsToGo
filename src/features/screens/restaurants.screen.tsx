import * as React from 'react';
import { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

export function RestaurantsScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <RestaurantScreenContainer>
      <Searchbar
        placeholder='Search'
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <RestaurantCardList>
        <RestaurantInfoCard restaurant={{}} />
      </RestaurantCardList>
    </RestaurantScreenContainer>
  );
}

const RestaurantScreenContainer = styled.View`
  flex: 1;
  align-items: center;
  padding: ${({ theme }) => theme.space[2]};
`;

const RestaurantCardList = styled.View`
  flex: 1;
  width: 100%;
  margin-top: ${({ theme }) => theme.space[2]};
`;
