/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ItemCard from './ItemCard';

import { getCarouselItems } from '../../reducers/item.reducer'

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

export default function ItemsCarousel() {
  const classes = useStyles()

  const { carouselItems } = useSelector((state) => state.item)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getCarouselItems({ sort: 'created', order: 'desc', limit: 20 }))
  }, [dispatch])

  return (
    <Carousel
      responsive={responsive}
      infinite>
      {
        carouselItems.map((item) => {
          return (
            <div className={classes.card} key={item._id}>
              <ItemCard item={item} />
            </div>
          )
        })
      }
    </Carousel>
  )
}
