import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './data/store'

import { ThemeProvider } from 'styled-components'
import theme from './utils/theme'
import GlobalStyle from './utils/GlobalStyles.css';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme = {theme}>
      <GlobalStyle/>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
