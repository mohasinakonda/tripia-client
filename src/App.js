import logo from "./logo.svg";
import "./App.css";

import Home from "./Pages/HomePage/Home";
import { Route, Routes } from "react-router-dom";
import Dhaka from "./Pages/HomePage/Divisions/Dhaka";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="dhaka" element={<Dhaka />}></Route>
      </Routes>
    </div>
  );
}

export default App;
