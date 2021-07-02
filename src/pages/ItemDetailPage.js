/* eslint-disable no-console */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import ItemDetail from '../components/items/ItemDetail'
import backgroundImage from '../assets/ItemDetailPage.jpg'
import { getItemById } from '../reducers/itemReducer'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: 'black',
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
  const { item } = useSelector((state) => state.item)

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getItemById(itemId))
  }, [])

  const classes = useStyles();
  return (
      <div className={classes.root}>
        <Container component="main" className={classes.container}>
          {item && <ItemDetail item={item} />}
        </Container>
      </div>
  );
}
