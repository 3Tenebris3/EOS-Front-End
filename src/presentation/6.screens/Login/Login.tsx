// src/components/LoginComponent.tsx

import React, { useState } from 'react';
import apiClient from '../../../infrastructure/0.apisDeclaration/apiClient';

const LoginComponent: React.FC = () => {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleLogin = async () => {
    try {
      const response = await apiClient.post('/login', {
        usuario,
        contraseña,
      });
      setMensaje(response.data.message);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setMensaje('Error al iniciar sesión');
    }
  };

  return (
    
  );
};

export default LoginComponent;
