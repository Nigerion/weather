import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentWeatherSliceReduser from "./sices/currentWeatherSlice";
const rootReducer = combineReducers({ currentWeatherSliceReduser });
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
