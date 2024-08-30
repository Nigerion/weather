import React from "react";
import style from "./Header.module.scss";
import { GlobalSvgSelector } from "../assets/icon/global/GlobalSvgSelector";
import Select from "react-select";

// interface Props {}

export const Header = () => {
  const options = [
    { value: "city-1", label: "СПБ" },
    { value: "city-2", label: "Москва" },
    { value: "city-3", label: "Саратов" },
  ];
  const colorStyles = {
    control: (style: any) => ({
      ...style,
      backgroundColor: "rgba(71,147,255,0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
  };
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={style.title}>React weather</div>
      </div>
      <div className={style.wrapper}>
        <div className={style.change_theme}>
          <GlobalSvgSelector id="change-theme"></GlobalSvgSelector>
        </div>
        <Select
          styles={colorStyles}
          options={options}
          defaultValue={options[2]}
        />
      </div>
    </header>
  );
};
