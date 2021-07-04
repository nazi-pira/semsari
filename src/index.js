import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';

// Styling
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './App';
import { store } from './app/store';
import * as serviceWorker from './serviceWorker';
import { ProvideAuth } from './components/auth/ProvideAuth'

import customTheme from './theme';

ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <ProvideAuth>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ProvideAuth>
      </ThemeProvider>
    </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
