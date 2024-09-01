import React, { useEffect } from "react";
import style from "./Home.module.scss";
import { ThisDay } from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";
import { Days } from "./Days/Days";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { fetchCurrentWather9 } from "../../store/thnks/fetchCurrentWeather";
import { useSelector } from "react-redux";

interface Props {}

export const Home = (props: Props) => {
  const dispatch = useCustomDispatch();
  const { weather } = useCustomSelector(
    (state) => state.currentWeatherSliceReduser
  );
  useEffect(() => {
    dispatch(fetchCurrentWather9("paris")), [];
  });
  return (
    <div className={style.home}>
      <div className={style.wrapper}>
        <ThisDay weather={weather}></ThisDay>
        <ThisDayInfo></ThisDayInfo>
      </div>
      <Days></Days>
    </div>
  );
};
