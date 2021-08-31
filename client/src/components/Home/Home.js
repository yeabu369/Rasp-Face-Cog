import React from "react";
import { Typography, Container, TextField, Grid } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';

import useStyles from "./styles";

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

const genders = [
  { type: 'Male', symbol: 'M'},
  { type: 'Female', symbol: 'F'},
];

const roles = [
  { type: 'Student'},
  { type: 'Staff' },
  { type: 'Adminstration' },
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
            <Grid item xs={12} sm={6} lg={4}>
              <TextField id="name" label="Name" variant="outlined" />
            </Grid>
            <Grid item>
              <TextField id="id" label="Id" variant="outlined" />
            </Grid>
            <Grid item>
              <GenderCombo />
            </Grid>
            <Grid item>
              <RoleCombo />
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default Home;
