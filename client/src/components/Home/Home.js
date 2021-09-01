import React from "react";
import { Button, Typography, Container, TextField, Grid } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';

import useStyles from "./styles";
import gadgetsHero from "../../assets/Gadgets.svg"

const GenderCombo = () => (
  <Autocomplete
    id="gender-combo"
    options={genders}
    getOptionLabel={(option) => option.type}
    renderInput={(params) => (
      <TextField {...params} label="Gender" variant="outlined" />
    )}
  />
);

const RoleCombo = () => (
  <Autocomplete
    id="role-combo"
    options={roles}
    getOptionLabel={(option) => option.type}
    style={{ width: 300 }}
    renderInput={(params) => (
      <TextField {...params} label="Role" variant="outlined" />
    )}
  />
);

const DeviceCombo = () => (
  <Autocomplete
    id="device-combo"
    options={devices}
    getOptionLabel={(option) => option.type}
    style={{ width: 300 }}
    renderInput={(params) => (
      <TextField {...params} label="Device Type" variant="outlined" />
    )}
  />
);

const genders = [
  { type: 'Male', symbol: 'M'},
  { type: 'Female', symbol: 'F'},
];

const roles = [
  { type: 'Student'},
  { type: 'Staff' },
  { type: 'Adminstration' },
];

const devices = [
  { type: 'Laptop', symbol: 'L'},
  { type: 'Tablet', symbol: 'T'},
];

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.toolbar} />
      <Container className={classes.root}>
        <Typography variant="h3">User Profile</Typography>
        <form className={classes.form} noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item container spacing={2}>
              <Grid item>
                <Typography variant="h6" gutterTop>Basic Information</Typography>
                <TextField id="fullname" label="Fullname" variant="outlined" />
                <TextField id="id" label="Id" variant="outlined" />
                <GenderCombo />
                <RoleCombo />
              </Grid>
            </Grid>
            <Grid item container spacing={2}>
              <Grid item>
                <Typography variant="h6" gutterTop>Gadgets Information</Typography>
                <DeviceCombo />
                <TextField id="deviceName" label="Device Name" variant="outlined" />
                <TextField id="deviceBrand" label="Device Brand" variant="outlined" />
                <TextField id="deviceSerialNumber" label="Device Serial Number" variant="outlined" />
                <Button variant="outlined">Add Device</Button>
              </Grid>
            </Grid>
            <Grid item container spacing={2}>
              <Button variant="contained" color="primary" fullWidth>Submit</Button>
              <img src={gadgetsHero} alt="Laptop and Tablet" /> 
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default Home;
