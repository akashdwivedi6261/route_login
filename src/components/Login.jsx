import React, { useContext } from "react";
import { AuthContext } from "./Contexts/AuthContextProvider";
// import { Box } from "./Navbar.styled.js";
import { Div, H1, Div2, Button } from "./Dashboard/Navbar.styled";

export default function Login() {
  const { onLogin } = useContext(AuthContext);
  return (
    <>
      <h2>welocome to Login page</h2>
      <Button onClick={onLogin}>SignIn</Button>
    </>
  );
}
