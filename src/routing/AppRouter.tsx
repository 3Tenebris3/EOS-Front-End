// src/routing/AppRouter.tsx

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../presentation/6.screens/Login/Login';
import ResetPassword from '../presentation/6.screens/Login/recoveryPassword/resetPassword';
// Importa otras pantallas según sea necesario

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset" element={<ResetPassword />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  </Router>
);

export default AppRouter;
