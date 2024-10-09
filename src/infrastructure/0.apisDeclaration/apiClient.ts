// src/infrastructure/api/apiClient.ts

import axios from 'axios';

// Crear una instancia de Axios con configuración centralizada
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Usar la variable de entorno
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Para enviar y recibir cookies
});

// Opcional: Agregar interceptores para manejar respuestas globalmente
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Manejar errores globalmente
    if (error.response && error.response.status === 401) {
      // Por ejemplo, redirigir al login si no está autorizado
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
