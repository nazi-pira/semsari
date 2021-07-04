import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Styling
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


// Pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import ItemDetailPage from './pages/ItemDetailPage';
import AddItemPage from './pages/AddItemPage';
import SearchPage from './pages/SearchPage';

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ProvideAuth, PrivateRoute } from './components/auth/ProvideAuth'
import customTheme from './theme';

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <ProvideAuth>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="/profile" component={ProfilePage} />
            <Route path="/item/view/:itemId" component={ItemDetailPage} />
            <Route path="/item/add" component={AddItemPage} />
            <Route path="/search" component={SearchPage} />
          </Switch>
          <Footer />
        </Router>
      </ProvideAuth>
    </ThemeProvider>
  );
}
