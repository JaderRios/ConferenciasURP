import {
  CERRAR_SESION,
  OBTENER_PERFIL_CARGANDO,
  OBTENER_PERFIL_EXITO,
  OBTENER_PERFIL_ERROR,
  LOGIN_ACCEDER_CARGANDO,
  LOGIN_ACCEDER_EXITO,
  LOGIN_ACCEDER_ERROR
} from '../types';
import axiosConfig from '../config/axiosConfig';
import qs from 'qs';
import { mostrarError } from '../utils/Invoke';
import { PASSWORD_APP, USER_APP } from '../utils/constantes';

/**
 * Acción para iniciar sesión.
 *
 */
export function loginAction(formData, nav) {
  return async dispatch => {
    dispatch(loginAcceder()); // Ejecuta acción de inicio de sesión en progreso
    await axiosConfig
      .post('/oauth/token', qs.stringify(formData), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        auth: { username: USER_APP, password: PASSWORD_APP }
      })
      .then(responseLogin => {
        dispatch(loginExito(responseLogin.data)); // Ejecuta acción de inicio de sesión exitoso
        dispatch(obtenerUsuarioAction(responseLogin.data.access_token, nav)); // Obtiene datos del usuario
      })
      .catch(error => {
        dispatch(loginError(JSON.stringify(error))); // Ejecuta acción de error en el inicio de sesión
        mostrarError(error); // Muestra el error
      });
  };
}

/**
 * Acción para actualizar el token de acceso.
 */
export function refreshToken(token) {
  return async dispatch => {
    dispatch(loginAcceder()); // Ejecuta acción de actualización del token en progreso
    return await axiosConfig
      .post(
        '/oauth/token',
        qs.stringify({
          refresh_token: token,
          grant_type: 'refresh_token'
        }),
        {
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
          auth: { username: USER_APP, password: PASSWORD_APP }
        }
      )
      .then(response => {
        dispatch(loginExito(response.data)); // Ejecuta acción de actualización del token exitoso
        return true;
      })
      .catch(error => {
        dispatch(loginError(error)); // Ejecuta acción de error en la actualización del token
        dispatch(closeSessionAction(false)); // Cierra la sesión en caso de error
        return false;
      });
  };
}

/**
 * Acción de inicio de sesión en progreso.
 */
const loginAcceder = () => ({
  type: LOGIN_ACCEDER_CARGANDO
});

/**
 * Acción de inicio de sesión exitoso.
 */
const loginExito = data => ({
  type: LOGIN_ACCEDER_EXITO,
  payload: data
});

/**
 * Acción de error en el inicio de sesión.
 */
const loginError = error => ({
  type: LOGIN_ACCEDER_ERROR,
  payload: error
});

/**
 * Acción para obtener los datos del usuario.
 */
export function obtenerUsuarioAction(access_token, nav) {
  return async dispatch => {
    dispatch(obtenerUsuario()); // Ejecuta acción de obtención del perfil en progreso
    const authorization = 'Bearer ' + access_token;
    await axiosConfig
      .get('/api/usuarios/profile', {
        headers: {
          'content-type': 'application/json',
          Authorization: authorization
        }
      })
      .then(response => {
        dispatch(obtenerUsuarioExito(response.data)); // Ejecuta acción de obtención del perfil exitoso
        if (nav) {
          nav(); // Llama a la función de navegación si está presente
        }
      })
      .catch(error => {
        dispatch(obtenerUsuarioError(error)); // Ejecuta acción de error en la obtención del perfil
        mostrarError(error); // Muestra el error
      });
  };
}

/**
 * Acción de obtención del perfil en progreso.
 */
const obtenerUsuario = () => ({
  type: OBTENER_PERFIL_CARGANDO
});

/**
 * Acción de obtención del perfil exitoso.
 */
const obtenerUsuarioExito = data => ({
  type: OBTENER_PERFIL_EXITO,
  payload: data
});

/**
 * Acción de error en la obtención del perfil.
 */
const obtenerUsuarioError = error => ({
  type: OBTENER_PERFIL_ERROR,
  payload: error
});

/**
 * Acción para cerrar la sesión.
 */
export const cerrarSesionAction = accion => dispatch => {
  dispatch(cerrarSesion()); // Ejecuta acción de cierre de sesión
  if (accion) {
    accion(); // Llama a la función de navegación si está presente
  }
};

/**
 * Acción de cerrar sesión.
 */
const cerrarSesion = () => ({
  type: CERRAR_SESION
});
