import React from 'react';
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
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import UploadButtons from './product/uploadItem';
// import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

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
  }
}));

export default function Navbar() {
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <Button variant="outlined" color="inherit"><UploadButtons /></Button>
          <Button component={RouterLink} color="inherit" to="/signup"><Typography variant="button">Sign Up</Typography></Button>
          <Button component={RouterLink} color="inherit" to="/login"><Typography variant="button">Login</Typography></Button>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit">
                <AccountCircle />
              </IconButton>
              <AddShoppingCartIcon />
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
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
                  <Link className={classes.link} component={RouterLink} color="inherit" to="/">
                    My stuff
                  </Link>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <Link className={classes.link} component={RouterLink} color="inherit" to="/logout">
                    Logout
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          )},

        </Toolbar>
      </Container>
    </AppBar>
  )
}
