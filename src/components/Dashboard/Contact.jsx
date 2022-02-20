import React from "react";
import { useParams } from "react-router-dom";
import { Box } from "./Navbar.styled.js";

export default function Contact() {
  const params = useParams();
  return (
    <>
      <Box>Contact: {params.id}</Box>
    </>
  );
}
