import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './src/utils/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import axiosInterceptor from './src/config/axiosInterceptor';
import Toast from 'react-native-toast-message';
import Navigation from './src/navigation/Navigation';
import { Text, View } from 'react-native';
import { DataProvider } from './src/utils/DataContext';
axiosInterceptor.interceptor(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DataProvider>
          <Navigation />
        </DataProvider>

        <Toast />
      </PersistGate>
    </Provider>
  );
}
