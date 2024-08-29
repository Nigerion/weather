import React from "react";
import style from "./Header.module.scss";

// interface Props {}

export const Header = () => {
  return (
    <header className={style.home}>
      <div className={style.wrapper}>
        <div className={style.logo}></div>
        <div className={style.title}></div>
      </div>
      <div className={style.wrapper}></div>
    </header>
  );
};
