import Toast from 'react-native-toast-message';

export function mostrarError(error) {
  let mensaje = 'Error desconocido';

  if (error?.response?.headers?.['error-message']) {
    mensaje = error.response.headers['error-message'];
  } else if (error?.response?.data?.errorMessage) {
    mensaje = error.response.data.errorMessage;
  } else if (error?.message) {
    mensaje = error.message;
  }

  Toast.show({
    position: 'top',
    type: 'error',
    text1: 'Error',
    text2: mensaje
  });
}

export function mostrarMensaje(titulo = '', mensaje = '') {
  Toast.show({
    position: 'top',
    text1: titulo,
    text2: mensaje
  });
}

export function mostrarValidacion(mensaje = '') {
  Toast.show({
    position: 'top',
    type: 'error',
    text1: 'Error',
    text2: mensaje
  });
}

export const msgTokenExpirado = () => {
  Toast.show({
    type: 'error',
    position: 'top',
    text1: 'Sesión Expirada',
    visibilityTime: 5000,
    autoHide: true
  });
};
