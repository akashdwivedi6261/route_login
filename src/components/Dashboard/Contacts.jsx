import React, { useEffect, useState } from "react";
import { Box, Div2 } from "./Navbar.styled.js";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Contacts() {
  const [basePath, setBasePath] = useState("");
  const location = useLocation();

  console.log(location);
  let paths = location.pathname.split("/");
  console.log(paths);

  useEffect(() => {
    let paths = location.pathname.split("/");
    let base = "/" + paths[1] + "/" + paths[2];
    setBasePath(base);
  }, [location]);
  return (
    <>
      <Box>
        Contacts Page
        <Div2>
          <Link to={`${basePath}/1`}>Contact1</Link>
          <Link to={`${basePath}/2`}>Contact2</Link>
          <Link to={`${basePath}/new`}>Create contact</Link>
        </Div2>
        <Outlet />
      </Box>
    </>
  );
}
