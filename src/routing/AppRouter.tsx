// src/routing/AppRouter.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UserListScreen from '../presentation/6.screens/Example';
import CreateClient from '../presentation/6.screens/CreateClient';
import Login from '../presentation/6.screens/Login/Login';
import RecoverPassword from '../presentation/6.screens/Login/recoveryPassword/recoverPassword';
import ResetPassword from '../presentation/6.screens/Login/recoveryPassword/resetPassword';
// Importa otras pantallas según sea necesario

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/factura" element={<CreateClient />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset" element={<ResetPassword />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  </Router>
);

export default AppRouter;
