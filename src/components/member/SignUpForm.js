import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: theme.spacing(4, 4)
  },
  card: {
    border: 'yellow solid 2px'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  }
}));

export default function SignUpForm() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Avatar className={classes.avatar}>
          <PersonAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="email"
            fullWidth
            autoComplete="email" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Phone Number"
            name="Phone Number"
            label="Phone Number"
            fullWidth
            autoComplete="Phone Number" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required type="password" id="Password" name="Password" label="Password" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            type="password"
            id="Password"
            name="Repeat Password"
            label="Repeat Password"
            fullWidth
            autoComplete="Password" />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="I agree to the terms and conditions" />
              <Button variant="contained" size="large" color="primary">
                Sign Up
              </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}