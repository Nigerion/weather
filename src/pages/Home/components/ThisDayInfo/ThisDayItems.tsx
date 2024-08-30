import React from "react";
import style from "./ThisDayInfo.module.scss";
import Select from "react-select";
import cloud from "../../../../assets/image/cloud.png";
import { Item } from "./ThisDayInfo";
import { IndicatorSvgSelector } from "../../../../assets/icon/global/indicators/IndicatorSvgSelctor";
interface Props {
  item: Item;
}

export const ThisDayItems = ({ item }: Props) => {
  const { icon_id, name, value } = item;
  return (
    <div className={style.item}>
      <div className={style.indicator}>
        <IndicatorSvgSelector id={icon_id}></IndicatorSvgSelector>
      </div>
      <div className={style.indicator__name}>{name}</div>
      <div className={style.indicator_value}>{value}</div>
    </div>
  );
};
