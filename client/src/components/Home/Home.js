import React from "react";
import {
  Button,
  Typography,
  Container,
  TextField,
  Grid,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

import useStyles from "./styles";
import gadgetsHero from "../../assets/Gadgets.svg";

const GenderCombo = () => (
  <Autocomplete
    id="gender-combo"
    options={genders}
    getOptionLabel={(option) => option.type}
    renderInput={(params) => (
      <TextField {...params} required name="gender" label="Gender" variant="outlined" />
    )}
  />
);

const RoleCombo = () => (
  <Autocomplete
    id="role-combo"
    options={roles}
    getOptionLabel={(option) => option.type}
    renderInput={(params) => (
      <TextField {...params} required name="role" label="Role" variant="outlined" />
    )}
  />
);

const DeviceCombo = () => (
  <Autocomplete
    id="device-combo"
    options={devices}
    getOptionLabel={(option) => option.type}
    renderInput={(params) => (
      <TextField {...params} required name="deviceType" label="Device Type" variant="outlined" />
    )}
  />
);

const genders = [
  { type: "Male", symbol: "M" },
  { type: "Female", symbol: "F" },
];

const roles = [
  { type: "Student" },
  { type: "Staff" },
  { type: "Adminstration" },
];

const devices = [
  { type: "Laptop", symbol: "L" },
  { type: "Tablet", symbol: "T" },
];

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.toolbar} />
      <Container className={classes.root}>
        <Typography variant="h3" gutterBottom>
          User Profile
        </Typography>
        <form className={classes.form} noValidate autoComplete="off">
          <Grid container spacing={3} direction="row">
            <Grid item container spacing={3} xs={12} sm={4}>
              <Grid item xs={12}>
                <Typography variant="h6">
                  Basic Information
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="fullName"
                  variant="outlined"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="id"
                  name="id"
                  variant="outlined"
                  required
                  fullWidth
                  id="id"
                  label="Id"
                />
              </Grid>
              <Grid item xs={12}>
                <GenderCombo />
              </Grid>
              <Grid item xs={12}>
                <RoleCombo />
              </Grid>
            </Grid>

            <Grid item container spacing={3} xs={12} sm={4}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterTop gutterBottom>
                  Gadgets Information
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <DeviceCombo />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="deviceName"
                  variant="outlined"
                  required
                  fullWidth
                  id="deviceName"
                  label="Device Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="deviceBrand"
                  variant="outlined"
                  required
                  fullWidth
                  id="deviceBrand"
                  label="Device Brand"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="deviceSerialNumber"
                  variant="outlined"
                  required
                  fullWidth
                  id="deviceSerialNumber"
                  label="Device Serial Number"
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" type="submit">
                  Add Device
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
            <Grid item container spacing={3} xs={12} sm={4}>
              <img src={gadgetsHero} alt="Laptop and Tablet" />
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default Home;
