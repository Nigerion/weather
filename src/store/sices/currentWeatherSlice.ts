import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Weather } from "../types/types";
import { AxiosResponse } from "axios";

type CurrentWeather = {
  weather: Weather;
  isLoading: boolean;
  response: Response;
};
type Response = {
  status: number;
  message: string;
};
const initialState: CurrentWeather = {
  weather: {
    main: {
      temp: 0,
    },
  },
  isLoading: false,
  response: {
    status: 0,
    message: "",
  },
};
export const currentWeatherSlice = createSlice({
  name: "current_weather",
  initialState,
  reducers: {
    fetchCurrentWather(state) {
      state.isLoading = true;
    },
    fetchCurrentWatherSuccess(
      state,
      action: PayloadAction<AxiosResponse<Weather>>
    ) {
      state.weather = action.payload.data;
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.response,
      };
    },
    fetchCurrentWatherError(
      state,
      action: PayloadAction<AxiosResponse<Weather>>
    ) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.response,
      };
    },
  },
});
export default currentWeatherSlice.reducer;
