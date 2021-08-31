import React from "react";
import {
  Button,
  Typography,
  Container
} from "@material-ui/core";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

import Display from '../Display/Display';
import useStyles from "./styles";

const SecurityPage = () => {
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
        </div>
      </Container>
    </>
  );
};

export default SecurityPage;