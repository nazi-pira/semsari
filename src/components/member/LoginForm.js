import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link as RouterLink } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

import { ValidatorForm } from 'react-material-ui-form-validator';

import { loginUser } from '../../reducers/userReducer'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 3),
    borderRadius: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function LoginForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.user)

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = () => {
    dispatch(loginUser({ email, password }))
  }
  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <ValidatorForm className={classes.form} onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          autoFocus />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password" />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me" />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}>
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link component={RouterLink} variant="body2" to="/signup">
              Sign Up
            </Link>
          </Grid>
        </Grid>
        {messages?.error?.login ? <Alert severity="error"> {messages.error.login}</Alert> : <span />}
        {messages?.success?.login ? <Alert severity="success"> {messages.success.login}</Alert> : <span />}
      </ValidatorForm>
    </div>
  );
}