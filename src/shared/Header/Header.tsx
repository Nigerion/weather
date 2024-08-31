import React, { useEffect, useState } from "react";
import style from "./Header.module.scss";

import Select from "react-select";
import { GlobalSvgSelector } from "../../assets/icon/global/GlobalSvgSelector";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../context/ThmeContext";

// interface Props {}

export const Header = () => {
  const themeRevrse = useTheme();

  const options = [
    { value: "city-1", label: "СПБ" },
    { value: "city-2", label: "Москва" },
    { value: "city-3", label: "Саратов" },
  ];
  const colorStyles = {
    control: (style: any) => ({
      ...style,
      backgroundColor:
        themeRevrse.theme == Theme.DARK ? "#4f4f4f" : "rgba(71,147,255,0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),

    singleValue: (styles: any) => ({
      ...styles,
      color: themeRevrse.theme == Theme.DARK ? "#fff" : "#000",
    }),
  };

  function changeTheme() {
    themeRevrse.changeTheme(
      themeRevrse.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  }

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={style.title}>React weather</div>
      </div>
      <div className={style.wrapper}>
        <div className={style.change_theme} onClick={changeTheme}>
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
