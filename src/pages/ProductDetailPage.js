/* eslint-disable no-console */
import React from 'react';

import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

import Container from '@material-ui/core/Container';

import products from '../data/products.json'

const useStyles = makeStyles((theme) => ({
  container: {
    height: '20%',
    marginTop: theme.spacing(9),
    padding: theme.spacing(3, 6),
    flexGrow: 1
  },
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
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
              <div>
                <Chip className={classes.chip} label="Extra Soft" />
                <Chip className={classes.chip} color="primary" label="Soft" />
                <Chip className={classes.chip} label="Medium" />
                <Chip className={classes.chip} label="Hard" />
              </div>
              <div className={classes.section3}>
                <Button color="primary">Add to cart</Button>
              </div>
            </Grid>
          </Paper>
        </Grid>
      </div>
    </Container>
  );
}
