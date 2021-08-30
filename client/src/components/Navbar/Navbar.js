import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';

import logo from "../../assets/Santym-Logo.png";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="Santym" height="48px" className={classes.image}/>
            {" "}
          </Typography>
          <div className={classes.grow} />
          <Button variant="contained" color="secondary">
            App
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;