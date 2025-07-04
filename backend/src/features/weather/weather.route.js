import express from 'express';

import { getWeather } from './weather.controller.js';

export const weatherRouter = () => {
  const router = express.Router()

  // Ruta para obtener el clima de un lugar
  router.get('/:place', getWeather)

  return router
}