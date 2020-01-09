import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Router from "next/router";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  search: {
    flexGrow: 3
  }
}));
const SearchCharacter = (e, name) => {
  e.preventDefault();
  Router.push(`/Search/${name}`);
};
export default function NavBar() {
  const classes = makeStyles();
  const [Name, setName] = useState(null);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => Router.push("/")}
          >
            Rick&Morthy
          </Typography>
          <form onSubmit={e => SearchCharacter(e, Name)}>
            <InputBase
              placeholder="Search…"
              className={classes.root}
              onChange={e => {
                setName(e.target.value);
              }}
            />
          </form>
        </Toolbar>
      </AppBar>
    </div>
  );
}
