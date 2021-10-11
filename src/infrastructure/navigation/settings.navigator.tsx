import {
  CardStyleInterpolators,
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import React from 'react';
import { FavoritesScreen } from '../../features/settings/screens/favorites.screen';
import { SettingsScreen } from '../../features/settings/screens/settings.screen';
import { BottomTabParamList, SettingsParamList } from './types';

const Stack = createStackNavigator<SettingsParamList>();

export const SettingsNavigator = ({
  route,
  navigation,
}: StackScreenProps<BottomTabParamList, 'Settings'>) => {
  return (
    <Stack.Navigator
      headerMode='screen'
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        options={{
          header: () => null,
        }}
        name='Settings'
        component={SettingsScreen}
      />
      <Stack.Screen name='Favorites' component={FavoritesScreen} />
    </Stack.Navigator>
  );
};
