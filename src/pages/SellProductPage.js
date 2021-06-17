import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    marginTop: theme.spacing(0),
    padding: theme.spacing(6, 6),
    flexGrow: 1
  }
}))

export default function SellProductPage() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" component="main" className={classes.container}>
      Sell Product Page
    </Container>
  );
}