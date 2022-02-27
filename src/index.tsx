import ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react';

import App from './App';
import { theme } from './theme';
import GlobalStyle from './GlobalStyle';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
