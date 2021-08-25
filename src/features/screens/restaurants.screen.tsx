import * as React from 'react';
import { useContext, useState } from 'react';
import { FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useTheme } from 'styled-components/native';
import { Spacer } from '../../components/spacer/spacer.component';
import { SafeAreaView } from '../../components/utility/safe-area.component';
import { RestaurantsContext } from '../../services/restaurants/mock/restaurants.context';
import { Restaurant } from '../../types/restaurant';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

export function RestaurantsScreen() {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <SafeAreaView edges={['left', 'top', 'right']}>
      <Searchbar
        placeholder='Search'
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <Spacer position='top' size='medium' />
      <FlatList<Restaurant>
        data={restaurants}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <>
              <RestaurantInfoCard restaurant={item} />
              <Spacer position='bottom' size='large' />
            </>
          );
        }}
      />
    </SafeAreaView>
  );
}
