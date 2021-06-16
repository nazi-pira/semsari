import React from 'react';

import Grid from '@material-ui/core/Grid';

import RecipeReviewCard from '../components/book/RecipeReviewCard'
import ControlledAccordions from '../components/LandingPage/sideBar'
import ImageAvatars from '../components/LandingPage/ImageAvatars'
import ProductSearch from '../components/ProductSearch'

export default function LandingPage() {
  return (
    <Grid container spacing={3} direction="row" justify="center" alignItems="stretch">
      <Grid item xs={12} sm={8} md={6} lg={5}>
        <ProductSearch />
      </Grid>
      <Grid item xs={12}>
        <ImageAvatars />
        <h1>
          Are you done with the subject? Pass your book to someone who needs it then!
        </h1>
        <sidebar><ControlledAccordions /></sidebar>
        <RecipeReviewCard />
      </Grid>
    </Grid>

  );
}
