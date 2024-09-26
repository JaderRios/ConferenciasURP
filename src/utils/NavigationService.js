import { CommonActions } from '@react-navigation/native';

// Variable para almacenar la referencia del navegador
let navigatorRef;

// Función para establecer la referencia del navegador de nivel superior
function setTopLevelNavigator(ref) {
  navigatorRef = ref;
}

// Función para navegar a una pantalla específica dentro de un stack de navegación
function navigate(stackName, screenName, params = {}) {
  navigatorRef.dispatch(
    CommonActions.navigate({
      name: stackName, // Nombre del stack de navegación
      params: {
        screen: screenName, // Nombre de la pantalla específica dentro del stack
        params: params // Parámetros adicionales para pasar a la pantalla
      }
    })
  );
}

// Exportar las funciones para que puedan ser utilizadas en otras partes de la aplicación
export default {
  navigate,
  setTopLevelNavigator
};
