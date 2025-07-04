import axios from 'axios'

// Manejo de persistencia de las busquedas con redix
import { getCachedWeather, setCachedWeather } from './weather.cache.js'

import dotenv from 'dotenv'
dotenv.config()

export const fetchWeatherWithCache = async (place) => {

  // Obtenemos la URL de VCAPI
  const VisualCrossingUrlBase = process.env.VISUAL_CROSSING_URL_BASE

  const WeatherApiKey = process.env.WEATHER_API_KEY

  const cached = await getCachedWeather(place)

  // Si existe en cache, retornamos el resultado
  if (cached) return JSON.parse(cached)

  try {
    // Si no existe en cache, hacemos la peticion a la API
    const res = await axios.get(
      `${VisualCrossingUrlBase}${place}?unitGroup=us&key=${WeatherApiKey}&contentType=json&lang=es`
    )

    const weatherData = res.data
    // console.log(weatherData) OK ✅✅

    //Guardamos el resultado en la cache
    await setCachedWeather(place, JSON.stringify(weatherData))

    return weatherData

  } catch (error) {
    // Si hay un error, lanzamos una excepcion
    throw new Error(`Error al obtener el clima para ${place}: ${error.message}`)
  }

}
