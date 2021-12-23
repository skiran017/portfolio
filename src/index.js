import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
