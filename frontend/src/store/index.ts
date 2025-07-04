import { configureStore } from '@reduxjs/toolkit'
import { weatherSlice } from '../store/weather/WeatherSlice'

export const store = configureStore({
  reducer: {
    weather: weatherSlice.reducer
  }
})

// exportar los tipos de rootState y appDispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

