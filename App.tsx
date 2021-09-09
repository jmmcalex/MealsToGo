import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import { theme } from './src/constants/theme';
import Navigation from './src/navigation';
import { RestaurantsContextProvider } from './src/services/restaurants/mock/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation colorScheme={colorScheme} />
              <StatusBar />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    );
  }
}
