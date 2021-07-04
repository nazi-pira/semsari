import React, { useContext, createContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { userService } from '../../reducers/user.reducer';

const useProvideAuth = () => {
  const dispatch = useDispatch()

  const { user, isAuthenticated } = useSelector((state) => state.user)

  const login = async (email, password) => {
    dispatch(userService.login(email, password))
  };

  const logout = async () => {
    dispatch(userService.logout())
  };

  const authenticate = async () => {
    dispatch(userService.authenticate())
  };

  return { user, isAuthenticated, login, logout, authenticate }
}

export const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();

  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(authContext);
}

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useAuth()
  if (!auth.isAuthenticated) {
    auth.authenticate()
  }

  return (
  <Route
    {...rest}
    render={(props) => (
      auth.isAuthenticated
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />)} />)
}
