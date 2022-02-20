import React from "react";
import { useParams } from "react-router-dom";
import { Box } from "./Navbar.styled.js";

export default function Home1() {
  const params = useParams();
  return (
    <>
      <Box>Home Page: {params.id}</Box>
    </>
  );
}
