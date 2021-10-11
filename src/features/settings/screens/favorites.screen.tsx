import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { List } from 'react-native-paper';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import { SafeAreaView } from '../../../components/utility/safe-area.component';
import { SettingsParamList } from '../../../infrastructure/navigation/types';
import { FavoritesContext } from '../../../services/favorites/favorites.context';
import { Restaurant } from '../../../types/restaurant';
import { RestaurantInfoCard } from '../../restaurants/components/restaurant-info-card.component';

// const FavoritesList = styled(FlatList<Restaurant>).attrs({
//   contentContainerStyle: {
//     padding: 16,
//   },
// })`
//   width: 100%;
// `;

const NoFavoritesArea = styled(SafeAreaView)``;

const FavoriteItem = styled(List.Item)``;

type FavoritesScreenProps = StackScreenProps<SettingsParamList, 'Favorites'>;
export const FavoritesScreen = ({ navigation }: FavoritesScreenProps) => {
  const { favorites } = useContext(FavoritesContext);

  return favorites.length ? (
    <SafeAreaView>
      <FlatList<Restaurant>
        contentContainerStyle={{
          padding: 8,
        }}
        data={favorites}
        keyExtractor={(item) => item.name}
        renderItem={({ item }: { item: Restaurant }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetail', {
                  restaurant: item,
                })
              }
            >
              <Spacer position='bottom' size='large'>
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        style={{ width: '100%' }}
      />
    </SafeAreaView>
  ) : (
    <NoFavoritesArea>
      <Text variant='title'>No favorites yet</Text>
    </NoFavoritesArea>
  );
};
