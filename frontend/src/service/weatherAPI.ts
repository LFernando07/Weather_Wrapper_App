import axios from 'axios'
import { type WeatherData } from '../types.d'


export const getWeatherData = async (place: string): Promise<WeatherData> => {
  const { data } = await axios.get<WeatherData>(`http://localhost:1234/api/weather/${place}`)
  return data
}
