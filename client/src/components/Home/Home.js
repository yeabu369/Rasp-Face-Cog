import React from "react";
import {
  Button,
  Typography,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import coins from '../../assets/USDC-USD.png'
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.toolbar} />
      <Container className={classes.root}>
        <div className={classes.mainContainer}>
          <div className={classes.sideShowCase}>
            <Typography variant="h1" className={classes.title} align="left" gutterBottom gutterTop>
                Get access to U.S. Banking
            </Typography>
            <Typography variant="h6" align="left" color="textSecondary">
                Send and Receive USD ACH, Wire, and Crypto Payments from Africa.
            </Typography>
            <Button component={Link} to="/auth/signup" variant="contained" align="left" color="primary" disableElevation>
              Create Account
            </Button>
          </div>
          <div className={classes.createAccount}>
          <img src={coins} alt="USDCoins" height="612px" className={classes.image}/>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;