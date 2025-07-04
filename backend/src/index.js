import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { weatherRouter } from './features/weather/weather.route.js'

// Activamos las variables de entorno
dotenv.config()

// Construir la aplicacion (server)
const app = express()
const PORT = process.env.PORT || 3000

// Configuracion de middlewares
app.use(express.json())
app.use(cors()) // Permitir solicitudes desde otros dominios
app.use(express.urlencoded({ extended: true }))

// Configuracion de rutas
app.get('/', (req, res) => {
  res.send('Root Api Weaather Wrapper Service')
})

// Ruta para consumir el servicio de Cross API
app.use('/api/weather', weatherRouter())

//Configuracion de puerto
app.listen(PORT, () => {
  console.log(`API Weather Wrapper is running on http://localhost:${PORT}`)
})