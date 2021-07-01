import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

import { registerUser, setMessages } from '../../reducers/userReducer'

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
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.user)

  const [name, setName] = React.useState('')
  const [lastname, setLastname] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [city, setCity] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [agree, setAgree] = React.useState(false)

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
            onChange={(e) => setName(e.target.value)}
            autoComplete="given-name" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            onChange={(e) => setLastname(e.target.value)}
            autoComplete="family-name" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="email"
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Phone Number"
            name="Phone"
            label="Phone No."
            fullWidth
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="Phone number" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="city"
            name="city"
            label="City"
            fullWidth
            onChange={(e) => setCity(e.target.value)}
            autoComplete="shipping address-level2" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            type="password"
            id="Password"
            name="Password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            type="password"
            id="Password"
            name="Confirm Password"
            label="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
            <Checkbox
              color="secondary"
              name="agree"
              onChange={(e) => setAgree(e.target.value)} />
            }
            label="I agree to the terms and conditions" />
              <Button
                variant="contained"
                size="large"
                onClick={() => {
                  if (password === confirmPassword) {
                    dispatch(registerUser({ name, lastname, phone, city, email, password }))
                  } else if (!agree) {
                    setMessages({ error: 'You must agree to the terms and conditions.' })
                  } else {
                    setMessages({ error: 'Password and confirm password fields do not match.' })
                  }
                }}
                color="primary">
                Sign Up
              </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5"> {messages.success ? messages.success : ''} </Typography>
          <Typography variant="h5"> {messages.error ? messages.error : ''} </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}