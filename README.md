# Weather Wrapper Service

Aplicación web desarrollada en React + TypeScript que permite consultar el clima de cualquier país utilizando la API de Visual Crossing. El proyecto utiliza Redux Toolkit para la gestión de estado y un diseño moderno con efectos visuales.

## Características

- Búsqueda de clima por país.
- Visualización de temperatura, sensación térmica, viento, humedad, visibilidad y condición.
- Interfaz responsiva y atractiva con animaciones y glassmorphism.
- Estado global gestionado con Redux Toolkit.
- Consumo de la API de Visual Crossing con soporte para idioma español.
- **Backend propio** para proteger la clave de la API y servir los datos al frontend.

## Tecnologías utilizadas

- React
- TypeScript
- Redux Toolkit
- CSS moderno (Glassmorphism, Grid, Flexbox)
- Node.js + Express (Backend)
- Visual Crossing Weather API

## Instalación

### 1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/weather-wrapper-service.git
cd weather-wrapper-service
```

### 2. Instalación del backend
```bash
cd backend
npm install
npm run dev
```
El backend se ejecutará normalmente en [http://localhost:3000](http://localhost:3000).

### 3. Instalación del frontend
```bash
cd ../frontend
npm install
npm run dev
```
El frontend se ejecutará en [http://localhost:5173](http://localhost:5173).

## Estructura principal

- `frontend/src/components/`: Componentes principales de la interfaz (WeatherDash, FormWeather, etc).
- `frontend/src/store/`: Configuración de Redux Toolkit y slices.
- `frontend/src/styles/`: Archivos CSS personalizados.
- `frontend/src/mocks/`: Datos de ejemplo para pruebas locales.
- `backend/`: Código fuente del backend (servidor Express, controladores, rutas, etc).

## Configuración de la API

La aplicación utiliza la API de Visual Crossing a través del backend.  
Debes colocar tu clave de API en el archivo de configuración del backend (por ejemplo, en `.env` o directamente en el código).

## Notas

- Asegúrate de tener Node.js y npm actualizados.
- Si usas la API en producción, protege tu clave y revisa los límites de uso.
- El frontend realiza las peticiones al backend, y este a su vez consulta la API de Visual Crossing.

## Licencia

MIT

---

Desarrollado por [Luis Fernando Burgos Perea - Fer377]