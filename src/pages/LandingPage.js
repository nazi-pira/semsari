import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box';

import ItemSearch from '../components/ItemSearch'
import ItemsCarousel from '../components/items/ItemsCarousel'

import heroPic from '../assets/heroPic.jpg'

import items from '../data/items.json'

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
        <Box>
          <Box p={{ xs: 0, sm: 3, md: 15 }} height="60vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
              <ItemSearch />
          </Box>
          <Box marginBottom={1} flexGrow="grow">
            <ItemsCarousel items={items} />
          </Box>
        </Box>
      </Container>
    </div>

  );
}
