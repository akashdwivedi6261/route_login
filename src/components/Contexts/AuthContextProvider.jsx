import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";
// import { Box } from "./Navbar.styled.js";

export const AuthContext = createContext();
export default function AuthContextProvider({ children }) {
  const [isLoggedIn, setisLoggedIn] = React.useState(true);
  const navigate = useNavigate();
  const onLogin = () => {
    console.log("user logged in");
    setisLoggedIn(true);
    navigate("dashboard");
  };

  const onLogout = () => {
    console.log("user logged out");
    setisLoggedIn(false);
    navigate("login");
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, onLogin, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
}
