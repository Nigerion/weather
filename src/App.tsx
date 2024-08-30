import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { MonthStatistic } from "./pages/MonthStatistic/MonthStatistic";
import { Header } from "./shared/Header";
import { Popup } from "./shared/Popup/Popup";

function App() {
  return (
    <div className="global-container">
      <Popup></Popup>
      <div className="container">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/month-statistics"
            element={<MonthStatistic></MonthStatistic>}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
