import { StatusBar } from 'expo-status-bar';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/infrastructure/navigation';
import { theme } from './src/infrastructure/theme';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';
import { FavoritesContextProvider } from './src/services/favorites/favorites.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { RestaurantsContextProvider } from './src/services/restaurants/mock/restaurants.context';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCE0WPOCQ5dTG-FgM9nbhrhzeK_yy_sc9I',
  authDomain: 'meals-to-go-9b2bd.firebaseapp.com',
  projectId: 'meals-to-go-9b2bd',
  storageBucket: 'meals-to-go-9b2bd.appspot.com',
  messagingSenderId: '720938981202',
  appId: '1:720938981202:web:a43fbb4b515806b9fd8c8b',
};

initializeApp(firebaseConfig);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <AuthenticationContextProvider>
            <FavoritesContextProvider>
              <LocationContextProvider>
                <RestaurantsContextProvider>
                  <Navigation colorScheme={colorScheme} />
                  <StatusBar />
                </RestaurantsContextProvider>
              </LocationContextProvider>
            </FavoritesContextProvider>
          </AuthenticationContextProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    );
  }
}
