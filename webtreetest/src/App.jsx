import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Signin from "./Signin";
import Register from "./Register";
import Homepage from "./users/Homepage";
import ManageCatagory from "./users/ManageCatagory";
import ManageExpenses from "./users/ManageExpenses";
import SummerizeExpenses from "./users/SummerizeExpenses";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="" element={<Signin />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="dashboard" element={<Homepage />}></Route>
          <Route path="manageCatagory" element={<ManageCatagory />}></Route>
          <Route path="manageExpenses" element={<ManageExpenses />}></Route>
          <Route
            path="summerizeExpenses"
            element={<SummerizeExpenses />}
          ></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
