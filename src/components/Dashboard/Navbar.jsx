import React, { useContext } from "react";
import styled from "styled-components";
import { Div, H1, Div2, Button } from "./Navbar.styled.js";
import { Link, Index } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContextProvider.jsx";

export default function Navbar() {
  const { onLogout } = useContext(AuthContext);
  return (
    <>
      <Div>
        <H1>Navbar</H1>
        <Div2>
          <Link to="home">Home</Link>
          <Link to="about">About</Link>
          <Link to="contacts">Contacts</Link>
          <Button onClick={onLogout}>Logout</Button>
        </Div2>
      </Div>
    </>
  );
}
