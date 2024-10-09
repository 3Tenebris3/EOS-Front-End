// src/presentation/screens/Login.tsx

import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';

const Login = () => {
  const [loading, setLoading] = useState<boolean>(true);   

  return (
    <Container>
      <Typography variant="h4" className='mb-3'>
        Lista de Usuarios
      </Typography>
    </Container>
  );
};

export default Login;
