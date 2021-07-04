import React from 'react';
import { useSelector } from 'react-redux';

import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';

import { useAuth } from './auth/ProvideAuth'
// import { userService } from '../reducers/user.reducer'

const useStyles = makeStyles((theme) => ({
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
  },
  input: {
    display: 'none'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}));

export default function Navbar() {
  // const { isAuthenticated } = useSelector((state) => state.user)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const auth = useAuth()
  if (!auth.isAuthenticated) {
    auth.authenticate()
  }
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h3" className={classes.title}>
            <Link className={classes.link} component={RouterLink} color="inherit" to="/">
              Semsari
            </Link>
          </Typography>
          <Button className={classes.sectionDesktop} component={RouterLink} variant="outlined" color="inherit" to={auth.isAuthenticated ? '/item/add' : '/signup'}><Typography variant="button">Add Item</Typography></Button>
          {!auth.isAuthenticated ? <Button className={classes.sectionDesktop} component={RouterLink} color="inherit" to="/signup"><Typography variant="button">Sign Up</Typography></Button> : <span />}
          {!auth.isAuthenticated ? <Button className={classes.sectionDesktop} component={RouterLink} color="inherit" to="/login"><Typography variant="button">Login</Typography></Button> : <span />}
          {auth.isAuthenticated
            ? <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit">
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchororigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                  }}
                  keepmounted="true"
                  transformorigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                  }}
                  open={open}
                  onClose={handleClose}>
                  <MenuItem onClick={handleClose}>
                    <Link className={classes.link} component={RouterLink} color="inherit" to="/profile">
                      Profile
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link className={classes.link} component={RouterLink} color="inherit" to="/logout">
                      Logout
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
            : <span />}

          <MenuIcon
            className={classes.sectionMobile}
            onClick={handleMenu}
            open={open}
            onClose={handleClose}
            anchorel={anchorEl}
            anchororigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            keepmounted="true"
            transformorigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }} />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
