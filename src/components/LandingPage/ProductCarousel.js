/* eslint-disable no-unused-vars */
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  carousel: {
  },
  item: {
    image: {
      height: '20px'
    }
  }
}))

export default function ProductCarousel(props) {
  const items = [
    {
      _id: '12345',
      title: 'Bike',
      description: 'Great bike with retro in stryle.',
      imageUrl: '/images/uploads/bike1.jpg'
    },
    {
      _id: '56789',
      title: 'Antique phone',
      description: 'Antique phone from 1820. Great condition.',
      imageUrl: '/images/uploads/phone1.jpg'
    },
    {
      _id: '14554',
      title: 'Armchair',
      description: 'Armchair from from 1710. Great condition.',
      imageUrl: '/images/uploads/armchair1.jpg'
    }
  ]

  return (
    <Carousel>
      {
        items.map((item) => <Item key={item._id} item={item} />)
      }
    </Carousel>
  )
}

function Item(props) {
  const classes = useStyles();
  const { title, description, imageUrl } = props.item;
  return (
    <Paper>
      <h2>{title}</h2>
      <p>{description}</p>
      <Button className="CheckButton">
        Check it out!
      </Button>
      <img src={imageUrl} alt={title} className={classes.item.image} />
    </Paper>
  )
}