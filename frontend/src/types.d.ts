
export interface WeatherData {
  description: string;
  address: string;
  currentConditions: {
    windspeed: number;
    feelslike: number;
    temp: number;
    humidity: number;
    conditions: string;
    visibility: number;
    cloudcover: number;
  }
}