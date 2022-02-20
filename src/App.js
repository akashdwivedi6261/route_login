import "./styles.css";
import Dashboard from "./components/Dashboard/Dashboard";
import styled from "styled-components";

import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "./components/Contexts/AuthContextProvider";
import Login from "./components/Login";
export default function App() {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     navigate("dashboard");
  //   } else {
  //     navigate("login");
  //   }
  // }, [navigate, isLoggedIn]);
  return (
    <div className="App">
      <Routes>
        {/* {isLoggedIn ? (<Route path="dashboard" element={<Dashboard />})
         : (<h1>Akash</h1>) />} */}
        {isLoggedIn ? (
          <Route path="dashboard/*" element={<Dashboard />} />
        ) : (
          // {navigate("home")}
          <Route path="login" element={<Login />} />
        )}
      </Routes>
    </div>
  );
}
