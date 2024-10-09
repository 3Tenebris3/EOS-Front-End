// server/server.js

require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const https = require('https');
const fs = require('fs');
const path = require('path');
const app = express();

// Configuración del middleware
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // Ajusta si tu frontend está en otro puerto
  credentials: true,
}));


// Funciones simuladas para generar y validar tokens
const generarTokenDeAutenticacion = () => 'token-seguro'; // Reemplaza con generación real
const validarToken = (token) => token === 'token-seguro'; // Reemplaza con validación real

// Ruta para el inicio de sesión
app.post('/login', (req, res) => {
  // Aquí validarías las credenciales del usuario (req.body)
  const token = generarTokenDeAutenticacion();

  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // true para producción
    sameSite: 'Strict', // 'Strict' o 'Lax' según tus necesidades
    maxAge: 24 * 60 * 60 * 1000, // 1 día en milisegundos
  });

  res.status(200).json({ message: 'Autenticación exitosa' });
});

// Ruta protegida
app.get('/api/protegido', (req, res) => {
  const token = req.cookies.token;

  if (validarToken(token)) {
    // Simulando datos de usuarios
    const users = [
      { id: 1, name: 'Juan', email: 'juan@example.com' },
      { id: 2, name: 'María', email: 'maria@example.com' },
    ];
    res.status(200).json(users);
  } else {
    res.status(401).json({ error: 'No autorizado' });
  }
});

// Servir los archivos estáticos del frontend (si decides hacerlo)
app.use(express.static(path.join(__dirname, '../dist')));

// Para cualquier ruta que no sea API, devolver el index.html del frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

// Cargar certificados SSL
const sslOptions = {
  key: fs.readFileSync(path.join(__dirname, 'localhost+2-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'localhost+2.pem')),
};

// Iniciar el servidor HTTPS
const PORT = process.env.PORT || 3000;
https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`Servidor HTTPS escuchando en el puerto ${PORT}`);
});
