import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Link from "next/link";
import Router from "next/router";

const SearchCharacter = (e, name) => {
  e.preventDefault();
  Router.push(`/Search/${name}`);
  console.log(name);
};
const Layout = props => {
  const [Name, setName] = useState(null);
  return (
    <div>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <form onSubmit={e => SearchCharacter(e, Name)}>
          <TextField
            className="nav-search"
            id="outlined"
            label="Search"
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </form>
      </nav>
      {props.children}
      <style jsx>
        {`
          nav {
            background-color: #211f1f8a;
            font-size: 26px;
            font-family: monospace;
          }
          ,
          .nav-search {
          },
          
        `}
      </style>
    </div>
  );
};
export default Layout;
