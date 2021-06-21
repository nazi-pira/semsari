/* eslint-disable no-console */
import React from 'react';

import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import items from '../data/items.json'

const useStyles = makeStyles((theme) => ({
  container: {
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
  },
  box: {
    flexGrow: 1,
    backgroundColor: 'red',
    borderColor: 'red'
  },
  paper: {
    width: '100%',
    height: '100%'
  }
}))


export default function ItemDetailPage() {
  const { itemId } = useParams();
  const item = items.filter((p) => p._id === itemId)[0]

  const classes = useStyles();
  return (
    <Container maxWidth="md" component="main" className={classes.container}>
      <Box height="100%" container className={classes.box} alignContent="stretch" alignItems="stretch">
        <Paper className={classes.paper}>
          <Grid container sm={8} direction="column" justify="space-evenly">
            <div>
              {item.title}
            </div>
            <div>
              {item.description}
            </div>
            <div>
              {item.created}
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
      </Box>
    </Container>
  );
}
