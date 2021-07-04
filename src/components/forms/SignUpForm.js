import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

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
import Alert from '@material-ui/lab/Alert';

import { ValidatorForm } from 'react-material-ui-form-validator';

import { userService } from '../../reducers/user.reducer'

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
  const history = useHistory();

  const { messages } = useSelector((state) => state.user)

  const [name, setName] = React.useState('')
  const [lastname, setLastname] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [city, setCity] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [pwdMismatchMsg, setPwdMismatchMsg] = React.useState(false)

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      setPwdMismatchMsg('Confirm password does not match password')
    } else {
      dispatch(userService.register(name, lastname, phone, city, email, password))
      history.push('/profile')
    }
  }

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
      <ValidatorForm onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name"
              name="name"
              label="First name"
              fullWidth
              onChange={(e) => setName(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastname"
              name="lastname"
              label="Last name"
              fullWidth
              onChange={(e) => setLastname(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              type="email"
              fullWidth
              onChange={(e) => setEmail(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="phone"
              name="phone"
              label="Phone No."
              fullWidth
              onChange={(e) => setPhone(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="city"
              name="city"
              label="City"
              fullWidth
              onChange={(e) => setCity(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type="password"
              id="password"
              name="password"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              error={pwdMismatchMsg}
              helperText={pwdMismatchMsg || ' '}
              onChange={(e) => setConfirmPassword(e.target.value)}
              fullWidth />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  required
                  color="secondary"
                  name="agree" />
              }
              label="I agree to the terms and conditions" />
                <Button variant="contained" size="large" type="submit" color="primary">
                  Sign Up
                </Button>
          </Grid>
          <Grid item xs={12}>
            {messages?.error?.register ? <Alert severity="error"> {messages.error.register}</Alert> : <span />}
            {messages?.success?.register ? <Alert severity="success"> {messages.success.register}</Alert> : <span />}
          </Grid>
        </Grid>
      </ValidatorForm>
    </Paper>
  );
}
