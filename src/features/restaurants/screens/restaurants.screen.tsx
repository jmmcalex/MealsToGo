import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useState } from 'react';
import { FlatList, Pressable } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import styled from 'styled-components/native';
import { FavoritesBar } from '../../../components/favorites/favorites-bar.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import { SafeAreaView } from '../../../components/utility/safe-area.component';
import { RestaurantTabParamList } from '../../../infrastructure/navigation/types';
import { FavoritesContext } from '../../../services/favorites/favorites.context';
import { RestaurantsContext } from '../../../services/restaurants/mock/restaurants.context';
import { Restaurant } from '../../../types/restaurant';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Search } from '../components/search.component';

type RestaurantScreenProps = StackScreenProps<
  RestaurantTabParamList,
  'Restaurants'
>;

export function RestaurantsScreen({ navigation }: RestaurantScreenProps) {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeAreaView edges={['left', 'top', 'right', 'bottom']}>
      <Search
        isFavoritesToggled={isToggled}
        onFavoritesToggle={() => setIsToggled(!isToggled)}
      />
      {isLoading && (
        <LoadingContainer>
          <ActivityIndicator
            size={50}
            style={{ marginLeft: -15 }}
            animating={true}
            color={Colors.blue300}
          />
        </LoadingContainer>
      )}
      <Spacer position='top' size='medium'>
        {isToggled && (
          <>
            <Spacer position='left' size='large'>
              <Text variant='caption'>Favorites</Text>
            </Spacer>
            <FavoritesBar
              goToDetail={(restaurant: Restaurant) =>
                navigation.navigate('RestaurantDetail', { restaurant })
              }
              favorites={favorites}
            />
          </>
        )}
        <FlatList<Restaurant>
          data={restaurants}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => {
            return (
              <CardContainer
                onPress={() =>
                  navigation.navigate('RestaurantDetail', {
                    restaurant: item,
                  })
                }
              >
                <RestaurantInfoCard restaurant={item} />
                <Spacer position='bottom' size='large' />
              </CardContainer>
            );
          }}
        />
      </Spacer>
    </SafeAreaView>
  );
}

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const CardContainer = styled(Pressable)`
  min-width: 100%;
`;
