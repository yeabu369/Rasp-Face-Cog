import React from "react";
import {
  Button,
  Typography,
  Container,
  Box
} from "@material-ui/core";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { Link } from "react-router-dom";

import Display from '../Display/Display';
import UserData from '../UserData/UserData';
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.toolbar} />
      <Container className={classes.root}>
        <div className={classes.cameraDisplay}>
          <Display />
          <Button variant="contained" align="left" color="primary" disableElevation className={classes.button}>
            Turn On Camera
          </Button>
        </div>
        <div className={classes.report}>
          <Typography variant='h4' className={classes.visitorInfoText}>
            Visitor Information {<VerifiedUserIcon large color='primary'/>}
          </Typography>
          <UserData />
        </div>
      </Container>
    </>
  );
};

export default Home;