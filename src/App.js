import React from 'react';

import { ThemeProvider } from 'styled-components'
import theme from './utils/theme'
import GlobalStyle from './utils/GlobalStyles.css';

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <GlobalStyle/>
      <div className="App">
        cosdsadsa
      </div>
    </ThemeProvider>
  );
}

export default App;
