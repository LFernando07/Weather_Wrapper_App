import type { JSX } from 'react';
import '../styles/WeatherDash.css';
import { CloudIcon, ColdIcon, FeelsLikeIcon, HotIcon, HumidityIcon, LocationIcon, VisibilityIcon, WarmIcon, WindIcon } from './Icons';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

export function WeatherDash() {

  // Data obtenida del fetch hacia la API del backend
  const { data, status, error } = useSelector((state: RootState) => state.weather)


  // Convert Farenheit to Centigradous
  const getTemperature = (temp: number): number => {
    return (temp - 32) * 5 / 9;
  }

  // Validacion de la data dependiendo del status
  if (status === 'loading') return <p className="weather-container message">Cargando datos del clima...</p>
  if (status === 'failed') return <p className="weather-container message">Error: {error}</p>
  if (!data) return <p className="weather-container message">Realiza una búsqueda para ver el clima.</p>

  const temperatura = getTemperature(data.currentConditions.temp);
  const sensacionTermica = getTemperature(data.currentConditions.feelslike)

  const calcScaleTemp = (temp: number): JSX.Element => {
    if (temp < 15) return <ColdIcon />;
    if (temp < 28) return <WarmIcon />;
    return <HotIcon />;

  }

  return (
    <div className="weather-container">
      <div className="weather-item description-text">{data.description}</div>

      <div className="weather-item weather-data-card">
        <div className="icon-bg">
          <FeelsLikeIcon />
        </div>
        <span className="data-title">Sensación térmica</span>
        <span className="data-value">{sensacionTermica.toFixed(2)}°C</span>
      </div>

      <div className="weather-item location-card">
        <div className="icon-bg">
          <LocationIcon />
        </div>
        <span className="data-title">Ubicación</span>
        <span className="data-value">{data.address}</span>
      </div>

      <div className="weather-item weather-data-card">
        <div className="icon-bg">
          <WindIcon />
        </div>
        <span className="data-title">Viento</span>
        <span className="data-value">{data.currentConditions.windspeed} km/h</span>
      </div>

      <div className="weather-item weather-data-card">
        <div className="icon-bg">
          {calcScaleTemp(temperatura)}
        </div>
        <span className="data-title">Temperatura</span>
        <span className="data-value">{temperatura.toFixed(2)}°C</span>
      </div>

      <div className="weather-item weather-data-row">
        <div className="weather-data-card">
          <div className="icon-bg">
            <HumidityIcon />
          </div>
          <span className="data-title">Humedad</span>
          <span className="data-value">{data.currentConditions.humidity}%</span>
        </div>
        <div className="weather-data-card">
          <div className="icon-bg">
            <CloudIcon />
          </div>
          <span className="data-title">Condición</span>
          <span className="data-value">{data.currentConditions.conditions}</span>
        </div>
        <div className="weather-data-card">
          <div className="icon-bg">
            <VisibilityIcon />
          </div>
          <span className="data-title">Visibilidad</span>
          <span className="data-value">{data.currentConditions.cloudcover}%</span>
        </div>
      </div>
    </div>
  )
}