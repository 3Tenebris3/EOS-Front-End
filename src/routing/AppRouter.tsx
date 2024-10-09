// src/routing/AppRouter.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UserListScreen from '../presentation/6.screens/Example';
import CreateClient from '../presentation/6.screens/CreateClient';
import Login from '../presentation/6.screens/Login/Login';
// Importa otras pantallas según sea necesario

const AppRouter: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<UserListScreen />} />
      <Route path="/factura" element={<CreateClient />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
      {/* Agrega más rutas aquí si es necesario */}
    </Routes>|
  </Router>
);

export default AppRouter;
