import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { List } from 'react-native-paper';
import { TabOneParamList } from '../../../infrastructure/navigation/types';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

type RestaurantDetailScreenProps = StackScreenProps<
  TabOneParamList,
  'RestaurantDetail'
>;

export const RestaurantDetailScreen = ({
  route,
}: RestaurantDetailScreenProps) => {
  const { restaurant } = route.params;

  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  return (
    <>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title='Breakfast'
          left={(props) => <List.Icon {...props} icon='bread-slice' />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title='Egg & Cheese Burrito' />
          <List.Item title='McMuffin' />
          <List.Item title='Toast and Jam' />
        </List.Accordion>
        <List.Accordion
          title='Lunch'
          left={(props) => <List.Icon {...props} icon='hamburger' />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title='Tacos' />
          <List.Item title='Salad' />
          <List.Item title='Burger' />
        </List.Accordion>
        <List.Accordion
          title='Dinner'
          left={(props) => <List.Icon {...props} icon='food-variant' />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title='Steak and Veggies' />
          <List.Item title='Eggplant Parm' />
          <List.Item title='Pizza' />
        </List.Accordion>
        <List.Accordion
          title='Drinks'
          left={(props) => <List.Icon {...props} icon='cup' />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title='Coffee' />
          <List.Item title='Tea' />
          <List.Item title='Coke' />
        </List.Accordion>
      </ScrollView>
    </>
  );
};
