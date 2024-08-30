import React from "react";
import style from "./Home.module.scss";
import { ThisDay } from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";
import { Days } from "./Days/Days";

interface Props {}

export const Home = (props: Props) => {
  return (
    <div className={style.home}>
      <div className={style.wrapper}>
        <ThisDay></ThisDay>
        <ThisDayInfo></ThisDayInfo>
      </div>
      <Days></Days>
    </div>
  );
};
