import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { MonthStatistic } from "./pages/MonthStatistic/MonthStatistic";
import { Header } from "./shared/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/month-statistics"
          element={<MonthStatistic></MonthStatistic>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
