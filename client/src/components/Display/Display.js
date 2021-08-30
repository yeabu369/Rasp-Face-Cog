import React from 'react';
import { Typography, Box } from '@material-ui/core';

import useStyles from "./styles";

const Display = () => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography>Camera Turned Off</Typography>
        </Box>
    )
}

export default Display;
