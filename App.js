import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './src/utils/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import axiosInterceptor from './src/config/axiosInterceptor';
import Toast from 'react-native-toast-message';
import Navigation from './src/navigation/Navigation';
import { Text, View } from 'react-native';
import {
  useFonts,
  ZillaSlab_300Light,
  ZillaSlab_300Light_Italic,
  ZillaSlab_400Regular,
  ZillaSlab_400Regular_Italic,
  ZillaSlab_500Medium,
  ZillaSlab_500Medium_Italic,
  ZillaSlab_600SemiBold,
  ZillaSlab_600SemiBold_Italic,
  ZillaSlab_700Bold,
  ZillaSlab_700Bold_Italic,
} from '@expo-google-fonts/zilla-slab';
axiosInterceptor.interceptor(store);

export default function App() {
  const [fontsLoaded] = useFonts({
    ZillaSlab_300Light,
    ZillaSlab_300Light_Italic,
    ZillaSlab_400Regular,
    ZillaSlab_400Regular_Italic,
    ZillaSlab_500Medium,
    ZillaSlab_500Medium_Italic,
    ZillaSlab_600SemiBold,
    ZillaSlab_600SemiBold_Italic,
    ZillaSlab_700Bold,
    ZillaSlab_700Bold_Italic,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
        <Toast />
      </PersistGate>
    </Provider>
   
  );
}
