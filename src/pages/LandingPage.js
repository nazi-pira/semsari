import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container'

import ProductSearch from '../components/ProductSearch'
import ProductCarousel from '../components/LandingPage/ProductCarousel'

import heroPic from '../assets/heroPic.jpg'

import products from '../data/products.json'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${heroPic})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  container: {
    height: '100%',
    marginTop: theme.spacing(0),
    padding: theme.spacing(6, 6),
    flexGrow: 1
  },
  contrastText: {
    color: theme.palette.primary.contrastText
  }

}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container component="main" className={classes.container}>
        <Grid container spacing={3} direction="row" justify="center" alignItems="stretch">
          <Grid container xs={12} sm={10} md={9} lg={7} style={{ height: '60vh' }} alignItems="center">
            <Grid item xs={12}>
              <ProductSearch />
            </Grid>
          </Grid>
          <Grid item xs={12} direction="row" justify="space-evenly" wrap="wrap" alignContent="space-between">
            <ProductCarousel products={products} />
          </Grid>
        </Grid>
      </Container>
    </div>

  );
}
