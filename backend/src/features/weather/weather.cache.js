// Importar la configuracion de redis
import redisClient from '../../config/redisClient.js'

// Metodo para obtener el cache de un clima buscado
export const getCachedWeather = async (city) => {
  return await redisClient.get(`weather:${city.toLowerCase()}`)
}

// Metodo para setear el cache de un clima buscado
export const setCachedWeather = async (city, data) => {
  await redisClient.set(`weather:${city.toLowerCase()}`, data, {
    EX: 43200 // 12 hours
  })
}