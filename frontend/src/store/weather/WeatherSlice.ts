import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getWeatherData } from '../../service/weatherAPI'
import type { WeatherData } from "../../types.d";


// Interface for the weather state
interface WeatherState {
  data: WeatherData | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

// Define the initial state of the weather slice
const initialState: WeatherState = {
  data: null,
  status: 'idle',
  error: null
}

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (place: string) => {
    return await getWeatherData(place)
  }
)

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchWeather.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Unknown error'
      })
  }

})


// Se pone el .reducer -> Porque lo unico que nos intereza es el reducer
// Caja de acciones para cambios de estado
export default weatherSlice.reducer

// export const { rollBackUser, addNewUser, deleteUsersById } = usersSlice.actions