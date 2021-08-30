import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';

import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            Rasp-Face-Cog
          </Typography>
          <div className={classes.grow} />
          <Button variant="outlined" color="primary">
            Login
          </Button>
          <Button variant="contained" color="primary">
            Register User
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;