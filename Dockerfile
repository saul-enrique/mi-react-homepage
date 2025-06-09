# --- ETAPA 1: Construcción (usa Node.js para compilar React) ---
FROM node:lts-alpine as builder

# Define el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración de dependencias
COPY package*.json ./

# Instala todas las dependencias de Node.js
RUN npm install

# Copia todo el código fuente de tu aplicación
COPY . .

# Ejecuta el script de construcción de Vite para crear la carpeta 'dist'
RUN npm run build

# --- ETAPA 2: Producción (usa Nginx, un servidor web ligero) ---
FROM nginx:stable-alpine

# Copia ÚNICAMENTE la carpeta 'dist' (el resultado de la construcción)
# desde la etapa 'builder' al directorio donde Nginx sirve los sitios web.
COPY --from=builder /app/dist /usr/share/nginx/html

# Expone el puerto 80 del contenedor
EXPOSE 80

# Comando para iniciar el servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
