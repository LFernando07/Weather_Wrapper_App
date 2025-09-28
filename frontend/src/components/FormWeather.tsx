import { useState } from "react";
import { useDispatch } from "react-redux"
import { SearchIcon } from "./Icons";
import type { AppDispatch } from "../store";
import '../styles/FormWeather.css';
import { fetchWeather } from "../store/weather/WeatherSlice";

export function FormWeather() {
  const [value, setValue] = useState("");

  const dispatch = useDispatch<AppDispatch>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // lógica de búsqueda aquí
    if (value.trim()) {
      dispatch(fetchWeather(value.trim()))

      setValue(""); // Limpiar el campo de entrada después de enviar
    }
  };

  return (
    <header>
      <h1 style={{ fontSize: '40px', letterSpacing: '3px' }}>App Weather Wrapper Service</h1>
      <form className="form-weather-bar" onSubmit={handleSubmit}>
        <div className="search-bar-container">
          <input
            type="text"
            name="country"
            id="country"
            placeholder="Buscar un lugar..."
            value={value}
            onChange={e => setValue(e.target.value)}
            autoComplete="off"
          />
          <button type="submit" aria-label="Buscar">
            <SearchIcon />
          </button>
        </div>
      </form>
    </header>

  );
}