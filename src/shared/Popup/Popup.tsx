import React from "react";
import style from "./Popup.module.scss";
import { Item } from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import { ThisDayItems } from "../../pages/Home/components/ThisDayInfo/ThisDayItems";
import { GlobalSvgSelector } from "../../assets/icon/global/GlobalSvgSelector";

interface Props {
  // items: Item[];
}

export const Popup = ({}: Props) => {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: "20° - ощущается как 17°",
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: "765 мм ртутного столба - нормальное",
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: "Без осадков",
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: "3 м/с юго-запад - легкий ветер",
    },
  ];
  return (
    <>
      <div className={style.blur}></div>
      <div className={style.popup}>
        <div className={style.day}>
          <div className={style.day__temp}>20°</div>
          <div className={style.day__name}></div>
          <div className={style.img}>
            <GlobalSvgSelector id="sun"></GlobalSvgSelector>
          </div>
          <div className={style.day__time}>
            Время: <span>21:00</span>
          </div>
          <div className={style.day__city}>
            Город: <span>Саратов</span>
          </div>
        </div>
        <div className={style.this__day_info_list}>
          {items.map((item: Item) => (
            <ThisDayItems item={item} key={item.icon_id}></ThisDayItems>
          ))}
        </div>
        <div className={style.close}>
          <GlobalSvgSelector id="close"></GlobalSvgSelector>
        </div>
      </div>
    </>
  );
};
