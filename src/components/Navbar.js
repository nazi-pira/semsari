import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    '&:link': {
      textDecoration: 'none'
    }
  }
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h3" className={classes.title}>
              <Link className={classes.link} component={RouterLink} color="inherit" to="/">
                Semsari
              </Link>
            </Typography>
            <Button component={RouterLink} color="inherit" to="/signup">Sign Up</Button>
            <Button component={RouterLink} color="inherit" to="/login">Login</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}
