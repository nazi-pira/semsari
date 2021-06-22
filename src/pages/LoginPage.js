import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import LoginForm from '../components/member/LoginForm'
import heroPic from '../assets/AddItemImg.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${heroPic})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    height: '100%',
    marginTop: theme.spacing(0),
    padding: theme.spacing(6, 6),
    flexGrow: 1
  }
}));

export default function LoginPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs" className={classes.container}>
        <LoginForm />
      </Container>
    </div>
  );
}