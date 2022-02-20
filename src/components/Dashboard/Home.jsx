import React, { useEffect, useState } from "react";
import { Box, Div2 } from "./Navbar.styled.js";
import Home1 from "./Home1";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    console.log(location);
    let paths = location.pathname.split("/");
    let base = "/" + paths[1] + "/" + paths[2];
    setBaseUrl(base);
  }, [location]);
  return (
    <>
      <Box>
        Home Page
        <Div2>
          <Link to={`${baseUrl}/1`}>Home1</Link>
          <Link to={`${baseUrl}/2`}>Home2</Link>
        </Div2>
        <Outlet />
      </Box>
    </>
  );
}
