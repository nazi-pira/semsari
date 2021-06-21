import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as RouterLink } from 'react-router-dom';

import ItemCard from '../components/items/ItemCard'

import user from '../data/user.json'

import items from '../data/items.json'

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    marginTop: theme.spacing(0),
    padding: theme.spacing(6, 6),
    flexGrow: 1
  },
  icon: {
    marginRight: theme.spacing(2)
  },
  items: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    marginTop: theme.spacing(4)
  },
  hr: {
    margin: theme.spacing(5, 0, 5, 0)
  }
}));

export default function ProfilePage() {
  const userId = '123';
  const classes = useStyles();

  return (
    <Container component="main" className={classes.container}>
      <Box>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Hello {user.name}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Something short and leading about the collection below
        </Typography>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button component={RouterLink} variant="contained" color="primary" to="/item/add"><Typography variant="button">Add Item</Typography></Button>
          </Grid>
        </Grid>
      </Box>
      <hr className={classes.hr} />
      <Paper variant="outline" elevation={2} className={classes.items}>
        <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
          My Items
        </Typography>
        <Grid container spacing={1}>
            {items && items.filter((item) => item.user._id === userId).map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ItemCard key={item._id} item={item} />
              </Grid>
            ))}
        </Grid>
      </Paper>
    </Container>
  );
}
