import React from "react";
import TextField from "@material-ui/core/TextField";
import Link from "next/link";

const Layout = props => {
  return (
    <div>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <TextField
          className="nav-search"
          id="outlined"
          label="Search"
          onChange={() => console.log("change")}
        />
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
