import axios from 'axios'
import { type WeatherData } from '../types.d'

const baseURL = import.meta.env.VITE_API_URL || '/api'

export const getWeatherData = async (place: string): Promise<WeatherData> => {
  const { data } = await axios.get<WeatherData>(`${baseURL}/weather/${place}`)
  return data
}
