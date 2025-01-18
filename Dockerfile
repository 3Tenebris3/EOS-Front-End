# ============================
#  ETAPA 1: CONSTRUCCIÓN
# ============================
FROM node:18-alpine AS builder

# Crea un directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del proyecto
COPY . .

# Construye la app para producción (Vite genera /dist)
RUN npm run build


# ============================
#  ETAPA 2: SERVIR CON NGINX
# ============================
FROM nginx:stable-alpine

# Copiamos los archivos compilados desde la etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Expone el puerto 80 para servir la aplicación
EXPOSE 80

# Comando por defecto de Nginx
CMD ["nginx", "-g", "daemon off;"]
