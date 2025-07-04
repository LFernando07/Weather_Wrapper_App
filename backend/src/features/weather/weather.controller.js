import { fetchWeatherWithCache } from "./weather.service.js";

export const getWeather = async (req, res) => {
  console.log(req.query)
  const { place } = req.params;
  try {
    // Llamamos al servicio para obtener el clima 
    const weatherData = await fetchWeatherWithCache(place)

    res.json(weatherData)

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}