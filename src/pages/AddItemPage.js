import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';

import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(9),
    padding: theme.spacing(3, 6),
    flexGrow: 1
  },
  input: {
    display: 'none'
  }
}));

export default function AddItemPage() {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.container}>

      <div className={classes.root}>

      <Button component={RouterLink} variant="contained" color="primary" to="/item/add"><Typography variant="button">Add Item</Typography></Button>
        Add Item Page
      </div>
    </Container>
  );
}
