import axios from 'axios';
import { PATH_SERVER } from '../utils/constantes';

// Crear una instancia de axios con una configuración personalizada
const request = axios.create({
  baseURL: `${PATH_SERVER}/retto-api`, // URL base para todas las solicitudes HTTP
  headers: {
    'Content-Type': 'application/json' // Tipo de contenido predeterminado para las solicitudes
  }
});

export default request; // Exportar la instancia de axios para su uso en otras partes de la aplicación
