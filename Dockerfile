# Usa la imagen base de Node.js versión 18
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de tu aplicación
COPY . .

# Expone el puerto 3000
EXPOSE 3000

# Comando para iniciar tu aplicación
CMD ["node", "app.js"]
