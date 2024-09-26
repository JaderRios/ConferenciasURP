import {
  CERRAR_SESION,
  LOGIN_ACCEDER_CARGANDO,
  LOGIN_ACCEDER_EXITO,
  LOGIN_ACCEDER_ERROR,
  OBTENER_PERFIL_CARGANDO,
  OBTENER_PERFIL_EXITO,
  OBTENER_PERFIL_ERROR
} from '../types';

const initialState = {
  loading: false,
  error: null,
  session: null,
  user: null
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ACCEDER_CARGANDO:
    case OBTENER_PERFIL_CARGANDO:
      return {
        ...state,
        loading: true
      };
    case LOGIN_ACCEDER_ERROR:
    case OBTENER_PERFIL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case LOGIN_ACCEDER_EXITO:
      return {
        ...state,
        loading: false,
        session: action.payload
      };
    case OBTENER_PERFIL_EXITO:
      return {
        ...state,
        loading: false,
        user: action.payload
      };
    case CERRAR_SESION:
      return {
        ...state,
        loading: false,
        error: null,
        session: null,
        user: null
      };

    default:
      return state;
  }
}
