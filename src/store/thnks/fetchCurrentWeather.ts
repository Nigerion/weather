import { WeatherServices } from "../../services/WeatherService";
import { currentWeatherSlice } from "../sices/currentWeatherSlice";
import { AppDispatch } from "../store";

export const fetchCurrentWather9 =
  (payload: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(currentWeatherSlice.actions.fetchCurrentWather());
      const res = await WeatherServices.getCurrentWeather(payload);
      if (res.status === 200) {
        dispatch(currentWeatherSlice.actions.fetchCurrentWatherSuccess(res));
      } else {
        dispatch(currentWeatherSlice.actions.fetchCurrentWatherError(res));
      }
    } catch (er) {
      console.log(er);
    }
  };
