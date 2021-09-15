import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { useContext } from 'react';
import { FlatList, Pressable } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeAreaView } from '../../../components/utility/safe-area.component';
import { TabOneParamList } from '../../../infrastructure/navigation/types';
import { RestaurantsContext } from '../../../services/restaurants/mock/restaurants.context';
import { Restaurant } from '../../../types/restaurant';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Search } from '../components/search.component';

type RestaurantScreenProps = StackScreenProps<TabOneParamList, 'Restaurants'>;

export function RestaurantsScreen({ navigation }: RestaurantScreenProps) {
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
              <CardContainer
                onPress={() =>
                  navigation.navigate('RestaurantDetail', { restaurant: item })
                }
              >
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

const CardContainer = styled(Pressable)`
  min-width: 100%;
`;
