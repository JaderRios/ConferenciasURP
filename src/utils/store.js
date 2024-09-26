import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// Configuración de persistencia
const persistConfig = {
  key: 'root', // Clave para el almacenamiento persistente
  storage: AsyncStorage, // Usar AsyncStorage para almacenamiento
  stateReconciler: autoMergeLevel2, // Modo de reconciliación de estado
  whitelist: ['loginReducer'] // Reducers que se quieren persistir
};

// Crear un reducer persistente con la configuración definida
const persistedReducer = persistReducer(persistConfig, reducer);

// Crear la tienda de Redux
export const store = createStore(persistedReducer, applyMiddleware(thunk));

// Crear el objeto persistor para persistir la tienda
export const persistor = persistStore(store);
