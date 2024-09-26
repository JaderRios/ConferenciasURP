import { combineReducers } from 'redux'; // Importa la función combineReducers desde Redux
import loginReducer from './loginReducer'; // Importa el reducer de login

// Combina los reducers en un solo reducer
const appReducer = combineReducers({
  loginReducer: loginReducer // Asocia el reducer de login con la clave 'loginReducer' en el estado global
});

// Crea el reducer raíz que utiliza el reducer combinado
const rootReducer = (state, action) => {
  return appReducer(state, action); // Llama al reducer combinado con el estado y la acción
};

// Exporta el reducer raíz para su uso en la creación de la tienda de Redux
export default rootReducer;
