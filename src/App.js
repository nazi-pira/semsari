import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container'
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignupPage";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import theme from './theme';

const useStyles = makeStyles((th) => ({
  root: {
    height: '100%',
    marginTop: th.spacing(0),
    padding: th.spacing(6, 6)
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />

        <Container className={classes.root}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </Container>

        <Footer />
      </Router>
    </ThemeProvider>
  );
}
