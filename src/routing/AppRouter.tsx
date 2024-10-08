// src/routing/AppRouter.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserListScreen from '../presentation/6.screens/Example';
import CreateClient from '../presentation/6.screens/CreateClient';
// Importa otras pantallas según sea necesario

const AppRouter: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<UserListScreen />} />
      <Route path="/factura" element={<CreateClient />} />
      {/* Agrega más rutas aquí si es necesario */}
    </Routes>
  </Router>
);

export default AppRouter;
