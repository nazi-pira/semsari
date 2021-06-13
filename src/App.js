import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Route, Router, Switch } from 'react-router';
import './App.css';

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <Router>
        <BrowserRouter>
          <Navbar />

          <Switch>
            <Route path="/" exact>
              <div> main page </div>
            </Route>

            <Route path="/login">
              <LoginPage />
            </Route>

            <Route path="/signup">
              <SignUpPage />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </Router>
    </div>
  );
}

export default App;
