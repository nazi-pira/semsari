/* eslint-disable no-console */
import React from 'react';

import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Container from '@material-ui/core/Container';

import products from '../data/products.json'

const useStyles = makeStyles((theme) => ({
  container: {
    height: '20%',
    marginTop: theme.spacing(9),
    padding: theme.spacing(3, 6),
    flexGrow: 1
  }
}))

export default function ProductDetailPage() {
  const { productId } = useParams();
  const product = products.filter((p) => p._id === productId)[0]

  const classes = useStyles();
  return (
    <Container maxWidth="md" component="main" className={classes.container}>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Paper className={classes.paper}>
            <Grid container sm={8} direction="column" justify="space-evenly">
              <div>
                {product.title}
              </div>
              <div>
                {product.description}
              </div>
              <div>
                {product.created}
              </div>
            </Grid>
          </Paper>
        </Grid>
      </div>

    </Container>
  );
}