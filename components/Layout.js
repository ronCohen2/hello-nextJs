import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Link from "next/link";
import Router from "next/router";
import NavBar from "./NavBar";

const Layout = props => {
  const [Name, setName] = useState(null);
  return (
    <>
      <NavBar />
      {props.children}
    </>
  );
};
export default Layout;
