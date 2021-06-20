/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ItemCard from './ItemCard';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(1)
  }
}))

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 650, min: 0 },
    items: 1
  }
};

export default function ItemsCarousel(props) {
  const classes = useStyles()
  const { items } = props
  return (
    <Carousel
      responsive={responsive}
      showDots
      infinite>
      {
        items.map((item) => {
          return (
            <div className={classes.card}>
              <ItemCard key={item._id} item={item} />
            </div>
          )
        })
      }
    </Carousel>
  )
}
