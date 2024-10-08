import React from "react";
import style from "./Days.module.scss";

interface Props {}
interface Tab {
  value: string;
}
export const Tabs = (props: Props) => {
  const tabs: Tab[] = [
    {
      value: "На неделю ",
    },
    {
      value: "На 10 дней",
    },
    {
      value: "На месяц",
    },
  ];
  return (
    <div className={style.tabs}>
      <div className={style.tabs__wrapper}>
        {tabs.map((tab) => (
          <div className={style.tab} key={tab.value}>
            {tab.value}
          </div>
        ))}
      </div>
      <div className={style.cancel}>Отменить</div>
    </div>
  );
};
