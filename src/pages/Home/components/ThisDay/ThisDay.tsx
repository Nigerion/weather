import React from "react";
import style from "./ThisDay.module.scss";
import { GlobalSvgSelector } from "../../../../assets/icon/global/GlobalSvgSelector";

// interface Props {}

export const ThisDay = () => {
  return (
    <div className={style.this__day}>
      <div className={style.top__block}>
        <div className={style.top__block_wrapper}>
          <div className={style.this__temperature}>20°</div>
          <div className={style.this__now}>сегодня</div>
        </div>
        <GlobalSvgSelector id="sun"></GlobalSvgSelector>
      </div>
      <div className={style.bottom__block}>
        <div className={style.this__time}>
          Время: <span>21:00</span>
        </div>
        <div className={style.this__city}>
          Город: <span>Саратов</span>
        </div>
      </div>
    </div>
  );
};
