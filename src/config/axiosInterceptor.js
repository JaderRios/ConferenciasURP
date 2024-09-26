import axiosConfig from './axiosConfig';
import NavigationService from '../utils/NavigationService';
import { refreshToken } from '../actions/loginAction';

// Variables para gestionar el estado de la obtención de tokens
let isAlreadyFetchingAccessToken = false;
let subscribers = [];

// Función que se llama cuando se ha obtenido un nuevo token de acceso
function onAccessTokenFetched(access_token) {
  // Filtra y llama a todos los suscriptores con el nuevo token de acceso
  subscribers = subscribers.filter(callback => callback(access_token));
}

// Función para agregar un suscriptor a la lista
function addSubscriber(callback) {
  subscribers.push(callback);
}

// Función que configura los interceptores de axios
const interceptor = store => {
  // Interceptor para las solicitudes
  axiosConfig.interceptors.request.use(
    conf => {
      // Si hay una sesión activa, añade el token de acceso y el ID de la empresa a los encabezados
      if (
        store.getState().loginReducer.session != null &&
        store.getState().loginReducer.session != ''
      ) {
        conf.headers.Authorization =
          'Bearer ' + store.getState().loginReducer.session.access_token;
      }
      return conf;
    },
    error => {
      console.error('Request error:', error);
      return Promise.reject(error);
    }
  );

  // Interceptor para las respuestas
  axiosConfig.interceptors.response.use(
    response => {
      return Promise.resolve(response);
    },
    error => {
      // Manejo de errores
      console.error('Response error:', error); // Imprime el error completo

      // Manejo seguro de la respuesta de error
      const { config, response } = error;
      const status = response ? response.status : null; // Asegúrate de que response está definido
      const data = response ? response.data : null;
      const errorCode = data ? data.errorCode : null;
      const originalRequest = config;

      console.error('Status:', status); // Imprime el código de estado si está disponible
      console.error('Error Code:', errorCode); // Imprime el código de error si está disponible
      console.error('Response Data:', data); // Imprime los datos de la respuesta si están disponibles

      // Si la respuesta tiene un error de autenticación (401) o un error específico (400 con código 'V0051')
      if (status === 401 || (status === 400 && errorCode === 'V0051')) {
        if (!isAlreadyFetchingAccessToken) {
          isAlreadyFetchingAccessToken = true;
          const refresh_token =
            store.getState().loginReducer.session.refresh_token;

          // Si hay un token de actualización, intenta refrescar el token de acceso
          if (refresh_token != '') {
            store.dispatch(refreshToken(refresh_token)).then(newTokens => {
              isAlreadyFetchingAccessToken = false;
              if (newTokens) {
                // Llama a los suscriptores con el nuevo token de acceso
                onAccessTokenFetched(
                  store.getState().loginReducer.session.access_token
                );
              } else {
                // Navega a la pantalla de inicio de sesión si no se pudo obtener nuevos tokens
                NavigationService.navigate('LoginStack', 'login');
              }
            });
          }
        }

        // Devuelve una promesa que se resuelve cuando se obtiene un nuevo token de acceso
        return new Promise(resolve => {
          addSubscriber(access_token => {
            if (access_token != '') {
              originalRequest.headers.Authorization = 'Bearer ' + access_token;
              resolve(axiosConfig(originalRequest));
            }
          });
        });
      }

      return Promise.reject(error);
    }
  );
};

export default {
  interceptor
};
