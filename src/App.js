import React from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router-dom';

// Pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import ItemDetailPage from './pages/ItemDetailPage';
import AddItemPage from './pages/AddItemPage';
import SearchPage from './pages/SearchPage';
import LogoutPage from './pages/LogoutPage';

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { PrivateRoute, useAuth } from './components/auth/ProvideAuth'
import { alertActions } from './reducers/alert.reducer'
import { userService } from './reducers/user.reducer'

export default function App() {
  const dispatch = useDispatch()
  const location = useLocation()
  React.useEffect(() => {
    dispatch(alertActions.clear());
  }, [dispatch, location]);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/profile" component={ProfilePage} />
        <Route path="/item/view/:itemId" component={ItemDetailPage} />
        <PrivateRoute path="/item/add" component={AddItemPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/logout" component={LogoutPage} />
      </Switch>
      <Footer />
    </>
  )
}

