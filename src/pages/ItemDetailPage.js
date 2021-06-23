/* eslint-disable no-console */
import React from 'react';

import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import ItemDetail from '../components/items/ItemDetail'
import items from '../data/items.json'
import heroPic from '../assets/ItemDetailPage.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${heroPic})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    flexGrow: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center'
  },
  container: {
    marginTop: theme.spacing(0),
    padding: theme.spacing(3, 6),
    flexGrow: 1
  }
}))

export default function ItemDetailPage() {
  const { itemId } = useParams();
  const item = items.filter((p) => p._id === itemId)[0]

  const classes = useStyles();
  return (
      <div className={classes.root}>
        <Container component="main" className={classes.container}>
          <ItemDetail item={item} />
        </Container>
      </div>
  );
}
