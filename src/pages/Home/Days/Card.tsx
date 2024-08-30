import React from "react";
import style from "./Days.module.scss";
import { Day } from "./Days";
import { GlobalSvgSelector } from "../../../assets/icon/global/GlobalSvgSelector";
interface Props {
  day: Day;
}

export const Card = ({ day }: Props) => {
  return (
    <div className={style.card}>
      <div className={style.day}>{day.day}</div>
      <div className={style.day__info}>{day.day_info}</div>
      <div className={style.img}>
        <GlobalSvgSelector id={day.icon_id} />
      </div>
      <div className={style.temp_day}>{day.temp_day}</div>
      <div className={style.temp_night}>{day.temp_night}</div>
      <div className={style.info}>{day.info}</div>
    </div>
  );
};
