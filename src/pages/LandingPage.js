import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';

import RecipeReviewCard from '../components/book/RecipeReviewCard'
import ProductSearch from '../components/ProductSearch'

import heroPic from '../assets/heroPic.jpg'

import products from '../data/product.json'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${heroPic})`
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
          <Grid item xs={12} sm={8} md={6} lg={5}>
            <ProductSearch />
          </Grid>
          <Grid item xs={12} direction="row" justify="space-evenly" wrap="wrap" alignContent="space-between">
            <Typography variant="h4" className={classes.contrastText}>
              Are you done with the subject? Pass your book to someone who needs it then!
            </Typography>
          </Grid>
          <Grid container spacing={4}>
            <Grid xs={12}>
              {products.map((product) => {
                return (
                  <Grid item key={product} xs={12} sm={6} md={4}>
                    <RecipeReviewCard product={product} />
                  </Grid>)
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>

  );
}
