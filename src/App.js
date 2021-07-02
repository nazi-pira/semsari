import React from 'react';
import { useSelector } from 'react-redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import ItemDetailPage from './pages/ItemDetailPage';
import AddItemPage from './pages/AddItemPage';
import searchItemPage from './pages/searchItemPage';

import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'

import Footer from './components/Footer'

import customTheme from './theme';

export default function App() {
  const { isLoggedIn } = useSelector((state) => state.user)

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Router>
        <div>
          <Navbar />
          <Navbar2 />
        </div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/item/view/:itemId" component={ItemDetailPage} />
          <Route path="/item/add" component={AddItemPage} />
          <Route path="/search" component={searchItemPage} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
