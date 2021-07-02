import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles, withStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { Button } from '@material-ui/core';
import ItemSearch from '../components/ItemSearch'
import ItemsCarousel from '../components/items/ItemsCarousel'

import backgroundImage from '../assets/heroPic.jpg'

import items from '../data/items.json'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: 'black',
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
  },
  hr: {
    margin: theme.spacing(2, 0, 2, 0)
  }
}));

const WhiteTextTypography = withStyles({
  root: {
    color: '#FFFFFF',
    padding: '5px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    margin: 'auto ',
    width: '300px',
    borderRadius: 10
  }
})(Typography);

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container component="main" className={classes.container}>
        <Box textAlign="center">
          <Box p={{ xs: 0, sm: 3, md: 15 }} height="60vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
              <ItemSearch />
              <Button component={RouterLink} color="primary" to="/searchItemPage"><Typography variant="button">search</Typography></Button>
          </Box>
            <WhiteTextTypography variant="h4" align="center" color="primary" gutterBottom>Recently added</WhiteTextTypography>
          <hr className={classes.hr} />
          <Box marginBottom={1} flexGrow="grow">
            <ItemsCarousel items={items} />
          </Box>
        </Box>
      </Container>
    </div>

  );
}
