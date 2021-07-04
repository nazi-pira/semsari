import React, { useContext, createContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { userService } from '../../reducers/user.reducer';

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */

export const authContext = createContext();

export function ProvideAuth({ children }) {
  function useProvideAuth() {
    const dispatch = useDispatch()
    const { user, isLoggedIn } = useSelector((state) => state.user)
    console.log('ProvideAuth - user:', user);
    console.log('ProvideAuth - isLoggedIn:', isLoggedIn);

    React.useEffect(() => {
      if (!isLoggedIn) {
        dispatch(userService.auth())
      }
    }, [dispatch, isLoggedIn])

    const login = (email, password) => {
      dispatch(userService.login(email, password))
    };

    const logout = () => {
      dispatch(userService.logout())
    };
    return { isLoggedIn, login, logout };
  }

  const auth = useProvideAuth();

  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}

export function PrivateRoute({ children, ...rest }) {
  const auth = useAuth();
  console.log("PrivateRoute - auth:", auth);
  return (
    <Route
      {...rest}
      render={({ location }) => (auth.user ? (
        children
      ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }} />
      ))} />
  );
}

// function PublicPage() {
//   return <h3>Public</h3>;
// }

// function ProtectedPage() {
//   return <h3>Protected</h3>;
// }

// function LoginPage() {
//   const history = useHistory();
//   const location = useLocation();
//   const auth = useAuth();

//   const { from } = location.state || { from: { pathname: '/' } };
//   const login = () => {
//     auth.signin(() => {
//       history.replace(from);
//     });
//   };

//   return (
//     <div>
//       <p>You must log in to view the page at {from.pathname}</p>
//       <button type="button" onClick={login}>Log in</button>
//     </div>
//   );
// }

