/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import * as React from 'react';
import { MapScreen } from '../../features/map/screens/map.screen';
import { RestaurantDetailScreen } from '../../features/restaurants/screens/restaurant-detail.screen';
import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../Colors';
import { SettingsNavigator } from './settings.navigator';
import {
  BottomTabParamList,
  MapTabParamList,
  RestaurantTabParamList,
} from './types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName='Restaurants'
      tabBarOptions={{ activeTintColor: Colors['light'].tint }}
    >
      <BottomTab.Screen
        name='Restaurants'
        component={RestaurantTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='restaurant' color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Map'
        component={MapTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='map' color={color} />,
        }}
      />
      <BottomTab.Screen
        name='Settings'
        component={SettingsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='settings' color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const RestaurantTabStack = createStackNavigator<RestaurantTabParamList>();

function RestaurantTabNavigator() {
  return (
    <RestaurantTabStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantTabStack.Screen
        name='Restaurants'
        component={RestaurantsScreen}
        options={{ headerShown: false }}
      />
      <RestaurantTabStack.Screen
        name='RestaurantDetail'
        component={RestaurantDetailScreen}
        options={{ headerShown: false }}
      />
    </RestaurantTabStack.Navigator>
  );
}

const MapTabStack = createStackNavigator<MapTabParamList>();

function MapTabNavigator() {
  return (
    <MapTabStack.Navigator>
      <MapTabStack.Screen
        name='Map'
        component={MapScreen}
        options={{ headerShown: false }}
      />
    </MapTabStack.Navigator>
  );
}
